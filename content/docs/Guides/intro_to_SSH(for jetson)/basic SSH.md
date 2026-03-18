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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHZ62WZV%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD2ebdqkG5nTOWP6xbhQcyi2hhA4sT7xFl6RhuTI%2B%2B4DwIgBGf2q4LdPZyegFuKObPLmgW%2B73uRJ4o2z569aok4%2FCAqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPEicTX5fYqfy03byrcA5ZqPREH6c86%2F00ZDDDCCFF5y%2B8Xyh%2B9Dpb2XYPffKC%2FK4BhaWHli5sRXkDuxenEEGwQ88z0L4TwyuTpg9BP33W2StpeQOC%2BKH9sSx3ORv34Zo%2FXpH4jg0pF0TemqoBLN8ld1xphSpAIVL33AJ14%2B3JbuAiAPWaUqhNQJtNsh3oLQZ8MdJ%2FX4glt4tFi25b5fDzxvyVVyZDpEvPk5XH0FzUxcrJ%2BPFc4t%2Bi%2FCrktrzJaAAAUnnGEQ7AZlD%2ByIv5hlacZGvdjErATky%2FBKXT%2FivgbW9RGDybz%2Fa9jFuqoInogPym16fLm7l4BBzewu%2BzLXLBN%2F9yM4IrP5jMdwC87wvEMWR2fi1t9BKW1SpXRM1wk89jLV1kUKeAHoJWoN6FzQ%2FRmPmcGjzg4IfFsXtLyTyjltZboJElFfYz5G0QtJInpuvBVHbpQOhakaAjTuVIC52iOx4RfiZztSaFd1D7or0ukXOiUCwX41Sy2HZmiElq%2BOh6eYNTnugqXqUPUTyV8SmzQzgvWf8i5lCWyuJDiBCwAeCg3l4SnCM1Yatgd9IhIxI36FAhb%2F2LW7WmYinjN0Eds7hKbjEmtJrZeBj1Z%2BxV9IiVgZYSrX0SKU0EDN%2BhBiV%2FMz1AMUqJuffntMIjp580GOqUB8sUjB9JqxyCT7S9vEBvMst7FH9eHZdbaWIz75xmnL7N7UpGxxP4pGuCG8WK%2Bn6%2FoqPDPkt0r4fYEDrgNLkSBiEmxKQ5Mj8EgNfcrkSYxuH8kaaqm2%2F0Y%2FNJOY9mIm44pvKQLgnJiYCfdQZd4i1i%2FHUy7zPUdyKK0VKVytRCg%2FHfTjKnY0zFFiWUFYfdjof5bl%2FFwgQEs180CiXoOQlpNWu556tup&X-Amz-Signature=1dfd5e38d7d71a5ef8ffda96ee5881c6d11754486776ff064fd73c7f1dd50e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH4ZJS5J%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGdarvqxfduZN2UFPytnanm3lY%2FNpCSLUym%2BTc6skDgTAiBOT%2FhXvZ6cnMiY98tRHS4GmT4dWCdjFFNdHUR9hIFYaSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR7ClU2j%2FKz4jZ5pUKtwDxAv5dC5RRy8oQYfNpXvzE2Gf6qpFCIg%2F%2FLvA%2BlJiTuOBwtFLh2egDT26OHbNZ1IARuWu%2BynzQpjiOmKgXkC3j8g8YkocVPmy1i0Joiy3TCHNzLGVzan80Mbn2FCcFXra5oMbw%2Fgx0kWhwLRZrN%2BHCZePQBWU5z6zoRt1c%2BjSzCu1HcN%2FzbB9r3XDJn9NTX8XTyPVW9NzORBqIiMblzZrV88jOSxh74sF7gKXaCn8hDZTpuI9QqJRTM%2BmuKxkYDmM4mxnOuLt8%2BXiJ0FbGO471i9P3znqhL0OdNrEoLds8%2F4PnzF5%2BGk3Rz%2BygJSni%2BLxsisGflG%2F%2BiKvuZJHdMrj4vxjjxhDzwchoB82mT2lMPI%2Fh38os7Mfeqc8%2FGmJbzwgzWFuUYL4ECX9XFFvT%2Bm%2FCgRGC52uhNKrxfxFcHd3WAZcvX46S6N3WDPWCqvAQV%2Bw0VBMX3%2FGM9hc20H4tKBrUWmuKkhN2Udgn71LsB09JMB9qWwSUcfER1YCIsfuvehDmCjOVrd5DJ7THpmkk76I53hLiOgfoG4r4g4BYrERiK0HJgIYDBuvs0su0M%2FdXdu1r%2BGWVp%2Bs75Dyv2rL4P43jzxjophji1vZR1AnKfwEyyj9Y%2FKZHRzkOT%2B5ZOgw1unnzQY6pgHbdyalBYYiBuZoda%2FGNJQnuQizwgTN7Kw1auRplkCJADkLFGYlW04GWnLQ8%2F5kWvcQUuS4507ZO3JgjitjfGXee7XYoneEYjHMwVOOK6j8hmK63JQEnhJPSCVt9lRmgJ5iUZCKhXOZrFoCo%2BoQ%2F6yIY%2BQE9jTDONj8Dmqu%2BsmZXxi1S5DF3sfifCMy1trYWsaDyMEdQqZobDFjn2Ltvh50CGWraSTH&X-Amz-Signature=0ef6d1f38b753c266d88632b1a9bf7cee3e154ddb3ab30b2dc5484771a331d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
