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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CEXCTTH%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BEXMjmbkCg3HoMQL5Nnsknv9abpx5dOvvue2%2FIqM74wIgZBnAbyQ74OkuvRSMVfC1UweQ7P4veYckL0TqEnVZEDgq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDKy3wzxG3OWFxfOo1yrcA2YBqPvYHXkgXaKRELxvWyZhXy6Tm7lOpAkmSJrrzu4ReBZoPVJUsRJslpg3kifVEmtIR978CpcNjAdP9KsWB5RWUGSPXmSPwIbdYZrlSB0TLjctSt1vJlKjQWtFBDiG7BdLHs2vILHCuspQZoOnUljqt01Xy7uSyIxTXW%2FPG8JbVHEnG3xdfpjBYXU3uOAlBfBM%2Bnjw%2Bubo7PhpGqtbJJYkP1sS%2F9QgNreWDSnh%2FK8syxFHDIR9xjPerU7dVmC%2F2%2BYP6K%2F%2BjIwstctXC82ECGO00X4uvRllJqSgbXXsQ7DbZwQYOdnUpBvX5ECkq4Zge37TB9v0g22wHuj45IjXvp8v%2BXuGfUvQlT1zNrB1amACB6bbQ1nmwTTBIIJPNzBXVviX%2BZZqs5sU8PmBMrGInqayUSqFYes3PGs0N1v5O%2BEfnjkUZmZwI%2Fp8eICjyDazg7MPzwXAU7CK6KMbYiVfCpTjzTYx4CfA6ApUaLm%2F5StNJ4KX%2FhdyQy67%2B6NeS%2FtRUoUnsWUUr%2Fr%2B2L0Cw9D3Vxi%2FLSZgXcpCi3%2FDC76J9WvkLI4vZYpPjDHQoStvGa6AmlmrJduMNze6%2BeiLyfZJn0JzgxNkL2x69ckUEmr5KtiLOQs3TZUG65O7SE7KMN%2FHztAGOqUBZkbaKfxUz6aCXu8%2FPluNdsjysCkCWTRJLYAbWWA2oHIBLMnKZCZZOawLMEsmiAF7cwnljqV0rJlTCTSCPIEkp4kPBazm38nqyl9TCQgB0GdB%2BSsQAOzEu3JDp3X%2B%2FzvlnaABuc0Ufjxj7bnPwPpkwnaGr9h0EW3r03N3%2B%2BNYmv6InUi%2Fc1Wl0BwldeODrjGSZ7RYXBCE3LlsASviB3DJBgDfyQcx&X-Amz-Signature=2c421d4f5dea3b369923a3f59d6966631498b9fdd127ad55ed07facaa39d0098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4LHIRIL%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRWoqJMqIfgMXSv6NF%2Bbx%2BD5%2Bio%2BTBtNi4T6BEIIxaywIhANOCz659Z4wn59JabKDE4uh1nPKWy9LoCcafatWiceqGKv8DCFoQABoMNjM3NDIzMTgzODA1IgwD%2BcehVVJLx0abPDgq3AOEXIXiI8eAn0l40d8fq4O7SBItIWRaxZImtpaeEXnp0Ge2R3Mi8rX8SfFcGi9EB5EX4BliddS%2BPBiU19Yu11MZX6ajln81jKP5xk5xnToViieX%2BYZFJQClhfW8oAha05SFwTidaBFU3hKqhzM5ZTIiFjzzbkYZ1FZsUDaKcE8J%2FCqJa0%2BKMTC7EPk6TNan88KU3t%2FCWYx7NIOIfTMiEMNeAJp2qiR1JXk2rkA17toNGYBVzMOUPP1FHZE82I0Jdzr15K44wt%2BAc4gbF92jQnuiYmcc9e%2B2cASfHv05oHNUEqj0wVr4a%2FOKCqHfyuq2jlE9KND%2FjP9SVa%2FnJKQe29vgQrk7Ta3jA0aK21Kqbfee7RioF00%2BR1EjnjF7TQ0zCbaDZfCDHGxF7vyB%2FghaK4lu%2Bxwh9TPg0cmYfzHVay5yAky13nOOghpX%2FRsq5dC1HSOtgZV6lAYxyHlv1aIR5fndUB6%2FuDT%2FJlxEvdXIB02Wu1r1rvPMWWYs%2BqZeismHsLDRAF93GEX%2BUTQmvf%2FJdwFfODwxLHFfVxHZLO7PgNPJDNviXRiUdB0PtkCtnAGdRIeaN%2BEok0zmqSgPEENlxKvgctX2l1gY8reiPVJl8dkXtaBUpJ7vdJecwGh3uzCotc7QBjqkAQg1qxf5ZCmJy5EIJVc1k4vn3abIRVbMx65M6X7NA9ZUIN2CoKJWTkG66Gp0uYjoWP6e6PyJ7yBBAmqjyPVrUIVuxxbuZgMGvl6V3MFNBVzF1GhxCeFzPFlOfmSqmk2JGCa5kzGQScOl7yCc62axqzz%2FU7MVvEu45BUCD0YF0Fj0HxPl1j%2B1OrxY5EzNI8fx6XRW9EBfRpzSnD3hD%2B0ljYaN2sKb&X-Amz-Signature=d907758f718a321498f1cb4826fa739fdd315d9c88c28568001b6e68f4b7268c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
