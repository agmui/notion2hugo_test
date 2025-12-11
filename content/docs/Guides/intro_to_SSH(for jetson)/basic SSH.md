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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG6F3IBN%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEMa9weyOWpd0pNeRgr1FRnO7d7ylvCcUjDq0FQ0iC1PAiEA8QgGaUG2tU3J7T655SjIOoFb3xlge03IxE5SU1Dw%2FD4qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCtYqxAbEmVLojgCircA28eZhLDm5HMKCfp486qLOttlghL6fAoujKNLW%2BQHgjBQ4li2s1BDWGIdjGVmxDH0YoKzdW5RGhr%2F%2B2dnzU9mil2AVitFbnE6NF4sXjlfV18Rg7Q%2FIIilyZxQv403w3ooZggCblp1o5hLfj1YXyq2CYMqqEAkxSvDVdqt7QEEK6Oee%2FTvsjsne5O4qGp3w91him92S8eQseq%2BBgbCKuOVFnT%2F4dR38BHiGEfQBbxA4TnilO4InT1mkrxhfJfbSr1nM1d80l0d4EK2i8vArH0aV%2B0Pv5iLMeCATl531F2kRRAL3QvT4uwjnXqpwwnebXaclD8siftlA4Krs4utl%2FzgG3BVYxRWuAfVNNdYaVtgLawkliCgAVHIA%2F3q9BBPtXmNBiAAEIizHVuNtPgNghuMSdIoe0KXAiBKjBGpPK9M6L52OtNv0355QZncX23%2FW8fykb0BVGEUxfWTO%2B959ft0wgGtuPx%2FC9EsNAwuBfhvjq62TzbeLbeIcQ4r7w%2Fs2fi4ZkcpklfMAtcaiUxgsXml2kmf9Yo4xNJzjKCGLf1%2FdMkk9BpSv9L2r1gcuHkqzro0rzr1MGBvo6Shk8KMmKWjLbc74BBWR9hLkU7aMe5j4RJamH3w68BfjeyQJjXMMC16MkGOqUBFyk3Hgd8MaIv300%2BBgnLmnkX%2Ftd4MnA7SuExFrHtGe38KfQigPAhLz0kM1IiSPalzErkYl7RjZoMHIuV7suB25tCvA3kkm9DybdrYEMxBUuaiNhghxaVRv%2BAFok6CP1AaLK9WMwNWpcPsrSVYaNJ4rPZWRyWYKFZVls8JN2AWumIIDE1uEbltcTUxTIeN02ksGXNFCPkqvGlVvCslAop%2FEtHcBO8&X-Amz-Signature=cec3585c2653fd25f3ab390aadc09fbb4afe824f71d716fdd86e0a6dcf1ae0b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPKVEPK4%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCUMaUvI1PAv%2Bf9Hz%2BsEfuFlsqLIgKoURdJLH06AgkqgQIgOl4A6hOwYfGo7ZEmkkkzqBzoCrEAIw4%2FrfaFU%2FgTQjcqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgl81usD7r7lLUPHyrcA8Qkr5HZpHsMX0ceRIzpyIJvnQPZYGW%2FfAqSUYGfwxVMCPhrhSt5GJdh4rw%2BDyzplzneDWfcqoT1jHt6APKF%2FeXoyh4EPeFr%2FyLuTrNWFnKKPISHuwCNotGX91XR8SiaYWMyNQTFi%2Fm2xvU4WkEbb7IM%2Bi0cVjxfLP3GfskBv5QyS%2BM6BlT5a5TsbGNJIRzNmEBTNrw7Pxok5eHXcMt8HDhvhq9OAgZj9PFQ7PKknTfIwJTTpzfTMzYR0w7MrE8ezNJ4%2Fb5JiQeZm56TcGB9SEHOJ6MizMfggG5FN6zEpFkAaZBi9KPRfSWPtztpkZb1IQ7QHC60DgZJQ%2FNC61Mh2%2FpyO4lfrJyxhij5rbDm0t8kRXrEiIiGmjX6dOlU504Zcf4D8lS30tscYsUgkXxEHCvSQBjSVjPt3iN593EFFJwYh%2F6z6LsZav3B8i7hso6112tX%2F%2BvjOtv2aytZ9VylI1JIlzzISVt5s9U6SxXIEhdGIgmT3aLbLrfeambDN%2BAjD8cLWgetUbQvun2%2BLTxtd09KkZcABUTDLt4mTjlLIz4aQCmvyKmDuEULiqIAD0yDGGXFjn8z97rNCN%2BgYhq21UytlghTn2mkahyPBgiO%2BBkBNMSZJDolVA5OF%2BnyMIi26MkGOqUBu05X%2FMytiJZ61SXnhSKEjVd0VdevYPPbJFIJfPrfK78VDyHnCODiBWdOma3dAVo72%2F0sS%2BkKOQ5v84Xd8D79D8sDJ%2FUiBHD6ZqUK66y3Ur6nzKFNSwCLyUO1stNM5IowjCIc9UpdHIhsZFul06IIjKHAe2kOJwDXMNO7YbMR7TvROCgWxkKFgCjo17uDIsHnynhIffjfS7wG3wuESkVvANHtEm6c&X-Amz-Signature=65149a7169bb240348ff30e486bf46c0d230c9e9188332a934e41f75ca3d289c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
