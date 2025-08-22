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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJEVTATB%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FXT25qhG%2B3LAaSvomIbOotnFS%2BREfC%2BsMfVgrmn28PQIhANv94Q%2FYydbkhnNtyUGEzrnohZxPMvKDwFBbJpLWxa4pKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTPUNYsfPRm8%2FQ4R4q3APqJ58edq1zpVudrNk5VkKxaACJVuU8irr4DwmFfVz8qosBpfWERXJ7NmUknj0SMbiO4GX%2B0AW9kFRveS%2FVRsv8P5fnbGi%2BE0lQfsa6yGG9Rlqmva3%2FA0yX3%2Fmu4ufEndJgJhn1hTM1Kbzb0MWVNHfm1W4OCYIfE8G5fsSHo407frJa0Gkzwm90TzObnhTPGXwECER951Qb7QnCrCaPzKV5lfAeYK2zBq0TDtlBMVIfgNQPsKR%2BwM6AY50jJYNzEsfrAzwUT9c21JtpklC79t3QHa6aL4gzxvQYCS%2B9PXida7AGE3hom8xfOBRgXfo19SqsfmVaW77FHcyxJVfeNyV2sXbk7dvQADh0UVteZuLalPohOw1CCZoYBW1eZYDuTsk7P6eDtaLSYAIjprGY7R4DSCZU2vKWHA5%2FETh4HebYIACyVTREeJKoouhHZy5CD89J7G9yS0xQXZHgSNrWp3QKI5PB6E28Hi%2B1voBtke%2F0G%2BPwU2J1hRTE%2F78COFheSV%2FZlHfYI9EOBB1WgY88GiQEDH%2BDeZl6zip15G0HNyGV5cuGtjRF9QhS0LkyqVSwkjdfEWScyQLUHJCGdSaVwtC1jz5ObW%2FQ%2FT7hettKsHS5qOeWxYnRIvXnB4992jC58p7FBjqkAU554crddpdNtRvrn7iUnBQJ3E%2B2Ny1Y3xI3NNgiUhpNuaZxEFhS6Af5zEbw7PENa%2FwPMRTwDINEzr8u7hAvB6bxHFRFNFVQncQtLPu1v3%2BNDwWKPq%2BnGeIC537qdwVHPnnaWExOoy8rPVah2eGhfPJLa8ydxbcZ9%2BIiy1z4Nyzak3o1m9xKHjByVWeHIPR1QQCUMhQobnfW7Iew3I8z2Pn%2Bm6%2By&X-Amz-Signature=15c9be69d5309eda8530a8b9c4743e62fcdc17791fac13048cbb443d622d041a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN3DYPQK%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJEcJLBmtZucWUn94QVyYwNOlJAv35UqT04iN9FHg5HQIgU7CYHqHkNhZJlULgI9X2IJuD2%2FoNY5rhKUWjAREnIEsqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCVcYhZ7fenx3spF4yrcA5ClD8dVYwV92JtOkG550vs4UJ9mxbG8%2Brcjzy3VDNKGKBudL9wgTeGnUMd9jHkcpMiXjfel%2FySTUXk62EzEamGnEWh%2B3DCQXqd9Vn9GZ4nRWwunAp54EiSX3w7ePJUIoe9baAwpgRaettTi0pxdJU%2Fz5LNwYomGA0ixcgfWrquwj%2FrtV8Zdt0aFpETZVZ39FaNeWZEx1Js%2BWbxEcU4VGSwmbKQQGBAIkuUsD05sM6YON2EMr4nuvpTJOX%2BO%2FXTgHRPVmMZ16JplYxeflWKuJwZ24RP8Z0Td9EN5zlAhVLl%2F2jPqJwX5X2e8ltjU%2B9lvO%2FX%2FovEne48uZgBKZkXXUrJPyCjDGyiX9OW8ccXdmd%2BfXMXoqzFKkarvGXefXwVmoyBuhTBFVSOkV0pRWw7hhqF800FXPrbP7Jz656TvkZDvomvwZtxXHywU7aibmpsgL%2FezPTBzazXZKmzx9BNVYx2iW6LTuSQcXnZZXrw75ptqyZssf2vSEQXVaFsz5eyGOl4DIUZfXVSg7dDseikWU%2BXtGUM0w9OK2lAP5yP6iMl8pNV9gBlyPxhWtah4NL%2BM4vjbQvtwIjPLY3LFDNCW6%2By%2B7Myu%2BGD6wC3oW3QDOF6%2F9ZvosF7ljf8xFYllMLTynsUGOqUBKITe64v6KcBuk9z5HEz8aE9WyadddaLCXen7YDf5gUUsW3kE9QogkQ2csY%2FUPzk7yGpiOAsn7brPREWMId%2F2NLjg6BieFLKCrwd5VdTJ%2FwjlVuMoqa%2FpeKAnO%2B5vd0xRtITkYdAWnoBqXPVsOK%2B6b0CPDXmSLpC383IpoJBmznHYkH0n9%2B%2Fmwo9aWphnk021y%2FhQryv%2FPxja1IE73tlXklzABUKA&X-Amz-Signature=5378e0ad63d1c97583d2c835433d0ec7eab5fb3857d8e082a0e1d0adce7c875e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
