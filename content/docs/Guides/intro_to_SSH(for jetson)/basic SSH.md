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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R6EWSVD%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDwbOxv6K9OehUnw3wjsMS1cjbk97AUkRO4dq7dKxlf1wIgblXXXMuS10VhoORXsewk9a3VRxaPegqYjifK14393BsqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkDm3%2BBimEhJiK1ASrcAzU8FoNtENJvdFt7UJ7oNFw%2FTI1MEASFXy%2BtkNiSVODYHmfZRyec5Z3Hpw8L%2BLhiiSxyo%2Bwh34DeqKoDE7SspvQoND%2Bv0X5YiKRaFa2Vu9rcJ075QUeFccsbKEGVWhHmT8ObsV4XXpCZQgFKCuEDZ%2BpdmckkZ7MOFWs%2Fi75OAWYjeXmkMLMKgO0mbLQw6%2BwDFPz6qgwjf%2BZ2Lyx4UOEexFp4xvZPB6xsDFhhAbGpz5JYcKwCEfOdjZ9Cn%2BpKVzRVT3AivGZ3%2B972uL2GZDIsJuQLBTv5faUeF1VSt6OmVN%2FOhgXdLLcQ3f1VpUBeMaEaG%2FVfMU4TkMH64zjn%2B8v0WqpW7Ca8f7AAP6pdG9qmWs49yBm%2Fp1GNuw%2FHLyCwPq8w6z1Rpd2f2Jay0OU2gCu6e1aq3hVhD1dKsVEScOzkNdPORYyMLZ4j3rheHt2AFE%2F6CLDrzAfuHWiSdxbNr0TPxmvItfMWLp2dJQHoAsdCoW13ajUQKhFFEVN5yZd6MFKK8MuxWiH8X4z32oI95cRk5p1ZPOCqb%2FOfU9AqRQ1BgM9MrVQErqEMMZsCtz91lv8ilT9%2BBWKc1DTWwh9NZdWLYhML3gau4kqPvGkzcQ1xk5FV9zm6Y6ydblCsP%2FGRMP7oltIGOqUB9yQ7dFzj81tZ2mIT%2FoHCK2zDpHsESvdkEbWqjS1fk0L3tX0AVQB63Yd4GW4VRu2w13NL%2FydGN1DXoe81RCWFYrctSAMgAxPVNz3AgtdT2AxXzmCE6tng5VQxB%2BpPi%2FwHc44Akx68dKZgWdWwCaqcstJ%2BQjclt9ANLDOZxH3H0HDJtzS4xQYa4%2BBGYe34sYVTOCgCKwwjfqy9D6yi60hYIjvOSo2Y&X-Amz-Signature=1c306b9a43a10be4dcbd7f0c4eb318ed67f188891ed4b3c652335100707b5cb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV66XTNQ%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIFcF3ggYfo38f7ZQub32glyQ%2B2JZCTr1YRgkHFcyfA4CAiA62226%2FntZYiS90yehY26%2B7IfPSBW5QaZFNhxBINr4bCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXRNKbPu4EgybhTTtKtwDsvAawWgvIcF2x20U1za0oFQzwYs%2FF1HyFAzHg%2Fi7VOP1mF3smyrxVnDDB57LGE7%2FCRU3a8si4MXMbdJF%2BIOxlz%2F7cBxFCAyNP88bbdTOHNRXj%2B9NtdWSFYVwKSwO6%2FGhTzwwUeS8OYw%2Bru%2FJdU2t%2B5n8%2FyQGcUiL6gg9Fooz20FEiOtb8kyGlW45nDbahGrBRVLfRsdxrbzXGkWlBDw807hqiXJrgo%2F92d9LK7ATKfRR1QPXrAklWrCz9odiiSOS7tj0VBe%2BbF%2Fr1TMaoM8UzgRNZQm3Cm5x3kgrMagKzTr%2FPBPWHEGPy40HfwqLKJ7nzWt3Huaq21Eilg8OvPVK3ru7qkc7so1Y7r8aYZZn%2BGHO5Njxv9u0lpoLqKwoP8XWnFBqLnX8luwEwX5IlHW2GPSmKfRKjuiNiX5gdJFIbFGs%2FVprBp%2FlDwj%2BsRQgOq7tJDVinbpuzBiR%2FhYSMafgcvEvKtIb005zWWUNs%2FY2BkB2hN87cklIz%2B1Zu36dkYZqNpUkFimKyvMg8QYTld1VpAK4F7HYnlFJAdmiQ4O5fcvhz3UDYhvQMbATIwlYrPPVkbfFMSKRusQhFT9GkuvN6kaKSL4IEfdYto%2B2ulle9lp%2FX%2FgwTaAAmMyrVVwwkJ2X0gY6pgEL0fm17%2FNi6fTCQGafImc4GQlodHvJuQMJiP%2Fn1VYHYE4PZp9HBfJtKLql3EXHdsJUhpe2BBwZv2T0loEHD7O9d6Y0o0ZMrvT%2FC1%2F7nG4yG42gZwaQ8aPTZL%2BOImpO%2B%2F7WFT3yFJ7xZNjKbNNFnYyTKea3VWNQwqIkoLFMnGaBNXPbQMYDCdxlr%2FdX26pTIjQuetd3XD6jHWgxrS8vxX8z4kf%2F%2F%2FIJ&X-Amz-Signature=7e274981655f354a9e4487df48ad59d35f54220cc54ccac7872f91aba9a61997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
