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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NL6W2XI%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDj73ry7O6IlnlLim3gUUPXjwiSH%2B3t42HvxmiKbjHuXgIgMKwJq6DDwg%2B6zEQsgnL5SDuWLBDRBXibj1hj9Ov6GysqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOafIen0etV6lxWAECrcA9Q2iBQUY3Q5wp6GqYu6Okgx2Wobnm6Br7Kr5sNlLGYOZE6IUWOoXP3IUaW%2BgjfCJhYgrxr4%2FZ3EvqvGh1tVoZGzXyRdtP7zn9qSEarnS7cqSRgs1oxR65GEKrJZqtTRKtk2%2BmbaxOUTtkopQSdyNoqtHSk4hV6H4gURlfUHUVa%2BCH08dSr1p0A8yNquZSqC0G9OZ7TWyf22JLgwEqnZwR%2FYr5O0l1vZKqHwTzV7wLulSC0PoIPeD3eT51SNrjKFF8F0iVvXPjB78RmPcHN8YLQRSRCKCj5NhJzjV8m9pgo4MdXXjHVuDTlyCcnmTEBdNKMF7dJLKmB7FbNItvRVULGQfkNbohf%2BMxWsIEsaWq0Sntae7YKwOx8qDPWkKjFnvpcG7a7kdX%2FO37wgibVEVBPQLYK6ebasKeqXJRY7d0uS0NS%2BLbr6XtsL4a7H39b7J6OnVj%2F0wPGLs3jbhMYiktYjdaoACEDpetCqZrxlYrIXCcD%2FXMI5UVXK4%2BwPSAKb8%2Fd49ozDh8gG7U7rtcxEdtOlaSXtXPEzDbeTKPNR2tLP6R9dxznag19O1XfYYghbJEH4mYPACNa1DCc%2BRD68nw0w3JVsKgtry6khSwvBFm414jEnlOMK%2BEqe9WnwMJaR2M0GOqUBh%2Bo1eOAZjKeZ%2B0BcrnfXkELKiL9D8LLJHTDksk0C4Zbm0kaPlY083FF%2BYXhaGOS%2BNnrbq8eaRWvWH%2BQ5xfp2CzQ5N9ysqFxjjsPH6bWzIRV23JFT%2FW6oMLST27q9zvsUPX4IWD5RGWEqJAve4XCWKCJd%2BJ81hCGgPhXZhCsqE2jjbAIH6AgpqIxKPzd6qdosQPOoOrP2I1pVlP3YMeVHZjAm8%2Boj&X-Amz-Signature=e4317a7f89069b159f10d5356031c9f67c989b659cc98d0fcae6449477b2e903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCPBXBBS%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGtE3yW0eJn164MoVz%2B9ZbGmbeXTRXIOaJqgH0XhdgrQIgaeX7S%2BZZLC4xLovD%2FwPoYWGAEYceVBFMP8C0r6aUeaEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPuBkxNYkzoHsovpyrcA0Scb6J7MEzlSJhNZsxkgibDsTOL3Vru9Mr05ZVCH0f%2Bw7WM5v38Ft9M%2FvRWro7U2MGRCT5FQPr8X8xYMvdOEFP24iOgX%2Ff7lUffpa%2BIQ9%2Bfm7M23rNcZZ3hCAQFkEID1TDZqU10bvwelYweDUc1nYJ6RHpU5jZ7a1tlJ1JekmdRuaiOuO%2BfDuvt8cK0fjFVkB%2BIV4ok620UWVddGoXTiFPatgD6clKIMSf8enMp4l8QMyayhW%2FUFfK1V85quyG28ZN1pjp75vWthexnDElspTfZQorzNDxP8UEv%2FXhWvJlQmbJ2f63hFr2om%2B0QI1ZetTbBZxjO4vq2yEYMAvqT786wN%2F1m5K1ZD%2FmbXqmCJ3zjiNbPL9CO6eMMhOEEtlvTpCJfwPa%2FJgEsYGRCcpNttZzHJI%2FSBgP4VQ02HLjQdcDB7GbSOQTX%2Bx3lQEJmbNVOnRyFQerGKTeuWyuV%2FYluzImw%2FZWSQsEpYW4qTofP5LpqnPxTHZyja7ywyts01EafEr4sIpsvdf1pEqICT%2Fr5hRxjmrtwYsyiK0LBwU9UTPYl77VttlxEwnRcdZV8vFvM8DHxU7IktPeyPHNQiq9Y7tVebsXtji3jAsrsCxKbR2ip7VVFmtiOEk6DmEQvMJqQ2M0GOqUB2JXNcv38XpEZzkzgB0KNdbYS8fRecGi8fsau1YZV46YVGEKvfdDydvORYpDrev%2BGlVkIwLx4QYv3M5HfuddmEYxLvh5Q%2BMDxlyE3rGOR02b6f%2FMsR%2B2RS4906fJKGKXCrQt9spBrpaN5UmGExlEUVOppnxz8U0YkJnOGpvcqRHCybf0lL8ZJY19wClDmNVDxJYsLIh9Uh870k4v91yO7WuWZid5D&X-Amz-Signature=c31e7f9c6f4e5f2152e785f1587a660a94c1d5c4e5f6467ad0b1377cbbff2390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
