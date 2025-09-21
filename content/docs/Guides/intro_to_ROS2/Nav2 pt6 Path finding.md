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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKDYL3U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUiJt0Fiy7oTWx3D%2BC1XPT7iYjR5%2B7w7yTqtenn5T8EAiA4lNN4vTpOw%2FeQ5rLjxNk3ExQfXj8vcQeTbt5JgX8XRyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDUuLeNdX88%2FQAALKtwDoyIGehVUGSsj2WeMDVFQn%2Bgjr3GVhBY7gx%2BdvaPEP3Hay9rMnw8P%2BTQUg375TcSpfddy0RY14E53XbwksVwVSLxLvX0R01%2FjgNOGrJXVCosT2bySvP3AOYGUfbFpHVncq9nSJOeGMv%2Fq9ovsbop6yfkQmHRM7eKapMm6ewxTyYwVrfWFrGXjUraXQ%2BHTTewqYeDw6ctaLS2AFGqzGMWuxhlgGu%2BMFfB7y39AadZexH%2B7c9qYeOO8k7CjAEVFZmoB%2B%2BSVAUS6azDlvR6LITaJonG4PRDFPy87jMppFAdOZXmVM7W8el7kopN17MlaCtuwTVacJ7KbO2TajGnBGnHhr%2FpULoGQyjSc%2B9eDcZGSQQCVZSkL85XF8GAldvnK3ycqNl%2FG0xQ3MshZTLd2rt3MHwih6ViXgID9gs9faoMA0ccTvkb83wtK0cPX7L%2BuM5MSksbiLGwh6n343lueSPR18JdmxoXMfXTk4ysCG9lS9qOYvYvp%2FRTDA3NerAdyCDaM6qBcKmLO9sZYwi%2Bw4Ng2r0rHHBsKJZh505Z%2FkLxNeBaA0yw96vjGGiO8FR4GR%2F69Fkt1DaUEOvL1P56aMwpkwjyERqNG%2B4Qo6Z94mE3ZKbH24EP4IsYlp1vuus0wlJ%2B9xgY6pgGNWQzmZMOuX%2FcxX%2Bo%2FxCnI2Es%2BwvmHKE8inSlU1ZIpA6qVu%2FK0FiZNCO8oSqYFQN9Fh1ng8LkABBf2eHqfVfIPSJ8gGJ%2FVyzqwnYwrMb043yoDa5omyMkyPJFaMM3osQGYQQf8K77m%2BCA6rFC2wW2AfliM8qtoKF5Y5CE7Dx8ngKUPnettVUXTbanYNLOUcpWl17YV39rq8mfxVuGwVK43EN0plgYZ&X-Amz-Signature=3b0b34bb76b422cef016a4d58a3e5f1991701c134fb81692097c6dd094bdc19f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKDYL3U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUiJt0Fiy7oTWx3D%2BC1XPT7iYjR5%2B7w7yTqtenn5T8EAiA4lNN4vTpOw%2FeQ5rLjxNk3ExQfXj8vcQeTbt5JgX8XRyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDUuLeNdX88%2FQAALKtwDoyIGehVUGSsj2WeMDVFQn%2Bgjr3GVhBY7gx%2BdvaPEP3Hay9rMnw8P%2BTQUg375TcSpfddy0RY14E53XbwksVwVSLxLvX0R01%2FjgNOGrJXVCosT2bySvP3AOYGUfbFpHVncq9nSJOeGMv%2Fq9ovsbop6yfkQmHRM7eKapMm6ewxTyYwVrfWFrGXjUraXQ%2BHTTewqYeDw6ctaLS2AFGqzGMWuxhlgGu%2BMFfB7y39AadZexH%2B7c9qYeOO8k7CjAEVFZmoB%2B%2BSVAUS6azDlvR6LITaJonG4PRDFPy87jMppFAdOZXmVM7W8el7kopN17MlaCtuwTVacJ7KbO2TajGnBGnHhr%2FpULoGQyjSc%2B9eDcZGSQQCVZSkL85XF8GAldvnK3ycqNl%2FG0xQ3MshZTLd2rt3MHwih6ViXgID9gs9faoMA0ccTvkb83wtK0cPX7L%2BuM5MSksbiLGwh6n343lueSPR18JdmxoXMfXTk4ysCG9lS9qOYvYvp%2FRTDA3NerAdyCDaM6qBcKmLO9sZYwi%2Bw4Ng2r0rHHBsKJZh505Z%2FkLxNeBaA0yw96vjGGiO8FR4GR%2F69Fkt1DaUEOvL1P56aMwpkwjyERqNG%2B4Qo6Z94mE3ZKbH24EP4IsYlp1vuus0wlJ%2B9xgY6pgGNWQzmZMOuX%2FcxX%2Bo%2FxCnI2Es%2BwvmHKE8inSlU1ZIpA6qVu%2FK0FiZNCO8oSqYFQN9Fh1ng8LkABBf2eHqfVfIPSJ8gGJ%2FVyzqwnYwrMb043yoDa5omyMkyPJFaMM3osQGYQQf8K77m%2BCA6rFC2wW2AfliM8qtoKF5Y5CE7Dx8ngKUPnettVUXTbanYNLOUcpWl17YV39rq8mfxVuGwVK43EN0plgYZ&X-Amz-Signature=f5e889e0cd1c0da48685739ab4dd0fa070cd3c1caec214fefedf1f78bf80668a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKDYL3U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUiJt0Fiy7oTWx3D%2BC1XPT7iYjR5%2B7w7yTqtenn5T8EAiA4lNN4vTpOw%2FeQ5rLjxNk3ExQfXj8vcQeTbt5JgX8XRyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDUuLeNdX88%2FQAALKtwDoyIGehVUGSsj2WeMDVFQn%2Bgjr3GVhBY7gx%2BdvaPEP3Hay9rMnw8P%2BTQUg375TcSpfddy0RY14E53XbwksVwVSLxLvX0R01%2FjgNOGrJXVCosT2bySvP3AOYGUfbFpHVncq9nSJOeGMv%2Fq9ovsbop6yfkQmHRM7eKapMm6ewxTyYwVrfWFrGXjUraXQ%2BHTTewqYeDw6ctaLS2AFGqzGMWuxhlgGu%2BMFfB7y39AadZexH%2B7c9qYeOO8k7CjAEVFZmoB%2B%2BSVAUS6azDlvR6LITaJonG4PRDFPy87jMppFAdOZXmVM7W8el7kopN17MlaCtuwTVacJ7KbO2TajGnBGnHhr%2FpULoGQyjSc%2B9eDcZGSQQCVZSkL85XF8GAldvnK3ycqNl%2FG0xQ3MshZTLd2rt3MHwih6ViXgID9gs9faoMA0ccTvkb83wtK0cPX7L%2BuM5MSksbiLGwh6n343lueSPR18JdmxoXMfXTk4ysCG9lS9qOYvYvp%2FRTDA3NerAdyCDaM6qBcKmLO9sZYwi%2Bw4Ng2r0rHHBsKJZh505Z%2FkLxNeBaA0yw96vjGGiO8FR4GR%2F69Fkt1DaUEOvL1P56aMwpkwjyERqNG%2B4Qo6Z94mE3ZKbH24EP4IsYlp1vuus0wlJ%2B9xgY6pgGNWQzmZMOuX%2FcxX%2Bo%2FxCnI2Es%2BwvmHKE8inSlU1ZIpA6qVu%2FK0FiZNCO8oSqYFQN9Fh1ng8LkABBf2eHqfVfIPSJ8gGJ%2FVyzqwnYwrMb043yoDa5omyMkyPJFaMM3osQGYQQf8K77m%2BCA6rFC2wW2AfliM8qtoKF5Y5CE7Dx8ngKUPnettVUXTbanYNLOUcpWl17YV39rq8mfxVuGwVK43EN0plgYZ&X-Amz-Signature=6486ed7acd1f9aa16b07674cfa616516647b572ee92bbded01803432522761c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKDYL3U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUiJt0Fiy7oTWx3D%2BC1XPT7iYjR5%2B7w7yTqtenn5T8EAiA4lNN4vTpOw%2FeQ5rLjxNk3ExQfXj8vcQeTbt5JgX8XRyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDUuLeNdX88%2FQAALKtwDoyIGehVUGSsj2WeMDVFQn%2Bgjr3GVhBY7gx%2BdvaPEP3Hay9rMnw8P%2BTQUg375TcSpfddy0RY14E53XbwksVwVSLxLvX0R01%2FjgNOGrJXVCosT2bySvP3AOYGUfbFpHVncq9nSJOeGMv%2Fq9ovsbop6yfkQmHRM7eKapMm6ewxTyYwVrfWFrGXjUraXQ%2BHTTewqYeDw6ctaLS2AFGqzGMWuxhlgGu%2BMFfB7y39AadZexH%2B7c9qYeOO8k7CjAEVFZmoB%2B%2BSVAUS6azDlvR6LITaJonG4PRDFPy87jMppFAdOZXmVM7W8el7kopN17MlaCtuwTVacJ7KbO2TajGnBGnHhr%2FpULoGQyjSc%2B9eDcZGSQQCVZSkL85XF8GAldvnK3ycqNl%2FG0xQ3MshZTLd2rt3MHwih6ViXgID9gs9faoMA0ccTvkb83wtK0cPX7L%2BuM5MSksbiLGwh6n343lueSPR18JdmxoXMfXTk4ysCG9lS9qOYvYvp%2FRTDA3NerAdyCDaM6qBcKmLO9sZYwi%2Bw4Ng2r0rHHBsKJZh505Z%2FkLxNeBaA0yw96vjGGiO8FR4GR%2F69Fkt1DaUEOvL1P56aMwpkwjyERqNG%2B4Qo6Z94mE3ZKbH24EP4IsYlp1vuus0wlJ%2B9xgY6pgGNWQzmZMOuX%2FcxX%2Bo%2FxCnI2Es%2BwvmHKE8inSlU1ZIpA6qVu%2FK0FiZNCO8oSqYFQN9Fh1ng8LkABBf2eHqfVfIPSJ8gGJ%2FVyzqwnYwrMb043yoDa5omyMkyPJFaMM3osQGYQQf8K77m%2BCA6rFC2wW2AfliM8qtoKF5Y5CE7Dx8ngKUPnettVUXTbanYNLOUcpWl17YV39rq8mfxVuGwVK43EN0plgYZ&X-Amz-Signature=4910ee43fd3cff6f5916582ff263b99c1e3e8464edbaade3dda7567852bb44c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKDYL3U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUiJt0Fiy7oTWx3D%2BC1XPT7iYjR5%2B7w7yTqtenn5T8EAiA4lNN4vTpOw%2FeQ5rLjxNk3ExQfXj8vcQeTbt5JgX8XRyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDUuLeNdX88%2FQAALKtwDoyIGehVUGSsj2WeMDVFQn%2Bgjr3GVhBY7gx%2BdvaPEP3Hay9rMnw8P%2BTQUg375TcSpfddy0RY14E53XbwksVwVSLxLvX0R01%2FjgNOGrJXVCosT2bySvP3AOYGUfbFpHVncq9nSJOeGMv%2Fq9ovsbop6yfkQmHRM7eKapMm6ewxTyYwVrfWFrGXjUraXQ%2BHTTewqYeDw6ctaLS2AFGqzGMWuxhlgGu%2BMFfB7y39AadZexH%2B7c9qYeOO8k7CjAEVFZmoB%2B%2BSVAUS6azDlvR6LITaJonG4PRDFPy87jMppFAdOZXmVM7W8el7kopN17MlaCtuwTVacJ7KbO2TajGnBGnHhr%2FpULoGQyjSc%2B9eDcZGSQQCVZSkL85XF8GAldvnK3ycqNl%2FG0xQ3MshZTLd2rt3MHwih6ViXgID9gs9faoMA0ccTvkb83wtK0cPX7L%2BuM5MSksbiLGwh6n343lueSPR18JdmxoXMfXTk4ysCG9lS9qOYvYvp%2FRTDA3NerAdyCDaM6qBcKmLO9sZYwi%2Bw4Ng2r0rHHBsKJZh505Z%2FkLxNeBaA0yw96vjGGiO8FR4GR%2F69Fkt1DaUEOvL1P56aMwpkwjyERqNG%2B4Qo6Z94mE3ZKbH24EP4IsYlp1vuus0wlJ%2B9xgY6pgGNWQzmZMOuX%2FcxX%2Bo%2FxCnI2Es%2BwvmHKE8inSlU1ZIpA6qVu%2FK0FiZNCO8oSqYFQN9Fh1ng8LkABBf2eHqfVfIPSJ8gGJ%2FVyzqwnYwrMb043yoDa5omyMkyPJFaMM3osQGYQQf8K77m%2BCA6rFC2wW2AfliM8qtoKF5Y5CE7Dx8ngKUPnettVUXTbanYNLOUcpWl17YV39rq8mfxVuGwVK43EN0plgYZ&X-Amz-Signature=084770101da29e4a4d7de0b73d2c2550a2ed26ddd5ba6f3f04c4821b38eb5dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKDYL3U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUiJt0Fiy7oTWx3D%2BC1XPT7iYjR5%2B7w7yTqtenn5T8EAiA4lNN4vTpOw%2FeQ5rLjxNk3ExQfXj8vcQeTbt5JgX8XRyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDUuLeNdX88%2FQAALKtwDoyIGehVUGSsj2WeMDVFQn%2Bgjr3GVhBY7gx%2BdvaPEP3Hay9rMnw8P%2BTQUg375TcSpfddy0RY14E53XbwksVwVSLxLvX0R01%2FjgNOGrJXVCosT2bySvP3AOYGUfbFpHVncq9nSJOeGMv%2Fq9ovsbop6yfkQmHRM7eKapMm6ewxTyYwVrfWFrGXjUraXQ%2BHTTewqYeDw6ctaLS2AFGqzGMWuxhlgGu%2BMFfB7y39AadZexH%2B7c9qYeOO8k7CjAEVFZmoB%2B%2BSVAUS6azDlvR6LITaJonG4PRDFPy87jMppFAdOZXmVM7W8el7kopN17MlaCtuwTVacJ7KbO2TajGnBGnHhr%2FpULoGQyjSc%2B9eDcZGSQQCVZSkL85XF8GAldvnK3ycqNl%2FG0xQ3MshZTLd2rt3MHwih6ViXgID9gs9faoMA0ccTvkb83wtK0cPX7L%2BuM5MSksbiLGwh6n343lueSPR18JdmxoXMfXTk4ysCG9lS9qOYvYvp%2FRTDA3NerAdyCDaM6qBcKmLO9sZYwi%2Bw4Ng2r0rHHBsKJZh505Z%2FkLxNeBaA0yw96vjGGiO8FR4GR%2F69Fkt1DaUEOvL1P56aMwpkwjyERqNG%2B4Qo6Z94mE3ZKbH24EP4IsYlp1vuus0wlJ%2B9xgY6pgGNWQzmZMOuX%2FcxX%2Bo%2FxCnI2Es%2BwvmHKE8inSlU1ZIpA6qVu%2FK0FiZNCO8oSqYFQN9Fh1ng8LkABBf2eHqfVfIPSJ8gGJ%2FVyzqwnYwrMb043yoDa5omyMkyPJFaMM3osQGYQQf8K77m%2BCA6rFC2wW2AfliM8qtoKF5Y5CE7Dx8ngKUPnettVUXTbanYNLOUcpWl17YV39rq8mfxVuGwVK43EN0plgYZ&X-Amz-Signature=78ca4349112201134359f76d132653cc905b55bea601ba7ee0b655a01f7a3284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKDYL3U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUiJt0Fiy7oTWx3D%2BC1XPT7iYjR5%2B7w7yTqtenn5T8EAiA4lNN4vTpOw%2FeQ5rLjxNk3ExQfXj8vcQeTbt5JgX8XRyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDUuLeNdX88%2FQAALKtwDoyIGehVUGSsj2WeMDVFQn%2Bgjr3GVhBY7gx%2BdvaPEP3Hay9rMnw8P%2BTQUg375TcSpfddy0RY14E53XbwksVwVSLxLvX0R01%2FjgNOGrJXVCosT2bySvP3AOYGUfbFpHVncq9nSJOeGMv%2Fq9ovsbop6yfkQmHRM7eKapMm6ewxTyYwVrfWFrGXjUraXQ%2BHTTewqYeDw6ctaLS2AFGqzGMWuxhlgGu%2BMFfB7y39AadZexH%2B7c9qYeOO8k7CjAEVFZmoB%2B%2BSVAUS6azDlvR6LITaJonG4PRDFPy87jMppFAdOZXmVM7W8el7kopN17MlaCtuwTVacJ7KbO2TajGnBGnHhr%2FpULoGQyjSc%2B9eDcZGSQQCVZSkL85XF8GAldvnK3ycqNl%2FG0xQ3MshZTLd2rt3MHwih6ViXgID9gs9faoMA0ccTvkb83wtK0cPX7L%2BuM5MSksbiLGwh6n343lueSPR18JdmxoXMfXTk4ysCG9lS9qOYvYvp%2FRTDA3NerAdyCDaM6qBcKmLO9sZYwi%2Bw4Ng2r0rHHBsKJZh505Z%2FkLxNeBaA0yw96vjGGiO8FR4GR%2F69Fkt1DaUEOvL1P56aMwpkwjyERqNG%2B4Qo6Z94mE3ZKbH24EP4IsYlp1vuus0wlJ%2B9xgY6pgGNWQzmZMOuX%2FcxX%2Bo%2FxCnI2Es%2BwvmHKE8inSlU1ZIpA6qVu%2FK0FiZNCO8oSqYFQN9Fh1ng8LkABBf2eHqfVfIPSJ8gGJ%2FVyzqwnYwrMb043yoDa5omyMkyPJFaMM3osQGYQQf8K77m%2BCA6rFC2wW2AfliM8qtoKF5Y5CE7Dx8ngKUPnettVUXTbanYNLOUcpWl17YV39rq8mfxVuGwVK43EN0plgYZ&X-Amz-Signature=d41c751f8c1c4d272d5a3e2a60d9b035bc7e738595fcb94aa5e6c39abefc5f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKDYL3U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUiJt0Fiy7oTWx3D%2BC1XPT7iYjR5%2B7w7yTqtenn5T8EAiA4lNN4vTpOw%2FeQ5rLjxNk3ExQfXj8vcQeTbt5JgX8XRyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDUuLeNdX88%2FQAALKtwDoyIGehVUGSsj2WeMDVFQn%2Bgjr3GVhBY7gx%2BdvaPEP3Hay9rMnw8P%2BTQUg375TcSpfddy0RY14E53XbwksVwVSLxLvX0R01%2FjgNOGrJXVCosT2bySvP3AOYGUfbFpHVncq9nSJOeGMv%2Fq9ovsbop6yfkQmHRM7eKapMm6ewxTyYwVrfWFrGXjUraXQ%2BHTTewqYeDw6ctaLS2AFGqzGMWuxhlgGu%2BMFfB7y39AadZexH%2B7c9qYeOO8k7CjAEVFZmoB%2B%2BSVAUS6azDlvR6LITaJonG4PRDFPy87jMppFAdOZXmVM7W8el7kopN17MlaCtuwTVacJ7KbO2TajGnBGnHhr%2FpULoGQyjSc%2B9eDcZGSQQCVZSkL85XF8GAldvnK3ycqNl%2FG0xQ3MshZTLd2rt3MHwih6ViXgID9gs9faoMA0ccTvkb83wtK0cPX7L%2BuM5MSksbiLGwh6n343lueSPR18JdmxoXMfXTk4ysCG9lS9qOYvYvp%2FRTDA3NerAdyCDaM6qBcKmLO9sZYwi%2Bw4Ng2r0rHHBsKJZh505Z%2FkLxNeBaA0yw96vjGGiO8FR4GR%2F69Fkt1DaUEOvL1P56aMwpkwjyERqNG%2B4Qo6Z94mE3ZKbH24EP4IsYlp1vuus0wlJ%2B9xgY6pgGNWQzmZMOuX%2FcxX%2Bo%2FxCnI2Es%2BwvmHKE8inSlU1ZIpA6qVu%2FK0FiZNCO8oSqYFQN9Fh1ng8LkABBf2eHqfVfIPSJ8gGJ%2FVyzqwnYwrMb043yoDa5omyMkyPJFaMM3osQGYQQf8K77m%2BCA6rFC2wW2AfliM8qtoKF5Y5CE7Dx8ngKUPnettVUXTbanYNLOUcpWl17YV39rq8mfxVuGwVK43EN0plgYZ&X-Amz-Signature=ee9a36abc8cfba9d1249b910864614b22aa92356575eff6e03f68edc37b81609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKDYL3U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUiJt0Fiy7oTWx3D%2BC1XPT7iYjR5%2B7w7yTqtenn5T8EAiA4lNN4vTpOw%2FeQ5rLjxNk3ExQfXj8vcQeTbt5JgX8XRyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDUuLeNdX88%2FQAALKtwDoyIGehVUGSsj2WeMDVFQn%2Bgjr3GVhBY7gx%2BdvaPEP3Hay9rMnw8P%2BTQUg375TcSpfddy0RY14E53XbwksVwVSLxLvX0R01%2FjgNOGrJXVCosT2bySvP3AOYGUfbFpHVncq9nSJOeGMv%2Fq9ovsbop6yfkQmHRM7eKapMm6ewxTyYwVrfWFrGXjUraXQ%2BHTTewqYeDw6ctaLS2AFGqzGMWuxhlgGu%2BMFfB7y39AadZexH%2B7c9qYeOO8k7CjAEVFZmoB%2B%2BSVAUS6azDlvR6LITaJonG4PRDFPy87jMppFAdOZXmVM7W8el7kopN17MlaCtuwTVacJ7KbO2TajGnBGnHhr%2FpULoGQyjSc%2B9eDcZGSQQCVZSkL85XF8GAldvnK3ycqNl%2FG0xQ3MshZTLd2rt3MHwih6ViXgID9gs9faoMA0ccTvkb83wtK0cPX7L%2BuM5MSksbiLGwh6n343lueSPR18JdmxoXMfXTk4ysCG9lS9qOYvYvp%2FRTDA3NerAdyCDaM6qBcKmLO9sZYwi%2Bw4Ng2r0rHHBsKJZh505Z%2FkLxNeBaA0yw96vjGGiO8FR4GR%2F69Fkt1DaUEOvL1P56aMwpkwjyERqNG%2B4Qo6Z94mE3ZKbH24EP4IsYlp1vuus0wlJ%2B9xgY6pgGNWQzmZMOuX%2FcxX%2Bo%2FxCnI2Es%2BwvmHKE8inSlU1ZIpA6qVu%2FK0FiZNCO8oSqYFQN9Fh1ng8LkABBf2eHqfVfIPSJ8gGJ%2FVyzqwnYwrMb043yoDa5omyMkyPJFaMM3osQGYQQf8K77m%2BCA6rFC2wW2AfliM8qtoKF5Y5CE7Dx8ngKUPnettVUXTbanYNLOUcpWl17YV39rq8mfxVuGwVK43EN0plgYZ&X-Amz-Signature=b9199e58ef7887ce382d6d1ddc92fc2b88f184670dca59d1e436c5d5f7d2e801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKDYL3U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUiJt0Fiy7oTWx3D%2BC1XPT7iYjR5%2B7w7yTqtenn5T8EAiA4lNN4vTpOw%2FeQ5rLjxNk3ExQfXj8vcQeTbt5JgX8XRyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDUuLeNdX88%2FQAALKtwDoyIGehVUGSsj2WeMDVFQn%2Bgjr3GVhBY7gx%2BdvaPEP3Hay9rMnw8P%2BTQUg375TcSpfddy0RY14E53XbwksVwVSLxLvX0R01%2FjgNOGrJXVCosT2bySvP3AOYGUfbFpHVncq9nSJOeGMv%2Fq9ovsbop6yfkQmHRM7eKapMm6ewxTyYwVrfWFrGXjUraXQ%2BHTTewqYeDw6ctaLS2AFGqzGMWuxhlgGu%2BMFfB7y39AadZexH%2B7c9qYeOO8k7CjAEVFZmoB%2B%2BSVAUS6azDlvR6LITaJonG4PRDFPy87jMppFAdOZXmVM7W8el7kopN17MlaCtuwTVacJ7KbO2TajGnBGnHhr%2FpULoGQyjSc%2B9eDcZGSQQCVZSkL85XF8GAldvnK3ycqNl%2FG0xQ3MshZTLd2rt3MHwih6ViXgID9gs9faoMA0ccTvkb83wtK0cPX7L%2BuM5MSksbiLGwh6n343lueSPR18JdmxoXMfXTk4ysCG9lS9qOYvYvp%2FRTDA3NerAdyCDaM6qBcKmLO9sZYwi%2Bw4Ng2r0rHHBsKJZh505Z%2FkLxNeBaA0yw96vjGGiO8FR4GR%2F69Fkt1DaUEOvL1P56aMwpkwjyERqNG%2B4Qo6Z94mE3ZKbH24EP4IsYlp1vuus0wlJ%2B9xgY6pgGNWQzmZMOuX%2FcxX%2Bo%2FxCnI2Es%2BwvmHKE8inSlU1ZIpA6qVu%2FK0FiZNCO8oSqYFQN9Fh1ng8LkABBf2eHqfVfIPSJ8gGJ%2FVyzqwnYwrMb043yoDa5omyMkyPJFaMM3osQGYQQf8K77m%2BCA6rFC2wW2AfliM8qtoKF5Y5CE7Dx8ngKUPnettVUXTbanYNLOUcpWl17YV39rq8mfxVuGwVK43EN0plgYZ&X-Amz-Signature=9d32f3ba2682a6d98e774ca8e535a95195d832dfd59b803aef8ab485e38d176f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKDYL3U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUiJt0Fiy7oTWx3D%2BC1XPT7iYjR5%2B7w7yTqtenn5T8EAiA4lNN4vTpOw%2FeQ5rLjxNk3ExQfXj8vcQeTbt5JgX8XRyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDUuLeNdX88%2FQAALKtwDoyIGehVUGSsj2WeMDVFQn%2Bgjr3GVhBY7gx%2BdvaPEP3Hay9rMnw8P%2BTQUg375TcSpfddy0RY14E53XbwksVwVSLxLvX0R01%2FjgNOGrJXVCosT2bySvP3AOYGUfbFpHVncq9nSJOeGMv%2Fq9ovsbop6yfkQmHRM7eKapMm6ewxTyYwVrfWFrGXjUraXQ%2BHTTewqYeDw6ctaLS2AFGqzGMWuxhlgGu%2BMFfB7y39AadZexH%2B7c9qYeOO8k7CjAEVFZmoB%2B%2BSVAUS6azDlvR6LITaJonG4PRDFPy87jMppFAdOZXmVM7W8el7kopN17MlaCtuwTVacJ7KbO2TajGnBGnHhr%2FpULoGQyjSc%2B9eDcZGSQQCVZSkL85XF8GAldvnK3ycqNl%2FG0xQ3MshZTLd2rt3MHwih6ViXgID9gs9faoMA0ccTvkb83wtK0cPX7L%2BuM5MSksbiLGwh6n343lueSPR18JdmxoXMfXTk4ysCG9lS9qOYvYvp%2FRTDA3NerAdyCDaM6qBcKmLO9sZYwi%2Bw4Ng2r0rHHBsKJZh505Z%2FkLxNeBaA0yw96vjGGiO8FR4GR%2F69Fkt1DaUEOvL1P56aMwpkwjyERqNG%2B4Qo6Z94mE3ZKbH24EP4IsYlp1vuus0wlJ%2B9xgY6pgGNWQzmZMOuX%2FcxX%2Bo%2FxCnI2Es%2BwvmHKE8inSlU1ZIpA6qVu%2FK0FiZNCO8oSqYFQN9Fh1ng8LkABBf2eHqfVfIPSJ8gGJ%2FVyzqwnYwrMb043yoDa5omyMkyPJFaMM3osQGYQQf8K77m%2BCA6rFC2wW2AfliM8qtoKF5Y5CE7Dx8ngKUPnettVUXTbanYNLOUcpWl17YV39rq8mfxVuGwVK43EN0plgYZ&X-Amz-Signature=08cca42cbe925345859d7142940d35ea2740335b992bcaf73f7814c3e54ff203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKDYL3U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUiJt0Fiy7oTWx3D%2BC1XPT7iYjR5%2B7w7yTqtenn5T8EAiA4lNN4vTpOw%2FeQ5rLjxNk3ExQfXj8vcQeTbt5JgX8XRyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDUuLeNdX88%2FQAALKtwDoyIGehVUGSsj2WeMDVFQn%2Bgjr3GVhBY7gx%2BdvaPEP3Hay9rMnw8P%2BTQUg375TcSpfddy0RY14E53XbwksVwVSLxLvX0R01%2FjgNOGrJXVCosT2bySvP3AOYGUfbFpHVncq9nSJOeGMv%2Fq9ovsbop6yfkQmHRM7eKapMm6ewxTyYwVrfWFrGXjUraXQ%2BHTTewqYeDw6ctaLS2AFGqzGMWuxhlgGu%2BMFfB7y39AadZexH%2B7c9qYeOO8k7CjAEVFZmoB%2B%2BSVAUS6azDlvR6LITaJonG4PRDFPy87jMppFAdOZXmVM7W8el7kopN17MlaCtuwTVacJ7KbO2TajGnBGnHhr%2FpULoGQyjSc%2B9eDcZGSQQCVZSkL85XF8GAldvnK3ycqNl%2FG0xQ3MshZTLd2rt3MHwih6ViXgID9gs9faoMA0ccTvkb83wtK0cPX7L%2BuM5MSksbiLGwh6n343lueSPR18JdmxoXMfXTk4ysCG9lS9qOYvYvp%2FRTDA3NerAdyCDaM6qBcKmLO9sZYwi%2Bw4Ng2r0rHHBsKJZh505Z%2FkLxNeBaA0yw96vjGGiO8FR4GR%2F69Fkt1DaUEOvL1P56aMwpkwjyERqNG%2B4Qo6Z94mE3ZKbH24EP4IsYlp1vuus0wlJ%2B9xgY6pgGNWQzmZMOuX%2FcxX%2Bo%2FxCnI2Es%2BwvmHKE8inSlU1ZIpA6qVu%2FK0FiZNCO8oSqYFQN9Fh1ng8LkABBf2eHqfVfIPSJ8gGJ%2FVyzqwnYwrMb043yoDa5omyMkyPJFaMM3osQGYQQf8K77m%2BCA6rFC2wW2AfliM8qtoKF5Y5CE7Dx8ngKUPnettVUXTbanYNLOUcpWl17YV39rq8mfxVuGwVK43EN0plgYZ&X-Amz-Signature=d069d29e94f2bd0d194d523dbfc96b8cf2ddb5be282b356596b624b6d83daeec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOKDYL3U%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUiJt0Fiy7oTWx3D%2BC1XPT7iYjR5%2B7w7yTqtenn5T8EAiA4lNN4vTpOw%2FeQ5rLjxNk3ExQfXj8vcQeTbt5JgX8XRyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyDUuLeNdX88%2FQAALKtwDoyIGehVUGSsj2WeMDVFQn%2Bgjr3GVhBY7gx%2BdvaPEP3Hay9rMnw8P%2BTQUg375TcSpfddy0RY14E53XbwksVwVSLxLvX0R01%2FjgNOGrJXVCosT2bySvP3AOYGUfbFpHVncq9nSJOeGMv%2Fq9ovsbop6yfkQmHRM7eKapMm6ewxTyYwVrfWFrGXjUraXQ%2BHTTewqYeDw6ctaLS2AFGqzGMWuxhlgGu%2BMFfB7y39AadZexH%2B7c9qYeOO8k7CjAEVFZmoB%2B%2BSVAUS6azDlvR6LITaJonG4PRDFPy87jMppFAdOZXmVM7W8el7kopN17MlaCtuwTVacJ7KbO2TajGnBGnHhr%2FpULoGQyjSc%2B9eDcZGSQQCVZSkL85XF8GAldvnK3ycqNl%2FG0xQ3MshZTLd2rt3MHwih6ViXgID9gs9faoMA0ccTvkb83wtK0cPX7L%2BuM5MSksbiLGwh6n343lueSPR18JdmxoXMfXTk4ysCG9lS9qOYvYvp%2FRTDA3NerAdyCDaM6qBcKmLO9sZYwi%2Bw4Ng2r0rHHBsKJZh505Z%2FkLxNeBaA0yw96vjGGiO8FR4GR%2F69Fkt1DaUEOvL1P56aMwpkwjyERqNG%2B4Qo6Z94mE3ZKbH24EP4IsYlp1vuus0wlJ%2B9xgY6pgGNWQzmZMOuX%2FcxX%2Bo%2FxCnI2Es%2BwvmHKE8inSlU1ZIpA6qVu%2FK0FiZNCO8oSqYFQN9Fh1ng8LkABBf2eHqfVfIPSJ8gGJ%2FVyzqwnYwrMb043yoDa5omyMkyPJFaMM3osQGYQQf8K77m%2BCA6rFC2wW2AfliM8qtoKF5Y5CE7Dx8ngKUPnettVUXTbanYNLOUcpWl17YV39rq8mfxVuGwVK43EN0plgYZ&X-Amz-Signature=ececdb8c89f1a2991ecae506e8d6188e16ee94961eabd94437031fae3b227a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
