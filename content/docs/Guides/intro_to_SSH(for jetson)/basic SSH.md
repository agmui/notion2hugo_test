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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OM32UGU%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDpeGAtEI82je2BpxXmkblT9QbSZuKVoQPY7gayoo8IAIhAKAiFjhO3MyDl9dxjiwvqRy%2Bxpjvia9%2F8iN9FaRgSBehKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzH7055P%2BeXXnO1EMwq3APBxFrNFZkqKI4Zr3lBsVSw%2F1yVMspHaSzUauPKRaqmcOWhHfLCvN3t2XnW22RDTM8SJ%2FPSrNx1v3BsG4MluNgXTrjXrPk2oCJfmunXih%2FCld8gN5TtcGJAD3luSdj%2FcQRaEOF7CHDcJNlYD%2BYjgDknvXT1pXTlsg6SDGPN9oFZnH0jLKb1MLJNVxIKDT3%2BxIcN3pvtzOCOE%2FwnVe9n4kuHDT5jcYcnPvQziRdpD0wQIr5mkvUuxri7%2BgymjfnAdWfExYlwtqgdQZuexGmlnfZ7bBSGvQ5pm5qgotLtno6fBbHSly5ib6qTkWDx83nXmc%2Fviqs3jOUCD5sYsFJPfKpVsVAumzLRNu1i8shQPinibxyqZHAzyjKoa0CLTk9We540Nea3gLdNjVLVJU1jFmfZLy%2FYI9l5K39LdqtSLmNKzOOyAsuYDff%2F0JnrNV3AscXa6jY6gtlsLMpKPeXDT1ByASx9fviA8gmM%2FWiBSvR55Sjq%2FEDnUcbfpQJ5pIdBsbcFd0UEJSzrLJnGUXcQ0DFfis95NhA9pXHVXvZmfXCdN7Tlm7K7aiSYrJDdE2FCAwCPNSnMrJ9OFJkQInPjYOCHw7oj%2FE3EkMWGCYLxubMik5N1MJc46R86VvoOdzCsp5bFBjqkAQNKPp6xIkZodnJn8S%2BKsB2ILpjXHGaySChrSwhHpFbWJ7FApRJjbc1xODm36kzQNCk8PM%2BWjimQ6atGjqISCVPGlsIZhGl5qt8pu3J27l14MQxifrVI3fOE0aIWbtvd6LOK6FS6%2FVHPqJmIYrIw%2ByKB9Ym%2BY0M5kVw2Lo33dzpGQ%2FkfHKLqB00%2FGqAgBNqlPKU8l9eGjZbwmg8W6ajw0UfleL7K&X-Amz-Signature=9746b1859b570c3bd420bcd6e017b7733c8b31864816184e82833587b32c0a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLHACVXW%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBWf0INBBqU%2Fb9lHV85ncXzQyMsx95DPE04ft4gPzihAAiEA1HMQshHxLrOec8pXk9ZxH%2Bw3wW0N0%2Bq%2Fj9p4klOJP6cqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsJuMp%2F1Rnm8NuMNCrcAwzUb%2FuRFYv831oT52zDLkO%2BBd85wYcAaDeBZrz8T2FU%2Foz6%2BTrcqJWtUUr4f07It90FkUGHuITUppAc03n6S7aAQ8I9Q4aUrtU594I1t7%2FJnAL2y9MSkfH3UNgft0qcz0t%2Fe42oAE5KwTuQPj8Jdhgpi7S83qjHJTDPJjBXafQ6WmI8zroZFbDSJEZE1uzZlBkhAG5m8sOszJ%2BhBar9DYlZ%2BtYS4f1iyKcdGlOSbhCJVf0KmKILbOzZQDJDXNpk2gYsu6htnDoBGCpO%2FgyiJZTc3Wqn28TGLlzNkA2kxHB02%2B9hunkY7Oi9hTapDN9y%2BmNKmA0BKQv4z9chaokqm1HTcIUhIR%2F7XdMIrU9u8ZTYlbHx2txO4QaNPdaW%2BQOj9fje4jSKvG%2BCA%2BMsuxjbH7HRkzRxDL7iKyUpR0xIE9xGTp4zqz5LbxIsrz6p%2FmUZG%2BzITbhZPNY6DgvnN9zcwA8ArQjup4K6%2B43NqHFfu6Y60NFH8Nlg6NAE53cYn6jolx45NwdOHPSpvrWArSXytYdi%2BUt9LEtmh8FtKMTI9cYS8SYFfzlQARZz%2Bq0IByOK05fgPU3J8W8VrKrvzihf%2BUAM%2BhXtSfCuJP%2BcooAggbfwvrhWxDEqhI40t4znMJ6mlsUGOqUBkepvQTSxBj9LsVUq6jse7Du0SVqhcflLSzNgVm27Z%2B0vr6J%2FX0s%2Fw4sJIvS82CrxUjWdeG6OCI%2B%2Fv4%2BZl%2F%2FRk3EtHQeZUIRdGiPzTDubBkwBeftGgGwmleeR0FMCzXci2nzspPliklfemZcE%2FRcVMVrKftTSRgYa8ScxPuK17O8sspdFqNSXjxjqVY4hLWrCq96ceFkPPT6BlU71iKMwvQDM%2FXsA&X-Amz-Signature=71a620f88c7b768cb3eceb31e40cfb843ae0d7c061f457c676e8e7213477fa1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
