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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CPE4HZA%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIB3IPbhN8DgiO2JXO8B%2B1RnZjJrU3Zla3AK14htseSLoAiBoYkL0IQ%2FIGwno4%2FpAX3PdRF45K5rOkdgRjgzMDbW3jir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMViP7n5uLwOf4yKkPKtwD5PnmbtpBsFZqN4koDxAlct42W%2BzRFBMPXUTjpnDRNJrEkw62rS2iZ8yIKY8pb99E8uoylGaVBVpk5nB2dvGkaC0tEs0EPMNRZkvrGbKhvG85i%2Bke%2FD3PUnIbzwwPhcZuPLSFNapZyIfw3mJ5ZI4bGwjeOaVgRGpN1qSCeFfebPIBYF4lfDzFwDc1jEAPc6mxpu5VSWd4AzPj6o06qa6BlW7%2FNBHVO1uAqqY2cXr3pyAnSOaFRywjog85KaP6j7yVmIK5luyi8UKhzS5EFY5vfvd6D%2BVOdeVAr6RYa5iyOxZUctDE3pyU9fbgvGusm71akkxWXMMwSDNmZ7573ILbqskFJq1ZU5zFUBTjUAHesNoI9ukJEOwjjwUC4tjg2AMMZ3gJObL1XLgzXuaQ20d76uwFIze1Hsf6iHJ2%2BjOf9K0nQzxCGmpOSXrHZJzeVhgLf51oaw1JzCqcrSe6EBdp387Y3ZuoxX8%2BVj2GuoqiR8ps6WPUa%2BrBgbvDb8ETaDiW2ytpnqJLvFpVEwHE%2BirN9%2FlXaFlCEHlAm7J0SXQrkY8lptv2xuKktNdijKC8FRPdaZnGIkazjd%2FNa9cv6uPAXy4LKb%2Bap%2BbTNK8YDHxrUZBdhVelXRHorJoetPkw7%2F6gywY6pgHHpYp7%2FgEsjQLQcoBrWNtacVQhBDdP2i%2FuJt42MWV7Ddmuq%2Bam0sBTFL2zFh6lLrEjSuNoPDj4k6ZXP2dt%2B%2FtTyy2Vjdjkn%2BzwF%2FscFDNSxwfDCpczhSQTtpa20mqd3opNIekGI%2BNAwClh%2B3h0KVIFmUoImXPc%2BXNBVBAtuK%2FNAou1bUplkpcVItBxFebIcS277umWijOC6BX54ciPL69%2FiuTaY1pv&X-Amz-Signature=16b912410a44a18ba1b58e0448b856fddc7524bfee655c1bdf2fb53208f6bbfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633XYYCKX%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDXtm79j%2BssGoEs7k6iZvwKDBlNdMhLLVgwPZ3p36%2BRIgIhAPn%2FCFonXIUsHxViUafGi02bMJE3DEG5R7l6vBwUPrTUKv8DCCoQABoMNjM3NDIzMTgzODA1IgygSRAk8IACNFY%2BBEsq3AOMlnZoBcZq6YuKpbesWdCeiWsoqkdXZfpG%2B3ydTHiSIcn89at2aBIj61E2rvQNB2A8nnShpZ5MnZ2pRH2JGnV1J9bsfSSLv96y56YJ6CVah7xmyGxvGeNCF18d%2B5r02FdxmVfEFadZ5yteiMi2VtI6OuJmb6zdZ6woqlwzwF2n3n9ONanRKy%2BrwEzGWXLIaADQc4EJviYVrSabFX3B9AXERzZ145A4515Cof2Q%2FO5rydCgUIsM03MEwmE6hE3go8MP6qVlIhrcbgNf%2BLdOqXBnWuhL8q4ypgzwySf5%2F5CqQZrFDIfVN01JkWe7WFn8C8mQyu8LCKleauTE6MHVP9tsWY%2BIPsAjEVcCa4CqG2q%2BWQfxy5nDptapiBij4h6ZXbdFxIoUt5gIqS4rCSbnxHx%2BsW6%2BF4qpa5MantYzWT6522pXdlr%2BBYDMfQArCvyn%2FRSjzhmkFbHoft17csR4Ac1eQjY2yQcPdxj%2BCq55CSrC5nFULD5YyumpCqwYBvjOpeYxkYdPBGpqjfqmabfFw%2FQ5SQQD82Uk3eu4OL4IKRVCYspWViPRi%2Bsr9jYehyO9AmDu7WZo8A7IW6HnhCibebim0W%2BHlaBBfB%2Fqpv5tpf3G6uLw%2Bjg1hEga%2FLmmPDDmgKHLBjqkAbtcUU%2BksTKy4yM8nYE%2FeK8H3%2FFPYQZoIncKS5CLuLE%2Ft8y0ahIg%2B93mUDbAx28Px2VLNTvpMqffB74F%2B4o51udXN8aAOaxZQTvhFjFqN8lBxLZlZyCxz25g4BjUiQ%2BseOY1%2Fy%2FO%2BShXzdjSEfUwIG4ym1Zf8la9TDwoOEA1JxCc%2FjTJW%2BTAVMvMUWrbJ71cTTnLtcN6jIoXiI%2BtmerWetW%2BC%2FDB&X-Amz-Signature=e49ae576ef1bba5895e94c6777c462485693994b8831dba788755419250693a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
