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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DZHYOLU%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMlEasK6CnKcbmJ7Q%2FOokUxyk%2BIA2LnHzzFKaxO5YaYAiEAhK2NNJUi9lo2R843ghUjImWmjDPxDU6EGD2ISNNysDwqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEBE7jVZXMXxZ6S0SrcA%2FqoJBFKOJceVnVHDh%2Fjz9HfSZQXYrV%2FtxJ76%2FGOjVYYCqKnn%2Bykc9%2BH2aSTBfqSGt6AcbBPaNKoTzdziwudZM%2FIxIpNY7IlIJC%2BOx0iwm%2BOhAhAWsWEqlj9VhxqItum26tFEF0SE5m5mOwHk%2FfmZE2eN8vyIJ68%2BwG1RVFICRnPTZmcomjwR51ZZ3oYP1h1lfQiC%2BdMnI2o8Z583%2BgJjXT6RPiMNJ9ISYo8rwh7WpTIfUzmkf4SEm19pau2DfvDVSW96jwINm68jXd5oGoBIRRhWfUanv2hfm%2BlLYYKWiLdGcvkck1mpxc8EPiU30cQkrYCoRQXfTntp1FxbTHLCrls8p3JqtFaKLXoh2CiJC%2F1EfbYb7%2BNjQroWk%2F8Hn5Hc2XzQvpdPNhoE0ZtdkCELEYnsCHMdq2lQG7E4D%2Fdi0k3jVuXd2%2BvZDkL8Zik2ltgKZcTDI7GO461Hg%2BTAtxoWXGtiWWGG05cbOtOQlUC6d0g%2FF6bQkuNC5JUuPc90377r2UZmvxqE2%2BaIP4C2Y3hmxLwf7ux%2BxAYuoMIT90n82cbo6HFIZLI8x5aJ65yOiMeScZM65WTMdzyXLuHHpNiHTT1s74J6sOiZqUCQw36jo8D9rZ5Ii43izBIB1uCMLTIh84GOqUBH6vMIM3BL9nweErXOUcPH%2B3PzAzdy9Ct5eUFm8NJ4t5Vzlx4xMPN8%2FQ%2FryNMzPEkAWhGbOKdqbNAnLm3zNMszw0ryXEQwxsC5DhGVQLIFfQ6JUsGtKN3rKuVmgT8kSu8yWS6%2BzmL%2BJe5fGSH6KWnCNIVJ6FOO5KhlwOCRsLohqrA%2BLxcRgBZKSgx0RXnXJXqNeDsfMAhwofhwColCpGWGlrlWYJ9&X-Amz-Signature=d2f09844244fca672d6686eafc68c23b4bdfb100cd8edcaab34119f837317a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUVRFXSP%2F20260324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260324T020851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT6EDVtBOMosqxvxwxWDtsDjlzZZ%2BW0nQnKN488Djy8gIgCnyCr%2BpCF%2BaG3UNMx3rMF83zmbY%2BMiJS0yASqu1RyiUqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAn%2Fn%2Fi5Phdn9%2FITmCrcAzInoWjTeJiCviqG84HDMh1JTleQzELgfVRCc96KKaILmu0znqWvSZD0j3cjxPAURXsz2D7W7sipMVM005Um6TuLNV%2F4RJ%2FSkBE7T6Nx5m2glVeTEtxCE9xkg6lszcz0Bgz6CNEVfv274A4Zf2ZixuG5ttLthRpp8G2LICAuPJ8y%2F%2FW374Am3srhWc5oisdOY%2B3Ob0Wi8e1H0nhDNiwusU3isrx7V6UcBNFAkZ83bh8%2BiCo8bM5MhAhBDdFiLt7O7wClf8SIqsQ4RBifVvAROWe3H8FgKEUCDg99cSGGn%2BvC3AMrSrCx6m1ubcCzxdo3XTBm%2BC5YyKHIZ9Jnm8jE50IvpCnFK8k7gWF4znZHe2%2B6fTvfpRDCM7cjNutei5UGNX3VOHqW17SLSZlwU6HaBGLKlKhasuN4OefkHacvmnGifof7mrvaq%2FoyEteBjNjS8bv2wYVsluu6RMd455oYlmpxXn0f1fSxHaEY%2FPtg5cjDYmN6dsPUeY1zE3485uq8%2FJ55DWMrLDP8wC9IwqfzHnwitdfaM8EiWLrgfSte60eRXyhyHzvE3oeejJmtnJJhcVwMMFSVc1etyAcLyOXkWHvHu5lOkN5JPfyxKdDKnJeT2D7P3%2FytL2N6cMLHMObJh84GOqUBXBwl73eQ9QRP4p1GOJIZWC4BXMJLphpAJfoO3PXItmqWiiBxXRkHbapgRrGaElyqm7GlXQ%2FoJhQx%2FfL%2BEkuYhMa1kUov7gdhKwoqkc2HqHXNqRQMfxqVgsRh4%2BbWKBNZpDbhLMXPWFKb5RpEILGcB6VDxZx7%2B45o4gzEMqYjJYUhLxusjCTLEEE68qZhbPWm%2B9CeKw%2BP11PYfhpxXXvatPBbvm1O&X-Amz-Signature=83477a922fac0a025a74c08b060b0a56ce88f6089eec22edf91cd9a9e8c5739f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
