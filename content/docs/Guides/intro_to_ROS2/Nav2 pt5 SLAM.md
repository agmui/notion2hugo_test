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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ5ULVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDB%2BwoB%2FsX9SZqjbmlMgVPCgscR4c4yI7ql%2FZcHMOXRTAiEA08PcdyJkMcSnPiN0lIQaVqMq%2FI%2F9iLXiRxs2qFarm8wq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAKu93Axqj5rAovPeSrcAz00QoY0uEp78QJSnTiCIMJCwNKmcSPx7tkwjNRLHnH81j2kImBfJGpiGbqJ4vDUSfT%2F2m8zHxsSdFaTk0PI%2BzfdkmZ5Cp3ALfFxc3qF0vG5R12QdJ6xgZiGdTNZLnTsC12WAxb2%2BevQps2okKeyc1ke8%2BzBSU%2F6FVU4up6ujSjy%2B7AB0rY%2BX2ZeeNxksqr8Ug2bQWUUUK0e1NVZSd0TaDrBVJZeLfOQHd%2Bqv24bKSsvcKkbrW4zMUN3KX4hM101mTul9WcfIRoQay9PxGca%2FMNgbDABCPvbhbGayXwdzCsXnjEHcu3onxe%2FXcztt%2FvbQ4R08ZR6MVI3FgJUrzNYFIeOtWrNxk%2Fu9AzcGiUqaDO0g8EqmuCd4liCraJR28fkQoXC3fLenucm5N27FLtBZBGUTsHrpgs%2BUNlmkzmjPlKAOa5be%2BU6XPJtM1eODgAC%2FZzMBrTuRWZE7j%2FwWlZN3ADayDnM9SD5Lg6sMnBAeMS4%2BSL8SoLeq1LNX0ElEIADEwrRmvBLjl0%2Fvg%2BCKIoOp0GJluqxOSUcw0K4NRUzeaZopWyqOeT5XdCLuRPvigzsNw7WVOSa0zVmI5D4HbX0DnL9yojIJWjEKh6XleqTZGOF%2BujSxXQgSGOrLdpAMJSNxsQGOqUB42ukZuOHUQmJ65U%2BPqp2Tw51WaUYqSoerMlYLUzXqKg3KwpMj26fE1Oxtmhdhb49VQH1gZyAazI75npNe0PsouBhuas4xKSQb5fHxFXHDGga%2B6pzqhkAOftJJPlDL2JIuOqWbfliB6b8YhZ%2FNQeLZCEbQfBUypoDjH%2Bh1cZUXsVOet%2FjjjjTBtExivwUbnsfE1ESMXV0AkBcSPVbN%2BfwzLe5yaM3&X-Amz-Signature=44b9a1736ab827084fe6ebf325ac81d239bc7cfdb7883dba70aa432c5a2c1024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ5ULVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDB%2BwoB%2FsX9SZqjbmlMgVPCgscR4c4yI7ql%2FZcHMOXRTAiEA08PcdyJkMcSnPiN0lIQaVqMq%2FI%2F9iLXiRxs2qFarm8wq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAKu93Axqj5rAovPeSrcAz00QoY0uEp78QJSnTiCIMJCwNKmcSPx7tkwjNRLHnH81j2kImBfJGpiGbqJ4vDUSfT%2F2m8zHxsSdFaTk0PI%2BzfdkmZ5Cp3ALfFxc3qF0vG5R12QdJ6xgZiGdTNZLnTsC12WAxb2%2BevQps2okKeyc1ke8%2BzBSU%2F6FVU4up6ujSjy%2B7AB0rY%2BX2ZeeNxksqr8Ug2bQWUUUK0e1NVZSd0TaDrBVJZeLfOQHd%2Bqv24bKSsvcKkbrW4zMUN3KX4hM101mTul9WcfIRoQay9PxGca%2FMNgbDABCPvbhbGayXwdzCsXnjEHcu3onxe%2FXcztt%2FvbQ4R08ZR6MVI3FgJUrzNYFIeOtWrNxk%2Fu9AzcGiUqaDO0g8EqmuCd4liCraJR28fkQoXC3fLenucm5N27FLtBZBGUTsHrpgs%2BUNlmkzmjPlKAOa5be%2BU6XPJtM1eODgAC%2FZzMBrTuRWZE7j%2FwWlZN3ADayDnM9SD5Lg6sMnBAeMS4%2BSL8SoLeq1LNX0ElEIADEwrRmvBLjl0%2Fvg%2BCKIoOp0GJluqxOSUcw0K4NRUzeaZopWyqOeT5XdCLuRPvigzsNw7WVOSa0zVmI5D4HbX0DnL9yojIJWjEKh6XleqTZGOF%2BujSxXQgSGOrLdpAMJSNxsQGOqUB42ukZuOHUQmJ65U%2BPqp2Tw51WaUYqSoerMlYLUzXqKg3KwpMj26fE1Oxtmhdhb49VQH1gZyAazI75npNe0PsouBhuas4xKSQb5fHxFXHDGga%2B6pzqhkAOftJJPlDL2JIuOqWbfliB6b8YhZ%2FNQeLZCEbQfBUypoDjH%2Bh1cZUXsVOet%2FjjjjTBtExivwUbnsfE1ESMXV0AkBcSPVbN%2BfwzLe5yaM3&X-Amz-Signature=fe8f8fe90c3a4ab6eeb55299c9844afe3caddbdee91d7a2a7e1b709c32ede75b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ5ULVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDB%2BwoB%2FsX9SZqjbmlMgVPCgscR4c4yI7ql%2FZcHMOXRTAiEA08PcdyJkMcSnPiN0lIQaVqMq%2FI%2F9iLXiRxs2qFarm8wq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAKu93Axqj5rAovPeSrcAz00QoY0uEp78QJSnTiCIMJCwNKmcSPx7tkwjNRLHnH81j2kImBfJGpiGbqJ4vDUSfT%2F2m8zHxsSdFaTk0PI%2BzfdkmZ5Cp3ALfFxc3qF0vG5R12QdJ6xgZiGdTNZLnTsC12WAxb2%2BevQps2okKeyc1ke8%2BzBSU%2F6FVU4up6ujSjy%2B7AB0rY%2BX2ZeeNxksqr8Ug2bQWUUUK0e1NVZSd0TaDrBVJZeLfOQHd%2Bqv24bKSsvcKkbrW4zMUN3KX4hM101mTul9WcfIRoQay9PxGca%2FMNgbDABCPvbhbGayXwdzCsXnjEHcu3onxe%2FXcztt%2FvbQ4R08ZR6MVI3FgJUrzNYFIeOtWrNxk%2Fu9AzcGiUqaDO0g8EqmuCd4liCraJR28fkQoXC3fLenucm5N27FLtBZBGUTsHrpgs%2BUNlmkzmjPlKAOa5be%2BU6XPJtM1eODgAC%2FZzMBrTuRWZE7j%2FwWlZN3ADayDnM9SD5Lg6sMnBAeMS4%2BSL8SoLeq1LNX0ElEIADEwrRmvBLjl0%2Fvg%2BCKIoOp0GJluqxOSUcw0K4NRUzeaZopWyqOeT5XdCLuRPvigzsNw7WVOSa0zVmI5D4HbX0DnL9yojIJWjEKh6XleqTZGOF%2BujSxXQgSGOrLdpAMJSNxsQGOqUB42ukZuOHUQmJ65U%2BPqp2Tw51WaUYqSoerMlYLUzXqKg3KwpMj26fE1Oxtmhdhb49VQH1gZyAazI75npNe0PsouBhuas4xKSQb5fHxFXHDGga%2B6pzqhkAOftJJPlDL2JIuOqWbfliB6b8YhZ%2FNQeLZCEbQfBUypoDjH%2Bh1cZUXsVOet%2FjjjjTBtExivwUbnsfE1ESMXV0AkBcSPVbN%2BfwzLe5yaM3&X-Amz-Signature=24e8e7be6cc47f3abaace3067081fc4299c799b3465957ebbf141fe4186651f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ5ULVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDB%2BwoB%2FsX9SZqjbmlMgVPCgscR4c4yI7ql%2FZcHMOXRTAiEA08PcdyJkMcSnPiN0lIQaVqMq%2FI%2F9iLXiRxs2qFarm8wq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAKu93Axqj5rAovPeSrcAz00QoY0uEp78QJSnTiCIMJCwNKmcSPx7tkwjNRLHnH81j2kImBfJGpiGbqJ4vDUSfT%2F2m8zHxsSdFaTk0PI%2BzfdkmZ5Cp3ALfFxc3qF0vG5R12QdJ6xgZiGdTNZLnTsC12WAxb2%2BevQps2okKeyc1ke8%2BzBSU%2F6FVU4up6ujSjy%2B7AB0rY%2BX2ZeeNxksqr8Ug2bQWUUUK0e1NVZSd0TaDrBVJZeLfOQHd%2Bqv24bKSsvcKkbrW4zMUN3KX4hM101mTul9WcfIRoQay9PxGca%2FMNgbDABCPvbhbGayXwdzCsXnjEHcu3onxe%2FXcztt%2FvbQ4R08ZR6MVI3FgJUrzNYFIeOtWrNxk%2Fu9AzcGiUqaDO0g8EqmuCd4liCraJR28fkQoXC3fLenucm5N27FLtBZBGUTsHrpgs%2BUNlmkzmjPlKAOa5be%2BU6XPJtM1eODgAC%2FZzMBrTuRWZE7j%2FwWlZN3ADayDnM9SD5Lg6sMnBAeMS4%2BSL8SoLeq1LNX0ElEIADEwrRmvBLjl0%2Fvg%2BCKIoOp0GJluqxOSUcw0K4NRUzeaZopWyqOeT5XdCLuRPvigzsNw7WVOSa0zVmI5D4HbX0DnL9yojIJWjEKh6XleqTZGOF%2BujSxXQgSGOrLdpAMJSNxsQGOqUB42ukZuOHUQmJ65U%2BPqp2Tw51WaUYqSoerMlYLUzXqKg3KwpMj26fE1Oxtmhdhb49VQH1gZyAazI75npNe0PsouBhuas4xKSQb5fHxFXHDGga%2B6pzqhkAOftJJPlDL2JIuOqWbfliB6b8YhZ%2FNQeLZCEbQfBUypoDjH%2Bh1cZUXsVOet%2FjjjjTBtExivwUbnsfE1ESMXV0AkBcSPVbN%2BfwzLe5yaM3&X-Amz-Signature=bd97c3d2b4ab008f31dd709c8397399eedcb2a836709ad8cfd0e824604b2c0c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ5ULVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDB%2BwoB%2FsX9SZqjbmlMgVPCgscR4c4yI7ql%2FZcHMOXRTAiEA08PcdyJkMcSnPiN0lIQaVqMq%2FI%2F9iLXiRxs2qFarm8wq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAKu93Axqj5rAovPeSrcAz00QoY0uEp78QJSnTiCIMJCwNKmcSPx7tkwjNRLHnH81j2kImBfJGpiGbqJ4vDUSfT%2F2m8zHxsSdFaTk0PI%2BzfdkmZ5Cp3ALfFxc3qF0vG5R12QdJ6xgZiGdTNZLnTsC12WAxb2%2BevQps2okKeyc1ke8%2BzBSU%2F6FVU4up6ujSjy%2B7AB0rY%2BX2ZeeNxksqr8Ug2bQWUUUK0e1NVZSd0TaDrBVJZeLfOQHd%2Bqv24bKSsvcKkbrW4zMUN3KX4hM101mTul9WcfIRoQay9PxGca%2FMNgbDABCPvbhbGayXwdzCsXnjEHcu3onxe%2FXcztt%2FvbQ4R08ZR6MVI3FgJUrzNYFIeOtWrNxk%2Fu9AzcGiUqaDO0g8EqmuCd4liCraJR28fkQoXC3fLenucm5N27FLtBZBGUTsHrpgs%2BUNlmkzmjPlKAOa5be%2BU6XPJtM1eODgAC%2FZzMBrTuRWZE7j%2FwWlZN3ADayDnM9SD5Lg6sMnBAeMS4%2BSL8SoLeq1LNX0ElEIADEwrRmvBLjl0%2Fvg%2BCKIoOp0GJluqxOSUcw0K4NRUzeaZopWyqOeT5XdCLuRPvigzsNw7WVOSa0zVmI5D4HbX0DnL9yojIJWjEKh6XleqTZGOF%2BujSxXQgSGOrLdpAMJSNxsQGOqUB42ukZuOHUQmJ65U%2BPqp2Tw51WaUYqSoerMlYLUzXqKg3KwpMj26fE1Oxtmhdhb49VQH1gZyAazI75npNe0PsouBhuas4xKSQb5fHxFXHDGga%2B6pzqhkAOftJJPlDL2JIuOqWbfliB6b8YhZ%2FNQeLZCEbQfBUypoDjH%2Bh1cZUXsVOet%2FjjjjTBtExivwUbnsfE1ESMXV0AkBcSPVbN%2BfwzLe5yaM3&X-Amz-Signature=6f8cde4988e53e6a233b67773079fd0ad08cbcccd01c179ab56350b02fdecfa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ5ULVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDB%2BwoB%2FsX9SZqjbmlMgVPCgscR4c4yI7ql%2FZcHMOXRTAiEA08PcdyJkMcSnPiN0lIQaVqMq%2FI%2F9iLXiRxs2qFarm8wq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAKu93Axqj5rAovPeSrcAz00QoY0uEp78QJSnTiCIMJCwNKmcSPx7tkwjNRLHnH81j2kImBfJGpiGbqJ4vDUSfT%2F2m8zHxsSdFaTk0PI%2BzfdkmZ5Cp3ALfFxc3qF0vG5R12QdJ6xgZiGdTNZLnTsC12WAxb2%2BevQps2okKeyc1ke8%2BzBSU%2F6FVU4up6ujSjy%2B7AB0rY%2BX2ZeeNxksqr8Ug2bQWUUUK0e1NVZSd0TaDrBVJZeLfOQHd%2Bqv24bKSsvcKkbrW4zMUN3KX4hM101mTul9WcfIRoQay9PxGca%2FMNgbDABCPvbhbGayXwdzCsXnjEHcu3onxe%2FXcztt%2FvbQ4R08ZR6MVI3FgJUrzNYFIeOtWrNxk%2Fu9AzcGiUqaDO0g8EqmuCd4liCraJR28fkQoXC3fLenucm5N27FLtBZBGUTsHrpgs%2BUNlmkzmjPlKAOa5be%2BU6XPJtM1eODgAC%2FZzMBrTuRWZE7j%2FwWlZN3ADayDnM9SD5Lg6sMnBAeMS4%2BSL8SoLeq1LNX0ElEIADEwrRmvBLjl0%2Fvg%2BCKIoOp0GJluqxOSUcw0K4NRUzeaZopWyqOeT5XdCLuRPvigzsNw7WVOSa0zVmI5D4HbX0DnL9yojIJWjEKh6XleqTZGOF%2BujSxXQgSGOrLdpAMJSNxsQGOqUB42ukZuOHUQmJ65U%2BPqp2Tw51WaUYqSoerMlYLUzXqKg3KwpMj26fE1Oxtmhdhb49VQH1gZyAazI75npNe0PsouBhuas4xKSQb5fHxFXHDGga%2B6pzqhkAOftJJPlDL2JIuOqWbfliB6b8YhZ%2FNQeLZCEbQfBUypoDjH%2Bh1cZUXsVOet%2FjjjjTBtExivwUbnsfE1ESMXV0AkBcSPVbN%2BfwzLe5yaM3&X-Amz-Signature=935eb2487c07ab03768766044185350ecfef1c161840a001495cb9bf7f41f6e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ5ULVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDB%2BwoB%2FsX9SZqjbmlMgVPCgscR4c4yI7ql%2FZcHMOXRTAiEA08PcdyJkMcSnPiN0lIQaVqMq%2FI%2F9iLXiRxs2qFarm8wq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAKu93Axqj5rAovPeSrcAz00QoY0uEp78QJSnTiCIMJCwNKmcSPx7tkwjNRLHnH81j2kImBfJGpiGbqJ4vDUSfT%2F2m8zHxsSdFaTk0PI%2BzfdkmZ5Cp3ALfFxc3qF0vG5R12QdJ6xgZiGdTNZLnTsC12WAxb2%2BevQps2okKeyc1ke8%2BzBSU%2F6FVU4up6ujSjy%2B7AB0rY%2BX2ZeeNxksqr8Ug2bQWUUUK0e1NVZSd0TaDrBVJZeLfOQHd%2Bqv24bKSsvcKkbrW4zMUN3KX4hM101mTul9WcfIRoQay9PxGca%2FMNgbDABCPvbhbGayXwdzCsXnjEHcu3onxe%2FXcztt%2FvbQ4R08ZR6MVI3FgJUrzNYFIeOtWrNxk%2Fu9AzcGiUqaDO0g8EqmuCd4liCraJR28fkQoXC3fLenucm5N27FLtBZBGUTsHrpgs%2BUNlmkzmjPlKAOa5be%2BU6XPJtM1eODgAC%2FZzMBrTuRWZE7j%2FwWlZN3ADayDnM9SD5Lg6sMnBAeMS4%2BSL8SoLeq1LNX0ElEIADEwrRmvBLjl0%2Fvg%2BCKIoOp0GJluqxOSUcw0K4NRUzeaZopWyqOeT5XdCLuRPvigzsNw7WVOSa0zVmI5D4HbX0DnL9yojIJWjEKh6XleqTZGOF%2BujSxXQgSGOrLdpAMJSNxsQGOqUB42ukZuOHUQmJ65U%2BPqp2Tw51WaUYqSoerMlYLUzXqKg3KwpMj26fE1Oxtmhdhb49VQH1gZyAazI75npNe0PsouBhuas4xKSQb5fHxFXHDGga%2B6pzqhkAOftJJPlDL2JIuOqWbfliB6b8YhZ%2FNQeLZCEbQfBUypoDjH%2Bh1cZUXsVOet%2FjjjjTBtExivwUbnsfE1ESMXV0AkBcSPVbN%2BfwzLe5yaM3&X-Amz-Signature=f7ce50b702497b8450e69b4393a0d4e49df0a885fb3b39d09011d22bfe3c9b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ5ULVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDB%2BwoB%2FsX9SZqjbmlMgVPCgscR4c4yI7ql%2FZcHMOXRTAiEA08PcdyJkMcSnPiN0lIQaVqMq%2FI%2F9iLXiRxs2qFarm8wq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAKu93Axqj5rAovPeSrcAz00QoY0uEp78QJSnTiCIMJCwNKmcSPx7tkwjNRLHnH81j2kImBfJGpiGbqJ4vDUSfT%2F2m8zHxsSdFaTk0PI%2BzfdkmZ5Cp3ALfFxc3qF0vG5R12QdJ6xgZiGdTNZLnTsC12WAxb2%2BevQps2okKeyc1ke8%2BzBSU%2F6FVU4up6ujSjy%2B7AB0rY%2BX2ZeeNxksqr8Ug2bQWUUUK0e1NVZSd0TaDrBVJZeLfOQHd%2Bqv24bKSsvcKkbrW4zMUN3KX4hM101mTul9WcfIRoQay9PxGca%2FMNgbDABCPvbhbGayXwdzCsXnjEHcu3onxe%2FXcztt%2FvbQ4R08ZR6MVI3FgJUrzNYFIeOtWrNxk%2Fu9AzcGiUqaDO0g8EqmuCd4liCraJR28fkQoXC3fLenucm5N27FLtBZBGUTsHrpgs%2BUNlmkzmjPlKAOa5be%2BU6XPJtM1eODgAC%2FZzMBrTuRWZE7j%2FwWlZN3ADayDnM9SD5Lg6sMnBAeMS4%2BSL8SoLeq1LNX0ElEIADEwrRmvBLjl0%2Fvg%2BCKIoOp0GJluqxOSUcw0K4NRUzeaZopWyqOeT5XdCLuRPvigzsNw7WVOSa0zVmI5D4HbX0DnL9yojIJWjEKh6XleqTZGOF%2BujSxXQgSGOrLdpAMJSNxsQGOqUB42ukZuOHUQmJ65U%2BPqp2Tw51WaUYqSoerMlYLUzXqKg3KwpMj26fE1Oxtmhdhb49VQH1gZyAazI75npNe0PsouBhuas4xKSQb5fHxFXHDGga%2B6pzqhkAOftJJPlDL2JIuOqWbfliB6b8YhZ%2FNQeLZCEbQfBUypoDjH%2Bh1cZUXsVOet%2FjjjjTBtExivwUbnsfE1ESMXV0AkBcSPVbN%2BfwzLe5yaM3&X-Amz-Signature=b592ecfeae8abc7e866fe37cab613dda551ab69b98f6eda286650b58211a8163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ5ULVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDB%2BwoB%2FsX9SZqjbmlMgVPCgscR4c4yI7ql%2FZcHMOXRTAiEA08PcdyJkMcSnPiN0lIQaVqMq%2FI%2F9iLXiRxs2qFarm8wq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAKu93Axqj5rAovPeSrcAz00QoY0uEp78QJSnTiCIMJCwNKmcSPx7tkwjNRLHnH81j2kImBfJGpiGbqJ4vDUSfT%2F2m8zHxsSdFaTk0PI%2BzfdkmZ5Cp3ALfFxc3qF0vG5R12QdJ6xgZiGdTNZLnTsC12WAxb2%2BevQps2okKeyc1ke8%2BzBSU%2F6FVU4up6ujSjy%2B7AB0rY%2BX2ZeeNxksqr8Ug2bQWUUUK0e1NVZSd0TaDrBVJZeLfOQHd%2Bqv24bKSsvcKkbrW4zMUN3KX4hM101mTul9WcfIRoQay9PxGca%2FMNgbDABCPvbhbGayXwdzCsXnjEHcu3onxe%2FXcztt%2FvbQ4R08ZR6MVI3FgJUrzNYFIeOtWrNxk%2Fu9AzcGiUqaDO0g8EqmuCd4liCraJR28fkQoXC3fLenucm5N27FLtBZBGUTsHrpgs%2BUNlmkzmjPlKAOa5be%2BU6XPJtM1eODgAC%2FZzMBrTuRWZE7j%2FwWlZN3ADayDnM9SD5Lg6sMnBAeMS4%2BSL8SoLeq1LNX0ElEIADEwrRmvBLjl0%2Fvg%2BCKIoOp0GJluqxOSUcw0K4NRUzeaZopWyqOeT5XdCLuRPvigzsNw7WVOSa0zVmI5D4HbX0DnL9yojIJWjEKh6XleqTZGOF%2BujSxXQgSGOrLdpAMJSNxsQGOqUB42ukZuOHUQmJ65U%2BPqp2Tw51WaUYqSoerMlYLUzXqKg3KwpMj26fE1Oxtmhdhb49VQH1gZyAazI75npNe0PsouBhuas4xKSQb5fHxFXHDGga%2B6pzqhkAOftJJPlDL2JIuOqWbfliB6b8YhZ%2FNQeLZCEbQfBUypoDjH%2Bh1cZUXsVOet%2FjjjjTBtExivwUbnsfE1ESMXV0AkBcSPVbN%2BfwzLe5yaM3&X-Amz-Signature=a0cef5ee1859c9dc1aa09db75216a6d37193aa66ce572c1313ae40d33fc5bfb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ5ULVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDB%2BwoB%2FsX9SZqjbmlMgVPCgscR4c4yI7ql%2FZcHMOXRTAiEA08PcdyJkMcSnPiN0lIQaVqMq%2FI%2F9iLXiRxs2qFarm8wq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAKu93Axqj5rAovPeSrcAz00QoY0uEp78QJSnTiCIMJCwNKmcSPx7tkwjNRLHnH81j2kImBfJGpiGbqJ4vDUSfT%2F2m8zHxsSdFaTk0PI%2BzfdkmZ5Cp3ALfFxc3qF0vG5R12QdJ6xgZiGdTNZLnTsC12WAxb2%2BevQps2okKeyc1ke8%2BzBSU%2F6FVU4up6ujSjy%2B7AB0rY%2BX2ZeeNxksqr8Ug2bQWUUUK0e1NVZSd0TaDrBVJZeLfOQHd%2Bqv24bKSsvcKkbrW4zMUN3KX4hM101mTul9WcfIRoQay9PxGca%2FMNgbDABCPvbhbGayXwdzCsXnjEHcu3onxe%2FXcztt%2FvbQ4R08ZR6MVI3FgJUrzNYFIeOtWrNxk%2Fu9AzcGiUqaDO0g8EqmuCd4liCraJR28fkQoXC3fLenucm5N27FLtBZBGUTsHrpgs%2BUNlmkzmjPlKAOa5be%2BU6XPJtM1eODgAC%2FZzMBrTuRWZE7j%2FwWlZN3ADayDnM9SD5Lg6sMnBAeMS4%2BSL8SoLeq1LNX0ElEIADEwrRmvBLjl0%2Fvg%2BCKIoOp0GJluqxOSUcw0K4NRUzeaZopWyqOeT5XdCLuRPvigzsNw7WVOSa0zVmI5D4HbX0DnL9yojIJWjEKh6XleqTZGOF%2BujSxXQgSGOrLdpAMJSNxsQGOqUB42ukZuOHUQmJ65U%2BPqp2Tw51WaUYqSoerMlYLUzXqKg3KwpMj26fE1Oxtmhdhb49VQH1gZyAazI75npNe0PsouBhuas4xKSQb5fHxFXHDGga%2B6pzqhkAOftJJPlDL2JIuOqWbfliB6b8YhZ%2FNQeLZCEbQfBUypoDjH%2Bh1cZUXsVOet%2FjjjjTBtExivwUbnsfE1ESMXV0AkBcSPVbN%2BfwzLe5yaM3&X-Amz-Signature=392bcd555d25291fce4c203de5dd7a9a3a5a01cee45cc76d919d24b34f991310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ5ULVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDB%2BwoB%2FsX9SZqjbmlMgVPCgscR4c4yI7ql%2FZcHMOXRTAiEA08PcdyJkMcSnPiN0lIQaVqMq%2FI%2F9iLXiRxs2qFarm8wq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAKu93Axqj5rAovPeSrcAz00QoY0uEp78QJSnTiCIMJCwNKmcSPx7tkwjNRLHnH81j2kImBfJGpiGbqJ4vDUSfT%2F2m8zHxsSdFaTk0PI%2BzfdkmZ5Cp3ALfFxc3qF0vG5R12QdJ6xgZiGdTNZLnTsC12WAxb2%2BevQps2okKeyc1ke8%2BzBSU%2F6FVU4up6ujSjy%2B7AB0rY%2BX2ZeeNxksqr8Ug2bQWUUUK0e1NVZSd0TaDrBVJZeLfOQHd%2Bqv24bKSsvcKkbrW4zMUN3KX4hM101mTul9WcfIRoQay9PxGca%2FMNgbDABCPvbhbGayXwdzCsXnjEHcu3onxe%2FXcztt%2FvbQ4R08ZR6MVI3FgJUrzNYFIeOtWrNxk%2Fu9AzcGiUqaDO0g8EqmuCd4liCraJR28fkQoXC3fLenucm5N27FLtBZBGUTsHrpgs%2BUNlmkzmjPlKAOa5be%2BU6XPJtM1eODgAC%2FZzMBrTuRWZE7j%2FwWlZN3ADayDnM9SD5Lg6sMnBAeMS4%2BSL8SoLeq1LNX0ElEIADEwrRmvBLjl0%2Fvg%2BCKIoOp0GJluqxOSUcw0K4NRUzeaZopWyqOeT5XdCLuRPvigzsNw7WVOSa0zVmI5D4HbX0DnL9yojIJWjEKh6XleqTZGOF%2BujSxXQgSGOrLdpAMJSNxsQGOqUB42ukZuOHUQmJ65U%2BPqp2Tw51WaUYqSoerMlYLUzXqKg3KwpMj26fE1Oxtmhdhb49VQH1gZyAazI75npNe0PsouBhuas4xKSQb5fHxFXHDGga%2B6pzqhkAOftJJPlDL2JIuOqWbfliB6b8YhZ%2FNQeLZCEbQfBUypoDjH%2Bh1cZUXsVOet%2FjjjjTBtExivwUbnsfE1ESMXV0AkBcSPVbN%2BfwzLe5yaM3&X-Amz-Signature=0a3dc95602f1bed64b1b7e5ce82b505a426988a3e9bfe1864280fc4d0c93edfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ5ULVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDB%2BwoB%2FsX9SZqjbmlMgVPCgscR4c4yI7ql%2FZcHMOXRTAiEA08PcdyJkMcSnPiN0lIQaVqMq%2FI%2F9iLXiRxs2qFarm8wq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAKu93Axqj5rAovPeSrcAz00QoY0uEp78QJSnTiCIMJCwNKmcSPx7tkwjNRLHnH81j2kImBfJGpiGbqJ4vDUSfT%2F2m8zHxsSdFaTk0PI%2BzfdkmZ5Cp3ALfFxc3qF0vG5R12QdJ6xgZiGdTNZLnTsC12WAxb2%2BevQps2okKeyc1ke8%2BzBSU%2F6FVU4up6ujSjy%2B7AB0rY%2BX2ZeeNxksqr8Ug2bQWUUUK0e1NVZSd0TaDrBVJZeLfOQHd%2Bqv24bKSsvcKkbrW4zMUN3KX4hM101mTul9WcfIRoQay9PxGca%2FMNgbDABCPvbhbGayXwdzCsXnjEHcu3onxe%2FXcztt%2FvbQ4R08ZR6MVI3FgJUrzNYFIeOtWrNxk%2Fu9AzcGiUqaDO0g8EqmuCd4liCraJR28fkQoXC3fLenucm5N27FLtBZBGUTsHrpgs%2BUNlmkzmjPlKAOa5be%2BU6XPJtM1eODgAC%2FZzMBrTuRWZE7j%2FwWlZN3ADayDnM9SD5Lg6sMnBAeMS4%2BSL8SoLeq1LNX0ElEIADEwrRmvBLjl0%2Fvg%2BCKIoOp0GJluqxOSUcw0K4NRUzeaZopWyqOeT5XdCLuRPvigzsNw7WVOSa0zVmI5D4HbX0DnL9yojIJWjEKh6XleqTZGOF%2BujSxXQgSGOrLdpAMJSNxsQGOqUB42ukZuOHUQmJ65U%2BPqp2Tw51WaUYqSoerMlYLUzXqKg3KwpMj26fE1Oxtmhdhb49VQH1gZyAazI75npNe0PsouBhuas4xKSQb5fHxFXHDGga%2B6pzqhkAOftJJPlDL2JIuOqWbfliB6b8YhZ%2FNQeLZCEbQfBUypoDjH%2Bh1cZUXsVOet%2FjjjjTBtExivwUbnsfE1ESMXV0AkBcSPVbN%2BfwzLe5yaM3&X-Amz-Signature=22bf1482fd1b5565c28f11270c9eaa9674354ab4e6817029767d87fd1772a3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ5ULVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDB%2BwoB%2FsX9SZqjbmlMgVPCgscR4c4yI7ql%2FZcHMOXRTAiEA08PcdyJkMcSnPiN0lIQaVqMq%2FI%2F9iLXiRxs2qFarm8wq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAKu93Axqj5rAovPeSrcAz00QoY0uEp78QJSnTiCIMJCwNKmcSPx7tkwjNRLHnH81j2kImBfJGpiGbqJ4vDUSfT%2F2m8zHxsSdFaTk0PI%2BzfdkmZ5Cp3ALfFxc3qF0vG5R12QdJ6xgZiGdTNZLnTsC12WAxb2%2BevQps2okKeyc1ke8%2BzBSU%2F6FVU4up6ujSjy%2B7AB0rY%2BX2ZeeNxksqr8Ug2bQWUUUK0e1NVZSd0TaDrBVJZeLfOQHd%2Bqv24bKSsvcKkbrW4zMUN3KX4hM101mTul9WcfIRoQay9PxGca%2FMNgbDABCPvbhbGayXwdzCsXnjEHcu3onxe%2FXcztt%2FvbQ4R08ZR6MVI3FgJUrzNYFIeOtWrNxk%2Fu9AzcGiUqaDO0g8EqmuCd4liCraJR28fkQoXC3fLenucm5N27FLtBZBGUTsHrpgs%2BUNlmkzmjPlKAOa5be%2BU6XPJtM1eODgAC%2FZzMBrTuRWZE7j%2FwWlZN3ADayDnM9SD5Lg6sMnBAeMS4%2BSL8SoLeq1LNX0ElEIADEwrRmvBLjl0%2Fvg%2BCKIoOp0GJluqxOSUcw0K4NRUzeaZopWyqOeT5XdCLuRPvigzsNw7WVOSa0zVmI5D4HbX0DnL9yojIJWjEKh6XleqTZGOF%2BujSxXQgSGOrLdpAMJSNxsQGOqUB42ukZuOHUQmJ65U%2BPqp2Tw51WaUYqSoerMlYLUzXqKg3KwpMj26fE1Oxtmhdhb49VQH1gZyAazI75npNe0PsouBhuas4xKSQb5fHxFXHDGga%2B6pzqhkAOftJJPlDL2JIuOqWbfliB6b8YhZ%2FNQeLZCEbQfBUypoDjH%2Bh1cZUXsVOet%2FjjjjTBtExivwUbnsfE1ESMXV0AkBcSPVbN%2BfwzLe5yaM3&X-Amz-Signature=798f3fee25c896a431b2d4bcab77e6d9ff8abf3edc31e1fbad572f6af41bf305&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJ5ULVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T052108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDB%2BwoB%2FsX9SZqjbmlMgVPCgscR4c4yI7ql%2FZcHMOXRTAiEA08PcdyJkMcSnPiN0lIQaVqMq%2FI%2F9iLXiRxs2qFarm8wq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAKu93Axqj5rAovPeSrcAz00QoY0uEp78QJSnTiCIMJCwNKmcSPx7tkwjNRLHnH81j2kImBfJGpiGbqJ4vDUSfT%2F2m8zHxsSdFaTk0PI%2BzfdkmZ5Cp3ALfFxc3qF0vG5R12QdJ6xgZiGdTNZLnTsC12WAxb2%2BevQps2okKeyc1ke8%2BzBSU%2F6FVU4up6ujSjy%2B7AB0rY%2BX2ZeeNxksqr8Ug2bQWUUUK0e1NVZSd0TaDrBVJZeLfOQHd%2Bqv24bKSsvcKkbrW4zMUN3KX4hM101mTul9WcfIRoQay9PxGca%2FMNgbDABCPvbhbGayXwdzCsXnjEHcu3onxe%2FXcztt%2FvbQ4R08ZR6MVI3FgJUrzNYFIeOtWrNxk%2Fu9AzcGiUqaDO0g8EqmuCd4liCraJR28fkQoXC3fLenucm5N27FLtBZBGUTsHrpgs%2BUNlmkzmjPlKAOa5be%2BU6XPJtM1eODgAC%2FZzMBrTuRWZE7j%2FwWlZN3ADayDnM9SD5Lg6sMnBAeMS4%2BSL8SoLeq1LNX0ElEIADEwrRmvBLjl0%2Fvg%2BCKIoOp0GJluqxOSUcw0K4NRUzeaZopWyqOeT5XdCLuRPvigzsNw7WVOSa0zVmI5D4HbX0DnL9yojIJWjEKh6XleqTZGOF%2BujSxXQgSGOrLdpAMJSNxsQGOqUB42ukZuOHUQmJ65U%2BPqp2Tw51WaUYqSoerMlYLUzXqKg3KwpMj26fE1Oxtmhdhb49VQH1gZyAazI75npNe0PsouBhuas4xKSQb5fHxFXHDGga%2B6pzqhkAOftJJPlDL2JIuOqWbfliB6b8YhZ%2FNQeLZCEbQfBUypoDjH%2Bh1cZUXsVOet%2FjjjjTBtExivwUbnsfE1ESMXV0AkBcSPVbN%2BfwzLe5yaM3&X-Amz-Signature=b2b263de65cf28c4d10839a064bfb49ee95d3c2d72589cb53ad4a99cb9e7257d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
