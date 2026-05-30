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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKEZMHYK%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCJUL7iKraPDR1Q7PgVEs%2FOfdX8tbkoivmEM9o2X%2Bs5sQIhAOl%2BA9VrlZ4IuXZZX%2BpgcEzYjGyDgYSp%2B04tl82MmsYXKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAj5GhEbEEd0r55f8q3APU01fX85LUzfkJbBRXXyTKU7ZMi8bJu0Un3lIHsglkmyKLkE9gUgG2iU1pjTyKatGZlVyqwW3PVP%2F5zpUfbf0%2FhzzfKNrqXicCBIsPxbMQKKGCC8J2w%2B%2BNyIPTUmpH6LEzUGV4FX4v7fIfnofiM3dL%2FpfVDjc46jXCadeBZRwtQU8PRSHnupvia9nlv6HdImzW56lbg6iNi1VMBqfCFD2Fw%2F0%2F69Jx5gZ6CpSf%2FeM5jHCP9qruZUXdB0nZpDeu9gYbU4FUL9PfVIW82%2BrK1eQCCI6a3NhNk0PZHCVB7gy6ysHgZ0IGDUjBgFRdcjozmHhqR9P1DfPFRz7LIpY1Pay2hFPpHJZZ4zUY%2B7bBcq%2B57kk%2FfL6TQxX82xIgr84aFBg6PpS4mmS8ZEcb9lpkBD1zk8EPfVod2yhr9rfXEtyHzyPr1%2FBRp%2Bnc0oDNILrsuBuvTFRBefOH2NNoJTk8yg7%2BXCZ8URaTAml%2BTy%2FkPj3ZZFLdQ9lzZz7kDv%2BLn0OfBORv%2BLiM6ghQ1SYkTkRehKnpzl1e8kUFtjDqv8QjmVB4tqxB49OHtMAoT%2Fd4Qv%2FNNpS1BaCIJhA09I%2FCIblLEtM%2B51fg4gh9zPMTFgEctJzDVoHtoJieH1uO6v4ePjD%2FpunQBjqkARhbej6dw%2BA37bM4bkIik3k4QzFfwmmkxRJhzG5O17Bg7S84HbYPQ%2BCf6WmPqpgdVfCbBxAWQNfGs4KbRjNW%2FlXj1S%2FLmsdtL2RSLJP%2FDEulntRIaTSvRygG7umTCEbfTruJlN7h03du%2FY%2BtsCXnCsffRqwzljHyVVUPr1cd16P%2B5IKjn00y8%2B8xKsrKlJ2jUpKtDN4HFrvne74DwaFw5CSfgdsX&X-Amz-Signature=ee0b186420247ca548c23ad7c00c360f7888635b57f0d458f32179b1b6c5b723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HUCX6M5%2F20260530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260530T032806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIAC%2FEdLfKT8JIRSh0yijVPUMrqvrZUdUT2GabqzhueNfAiEAgPn58pn%2FLTbTPLn4E5F3S25aBY7UQcnSgQ7t0O4h1MgqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6sq4%2BwIT3r3DOE6SrcAzEpS4kHS0ext%2BmN%2FHrsQiWXV%2FIlEwmpjfmJ5oKNRqy7uCOywW%2BXG0fTICANXR1M9Q4PmwPnR4gTIIDi0b6NxWT4WunX5fw7NUL9iBZQcAN5aLjzT6au5dm436xA%2BfclBZwc6gXAwWsoO3vNS4Qjsz8%2FRV9idyPgmssRrLOP97aeCPrhHimsx5v48UzbNkJ%2FzpTeVvn%2Fy%2Bd1Kiu8Kg18Et8kCHU0k6DloDtApXmoSYBQTx%2FoiLnnE0Yr%2FuUSVuwJv6DPSYk%2Fz1r02WBTeDLvIGV6pYgQaRFGIUZpluPSIfpUEmEUhhpTdxrKr1EmfJGS0FChCn63P8gNOGFMctu87F4L00%2FSfgnH2zdn%2FeNzqT49tT%2BYdNLCCBqYCxxv9j%2FR2YPF9UQmHa0hxQQU4yjB0%2Bc7JiBqEu7a%2B7tzg7Gyax38TPVXyt1hhzfYaEKhUX%2BXxNBlFL34ykbAk7073TpTn0O9cRWrrG1rhyEKWpYLxdNupkiovBOnBwYeVraboVSY3f6%2Bc9W7fmDMSWYGAhCpDrLnU7KPo6XOiUBEGGUBGFgoddhwOuLwHrCgPis8cD8tlBzlKedJz5B2dmEkp9O5VTeo1pTq3z4hgZYypCntylUDaubCUQ56bJQ6t0%2FnMMil6dAGOqUBWirNU3dmv9ZLQ2PaWpYqw0e7QG43xDyvR%2FeCFRBw7iPyjQ3kkpKpETzg106q%2BNSY6ne5jhS%2BvqYPaNyz8bbhPsLDyoxd%2B4Zsx86gI0Ys73kVnLNyeAE%2BhWYSmlr0gaxoiJw0mpj1zEgy3Zfftewjo4gOsrhsvXQGH5Bkg6%2Bf%2FnR1IRQewV40qpbd2J75t85z%2BmeDj2JD%2BGQ0SjXuY1KYDeKdNgqG&X-Amz-Signature=063a930dea5d3aab3c22fc13abb36593aca65e6e62e2d5f7b16b1b21364d5855&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
