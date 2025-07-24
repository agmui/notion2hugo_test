---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-24T10:35:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-24T10:35:00.000Z"
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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47WJYKL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDx1woW1QHaCcTr7yvXOW7EcINPx5q50AUIfFpKKXtFlQIhAMa9gEFgJ02%2FFf%2FLB%2F4PXvJfRdLFnwRUYAP8OZCrk8j6Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzAaUOqFBgOvWeCOwkq3AOsDID%2BizlCe%2Fe%2BwRM1s3GbZ1FSkESwEUiDp8gZHQVD4PvqZ9vZrNqd7fN%2BuoKZPR7Cxvu717Zs26eXxt3xzQtijiC5HwVMPr0Li2%2FQd%2BfmNO98cTj4BwDPTRGDsMvLxryq5XuYctDzYB7bStzGaPsigCkw0Yb9fCKcpbJ2KqYMcpRh9xZDUzCpK9%2Bb11CLYovudmvgtUEzPi3rQPhiLxJP4XozKQOuNC1mF2HGMdpLW4aI6X1akz2B67G33hFhWwZ6%2F7aLRmQxJ8eXFAyRzIOz0vFjB6ekIqmeo4zN0bnDi%2FEP8%2BzuknZZ%2FV4sEs31lHs%2F3cJM2S%2FLvmAIKqjx6l5eWHbNTS0YuSP2f4TlqGAZLO99%2B4nb21nj%2FP7ZoMuG3k%2BLPS%2ByKrOW%2BBsWQxs%2FPnJ7ZaW%2FidEqPcflqP3%2BZn0KN%2BudfQTSzGhn9dgp1SCOFMDhuYYowq5Ew6tCTHcnLbWmURhKxTaMsCowZXXENjfWXuo%2F9caO5R1oWeVUXBgpNEwYlUtcIshb4%2Bi9rE2E57iqev4CnXXhn96ntd8ev%2BDZMJQOC0LlcdjyxoDjbXiuSgm1p6cPjKuLdVyVp69T0UTwc3e6zzLhXYbZEVDd7qNZ5LQUMyRCeCqlX1KKMDD804nEBjqkAUJ8r6Z0F%2F2NVExsfxG78jwkc3FDoKlNSaX2IQkrTrR9RUSrwO%2BoEQBRrBsus0ppJ6shIXDy7fIdyynIiZmZx76iYvj0xisl0sf2Z2thLwx2l9keOOPHFYBGkynq6kUqHG%2BKBIANN7UMjD9jcj0RlnJEpATuZRBXpkmNL%2BdBWAvihHW8IV0Fv1nfks3vKj9Vvi%2F60fy4UbCgEkgQALtAeGr9Zm5m&X-Amz-Signature=7f5d259d75ca85a23f10523e8d88433d7a29aac25a42f851eba8ea95c496bffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47WJYKL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDx1woW1QHaCcTr7yvXOW7EcINPx5q50AUIfFpKKXtFlQIhAMa9gEFgJ02%2FFf%2FLB%2F4PXvJfRdLFnwRUYAP8OZCrk8j6Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzAaUOqFBgOvWeCOwkq3AOsDID%2BizlCe%2Fe%2BwRM1s3GbZ1FSkESwEUiDp8gZHQVD4PvqZ9vZrNqd7fN%2BuoKZPR7Cxvu717Zs26eXxt3xzQtijiC5HwVMPr0Li2%2FQd%2BfmNO98cTj4BwDPTRGDsMvLxryq5XuYctDzYB7bStzGaPsigCkw0Yb9fCKcpbJ2KqYMcpRh9xZDUzCpK9%2Bb11CLYovudmvgtUEzPi3rQPhiLxJP4XozKQOuNC1mF2HGMdpLW4aI6X1akz2B67G33hFhWwZ6%2F7aLRmQxJ8eXFAyRzIOz0vFjB6ekIqmeo4zN0bnDi%2FEP8%2BzuknZZ%2FV4sEs31lHs%2F3cJM2S%2FLvmAIKqjx6l5eWHbNTS0YuSP2f4TlqGAZLO99%2B4nb21nj%2FP7ZoMuG3k%2BLPS%2ByKrOW%2BBsWQxs%2FPnJ7ZaW%2FidEqPcflqP3%2BZn0KN%2BudfQTSzGhn9dgp1SCOFMDhuYYowq5Ew6tCTHcnLbWmURhKxTaMsCowZXXENjfWXuo%2F9caO5R1oWeVUXBgpNEwYlUtcIshb4%2Bi9rE2E57iqev4CnXXhn96ntd8ev%2BDZMJQOC0LlcdjyxoDjbXiuSgm1p6cPjKuLdVyVp69T0UTwc3e6zzLhXYbZEVDd7qNZ5LQUMyRCeCqlX1KKMDD804nEBjqkAUJ8r6Z0F%2F2NVExsfxG78jwkc3FDoKlNSaX2IQkrTrR9RUSrwO%2BoEQBRrBsus0ppJ6shIXDy7fIdyynIiZmZx76iYvj0xisl0sf2Z2thLwx2l9keOOPHFYBGkynq6kUqHG%2BKBIANN7UMjD9jcj0RlnJEpATuZRBXpkmNL%2BdBWAvihHW8IV0Fv1nfks3vKj9Vvi%2F60fy4UbCgEkgQALtAeGr9Zm5m&X-Amz-Signature=0087b982816d34b9741a28749b9ad5564cce6eb7e2289a57eb1bde926dfbb2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47WJYKL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDx1woW1QHaCcTr7yvXOW7EcINPx5q50AUIfFpKKXtFlQIhAMa9gEFgJ02%2FFf%2FLB%2F4PXvJfRdLFnwRUYAP8OZCrk8j6Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzAaUOqFBgOvWeCOwkq3AOsDID%2BizlCe%2Fe%2BwRM1s3GbZ1FSkESwEUiDp8gZHQVD4PvqZ9vZrNqd7fN%2BuoKZPR7Cxvu717Zs26eXxt3xzQtijiC5HwVMPr0Li2%2FQd%2BfmNO98cTj4BwDPTRGDsMvLxryq5XuYctDzYB7bStzGaPsigCkw0Yb9fCKcpbJ2KqYMcpRh9xZDUzCpK9%2Bb11CLYovudmvgtUEzPi3rQPhiLxJP4XozKQOuNC1mF2HGMdpLW4aI6X1akz2B67G33hFhWwZ6%2F7aLRmQxJ8eXFAyRzIOz0vFjB6ekIqmeo4zN0bnDi%2FEP8%2BzuknZZ%2FV4sEs31lHs%2F3cJM2S%2FLvmAIKqjx6l5eWHbNTS0YuSP2f4TlqGAZLO99%2B4nb21nj%2FP7ZoMuG3k%2BLPS%2ByKrOW%2BBsWQxs%2FPnJ7ZaW%2FidEqPcflqP3%2BZn0KN%2BudfQTSzGhn9dgp1SCOFMDhuYYowq5Ew6tCTHcnLbWmURhKxTaMsCowZXXENjfWXuo%2F9caO5R1oWeVUXBgpNEwYlUtcIshb4%2Bi9rE2E57iqev4CnXXhn96ntd8ev%2BDZMJQOC0LlcdjyxoDjbXiuSgm1p6cPjKuLdVyVp69T0UTwc3e6zzLhXYbZEVDd7qNZ5LQUMyRCeCqlX1KKMDD804nEBjqkAUJ8r6Z0F%2F2NVExsfxG78jwkc3FDoKlNSaX2IQkrTrR9RUSrwO%2BoEQBRrBsus0ppJ6shIXDy7fIdyynIiZmZx76iYvj0xisl0sf2Z2thLwx2l9keOOPHFYBGkynq6kUqHG%2BKBIANN7UMjD9jcj0RlnJEpATuZRBXpkmNL%2BdBWAvihHW8IV0Fv1nfks3vKj9Vvi%2F60fy4UbCgEkgQALtAeGr9Zm5m&X-Amz-Signature=4148630893f1d8721d040e433f35436d17e2695ce045ae4a9f35ee38fa570a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47WJYKL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDx1woW1QHaCcTr7yvXOW7EcINPx5q50AUIfFpKKXtFlQIhAMa9gEFgJ02%2FFf%2FLB%2F4PXvJfRdLFnwRUYAP8OZCrk8j6Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzAaUOqFBgOvWeCOwkq3AOsDID%2BizlCe%2Fe%2BwRM1s3GbZ1FSkESwEUiDp8gZHQVD4PvqZ9vZrNqd7fN%2BuoKZPR7Cxvu717Zs26eXxt3xzQtijiC5HwVMPr0Li2%2FQd%2BfmNO98cTj4BwDPTRGDsMvLxryq5XuYctDzYB7bStzGaPsigCkw0Yb9fCKcpbJ2KqYMcpRh9xZDUzCpK9%2Bb11CLYovudmvgtUEzPi3rQPhiLxJP4XozKQOuNC1mF2HGMdpLW4aI6X1akz2B67G33hFhWwZ6%2F7aLRmQxJ8eXFAyRzIOz0vFjB6ekIqmeo4zN0bnDi%2FEP8%2BzuknZZ%2FV4sEs31lHs%2F3cJM2S%2FLvmAIKqjx6l5eWHbNTS0YuSP2f4TlqGAZLO99%2B4nb21nj%2FP7ZoMuG3k%2BLPS%2ByKrOW%2BBsWQxs%2FPnJ7ZaW%2FidEqPcflqP3%2BZn0KN%2BudfQTSzGhn9dgp1SCOFMDhuYYowq5Ew6tCTHcnLbWmURhKxTaMsCowZXXENjfWXuo%2F9caO5R1oWeVUXBgpNEwYlUtcIshb4%2Bi9rE2E57iqev4CnXXhn96ntd8ev%2BDZMJQOC0LlcdjyxoDjbXiuSgm1p6cPjKuLdVyVp69T0UTwc3e6zzLhXYbZEVDd7qNZ5LQUMyRCeCqlX1KKMDD804nEBjqkAUJ8r6Z0F%2F2NVExsfxG78jwkc3FDoKlNSaX2IQkrTrR9RUSrwO%2BoEQBRrBsus0ppJ6shIXDy7fIdyynIiZmZx76iYvj0xisl0sf2Z2thLwx2l9keOOPHFYBGkynq6kUqHG%2BKBIANN7UMjD9jcj0RlnJEpATuZRBXpkmNL%2BdBWAvihHW8IV0Fv1nfks3vKj9Vvi%2F60fy4UbCgEkgQALtAeGr9Zm5m&X-Amz-Signature=6c91f8bb87af77c49566e16258e69ea6f3620b9a6c3ae28c6f0db5596e910b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47WJYKL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDx1woW1QHaCcTr7yvXOW7EcINPx5q50AUIfFpKKXtFlQIhAMa9gEFgJ02%2FFf%2FLB%2F4PXvJfRdLFnwRUYAP8OZCrk8j6Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzAaUOqFBgOvWeCOwkq3AOsDID%2BizlCe%2Fe%2BwRM1s3GbZ1FSkESwEUiDp8gZHQVD4PvqZ9vZrNqd7fN%2BuoKZPR7Cxvu717Zs26eXxt3xzQtijiC5HwVMPr0Li2%2FQd%2BfmNO98cTj4BwDPTRGDsMvLxryq5XuYctDzYB7bStzGaPsigCkw0Yb9fCKcpbJ2KqYMcpRh9xZDUzCpK9%2Bb11CLYovudmvgtUEzPi3rQPhiLxJP4XozKQOuNC1mF2HGMdpLW4aI6X1akz2B67G33hFhWwZ6%2F7aLRmQxJ8eXFAyRzIOz0vFjB6ekIqmeo4zN0bnDi%2FEP8%2BzuknZZ%2FV4sEs31lHs%2F3cJM2S%2FLvmAIKqjx6l5eWHbNTS0YuSP2f4TlqGAZLO99%2B4nb21nj%2FP7ZoMuG3k%2BLPS%2ByKrOW%2BBsWQxs%2FPnJ7ZaW%2FidEqPcflqP3%2BZn0KN%2BudfQTSzGhn9dgp1SCOFMDhuYYowq5Ew6tCTHcnLbWmURhKxTaMsCowZXXENjfWXuo%2F9caO5R1oWeVUXBgpNEwYlUtcIshb4%2Bi9rE2E57iqev4CnXXhn96ntd8ev%2BDZMJQOC0LlcdjyxoDjbXiuSgm1p6cPjKuLdVyVp69T0UTwc3e6zzLhXYbZEVDd7qNZ5LQUMyRCeCqlX1KKMDD804nEBjqkAUJ8r6Z0F%2F2NVExsfxG78jwkc3FDoKlNSaX2IQkrTrR9RUSrwO%2BoEQBRrBsus0ppJ6shIXDy7fIdyynIiZmZx76iYvj0xisl0sf2Z2thLwx2l9keOOPHFYBGkynq6kUqHG%2BKBIANN7UMjD9jcj0RlnJEpATuZRBXpkmNL%2BdBWAvihHW8IV0Fv1nfks3vKj9Vvi%2F60fy4UbCgEkgQALtAeGr9Zm5m&X-Amz-Signature=d70d8ecc3b9787f17f1aaf3512d0d31b1ad89c07d3bfe6502612eee42655efc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47WJYKL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDx1woW1QHaCcTr7yvXOW7EcINPx5q50AUIfFpKKXtFlQIhAMa9gEFgJ02%2FFf%2FLB%2F4PXvJfRdLFnwRUYAP8OZCrk8j6Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzAaUOqFBgOvWeCOwkq3AOsDID%2BizlCe%2Fe%2BwRM1s3GbZ1FSkESwEUiDp8gZHQVD4PvqZ9vZrNqd7fN%2BuoKZPR7Cxvu717Zs26eXxt3xzQtijiC5HwVMPr0Li2%2FQd%2BfmNO98cTj4BwDPTRGDsMvLxryq5XuYctDzYB7bStzGaPsigCkw0Yb9fCKcpbJ2KqYMcpRh9xZDUzCpK9%2Bb11CLYovudmvgtUEzPi3rQPhiLxJP4XozKQOuNC1mF2HGMdpLW4aI6X1akz2B67G33hFhWwZ6%2F7aLRmQxJ8eXFAyRzIOz0vFjB6ekIqmeo4zN0bnDi%2FEP8%2BzuknZZ%2FV4sEs31lHs%2F3cJM2S%2FLvmAIKqjx6l5eWHbNTS0YuSP2f4TlqGAZLO99%2B4nb21nj%2FP7ZoMuG3k%2BLPS%2ByKrOW%2BBsWQxs%2FPnJ7ZaW%2FidEqPcflqP3%2BZn0KN%2BudfQTSzGhn9dgp1SCOFMDhuYYowq5Ew6tCTHcnLbWmURhKxTaMsCowZXXENjfWXuo%2F9caO5R1oWeVUXBgpNEwYlUtcIshb4%2Bi9rE2E57iqev4CnXXhn96ntd8ev%2BDZMJQOC0LlcdjyxoDjbXiuSgm1p6cPjKuLdVyVp69T0UTwc3e6zzLhXYbZEVDd7qNZ5LQUMyRCeCqlX1KKMDD804nEBjqkAUJ8r6Z0F%2F2NVExsfxG78jwkc3FDoKlNSaX2IQkrTrR9RUSrwO%2BoEQBRrBsus0ppJ6shIXDy7fIdyynIiZmZx76iYvj0xisl0sf2Z2thLwx2l9keOOPHFYBGkynq6kUqHG%2BKBIANN7UMjD9jcj0RlnJEpATuZRBXpkmNL%2BdBWAvihHW8IV0Fv1nfks3vKj9Vvi%2F60fy4UbCgEkgQALtAeGr9Zm5m&X-Amz-Signature=a102f85224148efdf0b1d83b0d2c397a6a6753e914f3da310698a542f47c80ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47WJYKL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDx1woW1QHaCcTr7yvXOW7EcINPx5q50AUIfFpKKXtFlQIhAMa9gEFgJ02%2FFf%2FLB%2F4PXvJfRdLFnwRUYAP8OZCrk8j6Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzAaUOqFBgOvWeCOwkq3AOsDID%2BizlCe%2Fe%2BwRM1s3GbZ1FSkESwEUiDp8gZHQVD4PvqZ9vZrNqd7fN%2BuoKZPR7Cxvu717Zs26eXxt3xzQtijiC5HwVMPr0Li2%2FQd%2BfmNO98cTj4BwDPTRGDsMvLxryq5XuYctDzYB7bStzGaPsigCkw0Yb9fCKcpbJ2KqYMcpRh9xZDUzCpK9%2Bb11CLYovudmvgtUEzPi3rQPhiLxJP4XozKQOuNC1mF2HGMdpLW4aI6X1akz2B67G33hFhWwZ6%2F7aLRmQxJ8eXFAyRzIOz0vFjB6ekIqmeo4zN0bnDi%2FEP8%2BzuknZZ%2FV4sEs31lHs%2F3cJM2S%2FLvmAIKqjx6l5eWHbNTS0YuSP2f4TlqGAZLO99%2B4nb21nj%2FP7ZoMuG3k%2BLPS%2ByKrOW%2BBsWQxs%2FPnJ7ZaW%2FidEqPcflqP3%2BZn0KN%2BudfQTSzGhn9dgp1SCOFMDhuYYowq5Ew6tCTHcnLbWmURhKxTaMsCowZXXENjfWXuo%2F9caO5R1oWeVUXBgpNEwYlUtcIshb4%2Bi9rE2E57iqev4CnXXhn96ntd8ev%2BDZMJQOC0LlcdjyxoDjbXiuSgm1p6cPjKuLdVyVp69T0UTwc3e6zzLhXYbZEVDd7qNZ5LQUMyRCeCqlX1KKMDD804nEBjqkAUJ8r6Z0F%2F2NVExsfxG78jwkc3FDoKlNSaX2IQkrTrR9RUSrwO%2BoEQBRrBsus0ppJ6shIXDy7fIdyynIiZmZx76iYvj0xisl0sf2Z2thLwx2l9keOOPHFYBGkynq6kUqHG%2BKBIANN7UMjD9jcj0RlnJEpATuZRBXpkmNL%2BdBWAvihHW8IV0Fv1nfks3vKj9Vvi%2F60fy4UbCgEkgQALtAeGr9Zm5m&X-Amz-Signature=c88fa816c4aa2d0a119e0352d31126d29628ef3eb50c75c19d39c45b202ef26e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47WJYKL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDx1woW1QHaCcTr7yvXOW7EcINPx5q50AUIfFpKKXtFlQIhAMa9gEFgJ02%2FFf%2FLB%2F4PXvJfRdLFnwRUYAP8OZCrk8j6Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzAaUOqFBgOvWeCOwkq3AOsDID%2BizlCe%2Fe%2BwRM1s3GbZ1FSkESwEUiDp8gZHQVD4PvqZ9vZrNqd7fN%2BuoKZPR7Cxvu717Zs26eXxt3xzQtijiC5HwVMPr0Li2%2FQd%2BfmNO98cTj4BwDPTRGDsMvLxryq5XuYctDzYB7bStzGaPsigCkw0Yb9fCKcpbJ2KqYMcpRh9xZDUzCpK9%2Bb11CLYovudmvgtUEzPi3rQPhiLxJP4XozKQOuNC1mF2HGMdpLW4aI6X1akz2B67G33hFhWwZ6%2F7aLRmQxJ8eXFAyRzIOz0vFjB6ekIqmeo4zN0bnDi%2FEP8%2BzuknZZ%2FV4sEs31lHs%2F3cJM2S%2FLvmAIKqjx6l5eWHbNTS0YuSP2f4TlqGAZLO99%2B4nb21nj%2FP7ZoMuG3k%2BLPS%2ByKrOW%2BBsWQxs%2FPnJ7ZaW%2FidEqPcflqP3%2BZn0KN%2BudfQTSzGhn9dgp1SCOFMDhuYYowq5Ew6tCTHcnLbWmURhKxTaMsCowZXXENjfWXuo%2F9caO5R1oWeVUXBgpNEwYlUtcIshb4%2Bi9rE2E57iqev4CnXXhn96ntd8ev%2BDZMJQOC0LlcdjyxoDjbXiuSgm1p6cPjKuLdVyVp69T0UTwc3e6zzLhXYbZEVDd7qNZ5LQUMyRCeCqlX1KKMDD804nEBjqkAUJ8r6Z0F%2F2NVExsfxG78jwkc3FDoKlNSaX2IQkrTrR9RUSrwO%2BoEQBRrBsus0ppJ6shIXDy7fIdyynIiZmZx76iYvj0xisl0sf2Z2thLwx2l9keOOPHFYBGkynq6kUqHG%2BKBIANN7UMjD9jcj0RlnJEpATuZRBXpkmNL%2BdBWAvihHW8IV0Fv1nfks3vKj9Vvi%2F60fy4UbCgEkgQALtAeGr9Zm5m&X-Amz-Signature=c2089434816ea0536af74119310230ea6f446c9e34e388db2bef98d477f75b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V47WJYKL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T181323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDx1woW1QHaCcTr7yvXOW7EcINPx5q50AUIfFpKKXtFlQIhAMa9gEFgJ02%2FFf%2FLB%2F4PXvJfRdLFnwRUYAP8OZCrk8j6Kv8DCDIQABoMNjM3NDIzMTgzODA1IgzAaUOqFBgOvWeCOwkq3AOsDID%2BizlCe%2Fe%2BwRM1s3GbZ1FSkESwEUiDp8gZHQVD4PvqZ9vZrNqd7fN%2BuoKZPR7Cxvu717Zs26eXxt3xzQtijiC5HwVMPr0Li2%2FQd%2BfmNO98cTj4BwDPTRGDsMvLxryq5XuYctDzYB7bStzGaPsigCkw0Yb9fCKcpbJ2KqYMcpRh9xZDUzCpK9%2Bb11CLYovudmvgtUEzPi3rQPhiLxJP4XozKQOuNC1mF2HGMdpLW4aI6X1akz2B67G33hFhWwZ6%2F7aLRmQxJ8eXFAyRzIOz0vFjB6ekIqmeo4zN0bnDi%2FEP8%2BzuknZZ%2FV4sEs31lHs%2F3cJM2S%2FLvmAIKqjx6l5eWHbNTS0YuSP2f4TlqGAZLO99%2B4nb21nj%2FP7ZoMuG3k%2BLPS%2ByKrOW%2BBsWQxs%2FPnJ7ZaW%2FidEqPcflqP3%2BZn0KN%2BudfQTSzGhn9dgp1SCOFMDhuYYowq5Ew6tCTHcnLbWmURhKxTaMsCowZXXENjfWXuo%2F9caO5R1oWeVUXBgpNEwYlUtcIshb4%2Bi9rE2E57iqev4CnXXhn96ntd8ev%2BDZMJQOC0LlcdjyxoDjbXiuSgm1p6cPjKuLdVyVp69T0UTwc3e6zzLhXYbZEVDd7qNZ5LQUMyRCeCqlX1KKMDD804nEBjqkAUJ8r6Z0F%2F2NVExsfxG78jwkc3FDoKlNSaX2IQkrTrR9RUSrwO%2BoEQBRrBsus0ppJ6shIXDy7fIdyynIiZmZx76iYvj0xisl0sf2Z2thLwx2l9keOOPHFYBGkynq6kUqHG%2BKBIANN7UMjD9jcj0RlnJEpATuZRBXpkmNL%2BdBWAvihHW8IV0Fv1nfks3vKj9Vvi%2F60fy4UbCgEkgQALtAeGr9Zm5m&X-Amz-Signature=926e020a536bf6d12571bf19b72cc6e5d1585603ffdeed9a6ecb2f171d08324f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
