---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7XKA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaW%2Fn1dwdR9o7czGD%2F0tUfgeiyByP%2BaS0dZkOoEKFPLwIhAIUdxBcpm0q8lelOyNF7bz0fqY3cHDjWHBbxaBtIx3t0KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOhOwo3iunszSWy4q3APzToovKim%2F3g%2FbfzFYdeO5zjIr%2FIE50usbOl0nzwpQVP%2BCaShLXP%2FwfPufr%2B652SgB9NeYtiOhMqPngM7ZYvFqIMxHLJFv2z1pZ%2BmwGgC7l9q0EBKtwb9W7qbNQBvjqDAtZd8OnpcfyHziSJPOa6HWl6wlcZNaQdN0L%2BScvJaI4U%2BQZJcla2YIMPR4wn%2BQbDwlV2wOh9MWz6RyzMPmU2IEU9EC12vvoZLuyoVoY8Q6FQxXpAU%2FsRJB36vDE8Hdl%2FV27jiSHO3c3L7DJntuC2RsmFVPETT6nUolxnyHCp9T7e54jb%2BAfSfU5%2BnD7CRNSS93P2bRqsVIcFAYsdhv5sRb0pbq24WKKGVhCrP5sw7bpZMVfkpDshjGBCqLH7YvLOWTCeUitlEWTdFa0bZgL2WGZNHW17Ma%2FmRhuX37vQiiBadHUm5FwP9VZ%2FkAUUYrxiFEtpUgCfqFVFgDyBftGngshP4Or4Y79djs%2Bvl%2B8ayG62w4pi8dUTabCSEu5XA5%2FuwqTBKx3otJUbFU93gZ8tN39L9Z5VN5FI6aj%2FjV3sbfYqA6WEXJM2XNsmf4FEXVCqlKs0Wy7J1XZW%2B5CsFvJuoS%2FSEkSFQMjWkNe8qXIVmV27YTuuQHq6ZU9cBYxjDTt9fEBjqkARCOBq13uukAThxLa5dxx7v32u3Ehc9A5Y5DUXVtvOGIuQOJ3ZCrsDj6gTVdTecG4Rhn%2BFLDfAtus6aPjxtVI4Y1eyIABNatvsigwLOMnX2FxSIclt5WsIze0TkVakrH%2BefKCPJaRMN6k9hBAAcO0H64osYQAxio3lBBsM5tds9CvEpS%2B2cJUagaZY5dNb1aAnrhoCZjtEcOSxIX2m9g9b2%2FIbrP&X-Amz-Signature=bba6bb2a70cb7e2e8efcfd07158160b3c92ebd1f949ff55e9bca2d54e029dd70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7XKA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaW%2Fn1dwdR9o7czGD%2F0tUfgeiyByP%2BaS0dZkOoEKFPLwIhAIUdxBcpm0q8lelOyNF7bz0fqY3cHDjWHBbxaBtIx3t0KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOhOwo3iunszSWy4q3APzToovKim%2F3g%2FbfzFYdeO5zjIr%2FIE50usbOl0nzwpQVP%2BCaShLXP%2FwfPufr%2B652SgB9NeYtiOhMqPngM7ZYvFqIMxHLJFv2z1pZ%2BmwGgC7l9q0EBKtwb9W7qbNQBvjqDAtZd8OnpcfyHziSJPOa6HWl6wlcZNaQdN0L%2BScvJaI4U%2BQZJcla2YIMPR4wn%2BQbDwlV2wOh9MWz6RyzMPmU2IEU9EC12vvoZLuyoVoY8Q6FQxXpAU%2FsRJB36vDE8Hdl%2FV27jiSHO3c3L7DJntuC2RsmFVPETT6nUolxnyHCp9T7e54jb%2BAfSfU5%2BnD7CRNSS93P2bRqsVIcFAYsdhv5sRb0pbq24WKKGVhCrP5sw7bpZMVfkpDshjGBCqLH7YvLOWTCeUitlEWTdFa0bZgL2WGZNHW17Ma%2FmRhuX37vQiiBadHUm5FwP9VZ%2FkAUUYrxiFEtpUgCfqFVFgDyBftGngshP4Or4Y79djs%2Bvl%2B8ayG62w4pi8dUTabCSEu5XA5%2FuwqTBKx3otJUbFU93gZ8tN39L9Z5VN5FI6aj%2FjV3sbfYqA6WEXJM2XNsmf4FEXVCqlKs0Wy7J1XZW%2B5CsFvJuoS%2FSEkSFQMjWkNe8qXIVmV27YTuuQHq6ZU9cBYxjDTt9fEBjqkARCOBq13uukAThxLa5dxx7v32u3Ehc9A5Y5DUXVtvOGIuQOJ3ZCrsDj6gTVdTecG4Rhn%2BFLDfAtus6aPjxtVI4Y1eyIABNatvsigwLOMnX2FxSIclt5WsIze0TkVakrH%2BefKCPJaRMN6k9hBAAcO0H64osYQAxio3lBBsM5tds9CvEpS%2B2cJUagaZY5dNb1aAnrhoCZjtEcOSxIX2m9g9b2%2FIbrP&X-Amz-Signature=108edc4ea76bea5c015370a58456569313a732ac767b5271a5fc52737895ce70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7XKA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaW%2Fn1dwdR9o7czGD%2F0tUfgeiyByP%2BaS0dZkOoEKFPLwIhAIUdxBcpm0q8lelOyNF7bz0fqY3cHDjWHBbxaBtIx3t0KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOhOwo3iunszSWy4q3APzToovKim%2F3g%2FbfzFYdeO5zjIr%2FIE50usbOl0nzwpQVP%2BCaShLXP%2FwfPufr%2B652SgB9NeYtiOhMqPngM7ZYvFqIMxHLJFv2z1pZ%2BmwGgC7l9q0EBKtwb9W7qbNQBvjqDAtZd8OnpcfyHziSJPOa6HWl6wlcZNaQdN0L%2BScvJaI4U%2BQZJcla2YIMPR4wn%2BQbDwlV2wOh9MWz6RyzMPmU2IEU9EC12vvoZLuyoVoY8Q6FQxXpAU%2FsRJB36vDE8Hdl%2FV27jiSHO3c3L7DJntuC2RsmFVPETT6nUolxnyHCp9T7e54jb%2BAfSfU5%2BnD7CRNSS93P2bRqsVIcFAYsdhv5sRb0pbq24WKKGVhCrP5sw7bpZMVfkpDshjGBCqLH7YvLOWTCeUitlEWTdFa0bZgL2WGZNHW17Ma%2FmRhuX37vQiiBadHUm5FwP9VZ%2FkAUUYrxiFEtpUgCfqFVFgDyBftGngshP4Or4Y79djs%2Bvl%2B8ayG62w4pi8dUTabCSEu5XA5%2FuwqTBKx3otJUbFU93gZ8tN39L9Z5VN5FI6aj%2FjV3sbfYqA6WEXJM2XNsmf4FEXVCqlKs0Wy7J1XZW%2B5CsFvJuoS%2FSEkSFQMjWkNe8qXIVmV27YTuuQHq6ZU9cBYxjDTt9fEBjqkARCOBq13uukAThxLa5dxx7v32u3Ehc9A5Y5DUXVtvOGIuQOJ3ZCrsDj6gTVdTecG4Rhn%2BFLDfAtus6aPjxtVI4Y1eyIABNatvsigwLOMnX2FxSIclt5WsIze0TkVakrH%2BefKCPJaRMN6k9hBAAcO0H64osYQAxio3lBBsM5tds9CvEpS%2B2cJUagaZY5dNb1aAnrhoCZjtEcOSxIX2m9g9b2%2FIbrP&X-Amz-Signature=0143a60681a03b7ef2c4951e5e79358c4baee683318bdfb190deb2ba34a55b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7XKA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaW%2Fn1dwdR9o7czGD%2F0tUfgeiyByP%2BaS0dZkOoEKFPLwIhAIUdxBcpm0q8lelOyNF7bz0fqY3cHDjWHBbxaBtIx3t0KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOhOwo3iunszSWy4q3APzToovKim%2F3g%2FbfzFYdeO5zjIr%2FIE50usbOl0nzwpQVP%2BCaShLXP%2FwfPufr%2B652SgB9NeYtiOhMqPngM7ZYvFqIMxHLJFv2z1pZ%2BmwGgC7l9q0EBKtwb9W7qbNQBvjqDAtZd8OnpcfyHziSJPOa6HWl6wlcZNaQdN0L%2BScvJaI4U%2BQZJcla2YIMPR4wn%2BQbDwlV2wOh9MWz6RyzMPmU2IEU9EC12vvoZLuyoVoY8Q6FQxXpAU%2FsRJB36vDE8Hdl%2FV27jiSHO3c3L7DJntuC2RsmFVPETT6nUolxnyHCp9T7e54jb%2BAfSfU5%2BnD7CRNSS93P2bRqsVIcFAYsdhv5sRb0pbq24WKKGVhCrP5sw7bpZMVfkpDshjGBCqLH7YvLOWTCeUitlEWTdFa0bZgL2WGZNHW17Ma%2FmRhuX37vQiiBadHUm5FwP9VZ%2FkAUUYrxiFEtpUgCfqFVFgDyBftGngshP4Or4Y79djs%2Bvl%2B8ayG62w4pi8dUTabCSEu5XA5%2FuwqTBKx3otJUbFU93gZ8tN39L9Z5VN5FI6aj%2FjV3sbfYqA6WEXJM2XNsmf4FEXVCqlKs0Wy7J1XZW%2B5CsFvJuoS%2FSEkSFQMjWkNe8qXIVmV27YTuuQHq6ZU9cBYxjDTt9fEBjqkARCOBq13uukAThxLa5dxx7v32u3Ehc9A5Y5DUXVtvOGIuQOJ3ZCrsDj6gTVdTecG4Rhn%2BFLDfAtus6aPjxtVI4Y1eyIABNatvsigwLOMnX2FxSIclt5WsIze0TkVakrH%2BefKCPJaRMN6k9hBAAcO0H64osYQAxio3lBBsM5tds9CvEpS%2B2cJUagaZY5dNb1aAnrhoCZjtEcOSxIX2m9g9b2%2FIbrP&X-Amz-Signature=907cc4f23bc63b491a63fb7655989071c365ae26ba2b9564c1a330dd2e56c3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7XKA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaW%2Fn1dwdR9o7czGD%2F0tUfgeiyByP%2BaS0dZkOoEKFPLwIhAIUdxBcpm0q8lelOyNF7bz0fqY3cHDjWHBbxaBtIx3t0KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOhOwo3iunszSWy4q3APzToovKim%2F3g%2FbfzFYdeO5zjIr%2FIE50usbOl0nzwpQVP%2BCaShLXP%2FwfPufr%2B652SgB9NeYtiOhMqPngM7ZYvFqIMxHLJFv2z1pZ%2BmwGgC7l9q0EBKtwb9W7qbNQBvjqDAtZd8OnpcfyHziSJPOa6HWl6wlcZNaQdN0L%2BScvJaI4U%2BQZJcla2YIMPR4wn%2BQbDwlV2wOh9MWz6RyzMPmU2IEU9EC12vvoZLuyoVoY8Q6FQxXpAU%2FsRJB36vDE8Hdl%2FV27jiSHO3c3L7DJntuC2RsmFVPETT6nUolxnyHCp9T7e54jb%2BAfSfU5%2BnD7CRNSS93P2bRqsVIcFAYsdhv5sRb0pbq24WKKGVhCrP5sw7bpZMVfkpDshjGBCqLH7YvLOWTCeUitlEWTdFa0bZgL2WGZNHW17Ma%2FmRhuX37vQiiBadHUm5FwP9VZ%2FkAUUYrxiFEtpUgCfqFVFgDyBftGngshP4Or4Y79djs%2Bvl%2B8ayG62w4pi8dUTabCSEu5XA5%2FuwqTBKx3otJUbFU93gZ8tN39L9Z5VN5FI6aj%2FjV3sbfYqA6WEXJM2XNsmf4FEXVCqlKs0Wy7J1XZW%2B5CsFvJuoS%2FSEkSFQMjWkNe8qXIVmV27YTuuQHq6ZU9cBYxjDTt9fEBjqkARCOBq13uukAThxLa5dxx7v32u3Ehc9A5Y5DUXVtvOGIuQOJ3ZCrsDj6gTVdTecG4Rhn%2BFLDfAtus6aPjxtVI4Y1eyIABNatvsigwLOMnX2FxSIclt5WsIze0TkVakrH%2BefKCPJaRMN6k9hBAAcO0H64osYQAxio3lBBsM5tds9CvEpS%2B2cJUagaZY5dNb1aAnrhoCZjtEcOSxIX2m9g9b2%2FIbrP&X-Amz-Signature=ebac2010ec249b5e0df7e054aaae2586ecd2027b9445d6f4ef664b0b62b6ca9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7XKA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaW%2Fn1dwdR9o7czGD%2F0tUfgeiyByP%2BaS0dZkOoEKFPLwIhAIUdxBcpm0q8lelOyNF7bz0fqY3cHDjWHBbxaBtIx3t0KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOhOwo3iunszSWy4q3APzToovKim%2F3g%2FbfzFYdeO5zjIr%2FIE50usbOl0nzwpQVP%2BCaShLXP%2FwfPufr%2B652SgB9NeYtiOhMqPngM7ZYvFqIMxHLJFv2z1pZ%2BmwGgC7l9q0EBKtwb9W7qbNQBvjqDAtZd8OnpcfyHziSJPOa6HWl6wlcZNaQdN0L%2BScvJaI4U%2BQZJcla2YIMPR4wn%2BQbDwlV2wOh9MWz6RyzMPmU2IEU9EC12vvoZLuyoVoY8Q6FQxXpAU%2FsRJB36vDE8Hdl%2FV27jiSHO3c3L7DJntuC2RsmFVPETT6nUolxnyHCp9T7e54jb%2BAfSfU5%2BnD7CRNSS93P2bRqsVIcFAYsdhv5sRb0pbq24WKKGVhCrP5sw7bpZMVfkpDshjGBCqLH7YvLOWTCeUitlEWTdFa0bZgL2WGZNHW17Ma%2FmRhuX37vQiiBadHUm5FwP9VZ%2FkAUUYrxiFEtpUgCfqFVFgDyBftGngshP4Or4Y79djs%2Bvl%2B8ayG62w4pi8dUTabCSEu5XA5%2FuwqTBKx3otJUbFU93gZ8tN39L9Z5VN5FI6aj%2FjV3sbfYqA6WEXJM2XNsmf4FEXVCqlKs0Wy7J1XZW%2B5CsFvJuoS%2FSEkSFQMjWkNe8qXIVmV27YTuuQHq6ZU9cBYxjDTt9fEBjqkARCOBq13uukAThxLa5dxx7v32u3Ehc9A5Y5DUXVtvOGIuQOJ3ZCrsDj6gTVdTecG4Rhn%2BFLDfAtus6aPjxtVI4Y1eyIABNatvsigwLOMnX2FxSIclt5WsIze0TkVakrH%2BefKCPJaRMN6k9hBAAcO0H64osYQAxio3lBBsM5tds9CvEpS%2B2cJUagaZY5dNb1aAnrhoCZjtEcOSxIX2m9g9b2%2FIbrP&X-Amz-Signature=81d51ee412ae8a9e88d23c66f7d68b96dc421d7767053f7fa832eab2dea9dbc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7XKA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaW%2Fn1dwdR9o7czGD%2F0tUfgeiyByP%2BaS0dZkOoEKFPLwIhAIUdxBcpm0q8lelOyNF7bz0fqY3cHDjWHBbxaBtIx3t0KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOhOwo3iunszSWy4q3APzToovKim%2F3g%2FbfzFYdeO5zjIr%2FIE50usbOl0nzwpQVP%2BCaShLXP%2FwfPufr%2B652SgB9NeYtiOhMqPngM7ZYvFqIMxHLJFv2z1pZ%2BmwGgC7l9q0EBKtwb9W7qbNQBvjqDAtZd8OnpcfyHziSJPOa6HWl6wlcZNaQdN0L%2BScvJaI4U%2BQZJcla2YIMPR4wn%2BQbDwlV2wOh9MWz6RyzMPmU2IEU9EC12vvoZLuyoVoY8Q6FQxXpAU%2FsRJB36vDE8Hdl%2FV27jiSHO3c3L7DJntuC2RsmFVPETT6nUolxnyHCp9T7e54jb%2BAfSfU5%2BnD7CRNSS93P2bRqsVIcFAYsdhv5sRb0pbq24WKKGVhCrP5sw7bpZMVfkpDshjGBCqLH7YvLOWTCeUitlEWTdFa0bZgL2WGZNHW17Ma%2FmRhuX37vQiiBadHUm5FwP9VZ%2FkAUUYrxiFEtpUgCfqFVFgDyBftGngshP4Or4Y79djs%2Bvl%2B8ayG62w4pi8dUTabCSEu5XA5%2FuwqTBKx3otJUbFU93gZ8tN39L9Z5VN5FI6aj%2FjV3sbfYqA6WEXJM2XNsmf4FEXVCqlKs0Wy7J1XZW%2B5CsFvJuoS%2FSEkSFQMjWkNe8qXIVmV27YTuuQHq6ZU9cBYxjDTt9fEBjqkARCOBq13uukAThxLa5dxx7v32u3Ehc9A5Y5DUXVtvOGIuQOJ3ZCrsDj6gTVdTecG4Rhn%2BFLDfAtus6aPjxtVI4Y1eyIABNatvsigwLOMnX2FxSIclt5WsIze0TkVakrH%2BefKCPJaRMN6k9hBAAcO0H64osYQAxio3lBBsM5tds9CvEpS%2B2cJUagaZY5dNb1aAnrhoCZjtEcOSxIX2m9g9b2%2FIbrP&X-Amz-Signature=a58ec51eb7bbb217e1e0a8a68c98a08f8bfd4236f46c23fb36d5d06f5411932a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7XKA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaW%2Fn1dwdR9o7czGD%2F0tUfgeiyByP%2BaS0dZkOoEKFPLwIhAIUdxBcpm0q8lelOyNF7bz0fqY3cHDjWHBbxaBtIx3t0KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOhOwo3iunszSWy4q3APzToovKim%2F3g%2FbfzFYdeO5zjIr%2FIE50usbOl0nzwpQVP%2BCaShLXP%2FwfPufr%2B652SgB9NeYtiOhMqPngM7ZYvFqIMxHLJFv2z1pZ%2BmwGgC7l9q0EBKtwb9W7qbNQBvjqDAtZd8OnpcfyHziSJPOa6HWl6wlcZNaQdN0L%2BScvJaI4U%2BQZJcla2YIMPR4wn%2BQbDwlV2wOh9MWz6RyzMPmU2IEU9EC12vvoZLuyoVoY8Q6FQxXpAU%2FsRJB36vDE8Hdl%2FV27jiSHO3c3L7DJntuC2RsmFVPETT6nUolxnyHCp9T7e54jb%2BAfSfU5%2BnD7CRNSS93P2bRqsVIcFAYsdhv5sRb0pbq24WKKGVhCrP5sw7bpZMVfkpDshjGBCqLH7YvLOWTCeUitlEWTdFa0bZgL2WGZNHW17Ma%2FmRhuX37vQiiBadHUm5FwP9VZ%2FkAUUYrxiFEtpUgCfqFVFgDyBftGngshP4Or4Y79djs%2Bvl%2B8ayG62w4pi8dUTabCSEu5XA5%2FuwqTBKx3otJUbFU93gZ8tN39L9Z5VN5FI6aj%2FjV3sbfYqA6WEXJM2XNsmf4FEXVCqlKs0Wy7J1XZW%2B5CsFvJuoS%2FSEkSFQMjWkNe8qXIVmV27YTuuQHq6ZU9cBYxjDTt9fEBjqkARCOBq13uukAThxLa5dxx7v32u3Ehc9A5Y5DUXVtvOGIuQOJ3ZCrsDj6gTVdTecG4Rhn%2BFLDfAtus6aPjxtVI4Y1eyIABNatvsigwLOMnX2FxSIclt5WsIze0TkVakrH%2BefKCPJaRMN6k9hBAAcO0H64osYQAxio3lBBsM5tds9CvEpS%2B2cJUagaZY5dNb1aAnrhoCZjtEcOSxIX2m9g9b2%2FIbrP&X-Amz-Signature=cea270f1ca545e42dd0ada98a8c80e8314af5ebfe7e5a555a629c351717e867e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7XKA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaW%2Fn1dwdR9o7czGD%2F0tUfgeiyByP%2BaS0dZkOoEKFPLwIhAIUdxBcpm0q8lelOyNF7bz0fqY3cHDjWHBbxaBtIx3t0KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOhOwo3iunszSWy4q3APzToovKim%2F3g%2FbfzFYdeO5zjIr%2FIE50usbOl0nzwpQVP%2BCaShLXP%2FwfPufr%2B652SgB9NeYtiOhMqPngM7ZYvFqIMxHLJFv2z1pZ%2BmwGgC7l9q0EBKtwb9W7qbNQBvjqDAtZd8OnpcfyHziSJPOa6HWl6wlcZNaQdN0L%2BScvJaI4U%2BQZJcla2YIMPR4wn%2BQbDwlV2wOh9MWz6RyzMPmU2IEU9EC12vvoZLuyoVoY8Q6FQxXpAU%2FsRJB36vDE8Hdl%2FV27jiSHO3c3L7DJntuC2RsmFVPETT6nUolxnyHCp9T7e54jb%2BAfSfU5%2BnD7CRNSS93P2bRqsVIcFAYsdhv5sRb0pbq24WKKGVhCrP5sw7bpZMVfkpDshjGBCqLH7YvLOWTCeUitlEWTdFa0bZgL2WGZNHW17Ma%2FmRhuX37vQiiBadHUm5FwP9VZ%2FkAUUYrxiFEtpUgCfqFVFgDyBftGngshP4Or4Y79djs%2Bvl%2B8ayG62w4pi8dUTabCSEu5XA5%2FuwqTBKx3otJUbFU93gZ8tN39L9Z5VN5FI6aj%2FjV3sbfYqA6WEXJM2XNsmf4FEXVCqlKs0Wy7J1XZW%2B5CsFvJuoS%2FSEkSFQMjWkNe8qXIVmV27YTuuQHq6ZU9cBYxjDTt9fEBjqkARCOBq13uukAThxLa5dxx7v32u3Ehc9A5Y5DUXVtvOGIuQOJ3ZCrsDj6gTVdTecG4Rhn%2BFLDfAtus6aPjxtVI4Y1eyIABNatvsigwLOMnX2FxSIclt5WsIze0TkVakrH%2BefKCPJaRMN6k9hBAAcO0H64osYQAxio3lBBsM5tds9CvEpS%2B2cJUagaZY5dNb1aAnrhoCZjtEcOSxIX2m9g9b2%2FIbrP&X-Amz-Signature=f0490859ea7c2ec4cb69e270ef6b1b1caec659edd9a30b4c70eb0ccbf81f86a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7XKA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaW%2Fn1dwdR9o7czGD%2F0tUfgeiyByP%2BaS0dZkOoEKFPLwIhAIUdxBcpm0q8lelOyNF7bz0fqY3cHDjWHBbxaBtIx3t0KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOhOwo3iunszSWy4q3APzToovKim%2F3g%2FbfzFYdeO5zjIr%2FIE50usbOl0nzwpQVP%2BCaShLXP%2FwfPufr%2B652SgB9NeYtiOhMqPngM7ZYvFqIMxHLJFv2z1pZ%2BmwGgC7l9q0EBKtwb9W7qbNQBvjqDAtZd8OnpcfyHziSJPOa6HWl6wlcZNaQdN0L%2BScvJaI4U%2BQZJcla2YIMPR4wn%2BQbDwlV2wOh9MWz6RyzMPmU2IEU9EC12vvoZLuyoVoY8Q6FQxXpAU%2FsRJB36vDE8Hdl%2FV27jiSHO3c3L7DJntuC2RsmFVPETT6nUolxnyHCp9T7e54jb%2BAfSfU5%2BnD7CRNSS93P2bRqsVIcFAYsdhv5sRb0pbq24WKKGVhCrP5sw7bpZMVfkpDshjGBCqLH7YvLOWTCeUitlEWTdFa0bZgL2WGZNHW17Ma%2FmRhuX37vQiiBadHUm5FwP9VZ%2FkAUUYrxiFEtpUgCfqFVFgDyBftGngshP4Or4Y79djs%2Bvl%2B8ayG62w4pi8dUTabCSEu5XA5%2FuwqTBKx3otJUbFU93gZ8tN39L9Z5VN5FI6aj%2FjV3sbfYqA6WEXJM2XNsmf4FEXVCqlKs0Wy7J1XZW%2B5CsFvJuoS%2FSEkSFQMjWkNe8qXIVmV27YTuuQHq6ZU9cBYxjDTt9fEBjqkARCOBq13uukAThxLa5dxx7v32u3Ehc9A5Y5DUXVtvOGIuQOJ3ZCrsDj6gTVdTecG4Rhn%2BFLDfAtus6aPjxtVI4Y1eyIABNatvsigwLOMnX2FxSIclt5WsIze0TkVakrH%2BefKCPJaRMN6k9hBAAcO0H64osYQAxio3lBBsM5tds9CvEpS%2B2cJUagaZY5dNb1aAnrhoCZjtEcOSxIX2m9g9b2%2FIbrP&X-Amz-Signature=18f90af388d18c8701953f03e9102e3821535d5203c2b7e39ec58d5e279e7426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7XKA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaW%2Fn1dwdR9o7czGD%2F0tUfgeiyByP%2BaS0dZkOoEKFPLwIhAIUdxBcpm0q8lelOyNF7bz0fqY3cHDjWHBbxaBtIx3t0KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOhOwo3iunszSWy4q3APzToovKim%2F3g%2FbfzFYdeO5zjIr%2FIE50usbOl0nzwpQVP%2BCaShLXP%2FwfPufr%2B652SgB9NeYtiOhMqPngM7ZYvFqIMxHLJFv2z1pZ%2BmwGgC7l9q0EBKtwb9W7qbNQBvjqDAtZd8OnpcfyHziSJPOa6HWl6wlcZNaQdN0L%2BScvJaI4U%2BQZJcla2YIMPR4wn%2BQbDwlV2wOh9MWz6RyzMPmU2IEU9EC12vvoZLuyoVoY8Q6FQxXpAU%2FsRJB36vDE8Hdl%2FV27jiSHO3c3L7DJntuC2RsmFVPETT6nUolxnyHCp9T7e54jb%2BAfSfU5%2BnD7CRNSS93P2bRqsVIcFAYsdhv5sRb0pbq24WKKGVhCrP5sw7bpZMVfkpDshjGBCqLH7YvLOWTCeUitlEWTdFa0bZgL2WGZNHW17Ma%2FmRhuX37vQiiBadHUm5FwP9VZ%2FkAUUYrxiFEtpUgCfqFVFgDyBftGngshP4Or4Y79djs%2Bvl%2B8ayG62w4pi8dUTabCSEu5XA5%2FuwqTBKx3otJUbFU93gZ8tN39L9Z5VN5FI6aj%2FjV3sbfYqA6WEXJM2XNsmf4FEXVCqlKs0Wy7J1XZW%2B5CsFvJuoS%2FSEkSFQMjWkNe8qXIVmV27YTuuQHq6ZU9cBYxjDTt9fEBjqkARCOBq13uukAThxLa5dxx7v32u3Ehc9A5Y5DUXVtvOGIuQOJ3ZCrsDj6gTVdTecG4Rhn%2BFLDfAtus6aPjxtVI4Y1eyIABNatvsigwLOMnX2FxSIclt5WsIze0TkVakrH%2BefKCPJaRMN6k9hBAAcO0H64osYQAxio3lBBsM5tds9CvEpS%2B2cJUagaZY5dNb1aAnrhoCZjtEcOSxIX2m9g9b2%2FIbrP&X-Amz-Signature=31dfeab2239562672a0efa5b71e8e21697da00b72c79d19ba68f80713426c9b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7XKA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaW%2Fn1dwdR9o7czGD%2F0tUfgeiyByP%2BaS0dZkOoEKFPLwIhAIUdxBcpm0q8lelOyNF7bz0fqY3cHDjWHBbxaBtIx3t0KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOhOwo3iunszSWy4q3APzToovKim%2F3g%2FbfzFYdeO5zjIr%2FIE50usbOl0nzwpQVP%2BCaShLXP%2FwfPufr%2B652SgB9NeYtiOhMqPngM7ZYvFqIMxHLJFv2z1pZ%2BmwGgC7l9q0EBKtwb9W7qbNQBvjqDAtZd8OnpcfyHziSJPOa6HWl6wlcZNaQdN0L%2BScvJaI4U%2BQZJcla2YIMPR4wn%2BQbDwlV2wOh9MWz6RyzMPmU2IEU9EC12vvoZLuyoVoY8Q6FQxXpAU%2FsRJB36vDE8Hdl%2FV27jiSHO3c3L7DJntuC2RsmFVPETT6nUolxnyHCp9T7e54jb%2BAfSfU5%2BnD7CRNSS93P2bRqsVIcFAYsdhv5sRb0pbq24WKKGVhCrP5sw7bpZMVfkpDshjGBCqLH7YvLOWTCeUitlEWTdFa0bZgL2WGZNHW17Ma%2FmRhuX37vQiiBadHUm5FwP9VZ%2FkAUUYrxiFEtpUgCfqFVFgDyBftGngshP4Or4Y79djs%2Bvl%2B8ayG62w4pi8dUTabCSEu5XA5%2FuwqTBKx3otJUbFU93gZ8tN39L9Z5VN5FI6aj%2FjV3sbfYqA6WEXJM2XNsmf4FEXVCqlKs0Wy7J1XZW%2B5CsFvJuoS%2FSEkSFQMjWkNe8qXIVmV27YTuuQHq6ZU9cBYxjDTt9fEBjqkARCOBq13uukAThxLa5dxx7v32u3Ehc9A5Y5DUXVtvOGIuQOJ3ZCrsDj6gTVdTecG4Rhn%2BFLDfAtus6aPjxtVI4Y1eyIABNatvsigwLOMnX2FxSIclt5WsIze0TkVakrH%2BefKCPJaRMN6k9hBAAcO0H64osYQAxio3lBBsM5tds9CvEpS%2B2cJUagaZY5dNb1aAnrhoCZjtEcOSxIX2m9g9b2%2FIbrP&X-Amz-Signature=0ebcc62c8c803015c09ff9d752a70f21965f3d348ddd508ff57c72c905f31ae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM7XKA2K%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T121830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCaW%2Fn1dwdR9o7czGD%2F0tUfgeiyByP%2BaS0dZkOoEKFPLwIhAIUdxBcpm0q8lelOyNF7bz0fqY3cHDjWHBbxaBtIx3t0KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygOhOwo3iunszSWy4q3APzToovKim%2F3g%2FbfzFYdeO5zjIr%2FIE50usbOl0nzwpQVP%2BCaShLXP%2FwfPufr%2B652SgB9NeYtiOhMqPngM7ZYvFqIMxHLJFv2z1pZ%2BmwGgC7l9q0EBKtwb9W7qbNQBvjqDAtZd8OnpcfyHziSJPOa6HWl6wlcZNaQdN0L%2BScvJaI4U%2BQZJcla2YIMPR4wn%2BQbDwlV2wOh9MWz6RyzMPmU2IEU9EC12vvoZLuyoVoY8Q6FQxXpAU%2FsRJB36vDE8Hdl%2FV27jiSHO3c3L7DJntuC2RsmFVPETT6nUolxnyHCp9T7e54jb%2BAfSfU5%2BnD7CRNSS93P2bRqsVIcFAYsdhv5sRb0pbq24WKKGVhCrP5sw7bpZMVfkpDshjGBCqLH7YvLOWTCeUitlEWTdFa0bZgL2WGZNHW17Ma%2FmRhuX37vQiiBadHUm5FwP9VZ%2FkAUUYrxiFEtpUgCfqFVFgDyBftGngshP4Or4Y79djs%2Bvl%2B8ayG62w4pi8dUTabCSEu5XA5%2FuwqTBKx3otJUbFU93gZ8tN39L9Z5VN5FI6aj%2FjV3sbfYqA6WEXJM2XNsmf4FEXVCqlKs0Wy7J1XZW%2B5CsFvJuoS%2FSEkSFQMjWkNe8qXIVmV27YTuuQHq6ZU9cBYxjDTt9fEBjqkARCOBq13uukAThxLa5dxx7v32u3Ehc9A5Y5DUXVtvOGIuQOJ3ZCrsDj6gTVdTecG4Rhn%2BFLDfAtus6aPjxtVI4Y1eyIABNatvsigwLOMnX2FxSIclt5WsIze0TkVakrH%2BefKCPJaRMN6k9hBAAcO0H64osYQAxio3lBBsM5tds9CvEpS%2B2cJUagaZY5dNb1aAnrhoCZjtEcOSxIX2m9g9b2%2FIbrP&X-Amz-Signature=aec904147150d896ddf9e4b10acce91b9ae136f31e00335ec2362e5d14e07c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
