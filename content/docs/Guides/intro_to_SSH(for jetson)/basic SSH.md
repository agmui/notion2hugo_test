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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KXV7Q4%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwvBeNSO9xpjmFO1sO3r7lzX30A3kX8zws4aSbb%2F5dxAiBlhw5Qh3PYegMK3eVfAESRQ1KzA6QUFAD7bUIGbl5nJCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BcsPVlCV4hAU9G4gKtwD3x8ca%2FRVbrXW6a4pzgKRO5o%2BdZpjbctz9Htiq7QBaFBuqHLTUApbvld%2BqjMKvh9sGA436kBVpuNGULp6LI1rMQb7sXuMSRYHl6UnOVxdu0CxI6dQTPK59R%2BOy1sdgaK58NM3HhKYPD2N3aqibA930olGiN%2FkC4wLmrXZ1KT219jirFi8RlHJ%2BO4Bpx2iCQmsEQpIOQedTnCAP9zh%2B9p0NY9uWkjNB1FxR2wzyPTWBdNu7FK2hvceoFZtCfrFPeBhqzYuwN8ddbU02V%2BP2Ed5EXHq3SZw4JwWoWMM1UeE0J6lSM3%2Bag3cnjGIolhG3u2sCe%2BQtIfTbMuI9Qer9G81%2FIskFvfVtnq%2BOfelSKwcKUGRNIGpTvHmkVBjaVLfzjrzr5nlxaW52%2Blo2P7JvDOT8R0e%2FOUxqnYViwkWKha9xPg6ZMMXA4%2B8N0CDmhgYVXARwpyTZSauXKLAi4s5xC9IfH7A1c1xB96hyiEwj6DFYbHOFJn70rW08bSh7lfgzxdFRWKz05nAxIheWj%2FEvdcPbo7Fx1xXgdOpjC4hEyBDfS%2BbVoz973GtUUIcA0w3kH3b7NHeITp2GL7kgTtew582qBAizIIXpNk7lTMuOtW%2F1G2A2LYV6Fq0zz6b8nIw5biwzwY6pgFkBjpIOhqrenldKJsPkZJg2kHzQ6BvPyjqBjrwUOGXX6uAKmfTpVqglRknoVvsmRMJaaFJ77UD5ArhvGdMWZzY82D3ved5dWoMSeMVTPtPsQUi%2BlmGjdx0sd5kDTL4oIUMkwnmsn4T6tbTI7CSrtMF0%2FJ2Px5GziGkXpZkrCMdp6JaXBJno%2Fn76NYBzNAAjiYC8MEvuaxHsFPNjsmjnGAcY76Lk4Eh&X-Amz-Signature=9c035f15b1c6c563b57e2432e783fd1e8384a9723da9a1aeb17c434b592a8b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFMZC4Z%2F20260425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260425T023051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRNLFvrQL%2B92HVHgeysrB4lEmHQy0g7Lmc0BYGrgxi0AIhANRiyt7otddBScBI0OgY2Lkjeuy4TC26ZnVblsG6uirSKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6kLuVvVE6YDBWwZUq3AOUFz%2FXlShKXo%2FSrEFXMqYJcTdeXIrT5AntCRw5SloOwRneRhMkKDnIK2udRTwbacGPdH78CeGZ4zWfj6ReaKl1VsQWVf%2F6u6S%2Ft3ugtDU77RmqWxEEjuTVxAO0h%2FR%2Ft7aFFuzmEtdixB8Bfqb1kPZH%2FyLZ38CHy70PO9UjWEuNE9Hj%2FCLouNsXalJDe8s%2BiRm4VXpciSwEUeI0i9j%2FTss5ua1DdoyViFC2IwUAWtAY3%2B4HALcDi5Su73YrqOR4fRL%2F9ySOyU74uyv34tkLaR%2BqxfnrUk1dMphRtCmjR%2FYI9vmtE%2FCepf24NMiZY%2Bj704wyX8VDolJvZpMiXyJNgK5vjcoSfINotfrei4DshPlYc37r%2BxcvUP5b5RwPP8tUtXzSKDqd35GS8%2BSRXiExVE5hp6VaKp0w5ab9asYDzKAiUbN943PQjm0UL%2BLA3ehrFF95FGLe2dmSObWvIz%2B0CoIYr%2F49jc4D%2BlrEWTX%2Ff8d%2BImDfi%2BMgS18KM8KTXt8zXp6d6MSm%2BAIEGljboxcyfVUe5GxIRZpT6KTuK2Mo%2B7Lg23lwXz8RM0kimzyA2s1jxsOsajd3cHSGk8eJN%2FHeTkHVFcUwblst5ipPsMRzJsQCF4VFpLrd5bBHnP1ekzD%2FuLDPBjqkAUySKI9pnae8H4QyebMkzTIleRugcJySdsmIfbcuIi720IFe%2Fui4bSOERgMiaZxXuwMlAU4JjC1NEe%2FAO6OVYrZI24TR9SSafRHD%2BLbEmtQypHZ8bKEcCe8qs%2FbIZSRBjpZ7N8pBMxkoPDZiTDcTP1SnZnRMV1ep5PJAE9ch%2FjXnmWK5als9SHyR%2FpyJ5gNg1Rk%2Bvg747BWGdpgJbJiaJP1m5YUU&X-Amz-Signature=06c32aa725dbc47dc9792fd0c7590e0a2129ba0c57e7c3e500acf02ee9999ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
