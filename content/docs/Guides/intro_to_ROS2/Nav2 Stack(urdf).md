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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YA6NS6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDSCjKVnx7MEUaRzd4qFGVlkQHaQSQZYjj3%2FI71tchMbQIgOMNQfsZpysi9KTKk8asBcq6sa0EtBbX6ZiG70FgkZ0gq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBxGt7uHa0zTe5rfeyrcA%2BB0FvLLSHHg2M8rIuNy1Kvr3JjnJXhEDWpuNvjeUCr5TL2aAm5CpTdQs%2BXHbPlTFYJv6%2FXVhzd15VNEQ33WFoszN5jcBcm6a4h1JRALkNzFfgVIcfFum6twypnP404v6JWi5WOwQG%2Fi1feYF%2BReXgWOtIStTluCt%2BWbKtD3dWXaneV0hRrrdeuPJNdcaIc2rvZH%2FMpeIlFjNiqCeBp1k4e1PcWKvuwpvC94UMAnu4XNwWr82wjwgbtZTZG8GfaWkedfz1lYPX3S2Z5pozU4s9Uhb%2By1kohYGyGVkczdyrDkW%2B5fFTJ%2B9JTU%2FoCBlEqHZjmG40SFGjQxL4OjyZzh8mv8FOo737Jmmvv98sSoX8C86cJ4KgnyG6JyQrtnkXU1z045xaTYF2g4bZEdgp%2FhFgCGae3Y9siOlzfz%2BPJ%2FnEW2oF%2BvkkXN5%2Bi6KA7tkZq3OS7wczrx5Oqh0Hofo3krWzZa%2BqLapByuNVJW4H9KBSeYMM4%2B656vFoE973UyjyF%2FECJQI1p5RR%2Ft8mauKHwZCrkgU%2BvKd7m3mq0rtFaBLI4Sc5m6R0678iFtySI2RRP1QMGVbVIl5M8V9L5SVzK7d%2FBCuxtPoo%2FEBM6zIQ0Kam0zqn95JQ4xJXsOgeVuMJGoob8GOqUB0KSJP%2FTVBy6Le%2BauSBbj5TirqTy7%2BeHVcDVUW9ll9aqVNFQS9FB7ZCmHLvXFOfnp9muvwklOW6ti%2Bpmm1DvuCTlVqXHMsanj5OuKuNiVON8GsenFjeCLRBTwbxxX5%2BXSPNkK9UZ4h8HM32GEPmqrBbjImrcCKK%2F%2FbRlOuRgrUpLYwsmeSY7i%2F%2BocPbpUvjg3JyEjXDY9xVl9zNyDa6U7DaFB5BXi&X-Amz-Signature=ade58d3b7948061362591d63a09c4a1bf1eed0b92b1dcdbe85a3966480887d3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YA6NS6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDSCjKVnx7MEUaRzd4qFGVlkQHaQSQZYjj3%2FI71tchMbQIgOMNQfsZpysi9KTKk8asBcq6sa0EtBbX6ZiG70FgkZ0gq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBxGt7uHa0zTe5rfeyrcA%2BB0FvLLSHHg2M8rIuNy1Kvr3JjnJXhEDWpuNvjeUCr5TL2aAm5CpTdQs%2BXHbPlTFYJv6%2FXVhzd15VNEQ33WFoszN5jcBcm6a4h1JRALkNzFfgVIcfFum6twypnP404v6JWi5WOwQG%2Fi1feYF%2BReXgWOtIStTluCt%2BWbKtD3dWXaneV0hRrrdeuPJNdcaIc2rvZH%2FMpeIlFjNiqCeBp1k4e1PcWKvuwpvC94UMAnu4XNwWr82wjwgbtZTZG8GfaWkedfz1lYPX3S2Z5pozU4s9Uhb%2By1kohYGyGVkczdyrDkW%2B5fFTJ%2B9JTU%2FoCBlEqHZjmG40SFGjQxL4OjyZzh8mv8FOo737Jmmvv98sSoX8C86cJ4KgnyG6JyQrtnkXU1z045xaTYF2g4bZEdgp%2FhFgCGae3Y9siOlzfz%2BPJ%2FnEW2oF%2BvkkXN5%2Bi6KA7tkZq3OS7wczrx5Oqh0Hofo3krWzZa%2BqLapByuNVJW4H9KBSeYMM4%2B656vFoE973UyjyF%2FECJQI1p5RR%2Ft8mauKHwZCrkgU%2BvKd7m3mq0rtFaBLI4Sc5m6R0678iFtySI2RRP1QMGVbVIl5M8V9L5SVzK7d%2FBCuxtPoo%2FEBM6zIQ0Kam0zqn95JQ4xJXsOgeVuMJGoob8GOqUB0KSJP%2FTVBy6Le%2BauSBbj5TirqTy7%2BeHVcDVUW9ll9aqVNFQS9FB7ZCmHLvXFOfnp9muvwklOW6ti%2Bpmm1DvuCTlVqXHMsanj5OuKuNiVON8GsenFjeCLRBTwbxxX5%2BXSPNkK9UZ4h8HM32GEPmqrBbjImrcCKK%2F%2FbRlOuRgrUpLYwsmeSY7i%2F%2BocPbpUvjg3JyEjXDY9xVl9zNyDa6U7DaFB5BXi&X-Amz-Signature=4874116a1eb8445e16ad8df52fe2eb63d305f029cea7dfd9dd377ca6b5522a55&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YA6NS6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDSCjKVnx7MEUaRzd4qFGVlkQHaQSQZYjj3%2FI71tchMbQIgOMNQfsZpysi9KTKk8asBcq6sa0EtBbX6ZiG70FgkZ0gq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBxGt7uHa0zTe5rfeyrcA%2BB0FvLLSHHg2M8rIuNy1Kvr3JjnJXhEDWpuNvjeUCr5TL2aAm5CpTdQs%2BXHbPlTFYJv6%2FXVhzd15VNEQ33WFoszN5jcBcm6a4h1JRALkNzFfgVIcfFum6twypnP404v6JWi5WOwQG%2Fi1feYF%2BReXgWOtIStTluCt%2BWbKtD3dWXaneV0hRrrdeuPJNdcaIc2rvZH%2FMpeIlFjNiqCeBp1k4e1PcWKvuwpvC94UMAnu4XNwWr82wjwgbtZTZG8GfaWkedfz1lYPX3S2Z5pozU4s9Uhb%2By1kohYGyGVkczdyrDkW%2B5fFTJ%2B9JTU%2FoCBlEqHZjmG40SFGjQxL4OjyZzh8mv8FOo737Jmmvv98sSoX8C86cJ4KgnyG6JyQrtnkXU1z045xaTYF2g4bZEdgp%2FhFgCGae3Y9siOlzfz%2BPJ%2FnEW2oF%2BvkkXN5%2Bi6KA7tkZq3OS7wczrx5Oqh0Hofo3krWzZa%2BqLapByuNVJW4H9KBSeYMM4%2B656vFoE973UyjyF%2FECJQI1p5RR%2Ft8mauKHwZCrkgU%2BvKd7m3mq0rtFaBLI4Sc5m6R0678iFtySI2RRP1QMGVbVIl5M8V9L5SVzK7d%2FBCuxtPoo%2FEBM6zIQ0Kam0zqn95JQ4xJXsOgeVuMJGoob8GOqUB0KSJP%2FTVBy6Le%2BauSBbj5TirqTy7%2BeHVcDVUW9ll9aqVNFQS9FB7ZCmHLvXFOfnp9muvwklOW6ti%2Bpmm1DvuCTlVqXHMsanj5OuKuNiVON8GsenFjeCLRBTwbxxX5%2BXSPNkK9UZ4h8HM32GEPmqrBbjImrcCKK%2F%2FbRlOuRgrUpLYwsmeSY7i%2F%2BocPbpUvjg3JyEjXDY9xVl9zNyDa6U7DaFB5BXi&X-Amz-Signature=8934b5b060bcf43cf820e4ec8c3c9c1881715bb51e1b9e4997538337b5840992&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YA6NS6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDSCjKVnx7MEUaRzd4qFGVlkQHaQSQZYjj3%2FI71tchMbQIgOMNQfsZpysi9KTKk8asBcq6sa0EtBbX6ZiG70FgkZ0gq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBxGt7uHa0zTe5rfeyrcA%2BB0FvLLSHHg2M8rIuNy1Kvr3JjnJXhEDWpuNvjeUCr5TL2aAm5CpTdQs%2BXHbPlTFYJv6%2FXVhzd15VNEQ33WFoszN5jcBcm6a4h1JRALkNzFfgVIcfFum6twypnP404v6JWi5WOwQG%2Fi1feYF%2BReXgWOtIStTluCt%2BWbKtD3dWXaneV0hRrrdeuPJNdcaIc2rvZH%2FMpeIlFjNiqCeBp1k4e1PcWKvuwpvC94UMAnu4XNwWr82wjwgbtZTZG8GfaWkedfz1lYPX3S2Z5pozU4s9Uhb%2By1kohYGyGVkczdyrDkW%2B5fFTJ%2B9JTU%2FoCBlEqHZjmG40SFGjQxL4OjyZzh8mv8FOo737Jmmvv98sSoX8C86cJ4KgnyG6JyQrtnkXU1z045xaTYF2g4bZEdgp%2FhFgCGae3Y9siOlzfz%2BPJ%2FnEW2oF%2BvkkXN5%2Bi6KA7tkZq3OS7wczrx5Oqh0Hofo3krWzZa%2BqLapByuNVJW4H9KBSeYMM4%2B656vFoE973UyjyF%2FECJQI1p5RR%2Ft8mauKHwZCrkgU%2BvKd7m3mq0rtFaBLI4Sc5m6R0678iFtySI2RRP1QMGVbVIl5M8V9L5SVzK7d%2FBCuxtPoo%2FEBM6zIQ0Kam0zqn95JQ4xJXsOgeVuMJGoob8GOqUB0KSJP%2FTVBy6Le%2BauSBbj5TirqTy7%2BeHVcDVUW9ll9aqVNFQS9FB7ZCmHLvXFOfnp9muvwklOW6ti%2Bpmm1DvuCTlVqXHMsanj5OuKuNiVON8GsenFjeCLRBTwbxxX5%2BXSPNkK9UZ4h8HM32GEPmqrBbjImrcCKK%2F%2FbRlOuRgrUpLYwsmeSY7i%2F%2BocPbpUvjg3JyEjXDY9xVl9zNyDa6U7DaFB5BXi&X-Amz-Signature=d73e53811919432a6bfecf87c315159eae7d0f975e968da13a190ffc9d54b1d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YA6NS6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDSCjKVnx7MEUaRzd4qFGVlkQHaQSQZYjj3%2FI71tchMbQIgOMNQfsZpysi9KTKk8asBcq6sa0EtBbX6ZiG70FgkZ0gq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBxGt7uHa0zTe5rfeyrcA%2BB0FvLLSHHg2M8rIuNy1Kvr3JjnJXhEDWpuNvjeUCr5TL2aAm5CpTdQs%2BXHbPlTFYJv6%2FXVhzd15VNEQ33WFoszN5jcBcm6a4h1JRALkNzFfgVIcfFum6twypnP404v6JWi5WOwQG%2Fi1feYF%2BReXgWOtIStTluCt%2BWbKtD3dWXaneV0hRrrdeuPJNdcaIc2rvZH%2FMpeIlFjNiqCeBp1k4e1PcWKvuwpvC94UMAnu4XNwWr82wjwgbtZTZG8GfaWkedfz1lYPX3S2Z5pozU4s9Uhb%2By1kohYGyGVkczdyrDkW%2B5fFTJ%2B9JTU%2FoCBlEqHZjmG40SFGjQxL4OjyZzh8mv8FOo737Jmmvv98sSoX8C86cJ4KgnyG6JyQrtnkXU1z045xaTYF2g4bZEdgp%2FhFgCGae3Y9siOlzfz%2BPJ%2FnEW2oF%2BvkkXN5%2Bi6KA7tkZq3OS7wczrx5Oqh0Hofo3krWzZa%2BqLapByuNVJW4H9KBSeYMM4%2B656vFoE973UyjyF%2FECJQI1p5RR%2Ft8mauKHwZCrkgU%2BvKd7m3mq0rtFaBLI4Sc5m6R0678iFtySI2RRP1QMGVbVIl5M8V9L5SVzK7d%2FBCuxtPoo%2FEBM6zIQ0Kam0zqn95JQ4xJXsOgeVuMJGoob8GOqUB0KSJP%2FTVBy6Le%2BauSBbj5TirqTy7%2BeHVcDVUW9ll9aqVNFQS9FB7ZCmHLvXFOfnp9muvwklOW6ti%2Bpmm1DvuCTlVqXHMsanj5OuKuNiVON8GsenFjeCLRBTwbxxX5%2BXSPNkK9UZ4h8HM32GEPmqrBbjImrcCKK%2F%2FbRlOuRgrUpLYwsmeSY7i%2F%2BocPbpUvjg3JyEjXDY9xVl9zNyDa6U7DaFB5BXi&X-Amz-Signature=e8a96afe819597cad187038d882026965e69d141e410b5884bd33d8ada63bd8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4YA6NS6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQDSCjKVnx7MEUaRzd4qFGVlkQHaQSQZYjj3%2FI71tchMbQIgOMNQfsZpysi9KTKk8asBcq6sa0EtBbX6ZiG70FgkZ0gq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBxGt7uHa0zTe5rfeyrcA%2BB0FvLLSHHg2M8rIuNy1Kvr3JjnJXhEDWpuNvjeUCr5TL2aAm5CpTdQs%2BXHbPlTFYJv6%2FXVhzd15VNEQ33WFoszN5jcBcm6a4h1JRALkNzFfgVIcfFum6twypnP404v6JWi5WOwQG%2Fi1feYF%2BReXgWOtIStTluCt%2BWbKtD3dWXaneV0hRrrdeuPJNdcaIc2rvZH%2FMpeIlFjNiqCeBp1k4e1PcWKvuwpvC94UMAnu4XNwWr82wjwgbtZTZG8GfaWkedfz1lYPX3S2Z5pozU4s9Uhb%2By1kohYGyGVkczdyrDkW%2B5fFTJ%2B9JTU%2FoCBlEqHZjmG40SFGjQxL4OjyZzh8mv8FOo737Jmmvv98sSoX8C86cJ4KgnyG6JyQrtnkXU1z045xaTYF2g4bZEdgp%2FhFgCGae3Y9siOlzfz%2BPJ%2FnEW2oF%2BvkkXN5%2Bi6KA7tkZq3OS7wczrx5Oqh0Hofo3krWzZa%2BqLapByuNVJW4H9KBSeYMM4%2B656vFoE973UyjyF%2FECJQI1p5RR%2Ft8mauKHwZCrkgU%2BvKd7m3mq0rtFaBLI4Sc5m6R0678iFtySI2RRP1QMGVbVIl5M8V9L5SVzK7d%2FBCuxtPoo%2FEBM6zIQ0Kam0zqn95JQ4xJXsOgeVuMJGoob8GOqUB0KSJP%2FTVBy6Le%2BauSBbj5TirqTy7%2BeHVcDVUW9ll9aqVNFQS9FB7ZCmHLvXFOfnp9muvwklOW6ti%2Bpmm1DvuCTlVqXHMsanj5OuKuNiVON8GsenFjeCLRBTwbxxX5%2BXSPNkK9UZ4h8HM32GEPmqrBbjImrcCKK%2F%2FbRlOuRgrUpLYwsmeSY7i%2F%2BocPbpUvjg3JyEjXDY9xVl9zNyDa6U7DaFB5BXi&X-Amz-Signature=58c2d9c8c503ac159817a2bb353beda708371af1031261bc4ba8eeca4c83e25c&X-Amz-SignedHeaders=host&x-id=GetObject)
