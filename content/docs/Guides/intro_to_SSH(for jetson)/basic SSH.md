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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXHPSNFD%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCMrf5HguMbCaPRxBgMJpsH1TpPV6Zv8IB87blsOHPvsAIgGAFYw2fIKYBTE8%2BfgdIaQpwXoPoKdgU0u3LFixLQu0sq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDLeFjVPfspommHFZrCrcA3V4X3neFP9XcQfpPZ%2FYB6jHqT9FEWYQZWkdZW%2FkVMUedTZNqI6uX6laSUm6ou0zRfHONtAQfjQuEN3dtGn5VilrldsmwLr%2F6f%2FE0YU2D%2BshVz3E24ztNcnMQGW7n8fM3KFoesYdnJSDqgBNSOQd3%2F8qD5re5W%2B2OKqzpGa1C2mJaVXtz7w6FRjsCapkO5veTpkKFXMmHyJc1X9RRRzOG2aIWNIfyjbuiDYP9vGNFH6VdhgaJpu%2FrUNxfk1CkZjj%2BoO9C2GkC8%2Bx6G93l55M3hliXOe5oSf41PhXFS3JSHIkTz3VuhyI8YOk8988L19XHgYJLXLvEEDvYRly83XEuisQHybxuv75OPzsWXLXnlsuGHKHN7kADvZQi7WE1r6pczJ2AWyAZNXMU52gzrW13nzV%2BMv8FooXrykpPkQDf%2BrOPmstd4xdEhVdgnZhbyKA9hx6brfNr%2FU672X2yiwpzAMCs3y2%2Br6HcZ2Fx4gWJMq%2BHRHQGH%2FWLBpuKm0yO6JQnjz5Z1YGEpowza28CN3UiZi4yK%2Bd4%2BqPT%2Blox3kKujQ5%2FHFrL1ZZ%2Fu%2BBYiEuaynqy1KhZORrW%2FA%2F62uSEZ%2FQ9UetbvUPXgcrz43bmiVXQFDflppWi%2BDTiQuEczOAMJromsgGOqUB46zSBQFNUISXSw%2BsargijmZTEG1FAYWNhFK7cx2BN%2BM0t2Ah7Q9aBKJN7JVfvB2OvzjYtSGOXpT0oxiQa8XJ%2BMHPi6OEa9JhBYkinJ%2FdIIVAsQ%2F9Jkc1Ep8uhvka0frn1ruaV6xMku6X0ttXY%2Bq6ppqqittug0gZbZAGeCvqTfBUl7JSTKM8Wvwdno71OUW30mYLoO5wM5s2mmrd6hWOpwEUTH9o&X-Amz-Signature=028d8d428799dbf76f2812d8a87c96cf41f60c5ccd24a332edc61b3d17b96f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5UBDFEX%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIBSHxTRpyhmiaenut7IXdgsO1nuanGhnJFUe4TKTPG1bAiEAhtTcq2sopIU1%2BHDKGZkWWKVgq%2FtBjJ2KcMm5tYPkz%2Fwq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDMOPDA5W%2FSHV5bi5ASrcAwoQylTGCmYy9aNsSTjwtQx2kl0qww7D3VBQHzvUUtOEpxrVieF3yOhUIbf9Rsy67Pd4b0x7e6u8MtcLasNpsPX0WLGHLtT%2BIrAq%2F32OGnK55Z0s6jAqr5Be%2B3qBzN18OBnaTbL2ygTr8JONNQdHYMGGbA4ssj%2FN2uP%2FnlY7H1Tlwtt8xV9ExYATCqXgh%2FCCsx5aKSh%2BPBURWOghMyaO5sih%2BqVdsQNFgJGYyT3YqZml%2B%2F56LO0IcK%2BGVjN5bTlv1VLu0sdO4872aB4f%2BBXxsSdSyd%2FyeKAvd4k6WSbzvujDWRW%2F0lEdvWDqBQXWkM4knzGCYNIsS%2BzjyBe8in2zuQ38lHEeFnXMBL3%2BwSEWUoDSZl%2FGmR4lYHptthCpkPXVQf9LN1WfTuwd8%2BzG3Ju6tkshG6WHyCVyTHyUlD13w5rodzHlO5SpJygrximvMuE1kOv3m3f6frbAQHUG1q6rUr6fp5enmsbksOmm7h9zCEWnnO0n1yOkh3BFrhpVY87x7i3Z1%2FhVxNp1IkaIfllEveRjWFzA%2BCtz4ZrwpoQPXOnuhkKIYjx%2FdsPdhZwWAGnh4da7gIZFq87PbvGFpq%2BSMcFW%2BuElPzFdAw2TcCjgokvmllJfZZMxsDM6EkqAMNPnmsgGOqUB1nuDLoDjyhKk1DJkFeVB5EOlE%2FUGucEQg72a8Ob%2Fp3SunYdUwEsUXjfs1ciXrV8baQE22x0QxcwG7h3dE%2BSSLqqfn9K0KFHQWNVFSG0SB1zID9zXIcNEythlVagg7pjCeB0l601fOIODRnRzRj9AM1zysNckdvk7rFjBDSeLCuwHtv6smKPYnpBdenyifYnw0sQReh53csVLGzIyEfBBgX%2FKNCEz&X-Amz-Signature=67f910c662531d46e3621a8bf3dac32f22a9567c552dc407717be16406d69657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
