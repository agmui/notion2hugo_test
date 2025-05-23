---
sys:
  pageId: "54dc585f-d15f-45d0-b75c-8fdc66a854a8"
  createdTime: "2024-04-16T19:43:00.000Z"
  lastEditedTime: "2025-04-30T00:36:00.000Z"
  propFilepath: "docs/Getting_Started.md"
title: "Getting_Started"
date: "2025-04-30T00:36:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 1
toc: false
icon: "rocket_launch"
---

## Computer Vision guide:

[link_to_page](86d45bc0-388b-4d26-8848-44f255f73d0e)

## ROS guide:

[link_to_page](3c76c1de-ec8f-46d6-8b0a-294005edc2d5)

## Controls guide:

## Install

{{< tabs tabTotal="4">}}
{{% tab tabName="Windows" %}}

Download and run _**AS ADMINISTRATOR**_: [taproot installer](https://github.com/Thornbots/TeachingFreshies/releases/tag/1.0)

It automatically installs all the tools and vscode.

{{% /tab %}}
{{% tab tabName="WSL" %}}

Follow the linux guide but currently some methods do not work (also ur kinda on ur own hehe)

TODO: make separate guide for vscode section

{{% /tab %}}
{{% tab tabName="MacOS" %}}

TODO: for now just read the [linux_init.sh](https://github.com/agmui/sample_rm_pico_app/blob/main/linux_init.sh)

<details>
<summary>might not work lol</summary>

`brew install libusb pkg-config`

Next install: [vscode](https://code.visualstudio.com/Download)

</details>

{{% /tab %}}
{{% tab tabName="Linux (ubuntu)" %}}

{{% alert context="danger" %}}
**Warning** do not update recursively
<details>
<summary>why tho?</summary>
There are some submodules that may go on for a while (like tinyusb) and I highly
recommend you don't need to get them.
If you want to see what submodules I update just look in `linux_init.sh`
</details>
{{% /alert %}}

```shell
git clone <https://github.com/agmui/sample_rm_pico_app.git>
cd sample_rm_pico_app
./linux_init.sh && source ~/.bashrc
```

## Install VScode

[vscode](https://code.visualstudio.com/Download)

{{% /tab %}}
{{< /tabs >}}

## VScode extensions

Have vscode open this repo
When first opining vscode should ask you to install the plugins

![install_plugins.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/89bd30f0-1825-4e77-867b-0a41ce370880/install_plugins.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657ORIZ26%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCFiYzTRAbk%2FNHrw9RzM3UwmwBQnbuRV5g%2BGyH8xyedpwIhAMYMFaNMojJzZcLupAYpmYHCFf5165lYmmL4umYEyr9iKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6uQaVZ37YHiBPrw8q3AM3nna6CLftkjoqcWcD%2BibeVTGEnTpr91gLCb0q6m7zw76aLUnuWwPTnVDNR7sU0ZlBmX1NJC80uy%2B3C5PhXLcy9rDdDtcYfCwgg2tYRCWfogqXKFsSPgxN6JBzijmfY0aJ%2Bt0LfZKluG%2BVPmosPeTwEa6yxomzksgGIkT40Aaqw5iX6MMmbNRqeJC5VCQqUnQhIg7WKN5Bu%2FYCWJTSbbmXliwFNiSNkkFDk7Kj%2BNPi4JTGVX5qA3e9IodRxFRYo8RbERtyeWJImqBJSyS%2BdRkPH2gZnBz1rnv3IgnAiWYgeHU2xw7x2%2Bd7TsaArvHb61AOx3a6UuPC6vV1c7xjnznzaCFewTvLq3lR10r74Ie7RdX5ET2H4DTjXYJv9%2FR4ntXjKMudU0n%2FUqz2l73w%2BUBViM17KvhL1hP8aVzYhYDK12ogEEQjI7Qdoh16OuG3BYst8V15zJJeKF%2FU90tc2qdcRX91tnbVP403b7v30ht4EY76DWRvh%2FoqNHYQQuBJN8CgFF54yfDuToZGyksBnZ1rB2r%2FjOiYv4wPdVE9S6rk8WkweG5cALWIr14R8oAotiXHLRrh6%2Buwy%2BgaGjXH3LL9cmPtR9cswB5qQTWBmPkVUQYD9bqXDUhA3HTFZTDjnMDBBjqkAdIu3Z78m0f32r7vb7wjRmv8gF%2Fsw3Q15KbmJlBdQX5nIJSNAoXw8ZhRpD7SRUnUUT6F2bUFbioRll8KF8ngP7De2mtTaJDZHvF28gh24kyEwVmI8oA%2F%2FJw7TcgU2vIgrQqObHSCJZqI%2FFmqaNY8DddGdpJU4AMR11Sm1J0evFZBg%2FBWyGgHS76RA0FFI6IiRJZivaLAB93uAnedBgoZ16QD6VEn&X-Amz-Signature=9f7518bc24cdb034da2712169cd357943497a39cacc54360a96e6dd83e80889d&X-Amz-SignedHeaders=host&x-id=GetObject)

If not just type `@recommended` here  

![recommended.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/61e661e9-5d85-4dfc-be0d-8d2097a5e793/recommended.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657ORIZ26%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCFiYzTRAbk%2FNHrw9RzM3UwmwBQnbuRV5g%2BGyH8xyedpwIhAMYMFaNMojJzZcLupAYpmYHCFf5165lYmmL4umYEyr9iKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6uQaVZ37YHiBPrw8q3AM3nna6CLftkjoqcWcD%2BibeVTGEnTpr91gLCb0q6m7zw76aLUnuWwPTnVDNR7sU0ZlBmX1NJC80uy%2B3C5PhXLcy9rDdDtcYfCwgg2tYRCWfogqXKFsSPgxN6JBzijmfY0aJ%2Bt0LfZKluG%2BVPmosPeTwEa6yxomzksgGIkT40Aaqw5iX6MMmbNRqeJC5VCQqUnQhIg7WKN5Bu%2FYCWJTSbbmXliwFNiSNkkFDk7Kj%2BNPi4JTGVX5qA3e9IodRxFRYo8RbERtyeWJImqBJSyS%2BdRkPH2gZnBz1rnv3IgnAiWYgeHU2xw7x2%2Bd7TsaArvHb61AOx3a6UuPC6vV1c7xjnznzaCFewTvLq3lR10r74Ie7RdX5ET2H4DTjXYJv9%2FR4ntXjKMudU0n%2FUqz2l73w%2BUBViM17KvhL1hP8aVzYhYDK12ogEEQjI7Qdoh16OuG3BYst8V15zJJeKF%2FU90tc2qdcRX91tnbVP403b7v30ht4EY76DWRvh%2FoqNHYQQuBJN8CgFF54yfDuToZGyksBnZ1rB2r%2FjOiYv4wPdVE9S6rk8WkweG5cALWIr14R8oAotiXHLRrh6%2Buwy%2BgaGjXH3LL9cmPtR9cswB5qQTWBmPkVUQYD9bqXDUhA3HTFZTDjnMDBBjqkAdIu3Z78m0f32r7vb7wjRmv8gF%2Fsw3Q15KbmJlBdQX5nIJSNAoXw8ZhRpD7SRUnUUT6F2bUFbioRll8KF8ngP7De2mtTaJDZHvF28gh24kyEwVmI8oA%2F%2FJw7TcgU2vIgrQqObHSCJZqI%2FFmqaNY8DddGdpJU4AMR11Sm1J0evFZBg%2FBWyGgHS76RA0FFI6IiRJZivaLAB93uAnedBgoZ16QD6VEn&X-Amz-Signature=da8eb6bfb969bedb22bbbbbe10561a9d0ca114c98080b59c9b853c8e992c118c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Uploading

Wire the ST-link according to this:

TODO:

![94b1141a-21d7-4873-9c57-ab9d8f807222.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e5fad17d-ab82-4300-9f4c-505ab4b1202c/94b1141a-21d7-4873-9c57-ab9d8f807222.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657ORIZ26%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCFiYzTRAbk%2FNHrw9RzM3UwmwBQnbuRV5g%2BGyH8xyedpwIhAMYMFaNMojJzZcLupAYpmYHCFf5165lYmmL4umYEyr9iKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6uQaVZ37YHiBPrw8q3AM3nna6CLftkjoqcWcD%2BibeVTGEnTpr91gLCb0q6m7zw76aLUnuWwPTnVDNR7sU0ZlBmX1NJC80uy%2B3C5PhXLcy9rDdDtcYfCwgg2tYRCWfogqXKFsSPgxN6JBzijmfY0aJ%2Bt0LfZKluG%2BVPmosPeTwEa6yxomzksgGIkT40Aaqw5iX6MMmbNRqeJC5VCQqUnQhIg7WKN5Bu%2FYCWJTSbbmXliwFNiSNkkFDk7Kj%2BNPi4JTGVX5qA3e9IodRxFRYo8RbERtyeWJImqBJSyS%2BdRkPH2gZnBz1rnv3IgnAiWYgeHU2xw7x2%2Bd7TsaArvHb61AOx3a6UuPC6vV1c7xjnznzaCFewTvLq3lR10r74Ie7RdX5ET2H4DTjXYJv9%2FR4ntXjKMudU0n%2FUqz2l73w%2BUBViM17KvhL1hP8aVzYhYDK12ogEEQjI7Qdoh16OuG3BYst8V15zJJeKF%2FU90tc2qdcRX91tnbVP403b7v30ht4EY76DWRvh%2FoqNHYQQuBJN8CgFF54yfDuToZGyksBnZ1rB2r%2FjOiYv4wPdVE9S6rk8WkweG5cALWIr14R8oAotiXHLRrh6%2Buwy%2BgaGjXH3LL9cmPtR9cswB5qQTWBmPkVUQYD9bqXDUhA3HTFZTDjnMDBBjqkAdIu3Z78m0f32r7vb7wjRmv8gF%2Fsw3Q15KbmJlBdQX5nIJSNAoXw8ZhRpD7SRUnUUT6F2bUFbioRll8KF8ngP7De2mtTaJDZHvF28gh24kyEwVmI8oA%2F%2FJw7TcgU2vIgrQqObHSCJZqI%2FFmqaNY8DddGdpJU4AMR11Sm1J0evFZBg%2FBWyGgHS76RA0FFI6IiRJZivaLAB93uAnedBgoZ16QD6VEn&X-Amz-Signature=4970d201210cdd0698be2737dac37d04992b09a0b60ac2e7839b9e85e8796a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/210ecb78-1116-4d7b-b9b7-2292f66fa2c2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTNTFZF7%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIHt%2BKaH%2Brgmtd4P2s1MfP7ggv4P3VitAz59ftTIVzpojAiBWyT7ch%2BsP3GiuFS2Cc40kzAy2OfTQxdVX5mk2FNPqcSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjwIkeMZ3l7Vp1ThlKtwDtxP2jUuXd67pvCh4dsn269RoT%2F2XRN3qF2cyAx1tc340mNVz8fNzZ2CD0wNIkMQbd38xG6RMAfLJ8WJIr3hHksuWf2xQje1UzisWFBnnKMYKkXSRac0OzmpSu5bkHAgSamuzMgrrhz3DUQQ3DM4Oelmp4ktMRTSontH%2FXfRkouKnCKJ%2BDmcJMeLSR8osVzyY8W1%2BlmkOgj5WX4PDgPPGDj8AMV1g9hUgTXn2WTWtIYlChbfRABCkAVN1338ly3CSq%2BL3gfaAltAqBPvRA2SvUFmNNNWoPj1vmFifXuNCT6qFzGuN2ky%2BVbuZ%2BTDNK7x1wAEu7AVxTv76H%2B0lwDXl%2FIl6E%2FtoCE3RucOEauRJOXT78CwPnUsDVX8iQj5Vw7hNdciXOBmrswVtBs0LHEe3kPMeDDgXTjiAyeebRs2NK9%2BeirHrijoVV%2FD9f7KdjGNSaG2uJKS2yh0Wg%2BxhNqGJs05EendVDFQ0mp8Wanyci12n0y5uYVyINFpweHVdb53Ek1rUZIRKnStVTfsmgdZH%2FUDSo50eITdiEYCjGL1iq76U0S1BzWF49VWsOFwi0ppTCvQ4q8YEejWZjHqXnoyGI2vAn4eYBNNIakmQimHJkptioXzn%2FBkdvejMfiQw%2BsK%2FwQY6pgGYU8Qf20HNG5r1YWvYmbOOpuLYaNMasPzTezIKzZHd5km2JPjuZftiEHNjUa%2Fjz9bscINUrVE%2FZ6xxD0dSUoWUHqxtqKk4%2B7b1lKq0UTWgxaqmbjINtK%2Fuh%2BDWY8J%2FraznsI%2BctOi5j7HdDGosjkfPiQGkPok1xcLTLx0BXZs5uNl8APrwd%2FtPQv90FPQK9wVOuWVSxf5VOwYaCZoloqvLnUg7cGVZ&X-Amz-Signature=b42be59fd7cf6252d540339e0155788112749b1858cff248423494f24a568e98&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/33a0fd0f-8ca6-4a86-8e09-26e95ded1fff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUVB6GMB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIFaHvDTr%2FwLIn%2BaB1e6WP8CL2%2BmoJEWPTOA8PVzxuuyAAiBKkaa7tVhOYXG4bavWF%2FqEmpYp2qY%2F%2BHLzC0fP5YJZYiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyCD%2BgWBIGGfgTRH%2FKtwDu0dTost%2Fn%2Fzamu7ZHxdzXtA4nQu43JZOQ9ZMBAuuOyMJDpxhpvCmYEpnEZLHrAppSD9YcI1ZULXL4mMchdSw7ynHi6GrNZLswMfdSVeGHhCjjSI2y%2BQBmimPy6ocG51ayCtnP2Ag0hml7VP4iQnntk3ReHcFQ3S9YhVACa4mpVpEJEPZNneTm%2BD7G1jemubq%2FjH0ozhZ3oltDg3mu9%2B6AIP3F%2F6VmgUlnsg9P8lYTRZCLpU4y4s1OYzyryAaZTf5mR4Z%2BfANDtflf3CgPu82cWb9D5yAHbI8hF21lALJOzUt0QepxG87tJSeLxU60UjgFMh1Js0uOS2QMoIWI%2BDXiyu2PjKeIx7ywKaBPqsiiNDozlRD99ag%2BOGi1omBUR1zdxd4UEg5l5SXBdP5R69m4F8qlCfNu27e%2FO8ooVBlCR6DpGMuYFuIQNnpNV%2F6e3i14ZPDfIaNt1HlvJSYa47eYVE2Alxcok2FAxugYSrlnnmOIZLmcf5DuUizrN2zaaDn2ExJeZihkPyFahtXVhmp0PNLxnaCUDxD58ytsUiLdI0cqJohAOSPHO6kcw7lgcPx5xOVcIxOcvME8Ys5pG%2FLuKfe5HOTCIObbs5R0GUXcXbBrWWODMv3Wby0iNswgcK%2FwQY6pgEjk3t2g7%2BVDssjdYM9nFmUL0H6RyheA0muJBqwwhJseED32r47U9j1VQxPM3KRWi%2BMFh6H12MGDIzEqy7L2piB3gdjsKUZ3CjfFO7FMcGJxSwSF0myG14ss55GS9NEndtiCwEsnUDZVjEB%2FpHHr%2FXskh10eRDBzc3gEUOWyceTPJbvG0oGeeDt%2Ft1f47bYX6lqCLxR0i0HF8OeFJC80hxSYb1q1B1K&X-Amz-Signature=3d3c79ec6f4bf54ea4244e368206d30c34d87bda48630779f3a901dfbe644369&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

### Step 1:

press `CTRL + SHIFT + B`

### Step 2:

select the usb port the type-c is plugged in it should look like this:

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657ORIZ26%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCFiYzTRAbk%2FNHrw9RzM3UwmwBQnbuRV5g%2BGyH8xyedpwIhAMYMFaNMojJzZcLupAYpmYHCFf5165lYmmL4umYEyr9iKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6uQaVZ37YHiBPrw8q3AM3nna6CLftkjoqcWcD%2BibeVTGEnTpr91gLCb0q6m7zw76aLUnuWwPTnVDNR7sU0ZlBmX1NJC80uy%2B3C5PhXLcy9rDdDtcYfCwgg2tYRCWfogqXKFsSPgxN6JBzijmfY0aJ%2Bt0LfZKluG%2BVPmosPeTwEa6yxomzksgGIkT40Aaqw5iX6MMmbNRqeJC5VCQqUnQhIg7WKN5Bu%2FYCWJTSbbmXliwFNiSNkkFDk7Kj%2BNPi4JTGVX5qA3e9IodRxFRYo8RbERtyeWJImqBJSyS%2BdRkPH2gZnBz1rnv3IgnAiWYgeHU2xw7x2%2Bd7TsaArvHb61AOx3a6UuPC6vV1c7xjnznzaCFewTvLq3lR10r74Ie7RdX5ET2H4DTjXYJv9%2FR4ntXjKMudU0n%2FUqz2l73w%2BUBViM17KvhL1hP8aVzYhYDK12ogEEQjI7Qdoh16OuG3BYst8V15zJJeKF%2FU90tc2qdcRX91tnbVP403b7v30ht4EY76DWRvh%2FoqNHYQQuBJN8CgFF54yfDuToZGyksBnZ1rB2r%2FjOiYv4wPdVE9S6rk8WkweG5cALWIr14R8oAotiXHLRrh6%2Buwy%2BgaGjXH3LL9cmPtR9cswB5qQTWBmPkVUQYD9bqXDUhA3HTFZTDjnMDBBjqkAdIu3Z78m0f32r7vb7wjRmv8gF%2Fsw3Q15KbmJlBdQX5nIJSNAoXw8ZhRpD7SRUnUUT6F2bUFbioRll8KF8ngP7De2mtTaJDZHvF28gh24kyEwVmI8oA%2F%2FJw7TcgU2vIgrQqObHSCJZqI%2FFmqaNY8DddGdpJU4AMR11Sm1J0evFZBg%2FBWyGgHS76RA0FFI6IiRJZivaLAB93uAnedBgoZ16QD6VEn&X-Amz-Signature=005ab74dcaa5e13543912afd4839ad45f77eb604962ef0b372f7b0e970ce233b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**

# CONGRATS🎉

you have set up taproot now move onto the `C++_basics` guide
