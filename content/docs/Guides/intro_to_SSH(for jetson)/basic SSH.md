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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BP2XEYN%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDPZjSk9vo6h%2B7kia7OXCuqHmIBDe3r0VF3wNk%2FSH9AqAiEAiqvwE6tEVss8IJgHFBYA5ITuBtqFUAty%2FUHKhaUgcFcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7hnccm2%2B%2FvyFlrGircAw%2Fpy1fhxksqM3u04d7F%2F4Uw7%2FcRDX786L%2BnvPf0jIu2zgBML2Fg2hw%2BtegubvfoXkLl8dUV172MqYKwFAjlrS4m4TgScXF7Q%2FIu%2FQbdo0oRK5aewIUpt0mTMngiSPYY3nsG86KsV5Xo40E8QyAMlGGTZ2MJjBa3KmWJAGkVHmtZJYPrm5Yr3elx4kH3UBTs9vlDX62V2co1pB8aHPZW6ja%2F4zwyRsnL3sQ6W7VFK35tNJdwSkdBzfqQzDx7HBu0fScYHCf2V%2B7Lm1rQ4IqXaS4aBu3%2Bc%2B%2Bxw%2FxWLhwZxZZim4i1dTkX2X21Uj2EWkXa3xm%2Fc%2FjJtycp4V86wvHnaa%2FOp3Nn7RHT9hXbMOurMcioKh8XLb0BqhWXWzaBirmisWmYa1ti%2FpqEdzfW5LpkTM9A7c9pXX9xFJjf0z%2FJu%2F519TZpeL5PLO%2FreOhyoDLth2q5WsPmnteQAFnL0on2oQdHkc%2B1Y03yzf9Eqr8yhHWx31ibPji8pvMjdrmjZfoVlMFMh8y7B3XK8IX3WA7ITUoovQsbFzuesbfMbaUtlgOH8cMk0GfrSQg78AUn9w2vzXgUCN1%2BzrSxmW%2FTNc1hkG1iiLKsvaB%2FO9c8OoMfZub3Oqd55UoUfK2exR5bMPrn3MYGOqUB%2Byq%2FbAr3o1WBU%2BR8uvfbNiWqP3JR3xcE1gPhBBIuu3WrQW4XOLp5LQKX947yG21h9idSGjuVkDuKbnNbq5h0wwdtA6OmvOxrZfqVzfPpyFr68BCsnBy0iI7JjqtRVjPtgdwTVaPIiXMgVclKzPNAMM9gGX4fgBBAaTXlq49VlpH8o%2B%2B%2F%2F8DxltvS8ed4Yz0T1bc7agNJ2qXlnI%2Bsm%2FBlfW7nm30q&X-Amz-Signature=e5aae1745d8649a06919d3698873477331bcecf9d9f279e77bdb9645ecaf32e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3MO3E6%2F20250927%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250927T012110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIEALU%2FTtalUXd05brpUQCYtiUOxuuYdZoF202QY1r%2FnmAiEA5%2BFRnFpmpu0OKvIacZRx4gZGnAuLrs1lIOYs17gU%2F6wqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJYEcEcNN2%2B5SFe2qyrcA7id6kdV9dYHh0Bx3w8f%2FLiTd7OoPLSvejvLFNECLim2J%2Fq0LVigp4OZ9aRi%2F7i3EIYkqJP8wsRDf7cB7vNOQEfho%2BdYil0A1f4Tey9o4PJEFFW%2B9Mh4uuvixU%2BT1rwkYvY095phI3BG39XQPpnLYuUtuhUfN8LWariyB7e2W8u%2BnbYbWlxXfOOrn5tEzJ1NMhDkqkjgobq01vNQJAd%2FpWHdVZMz0VyfSeXkTrv7bJS8FHbcLxxYmA4j6WMZrLlfqjyy2%2Bz4iHBLQ5VQPBAoAyxv6cIVGBAc1XWoMAgEn15B8YZkgj13ZJinn6JScXjEIb4Mq2oRqBGQMlkHniEOgy%2BR9Ccz3O7ziwGy6SZAonvnVs%2Bec%2Bq%2FERQCd6FH3rH2s1XqPRRFkHtZ7JdjSW6xQUXJI%2BwEntFFTTQiGWPFDvOIImf%2Bx6OizbRVHtqiuV1kROLbV9ppq98XHH233MAi%2B7ujQAAR0ex2FkiL8HDS7y0%2BazillY3TnXl9I2iHTekv9LlQiAWJhKcknqoGJXG1QMmP%2B1Pw5lWEYnqUXi3k3jJk7J1TF%2BFDhA6RX8Jx2SodDcqQ3V2NcbcWH9%2FwDZiVoS4rt%2FHsjv5WiaOcp5cLdRTWu0cRllNXKHxL53tjMKvn3MYGOqUBuitZlH%2BWnuTtdAW5OBCEwsmt7ZD%2BBRD9%2Fg5gEpPZd3YDfsOY8mKLnQcQViZg7JuRmYfsRbyls4cY%2Fo1ofnVVCXxaGnCtJ5MdC6q6I2Ya5%2B2QH6llC9osPYNFlNQykxCsR4Q4mRqqXwunlMSqTelTu6%2BgWDWo8My0Y49IFI3ky5v829VMWbq84bvXmpIHhfIoqR5CsScAwKBKTOk6qrzlNDAiz4yy&X-Amz-Signature=a234e85bea280b5ed5f229928dbf8220be024ba4728cd09bf9a2ab88a15a0f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
