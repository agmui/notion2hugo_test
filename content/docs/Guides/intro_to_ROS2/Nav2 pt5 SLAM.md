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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEGWVQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDZHJqURnXBJcYhAyB9b4r65NkVSlegO20b8uJEvIWTRgIgC99uKZr2BIkogiJEFfjRvNL9P27cuqKFpDT12DUwCFYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKjRIRhqr1LnfOAwyCrcAwcAm6ZozkbGTxFMnxhd2bPuj0NP%2B9S3cPchQOegpVTqwnCyANdY0pKFfdAqaPEUgbOKor1bCFJvsnVc8REU5HUak3DfH7AhSuVMBiWPP1jGM2v3%2BH3P0b2NJC%2FLD5SUTadyEtekD0tX09bDuuzVnVZ%2BJM0s2qd7Ug9fRCWk%2Bghx619bcBEIvLg%2BexGpa8zaZYrD0iWr9RGfe4Zcg8nUlei2OCTqFbwDVrtY5I9uCgUzQmZAalEUOaD%2F1BD7BY6mpkIkU1yU4QIwCr4P6OUaHzBuhXfQj10%2FZZrTtQpE0HdakN3zEnx%2BxfvkWf4Te7nvaLd8JzSMlWQELqwSyn7242U2oNN8nOw0fOZjPIEQMpX8XgE6qV3svvez1loty4Zy6X14Zz5%2F2IuI7doCp4qWmdlhB0bCyW8H1NYRg%2FP%2Fk9ELPLhDt%2BvRwjuhWNNs2pwRBs%2BzsAmyaZNsrQ%2F7JgAkF%2BUnyJptbJQtxQ6rrZ3rRfXOh7v9RboSMlJkzLoLbohTvrfYUEzVuhuQOvuf3qLfZxxk58BqzMRa0E1lWXB%2B7a5gQAdOxBLrpoYKTo0Koh8pjZc%2FujRf9R5gUU%2BpiWQLXocvArY8g0AFnmVfL3NPcVTB9ztbAVuaCXowpxESMI6QiMQGOqUBLadcvNvpq%2BZ%2BCcyR4KXhq%2Bm7WStsn%2BbpingaqcZ71tM6qDGYnEhDCncdPpdXaOmo%2Ffv7N3iDP63SK4aZ78EAI9e2wMCDxlvlACMo5vQUL3YvFauiZ4bE4epzlak%2F7B%2FDa0f37ge4yQzIa26lMXbrZbaFuEQGH8IpvGglJNdK6PxcsHA0o6DI18WDD7pvBRv388F9MA3UOw1ry%2F9aP4c0k2ImIvRW&X-Amz-Signature=441f9583199b043c654b0fe7ec62d2949d8f79bd76543f56e00432532a9e1552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEGWVQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDZHJqURnXBJcYhAyB9b4r65NkVSlegO20b8uJEvIWTRgIgC99uKZr2BIkogiJEFfjRvNL9P27cuqKFpDT12DUwCFYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKjRIRhqr1LnfOAwyCrcAwcAm6ZozkbGTxFMnxhd2bPuj0NP%2B9S3cPchQOegpVTqwnCyANdY0pKFfdAqaPEUgbOKor1bCFJvsnVc8REU5HUak3DfH7AhSuVMBiWPP1jGM2v3%2BH3P0b2NJC%2FLD5SUTadyEtekD0tX09bDuuzVnVZ%2BJM0s2qd7Ug9fRCWk%2Bghx619bcBEIvLg%2BexGpa8zaZYrD0iWr9RGfe4Zcg8nUlei2OCTqFbwDVrtY5I9uCgUzQmZAalEUOaD%2F1BD7BY6mpkIkU1yU4QIwCr4P6OUaHzBuhXfQj10%2FZZrTtQpE0HdakN3zEnx%2BxfvkWf4Te7nvaLd8JzSMlWQELqwSyn7242U2oNN8nOw0fOZjPIEQMpX8XgE6qV3svvez1loty4Zy6X14Zz5%2F2IuI7doCp4qWmdlhB0bCyW8H1NYRg%2FP%2Fk9ELPLhDt%2BvRwjuhWNNs2pwRBs%2BzsAmyaZNsrQ%2F7JgAkF%2BUnyJptbJQtxQ6rrZ3rRfXOh7v9RboSMlJkzLoLbohTvrfYUEzVuhuQOvuf3qLfZxxk58BqzMRa0E1lWXB%2B7a5gQAdOxBLrpoYKTo0Koh8pjZc%2FujRf9R5gUU%2BpiWQLXocvArY8g0AFnmVfL3NPcVTB9ztbAVuaCXowpxESMI6QiMQGOqUBLadcvNvpq%2BZ%2BCcyR4KXhq%2Bm7WStsn%2BbpingaqcZ71tM6qDGYnEhDCncdPpdXaOmo%2Ffv7N3iDP63SK4aZ78EAI9e2wMCDxlvlACMo5vQUL3YvFauiZ4bE4epzlak%2F7B%2FDa0f37ge4yQzIa26lMXbrZbaFuEQGH8IpvGglJNdK6PxcsHA0o6DI18WDD7pvBRv388F9MA3UOw1ry%2F9aP4c0k2ImIvRW&X-Amz-Signature=934e7450da2c15056e1f1fbbe0ea40595044e3f97f2e9d644da014a890dff335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEGWVQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDZHJqURnXBJcYhAyB9b4r65NkVSlegO20b8uJEvIWTRgIgC99uKZr2BIkogiJEFfjRvNL9P27cuqKFpDT12DUwCFYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKjRIRhqr1LnfOAwyCrcAwcAm6ZozkbGTxFMnxhd2bPuj0NP%2B9S3cPchQOegpVTqwnCyANdY0pKFfdAqaPEUgbOKor1bCFJvsnVc8REU5HUak3DfH7AhSuVMBiWPP1jGM2v3%2BH3P0b2NJC%2FLD5SUTadyEtekD0tX09bDuuzVnVZ%2BJM0s2qd7Ug9fRCWk%2Bghx619bcBEIvLg%2BexGpa8zaZYrD0iWr9RGfe4Zcg8nUlei2OCTqFbwDVrtY5I9uCgUzQmZAalEUOaD%2F1BD7BY6mpkIkU1yU4QIwCr4P6OUaHzBuhXfQj10%2FZZrTtQpE0HdakN3zEnx%2BxfvkWf4Te7nvaLd8JzSMlWQELqwSyn7242U2oNN8nOw0fOZjPIEQMpX8XgE6qV3svvez1loty4Zy6X14Zz5%2F2IuI7doCp4qWmdlhB0bCyW8H1NYRg%2FP%2Fk9ELPLhDt%2BvRwjuhWNNs2pwRBs%2BzsAmyaZNsrQ%2F7JgAkF%2BUnyJptbJQtxQ6rrZ3rRfXOh7v9RboSMlJkzLoLbohTvrfYUEzVuhuQOvuf3qLfZxxk58BqzMRa0E1lWXB%2B7a5gQAdOxBLrpoYKTo0Koh8pjZc%2FujRf9R5gUU%2BpiWQLXocvArY8g0AFnmVfL3NPcVTB9ztbAVuaCXowpxESMI6QiMQGOqUBLadcvNvpq%2BZ%2BCcyR4KXhq%2Bm7WStsn%2BbpingaqcZ71tM6qDGYnEhDCncdPpdXaOmo%2Ffv7N3iDP63SK4aZ78EAI9e2wMCDxlvlACMo5vQUL3YvFauiZ4bE4epzlak%2F7B%2FDa0f37ge4yQzIa26lMXbrZbaFuEQGH8IpvGglJNdK6PxcsHA0o6DI18WDD7pvBRv388F9MA3UOw1ry%2F9aP4c0k2ImIvRW&X-Amz-Signature=e608f06274aeeebaa2905d4e9354135d7d2829d7339cedac9e0dcedd3e5767f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEGWVQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDZHJqURnXBJcYhAyB9b4r65NkVSlegO20b8uJEvIWTRgIgC99uKZr2BIkogiJEFfjRvNL9P27cuqKFpDT12DUwCFYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKjRIRhqr1LnfOAwyCrcAwcAm6ZozkbGTxFMnxhd2bPuj0NP%2B9S3cPchQOegpVTqwnCyANdY0pKFfdAqaPEUgbOKor1bCFJvsnVc8REU5HUak3DfH7AhSuVMBiWPP1jGM2v3%2BH3P0b2NJC%2FLD5SUTadyEtekD0tX09bDuuzVnVZ%2BJM0s2qd7Ug9fRCWk%2Bghx619bcBEIvLg%2BexGpa8zaZYrD0iWr9RGfe4Zcg8nUlei2OCTqFbwDVrtY5I9uCgUzQmZAalEUOaD%2F1BD7BY6mpkIkU1yU4QIwCr4P6OUaHzBuhXfQj10%2FZZrTtQpE0HdakN3zEnx%2BxfvkWf4Te7nvaLd8JzSMlWQELqwSyn7242U2oNN8nOw0fOZjPIEQMpX8XgE6qV3svvez1loty4Zy6X14Zz5%2F2IuI7doCp4qWmdlhB0bCyW8H1NYRg%2FP%2Fk9ELPLhDt%2BvRwjuhWNNs2pwRBs%2BzsAmyaZNsrQ%2F7JgAkF%2BUnyJptbJQtxQ6rrZ3rRfXOh7v9RboSMlJkzLoLbohTvrfYUEzVuhuQOvuf3qLfZxxk58BqzMRa0E1lWXB%2B7a5gQAdOxBLrpoYKTo0Koh8pjZc%2FujRf9R5gUU%2BpiWQLXocvArY8g0AFnmVfL3NPcVTB9ztbAVuaCXowpxESMI6QiMQGOqUBLadcvNvpq%2BZ%2BCcyR4KXhq%2Bm7WStsn%2BbpingaqcZ71tM6qDGYnEhDCncdPpdXaOmo%2Ffv7N3iDP63SK4aZ78EAI9e2wMCDxlvlACMo5vQUL3YvFauiZ4bE4epzlak%2F7B%2FDa0f37ge4yQzIa26lMXbrZbaFuEQGH8IpvGglJNdK6PxcsHA0o6DI18WDD7pvBRv388F9MA3UOw1ry%2F9aP4c0k2ImIvRW&X-Amz-Signature=b30f51749a0825dece3fff48ede986b48265414f04fd5c529270d1bf1c32e9cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEGWVQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDZHJqURnXBJcYhAyB9b4r65NkVSlegO20b8uJEvIWTRgIgC99uKZr2BIkogiJEFfjRvNL9P27cuqKFpDT12DUwCFYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKjRIRhqr1LnfOAwyCrcAwcAm6ZozkbGTxFMnxhd2bPuj0NP%2B9S3cPchQOegpVTqwnCyANdY0pKFfdAqaPEUgbOKor1bCFJvsnVc8REU5HUak3DfH7AhSuVMBiWPP1jGM2v3%2BH3P0b2NJC%2FLD5SUTadyEtekD0tX09bDuuzVnVZ%2BJM0s2qd7Ug9fRCWk%2Bghx619bcBEIvLg%2BexGpa8zaZYrD0iWr9RGfe4Zcg8nUlei2OCTqFbwDVrtY5I9uCgUzQmZAalEUOaD%2F1BD7BY6mpkIkU1yU4QIwCr4P6OUaHzBuhXfQj10%2FZZrTtQpE0HdakN3zEnx%2BxfvkWf4Te7nvaLd8JzSMlWQELqwSyn7242U2oNN8nOw0fOZjPIEQMpX8XgE6qV3svvez1loty4Zy6X14Zz5%2F2IuI7doCp4qWmdlhB0bCyW8H1NYRg%2FP%2Fk9ELPLhDt%2BvRwjuhWNNs2pwRBs%2BzsAmyaZNsrQ%2F7JgAkF%2BUnyJptbJQtxQ6rrZ3rRfXOh7v9RboSMlJkzLoLbohTvrfYUEzVuhuQOvuf3qLfZxxk58BqzMRa0E1lWXB%2B7a5gQAdOxBLrpoYKTo0Koh8pjZc%2FujRf9R5gUU%2BpiWQLXocvArY8g0AFnmVfL3NPcVTB9ztbAVuaCXowpxESMI6QiMQGOqUBLadcvNvpq%2BZ%2BCcyR4KXhq%2Bm7WStsn%2BbpingaqcZ71tM6qDGYnEhDCncdPpdXaOmo%2Ffv7N3iDP63SK4aZ78EAI9e2wMCDxlvlACMo5vQUL3YvFauiZ4bE4epzlak%2F7B%2FDa0f37ge4yQzIa26lMXbrZbaFuEQGH8IpvGglJNdK6PxcsHA0o6DI18WDD7pvBRv388F9MA3UOw1ry%2F9aP4c0k2ImIvRW&X-Amz-Signature=7218a51c336771e36a231af93edc7f71e9b7d570e0de7f6f312b126f2c026955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEGWVQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDZHJqURnXBJcYhAyB9b4r65NkVSlegO20b8uJEvIWTRgIgC99uKZr2BIkogiJEFfjRvNL9P27cuqKFpDT12DUwCFYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKjRIRhqr1LnfOAwyCrcAwcAm6ZozkbGTxFMnxhd2bPuj0NP%2B9S3cPchQOegpVTqwnCyANdY0pKFfdAqaPEUgbOKor1bCFJvsnVc8REU5HUak3DfH7AhSuVMBiWPP1jGM2v3%2BH3P0b2NJC%2FLD5SUTadyEtekD0tX09bDuuzVnVZ%2BJM0s2qd7Ug9fRCWk%2Bghx619bcBEIvLg%2BexGpa8zaZYrD0iWr9RGfe4Zcg8nUlei2OCTqFbwDVrtY5I9uCgUzQmZAalEUOaD%2F1BD7BY6mpkIkU1yU4QIwCr4P6OUaHzBuhXfQj10%2FZZrTtQpE0HdakN3zEnx%2BxfvkWf4Te7nvaLd8JzSMlWQELqwSyn7242U2oNN8nOw0fOZjPIEQMpX8XgE6qV3svvez1loty4Zy6X14Zz5%2F2IuI7doCp4qWmdlhB0bCyW8H1NYRg%2FP%2Fk9ELPLhDt%2BvRwjuhWNNs2pwRBs%2BzsAmyaZNsrQ%2F7JgAkF%2BUnyJptbJQtxQ6rrZ3rRfXOh7v9RboSMlJkzLoLbohTvrfYUEzVuhuQOvuf3qLfZxxk58BqzMRa0E1lWXB%2B7a5gQAdOxBLrpoYKTo0Koh8pjZc%2FujRf9R5gUU%2BpiWQLXocvArY8g0AFnmVfL3NPcVTB9ztbAVuaCXowpxESMI6QiMQGOqUBLadcvNvpq%2BZ%2BCcyR4KXhq%2Bm7WStsn%2BbpingaqcZ71tM6qDGYnEhDCncdPpdXaOmo%2Ffv7N3iDP63SK4aZ78EAI9e2wMCDxlvlACMo5vQUL3YvFauiZ4bE4epzlak%2F7B%2FDa0f37ge4yQzIa26lMXbrZbaFuEQGH8IpvGglJNdK6PxcsHA0o6DI18WDD7pvBRv388F9MA3UOw1ry%2F9aP4c0k2ImIvRW&X-Amz-Signature=00195b36570b8462f691607fb31370479b9059fa63712b827ef28bffa8ed6b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEGWVQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDZHJqURnXBJcYhAyB9b4r65NkVSlegO20b8uJEvIWTRgIgC99uKZr2BIkogiJEFfjRvNL9P27cuqKFpDT12DUwCFYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKjRIRhqr1LnfOAwyCrcAwcAm6ZozkbGTxFMnxhd2bPuj0NP%2B9S3cPchQOegpVTqwnCyANdY0pKFfdAqaPEUgbOKor1bCFJvsnVc8REU5HUak3DfH7AhSuVMBiWPP1jGM2v3%2BH3P0b2NJC%2FLD5SUTadyEtekD0tX09bDuuzVnVZ%2BJM0s2qd7Ug9fRCWk%2Bghx619bcBEIvLg%2BexGpa8zaZYrD0iWr9RGfe4Zcg8nUlei2OCTqFbwDVrtY5I9uCgUzQmZAalEUOaD%2F1BD7BY6mpkIkU1yU4QIwCr4P6OUaHzBuhXfQj10%2FZZrTtQpE0HdakN3zEnx%2BxfvkWf4Te7nvaLd8JzSMlWQELqwSyn7242U2oNN8nOw0fOZjPIEQMpX8XgE6qV3svvez1loty4Zy6X14Zz5%2F2IuI7doCp4qWmdlhB0bCyW8H1NYRg%2FP%2Fk9ELPLhDt%2BvRwjuhWNNs2pwRBs%2BzsAmyaZNsrQ%2F7JgAkF%2BUnyJptbJQtxQ6rrZ3rRfXOh7v9RboSMlJkzLoLbohTvrfYUEzVuhuQOvuf3qLfZxxk58BqzMRa0E1lWXB%2B7a5gQAdOxBLrpoYKTo0Koh8pjZc%2FujRf9R5gUU%2BpiWQLXocvArY8g0AFnmVfL3NPcVTB9ztbAVuaCXowpxESMI6QiMQGOqUBLadcvNvpq%2BZ%2BCcyR4KXhq%2Bm7WStsn%2BbpingaqcZ71tM6qDGYnEhDCncdPpdXaOmo%2Ffv7N3iDP63SK4aZ78EAI9e2wMCDxlvlACMo5vQUL3YvFauiZ4bE4epzlak%2F7B%2FDa0f37ge4yQzIa26lMXbrZbaFuEQGH8IpvGglJNdK6PxcsHA0o6DI18WDD7pvBRv388F9MA3UOw1ry%2F9aP4c0k2ImIvRW&X-Amz-Signature=36a9487455634d7db1ba54a20bec93140e561f5c15b322bceefd0162eb1a4c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEGWVQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDZHJqURnXBJcYhAyB9b4r65NkVSlegO20b8uJEvIWTRgIgC99uKZr2BIkogiJEFfjRvNL9P27cuqKFpDT12DUwCFYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKjRIRhqr1LnfOAwyCrcAwcAm6ZozkbGTxFMnxhd2bPuj0NP%2B9S3cPchQOegpVTqwnCyANdY0pKFfdAqaPEUgbOKor1bCFJvsnVc8REU5HUak3DfH7AhSuVMBiWPP1jGM2v3%2BH3P0b2NJC%2FLD5SUTadyEtekD0tX09bDuuzVnVZ%2BJM0s2qd7Ug9fRCWk%2Bghx619bcBEIvLg%2BexGpa8zaZYrD0iWr9RGfe4Zcg8nUlei2OCTqFbwDVrtY5I9uCgUzQmZAalEUOaD%2F1BD7BY6mpkIkU1yU4QIwCr4P6OUaHzBuhXfQj10%2FZZrTtQpE0HdakN3zEnx%2BxfvkWf4Te7nvaLd8JzSMlWQELqwSyn7242U2oNN8nOw0fOZjPIEQMpX8XgE6qV3svvez1loty4Zy6X14Zz5%2F2IuI7doCp4qWmdlhB0bCyW8H1NYRg%2FP%2Fk9ELPLhDt%2BvRwjuhWNNs2pwRBs%2BzsAmyaZNsrQ%2F7JgAkF%2BUnyJptbJQtxQ6rrZ3rRfXOh7v9RboSMlJkzLoLbohTvrfYUEzVuhuQOvuf3qLfZxxk58BqzMRa0E1lWXB%2B7a5gQAdOxBLrpoYKTo0Koh8pjZc%2FujRf9R5gUU%2BpiWQLXocvArY8g0AFnmVfL3NPcVTB9ztbAVuaCXowpxESMI6QiMQGOqUBLadcvNvpq%2BZ%2BCcyR4KXhq%2Bm7WStsn%2BbpingaqcZ71tM6qDGYnEhDCncdPpdXaOmo%2Ffv7N3iDP63SK4aZ78EAI9e2wMCDxlvlACMo5vQUL3YvFauiZ4bE4epzlak%2F7B%2FDa0f37ge4yQzIa26lMXbrZbaFuEQGH8IpvGglJNdK6PxcsHA0o6DI18WDD7pvBRv388F9MA3UOw1ry%2F9aP4c0k2ImIvRW&X-Amz-Signature=724663e7b0120b4ceb2708087c40420eb30a81f773728b7b837f8b264382abdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPEGWVQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T110943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDZHJqURnXBJcYhAyB9b4r65NkVSlegO20b8uJEvIWTRgIgC99uKZr2BIkogiJEFfjRvNL9P27cuqKFpDT12DUwCFYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKjRIRhqr1LnfOAwyCrcAwcAm6ZozkbGTxFMnxhd2bPuj0NP%2B9S3cPchQOegpVTqwnCyANdY0pKFfdAqaPEUgbOKor1bCFJvsnVc8REU5HUak3DfH7AhSuVMBiWPP1jGM2v3%2BH3P0b2NJC%2FLD5SUTadyEtekD0tX09bDuuzVnVZ%2BJM0s2qd7Ug9fRCWk%2Bghx619bcBEIvLg%2BexGpa8zaZYrD0iWr9RGfe4Zcg8nUlei2OCTqFbwDVrtY5I9uCgUzQmZAalEUOaD%2F1BD7BY6mpkIkU1yU4QIwCr4P6OUaHzBuhXfQj10%2FZZrTtQpE0HdakN3zEnx%2BxfvkWf4Te7nvaLd8JzSMlWQELqwSyn7242U2oNN8nOw0fOZjPIEQMpX8XgE6qV3svvez1loty4Zy6X14Zz5%2F2IuI7doCp4qWmdlhB0bCyW8H1NYRg%2FP%2Fk9ELPLhDt%2BvRwjuhWNNs2pwRBs%2BzsAmyaZNsrQ%2F7JgAkF%2BUnyJptbJQtxQ6rrZ3rRfXOh7v9RboSMlJkzLoLbohTvrfYUEzVuhuQOvuf3qLfZxxk58BqzMRa0E1lWXB%2B7a5gQAdOxBLrpoYKTo0Koh8pjZc%2FujRf9R5gUU%2BpiWQLXocvArY8g0AFnmVfL3NPcVTB9ztbAVuaCXowpxESMI6QiMQGOqUBLadcvNvpq%2BZ%2BCcyR4KXhq%2Bm7WStsn%2BbpingaqcZ71tM6qDGYnEhDCncdPpdXaOmo%2Ffv7N3iDP63SK4aZ78EAI9e2wMCDxlvlACMo5vQUL3YvFauiZ4bE4epzlak%2F7B%2FDa0f37ge4yQzIa26lMXbrZbaFuEQGH8IpvGglJNdK6PxcsHA0o6DI18WDD7pvBRv388F9MA3UOw1ry%2F9aP4c0k2ImIvRW&X-Amz-Signature=88c32b21230baa2686461bad77110b3993ff45cb92c4c9485470184f5aef423b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
