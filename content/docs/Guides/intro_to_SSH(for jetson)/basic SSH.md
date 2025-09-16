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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZRLNKRS%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIDYm73MDPXDgya5ALsy%2FAIu2Rl%2FE9smXhg%2BQaRBmcSrWAiEA3PskzWc2O9aAjsZZsamtJac1OQEa0fKroHwp9H9oH2gqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4r6mZexVgpbpa8qSrcAxOs%2FLEJ6kO%2BW0o3%2Fl%2FLzu%2BH3rxi5Q8%2BLmcQ9u0yvCmIkd1pD8N%2FVPLsgy1DqtAlYtiZ%2B%2Bm6J5HX0TO2iDIforh%2FuOl3tjpiFjr1NNu6uBlHVbCSk9OiJC%2FHCyA77Rsng5P5Kofb3trVBhJUrDwWKB%2BrUp0C98jBVApfKtyIO9FBZPvEFYKILeqysobIGEqN9JIEHPFZMq%2FBOdwcvH5kMGCcdxs8hGJBQn3pGGPedj4BnMvXEVbnbymrtRt%2FbROdFrhF5KXGfFCvFcpG1fI857OJq%2Fw8ddLbFfqdrPk9aEksO8M5gqNlcK6W9eJ%2BktQgq6myDgzGaTrvny8bc7KgemDnvmJEBDtSqQDzMwma%2FASSYUfY2sTST%2BUFWDJdOAy7VVwNWHzGGXjQmL4rqP1Xasn86ue2PWkHfr%2BsnoDh3QhfdI3x%2FgyZdd2LDOqlHQfw72Y2r9AkpbjRfiTqB%2Bp1lODJN1KNICKKXzYQK484RueEtn5ZJDAROgiPMuvAxib%2B2FYKRLHkizxOJEVHrJiATpJG0ZWsmdFxM%2FCLKtjZieiiVyQDgTZjs29pCfsRvc7MeL550yQ3gbVbpu2LbZ4qKWAaCqsLqWswx%2FJe%2FB%2BohPWmPtYY4RYFokSRa1DRMKrwosYGOqUBpK2G1Hzer0P9nlM1kOeRpgQUoqMUDZl3o3eeXm8iYCvDvV1mmWChuDF0B2BTk6e7u4Y0MnOM3oXRzawgpZDbGKBP2uY25wNEeuLfDhRUJEeP0djqpxxS%2FGRREfuQgPWas7aW1Dfddx7t9dpUZoFXhszgpV27svTdfm9Uh5RV3i%2FlXX2PVvnjPqjpQYt4G8zSQwJS%2FcYRu0K9AGBMSEA5McYB3GAk&X-Amz-Signature=f346bbf857d423978a6d2cf41ee06849a15e609128063020d4c88176e47b1348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YZIEQZW%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQC%2BI3%2BejEhQki6bIwjwviwPDrjF9IjnfP2%2FMphjJFoemAIgXvmIDnX5btx7C12jxjSg1Y2Mg19V3zarbcbqslQALuEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGxYAKvA5MBmV%2Fd3lyrcA%2FMyE6lED4onsVzt1tE7c7SNmlvJdYwEFYCuFyrimu19%2BTpyNKoaUKmUJvwKalFnZC2LA0YAqBu1g6OAAE3Fp6i6TIgqgoXletcm5FtjNJ79Q8D%2Bl2WPYBWkZqCvwaEguuskCD3HFy1WDVfChCM4nZn5pYnpx4x3TOjKzI7RysGZOn7y6DtjE217f%2BMrJz%2FD4vQxSrDtUSlY0TeuYcDTV2%2FpE%2FxFGEq1aK9X7iFV7pzyK2iN8UphND25J%2B8nr0WtgCEcbDCdBPZ4FYuM9JYMio%2FG0X8vVzHCQC45LPqVp%2BggCtjPTBks1c3wfwAlvdC1tvp7u4KMWX7CKyuk%2BnVSVYXVVa%2Fu6bA0nFKbapC7zUTdrTY7XMGn%2BsJnbdKcGtuUZUis2fV5y4d7E0amuGwqn2r3QApNb32vy3ojSqWPxi5vo63ihrXN0wHacCeo6oSqjxBoFG2D6RE%2F7u9Og7VRiyLVNA%2B0cRpYR1BQ6Z7qhSf1s7A4LKET8eMlnQJlmOxqqWQ4jGhtdqyW851%2BhrEdKlW9CLI05GMR0JDGLh%2FlT8R2aH7Q61a6MHHpJtz9mkXgTFTse8jYOKa%2B9AcaFSAGS12o6b1Gwk%2BZXRW3zAz8Mh%2Fhgd0a8lOjzzpRLn4iMKvwosYGOqUBbv1%2F5atxdl1Ve9oQm0pfof%2B9lkv9sSh%2FhuvEAv%2FYNYNAaog8wlWVtUI%2BFkz8p4Gxau82MJC6wOkEYTktQtXsXzcWjOA5oVpNhQRdJKSQjxRRSJzFJTnQSFmHvmU31WA2Jfos4wzuaPTbX2mouvf0RkCQ3XBx%2BIJCw%2Fo2bmmYJKL4nZ%2F4xj4%2BXRopXsRU5NoaGim7pRrRkCExBI%2BcbdKAtNAl%2BG6k&X-Amz-Signature=f1e434bd17b08a9c2d1936c5273f676162e621a97287c2260dacfd0fe82be387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
