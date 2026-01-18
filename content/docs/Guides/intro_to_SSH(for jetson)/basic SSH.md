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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2DJRNZC%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDu%2BVu1NmPTk8wA6aCvn5fUo4v2%2Bjvl4T4PH2UD72UTBAiAjOjON0rcnih%2ByD2ENbWORRbDhEuakQc2SiaAZrK90dSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMQUprsQKX4urUUFkeKtwD%2B2cWn44D5RpW0DHI32Y%2BrjIwwsHHqxRf3iPeX9qKDSk9DUEk44F2LsU4WoghHNGuRYn59kNno%2Bmos7n701Z3L7%2FJIOOkmQGNCK%2Bbk0Z8v65hWuViVjHdLn4gP933c5IwbNtdDabZ4jzIjyjQ%2FQRD7LObFCwC1h%2BtbCLTFfXaZe%2FfystDV0txcgpdSlMLVRswgQ6dA%2F1ti1qsHC1Ug0oHirSp2LvqtAgCLznXBKxfTRGm%2FZ%2B0GW9duTw%2BpwWqgfcABBlZtOdnOLTa%2Fpq6LPGWXmWQ88U%2BAxf3HXxuwS4IBeVla%2BQVRGH%2BtHDPl2wahL5spAcspSqXGv4dZnLzwYS33tRqiXrs89aUsIlYpOp1R3FfbkXkM2zb64pegiJ1wQfcSyfdJuO2BhrXWBTcK%2Fgey8lG7s6qKJIyO7iokr2vOyfy3WarCQa80aJf5wX4wqkr9Yw4HF6vSa8XYS0ffQqE4iPQdT5TCZnfCRkCS3P%2F46ZcmpZMC0KoQs%2BcSO6RbXGXvUzR6%2FQmfmWC5W0E%2FQZKI%2B%2BukN36GUf5zydfauCNKjPEwdUIIRxdPkkHIWDnbkV5kep8lSkGULGe4jq8eFz3KpNoEAGSzB2g%2FsWc30fIGYfTKVDiD8YymTFTdd8w%2BpywywY6pgG5d4LAf65hWD67MGcC8gnE59niBy0UZrdzWONy9EGRrpYDro%2BjlGB89NKNtLFwfwKx7g4iYjuzVcY2iNKzrbX6Dy%2BOtoKHd8sRa%2BUTJ6SH3k9mlv3ljtkZQBUA2c060Xkl0PVf%2Fj6mauxNJ%2F11vCTbV8mUDVD02IQEJZG5KplYLNudruX8opfE%2BGydAHNgbTEVbUyNKCftqUIxVaaP6%2Bdf498DefkN&X-Amz-Signature=304974ad8f3e694dac2f1a3b6a34ff1191da53e88b3a0e08052aa5476f18be94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466325HAVLE%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9zAbgoHb929vdJsJGITDcNloJ7kIOJwNh8z%2FDhYc9BAiEAtB19vM%2B%2FgEfp01b%2B6elHZdn6mI4cGfkWVZeG3G1O46Yq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDI2lw9qAz%2Fm0%2BfUVpircA%2B8FWJm3l8dhh5ArWFcw8NyiigAJmjoRCkPxlP6zYD2172OVJfRlRsUw82%2BgnxtLPQsvmK7620plJvYTdVUGMtD1FFmd8xkS16BHkc6RzbqPBjAitUs35dyWv5W86uhsGIzGSmiGa3%2Fh9gO%2FWYm3kcd6S4sQOcUyF5ic4cXRaH5THT3QE5pjMf12Le%2Byzs0VnZpeLsz8RTVfSXSbBu0zIMNBu4PuNmtBZnz7X5o8%2BUQDk80aEphHQuslY9uatvzZmEq8MuPMfnChMj7rvnRBBMwnXaGfhCpxuecELhVvhETpAJblGvPW4M086Y6q7HuQ5omH8PM3IYpezwtM4uLD5LcMo6uCU%2FAlXTR48UXoui4zev4JFNjHHPLPv1wFeyVRxY%2Bh6FGixc0PDpLON%2ByxnsTL2u0pZ8dSE1YOFokCdvPS%2Bplx0si08xcnDOUiqeYmqsMehpyVpK3B9TyXRGrrL%2BJrmrhtCbuMw%2FCiZZokk5%2BPjiE2kAJEixpglXkpQA%2BLh2zWa9TyVpslYH3bT%2BsTaJub2FcxKepRinH8FtRgvxcm%2BkFKPj2Oti05thyvW3xGnE3nlOTAPi1gtFm9x7YryqRMG5MzlgvUj1XrxMcIxT%2BisN9lgKmMsK7j%2F%2BSbMNecsMsGOqUBvmSIm%2F%2FKnnGrPPTMtuDzFiqNrrBGwVCxO7GADKZGfLrT3XxxmsCExVx1Xz1E45HkYYvw05IwrCKm4XREdxoJ9axpLxZBFzta4HikbVJC5zhwUK7U5hCX6fHaCE78r8RnjVJVZcxsqMjJRi8h1naP5%2Bb5r6Wf5L0CGYgMBmHCwcuNz0tbid75gVlw5ro0W6Jy4mtEpfPtD%2Bz8NDxknOa45XrwJS4D&X-Amz-Signature=b65e4ba9c6e6af806f6e9a8b4646fb983e92c67e4add592c5820bec5dcd9a5e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
