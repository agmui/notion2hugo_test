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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYMZS47O%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD2G2q%2Fx7RQ5bRfJjeKXfL2yHakWhozg6qauox8MXyGowIgP44gGKhCl6YLBwJvt6PrJLOSVeCopJBLOiGfuLZNOvUq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDHKMWnokiwLap8J3aSrcA4Uu6PAoURluI4R4v6H5CxjI9M9PQY9VZDHlhZsMTSOF1Ttqev3WeJyC2TcArE07silD0E2Y0IwgK3cmyHDeujKfrDVna3NTANlK8gweYnQlR291Ku3YwbCNy9B76n%2BCkymqORIqbZpYgWKT4lLFHt13ZVc9%2B2ufIiZNPiiFXOlLjD4Hh%2B5ej9%2BtpyRlHY88qCf%2B0QsNSzcBL7%2FSdKSxj1unvyTQlLkxO1U5Qr8SEPVXup2Jq%2FKtOVIVOmShm5%2FYWl1GfjYxLoufca482YoLGzBpCytPP%2F%2BYcwnLIE%2BJqDa5bv3Zo5WSLqrNcqF6UsoAdECW%2FecYsakYqDEUJMopX6Kht4P33bWQNukRGNam9JXdKPSVcm0PO3BZGwxKKI4lt%2BU%2FsNOl8Dcxtde51uDjalDJ5Zyo4kt3mW5wgrqX7Jyqk4xYrIVKdmUPbEF%2Fowc0qsHt7ioKMBubUZr%2BsgnE436%2Bc6OPotz2Do9TKgm04nAc0qnHT33Fc2OT0QtLfBppzLvldZVs9elF9arvVNQlstCtk1Scx8CoFwwYttQjtR9LTnSgObStbAj984xk8%2FHr9z0H8aGzgMlyzVnzz59KxbpbYcZhy58xHzy2KvlwjW%2F%2BILJsZyUuI576emmHMKrgp8oGOqUBNcSigPbAh44NgLf88fXKZL6K6NnKGwa41UJAyWFXYxA%2FNGN6PtfP%2Fb3k7pBEh2IaS73zc4f8eZ%2FkMqA4SVMt9IaUF9kv3g%2FG8nI7TpijvmAe5TFWVKfIcDOJxu2%2B16H6DSwEqYJuNr8Qv6fkwRO2nVz7rDgHUUWOEJPLpyMwaSIhzP9%2BWbs25zINDUcfGVxEofL%2BfDdmf3U02lwuspbFmgWWdx19&X-Amz-Signature=aa437e2456652626e93c21b713bfc78e422841b18dd0fa35d48c22b13ae626c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNJGT24Q%2F20251223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251223T014531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQC3qTntqxU%2BCpJUE6O6L5387bdp6JgjUyzDZxzWTDqA7gIgMytJr2FSEydgWErtQVicZHPUyx8jLJINzoougvv2ltMq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDCj7jKHVk3jYkR7HXircA0oqWObx0RUW2O0fU9DaUUKkTVdZu1mpkTs2F0BDyIot7MqM%2FV4y5EqmMU%2BjDJBNuUkaZVitYSLCauVSgTHWNzOHqejs9A6F8u9zJh0qjsLiqGs8C0Jt44%2BvL1Df3ifF1q1%2BM5wrjRJppLwHn7bW8e0BihP4jgFOLUs%2BOfN2AIfOO8ML2xIFCyD0uaC1RNMamah6oqYgKbgEIm5UPW7dZlbgm0gd8NxvoiDzw4bL%2Bnc4hFEcJEV6ObbeL4TqjXtjSnO%2BJ4OQlZII7UM8M25o6WP54JJ3erXMx77DxLaggJ5NMMzIL7fEEwg2m16k7aS3frW1OI5Zd%2BeF%2F%2BOHl9e2dSnFYe6JSBZT6yg8cMXcKhgJ%2B9YQ81bxMXEyqV6iy5GcIV4sg15MWdGaBL34uk1%2B8v1JeRfa8lRRpsbc%2FbZRCsf4zo5zeZa6iZJEkuMR3AqR9xXJ%2FL8Ms2mS2rAB%2BXE63alLvteNbWhRT%2Fi3sj9B1gGvhdjbpahuge6hJou9OUkYRF6%2FxMwO0ecv5RLMM4dyyjibusFHhMZNhegFi2plfxK0eMjvVKPCi8fRNEUz4PMfJqo5WhaKkjcG66Lzg9vO1lqOP%2By33CBKojbiG9HeIufeOIhyP1%2FuLVpmHAM4MLzgp8oGOqUBxnIL8ceiKhFDg%2BIXyrCWgluoZ54Dnfpo1ON%2BeHqcv22zl04u2lkU%2FhcXFF1Hw9xSkZzA8Tbtb85F3WMwobThxN8386nqspf1mgdUOyqdJMANIWt1hYwsDFzRLRKr%2BxeyiDQ2ggPPIroIx1p%2BA7AbOct9YcJxqhajNsaq4sFxQIbpvfLfJU5EUs2%2Fhc6Ps8C7wos4LLslUfpVYxjkPKTzlVD2GGlZ&X-Amz-Signature=bc8e7828c50822fd0070eacbef55d74e4fafb8c8c5bf613e7275ef6f46206b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
