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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXLDAQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqfGdct%2FLwKz0u9by4RRvtB5EL%2FIkNTN54%2F4DHNItmqwIhAIVB2aFDV9Om9z%2FzZttZianWd1WUj6mZs0uuVEGzgS27KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3UL3gRWgnU4wMn2sq3APj48sM9emu9acVF7NKJ4wzdNlsgn3gkV7NC56oOVhSL7XNXiqUIJiSyP90Xg5H3Wspgqg02pnNnvcsb3b%2FjF0kgr3B5DPfVToQCzoHKbFDtTePQ7D%2BsnIQsq9iSb8G6fPcVur4Y%2Fjf3rEbDT33nVKEbnKFx%2B65zxSgsGZxPcU6nwEMriF4pf%2FBwCAwPMkU8B6amacW62VxCkLATU4YbvzRzcV%2FHGwFJVPzxvZsdGACjojX07CJsSopAMVaTkDy%2Bo%2F0Yk47COlnV%2FVSPCJS12vXHvm5%2FtTBZ0HvGwSInCoeMwtYO%2B9XoOVf6OhtYUEfoVuuAWQjafH6qkDoR%2FP77eF3Y5nvlLWoCIkg46XcSZuQ7mPv%2FrVoDYHogDr5jOkW11qDEgHBjMnTDqBqMnrSLU6pFIbR4mzWs49FUz4wdZC1DJQtjKwslyMlaHPEbxiFompwy3AL8zbRPrfHw4O6TET7%2F%2FZO0zjrBLNLbpw53NGNF%2BWudVH1qSRmQF57asuet%2FnzFjLKcWOXo4iCokbNiIzEJgiiYjHtoBM3NhPH8vq8ouYukgX91ch2Y4oqIAzJrXmhnRKUWs5HHfrkCAh7H37D5ltdOb0Ie3XyBi3844Q0vlHICgIs4g3%2BcaTSiTD2tNHEBjqkAU6sIY%2FWA563j3qdKPt3%2B8kJJDJwInV8n83Gv%2FcjYnE95jlZe%2BvLgAIlGVr%2BUOk2xdUKsg0UFBK8n5N16D5Wu%2BGWIc6o5DTKj42TvHGYd6wANYYXXJOIkaAR%2FSkm0nptghT0C6AtC1ZEqyCFCYTcEQExGJIfCFF7noqZDXgbPtm%2BBdjDshd%2FIy30dPdPSRDwS3ZzuLd4M6rn10MFGLikK1q3Hfsr&X-Amz-Signature=a70ccd60ee8e3b8ec72929decb45a63775e7286ee349f28ae2ff7c2abe8b6706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXLDAQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqfGdct%2FLwKz0u9by4RRvtB5EL%2FIkNTN54%2F4DHNItmqwIhAIVB2aFDV9Om9z%2FzZttZianWd1WUj6mZs0uuVEGzgS27KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3UL3gRWgnU4wMn2sq3APj48sM9emu9acVF7NKJ4wzdNlsgn3gkV7NC56oOVhSL7XNXiqUIJiSyP90Xg5H3Wspgqg02pnNnvcsb3b%2FjF0kgr3B5DPfVToQCzoHKbFDtTePQ7D%2BsnIQsq9iSb8G6fPcVur4Y%2Fjf3rEbDT33nVKEbnKFx%2B65zxSgsGZxPcU6nwEMriF4pf%2FBwCAwPMkU8B6amacW62VxCkLATU4YbvzRzcV%2FHGwFJVPzxvZsdGACjojX07CJsSopAMVaTkDy%2Bo%2F0Yk47COlnV%2FVSPCJS12vXHvm5%2FtTBZ0HvGwSInCoeMwtYO%2B9XoOVf6OhtYUEfoVuuAWQjafH6qkDoR%2FP77eF3Y5nvlLWoCIkg46XcSZuQ7mPv%2FrVoDYHogDr5jOkW11qDEgHBjMnTDqBqMnrSLU6pFIbR4mzWs49FUz4wdZC1DJQtjKwslyMlaHPEbxiFompwy3AL8zbRPrfHw4O6TET7%2F%2FZO0zjrBLNLbpw53NGNF%2BWudVH1qSRmQF57asuet%2FnzFjLKcWOXo4iCokbNiIzEJgiiYjHtoBM3NhPH8vq8ouYukgX91ch2Y4oqIAzJrXmhnRKUWs5HHfrkCAh7H37D5ltdOb0Ie3XyBi3844Q0vlHICgIs4g3%2BcaTSiTD2tNHEBjqkAU6sIY%2FWA563j3qdKPt3%2B8kJJDJwInV8n83Gv%2FcjYnE95jlZe%2BvLgAIlGVr%2BUOk2xdUKsg0UFBK8n5N16D5Wu%2BGWIc6o5DTKj42TvHGYd6wANYYXXJOIkaAR%2FSkm0nptghT0C6AtC1ZEqyCFCYTcEQExGJIfCFF7noqZDXgbPtm%2BBdjDshd%2FIy30dPdPSRDwS3ZzuLd4M6rn10MFGLikK1q3Hfsr&X-Amz-Signature=ee551207b42442d27155abc07a05e567764367d1503eae3517db7e67f5169927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXLDAQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqfGdct%2FLwKz0u9by4RRvtB5EL%2FIkNTN54%2F4DHNItmqwIhAIVB2aFDV9Om9z%2FzZttZianWd1WUj6mZs0uuVEGzgS27KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3UL3gRWgnU4wMn2sq3APj48sM9emu9acVF7NKJ4wzdNlsgn3gkV7NC56oOVhSL7XNXiqUIJiSyP90Xg5H3Wspgqg02pnNnvcsb3b%2FjF0kgr3B5DPfVToQCzoHKbFDtTePQ7D%2BsnIQsq9iSb8G6fPcVur4Y%2Fjf3rEbDT33nVKEbnKFx%2B65zxSgsGZxPcU6nwEMriF4pf%2FBwCAwPMkU8B6amacW62VxCkLATU4YbvzRzcV%2FHGwFJVPzxvZsdGACjojX07CJsSopAMVaTkDy%2Bo%2F0Yk47COlnV%2FVSPCJS12vXHvm5%2FtTBZ0HvGwSInCoeMwtYO%2B9XoOVf6OhtYUEfoVuuAWQjafH6qkDoR%2FP77eF3Y5nvlLWoCIkg46XcSZuQ7mPv%2FrVoDYHogDr5jOkW11qDEgHBjMnTDqBqMnrSLU6pFIbR4mzWs49FUz4wdZC1DJQtjKwslyMlaHPEbxiFompwy3AL8zbRPrfHw4O6TET7%2F%2FZO0zjrBLNLbpw53NGNF%2BWudVH1qSRmQF57asuet%2FnzFjLKcWOXo4iCokbNiIzEJgiiYjHtoBM3NhPH8vq8ouYukgX91ch2Y4oqIAzJrXmhnRKUWs5HHfrkCAh7H37D5ltdOb0Ie3XyBi3844Q0vlHICgIs4g3%2BcaTSiTD2tNHEBjqkAU6sIY%2FWA563j3qdKPt3%2B8kJJDJwInV8n83Gv%2FcjYnE95jlZe%2BvLgAIlGVr%2BUOk2xdUKsg0UFBK8n5N16D5Wu%2BGWIc6o5DTKj42TvHGYd6wANYYXXJOIkaAR%2FSkm0nptghT0C6AtC1ZEqyCFCYTcEQExGJIfCFF7noqZDXgbPtm%2BBdjDshd%2FIy30dPdPSRDwS3ZzuLd4M6rn10MFGLikK1q3Hfsr&X-Amz-Signature=c106fbdcd71865e849d723dd0ca84c8a294d71861cfc2f5c9ed58edbff5a399e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXLDAQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqfGdct%2FLwKz0u9by4RRvtB5EL%2FIkNTN54%2F4DHNItmqwIhAIVB2aFDV9Om9z%2FzZttZianWd1WUj6mZs0uuVEGzgS27KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3UL3gRWgnU4wMn2sq3APj48sM9emu9acVF7NKJ4wzdNlsgn3gkV7NC56oOVhSL7XNXiqUIJiSyP90Xg5H3Wspgqg02pnNnvcsb3b%2FjF0kgr3B5DPfVToQCzoHKbFDtTePQ7D%2BsnIQsq9iSb8G6fPcVur4Y%2Fjf3rEbDT33nVKEbnKFx%2B65zxSgsGZxPcU6nwEMriF4pf%2FBwCAwPMkU8B6amacW62VxCkLATU4YbvzRzcV%2FHGwFJVPzxvZsdGACjojX07CJsSopAMVaTkDy%2Bo%2F0Yk47COlnV%2FVSPCJS12vXHvm5%2FtTBZ0HvGwSInCoeMwtYO%2B9XoOVf6OhtYUEfoVuuAWQjafH6qkDoR%2FP77eF3Y5nvlLWoCIkg46XcSZuQ7mPv%2FrVoDYHogDr5jOkW11qDEgHBjMnTDqBqMnrSLU6pFIbR4mzWs49FUz4wdZC1DJQtjKwslyMlaHPEbxiFompwy3AL8zbRPrfHw4O6TET7%2F%2FZO0zjrBLNLbpw53NGNF%2BWudVH1qSRmQF57asuet%2FnzFjLKcWOXo4iCokbNiIzEJgiiYjHtoBM3NhPH8vq8ouYukgX91ch2Y4oqIAzJrXmhnRKUWs5HHfrkCAh7H37D5ltdOb0Ie3XyBi3844Q0vlHICgIs4g3%2BcaTSiTD2tNHEBjqkAU6sIY%2FWA563j3qdKPt3%2B8kJJDJwInV8n83Gv%2FcjYnE95jlZe%2BvLgAIlGVr%2BUOk2xdUKsg0UFBK8n5N16D5Wu%2BGWIc6o5DTKj42TvHGYd6wANYYXXJOIkaAR%2FSkm0nptghT0C6AtC1ZEqyCFCYTcEQExGJIfCFF7noqZDXgbPtm%2BBdjDshd%2FIy30dPdPSRDwS3ZzuLd4M6rn10MFGLikK1q3Hfsr&X-Amz-Signature=69325088cff8d7da594119537c6c4629df43d61f4162c56bcf0360b4a74fdf02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXLDAQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqfGdct%2FLwKz0u9by4RRvtB5EL%2FIkNTN54%2F4DHNItmqwIhAIVB2aFDV9Om9z%2FzZttZianWd1WUj6mZs0uuVEGzgS27KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3UL3gRWgnU4wMn2sq3APj48sM9emu9acVF7NKJ4wzdNlsgn3gkV7NC56oOVhSL7XNXiqUIJiSyP90Xg5H3Wspgqg02pnNnvcsb3b%2FjF0kgr3B5DPfVToQCzoHKbFDtTePQ7D%2BsnIQsq9iSb8G6fPcVur4Y%2Fjf3rEbDT33nVKEbnKFx%2B65zxSgsGZxPcU6nwEMriF4pf%2FBwCAwPMkU8B6amacW62VxCkLATU4YbvzRzcV%2FHGwFJVPzxvZsdGACjojX07CJsSopAMVaTkDy%2Bo%2F0Yk47COlnV%2FVSPCJS12vXHvm5%2FtTBZ0HvGwSInCoeMwtYO%2B9XoOVf6OhtYUEfoVuuAWQjafH6qkDoR%2FP77eF3Y5nvlLWoCIkg46XcSZuQ7mPv%2FrVoDYHogDr5jOkW11qDEgHBjMnTDqBqMnrSLU6pFIbR4mzWs49FUz4wdZC1DJQtjKwslyMlaHPEbxiFompwy3AL8zbRPrfHw4O6TET7%2F%2FZO0zjrBLNLbpw53NGNF%2BWudVH1qSRmQF57asuet%2FnzFjLKcWOXo4iCokbNiIzEJgiiYjHtoBM3NhPH8vq8ouYukgX91ch2Y4oqIAzJrXmhnRKUWs5HHfrkCAh7H37D5ltdOb0Ie3XyBi3844Q0vlHICgIs4g3%2BcaTSiTD2tNHEBjqkAU6sIY%2FWA563j3qdKPt3%2B8kJJDJwInV8n83Gv%2FcjYnE95jlZe%2BvLgAIlGVr%2BUOk2xdUKsg0UFBK8n5N16D5Wu%2BGWIc6o5DTKj42TvHGYd6wANYYXXJOIkaAR%2FSkm0nptghT0C6AtC1ZEqyCFCYTcEQExGJIfCFF7noqZDXgbPtm%2BBdjDshd%2FIy30dPdPSRDwS3ZzuLd4M6rn10MFGLikK1q3Hfsr&X-Amz-Signature=c16edfadca5d1237cf6e836521a23746e8d4bde495fd1f8e1a455c9ced407111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXLDAQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqfGdct%2FLwKz0u9by4RRvtB5EL%2FIkNTN54%2F4DHNItmqwIhAIVB2aFDV9Om9z%2FzZttZianWd1WUj6mZs0uuVEGzgS27KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3UL3gRWgnU4wMn2sq3APj48sM9emu9acVF7NKJ4wzdNlsgn3gkV7NC56oOVhSL7XNXiqUIJiSyP90Xg5H3Wspgqg02pnNnvcsb3b%2FjF0kgr3B5DPfVToQCzoHKbFDtTePQ7D%2BsnIQsq9iSb8G6fPcVur4Y%2Fjf3rEbDT33nVKEbnKFx%2B65zxSgsGZxPcU6nwEMriF4pf%2FBwCAwPMkU8B6amacW62VxCkLATU4YbvzRzcV%2FHGwFJVPzxvZsdGACjojX07CJsSopAMVaTkDy%2Bo%2F0Yk47COlnV%2FVSPCJS12vXHvm5%2FtTBZ0HvGwSInCoeMwtYO%2B9XoOVf6OhtYUEfoVuuAWQjafH6qkDoR%2FP77eF3Y5nvlLWoCIkg46XcSZuQ7mPv%2FrVoDYHogDr5jOkW11qDEgHBjMnTDqBqMnrSLU6pFIbR4mzWs49FUz4wdZC1DJQtjKwslyMlaHPEbxiFompwy3AL8zbRPrfHw4O6TET7%2F%2FZO0zjrBLNLbpw53NGNF%2BWudVH1qSRmQF57asuet%2FnzFjLKcWOXo4iCokbNiIzEJgiiYjHtoBM3NhPH8vq8ouYukgX91ch2Y4oqIAzJrXmhnRKUWs5HHfrkCAh7H37D5ltdOb0Ie3XyBi3844Q0vlHICgIs4g3%2BcaTSiTD2tNHEBjqkAU6sIY%2FWA563j3qdKPt3%2B8kJJDJwInV8n83Gv%2FcjYnE95jlZe%2BvLgAIlGVr%2BUOk2xdUKsg0UFBK8n5N16D5Wu%2BGWIc6o5DTKj42TvHGYd6wANYYXXJOIkaAR%2FSkm0nptghT0C6AtC1ZEqyCFCYTcEQExGJIfCFF7noqZDXgbPtm%2BBdjDshd%2FIy30dPdPSRDwS3ZzuLd4M6rn10MFGLikK1q3Hfsr&X-Amz-Signature=97ef49c1fdd0ef0c3db4c982ac5e0d38406e5a04151eed79adc3b2cba0af9fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXLDAQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqfGdct%2FLwKz0u9by4RRvtB5EL%2FIkNTN54%2F4DHNItmqwIhAIVB2aFDV9Om9z%2FzZttZianWd1WUj6mZs0uuVEGzgS27KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3UL3gRWgnU4wMn2sq3APj48sM9emu9acVF7NKJ4wzdNlsgn3gkV7NC56oOVhSL7XNXiqUIJiSyP90Xg5H3Wspgqg02pnNnvcsb3b%2FjF0kgr3B5DPfVToQCzoHKbFDtTePQ7D%2BsnIQsq9iSb8G6fPcVur4Y%2Fjf3rEbDT33nVKEbnKFx%2B65zxSgsGZxPcU6nwEMriF4pf%2FBwCAwPMkU8B6amacW62VxCkLATU4YbvzRzcV%2FHGwFJVPzxvZsdGACjojX07CJsSopAMVaTkDy%2Bo%2F0Yk47COlnV%2FVSPCJS12vXHvm5%2FtTBZ0HvGwSInCoeMwtYO%2B9XoOVf6OhtYUEfoVuuAWQjafH6qkDoR%2FP77eF3Y5nvlLWoCIkg46XcSZuQ7mPv%2FrVoDYHogDr5jOkW11qDEgHBjMnTDqBqMnrSLU6pFIbR4mzWs49FUz4wdZC1DJQtjKwslyMlaHPEbxiFompwy3AL8zbRPrfHw4O6TET7%2F%2FZO0zjrBLNLbpw53NGNF%2BWudVH1qSRmQF57asuet%2FnzFjLKcWOXo4iCokbNiIzEJgiiYjHtoBM3NhPH8vq8ouYukgX91ch2Y4oqIAzJrXmhnRKUWs5HHfrkCAh7H37D5ltdOb0Ie3XyBi3844Q0vlHICgIs4g3%2BcaTSiTD2tNHEBjqkAU6sIY%2FWA563j3qdKPt3%2B8kJJDJwInV8n83Gv%2FcjYnE95jlZe%2BvLgAIlGVr%2BUOk2xdUKsg0UFBK8n5N16D5Wu%2BGWIc6o5DTKj42TvHGYd6wANYYXXJOIkaAR%2FSkm0nptghT0C6AtC1ZEqyCFCYTcEQExGJIfCFF7noqZDXgbPtm%2BBdjDshd%2FIy30dPdPSRDwS3ZzuLd4M6rn10MFGLikK1q3Hfsr&X-Amz-Signature=d2ab456834d37ca715ff1097edde971f91d9116fd193cdc9133eff509fadf40b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXLDAQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqfGdct%2FLwKz0u9by4RRvtB5EL%2FIkNTN54%2F4DHNItmqwIhAIVB2aFDV9Om9z%2FzZttZianWd1WUj6mZs0uuVEGzgS27KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3UL3gRWgnU4wMn2sq3APj48sM9emu9acVF7NKJ4wzdNlsgn3gkV7NC56oOVhSL7XNXiqUIJiSyP90Xg5H3Wspgqg02pnNnvcsb3b%2FjF0kgr3B5DPfVToQCzoHKbFDtTePQ7D%2BsnIQsq9iSb8G6fPcVur4Y%2Fjf3rEbDT33nVKEbnKFx%2B65zxSgsGZxPcU6nwEMriF4pf%2FBwCAwPMkU8B6amacW62VxCkLATU4YbvzRzcV%2FHGwFJVPzxvZsdGACjojX07CJsSopAMVaTkDy%2Bo%2F0Yk47COlnV%2FVSPCJS12vXHvm5%2FtTBZ0HvGwSInCoeMwtYO%2B9XoOVf6OhtYUEfoVuuAWQjafH6qkDoR%2FP77eF3Y5nvlLWoCIkg46XcSZuQ7mPv%2FrVoDYHogDr5jOkW11qDEgHBjMnTDqBqMnrSLU6pFIbR4mzWs49FUz4wdZC1DJQtjKwslyMlaHPEbxiFompwy3AL8zbRPrfHw4O6TET7%2F%2FZO0zjrBLNLbpw53NGNF%2BWudVH1qSRmQF57asuet%2FnzFjLKcWOXo4iCokbNiIzEJgiiYjHtoBM3NhPH8vq8ouYukgX91ch2Y4oqIAzJrXmhnRKUWs5HHfrkCAh7H37D5ltdOb0Ie3XyBi3844Q0vlHICgIs4g3%2BcaTSiTD2tNHEBjqkAU6sIY%2FWA563j3qdKPt3%2B8kJJDJwInV8n83Gv%2FcjYnE95jlZe%2BvLgAIlGVr%2BUOk2xdUKsg0UFBK8n5N16D5Wu%2BGWIc6o5DTKj42TvHGYd6wANYYXXJOIkaAR%2FSkm0nptghT0C6AtC1ZEqyCFCYTcEQExGJIfCFF7noqZDXgbPtm%2BBdjDshd%2FIy30dPdPSRDwS3ZzuLd4M6rn10MFGLikK1q3Hfsr&X-Amz-Signature=ff5079b5b9e367d7deb4fbf939aace1ac5805d72b71bdb569561f7d963bfe7d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXLDAQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqfGdct%2FLwKz0u9by4RRvtB5EL%2FIkNTN54%2F4DHNItmqwIhAIVB2aFDV9Om9z%2FzZttZianWd1WUj6mZs0uuVEGzgS27KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3UL3gRWgnU4wMn2sq3APj48sM9emu9acVF7NKJ4wzdNlsgn3gkV7NC56oOVhSL7XNXiqUIJiSyP90Xg5H3Wspgqg02pnNnvcsb3b%2FjF0kgr3B5DPfVToQCzoHKbFDtTePQ7D%2BsnIQsq9iSb8G6fPcVur4Y%2Fjf3rEbDT33nVKEbnKFx%2B65zxSgsGZxPcU6nwEMriF4pf%2FBwCAwPMkU8B6amacW62VxCkLATU4YbvzRzcV%2FHGwFJVPzxvZsdGACjojX07CJsSopAMVaTkDy%2Bo%2F0Yk47COlnV%2FVSPCJS12vXHvm5%2FtTBZ0HvGwSInCoeMwtYO%2B9XoOVf6OhtYUEfoVuuAWQjafH6qkDoR%2FP77eF3Y5nvlLWoCIkg46XcSZuQ7mPv%2FrVoDYHogDr5jOkW11qDEgHBjMnTDqBqMnrSLU6pFIbR4mzWs49FUz4wdZC1DJQtjKwslyMlaHPEbxiFompwy3AL8zbRPrfHw4O6TET7%2F%2FZO0zjrBLNLbpw53NGNF%2BWudVH1qSRmQF57asuet%2FnzFjLKcWOXo4iCokbNiIzEJgiiYjHtoBM3NhPH8vq8ouYukgX91ch2Y4oqIAzJrXmhnRKUWs5HHfrkCAh7H37D5ltdOb0Ie3XyBi3844Q0vlHICgIs4g3%2BcaTSiTD2tNHEBjqkAU6sIY%2FWA563j3qdKPt3%2B8kJJDJwInV8n83Gv%2FcjYnE95jlZe%2BvLgAIlGVr%2BUOk2xdUKsg0UFBK8n5N16D5Wu%2BGWIc6o5DTKj42TvHGYd6wANYYXXJOIkaAR%2FSkm0nptghT0C6AtC1ZEqyCFCYTcEQExGJIfCFF7noqZDXgbPtm%2BBdjDshd%2FIy30dPdPSRDwS3ZzuLd4M6rn10MFGLikK1q3Hfsr&X-Amz-Signature=3fe9fa1b435c9ac40beea7e104d7a04bb1079d82ab7ed7363bdb66b4f69cf6aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXLDAQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqfGdct%2FLwKz0u9by4RRvtB5EL%2FIkNTN54%2F4DHNItmqwIhAIVB2aFDV9Om9z%2FzZttZianWd1WUj6mZs0uuVEGzgS27KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3UL3gRWgnU4wMn2sq3APj48sM9emu9acVF7NKJ4wzdNlsgn3gkV7NC56oOVhSL7XNXiqUIJiSyP90Xg5H3Wspgqg02pnNnvcsb3b%2FjF0kgr3B5DPfVToQCzoHKbFDtTePQ7D%2BsnIQsq9iSb8G6fPcVur4Y%2Fjf3rEbDT33nVKEbnKFx%2B65zxSgsGZxPcU6nwEMriF4pf%2FBwCAwPMkU8B6amacW62VxCkLATU4YbvzRzcV%2FHGwFJVPzxvZsdGACjojX07CJsSopAMVaTkDy%2Bo%2F0Yk47COlnV%2FVSPCJS12vXHvm5%2FtTBZ0HvGwSInCoeMwtYO%2B9XoOVf6OhtYUEfoVuuAWQjafH6qkDoR%2FP77eF3Y5nvlLWoCIkg46XcSZuQ7mPv%2FrVoDYHogDr5jOkW11qDEgHBjMnTDqBqMnrSLU6pFIbR4mzWs49FUz4wdZC1DJQtjKwslyMlaHPEbxiFompwy3AL8zbRPrfHw4O6TET7%2F%2FZO0zjrBLNLbpw53NGNF%2BWudVH1qSRmQF57asuet%2FnzFjLKcWOXo4iCokbNiIzEJgiiYjHtoBM3NhPH8vq8ouYukgX91ch2Y4oqIAzJrXmhnRKUWs5HHfrkCAh7H37D5ltdOb0Ie3XyBi3844Q0vlHICgIs4g3%2BcaTSiTD2tNHEBjqkAU6sIY%2FWA563j3qdKPt3%2B8kJJDJwInV8n83Gv%2FcjYnE95jlZe%2BvLgAIlGVr%2BUOk2xdUKsg0UFBK8n5N16D5Wu%2BGWIc6o5DTKj42TvHGYd6wANYYXXJOIkaAR%2FSkm0nptghT0C6AtC1ZEqyCFCYTcEQExGJIfCFF7noqZDXgbPtm%2BBdjDshd%2FIy30dPdPSRDwS3ZzuLd4M6rn10MFGLikK1q3Hfsr&X-Amz-Signature=9b52455b9f599016cd0d637e6c56eb119daaecd1b562755bc88f52a22e938836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXLDAQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqfGdct%2FLwKz0u9by4RRvtB5EL%2FIkNTN54%2F4DHNItmqwIhAIVB2aFDV9Om9z%2FzZttZianWd1WUj6mZs0uuVEGzgS27KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3UL3gRWgnU4wMn2sq3APj48sM9emu9acVF7NKJ4wzdNlsgn3gkV7NC56oOVhSL7XNXiqUIJiSyP90Xg5H3Wspgqg02pnNnvcsb3b%2FjF0kgr3B5DPfVToQCzoHKbFDtTePQ7D%2BsnIQsq9iSb8G6fPcVur4Y%2Fjf3rEbDT33nVKEbnKFx%2B65zxSgsGZxPcU6nwEMriF4pf%2FBwCAwPMkU8B6amacW62VxCkLATU4YbvzRzcV%2FHGwFJVPzxvZsdGACjojX07CJsSopAMVaTkDy%2Bo%2F0Yk47COlnV%2FVSPCJS12vXHvm5%2FtTBZ0HvGwSInCoeMwtYO%2B9XoOVf6OhtYUEfoVuuAWQjafH6qkDoR%2FP77eF3Y5nvlLWoCIkg46XcSZuQ7mPv%2FrVoDYHogDr5jOkW11qDEgHBjMnTDqBqMnrSLU6pFIbR4mzWs49FUz4wdZC1DJQtjKwslyMlaHPEbxiFompwy3AL8zbRPrfHw4O6TET7%2F%2FZO0zjrBLNLbpw53NGNF%2BWudVH1qSRmQF57asuet%2FnzFjLKcWOXo4iCokbNiIzEJgiiYjHtoBM3NhPH8vq8ouYukgX91ch2Y4oqIAzJrXmhnRKUWs5HHfrkCAh7H37D5ltdOb0Ie3XyBi3844Q0vlHICgIs4g3%2BcaTSiTD2tNHEBjqkAU6sIY%2FWA563j3qdKPt3%2B8kJJDJwInV8n83Gv%2FcjYnE95jlZe%2BvLgAIlGVr%2BUOk2xdUKsg0UFBK8n5N16D5Wu%2BGWIc6o5DTKj42TvHGYd6wANYYXXJOIkaAR%2FSkm0nptghT0C6AtC1ZEqyCFCYTcEQExGJIfCFF7noqZDXgbPtm%2BBdjDshd%2FIy30dPdPSRDwS3ZzuLd4M6rn10MFGLikK1q3Hfsr&X-Amz-Signature=091fdbaf2ea75b71fdd9df9fc022037691cf5b49aa8f58162c8a131ba29f776f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXLDAQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqfGdct%2FLwKz0u9by4RRvtB5EL%2FIkNTN54%2F4DHNItmqwIhAIVB2aFDV9Om9z%2FzZttZianWd1WUj6mZs0uuVEGzgS27KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3UL3gRWgnU4wMn2sq3APj48sM9emu9acVF7NKJ4wzdNlsgn3gkV7NC56oOVhSL7XNXiqUIJiSyP90Xg5H3Wspgqg02pnNnvcsb3b%2FjF0kgr3B5DPfVToQCzoHKbFDtTePQ7D%2BsnIQsq9iSb8G6fPcVur4Y%2Fjf3rEbDT33nVKEbnKFx%2B65zxSgsGZxPcU6nwEMriF4pf%2FBwCAwPMkU8B6amacW62VxCkLATU4YbvzRzcV%2FHGwFJVPzxvZsdGACjojX07CJsSopAMVaTkDy%2Bo%2F0Yk47COlnV%2FVSPCJS12vXHvm5%2FtTBZ0HvGwSInCoeMwtYO%2B9XoOVf6OhtYUEfoVuuAWQjafH6qkDoR%2FP77eF3Y5nvlLWoCIkg46XcSZuQ7mPv%2FrVoDYHogDr5jOkW11qDEgHBjMnTDqBqMnrSLU6pFIbR4mzWs49FUz4wdZC1DJQtjKwslyMlaHPEbxiFompwy3AL8zbRPrfHw4O6TET7%2F%2FZO0zjrBLNLbpw53NGNF%2BWudVH1qSRmQF57asuet%2FnzFjLKcWOXo4iCokbNiIzEJgiiYjHtoBM3NhPH8vq8ouYukgX91ch2Y4oqIAzJrXmhnRKUWs5HHfrkCAh7H37D5ltdOb0Ie3XyBi3844Q0vlHICgIs4g3%2BcaTSiTD2tNHEBjqkAU6sIY%2FWA563j3qdKPt3%2B8kJJDJwInV8n83Gv%2FcjYnE95jlZe%2BvLgAIlGVr%2BUOk2xdUKsg0UFBK8n5N16D5Wu%2BGWIc6o5DTKj42TvHGYd6wANYYXXJOIkaAR%2FSkm0nptghT0C6AtC1ZEqyCFCYTcEQExGJIfCFF7noqZDXgbPtm%2BBdjDshd%2FIy30dPdPSRDwS3ZzuLd4M6rn10MFGLikK1q3Hfsr&X-Amz-Signature=f202990382a56809d5cc951dddcba972be30116e6a780a9f8452ceec91448aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXLDAQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqfGdct%2FLwKz0u9by4RRvtB5EL%2FIkNTN54%2F4DHNItmqwIhAIVB2aFDV9Om9z%2FzZttZianWd1WUj6mZs0uuVEGzgS27KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3UL3gRWgnU4wMn2sq3APj48sM9emu9acVF7NKJ4wzdNlsgn3gkV7NC56oOVhSL7XNXiqUIJiSyP90Xg5H3Wspgqg02pnNnvcsb3b%2FjF0kgr3B5DPfVToQCzoHKbFDtTePQ7D%2BsnIQsq9iSb8G6fPcVur4Y%2Fjf3rEbDT33nVKEbnKFx%2B65zxSgsGZxPcU6nwEMriF4pf%2FBwCAwPMkU8B6amacW62VxCkLATU4YbvzRzcV%2FHGwFJVPzxvZsdGACjojX07CJsSopAMVaTkDy%2Bo%2F0Yk47COlnV%2FVSPCJS12vXHvm5%2FtTBZ0HvGwSInCoeMwtYO%2B9XoOVf6OhtYUEfoVuuAWQjafH6qkDoR%2FP77eF3Y5nvlLWoCIkg46XcSZuQ7mPv%2FrVoDYHogDr5jOkW11qDEgHBjMnTDqBqMnrSLU6pFIbR4mzWs49FUz4wdZC1DJQtjKwslyMlaHPEbxiFompwy3AL8zbRPrfHw4O6TET7%2F%2FZO0zjrBLNLbpw53NGNF%2BWudVH1qSRmQF57asuet%2FnzFjLKcWOXo4iCokbNiIzEJgiiYjHtoBM3NhPH8vq8ouYukgX91ch2Y4oqIAzJrXmhnRKUWs5HHfrkCAh7H37D5ltdOb0Ie3XyBi3844Q0vlHICgIs4g3%2BcaTSiTD2tNHEBjqkAU6sIY%2FWA563j3qdKPt3%2B8kJJDJwInV8n83Gv%2FcjYnE95jlZe%2BvLgAIlGVr%2BUOk2xdUKsg0UFBK8n5N16D5Wu%2BGWIc6o5DTKj42TvHGYd6wANYYXXJOIkaAR%2FSkm0nptghT0C6AtC1ZEqyCFCYTcEQExGJIfCFF7noqZDXgbPtm%2BBdjDshd%2FIy30dPdPSRDwS3ZzuLd4M6rn10MFGLikK1q3Hfsr&X-Amz-Signature=7815237c697af730f2b1ffe2d162a5144dbe6fa049e37d6ee7e2e199ab011932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QXLDAQX%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T091609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqfGdct%2FLwKz0u9by4RRvtB5EL%2FIkNTN54%2F4DHNItmqwIhAIVB2aFDV9Om9z%2FzZttZianWd1WUj6mZs0uuVEGzgS27KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3UL3gRWgnU4wMn2sq3APj48sM9emu9acVF7NKJ4wzdNlsgn3gkV7NC56oOVhSL7XNXiqUIJiSyP90Xg5H3Wspgqg02pnNnvcsb3b%2FjF0kgr3B5DPfVToQCzoHKbFDtTePQ7D%2BsnIQsq9iSb8G6fPcVur4Y%2Fjf3rEbDT33nVKEbnKFx%2B65zxSgsGZxPcU6nwEMriF4pf%2FBwCAwPMkU8B6amacW62VxCkLATU4YbvzRzcV%2FHGwFJVPzxvZsdGACjojX07CJsSopAMVaTkDy%2Bo%2F0Yk47COlnV%2FVSPCJS12vXHvm5%2FtTBZ0HvGwSInCoeMwtYO%2B9XoOVf6OhtYUEfoVuuAWQjafH6qkDoR%2FP77eF3Y5nvlLWoCIkg46XcSZuQ7mPv%2FrVoDYHogDr5jOkW11qDEgHBjMnTDqBqMnrSLU6pFIbR4mzWs49FUz4wdZC1DJQtjKwslyMlaHPEbxiFompwy3AL8zbRPrfHw4O6TET7%2F%2FZO0zjrBLNLbpw53NGNF%2BWudVH1qSRmQF57asuet%2FnzFjLKcWOXo4iCokbNiIzEJgiiYjHtoBM3NhPH8vq8ouYukgX91ch2Y4oqIAzJrXmhnRKUWs5HHfrkCAh7H37D5ltdOb0Ie3XyBi3844Q0vlHICgIs4g3%2BcaTSiTD2tNHEBjqkAU6sIY%2FWA563j3qdKPt3%2B8kJJDJwInV8n83Gv%2FcjYnE95jlZe%2BvLgAIlGVr%2BUOk2xdUKsg0UFBK8n5N16D5Wu%2BGWIc6o5DTKj42TvHGYd6wANYYXXJOIkaAR%2FSkm0nptghT0C6AtC1ZEqyCFCYTcEQExGJIfCFF7noqZDXgbPtm%2BBdjDshd%2FIy30dPdPSRDwS3ZzuLd4M6rn10MFGLikK1q3Hfsr&X-Amz-Signature=c1ddaa467589cbd945d074a7eb8fd203331f02ebb713cfd9b315f2b0f209c860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
