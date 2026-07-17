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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2XUBIBJ%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxbbEqdWxk05ESWqm%2BhwbxNlA%2BrUPdjNGe2VnCOMG8tAiEAhH1odjP2Ufn41r9feFFE7fVqtKDUD4AgnPiHLuRiu48q%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNHqzbs8kV7D%2FkGOBSrcA43O2xMjsQKC42RK1Xl6m7cZ3%2BWbLJT1gw9kkSjTVNBJj4fHrb6DT%2BkfowEbbKsDNnOAHE3xqrdNWginp3TQlYLOEInpdc%2FAHeuYTm1iSbZuhpJDPuFTDvXwLT6TwnSM%2Bn%2BCeEX56YjkVxe9ZNOZw73cAcxfiVksRAMj7uS%2FP2LTB0NgYZaqVP0MC2C2WVF%2BVlj2Nsh8%2FrO4IcLCQ1epMae3k4eLosWUvMTK%2Bo6P1ROAdLogWJC7tskkmukOA%2FZPenA1psxslXpfo1GcLmM0Tv6SAvasklvu7nKbju6tkDjKNWsT4Hfdx1INWbc7h1I79S87RPBBvQ5JnL1RnOAgSZxHZ2LziVZYPYbPpvRYH6lwk59KE%2FEiPguFeX%2BAHNKg9xsjB1etQeQzRpn5J7T1h9%2FVfHGvOAD%2B%2FPUb9RgD95lX%2BRc1pr92%2FE%2BrFWkbCN6O6U1LY%2BVO1t7lLFaZ28SacRo0i2ljmVi%2FmqGuKe7Zgr11tHIN3UDWvqwB5AUyL5W8HbGlJ9YbGI9KrQQPRrf%2FZPLQIPp3rULeOPawaVyIZtFfV2mKmt4C3cMB6wO5t7fvMlj5IQ44HEIdAFQThUOM8k0pNhHCp0PESKqC8CbJSxIvzSKP1zaRuA01aTdlMOOn5tIGOqUBkbnc%2FjMJxiT8tOJ6AIOOUTuBY7iQYRL2VmISn6ILUib8ZRy3TzuN1EkdI3FZcGEl23E5u2dt8NeCOWcLYC3wN7U7%2F%2BKaaNiTcMpZEKTbxwB9kVvPHtwIJOkAQ0yO%2FAOofOGuxMmzKFn%2FiSChndxI1Ii9ESE6Y1zlfHwBNXCSEMkd0tfrPBrcaXFIcBW4JE%2Bh74%2BGIBQzlE4t0iVmc8WRZ2im9WjI&X-Amz-Signature=18b93d49e83f8e72d86e277edac5e36780b51449e6dde67ca5febf32e51dae11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R54UFSWY%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEvi3fW2SR%2Ba120a9ucBdSbnI8xYG8Z7psvUTBNUKuR9AiAg3Grkmz4Iiflb4k%2BGebcfEXcINIu7nzIFNSsJ1nyuuir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMIQN5TRaZMwA0Obu7KtwDweHne4ZkFFkSi6WoVZtbBaVoBuO%2BIcL4i%2F1%2B5HUUoDR9IzCWZXlbKk4dmdLJZT5LRCB17HvtSd8QmZmBu4bWIzdSGSgxQG5kzGcJYloe1u%2FLIKPIW3L4LtxMoO%2F9J6VmcwRJXZDIzqBNujU5WHZ9n7Aa%2B%2FUuDeYrJ4VpuvSbhonnskgg%2B7upzGB8jsGwUD3pHN0pylOcD7OyQxTdMuzMpt1ALH3GxXK003Len%2BbggL5I3SndbX20qRtPVIuVuyw15Cliw0CidUwdz9fs1WlCqEnaaBzUgh5HVMIUfzpImNI%2FwF9RJjkS7El%2Ffe0DUPF8JYmgXeGtNGuT7%2FB82o8c7uU%2B37sA81%2BHnfczw9yVRB8C%2F5MYiwIgoAA3BAGf3kAFUxT%2FQc0DcibRzWA76mJ%2F1rZet9gwNru1hz7HGEmU9aM2v%2FydngZhZ5BcyrvYjNlEtEVcskrqNpQI9n23WU4NALssLFZNn44wUIs3nZ0HxMuqRBVeWYUxZ7lJHCdjo%2ByWiUDrK2wig%2FC7DzQo60M7g7bp49OUQKpx%2Bq2T8h4%2FYhQ%2Fvs4gRRgnwv3Sxe0ErJBCvJ1wL3buEhSzciZdOLEhCtZfmdvDcWcuczLjt68nFx1sdsYfeYBATLLDSvsw06nm0gY6pgGSlPMSMx2DT5lSAUcpnaKVDbci0KrAPgHlHduDYtP3V2CXQqva116HCdtyYouUIiafgoeNW3a0r6o6IdZ%2FblBSwiCRy2jmQUXt0BZn2DL%2F%2BBfYXyvNqwkpZw62GhGZzWE9SxcdAUFib075XECL7%2FMETQM1lRLLt0ZvtJ4wonTeSv3TDVpNt8V4BJ95nw4UpGUg1DoV50qze0gDcEUPRB8eQWdKjPKE&X-Amz-Signature=121751e843f319b3ad0365f1055fee2d1a9bdba852e8ee3ef0818f95c784ddb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
