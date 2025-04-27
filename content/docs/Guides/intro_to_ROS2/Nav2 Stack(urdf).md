---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-02-07T18:41:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-02-07T18:41:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

TODO: add rqt graphs for each time we add a node for the Nav2 Stack series

# install pkg

# creating workspace + package

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 mbot_pkg 
```

### building 

```bash
cd ../../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## Download

create rviz and urdf folder in `mbot_pkg` and download the rviz and urdf file:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EWU2HBK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClmGeLc9PzkX2x5ce5K3nqhSN93mDq2YIK088TmWZlmwIgQEZ1riPMA0ZxabNTVG5EjGVzvpUkI63B0xqpgGE33NYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDI3RkRRvN%2FoccUAkZyrcA0dCYqq380dZmVp%2FV%2F3GlcF2k%2BmpzjPfJ%2BWcJwv6cY5WUdED7%2F%2B7iR1TUAg%2FZVsjTJs0OBX8fyMOgDYaNtAwxNB%2FMH6xz7zXhW1qxKoOZPGhxTJSZDX9Br0RIwSJ2DykSy%2B3Syti4mywMqgrnlAA3Vkyzf%2F8Z54hWAwZ4J54OD6SyDAUlbnfOTwYTLPex3h3jgJBLp2C%2F9Ym4J5D2lhs77boHTd5OPI%2BxYc6Q7TKLBAjJiWnPID0VGxNxy96M15E%2BKMPxa7NhhzlD%2B74N23vhhJ2K09Pf4RaqcvAPyAO9xa8Nd2tBkN8pb7mkLiWn4sMtqBbxNfH9ObiUlXwy4k%2Bm27Qjwj28dJMvPnWZ8P4jtm0KxWVYwg%2By6OFtqCOA0B%2BtipvwOvD3%2F8dL37zzwvtaUJnTZRf11ZzlP5%2FtlmZ%2B4AXOivrg%2ByDxKTIetUz3hBr9eRCyeFdagFzrRcedVPpvdMoc%2BL6YU6s4V6WHzTz06G8Pu6%2FSSYZoXQAqvgw9eTQaB2MuE5yYddSd6DqlXHJtMRBrPUliX8Ur1kPjk0OjKREeLGRvUWCckhsDJ9OsIEhRYbweCrlsSFKSTAc76uhW%2BHHqq9AbjLHq3K7UQI4zh0uqNzT2lkzyk5jwyIKML%2BMuMAGOqUBvFUvwILpbVrDRXg24Pwl1zQkYeFsYsJlW8eHKOYHZGtddr4doeP5E%2Fr0nmChvyquxqxWlr%2FiHcp%2BHV%2FNdRS2N9%2F6WKrTcZ%2FbQuaa0b2JxB6%2FfIUVz60SZxdMrKLcmlPMpFi2KMraUFB8X6CZ39w%2FokxtucaJslSy4fvIPTNexCoVYWlMZ%2F4270wlGyFeXP4Ee%2B2N5LW0KZl9zlcjDgFbDwJiZfLr&X-Amz-Signature=13e979dd8222da1841755a84d0f6966babcd1321c931e0bacdb37bd13319b888&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EWU2HBK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClmGeLc9PzkX2x5ce5K3nqhSN93mDq2YIK088TmWZlmwIgQEZ1riPMA0ZxabNTVG5EjGVzvpUkI63B0xqpgGE33NYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDI3RkRRvN%2FoccUAkZyrcA0dCYqq380dZmVp%2FV%2F3GlcF2k%2BmpzjPfJ%2BWcJwv6cY5WUdED7%2F%2B7iR1TUAg%2FZVsjTJs0OBX8fyMOgDYaNtAwxNB%2FMH6xz7zXhW1qxKoOZPGhxTJSZDX9Br0RIwSJ2DykSy%2B3Syti4mywMqgrnlAA3Vkyzf%2F8Z54hWAwZ4J54OD6SyDAUlbnfOTwYTLPex3h3jgJBLp2C%2F9Ym4J5D2lhs77boHTd5OPI%2BxYc6Q7TKLBAjJiWnPID0VGxNxy96M15E%2BKMPxa7NhhzlD%2B74N23vhhJ2K09Pf4RaqcvAPyAO9xa8Nd2tBkN8pb7mkLiWn4sMtqBbxNfH9ObiUlXwy4k%2Bm27Qjwj28dJMvPnWZ8P4jtm0KxWVYwg%2By6OFtqCOA0B%2BtipvwOvD3%2F8dL37zzwvtaUJnTZRf11ZzlP5%2FtlmZ%2B4AXOivrg%2ByDxKTIetUz3hBr9eRCyeFdagFzrRcedVPpvdMoc%2BL6YU6s4V6WHzTz06G8Pu6%2FSSYZoXQAqvgw9eTQaB2MuE5yYddSd6DqlXHJtMRBrPUliX8Ur1kPjk0OjKREeLGRvUWCckhsDJ9OsIEhRYbweCrlsSFKSTAc76uhW%2BHHqq9AbjLHq3K7UQI4zh0uqNzT2lkzyk5jwyIKML%2BMuMAGOqUBvFUvwILpbVrDRXg24Pwl1zQkYeFsYsJlW8eHKOYHZGtddr4doeP5E%2Fr0nmChvyquxqxWlr%2FiHcp%2BHV%2FNdRS2N9%2F6WKrTcZ%2FbQuaa0b2JxB6%2FfIUVz60SZxdMrKLcmlPMpFi2KMraUFB8X6CZ39w%2FokxtucaJslSy4fvIPTNexCoVYWlMZ%2F4270wlGyFeXP4Ee%2B2N5LW0KZl9zlcjDgFbDwJiZfLr&X-Amz-Signature=6ac31dcd7a54a57debcba9791bc0aa64a4a77a46665395f71b494a422addf53c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EWU2HBK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClmGeLc9PzkX2x5ce5K3nqhSN93mDq2YIK088TmWZlmwIgQEZ1riPMA0ZxabNTVG5EjGVzvpUkI63B0xqpgGE33NYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDI3RkRRvN%2FoccUAkZyrcA0dCYqq380dZmVp%2FV%2F3GlcF2k%2BmpzjPfJ%2BWcJwv6cY5WUdED7%2F%2B7iR1TUAg%2FZVsjTJs0OBX8fyMOgDYaNtAwxNB%2FMH6xz7zXhW1qxKoOZPGhxTJSZDX9Br0RIwSJ2DykSy%2B3Syti4mywMqgrnlAA3Vkyzf%2F8Z54hWAwZ4J54OD6SyDAUlbnfOTwYTLPex3h3jgJBLp2C%2F9Ym4J5D2lhs77boHTd5OPI%2BxYc6Q7TKLBAjJiWnPID0VGxNxy96M15E%2BKMPxa7NhhzlD%2B74N23vhhJ2K09Pf4RaqcvAPyAO9xa8Nd2tBkN8pb7mkLiWn4sMtqBbxNfH9ObiUlXwy4k%2Bm27Qjwj28dJMvPnWZ8P4jtm0KxWVYwg%2By6OFtqCOA0B%2BtipvwOvD3%2F8dL37zzwvtaUJnTZRf11ZzlP5%2FtlmZ%2B4AXOivrg%2ByDxKTIetUz3hBr9eRCyeFdagFzrRcedVPpvdMoc%2BL6YU6s4V6WHzTz06G8Pu6%2FSSYZoXQAqvgw9eTQaB2MuE5yYddSd6DqlXHJtMRBrPUliX8Ur1kPjk0OjKREeLGRvUWCckhsDJ9OsIEhRYbweCrlsSFKSTAc76uhW%2BHHqq9AbjLHq3K7UQI4zh0uqNzT2lkzyk5jwyIKML%2BMuMAGOqUBvFUvwILpbVrDRXg24Pwl1zQkYeFsYsJlW8eHKOYHZGtddr4doeP5E%2Fr0nmChvyquxqxWlr%2FiHcp%2BHV%2FNdRS2N9%2F6WKrTcZ%2FbQuaa0b2JxB6%2FfIUVz60SZxdMrKLcmlPMpFi2KMraUFB8X6CZ39w%2FokxtucaJslSy4fvIPTNexCoVYWlMZ%2F4270wlGyFeXP4Ee%2B2N5LW0KZl9zlcjDgFbDwJiZfLr&X-Amz-Signature=20a2b7f124d529475fe5838591fbcea1be77501b3bab11777cb9224d26771fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EWU2HBK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClmGeLc9PzkX2x5ce5K3nqhSN93mDq2YIK088TmWZlmwIgQEZ1riPMA0ZxabNTVG5EjGVzvpUkI63B0xqpgGE33NYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDI3RkRRvN%2FoccUAkZyrcA0dCYqq380dZmVp%2FV%2F3GlcF2k%2BmpzjPfJ%2BWcJwv6cY5WUdED7%2F%2B7iR1TUAg%2FZVsjTJs0OBX8fyMOgDYaNtAwxNB%2FMH6xz7zXhW1qxKoOZPGhxTJSZDX9Br0RIwSJ2DykSy%2B3Syti4mywMqgrnlAA3Vkyzf%2F8Z54hWAwZ4J54OD6SyDAUlbnfOTwYTLPex3h3jgJBLp2C%2F9Ym4J5D2lhs77boHTd5OPI%2BxYc6Q7TKLBAjJiWnPID0VGxNxy96M15E%2BKMPxa7NhhzlD%2B74N23vhhJ2K09Pf4RaqcvAPyAO9xa8Nd2tBkN8pb7mkLiWn4sMtqBbxNfH9ObiUlXwy4k%2Bm27Qjwj28dJMvPnWZ8P4jtm0KxWVYwg%2By6OFtqCOA0B%2BtipvwOvD3%2F8dL37zzwvtaUJnTZRf11ZzlP5%2FtlmZ%2B4AXOivrg%2ByDxKTIetUz3hBr9eRCyeFdagFzrRcedVPpvdMoc%2BL6YU6s4V6WHzTz06G8Pu6%2FSSYZoXQAqvgw9eTQaB2MuE5yYddSd6DqlXHJtMRBrPUliX8Ur1kPjk0OjKREeLGRvUWCckhsDJ9OsIEhRYbweCrlsSFKSTAc76uhW%2BHHqq9AbjLHq3K7UQI4zh0uqNzT2lkzyk5jwyIKML%2BMuMAGOqUBvFUvwILpbVrDRXg24Pwl1zQkYeFsYsJlW8eHKOYHZGtddr4doeP5E%2Fr0nmChvyquxqxWlr%2FiHcp%2BHV%2FNdRS2N9%2F6WKrTcZ%2FbQuaa0b2JxB6%2FfIUVz60SZxdMrKLcmlPMpFi2KMraUFB8X6CZ39w%2FokxtucaJslSy4fvIPTNexCoVYWlMZ%2F4270wlGyFeXP4Ee%2B2N5LW0KZl9zlcjDgFbDwJiZfLr&X-Amz-Signature=d757180828d6ca8bcbbbd34d8870d8990040908e5ba58902bedec13dcd78a683&X-Amz-SignedHeaders=host&x-id=GetObject)

