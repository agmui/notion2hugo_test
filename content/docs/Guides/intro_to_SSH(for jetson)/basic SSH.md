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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627YNJ2GM%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFZFi9585R8MwcOIqgS9vw7tmb7pn01CvsIdQ9c2AoagIhAO5V%2B5hpEHuZcomsQTGLjG2GryPO0zYU9%2FCHnRrCSyP3Kv8DCGMQABoMNjM3NDIzMTgzODA1IgwyKkWVgPe%2BkKp%2BnTQq3APcUmgYZXN4HCZ6gNWu30%2FWlbPUQwI%2BODyoP7g%2BceSDg9UaK25rEahOmzollXhw13Z8Yncnt8qp%2BRMU%2BFNZmxI6KeCc0LWy9ozvqma7dQjiiTWI4xfHAr88olEdD89NbPSaNC4v5Grtz8SWjUmMVBNJ61OXrJRe5uYd%2F9XUNZhFcWpEfnTsvVPYIYLCtznyxhx6jyrgkGYakdoDB0IB8uQvgbgoWZIxJAh%2BCwu4nvrWqVhNwTT%2BAQ3fkEkeNl8Ct5bj3OA7iFxBLOyzXRR5NCGo9dQgj0YynZkEW54rUtHhODJGkOqcCBZJMzS6wUIhcDZCrprayHE1QyTdR3BmaJ%2FRh59l9AeOlXQ2JjecIJhzDJBF40RiVA9vgyehMxLdKcV3gnOVQ6b39EQNXenQrjbyMbYdiPx5r9PneS1uj3T2%2BX7fpuralBo%2B%2BcGlygqS5eV4GQBbZP2SN6KqW4mvvqjEQMMI8q3QupafnEfBuG9MA1oKMJFgHjJiGd896ZzJIxWlW5fC6e%2FddfvwbBDkuF8YQvpZWU1HjQBGx80gzxYneNNaPn45rZ5Dpalmg6lvi5soNMJFk4jdbxu5k6GacHMaPe26ilZbRkqC%2FBHdRb3SJ5I0Ui9DH3vkGDShHzD0ro7NBjqkAWES351u1Nmb3fVvRJ9773v7HqHG9WqgP8zbsWhvFGZkbTPuy5kQ%2FMj3XlUWnXlybzdteiFGwGq2NE38vNmXbYSnYjO2hVKPJGOfbefgPWDoh68JzAiMkcCe92YnE3f0slqFrXazWMAYki4WNRFa6bKBk5RbPyzcIpVNvJFsQX3gi5pTILmsIx5%2BpGn7I9lbSmvH1kwOgg6xsLagSqNEN5omjvtq&X-Amz-Signature=1f2bbbe289a3def818c1077fc33e9ce57673d884d7302b3f36a73c56a5549275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPNE6RFP%2F20260301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260301T022615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2ButSLueqgriPD6G1QVOullilY7jn85%2BWDvkrtuHQgIwIgAq3oif7%2FwdWvrQgrIVT02XUT%2FrUQ9NCpmuF%2Fc50mXhwq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDI4xY5FZJJRHhECJbCrcA%2BKXG%2B6aAYBwCrzPRfT4qhfIHlRcUJpRrIYwm81kJM52FsCh8hOVX3%2BdJGZrbK4rDo0HB7Gh3JtmCKElK0lFUxqxjf%2BvnHQoVkoNB5dP6ReavMIczYThnI5ppfzsKcvDP4nO14i3CDMNdilycLpvYoogpWYTruAeVgex1AV1WBwIx6uDaGBK5bRgtX0kQcj%2BimOY2PQojBlbBEn%2F3s6oBKq8U5LYcTDmkYW3s9p98PhvMTnD2JLkAeqaj8Di61akREzqeBqzNSF8lDlxlu9ngoGV5FRqYgrCavj71oEFgv3JiYHZVxYK2tG9EKOKm0%2F3q3njVE%2FJFKaQhCxcu2jelFGBZSiqKbzwW8w9VVY%2Fe0qoCAgy%2B1NM36n7Vww6GuWGEBqzpXUHKJAlcWDszbWUh8h0oBJpKhx0tamri6wDlnKPeifDnkGNaz4GrQLzVHY1I1zoD%2FcfcVocM8zqtgQAvaMb%2FRAqCDUljeCRol7rKvl3euWFDLhUJgyOVUhkmsP9kw2aSXNYOGxKlQAyeez7IoyLyQ21x6tkxURRFZWL7WR%2BOQ0bIAXgxdmxf8i1fJRZJemNYnhWp5QBg63HcTaHkE5jHqouPSdWiJNQm88znXmTvUACZRg%2Br8t79xJXMI%2Bujs0GOqUBjzfPakbLpF5BO%2BeO5fTLVGdbCRuctuhsWTcxpudy%2Bu%2Bevxncuw0hgGpJcF2K7chRYjk66kh4akcGz85XsS3R5LFX6UPYnFpLvyj22PvUVzdAkhLCZpyFXe9JCSkDEiqhYv9g4KZo95LzgzrZzYwPN%2F9%2BK6cnkn7v0%2BkLytldgjEuvFkSvwZXQzj4jnS0ittwEJFQanu0zDup2H03CYCRpKHkIYRG&X-Amz-Signature=cc8bb2b95f06954329bfae7e463a0d4d8552bb84f5b57c1fa7c488f4b2997ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
