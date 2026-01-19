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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYR5LRKG%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxsYxd8gq4hZ1TkGOluxwIKXxP9V8Slucyu2yePCyUEAiAHnkdioO98oW9A6sQH0w3ou%2FP1ngn5mH%2BevIERqpMgbyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSWfcEZy%2Bc9JeKrl8KtwDGbX8Ad%2FgxHT9R23UYglsKn9ZsFrWruGfizNhQxVbLGeHrXrw4v0XtrT4Q9yVBa3IysakrzLj%2BgmM8G%2BI7cJ1s9%2Bl0nEw1O%2B%2BLsOqgP5wM%2BkXsR00222G3mlT4HaRrGOk2JAIe192aKGI1pgIVaVRLNZrPtTAvlSjbMKFNO9EU67wdbiEhpODMwfHQulcBG6CWLcvrLzCtnhg0m2j6lncBtTyOcdulTtBmR4aDMa4gX0TfoJq8%2F2UfGQEIH8oPBbwLOdJUgVMz%2FqvjTV2%2BA2XIkydOiJl%2B%2BC0%2BXKQ0zKsVWXloqiOMv%2BtMFuKIfwPpbg6MStJoTsZ0P4GpVDO33fxAczwDtN2vetqBUxDZBC%2Fu7EbtyyeZ6sNE3ID7Zv8n09Soewe6T1UOjMa02xtMIp1z72JMA8%2Bpmy78EbZ7QQunSCz189aw%2BtOrdoIS8LzD3nAzWszSER7uu%2BTqmDGMhFrL37uv2r7zBtb%2BBnLEQAGpVBaRFzra%2BFT4qZ8e59B7w%2BFSxK7lvpxIbcYe3qzATJUpY4SGCXFLuaqXNqcFRK5kQTHxWDBOk5Tb9ruOY6ux4l9iFItN3KaHK3H46Bj0RBclkaSmwCz6%2Bk0kENv0xarEMcWkEidVjhn4uF%2Fhp8wmd21ywY6pgGmcSiWNHtp7uPv7DbdIe024p1HmNDTRETVfkT4gfDFHQRAJtyBjp7PgdSfMMDo5a0U0ymXEDMY0ApPm6yf4e8cwsPDfjPF98qnCftJrsNQoKXurcL6DkBAvAINU7bKPYjSCy5kCGXawd3KTIdzrgW8Jk4SW9GGOBZGAk%2FQmHnxBiT2LZ05U9JGjzyV8%2BVUWmazmVbT7dnZMKloHBSXYUCUyfiLGZ%2Fk&X-Amz-Signature=4705bd068f236aafaac1df99e04902feafefa1fc0a42857065c2b572c75e9223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLMYYMJR%2F20260119%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260119T015346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGID50FPdEC3SeNszwr8damw5A0IwUTiY1ZYb%2BFQGK%2F4AiAjoYGY5WbEwff2Stk4MQo7UQxJuSHUMFH2ami6NuiclSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaKYsVmwUaWXtPt0fKtwDURB0uglTuw9YbopufF1dizEaM3TD1GhMzCvGECpFy%2FTThsLe5%2BwqfVTzzqH7aXJ4cCoCGLFWLP2t5sMDXTwLzX3mJSaoe0fAUA%2Bdxu7syBm4fgHqeJdUhyTIAauq%2BM%2BlmB7Ds3vhn%2FR%2FQKHDHNnbAsm3QltpMIB0veevOjuK7PA%2FVFD1UcIlA9HMStQI%2FuZDY3WVwvD82DDwWrq5DbvIj5lFP2yXmW8%2F8toriEgYaSPItrirCH%2BWhMpJUDU3xnRUBjDcAY1eHxPFgK9TIR7e%2BCOGQlucMaGAFF3EffsidmeAcSfPbm0yOZnvkXUdcTR9eUoIjTJURCSVN6SDZV6Iglzd5nFq4Yci4RY1d%2BK0jEyG09FXDT0IffypzEiGUuKRxwnFm4TllJDFLr%2BOVVUms7Xg1nDaqAFaGNDCMM%2BVijAV5f87i8rmVhBjwpdtK9CB81z2r5nsR8qh3IANRLKHZ8y%2FO7Jft592vUYYjo%2F0pUwhju7FxYtW8r4T%2BSdo9Y9Baj5sIZ4wxHSwANJX4%2BUf%2FLGl%2FJPPQHTXPKWfwmKLRpkFGyzVaBDGG6fT0tFyWoxWvfgVHrUcBM56L0e9w8m9AjKG5o%2F5dAJYHxyZBVRzE99aiGo7JVYANJphNuUw3dy1ywY6pgG0AqsKZOH7g0P0GxuZq5WDBbT94rooZjZJ5u1i%2BVLDIySZEfSENWLrFS4RGP5srMYWrm68UZCDGm8ymRiFae7TEawJWquZGZngmX8%2FQ0%2F%2FfgHWwAYRKD2P2qdCqcyXNrCTfl2UApTSvcrwvhlK1UDs3bP4tlMk2lK2p%2FZNvqRLXEzYx%2FmYVEkM6pL2j6e6LY3XvaDR3BjAbLba%2BAAtT3gzpgzwzd6u&X-Amz-Signature=9ae68b09f3e8e8dcdbb6660ab2d4fb92949cc637fa1137cb9c5fdce13021124f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
