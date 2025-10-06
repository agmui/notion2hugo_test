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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7AFQD3T%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQIin51hLvchnjO4kVtzJLGJ2gz9gfbs4f%2FgQ3FyLp9gIgKY%2FpyckUMGb%2BGeHx9PZ%2BYkSK%2FgrBvFKySoMgjYjgGA0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaG2uAaZY96qKa6KyrcA7C7HY9GDUZwlBUo5Hc73PKotedw1ifZpEwIzNfmL9WpxxCKFThVdX7tmRQSS8Ru9H60z7%2FDoTpID%2FaC0T6q%2Bjq9BX7IHX1NSY2YW7Cg39QE45rIltwGBBOgDpHZm2LVTC0enOnqpeGQbGByzJX27CFyRhEsUZRt%2Bcb5uiYyzVAmgP77fPefjYq5jukRZQcJFJ2zbQcGGxBrg%2B8gioJhw%2FF0cUfzqmXWAw3SQkoaWrlTTqc2%2F7U%2FbMiFSZYLn%2Bqq5pbByXGbYJvEztGWf2fc3eliom1zv5TsOKERXAqKXCaIY2C8qkc%2FwP%2FDl9R%2FcUO2d9JyCFXrfhxEnpHCiFgiVUCrR2ahT6bksPb8LhAa9MxPMP93TKGKc8W7W%2Bxwr8eLAAA78mULrUeK7n%2BFWX4je7BtcUoMD1J7a1QqQxCs7dtiExBuIAKr75N9tzgVgmKbfgFL6q1gKXfY9ERQSEKD1%2BbXthHjn6OTYx5RHzGABkNx4tiUQalbTtrE7vc2SH8M%2FbiZQsySxdkrxsBEbh5ddd%2FjsiWdz4OMLVR9zcABMHjdDt4AsRebinfUdUc8GKKJFTvj0%2BxtxFq0TRpRA00wkcEKejJPkRdcsUrmNN6c%2Bj%2FiSw0mMQjG9VrzpD3%2FMJGWjMcGOqUBdeqksrxpxbf1Mk7ddufHhupOnXPkIq5DdRpxjDb12wkP5X7NqGA1WfJ0JpL5M9rGljRFkO2WKNUv4PebtwVlwndMO%2B8Eg1BdQsz%2FxrtTxpG9JmPMFAsOYQmkG1rwnip4pAzBzqfrQVNla1t%2FOjIcOZuNB7EyNALUgQC%2B1osWeLM%2FnmYjF9BJWL22DeVyoj0DTBGei8vmUqxog3lgU%2FluJ42ifAhM&X-Amz-Signature=f65a5a2c1dfa2885732c49e01e9179ab6f3ed6be314913f88f385521f4904334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UTYCSQG%2F20251006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251006T012502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3t4bbHpz6e0wm%2F%2FR%2F%2B2gOzXOeEXjWRxeC%2F9YL4oJ3hQIhAIkgMD1uKQlc0UUDp7rflooK0o0Hw9MsnpoLKtpAF1UUKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzyq81xG8Qm%2F%2FPVljEq3AP4HD84Zqz%2BLI%2BSTr%2FfcG%2B8TSm8LREryQ6w3MjHJLBok006lNLY6KdIgASay3yVGeEGUepm5c5cO5r0lB8f%2BlYpv8Xv6XKsnUYis8C%2BzGFQghRI9VTliUwiH%2Bbai82Pcz8QT8Mmm%2BpJLJMurEMdJRLQMmzGyl1BnijkKFNUXtj4NobA2flMpi1ZFgGX%2B1nYz1945ikIIL6TPKirtEBVwPHUguR3G%2BnzFOaw0RGQm1cXoROd%2Fprs9j%2FDlLhYpIUQEgIHbQbSOam3PXQ%2FdKJhiXugIr3WwQ1XeBGjuNjNQ2624HULrruX2HILqRebzFEuF9%2F7lVfRqNAGsfaBIwsqcBQ%2Bz%2Fx56a9HbSAzWbZrckeE9%2BdkrvltE9DWVLzSG4caIMqRMKCUMRTx7C93%2BwAAEZcrC2nFvbOUNcoSjDvRAQBUQW8w4ZVVab3kHCaBBGW0IUIPc0Yg%2FWAO5VWoCiKwnVyMYJjRSxm%2B66ZYnnDFzYsQGmMf2tApSS0pw2VOQCVVwq4s5PEbl5BKQFueYMgv8Jand6S2UYG%2B3Z2xx2kRCYzXvxXoI2POFD1du1HXak9Nu4kSaLY9lSxXT8P8TAJ2APydxBCiUpI1RbNSV2j%2BOl3flQitfjHmgBIq6aNlyjCHlozHBjqkAe0Enb%2BQ1RKuGv7diozEOSTzYwLuzfBleMXXDwWEsMCgQRY0h9GlBIn9XIbpMv6rP4ptdWgfvk5fl89SWRb5YdrTmmbGp79nbaVVEdfZMQf9LfLUwp5Vi%2B918jH6HETId7xdQOfM0%2Blr0l3Ol1jdyftPAG%2B2MAeft6EM6yMRyQOIv%2F6SJOc%2FbsEIksyEpL4%2BAdTtQIeeLxlEx%2BMtQixfU1kuuXH5&X-Amz-Signature=ee0da897ba106db3c5b44ec993d7ebeab7e3dd7dd3e34bb70d2c079a597a0557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
