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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIRGWZF4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICxmu9JuCxqB7VJlHWL0afusEHntjAP5HCBkyed4YgD4AiEAwbfVjUgA9Ut6rnGjKEMKJpXZlYgkAm2VOePgjwJgELwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFsZlU1%2BpJsoe0Q6FSrcA9dYjevWsCUwXern5Up8%2Bbq%2FL7TgWfhSj5kMgEFYe2LupbRDTLlQThqLmVY%2FjAl0xjXb5vCScDdt7SgNdJKpUM2WhQMppFNQbQYPtsN4gAebWUTz4XJptxVk8vIbvoqJdeByNbedgC8nAkstlrafwapeNcvnLkfGRQa9DwEIRRNk52BRqsS4Q%2BQsSagtlHoUYIBCaA0CLUrnhvScRhggY4h3ouV%2F%2FIKspR%2FXnRwHZ0wgdOfVv7meNfb4KI7VWeOfRtrWEQnLHuS8Y2NT4Pue44D9StgZWN0Z9HztIEI2d0ljirhM8FVci%2BidR%2FTFCra2VpSwsjR8BgM76T1UUJdPRVrvCXFBrwHa8U6ARTgTE7R%2BSTdYwPBh9oGq%2FcOf2y9l%2FmfBVEglGuRwRZPXTKBWJPNvx5XxX6%2F1tOKvf5ar6zaUbW4MJl69juCQJwop1x1C5NGToxxWxLU5nkNTsl656KjDlgsala93iMNRSvctftqgbpC0QPtzApCO5awVrvl%2BhsQbP4pDLvFdmh6L7AssyKn2yFT%2FHRhSQBj01JXGH%2BsseR%2Fve59asiSPJeMEXTmv5KvmB1ZsFhsKZkJzg3b0UyETaLP6z0WF8bD%2F9VjsvF333KDEjK5ZntvKKDEsMPL90skGOqUBDA1Ak4yt5VJTcdYviAGgTviZcdO%2FN70%2BA9dBFOo1jMAQs8HbCUpAIP6tDCEoVgdXirEq0ZEzOCiY0uytTgLDEBzudBUc4tsJXhAGySqokElcWk0ZueGzxafPHC0eRVGsWTFUAyb7b1bfpwMzbkapcbVR98oTv3%2BPBaql1KgfI3kyZadjZN%2FD8WfU3w1UdXAAvONBLKfXOtxto7uR007M7%2FkrIUTG&X-Amz-Signature=18ae161dfd64e49a02182fd53d1978781ef23f77f8f1532081ee6cbcb8a374b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DXEBH2P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpPk7Yke0JW6ww5vq8ltZ91xJ7S0eiXTYep2Ku5UaBXAiEAwsW9aH7xrnrz6Ocvk8hBVzGu%2FHV0FTnRz40d9bAHlooqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM9lfN65dsIBAa6AGyrcA4RDTk9gE4xG4rbuZd9yknYBH5CQi7tE2t1aRb2YK5%2BJwjzczHYS2Bx%2Bpj2JRkIS5mu28W90S%2FXN9qg4HL8pq2gZRStaZJelG5XRGyBLW0mC2ki8BOrjKthOPvNsyX7IAmb7sagIa4YQXmwUDsgoQ4TQj2s7SOWcK2gRia33h2EcbHKj%2F8xwZSeyq39HDgTeStrAel9cQLMmFYP7yY3pgB%2FtzhpNVvwMkydN3kjDcjPdxOtWwGdBQws%2F5f88n61ZFjoi7jqaledPwNf5ui7ff1qzWQ6DwYwyCZsHrGbdvgUBH8SZoR0aoxHLf%2FhDRq%2FILdQGzLSgOg8PbxJKJ4uVATrTC7ZRTxhr%2BN7XJf4MD4MTqdlxucx77Oh1mVZqwH3ndMlx4mzHPC3frHEo2NZt7KQ%2BXKSiuQ8QyvKVDVlRGNz%2B7kZbnQg7bCnh22ILYIH0JDb6egOdSUul1A0DAmcZXP%2F%2F6Qu1Al%2F%2BtXYPFMQvmmdVgm%2BvgR1TqTIxponHr1GKRDAwxPw4saiyGDhgxHJrZ%2FT8Mc71dva%2FV9INH024K0vCgcQhgU7QgErcBVTfoqSPHZFYc6siby66wbc8uQJDAujtEWp%2FzL0%2BJ8mQaWscT9w3DEWcXkUg%2BwHrEBEcMPf90skGOqUBEisimS9Mo8L8ftxJRB9ZFUqu%2BxJkFrgpqK9Kc5z0gWOF3vG2zLe5GfFgquAkQcxGhcX5AKJSqH5sXPwj22%2BAZ44XUBqxWGEm%2BhY9pC0I%2FbZxFQVlgS1sQFlBKhEOvwH2vAPxyOvWBrANrsiw7arsPTO%2BRal1hFU4bryqTgnpkPV32rSmPNGWmmgOEvjly5B7Vr0r093CJmCmyU%2FrshsrgI5xGRfR&X-Amz-Signature=74b9adf15b3e99f1318c28d869d98992456e68f8227b3164a726cff907de3e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
