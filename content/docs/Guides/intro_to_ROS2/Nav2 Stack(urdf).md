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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673RFOKSN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbIV7Z%2B%2F7M89aXQmiVYUaZDpGI6TduuWVxTm4ZvvPV5gIgEF91YvTrBIlFf1rll2Nhyi0VXAPRIuTCDQZ7yAWm1MQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDAG1Xw7w%2Fpbvzu03YSrcA2T5HLQgPvnyDijbCX42wEADs%2FiQXMrEoMDE3vSqPxQ7tx3lRUYXp0Tofc67zcpFaBHfdQBYpi2J9lCiOJoBMzE1G0WnHBKZqA%2FdKWqwyNALpUbXc%2FwbWRs9xbl0nG1IFQ%2BBV%2FgK7zjLTOnL1OuRZers43SMeIFwV6l6UokT1hUWoIAxjEbkwYsPRhdpHCDpfnNHxlkAP0rOslVlRR2I%2B4PaUFsz3E78V9sEJJo79cKSTHnxXFoCqTbdQnUT8j1tftdbuPGFPNMxz5c1wCho2sRPIl7BV7nkiAwhRyq8bcMRo3ozBdoSBmkQokEckRPAVbkNmVzMHrZiz6VeHfMAXMKh5YtfzetruxNySvUTFnYQX8b%2BSKylfn0dByYm3nEdIsy%2FnHjVk2%2FZrVhHJxGHF%2F0PEM2OAdNopqrV4P2i4FM2DH9NonZfsR1t4kQjqNSEiEZUMlYn0g7ixFLkHhba3ZQsX4GlXodFOmc6ev3wxEXxwQS9kvxXFBxBo2SlWZ00vWouHm6k0J0E7URG0XEhGW28UkcpxTN%2BAPEUfQuvXoC2Dwh9eKPmF4Wm0rMAI2pAzwoqr6jNgKNzX22NZ%2BzsHrovWSx%2FcS70XF4bdM56lo5hwVKVwBff%2FGIVnsrXMOHAjsIGOqUBBlWSPDVjPNURngHMtc2P%2B8M%2BFgGrtsb4A6Lrl%2FneN66S2MZ5SuW%2B%2Fab36fPfex6sgykIsld6O2HLVr5kY%2BPSp3tilOdr6VLNDK3wrkcJevo5Cty2vuTbHPWjUgHkJjq5qimpcR7atPbS4dbf8%2FLVUaxxHFygMPkPBsPG%2FzhtPnrMndyQxlIABjUVHppM%2B0Ewos%2BmyvKqwGOE7SBujdT%2F%2Bqr0pqp4&X-Amz-Signature=b87c827d68c256cf03e0e07e19a544eb8e5c67176e573b743fffdbc667234bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673RFOKSN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbIV7Z%2B%2F7M89aXQmiVYUaZDpGI6TduuWVxTm4ZvvPV5gIgEF91YvTrBIlFf1rll2Nhyi0VXAPRIuTCDQZ7yAWm1MQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDAG1Xw7w%2Fpbvzu03YSrcA2T5HLQgPvnyDijbCX42wEADs%2FiQXMrEoMDE3vSqPxQ7tx3lRUYXp0Tofc67zcpFaBHfdQBYpi2J9lCiOJoBMzE1G0WnHBKZqA%2FdKWqwyNALpUbXc%2FwbWRs9xbl0nG1IFQ%2BBV%2FgK7zjLTOnL1OuRZers43SMeIFwV6l6UokT1hUWoIAxjEbkwYsPRhdpHCDpfnNHxlkAP0rOslVlRR2I%2B4PaUFsz3E78V9sEJJo79cKSTHnxXFoCqTbdQnUT8j1tftdbuPGFPNMxz5c1wCho2sRPIl7BV7nkiAwhRyq8bcMRo3ozBdoSBmkQokEckRPAVbkNmVzMHrZiz6VeHfMAXMKh5YtfzetruxNySvUTFnYQX8b%2BSKylfn0dByYm3nEdIsy%2FnHjVk2%2FZrVhHJxGHF%2F0PEM2OAdNopqrV4P2i4FM2DH9NonZfsR1t4kQjqNSEiEZUMlYn0g7ixFLkHhba3ZQsX4GlXodFOmc6ev3wxEXxwQS9kvxXFBxBo2SlWZ00vWouHm6k0J0E7URG0XEhGW28UkcpxTN%2BAPEUfQuvXoC2Dwh9eKPmF4Wm0rMAI2pAzwoqr6jNgKNzX22NZ%2BzsHrovWSx%2FcS70XF4bdM56lo5hwVKVwBff%2FGIVnsrXMOHAjsIGOqUBBlWSPDVjPNURngHMtc2P%2B8M%2BFgGrtsb4A6Lrl%2FneN66S2MZ5SuW%2B%2Fab36fPfex6sgykIsld6O2HLVr5kY%2BPSp3tilOdr6VLNDK3wrkcJevo5Cty2vuTbHPWjUgHkJjq5qimpcR7atPbS4dbf8%2FLVUaxxHFygMPkPBsPG%2FzhtPnrMndyQxlIABjUVHppM%2B0Ewos%2BmyvKqwGOE7SBujdT%2F%2Bqr0pqp4&X-Amz-Signature=07a43b4647e08643fbbe482b714ab3e4d77640542e5206482b0b61d2fab2e247&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673RFOKSN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbIV7Z%2B%2F7M89aXQmiVYUaZDpGI6TduuWVxTm4ZvvPV5gIgEF91YvTrBIlFf1rll2Nhyi0VXAPRIuTCDQZ7yAWm1MQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDAG1Xw7w%2Fpbvzu03YSrcA2T5HLQgPvnyDijbCX42wEADs%2FiQXMrEoMDE3vSqPxQ7tx3lRUYXp0Tofc67zcpFaBHfdQBYpi2J9lCiOJoBMzE1G0WnHBKZqA%2FdKWqwyNALpUbXc%2FwbWRs9xbl0nG1IFQ%2BBV%2FgK7zjLTOnL1OuRZers43SMeIFwV6l6UokT1hUWoIAxjEbkwYsPRhdpHCDpfnNHxlkAP0rOslVlRR2I%2B4PaUFsz3E78V9sEJJo79cKSTHnxXFoCqTbdQnUT8j1tftdbuPGFPNMxz5c1wCho2sRPIl7BV7nkiAwhRyq8bcMRo3ozBdoSBmkQokEckRPAVbkNmVzMHrZiz6VeHfMAXMKh5YtfzetruxNySvUTFnYQX8b%2BSKylfn0dByYm3nEdIsy%2FnHjVk2%2FZrVhHJxGHF%2F0PEM2OAdNopqrV4P2i4FM2DH9NonZfsR1t4kQjqNSEiEZUMlYn0g7ixFLkHhba3ZQsX4GlXodFOmc6ev3wxEXxwQS9kvxXFBxBo2SlWZ00vWouHm6k0J0E7URG0XEhGW28UkcpxTN%2BAPEUfQuvXoC2Dwh9eKPmF4Wm0rMAI2pAzwoqr6jNgKNzX22NZ%2BzsHrovWSx%2FcS70XF4bdM56lo5hwVKVwBff%2FGIVnsrXMOHAjsIGOqUBBlWSPDVjPNURngHMtc2P%2B8M%2BFgGrtsb4A6Lrl%2FneN66S2MZ5SuW%2B%2Fab36fPfex6sgykIsld6O2HLVr5kY%2BPSp3tilOdr6VLNDK3wrkcJevo5Cty2vuTbHPWjUgHkJjq5qimpcR7atPbS4dbf8%2FLVUaxxHFygMPkPBsPG%2FzhtPnrMndyQxlIABjUVHppM%2B0Ewos%2BmyvKqwGOE7SBujdT%2F%2Bqr0pqp4&X-Amz-Signature=7cb01b9d19a6bb0dd899b78170c45a0d95a9ed609035e06893af0d81799c5cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673RFOKSN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbIV7Z%2B%2F7M89aXQmiVYUaZDpGI6TduuWVxTm4ZvvPV5gIgEF91YvTrBIlFf1rll2Nhyi0VXAPRIuTCDQZ7yAWm1MQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDAG1Xw7w%2Fpbvzu03YSrcA2T5HLQgPvnyDijbCX42wEADs%2FiQXMrEoMDE3vSqPxQ7tx3lRUYXp0Tofc67zcpFaBHfdQBYpi2J9lCiOJoBMzE1G0WnHBKZqA%2FdKWqwyNALpUbXc%2FwbWRs9xbl0nG1IFQ%2BBV%2FgK7zjLTOnL1OuRZers43SMeIFwV6l6UokT1hUWoIAxjEbkwYsPRhdpHCDpfnNHxlkAP0rOslVlRR2I%2B4PaUFsz3E78V9sEJJo79cKSTHnxXFoCqTbdQnUT8j1tftdbuPGFPNMxz5c1wCho2sRPIl7BV7nkiAwhRyq8bcMRo3ozBdoSBmkQokEckRPAVbkNmVzMHrZiz6VeHfMAXMKh5YtfzetruxNySvUTFnYQX8b%2BSKylfn0dByYm3nEdIsy%2FnHjVk2%2FZrVhHJxGHF%2F0PEM2OAdNopqrV4P2i4FM2DH9NonZfsR1t4kQjqNSEiEZUMlYn0g7ixFLkHhba3ZQsX4GlXodFOmc6ev3wxEXxwQS9kvxXFBxBo2SlWZ00vWouHm6k0J0E7URG0XEhGW28UkcpxTN%2BAPEUfQuvXoC2Dwh9eKPmF4Wm0rMAI2pAzwoqr6jNgKNzX22NZ%2BzsHrovWSx%2FcS70XF4bdM56lo5hwVKVwBff%2FGIVnsrXMOHAjsIGOqUBBlWSPDVjPNURngHMtc2P%2B8M%2BFgGrtsb4A6Lrl%2FneN66S2MZ5SuW%2B%2Fab36fPfex6sgykIsld6O2HLVr5kY%2BPSp3tilOdr6VLNDK3wrkcJevo5Cty2vuTbHPWjUgHkJjq5qimpcR7atPbS4dbf8%2FLVUaxxHFygMPkPBsPG%2FzhtPnrMndyQxlIABjUVHppM%2B0Ewos%2BmyvKqwGOE7SBujdT%2F%2Bqr0pqp4&X-Amz-Signature=99b129c7eea8a2c51505142f25bf6815c5b225a0acc3123f02fee33c2272376e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673RFOKSN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbIV7Z%2B%2F7M89aXQmiVYUaZDpGI6TduuWVxTm4ZvvPV5gIgEF91YvTrBIlFf1rll2Nhyi0VXAPRIuTCDQZ7yAWm1MQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDAG1Xw7w%2Fpbvzu03YSrcA2T5HLQgPvnyDijbCX42wEADs%2FiQXMrEoMDE3vSqPxQ7tx3lRUYXp0Tofc67zcpFaBHfdQBYpi2J9lCiOJoBMzE1G0WnHBKZqA%2FdKWqwyNALpUbXc%2FwbWRs9xbl0nG1IFQ%2BBV%2FgK7zjLTOnL1OuRZers43SMeIFwV6l6UokT1hUWoIAxjEbkwYsPRhdpHCDpfnNHxlkAP0rOslVlRR2I%2B4PaUFsz3E78V9sEJJo79cKSTHnxXFoCqTbdQnUT8j1tftdbuPGFPNMxz5c1wCho2sRPIl7BV7nkiAwhRyq8bcMRo3ozBdoSBmkQokEckRPAVbkNmVzMHrZiz6VeHfMAXMKh5YtfzetruxNySvUTFnYQX8b%2BSKylfn0dByYm3nEdIsy%2FnHjVk2%2FZrVhHJxGHF%2F0PEM2OAdNopqrV4P2i4FM2DH9NonZfsR1t4kQjqNSEiEZUMlYn0g7ixFLkHhba3ZQsX4GlXodFOmc6ev3wxEXxwQS9kvxXFBxBo2SlWZ00vWouHm6k0J0E7URG0XEhGW28UkcpxTN%2BAPEUfQuvXoC2Dwh9eKPmF4Wm0rMAI2pAzwoqr6jNgKNzX22NZ%2BzsHrovWSx%2FcS70XF4bdM56lo5hwVKVwBff%2FGIVnsrXMOHAjsIGOqUBBlWSPDVjPNURngHMtc2P%2B8M%2BFgGrtsb4A6Lrl%2FneN66S2MZ5SuW%2B%2Fab36fPfex6sgykIsld6O2HLVr5kY%2BPSp3tilOdr6VLNDK3wrkcJevo5Cty2vuTbHPWjUgHkJjq5qimpcR7atPbS4dbf8%2FLVUaxxHFygMPkPBsPG%2FzhtPnrMndyQxlIABjUVHppM%2B0Ewos%2BmyvKqwGOE7SBujdT%2F%2Bqr0pqp4&X-Amz-Signature=dd4f681ea7ee3d48d2d1f76e9ae30c2aa0b809ae001d85e0dda73f338ec8075b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673RFOKSN%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbIV7Z%2B%2F7M89aXQmiVYUaZDpGI6TduuWVxTm4ZvvPV5gIgEF91YvTrBIlFf1rll2Nhyi0VXAPRIuTCDQZ7yAWm1MQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDAG1Xw7w%2Fpbvzu03YSrcA2T5HLQgPvnyDijbCX42wEADs%2FiQXMrEoMDE3vSqPxQ7tx3lRUYXp0Tofc67zcpFaBHfdQBYpi2J9lCiOJoBMzE1G0WnHBKZqA%2FdKWqwyNALpUbXc%2FwbWRs9xbl0nG1IFQ%2BBV%2FgK7zjLTOnL1OuRZers43SMeIFwV6l6UokT1hUWoIAxjEbkwYsPRhdpHCDpfnNHxlkAP0rOslVlRR2I%2B4PaUFsz3E78V9sEJJo79cKSTHnxXFoCqTbdQnUT8j1tftdbuPGFPNMxz5c1wCho2sRPIl7BV7nkiAwhRyq8bcMRo3ozBdoSBmkQokEckRPAVbkNmVzMHrZiz6VeHfMAXMKh5YtfzetruxNySvUTFnYQX8b%2BSKylfn0dByYm3nEdIsy%2FnHjVk2%2FZrVhHJxGHF%2F0PEM2OAdNopqrV4P2i4FM2DH9NonZfsR1t4kQjqNSEiEZUMlYn0g7ixFLkHhba3ZQsX4GlXodFOmc6ev3wxEXxwQS9kvxXFBxBo2SlWZ00vWouHm6k0J0E7URG0XEhGW28UkcpxTN%2BAPEUfQuvXoC2Dwh9eKPmF4Wm0rMAI2pAzwoqr6jNgKNzX22NZ%2BzsHrovWSx%2FcS70XF4bdM56lo5hwVKVwBff%2FGIVnsrXMOHAjsIGOqUBBlWSPDVjPNURngHMtc2P%2B8M%2BFgGrtsb4A6Lrl%2FneN66S2MZ5SuW%2B%2Fab36fPfex6sgykIsld6O2HLVr5kY%2BPSp3tilOdr6VLNDK3wrkcJevo5Cty2vuTbHPWjUgHkJjq5qimpcR7atPbS4dbf8%2FLVUaxxHFygMPkPBsPG%2FzhtPnrMndyQxlIABjUVHppM%2B0Ewos%2BmyvKqwGOE7SBujdT%2F%2Bqr0pqp4&X-Amz-Signature=a1542d974660f5f109e5a85384aac85740db65c9fbec5fb90384ac312b5f2fc9&X-Amz-SignedHeaders=host&x-id=GetObject)
