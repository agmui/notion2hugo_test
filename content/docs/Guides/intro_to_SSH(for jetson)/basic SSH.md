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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA7TNANS%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBI8mCCA%2BnuaYwJ2WupFZoeDK31lDAwUgomi9BAmJzD1AiEAv1oEIxHxQMZx6V9AVzGbJP4bADZIlrxoVRC1Kd6zoZ4qiAQIu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkkF5mDv3eZISiONyrcA6YKpwpBpUs4C0L2q7YNVnl5mcQTVVvlNkHbV7tKzlmQ2WbxZl5bXopflgELIrDXxegsWIacaNto0nZfF345U4joUoadsc9NL65s%2BuL%2BfhzjmRu3BSo4zsuxIRuSZH3le5g7wZdbpcUWJ43hEP53lb7tuXQRVIYRdcWMslnRpqKDwJfq0NnEojMCJ4YFeohJMnnuT2lyhonTTEzwqoQehnXGl%2Fc6cPUZHgMRCrc%2Fz7gUVL7zZP%2FUbRqvVyfn3kpU6MeohREBLQ1wyqQwQAElJpf4PZ2VjfnFC0gySgCNTY61oPstVgtrFBfZGeGYHK4Wf8GfAiIcG7DcvEXnFag4bl%2BWCaUG3s2NUeuX2VHYGTp%2F8eynmgTR7CvtaZiGVwdMrUIR76s8bBeCN5f4MIa9Qdoff%2FZOFzUGO8XgruCovZtCm03vPQyMny0vVH3KexmIsp35LpCLoIeRtCHmTvBxTaKDASdZIg6HObXlW9lopPkpjXHJkTON9i9H9Tmv93bQFFRc2r23GsRRxmLhQ57QiR2zZ8VK5s%2FPje4Mr82zCOmuAxCPsFPbGnJvBJJsnEFu5cE9g26dWqU67R3b7ur1fLdb3KWxsgPUZZMEK0ejgxL%2BxApTOMpTkI%2BCMZq3MN6X78gGOqUBubqmJMLQrfsewaa6oDTwsKVCR7Ebt%2BAwffgXIkGMDQbBRSaXWgxMxviWHQy7MWuQz5N8QKALq%2BsaVmloTd%2F%2BDjDo00eIxPJu%2BQ%2BRzWvNWsHE%2BxdyqMWfYwHLYRwJeS5%2Fp910RvHepX5u52oHPnnL9RKJX9gCvlcfELqR4SVYFZNFuKyfW7esNwiL6kZaYGitrBzzuTlwzqJtJlE8jT3FXUyanp4t&X-Amz-Signature=80a01f8e172446f7133db0583fb23a0aaf686068702c9bf15bb68dc6463c5eb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLSKVAXW%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcaPqELvPxMJfCqRtaC7u%2FH3Sp%2BuIpvsBggPgZlCu0zgIhAPcE%2BPUARNY7IizPwb2FREof8MumcJ27Z%2BwJDJnBfO9xKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzts8Myf6rQKrXHm6oq3AM2Q1Hy3wk%2FEH%2BpB1IbBmGDkBCL2UnDADqAOQPFMohITn2RTs8GZ49NJ8Mr1BIkrvK0%2F%2F0GU7CI8CZa7jD7ujXJiROxAtF4dxRy1kLKRpO2ro%2FmgXhHHoyBNFuW5ezCfQDIwMsUvvtea90Bhfgy9gn4EJPCCzuFO1Ord3fIMSIB3UpRtkjuG%2Fo3HcwBVPTY%2FZ5FNgMWn163BS3YzUhf7hIOS4dJtam1SRlaDPkkx6Qpz%2BqL%2FliROAyvXBB68xYugva3hPNTRD%2BfUEGz9SOlEBDkUiOuFAO1cgCO9EoZsCHTEgYlZsbS2z4Htf3Ao1dXS3UCWsvGajVa2KgjxAIvEm88BZHMtpTH5eRf7gaMg8SnycfSlFl3cRgRmFGbE1HkrPve8UTcdgS3N3Jo0eBp5FoUu95kzi5y0wo70Yfv239cwVlNE0jqGJjrfz5Le8L6vJ3fkQ5td%2B3Ij1mT5JxAMt0TjLAfRws1MKYYegjxszJjo7cHSsubHOu6KIrkwKYWub92vBgd4OtD0MzqDh87IlAd8ODjqZivb3VrPhRJTB9jPcaioZ3SYGg83%2BCl%2Be5t5h7V%2Fv8JNT4CEoQeVCKQKzuYj835gtJh%2FEUXUXWn2XbwFonFEKcYhXq9Gj6hiTCAme%2FIBjqkAerkYuEukuQF5S9veJbgL5VJ0smKHsxA%2BdQbIitzeUcm%2FOxx3cU%2FgAE3IDNwQjdGUBc%2Bx%2BuFqljC2swfH5yGWMN4wDo%2FnQPWtf90hcBknV%2FoQ9ja4ML40h2G7XMlyyt38FevhV87V5m43Pm%2FBu0ZFR30jVm0ebfcl06Jsd8kU4owwInhidl43YTrGqAvKCItZmc8vZ5HCePUAtAskKn6QPcmkKLc&X-Amz-Signature=9a8859605d39d9858e6bd95812113c4caf91f95de73a35c48bbf16f2147dd149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
