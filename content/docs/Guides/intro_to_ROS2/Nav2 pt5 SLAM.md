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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FI6ME3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIF3QvaroDBnB2d%2FhCLISNr5zoJZ5l5I5iLay3WDI8ISjAiEA%2ByQwiCxwaGL%2FlshqucmiG1w1c7PDTLpwvVygszChbCcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLlcOTj%2BM90Kihg7ayrcA5EVZiat5%2BV2CFva4w9HjCwvgnCuw4WqwAw3SSPn%2BEx%2Fci3ZzQNs6neZ8TzCD0SAnpSt5tlpAoSEpw%2BT0dFtoI8T0Pore0ydsSyHJ6rdEc7fO704Q4E9x0h0qFcy2PEFUmhmJ6gZwyvTU3DkQumlims%2B9I8kSYw0g1XyfuIJBN00aV%2FaVQM1U1Yy%2BicjLJIZOWkRWCxWamxQUHqr6KZ3103daLb%2FGdBFI1CNAxnkduyCnyQzblGOIPGDkvG%2BAf%2BjBvXif%2Bfv8RvOjFHMN%2FSiDCbV7Pz51nHWgcQdUYG89ru2RFtuzF%2BuDfSWEpGuoOEnbv8fJEwc7rXdgvH7jyICb8bjKqBbZZTR8cllTuSzpPfrencDv4vATfki5t0xBJKY%2BoAleNK7BU25XwJAKmYlFeZ%2FUnPZAygDdjIMX3arZ9KkhjzAmLlUYHEI901TkSTnK2TYi0V3vIDh8OQ0%2FUclOurTpWVKUedSGWUVjKMXkITGLKM2qUpDUD%2BgUIEzPTfXogh0xMB67NupWQSjbhVIpuqpAdHRCA3VN3ZqhJFCuqQB8M7%2BCjYHUU%2FskZQZW1zw2EWJoVFYY06%2BMIxnnFnFEHSLIdC1Qocek8NOBKb2Kl%2BD%2Flc4CwbfuZOY%2F0tzMOXhjcQGOqUBFNz4tzQUnOjXtdAwLS9Ea%2Fj1H4vSKTFDRFly7L%2BYv8WsVRxjPZFxfx%2Fyct99p4ItzQC753YTFKJS4GFFBOwktXF5tcUOf7gFxaauy41hb9Rktu5xmCfVdb7PMeCehw91lrQcpCVRX4k5LWFspmVqx7ztuWkLea%2FNyKNmP00NrEBqdLZ5Vy1gzkSWcLM%2BH6hPcz40fv0umKy%2FncEbPwHtJ4w5iqbN&X-Amz-Signature=8307e6330de650415cdbb474e09ad7b0194ecb56ccca7231531ca588a3d4be64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FI6ME3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIF3QvaroDBnB2d%2FhCLISNr5zoJZ5l5I5iLay3WDI8ISjAiEA%2ByQwiCxwaGL%2FlshqucmiG1w1c7PDTLpwvVygszChbCcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLlcOTj%2BM90Kihg7ayrcA5EVZiat5%2BV2CFva4w9HjCwvgnCuw4WqwAw3SSPn%2BEx%2Fci3ZzQNs6neZ8TzCD0SAnpSt5tlpAoSEpw%2BT0dFtoI8T0Pore0ydsSyHJ6rdEc7fO704Q4E9x0h0qFcy2PEFUmhmJ6gZwyvTU3DkQumlims%2B9I8kSYw0g1XyfuIJBN00aV%2FaVQM1U1Yy%2BicjLJIZOWkRWCxWamxQUHqr6KZ3103daLb%2FGdBFI1CNAxnkduyCnyQzblGOIPGDkvG%2BAf%2BjBvXif%2Bfv8RvOjFHMN%2FSiDCbV7Pz51nHWgcQdUYG89ru2RFtuzF%2BuDfSWEpGuoOEnbv8fJEwc7rXdgvH7jyICb8bjKqBbZZTR8cllTuSzpPfrencDv4vATfki5t0xBJKY%2BoAleNK7BU25XwJAKmYlFeZ%2FUnPZAygDdjIMX3arZ9KkhjzAmLlUYHEI901TkSTnK2TYi0V3vIDh8OQ0%2FUclOurTpWVKUedSGWUVjKMXkITGLKM2qUpDUD%2BgUIEzPTfXogh0xMB67NupWQSjbhVIpuqpAdHRCA3VN3ZqhJFCuqQB8M7%2BCjYHUU%2FskZQZW1zw2EWJoVFYY06%2BMIxnnFnFEHSLIdC1Qocek8NOBKb2Kl%2BD%2Flc4CwbfuZOY%2F0tzMOXhjcQGOqUBFNz4tzQUnOjXtdAwLS9Ea%2Fj1H4vSKTFDRFly7L%2BYv8WsVRxjPZFxfx%2Fyct99p4ItzQC753YTFKJS4GFFBOwktXF5tcUOf7gFxaauy41hb9Rktu5xmCfVdb7PMeCehw91lrQcpCVRX4k5LWFspmVqx7ztuWkLea%2FNyKNmP00NrEBqdLZ5Vy1gzkSWcLM%2BH6hPcz40fv0umKy%2FncEbPwHtJ4w5iqbN&X-Amz-Signature=04957549fe212d5a02b7d50f1072d7f412d465c5ee8aa44f125378fd7702cf8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FI6ME3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIF3QvaroDBnB2d%2FhCLISNr5zoJZ5l5I5iLay3WDI8ISjAiEA%2ByQwiCxwaGL%2FlshqucmiG1w1c7PDTLpwvVygszChbCcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLlcOTj%2BM90Kihg7ayrcA5EVZiat5%2BV2CFva4w9HjCwvgnCuw4WqwAw3SSPn%2BEx%2Fci3ZzQNs6neZ8TzCD0SAnpSt5tlpAoSEpw%2BT0dFtoI8T0Pore0ydsSyHJ6rdEc7fO704Q4E9x0h0qFcy2PEFUmhmJ6gZwyvTU3DkQumlims%2B9I8kSYw0g1XyfuIJBN00aV%2FaVQM1U1Yy%2BicjLJIZOWkRWCxWamxQUHqr6KZ3103daLb%2FGdBFI1CNAxnkduyCnyQzblGOIPGDkvG%2BAf%2BjBvXif%2Bfv8RvOjFHMN%2FSiDCbV7Pz51nHWgcQdUYG89ru2RFtuzF%2BuDfSWEpGuoOEnbv8fJEwc7rXdgvH7jyICb8bjKqBbZZTR8cllTuSzpPfrencDv4vATfki5t0xBJKY%2BoAleNK7BU25XwJAKmYlFeZ%2FUnPZAygDdjIMX3arZ9KkhjzAmLlUYHEI901TkSTnK2TYi0V3vIDh8OQ0%2FUclOurTpWVKUedSGWUVjKMXkITGLKM2qUpDUD%2BgUIEzPTfXogh0xMB67NupWQSjbhVIpuqpAdHRCA3VN3ZqhJFCuqQB8M7%2BCjYHUU%2FskZQZW1zw2EWJoVFYY06%2BMIxnnFnFEHSLIdC1Qocek8NOBKb2Kl%2BD%2Flc4CwbfuZOY%2F0tzMOXhjcQGOqUBFNz4tzQUnOjXtdAwLS9Ea%2Fj1H4vSKTFDRFly7L%2BYv8WsVRxjPZFxfx%2Fyct99p4ItzQC753YTFKJS4GFFBOwktXF5tcUOf7gFxaauy41hb9Rktu5xmCfVdb7PMeCehw91lrQcpCVRX4k5LWFspmVqx7ztuWkLea%2FNyKNmP00NrEBqdLZ5Vy1gzkSWcLM%2BH6hPcz40fv0umKy%2FncEbPwHtJ4w5iqbN&X-Amz-Signature=72eac4794ad0717c046d4241e38edb38974eecba1631c5709d30066e439994db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FI6ME3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIF3QvaroDBnB2d%2FhCLISNr5zoJZ5l5I5iLay3WDI8ISjAiEA%2ByQwiCxwaGL%2FlshqucmiG1w1c7PDTLpwvVygszChbCcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLlcOTj%2BM90Kihg7ayrcA5EVZiat5%2BV2CFva4w9HjCwvgnCuw4WqwAw3SSPn%2BEx%2Fci3ZzQNs6neZ8TzCD0SAnpSt5tlpAoSEpw%2BT0dFtoI8T0Pore0ydsSyHJ6rdEc7fO704Q4E9x0h0qFcy2PEFUmhmJ6gZwyvTU3DkQumlims%2B9I8kSYw0g1XyfuIJBN00aV%2FaVQM1U1Yy%2BicjLJIZOWkRWCxWamxQUHqr6KZ3103daLb%2FGdBFI1CNAxnkduyCnyQzblGOIPGDkvG%2BAf%2BjBvXif%2Bfv8RvOjFHMN%2FSiDCbV7Pz51nHWgcQdUYG89ru2RFtuzF%2BuDfSWEpGuoOEnbv8fJEwc7rXdgvH7jyICb8bjKqBbZZTR8cllTuSzpPfrencDv4vATfki5t0xBJKY%2BoAleNK7BU25XwJAKmYlFeZ%2FUnPZAygDdjIMX3arZ9KkhjzAmLlUYHEI901TkSTnK2TYi0V3vIDh8OQ0%2FUclOurTpWVKUedSGWUVjKMXkITGLKM2qUpDUD%2BgUIEzPTfXogh0xMB67NupWQSjbhVIpuqpAdHRCA3VN3ZqhJFCuqQB8M7%2BCjYHUU%2FskZQZW1zw2EWJoVFYY06%2BMIxnnFnFEHSLIdC1Qocek8NOBKb2Kl%2BD%2Flc4CwbfuZOY%2F0tzMOXhjcQGOqUBFNz4tzQUnOjXtdAwLS9Ea%2Fj1H4vSKTFDRFly7L%2BYv8WsVRxjPZFxfx%2Fyct99p4ItzQC753YTFKJS4GFFBOwktXF5tcUOf7gFxaauy41hb9Rktu5xmCfVdb7PMeCehw91lrQcpCVRX4k5LWFspmVqx7ztuWkLea%2FNyKNmP00NrEBqdLZ5Vy1gzkSWcLM%2BH6hPcz40fv0umKy%2FncEbPwHtJ4w5iqbN&X-Amz-Signature=38bc080e3dfe52b0f9c32fec48f8de86771ad380a68452c4173e5c0033ca3963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FI6ME3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIF3QvaroDBnB2d%2FhCLISNr5zoJZ5l5I5iLay3WDI8ISjAiEA%2ByQwiCxwaGL%2FlshqucmiG1w1c7PDTLpwvVygszChbCcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLlcOTj%2BM90Kihg7ayrcA5EVZiat5%2BV2CFva4w9HjCwvgnCuw4WqwAw3SSPn%2BEx%2Fci3ZzQNs6neZ8TzCD0SAnpSt5tlpAoSEpw%2BT0dFtoI8T0Pore0ydsSyHJ6rdEc7fO704Q4E9x0h0qFcy2PEFUmhmJ6gZwyvTU3DkQumlims%2B9I8kSYw0g1XyfuIJBN00aV%2FaVQM1U1Yy%2BicjLJIZOWkRWCxWamxQUHqr6KZ3103daLb%2FGdBFI1CNAxnkduyCnyQzblGOIPGDkvG%2BAf%2BjBvXif%2Bfv8RvOjFHMN%2FSiDCbV7Pz51nHWgcQdUYG89ru2RFtuzF%2BuDfSWEpGuoOEnbv8fJEwc7rXdgvH7jyICb8bjKqBbZZTR8cllTuSzpPfrencDv4vATfki5t0xBJKY%2BoAleNK7BU25XwJAKmYlFeZ%2FUnPZAygDdjIMX3arZ9KkhjzAmLlUYHEI901TkSTnK2TYi0V3vIDh8OQ0%2FUclOurTpWVKUedSGWUVjKMXkITGLKM2qUpDUD%2BgUIEzPTfXogh0xMB67NupWQSjbhVIpuqpAdHRCA3VN3ZqhJFCuqQB8M7%2BCjYHUU%2FskZQZW1zw2EWJoVFYY06%2BMIxnnFnFEHSLIdC1Qocek8NOBKb2Kl%2BD%2Flc4CwbfuZOY%2F0tzMOXhjcQGOqUBFNz4tzQUnOjXtdAwLS9Ea%2Fj1H4vSKTFDRFly7L%2BYv8WsVRxjPZFxfx%2Fyct99p4ItzQC753YTFKJS4GFFBOwktXF5tcUOf7gFxaauy41hb9Rktu5xmCfVdb7PMeCehw91lrQcpCVRX4k5LWFspmVqx7ztuWkLea%2FNyKNmP00NrEBqdLZ5Vy1gzkSWcLM%2BH6hPcz40fv0umKy%2FncEbPwHtJ4w5iqbN&X-Amz-Signature=4b821e70c14aeeb2b3dac4bc69d6136cf4875dcd708b625ab7e5a590a33422be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FI6ME3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIF3QvaroDBnB2d%2FhCLISNr5zoJZ5l5I5iLay3WDI8ISjAiEA%2ByQwiCxwaGL%2FlshqucmiG1w1c7PDTLpwvVygszChbCcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLlcOTj%2BM90Kihg7ayrcA5EVZiat5%2BV2CFva4w9HjCwvgnCuw4WqwAw3SSPn%2BEx%2Fci3ZzQNs6neZ8TzCD0SAnpSt5tlpAoSEpw%2BT0dFtoI8T0Pore0ydsSyHJ6rdEc7fO704Q4E9x0h0qFcy2PEFUmhmJ6gZwyvTU3DkQumlims%2B9I8kSYw0g1XyfuIJBN00aV%2FaVQM1U1Yy%2BicjLJIZOWkRWCxWamxQUHqr6KZ3103daLb%2FGdBFI1CNAxnkduyCnyQzblGOIPGDkvG%2BAf%2BjBvXif%2Bfv8RvOjFHMN%2FSiDCbV7Pz51nHWgcQdUYG89ru2RFtuzF%2BuDfSWEpGuoOEnbv8fJEwc7rXdgvH7jyICb8bjKqBbZZTR8cllTuSzpPfrencDv4vATfki5t0xBJKY%2BoAleNK7BU25XwJAKmYlFeZ%2FUnPZAygDdjIMX3arZ9KkhjzAmLlUYHEI901TkSTnK2TYi0V3vIDh8OQ0%2FUclOurTpWVKUedSGWUVjKMXkITGLKM2qUpDUD%2BgUIEzPTfXogh0xMB67NupWQSjbhVIpuqpAdHRCA3VN3ZqhJFCuqQB8M7%2BCjYHUU%2FskZQZW1zw2EWJoVFYY06%2BMIxnnFnFEHSLIdC1Qocek8NOBKb2Kl%2BD%2Flc4CwbfuZOY%2F0tzMOXhjcQGOqUBFNz4tzQUnOjXtdAwLS9Ea%2Fj1H4vSKTFDRFly7L%2BYv8WsVRxjPZFxfx%2Fyct99p4ItzQC753YTFKJS4GFFBOwktXF5tcUOf7gFxaauy41hb9Rktu5xmCfVdb7PMeCehw91lrQcpCVRX4k5LWFspmVqx7ztuWkLea%2FNyKNmP00NrEBqdLZ5Vy1gzkSWcLM%2BH6hPcz40fv0umKy%2FncEbPwHtJ4w5iqbN&X-Amz-Signature=0174edee1a10cf8d8201a1f1f259f6808c724281dbf85001ebcd7c3ca83a7446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FI6ME3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIF3QvaroDBnB2d%2FhCLISNr5zoJZ5l5I5iLay3WDI8ISjAiEA%2ByQwiCxwaGL%2FlshqucmiG1w1c7PDTLpwvVygszChbCcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLlcOTj%2BM90Kihg7ayrcA5EVZiat5%2BV2CFva4w9HjCwvgnCuw4WqwAw3SSPn%2BEx%2Fci3ZzQNs6neZ8TzCD0SAnpSt5tlpAoSEpw%2BT0dFtoI8T0Pore0ydsSyHJ6rdEc7fO704Q4E9x0h0qFcy2PEFUmhmJ6gZwyvTU3DkQumlims%2B9I8kSYw0g1XyfuIJBN00aV%2FaVQM1U1Yy%2BicjLJIZOWkRWCxWamxQUHqr6KZ3103daLb%2FGdBFI1CNAxnkduyCnyQzblGOIPGDkvG%2BAf%2BjBvXif%2Bfv8RvOjFHMN%2FSiDCbV7Pz51nHWgcQdUYG89ru2RFtuzF%2BuDfSWEpGuoOEnbv8fJEwc7rXdgvH7jyICb8bjKqBbZZTR8cllTuSzpPfrencDv4vATfki5t0xBJKY%2BoAleNK7BU25XwJAKmYlFeZ%2FUnPZAygDdjIMX3arZ9KkhjzAmLlUYHEI901TkSTnK2TYi0V3vIDh8OQ0%2FUclOurTpWVKUedSGWUVjKMXkITGLKM2qUpDUD%2BgUIEzPTfXogh0xMB67NupWQSjbhVIpuqpAdHRCA3VN3ZqhJFCuqQB8M7%2BCjYHUU%2FskZQZW1zw2EWJoVFYY06%2BMIxnnFnFEHSLIdC1Qocek8NOBKb2Kl%2BD%2Flc4CwbfuZOY%2F0tzMOXhjcQGOqUBFNz4tzQUnOjXtdAwLS9Ea%2Fj1H4vSKTFDRFly7L%2BYv8WsVRxjPZFxfx%2Fyct99p4ItzQC753YTFKJS4GFFBOwktXF5tcUOf7gFxaauy41hb9Rktu5xmCfVdb7PMeCehw91lrQcpCVRX4k5LWFspmVqx7ztuWkLea%2FNyKNmP00NrEBqdLZ5Vy1gzkSWcLM%2BH6hPcz40fv0umKy%2FncEbPwHtJ4w5iqbN&X-Amz-Signature=d4e75dc2668f8ca507b3e81fa0372ca94ee8f9faeaab3c73bf2bf1ce33ea487f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FI6ME3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIF3QvaroDBnB2d%2FhCLISNr5zoJZ5l5I5iLay3WDI8ISjAiEA%2ByQwiCxwaGL%2FlshqucmiG1w1c7PDTLpwvVygszChbCcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLlcOTj%2BM90Kihg7ayrcA5EVZiat5%2BV2CFva4w9HjCwvgnCuw4WqwAw3SSPn%2BEx%2Fci3ZzQNs6neZ8TzCD0SAnpSt5tlpAoSEpw%2BT0dFtoI8T0Pore0ydsSyHJ6rdEc7fO704Q4E9x0h0qFcy2PEFUmhmJ6gZwyvTU3DkQumlims%2B9I8kSYw0g1XyfuIJBN00aV%2FaVQM1U1Yy%2BicjLJIZOWkRWCxWamxQUHqr6KZ3103daLb%2FGdBFI1CNAxnkduyCnyQzblGOIPGDkvG%2BAf%2BjBvXif%2Bfv8RvOjFHMN%2FSiDCbV7Pz51nHWgcQdUYG89ru2RFtuzF%2BuDfSWEpGuoOEnbv8fJEwc7rXdgvH7jyICb8bjKqBbZZTR8cllTuSzpPfrencDv4vATfki5t0xBJKY%2BoAleNK7BU25XwJAKmYlFeZ%2FUnPZAygDdjIMX3arZ9KkhjzAmLlUYHEI901TkSTnK2TYi0V3vIDh8OQ0%2FUclOurTpWVKUedSGWUVjKMXkITGLKM2qUpDUD%2BgUIEzPTfXogh0xMB67NupWQSjbhVIpuqpAdHRCA3VN3ZqhJFCuqQB8M7%2BCjYHUU%2FskZQZW1zw2EWJoVFYY06%2BMIxnnFnFEHSLIdC1Qocek8NOBKb2Kl%2BD%2Flc4CwbfuZOY%2F0tzMOXhjcQGOqUBFNz4tzQUnOjXtdAwLS9Ea%2Fj1H4vSKTFDRFly7L%2BYv8WsVRxjPZFxfx%2Fyct99p4ItzQC753YTFKJS4GFFBOwktXF5tcUOf7gFxaauy41hb9Rktu5xmCfVdb7PMeCehw91lrQcpCVRX4k5LWFspmVqx7ztuWkLea%2FNyKNmP00NrEBqdLZ5Vy1gzkSWcLM%2BH6hPcz40fv0umKy%2FncEbPwHtJ4w5iqbN&X-Amz-Signature=1b8edda66f1d5e4a8e5bd19af40428f968d6b75dd0ce8d6ecfa9d991a5802d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FI6ME3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T121719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIF3QvaroDBnB2d%2FhCLISNr5zoJZ5l5I5iLay3WDI8ISjAiEA%2ByQwiCxwaGL%2FlshqucmiG1w1c7PDTLpwvVygszChbCcq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLlcOTj%2BM90Kihg7ayrcA5EVZiat5%2BV2CFva4w9HjCwvgnCuw4WqwAw3SSPn%2BEx%2Fci3ZzQNs6neZ8TzCD0SAnpSt5tlpAoSEpw%2BT0dFtoI8T0Pore0ydsSyHJ6rdEc7fO704Q4E9x0h0qFcy2PEFUmhmJ6gZwyvTU3DkQumlims%2B9I8kSYw0g1XyfuIJBN00aV%2FaVQM1U1Yy%2BicjLJIZOWkRWCxWamxQUHqr6KZ3103daLb%2FGdBFI1CNAxnkduyCnyQzblGOIPGDkvG%2BAf%2BjBvXif%2Bfv8RvOjFHMN%2FSiDCbV7Pz51nHWgcQdUYG89ru2RFtuzF%2BuDfSWEpGuoOEnbv8fJEwc7rXdgvH7jyICb8bjKqBbZZTR8cllTuSzpPfrencDv4vATfki5t0xBJKY%2BoAleNK7BU25XwJAKmYlFeZ%2FUnPZAygDdjIMX3arZ9KkhjzAmLlUYHEI901TkSTnK2TYi0V3vIDh8OQ0%2FUclOurTpWVKUedSGWUVjKMXkITGLKM2qUpDUD%2BgUIEzPTfXogh0xMB67NupWQSjbhVIpuqpAdHRCA3VN3ZqhJFCuqQB8M7%2BCjYHUU%2FskZQZW1zw2EWJoVFYY06%2BMIxnnFnFEHSLIdC1Qocek8NOBKb2Kl%2BD%2Flc4CwbfuZOY%2F0tzMOXhjcQGOqUBFNz4tzQUnOjXtdAwLS9Ea%2Fj1H4vSKTFDRFly7L%2BYv8WsVRxjPZFxfx%2Fyct99p4ItzQC753YTFKJS4GFFBOwktXF5tcUOf7gFxaauy41hb9Rktu5xmCfVdb7PMeCehw91lrQcpCVRX4k5LWFspmVqx7ztuWkLea%2FNyKNmP00NrEBqdLZ5Vy1gzkSWcLM%2BH6hPcz40fv0umKy%2FncEbPwHtJ4w5iqbN&X-Amz-Signature=6fcb5a86ee834466625f863e58802d4ee3dd927410db3e3a0e93a484b472fde7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
