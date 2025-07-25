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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ5DR7W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIECs3ixFzlVgqfU7sXlJpaIZZIBLNKXDgmdx482aI0dyAiAmx8hNQPqaWg%2BWm0Zp1Uy3guXLr37thXsV2s1KXT7bsCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMPG3%2BUXTQjRVJ9JTWKtwD0dQxfP1Yr2ZXN7aS6JKzLmf1ngg5pOCyY%2FBQx369BttFtejf7TMiFcUsQ41qBBD3p0CS%2FfYDmMQqO13%2B0n4OqoB8KpcYYkUmNwabKr1WU47AmQ79XOp2LQbxfykUHu5DxfC0krvaq5abWPE18KwascZ2FcxPRXBuP%2FO0lBI8omgygnEyDrVKRsclpCTJf3W02p9lgyufs9NL1QarLx6zOfu%2BN5l2l7MOwinjstZCF6xe%2FIv7thZrhHD8V7nPP7e40C5ib9cp%2FsiVRRnjrxlkW%2BRGy8ek9I%2F7ZJd1q7fvhqW8B7V%2BSOqjq%2FLNrI7VB34VmaGxrhq%2BWq1lWv3FlbbOXXw4VhlWPrAOB%2BZxkeBPocWGynLpTu1m1r%2F5VcvE5sqPhWYhZDR5Ne6yTvZ%2F6JEPg%2BJK4KIkVaLXW%2FlZdBL2Jjbu9A31f6Yqq41Qq1LwuWi%2F82F1jH0JjAT2AqOSEyhkP%2FFXWgnyiqyVGW3o0WGoLP9W1H3Y9RWkYCQcQGF9rqz%2ByuVH2s1qCYAeYQh4cl%2Fbq%2Fg11K9%2Bhw%2FB5Hk8AWLnULhyXlkk%2FVrlKaGZrevhd%2B7a%2FM%2Fmjk56CnPgi986RV8EbgE42iUHAFdBME5hYjV8AQqwB7ty%2F99A6HWKkHIwmbyNxAY6pgE6kIREPyLW4X4SFLUgawlEzt8JC9Jg%2FwOYmdEYSlE4D3Y6UxCyYPBi4vl0Mn7NwljVD6C4Eys9fVBPy823V7Dp7%2BIVnDt5ndEpVm6PYhgLjk18C7f0SdytAft472LfnY4TVy0mQxFOcs8GaE%2BKC7PDYSdOB9mNZi%2FVlhtBVBu6ft3IVYKx%2Fa7k%2Ftbly8gjonD1VdLOUAUlOBi9RO1X1%2FJXnjCXA1rE&X-Amz-Signature=0c5830c39aad95f40c539d0cb7608b9b2fe203d01384f409a0f62f5440c7427c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ5DR7W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIECs3ixFzlVgqfU7sXlJpaIZZIBLNKXDgmdx482aI0dyAiAmx8hNQPqaWg%2BWm0Zp1Uy3guXLr37thXsV2s1KXT7bsCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMPG3%2BUXTQjRVJ9JTWKtwD0dQxfP1Yr2ZXN7aS6JKzLmf1ngg5pOCyY%2FBQx369BttFtejf7TMiFcUsQ41qBBD3p0CS%2FfYDmMQqO13%2B0n4OqoB8KpcYYkUmNwabKr1WU47AmQ79XOp2LQbxfykUHu5DxfC0krvaq5abWPE18KwascZ2FcxPRXBuP%2FO0lBI8omgygnEyDrVKRsclpCTJf3W02p9lgyufs9NL1QarLx6zOfu%2BN5l2l7MOwinjstZCF6xe%2FIv7thZrhHD8V7nPP7e40C5ib9cp%2FsiVRRnjrxlkW%2BRGy8ek9I%2F7ZJd1q7fvhqW8B7V%2BSOqjq%2FLNrI7VB34VmaGxrhq%2BWq1lWv3FlbbOXXw4VhlWPrAOB%2BZxkeBPocWGynLpTu1m1r%2F5VcvE5sqPhWYhZDR5Ne6yTvZ%2F6JEPg%2BJK4KIkVaLXW%2FlZdBL2Jjbu9A31f6Yqq41Qq1LwuWi%2F82F1jH0JjAT2AqOSEyhkP%2FFXWgnyiqyVGW3o0WGoLP9W1H3Y9RWkYCQcQGF9rqz%2ByuVH2s1qCYAeYQh4cl%2Fbq%2Fg11K9%2Bhw%2FB5Hk8AWLnULhyXlkk%2FVrlKaGZrevhd%2B7a%2FM%2Fmjk56CnPgi986RV8EbgE42iUHAFdBME5hYjV8AQqwB7ty%2F99A6HWKkHIwmbyNxAY6pgE6kIREPyLW4X4SFLUgawlEzt8JC9Jg%2FwOYmdEYSlE4D3Y6UxCyYPBi4vl0Mn7NwljVD6C4Eys9fVBPy823V7Dp7%2BIVnDt5ndEpVm6PYhgLjk18C7f0SdytAft472LfnY4TVy0mQxFOcs8GaE%2BKC7PDYSdOB9mNZi%2FVlhtBVBu6ft3IVYKx%2Fa7k%2Ftbly8gjonD1VdLOUAUlOBi9RO1X1%2FJXnjCXA1rE&X-Amz-Signature=507a6ca4b02427fe64b8bd4af872db21e8c1a2b6272d1341154be9c76c367b0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ5DR7W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIECs3ixFzlVgqfU7sXlJpaIZZIBLNKXDgmdx482aI0dyAiAmx8hNQPqaWg%2BWm0Zp1Uy3guXLr37thXsV2s1KXT7bsCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMPG3%2BUXTQjRVJ9JTWKtwD0dQxfP1Yr2ZXN7aS6JKzLmf1ngg5pOCyY%2FBQx369BttFtejf7TMiFcUsQ41qBBD3p0CS%2FfYDmMQqO13%2B0n4OqoB8KpcYYkUmNwabKr1WU47AmQ79XOp2LQbxfykUHu5DxfC0krvaq5abWPE18KwascZ2FcxPRXBuP%2FO0lBI8omgygnEyDrVKRsclpCTJf3W02p9lgyufs9NL1QarLx6zOfu%2BN5l2l7MOwinjstZCF6xe%2FIv7thZrhHD8V7nPP7e40C5ib9cp%2FsiVRRnjrxlkW%2BRGy8ek9I%2F7ZJd1q7fvhqW8B7V%2BSOqjq%2FLNrI7VB34VmaGxrhq%2BWq1lWv3FlbbOXXw4VhlWPrAOB%2BZxkeBPocWGynLpTu1m1r%2F5VcvE5sqPhWYhZDR5Ne6yTvZ%2F6JEPg%2BJK4KIkVaLXW%2FlZdBL2Jjbu9A31f6Yqq41Qq1LwuWi%2F82F1jH0JjAT2AqOSEyhkP%2FFXWgnyiqyVGW3o0WGoLP9W1H3Y9RWkYCQcQGF9rqz%2ByuVH2s1qCYAeYQh4cl%2Fbq%2Fg11K9%2Bhw%2FB5Hk8AWLnULhyXlkk%2FVrlKaGZrevhd%2B7a%2FM%2Fmjk56CnPgi986RV8EbgE42iUHAFdBME5hYjV8AQqwB7ty%2F99A6HWKkHIwmbyNxAY6pgE6kIREPyLW4X4SFLUgawlEzt8JC9Jg%2FwOYmdEYSlE4D3Y6UxCyYPBi4vl0Mn7NwljVD6C4Eys9fVBPy823V7Dp7%2BIVnDt5ndEpVm6PYhgLjk18C7f0SdytAft472LfnY4TVy0mQxFOcs8GaE%2BKC7PDYSdOB9mNZi%2FVlhtBVBu6ft3IVYKx%2Fa7k%2Ftbly8gjonD1VdLOUAUlOBi9RO1X1%2FJXnjCXA1rE&X-Amz-Signature=066563e7e4876015a79c564c5b4a9a5aa6a2f94162bcfdfa0d0fc330f32c33ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ5DR7W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIECs3ixFzlVgqfU7sXlJpaIZZIBLNKXDgmdx482aI0dyAiAmx8hNQPqaWg%2BWm0Zp1Uy3guXLr37thXsV2s1KXT7bsCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMPG3%2BUXTQjRVJ9JTWKtwD0dQxfP1Yr2ZXN7aS6JKzLmf1ngg5pOCyY%2FBQx369BttFtejf7TMiFcUsQ41qBBD3p0CS%2FfYDmMQqO13%2B0n4OqoB8KpcYYkUmNwabKr1WU47AmQ79XOp2LQbxfykUHu5DxfC0krvaq5abWPE18KwascZ2FcxPRXBuP%2FO0lBI8omgygnEyDrVKRsclpCTJf3W02p9lgyufs9NL1QarLx6zOfu%2BN5l2l7MOwinjstZCF6xe%2FIv7thZrhHD8V7nPP7e40C5ib9cp%2FsiVRRnjrxlkW%2BRGy8ek9I%2F7ZJd1q7fvhqW8B7V%2BSOqjq%2FLNrI7VB34VmaGxrhq%2BWq1lWv3FlbbOXXw4VhlWPrAOB%2BZxkeBPocWGynLpTu1m1r%2F5VcvE5sqPhWYhZDR5Ne6yTvZ%2F6JEPg%2BJK4KIkVaLXW%2FlZdBL2Jjbu9A31f6Yqq41Qq1LwuWi%2F82F1jH0JjAT2AqOSEyhkP%2FFXWgnyiqyVGW3o0WGoLP9W1H3Y9RWkYCQcQGF9rqz%2ByuVH2s1qCYAeYQh4cl%2Fbq%2Fg11K9%2Bhw%2FB5Hk8AWLnULhyXlkk%2FVrlKaGZrevhd%2B7a%2FM%2Fmjk56CnPgi986RV8EbgE42iUHAFdBME5hYjV8AQqwB7ty%2F99A6HWKkHIwmbyNxAY6pgE6kIREPyLW4X4SFLUgawlEzt8JC9Jg%2FwOYmdEYSlE4D3Y6UxCyYPBi4vl0Mn7NwljVD6C4Eys9fVBPy823V7Dp7%2BIVnDt5ndEpVm6PYhgLjk18C7f0SdytAft472LfnY4TVy0mQxFOcs8GaE%2BKC7PDYSdOB9mNZi%2FVlhtBVBu6ft3IVYKx%2Fa7k%2Ftbly8gjonD1VdLOUAUlOBi9RO1X1%2FJXnjCXA1rE&X-Amz-Signature=926f09c1018d5bdf0cbd4203ab1af48ce052399af0d1cd7a6f72152a4a0f2e87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ5DR7W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIECs3ixFzlVgqfU7sXlJpaIZZIBLNKXDgmdx482aI0dyAiAmx8hNQPqaWg%2BWm0Zp1Uy3guXLr37thXsV2s1KXT7bsCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMPG3%2BUXTQjRVJ9JTWKtwD0dQxfP1Yr2ZXN7aS6JKzLmf1ngg5pOCyY%2FBQx369BttFtejf7TMiFcUsQ41qBBD3p0CS%2FfYDmMQqO13%2B0n4OqoB8KpcYYkUmNwabKr1WU47AmQ79XOp2LQbxfykUHu5DxfC0krvaq5abWPE18KwascZ2FcxPRXBuP%2FO0lBI8omgygnEyDrVKRsclpCTJf3W02p9lgyufs9NL1QarLx6zOfu%2BN5l2l7MOwinjstZCF6xe%2FIv7thZrhHD8V7nPP7e40C5ib9cp%2FsiVRRnjrxlkW%2BRGy8ek9I%2F7ZJd1q7fvhqW8B7V%2BSOqjq%2FLNrI7VB34VmaGxrhq%2BWq1lWv3FlbbOXXw4VhlWPrAOB%2BZxkeBPocWGynLpTu1m1r%2F5VcvE5sqPhWYhZDR5Ne6yTvZ%2F6JEPg%2BJK4KIkVaLXW%2FlZdBL2Jjbu9A31f6Yqq41Qq1LwuWi%2F82F1jH0JjAT2AqOSEyhkP%2FFXWgnyiqyVGW3o0WGoLP9W1H3Y9RWkYCQcQGF9rqz%2ByuVH2s1qCYAeYQh4cl%2Fbq%2Fg11K9%2Bhw%2FB5Hk8AWLnULhyXlkk%2FVrlKaGZrevhd%2B7a%2FM%2Fmjk56CnPgi986RV8EbgE42iUHAFdBME5hYjV8AQqwB7ty%2F99A6HWKkHIwmbyNxAY6pgE6kIREPyLW4X4SFLUgawlEzt8JC9Jg%2FwOYmdEYSlE4D3Y6UxCyYPBi4vl0Mn7NwljVD6C4Eys9fVBPy823V7Dp7%2BIVnDt5ndEpVm6PYhgLjk18C7f0SdytAft472LfnY4TVy0mQxFOcs8GaE%2BKC7PDYSdOB9mNZi%2FVlhtBVBu6ft3IVYKx%2Fa7k%2Ftbly8gjonD1VdLOUAUlOBi9RO1X1%2FJXnjCXA1rE&X-Amz-Signature=7b0d40a2bcd304c2ce5b0e8c50ada1de57475548345e5673db1194a2d7553b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ5DR7W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIECs3ixFzlVgqfU7sXlJpaIZZIBLNKXDgmdx482aI0dyAiAmx8hNQPqaWg%2BWm0Zp1Uy3guXLr37thXsV2s1KXT7bsCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMPG3%2BUXTQjRVJ9JTWKtwD0dQxfP1Yr2ZXN7aS6JKzLmf1ngg5pOCyY%2FBQx369BttFtejf7TMiFcUsQ41qBBD3p0CS%2FfYDmMQqO13%2B0n4OqoB8KpcYYkUmNwabKr1WU47AmQ79XOp2LQbxfykUHu5DxfC0krvaq5abWPE18KwascZ2FcxPRXBuP%2FO0lBI8omgygnEyDrVKRsclpCTJf3W02p9lgyufs9NL1QarLx6zOfu%2BN5l2l7MOwinjstZCF6xe%2FIv7thZrhHD8V7nPP7e40C5ib9cp%2FsiVRRnjrxlkW%2BRGy8ek9I%2F7ZJd1q7fvhqW8B7V%2BSOqjq%2FLNrI7VB34VmaGxrhq%2BWq1lWv3FlbbOXXw4VhlWPrAOB%2BZxkeBPocWGynLpTu1m1r%2F5VcvE5sqPhWYhZDR5Ne6yTvZ%2F6JEPg%2BJK4KIkVaLXW%2FlZdBL2Jjbu9A31f6Yqq41Qq1LwuWi%2F82F1jH0JjAT2AqOSEyhkP%2FFXWgnyiqyVGW3o0WGoLP9W1H3Y9RWkYCQcQGF9rqz%2ByuVH2s1qCYAeYQh4cl%2Fbq%2Fg11K9%2Bhw%2FB5Hk8AWLnULhyXlkk%2FVrlKaGZrevhd%2B7a%2FM%2Fmjk56CnPgi986RV8EbgE42iUHAFdBME5hYjV8AQqwB7ty%2F99A6HWKkHIwmbyNxAY6pgE6kIREPyLW4X4SFLUgawlEzt8JC9Jg%2FwOYmdEYSlE4D3Y6UxCyYPBi4vl0Mn7NwljVD6C4Eys9fVBPy823V7Dp7%2BIVnDt5ndEpVm6PYhgLjk18C7f0SdytAft472LfnY4TVy0mQxFOcs8GaE%2BKC7PDYSdOB9mNZi%2FVlhtBVBu6ft3IVYKx%2Fa7k%2Ftbly8gjonD1VdLOUAUlOBi9RO1X1%2FJXnjCXA1rE&X-Amz-Signature=3e810c2b1be008eedcdf9f0f9d77207c066be13cf82c9db0de2538ba139ca41c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ5DR7W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIECs3ixFzlVgqfU7sXlJpaIZZIBLNKXDgmdx482aI0dyAiAmx8hNQPqaWg%2BWm0Zp1Uy3guXLr37thXsV2s1KXT7bsCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMPG3%2BUXTQjRVJ9JTWKtwD0dQxfP1Yr2ZXN7aS6JKzLmf1ngg5pOCyY%2FBQx369BttFtejf7TMiFcUsQ41qBBD3p0CS%2FfYDmMQqO13%2B0n4OqoB8KpcYYkUmNwabKr1WU47AmQ79XOp2LQbxfykUHu5DxfC0krvaq5abWPE18KwascZ2FcxPRXBuP%2FO0lBI8omgygnEyDrVKRsclpCTJf3W02p9lgyufs9NL1QarLx6zOfu%2BN5l2l7MOwinjstZCF6xe%2FIv7thZrhHD8V7nPP7e40C5ib9cp%2FsiVRRnjrxlkW%2BRGy8ek9I%2F7ZJd1q7fvhqW8B7V%2BSOqjq%2FLNrI7VB34VmaGxrhq%2BWq1lWv3FlbbOXXw4VhlWPrAOB%2BZxkeBPocWGynLpTu1m1r%2F5VcvE5sqPhWYhZDR5Ne6yTvZ%2F6JEPg%2BJK4KIkVaLXW%2FlZdBL2Jjbu9A31f6Yqq41Qq1LwuWi%2F82F1jH0JjAT2AqOSEyhkP%2FFXWgnyiqyVGW3o0WGoLP9W1H3Y9RWkYCQcQGF9rqz%2ByuVH2s1qCYAeYQh4cl%2Fbq%2Fg11K9%2Bhw%2FB5Hk8AWLnULhyXlkk%2FVrlKaGZrevhd%2B7a%2FM%2Fmjk56CnPgi986RV8EbgE42iUHAFdBME5hYjV8AQqwB7ty%2F99A6HWKkHIwmbyNxAY6pgE6kIREPyLW4X4SFLUgawlEzt8JC9Jg%2FwOYmdEYSlE4D3Y6UxCyYPBi4vl0Mn7NwljVD6C4Eys9fVBPy823V7Dp7%2BIVnDt5ndEpVm6PYhgLjk18C7f0SdytAft472LfnY4TVy0mQxFOcs8GaE%2BKC7PDYSdOB9mNZi%2FVlhtBVBu6ft3IVYKx%2Fa7k%2Ftbly8gjonD1VdLOUAUlOBi9RO1X1%2FJXnjCXA1rE&X-Amz-Signature=8242eb6c0c6e0264c26a4cd4dfd9eabe70ca2a3df7dd6f53d88f56097f5fc178&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ5DR7W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIECs3ixFzlVgqfU7sXlJpaIZZIBLNKXDgmdx482aI0dyAiAmx8hNQPqaWg%2BWm0Zp1Uy3guXLr37thXsV2s1KXT7bsCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMPG3%2BUXTQjRVJ9JTWKtwD0dQxfP1Yr2ZXN7aS6JKzLmf1ngg5pOCyY%2FBQx369BttFtejf7TMiFcUsQ41qBBD3p0CS%2FfYDmMQqO13%2B0n4OqoB8KpcYYkUmNwabKr1WU47AmQ79XOp2LQbxfykUHu5DxfC0krvaq5abWPE18KwascZ2FcxPRXBuP%2FO0lBI8omgygnEyDrVKRsclpCTJf3W02p9lgyufs9NL1QarLx6zOfu%2BN5l2l7MOwinjstZCF6xe%2FIv7thZrhHD8V7nPP7e40C5ib9cp%2FsiVRRnjrxlkW%2BRGy8ek9I%2F7ZJd1q7fvhqW8B7V%2BSOqjq%2FLNrI7VB34VmaGxrhq%2BWq1lWv3FlbbOXXw4VhlWPrAOB%2BZxkeBPocWGynLpTu1m1r%2F5VcvE5sqPhWYhZDR5Ne6yTvZ%2F6JEPg%2BJK4KIkVaLXW%2FlZdBL2Jjbu9A31f6Yqq41Qq1LwuWi%2F82F1jH0JjAT2AqOSEyhkP%2FFXWgnyiqyVGW3o0WGoLP9W1H3Y9RWkYCQcQGF9rqz%2ByuVH2s1qCYAeYQh4cl%2Fbq%2Fg11K9%2Bhw%2FB5Hk8AWLnULhyXlkk%2FVrlKaGZrevhd%2B7a%2FM%2Fmjk56CnPgi986RV8EbgE42iUHAFdBME5hYjV8AQqwB7ty%2F99A6HWKkHIwmbyNxAY6pgE6kIREPyLW4X4SFLUgawlEzt8JC9Jg%2FwOYmdEYSlE4D3Y6UxCyYPBi4vl0Mn7NwljVD6C4Eys9fVBPy823V7Dp7%2BIVnDt5ndEpVm6PYhgLjk18C7f0SdytAft472LfnY4TVy0mQxFOcs8GaE%2BKC7PDYSdOB9mNZi%2FVlhtBVBu6ft3IVYKx%2Fa7k%2Ftbly8gjonD1VdLOUAUlOBi9RO1X1%2FJXnjCXA1rE&X-Amz-Signature=dfb8b2015fda9be03582123f85b57cce98fee3c4fc31a786f5483e7f00fcdea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQ5DR7W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIECs3ixFzlVgqfU7sXlJpaIZZIBLNKXDgmdx482aI0dyAiAmx8hNQPqaWg%2BWm0Zp1Uy3guXLr37thXsV2s1KXT7bsCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMPG3%2BUXTQjRVJ9JTWKtwD0dQxfP1Yr2ZXN7aS6JKzLmf1ngg5pOCyY%2FBQx369BttFtejf7TMiFcUsQ41qBBD3p0CS%2FfYDmMQqO13%2B0n4OqoB8KpcYYkUmNwabKr1WU47AmQ79XOp2LQbxfykUHu5DxfC0krvaq5abWPE18KwascZ2FcxPRXBuP%2FO0lBI8omgygnEyDrVKRsclpCTJf3W02p9lgyufs9NL1QarLx6zOfu%2BN5l2l7MOwinjstZCF6xe%2FIv7thZrhHD8V7nPP7e40C5ib9cp%2FsiVRRnjrxlkW%2BRGy8ek9I%2F7ZJd1q7fvhqW8B7V%2BSOqjq%2FLNrI7VB34VmaGxrhq%2BWq1lWv3FlbbOXXw4VhlWPrAOB%2BZxkeBPocWGynLpTu1m1r%2F5VcvE5sqPhWYhZDR5Ne6yTvZ%2F6JEPg%2BJK4KIkVaLXW%2FlZdBL2Jjbu9A31f6Yqq41Qq1LwuWi%2F82F1jH0JjAT2AqOSEyhkP%2FFXWgnyiqyVGW3o0WGoLP9W1H3Y9RWkYCQcQGF9rqz%2ByuVH2s1qCYAeYQh4cl%2Fbq%2Fg11K9%2Bhw%2FB5Hk8AWLnULhyXlkk%2FVrlKaGZrevhd%2B7a%2FM%2Fmjk56CnPgi986RV8EbgE42iUHAFdBME5hYjV8AQqwB7ty%2F99A6HWKkHIwmbyNxAY6pgE6kIREPyLW4X4SFLUgawlEzt8JC9Jg%2FwOYmdEYSlE4D3Y6UxCyYPBi4vl0Mn7NwljVD6C4Eys9fVBPy823V7Dp7%2BIVnDt5ndEpVm6PYhgLjk18C7f0SdytAft472LfnY4TVy0mQxFOcs8GaE%2BKC7PDYSdOB9mNZi%2FVlhtBVBu6ft3IVYKx%2Fa7k%2Ftbly8gjonD1VdLOUAUlOBi9RO1X1%2FJXnjCXA1rE&X-Amz-Signature=ebe89ab54ec57f7b5f0d91925f7d3fca8e855f20f2a40ae48b2fbfedf857c6f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
