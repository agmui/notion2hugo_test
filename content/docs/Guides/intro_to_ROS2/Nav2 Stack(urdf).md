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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGVSCJRC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3VCzPTRTbdEL7K5avmb81wHMFRO%2BEO5q7h7Dv9sSq5gIhAKrtArO8t%2BTvgwT0au%2B2mVCsupTXTgj2vdQjwVOq%2BfxLKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyDcQmKAVZ5TWZ63kq3AOYwLIRYgAXALMIC8eXkpjngC3mTmOYj%2F%2FNjQEMSYUDWR4lwRc%2BfUAgyX976vtrih7sXMd7UkVbnNuDCDYmVUbrYqxn%2BsZzqNhT8E8uqEBcrAADYEmaNLJR58VYLzRhWffcvV3T7RDvGimjL4kTMe3wbc4uQxqsgxTfeuROkQgKxth06%2FATdChMeBJL120ne1HXOo66qVTCBXCsH6imZQTbI6J2YgdLkEKQPLPmX5h%2FAzpgCH%2FRTmC5JJx3NTVPsJItnN%2BG2nDM8QzCSnWmi5MbTRfiG3tAnYSOPb4JU8eaJWn4dsY6zJiZOxWeJ3F5C9mIVBDsSTgvhXZ0Cnjr2qDBBMoQg60QMDnOyiy9D3HvnV2lWpkMNe8%2FcvI8YDV7DlxJJ9KkBMlYflYKzP%2FVm92hNE99W6JlSsw4tfxOHmJ9fLm9xuMktqNqma6jAW3fYiAwhd86TDoW61TBei1Qa7RHmC%2BjmC7z1XLutJNIO7tzMGdSEGpacKKt8Mar9ABvvIgCZjbG28DWcdfov23%2FSd8TAmA6VgGJCLE1QqIdvOhgHaI2VwlFGFzF8H%2FRJ4BWmjwyHRTglQtbLKow9xnm7W5Oyg5KOXiLJZlTU6VNQlQB4FM8%2FGbgJ0EoAKhLYjDIs5bCBjqkAeTK7jvAI9SRMMDJJh44taSlGMh%2BiZJdC6Rl8UVSjxLx9aYU%2B3KeGPsx8IfnlKwI3yXPQ8l8joLj4K2Tbgb9Jt3TJewtJxHZKcvWKWgsdEm3vzdSsiTc9mhdpx6XL1Ctns7Nntg2pXCHDsuKXSWx%2FQh%2FZPq%2BAZ90pXAKiCfTVEpuFLXC9RokJu%2BFqsLfPISN3vbmKQ5n0QDitjwx5Dgap3hayxxh&X-Amz-Signature=b8058808fca183fde6b5b799a3643bd913d9fd26a6fa637938d5ba5077d5bda8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGVSCJRC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3VCzPTRTbdEL7K5avmb81wHMFRO%2BEO5q7h7Dv9sSq5gIhAKrtArO8t%2BTvgwT0au%2B2mVCsupTXTgj2vdQjwVOq%2BfxLKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyDcQmKAVZ5TWZ63kq3AOYwLIRYgAXALMIC8eXkpjngC3mTmOYj%2F%2FNjQEMSYUDWR4lwRc%2BfUAgyX976vtrih7sXMd7UkVbnNuDCDYmVUbrYqxn%2BsZzqNhT8E8uqEBcrAADYEmaNLJR58VYLzRhWffcvV3T7RDvGimjL4kTMe3wbc4uQxqsgxTfeuROkQgKxth06%2FATdChMeBJL120ne1HXOo66qVTCBXCsH6imZQTbI6J2YgdLkEKQPLPmX5h%2FAzpgCH%2FRTmC5JJx3NTVPsJItnN%2BG2nDM8QzCSnWmi5MbTRfiG3tAnYSOPb4JU8eaJWn4dsY6zJiZOxWeJ3F5C9mIVBDsSTgvhXZ0Cnjr2qDBBMoQg60QMDnOyiy9D3HvnV2lWpkMNe8%2FcvI8YDV7DlxJJ9KkBMlYflYKzP%2FVm92hNE99W6JlSsw4tfxOHmJ9fLm9xuMktqNqma6jAW3fYiAwhd86TDoW61TBei1Qa7RHmC%2BjmC7z1XLutJNIO7tzMGdSEGpacKKt8Mar9ABvvIgCZjbG28DWcdfov23%2FSd8TAmA6VgGJCLE1QqIdvOhgHaI2VwlFGFzF8H%2FRJ4BWmjwyHRTglQtbLKow9xnm7W5Oyg5KOXiLJZlTU6VNQlQB4FM8%2FGbgJ0EoAKhLYjDIs5bCBjqkAeTK7jvAI9SRMMDJJh44taSlGMh%2BiZJdC6Rl8UVSjxLx9aYU%2B3KeGPsx8IfnlKwI3yXPQ8l8joLj4K2Tbgb9Jt3TJewtJxHZKcvWKWgsdEm3vzdSsiTc9mhdpx6XL1Ctns7Nntg2pXCHDsuKXSWx%2FQh%2FZPq%2BAZ90pXAKiCfTVEpuFLXC9RokJu%2BFqsLfPISN3vbmKQ5n0QDitjwx5Dgap3hayxxh&X-Amz-Signature=d55081c6d63f36499e12f8327a125a96a804e0b9c2abb662b9e9c879f0f75465&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGVSCJRC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3VCzPTRTbdEL7K5avmb81wHMFRO%2BEO5q7h7Dv9sSq5gIhAKrtArO8t%2BTvgwT0au%2B2mVCsupTXTgj2vdQjwVOq%2BfxLKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyDcQmKAVZ5TWZ63kq3AOYwLIRYgAXALMIC8eXkpjngC3mTmOYj%2F%2FNjQEMSYUDWR4lwRc%2BfUAgyX976vtrih7sXMd7UkVbnNuDCDYmVUbrYqxn%2BsZzqNhT8E8uqEBcrAADYEmaNLJR58VYLzRhWffcvV3T7RDvGimjL4kTMe3wbc4uQxqsgxTfeuROkQgKxth06%2FATdChMeBJL120ne1HXOo66qVTCBXCsH6imZQTbI6J2YgdLkEKQPLPmX5h%2FAzpgCH%2FRTmC5JJx3NTVPsJItnN%2BG2nDM8QzCSnWmi5MbTRfiG3tAnYSOPb4JU8eaJWn4dsY6zJiZOxWeJ3F5C9mIVBDsSTgvhXZ0Cnjr2qDBBMoQg60QMDnOyiy9D3HvnV2lWpkMNe8%2FcvI8YDV7DlxJJ9KkBMlYflYKzP%2FVm92hNE99W6JlSsw4tfxOHmJ9fLm9xuMktqNqma6jAW3fYiAwhd86TDoW61TBei1Qa7RHmC%2BjmC7z1XLutJNIO7tzMGdSEGpacKKt8Mar9ABvvIgCZjbG28DWcdfov23%2FSd8TAmA6VgGJCLE1QqIdvOhgHaI2VwlFGFzF8H%2FRJ4BWmjwyHRTglQtbLKow9xnm7W5Oyg5KOXiLJZlTU6VNQlQB4FM8%2FGbgJ0EoAKhLYjDIs5bCBjqkAeTK7jvAI9SRMMDJJh44taSlGMh%2BiZJdC6Rl8UVSjxLx9aYU%2B3KeGPsx8IfnlKwI3yXPQ8l8joLj4K2Tbgb9Jt3TJewtJxHZKcvWKWgsdEm3vzdSsiTc9mhdpx6XL1Ctns7Nntg2pXCHDsuKXSWx%2FQh%2FZPq%2BAZ90pXAKiCfTVEpuFLXC9RokJu%2BFqsLfPISN3vbmKQ5n0QDitjwx5Dgap3hayxxh&X-Amz-Signature=af1b61ff03aa71928508842033f425350cd8ff2c8d4b47a8e4a86215fb4b60c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGVSCJRC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3VCzPTRTbdEL7K5avmb81wHMFRO%2BEO5q7h7Dv9sSq5gIhAKrtArO8t%2BTvgwT0au%2B2mVCsupTXTgj2vdQjwVOq%2BfxLKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyDcQmKAVZ5TWZ63kq3AOYwLIRYgAXALMIC8eXkpjngC3mTmOYj%2F%2FNjQEMSYUDWR4lwRc%2BfUAgyX976vtrih7sXMd7UkVbnNuDCDYmVUbrYqxn%2BsZzqNhT8E8uqEBcrAADYEmaNLJR58VYLzRhWffcvV3T7RDvGimjL4kTMe3wbc4uQxqsgxTfeuROkQgKxth06%2FATdChMeBJL120ne1HXOo66qVTCBXCsH6imZQTbI6J2YgdLkEKQPLPmX5h%2FAzpgCH%2FRTmC5JJx3NTVPsJItnN%2BG2nDM8QzCSnWmi5MbTRfiG3tAnYSOPb4JU8eaJWn4dsY6zJiZOxWeJ3F5C9mIVBDsSTgvhXZ0Cnjr2qDBBMoQg60QMDnOyiy9D3HvnV2lWpkMNe8%2FcvI8YDV7DlxJJ9KkBMlYflYKzP%2FVm92hNE99W6JlSsw4tfxOHmJ9fLm9xuMktqNqma6jAW3fYiAwhd86TDoW61TBei1Qa7RHmC%2BjmC7z1XLutJNIO7tzMGdSEGpacKKt8Mar9ABvvIgCZjbG28DWcdfov23%2FSd8TAmA6VgGJCLE1QqIdvOhgHaI2VwlFGFzF8H%2FRJ4BWmjwyHRTglQtbLKow9xnm7W5Oyg5KOXiLJZlTU6VNQlQB4FM8%2FGbgJ0EoAKhLYjDIs5bCBjqkAeTK7jvAI9SRMMDJJh44taSlGMh%2BiZJdC6Rl8UVSjxLx9aYU%2B3KeGPsx8IfnlKwI3yXPQ8l8joLj4K2Tbgb9Jt3TJewtJxHZKcvWKWgsdEm3vzdSsiTc9mhdpx6XL1Ctns7Nntg2pXCHDsuKXSWx%2FQh%2FZPq%2BAZ90pXAKiCfTVEpuFLXC9RokJu%2BFqsLfPISN3vbmKQ5n0QDitjwx5Dgap3hayxxh&X-Amz-Signature=83218e55ccd9ec7993bef65b5a24527280a8abec484bf75b6b0c0660b6fdd4a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGVSCJRC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3VCzPTRTbdEL7K5avmb81wHMFRO%2BEO5q7h7Dv9sSq5gIhAKrtArO8t%2BTvgwT0au%2B2mVCsupTXTgj2vdQjwVOq%2BfxLKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyDcQmKAVZ5TWZ63kq3AOYwLIRYgAXALMIC8eXkpjngC3mTmOYj%2F%2FNjQEMSYUDWR4lwRc%2BfUAgyX976vtrih7sXMd7UkVbnNuDCDYmVUbrYqxn%2BsZzqNhT8E8uqEBcrAADYEmaNLJR58VYLzRhWffcvV3T7RDvGimjL4kTMe3wbc4uQxqsgxTfeuROkQgKxth06%2FATdChMeBJL120ne1HXOo66qVTCBXCsH6imZQTbI6J2YgdLkEKQPLPmX5h%2FAzpgCH%2FRTmC5JJx3NTVPsJItnN%2BG2nDM8QzCSnWmi5MbTRfiG3tAnYSOPb4JU8eaJWn4dsY6zJiZOxWeJ3F5C9mIVBDsSTgvhXZ0Cnjr2qDBBMoQg60QMDnOyiy9D3HvnV2lWpkMNe8%2FcvI8YDV7DlxJJ9KkBMlYflYKzP%2FVm92hNE99W6JlSsw4tfxOHmJ9fLm9xuMktqNqma6jAW3fYiAwhd86TDoW61TBei1Qa7RHmC%2BjmC7z1XLutJNIO7tzMGdSEGpacKKt8Mar9ABvvIgCZjbG28DWcdfov23%2FSd8TAmA6VgGJCLE1QqIdvOhgHaI2VwlFGFzF8H%2FRJ4BWmjwyHRTglQtbLKow9xnm7W5Oyg5KOXiLJZlTU6VNQlQB4FM8%2FGbgJ0EoAKhLYjDIs5bCBjqkAeTK7jvAI9SRMMDJJh44taSlGMh%2BiZJdC6Rl8UVSjxLx9aYU%2B3KeGPsx8IfnlKwI3yXPQ8l8joLj4K2Tbgb9Jt3TJewtJxHZKcvWKWgsdEm3vzdSsiTc9mhdpx6XL1Ctns7Nntg2pXCHDsuKXSWx%2FQh%2FZPq%2BAZ90pXAKiCfTVEpuFLXC9RokJu%2BFqsLfPISN3vbmKQ5n0QDitjwx5Dgap3hayxxh&X-Amz-Signature=bcbbfea14cf14b8ddc22be9759bcf12ba8df0fa9e6604a680baeffdd8469d5d0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGVSCJRC%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3VCzPTRTbdEL7K5avmb81wHMFRO%2BEO5q7h7Dv9sSq5gIhAKrtArO8t%2BTvgwT0au%2B2mVCsupTXTgj2vdQjwVOq%2BfxLKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyyDcQmKAVZ5TWZ63kq3AOYwLIRYgAXALMIC8eXkpjngC3mTmOYj%2F%2FNjQEMSYUDWR4lwRc%2BfUAgyX976vtrih7sXMd7UkVbnNuDCDYmVUbrYqxn%2BsZzqNhT8E8uqEBcrAADYEmaNLJR58VYLzRhWffcvV3T7RDvGimjL4kTMe3wbc4uQxqsgxTfeuROkQgKxth06%2FATdChMeBJL120ne1HXOo66qVTCBXCsH6imZQTbI6J2YgdLkEKQPLPmX5h%2FAzpgCH%2FRTmC5JJx3NTVPsJItnN%2BG2nDM8QzCSnWmi5MbTRfiG3tAnYSOPb4JU8eaJWn4dsY6zJiZOxWeJ3F5C9mIVBDsSTgvhXZ0Cnjr2qDBBMoQg60QMDnOyiy9D3HvnV2lWpkMNe8%2FcvI8YDV7DlxJJ9KkBMlYflYKzP%2FVm92hNE99W6JlSsw4tfxOHmJ9fLm9xuMktqNqma6jAW3fYiAwhd86TDoW61TBei1Qa7RHmC%2BjmC7z1XLutJNIO7tzMGdSEGpacKKt8Mar9ABvvIgCZjbG28DWcdfov23%2FSd8TAmA6VgGJCLE1QqIdvOhgHaI2VwlFGFzF8H%2FRJ4BWmjwyHRTglQtbLKow9xnm7W5Oyg5KOXiLJZlTU6VNQlQB4FM8%2FGbgJ0EoAKhLYjDIs5bCBjqkAeTK7jvAI9SRMMDJJh44taSlGMh%2BiZJdC6Rl8UVSjxLx9aYU%2B3KeGPsx8IfnlKwI3yXPQ8l8joLj4K2Tbgb9Jt3TJewtJxHZKcvWKWgsdEm3vzdSsiTc9mhdpx6XL1Ctns7Nntg2pXCHDsuKXSWx%2FQh%2FZPq%2BAZ90pXAKiCfTVEpuFLXC9RokJu%2BFqsLfPISN3vbmKQ5n0QDitjwx5Dgap3hayxxh&X-Amz-Signature=073cea18510d694dfca5c4129b0286484c8d43a3f004f34500d46b2e4e41d779&X-Amz-SignedHeaders=host&x-id=GetObject)
