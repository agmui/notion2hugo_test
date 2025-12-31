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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK7LC2SR%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdBHO7diwOF9LZFEPIoxpREAAE440kqdCVW82sXceaXgIgYDgp4TPoPuT6kydFepPQQs1WaJ1yf5vVYBwgKyi8nrgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC9drErTZhFA0XAANircA0dL2qzuQTe%2BguN92GMWqzmB1zReVu%2BeB2EkYkWboDjwjuMNhYp7z%2Fkc%2B0rDTdzsAUKY3OR4xcqrbqxIi39k41wZKfJIosxXekOiiOsabzRnzEwoqTyhRDnVgOn2WpcHksFFusMfXoMpam2Is7J%2BGCmKcxAWXrBvPp3z3T5TccEw5MhANetdjM9uUh8N%2BUKDhCwbPhGPdACIed6W3AD6AZDK5rPuHn1PDVwyC3%2F%2FEcHmS7gj1gdmHE7cDCtO7ikaYHwO8yDiA%2BOuwpCH0SXEbv9n5GG3TYcXpS01WyYlD44yHTwlIHThfm70IAAiv7poxLxbE9CiAOnz4nfrG3cNWEcTXj9koP4XyTKJK9spUPKB%2F%2F4v0BNPhgBcYz6JW4onf%2Fu49csRlOgRuEmd17UQs9yRCwI%2FPNjlaO1cUTVtI%2B1Rr7l4BCvOc9i15TEZtkdkAv%2BqV%2BxrpcObg1Tr04X5K8j2F05cs6jnbLN%2BZnDzRceGv1N1z3d8O6iEQ1Lh1qDRR9iflHcKswqRZkfAIhBJTsni6C%2Fy9GFqiO65VSYT1mRLTbVAeEQBZtHV1NFY5d836e5fwf4BGBS5cF19MQMTcuvcxz048LRKsxctjRaj5aUhWWOmvVYKTLWbGPTIMMTw0coGOqUBpBOp%2BIQOj580cNEadIaTWvHc4A2HYrGHMNBOZvVfqvR1aR081gqNPw4AEsU8dSo8qO%2FWKNIcu%2BEmDXmOZKOof6UZRfpdi0GQITdiMrlBdQTqI%2FZsx7v6mINXUZ6EZXCcrIkrQTPJQHYIi9%2BOBVsAYMz3B0fzntdQpz58JkVUhkjnNc02zmFibq8MZZM7j9vY%2BAKAo440t4vGBt0UqbmPGtJNS3Bp&X-Amz-Signature=73a6da2a03df8f3313f25dab45bd5fa8e94f169956177f267395463d00b97e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDOOEGI%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAZdXabMgHzcPNzAmxvfUlPpUxap8Y7sPZ3CWWZEo4zEAiEA0ITtZWxfJO5m4JpP2z24P5tVRBMbO2%2Fqn%2B46auwBfAIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAkxFPu7SmmfLMSHyrcAzj7nCgVQt8jYHRyvUsK6YYwdnMTvn2dZuiu%2B8v%2FeUWvmNeAyVFvXGcrhumOAbzMcnA1JUTX8rnTMNmkFTlpdO0bRvL%2FOKHmiQnGpdQT2%2BiLyJFYojy%2FXrzng7ZUkt2CPoDTQyb%2FySWYtXPL6m65V8B54yH%2B1ncld%2FY3kHbBAsHTBNZggZS3BaEs8Hp3IYzEyR3nuBwUos9wQ66J5Uc%2BHfSP6YfX5CGJsbUFLmoD4Ny4KUrR5f0o0SMSrtxc2XHYDNgeqsuJFg2gpBmrL%2B%2Fcaii4ua6XS1e0%2FClyEwwuNEdOClEiuLr7PRv%2FEHiOr5ErSJ4YCcyt62P86eHPqSbyGlq2doB4WkVRYpFVFTB61ml7fnfIJvUIbRYa2oLnLDpswu7RjLl0NRuh2QBrQWXdIH%2BTDUSz3ezoVgwP4zsrHWO5o4teyDmXZ%2FUCZ0jjMcIRg3Xy71RqFJZWGrEUjG1v%2Bxx90MVLvI4BsIMzOtL75ipcEFfJAN4ZIXeQpPxXEvTqlYJl83tVKnMvvrTkAeUiIhnvQmRp99yl%2BB8VbfKMQV0lySg8ulTmpMVWCsPUF1qm4lDFupB05ZJNcaoJo1%2BfuAXTyEnePioSpkizdFjq%2F8578C2kyOQhI%2FlKrdfEMLj90coGOqUBzdC7%2FhQOIH1tTIc0qehUoOmQ7jvDuRzNI4%2BytUCINW60K2UnPkTdcDEY3oxaKMaUk3WrYHt0Z1sbWC38qrgQ8HUeM5YgtsW4DJbhgxwLlmirOA%2FJvXziSQ6fUknxJLPloYubis5HPRj2SdgtxRpAbrXb5JylhkLjfHD3V6brWrGRvM973uJYbDzuzn9UqRWnpWDytkRC7XmXkg4DwhmnBo6nFrQf&X-Amz-Signature=025312a39f488bfca704f850af2c07d683a824fa68b7dee6bc1b9a6e5cb4e8d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
