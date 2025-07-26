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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBC5I4OA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGEf1f6HTca8XVzHJ%2BAnV61g76ch%2BjQ3cIXIqUCUBfvnAiEA9Q0vvlmRex98sQ3J%2F5gmpDz26VPPXq93KogxU9TKOL4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFWghDJlr9J%2FtFGZ2CrcA1U2csR2Gmfq4SAJ1Sz%2FcaMz6N3LI0k4gN2tNwYjAjFrMOgbOumu5VaJqeUoBI%2FeqxtIRi6OzyGXc1ixBTVvIQDzX5jQ1fWyx6ZTssTWnjiZH%2BZSiT41KO%2FL1lHn7EtwrNHxUcDUAl0HwpLxyFS51AmqwgAAO%2FJ%2BntX6f3tjS4a1N4PZGqP7x5zi4oJ4vb8cjnCOBtxSeVnNr%2FpaDhHMbR1vwbVgv4a%2Byp8T%2FrcZRR6D6CtY%2Bz5G169CxYGMjhtR58UTA1yEfvyII9GOWVLZ7hT9aULTeXG3GPwdK0lR8etk4%2FYUptM0FZE2dwPeZaBcgqK2Jbsk103ImQhhx%2FDYwBh9K1gV9HXuYCmZF0Yj6Jv9ARBHmb6F%2F8fYSd5rmYB667TIbq%2BsP9euoJ4qQB1wbdQvYwfkZxewfjwt8COHRDytVd0Z3UHc8AmIrnCcMobr%2F4i9fgpJdkDlpQ7V3c9mbsqKLtjbH3nb6Tp3zwpWW2G%2B2i0U19rDU%2F2Gd4mp336x%2F8q6uaAgzx14uewpVz0nH%2FjaSGwkzI1Fvmf5PAPs5OyyuvOorEq%2BtPcZ6jmfKFR0oizurLjuDgjrBLZzTogOU%2FIRM%2F2S1JiYIBd%2FBn%2Bun6Nc6QCuo1BNiC3mvWB6MJjBk8QGOqUByK4nIq15%2F7CzC8zPdy93zfa35GlV36KtQoBlcCegW59UzbNUB1yGukxVfM1U0uQ8%2FQVikQrPBoj%2FU%2F6CcBI6HiRrXkKU67dn3fZuBmzKJ9%2B5M4481JHjl1bB8nyJiWU0Ob57m8taNDUvFdVjrJeeDcrKgFkPP5qPdMrA6YmWowe%2FZaQSIIbEvLrsf6DNIFokm7E%2FPi2Rf7SAqoBZzTjdXbRxFv4h&X-Amz-Signature=27a53e8bfdeac98d6ad78344fdd683d2ddb2fde0b4c4e67477ed555e1627a15b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBC5I4OA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGEf1f6HTca8XVzHJ%2BAnV61g76ch%2BjQ3cIXIqUCUBfvnAiEA9Q0vvlmRex98sQ3J%2F5gmpDz26VPPXq93KogxU9TKOL4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFWghDJlr9J%2FtFGZ2CrcA1U2csR2Gmfq4SAJ1Sz%2FcaMz6N3LI0k4gN2tNwYjAjFrMOgbOumu5VaJqeUoBI%2FeqxtIRi6OzyGXc1ixBTVvIQDzX5jQ1fWyx6ZTssTWnjiZH%2BZSiT41KO%2FL1lHn7EtwrNHxUcDUAl0HwpLxyFS51AmqwgAAO%2FJ%2BntX6f3tjS4a1N4PZGqP7x5zi4oJ4vb8cjnCOBtxSeVnNr%2FpaDhHMbR1vwbVgv4a%2Byp8T%2FrcZRR6D6CtY%2Bz5G169CxYGMjhtR58UTA1yEfvyII9GOWVLZ7hT9aULTeXG3GPwdK0lR8etk4%2FYUptM0FZE2dwPeZaBcgqK2Jbsk103ImQhhx%2FDYwBh9K1gV9HXuYCmZF0Yj6Jv9ARBHmb6F%2F8fYSd5rmYB667TIbq%2BsP9euoJ4qQB1wbdQvYwfkZxewfjwt8COHRDytVd0Z3UHc8AmIrnCcMobr%2F4i9fgpJdkDlpQ7V3c9mbsqKLtjbH3nb6Tp3zwpWW2G%2B2i0U19rDU%2F2Gd4mp336x%2F8q6uaAgzx14uewpVz0nH%2FjaSGwkzI1Fvmf5PAPs5OyyuvOorEq%2BtPcZ6jmfKFR0oizurLjuDgjrBLZzTogOU%2FIRM%2F2S1JiYIBd%2FBn%2Bun6Nc6QCuo1BNiC3mvWB6MJjBk8QGOqUByK4nIq15%2F7CzC8zPdy93zfa35GlV36KtQoBlcCegW59UzbNUB1yGukxVfM1U0uQ8%2FQVikQrPBoj%2FU%2F6CcBI6HiRrXkKU67dn3fZuBmzKJ9%2B5M4481JHjl1bB8nyJiWU0Ob57m8taNDUvFdVjrJeeDcrKgFkPP5qPdMrA6YmWowe%2FZaQSIIbEvLrsf6DNIFokm7E%2FPi2Rf7SAqoBZzTjdXbRxFv4h&X-Amz-Signature=c579e2d8e3b313f3ff3dd1d2973e89a6fbcdf0f18807d98681e9a6759eff935d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBC5I4OA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGEf1f6HTca8XVzHJ%2BAnV61g76ch%2BjQ3cIXIqUCUBfvnAiEA9Q0vvlmRex98sQ3J%2F5gmpDz26VPPXq93KogxU9TKOL4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFWghDJlr9J%2FtFGZ2CrcA1U2csR2Gmfq4SAJ1Sz%2FcaMz6N3LI0k4gN2tNwYjAjFrMOgbOumu5VaJqeUoBI%2FeqxtIRi6OzyGXc1ixBTVvIQDzX5jQ1fWyx6ZTssTWnjiZH%2BZSiT41KO%2FL1lHn7EtwrNHxUcDUAl0HwpLxyFS51AmqwgAAO%2FJ%2BntX6f3tjS4a1N4PZGqP7x5zi4oJ4vb8cjnCOBtxSeVnNr%2FpaDhHMbR1vwbVgv4a%2Byp8T%2FrcZRR6D6CtY%2Bz5G169CxYGMjhtR58UTA1yEfvyII9GOWVLZ7hT9aULTeXG3GPwdK0lR8etk4%2FYUptM0FZE2dwPeZaBcgqK2Jbsk103ImQhhx%2FDYwBh9K1gV9HXuYCmZF0Yj6Jv9ARBHmb6F%2F8fYSd5rmYB667TIbq%2BsP9euoJ4qQB1wbdQvYwfkZxewfjwt8COHRDytVd0Z3UHc8AmIrnCcMobr%2F4i9fgpJdkDlpQ7V3c9mbsqKLtjbH3nb6Tp3zwpWW2G%2B2i0U19rDU%2F2Gd4mp336x%2F8q6uaAgzx14uewpVz0nH%2FjaSGwkzI1Fvmf5PAPs5OyyuvOorEq%2BtPcZ6jmfKFR0oizurLjuDgjrBLZzTogOU%2FIRM%2F2S1JiYIBd%2FBn%2Bun6Nc6QCuo1BNiC3mvWB6MJjBk8QGOqUByK4nIq15%2F7CzC8zPdy93zfa35GlV36KtQoBlcCegW59UzbNUB1yGukxVfM1U0uQ8%2FQVikQrPBoj%2FU%2F6CcBI6HiRrXkKU67dn3fZuBmzKJ9%2B5M4481JHjl1bB8nyJiWU0Ob57m8taNDUvFdVjrJeeDcrKgFkPP5qPdMrA6YmWowe%2FZaQSIIbEvLrsf6DNIFokm7E%2FPi2Rf7SAqoBZzTjdXbRxFv4h&X-Amz-Signature=307234de091975b92318a76622f62e4fa28aaf7dba05a29e5d14480707b65dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBC5I4OA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGEf1f6HTca8XVzHJ%2BAnV61g76ch%2BjQ3cIXIqUCUBfvnAiEA9Q0vvlmRex98sQ3J%2F5gmpDz26VPPXq93KogxU9TKOL4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFWghDJlr9J%2FtFGZ2CrcA1U2csR2Gmfq4SAJ1Sz%2FcaMz6N3LI0k4gN2tNwYjAjFrMOgbOumu5VaJqeUoBI%2FeqxtIRi6OzyGXc1ixBTVvIQDzX5jQ1fWyx6ZTssTWnjiZH%2BZSiT41KO%2FL1lHn7EtwrNHxUcDUAl0HwpLxyFS51AmqwgAAO%2FJ%2BntX6f3tjS4a1N4PZGqP7x5zi4oJ4vb8cjnCOBtxSeVnNr%2FpaDhHMbR1vwbVgv4a%2Byp8T%2FrcZRR6D6CtY%2Bz5G169CxYGMjhtR58UTA1yEfvyII9GOWVLZ7hT9aULTeXG3GPwdK0lR8etk4%2FYUptM0FZE2dwPeZaBcgqK2Jbsk103ImQhhx%2FDYwBh9K1gV9HXuYCmZF0Yj6Jv9ARBHmb6F%2F8fYSd5rmYB667TIbq%2BsP9euoJ4qQB1wbdQvYwfkZxewfjwt8COHRDytVd0Z3UHc8AmIrnCcMobr%2F4i9fgpJdkDlpQ7V3c9mbsqKLtjbH3nb6Tp3zwpWW2G%2B2i0U19rDU%2F2Gd4mp336x%2F8q6uaAgzx14uewpVz0nH%2FjaSGwkzI1Fvmf5PAPs5OyyuvOorEq%2BtPcZ6jmfKFR0oizurLjuDgjrBLZzTogOU%2FIRM%2F2S1JiYIBd%2FBn%2Bun6Nc6QCuo1BNiC3mvWB6MJjBk8QGOqUByK4nIq15%2F7CzC8zPdy93zfa35GlV36KtQoBlcCegW59UzbNUB1yGukxVfM1U0uQ8%2FQVikQrPBoj%2FU%2F6CcBI6HiRrXkKU67dn3fZuBmzKJ9%2B5M4481JHjl1bB8nyJiWU0Ob57m8taNDUvFdVjrJeeDcrKgFkPP5qPdMrA6YmWowe%2FZaQSIIbEvLrsf6DNIFokm7E%2FPi2Rf7SAqoBZzTjdXbRxFv4h&X-Amz-Signature=ea98aa673e695a12878d3eacc84cb20ec87125e3b3b39a09d0c9edf82ecf59ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBC5I4OA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGEf1f6HTca8XVzHJ%2BAnV61g76ch%2BjQ3cIXIqUCUBfvnAiEA9Q0vvlmRex98sQ3J%2F5gmpDz26VPPXq93KogxU9TKOL4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFWghDJlr9J%2FtFGZ2CrcA1U2csR2Gmfq4SAJ1Sz%2FcaMz6N3LI0k4gN2tNwYjAjFrMOgbOumu5VaJqeUoBI%2FeqxtIRi6OzyGXc1ixBTVvIQDzX5jQ1fWyx6ZTssTWnjiZH%2BZSiT41KO%2FL1lHn7EtwrNHxUcDUAl0HwpLxyFS51AmqwgAAO%2FJ%2BntX6f3tjS4a1N4PZGqP7x5zi4oJ4vb8cjnCOBtxSeVnNr%2FpaDhHMbR1vwbVgv4a%2Byp8T%2FrcZRR6D6CtY%2Bz5G169CxYGMjhtR58UTA1yEfvyII9GOWVLZ7hT9aULTeXG3GPwdK0lR8etk4%2FYUptM0FZE2dwPeZaBcgqK2Jbsk103ImQhhx%2FDYwBh9K1gV9HXuYCmZF0Yj6Jv9ARBHmb6F%2F8fYSd5rmYB667TIbq%2BsP9euoJ4qQB1wbdQvYwfkZxewfjwt8COHRDytVd0Z3UHc8AmIrnCcMobr%2F4i9fgpJdkDlpQ7V3c9mbsqKLtjbH3nb6Tp3zwpWW2G%2B2i0U19rDU%2F2Gd4mp336x%2F8q6uaAgzx14uewpVz0nH%2FjaSGwkzI1Fvmf5PAPs5OyyuvOorEq%2BtPcZ6jmfKFR0oizurLjuDgjrBLZzTogOU%2FIRM%2F2S1JiYIBd%2FBn%2Bun6Nc6QCuo1BNiC3mvWB6MJjBk8QGOqUByK4nIq15%2F7CzC8zPdy93zfa35GlV36KtQoBlcCegW59UzbNUB1yGukxVfM1U0uQ8%2FQVikQrPBoj%2FU%2F6CcBI6HiRrXkKU67dn3fZuBmzKJ9%2B5M4481JHjl1bB8nyJiWU0Ob57m8taNDUvFdVjrJeeDcrKgFkPP5qPdMrA6YmWowe%2FZaQSIIbEvLrsf6DNIFokm7E%2FPi2Rf7SAqoBZzTjdXbRxFv4h&X-Amz-Signature=a2b37c51d7952ffdfc91b8a7fda58e627042a49fb1b67aabe779093f88dffe40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBC5I4OA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGEf1f6HTca8XVzHJ%2BAnV61g76ch%2BjQ3cIXIqUCUBfvnAiEA9Q0vvlmRex98sQ3J%2F5gmpDz26VPPXq93KogxU9TKOL4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFWghDJlr9J%2FtFGZ2CrcA1U2csR2Gmfq4SAJ1Sz%2FcaMz6N3LI0k4gN2tNwYjAjFrMOgbOumu5VaJqeUoBI%2FeqxtIRi6OzyGXc1ixBTVvIQDzX5jQ1fWyx6ZTssTWnjiZH%2BZSiT41KO%2FL1lHn7EtwrNHxUcDUAl0HwpLxyFS51AmqwgAAO%2FJ%2BntX6f3tjS4a1N4PZGqP7x5zi4oJ4vb8cjnCOBtxSeVnNr%2FpaDhHMbR1vwbVgv4a%2Byp8T%2FrcZRR6D6CtY%2Bz5G169CxYGMjhtR58UTA1yEfvyII9GOWVLZ7hT9aULTeXG3GPwdK0lR8etk4%2FYUptM0FZE2dwPeZaBcgqK2Jbsk103ImQhhx%2FDYwBh9K1gV9HXuYCmZF0Yj6Jv9ARBHmb6F%2F8fYSd5rmYB667TIbq%2BsP9euoJ4qQB1wbdQvYwfkZxewfjwt8COHRDytVd0Z3UHc8AmIrnCcMobr%2F4i9fgpJdkDlpQ7V3c9mbsqKLtjbH3nb6Tp3zwpWW2G%2B2i0U19rDU%2F2Gd4mp336x%2F8q6uaAgzx14uewpVz0nH%2FjaSGwkzI1Fvmf5PAPs5OyyuvOorEq%2BtPcZ6jmfKFR0oizurLjuDgjrBLZzTogOU%2FIRM%2F2S1JiYIBd%2FBn%2Bun6Nc6QCuo1BNiC3mvWB6MJjBk8QGOqUByK4nIq15%2F7CzC8zPdy93zfa35GlV36KtQoBlcCegW59UzbNUB1yGukxVfM1U0uQ8%2FQVikQrPBoj%2FU%2F6CcBI6HiRrXkKU67dn3fZuBmzKJ9%2B5M4481JHjl1bB8nyJiWU0Ob57m8taNDUvFdVjrJeeDcrKgFkPP5qPdMrA6YmWowe%2FZaQSIIbEvLrsf6DNIFokm7E%2FPi2Rf7SAqoBZzTjdXbRxFv4h&X-Amz-Signature=a5973707b5f4f5dccc4560aef9a79507ce762c4334306148eb6cb87d7202be57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBC5I4OA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGEf1f6HTca8XVzHJ%2BAnV61g76ch%2BjQ3cIXIqUCUBfvnAiEA9Q0vvlmRex98sQ3J%2F5gmpDz26VPPXq93KogxU9TKOL4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFWghDJlr9J%2FtFGZ2CrcA1U2csR2Gmfq4SAJ1Sz%2FcaMz6N3LI0k4gN2tNwYjAjFrMOgbOumu5VaJqeUoBI%2FeqxtIRi6OzyGXc1ixBTVvIQDzX5jQ1fWyx6ZTssTWnjiZH%2BZSiT41KO%2FL1lHn7EtwrNHxUcDUAl0HwpLxyFS51AmqwgAAO%2FJ%2BntX6f3tjS4a1N4PZGqP7x5zi4oJ4vb8cjnCOBtxSeVnNr%2FpaDhHMbR1vwbVgv4a%2Byp8T%2FrcZRR6D6CtY%2Bz5G169CxYGMjhtR58UTA1yEfvyII9GOWVLZ7hT9aULTeXG3GPwdK0lR8etk4%2FYUptM0FZE2dwPeZaBcgqK2Jbsk103ImQhhx%2FDYwBh9K1gV9HXuYCmZF0Yj6Jv9ARBHmb6F%2F8fYSd5rmYB667TIbq%2BsP9euoJ4qQB1wbdQvYwfkZxewfjwt8COHRDytVd0Z3UHc8AmIrnCcMobr%2F4i9fgpJdkDlpQ7V3c9mbsqKLtjbH3nb6Tp3zwpWW2G%2B2i0U19rDU%2F2Gd4mp336x%2F8q6uaAgzx14uewpVz0nH%2FjaSGwkzI1Fvmf5PAPs5OyyuvOorEq%2BtPcZ6jmfKFR0oizurLjuDgjrBLZzTogOU%2FIRM%2F2S1JiYIBd%2FBn%2Bun6Nc6QCuo1BNiC3mvWB6MJjBk8QGOqUByK4nIq15%2F7CzC8zPdy93zfa35GlV36KtQoBlcCegW59UzbNUB1yGukxVfM1U0uQ8%2FQVikQrPBoj%2FU%2F6CcBI6HiRrXkKU67dn3fZuBmzKJ9%2B5M4481JHjl1bB8nyJiWU0Ob57m8taNDUvFdVjrJeeDcrKgFkPP5qPdMrA6YmWowe%2FZaQSIIbEvLrsf6DNIFokm7E%2FPi2Rf7SAqoBZzTjdXbRxFv4h&X-Amz-Signature=e812a87b51560de719e6555ae4adea6c76c224f1b2d51dc4c1c0a80837e9f6ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBC5I4OA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGEf1f6HTca8XVzHJ%2BAnV61g76ch%2BjQ3cIXIqUCUBfvnAiEA9Q0vvlmRex98sQ3J%2F5gmpDz26VPPXq93KogxU9TKOL4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFWghDJlr9J%2FtFGZ2CrcA1U2csR2Gmfq4SAJ1Sz%2FcaMz6N3LI0k4gN2tNwYjAjFrMOgbOumu5VaJqeUoBI%2FeqxtIRi6OzyGXc1ixBTVvIQDzX5jQ1fWyx6ZTssTWnjiZH%2BZSiT41KO%2FL1lHn7EtwrNHxUcDUAl0HwpLxyFS51AmqwgAAO%2FJ%2BntX6f3tjS4a1N4PZGqP7x5zi4oJ4vb8cjnCOBtxSeVnNr%2FpaDhHMbR1vwbVgv4a%2Byp8T%2FrcZRR6D6CtY%2Bz5G169CxYGMjhtR58UTA1yEfvyII9GOWVLZ7hT9aULTeXG3GPwdK0lR8etk4%2FYUptM0FZE2dwPeZaBcgqK2Jbsk103ImQhhx%2FDYwBh9K1gV9HXuYCmZF0Yj6Jv9ARBHmb6F%2F8fYSd5rmYB667TIbq%2BsP9euoJ4qQB1wbdQvYwfkZxewfjwt8COHRDytVd0Z3UHc8AmIrnCcMobr%2F4i9fgpJdkDlpQ7V3c9mbsqKLtjbH3nb6Tp3zwpWW2G%2B2i0U19rDU%2F2Gd4mp336x%2F8q6uaAgzx14uewpVz0nH%2FjaSGwkzI1Fvmf5PAPs5OyyuvOorEq%2BtPcZ6jmfKFR0oizurLjuDgjrBLZzTogOU%2FIRM%2F2S1JiYIBd%2FBn%2Bun6Nc6QCuo1BNiC3mvWB6MJjBk8QGOqUByK4nIq15%2F7CzC8zPdy93zfa35GlV36KtQoBlcCegW59UzbNUB1yGukxVfM1U0uQ8%2FQVikQrPBoj%2FU%2F6CcBI6HiRrXkKU67dn3fZuBmzKJ9%2B5M4481JHjl1bB8nyJiWU0Ob57m8taNDUvFdVjrJeeDcrKgFkPP5qPdMrA6YmWowe%2FZaQSIIbEvLrsf6DNIFokm7E%2FPi2Rf7SAqoBZzTjdXbRxFv4h&X-Amz-Signature=b985a6b053e7eb703c1720d9d4a8aedaad1148edef19738eb2e30a499980c438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBC5I4OA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIGEf1f6HTca8XVzHJ%2BAnV61g76ch%2BjQ3cIXIqUCUBfvnAiEA9Q0vvlmRex98sQ3J%2F5gmpDz26VPPXq93KogxU9TKOL4q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFWghDJlr9J%2FtFGZ2CrcA1U2csR2Gmfq4SAJ1Sz%2FcaMz6N3LI0k4gN2tNwYjAjFrMOgbOumu5VaJqeUoBI%2FeqxtIRi6OzyGXc1ixBTVvIQDzX5jQ1fWyx6ZTssTWnjiZH%2BZSiT41KO%2FL1lHn7EtwrNHxUcDUAl0HwpLxyFS51AmqwgAAO%2FJ%2BntX6f3tjS4a1N4PZGqP7x5zi4oJ4vb8cjnCOBtxSeVnNr%2FpaDhHMbR1vwbVgv4a%2Byp8T%2FrcZRR6D6CtY%2Bz5G169CxYGMjhtR58UTA1yEfvyII9GOWVLZ7hT9aULTeXG3GPwdK0lR8etk4%2FYUptM0FZE2dwPeZaBcgqK2Jbsk103ImQhhx%2FDYwBh9K1gV9HXuYCmZF0Yj6Jv9ARBHmb6F%2F8fYSd5rmYB667TIbq%2BsP9euoJ4qQB1wbdQvYwfkZxewfjwt8COHRDytVd0Z3UHc8AmIrnCcMobr%2F4i9fgpJdkDlpQ7V3c9mbsqKLtjbH3nb6Tp3zwpWW2G%2B2i0U19rDU%2F2Gd4mp336x%2F8q6uaAgzx14uewpVz0nH%2FjaSGwkzI1Fvmf5PAPs5OyyuvOorEq%2BtPcZ6jmfKFR0oizurLjuDgjrBLZzTogOU%2FIRM%2F2S1JiYIBd%2FBn%2Bun6Nc6QCuo1BNiC3mvWB6MJjBk8QGOqUByK4nIq15%2F7CzC8zPdy93zfa35GlV36KtQoBlcCegW59UzbNUB1yGukxVfM1U0uQ8%2FQVikQrPBoj%2FU%2F6CcBI6HiRrXkKU67dn3fZuBmzKJ9%2B5M4481JHjl1bB8nyJiWU0Ob57m8taNDUvFdVjrJeeDcrKgFkPP5qPdMrA6YmWowe%2FZaQSIIbEvLrsf6DNIFokm7E%2FPi2Rf7SAqoBZzTjdXbRxFv4h&X-Amz-Signature=0eddf91a1ec37800551f95031abfb20ab8c864c17bb44a74b5da4bb055a2f9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
