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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ETHAQZ%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCTjiP%2FUppMP1VjBLaWFu3lSWKNM7152fxUrfMirNuzEQIhAJqEMVQ03lk42bV31kP12ZnduMOuCA7vQZGtOjm7e9DcKv8DCDMQABoMNjM3NDIzMTgzODA1IgxydedeqsyiJKaPM6gq3AOA8egVi3wJdeSjWSn4DAq%2FLxyUva6bRuKYQgYD7TnT45rpP7He5CkwW8m2ji0nr2iuLO5nj0Qd3FxhQZC52OWE95QqTeGph8AZpWTq7mMbroIIRK6fRRIJFxGyeDuySbPk8yTcc%2Bmlg7MfrQWMByL%2F7UTjUozyjvqzSMGfNplLa8KoMoHpV%2FIuzu0xLEEVlMN6Lpnn%2FHRryrW5rree%2FBotmBY8h9cc9Oeisms%2BlEu4uvZMilie1JoQSNfihYPmzSvWHTCUdvVht0QYNg0qeNmroFdsP6dafnxc860M8fvjwQDshASAbUCvVs8xt2PuWxeGVwRFIUyWfrEGj8yeDGkCDOmMKFv5BD%2FZNvUjgwJPhYuK9iIjy5wxMk88oVIgB8SGPLCK1a2QkivbdlWmNqq2NL48RyOfkHqIZ0eC5qJ%2BAespeE9PWhiBUV3iAcH%2FoLMuCrXTkOLv6s39wehb0%2FA2s156xstMWZR1Jh3hh%2BlZAD%2BpHa1IOEBhXmsOOeba6qtDlh8I7bfqwT8P5qcvw5iWakiG0RsFsgrzHZUtlA0UJoiLxDmUVGL%2F44XJcxI8Z0CuTAdmCTkwPI6AWFoc3EQ%2F2wtjIf%2BODyqnjur6FfQxhAUjI5EsbSUar7QZLzCy1M%2FTBjqkAerm2FoZ9IyWOFdCJPGIkRNue7d%2BftVTpJri6qdt4ki9bXN1XULDIBCKRKsAtSBcQ6%2BIujpFZOPk4ZlV4QYUAv0B%2FwUVaVpE4Pp2Xtwtj2u3Y%2F9Ye2IkFf5l6KkC7Wua9boVcQwEqFg2WnLSaEH0sem9Qp2qCibpw0shrw1Uw2Bm3yfSblT86QJ9NrR6AwkeXcDXHm3M59A3aCktyiFTYnIjcr%2BO&X-Amz-Signature=651fcc3f49ddca1dc0e4f8003e6d5b98ec3e810371304d494fac0a16c96f638e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WYHO33G%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIFZ6yk0qXdksFtB04Urc1md04nWgFPYV68TnK7Kmx5vhAiEAtOFsQatOrk3s2VtH7jrt9InPkXS63UAj74AmfIpLUuIq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDL1lcckr1T08%2FgJd9SrcA5ryCOzSnuHNdIVav86WMl24eUZYxwy6EjWAuIQZEAlURhqjbNivD9UFWQ7lmiGuKVNXfhxjjSNE0bT%2FZWHTzZhyNxNikTI57cXggkWs01%2BhB9b5EpT60T9F38MIIR77GO4pF6j40STyneJSm57KkUxn24yGPMzzsLTbcJqT4p8UPWLOxLef2%2FSYminHOeuIwpkYhbizG40kiqx1%2FG%2BmcFfLNsVmkpHXwdJHxLNyuLCK71jMmMSCZsYMxDJS4wGRcpTJqI%2B0z0FXBNxt7dvTssBeu8w6qVmJgnGPSounHU3bwybFdT3dFKHgtqryTWlbLdM2g8lv3tN8l8XQWHg1fIbQ8VSXNwhE5aNkK0A%2BBAUG43DzJ4TCjcELzijH%2B650tZsIQAhr4KjUXz6FHdG4gTV5ltIxdN0Xk50H05OxUula7xvQGmr%2Ftdl7lDBMOm16NZ2u3dCT%2BKBndZJqMYZqw1IqH8fm3UrAJingcLpnJkDEhz6lCgzg7wWZ3X32dyi1joiXMYkWhySvb06A%2FGzih6OHPzU%2BuzK61GJmq1YqVa8VN5Qf3GRf91qJn2WOWhOfAFpKtjhHCXjjeKMZM0e5SI2cl%2FWUn9xkXM2ekDtJg7%2FnqUUo%2BOWyPM0Uf3c0MKjUz9MGOqUBF9mabsbB%2Bv6treqiJtiYFiiDxoiMIEweLywj4yoMF%2BRXEd5rlj55ZHBSlTkBCJ9uzs%2BlUjMyh05%2FLmZNE625o9q%2FwoxbmckVBRw7%2F3l0K5ywo27f1i1enqp1TWLIJ5Epn0M1zcBPhOPpMuWT6StpQ9kizqTG%2BwAETtsVLKQ7cA1jQKbL%2FrWZoWR9MDjVf0dvC%2F93jMci7ttm1yK2efZBdfX05DpC&X-Amz-Signature=61f0d0495c3ed68ceeda1f33110837a305cbd06e1480cb50781bd1704884f4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
