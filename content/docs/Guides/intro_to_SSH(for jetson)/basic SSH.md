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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NFZS5TO%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz52z7yzraya9p%2FhWRog9fOOx2%2B9oqsuuURSREEfwt8QIhAOWe3saoKc%2Fug0n7rdQbL3JXSN7ATybg4%2FdgAXpE9hJxKv8DCFMQABoMNjM3NDIzMTgzODA1Igz6ivSrZXHU8l1vyJ0q3AMnlUE0xyykzoZQ5kVslbnnyKoNKkY2zmG4qeXejd4E7Wql%2FzwXuyKPDpIGvCYO%2Bo48y2OXjVQSu9jhKe5FRyWafHhbLV7kX26uSnM0taGgEo3dUtsLSwhNZr%2BHacOI2reTGsNhE13epHOCF3pikiXBZg6IffA%2FSyIufsJNTs69BwvcacVmCsooUx8znEvJIsxj6rKZmsz5Q0jNSVmBfB7VxOl3FjvvjALHlf1YkOT1kcthD1zQKwWUSkMnsQFZq8lJ0ESD53DTMzAz0yGrjdN5fQfqAqNpQUyUOcNbHDa6RvNFI2xTTRonXsNdVMkeueTWSrHHdXTgEAvWecUyx5PmeR%2Fwe75jlV1DF6spA4ogVBkyc2CesZWnPLMCP9t4RAyfvEWa7RDNiKl40%2Bk7jKAo4s2dLoQWqiXXwP4NmiTIQayDqNTL1RNZhz%2BnAhctIUFpfzTcKhzYcArWKCzIh0891dJm45vg141LV%2B8ck41%2BZ%2F4bWL40uyYVo1IbFqVuPfWzWNinnQnLSV%2Bob%2FtaslpGi6t1%2F76Dazd3mPVzN92keiBlnnSAzdnLEKWVCcH3cKZc2qZ7YzFtq7Dv3RausRCZdPX5BPDLNj%2FG%2FzyI%2BJZOy8F%2F8Jbr6DSzWeDjGTD%2FiaDIBjqkAfjOQZbvpL7TALo0KklLRj0CoqwcMJh2k37TUgD9O0xYTbqcjC7h2WQYId3biia3jG6lJiqPJ9rtTsfZiDCYuPzIH0N9Qyc61UOP6ihio3vXRJ6yCIL%2Bi995O7rgm40%2Ber7LRqjD9TBeBsVkqWMjt%2FejXtnWUwLUMhJkf27nXhfAZWHIqJP1xtmfePxmFwj7mp66%2Fie5LZNGRJ43y0xAsv9e2VTV&X-Amz-Signature=8804602526fa6a0c67b4535fb58ea0c48f1149146f3da9698856be13b5949c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULOZHJFG%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMAz0KGBnNRlDpWq9LSd0tSAVrZiEmlYdxYd4xlZHM0QIga2ePfSl7f7rsdVFv0%2F%2Bg939gwdbVPBCycTBU8RYTfUYq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDKiLGz8ryDl9J2lqRCrcA2f83gC6PxguVVM5DSA6D%2B7ukBkMpXM3XMrDQoQICXK3YUfzwTkj8ziel16mEKDpBg5r39Mja2wsDo7Gl6NwDhzfyZj5gly5sROH6f79VBSjYoHNwfqjuE6IxVQ10uvno0QrFxDftQb8XoIUrPNFPaO4l2%2FKiivJh8JElQMqmPpM7YftdnB3tnqzhw1ySnOXG8TCursGJA2v1AGJzVrPKwtCKPW3EwrcyP8OqqvYl0BmoAitTTDklWR%2Fo6kGi81Ba6vb9PTv0PClwcubWIiDFW674x1vVbSJBf4UEqDyOb8C4Gr6BnbMY387%2FS5CEmbIBRmRQOLmkiDuyUinzJeOxEFpnGmgAoRFbLrsGeeDjtkpFiE0ZvbDbEW2VzU5a589lWESmx3qFTxl9U9tXogDV5cq9XnlIznjxLTRIUJ50W6V55ycx5KEQI%2BnrmdOzQruCUkvgvyWc2%2FWnYQLtj1jGG6H2m6tUAz2pLvu%2F%2BL2LzUzUVh08gyMLlJOivcD313ttbpKzldoS%2BWcrX5%2FMIZ1wTNJl76ieVcyQhvAnBnygAcJPrqY4WJVYNHhihtUYBBAq1qf5KEOqQlxs7%2FXsA9bU9XGkV%2BkVx36pPTk15rvBWaqTPPbuyl1i1TnfErCMNWJoMgGOqUB%2BEPSis1tG6pILp9QrZ6LHvJ7dYWMZ1t%2F8Or83wPHfVU5BDeb9MRDq7Zeo0F9jNeqCLCmDzYicGSZdAJF4KjcqquV5EVVu6duMKfbknmva7yaJuiXF5b0jRTdDGImDefyZaYkvc9534Eg6n%2BgewBCjxPyAypWMVgo7NHR76asHEYq8ds5O36u8w2lxMlp3NGoy6t0bFYHqWbTNxKjBjO6BFAmBd%2Bc&X-Amz-Signature=ae8eedfbfd1c5efc2354753d081d03f66f9db9c7bc410d0baecba1e4a9777b47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
