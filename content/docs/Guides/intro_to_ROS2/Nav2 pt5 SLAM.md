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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVV7Q7DO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCID1GBbmrcyqNBzcSox2d9T1gt%2Bk6%2BX20yBTeRMDgTijzAiA%2Fh7cTOjfbo6chXOUKF%2BsiaRikd7niJzYZ%2BWNl8ltc2yr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM22XwRFamh14GI%2BV9KtwDAxTCv5CgpEJPx1tUAys0mTLgs5Nz8soFrt%2FXBuzporr85Q84h4hIYzlQ%2Ba8Kh6Mw5U6i4h7JpvGHIbg1%2BzEnNy8woqr9VLT7HSBRAJPQqx0FJUMfcEbN1WHZhn70WP6jvLlWFruts%2FePrsFZzngFkBSNWZ6npubm1E02MDllp3%2B9WA1n%2B5G2%2F%2Bj4m8tHsc7z3IZ5CVkZzqrfp0oame22tUy2UN6CmedFdiJ9xHxR1bBhcYKzDt5F9XYy7DQtq4Joh6Qv2qV%2Fk1d3BrJavZXeTJ1b5NQpiWP5tNC2RrjiX4Zf2niX%2BxBipS2pGuzw7SKupnXY5AYM%2BeKctdE58etSup%2BOQcVQ%2BEBiUK6VH1HTjhm1dGKc6jcj5jc%2FVGhVPH9tjdw5122IecAgMcX3yQdgld%2F%2BKbHTuZ8MtclMBANjBBX5T%2B8SxonFTbvTf7yMefjqO%2FDwTJq6w%2B40clwHqs1YfRZBMkd6fKV3RhuWFcRr67Ounsgnc3yqbhsiESl16bJBOCUHaZAzENJkhhEBm%2BdWSr45uOVkkQGiOa7pxvGs12fTOcHs0XrrSzrlxjxdupoCYNCdLDtQsAouAFoGGrFVLlJw2tcA9wnzdSQnkquG4D8bIJ8mdUN6PSW4y0Mwj8maxAY6pgFRxRNGaWhne3Qym2gmVb5NLrzknddCNhzXhSkWhLTbNxaCr06MladYljpFPCmwccwEgGUBYK53s%2B%2B2bIr7C7yGbUyey64EWqJ9uEXbNGaIV%2BQyK2TQIGmAhj2Qpi7rydfVvl3XdSoB90q7qymdJO7T9fNKEdJbQGL0BhDhLIur72W9rELMK13vBQK6gerukSp5IBbSlZtHObF0vPQrapGRbxdby%2Bb2&X-Amz-Signature=a6ee027a15faa6f7ccafaca995fdf8e9d6be2f426bfa7ae4b83be5454d7481f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVV7Q7DO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCID1GBbmrcyqNBzcSox2d9T1gt%2Bk6%2BX20yBTeRMDgTijzAiA%2Fh7cTOjfbo6chXOUKF%2BsiaRikd7niJzYZ%2BWNl8ltc2yr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM22XwRFamh14GI%2BV9KtwDAxTCv5CgpEJPx1tUAys0mTLgs5Nz8soFrt%2FXBuzporr85Q84h4hIYzlQ%2Ba8Kh6Mw5U6i4h7JpvGHIbg1%2BzEnNy8woqr9VLT7HSBRAJPQqx0FJUMfcEbN1WHZhn70WP6jvLlWFruts%2FePrsFZzngFkBSNWZ6npubm1E02MDllp3%2B9WA1n%2B5G2%2F%2Bj4m8tHsc7z3IZ5CVkZzqrfp0oame22tUy2UN6CmedFdiJ9xHxR1bBhcYKzDt5F9XYy7DQtq4Joh6Qv2qV%2Fk1d3BrJavZXeTJ1b5NQpiWP5tNC2RrjiX4Zf2niX%2BxBipS2pGuzw7SKupnXY5AYM%2BeKctdE58etSup%2BOQcVQ%2BEBiUK6VH1HTjhm1dGKc6jcj5jc%2FVGhVPH9tjdw5122IecAgMcX3yQdgld%2F%2BKbHTuZ8MtclMBANjBBX5T%2B8SxonFTbvTf7yMefjqO%2FDwTJq6w%2B40clwHqs1YfRZBMkd6fKV3RhuWFcRr67Ounsgnc3yqbhsiESl16bJBOCUHaZAzENJkhhEBm%2BdWSr45uOVkkQGiOa7pxvGs12fTOcHs0XrrSzrlxjxdupoCYNCdLDtQsAouAFoGGrFVLlJw2tcA9wnzdSQnkquG4D8bIJ8mdUN6PSW4y0Mwj8maxAY6pgFRxRNGaWhne3Qym2gmVb5NLrzknddCNhzXhSkWhLTbNxaCr06MladYljpFPCmwccwEgGUBYK53s%2B%2B2bIr7C7yGbUyey64EWqJ9uEXbNGaIV%2BQyK2TQIGmAhj2Qpi7rydfVvl3XdSoB90q7qymdJO7T9fNKEdJbQGL0BhDhLIur72W9rELMK13vBQK6gerukSp5IBbSlZtHObF0vPQrapGRbxdby%2Bb2&X-Amz-Signature=c3531bb6e661a5e44ca17c4165a99180fc9120c046da0931a40326aeb158ee7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVV7Q7DO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCID1GBbmrcyqNBzcSox2d9T1gt%2Bk6%2BX20yBTeRMDgTijzAiA%2Fh7cTOjfbo6chXOUKF%2BsiaRikd7niJzYZ%2BWNl8ltc2yr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM22XwRFamh14GI%2BV9KtwDAxTCv5CgpEJPx1tUAys0mTLgs5Nz8soFrt%2FXBuzporr85Q84h4hIYzlQ%2Ba8Kh6Mw5U6i4h7JpvGHIbg1%2BzEnNy8woqr9VLT7HSBRAJPQqx0FJUMfcEbN1WHZhn70WP6jvLlWFruts%2FePrsFZzngFkBSNWZ6npubm1E02MDllp3%2B9WA1n%2B5G2%2F%2Bj4m8tHsc7z3IZ5CVkZzqrfp0oame22tUy2UN6CmedFdiJ9xHxR1bBhcYKzDt5F9XYy7DQtq4Joh6Qv2qV%2Fk1d3BrJavZXeTJ1b5NQpiWP5tNC2RrjiX4Zf2niX%2BxBipS2pGuzw7SKupnXY5AYM%2BeKctdE58etSup%2BOQcVQ%2BEBiUK6VH1HTjhm1dGKc6jcj5jc%2FVGhVPH9tjdw5122IecAgMcX3yQdgld%2F%2BKbHTuZ8MtclMBANjBBX5T%2B8SxonFTbvTf7yMefjqO%2FDwTJq6w%2B40clwHqs1YfRZBMkd6fKV3RhuWFcRr67Ounsgnc3yqbhsiESl16bJBOCUHaZAzENJkhhEBm%2BdWSr45uOVkkQGiOa7pxvGs12fTOcHs0XrrSzrlxjxdupoCYNCdLDtQsAouAFoGGrFVLlJw2tcA9wnzdSQnkquG4D8bIJ8mdUN6PSW4y0Mwj8maxAY6pgFRxRNGaWhne3Qym2gmVb5NLrzknddCNhzXhSkWhLTbNxaCr06MladYljpFPCmwccwEgGUBYK53s%2B%2B2bIr7C7yGbUyey64EWqJ9uEXbNGaIV%2BQyK2TQIGmAhj2Qpi7rydfVvl3XdSoB90q7qymdJO7T9fNKEdJbQGL0BhDhLIur72W9rELMK13vBQK6gerukSp5IBbSlZtHObF0vPQrapGRbxdby%2Bb2&X-Amz-Signature=12380abb3763b6e774ca807b2a1fc0397f90d2f1225b5512b7867badb7e3ad1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVV7Q7DO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCID1GBbmrcyqNBzcSox2d9T1gt%2Bk6%2BX20yBTeRMDgTijzAiA%2Fh7cTOjfbo6chXOUKF%2BsiaRikd7niJzYZ%2BWNl8ltc2yr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM22XwRFamh14GI%2BV9KtwDAxTCv5CgpEJPx1tUAys0mTLgs5Nz8soFrt%2FXBuzporr85Q84h4hIYzlQ%2Ba8Kh6Mw5U6i4h7JpvGHIbg1%2BzEnNy8woqr9VLT7HSBRAJPQqx0FJUMfcEbN1WHZhn70WP6jvLlWFruts%2FePrsFZzngFkBSNWZ6npubm1E02MDllp3%2B9WA1n%2B5G2%2F%2Bj4m8tHsc7z3IZ5CVkZzqrfp0oame22tUy2UN6CmedFdiJ9xHxR1bBhcYKzDt5F9XYy7DQtq4Joh6Qv2qV%2Fk1d3BrJavZXeTJ1b5NQpiWP5tNC2RrjiX4Zf2niX%2BxBipS2pGuzw7SKupnXY5AYM%2BeKctdE58etSup%2BOQcVQ%2BEBiUK6VH1HTjhm1dGKc6jcj5jc%2FVGhVPH9tjdw5122IecAgMcX3yQdgld%2F%2BKbHTuZ8MtclMBANjBBX5T%2B8SxonFTbvTf7yMefjqO%2FDwTJq6w%2B40clwHqs1YfRZBMkd6fKV3RhuWFcRr67Ounsgnc3yqbhsiESl16bJBOCUHaZAzENJkhhEBm%2BdWSr45uOVkkQGiOa7pxvGs12fTOcHs0XrrSzrlxjxdupoCYNCdLDtQsAouAFoGGrFVLlJw2tcA9wnzdSQnkquG4D8bIJ8mdUN6PSW4y0Mwj8maxAY6pgFRxRNGaWhne3Qym2gmVb5NLrzknddCNhzXhSkWhLTbNxaCr06MladYljpFPCmwccwEgGUBYK53s%2B%2B2bIr7C7yGbUyey64EWqJ9uEXbNGaIV%2BQyK2TQIGmAhj2Qpi7rydfVvl3XdSoB90q7qymdJO7T9fNKEdJbQGL0BhDhLIur72W9rELMK13vBQK6gerukSp5IBbSlZtHObF0vPQrapGRbxdby%2Bb2&X-Amz-Signature=881bdb70464c61fa9451dbe2d2e27764f74c54cc6d0d50a929f6b2b556d3410a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVV7Q7DO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCID1GBbmrcyqNBzcSox2d9T1gt%2Bk6%2BX20yBTeRMDgTijzAiA%2Fh7cTOjfbo6chXOUKF%2BsiaRikd7niJzYZ%2BWNl8ltc2yr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM22XwRFamh14GI%2BV9KtwDAxTCv5CgpEJPx1tUAys0mTLgs5Nz8soFrt%2FXBuzporr85Q84h4hIYzlQ%2Ba8Kh6Mw5U6i4h7JpvGHIbg1%2BzEnNy8woqr9VLT7HSBRAJPQqx0FJUMfcEbN1WHZhn70WP6jvLlWFruts%2FePrsFZzngFkBSNWZ6npubm1E02MDllp3%2B9WA1n%2B5G2%2F%2Bj4m8tHsc7z3IZ5CVkZzqrfp0oame22tUy2UN6CmedFdiJ9xHxR1bBhcYKzDt5F9XYy7DQtq4Joh6Qv2qV%2Fk1d3BrJavZXeTJ1b5NQpiWP5tNC2RrjiX4Zf2niX%2BxBipS2pGuzw7SKupnXY5AYM%2BeKctdE58etSup%2BOQcVQ%2BEBiUK6VH1HTjhm1dGKc6jcj5jc%2FVGhVPH9tjdw5122IecAgMcX3yQdgld%2F%2BKbHTuZ8MtclMBANjBBX5T%2B8SxonFTbvTf7yMefjqO%2FDwTJq6w%2B40clwHqs1YfRZBMkd6fKV3RhuWFcRr67Ounsgnc3yqbhsiESl16bJBOCUHaZAzENJkhhEBm%2BdWSr45uOVkkQGiOa7pxvGs12fTOcHs0XrrSzrlxjxdupoCYNCdLDtQsAouAFoGGrFVLlJw2tcA9wnzdSQnkquG4D8bIJ8mdUN6PSW4y0Mwj8maxAY6pgFRxRNGaWhne3Qym2gmVb5NLrzknddCNhzXhSkWhLTbNxaCr06MladYljpFPCmwccwEgGUBYK53s%2B%2B2bIr7C7yGbUyey64EWqJ9uEXbNGaIV%2BQyK2TQIGmAhj2Qpi7rydfVvl3XdSoB90q7qymdJO7T9fNKEdJbQGL0BhDhLIur72W9rELMK13vBQK6gerukSp5IBbSlZtHObF0vPQrapGRbxdby%2Bb2&X-Amz-Signature=43a5c6147d31f41513bd32247988dbb478327eee2df6ec94ba215b98109611a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVV7Q7DO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCID1GBbmrcyqNBzcSox2d9T1gt%2Bk6%2BX20yBTeRMDgTijzAiA%2Fh7cTOjfbo6chXOUKF%2BsiaRikd7niJzYZ%2BWNl8ltc2yr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM22XwRFamh14GI%2BV9KtwDAxTCv5CgpEJPx1tUAys0mTLgs5Nz8soFrt%2FXBuzporr85Q84h4hIYzlQ%2Ba8Kh6Mw5U6i4h7JpvGHIbg1%2BzEnNy8woqr9VLT7HSBRAJPQqx0FJUMfcEbN1WHZhn70WP6jvLlWFruts%2FePrsFZzngFkBSNWZ6npubm1E02MDllp3%2B9WA1n%2B5G2%2F%2Bj4m8tHsc7z3IZ5CVkZzqrfp0oame22tUy2UN6CmedFdiJ9xHxR1bBhcYKzDt5F9XYy7DQtq4Joh6Qv2qV%2Fk1d3BrJavZXeTJ1b5NQpiWP5tNC2RrjiX4Zf2niX%2BxBipS2pGuzw7SKupnXY5AYM%2BeKctdE58etSup%2BOQcVQ%2BEBiUK6VH1HTjhm1dGKc6jcj5jc%2FVGhVPH9tjdw5122IecAgMcX3yQdgld%2F%2BKbHTuZ8MtclMBANjBBX5T%2B8SxonFTbvTf7yMefjqO%2FDwTJq6w%2B40clwHqs1YfRZBMkd6fKV3RhuWFcRr67Ounsgnc3yqbhsiESl16bJBOCUHaZAzENJkhhEBm%2BdWSr45uOVkkQGiOa7pxvGs12fTOcHs0XrrSzrlxjxdupoCYNCdLDtQsAouAFoGGrFVLlJw2tcA9wnzdSQnkquG4D8bIJ8mdUN6PSW4y0Mwj8maxAY6pgFRxRNGaWhne3Qym2gmVb5NLrzknddCNhzXhSkWhLTbNxaCr06MladYljpFPCmwccwEgGUBYK53s%2B%2B2bIr7C7yGbUyey64EWqJ9uEXbNGaIV%2BQyK2TQIGmAhj2Qpi7rydfVvl3XdSoB90q7qymdJO7T9fNKEdJbQGL0BhDhLIur72W9rELMK13vBQK6gerukSp5IBbSlZtHObF0vPQrapGRbxdby%2Bb2&X-Amz-Signature=cf57e97591077abf1e744391021db5d98a14641bf33b1e9cbb4e9570758e4e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVV7Q7DO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCID1GBbmrcyqNBzcSox2d9T1gt%2Bk6%2BX20yBTeRMDgTijzAiA%2Fh7cTOjfbo6chXOUKF%2BsiaRikd7niJzYZ%2BWNl8ltc2yr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM22XwRFamh14GI%2BV9KtwDAxTCv5CgpEJPx1tUAys0mTLgs5Nz8soFrt%2FXBuzporr85Q84h4hIYzlQ%2Ba8Kh6Mw5U6i4h7JpvGHIbg1%2BzEnNy8woqr9VLT7HSBRAJPQqx0FJUMfcEbN1WHZhn70WP6jvLlWFruts%2FePrsFZzngFkBSNWZ6npubm1E02MDllp3%2B9WA1n%2B5G2%2F%2Bj4m8tHsc7z3IZ5CVkZzqrfp0oame22tUy2UN6CmedFdiJ9xHxR1bBhcYKzDt5F9XYy7DQtq4Joh6Qv2qV%2Fk1d3BrJavZXeTJ1b5NQpiWP5tNC2RrjiX4Zf2niX%2BxBipS2pGuzw7SKupnXY5AYM%2BeKctdE58etSup%2BOQcVQ%2BEBiUK6VH1HTjhm1dGKc6jcj5jc%2FVGhVPH9tjdw5122IecAgMcX3yQdgld%2F%2BKbHTuZ8MtclMBANjBBX5T%2B8SxonFTbvTf7yMefjqO%2FDwTJq6w%2B40clwHqs1YfRZBMkd6fKV3RhuWFcRr67Ounsgnc3yqbhsiESl16bJBOCUHaZAzENJkhhEBm%2BdWSr45uOVkkQGiOa7pxvGs12fTOcHs0XrrSzrlxjxdupoCYNCdLDtQsAouAFoGGrFVLlJw2tcA9wnzdSQnkquG4D8bIJ8mdUN6PSW4y0Mwj8maxAY6pgFRxRNGaWhne3Qym2gmVb5NLrzknddCNhzXhSkWhLTbNxaCr06MladYljpFPCmwccwEgGUBYK53s%2B%2B2bIr7C7yGbUyey64EWqJ9uEXbNGaIV%2BQyK2TQIGmAhj2Qpi7rydfVvl3XdSoB90q7qymdJO7T9fNKEdJbQGL0BhDhLIur72W9rELMK13vBQK6gerukSp5IBbSlZtHObF0vPQrapGRbxdby%2Bb2&X-Amz-Signature=5b4ec873307a3b1ff5d935a0f1daa0c69cb7248442c3f2282c1c35ef6503a3c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVV7Q7DO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCID1GBbmrcyqNBzcSox2d9T1gt%2Bk6%2BX20yBTeRMDgTijzAiA%2Fh7cTOjfbo6chXOUKF%2BsiaRikd7niJzYZ%2BWNl8ltc2yr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM22XwRFamh14GI%2BV9KtwDAxTCv5CgpEJPx1tUAys0mTLgs5Nz8soFrt%2FXBuzporr85Q84h4hIYzlQ%2Ba8Kh6Mw5U6i4h7JpvGHIbg1%2BzEnNy8woqr9VLT7HSBRAJPQqx0FJUMfcEbN1WHZhn70WP6jvLlWFruts%2FePrsFZzngFkBSNWZ6npubm1E02MDllp3%2B9WA1n%2B5G2%2F%2Bj4m8tHsc7z3IZ5CVkZzqrfp0oame22tUy2UN6CmedFdiJ9xHxR1bBhcYKzDt5F9XYy7DQtq4Joh6Qv2qV%2Fk1d3BrJavZXeTJ1b5NQpiWP5tNC2RrjiX4Zf2niX%2BxBipS2pGuzw7SKupnXY5AYM%2BeKctdE58etSup%2BOQcVQ%2BEBiUK6VH1HTjhm1dGKc6jcj5jc%2FVGhVPH9tjdw5122IecAgMcX3yQdgld%2F%2BKbHTuZ8MtclMBANjBBX5T%2B8SxonFTbvTf7yMefjqO%2FDwTJq6w%2B40clwHqs1YfRZBMkd6fKV3RhuWFcRr67Ounsgnc3yqbhsiESl16bJBOCUHaZAzENJkhhEBm%2BdWSr45uOVkkQGiOa7pxvGs12fTOcHs0XrrSzrlxjxdupoCYNCdLDtQsAouAFoGGrFVLlJw2tcA9wnzdSQnkquG4D8bIJ8mdUN6PSW4y0Mwj8maxAY6pgFRxRNGaWhne3Qym2gmVb5NLrzknddCNhzXhSkWhLTbNxaCr06MladYljpFPCmwccwEgGUBYK53s%2B%2B2bIr7C7yGbUyey64EWqJ9uEXbNGaIV%2BQyK2TQIGmAhj2Qpi7rydfVvl3XdSoB90q7qymdJO7T9fNKEdJbQGL0BhDhLIur72W9rELMK13vBQK6gerukSp5IBbSlZtHObF0vPQrapGRbxdby%2Bb2&X-Amz-Signature=a15ae3347769a968e34759e8d5dd265263b3b7455e58d6374f1352bf07cd26de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVV7Q7DO%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCID1GBbmrcyqNBzcSox2d9T1gt%2Bk6%2BX20yBTeRMDgTijzAiA%2Fh7cTOjfbo6chXOUKF%2BsiaRikd7niJzYZ%2BWNl8ltc2yr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM22XwRFamh14GI%2BV9KtwDAxTCv5CgpEJPx1tUAys0mTLgs5Nz8soFrt%2FXBuzporr85Q84h4hIYzlQ%2Ba8Kh6Mw5U6i4h7JpvGHIbg1%2BzEnNy8woqr9VLT7HSBRAJPQqx0FJUMfcEbN1WHZhn70WP6jvLlWFruts%2FePrsFZzngFkBSNWZ6npubm1E02MDllp3%2B9WA1n%2B5G2%2F%2Bj4m8tHsc7z3IZ5CVkZzqrfp0oame22tUy2UN6CmedFdiJ9xHxR1bBhcYKzDt5F9XYy7DQtq4Joh6Qv2qV%2Fk1d3BrJavZXeTJ1b5NQpiWP5tNC2RrjiX4Zf2niX%2BxBipS2pGuzw7SKupnXY5AYM%2BeKctdE58etSup%2BOQcVQ%2BEBiUK6VH1HTjhm1dGKc6jcj5jc%2FVGhVPH9tjdw5122IecAgMcX3yQdgld%2F%2BKbHTuZ8MtclMBANjBBX5T%2B8SxonFTbvTf7yMefjqO%2FDwTJq6w%2B40clwHqs1YfRZBMkd6fKV3RhuWFcRr67Ounsgnc3yqbhsiESl16bJBOCUHaZAzENJkhhEBm%2BdWSr45uOVkkQGiOa7pxvGs12fTOcHs0XrrSzrlxjxdupoCYNCdLDtQsAouAFoGGrFVLlJw2tcA9wnzdSQnkquG4D8bIJ8mdUN6PSW4y0Mwj8maxAY6pgFRxRNGaWhne3Qym2gmVb5NLrzknddCNhzXhSkWhLTbNxaCr06MladYljpFPCmwccwEgGUBYK53s%2B%2B2bIr7C7yGbUyey64EWqJ9uEXbNGaIV%2BQyK2TQIGmAhj2Qpi7rydfVvl3XdSoB90q7qymdJO7T9fNKEdJbQGL0BhDhLIur72W9rELMK13vBQK6gerukSp5IBbSlZtHObF0vPQrapGRbxdby%2Bb2&X-Amz-Signature=f596d44e2a2a55660df8fb414ae0336275c7b033dbf14f373a1c6fc4b18403cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
