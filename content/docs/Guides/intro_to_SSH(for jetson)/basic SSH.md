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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7GW24JM%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIESRfmUiKcYRYifqeaU1QzJ2cpZ44nSvFoWskQT9Z6abAiEAgOu7tzKJbW3olAjmb5b0yJin9I6nVRYcJn1mP438KzwqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2RzqKhAqs5tKyFpyrcA6Hpz%2BbrIyklAHyz251EkrhNvF5l70shvGFoOyGShHczS%2Fo2WFg4GyXblZnui%2BKyqLVYWuaESO8T6oJp7MO3rnPA%2BOWveTFqjTpZEPR71ykLd0nJI1aAHTmXNrtkI4btxxYG%2BlcnGMYt1ebDJFORRYjbbIH1fWjQWp359KBmEPfT1T7HvLgcGE%2FQ98FMX2X54N2ILOswSlrJ3OmLIUDgRYPFQkOqAOIDpEBsmKIYBc%2F5Ty0p%2Fx47HJ5aS3TLPpMUlAxPpjBM0xp1uWrcDaGVp8AbMc22A%2BagY2N87lsLgZkLksFNX83GSHKmGDcmRBKd9JQbZUgKLCjiats0MVxjjcZ%2BTvFwtI8pezOafMXcwX4UqCORRYmyRz%2FzQwJjXU6xlrcyLaARZDSWTZP4VkmoKsFln4UqF%2FY4IeZYhCWlSxua6vltJXQrcWMFaBwDm2SurChT2bT3WsCWwvSBEfdw08ZOokwIsQE%2F9Iqvsvn95dksRj7%2F0RJLxPF3WM9bfSUh8f3CM7ng5%2BQQggGXwv8QnY9nXyfqQEOii32Kg0Jvy0M27WS0Fg5A%2FtSB8%2F32ey%2BE5voYDvDi3RNYR4jB5lwx6Xo7xAtJn1GCsRGPwbZKoRXGS87nBKJ%2FipVlGlflMO2z3MoGOqUBgYWUojMFVj6seZZUFWdgiUAn6UdtBbzPAMQRfNHdZfc5KnK%2BUbgNiXXxj67mdH9acPVvwuh6gY7GBErAuDftmRS4ESxbYC3Ns87zH7y2O661PUz%2B%2BACMoWImFYKCVaAFn4FH%2BgMaVw%2FHtH9YkLdgsBFPfFB7E3irr9KY7yOPHNAPAwOM0JxrNnQFNM416Wmr21IF6yoN2jC2t07DNy2AfTzQGAf6&X-Amz-Signature=5a3826d0729a31aeb7af342e207eb82c94c6382fe0a5d23bb3b4ec79aad866e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M2VQS5R%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIH8Db0pYV7MfCw0%2B5KDevqHjYQVDPLr%2F6e9BjJx4lQmhAiALwzkxajT5S0VPc8ENPyOGTPrCJDpnlUkP7A4lSNR3miqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRrSuNLeHu%2B5pztLIKtwDcIgOnHTDXhI4FsTdcTTb4aqvXJ2OCMLDDy1byjLFSG8tFLF%2F1kPsyGMLm1HAxuJNqm5gWM%2BNGsIlgC3ixhP2LBu4LYfRBCzWeEIHoe9JxM20zZ4Mpmb8QtEUL6c7fqhdzim24xXZ9FCnzvtKi7ATjwqstS8AjNIRlufqp6oGrh5%2FSjl9vi9CtJLzhe6Am%2FXyhA3WZ%2FKeGw99DMrexjH1l3rIaHfPPOw0bKCpYetyxtF%2BWTW7dWaNNvIdAqzbG%2FAL5tTd9P7v%2BJn5Z7cQZWwRFP5ZIuzkamZGmNWHBLkK5tNHlldpmA2i13VTJIeexELlQh8VBC3QPJpKIpfyLAYcSmdPcvgMdkJzSNpcUO0q7LTSyHKFdpthMoXzJyKTchQmiRk2AW%2F11zS6JexM0okJtQPYguPlkwD1NCE0Ygpp5pK5cZ%2FlM65ocW25Fu22kYwlSCzeU25k1LqgLQCzIPqaD4wZcy5j29ZEEPocV9sounDuWJTOmgpIOGvlgSWnCdkYhPcVaX0nwNPtv7qY9V%2B%2B%2B41CMvwoDGfjR3f5Yjn3%2BxDsJ8QZy0MG0Je618LS2qhl7sC0gGLoDP8AiiKPbb%2BH1gRdjGiX6RHjY%2Bql5QVVw4G8IrBUCJ1CZqJlEyAwhPrbygY6pgED4pVGLDbEYlH5lqffFzGyxNP3IYaSHUf55EgqqhMBLqSO2VM7SjfSvoZiYEzZK9PB0f721EkiEY3qR8onoOlt2BQELIX%2FHgWTu7zY0t8Ngo7y7GLdJ3iErCkX1dVSPAxGWgQo9yTi82mutWwqO5CBNmhfZ78EMIaFZhpcpbkBKFWHLPiLtFcKCiIn2xZXg6EqO9lESwrwS7iJtMtxa%2BTvSSGNl%2B3n&X-Amz-Signature=f866e48b16f173686f5db4f31a7ba9690b738838be5fcc343741416a67d673cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
