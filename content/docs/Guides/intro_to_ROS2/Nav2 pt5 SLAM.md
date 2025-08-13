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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7X3NRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7dbvYmc%2FcnBb2tHXgIyzaWA%2FdnjI1deNJrYDUVigfbwIhAKAg3AyVxASApVvlbJvlmRL1Atzc9vjqGc9RvBRWg28uKv8DCCQQABoMNjM3NDIzMTgzODA1Igw31wfhuqnENtiQ0mQq3AMEhYBgleKpCNWtooHRrMQLUadr%2Bfoy%2FhJv2x1gVhciASMN3pZYWcXiwBYx9eGjJbeX8jO%2FnWKJTEbniZ95yvF8cZyQ3n4T4xVu%2B5uu%2FLydjvz53jbSZTCOPanqSsmy9eUarFdd24VecMK0gQImgg0G0EKJyAKoPFx7OsLAeOY8ZX7%2BpF8xgduyxDKWHr85ptWd6Z1rYtGyylDLf8H4Cfo3v1jWWjTLXtsqt%2FB6hBKBhl6Facbji8%2F70lb4td4I2Iyn0PY%2B6nfJowrAW99BpDMLOUMWstDJcbnpjuPbNoYJckF%2BD2xKiNACGwQuR3m%2BAuxFbfOkSzKNevt3d%2BNYR7Pl3ixdYYhxlllzrjvqTlNO%2FJxwho1tM3MGAp3YpbG5AT4Eb15spqOCBrWQ480xpotUofAQ5dhrg%2Biegtm8ilKszTQkurulnONvB2a6lFrSyGncQlM%2Bt81eGtcsT%2BYbMYyM2L6GgmJWa0plyluSZx%2FH10y1Rm4vfi9GNXyVie5VgbQUxUpnH31c1YrdS3Fakp8X4Ps372i7lJ%2FhtMYR5Ny2FkiFMNQvMVhMfgVzzRoufwMZTBamWi7AakLi0%2FUMrtsxZLhEIQe%2Bfa1uzwtqpduCDRBcZYt5chc8cbUg7DDThfDEBjqkAcPvU9ow9gb6ZJf%2Bgx7LJ%2F%2BNwxCVURrk6YQEMCfH0NnEp6GyVbtndnMEgYas0XAUHqXSCJuvZtdX%2BxKWQvXQk3X9%2B3Z7W9eKrlRkW1Pcmg4P%2BSZ5IBsM0L3XHHD9lK%2B60RKGUrAki09Hwcuk96sId4soXeuj14dttFtqthWHnZAllLLfK3E%2B6VY56KONJZsRzp7oGPryNkYLqLn4rqzsGgP44w4a&X-Amz-Signature=ba8234349a62155594beb21a0c2f422b5753e0e70ad130359fa38f3173b3e361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7X3NRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7dbvYmc%2FcnBb2tHXgIyzaWA%2FdnjI1deNJrYDUVigfbwIhAKAg3AyVxASApVvlbJvlmRL1Atzc9vjqGc9RvBRWg28uKv8DCCQQABoMNjM3NDIzMTgzODA1Igw31wfhuqnENtiQ0mQq3AMEhYBgleKpCNWtooHRrMQLUadr%2Bfoy%2FhJv2x1gVhciASMN3pZYWcXiwBYx9eGjJbeX8jO%2FnWKJTEbniZ95yvF8cZyQ3n4T4xVu%2B5uu%2FLydjvz53jbSZTCOPanqSsmy9eUarFdd24VecMK0gQImgg0G0EKJyAKoPFx7OsLAeOY8ZX7%2BpF8xgduyxDKWHr85ptWd6Z1rYtGyylDLf8H4Cfo3v1jWWjTLXtsqt%2FB6hBKBhl6Facbji8%2F70lb4td4I2Iyn0PY%2B6nfJowrAW99BpDMLOUMWstDJcbnpjuPbNoYJckF%2BD2xKiNACGwQuR3m%2BAuxFbfOkSzKNevt3d%2BNYR7Pl3ixdYYhxlllzrjvqTlNO%2FJxwho1tM3MGAp3YpbG5AT4Eb15spqOCBrWQ480xpotUofAQ5dhrg%2Biegtm8ilKszTQkurulnONvB2a6lFrSyGncQlM%2Bt81eGtcsT%2BYbMYyM2L6GgmJWa0plyluSZx%2FH10y1Rm4vfi9GNXyVie5VgbQUxUpnH31c1YrdS3Fakp8X4Ps372i7lJ%2FhtMYR5Ny2FkiFMNQvMVhMfgVzzRoufwMZTBamWi7AakLi0%2FUMrtsxZLhEIQe%2Bfa1uzwtqpduCDRBcZYt5chc8cbUg7DDThfDEBjqkAcPvU9ow9gb6ZJf%2Bgx7LJ%2F%2BNwxCVURrk6YQEMCfH0NnEp6GyVbtndnMEgYas0XAUHqXSCJuvZtdX%2BxKWQvXQk3X9%2B3Z7W9eKrlRkW1Pcmg4P%2BSZ5IBsM0L3XHHD9lK%2B60RKGUrAki09Hwcuk96sId4soXeuj14dttFtqthWHnZAllLLfK3E%2B6VY56KONJZsRzp7oGPryNkYLqLn4rqzsGgP44w4a&X-Amz-Signature=50bf4b8b25ef87a1e7b2331bfdc7467980c7fbd3dcc7b3de842ffb7c04adc2f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7X3NRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7dbvYmc%2FcnBb2tHXgIyzaWA%2FdnjI1deNJrYDUVigfbwIhAKAg3AyVxASApVvlbJvlmRL1Atzc9vjqGc9RvBRWg28uKv8DCCQQABoMNjM3NDIzMTgzODA1Igw31wfhuqnENtiQ0mQq3AMEhYBgleKpCNWtooHRrMQLUadr%2Bfoy%2FhJv2x1gVhciASMN3pZYWcXiwBYx9eGjJbeX8jO%2FnWKJTEbniZ95yvF8cZyQ3n4T4xVu%2B5uu%2FLydjvz53jbSZTCOPanqSsmy9eUarFdd24VecMK0gQImgg0G0EKJyAKoPFx7OsLAeOY8ZX7%2BpF8xgduyxDKWHr85ptWd6Z1rYtGyylDLf8H4Cfo3v1jWWjTLXtsqt%2FB6hBKBhl6Facbji8%2F70lb4td4I2Iyn0PY%2B6nfJowrAW99BpDMLOUMWstDJcbnpjuPbNoYJckF%2BD2xKiNACGwQuR3m%2BAuxFbfOkSzKNevt3d%2BNYR7Pl3ixdYYhxlllzrjvqTlNO%2FJxwho1tM3MGAp3YpbG5AT4Eb15spqOCBrWQ480xpotUofAQ5dhrg%2Biegtm8ilKszTQkurulnONvB2a6lFrSyGncQlM%2Bt81eGtcsT%2BYbMYyM2L6GgmJWa0plyluSZx%2FH10y1Rm4vfi9GNXyVie5VgbQUxUpnH31c1YrdS3Fakp8X4Ps372i7lJ%2FhtMYR5Ny2FkiFMNQvMVhMfgVzzRoufwMZTBamWi7AakLi0%2FUMrtsxZLhEIQe%2Bfa1uzwtqpduCDRBcZYt5chc8cbUg7DDThfDEBjqkAcPvU9ow9gb6ZJf%2Bgx7LJ%2F%2BNwxCVURrk6YQEMCfH0NnEp6GyVbtndnMEgYas0XAUHqXSCJuvZtdX%2BxKWQvXQk3X9%2B3Z7W9eKrlRkW1Pcmg4P%2BSZ5IBsM0L3XHHD9lK%2B60RKGUrAki09Hwcuk96sId4soXeuj14dttFtqthWHnZAllLLfK3E%2B6VY56KONJZsRzp7oGPryNkYLqLn4rqzsGgP44w4a&X-Amz-Signature=5a83f44c9d5ef3f547c08231c36c0ef372975d337cdaa4f52078264ebe1eb5c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7X3NRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7dbvYmc%2FcnBb2tHXgIyzaWA%2FdnjI1deNJrYDUVigfbwIhAKAg3AyVxASApVvlbJvlmRL1Atzc9vjqGc9RvBRWg28uKv8DCCQQABoMNjM3NDIzMTgzODA1Igw31wfhuqnENtiQ0mQq3AMEhYBgleKpCNWtooHRrMQLUadr%2Bfoy%2FhJv2x1gVhciASMN3pZYWcXiwBYx9eGjJbeX8jO%2FnWKJTEbniZ95yvF8cZyQ3n4T4xVu%2B5uu%2FLydjvz53jbSZTCOPanqSsmy9eUarFdd24VecMK0gQImgg0G0EKJyAKoPFx7OsLAeOY8ZX7%2BpF8xgduyxDKWHr85ptWd6Z1rYtGyylDLf8H4Cfo3v1jWWjTLXtsqt%2FB6hBKBhl6Facbji8%2F70lb4td4I2Iyn0PY%2B6nfJowrAW99BpDMLOUMWstDJcbnpjuPbNoYJckF%2BD2xKiNACGwQuR3m%2BAuxFbfOkSzKNevt3d%2BNYR7Pl3ixdYYhxlllzrjvqTlNO%2FJxwho1tM3MGAp3YpbG5AT4Eb15spqOCBrWQ480xpotUofAQ5dhrg%2Biegtm8ilKszTQkurulnONvB2a6lFrSyGncQlM%2Bt81eGtcsT%2BYbMYyM2L6GgmJWa0plyluSZx%2FH10y1Rm4vfi9GNXyVie5VgbQUxUpnH31c1YrdS3Fakp8X4Ps372i7lJ%2FhtMYR5Ny2FkiFMNQvMVhMfgVzzRoufwMZTBamWi7AakLi0%2FUMrtsxZLhEIQe%2Bfa1uzwtqpduCDRBcZYt5chc8cbUg7DDThfDEBjqkAcPvU9ow9gb6ZJf%2Bgx7LJ%2F%2BNwxCVURrk6YQEMCfH0NnEp6GyVbtndnMEgYas0XAUHqXSCJuvZtdX%2BxKWQvXQk3X9%2B3Z7W9eKrlRkW1Pcmg4P%2BSZ5IBsM0L3XHHD9lK%2B60RKGUrAki09Hwcuk96sId4soXeuj14dttFtqthWHnZAllLLfK3E%2B6VY56KONJZsRzp7oGPryNkYLqLn4rqzsGgP44w4a&X-Amz-Signature=bf0887c2e554d646a15604d576460022bd8c810592f0a2eb837841d4aa4cc1e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7X3NRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7dbvYmc%2FcnBb2tHXgIyzaWA%2FdnjI1deNJrYDUVigfbwIhAKAg3AyVxASApVvlbJvlmRL1Atzc9vjqGc9RvBRWg28uKv8DCCQQABoMNjM3NDIzMTgzODA1Igw31wfhuqnENtiQ0mQq3AMEhYBgleKpCNWtooHRrMQLUadr%2Bfoy%2FhJv2x1gVhciASMN3pZYWcXiwBYx9eGjJbeX8jO%2FnWKJTEbniZ95yvF8cZyQ3n4T4xVu%2B5uu%2FLydjvz53jbSZTCOPanqSsmy9eUarFdd24VecMK0gQImgg0G0EKJyAKoPFx7OsLAeOY8ZX7%2BpF8xgduyxDKWHr85ptWd6Z1rYtGyylDLf8H4Cfo3v1jWWjTLXtsqt%2FB6hBKBhl6Facbji8%2F70lb4td4I2Iyn0PY%2B6nfJowrAW99BpDMLOUMWstDJcbnpjuPbNoYJckF%2BD2xKiNACGwQuR3m%2BAuxFbfOkSzKNevt3d%2BNYR7Pl3ixdYYhxlllzrjvqTlNO%2FJxwho1tM3MGAp3YpbG5AT4Eb15spqOCBrWQ480xpotUofAQ5dhrg%2Biegtm8ilKszTQkurulnONvB2a6lFrSyGncQlM%2Bt81eGtcsT%2BYbMYyM2L6GgmJWa0plyluSZx%2FH10y1Rm4vfi9GNXyVie5VgbQUxUpnH31c1YrdS3Fakp8X4Ps372i7lJ%2FhtMYR5Ny2FkiFMNQvMVhMfgVzzRoufwMZTBamWi7AakLi0%2FUMrtsxZLhEIQe%2Bfa1uzwtqpduCDRBcZYt5chc8cbUg7DDThfDEBjqkAcPvU9ow9gb6ZJf%2Bgx7LJ%2F%2BNwxCVURrk6YQEMCfH0NnEp6GyVbtndnMEgYas0XAUHqXSCJuvZtdX%2BxKWQvXQk3X9%2B3Z7W9eKrlRkW1Pcmg4P%2BSZ5IBsM0L3XHHD9lK%2B60RKGUrAki09Hwcuk96sId4soXeuj14dttFtqthWHnZAllLLfK3E%2B6VY56KONJZsRzp7oGPryNkYLqLn4rqzsGgP44w4a&X-Amz-Signature=761943649e6968a21a555c7596021d505db61f937477cfc08c42f0beb0ae0726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7X3NRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7dbvYmc%2FcnBb2tHXgIyzaWA%2FdnjI1deNJrYDUVigfbwIhAKAg3AyVxASApVvlbJvlmRL1Atzc9vjqGc9RvBRWg28uKv8DCCQQABoMNjM3NDIzMTgzODA1Igw31wfhuqnENtiQ0mQq3AMEhYBgleKpCNWtooHRrMQLUadr%2Bfoy%2FhJv2x1gVhciASMN3pZYWcXiwBYx9eGjJbeX8jO%2FnWKJTEbniZ95yvF8cZyQ3n4T4xVu%2B5uu%2FLydjvz53jbSZTCOPanqSsmy9eUarFdd24VecMK0gQImgg0G0EKJyAKoPFx7OsLAeOY8ZX7%2BpF8xgduyxDKWHr85ptWd6Z1rYtGyylDLf8H4Cfo3v1jWWjTLXtsqt%2FB6hBKBhl6Facbji8%2F70lb4td4I2Iyn0PY%2B6nfJowrAW99BpDMLOUMWstDJcbnpjuPbNoYJckF%2BD2xKiNACGwQuR3m%2BAuxFbfOkSzKNevt3d%2BNYR7Pl3ixdYYhxlllzrjvqTlNO%2FJxwho1tM3MGAp3YpbG5AT4Eb15spqOCBrWQ480xpotUofAQ5dhrg%2Biegtm8ilKszTQkurulnONvB2a6lFrSyGncQlM%2Bt81eGtcsT%2BYbMYyM2L6GgmJWa0plyluSZx%2FH10y1Rm4vfi9GNXyVie5VgbQUxUpnH31c1YrdS3Fakp8X4Ps372i7lJ%2FhtMYR5Ny2FkiFMNQvMVhMfgVzzRoufwMZTBamWi7AakLi0%2FUMrtsxZLhEIQe%2Bfa1uzwtqpduCDRBcZYt5chc8cbUg7DDThfDEBjqkAcPvU9ow9gb6ZJf%2Bgx7LJ%2F%2BNwxCVURrk6YQEMCfH0NnEp6GyVbtndnMEgYas0XAUHqXSCJuvZtdX%2BxKWQvXQk3X9%2B3Z7W9eKrlRkW1Pcmg4P%2BSZ5IBsM0L3XHHD9lK%2B60RKGUrAki09Hwcuk96sId4soXeuj14dttFtqthWHnZAllLLfK3E%2B6VY56KONJZsRzp7oGPryNkYLqLn4rqzsGgP44w4a&X-Amz-Signature=49841e80fc94d3f6e9c9111981bde0d03899ca1cefe1131349dca42567996f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7X3NRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7dbvYmc%2FcnBb2tHXgIyzaWA%2FdnjI1deNJrYDUVigfbwIhAKAg3AyVxASApVvlbJvlmRL1Atzc9vjqGc9RvBRWg28uKv8DCCQQABoMNjM3NDIzMTgzODA1Igw31wfhuqnENtiQ0mQq3AMEhYBgleKpCNWtooHRrMQLUadr%2Bfoy%2FhJv2x1gVhciASMN3pZYWcXiwBYx9eGjJbeX8jO%2FnWKJTEbniZ95yvF8cZyQ3n4T4xVu%2B5uu%2FLydjvz53jbSZTCOPanqSsmy9eUarFdd24VecMK0gQImgg0G0EKJyAKoPFx7OsLAeOY8ZX7%2BpF8xgduyxDKWHr85ptWd6Z1rYtGyylDLf8H4Cfo3v1jWWjTLXtsqt%2FB6hBKBhl6Facbji8%2F70lb4td4I2Iyn0PY%2B6nfJowrAW99BpDMLOUMWstDJcbnpjuPbNoYJckF%2BD2xKiNACGwQuR3m%2BAuxFbfOkSzKNevt3d%2BNYR7Pl3ixdYYhxlllzrjvqTlNO%2FJxwho1tM3MGAp3YpbG5AT4Eb15spqOCBrWQ480xpotUofAQ5dhrg%2Biegtm8ilKszTQkurulnONvB2a6lFrSyGncQlM%2Bt81eGtcsT%2BYbMYyM2L6GgmJWa0plyluSZx%2FH10y1Rm4vfi9GNXyVie5VgbQUxUpnH31c1YrdS3Fakp8X4Ps372i7lJ%2FhtMYR5Ny2FkiFMNQvMVhMfgVzzRoufwMZTBamWi7AakLi0%2FUMrtsxZLhEIQe%2Bfa1uzwtqpduCDRBcZYt5chc8cbUg7DDThfDEBjqkAcPvU9ow9gb6ZJf%2Bgx7LJ%2F%2BNwxCVURrk6YQEMCfH0NnEp6GyVbtndnMEgYas0XAUHqXSCJuvZtdX%2BxKWQvXQk3X9%2B3Z7W9eKrlRkW1Pcmg4P%2BSZ5IBsM0L3XHHD9lK%2B60RKGUrAki09Hwcuk96sId4soXeuj14dttFtqthWHnZAllLLfK3E%2B6VY56KONJZsRzp7oGPryNkYLqLn4rqzsGgP44w4a&X-Amz-Signature=08b484fac128458b88305543db17629cc4d038bba69cbed1e4bfbb0d6abd102c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7X3NRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7dbvYmc%2FcnBb2tHXgIyzaWA%2FdnjI1deNJrYDUVigfbwIhAKAg3AyVxASApVvlbJvlmRL1Atzc9vjqGc9RvBRWg28uKv8DCCQQABoMNjM3NDIzMTgzODA1Igw31wfhuqnENtiQ0mQq3AMEhYBgleKpCNWtooHRrMQLUadr%2Bfoy%2FhJv2x1gVhciASMN3pZYWcXiwBYx9eGjJbeX8jO%2FnWKJTEbniZ95yvF8cZyQ3n4T4xVu%2B5uu%2FLydjvz53jbSZTCOPanqSsmy9eUarFdd24VecMK0gQImgg0G0EKJyAKoPFx7OsLAeOY8ZX7%2BpF8xgduyxDKWHr85ptWd6Z1rYtGyylDLf8H4Cfo3v1jWWjTLXtsqt%2FB6hBKBhl6Facbji8%2F70lb4td4I2Iyn0PY%2B6nfJowrAW99BpDMLOUMWstDJcbnpjuPbNoYJckF%2BD2xKiNACGwQuR3m%2BAuxFbfOkSzKNevt3d%2BNYR7Pl3ixdYYhxlllzrjvqTlNO%2FJxwho1tM3MGAp3YpbG5AT4Eb15spqOCBrWQ480xpotUofAQ5dhrg%2Biegtm8ilKszTQkurulnONvB2a6lFrSyGncQlM%2Bt81eGtcsT%2BYbMYyM2L6GgmJWa0plyluSZx%2FH10y1Rm4vfi9GNXyVie5VgbQUxUpnH31c1YrdS3Fakp8X4Ps372i7lJ%2FhtMYR5Ny2FkiFMNQvMVhMfgVzzRoufwMZTBamWi7AakLi0%2FUMrtsxZLhEIQe%2Bfa1uzwtqpduCDRBcZYt5chc8cbUg7DDThfDEBjqkAcPvU9ow9gb6ZJf%2Bgx7LJ%2F%2BNwxCVURrk6YQEMCfH0NnEp6GyVbtndnMEgYas0XAUHqXSCJuvZtdX%2BxKWQvXQk3X9%2B3Z7W9eKrlRkW1Pcmg4P%2BSZ5IBsM0L3XHHD9lK%2B60RKGUrAki09Hwcuk96sId4soXeuj14dttFtqthWHnZAllLLfK3E%2B6VY56KONJZsRzp7oGPryNkYLqLn4rqzsGgP44w4a&X-Amz-Signature=3688626a260e23780b340cfc2d282b858c34ba1fc0c20949e2ff39856cb20aa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7X3NRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7dbvYmc%2FcnBb2tHXgIyzaWA%2FdnjI1deNJrYDUVigfbwIhAKAg3AyVxASApVvlbJvlmRL1Atzc9vjqGc9RvBRWg28uKv8DCCQQABoMNjM3NDIzMTgzODA1Igw31wfhuqnENtiQ0mQq3AMEhYBgleKpCNWtooHRrMQLUadr%2Bfoy%2FhJv2x1gVhciASMN3pZYWcXiwBYx9eGjJbeX8jO%2FnWKJTEbniZ95yvF8cZyQ3n4T4xVu%2B5uu%2FLydjvz53jbSZTCOPanqSsmy9eUarFdd24VecMK0gQImgg0G0EKJyAKoPFx7OsLAeOY8ZX7%2BpF8xgduyxDKWHr85ptWd6Z1rYtGyylDLf8H4Cfo3v1jWWjTLXtsqt%2FB6hBKBhl6Facbji8%2F70lb4td4I2Iyn0PY%2B6nfJowrAW99BpDMLOUMWstDJcbnpjuPbNoYJckF%2BD2xKiNACGwQuR3m%2BAuxFbfOkSzKNevt3d%2BNYR7Pl3ixdYYhxlllzrjvqTlNO%2FJxwho1tM3MGAp3YpbG5AT4Eb15spqOCBrWQ480xpotUofAQ5dhrg%2Biegtm8ilKszTQkurulnONvB2a6lFrSyGncQlM%2Bt81eGtcsT%2BYbMYyM2L6GgmJWa0plyluSZx%2FH10y1Rm4vfi9GNXyVie5VgbQUxUpnH31c1YrdS3Fakp8X4Ps372i7lJ%2FhtMYR5Ny2FkiFMNQvMVhMfgVzzRoufwMZTBamWi7AakLi0%2FUMrtsxZLhEIQe%2Bfa1uzwtqpduCDRBcZYt5chc8cbUg7DDThfDEBjqkAcPvU9ow9gb6ZJf%2Bgx7LJ%2F%2BNwxCVURrk6YQEMCfH0NnEp6GyVbtndnMEgYas0XAUHqXSCJuvZtdX%2BxKWQvXQk3X9%2B3Z7W9eKrlRkW1Pcmg4P%2BSZ5IBsM0L3XHHD9lK%2B60RKGUrAki09Hwcuk96sId4soXeuj14dttFtqthWHnZAllLLfK3E%2B6VY56KONJZsRzp7oGPryNkYLqLn4rqzsGgP44w4a&X-Amz-Signature=0b4e9a266cfa370f572d5a46264e93e4aae8accfd21bcfc0816018564ffee0aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7X3NRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7dbvYmc%2FcnBb2tHXgIyzaWA%2FdnjI1deNJrYDUVigfbwIhAKAg3AyVxASApVvlbJvlmRL1Atzc9vjqGc9RvBRWg28uKv8DCCQQABoMNjM3NDIzMTgzODA1Igw31wfhuqnENtiQ0mQq3AMEhYBgleKpCNWtooHRrMQLUadr%2Bfoy%2FhJv2x1gVhciASMN3pZYWcXiwBYx9eGjJbeX8jO%2FnWKJTEbniZ95yvF8cZyQ3n4T4xVu%2B5uu%2FLydjvz53jbSZTCOPanqSsmy9eUarFdd24VecMK0gQImgg0G0EKJyAKoPFx7OsLAeOY8ZX7%2BpF8xgduyxDKWHr85ptWd6Z1rYtGyylDLf8H4Cfo3v1jWWjTLXtsqt%2FB6hBKBhl6Facbji8%2F70lb4td4I2Iyn0PY%2B6nfJowrAW99BpDMLOUMWstDJcbnpjuPbNoYJckF%2BD2xKiNACGwQuR3m%2BAuxFbfOkSzKNevt3d%2BNYR7Pl3ixdYYhxlllzrjvqTlNO%2FJxwho1tM3MGAp3YpbG5AT4Eb15spqOCBrWQ480xpotUofAQ5dhrg%2Biegtm8ilKszTQkurulnONvB2a6lFrSyGncQlM%2Bt81eGtcsT%2BYbMYyM2L6GgmJWa0plyluSZx%2FH10y1Rm4vfi9GNXyVie5VgbQUxUpnH31c1YrdS3Fakp8X4Ps372i7lJ%2FhtMYR5Ny2FkiFMNQvMVhMfgVzzRoufwMZTBamWi7AakLi0%2FUMrtsxZLhEIQe%2Bfa1uzwtqpduCDRBcZYt5chc8cbUg7DDThfDEBjqkAcPvU9ow9gb6ZJf%2Bgx7LJ%2F%2BNwxCVURrk6YQEMCfH0NnEp6GyVbtndnMEgYas0XAUHqXSCJuvZtdX%2BxKWQvXQk3X9%2B3Z7W9eKrlRkW1Pcmg4P%2BSZ5IBsM0L3XHHD9lK%2B60RKGUrAki09Hwcuk96sId4soXeuj14dttFtqthWHnZAllLLfK3E%2B6VY56KONJZsRzp7oGPryNkYLqLn4rqzsGgP44w4a&X-Amz-Signature=98bfed1bc2e7a292c114fe3fb959c5f5259d8ad2090a4a36fea61637ec99b737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7X3NRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7dbvYmc%2FcnBb2tHXgIyzaWA%2FdnjI1deNJrYDUVigfbwIhAKAg3AyVxASApVvlbJvlmRL1Atzc9vjqGc9RvBRWg28uKv8DCCQQABoMNjM3NDIzMTgzODA1Igw31wfhuqnENtiQ0mQq3AMEhYBgleKpCNWtooHRrMQLUadr%2Bfoy%2FhJv2x1gVhciASMN3pZYWcXiwBYx9eGjJbeX8jO%2FnWKJTEbniZ95yvF8cZyQ3n4T4xVu%2B5uu%2FLydjvz53jbSZTCOPanqSsmy9eUarFdd24VecMK0gQImgg0G0EKJyAKoPFx7OsLAeOY8ZX7%2BpF8xgduyxDKWHr85ptWd6Z1rYtGyylDLf8H4Cfo3v1jWWjTLXtsqt%2FB6hBKBhl6Facbji8%2F70lb4td4I2Iyn0PY%2B6nfJowrAW99BpDMLOUMWstDJcbnpjuPbNoYJckF%2BD2xKiNACGwQuR3m%2BAuxFbfOkSzKNevt3d%2BNYR7Pl3ixdYYhxlllzrjvqTlNO%2FJxwho1tM3MGAp3YpbG5AT4Eb15spqOCBrWQ480xpotUofAQ5dhrg%2Biegtm8ilKszTQkurulnONvB2a6lFrSyGncQlM%2Bt81eGtcsT%2BYbMYyM2L6GgmJWa0plyluSZx%2FH10y1Rm4vfi9GNXyVie5VgbQUxUpnH31c1YrdS3Fakp8X4Ps372i7lJ%2FhtMYR5Ny2FkiFMNQvMVhMfgVzzRoufwMZTBamWi7AakLi0%2FUMrtsxZLhEIQe%2Bfa1uzwtqpduCDRBcZYt5chc8cbUg7DDThfDEBjqkAcPvU9ow9gb6ZJf%2Bgx7LJ%2F%2BNwxCVURrk6YQEMCfH0NnEp6GyVbtndnMEgYas0XAUHqXSCJuvZtdX%2BxKWQvXQk3X9%2B3Z7W9eKrlRkW1Pcmg4P%2BSZ5IBsM0L3XHHD9lK%2B60RKGUrAki09Hwcuk96sId4soXeuj14dttFtqthWHnZAllLLfK3E%2B6VY56KONJZsRzp7oGPryNkYLqLn4rqzsGgP44w4a&X-Amz-Signature=88883c45e14ce7224fed33a04b3f574ce169e07f9e5b0fe3c0a8964771dca4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7X3NRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7dbvYmc%2FcnBb2tHXgIyzaWA%2FdnjI1deNJrYDUVigfbwIhAKAg3AyVxASApVvlbJvlmRL1Atzc9vjqGc9RvBRWg28uKv8DCCQQABoMNjM3NDIzMTgzODA1Igw31wfhuqnENtiQ0mQq3AMEhYBgleKpCNWtooHRrMQLUadr%2Bfoy%2FhJv2x1gVhciASMN3pZYWcXiwBYx9eGjJbeX8jO%2FnWKJTEbniZ95yvF8cZyQ3n4T4xVu%2B5uu%2FLydjvz53jbSZTCOPanqSsmy9eUarFdd24VecMK0gQImgg0G0EKJyAKoPFx7OsLAeOY8ZX7%2BpF8xgduyxDKWHr85ptWd6Z1rYtGyylDLf8H4Cfo3v1jWWjTLXtsqt%2FB6hBKBhl6Facbji8%2F70lb4td4I2Iyn0PY%2B6nfJowrAW99BpDMLOUMWstDJcbnpjuPbNoYJckF%2BD2xKiNACGwQuR3m%2BAuxFbfOkSzKNevt3d%2BNYR7Pl3ixdYYhxlllzrjvqTlNO%2FJxwho1tM3MGAp3YpbG5AT4Eb15spqOCBrWQ480xpotUofAQ5dhrg%2Biegtm8ilKszTQkurulnONvB2a6lFrSyGncQlM%2Bt81eGtcsT%2BYbMYyM2L6GgmJWa0plyluSZx%2FH10y1Rm4vfi9GNXyVie5VgbQUxUpnH31c1YrdS3Fakp8X4Ps372i7lJ%2FhtMYR5Ny2FkiFMNQvMVhMfgVzzRoufwMZTBamWi7AakLi0%2FUMrtsxZLhEIQe%2Bfa1uzwtqpduCDRBcZYt5chc8cbUg7DDThfDEBjqkAcPvU9ow9gb6ZJf%2Bgx7LJ%2F%2BNwxCVURrk6YQEMCfH0NnEp6GyVbtndnMEgYas0XAUHqXSCJuvZtdX%2BxKWQvXQk3X9%2B3Z7W9eKrlRkW1Pcmg4P%2BSZ5IBsM0L3XHHD9lK%2B60RKGUrAki09Hwcuk96sId4soXeuj14dttFtqthWHnZAllLLfK3E%2B6VY56KONJZsRzp7oGPryNkYLqLn4rqzsGgP44w4a&X-Amz-Signature=cc27a3d961b351596d0d1f4aea6a518178e22822028b09c5e2605e53b3874f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7X3NRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7dbvYmc%2FcnBb2tHXgIyzaWA%2FdnjI1deNJrYDUVigfbwIhAKAg3AyVxASApVvlbJvlmRL1Atzc9vjqGc9RvBRWg28uKv8DCCQQABoMNjM3NDIzMTgzODA1Igw31wfhuqnENtiQ0mQq3AMEhYBgleKpCNWtooHRrMQLUadr%2Bfoy%2FhJv2x1gVhciASMN3pZYWcXiwBYx9eGjJbeX8jO%2FnWKJTEbniZ95yvF8cZyQ3n4T4xVu%2B5uu%2FLydjvz53jbSZTCOPanqSsmy9eUarFdd24VecMK0gQImgg0G0EKJyAKoPFx7OsLAeOY8ZX7%2BpF8xgduyxDKWHr85ptWd6Z1rYtGyylDLf8H4Cfo3v1jWWjTLXtsqt%2FB6hBKBhl6Facbji8%2F70lb4td4I2Iyn0PY%2B6nfJowrAW99BpDMLOUMWstDJcbnpjuPbNoYJckF%2BD2xKiNACGwQuR3m%2BAuxFbfOkSzKNevt3d%2BNYR7Pl3ixdYYhxlllzrjvqTlNO%2FJxwho1tM3MGAp3YpbG5AT4Eb15spqOCBrWQ480xpotUofAQ5dhrg%2Biegtm8ilKszTQkurulnONvB2a6lFrSyGncQlM%2Bt81eGtcsT%2BYbMYyM2L6GgmJWa0plyluSZx%2FH10y1Rm4vfi9GNXyVie5VgbQUxUpnH31c1YrdS3Fakp8X4Ps372i7lJ%2FhtMYR5Ny2FkiFMNQvMVhMfgVzzRoufwMZTBamWi7AakLi0%2FUMrtsxZLhEIQe%2Bfa1uzwtqpduCDRBcZYt5chc8cbUg7DDThfDEBjqkAcPvU9ow9gb6ZJf%2Bgx7LJ%2F%2BNwxCVURrk6YQEMCfH0NnEp6GyVbtndnMEgYas0XAUHqXSCJuvZtdX%2BxKWQvXQk3X9%2B3Z7W9eKrlRkW1Pcmg4P%2BSZ5IBsM0L3XHHD9lK%2B60RKGUrAki09Hwcuk96sId4soXeuj14dttFtqthWHnZAllLLfK3E%2B6VY56KONJZsRzp7oGPryNkYLqLn4rqzsGgP44w4a&X-Amz-Signature=8056ba2eb5de4ea2983592da102b623810a3205c3918b2301528289af525d5d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA7X3NRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7dbvYmc%2FcnBb2tHXgIyzaWA%2FdnjI1deNJrYDUVigfbwIhAKAg3AyVxASApVvlbJvlmRL1Atzc9vjqGc9RvBRWg28uKv8DCCQQABoMNjM3NDIzMTgzODA1Igw31wfhuqnENtiQ0mQq3AMEhYBgleKpCNWtooHRrMQLUadr%2Bfoy%2FhJv2x1gVhciASMN3pZYWcXiwBYx9eGjJbeX8jO%2FnWKJTEbniZ95yvF8cZyQ3n4T4xVu%2B5uu%2FLydjvz53jbSZTCOPanqSsmy9eUarFdd24VecMK0gQImgg0G0EKJyAKoPFx7OsLAeOY8ZX7%2BpF8xgduyxDKWHr85ptWd6Z1rYtGyylDLf8H4Cfo3v1jWWjTLXtsqt%2FB6hBKBhl6Facbji8%2F70lb4td4I2Iyn0PY%2B6nfJowrAW99BpDMLOUMWstDJcbnpjuPbNoYJckF%2BD2xKiNACGwQuR3m%2BAuxFbfOkSzKNevt3d%2BNYR7Pl3ixdYYhxlllzrjvqTlNO%2FJxwho1tM3MGAp3YpbG5AT4Eb15spqOCBrWQ480xpotUofAQ5dhrg%2Biegtm8ilKszTQkurulnONvB2a6lFrSyGncQlM%2Bt81eGtcsT%2BYbMYyM2L6GgmJWa0plyluSZx%2FH10y1Rm4vfi9GNXyVie5VgbQUxUpnH31c1YrdS3Fakp8X4Ps372i7lJ%2FhtMYR5Ny2FkiFMNQvMVhMfgVzzRoufwMZTBamWi7AakLi0%2FUMrtsxZLhEIQe%2Bfa1uzwtqpduCDRBcZYt5chc8cbUg7DDThfDEBjqkAcPvU9ow9gb6ZJf%2Bgx7LJ%2F%2BNwxCVURrk6YQEMCfH0NnEp6GyVbtndnMEgYas0XAUHqXSCJuvZtdX%2BxKWQvXQk3X9%2B3Z7W9eKrlRkW1Pcmg4P%2BSZ5IBsM0L3XHHD9lK%2B60RKGUrAki09Hwcuk96sId4soXeuj14dttFtqthWHnZAllLLfK3E%2B6VY56KONJZsRzp7oGPryNkYLqLn4rqzsGgP44w4a&X-Amz-Signature=7b4f40a19bffb63336d281acd2aa07807b77b70f1d9facfdbce4e90dc9af88fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
