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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBHZ2N3H%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCsa4%2Fvkk1Wvo5rh1fnWBgOUKBAU66YuDlYrxToAB86PwIgVQMHOcCbgukiWS2Xeln8hl6KmF9GBRyBRL2WJPRMjR8qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFixfrQtTTVpqTGeyrcA9z%2B7j0IUJzp%2B%2Ft89JYSrkwfrIVb0kMR650MR7WdFHwN92io6pnP7VPwIrN5QljpU%2Flx9KGueV0oeF3NV8JcAxTzAQrNRfIN%2BhEcIcxuG3%2BRJ32r1mxuDn9dGhg3NLu2%2BTsN0xuqxxwZHLTad1tgpUgBWm4OpS39dZxNvrssiP8cgqLFRKZ76jV6YQo0uXcdzikj%2BIOj6%2Fc6TNCue5ONut%2FVjhcc0ZT04QcFajjSwj%2FyjrtTmRS0%2BvTyy2Ym6JCvMYX4rvYPHw28NAMFrNG1P1rRx6xk7qKvL7vL1a8jHVysov4fOZfB0RgUGI%2B47%2BxhrZwTv8es0yDtiLL0VSFrpdOXMu2Fita9FOoCxby0Q0cPjrI7GNEEQNpAtUorTZrPHjKH%2Bo5twCUe%2B%2FZccWjCJDFMQ9iA9OA3W8w%2FfzZt6YZaPJt1is4tTRTk5tZRKKRDcrVtrg4p9Lw2uPjkcGv1VI4c0g9UsA0SXa8f7jjnD3qtDMKT6UrT5sZdzQlxvqrjvRFKAhy18KDUNPP6E5B%2FTvX5YEjNsLf0oDIXymE9imNdk6MD3CeZxeN7Js3JocuUkDbGpe9Lq96Y%2B6BCngp6%2B%2Ff3khKpiff4a1k9U8gFjC6CB0Mrw57Ed%2Ba8BJ8WMIfYpscGOqUBl6rgXWmcHgX%2FxrUqcoyo%2Fcq%2FKJLVU4X%2BovZPYpMCi8cXQXUeSOaASvQxM5HGP7td%2BMDwK350lvgzEbngXDet7u5MN9WS0alpNR%2BPig42J7YvosxqqCxjWqZDY0s%2FHHl0xCdzAHn00YMJCreIyWSwf01FqIRknLgCTnTWTEf1BCauAg8sOEG2cRqUd1bEAhnaImPVMve%2BiQd%2BuU0NwBroBETnJLiA&X-Amz-Signature=c1e54b9d97dc46fac38ade4e1b69ae57d83df1afd029c5ec6da9602599eb33b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPLTSP6W%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDZOZsVY5qb7ov3CkD6N0VD5KHMe10%2BoOTLC2FErwQp1gIgXE%2FmgYUzqDYnciYQEBNpKxP6mDSXZeXRt1rLksIUPqMqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH6mIl1JGvPacXXQaCrcA1tmh2C2oaeiY74LzcLOpJrUcKERuZJ1E6xIOpAf2yUkz3jZdVosMBBr0EE4vXc5UwMXdR3N%2FxYNkWDHUixPTFt1H5Eo01TqawBOXjVVRmDm03C04S5IgqEwZJwqLSr1w9kTOHwf5Zd7%2BCavR8JPivWr0cjQ%2BEHQCCdu4vJMflAsSHTgxhbIMv7VA7VVooFwsv0GhHRoYkmawFpieHJfDFrT9moABQkCz2%2F3xw4eOaNoIILF%2FozyxVABJXdxSMykHO%2BFCAAdDHykTMtr53GimtxAXa7IC5eXk%2FHFXm5fqE8y1voW0aZk9Dhuo%2F6EKb%2FjtdhEOohk%2FyJc1omtzYRseRzd6%2BJBnIz2OK%2BCCFiDF6He49l9NPGNbMcCpnja1vhIbGQCTxzOlB6gOHi2sDjibEml%2BMrqZJdKNyX83E57jfUNkT03Kbb%2Bvn5SoN6SjwZJFgK3%2B2wUtAdSRl545BeWlz0%2F3nIkJfyUGEV4R58O8yevMaLVJcYV2iee5DT6AjijMg7O%2FY3KfmVQMRls3pW0IF%2FhsBJ86X%2Fwkg%2FnQLfI51Gnnxtso3u6O4BsQgikwIe%2FKEG83aTZEC1g32hR4BeqZbr%2Bg%2Ffe4iqwexHiOk8ClXvninEkyIoTKvTP%2FlIaMNTYpscGOqUBENQ2MVnLKjERnnpHyzlGsOAh0tlbbAYtY3XNGug7IZg8JMEg0FYWts98WM7R6eZ8wyCP5lIiYTUw9UnsqXSUjr8joiHCb9D94XBcc3LejEpAqabwogmOUZL91kjHWhH55EIHwfMrhA76o8%2BCLqEJMYbFLifkzPnFB25vNnZiiUn9xQJ0yPJW%2BXxEppS1YUcXW0FDZO7%2F3XhgybiPSQNx5C4a%2Bv6u&X-Amz-Signature=ea43ab363eacaaa1b1e65c9e2a4bc31d94bc566a09c8edee83318ed906909fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
