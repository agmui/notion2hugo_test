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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZXUSFM4%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp%2FW8itF%2BFqSEpGA%2Fbl7u67%2Bmv%2FqHlZA1Cpt4N3mjUegIhALRt4BjnLdeZPy4CNgbmSJdFBNdF4qUMVf6pgYh%2BNYEOKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BSX8oOOg8cTTTvLIq3ANitOmSFN5PA3LxdAZUxxIR6SITcw2%2BFL657zBO6jcyFU3y9sJr8V6sujT%2Bmzq7OFTZSbcpXg6w8eokptenoUol3OykXsowW%2F6uoF8%2FUvn6LgTnqPzFzQutiAB%2FpzOpWaa425M48nV20rGDvEcE7EQNHPtYJ0ipFcMSwNC4NsYdTV5wiqq4dKbmOLj%2FVPGqFT2yaiHdqC7ZsiGeYJff4Az51DxZU4JrHN4GYoKhCM9oVWrWm3CsuQptg5tj3NSX6Le2ut8fwyf9uSxpINOstU1JGljI1q9jaRqe%2BF5ydW1fWqc1lbXIdm5u%2Flc%2BUaQPiJ47%2BgaaS%2Blphn9L4j%2BcIJnNRtHqYjFOYM39oTU%2FFtH5X8ljXF30sTR6IK0bllYoO3%2Fu09Ut%2FvMF3qQYJS2I6FdrfcU61lfCf9YrztJN99A4qfEavYc%2BoQWk63Hi0l4UNkPSOY93lyO5NXtmBI%2FkTiGgs%2Bj3THHvZ%2FHI596xuqKjYJ4ANEAryXTG0MtI7nzTtVuSsK3XCWKlJh01pmX27Z7954mD4YuB4Use9RNJpW9PemEoCHLcS3RiqFOc9%2Bs5LzwtzOHAItVmLXrxnU0RJty4w%2FA6rddG2Jz%2FSOx1Vv5TG%2Bk2GP%2B4S8ECtImxVDDq0JPRBjqkAZu8kiRm%2BiUw5XP%2Fa87UUHFA0vthey7fHEHweZXspRujx%2FypzfYT%2FY0uxKxsrRhGo7OHv3vSc%2B0bXOWzzq%2FP0ZA0FEQFybpQ7ec%2FF2htshWKB44uOo3JkB0wzuBK2Ji9uWwIwcHHRo%2Bn413Ul2%2BlPY5IR8QCmS5qwqxdQDCR%2Bt0FWnlKyPPVO%2FjXEE7YLP1vq54YrD4FaY1NBtgkifeii4pWO9B4&X-Amz-Signature=7203ce418278ff6e3685741bb017095244a62cde73ee98ffcc25aadaec82b3f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HZQ7QGU%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlAWAoRj63rvQvZB6rvY6ZUAbfffhV6M6aSD%2BeqOJwKAiAY1COWfFf5G8uBPZTZJE2hfnPQlv7o66Z7IUSOnCp1uCqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh35zSPIFKjuAd5qKKtwDydA69YvqoH5cqCUUQfcxBLKL8A4XTuJqKiC8CFAU%2BCUHQtvvZVM4Y2WuF6vckA3BTBGyP5E3SOB80ArTfTqBg94JQrXGrRCX20I2eqrrVUnVfnKdYxdjZWqkPJIWTHo4HOIin0eH7nkFpx8vl5Qa2PIYpJBElk1zZ2KA%2FaEepGFB65FjxTre7XWTy46%2FhA47%2BAxFvMzapTtWdItoKlnAVCfCezDPOTbmBADE6zQFafua%2B66jgHcu85ru2m%2FimBsnsnaFDjzTLIl0xX6iJ6H%2B%2B%2FBKTY0bH8nhmLZuOknElDdUAQSXUEYDuZa%2Ft5SIknkG1UKM%2FFpb2amjNnJO20Nas1EexqHoXRVxY2cbvwFEvkKQzoJmX9vd1TwMelOQYBjXI9NQZnCkhzQEO0HkX6KGJQWv%2BHrHRtZPoiTHuD8kqOAh6kiXY6YFe4kDLybu6eM5NKvuNPOWUNPPyqwz9E%2BWgeAZnEyaLNUGQUYRSp%2FDHx17NUjVSmfvssSnzvHnbH3vaf2o3e0wmlSnI9fZ1pWksPYzW7UeUUFYzHsJOyxLE1m3ISX27k7UZx17KefupbTAAN7V1ybsCGQtfccl36VNUmzUgsn8pQmpg5P%2BygOjvjp5COUrqQPJDf3WETYw89GT0QY6pgHY1BtA85Zc6mfMjNuZ1x1KU2R2FGp7DhRgp1GE5RCGvPIlUd50xFpSiOQfG74D3OUs0x%2Bz9BwUWm2tAbpr8BUfcgmZAbH73u9MZgiwcjgiq8Vf8OPmA7lj6GJwEIhP6%2FHvVf0cDJNO43nxfoWYlaCAVOwfAVQZr7hf4sgwnJhdGpIhhbRQjAOKKvu8SWgPPCXRauoIGpc8hHHBNYJACQ3ZPdVR7hBs&X-Amz-Signature=23fa1a6e99e86cf558c4bcdff2b3d259d4da40aa89abec178e448d9b9344d25c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
