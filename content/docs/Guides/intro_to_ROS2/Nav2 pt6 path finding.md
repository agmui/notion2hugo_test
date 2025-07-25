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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQIYR5PS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCL9Cc8SctbN9Syj%2FI2KmIv8aZynDWvq5kQHl2aNX5MUAIgTJ1ykvfr7npl468oVTqdY3D6%2FCUQ6Kah4dfCxMyNikoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDdpZHNkTLoUzH3lvircA6YQ9bnK8EEgji84DlKCqiVZjmk%2BK5dPiKANVRhA3mIJloVZr5mZofxp9fEp6Bst0GbfErGHj1x3W55QMRqpcQhwkSdAfqbmW%2BIXY1E1XmssP0mKKX6szRL9e5WmVxcHDeWVArBCSM%2F2atw%2BNPIVTPBi9DhyipG689hGbC3zvZ3sFwYuh%2FDk0v3Y5dVagf48m2SI61Re%2FNf4EBATTBdvZYdFaVIuTqUYVAp8PvcOqxtRohtGfPCTJ9KZJL00WL%2FkyP44YWve%2BcOGlJ%2B79sDaSkAwpouZmEjogQUc77LmWU7uIbM4oxxXnPPfiH8fTgnmx7YRyqScJO4UZcrKF7tRT7qp2Cus%2FAaqzbuVTkHwdFsNVX%2F9B9fjklcVpZlv7I9CWoEL07J%2FzKmnLrFeGzTUUpVIPZHhSAW3rp2lQ55gCaQ2JcxHDrdC%2Ff3AJQPnnklNP0hV9TfEn%2BM9chrffGzYXv%2FiaNL05%2Fp42sbsi%2FWPS%2BOIPCpFQyUystlZKcxtDLIxx9aV1RErT16bonxviwsT69Vmjjfhdo%2FXuIWctZhvBQYNM4FxHHJ4HmCX97oaQzqiA%2FhI8ICUn9ZY%2B%2BKU7ysuXpPSbDqgkD1OF5PVCv6iJ6XtfBP%2BUwvpMfG%2BfMU6MIy8jsQGOqUBj0cowKCJC%2Byj5tMxGs7khgzFqE8IBIbglADrvrCiLSZ%2B%2F6huimnMkLya4p6XtBybuojYt28G6aWkNcz2AP8158dBymAGbXFyTehAhSaYNtJrI5l%2F9uTzrs%2Bobsy3ceMKWZATcUDz28ClH%2FKzf%2BRlTR0ID9InBEyl0s6t7zLlzAUCy9vNizUczQoUHFgLGozOwuOYqdCwaG7XvNiOHNUAoFN%2BoKds&X-Amz-Signature=badb4577c5442a5663d9998e52cf8576bcf45a141dd71597990a8dcdb8f01bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQIYR5PS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCL9Cc8SctbN9Syj%2FI2KmIv8aZynDWvq5kQHl2aNX5MUAIgTJ1ykvfr7npl468oVTqdY3D6%2FCUQ6Kah4dfCxMyNikoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDdpZHNkTLoUzH3lvircA6YQ9bnK8EEgji84DlKCqiVZjmk%2BK5dPiKANVRhA3mIJloVZr5mZofxp9fEp6Bst0GbfErGHj1x3W55QMRqpcQhwkSdAfqbmW%2BIXY1E1XmssP0mKKX6szRL9e5WmVxcHDeWVArBCSM%2F2atw%2BNPIVTPBi9DhyipG689hGbC3zvZ3sFwYuh%2FDk0v3Y5dVagf48m2SI61Re%2FNf4EBATTBdvZYdFaVIuTqUYVAp8PvcOqxtRohtGfPCTJ9KZJL00WL%2FkyP44YWve%2BcOGlJ%2B79sDaSkAwpouZmEjogQUc77LmWU7uIbM4oxxXnPPfiH8fTgnmx7YRyqScJO4UZcrKF7tRT7qp2Cus%2FAaqzbuVTkHwdFsNVX%2F9B9fjklcVpZlv7I9CWoEL07J%2FzKmnLrFeGzTUUpVIPZHhSAW3rp2lQ55gCaQ2JcxHDrdC%2Ff3AJQPnnklNP0hV9TfEn%2BM9chrffGzYXv%2FiaNL05%2Fp42sbsi%2FWPS%2BOIPCpFQyUystlZKcxtDLIxx9aV1RErT16bonxviwsT69Vmjjfhdo%2FXuIWctZhvBQYNM4FxHHJ4HmCX97oaQzqiA%2FhI8ICUn9ZY%2B%2BKU7ysuXpPSbDqgkD1OF5PVCv6iJ6XtfBP%2BUwvpMfG%2BfMU6MIy8jsQGOqUBj0cowKCJC%2Byj5tMxGs7khgzFqE8IBIbglADrvrCiLSZ%2B%2F6huimnMkLya4p6XtBybuojYt28G6aWkNcz2AP8158dBymAGbXFyTehAhSaYNtJrI5l%2F9uTzrs%2Bobsy3ceMKWZATcUDz28ClH%2FKzf%2BRlTR0ID9InBEyl0s6t7zLlzAUCy9vNizUczQoUHFgLGozOwuOYqdCwaG7XvNiOHNUAoFN%2BoKds&X-Amz-Signature=9529642f9b78748cf6f81ee7eedb46c4db791596dabe0e2ad4e620a0d8c9bf0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQIYR5PS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCL9Cc8SctbN9Syj%2FI2KmIv8aZynDWvq5kQHl2aNX5MUAIgTJ1ykvfr7npl468oVTqdY3D6%2FCUQ6Kah4dfCxMyNikoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDdpZHNkTLoUzH3lvircA6YQ9bnK8EEgji84DlKCqiVZjmk%2BK5dPiKANVRhA3mIJloVZr5mZofxp9fEp6Bst0GbfErGHj1x3W55QMRqpcQhwkSdAfqbmW%2BIXY1E1XmssP0mKKX6szRL9e5WmVxcHDeWVArBCSM%2F2atw%2BNPIVTPBi9DhyipG689hGbC3zvZ3sFwYuh%2FDk0v3Y5dVagf48m2SI61Re%2FNf4EBATTBdvZYdFaVIuTqUYVAp8PvcOqxtRohtGfPCTJ9KZJL00WL%2FkyP44YWve%2BcOGlJ%2B79sDaSkAwpouZmEjogQUc77LmWU7uIbM4oxxXnPPfiH8fTgnmx7YRyqScJO4UZcrKF7tRT7qp2Cus%2FAaqzbuVTkHwdFsNVX%2F9B9fjklcVpZlv7I9CWoEL07J%2FzKmnLrFeGzTUUpVIPZHhSAW3rp2lQ55gCaQ2JcxHDrdC%2Ff3AJQPnnklNP0hV9TfEn%2BM9chrffGzYXv%2FiaNL05%2Fp42sbsi%2FWPS%2BOIPCpFQyUystlZKcxtDLIxx9aV1RErT16bonxviwsT69Vmjjfhdo%2FXuIWctZhvBQYNM4FxHHJ4HmCX97oaQzqiA%2FhI8ICUn9ZY%2B%2BKU7ysuXpPSbDqgkD1OF5PVCv6iJ6XtfBP%2BUwvpMfG%2BfMU6MIy8jsQGOqUBj0cowKCJC%2Byj5tMxGs7khgzFqE8IBIbglADrvrCiLSZ%2B%2F6huimnMkLya4p6XtBybuojYt28G6aWkNcz2AP8158dBymAGbXFyTehAhSaYNtJrI5l%2F9uTzrs%2Bobsy3ceMKWZATcUDz28ClH%2FKzf%2BRlTR0ID9InBEyl0s6t7zLlzAUCy9vNizUczQoUHFgLGozOwuOYqdCwaG7XvNiOHNUAoFN%2BoKds&X-Amz-Signature=c92f3b6b2c9c03615217b480bcfce75201bae9ae2df67fb5887ebda82f17bdc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQIYR5PS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCL9Cc8SctbN9Syj%2FI2KmIv8aZynDWvq5kQHl2aNX5MUAIgTJ1ykvfr7npl468oVTqdY3D6%2FCUQ6Kah4dfCxMyNikoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDdpZHNkTLoUzH3lvircA6YQ9bnK8EEgji84DlKCqiVZjmk%2BK5dPiKANVRhA3mIJloVZr5mZofxp9fEp6Bst0GbfErGHj1x3W55QMRqpcQhwkSdAfqbmW%2BIXY1E1XmssP0mKKX6szRL9e5WmVxcHDeWVArBCSM%2F2atw%2BNPIVTPBi9DhyipG689hGbC3zvZ3sFwYuh%2FDk0v3Y5dVagf48m2SI61Re%2FNf4EBATTBdvZYdFaVIuTqUYVAp8PvcOqxtRohtGfPCTJ9KZJL00WL%2FkyP44YWve%2BcOGlJ%2B79sDaSkAwpouZmEjogQUc77LmWU7uIbM4oxxXnPPfiH8fTgnmx7YRyqScJO4UZcrKF7tRT7qp2Cus%2FAaqzbuVTkHwdFsNVX%2F9B9fjklcVpZlv7I9CWoEL07J%2FzKmnLrFeGzTUUpVIPZHhSAW3rp2lQ55gCaQ2JcxHDrdC%2Ff3AJQPnnklNP0hV9TfEn%2BM9chrffGzYXv%2FiaNL05%2Fp42sbsi%2FWPS%2BOIPCpFQyUystlZKcxtDLIxx9aV1RErT16bonxviwsT69Vmjjfhdo%2FXuIWctZhvBQYNM4FxHHJ4HmCX97oaQzqiA%2FhI8ICUn9ZY%2B%2BKU7ysuXpPSbDqgkD1OF5PVCv6iJ6XtfBP%2BUwvpMfG%2BfMU6MIy8jsQGOqUBj0cowKCJC%2Byj5tMxGs7khgzFqE8IBIbglADrvrCiLSZ%2B%2F6huimnMkLya4p6XtBybuojYt28G6aWkNcz2AP8158dBymAGbXFyTehAhSaYNtJrI5l%2F9uTzrs%2Bobsy3ceMKWZATcUDz28ClH%2FKzf%2BRlTR0ID9InBEyl0s6t7zLlzAUCy9vNizUczQoUHFgLGozOwuOYqdCwaG7XvNiOHNUAoFN%2BoKds&X-Amz-Signature=29a246ebd3e9cf78c0ffcd4f5e86dd695d34bdea1985642ecd8b317917f0ac95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQIYR5PS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCL9Cc8SctbN9Syj%2FI2KmIv8aZynDWvq5kQHl2aNX5MUAIgTJ1ykvfr7npl468oVTqdY3D6%2FCUQ6Kah4dfCxMyNikoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDdpZHNkTLoUzH3lvircA6YQ9bnK8EEgji84DlKCqiVZjmk%2BK5dPiKANVRhA3mIJloVZr5mZofxp9fEp6Bst0GbfErGHj1x3W55QMRqpcQhwkSdAfqbmW%2BIXY1E1XmssP0mKKX6szRL9e5WmVxcHDeWVArBCSM%2F2atw%2BNPIVTPBi9DhyipG689hGbC3zvZ3sFwYuh%2FDk0v3Y5dVagf48m2SI61Re%2FNf4EBATTBdvZYdFaVIuTqUYVAp8PvcOqxtRohtGfPCTJ9KZJL00WL%2FkyP44YWve%2BcOGlJ%2B79sDaSkAwpouZmEjogQUc77LmWU7uIbM4oxxXnPPfiH8fTgnmx7YRyqScJO4UZcrKF7tRT7qp2Cus%2FAaqzbuVTkHwdFsNVX%2F9B9fjklcVpZlv7I9CWoEL07J%2FzKmnLrFeGzTUUpVIPZHhSAW3rp2lQ55gCaQ2JcxHDrdC%2Ff3AJQPnnklNP0hV9TfEn%2BM9chrffGzYXv%2FiaNL05%2Fp42sbsi%2FWPS%2BOIPCpFQyUystlZKcxtDLIxx9aV1RErT16bonxviwsT69Vmjjfhdo%2FXuIWctZhvBQYNM4FxHHJ4HmCX97oaQzqiA%2FhI8ICUn9ZY%2B%2BKU7ysuXpPSbDqgkD1OF5PVCv6iJ6XtfBP%2BUwvpMfG%2BfMU6MIy8jsQGOqUBj0cowKCJC%2Byj5tMxGs7khgzFqE8IBIbglADrvrCiLSZ%2B%2F6huimnMkLya4p6XtBybuojYt28G6aWkNcz2AP8158dBymAGbXFyTehAhSaYNtJrI5l%2F9uTzrs%2Bobsy3ceMKWZATcUDz28ClH%2FKzf%2BRlTR0ID9InBEyl0s6t7zLlzAUCy9vNizUczQoUHFgLGozOwuOYqdCwaG7XvNiOHNUAoFN%2BoKds&X-Amz-Signature=746e9d27c75080bb5facbed834243a98d8be72ab77e8cedbe7da054e550377a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQIYR5PS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCL9Cc8SctbN9Syj%2FI2KmIv8aZynDWvq5kQHl2aNX5MUAIgTJ1ykvfr7npl468oVTqdY3D6%2FCUQ6Kah4dfCxMyNikoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDdpZHNkTLoUzH3lvircA6YQ9bnK8EEgji84DlKCqiVZjmk%2BK5dPiKANVRhA3mIJloVZr5mZofxp9fEp6Bst0GbfErGHj1x3W55QMRqpcQhwkSdAfqbmW%2BIXY1E1XmssP0mKKX6szRL9e5WmVxcHDeWVArBCSM%2F2atw%2BNPIVTPBi9DhyipG689hGbC3zvZ3sFwYuh%2FDk0v3Y5dVagf48m2SI61Re%2FNf4EBATTBdvZYdFaVIuTqUYVAp8PvcOqxtRohtGfPCTJ9KZJL00WL%2FkyP44YWve%2BcOGlJ%2B79sDaSkAwpouZmEjogQUc77LmWU7uIbM4oxxXnPPfiH8fTgnmx7YRyqScJO4UZcrKF7tRT7qp2Cus%2FAaqzbuVTkHwdFsNVX%2F9B9fjklcVpZlv7I9CWoEL07J%2FzKmnLrFeGzTUUpVIPZHhSAW3rp2lQ55gCaQ2JcxHDrdC%2Ff3AJQPnnklNP0hV9TfEn%2BM9chrffGzYXv%2FiaNL05%2Fp42sbsi%2FWPS%2BOIPCpFQyUystlZKcxtDLIxx9aV1RErT16bonxviwsT69Vmjjfhdo%2FXuIWctZhvBQYNM4FxHHJ4HmCX97oaQzqiA%2FhI8ICUn9ZY%2B%2BKU7ysuXpPSbDqgkD1OF5PVCv6iJ6XtfBP%2BUwvpMfG%2BfMU6MIy8jsQGOqUBj0cowKCJC%2Byj5tMxGs7khgzFqE8IBIbglADrvrCiLSZ%2B%2F6huimnMkLya4p6XtBybuojYt28G6aWkNcz2AP8158dBymAGbXFyTehAhSaYNtJrI5l%2F9uTzrs%2Bobsy3ceMKWZATcUDz28ClH%2FKzf%2BRlTR0ID9InBEyl0s6t7zLlzAUCy9vNizUczQoUHFgLGozOwuOYqdCwaG7XvNiOHNUAoFN%2BoKds&X-Amz-Signature=f060d13593638e159290a6ec0b5002268f2c8593ea3895fd10a9da0754e55c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
