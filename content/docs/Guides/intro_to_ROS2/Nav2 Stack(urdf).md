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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICPM5UO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSlYPgVjj8sFgXjXVN%2F96U0wBXfJQt%2BDtJrbcPb%2F75KAIhAOa2lopUniHQtCJo6uGE4XqWNvUHXj3InSPaV5CL791ZKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2NfyEgRDPv8pqvwoq3ANe2x65z5CSNXyBlb2buHYamnVw6Aw9ML3DzNmHHlQsTDGI7QrjMzw2AR%2B86aa0DFP51q2q46tzcTIqbQUUVyViq4EdZrfCde9Vy0a2FsL3izhB3sj%2FlrfGLkwrR0NOpXpauKQu0abMI0olySlQ1CcYYUcm0SBZW%2By2ACqUloSMUtKb7lCT4XrWvEnRPBwnOqQ9%2By6gr0mpKD8PPF1Lm0TxTInjf4BGhkJS0yYesaUkZoCidhFGX9EymIs0A1SohRs0u%2FtWEtMzd9%2BbMDrSKFXdpmZHnwz1tLUhMCo2Jns4OBw%2BK4R%2FkkC%2B0goTd76YesZGDN0u1nKv4MnY1OI5QkInscBmISDisdPtWeogCJp2MHDSxlutDsIIarTcWoexQnn9vikU6ra2YfTh%2B7X%2Fs6i5aReDTp3LtBmxx%2BKSjTUZ5fQYCdZgwgctwnWc27mX6ngH4z4Dtw%2Bp826FNR8qzAHLYF7imDr08L%2BaJoDgKopFloqKCx%2B4XsYLfE1g%2BLZyvx2qlpOhH1jvi9Un5NrHwB0CBnuTBxWyUuP8d3lxBZtKZ5DevwmOEiel%2BW%2BygeepuPlwwLZftcw9D29w8NfOs7TTnaMaL8V37%2FrEMzDiFM5Q3IhOsaUk3tlLk9EgzjCs3oW%2FBjqkAYjELGKHUGQFaKcZnmqePhoue8KFF1%2Bfycg%2FokPgV%2BshwIOeNhWMWs60%2BkAyjMaFsegBaK7OrDBPUj9otwr9jNXghiDHBJU7WV3xx6Ak1iARuA%2BI%2Fevb1qYPp4SEJG4124HZ9xOBzjn4xpTivjUywRGJMCHbqHnGUKrNzYVnfUawnuFC4X3oosLINPNX2007pPPg1OrYO2OZersiaZN3Th6CyAiO&X-Amz-Signature=2cd594b70e3d8bf8d56146363a6d2955119c66016be8a4eb9cc961c99dc3ef86&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICPM5UO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSlYPgVjj8sFgXjXVN%2F96U0wBXfJQt%2BDtJrbcPb%2F75KAIhAOa2lopUniHQtCJo6uGE4XqWNvUHXj3InSPaV5CL791ZKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2NfyEgRDPv8pqvwoq3ANe2x65z5CSNXyBlb2buHYamnVw6Aw9ML3DzNmHHlQsTDGI7QrjMzw2AR%2B86aa0DFP51q2q46tzcTIqbQUUVyViq4EdZrfCde9Vy0a2FsL3izhB3sj%2FlrfGLkwrR0NOpXpauKQu0abMI0olySlQ1CcYYUcm0SBZW%2By2ACqUloSMUtKb7lCT4XrWvEnRPBwnOqQ9%2By6gr0mpKD8PPF1Lm0TxTInjf4BGhkJS0yYesaUkZoCidhFGX9EymIs0A1SohRs0u%2FtWEtMzd9%2BbMDrSKFXdpmZHnwz1tLUhMCo2Jns4OBw%2BK4R%2FkkC%2B0goTd76YesZGDN0u1nKv4MnY1OI5QkInscBmISDisdPtWeogCJp2MHDSxlutDsIIarTcWoexQnn9vikU6ra2YfTh%2B7X%2Fs6i5aReDTp3LtBmxx%2BKSjTUZ5fQYCdZgwgctwnWc27mX6ngH4z4Dtw%2Bp826FNR8qzAHLYF7imDr08L%2BaJoDgKopFloqKCx%2B4XsYLfE1g%2BLZyvx2qlpOhH1jvi9Un5NrHwB0CBnuTBxWyUuP8d3lxBZtKZ5DevwmOEiel%2BW%2BygeepuPlwwLZftcw9D29w8NfOs7TTnaMaL8V37%2FrEMzDiFM5Q3IhOsaUk3tlLk9EgzjCs3oW%2FBjqkAYjELGKHUGQFaKcZnmqePhoue8KFF1%2Bfycg%2FokPgV%2BshwIOeNhWMWs60%2BkAyjMaFsegBaK7OrDBPUj9otwr9jNXghiDHBJU7WV3xx6Ak1iARuA%2BI%2Fevb1qYPp4SEJG4124HZ9xOBzjn4xpTivjUywRGJMCHbqHnGUKrNzYVnfUawnuFC4X3oosLINPNX2007pPPg1OrYO2OZersiaZN3Th6CyAiO&X-Amz-Signature=81792732501d79856e1f5e92255c8660b37a9eaf959738f07d5cefc55d885b92&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICPM5UO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSlYPgVjj8sFgXjXVN%2F96U0wBXfJQt%2BDtJrbcPb%2F75KAIhAOa2lopUniHQtCJo6uGE4XqWNvUHXj3InSPaV5CL791ZKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2NfyEgRDPv8pqvwoq3ANe2x65z5CSNXyBlb2buHYamnVw6Aw9ML3DzNmHHlQsTDGI7QrjMzw2AR%2B86aa0DFP51q2q46tzcTIqbQUUVyViq4EdZrfCde9Vy0a2FsL3izhB3sj%2FlrfGLkwrR0NOpXpauKQu0abMI0olySlQ1CcYYUcm0SBZW%2By2ACqUloSMUtKb7lCT4XrWvEnRPBwnOqQ9%2By6gr0mpKD8PPF1Lm0TxTInjf4BGhkJS0yYesaUkZoCidhFGX9EymIs0A1SohRs0u%2FtWEtMzd9%2BbMDrSKFXdpmZHnwz1tLUhMCo2Jns4OBw%2BK4R%2FkkC%2B0goTd76YesZGDN0u1nKv4MnY1OI5QkInscBmISDisdPtWeogCJp2MHDSxlutDsIIarTcWoexQnn9vikU6ra2YfTh%2B7X%2Fs6i5aReDTp3LtBmxx%2BKSjTUZ5fQYCdZgwgctwnWc27mX6ngH4z4Dtw%2Bp826FNR8qzAHLYF7imDr08L%2BaJoDgKopFloqKCx%2B4XsYLfE1g%2BLZyvx2qlpOhH1jvi9Un5NrHwB0CBnuTBxWyUuP8d3lxBZtKZ5DevwmOEiel%2BW%2BygeepuPlwwLZftcw9D29w8NfOs7TTnaMaL8V37%2FrEMzDiFM5Q3IhOsaUk3tlLk9EgzjCs3oW%2FBjqkAYjELGKHUGQFaKcZnmqePhoue8KFF1%2Bfycg%2FokPgV%2BshwIOeNhWMWs60%2BkAyjMaFsegBaK7OrDBPUj9otwr9jNXghiDHBJU7WV3xx6Ak1iARuA%2BI%2Fevb1qYPp4SEJG4124HZ9xOBzjn4xpTivjUywRGJMCHbqHnGUKrNzYVnfUawnuFC4X3oosLINPNX2007pPPg1OrYO2OZersiaZN3Th6CyAiO&X-Amz-Signature=1659ba8802f52ceca509a86455002196ab83c34c22dc617c549034bc13049376&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICPM5UO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSlYPgVjj8sFgXjXVN%2F96U0wBXfJQt%2BDtJrbcPb%2F75KAIhAOa2lopUniHQtCJo6uGE4XqWNvUHXj3InSPaV5CL791ZKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2NfyEgRDPv8pqvwoq3ANe2x65z5CSNXyBlb2buHYamnVw6Aw9ML3DzNmHHlQsTDGI7QrjMzw2AR%2B86aa0DFP51q2q46tzcTIqbQUUVyViq4EdZrfCde9Vy0a2FsL3izhB3sj%2FlrfGLkwrR0NOpXpauKQu0abMI0olySlQ1CcYYUcm0SBZW%2By2ACqUloSMUtKb7lCT4XrWvEnRPBwnOqQ9%2By6gr0mpKD8PPF1Lm0TxTInjf4BGhkJS0yYesaUkZoCidhFGX9EymIs0A1SohRs0u%2FtWEtMzd9%2BbMDrSKFXdpmZHnwz1tLUhMCo2Jns4OBw%2BK4R%2FkkC%2B0goTd76YesZGDN0u1nKv4MnY1OI5QkInscBmISDisdPtWeogCJp2MHDSxlutDsIIarTcWoexQnn9vikU6ra2YfTh%2B7X%2Fs6i5aReDTp3LtBmxx%2BKSjTUZ5fQYCdZgwgctwnWc27mX6ngH4z4Dtw%2Bp826FNR8qzAHLYF7imDr08L%2BaJoDgKopFloqKCx%2B4XsYLfE1g%2BLZyvx2qlpOhH1jvi9Un5NrHwB0CBnuTBxWyUuP8d3lxBZtKZ5DevwmOEiel%2BW%2BygeepuPlwwLZftcw9D29w8NfOs7TTnaMaL8V37%2FrEMzDiFM5Q3IhOsaUk3tlLk9EgzjCs3oW%2FBjqkAYjELGKHUGQFaKcZnmqePhoue8KFF1%2Bfycg%2FokPgV%2BshwIOeNhWMWs60%2BkAyjMaFsegBaK7OrDBPUj9otwr9jNXghiDHBJU7WV3xx6Ak1iARuA%2BI%2Fevb1qYPp4SEJG4124HZ9xOBzjn4xpTivjUywRGJMCHbqHnGUKrNzYVnfUawnuFC4X3oosLINPNX2007pPPg1OrYO2OZersiaZN3Th6CyAiO&X-Amz-Signature=0d21ba5a3ea6bbdad697f6c71512e4bed0da67559ec64632844b3753292f884a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICPM5UO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSlYPgVjj8sFgXjXVN%2F96U0wBXfJQt%2BDtJrbcPb%2F75KAIhAOa2lopUniHQtCJo6uGE4XqWNvUHXj3InSPaV5CL791ZKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2NfyEgRDPv8pqvwoq3ANe2x65z5CSNXyBlb2buHYamnVw6Aw9ML3DzNmHHlQsTDGI7QrjMzw2AR%2B86aa0DFP51q2q46tzcTIqbQUUVyViq4EdZrfCde9Vy0a2FsL3izhB3sj%2FlrfGLkwrR0NOpXpauKQu0abMI0olySlQ1CcYYUcm0SBZW%2By2ACqUloSMUtKb7lCT4XrWvEnRPBwnOqQ9%2By6gr0mpKD8PPF1Lm0TxTInjf4BGhkJS0yYesaUkZoCidhFGX9EymIs0A1SohRs0u%2FtWEtMzd9%2BbMDrSKFXdpmZHnwz1tLUhMCo2Jns4OBw%2BK4R%2FkkC%2B0goTd76YesZGDN0u1nKv4MnY1OI5QkInscBmISDisdPtWeogCJp2MHDSxlutDsIIarTcWoexQnn9vikU6ra2YfTh%2B7X%2Fs6i5aReDTp3LtBmxx%2BKSjTUZ5fQYCdZgwgctwnWc27mX6ngH4z4Dtw%2Bp826FNR8qzAHLYF7imDr08L%2BaJoDgKopFloqKCx%2B4XsYLfE1g%2BLZyvx2qlpOhH1jvi9Un5NrHwB0CBnuTBxWyUuP8d3lxBZtKZ5DevwmOEiel%2BW%2BygeepuPlwwLZftcw9D29w8NfOs7TTnaMaL8V37%2FrEMzDiFM5Q3IhOsaUk3tlLk9EgzjCs3oW%2FBjqkAYjELGKHUGQFaKcZnmqePhoue8KFF1%2Bfycg%2FokPgV%2BshwIOeNhWMWs60%2BkAyjMaFsegBaK7OrDBPUj9otwr9jNXghiDHBJU7WV3xx6Ak1iARuA%2BI%2Fevb1qYPp4SEJG4124HZ9xOBzjn4xpTivjUywRGJMCHbqHnGUKrNzYVnfUawnuFC4X3oosLINPNX2007pPPg1OrYO2OZersiaZN3Th6CyAiO&X-Amz-Signature=d11305f8727b3ef9cd314831c158b776fb9bcba6da3e35d4377177922e0a66a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TICPM5UO%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSlYPgVjj8sFgXjXVN%2F96U0wBXfJQt%2BDtJrbcPb%2F75KAIhAOa2lopUniHQtCJo6uGE4XqWNvUHXj3InSPaV5CL791ZKogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2NfyEgRDPv8pqvwoq3ANe2x65z5CSNXyBlb2buHYamnVw6Aw9ML3DzNmHHlQsTDGI7QrjMzw2AR%2B86aa0DFP51q2q46tzcTIqbQUUVyViq4EdZrfCde9Vy0a2FsL3izhB3sj%2FlrfGLkwrR0NOpXpauKQu0abMI0olySlQ1CcYYUcm0SBZW%2By2ACqUloSMUtKb7lCT4XrWvEnRPBwnOqQ9%2By6gr0mpKD8PPF1Lm0TxTInjf4BGhkJS0yYesaUkZoCidhFGX9EymIs0A1SohRs0u%2FtWEtMzd9%2BbMDrSKFXdpmZHnwz1tLUhMCo2Jns4OBw%2BK4R%2FkkC%2B0goTd76YesZGDN0u1nKv4MnY1OI5QkInscBmISDisdPtWeogCJp2MHDSxlutDsIIarTcWoexQnn9vikU6ra2YfTh%2B7X%2Fs6i5aReDTp3LtBmxx%2BKSjTUZ5fQYCdZgwgctwnWc27mX6ngH4z4Dtw%2Bp826FNR8qzAHLYF7imDr08L%2BaJoDgKopFloqKCx%2B4XsYLfE1g%2BLZyvx2qlpOhH1jvi9Un5NrHwB0CBnuTBxWyUuP8d3lxBZtKZ5DevwmOEiel%2BW%2BygeepuPlwwLZftcw9D29w8NfOs7TTnaMaL8V37%2FrEMzDiFM5Q3IhOsaUk3tlLk9EgzjCs3oW%2FBjqkAYjELGKHUGQFaKcZnmqePhoue8KFF1%2Bfycg%2FokPgV%2BshwIOeNhWMWs60%2BkAyjMaFsegBaK7OrDBPUj9otwr9jNXghiDHBJU7WV3xx6Ak1iARuA%2BI%2Fevb1qYPp4SEJG4124HZ9xOBzjn4xpTivjUywRGJMCHbqHnGUKrNzYVnfUawnuFC4X3oosLINPNX2007pPPg1OrYO2OZersiaZN3Th6CyAiO&X-Amz-Signature=7661392e30430eab36eb4e0c5dccd01250c91f6907b00f179188177f9ac6ed7d&X-Amz-SignedHeaders=host&x-id=GetObject)
