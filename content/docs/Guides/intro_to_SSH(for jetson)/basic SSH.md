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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZS5VDAN%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPjdDU6E3T2jh9tIU2iI8Nv%2FcPIwvINsDkqc2nY4nifQIhAKdYeW6PICM%2FVqq48nAzPxuW30EjWLPpOFDZUxok28JqKv8DCCIQABoMNjM3NDIzMTgzODA1Igx6ztXrVVfRZUWcIkYq3ANJ6tYSYp8h0a3qLd%2FrW5Q4cRn5h5Tt%2BTbVdbp3kXy6LJPZUNtd8gZISTnCZrDOoE9Fkqhq%2FjmQyRttV%2F3fvvJw%2BitGD8wW8daKixWdFb2TCKc6MNxuOTJGb5TYvpFsdKTJJVtIzVjsx%2BpLrnHuvt7Gy8SR8iljt0kLG9dog6uymWWZaQFZQltfKxpOIjEIoYDuyRnr0BdoD2Is57dckDw0YCdQbEarrYJmvKqng1e9USS8LSiyfV42iC3RQ42aLd%2BoANQQQmQEtjqVPI8DCDCbq9bRSe%2Ffho8pcRLYIeEdew6Wa5UTHZJE%2FALFmCcTLj8ZLeBJM8cd1ttEQgLKc9WZJBi%2Bpboc7ukJYw6rG1P7C4s5q%2FJB0ikBWuRb6hios0PZ6QT5l96en2Dt7mPIncwK8N2r6EbtVlTthDx2ZdKKj0TPAkAUePG7oy1H4NjQ5%2F899zinIIpjRlq7DibJTW2jdZ18W5Ve6WHKuaLIdKerHo5NL2dCEbWOYUh0KTPbwBkf9xXE3hTCTsVXz7NW8bxeG0ZXnwZfKNlnVmPU%2FnYTtEfr81npcZbqZmY5o06V4ZONHJtiAKwR1V82yrvMnjhxrtz4dh4tzBfNaSlQrTEDSESgg42QxuxmxFvk1TCoi9nFBjqkASugEzhIuN%2BWCHc8ItbgRgafPRFrnZdOwZfT1Z%2FL%2FHvwUz%2Bd%2FDd2Bl%2F8SHw%2BZfqBL27TxQOxKc8mXxG6J1JzGCJRzIB1vKO3507ZSbbf2N78GD8cgCt8MdkXuOLz8sPpxPephtlyoAogi707Surr6XVcsMOLoBR0VzGyBfnxdWQfmxsLeOrTEDFB4xkSumogPGaObHClu9iEtY9cIbk8ZzksIfiD&X-Amz-Signature=3a90461be4421d33da11782c38d8883be4f2d7a619b6d95137e52a82d7544467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SPVY37G%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGauk8RyEzd7hnxDr1U9Ou%2FAxqZBtFdaYbD8v5vxc6gAiBoCWgxzWQcpNQs7bLRPV4ByIKaWeEk%2FHV9NNpxinGGWir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMhOY99KvefRshhIS%2FKtwDi3zfQf%2FgFYc9LddYA28Hjz0Vs4TH4O6sysltMUpPnfanTj2VFNsB5TJfmyqiJIDGsZm87LtjlArW6VNc%2FLl0qudO0MdryiLo%2FgPxbbHqK2KQ6l9aQUOqKxu34IHbaX3AgoFe%2FbdGZqXb1GDGKQcdPA4DbBMl%2BRIPIs8waA40C4dgvr45hxZBkyv0Gl3WEES8cwDCoLVC939DDE6TSv3eavM4QAc3ct1T5IdSZCTuBqcjuiCec3VsnasZeJwtkVrl6WLWi8ru6xj8Emmg9jvK9F2%2BczT%2Fg17flSA68w%2Ffg%2F3CZC0I7rtVT%2FJjBSF1BZw7MGzM20h4oYTLU%2FzrK7QYtfhN9SdWv9Uc5RtUQYnOMeE8NewhOJ9hZ6eecmw0B6B13QZfh%2Fg3cDd9CnNgSoWt8R4KO6bzrCPM3mVBTxKe1YOsFjqlIP8hcFdh5ILbaLZ%2Fjgj3oiVL1yjfKthNlouuctgMAHJpDpFsp%2FdUxrFTKRTTmmWVnfrPd0%2BGkztUtmYQZwWeVm%2BFMgrOpoAzfz2XM1%2FwX88r9wLNJLNZgpncRQT5%2FgJ0Q64b1Pxy7AL6NwmfqkgjWjhDSg5RmM74IRDCMzknNgBYlNF2FZ1thd3S%2FNojXID3dv8sUGKbdwEwv4vZxQY6pgHtKP3QILwhH4JeAHO2w99zCkG2HNyuBZCJa2TPfspi0%2FTAabsLN7Hwe7KktvUwmfEu1xbJ%2FZg%2FKoqBY5%2BEPbFok6jpl3gQe7BpsCZyyiJxOmu5ynyA%2FnXJW7GUyWft5z3kuKfLfJjfuJzeUrBrNod2v2H%2BEcBeUXz5UCfpuGULfdTHgfgXP9zur7N4TwU3m6%2BiN5cwvzjPirAqUo1viOOZoY7lGBAC&X-Amz-Signature=2cb00c872a34ba6a7a25ed59752bd269c6633621f656688230f752ef23e2892c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
