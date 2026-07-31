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
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JOTTNQ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRbt%2BkzGHBfI52w0%2BpgOHckcCC2Bjw8xi4%2B1uSaVcAaAiARhgBApq8MIoZus%2Bvgaps4qTUV399brHWvjPrrdj7fMSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72p6bsRS4HIQvXblKtwDHx4NsTXTsDKvDcTFExUxPkYjWeK%2FSqVAfbbDJg3ffTvtU2Jz0an4p%2F7F6gcz5ZqgfQlNDLAw9pMaLUubDp2wbzrcMuPu01X965laFBNVWvOcb0OoCYQdjhqvgzTP1UgnoL0135hJuHgBsI7SMibAGzPHTu42mSV2JWpvlt94kMpxCO1RJyxYHD71SAnU2vAl7QZcLFRVLfoiJQ8fEfzqJtBVbmePse1knk9P2VkgVsM8GqZs4PPgN5LBxcUNDKkpg92lFMZ9AyAR2Qeeo7Vre3uEuf205%2F0WZoAioWQJMy2FOcTWY0naPpa2KeUl5sq7pblQXDq4jFmyDPv9Re5OXEBRb2gODLfj%2BwGH%2F5FDIK5A5aJF%2FJQfqZP8jtB%2Fkoi24MvT%2BatQwppqO9HaWxGMGFsH%2FXfta63gNuRd00VOcZWqLOY0RNaM2IQkGcsHEV%2F3ALb%2BkD21G5rYtJ%2B9f48bpKXLCXqpAw4%2FMR0tbsciC9b4Y0NdtHZ8bgJTjdm4bJEf7xVMJWdM19UcRHr3Bq01S3b34XEyxykrcCfKcWFz0JpPxn5jqQs%2FHtmFawNu9AweBS%2Btmk8DHXeDDC01817s0fgyewwR8drXEJIQ16v1nKSSFsQzewC0g3SVLvEwgpaw0wY6pgGdjSaRTCEjWziTIGJpbIYdwaayUBIifVoT3x28BmcWDkDZ%2F8ppueUc%2Fr7KUwQAdT%2FwLQ%2BgtjYtn64wvGDDCAkBzBvhjY45cYBKQVIEuj%2Ff3v%2BLLE4%2BOgfxZ6X7hl88xN%2F0aSJy3qRHLmVMiw6SR%2FX9B7u%2Bp86f44vDy8BnkKhGyzjugZQngFCBLtA7J1XthZeQbP%2FCQSF3xq1A5XfuqcrdiswTwKQ8&X-Amz-Signature=84b0b171e5deb5b85114eca1b452cf20918c94355a29bc505d007d375968156c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JOTTNQ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRbt%2BkzGHBfI52w0%2BpgOHckcCC2Bjw8xi4%2B1uSaVcAaAiARhgBApq8MIoZus%2Bvgaps4qTUV399brHWvjPrrdj7fMSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72p6bsRS4HIQvXblKtwDHx4NsTXTsDKvDcTFExUxPkYjWeK%2FSqVAfbbDJg3ffTvtU2Jz0an4p%2F7F6gcz5ZqgfQlNDLAw9pMaLUubDp2wbzrcMuPu01X965laFBNVWvOcb0OoCYQdjhqvgzTP1UgnoL0135hJuHgBsI7SMibAGzPHTu42mSV2JWpvlt94kMpxCO1RJyxYHD71SAnU2vAl7QZcLFRVLfoiJQ8fEfzqJtBVbmePse1knk9P2VkgVsM8GqZs4PPgN5LBxcUNDKkpg92lFMZ9AyAR2Qeeo7Vre3uEuf205%2F0WZoAioWQJMy2FOcTWY0naPpa2KeUl5sq7pblQXDq4jFmyDPv9Re5OXEBRb2gODLfj%2BwGH%2F5FDIK5A5aJF%2FJQfqZP8jtB%2Fkoi24MvT%2BatQwppqO9HaWxGMGFsH%2FXfta63gNuRd00VOcZWqLOY0RNaM2IQkGcsHEV%2F3ALb%2BkD21G5rYtJ%2B9f48bpKXLCXqpAw4%2FMR0tbsciC9b4Y0NdtHZ8bgJTjdm4bJEf7xVMJWdM19UcRHr3Bq01S3b34XEyxykrcCfKcWFz0JpPxn5jqQs%2FHtmFawNu9AweBS%2Btmk8DHXeDDC01817s0fgyewwR8drXEJIQ16v1nKSSFsQzewC0g3SVLvEwgpaw0wY6pgGdjSaRTCEjWziTIGJpbIYdwaayUBIifVoT3x28BmcWDkDZ%2F8ppueUc%2Fr7KUwQAdT%2FwLQ%2BgtjYtn64wvGDDCAkBzBvhjY45cYBKQVIEuj%2Ff3v%2BLLE4%2BOgfxZ6X7hl88xN%2F0aSJy3qRHLmVMiw6SR%2FX9B7u%2Bp86f44vDy8BnkKhGyzjugZQngFCBLtA7J1XthZeQbP%2FCQSF3xq1A5XfuqcrdiswTwKQ8&X-Amz-Signature=dab898603b0d7a4717c7f5161e3a3257f5492a7ac48c7da2615622dbde183bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JOTTNQ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRbt%2BkzGHBfI52w0%2BpgOHckcCC2Bjw8xi4%2B1uSaVcAaAiARhgBApq8MIoZus%2Bvgaps4qTUV399brHWvjPrrdj7fMSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72p6bsRS4HIQvXblKtwDHx4NsTXTsDKvDcTFExUxPkYjWeK%2FSqVAfbbDJg3ffTvtU2Jz0an4p%2F7F6gcz5ZqgfQlNDLAw9pMaLUubDp2wbzrcMuPu01X965laFBNVWvOcb0OoCYQdjhqvgzTP1UgnoL0135hJuHgBsI7SMibAGzPHTu42mSV2JWpvlt94kMpxCO1RJyxYHD71SAnU2vAl7QZcLFRVLfoiJQ8fEfzqJtBVbmePse1knk9P2VkgVsM8GqZs4PPgN5LBxcUNDKkpg92lFMZ9AyAR2Qeeo7Vre3uEuf205%2F0WZoAioWQJMy2FOcTWY0naPpa2KeUl5sq7pblQXDq4jFmyDPv9Re5OXEBRb2gODLfj%2BwGH%2F5FDIK5A5aJF%2FJQfqZP8jtB%2Fkoi24MvT%2BatQwppqO9HaWxGMGFsH%2FXfta63gNuRd00VOcZWqLOY0RNaM2IQkGcsHEV%2F3ALb%2BkD21G5rYtJ%2B9f48bpKXLCXqpAw4%2FMR0tbsciC9b4Y0NdtHZ8bgJTjdm4bJEf7xVMJWdM19UcRHr3Bq01S3b34XEyxykrcCfKcWFz0JpPxn5jqQs%2FHtmFawNu9AweBS%2Btmk8DHXeDDC01817s0fgyewwR8drXEJIQ16v1nKSSFsQzewC0g3SVLvEwgpaw0wY6pgGdjSaRTCEjWziTIGJpbIYdwaayUBIifVoT3x28BmcWDkDZ%2F8ppueUc%2Fr7KUwQAdT%2FwLQ%2BgtjYtn64wvGDDCAkBzBvhjY45cYBKQVIEuj%2Ff3v%2BLLE4%2BOgfxZ6X7hl88xN%2F0aSJy3qRHLmVMiw6SR%2FX9B7u%2Bp86f44vDy8BnkKhGyzjugZQngFCBLtA7J1XthZeQbP%2FCQSF3xq1A5XfuqcrdiswTwKQ8&X-Amz-Signature=982782ab0002b85c84d0723b0dd6a1e21b1eb06d53860fad0e90a93f589591c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JOTTNQ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRbt%2BkzGHBfI52w0%2BpgOHckcCC2Bjw8xi4%2B1uSaVcAaAiARhgBApq8MIoZus%2Bvgaps4qTUV399brHWvjPrrdj7fMSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72p6bsRS4HIQvXblKtwDHx4NsTXTsDKvDcTFExUxPkYjWeK%2FSqVAfbbDJg3ffTvtU2Jz0an4p%2F7F6gcz5ZqgfQlNDLAw9pMaLUubDp2wbzrcMuPu01X965laFBNVWvOcb0OoCYQdjhqvgzTP1UgnoL0135hJuHgBsI7SMibAGzPHTu42mSV2JWpvlt94kMpxCO1RJyxYHD71SAnU2vAl7QZcLFRVLfoiJQ8fEfzqJtBVbmePse1knk9P2VkgVsM8GqZs4PPgN5LBxcUNDKkpg92lFMZ9AyAR2Qeeo7Vre3uEuf205%2F0WZoAioWQJMy2FOcTWY0naPpa2KeUl5sq7pblQXDq4jFmyDPv9Re5OXEBRb2gODLfj%2BwGH%2F5FDIK5A5aJF%2FJQfqZP8jtB%2Fkoi24MvT%2BatQwppqO9HaWxGMGFsH%2FXfta63gNuRd00VOcZWqLOY0RNaM2IQkGcsHEV%2F3ALb%2BkD21G5rYtJ%2B9f48bpKXLCXqpAw4%2FMR0tbsciC9b4Y0NdtHZ8bgJTjdm4bJEf7xVMJWdM19UcRHr3Bq01S3b34XEyxykrcCfKcWFz0JpPxn5jqQs%2FHtmFawNu9AweBS%2Btmk8DHXeDDC01817s0fgyewwR8drXEJIQ16v1nKSSFsQzewC0g3SVLvEwgpaw0wY6pgGdjSaRTCEjWziTIGJpbIYdwaayUBIifVoT3x28BmcWDkDZ%2F8ppueUc%2Fr7KUwQAdT%2FwLQ%2BgtjYtn64wvGDDCAkBzBvhjY45cYBKQVIEuj%2Ff3v%2BLLE4%2BOgfxZ6X7hl88xN%2F0aSJy3qRHLmVMiw6SR%2FX9B7u%2Bp86f44vDy8BnkKhGyzjugZQngFCBLtA7J1XthZeQbP%2FCQSF3xq1A5XfuqcrdiswTwKQ8&X-Amz-Signature=6b87974674f8b653b3b6aba23dfaf39d16ac086d0d1382e7c3669bb5367e2d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JOTTNQ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRbt%2BkzGHBfI52w0%2BpgOHckcCC2Bjw8xi4%2B1uSaVcAaAiARhgBApq8MIoZus%2Bvgaps4qTUV399brHWvjPrrdj7fMSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72p6bsRS4HIQvXblKtwDHx4NsTXTsDKvDcTFExUxPkYjWeK%2FSqVAfbbDJg3ffTvtU2Jz0an4p%2F7F6gcz5ZqgfQlNDLAw9pMaLUubDp2wbzrcMuPu01X965laFBNVWvOcb0OoCYQdjhqvgzTP1UgnoL0135hJuHgBsI7SMibAGzPHTu42mSV2JWpvlt94kMpxCO1RJyxYHD71SAnU2vAl7QZcLFRVLfoiJQ8fEfzqJtBVbmePse1knk9P2VkgVsM8GqZs4PPgN5LBxcUNDKkpg92lFMZ9AyAR2Qeeo7Vre3uEuf205%2F0WZoAioWQJMy2FOcTWY0naPpa2KeUl5sq7pblQXDq4jFmyDPv9Re5OXEBRb2gODLfj%2BwGH%2F5FDIK5A5aJF%2FJQfqZP8jtB%2Fkoi24MvT%2BatQwppqO9HaWxGMGFsH%2FXfta63gNuRd00VOcZWqLOY0RNaM2IQkGcsHEV%2F3ALb%2BkD21G5rYtJ%2B9f48bpKXLCXqpAw4%2FMR0tbsciC9b4Y0NdtHZ8bgJTjdm4bJEf7xVMJWdM19UcRHr3Bq01S3b34XEyxykrcCfKcWFz0JpPxn5jqQs%2FHtmFawNu9AweBS%2Btmk8DHXeDDC01817s0fgyewwR8drXEJIQ16v1nKSSFsQzewC0g3SVLvEwgpaw0wY6pgGdjSaRTCEjWziTIGJpbIYdwaayUBIifVoT3x28BmcWDkDZ%2F8ppueUc%2Fr7KUwQAdT%2FwLQ%2BgtjYtn64wvGDDCAkBzBvhjY45cYBKQVIEuj%2Ff3v%2BLLE4%2BOgfxZ6X7hl88xN%2F0aSJy3qRHLmVMiw6SR%2FX9B7u%2Bp86f44vDy8BnkKhGyzjugZQngFCBLtA7J1XthZeQbP%2FCQSF3xq1A5XfuqcrdiswTwKQ8&X-Amz-Signature=c7ee1ec58ddd67e9cecccd6f7949cb9d64188dc1476e632d51966bb67f19d5ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JOTTNQ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRbt%2BkzGHBfI52w0%2BpgOHckcCC2Bjw8xi4%2B1uSaVcAaAiARhgBApq8MIoZus%2Bvgaps4qTUV399brHWvjPrrdj7fMSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72p6bsRS4HIQvXblKtwDHx4NsTXTsDKvDcTFExUxPkYjWeK%2FSqVAfbbDJg3ffTvtU2Jz0an4p%2F7F6gcz5ZqgfQlNDLAw9pMaLUubDp2wbzrcMuPu01X965laFBNVWvOcb0OoCYQdjhqvgzTP1UgnoL0135hJuHgBsI7SMibAGzPHTu42mSV2JWpvlt94kMpxCO1RJyxYHD71SAnU2vAl7QZcLFRVLfoiJQ8fEfzqJtBVbmePse1knk9P2VkgVsM8GqZs4PPgN5LBxcUNDKkpg92lFMZ9AyAR2Qeeo7Vre3uEuf205%2F0WZoAioWQJMy2FOcTWY0naPpa2KeUl5sq7pblQXDq4jFmyDPv9Re5OXEBRb2gODLfj%2BwGH%2F5FDIK5A5aJF%2FJQfqZP8jtB%2Fkoi24MvT%2BatQwppqO9HaWxGMGFsH%2FXfta63gNuRd00VOcZWqLOY0RNaM2IQkGcsHEV%2F3ALb%2BkD21G5rYtJ%2B9f48bpKXLCXqpAw4%2FMR0tbsciC9b4Y0NdtHZ8bgJTjdm4bJEf7xVMJWdM19UcRHr3Bq01S3b34XEyxykrcCfKcWFz0JpPxn5jqQs%2FHtmFawNu9AweBS%2Btmk8DHXeDDC01817s0fgyewwR8drXEJIQ16v1nKSSFsQzewC0g3SVLvEwgpaw0wY6pgGdjSaRTCEjWziTIGJpbIYdwaayUBIifVoT3x28BmcWDkDZ%2F8ppueUc%2Fr7KUwQAdT%2FwLQ%2BgtjYtn64wvGDDCAkBzBvhjY45cYBKQVIEuj%2Ff3v%2BLLE4%2BOgfxZ6X7hl88xN%2F0aSJy3qRHLmVMiw6SR%2FX9B7u%2Bp86f44vDy8BnkKhGyzjugZQngFCBLtA7J1XthZeQbP%2FCQSF3xq1A5XfuqcrdiswTwKQ8&X-Amz-Signature=0d3e11d8630e24f3daaab6f8d6c6e5af6fe0e58d539b764842b5fb90e922278b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JOTTNQ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRbt%2BkzGHBfI52w0%2BpgOHckcCC2Bjw8xi4%2B1uSaVcAaAiARhgBApq8MIoZus%2Bvgaps4qTUV399brHWvjPrrdj7fMSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72p6bsRS4HIQvXblKtwDHx4NsTXTsDKvDcTFExUxPkYjWeK%2FSqVAfbbDJg3ffTvtU2Jz0an4p%2F7F6gcz5ZqgfQlNDLAw9pMaLUubDp2wbzrcMuPu01X965laFBNVWvOcb0OoCYQdjhqvgzTP1UgnoL0135hJuHgBsI7SMibAGzPHTu42mSV2JWpvlt94kMpxCO1RJyxYHD71SAnU2vAl7QZcLFRVLfoiJQ8fEfzqJtBVbmePse1knk9P2VkgVsM8GqZs4PPgN5LBxcUNDKkpg92lFMZ9AyAR2Qeeo7Vre3uEuf205%2F0WZoAioWQJMy2FOcTWY0naPpa2KeUl5sq7pblQXDq4jFmyDPv9Re5OXEBRb2gODLfj%2BwGH%2F5FDIK5A5aJF%2FJQfqZP8jtB%2Fkoi24MvT%2BatQwppqO9HaWxGMGFsH%2FXfta63gNuRd00VOcZWqLOY0RNaM2IQkGcsHEV%2F3ALb%2BkD21G5rYtJ%2B9f48bpKXLCXqpAw4%2FMR0tbsciC9b4Y0NdtHZ8bgJTjdm4bJEf7xVMJWdM19UcRHr3Bq01S3b34XEyxykrcCfKcWFz0JpPxn5jqQs%2FHtmFawNu9AweBS%2Btmk8DHXeDDC01817s0fgyewwR8drXEJIQ16v1nKSSFsQzewC0g3SVLvEwgpaw0wY6pgGdjSaRTCEjWziTIGJpbIYdwaayUBIifVoT3x28BmcWDkDZ%2F8ppueUc%2Fr7KUwQAdT%2FwLQ%2BgtjYtn64wvGDDCAkBzBvhjY45cYBKQVIEuj%2Ff3v%2BLLE4%2BOgfxZ6X7hl88xN%2F0aSJy3qRHLmVMiw6SR%2FX9B7u%2Bp86f44vDy8BnkKhGyzjugZQngFCBLtA7J1XthZeQbP%2FCQSF3xq1A5XfuqcrdiswTwKQ8&X-Amz-Signature=4be9c36f2be7bace25fe0aac4e0f767748b07df43d997f8641f4ccc518957770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JOTTNQ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRbt%2BkzGHBfI52w0%2BpgOHckcCC2Bjw8xi4%2B1uSaVcAaAiARhgBApq8MIoZus%2Bvgaps4qTUV399brHWvjPrrdj7fMSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72p6bsRS4HIQvXblKtwDHx4NsTXTsDKvDcTFExUxPkYjWeK%2FSqVAfbbDJg3ffTvtU2Jz0an4p%2F7F6gcz5ZqgfQlNDLAw9pMaLUubDp2wbzrcMuPu01X965laFBNVWvOcb0OoCYQdjhqvgzTP1UgnoL0135hJuHgBsI7SMibAGzPHTu42mSV2JWpvlt94kMpxCO1RJyxYHD71SAnU2vAl7QZcLFRVLfoiJQ8fEfzqJtBVbmePse1knk9P2VkgVsM8GqZs4PPgN5LBxcUNDKkpg92lFMZ9AyAR2Qeeo7Vre3uEuf205%2F0WZoAioWQJMy2FOcTWY0naPpa2KeUl5sq7pblQXDq4jFmyDPv9Re5OXEBRb2gODLfj%2BwGH%2F5FDIK5A5aJF%2FJQfqZP8jtB%2Fkoi24MvT%2BatQwppqO9HaWxGMGFsH%2FXfta63gNuRd00VOcZWqLOY0RNaM2IQkGcsHEV%2F3ALb%2BkD21G5rYtJ%2B9f48bpKXLCXqpAw4%2FMR0tbsciC9b4Y0NdtHZ8bgJTjdm4bJEf7xVMJWdM19UcRHr3Bq01S3b34XEyxykrcCfKcWFz0JpPxn5jqQs%2FHtmFawNu9AweBS%2Btmk8DHXeDDC01817s0fgyewwR8drXEJIQ16v1nKSSFsQzewC0g3SVLvEwgpaw0wY6pgGdjSaRTCEjWziTIGJpbIYdwaayUBIifVoT3x28BmcWDkDZ%2F8ppueUc%2Fr7KUwQAdT%2FwLQ%2BgtjYtn64wvGDDCAkBzBvhjY45cYBKQVIEuj%2Ff3v%2BLLE4%2BOgfxZ6X7hl88xN%2F0aSJy3qRHLmVMiw6SR%2FX9B7u%2Bp86f44vDy8BnkKhGyzjugZQngFCBLtA7J1XthZeQbP%2FCQSF3xq1A5XfuqcrdiswTwKQ8&X-Amz-Signature=328cb8b2063b139ac774e22389917109278aeb9a5b41c51ee90bcc29c79c447f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JOTTNQ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRbt%2BkzGHBfI52w0%2BpgOHckcCC2Bjw8xi4%2B1uSaVcAaAiARhgBApq8MIoZus%2Bvgaps4qTUV399brHWvjPrrdj7fMSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72p6bsRS4HIQvXblKtwDHx4NsTXTsDKvDcTFExUxPkYjWeK%2FSqVAfbbDJg3ffTvtU2Jz0an4p%2F7F6gcz5ZqgfQlNDLAw9pMaLUubDp2wbzrcMuPu01X965laFBNVWvOcb0OoCYQdjhqvgzTP1UgnoL0135hJuHgBsI7SMibAGzPHTu42mSV2JWpvlt94kMpxCO1RJyxYHD71SAnU2vAl7QZcLFRVLfoiJQ8fEfzqJtBVbmePse1knk9P2VkgVsM8GqZs4PPgN5LBxcUNDKkpg92lFMZ9AyAR2Qeeo7Vre3uEuf205%2F0WZoAioWQJMy2FOcTWY0naPpa2KeUl5sq7pblQXDq4jFmyDPv9Re5OXEBRb2gODLfj%2BwGH%2F5FDIK5A5aJF%2FJQfqZP8jtB%2Fkoi24MvT%2BatQwppqO9HaWxGMGFsH%2FXfta63gNuRd00VOcZWqLOY0RNaM2IQkGcsHEV%2F3ALb%2BkD21G5rYtJ%2B9f48bpKXLCXqpAw4%2FMR0tbsciC9b4Y0NdtHZ8bgJTjdm4bJEf7xVMJWdM19UcRHr3Bq01S3b34XEyxykrcCfKcWFz0JpPxn5jqQs%2FHtmFawNu9AweBS%2Btmk8DHXeDDC01817s0fgyewwR8drXEJIQ16v1nKSSFsQzewC0g3SVLvEwgpaw0wY6pgGdjSaRTCEjWziTIGJpbIYdwaayUBIifVoT3x28BmcWDkDZ%2F8ppueUc%2Fr7KUwQAdT%2FwLQ%2BgtjYtn64wvGDDCAkBzBvhjY45cYBKQVIEuj%2Ff3v%2BLLE4%2BOgfxZ6X7hl88xN%2F0aSJy3qRHLmVMiw6SR%2FX9B7u%2Bp86f44vDy8BnkKhGyzjugZQngFCBLtA7J1XthZeQbP%2FCQSF3xq1A5XfuqcrdiswTwKQ8&X-Amz-Signature=6739eda7bddeec45ec987d35b70a524305ad28fbcfa8061a4e028cb57f59d3cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JOTTNQ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRbt%2BkzGHBfI52w0%2BpgOHckcCC2Bjw8xi4%2B1uSaVcAaAiARhgBApq8MIoZus%2Bvgaps4qTUV399brHWvjPrrdj7fMSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72p6bsRS4HIQvXblKtwDHx4NsTXTsDKvDcTFExUxPkYjWeK%2FSqVAfbbDJg3ffTvtU2Jz0an4p%2F7F6gcz5ZqgfQlNDLAw9pMaLUubDp2wbzrcMuPu01X965laFBNVWvOcb0OoCYQdjhqvgzTP1UgnoL0135hJuHgBsI7SMibAGzPHTu42mSV2JWpvlt94kMpxCO1RJyxYHD71SAnU2vAl7QZcLFRVLfoiJQ8fEfzqJtBVbmePse1knk9P2VkgVsM8GqZs4PPgN5LBxcUNDKkpg92lFMZ9AyAR2Qeeo7Vre3uEuf205%2F0WZoAioWQJMy2FOcTWY0naPpa2KeUl5sq7pblQXDq4jFmyDPv9Re5OXEBRb2gODLfj%2BwGH%2F5FDIK5A5aJF%2FJQfqZP8jtB%2Fkoi24MvT%2BatQwppqO9HaWxGMGFsH%2FXfta63gNuRd00VOcZWqLOY0RNaM2IQkGcsHEV%2F3ALb%2BkD21G5rYtJ%2B9f48bpKXLCXqpAw4%2FMR0tbsciC9b4Y0NdtHZ8bgJTjdm4bJEf7xVMJWdM19UcRHr3Bq01S3b34XEyxykrcCfKcWFz0JpPxn5jqQs%2FHtmFawNu9AweBS%2Btmk8DHXeDDC01817s0fgyewwR8drXEJIQ16v1nKSSFsQzewC0g3SVLvEwgpaw0wY6pgGdjSaRTCEjWziTIGJpbIYdwaayUBIifVoT3x28BmcWDkDZ%2F8ppueUc%2Fr7KUwQAdT%2FwLQ%2BgtjYtn64wvGDDCAkBzBvhjY45cYBKQVIEuj%2Ff3v%2BLLE4%2BOgfxZ6X7hl88xN%2F0aSJy3qRHLmVMiw6SR%2FX9B7u%2Bp86f44vDy8BnkKhGyzjugZQngFCBLtA7J1XthZeQbP%2FCQSF3xq1A5XfuqcrdiswTwKQ8&X-Amz-Signature=a8a9cc8c6df6d9aebb0b13536f91318e84324a10b18605c3dd251829e575bd21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JOTTNQ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRbt%2BkzGHBfI52w0%2BpgOHckcCC2Bjw8xi4%2B1uSaVcAaAiARhgBApq8MIoZus%2Bvgaps4qTUV399brHWvjPrrdj7fMSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72p6bsRS4HIQvXblKtwDHx4NsTXTsDKvDcTFExUxPkYjWeK%2FSqVAfbbDJg3ffTvtU2Jz0an4p%2F7F6gcz5ZqgfQlNDLAw9pMaLUubDp2wbzrcMuPu01X965laFBNVWvOcb0OoCYQdjhqvgzTP1UgnoL0135hJuHgBsI7SMibAGzPHTu42mSV2JWpvlt94kMpxCO1RJyxYHD71SAnU2vAl7QZcLFRVLfoiJQ8fEfzqJtBVbmePse1knk9P2VkgVsM8GqZs4PPgN5LBxcUNDKkpg92lFMZ9AyAR2Qeeo7Vre3uEuf205%2F0WZoAioWQJMy2FOcTWY0naPpa2KeUl5sq7pblQXDq4jFmyDPv9Re5OXEBRb2gODLfj%2BwGH%2F5FDIK5A5aJF%2FJQfqZP8jtB%2Fkoi24MvT%2BatQwppqO9HaWxGMGFsH%2FXfta63gNuRd00VOcZWqLOY0RNaM2IQkGcsHEV%2F3ALb%2BkD21G5rYtJ%2B9f48bpKXLCXqpAw4%2FMR0tbsciC9b4Y0NdtHZ8bgJTjdm4bJEf7xVMJWdM19UcRHr3Bq01S3b34XEyxykrcCfKcWFz0JpPxn5jqQs%2FHtmFawNu9AweBS%2Btmk8DHXeDDC01817s0fgyewwR8drXEJIQ16v1nKSSFsQzewC0g3SVLvEwgpaw0wY6pgGdjSaRTCEjWziTIGJpbIYdwaayUBIifVoT3x28BmcWDkDZ%2F8ppueUc%2Fr7KUwQAdT%2FwLQ%2BgtjYtn64wvGDDCAkBzBvhjY45cYBKQVIEuj%2Ff3v%2BLLE4%2BOgfxZ6X7hl88xN%2F0aSJy3qRHLmVMiw6SR%2FX9B7u%2Bp86f44vDy8BnkKhGyzjugZQngFCBLtA7J1XthZeQbP%2FCQSF3xq1A5XfuqcrdiswTwKQ8&X-Amz-Signature=1ac197c223913f42ce5e552870b75d841a6fd2ae95a8d8e5ea4050b07af23751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JOTTNQ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRbt%2BkzGHBfI52w0%2BpgOHckcCC2Bjw8xi4%2B1uSaVcAaAiARhgBApq8MIoZus%2Bvgaps4qTUV399brHWvjPrrdj7fMSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72p6bsRS4HIQvXblKtwDHx4NsTXTsDKvDcTFExUxPkYjWeK%2FSqVAfbbDJg3ffTvtU2Jz0an4p%2F7F6gcz5ZqgfQlNDLAw9pMaLUubDp2wbzrcMuPu01X965laFBNVWvOcb0OoCYQdjhqvgzTP1UgnoL0135hJuHgBsI7SMibAGzPHTu42mSV2JWpvlt94kMpxCO1RJyxYHD71SAnU2vAl7QZcLFRVLfoiJQ8fEfzqJtBVbmePse1knk9P2VkgVsM8GqZs4PPgN5LBxcUNDKkpg92lFMZ9AyAR2Qeeo7Vre3uEuf205%2F0WZoAioWQJMy2FOcTWY0naPpa2KeUl5sq7pblQXDq4jFmyDPv9Re5OXEBRb2gODLfj%2BwGH%2F5FDIK5A5aJF%2FJQfqZP8jtB%2Fkoi24MvT%2BatQwppqO9HaWxGMGFsH%2FXfta63gNuRd00VOcZWqLOY0RNaM2IQkGcsHEV%2F3ALb%2BkD21G5rYtJ%2B9f48bpKXLCXqpAw4%2FMR0tbsciC9b4Y0NdtHZ8bgJTjdm4bJEf7xVMJWdM19UcRHr3Bq01S3b34XEyxykrcCfKcWFz0JpPxn5jqQs%2FHtmFawNu9AweBS%2Btmk8DHXeDDC01817s0fgyewwR8drXEJIQ16v1nKSSFsQzewC0g3SVLvEwgpaw0wY6pgGdjSaRTCEjWziTIGJpbIYdwaayUBIifVoT3x28BmcWDkDZ%2F8ppueUc%2Fr7KUwQAdT%2FwLQ%2BgtjYtn64wvGDDCAkBzBvhjY45cYBKQVIEuj%2Ff3v%2BLLE4%2BOgfxZ6X7hl88xN%2F0aSJy3qRHLmVMiw6SR%2FX9B7u%2Bp86f44vDy8BnkKhGyzjugZQngFCBLtA7J1XthZeQbP%2FCQSF3xq1A5XfuqcrdiswTwKQ8&X-Amz-Signature=a0b1eb92df48b8426292eab7a536252ba3a7dead9ad39e9ada1f6731d80921c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JOTTNQ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRbt%2BkzGHBfI52w0%2BpgOHckcCC2Bjw8xi4%2B1uSaVcAaAiARhgBApq8MIoZus%2Bvgaps4qTUV399brHWvjPrrdj7fMSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72p6bsRS4HIQvXblKtwDHx4NsTXTsDKvDcTFExUxPkYjWeK%2FSqVAfbbDJg3ffTvtU2Jz0an4p%2F7F6gcz5ZqgfQlNDLAw9pMaLUubDp2wbzrcMuPu01X965laFBNVWvOcb0OoCYQdjhqvgzTP1UgnoL0135hJuHgBsI7SMibAGzPHTu42mSV2JWpvlt94kMpxCO1RJyxYHD71SAnU2vAl7QZcLFRVLfoiJQ8fEfzqJtBVbmePse1knk9P2VkgVsM8GqZs4PPgN5LBxcUNDKkpg92lFMZ9AyAR2Qeeo7Vre3uEuf205%2F0WZoAioWQJMy2FOcTWY0naPpa2KeUl5sq7pblQXDq4jFmyDPv9Re5OXEBRb2gODLfj%2BwGH%2F5FDIK5A5aJF%2FJQfqZP8jtB%2Fkoi24MvT%2BatQwppqO9HaWxGMGFsH%2FXfta63gNuRd00VOcZWqLOY0RNaM2IQkGcsHEV%2F3ALb%2BkD21G5rYtJ%2B9f48bpKXLCXqpAw4%2FMR0tbsciC9b4Y0NdtHZ8bgJTjdm4bJEf7xVMJWdM19UcRHr3Bq01S3b34XEyxykrcCfKcWFz0JpPxn5jqQs%2FHtmFawNu9AweBS%2Btmk8DHXeDDC01817s0fgyewwR8drXEJIQ16v1nKSSFsQzewC0g3SVLvEwgpaw0wY6pgGdjSaRTCEjWziTIGJpbIYdwaayUBIifVoT3x28BmcWDkDZ%2F8ppueUc%2Fr7KUwQAdT%2FwLQ%2BgtjYtn64wvGDDCAkBzBvhjY45cYBKQVIEuj%2Ff3v%2BLLE4%2BOgfxZ6X7hl88xN%2F0aSJy3qRHLmVMiw6SR%2FX9B7u%2Bp86f44vDy8BnkKhGyzjugZQngFCBLtA7J1XthZeQbP%2FCQSF3xq1A5XfuqcrdiswTwKQ8&X-Amz-Signature=b63010b5e0aacd152580da185fa914982d2bd795440a61e74d61e30752a6cc9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665JOTTNQ%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRbt%2BkzGHBfI52w0%2BpgOHckcCC2Bjw8xi4%2B1uSaVcAaAiARhgBApq8MIoZus%2Bvgaps4qTUV399brHWvjPrrdj7fMSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM72p6bsRS4HIQvXblKtwDHx4NsTXTsDKvDcTFExUxPkYjWeK%2FSqVAfbbDJg3ffTvtU2Jz0an4p%2F7F6gcz5ZqgfQlNDLAw9pMaLUubDp2wbzrcMuPu01X965laFBNVWvOcb0OoCYQdjhqvgzTP1UgnoL0135hJuHgBsI7SMibAGzPHTu42mSV2JWpvlt94kMpxCO1RJyxYHD71SAnU2vAl7QZcLFRVLfoiJQ8fEfzqJtBVbmePse1knk9P2VkgVsM8GqZs4PPgN5LBxcUNDKkpg92lFMZ9AyAR2Qeeo7Vre3uEuf205%2F0WZoAioWQJMy2FOcTWY0naPpa2KeUl5sq7pblQXDq4jFmyDPv9Re5OXEBRb2gODLfj%2BwGH%2F5FDIK5A5aJF%2FJQfqZP8jtB%2Fkoi24MvT%2BatQwppqO9HaWxGMGFsH%2FXfta63gNuRd00VOcZWqLOY0RNaM2IQkGcsHEV%2F3ALb%2BkD21G5rYtJ%2B9f48bpKXLCXqpAw4%2FMR0tbsciC9b4Y0NdtHZ8bgJTjdm4bJEf7xVMJWdM19UcRHr3Bq01S3b34XEyxykrcCfKcWFz0JpPxn5jqQs%2FHtmFawNu9AweBS%2Btmk8DHXeDDC01817s0fgyewwR8drXEJIQ16v1nKSSFsQzewC0g3SVLvEwgpaw0wY6pgGdjSaRTCEjWziTIGJpbIYdwaayUBIifVoT3x28BmcWDkDZ%2F8ppueUc%2Fr7KUwQAdT%2FwLQ%2BgtjYtn64wvGDDCAkBzBvhjY45cYBKQVIEuj%2Ff3v%2BLLE4%2BOgfxZ6X7hl88xN%2F0aSJy3qRHLmVMiw6SR%2FX9B7u%2Bp86f44vDy8BnkKhGyzjugZQngFCBLtA7J1XthZeQbP%2FCQSF3xq1A5XfuqcrdiswTwKQ8&X-Amz-Signature=4e2dd2ba2d95c95f104659a90a61482d12d8cf4d4967def4f1b1782497c73bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
