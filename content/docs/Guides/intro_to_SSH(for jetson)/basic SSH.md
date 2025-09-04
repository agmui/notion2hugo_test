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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQMRFFYQ%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FzDYcJDY4UKXzIXiEH3PyX01DhdFV%2B2kjCFs1wuWUswIgGG9WTxBZm%2FTTyixj8HGxEohdfnGBDN88NUxHTqmAy00q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEFpZho4CE5pU7q1XSrcA3w6xIXkUEYAoUgdbjACq841wDfHfNSHNf5csrC0paclhnahRKEwQ%2F9m7UMKeiAmOqis9CdfuZCz1Zh3mORm1rCxhJ66WHnGbuH3j2887rA%2FOR%2FOb7qv4YPirXzJMnXP8wSX%2FW5Z3hFse%2FTDka9tWk%2BxPsqq1pRxhx6t1Yqjr8wdm7vNQVxdMGPriykkyyKBqGh8BXPjmxiP6fYyR6Xcmxkv3ikawIUu74uEdULyll78t%2FbpRhx1YvNmbEImSxbKvtkoS4xCTajlzQWUvW7yU%2BN2D9FeYiifVFW9tgVxQoRAi0gEGaZUZOSTEfZ%2BJeCVz%2Bm2xxRUxVkLnTPucZyEwcYBsIXTB11hSLnepFrL7M0GRWa2jazCXHqxafxpPEwvPG50HFK%2FvwP%2F15wwtjxa9xcbSwsRddczK5uhywPRuJpHH85jW70G3gVN02EVS02E8zIc9TZ3Ycv46k%2Bgk9L7r1oe5e9hhWKu77pLDiSZyGDOK%2Bb0iDYQcsdS9nZUV5ZYqMBF3a4PdzNeoiWWtM7tfoNftnqtzQ5MEhL8hXALvHKMJg3Gk0M3RMWS%2F9vUTZ0ElsafgfrjUx8jlKBk34iPtlvBeGF%2FqRE06%2FByre5oKsSJ8aYyqV6%2FgUzyT5spMNm248UGOqUBXdFhVW%2BH5IpJeB%2FMe91rzADnMn1gnqghlWx5sRaupLNqngQlSmfv8JXkxreiBxTlD6%2F753Sl8dMXfR3SmwVo2Acbvr%2FtWCrYaZDEafjksQ3b%2BDPWh61xt31hvqSjgBLzXXo1CbwT0VCikuXbGkkpCjx8voIzdAN%2FXECdz2A%2FO5Yy3%2BNr2bHAZh846DX5mD1JKsKPuz6878PvdRVmW5wCWUbZOhOi&X-Amz-Signature=4b7755855df01d2a34083fb5985940c03bd8e75eda74a075bce6531495bb5de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HBGH3DX%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsc02g5rUQrA5OnjEQM1DozRwil9nGQdxKie46rGkeqgIga5o%2FIdcZimjFNyeoFVLypX4jashhdwGqUPh4qjGahBwq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCryVULo6HPsGXuDZSrcA%2FsQ69JLJDRtm09sgY%2F36Isiwhiy2CY0lnvUPlsmZug3AMVwtxlBmaXKZ%2F%2BWe53zJ1RZcmDEDHFN8H%2FtwaNkvXi0B7DblT4s2GmP2NtIn2ZDkXuXupGo0UOiSwB0ra8uEyBaB60l0iund%2FjDnUZ8160UOrb%2Fc2gDjxEcAfPqtPssj54BQxDGIQCnH1VwwFGC%2F%2Fgh3MhzoNwrZe2j5Yg60zuv5Rwp%2BbFHYqHSQR5oJJAMeAn%2FVKsOvmeXc%2FY2IikSAxcNtKUSv1Blm3vCh5635Eouozf5epps4xAoDun6M7ERdRwTyNEljXZfuWhRxI8kAnbhP%2BdRIdPs47VpcQsyxu%2BL5PCQjk5U0V0acPggxJwyFHIeNNxUMWHdLLbiydIvBuQCr4WGzofFH6cNsTShyVHOvKT7rhIcRTK%2BFDPPDiEdH%2BO3vwjwwOnMPdKl1KcgJ93JnQ0b5Ak6KTNUSzVy4tDoLxWg%2FZAUKoXtKcwtA4MYrLzk2uF8OMWNfhymwXvjyW%2Fe4zwOANdWv3XRhDttXMEfDXQ9QWKhCUg1Z%2FmdevB4QOlbHwy0r5uTHK1Nf3ld0NPHN2HHSBE6lguQzB3bplCKqUSWWgxxaPuBFd2V0fuJCGVnwuTYxETMSslBMLS248UGOqUBc5%2B1xBzCSm1dAApF%2F0VEwnvE%2FT0DLKx8xpH4UKsh39EUfiMhuKqMrrDJ4Q35EQfprPwwrV4TjGO5ZI4fWXF00MvxiQn1S02lmjgvjjbSMI55eW85RYwgaEeuwyVYzL7LYXfPTOYfWMGdMxjNT%2BAJzGFV7OYfxU9Xa1p2gkYYMCmNxZtzddhhBwAkHLVDX1lKh0aM0G6a3dO6UW6%2B7cYd2XPrF9Ig&X-Amz-Signature=160809f3e708f9d15be2f58982836135ead0ad03de14dd05b81886c5565603e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
