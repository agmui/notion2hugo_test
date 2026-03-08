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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNOCCGYT%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIHqnDZLsnLZP1ouvmEBU573x7%2Bio9omnPmRNIBUl%2BSYcAiEArvFND%2FD7q860gkkBsUs795uzRSSBToYi7wJ%2BfHd6CEAq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDNDoTF32FNicrUN82CrcA5Uj6R03Sadr6CJ2D4b6Wv%2FY1kfRu%2BjvD1is37hRD0Uf4B4QV8y%2B%2FgjSujKJFE1lyF2kJiC99gFw76Bqm17sUv47neAKOGt3idcDXy44ltf2nuYR8CPdR2w9D0rF9epPDZ%2FFe%2FbM6wJ9omufdUVYczSLjjN4xeGe1V8EINJNqNoF8y0JypJ9y7KXLueRZP%2B2P2%2Bx2HzWkhQ%2FzxrTK2jCsTaoddxfhGuKEQ%2BoAWa7P1VwCBk1cfBZIs3Y7n7%2FFORKJI7JiFh0ybmL27TZbAKb4fboqEmcqLsFdAWgxKYb34zwQ8tkB31za5fKF71Aawp5yy1TVAP9VY3XmM3jG8ba8ht8iRG9DPnovcPg7Q7UjKCl0MblGpJhM0oj2lLZpTv3qXVnefje%2FlmSU7Z0y8vkmMJgK5vI0j5swig2uuH%2BwDv2sbKqGNMObF3G0325LiYSoQdbdh4KY39SKKlMaqONyrEwigl%2BNff7YuikbFnJXuz21jqvMY1yigB1qph5zeC5RsW5LP56NOcqvzT03iD%2FrdhDTAiWOvFdLM3XhYHhqPzOBOTFOhNfnscBOzQ%2FoTeH5SsE8Sv4uUdufZSfZexTuAqllooZTHNofCupuJxMnEvN2jXhslYu%2FqF0Mu10MMids80GOqUBXwPpMN%2FofHoiAUMzcgbBTktZ%2F6J2BigT7mIKwEJ%2FalxV6N%2BIBb2RbnUmk99MtxngxbGmwdHE0lXUP7UKJK1HGWLAAZtT2Yus%2BbY5InF%2FbrGHyzAvYucFE14HoCffS%2FuNKgw7p0ypdnPTlmZJOTz5TqKbpMEol2JRNv8D5R2Z41Zt3guVfL76a19WAOqK%2BbFNNciGKBSuYFbmDrnCylkKVGXSI7af&X-Amz-Signature=a60f6e7168c3ccdfef591cbebd5695a40fe9078ac588595ee61ef25f415974cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXZSPEME%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T021001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDYLTlvQInxTd4GqrsX8hBUcaDhCEwq%2BTwaghtyfjJw2AIhAPhOq%2BqDQALQw1A5uSUSG%2FMZKoapwic%2FFiNN2BiOhCbBKv8DCAoQABoMNjM3NDIzMTgzODA1Igxet%2FmkU5Eu0I3wTTUq3AM%2Bpq1Lr6%2B8%2F60NHT8cKjOlAGqVlEomg8I2apC3kxMmBZn5WqdherDr1h9uEIbfRWUbvR7ciUupuFGPjE%2BWryv1M1UpOQCziYCwx4cyj%2FKWYBAygmatEa4%2FyHv6AMMtk8joRPM5ndV7hWhvAZv%2Bzz3Bi9F%2BTzgpWKIGT2KbWjGvmJAGGePoypYp%2B%2BIVxauCBBAzu%2F0Cgu%2B1FjbvLxldWS5LIw%2BX%2BnxCl9J7uqOQpkiFxsKAB7cKLYGdFxVctSaP5%2BP7tN0L6Z4GvZ8xyDvh5b8Tp6sLSkBVm%2FEN1tpCjTeeXj44vkL8QV%2BJ7CTR3OJG9%2BVffIHZ5tSu97aNjexkV8XnWLczA4EKl8Fb12oczLyF%2B5OFCXrZ2LXkMeeb8gpQG5awlDDKGq341zNO8szfgZj7giGodNYYn68K7LQXMLrVrbzvjA5k2DfKc4SpMwc01c0KpCfCod5IyJ7d3D4c0ku2h99d9UrkaIRbEzCaYTbBDU10wZeFw4Ia3ZMUKqhUJ0X1HUj7TPSIfKY7%2Ff7Oh2OYxmJTwDc%2F4tQf%2BSfry6kxb6I2YcrWnmFmSfnyTb6pGirDd7JqBaD2M7ae6Rm6fsURoo8OSl4FhE3MmHbDqa3WIwWQ170C2KQp1It2GjC7nbPNBjqkAT%2F7a1fkpBhacSibGNxNoU7Am7m3yYVo0DiQgXXBRDpKi9QAhl4GYZyHQ3Cs7bnfUjtr7NhS%2F7KCt8P0S7AmfLe6hZ%2BlJDZ%2FA%2FPmOQb%2Fcygb4K37kyj2%2B50%2BVIqShb3kGPzCFK7m9%2BK6voE4FD0vxbhVVH75xdHNvUmBct2PDqPknbH7jCqxQ41BEq3aPGejKmiHO%2BTfKc6aNMGhlm%2B72Qujj%2FAa&X-Amz-Signature=d1c2f899b502c9e2bc9c96562b212f10d72c68a87e7ec475c5969decfdc14990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
