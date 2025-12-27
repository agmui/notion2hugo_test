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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIZKO2HS%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCorppvGuDzDDGfAVyD9zsGERc49FR20id8G199hHMrjAIhAIgDzh7oMUVXtC3wUVEge8dos3yMARdTR80edNccnKRiKv8DCGIQABoMNjM3NDIzMTgzODA1IgxsoNjUj5Ig932rsMAq3AOnJudwKdzBCdB7wgcq1LyzUeqZUY4nz6AN8ODmA6cIvSmxIU5NV%2FEZ5mh4adS%2Bxq048HhmM33G226bKNektNPFFrCZRTJb6sSExnaxasVfTbT%2BKfICWLfBsLEzQNQtIbRWRxUP6t1dkRqE0i9p52B3s1F2KPRDyt7Kx0YkLq2UWwO2r%2B6oUNCtFvnqPCmM5h%2BlWPqHwMehvHQlwzTA3LvTh3CWPnrYI3K6zgX0l5uIgYtg0laBzwHhde8YVPIxA2Wl%2FYu9Cbkhlc4Wtv%2F0IGfu3UYukQop38CJAQYCHI6VYu%2FmvMuKOe1VRKyWdQSscIxvRuVH5s61hIIovAq%2BL063hdUsytUF46lqnQtEBFbkVD5LPsDdloalfo52J9TOG2MNjmgmxtlKValDUIwNfJAHb3eCPjml8dW7JWBgWRUA3j4d44Upxnm0M3WJ4HmYYudYH2KM813PoM0hzcsF9odjyh2BcumahBEcY6Noy5aau%2Bki5atlK6P6vTdA%2B6EaO%2BhwtTMo9MImWisQDPkLSteP5ZLBFfjP8cBTvrJBZOmuu5oELpzvt8M5Yi%2FkRjWi6IdZEbz6xieKvAGILpwRLUZemfXpavxuPuSBIDdWwK5qfEIAIGSHcfqgRESIszDq6bzKBjqkAcUNWDkePdlVeXm%2FCWshAKSlAnZKV1JNAJ02xdUBhsUYPRxMWZo1j4M%2FhnDdPtPEHXj%2F2sFhuUaR3m9%2BTv61X502Sjsrw0mYnEx4QYxns8dritxXRjpUsDpuch1R%2FRuYhMhUeL1UC%2BnHbq0IpIyffDg6n57iULqOwE4k9gThIu1QWXvZBLmFXBNdrxvjkcxjfz6skQJS7l91D6bRJS6oJZmaz2bS&X-Amz-Signature=1fb4d36e844d94c0129f125e7a2251e963cb049392836a85a0bfa8e6c11ae6c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK4SHV4M%2F20251227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251227T014256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FJc8NqyMB90exacv3egKmnJWiik6Un9yCMYWJlruhSAiEAvKB34XtX3wtM6PNcJ7cYvGOcpnNt7GffK4Yo00zK5bcq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDG0lCJOvep1Q2mcM%2FircA48vNIojF3Ybi4xciH%2BvnK6aVZthblFPyh6BMzCgj9eNxswUG%2BmAVKWI0fha%2BkKR7h12uzoRdNSK71RecX%2Bts8MBJpo5OoNcuV52raCGi0KqZP8d21x5ZNLwy7bfjxXKuwXLfdeyj3mTpyu0btipq2tHcSU3XacKNhp20fAGQOIeNJoQluF8njleoQO6FYyTllGYFoAX7nqhBrJdursKFzwfQ1TE7eEk027XnmTDzST5eOZGDf6stov2PKSZWJimDEqoWE%2FoPrcIm%2FQdoNEMeXDLoybQ7o2Zj5edi8nIE%2Fg%2F%2B%2Fbc4Utwt0%2BGFvcXooT%2FwEJ%2FSI0Rmwlupy29ZZ%2BaoSgSZvUJE1m31BS8M8my4anFH%2B%2FlkUY%2BNxnCb%2BfnFhcwRAav%2BMyp1wt2inEAahEQWUHkjBKLU%2FNepz0h37WtsWbz7wc6KB1cTnkeJgSVVv5AekwnmruGbPS5%2BSAqcKuJOBIW4OKI007%2BCyRIxbcBBrYtDfIMym%2BsSH5h5wBiH%2FzcYHY6OHe0bKXzDSs%2B%2FEbnFLzxpJaVSv5pYataOyYXKHLHYx6mxSlbtC50yE5tbJzEJ8FNTnH68h5S3uhfGWsMq7fWM6wFSxHM4CUp%2BByJT7IOPENpUuuIPM7XfNqAML%2FsvMoGOqUBo2FmW69dhS1l3Z6vg3pn3VTAS4dVp8%2B91rUQl543c2bWquwzClDJ6zzCiErHs8mXpFTW8d7j3Jo4%2F%2Fo127JL6eTqaBvDrHsTtr6J7JgqbXfqWY4ww%2B21omKOnA%2BlrknCWeiIuu%2BeUGwPSlWsZ40y9pHEArId%2F0vnyLTN53VAX7MAvVRED6x3lKYP1A3D91vE80OLgTrFfjcAJyVxjtKzsTyH4fAI&X-Amz-Signature=b1016143079dbc6d2cf32a4b899d74cc827a1fa26e14849e5ed3640819e3e3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
