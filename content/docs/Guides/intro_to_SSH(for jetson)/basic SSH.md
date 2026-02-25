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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHMALGHJ%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIHU5iyY%2FXu1g1tNu1wAtoEMvoOrOLYjv5O6hOXowHpuJAiEA4PtHSFFy9h0aapwJVRX0PA%2FdOWstIcZOU3FgsHcJF9Aq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDIbk2qUDticvKCb3bSrcA56wcOIacKW00sGao0X8yye7ovOXK6E7tW9Q6O6Eb%2FHhsUD%2B%2BUj6FG4F122N67lYvfUhyVT2gULyrI0H5yv%2BQXeb6vvgm5wPXLTr%2Blgkr8rswPzyvEQ2B37uf%2FfkYt3tjCqrJ20Qr6XJqG4lW%2BRfL645XHIx8XtT4SR0QAhdja8Ql1qfFJnIS3XxSzHs5Dul1vL0wCgHt7DqSWWo%2Fjcv5Trb3PoO83jn9rwvNQDfG0LZAG8hAE8e2KuDg6E5prtc9tfX2Lkbz4%2FAoGg7RroRxPxAcfvQ1kxbbaI5DEwssGEOI%2BPVwNafsjyPTJpV9ZaBrW3RlEw0OEZC7ooUNlk2efnftgLAnrY4LLbE%2FDwxH2ukQiN2hknphxYnWRAX4BCfRXhnut3bNqQ2D7pkKjOqqcH9j%2B%2BiHtEyLD1CaRQDN6q1fp%2BTy5v%2FXvJ3ZnlcgWaFFVVpA2cHoJHS7kWTyf0f4s9gM0HUiboZMp6U7NbCnInxraaez25gn%2Bp%2Bo7u3vv2DdQRSH9fflc2%2FEO5SmmifV2QJlingJMb9RUFEuJocUL7KzruYhtUtJr2dOw0we1I%2FlrLLz7U43fi4SA118h230TjPAZfhYihiPWb4yAgh6HkpyPybxUkoUkt7kEFEMLuD%2BcwGOqUBYm2WbSjomCZllYxh58V4WOp9sLAQBbowzZrzbTk8o%2BLCnJM2AccDHNWK%2BJzWriywe0uHvU1hGGq89w8c3l%2FihbQyjzTXVTBAIwpa4gLmfUofb28E89PV18m%2B3VO2X7715G3X9pHjmKyWxaDK4KZB4%2B2p5gOpKSO8RT0j3iD%2BPgJsqa%2B9dCtrRGplJCQz%2FIDcAREDpIK1qhpENrdNfocW5Fra0sv6&X-Amz-Signature=da4ba4f6ea225bde9e83bd33fc0240c4a2da3701c9b6c4859134e1e76b83ce02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675SELS5O%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIH%2BsqyHq5Cn6VF3vaTULFQ2Gy1cvj7XfpjLvfbf4TAn4AiEAnhuAAooRzdTU76E%2BfKGu1Y2fRd%2FcBcrgUVN6dmNTmngq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDP8rboRhdVtUgQpF4CrcA7r%2BOWfrzX0UC6whSfc03t7jc1BYKqRA5IjyGcid16dpB73r7QDZItFeMhyULsO%2Fe6kFcEUrNoscEhtSN3IMN2HWRB62KzovPeu8vp7HZ6uqBh4c3CkqSS2%2BLQ03ayAuZRlxnAnVSi%2BobaIKFWJS%2FReILRlCnGGYkFcNDe%2FAiZu2SWpFITEP%2FwE1mwFawPuIo%2B%2FbwtkjZ597acVDiyeZWHdbRnZEvDj72ztmvxO50r7zJniXnQgIhRGcBR4crmelwiiKLaSwvUr8EMyJOi0Nilbg2zz%2BveCejb3Psl2JOL7A97gQ0RfnCquXk16Dh8Ky4rXyCzOVqzxdTh9iOFLTkYT5wdAnkCz1nJ3yNenA844nqsq4esD%2Flk%2B08n8FsXkc2GvyixUO2VnlfQ3YvgPBK0A5RGn4AjHxjEVXkhFMNzDFY94lHR1TvSvQiPlRw7AA%2FBnFAVsUPY87uLvsl5N9fd8jYhAGojjWPQMj0vXAqP5CLaV8fMszYpG17nWolE%2FgH%2Fg4tDeX3mtdNlte%2Fa%2BNuKT2qu75MKn%2F1RAg4QAN4mJuiLtqK%2FTl64yc5fTXwtNUJ2jSIjNgc9mUjxJz0VhIybPLkMjjVAmZIVcg3XqcIyA1aHE73%2BNyd2oiYNpuMM%2BD%2BcwGOqUBLO%2BoScK7s%2FnSxeCV2hs2WZGVzoSMn8LYr80ZJGVl5AxlShDWnwt94STV6c5Z9O66IXYNsGL%2BJWTzo1GmzQO2jIf1b4zkl7eiHocmml4SasDV4qvor4vRbz9AB6e9R9TiNZBsTdf1LKvlCZfXWsM8HQwJ5OPgrKUAfAglSnAUxG2Cco2%2F7TINpURSr1Iv5oV0MKqEoKEN8koMRhLBn%2BMpb1zuiuzb&X-Amz-Signature=596c5f59dea53b3006481db0d53664edb282c4df884e1c81f26adecf71fa2752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
