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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CUHU2KZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDoqC%2BMvAfKUfLSCWuyq7%2F%2FDtu3un%2F0LxSEalCPMmqLkAiAE8d55HpPS5JbW%2BpBOk5uSRrb9ENYnyx2SxaqVBAl9%2BCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM9OePDi6xjpyMDV5LKtwDBEb64CFUsTfgudST582T1AUx39iSn7hFdm3brYLnSkJaAOuEw%2BvP7ezZjHhouw4mg2XhRlxNQbLmQh7ZEFD1P8zHdhCWdKDskXtvDSzY83qJ7GiJRbxa0wYrrgEhmQiLFpxagOA6L3myFUfSEqUkTX7Lco%2F9DCx8TTKhWRFQlZumRU%2FLX3oaeJjPsqXH6CFs6b5KTM9%2FDy2tjnxSXumAJPBLkV0XGuHxcHfjeYCVbbmcYkyFLce8LobD3mv9XxmjkUIPQi1yirlC8Djy5D8Gd28N83Yf7yPFnEJ0UjFikbmRiPGgP6ayLiNPpRcGHNjIWpsUsgU1i6mf7oFs2zwJO87CK%2BVBbMMkEnr7xtTvsUEaOOthz4kzsq%2FrnS%2FHgTnqc%2FWaXPWCz2WKqCX%2FC8U7F2UNMHHa5gzbjvUl2XUs7R3FEUv0bfjKE8r0dl0YwL5I7IRFE6GF8MNvq4AkL3af978yZ0iFNZvY0l42kgqvDKmlc72%2BbhZEgHqzR25A6W3Qj9kMZgsjGr2O%2B3cY5Shfevi1b5Kht424fYiptF2bBjYLcL5dtaftegQYTA2dYTP62HQWgSDvFKkcBJ9AZYfPXrwsevKd0eCS2l8cF0gWEMJGohT7oz3HmGQimJkwkKK4wgY6pgHW%2Fj4eYepFka0pVqGdcs3Pfhl7Ec0bh1Gdlzipmo9f6pKcMz%2B6iBFgEr%2Ft%2BxineDqznvLu%2Baucm6YctCVduhs0m0N0ApD2lbpbwCMG1IbLRy2SQsBdOiaoGr6BpTmkgFp0S%2BK1oVN7%2B%2BYwnEDgTEcJnC8S5sQV6KYd3Y2iI6smuNhWXNMQ49rEZtL2nciTylVH2yeIcblXJ3ooG5T00KxKMlz4lmmc&X-Amz-Signature=4e3a7ebe2d72100390001ab0ce839b767c99c069a44d4820c9c0df9a8c6128b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CUHU2KZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDoqC%2BMvAfKUfLSCWuyq7%2F%2FDtu3un%2F0LxSEalCPMmqLkAiAE8d55HpPS5JbW%2BpBOk5uSRrb9ENYnyx2SxaqVBAl9%2BCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM9OePDi6xjpyMDV5LKtwDBEb64CFUsTfgudST582T1AUx39iSn7hFdm3brYLnSkJaAOuEw%2BvP7ezZjHhouw4mg2XhRlxNQbLmQh7ZEFD1P8zHdhCWdKDskXtvDSzY83qJ7GiJRbxa0wYrrgEhmQiLFpxagOA6L3myFUfSEqUkTX7Lco%2F9DCx8TTKhWRFQlZumRU%2FLX3oaeJjPsqXH6CFs6b5KTM9%2FDy2tjnxSXumAJPBLkV0XGuHxcHfjeYCVbbmcYkyFLce8LobD3mv9XxmjkUIPQi1yirlC8Djy5D8Gd28N83Yf7yPFnEJ0UjFikbmRiPGgP6ayLiNPpRcGHNjIWpsUsgU1i6mf7oFs2zwJO87CK%2BVBbMMkEnr7xtTvsUEaOOthz4kzsq%2FrnS%2FHgTnqc%2FWaXPWCz2WKqCX%2FC8U7F2UNMHHa5gzbjvUl2XUs7R3FEUv0bfjKE8r0dl0YwL5I7IRFE6GF8MNvq4AkL3af978yZ0iFNZvY0l42kgqvDKmlc72%2BbhZEgHqzR25A6W3Qj9kMZgsjGr2O%2B3cY5Shfevi1b5Kht424fYiptF2bBjYLcL5dtaftegQYTA2dYTP62HQWgSDvFKkcBJ9AZYfPXrwsevKd0eCS2l8cF0gWEMJGohT7oz3HmGQimJkwkKK4wgY6pgHW%2Fj4eYepFka0pVqGdcs3Pfhl7Ec0bh1Gdlzipmo9f6pKcMz%2B6iBFgEr%2Ft%2BxineDqznvLu%2Baucm6YctCVduhs0m0N0ApD2lbpbwCMG1IbLRy2SQsBdOiaoGr6BpTmkgFp0S%2BK1oVN7%2B%2BYwnEDgTEcJnC8S5sQV6KYd3Y2iI6smuNhWXNMQ49rEZtL2nciTylVH2yeIcblXJ3ooG5T00KxKMlz4lmmc&X-Amz-Signature=bd964ebef12f92f170b7b09482f3534423a86d21d3921993503750905809d6a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CUHU2KZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDoqC%2BMvAfKUfLSCWuyq7%2F%2FDtu3un%2F0LxSEalCPMmqLkAiAE8d55HpPS5JbW%2BpBOk5uSRrb9ENYnyx2SxaqVBAl9%2BCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM9OePDi6xjpyMDV5LKtwDBEb64CFUsTfgudST582T1AUx39iSn7hFdm3brYLnSkJaAOuEw%2BvP7ezZjHhouw4mg2XhRlxNQbLmQh7ZEFD1P8zHdhCWdKDskXtvDSzY83qJ7GiJRbxa0wYrrgEhmQiLFpxagOA6L3myFUfSEqUkTX7Lco%2F9DCx8TTKhWRFQlZumRU%2FLX3oaeJjPsqXH6CFs6b5KTM9%2FDy2tjnxSXumAJPBLkV0XGuHxcHfjeYCVbbmcYkyFLce8LobD3mv9XxmjkUIPQi1yirlC8Djy5D8Gd28N83Yf7yPFnEJ0UjFikbmRiPGgP6ayLiNPpRcGHNjIWpsUsgU1i6mf7oFs2zwJO87CK%2BVBbMMkEnr7xtTvsUEaOOthz4kzsq%2FrnS%2FHgTnqc%2FWaXPWCz2WKqCX%2FC8U7F2UNMHHa5gzbjvUl2XUs7R3FEUv0bfjKE8r0dl0YwL5I7IRFE6GF8MNvq4AkL3af978yZ0iFNZvY0l42kgqvDKmlc72%2BbhZEgHqzR25A6W3Qj9kMZgsjGr2O%2B3cY5Shfevi1b5Kht424fYiptF2bBjYLcL5dtaftegQYTA2dYTP62HQWgSDvFKkcBJ9AZYfPXrwsevKd0eCS2l8cF0gWEMJGohT7oz3HmGQimJkwkKK4wgY6pgHW%2Fj4eYepFka0pVqGdcs3Pfhl7Ec0bh1Gdlzipmo9f6pKcMz%2B6iBFgEr%2Ft%2BxineDqznvLu%2Baucm6YctCVduhs0m0N0ApD2lbpbwCMG1IbLRy2SQsBdOiaoGr6BpTmkgFp0S%2BK1oVN7%2B%2BYwnEDgTEcJnC8S5sQV6KYd3Y2iI6smuNhWXNMQ49rEZtL2nciTylVH2yeIcblXJ3ooG5T00KxKMlz4lmmc&X-Amz-Signature=a5c167005b6744e5581e939cb624ae1daf5b60dc0d2219a7b1a5fa11d6ae088b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CUHU2KZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDoqC%2BMvAfKUfLSCWuyq7%2F%2FDtu3un%2F0LxSEalCPMmqLkAiAE8d55HpPS5JbW%2BpBOk5uSRrb9ENYnyx2SxaqVBAl9%2BCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM9OePDi6xjpyMDV5LKtwDBEb64CFUsTfgudST582T1AUx39iSn7hFdm3brYLnSkJaAOuEw%2BvP7ezZjHhouw4mg2XhRlxNQbLmQh7ZEFD1P8zHdhCWdKDskXtvDSzY83qJ7GiJRbxa0wYrrgEhmQiLFpxagOA6L3myFUfSEqUkTX7Lco%2F9DCx8TTKhWRFQlZumRU%2FLX3oaeJjPsqXH6CFs6b5KTM9%2FDy2tjnxSXumAJPBLkV0XGuHxcHfjeYCVbbmcYkyFLce8LobD3mv9XxmjkUIPQi1yirlC8Djy5D8Gd28N83Yf7yPFnEJ0UjFikbmRiPGgP6ayLiNPpRcGHNjIWpsUsgU1i6mf7oFs2zwJO87CK%2BVBbMMkEnr7xtTvsUEaOOthz4kzsq%2FrnS%2FHgTnqc%2FWaXPWCz2WKqCX%2FC8U7F2UNMHHa5gzbjvUl2XUs7R3FEUv0bfjKE8r0dl0YwL5I7IRFE6GF8MNvq4AkL3af978yZ0iFNZvY0l42kgqvDKmlc72%2BbhZEgHqzR25A6W3Qj9kMZgsjGr2O%2B3cY5Shfevi1b5Kht424fYiptF2bBjYLcL5dtaftegQYTA2dYTP62HQWgSDvFKkcBJ9AZYfPXrwsevKd0eCS2l8cF0gWEMJGohT7oz3HmGQimJkwkKK4wgY6pgHW%2Fj4eYepFka0pVqGdcs3Pfhl7Ec0bh1Gdlzipmo9f6pKcMz%2B6iBFgEr%2Ft%2BxineDqznvLu%2Baucm6YctCVduhs0m0N0ApD2lbpbwCMG1IbLRy2SQsBdOiaoGr6BpTmkgFp0S%2BK1oVN7%2B%2BYwnEDgTEcJnC8S5sQV6KYd3Y2iI6smuNhWXNMQ49rEZtL2nciTylVH2yeIcblXJ3ooG5T00KxKMlz4lmmc&X-Amz-Signature=5b384e4177d02835e15c1233ff55cd302a40e6f9e94a82bd697537032e83178e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CUHU2KZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDoqC%2BMvAfKUfLSCWuyq7%2F%2FDtu3un%2F0LxSEalCPMmqLkAiAE8d55HpPS5JbW%2BpBOk5uSRrb9ENYnyx2SxaqVBAl9%2BCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM9OePDi6xjpyMDV5LKtwDBEb64CFUsTfgudST582T1AUx39iSn7hFdm3brYLnSkJaAOuEw%2BvP7ezZjHhouw4mg2XhRlxNQbLmQh7ZEFD1P8zHdhCWdKDskXtvDSzY83qJ7GiJRbxa0wYrrgEhmQiLFpxagOA6L3myFUfSEqUkTX7Lco%2F9DCx8TTKhWRFQlZumRU%2FLX3oaeJjPsqXH6CFs6b5KTM9%2FDy2tjnxSXumAJPBLkV0XGuHxcHfjeYCVbbmcYkyFLce8LobD3mv9XxmjkUIPQi1yirlC8Djy5D8Gd28N83Yf7yPFnEJ0UjFikbmRiPGgP6ayLiNPpRcGHNjIWpsUsgU1i6mf7oFs2zwJO87CK%2BVBbMMkEnr7xtTvsUEaOOthz4kzsq%2FrnS%2FHgTnqc%2FWaXPWCz2WKqCX%2FC8U7F2UNMHHa5gzbjvUl2XUs7R3FEUv0bfjKE8r0dl0YwL5I7IRFE6GF8MNvq4AkL3af978yZ0iFNZvY0l42kgqvDKmlc72%2BbhZEgHqzR25A6W3Qj9kMZgsjGr2O%2B3cY5Shfevi1b5Kht424fYiptF2bBjYLcL5dtaftegQYTA2dYTP62HQWgSDvFKkcBJ9AZYfPXrwsevKd0eCS2l8cF0gWEMJGohT7oz3HmGQimJkwkKK4wgY6pgHW%2Fj4eYepFka0pVqGdcs3Pfhl7Ec0bh1Gdlzipmo9f6pKcMz%2B6iBFgEr%2Ft%2BxineDqznvLu%2Baucm6YctCVduhs0m0N0ApD2lbpbwCMG1IbLRy2SQsBdOiaoGr6BpTmkgFp0S%2BK1oVN7%2B%2BYwnEDgTEcJnC8S5sQV6KYd3Y2iI6smuNhWXNMQ49rEZtL2nciTylVH2yeIcblXJ3ooG5T00KxKMlz4lmmc&X-Amz-Signature=92338a91289eb37804149c95f3fe502425a7e0a78d914ced44e7331aeb7f66e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CUHU2KZ%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDoqC%2BMvAfKUfLSCWuyq7%2F%2FDtu3un%2F0LxSEalCPMmqLkAiAE8d55HpPS5JbW%2BpBOk5uSRrb9ENYnyx2SxaqVBAl9%2BCr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIM9OePDi6xjpyMDV5LKtwDBEb64CFUsTfgudST582T1AUx39iSn7hFdm3brYLnSkJaAOuEw%2BvP7ezZjHhouw4mg2XhRlxNQbLmQh7ZEFD1P8zHdhCWdKDskXtvDSzY83qJ7GiJRbxa0wYrrgEhmQiLFpxagOA6L3myFUfSEqUkTX7Lco%2F9DCx8TTKhWRFQlZumRU%2FLX3oaeJjPsqXH6CFs6b5KTM9%2FDy2tjnxSXumAJPBLkV0XGuHxcHfjeYCVbbmcYkyFLce8LobD3mv9XxmjkUIPQi1yirlC8Djy5D8Gd28N83Yf7yPFnEJ0UjFikbmRiPGgP6ayLiNPpRcGHNjIWpsUsgU1i6mf7oFs2zwJO87CK%2BVBbMMkEnr7xtTvsUEaOOthz4kzsq%2FrnS%2FHgTnqc%2FWaXPWCz2WKqCX%2FC8U7F2UNMHHa5gzbjvUl2XUs7R3FEUv0bfjKE8r0dl0YwL5I7IRFE6GF8MNvq4AkL3af978yZ0iFNZvY0l42kgqvDKmlc72%2BbhZEgHqzR25A6W3Qj9kMZgsjGr2O%2B3cY5Shfevi1b5Kht424fYiptF2bBjYLcL5dtaftegQYTA2dYTP62HQWgSDvFKkcBJ9AZYfPXrwsevKd0eCS2l8cF0gWEMJGohT7oz3HmGQimJkwkKK4wgY6pgHW%2Fj4eYepFka0pVqGdcs3Pfhl7Ec0bh1Gdlzipmo9f6pKcMz%2B6iBFgEr%2Ft%2BxineDqznvLu%2Baucm6YctCVduhs0m0N0ApD2lbpbwCMG1IbLRy2SQsBdOiaoGr6BpTmkgFp0S%2BK1oVN7%2B%2BYwnEDgTEcJnC8S5sQV6KYd3Y2iI6smuNhWXNMQ49rEZtL2nciTylVH2yeIcblXJ3ooG5T00KxKMlz4lmmc&X-Amz-Signature=1565320b178af189bbb3d1bcf2e031dbe7f5860ac2829a230b40cf07c96d2506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
