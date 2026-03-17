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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637Z4V6NH%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCkRrQIQlfVOwBFQ34DTK%2Bgoc8DA3K7bO1SqHzZNRD%2FQAIhAJzpRSDg05VB6wjpkfz2KzXE8FMyK4uNmv4psdtmyruvKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgztFVCJEDaUKLd%2Fz8Qq3ANiDo6CixAlGA6hRoZtsiwmoO51RcG55YxgV%2F9BYmVo94YH0IUCHwBp34bOoe369kAK7RLQTzrd1mNZoXZmcWt9eqicVVF3Vu64an3bOwrcK6XQNRph41UrLBZZLskqpalPx7%2BKUQoEqt2UrB15pruUvCxf1GgLJJDV89yNBUxXXnyBwTpL%2F62IVZhcbyVcv3Frjgu8X9XmAiLjyXmtoaL1nQJ%2FbysKzai3DEZ%2FtOUqi%2FAatxIUS%2Be5iAvbjWhmNXIvdvmXjasNFAbOwJm94uFdrZ3obEbi51RPlXvA%2BS5hmEiMqs6QJKvQ23JeqWIk5K4duDGabLYpEX%2FDFg6Pg6IvKLlfjM6yYBb6hgr4p5uzgdTQU%2BHXq0t8ikrI9LfQFHtFsyLmrn6jVXiY6uyhQeyuVhJ65VTQkjt1FrJtCJ9YJL9hCMsS5r8V2aP6Y%2BLPMoYaBvbHeHnaloRfRoVH309Qif11j51P3z1ejlHLrNleCQcG6qXq6aQOv0jF07lMH4zhs9L%2B%2BTPpUgTSnvCvBhKjGuoA4VoTVJyN6XybYa3FWZN5%2B%2BqmYvMfmwrH0cXyKh47dXmh%2BSve%2BO0M9dIQDwhA%2FTAi9rn2wZ9%2BKXpR%2FbpOTGLyScONxNLQD4ZnODDU6eLNBjqkAVuBufqfCugZr%2BQNO%2B0Y090dzIFqGvxt5uWPYc8Q3SSa3gc0ay4COkxtHXj9hrs5Tv3%2BYShQOdIhYg9oQ5chiRAQkdPsGUi7adS2k8qJSqPi1bNZhwOcgH%2FnX4DKeej0iQL2UNPWYx70P1RicE3kFxokaq8uyBYRuEOMtYABLl5aIymOX2TGS7zR1vVeWXOF5DMR3zzrY2E%2F5lgDeHUSoT9Lauxs&X-Amz-Signature=9ec03612ca3e799d65005082711ac1c810e50c2eb3ce5e20780706a61414c8ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMN2LZDC%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T021000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDdA3N9awn%2FD894Yc24yOqQD9EfdloFRXIvNx6x2jqpfwIhAORZD0HQkOsNF%2BHamESRmSNj9a2vrlRnq1usmLxFdAvyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRSZrRyKdJHz5sh04q3AOtFywB5xN%2BvalEfKUVY5%2F98WHoda5v7wzo5edvy795PjkpIa98qvQh9snq7sSVEsqZ7NMZtbaLL%2FB50ri5Hf05SXS05HV1Fhp5ZNME5Q%2FYY4Hlwri16MxpVy%2BjhNK5%2BB7e4ZIJJCioYtX%2BaQ2MBZKn%2FrR%2FSk2YU8CqpGG1LvNmgeFv2yg8Fam%2BNXR4UJX99ntf8zkQa0ejIwoIEtCMl5fFmF9upvJCNX10M85W4CIBVVybfFJMOOwYOKWbiNfpt9o1Wb4eySFzW%2FfQOSmI6YKz26GAXv4jHQUzt21QfUZ%2F2EXQv3yKKHuNn6ngOiX172zn6nZEKuoFGIXEd47Qa%2FEnh6m1a4vIei6OMYRbpTwS%2BEZ3UbTqqtx%2BW3zsIZVjUY7HC76hm%2BWa%2Bacgp2%2FGnGNkdyT5vrf3PTTeaMkmpayeTFWE2l8ROWzC5ww9KJ1OrA9iEDF2R6mzLBx%2BZ9Di8sIuxNb5VkBccxR55sYq5FD%2F9CknjWq%2Bg04KYXJclybBZN4Egb1OnGsUG8kePPT%2FRoUzivOkAbYWkSX61E4cg666wQVK2rcFa7jag1sSNZKE5M2LNnr3wgdKGznUcRZHrWrp0FkFhchGNHsHyQ3NjHxjDJX%2FgAIXHmcQCTPwajDb6OLNBjqkAXeukWxsiooQk5BluSw1lVe46l8lWMpQ8dvnXYZicXJvojoMqsN8xu7RGPMPGRHLIjSKNbZcHeSuYaIRE36euNjkiI5WYo1rfrzGOGMjaMTmDeWiscQikPLHa3wiHE4v6nTeZAPAfgbp8q%2FoJCpQfCpARAXWuWB9nY0PtM0BAaRzt%2F88apx9Et%2FpuxNBuV4ZEfVZZ2Gdh07i4gCcP6E1IhnrKN%2FE&X-Amz-Signature=c72242c0aa732e396b13fb830139c420d8571835db1669328f6ac083f8504717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
