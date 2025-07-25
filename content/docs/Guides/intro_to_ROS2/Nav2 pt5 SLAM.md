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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMSJR3Q%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHzF6QPtuvbxJyHj4YB%2B5JJAB%2FKFBwtOpFTfvs60ftTcCIFOUF8rIyNJjR3fi4fk0pC30i%2Bb4DrSHasAMK7swoQNAKv8DCEgQABoMNjM3NDIzMTgzODA1IgzlFBEIueyAxFyclMYq3AOY5g%2F0MKj3Y0qlaDDsAJpkuznDuGY7v14bCzWvCMOVq4YleGf2zm5%2Fbpa4u6jXy3%2Bp1WT0QjpDL6B4Ks1Kga%2FLUC7HjgzE2bYVBMpKhFIDfmvFfj9RcsOfHx7AUNqFRn%2B9p7OjFJcPxxLDNqeOLveb7pYhcUl8N1LkFXz2dSSpVxdL5bLQjyEVNVXeWeZTHNQ3LctxExbTUAkYodbMZfFj26FhsXXwhACIn1Y%2BMqrqcZ7NpZVoMXPrhnCcY4jukXBe%2Fz%2BdO%2F%2BNwJRpnhqetkHLk6fArJo9fzMu7D2S6cnbiZAMM8NF2yF9It%2Bx84BJJe2jJesuIJ74DxDezvL%2FVgw5FSDrTUVSGPX6oxIMM7I1PSt4kiIdFE6n0rmP7ODv7XAdaTJ%2B0yQTSQNvhXDgSWCB70CD07ohZPN3MV7kVIPGwFK5Y4UorgX74uUCFI81lo4DWC6TP9m59BiQXjuCMxYYRnJCQV7URkg5TRZCYohJ1LoIX52Fl6UEiS0NtzBo%2BD6XRDo6CGWr%2F3ZyzJhR4G5MakqG1iZHILDfMzb4wD7C2o6YI6HhvQIO%2FwVZLYOrjevPVa4MXSv0uwR9jqDaILEQCFGUa4fsQFwkot%2BZtYiO51QrCHjLgLsqmeuqwzCyvI7EBjqnAe%2BeG1aeicHqgmy%2B7n0uqXCe5kYRS7Ewo76AdD3RUpWeM1t8gXAg41%2FNTZoMn9NrBjpcTPcuz5AnLj7pdF%2BJT3w%2B4j9PQpD6iSIHVIdMcUAXz%2BkVbVs1qFhYZqEZQv%2F6ue7LFzpteCtQLeVOJBfQ5FyX6qiaHcp48%2FFj7TGKRNLsXfAbpWXs3tSJqpvAB2Xj0YwoKS33E9PpypTxkZ%2FOUmJi%2BV829og6&X-Amz-Signature=dfb42fcd9092e65d7d0c5eec0803910affe98cb817c5a6d705b4da7de326742f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMSJR3Q%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHzF6QPtuvbxJyHj4YB%2B5JJAB%2FKFBwtOpFTfvs60ftTcCIFOUF8rIyNJjR3fi4fk0pC30i%2Bb4DrSHasAMK7swoQNAKv8DCEgQABoMNjM3NDIzMTgzODA1IgzlFBEIueyAxFyclMYq3AOY5g%2F0MKj3Y0qlaDDsAJpkuznDuGY7v14bCzWvCMOVq4YleGf2zm5%2Fbpa4u6jXy3%2Bp1WT0QjpDL6B4Ks1Kga%2FLUC7HjgzE2bYVBMpKhFIDfmvFfj9RcsOfHx7AUNqFRn%2B9p7OjFJcPxxLDNqeOLveb7pYhcUl8N1LkFXz2dSSpVxdL5bLQjyEVNVXeWeZTHNQ3LctxExbTUAkYodbMZfFj26FhsXXwhACIn1Y%2BMqrqcZ7NpZVoMXPrhnCcY4jukXBe%2Fz%2BdO%2F%2BNwJRpnhqetkHLk6fArJo9fzMu7D2S6cnbiZAMM8NF2yF9It%2Bx84BJJe2jJesuIJ74DxDezvL%2FVgw5FSDrTUVSGPX6oxIMM7I1PSt4kiIdFE6n0rmP7ODv7XAdaTJ%2B0yQTSQNvhXDgSWCB70CD07ohZPN3MV7kVIPGwFK5Y4UorgX74uUCFI81lo4DWC6TP9m59BiQXjuCMxYYRnJCQV7URkg5TRZCYohJ1LoIX52Fl6UEiS0NtzBo%2BD6XRDo6CGWr%2F3ZyzJhR4G5MakqG1iZHILDfMzb4wD7C2o6YI6HhvQIO%2FwVZLYOrjevPVa4MXSv0uwR9jqDaILEQCFGUa4fsQFwkot%2BZtYiO51QrCHjLgLsqmeuqwzCyvI7EBjqnAe%2BeG1aeicHqgmy%2B7n0uqXCe5kYRS7Ewo76AdD3RUpWeM1t8gXAg41%2FNTZoMn9NrBjpcTPcuz5AnLj7pdF%2BJT3w%2B4j9PQpD6iSIHVIdMcUAXz%2BkVbVs1qFhYZqEZQv%2F6ue7LFzpteCtQLeVOJBfQ5FyX6qiaHcp48%2FFj7TGKRNLsXfAbpWXs3tSJqpvAB2Xj0YwoKS33E9PpypTxkZ%2FOUmJi%2BV829og6&X-Amz-Signature=a48f8e00b587b570fe491862ca6fa962552862df555538b108f9af0c79851648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMSJR3Q%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHzF6QPtuvbxJyHj4YB%2B5JJAB%2FKFBwtOpFTfvs60ftTcCIFOUF8rIyNJjR3fi4fk0pC30i%2Bb4DrSHasAMK7swoQNAKv8DCEgQABoMNjM3NDIzMTgzODA1IgzlFBEIueyAxFyclMYq3AOY5g%2F0MKj3Y0qlaDDsAJpkuznDuGY7v14bCzWvCMOVq4YleGf2zm5%2Fbpa4u6jXy3%2Bp1WT0QjpDL6B4Ks1Kga%2FLUC7HjgzE2bYVBMpKhFIDfmvFfj9RcsOfHx7AUNqFRn%2B9p7OjFJcPxxLDNqeOLveb7pYhcUl8N1LkFXz2dSSpVxdL5bLQjyEVNVXeWeZTHNQ3LctxExbTUAkYodbMZfFj26FhsXXwhACIn1Y%2BMqrqcZ7NpZVoMXPrhnCcY4jukXBe%2Fz%2BdO%2F%2BNwJRpnhqetkHLk6fArJo9fzMu7D2S6cnbiZAMM8NF2yF9It%2Bx84BJJe2jJesuIJ74DxDezvL%2FVgw5FSDrTUVSGPX6oxIMM7I1PSt4kiIdFE6n0rmP7ODv7XAdaTJ%2B0yQTSQNvhXDgSWCB70CD07ohZPN3MV7kVIPGwFK5Y4UorgX74uUCFI81lo4DWC6TP9m59BiQXjuCMxYYRnJCQV7URkg5TRZCYohJ1LoIX52Fl6UEiS0NtzBo%2BD6XRDo6CGWr%2F3ZyzJhR4G5MakqG1iZHILDfMzb4wD7C2o6YI6HhvQIO%2FwVZLYOrjevPVa4MXSv0uwR9jqDaILEQCFGUa4fsQFwkot%2BZtYiO51QrCHjLgLsqmeuqwzCyvI7EBjqnAe%2BeG1aeicHqgmy%2B7n0uqXCe5kYRS7Ewo76AdD3RUpWeM1t8gXAg41%2FNTZoMn9NrBjpcTPcuz5AnLj7pdF%2BJT3w%2B4j9PQpD6iSIHVIdMcUAXz%2BkVbVs1qFhYZqEZQv%2F6ue7LFzpteCtQLeVOJBfQ5FyX6qiaHcp48%2FFj7TGKRNLsXfAbpWXs3tSJqpvAB2Xj0YwoKS33E9PpypTxkZ%2FOUmJi%2BV829og6&X-Amz-Signature=ac92abbd6aba1d47846e00e4cab2e216833df7a70e95ba491d30376468715715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMSJR3Q%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHzF6QPtuvbxJyHj4YB%2B5JJAB%2FKFBwtOpFTfvs60ftTcCIFOUF8rIyNJjR3fi4fk0pC30i%2Bb4DrSHasAMK7swoQNAKv8DCEgQABoMNjM3NDIzMTgzODA1IgzlFBEIueyAxFyclMYq3AOY5g%2F0MKj3Y0qlaDDsAJpkuznDuGY7v14bCzWvCMOVq4YleGf2zm5%2Fbpa4u6jXy3%2Bp1WT0QjpDL6B4Ks1Kga%2FLUC7HjgzE2bYVBMpKhFIDfmvFfj9RcsOfHx7AUNqFRn%2B9p7OjFJcPxxLDNqeOLveb7pYhcUl8N1LkFXz2dSSpVxdL5bLQjyEVNVXeWeZTHNQ3LctxExbTUAkYodbMZfFj26FhsXXwhACIn1Y%2BMqrqcZ7NpZVoMXPrhnCcY4jukXBe%2Fz%2BdO%2F%2BNwJRpnhqetkHLk6fArJo9fzMu7D2S6cnbiZAMM8NF2yF9It%2Bx84BJJe2jJesuIJ74DxDezvL%2FVgw5FSDrTUVSGPX6oxIMM7I1PSt4kiIdFE6n0rmP7ODv7XAdaTJ%2B0yQTSQNvhXDgSWCB70CD07ohZPN3MV7kVIPGwFK5Y4UorgX74uUCFI81lo4DWC6TP9m59BiQXjuCMxYYRnJCQV7URkg5TRZCYohJ1LoIX52Fl6UEiS0NtzBo%2BD6XRDo6CGWr%2F3ZyzJhR4G5MakqG1iZHILDfMzb4wD7C2o6YI6HhvQIO%2FwVZLYOrjevPVa4MXSv0uwR9jqDaILEQCFGUa4fsQFwkot%2BZtYiO51QrCHjLgLsqmeuqwzCyvI7EBjqnAe%2BeG1aeicHqgmy%2B7n0uqXCe5kYRS7Ewo76AdD3RUpWeM1t8gXAg41%2FNTZoMn9NrBjpcTPcuz5AnLj7pdF%2BJT3w%2B4j9PQpD6iSIHVIdMcUAXz%2BkVbVs1qFhYZqEZQv%2F6ue7LFzpteCtQLeVOJBfQ5FyX6qiaHcp48%2FFj7TGKRNLsXfAbpWXs3tSJqpvAB2Xj0YwoKS33E9PpypTxkZ%2FOUmJi%2BV829og6&X-Amz-Signature=9dc89af8c35897933633f673f387a6c79feecac671bcbb4130c9abc689ec0fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMSJR3Q%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHzF6QPtuvbxJyHj4YB%2B5JJAB%2FKFBwtOpFTfvs60ftTcCIFOUF8rIyNJjR3fi4fk0pC30i%2Bb4DrSHasAMK7swoQNAKv8DCEgQABoMNjM3NDIzMTgzODA1IgzlFBEIueyAxFyclMYq3AOY5g%2F0MKj3Y0qlaDDsAJpkuznDuGY7v14bCzWvCMOVq4YleGf2zm5%2Fbpa4u6jXy3%2Bp1WT0QjpDL6B4Ks1Kga%2FLUC7HjgzE2bYVBMpKhFIDfmvFfj9RcsOfHx7AUNqFRn%2B9p7OjFJcPxxLDNqeOLveb7pYhcUl8N1LkFXz2dSSpVxdL5bLQjyEVNVXeWeZTHNQ3LctxExbTUAkYodbMZfFj26FhsXXwhACIn1Y%2BMqrqcZ7NpZVoMXPrhnCcY4jukXBe%2Fz%2BdO%2F%2BNwJRpnhqetkHLk6fArJo9fzMu7D2S6cnbiZAMM8NF2yF9It%2Bx84BJJe2jJesuIJ74DxDezvL%2FVgw5FSDrTUVSGPX6oxIMM7I1PSt4kiIdFE6n0rmP7ODv7XAdaTJ%2B0yQTSQNvhXDgSWCB70CD07ohZPN3MV7kVIPGwFK5Y4UorgX74uUCFI81lo4DWC6TP9m59BiQXjuCMxYYRnJCQV7URkg5TRZCYohJ1LoIX52Fl6UEiS0NtzBo%2BD6XRDo6CGWr%2F3ZyzJhR4G5MakqG1iZHILDfMzb4wD7C2o6YI6HhvQIO%2FwVZLYOrjevPVa4MXSv0uwR9jqDaILEQCFGUa4fsQFwkot%2BZtYiO51QrCHjLgLsqmeuqwzCyvI7EBjqnAe%2BeG1aeicHqgmy%2B7n0uqXCe5kYRS7Ewo76AdD3RUpWeM1t8gXAg41%2FNTZoMn9NrBjpcTPcuz5AnLj7pdF%2BJT3w%2B4j9PQpD6iSIHVIdMcUAXz%2BkVbVs1qFhYZqEZQv%2F6ue7LFzpteCtQLeVOJBfQ5FyX6qiaHcp48%2FFj7TGKRNLsXfAbpWXs3tSJqpvAB2Xj0YwoKS33E9PpypTxkZ%2FOUmJi%2BV829og6&X-Amz-Signature=cb4358236c3d84946a82d09637085fac6896c3095e27e06a9264183f4f7b3d6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMSJR3Q%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHzF6QPtuvbxJyHj4YB%2B5JJAB%2FKFBwtOpFTfvs60ftTcCIFOUF8rIyNJjR3fi4fk0pC30i%2Bb4DrSHasAMK7swoQNAKv8DCEgQABoMNjM3NDIzMTgzODA1IgzlFBEIueyAxFyclMYq3AOY5g%2F0MKj3Y0qlaDDsAJpkuznDuGY7v14bCzWvCMOVq4YleGf2zm5%2Fbpa4u6jXy3%2Bp1WT0QjpDL6B4Ks1Kga%2FLUC7HjgzE2bYVBMpKhFIDfmvFfj9RcsOfHx7AUNqFRn%2B9p7OjFJcPxxLDNqeOLveb7pYhcUl8N1LkFXz2dSSpVxdL5bLQjyEVNVXeWeZTHNQ3LctxExbTUAkYodbMZfFj26FhsXXwhACIn1Y%2BMqrqcZ7NpZVoMXPrhnCcY4jukXBe%2Fz%2BdO%2F%2BNwJRpnhqetkHLk6fArJo9fzMu7D2S6cnbiZAMM8NF2yF9It%2Bx84BJJe2jJesuIJ74DxDezvL%2FVgw5FSDrTUVSGPX6oxIMM7I1PSt4kiIdFE6n0rmP7ODv7XAdaTJ%2B0yQTSQNvhXDgSWCB70CD07ohZPN3MV7kVIPGwFK5Y4UorgX74uUCFI81lo4DWC6TP9m59BiQXjuCMxYYRnJCQV7URkg5TRZCYohJ1LoIX52Fl6UEiS0NtzBo%2BD6XRDo6CGWr%2F3ZyzJhR4G5MakqG1iZHILDfMzb4wD7C2o6YI6HhvQIO%2FwVZLYOrjevPVa4MXSv0uwR9jqDaILEQCFGUa4fsQFwkot%2BZtYiO51QrCHjLgLsqmeuqwzCyvI7EBjqnAe%2BeG1aeicHqgmy%2B7n0uqXCe5kYRS7Ewo76AdD3RUpWeM1t8gXAg41%2FNTZoMn9NrBjpcTPcuz5AnLj7pdF%2BJT3w%2B4j9PQpD6iSIHVIdMcUAXz%2BkVbVs1qFhYZqEZQv%2F6ue7LFzpteCtQLeVOJBfQ5FyX6qiaHcp48%2FFj7TGKRNLsXfAbpWXs3tSJqpvAB2Xj0YwoKS33E9PpypTxkZ%2FOUmJi%2BV829og6&X-Amz-Signature=ea7d6febabce2d745548cf1f5e4be1fb9fff1080aef5941c730e5b061887da33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMSJR3Q%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHzF6QPtuvbxJyHj4YB%2B5JJAB%2FKFBwtOpFTfvs60ftTcCIFOUF8rIyNJjR3fi4fk0pC30i%2Bb4DrSHasAMK7swoQNAKv8DCEgQABoMNjM3NDIzMTgzODA1IgzlFBEIueyAxFyclMYq3AOY5g%2F0MKj3Y0qlaDDsAJpkuznDuGY7v14bCzWvCMOVq4YleGf2zm5%2Fbpa4u6jXy3%2Bp1WT0QjpDL6B4Ks1Kga%2FLUC7HjgzE2bYVBMpKhFIDfmvFfj9RcsOfHx7AUNqFRn%2B9p7OjFJcPxxLDNqeOLveb7pYhcUl8N1LkFXz2dSSpVxdL5bLQjyEVNVXeWeZTHNQ3LctxExbTUAkYodbMZfFj26FhsXXwhACIn1Y%2BMqrqcZ7NpZVoMXPrhnCcY4jukXBe%2Fz%2BdO%2F%2BNwJRpnhqetkHLk6fArJo9fzMu7D2S6cnbiZAMM8NF2yF9It%2Bx84BJJe2jJesuIJ74DxDezvL%2FVgw5FSDrTUVSGPX6oxIMM7I1PSt4kiIdFE6n0rmP7ODv7XAdaTJ%2B0yQTSQNvhXDgSWCB70CD07ohZPN3MV7kVIPGwFK5Y4UorgX74uUCFI81lo4DWC6TP9m59BiQXjuCMxYYRnJCQV7URkg5TRZCYohJ1LoIX52Fl6UEiS0NtzBo%2BD6XRDo6CGWr%2F3ZyzJhR4G5MakqG1iZHILDfMzb4wD7C2o6YI6HhvQIO%2FwVZLYOrjevPVa4MXSv0uwR9jqDaILEQCFGUa4fsQFwkot%2BZtYiO51QrCHjLgLsqmeuqwzCyvI7EBjqnAe%2BeG1aeicHqgmy%2B7n0uqXCe5kYRS7Ewo76AdD3RUpWeM1t8gXAg41%2FNTZoMn9NrBjpcTPcuz5AnLj7pdF%2BJT3w%2B4j9PQpD6iSIHVIdMcUAXz%2BkVbVs1qFhYZqEZQv%2F6ue7LFzpteCtQLeVOJBfQ5FyX6qiaHcp48%2FFj7TGKRNLsXfAbpWXs3tSJqpvAB2Xj0YwoKS33E9PpypTxkZ%2FOUmJi%2BV829og6&X-Amz-Signature=1e743324c6d0167fa0ecf41fb95285740e912e3be2e47dd228eb18bbc22b18e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMSJR3Q%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHzF6QPtuvbxJyHj4YB%2B5JJAB%2FKFBwtOpFTfvs60ftTcCIFOUF8rIyNJjR3fi4fk0pC30i%2Bb4DrSHasAMK7swoQNAKv8DCEgQABoMNjM3NDIzMTgzODA1IgzlFBEIueyAxFyclMYq3AOY5g%2F0MKj3Y0qlaDDsAJpkuznDuGY7v14bCzWvCMOVq4YleGf2zm5%2Fbpa4u6jXy3%2Bp1WT0QjpDL6B4Ks1Kga%2FLUC7HjgzE2bYVBMpKhFIDfmvFfj9RcsOfHx7AUNqFRn%2B9p7OjFJcPxxLDNqeOLveb7pYhcUl8N1LkFXz2dSSpVxdL5bLQjyEVNVXeWeZTHNQ3LctxExbTUAkYodbMZfFj26FhsXXwhACIn1Y%2BMqrqcZ7NpZVoMXPrhnCcY4jukXBe%2Fz%2BdO%2F%2BNwJRpnhqetkHLk6fArJo9fzMu7D2S6cnbiZAMM8NF2yF9It%2Bx84BJJe2jJesuIJ74DxDezvL%2FVgw5FSDrTUVSGPX6oxIMM7I1PSt4kiIdFE6n0rmP7ODv7XAdaTJ%2B0yQTSQNvhXDgSWCB70CD07ohZPN3MV7kVIPGwFK5Y4UorgX74uUCFI81lo4DWC6TP9m59BiQXjuCMxYYRnJCQV7URkg5TRZCYohJ1LoIX52Fl6UEiS0NtzBo%2BD6XRDo6CGWr%2F3ZyzJhR4G5MakqG1iZHILDfMzb4wD7C2o6YI6HhvQIO%2FwVZLYOrjevPVa4MXSv0uwR9jqDaILEQCFGUa4fsQFwkot%2BZtYiO51QrCHjLgLsqmeuqwzCyvI7EBjqnAe%2BeG1aeicHqgmy%2B7n0uqXCe5kYRS7Ewo76AdD3RUpWeM1t8gXAg41%2FNTZoMn9NrBjpcTPcuz5AnLj7pdF%2BJT3w%2B4j9PQpD6iSIHVIdMcUAXz%2BkVbVs1qFhYZqEZQv%2F6ue7LFzpteCtQLeVOJBfQ5FyX6qiaHcp48%2FFj7TGKRNLsXfAbpWXs3tSJqpvAB2Xj0YwoKS33E9PpypTxkZ%2FOUmJi%2BV829og6&X-Amz-Signature=798900a40adb70f1742687ecd20d23b97cb0f6ce8c4069398f9a61daec2cca6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMSJR3Q%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T171158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJFMEMCHzF6QPtuvbxJyHj4YB%2B5JJAB%2FKFBwtOpFTfvs60ftTcCIFOUF8rIyNJjR3fi4fk0pC30i%2Bb4DrSHasAMK7swoQNAKv8DCEgQABoMNjM3NDIzMTgzODA1IgzlFBEIueyAxFyclMYq3AOY5g%2F0MKj3Y0qlaDDsAJpkuznDuGY7v14bCzWvCMOVq4YleGf2zm5%2Fbpa4u6jXy3%2Bp1WT0QjpDL6B4Ks1Kga%2FLUC7HjgzE2bYVBMpKhFIDfmvFfj9RcsOfHx7AUNqFRn%2B9p7OjFJcPxxLDNqeOLveb7pYhcUl8N1LkFXz2dSSpVxdL5bLQjyEVNVXeWeZTHNQ3LctxExbTUAkYodbMZfFj26FhsXXwhACIn1Y%2BMqrqcZ7NpZVoMXPrhnCcY4jukXBe%2Fz%2BdO%2F%2BNwJRpnhqetkHLk6fArJo9fzMu7D2S6cnbiZAMM8NF2yF9It%2Bx84BJJe2jJesuIJ74DxDezvL%2FVgw5FSDrTUVSGPX6oxIMM7I1PSt4kiIdFE6n0rmP7ODv7XAdaTJ%2B0yQTSQNvhXDgSWCB70CD07ohZPN3MV7kVIPGwFK5Y4UorgX74uUCFI81lo4DWC6TP9m59BiQXjuCMxYYRnJCQV7URkg5TRZCYohJ1LoIX52Fl6UEiS0NtzBo%2BD6XRDo6CGWr%2F3ZyzJhR4G5MakqG1iZHILDfMzb4wD7C2o6YI6HhvQIO%2FwVZLYOrjevPVa4MXSv0uwR9jqDaILEQCFGUa4fsQFwkot%2BZtYiO51QrCHjLgLsqmeuqwzCyvI7EBjqnAe%2BeG1aeicHqgmy%2B7n0uqXCe5kYRS7Ewo76AdD3RUpWeM1t8gXAg41%2FNTZoMn9NrBjpcTPcuz5AnLj7pdF%2BJT3w%2B4j9PQpD6iSIHVIdMcUAXz%2BkVbVs1qFhYZqEZQv%2F6ue7LFzpteCtQLeVOJBfQ5FyX6qiaHcp48%2FFj7TGKRNLsXfAbpWXs3tSJqpvAB2Xj0YwoKS33E9PpypTxkZ%2FOUmJi%2BV829og6&X-Amz-Signature=fb71e2e44b04efb22bb7773b0c3502f28f9c84304641eb2acd2bc87e7a2f0cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
