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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI57DDNC%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT6RmbFeOczvY9k5kIocK8ogEfPEj8sZfhqSg%2B21xm2wIge8KBy9Mpi3fV6VuDlPfkOwEJtHCEoUFHQ%2Faeh24Y7Sgq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCPvqRFnYtLMYIvKHSrcA06IoVfftKioiW%2FVsD3ledFrE65ZiRo7VFToA7WEslR%2BnroHBPdUbU04QO7Cgi7eDNGK4siWPuWfprKtp698wBw%2FnscuCUtHxgzvgqSBaxtHx0N9XCWc%2FfKMFTLYH%2FMyrBDruzOTh%2Bm5RImwcigRCACc74b9vG%2FEcY3sLHkxZiGv3OkZsi%2B1N6mqp%2BSj9kiNf7aYmnuag4rVnRPk1k4qlkGd0I8IKym1q4Hec98tyf3ff7ggasCdqd0X5Qu59pLoc%2FtWT0KDJ7Bhw2EG7M9x8ouQSQkIHDSljQuNZA3xeEARzqg%2FNVKMvH1rHDV3Rk120hCL1Gqt4HoLMyA0oimJ38M8iS0nn6KONZNA5k9OoPKmELokSvQj%2F4DP0jpOn7rQUSV9biGrKL3CEwxuzDlTF%2B9gm3%2B%2F7LK4xqBywN9ZRFrOPcsEWhh7mjmWJI5OPo4WohBQaoMj33pZonMtijrvMq4FKdSbk4CYRg8MKFuDycrGLWU5uFnxRzF2dDkhDQP6bZqFcy1zOXevkK75nuKVgde7KghcCNyvp3htNGJTu6N8ltQzmmTWuQHQkCZIA1XnephSoxPMQhcZQOt9YwdHkwGh6ta3O3tAC3fsSrmXOQLs8IrnMUPog0Vh6n14MKKLqs8GOqUBsV4qEgxTUxH8Oxup8gsFhyhdmDv3rcnC3I%2BrRPS%2BCYsEuZaK%2FvKPBbWcgITiol%2BE%2FeF7RBgpeyxgUYcKRttlf9V%2FejRlgv1lXpkpSeolU2dZxZX4nWTXYhnam4lYZ30RO8j5XBBJNXJ7HkVU59e%2BanzGcPBsKh7ScZlpMWS7QOShcgmeiQ8NKxxBz9Z7XLHFPalsgvbl2d7c4MWyn893EYw%2Fqb1Y&X-Amz-Signature=d1ff3ed8254e0585e088245be80021bda0a34ec7c75fec770366a0104403043f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY6JH6ST%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjVpNi5%2FIFX4qGm8pItJ5GgNTV9LqpdRselFMX1SaTkAiA7kZnwqRPAG%2FdraC4sA8tOUFzdBXIDuYX%2BkLwZkRdLkCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMwq0J6MdEKiJZ2rR3KtwDx5k74AShtjupqTAR4A60H3lE9YCvyg06mjHUTgKevtONPzeKEO1k8hHAynBlxCa%2FHj2kOdkcspm9DRgAOKwddXVdO%2B%2BOuUai3hPvj4KV7799N81X9ew%2FyXjCEunl%2BiDdbRrNqXCInaEN6a4CXr0CA%2B%2BZWe1E4lfoSLY0whkRrx09soqacMqRmrqtg477Idg7XBfxOykGGob3OgkEoBMJS7Ax7IBGD8UL5bY9UmJJK%2FXeqmKcv9Lm2hPr2Bbc5TiBGWvVzO8kzJz7FXP0IFCbRCYdJKzL1U2tJZhNeVWMg6JFEYKRRrv%2FvDQ9sZwrA5%2FpZoCbIbvzYDQEDyE%2F5ogPeMMoHBhU5V2qYYdVlNkZ1yxZ6pgZymnhb3ivHYhNSLGhKjLnVwaA0y03wFGPLPhqqgX8eofLG3Od7BoP32pZsCVaYyj4DyTC4nm%2B78j8A68lcr4mrwVqUKt4y8TYeU%2BQsRsfACVWuwGtjUtHDooO1zvz7glkrVcObTGnCL0QD45YbHKd%2F%2BVBT%2ByVz0gQw7TFQ016FzzELx%2BmP6Otf%2BxenZnddFiMshwd5oWXn%2BVL6%2FnU2qG14zilya8J34CyIJeeNkmqoU3m9YEAyPN1COEZ7j4E44q79fKpiBHSaEAw6IqqzwY6pgFvIP22YBOR0nore5PMxlZiuJv%2BQox8TLTuvG%2BP7qXCdJkQdwT0hcUuE6I9eivqzKnb6VxO3TPcr09%2BWN2ANy0PpnOLBAwi7YPqsv7FRqE0d3ah0M%2BvDV5FPR%2F9C50YDTMahiijaqLneu3CZOq7BW2hfS%2F%2BPC2Na8OrO%2FunoSTaA8xTWKd%2BxhleIsmkMJ4RFATOhZkHOWeZg9imalW8ENK9gHk95luW&X-Amz-Signature=b9120def7189c820b936e51cdadc1ea086f50726fe918355da11865e744198c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
