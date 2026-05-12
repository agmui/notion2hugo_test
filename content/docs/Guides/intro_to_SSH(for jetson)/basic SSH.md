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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SEYLVZB%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIHoUbGK9G17WV35ovja43yI%2BcTXRC0TVpcYezeoVI2xUAiEA50tjgjP3j7qFOswJqYIljQXWG261wjJZy3GRUOTpKCoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIzoha1uQNlwHWvPcircA%2B0l8tjTK5gJ9PqdY0Bd1q3XTsrSpBHdhznt8TWiEExJgYIUQEkTTGYaWJZs%2B%2FpRVKi8wcMpHmDGPr6r4js63iw2DL1U5pAq%2FBuUBBghCcKTHf4l6Hhmwf36FSo4E2I79kNsn9ByrbGEauuHBskyRb%2BvSIbY6NHWxecx7TkJ8OFluzdDL9XqwKM5D9SMCnIj4yOqlY1GyS0c2OeLt4gi%2F9CC%2B9op3N%2FP9TiSvo6uoYkPmSNlFHa%2Bch3xeTzTOvgCLDXTJmu4p2XVWkdewuSPsjqRejWmQSEqdPxUEh70QVLrurY%2BetbYXtKhucALDvFaLzoLthkr0dH6hF%2BNjFh09o0rmt6i0BtxgEBZ4jswZNy3%2B7cUr9PmSsVSL7un2OPJ8w8cwo2Do3q1u0RzlHU1GiaGShXRlwLzYtTtaAKr4n9EYvNkPRcREdsqGruajx0cgmX0nQcxqz%2FI9Zqw11gnWoepynZxrDkQ3kz4X%2FKZoUuAKz4xgagKAALPFQG1gOVbp%2BD4rX4HNzB3omOqqNJu1krI5VSuL%2BmarV3NbQ1D%2BEBfteN%2Bcyrik9DQYtgi5BE4iJlPP%2Bh7mQ5ba53Pyc0jR3%2FHmr84vZWhIH7O0m2TeRDvGhQ4kBzCh3TdYy1XMLGgitAGOqUBKNpIsEcwwB8aYp4FVFz12pTmaUSo0UWRI5Mo0uRy3GDulzqx1%2FfQIjiiHWI7Ro%2B9zgPgoPrySX%2F0ZDaVqCO2Hw68M4TK2nN5cUrf4Rk02v9gAeeXvbxIzC84VTryiGttmVS%2BCMdAExt2ku8RqSEALC6xzRcVNRKrkg8CL%2BvJjb2FpBdadcCon8qD8aOZbEc%2BQ8Bgg8TRuRspnOl1D8e7LOSiihFw&X-Amz-Signature=7fd37a489f9dc2ec36c680c4e71d97d1264979e29fcf431b28a49254b5f09821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZVFERR%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDIbftgEGdHy4gESA1FEVHHk1959nCE4Z7LDYz7DKlJqwIgL1ZGNx1Y11tG6IOHJWhjle9%2FT72fnHaPxC6AHYJanvoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHz7iYrPSOM%2F07GSVyrcAyk4oxOAyBozlne%2Bo1e2rEv7YqyumEATkA6DgaODdNVgd9nI907n145%2BK%2Bl2Z05ZHebNHL9E8oT7ROmm6ycNTv7tPGAwkdYylpg8DUtbXQP3aD8IME9d60h9%2BQYNF2Kp5LoJxWuDNU2UdZTWcCJi3lmzL3FYygebuPI5bktqd4e7v%2Fyl%2FAm5Xfi%2Fj3mOjFssxy9Lz4Wggl3L4hhJjxGfWmi1ujgn%2FNcp6bLt7Sj6yttdHfWNsn59n7HdFU4%2BIGHgn%2Buk56i96vn%2F5JGCyGNDHPwFVAKCp0ed3Iua2643bI8xpL36OOgH2Hl24p4erMRNn7%2BXTdpAQN3XHTobKy690c0sDgjQ%2F8eLigXJX8A0Ou%2FmsW0fSBwnKsWfBB8LRT3GMD38wr1ZWOOb4iCofWO8e3VTyyTJtxc13fM0js5YCZw5E3SL4IRTkb50sw4MY1RNsp%2FhqXqNSMy8JOCIpcumy0vTGLwJ6tsJzJxjoL6pgTFk1xl2CfTTove9m7YB7hfonrzRcsMO90PB%2Fvgezavl2dDR%2FZ7CBoX4u9MyM%2FTp2mHK2KlIJOEbnjbnMQq39V0PVnAXyUoXCSna97yY1MTTzPpGM%2B9IZ5nCl%2BNKc40L1pGlgZ3YDs9K7bSMQTIVMLGgitAGOqUByrdpThyDHiz6QKQnjb%2FlRvh%2FiaxHH9lkwJpkYiOAg%2F8oiki6Mz4KeW1B6ZBSH%2B1%2B6%2BeEn1v3%2FU2Vc4DEtRkbFQp63Pq9Ivk2VrReL19HFfuX5xECWWm6IK5eheZv42LQqSxp%2FcijenYXbm0%2BeJSVA8BT4Zb1jrqPbwla82UFfh0GWwRuLZE57%2BbAgRPNEmvKGx7OSyqHLy29QZiDmvwKOdidRQ0L&X-Amz-Signature=35b14e30073f449afff696dbbc1b6928a8c16cc7d92f8e210799bec401990357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
