---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVHKF5J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2Fe4ZrT1%2FKRoOdzOmh51l2URe58t7oNMXKaBlAmGBQAiAgmYUXS5N8eqiIGeiz5xFqdL323do95aTXFcJPbQ71RiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X1IrvlPPBpHiupkKtwDTRDCYNsbfK40b9tFrMaL5d%2FrTJTNccsSmB8TppnvFRsCzvTmm6cQHc6VU6xAaBDxmN6XF41mlXb3ITKBsmei%2FIR7QIG7wYHmizsf940ygVnoLBR26IcXS5FN%2BKq1n4cHsCQhTg1FHdq6HdSC7eGvvODBZc8CwcWuTr1p%2Fy%2BF6jEVJRBQmnqroNbIl2v0NFJSA%2B%2B5vfQ3hgYgeGdcshZHY1id3fCHVOxi1sIIZ4bW10dLspYim014BeQyK01wAXse4THAoxpFhDnCeriLaa%2FXh5TDv%2FbaZwXpqTYnIr5kXyXfWj8oG5i2OS%2BeH5ti5SkSk2ax%2ByvTY6hT491fA4HgM%2FEwAPKNmbK0SIh1K1DMAc5qMFKF936RmkoBNjFuppq9KVGIAIB9SC3TAyAsZ%2BLhngLrJ%2FZtHa%2F2sVna4nQFgqn6EVIAaeVwunJgvgb%2B0feUNvKWSSl0mlYqxYkY5WlqGRo4MXLUNpS4qMp0ZnGQEaGCMn5ju5bqs5zT2ShZ0uZ7fR17uW0vYlr22qHXFXnzkXxKAr3GzYUM9iHQORr8Tjo%2BIYpu2a945OFek6r0fQniWVtjarcLxw5%2Fe%2BXd9p6gQwWH243w1Yy0K%2FaGHAkNnWMa%2B4zLme%2F2u1WtjXMwoOTcxAY6pgHcfiHOYtEDY6FF%2BtNkkDZdtzACrqka7cIeVeCpy76gSSta5Pw6ydAF%2BLK9%2FT0AMk0ALq8hf5uhBL11zg1tOYE1kCW3vZvqf%2Bl3tpw2UgXc2G9wiIlNhVzRax%2FifzAuukV1TSVZb5nDAMc6KYljfuyvQLC2C7JkC8%2BGXduT3xUHh6OZH9%2BaLKcUyVmMsCQCUshDi7TIfDh8T53h9spP9beXrCA4TURJ&X-Amz-Signature=8673d11f35b1f8b4c49c69d978b8d9aab097a3d7add54ce708e20c942612bc82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVHKF5J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2Fe4ZrT1%2FKRoOdzOmh51l2URe58t7oNMXKaBlAmGBQAiAgmYUXS5N8eqiIGeiz5xFqdL323do95aTXFcJPbQ71RiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X1IrvlPPBpHiupkKtwDTRDCYNsbfK40b9tFrMaL5d%2FrTJTNccsSmB8TppnvFRsCzvTmm6cQHc6VU6xAaBDxmN6XF41mlXb3ITKBsmei%2FIR7QIG7wYHmizsf940ygVnoLBR26IcXS5FN%2BKq1n4cHsCQhTg1FHdq6HdSC7eGvvODBZc8CwcWuTr1p%2Fy%2BF6jEVJRBQmnqroNbIl2v0NFJSA%2B%2B5vfQ3hgYgeGdcshZHY1id3fCHVOxi1sIIZ4bW10dLspYim014BeQyK01wAXse4THAoxpFhDnCeriLaa%2FXh5TDv%2FbaZwXpqTYnIr5kXyXfWj8oG5i2OS%2BeH5ti5SkSk2ax%2ByvTY6hT491fA4HgM%2FEwAPKNmbK0SIh1K1DMAc5qMFKF936RmkoBNjFuppq9KVGIAIB9SC3TAyAsZ%2BLhngLrJ%2FZtHa%2F2sVna4nQFgqn6EVIAaeVwunJgvgb%2B0feUNvKWSSl0mlYqxYkY5WlqGRo4MXLUNpS4qMp0ZnGQEaGCMn5ju5bqs5zT2ShZ0uZ7fR17uW0vYlr22qHXFXnzkXxKAr3GzYUM9iHQORr8Tjo%2BIYpu2a945OFek6r0fQniWVtjarcLxw5%2Fe%2BXd9p6gQwWH243w1Yy0K%2FaGHAkNnWMa%2B4zLme%2F2u1WtjXMwoOTcxAY6pgHcfiHOYtEDY6FF%2BtNkkDZdtzACrqka7cIeVeCpy76gSSta5Pw6ydAF%2BLK9%2FT0AMk0ALq8hf5uhBL11zg1tOYE1kCW3vZvqf%2Bl3tpw2UgXc2G9wiIlNhVzRax%2FifzAuukV1TSVZb5nDAMc6KYljfuyvQLC2C7JkC8%2BGXduT3xUHh6OZH9%2BaLKcUyVmMsCQCUshDi7TIfDh8T53h9spP9beXrCA4TURJ&X-Amz-Signature=6af6b59a61d33122321262b1ac89d2269fd7fa63147033fee05efae34ff125a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVHKF5J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2Fe4ZrT1%2FKRoOdzOmh51l2URe58t7oNMXKaBlAmGBQAiAgmYUXS5N8eqiIGeiz5xFqdL323do95aTXFcJPbQ71RiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X1IrvlPPBpHiupkKtwDTRDCYNsbfK40b9tFrMaL5d%2FrTJTNccsSmB8TppnvFRsCzvTmm6cQHc6VU6xAaBDxmN6XF41mlXb3ITKBsmei%2FIR7QIG7wYHmizsf940ygVnoLBR26IcXS5FN%2BKq1n4cHsCQhTg1FHdq6HdSC7eGvvODBZc8CwcWuTr1p%2Fy%2BF6jEVJRBQmnqroNbIl2v0NFJSA%2B%2B5vfQ3hgYgeGdcshZHY1id3fCHVOxi1sIIZ4bW10dLspYim014BeQyK01wAXse4THAoxpFhDnCeriLaa%2FXh5TDv%2FbaZwXpqTYnIr5kXyXfWj8oG5i2OS%2BeH5ti5SkSk2ax%2ByvTY6hT491fA4HgM%2FEwAPKNmbK0SIh1K1DMAc5qMFKF936RmkoBNjFuppq9KVGIAIB9SC3TAyAsZ%2BLhngLrJ%2FZtHa%2F2sVna4nQFgqn6EVIAaeVwunJgvgb%2B0feUNvKWSSl0mlYqxYkY5WlqGRo4MXLUNpS4qMp0ZnGQEaGCMn5ju5bqs5zT2ShZ0uZ7fR17uW0vYlr22qHXFXnzkXxKAr3GzYUM9iHQORr8Tjo%2BIYpu2a945OFek6r0fQniWVtjarcLxw5%2Fe%2BXd9p6gQwWH243w1Yy0K%2FaGHAkNnWMa%2B4zLme%2F2u1WtjXMwoOTcxAY6pgHcfiHOYtEDY6FF%2BtNkkDZdtzACrqka7cIeVeCpy76gSSta5Pw6ydAF%2BLK9%2FT0AMk0ALq8hf5uhBL11zg1tOYE1kCW3vZvqf%2Bl3tpw2UgXc2G9wiIlNhVzRax%2FifzAuukV1TSVZb5nDAMc6KYljfuyvQLC2C7JkC8%2BGXduT3xUHh6OZH9%2BaLKcUyVmMsCQCUshDi7TIfDh8T53h9spP9beXrCA4TURJ&X-Amz-Signature=45cb2de74e6f0c906620db20a6f37844de953982524dc3667bd94f238917b1f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVHKF5J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2Fe4ZrT1%2FKRoOdzOmh51l2URe58t7oNMXKaBlAmGBQAiAgmYUXS5N8eqiIGeiz5xFqdL323do95aTXFcJPbQ71RiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X1IrvlPPBpHiupkKtwDTRDCYNsbfK40b9tFrMaL5d%2FrTJTNccsSmB8TppnvFRsCzvTmm6cQHc6VU6xAaBDxmN6XF41mlXb3ITKBsmei%2FIR7QIG7wYHmizsf940ygVnoLBR26IcXS5FN%2BKq1n4cHsCQhTg1FHdq6HdSC7eGvvODBZc8CwcWuTr1p%2Fy%2BF6jEVJRBQmnqroNbIl2v0NFJSA%2B%2B5vfQ3hgYgeGdcshZHY1id3fCHVOxi1sIIZ4bW10dLspYim014BeQyK01wAXse4THAoxpFhDnCeriLaa%2FXh5TDv%2FbaZwXpqTYnIr5kXyXfWj8oG5i2OS%2BeH5ti5SkSk2ax%2ByvTY6hT491fA4HgM%2FEwAPKNmbK0SIh1K1DMAc5qMFKF936RmkoBNjFuppq9KVGIAIB9SC3TAyAsZ%2BLhngLrJ%2FZtHa%2F2sVna4nQFgqn6EVIAaeVwunJgvgb%2B0feUNvKWSSl0mlYqxYkY5WlqGRo4MXLUNpS4qMp0ZnGQEaGCMn5ju5bqs5zT2ShZ0uZ7fR17uW0vYlr22qHXFXnzkXxKAr3GzYUM9iHQORr8Tjo%2BIYpu2a945OFek6r0fQniWVtjarcLxw5%2Fe%2BXd9p6gQwWH243w1Yy0K%2FaGHAkNnWMa%2B4zLme%2F2u1WtjXMwoOTcxAY6pgHcfiHOYtEDY6FF%2BtNkkDZdtzACrqka7cIeVeCpy76gSSta5Pw6ydAF%2BLK9%2FT0AMk0ALq8hf5uhBL11zg1tOYE1kCW3vZvqf%2Bl3tpw2UgXc2G9wiIlNhVzRax%2FifzAuukV1TSVZb5nDAMc6KYljfuyvQLC2C7JkC8%2BGXduT3xUHh6OZH9%2BaLKcUyVmMsCQCUshDi7TIfDh8T53h9spP9beXrCA4TURJ&X-Amz-Signature=2afe7d95313e62b1398070a42d2d4254900c2cd18650615f79f9ce74268870d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVHKF5J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2Fe4ZrT1%2FKRoOdzOmh51l2URe58t7oNMXKaBlAmGBQAiAgmYUXS5N8eqiIGeiz5xFqdL323do95aTXFcJPbQ71RiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X1IrvlPPBpHiupkKtwDTRDCYNsbfK40b9tFrMaL5d%2FrTJTNccsSmB8TppnvFRsCzvTmm6cQHc6VU6xAaBDxmN6XF41mlXb3ITKBsmei%2FIR7QIG7wYHmizsf940ygVnoLBR26IcXS5FN%2BKq1n4cHsCQhTg1FHdq6HdSC7eGvvODBZc8CwcWuTr1p%2Fy%2BF6jEVJRBQmnqroNbIl2v0NFJSA%2B%2B5vfQ3hgYgeGdcshZHY1id3fCHVOxi1sIIZ4bW10dLspYim014BeQyK01wAXse4THAoxpFhDnCeriLaa%2FXh5TDv%2FbaZwXpqTYnIr5kXyXfWj8oG5i2OS%2BeH5ti5SkSk2ax%2ByvTY6hT491fA4HgM%2FEwAPKNmbK0SIh1K1DMAc5qMFKF936RmkoBNjFuppq9KVGIAIB9SC3TAyAsZ%2BLhngLrJ%2FZtHa%2F2sVna4nQFgqn6EVIAaeVwunJgvgb%2B0feUNvKWSSl0mlYqxYkY5WlqGRo4MXLUNpS4qMp0ZnGQEaGCMn5ju5bqs5zT2ShZ0uZ7fR17uW0vYlr22qHXFXnzkXxKAr3GzYUM9iHQORr8Tjo%2BIYpu2a945OFek6r0fQniWVtjarcLxw5%2Fe%2BXd9p6gQwWH243w1Yy0K%2FaGHAkNnWMa%2B4zLme%2F2u1WtjXMwoOTcxAY6pgHcfiHOYtEDY6FF%2BtNkkDZdtzACrqka7cIeVeCpy76gSSta5Pw6ydAF%2BLK9%2FT0AMk0ALq8hf5uhBL11zg1tOYE1kCW3vZvqf%2Bl3tpw2UgXc2G9wiIlNhVzRax%2FifzAuukV1TSVZb5nDAMc6KYljfuyvQLC2C7JkC8%2BGXduT3xUHh6OZH9%2BaLKcUyVmMsCQCUshDi7TIfDh8T53h9spP9beXrCA4TURJ&X-Amz-Signature=597e1a4670c38f0b35fbf0b32ce865d6b8cd0c9183d76029282992e6cc88e5f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVHKF5J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2Fe4ZrT1%2FKRoOdzOmh51l2URe58t7oNMXKaBlAmGBQAiAgmYUXS5N8eqiIGeiz5xFqdL323do95aTXFcJPbQ71RiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X1IrvlPPBpHiupkKtwDTRDCYNsbfK40b9tFrMaL5d%2FrTJTNccsSmB8TppnvFRsCzvTmm6cQHc6VU6xAaBDxmN6XF41mlXb3ITKBsmei%2FIR7QIG7wYHmizsf940ygVnoLBR26IcXS5FN%2BKq1n4cHsCQhTg1FHdq6HdSC7eGvvODBZc8CwcWuTr1p%2Fy%2BF6jEVJRBQmnqroNbIl2v0NFJSA%2B%2B5vfQ3hgYgeGdcshZHY1id3fCHVOxi1sIIZ4bW10dLspYim014BeQyK01wAXse4THAoxpFhDnCeriLaa%2FXh5TDv%2FbaZwXpqTYnIr5kXyXfWj8oG5i2OS%2BeH5ti5SkSk2ax%2ByvTY6hT491fA4HgM%2FEwAPKNmbK0SIh1K1DMAc5qMFKF936RmkoBNjFuppq9KVGIAIB9SC3TAyAsZ%2BLhngLrJ%2FZtHa%2F2sVna4nQFgqn6EVIAaeVwunJgvgb%2B0feUNvKWSSl0mlYqxYkY5WlqGRo4MXLUNpS4qMp0ZnGQEaGCMn5ju5bqs5zT2ShZ0uZ7fR17uW0vYlr22qHXFXnzkXxKAr3GzYUM9iHQORr8Tjo%2BIYpu2a945OFek6r0fQniWVtjarcLxw5%2Fe%2BXd9p6gQwWH243w1Yy0K%2FaGHAkNnWMa%2B4zLme%2F2u1WtjXMwoOTcxAY6pgHcfiHOYtEDY6FF%2BtNkkDZdtzACrqka7cIeVeCpy76gSSta5Pw6ydAF%2BLK9%2FT0AMk0ALq8hf5uhBL11zg1tOYE1kCW3vZvqf%2Bl3tpw2UgXc2G9wiIlNhVzRax%2FifzAuukV1TSVZb5nDAMc6KYljfuyvQLC2C7JkC8%2BGXduT3xUHh6OZH9%2BaLKcUyVmMsCQCUshDi7TIfDh8T53h9spP9beXrCA4TURJ&X-Amz-Signature=04568e4b11a56138df079b7594ae69962f7d4651c9ea1468b4300d492a65a200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVHKF5J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2Fe4ZrT1%2FKRoOdzOmh51l2URe58t7oNMXKaBlAmGBQAiAgmYUXS5N8eqiIGeiz5xFqdL323do95aTXFcJPbQ71RiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X1IrvlPPBpHiupkKtwDTRDCYNsbfK40b9tFrMaL5d%2FrTJTNccsSmB8TppnvFRsCzvTmm6cQHc6VU6xAaBDxmN6XF41mlXb3ITKBsmei%2FIR7QIG7wYHmizsf940ygVnoLBR26IcXS5FN%2BKq1n4cHsCQhTg1FHdq6HdSC7eGvvODBZc8CwcWuTr1p%2Fy%2BF6jEVJRBQmnqroNbIl2v0NFJSA%2B%2B5vfQ3hgYgeGdcshZHY1id3fCHVOxi1sIIZ4bW10dLspYim014BeQyK01wAXse4THAoxpFhDnCeriLaa%2FXh5TDv%2FbaZwXpqTYnIr5kXyXfWj8oG5i2OS%2BeH5ti5SkSk2ax%2ByvTY6hT491fA4HgM%2FEwAPKNmbK0SIh1K1DMAc5qMFKF936RmkoBNjFuppq9KVGIAIB9SC3TAyAsZ%2BLhngLrJ%2FZtHa%2F2sVna4nQFgqn6EVIAaeVwunJgvgb%2B0feUNvKWSSl0mlYqxYkY5WlqGRo4MXLUNpS4qMp0ZnGQEaGCMn5ju5bqs5zT2ShZ0uZ7fR17uW0vYlr22qHXFXnzkXxKAr3GzYUM9iHQORr8Tjo%2BIYpu2a945OFek6r0fQniWVtjarcLxw5%2Fe%2BXd9p6gQwWH243w1Yy0K%2FaGHAkNnWMa%2B4zLme%2F2u1WtjXMwoOTcxAY6pgHcfiHOYtEDY6FF%2BtNkkDZdtzACrqka7cIeVeCpy76gSSta5Pw6ydAF%2BLK9%2FT0AMk0ALq8hf5uhBL11zg1tOYE1kCW3vZvqf%2Bl3tpw2UgXc2G9wiIlNhVzRax%2FifzAuukV1TSVZb5nDAMc6KYljfuyvQLC2C7JkC8%2BGXduT3xUHh6OZH9%2BaLKcUyVmMsCQCUshDi7TIfDh8T53h9spP9beXrCA4TURJ&X-Amz-Signature=b0e68d36cc4c8af5bd689cc43565ccaa55247822d1c8d21883adc40de8249d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVHKF5J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2Fe4ZrT1%2FKRoOdzOmh51l2URe58t7oNMXKaBlAmGBQAiAgmYUXS5N8eqiIGeiz5xFqdL323do95aTXFcJPbQ71RiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X1IrvlPPBpHiupkKtwDTRDCYNsbfK40b9tFrMaL5d%2FrTJTNccsSmB8TppnvFRsCzvTmm6cQHc6VU6xAaBDxmN6XF41mlXb3ITKBsmei%2FIR7QIG7wYHmizsf940ygVnoLBR26IcXS5FN%2BKq1n4cHsCQhTg1FHdq6HdSC7eGvvODBZc8CwcWuTr1p%2Fy%2BF6jEVJRBQmnqroNbIl2v0NFJSA%2B%2B5vfQ3hgYgeGdcshZHY1id3fCHVOxi1sIIZ4bW10dLspYim014BeQyK01wAXse4THAoxpFhDnCeriLaa%2FXh5TDv%2FbaZwXpqTYnIr5kXyXfWj8oG5i2OS%2BeH5ti5SkSk2ax%2ByvTY6hT491fA4HgM%2FEwAPKNmbK0SIh1K1DMAc5qMFKF936RmkoBNjFuppq9KVGIAIB9SC3TAyAsZ%2BLhngLrJ%2FZtHa%2F2sVna4nQFgqn6EVIAaeVwunJgvgb%2B0feUNvKWSSl0mlYqxYkY5WlqGRo4MXLUNpS4qMp0ZnGQEaGCMn5ju5bqs5zT2ShZ0uZ7fR17uW0vYlr22qHXFXnzkXxKAr3GzYUM9iHQORr8Tjo%2BIYpu2a945OFek6r0fQniWVtjarcLxw5%2Fe%2BXd9p6gQwWH243w1Yy0K%2FaGHAkNnWMa%2B4zLme%2F2u1WtjXMwoOTcxAY6pgHcfiHOYtEDY6FF%2BtNkkDZdtzACrqka7cIeVeCpy76gSSta5Pw6ydAF%2BLK9%2FT0AMk0ALq8hf5uhBL11zg1tOYE1kCW3vZvqf%2Bl3tpw2UgXc2G9wiIlNhVzRax%2FifzAuukV1TSVZb5nDAMc6KYljfuyvQLC2C7JkC8%2BGXduT3xUHh6OZH9%2BaLKcUyVmMsCQCUshDi7TIfDh8T53h9spP9beXrCA4TURJ&X-Amz-Signature=4c6bbb605024faf406f763289d1be781be571dee8ef30ae32b6ac023570542a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVHKF5J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2Fe4ZrT1%2FKRoOdzOmh51l2URe58t7oNMXKaBlAmGBQAiAgmYUXS5N8eqiIGeiz5xFqdL323do95aTXFcJPbQ71RiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X1IrvlPPBpHiupkKtwDTRDCYNsbfK40b9tFrMaL5d%2FrTJTNccsSmB8TppnvFRsCzvTmm6cQHc6VU6xAaBDxmN6XF41mlXb3ITKBsmei%2FIR7QIG7wYHmizsf940ygVnoLBR26IcXS5FN%2BKq1n4cHsCQhTg1FHdq6HdSC7eGvvODBZc8CwcWuTr1p%2Fy%2BF6jEVJRBQmnqroNbIl2v0NFJSA%2B%2B5vfQ3hgYgeGdcshZHY1id3fCHVOxi1sIIZ4bW10dLspYim014BeQyK01wAXse4THAoxpFhDnCeriLaa%2FXh5TDv%2FbaZwXpqTYnIr5kXyXfWj8oG5i2OS%2BeH5ti5SkSk2ax%2ByvTY6hT491fA4HgM%2FEwAPKNmbK0SIh1K1DMAc5qMFKF936RmkoBNjFuppq9KVGIAIB9SC3TAyAsZ%2BLhngLrJ%2FZtHa%2F2sVna4nQFgqn6EVIAaeVwunJgvgb%2B0feUNvKWSSl0mlYqxYkY5WlqGRo4MXLUNpS4qMp0ZnGQEaGCMn5ju5bqs5zT2ShZ0uZ7fR17uW0vYlr22qHXFXnzkXxKAr3GzYUM9iHQORr8Tjo%2BIYpu2a945OFek6r0fQniWVtjarcLxw5%2Fe%2BXd9p6gQwWH243w1Yy0K%2FaGHAkNnWMa%2B4zLme%2F2u1WtjXMwoOTcxAY6pgHcfiHOYtEDY6FF%2BtNkkDZdtzACrqka7cIeVeCpy76gSSta5Pw6ydAF%2BLK9%2FT0AMk0ALq8hf5uhBL11zg1tOYE1kCW3vZvqf%2Bl3tpw2UgXc2G9wiIlNhVzRax%2FifzAuukV1TSVZb5nDAMc6KYljfuyvQLC2C7JkC8%2BGXduT3xUHh6OZH9%2BaLKcUyVmMsCQCUshDi7TIfDh8T53h9spP9beXrCA4TURJ&X-Amz-Signature=f07ed1c28fc14410a365473ae4fc9c743cdc400e5dd9060129f342d4618b415a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVHKF5J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2Fe4ZrT1%2FKRoOdzOmh51l2URe58t7oNMXKaBlAmGBQAiAgmYUXS5N8eqiIGeiz5xFqdL323do95aTXFcJPbQ71RiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X1IrvlPPBpHiupkKtwDTRDCYNsbfK40b9tFrMaL5d%2FrTJTNccsSmB8TppnvFRsCzvTmm6cQHc6VU6xAaBDxmN6XF41mlXb3ITKBsmei%2FIR7QIG7wYHmizsf940ygVnoLBR26IcXS5FN%2BKq1n4cHsCQhTg1FHdq6HdSC7eGvvODBZc8CwcWuTr1p%2Fy%2BF6jEVJRBQmnqroNbIl2v0NFJSA%2B%2B5vfQ3hgYgeGdcshZHY1id3fCHVOxi1sIIZ4bW10dLspYim014BeQyK01wAXse4THAoxpFhDnCeriLaa%2FXh5TDv%2FbaZwXpqTYnIr5kXyXfWj8oG5i2OS%2BeH5ti5SkSk2ax%2ByvTY6hT491fA4HgM%2FEwAPKNmbK0SIh1K1DMAc5qMFKF936RmkoBNjFuppq9KVGIAIB9SC3TAyAsZ%2BLhngLrJ%2FZtHa%2F2sVna4nQFgqn6EVIAaeVwunJgvgb%2B0feUNvKWSSl0mlYqxYkY5WlqGRo4MXLUNpS4qMp0ZnGQEaGCMn5ju5bqs5zT2ShZ0uZ7fR17uW0vYlr22qHXFXnzkXxKAr3GzYUM9iHQORr8Tjo%2BIYpu2a945OFek6r0fQniWVtjarcLxw5%2Fe%2BXd9p6gQwWH243w1Yy0K%2FaGHAkNnWMa%2B4zLme%2F2u1WtjXMwoOTcxAY6pgHcfiHOYtEDY6FF%2BtNkkDZdtzACrqka7cIeVeCpy76gSSta5Pw6ydAF%2BLK9%2FT0AMk0ALq8hf5uhBL11zg1tOYE1kCW3vZvqf%2Bl3tpw2UgXc2G9wiIlNhVzRax%2FifzAuukV1TSVZb5nDAMc6KYljfuyvQLC2C7JkC8%2BGXduT3xUHh6OZH9%2BaLKcUyVmMsCQCUshDi7TIfDh8T53h9spP9beXrCA4TURJ&X-Amz-Signature=b2dce7bebc985f553f04b8946c2fe5c8eab366080c5e139fa8fb04be57cdbada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVHKF5J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2Fe4ZrT1%2FKRoOdzOmh51l2URe58t7oNMXKaBlAmGBQAiAgmYUXS5N8eqiIGeiz5xFqdL323do95aTXFcJPbQ71RiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X1IrvlPPBpHiupkKtwDTRDCYNsbfK40b9tFrMaL5d%2FrTJTNccsSmB8TppnvFRsCzvTmm6cQHc6VU6xAaBDxmN6XF41mlXb3ITKBsmei%2FIR7QIG7wYHmizsf940ygVnoLBR26IcXS5FN%2BKq1n4cHsCQhTg1FHdq6HdSC7eGvvODBZc8CwcWuTr1p%2Fy%2BF6jEVJRBQmnqroNbIl2v0NFJSA%2B%2B5vfQ3hgYgeGdcshZHY1id3fCHVOxi1sIIZ4bW10dLspYim014BeQyK01wAXse4THAoxpFhDnCeriLaa%2FXh5TDv%2FbaZwXpqTYnIr5kXyXfWj8oG5i2OS%2BeH5ti5SkSk2ax%2ByvTY6hT491fA4HgM%2FEwAPKNmbK0SIh1K1DMAc5qMFKF936RmkoBNjFuppq9KVGIAIB9SC3TAyAsZ%2BLhngLrJ%2FZtHa%2F2sVna4nQFgqn6EVIAaeVwunJgvgb%2B0feUNvKWSSl0mlYqxYkY5WlqGRo4MXLUNpS4qMp0ZnGQEaGCMn5ju5bqs5zT2ShZ0uZ7fR17uW0vYlr22qHXFXnzkXxKAr3GzYUM9iHQORr8Tjo%2BIYpu2a945OFek6r0fQniWVtjarcLxw5%2Fe%2BXd9p6gQwWH243w1Yy0K%2FaGHAkNnWMa%2B4zLme%2F2u1WtjXMwoOTcxAY6pgHcfiHOYtEDY6FF%2BtNkkDZdtzACrqka7cIeVeCpy76gSSta5Pw6ydAF%2BLK9%2FT0AMk0ALq8hf5uhBL11zg1tOYE1kCW3vZvqf%2Bl3tpw2UgXc2G9wiIlNhVzRax%2FifzAuukV1TSVZb5nDAMc6KYljfuyvQLC2C7JkC8%2BGXduT3xUHh6OZH9%2BaLKcUyVmMsCQCUshDi7TIfDh8T53h9spP9beXrCA4TURJ&X-Amz-Signature=65286f7d5421610b9d8915854661b737af4296db13c911c6faa1a8c0186fec1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVHKF5J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2Fe4ZrT1%2FKRoOdzOmh51l2URe58t7oNMXKaBlAmGBQAiAgmYUXS5N8eqiIGeiz5xFqdL323do95aTXFcJPbQ71RiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X1IrvlPPBpHiupkKtwDTRDCYNsbfK40b9tFrMaL5d%2FrTJTNccsSmB8TppnvFRsCzvTmm6cQHc6VU6xAaBDxmN6XF41mlXb3ITKBsmei%2FIR7QIG7wYHmizsf940ygVnoLBR26IcXS5FN%2BKq1n4cHsCQhTg1FHdq6HdSC7eGvvODBZc8CwcWuTr1p%2Fy%2BF6jEVJRBQmnqroNbIl2v0NFJSA%2B%2B5vfQ3hgYgeGdcshZHY1id3fCHVOxi1sIIZ4bW10dLspYim014BeQyK01wAXse4THAoxpFhDnCeriLaa%2FXh5TDv%2FbaZwXpqTYnIr5kXyXfWj8oG5i2OS%2BeH5ti5SkSk2ax%2ByvTY6hT491fA4HgM%2FEwAPKNmbK0SIh1K1DMAc5qMFKF936RmkoBNjFuppq9KVGIAIB9SC3TAyAsZ%2BLhngLrJ%2FZtHa%2F2sVna4nQFgqn6EVIAaeVwunJgvgb%2B0feUNvKWSSl0mlYqxYkY5WlqGRo4MXLUNpS4qMp0ZnGQEaGCMn5ju5bqs5zT2ShZ0uZ7fR17uW0vYlr22qHXFXnzkXxKAr3GzYUM9iHQORr8Tjo%2BIYpu2a945OFek6r0fQniWVtjarcLxw5%2Fe%2BXd9p6gQwWH243w1Yy0K%2FaGHAkNnWMa%2B4zLme%2F2u1WtjXMwoOTcxAY6pgHcfiHOYtEDY6FF%2BtNkkDZdtzACrqka7cIeVeCpy76gSSta5Pw6ydAF%2BLK9%2FT0AMk0ALq8hf5uhBL11zg1tOYE1kCW3vZvqf%2Bl3tpw2UgXc2G9wiIlNhVzRax%2FifzAuukV1TSVZb5nDAMc6KYljfuyvQLC2C7JkC8%2BGXduT3xUHh6OZH9%2BaLKcUyVmMsCQCUshDi7TIfDh8T53h9spP9beXrCA4TURJ&X-Amz-Signature=0412870394927749a63a707eee977a47888f586845073f9b1fa1d33d56ee039b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVHKF5J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2Fe4ZrT1%2FKRoOdzOmh51l2URe58t7oNMXKaBlAmGBQAiAgmYUXS5N8eqiIGeiz5xFqdL323do95aTXFcJPbQ71RiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X1IrvlPPBpHiupkKtwDTRDCYNsbfK40b9tFrMaL5d%2FrTJTNccsSmB8TppnvFRsCzvTmm6cQHc6VU6xAaBDxmN6XF41mlXb3ITKBsmei%2FIR7QIG7wYHmizsf940ygVnoLBR26IcXS5FN%2BKq1n4cHsCQhTg1FHdq6HdSC7eGvvODBZc8CwcWuTr1p%2Fy%2BF6jEVJRBQmnqroNbIl2v0NFJSA%2B%2B5vfQ3hgYgeGdcshZHY1id3fCHVOxi1sIIZ4bW10dLspYim014BeQyK01wAXse4THAoxpFhDnCeriLaa%2FXh5TDv%2FbaZwXpqTYnIr5kXyXfWj8oG5i2OS%2BeH5ti5SkSk2ax%2ByvTY6hT491fA4HgM%2FEwAPKNmbK0SIh1K1DMAc5qMFKF936RmkoBNjFuppq9KVGIAIB9SC3TAyAsZ%2BLhngLrJ%2FZtHa%2F2sVna4nQFgqn6EVIAaeVwunJgvgb%2B0feUNvKWSSl0mlYqxYkY5WlqGRo4MXLUNpS4qMp0ZnGQEaGCMn5ju5bqs5zT2ShZ0uZ7fR17uW0vYlr22qHXFXnzkXxKAr3GzYUM9iHQORr8Tjo%2BIYpu2a945OFek6r0fQniWVtjarcLxw5%2Fe%2BXd9p6gQwWH243w1Yy0K%2FaGHAkNnWMa%2B4zLme%2F2u1WtjXMwoOTcxAY6pgHcfiHOYtEDY6FF%2BtNkkDZdtzACrqka7cIeVeCpy76gSSta5Pw6ydAF%2BLK9%2FT0AMk0ALq8hf5uhBL11zg1tOYE1kCW3vZvqf%2Bl3tpw2UgXc2G9wiIlNhVzRax%2FifzAuukV1TSVZb5nDAMc6KYljfuyvQLC2C7JkC8%2BGXduT3xUHh6OZH9%2BaLKcUyVmMsCQCUshDi7TIfDh8T53h9spP9beXrCA4TURJ&X-Amz-Signature=a3430880892e4c149bdfbf1ad4f88ba45642442a20fa0f1dc7f996b38559bb03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVHKF5J%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T121549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB%2F%2Fe4ZrT1%2FKRoOdzOmh51l2URe58t7oNMXKaBlAmGBQAiAgmYUXS5N8eqiIGeiz5xFqdL323do95aTXFcJPbQ71RiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2X1IrvlPPBpHiupkKtwDTRDCYNsbfK40b9tFrMaL5d%2FrTJTNccsSmB8TppnvFRsCzvTmm6cQHc6VU6xAaBDxmN6XF41mlXb3ITKBsmei%2FIR7QIG7wYHmizsf940ygVnoLBR26IcXS5FN%2BKq1n4cHsCQhTg1FHdq6HdSC7eGvvODBZc8CwcWuTr1p%2Fy%2BF6jEVJRBQmnqroNbIl2v0NFJSA%2B%2B5vfQ3hgYgeGdcshZHY1id3fCHVOxi1sIIZ4bW10dLspYim014BeQyK01wAXse4THAoxpFhDnCeriLaa%2FXh5TDv%2FbaZwXpqTYnIr5kXyXfWj8oG5i2OS%2BeH5ti5SkSk2ax%2ByvTY6hT491fA4HgM%2FEwAPKNmbK0SIh1K1DMAc5qMFKF936RmkoBNjFuppq9KVGIAIB9SC3TAyAsZ%2BLhngLrJ%2FZtHa%2F2sVna4nQFgqn6EVIAaeVwunJgvgb%2B0feUNvKWSSl0mlYqxYkY5WlqGRo4MXLUNpS4qMp0ZnGQEaGCMn5ju5bqs5zT2ShZ0uZ7fR17uW0vYlr22qHXFXnzkXxKAr3GzYUM9iHQORr8Tjo%2BIYpu2a945OFek6r0fQniWVtjarcLxw5%2Fe%2BXd9p6gQwWH243w1Yy0K%2FaGHAkNnWMa%2B4zLme%2F2u1WtjXMwoOTcxAY6pgHcfiHOYtEDY6FF%2BtNkkDZdtzACrqka7cIeVeCpy76gSSta5Pw6ydAF%2BLK9%2FT0AMk0ALq8hf5uhBL11zg1tOYE1kCW3vZvqf%2Bl3tpw2UgXc2G9wiIlNhVzRax%2FifzAuukV1TSVZb5nDAMc6KYljfuyvQLC2C7JkC8%2BGXduT3xUHh6OZH9%2BaLKcUyVmMsCQCUshDi7TIfDh8T53h9spP9beXrCA4TURJ&X-Amz-Signature=a3edeb0b394321f9fd1730ef3c81e3e92eb5a4fa5860bb7a7c11aff18dc8d3ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
