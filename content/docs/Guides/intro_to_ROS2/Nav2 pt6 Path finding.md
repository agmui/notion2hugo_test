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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=68084bde4e2411b2bd3c2a7d76001b5026cac726a79b35fea939e338b49761d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=ce2d77c162d22b53e1fbec3999417b678fc44183428c0195ab788f345eda8589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=0445f200106224319bc54be73952f95ab3c4f2929b895f29e85aea2633d3eb0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=b7031337265246a4380a75fee75ee7828e056bee94dc0902b73c87108ccdc78f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=880516636175ddfa4c3e0c59d843b9a2d9dd104ef1ad3281c37788cc11ceb9c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=62556092327faba840c269e9c4b4faad8427f50ed7c16435f586d950b46cbbaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=c100864b9c3f737a0f4b2996b979d113256b5a6527b63ef6a1d9a916af513b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=efa734010c61b3c104686aa459382dc4063e6df0e8340ce087cdb5f205263c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=4af1879f37fd5e80dbaaf00bb68c7ff32eaa17c8a2bc4c6f2c3c7da559b6f26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=2de2bd9f92e16d4e9847e240a8aa2ae316703d2c2b5c46715ff22c71872e38b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=a51f073263b28ebef14fa7f20baf3bdcd97545ece14381e58c8c372e83611d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=8c955f0a8945a94f653badee440648d09b3895c4e2907d390cc8c1c4950b2f40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YINIUFA4%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCYm3dbVCQno8Bpymqhjx%2F%2BuJXhPREjp9tdid8KeGC0VQIhAPfBwJ9YUv2G8SEtb%2BPoQpSPmmg7bRAUQwBhmnrLvPJDKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxO%2F%2Fhg8KSpLpyigBoq3AOiVmVlMZrEYoBohCozRuO58W3i6Q%2FbOFKV37A%2BTH9Of9vo9z9wchHFatJRTbjqaLc3NGEq1VhOVDB9uQqyipK75xzaQL%2FC4RW8%2Bq8AEmNg0s2BSqIS3nhtcoppSnavS2pIghJ0BV%2Bf5k6UQEKGDDzJJCa2YZ4rFpsm0aAk6sZE6moNUQUt8WLkKw8rvrwiFs1XfxODfBM0DC5W4iXCli1EsacGLH%2FbVXmX1VMX%2BfUs97hVnpmbKmt0RNCZZahX9oeqAk6ox5tUBGhq9wMGqfSOPlzbwINMVSK9%2B01YzxfFFXU%2FdqE9ZbvdzyuWtsyrEvM6NDcgk%2FAxcP2BoPLsb76sQR61fnGvaPPIMlzqAMSCP48LO8oIHDN9R%2FITVYgIp6bPmo1NbHhLZ8RS7SxDk4YczWqczeyPdKASHgotMyOKIdgxVh4WGmM5B1zTofhbuSptL2MiS8zZ3%2Bx%2BUGTajwarneRzpbNkW5T0h8j3axibykKmwjir1rujK3jjZ71aOPjcSpVJtrmjMZ2sLYBWV7kSomXoCKkif1kRuRbcMiMMkwXoPtiCKfHMPHh6HbBTG3LDZ46ojgK02ryANv%2F7y2ggdva9KB7yuzrOY80Mnhwk885OfzTRvF8qmqDyCTCmytvEBjqkAVZgX1iqd9hoGvuV8pYn3TK%2B4LfvNGcOVs2Xn6mgnSLeWsWF8k1xlwRgfxy%2BaojtfTng7pQckugZoihQRsW1ixCSiHzkqrfMdw%2F6lcsxyLNcDYrfhRGRMzsHkAxIj0844ltvvea0Kf6JWl7WQKTKDiJitlWehYaohwJ2iN6QBVHL74l9X%2FgxkzfVwbv8nAfD4XsXPhJTLrgqv9VODBU4IcLiLxPu&X-Amz-Signature=21e83d040ab05fb086f2d30783c2220c60eb80a68bacec6fe3d79ca21efb3139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
