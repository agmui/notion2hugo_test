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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQBADKQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHtwmx101OEboTLMi8NIE6hQVl5ZWLwhP20LIJ6I4LSOAiBfWfJf4PT6OivH3lCJlDtpzshr%2BB0UbgRYF1RNcjrDDyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAiZ113YBYzBFerhyKtwDkMvOC%2BUbFXZWDGz7Wqij%2BgW57l74tt11pJ2BFpEuDPuIQAS1Qg23uCV1hP0kGQ0r9g77eTBZxLMgP7EfUo381NCXfORTXbjOa8mzWA7kaoO8rFPyfO%2F5b5fCRkoQWbFo3Hhd0Ql609XfBZPKYxe6QkGbuw2g%2BQLY26oqLrHF%2FqL7m16%2B2DfAE8HcNoZKFGW%2BQ2ooYrWyYjjYE9JnnkqwVOq5RhEyIxArjM8OofsW0IvFRW9B2ZaC1R2YX8nUQqMBHjIyejEf6QBRilkph4KSTKL9SOTQQtGbpnmvvuNNAjusL%2FmDcbBDVFX%2BB5QHeEK8VXT%2B21yuu%2Fc1Z6NgpVSWXkL36JKQpJy%2Fyjwls5TzeDqEDNz96oVy5AbhoypaPUuFsv6kLfh8sE8O1fbei92%2F9vEr76zzkxC9iXrPL58tkHX%2B%2F5Pm8vldQGYfPkpEpa%2FFi6W4WNK06mJbFYR6U4aYoa5kYo0VFzvxNsvmsK1AfzziffaVG8sEJVhmytTK63e%2FXz75FWj2IjijTKskKQBwB%2FjuWpz0%2F2s9LXpwRG9nWDkY36%2F%2BMsqv2SuMBrMKBOhTfqx96pfmXYjgekdGh8QN6qGEnezYOnRtpUP7aEjg5SnKJCPpbTtiya%2BlDgUw9JObxAY6pgEMCXM%2BenXRLtAr3Ge%2F1D6CSXr4%2Bs3iUkUnM5lpK1sPZddAu4P4vmhv09KV9s8q2A1Aljoe4VGmvetjRZGPeQlkZH%2FtntVztqnDslaXktsDUOZiDj2ipv1ruYS0QU6fDRFi9QE5qbBQZYG7wZFwvHmtYH4FfqjlxUZoX88eVN58OzdQghuEijiUHShgZUK8pXJyTkjXWcu3cQXfy4W%2F41B8D6lrMMNk&X-Amz-Signature=69eba089f36d6a1efcb22d3e2d259011b50af70253bca668229af31d4e2bac23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQBADKQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHtwmx101OEboTLMi8NIE6hQVl5ZWLwhP20LIJ6I4LSOAiBfWfJf4PT6OivH3lCJlDtpzshr%2BB0UbgRYF1RNcjrDDyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAiZ113YBYzBFerhyKtwDkMvOC%2BUbFXZWDGz7Wqij%2BgW57l74tt11pJ2BFpEuDPuIQAS1Qg23uCV1hP0kGQ0r9g77eTBZxLMgP7EfUo381NCXfORTXbjOa8mzWA7kaoO8rFPyfO%2F5b5fCRkoQWbFo3Hhd0Ql609XfBZPKYxe6QkGbuw2g%2BQLY26oqLrHF%2FqL7m16%2B2DfAE8HcNoZKFGW%2BQ2ooYrWyYjjYE9JnnkqwVOq5RhEyIxArjM8OofsW0IvFRW9B2ZaC1R2YX8nUQqMBHjIyejEf6QBRilkph4KSTKL9SOTQQtGbpnmvvuNNAjusL%2FmDcbBDVFX%2BB5QHeEK8VXT%2B21yuu%2Fc1Z6NgpVSWXkL36JKQpJy%2Fyjwls5TzeDqEDNz96oVy5AbhoypaPUuFsv6kLfh8sE8O1fbei92%2F9vEr76zzkxC9iXrPL58tkHX%2B%2F5Pm8vldQGYfPkpEpa%2FFi6W4WNK06mJbFYR6U4aYoa5kYo0VFzvxNsvmsK1AfzziffaVG8sEJVhmytTK63e%2FXz75FWj2IjijTKskKQBwB%2FjuWpz0%2F2s9LXpwRG9nWDkY36%2F%2BMsqv2SuMBrMKBOhTfqx96pfmXYjgekdGh8QN6qGEnezYOnRtpUP7aEjg5SnKJCPpbTtiya%2BlDgUw9JObxAY6pgEMCXM%2BenXRLtAr3Ge%2F1D6CSXr4%2Bs3iUkUnM5lpK1sPZddAu4P4vmhv09KV9s8q2A1Aljoe4VGmvetjRZGPeQlkZH%2FtntVztqnDslaXktsDUOZiDj2ipv1ruYS0QU6fDRFi9QE5qbBQZYG7wZFwvHmtYH4FfqjlxUZoX88eVN58OzdQghuEijiUHShgZUK8pXJyTkjXWcu3cQXfy4W%2F41B8D6lrMMNk&X-Amz-Signature=0a90ad099e6a485cf8534f40ee989508a7b88d5d67517b1cbbb6888ec936b4f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQBADKQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHtwmx101OEboTLMi8NIE6hQVl5ZWLwhP20LIJ6I4LSOAiBfWfJf4PT6OivH3lCJlDtpzshr%2BB0UbgRYF1RNcjrDDyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAiZ113YBYzBFerhyKtwDkMvOC%2BUbFXZWDGz7Wqij%2BgW57l74tt11pJ2BFpEuDPuIQAS1Qg23uCV1hP0kGQ0r9g77eTBZxLMgP7EfUo381NCXfORTXbjOa8mzWA7kaoO8rFPyfO%2F5b5fCRkoQWbFo3Hhd0Ql609XfBZPKYxe6QkGbuw2g%2BQLY26oqLrHF%2FqL7m16%2B2DfAE8HcNoZKFGW%2BQ2ooYrWyYjjYE9JnnkqwVOq5RhEyIxArjM8OofsW0IvFRW9B2ZaC1R2YX8nUQqMBHjIyejEf6QBRilkph4KSTKL9SOTQQtGbpnmvvuNNAjusL%2FmDcbBDVFX%2BB5QHeEK8VXT%2B21yuu%2Fc1Z6NgpVSWXkL36JKQpJy%2Fyjwls5TzeDqEDNz96oVy5AbhoypaPUuFsv6kLfh8sE8O1fbei92%2F9vEr76zzkxC9iXrPL58tkHX%2B%2F5Pm8vldQGYfPkpEpa%2FFi6W4WNK06mJbFYR6U4aYoa5kYo0VFzvxNsvmsK1AfzziffaVG8sEJVhmytTK63e%2FXz75FWj2IjijTKskKQBwB%2FjuWpz0%2F2s9LXpwRG9nWDkY36%2F%2BMsqv2SuMBrMKBOhTfqx96pfmXYjgekdGh8QN6qGEnezYOnRtpUP7aEjg5SnKJCPpbTtiya%2BlDgUw9JObxAY6pgEMCXM%2BenXRLtAr3Ge%2F1D6CSXr4%2Bs3iUkUnM5lpK1sPZddAu4P4vmhv09KV9s8q2A1Aljoe4VGmvetjRZGPeQlkZH%2FtntVztqnDslaXktsDUOZiDj2ipv1ruYS0QU6fDRFi9QE5qbBQZYG7wZFwvHmtYH4FfqjlxUZoX88eVN58OzdQghuEijiUHShgZUK8pXJyTkjXWcu3cQXfy4W%2F41B8D6lrMMNk&X-Amz-Signature=b6dfcdeba4a7191a4eb14dc689017e8648ee32604462b3f7ff9689aed9b89184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQBADKQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHtwmx101OEboTLMi8NIE6hQVl5ZWLwhP20LIJ6I4LSOAiBfWfJf4PT6OivH3lCJlDtpzshr%2BB0UbgRYF1RNcjrDDyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAiZ113YBYzBFerhyKtwDkMvOC%2BUbFXZWDGz7Wqij%2BgW57l74tt11pJ2BFpEuDPuIQAS1Qg23uCV1hP0kGQ0r9g77eTBZxLMgP7EfUo381NCXfORTXbjOa8mzWA7kaoO8rFPyfO%2F5b5fCRkoQWbFo3Hhd0Ql609XfBZPKYxe6QkGbuw2g%2BQLY26oqLrHF%2FqL7m16%2B2DfAE8HcNoZKFGW%2BQ2ooYrWyYjjYE9JnnkqwVOq5RhEyIxArjM8OofsW0IvFRW9B2ZaC1R2YX8nUQqMBHjIyejEf6QBRilkph4KSTKL9SOTQQtGbpnmvvuNNAjusL%2FmDcbBDVFX%2BB5QHeEK8VXT%2B21yuu%2Fc1Z6NgpVSWXkL36JKQpJy%2Fyjwls5TzeDqEDNz96oVy5AbhoypaPUuFsv6kLfh8sE8O1fbei92%2F9vEr76zzkxC9iXrPL58tkHX%2B%2F5Pm8vldQGYfPkpEpa%2FFi6W4WNK06mJbFYR6U4aYoa5kYo0VFzvxNsvmsK1AfzziffaVG8sEJVhmytTK63e%2FXz75FWj2IjijTKskKQBwB%2FjuWpz0%2F2s9LXpwRG9nWDkY36%2F%2BMsqv2SuMBrMKBOhTfqx96pfmXYjgekdGh8QN6qGEnezYOnRtpUP7aEjg5SnKJCPpbTtiya%2BlDgUw9JObxAY6pgEMCXM%2BenXRLtAr3Ge%2F1D6CSXr4%2Bs3iUkUnM5lpK1sPZddAu4P4vmhv09KV9s8q2A1Aljoe4VGmvetjRZGPeQlkZH%2FtntVztqnDslaXktsDUOZiDj2ipv1ruYS0QU6fDRFi9QE5qbBQZYG7wZFwvHmtYH4FfqjlxUZoX88eVN58OzdQghuEijiUHShgZUK8pXJyTkjXWcu3cQXfy4W%2F41B8D6lrMMNk&X-Amz-Signature=cb7dd9dcd88ec7a21955ec1d11a0d4d8a6b3baa9675df047d82d30705e83fd30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQBADKQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHtwmx101OEboTLMi8NIE6hQVl5ZWLwhP20LIJ6I4LSOAiBfWfJf4PT6OivH3lCJlDtpzshr%2BB0UbgRYF1RNcjrDDyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAiZ113YBYzBFerhyKtwDkMvOC%2BUbFXZWDGz7Wqij%2BgW57l74tt11pJ2BFpEuDPuIQAS1Qg23uCV1hP0kGQ0r9g77eTBZxLMgP7EfUo381NCXfORTXbjOa8mzWA7kaoO8rFPyfO%2F5b5fCRkoQWbFo3Hhd0Ql609XfBZPKYxe6QkGbuw2g%2BQLY26oqLrHF%2FqL7m16%2B2DfAE8HcNoZKFGW%2BQ2ooYrWyYjjYE9JnnkqwVOq5RhEyIxArjM8OofsW0IvFRW9B2ZaC1R2YX8nUQqMBHjIyejEf6QBRilkph4KSTKL9SOTQQtGbpnmvvuNNAjusL%2FmDcbBDVFX%2BB5QHeEK8VXT%2B21yuu%2Fc1Z6NgpVSWXkL36JKQpJy%2Fyjwls5TzeDqEDNz96oVy5AbhoypaPUuFsv6kLfh8sE8O1fbei92%2F9vEr76zzkxC9iXrPL58tkHX%2B%2F5Pm8vldQGYfPkpEpa%2FFi6W4WNK06mJbFYR6U4aYoa5kYo0VFzvxNsvmsK1AfzziffaVG8sEJVhmytTK63e%2FXz75FWj2IjijTKskKQBwB%2FjuWpz0%2F2s9LXpwRG9nWDkY36%2F%2BMsqv2SuMBrMKBOhTfqx96pfmXYjgekdGh8QN6qGEnezYOnRtpUP7aEjg5SnKJCPpbTtiya%2BlDgUw9JObxAY6pgEMCXM%2BenXRLtAr3Ge%2F1D6CSXr4%2Bs3iUkUnM5lpK1sPZddAu4P4vmhv09KV9s8q2A1Aljoe4VGmvetjRZGPeQlkZH%2FtntVztqnDslaXktsDUOZiDj2ipv1ruYS0QU6fDRFi9QE5qbBQZYG7wZFwvHmtYH4FfqjlxUZoX88eVN58OzdQghuEijiUHShgZUK8pXJyTkjXWcu3cQXfy4W%2F41B8D6lrMMNk&X-Amz-Signature=4d7d7c00b095d10b544fd20afcccccb4be56ac55b5de0f2eb0ed358aa8262e60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQBADKQG%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHtwmx101OEboTLMi8NIE6hQVl5ZWLwhP20LIJ6I4LSOAiBfWfJf4PT6OivH3lCJlDtpzshr%2BB0UbgRYF1RNcjrDDyqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAiZ113YBYzBFerhyKtwDkMvOC%2BUbFXZWDGz7Wqij%2BgW57l74tt11pJ2BFpEuDPuIQAS1Qg23uCV1hP0kGQ0r9g77eTBZxLMgP7EfUo381NCXfORTXbjOa8mzWA7kaoO8rFPyfO%2F5b5fCRkoQWbFo3Hhd0Ql609XfBZPKYxe6QkGbuw2g%2BQLY26oqLrHF%2FqL7m16%2B2DfAE8HcNoZKFGW%2BQ2ooYrWyYjjYE9JnnkqwVOq5RhEyIxArjM8OofsW0IvFRW9B2ZaC1R2YX8nUQqMBHjIyejEf6QBRilkph4KSTKL9SOTQQtGbpnmvvuNNAjusL%2FmDcbBDVFX%2BB5QHeEK8VXT%2B21yuu%2Fc1Z6NgpVSWXkL36JKQpJy%2Fyjwls5TzeDqEDNz96oVy5AbhoypaPUuFsv6kLfh8sE8O1fbei92%2F9vEr76zzkxC9iXrPL58tkHX%2B%2F5Pm8vldQGYfPkpEpa%2FFi6W4WNK06mJbFYR6U4aYoa5kYo0VFzvxNsvmsK1AfzziffaVG8sEJVhmytTK63e%2FXz75FWj2IjijTKskKQBwB%2FjuWpz0%2F2s9LXpwRG9nWDkY36%2F%2BMsqv2SuMBrMKBOhTfqx96pfmXYjgekdGh8QN6qGEnezYOnRtpUP7aEjg5SnKJCPpbTtiya%2BlDgUw9JObxAY6pgEMCXM%2BenXRLtAr3Ge%2F1D6CSXr4%2Bs3iUkUnM5lpK1sPZddAu4P4vmhv09KV9s8q2A1Aljoe4VGmvetjRZGPeQlkZH%2FtntVztqnDslaXktsDUOZiDj2ipv1ruYS0QU6fDRFi9QE5qbBQZYG7wZFwvHmtYH4FfqjlxUZoX88eVN58OzdQghuEijiUHShgZUK8pXJyTkjXWcu3cQXfy4W%2F41B8D6lrMMNk&X-Amz-Signature=c8c7b67e2583e559a803f99a31b865149a2969ed671d5ab7df5f7bb610b31a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
