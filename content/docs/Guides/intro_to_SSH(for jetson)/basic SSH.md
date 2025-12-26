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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7TDJM66%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1Ucvw4knNnhNR6BCKn93mh4yHeXtSq%2BNYnyMyF1w%2B3QIgWMlleDqgGB%2F9hEFKNjXMCQVbrhsVlwDmLALPU%2FokkTwq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDJF1PedBtHKAHlBudircA94LYsH%2FgDkf0K6dho8dniwQ2wyOUCIYfDpWlxZmYnNesN1j%2FM8vsBiWhNUnAbZT%2B3XemNyr3QkBgtp4ZlEjUxeVjlqbZmcT7fnRB%2F62VJozez%2Fweu%2Fsd8jcAIrl411l2G7y9raPHla12n7NXj22q7EAdVZNcYTJbwIu%2BDXnHRQ03Mi7sFb5br2Mry1P3eZESwMPVQBEf2Fl3N%2FwpHoFgeaCaAUD4RDP1MdNWQhIzpZBC72qXkCs2KtE22GY36fLloS%2Bk6M5cMNeIyI08bPbWtHLoQeaOPTZ7q%2BcznvsUOE70%2F2vcpLyiMZuxT6hHd4QyTPcMbehFNe2S%2FbtVLFU2RecO%2B2txXxfliWOeT2fql9tIq1faw9Z5%2BcDeWZZ3bB1uCJEZ9nSUKuv6p2Ze3%2FcFv0rmy93HUWSTC5m%2Fz6rj%2BFVH8os9ezI8w%2BoyCq9fheBSffVFkylJszB%2FzWWSD5DE44GtygTV8BO71ySupUkybldN3hgguVjd3ipFWSpcT7dxi2JkhvWlWHVUAPeAwL1%2BIhB83zbQvfclO%2FefCqV%2FlFZ1i9OieHZfkml%2F7LvYDAbOuj5V98cxU0zlUHCR2S8jhRA46J7ZI3hvr%2FMcFqPfSfDLMyVopoBOfnqK7d5MJLNt8oGOqUB0BCOtRB%2B70yqhpXw6dR1o2N7Be%2ByWrV1XuJFXUDAGWBDPFbs60WQV0hilrDMWYzkmBH0i9%2FACefWCoXgFiyyxtjDtuTOlqjxjgZJRMcksQAiDkDrWy4Mamy%2BRHljBaoc%2FTRrWIeouOLsDVTtp7Us4cGuyEtqBC%2FT8oBCZr4h0uRQ%2FrK9Z08CZMu5WkcjUDiz6t%2FX4zSQZ4L4wssmFvxxzW8Z2%2Fbm&X-Amz-Signature=540a84940549c1b1cddb981620e225401876f743240ae1a40ba7b063f6e485bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKLSGGX4%2F20251226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251226T014454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIHVHGlUgeVnVAk0znTkEEW8Tn5kmdY%2B%2FdQSzwIA6ayHiAiBayxig1FoK1yFEiR%2BLeR7Tmvgy%2BlOcbYE2nCutQEYTdir%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMLf5DGEPwS%2FkuE7UIKtwD2RyMsQ%2FV%2Bz75rRnfD4Mm8Kxp2FPCaIob8m8kSBuZT67NbBPT6YJwwItIf09fkpivDTweNDQbZG7AQ4uLhzO93iJ4W9UJXeYnMu0mjZYNjubKbqZXJy7T3N0VgMVFm4VR%2FkDeFSIn%2B7FTUS3BRXc6MVIKqJeJEIKHNJEwgKyiqSpkO6Q4qrjMdr6YvX2TwWCfEc%2F57wZprb3f7aL8E8Jo6Q4iFhDNBJh10SJxlku8MBTtaND%2Fox3B3fL7odEvPZgDrK3sime3xL0zAahDjT3u9gebK9kZn7rvdrA%2F4pH%2F92N00cmzz7mP4RmW%2BfrzrCjNkpJvbDF55cIj5USVsC18WXCCOOVp7HVp6vvCBiBbWAP19GsGaXMuCJf4DjhVaV1rQynYJAZy150GWa2S0OEKVJkAubJwzvwrJKOsPkZsHuWb7AGJFpgo5Xli6xKONCz32EgjrxA%2BxmbOHZWQ363n1ipLwi1TiomQpi7Lq9NakS7jX2jkSgIbAdLXJjLOxT0PpEOULxrXVAOQiEn9nmkJ7SUaR28MrxKTYjCYrR%2BEqw%2BflVPstPnqGRAg22VERAK0HQUAePq5dp%2B2Kp0XCT8DCbuWqVHdh82Cov%2BUD2vxlcKp0c99ZL4NW5x7UOkwyrO2ygY6pgEUf7BWd9owd1NZ4YCMXxy%2BoVdMQK9YDWcN2n96SU%2BsxLN3JjUe7SG1SEHB8rRsYqSHRThlBK8garuBqvJ0Uw3p2%2F1YICkH0p9oRTrSZwJ43z%2B0BxXL%2BaPvBfFuWUtKeLDqXUMlwfpn0Hjgfs9%2BB1i8RM1cQZeyeyCN%2FyziJ7L%2FyaOJoYKsJl1OLuNEa9f5F3YpDhN32kIf5BTU8rUaA62unP5Xf4TB&X-Amz-Signature=b36d038a1359c8767bf5fb74298344648b5990f7170fcb39147f420c872ea533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
