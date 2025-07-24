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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFC4FPJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIH6u87ED69eKWgmuv814TkKyBBKKTIO38j8Mc0YV1LTTAiEA6svPD8FoA2ERgukpsUxgfNQA62Auv3SUolnA8sNpLocq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCHnDmuERXlYT8%2BEnSrcA8JuRyZNMLd325egYea8MFaaC0tmXPFbRD5E9PgY1cgvlABkGEiYdq7qB3d67%2FKZoN9qJGgtApJFdlUR70MoYpBXjhM8ooJ8NynCW0MBZtw5wmhahqlJvKRds6hioDa8XFemb7DmhXsq1bDpC1D2ml1kXv%2F1KKz2p8BA3e4t4vIsJjamGPzLeNCeyuRn3aXmLjGMnXl1h37UnH1QCzJWMF2u3UAPZ52E8Y7AI9P0Jv0mSTGT9GTuPCb7n%2FD%2FvyMSXBFOhu3WClurtDvi28Xn%2FyHqY7vgdi8MHRyo0mNqEzZyu7CUKL%2BbbLrHgfUbCKR4WwPXe2VlkCJg%2BvRx8wnP9HeEhc%2F7lbPil2NtJR1OLmZ3tL06%2BgSjIPYKDC5oLyyEGB9VP7LywSVAv%2F5H2pq%2BY0An%2F84bILZgaUmsW0LrYS8q5QEl0tt1m%2FZLfXnaLk3XSbJIUSWQNHiyZuZIPvatElLrVZzFKi6RDQt1dOudjRPhqZ9PTRw2yQfZnSQ16Hke3obuY4TKPJHsXnZvdmMbpEeEbekB1S3pH8yLlw6vsTprzn%2BCslV7J1e6WhxQj8MOXDsq3TXWkp3ZfXvu8uR%2FCZmt%2BIecYxVvbYbFcN1vloLwMZIG1Rq4UY29IP2JMKjUicQGOqUBEcnaZOGNtvEAcpFHfeFYOpxyRErS0bmst9W9SyPsNRnOFbDo9dAdmMfqTAYS9o6Z2zsfoZ3cE5ZWdlpiL1BgA4yr2gi9p1UazTtnlmhAPlBpFUWVNe3vpoNrNMzXrMGtrY737Y6I%2BIZgTRNIu79ZkZgmNYibTp29RKvL8NmhU0uQBtrnVpgyuBxQXvfYVq4EV3FyPl%2B9fCqgza2MFqSbz5l%2FSfqP&X-Amz-Signature=deca84081eccad7a475ef3f3ea20e96718dc571e260402a9337cf7a4f0fe1a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFC4FPJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIH6u87ED69eKWgmuv814TkKyBBKKTIO38j8Mc0YV1LTTAiEA6svPD8FoA2ERgukpsUxgfNQA62Auv3SUolnA8sNpLocq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCHnDmuERXlYT8%2BEnSrcA8JuRyZNMLd325egYea8MFaaC0tmXPFbRD5E9PgY1cgvlABkGEiYdq7qB3d67%2FKZoN9qJGgtApJFdlUR70MoYpBXjhM8ooJ8NynCW0MBZtw5wmhahqlJvKRds6hioDa8XFemb7DmhXsq1bDpC1D2ml1kXv%2F1KKz2p8BA3e4t4vIsJjamGPzLeNCeyuRn3aXmLjGMnXl1h37UnH1QCzJWMF2u3UAPZ52E8Y7AI9P0Jv0mSTGT9GTuPCb7n%2FD%2FvyMSXBFOhu3WClurtDvi28Xn%2FyHqY7vgdi8MHRyo0mNqEzZyu7CUKL%2BbbLrHgfUbCKR4WwPXe2VlkCJg%2BvRx8wnP9HeEhc%2F7lbPil2NtJR1OLmZ3tL06%2BgSjIPYKDC5oLyyEGB9VP7LywSVAv%2F5H2pq%2BY0An%2F84bILZgaUmsW0LrYS8q5QEl0tt1m%2FZLfXnaLk3XSbJIUSWQNHiyZuZIPvatElLrVZzFKi6RDQt1dOudjRPhqZ9PTRw2yQfZnSQ16Hke3obuY4TKPJHsXnZvdmMbpEeEbekB1S3pH8yLlw6vsTprzn%2BCslV7J1e6WhxQj8MOXDsq3TXWkp3ZfXvu8uR%2FCZmt%2BIecYxVvbYbFcN1vloLwMZIG1Rq4UY29IP2JMKjUicQGOqUBEcnaZOGNtvEAcpFHfeFYOpxyRErS0bmst9W9SyPsNRnOFbDo9dAdmMfqTAYS9o6Z2zsfoZ3cE5ZWdlpiL1BgA4yr2gi9p1UazTtnlmhAPlBpFUWVNe3vpoNrNMzXrMGtrY737Y6I%2BIZgTRNIu79ZkZgmNYibTp29RKvL8NmhU0uQBtrnVpgyuBxQXvfYVq4EV3FyPl%2B9fCqgza2MFqSbz5l%2FSfqP&X-Amz-Signature=30c8848e2d5b9499415ec69ee87826428821ca1c7e7c424818fea23c021e0e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFC4FPJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIH6u87ED69eKWgmuv814TkKyBBKKTIO38j8Mc0YV1LTTAiEA6svPD8FoA2ERgukpsUxgfNQA62Auv3SUolnA8sNpLocq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCHnDmuERXlYT8%2BEnSrcA8JuRyZNMLd325egYea8MFaaC0tmXPFbRD5E9PgY1cgvlABkGEiYdq7qB3d67%2FKZoN9qJGgtApJFdlUR70MoYpBXjhM8ooJ8NynCW0MBZtw5wmhahqlJvKRds6hioDa8XFemb7DmhXsq1bDpC1D2ml1kXv%2F1KKz2p8BA3e4t4vIsJjamGPzLeNCeyuRn3aXmLjGMnXl1h37UnH1QCzJWMF2u3UAPZ52E8Y7AI9P0Jv0mSTGT9GTuPCb7n%2FD%2FvyMSXBFOhu3WClurtDvi28Xn%2FyHqY7vgdi8MHRyo0mNqEzZyu7CUKL%2BbbLrHgfUbCKR4WwPXe2VlkCJg%2BvRx8wnP9HeEhc%2F7lbPil2NtJR1OLmZ3tL06%2BgSjIPYKDC5oLyyEGB9VP7LywSVAv%2F5H2pq%2BY0An%2F84bILZgaUmsW0LrYS8q5QEl0tt1m%2FZLfXnaLk3XSbJIUSWQNHiyZuZIPvatElLrVZzFKi6RDQt1dOudjRPhqZ9PTRw2yQfZnSQ16Hke3obuY4TKPJHsXnZvdmMbpEeEbekB1S3pH8yLlw6vsTprzn%2BCslV7J1e6WhxQj8MOXDsq3TXWkp3ZfXvu8uR%2FCZmt%2BIecYxVvbYbFcN1vloLwMZIG1Rq4UY29IP2JMKjUicQGOqUBEcnaZOGNtvEAcpFHfeFYOpxyRErS0bmst9W9SyPsNRnOFbDo9dAdmMfqTAYS9o6Z2zsfoZ3cE5ZWdlpiL1BgA4yr2gi9p1UazTtnlmhAPlBpFUWVNe3vpoNrNMzXrMGtrY737Y6I%2BIZgTRNIu79ZkZgmNYibTp29RKvL8NmhU0uQBtrnVpgyuBxQXvfYVq4EV3FyPl%2B9fCqgza2MFqSbz5l%2FSfqP&X-Amz-Signature=4539a07ff902f9bded3601359e9408a9d1ddffdddc3354369a7690e1d349af91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFC4FPJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIH6u87ED69eKWgmuv814TkKyBBKKTIO38j8Mc0YV1LTTAiEA6svPD8FoA2ERgukpsUxgfNQA62Auv3SUolnA8sNpLocq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCHnDmuERXlYT8%2BEnSrcA8JuRyZNMLd325egYea8MFaaC0tmXPFbRD5E9PgY1cgvlABkGEiYdq7qB3d67%2FKZoN9qJGgtApJFdlUR70MoYpBXjhM8ooJ8NynCW0MBZtw5wmhahqlJvKRds6hioDa8XFemb7DmhXsq1bDpC1D2ml1kXv%2F1KKz2p8BA3e4t4vIsJjamGPzLeNCeyuRn3aXmLjGMnXl1h37UnH1QCzJWMF2u3UAPZ52E8Y7AI9P0Jv0mSTGT9GTuPCb7n%2FD%2FvyMSXBFOhu3WClurtDvi28Xn%2FyHqY7vgdi8MHRyo0mNqEzZyu7CUKL%2BbbLrHgfUbCKR4WwPXe2VlkCJg%2BvRx8wnP9HeEhc%2F7lbPil2NtJR1OLmZ3tL06%2BgSjIPYKDC5oLyyEGB9VP7LywSVAv%2F5H2pq%2BY0An%2F84bILZgaUmsW0LrYS8q5QEl0tt1m%2FZLfXnaLk3XSbJIUSWQNHiyZuZIPvatElLrVZzFKi6RDQt1dOudjRPhqZ9PTRw2yQfZnSQ16Hke3obuY4TKPJHsXnZvdmMbpEeEbekB1S3pH8yLlw6vsTprzn%2BCslV7J1e6WhxQj8MOXDsq3TXWkp3ZfXvu8uR%2FCZmt%2BIecYxVvbYbFcN1vloLwMZIG1Rq4UY29IP2JMKjUicQGOqUBEcnaZOGNtvEAcpFHfeFYOpxyRErS0bmst9W9SyPsNRnOFbDo9dAdmMfqTAYS9o6Z2zsfoZ3cE5ZWdlpiL1BgA4yr2gi9p1UazTtnlmhAPlBpFUWVNe3vpoNrNMzXrMGtrY737Y6I%2BIZgTRNIu79ZkZgmNYibTp29RKvL8NmhU0uQBtrnVpgyuBxQXvfYVq4EV3FyPl%2B9fCqgza2MFqSbz5l%2FSfqP&X-Amz-Signature=4bc052b9a1542f27488a965a70b8a8f3d3d45aedf1cc3265054e0a3b6a4ff8ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFC4FPJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIH6u87ED69eKWgmuv814TkKyBBKKTIO38j8Mc0YV1LTTAiEA6svPD8FoA2ERgukpsUxgfNQA62Auv3SUolnA8sNpLocq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCHnDmuERXlYT8%2BEnSrcA8JuRyZNMLd325egYea8MFaaC0tmXPFbRD5E9PgY1cgvlABkGEiYdq7qB3d67%2FKZoN9qJGgtApJFdlUR70MoYpBXjhM8ooJ8NynCW0MBZtw5wmhahqlJvKRds6hioDa8XFemb7DmhXsq1bDpC1D2ml1kXv%2F1KKz2p8BA3e4t4vIsJjamGPzLeNCeyuRn3aXmLjGMnXl1h37UnH1QCzJWMF2u3UAPZ52E8Y7AI9P0Jv0mSTGT9GTuPCb7n%2FD%2FvyMSXBFOhu3WClurtDvi28Xn%2FyHqY7vgdi8MHRyo0mNqEzZyu7CUKL%2BbbLrHgfUbCKR4WwPXe2VlkCJg%2BvRx8wnP9HeEhc%2F7lbPil2NtJR1OLmZ3tL06%2BgSjIPYKDC5oLyyEGB9VP7LywSVAv%2F5H2pq%2BY0An%2F84bILZgaUmsW0LrYS8q5QEl0tt1m%2FZLfXnaLk3XSbJIUSWQNHiyZuZIPvatElLrVZzFKi6RDQt1dOudjRPhqZ9PTRw2yQfZnSQ16Hke3obuY4TKPJHsXnZvdmMbpEeEbekB1S3pH8yLlw6vsTprzn%2BCslV7J1e6WhxQj8MOXDsq3TXWkp3ZfXvu8uR%2FCZmt%2BIecYxVvbYbFcN1vloLwMZIG1Rq4UY29IP2JMKjUicQGOqUBEcnaZOGNtvEAcpFHfeFYOpxyRErS0bmst9W9SyPsNRnOFbDo9dAdmMfqTAYS9o6Z2zsfoZ3cE5ZWdlpiL1BgA4yr2gi9p1UazTtnlmhAPlBpFUWVNe3vpoNrNMzXrMGtrY737Y6I%2BIZgTRNIu79ZkZgmNYibTp29RKvL8NmhU0uQBtrnVpgyuBxQXvfYVq4EV3FyPl%2B9fCqgza2MFqSbz5l%2FSfqP&X-Amz-Signature=3eaaac70d3647a00b0d00ccc82544b549326f9e5f06aa7f3d6c3b264328a0c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFC4FPJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIH6u87ED69eKWgmuv814TkKyBBKKTIO38j8Mc0YV1LTTAiEA6svPD8FoA2ERgukpsUxgfNQA62Auv3SUolnA8sNpLocq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCHnDmuERXlYT8%2BEnSrcA8JuRyZNMLd325egYea8MFaaC0tmXPFbRD5E9PgY1cgvlABkGEiYdq7qB3d67%2FKZoN9qJGgtApJFdlUR70MoYpBXjhM8ooJ8NynCW0MBZtw5wmhahqlJvKRds6hioDa8XFemb7DmhXsq1bDpC1D2ml1kXv%2F1KKz2p8BA3e4t4vIsJjamGPzLeNCeyuRn3aXmLjGMnXl1h37UnH1QCzJWMF2u3UAPZ52E8Y7AI9P0Jv0mSTGT9GTuPCb7n%2FD%2FvyMSXBFOhu3WClurtDvi28Xn%2FyHqY7vgdi8MHRyo0mNqEzZyu7CUKL%2BbbLrHgfUbCKR4WwPXe2VlkCJg%2BvRx8wnP9HeEhc%2F7lbPil2NtJR1OLmZ3tL06%2BgSjIPYKDC5oLyyEGB9VP7LywSVAv%2F5H2pq%2BY0An%2F84bILZgaUmsW0LrYS8q5QEl0tt1m%2FZLfXnaLk3XSbJIUSWQNHiyZuZIPvatElLrVZzFKi6RDQt1dOudjRPhqZ9PTRw2yQfZnSQ16Hke3obuY4TKPJHsXnZvdmMbpEeEbekB1S3pH8yLlw6vsTprzn%2BCslV7J1e6WhxQj8MOXDsq3TXWkp3ZfXvu8uR%2FCZmt%2BIecYxVvbYbFcN1vloLwMZIG1Rq4UY29IP2JMKjUicQGOqUBEcnaZOGNtvEAcpFHfeFYOpxyRErS0bmst9W9SyPsNRnOFbDo9dAdmMfqTAYS9o6Z2zsfoZ3cE5ZWdlpiL1BgA4yr2gi9p1UazTtnlmhAPlBpFUWVNe3vpoNrNMzXrMGtrY737Y6I%2BIZgTRNIu79ZkZgmNYibTp29RKvL8NmhU0uQBtrnVpgyuBxQXvfYVq4EV3FyPl%2B9fCqgza2MFqSbz5l%2FSfqP&X-Amz-Signature=9a692e611a6d196e944b551a0eacf6506816adc6a5dbbf5b18f0fd47cd37e26d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFC4FPJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIH6u87ED69eKWgmuv814TkKyBBKKTIO38j8Mc0YV1LTTAiEA6svPD8FoA2ERgukpsUxgfNQA62Auv3SUolnA8sNpLocq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCHnDmuERXlYT8%2BEnSrcA8JuRyZNMLd325egYea8MFaaC0tmXPFbRD5E9PgY1cgvlABkGEiYdq7qB3d67%2FKZoN9qJGgtApJFdlUR70MoYpBXjhM8ooJ8NynCW0MBZtw5wmhahqlJvKRds6hioDa8XFemb7DmhXsq1bDpC1D2ml1kXv%2F1KKz2p8BA3e4t4vIsJjamGPzLeNCeyuRn3aXmLjGMnXl1h37UnH1QCzJWMF2u3UAPZ52E8Y7AI9P0Jv0mSTGT9GTuPCb7n%2FD%2FvyMSXBFOhu3WClurtDvi28Xn%2FyHqY7vgdi8MHRyo0mNqEzZyu7CUKL%2BbbLrHgfUbCKR4WwPXe2VlkCJg%2BvRx8wnP9HeEhc%2F7lbPil2NtJR1OLmZ3tL06%2BgSjIPYKDC5oLyyEGB9VP7LywSVAv%2F5H2pq%2BY0An%2F84bILZgaUmsW0LrYS8q5QEl0tt1m%2FZLfXnaLk3XSbJIUSWQNHiyZuZIPvatElLrVZzFKi6RDQt1dOudjRPhqZ9PTRw2yQfZnSQ16Hke3obuY4TKPJHsXnZvdmMbpEeEbekB1S3pH8yLlw6vsTprzn%2BCslV7J1e6WhxQj8MOXDsq3TXWkp3ZfXvu8uR%2FCZmt%2BIecYxVvbYbFcN1vloLwMZIG1Rq4UY29IP2JMKjUicQGOqUBEcnaZOGNtvEAcpFHfeFYOpxyRErS0bmst9W9SyPsNRnOFbDo9dAdmMfqTAYS9o6Z2zsfoZ3cE5ZWdlpiL1BgA4yr2gi9p1UazTtnlmhAPlBpFUWVNe3vpoNrNMzXrMGtrY737Y6I%2BIZgTRNIu79ZkZgmNYibTp29RKvL8NmhU0uQBtrnVpgyuBxQXvfYVq4EV3FyPl%2B9fCqgza2MFqSbz5l%2FSfqP&X-Amz-Signature=430010b95dc690c0d1bcff46b1dfb0c16530f6e0b781731af3c30c592442a8d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFC4FPJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIH6u87ED69eKWgmuv814TkKyBBKKTIO38j8Mc0YV1LTTAiEA6svPD8FoA2ERgukpsUxgfNQA62Auv3SUolnA8sNpLocq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCHnDmuERXlYT8%2BEnSrcA8JuRyZNMLd325egYea8MFaaC0tmXPFbRD5E9PgY1cgvlABkGEiYdq7qB3d67%2FKZoN9qJGgtApJFdlUR70MoYpBXjhM8ooJ8NynCW0MBZtw5wmhahqlJvKRds6hioDa8XFemb7DmhXsq1bDpC1D2ml1kXv%2F1KKz2p8BA3e4t4vIsJjamGPzLeNCeyuRn3aXmLjGMnXl1h37UnH1QCzJWMF2u3UAPZ52E8Y7AI9P0Jv0mSTGT9GTuPCb7n%2FD%2FvyMSXBFOhu3WClurtDvi28Xn%2FyHqY7vgdi8MHRyo0mNqEzZyu7CUKL%2BbbLrHgfUbCKR4WwPXe2VlkCJg%2BvRx8wnP9HeEhc%2F7lbPil2NtJR1OLmZ3tL06%2BgSjIPYKDC5oLyyEGB9VP7LywSVAv%2F5H2pq%2BY0An%2F84bILZgaUmsW0LrYS8q5QEl0tt1m%2FZLfXnaLk3XSbJIUSWQNHiyZuZIPvatElLrVZzFKi6RDQt1dOudjRPhqZ9PTRw2yQfZnSQ16Hke3obuY4TKPJHsXnZvdmMbpEeEbekB1S3pH8yLlw6vsTprzn%2BCslV7J1e6WhxQj8MOXDsq3TXWkp3ZfXvu8uR%2FCZmt%2BIecYxVvbYbFcN1vloLwMZIG1Rq4UY29IP2JMKjUicQGOqUBEcnaZOGNtvEAcpFHfeFYOpxyRErS0bmst9W9SyPsNRnOFbDo9dAdmMfqTAYS9o6Z2zsfoZ3cE5ZWdlpiL1BgA4yr2gi9p1UazTtnlmhAPlBpFUWVNe3vpoNrNMzXrMGtrY737Y6I%2BIZgTRNIu79ZkZgmNYibTp29RKvL8NmhU0uQBtrnVpgyuBxQXvfYVq4EV3FyPl%2B9fCqgza2MFqSbz5l%2FSfqP&X-Amz-Signature=f1078cda2f92a18e47e8b12c108a60422d1f79931d4fb2b433f28a6cf2bbab4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCFC4FPJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIH6u87ED69eKWgmuv814TkKyBBKKTIO38j8Mc0YV1LTTAiEA6svPD8FoA2ERgukpsUxgfNQA62Auv3SUolnA8sNpLocq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCHnDmuERXlYT8%2BEnSrcA8JuRyZNMLd325egYea8MFaaC0tmXPFbRD5E9PgY1cgvlABkGEiYdq7qB3d67%2FKZoN9qJGgtApJFdlUR70MoYpBXjhM8ooJ8NynCW0MBZtw5wmhahqlJvKRds6hioDa8XFemb7DmhXsq1bDpC1D2ml1kXv%2F1KKz2p8BA3e4t4vIsJjamGPzLeNCeyuRn3aXmLjGMnXl1h37UnH1QCzJWMF2u3UAPZ52E8Y7AI9P0Jv0mSTGT9GTuPCb7n%2FD%2FvyMSXBFOhu3WClurtDvi28Xn%2FyHqY7vgdi8MHRyo0mNqEzZyu7CUKL%2BbbLrHgfUbCKR4WwPXe2VlkCJg%2BvRx8wnP9HeEhc%2F7lbPil2NtJR1OLmZ3tL06%2BgSjIPYKDC5oLyyEGB9VP7LywSVAv%2F5H2pq%2BY0An%2F84bILZgaUmsW0LrYS8q5QEl0tt1m%2FZLfXnaLk3XSbJIUSWQNHiyZuZIPvatElLrVZzFKi6RDQt1dOudjRPhqZ9PTRw2yQfZnSQ16Hke3obuY4TKPJHsXnZvdmMbpEeEbekB1S3pH8yLlw6vsTprzn%2BCslV7J1e6WhxQj8MOXDsq3TXWkp3ZfXvu8uR%2FCZmt%2BIecYxVvbYbFcN1vloLwMZIG1Rq4UY29IP2JMKjUicQGOqUBEcnaZOGNtvEAcpFHfeFYOpxyRErS0bmst9W9SyPsNRnOFbDo9dAdmMfqTAYS9o6Z2zsfoZ3cE5ZWdlpiL1BgA4yr2gi9p1UazTtnlmhAPlBpFUWVNe3vpoNrNMzXrMGtrY737Y6I%2BIZgTRNIu79ZkZgmNYibTp29RKvL8NmhU0uQBtrnVpgyuBxQXvfYVq4EV3FyPl%2B9fCqgza2MFqSbz5l%2FSfqP&X-Amz-Signature=5694e74fbc20d2974465d06abebcb89a508c552ca28d2e1c5664928c8ead1e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
