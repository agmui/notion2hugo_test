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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377QYGCF%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIAKvsCWAbUU6CYo48qldl8w4FnV0bzJne5syfcRChb4lAiBq02Kf6RqfQvogZE0NK3KZ9ZGBCxA79j%2BIxNb5JObvLSqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHrNZRKo%2Fs%2BYjzXdOKtwD86lVZPqcWbU82PvL0CiyGJ%2B5klRwAEDEFOFoJHW8rFkXs7MOtolmgBsqm4YMN88UxYKY1sDET0d1aoOtciwpHVZgTOhXTm0Tif3XcvzhyKFpqZFa5swVx0aK0tval%2BYwp8ZCBgP4DxFggPCpwv1t926aACqkMiiVOGZ%2FnHhyqi7cnUyeB6D%2BcDkPl%2BUZOicFcGxDWR85Qs1%2F2XgF%2BAOrVStsjEQ5N72ddQ%2Fg%2FS6zSlbeIlaO0cH7untEx2IfWJ2%2FWSnW2%2BlSVLs66%2BHH4ZBrqaeBp%2Bq25taLHrkZqJltuOhScYb7eu4nNhjlob0BFOgDzrMweLzGgdXuneitbJRloag%2By%2F9aZnJzmOlPBCkqMrmnbk4N%2B7HvN70D9mhM8ssW2yufIdiv7hdjma4Wen7iQeG9%2F5QnT1n83ktFd2eC7ri0j4fUJOvHdE%2FGXVzpqaicWi%2BrDLDkKY%2FMtpHWJyZ2ZLCBdLCU6KYsau4OlYzkTuX71GqLo0oalZEq6fQ7wM9IU859eQaMJJTQJRY1%2FIkW%2BDtAyTrneb9Kj966b1ixZMKp0drHEUeU%2BBWi%2BDTz%2Fu2Fazjf9QdKwknUnHfef8J%2FVXpXDBTfBsN98Q9wPb%2B2Ze1VzLRgMfCxvqw8afwwnPaKyAY6pgHzteTDUp%2FZZbnqy5GuNMc0MpJKjivpZmrPnyYw079dg3Gwdlj%2BqicPVJbA26Kh8ODMcubUzJC7jkadZEuS2nE8gUbePViunYz7D%2F%2F485IzVALlQTk7L0KVj%2Fn6X5OeKcnvMT9Z8gL7p70N7GoBXTFHD4F8uGo0J%2BseqQNRRz5lHYbUjsff7KqHmoymFh2yKo4vD90TWqNMFuEVv75ygb0X7J2gwlzB&X-Amz-Signature=6c027654f0a4569499bdffa09a08fbfb7598b87152fc8eff88fa2853bb1d3eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJJFMSE%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIBPerHr0AEXbEzS%2FJlqJy0ca50ZZGbpNztIw6fo%2F149SAiEA4Q67ArVfgEBSzL0NU%2Bg5tKtL5h%2FOBbVPy2h8gdku%2By8qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOqeaFFILP3RWplxSrcA%2B4YX0Z37oeb5Csice33As0dML1V3eUHw0yBKj9Pt1gLDn4iXamOvWFazHMIifOK95QZgsRXg9R0w3AfCv3oP6QeUdPClkzQBv2U%2BxkUoygvmEToN5YW4ri7ZwFf6RkGQwXEMFP3Tk%2F6gs%2FPm55HRoq%2FeUo65XHrBcxchGV9x13fswEayOfSOCjnp7hjA9F0kxiMkmJ%2FQnDZUj3rc8G40Ly5n9T1f9CXxt1YTfBNccc%2FrVYbNpJ6DKGXJDebiRm7Q9meKWcuj2CDpWCrFvuN%2Fsm77bB%2BbO9VL%2FY9qtGJgpQCyBpswS%2FUhOPEX0Wjaj2VpLXfIpq3omAOUC2yhTuAVJ2WszQHxOHe4nPGdBE%2FaJAYQNqtO%2F9V1HcGzlFaFm3fjvIYSjAjmryTzZQzsXLdo9slCmWXsr84b41ZIKOXd4kuw9AvxCc4aMG1XmaxOw%2FHApGUcLogFh6Y6iEAm0SthvYAMpa10JhebNQFWP1vHADSjjpu3TvKezslaRWMfuQmn4qYe0Ks9P4plYNwDbGE9ErjPX5x3XPkYNBvXs0tGRy3I3oqfH4Xt8p0co0qm6s4VQ9Y0ocyY%2B48Su8%2FpGhgw9dEN2b%2BWfbq00r1j0P2cqHvmM2lgcr2F9PeFKi6MKz1isgGOqUBqEtUr3vq6B%2F3dGXrbQdDZiT%2BZMnSy3Os7WemRGLjfaFUL8pLDJNkArp2Mt6cAaaW2cLAewfq0BozgbAkPldYf46wywQl7rer%2FE97DEAPZNClHrNPB39hsNmWUeGwHJhM%2BXyYfXL2tChcnB6QG8YXWsT7%2BOVIqLwUOncspry5CIL4ZootV6vT44Uy%2FyTU7AUr3hBK%2B0gi4Zj2bxUnTgNn%2BErdOJOG&X-Amz-Signature=1c8fccb7d5012f6d99c93e51939d4da6db172501270dbf1d00835aaf8a7a912e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
