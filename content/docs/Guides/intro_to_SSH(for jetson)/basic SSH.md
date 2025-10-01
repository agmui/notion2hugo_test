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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVFD5Q2D%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIEqZmzBo4d4cGk01zEU09Ihj9pEXI1PGhFfeYhfz8pcfAiEAp0OJ8wfTTKhjj6pu0%2FdxW%2FLkirERnNRLbqZTPx1HQ4kqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCTwSMqfXHUGjNahSrcAxQDeRbXaWpKxhzLqJNi0I6fkKK3Nu5ByI65%2F4GReZFS%2Fs7vEh06JqYbagTX%2BT6U2PCuFkCWVNjJiS1Bt0%2BwfSOg%2BhKhb7PQt2k032VwKLfuDUEqbNOy3%2BV4j6LdTBHUTkcCQaVIiguCkKXLF79abIHycmO%2BphgnjW6qMGBX2XCwsZULSpCQC70hQ%2FmEgyfW6JCvz7NsLgqSvXS5UC8IMUlrSa5plNbVst0OtEaz%2FLjm8bi92jBs%2FT1TLgGwMmWRTtdHThpaACYmAjEeGnxA5SvjjYyDfil9RxSbSNn1immZiFDk4KnUYiXjFJYyT5Qq5cgSZt42gDFs2jhPdz5TvGnMOYY8jf%2BOV20IHB0KkiliDri48WR9TEBU7TcZu4lVqrl%2BIearozhyIYQDU8RaE2bZXiG9JZpmOV%2BMjltGVxLbHn3PFC7Nfl%2B4MO4iqjBHpmqap4zRQGJX%2FSi58lc1yL3i4HQ2%2FHOsnHn6Z2YIjoRFHYnWUpZwjsrFflAU%2B8zWkiX1FlI%2BLqhSMfQtX6RPtD%2BjCoxpm98bmfvWHea%2BU%2B%2FPD6Zve3NHmKs%2FOUGLnRvlDtm1s1ut2wRHxeEOfTAkFvfWAmdR3jrM2dYi7q2jXq2mhNhzCvER165m0YFJMIyJ8sYGOqUBkBJ5Yu%2BBODJhaZ%2Bn6lIEYxGU9RBUodp2ZMyIDz5%2FtOyOXGPHlCaWCndiFK1vL4uvD47xFNHcA%2Bbmidek%2F0FJWP00ohYrNY3Ipisd2ih712tUs%2FMTH3C9z4In%2Fj448Xx%2FCR82vmezVzPBgir%2BI1ZSOgyhzN%2F7WB7eNOsy9SVHtNLeMt9cbIUVWUywnd76XtFFAo9EOYIIDInsVynmsS6uK%2BDt8qno&X-Amz-Signature=355dd9e1d65c0d12f717a2741937e2eb09ce2fd1d4ceb222a9dac465319668a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XITRPGL5%2F20251001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251001T014126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCVlJuEOw8nQ6c8WZTCRyEmEJCaeO8pLVdnaC3f7hqHJAIgCXq%2F1nL27cUg4rAIHN24BPy9ABQEX96v0i97nasQjEgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAw0wh8158Z%2F6ZD3bircA2GI81%2By90JpJ70YdtkHIBhvKUhSoyQr7JiJODdYb0KAkoToY71hzJ%2FcGAZQGpE0yJJJ%2F5kowoFydkAs4zyqXvMVe2lzahg1Fd5GCNrg4sj7wb51tksXMs%2BSETZkuA%2FTif2ZMFcDyuf9ku10lGjRPonvzzwTzv0R6Z2B8uzOuC6g0m1DGyHMkenoecn%2F9ZHbfk8lRTIw%2F%2FWIEsXWfs49QpDYjyuxb7H5KeYYid2DOnlirZyQngIAJoYxdY7rN95EFOl8OpCVLdQY9AdQf4A8bdjmLgD3Tb6gS2sj2QA6v5y73R6nnfe8dg2SkXDVNHgdkO7iFGrVb26nO%2FHOLwIHjvVn7tNWP8eclwDZcvq526Aitv3JPy2u%2B2rmQrrMwan%2FFRhemT5G%2BTyMvp%2FN9giULMCNthgUKZPNwZb5oMa0la0wR1%2Fu6Z%2FGbjN%2Ftsk%2F9n9cjt2Jq8BFlYEUJHrvE2bw3mpo8OZfFNgq8FA8%2FmOc1MWfNc8lODO6%2B8EqQ2TDbddJ%2Fv4l%2FLUe4nRXSjdIk2iMi3wH1HwA33Qp1gXiULgDX5MTFAD%2FKwP3%2FAfS6n4W8GMuVG1dyApg%2FXpEluTmWI9W2UFrUVr4cDbfKkgev2iBRAFzFutkK%2BMnEpFHoL%2BaMNeF8sYGOqUBKT%2Bjsx7jPj%2BkZ%2BXf1HC7tRcTl9RWEp%2FRxcxMaViskl2qb42W3a0w7Aq9h8DtlswzqhdcUE2GpDLLt65odgAWWuHPjqlAcmd8AHiaIhWBFPt8ZYS3%2BnanAuHu6C3PBu%2Fbs%2FsKwhE%2FZby6ifMBV%2B%2BBkbwDQUtIvifFEN7wpYZk93ZhBompISCkA8nWWo%2BHzvd%2BXgE7kW%2FuU4TDSz%2FizJEXBpl2tN%2FP&X-Amz-Signature=7f04422a4f9d12a28a654d492d70f2c4f8b7b4b5ae95c1d13beaefdfb77689be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
