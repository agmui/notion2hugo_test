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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBQI5HM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCcsmh%2Fr4ZYjDH6cAdWTWn9WOTl0JfTs4Vy3FQyoXyAuAIhAJ6VSqHh298%2FPguQYYcBgVvL2Yun2c0aWnj6y2CE43%2FsKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoTc37OtDSJSXhA4wq3AMP2a4lqKlb5q%2BF0Xq20Ni3W7gLAFkDuOOcUe0M017ksnMHaQJTNfsvRc1d3Z%2BrYlhVfBB56Wvm9%2BcASUXsgxYCKI6wmNzPq9T4hBiMfRmDismHXsYN3S1qXL09k%2FmpUscOHNs1PNnLWnECOvElgltZ3AufIMvk6ssa00OvdThp8Vi%2F5ZcGgORCuSSHl6KAUDtoAL0pgOuy02Txs%2F%2B0kXYkjBEmsDdDSgsgWEqKmQK8U8fChssI7Ht%2FYe%2FfUSwtjCNsblBR%2F1d0%2FmGeU7CVS6XaQ3%2BrIx484Wu8i0q59FjBBtz%2B9KAJOhI6SAj6A2dDpDK9pKpKUpl6ywBUwU%2FIYFw%2BSYdQw04elg1KpcsNQNpFWFsP1osbA7e1jWIW%2FRPFMfnhNN7fniRYYvRDmbfwljjm1I99BwQfZd2nGb3yW8p6U5ssUz7UrdgEaMqxPnh3%2FpM6avI0kMKvvcl%2FXPUUbA7SYDgdjKdQLotZDchszf3mQlqUFeo%2BiSAeOaQnxaV0AVXZdaWta8OSAjDdYaiRYE1JWDoR4yOPI3zdIUXnQhQQ8BEAH8riAhKbq%2BXITtSkVegnXM2nvsuGxa0QKE7aRsyRdWrfJu6mnZyJdz1LUkhSh7GiaDA%2B2PwubmEDlDCgtdHEBjqkAcJ0n8MNnXNfLWu1pO6N%2F63bjUGwNz%2BBdNx84MWd%2BTe9lLZIDfbkbNAbkEDfr4T2HJa6S3oNp2Zr0HAYcSSZl96FTYy5x9hR35ZbwpqsazPyC%2FiovbYxSxgXANuKPtbjnHqbNjP9asU7YIgSxevvTeqgCXrl8qSX3kWLbHuo%2BYU0n4%2BGCDnnDrlHjBk9C%2Fp%2Bp10JOXLx4oVbdq3K1nARRL63Paoo&X-Amz-Signature=e3ea3e861d238ae6f2cfd917913bef52dc1a9e02cdb1430164eab920b6614f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBQI5HM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCcsmh%2Fr4ZYjDH6cAdWTWn9WOTl0JfTs4Vy3FQyoXyAuAIhAJ6VSqHh298%2FPguQYYcBgVvL2Yun2c0aWnj6y2CE43%2FsKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoTc37OtDSJSXhA4wq3AMP2a4lqKlb5q%2BF0Xq20Ni3W7gLAFkDuOOcUe0M017ksnMHaQJTNfsvRc1d3Z%2BrYlhVfBB56Wvm9%2BcASUXsgxYCKI6wmNzPq9T4hBiMfRmDismHXsYN3S1qXL09k%2FmpUscOHNs1PNnLWnECOvElgltZ3AufIMvk6ssa00OvdThp8Vi%2F5ZcGgORCuSSHl6KAUDtoAL0pgOuy02Txs%2F%2B0kXYkjBEmsDdDSgsgWEqKmQK8U8fChssI7Ht%2FYe%2FfUSwtjCNsblBR%2F1d0%2FmGeU7CVS6XaQ3%2BrIx484Wu8i0q59FjBBtz%2B9KAJOhI6SAj6A2dDpDK9pKpKUpl6ywBUwU%2FIYFw%2BSYdQw04elg1KpcsNQNpFWFsP1osbA7e1jWIW%2FRPFMfnhNN7fniRYYvRDmbfwljjm1I99BwQfZd2nGb3yW8p6U5ssUz7UrdgEaMqxPnh3%2FpM6avI0kMKvvcl%2FXPUUbA7SYDgdjKdQLotZDchszf3mQlqUFeo%2BiSAeOaQnxaV0AVXZdaWta8OSAjDdYaiRYE1JWDoR4yOPI3zdIUXnQhQQ8BEAH8riAhKbq%2BXITtSkVegnXM2nvsuGxa0QKE7aRsyRdWrfJu6mnZyJdz1LUkhSh7GiaDA%2B2PwubmEDlDCgtdHEBjqkAcJ0n8MNnXNfLWu1pO6N%2F63bjUGwNz%2BBdNx84MWd%2BTe9lLZIDfbkbNAbkEDfr4T2HJa6S3oNp2Zr0HAYcSSZl96FTYy5x9hR35ZbwpqsazPyC%2FiovbYxSxgXANuKPtbjnHqbNjP9asU7YIgSxevvTeqgCXrl8qSX3kWLbHuo%2BYU0n4%2BGCDnnDrlHjBk9C%2Fp%2Bp10JOXLx4oVbdq3K1nARRL63Paoo&X-Amz-Signature=72bf2b3a5af76e978871919f0fd3ba9b5dacf413c4bcfd017da7f20ed74c20fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBQI5HM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCcsmh%2Fr4ZYjDH6cAdWTWn9WOTl0JfTs4Vy3FQyoXyAuAIhAJ6VSqHh298%2FPguQYYcBgVvL2Yun2c0aWnj6y2CE43%2FsKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoTc37OtDSJSXhA4wq3AMP2a4lqKlb5q%2BF0Xq20Ni3W7gLAFkDuOOcUe0M017ksnMHaQJTNfsvRc1d3Z%2BrYlhVfBB56Wvm9%2BcASUXsgxYCKI6wmNzPq9T4hBiMfRmDismHXsYN3S1qXL09k%2FmpUscOHNs1PNnLWnECOvElgltZ3AufIMvk6ssa00OvdThp8Vi%2F5ZcGgORCuSSHl6KAUDtoAL0pgOuy02Txs%2F%2B0kXYkjBEmsDdDSgsgWEqKmQK8U8fChssI7Ht%2FYe%2FfUSwtjCNsblBR%2F1d0%2FmGeU7CVS6XaQ3%2BrIx484Wu8i0q59FjBBtz%2B9KAJOhI6SAj6A2dDpDK9pKpKUpl6ywBUwU%2FIYFw%2BSYdQw04elg1KpcsNQNpFWFsP1osbA7e1jWIW%2FRPFMfnhNN7fniRYYvRDmbfwljjm1I99BwQfZd2nGb3yW8p6U5ssUz7UrdgEaMqxPnh3%2FpM6avI0kMKvvcl%2FXPUUbA7SYDgdjKdQLotZDchszf3mQlqUFeo%2BiSAeOaQnxaV0AVXZdaWta8OSAjDdYaiRYE1JWDoR4yOPI3zdIUXnQhQQ8BEAH8riAhKbq%2BXITtSkVegnXM2nvsuGxa0QKE7aRsyRdWrfJu6mnZyJdz1LUkhSh7GiaDA%2B2PwubmEDlDCgtdHEBjqkAcJ0n8MNnXNfLWu1pO6N%2F63bjUGwNz%2BBdNx84MWd%2BTe9lLZIDfbkbNAbkEDfr4T2HJa6S3oNp2Zr0HAYcSSZl96FTYy5x9hR35ZbwpqsazPyC%2FiovbYxSxgXANuKPtbjnHqbNjP9asU7YIgSxevvTeqgCXrl8qSX3kWLbHuo%2BYU0n4%2BGCDnnDrlHjBk9C%2Fp%2Bp10JOXLx4oVbdq3K1nARRL63Paoo&X-Amz-Signature=3498de491485b7e9955ebc88a307cb32789914a93933e0c0a1c6ac096cc86061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBQI5HM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCcsmh%2Fr4ZYjDH6cAdWTWn9WOTl0JfTs4Vy3FQyoXyAuAIhAJ6VSqHh298%2FPguQYYcBgVvL2Yun2c0aWnj6y2CE43%2FsKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoTc37OtDSJSXhA4wq3AMP2a4lqKlb5q%2BF0Xq20Ni3W7gLAFkDuOOcUe0M017ksnMHaQJTNfsvRc1d3Z%2BrYlhVfBB56Wvm9%2BcASUXsgxYCKI6wmNzPq9T4hBiMfRmDismHXsYN3S1qXL09k%2FmpUscOHNs1PNnLWnECOvElgltZ3AufIMvk6ssa00OvdThp8Vi%2F5ZcGgORCuSSHl6KAUDtoAL0pgOuy02Txs%2F%2B0kXYkjBEmsDdDSgsgWEqKmQK8U8fChssI7Ht%2FYe%2FfUSwtjCNsblBR%2F1d0%2FmGeU7CVS6XaQ3%2BrIx484Wu8i0q59FjBBtz%2B9KAJOhI6SAj6A2dDpDK9pKpKUpl6ywBUwU%2FIYFw%2BSYdQw04elg1KpcsNQNpFWFsP1osbA7e1jWIW%2FRPFMfnhNN7fniRYYvRDmbfwljjm1I99BwQfZd2nGb3yW8p6U5ssUz7UrdgEaMqxPnh3%2FpM6avI0kMKvvcl%2FXPUUbA7SYDgdjKdQLotZDchszf3mQlqUFeo%2BiSAeOaQnxaV0AVXZdaWta8OSAjDdYaiRYE1JWDoR4yOPI3zdIUXnQhQQ8BEAH8riAhKbq%2BXITtSkVegnXM2nvsuGxa0QKE7aRsyRdWrfJu6mnZyJdz1LUkhSh7GiaDA%2B2PwubmEDlDCgtdHEBjqkAcJ0n8MNnXNfLWu1pO6N%2F63bjUGwNz%2BBdNx84MWd%2BTe9lLZIDfbkbNAbkEDfr4T2HJa6S3oNp2Zr0HAYcSSZl96FTYy5x9hR35ZbwpqsazPyC%2FiovbYxSxgXANuKPtbjnHqbNjP9asU7YIgSxevvTeqgCXrl8qSX3kWLbHuo%2BYU0n4%2BGCDnnDrlHjBk9C%2Fp%2Bp10JOXLx4oVbdq3K1nARRL63Paoo&X-Amz-Signature=05cb5fde8f1e6f57fcbde6aad7ebffe97afe23eee26cea664c7bfe009dee0846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBQI5HM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCcsmh%2Fr4ZYjDH6cAdWTWn9WOTl0JfTs4Vy3FQyoXyAuAIhAJ6VSqHh298%2FPguQYYcBgVvL2Yun2c0aWnj6y2CE43%2FsKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoTc37OtDSJSXhA4wq3AMP2a4lqKlb5q%2BF0Xq20Ni3W7gLAFkDuOOcUe0M017ksnMHaQJTNfsvRc1d3Z%2BrYlhVfBB56Wvm9%2BcASUXsgxYCKI6wmNzPq9T4hBiMfRmDismHXsYN3S1qXL09k%2FmpUscOHNs1PNnLWnECOvElgltZ3AufIMvk6ssa00OvdThp8Vi%2F5ZcGgORCuSSHl6KAUDtoAL0pgOuy02Txs%2F%2B0kXYkjBEmsDdDSgsgWEqKmQK8U8fChssI7Ht%2FYe%2FfUSwtjCNsblBR%2F1d0%2FmGeU7CVS6XaQ3%2BrIx484Wu8i0q59FjBBtz%2B9KAJOhI6SAj6A2dDpDK9pKpKUpl6ywBUwU%2FIYFw%2BSYdQw04elg1KpcsNQNpFWFsP1osbA7e1jWIW%2FRPFMfnhNN7fniRYYvRDmbfwljjm1I99BwQfZd2nGb3yW8p6U5ssUz7UrdgEaMqxPnh3%2FpM6avI0kMKvvcl%2FXPUUbA7SYDgdjKdQLotZDchszf3mQlqUFeo%2BiSAeOaQnxaV0AVXZdaWta8OSAjDdYaiRYE1JWDoR4yOPI3zdIUXnQhQQ8BEAH8riAhKbq%2BXITtSkVegnXM2nvsuGxa0QKE7aRsyRdWrfJu6mnZyJdz1LUkhSh7GiaDA%2B2PwubmEDlDCgtdHEBjqkAcJ0n8MNnXNfLWu1pO6N%2F63bjUGwNz%2BBdNx84MWd%2BTe9lLZIDfbkbNAbkEDfr4T2HJa6S3oNp2Zr0HAYcSSZl96FTYy5x9hR35ZbwpqsazPyC%2FiovbYxSxgXANuKPtbjnHqbNjP9asU7YIgSxevvTeqgCXrl8qSX3kWLbHuo%2BYU0n4%2BGCDnnDrlHjBk9C%2Fp%2Bp10JOXLx4oVbdq3K1nARRL63Paoo&X-Amz-Signature=1781206f93bda8446add0931488297fdc9584f0d7217a273314c9dbde52dd132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBQI5HM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCcsmh%2Fr4ZYjDH6cAdWTWn9WOTl0JfTs4Vy3FQyoXyAuAIhAJ6VSqHh298%2FPguQYYcBgVvL2Yun2c0aWnj6y2CE43%2FsKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoTc37OtDSJSXhA4wq3AMP2a4lqKlb5q%2BF0Xq20Ni3W7gLAFkDuOOcUe0M017ksnMHaQJTNfsvRc1d3Z%2BrYlhVfBB56Wvm9%2BcASUXsgxYCKI6wmNzPq9T4hBiMfRmDismHXsYN3S1qXL09k%2FmpUscOHNs1PNnLWnECOvElgltZ3AufIMvk6ssa00OvdThp8Vi%2F5ZcGgORCuSSHl6KAUDtoAL0pgOuy02Txs%2F%2B0kXYkjBEmsDdDSgsgWEqKmQK8U8fChssI7Ht%2FYe%2FfUSwtjCNsblBR%2F1d0%2FmGeU7CVS6XaQ3%2BrIx484Wu8i0q59FjBBtz%2B9KAJOhI6SAj6A2dDpDK9pKpKUpl6ywBUwU%2FIYFw%2BSYdQw04elg1KpcsNQNpFWFsP1osbA7e1jWIW%2FRPFMfnhNN7fniRYYvRDmbfwljjm1I99BwQfZd2nGb3yW8p6U5ssUz7UrdgEaMqxPnh3%2FpM6avI0kMKvvcl%2FXPUUbA7SYDgdjKdQLotZDchszf3mQlqUFeo%2BiSAeOaQnxaV0AVXZdaWta8OSAjDdYaiRYE1JWDoR4yOPI3zdIUXnQhQQ8BEAH8riAhKbq%2BXITtSkVegnXM2nvsuGxa0QKE7aRsyRdWrfJu6mnZyJdz1LUkhSh7GiaDA%2B2PwubmEDlDCgtdHEBjqkAcJ0n8MNnXNfLWu1pO6N%2F63bjUGwNz%2BBdNx84MWd%2BTe9lLZIDfbkbNAbkEDfr4T2HJa6S3oNp2Zr0HAYcSSZl96FTYy5x9hR35ZbwpqsazPyC%2FiovbYxSxgXANuKPtbjnHqbNjP9asU7YIgSxevvTeqgCXrl8qSX3kWLbHuo%2BYU0n4%2BGCDnnDrlHjBk9C%2Fp%2Bp10JOXLx4oVbdq3K1nARRL63Paoo&X-Amz-Signature=96b13f8c5d6e9aba4d59f015e143efbf5bb27d0e9489505816a7048964fe0973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBQI5HM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCcsmh%2Fr4ZYjDH6cAdWTWn9WOTl0JfTs4Vy3FQyoXyAuAIhAJ6VSqHh298%2FPguQYYcBgVvL2Yun2c0aWnj6y2CE43%2FsKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoTc37OtDSJSXhA4wq3AMP2a4lqKlb5q%2BF0Xq20Ni3W7gLAFkDuOOcUe0M017ksnMHaQJTNfsvRc1d3Z%2BrYlhVfBB56Wvm9%2BcASUXsgxYCKI6wmNzPq9T4hBiMfRmDismHXsYN3S1qXL09k%2FmpUscOHNs1PNnLWnECOvElgltZ3AufIMvk6ssa00OvdThp8Vi%2F5ZcGgORCuSSHl6KAUDtoAL0pgOuy02Txs%2F%2B0kXYkjBEmsDdDSgsgWEqKmQK8U8fChssI7Ht%2FYe%2FfUSwtjCNsblBR%2F1d0%2FmGeU7CVS6XaQ3%2BrIx484Wu8i0q59FjBBtz%2B9KAJOhI6SAj6A2dDpDK9pKpKUpl6ywBUwU%2FIYFw%2BSYdQw04elg1KpcsNQNpFWFsP1osbA7e1jWIW%2FRPFMfnhNN7fniRYYvRDmbfwljjm1I99BwQfZd2nGb3yW8p6U5ssUz7UrdgEaMqxPnh3%2FpM6avI0kMKvvcl%2FXPUUbA7SYDgdjKdQLotZDchszf3mQlqUFeo%2BiSAeOaQnxaV0AVXZdaWta8OSAjDdYaiRYE1JWDoR4yOPI3zdIUXnQhQQ8BEAH8riAhKbq%2BXITtSkVegnXM2nvsuGxa0QKE7aRsyRdWrfJu6mnZyJdz1LUkhSh7GiaDA%2B2PwubmEDlDCgtdHEBjqkAcJ0n8MNnXNfLWu1pO6N%2F63bjUGwNz%2BBdNx84MWd%2BTe9lLZIDfbkbNAbkEDfr4T2HJa6S3oNp2Zr0HAYcSSZl96FTYy5x9hR35ZbwpqsazPyC%2FiovbYxSxgXANuKPtbjnHqbNjP9asU7YIgSxevvTeqgCXrl8qSX3kWLbHuo%2BYU0n4%2BGCDnnDrlHjBk9C%2Fp%2Bp10JOXLx4oVbdq3K1nARRL63Paoo&X-Amz-Signature=c8ef5edc34f4c98227a2db4013fbdd97af3c12b8a174d4ee8fa5de2e8a477ec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBQI5HM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCcsmh%2Fr4ZYjDH6cAdWTWn9WOTl0JfTs4Vy3FQyoXyAuAIhAJ6VSqHh298%2FPguQYYcBgVvL2Yun2c0aWnj6y2CE43%2FsKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoTc37OtDSJSXhA4wq3AMP2a4lqKlb5q%2BF0Xq20Ni3W7gLAFkDuOOcUe0M017ksnMHaQJTNfsvRc1d3Z%2BrYlhVfBB56Wvm9%2BcASUXsgxYCKI6wmNzPq9T4hBiMfRmDismHXsYN3S1qXL09k%2FmpUscOHNs1PNnLWnECOvElgltZ3AufIMvk6ssa00OvdThp8Vi%2F5ZcGgORCuSSHl6KAUDtoAL0pgOuy02Txs%2F%2B0kXYkjBEmsDdDSgsgWEqKmQK8U8fChssI7Ht%2FYe%2FfUSwtjCNsblBR%2F1d0%2FmGeU7CVS6XaQ3%2BrIx484Wu8i0q59FjBBtz%2B9KAJOhI6SAj6A2dDpDK9pKpKUpl6ywBUwU%2FIYFw%2BSYdQw04elg1KpcsNQNpFWFsP1osbA7e1jWIW%2FRPFMfnhNN7fniRYYvRDmbfwljjm1I99BwQfZd2nGb3yW8p6U5ssUz7UrdgEaMqxPnh3%2FpM6avI0kMKvvcl%2FXPUUbA7SYDgdjKdQLotZDchszf3mQlqUFeo%2BiSAeOaQnxaV0AVXZdaWta8OSAjDdYaiRYE1JWDoR4yOPI3zdIUXnQhQQ8BEAH8riAhKbq%2BXITtSkVegnXM2nvsuGxa0QKE7aRsyRdWrfJu6mnZyJdz1LUkhSh7GiaDA%2B2PwubmEDlDCgtdHEBjqkAcJ0n8MNnXNfLWu1pO6N%2F63bjUGwNz%2BBdNx84MWd%2BTe9lLZIDfbkbNAbkEDfr4T2HJa6S3oNp2Zr0HAYcSSZl96FTYy5x9hR35ZbwpqsazPyC%2FiovbYxSxgXANuKPtbjnHqbNjP9asU7YIgSxevvTeqgCXrl8qSX3kWLbHuo%2BYU0n4%2BGCDnnDrlHjBk9C%2Fp%2Bp10JOXLx4oVbdq3K1nARRL63Paoo&X-Amz-Signature=adadbffaa1b1e2411938207ad59e5e48b3500da63ceaeca7486d6e70968c704b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBQI5HM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCcsmh%2Fr4ZYjDH6cAdWTWn9WOTl0JfTs4Vy3FQyoXyAuAIhAJ6VSqHh298%2FPguQYYcBgVvL2Yun2c0aWnj6y2CE43%2FsKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoTc37OtDSJSXhA4wq3AMP2a4lqKlb5q%2BF0Xq20Ni3W7gLAFkDuOOcUe0M017ksnMHaQJTNfsvRc1d3Z%2BrYlhVfBB56Wvm9%2BcASUXsgxYCKI6wmNzPq9T4hBiMfRmDismHXsYN3S1qXL09k%2FmpUscOHNs1PNnLWnECOvElgltZ3AufIMvk6ssa00OvdThp8Vi%2F5ZcGgORCuSSHl6KAUDtoAL0pgOuy02Txs%2F%2B0kXYkjBEmsDdDSgsgWEqKmQK8U8fChssI7Ht%2FYe%2FfUSwtjCNsblBR%2F1d0%2FmGeU7CVS6XaQ3%2BrIx484Wu8i0q59FjBBtz%2B9KAJOhI6SAj6A2dDpDK9pKpKUpl6ywBUwU%2FIYFw%2BSYdQw04elg1KpcsNQNpFWFsP1osbA7e1jWIW%2FRPFMfnhNN7fniRYYvRDmbfwljjm1I99BwQfZd2nGb3yW8p6U5ssUz7UrdgEaMqxPnh3%2FpM6avI0kMKvvcl%2FXPUUbA7SYDgdjKdQLotZDchszf3mQlqUFeo%2BiSAeOaQnxaV0AVXZdaWta8OSAjDdYaiRYE1JWDoR4yOPI3zdIUXnQhQQ8BEAH8riAhKbq%2BXITtSkVegnXM2nvsuGxa0QKE7aRsyRdWrfJu6mnZyJdz1LUkhSh7GiaDA%2B2PwubmEDlDCgtdHEBjqkAcJ0n8MNnXNfLWu1pO6N%2F63bjUGwNz%2BBdNx84MWd%2BTe9lLZIDfbkbNAbkEDfr4T2HJa6S3oNp2Zr0HAYcSSZl96FTYy5x9hR35ZbwpqsazPyC%2FiovbYxSxgXANuKPtbjnHqbNjP9asU7YIgSxevvTeqgCXrl8qSX3kWLbHuo%2BYU0n4%2BGCDnnDrlHjBk9C%2Fp%2Bp10JOXLx4oVbdq3K1nARRL63Paoo&X-Amz-Signature=e9ac48fe8cbed7fc4a45f4355aaf3556489702b6996e4be6e163efc4fe3c028d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBQI5HM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCcsmh%2Fr4ZYjDH6cAdWTWn9WOTl0JfTs4Vy3FQyoXyAuAIhAJ6VSqHh298%2FPguQYYcBgVvL2Yun2c0aWnj6y2CE43%2FsKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoTc37OtDSJSXhA4wq3AMP2a4lqKlb5q%2BF0Xq20Ni3W7gLAFkDuOOcUe0M017ksnMHaQJTNfsvRc1d3Z%2BrYlhVfBB56Wvm9%2BcASUXsgxYCKI6wmNzPq9T4hBiMfRmDismHXsYN3S1qXL09k%2FmpUscOHNs1PNnLWnECOvElgltZ3AufIMvk6ssa00OvdThp8Vi%2F5ZcGgORCuSSHl6KAUDtoAL0pgOuy02Txs%2F%2B0kXYkjBEmsDdDSgsgWEqKmQK8U8fChssI7Ht%2FYe%2FfUSwtjCNsblBR%2F1d0%2FmGeU7CVS6XaQ3%2BrIx484Wu8i0q59FjBBtz%2B9KAJOhI6SAj6A2dDpDK9pKpKUpl6ywBUwU%2FIYFw%2BSYdQw04elg1KpcsNQNpFWFsP1osbA7e1jWIW%2FRPFMfnhNN7fniRYYvRDmbfwljjm1I99BwQfZd2nGb3yW8p6U5ssUz7UrdgEaMqxPnh3%2FpM6avI0kMKvvcl%2FXPUUbA7SYDgdjKdQLotZDchszf3mQlqUFeo%2BiSAeOaQnxaV0AVXZdaWta8OSAjDdYaiRYE1JWDoR4yOPI3zdIUXnQhQQ8BEAH8riAhKbq%2BXITtSkVegnXM2nvsuGxa0QKE7aRsyRdWrfJu6mnZyJdz1LUkhSh7GiaDA%2B2PwubmEDlDCgtdHEBjqkAcJ0n8MNnXNfLWu1pO6N%2F63bjUGwNz%2BBdNx84MWd%2BTe9lLZIDfbkbNAbkEDfr4T2HJa6S3oNp2Zr0HAYcSSZl96FTYy5x9hR35ZbwpqsazPyC%2FiovbYxSxgXANuKPtbjnHqbNjP9asU7YIgSxevvTeqgCXrl8qSX3kWLbHuo%2BYU0n4%2BGCDnnDrlHjBk9C%2Fp%2Bp10JOXLx4oVbdq3K1nARRL63Paoo&X-Amz-Signature=c9618ddd04af1ac569554fa4ae935b66a563f184d2113b223f16cf0f9e50a54e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBQI5HM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCcsmh%2Fr4ZYjDH6cAdWTWn9WOTl0JfTs4Vy3FQyoXyAuAIhAJ6VSqHh298%2FPguQYYcBgVvL2Yun2c0aWnj6y2CE43%2FsKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoTc37OtDSJSXhA4wq3AMP2a4lqKlb5q%2BF0Xq20Ni3W7gLAFkDuOOcUe0M017ksnMHaQJTNfsvRc1d3Z%2BrYlhVfBB56Wvm9%2BcASUXsgxYCKI6wmNzPq9T4hBiMfRmDismHXsYN3S1qXL09k%2FmpUscOHNs1PNnLWnECOvElgltZ3AufIMvk6ssa00OvdThp8Vi%2F5ZcGgORCuSSHl6KAUDtoAL0pgOuy02Txs%2F%2B0kXYkjBEmsDdDSgsgWEqKmQK8U8fChssI7Ht%2FYe%2FfUSwtjCNsblBR%2F1d0%2FmGeU7CVS6XaQ3%2BrIx484Wu8i0q59FjBBtz%2B9KAJOhI6SAj6A2dDpDK9pKpKUpl6ywBUwU%2FIYFw%2BSYdQw04elg1KpcsNQNpFWFsP1osbA7e1jWIW%2FRPFMfnhNN7fniRYYvRDmbfwljjm1I99BwQfZd2nGb3yW8p6U5ssUz7UrdgEaMqxPnh3%2FpM6avI0kMKvvcl%2FXPUUbA7SYDgdjKdQLotZDchszf3mQlqUFeo%2BiSAeOaQnxaV0AVXZdaWta8OSAjDdYaiRYE1JWDoR4yOPI3zdIUXnQhQQ8BEAH8riAhKbq%2BXITtSkVegnXM2nvsuGxa0QKE7aRsyRdWrfJu6mnZyJdz1LUkhSh7GiaDA%2B2PwubmEDlDCgtdHEBjqkAcJ0n8MNnXNfLWu1pO6N%2F63bjUGwNz%2BBdNx84MWd%2BTe9lLZIDfbkbNAbkEDfr4T2HJa6S3oNp2Zr0HAYcSSZl96FTYy5x9hR35ZbwpqsazPyC%2FiovbYxSxgXANuKPtbjnHqbNjP9asU7YIgSxevvTeqgCXrl8qSX3kWLbHuo%2BYU0n4%2BGCDnnDrlHjBk9C%2Fp%2Bp10JOXLx4oVbdq3K1nARRL63Paoo&X-Amz-Signature=9774bcb598bf039377cc16b067b51d1e8b0a13f341845c36a4b27efd419ff4f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBQI5HM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCcsmh%2Fr4ZYjDH6cAdWTWn9WOTl0JfTs4Vy3FQyoXyAuAIhAJ6VSqHh298%2FPguQYYcBgVvL2Yun2c0aWnj6y2CE43%2FsKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoTc37OtDSJSXhA4wq3AMP2a4lqKlb5q%2BF0Xq20Ni3W7gLAFkDuOOcUe0M017ksnMHaQJTNfsvRc1d3Z%2BrYlhVfBB56Wvm9%2BcASUXsgxYCKI6wmNzPq9T4hBiMfRmDismHXsYN3S1qXL09k%2FmpUscOHNs1PNnLWnECOvElgltZ3AufIMvk6ssa00OvdThp8Vi%2F5ZcGgORCuSSHl6KAUDtoAL0pgOuy02Txs%2F%2B0kXYkjBEmsDdDSgsgWEqKmQK8U8fChssI7Ht%2FYe%2FfUSwtjCNsblBR%2F1d0%2FmGeU7CVS6XaQ3%2BrIx484Wu8i0q59FjBBtz%2B9KAJOhI6SAj6A2dDpDK9pKpKUpl6ywBUwU%2FIYFw%2BSYdQw04elg1KpcsNQNpFWFsP1osbA7e1jWIW%2FRPFMfnhNN7fniRYYvRDmbfwljjm1I99BwQfZd2nGb3yW8p6U5ssUz7UrdgEaMqxPnh3%2FpM6avI0kMKvvcl%2FXPUUbA7SYDgdjKdQLotZDchszf3mQlqUFeo%2BiSAeOaQnxaV0AVXZdaWta8OSAjDdYaiRYE1JWDoR4yOPI3zdIUXnQhQQ8BEAH8riAhKbq%2BXITtSkVegnXM2nvsuGxa0QKE7aRsyRdWrfJu6mnZyJdz1LUkhSh7GiaDA%2B2PwubmEDlDCgtdHEBjqkAcJ0n8MNnXNfLWu1pO6N%2F63bjUGwNz%2BBdNx84MWd%2BTe9lLZIDfbkbNAbkEDfr4T2HJa6S3oNp2Zr0HAYcSSZl96FTYy5x9hR35ZbwpqsazPyC%2FiovbYxSxgXANuKPtbjnHqbNjP9asU7YIgSxevvTeqgCXrl8qSX3kWLbHuo%2BYU0n4%2BGCDnnDrlHjBk9C%2Fp%2Bp10JOXLx4oVbdq3K1nARRL63Paoo&X-Amz-Signature=13f0a85d437c2cd198704a06ef56d610f99810008336a6438777e5ad37184e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHBQI5HM%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T081454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCcsmh%2Fr4ZYjDH6cAdWTWn9WOTl0JfTs4Vy3FQyoXyAuAIhAJ6VSqHh298%2FPguQYYcBgVvL2Yun2c0aWnj6y2CE43%2FsKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoTc37OtDSJSXhA4wq3AMP2a4lqKlb5q%2BF0Xq20Ni3W7gLAFkDuOOcUe0M017ksnMHaQJTNfsvRc1d3Z%2BrYlhVfBB56Wvm9%2BcASUXsgxYCKI6wmNzPq9T4hBiMfRmDismHXsYN3S1qXL09k%2FmpUscOHNs1PNnLWnECOvElgltZ3AufIMvk6ssa00OvdThp8Vi%2F5ZcGgORCuSSHl6KAUDtoAL0pgOuy02Txs%2F%2B0kXYkjBEmsDdDSgsgWEqKmQK8U8fChssI7Ht%2FYe%2FfUSwtjCNsblBR%2F1d0%2FmGeU7CVS6XaQ3%2BrIx484Wu8i0q59FjBBtz%2B9KAJOhI6SAj6A2dDpDK9pKpKUpl6ywBUwU%2FIYFw%2BSYdQw04elg1KpcsNQNpFWFsP1osbA7e1jWIW%2FRPFMfnhNN7fniRYYvRDmbfwljjm1I99BwQfZd2nGb3yW8p6U5ssUz7UrdgEaMqxPnh3%2FpM6avI0kMKvvcl%2FXPUUbA7SYDgdjKdQLotZDchszf3mQlqUFeo%2BiSAeOaQnxaV0AVXZdaWta8OSAjDdYaiRYE1JWDoR4yOPI3zdIUXnQhQQ8BEAH8riAhKbq%2BXITtSkVegnXM2nvsuGxa0QKE7aRsyRdWrfJu6mnZyJdz1LUkhSh7GiaDA%2B2PwubmEDlDCgtdHEBjqkAcJ0n8MNnXNfLWu1pO6N%2F63bjUGwNz%2BBdNx84MWd%2BTe9lLZIDfbkbNAbkEDfr4T2HJa6S3oNp2Zr0HAYcSSZl96FTYy5x9hR35ZbwpqsazPyC%2FiovbYxSxgXANuKPtbjnHqbNjP9asU7YIgSxevvTeqgCXrl8qSX3kWLbHuo%2BYU0n4%2BGCDnnDrlHjBk9C%2Fp%2Bp10JOXLx4oVbdq3K1nARRL63Paoo&X-Amz-Signature=17dc6eb7c6d3b50fb15f99fa79c4a3defd4aa565276759d40e45532ae6ddb682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
