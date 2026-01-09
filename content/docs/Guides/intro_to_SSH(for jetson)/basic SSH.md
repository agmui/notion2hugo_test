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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W34LI62I%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFWXVesxKIHdS4MyAmpP4xoQ6IbG8%2BxSMK94kgAfdlKrAiEAk9j%2F90aegoZ%2BsPuOJb7yoijw1L4at9TTGJX6%2BzX7pd4qiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDh03%2BRzfOgvFdXRPyrcA4%2B5kpkWTfFUZ2ztlyK1hQWnZvu9L7ZDv3iYin%2B42rj8dZVdV3JRzlO5deZ1kou5PXUZkHfkeLdRwF6fhKJ5inTKlipoBjBI4rH9PUSQJ0Eu%2BLxGXXjpRbmN%2FPh8HQ7sEI2xUs%2BgLzWGC4AU8q8ZfbJeFEWMAPImnojEg%2B9WeQOmdVb0jz8EDSlZ%2F8Ql7WNiEh%2B1NaUjs%2FDrQeJCJvKrkye%2FtBW6u8koTC%2FTu0OVREnFco%2B9QKTRhLh09WoRWwrkaeOHM%2F%2BBHu8mpBWQ674JA0efnnJcvigmFemutjRN28l7EAIPwkts7ppu9HNzXlXi0Pf8fVUBi4YzGtP97qDoJSBPKxhqfO8lrcR5MzmgPYD48yCQp7IKkpexnAMy3fiM0XnGxk3Wz%2FL3K3iPc6KQivggX%2F5PUxbv58BrpQHhVW9BTnbXT2ulLn%2F5Y7cuq8rwReJcgVowFvID2OjVG%2FlpzNRaAzS2piJdrEOf%2FVqQ%2BMwnYWVGzXNiMgg4X7K0HadL2aQRLfXRq1D0QbGTRiBK3HAiM0ul%2BkkfbqCwL1CppRq7mqtvwSSMzZpajgnIFgreBDxi95G7g%2FepXJiNRPR2TOFZsnee9N4NPADOj4fTPITGAJcg3G0hjf%2FAS35QMP%2BkgcsGOqUBGvqOKIe4kjKg2gVZB753dJ86rzReuItm41pGWz71xE7DnuXdGYJQyghFySR7hFF0fOmIyDbvAdKphChVQI77Jq2A3m9%2BuXuK4epitNlHwmrzj4anNyWBfDcDVWtwzu7pXEQvBvENqPqIXyEQxk5YL1xSDr1neeytq6oR68aQ%2FIn1dukUFxeU%2BMK2vo%2FxSW5QL3U%2BCq4vF4RhagiJ2AS4j2H%2F6iyH&X-Amz-Signature=1bf0238bc7e0b5cb21305fce1571af2ce2b5cbe6b1ef0d495782b48b2dc060a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO5RPLTH%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLMEt0Wa9j1Sd%2BOtTAL1nzD3KeTvTWip9i%2BwIgmlBn0wIgEtsLC8lqtNIawxG7N1j5PSYAQb55vSJurEMmeKPPMaoqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWkmKtvllI2%2BNVuHSrcAzWjzlWAhL%2Bb5EpTjyJeSUwJV115iwB8PD5oHyBMr6OfUfRDqLfv%2F8jGFHy%2FC5hqva8FbXl%2Fr03w%2FL5xyzd%2FKZd9EWtey8gkYGtkd0FW6EcOaZILQGUFFLLU%2BZQMwldOiBYwcb8V1EuK2zWICw96yA2panYYpkcVpTBSZZ3P9HsK3a6QXTcYBOD1oz6ppUSVIMru9I8YtzDf%2FzoT3m9SFhzY%2F8RJIQjWM%2B6SoCuIp9Z8j%2FUd%2B16zhb6H4zTj4dkXaDVt%2B0MPC%2F3R2phvkjCeyrskTWD6uMuSJc%2B8zySqThFeTJD5VDEfUlJaIRiojqvNUcM%2FnIjJWGq1%2Bee1bdFgGD1YRxkLXMqP%2BeSUendDKIWYWQFZWMTSkmkLO6sGlDQ6hsCWPhQ5RfW9%2F8ymVfFPWkNJYZqRaf%2FrLpENHP1IIPRUpqNuaReUCdwRacoLTY%2BJ9r5PDJN49ZbhvgSUBs8%2FYI%2F13t4%2Bo9I2%2BRSnetlIb%2BskZG8tKdisXsJLRfrajO7cd4gLIRrO9MhxNtyg%2FPJOXhStYXCZNUJHn7A0xWpU9nZZvWJclKiGsZy8w76WXvm08UsJB%2F8wj3rZS%2FQzDZEndZ1DUdQgl%2FgrILyBJnfDKry3NqIthZkEBG6prbJ9ML%2BkgcsGOqUBQuLbOjJtlFOFW304NAKlaWWBNMlboXacaj0N95DuGyjfygIkdw%2BmWqA4znKLbO4Dmpb5BuMeX%2FJCjZBi0tdeDnYPatpi7BmmbmM4lGY2ZcjBu3DJh6BIEidE1g6hG0ScCVFL5PgiKlY1D3wyZVrjFwCkNoWxEsHa8Cdm73yxSbm4IPdmy7Ch6UvxnR50gqgdgU%2FWb8EFRdI3H1f8Bo0cd%2BZGAdUe&X-Amz-Signature=db2c1de44190a96233a5b25118ca1f92a82879573acff64cc015f5b81eabbb2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
