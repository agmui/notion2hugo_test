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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDFF5W6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEC27MuwCJ1vjoMQX3eVeUBjHvC0HbzQQoppY7dehTgbAiAqW59gcjC2ay0FmA6Eb4Oobt5rQwKss2yx51As1eEkCCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMI1h96Uvm6ouymZJmKtwDoykWpQ8cDxq7l6kIxp5Ef36LtbD6YpsLa49KNze8oPLEiI8lpqi7pMXo0wy5h%2BAyVWBpu4GthJQ3Gp0LOpCajhC5NE6FxqWrIDImp4ewpsrGbwHH4ky2vSVHe9dfkvB6XL76w7xI%2FUP3gFhG9IMvXRm4NVekjsoqb01Xh5aJ9ZBlwGoQoZroUo8NkeDjIT898NDDMGoPLaQEMBj%2BW3y33I6rdInwKHB8dn0I05bnIhUPTfVFVrJnHZuBK%2BfV8er8seMlAUaEEKTill8ItTw0QAArZ7ThmlKe9%2F9DnrzyYTtLubVBqOaB4g5t1P%2BabfYkdeDMGxdjZuvMAYXV89YgviJYQuTQh2lhwbdT8CYz55TZ5RqRMPP%2FZH%2FMnsprV59v4GaQTbQMoqzf%2FOGMhNpm5jZcvIh20TMEGbCMNIzRr9NOTa7uT04z4Uw1ptjM5XE5lGDTL5C1mhgAQQu%2FuECGLhwLv9HS%2FolgKB9qVn67TmbHZpud7i8Q6H4GD%2Bbdi0VvbUePEqOzuW7LxgwSmEI%2BTp0nBQUsivyrC%2FPcB%2By1U36qaloE0xRq0ckwzPtXfzHBsvk4owaGfdIV09eBvxV1tZB607%2BtZKHBf2rYXNdaKzeBHczBKn1jxP3OzrIwzN6XxAY6pgEg9WgMkB1pdzMknPMRzHYNYlKPvADFcHm7yyKLfWGt5LLnV27TkfA9lfPewZP53mzXPMD8OVsJ6wdDlLGLV%2FyeJI2TSCg%2BmtSFumx7UTkPXh3BqGbUShx29k3xqwRYfyQlX0oH4nQCmC5AzNkOAO7IAvNZN2mewf6QWSa7Kg8HFnPHfcZFQC2GDzFYR6rw8FA4nqJK49HhS1C%2Fdgi3eVVOa%2FY7rcxA&X-Amz-Signature=405df912466c7cb32f7ac8dbad4a10e041b54948e8c9bd319c36a2025fcd0069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDFF5W6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEC27MuwCJ1vjoMQX3eVeUBjHvC0HbzQQoppY7dehTgbAiAqW59gcjC2ay0FmA6Eb4Oobt5rQwKss2yx51As1eEkCCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMI1h96Uvm6ouymZJmKtwDoykWpQ8cDxq7l6kIxp5Ef36LtbD6YpsLa49KNze8oPLEiI8lpqi7pMXo0wy5h%2BAyVWBpu4GthJQ3Gp0LOpCajhC5NE6FxqWrIDImp4ewpsrGbwHH4ky2vSVHe9dfkvB6XL76w7xI%2FUP3gFhG9IMvXRm4NVekjsoqb01Xh5aJ9ZBlwGoQoZroUo8NkeDjIT898NDDMGoPLaQEMBj%2BW3y33I6rdInwKHB8dn0I05bnIhUPTfVFVrJnHZuBK%2BfV8er8seMlAUaEEKTill8ItTw0QAArZ7ThmlKe9%2F9DnrzyYTtLubVBqOaB4g5t1P%2BabfYkdeDMGxdjZuvMAYXV89YgviJYQuTQh2lhwbdT8CYz55TZ5RqRMPP%2FZH%2FMnsprV59v4GaQTbQMoqzf%2FOGMhNpm5jZcvIh20TMEGbCMNIzRr9NOTa7uT04z4Uw1ptjM5XE5lGDTL5C1mhgAQQu%2FuECGLhwLv9HS%2FolgKB9qVn67TmbHZpud7i8Q6H4GD%2Bbdi0VvbUePEqOzuW7LxgwSmEI%2BTp0nBQUsivyrC%2FPcB%2By1U36qaloE0xRq0ckwzPtXfzHBsvk4owaGfdIV09eBvxV1tZB607%2BtZKHBf2rYXNdaKzeBHczBKn1jxP3OzrIwzN6XxAY6pgEg9WgMkB1pdzMknPMRzHYNYlKPvADFcHm7yyKLfWGt5LLnV27TkfA9lfPewZP53mzXPMD8OVsJ6wdDlLGLV%2FyeJI2TSCg%2BmtSFumx7UTkPXh3BqGbUShx29k3xqwRYfyQlX0oH4nQCmC5AzNkOAO7IAvNZN2mewf6QWSa7Kg8HFnPHfcZFQC2GDzFYR6rw8FA4nqJK49HhS1C%2Fdgi3eVVOa%2FY7rcxA&X-Amz-Signature=8d7a9f7dbfd30ee14c6cc4c40fa58c8d5590396caa4f1f0b50351de7ee6836ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDFF5W6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEC27MuwCJ1vjoMQX3eVeUBjHvC0HbzQQoppY7dehTgbAiAqW59gcjC2ay0FmA6Eb4Oobt5rQwKss2yx51As1eEkCCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMI1h96Uvm6ouymZJmKtwDoykWpQ8cDxq7l6kIxp5Ef36LtbD6YpsLa49KNze8oPLEiI8lpqi7pMXo0wy5h%2BAyVWBpu4GthJQ3Gp0LOpCajhC5NE6FxqWrIDImp4ewpsrGbwHH4ky2vSVHe9dfkvB6XL76w7xI%2FUP3gFhG9IMvXRm4NVekjsoqb01Xh5aJ9ZBlwGoQoZroUo8NkeDjIT898NDDMGoPLaQEMBj%2BW3y33I6rdInwKHB8dn0I05bnIhUPTfVFVrJnHZuBK%2BfV8er8seMlAUaEEKTill8ItTw0QAArZ7ThmlKe9%2F9DnrzyYTtLubVBqOaB4g5t1P%2BabfYkdeDMGxdjZuvMAYXV89YgviJYQuTQh2lhwbdT8CYz55TZ5RqRMPP%2FZH%2FMnsprV59v4GaQTbQMoqzf%2FOGMhNpm5jZcvIh20TMEGbCMNIzRr9NOTa7uT04z4Uw1ptjM5XE5lGDTL5C1mhgAQQu%2FuECGLhwLv9HS%2FolgKB9qVn67TmbHZpud7i8Q6H4GD%2Bbdi0VvbUePEqOzuW7LxgwSmEI%2BTp0nBQUsivyrC%2FPcB%2By1U36qaloE0xRq0ckwzPtXfzHBsvk4owaGfdIV09eBvxV1tZB607%2BtZKHBf2rYXNdaKzeBHczBKn1jxP3OzrIwzN6XxAY6pgEg9WgMkB1pdzMknPMRzHYNYlKPvADFcHm7yyKLfWGt5LLnV27TkfA9lfPewZP53mzXPMD8OVsJ6wdDlLGLV%2FyeJI2TSCg%2BmtSFumx7UTkPXh3BqGbUShx29k3xqwRYfyQlX0oH4nQCmC5AzNkOAO7IAvNZN2mewf6QWSa7Kg8HFnPHfcZFQC2GDzFYR6rw8FA4nqJK49HhS1C%2Fdgi3eVVOa%2FY7rcxA&X-Amz-Signature=b445191b6e812e19bf789b64ba03a7dfbdb4d0798050ca2b2b99edd8654e06a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDFF5W6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEC27MuwCJ1vjoMQX3eVeUBjHvC0HbzQQoppY7dehTgbAiAqW59gcjC2ay0FmA6Eb4Oobt5rQwKss2yx51As1eEkCCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMI1h96Uvm6ouymZJmKtwDoykWpQ8cDxq7l6kIxp5Ef36LtbD6YpsLa49KNze8oPLEiI8lpqi7pMXo0wy5h%2BAyVWBpu4GthJQ3Gp0LOpCajhC5NE6FxqWrIDImp4ewpsrGbwHH4ky2vSVHe9dfkvB6XL76w7xI%2FUP3gFhG9IMvXRm4NVekjsoqb01Xh5aJ9ZBlwGoQoZroUo8NkeDjIT898NDDMGoPLaQEMBj%2BW3y33I6rdInwKHB8dn0I05bnIhUPTfVFVrJnHZuBK%2BfV8er8seMlAUaEEKTill8ItTw0QAArZ7ThmlKe9%2F9DnrzyYTtLubVBqOaB4g5t1P%2BabfYkdeDMGxdjZuvMAYXV89YgviJYQuTQh2lhwbdT8CYz55TZ5RqRMPP%2FZH%2FMnsprV59v4GaQTbQMoqzf%2FOGMhNpm5jZcvIh20TMEGbCMNIzRr9NOTa7uT04z4Uw1ptjM5XE5lGDTL5C1mhgAQQu%2FuECGLhwLv9HS%2FolgKB9qVn67TmbHZpud7i8Q6H4GD%2Bbdi0VvbUePEqOzuW7LxgwSmEI%2BTp0nBQUsivyrC%2FPcB%2By1U36qaloE0xRq0ckwzPtXfzHBsvk4owaGfdIV09eBvxV1tZB607%2BtZKHBf2rYXNdaKzeBHczBKn1jxP3OzrIwzN6XxAY6pgEg9WgMkB1pdzMknPMRzHYNYlKPvADFcHm7yyKLfWGt5LLnV27TkfA9lfPewZP53mzXPMD8OVsJ6wdDlLGLV%2FyeJI2TSCg%2BmtSFumx7UTkPXh3BqGbUShx29k3xqwRYfyQlX0oH4nQCmC5AzNkOAO7IAvNZN2mewf6QWSa7Kg8HFnPHfcZFQC2GDzFYR6rw8FA4nqJK49HhS1C%2Fdgi3eVVOa%2FY7rcxA&X-Amz-Signature=18facdaac68e01929ef3794af2ca556935b05e8117f836333dba3af3e7b1bb75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDFF5W6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEC27MuwCJ1vjoMQX3eVeUBjHvC0HbzQQoppY7dehTgbAiAqW59gcjC2ay0FmA6Eb4Oobt5rQwKss2yx51As1eEkCCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMI1h96Uvm6ouymZJmKtwDoykWpQ8cDxq7l6kIxp5Ef36LtbD6YpsLa49KNze8oPLEiI8lpqi7pMXo0wy5h%2BAyVWBpu4GthJQ3Gp0LOpCajhC5NE6FxqWrIDImp4ewpsrGbwHH4ky2vSVHe9dfkvB6XL76w7xI%2FUP3gFhG9IMvXRm4NVekjsoqb01Xh5aJ9ZBlwGoQoZroUo8NkeDjIT898NDDMGoPLaQEMBj%2BW3y33I6rdInwKHB8dn0I05bnIhUPTfVFVrJnHZuBK%2BfV8er8seMlAUaEEKTill8ItTw0QAArZ7ThmlKe9%2F9DnrzyYTtLubVBqOaB4g5t1P%2BabfYkdeDMGxdjZuvMAYXV89YgviJYQuTQh2lhwbdT8CYz55TZ5RqRMPP%2FZH%2FMnsprV59v4GaQTbQMoqzf%2FOGMhNpm5jZcvIh20TMEGbCMNIzRr9NOTa7uT04z4Uw1ptjM5XE5lGDTL5C1mhgAQQu%2FuECGLhwLv9HS%2FolgKB9qVn67TmbHZpud7i8Q6H4GD%2Bbdi0VvbUePEqOzuW7LxgwSmEI%2BTp0nBQUsivyrC%2FPcB%2By1U36qaloE0xRq0ckwzPtXfzHBsvk4owaGfdIV09eBvxV1tZB607%2BtZKHBf2rYXNdaKzeBHczBKn1jxP3OzrIwzN6XxAY6pgEg9WgMkB1pdzMknPMRzHYNYlKPvADFcHm7yyKLfWGt5LLnV27TkfA9lfPewZP53mzXPMD8OVsJ6wdDlLGLV%2FyeJI2TSCg%2BmtSFumx7UTkPXh3BqGbUShx29k3xqwRYfyQlX0oH4nQCmC5AzNkOAO7IAvNZN2mewf6QWSa7Kg8HFnPHfcZFQC2GDzFYR6rw8FA4nqJK49HhS1C%2Fdgi3eVVOa%2FY7rcxA&X-Amz-Signature=27b38547df431fe6c2f2fabda45c40104cf8d252ac7739add47aba32a8e92d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGDFF5W6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIEC27MuwCJ1vjoMQX3eVeUBjHvC0HbzQQoppY7dehTgbAiAqW59gcjC2ay0FmA6Eb4Oobt5rQwKss2yx51As1eEkCCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMI1h96Uvm6ouymZJmKtwDoykWpQ8cDxq7l6kIxp5Ef36LtbD6YpsLa49KNze8oPLEiI8lpqi7pMXo0wy5h%2BAyVWBpu4GthJQ3Gp0LOpCajhC5NE6FxqWrIDImp4ewpsrGbwHH4ky2vSVHe9dfkvB6XL76w7xI%2FUP3gFhG9IMvXRm4NVekjsoqb01Xh5aJ9ZBlwGoQoZroUo8NkeDjIT898NDDMGoPLaQEMBj%2BW3y33I6rdInwKHB8dn0I05bnIhUPTfVFVrJnHZuBK%2BfV8er8seMlAUaEEKTill8ItTw0QAArZ7ThmlKe9%2F9DnrzyYTtLubVBqOaB4g5t1P%2BabfYkdeDMGxdjZuvMAYXV89YgviJYQuTQh2lhwbdT8CYz55TZ5RqRMPP%2FZH%2FMnsprV59v4GaQTbQMoqzf%2FOGMhNpm5jZcvIh20TMEGbCMNIzRr9NOTa7uT04z4Uw1ptjM5XE5lGDTL5C1mhgAQQu%2FuECGLhwLv9HS%2FolgKB9qVn67TmbHZpud7i8Q6H4GD%2Bbdi0VvbUePEqOzuW7LxgwSmEI%2BTp0nBQUsivyrC%2FPcB%2By1U36qaloE0xRq0ckwzPtXfzHBsvk4owaGfdIV09eBvxV1tZB607%2BtZKHBf2rYXNdaKzeBHczBKn1jxP3OzrIwzN6XxAY6pgEg9WgMkB1pdzMknPMRzHYNYlKPvADFcHm7yyKLfWGt5LLnV27TkfA9lfPewZP53mzXPMD8OVsJ6wdDlLGLV%2FyeJI2TSCg%2BmtSFumx7UTkPXh3BqGbUShx29k3xqwRYfyQlX0oH4nQCmC5AzNkOAO7IAvNZN2mewf6QWSa7Kg8HFnPHfcZFQC2GDzFYR6rw8FA4nqJK49HhS1C%2Fdgi3eVVOa%2FY7rcxA&X-Amz-Signature=c8c4ec85be8470998a2e42b5a6186dbc40c2cc7000dcb03eed641b67caac5da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
