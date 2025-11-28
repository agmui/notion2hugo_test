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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YNC2BG3%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDS7Vyh9yyD2GtuQgAsvYAUkeiFnhs24XboHkmpJZPMWAiEAmOo736UgMDNFlmU0%2FSxRv05KdgAGQEYpL8p5%2FsLuTygqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFc1tOzzc675XDG0zCrcA%2Bfm6X17MnTl3P5dB0DModk2SP%2FX3NiFNrMXuWiU%2FuhmucFi5EcEhKBGH%2FX3Ph1%2FUIbxcCCHSB8oKy8hAqLND6tR%2BktJdqjM%2F8R0cL2XlEKb3nDaPkeFA3K0L%2FHzItr%2BjGyqYm8j8kNaUe6ef%2B5bwW%2BsOiVj%2B5LsQMGHxIEPEFhqkonh87f8ct8AfXq5lvIW9Su7x26EQo2F%2BAgKiJ8AazDPcwn2b98NMZR8e5X8motuJXbd05BZkGRX7sCvLlx9gReeK8u2saKQcmJ7fbMM35LFG8IsgG9nV8p9IK5QS9zXv0GTjkc1WTUtsFYZSH0KsF95D1zme%2FA0uLzU2be4S0iEJUHnK5kL5LL7QKcOZNOqJ5JAWCwLUHcAnESusnPDwbwBEuVU50CfSynEQbEt5zAWZzLUgCErWlH26VcoyQyM40NvrRsJ4xe7pu6MOaE3h%2BMhtKTyd0LmJEIyA8NEnLXk%2By2w7KQeh%2FiTlDuuAHbKorS4jSoyKsw%2FsWJqcYYgxup28q6zy2q7fuHGYshdK5UL8mF3ckLDG17%2BNPBPJCzXIA8CC4ocyMHK5HXUarSHcGoTukEHke3XC8qRGAa4Pf64YzsRPsMHXK2Pi8AY1jSo6nmj0gVHNS8znlUmMNHYoskGOqUBVmMlRo7Btzl%2FYfdDKHKyNdZqhNfBNZ5DVI2orIab%2BAHBEGHhBTbaZdwWceVDAm9NHTpwwIh%2BQKawFz6saa0cp4j4%2F7%2BkPDxAkNyEP5cZ4o4HVDMpleaUZ5rqqM53vOxFwYDfumuzePWe86ilLHXnwu%2BX6ToLw2J0bLkYcd3XfMC5E2ceGfphJ%2F0mFTc28V5YykFqMpl0o1tEXRhoVkSbW7oGngBE&X-Amz-Signature=8f1ac50ad72f1df45b8a8437f3ec814086ed19cf94d2a8b45508cb59b58739b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNXVWAO2%2F20251128%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251128T012841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaYdCGyx%2BEYcNEovCDwdC5DdU4tpnbRZ%2FklrY0SQrt%2BgIgPTqhPyepGu9yxC6EyaMfzVQqXplnFjbMDQEBbjPJvPAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5uuTsj7%2BNMc6JpKircA0nmL97ED%2FFx3zUu0HPbRPTtlCawRU0qnTMLw39WWm1mY7RulwViwIMyuTaeiXVBTFFLsgCGBajpJFNNXlsz0r2YDh4TTpeRoWWl9acMwB5CdKsxd251DlW1uqEBFct%2F4hAj9HCXJBTGZkhhI%2BnMk76VAhfUixp6vdLx3Sw5pzfOSCd2Mcgk0lVE39LMyGSRlJqMKgtBndy8XD3B3RXrePOcalDPbdOvTJRt5SzI%2BbT6uUKtIS4ewXNC%2Bg1U9Us2IPd%2BfxuC7n2Z3dTL9i1YqccANZhBnyb3Z2pK9tJYV%2BeTNnqz0Aam7O7MocOTJG%2BSQUUbr65%2FIU0Qjl19WTsVI5DOM%2BC1vNdCoEy9dPE8qyXyzfuSB2FThcBmJ1QQjaWG%2BjMsSilZTQbUmcKjXY1YfyNmGvrMG7rC9MTWCYucq%2FiEUf2T%2FIAEr4%2BvpP9LZL7Mw3DP32845rBbW5mb48F6ECgbiadB08tgdzerCdlQXlkbqg20z%2FbGs3011AHnKmhCEmFnXfOwwy%2BKCaxHII%2FaZvJ%2B4xYAJu6gz3A1zOEHRQIsmt%2B0cjszy0neU5jGIECdAfjQryB%2BeLw8mPd7VFWd5FBu4NeXt4HYTtyQf%2FMvWuqTQINLnAlIYVBuVoMhMNzToskGOqUBcwVm9vipkkxkqP5XU%2Bk3P2VAjbOqNR3r33pFTxyb5%2BUv0L%2BeAeZ7roES46moQNnzAS07aERc0v4VrapdeE9m74N8Iv0TuZaD5SlLjKly5590hrLQ89HqQwjOacZOC9UP%2Fcp%2BdXxvIsYuV8IzionHfpaCebX%2Bxfzk36DGfPQnV9LdDb9SA9EtPvaCNapyNsFZvU84%2BwnWG1dJ6hpyJcv48sg5raPg&X-Amz-Signature=5888ae99858549ba03ae03efcffe8416b56fdf047e293a0510f80d76b65d5a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
