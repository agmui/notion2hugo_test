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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRVDAMW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQoe4CcvO5DhsxbWOx%2B7S9RkTnc4D3YyBAh7sxkzzfQIgBGVIhCmAA6JtxRnCWHFog85KCWKeNuECSc9LUoUK9Bwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOT7vavaJxP3AKfaGCrcA%2F0aMzcCRuOmbGU9%2BSngCCgO3P1qu72cwI2f5tLZ537I21clS4UTinXs0v%2F0gExGWROvmn%2BZiqCtbF9HMPJetx%2FFFNTLKYbb3FEnmoQQa9BMIjdHK7CPf6toiQymgq0eEoBZx6jFkvNU6DQzAGU2Sks6diJ93qBp3uDfOULgQCW9E9XAm01Az%2FBeJQ7zLMHY%2BLVdsvnTGnSu%2FfMxYvfMgmX2hmOyffaS1X89WZzvz%2FwuUbdwmYri%2BMFTAwg677cThI%2FZejHgj189K%2F%2BmXv73t1%2F5Y6JLz4yLZ1zR9yOCwo0F4EdLpd5Q4U051jJTqRjcL2eJk04f0zqnH89mgPaQKrHkVLBtPKgOUgarn0FV6bmKCKzg8prqTqzzLV9iBMNSgZAqgGYKx2pSQAuLLbvrZvd9c4838buk91iJKp2Zwa9RpSU7FXdczXCmLtEHY8keGmOGOIuYwd2ttbHITQ89XCWfUWwdtmmSoy4t0BecUXedBxIuihuICDq63vK0Jj%2BpCIP00Ta9o1p4ixNgFroi5EQZDW0twsnI6tDG0aZ0iwfG7RVFcg%2BQ0UeTxMI58cKzEShL6AsqLLex%2FYPB80uhqOtobS0LOqJmomMs6EGSykGW6y5vB5m1TWf%2FufQOMIHq8cQGOqUBtQPWxy1bq%2BfB3Wijo88xibtWpuqyDEwKu5BNPqR45ct3ECNiAIr%2BGsPyn4hTaJpCamIGPDpM3aVjV5CQ1opq9FSvTsSIaybeQh5VNKf9g4zpElOVnHnJxbxLsLaAaXCY2y2%2BmOwxL1LESZxfEHvxWU6j51L0DG3ic29Qj9FFltMSMZwuHIEEF%2BdmfVnsiFY8vreU%2Br%2ByQ%2FiIT81p9htyAsyHFgcW&X-Amz-Signature=7e6944b2210a2b39e34d6bb52e69ff814c64960d76aa0ef06490b2da25565e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRVDAMW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQoe4CcvO5DhsxbWOx%2B7S9RkTnc4D3YyBAh7sxkzzfQIgBGVIhCmAA6JtxRnCWHFog85KCWKeNuECSc9LUoUK9Bwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOT7vavaJxP3AKfaGCrcA%2F0aMzcCRuOmbGU9%2BSngCCgO3P1qu72cwI2f5tLZ537I21clS4UTinXs0v%2F0gExGWROvmn%2BZiqCtbF9HMPJetx%2FFFNTLKYbb3FEnmoQQa9BMIjdHK7CPf6toiQymgq0eEoBZx6jFkvNU6DQzAGU2Sks6diJ93qBp3uDfOULgQCW9E9XAm01Az%2FBeJQ7zLMHY%2BLVdsvnTGnSu%2FfMxYvfMgmX2hmOyffaS1X89WZzvz%2FwuUbdwmYri%2BMFTAwg677cThI%2FZejHgj189K%2F%2BmXv73t1%2F5Y6JLz4yLZ1zR9yOCwo0F4EdLpd5Q4U051jJTqRjcL2eJk04f0zqnH89mgPaQKrHkVLBtPKgOUgarn0FV6bmKCKzg8prqTqzzLV9iBMNSgZAqgGYKx2pSQAuLLbvrZvd9c4838buk91iJKp2Zwa9RpSU7FXdczXCmLtEHY8keGmOGOIuYwd2ttbHITQ89XCWfUWwdtmmSoy4t0BecUXedBxIuihuICDq63vK0Jj%2BpCIP00Ta9o1p4ixNgFroi5EQZDW0twsnI6tDG0aZ0iwfG7RVFcg%2BQ0UeTxMI58cKzEShL6AsqLLex%2FYPB80uhqOtobS0LOqJmomMs6EGSykGW6y5vB5m1TWf%2FufQOMIHq8cQGOqUBtQPWxy1bq%2BfB3Wijo88xibtWpuqyDEwKu5BNPqR45ct3ECNiAIr%2BGsPyn4hTaJpCamIGPDpM3aVjV5CQ1opq9FSvTsSIaybeQh5VNKf9g4zpElOVnHnJxbxLsLaAaXCY2y2%2BmOwxL1LESZxfEHvxWU6j51L0DG3ic29Qj9FFltMSMZwuHIEEF%2BdmfVnsiFY8vreU%2Br%2ByQ%2FiIT81p9htyAsyHFgcW&X-Amz-Signature=b0b3d6e4bdae18ccb8c39506e1e7b5a054d07f0ebbd6bd23a7c78d3a175f5fc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRVDAMW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQoe4CcvO5DhsxbWOx%2B7S9RkTnc4D3YyBAh7sxkzzfQIgBGVIhCmAA6JtxRnCWHFog85KCWKeNuECSc9LUoUK9Bwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOT7vavaJxP3AKfaGCrcA%2F0aMzcCRuOmbGU9%2BSngCCgO3P1qu72cwI2f5tLZ537I21clS4UTinXs0v%2F0gExGWROvmn%2BZiqCtbF9HMPJetx%2FFFNTLKYbb3FEnmoQQa9BMIjdHK7CPf6toiQymgq0eEoBZx6jFkvNU6DQzAGU2Sks6diJ93qBp3uDfOULgQCW9E9XAm01Az%2FBeJQ7zLMHY%2BLVdsvnTGnSu%2FfMxYvfMgmX2hmOyffaS1X89WZzvz%2FwuUbdwmYri%2BMFTAwg677cThI%2FZejHgj189K%2F%2BmXv73t1%2F5Y6JLz4yLZ1zR9yOCwo0F4EdLpd5Q4U051jJTqRjcL2eJk04f0zqnH89mgPaQKrHkVLBtPKgOUgarn0FV6bmKCKzg8prqTqzzLV9iBMNSgZAqgGYKx2pSQAuLLbvrZvd9c4838buk91iJKp2Zwa9RpSU7FXdczXCmLtEHY8keGmOGOIuYwd2ttbHITQ89XCWfUWwdtmmSoy4t0BecUXedBxIuihuICDq63vK0Jj%2BpCIP00Ta9o1p4ixNgFroi5EQZDW0twsnI6tDG0aZ0iwfG7RVFcg%2BQ0UeTxMI58cKzEShL6AsqLLex%2FYPB80uhqOtobS0LOqJmomMs6EGSykGW6y5vB5m1TWf%2FufQOMIHq8cQGOqUBtQPWxy1bq%2BfB3Wijo88xibtWpuqyDEwKu5BNPqR45ct3ECNiAIr%2BGsPyn4hTaJpCamIGPDpM3aVjV5CQ1opq9FSvTsSIaybeQh5VNKf9g4zpElOVnHnJxbxLsLaAaXCY2y2%2BmOwxL1LESZxfEHvxWU6j51L0DG3ic29Qj9FFltMSMZwuHIEEF%2BdmfVnsiFY8vreU%2Br%2ByQ%2FiIT81p9htyAsyHFgcW&X-Amz-Signature=294e2d4c9a126881cf86fd26707d7adcb7f41bf9ae050f2d9b72f5e11551c7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRVDAMW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQoe4CcvO5DhsxbWOx%2B7S9RkTnc4D3YyBAh7sxkzzfQIgBGVIhCmAA6JtxRnCWHFog85KCWKeNuECSc9LUoUK9Bwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOT7vavaJxP3AKfaGCrcA%2F0aMzcCRuOmbGU9%2BSngCCgO3P1qu72cwI2f5tLZ537I21clS4UTinXs0v%2F0gExGWROvmn%2BZiqCtbF9HMPJetx%2FFFNTLKYbb3FEnmoQQa9BMIjdHK7CPf6toiQymgq0eEoBZx6jFkvNU6DQzAGU2Sks6diJ93qBp3uDfOULgQCW9E9XAm01Az%2FBeJQ7zLMHY%2BLVdsvnTGnSu%2FfMxYvfMgmX2hmOyffaS1X89WZzvz%2FwuUbdwmYri%2BMFTAwg677cThI%2FZejHgj189K%2F%2BmXv73t1%2F5Y6JLz4yLZ1zR9yOCwo0F4EdLpd5Q4U051jJTqRjcL2eJk04f0zqnH89mgPaQKrHkVLBtPKgOUgarn0FV6bmKCKzg8prqTqzzLV9iBMNSgZAqgGYKx2pSQAuLLbvrZvd9c4838buk91iJKp2Zwa9RpSU7FXdczXCmLtEHY8keGmOGOIuYwd2ttbHITQ89XCWfUWwdtmmSoy4t0BecUXedBxIuihuICDq63vK0Jj%2BpCIP00Ta9o1p4ixNgFroi5EQZDW0twsnI6tDG0aZ0iwfG7RVFcg%2BQ0UeTxMI58cKzEShL6AsqLLex%2FYPB80uhqOtobS0LOqJmomMs6EGSykGW6y5vB5m1TWf%2FufQOMIHq8cQGOqUBtQPWxy1bq%2BfB3Wijo88xibtWpuqyDEwKu5BNPqR45ct3ECNiAIr%2BGsPyn4hTaJpCamIGPDpM3aVjV5CQ1opq9FSvTsSIaybeQh5VNKf9g4zpElOVnHnJxbxLsLaAaXCY2y2%2BmOwxL1LESZxfEHvxWU6j51L0DG3ic29Qj9FFltMSMZwuHIEEF%2BdmfVnsiFY8vreU%2Br%2ByQ%2FiIT81p9htyAsyHFgcW&X-Amz-Signature=14f68314f74989220359bb6fc4f20aef06376e1ed7504293ee38a301897e40c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRVDAMW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQoe4CcvO5DhsxbWOx%2B7S9RkTnc4D3YyBAh7sxkzzfQIgBGVIhCmAA6JtxRnCWHFog85KCWKeNuECSc9LUoUK9Bwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOT7vavaJxP3AKfaGCrcA%2F0aMzcCRuOmbGU9%2BSngCCgO3P1qu72cwI2f5tLZ537I21clS4UTinXs0v%2F0gExGWROvmn%2BZiqCtbF9HMPJetx%2FFFNTLKYbb3FEnmoQQa9BMIjdHK7CPf6toiQymgq0eEoBZx6jFkvNU6DQzAGU2Sks6diJ93qBp3uDfOULgQCW9E9XAm01Az%2FBeJQ7zLMHY%2BLVdsvnTGnSu%2FfMxYvfMgmX2hmOyffaS1X89WZzvz%2FwuUbdwmYri%2BMFTAwg677cThI%2FZejHgj189K%2F%2BmXv73t1%2F5Y6JLz4yLZ1zR9yOCwo0F4EdLpd5Q4U051jJTqRjcL2eJk04f0zqnH89mgPaQKrHkVLBtPKgOUgarn0FV6bmKCKzg8prqTqzzLV9iBMNSgZAqgGYKx2pSQAuLLbvrZvd9c4838buk91iJKp2Zwa9RpSU7FXdczXCmLtEHY8keGmOGOIuYwd2ttbHITQ89XCWfUWwdtmmSoy4t0BecUXedBxIuihuICDq63vK0Jj%2BpCIP00Ta9o1p4ixNgFroi5EQZDW0twsnI6tDG0aZ0iwfG7RVFcg%2BQ0UeTxMI58cKzEShL6AsqLLex%2FYPB80uhqOtobS0LOqJmomMs6EGSykGW6y5vB5m1TWf%2FufQOMIHq8cQGOqUBtQPWxy1bq%2BfB3Wijo88xibtWpuqyDEwKu5BNPqR45ct3ECNiAIr%2BGsPyn4hTaJpCamIGPDpM3aVjV5CQ1opq9FSvTsSIaybeQh5VNKf9g4zpElOVnHnJxbxLsLaAaXCY2y2%2BmOwxL1LESZxfEHvxWU6j51L0DG3ic29Qj9FFltMSMZwuHIEEF%2BdmfVnsiFY8vreU%2Br%2ByQ%2FiIT81p9htyAsyHFgcW&X-Amz-Signature=e7cf06d5cc79a54a3176b67e7b21900f54a6c039aeae7c5ea83d29effb452e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRVDAMW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQoe4CcvO5DhsxbWOx%2B7S9RkTnc4D3YyBAh7sxkzzfQIgBGVIhCmAA6JtxRnCWHFog85KCWKeNuECSc9LUoUK9Bwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOT7vavaJxP3AKfaGCrcA%2F0aMzcCRuOmbGU9%2BSngCCgO3P1qu72cwI2f5tLZ537I21clS4UTinXs0v%2F0gExGWROvmn%2BZiqCtbF9HMPJetx%2FFFNTLKYbb3FEnmoQQa9BMIjdHK7CPf6toiQymgq0eEoBZx6jFkvNU6DQzAGU2Sks6diJ93qBp3uDfOULgQCW9E9XAm01Az%2FBeJQ7zLMHY%2BLVdsvnTGnSu%2FfMxYvfMgmX2hmOyffaS1X89WZzvz%2FwuUbdwmYri%2BMFTAwg677cThI%2FZejHgj189K%2F%2BmXv73t1%2F5Y6JLz4yLZ1zR9yOCwo0F4EdLpd5Q4U051jJTqRjcL2eJk04f0zqnH89mgPaQKrHkVLBtPKgOUgarn0FV6bmKCKzg8prqTqzzLV9iBMNSgZAqgGYKx2pSQAuLLbvrZvd9c4838buk91iJKp2Zwa9RpSU7FXdczXCmLtEHY8keGmOGOIuYwd2ttbHITQ89XCWfUWwdtmmSoy4t0BecUXedBxIuihuICDq63vK0Jj%2BpCIP00Ta9o1p4ixNgFroi5EQZDW0twsnI6tDG0aZ0iwfG7RVFcg%2BQ0UeTxMI58cKzEShL6AsqLLex%2FYPB80uhqOtobS0LOqJmomMs6EGSykGW6y5vB5m1TWf%2FufQOMIHq8cQGOqUBtQPWxy1bq%2BfB3Wijo88xibtWpuqyDEwKu5BNPqR45ct3ECNiAIr%2BGsPyn4hTaJpCamIGPDpM3aVjV5CQ1opq9FSvTsSIaybeQh5VNKf9g4zpElOVnHnJxbxLsLaAaXCY2y2%2BmOwxL1LESZxfEHvxWU6j51L0DG3ic29Qj9FFltMSMZwuHIEEF%2BdmfVnsiFY8vreU%2Br%2ByQ%2FiIT81p9htyAsyHFgcW&X-Amz-Signature=d54fff73f178450ce1cfeab9de82b90c7b10ec73eddecde4fa514226a4beeef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRVDAMW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQoe4CcvO5DhsxbWOx%2B7S9RkTnc4D3YyBAh7sxkzzfQIgBGVIhCmAA6JtxRnCWHFog85KCWKeNuECSc9LUoUK9Bwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOT7vavaJxP3AKfaGCrcA%2F0aMzcCRuOmbGU9%2BSngCCgO3P1qu72cwI2f5tLZ537I21clS4UTinXs0v%2F0gExGWROvmn%2BZiqCtbF9HMPJetx%2FFFNTLKYbb3FEnmoQQa9BMIjdHK7CPf6toiQymgq0eEoBZx6jFkvNU6DQzAGU2Sks6diJ93qBp3uDfOULgQCW9E9XAm01Az%2FBeJQ7zLMHY%2BLVdsvnTGnSu%2FfMxYvfMgmX2hmOyffaS1X89WZzvz%2FwuUbdwmYri%2BMFTAwg677cThI%2FZejHgj189K%2F%2BmXv73t1%2F5Y6JLz4yLZ1zR9yOCwo0F4EdLpd5Q4U051jJTqRjcL2eJk04f0zqnH89mgPaQKrHkVLBtPKgOUgarn0FV6bmKCKzg8prqTqzzLV9iBMNSgZAqgGYKx2pSQAuLLbvrZvd9c4838buk91iJKp2Zwa9RpSU7FXdczXCmLtEHY8keGmOGOIuYwd2ttbHITQ89XCWfUWwdtmmSoy4t0BecUXedBxIuihuICDq63vK0Jj%2BpCIP00Ta9o1p4ixNgFroi5EQZDW0twsnI6tDG0aZ0iwfG7RVFcg%2BQ0UeTxMI58cKzEShL6AsqLLex%2FYPB80uhqOtobS0LOqJmomMs6EGSykGW6y5vB5m1TWf%2FufQOMIHq8cQGOqUBtQPWxy1bq%2BfB3Wijo88xibtWpuqyDEwKu5BNPqR45ct3ECNiAIr%2BGsPyn4hTaJpCamIGPDpM3aVjV5CQ1opq9FSvTsSIaybeQh5VNKf9g4zpElOVnHnJxbxLsLaAaXCY2y2%2BmOwxL1LESZxfEHvxWU6j51L0DG3ic29Qj9FFltMSMZwuHIEEF%2BdmfVnsiFY8vreU%2Br%2ByQ%2FiIT81p9htyAsyHFgcW&X-Amz-Signature=128065d060ee3a76eb863357efded20e8b1bf7acc29d4ed856faac08433944ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRVDAMW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQoe4CcvO5DhsxbWOx%2B7S9RkTnc4D3YyBAh7sxkzzfQIgBGVIhCmAA6JtxRnCWHFog85KCWKeNuECSc9LUoUK9Bwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOT7vavaJxP3AKfaGCrcA%2F0aMzcCRuOmbGU9%2BSngCCgO3P1qu72cwI2f5tLZ537I21clS4UTinXs0v%2F0gExGWROvmn%2BZiqCtbF9HMPJetx%2FFFNTLKYbb3FEnmoQQa9BMIjdHK7CPf6toiQymgq0eEoBZx6jFkvNU6DQzAGU2Sks6diJ93qBp3uDfOULgQCW9E9XAm01Az%2FBeJQ7zLMHY%2BLVdsvnTGnSu%2FfMxYvfMgmX2hmOyffaS1X89WZzvz%2FwuUbdwmYri%2BMFTAwg677cThI%2FZejHgj189K%2F%2BmXv73t1%2F5Y6JLz4yLZ1zR9yOCwo0F4EdLpd5Q4U051jJTqRjcL2eJk04f0zqnH89mgPaQKrHkVLBtPKgOUgarn0FV6bmKCKzg8prqTqzzLV9iBMNSgZAqgGYKx2pSQAuLLbvrZvd9c4838buk91iJKp2Zwa9RpSU7FXdczXCmLtEHY8keGmOGOIuYwd2ttbHITQ89XCWfUWwdtmmSoy4t0BecUXedBxIuihuICDq63vK0Jj%2BpCIP00Ta9o1p4ixNgFroi5EQZDW0twsnI6tDG0aZ0iwfG7RVFcg%2BQ0UeTxMI58cKzEShL6AsqLLex%2FYPB80uhqOtobS0LOqJmomMs6EGSykGW6y5vB5m1TWf%2FufQOMIHq8cQGOqUBtQPWxy1bq%2BfB3Wijo88xibtWpuqyDEwKu5BNPqR45ct3ECNiAIr%2BGsPyn4hTaJpCamIGPDpM3aVjV5CQ1opq9FSvTsSIaybeQh5VNKf9g4zpElOVnHnJxbxLsLaAaXCY2y2%2BmOwxL1LESZxfEHvxWU6j51L0DG3ic29Qj9FFltMSMZwuHIEEF%2BdmfVnsiFY8vreU%2Br%2ByQ%2FiIT81p9htyAsyHFgcW&X-Amz-Signature=bab8916d30eca19d1a6091f8cb41589b0cb504d44267e5113ccffacf096b578c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRVDAMW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQoe4CcvO5DhsxbWOx%2B7S9RkTnc4D3YyBAh7sxkzzfQIgBGVIhCmAA6JtxRnCWHFog85KCWKeNuECSc9LUoUK9Bwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOT7vavaJxP3AKfaGCrcA%2F0aMzcCRuOmbGU9%2BSngCCgO3P1qu72cwI2f5tLZ537I21clS4UTinXs0v%2F0gExGWROvmn%2BZiqCtbF9HMPJetx%2FFFNTLKYbb3FEnmoQQa9BMIjdHK7CPf6toiQymgq0eEoBZx6jFkvNU6DQzAGU2Sks6diJ93qBp3uDfOULgQCW9E9XAm01Az%2FBeJQ7zLMHY%2BLVdsvnTGnSu%2FfMxYvfMgmX2hmOyffaS1X89WZzvz%2FwuUbdwmYri%2BMFTAwg677cThI%2FZejHgj189K%2F%2BmXv73t1%2F5Y6JLz4yLZ1zR9yOCwo0F4EdLpd5Q4U051jJTqRjcL2eJk04f0zqnH89mgPaQKrHkVLBtPKgOUgarn0FV6bmKCKzg8prqTqzzLV9iBMNSgZAqgGYKx2pSQAuLLbvrZvd9c4838buk91iJKp2Zwa9RpSU7FXdczXCmLtEHY8keGmOGOIuYwd2ttbHITQ89XCWfUWwdtmmSoy4t0BecUXedBxIuihuICDq63vK0Jj%2BpCIP00Ta9o1p4ixNgFroi5EQZDW0twsnI6tDG0aZ0iwfG7RVFcg%2BQ0UeTxMI58cKzEShL6AsqLLex%2FYPB80uhqOtobS0LOqJmomMs6EGSykGW6y5vB5m1TWf%2FufQOMIHq8cQGOqUBtQPWxy1bq%2BfB3Wijo88xibtWpuqyDEwKu5BNPqR45ct3ECNiAIr%2BGsPyn4hTaJpCamIGPDpM3aVjV5CQ1opq9FSvTsSIaybeQh5VNKf9g4zpElOVnHnJxbxLsLaAaXCY2y2%2BmOwxL1LESZxfEHvxWU6j51L0DG3ic29Qj9FFltMSMZwuHIEEF%2BdmfVnsiFY8vreU%2Br%2ByQ%2FiIT81p9htyAsyHFgcW&X-Amz-Signature=b4d06eba63d8625f23334772a10ab264d16ba22dcefdd3d6b5ff614d56a562e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRVDAMW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQoe4CcvO5DhsxbWOx%2B7S9RkTnc4D3YyBAh7sxkzzfQIgBGVIhCmAA6JtxRnCWHFog85KCWKeNuECSc9LUoUK9Bwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOT7vavaJxP3AKfaGCrcA%2F0aMzcCRuOmbGU9%2BSngCCgO3P1qu72cwI2f5tLZ537I21clS4UTinXs0v%2F0gExGWROvmn%2BZiqCtbF9HMPJetx%2FFFNTLKYbb3FEnmoQQa9BMIjdHK7CPf6toiQymgq0eEoBZx6jFkvNU6DQzAGU2Sks6diJ93qBp3uDfOULgQCW9E9XAm01Az%2FBeJQ7zLMHY%2BLVdsvnTGnSu%2FfMxYvfMgmX2hmOyffaS1X89WZzvz%2FwuUbdwmYri%2BMFTAwg677cThI%2FZejHgj189K%2F%2BmXv73t1%2F5Y6JLz4yLZ1zR9yOCwo0F4EdLpd5Q4U051jJTqRjcL2eJk04f0zqnH89mgPaQKrHkVLBtPKgOUgarn0FV6bmKCKzg8prqTqzzLV9iBMNSgZAqgGYKx2pSQAuLLbvrZvd9c4838buk91iJKp2Zwa9RpSU7FXdczXCmLtEHY8keGmOGOIuYwd2ttbHITQ89XCWfUWwdtmmSoy4t0BecUXedBxIuihuICDq63vK0Jj%2BpCIP00Ta9o1p4ixNgFroi5EQZDW0twsnI6tDG0aZ0iwfG7RVFcg%2BQ0UeTxMI58cKzEShL6AsqLLex%2FYPB80uhqOtobS0LOqJmomMs6EGSykGW6y5vB5m1TWf%2FufQOMIHq8cQGOqUBtQPWxy1bq%2BfB3Wijo88xibtWpuqyDEwKu5BNPqR45ct3ECNiAIr%2BGsPyn4hTaJpCamIGPDpM3aVjV5CQ1opq9FSvTsSIaybeQh5VNKf9g4zpElOVnHnJxbxLsLaAaXCY2y2%2BmOwxL1LESZxfEHvxWU6j51L0DG3ic29Qj9FFltMSMZwuHIEEF%2BdmfVnsiFY8vreU%2Br%2ByQ%2FiIT81p9htyAsyHFgcW&X-Amz-Signature=f0167a7486cb7cf89e17c785916838a40082391db9e984c7798f4ee823349634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRVDAMW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQoe4CcvO5DhsxbWOx%2B7S9RkTnc4D3YyBAh7sxkzzfQIgBGVIhCmAA6JtxRnCWHFog85KCWKeNuECSc9LUoUK9Bwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOT7vavaJxP3AKfaGCrcA%2F0aMzcCRuOmbGU9%2BSngCCgO3P1qu72cwI2f5tLZ537I21clS4UTinXs0v%2F0gExGWROvmn%2BZiqCtbF9HMPJetx%2FFFNTLKYbb3FEnmoQQa9BMIjdHK7CPf6toiQymgq0eEoBZx6jFkvNU6DQzAGU2Sks6diJ93qBp3uDfOULgQCW9E9XAm01Az%2FBeJQ7zLMHY%2BLVdsvnTGnSu%2FfMxYvfMgmX2hmOyffaS1X89WZzvz%2FwuUbdwmYri%2BMFTAwg677cThI%2FZejHgj189K%2F%2BmXv73t1%2F5Y6JLz4yLZ1zR9yOCwo0F4EdLpd5Q4U051jJTqRjcL2eJk04f0zqnH89mgPaQKrHkVLBtPKgOUgarn0FV6bmKCKzg8prqTqzzLV9iBMNSgZAqgGYKx2pSQAuLLbvrZvd9c4838buk91iJKp2Zwa9RpSU7FXdczXCmLtEHY8keGmOGOIuYwd2ttbHITQ89XCWfUWwdtmmSoy4t0BecUXedBxIuihuICDq63vK0Jj%2BpCIP00Ta9o1p4ixNgFroi5EQZDW0twsnI6tDG0aZ0iwfG7RVFcg%2BQ0UeTxMI58cKzEShL6AsqLLex%2FYPB80uhqOtobS0LOqJmomMs6EGSykGW6y5vB5m1TWf%2FufQOMIHq8cQGOqUBtQPWxy1bq%2BfB3Wijo88xibtWpuqyDEwKu5BNPqR45ct3ECNiAIr%2BGsPyn4hTaJpCamIGPDpM3aVjV5CQ1opq9FSvTsSIaybeQh5VNKf9g4zpElOVnHnJxbxLsLaAaXCY2y2%2BmOwxL1LESZxfEHvxWU6j51L0DG3ic29Qj9FFltMSMZwuHIEEF%2BdmfVnsiFY8vreU%2Br%2ByQ%2FiIT81p9htyAsyHFgcW&X-Amz-Signature=3de2baf48e4b9c8e5d8eb5887bcd826c6104ce191f6cc47ef3137958972e7fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRVDAMW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQoe4CcvO5DhsxbWOx%2B7S9RkTnc4D3YyBAh7sxkzzfQIgBGVIhCmAA6JtxRnCWHFog85KCWKeNuECSc9LUoUK9Bwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOT7vavaJxP3AKfaGCrcA%2F0aMzcCRuOmbGU9%2BSngCCgO3P1qu72cwI2f5tLZ537I21clS4UTinXs0v%2F0gExGWROvmn%2BZiqCtbF9HMPJetx%2FFFNTLKYbb3FEnmoQQa9BMIjdHK7CPf6toiQymgq0eEoBZx6jFkvNU6DQzAGU2Sks6diJ93qBp3uDfOULgQCW9E9XAm01Az%2FBeJQ7zLMHY%2BLVdsvnTGnSu%2FfMxYvfMgmX2hmOyffaS1X89WZzvz%2FwuUbdwmYri%2BMFTAwg677cThI%2FZejHgj189K%2F%2BmXv73t1%2F5Y6JLz4yLZ1zR9yOCwo0F4EdLpd5Q4U051jJTqRjcL2eJk04f0zqnH89mgPaQKrHkVLBtPKgOUgarn0FV6bmKCKzg8prqTqzzLV9iBMNSgZAqgGYKx2pSQAuLLbvrZvd9c4838buk91iJKp2Zwa9RpSU7FXdczXCmLtEHY8keGmOGOIuYwd2ttbHITQ89XCWfUWwdtmmSoy4t0BecUXedBxIuihuICDq63vK0Jj%2BpCIP00Ta9o1p4ixNgFroi5EQZDW0twsnI6tDG0aZ0iwfG7RVFcg%2BQ0UeTxMI58cKzEShL6AsqLLex%2FYPB80uhqOtobS0LOqJmomMs6EGSykGW6y5vB5m1TWf%2FufQOMIHq8cQGOqUBtQPWxy1bq%2BfB3Wijo88xibtWpuqyDEwKu5BNPqR45ct3ECNiAIr%2BGsPyn4hTaJpCamIGPDpM3aVjV5CQ1opq9FSvTsSIaybeQh5VNKf9g4zpElOVnHnJxbxLsLaAaXCY2y2%2BmOwxL1LESZxfEHvxWU6j51L0DG3ic29Qj9FFltMSMZwuHIEEF%2BdmfVnsiFY8vreU%2Br%2ByQ%2FiIT81p9htyAsyHFgcW&X-Amz-Signature=85635e59c37db0aad15168bb2b030b4f5828acb2125e6c4c46338c4dbff82bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KRVDAMW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T121731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfQoe4CcvO5DhsxbWOx%2B7S9RkTnc4D3YyBAh7sxkzzfQIgBGVIhCmAA6JtxRnCWHFog85KCWKeNuECSc9LUoUK9Bwq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDOT7vavaJxP3AKfaGCrcA%2F0aMzcCRuOmbGU9%2BSngCCgO3P1qu72cwI2f5tLZ537I21clS4UTinXs0v%2F0gExGWROvmn%2BZiqCtbF9HMPJetx%2FFFNTLKYbb3FEnmoQQa9BMIjdHK7CPf6toiQymgq0eEoBZx6jFkvNU6DQzAGU2Sks6diJ93qBp3uDfOULgQCW9E9XAm01Az%2FBeJQ7zLMHY%2BLVdsvnTGnSu%2FfMxYvfMgmX2hmOyffaS1X89WZzvz%2FwuUbdwmYri%2BMFTAwg677cThI%2FZejHgj189K%2F%2BmXv73t1%2F5Y6JLz4yLZ1zR9yOCwo0F4EdLpd5Q4U051jJTqRjcL2eJk04f0zqnH89mgPaQKrHkVLBtPKgOUgarn0FV6bmKCKzg8prqTqzzLV9iBMNSgZAqgGYKx2pSQAuLLbvrZvd9c4838buk91iJKp2Zwa9RpSU7FXdczXCmLtEHY8keGmOGOIuYwd2ttbHITQ89XCWfUWwdtmmSoy4t0BecUXedBxIuihuICDq63vK0Jj%2BpCIP00Ta9o1p4ixNgFroi5EQZDW0twsnI6tDG0aZ0iwfG7RVFcg%2BQ0UeTxMI58cKzEShL6AsqLLex%2FYPB80uhqOtobS0LOqJmomMs6EGSykGW6y5vB5m1TWf%2FufQOMIHq8cQGOqUBtQPWxy1bq%2BfB3Wijo88xibtWpuqyDEwKu5BNPqR45ct3ECNiAIr%2BGsPyn4hTaJpCamIGPDpM3aVjV5CQ1opq9FSvTsSIaybeQh5VNKf9g4zpElOVnHnJxbxLsLaAaXCY2y2%2BmOwxL1LESZxfEHvxWU6j51L0DG3ic29Qj9FFltMSMZwuHIEEF%2BdmfVnsiFY8vreU%2Br%2ByQ%2FiIT81p9htyAsyHFgcW&X-Amz-Signature=e69e3d29be8907e3b90de2d8348bb2f602cea5dfc27b92b872935b4edeb47316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
