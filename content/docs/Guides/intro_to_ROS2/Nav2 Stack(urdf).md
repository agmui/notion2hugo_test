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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBPTLKX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5fi79hWJkf9qeTcMGsk58%2FQY0%2FiuF0w6DzHcbZANSpgIhANxvB8IQKM%2Fn24H6NYbBiULo5AoVejuDOGpYOFcz2RiRKv8DCDQQABoMNjM3NDIzMTgzODA1IgyHfIBkhk7eJiCLc4kq3AMcDKbU%2FyiP%2Btah57FdBtUk6Y0aK3rIf7X1BTe18bp7qO9iUBo2XevRDgCzbgBmOxSwDz5ZbbRTtEMKyHEzqTbKkbCNZ4CCWDFztpoPTR8Rbkj0m1yAIemUBt9AjgfV6RGnGCSVoech0r3BLBmpFP9skQPH8nDIZAb34875lXqCyDG4JbqNdlzkzaKZxCNxrsfadA9knPR0pSRKfKLyTGlPLcYE4BqyO8wMKVDmhRP5Mn0CeAfOzpbkZ8WyM2kVf85Ob4SwiVyJyUMD8wo75IcKO6J%2B5Grpw3oXgY1AZ%2ByD%2FOcLcY43sN4gK%2FvSElkz%2FheYFCrSbQL88OjaHarN8BYCQXsHLEhgO5TDd3wM0n5mZO3k0li9WVx3TY53hAK6Q5ja3A3BjIXLyNHGF30%2FAGmsfO5Yh3mTFt2TDrN0FzgyFnCNnuDA9jQcKXRy7TmtwjXF%2F9vVBwSzC5BYQ5upcVGShnHE9ylACsiIEiXBg8SMCSdoSI4OR4%2FnsHwVhVXwOI7zsJ40prVtxXmEULNVZESkhQbrFWjI9aB1FnaQ8QS34qY8c4opJV1IrYrC4PbEFDaNGCu7mjxMR5CjE7oHgGcx0QbTY2diEIbapSbF3DnrnaiLb6HfIxef9bAd4jDh%2FPK9BjqkAdymiRsXnrEFrOucq3oYXtgPYcZt9%2FTzeSjkhshVrluSLqkIZxmGwPezjSvWjEaKosOOLcRjt%2FfN5u%2B5sFD5FVpQAhS%2BWUr8c5cEbkFV2O6W2WX819CN2qEqQpybWZ0aqjLqsl%2BBNs9z4ruUm2akbg%2FOkQ6LAim6z3SCdS6SjOSa9bkK32l8CaIoTjgWVD2MWOiI0%2FREh7CD%2F7jzhrQJK0sAi2%2Bi&X-Amz-Signature=b9651b87fc1cf7198429fa16445315144755b02bce93a98c2da8cb4e4713bb82&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBPTLKX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5fi79hWJkf9qeTcMGsk58%2FQY0%2FiuF0w6DzHcbZANSpgIhANxvB8IQKM%2Fn24H6NYbBiULo5AoVejuDOGpYOFcz2RiRKv8DCDQQABoMNjM3NDIzMTgzODA1IgyHfIBkhk7eJiCLc4kq3AMcDKbU%2FyiP%2Btah57FdBtUk6Y0aK3rIf7X1BTe18bp7qO9iUBo2XevRDgCzbgBmOxSwDz5ZbbRTtEMKyHEzqTbKkbCNZ4CCWDFztpoPTR8Rbkj0m1yAIemUBt9AjgfV6RGnGCSVoech0r3BLBmpFP9skQPH8nDIZAb34875lXqCyDG4JbqNdlzkzaKZxCNxrsfadA9knPR0pSRKfKLyTGlPLcYE4BqyO8wMKVDmhRP5Mn0CeAfOzpbkZ8WyM2kVf85Ob4SwiVyJyUMD8wo75IcKO6J%2B5Grpw3oXgY1AZ%2ByD%2FOcLcY43sN4gK%2FvSElkz%2FheYFCrSbQL88OjaHarN8BYCQXsHLEhgO5TDd3wM0n5mZO3k0li9WVx3TY53hAK6Q5ja3A3BjIXLyNHGF30%2FAGmsfO5Yh3mTFt2TDrN0FzgyFnCNnuDA9jQcKXRy7TmtwjXF%2F9vVBwSzC5BYQ5upcVGShnHE9ylACsiIEiXBg8SMCSdoSI4OR4%2FnsHwVhVXwOI7zsJ40prVtxXmEULNVZESkhQbrFWjI9aB1FnaQ8QS34qY8c4opJV1IrYrC4PbEFDaNGCu7mjxMR5CjE7oHgGcx0QbTY2diEIbapSbF3DnrnaiLb6HfIxef9bAd4jDh%2FPK9BjqkAdymiRsXnrEFrOucq3oYXtgPYcZt9%2FTzeSjkhshVrluSLqkIZxmGwPezjSvWjEaKosOOLcRjt%2FfN5u%2B5sFD5FVpQAhS%2BWUr8c5cEbkFV2O6W2WX819CN2qEqQpybWZ0aqjLqsl%2BBNs9z4ruUm2akbg%2FOkQ6LAim6z3SCdS6SjOSa9bkK32l8CaIoTjgWVD2MWOiI0%2FREh7CD%2F7jzhrQJK0sAi2%2Bi&X-Amz-Signature=e9d788b8c4064df84da2986ef9c8436482af4080afc95ff2377971609a1a1476&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBPTLKX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5fi79hWJkf9qeTcMGsk58%2FQY0%2FiuF0w6DzHcbZANSpgIhANxvB8IQKM%2Fn24H6NYbBiULo5AoVejuDOGpYOFcz2RiRKv8DCDQQABoMNjM3NDIzMTgzODA1IgyHfIBkhk7eJiCLc4kq3AMcDKbU%2FyiP%2Btah57FdBtUk6Y0aK3rIf7X1BTe18bp7qO9iUBo2XevRDgCzbgBmOxSwDz5ZbbRTtEMKyHEzqTbKkbCNZ4CCWDFztpoPTR8Rbkj0m1yAIemUBt9AjgfV6RGnGCSVoech0r3BLBmpFP9skQPH8nDIZAb34875lXqCyDG4JbqNdlzkzaKZxCNxrsfadA9knPR0pSRKfKLyTGlPLcYE4BqyO8wMKVDmhRP5Mn0CeAfOzpbkZ8WyM2kVf85Ob4SwiVyJyUMD8wo75IcKO6J%2B5Grpw3oXgY1AZ%2ByD%2FOcLcY43sN4gK%2FvSElkz%2FheYFCrSbQL88OjaHarN8BYCQXsHLEhgO5TDd3wM0n5mZO3k0li9WVx3TY53hAK6Q5ja3A3BjIXLyNHGF30%2FAGmsfO5Yh3mTFt2TDrN0FzgyFnCNnuDA9jQcKXRy7TmtwjXF%2F9vVBwSzC5BYQ5upcVGShnHE9ylACsiIEiXBg8SMCSdoSI4OR4%2FnsHwVhVXwOI7zsJ40prVtxXmEULNVZESkhQbrFWjI9aB1FnaQ8QS34qY8c4opJV1IrYrC4PbEFDaNGCu7mjxMR5CjE7oHgGcx0QbTY2diEIbapSbF3DnrnaiLb6HfIxef9bAd4jDh%2FPK9BjqkAdymiRsXnrEFrOucq3oYXtgPYcZt9%2FTzeSjkhshVrluSLqkIZxmGwPezjSvWjEaKosOOLcRjt%2FfN5u%2B5sFD5FVpQAhS%2BWUr8c5cEbkFV2O6W2WX819CN2qEqQpybWZ0aqjLqsl%2BBNs9z4ruUm2akbg%2FOkQ6LAim6z3SCdS6SjOSa9bkK32l8CaIoTjgWVD2MWOiI0%2FREh7CD%2F7jzhrQJK0sAi2%2Bi&X-Amz-Signature=8bf35366c16c17e40cc7a0de82b7d022421c24952ae0b8a17c8feb2eea748ee7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBPTLKX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5fi79hWJkf9qeTcMGsk58%2FQY0%2FiuF0w6DzHcbZANSpgIhANxvB8IQKM%2Fn24H6NYbBiULo5AoVejuDOGpYOFcz2RiRKv8DCDQQABoMNjM3NDIzMTgzODA1IgyHfIBkhk7eJiCLc4kq3AMcDKbU%2FyiP%2Btah57FdBtUk6Y0aK3rIf7X1BTe18bp7qO9iUBo2XevRDgCzbgBmOxSwDz5ZbbRTtEMKyHEzqTbKkbCNZ4CCWDFztpoPTR8Rbkj0m1yAIemUBt9AjgfV6RGnGCSVoech0r3BLBmpFP9skQPH8nDIZAb34875lXqCyDG4JbqNdlzkzaKZxCNxrsfadA9knPR0pSRKfKLyTGlPLcYE4BqyO8wMKVDmhRP5Mn0CeAfOzpbkZ8WyM2kVf85Ob4SwiVyJyUMD8wo75IcKO6J%2B5Grpw3oXgY1AZ%2ByD%2FOcLcY43sN4gK%2FvSElkz%2FheYFCrSbQL88OjaHarN8BYCQXsHLEhgO5TDd3wM0n5mZO3k0li9WVx3TY53hAK6Q5ja3A3BjIXLyNHGF30%2FAGmsfO5Yh3mTFt2TDrN0FzgyFnCNnuDA9jQcKXRy7TmtwjXF%2F9vVBwSzC5BYQ5upcVGShnHE9ylACsiIEiXBg8SMCSdoSI4OR4%2FnsHwVhVXwOI7zsJ40prVtxXmEULNVZESkhQbrFWjI9aB1FnaQ8QS34qY8c4opJV1IrYrC4PbEFDaNGCu7mjxMR5CjE7oHgGcx0QbTY2diEIbapSbF3DnrnaiLb6HfIxef9bAd4jDh%2FPK9BjqkAdymiRsXnrEFrOucq3oYXtgPYcZt9%2FTzeSjkhshVrluSLqkIZxmGwPezjSvWjEaKosOOLcRjt%2FfN5u%2B5sFD5FVpQAhS%2BWUr8c5cEbkFV2O6W2WX819CN2qEqQpybWZ0aqjLqsl%2BBNs9z4ruUm2akbg%2FOkQ6LAim6z3SCdS6SjOSa9bkK32l8CaIoTjgWVD2MWOiI0%2FREh7CD%2F7jzhrQJK0sAi2%2Bi&X-Amz-Signature=9b3e6533af77cbf1d0b10568a1bdd3cbd842198e287db73ffb9c60c42201fc87&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBPTLKX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5fi79hWJkf9qeTcMGsk58%2FQY0%2FiuF0w6DzHcbZANSpgIhANxvB8IQKM%2Fn24H6NYbBiULo5AoVejuDOGpYOFcz2RiRKv8DCDQQABoMNjM3NDIzMTgzODA1IgyHfIBkhk7eJiCLc4kq3AMcDKbU%2FyiP%2Btah57FdBtUk6Y0aK3rIf7X1BTe18bp7qO9iUBo2XevRDgCzbgBmOxSwDz5ZbbRTtEMKyHEzqTbKkbCNZ4CCWDFztpoPTR8Rbkj0m1yAIemUBt9AjgfV6RGnGCSVoech0r3BLBmpFP9skQPH8nDIZAb34875lXqCyDG4JbqNdlzkzaKZxCNxrsfadA9knPR0pSRKfKLyTGlPLcYE4BqyO8wMKVDmhRP5Mn0CeAfOzpbkZ8WyM2kVf85Ob4SwiVyJyUMD8wo75IcKO6J%2B5Grpw3oXgY1AZ%2ByD%2FOcLcY43sN4gK%2FvSElkz%2FheYFCrSbQL88OjaHarN8BYCQXsHLEhgO5TDd3wM0n5mZO3k0li9WVx3TY53hAK6Q5ja3A3BjIXLyNHGF30%2FAGmsfO5Yh3mTFt2TDrN0FzgyFnCNnuDA9jQcKXRy7TmtwjXF%2F9vVBwSzC5BYQ5upcVGShnHE9ylACsiIEiXBg8SMCSdoSI4OR4%2FnsHwVhVXwOI7zsJ40prVtxXmEULNVZESkhQbrFWjI9aB1FnaQ8QS34qY8c4opJV1IrYrC4PbEFDaNGCu7mjxMR5CjE7oHgGcx0QbTY2diEIbapSbF3DnrnaiLb6HfIxef9bAd4jDh%2FPK9BjqkAdymiRsXnrEFrOucq3oYXtgPYcZt9%2FTzeSjkhshVrluSLqkIZxmGwPezjSvWjEaKosOOLcRjt%2FfN5u%2B5sFD5FVpQAhS%2BWUr8c5cEbkFV2O6W2WX819CN2qEqQpybWZ0aqjLqsl%2BBNs9z4ruUm2akbg%2FOkQ6LAim6z3SCdS6SjOSa9bkK32l8CaIoTjgWVD2MWOiI0%2FREh7CD%2F7jzhrQJK0sAi2%2Bi&X-Amz-Signature=9678a8f68d38da172f81518978db611e0da4a93d599c66e8a411d19e8f486b67&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJBPTLKX%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5fi79hWJkf9qeTcMGsk58%2FQY0%2FiuF0w6DzHcbZANSpgIhANxvB8IQKM%2Fn24H6NYbBiULo5AoVejuDOGpYOFcz2RiRKv8DCDQQABoMNjM3NDIzMTgzODA1IgyHfIBkhk7eJiCLc4kq3AMcDKbU%2FyiP%2Btah57FdBtUk6Y0aK3rIf7X1BTe18bp7qO9iUBo2XevRDgCzbgBmOxSwDz5ZbbRTtEMKyHEzqTbKkbCNZ4CCWDFztpoPTR8Rbkj0m1yAIemUBt9AjgfV6RGnGCSVoech0r3BLBmpFP9skQPH8nDIZAb34875lXqCyDG4JbqNdlzkzaKZxCNxrsfadA9knPR0pSRKfKLyTGlPLcYE4BqyO8wMKVDmhRP5Mn0CeAfOzpbkZ8WyM2kVf85Ob4SwiVyJyUMD8wo75IcKO6J%2B5Grpw3oXgY1AZ%2ByD%2FOcLcY43sN4gK%2FvSElkz%2FheYFCrSbQL88OjaHarN8BYCQXsHLEhgO5TDd3wM0n5mZO3k0li9WVx3TY53hAK6Q5ja3A3BjIXLyNHGF30%2FAGmsfO5Yh3mTFt2TDrN0FzgyFnCNnuDA9jQcKXRy7TmtwjXF%2F9vVBwSzC5BYQ5upcVGShnHE9ylACsiIEiXBg8SMCSdoSI4OR4%2FnsHwVhVXwOI7zsJ40prVtxXmEULNVZESkhQbrFWjI9aB1FnaQ8QS34qY8c4opJV1IrYrC4PbEFDaNGCu7mjxMR5CjE7oHgGcx0QbTY2diEIbapSbF3DnrnaiLb6HfIxef9bAd4jDh%2FPK9BjqkAdymiRsXnrEFrOucq3oYXtgPYcZt9%2FTzeSjkhshVrluSLqkIZxmGwPezjSvWjEaKosOOLcRjt%2FfN5u%2B5sFD5FVpQAhS%2BWUr8c5cEbkFV2O6W2WX819CN2qEqQpybWZ0aqjLqsl%2BBNs9z4ruUm2akbg%2FOkQ6LAim6z3SCdS6SjOSa9bkK32l8CaIoTjgWVD2MWOiI0%2FREh7CD%2F7jzhrQJK0sAi2%2Bi&X-Amz-Signature=dcf0755a6ce6b27edf5b429055b7922b5dd1e34d9a709628ecf0897cf4d12159&X-Amz-SignedHeaders=host&x-id=GetObject)
