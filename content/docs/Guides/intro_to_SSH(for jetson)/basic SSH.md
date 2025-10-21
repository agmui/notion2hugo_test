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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXL2MISH%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCU5IztUs4IIDFu%2FUwvTeBkJydqMvSdGqqGpM7DrPEN9wIhAICskorg4ay4XB8%2FIebF60S5iLXbq4cllcpYJY1FStL2KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2fKtMAsK3%2Fekicugq3AP%2BOof0%2FakEAAsP8MD72srxkfY%2F%2Fz%2BZt0tP5S%2FIDonHcPzXslE7wkS0j0E%2FQyFRQil5SfEz4yax%2Bl7OCg7TaFGkbxfJQeqiREncK%2FhnAM45nqCw4robPTT%2FWCXyeqkSu2wZRnG9y134D%2BXQSYW91wawFCKgxDMOvLaIuvVwahCFac7B5ou0RElkm66hhMsfZTD0sRpiNWDdmmCDbD%2FpiYf%2F%2BMqSFvqGP0PijUWseCabUrnmWMA5CcUWRr8T4zUpS4Kb1zzCuJpuYdV7qsNG9JpTOa3HfI2MzGyQINmSGOrcb3VXaoSNcxbOk9D3SG1zt%2Fc3ZK4%2FqaoIoqxd4Sf92Abg6xy6acRlB8tvcdkd6GU1fJR%2BfOvMZnoDkzM2t%2F6ucTAK1xIzvkhb5SzXsaweP9ASwnPUGEPJw9tlT8hgMx3C2KEVgv8p0KUkDHI8EYaKHqVkmrklFQz%2FpvO1BUVS0CkxEou5KOUgrRBmcVxQlauYfdKWKjdw6%2BThjXDTMCmQnL%2BH%2BP0YvHZXHC2mkcvgQu546fuCaPg65K2DXQcNpYAlsmEpaSUDo%2B8xyrZw%2FBDHM87aEPP9UbqU6zj5Ely42bbN6OHONZY1PvWDQgbX5TafWZ6avgtWoqucsjZ8%2BjCLrNvHBjqkAdgveVaCUldpxl2FbpCpZVFiARj7RHoLyRzcSqUm2TqhK%2BbMXIRqRQjU7X1K96JtAJXnDv0q1eb2tUMS0IDY6RRTkdfNJIT1B447ZNuvbv9N7ASKTTVphblIBwuBotHNhuXfZmCJKysQgC%2FEIhuP%2BGJHrdKPfuwhL8v%2FOLxMffuD0cZ9Fr3EKAwwOnTzcpRHhg%2BL49lt1O%2BrFCDesfrWjoQrdEUG&X-Amz-Signature=4830fced58843f4c43e72ab644d1a35e9c5f4dd68dcaf5cc09a79eeb02e74542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DDS7IB%2F20251021%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251021T012814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQD%2F6x95w3o9NSJEQ0FiT1Ka4O%2FlUmaEN2MbuVAGHpnuEQIgdVOS0hU8jxffoCKOeSR0cTgidc%2BcQiTgRICdU0IJdDoqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL1UFwynIGMQqYmpHircA6FuNjejDAD%2BF%2FYutYemBe%2FyjuDitBEEgM%2FN6k9ZI%2BvwyK4u9EFHLXsuuRRKX2cSygFAwBvPTBUKBtIwRpzJB9lcl70P3nEgF95t4%2BtjldgvW0DvJ85Vl8Bm03IFK2WVOPUQsySld9LN2pND2%2F3AvhdfhG3r2XV2zfiSUC%2FYoqoj%2B%2B989zNN8isk5wMazvsLrJJjBaF70Q8PApzvfkkP758CJDGT%2FZM%2B8qvN3FOxQLV29bIGlCdwcItL8XEc93oxMCSMh68xiUTlRLvTd%2BOGhGPcb8rUwVcgbo3vnp6KqZe8Ts%2B86NJI5SLmYRQ1Y0LIJBgNSuxSmZ8PejIOfvtzFqFV9i2gPSmpzqHvY6T%2FymAicRqs6WgwFJTUZ4%2BvN2MY%2F2i1WZKezWRZPGwRbjZGKvSdRS1gIOBSm2pQIEePnuGeCX1NHdD1IwKo4asJJ4InkxSGxLHOd7VmpkhklNpqEN3k5ju%2FB2eTbbMqeMAqKIgrzvysou2HXVHOhjy146beqi%2BRjns3nThhyyq4sOnqmqdrGdF59dWt1qjdJbaX9bt%2BpatGY5ODgU5LR82ItqhvfJNhhrH%2FdTCpuPa1RbqNrGNH6Ok1LbWF6mmP8t3roc3DfqXiN0yC0idrNxoFMJat28cGOqUBYzfDBoxpHr0PXOxNA8Zj%2FuFmpswrYKc6iw4%2Bz%2FAlkdJm2vq4N%2FkfoMYcM2X7tdySQ%2BUSU1dwfVe%2F%2FhU%2FcHtBxet5S4s5gyB6WmwdPYoKuLGKQOY7lbVX5bmLoEFyvTy5%2BXenioHfJPO6UrTwhzuilxbhhYnH2NplFy0o9SLyr6Cm15lEnCX0NpcqQUM%2F%2BUalTrXgGiCr%2FTuqeMzcJZKn2rHYnzzG&X-Amz-Signature=045571c01f1a83045d21f577e424d991cbd608d039d714eae45fa4dc350ffb25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
