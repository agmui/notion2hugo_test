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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ECP6TZ%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIG4v0oXf4sMUo%2F1t9jST8bwjneT0UVKfcJy9QWl0epwuAiEA%2BRKGEgVUgYOajPronKqiVH6RSmHcxJ1%2FbxarMgd9AJIq%2FwMIBBAAGgw2Mzc0MjMxODM4MDUiDFSJle%2BN38VQmwYo2SrcA1OUOVa015HIJWSa4hNb32NE7zVdiK3Rw6J2Km0Z5c4cxlu4C7fUnAS0bwJUDB%2BFfsXfjN1o61gzolVHwp8j1QvsKHObjZY5%2BZvUBpU3055J9OIbmAngEFnbDEuDNRlQGesmy1Hmo883tY7aL5%2Bz%2FPZeG4ZClibg1JwkYjYelhnqgHag%2Bj4ZWwlDGcr%2FN0fJ547YXvwEHVmWIGItU7LAjU66gIvhZnTgI5QATOsu%2FN9uOB6hXtbegu51tMTKed2SY3AdyXs0l7jMbQ4ScO5JJE6mKkVVZMNNXA75FDjnSooyYqzzKcqDBgom3w0Uh52uYYzjOSqOh%2FMA1WmiPkRxVxHILAgJ3Hp7S3qgUVGYnph3d0uMF2XnBdE1QAhhshqah87XlSV%2FwiGYar9OaDo2tRN6sxUSJppomrYk43eM9yWauwIYIcPHKFi0%2FicNqV%2B4OZb1MkTzHqwW9W5Hv5GnpRUQ3WnJptpBTLlZqzRms7TJebOGMskecYaNhrTqMZcmq1VuATmp4V328mlkZMMb1VQo7Wtk6iP3hwbNM57OPoMarnlTdxPMqJLdAS1pwWqTbwhmsum%2FgVv%2F82n39d3bKAWhSGw1gs7SDjS5r%2FoZ7ypqFjAIvPl13F%2FTMkA%2FMJy8nNIGOqUB5R6zg36sEOj2AYwi19hPGEH0WKkclhh81TciwgHIOp0fQgg49m5POGpfyKmCaQKyxDde%2BgxvK%2B0MUxLngbR0tQwP%2FoYQQL75Vb%2F096GZSXeS0SW2vSGkdjVm2rxNeQUSyn941vih2c1NrEMeDzOcTi%2BfCC0oLB8kzXilpO%2Fuat%2FKO3eXwUFsLlYY5%2Bj4CqpJov%2BBm06QwDny4inX%2BEKxvCdZktvY&X-Amz-Signature=8a8573bf7c1678587b0e01e084d43f3cf91082906782cecd7dee02ecb6cb8278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T3MPILR%2F20260703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260703T031736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIGLLkMMDUj0BKg%2FMXqxqTdVBXGquHXJWubk2X2xawgVrAiEAlMOm1YpENoj%2FC4nRQb9WATzmxG85GDUnFfNQGRWF3FEq%2FwMIAxAAGgw2Mzc0MjMxODM4MDUiDLjsvCv7KMW3Q%2FqM4ircA%2BXGPMC9HAnIFwP0DsKPIxNorz6SIlTg7H%2BOTgiBZd%2BalAW8dnplPhrUDbsPnEw0ufFSEFuW5Yf5sdsnYp%2BN4aTmBSszv3sG0UFbF4SGtNRQe8FoV1ezBcEmJnmBfDTGnIc70NVBIhket%2BUQLSsHGWB3fW6%2FKdopKCypg6w91N3izPMZlREzLjwux0y2vDqs%2BusbXY%2FuxpbSXw5Lez%2FcZb9z%2BKhthhYUbayOJjy5wGdh2DOvXgmZjvIqvPhcfnKmmXZ4Ug6pm6dgJ0kNVOX%2F5QkV5PFPxqaMaOlVVdkr9k1GCY4fHfamrCK3NaLDAb0a1DZAnKBIWkW56CVLg0RbJO%2FgH8FCU%2FpZ4ufxA9Wa7EkGci%2F7x7y5qbiEni4uF9UpvkMBtPdNt7LZwxn7j8r%2F%2BFI2mdEn650qH%2BMY%2F8ftx1xUQd8E5OFx8k6uLugiSYL8v3MZUxZs7saJIwdSAM47PNm%2F7%2FoX45k42RbDHOY6StPl4jAG7tu5RsY5er4VazMyrggUl5ow7MfEhcF2Keto%2Fj4vlWvlm5AgJ5dfiS2ZPDN1vWg3V1ZySrln2xPbaCQ83MoqamDTX8ey%2BLvWTwYppMx6qP0O%2FkU3Ts8Y9OJCJjH6%2Bv9NF8PlW4fPgDc%2BMLq5nNIGOqUB0CrfKdQ8sWyCq5WJ8By7RP%2BOJJ572YazAMPkSZdMm0MVVymw7tE8IZB%2F7SMRC95Jis43DTKHd8m9UAqvs6TdefRy36%2BgYuqsj8g%2BBrMco2wd%2BweWn6EoAn46lgesm611OqG22uj7G1KojUuBFXxiX9n5KTWgaZlKATIzDzPZFPWpiECtL2sM7EMoIwOHDnu53UM47GCWZRYvW%2F3mAPyR2UmxotHT&X-Amz-Signature=312b00802e3d3382eeb36b408a1238ed205eda5447a350ed04c254fa9e56c92a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
