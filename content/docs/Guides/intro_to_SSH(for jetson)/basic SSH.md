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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47RYPZM%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQS%2FXVT6bSuGJZbzMtf3gmlcYP394%2BKE70L8oHvmbcXAIgPNYLuELIE2KG8BeL1Hpy%2FRu4OSf5%2Ba7q%2FRx8NIeoDU4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCLOJnKHxrQGLHHWXSrcA%2F3%2BdL3zCbptJ0f3Hzfg5N%2BuyYExLNoJVIlcRE%2BqhdCJMX%2BCkW8tCCs70qogH1QUY7uEs79EwXJxi%2Fg0oYhu7ji6tJbTwTVUtv2mq9Y25s8U8T8IvG5Xl%2FRo1XIkMVSjLGdOCJ8bxan9nPpDomtRgje2Is%2BEbopBrUA0FeZLFcwysMmcgUs9OLBs9s5px5x5Xz9GHMd60dLzz5sgg88zfTTds%2BShcDWeKcEa2nE%2BTf5jQTPrPXV7wbHKcVvH3%2FlGz9ip%2FIFFUQYBgbMbY5YISHkEFihMMKoX23fKin8cSbutwAxUvz5BSEqtu0AhfVmoVmK10jQQHbC3hzyiye6osxvh8rTcrsQEZf%2Fp%2BrNP3kFaXV7NS2d0uO2KSSedhigH2%2B4O3gDGkv6qlHwK2IShbPiiBVlWysaYK5rG6U4N7bQBHA8d1BAijR2n8tps59R8vnO2DqbLwnnUJnEnQG4C0aCwRUzbJbOGLw8bWzUUFs%2Ft%2F2K6MAIsvbAqnNWSgLFbjQD5IZtlZ0KoY1Vcyp7%2BxhmWms8XxQZPt6PlAyRRoP8bmQ%2B%2BCjeWyaNK%2BKo07RjLyuGZ5te8BaW6Z%2Bs9RU2hFsrn0VQxHTg1FkxMTqeorhfBHNDSZ80VgAGala69MPOt9ccGOqUBH%2F%2Fg8QPx0g%2B%2BW1AO8M0qD7ZFMNkAFBdqeOpNRw4YNTS%2BTpWDraeWOzLmcs9UCBIuKRBiaARtQSZV6DVKToFWPbdDPv7%2BCuSreyVdz%2FiEWcbF%2F%2FR41pz48Qxlf3wIJw6Tx6d7PXmp27FqwEcC9xhGBlyKvpaE9S1bjih30jBEVruWQ3fkCYhU5Zjus6cboLA30oEL4bYc2QuICUWC5XXuptpbUUru&X-Amz-Signature=40667d772fcfab5e456a9a7be8f3ab68d9dac23eb009c36e2e0d00b622be3666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFF2H45%2F20251026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251026T014024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZorIoCO%2BSrz7P7sTEAg0qknIJZGqjmAmpvWqWnAuDEQIhAIjrjGL%2BA4Va5m1YUiEJQFKYpdZbe3zUHa8rRevXC85HKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw06s0sDe3KON2lmiQq3APaTM1ZPODiJ%2FYnihLBvC9wY22b3jRuIzzKKHSgZjudpX8QVTjJWM%2Frw37B7DKO1im1rxDozyD3ij2ATaRcaX2mL0sLgTujFupYkFNFiE%2BYEsjVuI2TVeu7jhJwTyBEmwDyMDJ1TVNH%2BBwTWgbjM3BwvMlg%2By3eBIvUiypwT8DA0paEmf%2BTBK9acDH8flDI5Qxv1xjXsUub7a3HW%2F%2BU4husgTyWAgalKf7Pk4kmNtR9eAnGzZTGw6KI31rQkCgn8KepK4vTtDOOqxXGjyH3fqP7A7viHv2caIodzsvE4Pwj862HF5n3z5rWCZd5zvpwJd1asvhhk7F9Mo5Nl0x2gL20ZriZ0z3QoWCcWvqLPP3yY48JdJhqmbZHcO5Zj6w4Cda3829RjnJWEaRwDiozP%2B5rgqLxbk1xV4KjH7gMeXv30bPJ9CsX6WEnNxwwtLmQHuKjuv5a3LFL74BOsI6kmeHumtjctrlYfPnbZxncOwUnxOHFwHaHMnHICkn9DGnIzAolTn0klNeVta6%2FfSVjuRsvN54TD7CiwbVSohnw31bjO6%2BJb0eVr9qW6Na2zb8pETgsqdokAdNsrUvSYK8U3marnz6ERsCLfkMYjcHwzp74ir41l96nNI0jicNsczCbtfXHBjqkAdEZomR6zkM7aK1InYcM3wFktmOx5F3wimkpE29KPtcIZLzub1MuPtFzL%2FmgR9LS1nWa5RPljcysAEMjiJzG8SoeLTaSHKXqQIWaFXgQuLiH9SUue%2F9hYGrlUSCaliJ2axW7jFbKJiUZIEBf0IplX2xlN52PdWWW2vBi48PdMYNXxsMArFp1Uzk2kEFUDxfVmg8QYFyYD4BtyCQg44xO1ebUXB%2Fc&X-Amz-Signature=29e96a19b6163e262076c761f2fc59128ebd9adb73de1b8b58ff5db0bb08d97e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
