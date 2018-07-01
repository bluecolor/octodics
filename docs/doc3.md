---
id: doc3
title: Octopus Shell
---
Octopus Shell is a simple command line utility lets you to interact with the application with a cli.
It is needed for creating the system user which is the first user of application.
Shell interface has a limited set of features but in can be greatly extended. It is small and nice
interface that you can configure using `application.properties` file.

Octopus shell works over `ssh`. Sou you'll need a ssh client to interact with it.
Windows users can use [Putty](https://www.putty.org/) (a small ssh client) for connecting the shell.

## Shell Configuration

You can configure the connection parameters to octopus shell with `octopus.shell.*` parameters in
`application.properties`

- `octopus.shell.ssh.port` : sets the port for shell ssh connection
- `octopus.shell.auth.simple.user.name` : username for ssh connection
- `octopus.shell.auth.simple.user.password`: password for ssh connection

## Example usage

If you leave the defaults and already started the octopus.

Try the following command;
```sh
ssh user@localhost -p 2000 #123 is default password.
```

For getting help
```
> help
```