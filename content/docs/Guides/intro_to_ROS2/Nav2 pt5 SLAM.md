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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65IPQB7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD2d90a1jTrTmAe9IKmOZQ3s8pSWxLzwATsArcai5cvLAIgJwEp7A472RIqABApCZxm9l48YnD6HQ6%2Bh%2BVEIUDau3cqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkgQ7j5OKuadoc0WSrcAy3K63vWB%2B%2Fkb90eSn65ikD%2BE6LzFP01rRQjLxRD2zPlTWCU3d4fKl1oLhqrLD8tYu1kRnZmNnb0DZlQtzdBfbj14LYva3nfkUhfg22mylJeQRIl37OBCCKnc%2B4G5IY0ZLsbW9g1CIlw98p4lzf6e%2BMhAsT5GCQdceG1SDeY8DJM0hHGGrC0nvOaKVP0FCpX%2F7bP%2BDkGEsN7DsTLGKNyNQarTBCEUknK6krlFiC8N%2Ff9L5MQSoBWn0i%2F83h9ymE9yiMGSO78p7smMIi4YRh9BHaKgk6fMFWkoMjLJSIt9asSnUbKX3esb3Z50A8BJ1nnCbTY8S1FASCvwLSCgcJ4pk5tTW8xtwwTcDlyXVMa8YyX6iD%2F%2FcPJFT7Clc85O9SCv%2Fatv3QMo5V5F7ZIKW9T8seVLwJMhGTc7qLzTv5BOnqDE8p1%2F9OEjEEcvJ5wM2%2BbcSrHhdemDJMH6u1MmNAg93QEVnN8CBDl9Wdw2QfOwBuzy4i38zHjQDGS%2F3P%2Bnw1FMyXqADePhHN7ursZnwA6uA%2FgtASzbNLcaZdO2YUg1995AQ6FLBzx3EiwuTWIxpY7MhHA0UeKyY7BYDFYXjjV1oEG5wxjo9S6TxPMF746XnOwSg0BgoY1v4BNn7PSMLG5n8QGOqUBo0fBYHo%2BTzrhbJr1BC6c8TnbQrUOe6DkUtA9E3ao%2BBNIAywqgnpTi2Awf89FD9A1Ci03DFs3KjZ8rpIPNTFQ2s%2B0%2BMof7gTSyR69jxr8gA08Mj%2BNcx3XjTZ4bvkWHcnCRmcaRr5cCsJBccAdtWy0hJvOavujY3zlGox4qtpcCOYzSMMjkwtc1QTYtYSHYaT%2BmMCYf%2FI7aeT%2Foix7MCRzcdyw4Hvx&X-Amz-Signature=01d413486de21d808fdacc5ebf9af29055900e6024bfa49b39a3c4851b4e4d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65IPQB7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD2d90a1jTrTmAe9IKmOZQ3s8pSWxLzwATsArcai5cvLAIgJwEp7A472RIqABApCZxm9l48YnD6HQ6%2Bh%2BVEIUDau3cqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkgQ7j5OKuadoc0WSrcAy3K63vWB%2B%2Fkb90eSn65ikD%2BE6LzFP01rRQjLxRD2zPlTWCU3d4fKl1oLhqrLD8tYu1kRnZmNnb0DZlQtzdBfbj14LYva3nfkUhfg22mylJeQRIl37OBCCKnc%2B4G5IY0ZLsbW9g1CIlw98p4lzf6e%2BMhAsT5GCQdceG1SDeY8DJM0hHGGrC0nvOaKVP0FCpX%2F7bP%2BDkGEsN7DsTLGKNyNQarTBCEUknK6krlFiC8N%2Ff9L5MQSoBWn0i%2F83h9ymE9yiMGSO78p7smMIi4YRh9BHaKgk6fMFWkoMjLJSIt9asSnUbKX3esb3Z50A8BJ1nnCbTY8S1FASCvwLSCgcJ4pk5tTW8xtwwTcDlyXVMa8YyX6iD%2F%2FcPJFT7Clc85O9SCv%2Fatv3QMo5V5F7ZIKW9T8seVLwJMhGTc7qLzTv5BOnqDE8p1%2F9OEjEEcvJ5wM2%2BbcSrHhdemDJMH6u1MmNAg93QEVnN8CBDl9Wdw2QfOwBuzy4i38zHjQDGS%2F3P%2Bnw1FMyXqADePhHN7ursZnwA6uA%2FgtASzbNLcaZdO2YUg1995AQ6FLBzx3EiwuTWIxpY7MhHA0UeKyY7BYDFYXjjV1oEG5wxjo9S6TxPMF746XnOwSg0BgoY1v4BNn7PSMLG5n8QGOqUBo0fBYHo%2BTzrhbJr1BC6c8TnbQrUOe6DkUtA9E3ao%2BBNIAywqgnpTi2Awf89FD9A1Ci03DFs3KjZ8rpIPNTFQ2s%2B0%2BMof7gTSyR69jxr8gA08Mj%2BNcx3XjTZ4bvkWHcnCRmcaRr5cCsJBccAdtWy0hJvOavujY3zlGox4qtpcCOYzSMMjkwtc1QTYtYSHYaT%2BmMCYf%2FI7aeT%2Foix7MCRzcdyw4Hvx&X-Amz-Signature=781839bb0e82d1bd92db204cb15582ccf0bd23983831e2702b254f98dcfed139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65IPQB7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD2d90a1jTrTmAe9IKmOZQ3s8pSWxLzwATsArcai5cvLAIgJwEp7A472RIqABApCZxm9l48YnD6HQ6%2Bh%2BVEIUDau3cqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkgQ7j5OKuadoc0WSrcAy3K63vWB%2B%2Fkb90eSn65ikD%2BE6LzFP01rRQjLxRD2zPlTWCU3d4fKl1oLhqrLD8tYu1kRnZmNnb0DZlQtzdBfbj14LYva3nfkUhfg22mylJeQRIl37OBCCKnc%2B4G5IY0ZLsbW9g1CIlw98p4lzf6e%2BMhAsT5GCQdceG1SDeY8DJM0hHGGrC0nvOaKVP0FCpX%2F7bP%2BDkGEsN7DsTLGKNyNQarTBCEUknK6krlFiC8N%2Ff9L5MQSoBWn0i%2F83h9ymE9yiMGSO78p7smMIi4YRh9BHaKgk6fMFWkoMjLJSIt9asSnUbKX3esb3Z50A8BJ1nnCbTY8S1FASCvwLSCgcJ4pk5tTW8xtwwTcDlyXVMa8YyX6iD%2F%2FcPJFT7Clc85O9SCv%2Fatv3QMo5V5F7ZIKW9T8seVLwJMhGTc7qLzTv5BOnqDE8p1%2F9OEjEEcvJ5wM2%2BbcSrHhdemDJMH6u1MmNAg93QEVnN8CBDl9Wdw2QfOwBuzy4i38zHjQDGS%2F3P%2Bnw1FMyXqADePhHN7ursZnwA6uA%2FgtASzbNLcaZdO2YUg1995AQ6FLBzx3EiwuTWIxpY7MhHA0UeKyY7BYDFYXjjV1oEG5wxjo9S6TxPMF746XnOwSg0BgoY1v4BNn7PSMLG5n8QGOqUBo0fBYHo%2BTzrhbJr1BC6c8TnbQrUOe6DkUtA9E3ao%2BBNIAywqgnpTi2Awf89FD9A1Ci03DFs3KjZ8rpIPNTFQ2s%2B0%2BMof7gTSyR69jxr8gA08Mj%2BNcx3XjTZ4bvkWHcnCRmcaRr5cCsJBccAdtWy0hJvOavujY3zlGox4qtpcCOYzSMMjkwtc1QTYtYSHYaT%2BmMCYf%2FI7aeT%2Foix7MCRzcdyw4Hvx&X-Amz-Signature=e992e2b479b45d20f4fcf7e7fad077d7fbcffc66eb8c030da5a130b0f84b89e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65IPQB7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD2d90a1jTrTmAe9IKmOZQ3s8pSWxLzwATsArcai5cvLAIgJwEp7A472RIqABApCZxm9l48YnD6HQ6%2Bh%2BVEIUDau3cqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkgQ7j5OKuadoc0WSrcAy3K63vWB%2B%2Fkb90eSn65ikD%2BE6LzFP01rRQjLxRD2zPlTWCU3d4fKl1oLhqrLD8tYu1kRnZmNnb0DZlQtzdBfbj14LYva3nfkUhfg22mylJeQRIl37OBCCKnc%2B4G5IY0ZLsbW9g1CIlw98p4lzf6e%2BMhAsT5GCQdceG1SDeY8DJM0hHGGrC0nvOaKVP0FCpX%2F7bP%2BDkGEsN7DsTLGKNyNQarTBCEUknK6krlFiC8N%2Ff9L5MQSoBWn0i%2F83h9ymE9yiMGSO78p7smMIi4YRh9BHaKgk6fMFWkoMjLJSIt9asSnUbKX3esb3Z50A8BJ1nnCbTY8S1FASCvwLSCgcJ4pk5tTW8xtwwTcDlyXVMa8YyX6iD%2F%2FcPJFT7Clc85O9SCv%2Fatv3QMo5V5F7ZIKW9T8seVLwJMhGTc7qLzTv5BOnqDE8p1%2F9OEjEEcvJ5wM2%2BbcSrHhdemDJMH6u1MmNAg93QEVnN8CBDl9Wdw2QfOwBuzy4i38zHjQDGS%2F3P%2Bnw1FMyXqADePhHN7ursZnwA6uA%2FgtASzbNLcaZdO2YUg1995AQ6FLBzx3EiwuTWIxpY7MhHA0UeKyY7BYDFYXjjV1oEG5wxjo9S6TxPMF746XnOwSg0BgoY1v4BNn7PSMLG5n8QGOqUBo0fBYHo%2BTzrhbJr1BC6c8TnbQrUOe6DkUtA9E3ao%2BBNIAywqgnpTi2Awf89FD9A1Ci03DFs3KjZ8rpIPNTFQ2s%2B0%2BMof7gTSyR69jxr8gA08Mj%2BNcx3XjTZ4bvkWHcnCRmcaRr5cCsJBccAdtWy0hJvOavujY3zlGox4qtpcCOYzSMMjkwtc1QTYtYSHYaT%2BmMCYf%2FI7aeT%2Foix7MCRzcdyw4Hvx&X-Amz-Signature=43b7e18bb7db3b27ebf2b231c28b3e098e079fa3605f20289ff65803943a2ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65IPQB7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD2d90a1jTrTmAe9IKmOZQ3s8pSWxLzwATsArcai5cvLAIgJwEp7A472RIqABApCZxm9l48YnD6HQ6%2Bh%2BVEIUDau3cqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkgQ7j5OKuadoc0WSrcAy3K63vWB%2B%2Fkb90eSn65ikD%2BE6LzFP01rRQjLxRD2zPlTWCU3d4fKl1oLhqrLD8tYu1kRnZmNnb0DZlQtzdBfbj14LYva3nfkUhfg22mylJeQRIl37OBCCKnc%2B4G5IY0ZLsbW9g1CIlw98p4lzf6e%2BMhAsT5GCQdceG1SDeY8DJM0hHGGrC0nvOaKVP0FCpX%2F7bP%2BDkGEsN7DsTLGKNyNQarTBCEUknK6krlFiC8N%2Ff9L5MQSoBWn0i%2F83h9ymE9yiMGSO78p7smMIi4YRh9BHaKgk6fMFWkoMjLJSIt9asSnUbKX3esb3Z50A8BJ1nnCbTY8S1FASCvwLSCgcJ4pk5tTW8xtwwTcDlyXVMa8YyX6iD%2F%2FcPJFT7Clc85O9SCv%2Fatv3QMo5V5F7ZIKW9T8seVLwJMhGTc7qLzTv5BOnqDE8p1%2F9OEjEEcvJ5wM2%2BbcSrHhdemDJMH6u1MmNAg93QEVnN8CBDl9Wdw2QfOwBuzy4i38zHjQDGS%2F3P%2Bnw1FMyXqADePhHN7ursZnwA6uA%2FgtASzbNLcaZdO2YUg1995AQ6FLBzx3EiwuTWIxpY7MhHA0UeKyY7BYDFYXjjV1oEG5wxjo9S6TxPMF746XnOwSg0BgoY1v4BNn7PSMLG5n8QGOqUBo0fBYHo%2BTzrhbJr1BC6c8TnbQrUOe6DkUtA9E3ao%2BBNIAywqgnpTi2Awf89FD9A1Ci03DFs3KjZ8rpIPNTFQ2s%2B0%2BMof7gTSyR69jxr8gA08Mj%2BNcx3XjTZ4bvkWHcnCRmcaRr5cCsJBccAdtWy0hJvOavujY3zlGox4qtpcCOYzSMMjkwtc1QTYtYSHYaT%2BmMCYf%2FI7aeT%2Foix7MCRzcdyw4Hvx&X-Amz-Signature=af918d19b2f0e0a1b931aa1be7008d6083a9159a826b89087dd9099a1080d90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65IPQB7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD2d90a1jTrTmAe9IKmOZQ3s8pSWxLzwATsArcai5cvLAIgJwEp7A472RIqABApCZxm9l48YnD6HQ6%2Bh%2BVEIUDau3cqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkgQ7j5OKuadoc0WSrcAy3K63vWB%2B%2Fkb90eSn65ikD%2BE6LzFP01rRQjLxRD2zPlTWCU3d4fKl1oLhqrLD8tYu1kRnZmNnb0DZlQtzdBfbj14LYva3nfkUhfg22mylJeQRIl37OBCCKnc%2B4G5IY0ZLsbW9g1CIlw98p4lzf6e%2BMhAsT5GCQdceG1SDeY8DJM0hHGGrC0nvOaKVP0FCpX%2F7bP%2BDkGEsN7DsTLGKNyNQarTBCEUknK6krlFiC8N%2Ff9L5MQSoBWn0i%2F83h9ymE9yiMGSO78p7smMIi4YRh9BHaKgk6fMFWkoMjLJSIt9asSnUbKX3esb3Z50A8BJ1nnCbTY8S1FASCvwLSCgcJ4pk5tTW8xtwwTcDlyXVMa8YyX6iD%2F%2FcPJFT7Clc85O9SCv%2Fatv3QMo5V5F7ZIKW9T8seVLwJMhGTc7qLzTv5BOnqDE8p1%2F9OEjEEcvJ5wM2%2BbcSrHhdemDJMH6u1MmNAg93QEVnN8CBDl9Wdw2QfOwBuzy4i38zHjQDGS%2F3P%2Bnw1FMyXqADePhHN7ursZnwA6uA%2FgtASzbNLcaZdO2YUg1995AQ6FLBzx3EiwuTWIxpY7MhHA0UeKyY7BYDFYXjjV1oEG5wxjo9S6TxPMF746XnOwSg0BgoY1v4BNn7PSMLG5n8QGOqUBo0fBYHo%2BTzrhbJr1BC6c8TnbQrUOe6DkUtA9E3ao%2BBNIAywqgnpTi2Awf89FD9A1Ci03DFs3KjZ8rpIPNTFQ2s%2B0%2BMof7gTSyR69jxr8gA08Mj%2BNcx3XjTZ4bvkWHcnCRmcaRr5cCsJBccAdtWy0hJvOavujY3zlGox4qtpcCOYzSMMjkwtc1QTYtYSHYaT%2BmMCYf%2FI7aeT%2Foix7MCRzcdyw4Hvx&X-Amz-Signature=5e1bf0d87b4ad192716c68015a34d00f01ea9840cef0d535c9d1f7c52c705ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65IPQB7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD2d90a1jTrTmAe9IKmOZQ3s8pSWxLzwATsArcai5cvLAIgJwEp7A472RIqABApCZxm9l48YnD6HQ6%2Bh%2BVEIUDau3cqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkgQ7j5OKuadoc0WSrcAy3K63vWB%2B%2Fkb90eSn65ikD%2BE6LzFP01rRQjLxRD2zPlTWCU3d4fKl1oLhqrLD8tYu1kRnZmNnb0DZlQtzdBfbj14LYva3nfkUhfg22mylJeQRIl37OBCCKnc%2B4G5IY0ZLsbW9g1CIlw98p4lzf6e%2BMhAsT5GCQdceG1SDeY8DJM0hHGGrC0nvOaKVP0FCpX%2F7bP%2BDkGEsN7DsTLGKNyNQarTBCEUknK6krlFiC8N%2Ff9L5MQSoBWn0i%2F83h9ymE9yiMGSO78p7smMIi4YRh9BHaKgk6fMFWkoMjLJSIt9asSnUbKX3esb3Z50A8BJ1nnCbTY8S1FASCvwLSCgcJ4pk5tTW8xtwwTcDlyXVMa8YyX6iD%2F%2FcPJFT7Clc85O9SCv%2Fatv3QMo5V5F7ZIKW9T8seVLwJMhGTc7qLzTv5BOnqDE8p1%2F9OEjEEcvJ5wM2%2BbcSrHhdemDJMH6u1MmNAg93QEVnN8CBDl9Wdw2QfOwBuzy4i38zHjQDGS%2F3P%2Bnw1FMyXqADePhHN7ursZnwA6uA%2FgtASzbNLcaZdO2YUg1995AQ6FLBzx3EiwuTWIxpY7MhHA0UeKyY7BYDFYXjjV1oEG5wxjo9S6TxPMF746XnOwSg0BgoY1v4BNn7PSMLG5n8QGOqUBo0fBYHo%2BTzrhbJr1BC6c8TnbQrUOe6DkUtA9E3ao%2BBNIAywqgnpTi2Awf89FD9A1Ci03DFs3KjZ8rpIPNTFQ2s%2B0%2BMof7gTSyR69jxr8gA08Mj%2BNcx3XjTZ4bvkWHcnCRmcaRr5cCsJBccAdtWy0hJvOavujY3zlGox4qtpcCOYzSMMjkwtc1QTYtYSHYaT%2BmMCYf%2FI7aeT%2Foix7MCRzcdyw4Hvx&X-Amz-Signature=98389b26326ab5742ec7d21ccd9d17c24d48ec2bab00d249d7967f131480eabe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65IPQB7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD2d90a1jTrTmAe9IKmOZQ3s8pSWxLzwATsArcai5cvLAIgJwEp7A472RIqABApCZxm9l48YnD6HQ6%2Bh%2BVEIUDau3cqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkgQ7j5OKuadoc0WSrcAy3K63vWB%2B%2Fkb90eSn65ikD%2BE6LzFP01rRQjLxRD2zPlTWCU3d4fKl1oLhqrLD8tYu1kRnZmNnb0DZlQtzdBfbj14LYva3nfkUhfg22mylJeQRIl37OBCCKnc%2B4G5IY0ZLsbW9g1CIlw98p4lzf6e%2BMhAsT5GCQdceG1SDeY8DJM0hHGGrC0nvOaKVP0FCpX%2F7bP%2BDkGEsN7DsTLGKNyNQarTBCEUknK6krlFiC8N%2Ff9L5MQSoBWn0i%2F83h9ymE9yiMGSO78p7smMIi4YRh9BHaKgk6fMFWkoMjLJSIt9asSnUbKX3esb3Z50A8BJ1nnCbTY8S1FASCvwLSCgcJ4pk5tTW8xtwwTcDlyXVMa8YyX6iD%2F%2FcPJFT7Clc85O9SCv%2Fatv3QMo5V5F7ZIKW9T8seVLwJMhGTc7qLzTv5BOnqDE8p1%2F9OEjEEcvJ5wM2%2BbcSrHhdemDJMH6u1MmNAg93QEVnN8CBDl9Wdw2QfOwBuzy4i38zHjQDGS%2F3P%2Bnw1FMyXqADePhHN7ursZnwA6uA%2FgtASzbNLcaZdO2YUg1995AQ6FLBzx3EiwuTWIxpY7MhHA0UeKyY7BYDFYXjjV1oEG5wxjo9S6TxPMF746XnOwSg0BgoY1v4BNn7PSMLG5n8QGOqUBo0fBYHo%2BTzrhbJr1BC6c8TnbQrUOe6DkUtA9E3ao%2BBNIAywqgnpTi2Awf89FD9A1Ci03DFs3KjZ8rpIPNTFQ2s%2B0%2BMof7gTSyR69jxr8gA08Mj%2BNcx3XjTZ4bvkWHcnCRmcaRr5cCsJBccAdtWy0hJvOavujY3zlGox4qtpcCOYzSMMjkwtc1QTYtYSHYaT%2BmMCYf%2FI7aeT%2Foix7MCRzcdyw4Hvx&X-Amz-Signature=c08875be8b51630a2ec240e704f184ab937fc67c2017f5892f9c925d04db16ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y65IPQB7%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD2d90a1jTrTmAe9IKmOZQ3s8pSWxLzwATsArcai5cvLAIgJwEp7A472RIqABApCZxm9l48YnD6HQ6%2Bh%2BVEIUDau3cqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkgQ7j5OKuadoc0WSrcAy3K63vWB%2B%2Fkb90eSn65ikD%2BE6LzFP01rRQjLxRD2zPlTWCU3d4fKl1oLhqrLD8tYu1kRnZmNnb0DZlQtzdBfbj14LYva3nfkUhfg22mylJeQRIl37OBCCKnc%2B4G5IY0ZLsbW9g1CIlw98p4lzf6e%2BMhAsT5GCQdceG1SDeY8DJM0hHGGrC0nvOaKVP0FCpX%2F7bP%2BDkGEsN7DsTLGKNyNQarTBCEUknK6krlFiC8N%2Ff9L5MQSoBWn0i%2F83h9ymE9yiMGSO78p7smMIi4YRh9BHaKgk6fMFWkoMjLJSIt9asSnUbKX3esb3Z50A8BJ1nnCbTY8S1FASCvwLSCgcJ4pk5tTW8xtwwTcDlyXVMa8YyX6iD%2F%2FcPJFT7Clc85O9SCv%2Fatv3QMo5V5F7ZIKW9T8seVLwJMhGTc7qLzTv5BOnqDE8p1%2F9OEjEEcvJ5wM2%2BbcSrHhdemDJMH6u1MmNAg93QEVnN8CBDl9Wdw2QfOwBuzy4i38zHjQDGS%2F3P%2Bnw1FMyXqADePhHN7ursZnwA6uA%2FgtASzbNLcaZdO2YUg1995AQ6FLBzx3EiwuTWIxpY7MhHA0UeKyY7BYDFYXjjV1oEG5wxjo9S6TxPMF746XnOwSg0BgoY1v4BNn7PSMLG5n8QGOqUBo0fBYHo%2BTzrhbJr1BC6c8TnbQrUOe6DkUtA9E3ao%2BBNIAywqgnpTi2Awf89FD9A1Ci03DFs3KjZ8rpIPNTFQ2s%2B0%2BMof7gTSyR69jxr8gA08Mj%2BNcx3XjTZ4bvkWHcnCRmcaRr5cCsJBccAdtWy0hJvOavujY3zlGox4qtpcCOYzSMMjkwtc1QTYtYSHYaT%2BmMCYf%2FI7aeT%2Foix7MCRzcdyw4Hvx&X-Amz-Signature=53a5044fbd2a9cc4fa6a44544cb8752c84e8d6063f1c7ffcbbf0e9d5aa640349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
