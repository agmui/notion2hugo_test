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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XORIDV5N%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCICUO4AbIHZMbjrIy0zwSC4p9vtbe7Yrq6oaCwfTL9YrIAiEAirojCfb7gmef6g97EmAsjWhhEZrUU41YOF1%2FW%2F0E%2FhwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISAhYyRn%2BbnRxkBLSrcA8%2FalKXziN3FL7uO6TOFtu8WfFLPPHOMj%2BOUjJuML9D5nFSnqhKOa8SYcIc%2B5ExjQWywqRUoDD5uLAjR0w2f3FebXqx51c3DFPllL9mv3bD62bSa7fBUD%2BFkX3ri7h0INuzkQq0%2Ba44dNLVSUE5Oy%2BtftbwEvZdyJxp81TKgvf2dM8pg4MfKKbMEq%2F9yKdFYpym2Y4uQF0oCX1M6vQF8NG7xY9pfz8tlvwkJbwjortC%2FimqpcK5EosCdabGZ3bDld6CfwXxrsyyaiktyGLqXwYKWBtfAjGgzvFf2LqhRMGghwf%2FxeXrwgHeTmiEsYZeEw2nOav1bcxYNDhUx4jcCNUrFHNmuLvh3pyNdvGReK9JzNE%2BtW6GxN2%2BfpVwhreqYtPyPx8FVxnznQjY5s60q7uGnj7R3v7w7ojQKyVtF8zYPWxIZjRzOe2mWGOOu%2FZ0GBDdtylclNHlhgICWGtnepwuiUccnGfHuteFjMAstUwdDNMNx50Zyxhz2aKF4zOIB%2Bh66jMqvUANWHuhZ8OdhIwMeayYJe9YzkjysjZrhG%2BOcdD2TOSrwK9H2gqIeySHX1v3zItCj8SKuSPihLPl5IyYamZfe33BF8327aSlCM1UaGYngtCZcfMFlt6dLMNqUv8wGOqUBVer1zdf4j7sDYQtq8hf2h5879mX%2BBIf8M73ZHEwCVSFGlZ2EEw6ngERoOEw9%2Fl4FyYu%2BEf9YUM6tJx06TgqR8Eg4TGPD0Vsp8Jq8EwQhgNAjzuK4UPm9E6Eh2ayHbq724mFbj79fSntDK%2FxgwNj8UIBfw4qndT8HmtzWb3I%2Bowb4dVBDQYR%2FDbYYVIbZfFBgecL8svtupiA8sSYHYgvoPcnaW0sN&X-Amz-Signature=0bd39aa75d012c93f9855620ff7cb929fea2669344abcbd4f714bfbbbbd5abe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S7MJZ55%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIF96RVV7RxwQQRnekoGgJoOk2bCNAgb80peRGO%2F%2B6Pe1AiB%2FN5qqv3iP7orw0xN18eLtTdTF1YVcEMSBLaZpAGoiBSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzgc89JbrbysZPw1LKtwDJTMSnCpaxh6NthqOkSbO6KtfdLOPFkDfiWSQkienVeRywMaM%2FfYIwBkFKxqJlXDaNJM5sz7l6DraJsHvcRt63oKrhTUbNTupyX4abLs6ZKR5ztBk94N9E1VNaQv%2FaGLXbsOheJjli3%2FxdX8b2NNv8qoRKXJGYsdTSUIWmVIDeVKflntXWGwZxl2SnTgcchK8%2BDl%2FU9CWE17LjPHCaXRrPlkmVvBydsRZfERHucpTKtcU0G8HypgqbfcijauO9aDkDx%2FaAseAUYtp3MMVdU7VRW%2F7FIGGBLyZ1F0sgZKExCP54rbjTk7oEqRgGJpTycz5ZyYEVKgj%2FbK8mCR%2FQTbh9z74vpqKXsBTWujDAoLvUbp8zdzDNqbX12u9cVwkxWhkiLHy01yPUjhb28Jfds0BgolD%2F9oAk8%2Bs891B3%2BrbKHm7daBwfVRjVN9mJTaEhfJB3%2B%2Fqr4awT4l0q7zA5WtuEBPgcURNFxf%2Fuz4sxZqQIGq8luCq8szsu83hOyvTR5QYxK%2F18dE51DqfwIrz28%2Fw0a9iwkHy5tTyIHnlG55H3Z7XY%2FUT1eAmjSQcx6DAWpAa6EZKXhSTXyVthJFS5NmWZUj%2Fkgc8qz6dWlutQMIyFtdrm6KoSKfAfUwUfF8w2pS%2FzAY6pgHFw0KIDd611HvPXDnktNRC9gx0IxkRnSnpk762Y0PMEgY68AHfipan5a%2BAY%2FfZZFa3DQab2SBcXlZIIcludXn8CvTgB2BJHqaAwjdN9IRTvF9%2Be9HUSZU%2Fv6gQjfQKriM3R4CecvFbM8ukCaHJ666YiWWy2DEH5D3eFyr%2FB%2BgN53SfzUYNFOJzU6gA6Y%2BJrCBf8iXNSrZQqJ1rrbf5Lm8Y%2FlWEjIa8&X-Amz-Signature=3ea38fd254659c91a663b65fa63a872e43b73d0b10f2d10305af8e959d389635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
