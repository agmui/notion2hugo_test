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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWWLHAE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu1p2noCdyNIeprVrefOBfaobO7ipvWFEb9gIsnxqEFAiBl44g2I5NKz%2Fy6W5clrpnWolGpg0iTsu1h6gqci2JDMSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpHs1tdDR%2F6qAGXZpKtwDCKtq%2FmgjPlrpg3Io4DDOVw7dXzplIYo4zXtCUlxnHtASDo6t6L71D49XbTTIwqpjNmWCCFbzMEsJ8rR590lqEh%2ByzyRpXz8mPlk8C1%2FlQl3gk7hQftyzzeEH%2FFnhpO3KJ81Z2RvF7tJ4rnUFDzHn9yihNzyZ7RCeJi8%2FWapRFRwz2%2FVHzPE7P6ozPyQblHzpP2XXRFoK%2BL1HePzCZHeCmzF16ohs16LvB8xdY1XkUnaaWQZBGYFLX28DPCXxLFqDawrfb%2F6uCcVwB5H7S2ke3k0upsy0XqvBqfqSej19fQ%2B22i8ss0xI7o%2Fj3Z0xT39xcDmeAR6%2BqNAMKzqcNdu35xydvQsKdUSYXpefFJdN%2FKPwXL1CJVeAOiAIXAh6X7AaE%2FIJEMj0TIu6C1%2BOc4a1gyrxJko38kL3U9mBCp%2FYKa497EPPQ2WByajkEibWA4T0XMpEAbN9wo9Lqaq7cdtT9xTEFwIhmvuuHjEgE3auPFhW9hiwJqAwz4XZuFNutDbk3oVIwq5C8t3qBRS88oH9pHohql1X3R63ld6FMsHhd8VqS6ZZbh2oQGN5r5BfXmJeQYeffN%2BCyeZH%2F3Uj%2F0AAYsQraGVT10V9vhMrF3L8eh5%2Fd%2BcqWwsbivmvswQwubupxAY6pgEf1%2BpV6f9H9ARPJ%2FYOSgDDgK3LDjq8oKujKEHA05liJQmgMOmyn%2FgHGxtmVUL4okP9kX%2BvjMIYeEnra6%2BuEFS%2Fk%2FHShhl8QnG3QEESHTKn9Wl3KsYEwpl44XNZfE5dgIt1tGepp88XnAnjyIwTWqtQ72feUBiYKMQ9X2nF5fUgYgPUmKbIR5s2XpIQf9X61k8fhgHugsKX6OZP1jp5H9kYh5IZxrvK&X-Amz-Signature=05ac0770bd5cf87b2af71ffba8534ffe38cc7784b9927890ad7d3b387816e562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWWLHAE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu1p2noCdyNIeprVrefOBfaobO7ipvWFEb9gIsnxqEFAiBl44g2I5NKz%2Fy6W5clrpnWolGpg0iTsu1h6gqci2JDMSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpHs1tdDR%2F6qAGXZpKtwDCKtq%2FmgjPlrpg3Io4DDOVw7dXzplIYo4zXtCUlxnHtASDo6t6L71D49XbTTIwqpjNmWCCFbzMEsJ8rR590lqEh%2ByzyRpXz8mPlk8C1%2FlQl3gk7hQftyzzeEH%2FFnhpO3KJ81Z2RvF7tJ4rnUFDzHn9yihNzyZ7RCeJi8%2FWapRFRwz2%2FVHzPE7P6ozPyQblHzpP2XXRFoK%2BL1HePzCZHeCmzF16ohs16LvB8xdY1XkUnaaWQZBGYFLX28DPCXxLFqDawrfb%2F6uCcVwB5H7S2ke3k0upsy0XqvBqfqSej19fQ%2B22i8ss0xI7o%2Fj3Z0xT39xcDmeAR6%2BqNAMKzqcNdu35xydvQsKdUSYXpefFJdN%2FKPwXL1CJVeAOiAIXAh6X7AaE%2FIJEMj0TIu6C1%2BOc4a1gyrxJko38kL3U9mBCp%2FYKa497EPPQ2WByajkEibWA4T0XMpEAbN9wo9Lqaq7cdtT9xTEFwIhmvuuHjEgE3auPFhW9hiwJqAwz4XZuFNutDbk3oVIwq5C8t3qBRS88oH9pHohql1X3R63ld6FMsHhd8VqS6ZZbh2oQGN5r5BfXmJeQYeffN%2BCyeZH%2F3Uj%2F0AAYsQraGVT10V9vhMrF3L8eh5%2Fd%2BcqWwsbivmvswQwubupxAY6pgEf1%2BpV6f9H9ARPJ%2FYOSgDDgK3LDjq8oKujKEHA05liJQmgMOmyn%2FgHGxtmVUL4okP9kX%2BvjMIYeEnra6%2BuEFS%2Fk%2FHShhl8QnG3QEESHTKn9Wl3KsYEwpl44XNZfE5dgIt1tGepp88XnAnjyIwTWqtQ72feUBiYKMQ9X2nF5fUgYgPUmKbIR5s2XpIQf9X61k8fhgHugsKX6OZP1jp5H9kYh5IZxrvK&X-Amz-Signature=21f79f6b6e310caccdaad7f69c16cb02ba1f908e5a2c2cfae8113526d01e64b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWWLHAE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu1p2noCdyNIeprVrefOBfaobO7ipvWFEb9gIsnxqEFAiBl44g2I5NKz%2Fy6W5clrpnWolGpg0iTsu1h6gqci2JDMSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpHs1tdDR%2F6qAGXZpKtwDCKtq%2FmgjPlrpg3Io4DDOVw7dXzplIYo4zXtCUlxnHtASDo6t6L71D49XbTTIwqpjNmWCCFbzMEsJ8rR590lqEh%2ByzyRpXz8mPlk8C1%2FlQl3gk7hQftyzzeEH%2FFnhpO3KJ81Z2RvF7tJ4rnUFDzHn9yihNzyZ7RCeJi8%2FWapRFRwz2%2FVHzPE7P6ozPyQblHzpP2XXRFoK%2BL1HePzCZHeCmzF16ohs16LvB8xdY1XkUnaaWQZBGYFLX28DPCXxLFqDawrfb%2F6uCcVwB5H7S2ke3k0upsy0XqvBqfqSej19fQ%2B22i8ss0xI7o%2Fj3Z0xT39xcDmeAR6%2BqNAMKzqcNdu35xydvQsKdUSYXpefFJdN%2FKPwXL1CJVeAOiAIXAh6X7AaE%2FIJEMj0TIu6C1%2BOc4a1gyrxJko38kL3U9mBCp%2FYKa497EPPQ2WByajkEibWA4T0XMpEAbN9wo9Lqaq7cdtT9xTEFwIhmvuuHjEgE3auPFhW9hiwJqAwz4XZuFNutDbk3oVIwq5C8t3qBRS88oH9pHohql1X3R63ld6FMsHhd8VqS6ZZbh2oQGN5r5BfXmJeQYeffN%2BCyeZH%2F3Uj%2F0AAYsQraGVT10V9vhMrF3L8eh5%2Fd%2BcqWwsbivmvswQwubupxAY6pgEf1%2BpV6f9H9ARPJ%2FYOSgDDgK3LDjq8oKujKEHA05liJQmgMOmyn%2FgHGxtmVUL4okP9kX%2BvjMIYeEnra6%2BuEFS%2Fk%2FHShhl8QnG3QEESHTKn9Wl3KsYEwpl44XNZfE5dgIt1tGepp88XnAnjyIwTWqtQ72feUBiYKMQ9X2nF5fUgYgPUmKbIR5s2XpIQf9X61k8fhgHugsKX6OZP1jp5H9kYh5IZxrvK&X-Amz-Signature=c46eace4400fae61932cf68adcde50b28e1fa5a7f47b6d9d0b9415d592048000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWWLHAE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu1p2noCdyNIeprVrefOBfaobO7ipvWFEb9gIsnxqEFAiBl44g2I5NKz%2Fy6W5clrpnWolGpg0iTsu1h6gqci2JDMSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpHs1tdDR%2F6qAGXZpKtwDCKtq%2FmgjPlrpg3Io4DDOVw7dXzplIYo4zXtCUlxnHtASDo6t6L71D49XbTTIwqpjNmWCCFbzMEsJ8rR590lqEh%2ByzyRpXz8mPlk8C1%2FlQl3gk7hQftyzzeEH%2FFnhpO3KJ81Z2RvF7tJ4rnUFDzHn9yihNzyZ7RCeJi8%2FWapRFRwz2%2FVHzPE7P6ozPyQblHzpP2XXRFoK%2BL1HePzCZHeCmzF16ohs16LvB8xdY1XkUnaaWQZBGYFLX28DPCXxLFqDawrfb%2F6uCcVwB5H7S2ke3k0upsy0XqvBqfqSej19fQ%2B22i8ss0xI7o%2Fj3Z0xT39xcDmeAR6%2BqNAMKzqcNdu35xydvQsKdUSYXpefFJdN%2FKPwXL1CJVeAOiAIXAh6X7AaE%2FIJEMj0TIu6C1%2BOc4a1gyrxJko38kL3U9mBCp%2FYKa497EPPQ2WByajkEibWA4T0XMpEAbN9wo9Lqaq7cdtT9xTEFwIhmvuuHjEgE3auPFhW9hiwJqAwz4XZuFNutDbk3oVIwq5C8t3qBRS88oH9pHohql1X3R63ld6FMsHhd8VqS6ZZbh2oQGN5r5BfXmJeQYeffN%2BCyeZH%2F3Uj%2F0AAYsQraGVT10V9vhMrF3L8eh5%2Fd%2BcqWwsbivmvswQwubupxAY6pgEf1%2BpV6f9H9ARPJ%2FYOSgDDgK3LDjq8oKujKEHA05liJQmgMOmyn%2FgHGxtmVUL4okP9kX%2BvjMIYeEnra6%2BuEFS%2Fk%2FHShhl8QnG3QEESHTKn9Wl3KsYEwpl44XNZfE5dgIt1tGepp88XnAnjyIwTWqtQ72feUBiYKMQ9X2nF5fUgYgPUmKbIR5s2XpIQf9X61k8fhgHugsKX6OZP1jp5H9kYh5IZxrvK&X-Amz-Signature=51f2429d7a1c5b6b4151852611b96192f12cabe80e1bfd761680ed424d67a0f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWWLHAE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu1p2noCdyNIeprVrefOBfaobO7ipvWFEb9gIsnxqEFAiBl44g2I5NKz%2Fy6W5clrpnWolGpg0iTsu1h6gqci2JDMSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpHs1tdDR%2F6qAGXZpKtwDCKtq%2FmgjPlrpg3Io4DDOVw7dXzplIYo4zXtCUlxnHtASDo6t6L71D49XbTTIwqpjNmWCCFbzMEsJ8rR590lqEh%2ByzyRpXz8mPlk8C1%2FlQl3gk7hQftyzzeEH%2FFnhpO3KJ81Z2RvF7tJ4rnUFDzHn9yihNzyZ7RCeJi8%2FWapRFRwz2%2FVHzPE7P6ozPyQblHzpP2XXRFoK%2BL1HePzCZHeCmzF16ohs16LvB8xdY1XkUnaaWQZBGYFLX28DPCXxLFqDawrfb%2F6uCcVwB5H7S2ke3k0upsy0XqvBqfqSej19fQ%2B22i8ss0xI7o%2Fj3Z0xT39xcDmeAR6%2BqNAMKzqcNdu35xydvQsKdUSYXpefFJdN%2FKPwXL1CJVeAOiAIXAh6X7AaE%2FIJEMj0TIu6C1%2BOc4a1gyrxJko38kL3U9mBCp%2FYKa497EPPQ2WByajkEibWA4T0XMpEAbN9wo9Lqaq7cdtT9xTEFwIhmvuuHjEgE3auPFhW9hiwJqAwz4XZuFNutDbk3oVIwq5C8t3qBRS88oH9pHohql1X3R63ld6FMsHhd8VqS6ZZbh2oQGN5r5BfXmJeQYeffN%2BCyeZH%2F3Uj%2F0AAYsQraGVT10V9vhMrF3L8eh5%2Fd%2BcqWwsbivmvswQwubupxAY6pgEf1%2BpV6f9H9ARPJ%2FYOSgDDgK3LDjq8oKujKEHA05liJQmgMOmyn%2FgHGxtmVUL4okP9kX%2BvjMIYeEnra6%2BuEFS%2Fk%2FHShhl8QnG3QEESHTKn9Wl3KsYEwpl44XNZfE5dgIt1tGepp88XnAnjyIwTWqtQ72feUBiYKMQ9X2nF5fUgYgPUmKbIR5s2XpIQf9X61k8fhgHugsKX6OZP1jp5H9kYh5IZxrvK&X-Amz-Signature=4cfb887ea8a91568a2f37510ba082eec79fba019322a6378bae60df950b7dbf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWWLHAE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu1p2noCdyNIeprVrefOBfaobO7ipvWFEb9gIsnxqEFAiBl44g2I5NKz%2Fy6W5clrpnWolGpg0iTsu1h6gqci2JDMSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpHs1tdDR%2F6qAGXZpKtwDCKtq%2FmgjPlrpg3Io4DDOVw7dXzplIYo4zXtCUlxnHtASDo6t6L71D49XbTTIwqpjNmWCCFbzMEsJ8rR590lqEh%2ByzyRpXz8mPlk8C1%2FlQl3gk7hQftyzzeEH%2FFnhpO3KJ81Z2RvF7tJ4rnUFDzHn9yihNzyZ7RCeJi8%2FWapRFRwz2%2FVHzPE7P6ozPyQblHzpP2XXRFoK%2BL1HePzCZHeCmzF16ohs16LvB8xdY1XkUnaaWQZBGYFLX28DPCXxLFqDawrfb%2F6uCcVwB5H7S2ke3k0upsy0XqvBqfqSej19fQ%2B22i8ss0xI7o%2Fj3Z0xT39xcDmeAR6%2BqNAMKzqcNdu35xydvQsKdUSYXpefFJdN%2FKPwXL1CJVeAOiAIXAh6X7AaE%2FIJEMj0TIu6C1%2BOc4a1gyrxJko38kL3U9mBCp%2FYKa497EPPQ2WByajkEibWA4T0XMpEAbN9wo9Lqaq7cdtT9xTEFwIhmvuuHjEgE3auPFhW9hiwJqAwz4XZuFNutDbk3oVIwq5C8t3qBRS88oH9pHohql1X3R63ld6FMsHhd8VqS6ZZbh2oQGN5r5BfXmJeQYeffN%2BCyeZH%2F3Uj%2F0AAYsQraGVT10V9vhMrF3L8eh5%2Fd%2BcqWwsbivmvswQwubupxAY6pgEf1%2BpV6f9H9ARPJ%2FYOSgDDgK3LDjq8oKujKEHA05liJQmgMOmyn%2FgHGxtmVUL4okP9kX%2BvjMIYeEnra6%2BuEFS%2Fk%2FHShhl8QnG3QEESHTKn9Wl3KsYEwpl44XNZfE5dgIt1tGepp88XnAnjyIwTWqtQ72feUBiYKMQ9X2nF5fUgYgPUmKbIR5s2XpIQf9X61k8fhgHugsKX6OZP1jp5H9kYh5IZxrvK&X-Amz-Signature=cba1a05f1f0bdfde7c716e27e08ad69d8155730fdfc4d484bfb1be865a1a6fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWWLHAE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu1p2noCdyNIeprVrefOBfaobO7ipvWFEb9gIsnxqEFAiBl44g2I5NKz%2Fy6W5clrpnWolGpg0iTsu1h6gqci2JDMSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpHs1tdDR%2F6qAGXZpKtwDCKtq%2FmgjPlrpg3Io4DDOVw7dXzplIYo4zXtCUlxnHtASDo6t6L71D49XbTTIwqpjNmWCCFbzMEsJ8rR590lqEh%2ByzyRpXz8mPlk8C1%2FlQl3gk7hQftyzzeEH%2FFnhpO3KJ81Z2RvF7tJ4rnUFDzHn9yihNzyZ7RCeJi8%2FWapRFRwz2%2FVHzPE7P6ozPyQblHzpP2XXRFoK%2BL1HePzCZHeCmzF16ohs16LvB8xdY1XkUnaaWQZBGYFLX28DPCXxLFqDawrfb%2F6uCcVwB5H7S2ke3k0upsy0XqvBqfqSej19fQ%2B22i8ss0xI7o%2Fj3Z0xT39xcDmeAR6%2BqNAMKzqcNdu35xydvQsKdUSYXpefFJdN%2FKPwXL1CJVeAOiAIXAh6X7AaE%2FIJEMj0TIu6C1%2BOc4a1gyrxJko38kL3U9mBCp%2FYKa497EPPQ2WByajkEibWA4T0XMpEAbN9wo9Lqaq7cdtT9xTEFwIhmvuuHjEgE3auPFhW9hiwJqAwz4XZuFNutDbk3oVIwq5C8t3qBRS88oH9pHohql1X3R63ld6FMsHhd8VqS6ZZbh2oQGN5r5BfXmJeQYeffN%2BCyeZH%2F3Uj%2F0AAYsQraGVT10V9vhMrF3L8eh5%2Fd%2BcqWwsbivmvswQwubupxAY6pgEf1%2BpV6f9H9ARPJ%2FYOSgDDgK3LDjq8oKujKEHA05liJQmgMOmyn%2FgHGxtmVUL4okP9kX%2BvjMIYeEnra6%2BuEFS%2Fk%2FHShhl8QnG3QEESHTKn9Wl3KsYEwpl44XNZfE5dgIt1tGepp88XnAnjyIwTWqtQ72feUBiYKMQ9X2nF5fUgYgPUmKbIR5s2XpIQf9X61k8fhgHugsKX6OZP1jp5H9kYh5IZxrvK&X-Amz-Signature=f1aac74344fcaad2a2d0626df4a027c77de17f871e2160ba64792aba2a99f90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWWLHAE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu1p2noCdyNIeprVrefOBfaobO7ipvWFEb9gIsnxqEFAiBl44g2I5NKz%2Fy6W5clrpnWolGpg0iTsu1h6gqci2JDMSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpHs1tdDR%2F6qAGXZpKtwDCKtq%2FmgjPlrpg3Io4DDOVw7dXzplIYo4zXtCUlxnHtASDo6t6L71D49XbTTIwqpjNmWCCFbzMEsJ8rR590lqEh%2ByzyRpXz8mPlk8C1%2FlQl3gk7hQftyzzeEH%2FFnhpO3KJ81Z2RvF7tJ4rnUFDzHn9yihNzyZ7RCeJi8%2FWapRFRwz2%2FVHzPE7P6ozPyQblHzpP2XXRFoK%2BL1HePzCZHeCmzF16ohs16LvB8xdY1XkUnaaWQZBGYFLX28DPCXxLFqDawrfb%2F6uCcVwB5H7S2ke3k0upsy0XqvBqfqSej19fQ%2B22i8ss0xI7o%2Fj3Z0xT39xcDmeAR6%2BqNAMKzqcNdu35xydvQsKdUSYXpefFJdN%2FKPwXL1CJVeAOiAIXAh6X7AaE%2FIJEMj0TIu6C1%2BOc4a1gyrxJko38kL3U9mBCp%2FYKa497EPPQ2WByajkEibWA4T0XMpEAbN9wo9Lqaq7cdtT9xTEFwIhmvuuHjEgE3auPFhW9hiwJqAwz4XZuFNutDbk3oVIwq5C8t3qBRS88oH9pHohql1X3R63ld6FMsHhd8VqS6ZZbh2oQGN5r5BfXmJeQYeffN%2BCyeZH%2F3Uj%2F0AAYsQraGVT10V9vhMrF3L8eh5%2Fd%2BcqWwsbivmvswQwubupxAY6pgEf1%2BpV6f9H9ARPJ%2FYOSgDDgK3LDjq8oKujKEHA05liJQmgMOmyn%2FgHGxtmVUL4okP9kX%2BvjMIYeEnra6%2BuEFS%2Fk%2FHShhl8QnG3QEESHTKn9Wl3KsYEwpl44XNZfE5dgIt1tGepp88XnAnjyIwTWqtQ72feUBiYKMQ9X2nF5fUgYgPUmKbIR5s2XpIQf9X61k8fhgHugsKX6OZP1jp5H9kYh5IZxrvK&X-Amz-Signature=fb697c2e74a51cafa9f8ffeaa7a5daea79e13d96888ea1395a76c6a4724629c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWWLHAE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu1p2noCdyNIeprVrefOBfaobO7ipvWFEb9gIsnxqEFAiBl44g2I5NKz%2Fy6W5clrpnWolGpg0iTsu1h6gqci2JDMSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpHs1tdDR%2F6qAGXZpKtwDCKtq%2FmgjPlrpg3Io4DDOVw7dXzplIYo4zXtCUlxnHtASDo6t6L71D49XbTTIwqpjNmWCCFbzMEsJ8rR590lqEh%2ByzyRpXz8mPlk8C1%2FlQl3gk7hQftyzzeEH%2FFnhpO3KJ81Z2RvF7tJ4rnUFDzHn9yihNzyZ7RCeJi8%2FWapRFRwz2%2FVHzPE7P6ozPyQblHzpP2XXRFoK%2BL1HePzCZHeCmzF16ohs16LvB8xdY1XkUnaaWQZBGYFLX28DPCXxLFqDawrfb%2F6uCcVwB5H7S2ke3k0upsy0XqvBqfqSej19fQ%2B22i8ss0xI7o%2Fj3Z0xT39xcDmeAR6%2BqNAMKzqcNdu35xydvQsKdUSYXpefFJdN%2FKPwXL1CJVeAOiAIXAh6X7AaE%2FIJEMj0TIu6C1%2BOc4a1gyrxJko38kL3U9mBCp%2FYKa497EPPQ2WByajkEibWA4T0XMpEAbN9wo9Lqaq7cdtT9xTEFwIhmvuuHjEgE3auPFhW9hiwJqAwz4XZuFNutDbk3oVIwq5C8t3qBRS88oH9pHohql1X3R63ld6FMsHhd8VqS6ZZbh2oQGN5r5BfXmJeQYeffN%2BCyeZH%2F3Uj%2F0AAYsQraGVT10V9vhMrF3L8eh5%2Fd%2BcqWwsbivmvswQwubupxAY6pgEf1%2BpV6f9H9ARPJ%2FYOSgDDgK3LDjq8oKujKEHA05liJQmgMOmyn%2FgHGxtmVUL4okP9kX%2BvjMIYeEnra6%2BuEFS%2Fk%2FHShhl8QnG3QEESHTKn9Wl3KsYEwpl44XNZfE5dgIt1tGepp88XnAnjyIwTWqtQ72feUBiYKMQ9X2nF5fUgYgPUmKbIR5s2XpIQf9X61k8fhgHugsKX6OZP1jp5H9kYh5IZxrvK&X-Amz-Signature=2114ac4d8d95bc3cb7a6ee52c85e5789536dbd77077048934507a7b780a82964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWWLHAE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu1p2noCdyNIeprVrefOBfaobO7ipvWFEb9gIsnxqEFAiBl44g2I5NKz%2Fy6W5clrpnWolGpg0iTsu1h6gqci2JDMSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpHs1tdDR%2F6qAGXZpKtwDCKtq%2FmgjPlrpg3Io4DDOVw7dXzplIYo4zXtCUlxnHtASDo6t6L71D49XbTTIwqpjNmWCCFbzMEsJ8rR590lqEh%2ByzyRpXz8mPlk8C1%2FlQl3gk7hQftyzzeEH%2FFnhpO3KJ81Z2RvF7tJ4rnUFDzHn9yihNzyZ7RCeJi8%2FWapRFRwz2%2FVHzPE7P6ozPyQblHzpP2XXRFoK%2BL1HePzCZHeCmzF16ohs16LvB8xdY1XkUnaaWQZBGYFLX28DPCXxLFqDawrfb%2F6uCcVwB5H7S2ke3k0upsy0XqvBqfqSej19fQ%2B22i8ss0xI7o%2Fj3Z0xT39xcDmeAR6%2BqNAMKzqcNdu35xydvQsKdUSYXpefFJdN%2FKPwXL1CJVeAOiAIXAh6X7AaE%2FIJEMj0TIu6C1%2BOc4a1gyrxJko38kL3U9mBCp%2FYKa497EPPQ2WByajkEibWA4T0XMpEAbN9wo9Lqaq7cdtT9xTEFwIhmvuuHjEgE3auPFhW9hiwJqAwz4XZuFNutDbk3oVIwq5C8t3qBRS88oH9pHohql1X3R63ld6FMsHhd8VqS6ZZbh2oQGN5r5BfXmJeQYeffN%2BCyeZH%2F3Uj%2F0AAYsQraGVT10V9vhMrF3L8eh5%2Fd%2BcqWwsbivmvswQwubupxAY6pgEf1%2BpV6f9H9ARPJ%2FYOSgDDgK3LDjq8oKujKEHA05liJQmgMOmyn%2FgHGxtmVUL4okP9kX%2BvjMIYeEnra6%2BuEFS%2Fk%2FHShhl8QnG3QEESHTKn9Wl3KsYEwpl44XNZfE5dgIt1tGepp88XnAnjyIwTWqtQ72feUBiYKMQ9X2nF5fUgYgPUmKbIR5s2XpIQf9X61k8fhgHugsKX6OZP1jp5H9kYh5IZxrvK&X-Amz-Signature=f5a106bc46430babeac5a710f94cef241e9cbc131c2aff6107e2382903da00b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWWLHAE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu1p2noCdyNIeprVrefOBfaobO7ipvWFEb9gIsnxqEFAiBl44g2I5NKz%2Fy6W5clrpnWolGpg0iTsu1h6gqci2JDMSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpHs1tdDR%2F6qAGXZpKtwDCKtq%2FmgjPlrpg3Io4DDOVw7dXzplIYo4zXtCUlxnHtASDo6t6L71D49XbTTIwqpjNmWCCFbzMEsJ8rR590lqEh%2ByzyRpXz8mPlk8C1%2FlQl3gk7hQftyzzeEH%2FFnhpO3KJ81Z2RvF7tJ4rnUFDzHn9yihNzyZ7RCeJi8%2FWapRFRwz2%2FVHzPE7P6ozPyQblHzpP2XXRFoK%2BL1HePzCZHeCmzF16ohs16LvB8xdY1XkUnaaWQZBGYFLX28DPCXxLFqDawrfb%2F6uCcVwB5H7S2ke3k0upsy0XqvBqfqSej19fQ%2B22i8ss0xI7o%2Fj3Z0xT39xcDmeAR6%2BqNAMKzqcNdu35xydvQsKdUSYXpefFJdN%2FKPwXL1CJVeAOiAIXAh6X7AaE%2FIJEMj0TIu6C1%2BOc4a1gyrxJko38kL3U9mBCp%2FYKa497EPPQ2WByajkEibWA4T0XMpEAbN9wo9Lqaq7cdtT9xTEFwIhmvuuHjEgE3auPFhW9hiwJqAwz4XZuFNutDbk3oVIwq5C8t3qBRS88oH9pHohql1X3R63ld6FMsHhd8VqS6ZZbh2oQGN5r5BfXmJeQYeffN%2BCyeZH%2F3Uj%2F0AAYsQraGVT10V9vhMrF3L8eh5%2Fd%2BcqWwsbivmvswQwubupxAY6pgEf1%2BpV6f9H9ARPJ%2FYOSgDDgK3LDjq8oKujKEHA05liJQmgMOmyn%2FgHGxtmVUL4okP9kX%2BvjMIYeEnra6%2BuEFS%2Fk%2FHShhl8QnG3QEESHTKn9Wl3KsYEwpl44XNZfE5dgIt1tGepp88XnAnjyIwTWqtQ72feUBiYKMQ9X2nF5fUgYgPUmKbIR5s2XpIQf9X61k8fhgHugsKX6OZP1jp5H9kYh5IZxrvK&X-Amz-Signature=61ab32a59c43e3367871b15bbb3da350777249b2a68a41058a615f9cd6203019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWWLHAE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu1p2noCdyNIeprVrefOBfaobO7ipvWFEb9gIsnxqEFAiBl44g2I5NKz%2Fy6W5clrpnWolGpg0iTsu1h6gqci2JDMSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpHs1tdDR%2F6qAGXZpKtwDCKtq%2FmgjPlrpg3Io4DDOVw7dXzplIYo4zXtCUlxnHtASDo6t6L71D49XbTTIwqpjNmWCCFbzMEsJ8rR590lqEh%2ByzyRpXz8mPlk8C1%2FlQl3gk7hQftyzzeEH%2FFnhpO3KJ81Z2RvF7tJ4rnUFDzHn9yihNzyZ7RCeJi8%2FWapRFRwz2%2FVHzPE7P6ozPyQblHzpP2XXRFoK%2BL1HePzCZHeCmzF16ohs16LvB8xdY1XkUnaaWQZBGYFLX28DPCXxLFqDawrfb%2F6uCcVwB5H7S2ke3k0upsy0XqvBqfqSej19fQ%2B22i8ss0xI7o%2Fj3Z0xT39xcDmeAR6%2BqNAMKzqcNdu35xydvQsKdUSYXpefFJdN%2FKPwXL1CJVeAOiAIXAh6X7AaE%2FIJEMj0TIu6C1%2BOc4a1gyrxJko38kL3U9mBCp%2FYKa497EPPQ2WByajkEibWA4T0XMpEAbN9wo9Lqaq7cdtT9xTEFwIhmvuuHjEgE3auPFhW9hiwJqAwz4XZuFNutDbk3oVIwq5C8t3qBRS88oH9pHohql1X3R63ld6FMsHhd8VqS6ZZbh2oQGN5r5BfXmJeQYeffN%2BCyeZH%2F3Uj%2F0AAYsQraGVT10V9vhMrF3L8eh5%2Fd%2BcqWwsbivmvswQwubupxAY6pgEf1%2BpV6f9H9ARPJ%2FYOSgDDgK3LDjq8oKujKEHA05liJQmgMOmyn%2FgHGxtmVUL4okP9kX%2BvjMIYeEnra6%2BuEFS%2Fk%2FHShhl8QnG3QEESHTKn9Wl3KsYEwpl44XNZfE5dgIt1tGepp88XnAnjyIwTWqtQ72feUBiYKMQ9X2nF5fUgYgPUmKbIR5s2XpIQf9X61k8fhgHugsKX6OZP1jp5H9kYh5IZxrvK&X-Amz-Signature=248adfaa4e09ed39db11d474ae45803c013a128d3600207d5e2548f5daf3a79b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGWWLHAE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEu1p2noCdyNIeprVrefOBfaobO7ipvWFEb9gIsnxqEFAiBl44g2I5NKz%2Fy6W5clrpnWolGpg0iTsu1h6gqci2JDMSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpHs1tdDR%2F6qAGXZpKtwDCKtq%2FmgjPlrpg3Io4DDOVw7dXzplIYo4zXtCUlxnHtASDo6t6L71D49XbTTIwqpjNmWCCFbzMEsJ8rR590lqEh%2ByzyRpXz8mPlk8C1%2FlQl3gk7hQftyzzeEH%2FFnhpO3KJ81Z2RvF7tJ4rnUFDzHn9yihNzyZ7RCeJi8%2FWapRFRwz2%2FVHzPE7P6ozPyQblHzpP2XXRFoK%2BL1HePzCZHeCmzF16ohs16LvB8xdY1XkUnaaWQZBGYFLX28DPCXxLFqDawrfb%2F6uCcVwB5H7S2ke3k0upsy0XqvBqfqSej19fQ%2B22i8ss0xI7o%2Fj3Z0xT39xcDmeAR6%2BqNAMKzqcNdu35xydvQsKdUSYXpefFJdN%2FKPwXL1CJVeAOiAIXAh6X7AaE%2FIJEMj0TIu6C1%2BOc4a1gyrxJko38kL3U9mBCp%2FYKa497EPPQ2WByajkEibWA4T0XMpEAbN9wo9Lqaq7cdtT9xTEFwIhmvuuHjEgE3auPFhW9hiwJqAwz4XZuFNutDbk3oVIwq5C8t3qBRS88oH9pHohql1X3R63ld6FMsHhd8VqS6ZZbh2oQGN5r5BfXmJeQYeffN%2BCyeZH%2F3Uj%2F0AAYsQraGVT10V9vhMrF3L8eh5%2Fd%2BcqWwsbivmvswQwubupxAY6pgEf1%2BpV6f9H9ARPJ%2FYOSgDDgK3LDjq8oKujKEHA05liJQmgMOmyn%2FgHGxtmVUL4okP9kX%2BvjMIYeEnra6%2BuEFS%2Fk%2FHShhl8QnG3QEESHTKn9Wl3KsYEwpl44XNZfE5dgIt1tGepp88XnAnjyIwTWqtQ72feUBiYKMQ9X2nF5fUgYgPUmKbIR5s2XpIQf9X61k8fhgHugsKX6OZP1jp5H9kYh5IZxrvK&X-Amz-Signature=4cb8096a07a96c00a44a8a2dfbffc70d2ded4f0796329b51e659f4c985b740c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
