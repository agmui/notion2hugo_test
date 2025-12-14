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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WERD6W6B%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBObW5u6Y3J0DtSgyvx084MmACUz6AceKEQk2sREavlZAiEA8HCqKvz%2BF3V1zbNlBX3CQHR716xivRTfaoJtfEDYpAAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDBTcmKbz6ABzIXu%2BjircA1CBCWbGqYprQqLACGSIgQNwBeOcicn9nDRDFSIQ9dJG5itE%2FsM4s2YacpUvCREfS1To2Zb%2Bw4nWgltGPgJd4LfGAveRZIpbLCxbFiZkXbTwznnfRKjKqjk%2FGxM65XOblwJhj%2B2hr09XX1tUq7iLXqNCVatqtHiqP5oA1jrIeZT7hqZOGpKhV0X5H3vUm9EVAXOLpTzVG9nUgx66RX24iqrAQuuLE04tGN9mt22OBAMmdt%2BpFO6D%2FqRvN63p9kkXJk0YCraRtd9yZPlw8OrXWXAjVnnbBLyPoJ8hmuT6lwOeaMH%2BvlttnVSiITPZmHSV5yEpIrDiVAdeG25p5OABe6hZt1bVeTHRV6%2BLA3aWvJYP8TdMEiyS%2FAhmH4fYY2I30CTtn3qE6sQuRzhUbcSSsxwYneivPGtauYP0KWFy7ybIy1iMlHYmlyezR0xQCMMYc8OWDBJjzDDYJ3oVTquI5OAS96Y6YS2kq12D12kVbJAd%2F2NJ0shpU0xfRAFSlPzH240EORxXB45Hx8btw%2BkCWuSFFJNYNbNNnroXEKcRCho3Flv4%2BSPEJ5qPPnbqZxGQlYuTf4EmuXfUUT8xPRvllInP8kRGCfkIWt3x1990YyVypAiFF67gzlZguMHZMPKW%2BMkGOqUBzheMkYxFdinopZre%2FUoaNqAySxSgpCZGzazwUdPMaU1ruw5ANXlvygA%2BFV%2BjPr8aF4EvdIpRMyR6Anygirnh%2BhKjzMu4mf7bGXj05GzDJo2CeshNVyfcm6dG8lyvEOAJ%2Bwd7wccNFJBQmRlwFA32sO6NCvgCODt8lJ0dd6%2BvBG2wQ9ypZS34Zvcs8PkcxUowUrK%2Bf7DFdIxsxuBNmSit6KbisgcX&X-Amz-Signature=054fbe2a1831e65f6f7695a402bc027f4afd40de4f6e1a9535f1492c3579f9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676VKA6WY%2F20251214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251214T015042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQD05fuxxV1Fj0wyAU3BAQqLqeASm8d0AmqJtfFw1ZVb0AIhAMKXxzFMLvwA2%2FXr8jG0APyxM9iWeszlI%2BvgxCH8y%2FK0Kv8DCCoQABoMNjM3NDIzMTgzODA1Igy2DIKJKUmP%2BJpOVIQq3AMr2bLdACmYly%2BqMkyMHNXyhTQblQXNmRa4s2dbUg6rSOHQJ4UxvrnyTni%2Fh8aRyxx9cLmmMQ8ICIlcDhfUgcuiWM4Cr204HGMzt1LcJYND1T6H9N5Tx85QljRPadHHd9EurOzVlbv8RlkjuwC4no83DHWg1BEYmb%2BjYVrKojvVz2neON3nj2fKE55ie9ZbcIu6DZXgJhyF8hq3gccBGFv5H3BQElpWEJaPaEnH4JGaYPsLkLd%2FE1DVzClo3UnqaEoZJ14hY5vsKcEZi8HjtxAnKEp7Qibmcc2EGFxQBQx%2B5eWXh1rR1Fnduvd9LUEEy6OjhU8jcocAF%2FBLDCAku%2BE43DSAP96kVl7x8A2VdosRMQNhhn3w199y%2B3in8IyEg%2BHGznUZjlFgObzRUNAYWKNNyBgPuQ0ZeXJ7aAPSkgnC1%2B8CwO2bujCfF2%2F%2FnhcfJBe6AVHIY3NLKxlggPyo%2FJnAYuwT3n3yMW4neWj9TBIrZ6LpGqxUQ%2FQdBKtlR8fnr%2BGzpuFXOzQUhXTqkdJEni5eyoKoV9Vq3ZU2qhQOWPf2Vm6KX8y%2FFwQjJmxHfz45JRv2ZWZjgk%2BMR17Bi1wn7mr0IVIgnb6yb9RZCq%2FTW%2FCuN8guiqzh5uGwh3sCIDDjlvjJBjqkAau89R9dcpzEPyC%2FuBMauxcByMnEjpjy1WU9sYd%2FVXlfrfI88mLdb7mXkmCnKmh4%2FStLM6ddLFKTA3uoOZmp9W5Bqm5vBH2IUzF%2Bzcxy0s9RHMng9O60P8ffTxL0wjgjnkZ9d1LmilL36H6bOoo2aHZ1pLJcKl0moPXLh9zo%2FYysSvXaH%2BvtVVO%2FEr6oMAaCrxPHP%2BgNBZwaLgdPhsmZYJkEJhuI&X-Amz-Signature=67b2400a02fc1ea8eae4a959a91c809be810e199a23661cd7e7502cae247af3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
