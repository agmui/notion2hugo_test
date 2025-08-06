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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUNGDEO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDxd%2B7vJxM6sy8j8VY%2BP01QDZwdu5fnCDKQgOS%2FdBzSTAIgaV87J5Rl%2BGVcBPg4bc%2BKmnZBmcj20GYsdFk9%2FvaLvXYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOOPBaU2FKJmQVInVircA4oucjqVRc%2BdrsqjpYsNu830zlPA3B5GGLcInCO0Z9Xe%2F6YsPYEbPHGXwB72Fk9zuWcfATxXK%2FuO%2BFsFVEY5U0Ho0p96cvBIuk%2Fr9%2FQ7AMv%2B5j4zuD8IKM1qoZEi84Nz6j9OIRQRF3ceOAWnbUPUYN2Yu2P7Fm71SjxI7bVKPgWfdJ9TAsluk%2Fg3RMnq6h4s6oFv1HIm2NrdZP34vjvPt7zye6CXQPIFTMGTLCUctJJd4ss87f5bBqZ5eRQ6J%2Fm3knnvnM9sz6QjQXz8k6QcDAlUXxsjWWzE%2BQpp2nnBBjNAabaPo77erF%2Fg%2FmREjS67pV2u7ZPlG5vSVlW3TH4qwfVkVy1jVqsgoGqu6n7FYMumIP8xwZAQHNVCOQN3WnN7gm7OVFM7j963Vu1cGcgQcnyuZx5V%2FqjGjXfCDjYi3NptDSDTG6NBDF4fvuo%2Bsq83yD%2Fe1uQRV6yvLRQxFfs78w6T%2FlUd1BNqrBf2KAPd5QOmb3p2RLasx8IMRRJBbeik4IIWUhtR7rJ4Vi9wGP%2FVietqqG%2BDLKJl8Oy%2FXftK6HWmaOBI05d%2ByDeaMVhg5SwzNmQTZM8UY49qvuwo5PsoYmF0fqz5fQVjzuNKS5bmqV7bA6bSwupNwfhdip0IMI7QzMQGOqUBXKZq3Qugpe8Fe93i1htbmzvzJ%2B2n6qwewhfTz0NgFktRPdOXz3f9sJ0I%2FVUqUMmq9fm2QU9veSeP%2BAp%2FD4I1u6hgekae%2B4w%2FAO2kjooVrHl4gGYkURUBeYKkEXkfvd78zJKzhYadWJUqhbh%2Fg9Xbn1Wc0e0H1lcZP%2FyFsjRc6v6xvifofyEGh35%2BnWJWCDw%2FhZFFlewocYlNX3MJN30GymOR6Pvy&X-Amz-Signature=4a9a8a8fb63603f417b1f77d4efec13d1732dd62463f41a70d960dc3832b0e22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUNGDEO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDxd%2B7vJxM6sy8j8VY%2BP01QDZwdu5fnCDKQgOS%2FdBzSTAIgaV87J5Rl%2BGVcBPg4bc%2BKmnZBmcj20GYsdFk9%2FvaLvXYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOOPBaU2FKJmQVInVircA4oucjqVRc%2BdrsqjpYsNu830zlPA3B5GGLcInCO0Z9Xe%2F6YsPYEbPHGXwB72Fk9zuWcfATxXK%2FuO%2BFsFVEY5U0Ho0p96cvBIuk%2Fr9%2FQ7AMv%2B5j4zuD8IKM1qoZEi84Nz6j9OIRQRF3ceOAWnbUPUYN2Yu2P7Fm71SjxI7bVKPgWfdJ9TAsluk%2Fg3RMnq6h4s6oFv1HIm2NrdZP34vjvPt7zye6CXQPIFTMGTLCUctJJd4ss87f5bBqZ5eRQ6J%2Fm3knnvnM9sz6QjQXz8k6QcDAlUXxsjWWzE%2BQpp2nnBBjNAabaPo77erF%2Fg%2FmREjS67pV2u7ZPlG5vSVlW3TH4qwfVkVy1jVqsgoGqu6n7FYMumIP8xwZAQHNVCOQN3WnN7gm7OVFM7j963Vu1cGcgQcnyuZx5V%2FqjGjXfCDjYi3NptDSDTG6NBDF4fvuo%2Bsq83yD%2Fe1uQRV6yvLRQxFfs78w6T%2FlUd1BNqrBf2KAPd5QOmb3p2RLasx8IMRRJBbeik4IIWUhtR7rJ4Vi9wGP%2FVietqqG%2BDLKJl8Oy%2FXftK6HWmaOBI05d%2ByDeaMVhg5SwzNmQTZM8UY49qvuwo5PsoYmF0fqz5fQVjzuNKS5bmqV7bA6bSwupNwfhdip0IMI7QzMQGOqUBXKZq3Qugpe8Fe93i1htbmzvzJ%2B2n6qwewhfTz0NgFktRPdOXz3f9sJ0I%2FVUqUMmq9fm2QU9veSeP%2BAp%2FD4I1u6hgekae%2B4w%2FAO2kjooVrHl4gGYkURUBeYKkEXkfvd78zJKzhYadWJUqhbh%2Fg9Xbn1Wc0e0H1lcZP%2FyFsjRc6v6xvifofyEGh35%2BnWJWCDw%2FhZFFlewocYlNX3MJN30GymOR6Pvy&X-Amz-Signature=55ce9d6127e42b271a5d4d450a14fb12963d22bdd8c843e4f9d4348df6943b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUNGDEO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDxd%2B7vJxM6sy8j8VY%2BP01QDZwdu5fnCDKQgOS%2FdBzSTAIgaV87J5Rl%2BGVcBPg4bc%2BKmnZBmcj20GYsdFk9%2FvaLvXYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOOPBaU2FKJmQVInVircA4oucjqVRc%2BdrsqjpYsNu830zlPA3B5GGLcInCO0Z9Xe%2F6YsPYEbPHGXwB72Fk9zuWcfATxXK%2FuO%2BFsFVEY5U0Ho0p96cvBIuk%2Fr9%2FQ7AMv%2B5j4zuD8IKM1qoZEi84Nz6j9OIRQRF3ceOAWnbUPUYN2Yu2P7Fm71SjxI7bVKPgWfdJ9TAsluk%2Fg3RMnq6h4s6oFv1HIm2NrdZP34vjvPt7zye6CXQPIFTMGTLCUctJJd4ss87f5bBqZ5eRQ6J%2Fm3knnvnM9sz6QjQXz8k6QcDAlUXxsjWWzE%2BQpp2nnBBjNAabaPo77erF%2Fg%2FmREjS67pV2u7ZPlG5vSVlW3TH4qwfVkVy1jVqsgoGqu6n7FYMumIP8xwZAQHNVCOQN3WnN7gm7OVFM7j963Vu1cGcgQcnyuZx5V%2FqjGjXfCDjYi3NptDSDTG6NBDF4fvuo%2Bsq83yD%2Fe1uQRV6yvLRQxFfs78w6T%2FlUd1BNqrBf2KAPd5QOmb3p2RLasx8IMRRJBbeik4IIWUhtR7rJ4Vi9wGP%2FVietqqG%2BDLKJl8Oy%2FXftK6HWmaOBI05d%2ByDeaMVhg5SwzNmQTZM8UY49qvuwo5PsoYmF0fqz5fQVjzuNKS5bmqV7bA6bSwupNwfhdip0IMI7QzMQGOqUBXKZq3Qugpe8Fe93i1htbmzvzJ%2B2n6qwewhfTz0NgFktRPdOXz3f9sJ0I%2FVUqUMmq9fm2QU9veSeP%2BAp%2FD4I1u6hgekae%2B4w%2FAO2kjooVrHl4gGYkURUBeYKkEXkfvd78zJKzhYadWJUqhbh%2Fg9Xbn1Wc0e0H1lcZP%2FyFsjRc6v6xvifofyEGh35%2BnWJWCDw%2FhZFFlewocYlNX3MJN30GymOR6Pvy&X-Amz-Signature=a846e21ef5f316fe6d73c828ebf0520998fed350543e4edf4bec0c161ceb3f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUNGDEO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDxd%2B7vJxM6sy8j8VY%2BP01QDZwdu5fnCDKQgOS%2FdBzSTAIgaV87J5Rl%2BGVcBPg4bc%2BKmnZBmcj20GYsdFk9%2FvaLvXYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOOPBaU2FKJmQVInVircA4oucjqVRc%2BdrsqjpYsNu830zlPA3B5GGLcInCO0Z9Xe%2F6YsPYEbPHGXwB72Fk9zuWcfATxXK%2FuO%2BFsFVEY5U0Ho0p96cvBIuk%2Fr9%2FQ7AMv%2B5j4zuD8IKM1qoZEi84Nz6j9OIRQRF3ceOAWnbUPUYN2Yu2P7Fm71SjxI7bVKPgWfdJ9TAsluk%2Fg3RMnq6h4s6oFv1HIm2NrdZP34vjvPt7zye6CXQPIFTMGTLCUctJJd4ss87f5bBqZ5eRQ6J%2Fm3knnvnM9sz6QjQXz8k6QcDAlUXxsjWWzE%2BQpp2nnBBjNAabaPo77erF%2Fg%2FmREjS67pV2u7ZPlG5vSVlW3TH4qwfVkVy1jVqsgoGqu6n7FYMumIP8xwZAQHNVCOQN3WnN7gm7OVFM7j963Vu1cGcgQcnyuZx5V%2FqjGjXfCDjYi3NptDSDTG6NBDF4fvuo%2Bsq83yD%2Fe1uQRV6yvLRQxFfs78w6T%2FlUd1BNqrBf2KAPd5QOmb3p2RLasx8IMRRJBbeik4IIWUhtR7rJ4Vi9wGP%2FVietqqG%2BDLKJl8Oy%2FXftK6HWmaOBI05d%2ByDeaMVhg5SwzNmQTZM8UY49qvuwo5PsoYmF0fqz5fQVjzuNKS5bmqV7bA6bSwupNwfhdip0IMI7QzMQGOqUBXKZq3Qugpe8Fe93i1htbmzvzJ%2B2n6qwewhfTz0NgFktRPdOXz3f9sJ0I%2FVUqUMmq9fm2QU9veSeP%2BAp%2FD4I1u6hgekae%2B4w%2FAO2kjooVrHl4gGYkURUBeYKkEXkfvd78zJKzhYadWJUqhbh%2Fg9Xbn1Wc0e0H1lcZP%2FyFsjRc6v6xvifofyEGh35%2BnWJWCDw%2FhZFFlewocYlNX3MJN30GymOR6Pvy&X-Amz-Signature=79c17d5ec9d6e98a8e90f7cfa60ca27fba0dfaeb30ecebd6aae14db0b4553059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUNGDEO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDxd%2B7vJxM6sy8j8VY%2BP01QDZwdu5fnCDKQgOS%2FdBzSTAIgaV87J5Rl%2BGVcBPg4bc%2BKmnZBmcj20GYsdFk9%2FvaLvXYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOOPBaU2FKJmQVInVircA4oucjqVRc%2BdrsqjpYsNu830zlPA3B5GGLcInCO0Z9Xe%2F6YsPYEbPHGXwB72Fk9zuWcfATxXK%2FuO%2BFsFVEY5U0Ho0p96cvBIuk%2Fr9%2FQ7AMv%2B5j4zuD8IKM1qoZEi84Nz6j9OIRQRF3ceOAWnbUPUYN2Yu2P7Fm71SjxI7bVKPgWfdJ9TAsluk%2Fg3RMnq6h4s6oFv1HIm2NrdZP34vjvPt7zye6CXQPIFTMGTLCUctJJd4ss87f5bBqZ5eRQ6J%2Fm3knnvnM9sz6QjQXz8k6QcDAlUXxsjWWzE%2BQpp2nnBBjNAabaPo77erF%2Fg%2FmREjS67pV2u7ZPlG5vSVlW3TH4qwfVkVy1jVqsgoGqu6n7FYMumIP8xwZAQHNVCOQN3WnN7gm7OVFM7j963Vu1cGcgQcnyuZx5V%2FqjGjXfCDjYi3NptDSDTG6NBDF4fvuo%2Bsq83yD%2Fe1uQRV6yvLRQxFfs78w6T%2FlUd1BNqrBf2KAPd5QOmb3p2RLasx8IMRRJBbeik4IIWUhtR7rJ4Vi9wGP%2FVietqqG%2BDLKJl8Oy%2FXftK6HWmaOBI05d%2ByDeaMVhg5SwzNmQTZM8UY49qvuwo5PsoYmF0fqz5fQVjzuNKS5bmqV7bA6bSwupNwfhdip0IMI7QzMQGOqUBXKZq3Qugpe8Fe93i1htbmzvzJ%2B2n6qwewhfTz0NgFktRPdOXz3f9sJ0I%2FVUqUMmq9fm2QU9veSeP%2BAp%2FD4I1u6hgekae%2B4w%2FAO2kjooVrHl4gGYkURUBeYKkEXkfvd78zJKzhYadWJUqhbh%2Fg9Xbn1Wc0e0H1lcZP%2FyFsjRc6v6xvifofyEGh35%2BnWJWCDw%2FhZFFlewocYlNX3MJN30GymOR6Pvy&X-Amz-Signature=00e863c1c03785de98d4580ad770f5832f9c440f7107591203a234b7f3e549b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUNGDEO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDxd%2B7vJxM6sy8j8VY%2BP01QDZwdu5fnCDKQgOS%2FdBzSTAIgaV87J5Rl%2BGVcBPg4bc%2BKmnZBmcj20GYsdFk9%2FvaLvXYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOOPBaU2FKJmQVInVircA4oucjqVRc%2BdrsqjpYsNu830zlPA3B5GGLcInCO0Z9Xe%2F6YsPYEbPHGXwB72Fk9zuWcfATxXK%2FuO%2BFsFVEY5U0Ho0p96cvBIuk%2Fr9%2FQ7AMv%2B5j4zuD8IKM1qoZEi84Nz6j9OIRQRF3ceOAWnbUPUYN2Yu2P7Fm71SjxI7bVKPgWfdJ9TAsluk%2Fg3RMnq6h4s6oFv1HIm2NrdZP34vjvPt7zye6CXQPIFTMGTLCUctJJd4ss87f5bBqZ5eRQ6J%2Fm3knnvnM9sz6QjQXz8k6QcDAlUXxsjWWzE%2BQpp2nnBBjNAabaPo77erF%2Fg%2FmREjS67pV2u7ZPlG5vSVlW3TH4qwfVkVy1jVqsgoGqu6n7FYMumIP8xwZAQHNVCOQN3WnN7gm7OVFM7j963Vu1cGcgQcnyuZx5V%2FqjGjXfCDjYi3NptDSDTG6NBDF4fvuo%2Bsq83yD%2Fe1uQRV6yvLRQxFfs78w6T%2FlUd1BNqrBf2KAPd5QOmb3p2RLasx8IMRRJBbeik4IIWUhtR7rJ4Vi9wGP%2FVietqqG%2BDLKJl8Oy%2FXftK6HWmaOBI05d%2ByDeaMVhg5SwzNmQTZM8UY49qvuwo5PsoYmF0fqz5fQVjzuNKS5bmqV7bA6bSwupNwfhdip0IMI7QzMQGOqUBXKZq3Qugpe8Fe93i1htbmzvzJ%2B2n6qwewhfTz0NgFktRPdOXz3f9sJ0I%2FVUqUMmq9fm2QU9veSeP%2BAp%2FD4I1u6hgekae%2B4w%2FAO2kjooVrHl4gGYkURUBeYKkEXkfvd78zJKzhYadWJUqhbh%2Fg9Xbn1Wc0e0H1lcZP%2FyFsjRc6v6xvifofyEGh35%2BnWJWCDw%2FhZFFlewocYlNX3MJN30GymOR6Pvy&X-Amz-Signature=70be91cff9dce7c3b32a4454483d8773d8e26849e67c4b659fb2071ac252995e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUNGDEO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDxd%2B7vJxM6sy8j8VY%2BP01QDZwdu5fnCDKQgOS%2FdBzSTAIgaV87J5Rl%2BGVcBPg4bc%2BKmnZBmcj20GYsdFk9%2FvaLvXYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOOPBaU2FKJmQVInVircA4oucjqVRc%2BdrsqjpYsNu830zlPA3B5GGLcInCO0Z9Xe%2F6YsPYEbPHGXwB72Fk9zuWcfATxXK%2FuO%2BFsFVEY5U0Ho0p96cvBIuk%2Fr9%2FQ7AMv%2B5j4zuD8IKM1qoZEi84Nz6j9OIRQRF3ceOAWnbUPUYN2Yu2P7Fm71SjxI7bVKPgWfdJ9TAsluk%2Fg3RMnq6h4s6oFv1HIm2NrdZP34vjvPt7zye6CXQPIFTMGTLCUctJJd4ss87f5bBqZ5eRQ6J%2Fm3knnvnM9sz6QjQXz8k6QcDAlUXxsjWWzE%2BQpp2nnBBjNAabaPo77erF%2Fg%2FmREjS67pV2u7ZPlG5vSVlW3TH4qwfVkVy1jVqsgoGqu6n7FYMumIP8xwZAQHNVCOQN3WnN7gm7OVFM7j963Vu1cGcgQcnyuZx5V%2FqjGjXfCDjYi3NptDSDTG6NBDF4fvuo%2Bsq83yD%2Fe1uQRV6yvLRQxFfs78w6T%2FlUd1BNqrBf2KAPd5QOmb3p2RLasx8IMRRJBbeik4IIWUhtR7rJ4Vi9wGP%2FVietqqG%2BDLKJl8Oy%2FXftK6HWmaOBI05d%2ByDeaMVhg5SwzNmQTZM8UY49qvuwo5PsoYmF0fqz5fQVjzuNKS5bmqV7bA6bSwupNwfhdip0IMI7QzMQGOqUBXKZq3Qugpe8Fe93i1htbmzvzJ%2B2n6qwewhfTz0NgFktRPdOXz3f9sJ0I%2FVUqUMmq9fm2QU9veSeP%2BAp%2FD4I1u6hgekae%2B4w%2FAO2kjooVrHl4gGYkURUBeYKkEXkfvd78zJKzhYadWJUqhbh%2Fg9Xbn1Wc0e0H1lcZP%2FyFsjRc6v6xvifofyEGh35%2BnWJWCDw%2FhZFFlewocYlNX3MJN30GymOR6Pvy&X-Amz-Signature=fdad71b175b48f99d27934f7b527e9f5eb1ce06cc9d63d0a19c2abea26927d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUNGDEO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDxd%2B7vJxM6sy8j8VY%2BP01QDZwdu5fnCDKQgOS%2FdBzSTAIgaV87J5Rl%2BGVcBPg4bc%2BKmnZBmcj20GYsdFk9%2FvaLvXYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOOPBaU2FKJmQVInVircA4oucjqVRc%2BdrsqjpYsNu830zlPA3B5GGLcInCO0Z9Xe%2F6YsPYEbPHGXwB72Fk9zuWcfATxXK%2FuO%2BFsFVEY5U0Ho0p96cvBIuk%2Fr9%2FQ7AMv%2B5j4zuD8IKM1qoZEi84Nz6j9OIRQRF3ceOAWnbUPUYN2Yu2P7Fm71SjxI7bVKPgWfdJ9TAsluk%2Fg3RMnq6h4s6oFv1HIm2NrdZP34vjvPt7zye6CXQPIFTMGTLCUctJJd4ss87f5bBqZ5eRQ6J%2Fm3knnvnM9sz6QjQXz8k6QcDAlUXxsjWWzE%2BQpp2nnBBjNAabaPo77erF%2Fg%2FmREjS67pV2u7ZPlG5vSVlW3TH4qwfVkVy1jVqsgoGqu6n7FYMumIP8xwZAQHNVCOQN3WnN7gm7OVFM7j963Vu1cGcgQcnyuZx5V%2FqjGjXfCDjYi3NptDSDTG6NBDF4fvuo%2Bsq83yD%2Fe1uQRV6yvLRQxFfs78w6T%2FlUd1BNqrBf2KAPd5QOmb3p2RLasx8IMRRJBbeik4IIWUhtR7rJ4Vi9wGP%2FVietqqG%2BDLKJl8Oy%2FXftK6HWmaOBI05d%2ByDeaMVhg5SwzNmQTZM8UY49qvuwo5PsoYmF0fqz5fQVjzuNKS5bmqV7bA6bSwupNwfhdip0IMI7QzMQGOqUBXKZq3Qugpe8Fe93i1htbmzvzJ%2B2n6qwewhfTz0NgFktRPdOXz3f9sJ0I%2FVUqUMmq9fm2QU9veSeP%2BAp%2FD4I1u6hgekae%2B4w%2FAO2kjooVrHl4gGYkURUBeYKkEXkfvd78zJKzhYadWJUqhbh%2Fg9Xbn1Wc0e0H1lcZP%2FyFsjRc6v6xvifofyEGh35%2BnWJWCDw%2FhZFFlewocYlNX3MJN30GymOR6Pvy&X-Amz-Signature=658df8a3a9a0719ffd5b161b73c66a6c0d33c786efc2335992b4f238c5c98bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUNGDEO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDxd%2B7vJxM6sy8j8VY%2BP01QDZwdu5fnCDKQgOS%2FdBzSTAIgaV87J5Rl%2BGVcBPg4bc%2BKmnZBmcj20GYsdFk9%2FvaLvXYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOOPBaU2FKJmQVInVircA4oucjqVRc%2BdrsqjpYsNu830zlPA3B5GGLcInCO0Z9Xe%2F6YsPYEbPHGXwB72Fk9zuWcfATxXK%2FuO%2BFsFVEY5U0Ho0p96cvBIuk%2Fr9%2FQ7AMv%2B5j4zuD8IKM1qoZEi84Nz6j9OIRQRF3ceOAWnbUPUYN2Yu2P7Fm71SjxI7bVKPgWfdJ9TAsluk%2Fg3RMnq6h4s6oFv1HIm2NrdZP34vjvPt7zye6CXQPIFTMGTLCUctJJd4ss87f5bBqZ5eRQ6J%2Fm3knnvnM9sz6QjQXz8k6QcDAlUXxsjWWzE%2BQpp2nnBBjNAabaPo77erF%2Fg%2FmREjS67pV2u7ZPlG5vSVlW3TH4qwfVkVy1jVqsgoGqu6n7FYMumIP8xwZAQHNVCOQN3WnN7gm7OVFM7j963Vu1cGcgQcnyuZx5V%2FqjGjXfCDjYi3NptDSDTG6NBDF4fvuo%2Bsq83yD%2Fe1uQRV6yvLRQxFfs78w6T%2FlUd1BNqrBf2KAPd5QOmb3p2RLasx8IMRRJBbeik4IIWUhtR7rJ4Vi9wGP%2FVietqqG%2BDLKJl8Oy%2FXftK6HWmaOBI05d%2ByDeaMVhg5SwzNmQTZM8UY49qvuwo5PsoYmF0fqz5fQVjzuNKS5bmqV7bA6bSwupNwfhdip0IMI7QzMQGOqUBXKZq3Qugpe8Fe93i1htbmzvzJ%2B2n6qwewhfTz0NgFktRPdOXz3f9sJ0I%2FVUqUMmq9fm2QU9veSeP%2BAp%2FD4I1u6hgekae%2B4w%2FAO2kjooVrHl4gGYkURUBeYKkEXkfvd78zJKzhYadWJUqhbh%2Fg9Xbn1Wc0e0H1lcZP%2FyFsjRc6v6xvifofyEGh35%2BnWJWCDw%2FhZFFlewocYlNX3MJN30GymOR6Pvy&X-Amz-Signature=455dbcd635f7fdc08fb74e627167a3b164c03bc10bc1b6d0e97e71c4725a3b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUNGDEO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDxd%2B7vJxM6sy8j8VY%2BP01QDZwdu5fnCDKQgOS%2FdBzSTAIgaV87J5Rl%2BGVcBPg4bc%2BKmnZBmcj20GYsdFk9%2FvaLvXYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOOPBaU2FKJmQVInVircA4oucjqVRc%2BdrsqjpYsNu830zlPA3B5GGLcInCO0Z9Xe%2F6YsPYEbPHGXwB72Fk9zuWcfATxXK%2FuO%2BFsFVEY5U0Ho0p96cvBIuk%2Fr9%2FQ7AMv%2B5j4zuD8IKM1qoZEi84Nz6j9OIRQRF3ceOAWnbUPUYN2Yu2P7Fm71SjxI7bVKPgWfdJ9TAsluk%2Fg3RMnq6h4s6oFv1HIm2NrdZP34vjvPt7zye6CXQPIFTMGTLCUctJJd4ss87f5bBqZ5eRQ6J%2Fm3knnvnM9sz6QjQXz8k6QcDAlUXxsjWWzE%2BQpp2nnBBjNAabaPo77erF%2Fg%2FmREjS67pV2u7ZPlG5vSVlW3TH4qwfVkVy1jVqsgoGqu6n7FYMumIP8xwZAQHNVCOQN3WnN7gm7OVFM7j963Vu1cGcgQcnyuZx5V%2FqjGjXfCDjYi3NptDSDTG6NBDF4fvuo%2Bsq83yD%2Fe1uQRV6yvLRQxFfs78w6T%2FlUd1BNqrBf2KAPd5QOmb3p2RLasx8IMRRJBbeik4IIWUhtR7rJ4Vi9wGP%2FVietqqG%2BDLKJl8Oy%2FXftK6HWmaOBI05d%2ByDeaMVhg5SwzNmQTZM8UY49qvuwo5PsoYmF0fqz5fQVjzuNKS5bmqV7bA6bSwupNwfhdip0IMI7QzMQGOqUBXKZq3Qugpe8Fe93i1htbmzvzJ%2B2n6qwewhfTz0NgFktRPdOXz3f9sJ0I%2FVUqUMmq9fm2QU9veSeP%2BAp%2FD4I1u6hgekae%2B4w%2FAO2kjooVrHl4gGYkURUBeYKkEXkfvd78zJKzhYadWJUqhbh%2Fg9Xbn1Wc0e0H1lcZP%2FyFsjRc6v6xvifofyEGh35%2BnWJWCDw%2FhZFFlewocYlNX3MJN30GymOR6Pvy&X-Amz-Signature=07cec7c210b77e3c423767959ec4e991d25157878c2a22c61e1359362fca48ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUNGDEO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDxd%2B7vJxM6sy8j8VY%2BP01QDZwdu5fnCDKQgOS%2FdBzSTAIgaV87J5Rl%2BGVcBPg4bc%2BKmnZBmcj20GYsdFk9%2FvaLvXYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOOPBaU2FKJmQVInVircA4oucjqVRc%2BdrsqjpYsNu830zlPA3B5GGLcInCO0Z9Xe%2F6YsPYEbPHGXwB72Fk9zuWcfATxXK%2FuO%2BFsFVEY5U0Ho0p96cvBIuk%2Fr9%2FQ7AMv%2B5j4zuD8IKM1qoZEi84Nz6j9OIRQRF3ceOAWnbUPUYN2Yu2P7Fm71SjxI7bVKPgWfdJ9TAsluk%2Fg3RMnq6h4s6oFv1HIm2NrdZP34vjvPt7zye6CXQPIFTMGTLCUctJJd4ss87f5bBqZ5eRQ6J%2Fm3knnvnM9sz6QjQXz8k6QcDAlUXxsjWWzE%2BQpp2nnBBjNAabaPo77erF%2Fg%2FmREjS67pV2u7ZPlG5vSVlW3TH4qwfVkVy1jVqsgoGqu6n7FYMumIP8xwZAQHNVCOQN3WnN7gm7OVFM7j963Vu1cGcgQcnyuZx5V%2FqjGjXfCDjYi3NptDSDTG6NBDF4fvuo%2Bsq83yD%2Fe1uQRV6yvLRQxFfs78w6T%2FlUd1BNqrBf2KAPd5QOmb3p2RLasx8IMRRJBbeik4IIWUhtR7rJ4Vi9wGP%2FVietqqG%2BDLKJl8Oy%2FXftK6HWmaOBI05d%2ByDeaMVhg5SwzNmQTZM8UY49qvuwo5PsoYmF0fqz5fQVjzuNKS5bmqV7bA6bSwupNwfhdip0IMI7QzMQGOqUBXKZq3Qugpe8Fe93i1htbmzvzJ%2B2n6qwewhfTz0NgFktRPdOXz3f9sJ0I%2FVUqUMmq9fm2QU9veSeP%2BAp%2FD4I1u6hgekae%2B4w%2FAO2kjooVrHl4gGYkURUBeYKkEXkfvd78zJKzhYadWJUqhbh%2Fg9Xbn1Wc0e0H1lcZP%2FyFsjRc6v6xvifofyEGh35%2BnWJWCDw%2FhZFFlewocYlNX3MJN30GymOR6Pvy&X-Amz-Signature=eebd9ef70ab57b7571420f27c2f3e999f3bdba12e52ffee772d1328fab5e688d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUNGDEO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDxd%2B7vJxM6sy8j8VY%2BP01QDZwdu5fnCDKQgOS%2FdBzSTAIgaV87J5Rl%2BGVcBPg4bc%2BKmnZBmcj20GYsdFk9%2FvaLvXYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOOPBaU2FKJmQVInVircA4oucjqVRc%2BdrsqjpYsNu830zlPA3B5GGLcInCO0Z9Xe%2F6YsPYEbPHGXwB72Fk9zuWcfATxXK%2FuO%2BFsFVEY5U0Ho0p96cvBIuk%2Fr9%2FQ7AMv%2B5j4zuD8IKM1qoZEi84Nz6j9OIRQRF3ceOAWnbUPUYN2Yu2P7Fm71SjxI7bVKPgWfdJ9TAsluk%2Fg3RMnq6h4s6oFv1HIm2NrdZP34vjvPt7zye6CXQPIFTMGTLCUctJJd4ss87f5bBqZ5eRQ6J%2Fm3knnvnM9sz6QjQXz8k6QcDAlUXxsjWWzE%2BQpp2nnBBjNAabaPo77erF%2Fg%2FmREjS67pV2u7ZPlG5vSVlW3TH4qwfVkVy1jVqsgoGqu6n7FYMumIP8xwZAQHNVCOQN3WnN7gm7OVFM7j963Vu1cGcgQcnyuZx5V%2FqjGjXfCDjYi3NptDSDTG6NBDF4fvuo%2Bsq83yD%2Fe1uQRV6yvLRQxFfs78w6T%2FlUd1BNqrBf2KAPd5QOmb3p2RLasx8IMRRJBbeik4IIWUhtR7rJ4Vi9wGP%2FVietqqG%2BDLKJl8Oy%2FXftK6HWmaOBI05d%2ByDeaMVhg5SwzNmQTZM8UY49qvuwo5PsoYmF0fqz5fQVjzuNKS5bmqV7bA6bSwupNwfhdip0IMI7QzMQGOqUBXKZq3Qugpe8Fe93i1htbmzvzJ%2B2n6qwewhfTz0NgFktRPdOXz3f9sJ0I%2FVUqUMmq9fm2QU9veSeP%2BAp%2FD4I1u6hgekae%2B4w%2FAO2kjooVrHl4gGYkURUBeYKkEXkfvd78zJKzhYadWJUqhbh%2Fg9Xbn1Wc0e0H1lcZP%2FyFsjRc6v6xvifofyEGh35%2BnWJWCDw%2FhZFFlewocYlNX3MJN30GymOR6Pvy&X-Amz-Signature=a55f93291153fb5e4ef146f20d1a03d5b3819e53f1a9a3e43f639f7362d15d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJUNGDEO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDxd%2B7vJxM6sy8j8VY%2BP01QDZwdu5fnCDKQgOS%2FdBzSTAIgaV87J5Rl%2BGVcBPg4bc%2BKmnZBmcj20GYsdFk9%2FvaLvXYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOOPBaU2FKJmQVInVircA4oucjqVRc%2BdrsqjpYsNu830zlPA3B5GGLcInCO0Z9Xe%2F6YsPYEbPHGXwB72Fk9zuWcfATxXK%2FuO%2BFsFVEY5U0Ho0p96cvBIuk%2Fr9%2FQ7AMv%2B5j4zuD8IKM1qoZEi84Nz6j9OIRQRF3ceOAWnbUPUYN2Yu2P7Fm71SjxI7bVKPgWfdJ9TAsluk%2Fg3RMnq6h4s6oFv1HIm2NrdZP34vjvPt7zye6CXQPIFTMGTLCUctJJd4ss87f5bBqZ5eRQ6J%2Fm3knnvnM9sz6QjQXz8k6QcDAlUXxsjWWzE%2BQpp2nnBBjNAabaPo77erF%2Fg%2FmREjS67pV2u7ZPlG5vSVlW3TH4qwfVkVy1jVqsgoGqu6n7FYMumIP8xwZAQHNVCOQN3WnN7gm7OVFM7j963Vu1cGcgQcnyuZx5V%2FqjGjXfCDjYi3NptDSDTG6NBDF4fvuo%2Bsq83yD%2Fe1uQRV6yvLRQxFfs78w6T%2FlUd1BNqrBf2KAPd5QOmb3p2RLasx8IMRRJBbeik4IIWUhtR7rJ4Vi9wGP%2FVietqqG%2BDLKJl8Oy%2FXftK6HWmaOBI05d%2ByDeaMVhg5SwzNmQTZM8UY49qvuwo5PsoYmF0fqz5fQVjzuNKS5bmqV7bA6bSwupNwfhdip0IMI7QzMQGOqUBXKZq3Qugpe8Fe93i1htbmzvzJ%2B2n6qwewhfTz0NgFktRPdOXz3f9sJ0I%2FVUqUMmq9fm2QU9veSeP%2BAp%2FD4I1u6hgekae%2B4w%2FAO2kjooVrHl4gGYkURUBeYKkEXkfvd78zJKzhYadWJUqhbh%2Fg9Xbn1Wc0e0H1lcZP%2FyFsjRc6v6xvifofyEGh35%2BnWJWCDw%2FhZFFlewocYlNX3MJN30GymOR6Pvy&X-Amz-Signature=bbe379b30f6de936e5992943d264ea68b7a6b393795ebbcc9ec96d0aef71528a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
