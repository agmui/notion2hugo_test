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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGPAACW%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCt92RsNLsdWoeYMnlNbq%2FC1hBeuaquyANndgQqC4XVAiEA4h6IhVPcqzeOa%2BxprDk2ytk8M0S3ILDNqvhBQTbLFaAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDPjPkI%2F4Fqc4KLPLVyrcA7uS4kmLgy%2BHFUJ7myBqyqo%2B9d8BnCXdKtGOusQAyWsm8Gb%2BOP1mgrtUuTHZVPO15%2ByRqP2zK2mG%2FMCJaxlHTnDDHEgpuzU2doS5dS%2BaCOBUGWm1xAKM9xYq5aUBejiI3kMp%2FsXw20%2BbDE59HDsc2C1d3evV6y%2BvFOldyObv1Xe9b5LA2MiZcF41gxj2eEuaoD04FFCupgWVi6zKhiXcGQ2K1I3x%2FCp139kBw5gvnW3SHxiuDsMhF7YBzjOwHGQ7go7BjaWnrn0TYxNNiEAJx%2FL0olhuPd%2FMbj%2B2BN%2Bsir55OOWBCJk18mKC2Wvr69XKfhHXgCs0mpLNnTvTNKhjUk7I511KbjSpqJMp3yAqoA2DeK%2FU00OY5uzYhcs3MZ6NcXJ9QtwARuRUTXYtFeQJqhvHZ375d53I3xoFM2XlNkUThIfQxKDVHywo%2FF%2FQ454jPPWMGjI2nUt70o82rPbGqJ83n39lf0jRbhSY82VHe6nVPkp3goI3g%2FR2TnB0JMNlDbcWy6D7fuBQCnNjt%2BiaEq5aQ%2BcaHuOCRlIzhZTZzl9PZUp5zcM9FGQwTB1u7i3HlC7JITFKHXW6UvFoq9UBkOD3mTu3cDyMaU%2FPAUUxBVjiT4%2BCK%2B9msJLcp2ndMNWxmckGOqUBwh7As69jKNTA0VzjU%2Bgrt1DOFfjwMaeuPfcdpkrn7WVSJ6MP49vywrpuxFOa3hngFvxG2fV8YY9BFEOG%2BQ7X3W2ncHBegEcBV%2BupKbatjWK0%2FGRntQ1EbA%2F3fe9UUMnRcspHsLCqZJcszfHXdGarZLc8yHqCHcAmof9D5CUeKOxpb1v7hWCv2%2BNu2i3NVOjzj9yxGl9XOtKP0EmDW3vLaF3rcZr4&X-Amz-Signature=e93834657b4dcf6fdceb6e4fb178cb58c120f4cdbdd50e0c7fcc9ff3c57fc501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDYWCGHE%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDU18zyu0Ojw7F%2B7feEgtOOF7cOZpVsAAR2UHAdLXZyvwIgUBo1cwmV2zGhiLGVRjNbuYK2fNDu2nGTwpuLG3B8Hzcq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMeWjxyYIOirgJgmjircA6NF%2B1rAy4%2F2WQjoQxK18Jl2dcMpPoM13hbDIM7PjmTKwRDKW6KhOV133qc1N%2F6mcgoqu8%2B7Qqbs8L6fdAzYTzh3mIn3CuDd9%2Bh9R%2F8tFWrtYzDs%2F0bM6ffbqPinB9i%2BJsU3QPaL33%2BqoC%2B3e7rngGLbzWDYcjAk1bStX646sf0JJb88xCKOwdZazF3f6RgmcXYYgaKPejHWwc%2Ftx5Z4N4SSHh8O8Ojk5VBSxQ83oFDwJz6zv8NFkxlU5ap2J9VnAvvFwo3Bjjbg8xgZ6I9Mm5DJK5oR6GGuzqJEpf9bsEC99jRbu2%2FERK1o7dtzQKxxe6flh1x9ufJcvE6X53WJchVjgJ3jmAEPxLQ5D6aFi72flVyy%2BaUw8GUG445RvHh%2F7RPZk7s9enzRqfereXguPeeirG5LMfI3BJXjNGxzu88aRqC0cH7NrmViige7HAB3Novq7ajtG6%2F3waj811a2%2Fh91M99jyvOrAxXhCFocbJ8WNUbWKr%2Bql8QQwJAxwIWnMpEjKDIw3cIvjZkoLhs0QbTYWxAjGcep%2F5Op9NaMChQI6NEwuQPv32q%2BEWGDyQEIl9fiAOczS6fMbKfgnZt4n2uoDpuwrgUT8MbZDy8GUnb8QRYEp1Sh2AuZo1jZMJ6wmckGOqUByaPQe36VhOeEynBjW6N0OvSQ74IXJl0akFUEIytwEf5sTB6DfLApx0q4%2B1uZxh0%2BVgCUYt3%2F7MlLfTNSu6Lt7uz%2FMzycT1vQG3j2p9ROnJIHENUZ%2FhixlMzp68soNdrCp7sA83T%2BHOXbWOKhAicec6zMWtDQueARCwGrlWJcTOLX9pAL3LRIJDBq11kVDDKtcHYVOua9XhOhBLDFdGtT3gHP4iRD&X-Amz-Signature=552301a4eb2d4e2046ad27c2327d56bbd1645a5fbe8ed0035f499c7cedbb9637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
