---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEQ72GV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD7ccJdNdkcSLfT6wKHxXLDc0AnbqsO5GzHueZKMVnrtgIgFT7WMYUnXMKV0kbbjCSC3JPdjE%2FgWiHalNMUTpIqp4MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPJqCq8OkoEuQTOSrcA2TSRAB1dC1UDuX%2B6o6lNy%2F9Kh2tsMDbluSjWGbkFh5jJx1lzyLJUEZY7IFREnquLF1slUKrHnCAZgPut5iTtqSBlO80%2BM4YzYoZ2nLGYBFAQbyDWEFcy12agWA6SU82xY0FN7jmIiGsKDRqz5X3Re9tAtQyd0wnq7Cj4va%2B5Jw%2FATyeNUyys1cQw2RsJmEHpt1bpJMhs08M0Oc%2BvGFc89fjIUNj6e8mPT878Zq6ToVMkTp4RIzyl%2F3HX8EYz1kVzSiN8dIt6Fxkh%2B9XPUEFnxcfWlNkKuDEeqriD5shFGSNtwBfUtXETawwV7uGx2QRKLmLysKEor4eSx9v2oQ%2BcD9FdOGqCpLRUxTvMzCWKYZnfUAvYL1C4V%2FYNgy9UdZFx18%2FFjic9TtJaRhEV4bOk9I%2FeKjKpDAGsUee8dHwxC5cO4or9KKwGH5Es8Ay55JT0dcdsD6Hy0TUZTYU6Pc2duZWWFFjxIXYnOk5WjTHun5yRJhbGIwnPd4rIonXBrizT1IY34B8JkRdurjz0i4f7wq8He1%2FcHABzPP0oHZo5jKUvN5R0XPPBKcYoxlLAdM1Rtr%2FzMzoBawXSTkGyxw6jjPgOyZj6BAK7iJLBqQmFnzXnSk70kfdVs7KBz1dMKLE28QGOqUB74VoblHHE5f8FW%2FtJ8AyqUnUNxzGLyc3bY2eJkIWfOpdcGvX34xvr6xk1GWdUkqUEAULQ51vyv52KtB6i%2B7Npw73ZlqgZ9sIDO86NwR81f88WNJQ3rycYDq207jpJjkDxgTDsnohpgr5ROLQXbAPVAXJCsFo997sV%2F0rk4Rdb6BgMAjGrB1eSe98vcmVUTx4088%2BKLmS8S84%2BRbSHEWpM3ZIxVZj&X-Amz-Signature=449c2f6109d8879208cd324cef24f474c2e591502b5b6bd8579a03a1483f8e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

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

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEQ72GV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD7ccJdNdkcSLfT6wKHxXLDc0AnbqsO5GzHueZKMVnrtgIgFT7WMYUnXMKV0kbbjCSC3JPdjE%2FgWiHalNMUTpIqp4MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPJqCq8OkoEuQTOSrcA2TSRAB1dC1UDuX%2B6o6lNy%2F9Kh2tsMDbluSjWGbkFh5jJx1lzyLJUEZY7IFREnquLF1slUKrHnCAZgPut5iTtqSBlO80%2BM4YzYoZ2nLGYBFAQbyDWEFcy12agWA6SU82xY0FN7jmIiGsKDRqz5X3Re9tAtQyd0wnq7Cj4va%2B5Jw%2FATyeNUyys1cQw2RsJmEHpt1bpJMhs08M0Oc%2BvGFc89fjIUNj6e8mPT878Zq6ToVMkTp4RIzyl%2F3HX8EYz1kVzSiN8dIt6Fxkh%2B9XPUEFnxcfWlNkKuDEeqriD5shFGSNtwBfUtXETawwV7uGx2QRKLmLysKEor4eSx9v2oQ%2BcD9FdOGqCpLRUxTvMzCWKYZnfUAvYL1C4V%2FYNgy9UdZFx18%2FFjic9TtJaRhEV4bOk9I%2FeKjKpDAGsUee8dHwxC5cO4or9KKwGH5Es8Ay55JT0dcdsD6Hy0TUZTYU6Pc2duZWWFFjxIXYnOk5WjTHun5yRJhbGIwnPd4rIonXBrizT1IY34B8JkRdurjz0i4f7wq8He1%2FcHABzPP0oHZo5jKUvN5R0XPPBKcYoxlLAdM1Rtr%2FzMzoBawXSTkGyxw6jjPgOyZj6BAK7iJLBqQmFnzXnSk70kfdVs7KBz1dMKLE28QGOqUB74VoblHHE5f8FW%2FtJ8AyqUnUNxzGLyc3bY2eJkIWfOpdcGvX34xvr6xk1GWdUkqUEAULQ51vyv52KtB6i%2B7Npw73ZlqgZ9sIDO86NwR81f88WNJQ3rycYDq207jpJjkDxgTDsnohpgr5ROLQXbAPVAXJCsFo997sV%2F0rk4Rdb6BgMAjGrB1eSe98vcmVUTx4088%2BKLmS8S84%2BRbSHEWpM3ZIxVZj&X-Amz-Signature=f31e062b306fefb209633cd198d0edbf3d67169feb343c7746046514f0f9bc73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEQ72GV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD7ccJdNdkcSLfT6wKHxXLDc0AnbqsO5GzHueZKMVnrtgIgFT7WMYUnXMKV0kbbjCSC3JPdjE%2FgWiHalNMUTpIqp4MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPJqCq8OkoEuQTOSrcA2TSRAB1dC1UDuX%2B6o6lNy%2F9Kh2tsMDbluSjWGbkFh5jJx1lzyLJUEZY7IFREnquLF1slUKrHnCAZgPut5iTtqSBlO80%2BM4YzYoZ2nLGYBFAQbyDWEFcy12agWA6SU82xY0FN7jmIiGsKDRqz5X3Re9tAtQyd0wnq7Cj4va%2B5Jw%2FATyeNUyys1cQw2RsJmEHpt1bpJMhs08M0Oc%2BvGFc89fjIUNj6e8mPT878Zq6ToVMkTp4RIzyl%2F3HX8EYz1kVzSiN8dIt6Fxkh%2B9XPUEFnxcfWlNkKuDEeqriD5shFGSNtwBfUtXETawwV7uGx2QRKLmLysKEor4eSx9v2oQ%2BcD9FdOGqCpLRUxTvMzCWKYZnfUAvYL1C4V%2FYNgy9UdZFx18%2FFjic9TtJaRhEV4bOk9I%2FeKjKpDAGsUee8dHwxC5cO4or9KKwGH5Es8Ay55JT0dcdsD6Hy0TUZTYU6Pc2duZWWFFjxIXYnOk5WjTHun5yRJhbGIwnPd4rIonXBrizT1IY34B8JkRdurjz0i4f7wq8He1%2FcHABzPP0oHZo5jKUvN5R0XPPBKcYoxlLAdM1Rtr%2FzMzoBawXSTkGyxw6jjPgOyZj6BAK7iJLBqQmFnzXnSk70kfdVs7KBz1dMKLE28QGOqUB74VoblHHE5f8FW%2FtJ8AyqUnUNxzGLyc3bY2eJkIWfOpdcGvX34xvr6xk1GWdUkqUEAULQ51vyv52KtB6i%2B7Npw73ZlqgZ9sIDO86NwR81f88WNJQ3rycYDq207jpJjkDxgTDsnohpgr5ROLQXbAPVAXJCsFo997sV%2F0rk4Rdb6BgMAjGrB1eSe98vcmVUTx4088%2BKLmS8S84%2BRbSHEWpM3ZIxVZj&X-Amz-Signature=800c0b1193ab8c31f1a7a8c48d232721c321613a5be4c3fcb7608c6f830d8218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEQ72GV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD7ccJdNdkcSLfT6wKHxXLDc0AnbqsO5GzHueZKMVnrtgIgFT7WMYUnXMKV0kbbjCSC3JPdjE%2FgWiHalNMUTpIqp4MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPJqCq8OkoEuQTOSrcA2TSRAB1dC1UDuX%2B6o6lNy%2F9Kh2tsMDbluSjWGbkFh5jJx1lzyLJUEZY7IFREnquLF1slUKrHnCAZgPut5iTtqSBlO80%2BM4YzYoZ2nLGYBFAQbyDWEFcy12agWA6SU82xY0FN7jmIiGsKDRqz5X3Re9tAtQyd0wnq7Cj4va%2B5Jw%2FATyeNUyys1cQw2RsJmEHpt1bpJMhs08M0Oc%2BvGFc89fjIUNj6e8mPT878Zq6ToVMkTp4RIzyl%2F3HX8EYz1kVzSiN8dIt6Fxkh%2B9XPUEFnxcfWlNkKuDEeqriD5shFGSNtwBfUtXETawwV7uGx2QRKLmLysKEor4eSx9v2oQ%2BcD9FdOGqCpLRUxTvMzCWKYZnfUAvYL1C4V%2FYNgy9UdZFx18%2FFjic9TtJaRhEV4bOk9I%2FeKjKpDAGsUee8dHwxC5cO4or9KKwGH5Es8Ay55JT0dcdsD6Hy0TUZTYU6Pc2duZWWFFjxIXYnOk5WjTHun5yRJhbGIwnPd4rIonXBrizT1IY34B8JkRdurjz0i4f7wq8He1%2FcHABzPP0oHZo5jKUvN5R0XPPBKcYoxlLAdM1Rtr%2FzMzoBawXSTkGyxw6jjPgOyZj6BAK7iJLBqQmFnzXnSk70kfdVs7KBz1dMKLE28QGOqUB74VoblHHE5f8FW%2FtJ8AyqUnUNxzGLyc3bY2eJkIWfOpdcGvX34xvr6xk1GWdUkqUEAULQ51vyv52KtB6i%2B7Npw73ZlqgZ9sIDO86NwR81f88WNJQ3rycYDq207jpJjkDxgTDsnohpgr5ROLQXbAPVAXJCsFo997sV%2F0rk4Rdb6BgMAjGrB1eSe98vcmVUTx4088%2BKLmS8S84%2BRbSHEWpM3ZIxVZj&X-Amz-Signature=5c28d1b0b54b480d1743da03ccf190dcdb42c0f19c915d242541c4203df505e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEQ72GV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD7ccJdNdkcSLfT6wKHxXLDc0AnbqsO5GzHueZKMVnrtgIgFT7WMYUnXMKV0kbbjCSC3JPdjE%2FgWiHalNMUTpIqp4MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPJqCq8OkoEuQTOSrcA2TSRAB1dC1UDuX%2B6o6lNy%2F9Kh2tsMDbluSjWGbkFh5jJx1lzyLJUEZY7IFREnquLF1slUKrHnCAZgPut5iTtqSBlO80%2BM4YzYoZ2nLGYBFAQbyDWEFcy12agWA6SU82xY0FN7jmIiGsKDRqz5X3Re9tAtQyd0wnq7Cj4va%2B5Jw%2FATyeNUyys1cQw2RsJmEHpt1bpJMhs08M0Oc%2BvGFc89fjIUNj6e8mPT878Zq6ToVMkTp4RIzyl%2F3HX8EYz1kVzSiN8dIt6Fxkh%2B9XPUEFnxcfWlNkKuDEeqriD5shFGSNtwBfUtXETawwV7uGx2QRKLmLysKEor4eSx9v2oQ%2BcD9FdOGqCpLRUxTvMzCWKYZnfUAvYL1C4V%2FYNgy9UdZFx18%2FFjic9TtJaRhEV4bOk9I%2FeKjKpDAGsUee8dHwxC5cO4or9KKwGH5Es8Ay55JT0dcdsD6Hy0TUZTYU6Pc2duZWWFFjxIXYnOk5WjTHun5yRJhbGIwnPd4rIonXBrizT1IY34B8JkRdurjz0i4f7wq8He1%2FcHABzPP0oHZo5jKUvN5R0XPPBKcYoxlLAdM1Rtr%2FzMzoBawXSTkGyxw6jjPgOyZj6BAK7iJLBqQmFnzXnSk70kfdVs7KBz1dMKLE28QGOqUB74VoblHHE5f8FW%2FtJ8AyqUnUNxzGLyc3bY2eJkIWfOpdcGvX34xvr6xk1GWdUkqUEAULQ51vyv52KtB6i%2B7Npw73ZlqgZ9sIDO86NwR81f88WNJQ3rycYDq207jpJjkDxgTDsnohpgr5ROLQXbAPVAXJCsFo997sV%2F0rk4Rdb6BgMAjGrB1eSe98vcmVUTx4088%2BKLmS8S84%2BRbSHEWpM3ZIxVZj&X-Amz-Signature=25a3bbd95cf021d5087eadf23125799d1470ee2e304933621a451e28bbee24c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEQ72GV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD7ccJdNdkcSLfT6wKHxXLDc0AnbqsO5GzHueZKMVnrtgIgFT7WMYUnXMKV0kbbjCSC3JPdjE%2FgWiHalNMUTpIqp4MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPJqCq8OkoEuQTOSrcA2TSRAB1dC1UDuX%2B6o6lNy%2F9Kh2tsMDbluSjWGbkFh5jJx1lzyLJUEZY7IFREnquLF1slUKrHnCAZgPut5iTtqSBlO80%2BM4YzYoZ2nLGYBFAQbyDWEFcy12agWA6SU82xY0FN7jmIiGsKDRqz5X3Re9tAtQyd0wnq7Cj4va%2B5Jw%2FATyeNUyys1cQw2RsJmEHpt1bpJMhs08M0Oc%2BvGFc89fjIUNj6e8mPT878Zq6ToVMkTp4RIzyl%2F3HX8EYz1kVzSiN8dIt6Fxkh%2B9XPUEFnxcfWlNkKuDEeqriD5shFGSNtwBfUtXETawwV7uGx2QRKLmLysKEor4eSx9v2oQ%2BcD9FdOGqCpLRUxTvMzCWKYZnfUAvYL1C4V%2FYNgy9UdZFx18%2FFjic9TtJaRhEV4bOk9I%2FeKjKpDAGsUee8dHwxC5cO4or9KKwGH5Es8Ay55JT0dcdsD6Hy0TUZTYU6Pc2duZWWFFjxIXYnOk5WjTHun5yRJhbGIwnPd4rIonXBrizT1IY34B8JkRdurjz0i4f7wq8He1%2FcHABzPP0oHZo5jKUvN5R0XPPBKcYoxlLAdM1Rtr%2FzMzoBawXSTkGyxw6jjPgOyZj6BAK7iJLBqQmFnzXnSk70kfdVs7KBz1dMKLE28QGOqUB74VoblHHE5f8FW%2FtJ8AyqUnUNxzGLyc3bY2eJkIWfOpdcGvX34xvr6xk1GWdUkqUEAULQ51vyv52KtB6i%2B7Npw73ZlqgZ9sIDO86NwR81f88WNJQ3rycYDq207jpJjkDxgTDsnohpgr5ROLQXbAPVAXJCsFo997sV%2F0rk4Rdb6BgMAjGrB1eSe98vcmVUTx4088%2BKLmS8S84%2BRbSHEWpM3ZIxVZj&X-Amz-Signature=9952aa623bb7f695ed612c9208c7705c06f2fc124b3833f441b277561382aa28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEQ72GV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD7ccJdNdkcSLfT6wKHxXLDc0AnbqsO5GzHueZKMVnrtgIgFT7WMYUnXMKV0kbbjCSC3JPdjE%2FgWiHalNMUTpIqp4MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPJqCq8OkoEuQTOSrcA2TSRAB1dC1UDuX%2B6o6lNy%2F9Kh2tsMDbluSjWGbkFh5jJx1lzyLJUEZY7IFREnquLF1slUKrHnCAZgPut5iTtqSBlO80%2BM4YzYoZ2nLGYBFAQbyDWEFcy12agWA6SU82xY0FN7jmIiGsKDRqz5X3Re9tAtQyd0wnq7Cj4va%2B5Jw%2FATyeNUyys1cQw2RsJmEHpt1bpJMhs08M0Oc%2BvGFc89fjIUNj6e8mPT878Zq6ToVMkTp4RIzyl%2F3HX8EYz1kVzSiN8dIt6Fxkh%2B9XPUEFnxcfWlNkKuDEeqriD5shFGSNtwBfUtXETawwV7uGx2QRKLmLysKEor4eSx9v2oQ%2BcD9FdOGqCpLRUxTvMzCWKYZnfUAvYL1C4V%2FYNgy9UdZFx18%2FFjic9TtJaRhEV4bOk9I%2FeKjKpDAGsUee8dHwxC5cO4or9KKwGH5Es8Ay55JT0dcdsD6Hy0TUZTYU6Pc2duZWWFFjxIXYnOk5WjTHun5yRJhbGIwnPd4rIonXBrizT1IY34B8JkRdurjz0i4f7wq8He1%2FcHABzPP0oHZo5jKUvN5R0XPPBKcYoxlLAdM1Rtr%2FzMzoBawXSTkGyxw6jjPgOyZj6BAK7iJLBqQmFnzXnSk70kfdVs7KBz1dMKLE28QGOqUB74VoblHHE5f8FW%2FtJ8AyqUnUNxzGLyc3bY2eJkIWfOpdcGvX34xvr6xk1GWdUkqUEAULQ51vyv52KtB6i%2B7Npw73ZlqgZ9sIDO86NwR81f88WNJQ3rycYDq207jpJjkDxgTDsnohpgr5ROLQXbAPVAXJCsFo997sV%2F0rk4Rdb6BgMAjGrB1eSe98vcmVUTx4088%2BKLmS8S84%2BRbSHEWpM3ZIxVZj&X-Amz-Signature=0980a463bbfe7cefecb394f2929ecc27776353f769b6feb4a235fda3112505e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEQ72GV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD7ccJdNdkcSLfT6wKHxXLDc0AnbqsO5GzHueZKMVnrtgIgFT7WMYUnXMKV0kbbjCSC3JPdjE%2FgWiHalNMUTpIqp4MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPJqCq8OkoEuQTOSrcA2TSRAB1dC1UDuX%2B6o6lNy%2F9Kh2tsMDbluSjWGbkFh5jJx1lzyLJUEZY7IFREnquLF1slUKrHnCAZgPut5iTtqSBlO80%2BM4YzYoZ2nLGYBFAQbyDWEFcy12agWA6SU82xY0FN7jmIiGsKDRqz5X3Re9tAtQyd0wnq7Cj4va%2B5Jw%2FATyeNUyys1cQw2RsJmEHpt1bpJMhs08M0Oc%2BvGFc89fjIUNj6e8mPT878Zq6ToVMkTp4RIzyl%2F3HX8EYz1kVzSiN8dIt6Fxkh%2B9XPUEFnxcfWlNkKuDEeqriD5shFGSNtwBfUtXETawwV7uGx2QRKLmLysKEor4eSx9v2oQ%2BcD9FdOGqCpLRUxTvMzCWKYZnfUAvYL1C4V%2FYNgy9UdZFx18%2FFjic9TtJaRhEV4bOk9I%2FeKjKpDAGsUee8dHwxC5cO4or9KKwGH5Es8Ay55JT0dcdsD6Hy0TUZTYU6Pc2duZWWFFjxIXYnOk5WjTHun5yRJhbGIwnPd4rIonXBrizT1IY34B8JkRdurjz0i4f7wq8He1%2FcHABzPP0oHZo5jKUvN5R0XPPBKcYoxlLAdM1Rtr%2FzMzoBawXSTkGyxw6jjPgOyZj6BAK7iJLBqQmFnzXnSk70kfdVs7KBz1dMKLE28QGOqUB74VoblHHE5f8FW%2FtJ8AyqUnUNxzGLyc3bY2eJkIWfOpdcGvX34xvr6xk1GWdUkqUEAULQ51vyv52KtB6i%2B7Npw73ZlqgZ9sIDO86NwR81f88WNJQ3rycYDq207jpJjkDxgTDsnohpgr5ROLQXbAPVAXJCsFo997sV%2F0rk4Rdb6BgMAjGrB1eSe98vcmVUTx4088%2BKLmS8S84%2BRbSHEWpM3ZIxVZj&X-Amz-Signature=2c8b3402711591af3ce2fc43d18c82874d89d24822aa1b0f7287539a14cb44c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEQ72GV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD7ccJdNdkcSLfT6wKHxXLDc0AnbqsO5GzHueZKMVnrtgIgFT7WMYUnXMKV0kbbjCSC3JPdjE%2FgWiHalNMUTpIqp4MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPJqCq8OkoEuQTOSrcA2TSRAB1dC1UDuX%2B6o6lNy%2F9Kh2tsMDbluSjWGbkFh5jJx1lzyLJUEZY7IFREnquLF1slUKrHnCAZgPut5iTtqSBlO80%2BM4YzYoZ2nLGYBFAQbyDWEFcy12agWA6SU82xY0FN7jmIiGsKDRqz5X3Re9tAtQyd0wnq7Cj4va%2B5Jw%2FATyeNUyys1cQw2RsJmEHpt1bpJMhs08M0Oc%2BvGFc89fjIUNj6e8mPT878Zq6ToVMkTp4RIzyl%2F3HX8EYz1kVzSiN8dIt6Fxkh%2B9XPUEFnxcfWlNkKuDEeqriD5shFGSNtwBfUtXETawwV7uGx2QRKLmLysKEor4eSx9v2oQ%2BcD9FdOGqCpLRUxTvMzCWKYZnfUAvYL1C4V%2FYNgy9UdZFx18%2FFjic9TtJaRhEV4bOk9I%2FeKjKpDAGsUee8dHwxC5cO4or9KKwGH5Es8Ay55JT0dcdsD6Hy0TUZTYU6Pc2duZWWFFjxIXYnOk5WjTHun5yRJhbGIwnPd4rIonXBrizT1IY34B8JkRdurjz0i4f7wq8He1%2FcHABzPP0oHZo5jKUvN5R0XPPBKcYoxlLAdM1Rtr%2FzMzoBawXSTkGyxw6jjPgOyZj6BAK7iJLBqQmFnzXnSk70kfdVs7KBz1dMKLE28QGOqUB74VoblHHE5f8FW%2FtJ8AyqUnUNxzGLyc3bY2eJkIWfOpdcGvX34xvr6xk1GWdUkqUEAULQ51vyv52KtB6i%2B7Npw73ZlqgZ9sIDO86NwR81f88WNJQ3rycYDq207jpJjkDxgTDsnohpgr5ROLQXbAPVAXJCsFo997sV%2F0rk4Rdb6BgMAjGrB1eSe98vcmVUTx4088%2BKLmS8S84%2BRbSHEWpM3ZIxVZj&X-Amz-Signature=8a17aef098160d801f9ec974d8676e89f96b619cf59854fe34d9edd9a6b9fdf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEQ72GV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD7ccJdNdkcSLfT6wKHxXLDc0AnbqsO5GzHueZKMVnrtgIgFT7WMYUnXMKV0kbbjCSC3JPdjE%2FgWiHalNMUTpIqp4MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPJqCq8OkoEuQTOSrcA2TSRAB1dC1UDuX%2B6o6lNy%2F9Kh2tsMDbluSjWGbkFh5jJx1lzyLJUEZY7IFREnquLF1slUKrHnCAZgPut5iTtqSBlO80%2BM4YzYoZ2nLGYBFAQbyDWEFcy12agWA6SU82xY0FN7jmIiGsKDRqz5X3Re9tAtQyd0wnq7Cj4va%2B5Jw%2FATyeNUyys1cQw2RsJmEHpt1bpJMhs08M0Oc%2BvGFc89fjIUNj6e8mPT878Zq6ToVMkTp4RIzyl%2F3HX8EYz1kVzSiN8dIt6Fxkh%2B9XPUEFnxcfWlNkKuDEeqriD5shFGSNtwBfUtXETawwV7uGx2QRKLmLysKEor4eSx9v2oQ%2BcD9FdOGqCpLRUxTvMzCWKYZnfUAvYL1C4V%2FYNgy9UdZFx18%2FFjic9TtJaRhEV4bOk9I%2FeKjKpDAGsUee8dHwxC5cO4or9KKwGH5Es8Ay55JT0dcdsD6Hy0TUZTYU6Pc2duZWWFFjxIXYnOk5WjTHun5yRJhbGIwnPd4rIonXBrizT1IY34B8JkRdurjz0i4f7wq8He1%2FcHABzPP0oHZo5jKUvN5R0XPPBKcYoxlLAdM1Rtr%2FzMzoBawXSTkGyxw6jjPgOyZj6BAK7iJLBqQmFnzXnSk70kfdVs7KBz1dMKLE28QGOqUB74VoblHHE5f8FW%2FtJ8AyqUnUNxzGLyc3bY2eJkIWfOpdcGvX34xvr6xk1GWdUkqUEAULQ51vyv52KtB6i%2B7Npw73ZlqgZ9sIDO86NwR81f88WNJQ3rycYDq207jpJjkDxgTDsnohpgr5ROLQXbAPVAXJCsFo997sV%2F0rk4Rdb6BgMAjGrB1eSe98vcmVUTx4088%2BKLmS8S84%2BRbSHEWpM3ZIxVZj&X-Amz-Signature=8aaa12f4a894115e362428002b59cb90a722df042d0df8ca5a797c4232da37e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEQ72GV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD7ccJdNdkcSLfT6wKHxXLDc0AnbqsO5GzHueZKMVnrtgIgFT7WMYUnXMKV0kbbjCSC3JPdjE%2FgWiHalNMUTpIqp4MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPJqCq8OkoEuQTOSrcA2TSRAB1dC1UDuX%2B6o6lNy%2F9Kh2tsMDbluSjWGbkFh5jJx1lzyLJUEZY7IFREnquLF1slUKrHnCAZgPut5iTtqSBlO80%2BM4YzYoZ2nLGYBFAQbyDWEFcy12agWA6SU82xY0FN7jmIiGsKDRqz5X3Re9tAtQyd0wnq7Cj4va%2B5Jw%2FATyeNUyys1cQw2RsJmEHpt1bpJMhs08M0Oc%2BvGFc89fjIUNj6e8mPT878Zq6ToVMkTp4RIzyl%2F3HX8EYz1kVzSiN8dIt6Fxkh%2B9XPUEFnxcfWlNkKuDEeqriD5shFGSNtwBfUtXETawwV7uGx2QRKLmLysKEor4eSx9v2oQ%2BcD9FdOGqCpLRUxTvMzCWKYZnfUAvYL1C4V%2FYNgy9UdZFx18%2FFjic9TtJaRhEV4bOk9I%2FeKjKpDAGsUee8dHwxC5cO4or9KKwGH5Es8Ay55JT0dcdsD6Hy0TUZTYU6Pc2duZWWFFjxIXYnOk5WjTHun5yRJhbGIwnPd4rIonXBrizT1IY34B8JkRdurjz0i4f7wq8He1%2FcHABzPP0oHZo5jKUvN5R0XPPBKcYoxlLAdM1Rtr%2FzMzoBawXSTkGyxw6jjPgOyZj6BAK7iJLBqQmFnzXnSk70kfdVs7KBz1dMKLE28QGOqUB74VoblHHE5f8FW%2FtJ8AyqUnUNxzGLyc3bY2eJkIWfOpdcGvX34xvr6xk1GWdUkqUEAULQ51vyv52KtB6i%2B7Npw73ZlqgZ9sIDO86NwR81f88WNJQ3rycYDq207jpJjkDxgTDsnohpgr5ROLQXbAPVAXJCsFo997sV%2F0rk4Rdb6BgMAjGrB1eSe98vcmVUTx4088%2BKLmS8S84%2BRbSHEWpM3ZIxVZj&X-Amz-Signature=95db77b7a10300d17189fb62d9ff155fdd4506e14740ec63587df3448d124194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEQ72GV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD7ccJdNdkcSLfT6wKHxXLDc0AnbqsO5GzHueZKMVnrtgIgFT7WMYUnXMKV0kbbjCSC3JPdjE%2FgWiHalNMUTpIqp4MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPJqCq8OkoEuQTOSrcA2TSRAB1dC1UDuX%2B6o6lNy%2F9Kh2tsMDbluSjWGbkFh5jJx1lzyLJUEZY7IFREnquLF1slUKrHnCAZgPut5iTtqSBlO80%2BM4YzYoZ2nLGYBFAQbyDWEFcy12agWA6SU82xY0FN7jmIiGsKDRqz5X3Re9tAtQyd0wnq7Cj4va%2B5Jw%2FATyeNUyys1cQw2RsJmEHpt1bpJMhs08M0Oc%2BvGFc89fjIUNj6e8mPT878Zq6ToVMkTp4RIzyl%2F3HX8EYz1kVzSiN8dIt6Fxkh%2B9XPUEFnxcfWlNkKuDEeqriD5shFGSNtwBfUtXETawwV7uGx2QRKLmLysKEor4eSx9v2oQ%2BcD9FdOGqCpLRUxTvMzCWKYZnfUAvYL1C4V%2FYNgy9UdZFx18%2FFjic9TtJaRhEV4bOk9I%2FeKjKpDAGsUee8dHwxC5cO4or9KKwGH5Es8Ay55JT0dcdsD6Hy0TUZTYU6Pc2duZWWFFjxIXYnOk5WjTHun5yRJhbGIwnPd4rIonXBrizT1IY34B8JkRdurjz0i4f7wq8He1%2FcHABzPP0oHZo5jKUvN5R0XPPBKcYoxlLAdM1Rtr%2FzMzoBawXSTkGyxw6jjPgOyZj6BAK7iJLBqQmFnzXnSk70kfdVs7KBz1dMKLE28QGOqUB74VoblHHE5f8FW%2FtJ8AyqUnUNxzGLyc3bY2eJkIWfOpdcGvX34xvr6xk1GWdUkqUEAULQ51vyv52KtB6i%2B7Npw73ZlqgZ9sIDO86NwR81f88WNJQ3rycYDq207jpJjkDxgTDsnohpgr5ROLQXbAPVAXJCsFo997sV%2F0rk4Rdb6BgMAjGrB1eSe98vcmVUTx4088%2BKLmS8S84%2BRbSHEWpM3ZIxVZj&X-Amz-Signature=d8aa7c98fabb13a37cba705f8baf2d3e04fae9adc4700f63e1b555181e9170a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEQ72GV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQD7ccJdNdkcSLfT6wKHxXLDc0AnbqsO5GzHueZKMVnrtgIgFT7WMYUnXMKV0kbbjCSC3JPdjE%2FgWiHalNMUTpIqp4MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFpPJqCq8OkoEuQTOSrcA2TSRAB1dC1UDuX%2B6o6lNy%2F9Kh2tsMDbluSjWGbkFh5jJx1lzyLJUEZY7IFREnquLF1slUKrHnCAZgPut5iTtqSBlO80%2BM4YzYoZ2nLGYBFAQbyDWEFcy12agWA6SU82xY0FN7jmIiGsKDRqz5X3Re9tAtQyd0wnq7Cj4va%2B5Jw%2FATyeNUyys1cQw2RsJmEHpt1bpJMhs08M0Oc%2BvGFc89fjIUNj6e8mPT878Zq6ToVMkTp4RIzyl%2F3HX8EYz1kVzSiN8dIt6Fxkh%2B9XPUEFnxcfWlNkKuDEeqriD5shFGSNtwBfUtXETawwV7uGx2QRKLmLysKEor4eSx9v2oQ%2BcD9FdOGqCpLRUxTvMzCWKYZnfUAvYL1C4V%2FYNgy9UdZFx18%2FFjic9TtJaRhEV4bOk9I%2FeKjKpDAGsUee8dHwxC5cO4or9KKwGH5Es8Ay55JT0dcdsD6Hy0TUZTYU6Pc2duZWWFFjxIXYnOk5WjTHun5yRJhbGIwnPd4rIonXBrizT1IY34B8JkRdurjz0i4f7wq8He1%2FcHABzPP0oHZo5jKUvN5R0XPPBKcYoxlLAdM1Rtr%2FzMzoBawXSTkGyxw6jjPgOyZj6BAK7iJLBqQmFnzXnSk70kfdVs7KBz1dMKLE28QGOqUB74VoblHHE5f8FW%2FtJ8AyqUnUNxzGLyc3bY2eJkIWfOpdcGvX34xvr6xk1GWdUkqUEAULQ51vyv52KtB6i%2B7Npw73ZlqgZ9sIDO86NwR81f88WNJQ3rycYDq207jpJjkDxgTDsnohpgr5ROLQXbAPVAXJCsFo997sV%2F0rk4Rdb6BgMAjGrB1eSe98vcmVUTx4088%2BKLmS8S84%2BRbSHEWpM3ZIxVZj&X-Amz-Signature=fe0ce502d0c9c5a473636038934eb0ede0eb0e92ba0a4c173ceeb3ea0c81d904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

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
                    'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

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

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
