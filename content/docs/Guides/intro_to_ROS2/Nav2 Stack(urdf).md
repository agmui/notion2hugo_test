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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653WBAPEH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDJS%2BofI0lt8oRfBl1AMoCxquStlDbhPGHp%2BavrS4nq2gIhAIOgMj3M1R6aslk%2B4XqzBh9fgSBdiqkA%2Byt%2BtYZUq9lYKv8DCDAQABoMNjM3NDIzMTgzODA1Igw3%2BqfZ0%2FhRZdsen18q3AM2g4Lekv0jIDrM%2F0JsYtLfTjE3cTGEh9nmaj5ghMv6mbCZrgh56GQNGnj5Zl2abpI7tQ6lI6298oVCNf%2FntRDxf5dZTV8VhRfaMmftEQ6hExbj70v%2B%2FyPHgh4CwcBc3mE2%2Ffb0%2F44eYbFU8ozZbiyMZLZUmNq0wuZxv7ME6c6bNGl5oKy6M5Fezaw%2Bf2C%2F%2Fokw02saPQo9YNOnbnjvAZV7kN6HBiI%2BRVxGUnpzlJRgo9H8H7Au9ufh%2FG8%2BX0hF5NyBHOvrSpVmbz2yX4nWkEQYC6cptDlgFSJsAi6uvUFsq3pgRa3BHxKoawywlXIvyySk93G2grMjjfcC6jLxzr8BdolZLLl6xNJ30jvJwco3wo4LN6%2FX%2FV5amK9HD9JbrMwC9Qcccf6D%2BONcO3vSzsAonKJOSaBnx3ty0rCZ31pIVLog2kkIbWxPUN3nd469ucxz1ZIf%2FCFC4c51ZZUlE5AZVehlnqsbmurXArX8nSOQ6XSCaT3NPApIEJEVSyuIXZ6s8WvYiQLdjUthGM%2BVR%2FYNR%2BB4LYgA%2BSeWxXKkWIrFoCA8Bv6buwAXrGCDJMrY9ley7QTvFLxqSzDtcbk6NRF2nNnka9L%2Bqb7ratKeuGSPY4LTdPeCr8jIfqv6PzCn38zBBjqkAbUJBF%2FRgB9ZVG1K%2FR7ZOxG9VOXAYX9kRyicuCLI9z3gDqP2DSHNCEN7OOq2yi%2FHh9AM1Pfe4CuB2Xbx3ujkUpozKJ0nbJ6xH5bvTwczyg2b1NjNc8a%2B9WUUIwcgwd3BtCnIfrVfaRDuwW1CXfUVCSQuwRoGHKd3z%2B3DNmplRIlzitQuC2b%2FRzU7TRFAByc2fJNrxO9XKM%2BVtTTwnJMCmRgIOHzv&X-Amz-Signature=0dcbe9e9839f5a9203a096ec1727a164843a843e4ca34705dff4b2c07677d3f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653WBAPEH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDJS%2BofI0lt8oRfBl1AMoCxquStlDbhPGHp%2BavrS4nq2gIhAIOgMj3M1R6aslk%2B4XqzBh9fgSBdiqkA%2Byt%2BtYZUq9lYKv8DCDAQABoMNjM3NDIzMTgzODA1Igw3%2BqfZ0%2FhRZdsen18q3AM2g4Lekv0jIDrM%2F0JsYtLfTjE3cTGEh9nmaj5ghMv6mbCZrgh56GQNGnj5Zl2abpI7tQ6lI6298oVCNf%2FntRDxf5dZTV8VhRfaMmftEQ6hExbj70v%2B%2FyPHgh4CwcBc3mE2%2Ffb0%2F44eYbFU8ozZbiyMZLZUmNq0wuZxv7ME6c6bNGl5oKy6M5Fezaw%2Bf2C%2F%2Fokw02saPQo9YNOnbnjvAZV7kN6HBiI%2BRVxGUnpzlJRgo9H8H7Au9ufh%2FG8%2BX0hF5NyBHOvrSpVmbz2yX4nWkEQYC6cptDlgFSJsAi6uvUFsq3pgRa3BHxKoawywlXIvyySk93G2grMjjfcC6jLxzr8BdolZLLl6xNJ30jvJwco3wo4LN6%2FX%2FV5amK9HD9JbrMwC9Qcccf6D%2BONcO3vSzsAonKJOSaBnx3ty0rCZ31pIVLog2kkIbWxPUN3nd469ucxz1ZIf%2FCFC4c51ZZUlE5AZVehlnqsbmurXArX8nSOQ6XSCaT3NPApIEJEVSyuIXZ6s8WvYiQLdjUthGM%2BVR%2FYNR%2BB4LYgA%2BSeWxXKkWIrFoCA8Bv6buwAXrGCDJMrY9ley7QTvFLxqSzDtcbk6NRF2nNnka9L%2Bqb7ratKeuGSPY4LTdPeCr8jIfqv6PzCn38zBBjqkAbUJBF%2FRgB9ZVG1K%2FR7ZOxG9VOXAYX9kRyicuCLI9z3gDqP2DSHNCEN7OOq2yi%2FHh9AM1Pfe4CuB2Xbx3ujkUpozKJ0nbJ6xH5bvTwczyg2b1NjNc8a%2B9WUUIwcgwd3BtCnIfrVfaRDuwW1CXfUVCSQuwRoGHKd3z%2B3DNmplRIlzitQuC2b%2FRzU7TRFAByc2fJNrxO9XKM%2BVtTTwnJMCmRgIOHzv&X-Amz-Signature=aea72479e50d4512c57be1754bb5c5efcbfb5de1ad2b2bb3138604708cd264ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653WBAPEH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDJS%2BofI0lt8oRfBl1AMoCxquStlDbhPGHp%2BavrS4nq2gIhAIOgMj3M1R6aslk%2B4XqzBh9fgSBdiqkA%2Byt%2BtYZUq9lYKv8DCDAQABoMNjM3NDIzMTgzODA1Igw3%2BqfZ0%2FhRZdsen18q3AM2g4Lekv0jIDrM%2F0JsYtLfTjE3cTGEh9nmaj5ghMv6mbCZrgh56GQNGnj5Zl2abpI7tQ6lI6298oVCNf%2FntRDxf5dZTV8VhRfaMmftEQ6hExbj70v%2B%2FyPHgh4CwcBc3mE2%2Ffb0%2F44eYbFU8ozZbiyMZLZUmNq0wuZxv7ME6c6bNGl5oKy6M5Fezaw%2Bf2C%2F%2Fokw02saPQo9YNOnbnjvAZV7kN6HBiI%2BRVxGUnpzlJRgo9H8H7Au9ufh%2FG8%2BX0hF5NyBHOvrSpVmbz2yX4nWkEQYC6cptDlgFSJsAi6uvUFsq3pgRa3BHxKoawywlXIvyySk93G2grMjjfcC6jLxzr8BdolZLLl6xNJ30jvJwco3wo4LN6%2FX%2FV5amK9HD9JbrMwC9Qcccf6D%2BONcO3vSzsAonKJOSaBnx3ty0rCZ31pIVLog2kkIbWxPUN3nd469ucxz1ZIf%2FCFC4c51ZZUlE5AZVehlnqsbmurXArX8nSOQ6XSCaT3NPApIEJEVSyuIXZ6s8WvYiQLdjUthGM%2BVR%2FYNR%2BB4LYgA%2BSeWxXKkWIrFoCA8Bv6buwAXrGCDJMrY9ley7QTvFLxqSzDtcbk6NRF2nNnka9L%2Bqb7ratKeuGSPY4LTdPeCr8jIfqv6PzCn38zBBjqkAbUJBF%2FRgB9ZVG1K%2FR7ZOxG9VOXAYX9kRyicuCLI9z3gDqP2DSHNCEN7OOq2yi%2FHh9AM1Pfe4CuB2Xbx3ujkUpozKJ0nbJ6xH5bvTwczyg2b1NjNc8a%2B9WUUIwcgwd3BtCnIfrVfaRDuwW1CXfUVCSQuwRoGHKd3z%2B3DNmplRIlzitQuC2b%2FRzU7TRFAByc2fJNrxO9XKM%2BVtTTwnJMCmRgIOHzv&X-Amz-Signature=49623f80c98d3d700c08856f7de29df1dc3bf42079aca028d799518a21a0ef2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653WBAPEH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDJS%2BofI0lt8oRfBl1AMoCxquStlDbhPGHp%2BavrS4nq2gIhAIOgMj3M1R6aslk%2B4XqzBh9fgSBdiqkA%2Byt%2BtYZUq9lYKv8DCDAQABoMNjM3NDIzMTgzODA1Igw3%2BqfZ0%2FhRZdsen18q3AM2g4Lekv0jIDrM%2F0JsYtLfTjE3cTGEh9nmaj5ghMv6mbCZrgh56GQNGnj5Zl2abpI7tQ6lI6298oVCNf%2FntRDxf5dZTV8VhRfaMmftEQ6hExbj70v%2B%2FyPHgh4CwcBc3mE2%2Ffb0%2F44eYbFU8ozZbiyMZLZUmNq0wuZxv7ME6c6bNGl5oKy6M5Fezaw%2Bf2C%2F%2Fokw02saPQo9YNOnbnjvAZV7kN6HBiI%2BRVxGUnpzlJRgo9H8H7Au9ufh%2FG8%2BX0hF5NyBHOvrSpVmbz2yX4nWkEQYC6cptDlgFSJsAi6uvUFsq3pgRa3BHxKoawywlXIvyySk93G2grMjjfcC6jLxzr8BdolZLLl6xNJ30jvJwco3wo4LN6%2FX%2FV5amK9HD9JbrMwC9Qcccf6D%2BONcO3vSzsAonKJOSaBnx3ty0rCZ31pIVLog2kkIbWxPUN3nd469ucxz1ZIf%2FCFC4c51ZZUlE5AZVehlnqsbmurXArX8nSOQ6XSCaT3NPApIEJEVSyuIXZ6s8WvYiQLdjUthGM%2BVR%2FYNR%2BB4LYgA%2BSeWxXKkWIrFoCA8Bv6buwAXrGCDJMrY9ley7QTvFLxqSzDtcbk6NRF2nNnka9L%2Bqb7ratKeuGSPY4LTdPeCr8jIfqv6PzCn38zBBjqkAbUJBF%2FRgB9ZVG1K%2FR7ZOxG9VOXAYX9kRyicuCLI9z3gDqP2DSHNCEN7OOq2yi%2FHh9AM1Pfe4CuB2Xbx3ujkUpozKJ0nbJ6xH5bvTwczyg2b1NjNc8a%2B9WUUIwcgwd3BtCnIfrVfaRDuwW1CXfUVCSQuwRoGHKd3z%2B3DNmplRIlzitQuC2b%2FRzU7TRFAByc2fJNrxO9XKM%2BVtTTwnJMCmRgIOHzv&X-Amz-Signature=b7711523d3b35df6622e8b97a679f960d54ba5c87c163b6a98bb44b5d8565ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653WBAPEH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDJS%2BofI0lt8oRfBl1AMoCxquStlDbhPGHp%2BavrS4nq2gIhAIOgMj3M1R6aslk%2B4XqzBh9fgSBdiqkA%2Byt%2BtYZUq9lYKv8DCDAQABoMNjM3NDIzMTgzODA1Igw3%2BqfZ0%2FhRZdsen18q3AM2g4Lekv0jIDrM%2F0JsYtLfTjE3cTGEh9nmaj5ghMv6mbCZrgh56GQNGnj5Zl2abpI7tQ6lI6298oVCNf%2FntRDxf5dZTV8VhRfaMmftEQ6hExbj70v%2B%2FyPHgh4CwcBc3mE2%2Ffb0%2F44eYbFU8ozZbiyMZLZUmNq0wuZxv7ME6c6bNGl5oKy6M5Fezaw%2Bf2C%2F%2Fokw02saPQo9YNOnbnjvAZV7kN6HBiI%2BRVxGUnpzlJRgo9H8H7Au9ufh%2FG8%2BX0hF5NyBHOvrSpVmbz2yX4nWkEQYC6cptDlgFSJsAi6uvUFsq3pgRa3BHxKoawywlXIvyySk93G2grMjjfcC6jLxzr8BdolZLLl6xNJ30jvJwco3wo4LN6%2FX%2FV5amK9HD9JbrMwC9Qcccf6D%2BONcO3vSzsAonKJOSaBnx3ty0rCZ31pIVLog2kkIbWxPUN3nd469ucxz1ZIf%2FCFC4c51ZZUlE5AZVehlnqsbmurXArX8nSOQ6XSCaT3NPApIEJEVSyuIXZ6s8WvYiQLdjUthGM%2BVR%2FYNR%2BB4LYgA%2BSeWxXKkWIrFoCA8Bv6buwAXrGCDJMrY9ley7QTvFLxqSzDtcbk6NRF2nNnka9L%2Bqb7ratKeuGSPY4LTdPeCr8jIfqv6PzCn38zBBjqkAbUJBF%2FRgB9ZVG1K%2FR7ZOxG9VOXAYX9kRyicuCLI9z3gDqP2DSHNCEN7OOq2yi%2FHh9AM1Pfe4CuB2Xbx3ujkUpozKJ0nbJ6xH5bvTwczyg2b1NjNc8a%2B9WUUIwcgwd3BtCnIfrVfaRDuwW1CXfUVCSQuwRoGHKd3z%2B3DNmplRIlzitQuC2b%2FRzU7TRFAByc2fJNrxO9XKM%2BVtTTwnJMCmRgIOHzv&X-Amz-Signature=801f15aea6c29465540bad44a7dfefaf3f0544c5dacfd2f0a83c80efec12ff41&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653WBAPEH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDJS%2BofI0lt8oRfBl1AMoCxquStlDbhPGHp%2BavrS4nq2gIhAIOgMj3M1R6aslk%2B4XqzBh9fgSBdiqkA%2Byt%2BtYZUq9lYKv8DCDAQABoMNjM3NDIzMTgzODA1Igw3%2BqfZ0%2FhRZdsen18q3AM2g4Lekv0jIDrM%2F0JsYtLfTjE3cTGEh9nmaj5ghMv6mbCZrgh56GQNGnj5Zl2abpI7tQ6lI6298oVCNf%2FntRDxf5dZTV8VhRfaMmftEQ6hExbj70v%2B%2FyPHgh4CwcBc3mE2%2Ffb0%2F44eYbFU8ozZbiyMZLZUmNq0wuZxv7ME6c6bNGl5oKy6M5Fezaw%2Bf2C%2F%2Fokw02saPQo9YNOnbnjvAZV7kN6HBiI%2BRVxGUnpzlJRgo9H8H7Au9ufh%2FG8%2BX0hF5NyBHOvrSpVmbz2yX4nWkEQYC6cptDlgFSJsAi6uvUFsq3pgRa3BHxKoawywlXIvyySk93G2grMjjfcC6jLxzr8BdolZLLl6xNJ30jvJwco3wo4LN6%2FX%2FV5amK9HD9JbrMwC9Qcccf6D%2BONcO3vSzsAonKJOSaBnx3ty0rCZ31pIVLog2kkIbWxPUN3nd469ucxz1ZIf%2FCFC4c51ZZUlE5AZVehlnqsbmurXArX8nSOQ6XSCaT3NPApIEJEVSyuIXZ6s8WvYiQLdjUthGM%2BVR%2FYNR%2BB4LYgA%2BSeWxXKkWIrFoCA8Bv6buwAXrGCDJMrY9ley7QTvFLxqSzDtcbk6NRF2nNnka9L%2Bqb7ratKeuGSPY4LTdPeCr8jIfqv6PzCn38zBBjqkAbUJBF%2FRgB9ZVG1K%2FR7ZOxG9VOXAYX9kRyicuCLI9z3gDqP2DSHNCEN7OOq2yi%2FHh9AM1Pfe4CuB2Xbx3ujkUpozKJ0nbJ6xH5bvTwczyg2b1NjNc8a%2B9WUUIwcgwd3BtCnIfrVfaRDuwW1CXfUVCSQuwRoGHKd3z%2B3DNmplRIlzitQuC2b%2FRzU7TRFAByc2fJNrxO9XKM%2BVtTTwnJMCmRgIOHzv&X-Amz-Signature=f66368e3894e218b18f518a5dea84927c0a24ded0b0c39a8796c6c435998705d&X-Amz-SignedHeaders=host&x-id=GetObject)
