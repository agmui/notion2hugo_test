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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J3NCMQW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHNWtv8An4mark3jPMhN6os3fTsWUWUQ8xnqXx5%2FLvgtAiEAh4jWXncmduZY6TKtpY0zaiQ37u2AOjRwy0gNIWGGYBMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfMxDbjo9le%2FEbILCrcA3Rb6BE%2BegcVql1pc7VpX%2Fa7FA%2Bl3uVooqPFKOc4fUMjqDgpnqjQlWFgsTO7w27vHZxKFca0WdETMNBmINM3NxxzdR4h3vjajvqgFzT5%2FdLB1EeD%2BiwUPPUrngEAqBLe4Icvo0jcQRLv8ekUJgFgQV%2BX6%2FBsd6ITP%2FYvBo4KuvBRfMyOkch9gD4f5%2FDNmoi26LPTJ02pgAwMM%2B%2Blf8RDcX4VzgtOoPl2HSDF1wu0WEzhjPb5a9TSidB6Qnjc0oN7FLTwaVrOhxRIqcis70aj%2FSxXK%2FcfaYVMEQ%2BvdY4DJ7r3HtnAhazXTFMAjly5spyU9GxyT1i0UnPFE7gUfV68xw%2BdNBNdmHTfzuFk2iwhnXSLcQArmcmvpFFLRQN9BGmlQJYTSuJ3ebYYgudQRdZwt6aDF8G7HUSJvlsCseniuEKWYqYA3V3no83qReF3CCfEzvZzBRxN5MYSdTWXC2sSlDSwKR%2FY907LY3xJiYw2fmsnAfQczYYKIvv586aGlE3yUiqJPjyBtEH%2BlN8fdeJQmg8TGqgP3KZLvX9i4orwIQwEXtnSjXRCIi%2BI0l5Xre4VhP1eCl9aPGS%2BqJCsyC38ybrVqBvCVI%2Fy6iMBDu0HcFNOatkGg7N6Slqnsg5WMLj8ncQGOqUBjjSKzJwJDfkxh7t1Ie0SigAPnm3OYZJ455s2h60EoVvs%2Frh8VrtECh0eB%2BWNtPlGe572hnO0DivNdaGSpwO56AhFXuJLADv3cF9eQRZR149b2e8TdlexrQMOlOrdDt7aMKg9kokRmnvmAlwKK99KAbrTkTpYRbh2YisndQkbqfb8VYUCOSYxv1ylCNflfH3myD9CKnCcFGOd6tmLJVB97LY5NXxP&X-Amz-Signature=d0be09fb56b32753dc9974d9689dbc75354b80ebb8ff3ae5d7f639d03d7144c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J3NCMQW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHNWtv8An4mark3jPMhN6os3fTsWUWUQ8xnqXx5%2FLvgtAiEAh4jWXncmduZY6TKtpY0zaiQ37u2AOjRwy0gNIWGGYBMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfMxDbjo9le%2FEbILCrcA3Rb6BE%2BegcVql1pc7VpX%2Fa7FA%2Bl3uVooqPFKOc4fUMjqDgpnqjQlWFgsTO7w27vHZxKFca0WdETMNBmINM3NxxzdR4h3vjajvqgFzT5%2FdLB1EeD%2BiwUPPUrngEAqBLe4Icvo0jcQRLv8ekUJgFgQV%2BX6%2FBsd6ITP%2FYvBo4KuvBRfMyOkch9gD4f5%2FDNmoi26LPTJ02pgAwMM%2B%2Blf8RDcX4VzgtOoPl2HSDF1wu0WEzhjPb5a9TSidB6Qnjc0oN7FLTwaVrOhxRIqcis70aj%2FSxXK%2FcfaYVMEQ%2BvdY4DJ7r3HtnAhazXTFMAjly5spyU9GxyT1i0UnPFE7gUfV68xw%2BdNBNdmHTfzuFk2iwhnXSLcQArmcmvpFFLRQN9BGmlQJYTSuJ3ebYYgudQRdZwt6aDF8G7HUSJvlsCseniuEKWYqYA3V3no83qReF3CCfEzvZzBRxN5MYSdTWXC2sSlDSwKR%2FY907LY3xJiYw2fmsnAfQczYYKIvv586aGlE3yUiqJPjyBtEH%2BlN8fdeJQmg8TGqgP3KZLvX9i4orwIQwEXtnSjXRCIi%2BI0l5Xre4VhP1eCl9aPGS%2BqJCsyC38ybrVqBvCVI%2Fy6iMBDu0HcFNOatkGg7N6Slqnsg5WMLj8ncQGOqUBjjSKzJwJDfkxh7t1Ie0SigAPnm3OYZJ455s2h60EoVvs%2Frh8VrtECh0eB%2BWNtPlGe572hnO0DivNdaGSpwO56AhFXuJLADv3cF9eQRZR149b2e8TdlexrQMOlOrdDt7aMKg9kokRmnvmAlwKK99KAbrTkTpYRbh2YisndQkbqfb8VYUCOSYxv1ylCNflfH3myD9CKnCcFGOd6tmLJVB97LY5NXxP&X-Amz-Signature=b5faf24ec237cf6a9accf32fcb09749088dd3d6c91865aa158dfcc1e9153c36a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J3NCMQW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHNWtv8An4mark3jPMhN6os3fTsWUWUQ8xnqXx5%2FLvgtAiEAh4jWXncmduZY6TKtpY0zaiQ37u2AOjRwy0gNIWGGYBMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfMxDbjo9le%2FEbILCrcA3Rb6BE%2BegcVql1pc7VpX%2Fa7FA%2Bl3uVooqPFKOc4fUMjqDgpnqjQlWFgsTO7w27vHZxKFca0WdETMNBmINM3NxxzdR4h3vjajvqgFzT5%2FdLB1EeD%2BiwUPPUrngEAqBLe4Icvo0jcQRLv8ekUJgFgQV%2BX6%2FBsd6ITP%2FYvBo4KuvBRfMyOkch9gD4f5%2FDNmoi26LPTJ02pgAwMM%2B%2Blf8RDcX4VzgtOoPl2HSDF1wu0WEzhjPb5a9TSidB6Qnjc0oN7FLTwaVrOhxRIqcis70aj%2FSxXK%2FcfaYVMEQ%2BvdY4DJ7r3HtnAhazXTFMAjly5spyU9GxyT1i0UnPFE7gUfV68xw%2BdNBNdmHTfzuFk2iwhnXSLcQArmcmvpFFLRQN9BGmlQJYTSuJ3ebYYgudQRdZwt6aDF8G7HUSJvlsCseniuEKWYqYA3V3no83qReF3CCfEzvZzBRxN5MYSdTWXC2sSlDSwKR%2FY907LY3xJiYw2fmsnAfQczYYKIvv586aGlE3yUiqJPjyBtEH%2BlN8fdeJQmg8TGqgP3KZLvX9i4orwIQwEXtnSjXRCIi%2BI0l5Xre4VhP1eCl9aPGS%2BqJCsyC38ybrVqBvCVI%2Fy6iMBDu0HcFNOatkGg7N6Slqnsg5WMLj8ncQGOqUBjjSKzJwJDfkxh7t1Ie0SigAPnm3OYZJ455s2h60EoVvs%2Frh8VrtECh0eB%2BWNtPlGe572hnO0DivNdaGSpwO56AhFXuJLADv3cF9eQRZR149b2e8TdlexrQMOlOrdDt7aMKg9kokRmnvmAlwKK99KAbrTkTpYRbh2YisndQkbqfb8VYUCOSYxv1ylCNflfH3myD9CKnCcFGOd6tmLJVB97LY5NXxP&X-Amz-Signature=7baaaf6677f6d86770b10cfa5034d87a6bba0a6a8b0b49043243cd1528f4d9f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J3NCMQW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHNWtv8An4mark3jPMhN6os3fTsWUWUQ8xnqXx5%2FLvgtAiEAh4jWXncmduZY6TKtpY0zaiQ37u2AOjRwy0gNIWGGYBMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfMxDbjo9le%2FEbILCrcA3Rb6BE%2BegcVql1pc7VpX%2Fa7FA%2Bl3uVooqPFKOc4fUMjqDgpnqjQlWFgsTO7w27vHZxKFca0WdETMNBmINM3NxxzdR4h3vjajvqgFzT5%2FdLB1EeD%2BiwUPPUrngEAqBLe4Icvo0jcQRLv8ekUJgFgQV%2BX6%2FBsd6ITP%2FYvBo4KuvBRfMyOkch9gD4f5%2FDNmoi26LPTJ02pgAwMM%2B%2Blf8RDcX4VzgtOoPl2HSDF1wu0WEzhjPb5a9TSidB6Qnjc0oN7FLTwaVrOhxRIqcis70aj%2FSxXK%2FcfaYVMEQ%2BvdY4DJ7r3HtnAhazXTFMAjly5spyU9GxyT1i0UnPFE7gUfV68xw%2BdNBNdmHTfzuFk2iwhnXSLcQArmcmvpFFLRQN9BGmlQJYTSuJ3ebYYgudQRdZwt6aDF8G7HUSJvlsCseniuEKWYqYA3V3no83qReF3CCfEzvZzBRxN5MYSdTWXC2sSlDSwKR%2FY907LY3xJiYw2fmsnAfQczYYKIvv586aGlE3yUiqJPjyBtEH%2BlN8fdeJQmg8TGqgP3KZLvX9i4orwIQwEXtnSjXRCIi%2BI0l5Xre4VhP1eCl9aPGS%2BqJCsyC38ybrVqBvCVI%2Fy6iMBDu0HcFNOatkGg7N6Slqnsg5WMLj8ncQGOqUBjjSKzJwJDfkxh7t1Ie0SigAPnm3OYZJ455s2h60EoVvs%2Frh8VrtECh0eB%2BWNtPlGe572hnO0DivNdaGSpwO56AhFXuJLADv3cF9eQRZR149b2e8TdlexrQMOlOrdDt7aMKg9kokRmnvmAlwKK99KAbrTkTpYRbh2YisndQkbqfb8VYUCOSYxv1ylCNflfH3myD9CKnCcFGOd6tmLJVB97LY5NXxP&X-Amz-Signature=a0ea5b2b69c42dc951f964abb0e9527fe29e687b98ab3d8c8cba546d966864e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J3NCMQW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHNWtv8An4mark3jPMhN6os3fTsWUWUQ8xnqXx5%2FLvgtAiEAh4jWXncmduZY6TKtpY0zaiQ37u2AOjRwy0gNIWGGYBMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfMxDbjo9le%2FEbILCrcA3Rb6BE%2BegcVql1pc7VpX%2Fa7FA%2Bl3uVooqPFKOc4fUMjqDgpnqjQlWFgsTO7w27vHZxKFca0WdETMNBmINM3NxxzdR4h3vjajvqgFzT5%2FdLB1EeD%2BiwUPPUrngEAqBLe4Icvo0jcQRLv8ekUJgFgQV%2BX6%2FBsd6ITP%2FYvBo4KuvBRfMyOkch9gD4f5%2FDNmoi26LPTJ02pgAwMM%2B%2Blf8RDcX4VzgtOoPl2HSDF1wu0WEzhjPb5a9TSidB6Qnjc0oN7FLTwaVrOhxRIqcis70aj%2FSxXK%2FcfaYVMEQ%2BvdY4DJ7r3HtnAhazXTFMAjly5spyU9GxyT1i0UnPFE7gUfV68xw%2BdNBNdmHTfzuFk2iwhnXSLcQArmcmvpFFLRQN9BGmlQJYTSuJ3ebYYgudQRdZwt6aDF8G7HUSJvlsCseniuEKWYqYA3V3no83qReF3CCfEzvZzBRxN5MYSdTWXC2sSlDSwKR%2FY907LY3xJiYw2fmsnAfQczYYKIvv586aGlE3yUiqJPjyBtEH%2BlN8fdeJQmg8TGqgP3KZLvX9i4orwIQwEXtnSjXRCIi%2BI0l5Xre4VhP1eCl9aPGS%2BqJCsyC38ybrVqBvCVI%2Fy6iMBDu0HcFNOatkGg7N6Slqnsg5WMLj8ncQGOqUBjjSKzJwJDfkxh7t1Ie0SigAPnm3OYZJ455s2h60EoVvs%2Frh8VrtECh0eB%2BWNtPlGe572hnO0DivNdaGSpwO56AhFXuJLADv3cF9eQRZR149b2e8TdlexrQMOlOrdDt7aMKg9kokRmnvmAlwKK99KAbrTkTpYRbh2YisndQkbqfb8VYUCOSYxv1ylCNflfH3myD9CKnCcFGOd6tmLJVB97LY5NXxP&X-Amz-Signature=3b10f0a7d68125e225e3e2847d41e898b3febf3b919a80ec74ce072b416213f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J3NCMQW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHNWtv8An4mark3jPMhN6os3fTsWUWUQ8xnqXx5%2FLvgtAiEAh4jWXncmduZY6TKtpY0zaiQ37u2AOjRwy0gNIWGGYBMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfMxDbjo9le%2FEbILCrcA3Rb6BE%2BegcVql1pc7VpX%2Fa7FA%2Bl3uVooqPFKOc4fUMjqDgpnqjQlWFgsTO7w27vHZxKFca0WdETMNBmINM3NxxzdR4h3vjajvqgFzT5%2FdLB1EeD%2BiwUPPUrngEAqBLe4Icvo0jcQRLv8ekUJgFgQV%2BX6%2FBsd6ITP%2FYvBo4KuvBRfMyOkch9gD4f5%2FDNmoi26LPTJ02pgAwMM%2B%2Blf8RDcX4VzgtOoPl2HSDF1wu0WEzhjPb5a9TSidB6Qnjc0oN7FLTwaVrOhxRIqcis70aj%2FSxXK%2FcfaYVMEQ%2BvdY4DJ7r3HtnAhazXTFMAjly5spyU9GxyT1i0UnPFE7gUfV68xw%2BdNBNdmHTfzuFk2iwhnXSLcQArmcmvpFFLRQN9BGmlQJYTSuJ3ebYYgudQRdZwt6aDF8G7HUSJvlsCseniuEKWYqYA3V3no83qReF3CCfEzvZzBRxN5MYSdTWXC2sSlDSwKR%2FY907LY3xJiYw2fmsnAfQczYYKIvv586aGlE3yUiqJPjyBtEH%2BlN8fdeJQmg8TGqgP3KZLvX9i4orwIQwEXtnSjXRCIi%2BI0l5Xre4VhP1eCl9aPGS%2BqJCsyC38ybrVqBvCVI%2Fy6iMBDu0HcFNOatkGg7N6Slqnsg5WMLj8ncQGOqUBjjSKzJwJDfkxh7t1Ie0SigAPnm3OYZJ455s2h60EoVvs%2Frh8VrtECh0eB%2BWNtPlGe572hnO0DivNdaGSpwO56AhFXuJLADv3cF9eQRZR149b2e8TdlexrQMOlOrdDt7aMKg9kokRmnvmAlwKK99KAbrTkTpYRbh2YisndQkbqfb8VYUCOSYxv1ylCNflfH3myD9CKnCcFGOd6tmLJVB97LY5NXxP&X-Amz-Signature=c95222c78216b910a337d582c461f9b573df7a6936bf7b0be0152cb2437099bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J3NCMQW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHNWtv8An4mark3jPMhN6os3fTsWUWUQ8xnqXx5%2FLvgtAiEAh4jWXncmduZY6TKtpY0zaiQ37u2AOjRwy0gNIWGGYBMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfMxDbjo9le%2FEbILCrcA3Rb6BE%2BegcVql1pc7VpX%2Fa7FA%2Bl3uVooqPFKOc4fUMjqDgpnqjQlWFgsTO7w27vHZxKFca0WdETMNBmINM3NxxzdR4h3vjajvqgFzT5%2FdLB1EeD%2BiwUPPUrngEAqBLe4Icvo0jcQRLv8ekUJgFgQV%2BX6%2FBsd6ITP%2FYvBo4KuvBRfMyOkch9gD4f5%2FDNmoi26LPTJ02pgAwMM%2B%2Blf8RDcX4VzgtOoPl2HSDF1wu0WEzhjPb5a9TSidB6Qnjc0oN7FLTwaVrOhxRIqcis70aj%2FSxXK%2FcfaYVMEQ%2BvdY4DJ7r3HtnAhazXTFMAjly5spyU9GxyT1i0UnPFE7gUfV68xw%2BdNBNdmHTfzuFk2iwhnXSLcQArmcmvpFFLRQN9BGmlQJYTSuJ3ebYYgudQRdZwt6aDF8G7HUSJvlsCseniuEKWYqYA3V3no83qReF3CCfEzvZzBRxN5MYSdTWXC2sSlDSwKR%2FY907LY3xJiYw2fmsnAfQczYYKIvv586aGlE3yUiqJPjyBtEH%2BlN8fdeJQmg8TGqgP3KZLvX9i4orwIQwEXtnSjXRCIi%2BI0l5Xre4VhP1eCl9aPGS%2BqJCsyC38ybrVqBvCVI%2Fy6iMBDu0HcFNOatkGg7N6Slqnsg5WMLj8ncQGOqUBjjSKzJwJDfkxh7t1Ie0SigAPnm3OYZJ455s2h60EoVvs%2Frh8VrtECh0eB%2BWNtPlGe572hnO0DivNdaGSpwO56AhFXuJLADv3cF9eQRZR149b2e8TdlexrQMOlOrdDt7aMKg9kokRmnvmAlwKK99KAbrTkTpYRbh2YisndQkbqfb8VYUCOSYxv1ylCNflfH3myD9CKnCcFGOd6tmLJVB97LY5NXxP&X-Amz-Signature=6269e4572c7db157a4bc0ae65ac6364636c32d49938919868986881e2009b915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J3NCMQW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHNWtv8An4mark3jPMhN6os3fTsWUWUQ8xnqXx5%2FLvgtAiEAh4jWXncmduZY6TKtpY0zaiQ37u2AOjRwy0gNIWGGYBMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfMxDbjo9le%2FEbILCrcA3Rb6BE%2BegcVql1pc7VpX%2Fa7FA%2Bl3uVooqPFKOc4fUMjqDgpnqjQlWFgsTO7w27vHZxKFca0WdETMNBmINM3NxxzdR4h3vjajvqgFzT5%2FdLB1EeD%2BiwUPPUrngEAqBLe4Icvo0jcQRLv8ekUJgFgQV%2BX6%2FBsd6ITP%2FYvBo4KuvBRfMyOkch9gD4f5%2FDNmoi26LPTJ02pgAwMM%2B%2Blf8RDcX4VzgtOoPl2HSDF1wu0WEzhjPb5a9TSidB6Qnjc0oN7FLTwaVrOhxRIqcis70aj%2FSxXK%2FcfaYVMEQ%2BvdY4DJ7r3HtnAhazXTFMAjly5spyU9GxyT1i0UnPFE7gUfV68xw%2BdNBNdmHTfzuFk2iwhnXSLcQArmcmvpFFLRQN9BGmlQJYTSuJ3ebYYgudQRdZwt6aDF8G7HUSJvlsCseniuEKWYqYA3V3no83qReF3CCfEzvZzBRxN5MYSdTWXC2sSlDSwKR%2FY907LY3xJiYw2fmsnAfQczYYKIvv586aGlE3yUiqJPjyBtEH%2BlN8fdeJQmg8TGqgP3KZLvX9i4orwIQwEXtnSjXRCIi%2BI0l5Xre4VhP1eCl9aPGS%2BqJCsyC38ybrVqBvCVI%2Fy6iMBDu0HcFNOatkGg7N6Slqnsg5WMLj8ncQGOqUBjjSKzJwJDfkxh7t1Ie0SigAPnm3OYZJ455s2h60EoVvs%2Frh8VrtECh0eB%2BWNtPlGe572hnO0DivNdaGSpwO56AhFXuJLADv3cF9eQRZR149b2e8TdlexrQMOlOrdDt7aMKg9kokRmnvmAlwKK99KAbrTkTpYRbh2YisndQkbqfb8VYUCOSYxv1ylCNflfH3myD9CKnCcFGOd6tmLJVB97LY5NXxP&X-Amz-Signature=27a11070002ee93e735fffc342f9ad94e13806663ec8f1abc5624ff95af59975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J3NCMQW%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T151126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHNWtv8An4mark3jPMhN6os3fTsWUWUQ8xnqXx5%2FLvgtAiEAh4jWXncmduZY6TKtpY0zaiQ37u2AOjRwy0gNIWGGYBMqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGfMxDbjo9le%2FEbILCrcA3Rb6BE%2BegcVql1pc7VpX%2Fa7FA%2Bl3uVooqPFKOc4fUMjqDgpnqjQlWFgsTO7w27vHZxKFca0WdETMNBmINM3NxxzdR4h3vjajvqgFzT5%2FdLB1EeD%2BiwUPPUrngEAqBLe4Icvo0jcQRLv8ekUJgFgQV%2BX6%2FBsd6ITP%2FYvBo4KuvBRfMyOkch9gD4f5%2FDNmoi26LPTJ02pgAwMM%2B%2Blf8RDcX4VzgtOoPl2HSDF1wu0WEzhjPb5a9TSidB6Qnjc0oN7FLTwaVrOhxRIqcis70aj%2FSxXK%2FcfaYVMEQ%2BvdY4DJ7r3HtnAhazXTFMAjly5spyU9GxyT1i0UnPFE7gUfV68xw%2BdNBNdmHTfzuFk2iwhnXSLcQArmcmvpFFLRQN9BGmlQJYTSuJ3ebYYgudQRdZwt6aDF8G7HUSJvlsCseniuEKWYqYA3V3no83qReF3CCfEzvZzBRxN5MYSdTWXC2sSlDSwKR%2FY907LY3xJiYw2fmsnAfQczYYKIvv586aGlE3yUiqJPjyBtEH%2BlN8fdeJQmg8TGqgP3KZLvX9i4orwIQwEXtnSjXRCIi%2BI0l5Xre4VhP1eCl9aPGS%2BqJCsyC38ybrVqBvCVI%2Fy6iMBDu0HcFNOatkGg7N6Slqnsg5WMLj8ncQGOqUBjjSKzJwJDfkxh7t1Ie0SigAPnm3OYZJ455s2h60EoVvs%2Frh8VrtECh0eB%2BWNtPlGe572hnO0DivNdaGSpwO56AhFXuJLADv3cF9eQRZR149b2e8TdlexrQMOlOrdDt7aMKg9kokRmnvmAlwKK99KAbrTkTpYRbh2YisndQkbqfb8VYUCOSYxv1ylCNflfH3myD9CKnCcFGOd6tmLJVB97LY5NXxP&X-Amz-Signature=df1921d680e9ac40e713752e6930e8e49a22cce1cf13aba51d9ddbb0ac4cc69e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
