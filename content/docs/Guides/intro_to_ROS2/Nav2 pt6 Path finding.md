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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU52CR5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDDPt9%2B81o6qImflFsBGK1DP%2BfAuTiEOakUvbJnHgxK%2BQIhAPslkqrlxDYG7d0AxaGnGpSKDGer1TBlyx%2FLomnZtq5%2BKv8DCGEQABoMNjM3NDIzMTgzODA1IgzKQxBuicKZoCHk2eAq3ANESbZeowYQR8L3McJXo%2FXxynOfsCPAYIp0aMkmfT9AWpinaaS%2B4b8ilqjzOscPeDq5X2Viy38pk%2BDrOKTE%2F0tgjPEUGzdci%2BFJi4x3gzI65mgEb7DhV37O%2BHhoHWGMqoFUfOloc%2BmTZn9rP3F0kXDmAfJf63Eroq6KZmX84JlyEUo0ZD8YFMAQvXSgIZ8TBy74jYzRBPJbTJMKo060AkADmu7%2FZtBh6%2F33eocEC6dTfw7jLlvLSBokf5f25TK12xqwFvXa0rnT7NF0XGhMuemrRaDpfqGAYC4SnDMdjfPMwQWQh6RWJOTvc819bqMl8ZEQm03HggRlJkTioiSVcFtKgUHfobMzj3i6NsJDVjHHkTcSoKSwmU1bjcW%2FMYrzNr%2F%2BV7lQCyJWFk%2B1YlnHCFih8LK94kIO0%2BFrVDB365tgtZjwq1i%2FaSRwFJpwUeWdVAa7o9fb6GRVw4vgKdHsV7tEgqM0KaQVzMzQJEmHNyfeL9eeCSsdkxYlDgOtqAv43hufGjonlTkapNsS7eeZEVY4ywve1h7pJ5UEtuEBKro9t5iL9ippMAD6qzCsM7dE1qCV506aGSgVrYCNkol92HS0gdPLQ5%2BRPEMnbOFF8pIJjQvsiueZGQYPQCD0ozCZzcjEBjqkAV5QJtQSWBUGPSmmLqaiSFpFo1QqikXnv7J2QRlvPuF%2F9fuR4%2BjVgJYZUHnj%2FYXwZnLGS9kPYxcfNRsm3JR8ybiR2ZZlL%2Fm%2BC%2Be0BwbirBWRFWK9Yrfa%2FaQTQb7h74WFfyZHeGJIkmsW4JdB16RAxv91Hx7ksDZJwc1SmqDMB4H0Z9Ez9iINrr%2BYW6M3rKSJCGRokrr569shzFJ2ZjoBvsSfejN0&X-Amz-Signature=bf1b22967b76e51a11ef999d0b472f21275bdab7feae9098e0e61fb90f204368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU52CR5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDDPt9%2B81o6qImflFsBGK1DP%2BfAuTiEOakUvbJnHgxK%2BQIhAPslkqrlxDYG7d0AxaGnGpSKDGer1TBlyx%2FLomnZtq5%2BKv8DCGEQABoMNjM3NDIzMTgzODA1IgzKQxBuicKZoCHk2eAq3ANESbZeowYQR8L3McJXo%2FXxynOfsCPAYIp0aMkmfT9AWpinaaS%2B4b8ilqjzOscPeDq5X2Viy38pk%2BDrOKTE%2F0tgjPEUGzdci%2BFJi4x3gzI65mgEb7DhV37O%2BHhoHWGMqoFUfOloc%2BmTZn9rP3F0kXDmAfJf63Eroq6KZmX84JlyEUo0ZD8YFMAQvXSgIZ8TBy74jYzRBPJbTJMKo060AkADmu7%2FZtBh6%2F33eocEC6dTfw7jLlvLSBokf5f25TK12xqwFvXa0rnT7NF0XGhMuemrRaDpfqGAYC4SnDMdjfPMwQWQh6RWJOTvc819bqMl8ZEQm03HggRlJkTioiSVcFtKgUHfobMzj3i6NsJDVjHHkTcSoKSwmU1bjcW%2FMYrzNr%2F%2BV7lQCyJWFk%2B1YlnHCFih8LK94kIO0%2BFrVDB365tgtZjwq1i%2FaSRwFJpwUeWdVAa7o9fb6GRVw4vgKdHsV7tEgqM0KaQVzMzQJEmHNyfeL9eeCSsdkxYlDgOtqAv43hufGjonlTkapNsS7eeZEVY4ywve1h7pJ5UEtuEBKro9t5iL9ippMAD6qzCsM7dE1qCV506aGSgVrYCNkol92HS0gdPLQ5%2BRPEMnbOFF8pIJjQvsiueZGQYPQCD0ozCZzcjEBjqkAV5QJtQSWBUGPSmmLqaiSFpFo1QqikXnv7J2QRlvPuF%2F9fuR4%2BjVgJYZUHnj%2FYXwZnLGS9kPYxcfNRsm3JR8ybiR2ZZlL%2Fm%2BC%2Be0BwbirBWRFWK9Yrfa%2FaQTQb7h74WFfyZHeGJIkmsW4JdB16RAxv91Hx7ksDZJwc1SmqDMB4H0Z9Ez9iINrr%2BYW6M3rKSJCGRokrr569shzFJ2ZjoBvsSfejN0&X-Amz-Signature=f38ebafca4c9298211b19b70f2a15214e3b94dee387be408cd7ee129a5dd440f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU52CR5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDDPt9%2B81o6qImflFsBGK1DP%2BfAuTiEOakUvbJnHgxK%2BQIhAPslkqrlxDYG7d0AxaGnGpSKDGer1TBlyx%2FLomnZtq5%2BKv8DCGEQABoMNjM3NDIzMTgzODA1IgzKQxBuicKZoCHk2eAq3ANESbZeowYQR8L3McJXo%2FXxynOfsCPAYIp0aMkmfT9AWpinaaS%2B4b8ilqjzOscPeDq5X2Viy38pk%2BDrOKTE%2F0tgjPEUGzdci%2BFJi4x3gzI65mgEb7DhV37O%2BHhoHWGMqoFUfOloc%2BmTZn9rP3F0kXDmAfJf63Eroq6KZmX84JlyEUo0ZD8YFMAQvXSgIZ8TBy74jYzRBPJbTJMKo060AkADmu7%2FZtBh6%2F33eocEC6dTfw7jLlvLSBokf5f25TK12xqwFvXa0rnT7NF0XGhMuemrRaDpfqGAYC4SnDMdjfPMwQWQh6RWJOTvc819bqMl8ZEQm03HggRlJkTioiSVcFtKgUHfobMzj3i6NsJDVjHHkTcSoKSwmU1bjcW%2FMYrzNr%2F%2BV7lQCyJWFk%2B1YlnHCFih8LK94kIO0%2BFrVDB365tgtZjwq1i%2FaSRwFJpwUeWdVAa7o9fb6GRVw4vgKdHsV7tEgqM0KaQVzMzQJEmHNyfeL9eeCSsdkxYlDgOtqAv43hufGjonlTkapNsS7eeZEVY4ywve1h7pJ5UEtuEBKro9t5iL9ippMAD6qzCsM7dE1qCV506aGSgVrYCNkol92HS0gdPLQ5%2BRPEMnbOFF8pIJjQvsiueZGQYPQCD0ozCZzcjEBjqkAV5QJtQSWBUGPSmmLqaiSFpFo1QqikXnv7J2QRlvPuF%2F9fuR4%2BjVgJYZUHnj%2FYXwZnLGS9kPYxcfNRsm3JR8ybiR2ZZlL%2Fm%2BC%2Be0BwbirBWRFWK9Yrfa%2FaQTQb7h74WFfyZHeGJIkmsW4JdB16RAxv91Hx7ksDZJwc1SmqDMB4H0Z9Ez9iINrr%2BYW6M3rKSJCGRokrr569shzFJ2ZjoBvsSfejN0&X-Amz-Signature=2c0a12b6df7f6cd06c339a89817106c0875f0a71255c34cc5052e66bf88a4b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU52CR5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDDPt9%2B81o6qImflFsBGK1DP%2BfAuTiEOakUvbJnHgxK%2BQIhAPslkqrlxDYG7d0AxaGnGpSKDGer1TBlyx%2FLomnZtq5%2BKv8DCGEQABoMNjM3NDIzMTgzODA1IgzKQxBuicKZoCHk2eAq3ANESbZeowYQR8L3McJXo%2FXxynOfsCPAYIp0aMkmfT9AWpinaaS%2B4b8ilqjzOscPeDq5X2Viy38pk%2BDrOKTE%2F0tgjPEUGzdci%2BFJi4x3gzI65mgEb7DhV37O%2BHhoHWGMqoFUfOloc%2BmTZn9rP3F0kXDmAfJf63Eroq6KZmX84JlyEUo0ZD8YFMAQvXSgIZ8TBy74jYzRBPJbTJMKo060AkADmu7%2FZtBh6%2F33eocEC6dTfw7jLlvLSBokf5f25TK12xqwFvXa0rnT7NF0XGhMuemrRaDpfqGAYC4SnDMdjfPMwQWQh6RWJOTvc819bqMl8ZEQm03HggRlJkTioiSVcFtKgUHfobMzj3i6NsJDVjHHkTcSoKSwmU1bjcW%2FMYrzNr%2F%2BV7lQCyJWFk%2B1YlnHCFih8LK94kIO0%2BFrVDB365tgtZjwq1i%2FaSRwFJpwUeWdVAa7o9fb6GRVw4vgKdHsV7tEgqM0KaQVzMzQJEmHNyfeL9eeCSsdkxYlDgOtqAv43hufGjonlTkapNsS7eeZEVY4ywve1h7pJ5UEtuEBKro9t5iL9ippMAD6qzCsM7dE1qCV506aGSgVrYCNkol92HS0gdPLQ5%2BRPEMnbOFF8pIJjQvsiueZGQYPQCD0ozCZzcjEBjqkAV5QJtQSWBUGPSmmLqaiSFpFo1QqikXnv7J2QRlvPuF%2F9fuR4%2BjVgJYZUHnj%2FYXwZnLGS9kPYxcfNRsm3JR8ybiR2ZZlL%2Fm%2BC%2Be0BwbirBWRFWK9Yrfa%2FaQTQb7h74WFfyZHeGJIkmsW4JdB16RAxv91Hx7ksDZJwc1SmqDMB4H0Z9Ez9iINrr%2BYW6M3rKSJCGRokrr569shzFJ2ZjoBvsSfejN0&X-Amz-Signature=861f6ac9fef44bfd2b369ee540ca4dd8724696b6dd6a4d3668d908fcae7b4d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU52CR5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDDPt9%2B81o6qImflFsBGK1DP%2BfAuTiEOakUvbJnHgxK%2BQIhAPslkqrlxDYG7d0AxaGnGpSKDGer1TBlyx%2FLomnZtq5%2BKv8DCGEQABoMNjM3NDIzMTgzODA1IgzKQxBuicKZoCHk2eAq3ANESbZeowYQR8L3McJXo%2FXxynOfsCPAYIp0aMkmfT9AWpinaaS%2B4b8ilqjzOscPeDq5X2Viy38pk%2BDrOKTE%2F0tgjPEUGzdci%2BFJi4x3gzI65mgEb7DhV37O%2BHhoHWGMqoFUfOloc%2BmTZn9rP3F0kXDmAfJf63Eroq6KZmX84JlyEUo0ZD8YFMAQvXSgIZ8TBy74jYzRBPJbTJMKo060AkADmu7%2FZtBh6%2F33eocEC6dTfw7jLlvLSBokf5f25TK12xqwFvXa0rnT7NF0XGhMuemrRaDpfqGAYC4SnDMdjfPMwQWQh6RWJOTvc819bqMl8ZEQm03HggRlJkTioiSVcFtKgUHfobMzj3i6NsJDVjHHkTcSoKSwmU1bjcW%2FMYrzNr%2F%2BV7lQCyJWFk%2B1YlnHCFih8LK94kIO0%2BFrVDB365tgtZjwq1i%2FaSRwFJpwUeWdVAa7o9fb6GRVw4vgKdHsV7tEgqM0KaQVzMzQJEmHNyfeL9eeCSsdkxYlDgOtqAv43hufGjonlTkapNsS7eeZEVY4ywve1h7pJ5UEtuEBKro9t5iL9ippMAD6qzCsM7dE1qCV506aGSgVrYCNkol92HS0gdPLQ5%2BRPEMnbOFF8pIJjQvsiueZGQYPQCD0ozCZzcjEBjqkAV5QJtQSWBUGPSmmLqaiSFpFo1QqikXnv7J2QRlvPuF%2F9fuR4%2BjVgJYZUHnj%2FYXwZnLGS9kPYxcfNRsm3JR8ybiR2ZZlL%2Fm%2BC%2Be0BwbirBWRFWK9Yrfa%2FaQTQb7h74WFfyZHeGJIkmsW4JdB16RAxv91Hx7ksDZJwc1SmqDMB4H0Z9Ez9iINrr%2BYW6M3rKSJCGRokrr569shzFJ2ZjoBvsSfejN0&X-Amz-Signature=58d1588076159729215cc1f6da9cb079c194260c8cb8307e5ebb76257be2f004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU52CR5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDDPt9%2B81o6qImflFsBGK1DP%2BfAuTiEOakUvbJnHgxK%2BQIhAPslkqrlxDYG7d0AxaGnGpSKDGer1TBlyx%2FLomnZtq5%2BKv8DCGEQABoMNjM3NDIzMTgzODA1IgzKQxBuicKZoCHk2eAq3ANESbZeowYQR8L3McJXo%2FXxynOfsCPAYIp0aMkmfT9AWpinaaS%2B4b8ilqjzOscPeDq5X2Viy38pk%2BDrOKTE%2F0tgjPEUGzdci%2BFJi4x3gzI65mgEb7DhV37O%2BHhoHWGMqoFUfOloc%2BmTZn9rP3F0kXDmAfJf63Eroq6KZmX84JlyEUo0ZD8YFMAQvXSgIZ8TBy74jYzRBPJbTJMKo060AkADmu7%2FZtBh6%2F33eocEC6dTfw7jLlvLSBokf5f25TK12xqwFvXa0rnT7NF0XGhMuemrRaDpfqGAYC4SnDMdjfPMwQWQh6RWJOTvc819bqMl8ZEQm03HggRlJkTioiSVcFtKgUHfobMzj3i6NsJDVjHHkTcSoKSwmU1bjcW%2FMYrzNr%2F%2BV7lQCyJWFk%2B1YlnHCFih8LK94kIO0%2BFrVDB365tgtZjwq1i%2FaSRwFJpwUeWdVAa7o9fb6GRVw4vgKdHsV7tEgqM0KaQVzMzQJEmHNyfeL9eeCSsdkxYlDgOtqAv43hufGjonlTkapNsS7eeZEVY4ywve1h7pJ5UEtuEBKro9t5iL9ippMAD6qzCsM7dE1qCV506aGSgVrYCNkol92HS0gdPLQ5%2BRPEMnbOFF8pIJjQvsiueZGQYPQCD0ozCZzcjEBjqkAV5QJtQSWBUGPSmmLqaiSFpFo1QqikXnv7J2QRlvPuF%2F9fuR4%2BjVgJYZUHnj%2FYXwZnLGS9kPYxcfNRsm3JR8ybiR2ZZlL%2Fm%2BC%2Be0BwbirBWRFWK9Yrfa%2FaQTQb7h74WFfyZHeGJIkmsW4JdB16RAxv91Hx7ksDZJwc1SmqDMB4H0Z9Ez9iINrr%2BYW6M3rKSJCGRokrr569shzFJ2ZjoBvsSfejN0&X-Amz-Signature=d770a1617850c4346167b5583fb89e66865e326c29372ff99f74bb2670d783e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU52CR5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDDPt9%2B81o6qImflFsBGK1DP%2BfAuTiEOakUvbJnHgxK%2BQIhAPslkqrlxDYG7d0AxaGnGpSKDGer1TBlyx%2FLomnZtq5%2BKv8DCGEQABoMNjM3NDIzMTgzODA1IgzKQxBuicKZoCHk2eAq3ANESbZeowYQR8L3McJXo%2FXxynOfsCPAYIp0aMkmfT9AWpinaaS%2B4b8ilqjzOscPeDq5X2Viy38pk%2BDrOKTE%2F0tgjPEUGzdci%2BFJi4x3gzI65mgEb7DhV37O%2BHhoHWGMqoFUfOloc%2BmTZn9rP3F0kXDmAfJf63Eroq6KZmX84JlyEUo0ZD8YFMAQvXSgIZ8TBy74jYzRBPJbTJMKo060AkADmu7%2FZtBh6%2F33eocEC6dTfw7jLlvLSBokf5f25TK12xqwFvXa0rnT7NF0XGhMuemrRaDpfqGAYC4SnDMdjfPMwQWQh6RWJOTvc819bqMl8ZEQm03HggRlJkTioiSVcFtKgUHfobMzj3i6NsJDVjHHkTcSoKSwmU1bjcW%2FMYrzNr%2F%2BV7lQCyJWFk%2B1YlnHCFih8LK94kIO0%2BFrVDB365tgtZjwq1i%2FaSRwFJpwUeWdVAa7o9fb6GRVw4vgKdHsV7tEgqM0KaQVzMzQJEmHNyfeL9eeCSsdkxYlDgOtqAv43hufGjonlTkapNsS7eeZEVY4ywve1h7pJ5UEtuEBKro9t5iL9ippMAD6qzCsM7dE1qCV506aGSgVrYCNkol92HS0gdPLQ5%2BRPEMnbOFF8pIJjQvsiueZGQYPQCD0ozCZzcjEBjqkAV5QJtQSWBUGPSmmLqaiSFpFo1QqikXnv7J2QRlvPuF%2F9fuR4%2BjVgJYZUHnj%2FYXwZnLGS9kPYxcfNRsm3JR8ybiR2ZZlL%2Fm%2BC%2Be0BwbirBWRFWK9Yrfa%2FaQTQb7h74WFfyZHeGJIkmsW4JdB16RAxv91Hx7ksDZJwc1SmqDMB4H0Z9Ez9iINrr%2BYW6M3rKSJCGRokrr569shzFJ2ZjoBvsSfejN0&X-Amz-Signature=d2adc6334c7252abbff3c6e27ff7b0b09d60cd11211cb4d295e86f3c6ddc59db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU52CR5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDDPt9%2B81o6qImflFsBGK1DP%2BfAuTiEOakUvbJnHgxK%2BQIhAPslkqrlxDYG7d0AxaGnGpSKDGer1TBlyx%2FLomnZtq5%2BKv8DCGEQABoMNjM3NDIzMTgzODA1IgzKQxBuicKZoCHk2eAq3ANESbZeowYQR8L3McJXo%2FXxynOfsCPAYIp0aMkmfT9AWpinaaS%2B4b8ilqjzOscPeDq5X2Viy38pk%2BDrOKTE%2F0tgjPEUGzdci%2BFJi4x3gzI65mgEb7DhV37O%2BHhoHWGMqoFUfOloc%2BmTZn9rP3F0kXDmAfJf63Eroq6KZmX84JlyEUo0ZD8YFMAQvXSgIZ8TBy74jYzRBPJbTJMKo060AkADmu7%2FZtBh6%2F33eocEC6dTfw7jLlvLSBokf5f25TK12xqwFvXa0rnT7NF0XGhMuemrRaDpfqGAYC4SnDMdjfPMwQWQh6RWJOTvc819bqMl8ZEQm03HggRlJkTioiSVcFtKgUHfobMzj3i6NsJDVjHHkTcSoKSwmU1bjcW%2FMYrzNr%2F%2BV7lQCyJWFk%2B1YlnHCFih8LK94kIO0%2BFrVDB365tgtZjwq1i%2FaSRwFJpwUeWdVAa7o9fb6GRVw4vgKdHsV7tEgqM0KaQVzMzQJEmHNyfeL9eeCSsdkxYlDgOtqAv43hufGjonlTkapNsS7eeZEVY4ywve1h7pJ5UEtuEBKro9t5iL9ippMAD6qzCsM7dE1qCV506aGSgVrYCNkol92HS0gdPLQ5%2BRPEMnbOFF8pIJjQvsiueZGQYPQCD0ozCZzcjEBjqkAV5QJtQSWBUGPSmmLqaiSFpFo1QqikXnv7J2QRlvPuF%2F9fuR4%2BjVgJYZUHnj%2FYXwZnLGS9kPYxcfNRsm3JR8ybiR2ZZlL%2Fm%2BC%2Be0BwbirBWRFWK9Yrfa%2FaQTQb7h74WFfyZHeGJIkmsW4JdB16RAxv91Hx7ksDZJwc1SmqDMB4H0Z9Ez9iINrr%2BYW6M3rKSJCGRokrr569shzFJ2ZjoBvsSfejN0&X-Amz-Signature=5cedee884b857faf5a12588418ac6acf8cfdaff5c3be6d660542604bf900a319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU52CR5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDDPt9%2B81o6qImflFsBGK1DP%2BfAuTiEOakUvbJnHgxK%2BQIhAPslkqrlxDYG7d0AxaGnGpSKDGer1TBlyx%2FLomnZtq5%2BKv8DCGEQABoMNjM3NDIzMTgzODA1IgzKQxBuicKZoCHk2eAq3ANESbZeowYQR8L3McJXo%2FXxynOfsCPAYIp0aMkmfT9AWpinaaS%2B4b8ilqjzOscPeDq5X2Viy38pk%2BDrOKTE%2F0tgjPEUGzdci%2BFJi4x3gzI65mgEb7DhV37O%2BHhoHWGMqoFUfOloc%2BmTZn9rP3F0kXDmAfJf63Eroq6KZmX84JlyEUo0ZD8YFMAQvXSgIZ8TBy74jYzRBPJbTJMKo060AkADmu7%2FZtBh6%2F33eocEC6dTfw7jLlvLSBokf5f25TK12xqwFvXa0rnT7NF0XGhMuemrRaDpfqGAYC4SnDMdjfPMwQWQh6RWJOTvc819bqMl8ZEQm03HggRlJkTioiSVcFtKgUHfobMzj3i6NsJDVjHHkTcSoKSwmU1bjcW%2FMYrzNr%2F%2BV7lQCyJWFk%2B1YlnHCFih8LK94kIO0%2BFrVDB365tgtZjwq1i%2FaSRwFJpwUeWdVAa7o9fb6GRVw4vgKdHsV7tEgqM0KaQVzMzQJEmHNyfeL9eeCSsdkxYlDgOtqAv43hufGjonlTkapNsS7eeZEVY4ywve1h7pJ5UEtuEBKro9t5iL9ippMAD6qzCsM7dE1qCV506aGSgVrYCNkol92HS0gdPLQ5%2BRPEMnbOFF8pIJjQvsiueZGQYPQCD0ozCZzcjEBjqkAV5QJtQSWBUGPSmmLqaiSFpFo1QqikXnv7J2QRlvPuF%2F9fuR4%2BjVgJYZUHnj%2FYXwZnLGS9kPYxcfNRsm3JR8ybiR2ZZlL%2Fm%2BC%2Be0BwbirBWRFWK9Yrfa%2FaQTQb7h74WFfyZHeGJIkmsW4JdB16RAxv91Hx7ksDZJwc1SmqDMB4H0Z9Ez9iINrr%2BYW6M3rKSJCGRokrr569shzFJ2ZjoBvsSfejN0&X-Amz-Signature=7fcf047e94b28639d5c9b3d624d4074de05d2584d51b7b1c5fbe14b250ff9da2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU52CR5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDDPt9%2B81o6qImflFsBGK1DP%2BfAuTiEOakUvbJnHgxK%2BQIhAPslkqrlxDYG7d0AxaGnGpSKDGer1TBlyx%2FLomnZtq5%2BKv8DCGEQABoMNjM3NDIzMTgzODA1IgzKQxBuicKZoCHk2eAq3ANESbZeowYQR8L3McJXo%2FXxynOfsCPAYIp0aMkmfT9AWpinaaS%2B4b8ilqjzOscPeDq5X2Viy38pk%2BDrOKTE%2F0tgjPEUGzdci%2BFJi4x3gzI65mgEb7DhV37O%2BHhoHWGMqoFUfOloc%2BmTZn9rP3F0kXDmAfJf63Eroq6KZmX84JlyEUo0ZD8YFMAQvXSgIZ8TBy74jYzRBPJbTJMKo060AkADmu7%2FZtBh6%2F33eocEC6dTfw7jLlvLSBokf5f25TK12xqwFvXa0rnT7NF0XGhMuemrRaDpfqGAYC4SnDMdjfPMwQWQh6RWJOTvc819bqMl8ZEQm03HggRlJkTioiSVcFtKgUHfobMzj3i6NsJDVjHHkTcSoKSwmU1bjcW%2FMYrzNr%2F%2BV7lQCyJWFk%2B1YlnHCFih8LK94kIO0%2BFrVDB365tgtZjwq1i%2FaSRwFJpwUeWdVAa7o9fb6GRVw4vgKdHsV7tEgqM0KaQVzMzQJEmHNyfeL9eeCSsdkxYlDgOtqAv43hufGjonlTkapNsS7eeZEVY4ywve1h7pJ5UEtuEBKro9t5iL9ippMAD6qzCsM7dE1qCV506aGSgVrYCNkol92HS0gdPLQ5%2BRPEMnbOFF8pIJjQvsiueZGQYPQCD0ozCZzcjEBjqkAV5QJtQSWBUGPSmmLqaiSFpFo1QqikXnv7J2QRlvPuF%2F9fuR4%2BjVgJYZUHnj%2FYXwZnLGS9kPYxcfNRsm3JR8ybiR2ZZlL%2Fm%2BC%2Be0BwbirBWRFWK9Yrfa%2FaQTQb7h74WFfyZHeGJIkmsW4JdB16RAxv91Hx7ksDZJwc1SmqDMB4H0Z9Ez9iINrr%2BYW6M3rKSJCGRokrr569shzFJ2ZjoBvsSfejN0&X-Amz-Signature=30f8ff3d45070c0dcbcbc826d38af3d9bceaeb2f6417f8fa31c48f4f9614ae4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU52CR5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDDPt9%2B81o6qImflFsBGK1DP%2BfAuTiEOakUvbJnHgxK%2BQIhAPslkqrlxDYG7d0AxaGnGpSKDGer1TBlyx%2FLomnZtq5%2BKv8DCGEQABoMNjM3NDIzMTgzODA1IgzKQxBuicKZoCHk2eAq3ANESbZeowYQR8L3McJXo%2FXxynOfsCPAYIp0aMkmfT9AWpinaaS%2B4b8ilqjzOscPeDq5X2Viy38pk%2BDrOKTE%2F0tgjPEUGzdci%2BFJi4x3gzI65mgEb7DhV37O%2BHhoHWGMqoFUfOloc%2BmTZn9rP3F0kXDmAfJf63Eroq6KZmX84JlyEUo0ZD8YFMAQvXSgIZ8TBy74jYzRBPJbTJMKo060AkADmu7%2FZtBh6%2F33eocEC6dTfw7jLlvLSBokf5f25TK12xqwFvXa0rnT7NF0XGhMuemrRaDpfqGAYC4SnDMdjfPMwQWQh6RWJOTvc819bqMl8ZEQm03HggRlJkTioiSVcFtKgUHfobMzj3i6NsJDVjHHkTcSoKSwmU1bjcW%2FMYrzNr%2F%2BV7lQCyJWFk%2B1YlnHCFih8LK94kIO0%2BFrVDB365tgtZjwq1i%2FaSRwFJpwUeWdVAa7o9fb6GRVw4vgKdHsV7tEgqM0KaQVzMzQJEmHNyfeL9eeCSsdkxYlDgOtqAv43hufGjonlTkapNsS7eeZEVY4ywve1h7pJ5UEtuEBKro9t5iL9ippMAD6qzCsM7dE1qCV506aGSgVrYCNkol92HS0gdPLQ5%2BRPEMnbOFF8pIJjQvsiueZGQYPQCD0ozCZzcjEBjqkAV5QJtQSWBUGPSmmLqaiSFpFo1QqikXnv7J2QRlvPuF%2F9fuR4%2BjVgJYZUHnj%2FYXwZnLGS9kPYxcfNRsm3JR8ybiR2ZZlL%2Fm%2BC%2Be0BwbirBWRFWK9Yrfa%2FaQTQb7h74WFfyZHeGJIkmsW4JdB16RAxv91Hx7ksDZJwc1SmqDMB4H0Z9Ez9iINrr%2BYW6M3rKSJCGRokrr569shzFJ2ZjoBvsSfejN0&X-Amz-Signature=49ff1f74c7271e35cb17b0c3ad2a89ab35c94d5cf59b24a0d1e821d227be0abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU52CR5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDDPt9%2B81o6qImflFsBGK1DP%2BfAuTiEOakUvbJnHgxK%2BQIhAPslkqrlxDYG7d0AxaGnGpSKDGer1TBlyx%2FLomnZtq5%2BKv8DCGEQABoMNjM3NDIzMTgzODA1IgzKQxBuicKZoCHk2eAq3ANESbZeowYQR8L3McJXo%2FXxynOfsCPAYIp0aMkmfT9AWpinaaS%2B4b8ilqjzOscPeDq5X2Viy38pk%2BDrOKTE%2F0tgjPEUGzdci%2BFJi4x3gzI65mgEb7DhV37O%2BHhoHWGMqoFUfOloc%2BmTZn9rP3F0kXDmAfJf63Eroq6KZmX84JlyEUo0ZD8YFMAQvXSgIZ8TBy74jYzRBPJbTJMKo060AkADmu7%2FZtBh6%2F33eocEC6dTfw7jLlvLSBokf5f25TK12xqwFvXa0rnT7NF0XGhMuemrRaDpfqGAYC4SnDMdjfPMwQWQh6RWJOTvc819bqMl8ZEQm03HggRlJkTioiSVcFtKgUHfobMzj3i6NsJDVjHHkTcSoKSwmU1bjcW%2FMYrzNr%2F%2BV7lQCyJWFk%2B1YlnHCFih8LK94kIO0%2BFrVDB365tgtZjwq1i%2FaSRwFJpwUeWdVAa7o9fb6GRVw4vgKdHsV7tEgqM0KaQVzMzQJEmHNyfeL9eeCSsdkxYlDgOtqAv43hufGjonlTkapNsS7eeZEVY4ywve1h7pJ5UEtuEBKro9t5iL9ippMAD6qzCsM7dE1qCV506aGSgVrYCNkol92HS0gdPLQ5%2BRPEMnbOFF8pIJjQvsiueZGQYPQCD0ozCZzcjEBjqkAV5QJtQSWBUGPSmmLqaiSFpFo1QqikXnv7J2QRlvPuF%2F9fuR4%2BjVgJYZUHnj%2FYXwZnLGS9kPYxcfNRsm3JR8ybiR2ZZlL%2Fm%2BC%2Be0BwbirBWRFWK9Yrfa%2FaQTQb7h74WFfyZHeGJIkmsW4JdB16RAxv91Hx7ksDZJwc1SmqDMB4H0Z9Ez9iINrr%2BYW6M3rKSJCGRokrr569shzFJ2ZjoBvsSfejN0&X-Amz-Signature=efa8ffbe00136f547abb38cce70571b830d6b88a420dce7ea94cfb508f821018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU52CR5%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDDPt9%2B81o6qImflFsBGK1DP%2BfAuTiEOakUvbJnHgxK%2BQIhAPslkqrlxDYG7d0AxaGnGpSKDGer1TBlyx%2FLomnZtq5%2BKv8DCGEQABoMNjM3NDIzMTgzODA1IgzKQxBuicKZoCHk2eAq3ANESbZeowYQR8L3McJXo%2FXxynOfsCPAYIp0aMkmfT9AWpinaaS%2B4b8ilqjzOscPeDq5X2Viy38pk%2BDrOKTE%2F0tgjPEUGzdci%2BFJi4x3gzI65mgEb7DhV37O%2BHhoHWGMqoFUfOloc%2BmTZn9rP3F0kXDmAfJf63Eroq6KZmX84JlyEUo0ZD8YFMAQvXSgIZ8TBy74jYzRBPJbTJMKo060AkADmu7%2FZtBh6%2F33eocEC6dTfw7jLlvLSBokf5f25TK12xqwFvXa0rnT7NF0XGhMuemrRaDpfqGAYC4SnDMdjfPMwQWQh6RWJOTvc819bqMl8ZEQm03HggRlJkTioiSVcFtKgUHfobMzj3i6NsJDVjHHkTcSoKSwmU1bjcW%2FMYrzNr%2F%2BV7lQCyJWFk%2B1YlnHCFih8LK94kIO0%2BFrVDB365tgtZjwq1i%2FaSRwFJpwUeWdVAa7o9fb6GRVw4vgKdHsV7tEgqM0KaQVzMzQJEmHNyfeL9eeCSsdkxYlDgOtqAv43hufGjonlTkapNsS7eeZEVY4ywve1h7pJ5UEtuEBKro9t5iL9ippMAD6qzCsM7dE1qCV506aGSgVrYCNkol92HS0gdPLQ5%2BRPEMnbOFF8pIJjQvsiueZGQYPQCD0ozCZzcjEBjqkAV5QJtQSWBUGPSmmLqaiSFpFo1QqikXnv7J2QRlvPuF%2F9fuR4%2BjVgJYZUHnj%2FYXwZnLGS9kPYxcfNRsm3JR8ybiR2ZZlL%2Fm%2BC%2Be0BwbirBWRFWK9Yrfa%2FaQTQb7h74WFfyZHeGJIkmsW4JdB16RAxv91Hx7ksDZJwc1SmqDMB4H0Z9Ez9iINrr%2BYW6M3rKSJCGRokrr569shzFJ2ZjoBvsSfejN0&X-Amz-Signature=9387360dda8a19804977d0c2d779a40cec8481a595ef8801abdf4e97de6aeba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
