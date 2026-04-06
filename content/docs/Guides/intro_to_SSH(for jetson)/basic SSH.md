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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIGASAVH%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDIrx5TMAzPGSjok5WFlReSk%2BR9fVOJauNJkd02%2FE7gbAiEAke9%2FdVsg0jmyk5llr31GA%2BfyiesUMuGxTGRMq%2Fb9qbgqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCkuJ%2F8hFBfBmONwuCrcA9VAWd6aVRKdMX43JkLpgvihVCgd0XDLQocH%2F8USNa5YuSPqBctBpOCHJGPRSAlqYKZSwLSe2qbo7oA3EWiWv7rPgtSnXWDOlpsQBsF08vPn%2F1D%2Ffyy1N%2FJGumAVHuFrNA2adz8tY5glIPcvyHqbQW5bOP6C3RNK7GkuJg0KixxtX2%2BqG0U1kgN3%2BJGPg9Dpzzsn6QgL50VF26snrnjK7%2BU907ExzoJp%2FpoH5w6GjFQ7lWs7k9ZIW1d%2F2ckItN%2Bg8MULK0sUq16BDYtFRzfqyRxC4GDD4BUFqkv7IVbGzOgAcoQppeEzVz6ANM13JlpWw%2BxOJT5X%2BSIieHI0VM3rEaqh0mQ2Goug3R2WCU0WxXeVHpXTWLgINDSmJeEriqOs4Q3eceHhJZQFudWZVflttg%2BnRTfqCzOSTpVxfYihhVtw78S%2FQscHDnWRUNBS7eg%2FAw9%2F9gKQEPCU86t6jNDfp5w6hA78ABs6OwGh0fP9TOZPJvv%2FHsoMG9lHYL7NFHOxknf3UQPDl7UkSDy64aUdG1Kr0gSr9kfRawvyi709ePuaKZmLnmFmTpUvwkivi%2BgwrhB2cZRuv6GcebEgIJ29DcuzYxf%2Fls%2FbVtSwvGsPISf1gPZDg5sCFFoXHVOWMJ%2ByzM4GOqUBFKAcWid30%2FVK352XzO1WRoh9adYCEAxA6JJLvoEtV9xWRYNR2mK2G73ICuhY4FUnAVUatm0fzNXLne3gQfTvK%2BAlBA%2FintUbk9LJftYCLCf%2F0kdkn6ErP7Ss6iiO5%2BeKmXyGATM2q7E2YC9jJ5atgrAUWJNjBrd9Hihw2jP%2B45kCmey77uVBM8UPT3AjKc9MslX%2B8JThYpZ7ouOyk2HUvmRnp6wS&X-Amz-Signature=3c612bc0d03d6fa67f271f0810e4c3e8e1c5ca09fb03e8435ba3c5dea4e17c49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWWDXXCJ%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxfEixGxZC6W4Mufk0feCDHid3F4GnsEzn8UejSpYTbQIgZbZOjk73YJYaBH1BKPgbHeGaviUzp1yTLCvGYx%2BZoBwqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZF8DaTxLUt7iqURyrcA0psRA4KkPnTO%2FgdIf2GJFwZbHa7PylKoVg7XUExIFHOc8eFNlcBGer8eMDvt5rEkrEP8AcF7vnz0EPyx79C66AaPsu7vKR0v8749hEnmAVoNxAIIjjap7CIMq5JmIE21YtwxTfJ4yHad2aspR857YwYRaM6Y3o%2FgKS1eY6uDd2s9s6kvobmeKiBnW1B9ZkFsWSxfvbGSIMeYhmHcuHTaz81QMfHTl6QloV467WNFlhvGL3AhuZABYIUFZzLywvWwCPLu%2F7Y1pLMB70B3jIj6ZPFhIIyaTmqRIuMOsfgxSfI%2FnI0Oo%2BorB7W7tz0cYbxzMhK%2B5AX1WYbMcrD0yecu6UQZFWw5VXdGx6wA6J8DR%2Bb5Vp1153w8hgjnXnJZTcyWhyk%2Bkdx14OLsX7f1N672XRwNTxqM%2F2e84yDwravWvTrI0trSeLsyGGAGcR0tncGTnzJVbtDuK6ECUg%2BcfIPjDZfZVWB30L7upiAeXdwVzqGzwsd%2B%2B4QNxz%2BMttd6HHmSoYxsaHXPYWWxwRLQV675xVqkLKz5fjbUq9AkjL1W9GFFxvXo8Dvu1Dx87u0tDKX0chSGbGBb%2FNC9KGAjja7rzZjcT1IWpGPRgJ5Red%2BrPyXNYY0BZVh7NgBuOoDMI6zzM4GOqUB74hRe8sALA7eqB9gPc2Xv%2BcOYEVo2a8tAYpKTkdY4a22R8UpNpqjV3t3%2BSyUFt2L9KLJSnOci8AtpMT29jjdql6UDVLeP%2FAfwAHriPdOJOCyaABGXJpArU90gCY4AKNQZXUbThmLQAt9%2FDV1HZ0SjH6jnOL2FnbbfLVc6C6teSVVEMZKcbdYlpwz5HSsKJld38O5nIh1xkksk3X%2Fj%2FSAp8gr60oF&X-Amz-Signature=91877a27ea00748619a6edfdc544d074ae9659db7e71066f9f3acd83eeeb6784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
