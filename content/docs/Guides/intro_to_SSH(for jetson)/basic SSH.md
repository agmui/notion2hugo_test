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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHU6I654%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnMwTtVq0PbLPUDZRrFBUNOjQsCrsTCNMC%2BYX%2BznuzjAiBTWc8BoEJ0m4ItebMjUdD%2Bi0Y06HOCs%2B7h1reaBx64%2FSqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM26PM4olPcOtoY1SzKtwDH2g36ewajzULrjwXO94VA7y9buWTqByZlBT1Qm%2BqGi1WqZNfMyXCx%2FVvswbKMy4T7s0gEew4%2FifLq5tBgnYv5bs1ecZ8k9NQ70xp%2BI0sQ95YCnP7aESKosSzI%2BGl%2FJyqUY2gXNbOceRJPpC9TjrSpw%2BU3CLhqDBlf4rlR3od83Yg%2FWecBXryXhk0MFO5vtrrGjkIlABnNWXWdjgxC9%2B1z%2FU1XdXzkhpaQhOwKt%2FDXNtYDivMvFH%2FgMnuwbdQcy00UbAzSbwuKQZUrUocDznnGJBirT3nfBbJvDytt4uHHXavAswCDm4%2FeZithujZ4x4JbNmnWrHKlfDh%2FWOfLzAXgoyZEMOkQaWOFwbLfEA1wviaCkdGWjOUrLzYEjH2hJu%2FKcfvEofqAMsITLGOsDsM8ui9uPiWf0GmyjIgbBK0e6Bj21IHedZyafcH0j375lOhOKs6MB5JPEHOjQqusiSw1Oc8Qg5n%2F3LvIxl232HgSXUP7%2FMm4AWHId%2BqRnNNJhtWSJmHuoSzTEWsm%2B5Xb%2BFJANAmg%2FFWf5Jc2ePfO27kAvh7cXu5ukOedFH5wlCdQJWCa7wU3erx%2BUScRijBdWfBpHi4ibq0pbI%2FJsT9NT6mLcIwANXlvEaDDOp0lKkw08PiyQY6pgFxvMnEfgfTvaEpnmKFaRTzjny0Mh1eb9XmlhY0OzuxT%2BWyyJXymltPKQVYOPXpspY7aQu9AdRqHmWvjFZXaJveSfhJiaeBnlc%2BSPYM%2BKUXK1RTqJc4KgxKXDBn8oxtbqiFdZ%2Fic%2BQ46OsUWFq6j4PcksX53GP%2F1PYI10MX8OP8a7Ra%2FJEGd%2BVqgH5M3dVKLqMH3uVn1XYTT5oG8uGMioyYtJfJUgUy&X-Amz-Signature=b23935c9d1acc21c3fa9deaddc40f056b2c2d2922a0747273e2184cbf4a4e450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7WTOBZ%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6z8o3aA6rD2rbgyAWpd6MPhBjRfxnaVhj0JYDs3JgLAiEAxezg0AqVj74MlUdvJX%2BOR3Ur9O616MeWwf0EmpTVU8gqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJq7BMyQSLIudSNeSrcAzRyuRAr0tmoeTPj9P790lNyFIbWVS8DaDbVFGWz2%2FKW6%2BAbjlygy7C07EjqSqf4gm5vB%2B%2Fu1l%2FvQ8Vb%2BJVHiN3KdzPHDzYoL6fY5WZm4Retq8NAR83sMa27rQOURro2p5vJsjHBdOpVpimUxB3ChtLeS7kO3iR081b5dqSY%2FaxkvLeFhxzxRROCH7m9vfsmgQA35OAkpfeRLCEt%2FVwnzDyC%2BJgdAv403Rp5%2BErfTlm0JwtxcXGk3L6uTKL4vuCOkXdfWwVq0VWcxqjeEx9miDpRRFsQQRaG7ZKyGyuUjYPRuuvxmJrQFwuEhMDXDy3g3chdlzaOYrYcnyjygVqNiC5HenY%2BHVK2K0nwhHx60%2BYau8WJky7FSaH7nnkmFlj36PP%2F8JyQr3puCSAIlpMqwGadN%2BgkhL7w0pf8p4A6QrGW6SXUUO6H%2Br1WiVC02zsCitCt9NOdvqHQpXOW0kobmI5N%2BP4StftutOpVzSrDOJ%2BTZ33B7Vn8OFu64vLRFlULbU0KnSxiLV99vkEKn616bcJOxYYy8tfuaCPsB5OHHEOHhBwPKI0b0%2Fs5h7FrJggCAC1ty5NkeUfPG%2FQmK%2FATT%2BebGElpJnMqaVlQa8EmuWjWnNlMkXtiALgD9EaOMLjD4skGOqUBXTTXf%2FDOXDuHxUV1tYdFtEs75zv91qVSoOOvTgG9MJ7RZuaLkULlK18M1W15wn5CsHpOtX3GaN1RHG1X0JkdjneBDT3hALRwgwA%2Fru1TiT2oNnzk7cDcU5rjW0DKO8FYat8YviYbVez0T6g3uDsFu2or3z0yUklWlvIN6nOQbXUkUGozBjC64vOidCx1XJT3fdnIMjAlpBpy4hc%2BN4MiLHqDaZl%2F&X-Amz-Signature=2d20b7538f491088f96f9a9299f5cab57a5a679cd52e556ecff565a11a07a666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
