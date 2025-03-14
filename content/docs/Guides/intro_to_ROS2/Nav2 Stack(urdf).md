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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPA6HXLK%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsx5z2wS7Doqli62JdQe6XuwgcAz5pXByHl1WvMz0WfAiB1DpqM2kpBg%2Bdv2sOlgVJvmSzKlc0CFaNTLJFs7e4c5yqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcStl2WcNdycHlKeYKtwD5oeLd44i5wOZx2dlBz3lHMIc92U8p5KggLKmQYTF3fwrzwEQF1CvlpP3QxJXm57LKP1Lcbmk%2FKTDdlaXpcUYbvbkMpyK6NWsAG7QPhJVP%2BcI4cSk9MRhSsy1pDdmLMQc7ql5qaTLh%2BVfujLX5w3JfwIiDwXAXdQraRm19BfePvPjf1z%2Fy4ZWV1aMebnsTPEDHNIfaOG4VOIrjNVQEMvA5L9YPKagIozlE3hP7ZQVk0qfEUXvkeLwoH6Zi%2BvWQEFluzcrAjTJJQbSK%2B2KmAtKuUBmmZ9yCBvSu15FrZ9oECzOzyGPYXDU8bhKHh1e4PZIxmDIyxP5N8f4TYEXMrR4pjY3hwJkJXRbNfUf9s5hV9%2F70%2F3V%2FaNkWZGoQHVtQO774JZM55fPUYbthQNETvO1dnw%2FNLJReZIjWISTR%2B7INiwqt1Hhl6GP9NyqbCfIyEMeCUQ5Q1HaUAC2TXpCPC21mioUs%2F38OD8h%2FSD5CPhkJ5R3IrpEAyUVMrP%2BfyP2wthIoW0eT%2BLgUUSgFxQIMEl6jLwMn50bxxjRgc%2BIf71D7BuuzB8uJkRQLhjYai6XQQh10DyC%2BgqA0iAC9z%2FKSXlKk%2Ff%2FDwyGR%2BFgIa2yiMWh4miV8dLKKnwYu490aewwoK7OvgY6pgGWTwDuw3wDkq7paMfMr3cSX7WrFYdzlId%2FLrDvOAlZDWOtNu48B0K61Wp%2FZXxN8u6bQA3ofSpDq4Ci8VH3e3MUAqnCGnVN6CqASYA4V988w%2F2rHMFGiKMhR35ra1uwCqQe%2FyADwoo%2FwwIs%2B%2FPta3UIH4Nn5%2Fgt3BLNyqQ1ntz2st3MI9w9z0T4c0nb6eFbgC2Bj7h9j7oIPqZ8pppsMULvY2gPzqPH&X-Amz-Signature=aee5f541cc55d39ff9b40b2b3d3631646483e4fa8f3c34c3be328d2e8a6d6bae&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPA6HXLK%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsx5z2wS7Doqli62JdQe6XuwgcAz5pXByHl1WvMz0WfAiB1DpqM2kpBg%2Bdv2sOlgVJvmSzKlc0CFaNTLJFs7e4c5yqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcStl2WcNdycHlKeYKtwD5oeLd44i5wOZx2dlBz3lHMIc92U8p5KggLKmQYTF3fwrzwEQF1CvlpP3QxJXm57LKP1Lcbmk%2FKTDdlaXpcUYbvbkMpyK6NWsAG7QPhJVP%2BcI4cSk9MRhSsy1pDdmLMQc7ql5qaTLh%2BVfujLX5w3JfwIiDwXAXdQraRm19BfePvPjf1z%2Fy4ZWV1aMebnsTPEDHNIfaOG4VOIrjNVQEMvA5L9YPKagIozlE3hP7ZQVk0qfEUXvkeLwoH6Zi%2BvWQEFluzcrAjTJJQbSK%2B2KmAtKuUBmmZ9yCBvSu15FrZ9oECzOzyGPYXDU8bhKHh1e4PZIxmDIyxP5N8f4TYEXMrR4pjY3hwJkJXRbNfUf9s5hV9%2F70%2F3V%2FaNkWZGoQHVtQO774JZM55fPUYbthQNETvO1dnw%2FNLJReZIjWISTR%2B7INiwqt1Hhl6GP9NyqbCfIyEMeCUQ5Q1HaUAC2TXpCPC21mioUs%2F38OD8h%2FSD5CPhkJ5R3IrpEAyUVMrP%2BfyP2wthIoW0eT%2BLgUUSgFxQIMEl6jLwMn50bxxjRgc%2BIf71D7BuuzB8uJkRQLhjYai6XQQh10DyC%2BgqA0iAC9z%2FKSXlKk%2Ff%2FDwyGR%2BFgIa2yiMWh4miV8dLKKnwYu490aewwoK7OvgY6pgGWTwDuw3wDkq7paMfMr3cSX7WrFYdzlId%2FLrDvOAlZDWOtNu48B0K61Wp%2FZXxN8u6bQA3ofSpDq4Ci8VH3e3MUAqnCGnVN6CqASYA4V988w%2F2rHMFGiKMhR35ra1uwCqQe%2FyADwoo%2FwwIs%2B%2FPta3UIH4Nn5%2Fgt3BLNyqQ1ntz2st3MI9w9z0T4c0nb6eFbgC2Bj7h9j7oIPqZ8pppsMULvY2gPzqPH&X-Amz-Signature=641f040fc166f31568b9d5eb571ba6a3fafe3f807f42344c81ca4481cdfc43f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPA6HXLK%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsx5z2wS7Doqli62JdQe6XuwgcAz5pXByHl1WvMz0WfAiB1DpqM2kpBg%2Bdv2sOlgVJvmSzKlc0CFaNTLJFs7e4c5yqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcStl2WcNdycHlKeYKtwD5oeLd44i5wOZx2dlBz3lHMIc92U8p5KggLKmQYTF3fwrzwEQF1CvlpP3QxJXm57LKP1Lcbmk%2FKTDdlaXpcUYbvbkMpyK6NWsAG7QPhJVP%2BcI4cSk9MRhSsy1pDdmLMQc7ql5qaTLh%2BVfujLX5w3JfwIiDwXAXdQraRm19BfePvPjf1z%2Fy4ZWV1aMebnsTPEDHNIfaOG4VOIrjNVQEMvA5L9YPKagIozlE3hP7ZQVk0qfEUXvkeLwoH6Zi%2BvWQEFluzcrAjTJJQbSK%2B2KmAtKuUBmmZ9yCBvSu15FrZ9oECzOzyGPYXDU8bhKHh1e4PZIxmDIyxP5N8f4TYEXMrR4pjY3hwJkJXRbNfUf9s5hV9%2F70%2F3V%2FaNkWZGoQHVtQO774JZM55fPUYbthQNETvO1dnw%2FNLJReZIjWISTR%2B7INiwqt1Hhl6GP9NyqbCfIyEMeCUQ5Q1HaUAC2TXpCPC21mioUs%2F38OD8h%2FSD5CPhkJ5R3IrpEAyUVMrP%2BfyP2wthIoW0eT%2BLgUUSgFxQIMEl6jLwMn50bxxjRgc%2BIf71D7BuuzB8uJkRQLhjYai6XQQh10DyC%2BgqA0iAC9z%2FKSXlKk%2Ff%2FDwyGR%2BFgIa2yiMWh4miV8dLKKnwYu490aewwoK7OvgY6pgGWTwDuw3wDkq7paMfMr3cSX7WrFYdzlId%2FLrDvOAlZDWOtNu48B0K61Wp%2FZXxN8u6bQA3ofSpDq4Ci8VH3e3MUAqnCGnVN6CqASYA4V988w%2F2rHMFGiKMhR35ra1uwCqQe%2FyADwoo%2FwwIs%2B%2FPta3UIH4Nn5%2Fgt3BLNyqQ1ntz2st3MI9w9z0T4c0nb6eFbgC2Bj7h9j7oIPqZ8pppsMULvY2gPzqPH&X-Amz-Signature=0a5556e1e283dc795dc458cbfb2f0bbc326bd1a074365ccbad3fc4869675a538&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPA6HXLK%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsx5z2wS7Doqli62JdQe6XuwgcAz5pXByHl1WvMz0WfAiB1DpqM2kpBg%2Bdv2sOlgVJvmSzKlc0CFaNTLJFs7e4c5yqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcStl2WcNdycHlKeYKtwD5oeLd44i5wOZx2dlBz3lHMIc92U8p5KggLKmQYTF3fwrzwEQF1CvlpP3QxJXm57LKP1Lcbmk%2FKTDdlaXpcUYbvbkMpyK6NWsAG7QPhJVP%2BcI4cSk9MRhSsy1pDdmLMQc7ql5qaTLh%2BVfujLX5w3JfwIiDwXAXdQraRm19BfePvPjf1z%2Fy4ZWV1aMebnsTPEDHNIfaOG4VOIrjNVQEMvA5L9YPKagIozlE3hP7ZQVk0qfEUXvkeLwoH6Zi%2BvWQEFluzcrAjTJJQbSK%2B2KmAtKuUBmmZ9yCBvSu15FrZ9oECzOzyGPYXDU8bhKHh1e4PZIxmDIyxP5N8f4TYEXMrR4pjY3hwJkJXRbNfUf9s5hV9%2F70%2F3V%2FaNkWZGoQHVtQO774JZM55fPUYbthQNETvO1dnw%2FNLJReZIjWISTR%2B7INiwqt1Hhl6GP9NyqbCfIyEMeCUQ5Q1HaUAC2TXpCPC21mioUs%2F38OD8h%2FSD5CPhkJ5R3IrpEAyUVMrP%2BfyP2wthIoW0eT%2BLgUUSgFxQIMEl6jLwMn50bxxjRgc%2BIf71D7BuuzB8uJkRQLhjYai6XQQh10DyC%2BgqA0iAC9z%2FKSXlKk%2Ff%2FDwyGR%2BFgIa2yiMWh4miV8dLKKnwYu490aewwoK7OvgY6pgGWTwDuw3wDkq7paMfMr3cSX7WrFYdzlId%2FLrDvOAlZDWOtNu48B0K61Wp%2FZXxN8u6bQA3ofSpDq4Ci8VH3e3MUAqnCGnVN6CqASYA4V988w%2F2rHMFGiKMhR35ra1uwCqQe%2FyADwoo%2FwwIs%2B%2FPta3UIH4Nn5%2Fgt3BLNyqQ1ntz2st3MI9w9z0T4c0nb6eFbgC2Bj7h9j7oIPqZ8pppsMULvY2gPzqPH&X-Amz-Signature=604aede3ae487bd25803202982abff603357fca56221987a41a42eb5f33f64b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPA6HXLK%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsx5z2wS7Doqli62JdQe6XuwgcAz5pXByHl1WvMz0WfAiB1DpqM2kpBg%2Bdv2sOlgVJvmSzKlc0CFaNTLJFs7e4c5yqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcStl2WcNdycHlKeYKtwD5oeLd44i5wOZx2dlBz3lHMIc92U8p5KggLKmQYTF3fwrzwEQF1CvlpP3QxJXm57LKP1Lcbmk%2FKTDdlaXpcUYbvbkMpyK6NWsAG7QPhJVP%2BcI4cSk9MRhSsy1pDdmLMQc7ql5qaTLh%2BVfujLX5w3JfwIiDwXAXdQraRm19BfePvPjf1z%2Fy4ZWV1aMebnsTPEDHNIfaOG4VOIrjNVQEMvA5L9YPKagIozlE3hP7ZQVk0qfEUXvkeLwoH6Zi%2BvWQEFluzcrAjTJJQbSK%2B2KmAtKuUBmmZ9yCBvSu15FrZ9oECzOzyGPYXDU8bhKHh1e4PZIxmDIyxP5N8f4TYEXMrR4pjY3hwJkJXRbNfUf9s5hV9%2F70%2F3V%2FaNkWZGoQHVtQO774JZM55fPUYbthQNETvO1dnw%2FNLJReZIjWISTR%2B7INiwqt1Hhl6GP9NyqbCfIyEMeCUQ5Q1HaUAC2TXpCPC21mioUs%2F38OD8h%2FSD5CPhkJ5R3IrpEAyUVMrP%2BfyP2wthIoW0eT%2BLgUUSgFxQIMEl6jLwMn50bxxjRgc%2BIf71D7BuuzB8uJkRQLhjYai6XQQh10DyC%2BgqA0iAC9z%2FKSXlKk%2Ff%2FDwyGR%2BFgIa2yiMWh4miV8dLKKnwYu490aewwoK7OvgY6pgGWTwDuw3wDkq7paMfMr3cSX7WrFYdzlId%2FLrDvOAlZDWOtNu48B0K61Wp%2FZXxN8u6bQA3ofSpDq4Ci8VH3e3MUAqnCGnVN6CqASYA4V988w%2F2rHMFGiKMhR35ra1uwCqQe%2FyADwoo%2FwwIs%2B%2FPta3UIH4Nn5%2Fgt3BLNyqQ1ntz2st3MI9w9z0T4c0nb6eFbgC2Bj7h9j7oIPqZ8pppsMULvY2gPzqPH&X-Amz-Signature=3d4253c0003c3979f7fe455c543470c96c61d6b7a0ea8049c1a16f4d78713c94&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPA6HXLK%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T031949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsx5z2wS7Doqli62JdQe6XuwgcAz5pXByHl1WvMz0WfAiB1DpqM2kpBg%2Bdv2sOlgVJvmSzKlc0CFaNTLJFs7e4c5yqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcStl2WcNdycHlKeYKtwD5oeLd44i5wOZx2dlBz3lHMIc92U8p5KggLKmQYTF3fwrzwEQF1CvlpP3QxJXm57LKP1Lcbmk%2FKTDdlaXpcUYbvbkMpyK6NWsAG7QPhJVP%2BcI4cSk9MRhSsy1pDdmLMQc7ql5qaTLh%2BVfujLX5w3JfwIiDwXAXdQraRm19BfePvPjf1z%2Fy4ZWV1aMebnsTPEDHNIfaOG4VOIrjNVQEMvA5L9YPKagIozlE3hP7ZQVk0qfEUXvkeLwoH6Zi%2BvWQEFluzcrAjTJJQbSK%2B2KmAtKuUBmmZ9yCBvSu15FrZ9oECzOzyGPYXDU8bhKHh1e4PZIxmDIyxP5N8f4TYEXMrR4pjY3hwJkJXRbNfUf9s5hV9%2F70%2F3V%2FaNkWZGoQHVtQO774JZM55fPUYbthQNETvO1dnw%2FNLJReZIjWISTR%2B7INiwqt1Hhl6GP9NyqbCfIyEMeCUQ5Q1HaUAC2TXpCPC21mioUs%2F38OD8h%2FSD5CPhkJ5R3IrpEAyUVMrP%2BfyP2wthIoW0eT%2BLgUUSgFxQIMEl6jLwMn50bxxjRgc%2BIf71D7BuuzB8uJkRQLhjYai6XQQh10DyC%2BgqA0iAC9z%2FKSXlKk%2Ff%2FDwyGR%2BFgIa2yiMWh4miV8dLKKnwYu490aewwoK7OvgY6pgGWTwDuw3wDkq7paMfMr3cSX7WrFYdzlId%2FLrDvOAlZDWOtNu48B0K61Wp%2FZXxN8u6bQA3ofSpDq4Ci8VH3e3MUAqnCGnVN6CqASYA4V988w%2F2rHMFGiKMhR35ra1uwCqQe%2FyADwoo%2FwwIs%2B%2FPta3UIH4Nn5%2Fgt3BLNyqQ1ntz2st3MI9w9z0T4c0nb6eFbgC2Bj7h9j7oIPqZ8pppsMULvY2gPzqPH&X-Amz-Signature=5f833284d6f175e246b2ad5970be19305fa26e850185c529b093ad4759435fa9&X-Amz-SignedHeaders=host&x-id=GetObject)
