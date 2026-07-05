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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPDEAFED%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC7rDOwukGDkFcLo6YsHoRaWaaTy%2FLxdw5qiYJaom0vxwIhAKiKpQaDZHxHZGBGIMyBNcCDBjEoeMwwOye%2FxtinHYUEKv8DCDIQABoMNjM3NDIzMTgzODA1IgwJNJ0%2BDNBoIS6AgmQq3AO545QGeBpyhccH%2FEKIcW7NQ%2F9GkBeujMqvjMze4WVNX6ZtA2i16ft%2B4mu4aiBjMjYyr%2FwWjVunL6nW0g8%2Bl2nOZVyGB0jjAQNPRbD%2FcBRRYDLKcdY%2B0DypVCoqpSF7%2FsxYmFEGlQ9T%2BrxEmEJzNtxmByHij3XFCJAMrofbABEtuMDAF9F6OpfZWuj55gGGEssqtH20xFtkA%2Fpz20n4j8asZFD3qInp6%2BN002GWjr2OTo1wV2VNHCOIRbAUz2KRcRLFxfDuVfRdcG3QBEWXUmPG4Pt%2F3ul5MUM3RQCIdybdwmRrQgpyYziq%2BvNSj14s3VmTqguAEWfigGmJJlP7%2Bij%2FDJ%2BNbXbFjts8HP6nr%2FWDbehsEqJd28rMETEW62cNBmy5dcIynS478uglhhMq7kY%2BkXxVnC4UCvTOPDIHXQlc5jZHgl0LQ2TAxjvcQuBg4WiyCvT5mLtFcULmw8RITcrZySu2pj5jUMxWMnuj%2FiQ%2F0anjIvvFONi8Zxk3bexKuNStHmHgGwDtFNoT2XMpWNdTaxqhBM21JWA9tobeQXMLigwwx%2BieFxVMT%2BX38BGmKMDFIkB2uDCP535yeuEvzi1lE%2FO1nEYbeDoc3qPrbWDDqeybQpn3f28kqYRfajDC2abSBjqkAXDTgl4YHzqjLNz03RAygG1wwlpkLd7nYLIXZQ9G6F%2Fh1EKgFl0mRXE1yLmDNwpxlhxOMGtfX7erud1gOZzJudcuWcdYWnvQ1OyGgFY8fWzGFlF3Ycx4zX4MWJWTq8m0Kh4fNDkUOI7h1VtXK68Q3Rv0dD9N4eQMPjrGTKPnPneo52yGv1zPOqRSgUihVT9SVoQpWIxsDK5QZIPPyMhgdy%2BVddod&X-Amz-Signature=c00a4273766b0e6300fd48fb2224c7c4dd5b270d4b40620e851f9034dc20b9c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TBVSTM6%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIFRmMxbcno4eBxk4zmHevyqvLoB%2Bd5FHytLXMPZPb9iwAiAur6yX%2FBlSLVItFpcY3IDth%2FL5vzQNbKSI5f1lstKheSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMgY3TjtkRhU5nC2HOKtwDDdQw5T8jBv9EGX3PRkg74X1HIvmqT1uCU49OIftoDd6NYM3nWaeu8x0IYdNDacVuAQ2%2BVFwColFhjPAbPv2wHAQVX0x3QCh56PZC1c0eEs6Wl3DA833FliTeB4SOKSTy3OfclnMkSR0qoLD4kWLRv7Fiv43w8rTUx0kBu3Ve16Uht1v8nvIHK0Zq9%2BkztBWC5%2FRbr7RSEaenv6XiKSFaTMn8WZtLe8snlClO1HEA%2BK0bobRLIYkHNTXMfOvRU5%2FFAWPebM3nGsGxjkhj9VwynPQCbMHTBfhGYxzb34M14Wf9x%2Fcq9zQ%2FkNxlyFAw3PUnS1bVC6Oy6Mw2HJ5uvKT1MrzG4LIXnDM0w9Mrf7IA%2BqQZamKVqFNXiwY0nB9XG84VWTzig2PqwF%2BGrp126rCRSIx%2FS2PBnhJWQIxl48WQ%2BL4L3cg7yWiXwcBuRSwHYIYdiQO76QywRJrmj0JYkN6V3fX3Y%2F81al4x%2BUQAafN2vmaeCuKjAiYhFwJEphULqJqphERK7jznN2OqbcNpvgpeE0Ge0EkFVNi%2BQ%2FXZMvnFZk%2BIIyrYEXGKUDMJSxodyksRt5vmEmDHG97gNx0N0wtmGsENEt6eBxMoE1LxfzG2aok6n9tY8jZ5v%2BE45KIw7Nmm0gY6pgEtsDQJ6pt1au9ebu2l7YNDrJuyVbfpQ%2FsXLlGTFn8zx%2FS1TSQa3UEZIc%2FoRFWmhg1kYlD4X7HJGReNVkTuQh0tFs12p3LliYhPEYkPQFNibCseWI7t1VZ%2FKHFkje%2B%2BhrZ%2BTgAiv7SAQrvLZ49%2Fv%2FdOQXH6pzYvLsgQxkWmVa5PdbN%2FgVOSyllQHooq%2Fyb2ksNlC8WV76KG86CARIDkvOxTpf4S%2Br8B&X-Amz-Signature=dd6140064307f96b99e58dbf882ee464edce543d3fdb7711c5be59ba8300a2ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
