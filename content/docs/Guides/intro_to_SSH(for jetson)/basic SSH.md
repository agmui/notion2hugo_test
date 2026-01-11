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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6K2L56Z%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCE8q1o7BjN5zPgtK5lsRzJrGWjyFJJOtZgQpYflqOPxAIhAMK5MrQewpNFdmi2h516G1p%2B0fBYI4OO7Pu4tcTv8aonKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwfkvw%2FOrbuNgZHA0cq3AMcqU3QlCze%2FmhLpOcRqBgRvcaxw7%2BZjlX3Ze%2FvITB8YPB3K7hlMcy0T8Mfsshw1OUFX1HCCAq0%2BN6oNSMM4P0HY282rUqAhlz%2FHcT%2BvjdYU4pSVqxS%2BW%2BSz5gvNTI9BlGlV38pBO3oNVWOx5UJba1RJCHTSRaB3OaL9lrW5EI8AQxTG%2F9PKYtotL5%2BkPxwDnqjTc7OghKRhvT%2FxX3dPt09B%2Fjg1oCDvZyUbbW1RddbNZYUg2Y46O%2FVi7FW9NqcxbmXZlj%2FNarEgSP6D3X9ZGfWlj%2Fnd0cE4PHBwUwzBVqdA%2F%2BHrME9bWHCKtjaCEobFKNODpwwMyJx7lcgRoej0omrVcgnNle1kzCtkJPRhNqnTfRCg6WJ5Wl1r33vvJllELu0YMUP%2BXyLh2TE7x30YDNfaQE1NjsJBiEPXkCcq7PSaqbBhvX6GQJBKszSUJyHCV5pGkk%2F33hOcCnrcJt%2FtewfoUu1GqkRfltiNp8m9YaMtsZb7xhlj4tDsZMa8vNiLwRYZhRUVbLO440%2Bvxx7y9y7MC8Y0mh1RJbtr8qgys20eUmHwugXEBLNkCWGWFD%2BtNGJvMwibSlgLmfSoXhKOzya4zoxV5BSe9QfHmT5kNdcjwFyUpjSzVQL%2BpA99TDC%2FYvLBjqkAcV5NvPvxsGnMOuZwexgFH%2F%2B0MRWXxIHzZlrG7MkClpsK85%2Bw1QcUgOcksy3YS8ZiIKxmvFKqZygyu21YTLFxAiF248jP%2BruPnLdYTamaYU6MkC0g%2BsCIGVp1WIOOu62PgsPI9wSbNiTiI5kI6JNhn5WKvyODP%2FUBm1gqF3pqPjOGjKBPmFCoXhll6sH%2F96AYtd6yvCRzW4OiD9wsDvLaHoNzXnT&X-Amz-Signature=590a9f98a7db10b89084a3f2bca4889255cd581ac8d91a041e1edcc9ce53ceaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VWLAR4Q%2F20260111%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260111T015653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFMkZMj%2FpTgLc0uiV6LBUpr90ZzxTstmr0TjsAPh9UUUAiEA1kp5qA%2Fr68D0zWeF3xtOiNMy8zuII7BeuOWNqCdwqIYqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmT%2Fh71WqjZMDncsyrcAxbIEm5O2b3y9JX%2B2xeRlXXt93VR8d6ESbOakidzUUoppDFZV2SZI%2FRF7jJ1NeZ8%2FSGDay1aGg%2BEyMpyuG6cHaCANvFxOm1EL7fg8b14d4SmwwZjiJTvdHUapMD8OVzuGiyazWoXCQB8DjfMZ6RubrsM9Mk52gKXqFwIYqNOaNl8AHeXYtHhneuLaPGbL4dL3Vwfv3pjH9zn7WIynDwTYahtB%2BBBu%2Fvgo45qIrcXI6Zg%2Bw50qytjehTS1G0%2BqE%2B%2Bd4IRNrnFjGTZLE8jZwn0SH%2BGSE5Aa%2Bp2mrynHqXFbn%2FcOkW8%2BjEsBSDieurWzG2QGXOwGx0HRI1cQbzdGpQOF23tIrnucaP9NtlAqN2mYbQsPlL%2FDjEl5jiIJtiRcwxPmBpAgS520G0mV19EwvPOV%2BDRHs43Jj69dkW8hfjZRRAUIuvc%2BWrg4ESXgHsJDqBZ7Sy4HZ0EzNeXtVyVGGkGgFVvp6aQ9JBjLqD6glUPslOsLlqkYY1M15Gx93Ysaonflvcq9ZR4%2Bt0WWuA18aeTiSMaP%2FdGeQVIbDWS8%2BUl5WobLcBss15LQ41bUWsUqAWDqPXUmxIiL9MvumutIYk4ucLnKyEjlQIKgI2ivS92ycNQQpS1cXDxEq4L9yAJMPr8i8sGOqUB3pSkSJgS%2BknOkbkTsboEfw9mEd05k5dGAixufPL6Qq0ZJD8JYVHvhhKmgLKzQPa2DFKnFeOY6eU5iRky4ROBKtCBG2X44UJ6ymjLB1pOCdECGNowNSUjB9enPwMJqErn59FUIFpQKJYEBKH9KH%2FAmsZns2eEzrfhqNwHEHczpotdNjq6x8HJen97CmEM9oMb2JU9KTmMh4zlprrE6bnHDd9oHM6u&X-Amz-Signature=d9996eb2ebd0dbea09cf4d271983796af7df0c6c63f0cd410f7eb67111bf37f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
