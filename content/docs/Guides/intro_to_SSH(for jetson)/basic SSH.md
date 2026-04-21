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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E4XGGGY%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIF0m9v6lgIcATfUAWIVLiumoSPnP33gNGtXQa9R54OMEAiBWs16h0rgqN9LYGD4rbBm%2FT0oSiUJBi4gsHnN3HejrFSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMtBwZmnCwdCP6kNLuKtwDAJ%2B7NvDAAWnPr%2Bq522WK6abrW8sxRe3300VNEC5Om2S%2FQXQGs0sbQy37jIomAFez2rGkaQ744CJshp4krmptUbmDwoVul7UzSUpzEHfx%2BDS1hyzAuWocqR0aZJVw%2BkgyEtf%2FXbhReihEs8IGM90EAMIGyutVJrAdfkuxFYZO6XaHzMvl2J%2B4ctvUi%2BWP7uCdqSvOMhr560vXosOzXqpq%2BKRl0YdE4T6uG%2FxZdUSjxLa7M4ACP%2FYTgnS4GYiXoTQOHDtvKrYURWeQXuDnk7WWUJzilLSqQY1emmKREBu46H2%2BEdSR9R92G%2B7zuZJNQe9wzLJJyPnGmHDhMcfxKTHdErf79%2FzjFnS%2BdVqg3N7bclqKaTDUEEOYLCYa45%2FKBJg%2FmHcF1UkCw6fgfx9347%2Bjcm7L1GlNZ%2B788XtbfBNFvCiXoX4UP%2BDcPTVn%2B4VnSUXT6TWYfBo9TvLJB%2F3hU1GD29EVmrQyXCxzCzEIs4HogW3YqkMh5ijfe6B0edJlAmwxvEyZ6aeG2YBQu0wsqO2LBaf%2FF3aeaM1XDitqnskQLPHizDG13ZAKGGqxY2o9UxUiMHW7ucGOrbRjdnH1qErShofNWh64DiTHzTGhDnQViaHRz19sg%2BBZA%2Bgv8ekwjK2bzwY6pgGk5mSZUKHB3NTdXtlHF0zoPIgi5X0bGShxlgjWRrbZ%2FB6zF2vXtEpOzrbvhW9g%2BZw7m7y21Sj%2BJL0Bco%2BjfiWZ7wpkjCQ6ERuqhdnkAFC9l7QPcO1gObnX8hh2FrNPu7LijslF5B30GzEOM0hIPlPamdfOzIyKu6uQjfKnIQBWPt7D%2BMk6eYpK3EjgWb71iznfg9xb%2Bz49y264cOOqVOdElHnzJtKk&X-Amz-Signature=c06e92a46ae92d3825f7499a6669591a85e87e63c57a7d2322c7b2e051b12f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZ73EBV%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCYT3W3SJU94e7Lqazyh7nzYDnuKPm8U4KG8gZy7Oc4ewIgK48CS7Y5ipKpumwkXCjOr%2FldkY4mPm1jEne7hbOjf7Uq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDO2npyKy3zh%2FQUwc8CrcAzrKsu1C3p2Qw%2FS7ir6QcQmB63vHPGYiYN9v5luZd9Q6VYAlek8a2o%2FYPV2LTX5sg60m%2BKO%2BN22lbC0vDHgVekz1JCNGGATINio1tNtwV6a7vYRohsX4uQca1nLcHBrZRBqtppDTJK2jxXNERMPSVZCgS6mgxLS0bqIt8%2B1PTUbCmdAMSmhOnKXzWw%2BKyyMkfhIVe6MRe2lIcqyDVGJIEL7bc3g7SqF%2FchkFcQ4j3r8ABwuIaPo%2F2VDsqPBPaLvz%2Fx0Jr9YWMNNb4cO3%2BXwopTVpx4qk3zVIItPsKmScIYxOB%2Bjb765DuGkAHHhGHrVCTZCK%2BdaZNCaxGtAhF8SDMMShm49r8%2F1iHgyiP5J%2BfQkGW3opoxLbX5Hr%2FdMmNqCZiYmRucd2bCERvxlLtJTjpAVWJU5yST5TkB2QtgnQtVUZ%2B9cjhpg%2BgrJKdgcurDCQLZgIEd4D1JO2Io4HqD0GI5jxF6qoy22fX%2B0TCN6DhW7iBfZqXYUWiWjUQ5nHK6nEN6aTwSKGfhKLWe4Fnf2oe1wWit1j5PrJD5y%2FUJ6v%2B2bN9yFL1E4bsEiNWUjzagB2l4zZ6XfeAZSZAItVj4EuebdGaC%2Bm0l3u4PUvZf4QxIPcLzjZyaWRsqrBfCafMMKsm88GOqUB8lLsikWwPu5Hpr6M2%2BQ7by9jD45ap0ZGzpOjsWdFc3zc%2Bo69gKJBSoQOA5I8HveND6%2FkPTxpaBeL%2F8Sp31Weau9XhrWFDYVtSNwRzM8Dr%2B6FpZ5l5ZUp4SFGi39caP82VP%2FTLF9twcacHnPMpS1qPwVodUVrdoULzOuhOciG%2BMYVXNTrOoj0%2BrGZ30ckHDzTJLKL82RSuvQSqMCJk8%2FrPgUYmumt&X-Amz-Signature=df8ceb587fc042637ef82217385df30ac5b0418fda33e652121b0fccb3f85210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
