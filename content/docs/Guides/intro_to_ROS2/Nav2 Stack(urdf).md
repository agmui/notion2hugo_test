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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAEQA3H%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBl0PLSXzbSqFUYGBA2h3C8HVLJYTqWvBDnrzrJ4CfjqAiEA888%2Bft60VlMnJ2yP760eBg1H0gZ8YnqUZts7DqwjddwqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe9Oq0tYBL5AvK2SCrcA%2BN23Dk%2Bl2r93bmLcrWPvc7gZRJ0s4dNQbdShqazZ34ZzVvRLzBOsl8JqReYDvk0FiGPUycvF8BHwj6pwq8nHZKG16kae31vdHbcI86P%2BoHOfgGhE6fy9V3wrmjgTbCG4z1jpM9BO93IQ4IfC0mS%2FJFpvgPI1iW70DaAMNiwKGAkcliMDtZxcBG2enOq04JecUUPNWXkdRfi5%2BYYHHs0i5UIO9bysYEEm76a5BivmoEDQYf%2B0kn7FhF2ZQ2Qz0jOZrlNKzpTCh14xCVcSgnA%2FQTtVDwgFya6bVAIC4OKu4nC2zighiJGEaTVWBYSJ7e2c3zWojQyAmBtowtm1SKr%2BLTQTv2On2FS3dJF0xTqxNyOnOW3QiMhXcAxuWVEgYbkpkrbuFNUsND9OxIWEM%2Fz89Bc3Vmenj2uvamWvjU2Vk93WT5BG0W5K7%2FDpjq9TWYiP%2BbSjF9O4v%2BLscdbRhyDYb9tgemgKd0Je%2FYYWso%2FE65hTboRpct1tURf7a1EIpG3jEtKncBFMdbrna8lb2V%2B%2FeeJxDSTh4HtiO8LcfuZMwZRmaKvqMt2EaXNxe9d2uYIoRRD52O048bi%2BbltFqY%2FtLbavy6Rt%2ByRUNbXlPV7l3RwwR0EqqJEuCNqQxwvMKCh7MMGOqUB%2FDNKD6z0ezyECp9Zr1UOOU3xtSEniyuOTFHqfU3sieEd3kNUjmUPQywLipQ4oZo%2BrDyzAgBDtR7g%2FkrnYBBXlVMOyGg%2F%2FC%2BQGHsD7E6kCig3S%2FvUf3PtmG4UXpeQLW1mDOwN3fPwpxURExthOUc4yRfOIpoL8mXydx%2BCAJCJgBdEAvjkmiPv3rsfY9t4jWOocflXfGaoIjHR9qh0kvNknCsRSiH0&X-Amz-Signature=f5af3e42b6f6ab17808af190cfd04d7a2a0d8e327a2e24812e672ede4c6d8244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAEQA3H%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBl0PLSXzbSqFUYGBA2h3C8HVLJYTqWvBDnrzrJ4CfjqAiEA888%2Bft60VlMnJ2yP760eBg1H0gZ8YnqUZts7DqwjddwqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe9Oq0tYBL5AvK2SCrcA%2BN23Dk%2Bl2r93bmLcrWPvc7gZRJ0s4dNQbdShqazZ34ZzVvRLzBOsl8JqReYDvk0FiGPUycvF8BHwj6pwq8nHZKG16kae31vdHbcI86P%2BoHOfgGhE6fy9V3wrmjgTbCG4z1jpM9BO93IQ4IfC0mS%2FJFpvgPI1iW70DaAMNiwKGAkcliMDtZxcBG2enOq04JecUUPNWXkdRfi5%2BYYHHs0i5UIO9bysYEEm76a5BivmoEDQYf%2B0kn7FhF2ZQ2Qz0jOZrlNKzpTCh14xCVcSgnA%2FQTtVDwgFya6bVAIC4OKu4nC2zighiJGEaTVWBYSJ7e2c3zWojQyAmBtowtm1SKr%2BLTQTv2On2FS3dJF0xTqxNyOnOW3QiMhXcAxuWVEgYbkpkrbuFNUsND9OxIWEM%2Fz89Bc3Vmenj2uvamWvjU2Vk93WT5BG0W5K7%2FDpjq9TWYiP%2BbSjF9O4v%2BLscdbRhyDYb9tgemgKd0Je%2FYYWso%2FE65hTboRpct1tURf7a1EIpG3jEtKncBFMdbrna8lb2V%2B%2FeeJxDSTh4HtiO8LcfuZMwZRmaKvqMt2EaXNxe9d2uYIoRRD52O048bi%2BbltFqY%2FtLbavy6Rt%2ByRUNbXlPV7l3RwwR0EqqJEuCNqQxwvMKCh7MMGOqUB%2FDNKD6z0ezyECp9Zr1UOOU3xtSEniyuOTFHqfU3sieEd3kNUjmUPQywLipQ4oZo%2BrDyzAgBDtR7g%2FkrnYBBXlVMOyGg%2F%2FC%2BQGHsD7E6kCig3S%2FvUf3PtmG4UXpeQLW1mDOwN3fPwpxURExthOUc4yRfOIpoL8mXydx%2BCAJCJgBdEAvjkmiPv3rsfY9t4jWOocflXfGaoIjHR9qh0kvNknCsRSiH0&X-Amz-Signature=ab548e29b00173b4ac62f54b0a7060cca92d504ce7139fe76ce33f689d82dd03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAEQA3H%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBl0PLSXzbSqFUYGBA2h3C8HVLJYTqWvBDnrzrJ4CfjqAiEA888%2Bft60VlMnJ2yP760eBg1H0gZ8YnqUZts7DqwjddwqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe9Oq0tYBL5AvK2SCrcA%2BN23Dk%2Bl2r93bmLcrWPvc7gZRJ0s4dNQbdShqazZ34ZzVvRLzBOsl8JqReYDvk0FiGPUycvF8BHwj6pwq8nHZKG16kae31vdHbcI86P%2BoHOfgGhE6fy9V3wrmjgTbCG4z1jpM9BO93IQ4IfC0mS%2FJFpvgPI1iW70DaAMNiwKGAkcliMDtZxcBG2enOq04JecUUPNWXkdRfi5%2BYYHHs0i5UIO9bysYEEm76a5BivmoEDQYf%2B0kn7FhF2ZQ2Qz0jOZrlNKzpTCh14xCVcSgnA%2FQTtVDwgFya6bVAIC4OKu4nC2zighiJGEaTVWBYSJ7e2c3zWojQyAmBtowtm1SKr%2BLTQTv2On2FS3dJF0xTqxNyOnOW3QiMhXcAxuWVEgYbkpkrbuFNUsND9OxIWEM%2Fz89Bc3Vmenj2uvamWvjU2Vk93WT5BG0W5K7%2FDpjq9TWYiP%2BbSjF9O4v%2BLscdbRhyDYb9tgemgKd0Je%2FYYWso%2FE65hTboRpct1tURf7a1EIpG3jEtKncBFMdbrna8lb2V%2B%2FeeJxDSTh4HtiO8LcfuZMwZRmaKvqMt2EaXNxe9d2uYIoRRD52O048bi%2BbltFqY%2FtLbavy6Rt%2ByRUNbXlPV7l3RwwR0EqqJEuCNqQxwvMKCh7MMGOqUB%2FDNKD6z0ezyECp9Zr1UOOU3xtSEniyuOTFHqfU3sieEd3kNUjmUPQywLipQ4oZo%2BrDyzAgBDtR7g%2FkrnYBBXlVMOyGg%2F%2FC%2BQGHsD7E6kCig3S%2FvUf3PtmG4UXpeQLW1mDOwN3fPwpxURExthOUc4yRfOIpoL8mXydx%2BCAJCJgBdEAvjkmiPv3rsfY9t4jWOocflXfGaoIjHR9qh0kvNknCsRSiH0&X-Amz-Signature=c0ea5f4a2112abb2753843a2e5f96053e5bbfd615fc2ce0794eb092662311f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAEQA3H%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBl0PLSXzbSqFUYGBA2h3C8HVLJYTqWvBDnrzrJ4CfjqAiEA888%2Bft60VlMnJ2yP760eBg1H0gZ8YnqUZts7DqwjddwqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe9Oq0tYBL5AvK2SCrcA%2BN23Dk%2Bl2r93bmLcrWPvc7gZRJ0s4dNQbdShqazZ34ZzVvRLzBOsl8JqReYDvk0FiGPUycvF8BHwj6pwq8nHZKG16kae31vdHbcI86P%2BoHOfgGhE6fy9V3wrmjgTbCG4z1jpM9BO93IQ4IfC0mS%2FJFpvgPI1iW70DaAMNiwKGAkcliMDtZxcBG2enOq04JecUUPNWXkdRfi5%2BYYHHs0i5UIO9bysYEEm76a5BivmoEDQYf%2B0kn7FhF2ZQ2Qz0jOZrlNKzpTCh14xCVcSgnA%2FQTtVDwgFya6bVAIC4OKu4nC2zighiJGEaTVWBYSJ7e2c3zWojQyAmBtowtm1SKr%2BLTQTv2On2FS3dJF0xTqxNyOnOW3QiMhXcAxuWVEgYbkpkrbuFNUsND9OxIWEM%2Fz89Bc3Vmenj2uvamWvjU2Vk93WT5BG0W5K7%2FDpjq9TWYiP%2BbSjF9O4v%2BLscdbRhyDYb9tgemgKd0Je%2FYYWso%2FE65hTboRpct1tURf7a1EIpG3jEtKncBFMdbrna8lb2V%2B%2FeeJxDSTh4HtiO8LcfuZMwZRmaKvqMt2EaXNxe9d2uYIoRRD52O048bi%2BbltFqY%2FtLbavy6Rt%2ByRUNbXlPV7l3RwwR0EqqJEuCNqQxwvMKCh7MMGOqUB%2FDNKD6z0ezyECp9Zr1UOOU3xtSEniyuOTFHqfU3sieEd3kNUjmUPQywLipQ4oZo%2BrDyzAgBDtR7g%2FkrnYBBXlVMOyGg%2F%2FC%2BQGHsD7E6kCig3S%2FvUf3PtmG4UXpeQLW1mDOwN3fPwpxURExthOUc4yRfOIpoL8mXydx%2BCAJCJgBdEAvjkmiPv3rsfY9t4jWOocflXfGaoIjHR9qh0kvNknCsRSiH0&X-Amz-Signature=0b92b723693bd22ce6b751a148fb9035a235478550b8b0ce2fd7a9854cadac1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAEQA3H%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBl0PLSXzbSqFUYGBA2h3C8HVLJYTqWvBDnrzrJ4CfjqAiEA888%2Bft60VlMnJ2yP760eBg1H0gZ8YnqUZts7DqwjddwqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe9Oq0tYBL5AvK2SCrcA%2BN23Dk%2Bl2r93bmLcrWPvc7gZRJ0s4dNQbdShqazZ34ZzVvRLzBOsl8JqReYDvk0FiGPUycvF8BHwj6pwq8nHZKG16kae31vdHbcI86P%2BoHOfgGhE6fy9V3wrmjgTbCG4z1jpM9BO93IQ4IfC0mS%2FJFpvgPI1iW70DaAMNiwKGAkcliMDtZxcBG2enOq04JecUUPNWXkdRfi5%2BYYHHs0i5UIO9bysYEEm76a5BivmoEDQYf%2B0kn7FhF2ZQ2Qz0jOZrlNKzpTCh14xCVcSgnA%2FQTtVDwgFya6bVAIC4OKu4nC2zighiJGEaTVWBYSJ7e2c3zWojQyAmBtowtm1SKr%2BLTQTv2On2FS3dJF0xTqxNyOnOW3QiMhXcAxuWVEgYbkpkrbuFNUsND9OxIWEM%2Fz89Bc3Vmenj2uvamWvjU2Vk93WT5BG0W5K7%2FDpjq9TWYiP%2BbSjF9O4v%2BLscdbRhyDYb9tgemgKd0Je%2FYYWso%2FE65hTboRpct1tURf7a1EIpG3jEtKncBFMdbrna8lb2V%2B%2FeeJxDSTh4HtiO8LcfuZMwZRmaKvqMt2EaXNxe9d2uYIoRRD52O048bi%2BbltFqY%2FtLbavy6Rt%2ByRUNbXlPV7l3RwwR0EqqJEuCNqQxwvMKCh7MMGOqUB%2FDNKD6z0ezyECp9Zr1UOOU3xtSEniyuOTFHqfU3sieEd3kNUjmUPQywLipQ4oZo%2BrDyzAgBDtR7g%2FkrnYBBXlVMOyGg%2F%2FC%2BQGHsD7E6kCig3S%2FvUf3PtmG4UXpeQLW1mDOwN3fPwpxURExthOUc4yRfOIpoL8mXydx%2BCAJCJgBdEAvjkmiPv3rsfY9t4jWOocflXfGaoIjHR9qh0kvNknCsRSiH0&X-Amz-Signature=96ae582cd44a624ddc8611b62c9851fd74c55dc615a5a0b14ca356b90d15f929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NAEQA3H%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBl0PLSXzbSqFUYGBA2h3C8HVLJYTqWvBDnrzrJ4CfjqAiEA888%2Bft60VlMnJ2yP760eBg1H0gZ8YnqUZts7DqwjddwqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe9Oq0tYBL5AvK2SCrcA%2BN23Dk%2Bl2r93bmLcrWPvc7gZRJ0s4dNQbdShqazZ34ZzVvRLzBOsl8JqReYDvk0FiGPUycvF8BHwj6pwq8nHZKG16kae31vdHbcI86P%2BoHOfgGhE6fy9V3wrmjgTbCG4z1jpM9BO93IQ4IfC0mS%2FJFpvgPI1iW70DaAMNiwKGAkcliMDtZxcBG2enOq04JecUUPNWXkdRfi5%2BYYHHs0i5UIO9bysYEEm76a5BivmoEDQYf%2B0kn7FhF2ZQ2Qz0jOZrlNKzpTCh14xCVcSgnA%2FQTtVDwgFya6bVAIC4OKu4nC2zighiJGEaTVWBYSJ7e2c3zWojQyAmBtowtm1SKr%2BLTQTv2On2FS3dJF0xTqxNyOnOW3QiMhXcAxuWVEgYbkpkrbuFNUsND9OxIWEM%2Fz89Bc3Vmenj2uvamWvjU2Vk93WT5BG0W5K7%2FDpjq9TWYiP%2BbSjF9O4v%2BLscdbRhyDYb9tgemgKd0Je%2FYYWso%2FE65hTboRpct1tURf7a1EIpG3jEtKncBFMdbrna8lb2V%2B%2FeeJxDSTh4HtiO8LcfuZMwZRmaKvqMt2EaXNxe9d2uYIoRRD52O048bi%2BbltFqY%2FtLbavy6Rt%2ByRUNbXlPV7l3RwwR0EqqJEuCNqQxwvMKCh7MMGOqUB%2FDNKD6z0ezyECp9Zr1UOOU3xtSEniyuOTFHqfU3sieEd3kNUjmUPQywLipQ4oZo%2BrDyzAgBDtR7g%2FkrnYBBXlVMOyGg%2F%2FC%2BQGHsD7E6kCig3S%2FvUf3PtmG4UXpeQLW1mDOwN3fPwpxURExthOUc4yRfOIpoL8mXydx%2BCAJCJgBdEAvjkmiPv3rsfY9t4jWOocflXfGaoIjHR9qh0kvNknCsRSiH0&X-Amz-Signature=2ef223135c9e84cfe3b1e5bfce69378f9c30c550ac381f3813b9af4ab0fc9751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
