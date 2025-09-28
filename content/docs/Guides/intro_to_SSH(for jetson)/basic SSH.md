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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGWDEEAZ%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIECAix4UMyThBV6HVs6vOH7nwq66tXN2WfCZMbrkG7pGAiEAwAGU4aGAZXk2TCzVx8UHtV3AumBQX3Df4mMwfxSb2t4qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK6kM%2BKxCx1N9WhR2yrcA%2BijRQ85H2ZJc2TE1moOjfRNyranMYUrils%2B4q1Qieg7Wia%2Ffj6sEs3g318r5RhTs95iAV0RByxoRjE7pY%2Fm2OtQ299cOsw2%2BIZunEpTOtdoyc6%2B4NejvmvdNW2AJHp4bd01ucv4Q9AysCM%2FxSbLi74TpEOdMFWmz9GNkUlSiOH44nb%2BdxtCKLrPSRCkiTfGAp%2BB3OxbpX5zFvvNlaJBBUW1JGElLre3%2BwkE0pfkGzJTQ4a%2FjeakVxDdLwhbUJbHX5ySOA0UmjQndzyjvHZFSwCqPIEIcbykX7Lrc1o7nIEUUU1iy1GDhJS6fyAthvaAuhgqXUYTzDIe%2BLJcyqGFaw7Xht%2ByGD9acAHfFC8cs2egce2bGzD%2BpttHopI7bjkRLqmolYMtqlaDYVCJImBmFP3kPE2%2BENoAFrox%2BsLy3xb99X5u8S221bGNacdjWh6BpQ9UKTCOYa2TvlRmr8HgmIhJMXI6ARRdchoZhZqmY%2FdXsrb5yjJ6bU5NcLr8U245hEXQ7Ke9cul2JnkCjc6JHns%2BZ0IRHB5mg3Sr01LWsbiBz32M4I4FIZ0%2BbFxuCZWIsXXWNSlas1xfMYAZm4h2HPMftsMAntH4Fr2lbyWR7JGthhmClctmzeUi8P3cMKi%2B4cYGOqUB5LE0G5t2p7k%2FznPb7my%2BYBVKhMj%2FDMtBAHUegGa6I47sGu9M2wm%2B3yaBuarM6nZY0HNAw7qw9zRZ5nmNxfsQcu9lS4NxnojngyFi3f%2FXqvePsijH0TBHN%2BgRNuiSrdE4ymckXZwiMcCiQPQutcuWUDZBJHGWPhBbHiPMCLIlO61YZ8PHoMs8aAH1Z0wyuTkYAsxeYi%2Ftir5CQmcyNO1xo6Gb9Fcy&X-Amz-Signature=ec0a80499a9539977e3fe7c7febc2409ff674e9522b69a643909174a2b907aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTJTETS%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGu6%2BUH8vv%2F0If7C3Cs9LvWj75J8VymA%2BOpYY5rx0wTwAiEA%2FL6qyxkqQoaD68tmxtP9kDhEW0LyOHq7w3Hb%2BlDSBOkqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIcdZh6nApRnqk8sSrcA3KaMdQQdY%2FnSL28mOqrkQJFT0AUpaTYZ3KluOlKAPjQuZCPuEaN0OEVt48wXv3cEiuHvePkhLm6wpuA2n0nI9Dk7OKGrnmBh8%2FlNHyC9f8aky94%2BEYm66YKeg%2B3WPM9tdUKuTNcN3%2FuL5jzxLrsjLCmYvwnpCROFFnqtLB7Yk4dWuZ04IzNWg2frba1AO9FMTDJsn9fwiXWcluwAXXLY54ocmvvv61FZakOOdWf4XRxKHJsYl4B8Yu5ZJh9ULfYAVqHYJu1T1Hgbw%2FtfMekz55m1CWdow6p5awqrMAj%2FryShtQJJbbnsR0MewRFTsGrXhtIqL0eTRTmQ%2BiI4UqJjt3Re2R7i4VmdBRi4nSXZtvMUEe5P1m%2F5n9Ifoxq1e4uZ%2BcRiGp6hxMHAfXDFdgEEFXIBkgKxkLHrCZrtk44NteUWOX9Hu6GzeX4IfAbFdte7DvUaMQ8XHKL%2B166R9D3lMZjRgAyyeN7RSBokadAGgdtD6SLTKugiV7LVQ2eXozdYWbzb2yhG9489XA9GucHwEk5aGoIViP6Cm4rkfEoGYPcbm33I8vr2GRzFJEq1uy6VkebcAEMbiQ7Tw4ktAG3HeHXxYetrEKRYTlKpHnl4Fjespy5yH6nXJvoHwWVMPi%2B4cYGOqUBRJrRIpl%2BdxQks%2BtJIJy6blDmpX6K44FKxDq6blB7iGv%2FgQx6jV9a8WPvMg8KE%2BFrU57CWwjehscO0xsraqqlmaeXuPyPM1hf%2By0KgiUWZqkM6zWUJldjDXG%2BdI%2B7ClpVYugcu9cXfGHNwQ6Z%2FDFacMu3tP5pT496mRdsuNN1GE0lLaoedr34UaE7VJDsvGHX1KGd8n2duOsrl0Yo6RzmyDZ%2FusUI&X-Amz-Signature=1fae11ae84e79710a58eb77f35e5e88fc523fe01d0f16858ee167f09dd092499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
