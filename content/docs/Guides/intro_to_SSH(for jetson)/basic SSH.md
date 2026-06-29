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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG3QYYYJ%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCThAf%2BobObVu7CjWUwgglD8SNMs5tHHJ5%2BMc9q%2BRJ8fQIhAIHSVy0Au7im3Kk2VsSU2L98lRUadUSCigfuoEeE36%2FYKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzrz%2FGz63kh%2BoiGFAcq3ANS6h9NzCvZG%2BHaUN2sf5Gk8IdBkwj%2Bz%2B%2BqKx7I156n8bpifazMw635tNDNODjKo%2FnHn9b3x2W4Xmxfmc8VEHExIfrF4TF7ocDSc2CIdk5BobQup2if2c7t4OoG4TYasEZoF%2FgRotxgls9Vxc2b6e%2BZgxinDR0VvABOjmG6A9anvqHbxRttitm%2BxEGmCupAQVeEeOjHGTVFw56iRq1UjeRe%2ByAvVoSHbtpI2PudYM6pk3Zwyia%2BqdG6Swf1BXEe%2BPR43uFZNVbQVrsdFPwnlpV7eFLEd6CH4g7nsEuQUNjt7hEz8Rrx9EmgGbFIu8k7enr3KweOJvZEbmWTR%2BH6vry7oRKFAhHiAd2lGXco%2FEtGzS8RU9x3vxVhgsb0Z059yO4S6OC%2FeoM4tus0%2BKr6S1tK32WQHkcNgjujmGKQajdRg5slBSDGRuOjsq8nPXauiFpbQfbBvtp5P21Fv55EjejNQjS7wG7eGIxTDM%2B4ZRN8iUpsZRtO8R5d%2FN7D7LZKUmw4mPlJ%2BpDg35aUg1cKiCqDGiHad%2B9ykYaAR0Ye%2BLdpQMMwnsdE2x9ti4%2B4dDA6kHKPpgeAXPy2N5wTSx%2F09q%2FYiTEXSiz5%2FYsV3LttHqyzVgdUEjK5GEskkw498jCX1ofSBjqkAXWQrpNUFfHb%2FNa8OAIG%2BN5HCoF4xCc36eX6E8XNJmL7n8MG7Qj5CRgUOtmHWCR%2BifiwNXh%2BudO5jVxNz7HF4CEFd8eAG83P1hwqYaJePhy4%2FvRo5cjNiQlxLMguQ%2FQL6M%2Ftmhf7D4D624AYLsM0WPWCuAicZZF8MLk%2Flpkle7KjSd5hphLrW28OXWIOZIyTLY2di%2FlUs98u1JsRnlitNNO5LBE0&X-Amz-Signature=341f081b935b6cdb2ccf70c9f1639954727116b325e1a372b57e3f9779932d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTRQOGZ5%2F20260629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260629T035754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9Lf1EKJoBumKuQ4UicwMuNj3H1soAYsuLMWWa%2FomBJAiEAr4xzj7%2BnsIJ02yDivEyCVeVEzkMRxWfaF4hAsVz5bVAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKa%2BJhYmkbryFQjJKyrcA47X2LfF3MafkV%2FJqVFM%2BFN%2B3A2qNA8rAA0hiHVnbUMthuBpd9WcVI6Uok0Or05wHyEdf1ckAZQtdNNKkySCr6Yn9HVhK%2Fw%2BbysZ3z6ZIx7QHfPlVWOMkbyTfhN8pj2cjGu3Gn5ePL%2FPuqmfGZcG4eawIBZBjzuHZvSUJVICnUfRGVjFq134wSPK7Ud6ou6rtAgMJ%2FrARYcJJWoUmEqW3CAXWqJZ8LJ%2Fn3OiGledKqnmYXSbmyUQPrF62fXJUHnubE6lho6PhISFp77NMePArjEN%2FQgB5ye%2BvJA%2BHr%2Fai26R7uk3R05LedFtV30xA4g5GK50b1EU4o9w2dnUI0056BVGSSbZlLn%2BSx8hHCXaRR%2F92QYGHAq0fuxWqPAWYCE8QxmPF%2ByHcy9o8m0JHBcL%2BvtRGZvvSOcj9aMKLUID2EocSpNYTm3CZFGZXDh2uA%2FydBH0kAhlnSFdwpinQAU20CsNhi%2Bw6TAzBojxwsjJF2Pkg4wZ8IYPuoMD437MRc2qxYv%2FQsH%2Fh3aLu7no82RCcA%2FKe8AWx8dhwFBCtK4vTHPkcdYNXTNAPHO1nBNm2P7VNIlj6LUA4Cmfr66oCBU7UXpkgoiQHuYHnY4qPH0jFZHD9BXF9jvncIGyq0OLMJrXh9IGOqUB%2Bh1UDvbey%2FFu3X5VH6NcV4uPINliB%2BTZzNFifD8hyDVEPVVrM4aW%2BWgCPQfA4CVxtylKndVhAfHzvbj730FtntS4qhhVdelkm%2BmUaDXRPHmF8opsnggNVygeqQhAAOmvMV%2BaVbD%2B4mocf9kAKlwXhlfWBwn%2BYg%2FjaXyjkwJpaPrdmi8eim4NHywEO6gULyuRRKPpa9QKzb2CxAwGVo8TfoFCYvau&X-Amz-Signature=675b7ef807be8d12c515a9963a172a29895131b0dcc42c79728bf17783dc6a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
