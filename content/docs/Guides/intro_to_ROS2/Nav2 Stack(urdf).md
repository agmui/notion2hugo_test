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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E7UPYZQ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIE0RBuiEcBIQCjUFewQftF9QB1k6dh8rvEGQADF923t%2FAiEAjGR2Ze99l1TdaRGgewXzRHJfQxIInWgew5%2Bi3WPbBX4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuiKu%2F6mWAatXda2ircA6%2FFYfxuamlGzvFCTUIpZMDr2uhQGpyVx1DU1MwKhlIuJS7IE7YPy3aGfUNkpU9JV1MuLEex6P4MxataIM4e8DMdYskqjR39FEh%2B2xbxAlwRzO3vMMG5aXOvGAVhWR2PJ8fhDP4gL7Et%2BgEWDArofgnToF1Deb2zSusAmfuBIy2KlKXwsWzVIC0yH1xz0LweovPIvpUSmkGtfDUQcjKUTpfDOoxXgnW2DpZQ5rx11w03cpU6mPIGB%2F%2FZ4K9k6htEZ1vFvyAQ5s28Ys4piGIGKPB9l%2FTCXnk8FPUI2u2PqLaLKPm%2BWi1S0uNV39wjLx%2BX2n8XWlJeKPosy3GlnPSsQNkcVEUEjp16N6%2BUOVFNrNzys18bIZsEDXXFgIiEyJ4xEFzLAQRshKtPiufDWD%2Fieh2Fs2wwkRhW4pRinGghNcIogGBc%2BMKhaAwfgRfd%2BxXBlOclQq7LObWKGR3QAp8VFRN7xZtpkltWZSQV8K0gqg4Fw%2BFyASZgrKAzij8NfLlaBM4CCWH1gqaR6Z8cc2qbtUdZB1W%2B9YT%2F5QTIGQYgzZMtzvc89LGBko0RUFkgYnn9LBVumepWXvdcm0BlmCoZcp%2BD64Kvet55EhfxNpwRdBKUurGduCcOgGoas8zaMMuch8EGOqUBdw13ZsB%2FNhCWAnqzGUsy8DpOUCUIEaqDTOWP1PhmPF62vV04p28LhpglCQ6CSOHVlW9PQ5MXihCMqvCIzxcQTjdKz1Prwt113DKg4PApPXd2W3ZokNH2gFa03BhHSnHleiUuS0UDOqI3mHf7QSafiXTeN9NKMl0FCtrtADt7fa2vZ7Digkjq26ofX3f4nip5s2H8IA1CpKNAKKiesnuejihxtwrZ&X-Amz-Signature=362638f0e5f6ae7f69a765d7aadf3834c4e916472f12460900d7131db8106463&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E7UPYZQ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIE0RBuiEcBIQCjUFewQftF9QB1k6dh8rvEGQADF923t%2FAiEAjGR2Ze99l1TdaRGgewXzRHJfQxIInWgew5%2Bi3WPbBX4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuiKu%2F6mWAatXda2ircA6%2FFYfxuamlGzvFCTUIpZMDr2uhQGpyVx1DU1MwKhlIuJS7IE7YPy3aGfUNkpU9JV1MuLEex6P4MxataIM4e8DMdYskqjR39FEh%2B2xbxAlwRzO3vMMG5aXOvGAVhWR2PJ8fhDP4gL7Et%2BgEWDArofgnToF1Deb2zSusAmfuBIy2KlKXwsWzVIC0yH1xz0LweovPIvpUSmkGtfDUQcjKUTpfDOoxXgnW2DpZQ5rx11w03cpU6mPIGB%2F%2FZ4K9k6htEZ1vFvyAQ5s28Ys4piGIGKPB9l%2FTCXnk8FPUI2u2PqLaLKPm%2BWi1S0uNV39wjLx%2BX2n8XWlJeKPosy3GlnPSsQNkcVEUEjp16N6%2BUOVFNrNzys18bIZsEDXXFgIiEyJ4xEFzLAQRshKtPiufDWD%2Fieh2Fs2wwkRhW4pRinGghNcIogGBc%2BMKhaAwfgRfd%2BxXBlOclQq7LObWKGR3QAp8VFRN7xZtpkltWZSQV8K0gqg4Fw%2BFyASZgrKAzij8NfLlaBM4CCWH1gqaR6Z8cc2qbtUdZB1W%2B9YT%2F5QTIGQYgzZMtzvc89LGBko0RUFkgYnn9LBVumepWXvdcm0BlmCoZcp%2BD64Kvet55EhfxNpwRdBKUurGduCcOgGoas8zaMMuch8EGOqUBdw13ZsB%2FNhCWAnqzGUsy8DpOUCUIEaqDTOWP1PhmPF62vV04p28LhpglCQ6CSOHVlW9PQ5MXihCMqvCIzxcQTjdKz1Prwt113DKg4PApPXd2W3ZokNH2gFa03BhHSnHleiUuS0UDOqI3mHf7QSafiXTeN9NKMl0FCtrtADt7fa2vZ7Digkjq26ofX3f4nip5s2H8IA1CpKNAKKiesnuejihxtwrZ&X-Amz-Signature=da6706d444a5e7c20e1861117ddfa0d95b54d226e15fd1985fa2331b69298305&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E7UPYZQ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIE0RBuiEcBIQCjUFewQftF9QB1k6dh8rvEGQADF923t%2FAiEAjGR2Ze99l1TdaRGgewXzRHJfQxIInWgew5%2Bi3WPbBX4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuiKu%2F6mWAatXda2ircA6%2FFYfxuamlGzvFCTUIpZMDr2uhQGpyVx1DU1MwKhlIuJS7IE7YPy3aGfUNkpU9JV1MuLEex6P4MxataIM4e8DMdYskqjR39FEh%2B2xbxAlwRzO3vMMG5aXOvGAVhWR2PJ8fhDP4gL7Et%2BgEWDArofgnToF1Deb2zSusAmfuBIy2KlKXwsWzVIC0yH1xz0LweovPIvpUSmkGtfDUQcjKUTpfDOoxXgnW2DpZQ5rx11w03cpU6mPIGB%2F%2FZ4K9k6htEZ1vFvyAQ5s28Ys4piGIGKPB9l%2FTCXnk8FPUI2u2PqLaLKPm%2BWi1S0uNV39wjLx%2BX2n8XWlJeKPosy3GlnPSsQNkcVEUEjp16N6%2BUOVFNrNzys18bIZsEDXXFgIiEyJ4xEFzLAQRshKtPiufDWD%2Fieh2Fs2wwkRhW4pRinGghNcIogGBc%2BMKhaAwfgRfd%2BxXBlOclQq7LObWKGR3QAp8VFRN7xZtpkltWZSQV8K0gqg4Fw%2BFyASZgrKAzij8NfLlaBM4CCWH1gqaR6Z8cc2qbtUdZB1W%2B9YT%2F5QTIGQYgzZMtzvc89LGBko0RUFkgYnn9LBVumepWXvdcm0BlmCoZcp%2BD64Kvet55EhfxNpwRdBKUurGduCcOgGoas8zaMMuch8EGOqUBdw13ZsB%2FNhCWAnqzGUsy8DpOUCUIEaqDTOWP1PhmPF62vV04p28LhpglCQ6CSOHVlW9PQ5MXihCMqvCIzxcQTjdKz1Prwt113DKg4PApPXd2W3ZokNH2gFa03BhHSnHleiUuS0UDOqI3mHf7QSafiXTeN9NKMl0FCtrtADt7fa2vZ7Digkjq26ofX3f4nip5s2H8IA1CpKNAKKiesnuejihxtwrZ&X-Amz-Signature=0a5193d483ce1eec70bdc613750626743c431030ac7ad11019db227dcc9e27af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E7UPYZQ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIE0RBuiEcBIQCjUFewQftF9QB1k6dh8rvEGQADF923t%2FAiEAjGR2Ze99l1TdaRGgewXzRHJfQxIInWgew5%2Bi3WPbBX4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuiKu%2F6mWAatXda2ircA6%2FFYfxuamlGzvFCTUIpZMDr2uhQGpyVx1DU1MwKhlIuJS7IE7YPy3aGfUNkpU9JV1MuLEex6P4MxataIM4e8DMdYskqjR39FEh%2B2xbxAlwRzO3vMMG5aXOvGAVhWR2PJ8fhDP4gL7Et%2BgEWDArofgnToF1Deb2zSusAmfuBIy2KlKXwsWzVIC0yH1xz0LweovPIvpUSmkGtfDUQcjKUTpfDOoxXgnW2DpZQ5rx11w03cpU6mPIGB%2F%2FZ4K9k6htEZ1vFvyAQ5s28Ys4piGIGKPB9l%2FTCXnk8FPUI2u2PqLaLKPm%2BWi1S0uNV39wjLx%2BX2n8XWlJeKPosy3GlnPSsQNkcVEUEjp16N6%2BUOVFNrNzys18bIZsEDXXFgIiEyJ4xEFzLAQRshKtPiufDWD%2Fieh2Fs2wwkRhW4pRinGghNcIogGBc%2BMKhaAwfgRfd%2BxXBlOclQq7LObWKGR3QAp8VFRN7xZtpkltWZSQV8K0gqg4Fw%2BFyASZgrKAzij8NfLlaBM4CCWH1gqaR6Z8cc2qbtUdZB1W%2B9YT%2F5QTIGQYgzZMtzvc89LGBko0RUFkgYnn9LBVumepWXvdcm0BlmCoZcp%2BD64Kvet55EhfxNpwRdBKUurGduCcOgGoas8zaMMuch8EGOqUBdw13ZsB%2FNhCWAnqzGUsy8DpOUCUIEaqDTOWP1PhmPF62vV04p28LhpglCQ6CSOHVlW9PQ5MXihCMqvCIzxcQTjdKz1Prwt113DKg4PApPXd2W3ZokNH2gFa03BhHSnHleiUuS0UDOqI3mHf7QSafiXTeN9NKMl0FCtrtADt7fa2vZ7Digkjq26ofX3f4nip5s2H8IA1CpKNAKKiesnuejihxtwrZ&X-Amz-Signature=836fdbecb0b53aa58080e2a7653997632cd9b8750819f57926ee4431135c1c01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E7UPYZQ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIE0RBuiEcBIQCjUFewQftF9QB1k6dh8rvEGQADF923t%2FAiEAjGR2Ze99l1TdaRGgewXzRHJfQxIInWgew5%2Bi3WPbBX4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuiKu%2F6mWAatXda2ircA6%2FFYfxuamlGzvFCTUIpZMDr2uhQGpyVx1DU1MwKhlIuJS7IE7YPy3aGfUNkpU9JV1MuLEex6P4MxataIM4e8DMdYskqjR39FEh%2B2xbxAlwRzO3vMMG5aXOvGAVhWR2PJ8fhDP4gL7Et%2BgEWDArofgnToF1Deb2zSusAmfuBIy2KlKXwsWzVIC0yH1xz0LweovPIvpUSmkGtfDUQcjKUTpfDOoxXgnW2DpZQ5rx11w03cpU6mPIGB%2F%2FZ4K9k6htEZ1vFvyAQ5s28Ys4piGIGKPB9l%2FTCXnk8FPUI2u2PqLaLKPm%2BWi1S0uNV39wjLx%2BX2n8XWlJeKPosy3GlnPSsQNkcVEUEjp16N6%2BUOVFNrNzys18bIZsEDXXFgIiEyJ4xEFzLAQRshKtPiufDWD%2Fieh2Fs2wwkRhW4pRinGghNcIogGBc%2BMKhaAwfgRfd%2BxXBlOclQq7LObWKGR3QAp8VFRN7xZtpkltWZSQV8K0gqg4Fw%2BFyASZgrKAzij8NfLlaBM4CCWH1gqaR6Z8cc2qbtUdZB1W%2B9YT%2F5QTIGQYgzZMtzvc89LGBko0RUFkgYnn9LBVumepWXvdcm0BlmCoZcp%2BD64Kvet55EhfxNpwRdBKUurGduCcOgGoas8zaMMuch8EGOqUBdw13ZsB%2FNhCWAnqzGUsy8DpOUCUIEaqDTOWP1PhmPF62vV04p28LhpglCQ6CSOHVlW9PQ5MXihCMqvCIzxcQTjdKz1Prwt113DKg4PApPXd2W3ZokNH2gFa03BhHSnHleiUuS0UDOqI3mHf7QSafiXTeN9NKMl0FCtrtADt7fa2vZ7Digkjq26ofX3f4nip5s2H8IA1CpKNAKKiesnuejihxtwrZ&X-Amz-Signature=b21f61e8837e56cf1ec4f72ce939bb6d0266b7f5f5fe4a45597cb56002b8fc95&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E7UPYZQ%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T110759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIE0RBuiEcBIQCjUFewQftF9QB1k6dh8rvEGQADF923t%2FAiEAjGR2Ze99l1TdaRGgewXzRHJfQxIInWgew5%2Bi3WPbBX4qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuiKu%2F6mWAatXda2ircA6%2FFYfxuamlGzvFCTUIpZMDr2uhQGpyVx1DU1MwKhlIuJS7IE7YPy3aGfUNkpU9JV1MuLEex6P4MxataIM4e8DMdYskqjR39FEh%2B2xbxAlwRzO3vMMG5aXOvGAVhWR2PJ8fhDP4gL7Et%2BgEWDArofgnToF1Deb2zSusAmfuBIy2KlKXwsWzVIC0yH1xz0LweovPIvpUSmkGtfDUQcjKUTpfDOoxXgnW2DpZQ5rx11w03cpU6mPIGB%2F%2FZ4K9k6htEZ1vFvyAQ5s28Ys4piGIGKPB9l%2FTCXnk8FPUI2u2PqLaLKPm%2BWi1S0uNV39wjLx%2BX2n8XWlJeKPosy3GlnPSsQNkcVEUEjp16N6%2BUOVFNrNzys18bIZsEDXXFgIiEyJ4xEFzLAQRshKtPiufDWD%2Fieh2Fs2wwkRhW4pRinGghNcIogGBc%2BMKhaAwfgRfd%2BxXBlOclQq7LObWKGR3QAp8VFRN7xZtpkltWZSQV8K0gqg4Fw%2BFyASZgrKAzij8NfLlaBM4CCWH1gqaR6Z8cc2qbtUdZB1W%2B9YT%2F5QTIGQYgzZMtzvc89LGBko0RUFkgYnn9LBVumepWXvdcm0BlmCoZcp%2BD64Kvet55EhfxNpwRdBKUurGduCcOgGoas8zaMMuch8EGOqUBdw13ZsB%2FNhCWAnqzGUsy8DpOUCUIEaqDTOWP1PhmPF62vV04p28LhpglCQ6CSOHVlW9PQ5MXihCMqvCIzxcQTjdKz1Prwt113DKg4PApPXd2W3ZokNH2gFa03BhHSnHleiUuS0UDOqI3mHf7QSafiXTeN9NKMl0FCtrtADt7fa2vZ7Digkjq26ofX3f4nip5s2H8IA1CpKNAKKiesnuejihxtwrZ&X-Amz-Signature=12b51c44310845fb64dee924a1ded18a040fa2f363cf10ce7b37c4b84f7e7ac3&X-Amz-SignedHeaders=host&x-id=GetObject)
