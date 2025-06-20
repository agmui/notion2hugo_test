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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KEKVZO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9521GUtjq1jYFthiuQIfCi%2FXmVquez%2FyRKoosupf9QIgaJu%2BXKgeGWRjKGzLCSJBfm5wQZ%2B%2BXT7n2iTiupoEpV4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaMJ9Cpbe9lrQr%2BJCrcA16CgFGa8%2FXiJugmmLVatzQX2V4PhYo6nAFlPEP1%2Ff7XWclXzqptzGD68WBsAE%2FdhzAupxQm1gir%2Byi24Rg%2F5GAHq3%2F6L77MNEG5fudCsqwnpg7UgrJULNPJ714QxYzjHwCeb5Kyy1%2BnWcM7%2BXepUDao%2BQgFUjLbzQwbNTe9lGYDDoBg4fG3v5SY3inV%2FUbzQpNvXnwQ4RZsu3qZYiTIGs6xtls7yYG2rLUKeSoYQ5t6k7S6QBx6k5kpqTGyRyMnYYtytZZ%2BbA%2BPQH3KjTYHLnIbRZRO1vKbXAmiqRx8TcXCMi7dP%2FfnnJAJDpJrSuaw0btEcC1EwcOg6FEief%2BbGUuLEo0RZpq0XCP9iD3MJdmAkQTyymeJqdzw6xQVgAxcfumPqwCRu%2BLJO7YrFwTZX4Vv%2F3h8wmOrWBN177aThNIHFiLnR6xQXP8Dw3ypvSsgD2j9IFperJYK%2BPEQmTCUZMRMw%2FM5xqncSPhBEfpfkpOwtxf%2FxTRbSIW8XCCDPaQSW3nj%2FrtIAAw5cGhsXNcuigxYAVX%2FQOxBChGcXf6dWlwQHxzCra2K9vgSyVFGx4%2FkduUj6k%2FqLGhFw4xVbjX6HXJottCZ0Ps%2Bf08a3W%2Fh8YQOkPGHhP1tdy6v%2FSP3MJWy1sIGOqUBy4tWKlkegU9Dfp3IW8n9tINU25tpt48w3Jfkv%2Bm29YyPW%2BT4bCzNGxmMikt1RKJTmFmi1n5USSmNc3gOi8HG7Kx%2FICKSq329aeIr00SVt9uyAIfH7pUw7MeN7wBdNBb%2Bj%2B%2BSucCHXkZrj3wyj63V3WWcSEftjgXkepo4ZFZbuz8r1hjuwl2Zs%2BPChi3bUau8YtOvIpUq1AmVfgEWvgDynpfbgFSA&X-Amz-Signature=dab0c578265f3ad67f06a8ab601ab9ef1e3750be9b157f9895bc31c8d3fd2702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KEKVZO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9521GUtjq1jYFthiuQIfCi%2FXmVquez%2FyRKoosupf9QIgaJu%2BXKgeGWRjKGzLCSJBfm5wQZ%2B%2BXT7n2iTiupoEpV4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaMJ9Cpbe9lrQr%2BJCrcA16CgFGa8%2FXiJugmmLVatzQX2V4PhYo6nAFlPEP1%2Ff7XWclXzqptzGD68WBsAE%2FdhzAupxQm1gir%2Byi24Rg%2F5GAHq3%2F6L77MNEG5fudCsqwnpg7UgrJULNPJ714QxYzjHwCeb5Kyy1%2BnWcM7%2BXepUDao%2BQgFUjLbzQwbNTe9lGYDDoBg4fG3v5SY3inV%2FUbzQpNvXnwQ4RZsu3qZYiTIGs6xtls7yYG2rLUKeSoYQ5t6k7S6QBx6k5kpqTGyRyMnYYtytZZ%2BbA%2BPQH3KjTYHLnIbRZRO1vKbXAmiqRx8TcXCMi7dP%2FfnnJAJDpJrSuaw0btEcC1EwcOg6FEief%2BbGUuLEo0RZpq0XCP9iD3MJdmAkQTyymeJqdzw6xQVgAxcfumPqwCRu%2BLJO7YrFwTZX4Vv%2F3h8wmOrWBN177aThNIHFiLnR6xQXP8Dw3ypvSsgD2j9IFperJYK%2BPEQmTCUZMRMw%2FM5xqncSPhBEfpfkpOwtxf%2FxTRbSIW8XCCDPaQSW3nj%2FrtIAAw5cGhsXNcuigxYAVX%2FQOxBChGcXf6dWlwQHxzCra2K9vgSyVFGx4%2FkduUj6k%2FqLGhFw4xVbjX6HXJottCZ0Ps%2Bf08a3W%2Fh8YQOkPGHhP1tdy6v%2FSP3MJWy1sIGOqUBy4tWKlkegU9Dfp3IW8n9tINU25tpt48w3Jfkv%2Bm29YyPW%2BT4bCzNGxmMikt1RKJTmFmi1n5USSmNc3gOi8HG7Kx%2FICKSq329aeIr00SVt9uyAIfH7pUw7MeN7wBdNBb%2Bj%2B%2BSucCHXkZrj3wyj63V3WWcSEftjgXkepo4ZFZbuz8r1hjuwl2Zs%2BPChi3bUau8YtOvIpUq1AmVfgEWvgDynpfbgFSA&X-Amz-Signature=380036644d50848e5e9afc4e48c04a76be898a7ae9c649d0d21aea4d3d33faef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KEKVZO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9521GUtjq1jYFthiuQIfCi%2FXmVquez%2FyRKoosupf9QIgaJu%2BXKgeGWRjKGzLCSJBfm5wQZ%2B%2BXT7n2iTiupoEpV4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaMJ9Cpbe9lrQr%2BJCrcA16CgFGa8%2FXiJugmmLVatzQX2V4PhYo6nAFlPEP1%2Ff7XWclXzqptzGD68WBsAE%2FdhzAupxQm1gir%2Byi24Rg%2F5GAHq3%2F6L77MNEG5fudCsqwnpg7UgrJULNPJ714QxYzjHwCeb5Kyy1%2BnWcM7%2BXepUDao%2BQgFUjLbzQwbNTe9lGYDDoBg4fG3v5SY3inV%2FUbzQpNvXnwQ4RZsu3qZYiTIGs6xtls7yYG2rLUKeSoYQ5t6k7S6QBx6k5kpqTGyRyMnYYtytZZ%2BbA%2BPQH3KjTYHLnIbRZRO1vKbXAmiqRx8TcXCMi7dP%2FfnnJAJDpJrSuaw0btEcC1EwcOg6FEief%2BbGUuLEo0RZpq0XCP9iD3MJdmAkQTyymeJqdzw6xQVgAxcfumPqwCRu%2BLJO7YrFwTZX4Vv%2F3h8wmOrWBN177aThNIHFiLnR6xQXP8Dw3ypvSsgD2j9IFperJYK%2BPEQmTCUZMRMw%2FM5xqncSPhBEfpfkpOwtxf%2FxTRbSIW8XCCDPaQSW3nj%2FrtIAAw5cGhsXNcuigxYAVX%2FQOxBChGcXf6dWlwQHxzCra2K9vgSyVFGx4%2FkduUj6k%2FqLGhFw4xVbjX6HXJottCZ0Ps%2Bf08a3W%2Fh8YQOkPGHhP1tdy6v%2FSP3MJWy1sIGOqUBy4tWKlkegU9Dfp3IW8n9tINU25tpt48w3Jfkv%2Bm29YyPW%2BT4bCzNGxmMikt1RKJTmFmi1n5USSmNc3gOi8HG7Kx%2FICKSq329aeIr00SVt9uyAIfH7pUw7MeN7wBdNBb%2Bj%2B%2BSucCHXkZrj3wyj63V3WWcSEftjgXkepo4ZFZbuz8r1hjuwl2Zs%2BPChi3bUau8YtOvIpUq1AmVfgEWvgDynpfbgFSA&X-Amz-Signature=1b5e58328a90015db68e2f95d39b799a676dfc91828cacf7b972a4bf8855d72d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KEKVZO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9521GUtjq1jYFthiuQIfCi%2FXmVquez%2FyRKoosupf9QIgaJu%2BXKgeGWRjKGzLCSJBfm5wQZ%2B%2BXT7n2iTiupoEpV4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaMJ9Cpbe9lrQr%2BJCrcA16CgFGa8%2FXiJugmmLVatzQX2V4PhYo6nAFlPEP1%2Ff7XWclXzqptzGD68WBsAE%2FdhzAupxQm1gir%2Byi24Rg%2F5GAHq3%2F6L77MNEG5fudCsqwnpg7UgrJULNPJ714QxYzjHwCeb5Kyy1%2BnWcM7%2BXepUDao%2BQgFUjLbzQwbNTe9lGYDDoBg4fG3v5SY3inV%2FUbzQpNvXnwQ4RZsu3qZYiTIGs6xtls7yYG2rLUKeSoYQ5t6k7S6QBx6k5kpqTGyRyMnYYtytZZ%2BbA%2BPQH3KjTYHLnIbRZRO1vKbXAmiqRx8TcXCMi7dP%2FfnnJAJDpJrSuaw0btEcC1EwcOg6FEief%2BbGUuLEo0RZpq0XCP9iD3MJdmAkQTyymeJqdzw6xQVgAxcfumPqwCRu%2BLJO7YrFwTZX4Vv%2F3h8wmOrWBN177aThNIHFiLnR6xQXP8Dw3ypvSsgD2j9IFperJYK%2BPEQmTCUZMRMw%2FM5xqncSPhBEfpfkpOwtxf%2FxTRbSIW8XCCDPaQSW3nj%2FrtIAAw5cGhsXNcuigxYAVX%2FQOxBChGcXf6dWlwQHxzCra2K9vgSyVFGx4%2FkduUj6k%2FqLGhFw4xVbjX6HXJottCZ0Ps%2Bf08a3W%2Fh8YQOkPGHhP1tdy6v%2FSP3MJWy1sIGOqUBy4tWKlkegU9Dfp3IW8n9tINU25tpt48w3Jfkv%2Bm29YyPW%2BT4bCzNGxmMikt1RKJTmFmi1n5USSmNc3gOi8HG7Kx%2FICKSq329aeIr00SVt9uyAIfH7pUw7MeN7wBdNBb%2Bj%2B%2BSucCHXkZrj3wyj63V3WWcSEftjgXkepo4ZFZbuz8r1hjuwl2Zs%2BPChi3bUau8YtOvIpUq1AmVfgEWvgDynpfbgFSA&X-Amz-Signature=1eb345c6ceed3ce280c53f9130e323eea4412195cf39c4814a7be2f1b068721d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KEKVZO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9521GUtjq1jYFthiuQIfCi%2FXmVquez%2FyRKoosupf9QIgaJu%2BXKgeGWRjKGzLCSJBfm5wQZ%2B%2BXT7n2iTiupoEpV4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaMJ9Cpbe9lrQr%2BJCrcA16CgFGa8%2FXiJugmmLVatzQX2V4PhYo6nAFlPEP1%2Ff7XWclXzqptzGD68WBsAE%2FdhzAupxQm1gir%2Byi24Rg%2F5GAHq3%2F6L77MNEG5fudCsqwnpg7UgrJULNPJ714QxYzjHwCeb5Kyy1%2BnWcM7%2BXepUDao%2BQgFUjLbzQwbNTe9lGYDDoBg4fG3v5SY3inV%2FUbzQpNvXnwQ4RZsu3qZYiTIGs6xtls7yYG2rLUKeSoYQ5t6k7S6QBx6k5kpqTGyRyMnYYtytZZ%2BbA%2BPQH3KjTYHLnIbRZRO1vKbXAmiqRx8TcXCMi7dP%2FfnnJAJDpJrSuaw0btEcC1EwcOg6FEief%2BbGUuLEo0RZpq0XCP9iD3MJdmAkQTyymeJqdzw6xQVgAxcfumPqwCRu%2BLJO7YrFwTZX4Vv%2F3h8wmOrWBN177aThNIHFiLnR6xQXP8Dw3ypvSsgD2j9IFperJYK%2BPEQmTCUZMRMw%2FM5xqncSPhBEfpfkpOwtxf%2FxTRbSIW8XCCDPaQSW3nj%2FrtIAAw5cGhsXNcuigxYAVX%2FQOxBChGcXf6dWlwQHxzCra2K9vgSyVFGx4%2FkduUj6k%2FqLGhFw4xVbjX6HXJottCZ0Ps%2Bf08a3W%2Fh8YQOkPGHhP1tdy6v%2FSP3MJWy1sIGOqUBy4tWKlkegU9Dfp3IW8n9tINU25tpt48w3Jfkv%2Bm29YyPW%2BT4bCzNGxmMikt1RKJTmFmi1n5USSmNc3gOi8HG7Kx%2FICKSq329aeIr00SVt9uyAIfH7pUw7MeN7wBdNBb%2Bj%2B%2BSucCHXkZrj3wyj63V3WWcSEftjgXkepo4ZFZbuz8r1hjuwl2Zs%2BPChi3bUau8YtOvIpUq1AmVfgEWvgDynpfbgFSA&X-Amz-Signature=cae719f1f4459699a27db55353d6bf430d97c4bd6949500502edf5ac54c1c767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5KEKVZO%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T220820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB9521GUtjq1jYFthiuQIfCi%2FXmVquez%2FyRKoosupf9QIgaJu%2BXKgeGWRjKGzLCSJBfm5wQZ%2B%2BXT7n2iTiupoEpV4qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOaMJ9Cpbe9lrQr%2BJCrcA16CgFGa8%2FXiJugmmLVatzQX2V4PhYo6nAFlPEP1%2Ff7XWclXzqptzGD68WBsAE%2FdhzAupxQm1gir%2Byi24Rg%2F5GAHq3%2F6L77MNEG5fudCsqwnpg7UgrJULNPJ714QxYzjHwCeb5Kyy1%2BnWcM7%2BXepUDao%2BQgFUjLbzQwbNTe9lGYDDoBg4fG3v5SY3inV%2FUbzQpNvXnwQ4RZsu3qZYiTIGs6xtls7yYG2rLUKeSoYQ5t6k7S6QBx6k5kpqTGyRyMnYYtytZZ%2BbA%2BPQH3KjTYHLnIbRZRO1vKbXAmiqRx8TcXCMi7dP%2FfnnJAJDpJrSuaw0btEcC1EwcOg6FEief%2BbGUuLEo0RZpq0XCP9iD3MJdmAkQTyymeJqdzw6xQVgAxcfumPqwCRu%2BLJO7YrFwTZX4Vv%2F3h8wmOrWBN177aThNIHFiLnR6xQXP8Dw3ypvSsgD2j9IFperJYK%2BPEQmTCUZMRMw%2FM5xqncSPhBEfpfkpOwtxf%2FxTRbSIW8XCCDPaQSW3nj%2FrtIAAw5cGhsXNcuigxYAVX%2FQOxBChGcXf6dWlwQHxzCra2K9vgSyVFGx4%2FkduUj6k%2FqLGhFw4xVbjX6HXJottCZ0Ps%2Bf08a3W%2Fh8YQOkPGHhP1tdy6v%2FSP3MJWy1sIGOqUBy4tWKlkegU9Dfp3IW8n9tINU25tpt48w3Jfkv%2Bm29YyPW%2BT4bCzNGxmMikt1RKJTmFmi1n5USSmNc3gOi8HG7Kx%2FICKSq329aeIr00SVt9uyAIfH7pUw7MeN7wBdNBb%2Bj%2B%2BSucCHXkZrj3wyj63V3WWcSEftjgXkepo4ZFZbuz8r1hjuwl2Zs%2BPChi3bUau8YtOvIpUq1AmVfgEWvgDynpfbgFSA&X-Amz-Signature=164c49dfb9bb89b3829b50e2b6d170a42810d21764f477865cfa3d63ede2af13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
