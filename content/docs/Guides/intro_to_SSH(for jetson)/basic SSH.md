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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEHQPRL2%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIEp43D1rOVVR1Cd7nOnzI6fGUFcepo7TJ103JLW1hlrLAiAQvbrZaBrU%2B3NDlEwiLgT7lyzw6%2B9tNKpasO98hCHNnCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM1bgFJaDf4GmRC%2BSoKtwDnH867ImY%2BJzWtsAhB2hFY3bvQO8qhVRGkdVdwJjjZCS7UNrzvzxzAKZkL8qv9KJpnsEHrYHgnUvBrLV8LlKzt3Aonjc7qbo1lduC%2FG1Qo72%2BwKPJ4fsOnFj%2FClz1dMiIeYVhwc28UUOSFyLkV%2FG7mhScgE4A1ROeaDllUlRFXRkbshyWRVdWr9KwI5fw%2FHU0xT2ncMbZO%2FRDwfziQ5GE2dIUr6Bebqdwne%2BlQ0O%2BxagiMEj2IPVvVUAigLI%2BGAk6iJsLu0t9P%2B3cvrz4nn6G64Olgftfnz8mM2Uw50ABCdinBisP5FiKxiYiRPBTur6MjlJ4iLUPV8y3l32FlHX5%2BwYuQcREZBqy7dVb9hJFK19G4uBNhDHb9BocT1kxAY4nO1W3rmyapwca9pARda3TKEB16jKLCeqp4MFmEZFGkLKhtCgoBqN7ktTZ2QuOu6SdwjUTgzycgVRuJnkuOWIYxfhkKzdg0nWBgsnZxArj4lvbnQpXqBwKVe0DwDOezEA77nJJ5Jsz%2B%2FKTgmakjQDXh0wgrVf2FnDqxzdk2r%2B62Rmk5O9kkgwUq0piURyXFaNQMMX7DckjGithHxBBo7G1VXDMcsPm6NnNtDrojee%2FhdgKQw8AoJYCQLDHlW4wnNCszgY6pgEIQy5c%2F5QG7b6Eh36phzkN8vY0TQDjJr%2BxGuyBmYoYqcYb9bShCnZsoC0i%2BTiGDcp%2FIBZBcr1tab7eW8HYdrw8IiTlyZneYEVfaSN1fa5vdpiI0myJHzPRi24KUVO2H8zhmfL%2FUZ%2F2mq2vEGOJzk8Hy5SkOc8wQQuOFY7syXqGPq6J8EEGnTLcusZykkkfsJxWLN5HoppnTtvsv%2FNBG3OctdsAvbcG&X-Amz-Signature=cd15e0bcf125a7bd40a2401c00f91e55bb9cc93af61d4e6a71d732a03e11d9eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676VBYOUG%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC2XiRXwCGrNNoRgXswfRC26XYnrDHoqZiBhL4xQGxjcgIgTNkiTGT5Ilnw7mg3ySUznW0ylFgqnkGVzKFMkHogWjEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJMZBYi6rFOuFgAH3SrcA7egUcvWHIbO9jWVsOsiNOkBSzkcnXgT%2BNBV%2FlHhSzwgGwIZ73Tw04KQTutV2OOffN3TdANKSoVD1GhZm9c1MFNoKslNlnn8ALQk78n5FAJ7enQmJI%2FHqbOj5eBuqFUKfiz3rLxhLetPbafGjNRiAQzvUgqaEkY9OsSu3eXyMV0%2Fg3KyVKthmCkJZ0OoCnvrpxpEnEaeCc%2BywUEYcEvFeDFkYF%2BsJ1M2PWAm5tuH0ORa0MzCmMD1eAXnh6xHADdLToqswaZx2ixOnInDkDCc0myTV0zN94fvUqtlm4gsqF7uejY5yqXj4kzvRSSu2hbTuj5fGI2NRATqoNY%2FIvjqOqNycEKZ71XD%2FESR1B5VOQZq6ErLEr%2FpG%2FuCmTY9NEOY1zZZ4tqr%2BmZdF2TAgeJilfKof5LCIdemvqhSC0S6mdqUXT3wN%2FZThynpoe77Ml21Oo9rzCSjf0pWzHv9ZQQkW25sISbuE8P1ac40xdkwwjMPp8yyhemqxAh3fcl5bF%2B7MTtvHyy5GhTR2rj17FIMw6L8bO39ZR%2F6fPhh9VjaVH9fclDpI90NZ5dWrHt5oyeviFspV0ni14%2BEUAc804aLmnBpYiqg3YQHd4F1%2F5CRCdM7eOGTcXkwF%2FXBDoPiMLG6rM4GOqUBjo1G4zum3HI1bLjMYDbATNJrZ6Nx7QRMaP%2BYFkD5QgliPWYc5Zc6x2zpoYKUFtLwvEeC1xicEUW4yUdYLyeAo%2BFkV%2BK1smizmyRFWE2Mo5vHkmUzdD3Emd5tb%2FqJ4S8M2c1RuXTr5NPfa1hSOodokk88xF6X6lZ3xKJjnCGVgCnhGaQpB5PjJmfM%2Bbv38YzCxMeauNQbmcto9m29X3UQgFTcIf6s&X-Amz-Signature=f3b6eae63ce7c93b9df6fc1e3fb4abac55dca07290385d76b3326289cd485a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
