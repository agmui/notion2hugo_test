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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZAWCUAN%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAR1yOFXWMDvurX6SW4%2Bw0k2akTS8%2BniOa6JN%2Bie9qZvAiEA6vmZEP3rK4zxAppR1RdGQ8ttKyMBNaYEfHtBBG%2Fm6Kwq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDOPlSalHCT%2F6DTq8XSrcA%2FUnWkOfT5glQd1l%2F3L92fdkODZApUkLwsav6Et5j8FvVyMavpJm4Fu6pqHMGsnzQg%2FuRQAW0MGBVzVXgtkD38WzLP3jzchtvsPr72UpuWREInEpZAPk2dpzRH1pdX4nvAwNkF7UsjrDE8VUSIS23CpuWs4t7o9LQBR4JkoDZ37kB9uCSGiZYNqSrPR4DWXCo1boX5BBqgK17uPrc96pAgAivDsTQxoyX6g%2BaVLZpk14jGnJLl53sWSaz%2Bzc052P%2FfWDgpvKpm%2B0gEO1de58jgr4SveLggzModZHuNwmY%2Fq5sFRHRvjuZPu93GWBpAzjSQljPFuIBE%2FQ2VElZq5t6YFdAhFE6whFiMjKurkV3lb%2Fc9MEGfOgVuuo3u0h8oQELyMGbDyxzerLoaMIUKqcKfDlJc71H7C8%2F6uv66JYgbXw96AfSZ1obiyuuchyeSgI5z%2B3meiBvbhNORuVdIzN%2FTwQkJJFcETYh6%2BV7KEBVgML%2B6K4gFZtogQ4QuaDEG%2BYlnhQHdKWle5yYmhxitT9YrV6FRtpvivk2UjXhyp2o8GPVhlJtxXGbels1k14jeyQkoBp0dSRYB2MwNJbl5jg1NtZf4Gy6DQ03bAoMX1UZ7ern0U8R11oMHFv44kZMN2k89AGOqUBrihVIq6HmflEVsDH%2Fto9ABHAMMQbMP8ZmZ%2FohcqCXsBeUNDXsnUWBdF%2BjH9%2FUiF5H8I1K%2BjhnPrsg4DZI5CAtCG%2ByjY1wUHtgU%2BBIofazShDxdh4ioc%2FTl2B03vzUeuXs6buKgwzLxqZl34PCS4ZroZ%2BcmslSKpmd%2FaTIlre6EuvBDQwcJSYqfWETQ6%2BBD9X3CWcelILnjjEQon31AeNz21q5Sv1&X-Amz-Signature=05acb0d844734fb31aa86eb5a4b6a6e1ee23177e9956a815ef02cbda281b4044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDFQWTMH%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDZcqMA%2Fvf%2BlTaKQTYMXlvyRg07ek%2FhooqEpleq3JoBHwIgUpAR9R5Ev64z3NCVEoTaVHQtXOMoj5s6iyWVbB8Kc1Yq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJKPkC8hXIYlHzL31yrcA9l%2BTx6pmk%2B9AQ4Nk8Y9B%2FUVdomj3WPg50I%2BHuDVVR%2BRdDLGwcrLm8mUClF%2B8h7jOpE41P6yR0lTiEEN2LSKiJ2Iv6xjmCYzeihw%2F0BItZs0Cv8cSZa1N5MSmHXNOuCGVYDw%2B2w3SG7fQTvdgCUyKIB3baxzGtFDanKEAvI9ToY%2FDBy%2FRZFpCsWsxE7iatVllZ1F0ET0IWFFq4WDMol%2BRsWfzoYdZ%2BT92XAJMDaDG%2FAsiyZF9nz3vaCdQ4yM6iCOdQxvDFpYbd4Gegltux%2FunJEkfpojAJwt4%2FmkinQEg4SWugSdR9WTUpuGx8meR3n1E3MimUfSO8Qa98BkcIzWMNtmeZz38hocEa6nxjWB3YkV5pkss7aRegKxtLlbjVdtupee3TyOVOIZ%2BtOAlmrkzUH%2FZBkYlYvTUtRgcJUQImzA4Tx4aadiaxSqTZh%2BVj%2BgjH9jF%2Bpi7TvPHOQfZVC6TgUOH4nTHqvknXcSRrxC4GZxvAKhH750Duu36kZyl4rvFrBW5BN3XKCQxXQKYlAaEmkRFL21RgVp%2F2tDuJUGKT0rf50kFtbh9J5ZI%2Bb0fUSoU4MO8tLrLmEIUC%2FJAARE5oi0UYwtSOvDIVU9k0vKzLuy2VGNlUgo6jr%2FD%2BejMNOk89AGOqUB2rSDZ3d48482lGkZRWI9yR97MiNYS5PsZDfnHPYh%2BBePpaBWcJVoHfaRDu%2B0KfWZZ7S2k8x7Y6Ui3Tzv0TuHvYgZLpls%2BJ39vBzSf3rpUrJ%2FgqkuNIf6rCnHiVzN0mHx0qUQnqXI5lc7oRczPqSJwik6IJCIc82GJPv7a9cTs3zEFobHyhvJ6dlVF13diU1sqr3gSYdO4LTjqY5HsntXyuRNYTnT&X-Amz-Signature=809686a6d5ae9854c04691447138b47926ca4df2e4e15a622ab717b394053719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
