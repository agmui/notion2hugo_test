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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6C5J2BD%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGTOWkGBKeACvVc0W%2Bjee0in8ivdg35%2BW9DXR4QT7im2AiBPfP1upccQABN2yVhDkiyqoeh7Qfx8m%2Fu%2FvzfHMk1DBCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEvD1av5cf%2F6W9JxwKtwDv4FEtZ9WQF%2BYG8MOeBwpzmg4BfwM%2F2gs5ptw9kn0f23dc0dZNAdUEe0sKeNbzzt1CVWN5YAFWZ5sdmOcgD7EkEQsJZAljjbnk3AT7BDxqr%2FiI8NnPyOc570Z3Lxve%2FcWuJ9wMlj9MeL7jwRy36gwL4PJkRUjjDUjaKQ%2BtP1FnrdpGWZG6TB5e4uyrWY6peq7gN%2BRRFUQfmQ5UAww0Vosw33YOwAPtsVitHqzoxdvmTXlxsvNewzqH13B%2Fg7R6hif7XSAfiPIQJ%2FkkI4fHHMemU3WnANKyJ3TPYiPffJFFTlO0nmjOdw3PEQn0E4sgY%2Fe%2Be479WP2CMGaarfJk8CzqgBOauQ0SYD%2FmdXo224Gnon3PcBOetzI5Gy21FJ0Fww5vAodueeMfriUMJnpdZI6a25qqC96IcngyIkrHmcPhEkU030NAP4OqDm1pmIPXf2eqb0mM85M049fjjO2EhDM8OvlI9wS%2BiqWXQxXLMpx43DnwC4Iiuiu0SsSK4nEXnaodzuC96glZllAPA0RSRnR7xWjKCziB8uWKugID2lbkl5h%2FKO2NRmGlBeE8knzFI7WvTiOMQxOeYYNUJQrZ5S4Rb9rVnCEnTzR3g4wOatIDSTaESkhaMi84J0iztAw0IWe0QY6pgFuHsadYUjE8GavM%2BRuMG2jJq73636OgLnrjR3Edn17o%2B6glT0NMakFbA5w9V9dBfc1B7Jy1gtV4wI3f8Xq%2F9IOpMzaOlL9LMvHJDEYwZ5vA8v0Zd9MZwIJbEfKyfQH4CVi15HIY5xirurVMz%2B%2FhiJEZGJplbHf8YZjRb0DPgcsKUuj0VmSQCa0r0xpOs%2BZsY3Z7s%2FR%2FKec05JCQgKA2DMGYHbzNi%2FX&X-Amz-Signature=1b8901af86254fde02ce9193904905aab519957b42ea280947d0e50ef6553367&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU76MH3D%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvRiJ%2Fz9uK8FUBKU8YEpkkXWFKhAYZGcmZZfdDGBVaKgIgIM6h1j25WoB%2B1EFVN%2BUzeqAp60ARj572%2FRCFYcmZNg0qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsk%2F1czIZAG7X1JsCrcA9yUfyCHpT73zQJteSeDcvvTy0kOVrJiLjQpLKVO1MAb20VXVrl%2B3rqQ41CTPUQdx%2FOee3W4rPVBPhkTKkb8KrRoJdO9pkBnsTA%2BunWF6dTMHVNMF%2Byfy0PhCbdpk%2BNS9VYnf9A5AxP09XejK5pUCkwPeN9nmC6IemO1sx583GmVeQ14jQc0OJHdq8%2F%2BQFmTLtEiXA04xrYvWA7MPE422eqx9e%2FJmnwLdk6emST0gQzn36a%2BVjnV1%2FHYUgDWmvmSAjIzEHBHTd258CjDVFK5SaoXpBT7LUCHN1BYVPwagCanJKZskNdvPD0eL6E2DOS4k%2B0QQuQtITUxkT8A4HTKDdE8wBqcEzV8TAkaiL7PJj3DoI8wu%2BRN9e7MzYnQURSshAgJPVS3awwRH%2B%2BEP31T1uQNvSF2yjCgXCqLQw%2BO%2FupHmCwgETJ2Z0GtMofBhdgGe1ZsdVKyblQrcPtzhE%2Ba9PmmPN3XZFPA6FBj4tceA18VjTP0b1FTaJ6rFhIaIhbuAaL8zmTynRTWbnNhtcKgDsduOG4C3OUeckaRazIGCy0vIGQTa6P4FyrIIdlJVpLp5l3%2F9c0UgnlJ8d%2B5fQ2XyPRtvoNXzhiEDvJfB1fwvs9%2FzMDWXTtvcwps3eFAML%2BFntEGOqUB85M71qIcg67x8a1ScihJKXLYZgoWuzCe5GaUGEL%2Bnb7YdiSrwxHJzxHodr%2FjIc3y%2BQUhAeCqeNphvlhugy8pxDhoOFjmPW2KaF1mAY7e832xQ67Bew%2B1me3gOVvczMz2GCFtrQhXCDngg%2BOFwdaA%2F5ZWs3EZ2ZQ%2B4mY3VB5otKXMtst3eFX%2B7QuRafFE49ZkgiYHVISBv8iUDpwTRJ4w8rZUxqNZ&X-Amz-Signature=60dc09b057e14d30da319f1f3dd221828328ced1305118e7b61170158741762f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
