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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNBKU3KT%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHoBoU4j1cvkxCI6PiF4X5PTrQg%2FEjbQTebpHK9sHQt%2FAiEAgkwkClqZMGEMtRaZFJ%2FuOvXLnRBx7vULi2%2BCFf%2Fk%2F4Uq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJ49a7ahDdv%2BSgjR8yrcA6%2F%2BQ%2FxGaa%2Fd9NsWOJWNKeN2WtMSjpy2d1Lk9hMT3RwZKGcMjKU4tEAsZsPLNUnY43ksxMZjBiLkFm2x8CFTPvQpyyceXkvRzjHxudP%2FA5yKiG27uWNmxxihF8LDNMc0oDUNsMauNMw6J3shbiWDw6RYzsBnoFEpGRIbobcvBRLToqGk%2FsGpVdFpyJuY%2F5smYDvKjWs42PAv60QVmsLCWLmo4inDwdYlGLr%2FNtYsF92cRD3rry%2BQxxfwzDaPGd6qBhAicYG4SHdSyhrlqXMfPrZtao7lPitvbP4SV7P53Xj1XzLvCLuHDXYmBMItnwi%2Fh68Sq0ayXzifAdAk6lL9M%2BP448v2gIDv02pfvi4CLuzVEy8YJcYD02Q6f6zBPKaG%2FLJ6rouL14hnpm9ke8JjPITLegTlonLCZ3PTPb5XMyd7f6uNILyJ2EuWiXcvl%2FNQS%2FqjMKdS7elXdb4rGng5B10GXPZQQ6V1Zb3pvi6YrmT4DoW640heS8hSxenjhDvfD2brl4YL%2FQa7Qc%2BgMyZXKL8JrCWvt0RVXRdC37W6pL1XZJlE3%2FIwPnkXD0rXqgU9vdYRkwJise%2Bu5qSwwnhrpHKzP9VjefqbAKvnT2JNYWerMfJTS7znXyXQEiuSMPX6stEGOqUBfdW61pWr1MIyB9iNuZn3%2Ffaoggrc3xc1shgwwk1GQ7ib3XtcKtI1WmVCI8ziJlAgk1W5WQlhLR2CPUMjHOdz8VEUqazCS8g%2FHFzqGRK0EZ63vIw8NmTnzLv4JlsJr07pGEIewKDbgTB2RrDPNTuwAEjEQvRV9rSfVyFUbaQFOiiBR0Qxnf4%2BWDEjEC13LoFaBvQP9EffJuWQ6rKK%2Bq2JwgYNpJ4N&X-Amz-Signature=411a756759224602b93127a909211373174a02766b3c932ddbb0e4901833123a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGUIAJ6E%2F20260613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260613T034823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIDwLfL7hqk2yRnRcfLSAH3urdljlfSazlZscI6nB8hqhAiEApJuhQf5z%2FhXdv9CDNRH5U59dVNhSaA1gH5jHCXuUkfgq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDNftMtNrCOVUNEIuxyrcA%2BOWhFayhEPN1S242vVD%2F3bm19WNUiv58qsNcQ1kR7bsC%2FDekPgzMBpHPRN0mnv37r4WRi9b0drUEdhmht8ZzGANvIcPzbYPs7hbGZSB7qCyP2w5eUbB9qFGw0Pr%2FFAc0%2F0ykZI4KBmtsUugSZmLHzgA85%2BTfa4m30aUx7SPNY%2BIdlgge3akO4Z6cUC4EfXsBFZg0AfHsXHRJhbYcINr1DZsLoza6m%2FJEHcsmGRbufAXiYlXLDzkZZdXhHkC%2Fhf4XyinZV3lGDzeIbC2xSseoYGUOqJBBDBqw2fe7F55qrBbe2xKIh6K3UUTNPKmWlgdOq%2B4xCc9z3s2FDSpic3%2FbrUP0asgQOBvred314VCGFHIh1WSRAl2mnbFJAwHCIpJdovG99iH74UT06wZ1WluhdxUBvjiwo1g0tA%2BsqDZL5R9ewTMwJC5faN%2FXAyV6I%2Bvh3BXh8UgqP8Bd5gQxH9GChHQsQUmokJKHlH4hid57Tq2Bz6Nr04Fn9%2B0bcn9xNUKYYdigdX4Gqmkfg0aSD%2Bk9P0NQk5eZ33FlNFiK22H0RZjQZDXks5NybiIEqH4hcBFlAtawxfYm2MyALWLNlv3SXtrh3%2BJN9U5%2F1X%2BonDj6vCTkjV7c80i4zJ8c2ScMPv7stEGOqUBdIa%2FWMwcqSXRMN7RNidzDpmtRCneEh0Z3huLeX%2F%2BllaXmWrpV95mOLd4bNlj4MTTu6K9ymzNcRCAxjwZvk6vUGDfkyw%2FNigFpJivn%2BXzs71s6qsi3TQMDUxqvfcy7brygrgfJT3wZUIZqoKm3L5l8EV%2FvYr%2BkUShX%2Bhv%2BhP822mjSiMsV6WjDptc9jm38JiHrk2oi5XHiYHu3a9BdTlFkTUycwTb&X-Amz-Signature=6d9f0898336c11b5610b89c7c9cdeecb7949acb96422bb258f81a6792ebc65db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
