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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V3PD5GY%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIECUaMgeDAJzCGEPkWP9MQgj%2FqKITB0h8LEMVDuN2sXCAiEA6OHRUba5wI3WUuU4teCvFDM8s%2FIk%2B5FfaEGd6TxhVnwq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDK%2Bi%2BL5BH%2FkAkgslJCrcAw%2Fab8kXtI27IZmyQuJ%2Bp2sk3GXkT4CP%2FAdTzgbOoEfwBtka3PcxunNMb%2B34yveIWBEhzqMMMz8DFDZAoDsG0e3vrxexHFgWAkyFybTdBzWPZ48JeOWo2ns%2BYfJcNwgkTHU0oh9pXEUinLz%2F2fjBAmd%2BqrIXZPbPxAHgwmFUpXGYb4o%2FPifCwZJ%2BwlYHXloEok936pYVI9WhPYE3UD6dW6NAhrOl8SiqFLzvG0rEO3bZjahJG0orfrsOmWV6t1X9gkBakm9QFDIiCAWyjLZHht%2FsFAPhhRB3Lf1x6pUTrSOCusbM1S41AYqKK981RGEgPeHmGWucpVh2uTKqRvCQnvujZjyB9r8xFH8HQwdTSVucB5E6CF3Yp%2B6LYnZwsB9TGPKQIcHnEGsml27gt9kn%2FcBPQOh%2F9MgT%2FKCQQhr7A0T4x3qgsKwwfd8gO1ZAK%2BhpX4f6hKT%2F2NjZlLj3zGWFXWb%2B2bM4kfP8bgzUSUHWn6XSWs7vGcqg9yPTieWSijw6FgDvDQjtVvw8kL7FDGqxf5VwiSStTuPiyiaianOzz11h%2F8si07AcfJRL0UCmx8pnc3TkSxUlv7e1kPtYFIQmqq5hM1yKDK4HjKrbR8O7G3Ci%2FiMieHishGjAAuqFMIveuMkGOqUBgRPFktFkJVH0aQZLchur9vXDaZYuXFcf9OrOJVMR7qUCiR0jBEDoXWATGSy5QfX0pwRAiv%2BcDYXZkLs604uu4cbWXlVX5wmSmlpaUXvH4eL%2BL5Hwzfl%2B8%2BVCLFVS%2F%2BBK%2BJXiuSfGR6JJjO8e6V%2BGufOX%2BCvM6sfd6ODl8FVrTZhhqs%2BheeA4b5W9DmE76jeXsJQqDQfOHn1GPpvcczkCfgj6DLuG&X-Amz-Signature=2436d0cbed5e1a5a526c348f30251d5a798cf30dbd2b8dcd5cc87cc879769718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFFT673%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIDuDje5MWocQTh37Z6krf89kdOqGCJpTd%2BQOkmxiVInmAiAe8VDzHwsghhZGfX4QgUZcoFcn%2Br33m%2BmO5tfei5E68Sr%2FAwgJEAAaDDYzNzQyMzE4MzgwNSIM0gr5MMm7C1yftqrkKtwDFl%2BMporxkUdZJjQaWs3uQjkNJCLT0qhMA%2FCDHmDnlqKxsNEX2CGw6%2B%2FkupIZMHjBk%2FC9n1yW9qU98zGEs51EG%2FBm780BIZum0hSqdj5NpUwVtObVHqO%2BXG%2FGvANbUPqv6fPj8euXJGxVdczhrCFhtLIsILBBSRh%2BGyNU3OfVSbccHvQxrbpiFRaRL1ZaXzj9DqAydMc%2Fdt3Kyqe6RXhgHk1eQrEF0My6plvYMI0bFppap6jRzYVZDd0dPuaicI5obzz8jzFWCX04mfJws3KRhWwgll46dnjpkRQcA8jRvtJOahNNvqqBUJ3hSBWLRgGJtX1NkO%2BOfUpnW5KdulcjxGcHGhB9hTWJjv%2BG9eqfSpEIROJgkFvDyUOdnz6zptJgFbz%2BW9821JJac7n4fiFMjrB0gaUtIJoQf%2BC%2FTWJfonVO1Nh96cxF3CJ7VB0WMpJdXogFlRzX6g%2FqTz7MQbX%2FNome9XN4G4DUS3ZrMWoP%2B58A61ZNFlAvsA5t6pRs%2FPsgJR7kkXyOpLShC7U8I7yFt6jnZUrV6raS7KOFznazb9Z6ANPbS7owfUiWX8372zLYb3u0FAP5T796bzwOE0nvwH5JS82k%2FIX8NMwu34Ism6ZEOJK5xge7EHrg%2FA4wod64yQY6pgGA3ETBhjQwvceEfDM2burQ9E%2F%2BxzmbBRbTz%2BRoIxxsf283%2BuOLtgk%2BUzyGeV14paAPEOiEi45QOajsyqb0H4Lp3%2BPRHeLVUum4iCcNRZGw98KWUaTKAJP6ILeOznGekIdDpJzQU0evm8BArL5Fq3Eo8kpUeWK4gjQtbSzvk9qvg7VhEq2LtKsPCk7MGBTkAhuNvxYlnb0O%2FVYM%2Bqov2uiYaG0lbjKK&X-Amz-Signature=7d1efd6d59512a37fefc7b3cddd78f63a1bc258408f5b738d1fafd1b16b68bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
