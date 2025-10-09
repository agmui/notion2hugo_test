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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD4GSZE7%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQC081IqDJ98b53pK%2FsHqjPDrp9Wbk0EpgC8LjiNoAK6RwIgRB6vvJ0mpUTr%2BDbA9ypydmY5MAsO%2F9qgV%2BwgJGzUiWIqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLcZ37AnIiordAkAkSrcAyUNydIOU4KpWOlpCYDiRa3SG7UT1yyFGlEOgSK2yQotM%2BPmZI3MZTeX%2FNi6vvjYM1txay1irDi3DAiXKlvVX835gK24PfqIwV8wm7fQJS8f5tMz9x1SitqASfE%2BUGTA3%2F7Z3PkHfT7yihndqH%2F2isdLLNt0yUhMsERpJT6cCg%2Fs%2B4EYbvQ3PsezpfsMpHzL0siv87UdxOYQnMUZxSRTZlDraiFHT6sUCnasFs1sUsxpOb7F6FS02S83WR6BuqGGHB2q8IWu3ZvN5hIjV5lyP7zhtPjiBIJHdPVVH0sStpwGRWAy%2FK6OTvxhcKDLR7V%2B9AELJCAthrNf5UDaaGCErM%2FI6tWWRHEe9HI1kipbzaVvMLuuOrLGxwMN8b%2BbwBekJa9MPLDmfPO3BSGH2BEGLOttPEDx0Is3mh0q%2FqWssOj%2F0cys8mRlJ6h3tKechg%2FPGXaYN5ZMyTfQZw8vDlqhO3qrPz4tEtjOO5WEVEfP0A2j8HOTF3U%2B4ppFHSQEf4RPbZ3kAN0mGu4ndFYLvw3jYL0F1aWHgg%2Fia3eCIWY%2FISSl040tM1KM6KQYueNmnf8rVdJ6XcDuQueKmeDmvao%2BtghV23FFlz6qkBRuXeeDlFGGTqGRvawr%2Bz0oGB5%2FMJH7m8cGOqUBc%2B8pZYDVaq5B7M3O3BkOevWZ3sDejSoaLYMAMZDUZFvUMxMS0TP5nDCi4cz%2F8B1xyqV7h7zYc8nI6HIBnoQiA2Tl%2F%2BBXAAks8BOeQZ7XaIxCxkKjOFGbnQa%2Fs0fBmee6leSacoDsJyoMuavibm9HcxcQKD7lBMHH2kZTBcDQsrG8KXw3gsq6XfkJu2sKU5LOWhh92ksq9i8wMKa%2BXxR%2FtR7OczW4&X-Amz-Signature=b46e2f57fa8e39914834327e7527c300d041dd35b773bcaec233773c7744e284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5KKED5N%2F20251009%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251009T012432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIH%2F10rpb2ROwIp%2BKIdoHp9T9yUQwcb8E24PnxVQYuDeJAiAjtlU6CtjgMsxSq%2Flo%2FjSfgssZFGtNLSavLqZtzrFyUyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoj38VxGLQmg2gy8BKtwDtM5kPAz7B5H%2FSFL%2B2TmsGqAyvHCT2WjwCNbdl1Dj%2F4bgkz0QklJ3%2FrLMNgFGbyRGYnJMgsZcryKfIRQ3zPsbxsSK5ZZoXR7kdU1ZgtV8%2Bjr9jDOm9zoB4Yau4zUp28hoC%2BZJM2ffyvboQCNkWRs32SfZFoeNVpOAGhY9VRC5mM9A%2FuewU5v85w6NIWwTbrAUmXBDzpUZFpXHkv8%2BYAQIKPlXO1wl6yu20W90KYuD479hwnDyXclikVlxwLA5vhl5qFqrHvcHLiXamqclWM4yzeD3m%2BK27rCwNYaB7wh7kN54oE71%2B0yzOv6ydN5nEFDCIchNoROFCeSQrCtgTUm7Lcvrou2pRim7IjPjs%2BZzZn%2F%2BcY0mOTu941Z1%2BROfZXdWsActerls%2B35j4eqUH0xVnqbqvXaq2qhekIZkbVCkrxeYo8FdkqlM5TzlcAPctZdeTHFtUU81P4CukrBqMKRG5GVYOuhOFdObQ9Hxu2b7p20%2F%2FSD8ZgQjkSuvGHLk6HOjmwXovy99IP%2BeoylBJ%2FQQIhJJeH2WGT4XQ1%2FzUsJDHdgNNPaTbyyyDbpru1AXcApEGDcCEXiYpDfWsWumotjp3VfwHfiTvCoAl98AGwbhkTj4zHTotlwUyOQLQw4wh%2FqbxwY6pgFY0mDhMRV8jsDKKafHRvE8nbzeMcSt4elPUUixCUz4u%2FKWY8FR3L3Ty%2FtW6P6lGdSng6BWXrOFdJbtw87DsMYYPLw%2FRr5QzvfRnElIj%2FZ94uhsTiUwJD5hTCNWqoNOmEJs%2FgM7bzrSJMas0dbtxMuLmCD9HjiOaF1mOXHhxEJ2pjvWz2VCGeNG3c%2BkRuNy61A8RLpm9ahmESe%2B3cuLsI6HeQCQ73VJ&X-Amz-Signature=415f58e656df5b61e400002046909601ccb69cface8121dbeb802ab6e9000c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
