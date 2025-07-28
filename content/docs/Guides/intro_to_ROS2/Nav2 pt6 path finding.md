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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDWY3IJ7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDdi8dhP9l3tzB9ChqwGT9z%2F72YhZAC2gqC4Y75HGnTXgIgMsJXVyKSRh5SVuElM3QK%2FvamrdRn%2BOXW2zPavPSFMZgqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZIzcPbuj4HCx6G9yrcA6GEBcHxIdWWl1cnQCkZrYIl%2BIakvqS9qIe1W2UhVAf20JhwmGvN%2B2hIxsf9%2BT42NlqqqzoLOOUn%2FzNGUu4NTtOMsSxckSEQI%2Fuk%2BXRl3gKu4imlFxhc0tkjJk4Xm8whU79gezSG3SOWrPjajcIFTRilTkhcIUcvFYZB2oJ6YNP6%2FxayFhERRNsruMUmCl6T0nxtUP%2B9Ls%2BFRo%2FAKeU%2BK0oLsf5ymDjmLcAZcmEY0FQqmcMwwcbBiHFvE%2BCqhPUQGEFm9dn7UBcz7EQBHf3qmG92UfqWO0Jzl18aYhKqhuN9PFeWQeB048ArOTbyfLMP89%2FO93hkhVGLCUTxEoLafLt%2F4p7tlQY1yHvj%2FcUCZDgtQG4EmflVAeyyajoG3nP6auB%2F4OFozW%2B%2BqqXo%2FlYwvj9Y5x%2FREVAU4EylA1rJdD05g9P0tkVT%2BGYY7fEq6j9eKBJpMauwHChdwJ%2F1ZNTZyDbk2nExPmKqht3xUtXhHskhCDNHa1a%2FhoMJJqF2coSOmZsvN1bBzprYddzPf4KOAIawlm%2F7byAzWsl9P8rbd4jKx9s%2FQsQnTYGc2fmKPSdXlUDYjjj1kCecpoHCo10VwhrDMPIrL%2FQWp8eNlMVGfUALoFiOQEXU9CBFSInxMNLqnMQGOqUBbG32Bx3kQJKAzgD7HNOQAs2rIRQjXzvs2ndgMfsLFvAYGApq9OEPfuNp0HVWLpEudRRp%2FJgwKAKYYvQnff78Ce2O7yUUWCPvTC87iz1B%2FTWcWxGXOjP7or301ubXIXfzPG1Mlw%2Bj00IcFcli6Zt9dU7x0S4QvnoBDm%2BQQxmOsKaH87gTLxHp1mjpFLs1ToSnChrxbvFx%2B%2F5Z4osNvTI%2Bh9jNqmHB&X-Amz-Signature=15e9885652a5b3abb4cce229c05f1a7c4ba2b3eb34395153dbcdd908d574e19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDWY3IJ7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDdi8dhP9l3tzB9ChqwGT9z%2F72YhZAC2gqC4Y75HGnTXgIgMsJXVyKSRh5SVuElM3QK%2FvamrdRn%2BOXW2zPavPSFMZgqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZIzcPbuj4HCx6G9yrcA6GEBcHxIdWWl1cnQCkZrYIl%2BIakvqS9qIe1W2UhVAf20JhwmGvN%2B2hIxsf9%2BT42NlqqqzoLOOUn%2FzNGUu4NTtOMsSxckSEQI%2Fuk%2BXRl3gKu4imlFxhc0tkjJk4Xm8whU79gezSG3SOWrPjajcIFTRilTkhcIUcvFYZB2oJ6YNP6%2FxayFhERRNsruMUmCl6T0nxtUP%2B9Ls%2BFRo%2FAKeU%2BK0oLsf5ymDjmLcAZcmEY0FQqmcMwwcbBiHFvE%2BCqhPUQGEFm9dn7UBcz7EQBHf3qmG92UfqWO0Jzl18aYhKqhuN9PFeWQeB048ArOTbyfLMP89%2FO93hkhVGLCUTxEoLafLt%2F4p7tlQY1yHvj%2FcUCZDgtQG4EmflVAeyyajoG3nP6auB%2F4OFozW%2B%2BqqXo%2FlYwvj9Y5x%2FREVAU4EylA1rJdD05g9P0tkVT%2BGYY7fEq6j9eKBJpMauwHChdwJ%2F1ZNTZyDbk2nExPmKqht3xUtXhHskhCDNHa1a%2FhoMJJqF2coSOmZsvN1bBzprYddzPf4KOAIawlm%2F7byAzWsl9P8rbd4jKx9s%2FQsQnTYGc2fmKPSdXlUDYjjj1kCecpoHCo10VwhrDMPIrL%2FQWp8eNlMVGfUALoFiOQEXU9CBFSInxMNLqnMQGOqUBbG32Bx3kQJKAzgD7HNOQAs2rIRQjXzvs2ndgMfsLFvAYGApq9OEPfuNp0HVWLpEudRRp%2FJgwKAKYYvQnff78Ce2O7yUUWCPvTC87iz1B%2FTWcWxGXOjP7or301ubXIXfzPG1Mlw%2Bj00IcFcli6Zt9dU7x0S4QvnoBDm%2BQQxmOsKaH87gTLxHp1mjpFLs1ToSnChrxbvFx%2B%2F5Z4osNvTI%2Bh9jNqmHB&X-Amz-Signature=f259434a01a6a38870d6f83d6588fd39285c7bf3d985d9249da9b54fc9b17472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDWY3IJ7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDdi8dhP9l3tzB9ChqwGT9z%2F72YhZAC2gqC4Y75HGnTXgIgMsJXVyKSRh5SVuElM3QK%2FvamrdRn%2BOXW2zPavPSFMZgqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZIzcPbuj4HCx6G9yrcA6GEBcHxIdWWl1cnQCkZrYIl%2BIakvqS9qIe1W2UhVAf20JhwmGvN%2B2hIxsf9%2BT42NlqqqzoLOOUn%2FzNGUu4NTtOMsSxckSEQI%2Fuk%2BXRl3gKu4imlFxhc0tkjJk4Xm8whU79gezSG3SOWrPjajcIFTRilTkhcIUcvFYZB2oJ6YNP6%2FxayFhERRNsruMUmCl6T0nxtUP%2B9Ls%2BFRo%2FAKeU%2BK0oLsf5ymDjmLcAZcmEY0FQqmcMwwcbBiHFvE%2BCqhPUQGEFm9dn7UBcz7EQBHf3qmG92UfqWO0Jzl18aYhKqhuN9PFeWQeB048ArOTbyfLMP89%2FO93hkhVGLCUTxEoLafLt%2F4p7tlQY1yHvj%2FcUCZDgtQG4EmflVAeyyajoG3nP6auB%2F4OFozW%2B%2BqqXo%2FlYwvj9Y5x%2FREVAU4EylA1rJdD05g9P0tkVT%2BGYY7fEq6j9eKBJpMauwHChdwJ%2F1ZNTZyDbk2nExPmKqht3xUtXhHskhCDNHa1a%2FhoMJJqF2coSOmZsvN1bBzprYddzPf4KOAIawlm%2F7byAzWsl9P8rbd4jKx9s%2FQsQnTYGc2fmKPSdXlUDYjjj1kCecpoHCo10VwhrDMPIrL%2FQWp8eNlMVGfUALoFiOQEXU9CBFSInxMNLqnMQGOqUBbG32Bx3kQJKAzgD7HNOQAs2rIRQjXzvs2ndgMfsLFvAYGApq9OEPfuNp0HVWLpEudRRp%2FJgwKAKYYvQnff78Ce2O7yUUWCPvTC87iz1B%2FTWcWxGXOjP7or301ubXIXfzPG1Mlw%2Bj00IcFcli6Zt9dU7x0S4QvnoBDm%2BQQxmOsKaH87gTLxHp1mjpFLs1ToSnChrxbvFx%2B%2F5Z4osNvTI%2Bh9jNqmHB&X-Amz-Signature=57c98bcf24d4adbe26ac1150977bbec169be30e1f7faab10a398308a8b9c0fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDWY3IJ7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDdi8dhP9l3tzB9ChqwGT9z%2F72YhZAC2gqC4Y75HGnTXgIgMsJXVyKSRh5SVuElM3QK%2FvamrdRn%2BOXW2zPavPSFMZgqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZIzcPbuj4HCx6G9yrcA6GEBcHxIdWWl1cnQCkZrYIl%2BIakvqS9qIe1W2UhVAf20JhwmGvN%2B2hIxsf9%2BT42NlqqqzoLOOUn%2FzNGUu4NTtOMsSxckSEQI%2Fuk%2BXRl3gKu4imlFxhc0tkjJk4Xm8whU79gezSG3SOWrPjajcIFTRilTkhcIUcvFYZB2oJ6YNP6%2FxayFhERRNsruMUmCl6T0nxtUP%2B9Ls%2BFRo%2FAKeU%2BK0oLsf5ymDjmLcAZcmEY0FQqmcMwwcbBiHFvE%2BCqhPUQGEFm9dn7UBcz7EQBHf3qmG92UfqWO0Jzl18aYhKqhuN9PFeWQeB048ArOTbyfLMP89%2FO93hkhVGLCUTxEoLafLt%2F4p7tlQY1yHvj%2FcUCZDgtQG4EmflVAeyyajoG3nP6auB%2F4OFozW%2B%2BqqXo%2FlYwvj9Y5x%2FREVAU4EylA1rJdD05g9P0tkVT%2BGYY7fEq6j9eKBJpMauwHChdwJ%2F1ZNTZyDbk2nExPmKqht3xUtXhHskhCDNHa1a%2FhoMJJqF2coSOmZsvN1bBzprYddzPf4KOAIawlm%2F7byAzWsl9P8rbd4jKx9s%2FQsQnTYGc2fmKPSdXlUDYjjj1kCecpoHCo10VwhrDMPIrL%2FQWp8eNlMVGfUALoFiOQEXU9CBFSInxMNLqnMQGOqUBbG32Bx3kQJKAzgD7HNOQAs2rIRQjXzvs2ndgMfsLFvAYGApq9OEPfuNp0HVWLpEudRRp%2FJgwKAKYYvQnff78Ce2O7yUUWCPvTC87iz1B%2FTWcWxGXOjP7or301ubXIXfzPG1Mlw%2Bj00IcFcli6Zt9dU7x0S4QvnoBDm%2BQQxmOsKaH87gTLxHp1mjpFLs1ToSnChrxbvFx%2B%2F5Z4osNvTI%2Bh9jNqmHB&X-Amz-Signature=e17488e3c3b470ab14450d467092ddcee73940e3f2468fe122a9fee48bffad4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDWY3IJ7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDdi8dhP9l3tzB9ChqwGT9z%2F72YhZAC2gqC4Y75HGnTXgIgMsJXVyKSRh5SVuElM3QK%2FvamrdRn%2BOXW2zPavPSFMZgqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZIzcPbuj4HCx6G9yrcA6GEBcHxIdWWl1cnQCkZrYIl%2BIakvqS9qIe1W2UhVAf20JhwmGvN%2B2hIxsf9%2BT42NlqqqzoLOOUn%2FzNGUu4NTtOMsSxckSEQI%2Fuk%2BXRl3gKu4imlFxhc0tkjJk4Xm8whU79gezSG3SOWrPjajcIFTRilTkhcIUcvFYZB2oJ6YNP6%2FxayFhERRNsruMUmCl6T0nxtUP%2B9Ls%2BFRo%2FAKeU%2BK0oLsf5ymDjmLcAZcmEY0FQqmcMwwcbBiHFvE%2BCqhPUQGEFm9dn7UBcz7EQBHf3qmG92UfqWO0Jzl18aYhKqhuN9PFeWQeB048ArOTbyfLMP89%2FO93hkhVGLCUTxEoLafLt%2F4p7tlQY1yHvj%2FcUCZDgtQG4EmflVAeyyajoG3nP6auB%2F4OFozW%2B%2BqqXo%2FlYwvj9Y5x%2FREVAU4EylA1rJdD05g9P0tkVT%2BGYY7fEq6j9eKBJpMauwHChdwJ%2F1ZNTZyDbk2nExPmKqht3xUtXhHskhCDNHa1a%2FhoMJJqF2coSOmZsvN1bBzprYddzPf4KOAIawlm%2F7byAzWsl9P8rbd4jKx9s%2FQsQnTYGc2fmKPSdXlUDYjjj1kCecpoHCo10VwhrDMPIrL%2FQWp8eNlMVGfUALoFiOQEXU9CBFSInxMNLqnMQGOqUBbG32Bx3kQJKAzgD7HNOQAs2rIRQjXzvs2ndgMfsLFvAYGApq9OEPfuNp0HVWLpEudRRp%2FJgwKAKYYvQnff78Ce2O7yUUWCPvTC87iz1B%2FTWcWxGXOjP7or301ubXIXfzPG1Mlw%2Bj00IcFcli6Zt9dU7x0S4QvnoBDm%2BQQxmOsKaH87gTLxHp1mjpFLs1ToSnChrxbvFx%2B%2F5Z4osNvTI%2Bh9jNqmHB&X-Amz-Signature=a81dbfcf66ddcfcda809666ab0cff40aac2afbc65abb791d83737ce1a46129f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDWY3IJ7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDdi8dhP9l3tzB9ChqwGT9z%2F72YhZAC2gqC4Y75HGnTXgIgMsJXVyKSRh5SVuElM3QK%2FvamrdRn%2BOXW2zPavPSFMZgqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCZIzcPbuj4HCx6G9yrcA6GEBcHxIdWWl1cnQCkZrYIl%2BIakvqS9qIe1W2UhVAf20JhwmGvN%2B2hIxsf9%2BT42NlqqqzoLOOUn%2FzNGUu4NTtOMsSxckSEQI%2Fuk%2BXRl3gKu4imlFxhc0tkjJk4Xm8whU79gezSG3SOWrPjajcIFTRilTkhcIUcvFYZB2oJ6YNP6%2FxayFhERRNsruMUmCl6T0nxtUP%2B9Ls%2BFRo%2FAKeU%2BK0oLsf5ymDjmLcAZcmEY0FQqmcMwwcbBiHFvE%2BCqhPUQGEFm9dn7UBcz7EQBHf3qmG92UfqWO0Jzl18aYhKqhuN9PFeWQeB048ArOTbyfLMP89%2FO93hkhVGLCUTxEoLafLt%2F4p7tlQY1yHvj%2FcUCZDgtQG4EmflVAeyyajoG3nP6auB%2F4OFozW%2B%2BqqXo%2FlYwvj9Y5x%2FREVAU4EylA1rJdD05g9P0tkVT%2BGYY7fEq6j9eKBJpMauwHChdwJ%2F1ZNTZyDbk2nExPmKqht3xUtXhHskhCDNHa1a%2FhoMJJqF2coSOmZsvN1bBzprYddzPf4KOAIawlm%2F7byAzWsl9P8rbd4jKx9s%2FQsQnTYGc2fmKPSdXlUDYjjj1kCecpoHCo10VwhrDMPIrL%2FQWp8eNlMVGfUALoFiOQEXU9CBFSInxMNLqnMQGOqUBbG32Bx3kQJKAzgD7HNOQAs2rIRQjXzvs2ndgMfsLFvAYGApq9OEPfuNp0HVWLpEudRRp%2FJgwKAKYYvQnff78Ce2O7yUUWCPvTC87iz1B%2FTWcWxGXOjP7or301ubXIXfzPG1Mlw%2Bj00IcFcli6Zt9dU7x0S4QvnoBDm%2BQQxmOsKaH87gTLxHp1mjpFLs1ToSnChrxbvFx%2B%2F5Z4osNvTI%2Bh9jNqmHB&X-Amz-Signature=6785ee35acc4ac1c3efdfa76acf567abcc3bd6f8481beb6fd80fded73963c131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
