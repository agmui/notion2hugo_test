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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF232Z63%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBr8zvL%2BByCzxQYgcT%2BBbtBHS3CG%2BoGiStgNEy89wAQDAiEAkoicRCYznqJjgJdys7ydfzsw%2FzybjdI3hYNbLwL8o5YqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEa2%2FDCnDBh6Ill5SrcA4kgkbwgmOjrsSctKDVfJ%2BwHPXV9IlNpzYxxFvZVX8W1FIA%2F4C8%2BWkPY6Fd7x%2BekEXDRGuw%2BMJq0%2BtTH2rc93k2KML9VDUCxole5Alb5nXzoFXMxM55WQFtNACSPJ1FuCoLFO%2FJ1T8FO6B74vjfB4hnO%2FwtoDmKEYaBrpJfWhArmADA7jWvkbV3sHSxCkMbdTnZnZjucXEvjn%2BN3TKjbLxCqJinFa6R2jLDjAPb4aJNm5NcLZc%2B7zaJS39ysyBbRYSsz%2BUU95EzvUJNFpOHmVeCCuv9xQ%2F%2FAS6otLaWyK4Ir2%2BsdquwyIxCb%2B0aOm4ChmIisfDIiITyvMxloUrI1HgE5%2F1EscJZUQltM0L4s8LDnu4vdL9qkHMu6b20a7%2B3JCr8qUm2ArWSr5AjsXyzAtQly1OU82KDiRmkKvM6YSidiU%2BEz6fATL5vGR4i74G53I6ARLgSq74x1si5gsoT7QwGLjKIsxMIX7DI9Vmjb3%2FpyZAreZIT9Zq5pWLEWzxG87Syao2W6z9A7gJnEFSBlvuVJ%2B%2F2Z5rGniTRPHLYlKurpZDIwzOyUPq6JV2%2BNtTFfanp6aBcmL1oEwMu6bzWuffaz%2Fxo4CJZQvsjIzKXvsRw5rBtyGgD%2FyIJ%2F2xkXMMbJkccGOqUB1JREwJtTeP60Tj4vDOB752SHuMZcPrK6lEvihBe4xx2PuF8NyBD%2Bc%2FHxP%2FObhhWEvrKDfftp25GcphpXoi%2FIQaBkbMAg57fzea8ZKBQzOgw%2FSg1FX4sWBBOxOJFfezR6PLmH%2FSKbwLb0juAK03np2vtJjios%2Fvo4PEXa5pha6wi2Xfx5YNYpP%2BpPHpAKsUjzKdPPHRem%2FxuYfe%2FteKBgqzzPz7NN&X-Amz-Signature=6ced6c23e120e418a2e3dc95c5642bd51566d9ff51f461c128955825a138f78a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HCG76KG%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQChBZABxB216Hx8kuuMWInHatpiE3SAX53QEbuTYOiRiAIhAMiD8Eo%2BE1oyBf6yKcUn1UMDBp4njaSIbetLsaHkFs27KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiawqyKqZJaIcVL0Uq3ANK7g2%2FTOocY2XSuosU7sfTdcJXnUQrSGSsR8tM33DxA88rw1im1d1tVp7FojjtBQLNXSk9DLUY5at%2Bk9qUaSaiaD61UjvE8GUQRdTU9l2MlikuWg%2BsFHKxY5She0nTKzPNvkRS7qs7CehgOTjRAMjRFCnMlWtBJ4LsA3x%2Fx1vEtoL1HXNnzeAKz95UG077ulzROJPEGs0OrKcGDVl9R3zbxZVxDAtQCKD0%2BNBs%2FFwIy4QLNN2YKHVlNGfT7ti6TLaiITrt89WaEgLtalRvfQ9ShXVJHh9eP7nF9uMxNuX4wsSMNMqXGfe4juRAWPPeWor%2FnP%2F6AKntbiuppmH1OzMriFY1JK0Xz%2F0DiaCkR8In2eTeRYyqK44r2LJwXRFKGadBHd562jBklUQ4q%2FkcnNjDNQmDH4bAwhq2NbTr6QuPEX6X1iL5XcwALZViVAzOFlvkXOOJwF45IEtEqTzMzE27e%2Fsx%2F%2BLuqdBxiPViKeDNcTuquzMxMdH%2Br7asibNyfqeSTq10gE%2F4xs8V4V0Y2ROi1Q6lajVH7nWyq7a08p%2F0mchUpaNUApuqTCw8zkLNn4aK0ZskcHIIEgKnIhdehVfyHW0ZHxrGqDfKcPiHyMtDwgSkwQK%2BP1LuXLyixjCqyZHHBjqkAYVqdYmVlB1vTO4vF6GxBJxYDWdrcCvGfUKn%2FmFpEDm2LP2d%2FwKLAVqTqspJRPyiAZRd70ry9%2BE6hV9dKM9iRSBp9A2KqVjevOp%2F4vWwlZJyD9AZ1XnbKD02xtTgGrp%2FCuDUA3ihjquSTTTKcEneGf8n0uosNVIAMD0rU2aoxjuGKgTwxZCexs6hA%2B%2BKhkcgbYVYW5vOKWKHcSOjY28UtrNnsLbc&X-Amz-Signature=638f63dbc6016f75ff34eeea5dce8a059caf94c14e4dfc32fe01a2103ea408e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
