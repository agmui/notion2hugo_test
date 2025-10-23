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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO43E3IG%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm2%2FyDKnG4nRlZFeksU%2FWZNNtf5i8WbS70cYPtoauHUQIhAMhvu3KLFML%2FROHpsvZC54lctH%2FMg6GGGx6ACUpS0FuyKv8DCDoQABoMNjM3NDIzMTgzODA1IgzNpVp%2BLGAUa4134twq3AMvXRafImkq3az0%2B56EQfJGxUJ7e00Ls6RQ4%2FXIoMgQ3byjN0KyRYuJLfHWIRqqgSwK%2FJ%2BidGyZAu5YbFDjdo0om6%2BIJG4t6aY4i6miKvjLCgMTQNteoPPOmu4%2Br1syS%2FCQKldx5kvp1lNRdNU9V1FSqJCAQdVzR0hGNr6j3OrIImOnFVjtNyxko3mSlDLqhBPW1v7TTGna8FEhp4FSCY83jSoudSyBXxAkzA1FvM8st8hVJaQBqF93eLKuFKNQhDGT1WaENfhk2uZyxlu7Lo1P0M%2FO0dNdGp0wKMjB1bhaujlnnu%2FiRCP4LmdNIpYq0VGpBR5hLwAqRQsBXXFi7PwcW35y0Rid10r6IhYpEt057%2FDEjPTEJrUkb%2FbqhCO11K%2BdcJZZ4VSE3UOOwjiIV%2BlxXXYJOO8GYTnH56z8B195gw95Nz4dvoPQIPMJXcUN4Yp9yYyGphQa%2FmOmLG%2BN5g4zMJQPXUyL4jHmcIFP3AhLMVvnRD%2Bqi7rjok%2F2udeWJgDJIrheggRZz9F%2FcS3BPL9Gz%2BIMjfKyv2WSOAKVlIour8ZB7FxCGUcTsSlBj7CKeB9hZfuDUBPOiAa73azZU%2B3YSswKTLvpfrqk3dYt0WoX4ijYi5gH5WoAf1M%2B0DCA8OXHBjqkAdPJ%2FWflKAFY6Bmgks2s3rvbyYhZOnNGViMgTVBzl4RblSTHq5bUa%2BOyRKsBFZ9gg4NxOhFN9jocQm1zYdql9fO68B1oPABH5iqvJjwf5w7QfzofyAxqbY7fv4hvcDcNqvoahT0JJxJEpTPKeEQtnBsQTaCVt0I2CVXPejduPOM2OWPnA41yA38LCX3mBm22fgNGj48OJYHFU8%2FpmzePSgqGVRu1&X-Amz-Signature=893ed16cedbaee03d9e35d3b2764181895e9a9330769b1f8d75ef459e196f76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ5HIIIU%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfq%2BGtYYh9DTB8Tqbr3QOwwKOc4hSydIl2YJtuKUR3eQIhAIA1i8Vam6ONZ8cggRz3LeZDXA%2B%2BfMBah4A0XdtQlQchKv8DCDoQABoMNjM3NDIzMTgzODA1IgzNP8HuR4rGSjOwzlgq3APSFC8zZVa1Fr7DgK5n%2BQ%2FlFb%2FypUUmVw1GLy3%2FJAOw89e8dGrSf49mbuY6LtSDaRkr2sUw4xDI7OFGYW1yn%2FuU0Dk4t3Pfho23EZWtwlmAgKv1ML6YQ%2FaU4O7uOUUPhyvhtTgql%2F%2Bwx8aeD2lCU3kgDJUSCenR%2FJv4kf05L1MllOSlLtCNN90rrYx3K7os8ww%2FMBAQSPHisaYC0l6aurj6tORTZv7ULZ3XgfVCvBqX8t877hfBktBvREQLYVUXfTRyinw%2BwNMYfiNpMxb2aobaoJigXVugrNWMscFvaFxVQkXlsQI1EqiKdTXLVhRFxPu2Eg7NHOqUHXDmRzp86os2GbG0ZSUW0zNhiR9vZ7JPY79uNflxihNWWXfvxIUwZhxnbnk3rxwk3zy0C7G1MgPgpoiNlSJHbgx15rGltYfgmkkHL9CAVRyAI5dANAti2XCzgPUD4mrBnsEKaWwMsXjMu6NcboIvZ4hnAi%2FGt9t%2Bb7RMbUpFX5KHQsosiEZ5w28IZoWskygY9V8yghKBVG8OlhaowjTpUCFZL0%2FgMz9W5%2Bp%2BTJOLVF%2BzlIchgt%2FoP0kxErvHI3Ck6SuFkj7f0ClCKQcmRm1Nnz4zZucZjWqWcJy%2F%2B4sIBb0%2FK42VGjDa7%2BXHBjqkAWTu%2FZa4Q9iqJ5wQzlI42qD3rvGf3cx484IdQAoLjZ1%2BQI6ulaNlP5qvb5FjsOKTVatzqFfQvXlnzkTj7mJ%2F%2B8tU7SJc1zFtElNIahfKB6j6QAiE5%2FmvI22Ry2xF%2BBuUTf6%2BRa6hrdTXl%2FgM0R0xZmh58NXWCUbtjk3zRFpIW6M9lg8wCrqZpf9BUCkVJEJU4%2FDitBg%2BBeHGfgXHUb8O4ThqWKxi&X-Amz-Signature=2acad951b1ceff5b5df9303befcd3d4b61a4b30de792bb2e0a0d2acccc68d66e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
