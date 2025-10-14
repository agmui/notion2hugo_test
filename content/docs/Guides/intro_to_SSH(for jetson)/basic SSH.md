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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIJF5IGK%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoVOGjoGvh2ABhR0UzBQeMkXSeZL6VzZbf3Td%2B4NezYQIgcG5go5rQ%2FBk1POkMCLH56mrdmd5ATL5IVz5mqPemE9Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOk98OpR3v89iOUdjCrcA9BNYi031akW31A146X0xUzL1zY7fP4GqLzaMj%2FdVICXm2nP0%2FJ8ieD4ahVW8FKUarmCIVJrWlflqdtz9ufK71Jck7WMcVIjB4bnBiho85oAs9N4j%2B6Iv%2BesmO3vdJM4UTz4cdEPmbb5%2FW0xYZHw%2BsxMa1s%2BAZmf3cZBTT8tsusgLxXbl06dNe9kKWmfeS1gh12A5Qbp4vqwuR4PqbXJSu%2BqDQFwRSbAN73cq0rqw8OumPDHTYHLaGEHqAF7qMgY%2FNSFFaig14Rh0zSWrKiynx0jm9GgHgG4yzmi2z87buCqq4OBN5GoArONkLoPoh5lOtpb0CZ4xUQcPMzLFmgLXItAe0Xw%2BV%2FU7C2SK3%2BbxDtsi6gYBrMnZpyQgMYDhBATOZcqWT6rggM7NzPBqBKPvYnZyuZFMOkIXRPj0O8LIlPU5jp4QVPjiXDbEa3JvDDkVWcdGEKXLt%2F76IstnyACUP8SNoXepQ%2BxUHgzvAVD2EGKPb1zqFNV7E920Y3UvZGfkEVIj00G5R%2Fa0PC3LXH%2BbjFOoJ0%2Bk%2BQWkB6%2BKsjwrahVjNnVtewrJbjxLRJBuARpF6BzN5NNKa0mzAFIJ%2Bq39NTl2x1bIzGlCAzaZKGwjeEYXxYUe%2BMbhGQxSQV3MKWqtscGOqUB0ViUn8sZdTIuhX1reCNNt23V%2B5C0WmUFfIjQirC6pMb3m2hBuuYauntHheJcMwJ2KcBnKeWX0bUZ22uYs%2FhnelYtb5ODDJoTq35rZ%2B0GEAi0k4Do52L%2FSrtHs2Csonzvbbg22ISKchcPCrr65FVsHxp9lt8Ta9iW5RhdAfYnzKXGiyBWuNVtB4Fn0m5pIwkpFy4OayQXa3%2B6BXZiEQtYW1RGkt4%2B&X-Amz-Signature=cd186b4a3ee0179073c7a5ebd67a024532d5b0e5b2c195f1907b1ee71eb4a59c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W36Q3HI3%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHh2j4Bygh0EBY%2B%2FqHSonQBIpIpzkaNB%2FML%2BipXrnx%2BWAiEAzrh58GSQ1D23L1tm7Hi2zUvh%2FvBcX2b5suTZpvyGGGgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMZ9L3r%2BcfFKHgxEXircAyrKRs8gIqTPCyEMjV51xbjFz12SeuElgO9DcMP9DrrMZCB%2F29KhbY8uwYp2rEB9b8akOinxoYw1l4WOr1MEXBl5DxEzI7xTz6k0kDdS0ItqL%2FobHBZWqEanRXyXcRXWULyOwbvTUIFuc0wYwydj3rhTJfm8ot4Z0kELUScrabs80NBZHuGAOdOpwS%2BXZAa4j7b5ztoKkfAQS5qady%2B4CTrqU%2FP0tPlfucvcFt%2B00aCq2Rwlvfpil%2Bvl6WLP%2FqrgJ2PQPMOSk73CPNk1rF94ok54r1wkmW7MARiWFO2uUP568vhcgj6I5VDkPZdTjvl6ShcEevTm8hCNwWVAi8Gbhv6ORVK8hxROraDIkOlYtbU6XOrrxo7zBSFv7m0269mAHi9cQI65JkvVc%2BT9BtIMmIwbwIYZQI8Bq1wvrxm6dY0u4JDWn%2BlN35v3icl6RFO2AOKJ4Ou7S%2B%2BR7lf5o%2BofrRsaubrl6PUyFvuY%2BpdInzTaTzbMmpwq0LLYIxXqmkwr0k8clikHCWbvQSIa80rIF4W4YNSZad%2FdNjzXoZn7ohjqUB5AkGRxq%2BQz0WIiFGZ4MwQrR5XL%2BQOaHpiBMCxuWFeSLk6X6qRoHHivOIgz4jZ%2FYZQTdalnvzzeDRa8MOmqtscGOqUBNcYAN5USScFYaytW%2B3kuHBpbzOozYtgYC5bcuFbrfQANxYXsNz8%2F8NvDUYBHKZ1Nuj3eHqhiUbCQ%2BDQgNIAwKBn7SyFTUdCwqyYgG5mIofr9JX6QlCTQYGAYWsDOXmoipUrv%2FctsO%2FroE0Yx7V1BjizI40X3KSUXlK%2BsJM9VkXIO5qDOLqc5pL8lsJpId6qP5D5A4QSmGA8dQQr9utMbnGLTA%2BH%2F&X-Amz-Signature=acc814dae7a57f7348eedc57e29ab32a20dcc968560903c0c1514d30155d42b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
