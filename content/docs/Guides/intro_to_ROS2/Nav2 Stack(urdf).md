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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAVTEMDR%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjU70TSPt14ar%2B2M9sDahuLdie1k8r2oSWCVs3ifZVwAIgflnl%2BjA1IvhhEFfGWIQM6LyENFElDi2ppXTfldXOJXIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyaBHVOXYhK14QE3CrcA5Qkk4RPacgl4ETb%2BMt%2FY4qEV0SUl%2BPlqL6bUn4Gg2Bu0FhHdNYTA7Vn1dAIAkec28274G9P%2B6HcaTLsYZnob6pedZzAUG0mM7CunTfgF%2FpihNdl0VUdBGFBtSfA4c59kI780pD99ZRu41y%2Fizoy5VaNPGDMlv7ejZVHtfWOPsYq%2BFearCQWZ7jqii6j%2FndGmzlUxX37zpctFrhwK4uu%2FeZinNc4qeA4Lwe8ASPC3DhbyuWjtliIrjuzJeSBSPj2WJpKexudx1vqmmNJPyuE3bERuIGVnt3g022BP7HvAOapi9YZkIa0r0PybIAq6D58bhZLcmzCc%2FJTxDrUnjRT1U%2B1aIrQwwda2HZ7Ts0KIOpHrAW4quw3vq1UH2jXZw4B3UlAA8NkJ9t38g%2Fi%2FvDVGc3Tpf6Y%2F5eXr2B6EjwnFiK%2FI8c8qTp6OBigqR4UECWdJ6K0sCctuRyqZOazsDkHbFCdtK2xdEEjP1nz50M%2Fmw1qJjQm7YATg5Shc33KlIhkxqXMSU%2Fvmbybsbv8A4cYNyNxwRtWHiBPNsD%2BiBLGIz9e3aRrefgOP25TKsrkOGSSGBA9YdeWRZpaiiYmWIaC5xb7VC4WbjYCMLxageFUhWL4ZWkefHQfvwMSAygSMIWursEGOqUB9qjfh11wxT6508NmZl8jnr4fB9%2FaQSUnxy4kmvZ0o4uFKAWkwJWHtDWyrIFGtQfnENjkKFg0P%2F8GrL0OzdNvdeV6mXcv1z41Yne4kJtzOIEs3crHI5fLZgA2c57JU1DS7QpyEZsfO8SU1IhphYlAbbDfwj%2FVS594BVmT%2FNvAmn2vqIo%2BpQnZO5geYRNKFEQVeSDW589hsXJP7%2BDrp5lBzNr%2BL77o&X-Amz-Signature=edda2133a64718cc01a9bf0095b86886a896a587152bc5c4fa3a941ceb0c9f17&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAVTEMDR%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjU70TSPt14ar%2B2M9sDahuLdie1k8r2oSWCVs3ifZVwAIgflnl%2BjA1IvhhEFfGWIQM6LyENFElDi2ppXTfldXOJXIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyaBHVOXYhK14QE3CrcA5Qkk4RPacgl4ETb%2BMt%2FY4qEV0SUl%2BPlqL6bUn4Gg2Bu0FhHdNYTA7Vn1dAIAkec28274G9P%2B6HcaTLsYZnob6pedZzAUG0mM7CunTfgF%2FpihNdl0VUdBGFBtSfA4c59kI780pD99ZRu41y%2Fizoy5VaNPGDMlv7ejZVHtfWOPsYq%2BFearCQWZ7jqii6j%2FndGmzlUxX37zpctFrhwK4uu%2FeZinNc4qeA4Lwe8ASPC3DhbyuWjtliIrjuzJeSBSPj2WJpKexudx1vqmmNJPyuE3bERuIGVnt3g022BP7HvAOapi9YZkIa0r0PybIAq6D58bhZLcmzCc%2FJTxDrUnjRT1U%2B1aIrQwwda2HZ7Ts0KIOpHrAW4quw3vq1UH2jXZw4B3UlAA8NkJ9t38g%2Fi%2FvDVGc3Tpf6Y%2F5eXr2B6EjwnFiK%2FI8c8qTp6OBigqR4UECWdJ6K0sCctuRyqZOazsDkHbFCdtK2xdEEjP1nz50M%2Fmw1qJjQm7YATg5Shc33KlIhkxqXMSU%2Fvmbybsbv8A4cYNyNxwRtWHiBPNsD%2BiBLGIz9e3aRrefgOP25TKsrkOGSSGBA9YdeWRZpaiiYmWIaC5xb7VC4WbjYCMLxageFUhWL4ZWkefHQfvwMSAygSMIWursEGOqUB9qjfh11wxT6508NmZl8jnr4fB9%2FaQSUnxy4kmvZ0o4uFKAWkwJWHtDWyrIFGtQfnENjkKFg0P%2F8GrL0OzdNvdeV6mXcv1z41Yne4kJtzOIEs3crHI5fLZgA2c57JU1DS7QpyEZsfO8SU1IhphYlAbbDfwj%2FVS594BVmT%2FNvAmn2vqIo%2BpQnZO5geYRNKFEQVeSDW589hsXJP7%2BDrp5lBzNr%2BL77o&X-Amz-Signature=f56761b495981b643a9c6bce3b9b11d3e53acd4f924eb75546700931bb7c9faf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAVTEMDR%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjU70TSPt14ar%2B2M9sDahuLdie1k8r2oSWCVs3ifZVwAIgflnl%2BjA1IvhhEFfGWIQM6LyENFElDi2ppXTfldXOJXIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyaBHVOXYhK14QE3CrcA5Qkk4RPacgl4ETb%2BMt%2FY4qEV0SUl%2BPlqL6bUn4Gg2Bu0FhHdNYTA7Vn1dAIAkec28274G9P%2B6HcaTLsYZnob6pedZzAUG0mM7CunTfgF%2FpihNdl0VUdBGFBtSfA4c59kI780pD99ZRu41y%2Fizoy5VaNPGDMlv7ejZVHtfWOPsYq%2BFearCQWZ7jqii6j%2FndGmzlUxX37zpctFrhwK4uu%2FeZinNc4qeA4Lwe8ASPC3DhbyuWjtliIrjuzJeSBSPj2WJpKexudx1vqmmNJPyuE3bERuIGVnt3g022BP7HvAOapi9YZkIa0r0PybIAq6D58bhZLcmzCc%2FJTxDrUnjRT1U%2B1aIrQwwda2HZ7Ts0KIOpHrAW4quw3vq1UH2jXZw4B3UlAA8NkJ9t38g%2Fi%2FvDVGc3Tpf6Y%2F5eXr2B6EjwnFiK%2FI8c8qTp6OBigqR4UECWdJ6K0sCctuRyqZOazsDkHbFCdtK2xdEEjP1nz50M%2Fmw1qJjQm7YATg5Shc33KlIhkxqXMSU%2Fvmbybsbv8A4cYNyNxwRtWHiBPNsD%2BiBLGIz9e3aRrefgOP25TKsrkOGSSGBA9YdeWRZpaiiYmWIaC5xb7VC4WbjYCMLxageFUhWL4ZWkefHQfvwMSAygSMIWursEGOqUB9qjfh11wxT6508NmZl8jnr4fB9%2FaQSUnxy4kmvZ0o4uFKAWkwJWHtDWyrIFGtQfnENjkKFg0P%2F8GrL0OzdNvdeV6mXcv1z41Yne4kJtzOIEs3crHI5fLZgA2c57JU1DS7QpyEZsfO8SU1IhphYlAbbDfwj%2FVS594BVmT%2FNvAmn2vqIo%2BpQnZO5geYRNKFEQVeSDW589hsXJP7%2BDrp5lBzNr%2BL77o&X-Amz-Signature=52a9b62bc4b2595830edd08b97cb1f665258d17decdd76eb6ae514a368be54f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAVTEMDR%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjU70TSPt14ar%2B2M9sDahuLdie1k8r2oSWCVs3ifZVwAIgflnl%2BjA1IvhhEFfGWIQM6LyENFElDi2ppXTfldXOJXIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyaBHVOXYhK14QE3CrcA5Qkk4RPacgl4ETb%2BMt%2FY4qEV0SUl%2BPlqL6bUn4Gg2Bu0FhHdNYTA7Vn1dAIAkec28274G9P%2B6HcaTLsYZnob6pedZzAUG0mM7CunTfgF%2FpihNdl0VUdBGFBtSfA4c59kI780pD99ZRu41y%2Fizoy5VaNPGDMlv7ejZVHtfWOPsYq%2BFearCQWZ7jqii6j%2FndGmzlUxX37zpctFrhwK4uu%2FeZinNc4qeA4Lwe8ASPC3DhbyuWjtliIrjuzJeSBSPj2WJpKexudx1vqmmNJPyuE3bERuIGVnt3g022BP7HvAOapi9YZkIa0r0PybIAq6D58bhZLcmzCc%2FJTxDrUnjRT1U%2B1aIrQwwda2HZ7Ts0KIOpHrAW4quw3vq1UH2jXZw4B3UlAA8NkJ9t38g%2Fi%2FvDVGc3Tpf6Y%2F5eXr2B6EjwnFiK%2FI8c8qTp6OBigqR4UECWdJ6K0sCctuRyqZOazsDkHbFCdtK2xdEEjP1nz50M%2Fmw1qJjQm7YATg5Shc33KlIhkxqXMSU%2Fvmbybsbv8A4cYNyNxwRtWHiBPNsD%2BiBLGIz9e3aRrefgOP25TKsrkOGSSGBA9YdeWRZpaiiYmWIaC5xb7VC4WbjYCMLxageFUhWL4ZWkefHQfvwMSAygSMIWursEGOqUB9qjfh11wxT6508NmZl8jnr4fB9%2FaQSUnxy4kmvZ0o4uFKAWkwJWHtDWyrIFGtQfnENjkKFg0P%2F8GrL0OzdNvdeV6mXcv1z41Yne4kJtzOIEs3crHI5fLZgA2c57JU1DS7QpyEZsfO8SU1IhphYlAbbDfwj%2FVS594BVmT%2FNvAmn2vqIo%2BpQnZO5geYRNKFEQVeSDW589hsXJP7%2BDrp5lBzNr%2BL77o&X-Amz-Signature=52170251bef0a2bd5bf94aa9ebf047e04f9bd59dba038d4cba02f97d1a5e9b51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAVTEMDR%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjU70TSPt14ar%2B2M9sDahuLdie1k8r2oSWCVs3ifZVwAIgflnl%2BjA1IvhhEFfGWIQM6LyENFElDi2ppXTfldXOJXIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyaBHVOXYhK14QE3CrcA5Qkk4RPacgl4ETb%2BMt%2FY4qEV0SUl%2BPlqL6bUn4Gg2Bu0FhHdNYTA7Vn1dAIAkec28274G9P%2B6HcaTLsYZnob6pedZzAUG0mM7CunTfgF%2FpihNdl0VUdBGFBtSfA4c59kI780pD99ZRu41y%2Fizoy5VaNPGDMlv7ejZVHtfWOPsYq%2BFearCQWZ7jqii6j%2FndGmzlUxX37zpctFrhwK4uu%2FeZinNc4qeA4Lwe8ASPC3DhbyuWjtliIrjuzJeSBSPj2WJpKexudx1vqmmNJPyuE3bERuIGVnt3g022BP7HvAOapi9YZkIa0r0PybIAq6D58bhZLcmzCc%2FJTxDrUnjRT1U%2B1aIrQwwda2HZ7Ts0KIOpHrAW4quw3vq1UH2jXZw4B3UlAA8NkJ9t38g%2Fi%2FvDVGc3Tpf6Y%2F5eXr2B6EjwnFiK%2FI8c8qTp6OBigqR4UECWdJ6K0sCctuRyqZOazsDkHbFCdtK2xdEEjP1nz50M%2Fmw1qJjQm7YATg5Shc33KlIhkxqXMSU%2Fvmbybsbv8A4cYNyNxwRtWHiBPNsD%2BiBLGIz9e3aRrefgOP25TKsrkOGSSGBA9YdeWRZpaiiYmWIaC5xb7VC4WbjYCMLxageFUhWL4ZWkefHQfvwMSAygSMIWursEGOqUB9qjfh11wxT6508NmZl8jnr4fB9%2FaQSUnxy4kmvZ0o4uFKAWkwJWHtDWyrIFGtQfnENjkKFg0P%2F8GrL0OzdNvdeV6mXcv1z41Yne4kJtzOIEs3crHI5fLZgA2c57JU1DS7QpyEZsfO8SU1IhphYlAbbDfwj%2FVS594BVmT%2FNvAmn2vqIo%2BpQnZO5geYRNKFEQVeSDW589hsXJP7%2BDrp5lBzNr%2BL77o&X-Amz-Signature=e929a9d0ebc41e186d0ddbafa4a93bc039f8d838a70d4110894fb3df96b8a667&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAVTEMDR%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjU70TSPt14ar%2B2M9sDahuLdie1k8r2oSWCVs3ifZVwAIgflnl%2BjA1IvhhEFfGWIQM6LyENFElDi2ppXTfldXOJXIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyaBHVOXYhK14QE3CrcA5Qkk4RPacgl4ETb%2BMt%2FY4qEV0SUl%2BPlqL6bUn4Gg2Bu0FhHdNYTA7Vn1dAIAkec28274G9P%2B6HcaTLsYZnob6pedZzAUG0mM7CunTfgF%2FpihNdl0VUdBGFBtSfA4c59kI780pD99ZRu41y%2Fizoy5VaNPGDMlv7ejZVHtfWOPsYq%2BFearCQWZ7jqii6j%2FndGmzlUxX37zpctFrhwK4uu%2FeZinNc4qeA4Lwe8ASPC3DhbyuWjtliIrjuzJeSBSPj2WJpKexudx1vqmmNJPyuE3bERuIGVnt3g022BP7HvAOapi9YZkIa0r0PybIAq6D58bhZLcmzCc%2FJTxDrUnjRT1U%2B1aIrQwwda2HZ7Ts0KIOpHrAW4quw3vq1UH2jXZw4B3UlAA8NkJ9t38g%2Fi%2FvDVGc3Tpf6Y%2F5eXr2B6EjwnFiK%2FI8c8qTp6OBigqR4UECWdJ6K0sCctuRyqZOazsDkHbFCdtK2xdEEjP1nz50M%2Fmw1qJjQm7YATg5Shc33KlIhkxqXMSU%2Fvmbybsbv8A4cYNyNxwRtWHiBPNsD%2BiBLGIz9e3aRrefgOP25TKsrkOGSSGBA9YdeWRZpaiiYmWIaC5xb7VC4WbjYCMLxageFUhWL4ZWkefHQfvwMSAygSMIWursEGOqUB9qjfh11wxT6508NmZl8jnr4fB9%2FaQSUnxy4kmvZ0o4uFKAWkwJWHtDWyrIFGtQfnENjkKFg0P%2F8GrL0OzdNvdeV6mXcv1z41Yne4kJtzOIEs3crHI5fLZgA2c57JU1DS7QpyEZsfO8SU1IhphYlAbbDfwj%2FVS594BVmT%2FNvAmn2vqIo%2BpQnZO5geYRNKFEQVeSDW589hsXJP7%2BDrp5lBzNr%2BL77o&X-Amz-Signature=5fdc4f9d145ab98114fdf9d7812c14caadc11449d8f82beefbeb68c2a252c0d4&X-Amz-SignedHeaders=host&x-id=GetObject)
