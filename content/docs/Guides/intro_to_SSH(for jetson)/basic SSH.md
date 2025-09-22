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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M5RXGIU%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF98wrVLpfIA%2BFolOwhuZVqPxIsZlY7aNSb80Z6%2FFif4AiEAuIbXqgzbH73MetJ2m4WRvEPBNBeqhd6btf1Kfeq9ysUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFEYLZJp%2Bl5FA5lP0ircA6Cva2UkTTu0kMW06SLDGbbyXgmywGMtxFBRjLA0h1fpeVJ4%2FgwSodq%2B7m8Fh73OO95uONbk1ZNBeLdAnijq6oxQClhSeglQ9fzHqlUi3bDuUIlmPiMtKTpT4fHptTm2AW3v78Fu9wDva8htH7mxTvR60OMumMAmPxqhZacfi7JqSLDJ6SJQY78wC%2BNmmP6mGNAu9fFNaArlvQ7q7gUQ7HhK86SjdFRXIpyx2twMnnlBXv5D03c5jSfw5YihcJDHPN6hwwNqfFqQTHhysFiv4rhy3IBEtsOx%2FQxIW%2BNl0hykFk600XF39XTx06ajxvI6y2WrPus8BNkL1ECfZ6bcRfrdWW1KNODiWo9NLYl%2BVDsY0Tftm736Mw0kXY2sCljLh28%2BS5cgLrsUm6C%2FzlDmldWYgL6xnJd2zny3%2BbyGbXYZbBiAxdUfS7AoDfMUB61tQZ%2Fq8CXyRpANjT3YsHspIfN28sFq4Pe57iMZY5%2BIkmf0QuSVLoyTeqKbQ7BQSceBHcX7AAxWN8LFofvkwBuSjBlXrmHnzubkgAL0qG7GX0rOM3FQeWyhr0uG7nnwaoznEeMokg2%2BL0g9Z3PjvijA7rTwuL%2BFrTvEbngjEfpVOopFkHP%2FyZ%2BkmzHD0EVJMNXEwsYGOqUBZJ20itcwyGa4VpMwPxZxCC0Iil98xvt0JH1CLZee2AMwZxMUW41tUQ6ur0FYtolhOGt7J%2Ffx3JE1wTAQis2wXmLRtJnikrB7%2Bm7ZamgMQztHjs0J7M0%2BTWqenSVfxhZpDAs8rZCGcxrZ9reFpTIDbFIydkaJ26tUC9VDgb2%2B2qSxrAWlSh19aGuisaX%2BHMEuBGMQyCsHEs%2BHnyEec%2B0bbyGcI%2FWq&X-Amz-Signature=d9c5e6f47d436449e6f708e0fb92fdae9d9248097b5c6a1aec81eb25c6b41353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTCTN5UE%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgG8VF9d1NChW3vLHy41xIx7de4wWCNWdqhZ4wJcKaFAiEApWv%2Fa3m%2Fu%2F2f2fV3cnwQRawf%2ByS4YIrF2paOBZjECHYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLfKwXHBllKLgHpvOyrcA%2BwBMF6y10rTLs2FnBVqgL8ZSxuAvy7mnEjrKajnshnSjql3W4IruWik%2Ft2%2BhWkJ7kzSu%2BpjU6hj%2FHsuWlDJWK%2F2cukWOzFnnqVgfSiVD%2B8GmUVJWSClfCvh%2F64m8eFkAi2QAyC%2FTLvvTFGg6917c4g6f8J4KErlJusRJ1PP2QYsnZD7V%2FAxSX5QK2aqKcQ%2FV8yI6oIpt7q%2BmbHaUpcihfkM%2Bda2i7oc0Q8OJKW4l%2BZ3OHLGlUAPUuMDJezO2TOc%2Bc4Fh4iiYIq7EHOcwmDwDuPMkEqvQaRCoLkeGVqafJUOkj81mAqfhxSr%2F7iFzYPrjxg2Pu1gJ4EzDPdbBfiYYUoWNE0U%2Be%2B0mQe4dHD6WwoRPrfbliujcNeUapFuzrRMU53GWqlS5y86d3HbSW4s823gjFvMWPZEDodcrAPAqGiqAc4TdZJaqXj1D%2FRfy66gFcb0Mzufjvqv%2FAsD3l%2BapQ%2BvC%2BPsAp35j8QS3rlaNC5BAApRiTCyjj4M7jni6RFvV5CvaSEIsAvRayQ8Yqcm6QCnRtO78uGlRqtlHv7OIxV9C3szDfK56cWK1dFnQ9iWmqDCz%2FPYM5zyeq7HiLEA9QqNmxJgZUkBEF5IAe%2BFo1c6IntAsOE0xD9MuaReMN7EwsYGOqUBxyfLRAzAC6tAt0RFRWACcDbNVJrn9h5kY%2FHbO9ref%2Bu9UwU2RQYzv3atpMNi1sVUC4%2Fz00G1%2BrE6iXk03BDH8r5bLLyr8ctol4aRkw6p8H50xUjx8VkQgc2wk%2Bdcc8KDVKhP5%2FqVNHk1jGXvONvm9u3uz3IeDDjtBaNQdwVlvlf2DFR8vDJ1JpQBBmAy4bpt9pRpUPHUHIfV0Ea7oqRJQup5q4ZU&X-Amz-Signature=c78e6d8fbdc4c3a0500d4c37458218da40362771935c6997c8f98e85a8c90e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
