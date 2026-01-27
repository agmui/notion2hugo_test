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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEY76CYG%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLRhWx34ifYSoCdsP8%2Bj%2B8%2FkomT64ctfGhZnUVXi86swIgb%2BxkAZ%2FaAn%2BPaeBCPKfiGxWYXUddMPe1pph04I32xjgq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJma1ku15cMvlAwNYSrcA6QgHhIn2b7RQ7JRr9br%2BlsF5er5d9u053F2ozkjQEJ6xGMLskU1suDjb0Npe%2BjNbn3EPFEA3pUzdOVhj5ssR53C3OrroKJlYl82uGiRpjC5XhDE90Fq8kdlptFBNXXt9D8FioPM%2B%2FTwmQSXnJiqZLwT77po9%2B%2BDi%2FhSN9tPUcJPXcIpZvK%2BQF8YUscBN%2FyuOexx5%2BIBQZx%2BSMUeCG%2BcKzPuJ3XHfMgD7tp%2F5IJm%2BNlxiG1wSkX0ZbRcFLykfBinhSnFi3MArKvGvr4m3hThzLWslTx9Ed4hLB7gE2PFrGlnkIYNaJ8a0eapr3cEeyshga%2FVuGKxfdnd6luWa9oANnEKc5rb877Qv0I5WSa4RcYnBb4rJL0YJIVSFHjXtgRMvWMKzhc5ZDm2I9EC7%2B0PWxyx2O6%2Ftu2OJHj%2Bp81buz%2BK9FSaR5ugbsAEViF5KnFwZrXdhR36n0ETvT1XOYJP6WSCmE2XPzXrzQ6ZrQ4KOoBvIAnhWitFEedvAyobNv06h5vmIMS8ZsCI4twMG4SZjsY4Kjrvps%2BMFTD%2BvmnucbXAXYSVe1g4WqSySQEFtOWpAMLCg6kB1flkohKgIggW0ZrfKwbJYWFpesQ4Xrra6mMAjftNboId2HZ3R%2Bx4MK6y4MsGOqUBYUzqB9CloPJP%2Fho%2BYtiEKs7EvlW6DU%2FBE1C%2FPbGMj56qksEIWuAltQsidXbEHd7zU7gfcpyQJSG7Jpi4OJzUBfz6IC%2BR1Z4%2Bx9WEqji%2B2XieDxgcQgKVBUABK1WGIQZrMT5qWO5OYU0EZh08qA1CkCdsKzfaj9M%2BNFzH93i2ftV88d8YNqgv%2FTUBpI%2FD9L7gzkY5wgSE%2FTs6Bhc0SjdCOeguTson&X-Amz-Signature=72ef800f1da1ff524a81519b9884680aa8252768e3a5ee94b57e0d2760771e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7NRKSHD%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNfpKUX2FIy5ygpnrADQF%2Bt8iyZtWuhI05UmWs8M%2FOIQIhAISzZkqrJBi7HanuySpPMkZVwQFrjbB8dlhP7%2FmEubFnKv8DCEsQABoMNjM3NDIzMTgzODA1IgzvcXPAfBG0QGPJra4q3ANpiT9aELhHmtsjchJ9hDbUYZejpiRbKX%2BrFqR%2FsMv7KWLsx%2FOEEgFVPWbarkVWtivX0H2MKKJFRa5D7BlB1tgwtLnmeJblD9e0d1CfYSoKNnTrRULRTR9k0oxH9v%2B4dTnhGwKJKZ2YF1D47ZMpLEsV8iCDBHEskbiF5%2FV59lXTdl1OnG7zAmvQTlLeoQXvDhwYFNBfnbWv2h%2B7MStJLusmD8cu%2FbCw1d2q8hszzb37vy4dbp%2BPiXauyskmtxk3nTxcASf3Bi61DNoK3cJyIgUAisRKfZnaPkwV5iZquXIiSyLB02jRKFTsRth5YJkP07jRjN5iivJqDdmbysdnlM%2F%2FvjttozsVIXFZNAHqF60Hay%2FVKglymnnZx6EJGVJf%2BjD7onohhGheWeCPMbAmjNUyE330RaGsHik%2FOACKf%2Fwge%2BAzE%2B6oC96JyQKYZRyKrgLUBQ%2FvLTGKSmF3IvyNF8bEKgprWrUru1yf0b7COa3oJhZbFsyrmqCbZgXbDQo3wX%2Bqk%2FZo6a33xYv3SYkXPYYTUhvQbuT%2BxVWbNaqjoTUkakcSLFAXf9tcErpXfP21Q0Q0XwrSZ5DpzQnk19ObXyNG9B72tNMsyloiQDoftZSxQjZalIRuIc3gTOAnCDCesuDLBjqkAY43FmIZnSNyJD0LcHdwh0M2G6tcAWd53iVnOJxbpTOmtJ7%2BwHvmrH59sfWaiFmiabwbqEoJ26w5RdmHwKF2NMtww45lEElhTDA5Ax2kp9sW2xYR9TrYc2Uwld7bgkIyyhOHZmd%2BGTQfaNxks2koNBOPdckj1RpikQiFq0BdkyIwhE7CCzRR6We7Y7NNGFyAUPKlYozNPfwBLyoEsSUadOYJAqhY&X-Amz-Signature=b8cc8b1868edbd493aac2de7f92d2cd174e6b1f3614f95b3bdcc6a3b5ebac63f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
