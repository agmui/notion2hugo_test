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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWT47KSY%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDf9VV%2FR6y05rKlRM31qdP0vvf%2BtYrRm6U0W1Eh1SlJUQIgPv%2Bv6VIsh4iWKJrOzgPGDGisTunGnfe9NO6yj6yJRLYqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEcmvv46P1nxKkm7yrcAw9ZE77KyYrbcVAaZ%2BXsD8YV%2FL84pv8VMo3o%2FBOJZmLMwvlUfU9WN%2BbjY8YmLmKDYkgM4DKVgkVkkvv6QRHxuGYjfHvQqNTtwlbLa8qXmfZL%2BlYLV187OUtaGnTgzMzFo761C6HktUYWqqJjlFV4ssSImZTTwPRsep3W0rD4c45YCUsZrKhIKG5WQPB58DKy8U60R3uOITLKYMW3YP2Ii6EkuEpO7DYHmSmYv64QKrPzmvJOsHd6WRejzCgjDrC2poHlObYmdXif0M4kw8cyujStC75B66JWCnB%2BBJ50hEk1007nPTlYyDDdfJ2R%2BoJzI%2BF8qamRtNSsDrHvMmT3Vrlv83jokmfqhznaIpecMQBMyQaEKdjSV4RSzjPr6I6pPvFVt%2BOl%2BpqKYy%2B%2F2Re%2BEcaLGgzy76GknIdPQVwmfJmk6epRcEJXCHxGfT0y73CCPj6sMq8c3XnrQYk7LsShzbCncmn5rLjw0vsm6%2FY%2BKvRjwljlyiWmwK4y%2Fa8ZQn0N8Ytk6xAc2LYZ%2F%2BFchr8Dy5XXwUXnY%2BNyQyi3fIeCyfT7IFgaQK%2B51I6vIXuuLm8iJjKS9V2QQlb9dip0vr2HTAEZrE86owU6UTFlbEx5fklGqtnUiZV6wqjc53Z%2FMNK5xMgGOqUBf26ImxVzbfYY5j%2BrX1LyXEHQZy7axF2X6xY4Y4tFzlb%2FwCAJvKwKDjbwtyq3u6dvIPyAk5g8uR4QEF2%2FZ37%2BahlrwZo1cJngFq%2F4SY3CafbD9WBEU47khHd3E5CbqFYyyH%2BvjVkma%2ByHcfMn7dqgZuur0Q4peQu40I%2F11CNgNNVtLHBzNL8Tq5IhfVvypxtfRJ1h%2FXruPJ3oYO5QOOImT53FhkfB&X-Amz-Signature=cbfe15dd0581fb7b3bbfbfd54907db1f89749592609d2dc88a6ca3eb1c79c22a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR4WG5RQ%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDrt7YkWdUy4dH0abQmIRxt05CtTctpLtXOFYNRG3gEqwIhAMTl8ny2HWO%2B2aOliQ58PyndXEvGMy0Ev%2Biqtd1qwD3pKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1bBIuoPb8ppyjdTwq3AN7hCiD5QZ5f98uH3ZFNAcgF1W3OKbhDAhNz2OuvRLv3BCpGqNiTHVs0eJnKMMKbz0jEMUJDAUXK6eOkc6Pgv1XM4ggxQs%2Fz2Uia3p1C%2FeFS8KDcM6E6T4mIQtlJYPkxLTLxmgAf1LxVpcsnOntbejWRJAevSUzvPFVr6l4%2B3c15Fxi%2F1GuTk25sCeVOkuefAB24VRnNcHw3eJ2Y3iPhh9lKGtDsuxZ0XXGeXJ5AN3yEU4RPub5Ta3bbLSxoY7XVH5%2FMHlSaKUGPfgprQWRczpWrutu%2BekHjBmBtlC%2BtpnQpAXrdS2AA7HMtfs9ZlGQXWZ8O%2Bq6JrMnOTw7Bf1REyKzcHcnwCBleRrMKZyhxMV4%2Bwy%2BcoCVRfsLrDzq7ITsUGQ31I0fx62UUkczC5pwxh%2BxWgYAy%2BwaHo4NhQxtfMx8KzAbgKyolo5OQm1NJgeuLSEjM2CR6M2pTr%2B1q%2Bd894rgYPpoc98rgyhioM68mRcU44x5qfojbszvZU29UUhu5arYFnTfLUoRSToc6P1buAGtuKhYO8WLY6vTIYOwWtn6cY%2BoVeSlwjXm7DX5q8P1Ee8gV6mYxp1Ek%2BtkXv1DhiQxppN96xX1%2F15dfMotk6keUj4QYhNLMWxrjfK%2BpDDitcTIBjqkAfE2i0C7udDpPyY5fyC1nCZXb5U1pxiaCWyiK1ZvEnJfbujPjAaAze4TujtiX6r0jppIMqi%2F06aaVKqaSptdvpI4Ddeit2GLyZW4gpvfEpMYqFuBHYqhBR%2By7D3Xx6wO1iZKhD8P9JCDXIKcVONM7n49Z0t6xxqKKKcNEvjotyzDrmdMQCtBdKZxch%2Fz%2BGq0g8iUBMJQzm1hAbZHbP5UN36LQE6G&X-Amz-Signature=e1193a04156f87d13cbac08cd89dd73ed28c5276490af5b4e92609aa7605ef72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
