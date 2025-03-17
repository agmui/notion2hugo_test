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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6DI26M%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrx%2BGxfNTbtn%2BiUGx0LGi8ffK5BbLuj%2Fn3rvpzVGC7dgIhAPwypqYg78qYlqeh8TMDUrnvnA0fatVsXqX2GVmeYHIkKv8DCDoQABoMNjM3NDIzMTgzODA1IgzXIKr0az23vQhPfuQq3AME4fK6RzzT3rK0kAZm5Yvkat%2BwVeEso8vkQoapceyOOc43xMwHR8tZyHrS55F9w%2FYFOT%2BgBlT3V35rvr0gm2d4l1YTZBcC2FISaWKJLFbgRSoCyDYNL2RjzKcI7SxtmekoJuQJKISjI0P5JWIvMff9Z2Vg0Eueksak0mE%2BziXXvMPh9mBh5xcrGuO8eks2h17KUvCGUMz3RaN5UV%2B5829jRSsCq5yCzCOJ9%2BhZs%2BeDJufQrTeQksI0o4rNShfV%2F5HEQhSRADUdbqLLsFMb%2BcosYpva6OZXoMZWn7hmkWKrlbfg3p2npnTdFvX%2B2rCnb1468kIvv%2BJw%2BmIaC%2F2ZACqQCYYiQ7QK%2F8FzGFl22EBygL8uMBiq4UO7A3hora4Id%2BeVr1v%2BQMy2sDo7Kraf5ICN3R85zElfYqD9uuAxYRPuClKyu82tLZDPoHY6TiU%2BJKwL6v2qmv5r0O%2B84u6nShLpwSgMVgYFz1gMG8Itgf28esnE1OgkUzxf%2FtfSj%2Bo6Fku0IGFNLhOhuEk%2FXfpr1R%2FIjSpdgh19vc8zLNqpiwgrUpYeteZDpWcz7%2BppNLcGUz3InaT1awBQZoycuBgkvBZImvwHzyZP8Sfdh1CZJjd3D4ma3Ow8WO%2FFQKoiyTD28N2%2BBjqkAa17n06M4yFQytXzgnPebsdHILFND6e9m0BwEBukfI39xrdIxP8td2eQQak5iBp62DRfq%2FNx5ulk9h%2Ft9M%2BjnpjlUr1YhcoZ518oUVj%2BxHQ%2BGDPv0fyJSBVl83VtL%2FVsLqahhsF%2BJj%2BbDbAx%2BkJQFPsKaFbnWKLyIx5HRA41uEStY8hdCyhaEvN8tM7IdBAkK%2BtjIq5emBqre6AlwmAI3nv4LOIR&X-Amz-Signature=df77bf75d9b8852db66cabd8f5ef3dc9f34514ce9b05d3b5082a55a887a35e82&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6DI26M%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrx%2BGxfNTbtn%2BiUGx0LGi8ffK5BbLuj%2Fn3rvpzVGC7dgIhAPwypqYg78qYlqeh8TMDUrnvnA0fatVsXqX2GVmeYHIkKv8DCDoQABoMNjM3NDIzMTgzODA1IgzXIKr0az23vQhPfuQq3AME4fK6RzzT3rK0kAZm5Yvkat%2BwVeEso8vkQoapceyOOc43xMwHR8tZyHrS55F9w%2FYFOT%2BgBlT3V35rvr0gm2d4l1YTZBcC2FISaWKJLFbgRSoCyDYNL2RjzKcI7SxtmekoJuQJKISjI0P5JWIvMff9Z2Vg0Eueksak0mE%2BziXXvMPh9mBh5xcrGuO8eks2h17KUvCGUMz3RaN5UV%2B5829jRSsCq5yCzCOJ9%2BhZs%2BeDJufQrTeQksI0o4rNShfV%2F5HEQhSRADUdbqLLsFMb%2BcosYpva6OZXoMZWn7hmkWKrlbfg3p2npnTdFvX%2B2rCnb1468kIvv%2BJw%2BmIaC%2F2ZACqQCYYiQ7QK%2F8FzGFl22EBygL8uMBiq4UO7A3hora4Id%2BeVr1v%2BQMy2sDo7Kraf5ICN3R85zElfYqD9uuAxYRPuClKyu82tLZDPoHY6TiU%2BJKwL6v2qmv5r0O%2B84u6nShLpwSgMVgYFz1gMG8Itgf28esnE1OgkUzxf%2FtfSj%2Bo6Fku0IGFNLhOhuEk%2FXfpr1R%2FIjSpdgh19vc8zLNqpiwgrUpYeteZDpWcz7%2BppNLcGUz3InaT1awBQZoycuBgkvBZImvwHzyZP8Sfdh1CZJjd3D4ma3Ow8WO%2FFQKoiyTD28N2%2BBjqkAa17n06M4yFQytXzgnPebsdHILFND6e9m0BwEBukfI39xrdIxP8td2eQQak5iBp62DRfq%2FNx5ulk9h%2Ft9M%2BjnpjlUr1YhcoZ518oUVj%2BxHQ%2BGDPv0fyJSBVl83VtL%2FVsLqahhsF%2BJj%2BbDbAx%2BkJQFPsKaFbnWKLyIx5HRA41uEStY8hdCyhaEvN8tM7IdBAkK%2BtjIq5emBqre6AlwmAI3nv4LOIR&X-Amz-Signature=c1b371353563b4fa39c455fed2e77df52f1060602815805fe50ac9c0e455fcab&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6DI26M%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrx%2BGxfNTbtn%2BiUGx0LGi8ffK5BbLuj%2Fn3rvpzVGC7dgIhAPwypqYg78qYlqeh8TMDUrnvnA0fatVsXqX2GVmeYHIkKv8DCDoQABoMNjM3NDIzMTgzODA1IgzXIKr0az23vQhPfuQq3AME4fK6RzzT3rK0kAZm5Yvkat%2BwVeEso8vkQoapceyOOc43xMwHR8tZyHrS55F9w%2FYFOT%2BgBlT3V35rvr0gm2d4l1YTZBcC2FISaWKJLFbgRSoCyDYNL2RjzKcI7SxtmekoJuQJKISjI0P5JWIvMff9Z2Vg0Eueksak0mE%2BziXXvMPh9mBh5xcrGuO8eks2h17KUvCGUMz3RaN5UV%2B5829jRSsCq5yCzCOJ9%2BhZs%2BeDJufQrTeQksI0o4rNShfV%2F5HEQhSRADUdbqLLsFMb%2BcosYpva6OZXoMZWn7hmkWKrlbfg3p2npnTdFvX%2B2rCnb1468kIvv%2BJw%2BmIaC%2F2ZACqQCYYiQ7QK%2F8FzGFl22EBygL8uMBiq4UO7A3hora4Id%2BeVr1v%2BQMy2sDo7Kraf5ICN3R85zElfYqD9uuAxYRPuClKyu82tLZDPoHY6TiU%2BJKwL6v2qmv5r0O%2B84u6nShLpwSgMVgYFz1gMG8Itgf28esnE1OgkUzxf%2FtfSj%2Bo6Fku0IGFNLhOhuEk%2FXfpr1R%2FIjSpdgh19vc8zLNqpiwgrUpYeteZDpWcz7%2BppNLcGUz3InaT1awBQZoycuBgkvBZImvwHzyZP8Sfdh1CZJjd3D4ma3Ow8WO%2FFQKoiyTD28N2%2BBjqkAa17n06M4yFQytXzgnPebsdHILFND6e9m0BwEBukfI39xrdIxP8td2eQQak5iBp62DRfq%2FNx5ulk9h%2Ft9M%2BjnpjlUr1YhcoZ518oUVj%2BxHQ%2BGDPv0fyJSBVl83VtL%2FVsLqahhsF%2BJj%2BbDbAx%2BkJQFPsKaFbnWKLyIx5HRA41uEStY8hdCyhaEvN8tM7IdBAkK%2BtjIq5emBqre6AlwmAI3nv4LOIR&X-Amz-Signature=b19ae1aed40ee3cdac81e563eb9ad7a6ce96e506ba14e2e99d534550131c6b84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6DI26M%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrx%2BGxfNTbtn%2BiUGx0LGi8ffK5BbLuj%2Fn3rvpzVGC7dgIhAPwypqYg78qYlqeh8TMDUrnvnA0fatVsXqX2GVmeYHIkKv8DCDoQABoMNjM3NDIzMTgzODA1IgzXIKr0az23vQhPfuQq3AME4fK6RzzT3rK0kAZm5Yvkat%2BwVeEso8vkQoapceyOOc43xMwHR8tZyHrS55F9w%2FYFOT%2BgBlT3V35rvr0gm2d4l1YTZBcC2FISaWKJLFbgRSoCyDYNL2RjzKcI7SxtmekoJuQJKISjI0P5JWIvMff9Z2Vg0Eueksak0mE%2BziXXvMPh9mBh5xcrGuO8eks2h17KUvCGUMz3RaN5UV%2B5829jRSsCq5yCzCOJ9%2BhZs%2BeDJufQrTeQksI0o4rNShfV%2F5HEQhSRADUdbqLLsFMb%2BcosYpva6OZXoMZWn7hmkWKrlbfg3p2npnTdFvX%2B2rCnb1468kIvv%2BJw%2BmIaC%2F2ZACqQCYYiQ7QK%2F8FzGFl22EBygL8uMBiq4UO7A3hora4Id%2BeVr1v%2BQMy2sDo7Kraf5ICN3R85zElfYqD9uuAxYRPuClKyu82tLZDPoHY6TiU%2BJKwL6v2qmv5r0O%2B84u6nShLpwSgMVgYFz1gMG8Itgf28esnE1OgkUzxf%2FtfSj%2Bo6Fku0IGFNLhOhuEk%2FXfpr1R%2FIjSpdgh19vc8zLNqpiwgrUpYeteZDpWcz7%2BppNLcGUz3InaT1awBQZoycuBgkvBZImvwHzyZP8Sfdh1CZJjd3D4ma3Ow8WO%2FFQKoiyTD28N2%2BBjqkAa17n06M4yFQytXzgnPebsdHILFND6e9m0BwEBukfI39xrdIxP8td2eQQak5iBp62DRfq%2FNx5ulk9h%2Ft9M%2BjnpjlUr1YhcoZ518oUVj%2BxHQ%2BGDPv0fyJSBVl83VtL%2FVsLqahhsF%2BJj%2BbDbAx%2BkJQFPsKaFbnWKLyIx5HRA41uEStY8hdCyhaEvN8tM7IdBAkK%2BtjIq5emBqre6AlwmAI3nv4LOIR&X-Amz-Signature=727e659ad9852059b1f5c682e38d9529d34ac8e2578815c7b6d72f0f128ae910&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6DI26M%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrx%2BGxfNTbtn%2BiUGx0LGi8ffK5BbLuj%2Fn3rvpzVGC7dgIhAPwypqYg78qYlqeh8TMDUrnvnA0fatVsXqX2GVmeYHIkKv8DCDoQABoMNjM3NDIzMTgzODA1IgzXIKr0az23vQhPfuQq3AME4fK6RzzT3rK0kAZm5Yvkat%2BwVeEso8vkQoapceyOOc43xMwHR8tZyHrS55F9w%2FYFOT%2BgBlT3V35rvr0gm2d4l1YTZBcC2FISaWKJLFbgRSoCyDYNL2RjzKcI7SxtmekoJuQJKISjI0P5JWIvMff9Z2Vg0Eueksak0mE%2BziXXvMPh9mBh5xcrGuO8eks2h17KUvCGUMz3RaN5UV%2B5829jRSsCq5yCzCOJ9%2BhZs%2BeDJufQrTeQksI0o4rNShfV%2F5HEQhSRADUdbqLLsFMb%2BcosYpva6OZXoMZWn7hmkWKrlbfg3p2npnTdFvX%2B2rCnb1468kIvv%2BJw%2BmIaC%2F2ZACqQCYYiQ7QK%2F8FzGFl22EBygL8uMBiq4UO7A3hora4Id%2BeVr1v%2BQMy2sDo7Kraf5ICN3R85zElfYqD9uuAxYRPuClKyu82tLZDPoHY6TiU%2BJKwL6v2qmv5r0O%2B84u6nShLpwSgMVgYFz1gMG8Itgf28esnE1OgkUzxf%2FtfSj%2Bo6Fku0IGFNLhOhuEk%2FXfpr1R%2FIjSpdgh19vc8zLNqpiwgrUpYeteZDpWcz7%2BppNLcGUz3InaT1awBQZoycuBgkvBZImvwHzyZP8Sfdh1CZJjd3D4ma3Ow8WO%2FFQKoiyTD28N2%2BBjqkAa17n06M4yFQytXzgnPebsdHILFND6e9m0BwEBukfI39xrdIxP8td2eQQak5iBp62DRfq%2FNx5ulk9h%2Ft9M%2BjnpjlUr1YhcoZ518oUVj%2BxHQ%2BGDPv0fyJSBVl83VtL%2FVsLqahhsF%2BJj%2BbDbAx%2BkJQFPsKaFbnWKLyIx5HRA41uEStY8hdCyhaEvN8tM7IdBAkK%2BtjIq5emBqre6AlwmAI3nv4LOIR&X-Amz-Signature=ab872d325421e05c27d9c729e15738597b9f30fac9ea63b08295c0da8fa893fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ6DI26M%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrx%2BGxfNTbtn%2BiUGx0LGi8ffK5BbLuj%2Fn3rvpzVGC7dgIhAPwypqYg78qYlqeh8TMDUrnvnA0fatVsXqX2GVmeYHIkKv8DCDoQABoMNjM3NDIzMTgzODA1IgzXIKr0az23vQhPfuQq3AME4fK6RzzT3rK0kAZm5Yvkat%2BwVeEso8vkQoapceyOOc43xMwHR8tZyHrS55F9w%2FYFOT%2BgBlT3V35rvr0gm2d4l1YTZBcC2FISaWKJLFbgRSoCyDYNL2RjzKcI7SxtmekoJuQJKISjI0P5JWIvMff9Z2Vg0Eueksak0mE%2BziXXvMPh9mBh5xcrGuO8eks2h17KUvCGUMz3RaN5UV%2B5829jRSsCq5yCzCOJ9%2BhZs%2BeDJufQrTeQksI0o4rNShfV%2F5HEQhSRADUdbqLLsFMb%2BcosYpva6OZXoMZWn7hmkWKrlbfg3p2npnTdFvX%2B2rCnb1468kIvv%2BJw%2BmIaC%2F2ZACqQCYYiQ7QK%2F8FzGFl22EBygL8uMBiq4UO7A3hora4Id%2BeVr1v%2BQMy2sDo7Kraf5ICN3R85zElfYqD9uuAxYRPuClKyu82tLZDPoHY6TiU%2BJKwL6v2qmv5r0O%2B84u6nShLpwSgMVgYFz1gMG8Itgf28esnE1OgkUzxf%2FtfSj%2Bo6Fku0IGFNLhOhuEk%2FXfpr1R%2FIjSpdgh19vc8zLNqpiwgrUpYeteZDpWcz7%2BppNLcGUz3InaT1awBQZoycuBgkvBZImvwHzyZP8Sfdh1CZJjd3D4ma3Ow8WO%2FFQKoiyTD28N2%2BBjqkAa17n06M4yFQytXzgnPebsdHILFND6e9m0BwEBukfI39xrdIxP8td2eQQak5iBp62DRfq%2FNx5ulk9h%2Ft9M%2BjnpjlUr1YhcoZ518oUVj%2BxHQ%2BGDPv0fyJSBVl83VtL%2FVsLqahhsF%2BJj%2BbDbAx%2BkJQFPsKaFbnWKLyIx5HRA41uEStY8hdCyhaEvN8tM7IdBAkK%2BtjIq5emBqre6AlwmAI3nv4LOIR&X-Amz-Signature=000e6b39725c6edc298f34b41d8a12a79710b4baec56a6b137ab729e07e35739&X-Amz-SignedHeaders=host&x-id=GetObject)
