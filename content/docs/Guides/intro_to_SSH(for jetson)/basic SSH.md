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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZYHOI6P%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQOlO%2FifjTeKTtN5g73uf4n7Uc%2Fq8daoedOM4bWERqSQIgFZTt85sqYgICCMhnCDLAeyMHwXZWb3nIx%2ByXjdu3pRcq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDJyQ5nuJEhZtHhMe3CrcA6zGpVYUYYA1FEJ%2BqM5exFe3AfqkhOMc9JZuWtnJ4i%2FKeQuXjolLHH62hNv0L2tCNlhRnuHyZlDCN0BPfRRcFU3dGI89iNqI%2Bsu0zF545AyjB7%2FA1nTkQHslxVxi73kHsFMYW4n2RIXErY2YgKpsuwVFT3oICFRfcBrrT8KxEEVWlGnBb9E7L%2Fz44rd9RMy%2F%2BCZiw812dexZ88ir8k7nqa8BOq4oQZxUp%2B5e7SiWQfCMv4I5JT6T2fzjkpY58zH3bzQHRPt0XLZuuNe2bpHGIfcr0bu5bQAMr73eH2Z1TrQgzbIw9nfwZb8bFtJr0BSvxHvoMgqCPuWgfnRr4ydpo%2BWhQLvypZItlwAAWKNDWELzSsqB6JYh1Ygj6FzdDmjSBdasXSxj%2B8qkknkm5%2BLT83rVulgGobb7fXRF3koR5aMvkzi%2B0R3EStTeWn4KCu7USWxzGBh5bb%2F4wUQcB%2BL22KQ927VnIRSRZ%2B%2BZIJZrp7rTIK2DKH3BECOaTFgdAZB%2F2waH2Nzh6c24TuoBD1cBLpzoeVU3jF5Y8Hn9%2F4cooGZuIVQlTa8s62tfqNIf9YIHYzp04mJVF%2F8ZaiORjoDs%2BlgmGlA1%2B61peeLzSpx7wRcYVUwsp5e9V1zf8jO4MLb309AGOqUBTFXLRqtd6ZnTCG35D7F0Pw0hmHXsrNE%2FDezVvRqxOWZMXl7eYLDXUOUrwpu5qLAfMYeWeMUcbwrXwOqy0QPKu944pdC3Au1jGYzTRHjZZpug%2BHCVPN%2BOxMAaQIx055j3c%2BNnzDEKeRaC%2FTFYwBhMhEaWwriYt7Qov55xO4DA42cxlCvNKgg21K0p%2Beg49iyeDF5r5PYLEFI5MzEx%2FiOqMySn3c3o&X-Amz-Signature=8343ae785c205d0d2d60b91abb0082e9c3ff0e5ac94983296841e5ea418e3dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSRPP3O%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCidQlubDMp8JygPJpzE1qiLwDVoBzH1FGcUMYjhtQiWgIhAKwKIDl9a6dF8wA99q3Vl4LrW6zmsyyA0RfEb%2B3GBkmqKv8DCHMQABoMNjM3NDIzMTgzODA1Igw%2B%2B2onub7w73XWn3Mq3AMAAXffjN8U3grA7zhaE%2Fj8FOceBqzvh1iMi1PbKsYeuCTBMhCnKv1%2FNcqRwf7OyO9XGVY4szLsCPO%2Bq284%2F78ZklT%2FSDfq8RNKJfjI0vNKMxxia1uyA6slyNoTEH8%2B8bmlXlCCjyEV9iVz8TiOyqw52nRQmcsSJJqkt7b3yvhKFTkvOAv0Hi4REHqnz7vbzGcOzH1GhjEj5d0jlUc%2FO6oVCI2QZx42NOfuiZqDSFP%2Bqs0D2ac1F%2B%2B7MbX46XHYT%2FVy5zcG3AoDYxHS2NB130P9hwfBBT1ZQmdoGZzVHxbcbt9d1bLBg%2FCirtsbWzpNiZFOB%2FJDiKQUTlgEhJ4PLsV6Wkmf%2BRHkLF7rXIwTYG51e4XMRklsqZidKX5cdLTyMhxL0Mm3FvIJ%2FC5prewz1q1FtOkjcc0WMdw2SooPVzcRjowAvlu6houVXzKmYUi2k93cYb6k2DqE4F7FHSVbtuAg%2Fkm2bVHG5Y24wBan4CPLUzyTxPFzEXKCAp8irIoA8IKBsKjvez76Gaz8O0v3xI2HhtE2NWp4ydeASB%2BKOEzo5NE0vyS8PSBmUIDvhjRolVQXl0egaNClTeeJw878yYQqcM5MV%2FJkEO3T2fKpY3tCnj0ydppNrLuThTUqbTCe%2BdPQBjqkAQgaF3okFtoaTscxSKfT6tgSr567JLfITVLhXttIhnhRoAqKwhHavAiqVJrbaZencEX31Qtq6N%2FynqDhuD8IKNEvOp5OVZkOCs2v4%2Fyh%2Fc5%2FJF6HHpEmJfWo1T5AgBgJ9SN%2FfmBK3M3IPpbQz%2BPC1Cu5z%2Bcu0yZWJ6vTzPB%2B8uVbL3HUPh411Ge0tUe2R29JGi2AgKS7mdGIEsH1pm5SvRwn5Kd0&X-Amz-Signature=7d473ebc006fe98dba6d9e5f09eebf4a74966db9a0dfbe7c351e80381cfadf25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
