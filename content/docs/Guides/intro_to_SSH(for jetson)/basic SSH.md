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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOEJCLPT%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC7vpIDHLtaf33FhWd6G7tzqGqC%2F2a%2BTbAQoEn5%2FeWcAiBgYlREwDmojKUUL%2FI9GeFdJcut51MdeSOzW3QN2BPiuir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM5GG0aTQ32Kk1SilrKtwDD8oEbh95sv1QqVyj%2F9ORefLkSdVOXO8dSKxzuzS5uvYg5aBVtPRuZsJHQp0blU%2BLofKCtc9jNQpQQeqbKzUBdMSlyfCmRFqKOrvW%2BPiI9FTGVHVG%2FBFKrP9U1mMzySF1mNwfOOC4zJHKyvbdfTLpNSPOTQKRuamPyTQ72n0jGmnsh7pBnnT8rfL7YeIleXJtqDgy8p7QZZFcAxiOvJuiccrbX8wQA4EFvq4kbL1DgWMP8nB9F2192xR8K0r5Maf8%2B5KUYsUSk42HZgtAbmOcm78tbyzudO%2BPY6d4L8jsVFrWZfxKV%2FyS6Ak%2BhHeJ1QI7pxx0xStq1dy0%2Bnw28WVoZ5RH9%2FCcbyyeZYLjCHLCevtlHEiDUsoXbp3RBlO5KgdiMpmr2E3yNt7fh%2F59FMLkYyHfDL9QjHDdCrSSibtvqCWPaxe3DnXJrvl%2FbOKcL88RtC3tciMM6yEF81zUdNab50VGjogc2i%2B8c226YGzZ%2BLVXs1ztKCeTFyFEK3Z360V4upEWtPppuAy82QX2LcJ3OiwmDQtwv%2FqCQj%2BiLhqkZ9ua2xlx82405xqcr8RB9Q7rgrG98AIaEETMl8Y4MMqH1XR1z6E0pr5RaWrGaUuAJJS34RN24BFCeyt6PTsw56blzwY6pgG93KE4SL8jcM13Q7ANbcRhXsQWpjTzAyzc98RxVQ6FXMK1SnLyrW%2B31rSBmR3lc7UAAxo9IVnpuCgI40W3D01f2E3N%2BeOt55un3TRqBULEjE6eOp%2BTnScMKNXm3Y%2B2c7iSkZTOmn0SAJFa0qaePR0jBKUNKzLPHusN%2FIJ550nVtkxep6b%2FHk0zXjUcuOcAUqGHsmHl8CC%2B4KjjR80WysxPPsF7IqO7&X-Amz-Signature=a555dd7789153415bff2122852e197c4224e58892901673625bf4264d0e9585e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJEOQBN%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZxkafnDMfVK6lia6IaFe13SIoTHRy6cQ7LX2xsj%2B4CAiBge%2B7ZHim%2FcqJzCeDD5zX8wZtSpLnVejp9umbkFrp7syr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMq8MXOzvi2oPeAmGbKtwDT%2BnGhveCKSiACg%2Fz2E%2FpUMaOL8uZPuCKwdG7jeHAh5BSVQM0TtQSrkqObRcavtDC%2FFDFnf7%2Bm%2FWhXz3Ktj%2FXZQYeBT%2FwUXs5a%2BumY%2Bj5clD%2Bjz57GQ78mCNFFjvjPEzAEBHb3JAicrd0ioXWEArw2BM31rJLKqCDj5tETtP93CZlTxloWQVjfBwJV8PLMA0zO6qTvkreDR7zMdL0RW7TCPgEg4LpKJgerm187JWuHGPvv239KMINgsoKo7Fsb2YJq6ef5bfuVIe3gra9J%2BygsbvVd%2FH4n73Fb%2Fsy03nuEJx7UibxHqFP5S%2FGqgAKaYIsYgQ39ePLg78b5RyMXsnfWBeGx9iG4VjV7m0QPxs%2F0YyBMf%2FCwQ5Pru6d801b%2Fj%2FsDcKCVOwje2ogt3U9RPawUjlOi8pyivDFPvnGa44yAIhm9C2FdPLq%2BZjeoRV4UMlvcRLoWxAwTR0R0b0Sr9yY8vGFcK7k3EyDc8IqAgJ9qo6m5VC2L895IYyATZQgrcbozqr%2BcTwtnLSvkSvdH2AeFPQgjgIe5qyeV97V8qMMEcyNMDgrDecP6hCgYHzlzfG1xrK%2FRzNF0E40Dba96cOU2fRc5gK%2Bq%2F%2BMWufaDJkAMJyhg5bMnVmRUiO6NKEw6KblzwY6pgFKmXq9zfWcfqFfxWsu77Wx9ZhRmXEaGmn69XLZQJEXIKkL0InFNmLSBJ0kbTZvJPMbB3k9jo%2BDHEHeDDnkahyMZA2ko3ezDwIyz73YVDwluUytvrTAFM7uPtxDX50S6KgXLkJ0yCLBJEMag%2B8BDpbjaG6JLUdehA8h8NCJzIutjh80top8xp3RWzHy3fOhynQOAvyvQTaq7B6Xx2zZXeNO9DlPF%2B9E&X-Amz-Signature=37a2cc68800f624d46651c351baf20850222fa97b1bdbf4415a5e53588d36baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
