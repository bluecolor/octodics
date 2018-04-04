---
id: doc1
title: Getting Started
sidebar_label: Getting Started
---

This tutorial shows how to install, configure and start octopus.

## Preparing

- `java` is the only dependency if you are using the basic configuration
- Octopus uses java `1.8` you can get it from [here](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).

## Download & Install

Octopus is a portable application. Just download and extract the archive file.
That is it. You are ready to go.

- [Download](https://github.com/bluecolor/octopus/releases) the octopus
- Extract the contents with: `tar -xvf octopus.tar.gz`

## Starting application

- Start the server: `cd octopus` and `./octopus`
- create system user from the `octopus shell`:
  ```
    ssh user@localhost -p 2000
    # enter password default pass: 123
    su -h # help for su command
    # example
    # su -m c -u system -p system -n system -e system@bluecolor.io
    # username: system password: system
  ```
- open app in browser and login with `system user` that you created in previous step.
  ```
  http://localhost:9090
  ```

