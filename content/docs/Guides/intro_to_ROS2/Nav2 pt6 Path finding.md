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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EU4DRDR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJxRDAX97ys4eR59sGxQXY7WCnL6DfLWPXtFIMpyVCvAiBj42rw5%2FN%2BMl3WlQnFmW7rC%2BAOiBXFBrFfhuA4ozf4LCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMc5tH61iv6n28NCKtwDMfhe6UnpQPtb3Fgq5EZhGsGGCKePCoK2OGkeUyVKaphRU%2FJhrfy86blfsZ70VlAymFDazr8xtZyBbfFMUHNvx9uWieLbsKR4IRQFs0hzxmjK4Jy%2Fm6LJyq1TcD4W9DmPN2ismcXyIuwihxNrA%2B2ls%2F%2Bp84jDshCMFvVzXZSJxbNO6HuEMuuDZIzCUhb4JMhfvX75sUonqXgSUd%2F1RrtUM3DAYEc%2F5DFpjWUXIIo8YTJ%2BaKU%2FlGHg9rP5WUdyNstvyPYS1yTy9Dt5XZf0X28cBJkIAzYs6KCb0fpNUe18PY2FyfrqYVvW0CsMKt0KMlEUDbnLHFcm5dDuJJAUjfBsT743Ml9gCTIIion9IPaok3ejHePnmNR6RAJMgJJuO%2FhCLVs60HhSPtTl2vyeu794eMWubJLIjU74le%2B%2BejAjxQNA%2FiayPk2ZzINB6UcV5RxxUzTK9G7qS3wwTy%2FkRnywgFOY30txW2EawAfgvV4rsF048KcK%2FIRdf4cgB%2BETwBwHaObC104Y%2Fa7VlztoHNLcfIboIOtP4BLbYRaAh2NxGqw5LN5TA3WVwffbE5m0YmUfRNxzTSGgXZdTwj7f0IOdOl3aiT%2BZmeZRFdXGZ8pSGvKQiNCq8VnXrlhyqdIwrPL5ywY6pgFjkMJpRJyVf4URn8d6JFvusT9Sgh8R2vMYusLglT5tuA9tC%2Bw1VNRD1yWYoE%2FpCyg1Eyv9ipqM%2FZhUUa87Bzax4ILw%2FVEbikuU0KqzaHbr%2BbzlG97oPuuZ89Kwbc%2BWPKsQjWElBFgrS6TIe8XW7zCPyQdVtkPvjkLBZ2yrhe1RoCARSJzb%2FD%2FfUD8FJvWafMYsivQW9UOz3DqU7e%2FWE5DNQSDqLl%2FP&X-Amz-Signature=859bfd5506a9a6ccb775c97ffacd1e679fd17eae4b34eaceadd79cfbfa8055e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EU4DRDR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJxRDAX97ys4eR59sGxQXY7WCnL6DfLWPXtFIMpyVCvAiBj42rw5%2FN%2BMl3WlQnFmW7rC%2BAOiBXFBrFfhuA4ozf4LCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMc5tH61iv6n28NCKtwDMfhe6UnpQPtb3Fgq5EZhGsGGCKePCoK2OGkeUyVKaphRU%2FJhrfy86blfsZ70VlAymFDazr8xtZyBbfFMUHNvx9uWieLbsKR4IRQFs0hzxmjK4Jy%2Fm6LJyq1TcD4W9DmPN2ismcXyIuwihxNrA%2B2ls%2F%2Bp84jDshCMFvVzXZSJxbNO6HuEMuuDZIzCUhb4JMhfvX75sUonqXgSUd%2F1RrtUM3DAYEc%2F5DFpjWUXIIo8YTJ%2BaKU%2FlGHg9rP5WUdyNstvyPYS1yTy9Dt5XZf0X28cBJkIAzYs6KCb0fpNUe18PY2FyfrqYVvW0CsMKt0KMlEUDbnLHFcm5dDuJJAUjfBsT743Ml9gCTIIion9IPaok3ejHePnmNR6RAJMgJJuO%2FhCLVs60HhSPtTl2vyeu794eMWubJLIjU74le%2B%2BejAjxQNA%2FiayPk2ZzINB6UcV5RxxUzTK9G7qS3wwTy%2FkRnywgFOY30txW2EawAfgvV4rsF048KcK%2FIRdf4cgB%2BETwBwHaObC104Y%2Fa7VlztoHNLcfIboIOtP4BLbYRaAh2NxGqw5LN5TA3WVwffbE5m0YmUfRNxzTSGgXZdTwj7f0IOdOl3aiT%2BZmeZRFdXGZ8pSGvKQiNCq8VnXrlhyqdIwrPL5ywY6pgFjkMJpRJyVf4URn8d6JFvusT9Sgh8R2vMYusLglT5tuA9tC%2Bw1VNRD1yWYoE%2FpCyg1Eyv9ipqM%2FZhUUa87Bzax4ILw%2FVEbikuU0KqzaHbr%2BbzlG97oPuuZ89Kwbc%2BWPKsQjWElBFgrS6TIe8XW7zCPyQdVtkPvjkLBZ2yrhe1RoCARSJzb%2FD%2FfUD8FJvWafMYsivQW9UOz3DqU7e%2FWE5DNQSDqLl%2FP&X-Amz-Signature=e5af1341fb3bea3cd1575a42706d22ace7c3a815ad3c1f7108e410516b9ea30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EU4DRDR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJxRDAX97ys4eR59sGxQXY7WCnL6DfLWPXtFIMpyVCvAiBj42rw5%2FN%2BMl3WlQnFmW7rC%2BAOiBXFBrFfhuA4ozf4LCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMc5tH61iv6n28NCKtwDMfhe6UnpQPtb3Fgq5EZhGsGGCKePCoK2OGkeUyVKaphRU%2FJhrfy86blfsZ70VlAymFDazr8xtZyBbfFMUHNvx9uWieLbsKR4IRQFs0hzxmjK4Jy%2Fm6LJyq1TcD4W9DmPN2ismcXyIuwihxNrA%2B2ls%2F%2Bp84jDshCMFvVzXZSJxbNO6HuEMuuDZIzCUhb4JMhfvX75sUonqXgSUd%2F1RrtUM3DAYEc%2F5DFpjWUXIIo8YTJ%2BaKU%2FlGHg9rP5WUdyNstvyPYS1yTy9Dt5XZf0X28cBJkIAzYs6KCb0fpNUe18PY2FyfrqYVvW0CsMKt0KMlEUDbnLHFcm5dDuJJAUjfBsT743Ml9gCTIIion9IPaok3ejHePnmNR6RAJMgJJuO%2FhCLVs60HhSPtTl2vyeu794eMWubJLIjU74le%2B%2BejAjxQNA%2FiayPk2ZzINB6UcV5RxxUzTK9G7qS3wwTy%2FkRnywgFOY30txW2EawAfgvV4rsF048KcK%2FIRdf4cgB%2BETwBwHaObC104Y%2Fa7VlztoHNLcfIboIOtP4BLbYRaAh2NxGqw5LN5TA3WVwffbE5m0YmUfRNxzTSGgXZdTwj7f0IOdOl3aiT%2BZmeZRFdXGZ8pSGvKQiNCq8VnXrlhyqdIwrPL5ywY6pgFjkMJpRJyVf4URn8d6JFvusT9Sgh8R2vMYusLglT5tuA9tC%2Bw1VNRD1yWYoE%2FpCyg1Eyv9ipqM%2FZhUUa87Bzax4ILw%2FVEbikuU0KqzaHbr%2BbzlG97oPuuZ89Kwbc%2BWPKsQjWElBFgrS6TIe8XW7zCPyQdVtkPvjkLBZ2yrhe1RoCARSJzb%2FD%2FfUD8FJvWafMYsivQW9UOz3DqU7e%2FWE5DNQSDqLl%2FP&X-Amz-Signature=16cbad49a043690d428790c3ae0db67c6708e7392fc0969fa753b98ae6e4dd29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EU4DRDR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJxRDAX97ys4eR59sGxQXY7WCnL6DfLWPXtFIMpyVCvAiBj42rw5%2FN%2BMl3WlQnFmW7rC%2BAOiBXFBrFfhuA4ozf4LCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMc5tH61iv6n28NCKtwDMfhe6UnpQPtb3Fgq5EZhGsGGCKePCoK2OGkeUyVKaphRU%2FJhrfy86blfsZ70VlAymFDazr8xtZyBbfFMUHNvx9uWieLbsKR4IRQFs0hzxmjK4Jy%2Fm6LJyq1TcD4W9DmPN2ismcXyIuwihxNrA%2B2ls%2F%2Bp84jDshCMFvVzXZSJxbNO6HuEMuuDZIzCUhb4JMhfvX75sUonqXgSUd%2F1RrtUM3DAYEc%2F5DFpjWUXIIo8YTJ%2BaKU%2FlGHg9rP5WUdyNstvyPYS1yTy9Dt5XZf0X28cBJkIAzYs6KCb0fpNUe18PY2FyfrqYVvW0CsMKt0KMlEUDbnLHFcm5dDuJJAUjfBsT743Ml9gCTIIion9IPaok3ejHePnmNR6RAJMgJJuO%2FhCLVs60HhSPtTl2vyeu794eMWubJLIjU74le%2B%2BejAjxQNA%2FiayPk2ZzINB6UcV5RxxUzTK9G7qS3wwTy%2FkRnywgFOY30txW2EawAfgvV4rsF048KcK%2FIRdf4cgB%2BETwBwHaObC104Y%2Fa7VlztoHNLcfIboIOtP4BLbYRaAh2NxGqw5LN5TA3WVwffbE5m0YmUfRNxzTSGgXZdTwj7f0IOdOl3aiT%2BZmeZRFdXGZ8pSGvKQiNCq8VnXrlhyqdIwrPL5ywY6pgFjkMJpRJyVf4URn8d6JFvusT9Sgh8R2vMYusLglT5tuA9tC%2Bw1VNRD1yWYoE%2FpCyg1Eyv9ipqM%2FZhUUa87Bzax4ILw%2FVEbikuU0KqzaHbr%2BbzlG97oPuuZ89Kwbc%2BWPKsQjWElBFgrS6TIe8XW7zCPyQdVtkPvjkLBZ2yrhe1RoCARSJzb%2FD%2FfUD8FJvWafMYsivQW9UOz3DqU7e%2FWE5DNQSDqLl%2FP&X-Amz-Signature=88599be88823d8c2f94f95e7979a63935ac6865fb83ee5eef6832d8f2d2f841f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EU4DRDR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJxRDAX97ys4eR59sGxQXY7WCnL6DfLWPXtFIMpyVCvAiBj42rw5%2FN%2BMl3WlQnFmW7rC%2BAOiBXFBrFfhuA4ozf4LCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMc5tH61iv6n28NCKtwDMfhe6UnpQPtb3Fgq5EZhGsGGCKePCoK2OGkeUyVKaphRU%2FJhrfy86blfsZ70VlAymFDazr8xtZyBbfFMUHNvx9uWieLbsKR4IRQFs0hzxmjK4Jy%2Fm6LJyq1TcD4W9DmPN2ismcXyIuwihxNrA%2B2ls%2F%2Bp84jDshCMFvVzXZSJxbNO6HuEMuuDZIzCUhb4JMhfvX75sUonqXgSUd%2F1RrtUM3DAYEc%2F5DFpjWUXIIo8YTJ%2BaKU%2FlGHg9rP5WUdyNstvyPYS1yTy9Dt5XZf0X28cBJkIAzYs6KCb0fpNUe18PY2FyfrqYVvW0CsMKt0KMlEUDbnLHFcm5dDuJJAUjfBsT743Ml9gCTIIion9IPaok3ejHePnmNR6RAJMgJJuO%2FhCLVs60HhSPtTl2vyeu794eMWubJLIjU74le%2B%2BejAjxQNA%2FiayPk2ZzINB6UcV5RxxUzTK9G7qS3wwTy%2FkRnywgFOY30txW2EawAfgvV4rsF048KcK%2FIRdf4cgB%2BETwBwHaObC104Y%2Fa7VlztoHNLcfIboIOtP4BLbYRaAh2NxGqw5LN5TA3WVwffbE5m0YmUfRNxzTSGgXZdTwj7f0IOdOl3aiT%2BZmeZRFdXGZ8pSGvKQiNCq8VnXrlhyqdIwrPL5ywY6pgFjkMJpRJyVf4URn8d6JFvusT9Sgh8R2vMYusLglT5tuA9tC%2Bw1VNRD1yWYoE%2FpCyg1Eyv9ipqM%2FZhUUa87Bzax4ILw%2FVEbikuU0KqzaHbr%2BbzlG97oPuuZ89Kwbc%2BWPKsQjWElBFgrS6TIe8XW7zCPyQdVtkPvjkLBZ2yrhe1RoCARSJzb%2FD%2FfUD8FJvWafMYsivQW9UOz3DqU7e%2FWE5DNQSDqLl%2FP&X-Amz-Signature=07f0ad7e2cda1a0d989b2d8cf2d333f604cb00961bf77fff6cb810079a968052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EU4DRDR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJxRDAX97ys4eR59sGxQXY7WCnL6DfLWPXtFIMpyVCvAiBj42rw5%2FN%2BMl3WlQnFmW7rC%2BAOiBXFBrFfhuA4ozf4LCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMc5tH61iv6n28NCKtwDMfhe6UnpQPtb3Fgq5EZhGsGGCKePCoK2OGkeUyVKaphRU%2FJhrfy86blfsZ70VlAymFDazr8xtZyBbfFMUHNvx9uWieLbsKR4IRQFs0hzxmjK4Jy%2Fm6LJyq1TcD4W9DmPN2ismcXyIuwihxNrA%2B2ls%2F%2Bp84jDshCMFvVzXZSJxbNO6HuEMuuDZIzCUhb4JMhfvX75sUonqXgSUd%2F1RrtUM3DAYEc%2F5DFpjWUXIIo8YTJ%2BaKU%2FlGHg9rP5WUdyNstvyPYS1yTy9Dt5XZf0X28cBJkIAzYs6KCb0fpNUe18PY2FyfrqYVvW0CsMKt0KMlEUDbnLHFcm5dDuJJAUjfBsT743Ml9gCTIIion9IPaok3ejHePnmNR6RAJMgJJuO%2FhCLVs60HhSPtTl2vyeu794eMWubJLIjU74le%2B%2BejAjxQNA%2FiayPk2ZzINB6UcV5RxxUzTK9G7qS3wwTy%2FkRnywgFOY30txW2EawAfgvV4rsF048KcK%2FIRdf4cgB%2BETwBwHaObC104Y%2Fa7VlztoHNLcfIboIOtP4BLbYRaAh2NxGqw5LN5TA3WVwffbE5m0YmUfRNxzTSGgXZdTwj7f0IOdOl3aiT%2BZmeZRFdXGZ8pSGvKQiNCq8VnXrlhyqdIwrPL5ywY6pgFjkMJpRJyVf4URn8d6JFvusT9Sgh8R2vMYusLglT5tuA9tC%2Bw1VNRD1yWYoE%2FpCyg1Eyv9ipqM%2FZhUUa87Bzax4ILw%2FVEbikuU0KqzaHbr%2BbzlG97oPuuZ89Kwbc%2BWPKsQjWElBFgrS6TIe8XW7zCPyQdVtkPvjkLBZ2yrhe1RoCARSJzb%2FD%2FfUD8FJvWafMYsivQW9UOz3DqU7e%2FWE5DNQSDqLl%2FP&X-Amz-Signature=cfca20a6c653ae3cfddf55b7ec502516f0f787f36ec9d02fae3a804093adab0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EU4DRDR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJxRDAX97ys4eR59sGxQXY7WCnL6DfLWPXtFIMpyVCvAiBj42rw5%2FN%2BMl3WlQnFmW7rC%2BAOiBXFBrFfhuA4ozf4LCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMc5tH61iv6n28NCKtwDMfhe6UnpQPtb3Fgq5EZhGsGGCKePCoK2OGkeUyVKaphRU%2FJhrfy86blfsZ70VlAymFDazr8xtZyBbfFMUHNvx9uWieLbsKR4IRQFs0hzxmjK4Jy%2Fm6LJyq1TcD4W9DmPN2ismcXyIuwihxNrA%2B2ls%2F%2Bp84jDshCMFvVzXZSJxbNO6HuEMuuDZIzCUhb4JMhfvX75sUonqXgSUd%2F1RrtUM3DAYEc%2F5DFpjWUXIIo8YTJ%2BaKU%2FlGHg9rP5WUdyNstvyPYS1yTy9Dt5XZf0X28cBJkIAzYs6KCb0fpNUe18PY2FyfrqYVvW0CsMKt0KMlEUDbnLHFcm5dDuJJAUjfBsT743Ml9gCTIIion9IPaok3ejHePnmNR6RAJMgJJuO%2FhCLVs60HhSPtTl2vyeu794eMWubJLIjU74le%2B%2BejAjxQNA%2FiayPk2ZzINB6UcV5RxxUzTK9G7qS3wwTy%2FkRnywgFOY30txW2EawAfgvV4rsF048KcK%2FIRdf4cgB%2BETwBwHaObC104Y%2Fa7VlztoHNLcfIboIOtP4BLbYRaAh2NxGqw5LN5TA3WVwffbE5m0YmUfRNxzTSGgXZdTwj7f0IOdOl3aiT%2BZmeZRFdXGZ8pSGvKQiNCq8VnXrlhyqdIwrPL5ywY6pgFjkMJpRJyVf4URn8d6JFvusT9Sgh8R2vMYusLglT5tuA9tC%2Bw1VNRD1yWYoE%2FpCyg1Eyv9ipqM%2FZhUUa87Bzax4ILw%2FVEbikuU0KqzaHbr%2BbzlG97oPuuZ89Kwbc%2BWPKsQjWElBFgrS6TIe8XW7zCPyQdVtkPvjkLBZ2yrhe1RoCARSJzb%2FD%2FfUD8FJvWafMYsivQW9UOz3DqU7e%2FWE5DNQSDqLl%2FP&X-Amz-Signature=59700bf32d7b5c28ab0ee4d8bf92790086d8fb155792bc7bbb0c86781dc700d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EU4DRDR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJxRDAX97ys4eR59sGxQXY7WCnL6DfLWPXtFIMpyVCvAiBj42rw5%2FN%2BMl3WlQnFmW7rC%2BAOiBXFBrFfhuA4ozf4LCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMc5tH61iv6n28NCKtwDMfhe6UnpQPtb3Fgq5EZhGsGGCKePCoK2OGkeUyVKaphRU%2FJhrfy86blfsZ70VlAymFDazr8xtZyBbfFMUHNvx9uWieLbsKR4IRQFs0hzxmjK4Jy%2Fm6LJyq1TcD4W9DmPN2ismcXyIuwihxNrA%2B2ls%2F%2Bp84jDshCMFvVzXZSJxbNO6HuEMuuDZIzCUhb4JMhfvX75sUonqXgSUd%2F1RrtUM3DAYEc%2F5DFpjWUXIIo8YTJ%2BaKU%2FlGHg9rP5WUdyNstvyPYS1yTy9Dt5XZf0X28cBJkIAzYs6KCb0fpNUe18PY2FyfrqYVvW0CsMKt0KMlEUDbnLHFcm5dDuJJAUjfBsT743Ml9gCTIIion9IPaok3ejHePnmNR6RAJMgJJuO%2FhCLVs60HhSPtTl2vyeu794eMWubJLIjU74le%2B%2BejAjxQNA%2FiayPk2ZzINB6UcV5RxxUzTK9G7qS3wwTy%2FkRnywgFOY30txW2EawAfgvV4rsF048KcK%2FIRdf4cgB%2BETwBwHaObC104Y%2Fa7VlztoHNLcfIboIOtP4BLbYRaAh2NxGqw5LN5TA3WVwffbE5m0YmUfRNxzTSGgXZdTwj7f0IOdOl3aiT%2BZmeZRFdXGZ8pSGvKQiNCq8VnXrlhyqdIwrPL5ywY6pgFjkMJpRJyVf4URn8d6JFvusT9Sgh8R2vMYusLglT5tuA9tC%2Bw1VNRD1yWYoE%2FpCyg1Eyv9ipqM%2FZhUUa87Bzax4ILw%2FVEbikuU0KqzaHbr%2BbzlG97oPuuZ89Kwbc%2BWPKsQjWElBFgrS6TIe8XW7zCPyQdVtkPvjkLBZ2yrhe1RoCARSJzb%2FD%2FfUD8FJvWafMYsivQW9UOz3DqU7e%2FWE5DNQSDqLl%2FP&X-Amz-Signature=a8b2d0ff82cdd8ddedd1018ab0fd4c8070a49770043b75caabb0148023299783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EU4DRDR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJxRDAX97ys4eR59sGxQXY7WCnL6DfLWPXtFIMpyVCvAiBj42rw5%2FN%2BMl3WlQnFmW7rC%2BAOiBXFBrFfhuA4ozf4LCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMc5tH61iv6n28NCKtwDMfhe6UnpQPtb3Fgq5EZhGsGGCKePCoK2OGkeUyVKaphRU%2FJhrfy86blfsZ70VlAymFDazr8xtZyBbfFMUHNvx9uWieLbsKR4IRQFs0hzxmjK4Jy%2Fm6LJyq1TcD4W9DmPN2ismcXyIuwihxNrA%2B2ls%2F%2Bp84jDshCMFvVzXZSJxbNO6HuEMuuDZIzCUhb4JMhfvX75sUonqXgSUd%2F1RrtUM3DAYEc%2F5DFpjWUXIIo8YTJ%2BaKU%2FlGHg9rP5WUdyNstvyPYS1yTy9Dt5XZf0X28cBJkIAzYs6KCb0fpNUe18PY2FyfrqYVvW0CsMKt0KMlEUDbnLHFcm5dDuJJAUjfBsT743Ml9gCTIIion9IPaok3ejHePnmNR6RAJMgJJuO%2FhCLVs60HhSPtTl2vyeu794eMWubJLIjU74le%2B%2BejAjxQNA%2FiayPk2ZzINB6UcV5RxxUzTK9G7qS3wwTy%2FkRnywgFOY30txW2EawAfgvV4rsF048KcK%2FIRdf4cgB%2BETwBwHaObC104Y%2Fa7VlztoHNLcfIboIOtP4BLbYRaAh2NxGqw5LN5TA3WVwffbE5m0YmUfRNxzTSGgXZdTwj7f0IOdOl3aiT%2BZmeZRFdXGZ8pSGvKQiNCq8VnXrlhyqdIwrPL5ywY6pgFjkMJpRJyVf4URn8d6JFvusT9Sgh8R2vMYusLglT5tuA9tC%2Bw1VNRD1yWYoE%2FpCyg1Eyv9ipqM%2FZhUUa87Bzax4ILw%2FVEbikuU0KqzaHbr%2BbzlG97oPuuZ89Kwbc%2BWPKsQjWElBFgrS6TIe8XW7zCPyQdVtkPvjkLBZ2yrhe1RoCARSJzb%2FD%2FfUD8FJvWafMYsivQW9UOz3DqU7e%2FWE5DNQSDqLl%2FP&X-Amz-Signature=a0c32da90e87635d36c9ab07d3060538161982da29db0947089ce6bb11feed66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EU4DRDR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJxRDAX97ys4eR59sGxQXY7WCnL6DfLWPXtFIMpyVCvAiBj42rw5%2FN%2BMl3WlQnFmW7rC%2BAOiBXFBrFfhuA4ozf4LCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMc5tH61iv6n28NCKtwDMfhe6UnpQPtb3Fgq5EZhGsGGCKePCoK2OGkeUyVKaphRU%2FJhrfy86blfsZ70VlAymFDazr8xtZyBbfFMUHNvx9uWieLbsKR4IRQFs0hzxmjK4Jy%2Fm6LJyq1TcD4W9DmPN2ismcXyIuwihxNrA%2B2ls%2F%2Bp84jDshCMFvVzXZSJxbNO6HuEMuuDZIzCUhb4JMhfvX75sUonqXgSUd%2F1RrtUM3DAYEc%2F5DFpjWUXIIo8YTJ%2BaKU%2FlGHg9rP5WUdyNstvyPYS1yTy9Dt5XZf0X28cBJkIAzYs6KCb0fpNUe18PY2FyfrqYVvW0CsMKt0KMlEUDbnLHFcm5dDuJJAUjfBsT743Ml9gCTIIion9IPaok3ejHePnmNR6RAJMgJJuO%2FhCLVs60HhSPtTl2vyeu794eMWubJLIjU74le%2B%2BejAjxQNA%2FiayPk2ZzINB6UcV5RxxUzTK9G7qS3wwTy%2FkRnywgFOY30txW2EawAfgvV4rsF048KcK%2FIRdf4cgB%2BETwBwHaObC104Y%2Fa7VlztoHNLcfIboIOtP4BLbYRaAh2NxGqw5LN5TA3WVwffbE5m0YmUfRNxzTSGgXZdTwj7f0IOdOl3aiT%2BZmeZRFdXGZ8pSGvKQiNCq8VnXrlhyqdIwrPL5ywY6pgFjkMJpRJyVf4URn8d6JFvusT9Sgh8R2vMYusLglT5tuA9tC%2Bw1VNRD1yWYoE%2FpCyg1Eyv9ipqM%2FZhUUa87Bzax4ILw%2FVEbikuU0KqzaHbr%2BbzlG97oPuuZ89Kwbc%2BWPKsQjWElBFgrS6TIe8XW7zCPyQdVtkPvjkLBZ2yrhe1RoCARSJzb%2FD%2FfUD8FJvWafMYsivQW9UOz3DqU7e%2FWE5DNQSDqLl%2FP&X-Amz-Signature=645b9be98cee86db4f0c1a18d53d77adc6e759a023697f39790d9d38f889b28e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EU4DRDR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJxRDAX97ys4eR59sGxQXY7WCnL6DfLWPXtFIMpyVCvAiBj42rw5%2FN%2BMl3WlQnFmW7rC%2BAOiBXFBrFfhuA4ozf4LCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMc5tH61iv6n28NCKtwDMfhe6UnpQPtb3Fgq5EZhGsGGCKePCoK2OGkeUyVKaphRU%2FJhrfy86blfsZ70VlAymFDazr8xtZyBbfFMUHNvx9uWieLbsKR4IRQFs0hzxmjK4Jy%2Fm6LJyq1TcD4W9DmPN2ismcXyIuwihxNrA%2B2ls%2F%2Bp84jDshCMFvVzXZSJxbNO6HuEMuuDZIzCUhb4JMhfvX75sUonqXgSUd%2F1RrtUM3DAYEc%2F5DFpjWUXIIo8YTJ%2BaKU%2FlGHg9rP5WUdyNstvyPYS1yTy9Dt5XZf0X28cBJkIAzYs6KCb0fpNUe18PY2FyfrqYVvW0CsMKt0KMlEUDbnLHFcm5dDuJJAUjfBsT743Ml9gCTIIion9IPaok3ejHePnmNR6RAJMgJJuO%2FhCLVs60HhSPtTl2vyeu794eMWubJLIjU74le%2B%2BejAjxQNA%2FiayPk2ZzINB6UcV5RxxUzTK9G7qS3wwTy%2FkRnywgFOY30txW2EawAfgvV4rsF048KcK%2FIRdf4cgB%2BETwBwHaObC104Y%2Fa7VlztoHNLcfIboIOtP4BLbYRaAh2NxGqw5LN5TA3WVwffbE5m0YmUfRNxzTSGgXZdTwj7f0IOdOl3aiT%2BZmeZRFdXGZ8pSGvKQiNCq8VnXrlhyqdIwrPL5ywY6pgFjkMJpRJyVf4URn8d6JFvusT9Sgh8R2vMYusLglT5tuA9tC%2Bw1VNRD1yWYoE%2FpCyg1Eyv9ipqM%2FZhUUa87Bzax4ILw%2FVEbikuU0KqzaHbr%2BbzlG97oPuuZ89Kwbc%2BWPKsQjWElBFgrS6TIe8XW7zCPyQdVtkPvjkLBZ2yrhe1RoCARSJzb%2FD%2FfUD8FJvWafMYsivQW9UOz3DqU7e%2FWE5DNQSDqLl%2FP&X-Amz-Signature=83dad099e509856dfbf376ad1d6a156e2a616f9c4e8464f7415e81159ebabb21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EU4DRDR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJxRDAX97ys4eR59sGxQXY7WCnL6DfLWPXtFIMpyVCvAiBj42rw5%2FN%2BMl3WlQnFmW7rC%2BAOiBXFBrFfhuA4ozf4LCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMc5tH61iv6n28NCKtwDMfhe6UnpQPtb3Fgq5EZhGsGGCKePCoK2OGkeUyVKaphRU%2FJhrfy86blfsZ70VlAymFDazr8xtZyBbfFMUHNvx9uWieLbsKR4IRQFs0hzxmjK4Jy%2Fm6LJyq1TcD4W9DmPN2ismcXyIuwihxNrA%2B2ls%2F%2Bp84jDshCMFvVzXZSJxbNO6HuEMuuDZIzCUhb4JMhfvX75sUonqXgSUd%2F1RrtUM3DAYEc%2F5DFpjWUXIIo8YTJ%2BaKU%2FlGHg9rP5WUdyNstvyPYS1yTy9Dt5XZf0X28cBJkIAzYs6KCb0fpNUe18PY2FyfrqYVvW0CsMKt0KMlEUDbnLHFcm5dDuJJAUjfBsT743Ml9gCTIIion9IPaok3ejHePnmNR6RAJMgJJuO%2FhCLVs60HhSPtTl2vyeu794eMWubJLIjU74le%2B%2BejAjxQNA%2FiayPk2ZzINB6UcV5RxxUzTK9G7qS3wwTy%2FkRnywgFOY30txW2EawAfgvV4rsF048KcK%2FIRdf4cgB%2BETwBwHaObC104Y%2Fa7VlztoHNLcfIboIOtP4BLbYRaAh2NxGqw5LN5TA3WVwffbE5m0YmUfRNxzTSGgXZdTwj7f0IOdOl3aiT%2BZmeZRFdXGZ8pSGvKQiNCq8VnXrlhyqdIwrPL5ywY6pgFjkMJpRJyVf4URn8d6JFvusT9Sgh8R2vMYusLglT5tuA9tC%2Bw1VNRD1yWYoE%2FpCyg1Eyv9ipqM%2FZhUUa87Bzax4ILw%2FVEbikuU0KqzaHbr%2BbzlG97oPuuZ89Kwbc%2BWPKsQjWElBFgrS6TIe8XW7zCPyQdVtkPvjkLBZ2yrhe1RoCARSJzb%2FD%2FfUD8FJvWafMYsivQW9UOz3DqU7e%2FWE5DNQSDqLl%2FP&X-Amz-Signature=bbac3b064a8f065f0209af3c9bc2b14dc8b29d074df218fcea54a25e452abe45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EU4DRDR%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJxRDAX97ys4eR59sGxQXY7WCnL6DfLWPXtFIMpyVCvAiBj42rw5%2FN%2BMl3WlQnFmW7rC%2BAOiBXFBrFfhuA4ozf4LCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKMc5tH61iv6n28NCKtwDMfhe6UnpQPtb3Fgq5EZhGsGGCKePCoK2OGkeUyVKaphRU%2FJhrfy86blfsZ70VlAymFDazr8xtZyBbfFMUHNvx9uWieLbsKR4IRQFs0hzxmjK4Jy%2Fm6LJyq1TcD4W9DmPN2ismcXyIuwihxNrA%2B2ls%2F%2Bp84jDshCMFvVzXZSJxbNO6HuEMuuDZIzCUhb4JMhfvX75sUonqXgSUd%2F1RrtUM3DAYEc%2F5DFpjWUXIIo8YTJ%2BaKU%2FlGHg9rP5WUdyNstvyPYS1yTy9Dt5XZf0X28cBJkIAzYs6KCb0fpNUe18PY2FyfrqYVvW0CsMKt0KMlEUDbnLHFcm5dDuJJAUjfBsT743Ml9gCTIIion9IPaok3ejHePnmNR6RAJMgJJuO%2FhCLVs60HhSPtTl2vyeu794eMWubJLIjU74le%2B%2BejAjxQNA%2FiayPk2ZzINB6UcV5RxxUzTK9G7qS3wwTy%2FkRnywgFOY30txW2EawAfgvV4rsF048KcK%2FIRdf4cgB%2BETwBwHaObC104Y%2Fa7VlztoHNLcfIboIOtP4BLbYRaAh2NxGqw5LN5TA3WVwffbE5m0YmUfRNxzTSGgXZdTwj7f0IOdOl3aiT%2BZmeZRFdXGZ8pSGvKQiNCq8VnXrlhyqdIwrPL5ywY6pgFjkMJpRJyVf4URn8d6JFvusT9Sgh8R2vMYusLglT5tuA9tC%2Bw1VNRD1yWYoE%2FpCyg1Eyv9ipqM%2FZhUUa87Bzax4ILw%2FVEbikuU0KqzaHbr%2BbzlG97oPuuZ89Kwbc%2BWPKsQjWElBFgrS6TIe8XW7zCPyQdVtkPvjkLBZ2yrhe1RoCARSJzb%2FD%2FfUD8FJvWafMYsivQW9UOz3DqU7e%2FWE5DNQSDqLl%2FP&X-Amz-Signature=fce95ca9e7c6f7281a0bf8c33cbd47dea5e31e38664e9ef13540d17ab1bcdf4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
