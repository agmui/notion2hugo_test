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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXMP5HTX%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVBSOsZm6%2FnZpMtR5OkEMltO%2FRa53fvcHdsH9kIRxQWgIgCpX3bIH4ObrpVh7f7P%2BXJZ4FioCx0dDFQl0PTXb%2BT6cqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAMhcXQMHxWnuseBZSrcAx6hmn6eH%2BmnOLQ%2FLXs0FhBYJ3hUpgjObKJ6oMkMTClzqDR0x1y7TiIWupkMXuVjnu3kfNOQTwHeSiUj3o%2B7KlP2nailNw9s5vAKbbfcDGucU2Mn0HT96nnuYlRypOt1%2BNer7RPD8DTzy809VjodKOfLL9VaM4VA1P0WKOy52k3zyA3qujdcfFtQEswo6VFNRO0GmXQBM5%2BRwwdAZvaobl4dduelWAhXtOwoL7ZAs7RAfHO3%2B44H3%2B7XmFyqJE1Ch1vTyyXXlUx0anphUU0z4Q7mWUzACB9KScT2cZVXBm377vGZY63%2FBUhmoBqZXZBdLw1r0LNeN2TZFkKR6Ej6S%2FsLI9lQqpNHxn76ERaD03pizlx64m%2FF4spJXvI%2FMYn0bOslCYlhkZuhwM7k3E73lSA7BgDee%2F691mB5DjfEVWpsB6NcPDRIatbQl5K%2BmriAOP7kqwZVom5qtHxOVnvFB%2F1eX1RnkS1edEod8NGuIsO8enLXRQ%2BOnt0Q%2FS%2BvuF0FEbt49hRw78BnOE2jGQYOhQrV%2FNAvxy%2BLdGve4iOzwpLjvXFFZj1ZF%2FcSiQyvYb9g0Rx008Pg%2BrjSfo%2BGb%2FjIeit8cBxWKhGgqsSjdYd5Z1eYh7fw1UGc1St9ai0wMIe1xscGOqUBjd39oAEPu6CPFC3HvELmkv17Z6m3GARjduWue%2B0v2C%2BOUTPhVVesLEiiTMW5vudNGuIsBh787UxT1lI4hgMEI2O9JEQBgNDvOp6Eh%2BFdKDeCy2VnukCY4ubzs5dFjbN3%2FT1b%2FFX5d%2FJl6ABdbhvo5pRN2vEzfoBGvplEW%2FdSe6dzSBi9z1wlT0zt34fbWlxyby9JiJbIlmXtp5MQeTcrJ3kgGACR&X-Amz-Signature=cc1df3e2210cb630ce4d0c3c7254f085042a2ad375659677aec36d194797ba12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UUQKPYL%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtnND6JNnqwFALDflPdBeCrr75R%2FpBPtauifITuoHVdAiEA73HLZ2CbtWU%2BnTgR%2F5RcTHrRXU9%2FHCMWIHCzvoRFEcMqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJ%2FP5SmI%2FglM3AiuyrcA%2B6KY6%2FeBBTkCtaY8XWalKICDtBProai8BUyzkHRwpS4jfBmwQes0OpRa%2BDJaU0WGDOZoE7WclL6mrVIiANnvOUpi28ANEMihDr1s2fZacj8Tc0xucvyYTgIDLiZVe7DbaQRKowVnOXI0Rh0POtDIWqd14%2BxeRBY9U08eGxmXYLEWOq69D%2Bde7KL7zUv4Jwn3b5Uxp4hNYKT87quORdFaEx%2FnHIgfi%2B0ztOeZL57gnYqycLEvTcXFx3FsSnPH5u47zhOjED5Uj8dxOAzaIpH%2B5oW0JG8ozdTYsplRHQju1NrcJNbZP8IXil4XddogCGOrnhhFTOa%2B4MupmyPdxwsUlEvHrLuKr1A%2BoYj53bMAmvaiOhFoHJvxJtZ%2FI5xaWJbYIoNvRxV%2FU2usGX%2FBvs8eOlAf0QvQ3RQWqMKbgdKX60lWywjitw99YlIW28%2BXBlRwh5AUC7S45AKfHaKZwesCwheBoVQj4NSQguk8JW1u1G%2BWBnhndLLRh26cQccpFU9sFI%2BgUPlm%2F2qIyLanRQ0Px0h2hlmcHQS5ulaSZrlFqtDEHXjUGBBpXd5DWdrn3568%2BuhEoFlnZ5kVFUgSvXeuVPK5q52amaqKSc0DRWWhPs%2BJjVuKeXCdCFnmSFyMNW0xscGOqUBs81oJjvkjvLC0PJ4CMVkaY5dpw9SE68lUfRL2VDm0mgVYU2b4YpE6PzpNTramLFGgriUTzdi7tGdMq%2F2WS3M9MKr5HWsjQLueBvEXubbe1r%2FyGW%2Bt71s3RpB%2Fvg2S6shfM%2FJVL9ktHAeYbv4KdmL6NYxgmtF1w24a3rXi2RTccNpWntAFoM%2F3jeCTsVwu2mHLLpcOI5M4KKSYkx5TGZn%2BVQVdckX&X-Amz-Signature=98b826941c490ff9ed4a7257bb9e34337d2e685ee32aaa24cb2ffc4d91510201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
