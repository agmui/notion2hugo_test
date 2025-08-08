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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA7LD3SE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDrIuzjbl45RhwjTcH%2FTA34s84qYZcja9daCm8Wbr7jUAiEA7aN252Zan%2BaQqS1Xad%2BkkdcV8KIZ5vBmNWz9RmQwpY4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2cj%2FQZwdWfd3r%2F2CrcA5bnep%2BirdMtYVsnFMFWfEJmec8S3MpHVsuN1Edz73Jg4nUdt4FRc3XldEbet3bG%2BUYcza5%2BxWf6NZCKPE6U0FFwUcGBP0WMFp1lUkLEyH91QerqQzFIVf%2F4BccmkZ3KrByW%2F7fx5Y%2FXWRWg1EFphCRfX8tAPhhqRxrGqJzW%2B%2BNyVLV%2F00Kb7FEtxuQNdrPbf5HPhBbqiV7YygCDBYa5QyyFsqoJh8PBAQFrvy8y%2B0UKU9gz5Vet%2Br%2FJG1psq8BQbCFrc%2FMLcpEwmMi%2F1xu1SlQYJXU9hNZGgKE%2Fz7bnlxi%2FxtUtfHuJwE%2BhnZw53a40rvt2STwn%2FXIr3JeJBJCtp6uYUe7%2BM8FsfKHl%2Bt8hoMxmcVgmpQU3%2FQSyXg28LKVXXZy%2Fljr5FWYMTUuJHi%2BWHBVD4FBLl%2FlGRP7R0cwSVRS5G%2FAz3cAtw6R%2FcGsRa8c%2FVPBzC4OFFV4vzWfcoZ%2FNmw032aMoIVzogoIX%2BLqK9J3wddvRr6jN8hpmUHG%2FgNyYhtLRtmbiYrhnrna%2FEGhku2j3QhrJN3oaiZ9IP%2FBAHmeJHroHZG5Q3o98LQKULL0clkmRk3qjJBwnpruKjQHURcv1DhxIxTWN1%2FSmuwXI407Ccx1T6Y8mK8xCNrvwMO%2FG1sQGOqUBlpaLr8gQg5OYg940YCq7WHVzUasR5xBsL5gHJrKYiEby7h1zApc3Aspc4W94M%2Bz8uBKYjb%2BzZuGwh%2Bps5nYMh7vVxsk2U8n7uvwX0jO4zM2it6vdCAW43Fd5qFha8Ip6WX3cCwzYsxy1dSGh8xKudcsS1yQpeeSdZbcEA8uJw4WMyISnCSV78044tYKQlbk2oK9K1V2XpQuYSYHMI46UP9JHfQ9K&X-Amz-Signature=1c5caf2c9c197013e9c6475d2e8aebebc0ba2afd53f584ddf4aca2c75ff55c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA7LD3SE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDrIuzjbl45RhwjTcH%2FTA34s84qYZcja9daCm8Wbr7jUAiEA7aN252Zan%2BaQqS1Xad%2BkkdcV8KIZ5vBmNWz9RmQwpY4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2cj%2FQZwdWfd3r%2F2CrcA5bnep%2BirdMtYVsnFMFWfEJmec8S3MpHVsuN1Edz73Jg4nUdt4FRc3XldEbet3bG%2BUYcza5%2BxWf6NZCKPE6U0FFwUcGBP0WMFp1lUkLEyH91QerqQzFIVf%2F4BccmkZ3KrByW%2F7fx5Y%2FXWRWg1EFphCRfX8tAPhhqRxrGqJzW%2B%2BNyVLV%2F00Kb7FEtxuQNdrPbf5HPhBbqiV7YygCDBYa5QyyFsqoJh8PBAQFrvy8y%2B0UKU9gz5Vet%2Br%2FJG1psq8BQbCFrc%2FMLcpEwmMi%2F1xu1SlQYJXU9hNZGgKE%2Fz7bnlxi%2FxtUtfHuJwE%2BhnZw53a40rvt2STwn%2FXIr3JeJBJCtp6uYUe7%2BM8FsfKHl%2Bt8hoMxmcVgmpQU3%2FQSyXg28LKVXXZy%2Fljr5FWYMTUuJHi%2BWHBVD4FBLl%2FlGRP7R0cwSVRS5G%2FAz3cAtw6R%2FcGsRa8c%2FVPBzC4OFFV4vzWfcoZ%2FNmw032aMoIVzogoIX%2BLqK9J3wddvRr6jN8hpmUHG%2FgNyYhtLRtmbiYrhnrna%2FEGhku2j3QhrJN3oaiZ9IP%2FBAHmeJHroHZG5Q3o98LQKULL0clkmRk3qjJBwnpruKjQHURcv1DhxIxTWN1%2FSmuwXI407Ccx1T6Y8mK8xCNrvwMO%2FG1sQGOqUBlpaLr8gQg5OYg940YCq7WHVzUasR5xBsL5gHJrKYiEby7h1zApc3Aspc4W94M%2Bz8uBKYjb%2BzZuGwh%2Bps5nYMh7vVxsk2U8n7uvwX0jO4zM2it6vdCAW43Fd5qFha8Ip6WX3cCwzYsxy1dSGh8xKudcsS1yQpeeSdZbcEA8uJw4WMyISnCSV78044tYKQlbk2oK9K1V2XpQuYSYHMI46UP9JHfQ9K&X-Amz-Signature=57d4cd054bbc8e33a51ff6f89744c02b48b3af93ffbdbe047fe0debe2ce9c075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA7LD3SE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDrIuzjbl45RhwjTcH%2FTA34s84qYZcja9daCm8Wbr7jUAiEA7aN252Zan%2BaQqS1Xad%2BkkdcV8KIZ5vBmNWz9RmQwpY4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2cj%2FQZwdWfd3r%2F2CrcA5bnep%2BirdMtYVsnFMFWfEJmec8S3MpHVsuN1Edz73Jg4nUdt4FRc3XldEbet3bG%2BUYcza5%2BxWf6NZCKPE6U0FFwUcGBP0WMFp1lUkLEyH91QerqQzFIVf%2F4BccmkZ3KrByW%2F7fx5Y%2FXWRWg1EFphCRfX8tAPhhqRxrGqJzW%2B%2BNyVLV%2F00Kb7FEtxuQNdrPbf5HPhBbqiV7YygCDBYa5QyyFsqoJh8PBAQFrvy8y%2B0UKU9gz5Vet%2Br%2FJG1psq8BQbCFrc%2FMLcpEwmMi%2F1xu1SlQYJXU9hNZGgKE%2Fz7bnlxi%2FxtUtfHuJwE%2BhnZw53a40rvt2STwn%2FXIr3JeJBJCtp6uYUe7%2BM8FsfKHl%2Bt8hoMxmcVgmpQU3%2FQSyXg28LKVXXZy%2Fljr5FWYMTUuJHi%2BWHBVD4FBLl%2FlGRP7R0cwSVRS5G%2FAz3cAtw6R%2FcGsRa8c%2FVPBzC4OFFV4vzWfcoZ%2FNmw032aMoIVzogoIX%2BLqK9J3wddvRr6jN8hpmUHG%2FgNyYhtLRtmbiYrhnrna%2FEGhku2j3QhrJN3oaiZ9IP%2FBAHmeJHroHZG5Q3o98LQKULL0clkmRk3qjJBwnpruKjQHURcv1DhxIxTWN1%2FSmuwXI407Ccx1T6Y8mK8xCNrvwMO%2FG1sQGOqUBlpaLr8gQg5OYg940YCq7WHVzUasR5xBsL5gHJrKYiEby7h1zApc3Aspc4W94M%2Bz8uBKYjb%2BzZuGwh%2Bps5nYMh7vVxsk2U8n7uvwX0jO4zM2it6vdCAW43Fd5qFha8Ip6WX3cCwzYsxy1dSGh8xKudcsS1yQpeeSdZbcEA8uJw4WMyISnCSV78044tYKQlbk2oK9K1V2XpQuYSYHMI46UP9JHfQ9K&X-Amz-Signature=83e215093338ed30a5060ad11ef8e210a295b9f492b080babf096efcdff66e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA7LD3SE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDrIuzjbl45RhwjTcH%2FTA34s84qYZcja9daCm8Wbr7jUAiEA7aN252Zan%2BaQqS1Xad%2BkkdcV8KIZ5vBmNWz9RmQwpY4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2cj%2FQZwdWfd3r%2F2CrcA5bnep%2BirdMtYVsnFMFWfEJmec8S3MpHVsuN1Edz73Jg4nUdt4FRc3XldEbet3bG%2BUYcza5%2BxWf6NZCKPE6U0FFwUcGBP0WMFp1lUkLEyH91QerqQzFIVf%2F4BccmkZ3KrByW%2F7fx5Y%2FXWRWg1EFphCRfX8tAPhhqRxrGqJzW%2B%2BNyVLV%2F00Kb7FEtxuQNdrPbf5HPhBbqiV7YygCDBYa5QyyFsqoJh8PBAQFrvy8y%2B0UKU9gz5Vet%2Br%2FJG1psq8BQbCFrc%2FMLcpEwmMi%2F1xu1SlQYJXU9hNZGgKE%2Fz7bnlxi%2FxtUtfHuJwE%2BhnZw53a40rvt2STwn%2FXIr3JeJBJCtp6uYUe7%2BM8FsfKHl%2Bt8hoMxmcVgmpQU3%2FQSyXg28LKVXXZy%2Fljr5FWYMTUuJHi%2BWHBVD4FBLl%2FlGRP7R0cwSVRS5G%2FAz3cAtw6R%2FcGsRa8c%2FVPBzC4OFFV4vzWfcoZ%2FNmw032aMoIVzogoIX%2BLqK9J3wddvRr6jN8hpmUHG%2FgNyYhtLRtmbiYrhnrna%2FEGhku2j3QhrJN3oaiZ9IP%2FBAHmeJHroHZG5Q3o98LQKULL0clkmRk3qjJBwnpruKjQHURcv1DhxIxTWN1%2FSmuwXI407Ccx1T6Y8mK8xCNrvwMO%2FG1sQGOqUBlpaLr8gQg5OYg940YCq7WHVzUasR5xBsL5gHJrKYiEby7h1zApc3Aspc4W94M%2Bz8uBKYjb%2BzZuGwh%2Bps5nYMh7vVxsk2U8n7uvwX0jO4zM2it6vdCAW43Fd5qFha8Ip6WX3cCwzYsxy1dSGh8xKudcsS1yQpeeSdZbcEA8uJw4WMyISnCSV78044tYKQlbk2oK9K1V2XpQuYSYHMI46UP9JHfQ9K&X-Amz-Signature=b75a5a00694e25fc04e14574f78629cc93ce8f43c20ef8b9ade31c4d062cd788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA7LD3SE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDrIuzjbl45RhwjTcH%2FTA34s84qYZcja9daCm8Wbr7jUAiEA7aN252Zan%2BaQqS1Xad%2BkkdcV8KIZ5vBmNWz9RmQwpY4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2cj%2FQZwdWfd3r%2F2CrcA5bnep%2BirdMtYVsnFMFWfEJmec8S3MpHVsuN1Edz73Jg4nUdt4FRc3XldEbet3bG%2BUYcza5%2BxWf6NZCKPE6U0FFwUcGBP0WMFp1lUkLEyH91QerqQzFIVf%2F4BccmkZ3KrByW%2F7fx5Y%2FXWRWg1EFphCRfX8tAPhhqRxrGqJzW%2B%2BNyVLV%2F00Kb7FEtxuQNdrPbf5HPhBbqiV7YygCDBYa5QyyFsqoJh8PBAQFrvy8y%2B0UKU9gz5Vet%2Br%2FJG1psq8BQbCFrc%2FMLcpEwmMi%2F1xu1SlQYJXU9hNZGgKE%2Fz7bnlxi%2FxtUtfHuJwE%2BhnZw53a40rvt2STwn%2FXIr3JeJBJCtp6uYUe7%2BM8FsfKHl%2Bt8hoMxmcVgmpQU3%2FQSyXg28LKVXXZy%2Fljr5FWYMTUuJHi%2BWHBVD4FBLl%2FlGRP7R0cwSVRS5G%2FAz3cAtw6R%2FcGsRa8c%2FVPBzC4OFFV4vzWfcoZ%2FNmw032aMoIVzogoIX%2BLqK9J3wddvRr6jN8hpmUHG%2FgNyYhtLRtmbiYrhnrna%2FEGhku2j3QhrJN3oaiZ9IP%2FBAHmeJHroHZG5Q3o98LQKULL0clkmRk3qjJBwnpruKjQHURcv1DhxIxTWN1%2FSmuwXI407Ccx1T6Y8mK8xCNrvwMO%2FG1sQGOqUBlpaLr8gQg5OYg940YCq7WHVzUasR5xBsL5gHJrKYiEby7h1zApc3Aspc4W94M%2Bz8uBKYjb%2BzZuGwh%2Bps5nYMh7vVxsk2U8n7uvwX0jO4zM2it6vdCAW43Fd5qFha8Ip6WX3cCwzYsxy1dSGh8xKudcsS1yQpeeSdZbcEA8uJw4WMyISnCSV78044tYKQlbk2oK9K1V2XpQuYSYHMI46UP9JHfQ9K&X-Amz-Signature=629808fb747bb364ae0df40dac3ae584d8179b53a6410a8b398a40e94d3794f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA7LD3SE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDrIuzjbl45RhwjTcH%2FTA34s84qYZcja9daCm8Wbr7jUAiEA7aN252Zan%2BaQqS1Xad%2BkkdcV8KIZ5vBmNWz9RmQwpY4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2cj%2FQZwdWfd3r%2F2CrcA5bnep%2BirdMtYVsnFMFWfEJmec8S3MpHVsuN1Edz73Jg4nUdt4FRc3XldEbet3bG%2BUYcza5%2BxWf6NZCKPE6U0FFwUcGBP0WMFp1lUkLEyH91QerqQzFIVf%2F4BccmkZ3KrByW%2F7fx5Y%2FXWRWg1EFphCRfX8tAPhhqRxrGqJzW%2B%2BNyVLV%2F00Kb7FEtxuQNdrPbf5HPhBbqiV7YygCDBYa5QyyFsqoJh8PBAQFrvy8y%2B0UKU9gz5Vet%2Br%2FJG1psq8BQbCFrc%2FMLcpEwmMi%2F1xu1SlQYJXU9hNZGgKE%2Fz7bnlxi%2FxtUtfHuJwE%2BhnZw53a40rvt2STwn%2FXIr3JeJBJCtp6uYUe7%2BM8FsfKHl%2Bt8hoMxmcVgmpQU3%2FQSyXg28LKVXXZy%2Fljr5FWYMTUuJHi%2BWHBVD4FBLl%2FlGRP7R0cwSVRS5G%2FAz3cAtw6R%2FcGsRa8c%2FVPBzC4OFFV4vzWfcoZ%2FNmw032aMoIVzogoIX%2BLqK9J3wddvRr6jN8hpmUHG%2FgNyYhtLRtmbiYrhnrna%2FEGhku2j3QhrJN3oaiZ9IP%2FBAHmeJHroHZG5Q3o98LQKULL0clkmRk3qjJBwnpruKjQHURcv1DhxIxTWN1%2FSmuwXI407Ccx1T6Y8mK8xCNrvwMO%2FG1sQGOqUBlpaLr8gQg5OYg940YCq7WHVzUasR5xBsL5gHJrKYiEby7h1zApc3Aspc4W94M%2Bz8uBKYjb%2BzZuGwh%2Bps5nYMh7vVxsk2U8n7uvwX0jO4zM2it6vdCAW43Fd5qFha8Ip6WX3cCwzYsxy1dSGh8xKudcsS1yQpeeSdZbcEA8uJw4WMyISnCSV78044tYKQlbk2oK9K1V2XpQuYSYHMI46UP9JHfQ9K&X-Amz-Signature=3c540c0d237cf3c65117d4d9f327a9c671c80438014d4726f797c31ff8848ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA7LD3SE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDrIuzjbl45RhwjTcH%2FTA34s84qYZcja9daCm8Wbr7jUAiEA7aN252Zan%2BaQqS1Xad%2BkkdcV8KIZ5vBmNWz9RmQwpY4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2cj%2FQZwdWfd3r%2F2CrcA5bnep%2BirdMtYVsnFMFWfEJmec8S3MpHVsuN1Edz73Jg4nUdt4FRc3XldEbet3bG%2BUYcza5%2BxWf6NZCKPE6U0FFwUcGBP0WMFp1lUkLEyH91QerqQzFIVf%2F4BccmkZ3KrByW%2F7fx5Y%2FXWRWg1EFphCRfX8tAPhhqRxrGqJzW%2B%2BNyVLV%2F00Kb7FEtxuQNdrPbf5HPhBbqiV7YygCDBYa5QyyFsqoJh8PBAQFrvy8y%2B0UKU9gz5Vet%2Br%2FJG1psq8BQbCFrc%2FMLcpEwmMi%2F1xu1SlQYJXU9hNZGgKE%2Fz7bnlxi%2FxtUtfHuJwE%2BhnZw53a40rvt2STwn%2FXIr3JeJBJCtp6uYUe7%2BM8FsfKHl%2Bt8hoMxmcVgmpQU3%2FQSyXg28LKVXXZy%2Fljr5FWYMTUuJHi%2BWHBVD4FBLl%2FlGRP7R0cwSVRS5G%2FAz3cAtw6R%2FcGsRa8c%2FVPBzC4OFFV4vzWfcoZ%2FNmw032aMoIVzogoIX%2BLqK9J3wddvRr6jN8hpmUHG%2FgNyYhtLRtmbiYrhnrna%2FEGhku2j3QhrJN3oaiZ9IP%2FBAHmeJHroHZG5Q3o98LQKULL0clkmRk3qjJBwnpruKjQHURcv1DhxIxTWN1%2FSmuwXI407Ccx1T6Y8mK8xCNrvwMO%2FG1sQGOqUBlpaLr8gQg5OYg940YCq7WHVzUasR5xBsL5gHJrKYiEby7h1zApc3Aspc4W94M%2Bz8uBKYjb%2BzZuGwh%2Bps5nYMh7vVxsk2U8n7uvwX0jO4zM2it6vdCAW43Fd5qFha8Ip6WX3cCwzYsxy1dSGh8xKudcsS1yQpeeSdZbcEA8uJw4WMyISnCSV78044tYKQlbk2oK9K1V2XpQuYSYHMI46UP9JHfQ9K&X-Amz-Signature=74d74bffb8679192a9317b5f871abd346d7fb0b918d2c69fb32159a362646438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA7LD3SE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDrIuzjbl45RhwjTcH%2FTA34s84qYZcja9daCm8Wbr7jUAiEA7aN252Zan%2BaQqS1Xad%2BkkdcV8KIZ5vBmNWz9RmQwpY4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2cj%2FQZwdWfd3r%2F2CrcA5bnep%2BirdMtYVsnFMFWfEJmec8S3MpHVsuN1Edz73Jg4nUdt4FRc3XldEbet3bG%2BUYcza5%2BxWf6NZCKPE6U0FFwUcGBP0WMFp1lUkLEyH91QerqQzFIVf%2F4BccmkZ3KrByW%2F7fx5Y%2FXWRWg1EFphCRfX8tAPhhqRxrGqJzW%2B%2BNyVLV%2F00Kb7FEtxuQNdrPbf5HPhBbqiV7YygCDBYa5QyyFsqoJh8PBAQFrvy8y%2B0UKU9gz5Vet%2Br%2FJG1psq8BQbCFrc%2FMLcpEwmMi%2F1xu1SlQYJXU9hNZGgKE%2Fz7bnlxi%2FxtUtfHuJwE%2BhnZw53a40rvt2STwn%2FXIr3JeJBJCtp6uYUe7%2BM8FsfKHl%2Bt8hoMxmcVgmpQU3%2FQSyXg28LKVXXZy%2Fljr5FWYMTUuJHi%2BWHBVD4FBLl%2FlGRP7R0cwSVRS5G%2FAz3cAtw6R%2FcGsRa8c%2FVPBzC4OFFV4vzWfcoZ%2FNmw032aMoIVzogoIX%2BLqK9J3wddvRr6jN8hpmUHG%2FgNyYhtLRtmbiYrhnrna%2FEGhku2j3QhrJN3oaiZ9IP%2FBAHmeJHroHZG5Q3o98LQKULL0clkmRk3qjJBwnpruKjQHURcv1DhxIxTWN1%2FSmuwXI407Ccx1T6Y8mK8xCNrvwMO%2FG1sQGOqUBlpaLr8gQg5OYg940YCq7WHVzUasR5xBsL5gHJrKYiEby7h1zApc3Aspc4W94M%2Bz8uBKYjb%2BzZuGwh%2Bps5nYMh7vVxsk2U8n7uvwX0jO4zM2it6vdCAW43Fd5qFha8Ip6WX3cCwzYsxy1dSGh8xKudcsS1yQpeeSdZbcEA8uJw4WMyISnCSV78044tYKQlbk2oK9K1V2XpQuYSYHMI46UP9JHfQ9K&X-Amz-Signature=dc85f4c9303f596fd583e2b159ac2bc780d9a096e495f23fd1a108653596c639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA7LD3SE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDrIuzjbl45RhwjTcH%2FTA34s84qYZcja9daCm8Wbr7jUAiEA7aN252Zan%2BaQqS1Xad%2BkkdcV8KIZ5vBmNWz9RmQwpY4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2cj%2FQZwdWfd3r%2F2CrcA5bnep%2BirdMtYVsnFMFWfEJmec8S3MpHVsuN1Edz73Jg4nUdt4FRc3XldEbet3bG%2BUYcza5%2BxWf6NZCKPE6U0FFwUcGBP0WMFp1lUkLEyH91QerqQzFIVf%2F4BccmkZ3KrByW%2F7fx5Y%2FXWRWg1EFphCRfX8tAPhhqRxrGqJzW%2B%2BNyVLV%2F00Kb7FEtxuQNdrPbf5HPhBbqiV7YygCDBYa5QyyFsqoJh8PBAQFrvy8y%2B0UKU9gz5Vet%2Br%2FJG1psq8BQbCFrc%2FMLcpEwmMi%2F1xu1SlQYJXU9hNZGgKE%2Fz7bnlxi%2FxtUtfHuJwE%2BhnZw53a40rvt2STwn%2FXIr3JeJBJCtp6uYUe7%2BM8FsfKHl%2Bt8hoMxmcVgmpQU3%2FQSyXg28LKVXXZy%2Fljr5FWYMTUuJHi%2BWHBVD4FBLl%2FlGRP7R0cwSVRS5G%2FAz3cAtw6R%2FcGsRa8c%2FVPBzC4OFFV4vzWfcoZ%2FNmw032aMoIVzogoIX%2BLqK9J3wddvRr6jN8hpmUHG%2FgNyYhtLRtmbiYrhnrna%2FEGhku2j3QhrJN3oaiZ9IP%2FBAHmeJHroHZG5Q3o98LQKULL0clkmRk3qjJBwnpruKjQHURcv1DhxIxTWN1%2FSmuwXI407Ccx1T6Y8mK8xCNrvwMO%2FG1sQGOqUBlpaLr8gQg5OYg940YCq7WHVzUasR5xBsL5gHJrKYiEby7h1zApc3Aspc4W94M%2Bz8uBKYjb%2BzZuGwh%2Bps5nYMh7vVxsk2U8n7uvwX0jO4zM2it6vdCAW43Fd5qFha8Ip6WX3cCwzYsxy1dSGh8xKudcsS1yQpeeSdZbcEA8uJw4WMyISnCSV78044tYKQlbk2oK9K1V2XpQuYSYHMI46UP9JHfQ9K&X-Amz-Signature=9a36271ceba68a64f742a945a7d843f8bfa34e5933ebf5bc8eaba8223f299da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA7LD3SE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDrIuzjbl45RhwjTcH%2FTA34s84qYZcja9daCm8Wbr7jUAiEA7aN252Zan%2BaQqS1Xad%2BkkdcV8KIZ5vBmNWz9RmQwpY4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2cj%2FQZwdWfd3r%2F2CrcA5bnep%2BirdMtYVsnFMFWfEJmec8S3MpHVsuN1Edz73Jg4nUdt4FRc3XldEbet3bG%2BUYcza5%2BxWf6NZCKPE6U0FFwUcGBP0WMFp1lUkLEyH91QerqQzFIVf%2F4BccmkZ3KrByW%2F7fx5Y%2FXWRWg1EFphCRfX8tAPhhqRxrGqJzW%2B%2BNyVLV%2F00Kb7FEtxuQNdrPbf5HPhBbqiV7YygCDBYa5QyyFsqoJh8PBAQFrvy8y%2B0UKU9gz5Vet%2Br%2FJG1psq8BQbCFrc%2FMLcpEwmMi%2F1xu1SlQYJXU9hNZGgKE%2Fz7bnlxi%2FxtUtfHuJwE%2BhnZw53a40rvt2STwn%2FXIr3JeJBJCtp6uYUe7%2BM8FsfKHl%2Bt8hoMxmcVgmpQU3%2FQSyXg28LKVXXZy%2Fljr5FWYMTUuJHi%2BWHBVD4FBLl%2FlGRP7R0cwSVRS5G%2FAz3cAtw6R%2FcGsRa8c%2FVPBzC4OFFV4vzWfcoZ%2FNmw032aMoIVzogoIX%2BLqK9J3wddvRr6jN8hpmUHG%2FgNyYhtLRtmbiYrhnrna%2FEGhku2j3QhrJN3oaiZ9IP%2FBAHmeJHroHZG5Q3o98LQKULL0clkmRk3qjJBwnpruKjQHURcv1DhxIxTWN1%2FSmuwXI407Ccx1T6Y8mK8xCNrvwMO%2FG1sQGOqUBlpaLr8gQg5OYg940YCq7WHVzUasR5xBsL5gHJrKYiEby7h1zApc3Aspc4W94M%2Bz8uBKYjb%2BzZuGwh%2Bps5nYMh7vVxsk2U8n7uvwX0jO4zM2it6vdCAW43Fd5qFha8Ip6WX3cCwzYsxy1dSGh8xKudcsS1yQpeeSdZbcEA8uJw4WMyISnCSV78044tYKQlbk2oK9K1V2XpQuYSYHMI46UP9JHfQ9K&X-Amz-Signature=146bc9fe541e18f78600dd8fc5c08115338c1f6ebee652d770d77dd867d57992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA7LD3SE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDrIuzjbl45RhwjTcH%2FTA34s84qYZcja9daCm8Wbr7jUAiEA7aN252Zan%2BaQqS1Xad%2BkkdcV8KIZ5vBmNWz9RmQwpY4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2cj%2FQZwdWfd3r%2F2CrcA5bnep%2BirdMtYVsnFMFWfEJmec8S3MpHVsuN1Edz73Jg4nUdt4FRc3XldEbet3bG%2BUYcza5%2BxWf6NZCKPE6U0FFwUcGBP0WMFp1lUkLEyH91QerqQzFIVf%2F4BccmkZ3KrByW%2F7fx5Y%2FXWRWg1EFphCRfX8tAPhhqRxrGqJzW%2B%2BNyVLV%2F00Kb7FEtxuQNdrPbf5HPhBbqiV7YygCDBYa5QyyFsqoJh8PBAQFrvy8y%2B0UKU9gz5Vet%2Br%2FJG1psq8BQbCFrc%2FMLcpEwmMi%2F1xu1SlQYJXU9hNZGgKE%2Fz7bnlxi%2FxtUtfHuJwE%2BhnZw53a40rvt2STwn%2FXIr3JeJBJCtp6uYUe7%2BM8FsfKHl%2Bt8hoMxmcVgmpQU3%2FQSyXg28LKVXXZy%2Fljr5FWYMTUuJHi%2BWHBVD4FBLl%2FlGRP7R0cwSVRS5G%2FAz3cAtw6R%2FcGsRa8c%2FVPBzC4OFFV4vzWfcoZ%2FNmw032aMoIVzogoIX%2BLqK9J3wddvRr6jN8hpmUHG%2FgNyYhtLRtmbiYrhnrna%2FEGhku2j3QhrJN3oaiZ9IP%2FBAHmeJHroHZG5Q3o98LQKULL0clkmRk3qjJBwnpruKjQHURcv1DhxIxTWN1%2FSmuwXI407Ccx1T6Y8mK8xCNrvwMO%2FG1sQGOqUBlpaLr8gQg5OYg940YCq7WHVzUasR5xBsL5gHJrKYiEby7h1zApc3Aspc4W94M%2Bz8uBKYjb%2BzZuGwh%2Bps5nYMh7vVxsk2U8n7uvwX0jO4zM2it6vdCAW43Fd5qFha8Ip6WX3cCwzYsxy1dSGh8xKudcsS1yQpeeSdZbcEA8uJw4WMyISnCSV78044tYKQlbk2oK9K1V2XpQuYSYHMI46UP9JHfQ9K&X-Amz-Signature=8ddf0ee11b899abc32fd55a83f8619d248547296f2197bfd038efc48ff63ec17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA7LD3SE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDrIuzjbl45RhwjTcH%2FTA34s84qYZcja9daCm8Wbr7jUAiEA7aN252Zan%2BaQqS1Xad%2BkkdcV8KIZ5vBmNWz9RmQwpY4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2cj%2FQZwdWfd3r%2F2CrcA5bnep%2BirdMtYVsnFMFWfEJmec8S3MpHVsuN1Edz73Jg4nUdt4FRc3XldEbet3bG%2BUYcza5%2BxWf6NZCKPE6U0FFwUcGBP0WMFp1lUkLEyH91QerqQzFIVf%2F4BccmkZ3KrByW%2F7fx5Y%2FXWRWg1EFphCRfX8tAPhhqRxrGqJzW%2B%2BNyVLV%2F00Kb7FEtxuQNdrPbf5HPhBbqiV7YygCDBYa5QyyFsqoJh8PBAQFrvy8y%2B0UKU9gz5Vet%2Br%2FJG1psq8BQbCFrc%2FMLcpEwmMi%2F1xu1SlQYJXU9hNZGgKE%2Fz7bnlxi%2FxtUtfHuJwE%2BhnZw53a40rvt2STwn%2FXIr3JeJBJCtp6uYUe7%2BM8FsfKHl%2Bt8hoMxmcVgmpQU3%2FQSyXg28LKVXXZy%2Fljr5FWYMTUuJHi%2BWHBVD4FBLl%2FlGRP7R0cwSVRS5G%2FAz3cAtw6R%2FcGsRa8c%2FVPBzC4OFFV4vzWfcoZ%2FNmw032aMoIVzogoIX%2BLqK9J3wddvRr6jN8hpmUHG%2FgNyYhtLRtmbiYrhnrna%2FEGhku2j3QhrJN3oaiZ9IP%2FBAHmeJHroHZG5Q3o98LQKULL0clkmRk3qjJBwnpruKjQHURcv1DhxIxTWN1%2FSmuwXI407Ccx1T6Y8mK8xCNrvwMO%2FG1sQGOqUBlpaLr8gQg5OYg940YCq7WHVzUasR5xBsL5gHJrKYiEby7h1zApc3Aspc4W94M%2Bz8uBKYjb%2BzZuGwh%2Bps5nYMh7vVxsk2U8n7uvwX0jO4zM2it6vdCAW43Fd5qFha8Ip6WX3cCwzYsxy1dSGh8xKudcsS1yQpeeSdZbcEA8uJw4WMyISnCSV78044tYKQlbk2oK9K1V2XpQuYSYHMI46UP9JHfQ9K&X-Amz-Signature=04979ea3202de3137c925b8fcb2aaf8e52382186c208012af69b24a106a445a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA7LD3SE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDrIuzjbl45RhwjTcH%2FTA34s84qYZcja9daCm8Wbr7jUAiEA7aN252Zan%2BaQqS1Xad%2BkkdcV8KIZ5vBmNWz9RmQwpY4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2cj%2FQZwdWfd3r%2F2CrcA5bnep%2BirdMtYVsnFMFWfEJmec8S3MpHVsuN1Edz73Jg4nUdt4FRc3XldEbet3bG%2BUYcza5%2BxWf6NZCKPE6U0FFwUcGBP0WMFp1lUkLEyH91QerqQzFIVf%2F4BccmkZ3KrByW%2F7fx5Y%2FXWRWg1EFphCRfX8tAPhhqRxrGqJzW%2B%2BNyVLV%2F00Kb7FEtxuQNdrPbf5HPhBbqiV7YygCDBYa5QyyFsqoJh8PBAQFrvy8y%2B0UKU9gz5Vet%2Br%2FJG1psq8BQbCFrc%2FMLcpEwmMi%2F1xu1SlQYJXU9hNZGgKE%2Fz7bnlxi%2FxtUtfHuJwE%2BhnZw53a40rvt2STwn%2FXIr3JeJBJCtp6uYUe7%2BM8FsfKHl%2Bt8hoMxmcVgmpQU3%2FQSyXg28LKVXXZy%2Fljr5FWYMTUuJHi%2BWHBVD4FBLl%2FlGRP7R0cwSVRS5G%2FAz3cAtw6R%2FcGsRa8c%2FVPBzC4OFFV4vzWfcoZ%2FNmw032aMoIVzogoIX%2BLqK9J3wddvRr6jN8hpmUHG%2FgNyYhtLRtmbiYrhnrna%2FEGhku2j3QhrJN3oaiZ9IP%2FBAHmeJHroHZG5Q3o98LQKULL0clkmRk3qjJBwnpruKjQHURcv1DhxIxTWN1%2FSmuwXI407Ccx1T6Y8mK8xCNrvwMO%2FG1sQGOqUBlpaLr8gQg5OYg940YCq7WHVzUasR5xBsL5gHJrKYiEby7h1zApc3Aspc4W94M%2Bz8uBKYjb%2BzZuGwh%2Bps5nYMh7vVxsk2U8n7uvwX0jO4zM2it6vdCAW43Fd5qFha8Ip6WX3cCwzYsxy1dSGh8xKudcsS1yQpeeSdZbcEA8uJw4WMyISnCSV78044tYKQlbk2oK9K1V2XpQuYSYHMI46UP9JHfQ9K&X-Amz-Signature=647c48ec9c4f0825382919a20d010f4bd0012a378516cb000a29c985e11745ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
