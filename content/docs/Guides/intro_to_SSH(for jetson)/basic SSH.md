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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRWAT3NY%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3rqVd6V0UjYu8D7AMK40otJfOIYNIZivI5EX9l08LGAiBk4PD%2B%2B1WIzu4OitJZL75X9Z5dGawNxFRCbxgrNbFJOCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtuehAXYJxTrOxXhEKtwD1gHxOC0q7RLhDrG7OGt2i0V7Vp7PZum0oPMdIDo9ypmV%2BrEsKVhluLpWiBYQIYBOJQ9WvywqTcN8UA%2Fttvui65ovSTn9jzSab1cnjkT2XEWd1OV0noGucFJda3JR1ifEc27cS0jPhehoYKD6SWuod6krOj155tZP0HBcQ2Yuo1JIfsG1Pf1x%2BvwzF2hIiuAbPLDxCO0q73RiUd4X%2FZJEVJu0EM75jQ1c0tyUPTLZrT0iQh%2FnH6fcvfrgWcgqsLk0TEiSGQ4SX6VotyhSXvmUVtuNuV4toq2vR5etVlToAUaOt4q9De2b9u6lwS0FMng4E49f4KPeXVYNU7cG%2F32HyfTChwcs8vq%2BP09EhE8V0hIbSYsmle17BecsvSlPnZwuGNopPXlv3yN%2Fp8wQC9aRWq%2FYHlAKuoLM2M2MtdzfvBW%2BIJE0Dn9HHpnisB9Xz8hEQ3ra%2FUfY9sKVorWsSXQGIf0%2FCneGlLVfk0n5uPQfkxXl7YmS3vdErNKu5u4es1Zo4hGhFq2%2Fkw0MsrSvhvVOMEaYlcAnXw%2FO5UMac4i%2BSAUHqHHPmxAWiDheZfaWm5v%2BpGbLhB6oj4gf9qw89a11T%2BjJngGW53F6tg7%2FTiBAjq7C9YrL5kiEprDk8JMwjeX7zgY6pgF7c5syF%2BjCYSD1FcDFilY%2BIG7BRtIQyy4P%2Fh6FlcN%2FANc94mMcHqmtM7Lu1Ksvm7lxkM%2Fns3Oou1My9QJQIIp8oes%2FkY2LFNG%2BPFrlRDScbU3Sip3C44Sns0M27aDe5WvGGikav%2BHkTV8xxYAOa%2FhNrjKbx38C2k0W8%2BtDccYLIYg4hyh6xdWeLWvACLPTC8aBSBCNGdG%2BfR7sHClQ%2BNoxVLStxCqT&X-Amz-Signature=7166afd1eca8538ca7a09f018a44d357f16e6dfa10d9bc54a326f4535109a4fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZLUA37F%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpe44RICBNYP8bkQ9m3jGaZc9wTbzhBUUxQ50k4T7K3wIhAIsUcbWaY6g5sTQooAI8bSszJE%2FnI4HN9OazXX%2BbyYvmKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwshNWqZF7MjM2HTCwq3AP5yHGBWaVL5fxzLlpfYusy2LTArgifB0wy5YogtPUa5QARGZlesx6w0nwa8469rbDwRnoUNNeh58ulvgRs3p0QHcykanHCL2%2BCGABls%2BdMmfBhK1x0UAr9uaxyld1NYYlaKdByxMduwfrY6LMeRZjVGWLhkTrrLuvOKhukh4lXn3RTkzGo0%2B2MtPbTRCboLkREEl0BS81spW5TBOFJwAggE7Xm7t%2ByciF9f1B1copf5ZxdcvP%2FeFqpxpdycXL6WBXBET%2F7UHo923ylBZIisjRgxqb93w0sqp9RUSAQ1vEKbgB0JDPkmaXxbQDMcxFsWjEaxjrFVq0LbCuW1vNAGiVgRbUBV2WCmi8YNKXrx1e3SvFDx2aHtSKBAnD24mXRKrSKh75PF82ocnQXdeJsksyxGzB1IO2kCIP%2FeJ2Tv%2FuWjvLGxrykPX83pUSSTtAp3q%2B0%2BZwe44WAnNmTuAry8%2BFBor8DfsBXtEFx3qPzHujTqegsoBY40MPOvT4BA8u9CWopYSrnbYHOxUcsOd4oryIiC8ourkx%2FwhsT%2BAoUq2UsOn3LtLQ8bRAOmJu9dMi63ZGNDMla%2Bbk%2Bj3FjqxFsGsJQC23uM9RO2eHgfieAYUyaw78VmcUegKXaCwFrvDCH5PvOBjqkAYzcPV7Xva9ueDrVAyhWyPqHIrKXZZmaEP5YneijE5xFQi%2FaetT3qky0YmBMyeNiV%2FiEPk6Ke5Km%2BoNcI%2BKBBjw3UzOUTcYrmYAFcr4a3DCMNXj%2F6iAcmFtFtwPK2jPt6%2BafbBJpaWprR9tFeRM5mobuwlT7UCbpJ7oSuDzsOidRxivWwCceGg6PkIJpGRWHmTI5iwQd%2FALkgv4UfevguJaOxFhg&X-Amz-Signature=6d82686eedd839c0c823477adfc89fa2d7a42c8e14a455313adce8c89c15f3af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
