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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAD7MG3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFnqASHHH7qm5u%2BsDC4CyLh%2F%2F4i%2F3p4f69FkRE2fNI4tAiAo%2B0UkEiNddalOH53zNEbYY0pUW0qoGUYest570SmSlCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM1ppoQxQ%2FAJKvZe2UKtwDa%2F8pvSnApo0%2B0SjMlN7hVOrSPTEO9jl6LW5OkaKBod4hTCMWLBprKtQY1gzpX2r1dqWY996AQg0KMFqDZGcnO7l%2FHamupWf5WJMfq3x13YsUtI0fkC%2BWVdpmeG7ROpB9HE3o2VaqyXuNzzvLKzSGXALarXxromt%2FKKbXmcAb30YJ%2BWk6u66ABXAknW9HxdyR6KaGLNow0m28LVmKiRd%2FazuTS8NNNOcaf7OsBlW0alDtZFuw12VV6BbDaubPRREf0%2FvCoZW87e9QFUGaUARuKZoh2b7Qo058qss7NPn3ORpeGoHtsI0fzz1PoN0BUD2MOvPDixD%2BCCEHT6nAFHBfcAyfAVXYy7rouHsgPBmQd7mFsOarrebl4yXzbsMkF90ShQD1waRhZgYi%2BGe3ZvCjF3MPyn4hZFqX9bqqZnGCaGbCWnz%2BZd%2FnLTGGdtYILR%2B1QKxjG4AgCXhPqfWKlPNfZsP0X4NlZHl4EEyUJE3GDZhPXld9tjltnHOuxOUfRXJED2GSRn3CqSaULD3LX%2FPOScUzszj8CXltw6Qz4oqt3gfZxgFa4%2FiM8rImODXwNyTTdgo7f9%2FGNbDxZohyEpmJ9EPQeX6GpSjOUQge8EEf4wkYrQiRKm5JeSYivFUwk%2BCXxAY6pgFreW%2F9PgGFEktAjxg%2FdXjrPLSLbvLXaar8X7nLvbPgimmNo0uoHeW9Qz4QMNuoh7cDw5aeQ2SRYuEgfoxN6ayn4QHO0jtueVlg7gYlyVt9x1B4s5byqrNzPP6BYEOx8jBPSH0TsYDaVAgcbaZnXfY5uUU%2F7clqh%2FDsn7t3HTqT5DA19hoHzsMDYrX58g3wze9A0XXKcbBtCWf4CpILQ40yZw9yTQXu&X-Amz-Signature=336417deeb999e3e2a6005040c34fe6e66de1db3993a34ef2570679ff79b5b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAD7MG3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFnqASHHH7qm5u%2BsDC4CyLh%2F%2F4i%2F3p4f69FkRE2fNI4tAiAo%2B0UkEiNddalOH53zNEbYY0pUW0qoGUYest570SmSlCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM1ppoQxQ%2FAJKvZe2UKtwDa%2F8pvSnApo0%2B0SjMlN7hVOrSPTEO9jl6LW5OkaKBod4hTCMWLBprKtQY1gzpX2r1dqWY996AQg0KMFqDZGcnO7l%2FHamupWf5WJMfq3x13YsUtI0fkC%2BWVdpmeG7ROpB9HE3o2VaqyXuNzzvLKzSGXALarXxromt%2FKKbXmcAb30YJ%2BWk6u66ABXAknW9HxdyR6KaGLNow0m28LVmKiRd%2FazuTS8NNNOcaf7OsBlW0alDtZFuw12VV6BbDaubPRREf0%2FvCoZW87e9QFUGaUARuKZoh2b7Qo058qss7NPn3ORpeGoHtsI0fzz1PoN0BUD2MOvPDixD%2BCCEHT6nAFHBfcAyfAVXYy7rouHsgPBmQd7mFsOarrebl4yXzbsMkF90ShQD1waRhZgYi%2BGe3ZvCjF3MPyn4hZFqX9bqqZnGCaGbCWnz%2BZd%2FnLTGGdtYILR%2B1QKxjG4AgCXhPqfWKlPNfZsP0X4NlZHl4EEyUJE3GDZhPXld9tjltnHOuxOUfRXJED2GSRn3CqSaULD3LX%2FPOScUzszj8CXltw6Qz4oqt3gfZxgFa4%2FiM8rImODXwNyTTdgo7f9%2FGNbDxZohyEpmJ9EPQeX6GpSjOUQge8EEf4wkYrQiRKm5JeSYivFUwk%2BCXxAY6pgFreW%2F9PgGFEktAjxg%2FdXjrPLSLbvLXaar8X7nLvbPgimmNo0uoHeW9Qz4QMNuoh7cDw5aeQ2SRYuEgfoxN6ayn4QHO0jtueVlg7gYlyVt9x1B4s5byqrNzPP6BYEOx8jBPSH0TsYDaVAgcbaZnXfY5uUU%2F7clqh%2FDsn7t3HTqT5DA19hoHzsMDYrX58g3wze9A0XXKcbBtCWf4CpILQ40yZw9yTQXu&X-Amz-Signature=98870afab36fe4844f4155726fe9fec7de590539b902e53edf1b9e91a85d1536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAD7MG3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFnqASHHH7qm5u%2BsDC4CyLh%2F%2F4i%2F3p4f69FkRE2fNI4tAiAo%2B0UkEiNddalOH53zNEbYY0pUW0qoGUYest570SmSlCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM1ppoQxQ%2FAJKvZe2UKtwDa%2F8pvSnApo0%2B0SjMlN7hVOrSPTEO9jl6LW5OkaKBod4hTCMWLBprKtQY1gzpX2r1dqWY996AQg0KMFqDZGcnO7l%2FHamupWf5WJMfq3x13YsUtI0fkC%2BWVdpmeG7ROpB9HE3o2VaqyXuNzzvLKzSGXALarXxromt%2FKKbXmcAb30YJ%2BWk6u66ABXAknW9HxdyR6KaGLNow0m28LVmKiRd%2FazuTS8NNNOcaf7OsBlW0alDtZFuw12VV6BbDaubPRREf0%2FvCoZW87e9QFUGaUARuKZoh2b7Qo058qss7NPn3ORpeGoHtsI0fzz1PoN0BUD2MOvPDixD%2BCCEHT6nAFHBfcAyfAVXYy7rouHsgPBmQd7mFsOarrebl4yXzbsMkF90ShQD1waRhZgYi%2BGe3ZvCjF3MPyn4hZFqX9bqqZnGCaGbCWnz%2BZd%2FnLTGGdtYILR%2B1QKxjG4AgCXhPqfWKlPNfZsP0X4NlZHl4EEyUJE3GDZhPXld9tjltnHOuxOUfRXJED2GSRn3CqSaULD3LX%2FPOScUzszj8CXltw6Qz4oqt3gfZxgFa4%2FiM8rImODXwNyTTdgo7f9%2FGNbDxZohyEpmJ9EPQeX6GpSjOUQge8EEf4wkYrQiRKm5JeSYivFUwk%2BCXxAY6pgFreW%2F9PgGFEktAjxg%2FdXjrPLSLbvLXaar8X7nLvbPgimmNo0uoHeW9Qz4QMNuoh7cDw5aeQ2SRYuEgfoxN6ayn4QHO0jtueVlg7gYlyVt9x1B4s5byqrNzPP6BYEOx8jBPSH0TsYDaVAgcbaZnXfY5uUU%2F7clqh%2FDsn7t3HTqT5DA19hoHzsMDYrX58g3wze9A0XXKcbBtCWf4CpILQ40yZw9yTQXu&X-Amz-Signature=f5e0eff662724977d28ebad6ec5139ff499ed1e9c42967ba833e5e01a1e62195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAD7MG3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFnqASHHH7qm5u%2BsDC4CyLh%2F%2F4i%2F3p4f69FkRE2fNI4tAiAo%2B0UkEiNddalOH53zNEbYY0pUW0qoGUYest570SmSlCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM1ppoQxQ%2FAJKvZe2UKtwDa%2F8pvSnApo0%2B0SjMlN7hVOrSPTEO9jl6LW5OkaKBod4hTCMWLBprKtQY1gzpX2r1dqWY996AQg0KMFqDZGcnO7l%2FHamupWf5WJMfq3x13YsUtI0fkC%2BWVdpmeG7ROpB9HE3o2VaqyXuNzzvLKzSGXALarXxromt%2FKKbXmcAb30YJ%2BWk6u66ABXAknW9HxdyR6KaGLNow0m28LVmKiRd%2FazuTS8NNNOcaf7OsBlW0alDtZFuw12VV6BbDaubPRREf0%2FvCoZW87e9QFUGaUARuKZoh2b7Qo058qss7NPn3ORpeGoHtsI0fzz1PoN0BUD2MOvPDixD%2BCCEHT6nAFHBfcAyfAVXYy7rouHsgPBmQd7mFsOarrebl4yXzbsMkF90ShQD1waRhZgYi%2BGe3ZvCjF3MPyn4hZFqX9bqqZnGCaGbCWnz%2BZd%2FnLTGGdtYILR%2B1QKxjG4AgCXhPqfWKlPNfZsP0X4NlZHl4EEyUJE3GDZhPXld9tjltnHOuxOUfRXJED2GSRn3CqSaULD3LX%2FPOScUzszj8CXltw6Qz4oqt3gfZxgFa4%2FiM8rImODXwNyTTdgo7f9%2FGNbDxZohyEpmJ9EPQeX6GpSjOUQge8EEf4wkYrQiRKm5JeSYivFUwk%2BCXxAY6pgFreW%2F9PgGFEktAjxg%2FdXjrPLSLbvLXaar8X7nLvbPgimmNo0uoHeW9Qz4QMNuoh7cDw5aeQ2SRYuEgfoxN6ayn4QHO0jtueVlg7gYlyVt9x1B4s5byqrNzPP6BYEOx8jBPSH0TsYDaVAgcbaZnXfY5uUU%2F7clqh%2FDsn7t3HTqT5DA19hoHzsMDYrX58g3wze9A0XXKcbBtCWf4CpILQ40yZw9yTQXu&X-Amz-Signature=bccf055de303b0ddde95f56f3fe0612742a1653bd372034b27206ebe77234f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAD7MG3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFnqASHHH7qm5u%2BsDC4CyLh%2F%2F4i%2F3p4f69FkRE2fNI4tAiAo%2B0UkEiNddalOH53zNEbYY0pUW0qoGUYest570SmSlCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM1ppoQxQ%2FAJKvZe2UKtwDa%2F8pvSnApo0%2B0SjMlN7hVOrSPTEO9jl6LW5OkaKBod4hTCMWLBprKtQY1gzpX2r1dqWY996AQg0KMFqDZGcnO7l%2FHamupWf5WJMfq3x13YsUtI0fkC%2BWVdpmeG7ROpB9HE3o2VaqyXuNzzvLKzSGXALarXxromt%2FKKbXmcAb30YJ%2BWk6u66ABXAknW9HxdyR6KaGLNow0m28LVmKiRd%2FazuTS8NNNOcaf7OsBlW0alDtZFuw12VV6BbDaubPRREf0%2FvCoZW87e9QFUGaUARuKZoh2b7Qo058qss7NPn3ORpeGoHtsI0fzz1PoN0BUD2MOvPDixD%2BCCEHT6nAFHBfcAyfAVXYy7rouHsgPBmQd7mFsOarrebl4yXzbsMkF90ShQD1waRhZgYi%2BGe3ZvCjF3MPyn4hZFqX9bqqZnGCaGbCWnz%2BZd%2FnLTGGdtYILR%2B1QKxjG4AgCXhPqfWKlPNfZsP0X4NlZHl4EEyUJE3GDZhPXld9tjltnHOuxOUfRXJED2GSRn3CqSaULD3LX%2FPOScUzszj8CXltw6Qz4oqt3gfZxgFa4%2FiM8rImODXwNyTTdgo7f9%2FGNbDxZohyEpmJ9EPQeX6GpSjOUQge8EEf4wkYrQiRKm5JeSYivFUwk%2BCXxAY6pgFreW%2F9PgGFEktAjxg%2FdXjrPLSLbvLXaar8X7nLvbPgimmNo0uoHeW9Qz4QMNuoh7cDw5aeQ2SRYuEgfoxN6ayn4QHO0jtueVlg7gYlyVt9x1B4s5byqrNzPP6BYEOx8jBPSH0TsYDaVAgcbaZnXfY5uUU%2F7clqh%2FDsn7t3HTqT5DA19hoHzsMDYrX58g3wze9A0XXKcbBtCWf4CpILQ40yZw9yTQXu&X-Amz-Signature=81433b434b9fd97e2e405ba84d1353ed48cad407ae7a6c265f0d4902fc3fe940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAD7MG3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFnqASHHH7qm5u%2BsDC4CyLh%2F%2F4i%2F3p4f69FkRE2fNI4tAiAo%2B0UkEiNddalOH53zNEbYY0pUW0qoGUYest570SmSlCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM1ppoQxQ%2FAJKvZe2UKtwDa%2F8pvSnApo0%2B0SjMlN7hVOrSPTEO9jl6LW5OkaKBod4hTCMWLBprKtQY1gzpX2r1dqWY996AQg0KMFqDZGcnO7l%2FHamupWf5WJMfq3x13YsUtI0fkC%2BWVdpmeG7ROpB9HE3o2VaqyXuNzzvLKzSGXALarXxromt%2FKKbXmcAb30YJ%2BWk6u66ABXAknW9HxdyR6KaGLNow0m28LVmKiRd%2FazuTS8NNNOcaf7OsBlW0alDtZFuw12VV6BbDaubPRREf0%2FvCoZW87e9QFUGaUARuKZoh2b7Qo058qss7NPn3ORpeGoHtsI0fzz1PoN0BUD2MOvPDixD%2BCCEHT6nAFHBfcAyfAVXYy7rouHsgPBmQd7mFsOarrebl4yXzbsMkF90ShQD1waRhZgYi%2BGe3ZvCjF3MPyn4hZFqX9bqqZnGCaGbCWnz%2BZd%2FnLTGGdtYILR%2B1QKxjG4AgCXhPqfWKlPNfZsP0X4NlZHl4EEyUJE3GDZhPXld9tjltnHOuxOUfRXJED2GSRn3CqSaULD3LX%2FPOScUzszj8CXltw6Qz4oqt3gfZxgFa4%2FiM8rImODXwNyTTdgo7f9%2FGNbDxZohyEpmJ9EPQeX6GpSjOUQge8EEf4wkYrQiRKm5JeSYivFUwk%2BCXxAY6pgFreW%2F9PgGFEktAjxg%2FdXjrPLSLbvLXaar8X7nLvbPgimmNo0uoHeW9Qz4QMNuoh7cDw5aeQ2SRYuEgfoxN6ayn4QHO0jtueVlg7gYlyVt9x1B4s5byqrNzPP6BYEOx8jBPSH0TsYDaVAgcbaZnXfY5uUU%2F7clqh%2FDsn7t3HTqT5DA19hoHzsMDYrX58g3wze9A0XXKcbBtCWf4CpILQ40yZw9yTQXu&X-Amz-Signature=89aa135ec62935be301666f6588683c1dc2fc81ddbd86164e3b4b9517af7c66c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAD7MG3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFnqASHHH7qm5u%2BsDC4CyLh%2F%2F4i%2F3p4f69FkRE2fNI4tAiAo%2B0UkEiNddalOH53zNEbYY0pUW0qoGUYest570SmSlCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM1ppoQxQ%2FAJKvZe2UKtwDa%2F8pvSnApo0%2B0SjMlN7hVOrSPTEO9jl6LW5OkaKBod4hTCMWLBprKtQY1gzpX2r1dqWY996AQg0KMFqDZGcnO7l%2FHamupWf5WJMfq3x13YsUtI0fkC%2BWVdpmeG7ROpB9HE3o2VaqyXuNzzvLKzSGXALarXxromt%2FKKbXmcAb30YJ%2BWk6u66ABXAknW9HxdyR6KaGLNow0m28LVmKiRd%2FazuTS8NNNOcaf7OsBlW0alDtZFuw12VV6BbDaubPRREf0%2FvCoZW87e9QFUGaUARuKZoh2b7Qo058qss7NPn3ORpeGoHtsI0fzz1PoN0BUD2MOvPDixD%2BCCEHT6nAFHBfcAyfAVXYy7rouHsgPBmQd7mFsOarrebl4yXzbsMkF90ShQD1waRhZgYi%2BGe3ZvCjF3MPyn4hZFqX9bqqZnGCaGbCWnz%2BZd%2FnLTGGdtYILR%2B1QKxjG4AgCXhPqfWKlPNfZsP0X4NlZHl4EEyUJE3GDZhPXld9tjltnHOuxOUfRXJED2GSRn3CqSaULD3LX%2FPOScUzszj8CXltw6Qz4oqt3gfZxgFa4%2FiM8rImODXwNyTTdgo7f9%2FGNbDxZohyEpmJ9EPQeX6GpSjOUQge8EEf4wkYrQiRKm5JeSYivFUwk%2BCXxAY6pgFreW%2F9PgGFEktAjxg%2FdXjrPLSLbvLXaar8X7nLvbPgimmNo0uoHeW9Qz4QMNuoh7cDw5aeQ2SRYuEgfoxN6ayn4QHO0jtueVlg7gYlyVt9x1B4s5byqrNzPP6BYEOx8jBPSH0TsYDaVAgcbaZnXfY5uUU%2F7clqh%2FDsn7t3HTqT5DA19hoHzsMDYrX58g3wze9A0XXKcbBtCWf4CpILQ40yZw9yTQXu&X-Amz-Signature=8cd9010cd6c4b88e22b53e746df5a07da9abd1e5304576be6a9a0e3cb861c4d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAD7MG3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFnqASHHH7qm5u%2BsDC4CyLh%2F%2F4i%2F3p4f69FkRE2fNI4tAiAo%2B0UkEiNddalOH53zNEbYY0pUW0qoGUYest570SmSlCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM1ppoQxQ%2FAJKvZe2UKtwDa%2F8pvSnApo0%2B0SjMlN7hVOrSPTEO9jl6LW5OkaKBod4hTCMWLBprKtQY1gzpX2r1dqWY996AQg0KMFqDZGcnO7l%2FHamupWf5WJMfq3x13YsUtI0fkC%2BWVdpmeG7ROpB9HE3o2VaqyXuNzzvLKzSGXALarXxromt%2FKKbXmcAb30YJ%2BWk6u66ABXAknW9HxdyR6KaGLNow0m28LVmKiRd%2FazuTS8NNNOcaf7OsBlW0alDtZFuw12VV6BbDaubPRREf0%2FvCoZW87e9QFUGaUARuKZoh2b7Qo058qss7NPn3ORpeGoHtsI0fzz1PoN0BUD2MOvPDixD%2BCCEHT6nAFHBfcAyfAVXYy7rouHsgPBmQd7mFsOarrebl4yXzbsMkF90ShQD1waRhZgYi%2BGe3ZvCjF3MPyn4hZFqX9bqqZnGCaGbCWnz%2BZd%2FnLTGGdtYILR%2B1QKxjG4AgCXhPqfWKlPNfZsP0X4NlZHl4EEyUJE3GDZhPXld9tjltnHOuxOUfRXJED2GSRn3CqSaULD3LX%2FPOScUzszj8CXltw6Qz4oqt3gfZxgFa4%2FiM8rImODXwNyTTdgo7f9%2FGNbDxZohyEpmJ9EPQeX6GpSjOUQge8EEf4wkYrQiRKm5JeSYivFUwk%2BCXxAY6pgFreW%2F9PgGFEktAjxg%2FdXjrPLSLbvLXaar8X7nLvbPgimmNo0uoHeW9Qz4QMNuoh7cDw5aeQ2SRYuEgfoxN6ayn4QHO0jtueVlg7gYlyVt9x1B4s5byqrNzPP6BYEOx8jBPSH0TsYDaVAgcbaZnXfY5uUU%2F7clqh%2FDsn7t3HTqT5DA19hoHzsMDYrX58g3wze9A0XXKcbBtCWf4CpILQ40yZw9yTQXu&X-Amz-Signature=31f0cee7a4692119d1db9bb8f2097e95a4abebecd1cc2165e8620cdf487f21e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAD7MG3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFnqASHHH7qm5u%2BsDC4CyLh%2F%2F4i%2F3p4f69FkRE2fNI4tAiAo%2B0UkEiNddalOH53zNEbYY0pUW0qoGUYest570SmSlCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM1ppoQxQ%2FAJKvZe2UKtwDa%2F8pvSnApo0%2B0SjMlN7hVOrSPTEO9jl6LW5OkaKBod4hTCMWLBprKtQY1gzpX2r1dqWY996AQg0KMFqDZGcnO7l%2FHamupWf5WJMfq3x13YsUtI0fkC%2BWVdpmeG7ROpB9HE3o2VaqyXuNzzvLKzSGXALarXxromt%2FKKbXmcAb30YJ%2BWk6u66ABXAknW9HxdyR6KaGLNow0m28LVmKiRd%2FazuTS8NNNOcaf7OsBlW0alDtZFuw12VV6BbDaubPRREf0%2FvCoZW87e9QFUGaUARuKZoh2b7Qo058qss7NPn3ORpeGoHtsI0fzz1PoN0BUD2MOvPDixD%2BCCEHT6nAFHBfcAyfAVXYy7rouHsgPBmQd7mFsOarrebl4yXzbsMkF90ShQD1waRhZgYi%2BGe3ZvCjF3MPyn4hZFqX9bqqZnGCaGbCWnz%2BZd%2FnLTGGdtYILR%2B1QKxjG4AgCXhPqfWKlPNfZsP0X4NlZHl4EEyUJE3GDZhPXld9tjltnHOuxOUfRXJED2GSRn3CqSaULD3LX%2FPOScUzszj8CXltw6Qz4oqt3gfZxgFa4%2FiM8rImODXwNyTTdgo7f9%2FGNbDxZohyEpmJ9EPQeX6GpSjOUQge8EEf4wkYrQiRKm5JeSYivFUwk%2BCXxAY6pgFreW%2F9PgGFEktAjxg%2FdXjrPLSLbvLXaar8X7nLvbPgimmNo0uoHeW9Qz4QMNuoh7cDw5aeQ2SRYuEgfoxN6ayn4QHO0jtueVlg7gYlyVt9x1B4s5byqrNzPP6BYEOx8jBPSH0TsYDaVAgcbaZnXfY5uUU%2F7clqh%2FDsn7t3HTqT5DA19hoHzsMDYrX58g3wze9A0XXKcbBtCWf4CpILQ40yZw9yTQXu&X-Amz-Signature=3897f5cb109012dfd62b059701243863533fef01db82bf64c73183f11a1610c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
