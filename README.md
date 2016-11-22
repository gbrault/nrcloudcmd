nrcloudcmd
==========

A <a href="https://github.com/gbrault/nrcloudcmd" target="_new">Node-RED</a> Embedding Cloudcmd into node-red.
* Brings a directory browser to node-red
* And a file editor
* Cloudcmd is integrated as a middleware
* Can be enabled/disabled via the interface (some tuning still needed)
* Integrated into node-red ui as an iframe
* All those features implement by a single node-red component

Install
-------

Run the following command in your Node-RED user directory - typically `~/.node-red`

    npm install https://github.com/gbrault/nrcloudcmd


Usage
-----
Setup a flow to integrate nrcloudcmd node-red node (use flows.json)
![alt-tag](https://raw.githubusercontent.com/gbrault/nrcloudcmd/master/node-red-cloudcmd.png)

