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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSYUR5VO%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQDb4Af0SKiHfB5HSQmi9wdu1B6J%2Fgy%2FNnNgsCEQ12z8XAIgI8qUDnCsxU6d5ghg9IQ5zqR9R0hoE54JfJz2pc3Xhh4qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLODMJdC6eAZgT8QZircA3%2FXBd0XFFyIuHPqG3WDzbpIHQ58Qudgx4alxSBEUQW24C%2BboYopwrVjmffwOAZGtCE9AXn1hwcxp8oFOd4UArKWSmyIZdv3tdgHQGjNOTnRmfV%2FUJXVufkVobhTk%2FKcD%2F84%2B9oMLgpcl0lfUCWQS%2FhHuO6cdRUYLa%2FZVzBhmhcQNuIHFPUpicPhkQ676%2FrIr051SmC4odYCQMJUFBgUtJsJgyGFJtJsakm6DvuNX4eDpusREOq2Q778WAjlLPp1ALD6hgJ%2B5fXf68G%2FVbY%2BYXFz6XYQIJK6CXk4nyIgzripTE9YsL2gQfCtoQcAKSSmoqvG5jJPfnugMLDiXHTGcNXxRVB1CB1FsQvtyC0Tk9hnreNlxQ4sjCIp9zxpKF7hZX4k%2Bp1L4YbrkQPSlFq4w8YyZu7%2BTkwjZYr5Iq9RfaKH1053UFDxqglvjBcoP0JYNPV5Zoy3fBxk2BaLG3XAsZIvsref5noptsK44o7RRTn6mqrEYYsoZKWFBer69t5MBNZlbHMPtgXXqXDlo%2B5bD8jtbGsPGU5GfdgBmOm6KjFPchLh%2FT1VYek0FQuaq%2F2%2FsoEj3S9YjP4xm9EFmgjGRsqvTJwtLYkVmVlkztAWcCIRtGjUPQ9kyTtT5pQTMMTwp8YGOqUBSo9MLZgzEVKYOAkPNFg8EZ5B99xzW35NS2CyPZ4dplIrI7xrk2NIlyn26AT6loLYUZNnoM1FqYNGE7RmUHadQI9vGsHmH6tYC1gwrDN%2BJliKhqmKZeRsj%2FMZ0z1j66DKkVovD6gy%2FMEGmaa5526ex2mWg2OYjqAN6PkcER%2BZhRvmEvJBmJMG2vhLMf28hVBskkLm9pIu8XtvIDzVzODO5YUk2bd4&X-Amz-Signature=a21f90a76591fd68707039b62366f12ec3fb0314b9d5f21dd9aa9b5bf10c8687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W2RLJDP%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAF2UQADq6Dc8PpYiRdkHgy%2BC%2FuPEZQR52xg9WUwHq5RAiBpkgj8HM8%2BoIrBVMBpJauN5%2B7PinP8I8sxdsPERwYvViqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeYeHdUcA7vQyCGWTKtwDETkVomy2qunPfWE8zVWqv4JDxo7NXCGMV0YW5FcegbR5LIGdfR%2FwlhZOJM%2F6fYkoj5EQOLHjR0gkFSuHA6VvRISpQ0Gy21fjA8me8eDcPGjs%2FcbRK3Uqs7PyRxBERLtXwDqqJRTCSjIbgYWXO7dg7fVCxcDoVf4q8ep5Dc6tXJ4JSOGytydydbXDkIVt8jPRa1Mv%2BcpcuARkEt4cFwhWmKJcBhzcgoSiqoAWP94UceaRaiEBgozevS%2B9j8sQP0ZmCo1nn1YBxyfcsHWUtqBowV43%2BfwyEGoOjhuV0nKQovth6YlwozwH%2BNUBAGLpKurmaxKtUdCpFy%2BAen%2FPp48mJrct9TLuXHotgaKBMnPrAuYcdWt%2F0%2F3J4tT17cSLO3V6qF7nWd%2BbP3CtKTx05q6uCCF7rePSuPOxFVDtQSABqMoJI459gRrVTMoh8fhRQDpB1y%2B34yqtq6U8wSIPk0CZAJ6hnsElpE8owAQ6nvoXpXAitcDiN67rVEQdPTO42lCiUxpGzH4azYCkGDg8UxiCSh5hfalN6Rj8T9b11vtKjkpQUptJng1tuoHZFhhYpGv4X34f7AeyoMzNSJB3U%2FgY38%2BXmGzKSAnWe%2BSQ%2Bbtu%2B2h2L%2FDb6cVEdN7j7ckw3%2FCnxgY6pgFGP5yv1wUsru7GS8dIDVFdM%2BP9OUAtd8GD%2BjphYagtxuUAcsVSHavWWC1SNA4DRmz3AUee3aMbgIspVREEa7yULijUstZYJ8Hx5E5D98JRqreFuXa0wL2kwVNCDxWbTEX1SrT8YFT6cIx67GH7uqn3yCi2bT5QMGfoHTEb3qwK2isYrcvKXMZzDEOECzSmT%2BcPJFzL5xvy47R4Ic7e1i7GF8mCOK9E&X-Amz-Signature=726d8cba7bb14fdcca5b335d649c9604d97e790afa6fc9717fd9720bb3ab6ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
