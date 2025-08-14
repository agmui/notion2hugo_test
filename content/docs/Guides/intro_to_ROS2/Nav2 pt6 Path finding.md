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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CAFFFCU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIH64ny2I%2BFbpMfD6%2BDkiU2nBTGRA9ReIHj8G4J77jpKKAiEAzxHYEOEFoSos4y7VaJVPlPTrC7CTrW%2Fib0e1aJE5Qzsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBOZWj%2F6xRP2j4xmHCrcA5nqqdBq%2FhzVZLix9LgQuB3hg4S4mJAGp3WQ5JHfQ%2B56m49a%2Fodp6CR5Y5DzXPXbIm5MeahlH43K3%2BgyzHcs8GTP0b80M4g62jUJ5A9a%2FKp92JIC0PzrMBuG%2BbqOaI2CVeErd0ooFQ228nKQTYx0Zg5ACvmcbSAY3YyEX7GNzKbdfsJuauG15bmVFPXvnlpTaKOxFjED3Qf7QSYQTCqEJSP2HHL84dp%2BFcu17A6Ixy%2B9Mteb5f23syt%2FX9DZ1gjFAFHebgGZtY8IQBde23DZJyk239WuaW1nlEM4T3itagQa7gsYcpvPd4%2BrN%2F%2FkdytHM%2BHbtA597yH9z%2FDhQftegI2s1TF3Zt7z0Gmw4PuUzS6uxCm8QWgpPV3kNOKIYmC2r9q%2FTWvlexSna9zm7cIQwnYZdXphlujDk94s4SRKVla7MGwWPiqIQSKCixbYhErOgoV5U18R4EKW%2BOXRqMaUnDM6yzjmzAczT%2BD2ZArmZ5iFOo8Duqk%2FlvsWJR4gQudzVYUnuN4qu7MCubuDz4mOyrvlmHBAkP%2F9Sia9QBefGogBZdWIWa0Y9urSyYP1kg3g0IKBxMXSx2WQPgMWH2UGiCYcD1Zoi0w9cqUXKaSYdev79u59tshnDX79QaacMLno%2BMQGOqUBtenWRvkIZhsNObP6Zrkuy4pIrzi84RlYr8RGZzjFQycuKPpklBZl3NjkWKSXrI2SrzeD%2BBginRryrfNI5Nb3sNo24oOUUqzdTAqarcXjrR4TDQecJsJMBiBbCgY7%2BOb2zZWq2bwcwTYorEUBLNZHUJiJxwMglJJrGQnXCnVdNeEYa1KBNuQb7NYRPhZelROXiUMd2Czha2TCbubz7Teqn2FTrvmE&X-Amz-Signature=bd9f8b66a437e77e51e31860dc44e342b20ba9a5d64d341e5a00cb9d1b727046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CAFFFCU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIH64ny2I%2BFbpMfD6%2BDkiU2nBTGRA9ReIHj8G4J77jpKKAiEAzxHYEOEFoSos4y7VaJVPlPTrC7CTrW%2Fib0e1aJE5Qzsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBOZWj%2F6xRP2j4xmHCrcA5nqqdBq%2FhzVZLix9LgQuB3hg4S4mJAGp3WQ5JHfQ%2B56m49a%2Fodp6CR5Y5DzXPXbIm5MeahlH43K3%2BgyzHcs8GTP0b80M4g62jUJ5A9a%2FKp92JIC0PzrMBuG%2BbqOaI2CVeErd0ooFQ228nKQTYx0Zg5ACvmcbSAY3YyEX7GNzKbdfsJuauG15bmVFPXvnlpTaKOxFjED3Qf7QSYQTCqEJSP2HHL84dp%2BFcu17A6Ixy%2B9Mteb5f23syt%2FX9DZ1gjFAFHebgGZtY8IQBde23DZJyk239WuaW1nlEM4T3itagQa7gsYcpvPd4%2BrN%2F%2FkdytHM%2BHbtA597yH9z%2FDhQftegI2s1TF3Zt7z0Gmw4PuUzS6uxCm8QWgpPV3kNOKIYmC2r9q%2FTWvlexSna9zm7cIQwnYZdXphlujDk94s4SRKVla7MGwWPiqIQSKCixbYhErOgoV5U18R4EKW%2BOXRqMaUnDM6yzjmzAczT%2BD2ZArmZ5iFOo8Duqk%2FlvsWJR4gQudzVYUnuN4qu7MCubuDz4mOyrvlmHBAkP%2F9Sia9QBefGogBZdWIWa0Y9urSyYP1kg3g0IKBxMXSx2WQPgMWH2UGiCYcD1Zoi0w9cqUXKaSYdev79u59tshnDX79QaacMLno%2BMQGOqUBtenWRvkIZhsNObP6Zrkuy4pIrzi84RlYr8RGZzjFQycuKPpklBZl3NjkWKSXrI2SrzeD%2BBginRryrfNI5Nb3sNo24oOUUqzdTAqarcXjrR4TDQecJsJMBiBbCgY7%2BOb2zZWq2bwcwTYorEUBLNZHUJiJxwMglJJrGQnXCnVdNeEYa1KBNuQb7NYRPhZelROXiUMd2Czha2TCbubz7Teqn2FTrvmE&X-Amz-Signature=3213c1546044d909134e09dc14e4f7fbbbd1f3b81e06f0839fe88d3ac7fbe904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CAFFFCU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIH64ny2I%2BFbpMfD6%2BDkiU2nBTGRA9ReIHj8G4J77jpKKAiEAzxHYEOEFoSos4y7VaJVPlPTrC7CTrW%2Fib0e1aJE5Qzsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBOZWj%2F6xRP2j4xmHCrcA5nqqdBq%2FhzVZLix9LgQuB3hg4S4mJAGp3WQ5JHfQ%2B56m49a%2Fodp6CR5Y5DzXPXbIm5MeahlH43K3%2BgyzHcs8GTP0b80M4g62jUJ5A9a%2FKp92JIC0PzrMBuG%2BbqOaI2CVeErd0ooFQ228nKQTYx0Zg5ACvmcbSAY3YyEX7GNzKbdfsJuauG15bmVFPXvnlpTaKOxFjED3Qf7QSYQTCqEJSP2HHL84dp%2BFcu17A6Ixy%2B9Mteb5f23syt%2FX9DZ1gjFAFHebgGZtY8IQBde23DZJyk239WuaW1nlEM4T3itagQa7gsYcpvPd4%2BrN%2F%2FkdytHM%2BHbtA597yH9z%2FDhQftegI2s1TF3Zt7z0Gmw4PuUzS6uxCm8QWgpPV3kNOKIYmC2r9q%2FTWvlexSna9zm7cIQwnYZdXphlujDk94s4SRKVla7MGwWPiqIQSKCixbYhErOgoV5U18R4EKW%2BOXRqMaUnDM6yzjmzAczT%2BD2ZArmZ5iFOo8Duqk%2FlvsWJR4gQudzVYUnuN4qu7MCubuDz4mOyrvlmHBAkP%2F9Sia9QBefGogBZdWIWa0Y9urSyYP1kg3g0IKBxMXSx2WQPgMWH2UGiCYcD1Zoi0w9cqUXKaSYdev79u59tshnDX79QaacMLno%2BMQGOqUBtenWRvkIZhsNObP6Zrkuy4pIrzi84RlYr8RGZzjFQycuKPpklBZl3NjkWKSXrI2SrzeD%2BBginRryrfNI5Nb3sNo24oOUUqzdTAqarcXjrR4TDQecJsJMBiBbCgY7%2BOb2zZWq2bwcwTYorEUBLNZHUJiJxwMglJJrGQnXCnVdNeEYa1KBNuQb7NYRPhZelROXiUMd2Czha2TCbubz7Teqn2FTrvmE&X-Amz-Signature=851edd9a7ec8eac3e8d48e008a25c29c01f44a3f660e18916d5d0826ffdd7e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CAFFFCU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIH64ny2I%2BFbpMfD6%2BDkiU2nBTGRA9ReIHj8G4J77jpKKAiEAzxHYEOEFoSos4y7VaJVPlPTrC7CTrW%2Fib0e1aJE5Qzsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBOZWj%2F6xRP2j4xmHCrcA5nqqdBq%2FhzVZLix9LgQuB3hg4S4mJAGp3WQ5JHfQ%2B56m49a%2Fodp6CR5Y5DzXPXbIm5MeahlH43K3%2BgyzHcs8GTP0b80M4g62jUJ5A9a%2FKp92JIC0PzrMBuG%2BbqOaI2CVeErd0ooFQ228nKQTYx0Zg5ACvmcbSAY3YyEX7GNzKbdfsJuauG15bmVFPXvnlpTaKOxFjED3Qf7QSYQTCqEJSP2HHL84dp%2BFcu17A6Ixy%2B9Mteb5f23syt%2FX9DZ1gjFAFHebgGZtY8IQBde23DZJyk239WuaW1nlEM4T3itagQa7gsYcpvPd4%2BrN%2F%2FkdytHM%2BHbtA597yH9z%2FDhQftegI2s1TF3Zt7z0Gmw4PuUzS6uxCm8QWgpPV3kNOKIYmC2r9q%2FTWvlexSna9zm7cIQwnYZdXphlujDk94s4SRKVla7MGwWPiqIQSKCixbYhErOgoV5U18R4EKW%2BOXRqMaUnDM6yzjmzAczT%2BD2ZArmZ5iFOo8Duqk%2FlvsWJR4gQudzVYUnuN4qu7MCubuDz4mOyrvlmHBAkP%2F9Sia9QBefGogBZdWIWa0Y9urSyYP1kg3g0IKBxMXSx2WQPgMWH2UGiCYcD1Zoi0w9cqUXKaSYdev79u59tshnDX79QaacMLno%2BMQGOqUBtenWRvkIZhsNObP6Zrkuy4pIrzi84RlYr8RGZzjFQycuKPpklBZl3NjkWKSXrI2SrzeD%2BBginRryrfNI5Nb3sNo24oOUUqzdTAqarcXjrR4TDQecJsJMBiBbCgY7%2BOb2zZWq2bwcwTYorEUBLNZHUJiJxwMglJJrGQnXCnVdNeEYa1KBNuQb7NYRPhZelROXiUMd2Czha2TCbubz7Teqn2FTrvmE&X-Amz-Signature=0fcdea8bfdd2871d79721b12831964e283e3b28c52e5eaa018c7991502d24ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CAFFFCU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIH64ny2I%2BFbpMfD6%2BDkiU2nBTGRA9ReIHj8G4J77jpKKAiEAzxHYEOEFoSos4y7VaJVPlPTrC7CTrW%2Fib0e1aJE5Qzsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBOZWj%2F6xRP2j4xmHCrcA5nqqdBq%2FhzVZLix9LgQuB3hg4S4mJAGp3WQ5JHfQ%2B56m49a%2Fodp6CR5Y5DzXPXbIm5MeahlH43K3%2BgyzHcs8GTP0b80M4g62jUJ5A9a%2FKp92JIC0PzrMBuG%2BbqOaI2CVeErd0ooFQ228nKQTYx0Zg5ACvmcbSAY3YyEX7GNzKbdfsJuauG15bmVFPXvnlpTaKOxFjED3Qf7QSYQTCqEJSP2HHL84dp%2BFcu17A6Ixy%2B9Mteb5f23syt%2FX9DZ1gjFAFHebgGZtY8IQBde23DZJyk239WuaW1nlEM4T3itagQa7gsYcpvPd4%2BrN%2F%2FkdytHM%2BHbtA597yH9z%2FDhQftegI2s1TF3Zt7z0Gmw4PuUzS6uxCm8QWgpPV3kNOKIYmC2r9q%2FTWvlexSna9zm7cIQwnYZdXphlujDk94s4SRKVla7MGwWPiqIQSKCixbYhErOgoV5U18R4EKW%2BOXRqMaUnDM6yzjmzAczT%2BD2ZArmZ5iFOo8Duqk%2FlvsWJR4gQudzVYUnuN4qu7MCubuDz4mOyrvlmHBAkP%2F9Sia9QBefGogBZdWIWa0Y9urSyYP1kg3g0IKBxMXSx2WQPgMWH2UGiCYcD1Zoi0w9cqUXKaSYdev79u59tshnDX79QaacMLno%2BMQGOqUBtenWRvkIZhsNObP6Zrkuy4pIrzi84RlYr8RGZzjFQycuKPpklBZl3NjkWKSXrI2SrzeD%2BBginRryrfNI5Nb3sNo24oOUUqzdTAqarcXjrR4TDQecJsJMBiBbCgY7%2BOb2zZWq2bwcwTYorEUBLNZHUJiJxwMglJJrGQnXCnVdNeEYa1KBNuQb7NYRPhZelROXiUMd2Czha2TCbubz7Teqn2FTrvmE&X-Amz-Signature=b6824e187780c843be3ea673e076bad0aa7ba34b9e4c5d344a399826ebe48352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CAFFFCU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIH64ny2I%2BFbpMfD6%2BDkiU2nBTGRA9ReIHj8G4J77jpKKAiEAzxHYEOEFoSos4y7VaJVPlPTrC7CTrW%2Fib0e1aJE5Qzsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBOZWj%2F6xRP2j4xmHCrcA5nqqdBq%2FhzVZLix9LgQuB3hg4S4mJAGp3WQ5JHfQ%2B56m49a%2Fodp6CR5Y5DzXPXbIm5MeahlH43K3%2BgyzHcs8GTP0b80M4g62jUJ5A9a%2FKp92JIC0PzrMBuG%2BbqOaI2CVeErd0ooFQ228nKQTYx0Zg5ACvmcbSAY3YyEX7GNzKbdfsJuauG15bmVFPXvnlpTaKOxFjED3Qf7QSYQTCqEJSP2HHL84dp%2BFcu17A6Ixy%2B9Mteb5f23syt%2FX9DZ1gjFAFHebgGZtY8IQBde23DZJyk239WuaW1nlEM4T3itagQa7gsYcpvPd4%2BrN%2F%2FkdytHM%2BHbtA597yH9z%2FDhQftegI2s1TF3Zt7z0Gmw4PuUzS6uxCm8QWgpPV3kNOKIYmC2r9q%2FTWvlexSna9zm7cIQwnYZdXphlujDk94s4SRKVla7MGwWPiqIQSKCixbYhErOgoV5U18R4EKW%2BOXRqMaUnDM6yzjmzAczT%2BD2ZArmZ5iFOo8Duqk%2FlvsWJR4gQudzVYUnuN4qu7MCubuDz4mOyrvlmHBAkP%2F9Sia9QBefGogBZdWIWa0Y9urSyYP1kg3g0IKBxMXSx2WQPgMWH2UGiCYcD1Zoi0w9cqUXKaSYdev79u59tshnDX79QaacMLno%2BMQGOqUBtenWRvkIZhsNObP6Zrkuy4pIrzi84RlYr8RGZzjFQycuKPpklBZl3NjkWKSXrI2SrzeD%2BBginRryrfNI5Nb3sNo24oOUUqzdTAqarcXjrR4TDQecJsJMBiBbCgY7%2BOb2zZWq2bwcwTYorEUBLNZHUJiJxwMglJJrGQnXCnVdNeEYa1KBNuQb7NYRPhZelROXiUMd2Czha2TCbubz7Teqn2FTrvmE&X-Amz-Signature=3e55e227dcdbe36751c1b2d1a1e7d49430b0845ccf1213562511d8442db1e4b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CAFFFCU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIH64ny2I%2BFbpMfD6%2BDkiU2nBTGRA9ReIHj8G4J77jpKKAiEAzxHYEOEFoSos4y7VaJVPlPTrC7CTrW%2Fib0e1aJE5Qzsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBOZWj%2F6xRP2j4xmHCrcA5nqqdBq%2FhzVZLix9LgQuB3hg4S4mJAGp3WQ5JHfQ%2B56m49a%2Fodp6CR5Y5DzXPXbIm5MeahlH43K3%2BgyzHcs8GTP0b80M4g62jUJ5A9a%2FKp92JIC0PzrMBuG%2BbqOaI2CVeErd0ooFQ228nKQTYx0Zg5ACvmcbSAY3YyEX7GNzKbdfsJuauG15bmVFPXvnlpTaKOxFjED3Qf7QSYQTCqEJSP2HHL84dp%2BFcu17A6Ixy%2B9Mteb5f23syt%2FX9DZ1gjFAFHebgGZtY8IQBde23DZJyk239WuaW1nlEM4T3itagQa7gsYcpvPd4%2BrN%2F%2FkdytHM%2BHbtA597yH9z%2FDhQftegI2s1TF3Zt7z0Gmw4PuUzS6uxCm8QWgpPV3kNOKIYmC2r9q%2FTWvlexSna9zm7cIQwnYZdXphlujDk94s4SRKVla7MGwWPiqIQSKCixbYhErOgoV5U18R4EKW%2BOXRqMaUnDM6yzjmzAczT%2BD2ZArmZ5iFOo8Duqk%2FlvsWJR4gQudzVYUnuN4qu7MCubuDz4mOyrvlmHBAkP%2F9Sia9QBefGogBZdWIWa0Y9urSyYP1kg3g0IKBxMXSx2WQPgMWH2UGiCYcD1Zoi0w9cqUXKaSYdev79u59tshnDX79QaacMLno%2BMQGOqUBtenWRvkIZhsNObP6Zrkuy4pIrzi84RlYr8RGZzjFQycuKPpklBZl3NjkWKSXrI2SrzeD%2BBginRryrfNI5Nb3sNo24oOUUqzdTAqarcXjrR4TDQecJsJMBiBbCgY7%2BOb2zZWq2bwcwTYorEUBLNZHUJiJxwMglJJrGQnXCnVdNeEYa1KBNuQb7NYRPhZelROXiUMd2Czha2TCbubz7Teqn2FTrvmE&X-Amz-Signature=a64fa60e729b3186840bc686104025978740a1478a3979bb0a3fb03e95f33817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CAFFFCU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIH64ny2I%2BFbpMfD6%2BDkiU2nBTGRA9ReIHj8G4J77jpKKAiEAzxHYEOEFoSos4y7VaJVPlPTrC7CTrW%2Fib0e1aJE5Qzsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBOZWj%2F6xRP2j4xmHCrcA5nqqdBq%2FhzVZLix9LgQuB3hg4S4mJAGp3WQ5JHfQ%2B56m49a%2Fodp6CR5Y5DzXPXbIm5MeahlH43K3%2BgyzHcs8GTP0b80M4g62jUJ5A9a%2FKp92JIC0PzrMBuG%2BbqOaI2CVeErd0ooFQ228nKQTYx0Zg5ACvmcbSAY3YyEX7GNzKbdfsJuauG15bmVFPXvnlpTaKOxFjED3Qf7QSYQTCqEJSP2HHL84dp%2BFcu17A6Ixy%2B9Mteb5f23syt%2FX9DZ1gjFAFHebgGZtY8IQBde23DZJyk239WuaW1nlEM4T3itagQa7gsYcpvPd4%2BrN%2F%2FkdytHM%2BHbtA597yH9z%2FDhQftegI2s1TF3Zt7z0Gmw4PuUzS6uxCm8QWgpPV3kNOKIYmC2r9q%2FTWvlexSna9zm7cIQwnYZdXphlujDk94s4SRKVla7MGwWPiqIQSKCixbYhErOgoV5U18R4EKW%2BOXRqMaUnDM6yzjmzAczT%2BD2ZArmZ5iFOo8Duqk%2FlvsWJR4gQudzVYUnuN4qu7MCubuDz4mOyrvlmHBAkP%2F9Sia9QBefGogBZdWIWa0Y9urSyYP1kg3g0IKBxMXSx2WQPgMWH2UGiCYcD1Zoi0w9cqUXKaSYdev79u59tshnDX79QaacMLno%2BMQGOqUBtenWRvkIZhsNObP6Zrkuy4pIrzi84RlYr8RGZzjFQycuKPpklBZl3NjkWKSXrI2SrzeD%2BBginRryrfNI5Nb3sNo24oOUUqzdTAqarcXjrR4TDQecJsJMBiBbCgY7%2BOb2zZWq2bwcwTYorEUBLNZHUJiJxwMglJJrGQnXCnVdNeEYa1KBNuQb7NYRPhZelROXiUMd2Czha2TCbubz7Teqn2FTrvmE&X-Amz-Signature=50d48ae10024cd0179fa4afefaad06968b36162dc184194fb0edbc479798952a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CAFFFCU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIH64ny2I%2BFbpMfD6%2BDkiU2nBTGRA9ReIHj8G4J77jpKKAiEAzxHYEOEFoSos4y7VaJVPlPTrC7CTrW%2Fib0e1aJE5Qzsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBOZWj%2F6xRP2j4xmHCrcA5nqqdBq%2FhzVZLix9LgQuB3hg4S4mJAGp3WQ5JHfQ%2B56m49a%2Fodp6CR5Y5DzXPXbIm5MeahlH43K3%2BgyzHcs8GTP0b80M4g62jUJ5A9a%2FKp92JIC0PzrMBuG%2BbqOaI2CVeErd0ooFQ228nKQTYx0Zg5ACvmcbSAY3YyEX7GNzKbdfsJuauG15bmVFPXvnlpTaKOxFjED3Qf7QSYQTCqEJSP2HHL84dp%2BFcu17A6Ixy%2B9Mteb5f23syt%2FX9DZ1gjFAFHebgGZtY8IQBde23DZJyk239WuaW1nlEM4T3itagQa7gsYcpvPd4%2BrN%2F%2FkdytHM%2BHbtA597yH9z%2FDhQftegI2s1TF3Zt7z0Gmw4PuUzS6uxCm8QWgpPV3kNOKIYmC2r9q%2FTWvlexSna9zm7cIQwnYZdXphlujDk94s4SRKVla7MGwWPiqIQSKCixbYhErOgoV5U18R4EKW%2BOXRqMaUnDM6yzjmzAczT%2BD2ZArmZ5iFOo8Duqk%2FlvsWJR4gQudzVYUnuN4qu7MCubuDz4mOyrvlmHBAkP%2F9Sia9QBefGogBZdWIWa0Y9urSyYP1kg3g0IKBxMXSx2WQPgMWH2UGiCYcD1Zoi0w9cqUXKaSYdev79u59tshnDX79QaacMLno%2BMQGOqUBtenWRvkIZhsNObP6Zrkuy4pIrzi84RlYr8RGZzjFQycuKPpklBZl3NjkWKSXrI2SrzeD%2BBginRryrfNI5Nb3sNo24oOUUqzdTAqarcXjrR4TDQecJsJMBiBbCgY7%2BOb2zZWq2bwcwTYorEUBLNZHUJiJxwMglJJrGQnXCnVdNeEYa1KBNuQb7NYRPhZelROXiUMd2Czha2TCbubz7Teqn2FTrvmE&X-Amz-Signature=f25fafe7aa11767b4f0b391c4ec408aa71dbe9c419ff320664228ec8c01b0ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CAFFFCU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIH64ny2I%2BFbpMfD6%2BDkiU2nBTGRA9ReIHj8G4J77jpKKAiEAzxHYEOEFoSos4y7VaJVPlPTrC7CTrW%2Fib0e1aJE5Qzsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBOZWj%2F6xRP2j4xmHCrcA5nqqdBq%2FhzVZLix9LgQuB3hg4S4mJAGp3WQ5JHfQ%2B56m49a%2Fodp6CR5Y5DzXPXbIm5MeahlH43K3%2BgyzHcs8GTP0b80M4g62jUJ5A9a%2FKp92JIC0PzrMBuG%2BbqOaI2CVeErd0ooFQ228nKQTYx0Zg5ACvmcbSAY3YyEX7GNzKbdfsJuauG15bmVFPXvnlpTaKOxFjED3Qf7QSYQTCqEJSP2HHL84dp%2BFcu17A6Ixy%2B9Mteb5f23syt%2FX9DZ1gjFAFHebgGZtY8IQBde23DZJyk239WuaW1nlEM4T3itagQa7gsYcpvPd4%2BrN%2F%2FkdytHM%2BHbtA597yH9z%2FDhQftegI2s1TF3Zt7z0Gmw4PuUzS6uxCm8QWgpPV3kNOKIYmC2r9q%2FTWvlexSna9zm7cIQwnYZdXphlujDk94s4SRKVla7MGwWPiqIQSKCixbYhErOgoV5U18R4EKW%2BOXRqMaUnDM6yzjmzAczT%2BD2ZArmZ5iFOo8Duqk%2FlvsWJR4gQudzVYUnuN4qu7MCubuDz4mOyrvlmHBAkP%2F9Sia9QBefGogBZdWIWa0Y9urSyYP1kg3g0IKBxMXSx2WQPgMWH2UGiCYcD1Zoi0w9cqUXKaSYdev79u59tshnDX79QaacMLno%2BMQGOqUBtenWRvkIZhsNObP6Zrkuy4pIrzi84RlYr8RGZzjFQycuKPpklBZl3NjkWKSXrI2SrzeD%2BBginRryrfNI5Nb3sNo24oOUUqzdTAqarcXjrR4TDQecJsJMBiBbCgY7%2BOb2zZWq2bwcwTYorEUBLNZHUJiJxwMglJJrGQnXCnVdNeEYa1KBNuQb7NYRPhZelROXiUMd2Czha2TCbubz7Teqn2FTrvmE&X-Amz-Signature=d65d238a8e69b669ed744c917b3d6f60b26a77c3d3f27b1b0827a255ab007579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CAFFFCU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIH64ny2I%2BFbpMfD6%2BDkiU2nBTGRA9ReIHj8G4J77jpKKAiEAzxHYEOEFoSos4y7VaJVPlPTrC7CTrW%2Fib0e1aJE5Qzsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBOZWj%2F6xRP2j4xmHCrcA5nqqdBq%2FhzVZLix9LgQuB3hg4S4mJAGp3WQ5JHfQ%2B56m49a%2Fodp6CR5Y5DzXPXbIm5MeahlH43K3%2BgyzHcs8GTP0b80M4g62jUJ5A9a%2FKp92JIC0PzrMBuG%2BbqOaI2CVeErd0ooFQ228nKQTYx0Zg5ACvmcbSAY3YyEX7GNzKbdfsJuauG15bmVFPXvnlpTaKOxFjED3Qf7QSYQTCqEJSP2HHL84dp%2BFcu17A6Ixy%2B9Mteb5f23syt%2FX9DZ1gjFAFHebgGZtY8IQBde23DZJyk239WuaW1nlEM4T3itagQa7gsYcpvPd4%2BrN%2F%2FkdytHM%2BHbtA597yH9z%2FDhQftegI2s1TF3Zt7z0Gmw4PuUzS6uxCm8QWgpPV3kNOKIYmC2r9q%2FTWvlexSna9zm7cIQwnYZdXphlujDk94s4SRKVla7MGwWPiqIQSKCixbYhErOgoV5U18R4EKW%2BOXRqMaUnDM6yzjmzAczT%2BD2ZArmZ5iFOo8Duqk%2FlvsWJR4gQudzVYUnuN4qu7MCubuDz4mOyrvlmHBAkP%2F9Sia9QBefGogBZdWIWa0Y9urSyYP1kg3g0IKBxMXSx2WQPgMWH2UGiCYcD1Zoi0w9cqUXKaSYdev79u59tshnDX79QaacMLno%2BMQGOqUBtenWRvkIZhsNObP6Zrkuy4pIrzi84RlYr8RGZzjFQycuKPpklBZl3NjkWKSXrI2SrzeD%2BBginRryrfNI5Nb3sNo24oOUUqzdTAqarcXjrR4TDQecJsJMBiBbCgY7%2BOb2zZWq2bwcwTYorEUBLNZHUJiJxwMglJJrGQnXCnVdNeEYa1KBNuQb7NYRPhZelROXiUMd2Czha2TCbubz7Teqn2FTrvmE&X-Amz-Signature=7835ccca58779fe2c888865061d28d693764738aa6a5699e0dd42381b6c10ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CAFFFCU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIH64ny2I%2BFbpMfD6%2BDkiU2nBTGRA9ReIHj8G4J77jpKKAiEAzxHYEOEFoSos4y7VaJVPlPTrC7CTrW%2Fib0e1aJE5Qzsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBOZWj%2F6xRP2j4xmHCrcA5nqqdBq%2FhzVZLix9LgQuB3hg4S4mJAGp3WQ5JHfQ%2B56m49a%2Fodp6CR5Y5DzXPXbIm5MeahlH43K3%2BgyzHcs8GTP0b80M4g62jUJ5A9a%2FKp92JIC0PzrMBuG%2BbqOaI2CVeErd0ooFQ228nKQTYx0Zg5ACvmcbSAY3YyEX7GNzKbdfsJuauG15bmVFPXvnlpTaKOxFjED3Qf7QSYQTCqEJSP2HHL84dp%2BFcu17A6Ixy%2B9Mteb5f23syt%2FX9DZ1gjFAFHebgGZtY8IQBde23DZJyk239WuaW1nlEM4T3itagQa7gsYcpvPd4%2BrN%2F%2FkdytHM%2BHbtA597yH9z%2FDhQftegI2s1TF3Zt7z0Gmw4PuUzS6uxCm8QWgpPV3kNOKIYmC2r9q%2FTWvlexSna9zm7cIQwnYZdXphlujDk94s4SRKVla7MGwWPiqIQSKCixbYhErOgoV5U18R4EKW%2BOXRqMaUnDM6yzjmzAczT%2BD2ZArmZ5iFOo8Duqk%2FlvsWJR4gQudzVYUnuN4qu7MCubuDz4mOyrvlmHBAkP%2F9Sia9QBefGogBZdWIWa0Y9urSyYP1kg3g0IKBxMXSx2WQPgMWH2UGiCYcD1Zoi0w9cqUXKaSYdev79u59tshnDX79QaacMLno%2BMQGOqUBtenWRvkIZhsNObP6Zrkuy4pIrzi84RlYr8RGZzjFQycuKPpklBZl3NjkWKSXrI2SrzeD%2BBginRryrfNI5Nb3sNo24oOUUqzdTAqarcXjrR4TDQecJsJMBiBbCgY7%2BOb2zZWq2bwcwTYorEUBLNZHUJiJxwMglJJrGQnXCnVdNeEYa1KBNuQb7NYRPhZelROXiUMd2Czha2TCbubz7Teqn2FTrvmE&X-Amz-Signature=7cd721f292a73ef4e0892e477ae07a82e6076af4eb8489ca76d1f5d648ac4c07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CAFFFCU%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T190928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIH64ny2I%2BFbpMfD6%2BDkiU2nBTGRA9ReIHj8G4J77jpKKAiEAzxHYEOEFoSos4y7VaJVPlPTrC7CTrW%2Fib0e1aJE5Qzsq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBOZWj%2F6xRP2j4xmHCrcA5nqqdBq%2FhzVZLix9LgQuB3hg4S4mJAGp3WQ5JHfQ%2B56m49a%2Fodp6CR5Y5DzXPXbIm5MeahlH43K3%2BgyzHcs8GTP0b80M4g62jUJ5A9a%2FKp92JIC0PzrMBuG%2BbqOaI2CVeErd0ooFQ228nKQTYx0Zg5ACvmcbSAY3YyEX7GNzKbdfsJuauG15bmVFPXvnlpTaKOxFjED3Qf7QSYQTCqEJSP2HHL84dp%2BFcu17A6Ixy%2B9Mteb5f23syt%2FX9DZ1gjFAFHebgGZtY8IQBde23DZJyk239WuaW1nlEM4T3itagQa7gsYcpvPd4%2BrN%2F%2FkdytHM%2BHbtA597yH9z%2FDhQftegI2s1TF3Zt7z0Gmw4PuUzS6uxCm8QWgpPV3kNOKIYmC2r9q%2FTWvlexSna9zm7cIQwnYZdXphlujDk94s4SRKVla7MGwWPiqIQSKCixbYhErOgoV5U18R4EKW%2BOXRqMaUnDM6yzjmzAczT%2BD2ZArmZ5iFOo8Duqk%2FlvsWJR4gQudzVYUnuN4qu7MCubuDz4mOyrvlmHBAkP%2F9Sia9QBefGogBZdWIWa0Y9urSyYP1kg3g0IKBxMXSx2WQPgMWH2UGiCYcD1Zoi0w9cqUXKaSYdev79u59tshnDX79QaacMLno%2BMQGOqUBtenWRvkIZhsNObP6Zrkuy4pIrzi84RlYr8RGZzjFQycuKPpklBZl3NjkWKSXrI2SrzeD%2BBginRryrfNI5Nb3sNo24oOUUqzdTAqarcXjrR4TDQecJsJMBiBbCgY7%2BOb2zZWq2bwcwTYorEUBLNZHUJiJxwMglJJrGQnXCnVdNeEYa1KBNuQb7NYRPhZelROXiUMd2Czha2TCbubz7Teqn2FTrvmE&X-Amz-Signature=5e34db6c8e752d8f0bc287e1fe547c6d3c548d53a4e01432a77c28b57ba7fe66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
