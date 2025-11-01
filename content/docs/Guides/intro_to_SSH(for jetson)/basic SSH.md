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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466253F7DSU%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIA4Jcksl3Va3dd54%2BRPG%2BC88k6dcCDFcSVcBacvSHs2aAiEAzRQW3KDLJagWgAOs3poGqvYSeCmCFCiOa0znqUImPrsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDH7LDhefNh62%2FAoZEircAy4EUaGep5JOvgxpTp8cXQogB40uJiau6CJ3eJmZzmI%2FdanuX1jUMJTyTwrHYXGgk%2FdSt0Mojf8WMqoTGTXJZdc8BdWdRpnUR1WGxvmRUi4B8UP8I19fD8AZ0jWQcuI1FUryfcvzaarpmX%2BwWXKw0EMKa%2F2QTJJbOd2jDHzqzo0raWl%2Fqq6FTlG94Kg%2By2cvbssgsA0NzC0PVaz12KlReEMy5bxwOTIq1i6m%2FdejKPauaDm2oIWLeg%2F644MWajVhIUSv%2FtPjJ0KLpabu20ATfRItdV9muxKN9Ya26g1ZHKWMOS9wPsVzLUwdhV5KB7UjqftbI6gvWTLq2vk%2F%2BlOK%2B3bObpzzKomiuoV1OnJoN1%2Bm%2FhrLWoWmm0p94R73JfmMCxaHuzsnE0gktuaUiKu3HJxv39Vkx1Bo45aUubkTNynTER68ehWtKoLysfsBGrxQxFooKM0UpVcCIcrt%2BGcppQSI3LKvZQj%2FF25N%2BD0I5dlz0tZtlTfh%2FuS2ii88JaFnunpEaA4jCTykHedPdMydEFnR8GtglPVFQKwdfaBoX%2FOjuUElQKjmPLrijKrRKF242xiaVtFtLzkqABKrQNLQ6PZxdhPYGo7PJmp%2BbEl3EAyUQa4WSyrJl8kkJo4fMPv6lMgGOqUBOQtxgMqXXNaErmWUZrqHiRTEtP%2BxggwO1Ax74jRI%2B3RQNCMbAdNj7lK0urqZK8e7fytOsF9Osy5QJvWn89aLtwXW390Y%2BVCK%2BGneBpAaXM2%2FLLpGjfuNd725in9kY%2BX%2Bh8iB9%2BYrlP60TNfIyFOsF8j4nCLsxgVbKMC02mkrKQtn8%2BkCQxB82z8YgAJMbhw4y04KwNfmRQVt5E6f9WCxDRNuaVfm&X-Amz-Signature=508e01fe349f1e170ed15ba381434d8c619f3e4edb40602f5d949c16ed6bbbdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHSL6N3Z%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIFJd1QjbZdbP3NndSHRONpS2yZiQX%2FwwM8kQcmwPAVe0AiAuaYiisumWCV5M%2BOlmLPpHwLjTwhEy%2FXV26w7hHzcSGir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMgZCmlNGIdk4od2ozKtwDZBwyMQkGbYp%2FiR2s46x5DSUc53GlLUdOGJIvPlbC5pl75KXz2xMMEB%2FoQgnLEPUTcsbBd5FxhXH%2BODSgFp29V%2BsOv4lzvox9A4w5xUTzzMUjb0CSAjE%2BSIskIwHYGYGbhFy6j3D6qeEkKAiJt%2Bw6f1NvfNv%2FgNAXYg%2BLxVmGrvGN6crb%2FQ1%2Bwo2%2F6T1iNwtUbHixQCN5uEh67FZ5YX2v%2B5dkIlmVw%2B%2FDZef6gb%2FL69ZKCbgnTWvaoFhVxUbYmLmJgfetDGvw4FaaeSiLatdTJM11Q3ORLUSwkVd9iP%2FCFlXB6B8l86q%2BmGtQF3fuTgJy2vcPHJbryeLJ2eHb1LXEZPlfAgRXlAZhxFSENO5y8IqOZ%2BQX57qWpAaYa5Ny7VxK1q6%2FqyOmg8o64CEGcklElba3X2dihxp0BjqHt3aHhyhWJAIXY6US%2F%2FbNLrgn0WEo9wfoPg31B8Duf7wHIIqIZ3VZcPJYw8jdg9lh95a2QscrX5jLCb6e9NdtgBBPEvqAbAqNLuZt3OE445QQvfsXQZqYbeB1EtLeOfu9PE7rbTSf4Wx9ZESSOYh%2FZjyM87fynEIMXJe37Nvph8AaGh4%2BD7k11Y5N8wSf4bizH%2FWOSfHmN94AcV4bvMlvfVgw7PqUyAY6pgGlg0g2RUErOLiiumjk4YIfEOBuAkDnw0KNKFfKPHb4lpgSppr5vAKBrSTMfMRYiLYVOIwOPo5URPBzT0X%2F46ET7zafYP7zXiR7Vr47NSFd4Z0ltZPBvBvPsuMwO%2FB5yYPAF4XGlGrBKaffPCFSN5vudZzxwlJ7%2BHW6ZX4TJomAJl%2BP9poxBjd%2BejxVTA8DWdpqrp8lBEetnAgK0fQqOHE%2BHMJahPpP&X-Amz-Signature=6e951e6e31f99b278f58acf9d8289778e987e935c042d75a7d4c17bf19349a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
