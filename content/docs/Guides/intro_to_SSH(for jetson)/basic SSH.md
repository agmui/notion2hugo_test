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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7FAIW4M%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCghTGnQ%2FUT2DoMFLofu3N49fL4GufuPBqJe12ammCzzAIhAOcKxrZCxIvHiNEHcD7%2BXh68ZNAf0Rg2ceYxOa3SIZHhKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyp2p9XkRrZWo7pKCMq3AP%2F1O6m1MzSUtVErG2bVvpnh77RYXMMSyg0hIg4fnHe5GNzegL7K%2FNW4GkCuPTaYMWao2fLUUzXs9vFWaEv%2FxgpQz0t4PCfUzwhLspk5VnVssWAKZYYllYaDJF3XMwdSP%2FWASab6JB5YjPmmlUHJtKCnhbKx7YzqVjQ9WxNpQ52t9PyaZYu%2BO4dMmrNXPzIzJgvRhiJpb9xWsTYc73yrsxO13Q9L35opSSSbOATAkDN%2Fld3xvvfhEHmgcN%2B%2FCUzuIuFk5Li8BwsYR3Ke5hR%2FVzYtQvO%2BkMOJhQD7VHauOM4Flqwapd%2Ft0P6kP2kjci2PM2KkZU3prypt%2BG5U2SXVhcniFTfntuXTjtm3hoRuOM4Zwhjtk0WLSgLW2aZAKcu6re0mhWVgGoCq6exTh8mFMw4GqndX04PpJdlZpPVElx4XMcGGxKfF%2BdWDGpU3hiPYZmOAwqezPzLKhlZXpwqRFF7CQMKilXlaZpBrw4FrPBpFA0gvRHHjajHGwki6VgGw5X12e6F3ip9675Cgu%2BbU8b1igUMboxKlrAEFj7NyzgirpfBGOxO41qr2tD4pqDuVlJAY%2BrTfjDIenkHD%2BAx6ivgCqrihf4Ea8HS5oXHyaMBig6iwOAY0veQOVOQTjCsyJLKBjqkASfZrycUSiCSSbq%2FdM1cQa8Nw%2FC89GR5PYEFFRgS6eDUttOH%2BqU6vos2lGTU6sH02%2BS3wsNzlMG9haSSXW8QCmyk%2FtLH%2Bs%2FR%2BJSPjGAawsP0pQJA3pEX0Sqroup1ShmSLBXvHMG6jHTXX7NBCiH7GwJfqpEz06xTG%2F2dE3rl%2BaX2QWZop9He%2BRdeWeqeaGWQ3j2jaL4QSbwViQTIHz8b6HpmQU0Y&X-Amz-Signature=dd1c47d37a65c5b610bdb3de05d60b79bb1c2e914152c308953f7bc56b015e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVWQH6BD%2F20251219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251219T014436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHN5Ql7FCb4Wtn%2BK5dexGuzkKpmM03zsYHOe9bo1G05FAiBPDHyhya1Xz87txPNrjkcz3DYOIcu3ZT4X6DjVmS3uDSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJQeMZv%2FD5Gg%2FeUKNKtwDZZ4LoPk4llz%2BpWFLxaoOiPjiGWnzqYvLY4NDlJ3mfwUUZzWdSK%2Fk6pDqa7l4rtxAZZLYi0T38V2Q5Sp%2BLPeu03Fu1OB74yVb5G3Fd79uscwGrxAWbxae0wUbewTBMKApGK1OZJ4xrVO7M31GFLX%2B6ILWM09LO6usQJi%2Bq0R8tLDP78Rg53fCXDWkdlKyFLmV4S1SQ4zzPjsRjjoXjTDoRipCP9Sc0vbyCJuaElNCBD1LA5nFPOTN2B1d9JOYBydbvTVEfXAJpPYP3qB1EMURs1u%2Be2SFBwrbHA9PR8p8BWU9LQcC1M2Se08F88DquNmsOak5fmW8VbifeoFmX5%2BGPEsoFskTMD5UCrd2VIPQ5EY20DeeBYnRfd8iQIE3gR4LFv2qZnCYlzNlZKNPSscKJCb%2FTBxMllWG9ZTXFq1FnWBVEDH3gzeZ3RkP%2F5nnEVuafV3iS6r5t7tZvIrqGiBG0z4HTaytacb39F7PJ4qez6vmqxdk5jgnHaBeekXNP9ooBEdqnRzww6egJ6TKHIXRpEAJDBxOj7VAVaL1pc5%2FEUzPzVAh5cb3rK1SiHiMOz86W5HuC5fFHofNqpatp6kuYJvQtzFlykzFXtqvM%2Bhq8%2Bg9QLzaBOoOH%2Bkow4Aw%2F8aSygY6pgEQgmV7ipoIzk5fz%2BYo1vRSjMsLw3MLyxHDPlcg5jG2200smmOyLykgaVUsqF0xCa%2FB8iddxP0vkEqUf43xbT5lQqpaojH9S5qDpd7W%2B7F0jlNWpngKODYtyQr%2FQX%2BCuPu8nmZPV0kS7AEL1T%2FXCDkpEGCIs%2F8xKgORGF2BXj%2BvfZGElR5PXPeQkCzbw759LkTJ%2B0sbkiPeTsQq%2F27FAu24H%2FEqBnuL&X-Amz-Signature=f36c6c9f4bd08f64efa142c569029d6a9db6b9e9bf013651b58d685f2de7dd8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
