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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNDNWTW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDoZslro%2BX15fNZm7Bk%2F%2Fq3q9Fikf6rBltklM9UfjBrowIhAIRJ0qMHIyxzl2qDShJ7cbb5DH3WqjE8fmKZrn%2FHo8CrKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzekQymGpWBs6leo3Iq3ANBTrQWW0QcfEf1SQiu5dz%2Fwvuj8QoW1MSrgJLeYpFIEuCk4vD6cR%2Fm%2F2yVCCqAyTq%2F0R9dufbYV%2FRE6C43A6W%2F4GaRBgyFYGg5%2FHrRsHaIZ4lbUxFdFWqAuB6N9jajjksoVP8qRKksSLFo%2FIgR4PVQTfeTBium7nA%2FTQd3imzJNiNC8%2FggZDn52aRs9Eqa5txM0fm0N7USdDkmkmybtpaL3tEsYllBs8%2BWcJQ7feX2gTITBePgDN2gahrxzwsiExJZMRl%2FVFt4NZ0r8Nvy9cQdkI6oxQQCX4GkldQVqAxHUqeEHEkNq908EiLg5K9KZDehg3B6JOXEN2nReDLVewRpp6870OYNY4QFCd3kYS7QAU0%2BwvlmBRpUltim%2FuRLMLFC6%2FgozS%2FKOOHQtCvXyhiaRf0IQMmBhoCF3piyMgCeOOyeY5BL4I3nazXpmw7bg4UaWSViJCWtvpSIM6w8lkv8Qm6uv%2FWsaloobixdAEQbNqPAPPBv9SpxobO5l5%2FBv8mRPAA%2FQSYLCwBFeiHyvHAf0P60uBu2lxh5J3NzmcslDoigqmVYi5kPV8%2FUqr3HSlalS050%2BYj7aYBpU14AGd6C1X8%2BXX%2B6BlMsMLrb7EQffYJ6dw52Bkfp0a8ChzD8nYjBBjqkAcLKPMKVIXHVKfkADByKDZOH%2F4fkxP5xZ%2F5wZke76Lfvd2Tay1OXtf2xn0zuFsDQgaWWUi7DEfdbBw38WqIT41FNhNH06Z2YuIzwPZF%2FeWop46AtsZJo0VultZ1peroORdSmNH43mtrDsAEzLoKQeiCeNIaGGBmC59I6v4u2A2Nhn2AECVq9mSiRfQ5lFrcg1bg61rTECZwxp%2Bph0rCyIUAzEDwq&X-Amz-Signature=899d996b2efb5e476aaba0c5814f26726d41b2b821699be26fa6c8ae67877c80&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNDNWTW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDoZslro%2BX15fNZm7Bk%2F%2Fq3q9Fikf6rBltklM9UfjBrowIhAIRJ0qMHIyxzl2qDShJ7cbb5DH3WqjE8fmKZrn%2FHo8CrKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzekQymGpWBs6leo3Iq3ANBTrQWW0QcfEf1SQiu5dz%2Fwvuj8QoW1MSrgJLeYpFIEuCk4vD6cR%2Fm%2F2yVCCqAyTq%2F0R9dufbYV%2FRE6C43A6W%2F4GaRBgyFYGg5%2FHrRsHaIZ4lbUxFdFWqAuB6N9jajjksoVP8qRKksSLFo%2FIgR4PVQTfeTBium7nA%2FTQd3imzJNiNC8%2FggZDn52aRs9Eqa5txM0fm0N7USdDkmkmybtpaL3tEsYllBs8%2BWcJQ7feX2gTITBePgDN2gahrxzwsiExJZMRl%2FVFt4NZ0r8Nvy9cQdkI6oxQQCX4GkldQVqAxHUqeEHEkNq908EiLg5K9KZDehg3B6JOXEN2nReDLVewRpp6870OYNY4QFCd3kYS7QAU0%2BwvlmBRpUltim%2FuRLMLFC6%2FgozS%2FKOOHQtCvXyhiaRf0IQMmBhoCF3piyMgCeOOyeY5BL4I3nazXpmw7bg4UaWSViJCWtvpSIM6w8lkv8Qm6uv%2FWsaloobixdAEQbNqPAPPBv9SpxobO5l5%2FBv8mRPAA%2FQSYLCwBFeiHyvHAf0P60uBu2lxh5J3NzmcslDoigqmVYi5kPV8%2FUqr3HSlalS050%2BYj7aYBpU14AGd6C1X8%2BXX%2B6BlMsMLrb7EQffYJ6dw52Bkfp0a8ChzD8nYjBBjqkAcLKPMKVIXHVKfkADByKDZOH%2F4fkxP5xZ%2F5wZke76Lfvd2Tay1OXtf2xn0zuFsDQgaWWUi7DEfdbBw38WqIT41FNhNH06Z2YuIzwPZF%2FeWop46AtsZJo0VultZ1peroORdSmNH43mtrDsAEzLoKQeiCeNIaGGBmC59I6v4u2A2Nhn2AECVq9mSiRfQ5lFrcg1bg61rTECZwxp%2Bph0rCyIUAzEDwq&X-Amz-Signature=aa68e84e7d99929b18e0c30a2ba562d708e990eafd4ed21d9c132122e5f507fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNDNWTW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDoZslro%2BX15fNZm7Bk%2F%2Fq3q9Fikf6rBltklM9UfjBrowIhAIRJ0qMHIyxzl2qDShJ7cbb5DH3WqjE8fmKZrn%2FHo8CrKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzekQymGpWBs6leo3Iq3ANBTrQWW0QcfEf1SQiu5dz%2Fwvuj8QoW1MSrgJLeYpFIEuCk4vD6cR%2Fm%2F2yVCCqAyTq%2F0R9dufbYV%2FRE6C43A6W%2F4GaRBgyFYGg5%2FHrRsHaIZ4lbUxFdFWqAuB6N9jajjksoVP8qRKksSLFo%2FIgR4PVQTfeTBium7nA%2FTQd3imzJNiNC8%2FggZDn52aRs9Eqa5txM0fm0N7USdDkmkmybtpaL3tEsYllBs8%2BWcJQ7feX2gTITBePgDN2gahrxzwsiExJZMRl%2FVFt4NZ0r8Nvy9cQdkI6oxQQCX4GkldQVqAxHUqeEHEkNq908EiLg5K9KZDehg3B6JOXEN2nReDLVewRpp6870OYNY4QFCd3kYS7QAU0%2BwvlmBRpUltim%2FuRLMLFC6%2FgozS%2FKOOHQtCvXyhiaRf0IQMmBhoCF3piyMgCeOOyeY5BL4I3nazXpmw7bg4UaWSViJCWtvpSIM6w8lkv8Qm6uv%2FWsaloobixdAEQbNqPAPPBv9SpxobO5l5%2FBv8mRPAA%2FQSYLCwBFeiHyvHAf0P60uBu2lxh5J3NzmcslDoigqmVYi5kPV8%2FUqr3HSlalS050%2BYj7aYBpU14AGd6C1X8%2BXX%2B6BlMsMLrb7EQffYJ6dw52Bkfp0a8ChzD8nYjBBjqkAcLKPMKVIXHVKfkADByKDZOH%2F4fkxP5xZ%2F5wZke76Lfvd2Tay1OXtf2xn0zuFsDQgaWWUi7DEfdbBw38WqIT41FNhNH06Z2YuIzwPZF%2FeWop46AtsZJo0VultZ1peroORdSmNH43mtrDsAEzLoKQeiCeNIaGGBmC59I6v4u2A2Nhn2AECVq9mSiRfQ5lFrcg1bg61rTECZwxp%2Bph0rCyIUAzEDwq&X-Amz-Signature=190e54f633591e5117202f5680f1d9291d5e1a64a2684b7c1d3c3ce927846c07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNDNWTW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDoZslro%2BX15fNZm7Bk%2F%2Fq3q9Fikf6rBltklM9UfjBrowIhAIRJ0qMHIyxzl2qDShJ7cbb5DH3WqjE8fmKZrn%2FHo8CrKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzekQymGpWBs6leo3Iq3ANBTrQWW0QcfEf1SQiu5dz%2Fwvuj8QoW1MSrgJLeYpFIEuCk4vD6cR%2Fm%2F2yVCCqAyTq%2F0R9dufbYV%2FRE6C43A6W%2F4GaRBgyFYGg5%2FHrRsHaIZ4lbUxFdFWqAuB6N9jajjksoVP8qRKksSLFo%2FIgR4PVQTfeTBium7nA%2FTQd3imzJNiNC8%2FggZDn52aRs9Eqa5txM0fm0N7USdDkmkmybtpaL3tEsYllBs8%2BWcJQ7feX2gTITBePgDN2gahrxzwsiExJZMRl%2FVFt4NZ0r8Nvy9cQdkI6oxQQCX4GkldQVqAxHUqeEHEkNq908EiLg5K9KZDehg3B6JOXEN2nReDLVewRpp6870OYNY4QFCd3kYS7QAU0%2BwvlmBRpUltim%2FuRLMLFC6%2FgozS%2FKOOHQtCvXyhiaRf0IQMmBhoCF3piyMgCeOOyeY5BL4I3nazXpmw7bg4UaWSViJCWtvpSIM6w8lkv8Qm6uv%2FWsaloobixdAEQbNqPAPPBv9SpxobO5l5%2FBv8mRPAA%2FQSYLCwBFeiHyvHAf0P60uBu2lxh5J3NzmcslDoigqmVYi5kPV8%2FUqr3HSlalS050%2BYj7aYBpU14AGd6C1X8%2BXX%2B6BlMsMLrb7EQffYJ6dw52Bkfp0a8ChzD8nYjBBjqkAcLKPMKVIXHVKfkADByKDZOH%2F4fkxP5xZ%2F5wZke76Lfvd2Tay1OXtf2xn0zuFsDQgaWWUi7DEfdbBw38WqIT41FNhNH06Z2YuIzwPZF%2FeWop46AtsZJo0VultZ1peroORdSmNH43mtrDsAEzLoKQeiCeNIaGGBmC59I6v4u2A2Nhn2AECVq9mSiRfQ5lFrcg1bg61rTECZwxp%2Bph0rCyIUAzEDwq&X-Amz-Signature=d756b6378b2b818a99dea9607578ec744efc58a9e202ab360c7422d23045123a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNDNWTW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDoZslro%2BX15fNZm7Bk%2F%2Fq3q9Fikf6rBltklM9UfjBrowIhAIRJ0qMHIyxzl2qDShJ7cbb5DH3WqjE8fmKZrn%2FHo8CrKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzekQymGpWBs6leo3Iq3ANBTrQWW0QcfEf1SQiu5dz%2Fwvuj8QoW1MSrgJLeYpFIEuCk4vD6cR%2Fm%2F2yVCCqAyTq%2F0R9dufbYV%2FRE6C43A6W%2F4GaRBgyFYGg5%2FHrRsHaIZ4lbUxFdFWqAuB6N9jajjksoVP8qRKksSLFo%2FIgR4PVQTfeTBium7nA%2FTQd3imzJNiNC8%2FggZDn52aRs9Eqa5txM0fm0N7USdDkmkmybtpaL3tEsYllBs8%2BWcJQ7feX2gTITBePgDN2gahrxzwsiExJZMRl%2FVFt4NZ0r8Nvy9cQdkI6oxQQCX4GkldQVqAxHUqeEHEkNq908EiLg5K9KZDehg3B6JOXEN2nReDLVewRpp6870OYNY4QFCd3kYS7QAU0%2BwvlmBRpUltim%2FuRLMLFC6%2FgozS%2FKOOHQtCvXyhiaRf0IQMmBhoCF3piyMgCeOOyeY5BL4I3nazXpmw7bg4UaWSViJCWtvpSIM6w8lkv8Qm6uv%2FWsaloobixdAEQbNqPAPPBv9SpxobO5l5%2FBv8mRPAA%2FQSYLCwBFeiHyvHAf0P60uBu2lxh5J3NzmcslDoigqmVYi5kPV8%2FUqr3HSlalS050%2BYj7aYBpU14AGd6C1X8%2BXX%2B6BlMsMLrb7EQffYJ6dw52Bkfp0a8ChzD8nYjBBjqkAcLKPMKVIXHVKfkADByKDZOH%2F4fkxP5xZ%2F5wZke76Lfvd2Tay1OXtf2xn0zuFsDQgaWWUi7DEfdbBw38WqIT41FNhNH06Z2YuIzwPZF%2FeWop46AtsZJo0VultZ1peroORdSmNH43mtrDsAEzLoKQeiCeNIaGGBmC59I6v4u2A2Nhn2AECVq9mSiRfQ5lFrcg1bg61rTECZwxp%2Bph0rCyIUAzEDwq&X-Amz-Signature=674cd4dc6102a2d0552f2f9f1767499682e7445c56ad31df8caed9ef3f78760a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNDNWTW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T161112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDoZslro%2BX15fNZm7Bk%2F%2Fq3q9Fikf6rBltklM9UfjBrowIhAIRJ0qMHIyxzl2qDShJ7cbb5DH3WqjE8fmKZrn%2FHo8CrKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzekQymGpWBs6leo3Iq3ANBTrQWW0QcfEf1SQiu5dz%2Fwvuj8QoW1MSrgJLeYpFIEuCk4vD6cR%2Fm%2F2yVCCqAyTq%2F0R9dufbYV%2FRE6C43A6W%2F4GaRBgyFYGg5%2FHrRsHaIZ4lbUxFdFWqAuB6N9jajjksoVP8qRKksSLFo%2FIgR4PVQTfeTBium7nA%2FTQd3imzJNiNC8%2FggZDn52aRs9Eqa5txM0fm0N7USdDkmkmybtpaL3tEsYllBs8%2BWcJQ7feX2gTITBePgDN2gahrxzwsiExJZMRl%2FVFt4NZ0r8Nvy9cQdkI6oxQQCX4GkldQVqAxHUqeEHEkNq908EiLg5K9KZDehg3B6JOXEN2nReDLVewRpp6870OYNY4QFCd3kYS7QAU0%2BwvlmBRpUltim%2FuRLMLFC6%2FgozS%2FKOOHQtCvXyhiaRf0IQMmBhoCF3piyMgCeOOyeY5BL4I3nazXpmw7bg4UaWSViJCWtvpSIM6w8lkv8Qm6uv%2FWsaloobixdAEQbNqPAPPBv9SpxobO5l5%2FBv8mRPAA%2FQSYLCwBFeiHyvHAf0P60uBu2lxh5J3NzmcslDoigqmVYi5kPV8%2FUqr3HSlalS050%2BYj7aYBpU14AGd6C1X8%2BXX%2B6BlMsMLrb7EQffYJ6dw52Bkfp0a8ChzD8nYjBBjqkAcLKPMKVIXHVKfkADByKDZOH%2F4fkxP5xZ%2F5wZke76Lfvd2Tay1OXtf2xn0zuFsDQgaWWUi7DEfdbBw38WqIT41FNhNH06Z2YuIzwPZF%2FeWop46AtsZJo0VultZ1peroORdSmNH43mtrDsAEzLoKQeiCeNIaGGBmC59I6v4u2A2Nhn2AECVq9mSiRfQ5lFrcg1bg61rTECZwxp%2Bph0rCyIUAzEDwq&X-Amz-Signature=38d8bcb94da940e0f03cc3a5b2a0ece95a1d65cf0fdf8aa641cd92e85b94c582&X-Amz-SignedHeaders=host&x-id=GetObject)
