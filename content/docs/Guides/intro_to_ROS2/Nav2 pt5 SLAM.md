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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDYLNID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAiTRnG13Rms4QCbYUACMbuI%2BcqZqJ%2FyX%2FPZTkxC3vQeAiB00XvVWhdhRUxo8gQs9KKn1UuGNjzLrLw4KmrdZf%2FzgCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMTdJHXTdtwd8v0iwAKtwDuW7d5cFSMZse6PnnhyJZpe0%2F9k%2F%2FrPn1PK09t9o%2Fc7opA6xfNWPmiFmAE6BfvC%2Fvg9fGrG6UN9UvC2H5G9R1IPKFBQJc%2F6fZ9P7%2F6WNIHT%2BVGMTOLzgsdJn4ceujiSB55jNpbZc8VSHru82qV7q1gkh0768LuNRWv2zXdy2Zu4H69p0SBZcmkabpXBf%2BKN2livaszO4izSvi4%2BIYY49sZ5mZ3%2BRPRzpBy0ivTk77PS%2F2GHAaIYbCEieXEojbHXC5FIIXu6q4EWy%2BtosGn9%2FtabnjaQnV5wr7odph9tiHGV5nXUvWJHaB2%2FHiWoUSKDGcYPC7tnsckOJQ5AJY6GUmKXo8kLmhhE9RqJ5sbC9wxapkovNdDA6O2tQGeISeY2QdsdGhZ1aDcWWVo0BOJ268Khlrhf9DCROXOOXL7WwfHbf28P7EGPuYOjAb5K8Z%2Fbvh0YxEQYT%2BfOEg4FuFBgfehvkFgcQQCadFb%2BdxTB5u3q35qabGkDgzQ8v4fM%2F6Lz7pK0AyVqRpDLEXhBU%2Bze9rIBAvq6jpVdotsX8bblfSVTQUq6piz7gjGHl04G3DvVdRDT0tJTKb67s5D4TXNfv4vV9zDdwf9Ews1ySQPW6jtOW0k6hMk31mYP7909ww6fz5xAY6pgGARU51UZNL%2Fkh5cUtcy5wiz758%2Fz0Hnvczhajd5EFktfZt0PZkABOMv3cHf62pVMw%2FnZcbCr1widhcDw2QQfqdkd8Y22uqP23TpPWt9TBtxkP4KrbU4JJLeY%2BgCdtpZtPLPc9K%2FW3e%2FaGeYvFymsdaezTXEZQgaf7JFs7SKso5MlfCBIxtF3NwV8wLM9mhe4%2BZH%2FNX6J%2FWCLh%2BxhPGoK2y%2FdTBxHLO&X-Amz-Signature=ef9f1a6b7226ebbb1d16f0b7edc0d0fa867bb42727fa53f499a44348865e21c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDYLNID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAiTRnG13Rms4QCbYUACMbuI%2BcqZqJ%2FyX%2FPZTkxC3vQeAiB00XvVWhdhRUxo8gQs9KKn1UuGNjzLrLw4KmrdZf%2FzgCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMTdJHXTdtwd8v0iwAKtwDuW7d5cFSMZse6PnnhyJZpe0%2F9k%2F%2FrPn1PK09t9o%2Fc7opA6xfNWPmiFmAE6BfvC%2Fvg9fGrG6UN9UvC2H5G9R1IPKFBQJc%2F6fZ9P7%2F6WNIHT%2BVGMTOLzgsdJn4ceujiSB55jNpbZc8VSHru82qV7q1gkh0768LuNRWv2zXdy2Zu4H69p0SBZcmkabpXBf%2BKN2livaszO4izSvi4%2BIYY49sZ5mZ3%2BRPRzpBy0ivTk77PS%2F2GHAaIYbCEieXEojbHXC5FIIXu6q4EWy%2BtosGn9%2FtabnjaQnV5wr7odph9tiHGV5nXUvWJHaB2%2FHiWoUSKDGcYPC7tnsckOJQ5AJY6GUmKXo8kLmhhE9RqJ5sbC9wxapkovNdDA6O2tQGeISeY2QdsdGhZ1aDcWWVo0BOJ268Khlrhf9DCROXOOXL7WwfHbf28P7EGPuYOjAb5K8Z%2Fbvh0YxEQYT%2BfOEg4FuFBgfehvkFgcQQCadFb%2BdxTB5u3q35qabGkDgzQ8v4fM%2F6Lz7pK0AyVqRpDLEXhBU%2Bze9rIBAvq6jpVdotsX8bblfSVTQUq6piz7gjGHl04G3DvVdRDT0tJTKb67s5D4TXNfv4vV9zDdwf9Ews1ySQPW6jtOW0k6hMk31mYP7909ww6fz5xAY6pgGARU51UZNL%2Fkh5cUtcy5wiz758%2Fz0Hnvczhajd5EFktfZt0PZkABOMv3cHf62pVMw%2FnZcbCr1widhcDw2QQfqdkd8Y22uqP23TpPWt9TBtxkP4KrbU4JJLeY%2BgCdtpZtPLPc9K%2FW3e%2FaGeYvFymsdaezTXEZQgaf7JFs7SKso5MlfCBIxtF3NwV8wLM9mhe4%2BZH%2FNX6J%2FWCLh%2BxhPGoK2y%2FdTBxHLO&X-Amz-Signature=ef8e1a088d9466c0f891581db239370e8c01abf769f3b9f59681b044c31da176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDYLNID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAiTRnG13Rms4QCbYUACMbuI%2BcqZqJ%2FyX%2FPZTkxC3vQeAiB00XvVWhdhRUxo8gQs9KKn1UuGNjzLrLw4KmrdZf%2FzgCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMTdJHXTdtwd8v0iwAKtwDuW7d5cFSMZse6PnnhyJZpe0%2F9k%2F%2FrPn1PK09t9o%2Fc7opA6xfNWPmiFmAE6BfvC%2Fvg9fGrG6UN9UvC2H5G9R1IPKFBQJc%2F6fZ9P7%2F6WNIHT%2BVGMTOLzgsdJn4ceujiSB55jNpbZc8VSHru82qV7q1gkh0768LuNRWv2zXdy2Zu4H69p0SBZcmkabpXBf%2BKN2livaszO4izSvi4%2BIYY49sZ5mZ3%2BRPRzpBy0ivTk77PS%2F2GHAaIYbCEieXEojbHXC5FIIXu6q4EWy%2BtosGn9%2FtabnjaQnV5wr7odph9tiHGV5nXUvWJHaB2%2FHiWoUSKDGcYPC7tnsckOJQ5AJY6GUmKXo8kLmhhE9RqJ5sbC9wxapkovNdDA6O2tQGeISeY2QdsdGhZ1aDcWWVo0BOJ268Khlrhf9DCROXOOXL7WwfHbf28P7EGPuYOjAb5K8Z%2Fbvh0YxEQYT%2BfOEg4FuFBgfehvkFgcQQCadFb%2BdxTB5u3q35qabGkDgzQ8v4fM%2F6Lz7pK0AyVqRpDLEXhBU%2Bze9rIBAvq6jpVdotsX8bblfSVTQUq6piz7gjGHl04G3DvVdRDT0tJTKb67s5D4TXNfv4vV9zDdwf9Ews1ySQPW6jtOW0k6hMk31mYP7909ww6fz5xAY6pgGARU51UZNL%2Fkh5cUtcy5wiz758%2Fz0Hnvczhajd5EFktfZt0PZkABOMv3cHf62pVMw%2FnZcbCr1widhcDw2QQfqdkd8Y22uqP23TpPWt9TBtxkP4KrbU4JJLeY%2BgCdtpZtPLPc9K%2FW3e%2FaGeYvFymsdaezTXEZQgaf7JFs7SKso5MlfCBIxtF3NwV8wLM9mhe4%2BZH%2FNX6J%2FWCLh%2BxhPGoK2y%2FdTBxHLO&X-Amz-Signature=320fca2527de1fc1ab10e0a30fd683ee81ae9b08a1d8c093e4740880c4b50f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDYLNID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAiTRnG13Rms4QCbYUACMbuI%2BcqZqJ%2FyX%2FPZTkxC3vQeAiB00XvVWhdhRUxo8gQs9KKn1UuGNjzLrLw4KmrdZf%2FzgCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMTdJHXTdtwd8v0iwAKtwDuW7d5cFSMZse6PnnhyJZpe0%2F9k%2F%2FrPn1PK09t9o%2Fc7opA6xfNWPmiFmAE6BfvC%2Fvg9fGrG6UN9UvC2H5G9R1IPKFBQJc%2F6fZ9P7%2F6WNIHT%2BVGMTOLzgsdJn4ceujiSB55jNpbZc8VSHru82qV7q1gkh0768LuNRWv2zXdy2Zu4H69p0SBZcmkabpXBf%2BKN2livaszO4izSvi4%2BIYY49sZ5mZ3%2BRPRzpBy0ivTk77PS%2F2GHAaIYbCEieXEojbHXC5FIIXu6q4EWy%2BtosGn9%2FtabnjaQnV5wr7odph9tiHGV5nXUvWJHaB2%2FHiWoUSKDGcYPC7tnsckOJQ5AJY6GUmKXo8kLmhhE9RqJ5sbC9wxapkovNdDA6O2tQGeISeY2QdsdGhZ1aDcWWVo0BOJ268Khlrhf9DCROXOOXL7WwfHbf28P7EGPuYOjAb5K8Z%2Fbvh0YxEQYT%2BfOEg4FuFBgfehvkFgcQQCadFb%2BdxTB5u3q35qabGkDgzQ8v4fM%2F6Lz7pK0AyVqRpDLEXhBU%2Bze9rIBAvq6jpVdotsX8bblfSVTQUq6piz7gjGHl04G3DvVdRDT0tJTKb67s5D4TXNfv4vV9zDdwf9Ews1ySQPW6jtOW0k6hMk31mYP7909ww6fz5xAY6pgGARU51UZNL%2Fkh5cUtcy5wiz758%2Fz0Hnvczhajd5EFktfZt0PZkABOMv3cHf62pVMw%2FnZcbCr1widhcDw2QQfqdkd8Y22uqP23TpPWt9TBtxkP4KrbU4JJLeY%2BgCdtpZtPLPc9K%2FW3e%2FaGeYvFymsdaezTXEZQgaf7JFs7SKso5MlfCBIxtF3NwV8wLM9mhe4%2BZH%2FNX6J%2FWCLh%2BxhPGoK2y%2FdTBxHLO&X-Amz-Signature=0dbd094c3ce5d8ff1e0606de20912f4e6c51c85cd43f307397cd71d596cc8f24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDYLNID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAiTRnG13Rms4QCbYUACMbuI%2BcqZqJ%2FyX%2FPZTkxC3vQeAiB00XvVWhdhRUxo8gQs9KKn1UuGNjzLrLw4KmrdZf%2FzgCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMTdJHXTdtwd8v0iwAKtwDuW7d5cFSMZse6PnnhyJZpe0%2F9k%2F%2FrPn1PK09t9o%2Fc7opA6xfNWPmiFmAE6BfvC%2Fvg9fGrG6UN9UvC2H5G9R1IPKFBQJc%2F6fZ9P7%2F6WNIHT%2BVGMTOLzgsdJn4ceujiSB55jNpbZc8VSHru82qV7q1gkh0768LuNRWv2zXdy2Zu4H69p0SBZcmkabpXBf%2BKN2livaszO4izSvi4%2BIYY49sZ5mZ3%2BRPRzpBy0ivTk77PS%2F2GHAaIYbCEieXEojbHXC5FIIXu6q4EWy%2BtosGn9%2FtabnjaQnV5wr7odph9tiHGV5nXUvWJHaB2%2FHiWoUSKDGcYPC7tnsckOJQ5AJY6GUmKXo8kLmhhE9RqJ5sbC9wxapkovNdDA6O2tQGeISeY2QdsdGhZ1aDcWWVo0BOJ268Khlrhf9DCROXOOXL7WwfHbf28P7EGPuYOjAb5K8Z%2Fbvh0YxEQYT%2BfOEg4FuFBgfehvkFgcQQCadFb%2BdxTB5u3q35qabGkDgzQ8v4fM%2F6Lz7pK0AyVqRpDLEXhBU%2Bze9rIBAvq6jpVdotsX8bblfSVTQUq6piz7gjGHl04G3DvVdRDT0tJTKb67s5D4TXNfv4vV9zDdwf9Ews1ySQPW6jtOW0k6hMk31mYP7909ww6fz5xAY6pgGARU51UZNL%2Fkh5cUtcy5wiz758%2Fz0Hnvczhajd5EFktfZt0PZkABOMv3cHf62pVMw%2FnZcbCr1widhcDw2QQfqdkd8Y22uqP23TpPWt9TBtxkP4KrbU4JJLeY%2BgCdtpZtPLPc9K%2FW3e%2FaGeYvFymsdaezTXEZQgaf7JFs7SKso5MlfCBIxtF3NwV8wLM9mhe4%2BZH%2FNX6J%2FWCLh%2BxhPGoK2y%2FdTBxHLO&X-Amz-Signature=b60e058ea73e2f76c04ff47a1c1073bb3b790b3df1dbc7513daa30f4fcf1afd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDYLNID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAiTRnG13Rms4QCbYUACMbuI%2BcqZqJ%2FyX%2FPZTkxC3vQeAiB00XvVWhdhRUxo8gQs9KKn1UuGNjzLrLw4KmrdZf%2FzgCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMTdJHXTdtwd8v0iwAKtwDuW7d5cFSMZse6PnnhyJZpe0%2F9k%2F%2FrPn1PK09t9o%2Fc7opA6xfNWPmiFmAE6BfvC%2Fvg9fGrG6UN9UvC2H5G9R1IPKFBQJc%2F6fZ9P7%2F6WNIHT%2BVGMTOLzgsdJn4ceujiSB55jNpbZc8VSHru82qV7q1gkh0768LuNRWv2zXdy2Zu4H69p0SBZcmkabpXBf%2BKN2livaszO4izSvi4%2BIYY49sZ5mZ3%2BRPRzpBy0ivTk77PS%2F2GHAaIYbCEieXEojbHXC5FIIXu6q4EWy%2BtosGn9%2FtabnjaQnV5wr7odph9tiHGV5nXUvWJHaB2%2FHiWoUSKDGcYPC7tnsckOJQ5AJY6GUmKXo8kLmhhE9RqJ5sbC9wxapkovNdDA6O2tQGeISeY2QdsdGhZ1aDcWWVo0BOJ268Khlrhf9DCROXOOXL7WwfHbf28P7EGPuYOjAb5K8Z%2Fbvh0YxEQYT%2BfOEg4FuFBgfehvkFgcQQCadFb%2BdxTB5u3q35qabGkDgzQ8v4fM%2F6Lz7pK0AyVqRpDLEXhBU%2Bze9rIBAvq6jpVdotsX8bblfSVTQUq6piz7gjGHl04G3DvVdRDT0tJTKb67s5D4TXNfv4vV9zDdwf9Ews1ySQPW6jtOW0k6hMk31mYP7909ww6fz5xAY6pgGARU51UZNL%2Fkh5cUtcy5wiz758%2Fz0Hnvczhajd5EFktfZt0PZkABOMv3cHf62pVMw%2FnZcbCr1widhcDw2QQfqdkd8Y22uqP23TpPWt9TBtxkP4KrbU4JJLeY%2BgCdtpZtPLPc9K%2FW3e%2FaGeYvFymsdaezTXEZQgaf7JFs7SKso5MlfCBIxtF3NwV8wLM9mhe4%2BZH%2FNX6J%2FWCLh%2BxhPGoK2y%2FdTBxHLO&X-Amz-Signature=487c1595aa3ac6c8e9515bbd243b2b673d73bd2f1b704087f6c7b9d75bdc078c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDYLNID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAiTRnG13Rms4QCbYUACMbuI%2BcqZqJ%2FyX%2FPZTkxC3vQeAiB00XvVWhdhRUxo8gQs9KKn1UuGNjzLrLw4KmrdZf%2FzgCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMTdJHXTdtwd8v0iwAKtwDuW7d5cFSMZse6PnnhyJZpe0%2F9k%2F%2FrPn1PK09t9o%2Fc7opA6xfNWPmiFmAE6BfvC%2Fvg9fGrG6UN9UvC2H5G9R1IPKFBQJc%2F6fZ9P7%2F6WNIHT%2BVGMTOLzgsdJn4ceujiSB55jNpbZc8VSHru82qV7q1gkh0768LuNRWv2zXdy2Zu4H69p0SBZcmkabpXBf%2BKN2livaszO4izSvi4%2BIYY49sZ5mZ3%2BRPRzpBy0ivTk77PS%2F2GHAaIYbCEieXEojbHXC5FIIXu6q4EWy%2BtosGn9%2FtabnjaQnV5wr7odph9tiHGV5nXUvWJHaB2%2FHiWoUSKDGcYPC7tnsckOJQ5AJY6GUmKXo8kLmhhE9RqJ5sbC9wxapkovNdDA6O2tQGeISeY2QdsdGhZ1aDcWWVo0BOJ268Khlrhf9DCROXOOXL7WwfHbf28P7EGPuYOjAb5K8Z%2Fbvh0YxEQYT%2BfOEg4FuFBgfehvkFgcQQCadFb%2BdxTB5u3q35qabGkDgzQ8v4fM%2F6Lz7pK0AyVqRpDLEXhBU%2Bze9rIBAvq6jpVdotsX8bblfSVTQUq6piz7gjGHl04G3DvVdRDT0tJTKb67s5D4TXNfv4vV9zDdwf9Ews1ySQPW6jtOW0k6hMk31mYP7909ww6fz5xAY6pgGARU51UZNL%2Fkh5cUtcy5wiz758%2Fz0Hnvczhajd5EFktfZt0PZkABOMv3cHf62pVMw%2FnZcbCr1widhcDw2QQfqdkd8Y22uqP23TpPWt9TBtxkP4KrbU4JJLeY%2BgCdtpZtPLPc9K%2FW3e%2FaGeYvFymsdaezTXEZQgaf7JFs7SKso5MlfCBIxtF3NwV8wLM9mhe4%2BZH%2FNX6J%2FWCLh%2BxhPGoK2y%2FdTBxHLO&X-Amz-Signature=e4c2463643a963e987455e3fcb8047d907c6b7dcdb3250e0b34b03b1bffd47ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDYLNID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAiTRnG13Rms4QCbYUACMbuI%2BcqZqJ%2FyX%2FPZTkxC3vQeAiB00XvVWhdhRUxo8gQs9KKn1UuGNjzLrLw4KmrdZf%2FzgCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMTdJHXTdtwd8v0iwAKtwDuW7d5cFSMZse6PnnhyJZpe0%2F9k%2F%2FrPn1PK09t9o%2Fc7opA6xfNWPmiFmAE6BfvC%2Fvg9fGrG6UN9UvC2H5G9R1IPKFBQJc%2F6fZ9P7%2F6WNIHT%2BVGMTOLzgsdJn4ceujiSB55jNpbZc8VSHru82qV7q1gkh0768LuNRWv2zXdy2Zu4H69p0SBZcmkabpXBf%2BKN2livaszO4izSvi4%2BIYY49sZ5mZ3%2BRPRzpBy0ivTk77PS%2F2GHAaIYbCEieXEojbHXC5FIIXu6q4EWy%2BtosGn9%2FtabnjaQnV5wr7odph9tiHGV5nXUvWJHaB2%2FHiWoUSKDGcYPC7tnsckOJQ5AJY6GUmKXo8kLmhhE9RqJ5sbC9wxapkovNdDA6O2tQGeISeY2QdsdGhZ1aDcWWVo0BOJ268Khlrhf9DCROXOOXL7WwfHbf28P7EGPuYOjAb5K8Z%2Fbvh0YxEQYT%2BfOEg4FuFBgfehvkFgcQQCadFb%2BdxTB5u3q35qabGkDgzQ8v4fM%2F6Lz7pK0AyVqRpDLEXhBU%2Bze9rIBAvq6jpVdotsX8bblfSVTQUq6piz7gjGHl04G3DvVdRDT0tJTKb67s5D4TXNfv4vV9zDdwf9Ews1ySQPW6jtOW0k6hMk31mYP7909ww6fz5xAY6pgGARU51UZNL%2Fkh5cUtcy5wiz758%2Fz0Hnvczhajd5EFktfZt0PZkABOMv3cHf62pVMw%2FnZcbCr1widhcDw2QQfqdkd8Y22uqP23TpPWt9TBtxkP4KrbU4JJLeY%2BgCdtpZtPLPc9K%2FW3e%2FaGeYvFymsdaezTXEZQgaf7JFs7SKso5MlfCBIxtF3NwV8wLM9mhe4%2BZH%2FNX6J%2FWCLh%2BxhPGoK2y%2FdTBxHLO&X-Amz-Signature=41caf7d325747fc3fd2e828fbc551a6d7b4c9c2f044e3bf19409111fbde6c4cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDYLNID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAiTRnG13Rms4QCbYUACMbuI%2BcqZqJ%2FyX%2FPZTkxC3vQeAiB00XvVWhdhRUxo8gQs9KKn1UuGNjzLrLw4KmrdZf%2FzgCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMTdJHXTdtwd8v0iwAKtwDuW7d5cFSMZse6PnnhyJZpe0%2F9k%2F%2FrPn1PK09t9o%2Fc7opA6xfNWPmiFmAE6BfvC%2Fvg9fGrG6UN9UvC2H5G9R1IPKFBQJc%2F6fZ9P7%2F6WNIHT%2BVGMTOLzgsdJn4ceujiSB55jNpbZc8VSHru82qV7q1gkh0768LuNRWv2zXdy2Zu4H69p0SBZcmkabpXBf%2BKN2livaszO4izSvi4%2BIYY49sZ5mZ3%2BRPRzpBy0ivTk77PS%2F2GHAaIYbCEieXEojbHXC5FIIXu6q4EWy%2BtosGn9%2FtabnjaQnV5wr7odph9tiHGV5nXUvWJHaB2%2FHiWoUSKDGcYPC7tnsckOJQ5AJY6GUmKXo8kLmhhE9RqJ5sbC9wxapkovNdDA6O2tQGeISeY2QdsdGhZ1aDcWWVo0BOJ268Khlrhf9DCROXOOXL7WwfHbf28P7EGPuYOjAb5K8Z%2Fbvh0YxEQYT%2BfOEg4FuFBgfehvkFgcQQCadFb%2BdxTB5u3q35qabGkDgzQ8v4fM%2F6Lz7pK0AyVqRpDLEXhBU%2Bze9rIBAvq6jpVdotsX8bblfSVTQUq6piz7gjGHl04G3DvVdRDT0tJTKb67s5D4TXNfv4vV9zDdwf9Ews1ySQPW6jtOW0k6hMk31mYP7909ww6fz5xAY6pgGARU51UZNL%2Fkh5cUtcy5wiz758%2Fz0Hnvczhajd5EFktfZt0PZkABOMv3cHf62pVMw%2FnZcbCr1widhcDw2QQfqdkd8Y22uqP23TpPWt9TBtxkP4KrbU4JJLeY%2BgCdtpZtPLPc9K%2FW3e%2FaGeYvFymsdaezTXEZQgaf7JFs7SKso5MlfCBIxtF3NwV8wLM9mhe4%2BZH%2FNX6J%2FWCLh%2BxhPGoK2y%2FdTBxHLO&X-Amz-Signature=fb173788d2c90c83ce99992cae9f9b63168ecd99a327d4270c1dea43062124f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDYLNID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAiTRnG13Rms4QCbYUACMbuI%2BcqZqJ%2FyX%2FPZTkxC3vQeAiB00XvVWhdhRUxo8gQs9KKn1UuGNjzLrLw4KmrdZf%2FzgCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMTdJHXTdtwd8v0iwAKtwDuW7d5cFSMZse6PnnhyJZpe0%2F9k%2F%2FrPn1PK09t9o%2Fc7opA6xfNWPmiFmAE6BfvC%2Fvg9fGrG6UN9UvC2H5G9R1IPKFBQJc%2F6fZ9P7%2F6WNIHT%2BVGMTOLzgsdJn4ceujiSB55jNpbZc8VSHru82qV7q1gkh0768LuNRWv2zXdy2Zu4H69p0SBZcmkabpXBf%2BKN2livaszO4izSvi4%2BIYY49sZ5mZ3%2BRPRzpBy0ivTk77PS%2F2GHAaIYbCEieXEojbHXC5FIIXu6q4EWy%2BtosGn9%2FtabnjaQnV5wr7odph9tiHGV5nXUvWJHaB2%2FHiWoUSKDGcYPC7tnsckOJQ5AJY6GUmKXo8kLmhhE9RqJ5sbC9wxapkovNdDA6O2tQGeISeY2QdsdGhZ1aDcWWVo0BOJ268Khlrhf9DCROXOOXL7WwfHbf28P7EGPuYOjAb5K8Z%2Fbvh0YxEQYT%2BfOEg4FuFBgfehvkFgcQQCadFb%2BdxTB5u3q35qabGkDgzQ8v4fM%2F6Lz7pK0AyVqRpDLEXhBU%2Bze9rIBAvq6jpVdotsX8bblfSVTQUq6piz7gjGHl04G3DvVdRDT0tJTKb67s5D4TXNfv4vV9zDdwf9Ews1ySQPW6jtOW0k6hMk31mYP7909ww6fz5xAY6pgGARU51UZNL%2Fkh5cUtcy5wiz758%2Fz0Hnvczhajd5EFktfZt0PZkABOMv3cHf62pVMw%2FnZcbCr1widhcDw2QQfqdkd8Y22uqP23TpPWt9TBtxkP4KrbU4JJLeY%2BgCdtpZtPLPc9K%2FW3e%2FaGeYvFymsdaezTXEZQgaf7JFs7SKso5MlfCBIxtF3NwV8wLM9mhe4%2BZH%2FNX6J%2FWCLh%2BxhPGoK2y%2FdTBxHLO&X-Amz-Signature=d7ac4d0ea01af054b4f91dd0f8f7c683881ad78e51f89d542080f9b156d6116c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDYLNID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAiTRnG13Rms4QCbYUACMbuI%2BcqZqJ%2FyX%2FPZTkxC3vQeAiB00XvVWhdhRUxo8gQs9KKn1UuGNjzLrLw4KmrdZf%2FzgCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMTdJHXTdtwd8v0iwAKtwDuW7d5cFSMZse6PnnhyJZpe0%2F9k%2F%2FrPn1PK09t9o%2Fc7opA6xfNWPmiFmAE6BfvC%2Fvg9fGrG6UN9UvC2H5G9R1IPKFBQJc%2F6fZ9P7%2F6WNIHT%2BVGMTOLzgsdJn4ceujiSB55jNpbZc8VSHru82qV7q1gkh0768LuNRWv2zXdy2Zu4H69p0SBZcmkabpXBf%2BKN2livaszO4izSvi4%2BIYY49sZ5mZ3%2BRPRzpBy0ivTk77PS%2F2GHAaIYbCEieXEojbHXC5FIIXu6q4EWy%2BtosGn9%2FtabnjaQnV5wr7odph9tiHGV5nXUvWJHaB2%2FHiWoUSKDGcYPC7tnsckOJQ5AJY6GUmKXo8kLmhhE9RqJ5sbC9wxapkovNdDA6O2tQGeISeY2QdsdGhZ1aDcWWVo0BOJ268Khlrhf9DCROXOOXL7WwfHbf28P7EGPuYOjAb5K8Z%2Fbvh0YxEQYT%2BfOEg4FuFBgfehvkFgcQQCadFb%2BdxTB5u3q35qabGkDgzQ8v4fM%2F6Lz7pK0AyVqRpDLEXhBU%2Bze9rIBAvq6jpVdotsX8bblfSVTQUq6piz7gjGHl04G3DvVdRDT0tJTKb67s5D4TXNfv4vV9zDdwf9Ews1ySQPW6jtOW0k6hMk31mYP7909ww6fz5xAY6pgGARU51UZNL%2Fkh5cUtcy5wiz758%2Fz0Hnvczhajd5EFktfZt0PZkABOMv3cHf62pVMw%2FnZcbCr1widhcDw2QQfqdkd8Y22uqP23TpPWt9TBtxkP4KrbU4JJLeY%2BgCdtpZtPLPc9K%2FW3e%2FaGeYvFymsdaezTXEZQgaf7JFs7SKso5MlfCBIxtF3NwV8wLM9mhe4%2BZH%2FNX6J%2FWCLh%2BxhPGoK2y%2FdTBxHLO&X-Amz-Signature=c345bae9012a52d74a7c3f2c722a024fe6b18710a1246dec5c74544b1ec1ecb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDYLNID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAiTRnG13Rms4QCbYUACMbuI%2BcqZqJ%2FyX%2FPZTkxC3vQeAiB00XvVWhdhRUxo8gQs9KKn1UuGNjzLrLw4KmrdZf%2FzgCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMTdJHXTdtwd8v0iwAKtwDuW7d5cFSMZse6PnnhyJZpe0%2F9k%2F%2FrPn1PK09t9o%2Fc7opA6xfNWPmiFmAE6BfvC%2Fvg9fGrG6UN9UvC2H5G9R1IPKFBQJc%2F6fZ9P7%2F6WNIHT%2BVGMTOLzgsdJn4ceujiSB55jNpbZc8VSHru82qV7q1gkh0768LuNRWv2zXdy2Zu4H69p0SBZcmkabpXBf%2BKN2livaszO4izSvi4%2BIYY49sZ5mZ3%2BRPRzpBy0ivTk77PS%2F2GHAaIYbCEieXEojbHXC5FIIXu6q4EWy%2BtosGn9%2FtabnjaQnV5wr7odph9tiHGV5nXUvWJHaB2%2FHiWoUSKDGcYPC7tnsckOJQ5AJY6GUmKXo8kLmhhE9RqJ5sbC9wxapkovNdDA6O2tQGeISeY2QdsdGhZ1aDcWWVo0BOJ268Khlrhf9DCROXOOXL7WwfHbf28P7EGPuYOjAb5K8Z%2Fbvh0YxEQYT%2BfOEg4FuFBgfehvkFgcQQCadFb%2BdxTB5u3q35qabGkDgzQ8v4fM%2F6Lz7pK0AyVqRpDLEXhBU%2Bze9rIBAvq6jpVdotsX8bblfSVTQUq6piz7gjGHl04G3DvVdRDT0tJTKb67s5D4TXNfv4vV9zDdwf9Ews1ySQPW6jtOW0k6hMk31mYP7909ww6fz5xAY6pgGARU51UZNL%2Fkh5cUtcy5wiz758%2Fz0Hnvczhajd5EFktfZt0PZkABOMv3cHf62pVMw%2FnZcbCr1widhcDw2QQfqdkd8Y22uqP23TpPWt9TBtxkP4KrbU4JJLeY%2BgCdtpZtPLPc9K%2FW3e%2FaGeYvFymsdaezTXEZQgaf7JFs7SKso5MlfCBIxtF3NwV8wLM9mhe4%2BZH%2FNX6J%2FWCLh%2BxhPGoK2y%2FdTBxHLO&X-Amz-Signature=16b8e8994bd85f6dca5d8dd84043db08672940a8215af44c248658c79dcd6ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDYLNID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAiTRnG13Rms4QCbYUACMbuI%2BcqZqJ%2FyX%2FPZTkxC3vQeAiB00XvVWhdhRUxo8gQs9KKn1UuGNjzLrLw4KmrdZf%2FzgCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMTdJHXTdtwd8v0iwAKtwDuW7d5cFSMZse6PnnhyJZpe0%2F9k%2F%2FrPn1PK09t9o%2Fc7opA6xfNWPmiFmAE6BfvC%2Fvg9fGrG6UN9UvC2H5G9R1IPKFBQJc%2F6fZ9P7%2F6WNIHT%2BVGMTOLzgsdJn4ceujiSB55jNpbZc8VSHru82qV7q1gkh0768LuNRWv2zXdy2Zu4H69p0SBZcmkabpXBf%2BKN2livaszO4izSvi4%2BIYY49sZ5mZ3%2BRPRzpBy0ivTk77PS%2F2GHAaIYbCEieXEojbHXC5FIIXu6q4EWy%2BtosGn9%2FtabnjaQnV5wr7odph9tiHGV5nXUvWJHaB2%2FHiWoUSKDGcYPC7tnsckOJQ5AJY6GUmKXo8kLmhhE9RqJ5sbC9wxapkovNdDA6O2tQGeISeY2QdsdGhZ1aDcWWVo0BOJ268Khlrhf9DCROXOOXL7WwfHbf28P7EGPuYOjAb5K8Z%2Fbvh0YxEQYT%2BfOEg4FuFBgfehvkFgcQQCadFb%2BdxTB5u3q35qabGkDgzQ8v4fM%2F6Lz7pK0AyVqRpDLEXhBU%2Bze9rIBAvq6jpVdotsX8bblfSVTQUq6piz7gjGHl04G3DvVdRDT0tJTKb67s5D4TXNfv4vV9zDdwf9Ews1ySQPW6jtOW0k6hMk31mYP7909ww6fz5xAY6pgGARU51UZNL%2Fkh5cUtcy5wiz758%2Fz0Hnvczhajd5EFktfZt0PZkABOMv3cHf62pVMw%2FnZcbCr1widhcDw2QQfqdkd8Y22uqP23TpPWt9TBtxkP4KrbU4JJLeY%2BgCdtpZtPLPc9K%2FW3e%2FaGeYvFymsdaezTXEZQgaf7JFs7SKso5MlfCBIxtF3NwV8wLM9mhe4%2BZH%2FNX6J%2FWCLh%2BxhPGoK2y%2FdTBxHLO&X-Amz-Signature=425e544f2089828a65ec0a69b54e71c876255734df9e2b5cb6792b6ca37bce51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDYLNID%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T004451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIAiTRnG13Rms4QCbYUACMbuI%2BcqZqJ%2FyX%2FPZTkxC3vQeAiB00XvVWhdhRUxo8gQs9KKn1UuGNjzLrLw4KmrdZf%2FzgCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMTdJHXTdtwd8v0iwAKtwDuW7d5cFSMZse6PnnhyJZpe0%2F9k%2F%2FrPn1PK09t9o%2Fc7opA6xfNWPmiFmAE6BfvC%2Fvg9fGrG6UN9UvC2H5G9R1IPKFBQJc%2F6fZ9P7%2F6WNIHT%2BVGMTOLzgsdJn4ceujiSB55jNpbZc8VSHru82qV7q1gkh0768LuNRWv2zXdy2Zu4H69p0SBZcmkabpXBf%2BKN2livaszO4izSvi4%2BIYY49sZ5mZ3%2BRPRzpBy0ivTk77PS%2F2GHAaIYbCEieXEojbHXC5FIIXu6q4EWy%2BtosGn9%2FtabnjaQnV5wr7odph9tiHGV5nXUvWJHaB2%2FHiWoUSKDGcYPC7tnsckOJQ5AJY6GUmKXo8kLmhhE9RqJ5sbC9wxapkovNdDA6O2tQGeISeY2QdsdGhZ1aDcWWVo0BOJ268Khlrhf9DCROXOOXL7WwfHbf28P7EGPuYOjAb5K8Z%2Fbvh0YxEQYT%2BfOEg4FuFBgfehvkFgcQQCadFb%2BdxTB5u3q35qabGkDgzQ8v4fM%2F6Lz7pK0AyVqRpDLEXhBU%2Bze9rIBAvq6jpVdotsX8bblfSVTQUq6piz7gjGHl04G3DvVdRDT0tJTKb67s5D4TXNfv4vV9zDdwf9Ews1ySQPW6jtOW0k6hMk31mYP7909ww6fz5xAY6pgGARU51UZNL%2Fkh5cUtcy5wiz758%2Fz0Hnvczhajd5EFktfZt0PZkABOMv3cHf62pVMw%2FnZcbCr1widhcDw2QQfqdkd8Y22uqP23TpPWt9TBtxkP4KrbU4JJLeY%2BgCdtpZtPLPc9K%2FW3e%2FaGeYvFymsdaezTXEZQgaf7JFs7SKso5MlfCBIxtF3NwV8wLM9mhe4%2BZH%2FNX6J%2FWCLh%2BxhPGoK2y%2FdTBxHLO&X-Amz-Signature=aa33368565d08033012c8eb5794a81cb4d94ffc86abffff6f85aac0ed92dbc5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
