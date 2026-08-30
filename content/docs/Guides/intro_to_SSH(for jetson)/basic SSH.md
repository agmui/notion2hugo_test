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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPU7L6LT%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEvgdeCcgxr5AVKMRq6ntNaFzz%2BmIzBEPG%2F2j%2Fu2mcTAiEArNUwuiuDfsxKyLNqsJPrMsoszuhSIbC5uL0EGvksWfEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDF6qZjtyHYGlwqm4TyrcA2j4xa4nBvoATMlbMHQZqRihx663oblHKJMScdZweXSdEl%2B7UF1pflDAuk23aP4WubZBnkAcu6W5RyG7lUn3%2B2GjjqGiwZkrtWNK8B%2Bx0NPML9bKAfKqRmRiVMFLDkBS4rZ5lcVGpnJj7oo8QJKYLHbxOuLClu5vtzePkSH4PZhOsvhhZz04rv%2BqOqlJUi3fQ5P4Oxn9BW14kZvToPAaeltghfz%2BWrsjL58aHtIAs7pXOacMpVtEe67OK%2BqZ3ctIc0Wyw0a75airH7h0bCYumFk0umWWUNjM6bzL8ysVqtN2zeiV6zeuKmckuBtcliKGYnbS82tfnhNkOqzFX1JEMFDHiBHd%2FkcpLovjhitP%2FxcK1kBnpfwYQqEEw5CWF%2FxPH1hxRkfXp%2BS5VI3YUcqkuLXI2gwqHb4GX0F2p6Qf2UlrWIhxlxqwU0ng6uK4Vgae34OUCpkrVTMsUbSLcdKS7HL%2BDM3ojM13BnBghHBeLUXzwJ9iITqfhsAR73Wj1jou7FZaqouvEac5kVTHCXBa8Y%2BvVZPuAokpHqHvMh8Q2kt4khySB9i9NEn7bX0FrJxpWzjSqDIHimLpS8m%2FaztPa70bomGeUiqlO1VwqNhXM%2FdpUaAwb8bl5b82MLZwMN7LztQGOqUB3vjGLwLe5RzP6Su8as3UoGDNKvssEX%2BD86%2BJlg2BdQasee4hLb0yYdZhdVQgE3BaDl1zsS4fT%2Bhorz5HYn%2F9kSi2IdYT%2BsIJUKenQyv%2FzC8%2FrnBSvXk2RpKdZ%2FgtS6O3MS7byyOu2OqCLOeO020RnRGYjJnCnf%2FdYu1kRFVtVefn4EedhUpEO0RMEAujgeKMC37u71DcISPPATTH0K0fJF3sjV4T&X-Amz-Signature=2cf7ed151e2a2d16cdb128470bc6fbb22bfb7610d855f4264aaec0e642f54e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6ISPIK4%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSiarUlvQRhJzipb6%2FbtZz1HSCaHp11B1tZKkMbptEOAiAy%2B2yHwJOt%2BSwai9mmNIkiZK6HV636pgDzEVyXIK%2BeZir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM6l4uPdh8U2PafC%2FDKtwD6x%2BrbeeOUfmCYVbGNAP4nNfDlcqyGIyiA%2BJvGGJXxZ%2FZHvjmoFBAZekoxcF65QveScUUXxHZsmKD%2Bw38yVVQG%2BbBAJQw1fGNwKQ5VvjdIyMrBPhYHrhBh8F8Tpw%2B9rJfH6ER3YLB1gGss%2Bi2B%2BDJn2HfCMYsKu9OkqwPLUUz8%2BYH773beCCPBkyQjJvedlaOJuHjRM7ADptHr%2FQfHFzQ4W6igyMIySL%2BBJN8LJ%2BKHp2pD%2FMx%2FsUu0klK6sX7Q97zc2WfsUfTdKYcezR1I%2BnkYUy4jGk1lzbBenvSUPyc45XX1g%2BDXY%2FvNHEzPtFQv2LFIvq%2FwfFH5QaAUDUiotG%2BttesW8f000YsenkH1XA3OXFTcPMHGWT%2FCyMUxcOyOEUElC4CdE2jrLMtyS0Ac4D7BnFlsezXRcAZniARnD86tbG%2B5F3sBupSZQbnNqheihETaqfQHJDoAljMrIMJKLQwCz3V3WsRxZzVFlCiYXAVQh2slsmrOOCcygsj%2BzVxB4jt5XHoDT3ooXjhuVAwW84wvDYDHqGV4%2FXI0jdCEctwFY%2Bpcyzcmj4PBiPMCAuX5l19Bhwu%2Fa2B1VM6EUxwdHll06gg0twZ3sGAGcZmiyra9azfK%2FkbHDlSIu8W85YwqcvO1AY6pgFdQdB7EAo%2FPx0Y33q5ujzJ5a4%2B5ynAcqyQR3F6u1VMS0gXXSBuT%2BifZlkjDoALawWrs65XzihrNetn2ckKL6bwURtVI9JtTqqjtda5TBTYMLmxWo1YbPd2uzQowF4ESA601%2FjQl7gQ8wMyUlskKxX2npqo62Va65cvF42TMvnVmNdWcAzTQ95NeJ2nkdwPq03HmMQ6JpRnkzgxY5ibDBv2fouakSfF&X-Amz-Signature=fb3eef98052f28f425658d1e88d891cc82bcf899d8b6d44f4c56a5de72984b3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
