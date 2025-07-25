---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-24T23:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKUIH5H%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB%2Fvh40seKTUKKMv7CAFM0h%2BdP6CcEemQhQmYrkG0F9wAiBmt%2FOAphcFOK8FdlmhlPwSGynnYq3plLcuUfEg7LKmFir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMRq6%2FN7plXbWI1iTDKtwD2hr74tIX6maGnp9aRP7COgVuvD%2B0Qvydp7X3chH%2B2WT6zPBZ%2BS9wcUeanTkonoIjxlIffiNGg4%2BsrnkXO%2B%2FKbJjsLIQdIgP%2F1rmHIuILTFXElqOK8LHKnNDuvaDAb7tkvI9e2gyiV4l032ePWIaRzJp6Zr2TChWAjhlafs%2BF5AxsnXRq%2Bt4x6F6OS0YWtvASGZQrpomWThQtkbIgmXdBcL7RzzWWoQtvqYcX%2BIYleI5mer53kHcgEPPFd2pHbA62KkMGi5yGqRQ6F%2BEoj%2FfOBxvnonIavhi8XDz0URRooBAeaSkfBWp7SedyB8qZXxr2Sd3egH1pY7jn6eoDCQHRrd6wzo%2FXH29OJTR4N2%2FyBPiwtY44OEGNwaVh4bddKvi07a5EY%2FxpN5Ql94aUxuOIejZdVNmaf%2FnbAjf7t5KixBu7YB2E3HtscIHUpGevTYITl93ESEgf%2FmTKdx%2FYT4N2J6gNlKPbxwzgmnZdTSHRVmrHg0NqglRJJnA1Go7YvXNLZb1uD7lpFl4RbEPaQU8mAdbHS%2Fn5TRAV7Xm0ZT2U1TZ6TdlMZfnq5cUkns2wlc7pbdFD4SB2RGaKj03ahZ7RzEZG0aCkQgFnMRY5uT%2FsiVOOJjoUkHcpklCOWwgw2oaPxAY6pgFAtcJnFUUo63kP80DHcCpyjvFNJ2szdoWp0MTqnuKlHdp%2BpIWBUUL%2BAkdJDmdSSL7drTiJtJNjF05fPags%2BcbJBL86QTJxW92cLGZiaUyxj3l4v57K3G4QgqCAPfWOXCu%2FLgQajxo1lJ0ACBtBOE6wkFWG4rQMmYhzFRELXdB2blv9XXogv7W3rdq0ZOkm1Bt9InFPaWru%2BX7I9%2FT61mzi2XQAXD3v&X-Amz-Signature=8f104cf99722b80d4dceff584985a293efe92210cbbabb24c96217d5e497e635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKUIH5H%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB%2Fvh40seKTUKKMv7CAFM0h%2BdP6CcEemQhQmYrkG0F9wAiBmt%2FOAphcFOK8FdlmhlPwSGynnYq3plLcuUfEg7LKmFir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMRq6%2FN7plXbWI1iTDKtwD2hr74tIX6maGnp9aRP7COgVuvD%2B0Qvydp7X3chH%2B2WT6zPBZ%2BS9wcUeanTkonoIjxlIffiNGg4%2BsrnkXO%2B%2FKbJjsLIQdIgP%2F1rmHIuILTFXElqOK8LHKnNDuvaDAb7tkvI9e2gyiV4l032ePWIaRzJp6Zr2TChWAjhlafs%2BF5AxsnXRq%2Bt4x6F6OS0YWtvASGZQrpomWThQtkbIgmXdBcL7RzzWWoQtvqYcX%2BIYleI5mer53kHcgEPPFd2pHbA62KkMGi5yGqRQ6F%2BEoj%2FfOBxvnonIavhi8XDz0URRooBAeaSkfBWp7SedyB8qZXxr2Sd3egH1pY7jn6eoDCQHRrd6wzo%2FXH29OJTR4N2%2FyBPiwtY44OEGNwaVh4bddKvi07a5EY%2FxpN5Ql94aUxuOIejZdVNmaf%2FnbAjf7t5KixBu7YB2E3HtscIHUpGevTYITl93ESEgf%2FmTKdx%2FYT4N2J6gNlKPbxwzgmnZdTSHRVmrHg0NqglRJJnA1Go7YvXNLZb1uD7lpFl4RbEPaQU8mAdbHS%2Fn5TRAV7Xm0ZT2U1TZ6TdlMZfnq5cUkns2wlc7pbdFD4SB2RGaKj03ahZ7RzEZG0aCkQgFnMRY5uT%2FsiVOOJjoUkHcpklCOWwgw2oaPxAY6pgFAtcJnFUUo63kP80DHcCpyjvFNJ2szdoWp0MTqnuKlHdp%2BpIWBUUL%2BAkdJDmdSSL7drTiJtJNjF05fPags%2BcbJBL86QTJxW92cLGZiaUyxj3l4v57K3G4QgqCAPfWOXCu%2FLgQajxo1lJ0ACBtBOE6wkFWG4rQMmYhzFRELXdB2blv9XXogv7W3rdq0ZOkm1Bt9InFPaWru%2BX7I9%2FT61mzi2XQAXD3v&X-Amz-Signature=9d5a5c38bf3c51248e733c4f321018781a2b1175459673bceba62c836764e7e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: add rviz guide of viewing scanned map

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKUIH5H%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB%2Fvh40seKTUKKMv7CAFM0h%2BdP6CcEemQhQmYrkG0F9wAiBmt%2FOAphcFOK8FdlmhlPwSGynnYq3plLcuUfEg7LKmFir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMRq6%2FN7plXbWI1iTDKtwD2hr74tIX6maGnp9aRP7COgVuvD%2B0Qvydp7X3chH%2B2WT6zPBZ%2BS9wcUeanTkonoIjxlIffiNGg4%2BsrnkXO%2B%2FKbJjsLIQdIgP%2F1rmHIuILTFXElqOK8LHKnNDuvaDAb7tkvI9e2gyiV4l032ePWIaRzJp6Zr2TChWAjhlafs%2BF5AxsnXRq%2Bt4x6F6OS0YWtvASGZQrpomWThQtkbIgmXdBcL7RzzWWoQtvqYcX%2BIYleI5mer53kHcgEPPFd2pHbA62KkMGi5yGqRQ6F%2BEoj%2FfOBxvnonIavhi8XDz0URRooBAeaSkfBWp7SedyB8qZXxr2Sd3egH1pY7jn6eoDCQHRrd6wzo%2FXH29OJTR4N2%2FyBPiwtY44OEGNwaVh4bddKvi07a5EY%2FxpN5Ql94aUxuOIejZdVNmaf%2FnbAjf7t5KixBu7YB2E3HtscIHUpGevTYITl93ESEgf%2FmTKdx%2FYT4N2J6gNlKPbxwzgmnZdTSHRVmrHg0NqglRJJnA1Go7YvXNLZb1uD7lpFl4RbEPaQU8mAdbHS%2Fn5TRAV7Xm0ZT2U1TZ6TdlMZfnq5cUkns2wlc7pbdFD4SB2RGaKj03ahZ7RzEZG0aCkQgFnMRY5uT%2FsiVOOJjoUkHcpklCOWwgw2oaPxAY6pgFAtcJnFUUo63kP80DHcCpyjvFNJ2szdoWp0MTqnuKlHdp%2BpIWBUUL%2BAkdJDmdSSL7drTiJtJNjF05fPags%2BcbJBL86QTJxW92cLGZiaUyxj3l4v57K3G4QgqCAPfWOXCu%2FLgQajxo1lJ0ACBtBOE6wkFWG4rQMmYhzFRELXdB2blv9XXogv7W3rdq0ZOkm1Bt9InFPaWru%2BX7I9%2FT61mzi2XQAXD3v&X-Amz-Signature=b576cfe4734e6b387a7f9d42c47ecc80c421e1a91a7ecf8164a2b6b85a063de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKUIH5H%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB%2Fvh40seKTUKKMv7CAFM0h%2BdP6CcEemQhQmYrkG0F9wAiBmt%2FOAphcFOK8FdlmhlPwSGynnYq3plLcuUfEg7LKmFir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMRq6%2FN7plXbWI1iTDKtwD2hr74tIX6maGnp9aRP7COgVuvD%2B0Qvydp7X3chH%2B2WT6zPBZ%2BS9wcUeanTkonoIjxlIffiNGg4%2BsrnkXO%2B%2FKbJjsLIQdIgP%2F1rmHIuILTFXElqOK8LHKnNDuvaDAb7tkvI9e2gyiV4l032ePWIaRzJp6Zr2TChWAjhlafs%2BF5AxsnXRq%2Bt4x6F6OS0YWtvASGZQrpomWThQtkbIgmXdBcL7RzzWWoQtvqYcX%2BIYleI5mer53kHcgEPPFd2pHbA62KkMGi5yGqRQ6F%2BEoj%2FfOBxvnonIavhi8XDz0URRooBAeaSkfBWp7SedyB8qZXxr2Sd3egH1pY7jn6eoDCQHRrd6wzo%2FXH29OJTR4N2%2FyBPiwtY44OEGNwaVh4bddKvi07a5EY%2FxpN5Ql94aUxuOIejZdVNmaf%2FnbAjf7t5KixBu7YB2E3HtscIHUpGevTYITl93ESEgf%2FmTKdx%2FYT4N2J6gNlKPbxwzgmnZdTSHRVmrHg0NqglRJJnA1Go7YvXNLZb1uD7lpFl4RbEPaQU8mAdbHS%2Fn5TRAV7Xm0ZT2U1TZ6TdlMZfnq5cUkns2wlc7pbdFD4SB2RGaKj03ahZ7RzEZG0aCkQgFnMRY5uT%2FsiVOOJjoUkHcpklCOWwgw2oaPxAY6pgFAtcJnFUUo63kP80DHcCpyjvFNJ2szdoWp0MTqnuKlHdp%2BpIWBUUL%2BAkdJDmdSSL7drTiJtJNjF05fPags%2BcbJBL86QTJxW92cLGZiaUyxj3l4v57K3G4QgqCAPfWOXCu%2FLgQajxo1lJ0ACBtBOE6wkFWG4rQMmYhzFRELXdB2blv9XXogv7W3rdq0ZOkm1Bt9InFPaWru%2BX7I9%2FT61mzi2XQAXD3v&X-Amz-Signature=ce819f4d94e790587c0a61c8613243bc4a399a245ab77000c2e688260f426266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKUIH5H%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB%2Fvh40seKTUKKMv7CAFM0h%2BdP6CcEemQhQmYrkG0F9wAiBmt%2FOAphcFOK8FdlmhlPwSGynnYq3plLcuUfEg7LKmFir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMRq6%2FN7plXbWI1iTDKtwD2hr74tIX6maGnp9aRP7COgVuvD%2B0Qvydp7X3chH%2B2WT6zPBZ%2BS9wcUeanTkonoIjxlIffiNGg4%2BsrnkXO%2B%2FKbJjsLIQdIgP%2F1rmHIuILTFXElqOK8LHKnNDuvaDAb7tkvI9e2gyiV4l032ePWIaRzJp6Zr2TChWAjhlafs%2BF5AxsnXRq%2Bt4x6F6OS0YWtvASGZQrpomWThQtkbIgmXdBcL7RzzWWoQtvqYcX%2BIYleI5mer53kHcgEPPFd2pHbA62KkMGi5yGqRQ6F%2BEoj%2FfOBxvnonIavhi8XDz0URRooBAeaSkfBWp7SedyB8qZXxr2Sd3egH1pY7jn6eoDCQHRrd6wzo%2FXH29OJTR4N2%2FyBPiwtY44OEGNwaVh4bddKvi07a5EY%2FxpN5Ql94aUxuOIejZdVNmaf%2FnbAjf7t5KixBu7YB2E3HtscIHUpGevTYITl93ESEgf%2FmTKdx%2FYT4N2J6gNlKPbxwzgmnZdTSHRVmrHg0NqglRJJnA1Go7YvXNLZb1uD7lpFl4RbEPaQU8mAdbHS%2Fn5TRAV7Xm0ZT2U1TZ6TdlMZfnq5cUkns2wlc7pbdFD4SB2RGaKj03ahZ7RzEZG0aCkQgFnMRY5uT%2FsiVOOJjoUkHcpklCOWwgw2oaPxAY6pgFAtcJnFUUo63kP80DHcCpyjvFNJ2szdoWp0MTqnuKlHdp%2BpIWBUUL%2BAkdJDmdSSL7drTiJtJNjF05fPags%2BcbJBL86QTJxW92cLGZiaUyxj3l4v57K3G4QgqCAPfWOXCu%2FLgQajxo1lJ0ACBtBOE6wkFWG4rQMmYhzFRELXdB2blv9XXogv7W3rdq0ZOkm1Bt9InFPaWru%2BX7I9%2FT61mzi2XQAXD3v&X-Amz-Signature=d6f86e729cc778115a4e55b2aa332e276dac07f0c0de90634514a1d0fabf9d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKUIH5H%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB%2Fvh40seKTUKKMv7CAFM0h%2BdP6CcEemQhQmYrkG0F9wAiBmt%2FOAphcFOK8FdlmhlPwSGynnYq3plLcuUfEg7LKmFir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMRq6%2FN7plXbWI1iTDKtwD2hr74tIX6maGnp9aRP7COgVuvD%2B0Qvydp7X3chH%2B2WT6zPBZ%2BS9wcUeanTkonoIjxlIffiNGg4%2BsrnkXO%2B%2FKbJjsLIQdIgP%2F1rmHIuILTFXElqOK8LHKnNDuvaDAb7tkvI9e2gyiV4l032ePWIaRzJp6Zr2TChWAjhlafs%2BF5AxsnXRq%2Bt4x6F6OS0YWtvASGZQrpomWThQtkbIgmXdBcL7RzzWWoQtvqYcX%2BIYleI5mer53kHcgEPPFd2pHbA62KkMGi5yGqRQ6F%2BEoj%2FfOBxvnonIavhi8XDz0URRooBAeaSkfBWp7SedyB8qZXxr2Sd3egH1pY7jn6eoDCQHRrd6wzo%2FXH29OJTR4N2%2FyBPiwtY44OEGNwaVh4bddKvi07a5EY%2FxpN5Ql94aUxuOIejZdVNmaf%2FnbAjf7t5KixBu7YB2E3HtscIHUpGevTYITl93ESEgf%2FmTKdx%2FYT4N2J6gNlKPbxwzgmnZdTSHRVmrHg0NqglRJJnA1Go7YvXNLZb1uD7lpFl4RbEPaQU8mAdbHS%2Fn5TRAV7Xm0ZT2U1TZ6TdlMZfnq5cUkns2wlc7pbdFD4SB2RGaKj03ahZ7RzEZG0aCkQgFnMRY5uT%2FsiVOOJjoUkHcpklCOWwgw2oaPxAY6pgFAtcJnFUUo63kP80DHcCpyjvFNJ2szdoWp0MTqnuKlHdp%2BpIWBUUL%2BAkdJDmdSSL7drTiJtJNjF05fPags%2BcbJBL86QTJxW92cLGZiaUyxj3l4v57K3G4QgqCAPfWOXCu%2FLgQajxo1lJ0ACBtBOE6wkFWG4rQMmYhzFRELXdB2blv9XXogv7W3rdq0ZOkm1Bt9InFPaWru%2BX7I9%2FT61mzi2XQAXD3v&X-Amz-Signature=d531ae14631fe66f1fc2923c0616f8dfd8be3fa976c77f45928c7004ab2aa651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKUIH5H%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB%2Fvh40seKTUKKMv7CAFM0h%2BdP6CcEemQhQmYrkG0F9wAiBmt%2FOAphcFOK8FdlmhlPwSGynnYq3plLcuUfEg7LKmFir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMRq6%2FN7plXbWI1iTDKtwD2hr74tIX6maGnp9aRP7COgVuvD%2B0Qvydp7X3chH%2B2WT6zPBZ%2BS9wcUeanTkonoIjxlIffiNGg4%2BsrnkXO%2B%2FKbJjsLIQdIgP%2F1rmHIuILTFXElqOK8LHKnNDuvaDAb7tkvI9e2gyiV4l032ePWIaRzJp6Zr2TChWAjhlafs%2BF5AxsnXRq%2Bt4x6F6OS0YWtvASGZQrpomWThQtkbIgmXdBcL7RzzWWoQtvqYcX%2BIYleI5mer53kHcgEPPFd2pHbA62KkMGi5yGqRQ6F%2BEoj%2FfOBxvnonIavhi8XDz0URRooBAeaSkfBWp7SedyB8qZXxr2Sd3egH1pY7jn6eoDCQHRrd6wzo%2FXH29OJTR4N2%2FyBPiwtY44OEGNwaVh4bddKvi07a5EY%2FxpN5Ql94aUxuOIejZdVNmaf%2FnbAjf7t5KixBu7YB2E3HtscIHUpGevTYITl93ESEgf%2FmTKdx%2FYT4N2J6gNlKPbxwzgmnZdTSHRVmrHg0NqglRJJnA1Go7YvXNLZb1uD7lpFl4RbEPaQU8mAdbHS%2Fn5TRAV7Xm0ZT2U1TZ6TdlMZfnq5cUkns2wlc7pbdFD4SB2RGaKj03ahZ7RzEZG0aCkQgFnMRY5uT%2FsiVOOJjoUkHcpklCOWwgw2oaPxAY6pgFAtcJnFUUo63kP80DHcCpyjvFNJ2szdoWp0MTqnuKlHdp%2BpIWBUUL%2BAkdJDmdSSL7drTiJtJNjF05fPags%2BcbJBL86QTJxW92cLGZiaUyxj3l4v57K3G4QgqCAPfWOXCu%2FLgQajxo1lJ0ACBtBOE6wkFWG4rQMmYhzFRELXdB2blv9XXogv7W3rdq0ZOkm1Bt9InFPaWru%2BX7I9%2FT61mzi2XQAXD3v&X-Amz-Signature=115d6bed5a444217e34b998c265880f84656c1e13ba7b48948cdfb891c645c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKUIH5H%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB%2Fvh40seKTUKKMv7CAFM0h%2BdP6CcEemQhQmYrkG0F9wAiBmt%2FOAphcFOK8FdlmhlPwSGynnYq3plLcuUfEg7LKmFir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMRq6%2FN7plXbWI1iTDKtwD2hr74tIX6maGnp9aRP7COgVuvD%2B0Qvydp7X3chH%2B2WT6zPBZ%2BS9wcUeanTkonoIjxlIffiNGg4%2BsrnkXO%2B%2FKbJjsLIQdIgP%2F1rmHIuILTFXElqOK8LHKnNDuvaDAb7tkvI9e2gyiV4l032ePWIaRzJp6Zr2TChWAjhlafs%2BF5AxsnXRq%2Bt4x6F6OS0YWtvASGZQrpomWThQtkbIgmXdBcL7RzzWWoQtvqYcX%2BIYleI5mer53kHcgEPPFd2pHbA62KkMGi5yGqRQ6F%2BEoj%2FfOBxvnonIavhi8XDz0URRooBAeaSkfBWp7SedyB8qZXxr2Sd3egH1pY7jn6eoDCQHRrd6wzo%2FXH29OJTR4N2%2FyBPiwtY44OEGNwaVh4bddKvi07a5EY%2FxpN5Ql94aUxuOIejZdVNmaf%2FnbAjf7t5KixBu7YB2E3HtscIHUpGevTYITl93ESEgf%2FmTKdx%2FYT4N2J6gNlKPbxwzgmnZdTSHRVmrHg0NqglRJJnA1Go7YvXNLZb1uD7lpFl4RbEPaQU8mAdbHS%2Fn5TRAV7Xm0ZT2U1TZ6TdlMZfnq5cUkns2wlc7pbdFD4SB2RGaKj03ahZ7RzEZG0aCkQgFnMRY5uT%2FsiVOOJjoUkHcpklCOWwgw2oaPxAY6pgFAtcJnFUUo63kP80DHcCpyjvFNJ2szdoWp0MTqnuKlHdp%2BpIWBUUL%2BAkdJDmdSSL7drTiJtJNjF05fPags%2BcbJBL86QTJxW92cLGZiaUyxj3l4v57K3G4QgqCAPfWOXCu%2FLgQajxo1lJ0ACBtBOE6wkFWG4rQMmYhzFRELXdB2blv9XXogv7W3rdq0ZOkm1Bt9InFPaWru%2BX7I9%2FT61mzi2XQAXD3v&X-Amz-Signature=9171e863a870f0af51d20be090e602be20c588c9d985ea8706121b10cf98b8a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LKUIH5H%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T181329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIB%2Fvh40seKTUKKMv7CAFM0h%2BdP6CcEemQhQmYrkG0F9wAiBmt%2FOAphcFOK8FdlmhlPwSGynnYq3plLcuUfEg7LKmFir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMRq6%2FN7plXbWI1iTDKtwD2hr74tIX6maGnp9aRP7COgVuvD%2B0Qvydp7X3chH%2B2WT6zPBZ%2BS9wcUeanTkonoIjxlIffiNGg4%2BsrnkXO%2B%2FKbJjsLIQdIgP%2F1rmHIuILTFXElqOK8LHKnNDuvaDAb7tkvI9e2gyiV4l032ePWIaRzJp6Zr2TChWAjhlafs%2BF5AxsnXRq%2Bt4x6F6OS0YWtvASGZQrpomWThQtkbIgmXdBcL7RzzWWoQtvqYcX%2BIYleI5mer53kHcgEPPFd2pHbA62KkMGi5yGqRQ6F%2BEoj%2FfOBxvnonIavhi8XDz0URRooBAeaSkfBWp7SedyB8qZXxr2Sd3egH1pY7jn6eoDCQHRrd6wzo%2FXH29OJTR4N2%2FyBPiwtY44OEGNwaVh4bddKvi07a5EY%2FxpN5Ql94aUxuOIejZdVNmaf%2FnbAjf7t5KixBu7YB2E3HtscIHUpGevTYITl93ESEgf%2FmTKdx%2FYT4N2J6gNlKPbxwzgmnZdTSHRVmrHg0NqglRJJnA1Go7YvXNLZb1uD7lpFl4RbEPaQU8mAdbHS%2Fn5TRAV7Xm0ZT2U1TZ6TdlMZfnq5cUkns2wlc7pbdFD4SB2RGaKj03ahZ7RzEZG0aCkQgFnMRY5uT%2FsiVOOJjoUkHcpklCOWwgw2oaPxAY6pgFAtcJnFUUo63kP80DHcCpyjvFNJ2szdoWp0MTqnuKlHdp%2BpIWBUUL%2BAkdJDmdSSL7drTiJtJNjF05fPags%2BcbJBL86QTJxW92cLGZiaUyxj3l4v57K3G4QgqCAPfWOXCu%2FLgQajxo1lJ0ACBtBOE6wkFWG4rQMmYhzFRELXdB2blv9XXogv7W3rdq0ZOkm1Bt9InFPaWru%2BX7I9%2FT61mzi2XQAXD3v&X-Amz-Signature=c2c554f4c3526a8073d8895c8687d858423f710f28fba0f196c9fadfebc00897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored map

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

TODO: add pic

For further configuration go to: TODO: link to slam docs config guide 
