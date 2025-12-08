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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQEJIZAJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQlbH6dCNhipp1bgxlT7O3Ep10AX%2BSc%2BAzalTAYbRvzAiAGloXkfk6RP6w%2BxzaTJxo%2FztE%2BfjFIsUE0pW8Qcw053CqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnttki15Bfz3mSzylKtwDXSajy6WeD4QRB9g8ewNbG6opRA2YGbintleSAX4hohL0ibExBU9qx0WP1ek65vv922LgINvUWX%2FxWL%2BONendur8rQAxvxsHc6DJ6rUvekI48UKJIUgEn9gRxoeURv2jtf0Xyu9Gjr0U1KPjmzmQlfdezcHpcZknbgm3u5hV1sxJll7VZb7KOPer88x%2FKunsyfYNOnRd11ID28h6pAWFvci%2BYVZkXoVk2bZVR7aad64%2F8IkXaY7O7G7pgj%2F0O%2Fz63xDd%2FLQIscBBxuxXcUGnP7C0KArKIFVMWvLx0PV2N%2Ba%2B3PK77AKl8EKUvF15YW3pZLU5JHwAf3BMR1afx5TkCpIV%2F1mlcY9qE2fU4KpqnC7pFzwf9bWw35T0tfodA31mkY1kGnLvYHPwgNHKHqQNYqshLsbbr%2Bl%2BMLcTu3RXrWaUnBiFAVjaZlTIPKQsHcv292mrdnGlNbl4II%2FOH1KO6tpRirr5agkTEaIFVZAW5%2BojJBgBDGDnaeDfjnUNydktuxXhhTK5977N61mtIPYVqRRnVYzeugjFJH70SfR7hceOwTzd%2F9eTHMdghrqe9BBp3K5WPrhFXM0G8xl4FUBd8KsoOtjv4b23jBRiWscD4Lyv9wpZhtvG594c0%2FBQwuNHYyQY6pgHnGf5K7FyR5Etb9HtNjhOCQycAXz02LxumEOXbEJhrnOXCtUd%2FyBBjICxEZv7WC2bCqZeRN3sKxNu%2BrV8eb4zjMxaY4eY%2Bqymr8LaYeZqeeClYuZbJw5YsvKoXzIW0CmmH8CAK7WRePkhzLdfB3f0lUSZFs%2Bt0aTHtfniK4jpVWnHQZOg2Quh%2F5%2F73NMmso0KD1wL27TElAJRclzRkbIsEb4l4clcD&X-Amz-Signature=751cbf9ec2790def6d5c7d56a6cbbfc656d1de4a3da6223d2a027b55a4c5e40b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNX2PUSC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNaY1mD0Xb%2BlEfdEmCV2%2FRYneffPYMJ9koLjcj4Xq6LwIhAL510ovX7kiYcQ0%2Bb%2FGp%2BKM%2FSV9MOL4vZQSWY%2BeVeqFTKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzThL1Im71A7600blwq3ANnPM8UusBm4DP%2FrVry0ZT8WL5icEyb7%2BXQLCkabd0G0rMUweF2zFz%2B1eJU3b1EWfvBcjX%2BvYWZOxs%2BZbEhU%2Bc53gIxzRWneYM2TgV03XxtMV963jz5LQyjpMbs%2BpbonLACJDFzo0lGxrkhWWBU8c6kbqxT5EzzCeVIihzqANh3pqY1TOCuaS904rPvVEa%2BViZFnDiCoSmDtAP8gTEuHTvQGxvJVIWjnVqs6dmg9sVgEBUT5tgA142APZ3Jc%2FKyLtL63dqIv6Ihoy8H%2BQv5%2BYWsf9ZvlMOVZiZXZNs13xU6NbwuJVR7oI%2FeHZu%2FntNDPfg%2FhzGYThY8VY4WgZablH30A1d5T7U%2FYmODqOmRLuIZXSq1bjTizLR8DinbUwvQ%2Bg25rStlyUJDda774s6NlBMkI5DcyFCVR9sOitxOz6MN%2B4hnuTQa6Bnguw2v6qVsto7352BPlob4E%2FVVJ0qqJq1blcEEdva3VHw6KOekFbN%2FAHqPhi4kPWWh4G61RwPHa8v0kzqHN%2FGAAqz7Nez2%2BIy73ByFTeRVRpYV%2FgnIkQNdFldoqFwY%2FfsUyzowytV6NFkQaplt0ZDROBVE1ucV7MnW6tSpEpBBI9PC89htB3pncCOv%2BNkz%2Bl95RCQIODDC0djJBjqkAQpcFg5hWo9vCkr8lk7%2BtAnnCW1wq5T%2Bi%2B3MC781dGdlEalXZmz5Yuc%2Fd3LWFGwExE1UttOdyEVoaFtYzavonojceuBk3KbR92UZlQli28VDRwKQQ4c5IDOjzWvXP0fFPKaq7oCajroITMGPkmgdHuKuyWRZvnIzwPVNe%2BwFUKqIB3Pxf0VOzrkIXdtf4Ztvo%2FYLnW%2BiHm3iwahBiUR1YCMvrhw0&X-Amz-Signature=be1b5ef761ccc00d852e44ef50d599d6e568da8b755b70151ac780d58f4367a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
