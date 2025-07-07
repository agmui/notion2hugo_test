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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CFOSTZZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCDCbfl2%2FXR0WcTpD7qC7LKVZLFuTwxmEc7JHo5kRZTBwIhAK4u7bbf6OmUcEbOSP5TJo1y2w1XmpnhuaWwnZcaugMyKv8DCHoQABoMNjM3NDIzMTgzODA1IgzsfeK0zsd9h8DIpr0q3ANmAK3BTbnzBtENCRCbhz04Bf2xpWpJDXWw25zajmEm2NCQhCMwEF5UgAOYCNQv7LpWh4bemga0Nz2N7qYMYbSK3uviXlArnZd3nHCEopnHNBabXSehlKJ7iUlBkIMOExKlLFKZIbnkD8qMKD6pe8PO6ZIRQG9smaWAYLq0EEZdVMk7hSuWcqgW%2ByvvJS8peANncQeUD4DsU1j6uiv%2BDEbcXtzw00a%2FyjPBHYTJ%2FlTxZudQH6ws6LLea2h84RRHV%2Bitb0AmTcjm17Gi511yLtktVTdILu4lzF%2BoN7s6N%2BrikMdoLPfvVC5Z2jXd5whQuhq%2FDS%2BodZAUi7cseVqloGYVcIZ5DBBioWaOKjURzM%2F%2FpT6s%2FCaIpJfl0I8UxAp%2B2%2BAHXOJ5ILIFxIr2atb9vqzoU7x7Fx6ePvX0nC5UniPReAsiCXlNLclR2%2BMJghFCCj%2BJkuTA7dEUS2Qskw60TtEKCjxbjyyUSIKjOt3Pz5kdhXYTZT2oEfYktTCGG%2BBj9veejI%2BIqLc689aU7k1N5wcvNGK4SEXpwTYuZw6NuHW8CMTdkDLplp5TA%2BQFXhg3sNjYVVuhLCBR7OGM9DuTq3GB5frfyKIDnnFNhW73bGXs8TYicj9SupqQVdYSFDCL6q%2FDBjqkAcu6g0R8uQ8eOGExZYvEg3KdIrVfzgUYSzXYHWTsEYevqNcwTrJ2YJga0XOZXdFYRRliNjXGd4nDyITY3v73QEEdBUfLtlhUPTEzBxS39WBi7s%2Bu0BQFGNkRkpPiGqSIzVWtdOEgjdpmlRP5iYU7eR9UfqHSNDaj90XXQFRKfSmAyP6Afhx5Lp4KWZGy6PqMLYmb2xqM4KIxkbIAg15xtHBdqZVy&X-Amz-Signature=39eb78accc3fa8d455a0c5220dce26a5231c0229f2de8995f4cd996c0811457c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CFOSTZZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCDCbfl2%2FXR0WcTpD7qC7LKVZLFuTwxmEc7JHo5kRZTBwIhAK4u7bbf6OmUcEbOSP5TJo1y2w1XmpnhuaWwnZcaugMyKv8DCHoQABoMNjM3NDIzMTgzODA1IgzsfeK0zsd9h8DIpr0q3ANmAK3BTbnzBtENCRCbhz04Bf2xpWpJDXWw25zajmEm2NCQhCMwEF5UgAOYCNQv7LpWh4bemga0Nz2N7qYMYbSK3uviXlArnZd3nHCEopnHNBabXSehlKJ7iUlBkIMOExKlLFKZIbnkD8qMKD6pe8PO6ZIRQG9smaWAYLq0EEZdVMk7hSuWcqgW%2ByvvJS8peANncQeUD4DsU1j6uiv%2BDEbcXtzw00a%2FyjPBHYTJ%2FlTxZudQH6ws6LLea2h84RRHV%2Bitb0AmTcjm17Gi511yLtktVTdILu4lzF%2BoN7s6N%2BrikMdoLPfvVC5Z2jXd5whQuhq%2FDS%2BodZAUi7cseVqloGYVcIZ5DBBioWaOKjURzM%2F%2FpT6s%2FCaIpJfl0I8UxAp%2B2%2BAHXOJ5ILIFxIr2atb9vqzoU7x7Fx6ePvX0nC5UniPReAsiCXlNLclR2%2BMJghFCCj%2BJkuTA7dEUS2Qskw60TtEKCjxbjyyUSIKjOt3Pz5kdhXYTZT2oEfYktTCGG%2BBj9veejI%2BIqLc689aU7k1N5wcvNGK4SEXpwTYuZw6NuHW8CMTdkDLplp5TA%2BQFXhg3sNjYVVuhLCBR7OGM9DuTq3GB5frfyKIDnnFNhW73bGXs8TYicj9SupqQVdYSFDCL6q%2FDBjqkAcu6g0R8uQ8eOGExZYvEg3KdIrVfzgUYSzXYHWTsEYevqNcwTrJ2YJga0XOZXdFYRRliNjXGd4nDyITY3v73QEEdBUfLtlhUPTEzBxS39WBi7s%2Bu0BQFGNkRkpPiGqSIzVWtdOEgjdpmlRP5iYU7eR9UfqHSNDaj90XXQFRKfSmAyP6Afhx5Lp4KWZGy6PqMLYmb2xqM4KIxkbIAg15xtHBdqZVy&X-Amz-Signature=b97a158f86e998a7cadb3acf78f96a4be1d3d8e124b2e825276895b89eac2d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CFOSTZZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCDCbfl2%2FXR0WcTpD7qC7LKVZLFuTwxmEc7JHo5kRZTBwIhAK4u7bbf6OmUcEbOSP5TJo1y2w1XmpnhuaWwnZcaugMyKv8DCHoQABoMNjM3NDIzMTgzODA1IgzsfeK0zsd9h8DIpr0q3ANmAK3BTbnzBtENCRCbhz04Bf2xpWpJDXWw25zajmEm2NCQhCMwEF5UgAOYCNQv7LpWh4bemga0Nz2N7qYMYbSK3uviXlArnZd3nHCEopnHNBabXSehlKJ7iUlBkIMOExKlLFKZIbnkD8qMKD6pe8PO6ZIRQG9smaWAYLq0EEZdVMk7hSuWcqgW%2ByvvJS8peANncQeUD4DsU1j6uiv%2BDEbcXtzw00a%2FyjPBHYTJ%2FlTxZudQH6ws6LLea2h84RRHV%2Bitb0AmTcjm17Gi511yLtktVTdILu4lzF%2BoN7s6N%2BrikMdoLPfvVC5Z2jXd5whQuhq%2FDS%2BodZAUi7cseVqloGYVcIZ5DBBioWaOKjURzM%2F%2FpT6s%2FCaIpJfl0I8UxAp%2B2%2BAHXOJ5ILIFxIr2atb9vqzoU7x7Fx6ePvX0nC5UniPReAsiCXlNLclR2%2BMJghFCCj%2BJkuTA7dEUS2Qskw60TtEKCjxbjyyUSIKjOt3Pz5kdhXYTZT2oEfYktTCGG%2BBj9veejI%2BIqLc689aU7k1N5wcvNGK4SEXpwTYuZw6NuHW8CMTdkDLplp5TA%2BQFXhg3sNjYVVuhLCBR7OGM9DuTq3GB5frfyKIDnnFNhW73bGXs8TYicj9SupqQVdYSFDCL6q%2FDBjqkAcu6g0R8uQ8eOGExZYvEg3KdIrVfzgUYSzXYHWTsEYevqNcwTrJ2YJga0XOZXdFYRRliNjXGd4nDyITY3v73QEEdBUfLtlhUPTEzBxS39WBi7s%2Bu0BQFGNkRkpPiGqSIzVWtdOEgjdpmlRP5iYU7eR9UfqHSNDaj90XXQFRKfSmAyP6Afhx5Lp4KWZGy6PqMLYmb2xqM4KIxkbIAg15xtHBdqZVy&X-Amz-Signature=53bcdbefefca74af12cdc8b73e8b09ebb19096d9cdfb6871661523bf1e362c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CFOSTZZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCDCbfl2%2FXR0WcTpD7qC7LKVZLFuTwxmEc7JHo5kRZTBwIhAK4u7bbf6OmUcEbOSP5TJo1y2w1XmpnhuaWwnZcaugMyKv8DCHoQABoMNjM3NDIzMTgzODA1IgzsfeK0zsd9h8DIpr0q3ANmAK3BTbnzBtENCRCbhz04Bf2xpWpJDXWw25zajmEm2NCQhCMwEF5UgAOYCNQv7LpWh4bemga0Nz2N7qYMYbSK3uviXlArnZd3nHCEopnHNBabXSehlKJ7iUlBkIMOExKlLFKZIbnkD8qMKD6pe8PO6ZIRQG9smaWAYLq0EEZdVMk7hSuWcqgW%2ByvvJS8peANncQeUD4DsU1j6uiv%2BDEbcXtzw00a%2FyjPBHYTJ%2FlTxZudQH6ws6LLea2h84RRHV%2Bitb0AmTcjm17Gi511yLtktVTdILu4lzF%2BoN7s6N%2BrikMdoLPfvVC5Z2jXd5whQuhq%2FDS%2BodZAUi7cseVqloGYVcIZ5DBBioWaOKjURzM%2F%2FpT6s%2FCaIpJfl0I8UxAp%2B2%2BAHXOJ5ILIFxIr2atb9vqzoU7x7Fx6ePvX0nC5UniPReAsiCXlNLclR2%2BMJghFCCj%2BJkuTA7dEUS2Qskw60TtEKCjxbjyyUSIKjOt3Pz5kdhXYTZT2oEfYktTCGG%2BBj9veejI%2BIqLc689aU7k1N5wcvNGK4SEXpwTYuZw6NuHW8CMTdkDLplp5TA%2BQFXhg3sNjYVVuhLCBR7OGM9DuTq3GB5frfyKIDnnFNhW73bGXs8TYicj9SupqQVdYSFDCL6q%2FDBjqkAcu6g0R8uQ8eOGExZYvEg3KdIrVfzgUYSzXYHWTsEYevqNcwTrJ2YJga0XOZXdFYRRliNjXGd4nDyITY3v73QEEdBUfLtlhUPTEzBxS39WBi7s%2Bu0BQFGNkRkpPiGqSIzVWtdOEgjdpmlRP5iYU7eR9UfqHSNDaj90XXQFRKfSmAyP6Afhx5Lp4KWZGy6PqMLYmb2xqM4KIxkbIAg15xtHBdqZVy&X-Amz-Signature=8876196a36cd008e6c019c4f6c4f0b74cd7cf0b2f70a470db6f95400d713ba87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CFOSTZZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCDCbfl2%2FXR0WcTpD7qC7LKVZLFuTwxmEc7JHo5kRZTBwIhAK4u7bbf6OmUcEbOSP5TJo1y2w1XmpnhuaWwnZcaugMyKv8DCHoQABoMNjM3NDIzMTgzODA1IgzsfeK0zsd9h8DIpr0q3ANmAK3BTbnzBtENCRCbhz04Bf2xpWpJDXWw25zajmEm2NCQhCMwEF5UgAOYCNQv7LpWh4bemga0Nz2N7qYMYbSK3uviXlArnZd3nHCEopnHNBabXSehlKJ7iUlBkIMOExKlLFKZIbnkD8qMKD6pe8PO6ZIRQG9smaWAYLq0EEZdVMk7hSuWcqgW%2ByvvJS8peANncQeUD4DsU1j6uiv%2BDEbcXtzw00a%2FyjPBHYTJ%2FlTxZudQH6ws6LLea2h84RRHV%2Bitb0AmTcjm17Gi511yLtktVTdILu4lzF%2BoN7s6N%2BrikMdoLPfvVC5Z2jXd5whQuhq%2FDS%2BodZAUi7cseVqloGYVcIZ5DBBioWaOKjURzM%2F%2FpT6s%2FCaIpJfl0I8UxAp%2B2%2BAHXOJ5ILIFxIr2atb9vqzoU7x7Fx6ePvX0nC5UniPReAsiCXlNLclR2%2BMJghFCCj%2BJkuTA7dEUS2Qskw60TtEKCjxbjyyUSIKjOt3Pz5kdhXYTZT2oEfYktTCGG%2BBj9veejI%2BIqLc689aU7k1N5wcvNGK4SEXpwTYuZw6NuHW8CMTdkDLplp5TA%2BQFXhg3sNjYVVuhLCBR7OGM9DuTq3GB5frfyKIDnnFNhW73bGXs8TYicj9SupqQVdYSFDCL6q%2FDBjqkAcu6g0R8uQ8eOGExZYvEg3KdIrVfzgUYSzXYHWTsEYevqNcwTrJ2YJga0XOZXdFYRRliNjXGd4nDyITY3v73QEEdBUfLtlhUPTEzBxS39WBi7s%2Bu0BQFGNkRkpPiGqSIzVWtdOEgjdpmlRP5iYU7eR9UfqHSNDaj90XXQFRKfSmAyP6Afhx5Lp4KWZGy6PqMLYmb2xqM4KIxkbIAg15xtHBdqZVy&X-Amz-Signature=5fba9ac21741e5740ead171a59d88fa905de45a65c505dd5951cab1ed0141739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CFOSTZZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T170906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQCDCbfl2%2FXR0WcTpD7qC7LKVZLFuTwxmEc7JHo5kRZTBwIhAK4u7bbf6OmUcEbOSP5TJo1y2w1XmpnhuaWwnZcaugMyKv8DCHoQABoMNjM3NDIzMTgzODA1IgzsfeK0zsd9h8DIpr0q3ANmAK3BTbnzBtENCRCbhz04Bf2xpWpJDXWw25zajmEm2NCQhCMwEF5UgAOYCNQv7LpWh4bemga0Nz2N7qYMYbSK3uviXlArnZd3nHCEopnHNBabXSehlKJ7iUlBkIMOExKlLFKZIbnkD8qMKD6pe8PO6ZIRQG9smaWAYLq0EEZdVMk7hSuWcqgW%2ByvvJS8peANncQeUD4DsU1j6uiv%2BDEbcXtzw00a%2FyjPBHYTJ%2FlTxZudQH6ws6LLea2h84RRHV%2Bitb0AmTcjm17Gi511yLtktVTdILu4lzF%2BoN7s6N%2BrikMdoLPfvVC5Z2jXd5whQuhq%2FDS%2BodZAUi7cseVqloGYVcIZ5DBBioWaOKjURzM%2F%2FpT6s%2FCaIpJfl0I8UxAp%2B2%2BAHXOJ5ILIFxIr2atb9vqzoU7x7Fx6ePvX0nC5UniPReAsiCXlNLclR2%2BMJghFCCj%2BJkuTA7dEUS2Qskw60TtEKCjxbjyyUSIKjOt3Pz5kdhXYTZT2oEfYktTCGG%2BBj9veejI%2BIqLc689aU7k1N5wcvNGK4SEXpwTYuZw6NuHW8CMTdkDLplp5TA%2BQFXhg3sNjYVVuhLCBR7OGM9DuTq3GB5frfyKIDnnFNhW73bGXs8TYicj9SupqQVdYSFDCL6q%2FDBjqkAcu6g0R8uQ8eOGExZYvEg3KdIrVfzgUYSzXYHWTsEYevqNcwTrJ2YJga0XOZXdFYRRliNjXGd4nDyITY3v73QEEdBUfLtlhUPTEzBxS39WBi7s%2Bu0BQFGNkRkpPiGqSIzVWtdOEgjdpmlRP5iYU7eR9UfqHSNDaj90XXQFRKfSmAyP6Afhx5Lp4KWZGy6PqMLYmb2xqM4KIxkbIAg15xtHBdqZVy&X-Amz-Signature=a5eb584ce50fc2efdc8c10edbf2915886a16e7be3f8dd95db7c8ba05fde3c329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
