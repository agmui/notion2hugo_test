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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WU3KSVQA%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBjqD9%2BGLnXI0mZRg%2FG7wmz2gXvRIbHv%2B5z3XUEnqvNKAiEAgj4N6mdRrqrRIzZJGHJR%2F7sYJsTKId78aMq3FCkZYocq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKoRPTfthFgEOf17fCrcA900uOTMrOH0dtQ225xlKdl9ArOUGfNbAy%2Bnf%2BzRrHM%2Bh3fmV9kMIAkow6TWNce0wpXTRTzuqnO9PuuYPmrmw9kqOqtlv1PvkD8tcHZKlLgts8zIn23ssGh7U7zU8JuU5jzYkGhk4a1oGt4gRzDOtQqQZaMmKkrJ%2FseiekoDb1PLlGg2ScTxy2BNS0YNzl3VBdl8RXNd0PtML6k752PWyvq58g%2Fp5y5vVwfjB6ZmjNusrTaGzhmqIPW4tQIwjn5yUIPPynuT0g6jgBIM9IPp9gvNlU8yKDp7eYHI9zN0Yvm86ewC9sps5oTIDN8rbIzE9j0cW%2B4wJk%2BfW5clv43u91JUw4Mlb8hK966O8EtlTZT8ZQC81MdfTS%2B7K8762ag0KAidAKUUcnXWEXDWhDHXHX%2BrYn%2FzHdBgfdL0D8YG7HfbO8WXzkrczhDoyU%2B7sVFYPa%2BBioe6u0e2%2FfG%2B0QAqT%2BVUjYNx0MLlJRaPJSEGZQPgC4Gify8F5nM6yP8u3nYdV%2FbGG4VDYBaqNseTgiT2LH7RTMgecWAr3THZOkB%2FOwlwzJNB1fJGBHn4pLPkn6%2Fno27pSQN%2BYkGAlFDHsYrw6T32cV1%2BFaz7BxsRZCHuJVENdR5Cdsxql3hScQuYMISxickGOqUB4sXFSWfeWsbqoBbDDTNEfb72Uf2Ram%2FIWonhgeNrQSRl8q9198kUGW4GEJBh0sIIM8iWGCs76EKuF2mHasAyRzx%2BIVz64vpRP26nOm9hcMFPxj0%2BuQ54ocyxicPiGHeYtx87IbvGJXhuzuePQt4KZJ0ynSCQeKlrTpKE2xK6aCHws8Zf9BUz6%2Ba02vwKdyon8QZ9e4vXfVSTCK7u2xnRsBerZTmj&X-Amz-Signature=d1a07579de784efac2bfc0ed061b2337c8ec05250afb19568365820f1f3c2530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655IPF3TA%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIDGOsVqIAzJ%2BtvNH6j6aDwvUdSOuaTZQBwqPpezknMeMAiEAsO%2BgjWvLpIT9ePPxxtMEpGybXwBF81f7l4twj9e5%2BAsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGdAC4KH5nn%2BGRcC5ircA1t0bKdP3k88QS5f898JYfXYS%2F2VBiUVM9q91NfveCqlQ8kUpN2%2BAUfToVJom4G59TChBfnK8aEPijUYYwtuyh6XXB2hVlA8n2P6Q%2BuxyHLa9HaJ27d5j7WR90B%2Fy5wS3K7VMo2r1Pr5L1Wz3KcrMXhFGt6JYOgyrrnoaaduxW%2FPmuTf0TXLys1RA%2BXlr%2B2e%2BZiVP%2BrrRlELr0Wd0DKRKVZZNEjIrh%2Bk5Mj1L7oVg3p6F14FCGUqrGgDmhay5MSkwSZqsTAbCRauC4DrMm5zgI2ScJlS3MLZJjryQFdlWOFrQ%2FKIp7FSERpMP%2BfFx%2ByDg4n7r5lZKNtWK%2BRdtBzUOhXVjUipcu2cCkdW3HWKolt8oXLdAV%2F42TLhzQ0uLQYvHkvdAA7p77JFRDFNQj0wLID8%2Fp%2Bz5QH%2BZkfIvMp5Q0Orfx%2FOtH7JvyFlEm8a4EC2k9tUP7QhKp7fsJ40snS8GGQSkTlCvYXw2M6uuFd1O96aWNP8zT7V82v6%2F6W%2BWfFXzmWmA6sc0Vk31Beyv6%2BOZNjuJAzdBFJvlEUjntZVtwd5UYnsGZ2DvwyVXh5696QtE23%2BMB1IS%2Fq%2Bha0hT5kjpbyzayuHxiCuVSZ59e75eYgrWJSc56TRmSuh%2FBNjMIKxickGOqUBPXLewxeFBTlchsqZfpIOJ2xu8%2BZxtoA7JJHjnru1YzGaRaVTunfWSzcWfMv4OcHIGHxz4gAup8DuGLiYKvs%2F%2B4t8wJdO%2Fr6HwmQ6DDbEG84KqAnm%2BsntYH0zohsJsf5IEbPvQ1lA5hSjQLtRwkfhvz23D632YRLMc52KqLNpx8sDRxx7o0E6%2BUR5YVhT3qitgUWtnidFbrwA01VaLxfniZGE7g36&X-Amz-Signature=db8b194b2f3ea5edc013a2823019d1b41e7e36cfff0d60757b01b663b40807f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
