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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKWFATYJ%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID1w3MfwLGxOQ8Gjj0TmNtLLBBwyTprOk6z%2F9%2F6I2JIFAiEA3xYrNmgaWO6fjoGitNY2slu4yX6Z8nptUmTKfKvNdgMqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIvwvhDy07StwdF9hyrcA8XdZ6SiiqESydZB7yuajcBYm3jnMSx47s%2Fgjmc%2FuwtcLvwRF0yTon2MzfnkGy2%2Fnj1qHgRbY%2FEkSMghTRvmGtj0N5Tu5BFNYhj%2BiBDBqyXUCFkiZObO4RrOx5AO65Ly5KgdV5mRwF8Ir8WdgvAvktd%2B9LS5cDc%2BmQBw4BsFuAz6YIxsEu%2F7yhC83L2zg18UDJYTM1AGLGz45f6t%2FBdxUc5hgkaKz%2BDEg%2Bn9RTddt9dOSUVF382GgrqaWZY3DXlT31YlpfSl5t6ZnI628DX5tAOgsmEEctEv0o244e%2Bfz%2Bt%2FWs2HqI%2F1suSZYHt4Pd9dv%2F8EAwcq8Jmdr3f7LNgQiyvkyKYZvTyqNXLYOoSLncEGScXiZBlvmYNOf64SUaqBGXAQSct9UE%2F3miYDZcXCVvKh6bRbBD5TPEFIlHcyeNEOq6PJNL%2B0JDk7k%2BQOtam0MFdr20zGM8ej%2FcnaQUKm2e%2BMAIbWS%2BmyxhEV3dIgxuD5R8QrDZjn7HkS3Qc3qUGBMlQbonwmkDfJp80hgqNnEhRoqv5JysvltPNZ8412N3iVUhjS9KjE2zMcUNNjgkzLM2Trv1Ju16RoLIS8Aet%2BRTWFYYJaywoaT3%2FmW04NyJRP%2Fmg6FUGllJInu1y4MICXtcgGOqUBSoTCnL3P7zUpox5S7qZ6pwhjlFlrPAekTKAu5qjC3OFFa7Bp49JgoaqSp3b34KdWhehjC6%2FnJCutRvQtUNjckPA1gsmnSErjbnjQ%2FyIS6EhB%2FTy2wPXqwK2h%2B7%2BhgPShobIGyz1t%2FIi5CaxllEZHFdimdmMYcCE3KK%2BOFoCDC7OAy77gFfKSOJ1VuEJGDAtpATli3X%2BTUDPdULPWDLVSysl3ogA1&X-Amz-Signature=11076e56757092cb882bb0adacbb89b2f49b54ca0b75565d0bda9d545622d1a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWMJA75R%2F20251107%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251107T013808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEqc7V7ihLfa9yOcT2q5bPVgl%2Fkda6urJuPLaI7J2EBgIhANU%2F%2B0KRpMJGTI36mHFX9FGt4pTohynNmT7%2BS1U369qCKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywSD1bszP6nxthf%2Fkq3ANiL2e0%2FbfxdUEgx799oVt9XfyFaX7Hs3diGYIoN6yl4EgzjOLSbZvCD0ZRJc%2F%2B0oG%2Fn98lhcY7zXyGu5UOdvd6twnYGYaZIsj8hcTnN5QlHetBo6bhY9qn4UlEdoIC6W9X6aPLyaSsQUgu4C8pQVLOITi6vQhvg5A1CB%2FoRv9U5IA4Qn0cgzHNpTwa8eiM6Bb4BHgBW1TGgS8nRbCTiv6Dw3bQHVkM2fNrEG%2B6slABCJ5eADmB09fXWQUVLlXF6%2BC8nCgzLs2waq8zDeebBbg1mS1QPzRQ7aAfLaBuUZ6sMtpMkvJvEEQqVfGYYbJnk7Mg%2BuG1TomfYApDAtdNr578Dm9LhU826nqq35pl2Kxth6jyCr5VnKhMDfr3c9%2F1sKVcPzpN6E3ZxVvpcl6JEEnXm7ki3FlS94ktnS%2BSFUeF6bcUTvoxUQyckD%2BsI5tDg9YrD76od5aB4GfyzB%2BxSCtDnwBFYpHLbKi0rTKMuB%2BNcr4y9J4q6SHs9lWuBRq9hx3MOzTV3Ry6bVYs6Ov%2FvFLT5XvSywlU85qR9IfIm9isVGHXpRhHbFXOiX5Y%2Butxzwx48yYIyBnDxkR1dRInBql0LoErbVm%2FeZH1QEgjfdg6sr5AbWnD%2B%2BpafvRM2TDIl7XIBjqkAfcf4tOtRYdoA8pFZjrVvQNaAuhWakdzUQhcxQYpWzLgk1Sk0yCyUPUlCIMweshsoA0MhRWRzYUHwwLkruE0p5nwk46ia7xxLeoLrr1JyWmTK%2B0cbGqaaUUuwo36YXp2uWtcXNG2EwOYONvW2Atn5zk%2F9Xlzgik03UiDcBW%2BzKrLzMo0Ff0zCKioDpNgbJg6nXZQol7SjhDk6x88xhGUraPIePae&X-Amz-Signature=9e8269d5dffb1f3f9635c71a60dac795bfbeb983ae7bf54d423547b303e6196c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
