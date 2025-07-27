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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMVY4L3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICUbXCD%2FU0VRyCNBucjxdP9qHMEk6%2BacMHbM%2BnADX3jzAiEAwq4vvino97foodb1aCls41MsC2Pfg6IcglfwzZ0Mo20q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIq8orssjaxxrtS81ircAzfqoEPKPsbQFLPoR2A2WHSz8dBznZnyh7775EiKFkkpsNaimMa7igiL5wqrsThgbdCzeQZlYrNp%2FRLcyQFXYmDriX2fzOqxNZ3pru999ghddjgcd7VjjKEZq9d4PHnEq4HUcs%2Fm04e8Qv4hYcRmiebfDYfELqKjgU8n%2BLXm%2B2qnedXV8J7WNGbsLaQBuD%2FrlisORjfL%2B%2BDd2vWzjWlg6NIF5WxClftAKMLAoznVZ0vAYL57%2FUtSyaP1AVBKo0%2BFgKb9lOio%2FtkOkLuDXyQEmJR9EjxILIarYY2je0tcUGzE%2Ff39UErldIWllxuDQtLzOCeM0%2BPyV%2By%2FT2npuGVcaQU%2BfFsQD0%2BnnkVif3GegJxurEwxP6ApuK2XAx3KZzNzr8hD%2FdmqStF3HchR2ogDZYjeSLhg0CiwHxSo4YLpJlXwTkSXef3HhurxiAj8Qe5uLCC6TgQNgjT%2BQFcZA469DBgEX7ilGITfBASxcf0c86cf09%2FLBcxmiBAaip7iOgbTYuSU2p51BlGZ5RTSKfqHeMvHpZsLIooNBdh0ieUQWLhxRoQ2Uszq0g7TYinRJpusnOTetyiG%2BSUApAa98I2f43Nb8Ue7VzvgQcvS982wUc9DkFm87kjnT9ZOsE8WMLj9mMQGOqUBV7ST4HbJWF0pT6xT3VxRGoQY2pz5nMK65Y8RUCVwN3wKN6eHM6j8BiD%2Fi6P8tqGRxe%2BTktOGVoFKWVQ9qwKZszlQ%2FJ1S4pko7BIl0IJSsBKmJ9gBOHf1NT32wJAIZ29T9J1qpkD422lPELWc9jygngK6kXJpBIaEFmMhgYiuwohdHTw1PSwMY41He%2FsM%2FV5yTadxMfc9fhzFVLXZaMwGPQWr%2BDWl&X-Amz-Signature=5fceb04d56520de1ee33678f5d6781dc9b2d08104910f34e98ae31821ae27886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMVY4L3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICUbXCD%2FU0VRyCNBucjxdP9qHMEk6%2BacMHbM%2BnADX3jzAiEAwq4vvino97foodb1aCls41MsC2Pfg6IcglfwzZ0Mo20q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIq8orssjaxxrtS81ircAzfqoEPKPsbQFLPoR2A2WHSz8dBznZnyh7775EiKFkkpsNaimMa7igiL5wqrsThgbdCzeQZlYrNp%2FRLcyQFXYmDriX2fzOqxNZ3pru999ghddjgcd7VjjKEZq9d4PHnEq4HUcs%2Fm04e8Qv4hYcRmiebfDYfELqKjgU8n%2BLXm%2B2qnedXV8J7WNGbsLaQBuD%2FrlisORjfL%2B%2BDd2vWzjWlg6NIF5WxClftAKMLAoznVZ0vAYL57%2FUtSyaP1AVBKo0%2BFgKb9lOio%2FtkOkLuDXyQEmJR9EjxILIarYY2je0tcUGzE%2Ff39UErldIWllxuDQtLzOCeM0%2BPyV%2By%2FT2npuGVcaQU%2BfFsQD0%2BnnkVif3GegJxurEwxP6ApuK2XAx3KZzNzr8hD%2FdmqStF3HchR2ogDZYjeSLhg0CiwHxSo4YLpJlXwTkSXef3HhurxiAj8Qe5uLCC6TgQNgjT%2BQFcZA469DBgEX7ilGITfBASxcf0c86cf09%2FLBcxmiBAaip7iOgbTYuSU2p51BlGZ5RTSKfqHeMvHpZsLIooNBdh0ieUQWLhxRoQ2Uszq0g7TYinRJpusnOTetyiG%2BSUApAa98I2f43Nb8Ue7VzvgQcvS982wUc9DkFm87kjnT9ZOsE8WMLj9mMQGOqUBV7ST4HbJWF0pT6xT3VxRGoQY2pz5nMK65Y8RUCVwN3wKN6eHM6j8BiD%2Fi6P8tqGRxe%2BTktOGVoFKWVQ9qwKZszlQ%2FJ1S4pko7BIl0IJSsBKmJ9gBOHf1NT32wJAIZ29T9J1qpkD422lPELWc9jygngK6kXJpBIaEFmMhgYiuwohdHTw1PSwMY41He%2FsM%2FV5yTadxMfc9fhzFVLXZaMwGPQWr%2BDWl&X-Amz-Signature=7efc42e7a74db93a7c8dc91575761113ebc723fcfa5d6ea9d25549d5feb3e172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMVY4L3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICUbXCD%2FU0VRyCNBucjxdP9qHMEk6%2BacMHbM%2BnADX3jzAiEAwq4vvino97foodb1aCls41MsC2Pfg6IcglfwzZ0Mo20q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIq8orssjaxxrtS81ircAzfqoEPKPsbQFLPoR2A2WHSz8dBznZnyh7775EiKFkkpsNaimMa7igiL5wqrsThgbdCzeQZlYrNp%2FRLcyQFXYmDriX2fzOqxNZ3pru999ghddjgcd7VjjKEZq9d4PHnEq4HUcs%2Fm04e8Qv4hYcRmiebfDYfELqKjgU8n%2BLXm%2B2qnedXV8J7WNGbsLaQBuD%2FrlisORjfL%2B%2BDd2vWzjWlg6NIF5WxClftAKMLAoznVZ0vAYL57%2FUtSyaP1AVBKo0%2BFgKb9lOio%2FtkOkLuDXyQEmJR9EjxILIarYY2je0tcUGzE%2Ff39UErldIWllxuDQtLzOCeM0%2BPyV%2By%2FT2npuGVcaQU%2BfFsQD0%2BnnkVif3GegJxurEwxP6ApuK2XAx3KZzNzr8hD%2FdmqStF3HchR2ogDZYjeSLhg0CiwHxSo4YLpJlXwTkSXef3HhurxiAj8Qe5uLCC6TgQNgjT%2BQFcZA469DBgEX7ilGITfBASxcf0c86cf09%2FLBcxmiBAaip7iOgbTYuSU2p51BlGZ5RTSKfqHeMvHpZsLIooNBdh0ieUQWLhxRoQ2Uszq0g7TYinRJpusnOTetyiG%2BSUApAa98I2f43Nb8Ue7VzvgQcvS982wUc9DkFm87kjnT9ZOsE8WMLj9mMQGOqUBV7ST4HbJWF0pT6xT3VxRGoQY2pz5nMK65Y8RUCVwN3wKN6eHM6j8BiD%2Fi6P8tqGRxe%2BTktOGVoFKWVQ9qwKZszlQ%2FJ1S4pko7BIl0IJSsBKmJ9gBOHf1NT32wJAIZ29T9J1qpkD422lPELWc9jygngK6kXJpBIaEFmMhgYiuwohdHTw1PSwMY41He%2FsM%2FV5yTadxMfc9fhzFVLXZaMwGPQWr%2BDWl&X-Amz-Signature=c6ddd9a6ddfda3cd08cde4347bcb055c47d6a7ad771bbaebb6e22b0e73412cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMVY4L3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICUbXCD%2FU0VRyCNBucjxdP9qHMEk6%2BacMHbM%2BnADX3jzAiEAwq4vvino97foodb1aCls41MsC2Pfg6IcglfwzZ0Mo20q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIq8orssjaxxrtS81ircAzfqoEPKPsbQFLPoR2A2WHSz8dBznZnyh7775EiKFkkpsNaimMa7igiL5wqrsThgbdCzeQZlYrNp%2FRLcyQFXYmDriX2fzOqxNZ3pru999ghddjgcd7VjjKEZq9d4PHnEq4HUcs%2Fm04e8Qv4hYcRmiebfDYfELqKjgU8n%2BLXm%2B2qnedXV8J7WNGbsLaQBuD%2FrlisORjfL%2B%2BDd2vWzjWlg6NIF5WxClftAKMLAoznVZ0vAYL57%2FUtSyaP1AVBKo0%2BFgKb9lOio%2FtkOkLuDXyQEmJR9EjxILIarYY2je0tcUGzE%2Ff39UErldIWllxuDQtLzOCeM0%2BPyV%2By%2FT2npuGVcaQU%2BfFsQD0%2BnnkVif3GegJxurEwxP6ApuK2XAx3KZzNzr8hD%2FdmqStF3HchR2ogDZYjeSLhg0CiwHxSo4YLpJlXwTkSXef3HhurxiAj8Qe5uLCC6TgQNgjT%2BQFcZA469DBgEX7ilGITfBASxcf0c86cf09%2FLBcxmiBAaip7iOgbTYuSU2p51BlGZ5RTSKfqHeMvHpZsLIooNBdh0ieUQWLhxRoQ2Uszq0g7TYinRJpusnOTetyiG%2BSUApAa98I2f43Nb8Ue7VzvgQcvS982wUc9DkFm87kjnT9ZOsE8WMLj9mMQGOqUBV7ST4HbJWF0pT6xT3VxRGoQY2pz5nMK65Y8RUCVwN3wKN6eHM6j8BiD%2Fi6P8tqGRxe%2BTktOGVoFKWVQ9qwKZszlQ%2FJ1S4pko7BIl0IJSsBKmJ9gBOHf1NT32wJAIZ29T9J1qpkD422lPELWc9jygngK6kXJpBIaEFmMhgYiuwohdHTw1PSwMY41He%2FsM%2FV5yTadxMfc9fhzFVLXZaMwGPQWr%2BDWl&X-Amz-Signature=da053d8da3272560fc49d4a8cc2c42c53f027894eff8797d7b4189a0751202c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMVY4L3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICUbXCD%2FU0VRyCNBucjxdP9qHMEk6%2BacMHbM%2BnADX3jzAiEAwq4vvino97foodb1aCls41MsC2Pfg6IcglfwzZ0Mo20q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIq8orssjaxxrtS81ircAzfqoEPKPsbQFLPoR2A2WHSz8dBznZnyh7775EiKFkkpsNaimMa7igiL5wqrsThgbdCzeQZlYrNp%2FRLcyQFXYmDriX2fzOqxNZ3pru999ghddjgcd7VjjKEZq9d4PHnEq4HUcs%2Fm04e8Qv4hYcRmiebfDYfELqKjgU8n%2BLXm%2B2qnedXV8J7WNGbsLaQBuD%2FrlisORjfL%2B%2BDd2vWzjWlg6NIF5WxClftAKMLAoznVZ0vAYL57%2FUtSyaP1AVBKo0%2BFgKb9lOio%2FtkOkLuDXyQEmJR9EjxILIarYY2je0tcUGzE%2Ff39UErldIWllxuDQtLzOCeM0%2BPyV%2By%2FT2npuGVcaQU%2BfFsQD0%2BnnkVif3GegJxurEwxP6ApuK2XAx3KZzNzr8hD%2FdmqStF3HchR2ogDZYjeSLhg0CiwHxSo4YLpJlXwTkSXef3HhurxiAj8Qe5uLCC6TgQNgjT%2BQFcZA469DBgEX7ilGITfBASxcf0c86cf09%2FLBcxmiBAaip7iOgbTYuSU2p51BlGZ5RTSKfqHeMvHpZsLIooNBdh0ieUQWLhxRoQ2Uszq0g7TYinRJpusnOTetyiG%2BSUApAa98I2f43Nb8Ue7VzvgQcvS982wUc9DkFm87kjnT9ZOsE8WMLj9mMQGOqUBV7ST4HbJWF0pT6xT3VxRGoQY2pz5nMK65Y8RUCVwN3wKN6eHM6j8BiD%2Fi6P8tqGRxe%2BTktOGVoFKWVQ9qwKZszlQ%2FJ1S4pko7BIl0IJSsBKmJ9gBOHf1NT32wJAIZ29T9J1qpkD422lPELWc9jygngK6kXJpBIaEFmMhgYiuwohdHTw1PSwMY41He%2FsM%2FV5yTadxMfc9fhzFVLXZaMwGPQWr%2BDWl&X-Amz-Signature=7051c61f8411bd74d05949096ae4427e4c1bc0b9588aa2a451f760b2d3f53c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSMVY4L3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCICUbXCD%2FU0VRyCNBucjxdP9qHMEk6%2BacMHbM%2BnADX3jzAiEAwq4vvino97foodb1aCls41MsC2Pfg6IcglfwzZ0Mo20q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIq8orssjaxxrtS81ircAzfqoEPKPsbQFLPoR2A2WHSz8dBznZnyh7775EiKFkkpsNaimMa7igiL5wqrsThgbdCzeQZlYrNp%2FRLcyQFXYmDriX2fzOqxNZ3pru999ghddjgcd7VjjKEZq9d4PHnEq4HUcs%2Fm04e8Qv4hYcRmiebfDYfELqKjgU8n%2BLXm%2B2qnedXV8J7WNGbsLaQBuD%2FrlisORjfL%2B%2BDd2vWzjWlg6NIF5WxClftAKMLAoznVZ0vAYL57%2FUtSyaP1AVBKo0%2BFgKb9lOio%2FtkOkLuDXyQEmJR9EjxILIarYY2je0tcUGzE%2Ff39UErldIWllxuDQtLzOCeM0%2BPyV%2By%2FT2npuGVcaQU%2BfFsQD0%2BnnkVif3GegJxurEwxP6ApuK2XAx3KZzNzr8hD%2FdmqStF3HchR2ogDZYjeSLhg0CiwHxSo4YLpJlXwTkSXef3HhurxiAj8Qe5uLCC6TgQNgjT%2BQFcZA469DBgEX7ilGITfBASxcf0c86cf09%2FLBcxmiBAaip7iOgbTYuSU2p51BlGZ5RTSKfqHeMvHpZsLIooNBdh0ieUQWLhxRoQ2Uszq0g7TYinRJpusnOTetyiG%2BSUApAa98I2f43Nb8Ue7VzvgQcvS982wUc9DkFm87kjnT9ZOsE8WMLj9mMQGOqUBV7ST4HbJWF0pT6xT3VxRGoQY2pz5nMK65Y8RUCVwN3wKN6eHM6j8BiD%2Fi6P8tqGRxe%2BTktOGVoFKWVQ9qwKZszlQ%2FJ1S4pko7BIl0IJSsBKmJ9gBOHf1NT32wJAIZ29T9J1qpkD422lPELWc9jygngK6kXJpBIaEFmMhgYiuwohdHTw1PSwMY41He%2FsM%2FV5yTadxMfc9fhzFVLXZaMwGPQWr%2BDWl&X-Amz-Signature=5119c5ddcb7b8b86f0d2a20a0842d4ce91b0fa972627b2548c185e21c63c0bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
