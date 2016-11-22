nrcloudcmd
==========

A <a href="https://github.com/gbrault/nrcloudcmd" target="_new">Node-RED</a> Embedding Cloudcmd into node-red adding the following features
* A directory browser to node-red
* A file editor
* Cloudcmd is integrated as a middleware
* Can be enabled/disabled via the interface (some tuning still needed) to avoid having this feature widely opened
* Integrated into node-red ui as an iframe
* All those features implement by a single node-red component

This design is possible thanks to
* [cloudcmd](https://github.com/coderaiser/cloudcmd)  thanks coderaiser from Ukraine [email](mailto:mnemonic.enemy@gmail.com)
* [node-red](https://github.com/node-red/node-red) thanks Nick O'Leary [@knolleary](http://twitter.com/knolleary) and Dave Conway-Jones [@ceejay](http://twitter.com/ceejay)

Install
-------

Run the following command in your Node-RED user directory - typically `~/.node-red`

    npm install https://github.com/gbrault/nrcloudcmd


Usage
-----
Setup a flow to integrate nrcloudcmd node-red node (use flows.json)
![alt-tag](https://raw.githubusercontent.com/gbrault/nrcloudcmd/master/node-red-cloudcmd.png)
Open the cloudcmd dashboard ui
![alt-tag](https://raw.githubusercontent.com/gbrault/nrcloudcmd/master/node-red-cloudcmd-ui-1.png)
Enable the cloudcmd manager (click on reload frame)
![alt-tag](https://raw.githubusercontent.com/gbrault/nrcloudcmd/master/node-red-cloudcmd-ui-2.png)
You can now browse the node-red associated computer, under the account which started node-red
![alt-tag](https://raw.githubusercontent.com/gbrault/nrcloudcmd/master/node-red-cloudcmd-ui-3.png)
An of coures, you have the cloudcmd associated console
![alt-tag](https://raw.githubusercontent.com/gbrault/nrcloudcmd/master/node-red-cloudcmd-ui-4.png)


