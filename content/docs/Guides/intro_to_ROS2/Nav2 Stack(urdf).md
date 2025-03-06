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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPCI6TLC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKYPPhkESondNEhGelg171ijuqE4xQTy0pfCrWcCqiMAiBtTbK66DFKpcneqRf7ia8Y9fcZWjSKjOrDQP6phBdY5Cr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMyDTr4Zd1jczsnN5eKtwDBbIXrTUFyPAJcl6oxsBbe7Nsc0oAvEk7tk5XG%2FSQRDjZfLVeSQtESZh8fIqJJKiDVBjvZPsm9JFw5TxppnIDrJxYvkVyBOvVfmr%2FP%2FLwhirzi3T2zdgFflDlbDkqz6AOd29dX6w5gxrFWAZYogx%2FXpEs1tkTAFXbwq54BOX0hZHmjzu069PNPAkwI%2Fkq5v0Wub1mLpOM9i9e0DTIKQfdMDpbyd0xHq06Oc0RS0mq6%2FEUbvNWALeR9%2BWx7ZAlGqTgz7SflmuGrwd46tE6P4tRK1dWf3ugJFws%2F5jwhqgO0a27b7phV3qH8nxZZDTVYywTHwGnvOGC%2F3KDTn3UoC0inVMrFy4dUTfaNcECQdBHX4%2F1URgGBBFuCV5Cx1lP4sbQGJpHibbDpc%2BSire1B%2FCold8fD1mGrqOEP0jgZsjI5aknuee84rodpxjd3Vp23JnhShXcelIwGg1zGa3BAQNyTYWvhEeW4QgF9HBV3ungdzZGoNSD4JJsEF6QlkGELikj%2BofgUiZf4E94SSgVbNb%2BXIKeTD18iWSo6tmvavF2xh3GsuRQpKVRkBWMOR1vbyE3pw4%2Fwc8uI6HKm%2FgfrsHXgxvNFp%2BkN0rDpj9HChfPt%2BJIiz9tgAIvQrp%2FHwww%2FuejvgY6pgG115YGt6MA6D8Mzz6oQQiBuMKzNX5eKAli3MOViT1b6LFV%2FcbhFU8yD%2Fsckw2sf6xqH%2BS9E%2FcSuY24aA11VUWf73IaqkZi%2FbEaOBITmoSMrh%2Bf87C1nJskawMAYLAfxQ0ebCKAWP7FA5qhfl5uxKaZ17h5DJLzwYwoUXgXhWvNmyjyRQ1ZWUyrkCaASrRedQyL80U0%2BYIJ27Ep%2FYNRbOVl5ekpJ5%2BP&X-Amz-Signature=55696301807696f3228c78b3485fcaa2ff660d3d69eef729dc8cb712d4193e20&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPCI6TLC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKYPPhkESondNEhGelg171ijuqE4xQTy0pfCrWcCqiMAiBtTbK66DFKpcneqRf7ia8Y9fcZWjSKjOrDQP6phBdY5Cr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMyDTr4Zd1jczsnN5eKtwDBbIXrTUFyPAJcl6oxsBbe7Nsc0oAvEk7tk5XG%2FSQRDjZfLVeSQtESZh8fIqJJKiDVBjvZPsm9JFw5TxppnIDrJxYvkVyBOvVfmr%2FP%2FLwhirzi3T2zdgFflDlbDkqz6AOd29dX6w5gxrFWAZYogx%2FXpEs1tkTAFXbwq54BOX0hZHmjzu069PNPAkwI%2Fkq5v0Wub1mLpOM9i9e0DTIKQfdMDpbyd0xHq06Oc0RS0mq6%2FEUbvNWALeR9%2BWx7ZAlGqTgz7SflmuGrwd46tE6P4tRK1dWf3ugJFws%2F5jwhqgO0a27b7phV3qH8nxZZDTVYywTHwGnvOGC%2F3KDTn3UoC0inVMrFy4dUTfaNcECQdBHX4%2F1URgGBBFuCV5Cx1lP4sbQGJpHibbDpc%2BSire1B%2FCold8fD1mGrqOEP0jgZsjI5aknuee84rodpxjd3Vp23JnhShXcelIwGg1zGa3BAQNyTYWvhEeW4QgF9HBV3ungdzZGoNSD4JJsEF6QlkGELikj%2BofgUiZf4E94SSgVbNb%2BXIKeTD18iWSo6tmvavF2xh3GsuRQpKVRkBWMOR1vbyE3pw4%2Fwc8uI6HKm%2FgfrsHXgxvNFp%2BkN0rDpj9HChfPt%2BJIiz9tgAIvQrp%2FHwww%2FuejvgY6pgG115YGt6MA6D8Mzz6oQQiBuMKzNX5eKAli3MOViT1b6LFV%2FcbhFU8yD%2Fsckw2sf6xqH%2BS9E%2FcSuY24aA11VUWf73IaqkZi%2FbEaOBITmoSMrh%2Bf87C1nJskawMAYLAfxQ0ebCKAWP7FA5qhfl5uxKaZ17h5DJLzwYwoUXgXhWvNmyjyRQ1ZWUyrkCaASrRedQyL80U0%2BYIJ27Ep%2FYNRbOVl5ekpJ5%2BP&X-Amz-Signature=9789d26a2d40caefd998f72c23a891f3de29ccc8b136ca354a879b790e324e28&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPCI6TLC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKYPPhkESondNEhGelg171ijuqE4xQTy0pfCrWcCqiMAiBtTbK66DFKpcneqRf7ia8Y9fcZWjSKjOrDQP6phBdY5Cr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMyDTr4Zd1jczsnN5eKtwDBbIXrTUFyPAJcl6oxsBbe7Nsc0oAvEk7tk5XG%2FSQRDjZfLVeSQtESZh8fIqJJKiDVBjvZPsm9JFw5TxppnIDrJxYvkVyBOvVfmr%2FP%2FLwhirzi3T2zdgFflDlbDkqz6AOd29dX6w5gxrFWAZYogx%2FXpEs1tkTAFXbwq54BOX0hZHmjzu069PNPAkwI%2Fkq5v0Wub1mLpOM9i9e0DTIKQfdMDpbyd0xHq06Oc0RS0mq6%2FEUbvNWALeR9%2BWx7ZAlGqTgz7SflmuGrwd46tE6P4tRK1dWf3ugJFws%2F5jwhqgO0a27b7phV3qH8nxZZDTVYywTHwGnvOGC%2F3KDTn3UoC0inVMrFy4dUTfaNcECQdBHX4%2F1URgGBBFuCV5Cx1lP4sbQGJpHibbDpc%2BSire1B%2FCold8fD1mGrqOEP0jgZsjI5aknuee84rodpxjd3Vp23JnhShXcelIwGg1zGa3BAQNyTYWvhEeW4QgF9HBV3ungdzZGoNSD4JJsEF6QlkGELikj%2BofgUiZf4E94SSgVbNb%2BXIKeTD18iWSo6tmvavF2xh3GsuRQpKVRkBWMOR1vbyE3pw4%2Fwc8uI6HKm%2FgfrsHXgxvNFp%2BkN0rDpj9HChfPt%2BJIiz9tgAIvQrp%2FHwww%2FuejvgY6pgG115YGt6MA6D8Mzz6oQQiBuMKzNX5eKAli3MOViT1b6LFV%2FcbhFU8yD%2Fsckw2sf6xqH%2BS9E%2FcSuY24aA11VUWf73IaqkZi%2FbEaOBITmoSMrh%2Bf87C1nJskawMAYLAfxQ0ebCKAWP7FA5qhfl5uxKaZ17h5DJLzwYwoUXgXhWvNmyjyRQ1ZWUyrkCaASrRedQyL80U0%2BYIJ27Ep%2FYNRbOVl5ekpJ5%2BP&X-Amz-Signature=f7e31d5ab8778076bb1da3d44e00526b93660654a576662125e4e3787804b320&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPCI6TLC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKYPPhkESondNEhGelg171ijuqE4xQTy0pfCrWcCqiMAiBtTbK66DFKpcneqRf7ia8Y9fcZWjSKjOrDQP6phBdY5Cr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMyDTr4Zd1jczsnN5eKtwDBbIXrTUFyPAJcl6oxsBbe7Nsc0oAvEk7tk5XG%2FSQRDjZfLVeSQtESZh8fIqJJKiDVBjvZPsm9JFw5TxppnIDrJxYvkVyBOvVfmr%2FP%2FLwhirzi3T2zdgFflDlbDkqz6AOd29dX6w5gxrFWAZYogx%2FXpEs1tkTAFXbwq54BOX0hZHmjzu069PNPAkwI%2Fkq5v0Wub1mLpOM9i9e0DTIKQfdMDpbyd0xHq06Oc0RS0mq6%2FEUbvNWALeR9%2BWx7ZAlGqTgz7SflmuGrwd46tE6P4tRK1dWf3ugJFws%2F5jwhqgO0a27b7phV3qH8nxZZDTVYywTHwGnvOGC%2F3KDTn3UoC0inVMrFy4dUTfaNcECQdBHX4%2F1URgGBBFuCV5Cx1lP4sbQGJpHibbDpc%2BSire1B%2FCold8fD1mGrqOEP0jgZsjI5aknuee84rodpxjd3Vp23JnhShXcelIwGg1zGa3BAQNyTYWvhEeW4QgF9HBV3ungdzZGoNSD4JJsEF6QlkGELikj%2BofgUiZf4E94SSgVbNb%2BXIKeTD18iWSo6tmvavF2xh3GsuRQpKVRkBWMOR1vbyE3pw4%2Fwc8uI6HKm%2FgfrsHXgxvNFp%2BkN0rDpj9HChfPt%2BJIiz9tgAIvQrp%2FHwww%2FuejvgY6pgG115YGt6MA6D8Mzz6oQQiBuMKzNX5eKAli3MOViT1b6LFV%2FcbhFU8yD%2Fsckw2sf6xqH%2BS9E%2FcSuY24aA11VUWf73IaqkZi%2FbEaOBITmoSMrh%2Bf87C1nJskawMAYLAfxQ0ebCKAWP7FA5qhfl5uxKaZ17h5DJLzwYwoUXgXhWvNmyjyRQ1ZWUyrkCaASrRedQyL80U0%2BYIJ27Ep%2FYNRbOVl5ekpJ5%2BP&X-Amz-Signature=18ea4c044c9fa0667b9ccffd10df7c824df6bef9a2358c32defa3abb3da806d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPCI6TLC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKYPPhkESondNEhGelg171ijuqE4xQTy0pfCrWcCqiMAiBtTbK66DFKpcneqRf7ia8Y9fcZWjSKjOrDQP6phBdY5Cr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMyDTr4Zd1jczsnN5eKtwDBbIXrTUFyPAJcl6oxsBbe7Nsc0oAvEk7tk5XG%2FSQRDjZfLVeSQtESZh8fIqJJKiDVBjvZPsm9JFw5TxppnIDrJxYvkVyBOvVfmr%2FP%2FLwhirzi3T2zdgFflDlbDkqz6AOd29dX6w5gxrFWAZYogx%2FXpEs1tkTAFXbwq54BOX0hZHmjzu069PNPAkwI%2Fkq5v0Wub1mLpOM9i9e0DTIKQfdMDpbyd0xHq06Oc0RS0mq6%2FEUbvNWALeR9%2BWx7ZAlGqTgz7SflmuGrwd46tE6P4tRK1dWf3ugJFws%2F5jwhqgO0a27b7phV3qH8nxZZDTVYywTHwGnvOGC%2F3KDTn3UoC0inVMrFy4dUTfaNcECQdBHX4%2F1URgGBBFuCV5Cx1lP4sbQGJpHibbDpc%2BSire1B%2FCold8fD1mGrqOEP0jgZsjI5aknuee84rodpxjd3Vp23JnhShXcelIwGg1zGa3BAQNyTYWvhEeW4QgF9HBV3ungdzZGoNSD4JJsEF6QlkGELikj%2BofgUiZf4E94SSgVbNb%2BXIKeTD18iWSo6tmvavF2xh3GsuRQpKVRkBWMOR1vbyE3pw4%2Fwc8uI6HKm%2FgfrsHXgxvNFp%2BkN0rDpj9HChfPt%2BJIiz9tgAIvQrp%2FHwww%2FuejvgY6pgG115YGt6MA6D8Mzz6oQQiBuMKzNX5eKAli3MOViT1b6LFV%2FcbhFU8yD%2Fsckw2sf6xqH%2BS9E%2FcSuY24aA11VUWf73IaqkZi%2FbEaOBITmoSMrh%2Bf87C1nJskawMAYLAfxQ0ebCKAWP7FA5qhfl5uxKaZ17h5DJLzwYwoUXgXhWvNmyjyRQ1ZWUyrkCaASrRedQyL80U0%2BYIJ27Ep%2FYNRbOVl5ekpJ5%2BP&X-Amz-Signature=c3474c23812316ab3ee997e3b7d9f3f2bdf2c71639966d8fdb3ce78e15c41d10&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPCI6TLC%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKYPPhkESondNEhGelg171ijuqE4xQTy0pfCrWcCqiMAiBtTbK66DFKpcneqRf7ia8Y9fcZWjSKjOrDQP6phBdY5Cr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMyDTr4Zd1jczsnN5eKtwDBbIXrTUFyPAJcl6oxsBbe7Nsc0oAvEk7tk5XG%2FSQRDjZfLVeSQtESZh8fIqJJKiDVBjvZPsm9JFw5TxppnIDrJxYvkVyBOvVfmr%2FP%2FLwhirzi3T2zdgFflDlbDkqz6AOd29dX6w5gxrFWAZYogx%2FXpEs1tkTAFXbwq54BOX0hZHmjzu069PNPAkwI%2Fkq5v0Wub1mLpOM9i9e0DTIKQfdMDpbyd0xHq06Oc0RS0mq6%2FEUbvNWALeR9%2BWx7ZAlGqTgz7SflmuGrwd46tE6P4tRK1dWf3ugJFws%2F5jwhqgO0a27b7phV3qH8nxZZDTVYywTHwGnvOGC%2F3KDTn3UoC0inVMrFy4dUTfaNcECQdBHX4%2F1URgGBBFuCV5Cx1lP4sbQGJpHibbDpc%2BSire1B%2FCold8fD1mGrqOEP0jgZsjI5aknuee84rodpxjd3Vp23JnhShXcelIwGg1zGa3BAQNyTYWvhEeW4QgF9HBV3ungdzZGoNSD4JJsEF6QlkGELikj%2BofgUiZf4E94SSgVbNb%2BXIKeTD18iWSo6tmvavF2xh3GsuRQpKVRkBWMOR1vbyE3pw4%2Fwc8uI6HKm%2FgfrsHXgxvNFp%2BkN0rDpj9HChfPt%2BJIiz9tgAIvQrp%2FHwww%2FuejvgY6pgG115YGt6MA6D8Mzz6oQQiBuMKzNX5eKAli3MOViT1b6LFV%2FcbhFU8yD%2Fsckw2sf6xqH%2BS9E%2FcSuY24aA11VUWf73IaqkZi%2FbEaOBITmoSMrh%2Bf87C1nJskawMAYLAfxQ0ebCKAWP7FA5qhfl5uxKaZ17h5DJLzwYwoUXgXhWvNmyjyRQ1ZWUyrkCaASrRedQyL80U0%2BYIJ27Ep%2FYNRbOVl5ekpJ5%2BP&X-Amz-Signature=51627480225f39ab7764bb26d0dc053f8e03854f09eea2ff7a05de3b73c9851a&X-Amz-SignedHeaders=host&x-id=GetObject)
