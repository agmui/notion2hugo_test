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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU57KBZ7%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGu34iICodWoLkiDUil78ctW7w5p%2FeDgxlXEhmEFeDMRAiEAiIfWO4GfaunBbWe%2Br83OBUGEC3rmp5PDkFvwMlih9wYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCzT5QOp9ZPo1QuudSrcA7ggKMp8NWymyK2y86fcGBFF7CVjSuHJY66LY%2BEvG3mp1UepK4hi1b%2FU1PbV2CFQh3USlKmC6DKczlkvTheA43OXCG5JRrCaLnWqIx3rB2NluTfXj2I6nqBAeggTaLyiBUpUgtlnchr%2FcIl3QHNM%2Blxzs1mi81YjI%2FuU0l404RoYYo2fj66ITAomrZfDDvv15I5k8YLqvzmTXL3EPl7yibQNK47hwS9vGKivpqORVIoGIikNFyyiQ3EhlpYtQmUEzfKtCQfGCk%2FrSMaObMysx%2BQzMWJvfsH5KpgREYJuYMP82U4YqaN4rj8Z7CWXBOKKNxUVInQR0KQrM%2FKScktcAk3E5KwmOjDsdX9Mp3ymWmmk%2FsbNh28KqQOMd97y16izb6Za5xkLPI%2Fjc3mCs%2Bopz4Feg%2BrxhdF8Ywr%2Fc8OMiqcdilQTH4sScMeDFwY1C%2FXUWqO0LKsB5C1o0i9sRiPfh3GhFsGgquQVSyrL0SNYQ%2BEjr8be%2B6fSQZ2Zx9PbAvk2Hj1wVvLTAo1bkxEZrOB9%2B7NdQ6gRC%2B5UjdolAG1xM5BI7RLmj2yStWOCL6SoNRwgViIopZixkbB38%2F5Wim40Zc0w9q%2F2iaDsbeJxMjrnnrMYKhHkyq1THEWzp4OhMPCc68oGOqUB6eV6Amp27HdN8Y1RLTLjjlGFVnxAYj%2FTkX3icE4RBEYf32DmxOazMoOOkzsm1Y%2BhlldJ1Zv2EGwT%2FeXawsrKdpUG1O2m%2F5Jk0r1v1U6s0t69mdhQ8HTPQlMqtgBFuA2%2FpI%2FIFzmqQCTvYvxpifG1rfpO1mdqSZVkicosgFIeS4uSjGfyj6xnPXKASjzC%2B7%2BAnPxlUeyuCo9J67CL23rIBEswx3gg&X-Amz-Signature=ab9d7e919c9cea937b69bed996f37868228d06eb4bd4f1ded24865d3c53c3e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ23ZP7B%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFsu1bLXZXHGvbuqacJcSbd%2FA1Q46o7yZ1PFbE%2BsYLcAAiEAqWKSfuHI%2BOkm%2F7mMWOSoJRN7kDmp%2FLMGLOsQMlyB1wwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDB0mLGeOrNvyxq7g4CrcA9UbtVGI7Ho0I7cgcBHDhaNfRjCUJevtW3GaNLVwn2sgCjFcx3F6zjSne3G9icmiROt7XFnzAmG8hgRH4pBsBeaqx5gxlTDVMANVhSomcXXwLKdkN83%2B%2FWIAuG36utrnN6KFUW3XRDEyDkYsO%2F9rq0xS4FaeVJAITdgPJjZdM%2BMV1D1aLB8%2BqRPon99jdbJO5mJNVbx38zTyWkskj29zPQdZzSX687NXej1c3iQsSBFOyPm8hshk%2FCfNZkUGQj0r%2BHJz42TSeEUzK3gEZK5Rj0U7tFRUtwt6SqZkAoa%2F6zSD1IUTcxio6ytIaJdGYDu4QLLk0x5DDVCR9ayYltsFKpQY51L5EfT61F8b8nKtil%2BXb3qsEox4rzukF69db0DZ1RB4iQ78Cli%2Fg3Jhk9js%2F0TN1aHB00h7Ty3y%2F2uRnklraiJTqJy6qBJ0NPTEoQ%2BKR3YIT0zP6VMdAt8erPzlByaEfXlpumbJynZpZrnORgzRu7uAclkASeypcci1nJoz5HzgWwwsI3Q8x7Tg4dnQaLc1p7GHe%2FdK6%2BIBi9nJk9UBUg6qdweRKvAo5W6jXXQbR5wYpp48jxDYMs21IeyfMnlEDG6LNSicXYtKiGd3azpWqs0pkNymakw0Y8J7MNG068oGOqUBHLlUYr9WJ6jfdXw1PtfF%2FFiRbAW4BKPIBTkzws4OG6%2B7o1oQyDeX7rctPNkgWMV5Vr6R23bSyU1xOWN3dGKjidb%2BuzwBoghxZMbBuQHQfk1GAhjodIuKVP4DQkWsy4%2FMkBm0sY2i15Dedh4ja%2FKIGtHPd3W%2FwTdr8ljuyRQaHTvtVq%2FF6iQ%2F56TZivdYpX9IU9DWnZovFlbwDQna0nmm2hvAotIj&X-Amz-Signature=51bd9eacd8121a4ba5cc4afeca855e0dc61b5a331fe8dcb89c3c1aff3320cfde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
