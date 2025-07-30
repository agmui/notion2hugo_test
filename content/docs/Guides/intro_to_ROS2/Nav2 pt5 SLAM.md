---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNA4KTLX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ71kd%2BEfp84NpuOkfxHAiYrLCBI%2Fu3ztrBB6elu5uAgIhAPG%2BOZlESnKGJlZgxQwdXMoaYc%2Bh6DD56xxj4RPXc3v3KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN4xP7YF5fx0uS7UEq3AMe1v4ieq1yDqfhtvygsHW0TGC9vnDqQdiXvEL%2B1A%2FMabapUbDqWpQjb3M1SOBfjBDUjeA7oHf%2B82vfgoOOTmQjVtRLRgJWcYR0KQAchyEKI2XVz1KOgQvjha6vzHb1jto3%2BJn%2BgpGSURWhK%2FO2QGXkbaTTuWgoh72I1dRWR%2BowR30GYHI4PQQgEHidmAoTJ9F3ocIrbMuh9YircNVWqjrPoJrrMJad3v3jOXjoEyzpxEVRQzs5BQ8i2vZJ4OB7jnZM7uwkTPmkhSP5xHukctmVK6h7Ed53eKEQdkymBeD7MROlJkBaKJMmywBCsYLeAcp5GiDMldPZBZIP%2BOsP6KvnQDsHznvgUe4jhDnxjatn9w%2FRzMVrksdijgnlB3T5Nj5yznX3uX8nx1hR43Yyb%2BLtRB40S%2FSHJTmtOYG7nSfBUdXbZYPfdmPROevg%2BYPHE1FAgazEE6bc7dgg3XO2ko71p5F5%2BT2bdA9uw2zy%2Bto6foTx8V1lZqBoP3JUH6%2FbaPhAGr9HO4u68b74BQzy4XRQ3lyU0KHVjfgnbhjF7gbUTNSyprMqrHYMgh3bxrmTFq5W0ZzPo4XLERlqlO2krAQbJwrNKm5dFArAyy54FCndnkPExffIYodYEkNLfTCCiKnEBjqkASYnWmR9CpNhES0hsvu0z%2FOJHwpNp1U7kEukWBNU9854OTG%2BOThnWlF6oJD%2BAedgujetDegTvMbKslHwAtUK4XVOadJ4R%2BN16VgyR%2FMBr9Rg5hkTTTbOdQfqHYgtchz63xgdlDphqWLNQdj8CGNEgxfq1YQUa3pkM2qC41XLiweOUNOKIN7zNBEHaew1xi0vdagIqFmXpLqVjJAzvIcl%2FhaozBgv&X-Amz-Signature=e965f92bccaa1d515fa285a14bc9d1015dc06fdaf9113ba5767c6a943e81547f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNA4KTLX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ71kd%2BEfp84NpuOkfxHAiYrLCBI%2Fu3ztrBB6elu5uAgIhAPG%2BOZlESnKGJlZgxQwdXMoaYc%2Bh6DD56xxj4RPXc3v3KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN4xP7YF5fx0uS7UEq3AMe1v4ieq1yDqfhtvygsHW0TGC9vnDqQdiXvEL%2B1A%2FMabapUbDqWpQjb3M1SOBfjBDUjeA7oHf%2B82vfgoOOTmQjVtRLRgJWcYR0KQAchyEKI2XVz1KOgQvjha6vzHb1jto3%2BJn%2BgpGSURWhK%2FO2QGXkbaTTuWgoh72I1dRWR%2BowR30GYHI4PQQgEHidmAoTJ9F3ocIrbMuh9YircNVWqjrPoJrrMJad3v3jOXjoEyzpxEVRQzs5BQ8i2vZJ4OB7jnZM7uwkTPmkhSP5xHukctmVK6h7Ed53eKEQdkymBeD7MROlJkBaKJMmywBCsYLeAcp5GiDMldPZBZIP%2BOsP6KvnQDsHznvgUe4jhDnxjatn9w%2FRzMVrksdijgnlB3T5Nj5yznX3uX8nx1hR43Yyb%2BLtRB40S%2FSHJTmtOYG7nSfBUdXbZYPfdmPROevg%2BYPHE1FAgazEE6bc7dgg3XO2ko71p5F5%2BT2bdA9uw2zy%2Bto6foTx8V1lZqBoP3JUH6%2FbaPhAGr9HO4u68b74BQzy4XRQ3lyU0KHVjfgnbhjF7gbUTNSyprMqrHYMgh3bxrmTFq5W0ZzPo4XLERlqlO2krAQbJwrNKm5dFArAyy54FCndnkPExffIYodYEkNLfTCCiKnEBjqkASYnWmR9CpNhES0hsvu0z%2FOJHwpNp1U7kEukWBNU9854OTG%2BOThnWlF6oJD%2BAedgujetDegTvMbKslHwAtUK4XVOadJ4R%2BN16VgyR%2FMBr9Rg5hkTTTbOdQfqHYgtchz63xgdlDphqWLNQdj8CGNEgxfq1YQUa3pkM2qC41XLiweOUNOKIN7zNBEHaew1xi0vdagIqFmXpLqVjJAzvIcl%2FhaozBgv&X-Amz-Signature=f1c84870db8cbf0d19601415cdb7aa3ee8a116a2f2524969d292a2f0f732f548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNA4KTLX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ71kd%2BEfp84NpuOkfxHAiYrLCBI%2Fu3ztrBB6elu5uAgIhAPG%2BOZlESnKGJlZgxQwdXMoaYc%2Bh6DD56xxj4RPXc3v3KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN4xP7YF5fx0uS7UEq3AMe1v4ieq1yDqfhtvygsHW0TGC9vnDqQdiXvEL%2B1A%2FMabapUbDqWpQjb3M1SOBfjBDUjeA7oHf%2B82vfgoOOTmQjVtRLRgJWcYR0KQAchyEKI2XVz1KOgQvjha6vzHb1jto3%2BJn%2BgpGSURWhK%2FO2QGXkbaTTuWgoh72I1dRWR%2BowR30GYHI4PQQgEHidmAoTJ9F3ocIrbMuh9YircNVWqjrPoJrrMJad3v3jOXjoEyzpxEVRQzs5BQ8i2vZJ4OB7jnZM7uwkTPmkhSP5xHukctmVK6h7Ed53eKEQdkymBeD7MROlJkBaKJMmywBCsYLeAcp5GiDMldPZBZIP%2BOsP6KvnQDsHznvgUe4jhDnxjatn9w%2FRzMVrksdijgnlB3T5Nj5yznX3uX8nx1hR43Yyb%2BLtRB40S%2FSHJTmtOYG7nSfBUdXbZYPfdmPROevg%2BYPHE1FAgazEE6bc7dgg3XO2ko71p5F5%2BT2bdA9uw2zy%2Bto6foTx8V1lZqBoP3JUH6%2FbaPhAGr9HO4u68b74BQzy4XRQ3lyU0KHVjfgnbhjF7gbUTNSyprMqrHYMgh3bxrmTFq5W0ZzPo4XLERlqlO2krAQbJwrNKm5dFArAyy54FCndnkPExffIYodYEkNLfTCCiKnEBjqkASYnWmR9CpNhES0hsvu0z%2FOJHwpNp1U7kEukWBNU9854OTG%2BOThnWlF6oJD%2BAedgujetDegTvMbKslHwAtUK4XVOadJ4R%2BN16VgyR%2FMBr9Rg5hkTTTbOdQfqHYgtchz63xgdlDphqWLNQdj8CGNEgxfq1YQUa3pkM2qC41XLiweOUNOKIN7zNBEHaew1xi0vdagIqFmXpLqVjJAzvIcl%2FhaozBgv&X-Amz-Signature=09d4d363ff31cbfe43966d0a6ad1fd6ee71b701e8b252ccee29844147ea6bfcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNA4KTLX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ71kd%2BEfp84NpuOkfxHAiYrLCBI%2Fu3ztrBB6elu5uAgIhAPG%2BOZlESnKGJlZgxQwdXMoaYc%2Bh6DD56xxj4RPXc3v3KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN4xP7YF5fx0uS7UEq3AMe1v4ieq1yDqfhtvygsHW0TGC9vnDqQdiXvEL%2B1A%2FMabapUbDqWpQjb3M1SOBfjBDUjeA7oHf%2B82vfgoOOTmQjVtRLRgJWcYR0KQAchyEKI2XVz1KOgQvjha6vzHb1jto3%2BJn%2BgpGSURWhK%2FO2QGXkbaTTuWgoh72I1dRWR%2BowR30GYHI4PQQgEHidmAoTJ9F3ocIrbMuh9YircNVWqjrPoJrrMJad3v3jOXjoEyzpxEVRQzs5BQ8i2vZJ4OB7jnZM7uwkTPmkhSP5xHukctmVK6h7Ed53eKEQdkymBeD7MROlJkBaKJMmywBCsYLeAcp5GiDMldPZBZIP%2BOsP6KvnQDsHznvgUe4jhDnxjatn9w%2FRzMVrksdijgnlB3T5Nj5yznX3uX8nx1hR43Yyb%2BLtRB40S%2FSHJTmtOYG7nSfBUdXbZYPfdmPROevg%2BYPHE1FAgazEE6bc7dgg3XO2ko71p5F5%2BT2bdA9uw2zy%2Bto6foTx8V1lZqBoP3JUH6%2FbaPhAGr9HO4u68b74BQzy4XRQ3lyU0KHVjfgnbhjF7gbUTNSyprMqrHYMgh3bxrmTFq5W0ZzPo4XLERlqlO2krAQbJwrNKm5dFArAyy54FCndnkPExffIYodYEkNLfTCCiKnEBjqkASYnWmR9CpNhES0hsvu0z%2FOJHwpNp1U7kEukWBNU9854OTG%2BOThnWlF6oJD%2BAedgujetDegTvMbKslHwAtUK4XVOadJ4R%2BN16VgyR%2FMBr9Rg5hkTTTbOdQfqHYgtchz63xgdlDphqWLNQdj8CGNEgxfq1YQUa3pkM2qC41XLiweOUNOKIN7zNBEHaew1xi0vdagIqFmXpLqVjJAzvIcl%2FhaozBgv&X-Amz-Signature=086541e8d840ce86187ca69eea2c058ae007247ddd56213b7d1dab08c3fd872f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNA4KTLX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ71kd%2BEfp84NpuOkfxHAiYrLCBI%2Fu3ztrBB6elu5uAgIhAPG%2BOZlESnKGJlZgxQwdXMoaYc%2Bh6DD56xxj4RPXc3v3KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN4xP7YF5fx0uS7UEq3AMe1v4ieq1yDqfhtvygsHW0TGC9vnDqQdiXvEL%2B1A%2FMabapUbDqWpQjb3M1SOBfjBDUjeA7oHf%2B82vfgoOOTmQjVtRLRgJWcYR0KQAchyEKI2XVz1KOgQvjha6vzHb1jto3%2BJn%2BgpGSURWhK%2FO2QGXkbaTTuWgoh72I1dRWR%2BowR30GYHI4PQQgEHidmAoTJ9F3ocIrbMuh9YircNVWqjrPoJrrMJad3v3jOXjoEyzpxEVRQzs5BQ8i2vZJ4OB7jnZM7uwkTPmkhSP5xHukctmVK6h7Ed53eKEQdkymBeD7MROlJkBaKJMmywBCsYLeAcp5GiDMldPZBZIP%2BOsP6KvnQDsHznvgUe4jhDnxjatn9w%2FRzMVrksdijgnlB3T5Nj5yznX3uX8nx1hR43Yyb%2BLtRB40S%2FSHJTmtOYG7nSfBUdXbZYPfdmPROevg%2BYPHE1FAgazEE6bc7dgg3XO2ko71p5F5%2BT2bdA9uw2zy%2Bto6foTx8V1lZqBoP3JUH6%2FbaPhAGr9HO4u68b74BQzy4XRQ3lyU0KHVjfgnbhjF7gbUTNSyprMqrHYMgh3bxrmTFq5W0ZzPo4XLERlqlO2krAQbJwrNKm5dFArAyy54FCndnkPExffIYodYEkNLfTCCiKnEBjqkASYnWmR9CpNhES0hsvu0z%2FOJHwpNp1U7kEukWBNU9854OTG%2BOThnWlF6oJD%2BAedgujetDegTvMbKslHwAtUK4XVOadJ4R%2BN16VgyR%2FMBr9Rg5hkTTTbOdQfqHYgtchz63xgdlDphqWLNQdj8CGNEgxfq1YQUa3pkM2qC41XLiweOUNOKIN7zNBEHaew1xi0vdagIqFmXpLqVjJAzvIcl%2FhaozBgv&X-Amz-Signature=4d4bd8044ab0c265429040eec641149c4c9118d610f4dd15a3808f2ca85a6c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNA4KTLX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ71kd%2BEfp84NpuOkfxHAiYrLCBI%2Fu3ztrBB6elu5uAgIhAPG%2BOZlESnKGJlZgxQwdXMoaYc%2Bh6DD56xxj4RPXc3v3KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN4xP7YF5fx0uS7UEq3AMe1v4ieq1yDqfhtvygsHW0TGC9vnDqQdiXvEL%2B1A%2FMabapUbDqWpQjb3M1SOBfjBDUjeA7oHf%2B82vfgoOOTmQjVtRLRgJWcYR0KQAchyEKI2XVz1KOgQvjha6vzHb1jto3%2BJn%2BgpGSURWhK%2FO2QGXkbaTTuWgoh72I1dRWR%2BowR30GYHI4PQQgEHidmAoTJ9F3ocIrbMuh9YircNVWqjrPoJrrMJad3v3jOXjoEyzpxEVRQzs5BQ8i2vZJ4OB7jnZM7uwkTPmkhSP5xHukctmVK6h7Ed53eKEQdkymBeD7MROlJkBaKJMmywBCsYLeAcp5GiDMldPZBZIP%2BOsP6KvnQDsHznvgUe4jhDnxjatn9w%2FRzMVrksdijgnlB3T5Nj5yznX3uX8nx1hR43Yyb%2BLtRB40S%2FSHJTmtOYG7nSfBUdXbZYPfdmPROevg%2BYPHE1FAgazEE6bc7dgg3XO2ko71p5F5%2BT2bdA9uw2zy%2Bto6foTx8V1lZqBoP3JUH6%2FbaPhAGr9HO4u68b74BQzy4XRQ3lyU0KHVjfgnbhjF7gbUTNSyprMqrHYMgh3bxrmTFq5W0ZzPo4XLERlqlO2krAQbJwrNKm5dFArAyy54FCndnkPExffIYodYEkNLfTCCiKnEBjqkASYnWmR9CpNhES0hsvu0z%2FOJHwpNp1U7kEukWBNU9854OTG%2BOThnWlF6oJD%2BAedgujetDegTvMbKslHwAtUK4XVOadJ4R%2BN16VgyR%2FMBr9Rg5hkTTTbOdQfqHYgtchz63xgdlDphqWLNQdj8CGNEgxfq1YQUa3pkM2qC41XLiweOUNOKIN7zNBEHaew1xi0vdagIqFmXpLqVjJAzvIcl%2FhaozBgv&X-Amz-Signature=f1650f8b28c56e4ab175aac5efc7eb0521a642d19d279423577983e3598a9482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNA4KTLX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ71kd%2BEfp84NpuOkfxHAiYrLCBI%2Fu3ztrBB6elu5uAgIhAPG%2BOZlESnKGJlZgxQwdXMoaYc%2Bh6DD56xxj4RPXc3v3KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN4xP7YF5fx0uS7UEq3AMe1v4ieq1yDqfhtvygsHW0TGC9vnDqQdiXvEL%2B1A%2FMabapUbDqWpQjb3M1SOBfjBDUjeA7oHf%2B82vfgoOOTmQjVtRLRgJWcYR0KQAchyEKI2XVz1KOgQvjha6vzHb1jto3%2BJn%2BgpGSURWhK%2FO2QGXkbaTTuWgoh72I1dRWR%2BowR30GYHI4PQQgEHidmAoTJ9F3ocIrbMuh9YircNVWqjrPoJrrMJad3v3jOXjoEyzpxEVRQzs5BQ8i2vZJ4OB7jnZM7uwkTPmkhSP5xHukctmVK6h7Ed53eKEQdkymBeD7MROlJkBaKJMmywBCsYLeAcp5GiDMldPZBZIP%2BOsP6KvnQDsHznvgUe4jhDnxjatn9w%2FRzMVrksdijgnlB3T5Nj5yznX3uX8nx1hR43Yyb%2BLtRB40S%2FSHJTmtOYG7nSfBUdXbZYPfdmPROevg%2BYPHE1FAgazEE6bc7dgg3XO2ko71p5F5%2BT2bdA9uw2zy%2Bto6foTx8V1lZqBoP3JUH6%2FbaPhAGr9HO4u68b74BQzy4XRQ3lyU0KHVjfgnbhjF7gbUTNSyprMqrHYMgh3bxrmTFq5W0ZzPo4XLERlqlO2krAQbJwrNKm5dFArAyy54FCndnkPExffIYodYEkNLfTCCiKnEBjqkASYnWmR9CpNhES0hsvu0z%2FOJHwpNp1U7kEukWBNU9854OTG%2BOThnWlF6oJD%2BAedgujetDegTvMbKslHwAtUK4XVOadJ4R%2BN16VgyR%2FMBr9Rg5hkTTTbOdQfqHYgtchz63xgdlDphqWLNQdj8CGNEgxfq1YQUa3pkM2qC41XLiweOUNOKIN7zNBEHaew1xi0vdagIqFmXpLqVjJAzvIcl%2FhaozBgv&X-Amz-Signature=32931b1b2c84853d8da72054aca82a7b11174ca4e6deccef1f81d508a8e27104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python
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
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNA4KTLX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ71kd%2BEfp84NpuOkfxHAiYrLCBI%2Fu3ztrBB6elu5uAgIhAPG%2BOZlESnKGJlZgxQwdXMoaYc%2Bh6DD56xxj4RPXc3v3KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN4xP7YF5fx0uS7UEq3AMe1v4ieq1yDqfhtvygsHW0TGC9vnDqQdiXvEL%2B1A%2FMabapUbDqWpQjb3M1SOBfjBDUjeA7oHf%2B82vfgoOOTmQjVtRLRgJWcYR0KQAchyEKI2XVz1KOgQvjha6vzHb1jto3%2BJn%2BgpGSURWhK%2FO2QGXkbaTTuWgoh72I1dRWR%2BowR30GYHI4PQQgEHidmAoTJ9F3ocIrbMuh9YircNVWqjrPoJrrMJad3v3jOXjoEyzpxEVRQzs5BQ8i2vZJ4OB7jnZM7uwkTPmkhSP5xHukctmVK6h7Ed53eKEQdkymBeD7MROlJkBaKJMmywBCsYLeAcp5GiDMldPZBZIP%2BOsP6KvnQDsHznvgUe4jhDnxjatn9w%2FRzMVrksdijgnlB3T5Nj5yznX3uX8nx1hR43Yyb%2BLtRB40S%2FSHJTmtOYG7nSfBUdXbZYPfdmPROevg%2BYPHE1FAgazEE6bc7dgg3XO2ko71p5F5%2BT2bdA9uw2zy%2Bto6foTx8V1lZqBoP3JUH6%2FbaPhAGr9HO4u68b74BQzy4XRQ3lyU0KHVjfgnbhjF7gbUTNSyprMqrHYMgh3bxrmTFq5W0ZzPo4XLERlqlO2krAQbJwrNKm5dFArAyy54FCndnkPExffIYodYEkNLfTCCiKnEBjqkASYnWmR9CpNhES0hsvu0z%2FOJHwpNp1U7kEukWBNU9854OTG%2BOThnWlF6oJD%2BAedgujetDegTvMbKslHwAtUK4XVOadJ4R%2BN16VgyR%2FMBr9Rg5hkTTTbOdQfqHYgtchz63xgdlDphqWLNQdj8CGNEgxfq1YQUa3pkM2qC41XLiweOUNOKIN7zNBEHaew1xi0vdagIqFmXpLqVjJAzvIcl%2FhaozBgv&X-Amz-Signature=1ece2e02e97b40b33d869557cdbdf5b6f932946c66dfb9da190cd52324e3ca46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNA4KTLX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ71kd%2BEfp84NpuOkfxHAiYrLCBI%2Fu3ztrBB6elu5uAgIhAPG%2BOZlESnKGJlZgxQwdXMoaYc%2Bh6DD56xxj4RPXc3v3KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN4xP7YF5fx0uS7UEq3AMe1v4ieq1yDqfhtvygsHW0TGC9vnDqQdiXvEL%2B1A%2FMabapUbDqWpQjb3M1SOBfjBDUjeA7oHf%2B82vfgoOOTmQjVtRLRgJWcYR0KQAchyEKI2XVz1KOgQvjha6vzHb1jto3%2BJn%2BgpGSURWhK%2FO2QGXkbaTTuWgoh72I1dRWR%2BowR30GYHI4PQQgEHidmAoTJ9F3ocIrbMuh9YircNVWqjrPoJrrMJad3v3jOXjoEyzpxEVRQzs5BQ8i2vZJ4OB7jnZM7uwkTPmkhSP5xHukctmVK6h7Ed53eKEQdkymBeD7MROlJkBaKJMmywBCsYLeAcp5GiDMldPZBZIP%2BOsP6KvnQDsHznvgUe4jhDnxjatn9w%2FRzMVrksdijgnlB3T5Nj5yznX3uX8nx1hR43Yyb%2BLtRB40S%2FSHJTmtOYG7nSfBUdXbZYPfdmPROevg%2BYPHE1FAgazEE6bc7dgg3XO2ko71p5F5%2BT2bdA9uw2zy%2Bto6foTx8V1lZqBoP3JUH6%2FbaPhAGr9HO4u68b74BQzy4XRQ3lyU0KHVjfgnbhjF7gbUTNSyprMqrHYMgh3bxrmTFq5W0ZzPo4XLERlqlO2krAQbJwrNKm5dFArAyy54FCndnkPExffIYodYEkNLfTCCiKnEBjqkASYnWmR9CpNhES0hsvu0z%2FOJHwpNp1U7kEukWBNU9854OTG%2BOThnWlF6oJD%2BAedgujetDegTvMbKslHwAtUK4XVOadJ4R%2BN16VgyR%2FMBr9Rg5hkTTTbOdQfqHYgtchz63xgdlDphqWLNQdj8CGNEgxfq1YQUa3pkM2qC41XLiweOUNOKIN7zNBEHaew1xi0vdagIqFmXpLqVjJAzvIcl%2FhaozBgv&X-Amz-Signature=b436bea3c15d84fc878feeef4daa23ceb2d80d42d82c632b568d2c07b94aa87c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNA4KTLX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ71kd%2BEfp84NpuOkfxHAiYrLCBI%2Fu3ztrBB6elu5uAgIhAPG%2BOZlESnKGJlZgxQwdXMoaYc%2Bh6DD56xxj4RPXc3v3KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN4xP7YF5fx0uS7UEq3AMe1v4ieq1yDqfhtvygsHW0TGC9vnDqQdiXvEL%2B1A%2FMabapUbDqWpQjb3M1SOBfjBDUjeA7oHf%2B82vfgoOOTmQjVtRLRgJWcYR0KQAchyEKI2XVz1KOgQvjha6vzHb1jto3%2BJn%2BgpGSURWhK%2FO2QGXkbaTTuWgoh72I1dRWR%2BowR30GYHI4PQQgEHidmAoTJ9F3ocIrbMuh9YircNVWqjrPoJrrMJad3v3jOXjoEyzpxEVRQzs5BQ8i2vZJ4OB7jnZM7uwkTPmkhSP5xHukctmVK6h7Ed53eKEQdkymBeD7MROlJkBaKJMmywBCsYLeAcp5GiDMldPZBZIP%2BOsP6KvnQDsHznvgUe4jhDnxjatn9w%2FRzMVrksdijgnlB3T5Nj5yznX3uX8nx1hR43Yyb%2BLtRB40S%2FSHJTmtOYG7nSfBUdXbZYPfdmPROevg%2BYPHE1FAgazEE6bc7dgg3XO2ko71p5F5%2BT2bdA9uw2zy%2Bto6foTx8V1lZqBoP3JUH6%2FbaPhAGr9HO4u68b74BQzy4XRQ3lyU0KHVjfgnbhjF7gbUTNSyprMqrHYMgh3bxrmTFq5W0ZzPo4XLERlqlO2krAQbJwrNKm5dFArAyy54FCndnkPExffIYodYEkNLfTCCiKnEBjqkASYnWmR9CpNhES0hsvu0z%2FOJHwpNp1U7kEukWBNU9854OTG%2BOThnWlF6oJD%2BAedgujetDegTvMbKslHwAtUK4XVOadJ4R%2BN16VgyR%2FMBr9Rg5hkTTTbOdQfqHYgtchz63xgdlDphqWLNQdj8CGNEgxfq1YQUa3pkM2qC41XLiweOUNOKIN7zNBEHaew1xi0vdagIqFmXpLqVjJAzvIcl%2FhaozBgv&X-Amz-Signature=595643fc82f50647c3b568c652e13b4a62e920b1408861ddc7173f7b12db96e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNA4KTLX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ71kd%2BEfp84NpuOkfxHAiYrLCBI%2Fu3ztrBB6elu5uAgIhAPG%2BOZlESnKGJlZgxQwdXMoaYc%2Bh6DD56xxj4RPXc3v3KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN4xP7YF5fx0uS7UEq3AMe1v4ieq1yDqfhtvygsHW0TGC9vnDqQdiXvEL%2B1A%2FMabapUbDqWpQjb3M1SOBfjBDUjeA7oHf%2B82vfgoOOTmQjVtRLRgJWcYR0KQAchyEKI2XVz1KOgQvjha6vzHb1jto3%2BJn%2BgpGSURWhK%2FO2QGXkbaTTuWgoh72I1dRWR%2BowR30GYHI4PQQgEHidmAoTJ9F3ocIrbMuh9YircNVWqjrPoJrrMJad3v3jOXjoEyzpxEVRQzs5BQ8i2vZJ4OB7jnZM7uwkTPmkhSP5xHukctmVK6h7Ed53eKEQdkymBeD7MROlJkBaKJMmywBCsYLeAcp5GiDMldPZBZIP%2BOsP6KvnQDsHznvgUe4jhDnxjatn9w%2FRzMVrksdijgnlB3T5Nj5yznX3uX8nx1hR43Yyb%2BLtRB40S%2FSHJTmtOYG7nSfBUdXbZYPfdmPROevg%2BYPHE1FAgazEE6bc7dgg3XO2ko71p5F5%2BT2bdA9uw2zy%2Bto6foTx8V1lZqBoP3JUH6%2FbaPhAGr9HO4u68b74BQzy4XRQ3lyU0KHVjfgnbhjF7gbUTNSyprMqrHYMgh3bxrmTFq5W0ZzPo4XLERlqlO2krAQbJwrNKm5dFArAyy54FCndnkPExffIYodYEkNLfTCCiKnEBjqkASYnWmR9CpNhES0hsvu0z%2FOJHwpNp1U7kEukWBNU9854OTG%2BOThnWlF6oJD%2BAedgujetDegTvMbKslHwAtUK4XVOadJ4R%2BN16VgyR%2FMBr9Rg5hkTTTbOdQfqHYgtchz63xgdlDphqWLNQdj8CGNEgxfq1YQUa3pkM2qC41XLiweOUNOKIN7zNBEHaew1xi0vdagIqFmXpLqVjJAzvIcl%2FhaozBgv&X-Amz-Signature=d997f3c0e42ec766cb9a8deb0e60a523d7ccc69ffc13e0ea896994a4e4db2f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNA4KTLX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ71kd%2BEfp84NpuOkfxHAiYrLCBI%2Fu3ztrBB6elu5uAgIhAPG%2BOZlESnKGJlZgxQwdXMoaYc%2Bh6DD56xxj4RPXc3v3KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN4xP7YF5fx0uS7UEq3AMe1v4ieq1yDqfhtvygsHW0TGC9vnDqQdiXvEL%2B1A%2FMabapUbDqWpQjb3M1SOBfjBDUjeA7oHf%2B82vfgoOOTmQjVtRLRgJWcYR0KQAchyEKI2XVz1KOgQvjha6vzHb1jto3%2BJn%2BgpGSURWhK%2FO2QGXkbaTTuWgoh72I1dRWR%2BowR30GYHI4PQQgEHidmAoTJ9F3ocIrbMuh9YircNVWqjrPoJrrMJad3v3jOXjoEyzpxEVRQzs5BQ8i2vZJ4OB7jnZM7uwkTPmkhSP5xHukctmVK6h7Ed53eKEQdkymBeD7MROlJkBaKJMmywBCsYLeAcp5GiDMldPZBZIP%2BOsP6KvnQDsHznvgUe4jhDnxjatn9w%2FRzMVrksdijgnlB3T5Nj5yznX3uX8nx1hR43Yyb%2BLtRB40S%2FSHJTmtOYG7nSfBUdXbZYPfdmPROevg%2BYPHE1FAgazEE6bc7dgg3XO2ko71p5F5%2BT2bdA9uw2zy%2Bto6foTx8V1lZqBoP3JUH6%2FbaPhAGr9HO4u68b74BQzy4XRQ3lyU0KHVjfgnbhjF7gbUTNSyprMqrHYMgh3bxrmTFq5W0ZzPo4XLERlqlO2krAQbJwrNKm5dFArAyy54FCndnkPExffIYodYEkNLfTCCiKnEBjqkASYnWmR9CpNhES0hsvu0z%2FOJHwpNp1U7kEukWBNU9854OTG%2BOThnWlF6oJD%2BAedgujetDegTvMbKslHwAtUK4XVOadJ4R%2BN16VgyR%2FMBr9Rg5hkTTTbOdQfqHYgtchz63xgdlDphqWLNQdj8CGNEgxfq1YQUa3pkM2qC41XLiweOUNOKIN7zNBEHaew1xi0vdagIqFmXpLqVjJAzvIcl%2FhaozBgv&X-Amz-Signature=0c76372222ee9830c8e0ae2bf2ba2058c5990b2b1dffc3380889d29a447729f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNA4KTLX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ71kd%2BEfp84NpuOkfxHAiYrLCBI%2Fu3ztrBB6elu5uAgIhAPG%2BOZlESnKGJlZgxQwdXMoaYc%2Bh6DD56xxj4RPXc3v3KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN4xP7YF5fx0uS7UEq3AMe1v4ieq1yDqfhtvygsHW0TGC9vnDqQdiXvEL%2B1A%2FMabapUbDqWpQjb3M1SOBfjBDUjeA7oHf%2B82vfgoOOTmQjVtRLRgJWcYR0KQAchyEKI2XVz1KOgQvjha6vzHb1jto3%2BJn%2BgpGSURWhK%2FO2QGXkbaTTuWgoh72I1dRWR%2BowR30GYHI4PQQgEHidmAoTJ9F3ocIrbMuh9YircNVWqjrPoJrrMJad3v3jOXjoEyzpxEVRQzs5BQ8i2vZJ4OB7jnZM7uwkTPmkhSP5xHukctmVK6h7Ed53eKEQdkymBeD7MROlJkBaKJMmywBCsYLeAcp5GiDMldPZBZIP%2BOsP6KvnQDsHznvgUe4jhDnxjatn9w%2FRzMVrksdijgnlB3T5Nj5yznX3uX8nx1hR43Yyb%2BLtRB40S%2FSHJTmtOYG7nSfBUdXbZYPfdmPROevg%2BYPHE1FAgazEE6bc7dgg3XO2ko71p5F5%2BT2bdA9uw2zy%2Bto6foTx8V1lZqBoP3JUH6%2FbaPhAGr9HO4u68b74BQzy4XRQ3lyU0KHVjfgnbhjF7gbUTNSyprMqrHYMgh3bxrmTFq5W0ZzPo4XLERlqlO2krAQbJwrNKm5dFArAyy54FCndnkPExffIYodYEkNLfTCCiKnEBjqkASYnWmR9CpNhES0hsvu0z%2FOJHwpNp1U7kEukWBNU9854OTG%2BOThnWlF6oJD%2BAedgujetDegTvMbKslHwAtUK4XVOadJ4R%2BN16VgyR%2FMBr9Rg5hkTTTbOdQfqHYgtchz63xgdlDphqWLNQdj8CGNEgxfq1YQUa3pkM2qC41XLiweOUNOKIN7zNBEHaew1xi0vdagIqFmXpLqVjJAzvIcl%2FhaozBgv&X-Amz-Signature=39341d25c199fcbdbfa679c64b6884aa62904399cc2eacf4ea8fea2e4598f588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNA4KTLX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T171226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ71kd%2BEfp84NpuOkfxHAiYrLCBI%2Fu3ztrBB6elu5uAgIhAPG%2BOZlESnKGJlZgxQwdXMoaYc%2Bh6DD56xxj4RPXc3v3KogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN4xP7YF5fx0uS7UEq3AMe1v4ieq1yDqfhtvygsHW0TGC9vnDqQdiXvEL%2B1A%2FMabapUbDqWpQjb3M1SOBfjBDUjeA7oHf%2B82vfgoOOTmQjVtRLRgJWcYR0KQAchyEKI2XVz1KOgQvjha6vzHb1jto3%2BJn%2BgpGSURWhK%2FO2QGXkbaTTuWgoh72I1dRWR%2BowR30GYHI4PQQgEHidmAoTJ9F3ocIrbMuh9YircNVWqjrPoJrrMJad3v3jOXjoEyzpxEVRQzs5BQ8i2vZJ4OB7jnZM7uwkTPmkhSP5xHukctmVK6h7Ed53eKEQdkymBeD7MROlJkBaKJMmywBCsYLeAcp5GiDMldPZBZIP%2BOsP6KvnQDsHznvgUe4jhDnxjatn9w%2FRzMVrksdijgnlB3T5Nj5yznX3uX8nx1hR43Yyb%2BLtRB40S%2FSHJTmtOYG7nSfBUdXbZYPfdmPROevg%2BYPHE1FAgazEE6bc7dgg3XO2ko71p5F5%2BT2bdA9uw2zy%2Bto6foTx8V1lZqBoP3JUH6%2FbaPhAGr9HO4u68b74BQzy4XRQ3lyU0KHVjfgnbhjF7gbUTNSyprMqrHYMgh3bxrmTFq5W0ZzPo4XLERlqlO2krAQbJwrNKm5dFArAyy54FCndnkPExffIYodYEkNLfTCCiKnEBjqkASYnWmR9CpNhES0hsvu0z%2FOJHwpNp1U7kEukWBNU9854OTG%2BOThnWlF6oJD%2BAedgujetDegTvMbKslHwAtUK4XVOadJ4R%2BN16VgyR%2FMBr9Rg5hkTTTbOdQfqHYgtchz63xgdlDphqWLNQdj8CGNEgxfq1YQUa3pkM2qC41XLiweOUNOKIN7zNBEHaew1xi0vdagIqFmXpLqVjJAzvIcl%2FhaozBgv&X-Amz-Signature=c07b1bb8007651ad3b2d655d187a4fda9c6165f5dda19f2c5e2a6287d023c653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
