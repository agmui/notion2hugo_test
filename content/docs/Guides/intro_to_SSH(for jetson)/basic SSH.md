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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAWSEZOZ%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpwPMtpR5I12DEpc1kgYPR9BX5y%2BAaE1FNWAVUdl2VGAiEAxm%2BVdyok0066i2gmBPSOyMUy6gJcTAiObvrtcLOkvdUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRxcthuRke9jeI%2F%2ByrcA7aNFOrVvOtv0r3UkIgqVaatfaFF19Uy73xrFy%2B2SFcvKAQq%2FaMQMFpjueD4s63fuqoARIbfaxNPN3FNB0kGKTkF7oDpjAA3QdsG1zYAnoeqNR42joqo1T9XaCzAKXsQ8lgANaLuhnbqWUGXO4gjZMJWckKaVTpbmrWrz3Yg1VBAo5sSxuMc%2BxIWP5AOzuEpOpoKyuLDEu9%2BmXzBJe4ywbcx%2BIFGgN3qvWkX7g6Lp8bcW9I8MjjfXwQ9zvcU0NDodi9brgwv8m2m5CDFr1LNm95k1GGdgDMF%2FLaquAfa9l4RRGBaN5dvi%2FRrmcWXAmq9iQEbczcWlsULvHjxELU7z0VSHpvthPUaIXth7UGtKSnQs0j8IpUaLCwIFM8EX%2BzBy41OLLFQCKwwz8imeBp7RiNjfnn4JcG02WBHhnjOXrndbxa%2FCdjftctNb6q8wzZ9ZxgrRT0lYyJlG2WmtG%2FdiFv0wRbxhT%2BZ%2FGkjdNdjKecuJ7NBBJpA1ysIg6SPaRnbENeoam771Z82uJjVgT27Xi0k%2BjdKN9FQ2NCztCU0h46JGnZcXbKicKdiTAf7kBVwHsD8hMSgY5wJ%2FHCbeM%2BnLQ1IYxvh6%2BajybEUAUVaNImQEaqRy7rJ4aXRw%2FnnMMOO%2B8cGOqUB%2FAZMQgO4NA4R953Cby5UqsaMr09oXCg%2FYOP67b%2BGXCd8e5vJR5Db44HoRE%2FIWdGR44OuTb15FTzg%2BzqauYMyk8lCnbKsG9eOqZQ5Bmv6Fpchd%2FIVzuD8JfJc8%2Fyx15xrzs3Z7ExVk2lLgl2kIKKOsdSA9p36WEpKsxJQQslenZcSmUZZEM06Fo4wPIVQAxipVVeVCYEiBV9IPdGQKk0d%2BOMvixk2&X-Amz-Signature=8bf427887a240ceb7d68d9db63a314c3e2afea7e1113819cf5117d464f1e1ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666REAELUX%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYRB4D3DxLL1SISYjq%2FEBWl%2FKHtva%2F5NifeitJ%2FhP63gIgeHyRKGO%2Bcj7ojLhv%2BL%2FiqPEc6o6Kzv4lUHvSlUqEp0EqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9Z3ipI0FI6iP7pzSrcA5bH2dYQVQ1Bftc1BB6Seiid3AvxzWA7Pv%2Bk0RPn1A5JUoGZZfpnP4UNWctadxz0hEzBsB8bY8hHcMrN8tXDvjtLv1wcUe%2F48kJ7z9xTrIU5pTuMDI%2B%2FPHvvFQ9PwruMU6Jf2AtTHEAHS3GjRd%2BZ9t87ej5%2BQZE6ooEER5poXEaOdStYS5jq3fcZYLvXqnM%2FIpjIcWcShFYHHFzc%2FghRZ%2Fqy2sdhMzurJJZBqJikYAvGOr1EjOc2RPeiWgvxQ2L%2BIVtjHDtF%2FYJtV4N2bUPKQkZ3If6V6jq94SxufG0lrqc9SIo8J08iGNh9K6lEzMgh4YB4HJH8RUPoOWCbcbNY36Ev7wXQ1AvsXwIQl8wOemSg3hvBiXtHNOgmnezmMIZ0NZ3QjQ%2B64POXxvywZlGo446JshsFPoP94T90ungjJLoWg%2Fis2Gj%2BdZzbERTFISYNScbDN3KZ1NNfAe01E3ZfURdWMAw3UjmlTmNZZa7x53yqWRpna3QMoxqL8ny2hoTqmApBvi0yRKabpQNc2hH34paAg4yoS7wStjmY1ByXoNbNrQgOSX9YNlBora9vNa7Gt6v8Hp28nohVLR2D4SDwBVfLbvxH%2FzAHN2SR43zxpSUDpGLXtEQ83nlihm9bMNSO%2B8cGOqUBYYRHXlTqgBEKX2luFyd7U%2BCstaLQ77aTc17G3ghXMxMkz2uhgpiTDFGV9%2Fihwimg1%2B%2BkiXlVPhnqtacfG%2BDdLWdl0G%2Bt86yXv1Azr%2FbDypClQTr%2BTprmhnh5YS3Dmz60dfIko9YpyhwjcA%2B9g4U%2BwzSWYvjK0GqqtjZsENf2DX%2FFtPSX%2Bvoo%2BLq6ohNL3ua7uWR5ST4GsV8rfFngu1oebLH2WRS4&X-Amz-Signature=bc5d1b5649f9d91fd4a4acf4fddc37b1bc1a12bb36d241b57dae507613298fbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
