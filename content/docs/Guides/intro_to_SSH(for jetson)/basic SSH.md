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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5QX5I4K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCX%2FCjMCAVfCsbiu5yDbwqzTSwKMUngwQ45aeBJ5rptVgIhAI9QWJ7LDiIZZIl9S87cGlcf144st1XsSHQtdBLzmOOaKv8DCCIQABoMNjM3NDIzMTgzODA1IgwiUnKmmwaoqjnHFgEq3AM6Vm9re%2B1P99CkEW0ljNX%2BwbKboMhioeyD9bbZ3v41icy3Vk1fmF%2FOVWaqfzxqzXAoWo9S%2BQiu0ykm%2F4Kb0vCyj5Csc%2FOGSPQfXU1oxwp509I4hmxa16Dv%2FHh3NRxZpsq5zQNyLPHkD6uqw6KuejJDC3fWqcCcr9j11QQRESJSA%2BCXfFPMdzPL5EvY%2ByOmGR6zu1wuOrzpWM2KV9J6ZlPhv2Ml6VYUpGUYq324lfcwypz6PP039vNwpAow50QIcwYcMeHZTIosUlfh9osK4PHnKNRzEDa25buhKlHXOyZVdMfmQii4gsJ%2FXZp23wURLGcxiw3kt3JRiQPD5xm5j4Sy%2B9uYG2L37keftdmk%2BvYM%2B4Pa0ANc9t1Dyufko8VjyZq0y3qoLW%2BlEvSronDgrmdo6s1xG6QxpGWeyTsHAxNqHw79y4Ed8M4Z5wjGtM%2FXerKR108tPi9lOlOFkxbwcdpKpa3UhyfTvUhh1BVIYGkXxiw6ohHeN%2FpCYo2qDAHSm7DLTBOg2x%2BdH4%2BW7ximDWMIUo0GT52H6Pp4WUQ%2FObBfr5HXEzYO4PZdJ56vhATogGvIjcRDJ9OzYHnP3zXiaBlutHdOTochKl%2BsaZN91ZCcQZfGbWy9F7mZZdUP7jDVlL7JBjqkAd1Bl8akInLcBwOMT1%2By7ZiP3sCztRm%2BFXf37Um6KULmiDO1yE5FRBRWKNkaROiQRnQ%2FkZs6KfGcxXTVX7RN5TRCdTsLfzv8Vhk7KCtTfe5jKMnoShUMZhKqFOtsUy9Kpy4XObzY6JL6YrBsCshjuJH8TnVQ2pUSc5YLXxqHg3XDEyLIFDLoKiQyPNP14XMD%2BYXmvfo6RNaU7MjdaJ2K7cCo4ejP&X-Amz-Signature=429435f765a1f7ad748a9cf6fdb52ad2abb37dc2ee932c16a6d487705353e303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PPO5SI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T014123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICv%2FmL2O5LnQVuRWSDxdfi6rIt84EAvaXqQl3FDZTUFgAiBEM8u8pklKKhYup46pmfFTrWSavDQQ9ZOIdBt%2FcATBwCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqQA5sCTlf1eILkstKtwDfWf%2BZNzbuRNRfV3FNWOrD%2BvVnL5YmsKzBodXEbuW2ZbCXJWYSHrItw06Z8OGsA3LEDh8CnliKJqBkhAAcSgOWj8OUq5q2nAonfJR84O5R8xY5g9Ndi8e0hh%2BkEFYpDud0FXCcTyy%2B9tLUd3atralkAok5WLTBuDha77sIxW6ulttxR9%2B8A1vUODRwqM1jtvL4KSmyFXZt1wNkNs6Cfcz%2FPJTHBhBFjvQ5lVQ9LMy%2FzksQRKmYHBUwXDae3f1p7jzmIpAwlfHBz0RgFjdYOMT1ZnX3O3H7ZDJVCz8xywDLhoJ6El9Yn5hliWKHgQ6zDQXTPzbKcXBB%2BHFm3t9S2PYv5FuyrsQQexR%2Fc8gN98zwlQmor12t6d%2FMMNqqdqdCpsW0%2FxbVYIMbKFNedArANGzmRQ97Ikz6hoDvqYTanp0nZEXcKhjuq0LVbK1O3ZtlSwIQggsbPm5UX5r5WTJe6SW99rOxtj25t%2F5%2Bvg9vjxr%2FcViYFkD3FSmJHfXzZLJwoXFehojmEYpXiA2mxZwvD2ZF6JLaJeLZyB9k%2FvQebvpdDui9keaxkvcOOjcuD7YjX%2FdEBEHqmhlAJzYPxU8B0TyT33pE6qU4vNcGM%2F5cXAkQZ%2F7XLDs%2BzUEZyrlUJ8w2Ja%2ByQY6pgEdgoq1e01AG%2FfwTpvWBap6tOXqZCMNkjh2dkoPjnSempf%2Bz74WcYIw9FNrBTBSkIMEpV2X0ABXwmLvYMZsBQsg8qdfyMdziBG1Xkvj3Tt6fN%2Bt5XOsxUebH4lGa0uU7sS2gsfQhdewEQP6%2BxINlv769Tt6xsHEMwhcbSX57XlftxPFcm4Sn54I%2BcpKXkc7W%2Bj%2BVS59XrkozHRYD7t8rkYrp5mMLkOX&X-Amz-Signature=0e841a8f92a1bf613047066c97cbebdc4ac57a883449955cf1a8fd20f0d7c5f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
