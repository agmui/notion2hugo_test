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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PO7ZC4C%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCenGXwL2dvGwBEU8gKBjIc%2B1WXP8lZBPjH7up0kN5yBwIhAJ03TVbaCjs4WIeCy1VpeY3wYaH22u%2FTnUOz10rX1Zz8Kv8DCEoQABoMNjM3NDIzMTgzODA1IgzWzIgfsnWfKMm8pNMq3APYx41gcXaCtSr6239NuwhCHMCErTIkj2i32pJnIUAjO3biwivZvTQbyBsrWSyqlKK99QaR7nm6RrtBpkmrFNrzHoQQxz3Pnalct2I6%2BALoZvsLRROzMGfwjp3yWJ5RFc7csGGGOXilIMDQWLN%2FlYVxUW4iVDlxxColpPG4Ip6ZkSiK24n4%2BL2O4QqEPmLelIH%2BR0hwqKUk%2FlEVDXXFMsbGb4HUeiSbXgPGK18nWdudS8awDmkflSK%2FuftOmJh9psp9HEc5gFIoNPaGhOpqffr7jx33njqHrF8r1nOjQRcCPzcPvhBy0kbI%2BYJzzHf3aML7yLOONeR5L67OGSrATgMltfOYy7hyZjWIcMnsnUpnZTvxMBJVpjRGJoS09Vv%2BJEvInsueGEH%2BbQvbte%2BJ2Q16w1riD0R9cJmIm75S7hQ2JxeB7kdPc%2FmwCn73HFTd%2Brp7VYvaNvf39Biggs8xE9eqq1FDli%2Bh1Yvzbb4QY1ZM9fA2WdiTk019gNKDKnxAn1t1D29rOONOZpk2MJpo9%2BpL6Auz0nQ0LxAH4dWULtYZ4RjyXwoJf9m2x7AZ6e3e8sps88gP%2FzHX0eTnJUyqrcAdYMgXFKWyyJ3%2BOPIiSXZuiX1FtoeoolYHf5wn6zDr247JBjqkAVC98u1J9UWWEmh77Iza4izLHgdD%2FTT5h2BiMER4JIKIGOQAdrFkM5cH%2BowgRf9scsvABNRC211P%2FpuqBkj54rZD5z74RJ3HxUwt4VcbhfaZdwChe5eX6RWo9DHI4CT7JFqp0FvEkGz0AOo99FXp5EggXUMehGxG7RfprATNppBbQnmfb4AlKVn1LiXvyChtUP25WpdT5jU4R7%2FNEwpngjjz4FsF&X-Amz-Signature=ba16d51e8ed6edd6137a87668786d5a2a725c84df4b85227e9b374eee58744d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBUV2WF%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHZpuzpJNGWL7UYw9DIdFWv6DIlDDdt8Gzd2gfNWXSxwIhAIKfPUD5WTbTLjxyCE7121aB9fIEC6JbLEntK5d2gnFCKv8DCEoQABoMNjM3NDIzMTgzODA1IgxrE%2BwrY2eJYCgR1aMq3ANW5wtmXNlzgTHiWwfs7a%2B8qvlDClnMfz98y%2BkTlf7gtIuVLZfLnoqMGItOsRz7scXuPCZCDaj2%2FAniOo5OFjxq%2BhqkTpHeso9WbpVYBlLDZc45Pyj%2BuKceCDC1%2Fh1B9ggDqGSSJ58ty57GverML8UTtgVTee8yhydUMz3j5V28JAiKdoexWhEAqCEnYRKJoTX6EKDcLagK5W4EBCYVTRxgIylpMMjExV2t2VpGyw5i8qP8an5VpMVDQJdx1%2BrH8Po55uY9IceN0aZyX9dBP7GMZHHP3bLZQ2AFGZdwdjkqnTjJnkKM6ZCE%2FuRMBX6428K1l2URkfIA4OMmR%2BaimdbGIcwDPMPxD%2Btpytuf4L0hrGiN21IPqiSgdIDQh%2Fd%2BRm4cEN0ncAi%2FlB2LjI8f9K68WWoo2yvV6bIGut70aOwsb1uXR9qZQGC5GN3hdCl17MBfbIWjm5zZfS%2FTAxFnq4c0mfPzG5gWNxrHRNg5kJcIL8BEJJiQSApTr0lOpx9NV0obmH%2FcKETbPdG5yxtenjwPfON4ewtODvGMepXgiqSR6uIBXuBzKLP5dcDbozvLyh4W0aYnrSDXGBGx2YevbyPiArgMZXd5OcbqTyZqB9BOm5k5C8xs%2F%2FDacisiGjCX3Y7JBjqkAYq%2F%2Fq3%2F3H1%2BxEJMoAbdm97MMRJmq6SKxe93qiRaE%2Fk7LK6C4c7m0eQYC%2FI08ZI1yxfYtmkbT%2BD6eijV0G3zVqzHrEsehq6TRZNwOcXzKxpn3tAd8gJZeYwTF5U6cA08tnNyMxqmReO0eTkFxCZmp4e%2FC4FH2QjVUQQtwh9Xz9kZRBkMzbyom7ZGIvLXHmexndWq3XlWGREB5vTDsMGrnRcSeUNK&X-Amz-Signature=ff03aeedd4d3741ceb8c27f6247bd4d7ecc2c736c63616bbac50ef20b7eb1078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
