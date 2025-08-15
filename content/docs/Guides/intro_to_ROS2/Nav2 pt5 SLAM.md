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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HR7KALC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2Fy7iFJCDCDfUM9naPMGn6tZ2Wes2Cdlc9vPPxNPsGDAiEAoi%2F2n8RsKruOXkIaBd9eEuKlDdoT7%2BPBnlQuCUS7yToq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHhujc3EoH%2Brbl%2BfKSrcA%2FkPsVjUSRsU6oTqX9jIL2sAW8iI%2Bub3hHTkdDhaydkXXl2F8Y5mEmrGCQaaBzjsKVG68pg2lu9VehouC%2B4JVTQSAw1Fg3bmtrWO9AbcZWaQHTo5cOditeH%2FEaET%2B9NvdD8H7Hd8So9QRSWzK0yPDxH9UjGOFyMaWzu%2FIOZgKj8uTjcZn1k8VUliQLOuJ9jw5w7wwI4p%2B6c5oxqTwlH2nIKHVYOpoZFL8rtHc50aHhSSWtj61ju%2FjuunkEUi58XP3GZPdGGUbkCJY9Fo81Ih6jDGoVLNlkhK%2FaolbSzqsk0rud0J9%2BP%2BQxd1qO%2FS3aQ9QobSA3DUQClahM%2FzagsTfXLfWAasHx321FVP%2B4AHe88H9pV9nmC7TlJxojaBvbW6Qp5j3a0%2FBkiCyPPl%2BoBkTR2JGlU7Z3k2yW1GaCBwABiFmdh3cLZxoC2ML0Mg3wHhQI2K2WQK%2Bm2MP3Z3F6xzVluiCu%2FKbft8kInlppAk5RFOL975WlGKcnxps4t3tqaXz16UyLmNxWegyqpPubj1sfpH9WcIZdB9p7sHU%2Bu%2BTnNjWkKE%2BCHcepc1zjKf7KFOR5%2FVvTb46DNnyhjxPwq1ifbyGnTlawVCkBJLfonX%2BVRjugSuNoDD1YkrgB3NMN7u%2B8QGOqUBXCTrz6gsB3SVkmzHoLcX4rXkP%2FHaedj80f0kkuRdrpim0mYy6MsVwWhd8HbdqxIsDhrqUCw6KXumHkVePpQagw8wRJFVMzce3i883BSTGwntSv8xClEy2ttV0PckO%2FBEmR1CXIym40mLAZ23vSOFVTnM4FUdhAC4YhuVF06uTcJSf77n%2FnKKBthQV%2BSeuBtVaWAPIwGUuHSw7XLTBY4Jp0ObERoW&X-Amz-Signature=90e879260c10a10e0127b6b84d2f8348b7203218706e43b2ca157d1430b9ee8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HR7KALC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2Fy7iFJCDCDfUM9naPMGn6tZ2Wes2Cdlc9vPPxNPsGDAiEAoi%2F2n8RsKruOXkIaBd9eEuKlDdoT7%2BPBnlQuCUS7yToq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHhujc3EoH%2Brbl%2BfKSrcA%2FkPsVjUSRsU6oTqX9jIL2sAW8iI%2Bub3hHTkdDhaydkXXl2F8Y5mEmrGCQaaBzjsKVG68pg2lu9VehouC%2B4JVTQSAw1Fg3bmtrWO9AbcZWaQHTo5cOditeH%2FEaET%2B9NvdD8H7Hd8So9QRSWzK0yPDxH9UjGOFyMaWzu%2FIOZgKj8uTjcZn1k8VUliQLOuJ9jw5w7wwI4p%2B6c5oxqTwlH2nIKHVYOpoZFL8rtHc50aHhSSWtj61ju%2FjuunkEUi58XP3GZPdGGUbkCJY9Fo81Ih6jDGoVLNlkhK%2FaolbSzqsk0rud0J9%2BP%2BQxd1qO%2FS3aQ9QobSA3DUQClahM%2FzagsTfXLfWAasHx321FVP%2B4AHe88H9pV9nmC7TlJxojaBvbW6Qp5j3a0%2FBkiCyPPl%2BoBkTR2JGlU7Z3k2yW1GaCBwABiFmdh3cLZxoC2ML0Mg3wHhQI2K2WQK%2Bm2MP3Z3F6xzVluiCu%2FKbft8kInlppAk5RFOL975WlGKcnxps4t3tqaXz16UyLmNxWegyqpPubj1sfpH9WcIZdB9p7sHU%2Bu%2BTnNjWkKE%2BCHcepc1zjKf7KFOR5%2FVvTb46DNnyhjxPwq1ifbyGnTlawVCkBJLfonX%2BVRjugSuNoDD1YkrgB3NMN7u%2B8QGOqUBXCTrz6gsB3SVkmzHoLcX4rXkP%2FHaedj80f0kkuRdrpim0mYy6MsVwWhd8HbdqxIsDhrqUCw6KXumHkVePpQagw8wRJFVMzce3i883BSTGwntSv8xClEy2ttV0PckO%2FBEmR1CXIym40mLAZ23vSOFVTnM4FUdhAC4YhuVF06uTcJSf77n%2FnKKBthQV%2BSeuBtVaWAPIwGUuHSw7XLTBY4Jp0ObERoW&X-Amz-Signature=08cd506d70d7d50e06e8df8be973ab6a264389b0c4796377aa793bbba2847cef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HR7KALC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2Fy7iFJCDCDfUM9naPMGn6tZ2Wes2Cdlc9vPPxNPsGDAiEAoi%2F2n8RsKruOXkIaBd9eEuKlDdoT7%2BPBnlQuCUS7yToq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHhujc3EoH%2Brbl%2BfKSrcA%2FkPsVjUSRsU6oTqX9jIL2sAW8iI%2Bub3hHTkdDhaydkXXl2F8Y5mEmrGCQaaBzjsKVG68pg2lu9VehouC%2B4JVTQSAw1Fg3bmtrWO9AbcZWaQHTo5cOditeH%2FEaET%2B9NvdD8H7Hd8So9QRSWzK0yPDxH9UjGOFyMaWzu%2FIOZgKj8uTjcZn1k8VUliQLOuJ9jw5w7wwI4p%2B6c5oxqTwlH2nIKHVYOpoZFL8rtHc50aHhSSWtj61ju%2FjuunkEUi58XP3GZPdGGUbkCJY9Fo81Ih6jDGoVLNlkhK%2FaolbSzqsk0rud0J9%2BP%2BQxd1qO%2FS3aQ9QobSA3DUQClahM%2FzagsTfXLfWAasHx321FVP%2B4AHe88H9pV9nmC7TlJxojaBvbW6Qp5j3a0%2FBkiCyPPl%2BoBkTR2JGlU7Z3k2yW1GaCBwABiFmdh3cLZxoC2ML0Mg3wHhQI2K2WQK%2Bm2MP3Z3F6xzVluiCu%2FKbft8kInlppAk5RFOL975WlGKcnxps4t3tqaXz16UyLmNxWegyqpPubj1sfpH9WcIZdB9p7sHU%2Bu%2BTnNjWkKE%2BCHcepc1zjKf7KFOR5%2FVvTb46DNnyhjxPwq1ifbyGnTlawVCkBJLfonX%2BVRjugSuNoDD1YkrgB3NMN7u%2B8QGOqUBXCTrz6gsB3SVkmzHoLcX4rXkP%2FHaedj80f0kkuRdrpim0mYy6MsVwWhd8HbdqxIsDhrqUCw6KXumHkVePpQagw8wRJFVMzce3i883BSTGwntSv8xClEy2ttV0PckO%2FBEmR1CXIym40mLAZ23vSOFVTnM4FUdhAC4YhuVF06uTcJSf77n%2FnKKBthQV%2BSeuBtVaWAPIwGUuHSw7XLTBY4Jp0ObERoW&X-Amz-Signature=2281d7bfd06b93c1734fb27b9aa90adf4805969047b0ce9f165433d0436130f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HR7KALC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2Fy7iFJCDCDfUM9naPMGn6tZ2Wes2Cdlc9vPPxNPsGDAiEAoi%2F2n8RsKruOXkIaBd9eEuKlDdoT7%2BPBnlQuCUS7yToq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHhujc3EoH%2Brbl%2BfKSrcA%2FkPsVjUSRsU6oTqX9jIL2sAW8iI%2Bub3hHTkdDhaydkXXl2F8Y5mEmrGCQaaBzjsKVG68pg2lu9VehouC%2B4JVTQSAw1Fg3bmtrWO9AbcZWaQHTo5cOditeH%2FEaET%2B9NvdD8H7Hd8So9QRSWzK0yPDxH9UjGOFyMaWzu%2FIOZgKj8uTjcZn1k8VUliQLOuJ9jw5w7wwI4p%2B6c5oxqTwlH2nIKHVYOpoZFL8rtHc50aHhSSWtj61ju%2FjuunkEUi58XP3GZPdGGUbkCJY9Fo81Ih6jDGoVLNlkhK%2FaolbSzqsk0rud0J9%2BP%2BQxd1qO%2FS3aQ9QobSA3DUQClahM%2FzagsTfXLfWAasHx321FVP%2B4AHe88H9pV9nmC7TlJxojaBvbW6Qp5j3a0%2FBkiCyPPl%2BoBkTR2JGlU7Z3k2yW1GaCBwABiFmdh3cLZxoC2ML0Mg3wHhQI2K2WQK%2Bm2MP3Z3F6xzVluiCu%2FKbft8kInlppAk5RFOL975WlGKcnxps4t3tqaXz16UyLmNxWegyqpPubj1sfpH9WcIZdB9p7sHU%2Bu%2BTnNjWkKE%2BCHcepc1zjKf7KFOR5%2FVvTb46DNnyhjxPwq1ifbyGnTlawVCkBJLfonX%2BVRjugSuNoDD1YkrgB3NMN7u%2B8QGOqUBXCTrz6gsB3SVkmzHoLcX4rXkP%2FHaedj80f0kkuRdrpim0mYy6MsVwWhd8HbdqxIsDhrqUCw6KXumHkVePpQagw8wRJFVMzce3i883BSTGwntSv8xClEy2ttV0PckO%2FBEmR1CXIym40mLAZ23vSOFVTnM4FUdhAC4YhuVF06uTcJSf77n%2FnKKBthQV%2BSeuBtVaWAPIwGUuHSw7XLTBY4Jp0ObERoW&X-Amz-Signature=5eff95f69cc47c91b4b1bf536e253b71bc1c4ca4accd5be3c6e3c68588e76202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HR7KALC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2Fy7iFJCDCDfUM9naPMGn6tZ2Wes2Cdlc9vPPxNPsGDAiEAoi%2F2n8RsKruOXkIaBd9eEuKlDdoT7%2BPBnlQuCUS7yToq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHhujc3EoH%2Brbl%2BfKSrcA%2FkPsVjUSRsU6oTqX9jIL2sAW8iI%2Bub3hHTkdDhaydkXXl2F8Y5mEmrGCQaaBzjsKVG68pg2lu9VehouC%2B4JVTQSAw1Fg3bmtrWO9AbcZWaQHTo5cOditeH%2FEaET%2B9NvdD8H7Hd8So9QRSWzK0yPDxH9UjGOFyMaWzu%2FIOZgKj8uTjcZn1k8VUliQLOuJ9jw5w7wwI4p%2B6c5oxqTwlH2nIKHVYOpoZFL8rtHc50aHhSSWtj61ju%2FjuunkEUi58XP3GZPdGGUbkCJY9Fo81Ih6jDGoVLNlkhK%2FaolbSzqsk0rud0J9%2BP%2BQxd1qO%2FS3aQ9QobSA3DUQClahM%2FzagsTfXLfWAasHx321FVP%2B4AHe88H9pV9nmC7TlJxojaBvbW6Qp5j3a0%2FBkiCyPPl%2BoBkTR2JGlU7Z3k2yW1GaCBwABiFmdh3cLZxoC2ML0Mg3wHhQI2K2WQK%2Bm2MP3Z3F6xzVluiCu%2FKbft8kInlppAk5RFOL975WlGKcnxps4t3tqaXz16UyLmNxWegyqpPubj1sfpH9WcIZdB9p7sHU%2Bu%2BTnNjWkKE%2BCHcepc1zjKf7KFOR5%2FVvTb46DNnyhjxPwq1ifbyGnTlawVCkBJLfonX%2BVRjugSuNoDD1YkrgB3NMN7u%2B8QGOqUBXCTrz6gsB3SVkmzHoLcX4rXkP%2FHaedj80f0kkuRdrpim0mYy6MsVwWhd8HbdqxIsDhrqUCw6KXumHkVePpQagw8wRJFVMzce3i883BSTGwntSv8xClEy2ttV0PckO%2FBEmR1CXIym40mLAZ23vSOFVTnM4FUdhAC4YhuVF06uTcJSf77n%2FnKKBthQV%2BSeuBtVaWAPIwGUuHSw7XLTBY4Jp0ObERoW&X-Amz-Signature=56d4af161a5002f3668e1808e93b48a70d479a847e168881f0cab46ac76f4600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HR7KALC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2Fy7iFJCDCDfUM9naPMGn6tZ2Wes2Cdlc9vPPxNPsGDAiEAoi%2F2n8RsKruOXkIaBd9eEuKlDdoT7%2BPBnlQuCUS7yToq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHhujc3EoH%2Brbl%2BfKSrcA%2FkPsVjUSRsU6oTqX9jIL2sAW8iI%2Bub3hHTkdDhaydkXXl2F8Y5mEmrGCQaaBzjsKVG68pg2lu9VehouC%2B4JVTQSAw1Fg3bmtrWO9AbcZWaQHTo5cOditeH%2FEaET%2B9NvdD8H7Hd8So9QRSWzK0yPDxH9UjGOFyMaWzu%2FIOZgKj8uTjcZn1k8VUliQLOuJ9jw5w7wwI4p%2B6c5oxqTwlH2nIKHVYOpoZFL8rtHc50aHhSSWtj61ju%2FjuunkEUi58XP3GZPdGGUbkCJY9Fo81Ih6jDGoVLNlkhK%2FaolbSzqsk0rud0J9%2BP%2BQxd1qO%2FS3aQ9QobSA3DUQClahM%2FzagsTfXLfWAasHx321FVP%2B4AHe88H9pV9nmC7TlJxojaBvbW6Qp5j3a0%2FBkiCyPPl%2BoBkTR2JGlU7Z3k2yW1GaCBwABiFmdh3cLZxoC2ML0Mg3wHhQI2K2WQK%2Bm2MP3Z3F6xzVluiCu%2FKbft8kInlppAk5RFOL975WlGKcnxps4t3tqaXz16UyLmNxWegyqpPubj1sfpH9WcIZdB9p7sHU%2Bu%2BTnNjWkKE%2BCHcepc1zjKf7KFOR5%2FVvTb46DNnyhjxPwq1ifbyGnTlawVCkBJLfonX%2BVRjugSuNoDD1YkrgB3NMN7u%2B8QGOqUBXCTrz6gsB3SVkmzHoLcX4rXkP%2FHaedj80f0kkuRdrpim0mYy6MsVwWhd8HbdqxIsDhrqUCw6KXumHkVePpQagw8wRJFVMzce3i883BSTGwntSv8xClEy2ttV0PckO%2FBEmR1CXIym40mLAZ23vSOFVTnM4FUdhAC4YhuVF06uTcJSf77n%2FnKKBthQV%2BSeuBtVaWAPIwGUuHSw7XLTBY4Jp0ObERoW&X-Amz-Signature=a20fae6bd44245ccf2fbd56249eb3af638bcdad76f2a17dddd10856d296cd866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HR7KALC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2Fy7iFJCDCDfUM9naPMGn6tZ2Wes2Cdlc9vPPxNPsGDAiEAoi%2F2n8RsKruOXkIaBd9eEuKlDdoT7%2BPBnlQuCUS7yToq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHhujc3EoH%2Brbl%2BfKSrcA%2FkPsVjUSRsU6oTqX9jIL2sAW8iI%2Bub3hHTkdDhaydkXXl2F8Y5mEmrGCQaaBzjsKVG68pg2lu9VehouC%2B4JVTQSAw1Fg3bmtrWO9AbcZWaQHTo5cOditeH%2FEaET%2B9NvdD8H7Hd8So9QRSWzK0yPDxH9UjGOFyMaWzu%2FIOZgKj8uTjcZn1k8VUliQLOuJ9jw5w7wwI4p%2B6c5oxqTwlH2nIKHVYOpoZFL8rtHc50aHhSSWtj61ju%2FjuunkEUi58XP3GZPdGGUbkCJY9Fo81Ih6jDGoVLNlkhK%2FaolbSzqsk0rud0J9%2BP%2BQxd1qO%2FS3aQ9QobSA3DUQClahM%2FzagsTfXLfWAasHx321FVP%2B4AHe88H9pV9nmC7TlJxojaBvbW6Qp5j3a0%2FBkiCyPPl%2BoBkTR2JGlU7Z3k2yW1GaCBwABiFmdh3cLZxoC2ML0Mg3wHhQI2K2WQK%2Bm2MP3Z3F6xzVluiCu%2FKbft8kInlppAk5RFOL975WlGKcnxps4t3tqaXz16UyLmNxWegyqpPubj1sfpH9WcIZdB9p7sHU%2Bu%2BTnNjWkKE%2BCHcepc1zjKf7KFOR5%2FVvTb46DNnyhjxPwq1ifbyGnTlawVCkBJLfonX%2BVRjugSuNoDD1YkrgB3NMN7u%2B8QGOqUBXCTrz6gsB3SVkmzHoLcX4rXkP%2FHaedj80f0kkuRdrpim0mYy6MsVwWhd8HbdqxIsDhrqUCw6KXumHkVePpQagw8wRJFVMzce3i883BSTGwntSv8xClEy2ttV0PckO%2FBEmR1CXIym40mLAZ23vSOFVTnM4FUdhAC4YhuVF06uTcJSf77n%2FnKKBthQV%2BSeuBtVaWAPIwGUuHSw7XLTBY4Jp0ObERoW&X-Amz-Signature=2433124163121824c13469b39f5fac1dcead3be028ccbc81ed2f32e067dc8abe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HR7KALC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2Fy7iFJCDCDfUM9naPMGn6tZ2Wes2Cdlc9vPPxNPsGDAiEAoi%2F2n8RsKruOXkIaBd9eEuKlDdoT7%2BPBnlQuCUS7yToq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHhujc3EoH%2Brbl%2BfKSrcA%2FkPsVjUSRsU6oTqX9jIL2sAW8iI%2Bub3hHTkdDhaydkXXl2F8Y5mEmrGCQaaBzjsKVG68pg2lu9VehouC%2B4JVTQSAw1Fg3bmtrWO9AbcZWaQHTo5cOditeH%2FEaET%2B9NvdD8H7Hd8So9QRSWzK0yPDxH9UjGOFyMaWzu%2FIOZgKj8uTjcZn1k8VUliQLOuJ9jw5w7wwI4p%2B6c5oxqTwlH2nIKHVYOpoZFL8rtHc50aHhSSWtj61ju%2FjuunkEUi58XP3GZPdGGUbkCJY9Fo81Ih6jDGoVLNlkhK%2FaolbSzqsk0rud0J9%2BP%2BQxd1qO%2FS3aQ9QobSA3DUQClahM%2FzagsTfXLfWAasHx321FVP%2B4AHe88H9pV9nmC7TlJxojaBvbW6Qp5j3a0%2FBkiCyPPl%2BoBkTR2JGlU7Z3k2yW1GaCBwABiFmdh3cLZxoC2ML0Mg3wHhQI2K2WQK%2Bm2MP3Z3F6xzVluiCu%2FKbft8kInlppAk5RFOL975WlGKcnxps4t3tqaXz16UyLmNxWegyqpPubj1sfpH9WcIZdB9p7sHU%2Bu%2BTnNjWkKE%2BCHcepc1zjKf7KFOR5%2FVvTb46DNnyhjxPwq1ifbyGnTlawVCkBJLfonX%2BVRjugSuNoDD1YkrgB3NMN7u%2B8QGOqUBXCTrz6gsB3SVkmzHoLcX4rXkP%2FHaedj80f0kkuRdrpim0mYy6MsVwWhd8HbdqxIsDhrqUCw6KXumHkVePpQagw8wRJFVMzce3i883BSTGwntSv8xClEy2ttV0PckO%2FBEmR1CXIym40mLAZ23vSOFVTnM4FUdhAC4YhuVF06uTcJSf77n%2FnKKBthQV%2BSeuBtVaWAPIwGUuHSw7XLTBY4Jp0ObERoW&X-Amz-Signature=96940e3fd85d427222c52fa1869e43dc0834b333776594803a00ebf0a72918d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HR7KALC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2Fy7iFJCDCDfUM9naPMGn6tZ2Wes2Cdlc9vPPxNPsGDAiEAoi%2F2n8RsKruOXkIaBd9eEuKlDdoT7%2BPBnlQuCUS7yToq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHhujc3EoH%2Brbl%2BfKSrcA%2FkPsVjUSRsU6oTqX9jIL2sAW8iI%2Bub3hHTkdDhaydkXXl2F8Y5mEmrGCQaaBzjsKVG68pg2lu9VehouC%2B4JVTQSAw1Fg3bmtrWO9AbcZWaQHTo5cOditeH%2FEaET%2B9NvdD8H7Hd8So9QRSWzK0yPDxH9UjGOFyMaWzu%2FIOZgKj8uTjcZn1k8VUliQLOuJ9jw5w7wwI4p%2B6c5oxqTwlH2nIKHVYOpoZFL8rtHc50aHhSSWtj61ju%2FjuunkEUi58XP3GZPdGGUbkCJY9Fo81Ih6jDGoVLNlkhK%2FaolbSzqsk0rud0J9%2BP%2BQxd1qO%2FS3aQ9QobSA3DUQClahM%2FzagsTfXLfWAasHx321FVP%2B4AHe88H9pV9nmC7TlJxojaBvbW6Qp5j3a0%2FBkiCyPPl%2BoBkTR2JGlU7Z3k2yW1GaCBwABiFmdh3cLZxoC2ML0Mg3wHhQI2K2WQK%2Bm2MP3Z3F6xzVluiCu%2FKbft8kInlppAk5RFOL975WlGKcnxps4t3tqaXz16UyLmNxWegyqpPubj1sfpH9WcIZdB9p7sHU%2Bu%2BTnNjWkKE%2BCHcepc1zjKf7KFOR5%2FVvTb46DNnyhjxPwq1ifbyGnTlawVCkBJLfonX%2BVRjugSuNoDD1YkrgB3NMN7u%2B8QGOqUBXCTrz6gsB3SVkmzHoLcX4rXkP%2FHaedj80f0kkuRdrpim0mYy6MsVwWhd8HbdqxIsDhrqUCw6KXumHkVePpQagw8wRJFVMzce3i883BSTGwntSv8xClEy2ttV0PckO%2FBEmR1CXIym40mLAZ23vSOFVTnM4FUdhAC4YhuVF06uTcJSf77n%2FnKKBthQV%2BSeuBtVaWAPIwGUuHSw7XLTBY4Jp0ObERoW&X-Amz-Signature=08e5a069afef08574303d59347a0cd515d9703696f2e60e0e8613fc9364def0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HR7KALC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2Fy7iFJCDCDfUM9naPMGn6tZ2Wes2Cdlc9vPPxNPsGDAiEAoi%2F2n8RsKruOXkIaBd9eEuKlDdoT7%2BPBnlQuCUS7yToq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHhujc3EoH%2Brbl%2BfKSrcA%2FkPsVjUSRsU6oTqX9jIL2sAW8iI%2Bub3hHTkdDhaydkXXl2F8Y5mEmrGCQaaBzjsKVG68pg2lu9VehouC%2B4JVTQSAw1Fg3bmtrWO9AbcZWaQHTo5cOditeH%2FEaET%2B9NvdD8H7Hd8So9QRSWzK0yPDxH9UjGOFyMaWzu%2FIOZgKj8uTjcZn1k8VUliQLOuJ9jw5w7wwI4p%2B6c5oxqTwlH2nIKHVYOpoZFL8rtHc50aHhSSWtj61ju%2FjuunkEUi58XP3GZPdGGUbkCJY9Fo81Ih6jDGoVLNlkhK%2FaolbSzqsk0rud0J9%2BP%2BQxd1qO%2FS3aQ9QobSA3DUQClahM%2FzagsTfXLfWAasHx321FVP%2B4AHe88H9pV9nmC7TlJxojaBvbW6Qp5j3a0%2FBkiCyPPl%2BoBkTR2JGlU7Z3k2yW1GaCBwABiFmdh3cLZxoC2ML0Mg3wHhQI2K2WQK%2Bm2MP3Z3F6xzVluiCu%2FKbft8kInlppAk5RFOL975WlGKcnxps4t3tqaXz16UyLmNxWegyqpPubj1sfpH9WcIZdB9p7sHU%2Bu%2BTnNjWkKE%2BCHcepc1zjKf7KFOR5%2FVvTb46DNnyhjxPwq1ifbyGnTlawVCkBJLfonX%2BVRjugSuNoDD1YkrgB3NMN7u%2B8QGOqUBXCTrz6gsB3SVkmzHoLcX4rXkP%2FHaedj80f0kkuRdrpim0mYy6MsVwWhd8HbdqxIsDhrqUCw6KXumHkVePpQagw8wRJFVMzce3i883BSTGwntSv8xClEy2ttV0PckO%2FBEmR1CXIym40mLAZ23vSOFVTnM4FUdhAC4YhuVF06uTcJSf77n%2FnKKBthQV%2BSeuBtVaWAPIwGUuHSw7XLTBY4Jp0ObERoW&X-Amz-Signature=f18b255adde79800d30a24fdbfc07b7c0856bcd2da8eaf294bb6d106d0e14655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HR7KALC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2Fy7iFJCDCDfUM9naPMGn6tZ2Wes2Cdlc9vPPxNPsGDAiEAoi%2F2n8RsKruOXkIaBd9eEuKlDdoT7%2BPBnlQuCUS7yToq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHhujc3EoH%2Brbl%2BfKSrcA%2FkPsVjUSRsU6oTqX9jIL2sAW8iI%2Bub3hHTkdDhaydkXXl2F8Y5mEmrGCQaaBzjsKVG68pg2lu9VehouC%2B4JVTQSAw1Fg3bmtrWO9AbcZWaQHTo5cOditeH%2FEaET%2B9NvdD8H7Hd8So9QRSWzK0yPDxH9UjGOFyMaWzu%2FIOZgKj8uTjcZn1k8VUliQLOuJ9jw5w7wwI4p%2B6c5oxqTwlH2nIKHVYOpoZFL8rtHc50aHhSSWtj61ju%2FjuunkEUi58XP3GZPdGGUbkCJY9Fo81Ih6jDGoVLNlkhK%2FaolbSzqsk0rud0J9%2BP%2BQxd1qO%2FS3aQ9QobSA3DUQClahM%2FzagsTfXLfWAasHx321FVP%2B4AHe88H9pV9nmC7TlJxojaBvbW6Qp5j3a0%2FBkiCyPPl%2BoBkTR2JGlU7Z3k2yW1GaCBwABiFmdh3cLZxoC2ML0Mg3wHhQI2K2WQK%2Bm2MP3Z3F6xzVluiCu%2FKbft8kInlppAk5RFOL975WlGKcnxps4t3tqaXz16UyLmNxWegyqpPubj1sfpH9WcIZdB9p7sHU%2Bu%2BTnNjWkKE%2BCHcepc1zjKf7KFOR5%2FVvTb46DNnyhjxPwq1ifbyGnTlawVCkBJLfonX%2BVRjugSuNoDD1YkrgB3NMN7u%2B8QGOqUBXCTrz6gsB3SVkmzHoLcX4rXkP%2FHaedj80f0kkuRdrpim0mYy6MsVwWhd8HbdqxIsDhrqUCw6KXumHkVePpQagw8wRJFVMzce3i883BSTGwntSv8xClEy2ttV0PckO%2FBEmR1CXIym40mLAZ23vSOFVTnM4FUdhAC4YhuVF06uTcJSf77n%2FnKKBthQV%2BSeuBtVaWAPIwGUuHSw7XLTBY4Jp0ObERoW&X-Amz-Signature=61eed8c76424e5beab67e64e847049bb5549db239364f315f20dcb6a6f016062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HR7KALC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2Fy7iFJCDCDfUM9naPMGn6tZ2Wes2Cdlc9vPPxNPsGDAiEAoi%2F2n8RsKruOXkIaBd9eEuKlDdoT7%2BPBnlQuCUS7yToq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHhujc3EoH%2Brbl%2BfKSrcA%2FkPsVjUSRsU6oTqX9jIL2sAW8iI%2Bub3hHTkdDhaydkXXl2F8Y5mEmrGCQaaBzjsKVG68pg2lu9VehouC%2B4JVTQSAw1Fg3bmtrWO9AbcZWaQHTo5cOditeH%2FEaET%2B9NvdD8H7Hd8So9QRSWzK0yPDxH9UjGOFyMaWzu%2FIOZgKj8uTjcZn1k8VUliQLOuJ9jw5w7wwI4p%2B6c5oxqTwlH2nIKHVYOpoZFL8rtHc50aHhSSWtj61ju%2FjuunkEUi58XP3GZPdGGUbkCJY9Fo81Ih6jDGoVLNlkhK%2FaolbSzqsk0rud0J9%2BP%2BQxd1qO%2FS3aQ9QobSA3DUQClahM%2FzagsTfXLfWAasHx321FVP%2B4AHe88H9pV9nmC7TlJxojaBvbW6Qp5j3a0%2FBkiCyPPl%2BoBkTR2JGlU7Z3k2yW1GaCBwABiFmdh3cLZxoC2ML0Mg3wHhQI2K2WQK%2Bm2MP3Z3F6xzVluiCu%2FKbft8kInlppAk5RFOL975WlGKcnxps4t3tqaXz16UyLmNxWegyqpPubj1sfpH9WcIZdB9p7sHU%2Bu%2BTnNjWkKE%2BCHcepc1zjKf7KFOR5%2FVvTb46DNnyhjxPwq1ifbyGnTlawVCkBJLfonX%2BVRjugSuNoDD1YkrgB3NMN7u%2B8QGOqUBXCTrz6gsB3SVkmzHoLcX4rXkP%2FHaedj80f0kkuRdrpim0mYy6MsVwWhd8HbdqxIsDhrqUCw6KXumHkVePpQagw8wRJFVMzce3i883BSTGwntSv8xClEy2ttV0PckO%2FBEmR1CXIym40mLAZ23vSOFVTnM4FUdhAC4YhuVF06uTcJSf77n%2FnKKBthQV%2BSeuBtVaWAPIwGUuHSw7XLTBY4Jp0ObERoW&X-Amz-Signature=cb3b630d5a4d81ff72d839f1b764f54cd04f8ca42bc7c0d879e47094589ae8b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HR7KALC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2Fy7iFJCDCDfUM9naPMGn6tZ2Wes2Cdlc9vPPxNPsGDAiEAoi%2F2n8RsKruOXkIaBd9eEuKlDdoT7%2BPBnlQuCUS7yToq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHhujc3EoH%2Brbl%2BfKSrcA%2FkPsVjUSRsU6oTqX9jIL2sAW8iI%2Bub3hHTkdDhaydkXXl2F8Y5mEmrGCQaaBzjsKVG68pg2lu9VehouC%2B4JVTQSAw1Fg3bmtrWO9AbcZWaQHTo5cOditeH%2FEaET%2B9NvdD8H7Hd8So9QRSWzK0yPDxH9UjGOFyMaWzu%2FIOZgKj8uTjcZn1k8VUliQLOuJ9jw5w7wwI4p%2B6c5oxqTwlH2nIKHVYOpoZFL8rtHc50aHhSSWtj61ju%2FjuunkEUi58XP3GZPdGGUbkCJY9Fo81Ih6jDGoVLNlkhK%2FaolbSzqsk0rud0J9%2BP%2BQxd1qO%2FS3aQ9QobSA3DUQClahM%2FzagsTfXLfWAasHx321FVP%2B4AHe88H9pV9nmC7TlJxojaBvbW6Qp5j3a0%2FBkiCyPPl%2BoBkTR2JGlU7Z3k2yW1GaCBwABiFmdh3cLZxoC2ML0Mg3wHhQI2K2WQK%2Bm2MP3Z3F6xzVluiCu%2FKbft8kInlppAk5RFOL975WlGKcnxps4t3tqaXz16UyLmNxWegyqpPubj1sfpH9WcIZdB9p7sHU%2Bu%2BTnNjWkKE%2BCHcepc1zjKf7KFOR5%2FVvTb46DNnyhjxPwq1ifbyGnTlawVCkBJLfonX%2BVRjugSuNoDD1YkrgB3NMN7u%2B8QGOqUBXCTrz6gsB3SVkmzHoLcX4rXkP%2FHaedj80f0kkuRdrpim0mYy6MsVwWhd8HbdqxIsDhrqUCw6KXumHkVePpQagw8wRJFVMzce3i883BSTGwntSv8xClEy2ttV0PckO%2FBEmR1CXIym40mLAZ23vSOFVTnM4FUdhAC4YhuVF06uTcJSf77n%2FnKKBthQV%2BSeuBtVaWAPIwGUuHSw7XLTBY4Jp0ObERoW&X-Amz-Signature=ff22e49855685f0ab36840eab84874566adee3f2d7749932d50c5fa4598796a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HR7KALC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF%2Fy7iFJCDCDfUM9naPMGn6tZ2Wes2Cdlc9vPPxNPsGDAiEAoi%2F2n8RsKruOXkIaBd9eEuKlDdoT7%2BPBnlQuCUS7yToq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDHhujc3EoH%2Brbl%2BfKSrcA%2FkPsVjUSRsU6oTqX9jIL2sAW8iI%2Bub3hHTkdDhaydkXXl2F8Y5mEmrGCQaaBzjsKVG68pg2lu9VehouC%2B4JVTQSAw1Fg3bmtrWO9AbcZWaQHTo5cOditeH%2FEaET%2B9NvdD8H7Hd8So9QRSWzK0yPDxH9UjGOFyMaWzu%2FIOZgKj8uTjcZn1k8VUliQLOuJ9jw5w7wwI4p%2B6c5oxqTwlH2nIKHVYOpoZFL8rtHc50aHhSSWtj61ju%2FjuunkEUi58XP3GZPdGGUbkCJY9Fo81Ih6jDGoVLNlkhK%2FaolbSzqsk0rud0J9%2BP%2BQxd1qO%2FS3aQ9QobSA3DUQClahM%2FzagsTfXLfWAasHx321FVP%2B4AHe88H9pV9nmC7TlJxojaBvbW6Qp5j3a0%2FBkiCyPPl%2BoBkTR2JGlU7Z3k2yW1GaCBwABiFmdh3cLZxoC2ML0Mg3wHhQI2K2WQK%2Bm2MP3Z3F6xzVluiCu%2FKbft8kInlppAk5RFOL975WlGKcnxps4t3tqaXz16UyLmNxWegyqpPubj1sfpH9WcIZdB9p7sHU%2Bu%2BTnNjWkKE%2BCHcepc1zjKf7KFOR5%2FVvTb46DNnyhjxPwq1ifbyGnTlawVCkBJLfonX%2BVRjugSuNoDD1YkrgB3NMN7u%2B8QGOqUBXCTrz6gsB3SVkmzHoLcX4rXkP%2FHaedj80f0kkuRdrpim0mYy6MsVwWhd8HbdqxIsDhrqUCw6KXumHkVePpQagw8wRJFVMzce3i883BSTGwntSv8xClEy2ttV0PckO%2FBEmR1CXIym40mLAZ23vSOFVTnM4FUdhAC4YhuVF06uTcJSf77n%2FnKKBthQV%2BSeuBtVaWAPIwGUuHSw7XLTBY4Jp0ObERoW&X-Amz-Signature=bc10de3fd2bce42035b3dfe169ff7eae5cff81caae8e4e0416258c12ddf2fdc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
