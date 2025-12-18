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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJLMXXML%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDC%2FhO8Yw0fRlB83moeCusHausEwTArY3HQ7jDzx8kI4wIgBcgjIW7%2FSpLMDSY0nxl2fzGYXbMlzr7%2B9hJF0bK2G5AqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtEo4HtHVPnuZ%2FAaSrcA1Ecov9luVf7PRpz9f%2Bh8WMuu%2F30bKwOZBvV%2F9wrJgJXOxVFQ%2FaQkn7afM4yjoMnFz7eCrd7iVLTdFPzKSO9f71NT%2BBnnYqH%2FVBjil7da5rXfnUgu3JhpbcHbJqF%2BB%2F4HWAZP6zaG54hbrMiGu4VIpRsgLC1hjUeq5ZKEqFoXZZ7%2B%2F6ur4mv6HLn43NVMa1YiUQMAPVaJPZ1HXCGWvVPUsfKXdui9DpYh%2Bc3C1Z3Y4z3woKqH1OFPWPPJOyrJZO1uSayGjl%2F0rBXz5fML5JZI%2F0mZvPACUGl73rBqAlwmYK6fT1Iek2KdOUG%2BlgclT0pY9WZoOXcG53i7ZxEHL8nkQH7uZ6SBvB4j1GmCUpuPNy3jzCGY9CueLJag%2Fvcoh5DzBd1Ya3y89lUF82Yy9e1PqTfoHy0qSb162iLvqJLZdrRrDe%2FEIS%2ByA5iQjs2Vgg7RRv0B%2F7mSbalIMk4vbx23xfcEbhX7mhg%2B9M8HijY4RT5tbfxoon0ZCzjkSYAm50KIruheWoBOcX913iZZOd0CjUWLEgOGn7Gw38qg4mWcnid%2Bk%2FfWAM%2BjaNJN2I5jRkNXmyzoZf5Wb15eVswh0TOtGAfF2fqLBUfF%2BBhnYb0qt2o7AF9DydKggTr%2FVAzMPetjcoGOqUBwhiry9Hu%2BeimTvcdEV%2BW5N5kJ%2B0k61H7CKS7TvAQjDtZj0Mnn7oM%2BJq6ZSSslyVIG1L2LfucrSsQdHMc7fRLD1Gg1OwtJmPfVwAKUdd6Yfq3wdtA5T3OAP1NMHD9ddErfAexKFzxPUthnt33bK%2FCCPBSbo4neJoK5mzu5x3HTjhbbro79In%2FuZ916uiSGODtX8P0c8Crt27IQ%2BQ00%2ByiTbX4Gtqf&X-Amz-Signature=ee4d081c1ed8c46b43604aa23f5c2517ef4460ba01d407dd782ca2f0c8dcbab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVU7FP74%2F20251218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251218T014123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRii8idfcgHHGk5ustZSLCMa50I2w3oVFBhCk%2FEvJyHgIhAITf72yJD9Sh1fFcomhU0MJDbU7HLYxdE7oo9NnWwdM9KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyu%2Fz82tXhUBmcrLmQq3AO5qnKfbCH5whIxz3O3mb2fMdJoBEV6X%2FfgpfrRzOSE0Gc3Ym9js7pmkDyFofrOfnH%2FNpCsdqyqJrgjdkeAC8VTor9nxN3ZGS4K69e7GFPm32XlDi2SAAYkMomdjDOawWtRkgwmyTjin8dClbrXHjxEmWqzlUWG3w1vPx2%2B13geJWecL3IDm8JAXnL3gN4bkqsCUGE%2F8Y6zuofW97IB%2BEjlkWsyDOvgLy%2FvPCWm%2FNPMjnywvI1hKEw7GswgGDohqdS7eKIyZAsW0i6FYSRBjZ%2FSvyRjz5UUeYmmxvDoQrRD6y96eLX%2BqhmMIeBTph8gwDC29FvM9Vi1wtJFh3llqRTlQP510b0%2B1rUFH546vj%2F0xaZS3H5VSuROvoZ2seVli%2B7dxbYExhP9OtEL0Tlab4EjwJLY%2BKUE6zz1PJjEpdmh7kJzu3oP7Gbhu6094xeL3Cg81wgSW9zfR8WKOKPQWTRm4yZgaWL71DWqSF1Zid9ujEuvCeqaXxmYxzPSHE5gY%2BuP1i87kOddJKbHM4xf2i7Tvd5lN6I4xYYU7uKQEXWcb9iqqbOoY%2FR59hb%2FM%2BYmFsO6n8GdW19tawZf8hmG%2FD2MeHRFkaHWL%2FMG45ITKEP0Zx0o%2B7ymn9SaA9cQZzDvrI3KBjqkATRJZ6Us2wLqgj8SSAKU5xmZ67L7QKZaj3EEQnzJn7v4QKFIybIMw3xkpCfemq1emDvfFE2Xc2h7%2Boowdc4%2FQUML1pHmxHbZDoYjMos%2Fer88UvlgnfjmYIh5IL35al4E%2F7vxwW35oJq8rbdpe3St6JU7dh30Y7XM8AAdmkD1U5rW3Wt6Jmy4pXKmBIxK50rZBUCqOJhi6u50MJA%2Fu2LBbYrQeUbv&X-Amz-Signature=2a0f35b1c30811c05299811251f1efe2dbdf8a2237661cd9b77db1778b842125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
