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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623C5DGBE%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIGakGp4iSA2mpiZMh2DW2oLVxVneNOe13ZW2vqfD6B0wAiEA%2FcZuv3dlRGow596d9pXAvn7UszrQ9RxouAK7zIgAkZYqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSQ456AXjc9PKDg5yrcA8hAdJECpXwyESPHZ%2Fiwij8NfezDOttmk2ZSGgS7hd6%2F8s4NzVI5Qe5uxQ9A0FtXLfcK%2B%2BlpW5uzMDV%2F9jYv%2FHfjHSa6oEQ8pGB0Ejwc7E6mBaPrFGpBHsEkuagsEhZOky9RG0tQCVlQrUQJRJ54vgb6V2vwO%2BfpoI2WFBUsTnGk7E5bNmwTzEGPIgG9IcA2FCAAI9kz6KVdCklh2joP4ne1y3pppeLXOJfhMqWtRWNtjv6rTsebn8sSqaTaRaWKwirNspTEooAFJxH0t8vpnNjt1r6IxpJrE1JA9nyhn8D8WzTQNMWLqi0vM2uWjTW7eBZyCZBfVhhsEOAox%2Bv6ZwHpjTokwoSi0D8ffAqTWDGlWs%2B%2F%2FSV5jV0EvHdrIbZPkmf1xhRTajFVh2kzWzH%2FotrTLVv2kJD7w1aU18GcoI427q2UsEJCMJTAbgPUzv0KQOlEaCctoC%2BnC6aYK0YWkJt1H6pVumP42ztegRkq0kZPXTjy2o9y%2B%2BLrx8toh7mKUFbu%2BoelXZIO%2BZpXbK%2BuqMzhJdjD6djHgXdJhDznsMPejFXg6OO%2BHgiAcefEC9FgiIzjZL5ZZuOcmCQ4nyRSIjig17q7X73OIfK6JXGdy%2BskPjNySOtaFtD6wE0TMIrYxcsGOqUBOUw8rkoAyBnm9KoJfIYIUrROlXiDh9xshL75K1luenU%2FpArU34ELJk%2BnKkQPXZX7HaeYXUbPEV2dUKLuiCV%2BgmHTNxMUO%2FfVnTsq%2FvLWQ6Pqlf%2Foj63Kas6haWGbA%2BpKPx5VGjJsfwbBtLRDgqUhvqGcQXqFOi9%2FE9UpPzqtAkTBv%2FiUi7YYtZIHkW%2B4yaWhx5bouDKyQsO2ZqyK1Yx7y19s3SIR&X-Amz-Signature=dc27f70c947a36a1641049c139acd4bbcfc39e9090b07bc0f829b14b547ae698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKJYEWD%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFsXxoWQ31REZ50J%2B07NM95o0GwOkO7kBn3NZNjXuhvpAiA7GpLVfF3XrIC2kZtq08M%2FmTaSQ7hqKuCUWZpI81%2BnMyqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyq60SskBesTLFAAKKtwDroFKkZC7tyDeE8wmmxV3d3eAkoGjCj0zRLoaWHmdoBGEiKxzHwhyVxISI%2FRRozAhaZ8pKyCLJk7H1ebEpjZ7ulHkxE%2FXG38XYPcbQp8qbTPbTX6TwzwxbxIHUGZIKgFrNWVFmGEBvYl0STnt1DSRWrBr0iBeEuYIX%2BM6t60Hxlz6EmTzCtzr3P9MPpB%2FnzfngWaKnaEHO2VNDuEz%2BJwFETcI0Y%2F0vp8zGEOXVwBumEqb8es9YlGjMJADbxrIRecoz0H1Q3tvUZMUbgwbVhyeWHV5BmuIeK48S3G0dJKV4Xvuquwwr6qmjy%2BknZmHOoBUYQ2Z0HPmKH3hJcBRYzY4fpDzzGzt5a6klg267xj9Nr8yQAF1Du6t4R%2FI5XKWQMYnV2ihCUFpqrou2uJ3%2B%2B0n1eMfUWyJqPtYi4hwCHa777IWhCWUwRmZdC%2FXhIx1ciWUEtGgCY4W3WKvzFi7r6Bd99BbkcFZtJdYILaqWqLuzzmDMMV1JGqoIcHJG4bRGMyNJQ8tkjcjixZjd%2Fbhs%2BDQ6Zxkx03qNAT68Kjsh9BzwRnQ96tQDVlxegRFSFdjaGRVp0b4b0AC0Sw37Ny0qt5DMJLRU1DzXI6hWEHF7YcINCgfqw9zdQRWowZGmzIw79fFywY6pgHl1aCbLEQpadjJiPt%2FWH2Q%2BI0yULfLKiu3cTktusWTZ%2FeYduHwgu3WQffPrfgP3OXWVkQ3myYk8pzMukke9NB1NKTpmOFD58WxOL0UtvUgNkiHw0xwQlrVn9L4eurS1L7YkfgtR7Nu%2FqPfsnp6A8Wv821kQ8Obwwz1FJkxlIAA%2Fv3fy5lLy%2Fkr%2FoTOIae%2FhrhuqJm5tS1eAroMjgYPsiTV3liZDw%2Bz&X-Amz-Signature=89060d5c805f012040e8158f4de583daa2d13806effbdcd2d690a83d97ae34be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
