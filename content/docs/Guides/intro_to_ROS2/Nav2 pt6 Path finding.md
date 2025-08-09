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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A7RGNE3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCWNpFBwRDH8WSXH8ZkNyAmjIkR0RNXIOz91bdFaFo9RAIhAI9KvklGSQZsMuesDzCSc3cwNepIT25W4EPh04%2BaUacPKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwplSCc24v4IGdBad4q3AORiMwT4UxsfK2lXiP38suboWQ95PFun8Fg6yZurTIZbriCRnmmW%2BvcOhBsOrAwWrh6U1edFIv6%2B99dwx7KI0z23miGm5XUf%2BwYLm7Dr9ku33q%2Fu9VMNaT5hSer2w8MLsphL0TOqFL95E4BFosMAuH0lCn0wo6jR1zDP8D4C3jBwfeApUYgaqCIVvLpNwq2BUvk3rkQVKH%2FOMKtqE6MAI406rfcW0C7VEyntfdsnBQuqtrTYnx0lEmO8DC89MpMeWsJkW5zCK%2FuxUlRBA57Wn90RXx21vJFMQKd0yBWGx%2BGSWBcMp1UC2lkYiIUW5gu1NcgLbBk1TuvdZsr3BqlpTSdN5kjxWKMddfemwMsOkRSM99o2oNsZL5wxV6NZKK%2BINYuibEWSHJAlczTXB2SpCU5EzH33Ol5TuHsRNGJfabasm8Gl26i9ylrxU2d%2B7UlcoGrEQWu8qXFbArMUz4Cy4lLWtgNdHHoc4hICbc%2BTRpol6legdUnwwOYMEYITaUqiw4upbgEc3TX%2B0kOfBgeVQT1C%2FxbZada16g4F0KtlimhagmPFgbVmhsjU5oQs0yGzqobOPiBRjMmFBMLopix8h2TpyM9arKcufQAXwbgw852QkVC5S2nbuU8lFPyZDDdqtrEBjqkAT%2F9qBftgQePH0lMcgwsDpHF4Re%2BC3z1JdIG5tdEAfD%2F5DZTZ%2Bwb%2FDfpC1bQNU70xrTF5yd%2FWfQ2eU%2FrLEIrbkwkaIlj7ajbe6RkvorLL1ESUMVSIn335%2B7uL1FFlHzdV5lv2EkNYaULzJckyOudHducPVcI66bVbvAJrjdXrHKoTeLb255UWMUfPn4S97O0p84Ni5W12hkqWVNVC%2FuQ%2FTVtW7hD&X-Amz-Signature=8259becc1f48867be66924b8556155e2286f2a7988bc53d8ebe57a6b6ad382f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A7RGNE3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCWNpFBwRDH8WSXH8ZkNyAmjIkR0RNXIOz91bdFaFo9RAIhAI9KvklGSQZsMuesDzCSc3cwNepIT25W4EPh04%2BaUacPKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwplSCc24v4IGdBad4q3AORiMwT4UxsfK2lXiP38suboWQ95PFun8Fg6yZurTIZbriCRnmmW%2BvcOhBsOrAwWrh6U1edFIv6%2B99dwx7KI0z23miGm5XUf%2BwYLm7Dr9ku33q%2Fu9VMNaT5hSer2w8MLsphL0TOqFL95E4BFosMAuH0lCn0wo6jR1zDP8D4C3jBwfeApUYgaqCIVvLpNwq2BUvk3rkQVKH%2FOMKtqE6MAI406rfcW0C7VEyntfdsnBQuqtrTYnx0lEmO8DC89MpMeWsJkW5zCK%2FuxUlRBA57Wn90RXx21vJFMQKd0yBWGx%2BGSWBcMp1UC2lkYiIUW5gu1NcgLbBk1TuvdZsr3BqlpTSdN5kjxWKMddfemwMsOkRSM99o2oNsZL5wxV6NZKK%2BINYuibEWSHJAlczTXB2SpCU5EzH33Ol5TuHsRNGJfabasm8Gl26i9ylrxU2d%2B7UlcoGrEQWu8qXFbArMUz4Cy4lLWtgNdHHoc4hICbc%2BTRpol6legdUnwwOYMEYITaUqiw4upbgEc3TX%2B0kOfBgeVQT1C%2FxbZada16g4F0KtlimhagmPFgbVmhsjU5oQs0yGzqobOPiBRjMmFBMLopix8h2TpyM9arKcufQAXwbgw852QkVC5S2nbuU8lFPyZDDdqtrEBjqkAT%2F9qBftgQePH0lMcgwsDpHF4Re%2BC3z1JdIG5tdEAfD%2F5DZTZ%2Bwb%2FDfpC1bQNU70xrTF5yd%2FWfQ2eU%2FrLEIrbkwkaIlj7ajbe6RkvorLL1ESUMVSIn335%2B7uL1FFlHzdV5lv2EkNYaULzJckyOudHducPVcI66bVbvAJrjdXrHKoTeLb255UWMUfPn4S97O0p84Ni5W12hkqWVNVC%2FuQ%2FTVtW7hD&X-Amz-Signature=aca91d687a49c7d7ceea0c2abb57a5713be9917f13adb9fab97a13cce6b29f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A7RGNE3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCWNpFBwRDH8WSXH8ZkNyAmjIkR0RNXIOz91bdFaFo9RAIhAI9KvklGSQZsMuesDzCSc3cwNepIT25W4EPh04%2BaUacPKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwplSCc24v4IGdBad4q3AORiMwT4UxsfK2lXiP38suboWQ95PFun8Fg6yZurTIZbriCRnmmW%2BvcOhBsOrAwWrh6U1edFIv6%2B99dwx7KI0z23miGm5XUf%2BwYLm7Dr9ku33q%2Fu9VMNaT5hSer2w8MLsphL0TOqFL95E4BFosMAuH0lCn0wo6jR1zDP8D4C3jBwfeApUYgaqCIVvLpNwq2BUvk3rkQVKH%2FOMKtqE6MAI406rfcW0C7VEyntfdsnBQuqtrTYnx0lEmO8DC89MpMeWsJkW5zCK%2FuxUlRBA57Wn90RXx21vJFMQKd0yBWGx%2BGSWBcMp1UC2lkYiIUW5gu1NcgLbBk1TuvdZsr3BqlpTSdN5kjxWKMddfemwMsOkRSM99o2oNsZL5wxV6NZKK%2BINYuibEWSHJAlczTXB2SpCU5EzH33Ol5TuHsRNGJfabasm8Gl26i9ylrxU2d%2B7UlcoGrEQWu8qXFbArMUz4Cy4lLWtgNdHHoc4hICbc%2BTRpol6legdUnwwOYMEYITaUqiw4upbgEc3TX%2B0kOfBgeVQT1C%2FxbZada16g4F0KtlimhagmPFgbVmhsjU5oQs0yGzqobOPiBRjMmFBMLopix8h2TpyM9arKcufQAXwbgw852QkVC5S2nbuU8lFPyZDDdqtrEBjqkAT%2F9qBftgQePH0lMcgwsDpHF4Re%2BC3z1JdIG5tdEAfD%2F5DZTZ%2Bwb%2FDfpC1bQNU70xrTF5yd%2FWfQ2eU%2FrLEIrbkwkaIlj7ajbe6RkvorLL1ESUMVSIn335%2B7uL1FFlHzdV5lv2EkNYaULzJckyOudHducPVcI66bVbvAJrjdXrHKoTeLb255UWMUfPn4S97O0p84Ni5W12hkqWVNVC%2FuQ%2FTVtW7hD&X-Amz-Signature=3f54c9cfcd3d0dfb1c1be7490c68c309efd80d37837e37bd46711811068c7831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A7RGNE3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCWNpFBwRDH8WSXH8ZkNyAmjIkR0RNXIOz91bdFaFo9RAIhAI9KvklGSQZsMuesDzCSc3cwNepIT25W4EPh04%2BaUacPKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwplSCc24v4IGdBad4q3AORiMwT4UxsfK2lXiP38suboWQ95PFun8Fg6yZurTIZbriCRnmmW%2BvcOhBsOrAwWrh6U1edFIv6%2B99dwx7KI0z23miGm5XUf%2BwYLm7Dr9ku33q%2Fu9VMNaT5hSer2w8MLsphL0TOqFL95E4BFosMAuH0lCn0wo6jR1zDP8D4C3jBwfeApUYgaqCIVvLpNwq2BUvk3rkQVKH%2FOMKtqE6MAI406rfcW0C7VEyntfdsnBQuqtrTYnx0lEmO8DC89MpMeWsJkW5zCK%2FuxUlRBA57Wn90RXx21vJFMQKd0yBWGx%2BGSWBcMp1UC2lkYiIUW5gu1NcgLbBk1TuvdZsr3BqlpTSdN5kjxWKMddfemwMsOkRSM99o2oNsZL5wxV6NZKK%2BINYuibEWSHJAlczTXB2SpCU5EzH33Ol5TuHsRNGJfabasm8Gl26i9ylrxU2d%2B7UlcoGrEQWu8qXFbArMUz4Cy4lLWtgNdHHoc4hICbc%2BTRpol6legdUnwwOYMEYITaUqiw4upbgEc3TX%2B0kOfBgeVQT1C%2FxbZada16g4F0KtlimhagmPFgbVmhsjU5oQs0yGzqobOPiBRjMmFBMLopix8h2TpyM9arKcufQAXwbgw852QkVC5S2nbuU8lFPyZDDdqtrEBjqkAT%2F9qBftgQePH0lMcgwsDpHF4Re%2BC3z1JdIG5tdEAfD%2F5DZTZ%2Bwb%2FDfpC1bQNU70xrTF5yd%2FWfQ2eU%2FrLEIrbkwkaIlj7ajbe6RkvorLL1ESUMVSIn335%2B7uL1FFlHzdV5lv2EkNYaULzJckyOudHducPVcI66bVbvAJrjdXrHKoTeLb255UWMUfPn4S97O0p84Ni5W12hkqWVNVC%2FuQ%2FTVtW7hD&X-Amz-Signature=e4509342ed9046439d5267cac0934820cca5a7446cdd4db1e98435b12edce073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A7RGNE3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCWNpFBwRDH8WSXH8ZkNyAmjIkR0RNXIOz91bdFaFo9RAIhAI9KvklGSQZsMuesDzCSc3cwNepIT25W4EPh04%2BaUacPKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwplSCc24v4IGdBad4q3AORiMwT4UxsfK2lXiP38suboWQ95PFun8Fg6yZurTIZbriCRnmmW%2BvcOhBsOrAwWrh6U1edFIv6%2B99dwx7KI0z23miGm5XUf%2BwYLm7Dr9ku33q%2Fu9VMNaT5hSer2w8MLsphL0TOqFL95E4BFosMAuH0lCn0wo6jR1zDP8D4C3jBwfeApUYgaqCIVvLpNwq2BUvk3rkQVKH%2FOMKtqE6MAI406rfcW0C7VEyntfdsnBQuqtrTYnx0lEmO8DC89MpMeWsJkW5zCK%2FuxUlRBA57Wn90RXx21vJFMQKd0yBWGx%2BGSWBcMp1UC2lkYiIUW5gu1NcgLbBk1TuvdZsr3BqlpTSdN5kjxWKMddfemwMsOkRSM99o2oNsZL5wxV6NZKK%2BINYuibEWSHJAlczTXB2SpCU5EzH33Ol5TuHsRNGJfabasm8Gl26i9ylrxU2d%2B7UlcoGrEQWu8qXFbArMUz4Cy4lLWtgNdHHoc4hICbc%2BTRpol6legdUnwwOYMEYITaUqiw4upbgEc3TX%2B0kOfBgeVQT1C%2FxbZada16g4F0KtlimhagmPFgbVmhsjU5oQs0yGzqobOPiBRjMmFBMLopix8h2TpyM9arKcufQAXwbgw852QkVC5S2nbuU8lFPyZDDdqtrEBjqkAT%2F9qBftgQePH0lMcgwsDpHF4Re%2BC3z1JdIG5tdEAfD%2F5DZTZ%2Bwb%2FDfpC1bQNU70xrTF5yd%2FWfQ2eU%2FrLEIrbkwkaIlj7ajbe6RkvorLL1ESUMVSIn335%2B7uL1FFlHzdV5lv2EkNYaULzJckyOudHducPVcI66bVbvAJrjdXrHKoTeLb255UWMUfPn4S97O0p84Ni5W12hkqWVNVC%2FuQ%2FTVtW7hD&X-Amz-Signature=db711d369ac0a0a51dd8163fdf4f7b57ccf3feb46d8ced354b7d48b75b6e186c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A7RGNE3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCWNpFBwRDH8WSXH8ZkNyAmjIkR0RNXIOz91bdFaFo9RAIhAI9KvklGSQZsMuesDzCSc3cwNepIT25W4EPh04%2BaUacPKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwplSCc24v4IGdBad4q3AORiMwT4UxsfK2lXiP38suboWQ95PFun8Fg6yZurTIZbriCRnmmW%2BvcOhBsOrAwWrh6U1edFIv6%2B99dwx7KI0z23miGm5XUf%2BwYLm7Dr9ku33q%2Fu9VMNaT5hSer2w8MLsphL0TOqFL95E4BFosMAuH0lCn0wo6jR1zDP8D4C3jBwfeApUYgaqCIVvLpNwq2BUvk3rkQVKH%2FOMKtqE6MAI406rfcW0C7VEyntfdsnBQuqtrTYnx0lEmO8DC89MpMeWsJkW5zCK%2FuxUlRBA57Wn90RXx21vJFMQKd0yBWGx%2BGSWBcMp1UC2lkYiIUW5gu1NcgLbBk1TuvdZsr3BqlpTSdN5kjxWKMddfemwMsOkRSM99o2oNsZL5wxV6NZKK%2BINYuibEWSHJAlczTXB2SpCU5EzH33Ol5TuHsRNGJfabasm8Gl26i9ylrxU2d%2B7UlcoGrEQWu8qXFbArMUz4Cy4lLWtgNdHHoc4hICbc%2BTRpol6legdUnwwOYMEYITaUqiw4upbgEc3TX%2B0kOfBgeVQT1C%2FxbZada16g4F0KtlimhagmPFgbVmhsjU5oQs0yGzqobOPiBRjMmFBMLopix8h2TpyM9arKcufQAXwbgw852QkVC5S2nbuU8lFPyZDDdqtrEBjqkAT%2F9qBftgQePH0lMcgwsDpHF4Re%2BC3z1JdIG5tdEAfD%2F5DZTZ%2Bwb%2FDfpC1bQNU70xrTF5yd%2FWfQ2eU%2FrLEIrbkwkaIlj7ajbe6RkvorLL1ESUMVSIn335%2B7uL1FFlHzdV5lv2EkNYaULzJckyOudHducPVcI66bVbvAJrjdXrHKoTeLb255UWMUfPn4S97O0p84Ni5W12hkqWVNVC%2FuQ%2FTVtW7hD&X-Amz-Signature=2c6bf1dc1f54bb2a34f970677e754cf0007a5dac7d9f1efa7c8ae10e9c736ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A7RGNE3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCWNpFBwRDH8WSXH8ZkNyAmjIkR0RNXIOz91bdFaFo9RAIhAI9KvklGSQZsMuesDzCSc3cwNepIT25W4EPh04%2BaUacPKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwplSCc24v4IGdBad4q3AORiMwT4UxsfK2lXiP38suboWQ95PFun8Fg6yZurTIZbriCRnmmW%2BvcOhBsOrAwWrh6U1edFIv6%2B99dwx7KI0z23miGm5XUf%2BwYLm7Dr9ku33q%2Fu9VMNaT5hSer2w8MLsphL0TOqFL95E4BFosMAuH0lCn0wo6jR1zDP8D4C3jBwfeApUYgaqCIVvLpNwq2BUvk3rkQVKH%2FOMKtqE6MAI406rfcW0C7VEyntfdsnBQuqtrTYnx0lEmO8DC89MpMeWsJkW5zCK%2FuxUlRBA57Wn90RXx21vJFMQKd0yBWGx%2BGSWBcMp1UC2lkYiIUW5gu1NcgLbBk1TuvdZsr3BqlpTSdN5kjxWKMddfemwMsOkRSM99o2oNsZL5wxV6NZKK%2BINYuibEWSHJAlczTXB2SpCU5EzH33Ol5TuHsRNGJfabasm8Gl26i9ylrxU2d%2B7UlcoGrEQWu8qXFbArMUz4Cy4lLWtgNdHHoc4hICbc%2BTRpol6legdUnwwOYMEYITaUqiw4upbgEc3TX%2B0kOfBgeVQT1C%2FxbZada16g4F0KtlimhagmPFgbVmhsjU5oQs0yGzqobOPiBRjMmFBMLopix8h2TpyM9arKcufQAXwbgw852QkVC5S2nbuU8lFPyZDDdqtrEBjqkAT%2F9qBftgQePH0lMcgwsDpHF4Re%2BC3z1JdIG5tdEAfD%2F5DZTZ%2Bwb%2FDfpC1bQNU70xrTF5yd%2FWfQ2eU%2FrLEIrbkwkaIlj7ajbe6RkvorLL1ESUMVSIn335%2B7uL1FFlHzdV5lv2EkNYaULzJckyOudHducPVcI66bVbvAJrjdXrHKoTeLb255UWMUfPn4S97O0p84Ni5W12hkqWVNVC%2FuQ%2FTVtW7hD&X-Amz-Signature=105686939fa076bf7960e89e94c010d3af058ef656f1ff69bd11ba6cad61ef3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A7RGNE3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCWNpFBwRDH8WSXH8ZkNyAmjIkR0RNXIOz91bdFaFo9RAIhAI9KvklGSQZsMuesDzCSc3cwNepIT25W4EPh04%2BaUacPKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwplSCc24v4IGdBad4q3AORiMwT4UxsfK2lXiP38suboWQ95PFun8Fg6yZurTIZbriCRnmmW%2BvcOhBsOrAwWrh6U1edFIv6%2B99dwx7KI0z23miGm5XUf%2BwYLm7Dr9ku33q%2Fu9VMNaT5hSer2w8MLsphL0TOqFL95E4BFosMAuH0lCn0wo6jR1zDP8D4C3jBwfeApUYgaqCIVvLpNwq2BUvk3rkQVKH%2FOMKtqE6MAI406rfcW0C7VEyntfdsnBQuqtrTYnx0lEmO8DC89MpMeWsJkW5zCK%2FuxUlRBA57Wn90RXx21vJFMQKd0yBWGx%2BGSWBcMp1UC2lkYiIUW5gu1NcgLbBk1TuvdZsr3BqlpTSdN5kjxWKMddfemwMsOkRSM99o2oNsZL5wxV6NZKK%2BINYuibEWSHJAlczTXB2SpCU5EzH33Ol5TuHsRNGJfabasm8Gl26i9ylrxU2d%2B7UlcoGrEQWu8qXFbArMUz4Cy4lLWtgNdHHoc4hICbc%2BTRpol6legdUnwwOYMEYITaUqiw4upbgEc3TX%2B0kOfBgeVQT1C%2FxbZada16g4F0KtlimhagmPFgbVmhsjU5oQs0yGzqobOPiBRjMmFBMLopix8h2TpyM9arKcufQAXwbgw852QkVC5S2nbuU8lFPyZDDdqtrEBjqkAT%2F9qBftgQePH0lMcgwsDpHF4Re%2BC3z1JdIG5tdEAfD%2F5DZTZ%2Bwb%2FDfpC1bQNU70xrTF5yd%2FWfQ2eU%2FrLEIrbkwkaIlj7ajbe6RkvorLL1ESUMVSIn335%2B7uL1FFlHzdV5lv2EkNYaULzJckyOudHducPVcI66bVbvAJrjdXrHKoTeLb255UWMUfPn4S97O0p84Ni5W12hkqWVNVC%2FuQ%2FTVtW7hD&X-Amz-Signature=dd04f7ae930b4e76dd4c0ea3965a5a206e522d6f553979e05bd1b81261b3e2fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A7RGNE3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCWNpFBwRDH8WSXH8ZkNyAmjIkR0RNXIOz91bdFaFo9RAIhAI9KvklGSQZsMuesDzCSc3cwNepIT25W4EPh04%2BaUacPKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwplSCc24v4IGdBad4q3AORiMwT4UxsfK2lXiP38suboWQ95PFun8Fg6yZurTIZbriCRnmmW%2BvcOhBsOrAwWrh6U1edFIv6%2B99dwx7KI0z23miGm5XUf%2BwYLm7Dr9ku33q%2Fu9VMNaT5hSer2w8MLsphL0TOqFL95E4BFosMAuH0lCn0wo6jR1zDP8D4C3jBwfeApUYgaqCIVvLpNwq2BUvk3rkQVKH%2FOMKtqE6MAI406rfcW0C7VEyntfdsnBQuqtrTYnx0lEmO8DC89MpMeWsJkW5zCK%2FuxUlRBA57Wn90RXx21vJFMQKd0yBWGx%2BGSWBcMp1UC2lkYiIUW5gu1NcgLbBk1TuvdZsr3BqlpTSdN5kjxWKMddfemwMsOkRSM99o2oNsZL5wxV6NZKK%2BINYuibEWSHJAlczTXB2SpCU5EzH33Ol5TuHsRNGJfabasm8Gl26i9ylrxU2d%2B7UlcoGrEQWu8qXFbArMUz4Cy4lLWtgNdHHoc4hICbc%2BTRpol6legdUnwwOYMEYITaUqiw4upbgEc3TX%2B0kOfBgeVQT1C%2FxbZada16g4F0KtlimhagmPFgbVmhsjU5oQs0yGzqobOPiBRjMmFBMLopix8h2TpyM9arKcufQAXwbgw852QkVC5S2nbuU8lFPyZDDdqtrEBjqkAT%2F9qBftgQePH0lMcgwsDpHF4Re%2BC3z1JdIG5tdEAfD%2F5DZTZ%2Bwb%2FDfpC1bQNU70xrTF5yd%2FWfQ2eU%2FrLEIrbkwkaIlj7ajbe6RkvorLL1ESUMVSIn335%2B7uL1FFlHzdV5lv2EkNYaULzJckyOudHducPVcI66bVbvAJrjdXrHKoTeLb255UWMUfPn4S97O0p84Ni5W12hkqWVNVC%2FuQ%2FTVtW7hD&X-Amz-Signature=fe5bec59bef3d9e9859f49039845043a2dfeebdd57c64625a530042711c9aaba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A7RGNE3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCWNpFBwRDH8WSXH8ZkNyAmjIkR0RNXIOz91bdFaFo9RAIhAI9KvklGSQZsMuesDzCSc3cwNepIT25W4EPh04%2BaUacPKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwplSCc24v4IGdBad4q3AORiMwT4UxsfK2lXiP38suboWQ95PFun8Fg6yZurTIZbriCRnmmW%2BvcOhBsOrAwWrh6U1edFIv6%2B99dwx7KI0z23miGm5XUf%2BwYLm7Dr9ku33q%2Fu9VMNaT5hSer2w8MLsphL0TOqFL95E4BFosMAuH0lCn0wo6jR1zDP8D4C3jBwfeApUYgaqCIVvLpNwq2BUvk3rkQVKH%2FOMKtqE6MAI406rfcW0C7VEyntfdsnBQuqtrTYnx0lEmO8DC89MpMeWsJkW5zCK%2FuxUlRBA57Wn90RXx21vJFMQKd0yBWGx%2BGSWBcMp1UC2lkYiIUW5gu1NcgLbBk1TuvdZsr3BqlpTSdN5kjxWKMddfemwMsOkRSM99o2oNsZL5wxV6NZKK%2BINYuibEWSHJAlczTXB2SpCU5EzH33Ol5TuHsRNGJfabasm8Gl26i9ylrxU2d%2B7UlcoGrEQWu8qXFbArMUz4Cy4lLWtgNdHHoc4hICbc%2BTRpol6legdUnwwOYMEYITaUqiw4upbgEc3TX%2B0kOfBgeVQT1C%2FxbZada16g4F0KtlimhagmPFgbVmhsjU5oQs0yGzqobOPiBRjMmFBMLopix8h2TpyM9arKcufQAXwbgw852QkVC5S2nbuU8lFPyZDDdqtrEBjqkAT%2F9qBftgQePH0lMcgwsDpHF4Re%2BC3z1JdIG5tdEAfD%2F5DZTZ%2Bwb%2FDfpC1bQNU70xrTF5yd%2FWfQ2eU%2FrLEIrbkwkaIlj7ajbe6RkvorLL1ESUMVSIn335%2B7uL1FFlHzdV5lv2EkNYaULzJckyOudHducPVcI66bVbvAJrjdXrHKoTeLb255UWMUfPn4S97O0p84Ni5W12hkqWVNVC%2FuQ%2FTVtW7hD&X-Amz-Signature=66042d2628671d84eb790c4977de2e923be3e0727d1227406d1ec1a891828000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A7RGNE3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCWNpFBwRDH8WSXH8ZkNyAmjIkR0RNXIOz91bdFaFo9RAIhAI9KvklGSQZsMuesDzCSc3cwNepIT25W4EPh04%2BaUacPKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwplSCc24v4IGdBad4q3AORiMwT4UxsfK2lXiP38suboWQ95PFun8Fg6yZurTIZbriCRnmmW%2BvcOhBsOrAwWrh6U1edFIv6%2B99dwx7KI0z23miGm5XUf%2BwYLm7Dr9ku33q%2Fu9VMNaT5hSer2w8MLsphL0TOqFL95E4BFosMAuH0lCn0wo6jR1zDP8D4C3jBwfeApUYgaqCIVvLpNwq2BUvk3rkQVKH%2FOMKtqE6MAI406rfcW0C7VEyntfdsnBQuqtrTYnx0lEmO8DC89MpMeWsJkW5zCK%2FuxUlRBA57Wn90RXx21vJFMQKd0yBWGx%2BGSWBcMp1UC2lkYiIUW5gu1NcgLbBk1TuvdZsr3BqlpTSdN5kjxWKMddfemwMsOkRSM99o2oNsZL5wxV6NZKK%2BINYuibEWSHJAlczTXB2SpCU5EzH33Ol5TuHsRNGJfabasm8Gl26i9ylrxU2d%2B7UlcoGrEQWu8qXFbArMUz4Cy4lLWtgNdHHoc4hICbc%2BTRpol6legdUnwwOYMEYITaUqiw4upbgEc3TX%2B0kOfBgeVQT1C%2FxbZada16g4F0KtlimhagmPFgbVmhsjU5oQs0yGzqobOPiBRjMmFBMLopix8h2TpyM9arKcufQAXwbgw852QkVC5S2nbuU8lFPyZDDdqtrEBjqkAT%2F9qBftgQePH0lMcgwsDpHF4Re%2BC3z1JdIG5tdEAfD%2F5DZTZ%2Bwb%2FDfpC1bQNU70xrTF5yd%2FWfQ2eU%2FrLEIrbkwkaIlj7ajbe6RkvorLL1ESUMVSIn335%2B7uL1FFlHzdV5lv2EkNYaULzJckyOudHducPVcI66bVbvAJrjdXrHKoTeLb255UWMUfPn4S97O0p84Ni5W12hkqWVNVC%2FuQ%2FTVtW7hD&X-Amz-Signature=1d289ad1412563b096998845708e4ee71c6484cba2f56cbd603b1645333f6c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A7RGNE3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCWNpFBwRDH8WSXH8ZkNyAmjIkR0RNXIOz91bdFaFo9RAIhAI9KvklGSQZsMuesDzCSc3cwNepIT25W4EPh04%2BaUacPKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwplSCc24v4IGdBad4q3AORiMwT4UxsfK2lXiP38suboWQ95PFun8Fg6yZurTIZbriCRnmmW%2BvcOhBsOrAwWrh6U1edFIv6%2B99dwx7KI0z23miGm5XUf%2BwYLm7Dr9ku33q%2Fu9VMNaT5hSer2w8MLsphL0TOqFL95E4BFosMAuH0lCn0wo6jR1zDP8D4C3jBwfeApUYgaqCIVvLpNwq2BUvk3rkQVKH%2FOMKtqE6MAI406rfcW0C7VEyntfdsnBQuqtrTYnx0lEmO8DC89MpMeWsJkW5zCK%2FuxUlRBA57Wn90RXx21vJFMQKd0yBWGx%2BGSWBcMp1UC2lkYiIUW5gu1NcgLbBk1TuvdZsr3BqlpTSdN5kjxWKMddfemwMsOkRSM99o2oNsZL5wxV6NZKK%2BINYuibEWSHJAlczTXB2SpCU5EzH33Ol5TuHsRNGJfabasm8Gl26i9ylrxU2d%2B7UlcoGrEQWu8qXFbArMUz4Cy4lLWtgNdHHoc4hICbc%2BTRpol6legdUnwwOYMEYITaUqiw4upbgEc3TX%2B0kOfBgeVQT1C%2FxbZada16g4F0KtlimhagmPFgbVmhsjU5oQs0yGzqobOPiBRjMmFBMLopix8h2TpyM9arKcufQAXwbgw852QkVC5S2nbuU8lFPyZDDdqtrEBjqkAT%2F9qBftgQePH0lMcgwsDpHF4Re%2BC3z1JdIG5tdEAfD%2F5DZTZ%2Bwb%2FDfpC1bQNU70xrTF5yd%2FWfQ2eU%2FrLEIrbkwkaIlj7ajbe6RkvorLL1ESUMVSIn335%2B7uL1FFlHzdV5lv2EkNYaULzJckyOudHducPVcI66bVbvAJrjdXrHKoTeLb255UWMUfPn4S97O0p84Ni5W12hkqWVNVC%2FuQ%2FTVtW7hD&X-Amz-Signature=77a2d46830784faa610e2a3a1be71d9e76c34f3ee13dc26039b59a10a49473e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A7RGNE3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T004308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCWNpFBwRDH8WSXH8ZkNyAmjIkR0RNXIOz91bdFaFo9RAIhAI9KvklGSQZsMuesDzCSc3cwNepIT25W4EPh04%2BaUacPKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwplSCc24v4IGdBad4q3AORiMwT4UxsfK2lXiP38suboWQ95PFun8Fg6yZurTIZbriCRnmmW%2BvcOhBsOrAwWrh6U1edFIv6%2B99dwx7KI0z23miGm5XUf%2BwYLm7Dr9ku33q%2Fu9VMNaT5hSer2w8MLsphL0TOqFL95E4BFosMAuH0lCn0wo6jR1zDP8D4C3jBwfeApUYgaqCIVvLpNwq2BUvk3rkQVKH%2FOMKtqE6MAI406rfcW0C7VEyntfdsnBQuqtrTYnx0lEmO8DC89MpMeWsJkW5zCK%2FuxUlRBA57Wn90RXx21vJFMQKd0yBWGx%2BGSWBcMp1UC2lkYiIUW5gu1NcgLbBk1TuvdZsr3BqlpTSdN5kjxWKMddfemwMsOkRSM99o2oNsZL5wxV6NZKK%2BINYuibEWSHJAlczTXB2SpCU5EzH33Ol5TuHsRNGJfabasm8Gl26i9ylrxU2d%2B7UlcoGrEQWu8qXFbArMUz4Cy4lLWtgNdHHoc4hICbc%2BTRpol6legdUnwwOYMEYITaUqiw4upbgEc3TX%2B0kOfBgeVQT1C%2FxbZada16g4F0KtlimhagmPFgbVmhsjU5oQs0yGzqobOPiBRjMmFBMLopix8h2TpyM9arKcufQAXwbgw852QkVC5S2nbuU8lFPyZDDdqtrEBjqkAT%2F9qBftgQePH0lMcgwsDpHF4Re%2BC3z1JdIG5tdEAfD%2F5DZTZ%2Bwb%2FDfpC1bQNU70xrTF5yd%2FWfQ2eU%2FrLEIrbkwkaIlj7ajbe6RkvorLL1ESUMVSIn335%2B7uL1FFlHzdV5lv2EkNYaULzJckyOudHducPVcI66bVbvAJrjdXrHKoTeLb255UWMUfPn4S97O0p84Ni5W12hkqWVNVC%2FuQ%2FTVtW7hD&X-Amz-Signature=c00dc0c566e01109db3ae4049929360e80e494d96c67647524a7c23a8b6c5fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
