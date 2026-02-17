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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGDGYPV4%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDkeYis%2FXdUdUzADM92CbgeuqvTvpbakIPHMklpq46fkAiBi4b1QdBGhwEKdlP5J%2BU9%2Be%2BfAezoaijO2co5B44eHKCr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMrvJlQcRNIQUZphQRKtwDNecpNfNqraDiGchBWMpq8klJ47Zfw4Jg41dIOBn2qqn4jSG5%2BSG%2BrmJtkjkWHd3HAeNx5GkSoZVRd%2FynyWhY%2BTQG6ZDXhmsAKi0zTdrVAzJDEEQnhlAzsE%2F2r0z%2BDN4CVLRhN%2BmaSHZpIiX4KqI6xAS4hIfWAgECclAMm2wOBVu1WIQhp2uCI0m4jm1LiHB4tA8HbYNjV9EvzoaYjQOgv24RzeDVDg2BLkHvmPSrdtqCVPhIbnz4SKzkdt55B7umiETgLSlcm3U%2BBZ0O%2FfseFKrIsLbGAJHd83nyYSncYW9iMF3bmAH%2Fe%2Fu9eX9LuwQ3qU3xRAcbXWoC40k%2FUw5ex%2Fv%2B%2BILRH9dqUucyXiijzEbrreInQwikE7X6On3uSblPbjux%2B6su4Zyr0tMYpJslstxQTmpSzL7hPIY0bsiswSmP162spULXFCSnEhxqpYKy4%2FDt%2FsYYxguhIxOo5gRM%2FGNvEB%2F962gIQHLus7Q1naoOZ0Qbii74T8boPG7plWCBo3jCNM9%2FfV9kY34f4MrqitYeKknXeVkJhsdOUhEXEHxrhxgxQwxBmAjh2nzia45Lm912dld31Q8Vgt%2BZI1s1JpsBZ%2B9wlWaPV3n5fW5HGfwOxdMTIXyZb564zywwxZfPzAY6pgHaomAA6CEmblR7VYxlfpXq%2BkDBhx2KYlj8fp1CD5DfVed1ddFwO1Ptfxiwgck2uBMxCUd%2FcGiy7mEaXM1BrQ%2FRZ24g4F8TOKEF8tA5G2Tg5EY8dYSFA83t9VQXbfvqfjc23AXDZFiSi1luVhuUimbI5kxmkd%2FW%2BoKd0KIAPnzeMbRrFaICDo%2Bb%2BRsEaBVJkpHPLSJ9JYXkbHie9n8L06x8t67FHG5K&X-Amz-Signature=b89d2bacbc59a363745f5c046a17c543825c4376c8101baca8b1ff20fb7229ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JRUJLOF%2F20260217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260217T020935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDKznkC5xCC%2B%2FnJ8rG4%2FqT7hRipDpxlMRVjJ8CLgqduaAIgMsPnmHtf%2B%2B1IgMruZ%2FuH74fkBFUwYPka%2BYYgSWpGU%2BYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDEYvwP2ndkqN8BNToircA1vj6uTCYPpkQcdTuAN7HBXWCKKNDkqgA3RBKBMZ2qM5Uwr6cH8Rsr7xzllWygqUU9RYf%2BUM8PbKopTEPIztEaVKjy35%2BZ7t9lW50zy8s4uCkHtjvSV2OLf%2FNK0QTjrGcVvTUVj9WOOrmmmO9aFOCn6tCwBpUAV3QZL4eIKOBg%2FxqV%2F9P0xLMsxuDt4%2FkU5y%2FIreg5DCAITT59Dvm0nBhV6IlFrEcRGxDxY8%2Fj4H%2B1rnty%2FJmQ4PHoyMZ79XL04DRY1YAs3R5RzDvkiSBlDrRVyUFmD2rCqoaHWv24%2ByBcNOG%2FixFMZ0AHd2MccaEMIBgXH2QPceoDhMEFVBwSYRBxRbuyntHGyHTXqyawcYSt1vO1khFUtNCxgbR1tgwlI%2Fvm9ULuy%2FyqpEnkX2pS3TTiD6o%2B92aO6UwNR9gpr0maP61b%2BzyjXEdnGS%2BvfqMiDwRZm7pz3QlRQiBu30xjYnEtlc1EtQ5a3EEAOCT1ZEIjRTuhb3O9PpyS7A%2FEynbMtSUMOwEiTyKaD0AJbJpWOhsIVltfWXGO6IGoyLs3WyXTL8lIgZMQ7ubsQTXg1JiWoM5rlJ3v85HtjmRkinD%2FAumYSH%2B3cdXf40TK9ys18RcsMjeWl1dib3jQxb9s97MNeXz8wGOqUBzJAeK0%2FQbN4VBxixoMyLhWHOQmlkj8hjkPSZhqqt4QxVXLogLAURmf%2Ffnn9IKctTPT19Lwgqnr5sVWwQWK6h0qemCFBNKtPaYK71bNxhVnG7ENO3ROhLeHXfTFL19bCl%2Bmqr4M1W5%2BidVMxIqWO4YcqgP7K3NHTBjIQAMVmMxJPREr5kgZ%2Fk4GoPl1NcoH%2BN4YLAaViqaeM9pmRkcH%2F41Tc0jBaf&X-Amz-Signature=72901b4b14e0dfc765be538cc61054c0148b2c8abdec13e3175f82667330a0b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
