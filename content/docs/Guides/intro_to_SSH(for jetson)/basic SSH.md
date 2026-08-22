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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RGRS56E%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWc4LFS8ya0PhvfFIktCUlxI8uWX9v8dpnfubolN%2B7TwIgBXCeR%2B3VWf23HC4PjtR0nH7JIvtpWGmnnQRBELJj%2Bb8qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJ%2FOFLTjpQKrJruQSrcA3E%2B181Xzkz8XVbveZeZKf70X8dHPKu7W1JDgCc3nuLAkgcOVAumH8Krdz4dbO%2FazaYk%2BYmi9wXS4DUOvMtWScDtZl2r5stuolILAjk%2FUvR7MEHW%2BwXdrEMqs3TgKPGx%2FD4sLHhZu3eSDPWCEhk9%2FPaV%2Bf7Uy%2BIdeny0bi6VU1xIqcSRseW%2F7fWgcRMd%2FD01ysy%2FRkzmM%2Bd%2Fsq2fRCSNIFnIgXccS7OdRqi0jQjtEn96taJLTJH8W9U1rIHM%2BnPsuXwLIqLdmtMj25S2FFSLdckVKQ0BFz3xZ1bhkA%2FW3oeUieT7bY4cw%2FRAB3tNrZbZI6wJCjbAw3G1KkoKT8ykHx%2BVKO1cTR9wpfm9ZUDSWjZwkcJzymNCG64QReitIevmYdV%2FFssT0%2FbWOvTNbQXvFJApQOhQi0uddUDMuUC7LKqVeQyY1Dd1XWT7NBCFjML2IqQFqCUfdzgK8z%2B5TG9XBCIue35bTLULeBa7lJDP6rjgFhIlUtLu6g03AehyNgiTSA7bdwWHoSLnjiHUvgn9%2FP6jlbyzEV%2F2rqozqmFwuzdnWJS71HmSZWZM9tnAlkQIUG3GQ4CkOSlz6S7FrTRAfCbU8kOpG3cRbI2vrXjghuwvmK4Mk9woJJA1IJTnMI%2FCo9QGOqUB4EVHwKQiHGjJL80sqDtzEdA4xKPGz7nRZDHZP69%2BlJQyff5TpJTUkakMbJa9rNgerm%2Bly7EOrAsu9uXapRn6N%2FzWz9BDVTlS1bRCJN43ZsZ%2FSWnY5vLviGNMHRRGA1v%2FKF0wRbnyza%2BqHYSPDNEa3x2clloAhAvPOGvZI3oFNr7YyrYr%2FxJO3w2c1mImYBpJjDVbIogVh6dlQOEf0HZw4cdZQPOh&X-Amz-Signature=13d4856224e6321f395e77604e22612495aeadd494f70778d80ce4c5784d76ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6PUBZCA%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMNAmePo8JaYX6ApPHiE3FGN%2Fpx3HnVZFlwZHDZcVMsQIhAJszDIpPybY%2Fff5e0vIvmQRjmGpFNHYCNimcb888BzidKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCa9%2Bf0hNIqLbsdgEq3APDFQobVgEh2IFWXtvdsTWt8A%2F4UCOTiA4sYx%2F%2FiA17LhvHfkVTIBfY8gNtgpjl0Mz7ANuG6w245yA1kb59qxWBcsLilPQ49b%2BefwRWJ%2FtHU%2BvlaYMVflA5PmFqpO81Oi%2FBS8CfYRdHXqvTeUVQSnj6pwwzG%2BkCtZ6Jqs%2FNrxiw6AOBwDuE7ijgxyGwqFJyeoUEE2pXDh5oZehIXnI1vCalyQIFoETT8Bjpw89q5bu7qQgbiCKm6a1olpUdtPhUqhJt28TWd7FnrWjH5FmBbGoP2E%2B8z0hkwJJ7%2BBrzQi%2FTahtLdLgHnprzKXLBhJYoMlhrYCxIKhEDWxPxOY2CazgonwslvYL3eWTESpK%2FzkEALgMQWhRqxHJ60ihb8MhLf0SEi5ivTnqVkUcG3xFgdzgYPhNwyLuV1b40iOyZMTugtGx3iCJM09xf4O8wltolftVj20i%2FCqKG06vphUa99YwzhYsos6K0zPovtAwe02qTrmAG9a7EtWTJwS0xt380hgSRDG764VgeOpHPiOo%2BfcsasiWgoxCuXAhC3VYD6veZBK7k8Xaj1X1iiFwXfWMyk1FD9t%2Fi1T77EokguaqTagnPfRl0r%2BwMBLApSNt6yS7ChhwGySIGIbshTq96MjDrxaPUBjqkARq7BZQtHu1RDmTRclC5xHf86rvm77xJlOtP0kc%2BPhw1t7KubJdIYtlqgParGuBjyQV64F862rEUdDk7BIelqnESiam%2BafhtgP9eYXqR%2BHWf9qt0%2Bq0uSoO1dCwUJBkdJjXnHIL571xhO8rMXDTbkXrg4hnqIbWwr5OKN30pksUzTOhV%2BkZ5tkXhm%2BhcHW7spQqH67bguWV3eeVVKmhpy66F4weQ&X-Amz-Signature=6dc923b406907391ea65fb6b6d33c6428a686b67706aa1de4332094619f34b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
