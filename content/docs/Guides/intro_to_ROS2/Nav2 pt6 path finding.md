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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJLKQXRS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIA91KYHHmCWt5lztJSj3mzwbZ0oilHNhWKla7O00eQy9AiBeoylSZopShFrcHVpOikdLCPWBfrN3l7FSejCmkIfO4yqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWEk2oVHbIdSvzmGOKtwD%2BuD6i8c1EMeMz9JrF57zKztKlitqxPjUvhZtynJDkspIie4ZpAnkWvHYOOpvkB3mvQQ5geQJiXi9CMr5yfBNF2mmU1U2ss9wpKTFzcXGBQGXxR4t4w5mWMxex8ZGMTBK7wz4TeheMPq5GnSgz39oLfHeyT0YjZ4NyABxkzHGj%2BCr8wyqo15KYCLaNK1z0Mx9LJaPKkam%2F3ZtViHZdnxmc6kaPlBJVW5Y5DoFmyW07wMIbqcbeUCwz348%2BeDn1WVtZlbeiW8cVgtiX1Ln7AXYOZ0uQNpXE6008W9Y02wIqiNw3yz64HR9ihygO5o9clateHYl3eiXgxeXzgX8VyTcu5hpf2N3N87k5e4s%2F5iKrtdwn21m19dewFs7O4vb8VU5V4hxLV8b59klu89VnIIaNO%2FyO9hRGKXor6xHP9NbFsvvifS3t1iK8A51CWxoJPqNntOrJkWwgr2sU4bT%2Bs2xhdCSx8SKOohQ4SAfMfFUU8U4mcjnir0hsaAAhrL4Qw%2Frtl4%2FXH6USwmYd%2FkbqG3zWQMF%2Fk0K0j03V%2F3G0oSDKbQlbtdtHZQKbrMsiEdxxrbzsNl0dpZL6%2FbAt5u4RXG1vCmTAMqrYcMD5HxiFpkLn89glTdw16soNcvWLNww8tGexAY6pgFjEucxr8AE%2FgVRR7NAMQabK%2BXr%2F7sxM5KoT0O2mA8VFW80Av%2BIcnZ7oLPmMNQyr2GncUbhRtFuKess1vrpDuH4OYkUM73oqlEvTJC6qX6vRD0DsqlQRI6n5SdEojpXZYcisOepCU4htF%2FIv6o3wI%2FAw9f0tlYesmL6s1jb3y%2F9Ds94dFM8BgA4Q5tzTY7oQh381CIdYELCl0rEzCS0hETsMuWtMuKm&X-Amz-Signature=18fbc5ad2ae21cfb428ab4c27af6d9930ac938fa9e1e3dd34d92c50d8967ccb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJLKQXRS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIA91KYHHmCWt5lztJSj3mzwbZ0oilHNhWKla7O00eQy9AiBeoylSZopShFrcHVpOikdLCPWBfrN3l7FSejCmkIfO4yqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWEk2oVHbIdSvzmGOKtwD%2BuD6i8c1EMeMz9JrF57zKztKlitqxPjUvhZtynJDkspIie4ZpAnkWvHYOOpvkB3mvQQ5geQJiXi9CMr5yfBNF2mmU1U2ss9wpKTFzcXGBQGXxR4t4w5mWMxex8ZGMTBK7wz4TeheMPq5GnSgz39oLfHeyT0YjZ4NyABxkzHGj%2BCr8wyqo15KYCLaNK1z0Mx9LJaPKkam%2F3ZtViHZdnxmc6kaPlBJVW5Y5DoFmyW07wMIbqcbeUCwz348%2BeDn1WVtZlbeiW8cVgtiX1Ln7AXYOZ0uQNpXE6008W9Y02wIqiNw3yz64HR9ihygO5o9clateHYl3eiXgxeXzgX8VyTcu5hpf2N3N87k5e4s%2F5iKrtdwn21m19dewFs7O4vb8VU5V4hxLV8b59klu89VnIIaNO%2FyO9hRGKXor6xHP9NbFsvvifS3t1iK8A51CWxoJPqNntOrJkWwgr2sU4bT%2Bs2xhdCSx8SKOohQ4SAfMfFUU8U4mcjnir0hsaAAhrL4Qw%2Frtl4%2FXH6USwmYd%2FkbqG3zWQMF%2Fk0K0j03V%2F3G0oSDKbQlbtdtHZQKbrMsiEdxxrbzsNl0dpZL6%2FbAt5u4RXG1vCmTAMqrYcMD5HxiFpkLn89glTdw16soNcvWLNww8tGexAY6pgFjEucxr8AE%2FgVRR7NAMQabK%2BXr%2F7sxM5KoT0O2mA8VFW80Av%2BIcnZ7oLPmMNQyr2GncUbhRtFuKess1vrpDuH4OYkUM73oqlEvTJC6qX6vRD0DsqlQRI6n5SdEojpXZYcisOepCU4htF%2FIv6o3wI%2FAw9f0tlYesmL6s1jb3y%2F9Ds94dFM8BgA4Q5tzTY7oQh381CIdYELCl0rEzCS0hETsMuWtMuKm&X-Amz-Signature=c4b0e5b11fe4134ce364dabe85cb535d64f0d2e5560881ae9a2ac3eff051cc0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJLKQXRS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIA91KYHHmCWt5lztJSj3mzwbZ0oilHNhWKla7O00eQy9AiBeoylSZopShFrcHVpOikdLCPWBfrN3l7FSejCmkIfO4yqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWEk2oVHbIdSvzmGOKtwD%2BuD6i8c1EMeMz9JrF57zKztKlitqxPjUvhZtynJDkspIie4ZpAnkWvHYOOpvkB3mvQQ5geQJiXi9CMr5yfBNF2mmU1U2ss9wpKTFzcXGBQGXxR4t4w5mWMxex8ZGMTBK7wz4TeheMPq5GnSgz39oLfHeyT0YjZ4NyABxkzHGj%2BCr8wyqo15KYCLaNK1z0Mx9LJaPKkam%2F3ZtViHZdnxmc6kaPlBJVW5Y5DoFmyW07wMIbqcbeUCwz348%2BeDn1WVtZlbeiW8cVgtiX1Ln7AXYOZ0uQNpXE6008W9Y02wIqiNw3yz64HR9ihygO5o9clateHYl3eiXgxeXzgX8VyTcu5hpf2N3N87k5e4s%2F5iKrtdwn21m19dewFs7O4vb8VU5V4hxLV8b59klu89VnIIaNO%2FyO9hRGKXor6xHP9NbFsvvifS3t1iK8A51CWxoJPqNntOrJkWwgr2sU4bT%2Bs2xhdCSx8SKOohQ4SAfMfFUU8U4mcjnir0hsaAAhrL4Qw%2Frtl4%2FXH6USwmYd%2FkbqG3zWQMF%2Fk0K0j03V%2F3G0oSDKbQlbtdtHZQKbrMsiEdxxrbzsNl0dpZL6%2FbAt5u4RXG1vCmTAMqrYcMD5HxiFpkLn89glTdw16soNcvWLNww8tGexAY6pgFjEucxr8AE%2FgVRR7NAMQabK%2BXr%2F7sxM5KoT0O2mA8VFW80Av%2BIcnZ7oLPmMNQyr2GncUbhRtFuKess1vrpDuH4OYkUM73oqlEvTJC6qX6vRD0DsqlQRI6n5SdEojpXZYcisOepCU4htF%2FIv6o3wI%2FAw9f0tlYesmL6s1jb3y%2F9Ds94dFM8BgA4Q5tzTY7oQh381CIdYELCl0rEzCS0hETsMuWtMuKm&X-Amz-Signature=cfc4d9da615705103987b18fdc81c066667f28e0073fce462a3a40ee2cf77a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJLKQXRS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIA91KYHHmCWt5lztJSj3mzwbZ0oilHNhWKla7O00eQy9AiBeoylSZopShFrcHVpOikdLCPWBfrN3l7FSejCmkIfO4yqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWEk2oVHbIdSvzmGOKtwD%2BuD6i8c1EMeMz9JrF57zKztKlitqxPjUvhZtynJDkspIie4ZpAnkWvHYOOpvkB3mvQQ5geQJiXi9CMr5yfBNF2mmU1U2ss9wpKTFzcXGBQGXxR4t4w5mWMxex8ZGMTBK7wz4TeheMPq5GnSgz39oLfHeyT0YjZ4NyABxkzHGj%2BCr8wyqo15KYCLaNK1z0Mx9LJaPKkam%2F3ZtViHZdnxmc6kaPlBJVW5Y5DoFmyW07wMIbqcbeUCwz348%2BeDn1WVtZlbeiW8cVgtiX1Ln7AXYOZ0uQNpXE6008W9Y02wIqiNw3yz64HR9ihygO5o9clateHYl3eiXgxeXzgX8VyTcu5hpf2N3N87k5e4s%2F5iKrtdwn21m19dewFs7O4vb8VU5V4hxLV8b59klu89VnIIaNO%2FyO9hRGKXor6xHP9NbFsvvifS3t1iK8A51CWxoJPqNntOrJkWwgr2sU4bT%2Bs2xhdCSx8SKOohQ4SAfMfFUU8U4mcjnir0hsaAAhrL4Qw%2Frtl4%2FXH6USwmYd%2FkbqG3zWQMF%2Fk0K0j03V%2F3G0oSDKbQlbtdtHZQKbrMsiEdxxrbzsNl0dpZL6%2FbAt5u4RXG1vCmTAMqrYcMD5HxiFpkLn89glTdw16soNcvWLNww8tGexAY6pgFjEucxr8AE%2FgVRR7NAMQabK%2BXr%2F7sxM5KoT0O2mA8VFW80Av%2BIcnZ7oLPmMNQyr2GncUbhRtFuKess1vrpDuH4OYkUM73oqlEvTJC6qX6vRD0DsqlQRI6n5SdEojpXZYcisOepCU4htF%2FIv6o3wI%2FAw9f0tlYesmL6s1jb3y%2F9Ds94dFM8BgA4Q5tzTY7oQh381CIdYELCl0rEzCS0hETsMuWtMuKm&X-Amz-Signature=b8318237c2f11b4a13f76c07bd022e74f31a637fe7060f1b1ec9706269f4af56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJLKQXRS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIA91KYHHmCWt5lztJSj3mzwbZ0oilHNhWKla7O00eQy9AiBeoylSZopShFrcHVpOikdLCPWBfrN3l7FSejCmkIfO4yqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWEk2oVHbIdSvzmGOKtwD%2BuD6i8c1EMeMz9JrF57zKztKlitqxPjUvhZtynJDkspIie4ZpAnkWvHYOOpvkB3mvQQ5geQJiXi9CMr5yfBNF2mmU1U2ss9wpKTFzcXGBQGXxR4t4w5mWMxex8ZGMTBK7wz4TeheMPq5GnSgz39oLfHeyT0YjZ4NyABxkzHGj%2BCr8wyqo15KYCLaNK1z0Mx9LJaPKkam%2F3ZtViHZdnxmc6kaPlBJVW5Y5DoFmyW07wMIbqcbeUCwz348%2BeDn1WVtZlbeiW8cVgtiX1Ln7AXYOZ0uQNpXE6008W9Y02wIqiNw3yz64HR9ihygO5o9clateHYl3eiXgxeXzgX8VyTcu5hpf2N3N87k5e4s%2F5iKrtdwn21m19dewFs7O4vb8VU5V4hxLV8b59klu89VnIIaNO%2FyO9hRGKXor6xHP9NbFsvvifS3t1iK8A51CWxoJPqNntOrJkWwgr2sU4bT%2Bs2xhdCSx8SKOohQ4SAfMfFUU8U4mcjnir0hsaAAhrL4Qw%2Frtl4%2FXH6USwmYd%2FkbqG3zWQMF%2Fk0K0j03V%2F3G0oSDKbQlbtdtHZQKbrMsiEdxxrbzsNl0dpZL6%2FbAt5u4RXG1vCmTAMqrYcMD5HxiFpkLn89glTdw16soNcvWLNww8tGexAY6pgFjEucxr8AE%2FgVRR7NAMQabK%2BXr%2F7sxM5KoT0O2mA8VFW80Av%2BIcnZ7oLPmMNQyr2GncUbhRtFuKess1vrpDuH4OYkUM73oqlEvTJC6qX6vRD0DsqlQRI6n5SdEojpXZYcisOepCU4htF%2FIv6o3wI%2FAw9f0tlYesmL6s1jb3y%2F9Ds94dFM8BgA4Q5tzTY7oQh381CIdYELCl0rEzCS0hETsMuWtMuKm&X-Amz-Signature=c08be16b06c24a46c8708e7b9d3ca4b122b04fd6319a6baf78a6de0212fdc80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJLKQXRS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIA91KYHHmCWt5lztJSj3mzwbZ0oilHNhWKla7O00eQy9AiBeoylSZopShFrcHVpOikdLCPWBfrN3l7FSejCmkIfO4yqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWEk2oVHbIdSvzmGOKtwD%2BuD6i8c1EMeMz9JrF57zKztKlitqxPjUvhZtynJDkspIie4ZpAnkWvHYOOpvkB3mvQQ5geQJiXi9CMr5yfBNF2mmU1U2ss9wpKTFzcXGBQGXxR4t4w5mWMxex8ZGMTBK7wz4TeheMPq5GnSgz39oLfHeyT0YjZ4NyABxkzHGj%2BCr8wyqo15KYCLaNK1z0Mx9LJaPKkam%2F3ZtViHZdnxmc6kaPlBJVW5Y5DoFmyW07wMIbqcbeUCwz348%2BeDn1WVtZlbeiW8cVgtiX1Ln7AXYOZ0uQNpXE6008W9Y02wIqiNw3yz64HR9ihygO5o9clateHYl3eiXgxeXzgX8VyTcu5hpf2N3N87k5e4s%2F5iKrtdwn21m19dewFs7O4vb8VU5V4hxLV8b59klu89VnIIaNO%2FyO9hRGKXor6xHP9NbFsvvifS3t1iK8A51CWxoJPqNntOrJkWwgr2sU4bT%2Bs2xhdCSx8SKOohQ4SAfMfFUU8U4mcjnir0hsaAAhrL4Qw%2Frtl4%2FXH6USwmYd%2FkbqG3zWQMF%2Fk0K0j03V%2F3G0oSDKbQlbtdtHZQKbrMsiEdxxrbzsNl0dpZL6%2FbAt5u4RXG1vCmTAMqrYcMD5HxiFpkLn89glTdw16soNcvWLNww8tGexAY6pgFjEucxr8AE%2FgVRR7NAMQabK%2BXr%2F7sxM5KoT0O2mA8VFW80Av%2BIcnZ7oLPmMNQyr2GncUbhRtFuKess1vrpDuH4OYkUM73oqlEvTJC6qX6vRD0DsqlQRI6n5SdEojpXZYcisOepCU4htF%2FIv6o3wI%2FAw9f0tlYesmL6s1jb3y%2F9Ds94dFM8BgA4Q5tzTY7oQh381CIdYELCl0rEzCS0hETsMuWtMuKm&X-Amz-Signature=3c12c4828195d7011881384aaba5164d395a441450c71436c960d2cb5e7c2f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
