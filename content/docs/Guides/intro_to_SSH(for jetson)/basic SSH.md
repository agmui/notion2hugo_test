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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RYLJ33V%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFwRtChwYgHlv55Rp3nlnJirHSpxq5y5KUwBObg6BvzBAiBBBpskIrH%2B2zZqnpWfnbQdxhqcAEPsJh5iwy2nN5t3CCr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMxiiRGmhDbAVgv35VKtwDbjrRhGDf0qn9mj90n82d1hCyfjLxLseSD207VW3b18HtZHrGwWr5vWwc45huzH0N5r2rssOyp64iuu1lwBOZ5Pa0EfiQ1t1C32E1IDihXs3fO6YfG4PXhSsTzpRA28Z0jXZcn88cqyiC3fqlCTZdeHsCgt0ntwcHYoLgdNuQVfp8IqGs81vIjxDdBpTrr4vbau4agT0TYqALsawonS69xqNtqbBgjybOxGSNIlQtHatuCevUzWqfZetk9dOnOMhmrZ0bPI2j%2BKPzmHYjIc4lGFaZ6istnRONURPhxZOX9flTfO0%2FuBQWt27oj55QYXKvSDiCmm9pJO%2B68gWiE8kxqJOuHD8k3Bt6ghNPn2Q797x8b0HrDJ0zECK4J1sV3NOJtP9s61UzI0rf4smkTbkThd6471f8IwRxN5mwpmhzRzoAW98S3xqIq2pwoBiGsqUDkvQtqdyPmSPFsGvvkcsGau6X90HHPvRzvAy89hN57OOWRP%2BhLUjLBGPESwHzEJg8%2FGsFLgIwYrqoxllBDrrjLQtIycB8%2FVPt1ck2DUPCai%2FmwutpeV6GY8HT7nPntVGhAc9xn1%2FqIneHKMldgqTL8qZTgAlqE%2F4GuuGXohEIzKF%2B6Juwl4A2xH6eyBIw%2F4nszgY6pgGPvEnELc5Gv7enbMmZo0j5aIsIk8SdLzGY4l5WPF0lYaZ2APb4EXeyxg1694sj%2BWbrOatR3L%2F8OAZIDTWgE40E2fdwWB3eIIHrQDrQL1HkWLCwMUAHaQG4ni2SNwzr9oYubttq4iaDAb0E4NVT3Z%2B7ikCPLTsXdxiQnYR9Obe%2B1MTc5k%2Ba52sVXtJ%2B95yqMR2E%2FOT8BypGl1Nqijpgqq%2FxD1%2Bf2h%2B%2B&X-Amz-Signature=65129c142b5ae05bb2d4c2f01d81949e0e8504d23f495c69d2541e9051a903db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654NGUIIW%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxli0Z%2FsGQJxhsURCrm%2BT0INqC%2FSa1xahxNozCHhKPiQIhAKK03hrSqzyx8L5ICXXc%2BdF%2FRYx4eCcQVEBDVDd2Wq3uKv8DCFQQABoMNjM3NDIzMTgzODA1IgwZ%2BEhQCZO8Njz8N00q3AOlBd1H91M9BZ2KxbWA4RvXKuVy2CsmurVl9%2BQwo1V%2F9PWcojuKSlUOnIxLUc1qTJME0YPPsC5LUtGY2anxhY2IvamnsfyRcwP9Jin1TQi9cV8y0gA1h6p%2BbYdeNmXVaDgzdQkR7bc8y2tINH%2F8jO4MxDUmL2M4i%2FA2%2FqXp5%2BiEVOI7itHlIvdDTRaezsbcEBptkTUQG%2Fminu7suMWoCczEayV6b0noTx%2FobnJOyWntxY07pVP94ULvEoCvnijZoIPdq7wkTjbey18y%2Bq3LL92uYIZNZxNrDaJNon8dUtVUXjZKJAcrJhgaShH0hc9UU%2F1lYD9npiDqxYTJCLH8cGQ4%2BUza%2B4JAhTatMySHMH6X57kxhytTJ6PkFYi%2FinyeVVoGWzn4jCklfl8sARfE%2FmU7lw0llIE1OTOsOj2raDMRBWSgFgh3F8LKUHLIAFbJJPVbTtz%2F3rvmlFE7F7TgolPxDkWWQFUDrYCIM6Pd%2BXG1s8d3zSxoXBzoLqFbHVeglEv7DeTX3af%2F5efWcC8kyaeeMwRZMby2dRr%2F77f9E1ep4dEj4Ft%2BMMFUq7vhb99WPWKdRAZa9vESrUBUIr7bVvrfswgNkjp6ntfdGAn7WB4ZusZcKim0XQe%2FwCaIjzDrhuzOBjqkAXvZTTBk7WZfGfeb6%2FcEUS2%2B8Eo1MPXQCWAER4MKrIRhEGiTmbLVbv3Hvw2L%2BaLL00g%2FaXYs1o60RkL9FRlQ7CATIFr0HfMlXvnszGHlE%2FZGkCMZ62UKHFxF430PIX4HNK17U5vurExd9Pt1PndqP2TYWEcIKjFvwBCJZop7nirFP0QKeVJe7GwJ93wl3l%2Fco2VC87FQ7bsNccXvUPF86azAMrL0&X-Amz-Signature=23d595a87d28f0972e5c32728f75dc7b2d5ecac6d53a43807dd94b115249f139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
