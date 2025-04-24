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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCBSYLU3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCx28GgWuMNBVFs%2FCwqdG08r7kvmTlmx%2BMu1D4CN9aWpwIhAK53ZxvMWBU3sv3I9zgnhyUOauSo7Icsk6rWvM1eqp8oKv8DCBEQABoMNjM3NDIzMTgzODA1IgzJKEi76Ic8RBJzzpcq3AOLI8Jr%2B87kePApqIo0Mh4fDsT%2BQsybVGeR%2FwfdqrVtwVhkGp1mF8BWANgX7ioXh4yaYiUjyfrE9Yh2Qj%2BefZE81Vr1wTKr9S0F5v2ZoqDQcNec%2BzIFyPc4pMrLX5l8n%2BFZoae5RSgi1Pd35XL9mUXqrrqXICJegyD6iDVRkrbjHsEFqh%2BeTNT2cRoaWcbnigIlK7qA3UyKtquMAWM0HMlWD5%2BvczTN66gJbJFodL91SMr5IKjn1Rq2J%2BpC%2BJ2%2FpWYGeY4g23VaYWu7NXNucYYWiCS6Dj71j2GQuLVz443LT9x2stX%2BG5%2BWoJCYix8jkGmHxJp8zfYYkys2VefjeNrw9t0l2nODOWJcvg19AmA3cJ0%2BiaWYFzZAQJeEY1ifrK1JMdzLu4gqqe8Hmz3NdfnTSsiYA3Zni4fuQv10XcRFy0K0D%2Fm4dpPdmfGinFO699W1lZ7AjXTCi8QRdwGz0i6kvANbpmaRWyqkTxA%2FEl2vu044guUol%2B7Hvm9D1L9LFSijPMgWl0JCAVdb8IxQ27nMqMVsmyQvY%2FXNMptHcFMV7pXktBKJe9qBU2np4dn3BP86y5flvR%2BpUKtz0vAsjIKDDYjwQp%2FT0WjPvV08Wgwb1%2FvKS35mueubaz83pzD96KfABjqkAfO9L6qkujLKdIJuAYj9YNoU9%2FgUhjkGCdE9SFVCeZoIT7Lm6iXZz%2Bu0EFN2LegoPM%2F8w5JrqHeZ2BesAB%2BnN%2BJGr2X8YGqyMsItjzCut9zS8WIp58BmysSieDIAThjIJCNXUvK%2BtRGx94vjFsLNmPVqaa9Af2KBKUVOT48NmpGYEQTfLtAmVaSnbuIZop6TeCFkAscqQ6GiPkwTsHtPR2qdel8W&X-Amz-Signature=21cb81c01d2588ca5edc3e2487b9da64f6da4bed685220c32c7f06abf22a213a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCBSYLU3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCx28GgWuMNBVFs%2FCwqdG08r7kvmTlmx%2BMu1D4CN9aWpwIhAK53ZxvMWBU3sv3I9zgnhyUOauSo7Icsk6rWvM1eqp8oKv8DCBEQABoMNjM3NDIzMTgzODA1IgzJKEi76Ic8RBJzzpcq3AOLI8Jr%2B87kePApqIo0Mh4fDsT%2BQsybVGeR%2FwfdqrVtwVhkGp1mF8BWANgX7ioXh4yaYiUjyfrE9Yh2Qj%2BefZE81Vr1wTKr9S0F5v2ZoqDQcNec%2BzIFyPc4pMrLX5l8n%2BFZoae5RSgi1Pd35XL9mUXqrrqXICJegyD6iDVRkrbjHsEFqh%2BeTNT2cRoaWcbnigIlK7qA3UyKtquMAWM0HMlWD5%2BvczTN66gJbJFodL91SMr5IKjn1Rq2J%2BpC%2BJ2%2FpWYGeY4g23VaYWu7NXNucYYWiCS6Dj71j2GQuLVz443LT9x2stX%2BG5%2BWoJCYix8jkGmHxJp8zfYYkys2VefjeNrw9t0l2nODOWJcvg19AmA3cJ0%2BiaWYFzZAQJeEY1ifrK1JMdzLu4gqqe8Hmz3NdfnTSsiYA3Zni4fuQv10XcRFy0K0D%2Fm4dpPdmfGinFO699W1lZ7AjXTCi8QRdwGz0i6kvANbpmaRWyqkTxA%2FEl2vu044guUol%2B7Hvm9D1L9LFSijPMgWl0JCAVdb8IxQ27nMqMVsmyQvY%2FXNMptHcFMV7pXktBKJe9qBU2np4dn3BP86y5flvR%2BpUKtz0vAsjIKDDYjwQp%2FT0WjPvV08Wgwb1%2FvKS35mueubaz83pzD96KfABjqkAfO9L6qkujLKdIJuAYj9YNoU9%2FgUhjkGCdE9SFVCeZoIT7Lm6iXZz%2Bu0EFN2LegoPM%2F8w5JrqHeZ2BesAB%2BnN%2BJGr2X8YGqyMsItjzCut9zS8WIp58BmysSieDIAThjIJCNXUvK%2BtRGx94vjFsLNmPVqaa9Af2KBKUVOT48NmpGYEQTfLtAmVaSnbuIZop6TeCFkAscqQ6GiPkwTsHtPR2qdel8W&X-Amz-Signature=3d8b93660969412964d2d9eaef749e47c844d7d3a8068f3baaaf676ef3da4bd6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCBSYLU3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCx28GgWuMNBVFs%2FCwqdG08r7kvmTlmx%2BMu1D4CN9aWpwIhAK53ZxvMWBU3sv3I9zgnhyUOauSo7Icsk6rWvM1eqp8oKv8DCBEQABoMNjM3NDIzMTgzODA1IgzJKEi76Ic8RBJzzpcq3AOLI8Jr%2B87kePApqIo0Mh4fDsT%2BQsybVGeR%2FwfdqrVtwVhkGp1mF8BWANgX7ioXh4yaYiUjyfrE9Yh2Qj%2BefZE81Vr1wTKr9S0F5v2ZoqDQcNec%2BzIFyPc4pMrLX5l8n%2BFZoae5RSgi1Pd35XL9mUXqrrqXICJegyD6iDVRkrbjHsEFqh%2BeTNT2cRoaWcbnigIlK7qA3UyKtquMAWM0HMlWD5%2BvczTN66gJbJFodL91SMr5IKjn1Rq2J%2BpC%2BJ2%2FpWYGeY4g23VaYWu7NXNucYYWiCS6Dj71j2GQuLVz443LT9x2stX%2BG5%2BWoJCYix8jkGmHxJp8zfYYkys2VefjeNrw9t0l2nODOWJcvg19AmA3cJ0%2BiaWYFzZAQJeEY1ifrK1JMdzLu4gqqe8Hmz3NdfnTSsiYA3Zni4fuQv10XcRFy0K0D%2Fm4dpPdmfGinFO699W1lZ7AjXTCi8QRdwGz0i6kvANbpmaRWyqkTxA%2FEl2vu044guUol%2B7Hvm9D1L9LFSijPMgWl0JCAVdb8IxQ27nMqMVsmyQvY%2FXNMptHcFMV7pXktBKJe9qBU2np4dn3BP86y5flvR%2BpUKtz0vAsjIKDDYjwQp%2FT0WjPvV08Wgwb1%2FvKS35mueubaz83pzD96KfABjqkAfO9L6qkujLKdIJuAYj9YNoU9%2FgUhjkGCdE9SFVCeZoIT7Lm6iXZz%2Bu0EFN2LegoPM%2F8w5JrqHeZ2BesAB%2BnN%2BJGr2X8YGqyMsItjzCut9zS8WIp58BmysSieDIAThjIJCNXUvK%2BtRGx94vjFsLNmPVqaa9Af2KBKUVOT48NmpGYEQTfLtAmVaSnbuIZop6TeCFkAscqQ6GiPkwTsHtPR2qdel8W&X-Amz-Signature=ace1e62833252fd44b503a1820f888a78f573ca2b1f9e3adbf49b628100174e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCBSYLU3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCx28GgWuMNBVFs%2FCwqdG08r7kvmTlmx%2BMu1D4CN9aWpwIhAK53ZxvMWBU3sv3I9zgnhyUOauSo7Icsk6rWvM1eqp8oKv8DCBEQABoMNjM3NDIzMTgzODA1IgzJKEi76Ic8RBJzzpcq3AOLI8Jr%2B87kePApqIo0Mh4fDsT%2BQsybVGeR%2FwfdqrVtwVhkGp1mF8BWANgX7ioXh4yaYiUjyfrE9Yh2Qj%2BefZE81Vr1wTKr9S0F5v2ZoqDQcNec%2BzIFyPc4pMrLX5l8n%2BFZoae5RSgi1Pd35XL9mUXqrrqXICJegyD6iDVRkrbjHsEFqh%2BeTNT2cRoaWcbnigIlK7qA3UyKtquMAWM0HMlWD5%2BvczTN66gJbJFodL91SMr5IKjn1Rq2J%2BpC%2BJ2%2FpWYGeY4g23VaYWu7NXNucYYWiCS6Dj71j2GQuLVz443LT9x2stX%2BG5%2BWoJCYix8jkGmHxJp8zfYYkys2VefjeNrw9t0l2nODOWJcvg19AmA3cJ0%2BiaWYFzZAQJeEY1ifrK1JMdzLu4gqqe8Hmz3NdfnTSsiYA3Zni4fuQv10XcRFy0K0D%2Fm4dpPdmfGinFO699W1lZ7AjXTCi8QRdwGz0i6kvANbpmaRWyqkTxA%2FEl2vu044guUol%2B7Hvm9D1L9LFSijPMgWl0JCAVdb8IxQ27nMqMVsmyQvY%2FXNMptHcFMV7pXktBKJe9qBU2np4dn3BP86y5flvR%2BpUKtz0vAsjIKDDYjwQp%2FT0WjPvV08Wgwb1%2FvKS35mueubaz83pzD96KfABjqkAfO9L6qkujLKdIJuAYj9YNoU9%2FgUhjkGCdE9SFVCeZoIT7Lm6iXZz%2Bu0EFN2LegoPM%2F8w5JrqHeZ2BesAB%2BnN%2BJGr2X8YGqyMsItjzCut9zS8WIp58BmysSieDIAThjIJCNXUvK%2BtRGx94vjFsLNmPVqaa9Af2KBKUVOT48NmpGYEQTfLtAmVaSnbuIZop6TeCFkAscqQ6GiPkwTsHtPR2qdel8W&X-Amz-Signature=75f785157568bc5934559e4e80653fe48296688326acaf1f117976968687ca6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCBSYLU3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCx28GgWuMNBVFs%2FCwqdG08r7kvmTlmx%2BMu1D4CN9aWpwIhAK53ZxvMWBU3sv3I9zgnhyUOauSo7Icsk6rWvM1eqp8oKv8DCBEQABoMNjM3NDIzMTgzODA1IgzJKEi76Ic8RBJzzpcq3AOLI8Jr%2B87kePApqIo0Mh4fDsT%2BQsybVGeR%2FwfdqrVtwVhkGp1mF8BWANgX7ioXh4yaYiUjyfrE9Yh2Qj%2BefZE81Vr1wTKr9S0F5v2ZoqDQcNec%2BzIFyPc4pMrLX5l8n%2BFZoae5RSgi1Pd35XL9mUXqrrqXICJegyD6iDVRkrbjHsEFqh%2BeTNT2cRoaWcbnigIlK7qA3UyKtquMAWM0HMlWD5%2BvczTN66gJbJFodL91SMr5IKjn1Rq2J%2BpC%2BJ2%2FpWYGeY4g23VaYWu7NXNucYYWiCS6Dj71j2GQuLVz443LT9x2stX%2BG5%2BWoJCYix8jkGmHxJp8zfYYkys2VefjeNrw9t0l2nODOWJcvg19AmA3cJ0%2BiaWYFzZAQJeEY1ifrK1JMdzLu4gqqe8Hmz3NdfnTSsiYA3Zni4fuQv10XcRFy0K0D%2Fm4dpPdmfGinFO699W1lZ7AjXTCi8QRdwGz0i6kvANbpmaRWyqkTxA%2FEl2vu044guUol%2B7Hvm9D1L9LFSijPMgWl0JCAVdb8IxQ27nMqMVsmyQvY%2FXNMptHcFMV7pXktBKJe9qBU2np4dn3BP86y5flvR%2BpUKtz0vAsjIKDDYjwQp%2FT0WjPvV08Wgwb1%2FvKS35mueubaz83pzD96KfABjqkAfO9L6qkujLKdIJuAYj9YNoU9%2FgUhjkGCdE9SFVCeZoIT7Lm6iXZz%2Bu0EFN2LegoPM%2F8w5JrqHeZ2BesAB%2BnN%2BJGr2X8YGqyMsItjzCut9zS8WIp58BmysSieDIAThjIJCNXUvK%2BtRGx94vjFsLNmPVqaa9Af2KBKUVOT48NmpGYEQTfLtAmVaSnbuIZop6TeCFkAscqQ6GiPkwTsHtPR2qdel8W&X-Amz-Signature=0b9c0fff9c57c01314957700cbe9a4c08714a0c3635ba4a64f4191dd32ad6927&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCBSYLU3%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T090922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQCx28GgWuMNBVFs%2FCwqdG08r7kvmTlmx%2BMu1D4CN9aWpwIhAK53ZxvMWBU3sv3I9zgnhyUOauSo7Icsk6rWvM1eqp8oKv8DCBEQABoMNjM3NDIzMTgzODA1IgzJKEi76Ic8RBJzzpcq3AOLI8Jr%2B87kePApqIo0Mh4fDsT%2BQsybVGeR%2FwfdqrVtwVhkGp1mF8BWANgX7ioXh4yaYiUjyfrE9Yh2Qj%2BefZE81Vr1wTKr9S0F5v2ZoqDQcNec%2BzIFyPc4pMrLX5l8n%2BFZoae5RSgi1Pd35XL9mUXqrrqXICJegyD6iDVRkrbjHsEFqh%2BeTNT2cRoaWcbnigIlK7qA3UyKtquMAWM0HMlWD5%2BvczTN66gJbJFodL91SMr5IKjn1Rq2J%2BpC%2BJ2%2FpWYGeY4g23VaYWu7NXNucYYWiCS6Dj71j2GQuLVz443LT9x2stX%2BG5%2BWoJCYix8jkGmHxJp8zfYYkys2VefjeNrw9t0l2nODOWJcvg19AmA3cJ0%2BiaWYFzZAQJeEY1ifrK1JMdzLu4gqqe8Hmz3NdfnTSsiYA3Zni4fuQv10XcRFy0K0D%2Fm4dpPdmfGinFO699W1lZ7AjXTCi8QRdwGz0i6kvANbpmaRWyqkTxA%2FEl2vu044guUol%2B7Hvm9D1L9LFSijPMgWl0JCAVdb8IxQ27nMqMVsmyQvY%2FXNMptHcFMV7pXktBKJe9qBU2np4dn3BP86y5flvR%2BpUKtz0vAsjIKDDYjwQp%2FT0WjPvV08Wgwb1%2FvKS35mueubaz83pzD96KfABjqkAfO9L6qkujLKdIJuAYj9YNoU9%2FgUhjkGCdE9SFVCeZoIT7Lm6iXZz%2Bu0EFN2LegoPM%2F8w5JrqHeZ2BesAB%2BnN%2BJGr2X8YGqyMsItjzCut9zS8WIp58BmysSieDIAThjIJCNXUvK%2BtRGx94vjFsLNmPVqaa9Af2KBKUVOT48NmpGYEQTfLtAmVaSnbuIZop6TeCFkAscqQ6GiPkwTsHtPR2qdel8W&X-Amz-Signature=076d0ed35ac460e41d38fb816675fa2e92f76b9c1794380e55f1494f471194bb&X-Amz-SignedHeaders=host&x-id=GetObject)
