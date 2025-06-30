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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCKM6RWX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmJ07s7nimfO7aIzFM2EOo1MB2bAelW%2B3bE709hEgtwIhAJR1N%2FBgQmDoD75fqJ5GJ89PRnKOOSlw1WRKRKCMLxUzKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkt%2BadqitKDXOs10Eq3ANiT2XaPFBnTYWyCAL3eYhH1%2B411rTWuaUVW8917cZzo3UgXocxgUEWpEjuLhqMXKDGbRiKLG5bvdhik8ikoEzKKu0DN%2B5%2FpdwI%2FfXmZN%2B9kchGpnAHZ%2FdM76d2iJtAkAStgj%2BdiayiOZV%2FZUk1Uviz9%2FsYO%2Fa9pfw6GxuWHlg%2FHab8FBoHRtwBW%2BimwchafrBxb%2BCL3zCuD%2B%2BKL%2FVMJ7dxLsurNePK49%2Fqtu7Wg7Dc6%2BqXi4qEIb%2B2Tee9JdFJJWrgl5UP%2FhVZhn4%2FLGRbEigV8S6WqL4WK%2F6r0DwVBGPmmhAWw4Rgf5bHqwXUmI71SJKX156vsRigADc%2Ff1FnM7ryTpSGjZgLi9wdq45Z%2FsxVT7NFg%2FUTJsByS7nP1a6X5bVim9r8vc9xq8A5Hmogj%2FZ%2BWUx%2BLRnTif7Hd6JF9vvNpqWo1CNd7S7aHcVGoxZ0%2FGj5L3OGkYcM1AIhRt5M2pnS%2BIfL%2FttaVzxwKYVhPGe1DwEG55mRKNrQc5Q%2FdM0AV49HgjEiaah67KwWGkUxQeQTMsdM3kGi2hA%2BfsGrxabEQnRc2%2F%2BQzsdvuZdB9gqwGu6axiN4e4X1YzYOZs5vsMGutDwUTVmV3kB5K5LSVEL3N99p6cWHNZr2HMVeazCNzovDBjqkAfxkK7AGmU%2FI0wHtm2w0Omr8RhZuso9kAHDDxWRMOtJfJPerXh3lrRhP6fO6YFZOnEiO%2BJvPSo%2Fv8Mb9Vb79FdGux9cgtTBr%2FMigrk8lF9TljkSSYhNmdW%2FAAY85q6wi4AoXR5PLD0jph%2F12QbdEVIubVSeplRRfOZKT7YT%2FGc2BiU9twEQQLeLgcbXEUmMj0UNTOMsTT2YmnlNp%2BAPEWkjFOHYo&X-Amz-Signature=e063c13a54d73bddd42c342a570406c882055c83c8192432110b59c6590f8533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCKM6RWX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmJ07s7nimfO7aIzFM2EOo1MB2bAelW%2B3bE709hEgtwIhAJR1N%2FBgQmDoD75fqJ5GJ89PRnKOOSlw1WRKRKCMLxUzKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkt%2BadqitKDXOs10Eq3ANiT2XaPFBnTYWyCAL3eYhH1%2B411rTWuaUVW8917cZzo3UgXocxgUEWpEjuLhqMXKDGbRiKLG5bvdhik8ikoEzKKu0DN%2B5%2FpdwI%2FfXmZN%2B9kchGpnAHZ%2FdM76d2iJtAkAStgj%2BdiayiOZV%2FZUk1Uviz9%2FsYO%2Fa9pfw6GxuWHlg%2FHab8FBoHRtwBW%2BimwchafrBxb%2BCL3zCuD%2B%2BKL%2FVMJ7dxLsurNePK49%2Fqtu7Wg7Dc6%2BqXi4qEIb%2B2Tee9JdFJJWrgl5UP%2FhVZhn4%2FLGRbEigV8S6WqL4WK%2F6r0DwVBGPmmhAWw4Rgf5bHqwXUmI71SJKX156vsRigADc%2Ff1FnM7ryTpSGjZgLi9wdq45Z%2FsxVT7NFg%2FUTJsByS7nP1a6X5bVim9r8vc9xq8A5Hmogj%2FZ%2BWUx%2BLRnTif7Hd6JF9vvNpqWo1CNd7S7aHcVGoxZ0%2FGj5L3OGkYcM1AIhRt5M2pnS%2BIfL%2FttaVzxwKYVhPGe1DwEG55mRKNrQc5Q%2FdM0AV49HgjEiaah67KwWGkUxQeQTMsdM3kGi2hA%2BfsGrxabEQnRc2%2F%2BQzsdvuZdB9gqwGu6axiN4e4X1YzYOZs5vsMGutDwUTVmV3kB5K5LSVEL3N99p6cWHNZr2HMVeazCNzovDBjqkAfxkK7AGmU%2FI0wHtm2w0Omr8RhZuso9kAHDDxWRMOtJfJPerXh3lrRhP6fO6YFZOnEiO%2BJvPSo%2Fv8Mb9Vb79FdGux9cgtTBr%2FMigrk8lF9TljkSSYhNmdW%2FAAY85q6wi4AoXR5PLD0jph%2F12QbdEVIubVSeplRRfOZKT7YT%2FGc2BiU9twEQQLeLgcbXEUmMj0UNTOMsTT2YmnlNp%2BAPEWkjFOHYo&X-Amz-Signature=3ee78483330c8b683579dc859a3039e25aaa1d33393d26b162cff5886abc6f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCKM6RWX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmJ07s7nimfO7aIzFM2EOo1MB2bAelW%2B3bE709hEgtwIhAJR1N%2FBgQmDoD75fqJ5GJ89PRnKOOSlw1WRKRKCMLxUzKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkt%2BadqitKDXOs10Eq3ANiT2XaPFBnTYWyCAL3eYhH1%2B411rTWuaUVW8917cZzo3UgXocxgUEWpEjuLhqMXKDGbRiKLG5bvdhik8ikoEzKKu0DN%2B5%2FpdwI%2FfXmZN%2B9kchGpnAHZ%2FdM76d2iJtAkAStgj%2BdiayiOZV%2FZUk1Uviz9%2FsYO%2Fa9pfw6GxuWHlg%2FHab8FBoHRtwBW%2BimwchafrBxb%2BCL3zCuD%2B%2BKL%2FVMJ7dxLsurNePK49%2Fqtu7Wg7Dc6%2BqXi4qEIb%2B2Tee9JdFJJWrgl5UP%2FhVZhn4%2FLGRbEigV8S6WqL4WK%2F6r0DwVBGPmmhAWw4Rgf5bHqwXUmI71SJKX156vsRigADc%2Ff1FnM7ryTpSGjZgLi9wdq45Z%2FsxVT7NFg%2FUTJsByS7nP1a6X5bVim9r8vc9xq8A5Hmogj%2FZ%2BWUx%2BLRnTif7Hd6JF9vvNpqWo1CNd7S7aHcVGoxZ0%2FGj5L3OGkYcM1AIhRt5M2pnS%2BIfL%2FttaVzxwKYVhPGe1DwEG55mRKNrQc5Q%2FdM0AV49HgjEiaah67KwWGkUxQeQTMsdM3kGi2hA%2BfsGrxabEQnRc2%2F%2BQzsdvuZdB9gqwGu6axiN4e4X1YzYOZs5vsMGutDwUTVmV3kB5K5LSVEL3N99p6cWHNZr2HMVeazCNzovDBjqkAfxkK7AGmU%2FI0wHtm2w0Omr8RhZuso9kAHDDxWRMOtJfJPerXh3lrRhP6fO6YFZOnEiO%2BJvPSo%2Fv8Mb9Vb79FdGux9cgtTBr%2FMigrk8lF9TljkSSYhNmdW%2FAAY85q6wi4AoXR5PLD0jph%2F12QbdEVIubVSeplRRfOZKT7YT%2FGc2BiU9twEQQLeLgcbXEUmMj0UNTOMsTT2YmnlNp%2BAPEWkjFOHYo&X-Amz-Signature=f2a07878f63e7944239e07771b9034b3ffa7217f754d25f13d42c88faaa9e9a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCKM6RWX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmJ07s7nimfO7aIzFM2EOo1MB2bAelW%2B3bE709hEgtwIhAJR1N%2FBgQmDoD75fqJ5GJ89PRnKOOSlw1WRKRKCMLxUzKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkt%2BadqitKDXOs10Eq3ANiT2XaPFBnTYWyCAL3eYhH1%2B411rTWuaUVW8917cZzo3UgXocxgUEWpEjuLhqMXKDGbRiKLG5bvdhik8ikoEzKKu0DN%2B5%2FpdwI%2FfXmZN%2B9kchGpnAHZ%2FdM76d2iJtAkAStgj%2BdiayiOZV%2FZUk1Uviz9%2FsYO%2Fa9pfw6GxuWHlg%2FHab8FBoHRtwBW%2BimwchafrBxb%2BCL3zCuD%2B%2BKL%2FVMJ7dxLsurNePK49%2Fqtu7Wg7Dc6%2BqXi4qEIb%2B2Tee9JdFJJWrgl5UP%2FhVZhn4%2FLGRbEigV8S6WqL4WK%2F6r0DwVBGPmmhAWw4Rgf5bHqwXUmI71SJKX156vsRigADc%2Ff1FnM7ryTpSGjZgLi9wdq45Z%2FsxVT7NFg%2FUTJsByS7nP1a6X5bVim9r8vc9xq8A5Hmogj%2FZ%2BWUx%2BLRnTif7Hd6JF9vvNpqWo1CNd7S7aHcVGoxZ0%2FGj5L3OGkYcM1AIhRt5M2pnS%2BIfL%2FttaVzxwKYVhPGe1DwEG55mRKNrQc5Q%2FdM0AV49HgjEiaah67KwWGkUxQeQTMsdM3kGi2hA%2BfsGrxabEQnRc2%2F%2BQzsdvuZdB9gqwGu6axiN4e4X1YzYOZs5vsMGutDwUTVmV3kB5K5LSVEL3N99p6cWHNZr2HMVeazCNzovDBjqkAfxkK7AGmU%2FI0wHtm2w0Omr8RhZuso9kAHDDxWRMOtJfJPerXh3lrRhP6fO6YFZOnEiO%2BJvPSo%2Fv8Mb9Vb79FdGux9cgtTBr%2FMigrk8lF9TljkSSYhNmdW%2FAAY85q6wi4AoXR5PLD0jph%2F12QbdEVIubVSeplRRfOZKT7YT%2FGc2BiU9twEQQLeLgcbXEUmMj0UNTOMsTT2YmnlNp%2BAPEWkjFOHYo&X-Amz-Signature=a924c19479a346b59932ae3b2373673e0436439417a9c796eac8f83eca57bd2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCKM6RWX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmJ07s7nimfO7aIzFM2EOo1MB2bAelW%2B3bE709hEgtwIhAJR1N%2FBgQmDoD75fqJ5GJ89PRnKOOSlw1WRKRKCMLxUzKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkt%2BadqitKDXOs10Eq3ANiT2XaPFBnTYWyCAL3eYhH1%2B411rTWuaUVW8917cZzo3UgXocxgUEWpEjuLhqMXKDGbRiKLG5bvdhik8ikoEzKKu0DN%2B5%2FpdwI%2FfXmZN%2B9kchGpnAHZ%2FdM76d2iJtAkAStgj%2BdiayiOZV%2FZUk1Uviz9%2FsYO%2Fa9pfw6GxuWHlg%2FHab8FBoHRtwBW%2BimwchafrBxb%2BCL3zCuD%2B%2BKL%2FVMJ7dxLsurNePK49%2Fqtu7Wg7Dc6%2BqXi4qEIb%2B2Tee9JdFJJWrgl5UP%2FhVZhn4%2FLGRbEigV8S6WqL4WK%2F6r0DwVBGPmmhAWw4Rgf5bHqwXUmI71SJKX156vsRigADc%2Ff1FnM7ryTpSGjZgLi9wdq45Z%2FsxVT7NFg%2FUTJsByS7nP1a6X5bVim9r8vc9xq8A5Hmogj%2FZ%2BWUx%2BLRnTif7Hd6JF9vvNpqWo1CNd7S7aHcVGoxZ0%2FGj5L3OGkYcM1AIhRt5M2pnS%2BIfL%2FttaVzxwKYVhPGe1DwEG55mRKNrQc5Q%2FdM0AV49HgjEiaah67KwWGkUxQeQTMsdM3kGi2hA%2BfsGrxabEQnRc2%2F%2BQzsdvuZdB9gqwGu6axiN4e4X1YzYOZs5vsMGutDwUTVmV3kB5K5LSVEL3N99p6cWHNZr2HMVeazCNzovDBjqkAfxkK7AGmU%2FI0wHtm2w0Omr8RhZuso9kAHDDxWRMOtJfJPerXh3lrRhP6fO6YFZOnEiO%2BJvPSo%2Fv8Mb9Vb79FdGux9cgtTBr%2FMigrk8lF9TljkSSYhNmdW%2FAAY85q6wi4AoXR5PLD0jph%2F12QbdEVIubVSeplRRfOZKT7YT%2FGc2BiU9twEQQLeLgcbXEUmMj0UNTOMsTT2YmnlNp%2BAPEWkjFOHYo&X-Amz-Signature=7af71f2ecf671b7eeb53131980aabc15986cecb01200c567c111d8d0ca80fbf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCKM6RWX%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxmJ07s7nimfO7aIzFM2EOo1MB2bAelW%2B3bE709hEgtwIhAJR1N%2FBgQmDoD75fqJ5GJ89PRnKOOSlw1WRKRKCMLxUzKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkt%2BadqitKDXOs10Eq3ANiT2XaPFBnTYWyCAL3eYhH1%2B411rTWuaUVW8917cZzo3UgXocxgUEWpEjuLhqMXKDGbRiKLG5bvdhik8ikoEzKKu0DN%2B5%2FpdwI%2FfXmZN%2B9kchGpnAHZ%2FdM76d2iJtAkAStgj%2BdiayiOZV%2FZUk1Uviz9%2FsYO%2Fa9pfw6GxuWHlg%2FHab8FBoHRtwBW%2BimwchafrBxb%2BCL3zCuD%2B%2BKL%2FVMJ7dxLsurNePK49%2Fqtu7Wg7Dc6%2BqXi4qEIb%2B2Tee9JdFJJWrgl5UP%2FhVZhn4%2FLGRbEigV8S6WqL4WK%2F6r0DwVBGPmmhAWw4Rgf5bHqwXUmI71SJKX156vsRigADc%2Ff1FnM7ryTpSGjZgLi9wdq45Z%2FsxVT7NFg%2FUTJsByS7nP1a6X5bVim9r8vc9xq8A5Hmogj%2FZ%2BWUx%2BLRnTif7Hd6JF9vvNpqWo1CNd7S7aHcVGoxZ0%2FGj5L3OGkYcM1AIhRt5M2pnS%2BIfL%2FttaVzxwKYVhPGe1DwEG55mRKNrQc5Q%2FdM0AV49HgjEiaah67KwWGkUxQeQTMsdM3kGi2hA%2BfsGrxabEQnRc2%2F%2BQzsdvuZdB9gqwGu6axiN4e4X1YzYOZs5vsMGutDwUTVmV3kB5K5LSVEL3N99p6cWHNZr2HMVeazCNzovDBjqkAfxkK7AGmU%2FI0wHtm2w0Omr8RhZuso9kAHDDxWRMOtJfJPerXh3lrRhP6fO6YFZOnEiO%2BJvPSo%2Fv8Mb9Vb79FdGux9cgtTBr%2FMigrk8lF9TljkSSYhNmdW%2FAAY85q6wi4AoXR5PLD0jph%2F12QbdEVIubVSeplRRfOZKT7YT%2FGc2BiU9twEQQLeLgcbXEUmMj0UNTOMsTT2YmnlNp%2BAPEWkjFOHYo&X-Amz-Signature=18fcab123d370adbea683f0eb4165c330b4a490b87e6c37df64e314df9f5a95d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
