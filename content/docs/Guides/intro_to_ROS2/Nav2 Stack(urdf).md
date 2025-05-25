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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSSRNN7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFMNqGVif3CeDteuoMhNIHKvsoBX9RSgid05iPmpS84CAiAtL2Qm464uuatnWVSxdISUBzNcw%2BO3SNMh%2BbwnD1B10Cr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMFY8NfRbUbUM2PTx0KtwDoYyJ6hYfC8nT3kwf12rS6I7qWktFoKjynb2uC2bf%2FwYd5gw1D8djUNM1tBUxSGPZ%2FdKS28%2BaQwLivvP1dKFrGrE2sLwqAoZaCPIMSB8w3fP9chD49l8mqs3gJ7JuyBGod4JQnIuHI6jJ3n4zvv2Mdhy9FVofUPmFDw5O3og%2Fk3WyVqBzy7CBnTDfCoO%2FFKirhBMJ6g5HvinJcDN07K8Z3RKju4EpQOqfd0e4djNFgFApzoDatvslJyCBQtDfXs%2FryiAKCqZGCct7Bd0FzwInD0XrQ%2FvTgsR9twxAD8OUHzT8fN3pfk6EM5EhJe9r7%2Bnj70UAAdHowj2XQTvYnWulPEE0mswKFOTkXkapS7GlfZrr%2BeczWhdKenrBtC1%2B3Rgbplctbj1n9Bb%2FDHi%2F8ELNnOf4WBbE2lEtDAUMaNdZ27drS7bZ9xh4S50SoDlug5xgRhJPP0sr9WwX6eHME0E3jQVRc5BH33qIXtjDGn3KTGBSp%2BfYBEep13f0c8jC3FnIT09aigD0zOB9qOMypIxYV7mdWEmbwuqoDAeeovkIn953crcS2ofhTwJWbJO%2Fs4cJ3ZHm0ChE3FpNCw7cvmNkSefTnNKi8UJotXfjDCtZz8QS52vjx8d3ePDtg04wqvbNwQY6pgHVskVNtAxhYA3gNclwMK%2FlxftpVsERbPtySX25oC65dyWOF2DQJdQICWI5dYGObfVp5Ad42l7D3etWxCCexM0gAob022bBinAFhNzCHFDYMciqAF92w9lUgKB3dYGwia7fGwo05NBph0vq1mxFqM%2BemfSttZM0myXoaIeY4QXABf4EdbbVROJmWqlSPmaLboxFnGG%2F321JI0JcWTCXMscctslKnsi8&X-Amz-Signature=86a3d15d60a2097e731fade97d73d36eee04f1ffeb80fd62e65a9ae42ded0def&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSSRNN7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFMNqGVif3CeDteuoMhNIHKvsoBX9RSgid05iPmpS84CAiAtL2Qm464uuatnWVSxdISUBzNcw%2BO3SNMh%2BbwnD1B10Cr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMFY8NfRbUbUM2PTx0KtwDoYyJ6hYfC8nT3kwf12rS6I7qWktFoKjynb2uC2bf%2FwYd5gw1D8djUNM1tBUxSGPZ%2FdKS28%2BaQwLivvP1dKFrGrE2sLwqAoZaCPIMSB8w3fP9chD49l8mqs3gJ7JuyBGod4JQnIuHI6jJ3n4zvv2Mdhy9FVofUPmFDw5O3og%2Fk3WyVqBzy7CBnTDfCoO%2FFKirhBMJ6g5HvinJcDN07K8Z3RKju4EpQOqfd0e4djNFgFApzoDatvslJyCBQtDfXs%2FryiAKCqZGCct7Bd0FzwInD0XrQ%2FvTgsR9twxAD8OUHzT8fN3pfk6EM5EhJe9r7%2Bnj70UAAdHowj2XQTvYnWulPEE0mswKFOTkXkapS7GlfZrr%2BeczWhdKenrBtC1%2B3Rgbplctbj1n9Bb%2FDHi%2F8ELNnOf4WBbE2lEtDAUMaNdZ27drS7bZ9xh4S50SoDlug5xgRhJPP0sr9WwX6eHME0E3jQVRc5BH33qIXtjDGn3KTGBSp%2BfYBEep13f0c8jC3FnIT09aigD0zOB9qOMypIxYV7mdWEmbwuqoDAeeovkIn953crcS2ofhTwJWbJO%2Fs4cJ3ZHm0ChE3FpNCw7cvmNkSefTnNKi8UJotXfjDCtZz8QS52vjx8d3ePDtg04wqvbNwQY6pgHVskVNtAxhYA3gNclwMK%2FlxftpVsERbPtySX25oC65dyWOF2DQJdQICWI5dYGObfVp5Ad42l7D3etWxCCexM0gAob022bBinAFhNzCHFDYMciqAF92w9lUgKB3dYGwia7fGwo05NBph0vq1mxFqM%2BemfSttZM0myXoaIeY4QXABf4EdbbVROJmWqlSPmaLboxFnGG%2F321JI0JcWTCXMscctslKnsi8&X-Amz-Signature=b9bb4263d6411631888349bb5b3b73b989de3f17765a57177e58970ee48d82b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSSRNN7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFMNqGVif3CeDteuoMhNIHKvsoBX9RSgid05iPmpS84CAiAtL2Qm464uuatnWVSxdISUBzNcw%2BO3SNMh%2BbwnD1B10Cr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMFY8NfRbUbUM2PTx0KtwDoYyJ6hYfC8nT3kwf12rS6I7qWktFoKjynb2uC2bf%2FwYd5gw1D8djUNM1tBUxSGPZ%2FdKS28%2BaQwLivvP1dKFrGrE2sLwqAoZaCPIMSB8w3fP9chD49l8mqs3gJ7JuyBGod4JQnIuHI6jJ3n4zvv2Mdhy9FVofUPmFDw5O3og%2Fk3WyVqBzy7CBnTDfCoO%2FFKirhBMJ6g5HvinJcDN07K8Z3RKju4EpQOqfd0e4djNFgFApzoDatvslJyCBQtDfXs%2FryiAKCqZGCct7Bd0FzwInD0XrQ%2FvTgsR9twxAD8OUHzT8fN3pfk6EM5EhJe9r7%2Bnj70UAAdHowj2XQTvYnWulPEE0mswKFOTkXkapS7GlfZrr%2BeczWhdKenrBtC1%2B3Rgbplctbj1n9Bb%2FDHi%2F8ELNnOf4WBbE2lEtDAUMaNdZ27drS7bZ9xh4S50SoDlug5xgRhJPP0sr9WwX6eHME0E3jQVRc5BH33qIXtjDGn3KTGBSp%2BfYBEep13f0c8jC3FnIT09aigD0zOB9qOMypIxYV7mdWEmbwuqoDAeeovkIn953crcS2ofhTwJWbJO%2Fs4cJ3ZHm0ChE3FpNCw7cvmNkSefTnNKi8UJotXfjDCtZz8QS52vjx8d3ePDtg04wqvbNwQY6pgHVskVNtAxhYA3gNclwMK%2FlxftpVsERbPtySX25oC65dyWOF2DQJdQICWI5dYGObfVp5Ad42l7D3etWxCCexM0gAob022bBinAFhNzCHFDYMciqAF92w9lUgKB3dYGwia7fGwo05NBph0vq1mxFqM%2BemfSttZM0myXoaIeY4QXABf4EdbbVROJmWqlSPmaLboxFnGG%2F321JI0JcWTCXMscctslKnsi8&X-Amz-Signature=78adf96ecbf459a5f387db1688cb319a47aa2ecee8016803ab2326b72169d2c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSSRNN7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFMNqGVif3CeDteuoMhNIHKvsoBX9RSgid05iPmpS84CAiAtL2Qm464uuatnWVSxdISUBzNcw%2BO3SNMh%2BbwnD1B10Cr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMFY8NfRbUbUM2PTx0KtwDoYyJ6hYfC8nT3kwf12rS6I7qWktFoKjynb2uC2bf%2FwYd5gw1D8djUNM1tBUxSGPZ%2FdKS28%2BaQwLivvP1dKFrGrE2sLwqAoZaCPIMSB8w3fP9chD49l8mqs3gJ7JuyBGod4JQnIuHI6jJ3n4zvv2Mdhy9FVofUPmFDw5O3og%2Fk3WyVqBzy7CBnTDfCoO%2FFKirhBMJ6g5HvinJcDN07K8Z3RKju4EpQOqfd0e4djNFgFApzoDatvslJyCBQtDfXs%2FryiAKCqZGCct7Bd0FzwInD0XrQ%2FvTgsR9twxAD8OUHzT8fN3pfk6EM5EhJe9r7%2Bnj70UAAdHowj2XQTvYnWulPEE0mswKFOTkXkapS7GlfZrr%2BeczWhdKenrBtC1%2B3Rgbplctbj1n9Bb%2FDHi%2F8ELNnOf4WBbE2lEtDAUMaNdZ27drS7bZ9xh4S50SoDlug5xgRhJPP0sr9WwX6eHME0E3jQVRc5BH33qIXtjDGn3KTGBSp%2BfYBEep13f0c8jC3FnIT09aigD0zOB9qOMypIxYV7mdWEmbwuqoDAeeovkIn953crcS2ofhTwJWbJO%2Fs4cJ3ZHm0ChE3FpNCw7cvmNkSefTnNKi8UJotXfjDCtZz8QS52vjx8d3ePDtg04wqvbNwQY6pgHVskVNtAxhYA3gNclwMK%2FlxftpVsERbPtySX25oC65dyWOF2DQJdQICWI5dYGObfVp5Ad42l7D3etWxCCexM0gAob022bBinAFhNzCHFDYMciqAF92w9lUgKB3dYGwia7fGwo05NBph0vq1mxFqM%2BemfSttZM0myXoaIeY4QXABf4EdbbVROJmWqlSPmaLboxFnGG%2F321JI0JcWTCXMscctslKnsi8&X-Amz-Signature=5749eb7d4f40ad1375f7d5fc0b49ba8570b035a39ad7f0d356f87c7f0906c109&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSSRNN7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFMNqGVif3CeDteuoMhNIHKvsoBX9RSgid05iPmpS84CAiAtL2Qm464uuatnWVSxdISUBzNcw%2BO3SNMh%2BbwnD1B10Cr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMFY8NfRbUbUM2PTx0KtwDoYyJ6hYfC8nT3kwf12rS6I7qWktFoKjynb2uC2bf%2FwYd5gw1D8djUNM1tBUxSGPZ%2FdKS28%2BaQwLivvP1dKFrGrE2sLwqAoZaCPIMSB8w3fP9chD49l8mqs3gJ7JuyBGod4JQnIuHI6jJ3n4zvv2Mdhy9FVofUPmFDw5O3og%2Fk3WyVqBzy7CBnTDfCoO%2FFKirhBMJ6g5HvinJcDN07K8Z3RKju4EpQOqfd0e4djNFgFApzoDatvslJyCBQtDfXs%2FryiAKCqZGCct7Bd0FzwInD0XrQ%2FvTgsR9twxAD8OUHzT8fN3pfk6EM5EhJe9r7%2Bnj70UAAdHowj2XQTvYnWulPEE0mswKFOTkXkapS7GlfZrr%2BeczWhdKenrBtC1%2B3Rgbplctbj1n9Bb%2FDHi%2F8ELNnOf4WBbE2lEtDAUMaNdZ27drS7bZ9xh4S50SoDlug5xgRhJPP0sr9WwX6eHME0E3jQVRc5BH33qIXtjDGn3KTGBSp%2BfYBEep13f0c8jC3FnIT09aigD0zOB9qOMypIxYV7mdWEmbwuqoDAeeovkIn953crcS2ofhTwJWbJO%2Fs4cJ3ZHm0ChE3FpNCw7cvmNkSefTnNKi8UJotXfjDCtZz8QS52vjx8d3ePDtg04wqvbNwQY6pgHVskVNtAxhYA3gNclwMK%2FlxftpVsERbPtySX25oC65dyWOF2DQJdQICWI5dYGObfVp5Ad42l7D3etWxCCexM0gAob022bBinAFhNzCHFDYMciqAF92w9lUgKB3dYGwia7fGwo05NBph0vq1mxFqM%2BemfSttZM0myXoaIeY4QXABf4EdbbVROJmWqlSPmaLboxFnGG%2F321JI0JcWTCXMscctslKnsi8&X-Amz-Signature=d01c71653b1125ad0a11150e43f87260a49adb33d27d0b42c595086b60e99d78&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSSRNN7%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFMNqGVif3CeDteuoMhNIHKvsoBX9RSgid05iPmpS84CAiAtL2Qm464uuatnWVSxdISUBzNcw%2BO3SNMh%2BbwnD1B10Cr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMFY8NfRbUbUM2PTx0KtwDoYyJ6hYfC8nT3kwf12rS6I7qWktFoKjynb2uC2bf%2FwYd5gw1D8djUNM1tBUxSGPZ%2FdKS28%2BaQwLivvP1dKFrGrE2sLwqAoZaCPIMSB8w3fP9chD49l8mqs3gJ7JuyBGod4JQnIuHI6jJ3n4zvv2Mdhy9FVofUPmFDw5O3og%2Fk3WyVqBzy7CBnTDfCoO%2FFKirhBMJ6g5HvinJcDN07K8Z3RKju4EpQOqfd0e4djNFgFApzoDatvslJyCBQtDfXs%2FryiAKCqZGCct7Bd0FzwInD0XrQ%2FvTgsR9twxAD8OUHzT8fN3pfk6EM5EhJe9r7%2Bnj70UAAdHowj2XQTvYnWulPEE0mswKFOTkXkapS7GlfZrr%2BeczWhdKenrBtC1%2B3Rgbplctbj1n9Bb%2FDHi%2F8ELNnOf4WBbE2lEtDAUMaNdZ27drS7bZ9xh4S50SoDlug5xgRhJPP0sr9WwX6eHME0E3jQVRc5BH33qIXtjDGn3KTGBSp%2BfYBEep13f0c8jC3FnIT09aigD0zOB9qOMypIxYV7mdWEmbwuqoDAeeovkIn953crcS2ofhTwJWbJO%2Fs4cJ3ZHm0ChE3FpNCw7cvmNkSefTnNKi8UJotXfjDCtZz8QS52vjx8d3ePDtg04wqvbNwQY6pgHVskVNtAxhYA3gNclwMK%2FlxftpVsERbPtySX25oC65dyWOF2DQJdQICWI5dYGObfVp5Ad42l7D3etWxCCexM0gAob022bBinAFhNzCHFDYMciqAF92w9lUgKB3dYGwia7fGwo05NBph0vq1mxFqM%2BemfSttZM0myXoaIeY4QXABf4EdbbVROJmWqlSPmaLboxFnGG%2F321JI0JcWTCXMscctslKnsi8&X-Amz-Signature=09b94883d9c9f529a5e2cc40e169316dd788a9824309179f5bfca4985b4b0d68&X-Amz-SignedHeaders=host&x-id=GetObject)
