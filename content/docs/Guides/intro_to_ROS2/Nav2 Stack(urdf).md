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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2WAYZRB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWD7zWnC9E4loGdmW0GxsKLQlq%2BoQrBRFAkHIkzxlG8gIgNZQ7JDE1lnVdebNUQPn3wMx5pvbsDDdR%2BZpdO2YnDJEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMOC%2BN88Ebnhmx%2F4RCrcA30eU0LIo9dVLsBBOu3V3KsjFvaSLG0Ym7RzTxnkNRyeC3LQfmsLTjOYTEqfZrCGGEgGx2e%2F%2FOBf4sm8R96tYwCdZ%2F4mpUrkwZCZY3CM8ZQ0LB%2FVq746ZZ8X8nvi8a61MYOoXwbKwNt0X6TzZ7jk1gUhBbZ%2BwT3h69ccFBvrTOWLuUeiGp%2F388fFGYzaVJbEtdP52GDVzLRPCu9nGmPg4itOtXyjGHRc73EQ5jN6FlGuIEGoufSw7ujOXysHw10mvwyOgqyg%2BayXiXyCdnxxDF7U6Nv3CYdNJ30SvuXKX7szbXsUzVwUB99aZG2j1OTEZxVwxyqOzDZG95io7%2FrSbjxzAABxsH%2BqHQzUColb1SYrxuqvK8x2YkDJEqcXAuxijIdPXTfhRgRkJR5uV4L4tvMPfActM9E2ZESOipBt8hI8CQHcpa5%2FSE%2BUVeTmEOhEazYKGg8fm1LHal%2BQxebtGaVTzOa3cGVY99v6lUBPUwGqJZY1JrCOehNZIKCDDDvaEKYdqaFnTIZJk70miXaeOY3t041w6obHxk8IXWK%2FHETK%2Fmg2iOmIRQBI4xbWhDz8j5Q8szJ6hBPRpajL2fC6evUwvxCYDJG8MlAVqZzY0twG6jltUkxl4eJtf2kNMOb%2FyL8GOqUBOqANCnj7ORWbdAL2oJvbG0jwVUcEj6ErIH2HYvdf5cLZHcSE37NVByiaMd3SwIR1smJQRB%2BZu6DKuAGFDXKjKa20Fg0dyK%2F5EY50XrWnqsxGrxS4RpOVE3rkL6kuAzVm0fB4u9uH7m3spMw9X7wv40eo7uCvlF51Gh65G39GguxtEV%2BaxYp7tq8k3KHKwUzDw9TON36GMQV6ROLjXCwzl2zval%2FK&X-Amz-Signature=0a8490893c8778dde3f30aa98bcb6156de01d77e21e3ee8880ed988bf222b6ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2WAYZRB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWD7zWnC9E4loGdmW0GxsKLQlq%2BoQrBRFAkHIkzxlG8gIgNZQ7JDE1lnVdebNUQPn3wMx5pvbsDDdR%2BZpdO2YnDJEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMOC%2BN88Ebnhmx%2F4RCrcA30eU0LIo9dVLsBBOu3V3KsjFvaSLG0Ym7RzTxnkNRyeC3LQfmsLTjOYTEqfZrCGGEgGx2e%2F%2FOBf4sm8R96tYwCdZ%2F4mpUrkwZCZY3CM8ZQ0LB%2FVq746ZZ8X8nvi8a61MYOoXwbKwNt0X6TzZ7jk1gUhBbZ%2BwT3h69ccFBvrTOWLuUeiGp%2F388fFGYzaVJbEtdP52GDVzLRPCu9nGmPg4itOtXyjGHRc73EQ5jN6FlGuIEGoufSw7ujOXysHw10mvwyOgqyg%2BayXiXyCdnxxDF7U6Nv3CYdNJ30SvuXKX7szbXsUzVwUB99aZG2j1OTEZxVwxyqOzDZG95io7%2FrSbjxzAABxsH%2BqHQzUColb1SYrxuqvK8x2YkDJEqcXAuxijIdPXTfhRgRkJR5uV4L4tvMPfActM9E2ZESOipBt8hI8CQHcpa5%2FSE%2BUVeTmEOhEazYKGg8fm1LHal%2BQxebtGaVTzOa3cGVY99v6lUBPUwGqJZY1JrCOehNZIKCDDDvaEKYdqaFnTIZJk70miXaeOY3t041w6obHxk8IXWK%2FHETK%2Fmg2iOmIRQBI4xbWhDz8j5Q8szJ6hBPRpajL2fC6evUwvxCYDJG8MlAVqZzY0twG6jltUkxl4eJtf2kNMOb%2FyL8GOqUBOqANCnj7ORWbdAL2oJvbG0jwVUcEj6ErIH2HYvdf5cLZHcSE37NVByiaMd3SwIR1smJQRB%2BZu6DKuAGFDXKjKa20Fg0dyK%2F5EY50XrWnqsxGrxS4RpOVE3rkL6kuAzVm0fB4u9uH7m3spMw9X7wv40eo7uCvlF51Gh65G39GguxtEV%2BaxYp7tq8k3KHKwUzDw9TON36GMQV6ROLjXCwzl2zval%2FK&X-Amz-Signature=8c2641ecedf030cf137bed111699bcf97aaaaeb8b0a390145da0ef73e8845ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2WAYZRB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWD7zWnC9E4loGdmW0GxsKLQlq%2BoQrBRFAkHIkzxlG8gIgNZQ7JDE1lnVdebNUQPn3wMx5pvbsDDdR%2BZpdO2YnDJEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMOC%2BN88Ebnhmx%2F4RCrcA30eU0LIo9dVLsBBOu3V3KsjFvaSLG0Ym7RzTxnkNRyeC3LQfmsLTjOYTEqfZrCGGEgGx2e%2F%2FOBf4sm8R96tYwCdZ%2F4mpUrkwZCZY3CM8ZQ0LB%2FVq746ZZ8X8nvi8a61MYOoXwbKwNt0X6TzZ7jk1gUhBbZ%2BwT3h69ccFBvrTOWLuUeiGp%2F388fFGYzaVJbEtdP52GDVzLRPCu9nGmPg4itOtXyjGHRc73EQ5jN6FlGuIEGoufSw7ujOXysHw10mvwyOgqyg%2BayXiXyCdnxxDF7U6Nv3CYdNJ30SvuXKX7szbXsUzVwUB99aZG2j1OTEZxVwxyqOzDZG95io7%2FrSbjxzAABxsH%2BqHQzUColb1SYrxuqvK8x2YkDJEqcXAuxijIdPXTfhRgRkJR5uV4L4tvMPfActM9E2ZESOipBt8hI8CQHcpa5%2FSE%2BUVeTmEOhEazYKGg8fm1LHal%2BQxebtGaVTzOa3cGVY99v6lUBPUwGqJZY1JrCOehNZIKCDDDvaEKYdqaFnTIZJk70miXaeOY3t041w6obHxk8IXWK%2FHETK%2Fmg2iOmIRQBI4xbWhDz8j5Q8szJ6hBPRpajL2fC6evUwvxCYDJG8MlAVqZzY0twG6jltUkxl4eJtf2kNMOb%2FyL8GOqUBOqANCnj7ORWbdAL2oJvbG0jwVUcEj6ErIH2HYvdf5cLZHcSE37NVByiaMd3SwIR1smJQRB%2BZu6DKuAGFDXKjKa20Fg0dyK%2F5EY50XrWnqsxGrxS4RpOVE3rkL6kuAzVm0fB4u9uH7m3spMw9X7wv40eo7uCvlF51Gh65G39GguxtEV%2BaxYp7tq8k3KHKwUzDw9TON36GMQV6ROLjXCwzl2zval%2FK&X-Amz-Signature=3239db6c58777d4e0ee68fbc2b77099e5d414933f7311a9aa04ef75785ff8085&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2WAYZRB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWD7zWnC9E4loGdmW0GxsKLQlq%2BoQrBRFAkHIkzxlG8gIgNZQ7JDE1lnVdebNUQPn3wMx5pvbsDDdR%2BZpdO2YnDJEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMOC%2BN88Ebnhmx%2F4RCrcA30eU0LIo9dVLsBBOu3V3KsjFvaSLG0Ym7RzTxnkNRyeC3LQfmsLTjOYTEqfZrCGGEgGx2e%2F%2FOBf4sm8R96tYwCdZ%2F4mpUrkwZCZY3CM8ZQ0LB%2FVq746ZZ8X8nvi8a61MYOoXwbKwNt0X6TzZ7jk1gUhBbZ%2BwT3h69ccFBvrTOWLuUeiGp%2F388fFGYzaVJbEtdP52GDVzLRPCu9nGmPg4itOtXyjGHRc73EQ5jN6FlGuIEGoufSw7ujOXysHw10mvwyOgqyg%2BayXiXyCdnxxDF7U6Nv3CYdNJ30SvuXKX7szbXsUzVwUB99aZG2j1OTEZxVwxyqOzDZG95io7%2FrSbjxzAABxsH%2BqHQzUColb1SYrxuqvK8x2YkDJEqcXAuxijIdPXTfhRgRkJR5uV4L4tvMPfActM9E2ZESOipBt8hI8CQHcpa5%2FSE%2BUVeTmEOhEazYKGg8fm1LHal%2BQxebtGaVTzOa3cGVY99v6lUBPUwGqJZY1JrCOehNZIKCDDDvaEKYdqaFnTIZJk70miXaeOY3t041w6obHxk8IXWK%2FHETK%2Fmg2iOmIRQBI4xbWhDz8j5Q8szJ6hBPRpajL2fC6evUwvxCYDJG8MlAVqZzY0twG6jltUkxl4eJtf2kNMOb%2FyL8GOqUBOqANCnj7ORWbdAL2oJvbG0jwVUcEj6ErIH2HYvdf5cLZHcSE37NVByiaMd3SwIR1smJQRB%2BZu6DKuAGFDXKjKa20Fg0dyK%2F5EY50XrWnqsxGrxS4RpOVE3rkL6kuAzVm0fB4u9uH7m3spMw9X7wv40eo7uCvlF51Gh65G39GguxtEV%2BaxYp7tq8k3KHKwUzDw9TON36GMQV6ROLjXCwzl2zval%2FK&X-Amz-Signature=9dd5237b483b77b79454012e2bc167d53219a35cecf1c45a895c608e021146bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2WAYZRB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWD7zWnC9E4loGdmW0GxsKLQlq%2BoQrBRFAkHIkzxlG8gIgNZQ7JDE1lnVdebNUQPn3wMx5pvbsDDdR%2BZpdO2YnDJEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMOC%2BN88Ebnhmx%2F4RCrcA30eU0LIo9dVLsBBOu3V3KsjFvaSLG0Ym7RzTxnkNRyeC3LQfmsLTjOYTEqfZrCGGEgGx2e%2F%2FOBf4sm8R96tYwCdZ%2F4mpUrkwZCZY3CM8ZQ0LB%2FVq746ZZ8X8nvi8a61MYOoXwbKwNt0X6TzZ7jk1gUhBbZ%2BwT3h69ccFBvrTOWLuUeiGp%2F388fFGYzaVJbEtdP52GDVzLRPCu9nGmPg4itOtXyjGHRc73EQ5jN6FlGuIEGoufSw7ujOXysHw10mvwyOgqyg%2BayXiXyCdnxxDF7U6Nv3CYdNJ30SvuXKX7szbXsUzVwUB99aZG2j1OTEZxVwxyqOzDZG95io7%2FrSbjxzAABxsH%2BqHQzUColb1SYrxuqvK8x2YkDJEqcXAuxijIdPXTfhRgRkJR5uV4L4tvMPfActM9E2ZESOipBt8hI8CQHcpa5%2FSE%2BUVeTmEOhEazYKGg8fm1LHal%2BQxebtGaVTzOa3cGVY99v6lUBPUwGqJZY1JrCOehNZIKCDDDvaEKYdqaFnTIZJk70miXaeOY3t041w6obHxk8IXWK%2FHETK%2Fmg2iOmIRQBI4xbWhDz8j5Q8szJ6hBPRpajL2fC6evUwvxCYDJG8MlAVqZzY0twG6jltUkxl4eJtf2kNMOb%2FyL8GOqUBOqANCnj7ORWbdAL2oJvbG0jwVUcEj6ErIH2HYvdf5cLZHcSE37NVByiaMd3SwIR1smJQRB%2BZu6DKuAGFDXKjKa20Fg0dyK%2F5EY50XrWnqsxGrxS4RpOVE3rkL6kuAzVm0fB4u9uH7m3spMw9X7wv40eo7uCvlF51Gh65G39GguxtEV%2BaxYp7tq8k3KHKwUzDw9TON36GMQV6ROLjXCwzl2zval%2FK&X-Amz-Signature=08315cfc3cf7a23f53a24f9009025d1853feed726d6cf092a100e251b69c7683&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2WAYZRB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T140255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWD7zWnC9E4loGdmW0GxsKLQlq%2BoQrBRFAkHIkzxlG8gIgNZQ7JDE1lnVdebNUQPn3wMx5pvbsDDdR%2BZpdO2YnDJEq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDMOC%2BN88Ebnhmx%2F4RCrcA30eU0LIo9dVLsBBOu3V3KsjFvaSLG0Ym7RzTxnkNRyeC3LQfmsLTjOYTEqfZrCGGEgGx2e%2F%2FOBf4sm8R96tYwCdZ%2F4mpUrkwZCZY3CM8ZQ0LB%2FVq746ZZ8X8nvi8a61MYOoXwbKwNt0X6TzZ7jk1gUhBbZ%2BwT3h69ccFBvrTOWLuUeiGp%2F388fFGYzaVJbEtdP52GDVzLRPCu9nGmPg4itOtXyjGHRc73EQ5jN6FlGuIEGoufSw7ujOXysHw10mvwyOgqyg%2BayXiXyCdnxxDF7U6Nv3CYdNJ30SvuXKX7szbXsUzVwUB99aZG2j1OTEZxVwxyqOzDZG95io7%2FrSbjxzAABxsH%2BqHQzUColb1SYrxuqvK8x2YkDJEqcXAuxijIdPXTfhRgRkJR5uV4L4tvMPfActM9E2ZESOipBt8hI8CQHcpa5%2FSE%2BUVeTmEOhEazYKGg8fm1LHal%2BQxebtGaVTzOa3cGVY99v6lUBPUwGqJZY1JrCOehNZIKCDDDvaEKYdqaFnTIZJk70miXaeOY3t041w6obHxk8IXWK%2FHETK%2Fmg2iOmIRQBI4xbWhDz8j5Q8szJ6hBPRpajL2fC6evUwvxCYDJG8MlAVqZzY0twG6jltUkxl4eJtf2kNMOb%2FyL8GOqUBOqANCnj7ORWbdAL2oJvbG0jwVUcEj6ErIH2HYvdf5cLZHcSE37NVByiaMd3SwIR1smJQRB%2BZu6DKuAGFDXKjKa20Fg0dyK%2F5EY50XrWnqsxGrxS4RpOVE3rkL6kuAzVm0fB4u9uH7m3spMw9X7wv40eo7uCvlF51Gh65G39GguxtEV%2BaxYp7tq8k3KHKwUzDw9TON36GMQV6ROLjXCwzl2zval%2FK&X-Amz-Signature=39a57caf988f34a9b725e91df1596b420a8eb49479d272d19d8402b8d09dc7f7&X-Amz-SignedHeaders=host&x-id=GetObject)
