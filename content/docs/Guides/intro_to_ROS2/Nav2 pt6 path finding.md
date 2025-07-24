---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T10:36:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T10:36:00.000Z"
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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775L5IJ4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH820As6WbSWTc0tHoDSYWZ7lEPcfT7bdhG%2BXPSh6Vt9AiA7lBCIR410SRiubNL9FJmi9xN3i6Ym9uIb2xvE%2BUdCLir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMZSUUXGvMSvQ%2FlHsdKtwDDqLsLqMuvT1AlE3cfv%2BfRtKE%2B%2FfT5zhvcNd2E9vUFAK4ljF%2BpwGHzb2zbpML2mXU3kKItBXxc6shtcUnKNj0uC1cQeg4iWdTzFKq%2FauInDkdzkk7H6dsx3eN5edPRx8Sn9BC%2Bfl3A70ZtXvxqy%2F9KaIluBqn5W8I4So9EDj3jhuCvnxA8BhxgY6HjmOEKN12lUlq2FkUombLSoaKtxIn6Aq6dZLTk326BCvs%2BpiBvIgoMQFuiWrJJhsv700VjLSfRBsx1GA1piTIAxBgiLANKxIk0%2BGtf1%2BxLESO0E%2FCg6orqZ%2F01YfABxgo1elLNB7Wwbtqz6fuM3i%2BjgyIGSbfhGl9Iyynbo4IJT1vyVQ04MFxWqFgxR4sFSiGrNXh6wp9Fj08elQh%2Fl8sQ1EX0wojJ%2B99q9geQlWpY1g6xTsIY6ZbR3ejCNY58hcDNeNYkazmd0plveJ4LzlDH4COY3li8Bo38%2F79icYI04HLfrToIL3q59xzjMW0BlcOrYFMKacDYhKHyVU%2BLbxWSA8bfOcmBrxz4%2Bv7dvwQ1%2FNQOCNArOgw14vOGRUCpNw2AdNcmzoG147sHe9VopL%2BrKPUcDgcdeSOj7tKyVcf4uQQOfWnjON3cA5rBOgz9Nq5%2B1Ewv9mIxAY6pgG9stFZt0HV0JevAHYAYIfG7F5dJIJl0rRyabW%2F4IEuuKzwTfHXkVNuWCz4RF1dsBxvi6DZhdhTt17ux%2F2dYjrpbfB323IK0pGJIHjdXZ5r2cz1Mv2OM0ERdJVWz7IfYMW2RtyEiJfbLUtRiTx%2FJf5Zwq3Kle9CSK2tHBpOtz3k%2FX1XgiBUud3CJ%2B1GKrB%2BevOAODtkZ1z0FPDkgbaXF3v6VZYXwVj7&X-Amz-Signature=110eef40ca872cd173c0aece953dafc3086e12e4615fa8405eee251d307b0d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775L5IJ4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH820As6WbSWTc0tHoDSYWZ7lEPcfT7bdhG%2BXPSh6Vt9AiA7lBCIR410SRiubNL9FJmi9xN3i6Ym9uIb2xvE%2BUdCLir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMZSUUXGvMSvQ%2FlHsdKtwDDqLsLqMuvT1AlE3cfv%2BfRtKE%2B%2FfT5zhvcNd2E9vUFAK4ljF%2BpwGHzb2zbpML2mXU3kKItBXxc6shtcUnKNj0uC1cQeg4iWdTzFKq%2FauInDkdzkk7H6dsx3eN5edPRx8Sn9BC%2Bfl3A70ZtXvxqy%2F9KaIluBqn5W8I4So9EDj3jhuCvnxA8BhxgY6HjmOEKN12lUlq2FkUombLSoaKtxIn6Aq6dZLTk326BCvs%2BpiBvIgoMQFuiWrJJhsv700VjLSfRBsx1GA1piTIAxBgiLANKxIk0%2BGtf1%2BxLESO0E%2FCg6orqZ%2F01YfABxgo1elLNB7Wwbtqz6fuM3i%2BjgyIGSbfhGl9Iyynbo4IJT1vyVQ04MFxWqFgxR4sFSiGrNXh6wp9Fj08elQh%2Fl8sQ1EX0wojJ%2B99q9geQlWpY1g6xTsIY6ZbR3ejCNY58hcDNeNYkazmd0plveJ4LzlDH4COY3li8Bo38%2F79icYI04HLfrToIL3q59xzjMW0BlcOrYFMKacDYhKHyVU%2BLbxWSA8bfOcmBrxz4%2Bv7dvwQ1%2FNQOCNArOgw14vOGRUCpNw2AdNcmzoG147sHe9VopL%2BrKPUcDgcdeSOj7tKyVcf4uQQOfWnjON3cA5rBOgz9Nq5%2B1Ewv9mIxAY6pgG9stFZt0HV0JevAHYAYIfG7F5dJIJl0rRyabW%2F4IEuuKzwTfHXkVNuWCz4RF1dsBxvi6DZhdhTt17ux%2F2dYjrpbfB323IK0pGJIHjdXZ5r2cz1Mv2OM0ERdJVWz7IfYMW2RtyEiJfbLUtRiTx%2FJf5Zwq3Kle9CSK2tHBpOtz3k%2FX1XgiBUud3CJ%2B1GKrB%2BevOAODtkZ1z0FPDkgbaXF3v6VZYXwVj7&X-Amz-Signature=bd0f9839318634680e7c0860a3d4913d8edee57480d95ddb1308c3427b33ede7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775L5IJ4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH820As6WbSWTc0tHoDSYWZ7lEPcfT7bdhG%2BXPSh6Vt9AiA7lBCIR410SRiubNL9FJmi9xN3i6Ym9uIb2xvE%2BUdCLir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMZSUUXGvMSvQ%2FlHsdKtwDDqLsLqMuvT1AlE3cfv%2BfRtKE%2B%2FfT5zhvcNd2E9vUFAK4ljF%2BpwGHzb2zbpML2mXU3kKItBXxc6shtcUnKNj0uC1cQeg4iWdTzFKq%2FauInDkdzkk7H6dsx3eN5edPRx8Sn9BC%2Bfl3A70ZtXvxqy%2F9KaIluBqn5W8I4So9EDj3jhuCvnxA8BhxgY6HjmOEKN12lUlq2FkUombLSoaKtxIn6Aq6dZLTk326BCvs%2BpiBvIgoMQFuiWrJJhsv700VjLSfRBsx1GA1piTIAxBgiLANKxIk0%2BGtf1%2BxLESO0E%2FCg6orqZ%2F01YfABxgo1elLNB7Wwbtqz6fuM3i%2BjgyIGSbfhGl9Iyynbo4IJT1vyVQ04MFxWqFgxR4sFSiGrNXh6wp9Fj08elQh%2Fl8sQ1EX0wojJ%2B99q9geQlWpY1g6xTsIY6ZbR3ejCNY58hcDNeNYkazmd0plveJ4LzlDH4COY3li8Bo38%2F79icYI04HLfrToIL3q59xzjMW0BlcOrYFMKacDYhKHyVU%2BLbxWSA8bfOcmBrxz4%2Bv7dvwQ1%2FNQOCNArOgw14vOGRUCpNw2AdNcmzoG147sHe9VopL%2BrKPUcDgcdeSOj7tKyVcf4uQQOfWnjON3cA5rBOgz9Nq5%2B1Ewv9mIxAY6pgG9stFZt0HV0JevAHYAYIfG7F5dJIJl0rRyabW%2F4IEuuKzwTfHXkVNuWCz4RF1dsBxvi6DZhdhTt17ux%2F2dYjrpbfB323IK0pGJIHjdXZ5r2cz1Mv2OM0ERdJVWz7IfYMW2RtyEiJfbLUtRiTx%2FJf5Zwq3Kle9CSK2tHBpOtz3k%2FX1XgiBUud3CJ%2B1GKrB%2BevOAODtkZ1z0FPDkgbaXF3v6VZYXwVj7&X-Amz-Signature=c046667a57c6def31e69ccac4c63be494a305119a445e5e53f07ce1250d9ae0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775L5IJ4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH820As6WbSWTc0tHoDSYWZ7lEPcfT7bdhG%2BXPSh6Vt9AiA7lBCIR410SRiubNL9FJmi9xN3i6Ym9uIb2xvE%2BUdCLir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMZSUUXGvMSvQ%2FlHsdKtwDDqLsLqMuvT1AlE3cfv%2BfRtKE%2B%2FfT5zhvcNd2E9vUFAK4ljF%2BpwGHzb2zbpML2mXU3kKItBXxc6shtcUnKNj0uC1cQeg4iWdTzFKq%2FauInDkdzkk7H6dsx3eN5edPRx8Sn9BC%2Bfl3A70ZtXvxqy%2F9KaIluBqn5W8I4So9EDj3jhuCvnxA8BhxgY6HjmOEKN12lUlq2FkUombLSoaKtxIn6Aq6dZLTk326BCvs%2BpiBvIgoMQFuiWrJJhsv700VjLSfRBsx1GA1piTIAxBgiLANKxIk0%2BGtf1%2BxLESO0E%2FCg6orqZ%2F01YfABxgo1elLNB7Wwbtqz6fuM3i%2BjgyIGSbfhGl9Iyynbo4IJT1vyVQ04MFxWqFgxR4sFSiGrNXh6wp9Fj08elQh%2Fl8sQ1EX0wojJ%2B99q9geQlWpY1g6xTsIY6ZbR3ejCNY58hcDNeNYkazmd0plveJ4LzlDH4COY3li8Bo38%2F79icYI04HLfrToIL3q59xzjMW0BlcOrYFMKacDYhKHyVU%2BLbxWSA8bfOcmBrxz4%2Bv7dvwQ1%2FNQOCNArOgw14vOGRUCpNw2AdNcmzoG147sHe9VopL%2BrKPUcDgcdeSOj7tKyVcf4uQQOfWnjON3cA5rBOgz9Nq5%2B1Ewv9mIxAY6pgG9stFZt0HV0JevAHYAYIfG7F5dJIJl0rRyabW%2F4IEuuKzwTfHXkVNuWCz4RF1dsBxvi6DZhdhTt17ux%2F2dYjrpbfB323IK0pGJIHjdXZ5r2cz1Mv2OM0ERdJVWz7IfYMW2RtyEiJfbLUtRiTx%2FJf5Zwq3Kle9CSK2tHBpOtz3k%2FX1XgiBUud3CJ%2B1GKrB%2BevOAODtkZ1z0FPDkgbaXF3v6VZYXwVj7&X-Amz-Signature=78413ae749c426cc0d4a442d9e70c41ce975c652fcb4dfa8f8dfe757452bf1cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775L5IJ4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH820As6WbSWTc0tHoDSYWZ7lEPcfT7bdhG%2BXPSh6Vt9AiA7lBCIR410SRiubNL9FJmi9xN3i6Ym9uIb2xvE%2BUdCLir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMZSUUXGvMSvQ%2FlHsdKtwDDqLsLqMuvT1AlE3cfv%2BfRtKE%2B%2FfT5zhvcNd2E9vUFAK4ljF%2BpwGHzb2zbpML2mXU3kKItBXxc6shtcUnKNj0uC1cQeg4iWdTzFKq%2FauInDkdzkk7H6dsx3eN5edPRx8Sn9BC%2Bfl3A70ZtXvxqy%2F9KaIluBqn5W8I4So9EDj3jhuCvnxA8BhxgY6HjmOEKN12lUlq2FkUombLSoaKtxIn6Aq6dZLTk326BCvs%2BpiBvIgoMQFuiWrJJhsv700VjLSfRBsx1GA1piTIAxBgiLANKxIk0%2BGtf1%2BxLESO0E%2FCg6orqZ%2F01YfABxgo1elLNB7Wwbtqz6fuM3i%2BjgyIGSbfhGl9Iyynbo4IJT1vyVQ04MFxWqFgxR4sFSiGrNXh6wp9Fj08elQh%2Fl8sQ1EX0wojJ%2B99q9geQlWpY1g6xTsIY6ZbR3ejCNY58hcDNeNYkazmd0plveJ4LzlDH4COY3li8Bo38%2F79icYI04HLfrToIL3q59xzjMW0BlcOrYFMKacDYhKHyVU%2BLbxWSA8bfOcmBrxz4%2Bv7dvwQ1%2FNQOCNArOgw14vOGRUCpNw2AdNcmzoG147sHe9VopL%2BrKPUcDgcdeSOj7tKyVcf4uQQOfWnjON3cA5rBOgz9Nq5%2B1Ewv9mIxAY6pgG9stFZt0HV0JevAHYAYIfG7F5dJIJl0rRyabW%2F4IEuuKzwTfHXkVNuWCz4RF1dsBxvi6DZhdhTt17ux%2F2dYjrpbfB323IK0pGJIHjdXZ5r2cz1Mv2OM0ERdJVWz7IfYMW2RtyEiJfbLUtRiTx%2FJf5Zwq3Kle9CSK2tHBpOtz3k%2FX1XgiBUud3CJ%2B1GKrB%2BevOAODtkZ1z0FPDkgbaXF3v6VZYXwVj7&X-Amz-Signature=85757ada31919c86bbf5d28f047cc73ee9e9d642a5dbaffd5012582391ad0c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466775L5IJ4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIH820As6WbSWTc0tHoDSYWZ7lEPcfT7bdhG%2BXPSh6Vt9AiA7lBCIR410SRiubNL9FJmi9xN3i6Ym9uIb2xvE%2BUdCLir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMZSUUXGvMSvQ%2FlHsdKtwDDqLsLqMuvT1AlE3cfv%2BfRtKE%2B%2FfT5zhvcNd2E9vUFAK4ljF%2BpwGHzb2zbpML2mXU3kKItBXxc6shtcUnKNj0uC1cQeg4iWdTzFKq%2FauInDkdzkk7H6dsx3eN5edPRx8Sn9BC%2Bfl3A70ZtXvxqy%2F9KaIluBqn5W8I4So9EDj3jhuCvnxA8BhxgY6HjmOEKN12lUlq2FkUombLSoaKtxIn6Aq6dZLTk326BCvs%2BpiBvIgoMQFuiWrJJhsv700VjLSfRBsx1GA1piTIAxBgiLANKxIk0%2BGtf1%2BxLESO0E%2FCg6orqZ%2F01YfABxgo1elLNB7Wwbtqz6fuM3i%2BjgyIGSbfhGl9Iyynbo4IJT1vyVQ04MFxWqFgxR4sFSiGrNXh6wp9Fj08elQh%2Fl8sQ1EX0wojJ%2B99q9geQlWpY1g6xTsIY6ZbR3ejCNY58hcDNeNYkazmd0plveJ4LzlDH4COY3li8Bo38%2F79icYI04HLfrToIL3q59xzjMW0BlcOrYFMKacDYhKHyVU%2BLbxWSA8bfOcmBrxz4%2Bv7dvwQ1%2FNQOCNArOgw14vOGRUCpNw2AdNcmzoG147sHe9VopL%2BrKPUcDgcdeSOj7tKyVcf4uQQOfWnjON3cA5rBOgz9Nq5%2B1Ewv9mIxAY6pgG9stFZt0HV0JevAHYAYIfG7F5dJIJl0rRyabW%2F4IEuuKzwTfHXkVNuWCz4RF1dsBxvi6DZhdhTt17ux%2F2dYjrpbfB323IK0pGJIHjdXZ5r2cz1Mv2OM0ERdJVWz7IfYMW2RtyEiJfbLUtRiTx%2FJf5Zwq3Kle9CSK2tHBpOtz3k%2FX1XgiBUud3CJ%2B1GKrB%2BevOAODtkZ1z0FPDkgbaXF3v6VZYXwVj7&X-Amz-Signature=68ad3be1452a5a575247918bb1980a0fa871e0e296b23a361c5cf56eb4562b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
