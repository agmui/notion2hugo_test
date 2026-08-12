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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TS57IXF%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2B9%2FodLiWVFyOc5Iq%2FGzIgkdbclZPn7rKFZjiuDzT4EAiAmDe6uq35mzRyCRTFj5UT1hBi8StVzIU2F8ILPQ4yWVyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNUSvdO3z4b%2Bg2oJwKtwD%2FewLKVEuPG%2BmfP5tK1yWxist%2BuDlkCLrx2BsAiDJfLjQnT0AJXW6zBDpJecmrU1kKdz%2Bxz9o0JUBl%2Fo92wzR96WNGnM6JYWpDx04SuI3Fw13M2rPnrOHz40rtxZXgXf58jLwPzURoviN0EPXeGAk1ISN8%2FeN8%2B6w1sYcYErYevy9LVaqyOwPwCOK7BOWkTFt9ml%2FL1PglP71dZrdWLKGO3IgrMqXwWHBoUOE961JWCkuNSRCRwm1K7YCr5H9U1yIZk%2FtDrFRydEPb8MPwErCHYT0mvSOvA8QZVoghksLrvMf8EnUzVFMh7tdwm0lT94cTyWhKFoZjXZLEsq4P9aIE6%2BWAz%2FDC0p5nj8usK74oapKbY7fuYOIV56nxKkfQ4wshnTveEqdIEyOZHQXajmu7d76fhjKj7J%2FBDzDtarlmYcKQplQylG7CdmLyzrK1KsRwSFFqaiojEVh4ykBxU6Ix28kXXIOSXdfoJxNJNQ8QGgFsOvB%2BG6Doypad9I0bUaYrj79%2F4vm6qJ9TkB3TUikWjagt0j7u2oeo1Oducb%2B%2FnfvKn80zFAybzKJglGnQMF9s09OB4W%2BjqNV5cZ%2F5Ald2F1LRkFgo3jMUebDYQu6QDyedtyMyYo%2FouAeokAw2enu0wY6pgEy2JqEnA%2B4JAMqcKvjKWT25UTMMvlmmQgnMQrnj4YRKg64VJDYg3Jo9lV5qS2VX7VH2R84S15%2Fj86otSg2miopPMsea4cliYdLjkKHJEILGP%2FFCb0KV3WJM8bVwpSBnTdF6W3aY68QcTnY4Dau0M5j08%2FzSKuMLiTLxshzYNEsWkU92hlsCr1lCBihfloC6YPuUon6KAEAEpOP8MqcRykuQTkBEg%2Fz&X-Amz-Signature=03ed77dfdba0d6a0f5256a1a01473a5af1c4f0edbfbff46f3bdc1ea1ba239761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636WWYE6Z%2F20260812%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260812T015618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICp3AO1dfVMc5XEd94fRiR%2BJqQn8QzFcEvCDT9%2Bvr8tiAiEAz0gy2ndjGf5%2FnOzYkSUmFXleXz7QO%2F4U2CamqavlGugqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIXvPRpi5nniIjnOoCrcAybMr%2F3eWOqk6Xjy2%2BKMUDrELcUCV3TUtvHGXBxBHbtLGnmIG%2Bvhm9TZsL7BE3Cdo0H%2BYo%2Bx06CMcIkQOTp8gkrBFhebIlrGRx%2BmZ2otFIiLQugy08iyg4iYG54XpamuImIhkC%2BHGcv4ctK81TfOUC%2BhpK%2F70YhYEUN1qCdVhJ5uZ0EEi576d8udTSEXRc9DbindvdNw4wi42YydZN82rp2eJpw%2BoWat9k85I9XFJnrsKp6qOrFFzjPWVWll%2BtsTIpMwqiw3iYqXxASqSVxLM27Q%2B15u3K1bq0OXW6ArBoqEb7nE%2BS9MIRRKo8ZN2sGtVnUGKlro8B%2FHnMupP6oI3eRhb1fbWaRn3kA4u%2F3lQ6e8r3K8iTdFctTD3T3BpIaNr2WMU3TRWXRkn4VheCzV%2FSj6i%2FoKXFlyBIapF%2FatcDE5UHpiYHflvraFfqfuPzvWvYTVZ5vPCHsM3i9QjQvwtO5W9qiAzfi5vzSONmplTlkQwQOUG0ZllpUU%2BdAV1ghpIQ9JvqEzt8dH6evLhfOWxxc5F363bElrXEUyhFv3FRenC%2BK1NAE0GyCS%2FpnWpRUIicGpK2c5pHlpCtx%2FPsFL3vhRnkkS%2BVFD87LD%2BdpOe4zpRkU5w9I0LWZ3m%2B5EMJrp7tMGOqUB%2FoIL09KQ8LtTY0Bx3jqQx4xr2eSRqvi9%2FxGPnk%2BlceuAb6jlnkMtWy5q%2BZCgnZfz8ORo%2FQOs5sZP8i7UANXqa4i4f7yDxE31pXyRmZXy3cGnvnbeTSJ0jh6OX%2F1rhffNA1tGVxn9KD6atPA6%2BNcKSnsgCjyFjfL%2FSPViQg3KqltoNrJ3pIQfX5VzK6f6eU1fw1UvK9zUNxAqoDOwgkER8UNNhYHo&X-Amz-Signature=e0afa74a2804a59b6a4e71e3e28a5b5ce04e9903f9fb283e53ca690c31500b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
