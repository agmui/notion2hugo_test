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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46YPKWU%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCM1Se1VJnfJ6buv%2B920V7CSjlkLmBdjN83Xr5Ubf1VlQIhAJdfdcRRs%2BOuLsHqL28L6Buk2RzMe67BBwdcCO4gHRt8KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXmwTinjpbeqzaLyEq3AMx%2Fbk2q0FGcDunBEHoX5551ExsTOCqixBBiEP%2Fn6CWpfWgZV63FnNFnFRTRdGJcmRCU5OnZGMf%2FVPhghsnqR8pNKGoeQoOsATjZdFiHOTLDCtIbnRTcBWe2lD5ENkz1rWbgiGXmjVQFoIu2ert4fO4O9wpk3aYumXaV6NZmwIXATWCRuXIZ6fjndiM%2Fm2b6vcvN9KIHFpFCnznEcZS51ZbQcbg%2B8OBPSFXZcZ39g3P4DMXKLMEUoTx5Z6Io%2FZQJRvQ1%2B%2BLYIhyaYP6U5BHTk4j8ICz50DhhcgM8edewWhvTpmYS4TIX8lzHzc9z0Kk91SQoxKRdlQxhi3DhKeyjTVibWXhwoxculWShyFPAZMjMAhAD84t7vmmfIYUXYXU%2B1j5E4IRTrIsDnz32W5%2FrXFjnN%2B3WpPAlrTTIfpSUtzMdfDu1NokUyzw9a%2FvOAanQYMHoq%2BaJlwm4gOhe85K%2F9UJz5bOzwM0Vx36vg%2BhLX5szso4EL1%2Bzcw8DZqPeeEXFqQ96IvqQIuZQPuscCZm6uUgt%2FqY5KTx3BuDFIHbGN9lvgdQFfgAtLKDTSNuJjH5qqoE4XglYIwXJSzbPA7rzCUZ1z53p2i%2Bh97vWzpCAyoxsQKBrxlqmieqnWv9xjC5hoDMBjqkAW21HLNeTaQQolxiAgR1OyH2k5V%2FYaAucNFfg4c0OpxajBtunE508%2FHxLMzLt9xAY2YSQv2f5QGOaNAisqjKwcCbkUhi0t1lJYnqWPywmvDaMjfg3m7rT4AGbF8pXQE7DRhRvn%2FoPAWStMW8TJZSRwzgdCkZr75GkcjcoSAwIHbcsaUjlTvOO6JopNtSq84R4CawWp8R11oAUdY395r6IgOETr6E&X-Amz-Signature=74a0aaf38b8c0c7e6634daf1d16366faeecb299470747303c8adfc34b23833ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OCJZXBL%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCNDmlxRaBk8WKWOIraRENyb4GClDbsZm5Re5L83hV6vAIhALaHMkDW6sCHlJoxm1VzBv%2FiyP7Am7T6ehGdFv5oiigUKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzMWf6Kq3nZbDfH4oq3APmgaXCrqUSHvNOP2FTECDC3MfoKehfOEMVsZutwKfApxDvFBT3JzFgIhblCzHWSbK6Tk2NlCGoN%2F5WSMk%2FA%2BEEl%2BG2hPnd8BwK6ygAd6iCu8%2BF4kskjokI1p0gg4ptVAfI0gMCp9UavyFQ7xTD5Mg3fErvyZwNvl8yqpUlhYq1zbzTJzMoysDfJGRQmYsx5oCG1jHHCumf30HCpRZSJ4eBI9%2BnPNmvOpBPre2WNJK6aTC9QSMBpx1OiDaxbaOvJTiWBW0k2htuh7%2B%2BM4w8g5TOwzl5%2BvlAWeKDK0SaNJUrnF7hMXE4IOwaEy9wpY20VFu6og0%2BmKaCI5I9BDZK1WSQfnWwNmNxEcje1PEgp8tltNA8DjFQdOIncfCjuTn3m4halaHNI9gTgoUTZofSOSullBny36IWK8KuSBufD%2Fq4tXCZCOFZ7aAbMyVUeR74J0pkhz%2BLjd2R7MeD9TTkcS93ddZNtsV3BPYIy9mUzYU0xjENf0mx142OVPWOlXYGOsJbqqeLO8ckBP6P%2FuD20KpRDeKoMA3JTd9sFoGk7WbSEy8%2BYL6mypyJNWdm%2B586CFwG26Egbb%2BBXQQOHCGEfnnSrEDcEGOe4qq%2F%2FauIioGgngpV8lW6uUPcHDrd9jDRhoDMBjqkAdN%2F%2FPmWRBHxTvsb1QRZiTAvRG%2Fblia3Awi%2Frqg%2FP0TbbV2MMpFBzOXm0zEXhgESLNuKzpJyqFcu3Ldt%2FiL39mbRCYexP2Dkk0PPscluCjGhfAjN93wsJJt1eRGPr0yuMQMa1U63SvFPSiM1v918rktH1FsSq25yH%2F716BqSo%2F5KOIo6y1VKfEy70mc6uvan2uSsZBRkrCWbX1sny7gOBHfCfm6n&X-Amz-Signature=5ebc0007d74cf1065938e3bdddc3238a9453515e571ed32caa930857c8aa96a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
