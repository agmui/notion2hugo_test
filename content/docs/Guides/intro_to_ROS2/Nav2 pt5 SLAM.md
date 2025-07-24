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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEDB37F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDuGeELe68mnuCNgAXpVyRhZQjaHI%2BigldQFuGflUCgjAIhALREydUVVRooGQVuhF81R%2BOghrThmXWWmcabdb5ko1%2BRKv8DCDEQABoMNjM3NDIzMTgzODA1IgyS%2BfIFmdawkzJR7lAq3AOHJHk5Cx4GMJ6%2B3FJdXMfLCJQkausO9G%2B4VvTsar1eNWC069B%2BR0Ja%2BfVvs0cED5G5cNd3iz6vUhJcKfgupQbWxNw83i2AfCJ0MFWJ8oNJcJpWtolY7crPxENzCE03rtzQfClFsfsJPyRgPF3TdEzcoFMGo4sTmZBNlGwmBkVOOxcH7DGgTJmgMuIfHjHJGAUOsTFtMLKcgLGXI1P%2Bp%2FCfG495M%2B07zdbsInNBZ3DLiqvtZruoeieUddWh%2BQA7d3%2FNIa6OuY4%2Bk7A6CAiwTcXr3X1d%2F5ncSqQjjTXwZoeU4hXKZaxx8V5lhm6n7ExQVTBn6zsuQdqz5MNs4I1wfwi6iOfkCda5%2BAvn%2BfaQ345w0F5RX1EVygH9J3OaRLtzW%2BQG8IaVCSKMGwPxUBQ8N4uve1II7TBUccsmdd389SlfstzUxexNxTe%2FNAHq2IExUJ%2BHylgpRm1mWNwn26H%2BkyZUPggc6LxijXR6YVY8w8CCGBUbaKm7I4vMSxIzlQnjD3KwxYFOtDdu1kwnTMpovqhVA49GD2%2BeFKCaRUPuhcg55XkUqjT4CtpkzZsHdIV0OBN60jLEmCfj6VgEzCpjrUHNwa9boc6ZWsL2WCkqtFqwO%2FDWGgf5aqvDQd9T6zCwsYnEBjqkAT0mMLaRcnSHqjibb9%2FeeWG3bdVwaQs1NFsDfdk0CCVx4ZRPYTdte6VNxBTl8F2RYj7c%2BHlKIfqNIhcctIf4IhyqpM7E99phy9ahMYlvo94R9wTI0sVWNcCLDdUibgjBxMgaOKqfz24RGu2qRHE7rJLfa%2FLYIKmNXnypjjqcexmQw9jadS%2Fjvj2yO446Jez1M6%2BKHw%2FYf3UqNEKX0VRqU%2BW1xGhF&X-Amz-Signature=00a91ae25a21ea2b008003f3ad1f32700df2599331fdbfd8b25127741530f8f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEDB37F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDuGeELe68mnuCNgAXpVyRhZQjaHI%2BigldQFuGflUCgjAIhALREydUVVRooGQVuhF81R%2BOghrThmXWWmcabdb5ko1%2BRKv8DCDEQABoMNjM3NDIzMTgzODA1IgyS%2BfIFmdawkzJR7lAq3AOHJHk5Cx4GMJ6%2B3FJdXMfLCJQkausO9G%2B4VvTsar1eNWC069B%2BR0Ja%2BfVvs0cED5G5cNd3iz6vUhJcKfgupQbWxNw83i2AfCJ0MFWJ8oNJcJpWtolY7crPxENzCE03rtzQfClFsfsJPyRgPF3TdEzcoFMGo4sTmZBNlGwmBkVOOxcH7DGgTJmgMuIfHjHJGAUOsTFtMLKcgLGXI1P%2Bp%2FCfG495M%2B07zdbsInNBZ3DLiqvtZruoeieUddWh%2BQA7d3%2FNIa6OuY4%2Bk7A6CAiwTcXr3X1d%2F5ncSqQjjTXwZoeU4hXKZaxx8V5lhm6n7ExQVTBn6zsuQdqz5MNs4I1wfwi6iOfkCda5%2BAvn%2BfaQ345w0F5RX1EVygH9J3OaRLtzW%2BQG8IaVCSKMGwPxUBQ8N4uve1II7TBUccsmdd389SlfstzUxexNxTe%2FNAHq2IExUJ%2BHylgpRm1mWNwn26H%2BkyZUPggc6LxijXR6YVY8w8CCGBUbaKm7I4vMSxIzlQnjD3KwxYFOtDdu1kwnTMpovqhVA49GD2%2BeFKCaRUPuhcg55XkUqjT4CtpkzZsHdIV0OBN60jLEmCfj6VgEzCpjrUHNwa9boc6ZWsL2WCkqtFqwO%2FDWGgf5aqvDQd9T6zCwsYnEBjqkAT0mMLaRcnSHqjibb9%2FeeWG3bdVwaQs1NFsDfdk0CCVx4ZRPYTdte6VNxBTl8F2RYj7c%2BHlKIfqNIhcctIf4IhyqpM7E99phy9ahMYlvo94R9wTI0sVWNcCLDdUibgjBxMgaOKqfz24RGu2qRHE7rJLfa%2FLYIKmNXnypjjqcexmQw9jadS%2Fjvj2yO446Jez1M6%2BKHw%2FYf3UqNEKX0VRqU%2BW1xGhF&X-Amz-Signature=27c38d266c23beec75fdfacff49b505bfd788333c8184b06e833a70e4f6c2a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEDB37F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDuGeELe68mnuCNgAXpVyRhZQjaHI%2BigldQFuGflUCgjAIhALREydUVVRooGQVuhF81R%2BOghrThmXWWmcabdb5ko1%2BRKv8DCDEQABoMNjM3NDIzMTgzODA1IgyS%2BfIFmdawkzJR7lAq3AOHJHk5Cx4GMJ6%2B3FJdXMfLCJQkausO9G%2B4VvTsar1eNWC069B%2BR0Ja%2BfVvs0cED5G5cNd3iz6vUhJcKfgupQbWxNw83i2AfCJ0MFWJ8oNJcJpWtolY7crPxENzCE03rtzQfClFsfsJPyRgPF3TdEzcoFMGo4sTmZBNlGwmBkVOOxcH7DGgTJmgMuIfHjHJGAUOsTFtMLKcgLGXI1P%2Bp%2FCfG495M%2B07zdbsInNBZ3DLiqvtZruoeieUddWh%2BQA7d3%2FNIa6OuY4%2Bk7A6CAiwTcXr3X1d%2F5ncSqQjjTXwZoeU4hXKZaxx8V5lhm6n7ExQVTBn6zsuQdqz5MNs4I1wfwi6iOfkCda5%2BAvn%2BfaQ345w0F5RX1EVygH9J3OaRLtzW%2BQG8IaVCSKMGwPxUBQ8N4uve1II7TBUccsmdd389SlfstzUxexNxTe%2FNAHq2IExUJ%2BHylgpRm1mWNwn26H%2BkyZUPggc6LxijXR6YVY8w8CCGBUbaKm7I4vMSxIzlQnjD3KwxYFOtDdu1kwnTMpovqhVA49GD2%2BeFKCaRUPuhcg55XkUqjT4CtpkzZsHdIV0OBN60jLEmCfj6VgEzCpjrUHNwa9boc6ZWsL2WCkqtFqwO%2FDWGgf5aqvDQd9T6zCwsYnEBjqkAT0mMLaRcnSHqjibb9%2FeeWG3bdVwaQs1NFsDfdk0CCVx4ZRPYTdte6VNxBTl8F2RYj7c%2BHlKIfqNIhcctIf4IhyqpM7E99phy9ahMYlvo94R9wTI0sVWNcCLDdUibgjBxMgaOKqfz24RGu2qRHE7rJLfa%2FLYIKmNXnypjjqcexmQw9jadS%2Fjvj2yO446Jez1M6%2BKHw%2FYf3UqNEKX0VRqU%2BW1xGhF&X-Amz-Signature=2ee2c315a592a3502cef3a1b105259319883b288245c440358f4e3bd6a370e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEDB37F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDuGeELe68mnuCNgAXpVyRhZQjaHI%2BigldQFuGflUCgjAIhALREydUVVRooGQVuhF81R%2BOghrThmXWWmcabdb5ko1%2BRKv8DCDEQABoMNjM3NDIzMTgzODA1IgyS%2BfIFmdawkzJR7lAq3AOHJHk5Cx4GMJ6%2B3FJdXMfLCJQkausO9G%2B4VvTsar1eNWC069B%2BR0Ja%2BfVvs0cED5G5cNd3iz6vUhJcKfgupQbWxNw83i2AfCJ0MFWJ8oNJcJpWtolY7crPxENzCE03rtzQfClFsfsJPyRgPF3TdEzcoFMGo4sTmZBNlGwmBkVOOxcH7DGgTJmgMuIfHjHJGAUOsTFtMLKcgLGXI1P%2Bp%2FCfG495M%2B07zdbsInNBZ3DLiqvtZruoeieUddWh%2BQA7d3%2FNIa6OuY4%2Bk7A6CAiwTcXr3X1d%2F5ncSqQjjTXwZoeU4hXKZaxx8V5lhm6n7ExQVTBn6zsuQdqz5MNs4I1wfwi6iOfkCda5%2BAvn%2BfaQ345w0F5RX1EVygH9J3OaRLtzW%2BQG8IaVCSKMGwPxUBQ8N4uve1II7TBUccsmdd389SlfstzUxexNxTe%2FNAHq2IExUJ%2BHylgpRm1mWNwn26H%2BkyZUPggc6LxijXR6YVY8w8CCGBUbaKm7I4vMSxIzlQnjD3KwxYFOtDdu1kwnTMpovqhVA49GD2%2BeFKCaRUPuhcg55XkUqjT4CtpkzZsHdIV0OBN60jLEmCfj6VgEzCpjrUHNwa9boc6ZWsL2WCkqtFqwO%2FDWGgf5aqvDQd9T6zCwsYnEBjqkAT0mMLaRcnSHqjibb9%2FeeWG3bdVwaQs1NFsDfdk0CCVx4ZRPYTdte6VNxBTl8F2RYj7c%2BHlKIfqNIhcctIf4IhyqpM7E99phy9ahMYlvo94R9wTI0sVWNcCLDdUibgjBxMgaOKqfz24RGu2qRHE7rJLfa%2FLYIKmNXnypjjqcexmQw9jadS%2Fjvj2yO446Jez1M6%2BKHw%2FYf3UqNEKX0VRqU%2BW1xGhF&X-Amz-Signature=c36fa48c50d5cb358941306ac9cb6b9b3ff5ada82aa0f24ab270b94f9d739fe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEDB37F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDuGeELe68mnuCNgAXpVyRhZQjaHI%2BigldQFuGflUCgjAIhALREydUVVRooGQVuhF81R%2BOghrThmXWWmcabdb5ko1%2BRKv8DCDEQABoMNjM3NDIzMTgzODA1IgyS%2BfIFmdawkzJR7lAq3AOHJHk5Cx4GMJ6%2B3FJdXMfLCJQkausO9G%2B4VvTsar1eNWC069B%2BR0Ja%2BfVvs0cED5G5cNd3iz6vUhJcKfgupQbWxNw83i2AfCJ0MFWJ8oNJcJpWtolY7crPxENzCE03rtzQfClFsfsJPyRgPF3TdEzcoFMGo4sTmZBNlGwmBkVOOxcH7DGgTJmgMuIfHjHJGAUOsTFtMLKcgLGXI1P%2Bp%2FCfG495M%2B07zdbsInNBZ3DLiqvtZruoeieUddWh%2BQA7d3%2FNIa6OuY4%2Bk7A6CAiwTcXr3X1d%2F5ncSqQjjTXwZoeU4hXKZaxx8V5lhm6n7ExQVTBn6zsuQdqz5MNs4I1wfwi6iOfkCda5%2BAvn%2BfaQ345w0F5RX1EVygH9J3OaRLtzW%2BQG8IaVCSKMGwPxUBQ8N4uve1II7TBUccsmdd389SlfstzUxexNxTe%2FNAHq2IExUJ%2BHylgpRm1mWNwn26H%2BkyZUPggc6LxijXR6YVY8w8CCGBUbaKm7I4vMSxIzlQnjD3KwxYFOtDdu1kwnTMpovqhVA49GD2%2BeFKCaRUPuhcg55XkUqjT4CtpkzZsHdIV0OBN60jLEmCfj6VgEzCpjrUHNwa9boc6ZWsL2WCkqtFqwO%2FDWGgf5aqvDQd9T6zCwsYnEBjqkAT0mMLaRcnSHqjibb9%2FeeWG3bdVwaQs1NFsDfdk0CCVx4ZRPYTdte6VNxBTl8F2RYj7c%2BHlKIfqNIhcctIf4IhyqpM7E99phy9ahMYlvo94R9wTI0sVWNcCLDdUibgjBxMgaOKqfz24RGu2qRHE7rJLfa%2FLYIKmNXnypjjqcexmQw9jadS%2Fjvj2yO446Jez1M6%2BKHw%2FYf3UqNEKX0VRqU%2BW1xGhF&X-Amz-Signature=e9ea5b1c890e3995ad5f6a849d86070dbf6e2d245061d7edb73d7e63e8fadc34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEDB37F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDuGeELe68mnuCNgAXpVyRhZQjaHI%2BigldQFuGflUCgjAIhALREydUVVRooGQVuhF81R%2BOghrThmXWWmcabdb5ko1%2BRKv8DCDEQABoMNjM3NDIzMTgzODA1IgyS%2BfIFmdawkzJR7lAq3AOHJHk5Cx4GMJ6%2B3FJdXMfLCJQkausO9G%2B4VvTsar1eNWC069B%2BR0Ja%2BfVvs0cED5G5cNd3iz6vUhJcKfgupQbWxNw83i2AfCJ0MFWJ8oNJcJpWtolY7crPxENzCE03rtzQfClFsfsJPyRgPF3TdEzcoFMGo4sTmZBNlGwmBkVOOxcH7DGgTJmgMuIfHjHJGAUOsTFtMLKcgLGXI1P%2Bp%2FCfG495M%2B07zdbsInNBZ3DLiqvtZruoeieUddWh%2BQA7d3%2FNIa6OuY4%2Bk7A6CAiwTcXr3X1d%2F5ncSqQjjTXwZoeU4hXKZaxx8V5lhm6n7ExQVTBn6zsuQdqz5MNs4I1wfwi6iOfkCda5%2BAvn%2BfaQ345w0F5RX1EVygH9J3OaRLtzW%2BQG8IaVCSKMGwPxUBQ8N4uve1II7TBUccsmdd389SlfstzUxexNxTe%2FNAHq2IExUJ%2BHylgpRm1mWNwn26H%2BkyZUPggc6LxijXR6YVY8w8CCGBUbaKm7I4vMSxIzlQnjD3KwxYFOtDdu1kwnTMpovqhVA49GD2%2BeFKCaRUPuhcg55XkUqjT4CtpkzZsHdIV0OBN60jLEmCfj6VgEzCpjrUHNwa9boc6ZWsL2WCkqtFqwO%2FDWGgf5aqvDQd9T6zCwsYnEBjqkAT0mMLaRcnSHqjibb9%2FeeWG3bdVwaQs1NFsDfdk0CCVx4ZRPYTdte6VNxBTl8F2RYj7c%2BHlKIfqNIhcctIf4IhyqpM7E99phy9ahMYlvo94R9wTI0sVWNcCLDdUibgjBxMgaOKqfz24RGu2qRHE7rJLfa%2FLYIKmNXnypjjqcexmQw9jadS%2Fjvj2yO446Jez1M6%2BKHw%2FYf3UqNEKX0VRqU%2BW1xGhF&X-Amz-Signature=491c816cc9eb8cb2ba5ac15d1ee7f81d9201c435f30b237728f2c2895428ca7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEDB37F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDuGeELe68mnuCNgAXpVyRhZQjaHI%2BigldQFuGflUCgjAIhALREydUVVRooGQVuhF81R%2BOghrThmXWWmcabdb5ko1%2BRKv8DCDEQABoMNjM3NDIzMTgzODA1IgyS%2BfIFmdawkzJR7lAq3AOHJHk5Cx4GMJ6%2B3FJdXMfLCJQkausO9G%2B4VvTsar1eNWC069B%2BR0Ja%2BfVvs0cED5G5cNd3iz6vUhJcKfgupQbWxNw83i2AfCJ0MFWJ8oNJcJpWtolY7crPxENzCE03rtzQfClFsfsJPyRgPF3TdEzcoFMGo4sTmZBNlGwmBkVOOxcH7DGgTJmgMuIfHjHJGAUOsTFtMLKcgLGXI1P%2Bp%2FCfG495M%2B07zdbsInNBZ3DLiqvtZruoeieUddWh%2BQA7d3%2FNIa6OuY4%2Bk7A6CAiwTcXr3X1d%2F5ncSqQjjTXwZoeU4hXKZaxx8V5lhm6n7ExQVTBn6zsuQdqz5MNs4I1wfwi6iOfkCda5%2BAvn%2BfaQ345w0F5RX1EVygH9J3OaRLtzW%2BQG8IaVCSKMGwPxUBQ8N4uve1II7TBUccsmdd389SlfstzUxexNxTe%2FNAHq2IExUJ%2BHylgpRm1mWNwn26H%2BkyZUPggc6LxijXR6YVY8w8CCGBUbaKm7I4vMSxIzlQnjD3KwxYFOtDdu1kwnTMpovqhVA49GD2%2BeFKCaRUPuhcg55XkUqjT4CtpkzZsHdIV0OBN60jLEmCfj6VgEzCpjrUHNwa9boc6ZWsL2WCkqtFqwO%2FDWGgf5aqvDQd9T6zCwsYnEBjqkAT0mMLaRcnSHqjibb9%2FeeWG3bdVwaQs1NFsDfdk0CCVx4ZRPYTdte6VNxBTl8F2RYj7c%2BHlKIfqNIhcctIf4IhyqpM7E99phy9ahMYlvo94R9wTI0sVWNcCLDdUibgjBxMgaOKqfz24RGu2qRHE7rJLfa%2FLYIKmNXnypjjqcexmQw9jadS%2Fjvj2yO446Jez1M6%2BKHw%2FYf3UqNEKX0VRqU%2BW1xGhF&X-Amz-Signature=5276ac41293154c8cfcd6b91a9760e0bf69b98ec3b9bd9dbb51e24157471325b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEDB37F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDuGeELe68mnuCNgAXpVyRhZQjaHI%2BigldQFuGflUCgjAIhALREydUVVRooGQVuhF81R%2BOghrThmXWWmcabdb5ko1%2BRKv8DCDEQABoMNjM3NDIzMTgzODA1IgyS%2BfIFmdawkzJR7lAq3AOHJHk5Cx4GMJ6%2B3FJdXMfLCJQkausO9G%2B4VvTsar1eNWC069B%2BR0Ja%2BfVvs0cED5G5cNd3iz6vUhJcKfgupQbWxNw83i2AfCJ0MFWJ8oNJcJpWtolY7crPxENzCE03rtzQfClFsfsJPyRgPF3TdEzcoFMGo4sTmZBNlGwmBkVOOxcH7DGgTJmgMuIfHjHJGAUOsTFtMLKcgLGXI1P%2Bp%2FCfG495M%2B07zdbsInNBZ3DLiqvtZruoeieUddWh%2BQA7d3%2FNIa6OuY4%2Bk7A6CAiwTcXr3X1d%2F5ncSqQjjTXwZoeU4hXKZaxx8V5lhm6n7ExQVTBn6zsuQdqz5MNs4I1wfwi6iOfkCda5%2BAvn%2BfaQ345w0F5RX1EVygH9J3OaRLtzW%2BQG8IaVCSKMGwPxUBQ8N4uve1II7TBUccsmdd389SlfstzUxexNxTe%2FNAHq2IExUJ%2BHylgpRm1mWNwn26H%2BkyZUPggc6LxijXR6YVY8w8CCGBUbaKm7I4vMSxIzlQnjD3KwxYFOtDdu1kwnTMpovqhVA49GD2%2BeFKCaRUPuhcg55XkUqjT4CtpkzZsHdIV0OBN60jLEmCfj6VgEzCpjrUHNwa9boc6ZWsL2WCkqtFqwO%2FDWGgf5aqvDQd9T6zCwsYnEBjqkAT0mMLaRcnSHqjibb9%2FeeWG3bdVwaQs1NFsDfdk0CCVx4ZRPYTdte6VNxBTl8F2RYj7c%2BHlKIfqNIhcctIf4IhyqpM7E99phy9ahMYlvo94R9wTI0sVWNcCLDdUibgjBxMgaOKqfz24RGu2qRHE7rJLfa%2FLYIKmNXnypjjqcexmQw9jadS%2Fjvj2yO446Jez1M6%2BKHw%2FYf3UqNEKX0VRqU%2BW1xGhF&X-Amz-Signature=c516ae043a90ed5907891b1c695b04dc61e0da10a8f704b9ac50c9ea7fe827a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEEDB37F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQDuGeELe68mnuCNgAXpVyRhZQjaHI%2BigldQFuGflUCgjAIhALREydUVVRooGQVuhF81R%2BOghrThmXWWmcabdb5ko1%2BRKv8DCDEQABoMNjM3NDIzMTgzODA1IgyS%2BfIFmdawkzJR7lAq3AOHJHk5Cx4GMJ6%2B3FJdXMfLCJQkausO9G%2B4VvTsar1eNWC069B%2BR0Ja%2BfVvs0cED5G5cNd3iz6vUhJcKfgupQbWxNw83i2AfCJ0MFWJ8oNJcJpWtolY7crPxENzCE03rtzQfClFsfsJPyRgPF3TdEzcoFMGo4sTmZBNlGwmBkVOOxcH7DGgTJmgMuIfHjHJGAUOsTFtMLKcgLGXI1P%2Bp%2FCfG495M%2B07zdbsInNBZ3DLiqvtZruoeieUddWh%2BQA7d3%2FNIa6OuY4%2Bk7A6CAiwTcXr3X1d%2F5ncSqQjjTXwZoeU4hXKZaxx8V5lhm6n7ExQVTBn6zsuQdqz5MNs4I1wfwi6iOfkCda5%2BAvn%2BfaQ345w0F5RX1EVygH9J3OaRLtzW%2BQG8IaVCSKMGwPxUBQ8N4uve1II7TBUccsmdd389SlfstzUxexNxTe%2FNAHq2IExUJ%2BHylgpRm1mWNwn26H%2BkyZUPggc6LxijXR6YVY8w8CCGBUbaKm7I4vMSxIzlQnjD3KwxYFOtDdu1kwnTMpovqhVA49GD2%2BeFKCaRUPuhcg55XkUqjT4CtpkzZsHdIV0OBN60jLEmCfj6VgEzCpjrUHNwa9boc6ZWsL2WCkqtFqwO%2FDWGgf5aqvDQd9T6zCwsYnEBjqkAT0mMLaRcnSHqjibb9%2FeeWG3bdVwaQs1NFsDfdk0CCVx4ZRPYTdte6VNxBTl8F2RYj7c%2BHlKIfqNIhcctIf4IhyqpM7E99phy9ahMYlvo94R9wTI0sVWNcCLDdUibgjBxMgaOKqfz24RGu2qRHE7rJLfa%2FLYIKmNXnypjjqcexmQw9jadS%2Fjvj2yO446Jez1M6%2BKHw%2FYf3UqNEKX0VRqU%2BW1xGhF&X-Amz-Signature=1c55991d050310d3154bb652e10e6a91691e80497dbe679b9d3c1da107dca5fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
