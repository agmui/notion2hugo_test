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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD37MFYY%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCICkVGgPyriIjpZIDDyQxVeTmLcG1e0fzHiRfDHVsK6YQAiEA6j2xgCHJA7AMQlhSEvPYFQbKEkqTw5AOWcpel%2F0UuLcqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAT9EzeHVcdjU%2B2DPCrcA93p0WHBnkW%2BXb8G5Z%2FFya15%2F7VfziOyDekStAGHnxuFz1Wg8vFC0kSapY7%2FtwMm%2Fkda8BiSc0K6ZpMBdDDlYAgfAZwDDxZ%2BkZ7UpJkWlVzn9clozgkTpwxaUKLpjIGeONlfKbjfVCb0cRLv9OAIOoz%2Bkndf0uad287KmdScV9K%2FtrQkrYp7zOJUHUsVu94CFM2CpvPascIkg7eg2RlW1BJtZZQ9eLGvEI3wwdKOcBrjEqHUgiL5uAgOUFrmAw9EKwpDdxBWB%2F2V%2BbbiMf%2FU1U8ET5v51z2TEjP%2FN6PWPSr4JlvFKycff9kC58HsCshqoNkNwR89i4z08tu99KIsNmX48qSnGY6o0Prq400dm9nqF9X1wyJlD5y%2BDVIWBrgLRhrRygleSLayoi1AYQZfWd%2BQp9k7XCJ%2F31jOhl9Y%2BRpAKDDTOyRRjd8rltnYy6Kax4IPDDRXrybqaiqy3JWeKEm68bjpSFKrXuI%2FknnEL1cFzQinhppGMK1DItnEQrrhlvJas2M1daKpEnWjUNmWumXwTQ0Rih0xGvhVwiL0bjDpgWku6LnKdBkDgSGpi8YWHqQ735WBh42n5qcMHaNyxxXJckPhMlv5ZbXIkAAVZRlqo%2BdusXesE6eHDj7PMLaHqdQGOqUBCziIFMjx50mnoZZcVL97m09W1g0gNeuYe4LSA5WJwqgdPkEpPf%2BlScWcP%2BMoDBqqsE1BlLtGSoqxDzuhX8RF%2FuI7ZIsu8pzbKzZx72nhkvwhuEFNdHM5tGXMjDD4jJAuH8q%2FMz8t%2B2PM7wFSVsss4Mft5mEfZnxw58ukB%2F3b6ULGUsCm%2BAImqp6QieGPv9c8s7tiTYQk1aZh7bJMjbCWdWIKb%2BWW&X-Amz-Signature=45f2bb1ab0f3233e484c371d09254552294a29d48bb40fc7f2a82ea387d525e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMFXHOWN%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDnSeEYTSco75tK0s2wDm6CRiRf5%2Fu4xPmVNtCad7q20QIgf3yytLHoYywv6x8GTxo67X78Swsj0TKxNrURGMWF3pkqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6U5mVZgvlXV05gaSrcA5hu%2FHswmTXUyGcGICKRqd2%2BDIWYNr%2FxSGgXCWgFWUH74mTH0GcrTuDw1pTMBdESxxYN5Sxn34y90Uk8gExvcNPHQbrm5GncafX8DVsKyWhzKZFt5obWA1KIbEdQoA%2FNqiEhmXPLHypWlr3AriIzoQ3MqLL2TFZhFcFBG6QBO7iKDevZ%2BEEpV91ZHcHrmutGBUDbPq2MqsMSq0S37%2F6XuO6UF1kt4D9CMYpgI0vOyisrwqFhB9gxOjNCB02F0%2BqGnfOyunniFiOdQsDutR3Y2OLAiM%2BLVgPeChffwFxnQ5csT9Gp%2FnluSLXYWZ0AOMiNaWZfwXXuXavrwy%2Ba2m9U5Up3tC6zKOYlAq%2B9T90NX0rCu2uBcb7g3EhRr7t%2FrceyTw%2FCoQCI91B668afFuGEmzfoLxdJOLwPmzNCIOWN1ByHxoiTdh09HhVhqWSJqZ1sRBksrM494wwsWVE7FNmfUn4BN%2B%2BVq%2BZLSONzWwvgKATZWuXi3wcqyY0EIpTECOtL88HriWFPUnAOYlxYPbjfufh5eXBWwxM9%2FIplvdNlCI5n5Xer3ysbaqHzxas0zK9IdH58XjIbp7Qx7qsw%2BucVAKcnKUEs8BMoBy1Fs%2BjN7mwTEzVJvqQ61VVfvgiPMIeFqdQGOqUBXNmEvFMce68R1PlUy4qtmK3cC2YCIyJXw%2FdEYeHG010kEQaCbJys7VMiJh9dt2Q0f4GuPlyGMuynvXo27wIquLKDMgXGJvqFXHvu7tYu1x%2FmL5Kg7p3DMhBAfJEUKuRPioj0%2BdSQXuuN0lZrIj%2FuGPU94bGkDpn5iUnIaHrXwY9hfLotDyEkNFQoqxFwkhqfyS0hK8GyjRQPHEsbsW4vCbtyNLa7&X-Amz-Signature=509b1bcf8f8c3a65aeff5029754b53484463d6136570d675a9f367391d3e5239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
