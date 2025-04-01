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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTSCUTI3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBCuX4nHAu73Bfb3qwCsDSXifkCltxEiYLq6iTx7RfADAiEA%2B5eEtPjOXDrqCjxvnlCKYgdO5ffp%2B43cd7hWgN4A7g8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPmfnlsMngplMGIrSrcA7YS69QL6Ov35W4daOyRfCQfq4yx%2BDamcu%2BngJn5LNfIfaDQhOjXybVDio6PP1v8y67TaraDIABcxn4Xzdp3DVRfWL9pHXDiWz1bQNR3Y6wGkliiPs8wQAM8E%2BmLfLHp9Ww99o56hHDX%2FH3X%2FabkKIQXC92%2FT8HwgUmQi0pxiyvZJvFGsWm7e9q%2FSpaXT5zUmiKpbdpzyl800OTGjXl7XAWkTUo%2Bhngq41lba1FEP2f5s3XIcZyfNO5d0%2BeeP%2BaJfdEMPgjraLywWrykDh5VqddQhC5G7%2Fcx%2FRcIjGWPYmjneE8%2BcbcyKnfhzQ8YYoVvK2IXTDle6ViPEAH80UDs05urH1tScKm9qK4KT2%2BIV%2FnHVYmpEXuLsrVsWzKbgUGR2oULfSw72%2FVl8mRLYVyS%2FQYoi%2B8%2B%2FUQDK0pFUM6V%2Bb7pynqKzFNFaSGGe5dWitMPfaCPbUbCMiqkQDn8qeir6zuBoadGSUDuP5Af3N5R%2FiZqMDvDsNjVbgqwkf12lI6lsmgP4asYkVzUNR4vDeUjuPUqFfxUnY8va5%2FBrnaA0m0RhfK%2BM5QQk0gPClBTiqe%2FJ2gBdQQYxsPvebhRjdB2dx7AahmEiwzzOMHVKgrq9uY4PlwTLRZtwxcTWLbvMJuWrr8GOqUBbCNu895cuQ8ko78wglEjpPS5ZIu0O%2FfYAoAFa8UpBPJuVZFMho5DEIgrbl%2FX%2BXJKKwLANVoB77c22nyaVebPULTV1JyYS3egxwh2Y5r5TsG4090pooz%2B8A5cGneoEKhlnRPnQDCqavFW0rbV5UePI79G3UTqhJoRZmUr49VmizZtW4NnWm7QhaRbq%2FDlpeT%2Fx%2BNuMKUWDmTuE%2FLUXZA%2F9hWUOkhK&X-Amz-Signature=d2c6088d77183bf704c1c2838359a93b8d24feee8308c0b44524bd3d40202856&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTSCUTI3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBCuX4nHAu73Bfb3qwCsDSXifkCltxEiYLq6iTx7RfADAiEA%2B5eEtPjOXDrqCjxvnlCKYgdO5ffp%2B43cd7hWgN4A7g8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPmfnlsMngplMGIrSrcA7YS69QL6Ov35W4daOyRfCQfq4yx%2BDamcu%2BngJn5LNfIfaDQhOjXybVDio6PP1v8y67TaraDIABcxn4Xzdp3DVRfWL9pHXDiWz1bQNR3Y6wGkliiPs8wQAM8E%2BmLfLHp9Ww99o56hHDX%2FH3X%2FabkKIQXC92%2FT8HwgUmQi0pxiyvZJvFGsWm7e9q%2FSpaXT5zUmiKpbdpzyl800OTGjXl7XAWkTUo%2Bhngq41lba1FEP2f5s3XIcZyfNO5d0%2BeeP%2BaJfdEMPgjraLywWrykDh5VqddQhC5G7%2Fcx%2FRcIjGWPYmjneE8%2BcbcyKnfhzQ8YYoVvK2IXTDle6ViPEAH80UDs05urH1tScKm9qK4KT2%2BIV%2FnHVYmpEXuLsrVsWzKbgUGR2oULfSw72%2FVl8mRLYVyS%2FQYoi%2B8%2B%2FUQDK0pFUM6V%2Bb7pynqKzFNFaSGGe5dWitMPfaCPbUbCMiqkQDn8qeir6zuBoadGSUDuP5Af3N5R%2FiZqMDvDsNjVbgqwkf12lI6lsmgP4asYkVzUNR4vDeUjuPUqFfxUnY8va5%2FBrnaA0m0RhfK%2BM5QQk0gPClBTiqe%2FJ2gBdQQYxsPvebhRjdB2dx7AahmEiwzzOMHVKgrq9uY4PlwTLRZtwxcTWLbvMJuWrr8GOqUBbCNu895cuQ8ko78wglEjpPS5ZIu0O%2FfYAoAFa8UpBPJuVZFMho5DEIgrbl%2FX%2BXJKKwLANVoB77c22nyaVebPULTV1JyYS3egxwh2Y5r5TsG4090pooz%2B8A5cGneoEKhlnRPnQDCqavFW0rbV5UePI79G3UTqhJoRZmUr49VmizZtW4NnWm7QhaRbq%2FDlpeT%2Fx%2BNuMKUWDmTuE%2FLUXZA%2F9hWUOkhK&X-Amz-Signature=f8100b7d2c53152140e5a3d370b7f09dea1e5d7cf2243bad8eee8d183289edcb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTSCUTI3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBCuX4nHAu73Bfb3qwCsDSXifkCltxEiYLq6iTx7RfADAiEA%2B5eEtPjOXDrqCjxvnlCKYgdO5ffp%2B43cd7hWgN4A7g8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPmfnlsMngplMGIrSrcA7YS69QL6Ov35W4daOyRfCQfq4yx%2BDamcu%2BngJn5LNfIfaDQhOjXybVDio6PP1v8y67TaraDIABcxn4Xzdp3DVRfWL9pHXDiWz1bQNR3Y6wGkliiPs8wQAM8E%2BmLfLHp9Ww99o56hHDX%2FH3X%2FabkKIQXC92%2FT8HwgUmQi0pxiyvZJvFGsWm7e9q%2FSpaXT5zUmiKpbdpzyl800OTGjXl7XAWkTUo%2Bhngq41lba1FEP2f5s3XIcZyfNO5d0%2BeeP%2BaJfdEMPgjraLywWrykDh5VqddQhC5G7%2Fcx%2FRcIjGWPYmjneE8%2BcbcyKnfhzQ8YYoVvK2IXTDle6ViPEAH80UDs05urH1tScKm9qK4KT2%2BIV%2FnHVYmpEXuLsrVsWzKbgUGR2oULfSw72%2FVl8mRLYVyS%2FQYoi%2B8%2B%2FUQDK0pFUM6V%2Bb7pynqKzFNFaSGGe5dWitMPfaCPbUbCMiqkQDn8qeir6zuBoadGSUDuP5Af3N5R%2FiZqMDvDsNjVbgqwkf12lI6lsmgP4asYkVzUNR4vDeUjuPUqFfxUnY8va5%2FBrnaA0m0RhfK%2BM5QQk0gPClBTiqe%2FJ2gBdQQYxsPvebhRjdB2dx7AahmEiwzzOMHVKgrq9uY4PlwTLRZtwxcTWLbvMJuWrr8GOqUBbCNu895cuQ8ko78wglEjpPS5ZIu0O%2FfYAoAFa8UpBPJuVZFMho5DEIgrbl%2FX%2BXJKKwLANVoB77c22nyaVebPULTV1JyYS3egxwh2Y5r5TsG4090pooz%2B8A5cGneoEKhlnRPnQDCqavFW0rbV5UePI79G3UTqhJoRZmUr49VmizZtW4NnWm7QhaRbq%2FDlpeT%2Fx%2BNuMKUWDmTuE%2FLUXZA%2F9hWUOkhK&X-Amz-Signature=29356d6f12d618c5aa0b8e641dee3f86d71aab54a6b87ceb6a50bc2b9ec4eca6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTSCUTI3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBCuX4nHAu73Bfb3qwCsDSXifkCltxEiYLq6iTx7RfADAiEA%2B5eEtPjOXDrqCjxvnlCKYgdO5ffp%2B43cd7hWgN4A7g8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPmfnlsMngplMGIrSrcA7YS69QL6Ov35W4daOyRfCQfq4yx%2BDamcu%2BngJn5LNfIfaDQhOjXybVDio6PP1v8y67TaraDIABcxn4Xzdp3DVRfWL9pHXDiWz1bQNR3Y6wGkliiPs8wQAM8E%2BmLfLHp9Ww99o56hHDX%2FH3X%2FabkKIQXC92%2FT8HwgUmQi0pxiyvZJvFGsWm7e9q%2FSpaXT5zUmiKpbdpzyl800OTGjXl7XAWkTUo%2Bhngq41lba1FEP2f5s3XIcZyfNO5d0%2BeeP%2BaJfdEMPgjraLywWrykDh5VqddQhC5G7%2Fcx%2FRcIjGWPYmjneE8%2BcbcyKnfhzQ8YYoVvK2IXTDle6ViPEAH80UDs05urH1tScKm9qK4KT2%2BIV%2FnHVYmpEXuLsrVsWzKbgUGR2oULfSw72%2FVl8mRLYVyS%2FQYoi%2B8%2B%2FUQDK0pFUM6V%2Bb7pynqKzFNFaSGGe5dWitMPfaCPbUbCMiqkQDn8qeir6zuBoadGSUDuP5Af3N5R%2FiZqMDvDsNjVbgqwkf12lI6lsmgP4asYkVzUNR4vDeUjuPUqFfxUnY8va5%2FBrnaA0m0RhfK%2BM5QQk0gPClBTiqe%2FJ2gBdQQYxsPvebhRjdB2dx7AahmEiwzzOMHVKgrq9uY4PlwTLRZtwxcTWLbvMJuWrr8GOqUBbCNu895cuQ8ko78wglEjpPS5ZIu0O%2FfYAoAFa8UpBPJuVZFMho5DEIgrbl%2FX%2BXJKKwLANVoB77c22nyaVebPULTV1JyYS3egxwh2Y5r5TsG4090pooz%2B8A5cGneoEKhlnRPnQDCqavFW0rbV5UePI79G3UTqhJoRZmUr49VmizZtW4NnWm7QhaRbq%2FDlpeT%2Fx%2BNuMKUWDmTuE%2FLUXZA%2F9hWUOkhK&X-Amz-Signature=a9cac72a1500c31f1d847f49140645eba50f5192dc6ba62737102b86c7d6b7f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTSCUTI3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBCuX4nHAu73Bfb3qwCsDSXifkCltxEiYLq6iTx7RfADAiEA%2B5eEtPjOXDrqCjxvnlCKYgdO5ffp%2B43cd7hWgN4A7g8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPmfnlsMngplMGIrSrcA7YS69QL6Ov35W4daOyRfCQfq4yx%2BDamcu%2BngJn5LNfIfaDQhOjXybVDio6PP1v8y67TaraDIABcxn4Xzdp3DVRfWL9pHXDiWz1bQNR3Y6wGkliiPs8wQAM8E%2BmLfLHp9Ww99o56hHDX%2FH3X%2FabkKIQXC92%2FT8HwgUmQi0pxiyvZJvFGsWm7e9q%2FSpaXT5zUmiKpbdpzyl800OTGjXl7XAWkTUo%2Bhngq41lba1FEP2f5s3XIcZyfNO5d0%2BeeP%2BaJfdEMPgjraLywWrykDh5VqddQhC5G7%2Fcx%2FRcIjGWPYmjneE8%2BcbcyKnfhzQ8YYoVvK2IXTDle6ViPEAH80UDs05urH1tScKm9qK4KT2%2BIV%2FnHVYmpEXuLsrVsWzKbgUGR2oULfSw72%2FVl8mRLYVyS%2FQYoi%2B8%2B%2FUQDK0pFUM6V%2Bb7pynqKzFNFaSGGe5dWitMPfaCPbUbCMiqkQDn8qeir6zuBoadGSUDuP5Af3N5R%2FiZqMDvDsNjVbgqwkf12lI6lsmgP4asYkVzUNR4vDeUjuPUqFfxUnY8va5%2FBrnaA0m0RhfK%2BM5QQk0gPClBTiqe%2FJ2gBdQQYxsPvebhRjdB2dx7AahmEiwzzOMHVKgrq9uY4PlwTLRZtwxcTWLbvMJuWrr8GOqUBbCNu895cuQ8ko78wglEjpPS5ZIu0O%2FfYAoAFa8UpBPJuVZFMho5DEIgrbl%2FX%2BXJKKwLANVoB77c22nyaVebPULTV1JyYS3egxwh2Y5r5TsG4090pooz%2B8A5cGneoEKhlnRPnQDCqavFW0rbV5UePI79G3UTqhJoRZmUr49VmizZtW4NnWm7QhaRbq%2FDlpeT%2Fx%2BNuMKUWDmTuE%2FLUXZA%2F9hWUOkhK&X-Amz-Signature=6fd7ce5f0af573c880ce502aed8a8a0fa572ba1c8a43d431281e1e4d788366d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTSCUTI3%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIBCuX4nHAu73Bfb3qwCsDSXifkCltxEiYLq6iTx7RfADAiEA%2B5eEtPjOXDrqCjxvnlCKYgdO5ffp%2B43cd7hWgN4A7g8qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPmfnlsMngplMGIrSrcA7YS69QL6Ov35W4daOyRfCQfq4yx%2BDamcu%2BngJn5LNfIfaDQhOjXybVDio6PP1v8y67TaraDIABcxn4Xzdp3DVRfWL9pHXDiWz1bQNR3Y6wGkliiPs8wQAM8E%2BmLfLHp9Ww99o56hHDX%2FH3X%2FabkKIQXC92%2FT8HwgUmQi0pxiyvZJvFGsWm7e9q%2FSpaXT5zUmiKpbdpzyl800OTGjXl7XAWkTUo%2Bhngq41lba1FEP2f5s3XIcZyfNO5d0%2BeeP%2BaJfdEMPgjraLywWrykDh5VqddQhC5G7%2Fcx%2FRcIjGWPYmjneE8%2BcbcyKnfhzQ8YYoVvK2IXTDle6ViPEAH80UDs05urH1tScKm9qK4KT2%2BIV%2FnHVYmpEXuLsrVsWzKbgUGR2oULfSw72%2FVl8mRLYVyS%2FQYoi%2B8%2B%2FUQDK0pFUM6V%2Bb7pynqKzFNFaSGGe5dWitMPfaCPbUbCMiqkQDn8qeir6zuBoadGSUDuP5Af3N5R%2FiZqMDvDsNjVbgqwkf12lI6lsmgP4asYkVzUNR4vDeUjuPUqFfxUnY8va5%2FBrnaA0m0RhfK%2BM5QQk0gPClBTiqe%2FJ2gBdQQYxsPvebhRjdB2dx7AahmEiwzzOMHVKgrq9uY4PlwTLRZtwxcTWLbvMJuWrr8GOqUBbCNu895cuQ8ko78wglEjpPS5ZIu0O%2FfYAoAFa8UpBPJuVZFMho5DEIgrbl%2FX%2BXJKKwLANVoB77c22nyaVebPULTV1JyYS3egxwh2Y5r5TsG4090pooz%2B8A5cGneoEKhlnRPnQDCqavFW0rbV5UePI79G3UTqhJoRZmUr49VmizZtW4NnWm7QhaRbq%2FDlpeT%2Fx%2BNuMKUWDmTuE%2FLUXZA%2F9hWUOkhK&X-Amz-Signature=a4848f897886a1ac7301f65cdbfad0202f7ab6fcbfbc5f0781f698e8f1cddb6d&X-Amz-SignedHeaders=host&x-id=GetObject)
