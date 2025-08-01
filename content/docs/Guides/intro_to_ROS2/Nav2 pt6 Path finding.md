---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NE73Z37%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcOvOhm%2BrQHn3%2BJXya9JeiqiwJemW%2BiJeKlon2yH5ldwIgVlVDgCUuQLz0nCh0mfqN9t6S%2Ba8E5D%2BO9ufCN8fzEeIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnUird%2Ff5HFTjVlRircA6%2BRfxGCNVQg40sIjT8AaqmcJnHQPaUcbnaUeJtoGJAhU7WAtO4zSXR01ClKvgh8QBygQbbHWU9%2B%2F0S%2Bf5Sp6xA%2Bd%2BPYYOga5dFMzpyUm59AevF9y38vEwYe7UM9RBIMsATzEicnDLuQ5QSnEZbE5mAUyvIVOTkJ2yWKU4HUiyBlOXVOPtMMxdT6DB%2B%2FvE1PXsJBopkmnSSid4jOSlbm00J5DV46DilBgXB%2FHfGiGSBuJzNg7922fkdSFzLcGrE%2F9snS7D89isDY5e3fJs04IrcMIcVxw%2Fe0t7ARHap6Y%2FzVM1Q02pCxLFQt09kRWjgBqyK2y14JDaHGpFKbE52kCJjS%2F4JeFvUqYYDEuJ5w2lPtPoODM7pNtXNreMXTqDur1BtektKxDssZ8XezFkdESzXafb%2FuNAS5a316kOvpQkTUjRbzTuEvyNG6ia8COyFlBaA7PRO1%2Fxe63FeTvbow3Qaw4oRdybX8BDilfvIWq4e3eLhH2M3E5fvGNJTB4MTONCYPCYkQyqIOKaZs%2Bt%2F9RfSU9kyrKEmAo2zlqa64016j4X0ixnZ7lPqD4EOZf25zYaBhQ%2FmFbYJJ59yBub7wKsPTxFkbIm8yVjLr8A%2FkbAbetqpjrDdd424Oo3ksMKPtscQGOqUBpVWHVhMeUxVho6k%2BAOZhgcVkfdU00iDIKyKDo1jfUL%2F4M6FHmqkh6V%2BlNSaec2%2FnejMt015DXKNC4FBtm3MDdKMurrMv3iZ6LW5RruKRzfc%2BYWWkiP7UYJ2G33E1ZtxOxjiYgXIXqhEBfbH%2FsIKgZodG9R%2BPgm48WQ2JAb%2BdOxx9SdzmofsbTqOGIB%2FjMh7ofTSj71MZJvIsVb5BIuBrOLWKjpBc&X-Amz-Signature=24369fbbbedf3235ddb0acf3dc47606a45f53e470b6caaa61e59eac1147cf4b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NE73Z37%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcOvOhm%2BrQHn3%2BJXya9JeiqiwJemW%2BiJeKlon2yH5ldwIgVlVDgCUuQLz0nCh0mfqN9t6S%2Ba8E5D%2BO9ufCN8fzEeIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnUird%2Ff5HFTjVlRircA6%2BRfxGCNVQg40sIjT8AaqmcJnHQPaUcbnaUeJtoGJAhU7WAtO4zSXR01ClKvgh8QBygQbbHWU9%2B%2F0S%2Bf5Sp6xA%2Bd%2BPYYOga5dFMzpyUm59AevF9y38vEwYe7UM9RBIMsATzEicnDLuQ5QSnEZbE5mAUyvIVOTkJ2yWKU4HUiyBlOXVOPtMMxdT6DB%2B%2FvE1PXsJBopkmnSSid4jOSlbm00J5DV46DilBgXB%2FHfGiGSBuJzNg7922fkdSFzLcGrE%2F9snS7D89isDY5e3fJs04IrcMIcVxw%2Fe0t7ARHap6Y%2FzVM1Q02pCxLFQt09kRWjgBqyK2y14JDaHGpFKbE52kCJjS%2F4JeFvUqYYDEuJ5w2lPtPoODM7pNtXNreMXTqDur1BtektKxDssZ8XezFkdESzXafb%2FuNAS5a316kOvpQkTUjRbzTuEvyNG6ia8COyFlBaA7PRO1%2Fxe63FeTvbow3Qaw4oRdybX8BDilfvIWq4e3eLhH2M3E5fvGNJTB4MTONCYPCYkQyqIOKaZs%2Bt%2F9RfSU9kyrKEmAo2zlqa64016j4X0ixnZ7lPqD4EOZf25zYaBhQ%2FmFbYJJ59yBub7wKsPTxFkbIm8yVjLr8A%2FkbAbetqpjrDdd424Oo3ksMKPtscQGOqUBpVWHVhMeUxVho6k%2BAOZhgcVkfdU00iDIKyKDo1jfUL%2F4M6FHmqkh6V%2BlNSaec2%2FnejMt015DXKNC4FBtm3MDdKMurrMv3iZ6LW5RruKRzfc%2BYWWkiP7UYJ2G33E1ZtxOxjiYgXIXqhEBfbH%2FsIKgZodG9R%2BPgm48WQ2JAb%2BdOxx9SdzmofsbTqOGIB%2FjMh7ofTSj71MZJvIsVb5BIuBrOLWKjpBc&X-Amz-Signature=4e26bda469523c0285cbcc1d095e46dd8db1814e0ec0e1009766f17009a81a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NE73Z37%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcOvOhm%2BrQHn3%2BJXya9JeiqiwJemW%2BiJeKlon2yH5ldwIgVlVDgCUuQLz0nCh0mfqN9t6S%2Ba8E5D%2BO9ufCN8fzEeIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnUird%2Ff5HFTjVlRircA6%2BRfxGCNVQg40sIjT8AaqmcJnHQPaUcbnaUeJtoGJAhU7WAtO4zSXR01ClKvgh8QBygQbbHWU9%2B%2F0S%2Bf5Sp6xA%2Bd%2BPYYOga5dFMzpyUm59AevF9y38vEwYe7UM9RBIMsATzEicnDLuQ5QSnEZbE5mAUyvIVOTkJ2yWKU4HUiyBlOXVOPtMMxdT6DB%2B%2FvE1PXsJBopkmnSSid4jOSlbm00J5DV46DilBgXB%2FHfGiGSBuJzNg7922fkdSFzLcGrE%2F9snS7D89isDY5e3fJs04IrcMIcVxw%2Fe0t7ARHap6Y%2FzVM1Q02pCxLFQt09kRWjgBqyK2y14JDaHGpFKbE52kCJjS%2F4JeFvUqYYDEuJ5w2lPtPoODM7pNtXNreMXTqDur1BtektKxDssZ8XezFkdESzXafb%2FuNAS5a316kOvpQkTUjRbzTuEvyNG6ia8COyFlBaA7PRO1%2Fxe63FeTvbow3Qaw4oRdybX8BDilfvIWq4e3eLhH2M3E5fvGNJTB4MTONCYPCYkQyqIOKaZs%2Bt%2F9RfSU9kyrKEmAo2zlqa64016j4X0ixnZ7lPqD4EOZf25zYaBhQ%2FmFbYJJ59yBub7wKsPTxFkbIm8yVjLr8A%2FkbAbetqpjrDdd424Oo3ksMKPtscQGOqUBpVWHVhMeUxVho6k%2BAOZhgcVkfdU00iDIKyKDo1jfUL%2F4M6FHmqkh6V%2BlNSaec2%2FnejMt015DXKNC4FBtm3MDdKMurrMv3iZ6LW5RruKRzfc%2BYWWkiP7UYJ2G33E1ZtxOxjiYgXIXqhEBfbH%2FsIKgZodG9R%2BPgm48WQ2JAb%2BdOxx9SdzmofsbTqOGIB%2FjMh7ofTSj71MZJvIsVb5BIuBrOLWKjpBc&X-Amz-Signature=a1afaccb8d3c20a34107b8c40e590c5176cdb090a37021df54030aaffab25b11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NE73Z37%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcOvOhm%2BrQHn3%2BJXya9JeiqiwJemW%2BiJeKlon2yH5ldwIgVlVDgCUuQLz0nCh0mfqN9t6S%2Ba8E5D%2BO9ufCN8fzEeIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnUird%2Ff5HFTjVlRircA6%2BRfxGCNVQg40sIjT8AaqmcJnHQPaUcbnaUeJtoGJAhU7WAtO4zSXR01ClKvgh8QBygQbbHWU9%2B%2F0S%2Bf5Sp6xA%2Bd%2BPYYOga5dFMzpyUm59AevF9y38vEwYe7UM9RBIMsATzEicnDLuQ5QSnEZbE5mAUyvIVOTkJ2yWKU4HUiyBlOXVOPtMMxdT6DB%2B%2FvE1PXsJBopkmnSSid4jOSlbm00J5DV46DilBgXB%2FHfGiGSBuJzNg7922fkdSFzLcGrE%2F9snS7D89isDY5e3fJs04IrcMIcVxw%2Fe0t7ARHap6Y%2FzVM1Q02pCxLFQt09kRWjgBqyK2y14JDaHGpFKbE52kCJjS%2F4JeFvUqYYDEuJ5w2lPtPoODM7pNtXNreMXTqDur1BtektKxDssZ8XezFkdESzXafb%2FuNAS5a316kOvpQkTUjRbzTuEvyNG6ia8COyFlBaA7PRO1%2Fxe63FeTvbow3Qaw4oRdybX8BDilfvIWq4e3eLhH2M3E5fvGNJTB4MTONCYPCYkQyqIOKaZs%2Bt%2F9RfSU9kyrKEmAo2zlqa64016j4X0ixnZ7lPqD4EOZf25zYaBhQ%2FmFbYJJ59yBub7wKsPTxFkbIm8yVjLr8A%2FkbAbetqpjrDdd424Oo3ksMKPtscQGOqUBpVWHVhMeUxVho6k%2BAOZhgcVkfdU00iDIKyKDo1jfUL%2F4M6FHmqkh6V%2BlNSaec2%2FnejMt015DXKNC4FBtm3MDdKMurrMv3iZ6LW5RruKRzfc%2BYWWkiP7UYJ2G33E1ZtxOxjiYgXIXqhEBfbH%2FsIKgZodG9R%2BPgm48WQ2JAb%2BdOxx9SdzmofsbTqOGIB%2FjMh7ofTSj71MZJvIsVb5BIuBrOLWKjpBc&X-Amz-Signature=9f1d81ba3966f2fcc9a83fb1cca9ff8f90eeb60a1b8fdcbf2e90458ebcc16128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NE73Z37%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcOvOhm%2BrQHn3%2BJXya9JeiqiwJemW%2BiJeKlon2yH5ldwIgVlVDgCUuQLz0nCh0mfqN9t6S%2Ba8E5D%2BO9ufCN8fzEeIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnUird%2Ff5HFTjVlRircA6%2BRfxGCNVQg40sIjT8AaqmcJnHQPaUcbnaUeJtoGJAhU7WAtO4zSXR01ClKvgh8QBygQbbHWU9%2B%2F0S%2Bf5Sp6xA%2Bd%2BPYYOga5dFMzpyUm59AevF9y38vEwYe7UM9RBIMsATzEicnDLuQ5QSnEZbE5mAUyvIVOTkJ2yWKU4HUiyBlOXVOPtMMxdT6DB%2B%2FvE1PXsJBopkmnSSid4jOSlbm00J5DV46DilBgXB%2FHfGiGSBuJzNg7922fkdSFzLcGrE%2F9snS7D89isDY5e3fJs04IrcMIcVxw%2Fe0t7ARHap6Y%2FzVM1Q02pCxLFQt09kRWjgBqyK2y14JDaHGpFKbE52kCJjS%2F4JeFvUqYYDEuJ5w2lPtPoODM7pNtXNreMXTqDur1BtektKxDssZ8XezFkdESzXafb%2FuNAS5a316kOvpQkTUjRbzTuEvyNG6ia8COyFlBaA7PRO1%2Fxe63FeTvbow3Qaw4oRdybX8BDilfvIWq4e3eLhH2M3E5fvGNJTB4MTONCYPCYkQyqIOKaZs%2Bt%2F9RfSU9kyrKEmAo2zlqa64016j4X0ixnZ7lPqD4EOZf25zYaBhQ%2FmFbYJJ59yBub7wKsPTxFkbIm8yVjLr8A%2FkbAbetqpjrDdd424Oo3ksMKPtscQGOqUBpVWHVhMeUxVho6k%2BAOZhgcVkfdU00iDIKyKDo1jfUL%2F4M6FHmqkh6V%2BlNSaec2%2FnejMt015DXKNC4FBtm3MDdKMurrMv3iZ6LW5RruKRzfc%2BYWWkiP7UYJ2G33E1ZtxOxjiYgXIXqhEBfbH%2FsIKgZodG9R%2BPgm48WQ2JAb%2BdOxx9SdzmofsbTqOGIB%2FjMh7ofTSj71MZJvIsVb5BIuBrOLWKjpBc&X-Amz-Signature=2c95483468ee0cda8000dc90e2ec97c2bc0b184471813205839d453c1cadb5a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NE73Z37%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcOvOhm%2BrQHn3%2BJXya9JeiqiwJemW%2BiJeKlon2yH5ldwIgVlVDgCUuQLz0nCh0mfqN9t6S%2Ba8E5D%2BO9ufCN8fzEeIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnUird%2Ff5HFTjVlRircA6%2BRfxGCNVQg40sIjT8AaqmcJnHQPaUcbnaUeJtoGJAhU7WAtO4zSXR01ClKvgh8QBygQbbHWU9%2B%2F0S%2Bf5Sp6xA%2Bd%2BPYYOga5dFMzpyUm59AevF9y38vEwYe7UM9RBIMsATzEicnDLuQ5QSnEZbE5mAUyvIVOTkJ2yWKU4HUiyBlOXVOPtMMxdT6DB%2B%2FvE1PXsJBopkmnSSid4jOSlbm00J5DV46DilBgXB%2FHfGiGSBuJzNg7922fkdSFzLcGrE%2F9snS7D89isDY5e3fJs04IrcMIcVxw%2Fe0t7ARHap6Y%2FzVM1Q02pCxLFQt09kRWjgBqyK2y14JDaHGpFKbE52kCJjS%2F4JeFvUqYYDEuJ5w2lPtPoODM7pNtXNreMXTqDur1BtektKxDssZ8XezFkdESzXafb%2FuNAS5a316kOvpQkTUjRbzTuEvyNG6ia8COyFlBaA7PRO1%2Fxe63FeTvbow3Qaw4oRdybX8BDilfvIWq4e3eLhH2M3E5fvGNJTB4MTONCYPCYkQyqIOKaZs%2Bt%2F9RfSU9kyrKEmAo2zlqa64016j4X0ixnZ7lPqD4EOZf25zYaBhQ%2FmFbYJJ59yBub7wKsPTxFkbIm8yVjLr8A%2FkbAbetqpjrDdd424Oo3ksMKPtscQGOqUBpVWHVhMeUxVho6k%2BAOZhgcVkfdU00iDIKyKDo1jfUL%2F4M6FHmqkh6V%2BlNSaec2%2FnejMt015DXKNC4FBtm3MDdKMurrMv3iZ6LW5RruKRzfc%2BYWWkiP7UYJ2G33E1ZtxOxjiYgXIXqhEBfbH%2FsIKgZodG9R%2BPgm48WQ2JAb%2BdOxx9SdzmofsbTqOGIB%2FjMh7ofTSj71MZJvIsVb5BIuBrOLWKjpBc&X-Amz-Signature=160ddb04931b9309daa50df78da2caa7277091f68e619d1072f003f7375be189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NE73Z37%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcOvOhm%2BrQHn3%2BJXya9JeiqiwJemW%2BiJeKlon2yH5ldwIgVlVDgCUuQLz0nCh0mfqN9t6S%2Ba8E5D%2BO9ufCN8fzEeIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnUird%2Ff5HFTjVlRircA6%2BRfxGCNVQg40sIjT8AaqmcJnHQPaUcbnaUeJtoGJAhU7WAtO4zSXR01ClKvgh8QBygQbbHWU9%2B%2F0S%2Bf5Sp6xA%2Bd%2BPYYOga5dFMzpyUm59AevF9y38vEwYe7UM9RBIMsATzEicnDLuQ5QSnEZbE5mAUyvIVOTkJ2yWKU4HUiyBlOXVOPtMMxdT6DB%2B%2FvE1PXsJBopkmnSSid4jOSlbm00J5DV46DilBgXB%2FHfGiGSBuJzNg7922fkdSFzLcGrE%2F9snS7D89isDY5e3fJs04IrcMIcVxw%2Fe0t7ARHap6Y%2FzVM1Q02pCxLFQt09kRWjgBqyK2y14JDaHGpFKbE52kCJjS%2F4JeFvUqYYDEuJ5w2lPtPoODM7pNtXNreMXTqDur1BtektKxDssZ8XezFkdESzXafb%2FuNAS5a316kOvpQkTUjRbzTuEvyNG6ia8COyFlBaA7PRO1%2Fxe63FeTvbow3Qaw4oRdybX8BDilfvIWq4e3eLhH2M3E5fvGNJTB4MTONCYPCYkQyqIOKaZs%2Bt%2F9RfSU9kyrKEmAo2zlqa64016j4X0ixnZ7lPqD4EOZf25zYaBhQ%2FmFbYJJ59yBub7wKsPTxFkbIm8yVjLr8A%2FkbAbetqpjrDdd424Oo3ksMKPtscQGOqUBpVWHVhMeUxVho6k%2BAOZhgcVkfdU00iDIKyKDo1jfUL%2F4M6FHmqkh6V%2BlNSaec2%2FnejMt015DXKNC4FBtm3MDdKMurrMv3iZ6LW5RruKRzfc%2BYWWkiP7UYJ2G33E1ZtxOxjiYgXIXqhEBfbH%2FsIKgZodG9R%2BPgm48WQ2JAb%2BdOxx9SdzmofsbTqOGIB%2FjMh7ofTSj71MZJvIsVb5BIuBrOLWKjpBc&X-Amz-Signature=9efe7c53b981017600e0f4841cc5a79bf97829a9b13a6d1500c5607b97ef673c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NE73Z37%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcOvOhm%2BrQHn3%2BJXya9JeiqiwJemW%2BiJeKlon2yH5ldwIgVlVDgCUuQLz0nCh0mfqN9t6S%2Ba8E5D%2BO9ufCN8fzEeIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnUird%2Ff5HFTjVlRircA6%2BRfxGCNVQg40sIjT8AaqmcJnHQPaUcbnaUeJtoGJAhU7WAtO4zSXR01ClKvgh8QBygQbbHWU9%2B%2F0S%2Bf5Sp6xA%2Bd%2BPYYOga5dFMzpyUm59AevF9y38vEwYe7UM9RBIMsATzEicnDLuQ5QSnEZbE5mAUyvIVOTkJ2yWKU4HUiyBlOXVOPtMMxdT6DB%2B%2FvE1PXsJBopkmnSSid4jOSlbm00J5DV46DilBgXB%2FHfGiGSBuJzNg7922fkdSFzLcGrE%2F9snS7D89isDY5e3fJs04IrcMIcVxw%2Fe0t7ARHap6Y%2FzVM1Q02pCxLFQt09kRWjgBqyK2y14JDaHGpFKbE52kCJjS%2F4JeFvUqYYDEuJ5w2lPtPoODM7pNtXNreMXTqDur1BtektKxDssZ8XezFkdESzXafb%2FuNAS5a316kOvpQkTUjRbzTuEvyNG6ia8COyFlBaA7PRO1%2Fxe63FeTvbow3Qaw4oRdybX8BDilfvIWq4e3eLhH2M3E5fvGNJTB4MTONCYPCYkQyqIOKaZs%2Bt%2F9RfSU9kyrKEmAo2zlqa64016j4X0ixnZ7lPqD4EOZf25zYaBhQ%2FmFbYJJ59yBub7wKsPTxFkbIm8yVjLr8A%2FkbAbetqpjrDdd424Oo3ksMKPtscQGOqUBpVWHVhMeUxVho6k%2BAOZhgcVkfdU00iDIKyKDo1jfUL%2F4M6FHmqkh6V%2BlNSaec2%2FnejMt015DXKNC4FBtm3MDdKMurrMv3iZ6LW5RruKRzfc%2BYWWkiP7UYJ2G33E1ZtxOxjiYgXIXqhEBfbH%2FsIKgZodG9R%2BPgm48WQ2JAb%2BdOxx9SdzmofsbTqOGIB%2FjMh7ofTSj71MZJvIsVb5BIuBrOLWKjpBc&X-Amz-Signature=0dc53bc1e947179d4761f5100638f22e84e38f70b8cae12f34edf4821528697c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NE73Z37%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcOvOhm%2BrQHn3%2BJXya9JeiqiwJemW%2BiJeKlon2yH5ldwIgVlVDgCUuQLz0nCh0mfqN9t6S%2Ba8E5D%2BO9ufCN8fzEeIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnUird%2Ff5HFTjVlRircA6%2BRfxGCNVQg40sIjT8AaqmcJnHQPaUcbnaUeJtoGJAhU7WAtO4zSXR01ClKvgh8QBygQbbHWU9%2B%2F0S%2Bf5Sp6xA%2Bd%2BPYYOga5dFMzpyUm59AevF9y38vEwYe7UM9RBIMsATzEicnDLuQ5QSnEZbE5mAUyvIVOTkJ2yWKU4HUiyBlOXVOPtMMxdT6DB%2B%2FvE1PXsJBopkmnSSid4jOSlbm00J5DV46DilBgXB%2FHfGiGSBuJzNg7922fkdSFzLcGrE%2F9snS7D89isDY5e3fJs04IrcMIcVxw%2Fe0t7ARHap6Y%2FzVM1Q02pCxLFQt09kRWjgBqyK2y14JDaHGpFKbE52kCJjS%2F4JeFvUqYYDEuJ5w2lPtPoODM7pNtXNreMXTqDur1BtektKxDssZ8XezFkdESzXafb%2FuNAS5a316kOvpQkTUjRbzTuEvyNG6ia8COyFlBaA7PRO1%2Fxe63FeTvbow3Qaw4oRdybX8BDilfvIWq4e3eLhH2M3E5fvGNJTB4MTONCYPCYkQyqIOKaZs%2Bt%2F9RfSU9kyrKEmAo2zlqa64016j4X0ixnZ7lPqD4EOZf25zYaBhQ%2FmFbYJJ59yBub7wKsPTxFkbIm8yVjLr8A%2FkbAbetqpjrDdd424Oo3ksMKPtscQGOqUBpVWHVhMeUxVho6k%2BAOZhgcVkfdU00iDIKyKDo1jfUL%2F4M6FHmqkh6V%2BlNSaec2%2FnejMt015DXKNC4FBtm3MDdKMurrMv3iZ6LW5RruKRzfc%2BYWWkiP7UYJ2G33E1ZtxOxjiYgXIXqhEBfbH%2FsIKgZodG9R%2BPgm48WQ2JAb%2BdOxx9SdzmofsbTqOGIB%2FjMh7ofTSj71MZJvIsVb5BIuBrOLWKjpBc&X-Amz-Signature=41c05876b67986c615b8f362b5308209a792544ef462bc365d1ad8e3f7ee5e4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NE73Z37%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcOvOhm%2BrQHn3%2BJXya9JeiqiwJemW%2BiJeKlon2yH5ldwIgVlVDgCUuQLz0nCh0mfqN9t6S%2Ba8E5D%2BO9ufCN8fzEeIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnUird%2Ff5HFTjVlRircA6%2BRfxGCNVQg40sIjT8AaqmcJnHQPaUcbnaUeJtoGJAhU7WAtO4zSXR01ClKvgh8QBygQbbHWU9%2B%2F0S%2Bf5Sp6xA%2Bd%2BPYYOga5dFMzpyUm59AevF9y38vEwYe7UM9RBIMsATzEicnDLuQ5QSnEZbE5mAUyvIVOTkJ2yWKU4HUiyBlOXVOPtMMxdT6DB%2B%2FvE1PXsJBopkmnSSid4jOSlbm00J5DV46DilBgXB%2FHfGiGSBuJzNg7922fkdSFzLcGrE%2F9snS7D89isDY5e3fJs04IrcMIcVxw%2Fe0t7ARHap6Y%2FzVM1Q02pCxLFQt09kRWjgBqyK2y14JDaHGpFKbE52kCJjS%2F4JeFvUqYYDEuJ5w2lPtPoODM7pNtXNreMXTqDur1BtektKxDssZ8XezFkdESzXafb%2FuNAS5a316kOvpQkTUjRbzTuEvyNG6ia8COyFlBaA7PRO1%2Fxe63FeTvbow3Qaw4oRdybX8BDilfvIWq4e3eLhH2M3E5fvGNJTB4MTONCYPCYkQyqIOKaZs%2Bt%2F9RfSU9kyrKEmAo2zlqa64016j4X0ixnZ7lPqD4EOZf25zYaBhQ%2FmFbYJJ59yBub7wKsPTxFkbIm8yVjLr8A%2FkbAbetqpjrDdd424Oo3ksMKPtscQGOqUBpVWHVhMeUxVho6k%2BAOZhgcVkfdU00iDIKyKDo1jfUL%2F4M6FHmqkh6V%2BlNSaec2%2FnejMt015DXKNC4FBtm3MDdKMurrMv3iZ6LW5RruKRzfc%2BYWWkiP7UYJ2G33E1ZtxOxjiYgXIXqhEBfbH%2FsIKgZodG9R%2BPgm48WQ2JAb%2BdOxx9SdzmofsbTqOGIB%2FjMh7ofTSj71MZJvIsVb5BIuBrOLWKjpBc&X-Amz-Signature=7f8fa197d3b0a507a57f47709d1a7ed03acc2138fc0ca608204ae25333296e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NE73Z37%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcOvOhm%2BrQHn3%2BJXya9JeiqiwJemW%2BiJeKlon2yH5ldwIgVlVDgCUuQLz0nCh0mfqN9t6S%2Ba8E5D%2BO9ufCN8fzEeIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnUird%2Ff5HFTjVlRircA6%2BRfxGCNVQg40sIjT8AaqmcJnHQPaUcbnaUeJtoGJAhU7WAtO4zSXR01ClKvgh8QBygQbbHWU9%2B%2F0S%2Bf5Sp6xA%2Bd%2BPYYOga5dFMzpyUm59AevF9y38vEwYe7UM9RBIMsATzEicnDLuQ5QSnEZbE5mAUyvIVOTkJ2yWKU4HUiyBlOXVOPtMMxdT6DB%2B%2FvE1PXsJBopkmnSSid4jOSlbm00J5DV46DilBgXB%2FHfGiGSBuJzNg7922fkdSFzLcGrE%2F9snS7D89isDY5e3fJs04IrcMIcVxw%2Fe0t7ARHap6Y%2FzVM1Q02pCxLFQt09kRWjgBqyK2y14JDaHGpFKbE52kCJjS%2F4JeFvUqYYDEuJ5w2lPtPoODM7pNtXNreMXTqDur1BtektKxDssZ8XezFkdESzXafb%2FuNAS5a316kOvpQkTUjRbzTuEvyNG6ia8COyFlBaA7PRO1%2Fxe63FeTvbow3Qaw4oRdybX8BDilfvIWq4e3eLhH2M3E5fvGNJTB4MTONCYPCYkQyqIOKaZs%2Bt%2F9RfSU9kyrKEmAo2zlqa64016j4X0ixnZ7lPqD4EOZf25zYaBhQ%2FmFbYJJ59yBub7wKsPTxFkbIm8yVjLr8A%2FkbAbetqpjrDdd424Oo3ksMKPtscQGOqUBpVWHVhMeUxVho6k%2BAOZhgcVkfdU00iDIKyKDo1jfUL%2F4M6FHmqkh6V%2BlNSaec2%2FnejMt015DXKNC4FBtm3MDdKMurrMv3iZ6LW5RruKRzfc%2BYWWkiP7UYJ2G33E1ZtxOxjiYgXIXqhEBfbH%2FsIKgZodG9R%2BPgm48WQ2JAb%2BdOxx9SdzmofsbTqOGIB%2FjMh7ofTSj71MZJvIsVb5BIuBrOLWKjpBc&X-Amz-Signature=63f1ed3dd1447873039cf6084655abb7206703acf99efafdfa42f88f9b7ba271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NE73Z37%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcOvOhm%2BrQHn3%2BJXya9JeiqiwJemW%2BiJeKlon2yH5ldwIgVlVDgCUuQLz0nCh0mfqN9t6S%2Ba8E5D%2BO9ufCN8fzEeIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnUird%2Ff5HFTjVlRircA6%2BRfxGCNVQg40sIjT8AaqmcJnHQPaUcbnaUeJtoGJAhU7WAtO4zSXR01ClKvgh8QBygQbbHWU9%2B%2F0S%2Bf5Sp6xA%2Bd%2BPYYOga5dFMzpyUm59AevF9y38vEwYe7UM9RBIMsATzEicnDLuQ5QSnEZbE5mAUyvIVOTkJ2yWKU4HUiyBlOXVOPtMMxdT6DB%2B%2FvE1PXsJBopkmnSSid4jOSlbm00J5DV46DilBgXB%2FHfGiGSBuJzNg7922fkdSFzLcGrE%2F9snS7D89isDY5e3fJs04IrcMIcVxw%2Fe0t7ARHap6Y%2FzVM1Q02pCxLFQt09kRWjgBqyK2y14JDaHGpFKbE52kCJjS%2F4JeFvUqYYDEuJ5w2lPtPoODM7pNtXNreMXTqDur1BtektKxDssZ8XezFkdESzXafb%2FuNAS5a316kOvpQkTUjRbzTuEvyNG6ia8COyFlBaA7PRO1%2Fxe63FeTvbow3Qaw4oRdybX8BDilfvIWq4e3eLhH2M3E5fvGNJTB4MTONCYPCYkQyqIOKaZs%2Bt%2F9RfSU9kyrKEmAo2zlqa64016j4X0ixnZ7lPqD4EOZf25zYaBhQ%2FmFbYJJ59yBub7wKsPTxFkbIm8yVjLr8A%2FkbAbetqpjrDdd424Oo3ksMKPtscQGOqUBpVWHVhMeUxVho6k%2BAOZhgcVkfdU00iDIKyKDo1jfUL%2F4M6FHmqkh6V%2BlNSaec2%2FnejMt015DXKNC4FBtm3MDdKMurrMv3iZ6LW5RruKRzfc%2BYWWkiP7UYJ2G33E1ZtxOxjiYgXIXqhEBfbH%2FsIKgZodG9R%2BPgm48WQ2JAb%2BdOxx9SdzmofsbTqOGIB%2FjMh7ofTSj71MZJvIsVb5BIuBrOLWKjpBc&X-Amz-Signature=59b576111782589d8a7941196dccd6608102ac8653c468f231cfe5ec65b4bdc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NE73Z37%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcOvOhm%2BrQHn3%2BJXya9JeiqiwJemW%2BiJeKlon2yH5ldwIgVlVDgCUuQLz0nCh0mfqN9t6S%2Ba8E5D%2BO9ufCN8fzEeIqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnUird%2Ff5HFTjVlRircA6%2BRfxGCNVQg40sIjT8AaqmcJnHQPaUcbnaUeJtoGJAhU7WAtO4zSXR01ClKvgh8QBygQbbHWU9%2B%2F0S%2Bf5Sp6xA%2Bd%2BPYYOga5dFMzpyUm59AevF9y38vEwYe7UM9RBIMsATzEicnDLuQ5QSnEZbE5mAUyvIVOTkJ2yWKU4HUiyBlOXVOPtMMxdT6DB%2B%2FvE1PXsJBopkmnSSid4jOSlbm00J5DV46DilBgXB%2FHfGiGSBuJzNg7922fkdSFzLcGrE%2F9snS7D89isDY5e3fJs04IrcMIcVxw%2Fe0t7ARHap6Y%2FzVM1Q02pCxLFQt09kRWjgBqyK2y14JDaHGpFKbE52kCJjS%2F4JeFvUqYYDEuJ5w2lPtPoODM7pNtXNreMXTqDur1BtektKxDssZ8XezFkdESzXafb%2FuNAS5a316kOvpQkTUjRbzTuEvyNG6ia8COyFlBaA7PRO1%2Fxe63FeTvbow3Qaw4oRdybX8BDilfvIWq4e3eLhH2M3E5fvGNJTB4MTONCYPCYkQyqIOKaZs%2Bt%2F9RfSU9kyrKEmAo2zlqa64016j4X0ixnZ7lPqD4EOZf25zYaBhQ%2FmFbYJJ59yBub7wKsPTxFkbIm8yVjLr8A%2FkbAbetqpjrDdd424Oo3ksMKPtscQGOqUBpVWHVhMeUxVho6k%2BAOZhgcVkfdU00iDIKyKDo1jfUL%2F4M6FHmqkh6V%2BlNSaec2%2FnejMt015DXKNC4FBtm3MDdKMurrMv3iZ6LW5RruKRzfc%2BYWWkiP7UYJ2G33E1ZtxOxjiYgXIXqhEBfbH%2FsIKgZodG9R%2BPgm48WQ2JAb%2BdOxx9SdzmofsbTqOGIB%2FjMh7ofTSj71MZJvIsVb5BIuBrOLWKjpBc&X-Amz-Signature=b038383afde614a48bd8e663c1d6174ccf6cc1dc769df75e484271a787e5d83c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Nav2 settings

TODO: change footprint?
