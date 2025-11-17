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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PDTKSRY%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIATe89jWxNghVRp9hUXfzeR7Jy2WaPNeYwOYr%2B4JitChAiBJSUQ5b1DYsNzF0P%2B%2B1U2HLI8gdKxzj8xg%2FEg%2B5x9JJyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvSqcY3E2qQd5Pf4xKtwDZF%2B%2B55VO6Dim3QZHah971fnVoYasrsuDW2Y1ZCsrPc%2FzTiarBiPNhs%2BnMj9IG%2BE6sk%2FndpnGBXsgOQGvmSpnKjzsmosZGnr8SOCT4ruBBFekHvgHe9lrDyaPflQxpewMsV216wHv3DKKoIjhI9VACUyJ%2Bo8ToUYJtaiV9JzXB%2FuECVbtHwjGDJ5JdWpnlYTd0sfm9Q8hHT4artLY7xGWwLKpGHv6ky3R5RidcvlXsKtpS4%2BbInO5m4mOPw87ueWixXuG59OEu2z7FHWkfw3WYCx03nWagKQq4IteTRPl7r2zPRJ%2FEFOGdBabKnUNAbS5rrSp296A4I8V4tkGtVM1IYRC1IUxpt5f%2FEr%2BRlCbgCn%2F4bR%2FgEnWImRnzojjKQKdfZPAmP1uIhMZslZxEGXQTvj0jRCD%2F5tCSJRsvQBmEImDjLhxHwOrrFPxdhlwuLEZ4YOpnhFNfsgoQBN2%2FtSCPDJENAT5e9w44330YeiwEWKb9DxphlsTQpNe307JsDKjtm46jFOdVHdaBmAaUE6yUtEzsPuN7oZ5N1f9HBV6dMcGSAfOJQSRJzrP6xNaOsw%2FpF%2Fhac2ytwjenQWxFcEEOpu5y3JFgGYJq2OTL%2BghJWNwM1Dg17go5Gsb11ow%2FuDpyAY6pgGxKOOfNe6h%2Fp5xBwEP7ZM3whOFHPnTR1wtxTTHSHNivGPCRXc5e0Z6J8ueaOMXZSkwjPI26qWFrZ7AjFlC1sDEY5VAnWRkrlMtsjiH5QiYycgAPEWM8P%2FL7smoyruKu8O7MxALe1eHEdZ6%2FE5F5w5ZOWmC0jRrt7kcrVM8HQQv98cL%2BH4Mu1ctkBr%2FsE0M%2BBEu84uZjV%2B8%2FzKM31jBICxRlf9zwFGc&X-Amz-Signature=835781c96da7b7468a1523d1daad73a3abed800cb2dfef60f5f1a89241599fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WUDK4BO%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR4tk6ZQXGHanBBBkd6jhnkYwfPx5BxCKLlhctn3GNLAIhAK%2FSnf6lYzQIJOdwZhV%2B6i6v9zMRrWhOiRWdfKgCi%2B6mKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyC%2Bnut%2FxlHPpN3Dbcq3AOYcgEb91rTekeT2cgGkzWIqWIbBqvFh0%2FTzJ897lIW21wDSCqUtLaW5g6cLNuWvJ5fn2QA3rVM69Zin6JyPrChnffLOD0zrZ8thbf9q3eHZZGEsxghhx%2FmBxOgyGSImYa5%2FrcUXeayQ2LpekNhPe52E7oq9evPsPrYs%2BsPuNABt4jW8LnN97RE0V5UF%2FAN5Z%2F7QmzWSktNxyXIxOaY%2BooyjvWWkL2UPRCr670QhqM1DKf8rXaKa76Unr3kTYFpJ2PcVjlXiL%2B6bHsgsgIDuQiAKYqjyJe1zBNHS0dS5wxhFG5UmpRSF7DyFBpViPhfagpuphCMDTN6T5q8ivdOJIslhmUCeX0XACJuwMwB8Q7lOGQrpAsTnxUk5It1VRFjRnBnXqrhBBdf4cONnoGMfDpkVUiWRnzIpyjNmxDs1mcH8RvAMIEgSvvMpDI%2B%2Bb7RskBTer8E%2BkurwOKUJfEoYDKx6sritR1IuEJk4iwNBaXoxSMvFh43UvsijADqo4R25CJdii5qyaR9YXrkoQVp8FYumWA%2BPsNCgjzrnONEj48%2BiPcJcEHoTkafp%2FGrDB5aBmA%2Bi5bpAJloUgTDegGSuP1efhf9QI8ALZ8%2BQyKFhVTplaClclLWiMHcK30VpzDY4OnIBjqkAb7KbU150JiX8q0wHukD1PtSDziYGxuZkcEYsY3NKMCfvUPHpj%2Fal5FTS50iTNkGZ3uH1myXrL2l89VyjArGGL5%2FCam72X92R%2B6ft1eD2cKzOsZD4PRQD%2F4CbcgQUZ0TqrckddlN1yKUJ7Hii9jQ92L7kwXoUQq0elasoUxjtd2ObUDAyvB6vurVPE44KC0Ha0UM%2F9I4w1PkW8hfhj7Y9zOMwV2V&X-Amz-Signature=a6c0e709f296be2af5344cd1c743d3e49eab4cdc337b0009c3456cc5d76423bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
