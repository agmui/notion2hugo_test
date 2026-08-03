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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CYMNYQE%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHJnuZi%2B9ljfCEuhPHRm8aShfnO2%2Fbre1ifMYaU%2FLDBzAiBNKm7Yq7WX%2BV8cwEg4WeDj0zMMsFyR2EyJGmZsrxn%2FVyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ImFL3SlA8u9wh4fKtwDnnFuXpandgHCAWe5lTPHkVOFL49lf4i3y0lj9tH2wrkqRrMcJHKRWjJKJKxLc9Klf2SfF0tVr5sCKLSd4HVnVR0HLTO7qufJxeSFV4%2Fq2Irx39YNPmD8YFASi3ABjV0qB1FC8Fvkkm6AXgxolGi9RiqgWrbmoOkSu3uNCHiAB9iE2cKwiDpGn%2FC4QKGVUvORgbn4piMTRXLuuv%2B5zRMUSnK6Kuph%2FBGTaQTw0Qu3570c%2FC%2BcXmeYi4c9nGUhpirVCWcZ2H6%2FxWO7tg2B79JnA81ai2PPvaHUK9BgvNU3pfwyakfd8uhtLfQ9yIPgtumzjIvTwxnwMP5Sv2sLSm9PDEmj8Y81pjKufhiEixn6dKWlX%2BoAtGV2G3S7NGYajte6KyY9iwX7zKt4xNCbJw%2BVo6QJqeG1ehx6onnmLfsXQfdjMJHc2NdakwOLjXvBwMKis0PttWs%2BjYoVX9qetVqUBS%2B0uKf97Xw7rHxLXkOWuNJe7B1CWJy%2FtOiAFm3r4qMHzYdMqziAgWpPRvu8L7MkWI4WTnxyzQ5UvtSgBTnS3ydpld8IfOjtfPELktv3MZhVycRum%2Bzv5jsPdiq4sueWoGoCAzcENQtKwzqlpzc0TkwvCRypnySOyyesD80wmea%2F0wY6pgFwLnJd%2B9B80%2FTQkIdoq1QMCn5GByWa8q464syGuxTOaw8cKvg8KLzHCZEh6IARGAPoS4Vz50Bu7lS5lusE6E%2BFvCd4P5%2FJKxO5kZxf7OjvS%2Fx1qloZkKTtQ91r4mnNT083ZmjU1vBm2DcW%2B2kHZsGvZ9Zp5TZjT9R43o58b0vj6dkSEMKv4gNRlTPZXWMugVu7%2Fllf8Vg3sczS3o3u%2FUvjcklswgEP&X-Amz-Signature=f42bfebdb0b14191d2b0985706d64cb17f572e621a0e7b5017275087b28885e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LLRBTUI%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCoM7XFfJ31Z3AvUnx%2FFtwlT0RzQsiFCAEVZ1OMzv2jFQIgFmvH60PL8ulQBXPAEFH8tQqKkJtP5c%2BsOgY%2Fj%2FwFbAgqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH1UaFadGR8afAHPyyrcA3K865eAZwTV4wDRowBdZXgNIz00O%2B3N7pDOTTEVebTKPe6ahfFr9twV8AgJojLKmDmxtKe0NFKpvxkzwyB7njfubB4DpbU8IV7qrz%2BdHVDw8VYxOy0fDrlQMZbE3a0KuWWlIqWun%2Fs0DVCCzxoiIT%2FNkPZJUWxjGEEQ4oBFUgadNq6jiN10krpg5EKwsECpC1dkFnC8PhEh5sZKej%2FnCr6qLTS5YA6PV2yVv0hHS91L0d62B5fhXyUhxWcKB2A3wgop%2FWthgCU%2BdjcOk5%2BYyze40EAy9MVLl8kr91ibbRDJC%2FZUeCx36xTgWJtgxF0e36D3hRrA1K99%2B%2FDeOHeMtTcsybnpaMbmx8Gz7CvpexoSPLpLo0Cx8YLaUzpsZrkJxzfJudeWyCypojNbEbYsGlag5gJuENsYIYqdLt5Hj4PKh5cjXMxXRAHiT5fvXtCvkyO7yhSCPWjS1a2KjM%2BGbh%2FJEzOIKNNkpXg8X%2BlUaoK0j0Vo0vADhZpUcyT8FTZ19%2BdyXY%2FDSjMbyqUvyhD%2BeBl8E69LnWhk5U2UddNbFlBci8luzmd5nbD1LBYqV5ia0IHEHgvhMIbkWAnzujew0XIb9BbndRY3sDhOSXWRKbERSN9nmDmDjAxJ6LpPMNnkv9MGOqUB2wayOvpcC1%2B8sMX%2FwFJFsTigUTSFUNi69k22dXJ9lqlzLYMkWFvuWdFi9W8WbC%2BbDdRaB7WUnuJvNKccY7XFu%2FI5OxJCYYQsrR0fX1acG8%2BXG04OMcAgkBlGi9%2BOvLSaZqkuW%2BHmYa4ixtYxEEZ1J7SDjw3L55LCJu4D0JKQOogjHebj3Hjn8hlbYFA4wK9Rz5U%2BvTSA8FBKXc9JP4m3ceJ31XHO&X-Amz-Signature=be8e6099c899b6c1e8a868c77e46980b5766680eb0a1decb3eb1e5e018dbc7e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
