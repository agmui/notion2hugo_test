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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQAAHZ6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIEV%2FK4hrEzbS9V%2FkrhHYwGXlLfyEApVPJ6SSwe8Hi9mMAiAaaGSWqEXwTfopWuEAO%2FwttrtteF1UIuwqCtwhi4gVuCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu81v7qfGPAgh8KBCKtwDhHpgLUUds%2BnhRbMcLOoHTOZdlImdPZVgi0yYiSLa1ldEUDQMz4RqojFYFuDsDjbsb4P9WkWNcUpFUnYEeMwI9wChsernQbE5F2CAswlKGkAFsDQgn4MILDU1xbmE4I%2BE%2F%2FX7mD6L3q6fcnnKCOGil5KWi%2FAZrRH%2BAeQP2qExnW7tZ2zkKc36IK0XcgoAijLqRydz%2BSki0G%2FDSLjZyRgVYltmHxy7UUmtxStsb%2BBeinqeqMYADu32CWx3EgFCdaYhutPx9W%2F5zjlYpj4YdaH63lSJSWSWGEUUR0uzFajTyK2QZwMo5SG1BaLvkS4B%2BDLy7dKzGtRQKDBdmyjc0k7O616ya7AgB6pCYLhiB2olFeVEjEOSUZbSwku5ycGxNCmMQVj0TQOULzqZPch2VPcVNrW9eJiNY9aR8s6aH5g2pE7zFtXpBYc81gIjWM21znuDvS%2FNZNfDpLrOAnZtOfoJZJEPUe1rJkfUsVW3BmXfSvXR0t8Ka%2BwKYWATD%2B%2BVM5Ljmr%2Fo%2BXCy7VfyiadWU6E2iyt6lXzihsVutB9H1Ds%2F1w%2FVJn38dQIY%2FBrzMMu3gXpIKVpYUM%2BLrxH%2Fhjpt8bwXcTEvo7WA9z7qdHtAB0oVMkLdJ2F1Hj%2B180CdEb4wu5zFvgY6pgEdkLZnsZn3rz4unC3tqQ8bYrzE0FC1goZya0Sfdk1LCrwYaZIm6RnksrE9qZ0yNN2V8BO6JG%2F2DvtvO2hLqmcR9WKbKfkg7ZZZBPTE1KRPfZo22fg3ojDF34%2FwhC5OGVRFggbfmkdKal2i32p3f1y9ydJaHY6862%2F6%2B7y%2FqYEoKzz43o%2FDmJkXG8iJsuDsO5%2F2ZuZusWmVjNdx%2FpPVe39U2Nd2ax2v&X-Amz-Signature=3d133aa6bfc3157b5547c07e0979ceb3512a94756bf42d21cd1fafd612f8068b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQAAHZ6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIEV%2FK4hrEzbS9V%2FkrhHYwGXlLfyEApVPJ6SSwe8Hi9mMAiAaaGSWqEXwTfopWuEAO%2FwttrtteF1UIuwqCtwhi4gVuCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu81v7qfGPAgh8KBCKtwDhHpgLUUds%2BnhRbMcLOoHTOZdlImdPZVgi0yYiSLa1ldEUDQMz4RqojFYFuDsDjbsb4P9WkWNcUpFUnYEeMwI9wChsernQbE5F2CAswlKGkAFsDQgn4MILDU1xbmE4I%2BE%2F%2FX7mD6L3q6fcnnKCOGil5KWi%2FAZrRH%2BAeQP2qExnW7tZ2zkKc36IK0XcgoAijLqRydz%2BSki0G%2FDSLjZyRgVYltmHxy7UUmtxStsb%2BBeinqeqMYADu32CWx3EgFCdaYhutPx9W%2F5zjlYpj4YdaH63lSJSWSWGEUUR0uzFajTyK2QZwMo5SG1BaLvkS4B%2BDLy7dKzGtRQKDBdmyjc0k7O616ya7AgB6pCYLhiB2olFeVEjEOSUZbSwku5ycGxNCmMQVj0TQOULzqZPch2VPcVNrW9eJiNY9aR8s6aH5g2pE7zFtXpBYc81gIjWM21znuDvS%2FNZNfDpLrOAnZtOfoJZJEPUe1rJkfUsVW3BmXfSvXR0t8Ka%2BwKYWATD%2B%2BVM5Ljmr%2Fo%2BXCy7VfyiadWU6E2iyt6lXzihsVutB9H1Ds%2F1w%2FVJn38dQIY%2FBrzMMu3gXpIKVpYUM%2BLrxH%2Fhjpt8bwXcTEvo7WA9z7qdHtAB0oVMkLdJ2F1Hj%2B180CdEb4wu5zFvgY6pgEdkLZnsZn3rz4unC3tqQ8bYrzE0FC1goZya0Sfdk1LCrwYaZIm6RnksrE9qZ0yNN2V8BO6JG%2F2DvtvO2hLqmcR9WKbKfkg7ZZZBPTE1KRPfZo22fg3ojDF34%2FwhC5OGVRFggbfmkdKal2i32p3f1y9ydJaHY6862%2F6%2B7y%2FqYEoKzz43o%2FDmJkXG8iJsuDsO5%2F2ZuZusWmVjNdx%2FpPVe39U2Nd2ax2v&X-Amz-Signature=50cc5a38defef35385c085680921c75c9fd2e2c87dd5288e9fdd747051796e86&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQAAHZ6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIEV%2FK4hrEzbS9V%2FkrhHYwGXlLfyEApVPJ6SSwe8Hi9mMAiAaaGSWqEXwTfopWuEAO%2FwttrtteF1UIuwqCtwhi4gVuCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu81v7qfGPAgh8KBCKtwDhHpgLUUds%2BnhRbMcLOoHTOZdlImdPZVgi0yYiSLa1ldEUDQMz4RqojFYFuDsDjbsb4P9WkWNcUpFUnYEeMwI9wChsernQbE5F2CAswlKGkAFsDQgn4MILDU1xbmE4I%2BE%2F%2FX7mD6L3q6fcnnKCOGil5KWi%2FAZrRH%2BAeQP2qExnW7tZ2zkKc36IK0XcgoAijLqRydz%2BSki0G%2FDSLjZyRgVYltmHxy7UUmtxStsb%2BBeinqeqMYADu32CWx3EgFCdaYhutPx9W%2F5zjlYpj4YdaH63lSJSWSWGEUUR0uzFajTyK2QZwMo5SG1BaLvkS4B%2BDLy7dKzGtRQKDBdmyjc0k7O616ya7AgB6pCYLhiB2olFeVEjEOSUZbSwku5ycGxNCmMQVj0TQOULzqZPch2VPcVNrW9eJiNY9aR8s6aH5g2pE7zFtXpBYc81gIjWM21znuDvS%2FNZNfDpLrOAnZtOfoJZJEPUe1rJkfUsVW3BmXfSvXR0t8Ka%2BwKYWATD%2B%2BVM5Ljmr%2Fo%2BXCy7VfyiadWU6E2iyt6lXzihsVutB9H1Ds%2F1w%2FVJn38dQIY%2FBrzMMu3gXpIKVpYUM%2BLrxH%2Fhjpt8bwXcTEvo7WA9z7qdHtAB0oVMkLdJ2F1Hj%2B180CdEb4wu5zFvgY6pgEdkLZnsZn3rz4unC3tqQ8bYrzE0FC1goZya0Sfdk1LCrwYaZIm6RnksrE9qZ0yNN2V8BO6JG%2F2DvtvO2hLqmcR9WKbKfkg7ZZZBPTE1KRPfZo22fg3ojDF34%2FwhC5OGVRFggbfmkdKal2i32p3f1y9ydJaHY6862%2F6%2B7y%2FqYEoKzz43o%2FDmJkXG8iJsuDsO5%2F2ZuZusWmVjNdx%2FpPVe39U2Nd2ax2v&X-Amz-Signature=14fce6bf3c815f054fc47ef6b3aa1dd539646921f41ae4b72b62fb683327874d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQAAHZ6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIEV%2FK4hrEzbS9V%2FkrhHYwGXlLfyEApVPJ6SSwe8Hi9mMAiAaaGSWqEXwTfopWuEAO%2FwttrtteF1UIuwqCtwhi4gVuCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu81v7qfGPAgh8KBCKtwDhHpgLUUds%2BnhRbMcLOoHTOZdlImdPZVgi0yYiSLa1ldEUDQMz4RqojFYFuDsDjbsb4P9WkWNcUpFUnYEeMwI9wChsernQbE5F2CAswlKGkAFsDQgn4MILDU1xbmE4I%2BE%2F%2FX7mD6L3q6fcnnKCOGil5KWi%2FAZrRH%2BAeQP2qExnW7tZ2zkKc36IK0XcgoAijLqRydz%2BSki0G%2FDSLjZyRgVYltmHxy7UUmtxStsb%2BBeinqeqMYADu32CWx3EgFCdaYhutPx9W%2F5zjlYpj4YdaH63lSJSWSWGEUUR0uzFajTyK2QZwMo5SG1BaLvkS4B%2BDLy7dKzGtRQKDBdmyjc0k7O616ya7AgB6pCYLhiB2olFeVEjEOSUZbSwku5ycGxNCmMQVj0TQOULzqZPch2VPcVNrW9eJiNY9aR8s6aH5g2pE7zFtXpBYc81gIjWM21znuDvS%2FNZNfDpLrOAnZtOfoJZJEPUe1rJkfUsVW3BmXfSvXR0t8Ka%2BwKYWATD%2B%2BVM5Ljmr%2Fo%2BXCy7VfyiadWU6E2iyt6lXzihsVutB9H1Ds%2F1w%2FVJn38dQIY%2FBrzMMu3gXpIKVpYUM%2BLrxH%2Fhjpt8bwXcTEvo7WA9z7qdHtAB0oVMkLdJ2F1Hj%2B180CdEb4wu5zFvgY6pgEdkLZnsZn3rz4unC3tqQ8bYrzE0FC1goZya0Sfdk1LCrwYaZIm6RnksrE9qZ0yNN2V8BO6JG%2F2DvtvO2hLqmcR9WKbKfkg7ZZZBPTE1KRPfZo22fg3ojDF34%2FwhC5OGVRFggbfmkdKal2i32p3f1y9ydJaHY6862%2F6%2B7y%2FqYEoKzz43o%2FDmJkXG8iJsuDsO5%2F2ZuZusWmVjNdx%2FpPVe39U2Nd2ax2v&X-Amz-Signature=0cf8b559ec253e31aaa1c72935db64a58f12d9fdbd2465286f49d07aabc43900&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQAAHZ6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIEV%2FK4hrEzbS9V%2FkrhHYwGXlLfyEApVPJ6SSwe8Hi9mMAiAaaGSWqEXwTfopWuEAO%2FwttrtteF1UIuwqCtwhi4gVuCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu81v7qfGPAgh8KBCKtwDhHpgLUUds%2BnhRbMcLOoHTOZdlImdPZVgi0yYiSLa1ldEUDQMz4RqojFYFuDsDjbsb4P9WkWNcUpFUnYEeMwI9wChsernQbE5F2CAswlKGkAFsDQgn4MILDU1xbmE4I%2BE%2F%2FX7mD6L3q6fcnnKCOGil5KWi%2FAZrRH%2BAeQP2qExnW7tZ2zkKc36IK0XcgoAijLqRydz%2BSki0G%2FDSLjZyRgVYltmHxy7UUmtxStsb%2BBeinqeqMYADu32CWx3EgFCdaYhutPx9W%2F5zjlYpj4YdaH63lSJSWSWGEUUR0uzFajTyK2QZwMo5SG1BaLvkS4B%2BDLy7dKzGtRQKDBdmyjc0k7O616ya7AgB6pCYLhiB2olFeVEjEOSUZbSwku5ycGxNCmMQVj0TQOULzqZPch2VPcVNrW9eJiNY9aR8s6aH5g2pE7zFtXpBYc81gIjWM21znuDvS%2FNZNfDpLrOAnZtOfoJZJEPUe1rJkfUsVW3BmXfSvXR0t8Ka%2BwKYWATD%2B%2BVM5Ljmr%2Fo%2BXCy7VfyiadWU6E2iyt6lXzihsVutB9H1Ds%2F1w%2FVJn38dQIY%2FBrzMMu3gXpIKVpYUM%2BLrxH%2Fhjpt8bwXcTEvo7WA9z7qdHtAB0oVMkLdJ2F1Hj%2B180CdEb4wu5zFvgY6pgEdkLZnsZn3rz4unC3tqQ8bYrzE0FC1goZya0Sfdk1LCrwYaZIm6RnksrE9qZ0yNN2V8BO6JG%2F2DvtvO2hLqmcR9WKbKfkg7ZZZBPTE1KRPfZo22fg3ojDF34%2FwhC5OGVRFggbfmkdKal2i32p3f1y9ydJaHY6862%2F6%2B7y%2FqYEoKzz43o%2FDmJkXG8iJsuDsO5%2F2ZuZusWmVjNdx%2FpPVe39U2Nd2ax2v&X-Amz-Signature=8a7bfded7f687345af956f99bf60b1fb15d7f8396b52e461777f60d18adefd62&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQAAHZ6%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIEV%2FK4hrEzbS9V%2FkrhHYwGXlLfyEApVPJ6SSwe8Hi9mMAiAaaGSWqEXwTfopWuEAO%2FwttrtteF1UIuwqCtwhi4gVuCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu81v7qfGPAgh8KBCKtwDhHpgLUUds%2BnhRbMcLOoHTOZdlImdPZVgi0yYiSLa1ldEUDQMz4RqojFYFuDsDjbsb4P9WkWNcUpFUnYEeMwI9wChsernQbE5F2CAswlKGkAFsDQgn4MILDU1xbmE4I%2BE%2F%2FX7mD6L3q6fcnnKCOGil5KWi%2FAZrRH%2BAeQP2qExnW7tZ2zkKc36IK0XcgoAijLqRydz%2BSki0G%2FDSLjZyRgVYltmHxy7UUmtxStsb%2BBeinqeqMYADu32CWx3EgFCdaYhutPx9W%2F5zjlYpj4YdaH63lSJSWSWGEUUR0uzFajTyK2QZwMo5SG1BaLvkS4B%2BDLy7dKzGtRQKDBdmyjc0k7O616ya7AgB6pCYLhiB2olFeVEjEOSUZbSwku5ycGxNCmMQVj0TQOULzqZPch2VPcVNrW9eJiNY9aR8s6aH5g2pE7zFtXpBYc81gIjWM21znuDvS%2FNZNfDpLrOAnZtOfoJZJEPUe1rJkfUsVW3BmXfSvXR0t8Ka%2BwKYWATD%2B%2BVM5Ljmr%2Fo%2BXCy7VfyiadWU6E2iyt6lXzihsVutB9H1Ds%2F1w%2FVJn38dQIY%2FBrzMMu3gXpIKVpYUM%2BLrxH%2Fhjpt8bwXcTEvo7WA9z7qdHtAB0oVMkLdJ2F1Hj%2B180CdEb4wu5zFvgY6pgEdkLZnsZn3rz4unC3tqQ8bYrzE0FC1goZya0Sfdk1LCrwYaZIm6RnksrE9qZ0yNN2V8BO6JG%2F2DvtvO2hLqmcR9WKbKfkg7ZZZBPTE1KRPfZo22fg3ojDF34%2FwhC5OGVRFggbfmkdKal2i32p3f1y9ydJaHY6862%2F6%2B7y%2FqYEoKzz43o%2FDmJkXG8iJsuDsO5%2F2ZuZusWmVjNdx%2FpPVe39U2Nd2ax2v&X-Amz-Signature=cd9ee601385d34049acfe76b6586b433092861128513235cc42a9e237865f552&X-Amz-SignedHeaders=host&x-id=GetObject)
