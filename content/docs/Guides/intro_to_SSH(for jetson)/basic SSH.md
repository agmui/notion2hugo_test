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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMGR7NXN%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIAGRSMa6Q8lZkHUCKDfUJcvY6SzbO4ZykBbYhV6%2FLTQLAiEAsrjujA6REn2L0eGC1yLfdOp1IJigConeAVVhAD3OMMYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJriOtMIehI%2FKbJkJCrcAzVvC5Fnk3sKrk5A2jNhGV4QovTrKJohvreUfl0MB%2F45eKwJvHnJUsutOaNkMg%2FDGN8nOyIRSBm12VjjGBDKVGz%2B13ldNA1OVSeOthal%2FK4dWR4kOgamUuVBUNDTo4CnSZNA8fZYTKmlyOixAPJftRSW6YbcF%2BWETw7JlbNXDkQbQRLtkrbrJFH4R5oSdMf2uj%2BB6iB2ulIlbrl12WRm7yjDvrGa27u4CqCTujEIWNSQAkkzheytCzURosnQv6YMEl27sRr8s4NcreW5YQmkRwRl6MprMLWZetMYRrnej4d5F6K1WHA%2BcBgDQR5nWwV853F7PBVak4aXx5dxw1TB5e5OsX3VmlN2f%2Bi4XS%2FbU6RGLX8r9Dz7dEPirA0HLCCBLNi3%2Bu%2FZX6xiA8RIYuzzuTiSpeuoylHi3jr7TqnMG9CbIJGtFwAJOr88zanhv6hJQ%2BcD428bBiz%2Btk7gMuuxEH32itlzwQRT2twAsgx%2B9Ki6TrQbQtjCPKtdhveoxMXcgwg5fyVVY%2Fim1djXuFkNPhhFxE%2BKG6Z9k6p40XYn9JCTFXR4%2Bptc4JsfaibCYvIMNQfjFuohuw7f6sQrN%2FaLk8WsaByCwkLrxy9xoYT6JyezHmSWvIKYhMXfZKrNMNXOj8wGOqUBTdLq6ecGxtcU2obIm2kCPgEb9z3E16v4OhzV8vlB5bxhjeZnKd8cpNrroLAzzO8RdLYXuuuXkq5fMgsZ9DKj87SQfqGMmvaQ17o4E8VKNYT4x3P9afOd9lMKfkkdPgPxwByyLig8pLH5HU5ZQ1U%2FZrkEflAyK2hR18tgtHJmfeJo361Z6VIFQ4zTVMxD%2FmcsQzjA5oCyN%2F1CA3jZ1GwMyBdL4Cs4&X-Amz-Signature=56ae6a8798288e6bc6c8fc9dee0a564b6ffe85c24a0019a7aba2b9a32941c628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNRITMW%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIHROhSFDupJAsFrBMSato3KaalN24hesGf8Pg1V%2FlQg5AiEAlH5wmlJKUBEZN%2BsKIF0%2BOTi8dWQ6bQY23vfI862MOfwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDMbPTfFHnDAV6SzoircA%2Bey%2FXT7O206nO%2BEoKSoBwBy4fvOKhmBE2vkyYUeaBM8h%2BBIdVFavCpxKA%2F9TD1JrtOWNxrmvUBbsA7V2M9Eu2iQSXeEaXQuYwQO3XuOUa98E1kp01aDEA%2FQ7OOWWz8hTTJnNEiHpBVZ6tnppAWdmKRhfgC1rg446T1dSVQ5tg0oB8XMPFnq9Et2S7B3dyHZSqaCW1lYR622VkNRaF%2Bdwvvn%2Bb2BkVBZFlg7cNSscJrQSPwQH9g8jgOo%2BFTj1NbGm%2FEjUqwd1RT9gRfZnS246F3%2FgVbdgGjZxA3Ok6bN9U7IklVwpAMxWkYnATswQJ57v9VkkbvbTTiSW1LSvMI5B3%2BwWq4oSlhCHDUpoK0h2pel54O%2FfJ7HtxyE5izsBu3OgLgiFlOyGvIju5if3slZV%2Ffcs5Z91qI%2FuvCjuabmNtTWA7eNEwmGdieW4Yx0jwvDYX5GeBpnGzCCnZBJaO%2BmRn3Fmt%2BNzxM7vRp2Hr0%2BiL8CNBY0h31tV3jeHE4Acix621qPkvrCE3ryz8SBTR7g6a%2FMYBLIEUieeKgJQQAxHwqvsA79qLfPeTV%2BDB6%2BCmIIs7n4%2FFuXbD7u50lKyc9J6RcCuTn1vLxI9bjpIjj5C1phYEcdHcoH4kUqMrK3MKrOj8wGOqUB9peG3DF7C9hSGPMzSjMX9ZYGc8LKa3kTSG2vBg812v0XiDdZRJPeFhd6gcbQKRIF1T7BQJFaUtxDdATI5VnhBAzaR1uyu2nkavEFV2Y0HjRw27oxm7DYTIZenBHozVyWNnKnzff9GtAn2DAHcthLbvlZWK10V8PQsIGioLCd%2FJksHUQyPqZrcQl%2FEjt1lEWeQTx%2F3yVCyYM8MhdM%2FnNsEbwa%2BoG6&X-Amz-Signature=c8aab0f40269abb48186232e84bc22d7802d7ba790cf869d9ef73ac1aeffc46a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
