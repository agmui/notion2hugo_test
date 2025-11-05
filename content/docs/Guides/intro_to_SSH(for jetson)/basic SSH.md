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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4545HO5%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtd3nIvU%2FLAgqyE0jOVA%2FxhCAqQLUNKnvxcsMYb%2F4QrgIgLp7O0ZZHdeGT%2FfirzO%2BbjRRobsMnimWYyJth5CtbLNEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGTvYsymUdMp5BW%2FTyrcA3u3znnqilliwDDPs%2B9m4I3Th8Wke1wU33%2FAc%2FJQxLIgy9vFo%2F9HZb2AxD1ChaFLziLdKLHtydemNKvcsufmJ8JU8OVd9UsP%2BWv1Og2IVZWRJ8TSfiyptyc0Skhw3q57A088x%2BWMVj%2BapFs82PZSAPmELTLQKxxHLAXVPIdIXdv5sLT6Z7fGSV22i1%2FuigSkqF1SK87LqvKAZwrZDIzgszNYjCmD2AcUIOhp8F05P%2B%2Fr49mDY7vniHKHRA1CEXLJ4MtkXomdMouvmNpMtq%2BFOJ478KSq4Fe%2Fvl4MN8Z8bQSgW4Isr%2BIHOaULSXRIuwT%2FqWbZYj7FKOgiM1mT2OdFP6HRVp1Rj07USkhFSAcLY2SXkru5HtSrbm0Obd77i9IY8OKMcT47HUlotrV73HsX3bmnv%2F%2Fz0svOhbdv1t1raW%2BZxi2HfaUzFGi8K6hg8XbjAqDMUyA9CY2p1ywa41tg0LixuRhccUC2vu5gbgcBJCY6hx6xT5F081fcSVYbuy%2B8RhVPDkdFPXaS8R4uzcvUODIIBsiVJd%2BAPfF2Q%2FRa6jtaRfOjvZ4kLRGpcCT73i3R4b2GCCbOvq8iO902UTOJyfW6FanGqnWgl8%2B0T8ojdd1KFdidf8fvIF9NU3P3MIbeqcgGOqUBzfvrAkwEs7FXs29mJGfsTt9EmjJOzH99v4h3TWNTOVYD4xxVTHL%2BSsCm7zwKDFX1mPUIi7P6S0R9D789fhE3Z5VWiQRAbUVbvEOPZdULVka2EWZWi4CYjI04RJpzv%2Fi74uiGSvClHYijG5XC8S%2FtXiquE5%2FBaiuk0crOfzpRuwZVw7UdxT%2F5zmGChZl6IkjlC4i8mk1mWwI7nAoF8l%2FY55Jc4dK2&X-Amz-Signature=efb8c3457a7f0abc8b593301daf5b64f3ee2779c0f03654bd233a29bb438c530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WH7GI2P%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqFhqtaVBtFOhFoa9acqzsGSLg55NbB7ObJnyA6T6E7AiEAywgeWVJXSqNSY3NpzsCyfR%2FW3afBx89HDzOHi8OpeD4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOLkiG7Iy6MDxFoVVSrcAyp7fLmi%2FbDIeTJJA0rwzRaI32sFgzN45r%2FGdy3IgCT90TeCDikvpp6Sj5Kx%2FNiCIsD%2BkCOYEK%2BYbHCZiXnkP%2Fh35TjHBgUYCPM1TnM45JeyJOb8k9HLiQ6pW5wDpicr4d4AWpmNlQK3Lst2mYVOvmmZqVf%2BYCYfSTcrCey%2FVi3GdqyWE5iE%2BbEWEBO8evlxaZ%2BqZY%2BXrb2kk2zmSvWgavnwgb2GQEg9yNaHuewMpnt2otm7vZT8wiliN6a8jsz9kjEBrABHIONr9hGwD4QuI55uy865zJDhXSAC0XNiyXNTeyyMAPUcW9TZr1t%2BAU4fMBDOPbIPoXDyGUsfGtorOKgs7m4hF2MOvfqEo2ejxPCvb7Su0tDibq2WNXvDhFVr8C0mYQ70auKiuUY2cgMKPR7SCxjgE3%2B62xyj2Dv61Dn6Fz8iw7hzTpG2XFyrUPRX1fbUDrDZizsYiOAswUnWYMLFzs5PO%2FqO2WgOSSSgrYcnKGMTpRgwOEXcdo11V79BOGBiKHa09OBdQc3HrL%2BXdXf7Qmsf1DYbJJKHUPCj%2BmFuMUyJNVxt%2BCjhjxwaK7XsS3qYkwiahEvi0iet5PzVTgtInKF%2B5%2FW%2BWVnJHuVYyiWve9Q4CPCewQZJvTXGMLjcqcgGOqUBV1W1RZ0DV5VQdNBle%2Fq1dPgTijbjc7M9mXBACC6DW%2FtML%2FZdZhm%2BBnuUEzKjml8KAFLyMK%2FQBrbkYQaYFPDX4cPZ9B8k2znrelTd%2Fki2L3Aw4m9PwY7RgFGo8Zzti0rYKrSjqZK4hAi%2BE2ZClRKiLltzyuKTOg1Z8IqnGTsCHxiQqUz%2FD01o4eVlklLufC%2FVwUPpfeL8vBc1UVDMeInY%2B9bPBJj6&X-Amz-Signature=d031aa9b98ece13fa46c6d227f84f5b0811a9b850b7abd1d68a8ff5aec3fc74d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
