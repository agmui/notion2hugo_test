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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIXS4SI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRMZxtMpkkJsWlsVkN55gJmWIhBlZXdMByRv7Qm6BB7AIga%2Fi69tUrprH7%2BRk%2BObpmoDBYwgmcZC7FvsFtXl9FtjYqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4msP9GJwbo%2B6eKVSrcA3eHZiE9osWcYuNFc37YD1SUx10AJa2%2F5Xm701zi0FFdLBW3aAPoAE3pKiJJR4peYChkpGA4POlkwx7fXpO6IePpOoJIojKpoHkmV%2B2pk7AP4sVxXraLQR%2FgioUp6kpGzh%2FRH0GchjJWIhxZOP%2FLJDGAqje8zn3TvN98mGU%2BpJz%2BzS5MyJZqhoCwRanuXdiMk2owq0aZp0CkS91zM3de%2F22H30Ea1nCWnEyY6oehNpo7o%2Bd%2FohavDDqdnruwWag9IrMiOdF%2FRKA5GgDSrtiTgM7Dc%2F4kfsryoiNHXpNdecOmhE6fSJDunBwswVPloSFjO8zkaoBmI%2BThy%2FHEX6B8szr3sryU4FF4E6MQuBXQe5MZQTNTAqrK3CASzQhbgzB3Qh6vwEvnLKidh%2FJgJFiWNTpHBUK6PN7t1uErzcml0cI0j4G608OhRq7lXDIqr81o%2Fa7x54qj3jnmuq4a3R5mT5gDAwZiDZ3s2CZ0G%2BN7MpGqRrPsYw4ysQS4gzEXJkfmUs4btmm9DJC84rBB4KazVIRzRsnFSsMHBb6oFijbGF%2FRSj9YQQA9URZWqDucSvdpEWvB6hpMPTPBR11MTlhCwV7a1B%2F6B1bxMclpCuhdQ%2FMvx6nJKL397QSJNoZVMLe0%2FcAGOqUBaNVATflfvK1TeF3WLGCP4IN1Y6eEt%2F1xxHTzXjYP9DhCUJ1OH5%2FOlvuwg26jxa5kD4z3C7kK77z1nF2Tbe48LZKEPCIUp872XlSh%2BPv01osIMb3B71Y5%2BXfkeZmq0wfIM9S4IMMUJANlypG8ow3srPvFeHameg2OYct5TQB1On9tOi6jXi7Z8zrrXhHCvQ%2BYg2deoXEIWJgaoqVCtUwYI8VXI47D&X-Amz-Signature=bec843c40d7cfc9f023e0d9bed6d00ff45050c12e613c1ae827dea73a2a165a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIXS4SI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRMZxtMpkkJsWlsVkN55gJmWIhBlZXdMByRv7Qm6BB7AIga%2Fi69tUrprH7%2BRk%2BObpmoDBYwgmcZC7FvsFtXl9FtjYqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4msP9GJwbo%2B6eKVSrcA3eHZiE9osWcYuNFc37YD1SUx10AJa2%2F5Xm701zi0FFdLBW3aAPoAE3pKiJJR4peYChkpGA4POlkwx7fXpO6IePpOoJIojKpoHkmV%2B2pk7AP4sVxXraLQR%2FgioUp6kpGzh%2FRH0GchjJWIhxZOP%2FLJDGAqje8zn3TvN98mGU%2BpJz%2BzS5MyJZqhoCwRanuXdiMk2owq0aZp0CkS91zM3de%2F22H30Ea1nCWnEyY6oehNpo7o%2Bd%2FohavDDqdnruwWag9IrMiOdF%2FRKA5GgDSrtiTgM7Dc%2F4kfsryoiNHXpNdecOmhE6fSJDunBwswVPloSFjO8zkaoBmI%2BThy%2FHEX6B8szr3sryU4FF4E6MQuBXQe5MZQTNTAqrK3CASzQhbgzB3Qh6vwEvnLKidh%2FJgJFiWNTpHBUK6PN7t1uErzcml0cI0j4G608OhRq7lXDIqr81o%2Fa7x54qj3jnmuq4a3R5mT5gDAwZiDZ3s2CZ0G%2BN7MpGqRrPsYw4ysQS4gzEXJkfmUs4btmm9DJC84rBB4KazVIRzRsnFSsMHBb6oFijbGF%2FRSj9YQQA9URZWqDucSvdpEWvB6hpMPTPBR11MTlhCwV7a1B%2F6B1bxMclpCuhdQ%2FMvx6nJKL397QSJNoZVMLe0%2FcAGOqUBaNVATflfvK1TeF3WLGCP4IN1Y6eEt%2F1xxHTzXjYP9DhCUJ1OH5%2FOlvuwg26jxa5kD4z3C7kK77z1nF2Tbe48LZKEPCIUp872XlSh%2BPv01osIMb3B71Y5%2BXfkeZmq0wfIM9S4IMMUJANlypG8ow3srPvFeHameg2OYct5TQB1On9tOi6jXi7Z8zrrXhHCvQ%2BYg2deoXEIWJgaoqVCtUwYI8VXI47D&X-Amz-Signature=32cf8edbc7bab217bf7b210836f184cd90d59e2abe1c502afffca4d474e59135&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIXS4SI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRMZxtMpkkJsWlsVkN55gJmWIhBlZXdMByRv7Qm6BB7AIga%2Fi69tUrprH7%2BRk%2BObpmoDBYwgmcZC7FvsFtXl9FtjYqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4msP9GJwbo%2B6eKVSrcA3eHZiE9osWcYuNFc37YD1SUx10AJa2%2F5Xm701zi0FFdLBW3aAPoAE3pKiJJR4peYChkpGA4POlkwx7fXpO6IePpOoJIojKpoHkmV%2B2pk7AP4sVxXraLQR%2FgioUp6kpGzh%2FRH0GchjJWIhxZOP%2FLJDGAqje8zn3TvN98mGU%2BpJz%2BzS5MyJZqhoCwRanuXdiMk2owq0aZp0CkS91zM3de%2F22H30Ea1nCWnEyY6oehNpo7o%2Bd%2FohavDDqdnruwWag9IrMiOdF%2FRKA5GgDSrtiTgM7Dc%2F4kfsryoiNHXpNdecOmhE6fSJDunBwswVPloSFjO8zkaoBmI%2BThy%2FHEX6B8szr3sryU4FF4E6MQuBXQe5MZQTNTAqrK3CASzQhbgzB3Qh6vwEvnLKidh%2FJgJFiWNTpHBUK6PN7t1uErzcml0cI0j4G608OhRq7lXDIqr81o%2Fa7x54qj3jnmuq4a3R5mT5gDAwZiDZ3s2CZ0G%2BN7MpGqRrPsYw4ysQS4gzEXJkfmUs4btmm9DJC84rBB4KazVIRzRsnFSsMHBb6oFijbGF%2FRSj9YQQA9URZWqDucSvdpEWvB6hpMPTPBR11MTlhCwV7a1B%2F6B1bxMclpCuhdQ%2FMvx6nJKL397QSJNoZVMLe0%2FcAGOqUBaNVATflfvK1TeF3WLGCP4IN1Y6eEt%2F1xxHTzXjYP9DhCUJ1OH5%2FOlvuwg26jxa5kD4z3C7kK77z1nF2Tbe48LZKEPCIUp872XlSh%2BPv01osIMb3B71Y5%2BXfkeZmq0wfIM9S4IMMUJANlypG8ow3srPvFeHameg2OYct5TQB1On9tOi6jXi7Z8zrrXhHCvQ%2BYg2deoXEIWJgaoqVCtUwYI8VXI47D&X-Amz-Signature=37e22a027f60e50f80fd4895b017b9021685a18ec1b5f78f3ce6a3158e77ebcc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIXS4SI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRMZxtMpkkJsWlsVkN55gJmWIhBlZXdMByRv7Qm6BB7AIga%2Fi69tUrprH7%2BRk%2BObpmoDBYwgmcZC7FvsFtXl9FtjYqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4msP9GJwbo%2B6eKVSrcA3eHZiE9osWcYuNFc37YD1SUx10AJa2%2F5Xm701zi0FFdLBW3aAPoAE3pKiJJR4peYChkpGA4POlkwx7fXpO6IePpOoJIojKpoHkmV%2B2pk7AP4sVxXraLQR%2FgioUp6kpGzh%2FRH0GchjJWIhxZOP%2FLJDGAqje8zn3TvN98mGU%2BpJz%2BzS5MyJZqhoCwRanuXdiMk2owq0aZp0CkS91zM3de%2F22H30Ea1nCWnEyY6oehNpo7o%2Bd%2FohavDDqdnruwWag9IrMiOdF%2FRKA5GgDSrtiTgM7Dc%2F4kfsryoiNHXpNdecOmhE6fSJDunBwswVPloSFjO8zkaoBmI%2BThy%2FHEX6B8szr3sryU4FF4E6MQuBXQe5MZQTNTAqrK3CASzQhbgzB3Qh6vwEvnLKidh%2FJgJFiWNTpHBUK6PN7t1uErzcml0cI0j4G608OhRq7lXDIqr81o%2Fa7x54qj3jnmuq4a3R5mT5gDAwZiDZ3s2CZ0G%2BN7MpGqRrPsYw4ysQS4gzEXJkfmUs4btmm9DJC84rBB4KazVIRzRsnFSsMHBb6oFijbGF%2FRSj9YQQA9URZWqDucSvdpEWvB6hpMPTPBR11MTlhCwV7a1B%2F6B1bxMclpCuhdQ%2FMvx6nJKL397QSJNoZVMLe0%2FcAGOqUBaNVATflfvK1TeF3WLGCP4IN1Y6eEt%2F1xxHTzXjYP9DhCUJ1OH5%2FOlvuwg26jxa5kD4z3C7kK77z1nF2Tbe48LZKEPCIUp872XlSh%2BPv01osIMb3B71Y5%2BXfkeZmq0wfIM9S4IMMUJANlypG8ow3srPvFeHameg2OYct5TQB1On9tOi6jXi7Z8zrrXhHCvQ%2BYg2deoXEIWJgaoqVCtUwYI8VXI47D&X-Amz-Signature=117513c5cb0399e3259f368c398c3ca422102a7de8d0ad5d7d528f104ff8c5ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIXS4SI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRMZxtMpkkJsWlsVkN55gJmWIhBlZXdMByRv7Qm6BB7AIga%2Fi69tUrprH7%2BRk%2BObpmoDBYwgmcZC7FvsFtXl9FtjYqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4msP9GJwbo%2B6eKVSrcA3eHZiE9osWcYuNFc37YD1SUx10AJa2%2F5Xm701zi0FFdLBW3aAPoAE3pKiJJR4peYChkpGA4POlkwx7fXpO6IePpOoJIojKpoHkmV%2B2pk7AP4sVxXraLQR%2FgioUp6kpGzh%2FRH0GchjJWIhxZOP%2FLJDGAqje8zn3TvN98mGU%2BpJz%2BzS5MyJZqhoCwRanuXdiMk2owq0aZp0CkS91zM3de%2F22H30Ea1nCWnEyY6oehNpo7o%2Bd%2FohavDDqdnruwWag9IrMiOdF%2FRKA5GgDSrtiTgM7Dc%2F4kfsryoiNHXpNdecOmhE6fSJDunBwswVPloSFjO8zkaoBmI%2BThy%2FHEX6B8szr3sryU4FF4E6MQuBXQe5MZQTNTAqrK3CASzQhbgzB3Qh6vwEvnLKidh%2FJgJFiWNTpHBUK6PN7t1uErzcml0cI0j4G608OhRq7lXDIqr81o%2Fa7x54qj3jnmuq4a3R5mT5gDAwZiDZ3s2CZ0G%2BN7MpGqRrPsYw4ysQS4gzEXJkfmUs4btmm9DJC84rBB4KazVIRzRsnFSsMHBb6oFijbGF%2FRSj9YQQA9URZWqDucSvdpEWvB6hpMPTPBR11MTlhCwV7a1B%2F6B1bxMclpCuhdQ%2FMvx6nJKL397QSJNoZVMLe0%2FcAGOqUBaNVATflfvK1TeF3WLGCP4IN1Y6eEt%2F1xxHTzXjYP9DhCUJ1OH5%2FOlvuwg26jxa5kD4z3C7kK77z1nF2Tbe48LZKEPCIUp872XlSh%2BPv01osIMb3B71Y5%2BXfkeZmq0wfIM9S4IMMUJANlypG8ow3srPvFeHameg2OYct5TQB1On9tOi6jXi7Z8zrrXhHCvQ%2BYg2deoXEIWJgaoqVCtUwYI8VXI47D&X-Amz-Signature=4ff0eff126402b025b43d89bc034b0ff17ba4f244c5d48d2bcabab9a28743622&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNIXS4SI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T140249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRMZxtMpkkJsWlsVkN55gJmWIhBlZXdMByRv7Qm6BB7AIga%2Fi69tUrprH7%2BRk%2BObpmoDBYwgmcZC7FvsFtXl9FtjYqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM4msP9GJwbo%2B6eKVSrcA3eHZiE9osWcYuNFc37YD1SUx10AJa2%2F5Xm701zi0FFdLBW3aAPoAE3pKiJJR4peYChkpGA4POlkwx7fXpO6IePpOoJIojKpoHkmV%2B2pk7AP4sVxXraLQR%2FgioUp6kpGzh%2FRH0GchjJWIhxZOP%2FLJDGAqje8zn3TvN98mGU%2BpJz%2BzS5MyJZqhoCwRanuXdiMk2owq0aZp0CkS91zM3de%2F22H30Ea1nCWnEyY6oehNpo7o%2Bd%2FohavDDqdnruwWag9IrMiOdF%2FRKA5GgDSrtiTgM7Dc%2F4kfsryoiNHXpNdecOmhE6fSJDunBwswVPloSFjO8zkaoBmI%2BThy%2FHEX6B8szr3sryU4FF4E6MQuBXQe5MZQTNTAqrK3CASzQhbgzB3Qh6vwEvnLKidh%2FJgJFiWNTpHBUK6PN7t1uErzcml0cI0j4G608OhRq7lXDIqr81o%2Fa7x54qj3jnmuq4a3R5mT5gDAwZiDZ3s2CZ0G%2BN7MpGqRrPsYw4ysQS4gzEXJkfmUs4btmm9DJC84rBB4KazVIRzRsnFSsMHBb6oFijbGF%2FRSj9YQQA9URZWqDucSvdpEWvB6hpMPTPBR11MTlhCwV7a1B%2F6B1bxMclpCuhdQ%2FMvx6nJKL397QSJNoZVMLe0%2FcAGOqUBaNVATflfvK1TeF3WLGCP4IN1Y6eEt%2F1xxHTzXjYP9DhCUJ1OH5%2FOlvuwg26jxa5kD4z3C7kK77z1nF2Tbe48LZKEPCIUp872XlSh%2BPv01osIMb3B71Y5%2BXfkeZmq0wfIM9S4IMMUJANlypG8ow3srPvFeHameg2OYct5TQB1On9tOi6jXi7Z8zrrXhHCvQ%2BYg2deoXEIWJgaoqVCtUwYI8VXI47D&X-Amz-Signature=8c0f0bf45db9a18295631069bfeb0c3b2b046c26af6e88d48d6fb8dc434bfab0&X-Amz-SignedHeaders=host&x-id=GetObject)
