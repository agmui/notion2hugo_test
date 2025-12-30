---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFZVM2L%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFJOYdv%2FwpSv0PcTxnTuzdHQQ0V8kyMV2nJ7JIomIQmQIgVYw3zha9eZQzpJttMMu8sqJE%2BGRAJGuo0YKIunAfL5EqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMo3Iglz5zda6oUsCrcA5Tf7AidV6FDSgGUynf6XVpeXoBfvrZQHSTZ6J207b8AoVtuIsjUaRpVcgddEMr7pwuDyzlT6l9xTOMDrIbvfr1bzS7Q7vIrw9FwwqpL2zmdckvG%2BIHPLIFnuGZxOGfXUjBZMKKSpK0L8HlQc4HurwxmVBiM9helClFYczVzxs2O9j%2FvWG3Y5%2FVOKN5WtvREktLMsx4HSjK2qO1D2TCXn97EJQ5LPn9LnhIAVgLuwSn2No6CBlrl2Ie%2FQWTJEEL6ioPv8mEU5iGHPE9xct5WVVAzjJ3fK9FXC744V%2BzoXvyG3sMHCMAjgflUDq0vP%2FIE0eA5XROA7yjrNlU9WqkxKGZbIyU1nWf3aCU9uss0o%2FgayKRXWX7I5%2FH7YIvpE8bvZRzGZWxyGaPSUFu6tN%2FkKUzKNOyiPa1NCnmI6U2bwUDGBIwr%2BU901TXu86T7GG5IG%2Bp0GIC9Znl1qwZarBylpLcB9lj9a6rLXaWz5gxKityY3BjhvXlYKg4ElWDd03P6Nr9nmrR2OAn6CWnQiRRSRI4bJi6dstU0i55%2FcKvTWuL%2FcYVU15jKFi0zRFYzMpUXU1mhF%2F4zH3A5GAReM2uKij0RyuVxUY%2BmtGTa8%2BtWFxHobLScLSQTRa%2BfBNvMMJK5y8oGOqUBCWnxd5ZuzopKPDJePvJbivmJzZ38F7%2Bw4ccMbufqXV08SBfnH1ISviGS%2BSnwRPPesi4oOsHe1WuKsFsCMVx%2FRe1Ikd%2BVRf7wLBKB18SknkoEog1zZ7wfgXWN9riPAdMkmW%2Buw%2Fbr1rKxUEEqJHTTl5R3Uw6JafxxKfBLyvmIUbkABCPjc7sOfq0gpwGUv4UaI243BCEyoXQPecdBnFsVz%2BFUz2u0&X-Amz-Signature=d279c77257c225d44c17a8c91db33f03ed04e6354278dcaffa49ae8f5374d147&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFZVM2L%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFJOYdv%2FwpSv0PcTxnTuzdHQQ0V8kyMV2nJ7JIomIQmQIgVYw3zha9eZQzpJttMMu8sqJE%2BGRAJGuo0YKIunAfL5EqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMo3Iglz5zda6oUsCrcA5Tf7AidV6FDSgGUynf6XVpeXoBfvrZQHSTZ6J207b8AoVtuIsjUaRpVcgddEMr7pwuDyzlT6l9xTOMDrIbvfr1bzS7Q7vIrw9FwwqpL2zmdckvG%2BIHPLIFnuGZxOGfXUjBZMKKSpK0L8HlQc4HurwxmVBiM9helClFYczVzxs2O9j%2FvWG3Y5%2FVOKN5WtvREktLMsx4HSjK2qO1D2TCXn97EJQ5LPn9LnhIAVgLuwSn2No6CBlrl2Ie%2FQWTJEEL6ioPv8mEU5iGHPE9xct5WVVAzjJ3fK9FXC744V%2BzoXvyG3sMHCMAjgflUDq0vP%2FIE0eA5XROA7yjrNlU9WqkxKGZbIyU1nWf3aCU9uss0o%2FgayKRXWX7I5%2FH7YIvpE8bvZRzGZWxyGaPSUFu6tN%2FkKUzKNOyiPa1NCnmI6U2bwUDGBIwr%2BU901TXu86T7GG5IG%2Bp0GIC9Znl1qwZarBylpLcB9lj9a6rLXaWz5gxKityY3BjhvXlYKg4ElWDd03P6Nr9nmrR2OAn6CWnQiRRSRI4bJi6dstU0i55%2FcKvTWuL%2FcYVU15jKFi0zRFYzMpUXU1mhF%2F4zH3A5GAReM2uKij0RyuVxUY%2BmtGTa8%2BtWFxHobLScLSQTRa%2BfBNvMMJK5y8oGOqUBCWnxd5ZuzopKPDJePvJbivmJzZ38F7%2Bw4ccMbufqXV08SBfnH1ISviGS%2BSnwRPPesi4oOsHe1WuKsFsCMVx%2FRe1Ikd%2BVRf7wLBKB18SknkoEog1zZ7wfgXWN9riPAdMkmW%2Buw%2Fbr1rKxUEEqJHTTl5R3Uw6JafxxKfBLyvmIUbkABCPjc7sOfq0gpwGUv4UaI243BCEyoXQPecdBnFsVz%2BFUz2u0&X-Amz-Signature=c81fc7459ddc41162856bb698019334475b3e5ceb5dc56ff25d32b53a0b70449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFZVM2L%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFJOYdv%2FwpSv0PcTxnTuzdHQQ0V8kyMV2nJ7JIomIQmQIgVYw3zha9eZQzpJttMMu8sqJE%2BGRAJGuo0YKIunAfL5EqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMo3Iglz5zda6oUsCrcA5Tf7AidV6FDSgGUynf6XVpeXoBfvrZQHSTZ6J207b8AoVtuIsjUaRpVcgddEMr7pwuDyzlT6l9xTOMDrIbvfr1bzS7Q7vIrw9FwwqpL2zmdckvG%2BIHPLIFnuGZxOGfXUjBZMKKSpK0L8HlQc4HurwxmVBiM9helClFYczVzxs2O9j%2FvWG3Y5%2FVOKN5WtvREktLMsx4HSjK2qO1D2TCXn97EJQ5LPn9LnhIAVgLuwSn2No6CBlrl2Ie%2FQWTJEEL6ioPv8mEU5iGHPE9xct5WVVAzjJ3fK9FXC744V%2BzoXvyG3sMHCMAjgflUDq0vP%2FIE0eA5XROA7yjrNlU9WqkxKGZbIyU1nWf3aCU9uss0o%2FgayKRXWX7I5%2FH7YIvpE8bvZRzGZWxyGaPSUFu6tN%2FkKUzKNOyiPa1NCnmI6U2bwUDGBIwr%2BU901TXu86T7GG5IG%2Bp0GIC9Znl1qwZarBylpLcB9lj9a6rLXaWz5gxKityY3BjhvXlYKg4ElWDd03P6Nr9nmrR2OAn6CWnQiRRSRI4bJi6dstU0i55%2FcKvTWuL%2FcYVU15jKFi0zRFYzMpUXU1mhF%2F4zH3A5GAReM2uKij0RyuVxUY%2BmtGTa8%2BtWFxHobLScLSQTRa%2BfBNvMMJK5y8oGOqUBCWnxd5ZuzopKPDJePvJbivmJzZ38F7%2Bw4ccMbufqXV08SBfnH1ISviGS%2BSnwRPPesi4oOsHe1WuKsFsCMVx%2FRe1Ikd%2BVRf7wLBKB18SknkoEog1zZ7wfgXWN9riPAdMkmW%2Buw%2Fbr1rKxUEEqJHTTl5R3Uw6JafxxKfBLyvmIUbkABCPjc7sOfq0gpwGUv4UaI243BCEyoXQPecdBnFsVz%2BFUz2u0&X-Amz-Signature=0139d7a28cafbbd1892644934f0cb64703757fc0d352de2c2201594dd40174c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFZVM2L%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFJOYdv%2FwpSv0PcTxnTuzdHQQ0V8kyMV2nJ7JIomIQmQIgVYw3zha9eZQzpJttMMu8sqJE%2BGRAJGuo0YKIunAfL5EqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMo3Iglz5zda6oUsCrcA5Tf7AidV6FDSgGUynf6XVpeXoBfvrZQHSTZ6J207b8AoVtuIsjUaRpVcgddEMr7pwuDyzlT6l9xTOMDrIbvfr1bzS7Q7vIrw9FwwqpL2zmdckvG%2BIHPLIFnuGZxOGfXUjBZMKKSpK0L8HlQc4HurwxmVBiM9helClFYczVzxs2O9j%2FvWG3Y5%2FVOKN5WtvREktLMsx4HSjK2qO1D2TCXn97EJQ5LPn9LnhIAVgLuwSn2No6CBlrl2Ie%2FQWTJEEL6ioPv8mEU5iGHPE9xct5WVVAzjJ3fK9FXC744V%2BzoXvyG3sMHCMAjgflUDq0vP%2FIE0eA5XROA7yjrNlU9WqkxKGZbIyU1nWf3aCU9uss0o%2FgayKRXWX7I5%2FH7YIvpE8bvZRzGZWxyGaPSUFu6tN%2FkKUzKNOyiPa1NCnmI6U2bwUDGBIwr%2BU901TXu86T7GG5IG%2Bp0GIC9Znl1qwZarBylpLcB9lj9a6rLXaWz5gxKityY3BjhvXlYKg4ElWDd03P6Nr9nmrR2OAn6CWnQiRRSRI4bJi6dstU0i55%2FcKvTWuL%2FcYVU15jKFi0zRFYzMpUXU1mhF%2F4zH3A5GAReM2uKij0RyuVxUY%2BmtGTa8%2BtWFxHobLScLSQTRa%2BfBNvMMJK5y8oGOqUBCWnxd5ZuzopKPDJePvJbivmJzZ38F7%2Bw4ccMbufqXV08SBfnH1ISviGS%2BSnwRPPesi4oOsHe1WuKsFsCMVx%2FRe1Ikd%2BVRf7wLBKB18SknkoEog1zZ7wfgXWN9riPAdMkmW%2Buw%2Fbr1rKxUEEqJHTTl5R3Uw6JafxxKfBLyvmIUbkABCPjc7sOfq0gpwGUv4UaI243BCEyoXQPecdBnFsVz%2BFUz2u0&X-Amz-Signature=8b30045acf6a744afaf96ceb975c589e270803b1cd81d8996b24aae921280606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFZVM2L%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFJOYdv%2FwpSv0PcTxnTuzdHQQ0V8kyMV2nJ7JIomIQmQIgVYw3zha9eZQzpJttMMu8sqJE%2BGRAJGuo0YKIunAfL5EqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMo3Iglz5zda6oUsCrcA5Tf7AidV6FDSgGUynf6XVpeXoBfvrZQHSTZ6J207b8AoVtuIsjUaRpVcgddEMr7pwuDyzlT6l9xTOMDrIbvfr1bzS7Q7vIrw9FwwqpL2zmdckvG%2BIHPLIFnuGZxOGfXUjBZMKKSpK0L8HlQc4HurwxmVBiM9helClFYczVzxs2O9j%2FvWG3Y5%2FVOKN5WtvREktLMsx4HSjK2qO1D2TCXn97EJQ5LPn9LnhIAVgLuwSn2No6CBlrl2Ie%2FQWTJEEL6ioPv8mEU5iGHPE9xct5WVVAzjJ3fK9FXC744V%2BzoXvyG3sMHCMAjgflUDq0vP%2FIE0eA5XROA7yjrNlU9WqkxKGZbIyU1nWf3aCU9uss0o%2FgayKRXWX7I5%2FH7YIvpE8bvZRzGZWxyGaPSUFu6tN%2FkKUzKNOyiPa1NCnmI6U2bwUDGBIwr%2BU901TXu86T7GG5IG%2Bp0GIC9Znl1qwZarBylpLcB9lj9a6rLXaWz5gxKityY3BjhvXlYKg4ElWDd03P6Nr9nmrR2OAn6CWnQiRRSRI4bJi6dstU0i55%2FcKvTWuL%2FcYVU15jKFi0zRFYzMpUXU1mhF%2F4zH3A5GAReM2uKij0RyuVxUY%2BmtGTa8%2BtWFxHobLScLSQTRa%2BfBNvMMJK5y8oGOqUBCWnxd5ZuzopKPDJePvJbivmJzZ38F7%2Bw4ccMbufqXV08SBfnH1ISviGS%2BSnwRPPesi4oOsHe1WuKsFsCMVx%2FRe1Ikd%2BVRf7wLBKB18SknkoEog1zZ7wfgXWN9riPAdMkmW%2Buw%2Fbr1rKxUEEqJHTTl5R3Uw6JafxxKfBLyvmIUbkABCPjc7sOfq0gpwGUv4UaI243BCEyoXQPecdBnFsVz%2BFUz2u0&X-Amz-Signature=8986737f47e711fc3d0d465cddda57a6b954ea087af4d017b8bc9fa121ae8065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFZVM2L%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFJOYdv%2FwpSv0PcTxnTuzdHQQ0V8kyMV2nJ7JIomIQmQIgVYw3zha9eZQzpJttMMu8sqJE%2BGRAJGuo0YKIunAfL5EqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMo3Iglz5zda6oUsCrcA5Tf7AidV6FDSgGUynf6XVpeXoBfvrZQHSTZ6J207b8AoVtuIsjUaRpVcgddEMr7pwuDyzlT6l9xTOMDrIbvfr1bzS7Q7vIrw9FwwqpL2zmdckvG%2BIHPLIFnuGZxOGfXUjBZMKKSpK0L8HlQc4HurwxmVBiM9helClFYczVzxs2O9j%2FvWG3Y5%2FVOKN5WtvREktLMsx4HSjK2qO1D2TCXn97EJQ5LPn9LnhIAVgLuwSn2No6CBlrl2Ie%2FQWTJEEL6ioPv8mEU5iGHPE9xct5WVVAzjJ3fK9FXC744V%2BzoXvyG3sMHCMAjgflUDq0vP%2FIE0eA5XROA7yjrNlU9WqkxKGZbIyU1nWf3aCU9uss0o%2FgayKRXWX7I5%2FH7YIvpE8bvZRzGZWxyGaPSUFu6tN%2FkKUzKNOyiPa1NCnmI6U2bwUDGBIwr%2BU901TXu86T7GG5IG%2Bp0GIC9Znl1qwZarBylpLcB9lj9a6rLXaWz5gxKityY3BjhvXlYKg4ElWDd03P6Nr9nmrR2OAn6CWnQiRRSRI4bJi6dstU0i55%2FcKvTWuL%2FcYVU15jKFi0zRFYzMpUXU1mhF%2F4zH3A5GAReM2uKij0RyuVxUY%2BmtGTa8%2BtWFxHobLScLSQTRa%2BfBNvMMJK5y8oGOqUBCWnxd5ZuzopKPDJePvJbivmJzZ38F7%2Bw4ccMbufqXV08SBfnH1ISviGS%2BSnwRPPesi4oOsHe1WuKsFsCMVx%2FRe1Ikd%2BVRf7wLBKB18SknkoEog1zZ7wfgXWN9riPAdMkmW%2Buw%2Fbr1rKxUEEqJHTTl5R3Uw6JafxxKfBLyvmIUbkABCPjc7sOfq0gpwGUv4UaI243BCEyoXQPecdBnFsVz%2BFUz2u0&X-Amz-Signature=8a6cc0b77a6dbe261bd9de9934ec7d75df73399130431b0757f5c471aedc95b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFZVM2L%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFJOYdv%2FwpSv0PcTxnTuzdHQQ0V8kyMV2nJ7JIomIQmQIgVYw3zha9eZQzpJttMMu8sqJE%2BGRAJGuo0YKIunAfL5EqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMo3Iglz5zda6oUsCrcA5Tf7AidV6FDSgGUynf6XVpeXoBfvrZQHSTZ6J207b8AoVtuIsjUaRpVcgddEMr7pwuDyzlT6l9xTOMDrIbvfr1bzS7Q7vIrw9FwwqpL2zmdckvG%2BIHPLIFnuGZxOGfXUjBZMKKSpK0L8HlQc4HurwxmVBiM9helClFYczVzxs2O9j%2FvWG3Y5%2FVOKN5WtvREktLMsx4HSjK2qO1D2TCXn97EJQ5LPn9LnhIAVgLuwSn2No6CBlrl2Ie%2FQWTJEEL6ioPv8mEU5iGHPE9xct5WVVAzjJ3fK9FXC744V%2BzoXvyG3sMHCMAjgflUDq0vP%2FIE0eA5XROA7yjrNlU9WqkxKGZbIyU1nWf3aCU9uss0o%2FgayKRXWX7I5%2FH7YIvpE8bvZRzGZWxyGaPSUFu6tN%2FkKUzKNOyiPa1NCnmI6U2bwUDGBIwr%2BU901TXu86T7GG5IG%2Bp0GIC9Znl1qwZarBylpLcB9lj9a6rLXaWz5gxKityY3BjhvXlYKg4ElWDd03P6Nr9nmrR2OAn6CWnQiRRSRI4bJi6dstU0i55%2FcKvTWuL%2FcYVU15jKFi0zRFYzMpUXU1mhF%2F4zH3A5GAReM2uKij0RyuVxUY%2BmtGTa8%2BtWFxHobLScLSQTRa%2BfBNvMMJK5y8oGOqUBCWnxd5ZuzopKPDJePvJbivmJzZ38F7%2Bw4ccMbufqXV08SBfnH1ISviGS%2BSnwRPPesi4oOsHe1WuKsFsCMVx%2FRe1Ikd%2BVRf7wLBKB18SknkoEog1zZ7wfgXWN9riPAdMkmW%2Buw%2Fbr1rKxUEEqJHTTl5R3Uw6JafxxKfBLyvmIUbkABCPjc7sOfq0gpwGUv4UaI243BCEyoXQPecdBnFsVz%2BFUz2u0&X-Amz-Signature=32ac31d3cade09bb5bf0f7b2a7e8530591fde6acb33973df207d7156a0cfa012&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFZVM2L%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFJOYdv%2FwpSv0PcTxnTuzdHQQ0V8kyMV2nJ7JIomIQmQIgVYw3zha9eZQzpJttMMu8sqJE%2BGRAJGuo0YKIunAfL5EqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMo3Iglz5zda6oUsCrcA5Tf7AidV6FDSgGUynf6XVpeXoBfvrZQHSTZ6J207b8AoVtuIsjUaRpVcgddEMr7pwuDyzlT6l9xTOMDrIbvfr1bzS7Q7vIrw9FwwqpL2zmdckvG%2BIHPLIFnuGZxOGfXUjBZMKKSpK0L8HlQc4HurwxmVBiM9helClFYczVzxs2O9j%2FvWG3Y5%2FVOKN5WtvREktLMsx4HSjK2qO1D2TCXn97EJQ5LPn9LnhIAVgLuwSn2No6CBlrl2Ie%2FQWTJEEL6ioPv8mEU5iGHPE9xct5WVVAzjJ3fK9FXC744V%2BzoXvyG3sMHCMAjgflUDq0vP%2FIE0eA5XROA7yjrNlU9WqkxKGZbIyU1nWf3aCU9uss0o%2FgayKRXWX7I5%2FH7YIvpE8bvZRzGZWxyGaPSUFu6tN%2FkKUzKNOyiPa1NCnmI6U2bwUDGBIwr%2BU901TXu86T7GG5IG%2Bp0GIC9Znl1qwZarBylpLcB9lj9a6rLXaWz5gxKityY3BjhvXlYKg4ElWDd03P6Nr9nmrR2OAn6CWnQiRRSRI4bJi6dstU0i55%2FcKvTWuL%2FcYVU15jKFi0zRFYzMpUXU1mhF%2F4zH3A5GAReM2uKij0RyuVxUY%2BmtGTa8%2BtWFxHobLScLSQTRa%2BfBNvMMJK5y8oGOqUBCWnxd5ZuzopKPDJePvJbivmJzZ38F7%2Bw4ccMbufqXV08SBfnH1ISviGS%2BSnwRPPesi4oOsHe1WuKsFsCMVx%2FRe1Ikd%2BVRf7wLBKB18SknkoEog1zZ7wfgXWN9riPAdMkmW%2Buw%2Fbr1rKxUEEqJHTTl5R3Uw6JafxxKfBLyvmIUbkABCPjc7sOfq0gpwGUv4UaI243BCEyoXQPecdBnFsVz%2BFUz2u0&X-Amz-Signature=be73d67cf8e16fb1eb6aa9e4c7f06fbc59ebfc2596954e3f6769716cb24eb7ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFZVM2L%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFJOYdv%2FwpSv0PcTxnTuzdHQQ0V8kyMV2nJ7JIomIQmQIgVYw3zha9eZQzpJttMMu8sqJE%2BGRAJGuo0YKIunAfL5EqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMo3Iglz5zda6oUsCrcA5Tf7AidV6FDSgGUynf6XVpeXoBfvrZQHSTZ6J207b8AoVtuIsjUaRpVcgddEMr7pwuDyzlT6l9xTOMDrIbvfr1bzS7Q7vIrw9FwwqpL2zmdckvG%2BIHPLIFnuGZxOGfXUjBZMKKSpK0L8HlQc4HurwxmVBiM9helClFYczVzxs2O9j%2FvWG3Y5%2FVOKN5WtvREktLMsx4HSjK2qO1D2TCXn97EJQ5LPn9LnhIAVgLuwSn2No6CBlrl2Ie%2FQWTJEEL6ioPv8mEU5iGHPE9xct5WVVAzjJ3fK9FXC744V%2BzoXvyG3sMHCMAjgflUDq0vP%2FIE0eA5XROA7yjrNlU9WqkxKGZbIyU1nWf3aCU9uss0o%2FgayKRXWX7I5%2FH7YIvpE8bvZRzGZWxyGaPSUFu6tN%2FkKUzKNOyiPa1NCnmI6U2bwUDGBIwr%2BU901TXu86T7GG5IG%2Bp0GIC9Znl1qwZarBylpLcB9lj9a6rLXaWz5gxKityY3BjhvXlYKg4ElWDd03P6Nr9nmrR2OAn6CWnQiRRSRI4bJi6dstU0i55%2FcKvTWuL%2FcYVU15jKFi0zRFYzMpUXU1mhF%2F4zH3A5GAReM2uKij0RyuVxUY%2BmtGTa8%2BtWFxHobLScLSQTRa%2BfBNvMMJK5y8oGOqUBCWnxd5ZuzopKPDJePvJbivmJzZ38F7%2Bw4ccMbufqXV08SBfnH1ISviGS%2BSnwRPPesi4oOsHe1WuKsFsCMVx%2FRe1Ikd%2BVRf7wLBKB18SknkoEog1zZ7wfgXWN9riPAdMkmW%2Buw%2Fbr1rKxUEEqJHTTl5R3Uw6JafxxKfBLyvmIUbkABCPjc7sOfq0gpwGUv4UaI243BCEyoXQPecdBnFsVz%2BFUz2u0&X-Amz-Signature=d66f6705611f3482c1568f1f23fdfff05aab24d5a7445342e0632052d1b946a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFZVM2L%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFJOYdv%2FwpSv0PcTxnTuzdHQQ0V8kyMV2nJ7JIomIQmQIgVYw3zha9eZQzpJttMMu8sqJE%2BGRAJGuo0YKIunAfL5EqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMo3Iglz5zda6oUsCrcA5Tf7AidV6FDSgGUynf6XVpeXoBfvrZQHSTZ6J207b8AoVtuIsjUaRpVcgddEMr7pwuDyzlT6l9xTOMDrIbvfr1bzS7Q7vIrw9FwwqpL2zmdckvG%2BIHPLIFnuGZxOGfXUjBZMKKSpK0L8HlQc4HurwxmVBiM9helClFYczVzxs2O9j%2FvWG3Y5%2FVOKN5WtvREktLMsx4HSjK2qO1D2TCXn97EJQ5LPn9LnhIAVgLuwSn2No6CBlrl2Ie%2FQWTJEEL6ioPv8mEU5iGHPE9xct5WVVAzjJ3fK9FXC744V%2BzoXvyG3sMHCMAjgflUDq0vP%2FIE0eA5XROA7yjrNlU9WqkxKGZbIyU1nWf3aCU9uss0o%2FgayKRXWX7I5%2FH7YIvpE8bvZRzGZWxyGaPSUFu6tN%2FkKUzKNOyiPa1NCnmI6U2bwUDGBIwr%2BU901TXu86T7GG5IG%2Bp0GIC9Znl1qwZarBylpLcB9lj9a6rLXaWz5gxKityY3BjhvXlYKg4ElWDd03P6Nr9nmrR2OAn6CWnQiRRSRI4bJi6dstU0i55%2FcKvTWuL%2FcYVU15jKFi0zRFYzMpUXU1mhF%2F4zH3A5GAReM2uKij0RyuVxUY%2BmtGTa8%2BtWFxHobLScLSQTRa%2BfBNvMMJK5y8oGOqUBCWnxd5ZuzopKPDJePvJbivmJzZ38F7%2Bw4ccMbufqXV08SBfnH1ISviGS%2BSnwRPPesi4oOsHe1WuKsFsCMVx%2FRe1Ikd%2BVRf7wLBKB18SknkoEog1zZ7wfgXWN9riPAdMkmW%2Buw%2Fbr1rKxUEEqJHTTl5R3Uw6JafxxKfBLyvmIUbkABCPjc7sOfq0gpwGUv4UaI243BCEyoXQPecdBnFsVz%2BFUz2u0&X-Amz-Signature=3b2c0e41122bdacb92020837ec8da2a269fc8fbb2da9a1852b0268896c750d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFZVM2L%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFJOYdv%2FwpSv0PcTxnTuzdHQQ0V8kyMV2nJ7JIomIQmQIgVYw3zha9eZQzpJttMMu8sqJE%2BGRAJGuo0YKIunAfL5EqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMo3Iglz5zda6oUsCrcA5Tf7AidV6FDSgGUynf6XVpeXoBfvrZQHSTZ6J207b8AoVtuIsjUaRpVcgddEMr7pwuDyzlT6l9xTOMDrIbvfr1bzS7Q7vIrw9FwwqpL2zmdckvG%2BIHPLIFnuGZxOGfXUjBZMKKSpK0L8HlQc4HurwxmVBiM9helClFYczVzxs2O9j%2FvWG3Y5%2FVOKN5WtvREktLMsx4HSjK2qO1D2TCXn97EJQ5LPn9LnhIAVgLuwSn2No6CBlrl2Ie%2FQWTJEEL6ioPv8mEU5iGHPE9xct5WVVAzjJ3fK9FXC744V%2BzoXvyG3sMHCMAjgflUDq0vP%2FIE0eA5XROA7yjrNlU9WqkxKGZbIyU1nWf3aCU9uss0o%2FgayKRXWX7I5%2FH7YIvpE8bvZRzGZWxyGaPSUFu6tN%2FkKUzKNOyiPa1NCnmI6U2bwUDGBIwr%2BU901TXu86T7GG5IG%2Bp0GIC9Znl1qwZarBylpLcB9lj9a6rLXaWz5gxKityY3BjhvXlYKg4ElWDd03P6Nr9nmrR2OAn6CWnQiRRSRI4bJi6dstU0i55%2FcKvTWuL%2FcYVU15jKFi0zRFYzMpUXU1mhF%2F4zH3A5GAReM2uKij0RyuVxUY%2BmtGTa8%2BtWFxHobLScLSQTRa%2BfBNvMMJK5y8oGOqUBCWnxd5ZuzopKPDJePvJbivmJzZ38F7%2Bw4ccMbufqXV08SBfnH1ISviGS%2BSnwRPPesi4oOsHe1WuKsFsCMVx%2FRe1Ikd%2BVRf7wLBKB18SknkoEog1zZ7wfgXWN9riPAdMkmW%2Buw%2Fbr1rKxUEEqJHTTl5R3Uw6JafxxKfBLyvmIUbkABCPjc7sOfq0gpwGUv4UaI243BCEyoXQPecdBnFsVz%2BFUz2u0&X-Amz-Signature=b7215f5d8c6223ad81757a9d03f09658d2bffc144061ebda3bb58244e804edc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFZVM2L%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFJOYdv%2FwpSv0PcTxnTuzdHQQ0V8kyMV2nJ7JIomIQmQIgVYw3zha9eZQzpJttMMu8sqJE%2BGRAJGuo0YKIunAfL5EqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMo3Iglz5zda6oUsCrcA5Tf7AidV6FDSgGUynf6XVpeXoBfvrZQHSTZ6J207b8AoVtuIsjUaRpVcgddEMr7pwuDyzlT6l9xTOMDrIbvfr1bzS7Q7vIrw9FwwqpL2zmdckvG%2BIHPLIFnuGZxOGfXUjBZMKKSpK0L8HlQc4HurwxmVBiM9helClFYczVzxs2O9j%2FvWG3Y5%2FVOKN5WtvREktLMsx4HSjK2qO1D2TCXn97EJQ5LPn9LnhIAVgLuwSn2No6CBlrl2Ie%2FQWTJEEL6ioPv8mEU5iGHPE9xct5WVVAzjJ3fK9FXC744V%2BzoXvyG3sMHCMAjgflUDq0vP%2FIE0eA5XROA7yjrNlU9WqkxKGZbIyU1nWf3aCU9uss0o%2FgayKRXWX7I5%2FH7YIvpE8bvZRzGZWxyGaPSUFu6tN%2FkKUzKNOyiPa1NCnmI6U2bwUDGBIwr%2BU901TXu86T7GG5IG%2Bp0GIC9Znl1qwZarBylpLcB9lj9a6rLXaWz5gxKityY3BjhvXlYKg4ElWDd03P6Nr9nmrR2OAn6CWnQiRRSRI4bJi6dstU0i55%2FcKvTWuL%2FcYVU15jKFi0zRFYzMpUXU1mhF%2F4zH3A5GAReM2uKij0RyuVxUY%2BmtGTa8%2BtWFxHobLScLSQTRa%2BfBNvMMJK5y8oGOqUBCWnxd5ZuzopKPDJePvJbivmJzZ38F7%2Bw4ccMbufqXV08SBfnH1ISviGS%2BSnwRPPesi4oOsHe1WuKsFsCMVx%2FRe1Ikd%2BVRf7wLBKB18SknkoEog1zZ7wfgXWN9riPAdMkmW%2Buw%2Fbr1rKxUEEqJHTTl5R3Uw6JafxxKfBLyvmIUbkABCPjc7sOfq0gpwGUv4UaI243BCEyoXQPecdBnFsVz%2BFUz2u0&X-Amz-Signature=d566daf3697d658d6af72e8eb30958641b2f9b431ad6e928d883c70e1f8b49de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQFZVM2L%2F20251230%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251230T014555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFJOYdv%2FwpSv0PcTxnTuzdHQQ0V8kyMV2nJ7JIomIQmQIgVYw3zha9eZQzpJttMMu8sqJE%2BGRAJGuo0YKIunAfL5EqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHMo3Iglz5zda6oUsCrcA5Tf7AidV6FDSgGUynf6XVpeXoBfvrZQHSTZ6J207b8AoVtuIsjUaRpVcgddEMr7pwuDyzlT6l9xTOMDrIbvfr1bzS7Q7vIrw9FwwqpL2zmdckvG%2BIHPLIFnuGZxOGfXUjBZMKKSpK0L8HlQc4HurwxmVBiM9helClFYczVzxs2O9j%2FvWG3Y5%2FVOKN5WtvREktLMsx4HSjK2qO1D2TCXn97EJQ5LPn9LnhIAVgLuwSn2No6CBlrl2Ie%2FQWTJEEL6ioPv8mEU5iGHPE9xct5WVVAzjJ3fK9FXC744V%2BzoXvyG3sMHCMAjgflUDq0vP%2FIE0eA5XROA7yjrNlU9WqkxKGZbIyU1nWf3aCU9uss0o%2FgayKRXWX7I5%2FH7YIvpE8bvZRzGZWxyGaPSUFu6tN%2FkKUzKNOyiPa1NCnmI6U2bwUDGBIwr%2BU901TXu86T7GG5IG%2Bp0GIC9Znl1qwZarBylpLcB9lj9a6rLXaWz5gxKityY3BjhvXlYKg4ElWDd03P6Nr9nmrR2OAn6CWnQiRRSRI4bJi6dstU0i55%2FcKvTWuL%2FcYVU15jKFi0zRFYzMpUXU1mhF%2F4zH3A5GAReM2uKij0RyuVxUY%2BmtGTa8%2BtWFxHobLScLSQTRa%2BfBNvMMJK5y8oGOqUBCWnxd5ZuzopKPDJePvJbivmJzZ38F7%2Bw4ccMbufqXV08SBfnH1ISviGS%2BSnwRPPesi4oOsHe1WuKsFsCMVx%2FRe1Ikd%2BVRf7wLBKB18SknkoEog1zZ7wfgXWN9riPAdMkmW%2Buw%2Fbr1rKxUEEqJHTTl5R3Uw6JafxxKfBLyvmIUbkABCPjc7sOfq0gpwGUv4UaI243BCEyoXQPecdBnFsVz%2BFUz2u0&X-Amz-Signature=c3a2bdab03410637e2455a99d6ba08df1fb7968cf76d4f32dfb10f0d00bcff79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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
