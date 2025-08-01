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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFGZJP6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa%2ByeFS5%2BXxAD3DWOE3O90nMYJ%2BHZUKEpRTFed7N1y2AIgafTI4kQeGlU85KXrnWKXq20KCnoXN%2FXo7DZwMV8sqtYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHotOVHG1UCRZ1wpyrcA07PFJNVhPCm5bAZGTPf9i2rSEbqfjGjIqWrOtN0d8P3WS1Gued23em0EBoVyeNMg26gP1xEcftgaTajjz7WPNXNaSh54%2BE4sM%2B16xnCgmwMD2gGe2mjNCJyTBS6UXHO2MZ6mf4z22AwF%2BzmzUqQNoHaBJyFDgXx0uKml0yJJQuTNTcAuAYeZ1QkqAZTj9maFsVWVFulCRiR0o69LsCPScHvmjI7UTpcugjeFJgGVvgPfR4Ke2zQwXGNCc6JKhEe5HRzWyDZp2Jy9NVFWa%2BgRjc%2ByBFPzG9OmvWOabPaWMu4CLZ1Acm1zs2K%2F5ksp5f5Jnn3CXLEabN0bgdrmaHNTB8iun5cGIGoPbF%2BkTju7K7CVU%2BPQeiLAB0r1SHGOFeRapxHJQqbnEpu6Ktc8T0Cv6jsRgx8SF1rpJ6asYx2iW8uO%2FoAQCOM7dFO2BqXerZ6e9Hzi747R4YGgBj4aKa2sTFAQ1CXfafnallychkb50HyIfXpWvACdY9%2Bic2TyGuZpg5j4BMC3Vjfyu4ETrD%2FUmCWwK5ETQOg1zxMoOcwzDaJxF6OI7puBhYEoNgdU4k6xjq9E8g3Ab9F00c7QHOWTgVIYFHwVocZ%2BJcdFphgyZ2KLKAS6f3AYdpzJL1tMKi2ssQGOqUBiLymWr9SkvIYKvFxrYOmbrcf21aUUaIVeHXIid3NenRVMgogt%2FQeLARzycO9xS56VEpVxHKfBAQbaE%2BWKfARdPqMHiauJ10LNOkBfXX6cX8WuFlwigHOkMg5kjhP50hMxv5E8osxLxcWTp1XsMQKg6osCWf9jGcbA4kFt3i3bm6ANUbYaSqxITaHTlN24MuZVHqUGjvhlyAS%2Bg90gH8iKu1R5Lvt&X-Amz-Signature=87e43419263558bdd5ace4ca0aaa996c58369e06f12112e32c045c6b9479a42f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFGZJP6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa%2ByeFS5%2BXxAD3DWOE3O90nMYJ%2BHZUKEpRTFed7N1y2AIgafTI4kQeGlU85KXrnWKXq20KCnoXN%2FXo7DZwMV8sqtYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHotOVHG1UCRZ1wpyrcA07PFJNVhPCm5bAZGTPf9i2rSEbqfjGjIqWrOtN0d8P3WS1Gued23em0EBoVyeNMg26gP1xEcftgaTajjz7WPNXNaSh54%2BE4sM%2B16xnCgmwMD2gGe2mjNCJyTBS6UXHO2MZ6mf4z22AwF%2BzmzUqQNoHaBJyFDgXx0uKml0yJJQuTNTcAuAYeZ1QkqAZTj9maFsVWVFulCRiR0o69LsCPScHvmjI7UTpcugjeFJgGVvgPfR4Ke2zQwXGNCc6JKhEe5HRzWyDZp2Jy9NVFWa%2BgRjc%2ByBFPzG9OmvWOabPaWMu4CLZ1Acm1zs2K%2F5ksp5f5Jnn3CXLEabN0bgdrmaHNTB8iun5cGIGoPbF%2BkTju7K7CVU%2BPQeiLAB0r1SHGOFeRapxHJQqbnEpu6Ktc8T0Cv6jsRgx8SF1rpJ6asYx2iW8uO%2FoAQCOM7dFO2BqXerZ6e9Hzi747R4YGgBj4aKa2sTFAQ1CXfafnallychkb50HyIfXpWvACdY9%2Bic2TyGuZpg5j4BMC3Vjfyu4ETrD%2FUmCWwK5ETQOg1zxMoOcwzDaJxF6OI7puBhYEoNgdU4k6xjq9E8g3Ab9F00c7QHOWTgVIYFHwVocZ%2BJcdFphgyZ2KLKAS6f3AYdpzJL1tMKi2ssQGOqUBiLymWr9SkvIYKvFxrYOmbrcf21aUUaIVeHXIid3NenRVMgogt%2FQeLARzycO9xS56VEpVxHKfBAQbaE%2BWKfARdPqMHiauJ10LNOkBfXX6cX8WuFlwigHOkMg5kjhP50hMxv5E8osxLxcWTp1XsMQKg6osCWf9jGcbA4kFt3i3bm6ANUbYaSqxITaHTlN24MuZVHqUGjvhlyAS%2Bg90gH8iKu1R5Lvt&X-Amz-Signature=826e3c90e8fc6c6a885b7d938663feaca97e8e238635db70d60c635da089a018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFGZJP6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa%2ByeFS5%2BXxAD3DWOE3O90nMYJ%2BHZUKEpRTFed7N1y2AIgafTI4kQeGlU85KXrnWKXq20KCnoXN%2FXo7DZwMV8sqtYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHotOVHG1UCRZ1wpyrcA07PFJNVhPCm5bAZGTPf9i2rSEbqfjGjIqWrOtN0d8P3WS1Gued23em0EBoVyeNMg26gP1xEcftgaTajjz7WPNXNaSh54%2BE4sM%2B16xnCgmwMD2gGe2mjNCJyTBS6UXHO2MZ6mf4z22AwF%2BzmzUqQNoHaBJyFDgXx0uKml0yJJQuTNTcAuAYeZ1QkqAZTj9maFsVWVFulCRiR0o69LsCPScHvmjI7UTpcugjeFJgGVvgPfR4Ke2zQwXGNCc6JKhEe5HRzWyDZp2Jy9NVFWa%2BgRjc%2ByBFPzG9OmvWOabPaWMu4CLZ1Acm1zs2K%2F5ksp5f5Jnn3CXLEabN0bgdrmaHNTB8iun5cGIGoPbF%2BkTju7K7CVU%2BPQeiLAB0r1SHGOFeRapxHJQqbnEpu6Ktc8T0Cv6jsRgx8SF1rpJ6asYx2iW8uO%2FoAQCOM7dFO2BqXerZ6e9Hzi747R4YGgBj4aKa2sTFAQ1CXfafnallychkb50HyIfXpWvACdY9%2Bic2TyGuZpg5j4BMC3Vjfyu4ETrD%2FUmCWwK5ETQOg1zxMoOcwzDaJxF6OI7puBhYEoNgdU4k6xjq9E8g3Ab9F00c7QHOWTgVIYFHwVocZ%2BJcdFphgyZ2KLKAS6f3AYdpzJL1tMKi2ssQGOqUBiLymWr9SkvIYKvFxrYOmbrcf21aUUaIVeHXIid3NenRVMgogt%2FQeLARzycO9xS56VEpVxHKfBAQbaE%2BWKfARdPqMHiauJ10LNOkBfXX6cX8WuFlwigHOkMg5kjhP50hMxv5E8osxLxcWTp1XsMQKg6osCWf9jGcbA4kFt3i3bm6ANUbYaSqxITaHTlN24MuZVHqUGjvhlyAS%2Bg90gH8iKu1R5Lvt&X-Amz-Signature=79e1c38beeb4a628f2f24f67c36d20b5f0c46423b9947b15f4e481b5da02d8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFGZJP6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa%2ByeFS5%2BXxAD3DWOE3O90nMYJ%2BHZUKEpRTFed7N1y2AIgafTI4kQeGlU85KXrnWKXq20KCnoXN%2FXo7DZwMV8sqtYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHotOVHG1UCRZ1wpyrcA07PFJNVhPCm5bAZGTPf9i2rSEbqfjGjIqWrOtN0d8P3WS1Gued23em0EBoVyeNMg26gP1xEcftgaTajjz7WPNXNaSh54%2BE4sM%2B16xnCgmwMD2gGe2mjNCJyTBS6UXHO2MZ6mf4z22AwF%2BzmzUqQNoHaBJyFDgXx0uKml0yJJQuTNTcAuAYeZ1QkqAZTj9maFsVWVFulCRiR0o69LsCPScHvmjI7UTpcugjeFJgGVvgPfR4Ke2zQwXGNCc6JKhEe5HRzWyDZp2Jy9NVFWa%2BgRjc%2ByBFPzG9OmvWOabPaWMu4CLZ1Acm1zs2K%2F5ksp5f5Jnn3CXLEabN0bgdrmaHNTB8iun5cGIGoPbF%2BkTju7K7CVU%2BPQeiLAB0r1SHGOFeRapxHJQqbnEpu6Ktc8T0Cv6jsRgx8SF1rpJ6asYx2iW8uO%2FoAQCOM7dFO2BqXerZ6e9Hzi747R4YGgBj4aKa2sTFAQ1CXfafnallychkb50HyIfXpWvACdY9%2Bic2TyGuZpg5j4BMC3Vjfyu4ETrD%2FUmCWwK5ETQOg1zxMoOcwzDaJxF6OI7puBhYEoNgdU4k6xjq9E8g3Ab9F00c7QHOWTgVIYFHwVocZ%2BJcdFphgyZ2KLKAS6f3AYdpzJL1tMKi2ssQGOqUBiLymWr9SkvIYKvFxrYOmbrcf21aUUaIVeHXIid3NenRVMgogt%2FQeLARzycO9xS56VEpVxHKfBAQbaE%2BWKfARdPqMHiauJ10LNOkBfXX6cX8WuFlwigHOkMg5kjhP50hMxv5E8osxLxcWTp1XsMQKg6osCWf9jGcbA4kFt3i3bm6ANUbYaSqxITaHTlN24MuZVHqUGjvhlyAS%2Bg90gH8iKu1R5Lvt&X-Amz-Signature=48d8844b2b38e07e943d932de6ac4b466519c603cb6d55853cd5e65f6cf56e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFGZJP6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa%2ByeFS5%2BXxAD3DWOE3O90nMYJ%2BHZUKEpRTFed7N1y2AIgafTI4kQeGlU85KXrnWKXq20KCnoXN%2FXo7DZwMV8sqtYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHotOVHG1UCRZ1wpyrcA07PFJNVhPCm5bAZGTPf9i2rSEbqfjGjIqWrOtN0d8P3WS1Gued23em0EBoVyeNMg26gP1xEcftgaTajjz7WPNXNaSh54%2BE4sM%2B16xnCgmwMD2gGe2mjNCJyTBS6UXHO2MZ6mf4z22AwF%2BzmzUqQNoHaBJyFDgXx0uKml0yJJQuTNTcAuAYeZ1QkqAZTj9maFsVWVFulCRiR0o69LsCPScHvmjI7UTpcugjeFJgGVvgPfR4Ke2zQwXGNCc6JKhEe5HRzWyDZp2Jy9NVFWa%2BgRjc%2ByBFPzG9OmvWOabPaWMu4CLZ1Acm1zs2K%2F5ksp5f5Jnn3CXLEabN0bgdrmaHNTB8iun5cGIGoPbF%2BkTju7K7CVU%2BPQeiLAB0r1SHGOFeRapxHJQqbnEpu6Ktc8T0Cv6jsRgx8SF1rpJ6asYx2iW8uO%2FoAQCOM7dFO2BqXerZ6e9Hzi747R4YGgBj4aKa2sTFAQ1CXfafnallychkb50HyIfXpWvACdY9%2Bic2TyGuZpg5j4BMC3Vjfyu4ETrD%2FUmCWwK5ETQOg1zxMoOcwzDaJxF6OI7puBhYEoNgdU4k6xjq9E8g3Ab9F00c7QHOWTgVIYFHwVocZ%2BJcdFphgyZ2KLKAS6f3AYdpzJL1tMKi2ssQGOqUBiLymWr9SkvIYKvFxrYOmbrcf21aUUaIVeHXIid3NenRVMgogt%2FQeLARzycO9xS56VEpVxHKfBAQbaE%2BWKfARdPqMHiauJ10LNOkBfXX6cX8WuFlwigHOkMg5kjhP50hMxv5E8osxLxcWTp1XsMQKg6osCWf9jGcbA4kFt3i3bm6ANUbYaSqxITaHTlN24MuZVHqUGjvhlyAS%2Bg90gH8iKu1R5Lvt&X-Amz-Signature=1c5edda2ad8bb44a41ee65dd0a42ee7d4df97e278f13825e3e8615e16e711cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFGZJP6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa%2ByeFS5%2BXxAD3DWOE3O90nMYJ%2BHZUKEpRTFed7N1y2AIgafTI4kQeGlU85KXrnWKXq20KCnoXN%2FXo7DZwMV8sqtYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHotOVHG1UCRZ1wpyrcA07PFJNVhPCm5bAZGTPf9i2rSEbqfjGjIqWrOtN0d8P3WS1Gued23em0EBoVyeNMg26gP1xEcftgaTajjz7WPNXNaSh54%2BE4sM%2B16xnCgmwMD2gGe2mjNCJyTBS6UXHO2MZ6mf4z22AwF%2BzmzUqQNoHaBJyFDgXx0uKml0yJJQuTNTcAuAYeZ1QkqAZTj9maFsVWVFulCRiR0o69LsCPScHvmjI7UTpcugjeFJgGVvgPfR4Ke2zQwXGNCc6JKhEe5HRzWyDZp2Jy9NVFWa%2BgRjc%2ByBFPzG9OmvWOabPaWMu4CLZ1Acm1zs2K%2F5ksp5f5Jnn3CXLEabN0bgdrmaHNTB8iun5cGIGoPbF%2BkTju7K7CVU%2BPQeiLAB0r1SHGOFeRapxHJQqbnEpu6Ktc8T0Cv6jsRgx8SF1rpJ6asYx2iW8uO%2FoAQCOM7dFO2BqXerZ6e9Hzi747R4YGgBj4aKa2sTFAQ1CXfafnallychkb50HyIfXpWvACdY9%2Bic2TyGuZpg5j4BMC3Vjfyu4ETrD%2FUmCWwK5ETQOg1zxMoOcwzDaJxF6OI7puBhYEoNgdU4k6xjq9E8g3Ab9F00c7QHOWTgVIYFHwVocZ%2BJcdFphgyZ2KLKAS6f3AYdpzJL1tMKi2ssQGOqUBiLymWr9SkvIYKvFxrYOmbrcf21aUUaIVeHXIid3NenRVMgogt%2FQeLARzycO9xS56VEpVxHKfBAQbaE%2BWKfARdPqMHiauJ10LNOkBfXX6cX8WuFlwigHOkMg5kjhP50hMxv5E8osxLxcWTp1XsMQKg6osCWf9jGcbA4kFt3i3bm6ANUbYaSqxITaHTlN24MuZVHqUGjvhlyAS%2Bg90gH8iKu1R5Lvt&X-Amz-Signature=92d385518c2cfc560820386d5afa67d9f7924583abb26b19289743430f49f75b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFGZJP6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa%2ByeFS5%2BXxAD3DWOE3O90nMYJ%2BHZUKEpRTFed7N1y2AIgafTI4kQeGlU85KXrnWKXq20KCnoXN%2FXo7DZwMV8sqtYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHotOVHG1UCRZ1wpyrcA07PFJNVhPCm5bAZGTPf9i2rSEbqfjGjIqWrOtN0d8P3WS1Gued23em0EBoVyeNMg26gP1xEcftgaTajjz7WPNXNaSh54%2BE4sM%2B16xnCgmwMD2gGe2mjNCJyTBS6UXHO2MZ6mf4z22AwF%2BzmzUqQNoHaBJyFDgXx0uKml0yJJQuTNTcAuAYeZ1QkqAZTj9maFsVWVFulCRiR0o69LsCPScHvmjI7UTpcugjeFJgGVvgPfR4Ke2zQwXGNCc6JKhEe5HRzWyDZp2Jy9NVFWa%2BgRjc%2ByBFPzG9OmvWOabPaWMu4CLZ1Acm1zs2K%2F5ksp5f5Jnn3CXLEabN0bgdrmaHNTB8iun5cGIGoPbF%2BkTju7K7CVU%2BPQeiLAB0r1SHGOFeRapxHJQqbnEpu6Ktc8T0Cv6jsRgx8SF1rpJ6asYx2iW8uO%2FoAQCOM7dFO2BqXerZ6e9Hzi747R4YGgBj4aKa2sTFAQ1CXfafnallychkb50HyIfXpWvACdY9%2Bic2TyGuZpg5j4BMC3Vjfyu4ETrD%2FUmCWwK5ETQOg1zxMoOcwzDaJxF6OI7puBhYEoNgdU4k6xjq9E8g3Ab9F00c7QHOWTgVIYFHwVocZ%2BJcdFphgyZ2KLKAS6f3AYdpzJL1tMKi2ssQGOqUBiLymWr9SkvIYKvFxrYOmbrcf21aUUaIVeHXIid3NenRVMgogt%2FQeLARzycO9xS56VEpVxHKfBAQbaE%2BWKfARdPqMHiauJ10LNOkBfXX6cX8WuFlwigHOkMg5kjhP50hMxv5E8osxLxcWTp1XsMQKg6osCWf9jGcbA4kFt3i3bm6ANUbYaSqxITaHTlN24MuZVHqUGjvhlyAS%2Bg90gH8iKu1R5Lvt&X-Amz-Signature=47d6110990efed499b6878c279a6dfa60b7dd0eea44bcbdb211ace5f2085e2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFGZJP6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa%2ByeFS5%2BXxAD3DWOE3O90nMYJ%2BHZUKEpRTFed7N1y2AIgafTI4kQeGlU85KXrnWKXq20KCnoXN%2FXo7DZwMV8sqtYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHotOVHG1UCRZ1wpyrcA07PFJNVhPCm5bAZGTPf9i2rSEbqfjGjIqWrOtN0d8P3WS1Gued23em0EBoVyeNMg26gP1xEcftgaTajjz7WPNXNaSh54%2BE4sM%2B16xnCgmwMD2gGe2mjNCJyTBS6UXHO2MZ6mf4z22AwF%2BzmzUqQNoHaBJyFDgXx0uKml0yJJQuTNTcAuAYeZ1QkqAZTj9maFsVWVFulCRiR0o69LsCPScHvmjI7UTpcugjeFJgGVvgPfR4Ke2zQwXGNCc6JKhEe5HRzWyDZp2Jy9NVFWa%2BgRjc%2ByBFPzG9OmvWOabPaWMu4CLZ1Acm1zs2K%2F5ksp5f5Jnn3CXLEabN0bgdrmaHNTB8iun5cGIGoPbF%2BkTju7K7CVU%2BPQeiLAB0r1SHGOFeRapxHJQqbnEpu6Ktc8T0Cv6jsRgx8SF1rpJ6asYx2iW8uO%2FoAQCOM7dFO2BqXerZ6e9Hzi747R4YGgBj4aKa2sTFAQ1CXfafnallychkb50HyIfXpWvACdY9%2Bic2TyGuZpg5j4BMC3Vjfyu4ETrD%2FUmCWwK5ETQOg1zxMoOcwzDaJxF6OI7puBhYEoNgdU4k6xjq9E8g3Ab9F00c7QHOWTgVIYFHwVocZ%2BJcdFphgyZ2KLKAS6f3AYdpzJL1tMKi2ssQGOqUBiLymWr9SkvIYKvFxrYOmbrcf21aUUaIVeHXIid3NenRVMgogt%2FQeLARzycO9xS56VEpVxHKfBAQbaE%2BWKfARdPqMHiauJ10LNOkBfXX6cX8WuFlwigHOkMg5kjhP50hMxv5E8osxLxcWTp1XsMQKg6osCWf9jGcbA4kFt3i3bm6ANUbYaSqxITaHTlN24MuZVHqUGjvhlyAS%2Bg90gH8iKu1R5Lvt&X-Amz-Signature=e9d1963cce713aad37e076e30bf6be508b99fced1e4a1ae315493b55f4f0d33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFGZJP6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa%2ByeFS5%2BXxAD3DWOE3O90nMYJ%2BHZUKEpRTFed7N1y2AIgafTI4kQeGlU85KXrnWKXq20KCnoXN%2FXo7DZwMV8sqtYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHotOVHG1UCRZ1wpyrcA07PFJNVhPCm5bAZGTPf9i2rSEbqfjGjIqWrOtN0d8P3WS1Gued23em0EBoVyeNMg26gP1xEcftgaTajjz7WPNXNaSh54%2BE4sM%2B16xnCgmwMD2gGe2mjNCJyTBS6UXHO2MZ6mf4z22AwF%2BzmzUqQNoHaBJyFDgXx0uKml0yJJQuTNTcAuAYeZ1QkqAZTj9maFsVWVFulCRiR0o69LsCPScHvmjI7UTpcugjeFJgGVvgPfR4Ke2zQwXGNCc6JKhEe5HRzWyDZp2Jy9NVFWa%2BgRjc%2ByBFPzG9OmvWOabPaWMu4CLZ1Acm1zs2K%2F5ksp5f5Jnn3CXLEabN0bgdrmaHNTB8iun5cGIGoPbF%2BkTju7K7CVU%2BPQeiLAB0r1SHGOFeRapxHJQqbnEpu6Ktc8T0Cv6jsRgx8SF1rpJ6asYx2iW8uO%2FoAQCOM7dFO2BqXerZ6e9Hzi747R4YGgBj4aKa2sTFAQ1CXfafnallychkb50HyIfXpWvACdY9%2Bic2TyGuZpg5j4BMC3Vjfyu4ETrD%2FUmCWwK5ETQOg1zxMoOcwzDaJxF6OI7puBhYEoNgdU4k6xjq9E8g3Ab9F00c7QHOWTgVIYFHwVocZ%2BJcdFphgyZ2KLKAS6f3AYdpzJL1tMKi2ssQGOqUBiLymWr9SkvIYKvFxrYOmbrcf21aUUaIVeHXIid3NenRVMgogt%2FQeLARzycO9xS56VEpVxHKfBAQbaE%2BWKfARdPqMHiauJ10LNOkBfXX6cX8WuFlwigHOkMg5kjhP50hMxv5E8osxLxcWTp1XsMQKg6osCWf9jGcbA4kFt3i3bm6ANUbYaSqxITaHTlN24MuZVHqUGjvhlyAS%2Bg90gH8iKu1R5Lvt&X-Amz-Signature=0fb11aa7892bf82be31a49790a39bf8e5acab4638bb053a8b6e705898f57f0d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFGZJP6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa%2ByeFS5%2BXxAD3DWOE3O90nMYJ%2BHZUKEpRTFed7N1y2AIgafTI4kQeGlU85KXrnWKXq20KCnoXN%2FXo7DZwMV8sqtYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHotOVHG1UCRZ1wpyrcA07PFJNVhPCm5bAZGTPf9i2rSEbqfjGjIqWrOtN0d8P3WS1Gued23em0EBoVyeNMg26gP1xEcftgaTajjz7WPNXNaSh54%2BE4sM%2B16xnCgmwMD2gGe2mjNCJyTBS6UXHO2MZ6mf4z22AwF%2BzmzUqQNoHaBJyFDgXx0uKml0yJJQuTNTcAuAYeZ1QkqAZTj9maFsVWVFulCRiR0o69LsCPScHvmjI7UTpcugjeFJgGVvgPfR4Ke2zQwXGNCc6JKhEe5HRzWyDZp2Jy9NVFWa%2BgRjc%2ByBFPzG9OmvWOabPaWMu4CLZ1Acm1zs2K%2F5ksp5f5Jnn3CXLEabN0bgdrmaHNTB8iun5cGIGoPbF%2BkTju7K7CVU%2BPQeiLAB0r1SHGOFeRapxHJQqbnEpu6Ktc8T0Cv6jsRgx8SF1rpJ6asYx2iW8uO%2FoAQCOM7dFO2BqXerZ6e9Hzi747R4YGgBj4aKa2sTFAQ1CXfafnallychkb50HyIfXpWvACdY9%2Bic2TyGuZpg5j4BMC3Vjfyu4ETrD%2FUmCWwK5ETQOg1zxMoOcwzDaJxF6OI7puBhYEoNgdU4k6xjq9E8g3Ab9F00c7QHOWTgVIYFHwVocZ%2BJcdFphgyZ2KLKAS6f3AYdpzJL1tMKi2ssQGOqUBiLymWr9SkvIYKvFxrYOmbrcf21aUUaIVeHXIid3NenRVMgogt%2FQeLARzycO9xS56VEpVxHKfBAQbaE%2BWKfARdPqMHiauJ10LNOkBfXX6cX8WuFlwigHOkMg5kjhP50hMxv5E8osxLxcWTp1XsMQKg6osCWf9jGcbA4kFt3i3bm6ANUbYaSqxITaHTlN24MuZVHqUGjvhlyAS%2Bg90gH8iKu1R5Lvt&X-Amz-Signature=8627dab6431e0859fcd0af81f8608c18d3a0f7d6588b45cfff0e3d58e2e20bbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFGZJP6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa%2ByeFS5%2BXxAD3DWOE3O90nMYJ%2BHZUKEpRTFed7N1y2AIgafTI4kQeGlU85KXrnWKXq20KCnoXN%2FXo7DZwMV8sqtYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHotOVHG1UCRZ1wpyrcA07PFJNVhPCm5bAZGTPf9i2rSEbqfjGjIqWrOtN0d8P3WS1Gued23em0EBoVyeNMg26gP1xEcftgaTajjz7WPNXNaSh54%2BE4sM%2B16xnCgmwMD2gGe2mjNCJyTBS6UXHO2MZ6mf4z22AwF%2BzmzUqQNoHaBJyFDgXx0uKml0yJJQuTNTcAuAYeZ1QkqAZTj9maFsVWVFulCRiR0o69LsCPScHvmjI7UTpcugjeFJgGVvgPfR4Ke2zQwXGNCc6JKhEe5HRzWyDZp2Jy9NVFWa%2BgRjc%2ByBFPzG9OmvWOabPaWMu4CLZ1Acm1zs2K%2F5ksp5f5Jnn3CXLEabN0bgdrmaHNTB8iun5cGIGoPbF%2BkTju7K7CVU%2BPQeiLAB0r1SHGOFeRapxHJQqbnEpu6Ktc8T0Cv6jsRgx8SF1rpJ6asYx2iW8uO%2FoAQCOM7dFO2BqXerZ6e9Hzi747R4YGgBj4aKa2sTFAQ1CXfafnallychkb50HyIfXpWvACdY9%2Bic2TyGuZpg5j4BMC3Vjfyu4ETrD%2FUmCWwK5ETQOg1zxMoOcwzDaJxF6OI7puBhYEoNgdU4k6xjq9E8g3Ab9F00c7QHOWTgVIYFHwVocZ%2BJcdFphgyZ2KLKAS6f3AYdpzJL1tMKi2ssQGOqUBiLymWr9SkvIYKvFxrYOmbrcf21aUUaIVeHXIid3NenRVMgogt%2FQeLARzycO9xS56VEpVxHKfBAQbaE%2BWKfARdPqMHiauJ10LNOkBfXX6cX8WuFlwigHOkMg5kjhP50hMxv5E8osxLxcWTp1XsMQKg6osCWf9jGcbA4kFt3i3bm6ANUbYaSqxITaHTlN24MuZVHqUGjvhlyAS%2Bg90gH8iKu1R5Lvt&X-Amz-Signature=7ebd461c67b45988209e02f9e44b1f818fd8599aea0ea2e73ed8c21ba36a6fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFGZJP6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa%2ByeFS5%2BXxAD3DWOE3O90nMYJ%2BHZUKEpRTFed7N1y2AIgafTI4kQeGlU85KXrnWKXq20KCnoXN%2FXo7DZwMV8sqtYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHotOVHG1UCRZ1wpyrcA07PFJNVhPCm5bAZGTPf9i2rSEbqfjGjIqWrOtN0d8P3WS1Gued23em0EBoVyeNMg26gP1xEcftgaTajjz7WPNXNaSh54%2BE4sM%2B16xnCgmwMD2gGe2mjNCJyTBS6UXHO2MZ6mf4z22AwF%2BzmzUqQNoHaBJyFDgXx0uKml0yJJQuTNTcAuAYeZ1QkqAZTj9maFsVWVFulCRiR0o69LsCPScHvmjI7UTpcugjeFJgGVvgPfR4Ke2zQwXGNCc6JKhEe5HRzWyDZp2Jy9NVFWa%2BgRjc%2ByBFPzG9OmvWOabPaWMu4CLZ1Acm1zs2K%2F5ksp5f5Jnn3CXLEabN0bgdrmaHNTB8iun5cGIGoPbF%2BkTju7K7CVU%2BPQeiLAB0r1SHGOFeRapxHJQqbnEpu6Ktc8T0Cv6jsRgx8SF1rpJ6asYx2iW8uO%2FoAQCOM7dFO2BqXerZ6e9Hzi747R4YGgBj4aKa2sTFAQ1CXfafnallychkb50HyIfXpWvACdY9%2Bic2TyGuZpg5j4BMC3Vjfyu4ETrD%2FUmCWwK5ETQOg1zxMoOcwzDaJxF6OI7puBhYEoNgdU4k6xjq9E8g3Ab9F00c7QHOWTgVIYFHwVocZ%2BJcdFphgyZ2KLKAS6f3AYdpzJL1tMKi2ssQGOqUBiLymWr9SkvIYKvFxrYOmbrcf21aUUaIVeHXIid3NenRVMgogt%2FQeLARzycO9xS56VEpVxHKfBAQbaE%2BWKfARdPqMHiauJ10LNOkBfXX6cX8WuFlwigHOkMg5kjhP50hMxv5E8osxLxcWTp1XsMQKg6osCWf9jGcbA4kFt3i3bm6ANUbYaSqxITaHTlN24MuZVHqUGjvhlyAS%2Bg90gH8iKu1R5Lvt&X-Amz-Signature=e3ed2e2fdbba2f3d7bf05090937a4b91abae310c50b7e1f465cab4f25b63ae86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZFGZJP6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCa%2ByeFS5%2BXxAD3DWOE3O90nMYJ%2BHZUKEpRTFed7N1y2AIgafTI4kQeGlU85KXrnWKXq20KCnoXN%2FXo7DZwMV8sqtYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHotOVHG1UCRZ1wpyrcA07PFJNVhPCm5bAZGTPf9i2rSEbqfjGjIqWrOtN0d8P3WS1Gued23em0EBoVyeNMg26gP1xEcftgaTajjz7WPNXNaSh54%2BE4sM%2B16xnCgmwMD2gGe2mjNCJyTBS6UXHO2MZ6mf4z22AwF%2BzmzUqQNoHaBJyFDgXx0uKml0yJJQuTNTcAuAYeZ1QkqAZTj9maFsVWVFulCRiR0o69LsCPScHvmjI7UTpcugjeFJgGVvgPfR4Ke2zQwXGNCc6JKhEe5HRzWyDZp2Jy9NVFWa%2BgRjc%2ByBFPzG9OmvWOabPaWMu4CLZ1Acm1zs2K%2F5ksp5f5Jnn3CXLEabN0bgdrmaHNTB8iun5cGIGoPbF%2BkTju7K7CVU%2BPQeiLAB0r1SHGOFeRapxHJQqbnEpu6Ktc8T0Cv6jsRgx8SF1rpJ6asYx2iW8uO%2FoAQCOM7dFO2BqXerZ6e9Hzi747R4YGgBj4aKa2sTFAQ1CXfafnallychkb50HyIfXpWvACdY9%2Bic2TyGuZpg5j4BMC3Vjfyu4ETrD%2FUmCWwK5ETQOg1zxMoOcwzDaJxF6OI7puBhYEoNgdU4k6xjq9E8g3Ab9F00c7QHOWTgVIYFHwVocZ%2BJcdFphgyZ2KLKAS6f3AYdpzJL1tMKi2ssQGOqUBiLymWr9SkvIYKvFxrYOmbrcf21aUUaIVeHXIid3NenRVMgogt%2FQeLARzycO9xS56VEpVxHKfBAQbaE%2BWKfARdPqMHiauJ10LNOkBfXX6cX8WuFlwigHOkMg5kjhP50hMxv5E8osxLxcWTp1XsMQKg6osCWf9jGcbA4kFt3i3bm6ANUbYaSqxITaHTlN24MuZVHqUGjvhlyAS%2Bg90gH8iKu1R5Lvt&X-Amz-Signature=6356c2d3244b7a286b99bc4acb82986c36089845bf73f4a634311bbec5fa59f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
