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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OAS7UG%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL9Jk89SY5f%2FoPy6Xs3qZnsmfvhRWBwhHtRWUHtABWgAIhAP0R4Ng%2F%2F%2FeFx0YShUQna1PGTw%2B0SRbm63IJ9cE4khV1KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrIdwTgclsyybARywq3AOEeyQCpYJAL067LJ9PKhRVewNVWVbjWCh3ua6LhcZLjEfHtRLay%2Fm8LR71Jr4ZO2c%2F3shzedR3XN8BC2bFR2u02xJmrl5iWgcX0IpZ5gG5NgCmNUc1mkO%2BhkPdFC7IdOyWavFlZAjLR8ghxhwrS5gjPjgZXg2OehmgF9w%2FsGhBW2pmoNi%2BFPv4bzK%2BCxdWBkhyNPV3LaXn05XmJf4JmMh2qUIYVSYldop3qknzx0yTGBlakDpieEih6FgmVfc0d3nuuESCCCK%2BHXHnQ%2FyL8IK3uOLmTvQxxyjrKYXshm30QkulAXu9a2gJ7RInGFDy9i7yLmtQ1U24tp39oBLlW%2BwsgsUR0bWv%2BzvAkAD6he13%2FilZ0%2BmPRAcr0k0E58oODcicLhYA%2BYxE5bQEwQSg8EpgXXMgOfFcxbYhEN8iJXqLI0O2ebq9TFZGg0Ug7mJsISUO3K6t6f1kl%2BbAyLWpAw3WGHETtgU%2BOmiW59CLcSSOjTd%2FnmKBYn0WkyLrEav5fy%2FCHfJskFqll9%2FtUnTsIroYhyTUmp9qP2LilgkokU5rXZV3M%2FKwX9kWSfClTqoTK5J1BPFWxI7o%2BuOhEtHAR4wr8%2BEY2SPKpLJOgCnGD3h%2F17LsR8vfudIC%2BFA8BTCAt7XTBjqkAddSwpi%2FcMIH1Hvdge67%2FlZ0lrFtjnNYeYQPwZ5UQMLjZL5Sp%2Bv%2FSUHEpjeGw%2BQxnZUmTBe0s9xke%2FRK9VXItbRl0SS47Isk2rRk80f%2BF%2FY9BpeqIg7llQ4GuXKa3MMrpsDy3pYur9MvyUXGkgAlagChMbnNRjocznSseX0Fiy5fwhGqEnQjhDub7yvTymAIANNO%2FZ99vP9Y4HALi4TYm%2B7cIQpQ&X-Amz-Signature=eb7adccc2662266607061b572efb2ca9ebef46aed045d07688f36152c21b46da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWC2AHGU%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzYrvArX4B1cU%2BELUiuT4p8VEMY4qtxlXbcdvv3lZoGwIhAP3KspgI1za1v36vHq%2BGWj78Jee9iexpxl4Vr3DsO03yKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMEuXNeWfQzs6RWtAq3APOgYJGpsVyrRqJG5mZdZHQSB2Rgaekdg7o3mf983iHjH4aOJaTdN7gCc6f03fVm3zYPSB8QSKOrUuvcnD0m4OZ9uaO2ZYnnHPuxnsQegTVSnTdysbPyoqhXtX7sFNUSuHwNP0QIow7sjfyOzWNR582YqbPB9OKe9CzTDFA1VTuvvIEjFcrWqTjaodixyrWyUAUOjro5GU0rHcfgkedmHZeueZWwu21iJZRTyYnuGz0tAXEj0W0re2Ss6k%2BUB0MaeFZtcn57NQKWcjgGjgeXrnbLnePnbYJHXsGpaYM6lFSV%2Bxs5zoSlTdiuUZGUWIMzamHX0tGZ2OTiLG5XJmzVds8%2Bzy15bQN4RAd3eCsaaehzhnTlmSijb%2BK%2FED5C8n5ShEojldMeAZVsfnh6gL8xnZl7tiKBqsaSwwA3d6zkQcbsu3tnGJfpWlMj7brlFrbpYYiH1yHKShQWWKJRnCBZMms17AnCqdMzdKrLNMflf3fvGhAFfi0zlXlN4GVXVhI2BxJ7L05JQvZ6Ql3lTfxs3gr1tGTYRbGIzeBKv0y5VdgpVb3vJj2aWiZc8aFsGCeT9n%2FWHzgxpoGP7wXKLGBkCjALBNUrS5VIx2B3s8x3xvueAGKHIxrfpgzFxcApDC4trXTBjqkAfHk4vYohgKt5btGW0FXfP5wSAfq%2FyGz1Rk1%2FRLpwFbJKd3CV0Z5%2FOXrmkhr0a5Gbn9%2BXM2%2FwjevVO4INjorYRO3rhKQTBreRs51H17pCC70YE7SUlD67fss2GOn%2BKwjUeSNxs%2BNlhtaNRF0JyrJFJp8vIK%2FZeYTyEJ6Flx0jtt%2BKWUxARTuLUZsEitC08SB58zZO%2FOQHkbtPRHBfZweE4Jf%2FwWc&X-Amz-Signature=3c1c1ea1b2fade88887141dc5732ad2aebfb8ae21786175366e5d50e5c389329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
