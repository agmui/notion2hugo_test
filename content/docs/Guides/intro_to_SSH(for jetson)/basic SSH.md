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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UOWNF4P%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9J3oy3%2BCGCHiHMwUiKtGQ4947otphzjKIL8TpOxRnFQIgZcUY%2Bi1y44PwpyZ8e%2BOgddK3eU6gpNPSagDhOE7MxH4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDJ8I6IXMK3Tyjj3t8CrcA21311UymCAJZeGWJy1Wn2jH6Se2HbSgxwPcLGly7l9d%2F4zjA2K2vAMt6dAzzNX26tmoYZV%2Bx24j9gRY0cGIIZMZGIVqLxlT1S0BEfYSxLhAq8tL3bkhx0FTzO9QMqtxsh136jrjsNZhIJwpU%2BlqIHLZH%2FRlOxf6pPdZfal9M8Pp1h8euzNFE5%2BywdqRF81jkWn0h3OqDNmyEE7gqNgMqfOHmYh61os5naOJUQzUhEzAlXFXdyNAZAx%2FEQWjmqYycWGtYYaRaiE6RpVNaExwWGW34ZRsaQWr70gIE6Bvk52PZm4sWskk1N%2BRyiun73pUk4Yc7WOWR498N5ka18FqZ1PbMbkrYv%2FS4XXIo%2BEzbbPqwq%2Fv4Kug5Lyo5oAQAWy54seWvwQv%2F2t9BW4Miw5UeBVc19pPWx34VPk0a9ZGimk2FbBwyWFvMsErd6836QFe%2BK3sgvktXRnvOTMOckM%2BgbkH2fniNPMkhjSAek4LUkanpD7vftTHrVwzxMeVXa%2B8UQvEvkAU1LLsxfjYk7sUxY0nPxgjVApdvZ1%2BZtnhOpqAS2iBV31gnGEbhMzunxRZPLPwq5z5OrV1nraeLo0Zpde7Pd3ACskDYkm%2FAF0y9drB9P%2BhdBbOpLV23XtoMNPqn8wGOqUBgLBZzrMOAA626B2CeEK5TBIGxW1mBXSc8ZZVlyPb8ZFJ8P3vu6zBZ%2BdjoZWLcV96vL%2FpqAI4HLStYDOKdiAYUj3uo9sti%2BnHgXO5NOj7dkCBbUNu%2B%2Fj88S7RarPwU43FHsG2WPNBRLag4mvSn2chHAgbNOGMh2Ds8DVIrohroyHzll8AEP2Kwj0NzdsOWrD8qIjIgigY7zyAcFkOyMXi92wNLO4H&X-Amz-Signature=7940452eb6bd993a260acc1e478833e59058330152e01cacf512859a2a4b0a2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKSVWOAL%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKoPII5jr93vBpQUpNTvq39NJ9LBilhFBE9%2F5uSnANgAIge6J%2BbiW4TeOtvrytXjaYiuj04YcMb8IzqhkrRhlUAAQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLNP9RNq5ilik0Hr0CrcA7lNM0LQNDgSFsFlg6%2BRiUp32uOAhgXzHElCZDBofQzAhXOXDrjqndgp5%2Fo40Yjzt3nWfmfJi%2F2yBr1lTLnTzwJQEtbA784xmqqVXC7FkpSXXYdl1hNK1K%2BoZbvAn1PYPKA9y%2Bnx7%2BD%2BdU5NZfoL31vzS5k2tRUa%2B0GkXN81F1aEUB4D%2FtcVvQKqHpDjVRQQYzSbMcJ0azvLC0yNrDNCzlX9wH0laqEOR7o4wTLWylflPS8tGJbGuH0FlxR783sz2NyXox1HFZt%2F3vOyIo10b2xy7ujdsCpr5e1HGLs6YQOPPG4B54Iicp%2F9di4wmiOWJwr1b1DHaWOnH2iZnxQCdOgFvslISyN5Fv9ylHviya9sX%2FC6PxIdUgmm1eL%2FcZCNvfPibfiLmbnB8hpBf1Z%2F3C88S0OIMBT9Z%2F%2FjAk4CrV48KsKQ2Igy8r6hEXwIZSDv7m%2FrfcMiRtf2aWnnGFbzg2zdiL3HpGPEA6E9wIJqRvpbCpe2mKRkmxVK2Jc6trIlu3n%2Byjv0XrP2XqCovOhAbNgD%2B2SeBiyM%2FVUMOvlPK9SMq8LGAwUCEDy48b7rEy61mw45HX58gnPW%2B34NgKZpw7sbOld503hifnVa5FguFHT7r9R2F2V2Hi%2Bm%2FrnAMKbrn8wGOqUBC5xiZN1Ky8CLkTr4dNlucm7cvAC3TJV0iJzCQ%2BFpWIketGGb9Lq03phhefjVPIOU9lch1x%2BOnTsD10%2FQgMo8pLpkl%2BD%2B0nbZjcvvg2JFAvu1047ooZ9AaJRhTJe2EJ8zgA5DlHLoetUrYtRRrUXZ8cNgVea5ga2MocTN22fc13jS1pM0zNIHpCN8QML2YvIh3oAONWMUntEXjt%2FQun1SmHQMFfJn&X-Amz-Signature=b8d200f04b35f6cf65d56c6b8179bb0e7a66e2ecc532af1f48b3d55cb2b265d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
