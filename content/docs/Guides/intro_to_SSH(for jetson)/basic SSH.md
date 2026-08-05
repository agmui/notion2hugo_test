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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HKMUX2Y%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQCziho1Olw9qyWWvh%2BLPh533LSu2SYOAtUw%2F8eNJANDiQIhALmkOqz1iwvAy8X3upP0qxKFzEOItZP52X%2FLyA%2FsFeIXKv8DCBoQABoMNjM3NDIzMTgzODA1IgymgvMz0nb1TMcJewsq3AMB1E4vHw0D4X%2BxV7UB6FpbMWyt09WTiRCE6mqnJKVwqat9KwwieJVb1F%2Fju910SEhIxH43pPwm0JyIcaQ5EhJpPlCFEsCYwq%2Buz2z56YwIFSFyEAM8G1HYsjgIquX7y5sAOvHVeijJhFC7VfDY2y3oPg8qxqB2lnyJBzGpukmtgDiyg2kWlCdr0MDrvksM9NxgB0QEIEzvjdF0jcHmjZ1PO9hiDlvl1Oqbm%2FtXjtSXCKRsrsJowX%2FmDpkjvroQh%2BC44W0PCExhpf6JZpsSXPTxKj2cuVk1QWZubZ5S1jJjE0%2FuCJAojookjddzGDl0hcLOSbHUVdKI%2BylAXU9rUwAM2DiSDlrfPl91NtgAq%2Fy4txyuRonhvkRpM8XMpv3%2Bxs6RhFbaYRdRHPIz42fgAz6M0KQOsn6U3EKSjtvoy0PcrfFvjTXUWp3c9DkTJO1Om43wvrczqwzccMpBn67yKNGcMkf3cEDZrR%2FEe%2Bl44HQ0KOud63O2b6xGEXdMaiezTXletBCQcn92orWV17G53S8qSV2svw2iJtuJ7uEF2Us4oAWOOphRDHRcKiXxDrLiFnIsuepP785W7WS3aQ%2F9y3Y7ZZc3bJFcmxG%2F24FIDQyztXKJ8NBK4xVs5n5DpjDUlsrTBjqkAds0ue4y1CvK7icHphfwu0iyAGt3nllkQnSMzQIjAUiucoogJ1gxxFeelyHypGr1dSYsF5NUrtZD%2FBvdskx%2B6M26h%2Bilk9AmJ0cROm1KwObGwxcfyltud%2Bq1cZNjIQ2CnHGy51tOrSeMC7ADDhMWJGjzzBMyRmp9AlvWKSi2x%2BXdXyZvJ5QdEpqKODPT5AD1YkdeGOekAbBLYxTsU3%2BrMj6DGNrK&X-Amz-Signature=02382a5c1f6a16969c9d0151bc5f2ca6facf61876447951c263129f99528ab09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQVEGKH%2F20260805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260805T023043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIA5ffDMuoW0NTllpFFFck3SgjRQlwu%2FxLy9OsgXUhjk%2FAiEAssSdgLaKE2NkCwifflzHsS0J160a6LKq%2BL8vp%2FN7z0sq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDDR%2FvGeRtR%2Ba4s3ytCrcA00TCw%2FUocvSQlLBn2sZ%2BxPmPLVjD3D9yVTXb2OSyOynT1egUX1Hiv5%2B3ixH5SwHzFQh%2FXAZ%2BY7PkyCAmfy7X2BPCz5zz%2Bzi7aMC0pFtMdBu5gKH4eMXNbq4U44aBh0EuF0Acd3aDanNxATx88xKY7dgyV4006fJKdXU4LzRu6IaCSkcdmp8QPT0Jv%2BOLAHrNL4efFNdL9%2BPg8Jsyd0%2BqDzyIPJhcEYtmVRMi8nU%2BY%2B1kcAjglBH3824J2iIwMgcOolVhHyFlwvpzinJPvxb9HxLUVmmGlVEtT7BQ3unlkgdirmjyQHDsVv30xH4RDG4NzN1%2Bw8Xil6hadBmZoAkPtX%2BL67jc6OOhsdEmK9Y8jFo4tt8gbkdLBQiipNzdHM1GzYPG9Gi4kmCfZYbmhmmPZbs5vx7%2Fx83p%2F5GV%2Bo7XroNaiLWgnFhQ6GUZeLgEEPxpMv7FeXJAvLaS76u3QF7Pq%2Fva6Ua%2Btc0VSdHytXiqe4W6Sj79RDfdQfusFkdgXtMj7yFiCKSgrBzualriazedagWysxpy7it1seNOYLxmRAB304aceZOpp44Lv0ZhXd9sOIURQCVbG640ziPEiFdHrfbLUNJEZ0u1%2BPCNFLAcAFyobQT9MDWzbS6Vkb6MPKUytMGOqUBs9aMLlmefa1JL5TS5qQ2emUXhJ9rHc18qD7lVYk3B8Q%2Bg2KemEWQcw6p%2F6WMhQZ66NRLbUdkQe0ofpvlDwtpGxViZbSrF24%2Bl2A1f%2FuvMQYZ4xcb6F7X0SclWrQgZDMcBb5R9riu1XQrBzrfbDig8bOywE%2FhdcF4QNZRU%2Fm7X6ickIZY4tk8MUFf2IEx8segxlrBsm%2FlsFfpGnGVme4UDUA0fL%2BA&X-Amz-Signature=54fd3cfa958178708bcd1bb03d01e5695652204b7ca0b8d4bf0faf77c273a624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
