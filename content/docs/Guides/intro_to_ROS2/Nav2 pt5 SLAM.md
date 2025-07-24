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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGIXCVHA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE1%2BUHlBTWxwijNLy3NsOMqgRFrB4UiZg%2Fh6lTHxBlO%2BAiEAgAF191qfiaDV4qvoZJKabhcOBdWc7bANl7MwavelGrwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPg3SWThtDnCLJhXmCrcA9P1VaZLp6SQzqybk%2Bhpvgds2C87wuhDojuk5oyE4utBZj8LmOkxFa6cmPwXO0frYoZc7aXuI5wQ2CD8XdywcDAYxdmOlR90Yc5lZD0FF3v6d2PyTaQc6X76tQgnMiW9hYA9T4WOMXp4uJtzuvQLKy1sYtix1jikCR%2F5DhxQeoTItxHjz0d1eTTMyi9DpBbmwrr4jeAmqbnLHTaRWiKjcfOtP0mzEb22eimQGqnoVrXU%2FZehVLrkUxWJAkv5N2cOIgwaykr%2BTqaMZ5wcqtBGx5FI%2BFoxtOM3ME%2FzgKS0Bf1inv6V0c8WDdSWSYaVeGyd%2B4XbwQSEheEDh%2Bwa8TawfzsrU3IYOdMCAyofsoK%2F07Wl0vo6Ua7bMWCQdlKDNsWyxeUF3DK5VgloIhozMDSdXBAO%2Frdt5mm84qgj5m%2F0MVdX346OpTcIw%2BJhnnabYW9JAbwohYBNZyN4VwSocNianSDhY2hTFu5RfDxeOQzZxhlINZLTZ2rzg%2FueBmZmLgfSeUjj1aS7eE4birCv5Hh%2FWbQaedfBKpROgzsnfG%2FQXdjoTwepfm8M5Yl3r%2BMhHMSB5iEVzc2ZfrN8uHAIKRuyz5fFLO9Tp%2BomCvsNSDz0mmzm2Q8cOsCFBW60zck5MI2xicQGOqUBJstbu8sKMGp%2BIH5t%2B7eIdYix%2FB1H8BEhEF3gZTZ%2FwNEyerluUNNSx3cqEpH1o9JRvpvJfYlx4hzrYiCWZr%2Fs2JkyRMGJ0KATeMSBeweT12NuKlbQezFPlES7nIgwfElruFwF5QnBMk8UjdxC6si1g7R%2B2nBVrqryWGYwNGIHPZz24ntD6DjvmOIA50ivWQUQk3hf2m5ijzqty684YIVWgOhVLsee&X-Amz-Signature=c9bf8979bdacdb598d866c49433601bdef40a14987c4198be94b002110c20b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGIXCVHA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE1%2BUHlBTWxwijNLy3NsOMqgRFrB4UiZg%2Fh6lTHxBlO%2BAiEAgAF191qfiaDV4qvoZJKabhcOBdWc7bANl7MwavelGrwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPg3SWThtDnCLJhXmCrcA9P1VaZLp6SQzqybk%2Bhpvgds2C87wuhDojuk5oyE4utBZj8LmOkxFa6cmPwXO0frYoZc7aXuI5wQ2CD8XdywcDAYxdmOlR90Yc5lZD0FF3v6d2PyTaQc6X76tQgnMiW9hYA9T4WOMXp4uJtzuvQLKy1sYtix1jikCR%2F5DhxQeoTItxHjz0d1eTTMyi9DpBbmwrr4jeAmqbnLHTaRWiKjcfOtP0mzEb22eimQGqnoVrXU%2FZehVLrkUxWJAkv5N2cOIgwaykr%2BTqaMZ5wcqtBGx5FI%2BFoxtOM3ME%2FzgKS0Bf1inv6V0c8WDdSWSYaVeGyd%2B4XbwQSEheEDh%2Bwa8TawfzsrU3IYOdMCAyofsoK%2F07Wl0vo6Ua7bMWCQdlKDNsWyxeUF3DK5VgloIhozMDSdXBAO%2Frdt5mm84qgj5m%2F0MVdX346OpTcIw%2BJhnnabYW9JAbwohYBNZyN4VwSocNianSDhY2hTFu5RfDxeOQzZxhlINZLTZ2rzg%2FueBmZmLgfSeUjj1aS7eE4birCv5Hh%2FWbQaedfBKpROgzsnfG%2FQXdjoTwepfm8M5Yl3r%2BMhHMSB5iEVzc2ZfrN8uHAIKRuyz5fFLO9Tp%2BomCvsNSDz0mmzm2Q8cOsCFBW60zck5MI2xicQGOqUBJstbu8sKMGp%2BIH5t%2B7eIdYix%2FB1H8BEhEF3gZTZ%2FwNEyerluUNNSx3cqEpH1o9JRvpvJfYlx4hzrYiCWZr%2Fs2JkyRMGJ0KATeMSBeweT12NuKlbQezFPlES7nIgwfElruFwF5QnBMk8UjdxC6si1g7R%2B2nBVrqryWGYwNGIHPZz24ntD6DjvmOIA50ivWQUQk3hf2m5ijzqty684YIVWgOhVLsee&X-Amz-Signature=eb64d89eeb8b41ff0720869d919801dfa582e7ea816b5d49b50345ff60d38e7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGIXCVHA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE1%2BUHlBTWxwijNLy3NsOMqgRFrB4UiZg%2Fh6lTHxBlO%2BAiEAgAF191qfiaDV4qvoZJKabhcOBdWc7bANl7MwavelGrwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPg3SWThtDnCLJhXmCrcA9P1VaZLp6SQzqybk%2Bhpvgds2C87wuhDojuk5oyE4utBZj8LmOkxFa6cmPwXO0frYoZc7aXuI5wQ2CD8XdywcDAYxdmOlR90Yc5lZD0FF3v6d2PyTaQc6X76tQgnMiW9hYA9T4WOMXp4uJtzuvQLKy1sYtix1jikCR%2F5DhxQeoTItxHjz0d1eTTMyi9DpBbmwrr4jeAmqbnLHTaRWiKjcfOtP0mzEb22eimQGqnoVrXU%2FZehVLrkUxWJAkv5N2cOIgwaykr%2BTqaMZ5wcqtBGx5FI%2BFoxtOM3ME%2FzgKS0Bf1inv6V0c8WDdSWSYaVeGyd%2B4XbwQSEheEDh%2Bwa8TawfzsrU3IYOdMCAyofsoK%2F07Wl0vo6Ua7bMWCQdlKDNsWyxeUF3DK5VgloIhozMDSdXBAO%2Frdt5mm84qgj5m%2F0MVdX346OpTcIw%2BJhnnabYW9JAbwohYBNZyN4VwSocNianSDhY2hTFu5RfDxeOQzZxhlINZLTZ2rzg%2FueBmZmLgfSeUjj1aS7eE4birCv5Hh%2FWbQaedfBKpROgzsnfG%2FQXdjoTwepfm8M5Yl3r%2BMhHMSB5iEVzc2ZfrN8uHAIKRuyz5fFLO9Tp%2BomCvsNSDz0mmzm2Q8cOsCFBW60zck5MI2xicQGOqUBJstbu8sKMGp%2BIH5t%2B7eIdYix%2FB1H8BEhEF3gZTZ%2FwNEyerluUNNSx3cqEpH1o9JRvpvJfYlx4hzrYiCWZr%2Fs2JkyRMGJ0KATeMSBeweT12NuKlbQezFPlES7nIgwfElruFwF5QnBMk8UjdxC6si1g7R%2B2nBVrqryWGYwNGIHPZz24ntD6DjvmOIA50ivWQUQk3hf2m5ijzqty684YIVWgOhVLsee&X-Amz-Signature=c3505e4cd37f46dddef064492e03c7e39e9bc7c195708b311ab3bf503f21691c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGIXCVHA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE1%2BUHlBTWxwijNLy3NsOMqgRFrB4UiZg%2Fh6lTHxBlO%2BAiEAgAF191qfiaDV4qvoZJKabhcOBdWc7bANl7MwavelGrwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPg3SWThtDnCLJhXmCrcA9P1VaZLp6SQzqybk%2Bhpvgds2C87wuhDojuk5oyE4utBZj8LmOkxFa6cmPwXO0frYoZc7aXuI5wQ2CD8XdywcDAYxdmOlR90Yc5lZD0FF3v6d2PyTaQc6X76tQgnMiW9hYA9T4WOMXp4uJtzuvQLKy1sYtix1jikCR%2F5DhxQeoTItxHjz0d1eTTMyi9DpBbmwrr4jeAmqbnLHTaRWiKjcfOtP0mzEb22eimQGqnoVrXU%2FZehVLrkUxWJAkv5N2cOIgwaykr%2BTqaMZ5wcqtBGx5FI%2BFoxtOM3ME%2FzgKS0Bf1inv6V0c8WDdSWSYaVeGyd%2B4XbwQSEheEDh%2Bwa8TawfzsrU3IYOdMCAyofsoK%2F07Wl0vo6Ua7bMWCQdlKDNsWyxeUF3DK5VgloIhozMDSdXBAO%2Frdt5mm84qgj5m%2F0MVdX346OpTcIw%2BJhnnabYW9JAbwohYBNZyN4VwSocNianSDhY2hTFu5RfDxeOQzZxhlINZLTZ2rzg%2FueBmZmLgfSeUjj1aS7eE4birCv5Hh%2FWbQaedfBKpROgzsnfG%2FQXdjoTwepfm8M5Yl3r%2BMhHMSB5iEVzc2ZfrN8uHAIKRuyz5fFLO9Tp%2BomCvsNSDz0mmzm2Q8cOsCFBW60zck5MI2xicQGOqUBJstbu8sKMGp%2BIH5t%2B7eIdYix%2FB1H8BEhEF3gZTZ%2FwNEyerluUNNSx3cqEpH1o9JRvpvJfYlx4hzrYiCWZr%2Fs2JkyRMGJ0KATeMSBeweT12NuKlbQezFPlES7nIgwfElruFwF5QnBMk8UjdxC6si1g7R%2B2nBVrqryWGYwNGIHPZz24ntD6DjvmOIA50ivWQUQk3hf2m5ijzqty684YIVWgOhVLsee&X-Amz-Signature=c414bae3cbc01b5f0b14867d7b12f6dbc2d5ab1f42d72a6c5a4090890b2289ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGIXCVHA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE1%2BUHlBTWxwijNLy3NsOMqgRFrB4UiZg%2Fh6lTHxBlO%2BAiEAgAF191qfiaDV4qvoZJKabhcOBdWc7bANl7MwavelGrwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPg3SWThtDnCLJhXmCrcA9P1VaZLp6SQzqybk%2Bhpvgds2C87wuhDojuk5oyE4utBZj8LmOkxFa6cmPwXO0frYoZc7aXuI5wQ2CD8XdywcDAYxdmOlR90Yc5lZD0FF3v6d2PyTaQc6X76tQgnMiW9hYA9T4WOMXp4uJtzuvQLKy1sYtix1jikCR%2F5DhxQeoTItxHjz0d1eTTMyi9DpBbmwrr4jeAmqbnLHTaRWiKjcfOtP0mzEb22eimQGqnoVrXU%2FZehVLrkUxWJAkv5N2cOIgwaykr%2BTqaMZ5wcqtBGx5FI%2BFoxtOM3ME%2FzgKS0Bf1inv6V0c8WDdSWSYaVeGyd%2B4XbwQSEheEDh%2Bwa8TawfzsrU3IYOdMCAyofsoK%2F07Wl0vo6Ua7bMWCQdlKDNsWyxeUF3DK5VgloIhozMDSdXBAO%2Frdt5mm84qgj5m%2F0MVdX346OpTcIw%2BJhnnabYW9JAbwohYBNZyN4VwSocNianSDhY2hTFu5RfDxeOQzZxhlINZLTZ2rzg%2FueBmZmLgfSeUjj1aS7eE4birCv5Hh%2FWbQaedfBKpROgzsnfG%2FQXdjoTwepfm8M5Yl3r%2BMhHMSB5iEVzc2ZfrN8uHAIKRuyz5fFLO9Tp%2BomCvsNSDz0mmzm2Q8cOsCFBW60zck5MI2xicQGOqUBJstbu8sKMGp%2BIH5t%2B7eIdYix%2FB1H8BEhEF3gZTZ%2FwNEyerluUNNSx3cqEpH1o9JRvpvJfYlx4hzrYiCWZr%2Fs2JkyRMGJ0KATeMSBeweT12NuKlbQezFPlES7nIgwfElruFwF5QnBMk8UjdxC6si1g7R%2B2nBVrqryWGYwNGIHPZz24ntD6DjvmOIA50ivWQUQk3hf2m5ijzqty684YIVWgOhVLsee&X-Amz-Signature=4353b0237efc43408136df028f0b8cb433df10bd58ac48ead30d378a4ada20d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGIXCVHA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE1%2BUHlBTWxwijNLy3NsOMqgRFrB4UiZg%2Fh6lTHxBlO%2BAiEAgAF191qfiaDV4qvoZJKabhcOBdWc7bANl7MwavelGrwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPg3SWThtDnCLJhXmCrcA9P1VaZLp6SQzqybk%2Bhpvgds2C87wuhDojuk5oyE4utBZj8LmOkxFa6cmPwXO0frYoZc7aXuI5wQ2CD8XdywcDAYxdmOlR90Yc5lZD0FF3v6d2PyTaQc6X76tQgnMiW9hYA9T4WOMXp4uJtzuvQLKy1sYtix1jikCR%2F5DhxQeoTItxHjz0d1eTTMyi9DpBbmwrr4jeAmqbnLHTaRWiKjcfOtP0mzEb22eimQGqnoVrXU%2FZehVLrkUxWJAkv5N2cOIgwaykr%2BTqaMZ5wcqtBGx5FI%2BFoxtOM3ME%2FzgKS0Bf1inv6V0c8WDdSWSYaVeGyd%2B4XbwQSEheEDh%2Bwa8TawfzsrU3IYOdMCAyofsoK%2F07Wl0vo6Ua7bMWCQdlKDNsWyxeUF3DK5VgloIhozMDSdXBAO%2Frdt5mm84qgj5m%2F0MVdX346OpTcIw%2BJhnnabYW9JAbwohYBNZyN4VwSocNianSDhY2hTFu5RfDxeOQzZxhlINZLTZ2rzg%2FueBmZmLgfSeUjj1aS7eE4birCv5Hh%2FWbQaedfBKpROgzsnfG%2FQXdjoTwepfm8M5Yl3r%2BMhHMSB5iEVzc2ZfrN8uHAIKRuyz5fFLO9Tp%2BomCvsNSDz0mmzm2Q8cOsCFBW60zck5MI2xicQGOqUBJstbu8sKMGp%2BIH5t%2B7eIdYix%2FB1H8BEhEF3gZTZ%2FwNEyerluUNNSx3cqEpH1o9JRvpvJfYlx4hzrYiCWZr%2Fs2JkyRMGJ0KATeMSBeweT12NuKlbQezFPlES7nIgwfElruFwF5QnBMk8UjdxC6si1g7R%2B2nBVrqryWGYwNGIHPZz24ntD6DjvmOIA50ivWQUQk3hf2m5ijzqty684YIVWgOhVLsee&X-Amz-Signature=2e23babca62e8d7ba3eda3962353189ec268a8867158116e368bb436d4f05159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGIXCVHA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE1%2BUHlBTWxwijNLy3NsOMqgRFrB4UiZg%2Fh6lTHxBlO%2BAiEAgAF191qfiaDV4qvoZJKabhcOBdWc7bANl7MwavelGrwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPg3SWThtDnCLJhXmCrcA9P1VaZLp6SQzqybk%2Bhpvgds2C87wuhDojuk5oyE4utBZj8LmOkxFa6cmPwXO0frYoZc7aXuI5wQ2CD8XdywcDAYxdmOlR90Yc5lZD0FF3v6d2PyTaQc6X76tQgnMiW9hYA9T4WOMXp4uJtzuvQLKy1sYtix1jikCR%2F5DhxQeoTItxHjz0d1eTTMyi9DpBbmwrr4jeAmqbnLHTaRWiKjcfOtP0mzEb22eimQGqnoVrXU%2FZehVLrkUxWJAkv5N2cOIgwaykr%2BTqaMZ5wcqtBGx5FI%2BFoxtOM3ME%2FzgKS0Bf1inv6V0c8WDdSWSYaVeGyd%2B4XbwQSEheEDh%2Bwa8TawfzsrU3IYOdMCAyofsoK%2F07Wl0vo6Ua7bMWCQdlKDNsWyxeUF3DK5VgloIhozMDSdXBAO%2Frdt5mm84qgj5m%2F0MVdX346OpTcIw%2BJhnnabYW9JAbwohYBNZyN4VwSocNianSDhY2hTFu5RfDxeOQzZxhlINZLTZ2rzg%2FueBmZmLgfSeUjj1aS7eE4birCv5Hh%2FWbQaedfBKpROgzsnfG%2FQXdjoTwepfm8M5Yl3r%2BMhHMSB5iEVzc2ZfrN8uHAIKRuyz5fFLO9Tp%2BomCvsNSDz0mmzm2Q8cOsCFBW60zck5MI2xicQGOqUBJstbu8sKMGp%2BIH5t%2B7eIdYix%2FB1H8BEhEF3gZTZ%2FwNEyerluUNNSx3cqEpH1o9JRvpvJfYlx4hzrYiCWZr%2Fs2JkyRMGJ0KATeMSBeweT12NuKlbQezFPlES7nIgwfElruFwF5QnBMk8UjdxC6si1g7R%2B2nBVrqryWGYwNGIHPZz24ntD6DjvmOIA50ivWQUQk3hf2m5ijzqty684YIVWgOhVLsee&X-Amz-Signature=bf337eeaf3805f458d8d002546d86ecbd0bb56746a84c627fe55d352adf5b30e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGIXCVHA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE1%2BUHlBTWxwijNLy3NsOMqgRFrB4UiZg%2Fh6lTHxBlO%2BAiEAgAF191qfiaDV4qvoZJKabhcOBdWc7bANl7MwavelGrwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPg3SWThtDnCLJhXmCrcA9P1VaZLp6SQzqybk%2Bhpvgds2C87wuhDojuk5oyE4utBZj8LmOkxFa6cmPwXO0frYoZc7aXuI5wQ2CD8XdywcDAYxdmOlR90Yc5lZD0FF3v6d2PyTaQc6X76tQgnMiW9hYA9T4WOMXp4uJtzuvQLKy1sYtix1jikCR%2F5DhxQeoTItxHjz0d1eTTMyi9DpBbmwrr4jeAmqbnLHTaRWiKjcfOtP0mzEb22eimQGqnoVrXU%2FZehVLrkUxWJAkv5N2cOIgwaykr%2BTqaMZ5wcqtBGx5FI%2BFoxtOM3ME%2FzgKS0Bf1inv6V0c8WDdSWSYaVeGyd%2B4XbwQSEheEDh%2Bwa8TawfzsrU3IYOdMCAyofsoK%2F07Wl0vo6Ua7bMWCQdlKDNsWyxeUF3DK5VgloIhozMDSdXBAO%2Frdt5mm84qgj5m%2F0MVdX346OpTcIw%2BJhnnabYW9JAbwohYBNZyN4VwSocNianSDhY2hTFu5RfDxeOQzZxhlINZLTZ2rzg%2FueBmZmLgfSeUjj1aS7eE4birCv5Hh%2FWbQaedfBKpROgzsnfG%2FQXdjoTwepfm8M5Yl3r%2BMhHMSB5iEVzc2ZfrN8uHAIKRuyz5fFLO9Tp%2BomCvsNSDz0mmzm2Q8cOsCFBW60zck5MI2xicQGOqUBJstbu8sKMGp%2BIH5t%2B7eIdYix%2FB1H8BEhEF3gZTZ%2FwNEyerluUNNSx3cqEpH1o9JRvpvJfYlx4hzrYiCWZr%2Fs2JkyRMGJ0KATeMSBeweT12NuKlbQezFPlES7nIgwfElruFwF5QnBMk8UjdxC6si1g7R%2B2nBVrqryWGYwNGIHPZz24ntD6DjvmOIA50ivWQUQk3hf2m5ijzqty684YIVWgOhVLsee&X-Amz-Signature=fbfea14bc1da6b961510144009679d7f4a6454c352c1824d1de21fb5d7df7169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGIXCVHA%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIE1%2BUHlBTWxwijNLy3NsOMqgRFrB4UiZg%2Fh6lTHxBlO%2BAiEAgAF191qfiaDV4qvoZJKabhcOBdWc7bANl7MwavelGrwq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPg3SWThtDnCLJhXmCrcA9P1VaZLp6SQzqybk%2Bhpvgds2C87wuhDojuk5oyE4utBZj8LmOkxFa6cmPwXO0frYoZc7aXuI5wQ2CD8XdywcDAYxdmOlR90Yc5lZD0FF3v6d2PyTaQc6X76tQgnMiW9hYA9T4WOMXp4uJtzuvQLKy1sYtix1jikCR%2F5DhxQeoTItxHjz0d1eTTMyi9DpBbmwrr4jeAmqbnLHTaRWiKjcfOtP0mzEb22eimQGqnoVrXU%2FZehVLrkUxWJAkv5N2cOIgwaykr%2BTqaMZ5wcqtBGx5FI%2BFoxtOM3ME%2FzgKS0Bf1inv6V0c8WDdSWSYaVeGyd%2B4XbwQSEheEDh%2Bwa8TawfzsrU3IYOdMCAyofsoK%2F07Wl0vo6Ua7bMWCQdlKDNsWyxeUF3DK5VgloIhozMDSdXBAO%2Frdt5mm84qgj5m%2F0MVdX346OpTcIw%2BJhnnabYW9JAbwohYBNZyN4VwSocNianSDhY2hTFu5RfDxeOQzZxhlINZLTZ2rzg%2FueBmZmLgfSeUjj1aS7eE4birCv5Hh%2FWbQaedfBKpROgzsnfG%2FQXdjoTwepfm8M5Yl3r%2BMhHMSB5iEVzc2ZfrN8uHAIKRuyz5fFLO9Tp%2BomCvsNSDz0mmzm2Q8cOsCFBW60zck5MI2xicQGOqUBJstbu8sKMGp%2BIH5t%2B7eIdYix%2FB1H8BEhEF3gZTZ%2FwNEyerluUNNSx3cqEpH1o9JRvpvJfYlx4hzrYiCWZr%2Fs2JkyRMGJ0KATeMSBeweT12NuKlbQezFPlES7nIgwfElruFwF5QnBMk8UjdxC6si1g7R%2B2nBVrqryWGYwNGIHPZz24ntD6DjvmOIA50ivWQUQk3hf2m5ijzqty684YIVWgOhVLsee&X-Amz-Signature=9fcfe7e416f65de5d46a7fd50542aafd5aab89d662561243cd65760e232605ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
