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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N64HHYE%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHwvXpm%2FzsNiuGhNZSQ0NLe%2BxyjL%2BUAINO0E2HZVuO%2FqAiAa8RrsuZi%2Fau5UOqketqrtC3LOlPWnSH92p%2FYWAydUMir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIModRqVlfxcgRN0lurKtwDqjwTsiLWiIaWgcH4uqDd2IPfXL6Rjz7adQSPr%2BrYtiRqmsaO2Tc47nQTzINE7oR5%2Bh0PA2ooVVwunuKfkwrXIxpv%2FDqI5FbjM%2BVBNsqo61Xg1zgWJ%2B7Hca70oZPaaVbV5JdGu2pTMSPAH4ohO0w%2F2ok3inktr89O1x7lA1Ru22t7k1rTNN4Ccruk2%2FW3sy1JJJu%2BLBvt%2FOSRdqnJeNQrSoZZC7%2FNWLEeDpGcBYoJ4jUf3z7z%2BRm5JYDNi3Kl8fPveiq6W34%2BUU6NocSUvKFRTfGRThSb%2BuSLMW6QiBfRq5i1VhXPZpg2yYVE4POG%2BfyJntSuj2DwkINiUXXmAU1zdNTYnz6Bpue2VXOYUv2tDRVd%2Fq5TJbRfbDtki7IC6nDAuJSeWNJGkXDFzRWp%2FPcy%2Fz83DwjoEqIT%2FddSIVHn2UJJRowCeBHcd6Zv9tpT27AFFx8PYADd6IOpf9c4jNSFnyMabfdguDwipDeDMjTKZV8XCajqm16MkXJIj9pE%2Bg56kwdC8eSlVmIERGdi%2BeFE8U6oYxepZWss5rqwwZzMf6dBgQlbyVaTN1OUbJXHcAXchLjpaNO2s4XRxz2HP7SRKNyRrBe8TQZsaxGBm%2Fd6KBXmC54Nfb%2B4ciJ5ofAwt6zQywY6pgG7RccKr7hr5Gp%2B%2FxWh6%2B62EqZeDEuIwdipwRRmuyNEWaz8oJjfRRVUJaOlwrDUeDFPvcsgeAf%2FUOgyzTzaOeNuaQm32aXIna33wFZAOnCPUuf6dbZ9uQrI4yfZ9jtt1QAM%2BkG8a6X70YuEMfK36lyRqMywCw00chJ7RDuhpaQ%2FBkJjkOsT6zD%2BVKrfiraqkES%2FKhwwYVWR4d4UDK4adZxrsoWxLIAg&X-Amz-Signature=b3162e2c6e101ef1ab2282216c7979072cf98317e6b3e3db48e6f8c4e5431891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B7SKQUE%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCTL5NJTxbeLSnyt3flbyPatLS0LBBaE7ExhElXVTFqMgIhALdUHq3xcG4LevyfyslSuOxFdnhIfzRKKGFvZPingynkKv8DCAIQABoMNjM3NDIzMTgzODA1Igyr9RUl9oSPIIj9X7gq3ANZVsX5QE7mgg8v%2BCTNpDzlvgT91rz5HeYUCCTBnwQcI6XET5jlODk9Dm2evQyXWI2C5FBHzpYqAr4YeGmdrkRFIwvubFDoJ9lpTdOsENpEykTBDZ3DWIrw0g%2B40Gtwu1x9OlKMDdDLLgyCE%2FjUDFvXLuz9qEN9F11oUnn%2B9aKT8cDL0o7hXgwzpBS%2BXSSmPixqRJesvYlbGGhv79AO6F%2BeGtqbBjCW3Ny7v6lFkZU%2BBD0nAUDWszn1oe99P3iT2p28zSbcZ%2Fkht3xQUZ0g8qFbNpV4DnMSj8ffvOAoRwukXEj5AvgX0mPxGc9HJEfz6Bsh3PVU%2F4AQgDSKq4YVyot0THi%2FWGj5QwZx4JX0wdLR5tifiGgzuaHrG4b6bnTbziH%2FxN1kmr8dPqWd1B1DfTn7Q3hoyp%2FQyvbC706IkyAlabunFnR%2F%2Blb%2BC0FpYQCy%2FeqN0B1j%2BeRxFQCbjEwBRyzJvYM%2FEQW%2F%2BDlI63RwRVier6fWwbTHox%2B9u7MajJHlZO%2FLlRaBhwElRhtWx7zFVCZ%2Fz9BLaaCqGZ0m8VrLPdWAhDsvld19KNpDFk70ZdL0aOsdvupmuPQRDDWUukkRwhg4Hum1tQYXqQkxVwjFf0NdGTKgW6QR9j1DW2lq4zDyq9DLBjqkAbCAJIIqKRHBk6Y4t%2FWeetQNYXO7vN5nAEQhRRhdA0FnLlWxc2YML4TpFUKJSbQAK9UNz9XIkJhIXU9uwnoGmZ3gJjcOrJ4bmMJAg22hEVMjhU4WQu3QFLJwphKHyOXwbYhci%2BtqjmuozWDBPIDMPos5MHpRfliSqIqaRP96tO0Gz0Hosv4OTTQwtwG0EQoQEbhDoadf90DDFVJO2IaKdjuEGwzA&X-Amz-Signature=f3658e8c6d3c1e8a6b639c872216ac4a41dcdfc65586450796f09ec2c58c61d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
