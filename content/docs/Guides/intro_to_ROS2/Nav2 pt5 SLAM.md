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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF76HEZQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCQ68TBQb6TTIiz7qrbe8IVFvaxW9g3eAKwhrHEY5ihvAIgVdHMwRpa8Fm%2FBfzdQFOFpnAhfbFLQzJDz3qyHtfz3BUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI56FAF6fuiiSBO%2BdSrcA%2F5QPQVWw94%2BRDj%2B7CT105%2FYa1dwGbHFsee1%2BvQ4jntFvYArE0PTwIeiCzd5ZRa6Qlg7X%2FnSzK9RfmZ0y3BGQEC%2BLe5OF0Hy%2BxUsyhfCdREl%2BBjTLYtS6tAhm6fyX%2FAyhHevP3rkCgdk%2FtigjzVS9VpPT4zrq9kTncTorFQ0fWHghBwt1uUDIEP7HOaQVAOfFXCH%2F0j%2FKkdXah52i6UBURBQpAXiK%2Bdh2IZ30J7YA9ez401nlLGUIDKGrPBiR%2Fl64PVLdFLH6JL3r1aChxwsWD3XLiiWda%2BGl9%2BX9yZOdpaqC7oC5%2FdCP3irJAplu%2BEpctbDpEcgsI4KprSN0mb6ZtagG1ARLUBA4XUQCTVSQI449tRHrk49h2ZF8kCnXBjPo%2BLR5ZdHY3lZQFzpuIcUhBssfAtnkCes1x22rdFMe8FdtqeKBeiQ6K6MDjUUqBtJmOfv8Fa5t76UpduW84Czk%2FpfhMBdRt0IlOFX7X7Dc%2FKgGGiNK7JBfmvPfMNCaV%2FhVI%2Bc8H5OnuuYAJ6DgqUxOWA6o832RytIbVTBGq28ANeygTOs2WyG7lIyzZ0WEpPiSSiCNB5EwKQK2YPnQl2ItnZoe5ybfXNVkab4pgSId0abMD1zEu2bWPCWOfFuMMHyn8QGOqUBIMytZnXcvw60JFXV4oCnkh1iMvROxJnNsOACeqJtR1rHOOBinbwyTrtUQLjEsbMYZHvurLF21T%2BiI0J7IWMmWa76omo0sWGW%2FCyXX18dBPMnwbW7YQFbC0hLMLiZmukhzUDMk%2BmfmeOTyAVKcrwOzOKgeSJmwZxh51iuvcjS8vs8jYLJcypbP8WjJBm0EcGFmSp0SsY%2F4RZ8K4Vh9OCF6pJyK4wq&X-Amz-Signature=70eedacca60f7fa7ccb976d721e26fb1cf2b3fac23d7860a11cc0c9febb9a4e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF76HEZQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCQ68TBQb6TTIiz7qrbe8IVFvaxW9g3eAKwhrHEY5ihvAIgVdHMwRpa8Fm%2FBfzdQFOFpnAhfbFLQzJDz3qyHtfz3BUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI56FAF6fuiiSBO%2BdSrcA%2F5QPQVWw94%2BRDj%2B7CT105%2FYa1dwGbHFsee1%2BvQ4jntFvYArE0PTwIeiCzd5ZRa6Qlg7X%2FnSzK9RfmZ0y3BGQEC%2BLe5OF0Hy%2BxUsyhfCdREl%2BBjTLYtS6tAhm6fyX%2FAyhHevP3rkCgdk%2FtigjzVS9VpPT4zrq9kTncTorFQ0fWHghBwt1uUDIEP7HOaQVAOfFXCH%2F0j%2FKkdXah52i6UBURBQpAXiK%2Bdh2IZ30J7YA9ez401nlLGUIDKGrPBiR%2Fl64PVLdFLH6JL3r1aChxwsWD3XLiiWda%2BGl9%2BX9yZOdpaqC7oC5%2FdCP3irJAplu%2BEpctbDpEcgsI4KprSN0mb6ZtagG1ARLUBA4XUQCTVSQI449tRHrk49h2ZF8kCnXBjPo%2BLR5ZdHY3lZQFzpuIcUhBssfAtnkCes1x22rdFMe8FdtqeKBeiQ6K6MDjUUqBtJmOfv8Fa5t76UpduW84Czk%2FpfhMBdRt0IlOFX7X7Dc%2FKgGGiNK7JBfmvPfMNCaV%2FhVI%2Bc8H5OnuuYAJ6DgqUxOWA6o832RytIbVTBGq28ANeygTOs2WyG7lIyzZ0WEpPiSSiCNB5EwKQK2YPnQl2ItnZoe5ybfXNVkab4pgSId0abMD1zEu2bWPCWOfFuMMHyn8QGOqUBIMytZnXcvw60JFXV4oCnkh1iMvROxJnNsOACeqJtR1rHOOBinbwyTrtUQLjEsbMYZHvurLF21T%2BiI0J7IWMmWa76omo0sWGW%2FCyXX18dBPMnwbW7YQFbC0hLMLiZmukhzUDMk%2BmfmeOTyAVKcrwOzOKgeSJmwZxh51iuvcjS8vs8jYLJcypbP8WjJBm0EcGFmSp0SsY%2F4RZ8K4Vh9OCF6pJyK4wq&X-Amz-Signature=fe4780d67d60c3470b7fb5450eb499b3e558d5f6077293475947c5e39cc60cd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF76HEZQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCQ68TBQb6TTIiz7qrbe8IVFvaxW9g3eAKwhrHEY5ihvAIgVdHMwRpa8Fm%2FBfzdQFOFpnAhfbFLQzJDz3qyHtfz3BUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI56FAF6fuiiSBO%2BdSrcA%2F5QPQVWw94%2BRDj%2B7CT105%2FYa1dwGbHFsee1%2BvQ4jntFvYArE0PTwIeiCzd5ZRa6Qlg7X%2FnSzK9RfmZ0y3BGQEC%2BLe5OF0Hy%2BxUsyhfCdREl%2BBjTLYtS6tAhm6fyX%2FAyhHevP3rkCgdk%2FtigjzVS9VpPT4zrq9kTncTorFQ0fWHghBwt1uUDIEP7HOaQVAOfFXCH%2F0j%2FKkdXah52i6UBURBQpAXiK%2Bdh2IZ30J7YA9ez401nlLGUIDKGrPBiR%2Fl64PVLdFLH6JL3r1aChxwsWD3XLiiWda%2BGl9%2BX9yZOdpaqC7oC5%2FdCP3irJAplu%2BEpctbDpEcgsI4KprSN0mb6ZtagG1ARLUBA4XUQCTVSQI449tRHrk49h2ZF8kCnXBjPo%2BLR5ZdHY3lZQFzpuIcUhBssfAtnkCes1x22rdFMe8FdtqeKBeiQ6K6MDjUUqBtJmOfv8Fa5t76UpduW84Czk%2FpfhMBdRt0IlOFX7X7Dc%2FKgGGiNK7JBfmvPfMNCaV%2FhVI%2Bc8H5OnuuYAJ6DgqUxOWA6o832RytIbVTBGq28ANeygTOs2WyG7lIyzZ0WEpPiSSiCNB5EwKQK2YPnQl2ItnZoe5ybfXNVkab4pgSId0abMD1zEu2bWPCWOfFuMMHyn8QGOqUBIMytZnXcvw60JFXV4oCnkh1iMvROxJnNsOACeqJtR1rHOOBinbwyTrtUQLjEsbMYZHvurLF21T%2BiI0J7IWMmWa76omo0sWGW%2FCyXX18dBPMnwbW7YQFbC0hLMLiZmukhzUDMk%2BmfmeOTyAVKcrwOzOKgeSJmwZxh51iuvcjS8vs8jYLJcypbP8WjJBm0EcGFmSp0SsY%2F4RZ8K4Vh9OCF6pJyK4wq&X-Amz-Signature=261c3e5624c07441deafffb4026e4785955777dcd263a46dc5a6797e8e332eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF76HEZQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCQ68TBQb6TTIiz7qrbe8IVFvaxW9g3eAKwhrHEY5ihvAIgVdHMwRpa8Fm%2FBfzdQFOFpnAhfbFLQzJDz3qyHtfz3BUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI56FAF6fuiiSBO%2BdSrcA%2F5QPQVWw94%2BRDj%2B7CT105%2FYa1dwGbHFsee1%2BvQ4jntFvYArE0PTwIeiCzd5ZRa6Qlg7X%2FnSzK9RfmZ0y3BGQEC%2BLe5OF0Hy%2BxUsyhfCdREl%2BBjTLYtS6tAhm6fyX%2FAyhHevP3rkCgdk%2FtigjzVS9VpPT4zrq9kTncTorFQ0fWHghBwt1uUDIEP7HOaQVAOfFXCH%2F0j%2FKkdXah52i6UBURBQpAXiK%2Bdh2IZ30J7YA9ez401nlLGUIDKGrPBiR%2Fl64PVLdFLH6JL3r1aChxwsWD3XLiiWda%2BGl9%2BX9yZOdpaqC7oC5%2FdCP3irJAplu%2BEpctbDpEcgsI4KprSN0mb6ZtagG1ARLUBA4XUQCTVSQI449tRHrk49h2ZF8kCnXBjPo%2BLR5ZdHY3lZQFzpuIcUhBssfAtnkCes1x22rdFMe8FdtqeKBeiQ6K6MDjUUqBtJmOfv8Fa5t76UpduW84Czk%2FpfhMBdRt0IlOFX7X7Dc%2FKgGGiNK7JBfmvPfMNCaV%2FhVI%2Bc8H5OnuuYAJ6DgqUxOWA6o832RytIbVTBGq28ANeygTOs2WyG7lIyzZ0WEpPiSSiCNB5EwKQK2YPnQl2ItnZoe5ybfXNVkab4pgSId0abMD1zEu2bWPCWOfFuMMHyn8QGOqUBIMytZnXcvw60JFXV4oCnkh1iMvROxJnNsOACeqJtR1rHOOBinbwyTrtUQLjEsbMYZHvurLF21T%2BiI0J7IWMmWa76omo0sWGW%2FCyXX18dBPMnwbW7YQFbC0hLMLiZmukhzUDMk%2BmfmeOTyAVKcrwOzOKgeSJmwZxh51iuvcjS8vs8jYLJcypbP8WjJBm0EcGFmSp0SsY%2F4RZ8K4Vh9OCF6pJyK4wq&X-Amz-Signature=a0ccec782546830714b9d890ae442084fab18e90aa9d58bb11773e6afeec07c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF76HEZQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCQ68TBQb6TTIiz7qrbe8IVFvaxW9g3eAKwhrHEY5ihvAIgVdHMwRpa8Fm%2FBfzdQFOFpnAhfbFLQzJDz3qyHtfz3BUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI56FAF6fuiiSBO%2BdSrcA%2F5QPQVWw94%2BRDj%2B7CT105%2FYa1dwGbHFsee1%2BvQ4jntFvYArE0PTwIeiCzd5ZRa6Qlg7X%2FnSzK9RfmZ0y3BGQEC%2BLe5OF0Hy%2BxUsyhfCdREl%2BBjTLYtS6tAhm6fyX%2FAyhHevP3rkCgdk%2FtigjzVS9VpPT4zrq9kTncTorFQ0fWHghBwt1uUDIEP7HOaQVAOfFXCH%2F0j%2FKkdXah52i6UBURBQpAXiK%2Bdh2IZ30J7YA9ez401nlLGUIDKGrPBiR%2Fl64PVLdFLH6JL3r1aChxwsWD3XLiiWda%2BGl9%2BX9yZOdpaqC7oC5%2FdCP3irJAplu%2BEpctbDpEcgsI4KprSN0mb6ZtagG1ARLUBA4XUQCTVSQI449tRHrk49h2ZF8kCnXBjPo%2BLR5ZdHY3lZQFzpuIcUhBssfAtnkCes1x22rdFMe8FdtqeKBeiQ6K6MDjUUqBtJmOfv8Fa5t76UpduW84Czk%2FpfhMBdRt0IlOFX7X7Dc%2FKgGGiNK7JBfmvPfMNCaV%2FhVI%2Bc8H5OnuuYAJ6DgqUxOWA6o832RytIbVTBGq28ANeygTOs2WyG7lIyzZ0WEpPiSSiCNB5EwKQK2YPnQl2ItnZoe5ybfXNVkab4pgSId0abMD1zEu2bWPCWOfFuMMHyn8QGOqUBIMytZnXcvw60JFXV4oCnkh1iMvROxJnNsOACeqJtR1rHOOBinbwyTrtUQLjEsbMYZHvurLF21T%2BiI0J7IWMmWa76omo0sWGW%2FCyXX18dBPMnwbW7YQFbC0hLMLiZmukhzUDMk%2BmfmeOTyAVKcrwOzOKgeSJmwZxh51iuvcjS8vs8jYLJcypbP8WjJBm0EcGFmSp0SsY%2F4RZ8K4Vh9OCF6pJyK4wq&X-Amz-Signature=d2a724d67182067fe882dcd188d618cdce0033f6e10024e881dce6121b94b185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF76HEZQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCQ68TBQb6TTIiz7qrbe8IVFvaxW9g3eAKwhrHEY5ihvAIgVdHMwRpa8Fm%2FBfzdQFOFpnAhfbFLQzJDz3qyHtfz3BUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI56FAF6fuiiSBO%2BdSrcA%2F5QPQVWw94%2BRDj%2B7CT105%2FYa1dwGbHFsee1%2BvQ4jntFvYArE0PTwIeiCzd5ZRa6Qlg7X%2FnSzK9RfmZ0y3BGQEC%2BLe5OF0Hy%2BxUsyhfCdREl%2BBjTLYtS6tAhm6fyX%2FAyhHevP3rkCgdk%2FtigjzVS9VpPT4zrq9kTncTorFQ0fWHghBwt1uUDIEP7HOaQVAOfFXCH%2F0j%2FKkdXah52i6UBURBQpAXiK%2Bdh2IZ30J7YA9ez401nlLGUIDKGrPBiR%2Fl64PVLdFLH6JL3r1aChxwsWD3XLiiWda%2BGl9%2BX9yZOdpaqC7oC5%2FdCP3irJAplu%2BEpctbDpEcgsI4KprSN0mb6ZtagG1ARLUBA4XUQCTVSQI449tRHrk49h2ZF8kCnXBjPo%2BLR5ZdHY3lZQFzpuIcUhBssfAtnkCes1x22rdFMe8FdtqeKBeiQ6K6MDjUUqBtJmOfv8Fa5t76UpduW84Czk%2FpfhMBdRt0IlOFX7X7Dc%2FKgGGiNK7JBfmvPfMNCaV%2FhVI%2Bc8H5OnuuYAJ6DgqUxOWA6o832RytIbVTBGq28ANeygTOs2WyG7lIyzZ0WEpPiSSiCNB5EwKQK2YPnQl2ItnZoe5ybfXNVkab4pgSId0abMD1zEu2bWPCWOfFuMMHyn8QGOqUBIMytZnXcvw60JFXV4oCnkh1iMvROxJnNsOACeqJtR1rHOOBinbwyTrtUQLjEsbMYZHvurLF21T%2BiI0J7IWMmWa76omo0sWGW%2FCyXX18dBPMnwbW7YQFbC0hLMLiZmukhzUDMk%2BmfmeOTyAVKcrwOzOKgeSJmwZxh51iuvcjS8vs8jYLJcypbP8WjJBm0EcGFmSp0SsY%2F4RZ8K4Vh9OCF6pJyK4wq&X-Amz-Signature=08e21e445a56e0ef593af98f48ff98a5f6752539370216c78a462637a8ed2542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF76HEZQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCQ68TBQb6TTIiz7qrbe8IVFvaxW9g3eAKwhrHEY5ihvAIgVdHMwRpa8Fm%2FBfzdQFOFpnAhfbFLQzJDz3qyHtfz3BUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI56FAF6fuiiSBO%2BdSrcA%2F5QPQVWw94%2BRDj%2B7CT105%2FYa1dwGbHFsee1%2BvQ4jntFvYArE0PTwIeiCzd5ZRa6Qlg7X%2FnSzK9RfmZ0y3BGQEC%2BLe5OF0Hy%2BxUsyhfCdREl%2BBjTLYtS6tAhm6fyX%2FAyhHevP3rkCgdk%2FtigjzVS9VpPT4zrq9kTncTorFQ0fWHghBwt1uUDIEP7HOaQVAOfFXCH%2F0j%2FKkdXah52i6UBURBQpAXiK%2Bdh2IZ30J7YA9ez401nlLGUIDKGrPBiR%2Fl64PVLdFLH6JL3r1aChxwsWD3XLiiWda%2BGl9%2BX9yZOdpaqC7oC5%2FdCP3irJAplu%2BEpctbDpEcgsI4KprSN0mb6ZtagG1ARLUBA4XUQCTVSQI449tRHrk49h2ZF8kCnXBjPo%2BLR5ZdHY3lZQFzpuIcUhBssfAtnkCes1x22rdFMe8FdtqeKBeiQ6K6MDjUUqBtJmOfv8Fa5t76UpduW84Czk%2FpfhMBdRt0IlOFX7X7Dc%2FKgGGiNK7JBfmvPfMNCaV%2FhVI%2Bc8H5OnuuYAJ6DgqUxOWA6o832RytIbVTBGq28ANeygTOs2WyG7lIyzZ0WEpPiSSiCNB5EwKQK2YPnQl2ItnZoe5ybfXNVkab4pgSId0abMD1zEu2bWPCWOfFuMMHyn8QGOqUBIMytZnXcvw60JFXV4oCnkh1iMvROxJnNsOACeqJtR1rHOOBinbwyTrtUQLjEsbMYZHvurLF21T%2BiI0J7IWMmWa76omo0sWGW%2FCyXX18dBPMnwbW7YQFbC0hLMLiZmukhzUDMk%2BmfmeOTyAVKcrwOzOKgeSJmwZxh51iuvcjS8vs8jYLJcypbP8WjJBm0EcGFmSp0SsY%2F4RZ8K4Vh9OCF6pJyK4wq&X-Amz-Signature=0e9e74799d81a41a3ebc426e9b72adbc2b7b75e65e40a09e9e80e37b89cc5a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF76HEZQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCQ68TBQb6TTIiz7qrbe8IVFvaxW9g3eAKwhrHEY5ihvAIgVdHMwRpa8Fm%2FBfzdQFOFpnAhfbFLQzJDz3qyHtfz3BUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI56FAF6fuiiSBO%2BdSrcA%2F5QPQVWw94%2BRDj%2B7CT105%2FYa1dwGbHFsee1%2BvQ4jntFvYArE0PTwIeiCzd5ZRa6Qlg7X%2FnSzK9RfmZ0y3BGQEC%2BLe5OF0Hy%2BxUsyhfCdREl%2BBjTLYtS6tAhm6fyX%2FAyhHevP3rkCgdk%2FtigjzVS9VpPT4zrq9kTncTorFQ0fWHghBwt1uUDIEP7HOaQVAOfFXCH%2F0j%2FKkdXah52i6UBURBQpAXiK%2Bdh2IZ30J7YA9ez401nlLGUIDKGrPBiR%2Fl64PVLdFLH6JL3r1aChxwsWD3XLiiWda%2BGl9%2BX9yZOdpaqC7oC5%2FdCP3irJAplu%2BEpctbDpEcgsI4KprSN0mb6ZtagG1ARLUBA4XUQCTVSQI449tRHrk49h2ZF8kCnXBjPo%2BLR5ZdHY3lZQFzpuIcUhBssfAtnkCes1x22rdFMe8FdtqeKBeiQ6K6MDjUUqBtJmOfv8Fa5t76UpduW84Czk%2FpfhMBdRt0IlOFX7X7Dc%2FKgGGiNK7JBfmvPfMNCaV%2FhVI%2Bc8H5OnuuYAJ6DgqUxOWA6o832RytIbVTBGq28ANeygTOs2WyG7lIyzZ0WEpPiSSiCNB5EwKQK2YPnQl2ItnZoe5ybfXNVkab4pgSId0abMD1zEu2bWPCWOfFuMMHyn8QGOqUBIMytZnXcvw60JFXV4oCnkh1iMvROxJnNsOACeqJtR1rHOOBinbwyTrtUQLjEsbMYZHvurLF21T%2BiI0J7IWMmWa76omo0sWGW%2FCyXX18dBPMnwbW7YQFbC0hLMLiZmukhzUDMk%2BmfmeOTyAVKcrwOzOKgeSJmwZxh51iuvcjS8vs8jYLJcypbP8WjJBm0EcGFmSp0SsY%2F4RZ8K4Vh9OCF6pJyK4wq&X-Amz-Signature=6899ce7e2828f2274ae5f811b8587fb8229470805293bae236fecba5b93c162f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF76HEZQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T231010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCQ68TBQb6TTIiz7qrbe8IVFvaxW9g3eAKwhrHEY5ihvAIgVdHMwRpa8Fm%2FBfzdQFOFpnAhfbFLQzJDz3qyHtfz3BUqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI56FAF6fuiiSBO%2BdSrcA%2F5QPQVWw94%2BRDj%2B7CT105%2FYa1dwGbHFsee1%2BvQ4jntFvYArE0PTwIeiCzd5ZRa6Qlg7X%2FnSzK9RfmZ0y3BGQEC%2BLe5OF0Hy%2BxUsyhfCdREl%2BBjTLYtS6tAhm6fyX%2FAyhHevP3rkCgdk%2FtigjzVS9VpPT4zrq9kTncTorFQ0fWHghBwt1uUDIEP7HOaQVAOfFXCH%2F0j%2FKkdXah52i6UBURBQpAXiK%2Bdh2IZ30J7YA9ez401nlLGUIDKGrPBiR%2Fl64PVLdFLH6JL3r1aChxwsWD3XLiiWda%2BGl9%2BX9yZOdpaqC7oC5%2FdCP3irJAplu%2BEpctbDpEcgsI4KprSN0mb6ZtagG1ARLUBA4XUQCTVSQI449tRHrk49h2ZF8kCnXBjPo%2BLR5ZdHY3lZQFzpuIcUhBssfAtnkCes1x22rdFMe8FdtqeKBeiQ6K6MDjUUqBtJmOfv8Fa5t76UpduW84Czk%2FpfhMBdRt0IlOFX7X7Dc%2FKgGGiNK7JBfmvPfMNCaV%2FhVI%2Bc8H5OnuuYAJ6DgqUxOWA6o832RytIbVTBGq28ANeygTOs2WyG7lIyzZ0WEpPiSSiCNB5EwKQK2YPnQl2ItnZoe5ybfXNVkab4pgSId0abMD1zEu2bWPCWOfFuMMHyn8QGOqUBIMytZnXcvw60JFXV4oCnkh1iMvROxJnNsOACeqJtR1rHOOBinbwyTrtUQLjEsbMYZHvurLF21T%2BiI0J7IWMmWa76omo0sWGW%2FCyXX18dBPMnwbW7YQFbC0hLMLiZmukhzUDMk%2BmfmeOTyAVKcrwOzOKgeSJmwZxh51iuvcjS8vs8jYLJcypbP8WjJBm0EcGFmSp0SsY%2F4RZ8K4Vh9OCF6pJyK4wq&X-Amz-Signature=8af0a7dd94a9655b699090fcbbd554551769f9d3035ecb516c278a029ea6dc1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
