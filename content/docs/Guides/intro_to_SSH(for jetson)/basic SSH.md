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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD7FMLK2%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDk2CUoJnXu4E696uo9%2BgA55hDcQXOalFiQ38Y3bfXKbgIhAJQi7Ddlpnewp%2B0seRuydFXNgg5Lmws8iUz9bToC2evMKv8DCBsQABoMNjM3NDIzMTgzODA1Igywf%2BP0igSR%2FTkiRSEq3APASiVNaCVT8WRqjWS0p9LqVhTeF%2FTTQen%2BH1AQb3SgHLZ8hTgoGfLtnQa0mVszpHOR5NpaVCyo4OGIDsPoyvpBoS8JW6xQgmz4bFJq9v8yNLJ4W9sAoECUjrW0Ik8LNFZHx6AkQWmg8AY1FSqZH9ysNhD53bEtAFb2IMaBfk7LcOSB711u0CxOdXamkTYgtOFHQO5zM4p1qNK%2Fb%2FApF5QJNL0DFn433KkioRKSKEFKl5s8Iv8F2NafMyytzj9X4bk5WZBDN9xITPspQmiTPtvB6r5DbLQbzuGmMIFuc9lKF7jVFBIxN2b79Z8eV4bqYEPOqv79tWrE3UD2wDJ1Vv452CEkx4uq5mXuTf1v67oFNEZQoHHvejim%2F1voxEZpjW%2BZkh65QoU0m2A4cBoEv4BLlVfepwzofwUSCzwVO%2Fr5RSH2xEhMyCq0GkgyE%2F9yhQBvY2pJk44n0KbuaKZiAWAfA9ugcn3Ni%2FGLiooyK8sPJ%2FudqUcx%2B8FO8klZD%2FyiXnA0I5EbPmKIupSYatM%2FESz3QU%2BHCw%2F0esbrH1FXEs4392TUiL%2FBKKjKXb%2B1MdnLnWcwXjYdNFn96%2FhPxlXanI78YMDdeCjnUgy%2FXqNW2EPNYO%2FnEqR7TtKY41dpeDCg79XLBjqkAZkobB7hs9rtS8uPvJ%2FRWCndtNdeNTpUiHT%2BAVN9%2FGBvlftUYgM3ijA9ppuUhc6ta2LuZnpUUgoGkK8HTg%2BOZ4%2B69cZsswS4EHen3kVNkdLGncJAQoEwqcRQi5TOybBZtXaxGucMUjnCspibOp%2F5uuuf83iIjJ881R%2Fub0FGiYzSF1rIJMSsp70AusrYAVc44C1mAMFC1KMGHxl8tPHP9UoWx5%2BW&X-Amz-Signature=c404af77c124d3d018711570195e9bbb76b698eb7fea079d27b06de0b6b4976f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XVJKVAG%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDQTpQRBD%2FIgV9HdVpJmtWfjfAsXBWItFfMkmAIjU6%2BTwIgDb8dyeh2HTI1xiQHqDqXpR0wzNV6%2Bfu6Mj0ZZIKqSZsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDLNoXmfIDp6hP9bD2CrcA96XzB%2BnUR%2F1K1dJz9cMWKRbB7k1PR4cPC1pReHWtX3XrC%2BotD9uD9r3xnFUtgOId5bjseYcB545RAKHj1uYNGHAAH3tZ4Lg8unaxbZwn%2B0Lg0RyRmpwqnrcI1m2nAnmluYaT8pyulNfkup3Va5yshU9JN23lL3c14COPoGNJ2MQd7OK3jf9bbeY4sP6ZtluG%2FXRtOFlu4qJ3fg7kA3NG3ndy6R3lOwnQ3ux2H7LmSiS1UeXVBsNXUX79u2aNCTsk%2FVjEzaQigb6pVPpgGuGFdQXBhh4D7icB4dezloqilPYBY8WkRRxGglVsYF4fOspe7VWXLvyvmRJtGlHdzMFaz4ycVgQg%2BEsOoqSQ7kzxUwC6YEDOni78i0fi%2F5JJRTYm8mvM%2BSQewIxLahqqxOw0BLpeC%2FSUChRbf8wWLNG7kIozvhTm0DXmbcjPIJ7sJo6YF8eti38Se%2BNEUrcxPYcwE53o4apxyPoGfSgYIsxxD8jWJ2MxBx9EaU5lXgOlQVT77abrmfdLiw7oSd3fMFDudMxDZ0vha0LfUHaA1ZC%2Bh4devww8VoqbDw59%2FKUkOV%2Bdevi%2FGZS6yQx3s0%2BAp0X5fref9v7W4ZOLlY181TVyp9RbxskEZsBoyEhee2JMNjv1csGOqUBEowfFz1C6RyPTjGEz%2BIGc6SUjJAWlotJjfMucfcJVQ8WA4kLOJw3XrqYP%2Bc81XcJBeFJdxUQ1vaiXZW4FEVmN37fjzftmKnHsz2yidV3diO3%2BZ73jvl6ZSJo8DPriSMaikZ7uv0JF%2FGz4EyDyMNe8nIHVwZUwKYpYUyoSy8neZSFDXidX9q3491AyCvGEhnK2CxfbGQBaUWDTPq7RXiNiWgK4ZgR&X-Amz-Signature=12de0aaa20b2ca21301a802e10ff22e9968e41c503502bdd31e500b41d6a01d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
