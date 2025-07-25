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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLPM62L%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCS4%2B%2FRRj8L0KFhQtwntjegKX1PEMtmp2xPzBBo4HspkwIhALejkosZMJuela97%2BbsV6THSlmo5KgRuHhJjQXZ3ZdEHKv8DCEEQABoMNjM3NDIzMTgzODA1Igz8Q8KK%2FUcs5OsVtgEq3AMtjsuatYJ9mqLBl58xrMGU9N17eC8maKTkQtPDBrh4eFtCDmSM4jmNxFFUPm2hZUuHulVccXIOf%2F9VZ0qN5iJRl4dYl7FybVE5H3c4NAqS%2FtFlm%2BwzS7AGQbwcqrRZ1gvRblDY0HkFzhvq3lRwk3jZHAgWUvCW8dBywDo%2FHph2ZgebBmoZUQ0pkEyjkaZlsmy94%2Blh5Kd%2FmNpSOo%2FfO2rP34o%2BVQZNlGzTjTj8gPInhFuIMzrLVxwJVk01CNAbf%2BxgEaniI0uJsGtq8RH37TdVbTTaIzOVC%2FYDkRCsDMyR6tPyYmt0QUyljalaQb7HxKOgO%2FZEfxrbHeNypYKxELC4IWw5d6DXn71aP0eS2oCA2gcyj2KCTK8GH2G0frbm1WFk27sFKI%2FGjx3SEhSbqhxokTAnugFO3C6XRHRCf4u%2FRdr1koksSsYTHSg0Yu4Js7HCKVr04B9C%2FjBTgvoRlvfKjEoKXrVHAN%2F4lG8hEr7C8%2BvkXhnB4E3JrJk7BcpuH01ovsofQHv6aylTKlavNl9xc0lrI%2Fh%2Bq1Hh1RfyZdXukyugBN79%2FjgiXZe3QoWg4D9C4mmCrSBa0QvG4kf9mCugYioUTrPnoSVZ1MUaWaeYKuc2F%2BrXB7954Mg7KjD054zEBjqkAelEiTKT1U4flNDcevSAXbI8ZQKm6%2BWz66SblJQKxc8Bexe3pmtk%2BUQMZm9OnJd%2BJkrJruKlc%2FDzhqMp4stvtNlApkMpoAafK46WwU17R2adVGnWbg3HWcIZjJ1xa%2Fxz6ssrjjqsFp179hUGuZpDZyqWHW2yObjnJaqUEkB0bStN%2F4n1EX4jqmlhoHgYl7KBE2xZbzmBa%2FJh5f%2FC8LAObGun4XM3&X-Amz-Signature=929103d22ffa6f1590e5b4aa99e04816a0c2e2a740489433afe6924ea86453dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLPM62L%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCS4%2B%2FRRj8L0KFhQtwntjegKX1PEMtmp2xPzBBo4HspkwIhALejkosZMJuela97%2BbsV6THSlmo5KgRuHhJjQXZ3ZdEHKv8DCEEQABoMNjM3NDIzMTgzODA1Igz8Q8KK%2FUcs5OsVtgEq3AMtjsuatYJ9mqLBl58xrMGU9N17eC8maKTkQtPDBrh4eFtCDmSM4jmNxFFUPm2hZUuHulVccXIOf%2F9VZ0qN5iJRl4dYl7FybVE5H3c4NAqS%2FtFlm%2BwzS7AGQbwcqrRZ1gvRblDY0HkFzhvq3lRwk3jZHAgWUvCW8dBywDo%2FHph2ZgebBmoZUQ0pkEyjkaZlsmy94%2Blh5Kd%2FmNpSOo%2FfO2rP34o%2BVQZNlGzTjTj8gPInhFuIMzrLVxwJVk01CNAbf%2BxgEaniI0uJsGtq8RH37TdVbTTaIzOVC%2FYDkRCsDMyR6tPyYmt0QUyljalaQb7HxKOgO%2FZEfxrbHeNypYKxELC4IWw5d6DXn71aP0eS2oCA2gcyj2KCTK8GH2G0frbm1WFk27sFKI%2FGjx3SEhSbqhxokTAnugFO3C6XRHRCf4u%2FRdr1koksSsYTHSg0Yu4Js7HCKVr04B9C%2FjBTgvoRlvfKjEoKXrVHAN%2F4lG8hEr7C8%2BvkXhnB4E3JrJk7BcpuH01ovsofQHv6aylTKlavNl9xc0lrI%2Fh%2Bq1Hh1RfyZdXukyugBN79%2FjgiXZe3QoWg4D9C4mmCrSBa0QvG4kf9mCugYioUTrPnoSVZ1MUaWaeYKuc2F%2BrXB7954Mg7KjD054zEBjqkAelEiTKT1U4flNDcevSAXbI8ZQKm6%2BWz66SblJQKxc8Bexe3pmtk%2BUQMZm9OnJd%2BJkrJruKlc%2FDzhqMp4stvtNlApkMpoAafK46WwU17R2adVGnWbg3HWcIZjJ1xa%2Fxz6ssrjjqsFp179hUGuZpDZyqWHW2yObjnJaqUEkB0bStN%2F4n1EX4jqmlhoHgYl7KBE2xZbzmBa%2FJh5f%2FC8LAObGun4XM3&X-Amz-Signature=909b7a38b3385a307549ebc9a32af8663f59ff05115d6963b919371aa019f7e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLPM62L%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCS4%2B%2FRRj8L0KFhQtwntjegKX1PEMtmp2xPzBBo4HspkwIhALejkosZMJuela97%2BbsV6THSlmo5KgRuHhJjQXZ3ZdEHKv8DCEEQABoMNjM3NDIzMTgzODA1Igz8Q8KK%2FUcs5OsVtgEq3AMtjsuatYJ9mqLBl58xrMGU9N17eC8maKTkQtPDBrh4eFtCDmSM4jmNxFFUPm2hZUuHulVccXIOf%2F9VZ0qN5iJRl4dYl7FybVE5H3c4NAqS%2FtFlm%2BwzS7AGQbwcqrRZ1gvRblDY0HkFzhvq3lRwk3jZHAgWUvCW8dBywDo%2FHph2ZgebBmoZUQ0pkEyjkaZlsmy94%2Blh5Kd%2FmNpSOo%2FfO2rP34o%2BVQZNlGzTjTj8gPInhFuIMzrLVxwJVk01CNAbf%2BxgEaniI0uJsGtq8RH37TdVbTTaIzOVC%2FYDkRCsDMyR6tPyYmt0QUyljalaQb7HxKOgO%2FZEfxrbHeNypYKxELC4IWw5d6DXn71aP0eS2oCA2gcyj2KCTK8GH2G0frbm1WFk27sFKI%2FGjx3SEhSbqhxokTAnugFO3C6XRHRCf4u%2FRdr1koksSsYTHSg0Yu4Js7HCKVr04B9C%2FjBTgvoRlvfKjEoKXrVHAN%2F4lG8hEr7C8%2BvkXhnB4E3JrJk7BcpuH01ovsofQHv6aylTKlavNl9xc0lrI%2Fh%2Bq1Hh1RfyZdXukyugBN79%2FjgiXZe3QoWg4D9C4mmCrSBa0QvG4kf9mCugYioUTrPnoSVZ1MUaWaeYKuc2F%2BrXB7954Mg7KjD054zEBjqkAelEiTKT1U4flNDcevSAXbI8ZQKm6%2BWz66SblJQKxc8Bexe3pmtk%2BUQMZm9OnJd%2BJkrJruKlc%2FDzhqMp4stvtNlApkMpoAafK46WwU17R2adVGnWbg3HWcIZjJ1xa%2Fxz6ssrjjqsFp179hUGuZpDZyqWHW2yObjnJaqUEkB0bStN%2F4n1EX4jqmlhoHgYl7KBE2xZbzmBa%2FJh5f%2FC8LAObGun4XM3&X-Amz-Signature=08d0c9696077f5c63f7a7ae9a0a7a83e6c8db9f46863596f7e92bb2b1b6f03b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLPM62L%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCS4%2B%2FRRj8L0KFhQtwntjegKX1PEMtmp2xPzBBo4HspkwIhALejkosZMJuela97%2BbsV6THSlmo5KgRuHhJjQXZ3ZdEHKv8DCEEQABoMNjM3NDIzMTgzODA1Igz8Q8KK%2FUcs5OsVtgEq3AMtjsuatYJ9mqLBl58xrMGU9N17eC8maKTkQtPDBrh4eFtCDmSM4jmNxFFUPm2hZUuHulVccXIOf%2F9VZ0qN5iJRl4dYl7FybVE5H3c4NAqS%2FtFlm%2BwzS7AGQbwcqrRZ1gvRblDY0HkFzhvq3lRwk3jZHAgWUvCW8dBywDo%2FHph2ZgebBmoZUQ0pkEyjkaZlsmy94%2Blh5Kd%2FmNpSOo%2FfO2rP34o%2BVQZNlGzTjTj8gPInhFuIMzrLVxwJVk01CNAbf%2BxgEaniI0uJsGtq8RH37TdVbTTaIzOVC%2FYDkRCsDMyR6tPyYmt0QUyljalaQb7HxKOgO%2FZEfxrbHeNypYKxELC4IWw5d6DXn71aP0eS2oCA2gcyj2KCTK8GH2G0frbm1WFk27sFKI%2FGjx3SEhSbqhxokTAnugFO3C6XRHRCf4u%2FRdr1koksSsYTHSg0Yu4Js7HCKVr04B9C%2FjBTgvoRlvfKjEoKXrVHAN%2F4lG8hEr7C8%2BvkXhnB4E3JrJk7BcpuH01ovsofQHv6aylTKlavNl9xc0lrI%2Fh%2Bq1Hh1RfyZdXukyugBN79%2FjgiXZe3QoWg4D9C4mmCrSBa0QvG4kf9mCugYioUTrPnoSVZ1MUaWaeYKuc2F%2BrXB7954Mg7KjD054zEBjqkAelEiTKT1U4flNDcevSAXbI8ZQKm6%2BWz66SblJQKxc8Bexe3pmtk%2BUQMZm9OnJd%2BJkrJruKlc%2FDzhqMp4stvtNlApkMpoAafK46WwU17R2adVGnWbg3HWcIZjJ1xa%2Fxz6ssrjjqsFp179hUGuZpDZyqWHW2yObjnJaqUEkB0bStN%2F4n1EX4jqmlhoHgYl7KBE2xZbzmBa%2FJh5f%2FC8LAObGun4XM3&X-Amz-Signature=fa01fc00ca1bac3f73b52ead66133d5cafa5597462cc8876c717141643f75f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLPM62L%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCS4%2B%2FRRj8L0KFhQtwntjegKX1PEMtmp2xPzBBo4HspkwIhALejkosZMJuela97%2BbsV6THSlmo5KgRuHhJjQXZ3ZdEHKv8DCEEQABoMNjM3NDIzMTgzODA1Igz8Q8KK%2FUcs5OsVtgEq3AMtjsuatYJ9mqLBl58xrMGU9N17eC8maKTkQtPDBrh4eFtCDmSM4jmNxFFUPm2hZUuHulVccXIOf%2F9VZ0qN5iJRl4dYl7FybVE5H3c4NAqS%2FtFlm%2BwzS7AGQbwcqrRZ1gvRblDY0HkFzhvq3lRwk3jZHAgWUvCW8dBywDo%2FHph2ZgebBmoZUQ0pkEyjkaZlsmy94%2Blh5Kd%2FmNpSOo%2FfO2rP34o%2BVQZNlGzTjTj8gPInhFuIMzrLVxwJVk01CNAbf%2BxgEaniI0uJsGtq8RH37TdVbTTaIzOVC%2FYDkRCsDMyR6tPyYmt0QUyljalaQb7HxKOgO%2FZEfxrbHeNypYKxELC4IWw5d6DXn71aP0eS2oCA2gcyj2KCTK8GH2G0frbm1WFk27sFKI%2FGjx3SEhSbqhxokTAnugFO3C6XRHRCf4u%2FRdr1koksSsYTHSg0Yu4Js7HCKVr04B9C%2FjBTgvoRlvfKjEoKXrVHAN%2F4lG8hEr7C8%2BvkXhnB4E3JrJk7BcpuH01ovsofQHv6aylTKlavNl9xc0lrI%2Fh%2Bq1Hh1RfyZdXukyugBN79%2FjgiXZe3QoWg4D9C4mmCrSBa0QvG4kf9mCugYioUTrPnoSVZ1MUaWaeYKuc2F%2BrXB7954Mg7KjD054zEBjqkAelEiTKT1U4flNDcevSAXbI8ZQKm6%2BWz66SblJQKxc8Bexe3pmtk%2BUQMZm9OnJd%2BJkrJruKlc%2FDzhqMp4stvtNlApkMpoAafK46WwU17R2adVGnWbg3HWcIZjJ1xa%2Fxz6ssrjjqsFp179hUGuZpDZyqWHW2yObjnJaqUEkB0bStN%2F4n1EX4jqmlhoHgYl7KBE2xZbzmBa%2FJh5f%2FC8LAObGun4XM3&X-Amz-Signature=e7dcb5dfaef83e5cb7ff328600bd6450c5d4c419cd25563df072177333158697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTLPM62L%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCS4%2B%2FRRj8L0KFhQtwntjegKX1PEMtmp2xPzBBo4HspkwIhALejkosZMJuela97%2BbsV6THSlmo5KgRuHhJjQXZ3ZdEHKv8DCEEQABoMNjM3NDIzMTgzODA1Igz8Q8KK%2FUcs5OsVtgEq3AMtjsuatYJ9mqLBl58xrMGU9N17eC8maKTkQtPDBrh4eFtCDmSM4jmNxFFUPm2hZUuHulVccXIOf%2F9VZ0qN5iJRl4dYl7FybVE5H3c4NAqS%2FtFlm%2BwzS7AGQbwcqrRZ1gvRblDY0HkFzhvq3lRwk3jZHAgWUvCW8dBywDo%2FHph2ZgebBmoZUQ0pkEyjkaZlsmy94%2Blh5Kd%2FmNpSOo%2FfO2rP34o%2BVQZNlGzTjTj8gPInhFuIMzrLVxwJVk01CNAbf%2BxgEaniI0uJsGtq8RH37TdVbTTaIzOVC%2FYDkRCsDMyR6tPyYmt0QUyljalaQb7HxKOgO%2FZEfxrbHeNypYKxELC4IWw5d6DXn71aP0eS2oCA2gcyj2KCTK8GH2G0frbm1WFk27sFKI%2FGjx3SEhSbqhxokTAnugFO3C6XRHRCf4u%2FRdr1koksSsYTHSg0Yu4Js7HCKVr04B9C%2FjBTgvoRlvfKjEoKXrVHAN%2F4lG8hEr7C8%2BvkXhnB4E3JrJk7BcpuH01ovsofQHv6aylTKlavNl9xc0lrI%2Fh%2Bq1Hh1RfyZdXukyugBN79%2FjgiXZe3QoWg4D9C4mmCrSBa0QvG4kf9mCugYioUTrPnoSVZ1MUaWaeYKuc2F%2BrXB7954Mg7KjD054zEBjqkAelEiTKT1U4flNDcevSAXbI8ZQKm6%2BWz66SblJQKxc8Bexe3pmtk%2BUQMZm9OnJd%2BJkrJruKlc%2FDzhqMp4stvtNlApkMpoAafK46WwU17R2adVGnWbg3HWcIZjJ1xa%2Fxz6ssrjjqsFp179hUGuZpDZyqWHW2yObjnJaqUEkB0bStN%2F4n1EX4jqmlhoHgYl7KBE2xZbzmBa%2FJh5f%2FC8LAObGun4XM3&X-Amz-Signature=378d6ee2f5eaf4708fa2dc262ac2138f668c100be8732055aa843803e2a455b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
