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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5DSXXIV%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCfcJTzsAgz8b7t%2FFwRsSyvLZvF5pPmE50LLs6gpPl8zQIhAIK7xrLs9LblBAuULfD7PA6P05TytRBX6xQuewMfLWZmKv8DCCEQABoMNjM3NDIzMTgzODA1IgwE9lAaHOJODNAwKhEq3AP0ADVmCJUW0YNsaaurMe7RcEUctd5vvWq9vDhui7guDlKwMcPYEkEvsayXmTsqIS1B9%2BBZy5dqyeVSN9rugJ%2Fnx8yWwuz7cn3euAmqp9L1tKp%2FFvghk25lZ3F4ggdFjzioBhUQ%2BRdy3J6P6HZUKEbjFSTV4Y0NxUF9pU3%2FdhCU5lcarYmhs%2FTE0QG7Y%2BYEm1Ed36ytsVNoe2yujQbxEHlc77ytidh09e62LlcpXx9%2FlLfkvZ2n%2BLDArqNleQNVO9Vkz32mo1qgSwGc52QySLKIVHPvEITCTW6gR9a3cXTcyE1MuW9iAHxEJxOEEM%2Fm1uOQBHFuW9eZjpX4gL%2B9MJrThUkz1UtEmxI2LKosf39fgamkIPrYEYj%2BYQz4xawyYaB%2FUWdE92Fkz0P1O3Pj4Gj%2Fb47syPJGjEpOpAYvFQGYWWkJp9QUGYKA9BRQX1k4aMw2YY%2BY3zsmZ8o7%2F5x2J7y4lDQxDSM71CfFeonTZ6m9mttLF7zMSQj7wSpe1nEi1TyL59vJ6b3OPEeUeDnLqU3R7thly828cXq9Lo315Pq%2Fpn0tB91nPrrBg7%2B%2FL04YeqWKcZ%2FROtx8IUZbIxBEqwZba7asjL064jP%2BcTtsdNNhza%2BLeV1%2Bg70p83PZFTCZ64PUBjqkAf7gE%2BUtj8K9HO7dCwg%2FsjyI6N2O4A%2F1UUQVfP1SziixDc94gTBVQD5ldVL3vBSALeXeEV8UbuUtHJpDd4l0cIboQtQeqd0RSnt%2FHgsFg7ezBoyfdYGSq3QDwKdn6%2Bhs3ds1gWZjCkI0YrH5stS0%2FYOclgO5mXIQqUzCEZbTInwcI87au89I5UTVKGN0sEx1BXVsCFXxPzy4LkU8kwXpUi7vYLyy&X-Amz-Signature=4f0840eab1827ee8019177edc983dbbf4326964375fee45240079d2032799119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKDLNDHK%2F20260816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260816T011750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIA6ZTRXzFBN8iED%2FvDeYyFy2ScffsG31ozB0%2B7ZuvW9pAiEAxFUxV2FBUTA2CB3N1by%2BaISNVQMfJSH0WClcxn%2FQMVQq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDAviwQ34dlAm2zEekyrcA%2Bzp8gGPSuCryWE6UIK%2BVJWmCIYHvPQMTxQFOsLLnn8ElTlw31z1tYLRpXBdyZdla1y20ZFyDnpqOzg4vdmiylxcJbFKJzEKNdqIkC1x8%2Bw8yotQ89QPnnVgx%2FEvWeeMHyi53xTLhnLWaQ3%2BRewRpLOZIAgo22J2XxHEA3NFf6lqxZmk%2F9GsN0HaSMP1t3I8%2FolO0Yldy4CmO7DpxGQSZfyQpdjk%2FxGgJiogwk%2B2%2BwxyIXmTe4B%2Fw2yaMk5uh8eNghV9DKG99dVWbYmQJwIrEq%2B4ywnCLut7u8KXcswmgFRBfO%2BmYzn6a%2FJeU00OcYpP0Dq2BzzphB6oVuTfRwPjBXiIufFChiBcBnLQYBrPutYueBFf5M1lJ%2FpXnZBs7KLRpRUuWvyQNbDzeWb3uPiCJfQ4HGxM3cPSa%2BoNMwKWMNbOE1fupPV%2FaaDvqkBuZWXhyvY03razYf%2Bp26VYNX6QxMp5alWDemUJlY4cXIUAp9zWPKJxptWWw121mr0BxVcuC26W0sOIkwS3uuzaOnI571WNCI%2F4v6IIpiUUHEDi6KTWkISEKxyccNQZlMLlMwd4EFoh4W4aet0Nr14nsB5Phohi7ywoxlY52obKcJuHBwRTwy3baArNsSsNpNKVMIHug9QGOqUBiN8uU6EdbRHy5v8uuL6BXruGAApV5o4u2wYvaU7dwcngvIuExb%2B7qQfN7HuhLyQdeC%2BCDrqOFdQcfFWc2yU2gVNwSvSLp8%2BPp0gnYxyWN0JwyVVpDw4GHixvv1XNP%2BEIu3VEpW5AOuqFY2S3rd%2Fm8gH%2BfnfI%2Fhx%2BcCRRmf5i21K4x9Hr38kVr7zsS53VK6lgiUCgwmiGyD7yqavRvg2eUmqXIFUD&X-Amz-Signature=52feb92dc2c8677abeebde6b4eca6460a6081251310f8bb721be76dcb64df256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
