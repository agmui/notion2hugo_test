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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4G2WV2X%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQD5V626dOaxLt42LBuEHjEfXkP6Vs1MH09oWfT3pcN1HAIhAJy7fAUeo5V7r6GG8OyOgFwIrazDP88ptgyYELL%2FW0NRKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhbtP%2B6pT9qxysWMAq3AP%2Bt3gpqPEXA1b10B0X7LtNsQlghLNDp%2B2zV4xrUreWhfsEfOAb%2BDlDdVx9eA6%2BhbDgEOUJJbFRKDK4xD3%2BjtGDMcHyxXD79yEmnOqK5E5IWgI5FCrZtjCiIriTUA6FP6iM93KBzXwzEzXrpw7jV%2FXIfAnm3lxxwIBaNVeMpKgzULVMUYEcA31Fwd7rjPpk2IKNvKUsJec%2BXzui%2FU5XJEXMrlby6SGf7pHV8Q%2FUAJTCRLPwnE%2Bt%2F0FUW3GM9znw8vyptfxltxZb8OhXwsSbnjrqBdtBun7eYLyGu6BldpNnQ7kvxhLaPa%2B8fz90meYQDIXxqz20U6P4k%2FcfOcO4yvwCbdi1Hk7hgIEDP06S5DZqe2VAm3oI%2BNNzHxNX9%2BZg2yqDjZv7qwTYdIOU7KCWBxd%2Br%2BSajaxZxL%2BeLaT4vgkqmdIs5o8el4ue279UVie3092eo%2FMQqdeJTJar0jRyj6YBqkXiD1%2BI4j8ZWLrhv9UwVhrWsJz3GVsoWE2ti2vn4T9cP1ZfUdkCrjaTKR77LTRMhjovLige3Gq%2BC%2BpWQ0RbVqO7H1QfHoc5dKEixMgztF9KtYoTmNvYPxlcYKIXpAIBPmofgt4ONIXROfdsw%2BgZVY7T64Nts%2BrDIo7XqjDimKPEBjqkAQwXpkeRaMAcOOpXXQ9tA5DVZkycnlrOIheGntac0hgeMXcZ%2FXy3EqLUMxswMrC%2FyAFUea3F9pkt8wdFiUrHq%2F%2B4IGn4T79SK5b0WhMFfm9X6qDOLdD6UL90IHfjt9PvmCQWKjMuZuMgPkoi4SCPfKcSzVvE5P8z8GfjHmBMpFO5GbrxRsXQ366pJPdV1Lk%2B%2BTRumycFmB%2BqsqfKoQN%2BgtUcz2mC&X-Amz-Signature=cacaa72bd4c30c61623aefce54b233798cc17529d8d819262464a5f652df1a8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4G2WV2X%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQD5V626dOaxLt42LBuEHjEfXkP6Vs1MH09oWfT3pcN1HAIhAJy7fAUeo5V7r6GG8OyOgFwIrazDP88ptgyYELL%2FW0NRKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhbtP%2B6pT9qxysWMAq3AP%2Bt3gpqPEXA1b10B0X7LtNsQlghLNDp%2B2zV4xrUreWhfsEfOAb%2BDlDdVx9eA6%2BhbDgEOUJJbFRKDK4xD3%2BjtGDMcHyxXD79yEmnOqK5E5IWgI5FCrZtjCiIriTUA6FP6iM93KBzXwzEzXrpw7jV%2FXIfAnm3lxxwIBaNVeMpKgzULVMUYEcA31Fwd7rjPpk2IKNvKUsJec%2BXzui%2FU5XJEXMrlby6SGf7pHV8Q%2FUAJTCRLPwnE%2Bt%2F0FUW3GM9znw8vyptfxltxZb8OhXwsSbnjrqBdtBun7eYLyGu6BldpNnQ7kvxhLaPa%2B8fz90meYQDIXxqz20U6P4k%2FcfOcO4yvwCbdi1Hk7hgIEDP06S5DZqe2VAm3oI%2BNNzHxNX9%2BZg2yqDjZv7qwTYdIOU7KCWBxd%2Br%2BSajaxZxL%2BeLaT4vgkqmdIs5o8el4ue279UVie3092eo%2FMQqdeJTJar0jRyj6YBqkXiD1%2BI4j8ZWLrhv9UwVhrWsJz3GVsoWE2ti2vn4T9cP1ZfUdkCrjaTKR77LTRMhjovLige3Gq%2BC%2BpWQ0RbVqO7H1QfHoc5dKEixMgztF9KtYoTmNvYPxlcYKIXpAIBPmofgt4ONIXROfdsw%2BgZVY7T64Nts%2BrDIo7XqjDimKPEBjqkAQwXpkeRaMAcOOpXXQ9tA5DVZkycnlrOIheGntac0hgeMXcZ%2FXy3EqLUMxswMrC%2FyAFUea3F9pkt8wdFiUrHq%2F%2B4IGn4T79SK5b0WhMFfm9X6qDOLdD6UL90IHfjt9PvmCQWKjMuZuMgPkoi4SCPfKcSzVvE5P8z8GfjHmBMpFO5GbrxRsXQ366pJPdV1Lk%2B%2BTRumycFmB%2BqsqfKoQN%2BgtUcz2mC&X-Amz-Signature=14d06b0255ed56023f16619991f434a95fa42fab984db88d15ed4e621f4b3b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4G2WV2X%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQD5V626dOaxLt42LBuEHjEfXkP6Vs1MH09oWfT3pcN1HAIhAJy7fAUeo5V7r6GG8OyOgFwIrazDP88ptgyYELL%2FW0NRKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhbtP%2B6pT9qxysWMAq3AP%2Bt3gpqPEXA1b10B0X7LtNsQlghLNDp%2B2zV4xrUreWhfsEfOAb%2BDlDdVx9eA6%2BhbDgEOUJJbFRKDK4xD3%2BjtGDMcHyxXD79yEmnOqK5E5IWgI5FCrZtjCiIriTUA6FP6iM93KBzXwzEzXrpw7jV%2FXIfAnm3lxxwIBaNVeMpKgzULVMUYEcA31Fwd7rjPpk2IKNvKUsJec%2BXzui%2FU5XJEXMrlby6SGf7pHV8Q%2FUAJTCRLPwnE%2Bt%2F0FUW3GM9znw8vyptfxltxZb8OhXwsSbnjrqBdtBun7eYLyGu6BldpNnQ7kvxhLaPa%2B8fz90meYQDIXxqz20U6P4k%2FcfOcO4yvwCbdi1Hk7hgIEDP06S5DZqe2VAm3oI%2BNNzHxNX9%2BZg2yqDjZv7qwTYdIOU7KCWBxd%2Br%2BSajaxZxL%2BeLaT4vgkqmdIs5o8el4ue279UVie3092eo%2FMQqdeJTJar0jRyj6YBqkXiD1%2BI4j8ZWLrhv9UwVhrWsJz3GVsoWE2ti2vn4T9cP1ZfUdkCrjaTKR77LTRMhjovLige3Gq%2BC%2BpWQ0RbVqO7H1QfHoc5dKEixMgztF9KtYoTmNvYPxlcYKIXpAIBPmofgt4ONIXROfdsw%2BgZVY7T64Nts%2BrDIo7XqjDimKPEBjqkAQwXpkeRaMAcOOpXXQ9tA5DVZkycnlrOIheGntac0hgeMXcZ%2FXy3EqLUMxswMrC%2FyAFUea3F9pkt8wdFiUrHq%2F%2B4IGn4T79SK5b0WhMFfm9X6qDOLdD6UL90IHfjt9PvmCQWKjMuZuMgPkoi4SCPfKcSzVvE5P8z8GfjHmBMpFO5GbrxRsXQ366pJPdV1Lk%2B%2BTRumycFmB%2BqsqfKoQN%2BgtUcz2mC&X-Amz-Signature=df55feb89c68cc1bffd3bfe228b5d668ac0207cf0ac2cdb660756968725effdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4G2WV2X%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQD5V626dOaxLt42LBuEHjEfXkP6Vs1MH09oWfT3pcN1HAIhAJy7fAUeo5V7r6GG8OyOgFwIrazDP88ptgyYELL%2FW0NRKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhbtP%2B6pT9qxysWMAq3AP%2Bt3gpqPEXA1b10B0X7LtNsQlghLNDp%2B2zV4xrUreWhfsEfOAb%2BDlDdVx9eA6%2BhbDgEOUJJbFRKDK4xD3%2BjtGDMcHyxXD79yEmnOqK5E5IWgI5FCrZtjCiIriTUA6FP6iM93KBzXwzEzXrpw7jV%2FXIfAnm3lxxwIBaNVeMpKgzULVMUYEcA31Fwd7rjPpk2IKNvKUsJec%2BXzui%2FU5XJEXMrlby6SGf7pHV8Q%2FUAJTCRLPwnE%2Bt%2F0FUW3GM9znw8vyptfxltxZb8OhXwsSbnjrqBdtBun7eYLyGu6BldpNnQ7kvxhLaPa%2B8fz90meYQDIXxqz20U6P4k%2FcfOcO4yvwCbdi1Hk7hgIEDP06S5DZqe2VAm3oI%2BNNzHxNX9%2BZg2yqDjZv7qwTYdIOU7KCWBxd%2Br%2BSajaxZxL%2BeLaT4vgkqmdIs5o8el4ue279UVie3092eo%2FMQqdeJTJar0jRyj6YBqkXiD1%2BI4j8ZWLrhv9UwVhrWsJz3GVsoWE2ti2vn4T9cP1ZfUdkCrjaTKR77LTRMhjovLige3Gq%2BC%2BpWQ0RbVqO7H1QfHoc5dKEixMgztF9KtYoTmNvYPxlcYKIXpAIBPmofgt4ONIXROfdsw%2BgZVY7T64Nts%2BrDIo7XqjDimKPEBjqkAQwXpkeRaMAcOOpXXQ9tA5DVZkycnlrOIheGntac0hgeMXcZ%2FXy3EqLUMxswMrC%2FyAFUea3F9pkt8wdFiUrHq%2F%2B4IGn4T79SK5b0WhMFfm9X6qDOLdD6UL90IHfjt9PvmCQWKjMuZuMgPkoi4SCPfKcSzVvE5P8z8GfjHmBMpFO5GbrxRsXQ366pJPdV1Lk%2B%2BTRumycFmB%2BqsqfKoQN%2BgtUcz2mC&X-Amz-Signature=dc635967d95d6eb1aca0896ffd7a39d278c1fafb0b028e6de713e6384e63e63f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4G2WV2X%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQD5V626dOaxLt42LBuEHjEfXkP6Vs1MH09oWfT3pcN1HAIhAJy7fAUeo5V7r6GG8OyOgFwIrazDP88ptgyYELL%2FW0NRKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhbtP%2B6pT9qxysWMAq3AP%2Bt3gpqPEXA1b10B0X7LtNsQlghLNDp%2B2zV4xrUreWhfsEfOAb%2BDlDdVx9eA6%2BhbDgEOUJJbFRKDK4xD3%2BjtGDMcHyxXD79yEmnOqK5E5IWgI5FCrZtjCiIriTUA6FP6iM93KBzXwzEzXrpw7jV%2FXIfAnm3lxxwIBaNVeMpKgzULVMUYEcA31Fwd7rjPpk2IKNvKUsJec%2BXzui%2FU5XJEXMrlby6SGf7pHV8Q%2FUAJTCRLPwnE%2Bt%2F0FUW3GM9znw8vyptfxltxZb8OhXwsSbnjrqBdtBun7eYLyGu6BldpNnQ7kvxhLaPa%2B8fz90meYQDIXxqz20U6P4k%2FcfOcO4yvwCbdi1Hk7hgIEDP06S5DZqe2VAm3oI%2BNNzHxNX9%2BZg2yqDjZv7qwTYdIOU7KCWBxd%2Br%2BSajaxZxL%2BeLaT4vgkqmdIs5o8el4ue279UVie3092eo%2FMQqdeJTJar0jRyj6YBqkXiD1%2BI4j8ZWLrhv9UwVhrWsJz3GVsoWE2ti2vn4T9cP1ZfUdkCrjaTKR77LTRMhjovLige3Gq%2BC%2BpWQ0RbVqO7H1QfHoc5dKEixMgztF9KtYoTmNvYPxlcYKIXpAIBPmofgt4ONIXROfdsw%2BgZVY7T64Nts%2BrDIo7XqjDimKPEBjqkAQwXpkeRaMAcOOpXXQ9tA5DVZkycnlrOIheGntac0hgeMXcZ%2FXy3EqLUMxswMrC%2FyAFUea3F9pkt8wdFiUrHq%2F%2B4IGn4T79SK5b0WhMFfm9X6qDOLdD6UL90IHfjt9PvmCQWKjMuZuMgPkoi4SCPfKcSzVvE5P8z8GfjHmBMpFO5GbrxRsXQ366pJPdV1Lk%2B%2BTRumycFmB%2BqsqfKoQN%2BgtUcz2mC&X-Amz-Signature=a4ec2e015a4627d8f84fc0e051ec2e3288633d36df0ceb20f0607bcd49a3ea6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4G2WV2X%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQD5V626dOaxLt42LBuEHjEfXkP6Vs1MH09oWfT3pcN1HAIhAJy7fAUeo5V7r6GG8OyOgFwIrazDP88ptgyYELL%2FW0NRKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhbtP%2B6pT9qxysWMAq3AP%2Bt3gpqPEXA1b10B0X7LtNsQlghLNDp%2B2zV4xrUreWhfsEfOAb%2BDlDdVx9eA6%2BhbDgEOUJJbFRKDK4xD3%2BjtGDMcHyxXD79yEmnOqK5E5IWgI5FCrZtjCiIriTUA6FP6iM93KBzXwzEzXrpw7jV%2FXIfAnm3lxxwIBaNVeMpKgzULVMUYEcA31Fwd7rjPpk2IKNvKUsJec%2BXzui%2FU5XJEXMrlby6SGf7pHV8Q%2FUAJTCRLPwnE%2Bt%2F0FUW3GM9znw8vyptfxltxZb8OhXwsSbnjrqBdtBun7eYLyGu6BldpNnQ7kvxhLaPa%2B8fz90meYQDIXxqz20U6P4k%2FcfOcO4yvwCbdi1Hk7hgIEDP06S5DZqe2VAm3oI%2BNNzHxNX9%2BZg2yqDjZv7qwTYdIOU7KCWBxd%2Br%2BSajaxZxL%2BeLaT4vgkqmdIs5o8el4ue279UVie3092eo%2FMQqdeJTJar0jRyj6YBqkXiD1%2BI4j8ZWLrhv9UwVhrWsJz3GVsoWE2ti2vn4T9cP1ZfUdkCrjaTKR77LTRMhjovLige3Gq%2BC%2BpWQ0RbVqO7H1QfHoc5dKEixMgztF9KtYoTmNvYPxlcYKIXpAIBPmofgt4ONIXROfdsw%2BgZVY7T64Nts%2BrDIo7XqjDimKPEBjqkAQwXpkeRaMAcOOpXXQ9tA5DVZkycnlrOIheGntac0hgeMXcZ%2FXy3EqLUMxswMrC%2FyAFUea3F9pkt8wdFiUrHq%2F%2B4IGn4T79SK5b0WhMFfm9X6qDOLdD6UL90IHfjt9PvmCQWKjMuZuMgPkoi4SCPfKcSzVvE5P8z8GfjHmBMpFO5GbrxRsXQ366pJPdV1Lk%2B%2BTRumycFmB%2BqsqfKoQN%2BgtUcz2mC&X-Amz-Signature=df6ef92ed43f4ca9b2b495a205eeaef7771a8e23ffc873d51a901eaa45d5ccf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
