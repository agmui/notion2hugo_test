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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645VWYQSG%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwWtjLN7qSG0u9OQWRUI6WKk2%2BGueopS7VZQHPiO2BLAiEAj%2Fec2xXRkzP3eOaSTPw3Zb%2BhFrpaaMuVTm47tqQSVx0q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDj0tfy8DvWJfQi78CrcA9ZEWy8G7T09Gl3sw2WevyHaJotknnRvmzo3wGrSfHNsXF3g0nT4EY3KBN7kS540DjjlxBlRjTyxLJN3Ka2qdAO2Zw3kfZeGN9VUXwfAxQxSlx7qgQFot%2FUGB8PtsCbNGagCNP2vhsFbfTWpCQD21ymW3%2FtHaWpgxiqAsWku3UGQXyy6vRLcGmwXYXqq1EmbGEXkBoSfVRC1nRpjyBiQDlTAY4YjeyOW3cxTqiCqJRo8R9pVljaapKp7e%2BsCafKhaQ8QGg%2FVlPYo%2B2xvr3dr9FbxzJb16VA6hlp9I5MgQljTqie8t8a0G7bSO2%2FFCPRkEkGD1Ne9QZHQ6YKBR1McJ%2BKCWsSXaZ2MMF8P3ogdYmOaXVYt3k0qpGX9STlTAWHbkmit82FXlqj8pDRUz7WqRHdeE38Fx5VFPK2m3szzZHP3%2FMLNT8RVsnt7UWmIhhTF6JTCz1GFEjUNVZGw7BiXyBjHHJfItJ%2F2o0mqXqbXCKieyHKrCelINxEOZU2duYJFnWdnDafSpCvWtUprzZdoEY5hOIxGWDnCTkxC5rvWAngkWFXQUBgh7DJeOPXO1TS2Jm77MxAuSM5kU5%2FKL8xp3NXjBzHVRe%2FSIPtFUG0N5ykAbCpCpoZZsuuUZUBuMID1hscGOqUBNXje8fEUuwq5nuJ5lT8EaoXUNgavfWVdqpq5MfC5DnFddTg4QDgWnQ5oi%2BjzZoDgJOuJW%2FenaqbVbsX9yFVZMT6%2F%2FiHtozBbuCTV0TjFoHfngCj3%2BnUqFyWTIB7ZCYVdyqSFG6Y7X7QwKOnqRosqW42Cme3ZI43Fg8qR86vyrvaBkCiwypO1DGEj%2BjxKg6lLuhyeWpIVRWfFLyyro6EL4mwyEQoj&X-Amz-Signature=707097692d3e26c877158d6f98024ed1efdcb7544d8c4c3cba215ad5660899cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626L52A6E%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk7I998bxfgGj5Wj6m1j7qeEV5LO8b1v8w6v2nDN3E4gIgVQWsIJYzCl38F%2F%2BQxV3%2Fyzca9Fhs4H4mwRmcUxCks%2BUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDOB1aMFaLxBCM3pM3ircA%2BC1a%2FmoPdpkTtpyDHoMJyq3BiItEuKG3GtCkyfQB3blwTxPbrGFOWwqYcn%2B01eRq4F03xI%2BBFIsvjG6N3JiyZJqYPV%2FH%2Ft%2BBDRrsO1UKvT3D1BUX4kXUgHI7VRqNoRF%2BGk8grR8RkCYrM7I6M8QqAXdsO00x%2FHFQvFXsB2vYqmo7ZSGglJgeQPSEBPPJEnBtWHFiw%2FeWjcUgkLvwbZ3teu2nTpf5R5Ylv0PWvHoB7Ala0rlzUwzlfLnGJtSjP1OEpVU%2FEPKQXvJAOAU468nFSfHrRpDDJfM0HpPIAH9IntBZGswSSKnUS0A2EbCBRGZ1MNs1e1LMIlQJ1cZuWrucED1Qy2L%2B3qzJLeY%2B0HEOh8DeRi3Ve7jUMSLTbLK93pnFhhhkMJ3KPW66ftC1IBq%2FLkK2%2BXwbmBeny2GrZiV0Rt46xAktsP%2BxE4S4cS0MkCkdrZIwr027L8QhLUXvFMIhVv%2FL53pANNP03TLDMcgAAgeFZM6PhCVJB7bgDGZSpByRSFmRVbdrbJ%2FMdeEpWYIyeYC4k1qeeZKEshX07P1gQPgPEX6jQnPnlDCicNcsTDsOzp4%2BQ%2B0YgDuaX%2BXgtgK%2FMI3h%2FlYq4YHqkMfQMjhhxHDpg6e0eLKsk0bZZTpMPT0hscGOqUBJuIe%2FB0fjlDQU1FKZt1vvSgXRJIhEKEHQfHymnFs4hf%2Fj6OCYhl2A1EXFnhhaX21D97TKiI8mLf91CeGQYAForZ2HorajKKKo2TIg7wj9CdGjBQmtniz7PpY2xnszxxeVdmgzb2kRm4mvfe20wh%2BBIMZom6yy06vSNbYSJ751TRojWFOKsUDK3Z6JbmYdi%2BP3U6DLPGt3jUHzqjUKJmWLJs4opKz&X-Amz-Signature=fcf24220c2c5afe5f3a70c51f3da41f161d957058496115bd3238efe3ba84066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
