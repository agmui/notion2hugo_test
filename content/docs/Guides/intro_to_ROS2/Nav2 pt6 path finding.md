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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVGU25YI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYCIJ4yilucNQtI9lVpYuFP%2Bv9xEyJ7u5QrVTUEVVGXAiB4dHvvZsX%2BC%2FCcz3lZiE6H%2BOP1KanHqRQUNDSPSjeUJCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEChqUW6umxVIpoHDKtwDwsEvL0dLDEdI8aZhUVvF3%2Beudj5%2FUFpTn%2F4UCghixnXZhaLA%2FxmvQuBNCK4bnJoSAT8zMABPekTYCo2C7ALmUHRHwrvFp7z7WnLCNDNZxT1uv%2Fcd%2BIE8T%2B%2FA7VUarlStIwtu7Bkijhs1ZmoarljJQZbtXMndNeATGSVqJaDqNy3w2CU%2BKeYDwfY458bq8nAXprH3LuBsLrs93kXepC%2Fs1AsW%2FjCTv0Q7gceLsRAZJNdJ1nicEMa7BvaqCjqdsEwVygHP0snT7Y777iK%2BBiELbJesH2cmXuQnqqdXBUtXwUYPdMJLxUyJ9myB%2F5cg1pUD9Tg7639uWnf5VzwwHrqBSZErjIMy3AP3CnZOonTXHKlcFxri6opAuSeCeA8XxIi3q%2FkvR8cgjvgV1RztvKdZpqmuN5K20bef0eKDo17hDvXzagn26WjdmAI2BCqDXl5PdxMS6t3wDIhlj52jSoZdhK1w9t5Jl0PWrpYvU2B1wsUKBAnmWMkU2tdURZ3%2F%2F%2BsJe31x%2Bm4T5aM%2F4O8QxVdOe4zdZUCyJKmQZZO6olaCnD1dGYU7UeMZXrTIfuTs7T4g4FhsS6JMiiG4SHOUhIStsKBA341uuyDMyuS6A8a1CogKWniyeKSa2u3O58cwz%2FqSxAY6pgGJ9dXi6MMkVdWcuMugoTIf9U5wgNCsoiIDWBsZV%2BWKBb53FYsIKfJh6j076Wqodkhkn7bNI0T3NT6HiXASRyNKEdSPPJ0eOwIGg8FXv2D0Bt8VFj2Q7jVPU0QlleypLMT%2B3qqz8urvNqnbLCGeYRgUssm%2BYTHvGt9yk9GGl4oHyxiOupH%2F1BaQPyXu93K2j1QJHQZGRlEqiOBCXpg9HjZFBm%2FHRGD5&X-Amz-Signature=d7b6cf325f5563df7fc0689fbfd6e21965cdce48447dfc8ccc44e7f9c8caa7de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVGU25YI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYCIJ4yilucNQtI9lVpYuFP%2Bv9xEyJ7u5QrVTUEVVGXAiB4dHvvZsX%2BC%2FCcz3lZiE6H%2BOP1KanHqRQUNDSPSjeUJCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEChqUW6umxVIpoHDKtwDwsEvL0dLDEdI8aZhUVvF3%2Beudj5%2FUFpTn%2F4UCghixnXZhaLA%2FxmvQuBNCK4bnJoSAT8zMABPekTYCo2C7ALmUHRHwrvFp7z7WnLCNDNZxT1uv%2Fcd%2BIE8T%2B%2FA7VUarlStIwtu7Bkijhs1ZmoarljJQZbtXMndNeATGSVqJaDqNy3w2CU%2BKeYDwfY458bq8nAXprH3LuBsLrs93kXepC%2Fs1AsW%2FjCTv0Q7gceLsRAZJNdJ1nicEMa7BvaqCjqdsEwVygHP0snT7Y777iK%2BBiELbJesH2cmXuQnqqdXBUtXwUYPdMJLxUyJ9myB%2F5cg1pUD9Tg7639uWnf5VzwwHrqBSZErjIMy3AP3CnZOonTXHKlcFxri6opAuSeCeA8XxIi3q%2FkvR8cgjvgV1RztvKdZpqmuN5K20bef0eKDo17hDvXzagn26WjdmAI2BCqDXl5PdxMS6t3wDIhlj52jSoZdhK1w9t5Jl0PWrpYvU2B1wsUKBAnmWMkU2tdURZ3%2F%2F%2BsJe31x%2Bm4T5aM%2F4O8QxVdOe4zdZUCyJKmQZZO6olaCnD1dGYU7UeMZXrTIfuTs7T4g4FhsS6JMiiG4SHOUhIStsKBA341uuyDMyuS6A8a1CogKWniyeKSa2u3O58cwz%2FqSxAY6pgGJ9dXi6MMkVdWcuMugoTIf9U5wgNCsoiIDWBsZV%2BWKBb53FYsIKfJh6j076Wqodkhkn7bNI0T3NT6HiXASRyNKEdSPPJ0eOwIGg8FXv2D0Bt8VFj2Q7jVPU0QlleypLMT%2B3qqz8urvNqnbLCGeYRgUssm%2BYTHvGt9yk9GGl4oHyxiOupH%2F1BaQPyXu93K2j1QJHQZGRlEqiOBCXpg9HjZFBm%2FHRGD5&X-Amz-Signature=e5c54a0c55f233d655f034e67c6f07fd2a08a6504d2e8a3619564d14fe95e975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVGU25YI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYCIJ4yilucNQtI9lVpYuFP%2Bv9xEyJ7u5QrVTUEVVGXAiB4dHvvZsX%2BC%2FCcz3lZiE6H%2BOP1KanHqRQUNDSPSjeUJCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEChqUW6umxVIpoHDKtwDwsEvL0dLDEdI8aZhUVvF3%2Beudj5%2FUFpTn%2F4UCghixnXZhaLA%2FxmvQuBNCK4bnJoSAT8zMABPekTYCo2C7ALmUHRHwrvFp7z7WnLCNDNZxT1uv%2Fcd%2BIE8T%2B%2FA7VUarlStIwtu7Bkijhs1ZmoarljJQZbtXMndNeATGSVqJaDqNy3w2CU%2BKeYDwfY458bq8nAXprH3LuBsLrs93kXepC%2Fs1AsW%2FjCTv0Q7gceLsRAZJNdJ1nicEMa7BvaqCjqdsEwVygHP0snT7Y777iK%2BBiELbJesH2cmXuQnqqdXBUtXwUYPdMJLxUyJ9myB%2F5cg1pUD9Tg7639uWnf5VzwwHrqBSZErjIMy3AP3CnZOonTXHKlcFxri6opAuSeCeA8XxIi3q%2FkvR8cgjvgV1RztvKdZpqmuN5K20bef0eKDo17hDvXzagn26WjdmAI2BCqDXl5PdxMS6t3wDIhlj52jSoZdhK1w9t5Jl0PWrpYvU2B1wsUKBAnmWMkU2tdURZ3%2F%2F%2BsJe31x%2Bm4T5aM%2F4O8QxVdOe4zdZUCyJKmQZZO6olaCnD1dGYU7UeMZXrTIfuTs7T4g4FhsS6JMiiG4SHOUhIStsKBA341uuyDMyuS6A8a1CogKWniyeKSa2u3O58cwz%2FqSxAY6pgGJ9dXi6MMkVdWcuMugoTIf9U5wgNCsoiIDWBsZV%2BWKBb53FYsIKfJh6j076Wqodkhkn7bNI0T3NT6HiXASRyNKEdSPPJ0eOwIGg8FXv2D0Bt8VFj2Q7jVPU0QlleypLMT%2B3qqz8urvNqnbLCGeYRgUssm%2BYTHvGt9yk9GGl4oHyxiOupH%2F1BaQPyXu93K2j1QJHQZGRlEqiOBCXpg9HjZFBm%2FHRGD5&X-Amz-Signature=6fcd8ecf6792769bb665385de87c52dfede51606de92a171583d362b264b7380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVGU25YI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYCIJ4yilucNQtI9lVpYuFP%2Bv9xEyJ7u5QrVTUEVVGXAiB4dHvvZsX%2BC%2FCcz3lZiE6H%2BOP1KanHqRQUNDSPSjeUJCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEChqUW6umxVIpoHDKtwDwsEvL0dLDEdI8aZhUVvF3%2Beudj5%2FUFpTn%2F4UCghixnXZhaLA%2FxmvQuBNCK4bnJoSAT8zMABPekTYCo2C7ALmUHRHwrvFp7z7WnLCNDNZxT1uv%2Fcd%2BIE8T%2B%2FA7VUarlStIwtu7Bkijhs1ZmoarljJQZbtXMndNeATGSVqJaDqNy3w2CU%2BKeYDwfY458bq8nAXprH3LuBsLrs93kXepC%2Fs1AsW%2FjCTv0Q7gceLsRAZJNdJ1nicEMa7BvaqCjqdsEwVygHP0snT7Y777iK%2BBiELbJesH2cmXuQnqqdXBUtXwUYPdMJLxUyJ9myB%2F5cg1pUD9Tg7639uWnf5VzwwHrqBSZErjIMy3AP3CnZOonTXHKlcFxri6opAuSeCeA8XxIi3q%2FkvR8cgjvgV1RztvKdZpqmuN5K20bef0eKDo17hDvXzagn26WjdmAI2BCqDXl5PdxMS6t3wDIhlj52jSoZdhK1w9t5Jl0PWrpYvU2B1wsUKBAnmWMkU2tdURZ3%2F%2F%2BsJe31x%2Bm4T5aM%2F4O8QxVdOe4zdZUCyJKmQZZO6olaCnD1dGYU7UeMZXrTIfuTs7T4g4FhsS6JMiiG4SHOUhIStsKBA341uuyDMyuS6A8a1CogKWniyeKSa2u3O58cwz%2FqSxAY6pgGJ9dXi6MMkVdWcuMugoTIf9U5wgNCsoiIDWBsZV%2BWKBb53FYsIKfJh6j076Wqodkhkn7bNI0T3NT6HiXASRyNKEdSPPJ0eOwIGg8FXv2D0Bt8VFj2Q7jVPU0QlleypLMT%2B3qqz8urvNqnbLCGeYRgUssm%2BYTHvGt9yk9GGl4oHyxiOupH%2F1BaQPyXu93K2j1QJHQZGRlEqiOBCXpg9HjZFBm%2FHRGD5&X-Amz-Signature=18537aff28a2dc03621750d7e0dfe3cdb2e82ee6beca2c7ca7f362e94e59e93b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVGU25YI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYCIJ4yilucNQtI9lVpYuFP%2Bv9xEyJ7u5QrVTUEVVGXAiB4dHvvZsX%2BC%2FCcz3lZiE6H%2BOP1KanHqRQUNDSPSjeUJCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEChqUW6umxVIpoHDKtwDwsEvL0dLDEdI8aZhUVvF3%2Beudj5%2FUFpTn%2F4UCghixnXZhaLA%2FxmvQuBNCK4bnJoSAT8zMABPekTYCo2C7ALmUHRHwrvFp7z7WnLCNDNZxT1uv%2Fcd%2BIE8T%2B%2FA7VUarlStIwtu7Bkijhs1ZmoarljJQZbtXMndNeATGSVqJaDqNy3w2CU%2BKeYDwfY458bq8nAXprH3LuBsLrs93kXepC%2Fs1AsW%2FjCTv0Q7gceLsRAZJNdJ1nicEMa7BvaqCjqdsEwVygHP0snT7Y777iK%2BBiELbJesH2cmXuQnqqdXBUtXwUYPdMJLxUyJ9myB%2F5cg1pUD9Tg7639uWnf5VzwwHrqBSZErjIMy3AP3CnZOonTXHKlcFxri6opAuSeCeA8XxIi3q%2FkvR8cgjvgV1RztvKdZpqmuN5K20bef0eKDo17hDvXzagn26WjdmAI2BCqDXl5PdxMS6t3wDIhlj52jSoZdhK1w9t5Jl0PWrpYvU2B1wsUKBAnmWMkU2tdURZ3%2F%2F%2BsJe31x%2Bm4T5aM%2F4O8QxVdOe4zdZUCyJKmQZZO6olaCnD1dGYU7UeMZXrTIfuTs7T4g4FhsS6JMiiG4SHOUhIStsKBA341uuyDMyuS6A8a1CogKWniyeKSa2u3O58cwz%2FqSxAY6pgGJ9dXi6MMkVdWcuMugoTIf9U5wgNCsoiIDWBsZV%2BWKBb53FYsIKfJh6j076Wqodkhkn7bNI0T3NT6HiXASRyNKEdSPPJ0eOwIGg8FXv2D0Bt8VFj2Q7jVPU0QlleypLMT%2B3qqz8urvNqnbLCGeYRgUssm%2BYTHvGt9yk9GGl4oHyxiOupH%2F1BaQPyXu93K2j1QJHQZGRlEqiOBCXpg9HjZFBm%2FHRGD5&X-Amz-Signature=857cc53b8c1f81097b859196d6a99815243c9f094f1818d8cb75a0a312046986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVGU25YI%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T132317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIAYCIJ4yilucNQtI9lVpYuFP%2Bv9xEyJ7u5QrVTUEVVGXAiB4dHvvZsX%2BC%2FCcz3lZiE6H%2BOP1KanHqRQUNDSPSjeUJCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMEChqUW6umxVIpoHDKtwDwsEvL0dLDEdI8aZhUVvF3%2Beudj5%2FUFpTn%2F4UCghixnXZhaLA%2FxmvQuBNCK4bnJoSAT8zMABPekTYCo2C7ALmUHRHwrvFp7z7WnLCNDNZxT1uv%2Fcd%2BIE8T%2B%2FA7VUarlStIwtu7Bkijhs1ZmoarljJQZbtXMndNeATGSVqJaDqNy3w2CU%2BKeYDwfY458bq8nAXprH3LuBsLrs93kXepC%2Fs1AsW%2FjCTv0Q7gceLsRAZJNdJ1nicEMa7BvaqCjqdsEwVygHP0snT7Y777iK%2BBiELbJesH2cmXuQnqqdXBUtXwUYPdMJLxUyJ9myB%2F5cg1pUD9Tg7639uWnf5VzwwHrqBSZErjIMy3AP3CnZOonTXHKlcFxri6opAuSeCeA8XxIi3q%2FkvR8cgjvgV1RztvKdZpqmuN5K20bef0eKDo17hDvXzagn26WjdmAI2BCqDXl5PdxMS6t3wDIhlj52jSoZdhK1w9t5Jl0PWrpYvU2B1wsUKBAnmWMkU2tdURZ3%2F%2F%2BsJe31x%2Bm4T5aM%2F4O8QxVdOe4zdZUCyJKmQZZO6olaCnD1dGYU7UeMZXrTIfuTs7T4g4FhsS6JMiiG4SHOUhIStsKBA341uuyDMyuS6A8a1CogKWniyeKSa2u3O58cwz%2FqSxAY6pgGJ9dXi6MMkVdWcuMugoTIf9U5wgNCsoiIDWBsZV%2BWKBb53FYsIKfJh6j076Wqodkhkn7bNI0T3NT6HiXASRyNKEdSPPJ0eOwIGg8FXv2D0Bt8VFj2Q7jVPU0QlleypLMT%2B3qqz8urvNqnbLCGeYRgUssm%2BYTHvGt9yk9GGl4oHyxiOupH%2F1BaQPyXu93K2j1QJHQZGRlEqiOBCXpg9HjZFBm%2FHRGD5&X-Amz-Signature=d38d61326f50dbf7054b8aaa6ac3910df34e413b3025552cba238679401dd040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
