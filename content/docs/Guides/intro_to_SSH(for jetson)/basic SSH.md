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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MZB6OO6%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDTuyYN6neauyuqoVf%2F3pTrn%2Fng0Md6%2FlUgtTtz3EbHVgIhAJRsMJ%2FS3ys%2B0iCntfujUAutHqNlb1ns3S%2Bs1SIdUC5YKv8DCDsQABoMNjM3NDIzMTgzODA1IgxrUua8C4F4a1QFAuoq3AM6j1kNnAeCabIgbtBuA8l%2F3quCN6e9fqFmrtlhy6vkuhFpTm1QDYQlhRUKzG3AY2VToNc%2BHtmr5wmMefeYxD%2FMqw%2F9FkeGeUVlKC1wQs7z06XWu4ozlwQ%2FgJfeDwKfp%2BMxXQ%2FMUtTCQdqE4ApiDEboBDLPq707EeF60aE0Cv5yocoBMhghbq2pGYoLPgMutR33YeR31fE%2BEKKaso05IYWBA490xUAknYCujrZgx8qP8Bj9r0C99j64YiPSF17FWuYb4bMSBJ1vaxlJ1SvjSjXrvkXG8qTFabFbugDJyWC5uebHN2QNu0y8KQgFNnfVni12eF8NBhOBuOoptXVKqc%2FqQxuj%2BR8uAKJG7aFj%2By9%2BInW8wahSml8ARsKfS9nBSDa8RUDrsy0fk1jmicVHxoNl0nwRB3ynXR4PYBOh5nSMfy2gGebmnZY%2Ffhz0NE43q1okzkUgR1T8kIrfBnjjFzFvWrGrOR3PC2BrEigb%2FxK8xZmmj2zW0BbeKIaMbMoctAYEyU8aHyRYjKHwCtDV%2BFNc7hAuwQE8wFsisIFjikLtv9Mv2KUnchrPaTspx%2Fw%2F4lTvKy0edSUFKJsCfAlO0Nm4Yu05WAlqKb%2FonFmT0nSN4eNC0FREmsPrslhocDD%2FnLjRBjqkAUaW2r92Sebxcof%2BN%2F1p9npLU2OSv8gKTbgE7FpFPriXaFLZh0oQaxlsK5H37j43QssS9jfLKhF93kFJ8A6yAF1t3xmk9KzZ2m3TRpXEZS%2Fmg05UGiCNrZ1cXozzQo94mn%2FuM7th%2BxJZE%2FpNjh47hEoBBX91aQjoq8wOz2WA1GRMv2JHPlZ08gt02v0BI4QlAb5Y2fnZMMYUZhawABptXf7VV2G%2F&X-Amz-Signature=fa67dd1e6e5300cde2cdd7a8d1dd808f24488afaca7701df23ca10247ef6052c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLZWIMD3%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEel3ipU%2BbqRdmwS%2Bo6%2F4NPYW7sCpLQzRIzhp2yEk1s2AiEAv4utTBHqkLiK%2F1J9oNEvABrEQs%2Fd9mgnUx2cJxNpJMwq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDHN0IbYk1VIfpeSdvyrcAxMf0OoBNKec9Ud%2B%2B33Rw%2F3ng6cxFPJVtzPuH2X7nblRK1OIJ8AAfSfU1hTj0wSahFTOcgIn4xVHtCdtN0aWSFlKgUzE%2FVXwGeU8H1ciaIYGaQtp1MzJIgtzS3De%2F1tDB4eMvbiMg0EIgsW3T7qfydFzazLriA1K73zsDjoMHAt5CoxWde7TRCGZ4I%2FLCCthBmURQ%2B%2FxalD41TZliYcWJsh4geAs6o0L9X4K2U1ikPnaoNyHepEH970UWv1tJQYXuuuv4NLhAUBwjYNHixOHBgU4epxTuilkpuvaVi7hf7mIHokFd%2BURmma%2BRczx9TbueR2Lq597PnrTwEHBIXtwT6A7HjNVp3CYQVP79v9TKQQeu3oLN%2FO7XEkOf7YmtbBwEloSoQS2Kjyv6iYyX7j5NfomaeNSs6Bo24e0jNLlujTcQYdjI0VP4lTahpg4xsdXj53408ie8YZJ8wa8Zi0IJM1NpQIh1Mzeksu97GweMqWvX%2F0Vh9MaOQrJx%2FmlgGW0WN5mVN7eLuMR%2FxsnqHDMX%2BLzmfEZhUuqIvbfCaaVr1r2xPBEKWWQuqwT4nHBdTQupCEJmdJ9PLmP4vfg%2FQluidtFEqRdFz9erBE9uhl0eVxWMNcgTprWvcMNBSR0MOyduNEGOqUBLsrSMqpye1mLElTyautPFkd%2FVkWgSkS32XJ8VMskemlCOTNSMMan2bGuYvZWSdj6oFCxF2oytKHajCVpDQ3i2b8q%2F35YwVqjkCkOkZh6nROmoYVjSOfwvzW0zAKTdUP2g6%2FOjOgZqix0lUbyBpVSi%2B9PuIKioeXuRgB%2F6PUYf9uAsNQjGsCLn1jMxZ3Y01Sb9%2BsRRXLvZp5WIsv4yMMuppw5GYaS&X-Amz-Signature=fa7bb8877033a0f102da2d2496275261a515685c9eec7f64092f7fb4b6a9b608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
