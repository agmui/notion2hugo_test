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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGP2MNQM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJUat%2BT%2FXkAEru6DXti8X5%2Bl79yodMBr%2FG8RXtN%2FgCPgIhANYGfTPqd96oNxgs67TK7rKrwjDcWxXNZMa2oFp9Bg51KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeH%2BH9S%2BDcr8N8dRMq3AMZUT2RuI1OmduX3znP9t%2BvHmhJSxwVX3%2F8B5NVcDnzLTLKer7HDYA%2FjosFH80vKD2UEGeHurXj%2BXqMN2LHHHHRpGu1Lh36Ey5lfDcrfJPJc%2Bc9Eot59FFVe1PK6cCoQd4Na35%2FAnsNdWFrqertQdVzy8%2FBubhRlb8PxPg5NA%2BcmKszaRbhuS3bVXNJ6kVcCSo%2BIHhnQCuHBuxcu1N233dSmspuZRfCb5ft%2FVHZ11p6ti7Ke5yMCJepGcm80wXXHpxv6iKXcqBvLNGMEGbg1dvfTwdh8Rydv8j%2FKk7kpuG6duv%2BKi4TmR07CQmTQGoWpfIacdobaojysyuoIR6LSYBPquIU%2F0FxPEKkzXze28cdtO43WSIG9v%2BUa6uKssZoLB%2Fkdco1412BoSxkvyrg%2B9ohcY4ZE%2Bimn%2B3U7mO99%2FJsF7vVmMC6j20PTfye1rzlezGn44R3En1AJuXjv%2B%2FJ5vJD%2FsDryW7wqVIzPN57xY8r8XnV9Bs8y9Y6W7UkCYtza9Y8%2BJlfVQxUw3iw%2F2BsCk%2FOx3AYyI45JetU0V%2FOMSyXx2QxOArIe4w%2FfATBXrDI%2FSmHTsnrfCmnBfYFfgjH4iWY7FAu%2BMhfJTkJSdIbubWNFiGZIAVodIx57eGRezDZvqC9BjqkAcfI4HVrn5A7QGgAXIFobzsFMIFxN%2BbHkzz1767utZhmGC9DBS7sTrE%2Bfe5vBvOBJ%2BsT3oZLYIARPkE4m2veOIykGG476AtjwEJo7d3SLlu0y7k%2BcgMBbhEOj%2BiNTgzpmIlwIPz2awEN5fXctKZX6l%2BOUOEz7Agzv%2FMAdkXN9eAFKuWf%2BAwYtcRBcE78QOx5PPHJyHF3BXTwggCgIVYNLc9Wvamk&X-Amz-Signature=f68adb54bc2bd1d1df5826d8cc0a4dbdb914e7d9e00c0c04c68d32ee62b9c48a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGP2MNQM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJUat%2BT%2FXkAEru6DXti8X5%2Bl79yodMBr%2FG8RXtN%2FgCPgIhANYGfTPqd96oNxgs67TK7rKrwjDcWxXNZMa2oFp9Bg51KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeH%2BH9S%2BDcr8N8dRMq3AMZUT2RuI1OmduX3znP9t%2BvHmhJSxwVX3%2F8B5NVcDnzLTLKer7HDYA%2FjosFH80vKD2UEGeHurXj%2BXqMN2LHHHHRpGu1Lh36Ey5lfDcrfJPJc%2Bc9Eot59FFVe1PK6cCoQd4Na35%2FAnsNdWFrqertQdVzy8%2FBubhRlb8PxPg5NA%2BcmKszaRbhuS3bVXNJ6kVcCSo%2BIHhnQCuHBuxcu1N233dSmspuZRfCb5ft%2FVHZ11p6ti7Ke5yMCJepGcm80wXXHpxv6iKXcqBvLNGMEGbg1dvfTwdh8Rydv8j%2FKk7kpuG6duv%2BKi4TmR07CQmTQGoWpfIacdobaojysyuoIR6LSYBPquIU%2F0FxPEKkzXze28cdtO43WSIG9v%2BUa6uKssZoLB%2Fkdco1412BoSxkvyrg%2B9ohcY4ZE%2Bimn%2B3U7mO99%2FJsF7vVmMC6j20PTfye1rzlezGn44R3En1AJuXjv%2B%2FJ5vJD%2FsDryW7wqVIzPN57xY8r8XnV9Bs8y9Y6W7UkCYtza9Y8%2BJlfVQxUw3iw%2F2BsCk%2FOx3AYyI45JetU0V%2FOMSyXx2QxOArIe4w%2FfATBXrDI%2FSmHTsnrfCmnBfYFfgjH4iWY7FAu%2BMhfJTkJSdIbubWNFiGZIAVodIx57eGRezDZvqC9BjqkAcfI4HVrn5A7QGgAXIFobzsFMIFxN%2BbHkzz1767utZhmGC9DBS7sTrE%2Bfe5vBvOBJ%2BsT3oZLYIARPkE4m2veOIykGG476AtjwEJo7d3SLlu0y7k%2BcgMBbhEOj%2BiNTgzpmIlwIPz2awEN5fXctKZX6l%2BOUOEz7Agzv%2FMAdkXN9eAFKuWf%2BAwYtcRBcE78QOx5PPHJyHF3BXTwggCgIVYNLc9Wvamk&X-Amz-Signature=2f4bcaa7951fdc21a64cc602a6396f802e40fe08def8591262522eae11756d04&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGP2MNQM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJUat%2BT%2FXkAEru6DXti8X5%2Bl79yodMBr%2FG8RXtN%2FgCPgIhANYGfTPqd96oNxgs67TK7rKrwjDcWxXNZMa2oFp9Bg51KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeH%2BH9S%2BDcr8N8dRMq3AMZUT2RuI1OmduX3znP9t%2BvHmhJSxwVX3%2F8B5NVcDnzLTLKer7HDYA%2FjosFH80vKD2UEGeHurXj%2BXqMN2LHHHHRpGu1Lh36Ey5lfDcrfJPJc%2Bc9Eot59FFVe1PK6cCoQd4Na35%2FAnsNdWFrqertQdVzy8%2FBubhRlb8PxPg5NA%2BcmKszaRbhuS3bVXNJ6kVcCSo%2BIHhnQCuHBuxcu1N233dSmspuZRfCb5ft%2FVHZ11p6ti7Ke5yMCJepGcm80wXXHpxv6iKXcqBvLNGMEGbg1dvfTwdh8Rydv8j%2FKk7kpuG6duv%2BKi4TmR07CQmTQGoWpfIacdobaojysyuoIR6LSYBPquIU%2F0FxPEKkzXze28cdtO43WSIG9v%2BUa6uKssZoLB%2Fkdco1412BoSxkvyrg%2B9ohcY4ZE%2Bimn%2B3U7mO99%2FJsF7vVmMC6j20PTfye1rzlezGn44R3En1AJuXjv%2B%2FJ5vJD%2FsDryW7wqVIzPN57xY8r8XnV9Bs8y9Y6W7UkCYtza9Y8%2BJlfVQxUw3iw%2F2BsCk%2FOx3AYyI45JetU0V%2FOMSyXx2QxOArIe4w%2FfATBXrDI%2FSmHTsnrfCmnBfYFfgjH4iWY7FAu%2BMhfJTkJSdIbubWNFiGZIAVodIx57eGRezDZvqC9BjqkAcfI4HVrn5A7QGgAXIFobzsFMIFxN%2BbHkzz1767utZhmGC9DBS7sTrE%2Bfe5vBvOBJ%2BsT3oZLYIARPkE4m2veOIykGG476AtjwEJo7d3SLlu0y7k%2BcgMBbhEOj%2BiNTgzpmIlwIPz2awEN5fXctKZX6l%2BOUOEz7Agzv%2FMAdkXN9eAFKuWf%2BAwYtcRBcE78QOx5PPHJyHF3BXTwggCgIVYNLc9Wvamk&X-Amz-Signature=4ea59f42863a45028814f035e8fbb2fd4eb18b58dafbd94b389a6b51c19d2fcf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGP2MNQM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJUat%2BT%2FXkAEru6DXti8X5%2Bl79yodMBr%2FG8RXtN%2FgCPgIhANYGfTPqd96oNxgs67TK7rKrwjDcWxXNZMa2oFp9Bg51KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeH%2BH9S%2BDcr8N8dRMq3AMZUT2RuI1OmduX3znP9t%2BvHmhJSxwVX3%2F8B5NVcDnzLTLKer7HDYA%2FjosFH80vKD2UEGeHurXj%2BXqMN2LHHHHRpGu1Lh36Ey5lfDcrfJPJc%2Bc9Eot59FFVe1PK6cCoQd4Na35%2FAnsNdWFrqertQdVzy8%2FBubhRlb8PxPg5NA%2BcmKszaRbhuS3bVXNJ6kVcCSo%2BIHhnQCuHBuxcu1N233dSmspuZRfCb5ft%2FVHZ11p6ti7Ke5yMCJepGcm80wXXHpxv6iKXcqBvLNGMEGbg1dvfTwdh8Rydv8j%2FKk7kpuG6duv%2BKi4TmR07CQmTQGoWpfIacdobaojysyuoIR6LSYBPquIU%2F0FxPEKkzXze28cdtO43WSIG9v%2BUa6uKssZoLB%2Fkdco1412BoSxkvyrg%2B9ohcY4ZE%2Bimn%2B3U7mO99%2FJsF7vVmMC6j20PTfye1rzlezGn44R3En1AJuXjv%2B%2FJ5vJD%2FsDryW7wqVIzPN57xY8r8XnV9Bs8y9Y6W7UkCYtza9Y8%2BJlfVQxUw3iw%2F2BsCk%2FOx3AYyI45JetU0V%2FOMSyXx2QxOArIe4w%2FfATBXrDI%2FSmHTsnrfCmnBfYFfgjH4iWY7FAu%2BMhfJTkJSdIbubWNFiGZIAVodIx57eGRezDZvqC9BjqkAcfI4HVrn5A7QGgAXIFobzsFMIFxN%2BbHkzz1767utZhmGC9DBS7sTrE%2Bfe5vBvOBJ%2BsT3oZLYIARPkE4m2veOIykGG476AtjwEJo7d3SLlu0y7k%2BcgMBbhEOj%2BiNTgzpmIlwIPz2awEN5fXctKZX6l%2BOUOEz7Agzv%2FMAdkXN9eAFKuWf%2BAwYtcRBcE78QOx5PPHJyHF3BXTwggCgIVYNLc9Wvamk&X-Amz-Signature=8c74034ab2b249f1d55864d607310852274abce3930f72825f61b0f111a751b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGP2MNQM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJUat%2BT%2FXkAEru6DXti8X5%2Bl79yodMBr%2FG8RXtN%2FgCPgIhANYGfTPqd96oNxgs67TK7rKrwjDcWxXNZMa2oFp9Bg51KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeH%2BH9S%2BDcr8N8dRMq3AMZUT2RuI1OmduX3znP9t%2BvHmhJSxwVX3%2F8B5NVcDnzLTLKer7HDYA%2FjosFH80vKD2UEGeHurXj%2BXqMN2LHHHHRpGu1Lh36Ey5lfDcrfJPJc%2Bc9Eot59FFVe1PK6cCoQd4Na35%2FAnsNdWFrqertQdVzy8%2FBubhRlb8PxPg5NA%2BcmKszaRbhuS3bVXNJ6kVcCSo%2BIHhnQCuHBuxcu1N233dSmspuZRfCb5ft%2FVHZ11p6ti7Ke5yMCJepGcm80wXXHpxv6iKXcqBvLNGMEGbg1dvfTwdh8Rydv8j%2FKk7kpuG6duv%2BKi4TmR07CQmTQGoWpfIacdobaojysyuoIR6LSYBPquIU%2F0FxPEKkzXze28cdtO43WSIG9v%2BUa6uKssZoLB%2Fkdco1412BoSxkvyrg%2B9ohcY4ZE%2Bimn%2B3U7mO99%2FJsF7vVmMC6j20PTfye1rzlezGn44R3En1AJuXjv%2B%2FJ5vJD%2FsDryW7wqVIzPN57xY8r8XnV9Bs8y9Y6W7UkCYtza9Y8%2BJlfVQxUw3iw%2F2BsCk%2FOx3AYyI45JetU0V%2FOMSyXx2QxOArIe4w%2FfATBXrDI%2FSmHTsnrfCmnBfYFfgjH4iWY7FAu%2BMhfJTkJSdIbubWNFiGZIAVodIx57eGRezDZvqC9BjqkAcfI4HVrn5A7QGgAXIFobzsFMIFxN%2BbHkzz1767utZhmGC9DBS7sTrE%2Bfe5vBvOBJ%2BsT3oZLYIARPkE4m2veOIykGG476AtjwEJo7d3SLlu0y7k%2BcgMBbhEOj%2BiNTgzpmIlwIPz2awEN5fXctKZX6l%2BOUOEz7Agzv%2FMAdkXN9eAFKuWf%2BAwYtcRBcE78QOx5PPHJyHF3BXTwggCgIVYNLc9Wvamk&X-Amz-Signature=26def1c99578f614b588cb6bf07fa8191899d342f082c204ed110fded3c7cd06&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGP2MNQM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJUat%2BT%2FXkAEru6DXti8X5%2Bl79yodMBr%2FG8RXtN%2FgCPgIhANYGfTPqd96oNxgs67TK7rKrwjDcWxXNZMa2oFp9Bg51KogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyeH%2BH9S%2BDcr8N8dRMq3AMZUT2RuI1OmduX3znP9t%2BvHmhJSxwVX3%2F8B5NVcDnzLTLKer7HDYA%2FjosFH80vKD2UEGeHurXj%2BXqMN2LHHHHRpGu1Lh36Ey5lfDcrfJPJc%2Bc9Eot59FFVe1PK6cCoQd4Na35%2FAnsNdWFrqertQdVzy8%2FBubhRlb8PxPg5NA%2BcmKszaRbhuS3bVXNJ6kVcCSo%2BIHhnQCuHBuxcu1N233dSmspuZRfCb5ft%2FVHZ11p6ti7Ke5yMCJepGcm80wXXHpxv6iKXcqBvLNGMEGbg1dvfTwdh8Rydv8j%2FKk7kpuG6duv%2BKi4TmR07CQmTQGoWpfIacdobaojysyuoIR6LSYBPquIU%2F0FxPEKkzXze28cdtO43WSIG9v%2BUa6uKssZoLB%2Fkdco1412BoSxkvyrg%2B9ohcY4ZE%2Bimn%2B3U7mO99%2FJsF7vVmMC6j20PTfye1rzlezGn44R3En1AJuXjv%2B%2FJ5vJD%2FsDryW7wqVIzPN57xY8r8XnV9Bs8y9Y6W7UkCYtza9Y8%2BJlfVQxUw3iw%2F2BsCk%2FOx3AYyI45JetU0V%2FOMSyXx2QxOArIe4w%2FfATBXrDI%2FSmHTsnrfCmnBfYFfgjH4iWY7FAu%2BMhfJTkJSdIbubWNFiGZIAVodIx57eGRezDZvqC9BjqkAcfI4HVrn5A7QGgAXIFobzsFMIFxN%2BbHkzz1767utZhmGC9DBS7sTrE%2Bfe5vBvOBJ%2BsT3oZLYIARPkE4m2veOIykGG476AtjwEJo7d3SLlu0y7k%2BcgMBbhEOj%2BiNTgzpmIlwIPz2awEN5fXctKZX6l%2BOUOEz7Agzv%2FMAdkXN9eAFKuWf%2BAwYtcRBcE78QOx5PPHJyHF3BXTwggCgIVYNLc9Wvamk&X-Amz-Signature=70326bd0761724e3efd05b902c76c1de75203aba083ead733fc7b99e0cec6b84&X-Amz-SignedHeaders=host&x-id=GetObject)
