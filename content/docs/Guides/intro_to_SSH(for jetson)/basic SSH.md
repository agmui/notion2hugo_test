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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCIPDBAN%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC2aoxktmKm09xg%2B0k8kXdHMpMYW%2BcRtBUgrb695QFV0AiEAkGHPh2Goxezii7tTw5jVz9KLsCNWl3YNTVmUzm%2FehjQqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7qW%2FBzrtQfsgLy6yrcA5h2gW62oyEt9O66p4t5gOW1N3Gsz1WnhusvDsMzVPThkZqbGWjY0ahYL9lA7Wd8eGmufYdCIBaG3YrecoGy4tpfcaDjEHRUjBO25zagYoctlX8wVYz5glaHMy8jko6fxNDZKDfqwzM%2B8OmkmHNDiDf4AgwL1YUrPO1KL8n0rE8Sl%2FPgRwa2VekF36k9bFUad6WHmJLzOIZUfHoRKZmwreTTVu5JyRNIRcGsL14WZp1nerl1z0D1XG65qc2bTPZ2hwOvjbmwq%2FgoTwBU%2FT8pmmjEMiQ3HsxiSJX14dv9BTSoqm9YySTC7emmZIioY2wvmDpDHBUphNkbOk%2BKtNAVwIf4oPg86o3%2BvvURje4UJKl66qEeBfjGFmGpAKDefAAlVgthZcyz4BJqrkIQFaW30w8ngUuZ2Fa9pfiP0%2FHZiYmWvT%2B%2FyEPM2kcweHkowjZVB0CCLyGJNLVm3QEjX0o5EUvnGBkh16arDiX9VboA2a4BaIvi3fMXWITB7AVybG%2Fx6VkvH0HcCQ%2F9UPHBEAikI1N56rKFlYp77b4c7DI68eTFSG4wEoM0%2FPJpcdubzt1eIMaHMcEkDKCjxAjC%2BbTqDzynfEpriy4ggEV0c75smvQ1nbXMA%2F%2B7PymnpHSAMOGx%2BdMGOqUByFIBMAV7uJmZTD4a02LOXb48IXdUy%2FReTzvkXT4h83UaoieVu0IDflR2C3Rn8oxAf7UFkoPifMO4oBUV3r68CWnGfc0bDcGzPseMG6bfL1jAViGIc7Hqub0ZiAAJSXgSqBulTIqvcniOpMujZ1jpxfkoyKqxIG1ID5%2FvhPbC6i3u%2FGmOox9AUn8qyYY6dwokwc3fKkJrJXiHVK%2FVNuVTGrF347%2Bs&X-Amz-Signature=a0f9df9a5f71f8cbc7d46b88c862d81adb300dfbae4c8bb1eb94c2ed372be77d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XD763JA3%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIG4C%2FV5vHoSFQDAtHwqRG87ZJMHv4m%2Fyr2jnUHq8ioFyAiBKkFsALzP0CQ54Ur2%2FY%2BaEJAaOx3oYAaYlWGzlg7c67CqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY192q92TfeTHo68rKtwDNeS4aOksFsHT5CUtYYsInb3ZiuTl1nV0HsqfeqmYQMyRtYulznw1EWUtpoQH1KLVHemOZOXg6sMSeloEqE1yDJKLwGkEpZzS3iICixsjgFIr2KOwOsqL1BkwzQBqEC8tZ7Znstlh6hWI%2Fbkw0KplUlPHFZWfLeFxCJJDrrJesstvvAqATGV3oNwuDIrzXUvKXT49ZHKtirXGjgl9MBw1iKndYUJoijEikpmOVPqXQWvGVLA0rUlcZnHVOxTRzRCJXssCAcG7tpk1JeGVhxG2qucsNUmBM2bU7HTdQh2QAFQPi9mtGVf8DaqJqf7AwCPRh%2Fbsnmii2pogt7ozy7OccI73x7r0Xv4nmdpYLpmFd%2F3TZq54rtTDZjkWUXhFJEfRZUBT66Q1OpF%2Fx6Oq2MUuJk1jlU02C5bN1o3Nst3CwpQeOHtU%2FxyHTpNKdPpqrL6HQ8u9CD%2BYbxWDw2VCZ4syXbwWPNuOt9GOaIGqDENOQPmcjIgWvBVWvrmn8WgiDlKiROivsfbevH1hG5MGqFx5PXW0BLVlCYOpLgB6YoFA8N2fehzRvIDz1mWGqwPNBpPnN%2Bpg4r%2Fq1v5BVhW8FJJsfZOh92Z3q8KHhB9FWbxiSV%2FqJeZcZnZaQn5fJzgw%2BrT50wY6pgHJPcSRLtJgwoHP1T4CMUyCO6exsMv9idOkQjQLir%2BGXb0M0bKqJyRrXDvxn6%2B2tm8%2FYOtheVTRyKVE3eksjUk0dyCZElY1bSrPot%2BZTTAnaOQQ%2FwbHrN73vD0Nt3XEMW6tDONbw3oBAzc3YiDftf20f3M7NzfeHPnD%2FkGVl2czlECUjdftmdp8LXRV8YlOlkZ0mkDuVYfO0lkNi3p%2F8ijGYMQLzLyS&X-Amz-Signature=1adccae1d939015a39700596384981e8b99e9ad940239b04cff8784c67525a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
