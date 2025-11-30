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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU7J4YAX%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBtT4wS%2BkyQ9LzFVFBqUqTS1nQAJveNdu33BIjs8CpxGAiEAnox%2Fi2Pd2%2FozRYLXFOdEhcidM4NvCNl2u6ZUx%2BuTaDIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BvVYPLmT7FnPsuKCrcA5CH89v76O5SUNmQkXXEyWvXVRVCF2Y0xUdL3kxMCv%2Ff8zVDqPzdnRzYDKHbDF7Kr0f62dKVVELX%2BFct5pd2qgbW84%2B3%2BQfDWyfvzIiPn0ZcYX%2BMLWgrTCpbRT7im8BtuHku5djWpfNhnldbOeDtfkErY3mpafrMcrCQZEUwpwPV%2F0dcUE7qRk7MbPSO7j58hohY4a1T8A%2BmUJQbptk2hFFcY9mm1I%2BTprWc6JqRWOgiFXBTkz7o2bifOUWumfJjO035wttrf6CkTFzhU7GPG6tc5r6WVm3SPizuuyJKHKrPLRotqiu%2BQmiMm7BtB8fQ8mf5fMiO1WsWj%2FHn7k%2FIFdaNUMYWVn%2BrQYrbcWgihUcpf7Fl95NeIpT5XFwkE44mXC6jAhl8gwlVykziAk2K5b36tLYze6hWIsNm7ZDLHC4puNYggQnz6%2BMjEOMBT8T1TGP%2Bo2bkYRD%2BNklMk%2Fwwo0vyuUemjdwr6Zr5UtzeaRwCMm5n7z%2Fr5wJChOTQfwT8ZYqU4ZHyr8BkjC%2BeHA1Mc%2Bl3ix%2FOhwqTi62nQyCgG%2BGQrzXFhxSarobGunGhRhZhyuflkJuvEvywB0UrCqE%2FDHP3QtV5hMKQmuQkDHhrqBriCv%2FEvubD3MtkglV0MKbTrckGOqUBnzxyv%2F4r6LUUNqhAFatSaj6MGlY6D9pvdPzuN6Ch7w9Ric6Ccz6LsvPjmBzqvBizYfAwfMCzPudvuVWPJqLJ6AGjulZ6xJ2GDfhxBmLn0A8j8VYKCnjgPeLy8bzgCkSIqVsepCW%2B9cFEIpWI9roHfQF8W68DQmVSYbWt9fxOdk3RlgBTJbg2X9Z%2FEq2upu1d9GBt7Qmi7STAF8SilSr55Kxu4y1o&X-Amz-Signature=046818fb0c71702af38a65e39931e3c4028b6ac4adefdd651e1d3156a00b0427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662ASQLLC%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGHwq4i8Z8NweBt5SKsfuyAsdNBrrg5jT0oPQOoVTwkeAiBvFH3CjF2H8WtmSqmHqgCOiRA062pyx8Q6XliWjOSBWyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHENwrorqz%2FdEdjp8KtwDkjZmq%2FWsXczbjLSZ2itK5GD2bj7t%2By90bVih3MqgjFAuKfbz3bDIZOrsaCqnBkFTg5KqrjTP5YiI79ZhMnIioFDPnOY6HdMioh%2B5KsM3Hs0Q28UGkf%2F1yNoCgCQflrSm7Vkbj3tnqlOD95gz5CNvoExJKt62EPV5kS%2BHb%2B%2BYWvmiYR%2B7SAQUZP69eBZXzRh1K0bhrgFWTrdJUZMWEUPcCSTrdR%2BmbXfFfTu6H3kFLA%2Bp5crRm9OHx2tBmIetZpd4K0vN%2BawchZpH3vX4lfPT18IQfJd5B%2BD%2BRBW%2BkSFrX%2F7HjGV075uzrZ7VRyNa286jXdhVESfdXcVA0XbcjJJbn%2FP4FUSOgK6c5Bu4Sq6sYYVshbwuWjRPIaAErYd6IlfbTjwEG73Fb%2FwMPkxs1UX5fO6pXspIFvXGXJNpbnJccEgY2V1L6XRE6sqJxsQ6xgTQysWq8aWMffY9CJGzEj%2FLFPBirv4UahbYsHuYvlvsTtomrbvSn2mmisFKY6Z8GbKFgk7%2FXfjtELx9hJmbrZm7t087Ku%2BgtCAj98ZjqexkrShgaRvhLU%2BHpNVTakw7Riox79Ci496Bts%2BisewaEwj%2FKozDsrcVz3k3GLnWc4%2BbfjRmsJaWDgMc7grBEZ8wi9qtyQY6pgFQiBHvzMnZ%2FR0FlNLihw88DXfm3P%2F7FARgjm0CtYsouZi2%2BhkkfVPxCBNVpCiMFDOFLx%2BWezU1SXVctYowA9GtYQAajWQROltRJcLPFK%2BdYZ0bEq1QqJUT5egNGDVIqzvEwVw7P6qTl3smmX6uO9d0SSIw066eEASvMG%2BaJZyP%2F2V30lmtPc4dBcSZUOCr8dqeuEuCNpxN5p%2FUSAcCIqisVLXT%2BOnl&X-Amz-Signature=51dd9351fe3cd5ea77ec22085106d993a84dad05f6d96831052646c50e4a94b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
