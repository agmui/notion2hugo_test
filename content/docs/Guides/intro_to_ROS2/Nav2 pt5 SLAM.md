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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXEEMVP6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGBvAZW%2FCpZ1bQllRYubWSipLyGT%2B0MJbsYzkTkBn7NNAiEA75IjtWu43b3wHxGxeolThSjOsMuwdAoRCnUnG6LZCO4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMIoNq4Dp3Pv9iQHXSrcA0QZGh3WwAIbrywdMq8GkUg8Z94azDGqtP6kNaGVr8g4TN2f4Oj9Nnq%2FBH7BHX719kxjSAsdl81e7o9WhAGl4jcKeOT%2BDzTk5Oe93yqg2wWXi407P5mmt2BgESV1Sx4YnsD%2FC7CEzMEwvANfBHlNMkXmLs7VTPPUaT2l34t7k7VlOPxM2DZnXKxBh34N%2F53d0AuhDz4LMlbuECRfT005FfJFXVz03jDP6sBegX7kq0Wu8vtSgl8FPb6ke6WoIRM256WZgJRnogCt%2F6P3OnuKEWfveQJfSoBLg%2F%2BumLRqVoh0o%2BGSZ6KWL066OZCVyZo8aZy5hcLGesmzTk5FVj5146GPCUSR8fDcQKXnZAEGEWp%2BWOZohDzSGAWa276SCDERmyAQP5pvK0TseZVThgK93dSDTZY7XKgk21h7GWniKJKp3y%2FBtp%2BLjH5KAEZBkEJ3sTygscMCi7pq5iTMKcyhChviiQDUnEYlymPCAX4raji2%2FA8qkj6P7dW2GOnh4EaXmbPHltotdWvl%2FvPAe54kJHjuCFOfc7U1xeJH%2FEJ0pjsXPMqAI9598zCpmAcGnoMIrBBd6zXjkolQjgraNE1NSQbVZlTPX1hF0c1BTyIWN2qjSJmSBfmJ5LQQQWcfMPral8QGOqUBsozkDKEDx7mW%2BEPpvRnpYuxfW6JOIS%2FZ7zlU2IsVZqu6Q9CvMOtxAhob5IDh%2FpILRPXq0CDJ4h6n6JL5Hyy0D4%2BFupaEzD5g59VP5YGpigIjH4j5Fq6XbkBng1RdspA1KD21tcmRRpH6ic0fDSlLG%2BgdRk9dFZ1kKf%2BQZFP%2FjM2bNWpxxJ%2BXZOJ5QMBoco4F95qYVBMLaIzayZacPkdrklExuxOR&X-Amz-Signature=a096545764827550fa537ea3622d78bf3642acf4d6a2e374477eec87347c730e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXEEMVP6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGBvAZW%2FCpZ1bQllRYubWSipLyGT%2B0MJbsYzkTkBn7NNAiEA75IjtWu43b3wHxGxeolThSjOsMuwdAoRCnUnG6LZCO4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMIoNq4Dp3Pv9iQHXSrcA0QZGh3WwAIbrywdMq8GkUg8Z94azDGqtP6kNaGVr8g4TN2f4Oj9Nnq%2FBH7BHX719kxjSAsdl81e7o9WhAGl4jcKeOT%2BDzTk5Oe93yqg2wWXi407P5mmt2BgESV1Sx4YnsD%2FC7CEzMEwvANfBHlNMkXmLs7VTPPUaT2l34t7k7VlOPxM2DZnXKxBh34N%2F53d0AuhDz4LMlbuECRfT005FfJFXVz03jDP6sBegX7kq0Wu8vtSgl8FPb6ke6WoIRM256WZgJRnogCt%2F6P3OnuKEWfveQJfSoBLg%2F%2BumLRqVoh0o%2BGSZ6KWL066OZCVyZo8aZy5hcLGesmzTk5FVj5146GPCUSR8fDcQKXnZAEGEWp%2BWOZohDzSGAWa276SCDERmyAQP5pvK0TseZVThgK93dSDTZY7XKgk21h7GWniKJKp3y%2FBtp%2BLjH5KAEZBkEJ3sTygscMCi7pq5iTMKcyhChviiQDUnEYlymPCAX4raji2%2FA8qkj6P7dW2GOnh4EaXmbPHltotdWvl%2FvPAe54kJHjuCFOfc7U1xeJH%2FEJ0pjsXPMqAI9598zCpmAcGnoMIrBBd6zXjkolQjgraNE1NSQbVZlTPX1hF0c1BTyIWN2qjSJmSBfmJ5LQQQWcfMPral8QGOqUBsozkDKEDx7mW%2BEPpvRnpYuxfW6JOIS%2FZ7zlU2IsVZqu6Q9CvMOtxAhob5IDh%2FpILRPXq0CDJ4h6n6JL5Hyy0D4%2BFupaEzD5g59VP5YGpigIjH4j5Fq6XbkBng1RdspA1KD21tcmRRpH6ic0fDSlLG%2BgdRk9dFZ1kKf%2BQZFP%2FjM2bNWpxxJ%2BXZOJ5QMBoco4F95qYVBMLaIzayZacPkdrklExuxOR&X-Amz-Signature=e5f329d253397b1d6af109b5feeabe3779ba0ed1104bbdb58149ba588dccf9b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXEEMVP6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGBvAZW%2FCpZ1bQllRYubWSipLyGT%2B0MJbsYzkTkBn7NNAiEA75IjtWu43b3wHxGxeolThSjOsMuwdAoRCnUnG6LZCO4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMIoNq4Dp3Pv9iQHXSrcA0QZGh3WwAIbrywdMq8GkUg8Z94azDGqtP6kNaGVr8g4TN2f4Oj9Nnq%2FBH7BHX719kxjSAsdl81e7o9WhAGl4jcKeOT%2BDzTk5Oe93yqg2wWXi407P5mmt2BgESV1Sx4YnsD%2FC7CEzMEwvANfBHlNMkXmLs7VTPPUaT2l34t7k7VlOPxM2DZnXKxBh34N%2F53d0AuhDz4LMlbuECRfT005FfJFXVz03jDP6sBegX7kq0Wu8vtSgl8FPb6ke6WoIRM256WZgJRnogCt%2F6P3OnuKEWfveQJfSoBLg%2F%2BumLRqVoh0o%2BGSZ6KWL066OZCVyZo8aZy5hcLGesmzTk5FVj5146GPCUSR8fDcQKXnZAEGEWp%2BWOZohDzSGAWa276SCDERmyAQP5pvK0TseZVThgK93dSDTZY7XKgk21h7GWniKJKp3y%2FBtp%2BLjH5KAEZBkEJ3sTygscMCi7pq5iTMKcyhChviiQDUnEYlymPCAX4raji2%2FA8qkj6P7dW2GOnh4EaXmbPHltotdWvl%2FvPAe54kJHjuCFOfc7U1xeJH%2FEJ0pjsXPMqAI9598zCpmAcGnoMIrBBd6zXjkolQjgraNE1NSQbVZlTPX1hF0c1BTyIWN2qjSJmSBfmJ5LQQQWcfMPral8QGOqUBsozkDKEDx7mW%2BEPpvRnpYuxfW6JOIS%2FZ7zlU2IsVZqu6Q9CvMOtxAhob5IDh%2FpILRPXq0CDJ4h6n6JL5Hyy0D4%2BFupaEzD5g59VP5YGpigIjH4j5Fq6XbkBng1RdspA1KD21tcmRRpH6ic0fDSlLG%2BgdRk9dFZ1kKf%2BQZFP%2FjM2bNWpxxJ%2BXZOJ5QMBoco4F95qYVBMLaIzayZacPkdrklExuxOR&X-Amz-Signature=307dc87220f5b1acc6119d4c71a32ea8a8a6a0e8aa12aee6bce70ee98f7212bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXEEMVP6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGBvAZW%2FCpZ1bQllRYubWSipLyGT%2B0MJbsYzkTkBn7NNAiEA75IjtWu43b3wHxGxeolThSjOsMuwdAoRCnUnG6LZCO4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMIoNq4Dp3Pv9iQHXSrcA0QZGh3WwAIbrywdMq8GkUg8Z94azDGqtP6kNaGVr8g4TN2f4Oj9Nnq%2FBH7BHX719kxjSAsdl81e7o9WhAGl4jcKeOT%2BDzTk5Oe93yqg2wWXi407P5mmt2BgESV1Sx4YnsD%2FC7CEzMEwvANfBHlNMkXmLs7VTPPUaT2l34t7k7VlOPxM2DZnXKxBh34N%2F53d0AuhDz4LMlbuECRfT005FfJFXVz03jDP6sBegX7kq0Wu8vtSgl8FPb6ke6WoIRM256WZgJRnogCt%2F6P3OnuKEWfveQJfSoBLg%2F%2BumLRqVoh0o%2BGSZ6KWL066OZCVyZo8aZy5hcLGesmzTk5FVj5146GPCUSR8fDcQKXnZAEGEWp%2BWOZohDzSGAWa276SCDERmyAQP5pvK0TseZVThgK93dSDTZY7XKgk21h7GWniKJKp3y%2FBtp%2BLjH5KAEZBkEJ3sTygscMCi7pq5iTMKcyhChviiQDUnEYlymPCAX4raji2%2FA8qkj6P7dW2GOnh4EaXmbPHltotdWvl%2FvPAe54kJHjuCFOfc7U1xeJH%2FEJ0pjsXPMqAI9598zCpmAcGnoMIrBBd6zXjkolQjgraNE1NSQbVZlTPX1hF0c1BTyIWN2qjSJmSBfmJ5LQQQWcfMPral8QGOqUBsozkDKEDx7mW%2BEPpvRnpYuxfW6JOIS%2FZ7zlU2IsVZqu6Q9CvMOtxAhob5IDh%2FpILRPXq0CDJ4h6n6JL5Hyy0D4%2BFupaEzD5g59VP5YGpigIjH4j5Fq6XbkBng1RdspA1KD21tcmRRpH6ic0fDSlLG%2BgdRk9dFZ1kKf%2BQZFP%2FjM2bNWpxxJ%2BXZOJ5QMBoco4F95qYVBMLaIzayZacPkdrklExuxOR&X-Amz-Signature=eab0efc05ff153210bfb98fb87d30d4298f2fbe39546e3f0c6fb8ff24b201764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXEEMVP6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGBvAZW%2FCpZ1bQllRYubWSipLyGT%2B0MJbsYzkTkBn7NNAiEA75IjtWu43b3wHxGxeolThSjOsMuwdAoRCnUnG6LZCO4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMIoNq4Dp3Pv9iQHXSrcA0QZGh3WwAIbrywdMq8GkUg8Z94azDGqtP6kNaGVr8g4TN2f4Oj9Nnq%2FBH7BHX719kxjSAsdl81e7o9WhAGl4jcKeOT%2BDzTk5Oe93yqg2wWXi407P5mmt2BgESV1Sx4YnsD%2FC7CEzMEwvANfBHlNMkXmLs7VTPPUaT2l34t7k7VlOPxM2DZnXKxBh34N%2F53d0AuhDz4LMlbuECRfT005FfJFXVz03jDP6sBegX7kq0Wu8vtSgl8FPb6ke6WoIRM256WZgJRnogCt%2F6P3OnuKEWfveQJfSoBLg%2F%2BumLRqVoh0o%2BGSZ6KWL066OZCVyZo8aZy5hcLGesmzTk5FVj5146GPCUSR8fDcQKXnZAEGEWp%2BWOZohDzSGAWa276SCDERmyAQP5pvK0TseZVThgK93dSDTZY7XKgk21h7GWniKJKp3y%2FBtp%2BLjH5KAEZBkEJ3sTygscMCi7pq5iTMKcyhChviiQDUnEYlymPCAX4raji2%2FA8qkj6P7dW2GOnh4EaXmbPHltotdWvl%2FvPAe54kJHjuCFOfc7U1xeJH%2FEJ0pjsXPMqAI9598zCpmAcGnoMIrBBd6zXjkolQjgraNE1NSQbVZlTPX1hF0c1BTyIWN2qjSJmSBfmJ5LQQQWcfMPral8QGOqUBsozkDKEDx7mW%2BEPpvRnpYuxfW6JOIS%2FZ7zlU2IsVZqu6Q9CvMOtxAhob5IDh%2FpILRPXq0CDJ4h6n6JL5Hyy0D4%2BFupaEzD5g59VP5YGpigIjH4j5Fq6XbkBng1RdspA1KD21tcmRRpH6ic0fDSlLG%2BgdRk9dFZ1kKf%2BQZFP%2FjM2bNWpxxJ%2BXZOJ5QMBoco4F95qYVBMLaIzayZacPkdrklExuxOR&X-Amz-Signature=18816f150f72312c0c7de922db1e18a1a779df2609d54d3483fc6441597ec9fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXEEMVP6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGBvAZW%2FCpZ1bQllRYubWSipLyGT%2B0MJbsYzkTkBn7NNAiEA75IjtWu43b3wHxGxeolThSjOsMuwdAoRCnUnG6LZCO4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMIoNq4Dp3Pv9iQHXSrcA0QZGh3WwAIbrywdMq8GkUg8Z94azDGqtP6kNaGVr8g4TN2f4Oj9Nnq%2FBH7BHX719kxjSAsdl81e7o9WhAGl4jcKeOT%2BDzTk5Oe93yqg2wWXi407P5mmt2BgESV1Sx4YnsD%2FC7CEzMEwvANfBHlNMkXmLs7VTPPUaT2l34t7k7VlOPxM2DZnXKxBh34N%2F53d0AuhDz4LMlbuECRfT005FfJFXVz03jDP6sBegX7kq0Wu8vtSgl8FPb6ke6WoIRM256WZgJRnogCt%2F6P3OnuKEWfveQJfSoBLg%2F%2BumLRqVoh0o%2BGSZ6KWL066OZCVyZo8aZy5hcLGesmzTk5FVj5146GPCUSR8fDcQKXnZAEGEWp%2BWOZohDzSGAWa276SCDERmyAQP5pvK0TseZVThgK93dSDTZY7XKgk21h7GWniKJKp3y%2FBtp%2BLjH5KAEZBkEJ3sTygscMCi7pq5iTMKcyhChviiQDUnEYlymPCAX4raji2%2FA8qkj6P7dW2GOnh4EaXmbPHltotdWvl%2FvPAe54kJHjuCFOfc7U1xeJH%2FEJ0pjsXPMqAI9598zCpmAcGnoMIrBBd6zXjkolQjgraNE1NSQbVZlTPX1hF0c1BTyIWN2qjSJmSBfmJ5LQQQWcfMPral8QGOqUBsozkDKEDx7mW%2BEPpvRnpYuxfW6JOIS%2FZ7zlU2IsVZqu6Q9CvMOtxAhob5IDh%2FpILRPXq0CDJ4h6n6JL5Hyy0D4%2BFupaEzD5g59VP5YGpigIjH4j5Fq6XbkBng1RdspA1KD21tcmRRpH6ic0fDSlLG%2BgdRk9dFZ1kKf%2BQZFP%2FjM2bNWpxxJ%2BXZOJ5QMBoco4F95qYVBMLaIzayZacPkdrklExuxOR&X-Amz-Signature=45f04b03c0a76320df06e1e467bc61c4c54ea5f592bea1c46ba5204a064cf148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXEEMVP6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGBvAZW%2FCpZ1bQllRYubWSipLyGT%2B0MJbsYzkTkBn7NNAiEA75IjtWu43b3wHxGxeolThSjOsMuwdAoRCnUnG6LZCO4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMIoNq4Dp3Pv9iQHXSrcA0QZGh3WwAIbrywdMq8GkUg8Z94azDGqtP6kNaGVr8g4TN2f4Oj9Nnq%2FBH7BHX719kxjSAsdl81e7o9WhAGl4jcKeOT%2BDzTk5Oe93yqg2wWXi407P5mmt2BgESV1Sx4YnsD%2FC7CEzMEwvANfBHlNMkXmLs7VTPPUaT2l34t7k7VlOPxM2DZnXKxBh34N%2F53d0AuhDz4LMlbuECRfT005FfJFXVz03jDP6sBegX7kq0Wu8vtSgl8FPb6ke6WoIRM256WZgJRnogCt%2F6P3OnuKEWfveQJfSoBLg%2F%2BumLRqVoh0o%2BGSZ6KWL066OZCVyZo8aZy5hcLGesmzTk5FVj5146GPCUSR8fDcQKXnZAEGEWp%2BWOZohDzSGAWa276SCDERmyAQP5pvK0TseZVThgK93dSDTZY7XKgk21h7GWniKJKp3y%2FBtp%2BLjH5KAEZBkEJ3sTygscMCi7pq5iTMKcyhChviiQDUnEYlymPCAX4raji2%2FA8qkj6P7dW2GOnh4EaXmbPHltotdWvl%2FvPAe54kJHjuCFOfc7U1xeJH%2FEJ0pjsXPMqAI9598zCpmAcGnoMIrBBd6zXjkolQjgraNE1NSQbVZlTPX1hF0c1BTyIWN2qjSJmSBfmJ5LQQQWcfMPral8QGOqUBsozkDKEDx7mW%2BEPpvRnpYuxfW6JOIS%2FZ7zlU2IsVZqu6Q9CvMOtxAhob5IDh%2FpILRPXq0CDJ4h6n6JL5Hyy0D4%2BFupaEzD5g59VP5YGpigIjH4j5Fq6XbkBng1RdspA1KD21tcmRRpH6ic0fDSlLG%2BgdRk9dFZ1kKf%2BQZFP%2FjM2bNWpxxJ%2BXZOJ5QMBoco4F95qYVBMLaIzayZacPkdrklExuxOR&X-Amz-Signature=f4ab7123400e0ef85a59397b1940a8a50f1e9ebd0bc7fe1d05d38d2f4791cdcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXEEMVP6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGBvAZW%2FCpZ1bQllRYubWSipLyGT%2B0MJbsYzkTkBn7NNAiEA75IjtWu43b3wHxGxeolThSjOsMuwdAoRCnUnG6LZCO4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMIoNq4Dp3Pv9iQHXSrcA0QZGh3WwAIbrywdMq8GkUg8Z94azDGqtP6kNaGVr8g4TN2f4Oj9Nnq%2FBH7BHX719kxjSAsdl81e7o9WhAGl4jcKeOT%2BDzTk5Oe93yqg2wWXi407P5mmt2BgESV1Sx4YnsD%2FC7CEzMEwvANfBHlNMkXmLs7VTPPUaT2l34t7k7VlOPxM2DZnXKxBh34N%2F53d0AuhDz4LMlbuECRfT005FfJFXVz03jDP6sBegX7kq0Wu8vtSgl8FPb6ke6WoIRM256WZgJRnogCt%2F6P3OnuKEWfveQJfSoBLg%2F%2BumLRqVoh0o%2BGSZ6KWL066OZCVyZo8aZy5hcLGesmzTk5FVj5146GPCUSR8fDcQKXnZAEGEWp%2BWOZohDzSGAWa276SCDERmyAQP5pvK0TseZVThgK93dSDTZY7XKgk21h7GWniKJKp3y%2FBtp%2BLjH5KAEZBkEJ3sTygscMCi7pq5iTMKcyhChviiQDUnEYlymPCAX4raji2%2FA8qkj6P7dW2GOnh4EaXmbPHltotdWvl%2FvPAe54kJHjuCFOfc7U1xeJH%2FEJ0pjsXPMqAI9598zCpmAcGnoMIrBBd6zXjkolQjgraNE1NSQbVZlTPX1hF0c1BTyIWN2qjSJmSBfmJ5LQQQWcfMPral8QGOqUBsozkDKEDx7mW%2BEPpvRnpYuxfW6JOIS%2FZ7zlU2IsVZqu6Q9CvMOtxAhob5IDh%2FpILRPXq0CDJ4h6n6JL5Hyy0D4%2BFupaEzD5g59VP5YGpigIjH4j5Fq6XbkBng1RdspA1KD21tcmRRpH6ic0fDSlLG%2BgdRk9dFZ1kKf%2BQZFP%2FjM2bNWpxxJ%2BXZOJ5QMBoco4F95qYVBMLaIzayZacPkdrklExuxOR&X-Amz-Signature=13cf34944fda1c08c791d2a6e08d6205b69b60d6a6d8231fe3df4ad5044df31b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXEEMVP6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGBvAZW%2FCpZ1bQllRYubWSipLyGT%2B0MJbsYzkTkBn7NNAiEA75IjtWu43b3wHxGxeolThSjOsMuwdAoRCnUnG6LZCO4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDMIoNq4Dp3Pv9iQHXSrcA0QZGh3WwAIbrywdMq8GkUg8Z94azDGqtP6kNaGVr8g4TN2f4Oj9Nnq%2FBH7BHX719kxjSAsdl81e7o9WhAGl4jcKeOT%2BDzTk5Oe93yqg2wWXi407P5mmt2BgESV1Sx4YnsD%2FC7CEzMEwvANfBHlNMkXmLs7VTPPUaT2l34t7k7VlOPxM2DZnXKxBh34N%2F53d0AuhDz4LMlbuECRfT005FfJFXVz03jDP6sBegX7kq0Wu8vtSgl8FPb6ke6WoIRM256WZgJRnogCt%2F6P3OnuKEWfveQJfSoBLg%2F%2BumLRqVoh0o%2BGSZ6KWL066OZCVyZo8aZy5hcLGesmzTk5FVj5146GPCUSR8fDcQKXnZAEGEWp%2BWOZohDzSGAWa276SCDERmyAQP5pvK0TseZVThgK93dSDTZY7XKgk21h7GWniKJKp3y%2FBtp%2BLjH5KAEZBkEJ3sTygscMCi7pq5iTMKcyhChviiQDUnEYlymPCAX4raji2%2FA8qkj6P7dW2GOnh4EaXmbPHltotdWvl%2FvPAe54kJHjuCFOfc7U1xeJH%2FEJ0pjsXPMqAI9598zCpmAcGnoMIrBBd6zXjkolQjgraNE1NSQbVZlTPX1hF0c1BTyIWN2qjSJmSBfmJ5LQQQWcfMPral8QGOqUBsozkDKEDx7mW%2BEPpvRnpYuxfW6JOIS%2FZ7zlU2IsVZqu6Q9CvMOtxAhob5IDh%2FpILRPXq0CDJ4h6n6JL5Hyy0D4%2BFupaEzD5g59VP5YGpigIjH4j5Fq6XbkBng1RdspA1KD21tcmRRpH6ic0fDSlLG%2BgdRk9dFZ1kKf%2BQZFP%2FjM2bNWpxxJ%2BXZOJ5QMBoco4F95qYVBMLaIzayZacPkdrklExuxOR&X-Amz-Signature=4868bf1139583235934d773ca816f9550ac497e8fbc60d3ef6c639d6a2fe72d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
