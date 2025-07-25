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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUKLVIPA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDrpYzQfF5eT0QVuvVVrHo04RbvvEhXy238gV9s%2FA7l9AiBvODmAQDZ38Uw3puba6ENKOMo%2Fp%2Bx1fo74qmB73RZrNir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMQemPclVcaoieYEPiKtwDwgD%2FR5frhHG8w5q4JKm0VnRd%2BBUFuiOxQ6HZ5RmWY9Sc5GckNN0M7ufJXzqVJ0od2u%2BJzFMIkwhb%2BYigeKGz5mk7q3o9XK8r4GyT2PEHpdbrRv9CWe9khNVwukndeibxUI1gOK16ro%2FKZyFgRut9AdZcB6fWhquTVhiynO1BGMiXWYg4MzhNXDdOBdft1E3yF%2F605452%2Ft2nYnXPG57IjSnXzkxLr814KMZwuxzmSMFBEkQN2RPbf3yJDxFi0vccbjy6q9YkagJILDqKoper9vk05g2MKLV5MXUYZ3pudHUN0WPYFt1aptWyiLs5SAt6YfJVaMA0vcENOvhVOHf170M33%2FAwJ2guQmipwtPlJ4luUb4Sq%2F2Vf%2FuUNXEZh%2BKQjHcEO25K8bTccI8e2bcBSOtHLtINOvoU6iuecIdov7OzjUDhRQK%2BQfpnelbnv03176vyTRpoKhDymGQ7PXa2kKjC9by5%2FqcFd0rLl2ntoLsDamUHbOapd%2B%2BgX0i8%2BQq2n2J3ElVz0Pjypjn70unaOO3oPQ0wxv%2Bg3bYo9EfE52U6B5rlN%2F7aXWEKid8MWKZOfwF%2BFa8RNoSSq7eu3P8s2Wnpf2CvSrQIxQuRcKEUmJjnYlURisszLoXh%2F5Mw1MCMxAY6pgFfDgsHyzusLuYeOFD1SUhB%2BB0STJiuA3uwWARiqyEv3Ps1AWsloIm%2BxUVYxzfJ5qp0Hp%2Ft2G%2FeC%2FcJ%2BvQLbK9kftfVY2eirYVEWMR0wqedA2xUOL3PIiUmVxuu0ALWsmuXwxx5RJGcRD%2F1aixK7jte6ZpJhA5e4kTuLpoOZPmrd44XlZtnJKOLVWwPbnm7dwGGU7uq8OVorbbqwgSfUQv99i09X2r0&X-Amz-Signature=5fe5ccf04aee6b8f0f38f4e416839057793db47d3c04a173a946115ceccd42bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUKLVIPA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDrpYzQfF5eT0QVuvVVrHo04RbvvEhXy238gV9s%2FA7l9AiBvODmAQDZ38Uw3puba6ENKOMo%2Fp%2Bx1fo74qmB73RZrNir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMQemPclVcaoieYEPiKtwDwgD%2FR5frhHG8w5q4JKm0VnRd%2BBUFuiOxQ6HZ5RmWY9Sc5GckNN0M7ufJXzqVJ0od2u%2BJzFMIkwhb%2BYigeKGz5mk7q3o9XK8r4GyT2PEHpdbrRv9CWe9khNVwukndeibxUI1gOK16ro%2FKZyFgRut9AdZcB6fWhquTVhiynO1BGMiXWYg4MzhNXDdOBdft1E3yF%2F605452%2Ft2nYnXPG57IjSnXzkxLr814KMZwuxzmSMFBEkQN2RPbf3yJDxFi0vccbjy6q9YkagJILDqKoper9vk05g2MKLV5MXUYZ3pudHUN0WPYFt1aptWyiLs5SAt6YfJVaMA0vcENOvhVOHf170M33%2FAwJ2guQmipwtPlJ4luUb4Sq%2F2Vf%2FuUNXEZh%2BKQjHcEO25K8bTccI8e2bcBSOtHLtINOvoU6iuecIdov7OzjUDhRQK%2BQfpnelbnv03176vyTRpoKhDymGQ7PXa2kKjC9by5%2FqcFd0rLl2ntoLsDamUHbOapd%2B%2BgX0i8%2BQq2n2J3ElVz0Pjypjn70unaOO3oPQ0wxv%2Bg3bYo9EfE52U6B5rlN%2F7aXWEKid8MWKZOfwF%2BFa8RNoSSq7eu3P8s2Wnpf2CvSrQIxQuRcKEUmJjnYlURisszLoXh%2F5Mw1MCMxAY6pgFfDgsHyzusLuYeOFD1SUhB%2BB0STJiuA3uwWARiqyEv3Ps1AWsloIm%2BxUVYxzfJ5qp0Hp%2Ft2G%2FeC%2FcJ%2BvQLbK9kftfVY2eirYVEWMR0wqedA2xUOL3PIiUmVxuu0ALWsmuXwxx5RJGcRD%2F1aixK7jte6ZpJhA5e4kTuLpoOZPmrd44XlZtnJKOLVWwPbnm7dwGGU7uq8OVorbbqwgSfUQv99i09X2r0&X-Amz-Signature=f3fbd2513074254177db5aad54e44795f878a0b42da3714ed9c9ccb4d7770fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUKLVIPA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDrpYzQfF5eT0QVuvVVrHo04RbvvEhXy238gV9s%2FA7l9AiBvODmAQDZ38Uw3puba6ENKOMo%2Fp%2Bx1fo74qmB73RZrNir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMQemPclVcaoieYEPiKtwDwgD%2FR5frhHG8w5q4JKm0VnRd%2BBUFuiOxQ6HZ5RmWY9Sc5GckNN0M7ufJXzqVJ0od2u%2BJzFMIkwhb%2BYigeKGz5mk7q3o9XK8r4GyT2PEHpdbrRv9CWe9khNVwukndeibxUI1gOK16ro%2FKZyFgRut9AdZcB6fWhquTVhiynO1BGMiXWYg4MzhNXDdOBdft1E3yF%2F605452%2Ft2nYnXPG57IjSnXzkxLr814KMZwuxzmSMFBEkQN2RPbf3yJDxFi0vccbjy6q9YkagJILDqKoper9vk05g2MKLV5MXUYZ3pudHUN0WPYFt1aptWyiLs5SAt6YfJVaMA0vcENOvhVOHf170M33%2FAwJ2guQmipwtPlJ4luUb4Sq%2F2Vf%2FuUNXEZh%2BKQjHcEO25K8bTccI8e2bcBSOtHLtINOvoU6iuecIdov7OzjUDhRQK%2BQfpnelbnv03176vyTRpoKhDymGQ7PXa2kKjC9by5%2FqcFd0rLl2ntoLsDamUHbOapd%2B%2BgX0i8%2BQq2n2J3ElVz0Pjypjn70unaOO3oPQ0wxv%2Bg3bYo9EfE52U6B5rlN%2F7aXWEKid8MWKZOfwF%2BFa8RNoSSq7eu3P8s2Wnpf2CvSrQIxQuRcKEUmJjnYlURisszLoXh%2F5Mw1MCMxAY6pgFfDgsHyzusLuYeOFD1SUhB%2BB0STJiuA3uwWARiqyEv3Ps1AWsloIm%2BxUVYxzfJ5qp0Hp%2Ft2G%2FeC%2FcJ%2BvQLbK9kftfVY2eirYVEWMR0wqedA2xUOL3PIiUmVxuu0ALWsmuXwxx5RJGcRD%2F1aixK7jte6ZpJhA5e4kTuLpoOZPmrd44XlZtnJKOLVWwPbnm7dwGGU7uq8OVorbbqwgSfUQv99i09X2r0&X-Amz-Signature=86ef4fe0436c1feb1d3acab92042cda348df4e77ff74ab2162c33cb5c413fb3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUKLVIPA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDrpYzQfF5eT0QVuvVVrHo04RbvvEhXy238gV9s%2FA7l9AiBvODmAQDZ38Uw3puba6ENKOMo%2Fp%2Bx1fo74qmB73RZrNir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMQemPclVcaoieYEPiKtwDwgD%2FR5frhHG8w5q4JKm0VnRd%2BBUFuiOxQ6HZ5RmWY9Sc5GckNN0M7ufJXzqVJ0od2u%2BJzFMIkwhb%2BYigeKGz5mk7q3o9XK8r4GyT2PEHpdbrRv9CWe9khNVwukndeibxUI1gOK16ro%2FKZyFgRut9AdZcB6fWhquTVhiynO1BGMiXWYg4MzhNXDdOBdft1E3yF%2F605452%2Ft2nYnXPG57IjSnXzkxLr814KMZwuxzmSMFBEkQN2RPbf3yJDxFi0vccbjy6q9YkagJILDqKoper9vk05g2MKLV5MXUYZ3pudHUN0WPYFt1aptWyiLs5SAt6YfJVaMA0vcENOvhVOHf170M33%2FAwJ2guQmipwtPlJ4luUb4Sq%2F2Vf%2FuUNXEZh%2BKQjHcEO25K8bTccI8e2bcBSOtHLtINOvoU6iuecIdov7OzjUDhRQK%2BQfpnelbnv03176vyTRpoKhDymGQ7PXa2kKjC9by5%2FqcFd0rLl2ntoLsDamUHbOapd%2B%2BgX0i8%2BQq2n2J3ElVz0Pjypjn70unaOO3oPQ0wxv%2Bg3bYo9EfE52U6B5rlN%2F7aXWEKid8MWKZOfwF%2BFa8RNoSSq7eu3P8s2Wnpf2CvSrQIxQuRcKEUmJjnYlURisszLoXh%2F5Mw1MCMxAY6pgFfDgsHyzusLuYeOFD1SUhB%2BB0STJiuA3uwWARiqyEv3Ps1AWsloIm%2BxUVYxzfJ5qp0Hp%2Ft2G%2FeC%2FcJ%2BvQLbK9kftfVY2eirYVEWMR0wqedA2xUOL3PIiUmVxuu0ALWsmuXwxx5RJGcRD%2F1aixK7jte6ZpJhA5e4kTuLpoOZPmrd44XlZtnJKOLVWwPbnm7dwGGU7uq8OVorbbqwgSfUQv99i09X2r0&X-Amz-Signature=e005ce9e70329c157ac004e04e24c4e6cd0130528b041e0afacc7d0e050986ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUKLVIPA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDrpYzQfF5eT0QVuvVVrHo04RbvvEhXy238gV9s%2FA7l9AiBvODmAQDZ38Uw3puba6ENKOMo%2Fp%2Bx1fo74qmB73RZrNir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMQemPclVcaoieYEPiKtwDwgD%2FR5frhHG8w5q4JKm0VnRd%2BBUFuiOxQ6HZ5RmWY9Sc5GckNN0M7ufJXzqVJ0od2u%2BJzFMIkwhb%2BYigeKGz5mk7q3o9XK8r4GyT2PEHpdbrRv9CWe9khNVwukndeibxUI1gOK16ro%2FKZyFgRut9AdZcB6fWhquTVhiynO1BGMiXWYg4MzhNXDdOBdft1E3yF%2F605452%2Ft2nYnXPG57IjSnXzkxLr814KMZwuxzmSMFBEkQN2RPbf3yJDxFi0vccbjy6q9YkagJILDqKoper9vk05g2MKLV5MXUYZ3pudHUN0WPYFt1aptWyiLs5SAt6YfJVaMA0vcENOvhVOHf170M33%2FAwJ2guQmipwtPlJ4luUb4Sq%2F2Vf%2FuUNXEZh%2BKQjHcEO25K8bTccI8e2bcBSOtHLtINOvoU6iuecIdov7OzjUDhRQK%2BQfpnelbnv03176vyTRpoKhDymGQ7PXa2kKjC9by5%2FqcFd0rLl2ntoLsDamUHbOapd%2B%2BgX0i8%2BQq2n2J3ElVz0Pjypjn70unaOO3oPQ0wxv%2Bg3bYo9EfE52U6B5rlN%2F7aXWEKid8MWKZOfwF%2BFa8RNoSSq7eu3P8s2Wnpf2CvSrQIxQuRcKEUmJjnYlURisszLoXh%2F5Mw1MCMxAY6pgFfDgsHyzusLuYeOFD1SUhB%2BB0STJiuA3uwWARiqyEv3Ps1AWsloIm%2BxUVYxzfJ5qp0Hp%2Ft2G%2FeC%2FcJ%2BvQLbK9kftfVY2eirYVEWMR0wqedA2xUOL3PIiUmVxuu0ALWsmuXwxx5RJGcRD%2F1aixK7jte6ZpJhA5e4kTuLpoOZPmrd44XlZtnJKOLVWwPbnm7dwGGU7uq8OVorbbqwgSfUQv99i09X2r0&X-Amz-Signature=5bf977b5e18b421e74bc500e7e272b7e7b6f7832d51a60aa0d082da3a4135bb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUKLVIPA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDrpYzQfF5eT0QVuvVVrHo04RbvvEhXy238gV9s%2FA7l9AiBvODmAQDZ38Uw3puba6ENKOMo%2Fp%2Bx1fo74qmB73RZrNir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMQemPclVcaoieYEPiKtwDwgD%2FR5frhHG8w5q4JKm0VnRd%2BBUFuiOxQ6HZ5RmWY9Sc5GckNN0M7ufJXzqVJ0od2u%2BJzFMIkwhb%2BYigeKGz5mk7q3o9XK8r4GyT2PEHpdbrRv9CWe9khNVwukndeibxUI1gOK16ro%2FKZyFgRut9AdZcB6fWhquTVhiynO1BGMiXWYg4MzhNXDdOBdft1E3yF%2F605452%2Ft2nYnXPG57IjSnXzkxLr814KMZwuxzmSMFBEkQN2RPbf3yJDxFi0vccbjy6q9YkagJILDqKoper9vk05g2MKLV5MXUYZ3pudHUN0WPYFt1aptWyiLs5SAt6YfJVaMA0vcENOvhVOHf170M33%2FAwJ2guQmipwtPlJ4luUb4Sq%2F2Vf%2FuUNXEZh%2BKQjHcEO25K8bTccI8e2bcBSOtHLtINOvoU6iuecIdov7OzjUDhRQK%2BQfpnelbnv03176vyTRpoKhDymGQ7PXa2kKjC9by5%2FqcFd0rLl2ntoLsDamUHbOapd%2B%2BgX0i8%2BQq2n2J3ElVz0Pjypjn70unaOO3oPQ0wxv%2Bg3bYo9EfE52U6B5rlN%2F7aXWEKid8MWKZOfwF%2BFa8RNoSSq7eu3P8s2Wnpf2CvSrQIxQuRcKEUmJjnYlURisszLoXh%2F5Mw1MCMxAY6pgFfDgsHyzusLuYeOFD1SUhB%2BB0STJiuA3uwWARiqyEv3Ps1AWsloIm%2BxUVYxzfJ5qp0Hp%2Ft2G%2FeC%2FcJ%2BvQLbK9kftfVY2eirYVEWMR0wqedA2xUOL3PIiUmVxuu0ALWsmuXwxx5RJGcRD%2F1aixK7jte6ZpJhA5e4kTuLpoOZPmrd44XlZtnJKOLVWwPbnm7dwGGU7uq8OVorbbqwgSfUQv99i09X2r0&X-Amz-Signature=82cf1e6bfe4435f8b6ccd0febfc6ec2c8c5b819a27e865b54d3337f50e7490f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
