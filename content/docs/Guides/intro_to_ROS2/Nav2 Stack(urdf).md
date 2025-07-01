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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGIJLCLO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEubuTcW4oPRg6HhKv8to8mkPOBE8ykfl76ocZkeK4jHAiAqU7t%2B%2FC991BCmWHt%2FqNzTYx95cILC4jq9v5EJyOTVOCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMklgDkkVj6Osneq%2BvKtwDz2rXKp1DpGzKwhcoXIDQ55i8lBGXGELdQ3WSAnEKNmQRGqiEBQxqWmNbD6LUmkmnfGoSP6le3aNNDXVLFCWzNNyWAj3Pf8yHRcromM6mKAqdXTu9lVGEq0gTFH6ask0iCOBZtGOdsURTjtowiiwPRUEjF4xoqF21hG9gAoxW61fWVGD947bybF0zzdYKMCqWBEX33nTgceO9R0EemIJaMbe0vzyuQsQtbhnrXp6mEyHCzMyTQk0wTLDWnQqN3o%2BvHaQcigUpoK3venzM0EnGu748jW4yi4ztpwQqG7pC3hVudxUHkPqtnLWtwzbrEjfntD3UvyDGbNfrE5emvtJWO3Bmw1xlUhn8%2BsDVr70jjk9gt%2Fz6VXQOb415j%2FVgmaZonm26ztLrq3xQ3ZvPj795ehgxtjcEVIG2SP48sDWrze%2FNEZJ%2FBTXiw4a%2FQ8raXCrmBewWwT2t6Czpq4HLPhJyouY1apuNtsnUdXZ8fFKkHmy9DHBnGTL%2BByjTpRwaMcctpXc2TVhlO13jNyCizJ3rPmaF4ww1dBEwXcGr1CjVuYPm1E1t0wvUxFWmFmE3rCUnkfMGtpKqKa%2Bc6EQdjoiqGE0NjFKet7kk97aZ9r89cDbhrXNlSXSPjLt9YPIwg%2FmQwwY6pgG1as5XopM1tBOOROzVLvQNQUp1DySTEAle3DbOR%2FOdidx1pbAanIy7nHURxl0ulK95MSBvnFgU%2BZlTA3ntYN8ajl5NT7ZCNoisBgKexAxki0Hckpr2NmXf9K3%2FZppj1qU7%2F8NCdfY5jclMusu49oqGvKNTTxIqLPSTWI3jflXHJbcA2vi9n2U3e3h9r4APSJ6w5%2BCi16oNxvpZvKFyfdzFfafuzqLN&X-Amz-Signature=ea9a999d81b308e9a98763abd39394ba92e2741ac7a420357ee8250f1a84bf51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGIJLCLO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEubuTcW4oPRg6HhKv8to8mkPOBE8ykfl76ocZkeK4jHAiAqU7t%2B%2FC991BCmWHt%2FqNzTYx95cILC4jq9v5EJyOTVOCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMklgDkkVj6Osneq%2BvKtwDz2rXKp1DpGzKwhcoXIDQ55i8lBGXGELdQ3WSAnEKNmQRGqiEBQxqWmNbD6LUmkmnfGoSP6le3aNNDXVLFCWzNNyWAj3Pf8yHRcromM6mKAqdXTu9lVGEq0gTFH6ask0iCOBZtGOdsURTjtowiiwPRUEjF4xoqF21hG9gAoxW61fWVGD947bybF0zzdYKMCqWBEX33nTgceO9R0EemIJaMbe0vzyuQsQtbhnrXp6mEyHCzMyTQk0wTLDWnQqN3o%2BvHaQcigUpoK3venzM0EnGu748jW4yi4ztpwQqG7pC3hVudxUHkPqtnLWtwzbrEjfntD3UvyDGbNfrE5emvtJWO3Bmw1xlUhn8%2BsDVr70jjk9gt%2Fz6VXQOb415j%2FVgmaZonm26ztLrq3xQ3ZvPj795ehgxtjcEVIG2SP48sDWrze%2FNEZJ%2FBTXiw4a%2FQ8raXCrmBewWwT2t6Czpq4HLPhJyouY1apuNtsnUdXZ8fFKkHmy9DHBnGTL%2BByjTpRwaMcctpXc2TVhlO13jNyCizJ3rPmaF4ww1dBEwXcGr1CjVuYPm1E1t0wvUxFWmFmE3rCUnkfMGtpKqKa%2Bc6EQdjoiqGE0NjFKet7kk97aZ9r89cDbhrXNlSXSPjLt9YPIwg%2FmQwwY6pgG1as5XopM1tBOOROzVLvQNQUp1DySTEAle3DbOR%2FOdidx1pbAanIy7nHURxl0ulK95MSBvnFgU%2BZlTA3ntYN8ajl5NT7ZCNoisBgKexAxki0Hckpr2NmXf9K3%2FZppj1qU7%2F8NCdfY5jclMusu49oqGvKNTTxIqLPSTWI3jflXHJbcA2vi9n2U3e3h9r4APSJ6w5%2BCi16oNxvpZvKFyfdzFfafuzqLN&X-Amz-Signature=d2a70f7dfa6b5e7dc2e0653bdddde529d7ebf769a32500436e3754cf573f6ad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGIJLCLO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEubuTcW4oPRg6HhKv8to8mkPOBE8ykfl76ocZkeK4jHAiAqU7t%2B%2FC991BCmWHt%2FqNzTYx95cILC4jq9v5EJyOTVOCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMklgDkkVj6Osneq%2BvKtwDz2rXKp1DpGzKwhcoXIDQ55i8lBGXGELdQ3WSAnEKNmQRGqiEBQxqWmNbD6LUmkmnfGoSP6le3aNNDXVLFCWzNNyWAj3Pf8yHRcromM6mKAqdXTu9lVGEq0gTFH6ask0iCOBZtGOdsURTjtowiiwPRUEjF4xoqF21hG9gAoxW61fWVGD947bybF0zzdYKMCqWBEX33nTgceO9R0EemIJaMbe0vzyuQsQtbhnrXp6mEyHCzMyTQk0wTLDWnQqN3o%2BvHaQcigUpoK3venzM0EnGu748jW4yi4ztpwQqG7pC3hVudxUHkPqtnLWtwzbrEjfntD3UvyDGbNfrE5emvtJWO3Bmw1xlUhn8%2BsDVr70jjk9gt%2Fz6VXQOb415j%2FVgmaZonm26ztLrq3xQ3ZvPj795ehgxtjcEVIG2SP48sDWrze%2FNEZJ%2FBTXiw4a%2FQ8raXCrmBewWwT2t6Czpq4HLPhJyouY1apuNtsnUdXZ8fFKkHmy9DHBnGTL%2BByjTpRwaMcctpXc2TVhlO13jNyCizJ3rPmaF4ww1dBEwXcGr1CjVuYPm1E1t0wvUxFWmFmE3rCUnkfMGtpKqKa%2Bc6EQdjoiqGE0NjFKet7kk97aZ9r89cDbhrXNlSXSPjLt9YPIwg%2FmQwwY6pgG1as5XopM1tBOOROzVLvQNQUp1DySTEAle3DbOR%2FOdidx1pbAanIy7nHURxl0ulK95MSBvnFgU%2BZlTA3ntYN8ajl5NT7ZCNoisBgKexAxki0Hckpr2NmXf9K3%2FZppj1qU7%2F8NCdfY5jclMusu49oqGvKNTTxIqLPSTWI3jflXHJbcA2vi9n2U3e3h9r4APSJ6w5%2BCi16oNxvpZvKFyfdzFfafuzqLN&X-Amz-Signature=e68a86f2ad3fdbef5e761a4fb8d8b42d8a07a16832289c81647a3ffedf2220d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGIJLCLO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEubuTcW4oPRg6HhKv8to8mkPOBE8ykfl76ocZkeK4jHAiAqU7t%2B%2FC991BCmWHt%2FqNzTYx95cILC4jq9v5EJyOTVOCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMklgDkkVj6Osneq%2BvKtwDz2rXKp1DpGzKwhcoXIDQ55i8lBGXGELdQ3WSAnEKNmQRGqiEBQxqWmNbD6LUmkmnfGoSP6le3aNNDXVLFCWzNNyWAj3Pf8yHRcromM6mKAqdXTu9lVGEq0gTFH6ask0iCOBZtGOdsURTjtowiiwPRUEjF4xoqF21hG9gAoxW61fWVGD947bybF0zzdYKMCqWBEX33nTgceO9R0EemIJaMbe0vzyuQsQtbhnrXp6mEyHCzMyTQk0wTLDWnQqN3o%2BvHaQcigUpoK3venzM0EnGu748jW4yi4ztpwQqG7pC3hVudxUHkPqtnLWtwzbrEjfntD3UvyDGbNfrE5emvtJWO3Bmw1xlUhn8%2BsDVr70jjk9gt%2Fz6VXQOb415j%2FVgmaZonm26ztLrq3xQ3ZvPj795ehgxtjcEVIG2SP48sDWrze%2FNEZJ%2FBTXiw4a%2FQ8raXCrmBewWwT2t6Czpq4HLPhJyouY1apuNtsnUdXZ8fFKkHmy9DHBnGTL%2BByjTpRwaMcctpXc2TVhlO13jNyCizJ3rPmaF4ww1dBEwXcGr1CjVuYPm1E1t0wvUxFWmFmE3rCUnkfMGtpKqKa%2Bc6EQdjoiqGE0NjFKet7kk97aZ9r89cDbhrXNlSXSPjLt9YPIwg%2FmQwwY6pgG1as5XopM1tBOOROzVLvQNQUp1DySTEAle3DbOR%2FOdidx1pbAanIy7nHURxl0ulK95MSBvnFgU%2BZlTA3ntYN8ajl5NT7ZCNoisBgKexAxki0Hckpr2NmXf9K3%2FZppj1qU7%2F8NCdfY5jclMusu49oqGvKNTTxIqLPSTWI3jflXHJbcA2vi9n2U3e3h9r4APSJ6w5%2BCi16oNxvpZvKFyfdzFfafuzqLN&X-Amz-Signature=561f70a04b13e7d9f4157fed8c496a501e1f8bfd3a6cfe4a1f083fea25860d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGIJLCLO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEubuTcW4oPRg6HhKv8to8mkPOBE8ykfl76ocZkeK4jHAiAqU7t%2B%2FC991BCmWHt%2FqNzTYx95cILC4jq9v5EJyOTVOCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMklgDkkVj6Osneq%2BvKtwDz2rXKp1DpGzKwhcoXIDQ55i8lBGXGELdQ3WSAnEKNmQRGqiEBQxqWmNbD6LUmkmnfGoSP6le3aNNDXVLFCWzNNyWAj3Pf8yHRcromM6mKAqdXTu9lVGEq0gTFH6ask0iCOBZtGOdsURTjtowiiwPRUEjF4xoqF21hG9gAoxW61fWVGD947bybF0zzdYKMCqWBEX33nTgceO9R0EemIJaMbe0vzyuQsQtbhnrXp6mEyHCzMyTQk0wTLDWnQqN3o%2BvHaQcigUpoK3venzM0EnGu748jW4yi4ztpwQqG7pC3hVudxUHkPqtnLWtwzbrEjfntD3UvyDGbNfrE5emvtJWO3Bmw1xlUhn8%2BsDVr70jjk9gt%2Fz6VXQOb415j%2FVgmaZonm26ztLrq3xQ3ZvPj795ehgxtjcEVIG2SP48sDWrze%2FNEZJ%2FBTXiw4a%2FQ8raXCrmBewWwT2t6Czpq4HLPhJyouY1apuNtsnUdXZ8fFKkHmy9DHBnGTL%2BByjTpRwaMcctpXc2TVhlO13jNyCizJ3rPmaF4ww1dBEwXcGr1CjVuYPm1E1t0wvUxFWmFmE3rCUnkfMGtpKqKa%2Bc6EQdjoiqGE0NjFKet7kk97aZ9r89cDbhrXNlSXSPjLt9YPIwg%2FmQwwY6pgG1as5XopM1tBOOROzVLvQNQUp1DySTEAle3DbOR%2FOdidx1pbAanIy7nHURxl0ulK95MSBvnFgU%2BZlTA3ntYN8ajl5NT7ZCNoisBgKexAxki0Hckpr2NmXf9K3%2FZppj1qU7%2F8NCdfY5jclMusu49oqGvKNTTxIqLPSTWI3jflXHJbcA2vi9n2U3e3h9r4APSJ6w5%2BCi16oNxvpZvKFyfdzFfafuzqLN&X-Amz-Signature=d2d064a1897eda1e2abeb3b672db3bff2c656779fdd894cb4c6dac3febb1fb17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGIJLCLO%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEubuTcW4oPRg6HhKv8to8mkPOBE8ykfl76ocZkeK4jHAiAqU7t%2B%2FC991BCmWHt%2FqNzTYx95cILC4jq9v5EJyOTVOCqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMklgDkkVj6Osneq%2BvKtwDz2rXKp1DpGzKwhcoXIDQ55i8lBGXGELdQ3WSAnEKNmQRGqiEBQxqWmNbD6LUmkmnfGoSP6le3aNNDXVLFCWzNNyWAj3Pf8yHRcromM6mKAqdXTu9lVGEq0gTFH6ask0iCOBZtGOdsURTjtowiiwPRUEjF4xoqF21hG9gAoxW61fWVGD947bybF0zzdYKMCqWBEX33nTgceO9R0EemIJaMbe0vzyuQsQtbhnrXp6mEyHCzMyTQk0wTLDWnQqN3o%2BvHaQcigUpoK3venzM0EnGu748jW4yi4ztpwQqG7pC3hVudxUHkPqtnLWtwzbrEjfntD3UvyDGbNfrE5emvtJWO3Bmw1xlUhn8%2BsDVr70jjk9gt%2Fz6VXQOb415j%2FVgmaZonm26ztLrq3xQ3ZvPj795ehgxtjcEVIG2SP48sDWrze%2FNEZJ%2FBTXiw4a%2FQ8raXCrmBewWwT2t6Czpq4HLPhJyouY1apuNtsnUdXZ8fFKkHmy9DHBnGTL%2BByjTpRwaMcctpXc2TVhlO13jNyCizJ3rPmaF4ww1dBEwXcGr1CjVuYPm1E1t0wvUxFWmFmE3rCUnkfMGtpKqKa%2Bc6EQdjoiqGE0NjFKet7kk97aZ9r89cDbhrXNlSXSPjLt9YPIwg%2FmQwwY6pgG1as5XopM1tBOOROzVLvQNQUp1DySTEAle3DbOR%2FOdidx1pbAanIy7nHURxl0ulK95MSBvnFgU%2BZlTA3ntYN8ajl5NT7ZCNoisBgKexAxki0Hckpr2NmXf9K3%2FZppj1qU7%2F8NCdfY5jclMusu49oqGvKNTTxIqLPSTWI3jflXHJbcA2vi9n2U3e3h9r4APSJ6w5%2BCi16oNxvpZvKFyfdzFfafuzqLN&X-Amz-Signature=3db88742915c584afb09e1c56a0f0159529172f985bcd24e7668b466044bc02b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
