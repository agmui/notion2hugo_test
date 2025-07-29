---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZBRQ3XQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGYq1iP6MEG24lvpQM43QXpxrisqHoan4LEpof80lFHxAiBFkDBV3M1%2Bw9KLGse5EjnxbZU6a9v0%2BSJ9JlZpTUL7qyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpYyhtlfvrpOz9TrhKtwDhkPxK8ggA6SR4mzvQyoCi3vVjCxDLM7dhJ3FZ%2BqjpRf7vuH4LHaxNKGHq6q1bF3V0rYviZOCCRpcWnmBRaJH50n06WesDI0YJ%2FNTvG%2FdCneSf7YBU6Hl1JfEvnqdxTHj858JPA6o4QrTFfJtzVg5xucV8iNGsUb28jBCwewrEwTPo2jsFt6UqXFAFP83JV9K0Wv0jPTYriwx1VVZQ78RsEvNtCNUBddHCGqU88T4Md0d8%2FzcSBcci2gI0%2FicxvBXRgnHc1u1hSoKklhg1UIXYaqNzzCRvrl8Wtjyg%2FESrB8FE%2B33jVONcagcVhy%2B1XTeJ%2BcfbH%2BhoY4NrFX7mTuI91knwmqIhoxQrQfC3GPeZTg7jwfTjw%2BYsTlwOjKY0EV4AZc%2FFnpf7FmIrYH6CClLirQqRPL1W4Ak9eD0T2P1ErX1DslaZBCv2nDgWvKU1OEmopatntiNbI8UrHeRlI2su2r6W32BqV5v1%2F%2FcSaPhJWZbMYHS%2F2fODjmWx3vyz7e%2B01NcfG4PqKs1fWXDOiFeRK98e%2BBTcxH96zAyxDGjM5U7SDEX3%2F7OofINDv1O6e%2BmDnjTxF2hy67Qmhwd7%2Fl3w8B2eS7ZL2yin%2FnWHJKw7AaqEJI9OOp2ho%2FAftgw97CixAY6pgFiTSSd5HQiXsHAecqknraqi%2BBxO6hnA8BfJwWBcOEimDgHbrprNc%2FXl2wEMKN5myZCNiA6kAVzTRPNPrIHObzCyDm7rF8R9QIpmZoAPJcAsrL1hI15UST7tM4pcNXFOkfx%2FaFwdTwv5EMBI7p%2B7PFt8jhZ1SSsSnuRPCu5jTFxvGjfgD46r0RGJaJ8es1MbMTtpJXSjy4aCjpPi%2BdI5FnifyqMToBs&X-Amz-Signature=e11374667b1ee145d19b3776f413029691840c1c6418f71d6a4481f482e4a1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZBRQ3XQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGYq1iP6MEG24lvpQM43QXpxrisqHoan4LEpof80lFHxAiBFkDBV3M1%2Bw9KLGse5EjnxbZU6a9v0%2BSJ9JlZpTUL7qyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpYyhtlfvrpOz9TrhKtwDhkPxK8ggA6SR4mzvQyoCi3vVjCxDLM7dhJ3FZ%2BqjpRf7vuH4LHaxNKGHq6q1bF3V0rYviZOCCRpcWnmBRaJH50n06WesDI0YJ%2FNTvG%2FdCneSf7YBU6Hl1JfEvnqdxTHj858JPA6o4QrTFfJtzVg5xucV8iNGsUb28jBCwewrEwTPo2jsFt6UqXFAFP83JV9K0Wv0jPTYriwx1VVZQ78RsEvNtCNUBddHCGqU88T4Md0d8%2FzcSBcci2gI0%2FicxvBXRgnHc1u1hSoKklhg1UIXYaqNzzCRvrl8Wtjyg%2FESrB8FE%2B33jVONcagcVhy%2B1XTeJ%2BcfbH%2BhoY4NrFX7mTuI91knwmqIhoxQrQfC3GPeZTg7jwfTjw%2BYsTlwOjKY0EV4AZc%2FFnpf7FmIrYH6CClLirQqRPL1W4Ak9eD0T2P1ErX1DslaZBCv2nDgWvKU1OEmopatntiNbI8UrHeRlI2su2r6W32BqV5v1%2F%2FcSaPhJWZbMYHS%2F2fODjmWx3vyz7e%2B01NcfG4PqKs1fWXDOiFeRK98e%2BBTcxH96zAyxDGjM5U7SDEX3%2F7OofINDv1O6e%2BmDnjTxF2hy67Qmhwd7%2Fl3w8B2eS7ZL2yin%2FnWHJKw7AaqEJI9OOp2ho%2FAftgw97CixAY6pgFiTSSd5HQiXsHAecqknraqi%2BBxO6hnA8BfJwWBcOEimDgHbrprNc%2FXl2wEMKN5myZCNiA6kAVzTRPNPrIHObzCyDm7rF8R9QIpmZoAPJcAsrL1hI15UST7tM4pcNXFOkfx%2FaFwdTwv5EMBI7p%2B7PFt8jhZ1SSsSnuRPCu5jTFxvGjfgD46r0RGJaJ8es1MbMTtpJXSjy4aCjpPi%2BdI5FnifyqMToBs&X-Amz-Signature=4294d95fef15ceb31b55976dbe1b8a8746b220a43ba266b126dd0b1b627651f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZBRQ3XQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGYq1iP6MEG24lvpQM43QXpxrisqHoan4LEpof80lFHxAiBFkDBV3M1%2Bw9KLGse5EjnxbZU6a9v0%2BSJ9JlZpTUL7qyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpYyhtlfvrpOz9TrhKtwDhkPxK8ggA6SR4mzvQyoCi3vVjCxDLM7dhJ3FZ%2BqjpRf7vuH4LHaxNKGHq6q1bF3V0rYviZOCCRpcWnmBRaJH50n06WesDI0YJ%2FNTvG%2FdCneSf7YBU6Hl1JfEvnqdxTHj858JPA6o4QrTFfJtzVg5xucV8iNGsUb28jBCwewrEwTPo2jsFt6UqXFAFP83JV9K0Wv0jPTYriwx1VVZQ78RsEvNtCNUBddHCGqU88T4Md0d8%2FzcSBcci2gI0%2FicxvBXRgnHc1u1hSoKklhg1UIXYaqNzzCRvrl8Wtjyg%2FESrB8FE%2B33jVONcagcVhy%2B1XTeJ%2BcfbH%2BhoY4NrFX7mTuI91knwmqIhoxQrQfC3GPeZTg7jwfTjw%2BYsTlwOjKY0EV4AZc%2FFnpf7FmIrYH6CClLirQqRPL1W4Ak9eD0T2P1ErX1DslaZBCv2nDgWvKU1OEmopatntiNbI8UrHeRlI2su2r6W32BqV5v1%2F%2FcSaPhJWZbMYHS%2F2fODjmWx3vyz7e%2B01NcfG4PqKs1fWXDOiFeRK98e%2BBTcxH96zAyxDGjM5U7SDEX3%2F7OofINDv1O6e%2BmDnjTxF2hy67Qmhwd7%2Fl3w8B2eS7ZL2yin%2FnWHJKw7AaqEJI9OOp2ho%2FAftgw97CixAY6pgFiTSSd5HQiXsHAecqknraqi%2BBxO6hnA8BfJwWBcOEimDgHbrprNc%2FXl2wEMKN5myZCNiA6kAVzTRPNPrIHObzCyDm7rF8R9QIpmZoAPJcAsrL1hI15UST7tM4pcNXFOkfx%2FaFwdTwv5EMBI7p%2B7PFt8jhZ1SSsSnuRPCu5jTFxvGjfgD46r0RGJaJ8es1MbMTtpJXSjy4aCjpPi%2BdI5FnifyqMToBs&X-Amz-Signature=519dd5aa89d95a4625a3644876c1bc3c6526992ec3f95d3d5ca603fec9afa84a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZBRQ3XQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGYq1iP6MEG24lvpQM43QXpxrisqHoan4LEpof80lFHxAiBFkDBV3M1%2Bw9KLGse5EjnxbZU6a9v0%2BSJ9JlZpTUL7qyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpYyhtlfvrpOz9TrhKtwDhkPxK8ggA6SR4mzvQyoCi3vVjCxDLM7dhJ3FZ%2BqjpRf7vuH4LHaxNKGHq6q1bF3V0rYviZOCCRpcWnmBRaJH50n06WesDI0YJ%2FNTvG%2FdCneSf7YBU6Hl1JfEvnqdxTHj858JPA6o4QrTFfJtzVg5xucV8iNGsUb28jBCwewrEwTPo2jsFt6UqXFAFP83JV9K0Wv0jPTYriwx1VVZQ78RsEvNtCNUBddHCGqU88T4Md0d8%2FzcSBcci2gI0%2FicxvBXRgnHc1u1hSoKklhg1UIXYaqNzzCRvrl8Wtjyg%2FESrB8FE%2B33jVONcagcVhy%2B1XTeJ%2BcfbH%2BhoY4NrFX7mTuI91knwmqIhoxQrQfC3GPeZTg7jwfTjw%2BYsTlwOjKY0EV4AZc%2FFnpf7FmIrYH6CClLirQqRPL1W4Ak9eD0T2P1ErX1DslaZBCv2nDgWvKU1OEmopatntiNbI8UrHeRlI2su2r6W32BqV5v1%2F%2FcSaPhJWZbMYHS%2F2fODjmWx3vyz7e%2B01NcfG4PqKs1fWXDOiFeRK98e%2BBTcxH96zAyxDGjM5U7SDEX3%2F7OofINDv1O6e%2BmDnjTxF2hy67Qmhwd7%2Fl3w8B2eS7ZL2yin%2FnWHJKw7AaqEJI9OOp2ho%2FAftgw97CixAY6pgFiTSSd5HQiXsHAecqknraqi%2BBxO6hnA8BfJwWBcOEimDgHbrprNc%2FXl2wEMKN5myZCNiA6kAVzTRPNPrIHObzCyDm7rF8R9QIpmZoAPJcAsrL1hI15UST7tM4pcNXFOkfx%2FaFwdTwv5EMBI7p%2B7PFt8jhZ1SSsSnuRPCu5jTFxvGjfgD46r0RGJaJ8es1MbMTtpJXSjy4aCjpPi%2BdI5FnifyqMToBs&X-Amz-Signature=e1d0e9e65b81d3b70e46796e5530854e2ea5dc25eb8e97299183c1dce8737246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZBRQ3XQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGYq1iP6MEG24lvpQM43QXpxrisqHoan4LEpof80lFHxAiBFkDBV3M1%2Bw9KLGse5EjnxbZU6a9v0%2BSJ9JlZpTUL7qyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpYyhtlfvrpOz9TrhKtwDhkPxK8ggA6SR4mzvQyoCi3vVjCxDLM7dhJ3FZ%2BqjpRf7vuH4LHaxNKGHq6q1bF3V0rYviZOCCRpcWnmBRaJH50n06WesDI0YJ%2FNTvG%2FdCneSf7YBU6Hl1JfEvnqdxTHj858JPA6o4QrTFfJtzVg5xucV8iNGsUb28jBCwewrEwTPo2jsFt6UqXFAFP83JV9K0Wv0jPTYriwx1VVZQ78RsEvNtCNUBddHCGqU88T4Md0d8%2FzcSBcci2gI0%2FicxvBXRgnHc1u1hSoKklhg1UIXYaqNzzCRvrl8Wtjyg%2FESrB8FE%2B33jVONcagcVhy%2B1XTeJ%2BcfbH%2BhoY4NrFX7mTuI91knwmqIhoxQrQfC3GPeZTg7jwfTjw%2BYsTlwOjKY0EV4AZc%2FFnpf7FmIrYH6CClLirQqRPL1W4Ak9eD0T2P1ErX1DslaZBCv2nDgWvKU1OEmopatntiNbI8UrHeRlI2su2r6W32BqV5v1%2F%2FcSaPhJWZbMYHS%2F2fODjmWx3vyz7e%2B01NcfG4PqKs1fWXDOiFeRK98e%2BBTcxH96zAyxDGjM5U7SDEX3%2F7OofINDv1O6e%2BmDnjTxF2hy67Qmhwd7%2Fl3w8B2eS7ZL2yin%2FnWHJKw7AaqEJI9OOp2ho%2FAftgw97CixAY6pgFiTSSd5HQiXsHAecqknraqi%2BBxO6hnA8BfJwWBcOEimDgHbrprNc%2FXl2wEMKN5myZCNiA6kAVzTRPNPrIHObzCyDm7rF8R9QIpmZoAPJcAsrL1hI15UST7tM4pcNXFOkfx%2FaFwdTwv5EMBI7p%2B7PFt8jhZ1SSsSnuRPCu5jTFxvGjfgD46r0RGJaJ8es1MbMTtpJXSjy4aCjpPi%2BdI5FnifyqMToBs&X-Amz-Signature=569e1ca151523018218b6fb79895cd32a425992016b2d248ae8ea1ff6e75818a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZBRQ3XQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIGYq1iP6MEG24lvpQM43QXpxrisqHoan4LEpof80lFHxAiBFkDBV3M1%2Bw9KLGse5EjnxbZU6a9v0%2BSJ9JlZpTUL7qyqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpYyhtlfvrpOz9TrhKtwDhkPxK8ggA6SR4mzvQyoCi3vVjCxDLM7dhJ3FZ%2BqjpRf7vuH4LHaxNKGHq6q1bF3V0rYviZOCCRpcWnmBRaJH50n06WesDI0YJ%2FNTvG%2FdCneSf7YBU6Hl1JfEvnqdxTHj858JPA6o4QrTFfJtzVg5xucV8iNGsUb28jBCwewrEwTPo2jsFt6UqXFAFP83JV9K0Wv0jPTYriwx1VVZQ78RsEvNtCNUBddHCGqU88T4Md0d8%2FzcSBcci2gI0%2FicxvBXRgnHc1u1hSoKklhg1UIXYaqNzzCRvrl8Wtjyg%2FESrB8FE%2B33jVONcagcVhy%2B1XTeJ%2BcfbH%2BhoY4NrFX7mTuI91knwmqIhoxQrQfC3GPeZTg7jwfTjw%2BYsTlwOjKY0EV4AZc%2FFnpf7FmIrYH6CClLirQqRPL1W4Ak9eD0T2P1ErX1DslaZBCv2nDgWvKU1OEmopatntiNbI8UrHeRlI2su2r6W32BqV5v1%2F%2FcSaPhJWZbMYHS%2F2fODjmWx3vyz7e%2B01NcfG4PqKs1fWXDOiFeRK98e%2BBTcxH96zAyxDGjM5U7SDEX3%2F7OofINDv1O6e%2BmDnjTxF2hy67Qmhwd7%2Fl3w8B2eS7ZL2yin%2FnWHJKw7AaqEJI9OOp2ho%2FAftgw97CixAY6pgFiTSSd5HQiXsHAecqknraqi%2BBxO6hnA8BfJwWBcOEimDgHbrprNc%2FXl2wEMKN5myZCNiA6kAVzTRPNPrIHObzCyDm7rF8R9QIpmZoAPJcAsrL1hI15UST7tM4pcNXFOkfx%2FaFwdTwv5EMBI7p%2B7PFt8jhZ1SSsSnuRPCu5jTFxvGjfgD46r0RGJaJ8es1MbMTtpJXSjy4aCjpPi%2BdI5FnifyqMToBs&X-Amz-Signature=ba15eaaf875aadc8d6f3f1ad9ecc0d10389b6b88a144228ad3937b2badb26e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
        }.items()
    )
    
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

# Nav2 settings

TODO: change footprint?
