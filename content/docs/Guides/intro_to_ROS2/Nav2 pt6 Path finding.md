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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR477YBS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCueSt3XREN5IJ6HCzb%2BP%2FTQAISQeXsucrtHh6CQ%2BvbpAIhAIE0lglhWTpYRAhSq%2FbT%2Bd6%2Fv1fRb5Pnb6UmWfmYJMzCKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0AoYglKW22E4vaJMq3APzhnvyylMokTFG1PWwGyAo0MdnRmypKT5GdjJ3bWAlUyt%2Fog4Nf4hCHfoyEKr%2FbbCYYoayTO6C9AcGUI4wH3iimokxH8V8x5d%2B%2FC%2FWwXLh7bFa3jQuGdyul6lh90%2BjyfO4hXR9PjPOZKIoIp8P%2BXW6xdzFRD5Wf0U1ZieCxYsbQ%2FjuUa7glZDH4y3cyEE6Ni6dD6gFhIgCHFgx8jwPhzWxqO8XUVMqtEjDxJftw1Ho2CqGzstqV4sDUOEIK3YLQpge8w1GEnkrEdhZxe8PTZgy6bzQWWZwYzZ%2F%2Ff7H6aqGZwlfGJfn1eFYxSzbfJa4hvP0vl%2FQyOK6%2B0wmWw8FDH%2FEaY2wSTOX4IhrivY13eirZVZUtxsF9goS2q7yRdrw5q0IvAZn4UfkD%2BwTfXM5BTq%2F%2BN0KgRiHslO8oYF8ocHt86xdCyu4DHQSTpBslZUojp4IXyLV40ceuqmXF%2B3LImImccAQmvhy1KONM8GV5E1ULc%2By5cEKVJixOnQ1Kk4KuJP%2FU4AH7L07%2FTtW4J5WQIMPwvekFkggty1Zw77LzlCeAlUQXRV2I2wVhSONGH10kykB1BF0%2FvxybAmCac87lT0InPhfWqZ5zZSj4kT%2B21byy4vOCF7IH9nxS%2BdoPDDGna3EBjqkAXJUrRzkAqqRzfD39EdUvglRFhBf7fYsywMCcW5T9BvKz2ofGDn5aHNooF9RtQ8JslUBtsPDvWHQJiZdfpVzCz1gh5R9RCNFDQyBLiyTwsKwPv%2FeFRDOR89MAftZOQYm%2BOyj6V%2FF50rXAGxD2bJFQdqrHcGpqVaHbQlrXbl43KT1%2BI0FjQppq33u9tZqf0%2FfkboZFzgMC4bq5kYda%2Bjm6xZX5xvX&X-Amz-Signature=5daf2a3108c7530f6b492f22af5be8bd041bb85a00f68cd58b9d11267b2abf90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR477YBS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCueSt3XREN5IJ6HCzb%2BP%2FTQAISQeXsucrtHh6CQ%2BvbpAIhAIE0lglhWTpYRAhSq%2FbT%2Bd6%2Fv1fRb5Pnb6UmWfmYJMzCKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0AoYglKW22E4vaJMq3APzhnvyylMokTFG1PWwGyAo0MdnRmypKT5GdjJ3bWAlUyt%2Fog4Nf4hCHfoyEKr%2FbbCYYoayTO6C9AcGUI4wH3iimokxH8V8x5d%2B%2FC%2FWwXLh7bFa3jQuGdyul6lh90%2BjyfO4hXR9PjPOZKIoIp8P%2BXW6xdzFRD5Wf0U1ZieCxYsbQ%2FjuUa7glZDH4y3cyEE6Ni6dD6gFhIgCHFgx8jwPhzWxqO8XUVMqtEjDxJftw1Ho2CqGzstqV4sDUOEIK3YLQpge8w1GEnkrEdhZxe8PTZgy6bzQWWZwYzZ%2F%2Ff7H6aqGZwlfGJfn1eFYxSzbfJa4hvP0vl%2FQyOK6%2B0wmWw8FDH%2FEaY2wSTOX4IhrivY13eirZVZUtxsF9goS2q7yRdrw5q0IvAZn4UfkD%2BwTfXM5BTq%2F%2BN0KgRiHslO8oYF8ocHt86xdCyu4DHQSTpBslZUojp4IXyLV40ceuqmXF%2B3LImImccAQmvhy1KONM8GV5E1ULc%2By5cEKVJixOnQ1Kk4KuJP%2FU4AH7L07%2FTtW4J5WQIMPwvekFkggty1Zw77LzlCeAlUQXRV2I2wVhSONGH10kykB1BF0%2FvxybAmCac87lT0InPhfWqZ5zZSj4kT%2B21byy4vOCF7IH9nxS%2BdoPDDGna3EBjqkAXJUrRzkAqqRzfD39EdUvglRFhBf7fYsywMCcW5T9BvKz2ofGDn5aHNooF9RtQ8JslUBtsPDvWHQJiZdfpVzCz1gh5R9RCNFDQyBLiyTwsKwPv%2FeFRDOR89MAftZOQYm%2BOyj6V%2FF50rXAGxD2bJFQdqrHcGpqVaHbQlrXbl43KT1%2BI0FjQppq33u9tZqf0%2FfkboZFzgMC4bq5kYda%2Bjm6xZX5xvX&X-Amz-Signature=1186441b077e8980951df1a38b4a81cb92b48748b73cfabddb18df74c7d6e34c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR477YBS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCueSt3XREN5IJ6HCzb%2BP%2FTQAISQeXsucrtHh6CQ%2BvbpAIhAIE0lglhWTpYRAhSq%2FbT%2Bd6%2Fv1fRb5Pnb6UmWfmYJMzCKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0AoYglKW22E4vaJMq3APzhnvyylMokTFG1PWwGyAo0MdnRmypKT5GdjJ3bWAlUyt%2Fog4Nf4hCHfoyEKr%2FbbCYYoayTO6C9AcGUI4wH3iimokxH8V8x5d%2B%2FC%2FWwXLh7bFa3jQuGdyul6lh90%2BjyfO4hXR9PjPOZKIoIp8P%2BXW6xdzFRD5Wf0U1ZieCxYsbQ%2FjuUa7glZDH4y3cyEE6Ni6dD6gFhIgCHFgx8jwPhzWxqO8XUVMqtEjDxJftw1Ho2CqGzstqV4sDUOEIK3YLQpge8w1GEnkrEdhZxe8PTZgy6bzQWWZwYzZ%2F%2Ff7H6aqGZwlfGJfn1eFYxSzbfJa4hvP0vl%2FQyOK6%2B0wmWw8FDH%2FEaY2wSTOX4IhrivY13eirZVZUtxsF9goS2q7yRdrw5q0IvAZn4UfkD%2BwTfXM5BTq%2F%2BN0KgRiHslO8oYF8ocHt86xdCyu4DHQSTpBslZUojp4IXyLV40ceuqmXF%2B3LImImccAQmvhy1KONM8GV5E1ULc%2By5cEKVJixOnQ1Kk4KuJP%2FU4AH7L07%2FTtW4J5WQIMPwvekFkggty1Zw77LzlCeAlUQXRV2I2wVhSONGH10kykB1BF0%2FvxybAmCac87lT0InPhfWqZ5zZSj4kT%2B21byy4vOCF7IH9nxS%2BdoPDDGna3EBjqkAXJUrRzkAqqRzfD39EdUvglRFhBf7fYsywMCcW5T9BvKz2ofGDn5aHNooF9RtQ8JslUBtsPDvWHQJiZdfpVzCz1gh5R9RCNFDQyBLiyTwsKwPv%2FeFRDOR89MAftZOQYm%2BOyj6V%2FF50rXAGxD2bJFQdqrHcGpqVaHbQlrXbl43KT1%2BI0FjQppq33u9tZqf0%2FfkboZFzgMC4bq5kYda%2Bjm6xZX5xvX&X-Amz-Signature=f14340d786dd7470f6d04fa206ced4179eb60d5e0e22f8a9f9ea7a41d9ba3501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR477YBS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCueSt3XREN5IJ6HCzb%2BP%2FTQAISQeXsucrtHh6CQ%2BvbpAIhAIE0lglhWTpYRAhSq%2FbT%2Bd6%2Fv1fRb5Pnb6UmWfmYJMzCKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0AoYglKW22E4vaJMq3APzhnvyylMokTFG1PWwGyAo0MdnRmypKT5GdjJ3bWAlUyt%2Fog4Nf4hCHfoyEKr%2FbbCYYoayTO6C9AcGUI4wH3iimokxH8V8x5d%2B%2FC%2FWwXLh7bFa3jQuGdyul6lh90%2BjyfO4hXR9PjPOZKIoIp8P%2BXW6xdzFRD5Wf0U1ZieCxYsbQ%2FjuUa7glZDH4y3cyEE6Ni6dD6gFhIgCHFgx8jwPhzWxqO8XUVMqtEjDxJftw1Ho2CqGzstqV4sDUOEIK3YLQpge8w1GEnkrEdhZxe8PTZgy6bzQWWZwYzZ%2F%2Ff7H6aqGZwlfGJfn1eFYxSzbfJa4hvP0vl%2FQyOK6%2B0wmWw8FDH%2FEaY2wSTOX4IhrivY13eirZVZUtxsF9goS2q7yRdrw5q0IvAZn4UfkD%2BwTfXM5BTq%2F%2BN0KgRiHslO8oYF8ocHt86xdCyu4DHQSTpBslZUojp4IXyLV40ceuqmXF%2B3LImImccAQmvhy1KONM8GV5E1ULc%2By5cEKVJixOnQ1Kk4KuJP%2FU4AH7L07%2FTtW4J5WQIMPwvekFkggty1Zw77LzlCeAlUQXRV2I2wVhSONGH10kykB1BF0%2FvxybAmCac87lT0InPhfWqZ5zZSj4kT%2B21byy4vOCF7IH9nxS%2BdoPDDGna3EBjqkAXJUrRzkAqqRzfD39EdUvglRFhBf7fYsywMCcW5T9BvKz2ofGDn5aHNooF9RtQ8JslUBtsPDvWHQJiZdfpVzCz1gh5R9RCNFDQyBLiyTwsKwPv%2FeFRDOR89MAftZOQYm%2BOyj6V%2FF50rXAGxD2bJFQdqrHcGpqVaHbQlrXbl43KT1%2BI0FjQppq33u9tZqf0%2FfkboZFzgMC4bq5kYda%2Bjm6xZX5xvX&X-Amz-Signature=a019adbbc574498f2623b00720cb6d9bd829bbaeafac840e7aab345699e6a722&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR477YBS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCueSt3XREN5IJ6HCzb%2BP%2FTQAISQeXsucrtHh6CQ%2BvbpAIhAIE0lglhWTpYRAhSq%2FbT%2Bd6%2Fv1fRb5Pnb6UmWfmYJMzCKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0AoYglKW22E4vaJMq3APzhnvyylMokTFG1PWwGyAo0MdnRmypKT5GdjJ3bWAlUyt%2Fog4Nf4hCHfoyEKr%2FbbCYYoayTO6C9AcGUI4wH3iimokxH8V8x5d%2B%2FC%2FWwXLh7bFa3jQuGdyul6lh90%2BjyfO4hXR9PjPOZKIoIp8P%2BXW6xdzFRD5Wf0U1ZieCxYsbQ%2FjuUa7glZDH4y3cyEE6Ni6dD6gFhIgCHFgx8jwPhzWxqO8XUVMqtEjDxJftw1Ho2CqGzstqV4sDUOEIK3YLQpge8w1GEnkrEdhZxe8PTZgy6bzQWWZwYzZ%2F%2Ff7H6aqGZwlfGJfn1eFYxSzbfJa4hvP0vl%2FQyOK6%2B0wmWw8FDH%2FEaY2wSTOX4IhrivY13eirZVZUtxsF9goS2q7yRdrw5q0IvAZn4UfkD%2BwTfXM5BTq%2F%2BN0KgRiHslO8oYF8ocHt86xdCyu4DHQSTpBslZUojp4IXyLV40ceuqmXF%2B3LImImccAQmvhy1KONM8GV5E1ULc%2By5cEKVJixOnQ1Kk4KuJP%2FU4AH7L07%2FTtW4J5WQIMPwvekFkggty1Zw77LzlCeAlUQXRV2I2wVhSONGH10kykB1BF0%2FvxybAmCac87lT0InPhfWqZ5zZSj4kT%2B21byy4vOCF7IH9nxS%2BdoPDDGna3EBjqkAXJUrRzkAqqRzfD39EdUvglRFhBf7fYsywMCcW5T9BvKz2ofGDn5aHNooF9RtQ8JslUBtsPDvWHQJiZdfpVzCz1gh5R9RCNFDQyBLiyTwsKwPv%2FeFRDOR89MAftZOQYm%2BOyj6V%2FF50rXAGxD2bJFQdqrHcGpqVaHbQlrXbl43KT1%2BI0FjQppq33u9tZqf0%2FfkboZFzgMC4bq5kYda%2Bjm6xZX5xvX&X-Amz-Signature=e099f6348c8468db88eeb5715c6d5fe8332f56db8e7b54367165525bb3a240b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR477YBS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCueSt3XREN5IJ6HCzb%2BP%2FTQAISQeXsucrtHh6CQ%2BvbpAIhAIE0lglhWTpYRAhSq%2FbT%2Bd6%2Fv1fRb5Pnb6UmWfmYJMzCKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0AoYglKW22E4vaJMq3APzhnvyylMokTFG1PWwGyAo0MdnRmypKT5GdjJ3bWAlUyt%2Fog4Nf4hCHfoyEKr%2FbbCYYoayTO6C9AcGUI4wH3iimokxH8V8x5d%2B%2FC%2FWwXLh7bFa3jQuGdyul6lh90%2BjyfO4hXR9PjPOZKIoIp8P%2BXW6xdzFRD5Wf0U1ZieCxYsbQ%2FjuUa7glZDH4y3cyEE6Ni6dD6gFhIgCHFgx8jwPhzWxqO8XUVMqtEjDxJftw1Ho2CqGzstqV4sDUOEIK3YLQpge8w1GEnkrEdhZxe8PTZgy6bzQWWZwYzZ%2F%2Ff7H6aqGZwlfGJfn1eFYxSzbfJa4hvP0vl%2FQyOK6%2B0wmWw8FDH%2FEaY2wSTOX4IhrivY13eirZVZUtxsF9goS2q7yRdrw5q0IvAZn4UfkD%2BwTfXM5BTq%2F%2BN0KgRiHslO8oYF8ocHt86xdCyu4DHQSTpBslZUojp4IXyLV40ceuqmXF%2B3LImImccAQmvhy1KONM8GV5E1ULc%2By5cEKVJixOnQ1Kk4KuJP%2FU4AH7L07%2FTtW4J5WQIMPwvekFkggty1Zw77LzlCeAlUQXRV2I2wVhSONGH10kykB1BF0%2FvxybAmCac87lT0InPhfWqZ5zZSj4kT%2B21byy4vOCF7IH9nxS%2BdoPDDGna3EBjqkAXJUrRzkAqqRzfD39EdUvglRFhBf7fYsywMCcW5T9BvKz2ofGDn5aHNooF9RtQ8JslUBtsPDvWHQJiZdfpVzCz1gh5R9RCNFDQyBLiyTwsKwPv%2FeFRDOR89MAftZOQYm%2BOyj6V%2FF50rXAGxD2bJFQdqrHcGpqVaHbQlrXbl43KT1%2BI0FjQppq33u9tZqf0%2FfkboZFzgMC4bq5kYda%2Bjm6xZX5xvX&X-Amz-Signature=89263fead32196b702f0812454c5d2f69787811002be8d439f8a75b1a254633c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR477YBS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCueSt3XREN5IJ6HCzb%2BP%2FTQAISQeXsucrtHh6CQ%2BvbpAIhAIE0lglhWTpYRAhSq%2FbT%2Bd6%2Fv1fRb5Pnb6UmWfmYJMzCKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0AoYglKW22E4vaJMq3APzhnvyylMokTFG1PWwGyAo0MdnRmypKT5GdjJ3bWAlUyt%2Fog4Nf4hCHfoyEKr%2FbbCYYoayTO6C9AcGUI4wH3iimokxH8V8x5d%2B%2FC%2FWwXLh7bFa3jQuGdyul6lh90%2BjyfO4hXR9PjPOZKIoIp8P%2BXW6xdzFRD5Wf0U1ZieCxYsbQ%2FjuUa7glZDH4y3cyEE6Ni6dD6gFhIgCHFgx8jwPhzWxqO8XUVMqtEjDxJftw1Ho2CqGzstqV4sDUOEIK3YLQpge8w1GEnkrEdhZxe8PTZgy6bzQWWZwYzZ%2F%2Ff7H6aqGZwlfGJfn1eFYxSzbfJa4hvP0vl%2FQyOK6%2B0wmWw8FDH%2FEaY2wSTOX4IhrivY13eirZVZUtxsF9goS2q7yRdrw5q0IvAZn4UfkD%2BwTfXM5BTq%2F%2BN0KgRiHslO8oYF8ocHt86xdCyu4DHQSTpBslZUojp4IXyLV40ceuqmXF%2B3LImImccAQmvhy1KONM8GV5E1ULc%2By5cEKVJixOnQ1Kk4KuJP%2FU4AH7L07%2FTtW4J5WQIMPwvekFkggty1Zw77LzlCeAlUQXRV2I2wVhSONGH10kykB1BF0%2FvxybAmCac87lT0InPhfWqZ5zZSj4kT%2B21byy4vOCF7IH9nxS%2BdoPDDGna3EBjqkAXJUrRzkAqqRzfD39EdUvglRFhBf7fYsywMCcW5T9BvKz2ofGDn5aHNooF9RtQ8JslUBtsPDvWHQJiZdfpVzCz1gh5R9RCNFDQyBLiyTwsKwPv%2FeFRDOR89MAftZOQYm%2BOyj6V%2FF50rXAGxD2bJFQdqrHcGpqVaHbQlrXbl43KT1%2BI0FjQppq33u9tZqf0%2FfkboZFzgMC4bq5kYda%2Bjm6xZX5xvX&X-Amz-Signature=42703783415193381bdca99952a50ef79b799c5ecb89c665cd8747c5fa56f1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR477YBS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCueSt3XREN5IJ6HCzb%2BP%2FTQAISQeXsucrtHh6CQ%2BvbpAIhAIE0lglhWTpYRAhSq%2FbT%2Bd6%2Fv1fRb5Pnb6UmWfmYJMzCKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0AoYglKW22E4vaJMq3APzhnvyylMokTFG1PWwGyAo0MdnRmypKT5GdjJ3bWAlUyt%2Fog4Nf4hCHfoyEKr%2FbbCYYoayTO6C9AcGUI4wH3iimokxH8V8x5d%2B%2FC%2FWwXLh7bFa3jQuGdyul6lh90%2BjyfO4hXR9PjPOZKIoIp8P%2BXW6xdzFRD5Wf0U1ZieCxYsbQ%2FjuUa7glZDH4y3cyEE6Ni6dD6gFhIgCHFgx8jwPhzWxqO8XUVMqtEjDxJftw1Ho2CqGzstqV4sDUOEIK3YLQpge8w1GEnkrEdhZxe8PTZgy6bzQWWZwYzZ%2F%2Ff7H6aqGZwlfGJfn1eFYxSzbfJa4hvP0vl%2FQyOK6%2B0wmWw8FDH%2FEaY2wSTOX4IhrivY13eirZVZUtxsF9goS2q7yRdrw5q0IvAZn4UfkD%2BwTfXM5BTq%2F%2BN0KgRiHslO8oYF8ocHt86xdCyu4DHQSTpBslZUojp4IXyLV40ceuqmXF%2B3LImImccAQmvhy1KONM8GV5E1ULc%2By5cEKVJixOnQ1Kk4KuJP%2FU4AH7L07%2FTtW4J5WQIMPwvekFkggty1Zw77LzlCeAlUQXRV2I2wVhSONGH10kykB1BF0%2FvxybAmCac87lT0InPhfWqZ5zZSj4kT%2B21byy4vOCF7IH9nxS%2BdoPDDGna3EBjqkAXJUrRzkAqqRzfD39EdUvglRFhBf7fYsywMCcW5T9BvKz2ofGDn5aHNooF9RtQ8JslUBtsPDvWHQJiZdfpVzCz1gh5R9RCNFDQyBLiyTwsKwPv%2FeFRDOR89MAftZOQYm%2BOyj6V%2FF50rXAGxD2bJFQdqrHcGpqVaHbQlrXbl43KT1%2BI0FjQppq33u9tZqf0%2FfkboZFzgMC4bq5kYda%2Bjm6xZX5xvX&X-Amz-Signature=1f42f11bb5a5bbf9b800dfe604b9bea744f8b7cf612df9ede393851e6696fe42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR477YBS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCueSt3XREN5IJ6HCzb%2BP%2FTQAISQeXsucrtHh6CQ%2BvbpAIhAIE0lglhWTpYRAhSq%2FbT%2Bd6%2Fv1fRb5Pnb6UmWfmYJMzCKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0AoYglKW22E4vaJMq3APzhnvyylMokTFG1PWwGyAo0MdnRmypKT5GdjJ3bWAlUyt%2Fog4Nf4hCHfoyEKr%2FbbCYYoayTO6C9AcGUI4wH3iimokxH8V8x5d%2B%2FC%2FWwXLh7bFa3jQuGdyul6lh90%2BjyfO4hXR9PjPOZKIoIp8P%2BXW6xdzFRD5Wf0U1ZieCxYsbQ%2FjuUa7glZDH4y3cyEE6Ni6dD6gFhIgCHFgx8jwPhzWxqO8XUVMqtEjDxJftw1Ho2CqGzstqV4sDUOEIK3YLQpge8w1GEnkrEdhZxe8PTZgy6bzQWWZwYzZ%2F%2Ff7H6aqGZwlfGJfn1eFYxSzbfJa4hvP0vl%2FQyOK6%2B0wmWw8FDH%2FEaY2wSTOX4IhrivY13eirZVZUtxsF9goS2q7yRdrw5q0IvAZn4UfkD%2BwTfXM5BTq%2F%2BN0KgRiHslO8oYF8ocHt86xdCyu4DHQSTpBslZUojp4IXyLV40ceuqmXF%2B3LImImccAQmvhy1KONM8GV5E1ULc%2By5cEKVJixOnQ1Kk4KuJP%2FU4AH7L07%2FTtW4J5WQIMPwvekFkggty1Zw77LzlCeAlUQXRV2I2wVhSONGH10kykB1BF0%2FvxybAmCac87lT0InPhfWqZ5zZSj4kT%2B21byy4vOCF7IH9nxS%2BdoPDDGna3EBjqkAXJUrRzkAqqRzfD39EdUvglRFhBf7fYsywMCcW5T9BvKz2ofGDn5aHNooF9RtQ8JslUBtsPDvWHQJiZdfpVzCz1gh5R9RCNFDQyBLiyTwsKwPv%2FeFRDOR89MAftZOQYm%2BOyj6V%2FF50rXAGxD2bJFQdqrHcGpqVaHbQlrXbl43KT1%2BI0FjQppq33u9tZqf0%2FfkboZFzgMC4bq5kYda%2Bjm6xZX5xvX&X-Amz-Signature=990399ddd30bb4907e29131b5fef4a672ac211ea456f8686a8ab63dc1f4c5223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR477YBS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCueSt3XREN5IJ6HCzb%2BP%2FTQAISQeXsucrtHh6CQ%2BvbpAIhAIE0lglhWTpYRAhSq%2FbT%2Bd6%2Fv1fRb5Pnb6UmWfmYJMzCKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0AoYglKW22E4vaJMq3APzhnvyylMokTFG1PWwGyAo0MdnRmypKT5GdjJ3bWAlUyt%2Fog4Nf4hCHfoyEKr%2FbbCYYoayTO6C9AcGUI4wH3iimokxH8V8x5d%2B%2FC%2FWwXLh7bFa3jQuGdyul6lh90%2BjyfO4hXR9PjPOZKIoIp8P%2BXW6xdzFRD5Wf0U1ZieCxYsbQ%2FjuUa7glZDH4y3cyEE6Ni6dD6gFhIgCHFgx8jwPhzWxqO8XUVMqtEjDxJftw1Ho2CqGzstqV4sDUOEIK3YLQpge8w1GEnkrEdhZxe8PTZgy6bzQWWZwYzZ%2F%2Ff7H6aqGZwlfGJfn1eFYxSzbfJa4hvP0vl%2FQyOK6%2B0wmWw8FDH%2FEaY2wSTOX4IhrivY13eirZVZUtxsF9goS2q7yRdrw5q0IvAZn4UfkD%2BwTfXM5BTq%2F%2BN0KgRiHslO8oYF8ocHt86xdCyu4DHQSTpBslZUojp4IXyLV40ceuqmXF%2B3LImImccAQmvhy1KONM8GV5E1ULc%2By5cEKVJixOnQ1Kk4KuJP%2FU4AH7L07%2FTtW4J5WQIMPwvekFkggty1Zw77LzlCeAlUQXRV2I2wVhSONGH10kykB1BF0%2FvxybAmCac87lT0InPhfWqZ5zZSj4kT%2B21byy4vOCF7IH9nxS%2BdoPDDGna3EBjqkAXJUrRzkAqqRzfD39EdUvglRFhBf7fYsywMCcW5T9BvKz2ofGDn5aHNooF9RtQ8JslUBtsPDvWHQJiZdfpVzCz1gh5R9RCNFDQyBLiyTwsKwPv%2FeFRDOR89MAftZOQYm%2BOyj6V%2FF50rXAGxD2bJFQdqrHcGpqVaHbQlrXbl43KT1%2BI0FjQppq33u9tZqf0%2FfkboZFzgMC4bq5kYda%2Bjm6xZX5xvX&X-Amz-Signature=b7086c4ce0baf42eb14f7c9902ddbf029726f941baf0a1c62e03e0db08a99055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR477YBS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCueSt3XREN5IJ6HCzb%2BP%2FTQAISQeXsucrtHh6CQ%2BvbpAIhAIE0lglhWTpYRAhSq%2FbT%2Bd6%2Fv1fRb5Pnb6UmWfmYJMzCKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0AoYglKW22E4vaJMq3APzhnvyylMokTFG1PWwGyAo0MdnRmypKT5GdjJ3bWAlUyt%2Fog4Nf4hCHfoyEKr%2FbbCYYoayTO6C9AcGUI4wH3iimokxH8V8x5d%2B%2FC%2FWwXLh7bFa3jQuGdyul6lh90%2BjyfO4hXR9PjPOZKIoIp8P%2BXW6xdzFRD5Wf0U1ZieCxYsbQ%2FjuUa7glZDH4y3cyEE6Ni6dD6gFhIgCHFgx8jwPhzWxqO8XUVMqtEjDxJftw1Ho2CqGzstqV4sDUOEIK3YLQpge8w1GEnkrEdhZxe8PTZgy6bzQWWZwYzZ%2F%2Ff7H6aqGZwlfGJfn1eFYxSzbfJa4hvP0vl%2FQyOK6%2B0wmWw8FDH%2FEaY2wSTOX4IhrivY13eirZVZUtxsF9goS2q7yRdrw5q0IvAZn4UfkD%2BwTfXM5BTq%2F%2BN0KgRiHslO8oYF8ocHt86xdCyu4DHQSTpBslZUojp4IXyLV40ceuqmXF%2B3LImImccAQmvhy1KONM8GV5E1ULc%2By5cEKVJixOnQ1Kk4KuJP%2FU4AH7L07%2FTtW4J5WQIMPwvekFkggty1Zw77LzlCeAlUQXRV2I2wVhSONGH10kykB1BF0%2FvxybAmCac87lT0InPhfWqZ5zZSj4kT%2B21byy4vOCF7IH9nxS%2BdoPDDGna3EBjqkAXJUrRzkAqqRzfD39EdUvglRFhBf7fYsywMCcW5T9BvKz2ofGDn5aHNooF9RtQ8JslUBtsPDvWHQJiZdfpVzCz1gh5R9RCNFDQyBLiyTwsKwPv%2FeFRDOR89MAftZOQYm%2BOyj6V%2FF50rXAGxD2bJFQdqrHcGpqVaHbQlrXbl43KT1%2BI0FjQppq33u9tZqf0%2FfkboZFzgMC4bq5kYda%2Bjm6xZX5xvX&X-Amz-Signature=a6c39061ce4af961c1d777e4cb38ff4609bb51a8bd60e52824cc98061c722c0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR477YBS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCueSt3XREN5IJ6HCzb%2BP%2FTQAISQeXsucrtHh6CQ%2BvbpAIhAIE0lglhWTpYRAhSq%2FbT%2Bd6%2Fv1fRb5Pnb6UmWfmYJMzCKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0AoYglKW22E4vaJMq3APzhnvyylMokTFG1PWwGyAo0MdnRmypKT5GdjJ3bWAlUyt%2Fog4Nf4hCHfoyEKr%2FbbCYYoayTO6C9AcGUI4wH3iimokxH8V8x5d%2B%2FC%2FWwXLh7bFa3jQuGdyul6lh90%2BjyfO4hXR9PjPOZKIoIp8P%2BXW6xdzFRD5Wf0U1ZieCxYsbQ%2FjuUa7glZDH4y3cyEE6Ni6dD6gFhIgCHFgx8jwPhzWxqO8XUVMqtEjDxJftw1Ho2CqGzstqV4sDUOEIK3YLQpge8w1GEnkrEdhZxe8PTZgy6bzQWWZwYzZ%2F%2Ff7H6aqGZwlfGJfn1eFYxSzbfJa4hvP0vl%2FQyOK6%2B0wmWw8FDH%2FEaY2wSTOX4IhrivY13eirZVZUtxsF9goS2q7yRdrw5q0IvAZn4UfkD%2BwTfXM5BTq%2F%2BN0KgRiHslO8oYF8ocHt86xdCyu4DHQSTpBslZUojp4IXyLV40ceuqmXF%2B3LImImccAQmvhy1KONM8GV5E1ULc%2By5cEKVJixOnQ1Kk4KuJP%2FU4AH7L07%2FTtW4J5WQIMPwvekFkggty1Zw77LzlCeAlUQXRV2I2wVhSONGH10kykB1BF0%2FvxybAmCac87lT0InPhfWqZ5zZSj4kT%2B21byy4vOCF7IH9nxS%2BdoPDDGna3EBjqkAXJUrRzkAqqRzfD39EdUvglRFhBf7fYsywMCcW5T9BvKz2ofGDn5aHNooF9RtQ8JslUBtsPDvWHQJiZdfpVzCz1gh5R9RCNFDQyBLiyTwsKwPv%2FeFRDOR89MAftZOQYm%2BOyj6V%2FF50rXAGxD2bJFQdqrHcGpqVaHbQlrXbl43KT1%2BI0FjQppq33u9tZqf0%2FfkboZFzgMC4bq5kYda%2Bjm6xZX5xvX&X-Amz-Signature=f0d4e76453d1d6a97c4c4d374b59b6f65f348f50d41fc05e0e8cee0807d9e07a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR477YBS%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCueSt3XREN5IJ6HCzb%2BP%2FTQAISQeXsucrtHh6CQ%2BvbpAIhAIE0lglhWTpYRAhSq%2FbT%2Bd6%2Fv1fRb5Pnb6UmWfmYJMzCKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0AoYglKW22E4vaJMq3APzhnvyylMokTFG1PWwGyAo0MdnRmypKT5GdjJ3bWAlUyt%2Fog4Nf4hCHfoyEKr%2FbbCYYoayTO6C9AcGUI4wH3iimokxH8V8x5d%2B%2FC%2FWwXLh7bFa3jQuGdyul6lh90%2BjyfO4hXR9PjPOZKIoIp8P%2BXW6xdzFRD5Wf0U1ZieCxYsbQ%2FjuUa7glZDH4y3cyEE6Ni6dD6gFhIgCHFgx8jwPhzWxqO8XUVMqtEjDxJftw1Ho2CqGzstqV4sDUOEIK3YLQpge8w1GEnkrEdhZxe8PTZgy6bzQWWZwYzZ%2F%2Ff7H6aqGZwlfGJfn1eFYxSzbfJa4hvP0vl%2FQyOK6%2B0wmWw8FDH%2FEaY2wSTOX4IhrivY13eirZVZUtxsF9goS2q7yRdrw5q0IvAZn4UfkD%2BwTfXM5BTq%2F%2BN0KgRiHslO8oYF8ocHt86xdCyu4DHQSTpBslZUojp4IXyLV40ceuqmXF%2B3LImImccAQmvhy1KONM8GV5E1ULc%2By5cEKVJixOnQ1Kk4KuJP%2FU4AH7L07%2FTtW4J5WQIMPwvekFkggty1Zw77LzlCeAlUQXRV2I2wVhSONGH10kykB1BF0%2FvxybAmCac87lT0InPhfWqZ5zZSj4kT%2B21byy4vOCF7IH9nxS%2BdoPDDGna3EBjqkAXJUrRzkAqqRzfD39EdUvglRFhBf7fYsywMCcW5T9BvKz2ofGDn5aHNooF9RtQ8JslUBtsPDvWHQJiZdfpVzCz1gh5R9RCNFDQyBLiyTwsKwPv%2FeFRDOR89MAftZOQYm%2BOyj6V%2FF50rXAGxD2bJFQdqrHcGpqVaHbQlrXbl43KT1%2BI0FjQppq33u9tZqf0%2FfkboZFzgMC4bq5kYda%2Bjm6xZX5xvX&X-Amz-Signature=7d25a9f14a523a6c6a954da5a1c9cb3282c6d10bb6ff94cdda66734fbe00a5b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
