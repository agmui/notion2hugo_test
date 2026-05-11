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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJM5ZKG%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDuJ5zildHRoHGJdxRl4FtfzT2lcPl%2BBh6PalO9VRUsxgIhAL3uYthIXcWPoQyJ5VDebcTTyoRkuOINcs5nW4yVLx3%2FKv8DCAwQABoMNjM3NDIzMTgzODA1IgwvdOT7EK4JccAx7Qsq3ANaeTGlCG5eQW6TjtqqW0PlcpJflY%2FCRkg%2FdiZntHkfS7pty3RyOnKm5bOVmSwwrbkjNUO%2Bj%2FSVaVUAJiov3qd7AvNJRMO4ZPO1CB6BnbJA9jO6rKJLSE5kYAHn69eIZaBIGJtGetSimhEiSTzGrCHvJ0NfiHczI6qTwLLAm7woS%2FMI6MPx%2FOn6yOYNpzynjDrw8OoCNAwTKf1XVoBWn3TRRn2j0qhxDA7oFXNzi3eN%2BjUBxbjiJgKcUSYCPRDFEDCY0yIEsfgWLn54DpS7H21b0YCmCFO44WFL3MslOQTcOTdu7QNgWzUmtL0Pqrzq5bS67GKFFRtTlkWqDVnRCtlsNJg%2B1iDv8JThsMzgDHfQd0L8itnReCRAwSyEyGFOWF6OaF%2FltJg1PFtcoCLgjDSu7iRGTNDWufGtOJiI6tZ%2Be82Q6Yk5kgRyLHAJICmKcxYvvw6qopaREPFEQAbpBNAaGJzVmgQdVoF692OtZWUu2rT6Kz1IKr2zCU3p37oA5i9OK8btn9RXtXoG9NTsdgXV2T0MK5hpXopOTRI6%2Fa3g%2FgSAcZugWQCz%2BjXyt4y5qXIV3HIM42fo1z9RLkmFLhItTFkyaUvVO%2FGyV15K0IhHYJzT9rZ1w1WuslIXwDCZlIXQBjqkAZPLx%2BwvdQWC6sE6cOfjaNlFArcG5pCoZXcejmoOieRwZvYsUcBfLPlfg9bC2K0GEWpMQnjD7eX3u79%2Bvi%2BaV%2FSqPeCYZcCCYp1bQTXB%2F7kEWvcr1dw06BghK5S4LowR2gwyjgBjF2cEVMTG%2BMbY2rgaGbYKj%2BRuy34%2FVh%2BE1gHmoL%2BBBPZA1P0Ut%2Flpr0uyNdX5T%2B8ttMUHYQRHhKd5Tw%2B%2FFmdz&X-Amz-Signature=bc9fc9963cfae0cfcf0b6974f1fca24ad2c058a9a3d0a187c90b8f60f29ec85e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYTUFMY3%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCp5I99FyiKCXCPqf11%2FW2voasPFKjOQuabrSQBa1qG0AIgDrJoxrV6K%2FMvtOBjIk4S7KX0IFYSMTJVhvt8erHuqWkq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDPnZQQXB18TtsRsLnCrcA9dN9a3ldWPrCDN14Q5IVoTN2h594rF%2Fk2gg0I2aHl6PRm%2BeEADqxTUGFxkN4YpoxdL43utmuXLuoTc7ImRMqsRih9Q60GR1%2FBRJVl4RQXiEMKw32kn7WMg%2FsJr8e%2FtPaOazy%2BIp5q4aiW1bJ8TSNQtSePckCvpNtj3Ony1WWB1bKcxXpA6pAE7n9oRnggVF%2FTH8gUEXg6zYlnfFRvr6fBbaZlRRDgX9%2BWxIGIvio4yEHB7FFY%2FQaJQex047YKTsfkHPAOq%2Bmomjsztnm3wemXFa%2BAHzbYuzf%2Fx90tCJBTdOkdvj7Wt%2FKjhdkBqy3auoHUEeGYAtknY6sg7geCqxH3uceh1vrYA6i5aAE%2BQ4JO8s4zJeApmka7zQBinZgS4c0d0Br4DAvGcufMm4KwH0ILGfSg1ByEFG3pjM45XEglkxevx2qjwAcrQ%2FrAd1Oc3hLHuHChii%2Frl9fxpUDAY6vRu44GiYeN3UHqqS95Lf0Q0gRMJa6W1MF6X%2FB%2FZdq8W1o%2B1EORXftPq0yfXnSbpWWWR918DA6dbXIbymXgENnhgzjp55rmSjdiWFtOMa0pfDdHx00qBsMpNZojqGRgaUfiOIDwqN1hG24I%2Ba%2BVVtHFnv12UVMO6WESsqZFx1MPyDhdAGOqUBbBB%2FS6eQzmg1xuHP%2F1UU%2FCaGhTXMmQ8lkMYJL42ftUEkfejEJD1RT9epEHFxBfdOHD4AX9aW7BfLSsaOA2t%2Bym1qWQUu8FAlhBqUPXT2sv4BmeBpiYMSuWQu6ZxZmNTqLERIz4Xx2x2htQCVLsqbMbWdmtGbadrdkE6%2B7Ci9C4AxpTOEWZWozzjogIWf%2BPvtOJuvRrLP98EQAnl7L9%2BGpV3AuMu8&X-Amz-Signature=842153d8f03ef18972f95594b08fcbf67541b94f409655f3b6d2d8dcc7bd9153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
