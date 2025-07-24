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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3G2TC6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCCjlnQbcrc%2F7QNbhM%2FlLZfGPEeSaSFZ3s%2FuH5%2BseIjwQIhAPU5wE3SeuCObbUSQhbd59PK3iIfgvNrB%2BikfojJerQEKv8DCC4QABoMNjM3NDIzMTgzODA1Igyrv%2BYcUvmv25T7tfwq3AMfZgIcjWBGy8iUAXzRonxwTGJumW4dNRvZIyvC8SbVenLIB91O8mMuSQkdbY7sz5Wjq0LcoA26OphlweCaIJdCuoIIlbeam26mJOCNEfcofK3NQfmeeHtgNwuuKeTMIHDWXvfCzz1xaQu%2Bl7EFthibgu%2FBwUL9Lvm4z2bYFHTAcRSxz4ABXDcHZSPzZ2m0BKr6WVRKG3bbm43IpV8AMSB0307ntVUUuqQeadLxfQZQ%2FUKKZyi9xx0Vhr1%2B5czxwK9MNMf5X%2BKqyjNIPGCumuDKAsgzu%2BTFtLUE6QAgmtklJL0A%2FICV0YoMQ5y1v9mcGfkikV3jtM11SLiw%2Bt2VoCcP0TlWS%2Fpg5yL0HAQq2h9OSzYBddIqFSOTU%2BOyQHu574NiV8UXXZinKtuMcyQ1%2FbRsxwTSMyaAsJNqsyhnaHq1Oy0SxJnjRY%2Fc13TypPIIbk6rIIO7ps1lkOYIgM8oMq5LsOa%2FuTImghVFVFAuScuuvZ5MAS5zCIQv8fmIRTYBJuh8sfAjzy0FySBPlbsTmitTe5weF3JIyT6MWsGkF5UcKBo1BqD%2FBd0hKHDMSpOcTLVbisc0c%2FHQPsSiof%2F0xjA24KaWtC7qCwNIYWchJzt89ehZCjJ%2FDoU9%2BjBByDCq2YjEBjqkAUq0ltzbZltU9aCe8Kb3GMD1UyarC2H4%2BsX5tVbd27dry8pPTgN0QSaoQXYaJDwN49s1J1dPX8Wwbvvjd%2BBFJ4PQcXDRUe0gSJs09hhprJXMWELAXC2z3gN%2BxXotLVYIgjRxzDeluymDSrdCUwUd5krzmg42I96U9%2Bf9%2FF88aK0tSlFo8u6Ngx7VMVkgtuI6LLGubK9nO%2FXVZhLAdZCX0A6UbxGL&X-Amz-Signature=c76a1d33a9f9d7922b27f050a30ac524314134ebf28cf09eec218b0108558eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3G2TC6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCCjlnQbcrc%2F7QNbhM%2FlLZfGPEeSaSFZ3s%2FuH5%2BseIjwQIhAPU5wE3SeuCObbUSQhbd59PK3iIfgvNrB%2BikfojJerQEKv8DCC4QABoMNjM3NDIzMTgzODA1Igyrv%2BYcUvmv25T7tfwq3AMfZgIcjWBGy8iUAXzRonxwTGJumW4dNRvZIyvC8SbVenLIB91O8mMuSQkdbY7sz5Wjq0LcoA26OphlweCaIJdCuoIIlbeam26mJOCNEfcofK3NQfmeeHtgNwuuKeTMIHDWXvfCzz1xaQu%2Bl7EFthibgu%2FBwUL9Lvm4z2bYFHTAcRSxz4ABXDcHZSPzZ2m0BKr6WVRKG3bbm43IpV8AMSB0307ntVUUuqQeadLxfQZQ%2FUKKZyi9xx0Vhr1%2B5czxwK9MNMf5X%2BKqyjNIPGCumuDKAsgzu%2BTFtLUE6QAgmtklJL0A%2FICV0YoMQ5y1v9mcGfkikV3jtM11SLiw%2Bt2VoCcP0TlWS%2Fpg5yL0HAQq2h9OSzYBddIqFSOTU%2BOyQHu574NiV8UXXZinKtuMcyQ1%2FbRsxwTSMyaAsJNqsyhnaHq1Oy0SxJnjRY%2Fc13TypPIIbk6rIIO7ps1lkOYIgM8oMq5LsOa%2FuTImghVFVFAuScuuvZ5MAS5zCIQv8fmIRTYBJuh8sfAjzy0FySBPlbsTmitTe5weF3JIyT6MWsGkF5UcKBo1BqD%2FBd0hKHDMSpOcTLVbisc0c%2FHQPsSiof%2F0xjA24KaWtC7qCwNIYWchJzt89ehZCjJ%2FDoU9%2BjBByDCq2YjEBjqkAUq0ltzbZltU9aCe8Kb3GMD1UyarC2H4%2BsX5tVbd27dry8pPTgN0QSaoQXYaJDwN49s1J1dPX8Wwbvvjd%2BBFJ4PQcXDRUe0gSJs09hhprJXMWELAXC2z3gN%2BxXotLVYIgjRxzDeluymDSrdCUwUd5krzmg42I96U9%2Bf9%2FF88aK0tSlFo8u6Ngx7VMVkgtuI6LLGubK9nO%2FXVZhLAdZCX0A6UbxGL&X-Amz-Signature=9e44f8fe8de7f92f0ed9bfa4babe72c1af69a321b0c1b200df109f25c069a921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3G2TC6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCCjlnQbcrc%2F7QNbhM%2FlLZfGPEeSaSFZ3s%2FuH5%2BseIjwQIhAPU5wE3SeuCObbUSQhbd59PK3iIfgvNrB%2BikfojJerQEKv8DCC4QABoMNjM3NDIzMTgzODA1Igyrv%2BYcUvmv25T7tfwq3AMfZgIcjWBGy8iUAXzRonxwTGJumW4dNRvZIyvC8SbVenLIB91O8mMuSQkdbY7sz5Wjq0LcoA26OphlweCaIJdCuoIIlbeam26mJOCNEfcofK3NQfmeeHtgNwuuKeTMIHDWXvfCzz1xaQu%2Bl7EFthibgu%2FBwUL9Lvm4z2bYFHTAcRSxz4ABXDcHZSPzZ2m0BKr6WVRKG3bbm43IpV8AMSB0307ntVUUuqQeadLxfQZQ%2FUKKZyi9xx0Vhr1%2B5czxwK9MNMf5X%2BKqyjNIPGCumuDKAsgzu%2BTFtLUE6QAgmtklJL0A%2FICV0YoMQ5y1v9mcGfkikV3jtM11SLiw%2Bt2VoCcP0TlWS%2Fpg5yL0HAQq2h9OSzYBddIqFSOTU%2BOyQHu574NiV8UXXZinKtuMcyQ1%2FbRsxwTSMyaAsJNqsyhnaHq1Oy0SxJnjRY%2Fc13TypPIIbk6rIIO7ps1lkOYIgM8oMq5LsOa%2FuTImghVFVFAuScuuvZ5MAS5zCIQv8fmIRTYBJuh8sfAjzy0FySBPlbsTmitTe5weF3JIyT6MWsGkF5UcKBo1BqD%2FBd0hKHDMSpOcTLVbisc0c%2FHQPsSiof%2F0xjA24KaWtC7qCwNIYWchJzt89ehZCjJ%2FDoU9%2BjBByDCq2YjEBjqkAUq0ltzbZltU9aCe8Kb3GMD1UyarC2H4%2BsX5tVbd27dry8pPTgN0QSaoQXYaJDwN49s1J1dPX8Wwbvvjd%2BBFJ4PQcXDRUe0gSJs09hhprJXMWELAXC2z3gN%2BxXotLVYIgjRxzDeluymDSrdCUwUd5krzmg42I96U9%2Bf9%2FF88aK0tSlFo8u6Ngx7VMVkgtuI6LLGubK9nO%2FXVZhLAdZCX0A6UbxGL&X-Amz-Signature=11e32236b85b7ac1398d02cb868ca21d613cce9b08db6fc4306d19899888ab5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3G2TC6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCCjlnQbcrc%2F7QNbhM%2FlLZfGPEeSaSFZ3s%2FuH5%2BseIjwQIhAPU5wE3SeuCObbUSQhbd59PK3iIfgvNrB%2BikfojJerQEKv8DCC4QABoMNjM3NDIzMTgzODA1Igyrv%2BYcUvmv25T7tfwq3AMfZgIcjWBGy8iUAXzRonxwTGJumW4dNRvZIyvC8SbVenLIB91O8mMuSQkdbY7sz5Wjq0LcoA26OphlweCaIJdCuoIIlbeam26mJOCNEfcofK3NQfmeeHtgNwuuKeTMIHDWXvfCzz1xaQu%2Bl7EFthibgu%2FBwUL9Lvm4z2bYFHTAcRSxz4ABXDcHZSPzZ2m0BKr6WVRKG3bbm43IpV8AMSB0307ntVUUuqQeadLxfQZQ%2FUKKZyi9xx0Vhr1%2B5czxwK9MNMf5X%2BKqyjNIPGCumuDKAsgzu%2BTFtLUE6QAgmtklJL0A%2FICV0YoMQ5y1v9mcGfkikV3jtM11SLiw%2Bt2VoCcP0TlWS%2Fpg5yL0HAQq2h9OSzYBddIqFSOTU%2BOyQHu574NiV8UXXZinKtuMcyQ1%2FbRsxwTSMyaAsJNqsyhnaHq1Oy0SxJnjRY%2Fc13TypPIIbk6rIIO7ps1lkOYIgM8oMq5LsOa%2FuTImghVFVFAuScuuvZ5MAS5zCIQv8fmIRTYBJuh8sfAjzy0FySBPlbsTmitTe5weF3JIyT6MWsGkF5UcKBo1BqD%2FBd0hKHDMSpOcTLVbisc0c%2FHQPsSiof%2F0xjA24KaWtC7qCwNIYWchJzt89ehZCjJ%2FDoU9%2BjBByDCq2YjEBjqkAUq0ltzbZltU9aCe8Kb3GMD1UyarC2H4%2BsX5tVbd27dry8pPTgN0QSaoQXYaJDwN49s1J1dPX8Wwbvvjd%2BBFJ4PQcXDRUe0gSJs09hhprJXMWELAXC2z3gN%2BxXotLVYIgjRxzDeluymDSrdCUwUd5krzmg42I96U9%2Bf9%2FF88aK0tSlFo8u6Ngx7VMVkgtuI6LLGubK9nO%2FXVZhLAdZCX0A6UbxGL&X-Amz-Signature=20b31be7045083b5de172b1f68b44b417d5720a197528033ca33291df5d79434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3G2TC6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCCjlnQbcrc%2F7QNbhM%2FlLZfGPEeSaSFZ3s%2FuH5%2BseIjwQIhAPU5wE3SeuCObbUSQhbd59PK3iIfgvNrB%2BikfojJerQEKv8DCC4QABoMNjM3NDIzMTgzODA1Igyrv%2BYcUvmv25T7tfwq3AMfZgIcjWBGy8iUAXzRonxwTGJumW4dNRvZIyvC8SbVenLIB91O8mMuSQkdbY7sz5Wjq0LcoA26OphlweCaIJdCuoIIlbeam26mJOCNEfcofK3NQfmeeHtgNwuuKeTMIHDWXvfCzz1xaQu%2Bl7EFthibgu%2FBwUL9Lvm4z2bYFHTAcRSxz4ABXDcHZSPzZ2m0BKr6WVRKG3bbm43IpV8AMSB0307ntVUUuqQeadLxfQZQ%2FUKKZyi9xx0Vhr1%2B5czxwK9MNMf5X%2BKqyjNIPGCumuDKAsgzu%2BTFtLUE6QAgmtklJL0A%2FICV0YoMQ5y1v9mcGfkikV3jtM11SLiw%2Bt2VoCcP0TlWS%2Fpg5yL0HAQq2h9OSzYBddIqFSOTU%2BOyQHu574NiV8UXXZinKtuMcyQ1%2FbRsxwTSMyaAsJNqsyhnaHq1Oy0SxJnjRY%2Fc13TypPIIbk6rIIO7ps1lkOYIgM8oMq5LsOa%2FuTImghVFVFAuScuuvZ5MAS5zCIQv8fmIRTYBJuh8sfAjzy0FySBPlbsTmitTe5weF3JIyT6MWsGkF5UcKBo1BqD%2FBd0hKHDMSpOcTLVbisc0c%2FHQPsSiof%2F0xjA24KaWtC7qCwNIYWchJzt89ehZCjJ%2FDoU9%2BjBByDCq2YjEBjqkAUq0ltzbZltU9aCe8Kb3GMD1UyarC2H4%2BsX5tVbd27dry8pPTgN0QSaoQXYaJDwN49s1J1dPX8Wwbvvjd%2BBFJ4PQcXDRUe0gSJs09hhprJXMWELAXC2z3gN%2BxXotLVYIgjRxzDeluymDSrdCUwUd5krzmg42I96U9%2Bf9%2FF88aK0tSlFo8u6Ngx7VMVkgtuI6LLGubK9nO%2FXVZhLAdZCX0A6UbxGL&X-Amz-Signature=df8c032454bfc2b6511955ae3191f585120534acfeaf352560ebc08a8f21fcd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3G2TC6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCCjlnQbcrc%2F7QNbhM%2FlLZfGPEeSaSFZ3s%2FuH5%2BseIjwQIhAPU5wE3SeuCObbUSQhbd59PK3iIfgvNrB%2BikfojJerQEKv8DCC4QABoMNjM3NDIzMTgzODA1Igyrv%2BYcUvmv25T7tfwq3AMfZgIcjWBGy8iUAXzRonxwTGJumW4dNRvZIyvC8SbVenLIB91O8mMuSQkdbY7sz5Wjq0LcoA26OphlweCaIJdCuoIIlbeam26mJOCNEfcofK3NQfmeeHtgNwuuKeTMIHDWXvfCzz1xaQu%2Bl7EFthibgu%2FBwUL9Lvm4z2bYFHTAcRSxz4ABXDcHZSPzZ2m0BKr6WVRKG3bbm43IpV8AMSB0307ntVUUuqQeadLxfQZQ%2FUKKZyi9xx0Vhr1%2B5czxwK9MNMf5X%2BKqyjNIPGCumuDKAsgzu%2BTFtLUE6QAgmtklJL0A%2FICV0YoMQ5y1v9mcGfkikV3jtM11SLiw%2Bt2VoCcP0TlWS%2Fpg5yL0HAQq2h9OSzYBddIqFSOTU%2BOyQHu574NiV8UXXZinKtuMcyQ1%2FbRsxwTSMyaAsJNqsyhnaHq1Oy0SxJnjRY%2Fc13TypPIIbk6rIIO7ps1lkOYIgM8oMq5LsOa%2FuTImghVFVFAuScuuvZ5MAS5zCIQv8fmIRTYBJuh8sfAjzy0FySBPlbsTmitTe5weF3JIyT6MWsGkF5UcKBo1BqD%2FBd0hKHDMSpOcTLVbisc0c%2FHQPsSiof%2F0xjA24KaWtC7qCwNIYWchJzt89ehZCjJ%2FDoU9%2BjBByDCq2YjEBjqkAUq0ltzbZltU9aCe8Kb3GMD1UyarC2H4%2BsX5tVbd27dry8pPTgN0QSaoQXYaJDwN49s1J1dPX8Wwbvvjd%2BBFJ4PQcXDRUe0gSJs09hhprJXMWELAXC2z3gN%2BxXotLVYIgjRxzDeluymDSrdCUwUd5krzmg42I96U9%2Bf9%2FF88aK0tSlFo8u6Ngx7VMVkgtuI6LLGubK9nO%2FXVZhLAdZCX0A6UbxGL&X-Amz-Signature=57829a69a747d357a16bef9c158cfaeccc5b2407d937aa481abdf81114f83578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3G2TC6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCCjlnQbcrc%2F7QNbhM%2FlLZfGPEeSaSFZ3s%2FuH5%2BseIjwQIhAPU5wE3SeuCObbUSQhbd59PK3iIfgvNrB%2BikfojJerQEKv8DCC4QABoMNjM3NDIzMTgzODA1Igyrv%2BYcUvmv25T7tfwq3AMfZgIcjWBGy8iUAXzRonxwTGJumW4dNRvZIyvC8SbVenLIB91O8mMuSQkdbY7sz5Wjq0LcoA26OphlweCaIJdCuoIIlbeam26mJOCNEfcofK3NQfmeeHtgNwuuKeTMIHDWXvfCzz1xaQu%2Bl7EFthibgu%2FBwUL9Lvm4z2bYFHTAcRSxz4ABXDcHZSPzZ2m0BKr6WVRKG3bbm43IpV8AMSB0307ntVUUuqQeadLxfQZQ%2FUKKZyi9xx0Vhr1%2B5czxwK9MNMf5X%2BKqyjNIPGCumuDKAsgzu%2BTFtLUE6QAgmtklJL0A%2FICV0YoMQ5y1v9mcGfkikV3jtM11SLiw%2Bt2VoCcP0TlWS%2Fpg5yL0HAQq2h9OSzYBddIqFSOTU%2BOyQHu574NiV8UXXZinKtuMcyQ1%2FbRsxwTSMyaAsJNqsyhnaHq1Oy0SxJnjRY%2Fc13TypPIIbk6rIIO7ps1lkOYIgM8oMq5LsOa%2FuTImghVFVFAuScuuvZ5MAS5zCIQv8fmIRTYBJuh8sfAjzy0FySBPlbsTmitTe5weF3JIyT6MWsGkF5UcKBo1BqD%2FBd0hKHDMSpOcTLVbisc0c%2FHQPsSiof%2F0xjA24KaWtC7qCwNIYWchJzt89ehZCjJ%2FDoU9%2BjBByDCq2YjEBjqkAUq0ltzbZltU9aCe8Kb3GMD1UyarC2H4%2BsX5tVbd27dry8pPTgN0QSaoQXYaJDwN49s1J1dPX8Wwbvvjd%2BBFJ4PQcXDRUe0gSJs09hhprJXMWELAXC2z3gN%2BxXotLVYIgjRxzDeluymDSrdCUwUd5krzmg42I96U9%2Bf9%2FF88aK0tSlFo8u6Ngx7VMVkgtuI6LLGubK9nO%2FXVZhLAdZCX0A6UbxGL&X-Amz-Signature=6ebf798d56da1d5e7aab3cbc5167dc0eec673312aad577f0299b18f3431b730a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3G2TC6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCCjlnQbcrc%2F7QNbhM%2FlLZfGPEeSaSFZ3s%2FuH5%2BseIjwQIhAPU5wE3SeuCObbUSQhbd59PK3iIfgvNrB%2BikfojJerQEKv8DCC4QABoMNjM3NDIzMTgzODA1Igyrv%2BYcUvmv25T7tfwq3AMfZgIcjWBGy8iUAXzRonxwTGJumW4dNRvZIyvC8SbVenLIB91O8mMuSQkdbY7sz5Wjq0LcoA26OphlweCaIJdCuoIIlbeam26mJOCNEfcofK3NQfmeeHtgNwuuKeTMIHDWXvfCzz1xaQu%2Bl7EFthibgu%2FBwUL9Lvm4z2bYFHTAcRSxz4ABXDcHZSPzZ2m0BKr6WVRKG3bbm43IpV8AMSB0307ntVUUuqQeadLxfQZQ%2FUKKZyi9xx0Vhr1%2B5czxwK9MNMf5X%2BKqyjNIPGCumuDKAsgzu%2BTFtLUE6QAgmtklJL0A%2FICV0YoMQ5y1v9mcGfkikV3jtM11SLiw%2Bt2VoCcP0TlWS%2Fpg5yL0HAQq2h9OSzYBddIqFSOTU%2BOyQHu574NiV8UXXZinKtuMcyQ1%2FbRsxwTSMyaAsJNqsyhnaHq1Oy0SxJnjRY%2Fc13TypPIIbk6rIIO7ps1lkOYIgM8oMq5LsOa%2FuTImghVFVFAuScuuvZ5MAS5zCIQv8fmIRTYBJuh8sfAjzy0FySBPlbsTmitTe5weF3JIyT6MWsGkF5UcKBo1BqD%2FBd0hKHDMSpOcTLVbisc0c%2FHQPsSiof%2F0xjA24KaWtC7qCwNIYWchJzt89ehZCjJ%2FDoU9%2BjBByDCq2YjEBjqkAUq0ltzbZltU9aCe8Kb3GMD1UyarC2H4%2BsX5tVbd27dry8pPTgN0QSaoQXYaJDwN49s1J1dPX8Wwbvvjd%2BBFJ4PQcXDRUe0gSJs09hhprJXMWELAXC2z3gN%2BxXotLVYIgjRxzDeluymDSrdCUwUd5krzmg42I96U9%2Bf9%2FF88aK0tSlFo8u6Ngx7VMVkgtuI6LLGubK9nO%2FXVZhLAdZCX0A6UbxGL&X-Amz-Signature=5469540fc1bb274eee06b185ac7aa32caeec362e7548b1cb57d9e6f51fddadca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3G2TC6%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCCjlnQbcrc%2F7QNbhM%2FlLZfGPEeSaSFZ3s%2FuH5%2BseIjwQIhAPU5wE3SeuCObbUSQhbd59PK3iIfgvNrB%2BikfojJerQEKv8DCC4QABoMNjM3NDIzMTgzODA1Igyrv%2BYcUvmv25T7tfwq3AMfZgIcjWBGy8iUAXzRonxwTGJumW4dNRvZIyvC8SbVenLIB91O8mMuSQkdbY7sz5Wjq0LcoA26OphlweCaIJdCuoIIlbeam26mJOCNEfcofK3NQfmeeHtgNwuuKeTMIHDWXvfCzz1xaQu%2Bl7EFthibgu%2FBwUL9Lvm4z2bYFHTAcRSxz4ABXDcHZSPzZ2m0BKr6WVRKG3bbm43IpV8AMSB0307ntVUUuqQeadLxfQZQ%2FUKKZyi9xx0Vhr1%2B5czxwK9MNMf5X%2BKqyjNIPGCumuDKAsgzu%2BTFtLUE6QAgmtklJL0A%2FICV0YoMQ5y1v9mcGfkikV3jtM11SLiw%2Bt2VoCcP0TlWS%2Fpg5yL0HAQq2h9OSzYBddIqFSOTU%2BOyQHu574NiV8UXXZinKtuMcyQ1%2FbRsxwTSMyaAsJNqsyhnaHq1Oy0SxJnjRY%2Fc13TypPIIbk6rIIO7ps1lkOYIgM8oMq5LsOa%2FuTImghVFVFAuScuuvZ5MAS5zCIQv8fmIRTYBJuh8sfAjzy0FySBPlbsTmitTe5weF3JIyT6MWsGkF5UcKBo1BqD%2FBd0hKHDMSpOcTLVbisc0c%2FHQPsSiof%2F0xjA24KaWtC7qCwNIYWchJzt89ehZCjJ%2FDoU9%2BjBByDCq2YjEBjqkAUq0ltzbZltU9aCe8Kb3GMD1UyarC2H4%2BsX5tVbd27dry8pPTgN0QSaoQXYaJDwN49s1J1dPX8Wwbvvjd%2BBFJ4PQcXDRUe0gSJs09hhprJXMWELAXC2z3gN%2BxXotLVYIgjRxzDeluymDSrdCUwUd5krzmg42I96U9%2Bf9%2FF88aK0tSlFo8u6Ngx7VMVkgtuI6LLGubK9nO%2FXVZhLAdZCX0A6UbxGL&X-Amz-Signature=59021639f9fbbe4cbe18143a19c851a1304f124c062ee19423c9c1b7137067d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
