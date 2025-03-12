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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5TSDOE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEkof3cMkRmDB9HwKE7FK2FBHw7pgLjWQjgzLR14XgLWAiEAswi93Ujueqbm4A%2FcgjoKwoo5IJvs%2FHjcGc0j0QGpGS0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIR4CwD1640a228yXircA4Bg88SuvcOCyZxejSZSMfq3tWNtM2SUwXUJ14a4RyFV%2BG14ETCfeMsFIiULsPLyNwK2ldPIoVEpM2XkyPaYKbKofkemHoqggYGpy8m3VsjvB1QYBynStbjhxMlxQRv01ua8rOUUM%2BauC3X0h%2FOK2FwXCByRBGj7tH9JhPsZNU23HvYs1p1ViOPMCeenKpdpN7OdtSSkMECbamf8gu22ulX164CqnRHo%2BshL0ur4Onx%2Fhx61hwociwmrN3PtkKDPJga7ekg2WNkIz5bkixRPR04cyNyBpwfomgrBmNNlc7rI%2BGU69X2OK5Zvm4bPl5F2TKBMoZIPNM9nFwvDBG6PQ0FvgGvlCZXr47qmVwalllqH8ps38hAQNP8fPsSmAYinqeaLf7FGCAmbQP6x2ZbDpnV3xmF70bUjlclyIPVxQlJ4Q3F0O%2Ba7Nm2pWIfrdktdjri%2BWv1i%2BadJgnnGYLqwvnqvaz1XmBSxp96NCwP7oN61RXx9B4ReERKsEncQ2b3wiEO1xd2g6GaxZrMJJuwYH8VSRP1V1i7Q2fvD4JSXdkRjvnJktahD9mVxhlGOqWlL78dtIL0uGNFrJCscvqpk%2FxTbRQFpC4XDQtXJPOUpVVL%2FMMjl5vlx9O%2FlMTlhMMzAxr4GOqUBuYo8iAI7quPC%2B18o0%2FggoVfpqyuAqkOVzNv77kD1%2BinCy2XumRb6MkhWe9H9cYEh4mZw0zLzUnkCZ1XjPW4edHuddjma0%2FFJp%2B%2BApWVHSIqCI37HKiGI50SgIUufI7G33Ny3HvGT5A2qORUzJFBZxdE5SHQPswbl3DwXlQT13%2Bsm%2FsYupRsZ8eEQ5MsQVsmq0AXNh4iG2DEPwsHBOgC1%2FgpI5dIU&X-Amz-Signature=ae79eec62b4e48b511abb0ef144167b0a2d98e9a0328ccf8105206e0d7a743fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5TSDOE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEkof3cMkRmDB9HwKE7FK2FBHw7pgLjWQjgzLR14XgLWAiEAswi93Ujueqbm4A%2FcgjoKwoo5IJvs%2FHjcGc0j0QGpGS0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIR4CwD1640a228yXircA4Bg88SuvcOCyZxejSZSMfq3tWNtM2SUwXUJ14a4RyFV%2BG14ETCfeMsFIiULsPLyNwK2ldPIoVEpM2XkyPaYKbKofkemHoqggYGpy8m3VsjvB1QYBynStbjhxMlxQRv01ua8rOUUM%2BauC3X0h%2FOK2FwXCByRBGj7tH9JhPsZNU23HvYs1p1ViOPMCeenKpdpN7OdtSSkMECbamf8gu22ulX164CqnRHo%2BshL0ur4Onx%2Fhx61hwociwmrN3PtkKDPJga7ekg2WNkIz5bkixRPR04cyNyBpwfomgrBmNNlc7rI%2BGU69X2OK5Zvm4bPl5F2TKBMoZIPNM9nFwvDBG6PQ0FvgGvlCZXr47qmVwalllqH8ps38hAQNP8fPsSmAYinqeaLf7FGCAmbQP6x2ZbDpnV3xmF70bUjlclyIPVxQlJ4Q3F0O%2Ba7Nm2pWIfrdktdjri%2BWv1i%2BadJgnnGYLqwvnqvaz1XmBSxp96NCwP7oN61RXx9B4ReERKsEncQ2b3wiEO1xd2g6GaxZrMJJuwYH8VSRP1V1i7Q2fvD4JSXdkRjvnJktahD9mVxhlGOqWlL78dtIL0uGNFrJCscvqpk%2FxTbRQFpC4XDQtXJPOUpVVL%2FMMjl5vlx9O%2FlMTlhMMzAxr4GOqUBuYo8iAI7quPC%2B18o0%2FggoVfpqyuAqkOVzNv77kD1%2BinCy2XumRb6MkhWe9H9cYEh4mZw0zLzUnkCZ1XjPW4edHuddjma0%2FFJp%2B%2BApWVHSIqCI37HKiGI50SgIUufI7G33Ny3HvGT5A2qORUzJFBZxdE5SHQPswbl3DwXlQT13%2Bsm%2FsYupRsZ8eEQ5MsQVsmq0AXNh4iG2DEPwsHBOgC1%2FgpI5dIU&X-Amz-Signature=fee62127378de733a99d293e4313e65028989157ce7a52ed4ee9615a3719aa44&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5TSDOE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEkof3cMkRmDB9HwKE7FK2FBHw7pgLjWQjgzLR14XgLWAiEAswi93Ujueqbm4A%2FcgjoKwoo5IJvs%2FHjcGc0j0QGpGS0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIR4CwD1640a228yXircA4Bg88SuvcOCyZxejSZSMfq3tWNtM2SUwXUJ14a4RyFV%2BG14ETCfeMsFIiULsPLyNwK2ldPIoVEpM2XkyPaYKbKofkemHoqggYGpy8m3VsjvB1QYBynStbjhxMlxQRv01ua8rOUUM%2BauC3X0h%2FOK2FwXCByRBGj7tH9JhPsZNU23HvYs1p1ViOPMCeenKpdpN7OdtSSkMECbamf8gu22ulX164CqnRHo%2BshL0ur4Onx%2Fhx61hwociwmrN3PtkKDPJga7ekg2WNkIz5bkixRPR04cyNyBpwfomgrBmNNlc7rI%2BGU69X2OK5Zvm4bPl5F2TKBMoZIPNM9nFwvDBG6PQ0FvgGvlCZXr47qmVwalllqH8ps38hAQNP8fPsSmAYinqeaLf7FGCAmbQP6x2ZbDpnV3xmF70bUjlclyIPVxQlJ4Q3F0O%2Ba7Nm2pWIfrdktdjri%2BWv1i%2BadJgnnGYLqwvnqvaz1XmBSxp96NCwP7oN61RXx9B4ReERKsEncQ2b3wiEO1xd2g6GaxZrMJJuwYH8VSRP1V1i7Q2fvD4JSXdkRjvnJktahD9mVxhlGOqWlL78dtIL0uGNFrJCscvqpk%2FxTbRQFpC4XDQtXJPOUpVVL%2FMMjl5vlx9O%2FlMTlhMMzAxr4GOqUBuYo8iAI7quPC%2B18o0%2FggoVfpqyuAqkOVzNv77kD1%2BinCy2XumRb6MkhWe9H9cYEh4mZw0zLzUnkCZ1XjPW4edHuddjma0%2FFJp%2B%2BApWVHSIqCI37HKiGI50SgIUufI7G33Ny3HvGT5A2qORUzJFBZxdE5SHQPswbl3DwXlQT13%2Bsm%2FsYupRsZ8eEQ5MsQVsmq0AXNh4iG2DEPwsHBOgC1%2FgpI5dIU&X-Amz-Signature=f38daea58ce25283f490e3b2ad041d3922f07c54fc6d2eb2ee145cfa482fd72f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5TSDOE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEkof3cMkRmDB9HwKE7FK2FBHw7pgLjWQjgzLR14XgLWAiEAswi93Ujueqbm4A%2FcgjoKwoo5IJvs%2FHjcGc0j0QGpGS0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIR4CwD1640a228yXircA4Bg88SuvcOCyZxejSZSMfq3tWNtM2SUwXUJ14a4RyFV%2BG14ETCfeMsFIiULsPLyNwK2ldPIoVEpM2XkyPaYKbKofkemHoqggYGpy8m3VsjvB1QYBynStbjhxMlxQRv01ua8rOUUM%2BauC3X0h%2FOK2FwXCByRBGj7tH9JhPsZNU23HvYs1p1ViOPMCeenKpdpN7OdtSSkMECbamf8gu22ulX164CqnRHo%2BshL0ur4Onx%2Fhx61hwociwmrN3PtkKDPJga7ekg2WNkIz5bkixRPR04cyNyBpwfomgrBmNNlc7rI%2BGU69X2OK5Zvm4bPl5F2TKBMoZIPNM9nFwvDBG6PQ0FvgGvlCZXr47qmVwalllqH8ps38hAQNP8fPsSmAYinqeaLf7FGCAmbQP6x2ZbDpnV3xmF70bUjlclyIPVxQlJ4Q3F0O%2Ba7Nm2pWIfrdktdjri%2BWv1i%2BadJgnnGYLqwvnqvaz1XmBSxp96NCwP7oN61RXx9B4ReERKsEncQ2b3wiEO1xd2g6GaxZrMJJuwYH8VSRP1V1i7Q2fvD4JSXdkRjvnJktahD9mVxhlGOqWlL78dtIL0uGNFrJCscvqpk%2FxTbRQFpC4XDQtXJPOUpVVL%2FMMjl5vlx9O%2FlMTlhMMzAxr4GOqUBuYo8iAI7quPC%2B18o0%2FggoVfpqyuAqkOVzNv77kD1%2BinCy2XumRb6MkhWe9H9cYEh4mZw0zLzUnkCZ1XjPW4edHuddjma0%2FFJp%2B%2BApWVHSIqCI37HKiGI50SgIUufI7G33Ny3HvGT5A2qORUzJFBZxdE5SHQPswbl3DwXlQT13%2Bsm%2FsYupRsZ8eEQ5MsQVsmq0AXNh4iG2DEPwsHBOgC1%2FgpI5dIU&X-Amz-Signature=384fae9142285604559dedbd9816203fb5bacdceeba8a373659ef8c0511c821e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5TSDOE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEkof3cMkRmDB9HwKE7FK2FBHw7pgLjWQjgzLR14XgLWAiEAswi93Ujueqbm4A%2FcgjoKwoo5IJvs%2FHjcGc0j0QGpGS0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIR4CwD1640a228yXircA4Bg88SuvcOCyZxejSZSMfq3tWNtM2SUwXUJ14a4RyFV%2BG14ETCfeMsFIiULsPLyNwK2ldPIoVEpM2XkyPaYKbKofkemHoqggYGpy8m3VsjvB1QYBynStbjhxMlxQRv01ua8rOUUM%2BauC3X0h%2FOK2FwXCByRBGj7tH9JhPsZNU23HvYs1p1ViOPMCeenKpdpN7OdtSSkMECbamf8gu22ulX164CqnRHo%2BshL0ur4Onx%2Fhx61hwociwmrN3PtkKDPJga7ekg2WNkIz5bkixRPR04cyNyBpwfomgrBmNNlc7rI%2BGU69X2OK5Zvm4bPl5F2TKBMoZIPNM9nFwvDBG6PQ0FvgGvlCZXr47qmVwalllqH8ps38hAQNP8fPsSmAYinqeaLf7FGCAmbQP6x2ZbDpnV3xmF70bUjlclyIPVxQlJ4Q3F0O%2Ba7Nm2pWIfrdktdjri%2BWv1i%2BadJgnnGYLqwvnqvaz1XmBSxp96NCwP7oN61RXx9B4ReERKsEncQ2b3wiEO1xd2g6GaxZrMJJuwYH8VSRP1V1i7Q2fvD4JSXdkRjvnJktahD9mVxhlGOqWlL78dtIL0uGNFrJCscvqpk%2FxTbRQFpC4XDQtXJPOUpVVL%2FMMjl5vlx9O%2FlMTlhMMzAxr4GOqUBuYo8iAI7quPC%2B18o0%2FggoVfpqyuAqkOVzNv77kD1%2BinCy2XumRb6MkhWe9H9cYEh4mZw0zLzUnkCZ1XjPW4edHuddjma0%2FFJp%2B%2BApWVHSIqCI37HKiGI50SgIUufI7G33Ny3HvGT5A2qORUzJFBZxdE5SHQPswbl3DwXlQT13%2Bsm%2FsYupRsZ8eEQ5MsQVsmq0AXNh4iG2DEPwsHBOgC1%2FgpI5dIU&X-Amz-Signature=abb3b14d4009d0a49bf289125c5320b488ab550d2c66a61161da36fa79798f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5TSDOE%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T150859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIEkof3cMkRmDB9HwKE7FK2FBHw7pgLjWQjgzLR14XgLWAiEAswi93Ujueqbm4A%2FcgjoKwoo5IJvs%2FHjcGc0j0QGpGS0qiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIR4CwD1640a228yXircA4Bg88SuvcOCyZxejSZSMfq3tWNtM2SUwXUJ14a4RyFV%2BG14ETCfeMsFIiULsPLyNwK2ldPIoVEpM2XkyPaYKbKofkemHoqggYGpy8m3VsjvB1QYBynStbjhxMlxQRv01ua8rOUUM%2BauC3X0h%2FOK2FwXCByRBGj7tH9JhPsZNU23HvYs1p1ViOPMCeenKpdpN7OdtSSkMECbamf8gu22ulX164CqnRHo%2BshL0ur4Onx%2Fhx61hwociwmrN3PtkKDPJga7ekg2WNkIz5bkixRPR04cyNyBpwfomgrBmNNlc7rI%2BGU69X2OK5Zvm4bPl5F2TKBMoZIPNM9nFwvDBG6PQ0FvgGvlCZXr47qmVwalllqH8ps38hAQNP8fPsSmAYinqeaLf7FGCAmbQP6x2ZbDpnV3xmF70bUjlclyIPVxQlJ4Q3F0O%2Ba7Nm2pWIfrdktdjri%2BWv1i%2BadJgnnGYLqwvnqvaz1XmBSxp96NCwP7oN61RXx9B4ReERKsEncQ2b3wiEO1xd2g6GaxZrMJJuwYH8VSRP1V1i7Q2fvD4JSXdkRjvnJktahD9mVxhlGOqWlL78dtIL0uGNFrJCscvqpk%2FxTbRQFpC4XDQtXJPOUpVVL%2FMMjl5vlx9O%2FlMTlhMMzAxr4GOqUBuYo8iAI7quPC%2B18o0%2FggoVfpqyuAqkOVzNv77kD1%2BinCy2XumRb6MkhWe9H9cYEh4mZw0zLzUnkCZ1XjPW4edHuddjma0%2FFJp%2B%2BApWVHSIqCI37HKiGI50SgIUufI7G33Ny3HvGT5A2qORUzJFBZxdE5SHQPswbl3DwXlQT13%2Bsm%2FsYupRsZ8eEQ5MsQVsmq0AXNh4iG2DEPwsHBOgC1%2FgpI5dIU&X-Amz-Signature=7c0c327fcf9293031768a12a2d8043c6f645004b3a7746eec901c98600de7af0&X-Amz-SignedHeaders=host&x-id=GetObject)
