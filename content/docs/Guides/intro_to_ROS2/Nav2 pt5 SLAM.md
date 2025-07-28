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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGSYBAHT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIH50D%2B5Vo8sIPFPN4yn%2BJ%2FiJhZsuQIgzOSP46KxkQUIgAiEAtNBsI65eCjtyIneiF8SZe71KSCXdarCh57S0piVE%2FmsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQtaajILPF5gtzXDSrcA8sOjVQU3rD8hThN4omTI%2FVhDcxRI%2BxVWYEDaIwjyEin9qDsQLkZynIDJAj8u%2BzKuqT%2FZw6HkSIf3ermSB971kBWpX%2FArZPPthUELBbPPszo7f3PbNsob2Ue1MYHFXci8J%2FDJZQE2BBOulVnXzd8m8sSkBIImkJhjPnZmJoV%2BS%2BZBAWp5NEZarUw0I6BGmEv%2FeLjyokJtkQ4InQgpwbzzZSbZJ%2F15rk3xfJbUMzsf2Y37nJSlnVdek3%2FnXsadV0C8qE1bbo1o80lReEM1XVAruN7aoBSaBA5uWwbw0hi8SSazdnEElgieAKz9YMGEDurve4RMIw11zK3BKgafFY18bh59IgF7LIdvDR%2FuwViPEGwerOnIip%2BrlIh8T7ftxYR91ZDqohZukrZlKKahUxNH8%2BcqAODcz3jjPZCZTeIbA5L%2FXS%2BRDkgq%2FQeFVpOC6vIrXJo3VRGy%2FE5EGMqc0ATVGhQDyMld0OiD5XnZ%2FJVThPeALPnJFc3%2BSoaP1QHQaSvWOQJ6iZr%2Fy5hiMy8xPQXDmTHUA4NnmQLEWqjmFuqQ5MHT2Bhm6PhpR6fLwYd5OfqUnqHuMbbqlou8s6sVxE%2BPdiWEOo7t0k516ZtiD11VhatOIoXXU8z0cQ5Zq9rMLjumsQGOqUB6dB9%2F1QWWksbcFtM7UzNqGlNYXjqyEXDoqxNBisR7E6Ca5pjaTYzmuVx3qWt5Wd86hiaax5a%2FJufJ0Gspntp96UAr6vLO2iAxkGVWDEr6M9Gl5OqYXMKbD6s1ImmVYjBr1yHGX7IGsGxyHwWxTLRYX8FLoWPiiLc%2BNnnoSFfGo1WR2cCjCHCFBnoQNnlOUPKMYR%2FsN4hDXfGNKp5W%2FYqKOVe2z3u&X-Amz-Signature=9c87730b4d75cefb558031589ed38d844c9e55c816d69cf53a635859f5318712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGSYBAHT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIH50D%2B5Vo8sIPFPN4yn%2BJ%2FiJhZsuQIgzOSP46KxkQUIgAiEAtNBsI65eCjtyIneiF8SZe71KSCXdarCh57S0piVE%2FmsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQtaajILPF5gtzXDSrcA8sOjVQU3rD8hThN4omTI%2FVhDcxRI%2BxVWYEDaIwjyEin9qDsQLkZynIDJAj8u%2BzKuqT%2FZw6HkSIf3ermSB971kBWpX%2FArZPPthUELBbPPszo7f3PbNsob2Ue1MYHFXci8J%2FDJZQE2BBOulVnXzd8m8sSkBIImkJhjPnZmJoV%2BS%2BZBAWp5NEZarUw0I6BGmEv%2FeLjyokJtkQ4InQgpwbzzZSbZJ%2F15rk3xfJbUMzsf2Y37nJSlnVdek3%2FnXsadV0C8qE1bbo1o80lReEM1XVAruN7aoBSaBA5uWwbw0hi8SSazdnEElgieAKz9YMGEDurve4RMIw11zK3BKgafFY18bh59IgF7LIdvDR%2FuwViPEGwerOnIip%2BrlIh8T7ftxYR91ZDqohZukrZlKKahUxNH8%2BcqAODcz3jjPZCZTeIbA5L%2FXS%2BRDkgq%2FQeFVpOC6vIrXJo3VRGy%2FE5EGMqc0ATVGhQDyMld0OiD5XnZ%2FJVThPeALPnJFc3%2BSoaP1QHQaSvWOQJ6iZr%2Fy5hiMy8xPQXDmTHUA4NnmQLEWqjmFuqQ5MHT2Bhm6PhpR6fLwYd5OfqUnqHuMbbqlou8s6sVxE%2BPdiWEOo7t0k516ZtiD11VhatOIoXXU8z0cQ5Zq9rMLjumsQGOqUB6dB9%2F1QWWksbcFtM7UzNqGlNYXjqyEXDoqxNBisR7E6Ca5pjaTYzmuVx3qWt5Wd86hiaax5a%2FJufJ0Gspntp96UAr6vLO2iAxkGVWDEr6M9Gl5OqYXMKbD6s1ImmVYjBr1yHGX7IGsGxyHwWxTLRYX8FLoWPiiLc%2BNnnoSFfGo1WR2cCjCHCFBnoQNnlOUPKMYR%2FsN4hDXfGNKp5W%2FYqKOVe2z3u&X-Amz-Signature=67655feeb3e31eacc579af8fff1c7ea8758c265df7f7afcee562fb014273f0b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGSYBAHT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIH50D%2B5Vo8sIPFPN4yn%2BJ%2FiJhZsuQIgzOSP46KxkQUIgAiEAtNBsI65eCjtyIneiF8SZe71KSCXdarCh57S0piVE%2FmsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQtaajILPF5gtzXDSrcA8sOjVQU3rD8hThN4omTI%2FVhDcxRI%2BxVWYEDaIwjyEin9qDsQLkZynIDJAj8u%2BzKuqT%2FZw6HkSIf3ermSB971kBWpX%2FArZPPthUELBbPPszo7f3PbNsob2Ue1MYHFXci8J%2FDJZQE2BBOulVnXzd8m8sSkBIImkJhjPnZmJoV%2BS%2BZBAWp5NEZarUw0I6BGmEv%2FeLjyokJtkQ4InQgpwbzzZSbZJ%2F15rk3xfJbUMzsf2Y37nJSlnVdek3%2FnXsadV0C8qE1bbo1o80lReEM1XVAruN7aoBSaBA5uWwbw0hi8SSazdnEElgieAKz9YMGEDurve4RMIw11zK3BKgafFY18bh59IgF7LIdvDR%2FuwViPEGwerOnIip%2BrlIh8T7ftxYR91ZDqohZukrZlKKahUxNH8%2BcqAODcz3jjPZCZTeIbA5L%2FXS%2BRDkgq%2FQeFVpOC6vIrXJo3VRGy%2FE5EGMqc0ATVGhQDyMld0OiD5XnZ%2FJVThPeALPnJFc3%2BSoaP1QHQaSvWOQJ6iZr%2Fy5hiMy8xPQXDmTHUA4NnmQLEWqjmFuqQ5MHT2Bhm6PhpR6fLwYd5OfqUnqHuMbbqlou8s6sVxE%2BPdiWEOo7t0k516ZtiD11VhatOIoXXU8z0cQ5Zq9rMLjumsQGOqUB6dB9%2F1QWWksbcFtM7UzNqGlNYXjqyEXDoqxNBisR7E6Ca5pjaTYzmuVx3qWt5Wd86hiaax5a%2FJufJ0Gspntp96UAr6vLO2iAxkGVWDEr6M9Gl5OqYXMKbD6s1ImmVYjBr1yHGX7IGsGxyHwWxTLRYX8FLoWPiiLc%2BNnnoSFfGo1WR2cCjCHCFBnoQNnlOUPKMYR%2FsN4hDXfGNKp5W%2FYqKOVe2z3u&X-Amz-Signature=9ccb6502ea5d848e01cc7ec674e17af4e4db04889446f2b079bba6c89ad0d064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGSYBAHT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIH50D%2B5Vo8sIPFPN4yn%2BJ%2FiJhZsuQIgzOSP46KxkQUIgAiEAtNBsI65eCjtyIneiF8SZe71KSCXdarCh57S0piVE%2FmsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQtaajILPF5gtzXDSrcA8sOjVQU3rD8hThN4omTI%2FVhDcxRI%2BxVWYEDaIwjyEin9qDsQLkZynIDJAj8u%2BzKuqT%2FZw6HkSIf3ermSB971kBWpX%2FArZPPthUELBbPPszo7f3PbNsob2Ue1MYHFXci8J%2FDJZQE2BBOulVnXzd8m8sSkBIImkJhjPnZmJoV%2BS%2BZBAWp5NEZarUw0I6BGmEv%2FeLjyokJtkQ4InQgpwbzzZSbZJ%2F15rk3xfJbUMzsf2Y37nJSlnVdek3%2FnXsadV0C8qE1bbo1o80lReEM1XVAruN7aoBSaBA5uWwbw0hi8SSazdnEElgieAKz9YMGEDurve4RMIw11zK3BKgafFY18bh59IgF7LIdvDR%2FuwViPEGwerOnIip%2BrlIh8T7ftxYR91ZDqohZukrZlKKahUxNH8%2BcqAODcz3jjPZCZTeIbA5L%2FXS%2BRDkgq%2FQeFVpOC6vIrXJo3VRGy%2FE5EGMqc0ATVGhQDyMld0OiD5XnZ%2FJVThPeALPnJFc3%2BSoaP1QHQaSvWOQJ6iZr%2Fy5hiMy8xPQXDmTHUA4NnmQLEWqjmFuqQ5MHT2Bhm6PhpR6fLwYd5OfqUnqHuMbbqlou8s6sVxE%2BPdiWEOo7t0k516ZtiD11VhatOIoXXU8z0cQ5Zq9rMLjumsQGOqUB6dB9%2F1QWWksbcFtM7UzNqGlNYXjqyEXDoqxNBisR7E6Ca5pjaTYzmuVx3qWt5Wd86hiaax5a%2FJufJ0Gspntp96UAr6vLO2iAxkGVWDEr6M9Gl5OqYXMKbD6s1ImmVYjBr1yHGX7IGsGxyHwWxTLRYX8FLoWPiiLc%2BNnnoSFfGo1WR2cCjCHCFBnoQNnlOUPKMYR%2FsN4hDXfGNKp5W%2FYqKOVe2z3u&X-Amz-Signature=b51335cdb87a6f889b9496c279c67508fcb5d810afa01bf2d9dce8007113d9ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGSYBAHT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIH50D%2B5Vo8sIPFPN4yn%2BJ%2FiJhZsuQIgzOSP46KxkQUIgAiEAtNBsI65eCjtyIneiF8SZe71KSCXdarCh57S0piVE%2FmsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQtaajILPF5gtzXDSrcA8sOjVQU3rD8hThN4omTI%2FVhDcxRI%2BxVWYEDaIwjyEin9qDsQLkZynIDJAj8u%2BzKuqT%2FZw6HkSIf3ermSB971kBWpX%2FArZPPthUELBbPPszo7f3PbNsob2Ue1MYHFXci8J%2FDJZQE2BBOulVnXzd8m8sSkBIImkJhjPnZmJoV%2BS%2BZBAWp5NEZarUw0I6BGmEv%2FeLjyokJtkQ4InQgpwbzzZSbZJ%2F15rk3xfJbUMzsf2Y37nJSlnVdek3%2FnXsadV0C8qE1bbo1o80lReEM1XVAruN7aoBSaBA5uWwbw0hi8SSazdnEElgieAKz9YMGEDurve4RMIw11zK3BKgafFY18bh59IgF7LIdvDR%2FuwViPEGwerOnIip%2BrlIh8T7ftxYR91ZDqohZukrZlKKahUxNH8%2BcqAODcz3jjPZCZTeIbA5L%2FXS%2BRDkgq%2FQeFVpOC6vIrXJo3VRGy%2FE5EGMqc0ATVGhQDyMld0OiD5XnZ%2FJVThPeALPnJFc3%2BSoaP1QHQaSvWOQJ6iZr%2Fy5hiMy8xPQXDmTHUA4NnmQLEWqjmFuqQ5MHT2Bhm6PhpR6fLwYd5OfqUnqHuMbbqlou8s6sVxE%2BPdiWEOo7t0k516ZtiD11VhatOIoXXU8z0cQ5Zq9rMLjumsQGOqUB6dB9%2F1QWWksbcFtM7UzNqGlNYXjqyEXDoqxNBisR7E6Ca5pjaTYzmuVx3qWt5Wd86hiaax5a%2FJufJ0Gspntp96UAr6vLO2iAxkGVWDEr6M9Gl5OqYXMKbD6s1ImmVYjBr1yHGX7IGsGxyHwWxTLRYX8FLoWPiiLc%2BNnnoSFfGo1WR2cCjCHCFBnoQNnlOUPKMYR%2FsN4hDXfGNKp5W%2FYqKOVe2z3u&X-Amz-Signature=b4de7d74fa4b7069c5b11fa134656fc8ba9c0a49709cea543180a9e55167493c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGSYBAHT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIH50D%2B5Vo8sIPFPN4yn%2BJ%2FiJhZsuQIgzOSP46KxkQUIgAiEAtNBsI65eCjtyIneiF8SZe71KSCXdarCh57S0piVE%2FmsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQtaajILPF5gtzXDSrcA8sOjVQU3rD8hThN4omTI%2FVhDcxRI%2BxVWYEDaIwjyEin9qDsQLkZynIDJAj8u%2BzKuqT%2FZw6HkSIf3ermSB971kBWpX%2FArZPPthUELBbPPszo7f3PbNsob2Ue1MYHFXci8J%2FDJZQE2BBOulVnXzd8m8sSkBIImkJhjPnZmJoV%2BS%2BZBAWp5NEZarUw0I6BGmEv%2FeLjyokJtkQ4InQgpwbzzZSbZJ%2F15rk3xfJbUMzsf2Y37nJSlnVdek3%2FnXsadV0C8qE1bbo1o80lReEM1XVAruN7aoBSaBA5uWwbw0hi8SSazdnEElgieAKz9YMGEDurve4RMIw11zK3BKgafFY18bh59IgF7LIdvDR%2FuwViPEGwerOnIip%2BrlIh8T7ftxYR91ZDqohZukrZlKKahUxNH8%2BcqAODcz3jjPZCZTeIbA5L%2FXS%2BRDkgq%2FQeFVpOC6vIrXJo3VRGy%2FE5EGMqc0ATVGhQDyMld0OiD5XnZ%2FJVThPeALPnJFc3%2BSoaP1QHQaSvWOQJ6iZr%2Fy5hiMy8xPQXDmTHUA4NnmQLEWqjmFuqQ5MHT2Bhm6PhpR6fLwYd5OfqUnqHuMbbqlou8s6sVxE%2BPdiWEOo7t0k516ZtiD11VhatOIoXXU8z0cQ5Zq9rMLjumsQGOqUB6dB9%2F1QWWksbcFtM7UzNqGlNYXjqyEXDoqxNBisR7E6Ca5pjaTYzmuVx3qWt5Wd86hiaax5a%2FJufJ0Gspntp96UAr6vLO2iAxkGVWDEr6M9Gl5OqYXMKbD6s1ImmVYjBr1yHGX7IGsGxyHwWxTLRYX8FLoWPiiLc%2BNnnoSFfGo1WR2cCjCHCFBnoQNnlOUPKMYR%2FsN4hDXfGNKp5W%2FYqKOVe2z3u&X-Amz-Signature=83b56b07d640458d3ed2d85dd5708045aa746ac57dc3b219408a80b69e986bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGSYBAHT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIH50D%2B5Vo8sIPFPN4yn%2BJ%2FiJhZsuQIgzOSP46KxkQUIgAiEAtNBsI65eCjtyIneiF8SZe71KSCXdarCh57S0piVE%2FmsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQtaajILPF5gtzXDSrcA8sOjVQU3rD8hThN4omTI%2FVhDcxRI%2BxVWYEDaIwjyEin9qDsQLkZynIDJAj8u%2BzKuqT%2FZw6HkSIf3ermSB971kBWpX%2FArZPPthUELBbPPszo7f3PbNsob2Ue1MYHFXci8J%2FDJZQE2BBOulVnXzd8m8sSkBIImkJhjPnZmJoV%2BS%2BZBAWp5NEZarUw0I6BGmEv%2FeLjyokJtkQ4InQgpwbzzZSbZJ%2F15rk3xfJbUMzsf2Y37nJSlnVdek3%2FnXsadV0C8qE1bbo1o80lReEM1XVAruN7aoBSaBA5uWwbw0hi8SSazdnEElgieAKz9YMGEDurve4RMIw11zK3BKgafFY18bh59IgF7LIdvDR%2FuwViPEGwerOnIip%2BrlIh8T7ftxYR91ZDqohZukrZlKKahUxNH8%2BcqAODcz3jjPZCZTeIbA5L%2FXS%2BRDkgq%2FQeFVpOC6vIrXJo3VRGy%2FE5EGMqc0ATVGhQDyMld0OiD5XnZ%2FJVThPeALPnJFc3%2BSoaP1QHQaSvWOQJ6iZr%2Fy5hiMy8xPQXDmTHUA4NnmQLEWqjmFuqQ5MHT2Bhm6PhpR6fLwYd5OfqUnqHuMbbqlou8s6sVxE%2BPdiWEOo7t0k516ZtiD11VhatOIoXXU8z0cQ5Zq9rMLjumsQGOqUB6dB9%2F1QWWksbcFtM7UzNqGlNYXjqyEXDoqxNBisR7E6Ca5pjaTYzmuVx3qWt5Wd86hiaax5a%2FJufJ0Gspntp96UAr6vLO2iAxkGVWDEr6M9Gl5OqYXMKbD6s1ImmVYjBr1yHGX7IGsGxyHwWxTLRYX8FLoWPiiLc%2BNnnoSFfGo1WR2cCjCHCFBnoQNnlOUPKMYR%2FsN4hDXfGNKp5W%2FYqKOVe2z3u&X-Amz-Signature=773dfb6827fbb9931f45fc2683466dc458e29a4cf5f39926ee53359d7dadd9ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGSYBAHT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIH50D%2B5Vo8sIPFPN4yn%2BJ%2FiJhZsuQIgzOSP46KxkQUIgAiEAtNBsI65eCjtyIneiF8SZe71KSCXdarCh57S0piVE%2FmsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQtaajILPF5gtzXDSrcA8sOjVQU3rD8hThN4omTI%2FVhDcxRI%2BxVWYEDaIwjyEin9qDsQLkZynIDJAj8u%2BzKuqT%2FZw6HkSIf3ermSB971kBWpX%2FArZPPthUELBbPPszo7f3PbNsob2Ue1MYHFXci8J%2FDJZQE2BBOulVnXzd8m8sSkBIImkJhjPnZmJoV%2BS%2BZBAWp5NEZarUw0I6BGmEv%2FeLjyokJtkQ4InQgpwbzzZSbZJ%2F15rk3xfJbUMzsf2Y37nJSlnVdek3%2FnXsadV0C8qE1bbo1o80lReEM1XVAruN7aoBSaBA5uWwbw0hi8SSazdnEElgieAKz9YMGEDurve4RMIw11zK3BKgafFY18bh59IgF7LIdvDR%2FuwViPEGwerOnIip%2BrlIh8T7ftxYR91ZDqohZukrZlKKahUxNH8%2BcqAODcz3jjPZCZTeIbA5L%2FXS%2BRDkgq%2FQeFVpOC6vIrXJo3VRGy%2FE5EGMqc0ATVGhQDyMld0OiD5XnZ%2FJVThPeALPnJFc3%2BSoaP1QHQaSvWOQJ6iZr%2Fy5hiMy8xPQXDmTHUA4NnmQLEWqjmFuqQ5MHT2Bhm6PhpR6fLwYd5OfqUnqHuMbbqlou8s6sVxE%2BPdiWEOo7t0k516ZtiD11VhatOIoXXU8z0cQ5Zq9rMLjumsQGOqUB6dB9%2F1QWWksbcFtM7UzNqGlNYXjqyEXDoqxNBisR7E6Ca5pjaTYzmuVx3qWt5Wd86hiaax5a%2FJufJ0Gspntp96UAr6vLO2iAxkGVWDEr6M9Gl5OqYXMKbD6s1ImmVYjBr1yHGX7IGsGxyHwWxTLRYX8FLoWPiiLc%2BNnnoSFfGo1WR2cCjCHCFBnoQNnlOUPKMYR%2FsN4hDXfGNKp5W%2FYqKOVe2z3u&X-Amz-Signature=9d65aca2829909b46857f0740b43715231b7d14ab4e1bd1114b38748b5896eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGSYBAHT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIH50D%2B5Vo8sIPFPN4yn%2BJ%2FiJhZsuQIgzOSP46KxkQUIgAiEAtNBsI65eCjtyIneiF8SZe71KSCXdarCh57S0piVE%2FmsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQtaajILPF5gtzXDSrcA8sOjVQU3rD8hThN4omTI%2FVhDcxRI%2BxVWYEDaIwjyEin9qDsQLkZynIDJAj8u%2BzKuqT%2FZw6HkSIf3ermSB971kBWpX%2FArZPPthUELBbPPszo7f3PbNsob2Ue1MYHFXci8J%2FDJZQE2BBOulVnXzd8m8sSkBIImkJhjPnZmJoV%2BS%2BZBAWp5NEZarUw0I6BGmEv%2FeLjyokJtkQ4InQgpwbzzZSbZJ%2F15rk3xfJbUMzsf2Y37nJSlnVdek3%2FnXsadV0C8qE1bbo1o80lReEM1XVAruN7aoBSaBA5uWwbw0hi8SSazdnEElgieAKz9YMGEDurve4RMIw11zK3BKgafFY18bh59IgF7LIdvDR%2FuwViPEGwerOnIip%2BrlIh8T7ftxYR91ZDqohZukrZlKKahUxNH8%2BcqAODcz3jjPZCZTeIbA5L%2FXS%2BRDkgq%2FQeFVpOC6vIrXJo3VRGy%2FE5EGMqc0ATVGhQDyMld0OiD5XnZ%2FJVThPeALPnJFc3%2BSoaP1QHQaSvWOQJ6iZr%2Fy5hiMy8xPQXDmTHUA4NnmQLEWqjmFuqQ5MHT2Bhm6PhpR6fLwYd5OfqUnqHuMbbqlou8s6sVxE%2BPdiWEOo7t0k516ZtiD11VhatOIoXXU8z0cQ5Zq9rMLjumsQGOqUB6dB9%2F1QWWksbcFtM7UzNqGlNYXjqyEXDoqxNBisR7E6Ca5pjaTYzmuVx3qWt5Wd86hiaax5a%2FJufJ0Gspntp96UAr6vLO2iAxkGVWDEr6M9Gl5OqYXMKbD6s1ImmVYjBr1yHGX7IGsGxyHwWxTLRYX8FLoWPiiLc%2BNnnoSFfGo1WR2cCjCHCFBnoQNnlOUPKMYR%2FsN4hDXfGNKp5W%2FYqKOVe2z3u&X-Amz-Signature=b144298eac2e071c215724b198797660ab4b8472f9e43002cdabb45edd0368b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
