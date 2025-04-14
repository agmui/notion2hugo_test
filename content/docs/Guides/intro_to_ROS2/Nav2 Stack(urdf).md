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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUE7VUD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSxqw93XYvRk5CZFsROEdPZH7lqUOw%2B7%2F5eRyOhoRjRwIgJ1hTtdubKvrlT%2BBcvum8WC27hDc6PqBZnkUS%2BeRzPPQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDEPFSeQ5%2BNDMuGUhfCrcA9WX%2BqqqkYO9FrDfJ8OcLQgKCjpe5NeoOJyMMu75gZvCHWORag28Dhhd7EEi9SEwryiiPUBwPz%2BohDWZlczD%2F098oc3BcH50ShsRMmbS644VjlWd4D0qyB9ZW1ula8o8%2BFJ5%2FsJIjGJiTuMSvFJYRGuzyQZnFx5atkcDEqg4A8RtVEpy4GlHJEII3QKydwbdDlpsImwxg5mR4MMsYJqK4DLJ63YGdjE7mufGofo6yoSJPXHxDnwcFXYIo2%2BLiPhg8CiOd2akpRFWXKzctncZAwI9P%2FRjP88eDI9J6BrPX28SAwslFwFTBYIXvMUxNi4OEm4pB%2FlzLbKRt%2BUQAGEvEjfUGctsqVQDwzIg%2BPtezx%2BT9Cf2AUdRBk3hjnon1IuYbNbDy%2Fq%2FI4T%2BwD81GUEFrgLKfvZSHHdkk3CiGDCjLseoq9ClbM1iHhS3rWu5s4nl1vUhiFpxFHQ56t8ZDSEuANaZLFWV2d172MS029KRoXM3OE%2FUGuSE1yBNr%2FKRyCvfGh6ZTUxLQfCcYSwA%2BCTElksAA4FndXe%2FmH%2FszNBGVK8i1mfWnlcKBUCqFTVjzt54%2BJiRBJBL1GXoW46%2F2%2F1UHHjGwG4Niu%2FPMrD7sgBgo5o6TmrlLfU3UvhkofwxMNjc9L8GOqUBGOOe5hnWCIDUrBqiGX8P9H2DRHWGq29fwVRyakbqN5HITStd4%2FnCSltLihvNmYLHwVEUhtCrMo7M3xd8t1kbmp5%2BtYJqEmlGIhlc428h5uQv3nqUzXu1%2BH8ILw3GckhZZoK3J3z1IK0ETWpVTNXE%2Bh8IqHO%2BG8t5baDMrx9Oav65d7daT%2F2tnUBf%2Fi46DqjANkKMSwKuXHpK3xN7LmwY3fEmp8MF&X-Amz-Signature=cb2e25c413f3fcfd452d9791f168769d72d99bda663ab935d533cb251ba61876&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUE7VUD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSxqw93XYvRk5CZFsROEdPZH7lqUOw%2B7%2F5eRyOhoRjRwIgJ1hTtdubKvrlT%2BBcvum8WC27hDc6PqBZnkUS%2BeRzPPQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDEPFSeQ5%2BNDMuGUhfCrcA9WX%2BqqqkYO9FrDfJ8OcLQgKCjpe5NeoOJyMMu75gZvCHWORag28Dhhd7EEi9SEwryiiPUBwPz%2BohDWZlczD%2F098oc3BcH50ShsRMmbS644VjlWd4D0qyB9ZW1ula8o8%2BFJ5%2FsJIjGJiTuMSvFJYRGuzyQZnFx5atkcDEqg4A8RtVEpy4GlHJEII3QKydwbdDlpsImwxg5mR4MMsYJqK4DLJ63YGdjE7mufGofo6yoSJPXHxDnwcFXYIo2%2BLiPhg8CiOd2akpRFWXKzctncZAwI9P%2FRjP88eDI9J6BrPX28SAwslFwFTBYIXvMUxNi4OEm4pB%2FlzLbKRt%2BUQAGEvEjfUGctsqVQDwzIg%2BPtezx%2BT9Cf2AUdRBk3hjnon1IuYbNbDy%2Fq%2FI4T%2BwD81GUEFrgLKfvZSHHdkk3CiGDCjLseoq9ClbM1iHhS3rWu5s4nl1vUhiFpxFHQ56t8ZDSEuANaZLFWV2d172MS029KRoXM3OE%2FUGuSE1yBNr%2FKRyCvfGh6ZTUxLQfCcYSwA%2BCTElksAA4FndXe%2FmH%2FszNBGVK8i1mfWnlcKBUCqFTVjzt54%2BJiRBJBL1GXoW46%2F2%2F1UHHjGwG4Niu%2FPMrD7sgBgo5o6TmrlLfU3UvhkofwxMNjc9L8GOqUBGOOe5hnWCIDUrBqiGX8P9H2DRHWGq29fwVRyakbqN5HITStd4%2FnCSltLihvNmYLHwVEUhtCrMo7M3xd8t1kbmp5%2BtYJqEmlGIhlc428h5uQv3nqUzXu1%2BH8ILw3GckhZZoK3J3z1IK0ETWpVTNXE%2Bh8IqHO%2BG8t5baDMrx9Oav65d7daT%2F2tnUBf%2Fi46DqjANkKMSwKuXHpK3xN7LmwY3fEmp8MF&X-Amz-Signature=db32d0058efff1949e98964ac3f5464a58b211d5725cc3b163771f7a9ca9ab9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUE7VUD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSxqw93XYvRk5CZFsROEdPZH7lqUOw%2B7%2F5eRyOhoRjRwIgJ1hTtdubKvrlT%2BBcvum8WC27hDc6PqBZnkUS%2BeRzPPQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDEPFSeQ5%2BNDMuGUhfCrcA9WX%2BqqqkYO9FrDfJ8OcLQgKCjpe5NeoOJyMMu75gZvCHWORag28Dhhd7EEi9SEwryiiPUBwPz%2BohDWZlczD%2F098oc3BcH50ShsRMmbS644VjlWd4D0qyB9ZW1ula8o8%2BFJ5%2FsJIjGJiTuMSvFJYRGuzyQZnFx5atkcDEqg4A8RtVEpy4GlHJEII3QKydwbdDlpsImwxg5mR4MMsYJqK4DLJ63YGdjE7mufGofo6yoSJPXHxDnwcFXYIo2%2BLiPhg8CiOd2akpRFWXKzctncZAwI9P%2FRjP88eDI9J6BrPX28SAwslFwFTBYIXvMUxNi4OEm4pB%2FlzLbKRt%2BUQAGEvEjfUGctsqVQDwzIg%2BPtezx%2BT9Cf2AUdRBk3hjnon1IuYbNbDy%2Fq%2FI4T%2BwD81GUEFrgLKfvZSHHdkk3CiGDCjLseoq9ClbM1iHhS3rWu5s4nl1vUhiFpxFHQ56t8ZDSEuANaZLFWV2d172MS029KRoXM3OE%2FUGuSE1yBNr%2FKRyCvfGh6ZTUxLQfCcYSwA%2BCTElksAA4FndXe%2FmH%2FszNBGVK8i1mfWnlcKBUCqFTVjzt54%2BJiRBJBL1GXoW46%2F2%2F1UHHjGwG4Niu%2FPMrD7sgBgo5o6TmrlLfU3UvhkofwxMNjc9L8GOqUBGOOe5hnWCIDUrBqiGX8P9H2DRHWGq29fwVRyakbqN5HITStd4%2FnCSltLihvNmYLHwVEUhtCrMo7M3xd8t1kbmp5%2BtYJqEmlGIhlc428h5uQv3nqUzXu1%2BH8ILw3GckhZZoK3J3z1IK0ETWpVTNXE%2Bh8IqHO%2BG8t5baDMrx9Oav65d7daT%2F2tnUBf%2Fi46DqjANkKMSwKuXHpK3xN7LmwY3fEmp8MF&X-Amz-Signature=89990802deb40d5387e084fbe541bdfbf20fa41a8ac5fae552f1ad03762b7b94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUE7VUD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSxqw93XYvRk5CZFsROEdPZH7lqUOw%2B7%2F5eRyOhoRjRwIgJ1hTtdubKvrlT%2BBcvum8WC27hDc6PqBZnkUS%2BeRzPPQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDEPFSeQ5%2BNDMuGUhfCrcA9WX%2BqqqkYO9FrDfJ8OcLQgKCjpe5NeoOJyMMu75gZvCHWORag28Dhhd7EEi9SEwryiiPUBwPz%2BohDWZlczD%2F098oc3BcH50ShsRMmbS644VjlWd4D0qyB9ZW1ula8o8%2BFJ5%2FsJIjGJiTuMSvFJYRGuzyQZnFx5atkcDEqg4A8RtVEpy4GlHJEII3QKydwbdDlpsImwxg5mR4MMsYJqK4DLJ63YGdjE7mufGofo6yoSJPXHxDnwcFXYIo2%2BLiPhg8CiOd2akpRFWXKzctncZAwI9P%2FRjP88eDI9J6BrPX28SAwslFwFTBYIXvMUxNi4OEm4pB%2FlzLbKRt%2BUQAGEvEjfUGctsqVQDwzIg%2BPtezx%2BT9Cf2AUdRBk3hjnon1IuYbNbDy%2Fq%2FI4T%2BwD81GUEFrgLKfvZSHHdkk3CiGDCjLseoq9ClbM1iHhS3rWu5s4nl1vUhiFpxFHQ56t8ZDSEuANaZLFWV2d172MS029KRoXM3OE%2FUGuSE1yBNr%2FKRyCvfGh6ZTUxLQfCcYSwA%2BCTElksAA4FndXe%2FmH%2FszNBGVK8i1mfWnlcKBUCqFTVjzt54%2BJiRBJBL1GXoW46%2F2%2F1UHHjGwG4Niu%2FPMrD7sgBgo5o6TmrlLfU3UvhkofwxMNjc9L8GOqUBGOOe5hnWCIDUrBqiGX8P9H2DRHWGq29fwVRyakbqN5HITStd4%2FnCSltLihvNmYLHwVEUhtCrMo7M3xd8t1kbmp5%2BtYJqEmlGIhlc428h5uQv3nqUzXu1%2BH8ILw3GckhZZoK3J3z1IK0ETWpVTNXE%2Bh8IqHO%2BG8t5baDMrx9Oav65d7daT%2F2tnUBf%2Fi46DqjANkKMSwKuXHpK3xN7LmwY3fEmp8MF&X-Amz-Signature=b73e97ce4b04c957ba41c38e3744154b9ad1678ca5bc05fce4340d8083ba3778&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUE7VUD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSxqw93XYvRk5CZFsROEdPZH7lqUOw%2B7%2F5eRyOhoRjRwIgJ1hTtdubKvrlT%2BBcvum8WC27hDc6PqBZnkUS%2BeRzPPQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDEPFSeQ5%2BNDMuGUhfCrcA9WX%2BqqqkYO9FrDfJ8OcLQgKCjpe5NeoOJyMMu75gZvCHWORag28Dhhd7EEi9SEwryiiPUBwPz%2BohDWZlczD%2F098oc3BcH50ShsRMmbS644VjlWd4D0qyB9ZW1ula8o8%2BFJ5%2FsJIjGJiTuMSvFJYRGuzyQZnFx5atkcDEqg4A8RtVEpy4GlHJEII3QKydwbdDlpsImwxg5mR4MMsYJqK4DLJ63YGdjE7mufGofo6yoSJPXHxDnwcFXYIo2%2BLiPhg8CiOd2akpRFWXKzctncZAwI9P%2FRjP88eDI9J6BrPX28SAwslFwFTBYIXvMUxNi4OEm4pB%2FlzLbKRt%2BUQAGEvEjfUGctsqVQDwzIg%2BPtezx%2BT9Cf2AUdRBk3hjnon1IuYbNbDy%2Fq%2FI4T%2BwD81GUEFrgLKfvZSHHdkk3CiGDCjLseoq9ClbM1iHhS3rWu5s4nl1vUhiFpxFHQ56t8ZDSEuANaZLFWV2d172MS029KRoXM3OE%2FUGuSE1yBNr%2FKRyCvfGh6ZTUxLQfCcYSwA%2BCTElksAA4FndXe%2FmH%2FszNBGVK8i1mfWnlcKBUCqFTVjzt54%2BJiRBJBL1GXoW46%2F2%2F1UHHjGwG4Niu%2FPMrD7sgBgo5o6TmrlLfU3UvhkofwxMNjc9L8GOqUBGOOe5hnWCIDUrBqiGX8P9H2DRHWGq29fwVRyakbqN5HITStd4%2FnCSltLihvNmYLHwVEUhtCrMo7M3xd8t1kbmp5%2BtYJqEmlGIhlc428h5uQv3nqUzXu1%2BH8ILw3GckhZZoK3J3z1IK0ETWpVTNXE%2Bh8IqHO%2BG8t5baDMrx9Oav65d7daT%2F2tnUBf%2Fi46DqjANkKMSwKuXHpK3xN7LmwY3fEmp8MF&X-Amz-Signature=9ce2ddddac0d9c2fdb48bd99a8ce369f3b716370986591b8b2af5f4afe6533a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUE7VUD%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T161034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSxqw93XYvRk5CZFsROEdPZH7lqUOw%2B7%2F5eRyOhoRjRwIgJ1hTtdubKvrlT%2BBcvum8WC27hDc6PqBZnkUS%2BeRzPPQq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDEPFSeQ5%2BNDMuGUhfCrcA9WX%2BqqqkYO9FrDfJ8OcLQgKCjpe5NeoOJyMMu75gZvCHWORag28Dhhd7EEi9SEwryiiPUBwPz%2BohDWZlczD%2F098oc3BcH50ShsRMmbS644VjlWd4D0qyB9ZW1ula8o8%2BFJ5%2FsJIjGJiTuMSvFJYRGuzyQZnFx5atkcDEqg4A8RtVEpy4GlHJEII3QKydwbdDlpsImwxg5mR4MMsYJqK4DLJ63YGdjE7mufGofo6yoSJPXHxDnwcFXYIo2%2BLiPhg8CiOd2akpRFWXKzctncZAwI9P%2FRjP88eDI9J6BrPX28SAwslFwFTBYIXvMUxNi4OEm4pB%2FlzLbKRt%2BUQAGEvEjfUGctsqVQDwzIg%2BPtezx%2BT9Cf2AUdRBk3hjnon1IuYbNbDy%2Fq%2FI4T%2BwD81GUEFrgLKfvZSHHdkk3CiGDCjLseoq9ClbM1iHhS3rWu5s4nl1vUhiFpxFHQ56t8ZDSEuANaZLFWV2d172MS029KRoXM3OE%2FUGuSE1yBNr%2FKRyCvfGh6ZTUxLQfCcYSwA%2BCTElksAA4FndXe%2FmH%2FszNBGVK8i1mfWnlcKBUCqFTVjzt54%2BJiRBJBL1GXoW46%2F2%2F1UHHjGwG4Niu%2FPMrD7sgBgo5o6TmrlLfU3UvhkofwxMNjc9L8GOqUBGOOe5hnWCIDUrBqiGX8P9H2DRHWGq29fwVRyakbqN5HITStd4%2FnCSltLihvNmYLHwVEUhtCrMo7M3xd8t1kbmp5%2BtYJqEmlGIhlc428h5uQv3nqUzXu1%2BH8ILw3GckhZZoK3J3z1IK0ETWpVTNXE%2Bh8IqHO%2BG8t5baDMrx9Oav65d7daT%2F2tnUBf%2Fi46DqjANkKMSwKuXHpK3xN7LmwY3fEmp8MF&X-Amz-Signature=aa5dfb01a2d681df91cbd2d1a9c984a53c9bb1fb731abf40dd82623bd2fa4537&X-Amz-SignedHeaders=host&x-id=GetObject)
