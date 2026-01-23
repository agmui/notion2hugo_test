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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSY373VI%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDZhklxVHZKJfo0LzrXzX1y0oiMkz4ENmN%2FDzmC6znSAAIgaTKc4kYi7cjuUPJqq%2B4WP0h6Dy0Yzm3eVZeKbaLVHs8qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2gs%2FubRXFsgQZO7CrcA4J43mMiTb0RwaRt9y2yxUOAnlV%2F3QApElcrWN3r83C5EX2eikWoROszSsSI%2B1Mp0Wb7Q3NZoTrlBEfmm%2BLRXz6uMzO7INWDJkeVei6Tb1rWOQz3eSDPcJnDSD8sa0nm8aDzlg7ycyqDlzd3ZNUDhI%2FaYAAI%2B2uqFdFxXaWxFzS95T19CWBWZMHm6SCdHHe6peoYqeeh0GZUPS42kor3LPezfKHLoeGNfvFYMWmFyWPUcNtAcBXfhb33cjWZ7BBxMkU%2F8r6saYxGs29G7mmhVjb9Xahd7OjGuM04JbvM%2BaGdU%2FtPOiJOkZUPLRe5CRA0Nr3dzuNnbDtA0SqjMbTJuPQ02R0H%2B6fQysHqLpq3XOEiCmvCJ0nt9aZUdPJsqCWHYT%2BX3vRpYliHjm04lK89FJwfwC9L1qNIs25laVYUrGei3r3JH3XxTpndXSk2T6LKv7dWw%2Fm%2B%2FMcWMyFIMnJfN%2BWVv9brujLvcr4v4dfUpKqSQPXoREGefHk3CaxW3RQ7p2yb8yxHyYpcu5U4d6bPOBDAlwP03h0CSu6KevHNHBLnkSOgVMeESgUnMtxPGYYUD%2FUThZuzGXIens00AnfhJ2usaqytxx%2FFR5yopcwLKLr79fShxFP7Q9Pak154MJmLy8sGOqUB95KyPO7AJ8Uq9NzwIlWvaqDzrozLwVFuElpBOxdpsy%2FeBQ6npyClD%2FMoX1vksZSPsgcm21ls%2FGIoMKxRCPCnZFIQ%2F7TP65HDkRxlqf6sdDZm4RwLZsEtyCbHHqbhzvB7mEmgUUqYults1BzyzyccF1AAUXBd1a5dyCNkg02BeaJx95sszRi86N%2BmuKVlO2o9pHKuHp5nJg8QBsfV30f8xUvoFsix&X-Amz-Signature=8c48d66122d6798e560b5d3d81625fd7b3d07b80eded8f5fbc85cd3ece9205c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N6UUCR5%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCVdLli1PCAN380zDiip2Vtz8g6iX7b7PPmpbhMZ8Cn2wIhAIXHQFSp9Oz3lMNsR88KnGIpYGtFd9pVwBBRi4eP6h3aKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BJaRPeH6s7lXljPUq3ANIT5CkMXGkA%2F1enal33Rb9RXRONre7ssVUqWuT5t4%2BvLM0g31yqHIiqk1T3SCGLRnkmddDkDy7BHuM1CDpXxLAZQ51zo6yMKtDXt%2B5U9pmnxJPxGT9Sdgk3JI4nxV4TUIOOb%2BOgRbK9AN99hgtdT3EXZ%2BlbaEQh9OYrpWa41QERyeqavCcCIVbzXecCRY2ySqUAu24%2Bx66rtJJa5a9eJNL3%2BvJPGsGpS2M%2BkCWuLrPA0YHbkOR3V216%2BL0qdCgOj0J9fGI7UqXnok9ZKG1ocCGB1w%2FQUkXdNIH2mpVypMgtS9DaMF6XFHk6vPQq%2FommZcsP0zGXUA%2BK7a%2Fd08CTGQHznL3ZQdYBjV8sNiAjzq7Z%2FGV5YozeYWQ3hOH4TO3o%2B%2Bn%2F2pehH5t9sqyslQJdrD6ot10CzX3LlcHWIxBkAL4cW0T73JBz9pOsSmT8%2FaoeqFXzUSOKls3HoAbIRnhQ1qfRrqKYKaHfvcY%2Fci9QZ%2FISabtqkjQsHIjqgk9nvOG2aw9lZKGpoykXbNwmF7JpBS3XkyOi%2B4dFTPRKpwTGijnPdiEC6XGulfJ7xr9M57HQAlpY3qxnbfp0Lk2eStTTD4NDZYQgFaQLR7vPFiiOsRz%2B3LeEiZSCjmbNfgXATCli8vLBjqkAUq0Vh3%2BhZasuOuMrcEkNMPEiVopVb%2BQEVBdpJD7b6yYDRRZBGcqOkApZl42LuQERIckso1YEjGsw2gAH5FVeLYrUr00hOmLiaR3Rv6%2F8oY%2B5uec8dbex40yeMASCI03d3rs4lugh4tKOQ4DigEdfpqpy599uToba0DerAtwMF5zXUIc1zSH1Dmu206ou3QYMGi2BuNyn3bgN5E8FTRusnvU4WLa&X-Amz-Signature=9a7de595fdc6b66358e31418bf090707cc3f5c7e693623aa91e9103b32d67ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
