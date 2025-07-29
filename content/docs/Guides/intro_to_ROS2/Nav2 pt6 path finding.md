---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-29T17:14:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-29T17:14:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I54MAEV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG2%2BwKHUBqEEn3YER0hvvbQYG3lse%2BXqYfabRy2m1EvAiANureJWcTArxVaSDLQfDgL0zpPeSFtUPCJaXRQL4katyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgaXR9Sny%2BYhpembKtwDNolZw6nx9cd3MCVUMj2NbEp1fRzUQEi%2FDSt7pYmuFto2vp1rpGBnMIYBGO2IHzpg0QP%2FxUbefvG%2BGfT83VcLugQ54FXIBCxUvCbSya73MLhplL%2F2l2DY3Uo%2FiZxIYd%2FQf%2BtrgkKfWjMvqd4lEwpTMed7kavJGUa%2FS5Db5DCAXtYZqmeU839SEhrb2fvnbOF92YwAU9y18sITq7ptLxwAqT2SqU%2B6V5fH2wy%2BJ0YFZSzbG27vrYOqV102NGlO7ZNW%2Ff0zDaaQuwhazd%2FmYWlNRTIpLL8c6GXHym2DB9WemXG2lvwGSaCZzDNxT6ajtVNqcWjwXFNJ3QsGqwWWfturbYQCd34YfOe9wN1Bfk7eXK61Xnm%2B1YLEVxpNT9LzRBmidwX%2BCuDLleq3tWjFEbQwHkwMhkIBBXZpjvdZS8rqRAthqW3y80zyh5BF3sQkeaRS53VojPVi%2BzuCAY4hmtXnu9J6OQUgjmxrbQnjDko2ogYgIRZ%2FC3dpcsPe0%2FT063uADmeJs897%2FbfShfr%2FDS0cEIQTwRbQia%2BGR1pRZ0%2FUYyjyz6%2BtiwVS8M2tRSqRdAhUpsNUJZgWZY%2FZdk9tIpGqhEK0u3D4mVtE6yRIUfP4xFrtWRn2MRvhmnINHckw%2B4mlxAY6pgEpL%2FnQIXWFx7ErDjTAedCVO3q8gWkISXBlWWCgVZ2cU6sMTmAngQnI3dCOIOEcDKbsFFK86nXC4%2BHRL%2FXsZP8a5uvCkI5%2BIvpHJJ6h22EqedWWRD7zCciyxByZOWGZ4bmpIBCy8vhgHi3OipsLjprlejf1piuR09OcGU%2FyZKCyuQiNIifMpt26sgVO1ylZlviuPLnbidpqvgiL5Oi1b56677za%2F%2Faz&X-Amz-Signature=c5487e8c9adc1289ea503bd0c4fa5283d17b57b3a33771baf28c07fc3ac6435c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I54MAEV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG2%2BwKHUBqEEn3YER0hvvbQYG3lse%2BXqYfabRy2m1EvAiANureJWcTArxVaSDLQfDgL0zpPeSFtUPCJaXRQL4katyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgaXR9Sny%2BYhpembKtwDNolZw6nx9cd3MCVUMj2NbEp1fRzUQEi%2FDSt7pYmuFto2vp1rpGBnMIYBGO2IHzpg0QP%2FxUbefvG%2BGfT83VcLugQ54FXIBCxUvCbSya73MLhplL%2F2l2DY3Uo%2FiZxIYd%2FQf%2BtrgkKfWjMvqd4lEwpTMed7kavJGUa%2FS5Db5DCAXtYZqmeU839SEhrb2fvnbOF92YwAU9y18sITq7ptLxwAqT2SqU%2B6V5fH2wy%2BJ0YFZSzbG27vrYOqV102NGlO7ZNW%2Ff0zDaaQuwhazd%2FmYWlNRTIpLL8c6GXHym2DB9WemXG2lvwGSaCZzDNxT6ajtVNqcWjwXFNJ3QsGqwWWfturbYQCd34YfOe9wN1Bfk7eXK61Xnm%2B1YLEVxpNT9LzRBmidwX%2BCuDLleq3tWjFEbQwHkwMhkIBBXZpjvdZS8rqRAthqW3y80zyh5BF3sQkeaRS53VojPVi%2BzuCAY4hmtXnu9J6OQUgjmxrbQnjDko2ogYgIRZ%2FC3dpcsPe0%2FT063uADmeJs897%2FbfShfr%2FDS0cEIQTwRbQia%2BGR1pRZ0%2FUYyjyz6%2BtiwVS8M2tRSqRdAhUpsNUJZgWZY%2FZdk9tIpGqhEK0u3D4mVtE6yRIUfP4xFrtWRn2MRvhmnINHckw%2B4mlxAY6pgEpL%2FnQIXWFx7ErDjTAedCVO3q8gWkISXBlWWCgVZ2cU6sMTmAngQnI3dCOIOEcDKbsFFK86nXC4%2BHRL%2FXsZP8a5uvCkI5%2BIvpHJJ6h22EqedWWRD7zCciyxByZOWGZ4bmpIBCy8vhgHi3OipsLjprlejf1piuR09OcGU%2FyZKCyuQiNIifMpt26sgVO1ylZlviuPLnbidpqvgiL5Oi1b56677za%2F%2Faz&X-Amz-Signature=71b6094aeee1ca8cd2d1009d557a953a9cdda53b1b0ba54c7e36439e4a2fec5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I54MAEV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG2%2BwKHUBqEEn3YER0hvvbQYG3lse%2BXqYfabRy2m1EvAiANureJWcTArxVaSDLQfDgL0zpPeSFtUPCJaXRQL4katyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgaXR9Sny%2BYhpembKtwDNolZw6nx9cd3MCVUMj2NbEp1fRzUQEi%2FDSt7pYmuFto2vp1rpGBnMIYBGO2IHzpg0QP%2FxUbefvG%2BGfT83VcLugQ54FXIBCxUvCbSya73MLhplL%2F2l2DY3Uo%2FiZxIYd%2FQf%2BtrgkKfWjMvqd4lEwpTMed7kavJGUa%2FS5Db5DCAXtYZqmeU839SEhrb2fvnbOF92YwAU9y18sITq7ptLxwAqT2SqU%2B6V5fH2wy%2BJ0YFZSzbG27vrYOqV102NGlO7ZNW%2Ff0zDaaQuwhazd%2FmYWlNRTIpLL8c6GXHym2DB9WemXG2lvwGSaCZzDNxT6ajtVNqcWjwXFNJ3QsGqwWWfturbYQCd34YfOe9wN1Bfk7eXK61Xnm%2B1YLEVxpNT9LzRBmidwX%2BCuDLleq3tWjFEbQwHkwMhkIBBXZpjvdZS8rqRAthqW3y80zyh5BF3sQkeaRS53VojPVi%2BzuCAY4hmtXnu9J6OQUgjmxrbQnjDko2ogYgIRZ%2FC3dpcsPe0%2FT063uADmeJs897%2FbfShfr%2FDS0cEIQTwRbQia%2BGR1pRZ0%2FUYyjyz6%2BtiwVS8M2tRSqRdAhUpsNUJZgWZY%2FZdk9tIpGqhEK0u3D4mVtE6yRIUfP4xFrtWRn2MRvhmnINHckw%2B4mlxAY6pgEpL%2FnQIXWFx7ErDjTAedCVO3q8gWkISXBlWWCgVZ2cU6sMTmAngQnI3dCOIOEcDKbsFFK86nXC4%2BHRL%2FXsZP8a5uvCkI5%2BIvpHJJ6h22EqedWWRD7zCciyxByZOWGZ4bmpIBCy8vhgHi3OipsLjprlejf1piuR09OcGU%2FyZKCyuQiNIifMpt26sgVO1ylZlviuPLnbidpqvgiL5Oi1b56677za%2F%2Faz&X-Amz-Signature=a0cf0d6a9797ce081e5c7788c54ff7483923888a2b8dcdf2be736555cd1cb0e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I54MAEV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG2%2BwKHUBqEEn3YER0hvvbQYG3lse%2BXqYfabRy2m1EvAiANureJWcTArxVaSDLQfDgL0zpPeSFtUPCJaXRQL4katyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgaXR9Sny%2BYhpembKtwDNolZw6nx9cd3MCVUMj2NbEp1fRzUQEi%2FDSt7pYmuFto2vp1rpGBnMIYBGO2IHzpg0QP%2FxUbefvG%2BGfT83VcLugQ54FXIBCxUvCbSya73MLhplL%2F2l2DY3Uo%2FiZxIYd%2FQf%2BtrgkKfWjMvqd4lEwpTMed7kavJGUa%2FS5Db5DCAXtYZqmeU839SEhrb2fvnbOF92YwAU9y18sITq7ptLxwAqT2SqU%2B6V5fH2wy%2BJ0YFZSzbG27vrYOqV102NGlO7ZNW%2Ff0zDaaQuwhazd%2FmYWlNRTIpLL8c6GXHym2DB9WemXG2lvwGSaCZzDNxT6ajtVNqcWjwXFNJ3QsGqwWWfturbYQCd34YfOe9wN1Bfk7eXK61Xnm%2B1YLEVxpNT9LzRBmidwX%2BCuDLleq3tWjFEbQwHkwMhkIBBXZpjvdZS8rqRAthqW3y80zyh5BF3sQkeaRS53VojPVi%2BzuCAY4hmtXnu9J6OQUgjmxrbQnjDko2ogYgIRZ%2FC3dpcsPe0%2FT063uADmeJs897%2FbfShfr%2FDS0cEIQTwRbQia%2BGR1pRZ0%2FUYyjyz6%2BtiwVS8M2tRSqRdAhUpsNUJZgWZY%2FZdk9tIpGqhEK0u3D4mVtE6yRIUfP4xFrtWRn2MRvhmnINHckw%2B4mlxAY6pgEpL%2FnQIXWFx7ErDjTAedCVO3q8gWkISXBlWWCgVZ2cU6sMTmAngQnI3dCOIOEcDKbsFFK86nXC4%2BHRL%2FXsZP8a5uvCkI5%2BIvpHJJ6h22EqedWWRD7zCciyxByZOWGZ4bmpIBCy8vhgHi3OipsLjprlejf1piuR09OcGU%2FyZKCyuQiNIifMpt26sgVO1ylZlviuPLnbidpqvgiL5Oi1b56677za%2F%2Faz&X-Amz-Signature=b56275208892bdecdb14c09e62fd8d0af76bce4401ab82b5033e899040461c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I54MAEV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG2%2BwKHUBqEEn3YER0hvvbQYG3lse%2BXqYfabRy2m1EvAiANureJWcTArxVaSDLQfDgL0zpPeSFtUPCJaXRQL4katyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgaXR9Sny%2BYhpembKtwDNolZw6nx9cd3MCVUMj2NbEp1fRzUQEi%2FDSt7pYmuFto2vp1rpGBnMIYBGO2IHzpg0QP%2FxUbefvG%2BGfT83VcLugQ54FXIBCxUvCbSya73MLhplL%2F2l2DY3Uo%2FiZxIYd%2FQf%2BtrgkKfWjMvqd4lEwpTMed7kavJGUa%2FS5Db5DCAXtYZqmeU839SEhrb2fvnbOF92YwAU9y18sITq7ptLxwAqT2SqU%2B6V5fH2wy%2BJ0YFZSzbG27vrYOqV102NGlO7ZNW%2Ff0zDaaQuwhazd%2FmYWlNRTIpLL8c6GXHym2DB9WemXG2lvwGSaCZzDNxT6ajtVNqcWjwXFNJ3QsGqwWWfturbYQCd34YfOe9wN1Bfk7eXK61Xnm%2B1YLEVxpNT9LzRBmidwX%2BCuDLleq3tWjFEbQwHkwMhkIBBXZpjvdZS8rqRAthqW3y80zyh5BF3sQkeaRS53VojPVi%2BzuCAY4hmtXnu9J6OQUgjmxrbQnjDko2ogYgIRZ%2FC3dpcsPe0%2FT063uADmeJs897%2FbfShfr%2FDS0cEIQTwRbQia%2BGR1pRZ0%2FUYyjyz6%2BtiwVS8M2tRSqRdAhUpsNUJZgWZY%2FZdk9tIpGqhEK0u3D4mVtE6yRIUfP4xFrtWRn2MRvhmnINHckw%2B4mlxAY6pgEpL%2FnQIXWFx7ErDjTAedCVO3q8gWkISXBlWWCgVZ2cU6sMTmAngQnI3dCOIOEcDKbsFFK86nXC4%2BHRL%2FXsZP8a5uvCkI5%2BIvpHJJ6h22EqedWWRD7zCciyxByZOWGZ4bmpIBCy8vhgHi3OipsLjprlejf1piuR09OcGU%2FyZKCyuQiNIifMpt26sgVO1ylZlviuPLnbidpqvgiL5Oi1b56677za%2F%2Faz&X-Amz-Signature=74becab1c4b2bfb7abdda606914f147d5e61e1e69e0bbb6e2dce551a473aa726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I54MAEV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG2%2BwKHUBqEEn3YER0hvvbQYG3lse%2BXqYfabRy2m1EvAiANureJWcTArxVaSDLQfDgL0zpPeSFtUPCJaXRQL4katyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgaXR9Sny%2BYhpembKtwDNolZw6nx9cd3MCVUMj2NbEp1fRzUQEi%2FDSt7pYmuFto2vp1rpGBnMIYBGO2IHzpg0QP%2FxUbefvG%2BGfT83VcLugQ54FXIBCxUvCbSya73MLhplL%2F2l2DY3Uo%2FiZxIYd%2FQf%2BtrgkKfWjMvqd4lEwpTMed7kavJGUa%2FS5Db5DCAXtYZqmeU839SEhrb2fvnbOF92YwAU9y18sITq7ptLxwAqT2SqU%2B6V5fH2wy%2BJ0YFZSzbG27vrYOqV102NGlO7ZNW%2Ff0zDaaQuwhazd%2FmYWlNRTIpLL8c6GXHym2DB9WemXG2lvwGSaCZzDNxT6ajtVNqcWjwXFNJ3QsGqwWWfturbYQCd34YfOe9wN1Bfk7eXK61Xnm%2B1YLEVxpNT9LzRBmidwX%2BCuDLleq3tWjFEbQwHkwMhkIBBXZpjvdZS8rqRAthqW3y80zyh5BF3sQkeaRS53VojPVi%2BzuCAY4hmtXnu9J6OQUgjmxrbQnjDko2ogYgIRZ%2FC3dpcsPe0%2FT063uADmeJs897%2FbfShfr%2FDS0cEIQTwRbQia%2BGR1pRZ0%2FUYyjyz6%2BtiwVS8M2tRSqRdAhUpsNUJZgWZY%2FZdk9tIpGqhEK0u3D4mVtE6yRIUfP4xFrtWRn2MRvhmnINHckw%2B4mlxAY6pgEpL%2FnQIXWFx7ErDjTAedCVO3q8gWkISXBlWWCgVZ2cU6sMTmAngQnI3dCOIOEcDKbsFFK86nXC4%2BHRL%2FXsZP8a5uvCkI5%2BIvpHJJ6h22EqedWWRD7zCciyxByZOWGZ4bmpIBCy8vhgHi3OipsLjprlejf1piuR09OcGU%2FyZKCyuQiNIifMpt26sgVO1ylZlviuPLnbidpqvgiL5Oi1b56677za%2F%2Faz&X-Amz-Signature=089b12abd0a585908c2cb5b68bc989a8d155b3852b4faa9f31a159e95fe4e214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I54MAEV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG2%2BwKHUBqEEn3YER0hvvbQYG3lse%2BXqYfabRy2m1EvAiANureJWcTArxVaSDLQfDgL0zpPeSFtUPCJaXRQL4katyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgaXR9Sny%2BYhpembKtwDNolZw6nx9cd3MCVUMj2NbEp1fRzUQEi%2FDSt7pYmuFto2vp1rpGBnMIYBGO2IHzpg0QP%2FxUbefvG%2BGfT83VcLugQ54FXIBCxUvCbSya73MLhplL%2F2l2DY3Uo%2FiZxIYd%2FQf%2BtrgkKfWjMvqd4lEwpTMed7kavJGUa%2FS5Db5DCAXtYZqmeU839SEhrb2fvnbOF92YwAU9y18sITq7ptLxwAqT2SqU%2B6V5fH2wy%2BJ0YFZSzbG27vrYOqV102NGlO7ZNW%2Ff0zDaaQuwhazd%2FmYWlNRTIpLL8c6GXHym2DB9WemXG2lvwGSaCZzDNxT6ajtVNqcWjwXFNJ3QsGqwWWfturbYQCd34YfOe9wN1Bfk7eXK61Xnm%2B1YLEVxpNT9LzRBmidwX%2BCuDLleq3tWjFEbQwHkwMhkIBBXZpjvdZS8rqRAthqW3y80zyh5BF3sQkeaRS53VojPVi%2BzuCAY4hmtXnu9J6OQUgjmxrbQnjDko2ogYgIRZ%2FC3dpcsPe0%2FT063uADmeJs897%2FbfShfr%2FDS0cEIQTwRbQia%2BGR1pRZ0%2FUYyjyz6%2BtiwVS8M2tRSqRdAhUpsNUJZgWZY%2FZdk9tIpGqhEK0u3D4mVtE6yRIUfP4xFrtWRn2MRvhmnINHckw%2B4mlxAY6pgEpL%2FnQIXWFx7ErDjTAedCVO3q8gWkISXBlWWCgVZ2cU6sMTmAngQnI3dCOIOEcDKbsFFK86nXC4%2BHRL%2FXsZP8a5uvCkI5%2BIvpHJJ6h22EqedWWRD7zCciyxByZOWGZ4bmpIBCy8vhgHi3OipsLjprlejf1piuR09OcGU%2FyZKCyuQiNIifMpt26sgVO1ylZlviuPLnbidpqvgiL5Oi1b56677za%2F%2Faz&X-Amz-Signature=a2a873aa210eda27473eaaffa578984272c36ef9d0da7127dbfdc0a5d898291b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I54MAEV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG2%2BwKHUBqEEn3YER0hvvbQYG3lse%2BXqYfabRy2m1EvAiANureJWcTArxVaSDLQfDgL0zpPeSFtUPCJaXRQL4katyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgaXR9Sny%2BYhpembKtwDNolZw6nx9cd3MCVUMj2NbEp1fRzUQEi%2FDSt7pYmuFto2vp1rpGBnMIYBGO2IHzpg0QP%2FxUbefvG%2BGfT83VcLugQ54FXIBCxUvCbSya73MLhplL%2F2l2DY3Uo%2FiZxIYd%2FQf%2BtrgkKfWjMvqd4lEwpTMed7kavJGUa%2FS5Db5DCAXtYZqmeU839SEhrb2fvnbOF92YwAU9y18sITq7ptLxwAqT2SqU%2B6V5fH2wy%2BJ0YFZSzbG27vrYOqV102NGlO7ZNW%2Ff0zDaaQuwhazd%2FmYWlNRTIpLL8c6GXHym2DB9WemXG2lvwGSaCZzDNxT6ajtVNqcWjwXFNJ3QsGqwWWfturbYQCd34YfOe9wN1Bfk7eXK61Xnm%2B1YLEVxpNT9LzRBmidwX%2BCuDLleq3tWjFEbQwHkwMhkIBBXZpjvdZS8rqRAthqW3y80zyh5BF3sQkeaRS53VojPVi%2BzuCAY4hmtXnu9J6OQUgjmxrbQnjDko2ogYgIRZ%2FC3dpcsPe0%2FT063uADmeJs897%2FbfShfr%2FDS0cEIQTwRbQia%2BGR1pRZ0%2FUYyjyz6%2BtiwVS8M2tRSqRdAhUpsNUJZgWZY%2FZdk9tIpGqhEK0u3D4mVtE6yRIUfP4xFrtWRn2MRvhmnINHckw%2B4mlxAY6pgEpL%2FnQIXWFx7ErDjTAedCVO3q8gWkISXBlWWCgVZ2cU6sMTmAngQnI3dCOIOEcDKbsFFK86nXC4%2BHRL%2FXsZP8a5uvCkI5%2BIvpHJJ6h22EqedWWRD7zCciyxByZOWGZ4bmpIBCy8vhgHi3OipsLjprlejf1piuR09OcGU%2FyZKCyuQiNIifMpt26sgVO1ylZlviuPLnbidpqvgiL5Oi1b56677za%2F%2Faz&X-Amz-Signature=f80f3ea2816fe4c28b81c00388cb13374447f5a2528cf77f55257ac488d02286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I54MAEV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG2%2BwKHUBqEEn3YER0hvvbQYG3lse%2BXqYfabRy2m1EvAiANureJWcTArxVaSDLQfDgL0zpPeSFtUPCJaXRQL4katyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgaXR9Sny%2BYhpembKtwDNolZw6nx9cd3MCVUMj2NbEp1fRzUQEi%2FDSt7pYmuFto2vp1rpGBnMIYBGO2IHzpg0QP%2FxUbefvG%2BGfT83VcLugQ54FXIBCxUvCbSya73MLhplL%2F2l2DY3Uo%2FiZxIYd%2FQf%2BtrgkKfWjMvqd4lEwpTMed7kavJGUa%2FS5Db5DCAXtYZqmeU839SEhrb2fvnbOF92YwAU9y18sITq7ptLxwAqT2SqU%2B6V5fH2wy%2BJ0YFZSzbG27vrYOqV102NGlO7ZNW%2Ff0zDaaQuwhazd%2FmYWlNRTIpLL8c6GXHym2DB9WemXG2lvwGSaCZzDNxT6ajtVNqcWjwXFNJ3QsGqwWWfturbYQCd34YfOe9wN1Bfk7eXK61Xnm%2B1YLEVxpNT9LzRBmidwX%2BCuDLleq3tWjFEbQwHkwMhkIBBXZpjvdZS8rqRAthqW3y80zyh5BF3sQkeaRS53VojPVi%2BzuCAY4hmtXnu9J6OQUgjmxrbQnjDko2ogYgIRZ%2FC3dpcsPe0%2FT063uADmeJs897%2FbfShfr%2FDS0cEIQTwRbQia%2BGR1pRZ0%2FUYyjyz6%2BtiwVS8M2tRSqRdAhUpsNUJZgWZY%2FZdk9tIpGqhEK0u3D4mVtE6yRIUfP4xFrtWRn2MRvhmnINHckw%2B4mlxAY6pgEpL%2FnQIXWFx7ErDjTAedCVO3q8gWkISXBlWWCgVZ2cU6sMTmAngQnI3dCOIOEcDKbsFFK86nXC4%2BHRL%2FXsZP8a5uvCkI5%2BIvpHJJ6h22EqedWWRD7zCciyxByZOWGZ4bmpIBCy8vhgHi3OipsLjprlejf1piuR09OcGU%2FyZKCyuQiNIifMpt26sgVO1ylZlviuPLnbidpqvgiL5Oi1b56677za%2F%2Faz&X-Amz-Signature=6285b676e17b9c6be65b24a6663b0ea2396a3dcc289174c1b2b36eb6ccfef4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I54MAEV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG2%2BwKHUBqEEn3YER0hvvbQYG3lse%2BXqYfabRy2m1EvAiANureJWcTArxVaSDLQfDgL0zpPeSFtUPCJaXRQL4katyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgaXR9Sny%2BYhpembKtwDNolZw6nx9cd3MCVUMj2NbEp1fRzUQEi%2FDSt7pYmuFto2vp1rpGBnMIYBGO2IHzpg0QP%2FxUbefvG%2BGfT83VcLugQ54FXIBCxUvCbSya73MLhplL%2F2l2DY3Uo%2FiZxIYd%2FQf%2BtrgkKfWjMvqd4lEwpTMed7kavJGUa%2FS5Db5DCAXtYZqmeU839SEhrb2fvnbOF92YwAU9y18sITq7ptLxwAqT2SqU%2B6V5fH2wy%2BJ0YFZSzbG27vrYOqV102NGlO7ZNW%2Ff0zDaaQuwhazd%2FmYWlNRTIpLL8c6GXHym2DB9WemXG2lvwGSaCZzDNxT6ajtVNqcWjwXFNJ3QsGqwWWfturbYQCd34YfOe9wN1Bfk7eXK61Xnm%2B1YLEVxpNT9LzRBmidwX%2BCuDLleq3tWjFEbQwHkwMhkIBBXZpjvdZS8rqRAthqW3y80zyh5BF3sQkeaRS53VojPVi%2BzuCAY4hmtXnu9J6OQUgjmxrbQnjDko2ogYgIRZ%2FC3dpcsPe0%2FT063uADmeJs897%2FbfShfr%2FDS0cEIQTwRbQia%2BGR1pRZ0%2FUYyjyz6%2BtiwVS8M2tRSqRdAhUpsNUJZgWZY%2FZdk9tIpGqhEK0u3D4mVtE6yRIUfP4xFrtWRn2MRvhmnINHckw%2B4mlxAY6pgEpL%2FnQIXWFx7ErDjTAedCVO3q8gWkISXBlWWCgVZ2cU6sMTmAngQnI3dCOIOEcDKbsFFK86nXC4%2BHRL%2FXsZP8a5uvCkI5%2BIvpHJJ6h22EqedWWRD7zCciyxByZOWGZ4bmpIBCy8vhgHi3OipsLjprlejf1piuR09OcGU%2FyZKCyuQiNIifMpt26sgVO1ylZlviuPLnbidpqvgiL5Oi1b56677za%2F%2Faz&X-Amz-Signature=bdac15511aae207893b05c5e2563bd3887294e5464dbc7eba27fcaa85fb9a656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I54MAEV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG2%2BwKHUBqEEn3YER0hvvbQYG3lse%2BXqYfabRy2m1EvAiANureJWcTArxVaSDLQfDgL0zpPeSFtUPCJaXRQL4katyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgaXR9Sny%2BYhpembKtwDNolZw6nx9cd3MCVUMj2NbEp1fRzUQEi%2FDSt7pYmuFto2vp1rpGBnMIYBGO2IHzpg0QP%2FxUbefvG%2BGfT83VcLugQ54FXIBCxUvCbSya73MLhplL%2F2l2DY3Uo%2FiZxIYd%2FQf%2BtrgkKfWjMvqd4lEwpTMed7kavJGUa%2FS5Db5DCAXtYZqmeU839SEhrb2fvnbOF92YwAU9y18sITq7ptLxwAqT2SqU%2B6V5fH2wy%2BJ0YFZSzbG27vrYOqV102NGlO7ZNW%2Ff0zDaaQuwhazd%2FmYWlNRTIpLL8c6GXHym2DB9WemXG2lvwGSaCZzDNxT6ajtVNqcWjwXFNJ3QsGqwWWfturbYQCd34YfOe9wN1Bfk7eXK61Xnm%2B1YLEVxpNT9LzRBmidwX%2BCuDLleq3tWjFEbQwHkwMhkIBBXZpjvdZS8rqRAthqW3y80zyh5BF3sQkeaRS53VojPVi%2BzuCAY4hmtXnu9J6OQUgjmxrbQnjDko2ogYgIRZ%2FC3dpcsPe0%2FT063uADmeJs897%2FbfShfr%2FDS0cEIQTwRbQia%2BGR1pRZ0%2FUYyjyz6%2BtiwVS8M2tRSqRdAhUpsNUJZgWZY%2FZdk9tIpGqhEK0u3D4mVtE6yRIUfP4xFrtWRn2MRvhmnINHckw%2B4mlxAY6pgEpL%2FnQIXWFx7ErDjTAedCVO3q8gWkISXBlWWCgVZ2cU6sMTmAngQnI3dCOIOEcDKbsFFK86nXC4%2BHRL%2FXsZP8a5uvCkI5%2BIvpHJJ6h22EqedWWRD7zCciyxByZOWGZ4bmpIBCy8vhgHi3OipsLjprlejf1piuR09OcGU%2FyZKCyuQiNIifMpt26sgVO1ylZlviuPLnbidpqvgiL5Oi1b56677za%2F%2Faz&X-Amz-Signature=4cf2792929e12cd795beb09fa2c41d9569b15b76ab90beaec012e44390cc687f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I54MAEV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG2%2BwKHUBqEEn3YER0hvvbQYG3lse%2BXqYfabRy2m1EvAiANureJWcTArxVaSDLQfDgL0zpPeSFtUPCJaXRQL4katyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgaXR9Sny%2BYhpembKtwDNolZw6nx9cd3MCVUMj2NbEp1fRzUQEi%2FDSt7pYmuFto2vp1rpGBnMIYBGO2IHzpg0QP%2FxUbefvG%2BGfT83VcLugQ54FXIBCxUvCbSya73MLhplL%2F2l2DY3Uo%2FiZxIYd%2FQf%2BtrgkKfWjMvqd4lEwpTMed7kavJGUa%2FS5Db5DCAXtYZqmeU839SEhrb2fvnbOF92YwAU9y18sITq7ptLxwAqT2SqU%2B6V5fH2wy%2BJ0YFZSzbG27vrYOqV102NGlO7ZNW%2Ff0zDaaQuwhazd%2FmYWlNRTIpLL8c6GXHym2DB9WemXG2lvwGSaCZzDNxT6ajtVNqcWjwXFNJ3QsGqwWWfturbYQCd34YfOe9wN1Bfk7eXK61Xnm%2B1YLEVxpNT9LzRBmidwX%2BCuDLleq3tWjFEbQwHkwMhkIBBXZpjvdZS8rqRAthqW3y80zyh5BF3sQkeaRS53VojPVi%2BzuCAY4hmtXnu9J6OQUgjmxrbQnjDko2ogYgIRZ%2FC3dpcsPe0%2FT063uADmeJs897%2FbfShfr%2FDS0cEIQTwRbQia%2BGR1pRZ0%2FUYyjyz6%2BtiwVS8M2tRSqRdAhUpsNUJZgWZY%2FZdk9tIpGqhEK0u3D4mVtE6yRIUfP4xFrtWRn2MRvhmnINHckw%2B4mlxAY6pgEpL%2FnQIXWFx7ErDjTAedCVO3q8gWkISXBlWWCgVZ2cU6sMTmAngQnI3dCOIOEcDKbsFFK86nXC4%2BHRL%2FXsZP8a5uvCkI5%2BIvpHJJ6h22EqedWWRD7zCciyxByZOWGZ4bmpIBCy8vhgHi3OipsLjprlejf1piuR09OcGU%2FyZKCyuQiNIifMpt26sgVO1ylZlviuPLnbidpqvgiL5Oi1b56677za%2F%2Faz&X-Amz-Signature=858c67ee03f18def5b508314a663e0dba1be263ce6cda0ff50c5c847486f6f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I54MAEV%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDG2%2BwKHUBqEEn3YER0hvvbQYG3lse%2BXqYfabRy2m1EvAiANureJWcTArxVaSDLQfDgL0zpPeSFtUPCJaXRQL4katyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJgaXR9Sny%2BYhpembKtwDNolZw6nx9cd3MCVUMj2NbEp1fRzUQEi%2FDSt7pYmuFto2vp1rpGBnMIYBGO2IHzpg0QP%2FxUbefvG%2BGfT83VcLugQ54FXIBCxUvCbSya73MLhplL%2F2l2DY3Uo%2FiZxIYd%2FQf%2BtrgkKfWjMvqd4lEwpTMed7kavJGUa%2FS5Db5DCAXtYZqmeU839SEhrb2fvnbOF92YwAU9y18sITq7ptLxwAqT2SqU%2B6V5fH2wy%2BJ0YFZSzbG27vrYOqV102NGlO7ZNW%2Ff0zDaaQuwhazd%2FmYWlNRTIpLL8c6GXHym2DB9WemXG2lvwGSaCZzDNxT6ajtVNqcWjwXFNJ3QsGqwWWfturbYQCd34YfOe9wN1Bfk7eXK61Xnm%2B1YLEVxpNT9LzRBmidwX%2BCuDLleq3tWjFEbQwHkwMhkIBBXZpjvdZS8rqRAthqW3y80zyh5BF3sQkeaRS53VojPVi%2BzuCAY4hmtXnu9J6OQUgjmxrbQnjDko2ogYgIRZ%2FC3dpcsPe0%2FT063uADmeJs897%2FbfShfr%2FDS0cEIQTwRbQia%2BGR1pRZ0%2FUYyjyz6%2BtiwVS8M2tRSqRdAhUpsNUJZgWZY%2FZdk9tIpGqhEK0u3D4mVtE6yRIUfP4xFrtWRn2MRvhmnINHckw%2B4mlxAY6pgEpL%2FnQIXWFx7ErDjTAedCVO3q8gWkISXBlWWCgVZ2cU6sMTmAngQnI3dCOIOEcDKbsFFK86nXC4%2BHRL%2FXsZP8a5uvCkI5%2BIvpHJJ6h22EqedWWRD7zCciyxByZOWGZ4bmpIBCy8vhgHi3OipsLjprlejf1piuR09OcGU%2FyZKCyuQiNIifMpt26sgVO1ylZlviuPLnbidpqvgiL5Oi1b56677za%2F%2Faz&X-Amz-Signature=c615ce7667254a48aa67d6e46836016307bf3616a20b20fc01c32b0dc8113b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
