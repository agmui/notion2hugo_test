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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNOAJNC%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIApnlDTbkCHJF4s2iPVhjNjHr3BmEBLfJ5MqHJJf%2BDO6AiEA3A27BFi4q%2FrA3S%2FawZnaekGnMamefI37Vrt1bvyRIB0qiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4lY%2Bh%2BrKFW39edXircA8IpaQDcMF2mSbuSg%2BWMZeNwcwmQnzmiESPRgFk7%2FuWsXDABudH27mFAmVamZiYAq1%2BqIw5FnKEOWE6Q9m4ennWVuRTSbQL6t2URecoDmgiFXboVFE0NJlrPdWdTmZmQswBuw98Q7YB%2BuHHbS9YGCAWQYcT8kSiY8DWtE4ovT51rPXGfpRKsIyPuZCfnRd1UpISbbPA6uHQO4J%2BgHeqbwTrX87CeJceRVR8yvSd38y4QCvhsXD07Lw6CBYBE4awjACVYRvTZp9ocL3ZeRrzjri7AmkvIVcjyfr%2F6hMX40tMQvSBji%2FmafAq4O1X7DogUBPca0Ul3dknFj0CdJeJJWtNLRpYofC838VurdNiMXxWLIhzbC3g%2BmetFOQ%2B040QaIQ6d1hm%2BcrXx4t8PDRrVy4UG8qLBUv8yyaLeUNTm4a9sN2fA95G51lfqAZMeDmHqhvhoAwEIpSAoCw7mVDs97cnKqVyVQtRVF9wBoIfFVClIMhaqtLPBDLamGtwLNHEsYPEhXBK55SpReUrOXUV1eHrY%2FSoJpkRv4WKW07%2BEnKUi0NYyg1ANzt5dwopLMWJjtWWlPHD4b1pPu%2B9ziiuzsV4dVZzq03FStsHVEjjlVGCbz%2BQrMpKJdUqZ%2Ft5qMOmvzdEGOqUBVNZ7uDr%2BLy8V5B2Wy1l8lCVzJFZpMaLlyGRVbQ3phLg3cAv%2BRzwq2Qa1CmZbdAzTR3gCEK9th5qw4g07VwH6YhGzZm2BoEdVbSvSpugDXeNqaLLoFa8va5aSxuLW%2BlxN7345C6gcA2IbF4WNVavEVBLqMqkrjat0bLDO95zYjt80S96VZWg6shKhwd09dix%2BtEZnYejmnv4gzzzrqmAok4jtmHFu&X-Amz-Signature=d7a1fef134cd79f70abfa83452cd4115e881bb08c458c7703f9cc712feab6f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAKAJUN3%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqkdstG7kINMNucMqS8TtXh3hrFR8EcMcLfSqQUZt6TQIgLnIq0CCvh7CBk1ekndjtiDlX%2BCeOlgYyydPsuTmFdsYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTsb%2B1uyWGdK0lSESrcA54%2BQaACiZMfD8MW%2F9otCfgfdqSstrmXhiL5dO6ae8%2FsAY3PTAEEPYqHvdrPh8qYFgqjI5ptnh2D5Gp7XbL2waPlOPphXkEOWg7nxVhftseGb%2Fl9oNKkKmo7ygwCt3GCdimxYKsUBM8b9RIX4REIG%2B8MZy%2FtxnO6zRJ0Wh09nZ9eoZRraXwM1HadjX0%2BJhvQD6DSZz6OaXduLAi%2BvTIfiRAi7Q26jSNhHoRDTEV5Q%2BRVeyFYqG6x%2B6BPHBfhKvDv6VpwnYJpuRvMcKS5k1DDVHVob5VirPG7npgM%2BjhCoto0KGzICUheY3wJnvVmOsIDW4%2BHYZR770ZFyKo70yiI8GgiEvbLx6BJu5%2BadDOcKfXVSXBCBGaZ%2FePZhczUVCIxuMcrv2vk8FfEPtb2eaXasqLFXyjpIeuBl%2BmuW%2F3uQVVVcsgQ5OC66BM3pVufJpt%2BLSm6boQSAj8Wg6jQf2QdW%2BkYhQ1KPBbe3dUEDuCkRx%2F49tLmvxsLNL7bujqACWT5%2FAzBepR11AQWrQ4gRj%2BD3np4h0yKAYtPOCZLiO2GKMFuLm9BnmmbZ2AUu685epQwuUHfn0oR98W3VCiXgwNRjEPWdCnm3I6h9SlItIlkRrgUFIhiCSYXl%2BeyxWtgMIuxzdEGOqUB55A%2FnfMXkChHuAy0deNziWj5DBAjjrsLjzPQuckQnPVukdE86xxC08WV5wjq5WL6dkCMAujvPCmrnBbvRE5WzHULXj2zdq0%2BRz3okfB9B9Qi0EG4W7XXe3n7BCVjrc1aNgGtvK8gCxubtzXbjwXtHDAw%2F6QwPHQhf42OSAFG5U%2FFJuIMKV5PrWGMJmDcO8jiyAUW43uCLcveZxuKU%2BLIVM05ZfHh&X-Amz-Signature=7042bf40e48fbcd9bdf1b44588202f3e63c8c3769ae2656fcc349e1c24a0f095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
