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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB7VNOXC%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCBVBk4tJl42PjwGjEENl61pLgfKjk9VbE22KlvQInt%2BQIgD7m%2FpkgPWWBi0d73Sd6QAUHUTCeBsNvwgtBc6PuH%2FpYq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDOKLNAdUPiNK1Yj%2F2yrcA2b70C4m3HrTsYO%2F6FDHBvfv%2FokErBetacimyRCJdvZ01shMZ5fTgbaCYI3Un%2FnpeOaSsFdEOI8yYqEu1PJUHFIAupN2W4zURFWxsHtm9YGuEV0zduUNsP0Ivbaitn4sotNQ4Ps0BgkEcmPbX7Gb9qezOqSHzwG%2BIqls2CdshY9CozuA4P6JdHLa0fOpxkou2qK1VStRzSU47FQLBVSCixcWne8wLMdO8MPJkwr0mXSiQ9hcFhpgClVt5SCWX9SVv62hEeJ7XL2Fgj%2BafrKFzxdI0TfNql53FU%2BL%2BajxA6L%2FNHYdCPEB2ovBpvgJHXkHCUSlmOzg6HBaaK662RPvCPZefxOt4s1BmD2znb8tqIp%2FHud3uFazjYJ7ZwZms%2FhdYQC0MBzIIZyNmmPpV1QHYRnqeNF0w1kbGLV9rNC0gBhKB51n717mUpQvN8hx63mgC7iQTJ4j0QIXhYiP0XPvkwIX0w3ENBYgLP5jskpYJeLP1fK0e8VcSEkC5vmIRr1INgD36bSlxUsIUKEYYZKYXBnZVueO15YmQmC2Mj%2FORvhDlqWTA10dyDAIyEcC%2BTHRsI%2BHMO6WYMKZqzka71eAQWAxwgQUgyT%2FDbZTdPL4BlLOUJocLNeRA2S6DVLgMJaA%2F8gGOqUB3UY5wGnkHweeOGbjx0skXPNn6FOb9oOVJMi0qPuTLSIMIxP3m1BH6bKLgFq5QyspYjXcu8g7K0ti6s99OOGtYF0SKS%2BJERxYEq5nK3yFSfFxkR9l%2F3e%2BTbzP5jmdB9VqYHQKMRW4q1rinqHJx2ibbxnsoHVOF7viJC%2F47S%2Fl5%2BgSsSg9ZphiJlnni8ygrSA7YRZkXIO4tpoIHlA5WOA%2FBKFrhz9P&X-Amz-Signature=64e99e64801dd91a67da241f1b2b9715219661a5f9c003f19ec586fac031aeea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHOHHUKL%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCICg2EgHsEdPIuEHNhDubx3b7d7tPsWC3GzeZ3FEvZ3ISAiEAoWyHijBZN7nnYHvzmpY07X%2BY%2BbkKUIPeTVg9t8UKiwcq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDCgBWHJB2QjmNvUcMircA1EI1iID0CZ1BVVvURlVpciQuv5Nfzo5Vm8vVQFe4EJ4CZHBvAh2qirWdz6A83g1uhLjXExVJEfK2z3axMO2bhj5kBibFB8ce4cRogASBxOk0sg3LSaRdcP1mSlTX6hcRFEefPSolyxUBnD64DDNiCtI45nyI3bzRzTrrcYhc%2F1sEwVcAdtoDkzG6arTiJnDPtHdgpaJLx132Ez37wGkydoMeaJjSatBZ3DNNG3QlsB0Mb8VBvV%2Fg8QMxNjd5Aep7criyOtekkTy0jonW2KHtWMqqiuKBqL7kkUEPss%2BVLsP%2FoNLbTK6GCuERZSmhQr82jMuu5OMW%2BhDY6wwI%2FGN0LEJz7R6JwxtaRLOKx%2FShVHPKRBHIfm8hPI68HowxvXhcs2guMHlgRHiRyMtGkoPI%2Fpu5DSyFGuyZje9Zw%2Bk%2FzIq7HQ75J32hrIOk7HeGqgMPIyXvQO7gnu67ZR%2FJxt9QnmtLOoGTiCFQSklLLp1ym8Gj999Qs%2BehSH3gYj1M%2FTIjl09u1iYF3IA%2F3hHz0KHuzbc4UZbefODTd%2FRXYOHAXJjgDKNL%2FrkLcEpPBxjlgWlsyZAB6xE9mMtN3EmcQgzsIQTegAJzI%2F8dvjUBGh9jOYiRLuxBuf97Hll3eEiMJ6A%2F8gGOqUB6qxHy%2F%2FxoOjBhJLCKDNBNPGThuqxR%2BMngcpRNuWYgd8qn9V%2FKWZqpwCJu87soCTXQLkXxUTQXC4269H%2FgyZnU%2FpEg90opzmcQj5dPoEGrjSavKPDj%2Bfs0cDid%2FYhrLdRgH01hkVehQmJuZH%2BY0QznWOWoV89cde1%2FIpOk%2Buirw7KY67DIaSK224cFj%2BsCgFUq3kwc13azN5kXgSnCsN7ZZCya4jM&X-Amz-Signature=64912cd78c7025a1825afa730a308177f49d2455e8822c874955afb07f2e6427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
