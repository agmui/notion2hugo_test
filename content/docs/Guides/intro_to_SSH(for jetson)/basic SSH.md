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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a2a34c82-c5fe-4bfb-87a8-3f112a31f757/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZWRHKON%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDk%2BRrhkp3avB62RB8qvNoOK%2Fht4Sd9kUbjo1of6krGeAiBd%2F7NkYN1Ao8RYmwU1cg%2F%2Fs23GiuEl69Lokw%2BqAwh4XCqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhcLM4cRHwOGT3fVnKtwDOb9kNtNSyCCpsM%2Fv0kI1dTtso2RsYr8pDlTPNlS28AFXlq3iIDNb6hsZDNvF%2BPvwuzdJv9l%2FCjTCd8GT5C8vK23d5Xg16Rl9xaxjTnLGq2Cjg5UoA3YRPZ0MHEBixLsJMl30AbYQnbB1O8ksQhPvFHN32f3KGxMVy6n98m%2B9K05G57Pq36i63ipa%2BNQN11pDJXQUfF4CqnXiljs4EoRpcTH2nPXVCkGHvizv8gC747%2BfyiZbJFiJv%2ByEndL1sbNAG0neQ7mR2CKxUyOoUExQZXV0eVNn0%2F78ggo1VVMSXd%2BxldWezfHjWcM2arNL2TLaFqfB0sr08xMwyl%2BSjMCd0ttI%2FiL8JvtbNWCSSONyYK27ZvOz3eXODZytYHgHeh6T2jktaP1BW9UdE8C2DYVunN4Y%2BtjvvdYLHb81g5B%2BdrtrfhU72L%2BTQJSoP3uEyp88zDbTTpY66KGHVDIaEZRJrvTjj1BocUh903xjVKxumktcFBOfkk1Mg5bAM5cHumFG8u6QcwnVSGW2UHIWttuhCAhVmFzmYib0MT3aJZ%2FSBMWJ8wze%2BV99c3hr2XmJAXQrfpGIxCo%2BWSN7sFy7NM91MllO5X0S%2FP1VUDjeLk2WfIiA3MzrHMqFOLjO1aownt3T1AY6pgE%2F9FAMaAoNsP%2BJRAL1bME0VfBz4YhEPR9cvk8Gsh0gDsQZg%2FaZ4j1TOLI7ae%2B7Xq7A5Z7j8Zt5cxmBiSU3apb4zLQOQLOwQiBzfq0npIZhEJPyDB9lMEKAubovz5b7NRNJjnI5tdsNZlSPK91Wo8mGmOU9q7UF%2BtyK39SRE6YIE4SCsTWC0%2F7jjFcI4vum4RaVqEE4oB34Z6VeY3H3qJWYpCG9sfJ%2F&X-Amz-Signature=8d29c6b2538303e5ee57bc8c09553a30d833383f3e371fbd58b0ca4ec6775544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To make check if you laptop can “_see_” the other computer run:

```bash
ping <ip of computer to ssh into>
```

<details>
  <summary>{{< markdownify >}}example:{{< /markdownify >}}</summary>
  
![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8e32a003-a0dd-4e6d-b2ed-29d374c974a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ED6EH3%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl4RBvQU%2BJoaBW2UnSCMXY4SA2OdqNvbLxjVF%2BOGNIOQIgdWWx7yZKcx2OGAwVNZ5pn6b%2Bjp2mW2jnFqsoFbCwXCMqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM2a7pteBUM3u5TH6yrcA76Vf2uOOBS28BTXRZfOn4rKgJWZU3EuMwRtACTe5BYHyjvXFQEp31uSFqn7joBh2fcj5VUE2xrnYuInYcUHJlf4EZM0G4ZWPNdFiwj4xzeJY9Mhzc%2BzHrqDMELOoxAI%2F7xP6wCJqysMYk61TCDBHNVjt3sB69cc%2B5WrPzSCrfFSjkXm06iDF4DnFDjzOPxd5rXBOlSal9HTH6FcP7X7x1hMrIOlne68AMY1yos4XzrReT69T%2FYn2FMpMmfeLkCM%2FSQIKfrnrVe0l%2BSSIvn6PJ72VC%2BBEr%2BzRoE7%2B%2Fb4%2F2CMOAJZuR%2FzO8uD08A4PSjwr0j2Zg31pIfxr4gVNZ3SfdeOUH%2Ft5XXxaTS3EPqwHmwjY6WLpQjwuQKpsvBdqR5okxQYUw3AhaLt0uUx6GIr8SFJbxtFOdm6h82OiQmlZYvENSnYTh46e%2BrbCaS98oWMwK9Qddr%2F2q2m84f9x740lpMESGoFDisNF9giacJkN2FeMguJW1ySUXo1vTjjPQfKpM8xTqHR3B%2Bx9H87cywd8atc4GpXCQIX%2BjfTPQ9tf%2F84Jl%2Buk1huHxO%2B%2Br8ktlLo1sAqk%2BTPDH6YxcK28duD6OdzIUD9JKbdSrnxoc4zEKlcsphZUIY1GxsBLFg%2BMOf009QGOqUBWKDUzn8%2FunpeckaOebDXvzjoRpC9bq6Ph%2F4SPD1nndgwcUtGDpqpT9XBCXNO06LB63TJb8n0OMgwAAZCT4oNq32Xlj%2FRLG1FjMZs5TtPD8pCxBiGM9XZRnNVYhgcqAisSbgnYxwz0vi12zhu1dppMhXaZrCDtQgofZh2iVBQbYVFYlThUiuEGQ66hbWQBFnWr9OCnTzToJ32rS%2Bx99CNbuvYE8Vc&X-Amz-Signature=56d962c3b7d8b06335db8a3c5539caa6c5ac5169bbb28afca3551e7af38b6011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
