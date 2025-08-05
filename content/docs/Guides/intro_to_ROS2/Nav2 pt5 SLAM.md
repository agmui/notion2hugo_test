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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVGKDVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICjnlCahQJoh6lWqeiBp18fHnw146if5WJmncmPShWIyAiB%2BRLXEZJJX74dfezEjuWRpx0aXvv9lVCyc84HtQ1ECCyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMXcu6CL8TF0SkT3zcKtwDytOtPm8oIbsZvYDdcfkmXZj%2FAiIC%2B8Frjm2I3Wte9A6I4xnp0L4xLqa5llEVv3d63Z3m9jZ7xCl17%2FFamBV%2FCYeREAaXb9xWXmc50Z6Cmgf%2BMHf2bVB9fN8L2xNfAFtZ5a7wADWc4tbG52nevEIzXnxgXKWJPxCwEs4ydcuJkbSNth0OGtu0h6nDH50axzuRGask7cDQ8LIoMIBYV66DUFcyQa667a7YVO%2FFhrTnMOFH4cvM%2Bk5vT5V%2F6%2F1UeocrLQKIdhXeazH6aAcu4ysX88riqe3Z8efvLrioPPIk4kv2WVuaspgJ2j%2F93FD94JyFwVqHus%2BGo8ouQl8VweaP94D52OLTAFaC5HdRFRZuYAaGtSZkAlEfLlI7%2BNs%2FFnGLtihQnJbbeBQqsmeSGPDiibd9f7%2BNWQmuzoYTcafNlh3f%2BzP1MlH8jT007F90jlMwOAykBhHGBaIqHmXabbpqzJ96dLAQ5SEURftJCETyq2tYrSg6%2BR1yXihmUIfojteelCHu%2FNmd6A9MY3Y5ABIuujhN%2BOG0hSs0gaqO3NRP7OkDGHdx07QB2b5vLVUVhWZOA7pX54wJsxFe4stm3vOtiqWDPWtWiOZg7RLCAPm9dBHV%2FA%2Be5mlfiCFl1fcw7fPExAY6pgEyWgDQxy%2Bh41YnfVKREIPTpil%2Fz8DiusyUv%2FPoxj0%2FVKqWTw4T%2F0JjQwyd2Mbrp95W2jQMjTzpPlYfdegi%2BENL4OzmyNEyBzll5O%2BUSfxnVMkxkzIObhca5GMfqmfunVysOhk9DB0NJgwSBX1zpuAJxgpx6LZW76%2B3FkHnIoDQ0Scw%2BWJhtEBZ7Bx%2BGddRYLwKE1riyv8UF9G2OzP%2F9YR0JD8POKMl&X-Amz-Signature=28a6b8fed52227ba6da88b3dc4f7d09b96c9deeb7e3e6d7f57af942d1552ad76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVGKDVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICjnlCahQJoh6lWqeiBp18fHnw146if5WJmncmPShWIyAiB%2BRLXEZJJX74dfezEjuWRpx0aXvv9lVCyc84HtQ1ECCyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMXcu6CL8TF0SkT3zcKtwDytOtPm8oIbsZvYDdcfkmXZj%2FAiIC%2B8Frjm2I3Wte9A6I4xnp0L4xLqa5llEVv3d63Z3m9jZ7xCl17%2FFamBV%2FCYeREAaXb9xWXmc50Z6Cmgf%2BMHf2bVB9fN8L2xNfAFtZ5a7wADWc4tbG52nevEIzXnxgXKWJPxCwEs4ydcuJkbSNth0OGtu0h6nDH50axzuRGask7cDQ8LIoMIBYV66DUFcyQa667a7YVO%2FFhrTnMOFH4cvM%2Bk5vT5V%2F6%2F1UeocrLQKIdhXeazH6aAcu4ysX88riqe3Z8efvLrioPPIk4kv2WVuaspgJ2j%2F93FD94JyFwVqHus%2BGo8ouQl8VweaP94D52OLTAFaC5HdRFRZuYAaGtSZkAlEfLlI7%2BNs%2FFnGLtihQnJbbeBQqsmeSGPDiibd9f7%2BNWQmuzoYTcafNlh3f%2BzP1MlH8jT007F90jlMwOAykBhHGBaIqHmXabbpqzJ96dLAQ5SEURftJCETyq2tYrSg6%2BR1yXihmUIfojteelCHu%2FNmd6A9MY3Y5ABIuujhN%2BOG0hSs0gaqO3NRP7OkDGHdx07QB2b5vLVUVhWZOA7pX54wJsxFe4stm3vOtiqWDPWtWiOZg7RLCAPm9dBHV%2FA%2Be5mlfiCFl1fcw7fPExAY6pgEyWgDQxy%2Bh41YnfVKREIPTpil%2Fz8DiusyUv%2FPoxj0%2FVKqWTw4T%2F0JjQwyd2Mbrp95W2jQMjTzpPlYfdegi%2BENL4OzmyNEyBzll5O%2BUSfxnVMkxkzIObhca5GMfqmfunVysOhk9DB0NJgwSBX1zpuAJxgpx6LZW76%2B3FkHnIoDQ0Scw%2BWJhtEBZ7Bx%2BGddRYLwKE1riyv8UF9G2OzP%2F9YR0JD8POKMl&X-Amz-Signature=aed8d6d4e4d0c595296b953d110ff61846ade63538ca3489a1195629c499929d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVGKDVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICjnlCahQJoh6lWqeiBp18fHnw146if5WJmncmPShWIyAiB%2BRLXEZJJX74dfezEjuWRpx0aXvv9lVCyc84HtQ1ECCyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMXcu6CL8TF0SkT3zcKtwDytOtPm8oIbsZvYDdcfkmXZj%2FAiIC%2B8Frjm2I3Wte9A6I4xnp0L4xLqa5llEVv3d63Z3m9jZ7xCl17%2FFamBV%2FCYeREAaXb9xWXmc50Z6Cmgf%2BMHf2bVB9fN8L2xNfAFtZ5a7wADWc4tbG52nevEIzXnxgXKWJPxCwEs4ydcuJkbSNth0OGtu0h6nDH50axzuRGask7cDQ8LIoMIBYV66DUFcyQa667a7YVO%2FFhrTnMOFH4cvM%2Bk5vT5V%2F6%2F1UeocrLQKIdhXeazH6aAcu4ysX88riqe3Z8efvLrioPPIk4kv2WVuaspgJ2j%2F93FD94JyFwVqHus%2BGo8ouQl8VweaP94D52OLTAFaC5HdRFRZuYAaGtSZkAlEfLlI7%2BNs%2FFnGLtihQnJbbeBQqsmeSGPDiibd9f7%2BNWQmuzoYTcafNlh3f%2BzP1MlH8jT007F90jlMwOAykBhHGBaIqHmXabbpqzJ96dLAQ5SEURftJCETyq2tYrSg6%2BR1yXihmUIfojteelCHu%2FNmd6A9MY3Y5ABIuujhN%2BOG0hSs0gaqO3NRP7OkDGHdx07QB2b5vLVUVhWZOA7pX54wJsxFe4stm3vOtiqWDPWtWiOZg7RLCAPm9dBHV%2FA%2Be5mlfiCFl1fcw7fPExAY6pgEyWgDQxy%2Bh41YnfVKREIPTpil%2Fz8DiusyUv%2FPoxj0%2FVKqWTw4T%2F0JjQwyd2Mbrp95W2jQMjTzpPlYfdegi%2BENL4OzmyNEyBzll5O%2BUSfxnVMkxkzIObhca5GMfqmfunVysOhk9DB0NJgwSBX1zpuAJxgpx6LZW76%2B3FkHnIoDQ0Scw%2BWJhtEBZ7Bx%2BGddRYLwKE1riyv8UF9G2OzP%2F9YR0JD8POKMl&X-Amz-Signature=a85e63411bc9b9ce66371160758a3fc42917be0d91f5b5c47988a8ea9f3491e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVGKDVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICjnlCahQJoh6lWqeiBp18fHnw146if5WJmncmPShWIyAiB%2BRLXEZJJX74dfezEjuWRpx0aXvv9lVCyc84HtQ1ECCyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMXcu6CL8TF0SkT3zcKtwDytOtPm8oIbsZvYDdcfkmXZj%2FAiIC%2B8Frjm2I3Wte9A6I4xnp0L4xLqa5llEVv3d63Z3m9jZ7xCl17%2FFamBV%2FCYeREAaXb9xWXmc50Z6Cmgf%2BMHf2bVB9fN8L2xNfAFtZ5a7wADWc4tbG52nevEIzXnxgXKWJPxCwEs4ydcuJkbSNth0OGtu0h6nDH50axzuRGask7cDQ8LIoMIBYV66DUFcyQa667a7YVO%2FFhrTnMOFH4cvM%2Bk5vT5V%2F6%2F1UeocrLQKIdhXeazH6aAcu4ysX88riqe3Z8efvLrioPPIk4kv2WVuaspgJ2j%2F93FD94JyFwVqHus%2BGo8ouQl8VweaP94D52OLTAFaC5HdRFRZuYAaGtSZkAlEfLlI7%2BNs%2FFnGLtihQnJbbeBQqsmeSGPDiibd9f7%2BNWQmuzoYTcafNlh3f%2BzP1MlH8jT007F90jlMwOAykBhHGBaIqHmXabbpqzJ96dLAQ5SEURftJCETyq2tYrSg6%2BR1yXihmUIfojteelCHu%2FNmd6A9MY3Y5ABIuujhN%2BOG0hSs0gaqO3NRP7OkDGHdx07QB2b5vLVUVhWZOA7pX54wJsxFe4stm3vOtiqWDPWtWiOZg7RLCAPm9dBHV%2FA%2Be5mlfiCFl1fcw7fPExAY6pgEyWgDQxy%2Bh41YnfVKREIPTpil%2Fz8DiusyUv%2FPoxj0%2FVKqWTw4T%2F0JjQwyd2Mbrp95W2jQMjTzpPlYfdegi%2BENL4OzmyNEyBzll5O%2BUSfxnVMkxkzIObhca5GMfqmfunVysOhk9DB0NJgwSBX1zpuAJxgpx6LZW76%2B3FkHnIoDQ0Scw%2BWJhtEBZ7Bx%2BGddRYLwKE1riyv8UF9G2OzP%2F9YR0JD8POKMl&X-Amz-Signature=705a1c28ff8e075784038cefe8a95a32062061eae97852532f01037b05e8fb13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVGKDVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICjnlCahQJoh6lWqeiBp18fHnw146if5WJmncmPShWIyAiB%2BRLXEZJJX74dfezEjuWRpx0aXvv9lVCyc84HtQ1ECCyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMXcu6CL8TF0SkT3zcKtwDytOtPm8oIbsZvYDdcfkmXZj%2FAiIC%2B8Frjm2I3Wte9A6I4xnp0L4xLqa5llEVv3d63Z3m9jZ7xCl17%2FFamBV%2FCYeREAaXb9xWXmc50Z6Cmgf%2BMHf2bVB9fN8L2xNfAFtZ5a7wADWc4tbG52nevEIzXnxgXKWJPxCwEs4ydcuJkbSNth0OGtu0h6nDH50axzuRGask7cDQ8LIoMIBYV66DUFcyQa667a7YVO%2FFhrTnMOFH4cvM%2Bk5vT5V%2F6%2F1UeocrLQKIdhXeazH6aAcu4ysX88riqe3Z8efvLrioPPIk4kv2WVuaspgJ2j%2F93FD94JyFwVqHus%2BGo8ouQl8VweaP94D52OLTAFaC5HdRFRZuYAaGtSZkAlEfLlI7%2BNs%2FFnGLtihQnJbbeBQqsmeSGPDiibd9f7%2BNWQmuzoYTcafNlh3f%2BzP1MlH8jT007F90jlMwOAykBhHGBaIqHmXabbpqzJ96dLAQ5SEURftJCETyq2tYrSg6%2BR1yXihmUIfojteelCHu%2FNmd6A9MY3Y5ABIuujhN%2BOG0hSs0gaqO3NRP7OkDGHdx07QB2b5vLVUVhWZOA7pX54wJsxFe4stm3vOtiqWDPWtWiOZg7RLCAPm9dBHV%2FA%2Be5mlfiCFl1fcw7fPExAY6pgEyWgDQxy%2Bh41YnfVKREIPTpil%2Fz8DiusyUv%2FPoxj0%2FVKqWTw4T%2F0JjQwyd2Mbrp95W2jQMjTzpPlYfdegi%2BENL4OzmyNEyBzll5O%2BUSfxnVMkxkzIObhca5GMfqmfunVysOhk9DB0NJgwSBX1zpuAJxgpx6LZW76%2B3FkHnIoDQ0Scw%2BWJhtEBZ7Bx%2BGddRYLwKE1riyv8UF9G2OzP%2F9YR0JD8POKMl&X-Amz-Signature=2d84d9ad05e47149d3a153d90dfdd905d2afca70e3a2e07b82699177634b6c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVGKDVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICjnlCahQJoh6lWqeiBp18fHnw146if5WJmncmPShWIyAiB%2BRLXEZJJX74dfezEjuWRpx0aXvv9lVCyc84HtQ1ECCyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMXcu6CL8TF0SkT3zcKtwDytOtPm8oIbsZvYDdcfkmXZj%2FAiIC%2B8Frjm2I3Wte9A6I4xnp0L4xLqa5llEVv3d63Z3m9jZ7xCl17%2FFamBV%2FCYeREAaXb9xWXmc50Z6Cmgf%2BMHf2bVB9fN8L2xNfAFtZ5a7wADWc4tbG52nevEIzXnxgXKWJPxCwEs4ydcuJkbSNth0OGtu0h6nDH50axzuRGask7cDQ8LIoMIBYV66DUFcyQa667a7YVO%2FFhrTnMOFH4cvM%2Bk5vT5V%2F6%2F1UeocrLQKIdhXeazH6aAcu4ysX88riqe3Z8efvLrioPPIk4kv2WVuaspgJ2j%2F93FD94JyFwVqHus%2BGo8ouQl8VweaP94D52OLTAFaC5HdRFRZuYAaGtSZkAlEfLlI7%2BNs%2FFnGLtihQnJbbeBQqsmeSGPDiibd9f7%2BNWQmuzoYTcafNlh3f%2BzP1MlH8jT007F90jlMwOAykBhHGBaIqHmXabbpqzJ96dLAQ5SEURftJCETyq2tYrSg6%2BR1yXihmUIfojteelCHu%2FNmd6A9MY3Y5ABIuujhN%2BOG0hSs0gaqO3NRP7OkDGHdx07QB2b5vLVUVhWZOA7pX54wJsxFe4stm3vOtiqWDPWtWiOZg7RLCAPm9dBHV%2FA%2Be5mlfiCFl1fcw7fPExAY6pgEyWgDQxy%2Bh41YnfVKREIPTpil%2Fz8DiusyUv%2FPoxj0%2FVKqWTw4T%2F0JjQwyd2Mbrp95W2jQMjTzpPlYfdegi%2BENL4OzmyNEyBzll5O%2BUSfxnVMkxkzIObhca5GMfqmfunVysOhk9DB0NJgwSBX1zpuAJxgpx6LZW76%2B3FkHnIoDQ0Scw%2BWJhtEBZ7Bx%2BGddRYLwKE1riyv8UF9G2OzP%2F9YR0JD8POKMl&X-Amz-Signature=bb6a943ecc15d02a3aa3c99b288b758a489112182d0a20359ac2e011018d99d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVGKDVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICjnlCahQJoh6lWqeiBp18fHnw146if5WJmncmPShWIyAiB%2BRLXEZJJX74dfezEjuWRpx0aXvv9lVCyc84HtQ1ECCyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMXcu6CL8TF0SkT3zcKtwDytOtPm8oIbsZvYDdcfkmXZj%2FAiIC%2B8Frjm2I3Wte9A6I4xnp0L4xLqa5llEVv3d63Z3m9jZ7xCl17%2FFamBV%2FCYeREAaXb9xWXmc50Z6Cmgf%2BMHf2bVB9fN8L2xNfAFtZ5a7wADWc4tbG52nevEIzXnxgXKWJPxCwEs4ydcuJkbSNth0OGtu0h6nDH50axzuRGask7cDQ8LIoMIBYV66DUFcyQa667a7YVO%2FFhrTnMOFH4cvM%2Bk5vT5V%2F6%2F1UeocrLQKIdhXeazH6aAcu4ysX88riqe3Z8efvLrioPPIk4kv2WVuaspgJ2j%2F93FD94JyFwVqHus%2BGo8ouQl8VweaP94D52OLTAFaC5HdRFRZuYAaGtSZkAlEfLlI7%2BNs%2FFnGLtihQnJbbeBQqsmeSGPDiibd9f7%2BNWQmuzoYTcafNlh3f%2BzP1MlH8jT007F90jlMwOAykBhHGBaIqHmXabbpqzJ96dLAQ5SEURftJCETyq2tYrSg6%2BR1yXihmUIfojteelCHu%2FNmd6A9MY3Y5ABIuujhN%2BOG0hSs0gaqO3NRP7OkDGHdx07QB2b5vLVUVhWZOA7pX54wJsxFe4stm3vOtiqWDPWtWiOZg7RLCAPm9dBHV%2FA%2Be5mlfiCFl1fcw7fPExAY6pgEyWgDQxy%2Bh41YnfVKREIPTpil%2Fz8DiusyUv%2FPoxj0%2FVKqWTw4T%2F0JjQwyd2Mbrp95W2jQMjTzpPlYfdegi%2BENL4OzmyNEyBzll5O%2BUSfxnVMkxkzIObhca5GMfqmfunVysOhk9DB0NJgwSBX1zpuAJxgpx6LZW76%2B3FkHnIoDQ0Scw%2BWJhtEBZ7Bx%2BGddRYLwKE1riyv8UF9G2OzP%2F9YR0JD8POKMl&X-Amz-Signature=3fd530b565a018388624c460f394c5452debcbdfdbe7cbd4aec5b6c96d1feff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVGKDVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICjnlCahQJoh6lWqeiBp18fHnw146if5WJmncmPShWIyAiB%2BRLXEZJJX74dfezEjuWRpx0aXvv9lVCyc84HtQ1ECCyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMXcu6CL8TF0SkT3zcKtwDytOtPm8oIbsZvYDdcfkmXZj%2FAiIC%2B8Frjm2I3Wte9A6I4xnp0L4xLqa5llEVv3d63Z3m9jZ7xCl17%2FFamBV%2FCYeREAaXb9xWXmc50Z6Cmgf%2BMHf2bVB9fN8L2xNfAFtZ5a7wADWc4tbG52nevEIzXnxgXKWJPxCwEs4ydcuJkbSNth0OGtu0h6nDH50axzuRGask7cDQ8LIoMIBYV66DUFcyQa667a7YVO%2FFhrTnMOFH4cvM%2Bk5vT5V%2F6%2F1UeocrLQKIdhXeazH6aAcu4ysX88riqe3Z8efvLrioPPIk4kv2WVuaspgJ2j%2F93FD94JyFwVqHus%2BGo8ouQl8VweaP94D52OLTAFaC5HdRFRZuYAaGtSZkAlEfLlI7%2BNs%2FFnGLtihQnJbbeBQqsmeSGPDiibd9f7%2BNWQmuzoYTcafNlh3f%2BzP1MlH8jT007F90jlMwOAykBhHGBaIqHmXabbpqzJ96dLAQ5SEURftJCETyq2tYrSg6%2BR1yXihmUIfojteelCHu%2FNmd6A9MY3Y5ABIuujhN%2BOG0hSs0gaqO3NRP7OkDGHdx07QB2b5vLVUVhWZOA7pX54wJsxFe4stm3vOtiqWDPWtWiOZg7RLCAPm9dBHV%2FA%2Be5mlfiCFl1fcw7fPExAY6pgEyWgDQxy%2Bh41YnfVKREIPTpil%2Fz8DiusyUv%2FPoxj0%2FVKqWTw4T%2F0JjQwyd2Mbrp95W2jQMjTzpPlYfdegi%2BENL4OzmyNEyBzll5O%2BUSfxnVMkxkzIObhca5GMfqmfunVysOhk9DB0NJgwSBX1zpuAJxgpx6LZW76%2B3FkHnIoDQ0Scw%2BWJhtEBZ7Bx%2BGddRYLwKE1riyv8UF9G2OzP%2F9YR0JD8POKMl&X-Amz-Signature=0dda1d74a77173fa438eeccb4716ef5e82b67f4a1aa2303882d879f443447f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVGKDVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICjnlCahQJoh6lWqeiBp18fHnw146if5WJmncmPShWIyAiB%2BRLXEZJJX74dfezEjuWRpx0aXvv9lVCyc84HtQ1ECCyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMXcu6CL8TF0SkT3zcKtwDytOtPm8oIbsZvYDdcfkmXZj%2FAiIC%2B8Frjm2I3Wte9A6I4xnp0L4xLqa5llEVv3d63Z3m9jZ7xCl17%2FFamBV%2FCYeREAaXb9xWXmc50Z6Cmgf%2BMHf2bVB9fN8L2xNfAFtZ5a7wADWc4tbG52nevEIzXnxgXKWJPxCwEs4ydcuJkbSNth0OGtu0h6nDH50axzuRGask7cDQ8LIoMIBYV66DUFcyQa667a7YVO%2FFhrTnMOFH4cvM%2Bk5vT5V%2F6%2F1UeocrLQKIdhXeazH6aAcu4ysX88riqe3Z8efvLrioPPIk4kv2WVuaspgJ2j%2F93FD94JyFwVqHus%2BGo8ouQl8VweaP94D52OLTAFaC5HdRFRZuYAaGtSZkAlEfLlI7%2BNs%2FFnGLtihQnJbbeBQqsmeSGPDiibd9f7%2BNWQmuzoYTcafNlh3f%2BzP1MlH8jT007F90jlMwOAykBhHGBaIqHmXabbpqzJ96dLAQ5SEURftJCETyq2tYrSg6%2BR1yXihmUIfojteelCHu%2FNmd6A9MY3Y5ABIuujhN%2BOG0hSs0gaqO3NRP7OkDGHdx07QB2b5vLVUVhWZOA7pX54wJsxFe4stm3vOtiqWDPWtWiOZg7RLCAPm9dBHV%2FA%2Be5mlfiCFl1fcw7fPExAY6pgEyWgDQxy%2Bh41YnfVKREIPTpil%2Fz8DiusyUv%2FPoxj0%2FVKqWTw4T%2F0JjQwyd2Mbrp95W2jQMjTzpPlYfdegi%2BENL4OzmyNEyBzll5O%2BUSfxnVMkxkzIObhca5GMfqmfunVysOhk9DB0NJgwSBX1zpuAJxgpx6LZW76%2B3FkHnIoDQ0Scw%2BWJhtEBZ7Bx%2BGddRYLwKE1riyv8UF9G2OzP%2F9YR0JD8POKMl&X-Amz-Signature=efba820aef1eb8a4d103ff98477eef5c5a55f0360d16041c359ba73da4615a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVGKDVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICjnlCahQJoh6lWqeiBp18fHnw146if5WJmncmPShWIyAiB%2BRLXEZJJX74dfezEjuWRpx0aXvv9lVCyc84HtQ1ECCyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMXcu6CL8TF0SkT3zcKtwDytOtPm8oIbsZvYDdcfkmXZj%2FAiIC%2B8Frjm2I3Wte9A6I4xnp0L4xLqa5llEVv3d63Z3m9jZ7xCl17%2FFamBV%2FCYeREAaXb9xWXmc50Z6Cmgf%2BMHf2bVB9fN8L2xNfAFtZ5a7wADWc4tbG52nevEIzXnxgXKWJPxCwEs4ydcuJkbSNth0OGtu0h6nDH50axzuRGask7cDQ8LIoMIBYV66DUFcyQa667a7YVO%2FFhrTnMOFH4cvM%2Bk5vT5V%2F6%2F1UeocrLQKIdhXeazH6aAcu4ysX88riqe3Z8efvLrioPPIk4kv2WVuaspgJ2j%2F93FD94JyFwVqHus%2BGo8ouQl8VweaP94D52OLTAFaC5HdRFRZuYAaGtSZkAlEfLlI7%2BNs%2FFnGLtihQnJbbeBQqsmeSGPDiibd9f7%2BNWQmuzoYTcafNlh3f%2BzP1MlH8jT007F90jlMwOAykBhHGBaIqHmXabbpqzJ96dLAQ5SEURftJCETyq2tYrSg6%2BR1yXihmUIfojteelCHu%2FNmd6A9MY3Y5ABIuujhN%2BOG0hSs0gaqO3NRP7OkDGHdx07QB2b5vLVUVhWZOA7pX54wJsxFe4stm3vOtiqWDPWtWiOZg7RLCAPm9dBHV%2FA%2Be5mlfiCFl1fcw7fPExAY6pgEyWgDQxy%2Bh41YnfVKREIPTpil%2Fz8DiusyUv%2FPoxj0%2FVKqWTw4T%2F0JjQwyd2Mbrp95W2jQMjTzpPlYfdegi%2BENL4OzmyNEyBzll5O%2BUSfxnVMkxkzIObhca5GMfqmfunVysOhk9DB0NJgwSBX1zpuAJxgpx6LZW76%2B3FkHnIoDQ0Scw%2BWJhtEBZ7Bx%2BGddRYLwKE1riyv8UF9G2OzP%2F9YR0JD8POKMl&X-Amz-Signature=bd92b6aeef3b28f7447ae84aeace39feb992a2b018b08fbe546e55d7397c25be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVGKDVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICjnlCahQJoh6lWqeiBp18fHnw146if5WJmncmPShWIyAiB%2BRLXEZJJX74dfezEjuWRpx0aXvv9lVCyc84HtQ1ECCyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMXcu6CL8TF0SkT3zcKtwDytOtPm8oIbsZvYDdcfkmXZj%2FAiIC%2B8Frjm2I3Wte9A6I4xnp0L4xLqa5llEVv3d63Z3m9jZ7xCl17%2FFamBV%2FCYeREAaXb9xWXmc50Z6Cmgf%2BMHf2bVB9fN8L2xNfAFtZ5a7wADWc4tbG52nevEIzXnxgXKWJPxCwEs4ydcuJkbSNth0OGtu0h6nDH50axzuRGask7cDQ8LIoMIBYV66DUFcyQa667a7YVO%2FFhrTnMOFH4cvM%2Bk5vT5V%2F6%2F1UeocrLQKIdhXeazH6aAcu4ysX88riqe3Z8efvLrioPPIk4kv2WVuaspgJ2j%2F93FD94JyFwVqHus%2BGo8ouQl8VweaP94D52OLTAFaC5HdRFRZuYAaGtSZkAlEfLlI7%2BNs%2FFnGLtihQnJbbeBQqsmeSGPDiibd9f7%2BNWQmuzoYTcafNlh3f%2BzP1MlH8jT007F90jlMwOAykBhHGBaIqHmXabbpqzJ96dLAQ5SEURftJCETyq2tYrSg6%2BR1yXihmUIfojteelCHu%2FNmd6A9MY3Y5ABIuujhN%2BOG0hSs0gaqO3NRP7OkDGHdx07QB2b5vLVUVhWZOA7pX54wJsxFe4stm3vOtiqWDPWtWiOZg7RLCAPm9dBHV%2FA%2Be5mlfiCFl1fcw7fPExAY6pgEyWgDQxy%2Bh41YnfVKREIPTpil%2Fz8DiusyUv%2FPoxj0%2FVKqWTw4T%2F0JjQwyd2Mbrp95W2jQMjTzpPlYfdegi%2BENL4OzmyNEyBzll5O%2BUSfxnVMkxkzIObhca5GMfqmfunVysOhk9DB0NJgwSBX1zpuAJxgpx6LZW76%2B3FkHnIoDQ0Scw%2BWJhtEBZ7Bx%2BGddRYLwKE1riyv8UF9G2OzP%2F9YR0JD8POKMl&X-Amz-Signature=b13d6ecb7b852efa7b0a09f039bdf3914c865b039b05b25fba64a7cadd66bb05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVGKDVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICjnlCahQJoh6lWqeiBp18fHnw146if5WJmncmPShWIyAiB%2BRLXEZJJX74dfezEjuWRpx0aXvv9lVCyc84HtQ1ECCyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMXcu6CL8TF0SkT3zcKtwDytOtPm8oIbsZvYDdcfkmXZj%2FAiIC%2B8Frjm2I3Wte9A6I4xnp0L4xLqa5llEVv3d63Z3m9jZ7xCl17%2FFamBV%2FCYeREAaXb9xWXmc50Z6Cmgf%2BMHf2bVB9fN8L2xNfAFtZ5a7wADWc4tbG52nevEIzXnxgXKWJPxCwEs4ydcuJkbSNth0OGtu0h6nDH50axzuRGask7cDQ8LIoMIBYV66DUFcyQa667a7YVO%2FFhrTnMOFH4cvM%2Bk5vT5V%2F6%2F1UeocrLQKIdhXeazH6aAcu4ysX88riqe3Z8efvLrioPPIk4kv2WVuaspgJ2j%2F93FD94JyFwVqHus%2BGo8ouQl8VweaP94D52OLTAFaC5HdRFRZuYAaGtSZkAlEfLlI7%2BNs%2FFnGLtihQnJbbeBQqsmeSGPDiibd9f7%2BNWQmuzoYTcafNlh3f%2BzP1MlH8jT007F90jlMwOAykBhHGBaIqHmXabbpqzJ96dLAQ5SEURftJCETyq2tYrSg6%2BR1yXihmUIfojteelCHu%2FNmd6A9MY3Y5ABIuujhN%2BOG0hSs0gaqO3NRP7OkDGHdx07QB2b5vLVUVhWZOA7pX54wJsxFe4stm3vOtiqWDPWtWiOZg7RLCAPm9dBHV%2FA%2Be5mlfiCFl1fcw7fPExAY6pgEyWgDQxy%2Bh41YnfVKREIPTpil%2Fz8DiusyUv%2FPoxj0%2FVKqWTw4T%2F0JjQwyd2Mbrp95W2jQMjTzpPlYfdegi%2BENL4OzmyNEyBzll5O%2BUSfxnVMkxkzIObhca5GMfqmfunVysOhk9DB0NJgwSBX1zpuAJxgpx6LZW76%2B3FkHnIoDQ0Scw%2BWJhtEBZ7Bx%2BGddRYLwKE1riyv8UF9G2OzP%2F9YR0JD8POKMl&X-Amz-Signature=bde653203d744121e0fac78503f6e3334aa7b4352ca4a781319d350477bb2469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVGKDVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICjnlCahQJoh6lWqeiBp18fHnw146if5WJmncmPShWIyAiB%2BRLXEZJJX74dfezEjuWRpx0aXvv9lVCyc84HtQ1ECCyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMXcu6CL8TF0SkT3zcKtwDytOtPm8oIbsZvYDdcfkmXZj%2FAiIC%2B8Frjm2I3Wte9A6I4xnp0L4xLqa5llEVv3d63Z3m9jZ7xCl17%2FFamBV%2FCYeREAaXb9xWXmc50Z6Cmgf%2BMHf2bVB9fN8L2xNfAFtZ5a7wADWc4tbG52nevEIzXnxgXKWJPxCwEs4ydcuJkbSNth0OGtu0h6nDH50axzuRGask7cDQ8LIoMIBYV66DUFcyQa667a7YVO%2FFhrTnMOFH4cvM%2Bk5vT5V%2F6%2F1UeocrLQKIdhXeazH6aAcu4ysX88riqe3Z8efvLrioPPIk4kv2WVuaspgJ2j%2F93FD94JyFwVqHus%2BGo8ouQl8VweaP94D52OLTAFaC5HdRFRZuYAaGtSZkAlEfLlI7%2BNs%2FFnGLtihQnJbbeBQqsmeSGPDiibd9f7%2BNWQmuzoYTcafNlh3f%2BzP1MlH8jT007F90jlMwOAykBhHGBaIqHmXabbpqzJ96dLAQ5SEURftJCETyq2tYrSg6%2BR1yXihmUIfojteelCHu%2FNmd6A9MY3Y5ABIuujhN%2BOG0hSs0gaqO3NRP7OkDGHdx07QB2b5vLVUVhWZOA7pX54wJsxFe4stm3vOtiqWDPWtWiOZg7RLCAPm9dBHV%2FA%2Be5mlfiCFl1fcw7fPExAY6pgEyWgDQxy%2Bh41YnfVKREIPTpil%2Fz8DiusyUv%2FPoxj0%2FVKqWTw4T%2F0JjQwyd2Mbrp95W2jQMjTzpPlYfdegi%2BENL4OzmyNEyBzll5O%2BUSfxnVMkxkzIObhca5GMfqmfunVysOhk9DB0NJgwSBX1zpuAJxgpx6LZW76%2B3FkHnIoDQ0Scw%2BWJhtEBZ7Bx%2BGddRYLwKE1riyv8UF9G2OzP%2F9YR0JD8POKMl&X-Amz-Signature=e1f0d316ba068c833e3bd4a0c9049425b26f395e140ddcd759da304f48c7b25d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YVGKDVW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICjnlCahQJoh6lWqeiBp18fHnw146if5WJmncmPShWIyAiB%2BRLXEZJJX74dfezEjuWRpx0aXvv9lVCyc84HtQ1ECCyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMXcu6CL8TF0SkT3zcKtwDytOtPm8oIbsZvYDdcfkmXZj%2FAiIC%2B8Frjm2I3Wte9A6I4xnp0L4xLqa5llEVv3d63Z3m9jZ7xCl17%2FFamBV%2FCYeREAaXb9xWXmc50Z6Cmgf%2BMHf2bVB9fN8L2xNfAFtZ5a7wADWc4tbG52nevEIzXnxgXKWJPxCwEs4ydcuJkbSNth0OGtu0h6nDH50axzuRGask7cDQ8LIoMIBYV66DUFcyQa667a7YVO%2FFhrTnMOFH4cvM%2Bk5vT5V%2F6%2F1UeocrLQKIdhXeazH6aAcu4ysX88riqe3Z8efvLrioPPIk4kv2WVuaspgJ2j%2F93FD94JyFwVqHus%2BGo8ouQl8VweaP94D52OLTAFaC5HdRFRZuYAaGtSZkAlEfLlI7%2BNs%2FFnGLtihQnJbbeBQqsmeSGPDiibd9f7%2BNWQmuzoYTcafNlh3f%2BzP1MlH8jT007F90jlMwOAykBhHGBaIqHmXabbpqzJ96dLAQ5SEURftJCETyq2tYrSg6%2BR1yXihmUIfojteelCHu%2FNmd6A9MY3Y5ABIuujhN%2BOG0hSs0gaqO3NRP7OkDGHdx07QB2b5vLVUVhWZOA7pX54wJsxFe4stm3vOtiqWDPWtWiOZg7RLCAPm9dBHV%2FA%2Be5mlfiCFl1fcw7fPExAY6pgEyWgDQxy%2Bh41YnfVKREIPTpil%2Fz8DiusyUv%2FPoxj0%2FVKqWTw4T%2F0JjQwyd2Mbrp95W2jQMjTzpPlYfdegi%2BENL4OzmyNEyBzll5O%2BUSfxnVMkxkzIObhca5GMfqmfunVysOhk9DB0NJgwSBX1zpuAJxgpx6LZW76%2B3FkHnIoDQ0Scw%2BWJhtEBZ7Bx%2BGddRYLwKE1riyv8UF9G2OzP%2F9YR0JD8POKMl&X-Amz-Signature=2a91d6a15c70a7f10a3890b74213eb69379739b8471a59c970679a0763a94614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