(From Articulated Robotics)

# creating launch file

make a launch folder called `display.launch.py`

**Nodes we are adding:**

{{< table "table-striped table-hover table-responsive" >}}

|   |   |
| - | - |
|   |   |
|   |   |

{{< /table >}}

- robot_state_publisher_node (reads the URDF and publishes to `/robot_description` all non-fixed joints, static joints and links)
- joint_state_publisher_node (finds all of the non-fixed joints and publishes to `/joint_states`)
- joint_state_publisher_gui_node (the same as joint_state_publisher_node but with a gui on top)
- rviz_node

## launch file

```python
import launch
from launch.substitutions import Command, LaunchConfiguration
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='mbot_pkg').find('mbot_pkg')
    default_model_path = os.path.join(pkg_share, 'urdf/mbot_description.urdf')
    default_rviz_config_path = os.path.join(pkg_share, 'rviz/urdf_config.rviz')

    robot_state_publisher_node = launch_ros.actions.Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', LaunchConfiguration('model')])}]
    )
    joint_state_publisher_node = launch_ros.actions.Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}],
        condition=launch.conditions.UnlessCondition(LaunchConfiguration('gui'))
    )
    joint_state_publisher_gui_node = launch_ros.actions.Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
        name='joint_state_publisher_gui',
        condition=launch.conditions.IfCondition(LaunchConfiguration('gui'))
    )
    rviz_node = launch_ros.actions.Node(
        package='rviz2',
        executable='rviz2',
        name='rviz2',
        output='screen',
        arguments=['-d', LaunchConfiguration('rvizconfig')],
    )

    return launch.LaunchDescription([
        launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
                                            description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        joint_state_publisher_gui_node,
        robot_state_publisher_node,
        rviz_node
    ])
```

