
const cloudcmd = require('cloudcmd');
const io = require('socket.io');
const express = require('express');

module.exports = function (RED) {
    "use strict";
    function NrCloudCmdNode(n) {
        RED.nodes.createNode(this, n);
        var node = this;

        node.on("input", function (msg) {
            console.log(JSON.stringify(msg));
            const prefix = '/cldcmd';
            if (node.path === undefined) {
                node.path = prefix;
            }
            var app = RED.httpNode;
            var server = RED.server;
            if (node.config === undefined) {
                node.config = {
                    prefix, /* base URL or function which returns base URL (optional)   */
					console: true,
					configDialog: true
                };
            }
            if (node.socket === undefined) {
                node.socket = io.listen(server, {
                    path: `${prefix}/socket.io`
                });
            }
            if (node.env === undefined) {
                node.env = {
                    socket: node.socket, /* used by Config, Edit (optional) and Console (required)   */
                    config: node.config  /* config data (optional)                                   */
                };
            }
            // This middleware will enable/disable cloudcmd at demand (msg.on==='on' => enable, 'off' => disabled)            
            if (node.middleware === undefined) {
                node.middleware = function (req, res, next) {
                    console.log('Time: %s %s', Date.now().toString(), decodeURI(req.originalUrl));
                    // console.log(this);
                    if (req.originalUrl.indexOf(this.path) === 0 && !this.bon) {
                        res.status(404).send({ error: 'Cloud Cmd is disabled' });
                    } else {
                        next();
                    }
                }.bind(node);
                // Add toggle middleware before cloudcmd middleware    
                app.use(node.middleware);
            }
            if (node.state === undefined) {
                node.state = function (state) {
                    console.log('toggle', state);
                    this.bon = state;
                }
            }

            if (node.cldcmdmw === undefined) {
                node.cldcmdmw = cloudcmd(node.env);
                /*
                app.use(function (req, res, next) {
                    console.log('Time: %d %s', Date.now(), decodeURI(req.originalUrl));
                    next();
                });
                */
                app.use(node.cldcmdmw);
            }

            if (msg.payload === "on") {
                // console.log("should I set route? ", node.bon);
                node.state(true);
                node.send(msg);  // 'on'
            }
            if (msg.payload === 'off') {
                node.state(false);
                node.send(msg);  // 'off'
            }
        });
    }
    RED.nodes.registerType("nrcloudcmd", NrCloudCmdNode);
}
