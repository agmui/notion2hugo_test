---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUXGBJ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIAdtWwN%2BQdziXPIHuxwqH%2F0mBY26KVzT7uvcV1m9096hAiBQVYYj0onozV8pDw4XqYmlR2xBv6Dm%2B4EKXh0BiK6aZCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2BBuyzBT7ZL9gdRJ%2FKtwDT11UEdG4hioExspspBToOZ3EnkbEwT9OOoWBekSE0hl%2BkzjlEU3m2t00d8UCmJRUUOSRGXqjyZrAd5mSmIPsXHLpM6%2FL5pygkw55JRvYheckuo5wKq0n6f3Kf%2F%2FggJ9uufns%2BNkEJVfWYOBdvATNwlwdW4kMXafZVhA0FXnJsPbQ199N4uDYJc5LasPHz1Moa6aF4cpHvn0A9odRRLap2UvlMq%2BYAwV8hZaBR87tEzlgCBRhEA4E30YlnyULya2%2F7ueCDk2bJUMnDqAyg7PIuPmhL7Y1AYXd0eUsRbYdLet%2BjNE1L3SNpZuMDlLvqRP3cDR5XsTD4ooX9kmu9Rosm6oDDg8hbxvC%2FTCJl%2B8Ayjd0JNvqJ4xIq0IF%2BZU99Fp77ljwiPbTFnnNMk0r5Vdfgn%2FgbZ8uYy3jyssi70kjSEdmyK%2FFARgWfdgrUo7ht3jOdH87gLB7rM9xJ24lS3asiS3hKY2uLdISl8RVrFWE9xIpzBd9HSgoLV%2BhGQbvhkTKcQ2wcWUDGT0pOcN6bdavIB5uINrtBIw7B42rumak0vui8V8WJNHdNTQKQXb9C5kueX%2B3FUzqUQb14RnIj5PXziRdQSyV3fEjCk2gHtPNgktS%2FiA9d3RKTK4Atwcw9NOLxAY6pgGGKgYhQYwqorYkt7zJjriYu%2FV4qDEHSFPRpG21yf7Z%2FBnHd%2FWkHoKtW5KnzT2BdF8p3KshT53AZwv4gIyQyh3Ebx7%2F2tYaKXEUgRAmG95S0nOEnMdxoKpb9R%2Fep5EEygjqGNIaPYAxcX4BKEEGYoXy8ru9zfvUIhhKkq8wbrKiZM4z7yHVRKIBccYgu9VEe9XhCRWflxF8pkh3SWe9RGOuNiD7z4iv&X-Amz-Signature=58e34ff152870847806d0400f1a9cd39657f9f2cfcc7dd27e28bb10e926342b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

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

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUXGBJ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIAdtWwN%2BQdziXPIHuxwqH%2F0mBY26KVzT7uvcV1m9096hAiBQVYYj0onozV8pDw4XqYmlR2xBv6Dm%2B4EKXh0BiK6aZCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2BBuyzBT7ZL9gdRJ%2FKtwDT11UEdG4hioExspspBToOZ3EnkbEwT9OOoWBekSE0hl%2BkzjlEU3m2t00d8UCmJRUUOSRGXqjyZrAd5mSmIPsXHLpM6%2FL5pygkw55JRvYheckuo5wKq0n6f3Kf%2F%2FggJ9uufns%2BNkEJVfWYOBdvATNwlwdW4kMXafZVhA0FXnJsPbQ199N4uDYJc5LasPHz1Moa6aF4cpHvn0A9odRRLap2UvlMq%2BYAwV8hZaBR87tEzlgCBRhEA4E30YlnyULya2%2F7ueCDk2bJUMnDqAyg7PIuPmhL7Y1AYXd0eUsRbYdLet%2BjNE1L3SNpZuMDlLvqRP3cDR5XsTD4ooX9kmu9Rosm6oDDg8hbxvC%2FTCJl%2B8Ayjd0JNvqJ4xIq0IF%2BZU99Fp77ljwiPbTFnnNMk0r5Vdfgn%2FgbZ8uYy3jyssi70kjSEdmyK%2FFARgWfdgrUo7ht3jOdH87gLB7rM9xJ24lS3asiS3hKY2uLdISl8RVrFWE9xIpzBd9HSgoLV%2BhGQbvhkTKcQ2wcWUDGT0pOcN6bdavIB5uINrtBIw7B42rumak0vui8V8WJNHdNTQKQXb9C5kueX%2B3FUzqUQb14RnIj5PXziRdQSyV3fEjCk2gHtPNgktS%2FiA9d3RKTK4Atwcw9NOLxAY6pgGGKgYhQYwqorYkt7zJjriYu%2FV4qDEHSFPRpG21yf7Z%2FBnHd%2FWkHoKtW5KnzT2BdF8p3KshT53AZwv4gIyQyh3Ebx7%2F2tYaKXEUgRAmG95S0nOEnMdxoKpb9R%2Fep5EEygjqGNIaPYAxcX4BKEEGYoXy8ru9zfvUIhhKkq8wbrKiZM4z7yHVRKIBccYgu9VEe9XhCRWflxF8pkh3SWe9RGOuNiD7z4iv&X-Amz-Signature=4c91a60ce6788a740ef666313b7b86f246c2cf3b87fafdbad8e7061bacefc67c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUXGBJ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIAdtWwN%2BQdziXPIHuxwqH%2F0mBY26KVzT7uvcV1m9096hAiBQVYYj0onozV8pDw4XqYmlR2xBv6Dm%2B4EKXh0BiK6aZCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2BBuyzBT7ZL9gdRJ%2FKtwDT11UEdG4hioExspspBToOZ3EnkbEwT9OOoWBekSE0hl%2BkzjlEU3m2t00d8UCmJRUUOSRGXqjyZrAd5mSmIPsXHLpM6%2FL5pygkw55JRvYheckuo5wKq0n6f3Kf%2F%2FggJ9uufns%2BNkEJVfWYOBdvATNwlwdW4kMXafZVhA0FXnJsPbQ199N4uDYJc5LasPHz1Moa6aF4cpHvn0A9odRRLap2UvlMq%2BYAwV8hZaBR87tEzlgCBRhEA4E30YlnyULya2%2F7ueCDk2bJUMnDqAyg7PIuPmhL7Y1AYXd0eUsRbYdLet%2BjNE1L3SNpZuMDlLvqRP3cDR5XsTD4ooX9kmu9Rosm6oDDg8hbxvC%2FTCJl%2B8Ayjd0JNvqJ4xIq0IF%2BZU99Fp77ljwiPbTFnnNMk0r5Vdfgn%2FgbZ8uYy3jyssi70kjSEdmyK%2FFARgWfdgrUo7ht3jOdH87gLB7rM9xJ24lS3asiS3hKY2uLdISl8RVrFWE9xIpzBd9HSgoLV%2BhGQbvhkTKcQ2wcWUDGT0pOcN6bdavIB5uINrtBIw7B42rumak0vui8V8WJNHdNTQKQXb9C5kueX%2B3FUzqUQb14RnIj5PXziRdQSyV3fEjCk2gHtPNgktS%2FiA9d3RKTK4Atwcw9NOLxAY6pgGGKgYhQYwqorYkt7zJjriYu%2FV4qDEHSFPRpG21yf7Z%2FBnHd%2FWkHoKtW5KnzT2BdF8p3KshT53AZwv4gIyQyh3Ebx7%2F2tYaKXEUgRAmG95S0nOEnMdxoKpb9R%2Fep5EEygjqGNIaPYAxcX4BKEEGYoXy8ru9zfvUIhhKkq8wbrKiZM4z7yHVRKIBccYgu9VEe9XhCRWflxF8pkh3SWe9RGOuNiD7z4iv&X-Amz-Signature=3cf176681ca53f4efa264c737bff39c91c7ebef78ab2b1244b4c7411cc5f63e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUXGBJ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIAdtWwN%2BQdziXPIHuxwqH%2F0mBY26KVzT7uvcV1m9096hAiBQVYYj0onozV8pDw4XqYmlR2xBv6Dm%2B4EKXh0BiK6aZCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2BBuyzBT7ZL9gdRJ%2FKtwDT11UEdG4hioExspspBToOZ3EnkbEwT9OOoWBekSE0hl%2BkzjlEU3m2t00d8UCmJRUUOSRGXqjyZrAd5mSmIPsXHLpM6%2FL5pygkw55JRvYheckuo5wKq0n6f3Kf%2F%2FggJ9uufns%2BNkEJVfWYOBdvATNwlwdW4kMXafZVhA0FXnJsPbQ199N4uDYJc5LasPHz1Moa6aF4cpHvn0A9odRRLap2UvlMq%2BYAwV8hZaBR87tEzlgCBRhEA4E30YlnyULya2%2F7ueCDk2bJUMnDqAyg7PIuPmhL7Y1AYXd0eUsRbYdLet%2BjNE1L3SNpZuMDlLvqRP3cDR5XsTD4ooX9kmu9Rosm6oDDg8hbxvC%2FTCJl%2B8Ayjd0JNvqJ4xIq0IF%2BZU99Fp77ljwiPbTFnnNMk0r5Vdfgn%2FgbZ8uYy3jyssi70kjSEdmyK%2FFARgWfdgrUo7ht3jOdH87gLB7rM9xJ24lS3asiS3hKY2uLdISl8RVrFWE9xIpzBd9HSgoLV%2BhGQbvhkTKcQ2wcWUDGT0pOcN6bdavIB5uINrtBIw7B42rumak0vui8V8WJNHdNTQKQXb9C5kueX%2B3FUzqUQb14RnIj5PXziRdQSyV3fEjCk2gHtPNgktS%2FiA9d3RKTK4Atwcw9NOLxAY6pgGGKgYhQYwqorYkt7zJjriYu%2FV4qDEHSFPRpG21yf7Z%2FBnHd%2FWkHoKtW5KnzT2BdF8p3KshT53AZwv4gIyQyh3Ebx7%2F2tYaKXEUgRAmG95S0nOEnMdxoKpb9R%2Fep5EEygjqGNIaPYAxcX4BKEEGYoXy8ru9zfvUIhhKkq8wbrKiZM4z7yHVRKIBccYgu9VEe9XhCRWflxF8pkh3SWe9RGOuNiD7z4iv&X-Amz-Signature=2c4f07f0bf26321740ab8371c1a790b85084b0b88124b8f54b7f9d34976636aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUXGBJ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIAdtWwN%2BQdziXPIHuxwqH%2F0mBY26KVzT7uvcV1m9096hAiBQVYYj0onozV8pDw4XqYmlR2xBv6Dm%2B4EKXh0BiK6aZCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2BBuyzBT7ZL9gdRJ%2FKtwDT11UEdG4hioExspspBToOZ3EnkbEwT9OOoWBekSE0hl%2BkzjlEU3m2t00d8UCmJRUUOSRGXqjyZrAd5mSmIPsXHLpM6%2FL5pygkw55JRvYheckuo5wKq0n6f3Kf%2F%2FggJ9uufns%2BNkEJVfWYOBdvATNwlwdW4kMXafZVhA0FXnJsPbQ199N4uDYJc5LasPHz1Moa6aF4cpHvn0A9odRRLap2UvlMq%2BYAwV8hZaBR87tEzlgCBRhEA4E30YlnyULya2%2F7ueCDk2bJUMnDqAyg7PIuPmhL7Y1AYXd0eUsRbYdLet%2BjNE1L3SNpZuMDlLvqRP3cDR5XsTD4ooX9kmu9Rosm6oDDg8hbxvC%2FTCJl%2B8Ayjd0JNvqJ4xIq0IF%2BZU99Fp77ljwiPbTFnnNMk0r5Vdfgn%2FgbZ8uYy3jyssi70kjSEdmyK%2FFARgWfdgrUo7ht3jOdH87gLB7rM9xJ24lS3asiS3hKY2uLdISl8RVrFWE9xIpzBd9HSgoLV%2BhGQbvhkTKcQ2wcWUDGT0pOcN6bdavIB5uINrtBIw7B42rumak0vui8V8WJNHdNTQKQXb9C5kueX%2B3FUzqUQb14RnIj5PXziRdQSyV3fEjCk2gHtPNgktS%2FiA9d3RKTK4Atwcw9NOLxAY6pgGGKgYhQYwqorYkt7zJjriYu%2FV4qDEHSFPRpG21yf7Z%2FBnHd%2FWkHoKtW5KnzT2BdF8p3KshT53AZwv4gIyQyh3Ebx7%2F2tYaKXEUgRAmG95S0nOEnMdxoKpb9R%2Fep5EEygjqGNIaPYAxcX4BKEEGYoXy8ru9zfvUIhhKkq8wbrKiZM4z7yHVRKIBccYgu9VEe9XhCRWflxF8pkh3SWe9RGOuNiD7z4iv&X-Amz-Signature=b7d14c41870d727ad2b4543db455d500f3a25bb3b14ed040508f224af3919505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UUXGBJ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIAdtWwN%2BQdziXPIHuxwqH%2F0mBY26KVzT7uvcV1m9096hAiBQVYYj0onozV8pDw4XqYmlR2xBv6Dm%2B4EKXh0BiK6aZCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2BBuyzBT7ZL9gdRJ%2FKtwDT11UEdG4hioExspspBToOZ3EnkbEwT9OOoWBekSE0hl%2BkzjlEU3m2t00d8UCmJRUUOSRGXqjyZrAd5mSmIPsXHLpM6%2FL5pygkw55JRvYheckuo5wKq0n6f3Kf%2F%2FggJ9uufns%2BNkEJVfWYOBdvATNwlwdW4kMXafZVhA0FXnJsPbQ199N4uDYJc5LasPHz1Moa6aF4cpHvn0A9odRRLap2UvlMq%2BYAwV8hZaBR87tEzlgCBRhEA4E30YlnyULya2%2F7ueCDk2bJUMnDqAyg7PIuPmhL7Y1AYXd0eUsRbYdLet%2BjNE1L3SNpZuMDlLvqRP3cDR5XsTD4ooX9kmu9Rosm6oDDg8hbxvC%2FTCJl%2B8Ayjd0JNvqJ4xIq0IF%2BZU99Fp77ljwiPbTFnnNMk0r5Vdfgn%2FgbZ8uYy3jyssi70kjSEdmyK%2FFARgWfdgrUo7ht3jOdH87gLB7rM9xJ24lS3asiS3hKY2uLdISl8RVrFWE9xIpzBd9HSgoLV%2BhGQbvhkTKcQ2wcWUDGT0pOcN6bdavIB5uINrtBIw7B42rumak0vui8V8WJNHdNTQKQXb9C5kueX%2B3FUzqUQb14RnIj5PXziRdQSyV3fEjCk2gHtPNgktS%2FiA9d3RKTK4Atwcw9NOLxAY6pgGGKgYhQYwqorYkt7zJjriYu%2FV4qDEHSFPRpG21yf7Z%2FBnHd%2FWkHoKtW5KnzT2BdF8p3KshT53AZwv4gIyQyh3Ebx7%2F2tYaKXEUgRAmG95S0nOEnMdxoKpb9R%2Fep5EEygjqGNIaPYAxcX4BKEEGYoXy8ru9zfvUIhhKkq8wbrKiZM4z7yHVRKIBccYgu9VEe9XhCRWflxF8pkh3SWe9RGOuNiD7z4iv&X-Amz-Signature=8760d174c8af7765a61c369d3d547634ac38ff078aa45a0196cf63c8072ecc4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

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
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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

# Nav2 settings

TODO: change footprint?
