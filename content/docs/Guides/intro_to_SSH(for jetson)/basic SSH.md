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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJZYWS6N%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5RA%2Bk%2BGak5bmFBBFUUHin0RO4pr0kSMUpLx9DNNRWyAiA%2FCZR0IRI%2FNNJfs3ar3zP7o60MeBIop9UiwpnTrBLygSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOKV6j2SEwvZunpT9KtwDrSncAadZvibNKrvuqjV%2BD5R5CfX0ecpyYvKdYjatSw9Jy8yGpSAq44xYfg9sgS2P3D5aFb1Ewco0yyC%2Fv4pNu2Z4ufUuq7ZIuMI8WtYfYoz4Ej1%2BqSnPPxCNsMxxTOcGLQ%2FzKLWLULUhSHUP7MrG0IMKIkxawB1CSRhINcOSA6YUtKLZyihD1I2ZUh7JzZG9u7HtGVKNMG8E2ex5wcxIhrgga%2BHnNIB2p3KYC2%2BneHh0ECmorQhcOg5Wz%2FLiDFLCoFgQXMV%2FJcKDnQhC5iobEuK%2FM4IzxMD88N5EXlu0KwzM%2FdX%2BJL4q%2FXXZrFNhlUEvUraMY6uE3GSQpF%2BxgP41L4RgiQrpKpO2G5l4Y%2FpBpDkllPn3n4%2B%2FLfQh6krtBgtFvTIi20ye3X%2BMrj8nGO3SULq2ONcMiUivCFQ1rfnUvlOJskeTWYmdpUf2cQ5Ro6OTPnxDFWc%2FE4kIC6ww8768ANC7YOfd%2Bs5zrYAzwGtd5lo3VVijhAHmEEVc4SKloFyyewaTP5jJw1mVxFR9bTvrWbBNgAhy2DotaP7ms9EXX8CJuiyRU72Ydo3LoY%2BPtzIwcDuBvEqk7cimueogLvbEv3inoq7Y7BmIKHg2QkkDid4hI2LEo9NUwvuLAhAwi%2FynyQY6pgEuZMFsrwzvgDP9mKuUR8QWarkikH5djSPHzVltXHD7Gqy4wofYsBR4jRaZmXYLD5xj%2FSeAcYOIQzgxWdS8%2FA5sg0jxWOtkvOfd2rcdwuiimZWEcqn0pJPHXsjxf%2FZhDb6sIrU40ydYUDYq%2FCbGaUJ9kAzIqIwdUNopTjvIM4Etd0f1Xrw5%2BhJBbM0p2wPolwUo8612DqAQFiNVtO%2BNoiZ%2BjnSkvB12&X-Amz-Signature=eebbf90800bd94eca1473000b6b7133454fc14427ee0cd198e98d02376004892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKNMIZCZ%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTRWRftiAiRyrsbT1NxWEwPzyXaGP2AHrk4SapsgoLlAiEAsFP8CzMKIYfZF9rSpszS14UqFK%2FbPSRGNkfUUmqQkYUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzf9J4DxiIFuzRd9yrcA92c10SmRpzBUJubzuIcvjwjBda4MiiI%2FAsx7NRMH6lhiKwADlE6RtVOqWp5ka80ETXpwoVKFcdd36Sg%2FwdDzuTCrxlfpP8X1drSIIKtlG1xXC4ZIYDlyBlphHMlSgO4eCOKHSjJ4YP4c0WcO7f%2FRxFRi%2Fx8OmcYsOjIBRo1sRcdg7p3koX9Rc0U3uZ1wmj3kROor2IEFVKranC2fb%2FMeJdwMNE5fY1tIUjI2ExmLKIcToMBekyGIDM95b%2FA%2BRd0oFKKwjGepBPMe68Y6WfuETNhZzKZjuRSEv%2FYlxE%2F7rxwrWUS8RQS2bc%2BdVVYsbVoiM0EvuToIG505HzU81TQKxK44oOxFYA4oiRcYxWW9zs2gWKZ1YxiMzABSA%2BL9LaA2%2B998UPgEogRYCBYr1D8GYeXrD8MsBzD5N0HeOCUb3W0cn8W97OwaOvTvVRdEP6EOB9i4tA1YBYVmI1Bd6vGoEJZ%2F08NfkEljZZ%2Btr8FKHk6akD%2B5TW%2BIcLsREnYRPFcIQ3lxoVnqx5J1er0ybGgWP7HeLw2OKGL%2BTxHjjAuQ2pKg2I%2Fkn3%2FN2B0%2BDDXnsT4czhOrcQCVDtK%2BBoVvkRJgsfYY3txe496pmgLVJEijSuGijGoRclSqEA3WkIbMIH7p8kGOqUBL8yES5IbP92tko5jsHeOxSLcOo89erxR%2FP%2BUxo2oEhEL%2BO%2FER24YYcHex2ey6laa2Aby%2FmViA%2BnFNbX2%2Fy0kbn%2FbGj6iipoHXW8mfctmRV%2Fcb8QNbiNr62LPYFJYZ5VVZ2DDvcO9AfMznQnqQce5nZZ0rWwBGIYHcaayuDOI1zLHR6W4%2FqbGYqjW%2F746ffbc4Yx0wsn09ZW%2BjVRsX82QLbcsFHJz&X-Amz-Signature=3e0b26e6b4c3a4eea0bdebd23d7e600dbea12e6ae166a09d02a5e39d24b7d2e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
