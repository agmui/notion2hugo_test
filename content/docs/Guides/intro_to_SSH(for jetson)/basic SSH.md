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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSK7EBDG%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTzN7wOGwmttGgZocN%2FYKp6%2FyFpeRI6Lx6%2BP9mLCgVIAiAwLizlqVTpMRTMEM%2FlMqjqEeprxpC5i4dB9SDu7bWViSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMtCG2Un7rGGwPTv9qKtwDmLFx8ExBKQjxfcWiKlRkbxVaZPE%2Byz0Ojw6hVgx1aRBB65%2B0R2mXB4aM6Vb%2B0Ihbf6QndGV5WV8dw6mJ4CHnPmk6SzHKaCUYif7hCR7IgeaWje4XmdqYXL3YEtSXg26Yx2MdQaA1w5grEFHrg5V7esGfXlcB%2Bok8UG4F7MpWc9hTyKmohfMhxFRe0NMF4G3hrFrNqK325zM50HN2Eksj12GHIHnXktxrU9%2BWMmxELXDzlJm2hVbA%2BBcATuo3ghjAQ5en53p367FA1u1qa91xXKcs8IXWgfcqdDfZpYyym3x9rGSHrYIuvQbWOTM3u1zJPx7asg%2F4KvVceZkUSF4YHbHTUHtt8ojfxnGd6Nd1ZAraekdQ%2BBt6i6C55SCMUbyq2IODDo9LZmfoTQ7wgqZNPY5iloFY%2Fv3zQu6uOaLCI7kqCNvA0tkP3EW1vxUUcx%2B%2FpJ6LshmViQr8XNMppghxO15Llme0eU7Gsl67DyOLmiLiqTGxEXDkCNsSmr315DCTr6Di58dCNGWdc5gKrhnwqrLWOld37VJGe3UJMfHDErTSVntG4R96CMCunb8eZCzoHOcwBpFEhjcb8u7%2Bke14HOwjpLRelm0ZemGPukleR7KnrCpuXxx3DHTcHnYwycqCygY6pgFE50hOv2H7eSBvJqm%2BNPhhtEvYF9wHSmEFzSJv5WvqFEahMo%2FmkH8H5WHUcB%2BRu7hXQZ07JxTYrlsikXUW8dFAb6OgwKbrXnWuzYoY4KDh4mfgxUdCmRy9p0XBi2rEHbR32cjhyiFm%2BHA2f4NcilGbyj07I27en0jDKPCUlBFdlyZPSz4fS6H3YNds9ATNIw2FOqx%2BoiojLdIa%2B36OkreFezC8Ux8W&X-Amz-Signature=2c40a705ce1a69686984822db7e265d11c868e13db34d17ab88a6002271aaf68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3QIG65Z%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACU2qxq22pbNkm%2BDagxWavuyV57O%2BTuDahTIbwBEXY2AiEA8HeY1EODnuJlZ05LxBtHRp3vqMZRn5U1K0VNVAX2HvIq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDOqIpb8mF3IT%2Brj6LSrcA4bi0m4l2lCgxubARJQCb7B7aOkEUSBIykLlKTXQWdD%2F3sM71ncOImTg%2B1gV77gMnSDawuszzYIbB2Bnzb1ld1HezN9du9r9PpnQSEuXlXaIEluuogL2nmHEF7x6GPc8d8ig6ndr5TrfUm3xQ9wx4TQiGE8pFrJkpV8fIRyTyhZSF8tdhUziiiEJAZSh5uGuQp82lDmAObvhkCXDsezlCa6UJn%2FcaT8CMENGAqnBU%2FDuIExElI3XKxc1aPJVpqeP2rRivR3nl6cqW4TyrNwZe5%2FC5f7E%2FQdxGDJ3jaZBPaNVUeTJv%2BR8khBL6WOgoAx8LqJxltVlJYcNutyE7ayfWZFAWFNEEItQJLLeZDTFdRcDDBZ8csxC2h5GrD9N%2B2BMzczEqoNIxOA7qcupevWlVDD78Y918PJRT8WYjod8d2xeuqsKosKGmceUN%2Bp5EnMP79q8siRqM9ivoYtknQPkpJLPkDv4W%2Bm8YMhOtESjVSzZv26hgulPHARwX3YPTxeL5qldZEnfdIAczURxfPZxajROp0Tz9rWhqF7w6eMu8tB8%2Bd99qxtQkXZNOb6JCF%2F3Y52%2Bi%2FlkHvxM2GTTlci9ldwm5lnJsfednH6IbEXwQEv%2BtiJ3WWIOUmWHzNaCMP%2FJgsoGOqUBMFOqe2lP8eOkubuBPCzRDUK%2Bmz0bex05eiqXZ19IoBL8bv5c70cJEMrpHYad0cimQlk%2Fl1sHFLb70KnlFrugOYc6uXD3Z8%2ButfXxfZPb5hvJq%2BwRpTUJ6NBeZo62i9sFyQJOnL%2FsXz74ue6eR3aKWs%2FB%2FuGvbgWcrGohqRF09KfDMNgPiM%2BHOIIw52gcZLM4i4UfYSh9AIWOjylLQJ1%2F99CKxUbI&X-Amz-Signature=508c264394dee8fb6c84a1e3000f2cc7ae294d9a07274d08a8c03023bf5da47d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
