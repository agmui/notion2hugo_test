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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645B7V4K4%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIBNlIAFncuOBEfYSilKMC0vCIolDqI%2FaNZvNMU%2B7ztAiBLeBnrzgEAzW3IbCTAAied0OLme0pQviIJT20h3vM2Lir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMi9oyoyHqm1NW44ItKtwDGWua3yksut5vVeTRWklpgMxRzHVSIMnJQxpqQYg%2BxReD%2FOSpc5sVmEq93NsVx7zA8zUylPHxVQsIqSfyuAUqYutJSd8vlchuHa3GPDgYJ3vPSQ6nE4rdm0U5C%2BxY8%2BBIi%2FgOs5cIfB5R8jUD%2B4ztn5Achd%2Fm9JpxBRHvXtbuPXB2OBeQzBX92hdTg8lwrl%2FxPISjqfZRHKcGwcMvMPMj%2B5eTQFOugbSWj3Z43zHwNa2LlPBK%2FAE0iIBxW4E6ZJ74SXaQiXHug22DGgqxdP5f1tLMpRY2vAJmU5n6O9hwtdRVPYsBZa5qZpHfjI6AHI%2FDyDZoNsiO3oM8uAhdUZ3aJ2udDZPZOxSE96P261RHSb0zTPevUE1fuaL1kj3QDguKwgSS1St7c0QDhGs%2FLgkBHTP3K%2FpkNYMBo0Chj7iGurWZXabFOwRchhB8%2Fnit%2F1X6axolgrkvoXPwD6%2BCFGXkDv4LZfDyMSmbohZnkHBJpiXgRmEUEQSkmvzmF2gp1AWEs%2Fi5b5DTW0QthJ9vnITadVNEr8MlaW8topdqpHRykeordOEJZ%2BRaOAssUc43WpztXOcXlikRDNu6%2FY1SRY2VBLbwhMydqHg3dipfuipOXjmcSM1ZSTBf10sJ%2FOkw6cqTyQY6pgF914zsFrVlsDlOgzVYfFaW%2Bx16YbA09X5rMonVkzvG3QHmBi1vn9goh348zm%2F%2BT9sHRd2hgYNQP95H%2BIY3S41qFI5veD13ezKEsTRBsVjmz%2BrOzihIKtRszuQTp5EjgLGJQpzT16LK%2B%2BrA0w9it03tYeGWbSxpMokC4skE5AJ0FTva5jhLdiiq4MUFBGEO0EDG20nfzrRnhAhSiV70pVs95bEd3WCY&X-Amz-Signature=95a151352e6f87021dc1787f417dfec4d3b5dcafa583cf87decac69406e30e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UWJQSP5%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEKP6HiW1Sf2j5Dc%2FO4sdDEioi7zK6a760b35KODHDIXAiEA86fdEGBtoJX4sNPMXGPlNVCkxPH3tPWvFZPogyu7%2Bwsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEb1xPTbeanoxEPcSCrcA1cAV%2BQyeHXBeJy7YiPDNBP2vr8DMDb3hdkvvWLTPdZcEIkwFG4JeVZKN0gTHvImfLpX8n%2FSetgUdcyrrNKGN9NZrPWnDde7U9Ok0CYL3k%2B4kTe9iTSexKn2AMD4w%2F9uRwQwiejzDBSO01UeNQNZhXgUBVtHZj7KyxiLtr1ecclRa0a%2BLBrbYsSwePp8BlRo5d3AU712pCUciQ1%2B6a%2BBaoxFezIAWCAebedDvhIHjWjD6LPKzUnQf0GwAgbxM2AFhd86EVVpadOAqMDViHNMCR4%2BxSzRgnhJ0yf7K2USlLEUj5AypWht1XO37RzFvXbIQgu5istOENqDoKEkLSvtJfQmOcgxS%2FA8RCjAra7gWTCd7I4kUxNyAy9R%2BvsVMb4BAlrMAYFUY7GT6E6kJksKuttzyZ9M%2FrV0jXleUpQKClMiK%2F0eHBntzOxtjTGB8aqe3w76XYbMTLEJEm90o0IftjC%2FplA8Z5qnMzeQCtbDC1S4K%2F%2FcajWb2mLiouAMlPoqfFs7awAnWAjCqo5IZ5zju%2BmHQYvM9Yl7VdNhiqAAG8ebP06morPEr9VZp6zdLdHrxj86nN0HMTQHU6vE8x8AACXr4AO0QyVYBa6ILuHjU8zIJzomXIwrdL4GLmioMO%2FKk8kGOqUBA2HrTIyrJfocLhv77o%2FzcvvwtwkFJ0dmVsDq%2Fb%2FEbY89KqEe8o4NjKmYuRuprKJVS5vgka0s%2B%2FQ%2BrlmdhiNOYa4Rq1F4lE%2BdlFG6m4bc3fA%2B8L7ZUXymKxHHdTrryewcin9utZ%2FArG8QpS%2BvrXqRt7l1gU0SjTCArL4Ou6MvMz%2F5OZlk%2FxkoRSIqnPTdfwmvKTxtle0MoKJHA56HQ4Q5RTGOYhXE&X-Amz-Signature=d6d3df01bd2582b5e767758034fac3d7f9365bb60d8f67e65b8809e07c635f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
