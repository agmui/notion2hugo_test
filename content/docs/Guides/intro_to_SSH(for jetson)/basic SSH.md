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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLCFXRWB%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGar4gS3G9A1ViHRqO3yLD5etz1qpzHYwqSMOzyXjxOjAiBdHzQ7XGMAx1moi5XIWg4qqmwEH8NLNBpKglcTRKwPRSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZDs2L%2BGDxCPQ3VJPKtwDwd2GuP2Ob9sKrufofPbNABPX0f9LdxcKuwzFRcBtHlOghNupQq8DnOdOsgtxnlmDhdg7WixXN9YNbSJdOEU2MU1nWNZpj%2Fehd9wNzlpXGgNGf2YuSzWiSixuisPd0GGTLtgpioJodaHFMnZIusqdBzhIBJFlKGjxIT3bzI7XtuhoR8LEUkwwXjKpZDK8ED%2FX8MHZJ6VXEhQ4JeLz2MbG9EbfyocUJnc7X8tMYd%2BlmyYNGmfyaLjZhBBPK6oOsab3ChhYFx%2FHU8VfF2BdkDZ3IdglkfPnYgy5NXSfBUPujoSmCrvt8LkMLxKv7QSqDu6nULd6dv2%2BWiPIZRoNSW%2BenTFCBTXawalRJf0sGAtpxu8YWe9wXKwrZ1yVR58YVnciLAQuN24Cjg8wlr59g4RUpsEXCHNLOl%2BaIunGn1gkWvT3%2FsS97acMenYshS%2B8z%2BWOvC5UZBry9eOYN8fsNGLFmcmHHVCmCo5clQU9zAod%2BYA%2BCS5ev6hlyyaBrypVqeU%2FL3GbrEStzqZDBCOlcEmiYr3CVnp8crX5KQm99xMxfvf82r6yq6FjRnZPyNkGn9iLtWL41IbjlMlguJDNHmZHZI4mF3Z%2BPTtqcxj0VbSSEq7SEsyiUISSRSoehJAw1J69xgY6pgGE%2B4b1W9WBwm7a96G3jUpsrBqVcE%2B%2F%2BxsAi0AqCaYe2f4zeWSA9q0hY0LHq4PRb4jgVVhfsbr7uFrRCPII%2FXppsVz697S%2FO7TUmRetj6UyPK4eJtki8GvnSDWFmb2a82DxuuuR8N%2F6S65kM5GzyULsPJrcDAKOkcldqFwfNvFGPdxBNIQouH%2FgijegmTk7LkFt0XuXs17nNf0lAL6b8ioQOcL23oXX&X-Amz-Signature=512a409bd24d5ff0c9a5f0248d56274a769972394ad89e6278bda4896891e5f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QVG77FP%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnb81pFU5%2BLbjil4PAn8CG%2Bp%2FYLzxXsrDVz35tAP8A7AiB7YvPl0rR8Xeu8dSqmXzM4RouQCV67nAw1Lp9rrask8iqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbJiOa2AmZqOqqbitKtwDWgG2%2B89oUFTrFH%2FUkmbIaISGLQ54cX0AKKu0UGHvll%2B%2B%2Bu5JOtGgQOzY92LV4vdJXV31k1rjM2CssNbhBe3mxkzvIwLDJA2f0iU7cnVxA8PZvkGmclgNdcFcP2cDTRWVSMHB2MJmjQTeSucZ9H12aS1DVDzbXQxUUeiFfUcjSNZMjb0Jbn7KxohFVr3cMZwjgFbhFCxXugWezZRdYehl38UddrJ5oQ0YwtCe%2Btb5yMlHQsEyRM%2F0cjQr4wgl5K8eFcmeRETdA8XG7UrAloyviFTa%2FQ32zh7uXBV%2BUjPQ1UgzADnWIDfEgWlVBR74QqX3K8MA8uAxDN0sfPOS9i57blUYFXceGwEaUzjYN60GTI7jPg6OohoRuwb0n4ay9MXJMm5fLAGj2bwk%2FdOI42C7WAFN5B4R7ZeKmNBLE5SCiYxzZCFNPRrp41pJ50NnqVjniYcNENncq%2FIbC4OaRBYfGwRu1SNgcKO2aWb5Oeg9Q%2BYHGH%2B7At4XfBI30iY6JCJkH6aH54heX61Yy5t8tto5w1XYB0NSLGaZEpvwCg0zil58ima00ZdTgGiMb02W1uoXVMMvby6dd7uwd3%2FQSAMaen9BgMbjrmhghenTYev0zscgti%2BfSUnqtW1vPnYwrJ%2B9xgY6pgGKdH2o9FGwRVpG9AFuP2aUqiK6DP44w5htvlGTbTIkpvWYxzEc%2FEppdwACWzIiOaBAKDB1sBpmDxf17qmn5nnGemeVvDbInM9Cjl5Q09DAZn1AWCmRSym%2FgF2CTlxwYhCexyXB7GieIoV9zMrT4mCIcumZKr9c1z4OsdqFkvBYqiE%2F0m5vFa9TzrexPjnwON5UShfQWmZp%2BcnSUHH5k1ZIBPZrZVD4&X-Amz-Signature=21b145642db24deb74f776b4b2488e14e1add29221fe997c5c51288c6b5add1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
