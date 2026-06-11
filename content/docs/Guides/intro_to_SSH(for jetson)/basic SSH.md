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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SVPKGYV%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCwP8ARyq267v5GtKP66k%2FTqMzMIzt3VJv1hXZUNWukBwIgIBaBlJj%2BtrQmh1VWuMHnck5kiIwJzu2YgAoURBVVA8IqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOIf4P%2FS1oJjgs2%2F4CrcA2%2B4aaSCDMDCb6lNCxCJ3DGYWhY9sXNysSEPHqZ%2Bn%2BRVzsk%2B50%2BCfF4eVZ%2F%2BQOWxnJm94LLlDJku3XlA0q1ET1huz0YC7Q3hPjoibHxlfR8MTmumBwu0ubSZEk2ywloRNWewEkYsc4Tp4oPQpmH81%2F8DhHx3NV3kotnxzC5Ve5IUieP5mdbvWwBs3Ao2eOlVuKHjUmIwHK7iAtg53qHJVg8PS14mU4ud9IXgniWm%2FTKtPAC%2FhgszlrTWuztj1s7vhSxFGzjVdgaclO8KMqZQDkMade6izDw0IrdqIWiYgDPXrjZqHAmFqiy9VNX2Tfz8w%2B3DARDo3F4EgM1fHPnx98r0docqAchkGNbk3kJ8LcWy4RORAOjNl%2BL%2Bj2EEVj3TOCJOkl8dBl%2F8OcdreZ%2BDQaUUH6XL%2FPqOHtj8%2FAhnF7HsBc%2BTn%2B7pTABtgRyVlIsBxWpbe%2B4%2FyfHDQcg1bZJMJCX%2B%2B2c%2FN4aFYJtnzu5IrKrw28jJq072zekAAywE%2F1XGP1jMD0yFHuZHo6QSpCdovTxtUS0vAnV8XUS%2Bv4Dw%2B%2B%2BtKVRCbmnGLbbpAky3zyF68EGPzdIdrDqwmOTBwAjC0y01S6VDhWiNURj9pjDnzZX%2F0SjWJlvpYHBmjC2HMO2lqNEGOqUBTdIWX%2Fm%2BzfexfD9XolWjEa2VZCHr%2Fpr%2FefYtMoXSSV8uMTAfdJNqon%2BhLrRVIbV4KxsBBdQ0b4ChxQGSJD1OWLjqHaboTBnfT9q3RlaBLCSkKy9SRoLkJccAjtxgEtVrE8avnXJkDU9T23EocJAw0RisVqwepBAv%2FAd7z4a3te8OVZj0sqUcOHzRaFwjmnreUCIapPhyQMryimjCS38DRmnvd8O0&X-Amz-Signature=155b48c658583329cf68aceb312b6b9026f530e1dd21bbeac8dfadfa9bb57d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDAEZUHC%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCbZbAquslSMWo3evM%2BZ5acqhHU7kHFX4pIKkzYupWsRwIhAI6nP1Via2A538R59d8dE%2Bs1TxxHPKKN%2FwUAORnUrZ3VKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy19Wk0%2Bjq9TB0eiQQq3AM2R6OPN6mMBbFU7Hs%2FguhFwhp8f74fSgMoL%2BZcJ9COJx1QyE4xUikNIj7svfs3SSsGtvq1BSBthQZUojqvtLQB%2B%2F83qSODc8P3BpgJeL3OilO%2BM%2F4BGC71IL6ZZrGoIytC%2B4TtP4T2LMmyJXoxMRsEG9i2JuCzMoUXPlWhjzsQaGKkfUfVhWUWc0k8j0W5vfmTpURbfURbJzwcWrvgy0SUkxDHKeuSbRrj4zE%2BZD26VtYq05sVe2viyd%2B9LELR3UVGvmVe4%2BT5eHfPwE6LSc%2B87YATGGwkW33x9TDmcZ%2BvZBSb9%2FwPq5P9YQ%2BzMmdnjKgSOATzP8j3H04UzxwdpmObdpFJ6nV8LWM7fEDYGxGS%2BoI%2FUBHqN49Ln5ZmaumWQuRUA25Y2bAdwuh%2FLZAbREeJ95zeF68TcGz0jUcny%2Fo9DBYQCp92LcdjW97vxo%2FVVI%2F%2F7hKOOmPhNv%2BuTuoG6rFby1Q79vh5c3qxaQ46w%2FTTPI1WjCf1JrYJ65re2CuLOiZLOzWOavYYKyJuvN9ktM0X%2F0rm4Pmc7ZdC%2FO7lqkfoMj0pSvzUiaWayGnoZqjQW%2BhIH9y47NQ2So3dinnDdAVfDa0rdSalM1n8rexMURLkb02SNZWeKt%2B8f5UDzjDvpajRBjqkAbJNU%2BSJfFSVNdbVueFcDIZxMXboJbI8UarPe30ilqooEbFGlTuOo%2BRWu97l%2BErsIIKEb2fSu%2B770A%2F7pIJDQvJuwU2Oo9%2BIfLCxsPKek1rQBqGTCh1ol1d0UeJSMsK7iJMzNKwhUZm5%2FYJT0LBdk97t7%2F8d23gsinh9cxsNn%2FnywJmlAzxmTieun2B5GRvTkGzuVoKIMjz3guFm3HRNHrO3TJfL&X-Amz-Signature=41e7c754e9980dcac11f864faf9af562d60738dade5cab57becca1048e9340fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