## add new files to `setup.py` 

```python
import os
from glob import glob

from setuptools import find_packages, setup

package_name = 'mbot_code'

setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        (os.path.join('share', package_name, 'urdf'), glob('urdf/*.urdf')),
        (os.path.join('share', package_name, 'rviz'), glob('rviz/*.rviz*')),
        (os.path.join('share', package_name), glob('launch/*launch.[pxy][yma]*')),
    ],
    ...
```

run:

```bash
colcon build --symlink-install
ros2 launch mbot_pkg display.launch.py
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EWU2HBK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClmGeLc9PzkX2x5ce5K3nqhSN93mDq2YIK088TmWZlmwIgQEZ1riPMA0ZxabNTVG5EjGVzvpUkI63B0xqpgGE33NYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDI3RkRRvN%2FoccUAkZyrcA0dCYqq380dZmVp%2FV%2F3GlcF2k%2BmpzjPfJ%2BWcJwv6cY5WUdED7%2F%2B7iR1TUAg%2FZVsjTJs0OBX8fyMOgDYaNtAwxNB%2FMH6xz7zXhW1qxKoOZPGhxTJSZDX9Br0RIwSJ2DykSy%2B3Syti4mywMqgrnlAA3Vkyzf%2F8Z54hWAwZ4J54OD6SyDAUlbnfOTwYTLPex3h3jgJBLp2C%2F9Ym4J5D2lhs77boHTd5OPI%2BxYc6Q7TKLBAjJiWnPID0VGxNxy96M15E%2BKMPxa7NhhzlD%2B74N23vhhJ2K09Pf4RaqcvAPyAO9xa8Nd2tBkN8pb7mkLiWn4sMtqBbxNfH9ObiUlXwy4k%2Bm27Qjwj28dJMvPnWZ8P4jtm0KxWVYwg%2By6OFtqCOA0B%2BtipvwOvD3%2F8dL37zzwvtaUJnTZRf11ZzlP5%2FtlmZ%2B4AXOivrg%2ByDxKTIetUz3hBr9eRCyeFdagFzrRcedVPpvdMoc%2BL6YU6s4V6WHzTz06G8Pu6%2FSSYZoXQAqvgw9eTQaB2MuE5yYddSd6DqlXHJtMRBrPUliX8Ur1kPjk0OjKREeLGRvUWCckhsDJ9OsIEhRYbweCrlsSFKSTAc76uhW%2BHHqq9AbjLHq3K7UQI4zh0uqNzT2lkzyk5jwyIKML%2BMuMAGOqUBvFUvwILpbVrDRXg24Pwl1zQkYeFsYsJlW8eHKOYHZGtddr4doeP5E%2Fr0nmChvyquxqxWlr%2FiHcp%2BHV%2FNdRS2N9%2F6WKrTcZ%2FbQuaa0b2JxB6%2FfIUVz60SZxdMrKLcmlPMpFi2KMraUFB8X6CZ39w%2FokxtucaJslSy4fvIPTNexCoVYWlMZ%2F4270wlGyFeXP4Ee%2B2N5LW0KZl9zlcjDgFbDwJiZfLr&X-Amz-Signature=3f7d82410287b1521533a60f86cf526e9241f1d72013fb20eb9d27ad6cb32b1b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EWU2HBK%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T121327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClmGeLc9PzkX2x5ce5K3nqhSN93mDq2YIK088TmWZlmwIgQEZ1riPMA0ZxabNTVG5EjGVzvpUkI63B0xqpgGE33NYq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDI3RkRRvN%2FoccUAkZyrcA0dCYqq380dZmVp%2FV%2F3GlcF2k%2BmpzjPfJ%2BWcJwv6cY5WUdED7%2F%2B7iR1TUAg%2FZVsjTJs0OBX8fyMOgDYaNtAwxNB%2FMH6xz7zXhW1qxKoOZPGhxTJSZDX9Br0RIwSJ2DykSy%2B3Syti4mywMqgrnlAA3Vkyzf%2F8Z54hWAwZ4J54OD6SyDAUlbnfOTwYTLPex3h3jgJBLp2C%2F9Ym4J5D2lhs77boHTd5OPI%2BxYc6Q7TKLBAjJiWnPID0VGxNxy96M15E%2BKMPxa7NhhzlD%2B74N23vhhJ2K09Pf4RaqcvAPyAO9xa8Nd2tBkN8pb7mkLiWn4sMtqBbxNfH9ObiUlXwy4k%2Bm27Qjwj28dJMvPnWZ8P4jtm0KxWVYwg%2By6OFtqCOA0B%2BtipvwOvD3%2F8dL37zzwvtaUJnTZRf11ZzlP5%2FtlmZ%2B4AXOivrg%2ByDxKTIetUz3hBr9eRCyeFdagFzrRcedVPpvdMoc%2BL6YU6s4V6WHzTz06G8Pu6%2FSSYZoXQAqvgw9eTQaB2MuE5yYddSd6DqlXHJtMRBrPUliX8Ur1kPjk0OjKREeLGRvUWCckhsDJ9OsIEhRYbweCrlsSFKSTAc76uhW%2BHHqq9AbjLHq3K7UQI4zh0uqNzT2lkzyk5jwyIKML%2BMuMAGOqUBvFUvwILpbVrDRXg24Pwl1zQkYeFsYsJlW8eHKOYHZGtddr4doeP5E%2Fr0nmChvyquxqxWlr%2FiHcp%2BHV%2FNdRS2N9%2F6WKrTcZ%2FbQuaa0b2JxB6%2FfIUVz60SZxdMrKLcmlPMpFi2KMraUFB8X6CZ39w%2FokxtucaJslSy4fvIPTNexCoVYWlMZ%2F4270wlGyFeXP4Ee%2B2N5LW0KZl9zlcjDgFbDwJiZfLr&X-Amz-Signature=85cc704f38590fd71e894418b35d8cf120297633aed6a4cfa8baba6b4fbca181&X-Amz-SignedHeaders=host&x-id=GetObject)
