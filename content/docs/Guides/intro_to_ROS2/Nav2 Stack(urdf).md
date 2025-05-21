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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MCGBKX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuMPyC2zHah7L9k6a%2Fh%2BarEtvXwb9NnTO2WhKt8VBMuQIhAI9w%2FlnE894cQpYbTNiaN52WoRlhzP%2FPWy%2F3DwvZr46aKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQExYFFU0VdS%2Fipgcq3ANffJwqiP4XoTahomKzq4dBGTIvSNLq9SAat7PQfYgRUMO%2FUR5f4jD0qrU5nD17Jk9Ing%2F0R31fKWIZGyzPaoVvKOTytKX%2B5yLIVDS48dRqTAaiyAiNt3SGfdWYsR0XtVhoqv7w0ZB4A%2FNQmC4qWyyd9yKc14I%2FATy%2FCntQHGdCS5QL0w6OvrYlCNt5Aw34sACa6AyXF4%2FVow34InWZcfGVp0Ky%2BOFxxeyCsJeYCHwUGF1sByTUNuLxmPKz9VmZLrGl%2FZppdY5FfYoX4QeQYErpzxrE%2FusONNk2bdtBNnzqiPKR6vL%2F4W0uI6AIl8E9t7lB5qwSRJ7Idl4Sy4iWAaCNPVYnTK%2Bvml67jkOUAMVYkWJOamEuF0q7ZNfuEWIe8AHAQrOZ5ZIYNdZsfVJrWlW6HbT6xPnuQU2aUV%2FVcBaOhal8Wi0cMFTuo0IhMjaZXYkfEASGY3iFj6YKBESR10OSgYU%2BK%2FjPZSsldMOHzdpaFbbJ1Othco25S9oL0SHVLYbLPAIRjTAfoFVubZ2c6QAdiMhpMn0kMFO5cAPh5x4GhTK6PK8NssFAeU6UyBWBIXdfmQeXrJc%2FbnuJdYjYaFqivXL%2BxrRUVaCkQnboA%2B2oAsH9cWQPHNfuPtgN1DCNr7XBBjqkAeWWsdLzX26W87x9zKtVtIQlzkLn%2Bem9qE%2FvI9uPz8E0e1dXITcRotkaN68eOqmubWN9pWCNivE18uD8IoATMzgfw9geoBrwgbj93RXPH8q4GWccRtfCzfnTXiDUmVydFGddk7nB9dsSC9sloLqfgSSziwtMNjuH4ONwGaBewDOLLY%2BpeII8PK1IsWWjJ0nXDKj9hT%2FHuOjmYic1xDxxeE9BIjty&X-Amz-Signature=0fe92059a8e76cea1df58a64f4d9688b5f0a8d0422517f2e7851d79061457476&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MCGBKX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuMPyC2zHah7L9k6a%2Fh%2BarEtvXwb9NnTO2WhKt8VBMuQIhAI9w%2FlnE894cQpYbTNiaN52WoRlhzP%2FPWy%2F3DwvZr46aKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQExYFFU0VdS%2Fipgcq3ANffJwqiP4XoTahomKzq4dBGTIvSNLq9SAat7PQfYgRUMO%2FUR5f4jD0qrU5nD17Jk9Ing%2F0R31fKWIZGyzPaoVvKOTytKX%2B5yLIVDS48dRqTAaiyAiNt3SGfdWYsR0XtVhoqv7w0ZB4A%2FNQmC4qWyyd9yKc14I%2FATy%2FCntQHGdCS5QL0w6OvrYlCNt5Aw34sACa6AyXF4%2FVow34InWZcfGVp0Ky%2BOFxxeyCsJeYCHwUGF1sByTUNuLxmPKz9VmZLrGl%2FZppdY5FfYoX4QeQYErpzxrE%2FusONNk2bdtBNnzqiPKR6vL%2F4W0uI6AIl8E9t7lB5qwSRJ7Idl4Sy4iWAaCNPVYnTK%2Bvml67jkOUAMVYkWJOamEuF0q7ZNfuEWIe8AHAQrOZ5ZIYNdZsfVJrWlW6HbT6xPnuQU2aUV%2FVcBaOhal8Wi0cMFTuo0IhMjaZXYkfEASGY3iFj6YKBESR10OSgYU%2BK%2FjPZSsldMOHzdpaFbbJ1Othco25S9oL0SHVLYbLPAIRjTAfoFVubZ2c6QAdiMhpMn0kMFO5cAPh5x4GhTK6PK8NssFAeU6UyBWBIXdfmQeXrJc%2FbnuJdYjYaFqivXL%2BxrRUVaCkQnboA%2B2oAsH9cWQPHNfuPtgN1DCNr7XBBjqkAeWWsdLzX26W87x9zKtVtIQlzkLn%2Bem9qE%2FvI9uPz8E0e1dXITcRotkaN68eOqmubWN9pWCNivE18uD8IoATMzgfw9geoBrwgbj93RXPH8q4GWccRtfCzfnTXiDUmVydFGddk7nB9dsSC9sloLqfgSSziwtMNjuH4ONwGaBewDOLLY%2BpeII8PK1IsWWjJ0nXDKj9hT%2FHuOjmYic1xDxxeE9BIjty&X-Amz-Signature=fbe02e0386a954f101548dd94bde09afc2943be78a4959921b1e1ee1d88cc102&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MCGBKX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuMPyC2zHah7L9k6a%2Fh%2BarEtvXwb9NnTO2WhKt8VBMuQIhAI9w%2FlnE894cQpYbTNiaN52WoRlhzP%2FPWy%2F3DwvZr46aKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQExYFFU0VdS%2Fipgcq3ANffJwqiP4XoTahomKzq4dBGTIvSNLq9SAat7PQfYgRUMO%2FUR5f4jD0qrU5nD17Jk9Ing%2F0R31fKWIZGyzPaoVvKOTytKX%2B5yLIVDS48dRqTAaiyAiNt3SGfdWYsR0XtVhoqv7w0ZB4A%2FNQmC4qWyyd9yKc14I%2FATy%2FCntQHGdCS5QL0w6OvrYlCNt5Aw34sACa6AyXF4%2FVow34InWZcfGVp0Ky%2BOFxxeyCsJeYCHwUGF1sByTUNuLxmPKz9VmZLrGl%2FZppdY5FfYoX4QeQYErpzxrE%2FusONNk2bdtBNnzqiPKR6vL%2F4W0uI6AIl8E9t7lB5qwSRJ7Idl4Sy4iWAaCNPVYnTK%2Bvml67jkOUAMVYkWJOamEuF0q7ZNfuEWIe8AHAQrOZ5ZIYNdZsfVJrWlW6HbT6xPnuQU2aUV%2FVcBaOhal8Wi0cMFTuo0IhMjaZXYkfEASGY3iFj6YKBESR10OSgYU%2BK%2FjPZSsldMOHzdpaFbbJ1Othco25S9oL0SHVLYbLPAIRjTAfoFVubZ2c6QAdiMhpMn0kMFO5cAPh5x4GhTK6PK8NssFAeU6UyBWBIXdfmQeXrJc%2FbnuJdYjYaFqivXL%2BxrRUVaCkQnboA%2B2oAsH9cWQPHNfuPtgN1DCNr7XBBjqkAeWWsdLzX26W87x9zKtVtIQlzkLn%2Bem9qE%2FvI9uPz8E0e1dXITcRotkaN68eOqmubWN9pWCNivE18uD8IoATMzgfw9geoBrwgbj93RXPH8q4GWccRtfCzfnTXiDUmVydFGddk7nB9dsSC9sloLqfgSSziwtMNjuH4ONwGaBewDOLLY%2BpeII8PK1IsWWjJ0nXDKj9hT%2FHuOjmYic1xDxxeE9BIjty&X-Amz-Signature=28c7b567e98f8791fc89ed8291ef7aee4a60c04736ae88b00f3f9370c1b715e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MCGBKX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuMPyC2zHah7L9k6a%2Fh%2BarEtvXwb9NnTO2WhKt8VBMuQIhAI9w%2FlnE894cQpYbTNiaN52WoRlhzP%2FPWy%2F3DwvZr46aKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQExYFFU0VdS%2Fipgcq3ANffJwqiP4XoTahomKzq4dBGTIvSNLq9SAat7PQfYgRUMO%2FUR5f4jD0qrU5nD17Jk9Ing%2F0R31fKWIZGyzPaoVvKOTytKX%2B5yLIVDS48dRqTAaiyAiNt3SGfdWYsR0XtVhoqv7w0ZB4A%2FNQmC4qWyyd9yKc14I%2FATy%2FCntQHGdCS5QL0w6OvrYlCNt5Aw34sACa6AyXF4%2FVow34InWZcfGVp0Ky%2BOFxxeyCsJeYCHwUGF1sByTUNuLxmPKz9VmZLrGl%2FZppdY5FfYoX4QeQYErpzxrE%2FusONNk2bdtBNnzqiPKR6vL%2F4W0uI6AIl8E9t7lB5qwSRJ7Idl4Sy4iWAaCNPVYnTK%2Bvml67jkOUAMVYkWJOamEuF0q7ZNfuEWIe8AHAQrOZ5ZIYNdZsfVJrWlW6HbT6xPnuQU2aUV%2FVcBaOhal8Wi0cMFTuo0IhMjaZXYkfEASGY3iFj6YKBESR10OSgYU%2BK%2FjPZSsldMOHzdpaFbbJ1Othco25S9oL0SHVLYbLPAIRjTAfoFVubZ2c6QAdiMhpMn0kMFO5cAPh5x4GhTK6PK8NssFAeU6UyBWBIXdfmQeXrJc%2FbnuJdYjYaFqivXL%2BxrRUVaCkQnboA%2B2oAsH9cWQPHNfuPtgN1DCNr7XBBjqkAeWWsdLzX26W87x9zKtVtIQlzkLn%2Bem9qE%2FvI9uPz8E0e1dXITcRotkaN68eOqmubWN9pWCNivE18uD8IoATMzgfw9geoBrwgbj93RXPH8q4GWccRtfCzfnTXiDUmVydFGddk7nB9dsSC9sloLqfgSSziwtMNjuH4ONwGaBewDOLLY%2BpeII8PK1IsWWjJ0nXDKj9hT%2FHuOjmYic1xDxxeE9BIjty&X-Amz-Signature=f0ddd85b3e3d64cfd011889b1f357c4f911f6b1858f89b718286ab20851e9c10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MCGBKX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuMPyC2zHah7L9k6a%2Fh%2BarEtvXwb9NnTO2WhKt8VBMuQIhAI9w%2FlnE894cQpYbTNiaN52WoRlhzP%2FPWy%2F3DwvZr46aKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQExYFFU0VdS%2Fipgcq3ANffJwqiP4XoTahomKzq4dBGTIvSNLq9SAat7PQfYgRUMO%2FUR5f4jD0qrU5nD17Jk9Ing%2F0R31fKWIZGyzPaoVvKOTytKX%2B5yLIVDS48dRqTAaiyAiNt3SGfdWYsR0XtVhoqv7w0ZB4A%2FNQmC4qWyyd9yKc14I%2FATy%2FCntQHGdCS5QL0w6OvrYlCNt5Aw34sACa6AyXF4%2FVow34InWZcfGVp0Ky%2BOFxxeyCsJeYCHwUGF1sByTUNuLxmPKz9VmZLrGl%2FZppdY5FfYoX4QeQYErpzxrE%2FusONNk2bdtBNnzqiPKR6vL%2F4W0uI6AIl8E9t7lB5qwSRJ7Idl4Sy4iWAaCNPVYnTK%2Bvml67jkOUAMVYkWJOamEuF0q7ZNfuEWIe8AHAQrOZ5ZIYNdZsfVJrWlW6HbT6xPnuQU2aUV%2FVcBaOhal8Wi0cMFTuo0IhMjaZXYkfEASGY3iFj6YKBESR10OSgYU%2BK%2FjPZSsldMOHzdpaFbbJ1Othco25S9oL0SHVLYbLPAIRjTAfoFVubZ2c6QAdiMhpMn0kMFO5cAPh5x4GhTK6PK8NssFAeU6UyBWBIXdfmQeXrJc%2FbnuJdYjYaFqivXL%2BxrRUVaCkQnboA%2B2oAsH9cWQPHNfuPtgN1DCNr7XBBjqkAeWWsdLzX26W87x9zKtVtIQlzkLn%2Bem9qE%2FvI9uPz8E0e1dXITcRotkaN68eOqmubWN9pWCNivE18uD8IoATMzgfw9geoBrwgbj93RXPH8q4GWccRtfCzfnTXiDUmVydFGddk7nB9dsSC9sloLqfgSSziwtMNjuH4ONwGaBewDOLLY%2BpeII8PK1IsWWjJ0nXDKj9hT%2FHuOjmYic1xDxxeE9BIjty&X-Amz-Signature=c16c78ab75d1a5179410ff069c98090c502f7dbeceea73c60703dafac7de36f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5MCGBKX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuMPyC2zHah7L9k6a%2Fh%2BarEtvXwb9NnTO2WhKt8VBMuQIhAI9w%2FlnE894cQpYbTNiaN52WoRlhzP%2FPWy%2F3DwvZr46aKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQExYFFU0VdS%2Fipgcq3ANffJwqiP4XoTahomKzq4dBGTIvSNLq9SAat7PQfYgRUMO%2FUR5f4jD0qrU5nD17Jk9Ing%2F0R31fKWIZGyzPaoVvKOTytKX%2B5yLIVDS48dRqTAaiyAiNt3SGfdWYsR0XtVhoqv7w0ZB4A%2FNQmC4qWyyd9yKc14I%2FATy%2FCntQHGdCS5QL0w6OvrYlCNt5Aw34sACa6AyXF4%2FVow34InWZcfGVp0Ky%2BOFxxeyCsJeYCHwUGF1sByTUNuLxmPKz9VmZLrGl%2FZppdY5FfYoX4QeQYErpzxrE%2FusONNk2bdtBNnzqiPKR6vL%2F4W0uI6AIl8E9t7lB5qwSRJ7Idl4Sy4iWAaCNPVYnTK%2Bvml67jkOUAMVYkWJOamEuF0q7ZNfuEWIe8AHAQrOZ5ZIYNdZsfVJrWlW6HbT6xPnuQU2aUV%2FVcBaOhal8Wi0cMFTuo0IhMjaZXYkfEASGY3iFj6YKBESR10OSgYU%2BK%2FjPZSsldMOHzdpaFbbJ1Othco25S9oL0SHVLYbLPAIRjTAfoFVubZ2c6QAdiMhpMn0kMFO5cAPh5x4GhTK6PK8NssFAeU6UyBWBIXdfmQeXrJc%2FbnuJdYjYaFqivXL%2BxrRUVaCkQnboA%2B2oAsH9cWQPHNfuPtgN1DCNr7XBBjqkAeWWsdLzX26W87x9zKtVtIQlzkLn%2Bem9qE%2FvI9uPz8E0e1dXITcRotkaN68eOqmubWN9pWCNivE18uD8IoATMzgfw9geoBrwgbj93RXPH8q4GWccRtfCzfnTXiDUmVydFGddk7nB9dsSC9sloLqfgSSziwtMNjuH4ONwGaBewDOLLY%2BpeII8PK1IsWWjJ0nXDKj9hT%2FHuOjmYic1xDxxeE9BIjty&X-Amz-Signature=77c15b4c30741b33f0066893d554e7eeb8a7640cddf022f29cb969be6571ab7d&X-Amz-SignedHeaders=host&x-id=GetObject)
