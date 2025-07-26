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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLWVI35Z%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFWkVOACdhULuFNlvwLWErqhPFHNSckny9VlW5iM0nWfAiB3Ddy4MqRQniLih1Bh7820bKL%2B1IkxdZ7jzUDUOnVIiyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5JufFWkYAxoRmNv2KtwDdYl2FcGAKwtxsIsl6WJXt40SogPt52Zc%2B3wFXVS%2B7cpya8YSCO1tpmH9PnQWxseT4nXz9UedIjnPzivBFG3EG1ipDgZOHEB4AYFtb1tBj9z9vLPO9C5U6OHUpn6LO8pLPaJWJfd3lo82lhZoGogWnaJUWKEX3qy5ePBl9LlOiWOivjuhBlSN1wlHLLeEzcJa%2BsmfsIfFyec%2FH2Okb1op%2B2KC5C17iqwbJ9%2FuHTCBYu6rR7NdffscHE18sh8nLTzWvSvnruA%2FdB3DiUepFa6geH%2FNV4of3zyfOiClL%2FDe4fvPWBB%2BP3CMQWOO1JIselGjbcBN8E1QLuXR2TS0L4I9SKgEsgthz63ZDgOnwUn2DpVfzapU0v%2FeKzQoyGnkamSKWLYFJPl2H%2FYovPupXRTfycr3uv8e1Zq9BuxxEJ%2BI7VqAmArhlEEFHua2683txK1fgNxmQ1RXDxoGTa4ArG2ifyIVLie%2BJl9Q2Z0%2FCnyvaltopMxIqaDYipwm9ZhaaLiEE78Z1oYN%2BHbGo%2FTm9KI5RGTUWMs3TWXzrox2%2BS2OEH0yK9w4J6SbPue5TTrF1Jph4U6CYLycqtHv1P%2FVEh%2B6rXkmoUeiI1CXRJyiAHEBN6TawCNpTZG%2Fxypw0PowwfqSxAY6pgH127%2FFjIkTqN5rU%2FbL%2BhcIi%2FiCUgVfSyA%2BxRuRnff5QqaAqnXMR4cy8hpzVX0DGLKS39ZLWz4AEkPekoErDRuB%2BLDGXyo%2BlnQVVEeeU2Ek680z9VF0viM%2BF%2BECAeBeQehNqY59Q0svPlHNP2chspNCMjwZrHqoTI6FOFuj31Z6f046OY6Qd5PEVNPc9n9oyDNkTZ8NBI2Nw%2Fxwl20Pp31DQOnpArfI&X-Amz-Signature=048dd98a7a48d10da4586156b90dd33607bf7dc01ce9e55f40c300855af105f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLWVI35Z%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFWkVOACdhULuFNlvwLWErqhPFHNSckny9VlW5iM0nWfAiB3Ddy4MqRQniLih1Bh7820bKL%2B1IkxdZ7jzUDUOnVIiyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5JufFWkYAxoRmNv2KtwDdYl2FcGAKwtxsIsl6WJXt40SogPt52Zc%2B3wFXVS%2B7cpya8YSCO1tpmH9PnQWxseT4nXz9UedIjnPzivBFG3EG1ipDgZOHEB4AYFtb1tBj9z9vLPO9C5U6OHUpn6LO8pLPaJWJfd3lo82lhZoGogWnaJUWKEX3qy5ePBl9LlOiWOivjuhBlSN1wlHLLeEzcJa%2BsmfsIfFyec%2FH2Okb1op%2B2KC5C17iqwbJ9%2FuHTCBYu6rR7NdffscHE18sh8nLTzWvSvnruA%2FdB3DiUepFa6geH%2FNV4of3zyfOiClL%2FDe4fvPWBB%2BP3CMQWOO1JIselGjbcBN8E1QLuXR2TS0L4I9SKgEsgthz63ZDgOnwUn2DpVfzapU0v%2FeKzQoyGnkamSKWLYFJPl2H%2FYovPupXRTfycr3uv8e1Zq9BuxxEJ%2BI7VqAmArhlEEFHua2683txK1fgNxmQ1RXDxoGTa4ArG2ifyIVLie%2BJl9Q2Z0%2FCnyvaltopMxIqaDYipwm9ZhaaLiEE78Z1oYN%2BHbGo%2FTm9KI5RGTUWMs3TWXzrox2%2BS2OEH0yK9w4J6SbPue5TTrF1Jph4U6CYLycqtHv1P%2FVEh%2B6rXkmoUeiI1CXRJyiAHEBN6TawCNpTZG%2Fxypw0PowwfqSxAY6pgH127%2FFjIkTqN5rU%2FbL%2BhcIi%2FiCUgVfSyA%2BxRuRnff5QqaAqnXMR4cy8hpzVX0DGLKS39ZLWz4AEkPekoErDRuB%2BLDGXyo%2BlnQVVEeeU2Ek680z9VF0viM%2BF%2BECAeBeQehNqY59Q0svPlHNP2chspNCMjwZrHqoTI6FOFuj31Z6f046OY6Qd5PEVNPc9n9oyDNkTZ8NBI2Nw%2Fxwl20Pp31DQOnpArfI&X-Amz-Signature=d2e572a4025996e1d4d9d6641ec957ddb85b157b64e0ebf40bd1cf7aaeee5555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLWVI35Z%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFWkVOACdhULuFNlvwLWErqhPFHNSckny9VlW5iM0nWfAiB3Ddy4MqRQniLih1Bh7820bKL%2B1IkxdZ7jzUDUOnVIiyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5JufFWkYAxoRmNv2KtwDdYl2FcGAKwtxsIsl6WJXt40SogPt52Zc%2B3wFXVS%2B7cpya8YSCO1tpmH9PnQWxseT4nXz9UedIjnPzivBFG3EG1ipDgZOHEB4AYFtb1tBj9z9vLPO9C5U6OHUpn6LO8pLPaJWJfd3lo82lhZoGogWnaJUWKEX3qy5ePBl9LlOiWOivjuhBlSN1wlHLLeEzcJa%2BsmfsIfFyec%2FH2Okb1op%2B2KC5C17iqwbJ9%2FuHTCBYu6rR7NdffscHE18sh8nLTzWvSvnruA%2FdB3DiUepFa6geH%2FNV4of3zyfOiClL%2FDe4fvPWBB%2BP3CMQWOO1JIselGjbcBN8E1QLuXR2TS0L4I9SKgEsgthz63ZDgOnwUn2DpVfzapU0v%2FeKzQoyGnkamSKWLYFJPl2H%2FYovPupXRTfycr3uv8e1Zq9BuxxEJ%2BI7VqAmArhlEEFHua2683txK1fgNxmQ1RXDxoGTa4ArG2ifyIVLie%2BJl9Q2Z0%2FCnyvaltopMxIqaDYipwm9ZhaaLiEE78Z1oYN%2BHbGo%2FTm9KI5RGTUWMs3TWXzrox2%2BS2OEH0yK9w4J6SbPue5TTrF1Jph4U6CYLycqtHv1P%2FVEh%2B6rXkmoUeiI1CXRJyiAHEBN6TawCNpTZG%2Fxypw0PowwfqSxAY6pgH127%2FFjIkTqN5rU%2FbL%2BhcIi%2FiCUgVfSyA%2BxRuRnff5QqaAqnXMR4cy8hpzVX0DGLKS39ZLWz4AEkPekoErDRuB%2BLDGXyo%2BlnQVVEeeU2Ek680z9VF0viM%2BF%2BECAeBeQehNqY59Q0svPlHNP2chspNCMjwZrHqoTI6FOFuj31Z6f046OY6Qd5PEVNPc9n9oyDNkTZ8NBI2Nw%2Fxwl20Pp31DQOnpArfI&X-Amz-Signature=7a7dd4d8661f4b8113e82ef7bb31f4e150b66caa55516983680ae141424e8ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLWVI35Z%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFWkVOACdhULuFNlvwLWErqhPFHNSckny9VlW5iM0nWfAiB3Ddy4MqRQniLih1Bh7820bKL%2B1IkxdZ7jzUDUOnVIiyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5JufFWkYAxoRmNv2KtwDdYl2FcGAKwtxsIsl6WJXt40SogPt52Zc%2B3wFXVS%2B7cpya8YSCO1tpmH9PnQWxseT4nXz9UedIjnPzivBFG3EG1ipDgZOHEB4AYFtb1tBj9z9vLPO9C5U6OHUpn6LO8pLPaJWJfd3lo82lhZoGogWnaJUWKEX3qy5ePBl9LlOiWOivjuhBlSN1wlHLLeEzcJa%2BsmfsIfFyec%2FH2Okb1op%2B2KC5C17iqwbJ9%2FuHTCBYu6rR7NdffscHE18sh8nLTzWvSvnruA%2FdB3DiUepFa6geH%2FNV4of3zyfOiClL%2FDe4fvPWBB%2BP3CMQWOO1JIselGjbcBN8E1QLuXR2TS0L4I9SKgEsgthz63ZDgOnwUn2DpVfzapU0v%2FeKzQoyGnkamSKWLYFJPl2H%2FYovPupXRTfycr3uv8e1Zq9BuxxEJ%2BI7VqAmArhlEEFHua2683txK1fgNxmQ1RXDxoGTa4ArG2ifyIVLie%2BJl9Q2Z0%2FCnyvaltopMxIqaDYipwm9ZhaaLiEE78Z1oYN%2BHbGo%2FTm9KI5RGTUWMs3TWXzrox2%2BS2OEH0yK9w4J6SbPue5TTrF1Jph4U6CYLycqtHv1P%2FVEh%2B6rXkmoUeiI1CXRJyiAHEBN6TawCNpTZG%2Fxypw0PowwfqSxAY6pgH127%2FFjIkTqN5rU%2FbL%2BhcIi%2FiCUgVfSyA%2BxRuRnff5QqaAqnXMR4cy8hpzVX0DGLKS39ZLWz4AEkPekoErDRuB%2BLDGXyo%2BlnQVVEeeU2Ek680z9VF0viM%2BF%2BECAeBeQehNqY59Q0svPlHNP2chspNCMjwZrHqoTI6FOFuj31Z6f046OY6Qd5PEVNPc9n9oyDNkTZ8NBI2Nw%2Fxwl20Pp31DQOnpArfI&X-Amz-Signature=378671f23a4effd40d65d384b70daa7c6e785cd47935d7ff89623ff88b002719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLWVI35Z%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFWkVOACdhULuFNlvwLWErqhPFHNSckny9VlW5iM0nWfAiB3Ddy4MqRQniLih1Bh7820bKL%2B1IkxdZ7jzUDUOnVIiyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5JufFWkYAxoRmNv2KtwDdYl2FcGAKwtxsIsl6WJXt40SogPt52Zc%2B3wFXVS%2B7cpya8YSCO1tpmH9PnQWxseT4nXz9UedIjnPzivBFG3EG1ipDgZOHEB4AYFtb1tBj9z9vLPO9C5U6OHUpn6LO8pLPaJWJfd3lo82lhZoGogWnaJUWKEX3qy5ePBl9LlOiWOivjuhBlSN1wlHLLeEzcJa%2BsmfsIfFyec%2FH2Okb1op%2B2KC5C17iqwbJ9%2FuHTCBYu6rR7NdffscHE18sh8nLTzWvSvnruA%2FdB3DiUepFa6geH%2FNV4of3zyfOiClL%2FDe4fvPWBB%2BP3CMQWOO1JIselGjbcBN8E1QLuXR2TS0L4I9SKgEsgthz63ZDgOnwUn2DpVfzapU0v%2FeKzQoyGnkamSKWLYFJPl2H%2FYovPupXRTfycr3uv8e1Zq9BuxxEJ%2BI7VqAmArhlEEFHua2683txK1fgNxmQ1RXDxoGTa4ArG2ifyIVLie%2BJl9Q2Z0%2FCnyvaltopMxIqaDYipwm9ZhaaLiEE78Z1oYN%2BHbGo%2FTm9KI5RGTUWMs3TWXzrox2%2BS2OEH0yK9w4J6SbPue5TTrF1Jph4U6CYLycqtHv1P%2FVEh%2B6rXkmoUeiI1CXRJyiAHEBN6TawCNpTZG%2Fxypw0PowwfqSxAY6pgH127%2FFjIkTqN5rU%2FbL%2BhcIi%2FiCUgVfSyA%2BxRuRnff5QqaAqnXMR4cy8hpzVX0DGLKS39ZLWz4AEkPekoErDRuB%2BLDGXyo%2BlnQVVEeeU2Ek680z9VF0viM%2BF%2BECAeBeQehNqY59Q0svPlHNP2chspNCMjwZrHqoTI6FOFuj31Z6f046OY6Qd5PEVNPc9n9oyDNkTZ8NBI2Nw%2Fxwl20Pp31DQOnpArfI&X-Amz-Signature=2062f41823a2b97490a2c8d5e856edc28873c3866cd07dae4d6d161de2af73fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLWVI35Z%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIFWkVOACdhULuFNlvwLWErqhPFHNSckny9VlW5iM0nWfAiB3Ddy4MqRQniLih1Bh7820bKL%2B1IkxdZ7jzUDUOnVIiyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIM5JufFWkYAxoRmNv2KtwDdYl2FcGAKwtxsIsl6WJXt40SogPt52Zc%2B3wFXVS%2B7cpya8YSCO1tpmH9PnQWxseT4nXz9UedIjnPzivBFG3EG1ipDgZOHEB4AYFtb1tBj9z9vLPO9C5U6OHUpn6LO8pLPaJWJfd3lo82lhZoGogWnaJUWKEX3qy5ePBl9LlOiWOivjuhBlSN1wlHLLeEzcJa%2BsmfsIfFyec%2FH2Okb1op%2B2KC5C17iqwbJ9%2FuHTCBYu6rR7NdffscHE18sh8nLTzWvSvnruA%2FdB3DiUepFa6geH%2FNV4of3zyfOiClL%2FDe4fvPWBB%2BP3CMQWOO1JIselGjbcBN8E1QLuXR2TS0L4I9SKgEsgthz63ZDgOnwUn2DpVfzapU0v%2FeKzQoyGnkamSKWLYFJPl2H%2FYovPupXRTfycr3uv8e1Zq9BuxxEJ%2BI7VqAmArhlEEFHua2683txK1fgNxmQ1RXDxoGTa4ArG2ifyIVLie%2BJl9Q2Z0%2FCnyvaltopMxIqaDYipwm9ZhaaLiEE78Z1oYN%2BHbGo%2FTm9KI5RGTUWMs3TWXzrox2%2BS2OEH0yK9w4J6SbPue5TTrF1Jph4U6CYLycqtHv1P%2FVEh%2B6rXkmoUeiI1CXRJyiAHEBN6TawCNpTZG%2Fxypw0PowwfqSxAY6pgH127%2FFjIkTqN5rU%2FbL%2BhcIi%2FiCUgVfSyA%2BxRuRnff5QqaAqnXMR4cy8hpzVX0DGLKS39ZLWz4AEkPekoErDRuB%2BLDGXyo%2BlnQVVEeeU2Ek680z9VF0viM%2BF%2BECAeBeQehNqY59Q0svPlHNP2chspNCMjwZrHqoTI6FOFuj31Z6f046OY6Qd5PEVNPc9n9oyDNkTZ8NBI2Nw%2Fxwl20Pp31DQOnpArfI&X-Amz-Signature=31881f0cb719c5cb7297abd32262f4319eb58da52cce27152633e118995ef8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
