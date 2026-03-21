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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNKPWEWD%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQC%2FYGa6X1n9Skm5gfNlQGKdZaqJPHZDnOacLmxVGcvz2AIgYjmbDbZ2Ed72LKmNY7o3gki4NEnmj5PauOm7yUV6N%2FQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDGjB4tl6PSGEF7z08SrcA51D4misku3tDdODXSNKw94lsV0rb8b%2Fje9sQ9cwaTUioJMnfW9JrTtruwTJ3pDZNAaFElT63WSlR3YhmLoWc5RYHMU3n%2F6CbqgkYWuoFB%2FdkOFm0iLOTDwYQjZC6GVj4Yv%2Fs8z6zWRujMSGOMa644HpefTud1Pjv0Ia2ejbLju%2BfCx2h4Twt2yBqjGypwYbY1tq3mpfn3NbaR7e9UE0haSR9KvB7ok3gInJzGFXWh59XbzHBDSZsffKlYxBVcLIe18824MlvCqJxAlbuDxEzgEpJ0grnV0M2h16wA7JHjcqvPDJsJnRIQOFcv4%2FmC%2FEfRfYA1g8wxIv8MekPWFLUqtH4ZCf1ixtHFIENB3I8JT8da7DoFy337s%2BLttR2X%2Ff2KilH21g9Hvw7%2BP3Y100Eu4BMmE0Jnm%2FXKQ9UOOgtA6Hph912ZWQxD7PlkLZUu%2FrB1u7BshK9DxHbGWa1%2B4xF3ImgkCGydFSJ5WCpFYayW%2FTRmAUgvyC26baFjLD9vKgFSqMtptXMFH8FR77nUOgqiZy%2FC2WRI3TuKoDRulwwJ6et3ctWt4NL0cVIi7RNwTBnV55NRGo8RHJME44D4KmzEwSecl1FSVh12eVuRGE7eVWWQTIHq9%2FBhQngaZsMPLd9s0GOqUBnOaEvqlkLP%2FNQyGRHD7v77YIp6R%2BJHiw7AYt5bLqxX4oXNTomKOM6LGV62nktRR1uzKNezS2w4LG2uZBtrIAatdprHwMBHPOuqTLbCICSYJd%2F5SV%2FDuGvAZATaVmoJZ5Yp5qZFnAnSU1tDO97sPbJ2p2%2FvO7RfCtO5mg%2Fpa6b9TRgXKGaaBWdxG0kH5fvVF1GPC0ciFmxAAoJhYpxe97KVBzbin8&X-Amz-Signature=3dc3c87091cc96cbe7c1806631328dddc2281c62f47cd16f52f2478c9adb2f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGXWYAUB%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQCO7eEli0PpqYDMk9tblCX6%2FpMPOcRkC49KYda%2FZ2xTxQIgf0SkUddwVAh7pFCO4ZESWWPS9pDWL8K8DWrssHQRf%2B4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIicvioYduDh%2FUNwrCrcA%2Bx6fBCXXVaiHJGpCdgE%2BD5VARk7RWaCChiimPYDDsySn3EWLUa5QfDxW9VV5Wtq03vCCEP9J3OqLy1Ui87yKUP4vShtIPtOtMoi5YYJ3EjFB8f19Xtpv1mp8hdGIVO0vWfiut2DSe65htoJ6v5JqQmjlxrp%2FKdSK%2Ba4ZQdzdJ3hMa57Sk%2BvznR1Veqx2lTxgSn1ueigrzB6L4SSQPNPVR22ZXS5IzAhXuSN%2FWy8lMGWV8V%2BREL0Usa05xRdiOb4HqFiYOiPLvaNd2yWYmm%2B2ITS6xDfjVzCwcWLHMlw2Un3DcphNI4ImNbMavbsqTvYNNAmRQoXWteSXrGLO2723kuso%2FrXUlLx2L%2BilVruB9zZDeiRigV0T2ORvH4j3iUfI%2BPKz%2B%2FEgSX676wAZlZi%2FDtsP94cVfGXm7dpfBujyAkFZsFOaHIjvnr13YZAraRqR%2Fz5ICDbUDHWQ7E2gDyeVyfdL9xLBSuShKK8vvCrok6ptDZg6WgfbTwocjgXB2zoYN4tfahzuAEN7fFX47%2FVMrBPN38J9M9tVxRUGKD0uzAqaJQe3oWmotsUYJSZnKDlipTiLIUBI8XkuFKChCYTvWogBhaJ8MSyJjxUQp1qUPZbag2mm2fifK7SOIwiMPLe9s0GOqUB4JIH6WSR%2FHbTrNDi%2BzBIsu1InI6n77j5itt%2FgG2OKngRYPnx91ZIe%2Bl%2FFPBux0EJfYaStwcyCi%2F6yG%2F9rcJ1xD4JeWj2DBhaweCtn1La7MPmbmKVbDMsm%2FfzsZHuSirpf%2BuQg1o6URJ59KnBMn3X4k8Py1saKQw895u26jdrsODVweRq0RNXaW3ldGqTdbe0cu5sp614ipSsPD292tl3CZdvT4kL&X-Amz-Signature=e9a487606ba491b9451e8f5dafa5acbe8bb78fdac90bd0ccff324451546cc8b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
