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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU3KVIN%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCxg7tWi0z2SOKUv0%2BXlczN2Q3aQ8sJXwEtO3aH8L3CNQIgN3SRHy707DFRmQSrNmW2JvurKesahXdP1OvSLNEiLBwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFTKrlV5o6oynlFBCrcA4ZaLiGBvF6EdhoN%2FRdBkkyzGJ86%2Fk0k8xUuLm9HHAVLpc48hG0v85V0hpOryUH1iFT0jZcqyFzNVFUhpJp5wrEGlaIb8wtUTB%2BdQ3MBh1UjkdvMybD6dnl%2F%2B94ynK2qRIgwXRR6fRUjhbPatOq3JYnQp%2FYFxgAkwdPZqiabrZUGcpgY%2FTNT635VE88accE7G3DpSd%2Fa1obh%2Bel7QKBYEHCCGPBaf6nGRZnMa7cJ4cSNZwcL1PTc2kQCGI7lKmgWQx0vDD7IZGK3AwHKu%2FcApr7C3PXa3d30aDlLtGdWRxql8gBSI5H8l%2BjJ4%2BjtLpdYDJXF47hxiPmx%2FKRyMeg26Ya5qPGyrrqdmicLfdZKqVzB04QVw6aPVu%2FK8sPVNHsWG%2FEJgmA6QTpocYYqxgtcQjNgh0UE6Vm7fk5V1ke0Hf1oSy4nTesS%2BLebWeNBgz3nkKLO3DXNEt4WaMqyft%2BVg8jsZHmiZTnOYv0xGsGPxeNP%2FxJM%2BWekNrDEN%2FC2GtBZ3fUgBFHYklo%2FVkNOrz9aL8n6D4l39tyGACfCzts8e04reHLtfVe5DerIkXiIdFxHiLS3LB%2FnVSpi7vtxjoo35Dk4wlOjj0R25ckg2XQoXqgK2REfnQHb%2Btv%2BL%2BGSMOnrnM4GOqUBM3xKc9fmQq9TWHYgWbTL9RCF8ymT%2BoVVP2%2B3kUjzi9U3pQnESy7bUTs%2BNF1NcoENx%2BzjmjAcP1EKafUsOcRHQP%2FJzaliCZtIEJ0f1nk2BLkxi17mayO3VOzLZYJCn%2BtqxpzDr%2FAKlBnNo7EwBiGW1fUdcg4Sb3DkDdtp90DjBvmcpPj3LfIip6pf2coPZ%2BNTb4ZpdT7fEQYE%2Buw2ihbPY%2Blq%2BXuV&X-Amz-Signature=f7c209f1d1a9caa4029b02cd081e5609bb3789403c8e195a77237da7d82b40b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU3KVIN%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCxg7tWi0z2SOKUv0%2BXlczN2Q3aQ8sJXwEtO3aH8L3CNQIgN3SRHy707DFRmQSrNmW2JvurKesahXdP1OvSLNEiLBwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFTKrlV5o6oynlFBCrcA4ZaLiGBvF6EdhoN%2FRdBkkyzGJ86%2Fk0k8xUuLm9HHAVLpc48hG0v85V0hpOryUH1iFT0jZcqyFzNVFUhpJp5wrEGlaIb8wtUTB%2BdQ3MBh1UjkdvMybD6dnl%2F%2B94ynK2qRIgwXRR6fRUjhbPatOq3JYnQp%2FYFxgAkwdPZqiabrZUGcpgY%2FTNT635VE88accE7G3DpSd%2Fa1obh%2Bel7QKBYEHCCGPBaf6nGRZnMa7cJ4cSNZwcL1PTc2kQCGI7lKmgWQx0vDD7IZGK3AwHKu%2FcApr7C3PXa3d30aDlLtGdWRxql8gBSI5H8l%2BjJ4%2BjtLpdYDJXF47hxiPmx%2FKRyMeg26Ya5qPGyrrqdmicLfdZKqVzB04QVw6aPVu%2FK8sPVNHsWG%2FEJgmA6QTpocYYqxgtcQjNgh0UE6Vm7fk5V1ke0Hf1oSy4nTesS%2BLebWeNBgz3nkKLO3DXNEt4WaMqyft%2BVg8jsZHmiZTnOYv0xGsGPxeNP%2FxJM%2BWekNrDEN%2FC2GtBZ3fUgBFHYklo%2FVkNOrz9aL8n6D4l39tyGACfCzts8e04reHLtfVe5DerIkXiIdFxHiLS3LB%2FnVSpi7vtxjoo35Dk4wlOjj0R25ckg2XQoXqgK2REfnQHb%2Btv%2BL%2BGSMOnrnM4GOqUBM3xKc9fmQq9TWHYgWbTL9RCF8ymT%2BoVVP2%2B3kUjzi9U3pQnESy7bUTs%2BNF1NcoENx%2BzjmjAcP1EKafUsOcRHQP%2FJzaliCZtIEJ0f1nk2BLkxi17mayO3VOzLZYJCn%2BtqxpzDr%2FAKlBnNo7EwBiGW1fUdcg4Sb3DkDdtp90DjBvmcpPj3LfIip6pf2coPZ%2BNTb4ZpdT7fEQYE%2Buw2ihbPY%2Blq%2BXuV&X-Amz-Signature=b08f3cf8305dcb62f4cb42d41d9bb4abc6d5bd4c678e16cbeca72aaaa47ed4f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU3KVIN%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCxg7tWi0z2SOKUv0%2BXlczN2Q3aQ8sJXwEtO3aH8L3CNQIgN3SRHy707DFRmQSrNmW2JvurKesahXdP1OvSLNEiLBwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFTKrlV5o6oynlFBCrcA4ZaLiGBvF6EdhoN%2FRdBkkyzGJ86%2Fk0k8xUuLm9HHAVLpc48hG0v85V0hpOryUH1iFT0jZcqyFzNVFUhpJp5wrEGlaIb8wtUTB%2BdQ3MBh1UjkdvMybD6dnl%2F%2B94ynK2qRIgwXRR6fRUjhbPatOq3JYnQp%2FYFxgAkwdPZqiabrZUGcpgY%2FTNT635VE88accE7G3DpSd%2Fa1obh%2Bel7QKBYEHCCGPBaf6nGRZnMa7cJ4cSNZwcL1PTc2kQCGI7lKmgWQx0vDD7IZGK3AwHKu%2FcApr7C3PXa3d30aDlLtGdWRxql8gBSI5H8l%2BjJ4%2BjtLpdYDJXF47hxiPmx%2FKRyMeg26Ya5qPGyrrqdmicLfdZKqVzB04QVw6aPVu%2FK8sPVNHsWG%2FEJgmA6QTpocYYqxgtcQjNgh0UE6Vm7fk5V1ke0Hf1oSy4nTesS%2BLebWeNBgz3nkKLO3DXNEt4WaMqyft%2BVg8jsZHmiZTnOYv0xGsGPxeNP%2FxJM%2BWekNrDEN%2FC2GtBZ3fUgBFHYklo%2FVkNOrz9aL8n6D4l39tyGACfCzts8e04reHLtfVe5DerIkXiIdFxHiLS3LB%2FnVSpi7vtxjoo35Dk4wlOjj0R25ckg2XQoXqgK2REfnQHb%2Btv%2BL%2BGSMOnrnM4GOqUBM3xKc9fmQq9TWHYgWbTL9RCF8ymT%2BoVVP2%2B3kUjzi9U3pQnESy7bUTs%2BNF1NcoENx%2BzjmjAcP1EKafUsOcRHQP%2FJzaliCZtIEJ0f1nk2BLkxi17mayO3VOzLZYJCn%2BtqxpzDr%2FAKlBnNo7EwBiGW1fUdcg4Sb3DkDdtp90DjBvmcpPj3LfIip6pf2coPZ%2BNTb4ZpdT7fEQYE%2Buw2ihbPY%2Blq%2BXuV&X-Amz-Signature=b1f78bc0eadc211275a66a3b2d2dd8d90ecf06ae092bd5736d197e72ad510b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU3KVIN%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCxg7tWi0z2SOKUv0%2BXlczN2Q3aQ8sJXwEtO3aH8L3CNQIgN3SRHy707DFRmQSrNmW2JvurKesahXdP1OvSLNEiLBwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFTKrlV5o6oynlFBCrcA4ZaLiGBvF6EdhoN%2FRdBkkyzGJ86%2Fk0k8xUuLm9HHAVLpc48hG0v85V0hpOryUH1iFT0jZcqyFzNVFUhpJp5wrEGlaIb8wtUTB%2BdQ3MBh1UjkdvMybD6dnl%2F%2B94ynK2qRIgwXRR6fRUjhbPatOq3JYnQp%2FYFxgAkwdPZqiabrZUGcpgY%2FTNT635VE88accE7G3DpSd%2Fa1obh%2Bel7QKBYEHCCGPBaf6nGRZnMa7cJ4cSNZwcL1PTc2kQCGI7lKmgWQx0vDD7IZGK3AwHKu%2FcApr7C3PXa3d30aDlLtGdWRxql8gBSI5H8l%2BjJ4%2BjtLpdYDJXF47hxiPmx%2FKRyMeg26Ya5qPGyrrqdmicLfdZKqVzB04QVw6aPVu%2FK8sPVNHsWG%2FEJgmA6QTpocYYqxgtcQjNgh0UE6Vm7fk5V1ke0Hf1oSy4nTesS%2BLebWeNBgz3nkKLO3DXNEt4WaMqyft%2BVg8jsZHmiZTnOYv0xGsGPxeNP%2FxJM%2BWekNrDEN%2FC2GtBZ3fUgBFHYklo%2FVkNOrz9aL8n6D4l39tyGACfCzts8e04reHLtfVe5DerIkXiIdFxHiLS3LB%2FnVSpi7vtxjoo35Dk4wlOjj0R25ckg2XQoXqgK2REfnQHb%2Btv%2BL%2BGSMOnrnM4GOqUBM3xKc9fmQq9TWHYgWbTL9RCF8ymT%2BoVVP2%2B3kUjzi9U3pQnESy7bUTs%2BNF1NcoENx%2BzjmjAcP1EKafUsOcRHQP%2FJzaliCZtIEJ0f1nk2BLkxi17mayO3VOzLZYJCn%2BtqxpzDr%2FAKlBnNo7EwBiGW1fUdcg4Sb3DkDdtp90DjBvmcpPj3LfIip6pf2coPZ%2BNTb4ZpdT7fEQYE%2Buw2ihbPY%2Blq%2BXuV&X-Amz-Signature=a99c4f04e8f8eb9111bf3c0c9578679cdcffa5742a31fe881eb194fa6c643480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU3KVIN%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCxg7tWi0z2SOKUv0%2BXlczN2Q3aQ8sJXwEtO3aH8L3CNQIgN3SRHy707DFRmQSrNmW2JvurKesahXdP1OvSLNEiLBwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFTKrlV5o6oynlFBCrcA4ZaLiGBvF6EdhoN%2FRdBkkyzGJ86%2Fk0k8xUuLm9HHAVLpc48hG0v85V0hpOryUH1iFT0jZcqyFzNVFUhpJp5wrEGlaIb8wtUTB%2BdQ3MBh1UjkdvMybD6dnl%2F%2B94ynK2qRIgwXRR6fRUjhbPatOq3JYnQp%2FYFxgAkwdPZqiabrZUGcpgY%2FTNT635VE88accE7G3DpSd%2Fa1obh%2Bel7QKBYEHCCGPBaf6nGRZnMa7cJ4cSNZwcL1PTc2kQCGI7lKmgWQx0vDD7IZGK3AwHKu%2FcApr7C3PXa3d30aDlLtGdWRxql8gBSI5H8l%2BjJ4%2BjtLpdYDJXF47hxiPmx%2FKRyMeg26Ya5qPGyrrqdmicLfdZKqVzB04QVw6aPVu%2FK8sPVNHsWG%2FEJgmA6QTpocYYqxgtcQjNgh0UE6Vm7fk5V1ke0Hf1oSy4nTesS%2BLebWeNBgz3nkKLO3DXNEt4WaMqyft%2BVg8jsZHmiZTnOYv0xGsGPxeNP%2FxJM%2BWekNrDEN%2FC2GtBZ3fUgBFHYklo%2FVkNOrz9aL8n6D4l39tyGACfCzts8e04reHLtfVe5DerIkXiIdFxHiLS3LB%2FnVSpi7vtxjoo35Dk4wlOjj0R25ckg2XQoXqgK2REfnQHb%2Btv%2BL%2BGSMOnrnM4GOqUBM3xKc9fmQq9TWHYgWbTL9RCF8ymT%2BoVVP2%2B3kUjzi9U3pQnESy7bUTs%2BNF1NcoENx%2BzjmjAcP1EKafUsOcRHQP%2FJzaliCZtIEJ0f1nk2BLkxi17mayO3VOzLZYJCn%2BtqxpzDr%2FAKlBnNo7EwBiGW1fUdcg4Sb3DkDdtp90DjBvmcpPj3LfIip6pf2coPZ%2BNTb4ZpdT7fEQYE%2Buw2ihbPY%2Blq%2BXuV&X-Amz-Signature=748324f12e54e498fbfc66088c0268597b8723d6aab197247f04016226394fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU3KVIN%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCxg7tWi0z2SOKUv0%2BXlczN2Q3aQ8sJXwEtO3aH8L3CNQIgN3SRHy707DFRmQSrNmW2JvurKesahXdP1OvSLNEiLBwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFTKrlV5o6oynlFBCrcA4ZaLiGBvF6EdhoN%2FRdBkkyzGJ86%2Fk0k8xUuLm9HHAVLpc48hG0v85V0hpOryUH1iFT0jZcqyFzNVFUhpJp5wrEGlaIb8wtUTB%2BdQ3MBh1UjkdvMybD6dnl%2F%2B94ynK2qRIgwXRR6fRUjhbPatOq3JYnQp%2FYFxgAkwdPZqiabrZUGcpgY%2FTNT635VE88accE7G3DpSd%2Fa1obh%2Bel7QKBYEHCCGPBaf6nGRZnMa7cJ4cSNZwcL1PTc2kQCGI7lKmgWQx0vDD7IZGK3AwHKu%2FcApr7C3PXa3d30aDlLtGdWRxql8gBSI5H8l%2BjJ4%2BjtLpdYDJXF47hxiPmx%2FKRyMeg26Ya5qPGyrrqdmicLfdZKqVzB04QVw6aPVu%2FK8sPVNHsWG%2FEJgmA6QTpocYYqxgtcQjNgh0UE6Vm7fk5V1ke0Hf1oSy4nTesS%2BLebWeNBgz3nkKLO3DXNEt4WaMqyft%2BVg8jsZHmiZTnOYv0xGsGPxeNP%2FxJM%2BWekNrDEN%2FC2GtBZ3fUgBFHYklo%2FVkNOrz9aL8n6D4l39tyGACfCzts8e04reHLtfVe5DerIkXiIdFxHiLS3LB%2FnVSpi7vtxjoo35Dk4wlOjj0R25ckg2XQoXqgK2REfnQHb%2Btv%2BL%2BGSMOnrnM4GOqUBM3xKc9fmQq9TWHYgWbTL9RCF8ymT%2BoVVP2%2B3kUjzi9U3pQnESy7bUTs%2BNF1NcoENx%2BzjmjAcP1EKafUsOcRHQP%2FJzaliCZtIEJ0f1nk2BLkxi17mayO3VOzLZYJCn%2BtqxpzDr%2FAKlBnNo7EwBiGW1fUdcg4Sb3DkDdtp90DjBvmcpPj3LfIip6pf2coPZ%2BNTb4ZpdT7fEQYE%2Buw2ihbPY%2Blq%2BXuV&X-Amz-Signature=55571cb03fa5274d0567e4e25d4b3fd8e16b5a2b3aab0e1822a402a9ff80fea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU3KVIN%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCxg7tWi0z2SOKUv0%2BXlczN2Q3aQ8sJXwEtO3aH8L3CNQIgN3SRHy707DFRmQSrNmW2JvurKesahXdP1OvSLNEiLBwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFTKrlV5o6oynlFBCrcA4ZaLiGBvF6EdhoN%2FRdBkkyzGJ86%2Fk0k8xUuLm9HHAVLpc48hG0v85V0hpOryUH1iFT0jZcqyFzNVFUhpJp5wrEGlaIb8wtUTB%2BdQ3MBh1UjkdvMybD6dnl%2F%2B94ynK2qRIgwXRR6fRUjhbPatOq3JYnQp%2FYFxgAkwdPZqiabrZUGcpgY%2FTNT635VE88accE7G3DpSd%2Fa1obh%2Bel7QKBYEHCCGPBaf6nGRZnMa7cJ4cSNZwcL1PTc2kQCGI7lKmgWQx0vDD7IZGK3AwHKu%2FcApr7C3PXa3d30aDlLtGdWRxql8gBSI5H8l%2BjJ4%2BjtLpdYDJXF47hxiPmx%2FKRyMeg26Ya5qPGyrrqdmicLfdZKqVzB04QVw6aPVu%2FK8sPVNHsWG%2FEJgmA6QTpocYYqxgtcQjNgh0UE6Vm7fk5V1ke0Hf1oSy4nTesS%2BLebWeNBgz3nkKLO3DXNEt4WaMqyft%2BVg8jsZHmiZTnOYv0xGsGPxeNP%2FxJM%2BWekNrDEN%2FC2GtBZ3fUgBFHYklo%2FVkNOrz9aL8n6D4l39tyGACfCzts8e04reHLtfVe5DerIkXiIdFxHiLS3LB%2FnVSpi7vtxjoo35Dk4wlOjj0R25ckg2XQoXqgK2REfnQHb%2Btv%2BL%2BGSMOnrnM4GOqUBM3xKc9fmQq9TWHYgWbTL9RCF8ymT%2BoVVP2%2B3kUjzi9U3pQnESy7bUTs%2BNF1NcoENx%2BzjmjAcP1EKafUsOcRHQP%2FJzaliCZtIEJ0f1nk2BLkxi17mayO3VOzLZYJCn%2BtqxpzDr%2FAKlBnNo7EwBiGW1fUdcg4Sb3DkDdtp90DjBvmcpPj3LfIip6pf2coPZ%2BNTb4ZpdT7fEQYE%2Buw2ihbPY%2Blq%2BXuV&X-Amz-Signature=12dccd0958daec764959e9648791328bceaa40f17e7765052bea50fdb2ef01f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU3KVIN%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCxg7tWi0z2SOKUv0%2BXlczN2Q3aQ8sJXwEtO3aH8L3CNQIgN3SRHy707DFRmQSrNmW2JvurKesahXdP1OvSLNEiLBwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFTKrlV5o6oynlFBCrcA4ZaLiGBvF6EdhoN%2FRdBkkyzGJ86%2Fk0k8xUuLm9HHAVLpc48hG0v85V0hpOryUH1iFT0jZcqyFzNVFUhpJp5wrEGlaIb8wtUTB%2BdQ3MBh1UjkdvMybD6dnl%2F%2B94ynK2qRIgwXRR6fRUjhbPatOq3JYnQp%2FYFxgAkwdPZqiabrZUGcpgY%2FTNT635VE88accE7G3DpSd%2Fa1obh%2Bel7QKBYEHCCGPBaf6nGRZnMa7cJ4cSNZwcL1PTc2kQCGI7lKmgWQx0vDD7IZGK3AwHKu%2FcApr7C3PXa3d30aDlLtGdWRxql8gBSI5H8l%2BjJ4%2BjtLpdYDJXF47hxiPmx%2FKRyMeg26Ya5qPGyrrqdmicLfdZKqVzB04QVw6aPVu%2FK8sPVNHsWG%2FEJgmA6QTpocYYqxgtcQjNgh0UE6Vm7fk5V1ke0Hf1oSy4nTesS%2BLebWeNBgz3nkKLO3DXNEt4WaMqyft%2BVg8jsZHmiZTnOYv0xGsGPxeNP%2FxJM%2BWekNrDEN%2FC2GtBZ3fUgBFHYklo%2FVkNOrz9aL8n6D4l39tyGACfCzts8e04reHLtfVe5DerIkXiIdFxHiLS3LB%2FnVSpi7vtxjoo35Dk4wlOjj0R25ckg2XQoXqgK2REfnQHb%2Btv%2BL%2BGSMOnrnM4GOqUBM3xKc9fmQq9TWHYgWbTL9RCF8ymT%2BoVVP2%2B3kUjzi9U3pQnESy7bUTs%2BNF1NcoENx%2BzjmjAcP1EKafUsOcRHQP%2FJzaliCZtIEJ0f1nk2BLkxi17mayO3VOzLZYJCn%2BtqxpzDr%2FAKlBnNo7EwBiGW1fUdcg4Sb3DkDdtp90DjBvmcpPj3LfIip6pf2coPZ%2BNTb4ZpdT7fEQYE%2Buw2ihbPY%2Blq%2BXuV&X-Amz-Signature=a0f6071f9f84366cbcd176297de7a91f40f248f234ac6bb1d083f2fe80b3cc26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU3KVIN%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCxg7tWi0z2SOKUv0%2BXlczN2Q3aQ8sJXwEtO3aH8L3CNQIgN3SRHy707DFRmQSrNmW2JvurKesahXdP1OvSLNEiLBwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFTKrlV5o6oynlFBCrcA4ZaLiGBvF6EdhoN%2FRdBkkyzGJ86%2Fk0k8xUuLm9HHAVLpc48hG0v85V0hpOryUH1iFT0jZcqyFzNVFUhpJp5wrEGlaIb8wtUTB%2BdQ3MBh1UjkdvMybD6dnl%2F%2B94ynK2qRIgwXRR6fRUjhbPatOq3JYnQp%2FYFxgAkwdPZqiabrZUGcpgY%2FTNT635VE88accE7G3DpSd%2Fa1obh%2Bel7QKBYEHCCGPBaf6nGRZnMa7cJ4cSNZwcL1PTc2kQCGI7lKmgWQx0vDD7IZGK3AwHKu%2FcApr7C3PXa3d30aDlLtGdWRxql8gBSI5H8l%2BjJ4%2BjtLpdYDJXF47hxiPmx%2FKRyMeg26Ya5qPGyrrqdmicLfdZKqVzB04QVw6aPVu%2FK8sPVNHsWG%2FEJgmA6QTpocYYqxgtcQjNgh0UE6Vm7fk5V1ke0Hf1oSy4nTesS%2BLebWeNBgz3nkKLO3DXNEt4WaMqyft%2BVg8jsZHmiZTnOYv0xGsGPxeNP%2FxJM%2BWekNrDEN%2FC2GtBZ3fUgBFHYklo%2FVkNOrz9aL8n6D4l39tyGACfCzts8e04reHLtfVe5DerIkXiIdFxHiLS3LB%2FnVSpi7vtxjoo35Dk4wlOjj0R25ckg2XQoXqgK2REfnQHb%2Btv%2BL%2BGSMOnrnM4GOqUBM3xKc9fmQq9TWHYgWbTL9RCF8ymT%2BoVVP2%2B3kUjzi9U3pQnESy7bUTs%2BNF1NcoENx%2BzjmjAcP1EKafUsOcRHQP%2FJzaliCZtIEJ0f1nk2BLkxi17mayO3VOzLZYJCn%2BtqxpzDr%2FAKlBnNo7EwBiGW1fUdcg4Sb3DkDdtp90DjBvmcpPj3LfIip6pf2coPZ%2BNTb4ZpdT7fEQYE%2Buw2ihbPY%2Blq%2BXuV&X-Amz-Signature=71d11d8eb4011576fa2ce40df664004cba3ef8f73eadea747691d0b0abb8921b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU3KVIN%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCxg7tWi0z2SOKUv0%2BXlczN2Q3aQ8sJXwEtO3aH8L3CNQIgN3SRHy707DFRmQSrNmW2JvurKesahXdP1OvSLNEiLBwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFTKrlV5o6oynlFBCrcA4ZaLiGBvF6EdhoN%2FRdBkkyzGJ86%2Fk0k8xUuLm9HHAVLpc48hG0v85V0hpOryUH1iFT0jZcqyFzNVFUhpJp5wrEGlaIb8wtUTB%2BdQ3MBh1UjkdvMybD6dnl%2F%2B94ynK2qRIgwXRR6fRUjhbPatOq3JYnQp%2FYFxgAkwdPZqiabrZUGcpgY%2FTNT635VE88accE7G3DpSd%2Fa1obh%2Bel7QKBYEHCCGPBaf6nGRZnMa7cJ4cSNZwcL1PTc2kQCGI7lKmgWQx0vDD7IZGK3AwHKu%2FcApr7C3PXa3d30aDlLtGdWRxql8gBSI5H8l%2BjJ4%2BjtLpdYDJXF47hxiPmx%2FKRyMeg26Ya5qPGyrrqdmicLfdZKqVzB04QVw6aPVu%2FK8sPVNHsWG%2FEJgmA6QTpocYYqxgtcQjNgh0UE6Vm7fk5V1ke0Hf1oSy4nTesS%2BLebWeNBgz3nkKLO3DXNEt4WaMqyft%2BVg8jsZHmiZTnOYv0xGsGPxeNP%2FxJM%2BWekNrDEN%2FC2GtBZ3fUgBFHYklo%2FVkNOrz9aL8n6D4l39tyGACfCzts8e04reHLtfVe5DerIkXiIdFxHiLS3LB%2FnVSpi7vtxjoo35Dk4wlOjj0R25ckg2XQoXqgK2REfnQHb%2Btv%2BL%2BGSMOnrnM4GOqUBM3xKc9fmQq9TWHYgWbTL9RCF8ymT%2BoVVP2%2B3kUjzi9U3pQnESy7bUTs%2BNF1NcoENx%2BzjmjAcP1EKafUsOcRHQP%2FJzaliCZtIEJ0f1nk2BLkxi17mayO3VOzLZYJCn%2BtqxpzDr%2FAKlBnNo7EwBiGW1fUdcg4Sb3DkDdtp90DjBvmcpPj3LfIip6pf2coPZ%2BNTb4ZpdT7fEQYE%2Buw2ihbPY%2Blq%2BXuV&X-Amz-Signature=a29ee802554ff2c4818749fc5c82ada5dee42119b7bf593c9f376d2f2ade5a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU3KVIN%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCxg7tWi0z2SOKUv0%2BXlczN2Q3aQ8sJXwEtO3aH8L3CNQIgN3SRHy707DFRmQSrNmW2JvurKesahXdP1OvSLNEiLBwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFTKrlV5o6oynlFBCrcA4ZaLiGBvF6EdhoN%2FRdBkkyzGJ86%2Fk0k8xUuLm9HHAVLpc48hG0v85V0hpOryUH1iFT0jZcqyFzNVFUhpJp5wrEGlaIb8wtUTB%2BdQ3MBh1UjkdvMybD6dnl%2F%2B94ynK2qRIgwXRR6fRUjhbPatOq3JYnQp%2FYFxgAkwdPZqiabrZUGcpgY%2FTNT635VE88accE7G3DpSd%2Fa1obh%2Bel7QKBYEHCCGPBaf6nGRZnMa7cJ4cSNZwcL1PTc2kQCGI7lKmgWQx0vDD7IZGK3AwHKu%2FcApr7C3PXa3d30aDlLtGdWRxql8gBSI5H8l%2BjJ4%2BjtLpdYDJXF47hxiPmx%2FKRyMeg26Ya5qPGyrrqdmicLfdZKqVzB04QVw6aPVu%2FK8sPVNHsWG%2FEJgmA6QTpocYYqxgtcQjNgh0UE6Vm7fk5V1ke0Hf1oSy4nTesS%2BLebWeNBgz3nkKLO3DXNEt4WaMqyft%2BVg8jsZHmiZTnOYv0xGsGPxeNP%2FxJM%2BWekNrDEN%2FC2GtBZ3fUgBFHYklo%2FVkNOrz9aL8n6D4l39tyGACfCzts8e04reHLtfVe5DerIkXiIdFxHiLS3LB%2FnVSpi7vtxjoo35Dk4wlOjj0R25ckg2XQoXqgK2REfnQHb%2Btv%2BL%2BGSMOnrnM4GOqUBM3xKc9fmQq9TWHYgWbTL9RCF8ymT%2BoVVP2%2B3kUjzi9U3pQnESy7bUTs%2BNF1NcoENx%2BzjmjAcP1EKafUsOcRHQP%2FJzaliCZtIEJ0f1nk2BLkxi17mayO3VOzLZYJCn%2BtqxpzDr%2FAKlBnNo7EwBiGW1fUdcg4Sb3DkDdtp90DjBvmcpPj3LfIip6pf2coPZ%2BNTb4ZpdT7fEQYE%2Buw2ihbPY%2Blq%2BXuV&X-Amz-Signature=68c017e257769417af3c28aca23ebfde2b3b5d2b8d25f980c8deda2a897695c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU3KVIN%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCxg7tWi0z2SOKUv0%2BXlczN2Q3aQ8sJXwEtO3aH8L3CNQIgN3SRHy707DFRmQSrNmW2JvurKesahXdP1OvSLNEiLBwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFTKrlV5o6oynlFBCrcA4ZaLiGBvF6EdhoN%2FRdBkkyzGJ86%2Fk0k8xUuLm9HHAVLpc48hG0v85V0hpOryUH1iFT0jZcqyFzNVFUhpJp5wrEGlaIb8wtUTB%2BdQ3MBh1UjkdvMybD6dnl%2F%2B94ynK2qRIgwXRR6fRUjhbPatOq3JYnQp%2FYFxgAkwdPZqiabrZUGcpgY%2FTNT635VE88accE7G3DpSd%2Fa1obh%2Bel7QKBYEHCCGPBaf6nGRZnMa7cJ4cSNZwcL1PTc2kQCGI7lKmgWQx0vDD7IZGK3AwHKu%2FcApr7C3PXa3d30aDlLtGdWRxql8gBSI5H8l%2BjJ4%2BjtLpdYDJXF47hxiPmx%2FKRyMeg26Ya5qPGyrrqdmicLfdZKqVzB04QVw6aPVu%2FK8sPVNHsWG%2FEJgmA6QTpocYYqxgtcQjNgh0UE6Vm7fk5V1ke0Hf1oSy4nTesS%2BLebWeNBgz3nkKLO3DXNEt4WaMqyft%2BVg8jsZHmiZTnOYv0xGsGPxeNP%2FxJM%2BWekNrDEN%2FC2GtBZ3fUgBFHYklo%2FVkNOrz9aL8n6D4l39tyGACfCzts8e04reHLtfVe5DerIkXiIdFxHiLS3LB%2FnVSpi7vtxjoo35Dk4wlOjj0R25ckg2XQoXqgK2REfnQHb%2Btv%2BL%2BGSMOnrnM4GOqUBM3xKc9fmQq9TWHYgWbTL9RCF8ymT%2BoVVP2%2B3kUjzi9U3pQnESy7bUTs%2BNF1NcoENx%2BzjmjAcP1EKafUsOcRHQP%2FJzaliCZtIEJ0f1nk2BLkxi17mayO3VOzLZYJCn%2BtqxpzDr%2FAKlBnNo7EwBiGW1fUdcg4Sb3DkDdtp90DjBvmcpPj3LfIip6pf2coPZ%2BNTb4ZpdT7fEQYE%2Buw2ihbPY%2Blq%2BXuV&X-Amz-Signature=47fb3d9f8fb52adea766b1b0043c73b2bf4125ffc23944801fd5e68c25ec5ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKU3KVIN%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCxg7tWi0z2SOKUv0%2BXlczN2Q3aQ8sJXwEtO3aH8L3CNQIgN3SRHy707DFRmQSrNmW2JvurKesahXdP1OvSLNEiLBwqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFTKrlV5o6oynlFBCrcA4ZaLiGBvF6EdhoN%2FRdBkkyzGJ86%2Fk0k8xUuLm9HHAVLpc48hG0v85V0hpOryUH1iFT0jZcqyFzNVFUhpJp5wrEGlaIb8wtUTB%2BdQ3MBh1UjkdvMybD6dnl%2F%2B94ynK2qRIgwXRR6fRUjhbPatOq3JYnQp%2FYFxgAkwdPZqiabrZUGcpgY%2FTNT635VE88accE7G3DpSd%2Fa1obh%2Bel7QKBYEHCCGPBaf6nGRZnMa7cJ4cSNZwcL1PTc2kQCGI7lKmgWQx0vDD7IZGK3AwHKu%2FcApr7C3PXa3d30aDlLtGdWRxql8gBSI5H8l%2BjJ4%2BjtLpdYDJXF47hxiPmx%2FKRyMeg26Ya5qPGyrrqdmicLfdZKqVzB04QVw6aPVu%2FK8sPVNHsWG%2FEJgmA6QTpocYYqxgtcQjNgh0UE6Vm7fk5V1ke0Hf1oSy4nTesS%2BLebWeNBgz3nkKLO3DXNEt4WaMqyft%2BVg8jsZHmiZTnOYv0xGsGPxeNP%2FxJM%2BWekNrDEN%2FC2GtBZ3fUgBFHYklo%2FVkNOrz9aL8n6D4l39tyGACfCzts8e04reHLtfVe5DerIkXiIdFxHiLS3LB%2FnVSpi7vtxjoo35Dk4wlOjj0R25ckg2XQoXqgK2REfnQHb%2Btv%2BL%2BGSMOnrnM4GOqUBM3xKc9fmQq9TWHYgWbTL9RCF8ymT%2BoVVP2%2B3kUjzi9U3pQnESy7bUTs%2BNF1NcoENx%2BzjmjAcP1EKafUsOcRHQP%2FJzaliCZtIEJ0f1nk2BLkxi17mayO3VOzLZYJCn%2BtqxpzDr%2FAKlBnNo7EwBiGW1fUdcg4Sb3DkDdtp90DjBvmcpPj3LfIip6pf2coPZ%2BNTb4ZpdT7fEQYE%2Buw2ihbPY%2Blq%2BXuV&X-Amz-Signature=cf26a1764a58789c045a3af61e704749650b2c11a023440031ac9a54e667de5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
