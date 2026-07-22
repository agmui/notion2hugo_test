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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SDISNWQ%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQCzLk3M0M9Khi3gY9oeuf397kgBRdpoKnUeKOC4XNRWNgIgBYCABLfJoQB%2BYeiKetSc22Zi9AufDO5VzzWrHpFzVzIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESJXCZVmimnGIwFOCrcA7L3eaHCcYzvNJPG9kKJRKhLY9Y8ikBti0lVX%2F9ofcaclzIXu1ETjOrSkgyErrd47MzHpxkC3kJRBwsgrv1fUC1M2W%2FUqxiL3w2cTl9NdWVQMq4kHF4MYrAxZjpKZunETC%2FcqprJlE0uYN0yG2H3EsKyldxY94HjcmK4yUR79pZc52vBbi7am1Ln1z0Cctihx4EruUMzJTDCavf1jKUVr83iSPx2yiNK8WTxzHciYgiVV60Ljc7sVEMM6Y2ujj%2BknzsWxy7WuUqbm6PgnlPMooTExIgEFXTgRd5Tc1qCA6rCVoue%2F5462kgYEbrDMZ0zhuiemOq4KiRfvYFik3RHjmVo7lKnSBMdEB0n7carZsDEJftjA%2FSDVC8m6OvSpoHuTIWyqemSNnWPpxhYBYxAYd%2FkCXlhU1ey7XI8VetohErSdqwQTXZHASNqDKrhPK6KRdIOjNF9Y8LdyZoqv3kNV3Jsmr8mtQICnsEtCTJitbq6EvtngEUJrAz%2BtHnRKcYQu3%2Fi%2FkP9LNB8mX4Yz5Fm%2BOB4Nrv%2FnB%2FrxaSLjehSQGuUE9VTGzHqcFWXvSdCT0zKsFttakOGxGj1k1BvyguUQibjS0eL356HcAKTYHa7XHU%2Bv89BlPx1CIljJAquMPXDgNMGOqUBBFpyggLBv3PCrbVI3%2BaUKCaH%2BsOuoKMxtVPY9R4SR6jufjApu5%2FKoDBqvI5mqxykBNFaUbvcjFznzNVtTwUhJDDSEPYLcdQKaLINY1b1wCQ7Y7SPaCf3WjLbP5ujzDVaShkqsZ27ZqkBMAsUauWErW3UkW54jch1URlrXotWepJJLdECTIMlKTeBN0R9OMJSIjlqn%2Ba1uWuQoM2Mh0FjxCwPQOQx&X-Amz-Signature=faec64d4895f23416fcdf42ef2492ff592b486ef4ebf574d3c4b16ff938ebdae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5YLL5RV%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQD5v%2Birj1Q3aMyziXK%2F3lAJAkt4rr5NuB%2F9vlwjMhAT6QIgZFlbCTppil%2Bp9btgmJyASoZzEtCClnOmzB7Xz0ih7w4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC1KIZGMTJLX4TQKEircA7yJZWKEaURVFt980IHzmpscjidWPUqdrH%2BVGJJRHZ0F98Nv504jZHVGF1QX43LCw1gbV3eox%2FHQGMcm7GC%2FjoTEGVgu%2FOuCRT%2BZ3MM%2BA0u%2FG4xcojwGhgSd7sLT7OJyD4oW4D0OlyMEAmfF7mgvu37foRahGZpm%2BGUxSuqFE3sp%2Fu%2BXUqWdGridW9SEuSh8oQbK2tablvSG%2BM%2BZhxG0%2BW2Zz8aZJ8Vq4lYWdz9y4kAMJ1RY4BxvW3OHNY40S%2FoTs2wrLo2yy6gI1Atw9lN%2Bu53xZ%2BpG6XLkm%2BHM9z8MLQipZc1HNpEDdSlxVpieCunnNM8I7eaTQ4qrUty5W58WYhp38R1mvpdAT%2Fvnd1dswxLVbgiO6L2lneYZvQWZjk3ED0jwptMYhfFT5TW4L%2BlAq%2FQdz%2B%2BCkjK2ReIsiHawnTpcYjVZfJmDnkxB4fHgFLYyorMhQdE6smZGdGMX4IaFrBqIEY6qymi2AwTIauqIrC4mDLr6BmskUptFMpuzLJhjJmynaDkQhDaVZYCTuEPRK1tAga0etFDKJvnFYz4iQJYcwWXDLpQhzW7L0974X%2FQxke%2FeLmr35c0IcG5Zlj%2FvIWk%2BrqtxPRYcqSvlIGsCl%2F4EXbOoZYmyMvDKsktPMIjEgNMGOqUBSIU7JQWDcrAJYSpr%2BT9c9XRFf1%2Fq%2Bu5%2BP5sCTvkLZen%2BLBfJzcC%2FNphIFWpzQEeCTwZ7HgEaBkcDIYq7vYS5jihWx3IO7epmGut0seE%2Fs4TmQkhYAxdPQONJOAe0dGLZRGcOX3VTk0bTCQnGP5kuw2KADDMnrSYt4bzYWB70a%2B9gLW27XQQ9S1V53Xyu5vGvXqIwdt8eUfsopzmkU9C%2BwmGFaQ88&X-Amz-Signature=7f99ccd8e05cd28ced68a77262fa2ff7db58d29014c02e7dea987b956ee4458e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
