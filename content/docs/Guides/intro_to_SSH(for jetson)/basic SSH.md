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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHJIGCE%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBvXyvTbaoErw%2FZdukKap0oILS%2BdV78Thlql%2Fuo%2BH9pJAiEAigi2kPrWJINXdzlBDvOEJvNZtJBen8ajpJJQE%2FwEItkq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDEKVeJMMAbLVcWcz1yrcA4MHo%2BWGezwdm6fbKcyhYxFuuH7Dr8oWcX2jTSfNBwbXkjMA%2FnweZ%2B4GjBfY%2BfM9BrB0ZZ0wF3fpkj0%2FIH4rphs1IMXfd6uS2wXrAsyr%2BOKHDrBcmodTJzKQbATDu8pOuLMU6UOeiWtK%2BpPnc7dP9woO6bS5CLBaT0ISZdwKUNwVZzvHUAPqci6kVx%2Fglv63p0uwYtIzBPfYKFmRF2YBG7kXdTCWVWchshmAWYv1TY6GbsxdsgDZZEmYGDhSFo%2BC9NsKNKQ%2FKIzgX8lt4yn7tUN6V5K4E1stF9%2BDIJS%2Bv%2FmSmrhkWTucg1TUtLF13NTcwALSUu3B4rBNI5zn%2FFaXaITBc3ayfHsv8ItrsqbqlUoV1dmBhRQ07ZvAB9rxXPkUMHti75wVgzQ8Zery2Z6%2Bfg66JCM3RBs%2FSuhyNjaGztuw6PVuc2ow0N6BoC4cXvvNiASII1OAhsBPCPQj0D3ObZwhwUBBcQ8Mw8HlOUOWgCXUi9LeDeJwCZ5dIMnHc%2BdZmVkDTIBjnr%2FJX42PLquwc8w95dyBd8dCTFEHr2p8zZsPdZIlZ7GhogVCz8LUQa%2BUZKfhWjISXAOtaO6%2BKjSQwIHNL6IKQh7T1%2B6v5nVL0un%2BUBhr95YfLaNWY9wOMKzX2s8GOqUBUDZ8i9eKFJk2QK6v66drBMQfUUs%2BIDfsPxEdYCXsWu%2B2xqMyYnEqOIo3teJjNnAw%2FwbX2WKLWvlIgXU4hR1acp4jXB8WT%2FbLQGDLxaREZZB14AASfS65h9A8c9%2FzhuKYZLGiL90cyFske62KoSnBsNWuBTzeoktXNTcmrDqFOXf6x2DyBC5BIAkrRnBgI9eM1XmsPCbi19KHNKPqDsb7e7W8LukN&X-Amz-Signature=bb5d8dffb7ea48018a5c580e69fe79073adf3c8b8c73d5d1765fec095ce42518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIHCWI4D%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRCSWL7OxgJyfss49xrR0HtI6IwAWd1WOBSrIQBNwxcAIgMGm%2FoqN5zOs8Zf%2FoSrE6UPz21q%2FskwaKEHJTkTq2TAYq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDOyV6Vu1ROfldlZmfSrcAzoZlSRu7TUAvQcJOskjS7oEKFXa9zv6MeUl0wOAdUh4bZHDqwH3fPlV%2FakOjA959mCvc6qY7jjyJCOComtDXVTCJOVtJtSrS9I0ygKjRiTf%2B2%2F2BHOuRVWoZwUXWkT%2B8vAy0HDbs9kPV%2FGVrlju9nWYyK6fZyZOTDHYZvVmRYKZqUw15jAOrkAOar1Ffj%2FfEiFDJdG16qIO6VlKzjrNDONKw6Gr8IR%2Fo4%2BmOpn8VpFkSXpNNRJGIPxTant2kCOcnzYaLjWXQkOoSaDiuNp5DkclQUKIwJQ%2FXdqqPRXw%2FZdIS0%2FlsqJE6GpStMwlqlbvSoKr8c0StRlX6ZON7KDm90ce77uTafkXFK79lE6dm6fI0TnV5jmw%2BQ5%2BPvj4WLRQm16LoZsAmZInyypHxukhDnGJacRU5KIhOvpBOReuql2NxX1jwdaBDAIIq7q1t%2B8Uy%2B05BlH1%2F5K7lNd%2BnP%2FeeGpPCZ7hW7zorTSC%2FznN84VK2j364IpOgHFNa5t%2FsgH8q6yxhuw8CPVgmObjZS1OyDquq2oep3Q73bKzUxaH3r4We1djT79q7joUeU2f1XTYuDU6pW3mJ4BSbg3j3yMebXnemRWwLio8l0a0mwF3bpkQOvsZoGv9%2FsqXdy0hMOvW2s8GOqUBZyBEl1ijh1NG3aUOBJqLuAco%2BV22w4z8i8R%2BUg%2BYiWbKB78EGhrc13aO3WKw0nK9eaCj%2FbbR9m7FL8y9biMTcpj9jVZEYT7jlv0DUPBk1ZmlppdWDvoBolt9K%2F1IyIIXDmRegaynIzjfSXqEcwlO5lFhDJOK19DWKN5X2EUwktIQWwdqgEDCmRmKsmANxxhfd%2FpHZkH%2BS65xAC4eTEZ98ctDCQ4k&X-Amz-Signature=e0ba30705efb938a13b507e110a8cc2e5cee542d1bf454ef5a3e107d4ebb5fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
