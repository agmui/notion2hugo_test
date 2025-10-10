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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6FYKWU%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCAk8NE%2BQhf09EjY29pFj0j23frU%2Bv9erGndsR393g7LAIhAIl3dN%2F7T%2FTXPQua%2BflCHGOETIrskxxI%2Fv5RKXMWe4ziKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwVMS1lSXodLVlUhtkq3APApF532owspjcdAnuiQGpGZ6pU%2FLLh38%2FuzlDiSUqCrgM%2FxBzJfrKsV6TgVpA2%2BujlUpeHRJTp4r2WS5jm23kFggoFoNnkJT9wXJvawwdMbxj8%2BKhy0a4fZiqLnoDxp29BV1V%2Btlnt%2FO4KxwHbY%2BrJRvRn8SL4XNEEJQVaUuQg8oWpfSsw3cDxyVv8Y2Cj1NfQ%2FlEy0zNVXMAM%2F0YKn5lx0pZbb5auRrIZ6hqzWI1bBI34sCdzXIuU3Kuirck9vXY2JJ4cqRv9zjznAjbqHrVIiEkrGz1v28c%2BKfb66p8DCC%2FFv3jbL1O%2F9SaByPyDU7oqKsdGx0PZH%2BiPE%2F%2F7xK7Sokd7s0wRjpDurXJJv62bY48xvAU3uTVg%2FOhDJ4LqWT2exCHGJSYa2nZFHeM4bKbUOqp6ZRtrD%2FbUOupaKAKhdpiSkNq1gsL85Z65xDt78JtHA2UwA02WtQyMwV%2BoC9oyq4zTAzVGoxiPw8yliWrrYH2rcTY1vRVBlpL6ZETj2SYJfQpQ1XTFxvm3gxJPNhnAKYAY94I28OpVUHK5LkKqCs%2FxqTCwFOFunf4XbQCBkH7iIV8WU0GAxpTC6TTzikY2YT5iAiFWhJTa57jt95Hm1mbuEJ5dpfKSE13GiDDJqKHHBjqkAUZgNnf%2BPAEbdWCyB%2B83nju0errwX2WdQD%2BKo5zkTcbppDt9gopLu1jVQbBhkQfHEXAGYbmalL3G8GtpPsOz%2FvemsqBtGr26WV5zi%2F%2BDddz0uoV7sLPIERucL4TFYhMJgDGLynzU235kzZpmChdn2QMOA%2F9moilZjpq1K%2FposKQDyHkeNSFSuaDdULgq6HM8Bfx2c5adrn%2Fy9cCiR3IgFur7CLGm&X-Amz-Signature=d27b10a17a5258b4ef814635bca6c3bdbbcefd1b425a2b6af6d57cd5d2614f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WAR73RL%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCICCcOLse%2BxV7xOjGLfDhVK%2FlV9RDZlbtjH6P2CIEXtodAiAB6jn4EuwYQAMdMwG%2FpLAR%2FZX3tUAyBN7k5%2BU6t2vMICqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQALAfJTgPcwAVk51KtwDMA4jKAC%2BQ7XhGELje5%2FOvmYC5PHLtd7VFo9MZdfu2zSS5J4Oc3hLA%2FmKPrRSxfupLG6AstlPSgJdg6d%2B1v%2BrrzJoyaEmWyirpc3QJzA7jUTRSiqocCNhLNABjPPhfN2T2mMK7U8Oe52C0uCZzHYnEyseeTWF0FKh30P%2FgOCzQWhcfhwH3Xhg9T%2B4AS8nKZJ24C8LtfJGpryBJzgG5XC9yE32m88hoz8%2F0Yk7%2Bw%2FEuvnZKa9LZRgSl4ou136nrfcZ5yb2%2FpxGdJz2VZAbpPnmOULmSvRDVhRUeOHPiixd51IMZ8xUvwe4ena%2FHQpatT4jQIBRmW2ngtXOonPl1EqpL6eHsbIN0Pa8ja5UaIzDJDzPQRXRpFaN5fPDjAFcuMQH97Ck75AcjQCpvjTpqjPWATErrYI3hlkvJ6x0PN3CQ392oE6yFeY5AMmolLj%2FmLr1RU5P%2B6I%2BkZg%2BvDOPdPUz0MvoNxXI%2Bm%2BL0weNigyN2WAdgdXfgdTJKMvxSPlegmrc4iZ%2FpNeH6I827aqumYiFeVN2srhbuNeprXpZ68AcbcUR74OwYA5wOAph3CJkx7ixTjLIjIf6C4RaUdDfr7ZpD5GMM404qUjm3nMCF0BEtFkcUL%2BX6CsHxBatfUgw3aihxwY6pgFoI%2BpoA1jVSdIKmV%2Fw1FO%2Bojlwu%2FsTDk%2FHEnA8buvMjGTDdPt5uBrJB%2BhPwl9SOabFtLZ99xFyoOQmnhhsCsyNcJKuMP8TXv6Z653Rq25KlAjfZAEJFMAthzZbRdAFvt49SjLER81hGMqNtiFC2ddlgNFBVTKAtayGEguTAbA7dUw7HIlJ4eWtudk1Rg2xWLlwUsHqpYFBHzFhGIwtIwzQFSzCBrrv&X-Amz-Signature=8d5187bb0bbbbc15b3a14ffb57372f3864ff3c37fa2113ffeefc3f5cf6735a93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
