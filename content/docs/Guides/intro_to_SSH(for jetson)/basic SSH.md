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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GSRB5RQ%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCICnXJdK5RksStH0PWWhlH3xjVC4M8yvT74Zutnp683w%2BAiEAyRAyvuA%2B7OCrYwJp02CPVDHb6c6U6V5OiP3CZrcAI4sq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGC7P40vjDJ76MCNISrcA8obklBYPJy2JVqfzzEMECuIIZFUFVr2W%2BHjTpCRAhiuIcdtdn4Ctj6TDHm6ja3%2Beld5RFUhYw09TkKi%2BebMrs5BpZCq%2FpP9fd1fOoKhAiLRbUpUg1sTyXOwsAvawby9AvtFnQ137%2FWBDU1dxEgriNmGWuSpLQ%2F6o7e930h5WMvjak%2F%2BKNxC2DqnJdw1Ezug%2B5c94NgrXiV3mYI0foQKmKUKYnbjwg0qmgOYFnENiauP7R39XNVgCLNftinxGQQk2GOLD7racjBroFpZwId4T0IGlmLZ4p1JNh8jmc3SgS2uK6mqPh%2BA%2FfAN%2BUnmPAPpuCJPx8W3MPWVmJsEAGNTDhODjCuTZ1qAD43GhBnj5kMmLLlwkqZAowtZfMX2aU51ugcMvcuQsFuL4Z9MG4qRhM3lPdCH4lM1H1DJxIrHvxLQ837W5LW1jgFVwdLof%2BS81KYPNahjf5WlnDLqMwIh1wpV15TYPZVv1V0qCwvSYc%2FmL0hKCmVwHUtdMmd38FaUUua2GyWgbTprcJk3StTQpTpMNOyCEGWyPHkyLPEZvcBCZzGBE9UuB0GuLCPNEg9K6Fxtlr4a5Of20hvtczjwd6%2BT9gVrV9gi%2FRJIWSxiENmLWS9KRBzBWEuckzfyMJOridQGOqUBnRplf6kosEzN3ncNMJZMKePIQZbNKESUllrhb%2BYcKSjlwwNq13i8cOdbyJ%2Bk9e5ylO4KQ1BT7iAgHHBU9HffqfYVNNBCl7dLtGRAJpIk%2Bl%2BP0gJBU3MS2hVQJaYv%2B6AUnUALUtJt1zv1N%2FAUp1Hmy37D%2FbJ9mdc%2Bue%2FY4dxumIy5apcJ0JMdO3oyePjKZZ1Gtui3iwBrOMIxRNbdKP5R%2FuefpTxy&X-Amz-Signature=3ea4328b4b86f883f5a143af97321df43dfcb3cb982c2c4b0d9bfcc77d41cce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEZADKIX%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDZOQsm%2FeRYpqaRUiNHAjsUCZPeBeiHa1cdl%2BBmxAf%2B1AIhAJQ3Ts18dRKde6emSerolQV0yI%2FEU%2BVVG4PU6Tcy8%2BUyKv8DCDoQABoMNjM3NDIzMTgzODA1Igw%2F4mVvMnmpsIZS3Yoq3AMmhP6pTHQrtABQjdEHu7IFv%2BQx3gKQ6WhaKw9TMFJw8vrB%2BOVb2qKECVgIcoLL78cXzMmue9joJqZyg9WiTz7C7sMq4QekPnTeEDNXrZEMkNloLi4I58GYOoLfwFsP4FGuXAl9mV6v%2FLse3D4WuKJ1hfVXJJ%2Fwez02crLUOl9IRQcm0PLJpbsLAFCZenMbKx7j7K1y3DJhRvxzcSUA5eDrVTy3g55wwQQQnLOeVQ6VqRq%2BaYJajcDATqaWB1J6olwsQ0nGF1Kb5ybPFp7mvdoF7fpip9PTzB0laQoFBXbg04bJJHwfLmcwu4fSTI0Hy36kkyKZopjVKSHVxEbVQF5OTuFfrBZvLVEoI0WFPFbruZ2GiT8lTVy8K4fYF6q3sAsCJtVTg5Y%2BiiTcWQtkCqV3WeCbJBAZB86fxr2Ul0TOk3u7kaW%2FPg1Bb9i%2FSGTulXh6BRSPFInhuQbdiiLx9MadieWT0sH9Vyw5a9s6H5lro7tUaqyKRGUeY3R6o2tXwQAzd%2FRWl0JYsAVxTmlUpE7xeusczk2ltf%2BvGFA%2Fl0O3%2BRZsvYnLGP9DQ6210FhbaliqGu4d5gsB8Dm23%2F0zGuMd36x%2B6xtUSljcGU39Fg8dBSG%2BB1njOpLs1VGpMjC8rInUBjqkAXoSlsPfdZ2hTDoc0QpXPwKFYcCfP1P8v9cXz%2FkTIqAVbvey19kCYOwz36tbArqAsMHuDhUt58J3GVoINzvguqVqGvld0I0BauJMjFm0DLV%2BuQK%2B6QwAQKqyvyZUEaQc%2F%2Bn8ayIfV5OFK%2FMP20A7aagSCBpuimJh9DwN7m%2FC%2BkNd4IvFKbrFJAYqV5%2BSYlo3PFuwioZtHINC2FoN%2FlsQrGQR%2B2WP&X-Amz-Signature=db15895323d008a4bbb63cf8c5d2481c00911bd05be5978543bf773bfe14faec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
