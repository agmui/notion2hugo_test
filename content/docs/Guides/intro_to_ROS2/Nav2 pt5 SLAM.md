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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP5X7QDL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICCyNGtbzUvA%2BH2A0vXINKIQzmItlYJPZBF%2BBVAszJiTAiEA3n6vv1%2F%2FnpRCOO9Z4upixWfooLMGLLAK17IpQ%2BMZU38q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDwbrrsFMb4k8vRIvSrcA11%2FLC1Eq8XOS9ZixccGTMM3CW7OTPrbgZWOjfBC%2FAtKo%2Bw06Njwph7wOV5BV5KJ0FAmkGrS%2Fp7E9XqlgGpMICyNX1R0pqn7DyIIUN9gLm2RlEzIoiqAJnHUY4aTqfmhyj%2Fog5GTLrDe1FQFWV0jSDf3Ur%2Bi11iPgHX8mK1vRD7qrg4XvFuSXP1rIeVEjbz6QAoGEAF5LeKxtguix3wBgykEV9yqlIHWqNTcCzKQhR%2FJq6it1MiNA7PewYrw5ZRlxsxjGZQWljw2kys7ZaIP9kdIYxQvBRvPCo2Sub9Djs%2FPETMP5CRUltHH3yhTySLAHYuMUuFPObQnwlrLsfbH0yaFyBc0WXY59pw8xTkwUmILZMIJcMof5F%2Fs7jji697fDmgIwvNiJhxM5LSr5iJtwVW1Tn2qszPsAAlZj%2BWydod5KfBhmxdaeHzb7CoXhx12SE4ugN0OQtB7B47yXIkXleZDE%2FDLTe7gyyszUaMpEbiy%2BCa37GPO1CMEwH88boWAUzt7CjyH2sB2vPHoA%2BHhZhZLA%2FCnJayuxDkqTtzKKTnWkyOrzDg9YrKW1wZqik0wjzC0PbFLSVGKGR2aqnMk%2BM3xm%2BuMEIM4%2B4jbWOOWtW5Cn4WwTwt7Fn54o%2FHIMNbZiMQGOqUBdrfQJarLtEiC5rzwsqoPDaTTsIBdtADMEQquStehcq90rXesnkb%2BE5u2u1XN5hQ49Aj6Ok95DUV%2FX%2FdGM%2BKFZhXDP0lARO%2F30aHlhjaYb4YSSpcM%2FpX4DCB7S4EyjopgQDwWmf0rfrxK97lBspIi1X%2Bjrbvpro16FvE0wHLyub9T6ZGo%2BsyFGrGkK9mVZZn8rXx8%2FZSETt%2F93sGGEpGdkMQkxkP%2B&X-Amz-Signature=ccff1a72f695d8bdcfdf632c5b819d02dab06c1b8ddb4b203805e69bb89ab009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP5X7QDL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICCyNGtbzUvA%2BH2A0vXINKIQzmItlYJPZBF%2BBVAszJiTAiEA3n6vv1%2F%2FnpRCOO9Z4upixWfooLMGLLAK17IpQ%2BMZU38q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDwbrrsFMb4k8vRIvSrcA11%2FLC1Eq8XOS9ZixccGTMM3CW7OTPrbgZWOjfBC%2FAtKo%2Bw06Njwph7wOV5BV5KJ0FAmkGrS%2Fp7E9XqlgGpMICyNX1R0pqn7DyIIUN9gLm2RlEzIoiqAJnHUY4aTqfmhyj%2Fog5GTLrDe1FQFWV0jSDf3Ur%2Bi11iPgHX8mK1vRD7qrg4XvFuSXP1rIeVEjbz6QAoGEAF5LeKxtguix3wBgykEV9yqlIHWqNTcCzKQhR%2FJq6it1MiNA7PewYrw5ZRlxsxjGZQWljw2kys7ZaIP9kdIYxQvBRvPCo2Sub9Djs%2FPETMP5CRUltHH3yhTySLAHYuMUuFPObQnwlrLsfbH0yaFyBc0WXY59pw8xTkwUmILZMIJcMof5F%2Fs7jji697fDmgIwvNiJhxM5LSr5iJtwVW1Tn2qszPsAAlZj%2BWydod5KfBhmxdaeHzb7CoXhx12SE4ugN0OQtB7B47yXIkXleZDE%2FDLTe7gyyszUaMpEbiy%2BCa37GPO1CMEwH88boWAUzt7CjyH2sB2vPHoA%2BHhZhZLA%2FCnJayuxDkqTtzKKTnWkyOrzDg9YrKW1wZqik0wjzC0PbFLSVGKGR2aqnMk%2BM3xm%2BuMEIM4%2B4jbWOOWtW5Cn4WwTwt7Fn54o%2FHIMNbZiMQGOqUBdrfQJarLtEiC5rzwsqoPDaTTsIBdtADMEQquStehcq90rXesnkb%2BE5u2u1XN5hQ49Aj6Ok95DUV%2FX%2FdGM%2BKFZhXDP0lARO%2F30aHlhjaYb4YSSpcM%2FpX4DCB7S4EyjopgQDwWmf0rfrxK97lBspIi1X%2Bjrbvpro16FvE0wHLyub9T6ZGo%2BsyFGrGkK9mVZZn8rXx8%2FZSETt%2F93sGGEpGdkMQkxkP%2B&X-Amz-Signature=8864a59fd5555d94e5fb27d5627544e04bc614b8fcd46de99977e1ecb6a3bac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP5X7QDL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICCyNGtbzUvA%2BH2A0vXINKIQzmItlYJPZBF%2BBVAszJiTAiEA3n6vv1%2F%2FnpRCOO9Z4upixWfooLMGLLAK17IpQ%2BMZU38q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDwbrrsFMb4k8vRIvSrcA11%2FLC1Eq8XOS9ZixccGTMM3CW7OTPrbgZWOjfBC%2FAtKo%2Bw06Njwph7wOV5BV5KJ0FAmkGrS%2Fp7E9XqlgGpMICyNX1R0pqn7DyIIUN9gLm2RlEzIoiqAJnHUY4aTqfmhyj%2Fog5GTLrDe1FQFWV0jSDf3Ur%2Bi11iPgHX8mK1vRD7qrg4XvFuSXP1rIeVEjbz6QAoGEAF5LeKxtguix3wBgykEV9yqlIHWqNTcCzKQhR%2FJq6it1MiNA7PewYrw5ZRlxsxjGZQWljw2kys7ZaIP9kdIYxQvBRvPCo2Sub9Djs%2FPETMP5CRUltHH3yhTySLAHYuMUuFPObQnwlrLsfbH0yaFyBc0WXY59pw8xTkwUmILZMIJcMof5F%2Fs7jji697fDmgIwvNiJhxM5LSr5iJtwVW1Tn2qszPsAAlZj%2BWydod5KfBhmxdaeHzb7CoXhx12SE4ugN0OQtB7B47yXIkXleZDE%2FDLTe7gyyszUaMpEbiy%2BCa37GPO1CMEwH88boWAUzt7CjyH2sB2vPHoA%2BHhZhZLA%2FCnJayuxDkqTtzKKTnWkyOrzDg9YrKW1wZqik0wjzC0PbFLSVGKGR2aqnMk%2BM3xm%2BuMEIM4%2B4jbWOOWtW5Cn4WwTwt7Fn54o%2FHIMNbZiMQGOqUBdrfQJarLtEiC5rzwsqoPDaTTsIBdtADMEQquStehcq90rXesnkb%2BE5u2u1XN5hQ49Aj6Ok95DUV%2FX%2FdGM%2BKFZhXDP0lARO%2F30aHlhjaYb4YSSpcM%2FpX4DCB7S4EyjopgQDwWmf0rfrxK97lBspIi1X%2Bjrbvpro16FvE0wHLyub9T6ZGo%2BsyFGrGkK9mVZZn8rXx8%2FZSETt%2F93sGGEpGdkMQkxkP%2B&X-Amz-Signature=4e7f24f98321c5a288343dbf51af34f17e1d067cad1162e8d3f6a51692a45e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP5X7QDL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICCyNGtbzUvA%2BH2A0vXINKIQzmItlYJPZBF%2BBVAszJiTAiEA3n6vv1%2F%2FnpRCOO9Z4upixWfooLMGLLAK17IpQ%2BMZU38q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDwbrrsFMb4k8vRIvSrcA11%2FLC1Eq8XOS9ZixccGTMM3CW7OTPrbgZWOjfBC%2FAtKo%2Bw06Njwph7wOV5BV5KJ0FAmkGrS%2Fp7E9XqlgGpMICyNX1R0pqn7DyIIUN9gLm2RlEzIoiqAJnHUY4aTqfmhyj%2Fog5GTLrDe1FQFWV0jSDf3Ur%2Bi11iPgHX8mK1vRD7qrg4XvFuSXP1rIeVEjbz6QAoGEAF5LeKxtguix3wBgykEV9yqlIHWqNTcCzKQhR%2FJq6it1MiNA7PewYrw5ZRlxsxjGZQWljw2kys7ZaIP9kdIYxQvBRvPCo2Sub9Djs%2FPETMP5CRUltHH3yhTySLAHYuMUuFPObQnwlrLsfbH0yaFyBc0WXY59pw8xTkwUmILZMIJcMof5F%2Fs7jji697fDmgIwvNiJhxM5LSr5iJtwVW1Tn2qszPsAAlZj%2BWydod5KfBhmxdaeHzb7CoXhx12SE4ugN0OQtB7B47yXIkXleZDE%2FDLTe7gyyszUaMpEbiy%2BCa37GPO1CMEwH88boWAUzt7CjyH2sB2vPHoA%2BHhZhZLA%2FCnJayuxDkqTtzKKTnWkyOrzDg9YrKW1wZqik0wjzC0PbFLSVGKGR2aqnMk%2BM3xm%2BuMEIM4%2B4jbWOOWtW5Cn4WwTwt7Fn54o%2FHIMNbZiMQGOqUBdrfQJarLtEiC5rzwsqoPDaTTsIBdtADMEQquStehcq90rXesnkb%2BE5u2u1XN5hQ49Aj6Ok95DUV%2FX%2FdGM%2BKFZhXDP0lARO%2F30aHlhjaYb4YSSpcM%2FpX4DCB7S4EyjopgQDwWmf0rfrxK97lBspIi1X%2Bjrbvpro16FvE0wHLyub9T6ZGo%2BsyFGrGkK9mVZZn8rXx8%2FZSETt%2F93sGGEpGdkMQkxkP%2B&X-Amz-Signature=d3a45dfac593a8bec2853c5fa5c3526398d04fd484b8f2bc2807fb72750bf04a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP5X7QDL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICCyNGtbzUvA%2BH2A0vXINKIQzmItlYJPZBF%2BBVAszJiTAiEA3n6vv1%2F%2FnpRCOO9Z4upixWfooLMGLLAK17IpQ%2BMZU38q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDwbrrsFMb4k8vRIvSrcA11%2FLC1Eq8XOS9ZixccGTMM3CW7OTPrbgZWOjfBC%2FAtKo%2Bw06Njwph7wOV5BV5KJ0FAmkGrS%2Fp7E9XqlgGpMICyNX1R0pqn7DyIIUN9gLm2RlEzIoiqAJnHUY4aTqfmhyj%2Fog5GTLrDe1FQFWV0jSDf3Ur%2Bi11iPgHX8mK1vRD7qrg4XvFuSXP1rIeVEjbz6QAoGEAF5LeKxtguix3wBgykEV9yqlIHWqNTcCzKQhR%2FJq6it1MiNA7PewYrw5ZRlxsxjGZQWljw2kys7ZaIP9kdIYxQvBRvPCo2Sub9Djs%2FPETMP5CRUltHH3yhTySLAHYuMUuFPObQnwlrLsfbH0yaFyBc0WXY59pw8xTkwUmILZMIJcMof5F%2Fs7jji697fDmgIwvNiJhxM5LSr5iJtwVW1Tn2qszPsAAlZj%2BWydod5KfBhmxdaeHzb7CoXhx12SE4ugN0OQtB7B47yXIkXleZDE%2FDLTe7gyyszUaMpEbiy%2BCa37GPO1CMEwH88boWAUzt7CjyH2sB2vPHoA%2BHhZhZLA%2FCnJayuxDkqTtzKKTnWkyOrzDg9YrKW1wZqik0wjzC0PbFLSVGKGR2aqnMk%2BM3xm%2BuMEIM4%2B4jbWOOWtW5Cn4WwTwt7Fn54o%2FHIMNbZiMQGOqUBdrfQJarLtEiC5rzwsqoPDaTTsIBdtADMEQquStehcq90rXesnkb%2BE5u2u1XN5hQ49Aj6Ok95DUV%2FX%2FdGM%2BKFZhXDP0lARO%2F30aHlhjaYb4YSSpcM%2FpX4DCB7S4EyjopgQDwWmf0rfrxK97lBspIi1X%2Bjrbvpro16FvE0wHLyub9T6ZGo%2BsyFGrGkK9mVZZn8rXx8%2FZSETt%2F93sGGEpGdkMQkxkP%2B&X-Amz-Signature=4cc1620986c7989dd8438d22684a721896d3dadc12f683592146cfe7cfec93be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP5X7QDL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICCyNGtbzUvA%2BH2A0vXINKIQzmItlYJPZBF%2BBVAszJiTAiEA3n6vv1%2F%2FnpRCOO9Z4upixWfooLMGLLAK17IpQ%2BMZU38q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDwbrrsFMb4k8vRIvSrcA11%2FLC1Eq8XOS9ZixccGTMM3CW7OTPrbgZWOjfBC%2FAtKo%2Bw06Njwph7wOV5BV5KJ0FAmkGrS%2Fp7E9XqlgGpMICyNX1R0pqn7DyIIUN9gLm2RlEzIoiqAJnHUY4aTqfmhyj%2Fog5GTLrDe1FQFWV0jSDf3Ur%2Bi11iPgHX8mK1vRD7qrg4XvFuSXP1rIeVEjbz6QAoGEAF5LeKxtguix3wBgykEV9yqlIHWqNTcCzKQhR%2FJq6it1MiNA7PewYrw5ZRlxsxjGZQWljw2kys7ZaIP9kdIYxQvBRvPCo2Sub9Djs%2FPETMP5CRUltHH3yhTySLAHYuMUuFPObQnwlrLsfbH0yaFyBc0WXY59pw8xTkwUmILZMIJcMof5F%2Fs7jji697fDmgIwvNiJhxM5LSr5iJtwVW1Tn2qszPsAAlZj%2BWydod5KfBhmxdaeHzb7CoXhx12SE4ugN0OQtB7B47yXIkXleZDE%2FDLTe7gyyszUaMpEbiy%2BCa37GPO1CMEwH88boWAUzt7CjyH2sB2vPHoA%2BHhZhZLA%2FCnJayuxDkqTtzKKTnWkyOrzDg9YrKW1wZqik0wjzC0PbFLSVGKGR2aqnMk%2BM3xm%2BuMEIM4%2B4jbWOOWtW5Cn4WwTwt7Fn54o%2FHIMNbZiMQGOqUBdrfQJarLtEiC5rzwsqoPDaTTsIBdtADMEQquStehcq90rXesnkb%2BE5u2u1XN5hQ49Aj6Ok95DUV%2FX%2FdGM%2BKFZhXDP0lARO%2F30aHlhjaYb4YSSpcM%2FpX4DCB7S4EyjopgQDwWmf0rfrxK97lBspIi1X%2Bjrbvpro16FvE0wHLyub9T6ZGo%2BsyFGrGkK9mVZZn8rXx8%2FZSETt%2F93sGGEpGdkMQkxkP%2B&X-Amz-Signature=4893cc944d37d93a5afe9c5c6e85a7b80b521eb2e5e90e93a81f1cdb61679a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP5X7QDL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICCyNGtbzUvA%2BH2A0vXINKIQzmItlYJPZBF%2BBVAszJiTAiEA3n6vv1%2F%2FnpRCOO9Z4upixWfooLMGLLAK17IpQ%2BMZU38q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDwbrrsFMb4k8vRIvSrcA11%2FLC1Eq8XOS9ZixccGTMM3CW7OTPrbgZWOjfBC%2FAtKo%2Bw06Njwph7wOV5BV5KJ0FAmkGrS%2Fp7E9XqlgGpMICyNX1R0pqn7DyIIUN9gLm2RlEzIoiqAJnHUY4aTqfmhyj%2Fog5GTLrDe1FQFWV0jSDf3Ur%2Bi11iPgHX8mK1vRD7qrg4XvFuSXP1rIeVEjbz6QAoGEAF5LeKxtguix3wBgykEV9yqlIHWqNTcCzKQhR%2FJq6it1MiNA7PewYrw5ZRlxsxjGZQWljw2kys7ZaIP9kdIYxQvBRvPCo2Sub9Djs%2FPETMP5CRUltHH3yhTySLAHYuMUuFPObQnwlrLsfbH0yaFyBc0WXY59pw8xTkwUmILZMIJcMof5F%2Fs7jji697fDmgIwvNiJhxM5LSr5iJtwVW1Tn2qszPsAAlZj%2BWydod5KfBhmxdaeHzb7CoXhx12SE4ugN0OQtB7B47yXIkXleZDE%2FDLTe7gyyszUaMpEbiy%2BCa37GPO1CMEwH88boWAUzt7CjyH2sB2vPHoA%2BHhZhZLA%2FCnJayuxDkqTtzKKTnWkyOrzDg9YrKW1wZqik0wjzC0PbFLSVGKGR2aqnMk%2BM3xm%2BuMEIM4%2B4jbWOOWtW5Cn4WwTwt7Fn54o%2FHIMNbZiMQGOqUBdrfQJarLtEiC5rzwsqoPDaTTsIBdtADMEQquStehcq90rXesnkb%2BE5u2u1XN5hQ49Aj6Ok95DUV%2FX%2FdGM%2BKFZhXDP0lARO%2F30aHlhjaYb4YSSpcM%2FpX4DCB7S4EyjopgQDwWmf0rfrxK97lBspIi1X%2Bjrbvpro16FvE0wHLyub9T6ZGo%2BsyFGrGkK9mVZZn8rXx8%2FZSETt%2F93sGGEpGdkMQkxkP%2B&X-Amz-Signature=50b9bca7ced5d106efb64d3fb805e5db953fee18725bc9933e2486ff8a09e08e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP5X7QDL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICCyNGtbzUvA%2BH2A0vXINKIQzmItlYJPZBF%2BBVAszJiTAiEA3n6vv1%2F%2FnpRCOO9Z4upixWfooLMGLLAK17IpQ%2BMZU38q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDwbrrsFMb4k8vRIvSrcA11%2FLC1Eq8XOS9ZixccGTMM3CW7OTPrbgZWOjfBC%2FAtKo%2Bw06Njwph7wOV5BV5KJ0FAmkGrS%2Fp7E9XqlgGpMICyNX1R0pqn7DyIIUN9gLm2RlEzIoiqAJnHUY4aTqfmhyj%2Fog5GTLrDe1FQFWV0jSDf3Ur%2Bi11iPgHX8mK1vRD7qrg4XvFuSXP1rIeVEjbz6QAoGEAF5LeKxtguix3wBgykEV9yqlIHWqNTcCzKQhR%2FJq6it1MiNA7PewYrw5ZRlxsxjGZQWljw2kys7ZaIP9kdIYxQvBRvPCo2Sub9Djs%2FPETMP5CRUltHH3yhTySLAHYuMUuFPObQnwlrLsfbH0yaFyBc0WXY59pw8xTkwUmILZMIJcMof5F%2Fs7jji697fDmgIwvNiJhxM5LSr5iJtwVW1Tn2qszPsAAlZj%2BWydod5KfBhmxdaeHzb7CoXhx12SE4ugN0OQtB7B47yXIkXleZDE%2FDLTe7gyyszUaMpEbiy%2BCa37GPO1CMEwH88boWAUzt7CjyH2sB2vPHoA%2BHhZhZLA%2FCnJayuxDkqTtzKKTnWkyOrzDg9YrKW1wZqik0wjzC0PbFLSVGKGR2aqnMk%2BM3xm%2BuMEIM4%2B4jbWOOWtW5Cn4WwTwt7Fn54o%2FHIMNbZiMQGOqUBdrfQJarLtEiC5rzwsqoPDaTTsIBdtADMEQquStehcq90rXesnkb%2BE5u2u1XN5hQ49Aj6Ok95DUV%2FX%2FdGM%2BKFZhXDP0lARO%2F30aHlhjaYb4YSSpcM%2FpX4DCB7S4EyjopgQDwWmf0rfrxK97lBspIi1X%2Bjrbvpro16FvE0wHLyub9T6ZGo%2BsyFGrGkK9mVZZn8rXx8%2FZSETt%2F93sGGEpGdkMQkxkP%2B&X-Amz-Signature=d0249e7eb4e742ab986e86a6ee4fb085c3758da723c50ea0cd3c05b90add3433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP5X7QDL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICCyNGtbzUvA%2BH2A0vXINKIQzmItlYJPZBF%2BBVAszJiTAiEA3n6vv1%2F%2FnpRCOO9Z4upixWfooLMGLLAK17IpQ%2BMZU38q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDDwbrrsFMb4k8vRIvSrcA11%2FLC1Eq8XOS9ZixccGTMM3CW7OTPrbgZWOjfBC%2FAtKo%2Bw06Njwph7wOV5BV5KJ0FAmkGrS%2Fp7E9XqlgGpMICyNX1R0pqn7DyIIUN9gLm2RlEzIoiqAJnHUY4aTqfmhyj%2Fog5GTLrDe1FQFWV0jSDf3Ur%2Bi11iPgHX8mK1vRD7qrg4XvFuSXP1rIeVEjbz6QAoGEAF5LeKxtguix3wBgykEV9yqlIHWqNTcCzKQhR%2FJq6it1MiNA7PewYrw5ZRlxsxjGZQWljw2kys7ZaIP9kdIYxQvBRvPCo2Sub9Djs%2FPETMP5CRUltHH3yhTySLAHYuMUuFPObQnwlrLsfbH0yaFyBc0WXY59pw8xTkwUmILZMIJcMof5F%2Fs7jji697fDmgIwvNiJhxM5LSr5iJtwVW1Tn2qszPsAAlZj%2BWydod5KfBhmxdaeHzb7CoXhx12SE4ugN0OQtB7B47yXIkXleZDE%2FDLTe7gyyszUaMpEbiy%2BCa37GPO1CMEwH88boWAUzt7CjyH2sB2vPHoA%2BHhZhZLA%2FCnJayuxDkqTtzKKTnWkyOrzDg9YrKW1wZqik0wjzC0PbFLSVGKGR2aqnMk%2BM3xm%2BuMEIM4%2B4jbWOOWtW5Cn4WwTwt7Fn54o%2FHIMNbZiMQGOqUBdrfQJarLtEiC5rzwsqoPDaTTsIBdtADMEQquStehcq90rXesnkb%2BE5u2u1XN5hQ49Aj6Ok95DUV%2FX%2FdGM%2BKFZhXDP0lARO%2F30aHlhjaYb4YSSpcM%2FpX4DCB7S4EyjopgQDwWmf0rfrxK97lBspIi1X%2Bjrbvpro16FvE0wHLyub9T6ZGo%2BsyFGrGkK9mVZZn8rXx8%2FZSETt%2F93sGGEpGdkMQkxkP%2B&X-Amz-Signature=9d52b1c367dc90afad2934d1122bfb5c4c2e479e0310baefbdc4c3612ca2634a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
