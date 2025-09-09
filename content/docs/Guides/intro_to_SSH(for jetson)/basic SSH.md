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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IVSBW7K%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQCg%2BYdLVBXaHXx%2B9qYGCAtmipvHpw46UMsjBkzlVNbMnwIhAJG6XyarAQiD7qnAWYPP0VTQLE%2BP%2BNpc1JkCdVT2X%2B17KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbPJcbDmQalMwTQ90q3ANprd4kXRMDylAEdpWxG88S1RYezahnFm2zdes4wurFru7lW3M1nvu5mULGu8d%2FoiuUrctK37Px9F3P%2FNsMcASIaCXjS70qLtpVhXrBgzXGPwazWSaiqSR7Xua0mOVslTBtqpgnAHI84zSAvqDHP28S6t3%2ByMtsg0P2winDDGq8dK2tYdwjdVWZhwANFjetAHOdf8J%2BkuHsYR%2FYhQGkRjCCkhCjYCZGFXnJBIANEVLEXaJ%2F5X1vtdR5UL9hk8YvXrVqOOvIpnZGpk08YAHz2srGcW%2Fd28NGXjHWE9aZhfitulvV108jtB6NuY2PxcBBm5EU7S2NA05Cz9Yom%2FT%2BG%2F9g%2BUPbeqw%2B2iYTvXMEpRZOpdkeCx4mr%2FV%2FOnuSlvfcDycMUsebNJ8V4xLcVTxLgLseFqTMMDolDm6zkwPLlgDlE4ThIaVTriXQHhQpjW6xg65QldOZEzWGUQu25C2GOuhSV49%2BXwMFvTdRca%2Fm3z9Ell6OLNsApGSnT2bTm9WjsxYcecUorXdKmky5ioSgczMU5pniftn%2FXzfhneuhpgqAbYruzJ9teRXY1Fbe2ImuwLWAZkmGY%2BHicRsxUHKcWDFTvtA%2BLqDJI5D4F9V8n7PO1xL07Jhza%2BAHv231WzCj8v3FBjqkAaU10YEhDncgIqWDku4UigCYiKy8GpEynvQ7gg1W5tSaQ17IYlYVJc7CELOb6%2BRX4YCcWUMpp%2F8qjTL1mGsutRfaW2s7jfKaUaWr%2B16ldw2ph%2FwtGO0We%2B3IS%2Bpu1k95oOv08Mzfsqy%2FE1c3IVaOqW%2FArqlKY%2FX%2FDJEfhJsUx81j8Tq0OXbBstTWi5gy3lT3H669pRD5ccMZbpKpFW62BFb%2FBAat&X-Amz-Signature=0367ac80a992cdeca455a2161de0e4d00d4956c8aaa5c07e442f659a5336d638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GYJHVSW%2F20250909%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250909T012551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIC4RpcKeanOQ3%2B4vDZDPGxLLQbQrH1A1zeSOTSa8FBjnAiBx1b8cHmdG2uuRShyqnL%2FCfZivYUtDbh4vLeaJX1cFxCqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuS2EbvyuIecDAduZKtwDjb4YTY3eu1WwTZCRxj5ASBcugyuuHOG77n5ejCGTHH0W26ps6GTeyfcgRjUru1OZaEhs6jq6pvDscWiKOeCBLhbeWTx%2BKJ%2BsG4i%2BV265P6B0sLTzHM41VrOqWP82eNYGH%2B6hh9%2BB9cC3j3vGM6L1g0aiow6WwTzK1VN%2Ft9yfiqXnpNQz4sOOW0Ccj%2FFgrT6f1%2Btlg1DKb01FFsFTClCYNPRhx5DvU1xAL6TsFPYbpJ6dN522FVBIV1H5CLlAcJ5ypa7C3c6CIKtHxoODCooETciEeJorM%2FzlDn8nuhaj8fbrhpPy%2B2f1%2BMsZmPdzlnOSwV5KTg79UpuNrS1RlrGvL8jwswaZTt8wdwj9sepUJapm%2BRxpk5z7OosjcvpqOSWJMEA2Cik71vZ0OR5IGOy%2FL%2BUR%2F%2FGuTIZRa6H2rljxnJMMiMntPDwb44wuho0iTENu7R3bL5YNCfIwLYnWGw7EPSPYNwZOdQNMxp1GgQJauol0EKUwvviHAkPJwR3XpCGSe0cyZq78IFvq4U8Xbo6GLFJqyFhJln8lWuvSn2HvtCjVmZFNI2AQmA6NokgMeI%2BzjKkJ0TDcxaOdWrQxCzI0Ryj6eupLGKWlY7v1iCNxrlJsE8AM7aHrtJp%2FUlIwhPH9xQY6pgEu1VFe%2FHmZgry%2BmfEyg1%2BUixPKbBzz6LjLnFq7yoWKtkeakma3RWbDnw6La3Gq8e0qey7OSxdGSrN78kFL2RV7NaPFcNnt5nmi37FNXZOsuGeWYD301bU4Md4mUu6dhSnMIE9CzmRiTq4isFufHnFvaC3EMRaBRpJZqEjsJC3AjgyhkdpBZOAaRFZnqtosGIgvRjhhaIi7w70ENgr6E0HizZypn0Q8&X-Amz-Signature=01850eca3450d6f1e1b2676263eaac60d7274e269cf7f0e9f5d4368b0928c4a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
