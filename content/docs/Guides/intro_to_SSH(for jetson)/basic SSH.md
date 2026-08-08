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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVUHT3MV%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwc8GQ7FI2DBOfXoVD5yVq%2Bs1%2BuS6Dk6YWJPuT4YTrDgIhAMRh63vrXkRew6laLl1xZ66QdO5%2F%2FsfUoJIqNgb8Gvy2Kv8DCGEQABoMNjM3NDIzMTgzODA1IgyO5pxDSy5PM5Gw0Aoq3APePu%2FutP5wkxwRrnl4tSUA9PyOZQFI3H3Ei1y2mntxXpKIayzpb6YLyGfnoBnHdUdENuxq4Vp%2B0P1HFCE3Vjxdrai3RPhiwph9CiXGDgAg%2FCgkwQTh9hJQVqdyz31cLLIkqy%2F155JfyZa4K47q0aGUTVlsszfo%2FoQMqr25T7taGdUWaijUjxjW7sPJpiKAn7atT1VhJVT4FSV5C2HtC6wYlJvf0HrOvuLr%2FRpUSDaEv93wo63ku49RV9WkYVORoyO6pgEIOe45w%2FezgfdcJ4DDp6CB5eNDiDzleeuunU%2FU%2BnDIOovdfnTGDpjQ6fiWTo0yFRQ8zIVIJOAHQnDJ%2BtNSrXBvEkn%2Fdcxnn4H5Q6gnNDGIf7yxJj4mE1%2BBgDlL45MnfY8qpEPcA8CCMWV2zJ7jPC0RbkWwxXp6SoMXw%2Bpca5KGk14%2BUHmljlKSyDOh7Q2jXe%2FYPPXsuRsVx7BmGQG88UQ8hXbq9Aj31j1uXquQx6XWdvEk84EvMCgzK5GEFGWzdKrWusKwf06bvDT7lLsRQRXSj62y7vDRAgE6a7TOrtJjyGuyyp9aJqioi1ZHGt4ssVMo0hKNWS6LythTUq5qJ6coEN5Lboru4t8IpzX51Cgh2iPuCuUqHJ%2FnvTCJ7dnTBjqkAYxUNwh%2FWzsfPF7M56HokF%2BHA2sCSBQtBimsw%2BkBzfljT6JHH%2Bnh3x1w9VEGw25yDiX53CiQ9Uh3F2g827iaSQLk0qLivGMyaWHlubURxgNtgo0c38Y4ZK%2FFP0kvYewaO4V4wzwkvNiUkF3Vcwt0GunTYnFnwFJ%2FDOnYixS3x31%2Bh5cVs%2BsKAfHdVllRQ6sEoPklTXJrwR5DSjDgW5rJiVoclv0u&X-Amz-Signature=03e451db2df3e9d6bb7aeceb7b6ed890deaf905210ad5f96557c053f48d75afe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R327QGHV%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2CMcNvfQseKRcf5lm2ojY5ymRDpum4oAzXtsYtFyC1wIgAm%2BslykIODuFxeCCUiBtBj6yRX1Dqm2BNkswjP7REhYq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHHEePPQY32hutr15yrcA77f48kV9ee3g%2Fqlv%2B5NBeMCESSBaCgND3tT3WJrjkhO42CpI33h5OAfyYK7fixWJ1y22Q%2BGI8uOpCoyCgnJBA0eOQWkkur4RV1adBeEiJ1EHKmsuB738sU5ZieK3o4pgQsNz76mjdS0LmmwihtEn%2BEy%2FdzIZSNTW6CVdmaXehS6tvD%2F645jcWdTi5tRd%2FXUZHnGUBdaQ%2BBHL5pidHkPkrQ3xfbadr%2B8PDRMX6gK3nDf5D4KuTgc3nelKZ9ykNWBTI5KBc8M4vhBsnZlGTbmfRTFl2AgeDkWUh3g0A%2FLCRl6S9L%2B2vhwS43IkkarBDAPFUvOMTkMcesTDhIQgJBX6FcLZYi1Q7j%2BxKUSmTWq0Iu6rp%2BvJwxBrZIQ16LVDH2evz%2F5LrVm3H%2F1saOEh%2FSPM3m9wgkmqVpMP1qqCFFaBHByjEyCHKaO4z8cqZlo8g6xJLOGOhU9p7DF0WW3Kq1kQFpMWjVmJ9hL5Ppg2ZdjHcDAAJH5Uui%2BGrf%2F7%2FvT5N%2ByyabpA8ZCignI7sKwFeQNJJ3kKQ5QQODa%2F7ojkiTJm%2FEDEax4L7ExfQSSluXyAEUPdJR5S61iQo%2Bb1SBkXhWi4oRvvwuAqPL2x1FPzutwZSal4MywPs3KGY%2FSQSEKMI%2Ft2dMGOqUB6%2BhpvOtDQaE3q%2BF01OqBrbtgBzDBE1jR5pBrEskaaabODrfx4U%2Fi2yVGmhQBE1cps7lZz1Y5acwT6B8CxKU3aSChhE3TJqGx8o%2BrQ%2Fl6mPt9YoNvUwIIAFsKgnfaeBBfcb%2Fcc8mDX3FLMv7MX8P6wLMeHX0oeFNUwQj78VH%2BIEzuas6Wre1hAHlccsFE9IwxOsIvCHf31uobKhtegW5EFaLvC8Qr&X-Amz-Signature=cdad9e737e1e25063ae5399e3b0d623df3f9cf0ac177d961827eb1f88dfcc02f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
