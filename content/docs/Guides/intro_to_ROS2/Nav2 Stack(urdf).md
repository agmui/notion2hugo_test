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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYIKU4A%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICa0tMkh3dT9Bw7fayhdbxSNGEzP%2BB0Pyr8KREDW46CRAiEAtrZ2mQhlqCkGVtQzoyXZA89lrAtWfWrGpYGui%2Bf%2B0tkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPijFFHls1tUNwHqxyrcA8Ax79S4%2Bw0p%2Bawd848Yfzi99Cwu%2F9UVV56EMheMPdqjoivepGLtSyYjaN4JEZi8H%2BQVVCNsbcwWY9IPo%2FwlV6cb4Cga1oIyq76mdB3vBnuDSjp3UmiHTsGEPG29N5NjX0xIdguAAGjS85m1PpnCyXtYQ2TuADeMmb47J6DRxcDrY2xNfud9eVmK7UUjarByb9OMYEBjS%2B6UgyLpp9lNcOPw9l7k8frdtLi3CsJ3JXIboEJaEoUd6ZuqazvEtV%2BhJmJuS99aI1At0l1OIqX9BxjMx3Psmyavz0OK0vtCg2z1NrORyDSr59K18XQ0aZS5PuOxD5BBxvvVxh3tLz6nRj5TCZ76A3Z8fkx0EfOzty%2Fx8CnwZ07f6BFPhPLtEwH4I74mZaSNS9Yv1qU%2Fj2M%2BC3x4RnCAq6K50I4SP7Cnstzzkt0Pedu8S22t4MclCGMm7uC1L1apdLBXQ7Khxw8GbTvY5js%2FSAhp%2BiusUe3D7uwxNNNhTktyH2k5DFZKq0oCTRX%2BJH1pv080LH%2FfyUZ%2BOhMSWZkrQpSiTzU2%2Bv8YCjFbXCfcUXiLhF6SkHX5cXJiN4x8blUqOv2GMloeaSICren0rMFJidYehtPoldqKejMeOd%2FmIiZjAbYqfDUWMMKxpsAGOqUBiOOWpzFi6HJevEPqTiapBAgUXc426aMpv3Sjpxj0mssRQOUZY%2Bdb567fY9BmpRvIF%2B1FGdvhzRKkNHO%2BvYUeVxA44nZPHn6F45%2FZI8KFTwdajof4JFz5ybVmGB4b2Qyukk2vRppoeE8dKZiQrdrlncSxg0RXzO3nDrXu%2FJkC4JNPbxxOk9lwY%2FxOeGB%2FDdlJdg7%2BjXjd5wnJtmgPqrsNhOVS0QdY&X-Amz-Signature=dd5f7637b298a86af6344ddc201a457cb07c6a3c9d97d22233d28a10f2b07674&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYIKU4A%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICa0tMkh3dT9Bw7fayhdbxSNGEzP%2BB0Pyr8KREDW46CRAiEAtrZ2mQhlqCkGVtQzoyXZA89lrAtWfWrGpYGui%2Bf%2B0tkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPijFFHls1tUNwHqxyrcA8Ax79S4%2Bw0p%2Bawd848Yfzi99Cwu%2F9UVV56EMheMPdqjoivepGLtSyYjaN4JEZi8H%2BQVVCNsbcwWY9IPo%2FwlV6cb4Cga1oIyq76mdB3vBnuDSjp3UmiHTsGEPG29N5NjX0xIdguAAGjS85m1PpnCyXtYQ2TuADeMmb47J6DRxcDrY2xNfud9eVmK7UUjarByb9OMYEBjS%2B6UgyLpp9lNcOPw9l7k8frdtLi3CsJ3JXIboEJaEoUd6ZuqazvEtV%2BhJmJuS99aI1At0l1OIqX9BxjMx3Psmyavz0OK0vtCg2z1NrORyDSr59K18XQ0aZS5PuOxD5BBxvvVxh3tLz6nRj5TCZ76A3Z8fkx0EfOzty%2Fx8CnwZ07f6BFPhPLtEwH4I74mZaSNS9Yv1qU%2Fj2M%2BC3x4RnCAq6K50I4SP7Cnstzzkt0Pedu8S22t4MclCGMm7uC1L1apdLBXQ7Khxw8GbTvY5js%2FSAhp%2BiusUe3D7uwxNNNhTktyH2k5DFZKq0oCTRX%2BJH1pv080LH%2FfyUZ%2BOhMSWZkrQpSiTzU2%2Bv8YCjFbXCfcUXiLhF6SkHX5cXJiN4x8blUqOv2GMloeaSICren0rMFJidYehtPoldqKejMeOd%2FmIiZjAbYqfDUWMMKxpsAGOqUBiOOWpzFi6HJevEPqTiapBAgUXc426aMpv3Sjpxj0mssRQOUZY%2Bdb567fY9BmpRvIF%2B1FGdvhzRKkNHO%2BvYUeVxA44nZPHn6F45%2FZI8KFTwdajof4JFz5ybVmGB4b2Qyukk2vRppoeE8dKZiQrdrlncSxg0RXzO3nDrXu%2FJkC4JNPbxxOk9lwY%2FxOeGB%2FDdlJdg7%2BjXjd5wnJtmgPqrsNhOVS0QdY&X-Amz-Signature=fbd6b82d8be414a1312485cb86437d2681c4437b7f33fa5c6e6ce9da116bc640&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYIKU4A%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICa0tMkh3dT9Bw7fayhdbxSNGEzP%2BB0Pyr8KREDW46CRAiEAtrZ2mQhlqCkGVtQzoyXZA89lrAtWfWrGpYGui%2Bf%2B0tkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPijFFHls1tUNwHqxyrcA8Ax79S4%2Bw0p%2Bawd848Yfzi99Cwu%2F9UVV56EMheMPdqjoivepGLtSyYjaN4JEZi8H%2BQVVCNsbcwWY9IPo%2FwlV6cb4Cga1oIyq76mdB3vBnuDSjp3UmiHTsGEPG29N5NjX0xIdguAAGjS85m1PpnCyXtYQ2TuADeMmb47J6DRxcDrY2xNfud9eVmK7UUjarByb9OMYEBjS%2B6UgyLpp9lNcOPw9l7k8frdtLi3CsJ3JXIboEJaEoUd6ZuqazvEtV%2BhJmJuS99aI1At0l1OIqX9BxjMx3Psmyavz0OK0vtCg2z1NrORyDSr59K18XQ0aZS5PuOxD5BBxvvVxh3tLz6nRj5TCZ76A3Z8fkx0EfOzty%2Fx8CnwZ07f6BFPhPLtEwH4I74mZaSNS9Yv1qU%2Fj2M%2BC3x4RnCAq6K50I4SP7Cnstzzkt0Pedu8S22t4MclCGMm7uC1L1apdLBXQ7Khxw8GbTvY5js%2FSAhp%2BiusUe3D7uwxNNNhTktyH2k5DFZKq0oCTRX%2BJH1pv080LH%2FfyUZ%2BOhMSWZkrQpSiTzU2%2Bv8YCjFbXCfcUXiLhF6SkHX5cXJiN4x8blUqOv2GMloeaSICren0rMFJidYehtPoldqKejMeOd%2FmIiZjAbYqfDUWMMKxpsAGOqUBiOOWpzFi6HJevEPqTiapBAgUXc426aMpv3Sjpxj0mssRQOUZY%2Bdb567fY9BmpRvIF%2B1FGdvhzRKkNHO%2BvYUeVxA44nZPHn6F45%2FZI8KFTwdajof4JFz5ybVmGB4b2Qyukk2vRppoeE8dKZiQrdrlncSxg0RXzO3nDrXu%2FJkC4JNPbxxOk9lwY%2FxOeGB%2FDdlJdg7%2BjXjd5wnJtmgPqrsNhOVS0QdY&X-Amz-Signature=f33ee3a877e9b703560e436cdb7ce415adf705af7b1f391021b2e53d52fe1f11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYIKU4A%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICa0tMkh3dT9Bw7fayhdbxSNGEzP%2BB0Pyr8KREDW46CRAiEAtrZ2mQhlqCkGVtQzoyXZA89lrAtWfWrGpYGui%2Bf%2B0tkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPijFFHls1tUNwHqxyrcA8Ax79S4%2Bw0p%2Bawd848Yfzi99Cwu%2F9UVV56EMheMPdqjoivepGLtSyYjaN4JEZi8H%2BQVVCNsbcwWY9IPo%2FwlV6cb4Cga1oIyq76mdB3vBnuDSjp3UmiHTsGEPG29N5NjX0xIdguAAGjS85m1PpnCyXtYQ2TuADeMmb47J6DRxcDrY2xNfud9eVmK7UUjarByb9OMYEBjS%2B6UgyLpp9lNcOPw9l7k8frdtLi3CsJ3JXIboEJaEoUd6ZuqazvEtV%2BhJmJuS99aI1At0l1OIqX9BxjMx3Psmyavz0OK0vtCg2z1NrORyDSr59K18XQ0aZS5PuOxD5BBxvvVxh3tLz6nRj5TCZ76A3Z8fkx0EfOzty%2Fx8CnwZ07f6BFPhPLtEwH4I74mZaSNS9Yv1qU%2Fj2M%2BC3x4RnCAq6K50I4SP7Cnstzzkt0Pedu8S22t4MclCGMm7uC1L1apdLBXQ7Khxw8GbTvY5js%2FSAhp%2BiusUe3D7uwxNNNhTktyH2k5DFZKq0oCTRX%2BJH1pv080LH%2FfyUZ%2BOhMSWZkrQpSiTzU2%2Bv8YCjFbXCfcUXiLhF6SkHX5cXJiN4x8blUqOv2GMloeaSICren0rMFJidYehtPoldqKejMeOd%2FmIiZjAbYqfDUWMMKxpsAGOqUBiOOWpzFi6HJevEPqTiapBAgUXc426aMpv3Sjpxj0mssRQOUZY%2Bdb567fY9BmpRvIF%2B1FGdvhzRKkNHO%2BvYUeVxA44nZPHn6F45%2FZI8KFTwdajof4JFz5ybVmGB4b2Qyukk2vRppoeE8dKZiQrdrlncSxg0RXzO3nDrXu%2FJkC4JNPbxxOk9lwY%2FxOeGB%2FDdlJdg7%2BjXjd5wnJtmgPqrsNhOVS0QdY&X-Amz-Signature=b7ff95ad3d04574a2acaabb246ac862e700fdae2ea49de5553a11124a7026d38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYIKU4A%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICa0tMkh3dT9Bw7fayhdbxSNGEzP%2BB0Pyr8KREDW46CRAiEAtrZ2mQhlqCkGVtQzoyXZA89lrAtWfWrGpYGui%2Bf%2B0tkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPijFFHls1tUNwHqxyrcA8Ax79S4%2Bw0p%2Bawd848Yfzi99Cwu%2F9UVV56EMheMPdqjoivepGLtSyYjaN4JEZi8H%2BQVVCNsbcwWY9IPo%2FwlV6cb4Cga1oIyq76mdB3vBnuDSjp3UmiHTsGEPG29N5NjX0xIdguAAGjS85m1PpnCyXtYQ2TuADeMmb47J6DRxcDrY2xNfud9eVmK7UUjarByb9OMYEBjS%2B6UgyLpp9lNcOPw9l7k8frdtLi3CsJ3JXIboEJaEoUd6ZuqazvEtV%2BhJmJuS99aI1At0l1OIqX9BxjMx3Psmyavz0OK0vtCg2z1NrORyDSr59K18XQ0aZS5PuOxD5BBxvvVxh3tLz6nRj5TCZ76A3Z8fkx0EfOzty%2Fx8CnwZ07f6BFPhPLtEwH4I74mZaSNS9Yv1qU%2Fj2M%2BC3x4RnCAq6K50I4SP7Cnstzzkt0Pedu8S22t4MclCGMm7uC1L1apdLBXQ7Khxw8GbTvY5js%2FSAhp%2BiusUe3D7uwxNNNhTktyH2k5DFZKq0oCTRX%2BJH1pv080LH%2FfyUZ%2BOhMSWZkrQpSiTzU2%2Bv8YCjFbXCfcUXiLhF6SkHX5cXJiN4x8blUqOv2GMloeaSICren0rMFJidYehtPoldqKejMeOd%2FmIiZjAbYqfDUWMMKxpsAGOqUBiOOWpzFi6HJevEPqTiapBAgUXc426aMpv3Sjpxj0mssRQOUZY%2Bdb567fY9BmpRvIF%2B1FGdvhzRKkNHO%2BvYUeVxA44nZPHn6F45%2FZI8KFTwdajof4JFz5ybVmGB4b2Qyukk2vRppoeE8dKZiQrdrlncSxg0RXzO3nDrXu%2FJkC4JNPbxxOk9lwY%2FxOeGB%2FDdlJdg7%2BjXjd5wnJtmgPqrsNhOVS0QdY&X-Amz-Signature=fc7c9e2b8a7e3c7b8c3b466437dee901e03c5e4db27c240eecae335ce8eb70f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJYIKU4A%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T022306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICa0tMkh3dT9Bw7fayhdbxSNGEzP%2BB0Pyr8KREDW46CRAiEAtrZ2mQhlqCkGVtQzoyXZA89lrAtWfWrGpYGui%2Bf%2B0tkqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPijFFHls1tUNwHqxyrcA8Ax79S4%2Bw0p%2Bawd848Yfzi99Cwu%2F9UVV56EMheMPdqjoivepGLtSyYjaN4JEZi8H%2BQVVCNsbcwWY9IPo%2FwlV6cb4Cga1oIyq76mdB3vBnuDSjp3UmiHTsGEPG29N5NjX0xIdguAAGjS85m1PpnCyXtYQ2TuADeMmb47J6DRxcDrY2xNfud9eVmK7UUjarByb9OMYEBjS%2B6UgyLpp9lNcOPw9l7k8frdtLi3CsJ3JXIboEJaEoUd6ZuqazvEtV%2BhJmJuS99aI1At0l1OIqX9BxjMx3Psmyavz0OK0vtCg2z1NrORyDSr59K18XQ0aZS5PuOxD5BBxvvVxh3tLz6nRj5TCZ76A3Z8fkx0EfOzty%2Fx8CnwZ07f6BFPhPLtEwH4I74mZaSNS9Yv1qU%2Fj2M%2BC3x4RnCAq6K50I4SP7Cnstzzkt0Pedu8S22t4MclCGMm7uC1L1apdLBXQ7Khxw8GbTvY5js%2FSAhp%2BiusUe3D7uwxNNNhTktyH2k5DFZKq0oCTRX%2BJH1pv080LH%2FfyUZ%2BOhMSWZkrQpSiTzU2%2Bv8YCjFbXCfcUXiLhF6SkHX5cXJiN4x8blUqOv2GMloeaSICren0rMFJidYehtPoldqKejMeOd%2FmIiZjAbYqfDUWMMKxpsAGOqUBiOOWpzFi6HJevEPqTiapBAgUXc426aMpv3Sjpxj0mssRQOUZY%2Bdb567fY9BmpRvIF%2B1FGdvhzRKkNHO%2BvYUeVxA44nZPHn6F45%2FZI8KFTwdajof4JFz5ybVmGB4b2Qyukk2vRppoeE8dKZiQrdrlncSxg0RXzO3nDrXu%2FJkC4JNPbxxOk9lwY%2FxOeGB%2FDdlJdg7%2BjXjd5wnJtmgPqrsNhOVS0QdY&X-Amz-Signature=c29fabd971043ae8059d13f8262c93dd681bdaad3205c7ee1b821d233346716f&X-Amz-SignedHeaders=host&x-id=GetObject)
