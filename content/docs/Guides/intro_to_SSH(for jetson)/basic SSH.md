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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN2TLN3F%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAXqVMARRp52q%2BptplBPJAJDcYKsQSW20%2FtmdreZGnUwAiEAhFoh3QUqR62zQzSVyKC%2FD6JQ2BXjbHZqMc%2Bw5QgJt1gqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQyK8YnZKjBCMCRISrcA890VD%2BAkv%2F1ZMrMzYyFxdgJltgCQO3iwDxiHG5s%2Bx3JOldZf%2FfyjmPKtgeXfAhwDFqzow8PTg4naBrUUN6I8s8UQEec1sM4Sahn08kPnHIaO0SXFQBF1%2FHr3VYlrKym17Y%2Bo43RotMJtakyKAVmntb2i1Jjo1S%2BAOmpYhDqNL3sNx%2FkshBpvf68Al60JSfOqDHBidCbWR06M6%2BiCXgFSukNy7s5Rt2i%2B3qZBaYw%2FI9OQHJo6tBsJRYisnkuBX0OMMKs8roScuBHcV7cErZhh4wHlI%2F2z4%2B35MSE0qb0I2wifRitvVBGMjKDyAFlMI5hXuSbXdqQVruWeuBPMIcXShN9sNLuuPZnBKl1ofBnna%2FGVCo7HtBSfcsph1ttlCVP4426H4poaL%2F4lhoRFG2o%2Bp0TY1ZUKvNl%2FpcSUgGZbMRsLODbgnW0lXMVLIHE5Iu9y5HDUAn%2FV%2FmKoZKF4Dj9LBqOdwdVWpkt2qUvAGLyRdyW5ZHHV8TdB2fg6bw1F27thx68pBg7cVK%2FWS2nm0hsDGPP0caBqDek0HkND3Nj6IaNK3Vkm4gDeUlzbnnLbA2AxTZYfYVv5puxpQ2zzFFsxHBL7aCEPbbRMvNachnJgoIoxn0XwpTYqvApLTowMImtntQGOqUBpuR7NMWvlwlgRIXOVToDuiI5e0wL9r6StKh8PfsNAXg01hs0MplL%2FNYUwqLjySbRenIC5WVfM8%2BT5QRKHBid%2BT0ooBPZoxt2xiqm7YryJh%2BEPnpS95V3n%2FRy5kYYqSJB7I45uOyRNDmFZfb%2B%2BX8bNmIbFVvIFmROk9ehJxY8GvHzjvs2rkZdp8xxOjRSw7dx8RCXczzyusfC1uuynwIAwUiEGiCi&X-Amz-Signature=2219fd055d46f691cfc2416ad99011de7b861973e646509d2df5656c03e76d43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IRTKQXX%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDe%2Bmn5pSQ8iMvCEBzJ1XlApDZLtN7GjZtDIKIFQxxxhAiEAsGrmOCvxb2swDR9INF63qGMoMDKYcClIZLY3Nt%2Bys0gqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAhUdfleC4txq%2FhKCrcAy389hCtv94dsQHjzcKDLgX2qRWf34mANYD%2FrBakJsMQPcmOLVl6uNkLkQUCiSKxuKLL9VY4YZ2JgDRbx7eXCDX1rz47tjgAW%2F1rXcs5jRD9kbX3T7F7TdIwfoU9obSu6Vc6LCYHJ6OtXHn7CbcNJW9q0VcCJqgMQMzLllCFIaJHzbsRQAgSznm08tmXdXbYnEzZkrPknkRN%2FeyNCl7VHwjxDQlczzsYpEgopqBnrfaG5px6YzcWj6ji%2FFY%2FFM%2BH59CPnJbQATB1IW1iTFSgT7nJNqBwWk4ERsGKD0x2at2%2FuCSZLqI6gMk6VEvitBzgyvcSnM3ZsqgrvIpzoGKPhIR1VOLb152C58J4p8xeM0K3aJG3Ny8JihsGpUaO2izKRfg3ipvpukjhQF1IQRMHfD5bHhauLXbdi77u%2FBp%2B7WlndjYo6roWk9ctM1P7eRfeAXJGEJu6S%2FxCPmXJlpVm55Kulco1nDlNHPU4UFiweju%2FakMWJUSjzDMgew0kznQQxK4jJQ4FsDYK1PzxGvPg%2FW7pRrpubjRKOZSq3x2EVT4DtKp2LlqaMA%2FK4orYAg0v9i%2FoKTIktrf3XcRaB%2FGfBC8HIUhXAJCzcdFGlTcmjUFg3XZal%2F6VIewNZ%2F1kMMitntQGOqUB%2FP1QjmlNzX8jMtPvVDIXoi97Vbl7XFe0QKy4buAv4RStiwae4RZ%2BggopLw%2BsSzkA%2Ft3kSUlzx4EPzwn1wgHo5VCajv3bNuAOrCWh2dL%2BGt160mNSGGmVYDtQ0jAvnKSGPHgA2HvzTbyfoKvh6VfO%2FTSl9Q9YzVhKGhzOEyk6ychDfzJHBur4jr42DQ48yAQZvMEgUVEcJwBxUBIfC9jcsRqRncat&X-Amz-Signature=16364f2ec24dd7cc848407d50cd269d841309daee4ff08da9c60047586e47ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
