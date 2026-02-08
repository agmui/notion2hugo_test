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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXPERIL%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQOWRo0fhkQcxoBo4IiuwTxcwp2Fp9RSWXSCcAjIxKAQIhAMGqQNA7mykNZPEOA3mwHhfG9po2qRoJ5sHlSviyZN%2BmKv8DCGwQABoMNjM3NDIzMTgzODA1Igyea9QtPXZodJTy5mQq3AOX5S4N2AJzjshqNk0kQEqVKK7RpyIqjMs1ikI%2B9CPtWYA14fNjXrnAM%2Brw%2FLmlTxy0n7wi4KfcxJ8VesSqFJUEwTZDbB4c6KEoMYOJIh9YIkygi7dohA2OzgSmuRWjNnkmZc47ScFI5HxzoCIBD2Mfe3nFMN6LPMJwAppsr7noezHPf7kVXbXk%2Fbcb%2Bs4o8S85hO4C8MwThAhG1eJoRDUqkVeKX9TjR3PF2%2FLcSRvYWddUUrv0KJotkxSNB3tYoRhMfE2fkEbCkF%2Bjchov1qkB8vxRD9X2t%2BXKkY%2BkAOdcT6tkEFzUDrkcnVqL54gkJsRO3dQDtwJSf9BVLijozuUoL7QVn7oLJqxcuqCykpB%2F%2FfYSSlsyG7LC2gt722pT0NmXvucecQYL0mIL7opFMh%2FZNq79KZL7%2F5g5PBAGdrbyroFadMzEASmEmk4Y41pfCB5HxrxGaa4SkoUmO2fxgFyTb%2F10mMEYyRhRhQ8DeRaddyAf%2FFpBEFiOkKP73j5jd5A3fizV%2Bw91JIXQR%2F2b%2F3ryiqHZiwPknkNqX5gKSJGi40gq7jxlZ8SiyMI86M8Clq8XkrIFpeQKa5BDrcVi54hCEZwyQtrZVnnVUoWO5K3QRn9HRwjahPLua%2BIR4TC06p%2FMBjqkAfMrknsugk641KNsgUg%2Bal9NaEoLmbJCnAK3%2FO7Nou0%2F2hx0vNeGtR9aJWTsHXevYRcWPqIzvF75DuQRnJYRmaEoZ3X3vIzl493F69iISrAZ1u7M9BMhdrUGoUU%2Fvgfa3wNr%2BaoIB6WfPkvbsw6%2BQEDRnOu61w4z2vqVLnYIZnB9TpQvTcCkkx9BLW0GW%2BzJRmcNN2tw0FO8B3rWoSNpBFNFucNk&X-Amz-Signature=385da3440148e493917fa0a2c0d9fa96ce471008fb07a435d9011cb8ddc8c67c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXPERIL%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQOWRo0fhkQcxoBo4IiuwTxcwp2Fp9RSWXSCcAjIxKAQIhAMGqQNA7mykNZPEOA3mwHhfG9po2qRoJ5sHlSviyZN%2BmKv8DCGwQABoMNjM3NDIzMTgzODA1Igyea9QtPXZodJTy5mQq3AOX5S4N2AJzjshqNk0kQEqVKK7RpyIqjMs1ikI%2B9CPtWYA14fNjXrnAM%2Brw%2FLmlTxy0n7wi4KfcxJ8VesSqFJUEwTZDbB4c6KEoMYOJIh9YIkygi7dohA2OzgSmuRWjNnkmZc47ScFI5HxzoCIBD2Mfe3nFMN6LPMJwAppsr7noezHPf7kVXbXk%2Fbcb%2Bs4o8S85hO4C8MwThAhG1eJoRDUqkVeKX9TjR3PF2%2FLcSRvYWddUUrv0KJotkxSNB3tYoRhMfE2fkEbCkF%2Bjchov1qkB8vxRD9X2t%2BXKkY%2BkAOdcT6tkEFzUDrkcnVqL54gkJsRO3dQDtwJSf9BVLijozuUoL7QVn7oLJqxcuqCykpB%2F%2FfYSSlsyG7LC2gt722pT0NmXvucecQYL0mIL7opFMh%2FZNq79KZL7%2F5g5PBAGdrbyroFadMzEASmEmk4Y41pfCB5HxrxGaa4SkoUmO2fxgFyTb%2F10mMEYyRhRhQ8DeRaddyAf%2FFpBEFiOkKP73j5jd5A3fizV%2Bw91JIXQR%2F2b%2F3ryiqHZiwPknkNqX5gKSJGi40gq7jxlZ8SiyMI86M8Clq8XkrIFpeQKa5BDrcVi54hCEZwyQtrZVnnVUoWO5K3QRn9HRwjahPLua%2BIR4TC06p%2FMBjqkAfMrknsugk641KNsgUg%2Bal9NaEoLmbJCnAK3%2FO7Nou0%2F2hx0vNeGtR9aJWTsHXevYRcWPqIzvF75DuQRnJYRmaEoZ3X3vIzl493F69iISrAZ1u7M9BMhdrUGoUU%2Fvgfa3wNr%2BaoIB6WfPkvbsw6%2BQEDRnOu61w4z2vqVLnYIZnB9TpQvTcCkkx9BLW0GW%2BzJRmcNN2tw0FO8B3rWoSNpBFNFucNk&X-Amz-Signature=6d15a3b4d9a9ba9751f39ba532e457399630c3a4cf617356c7d69ea3e42d8a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXPERIL%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQOWRo0fhkQcxoBo4IiuwTxcwp2Fp9RSWXSCcAjIxKAQIhAMGqQNA7mykNZPEOA3mwHhfG9po2qRoJ5sHlSviyZN%2BmKv8DCGwQABoMNjM3NDIzMTgzODA1Igyea9QtPXZodJTy5mQq3AOX5S4N2AJzjshqNk0kQEqVKK7RpyIqjMs1ikI%2B9CPtWYA14fNjXrnAM%2Brw%2FLmlTxy0n7wi4KfcxJ8VesSqFJUEwTZDbB4c6KEoMYOJIh9YIkygi7dohA2OzgSmuRWjNnkmZc47ScFI5HxzoCIBD2Mfe3nFMN6LPMJwAppsr7noezHPf7kVXbXk%2Fbcb%2Bs4o8S85hO4C8MwThAhG1eJoRDUqkVeKX9TjR3PF2%2FLcSRvYWddUUrv0KJotkxSNB3tYoRhMfE2fkEbCkF%2Bjchov1qkB8vxRD9X2t%2BXKkY%2BkAOdcT6tkEFzUDrkcnVqL54gkJsRO3dQDtwJSf9BVLijozuUoL7QVn7oLJqxcuqCykpB%2F%2FfYSSlsyG7LC2gt722pT0NmXvucecQYL0mIL7opFMh%2FZNq79KZL7%2F5g5PBAGdrbyroFadMzEASmEmk4Y41pfCB5HxrxGaa4SkoUmO2fxgFyTb%2F10mMEYyRhRhQ8DeRaddyAf%2FFpBEFiOkKP73j5jd5A3fizV%2Bw91JIXQR%2F2b%2F3ryiqHZiwPknkNqX5gKSJGi40gq7jxlZ8SiyMI86M8Clq8XkrIFpeQKa5BDrcVi54hCEZwyQtrZVnnVUoWO5K3QRn9HRwjahPLua%2BIR4TC06p%2FMBjqkAfMrknsugk641KNsgUg%2Bal9NaEoLmbJCnAK3%2FO7Nou0%2F2hx0vNeGtR9aJWTsHXevYRcWPqIzvF75DuQRnJYRmaEoZ3X3vIzl493F69iISrAZ1u7M9BMhdrUGoUU%2Fvgfa3wNr%2BaoIB6WfPkvbsw6%2BQEDRnOu61w4z2vqVLnYIZnB9TpQvTcCkkx9BLW0GW%2BzJRmcNN2tw0FO8B3rWoSNpBFNFucNk&X-Amz-Signature=21419b1990e35e2e392c653ec1ea7c656f7a25c43cafa23bab2b8d70a8f358e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXPERIL%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQOWRo0fhkQcxoBo4IiuwTxcwp2Fp9RSWXSCcAjIxKAQIhAMGqQNA7mykNZPEOA3mwHhfG9po2qRoJ5sHlSviyZN%2BmKv8DCGwQABoMNjM3NDIzMTgzODA1Igyea9QtPXZodJTy5mQq3AOX5S4N2AJzjshqNk0kQEqVKK7RpyIqjMs1ikI%2B9CPtWYA14fNjXrnAM%2Brw%2FLmlTxy0n7wi4KfcxJ8VesSqFJUEwTZDbB4c6KEoMYOJIh9YIkygi7dohA2OzgSmuRWjNnkmZc47ScFI5HxzoCIBD2Mfe3nFMN6LPMJwAppsr7noezHPf7kVXbXk%2Fbcb%2Bs4o8S85hO4C8MwThAhG1eJoRDUqkVeKX9TjR3PF2%2FLcSRvYWddUUrv0KJotkxSNB3tYoRhMfE2fkEbCkF%2Bjchov1qkB8vxRD9X2t%2BXKkY%2BkAOdcT6tkEFzUDrkcnVqL54gkJsRO3dQDtwJSf9BVLijozuUoL7QVn7oLJqxcuqCykpB%2F%2FfYSSlsyG7LC2gt722pT0NmXvucecQYL0mIL7opFMh%2FZNq79KZL7%2F5g5PBAGdrbyroFadMzEASmEmk4Y41pfCB5HxrxGaa4SkoUmO2fxgFyTb%2F10mMEYyRhRhQ8DeRaddyAf%2FFpBEFiOkKP73j5jd5A3fizV%2Bw91JIXQR%2F2b%2F3ryiqHZiwPknkNqX5gKSJGi40gq7jxlZ8SiyMI86M8Clq8XkrIFpeQKa5BDrcVi54hCEZwyQtrZVnnVUoWO5K3QRn9HRwjahPLua%2BIR4TC06p%2FMBjqkAfMrknsugk641KNsgUg%2Bal9NaEoLmbJCnAK3%2FO7Nou0%2F2hx0vNeGtR9aJWTsHXevYRcWPqIzvF75DuQRnJYRmaEoZ3X3vIzl493F69iISrAZ1u7M9BMhdrUGoUU%2Fvgfa3wNr%2BaoIB6WfPkvbsw6%2BQEDRnOu61w4z2vqVLnYIZnB9TpQvTcCkkx9BLW0GW%2BzJRmcNN2tw0FO8B3rWoSNpBFNFucNk&X-Amz-Signature=f57e5577fedf72456e06c3328383d629873f3ea0ee4fdea284e1de134cbcd6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXPERIL%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQOWRo0fhkQcxoBo4IiuwTxcwp2Fp9RSWXSCcAjIxKAQIhAMGqQNA7mykNZPEOA3mwHhfG9po2qRoJ5sHlSviyZN%2BmKv8DCGwQABoMNjM3NDIzMTgzODA1Igyea9QtPXZodJTy5mQq3AOX5S4N2AJzjshqNk0kQEqVKK7RpyIqjMs1ikI%2B9CPtWYA14fNjXrnAM%2Brw%2FLmlTxy0n7wi4KfcxJ8VesSqFJUEwTZDbB4c6KEoMYOJIh9YIkygi7dohA2OzgSmuRWjNnkmZc47ScFI5HxzoCIBD2Mfe3nFMN6LPMJwAppsr7noezHPf7kVXbXk%2Fbcb%2Bs4o8S85hO4C8MwThAhG1eJoRDUqkVeKX9TjR3PF2%2FLcSRvYWddUUrv0KJotkxSNB3tYoRhMfE2fkEbCkF%2Bjchov1qkB8vxRD9X2t%2BXKkY%2BkAOdcT6tkEFzUDrkcnVqL54gkJsRO3dQDtwJSf9BVLijozuUoL7QVn7oLJqxcuqCykpB%2F%2FfYSSlsyG7LC2gt722pT0NmXvucecQYL0mIL7opFMh%2FZNq79KZL7%2F5g5PBAGdrbyroFadMzEASmEmk4Y41pfCB5HxrxGaa4SkoUmO2fxgFyTb%2F10mMEYyRhRhQ8DeRaddyAf%2FFpBEFiOkKP73j5jd5A3fizV%2Bw91JIXQR%2F2b%2F3ryiqHZiwPknkNqX5gKSJGi40gq7jxlZ8SiyMI86M8Clq8XkrIFpeQKa5BDrcVi54hCEZwyQtrZVnnVUoWO5K3QRn9HRwjahPLua%2BIR4TC06p%2FMBjqkAfMrknsugk641KNsgUg%2Bal9NaEoLmbJCnAK3%2FO7Nou0%2F2hx0vNeGtR9aJWTsHXevYRcWPqIzvF75DuQRnJYRmaEoZ3X3vIzl493F69iISrAZ1u7M9BMhdrUGoUU%2Fvgfa3wNr%2BaoIB6WfPkvbsw6%2BQEDRnOu61w4z2vqVLnYIZnB9TpQvTcCkkx9BLW0GW%2BzJRmcNN2tw0FO8B3rWoSNpBFNFucNk&X-Amz-Signature=21869f023bccc189d52468d978a6fe33433eacea6de21562f6af529325b58af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXPERIL%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQOWRo0fhkQcxoBo4IiuwTxcwp2Fp9RSWXSCcAjIxKAQIhAMGqQNA7mykNZPEOA3mwHhfG9po2qRoJ5sHlSviyZN%2BmKv8DCGwQABoMNjM3NDIzMTgzODA1Igyea9QtPXZodJTy5mQq3AOX5S4N2AJzjshqNk0kQEqVKK7RpyIqjMs1ikI%2B9CPtWYA14fNjXrnAM%2Brw%2FLmlTxy0n7wi4KfcxJ8VesSqFJUEwTZDbB4c6KEoMYOJIh9YIkygi7dohA2OzgSmuRWjNnkmZc47ScFI5HxzoCIBD2Mfe3nFMN6LPMJwAppsr7noezHPf7kVXbXk%2Fbcb%2Bs4o8S85hO4C8MwThAhG1eJoRDUqkVeKX9TjR3PF2%2FLcSRvYWddUUrv0KJotkxSNB3tYoRhMfE2fkEbCkF%2Bjchov1qkB8vxRD9X2t%2BXKkY%2BkAOdcT6tkEFzUDrkcnVqL54gkJsRO3dQDtwJSf9BVLijozuUoL7QVn7oLJqxcuqCykpB%2F%2FfYSSlsyG7LC2gt722pT0NmXvucecQYL0mIL7opFMh%2FZNq79KZL7%2F5g5PBAGdrbyroFadMzEASmEmk4Y41pfCB5HxrxGaa4SkoUmO2fxgFyTb%2F10mMEYyRhRhQ8DeRaddyAf%2FFpBEFiOkKP73j5jd5A3fizV%2Bw91JIXQR%2F2b%2F3ryiqHZiwPknkNqX5gKSJGi40gq7jxlZ8SiyMI86M8Clq8XkrIFpeQKa5BDrcVi54hCEZwyQtrZVnnVUoWO5K3QRn9HRwjahPLua%2BIR4TC06p%2FMBjqkAfMrknsugk641KNsgUg%2Bal9NaEoLmbJCnAK3%2FO7Nou0%2F2hx0vNeGtR9aJWTsHXevYRcWPqIzvF75DuQRnJYRmaEoZ3X3vIzl493F69iISrAZ1u7M9BMhdrUGoUU%2Fvgfa3wNr%2BaoIB6WfPkvbsw6%2BQEDRnOu61w4z2vqVLnYIZnB9TpQvTcCkkx9BLW0GW%2BzJRmcNN2tw0FO8B3rWoSNpBFNFucNk&X-Amz-Signature=72f2b5c2ca62f027a6ab78c3eac325856044c30b4965d44a590024224c119eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXPERIL%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQOWRo0fhkQcxoBo4IiuwTxcwp2Fp9RSWXSCcAjIxKAQIhAMGqQNA7mykNZPEOA3mwHhfG9po2qRoJ5sHlSviyZN%2BmKv8DCGwQABoMNjM3NDIzMTgzODA1Igyea9QtPXZodJTy5mQq3AOX5S4N2AJzjshqNk0kQEqVKK7RpyIqjMs1ikI%2B9CPtWYA14fNjXrnAM%2Brw%2FLmlTxy0n7wi4KfcxJ8VesSqFJUEwTZDbB4c6KEoMYOJIh9YIkygi7dohA2OzgSmuRWjNnkmZc47ScFI5HxzoCIBD2Mfe3nFMN6LPMJwAppsr7noezHPf7kVXbXk%2Fbcb%2Bs4o8S85hO4C8MwThAhG1eJoRDUqkVeKX9TjR3PF2%2FLcSRvYWddUUrv0KJotkxSNB3tYoRhMfE2fkEbCkF%2Bjchov1qkB8vxRD9X2t%2BXKkY%2BkAOdcT6tkEFzUDrkcnVqL54gkJsRO3dQDtwJSf9BVLijozuUoL7QVn7oLJqxcuqCykpB%2F%2FfYSSlsyG7LC2gt722pT0NmXvucecQYL0mIL7opFMh%2FZNq79KZL7%2F5g5PBAGdrbyroFadMzEASmEmk4Y41pfCB5HxrxGaa4SkoUmO2fxgFyTb%2F10mMEYyRhRhQ8DeRaddyAf%2FFpBEFiOkKP73j5jd5A3fizV%2Bw91JIXQR%2F2b%2F3ryiqHZiwPknkNqX5gKSJGi40gq7jxlZ8SiyMI86M8Clq8XkrIFpeQKa5BDrcVi54hCEZwyQtrZVnnVUoWO5K3QRn9HRwjahPLua%2BIR4TC06p%2FMBjqkAfMrknsugk641KNsgUg%2Bal9NaEoLmbJCnAK3%2FO7Nou0%2F2hx0vNeGtR9aJWTsHXevYRcWPqIzvF75DuQRnJYRmaEoZ3X3vIzl493F69iISrAZ1u7M9BMhdrUGoUU%2Fvgfa3wNr%2BaoIB6WfPkvbsw6%2BQEDRnOu61w4z2vqVLnYIZnB9TpQvTcCkkx9BLW0GW%2BzJRmcNN2tw0FO8B3rWoSNpBFNFucNk&X-Amz-Signature=09552477fad78249c3a6e02cb871218e99761eb8b9c8373bb604acd20e6ed65b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXPERIL%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQOWRo0fhkQcxoBo4IiuwTxcwp2Fp9RSWXSCcAjIxKAQIhAMGqQNA7mykNZPEOA3mwHhfG9po2qRoJ5sHlSviyZN%2BmKv8DCGwQABoMNjM3NDIzMTgzODA1Igyea9QtPXZodJTy5mQq3AOX5S4N2AJzjshqNk0kQEqVKK7RpyIqjMs1ikI%2B9CPtWYA14fNjXrnAM%2Brw%2FLmlTxy0n7wi4KfcxJ8VesSqFJUEwTZDbB4c6KEoMYOJIh9YIkygi7dohA2OzgSmuRWjNnkmZc47ScFI5HxzoCIBD2Mfe3nFMN6LPMJwAppsr7noezHPf7kVXbXk%2Fbcb%2Bs4o8S85hO4C8MwThAhG1eJoRDUqkVeKX9TjR3PF2%2FLcSRvYWddUUrv0KJotkxSNB3tYoRhMfE2fkEbCkF%2Bjchov1qkB8vxRD9X2t%2BXKkY%2BkAOdcT6tkEFzUDrkcnVqL54gkJsRO3dQDtwJSf9BVLijozuUoL7QVn7oLJqxcuqCykpB%2F%2FfYSSlsyG7LC2gt722pT0NmXvucecQYL0mIL7opFMh%2FZNq79KZL7%2F5g5PBAGdrbyroFadMzEASmEmk4Y41pfCB5HxrxGaa4SkoUmO2fxgFyTb%2F10mMEYyRhRhQ8DeRaddyAf%2FFpBEFiOkKP73j5jd5A3fizV%2Bw91JIXQR%2F2b%2F3ryiqHZiwPknkNqX5gKSJGi40gq7jxlZ8SiyMI86M8Clq8XkrIFpeQKa5BDrcVi54hCEZwyQtrZVnnVUoWO5K3QRn9HRwjahPLua%2BIR4TC06p%2FMBjqkAfMrknsugk641KNsgUg%2Bal9NaEoLmbJCnAK3%2FO7Nou0%2F2hx0vNeGtR9aJWTsHXevYRcWPqIzvF75DuQRnJYRmaEoZ3X3vIzl493F69iISrAZ1u7M9BMhdrUGoUU%2Fvgfa3wNr%2BaoIB6WfPkvbsw6%2BQEDRnOu61w4z2vqVLnYIZnB9TpQvTcCkkx9BLW0GW%2BzJRmcNN2tw0FO8B3rWoSNpBFNFucNk&X-Amz-Signature=4c2dda390f658324949658d2885dc283c9443a82d69015b5e8fd13b63d2894a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXPERIL%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQOWRo0fhkQcxoBo4IiuwTxcwp2Fp9RSWXSCcAjIxKAQIhAMGqQNA7mykNZPEOA3mwHhfG9po2qRoJ5sHlSviyZN%2BmKv8DCGwQABoMNjM3NDIzMTgzODA1Igyea9QtPXZodJTy5mQq3AOX5S4N2AJzjshqNk0kQEqVKK7RpyIqjMs1ikI%2B9CPtWYA14fNjXrnAM%2Brw%2FLmlTxy0n7wi4KfcxJ8VesSqFJUEwTZDbB4c6KEoMYOJIh9YIkygi7dohA2OzgSmuRWjNnkmZc47ScFI5HxzoCIBD2Mfe3nFMN6LPMJwAppsr7noezHPf7kVXbXk%2Fbcb%2Bs4o8S85hO4C8MwThAhG1eJoRDUqkVeKX9TjR3PF2%2FLcSRvYWddUUrv0KJotkxSNB3tYoRhMfE2fkEbCkF%2Bjchov1qkB8vxRD9X2t%2BXKkY%2BkAOdcT6tkEFzUDrkcnVqL54gkJsRO3dQDtwJSf9BVLijozuUoL7QVn7oLJqxcuqCykpB%2F%2FfYSSlsyG7LC2gt722pT0NmXvucecQYL0mIL7opFMh%2FZNq79KZL7%2F5g5PBAGdrbyroFadMzEASmEmk4Y41pfCB5HxrxGaa4SkoUmO2fxgFyTb%2F10mMEYyRhRhQ8DeRaddyAf%2FFpBEFiOkKP73j5jd5A3fizV%2Bw91JIXQR%2F2b%2F3ryiqHZiwPknkNqX5gKSJGi40gq7jxlZ8SiyMI86M8Clq8XkrIFpeQKa5BDrcVi54hCEZwyQtrZVnnVUoWO5K3QRn9HRwjahPLua%2BIR4TC06p%2FMBjqkAfMrknsugk641KNsgUg%2Bal9NaEoLmbJCnAK3%2FO7Nou0%2F2hx0vNeGtR9aJWTsHXevYRcWPqIzvF75DuQRnJYRmaEoZ3X3vIzl493F69iISrAZ1u7M9BMhdrUGoUU%2Fvgfa3wNr%2BaoIB6WfPkvbsw6%2BQEDRnOu61w4z2vqVLnYIZnB9TpQvTcCkkx9BLW0GW%2BzJRmcNN2tw0FO8B3rWoSNpBFNFucNk&X-Amz-Signature=dd58d0938c0ab4bdaff153e0abddcaf6244ef0f0a91d379146eabfe8d91a5e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXPERIL%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQOWRo0fhkQcxoBo4IiuwTxcwp2Fp9RSWXSCcAjIxKAQIhAMGqQNA7mykNZPEOA3mwHhfG9po2qRoJ5sHlSviyZN%2BmKv8DCGwQABoMNjM3NDIzMTgzODA1Igyea9QtPXZodJTy5mQq3AOX5S4N2AJzjshqNk0kQEqVKK7RpyIqjMs1ikI%2B9CPtWYA14fNjXrnAM%2Brw%2FLmlTxy0n7wi4KfcxJ8VesSqFJUEwTZDbB4c6KEoMYOJIh9YIkygi7dohA2OzgSmuRWjNnkmZc47ScFI5HxzoCIBD2Mfe3nFMN6LPMJwAppsr7noezHPf7kVXbXk%2Fbcb%2Bs4o8S85hO4C8MwThAhG1eJoRDUqkVeKX9TjR3PF2%2FLcSRvYWddUUrv0KJotkxSNB3tYoRhMfE2fkEbCkF%2Bjchov1qkB8vxRD9X2t%2BXKkY%2BkAOdcT6tkEFzUDrkcnVqL54gkJsRO3dQDtwJSf9BVLijozuUoL7QVn7oLJqxcuqCykpB%2F%2FfYSSlsyG7LC2gt722pT0NmXvucecQYL0mIL7opFMh%2FZNq79KZL7%2F5g5PBAGdrbyroFadMzEASmEmk4Y41pfCB5HxrxGaa4SkoUmO2fxgFyTb%2F10mMEYyRhRhQ8DeRaddyAf%2FFpBEFiOkKP73j5jd5A3fizV%2Bw91JIXQR%2F2b%2F3ryiqHZiwPknkNqX5gKSJGi40gq7jxlZ8SiyMI86M8Clq8XkrIFpeQKa5BDrcVi54hCEZwyQtrZVnnVUoWO5K3QRn9HRwjahPLua%2BIR4TC06p%2FMBjqkAfMrknsugk641KNsgUg%2Bal9NaEoLmbJCnAK3%2FO7Nou0%2F2hx0vNeGtR9aJWTsHXevYRcWPqIzvF75DuQRnJYRmaEoZ3X3vIzl493F69iISrAZ1u7M9BMhdrUGoUU%2Fvgfa3wNr%2BaoIB6WfPkvbsw6%2BQEDRnOu61w4z2vqVLnYIZnB9TpQvTcCkkx9BLW0GW%2BzJRmcNN2tw0FO8B3rWoSNpBFNFucNk&X-Amz-Signature=cd3c410e94a0f9a34ec750c4f69a4483118ee8b6d9da9b46f66ec7a432aebd2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXPERIL%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQOWRo0fhkQcxoBo4IiuwTxcwp2Fp9RSWXSCcAjIxKAQIhAMGqQNA7mykNZPEOA3mwHhfG9po2qRoJ5sHlSviyZN%2BmKv8DCGwQABoMNjM3NDIzMTgzODA1Igyea9QtPXZodJTy5mQq3AOX5S4N2AJzjshqNk0kQEqVKK7RpyIqjMs1ikI%2B9CPtWYA14fNjXrnAM%2Brw%2FLmlTxy0n7wi4KfcxJ8VesSqFJUEwTZDbB4c6KEoMYOJIh9YIkygi7dohA2OzgSmuRWjNnkmZc47ScFI5HxzoCIBD2Mfe3nFMN6LPMJwAppsr7noezHPf7kVXbXk%2Fbcb%2Bs4o8S85hO4C8MwThAhG1eJoRDUqkVeKX9TjR3PF2%2FLcSRvYWddUUrv0KJotkxSNB3tYoRhMfE2fkEbCkF%2Bjchov1qkB8vxRD9X2t%2BXKkY%2BkAOdcT6tkEFzUDrkcnVqL54gkJsRO3dQDtwJSf9BVLijozuUoL7QVn7oLJqxcuqCykpB%2F%2FfYSSlsyG7LC2gt722pT0NmXvucecQYL0mIL7opFMh%2FZNq79KZL7%2F5g5PBAGdrbyroFadMzEASmEmk4Y41pfCB5HxrxGaa4SkoUmO2fxgFyTb%2F10mMEYyRhRhQ8DeRaddyAf%2FFpBEFiOkKP73j5jd5A3fizV%2Bw91JIXQR%2F2b%2F3ryiqHZiwPknkNqX5gKSJGi40gq7jxlZ8SiyMI86M8Clq8XkrIFpeQKa5BDrcVi54hCEZwyQtrZVnnVUoWO5K3QRn9HRwjahPLua%2BIR4TC06p%2FMBjqkAfMrknsugk641KNsgUg%2Bal9NaEoLmbJCnAK3%2FO7Nou0%2F2hx0vNeGtR9aJWTsHXevYRcWPqIzvF75DuQRnJYRmaEoZ3X3vIzl493F69iISrAZ1u7M9BMhdrUGoUU%2Fvgfa3wNr%2BaoIB6WfPkvbsw6%2BQEDRnOu61w4z2vqVLnYIZnB9TpQvTcCkkx9BLW0GW%2BzJRmcNN2tw0FO8B3rWoSNpBFNFucNk&X-Amz-Signature=771ed3327c0f1ca947b6444717c27126e80c7b4293a6369336fc86aa633ea46a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXPERIL%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQOWRo0fhkQcxoBo4IiuwTxcwp2Fp9RSWXSCcAjIxKAQIhAMGqQNA7mykNZPEOA3mwHhfG9po2qRoJ5sHlSviyZN%2BmKv8DCGwQABoMNjM3NDIzMTgzODA1Igyea9QtPXZodJTy5mQq3AOX5S4N2AJzjshqNk0kQEqVKK7RpyIqjMs1ikI%2B9CPtWYA14fNjXrnAM%2Brw%2FLmlTxy0n7wi4KfcxJ8VesSqFJUEwTZDbB4c6KEoMYOJIh9YIkygi7dohA2OzgSmuRWjNnkmZc47ScFI5HxzoCIBD2Mfe3nFMN6LPMJwAppsr7noezHPf7kVXbXk%2Fbcb%2Bs4o8S85hO4C8MwThAhG1eJoRDUqkVeKX9TjR3PF2%2FLcSRvYWddUUrv0KJotkxSNB3tYoRhMfE2fkEbCkF%2Bjchov1qkB8vxRD9X2t%2BXKkY%2BkAOdcT6tkEFzUDrkcnVqL54gkJsRO3dQDtwJSf9BVLijozuUoL7QVn7oLJqxcuqCykpB%2F%2FfYSSlsyG7LC2gt722pT0NmXvucecQYL0mIL7opFMh%2FZNq79KZL7%2F5g5PBAGdrbyroFadMzEASmEmk4Y41pfCB5HxrxGaa4SkoUmO2fxgFyTb%2F10mMEYyRhRhQ8DeRaddyAf%2FFpBEFiOkKP73j5jd5A3fizV%2Bw91JIXQR%2F2b%2F3ryiqHZiwPknkNqX5gKSJGi40gq7jxlZ8SiyMI86M8Clq8XkrIFpeQKa5BDrcVi54hCEZwyQtrZVnnVUoWO5K3QRn9HRwjahPLua%2BIR4TC06p%2FMBjqkAfMrknsugk641KNsgUg%2Bal9NaEoLmbJCnAK3%2FO7Nou0%2F2hx0vNeGtR9aJWTsHXevYRcWPqIzvF75DuQRnJYRmaEoZ3X3vIzl493F69iISrAZ1u7M9BMhdrUGoUU%2Fvgfa3wNr%2BaoIB6WfPkvbsw6%2BQEDRnOu61w4z2vqVLnYIZnB9TpQvTcCkkx9BLW0GW%2BzJRmcNN2tw0FO8B3rWoSNpBFNFucNk&X-Amz-Signature=a8abcdc8375083020f1b1989e7df6e3e8d20800ecc9ebe0e469552f65c9f87a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXPERIL%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQOWRo0fhkQcxoBo4IiuwTxcwp2Fp9RSWXSCcAjIxKAQIhAMGqQNA7mykNZPEOA3mwHhfG9po2qRoJ5sHlSviyZN%2BmKv8DCGwQABoMNjM3NDIzMTgzODA1Igyea9QtPXZodJTy5mQq3AOX5S4N2AJzjshqNk0kQEqVKK7RpyIqjMs1ikI%2B9CPtWYA14fNjXrnAM%2Brw%2FLmlTxy0n7wi4KfcxJ8VesSqFJUEwTZDbB4c6KEoMYOJIh9YIkygi7dohA2OzgSmuRWjNnkmZc47ScFI5HxzoCIBD2Mfe3nFMN6LPMJwAppsr7noezHPf7kVXbXk%2Fbcb%2Bs4o8S85hO4C8MwThAhG1eJoRDUqkVeKX9TjR3PF2%2FLcSRvYWddUUrv0KJotkxSNB3tYoRhMfE2fkEbCkF%2Bjchov1qkB8vxRD9X2t%2BXKkY%2BkAOdcT6tkEFzUDrkcnVqL54gkJsRO3dQDtwJSf9BVLijozuUoL7QVn7oLJqxcuqCykpB%2F%2FfYSSlsyG7LC2gt722pT0NmXvucecQYL0mIL7opFMh%2FZNq79KZL7%2F5g5PBAGdrbyroFadMzEASmEmk4Y41pfCB5HxrxGaa4SkoUmO2fxgFyTb%2F10mMEYyRhRhQ8DeRaddyAf%2FFpBEFiOkKP73j5jd5A3fizV%2Bw91JIXQR%2F2b%2F3ryiqHZiwPknkNqX5gKSJGi40gq7jxlZ8SiyMI86M8Clq8XkrIFpeQKa5BDrcVi54hCEZwyQtrZVnnVUoWO5K3QRn9HRwjahPLua%2BIR4TC06p%2FMBjqkAfMrknsugk641KNsgUg%2Bal9NaEoLmbJCnAK3%2FO7Nou0%2F2hx0vNeGtR9aJWTsHXevYRcWPqIzvF75DuQRnJYRmaEoZ3X3vIzl493F69iISrAZ1u7M9BMhdrUGoUU%2Fvgfa3wNr%2BaoIB6WfPkvbsw6%2BQEDRnOu61w4z2vqVLnYIZnB9TpQvTcCkkx9BLW0GW%2BzJRmcNN2tw0FO8B3rWoSNpBFNFucNk&X-Amz-Signature=d7b8950a73fa468224009eb70101d3d9a2a7c4de4d683e19eb6ab1e9d202c6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDXPERIL%2F20260208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260208T023612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQOWRo0fhkQcxoBo4IiuwTxcwp2Fp9RSWXSCcAjIxKAQIhAMGqQNA7mykNZPEOA3mwHhfG9po2qRoJ5sHlSviyZN%2BmKv8DCGwQABoMNjM3NDIzMTgzODA1Igyea9QtPXZodJTy5mQq3AOX5S4N2AJzjshqNk0kQEqVKK7RpyIqjMs1ikI%2B9CPtWYA14fNjXrnAM%2Brw%2FLmlTxy0n7wi4KfcxJ8VesSqFJUEwTZDbB4c6KEoMYOJIh9YIkygi7dohA2OzgSmuRWjNnkmZc47ScFI5HxzoCIBD2Mfe3nFMN6LPMJwAppsr7noezHPf7kVXbXk%2Fbcb%2Bs4o8S85hO4C8MwThAhG1eJoRDUqkVeKX9TjR3PF2%2FLcSRvYWddUUrv0KJotkxSNB3tYoRhMfE2fkEbCkF%2Bjchov1qkB8vxRD9X2t%2BXKkY%2BkAOdcT6tkEFzUDrkcnVqL54gkJsRO3dQDtwJSf9BVLijozuUoL7QVn7oLJqxcuqCykpB%2F%2FfYSSlsyG7LC2gt722pT0NmXvucecQYL0mIL7opFMh%2FZNq79KZL7%2F5g5PBAGdrbyroFadMzEASmEmk4Y41pfCB5HxrxGaa4SkoUmO2fxgFyTb%2F10mMEYyRhRhQ8DeRaddyAf%2FFpBEFiOkKP73j5jd5A3fizV%2Bw91JIXQR%2F2b%2F3ryiqHZiwPknkNqX5gKSJGi40gq7jxlZ8SiyMI86M8Clq8XkrIFpeQKa5BDrcVi54hCEZwyQtrZVnnVUoWO5K3QRn9HRwjahPLua%2BIR4TC06p%2FMBjqkAfMrknsugk641KNsgUg%2Bal9NaEoLmbJCnAK3%2FO7Nou0%2F2hx0vNeGtR9aJWTsHXevYRcWPqIzvF75DuQRnJYRmaEoZ3X3vIzl493F69iISrAZ1u7M9BMhdrUGoUU%2Fvgfa3wNr%2BaoIB6WfPkvbsw6%2BQEDRnOu61w4z2vqVLnYIZnB9TpQvTcCkkx9BLW0GW%2BzJRmcNN2tw0FO8B3rWoSNpBFNFucNk&X-Amz-Signature=928dce85c2190d28a936d2ce87c03a37f8b093dc88efed76fc9ee2c070005107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
