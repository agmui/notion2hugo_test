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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVERHFRJ%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUmDSBnhe3sbLU8BudWrF2a%2FoaqFzQa5bMj6N%2F5%2B008wIgdquQ1BVIJJcpuz6YTst3eCzgTtmIvVf7cuv3wtIQ83gq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDCsjlvU%2F6UXG4GM8qircAziKGk6ypgnQQ5ZfxOAnTYKqqgTqBzPG4wmNFerEPpN1ao22G1jd6bbqtcIANOkZ4UJW86DvB2o3a0LrQBCRMeE217koOkCk%2FEGv1l1OcuJQpIZ%2F8ZqEZhC9JVI34AwWkcnd7xSsmSTqKvX5wwrqXSndfOjVSaopwsL6lAG5Tg%2FQ8Qpu8%2Fybyb8M%2FEZeWm9ztSWSnvL5aUJkVDcTny95gd7CNUS1vhXhRXNYRZklJ7TmGrAtvUA2mKZoPam1vapYw0IJrn3T%2FI9%2BEUJY%2BYVtcYYDZMyT6ZKZDsl%2FO9Cy5gYD68Oe8BwumwarvCPTGvJTw6fgXdFQuZHRdcgjqAXvu8yJH7Dfspy4Syz5vcJ3bfJLZ2Sf2JofBkZSM5rnUlfIB96Qdy8EvWSX1BGw3F80J0KGzhwHxKxKoWLqzYyKVEaq6fIbGZvUEFDWxCR2Uwff0kFm7XyE0Xr0lGOmToOIzXdD10JOVAeqv4uLIdN4Z631%2FSPwSwtpHBcScRt76tfNaL0jVu6NxShjFPrdGUyrPxtBBj0bzdU2RFu2wNxWC98ErFqegRbijAQOy1KMecOB9WgQZesncFbly7u4PpSAFHSF7ZQL0PByi6ZedSFMp%2FwJYnSwe1gD9qOmMTqvMIPV3tMGOqUBkEI7Ku6DeJS9Q6uC2JUzqElSdxdEqqyiLb8SuMZaYx53mpyb3HVAXX%2BeE4u2cYKQOSducd%2BtHWroXs%2FrBt5BVGG1YFYZAMNx2mW0qeOL3YzW8FyQci31oQuFAkUVmZRQe0bFgZ%2Fdfhkd4XucSGBDTnJTEd%2FLmMs74lUvHMWOO%2BNHSQeg8sQr8pJah3kKbMozyLH%2Fj%2BaIeAzzG2l5GpJu%2BzLIfg6v&X-Amz-Signature=5666d511ced8290ef41780f3ebee2fe30c3d9bfad6f7ef2b796905b1cfe9325d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT6YGNQF%2F20260809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260809T014418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3HuH2ly7xHNU5c0y7JpIJDZvr9PnYTy8PqIskgc3wdAiBD7XFYlc5SaqdMizDlHDL0wnnRfLCvMS2qUHw38NnG7Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMZ15MX8pxv7kpImjlKtwDCsDiRjYKz1W35GMsIKwi%2BbkddTjr%2FZTGN3SllsxQTJyVXZh5rvgJe7vTP2U%2FBT9hLS3azODk5k6DLo4TiOJ5A1LiYKIlMtf530GJvBTH5W7NyK%2FKlx5RVNE6z0ogZqfj44vEGY4cJOGj%2BInDzcZl2Ov%2Bm5IZQkKhx28w6tu7vpEFt7%2F7DRa8Iv5M2DURiiKqnPLw%2Budfx2DJXsBYgZC%2FFe7CBjpi6V%2BohC5C%2F8GdjSq%2FrOS4lXh3yLpjnLYQLqYE%2F%2FrrlPLVjdfQbC8tRu3kHqJ5gXmJ%2FRbI11UY7YxwEaloUTTZ8uO%2BX8bzXr9MAqpxEWxWkwgvbplaJ%2BjbPu0680cRjyrF5tScLCu0OKRSKa9Ag09QEXFjDgYz82rp2LOjcG6eKJStjhF%2B2SILpD0j4WBmrTAsBQiXq9Z8I%2BAi0MWorkL7qt7KNz0bPNyI5YjPyOCSY%2FsknsL81MVP8Jwrk41F9yFBtxaOM5%2BPrul5ha8nPVncp0p3ZFLiekAxlydLBTHWPXZInjTlgRqu%2FO5rw%2FVc6oi1dGJkTfCpExnB6UejY5L3UXb0UPHapSLIOT1DbjZeydq30piIiqPrfWgjg3bGUEAriBDFAXowXq0Clm1voZFFm4mPkaOTqVYw8NXe0wY6pgFefV4%2F7EFph8Yfh1Jovwqt31F3Od22dckzvTCfTXa%2F2TdM9%2FrW42lWuxLtHfSSEhYCUPCoyyk4GGwwRAcqQ2PLkBAumPC4TUPXrvoXDWH9QWnenFLBLhbBIdZvWrNkzj%2FaTrBs%2F4740y%2Fr2BjWAfg4gT9MyoKVXfvb%2FRlFhygLAi%2B6buLzy4pI%2F%2F5rO6wQXDKOKo3cFPc6ZlUd7v%2B4vlOP%2BLKDt1yE&X-Amz-Signature=d3caaaa8ebdaa07a5eb5741117db893604f3cff55ebab054e1802b4feb845549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
