---
sys:
  pageId: "253da3bc-6297-8089-a208-f7fd19bf3125"
  createdTime: "2025-08-18T09:34:00.000Z"
  lastEditedTime: "2025-08-20T08:10:00.000Z"
  propFilepath: "docs/Guides/intro_to_SSH(for jetson)/basic SSH.md"
title: "basic SSH"
date: "2025-08-20T08:10:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 191
toc: false
icon: ""
---

[**What is ssh?:**](https://www.cloudflare.com/learning/access-management/what-is-ssh/)

SSH lets us connect to a computer through the internet. Its useful because for the jetson we don’t need to bring a monitor+keyboard everywhere we go. We just need a laptop and a connection to connect to the jetson. It is also useful for wireless setups so when the robot is moving so we can still be connected to the jetson.

## SSH command

{{% alert context="info" %}}

Note: make sure you are on the same wifi as the jetson / computer you want to connect to (for Rose students you may need to use a VPN if your off campus)

{{% /alert %}}

{{< tabs tabTotal="2">}}
{{% tab tabName="Linux/WSL/Mac" %}}

in the command line run:

```bash
ssh <username>@<ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}**example:**{{< /markdownify >}}</summary>
  
```cpp
ssh admin@192.167.188.15
```

</details>



{{% /tab %}}
{{% tab tabName="Windows" %}}

Recommend solution is to use the VS code SSH extention which the **SSH with VS code** part of the guide goes over.

Alternatively you could use [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) and select ssh in the connection types

{{% /tab %}}
{{< /tabs >}}

---

{{% alert context="warning" %}}

<details>
  <summary>{{< markdownify >}}How to get the ip of your jetson without a monitor?{{< /markdownify >}}</summary>
  
Follow this guide: [**Connect to jetson using USB**](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_sshfor-jetson/connect-to-jetson-using-usb/)

</details>



{{% /alert %}}

## How do I get the ip of a computer?

run:

```cpp
ifconfig
```

and look at where it says `inet: ...`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NSZD5W%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfyLR5HS5CE3UpHEPmgl8ebFZnbbU08qFFmd%2FFtEivVAiB3kGa%2F%2BvHYz%2BkVPtpbkdSfZatsc2iGwEdwLNGkxM9XUiqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FOKEKP8JbAZ4FztcKtwDxrklLTkz11c3gqaDWZQZvC2z3rJ4cPPlShCOzbjIahwJufN2kgLEyaZLFg7gHyD5JvoS2aFwj2voA1kzmPWujsQlYCtmmgUWBpJlpD3cdBEs1koIqIJTfxqJFsr7CY6IO%2BR3A82yfjiXZK%2FfFnRBj5Qa2TeDX39zUD4SX9QHEZNqTmhXSgmIWyoIqg%2F1I8RMwuqRYpkeEU%2FUmQTHf0bkzfnUSkHP7X5Md5H91hqSgdQCoIXiMeTbYJr8R4i6FeiiTBT0pi%2BLxqKxjZ650WRxMgJtKojsjMIKoblDYNgNEwimSYt7h%2F3wU3q0rbUDnVpviS73Rn4KCDOmEJlmTz%2BHWw2NN0dO9%2BBGSXng9oF9jFKrkBhGVSa%2FIs%2B%2BAOzQ05wOdOEH4kZNdLxMb3RMaUIbcX2LAFXrLOjf%2B%2FIRZ5HJIxr1ad4pUXs7bTAZLvrraGtJ1WH5UrCrb2lsQ8wLui%2FNPs3KUfM%2BFMS8OJ%2BS33j0J6wpc70c0ZBdcjfVeYH6BUVzR2UfSYKn9dVxjRAqIqyd33m4ZhNz70aRmikaiW4SbsgVIsk6f5lGzG6nUCEYr5DMbCv2PvPUNaYfEBbES1Hb8TP5x9utO0%2BEjGKhWQPyAJJIK%2FyCdmiXY5oY%2FiYwgdbw0gY6pgEwCVuHEJjKxAlEoIVbuP1O2XHDeYgNK%2BMauzuhNfAENx01JW2991%2F9Ke0%2FtF7eryT82eiiqCEq5jgPUZ0ZnTOzEZSSamHS6KANQapsokqR7Zub0my4BJyss7rIA2iD5vLIHSLm5l8Pn6eGMUT7bxgGY%2BSKIl4XarCEZCTjYQtIqctpQD6%2B40gexlsE05wPfdqB9G6t1vOFBWs4LAngNumWSFAJWS8F&X-Amz-Signature=72e9b66825afe7313893cc4761879866bb67d9da9d2f38bed756808776052d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RRFI55%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFduZFVPVUQov95AWWHwNLS%2FACzOO8wKse9kSbT7w7bcAiEA03Jv7LTCa%2BfkXq3BplD3NnVxdCGYeIJZaXRRAwdQKKQqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPL%2FLfBtFlfF%2BaZnFircA6dLH%2FrzREfvWXjPhpVgud9f60BzyuiE%2FKPuVvdr%2BvzMVS9xsAGS9aNnUUKlR%2BuEgkb7XTs1rt%2BYC8dJrMzZbNUMTf%2FsaDfAi1eSCEFd4V5mMit92%2FRxataaG4sLcJLFusFs%2FiJcJQ0MbyxgPxFqPqtQiArC7qDJAl9Kc47j5tWgzeeki931ny1v9JpeG28oLo1nCImHWBnP0Ji8Qg5kIfWCmo4rYH%2BlODKBl4pTsOz6J%2B6VV%2BtV%2BXbbuMRAD%2Bn7NDEqL%2FIPDecsu0HhPGXiXBhNFEhQXl1p25%2FCgPTh2WMoGjMLLvcR9HFDGGKHfBuHt8VSqFeM2YHB0i16IQ6HvGJMc58cN8Kxx0mjRiKBBj9ck%2Bdi17tRUmORso0qcRbQSw2xhmheA4hqIXm6vzb4W%2FX3rHM4OeLyfH3DB9HjhIU6UxZW28bAMmkzF6T%2FxB1brTwQ5y677ixL0T1VAFv5X0CYodETSU441WPk4gYiE8WXqwvNnToMY27hjBRw6R89OKUaRxcrTJEojq5U4SQCwD5qI2RJFR8%2Fy8SO%2Fc66fMlrdrYrGff8q6LKF7j4V4aAkarMG0PlEku5jh0XOckzAwCeqTdwb00P3Gx1z%2BQWHs%2FvoSFI2N4v4HjFSS1ZMIrZ8NIGOqUBgfpnv%2BvGkykf%2FtrjcRqlV%2Fr2xE03bVzZilt6CzrQu5LgSyjCQVY79vqiC0EH9R52vmhdMR4uDjFaIL0%2B%2BaDdwyJZhs1RkSWvVuSFHhhxwH5lsSxzUqGgyOFMFpkLzRYUPdlbbDlaQrJlyVA4VzxK67lXN2euEnQdeJ5qDSA1Q%2FArL%2BHCoI2bjh231M%2FZPj5lmyNmzNMFMm8ivcZ8kMjOMG7FfyRh&X-Amz-Signature=b7d65d76c44bd023f0de441843651f92b6097f10f394651d3fc4031df2c93412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</details>



If you get a response then that likely means the computers can ssh to each other

## Forward windows

If you want to see a window pop up in your program over SSH say for example an OpenCV window of what your camera you can add the `-X` flag

```bash
ssh -X <username>@<ip of computer to ssh into>
```

you can test this by running `xclock` though the ssh connection and see a window get passed though

## Tailscale

[official tailscale docs](https://tailscale.com/)

Tailscale is a vpn that lets you buy pass the problem of always getting the ip of the jetson

---

## SSH with VS code

[**official guide**](https://code.visualstudio.com/docs/remote/ssh#_connect-to-a-remote-host)

{{<youtube "cOopQQIL8JU">}}

I recommend ssh with this method so you are able to edit files and not need to use vim or nano. You are also able to open multiple terminals this way too.

Another nice feature is, if you saved your workspace, every time you reopen vs code it automatically tries to connect via ssh.
