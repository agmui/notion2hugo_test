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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3OKOCD%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGnpehiH8WbQgmsvGiZDffGaozf6dbBvtO4tX0uysZCQIhAO8Roq5vnidu4MvGTexY5GtKlvpIJueoNAEzLkJUyHqHKv8DCBYQABoMNjM3NDIzMTgzODA1IgwMcJEKSHljZuJOQSUq3AMCv2z3AA0az0MvzTn1LoiVwdLCTTQ6JLW%2Fizc9IfHAOvnma8%2B27SG6W60I0jlSvMeSPE0VdLyKlJpmjdyImQxXqnA2vM9gJPVGuCESKrscNcs2LqPPjy9%2B3VyIfX6iQtXVHtnMJjzRBYThCSZwED0xwcsQatiexJZztBqonH%2BtNm9xJW0NTFWmqhbUaHU32TnHz26PVvcib73ty%2B4igepLLISSfz7rL0nKDZR%2FyfJigdwUdtHpggTquB3B2Kj19OCPecG%2BY6WJeDIWYjPEHOwVkXTXN9qq120vtEV49tlvBFV%2BA4wuXWTnBNcmuHi5rnTvIbhEBOjKYheZCBjg6fah5I060FF13JvVGaZTCGSdR2H8SJsCTxXAEbPAtL0f%2B8eBEd%2BwUhagfzDRX%2FAvjPdMGezOKwk7tDmpj6bGn0rMg%2FqybG6zChpW1VxiFITiuyjL%2B0E8AmNdr%2Bxmn5PP58X0JKtAH5c1eaN5zDIJxou%2F%2FLg%2BjbMg0dd6o5pr7HoJrm9YIP%2Bf4e%2F8b4wPgzCVy%2FqkmLAvKw8oWRS0LUDag9ZTuO0fB2FsbnaKfLomyJTgnMylhrcMdZSWOuU%2BSoYOYkBPtU7U8sZKsXcrpyYoxGTz9R1qelyVSfSBaLFTyDCr3re9BjqkATteiXW7ZmTjdl0A7l2hnSl%2FA9lNfHarpxJFhTaypi5bF5Eu%2BS7eJqqitP54qAJqInDi4PUQK6zeJw%2Bs8dbFUPjoHiLfnYQA8r3avaFvMGV7jVpDF4tU%2Bt%2FP%2FQyJHEaSznhdUweSZL9kLRUoIe2AoT4DluJdxgLHE3Q7d0UD33O%2Fcc2joRhqQxBCV9x1UQ6XOcb9RhzXFrmF2gFdSmn4MyPF%2BgTh&X-Amz-Signature=d4a63907ed649f3fbb37baba766ba4e1bf8c81dccb65165521e1486a093e9bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3OKOCD%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGnpehiH8WbQgmsvGiZDffGaozf6dbBvtO4tX0uysZCQIhAO8Roq5vnidu4MvGTexY5GtKlvpIJueoNAEzLkJUyHqHKv8DCBYQABoMNjM3NDIzMTgzODA1IgwMcJEKSHljZuJOQSUq3AMCv2z3AA0az0MvzTn1LoiVwdLCTTQ6JLW%2Fizc9IfHAOvnma8%2B27SG6W60I0jlSvMeSPE0VdLyKlJpmjdyImQxXqnA2vM9gJPVGuCESKrscNcs2LqPPjy9%2B3VyIfX6iQtXVHtnMJjzRBYThCSZwED0xwcsQatiexJZztBqonH%2BtNm9xJW0NTFWmqhbUaHU32TnHz26PVvcib73ty%2B4igepLLISSfz7rL0nKDZR%2FyfJigdwUdtHpggTquB3B2Kj19OCPecG%2BY6WJeDIWYjPEHOwVkXTXN9qq120vtEV49tlvBFV%2BA4wuXWTnBNcmuHi5rnTvIbhEBOjKYheZCBjg6fah5I060FF13JvVGaZTCGSdR2H8SJsCTxXAEbPAtL0f%2B8eBEd%2BwUhagfzDRX%2FAvjPdMGezOKwk7tDmpj6bGn0rMg%2FqybG6zChpW1VxiFITiuyjL%2B0E8AmNdr%2Bxmn5PP58X0JKtAH5c1eaN5zDIJxou%2F%2FLg%2BjbMg0dd6o5pr7HoJrm9YIP%2Bf4e%2F8b4wPgzCVy%2FqkmLAvKw8oWRS0LUDag9ZTuO0fB2FsbnaKfLomyJTgnMylhrcMdZSWOuU%2BSoYOYkBPtU7U8sZKsXcrpyYoxGTz9R1qelyVSfSBaLFTyDCr3re9BjqkATteiXW7ZmTjdl0A7l2hnSl%2FA9lNfHarpxJFhTaypi5bF5Eu%2BS7eJqqitP54qAJqInDi4PUQK6zeJw%2Bs8dbFUPjoHiLfnYQA8r3avaFvMGV7jVpDF4tU%2Bt%2FP%2FQyJHEaSznhdUweSZL9kLRUoIe2AoT4DluJdxgLHE3Q7d0UD33O%2Fcc2joRhqQxBCV9x1UQ6XOcb9RhzXFrmF2gFdSmn4MyPF%2BgTh&X-Amz-Signature=7b66fed2a971a94345e2c17079242f2205bf162ea97a550f3e6f01e97390231e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3OKOCD%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGnpehiH8WbQgmsvGiZDffGaozf6dbBvtO4tX0uysZCQIhAO8Roq5vnidu4MvGTexY5GtKlvpIJueoNAEzLkJUyHqHKv8DCBYQABoMNjM3NDIzMTgzODA1IgwMcJEKSHljZuJOQSUq3AMCv2z3AA0az0MvzTn1LoiVwdLCTTQ6JLW%2Fizc9IfHAOvnma8%2B27SG6W60I0jlSvMeSPE0VdLyKlJpmjdyImQxXqnA2vM9gJPVGuCESKrscNcs2LqPPjy9%2B3VyIfX6iQtXVHtnMJjzRBYThCSZwED0xwcsQatiexJZztBqonH%2BtNm9xJW0NTFWmqhbUaHU32TnHz26PVvcib73ty%2B4igepLLISSfz7rL0nKDZR%2FyfJigdwUdtHpggTquB3B2Kj19OCPecG%2BY6WJeDIWYjPEHOwVkXTXN9qq120vtEV49tlvBFV%2BA4wuXWTnBNcmuHi5rnTvIbhEBOjKYheZCBjg6fah5I060FF13JvVGaZTCGSdR2H8SJsCTxXAEbPAtL0f%2B8eBEd%2BwUhagfzDRX%2FAvjPdMGezOKwk7tDmpj6bGn0rMg%2FqybG6zChpW1VxiFITiuyjL%2B0E8AmNdr%2Bxmn5PP58X0JKtAH5c1eaN5zDIJxou%2F%2FLg%2BjbMg0dd6o5pr7HoJrm9YIP%2Bf4e%2F8b4wPgzCVy%2FqkmLAvKw8oWRS0LUDag9ZTuO0fB2FsbnaKfLomyJTgnMylhrcMdZSWOuU%2BSoYOYkBPtU7U8sZKsXcrpyYoxGTz9R1qelyVSfSBaLFTyDCr3re9BjqkATteiXW7ZmTjdl0A7l2hnSl%2FA9lNfHarpxJFhTaypi5bF5Eu%2BS7eJqqitP54qAJqInDi4PUQK6zeJw%2Bs8dbFUPjoHiLfnYQA8r3avaFvMGV7jVpDF4tU%2Bt%2FP%2FQyJHEaSznhdUweSZL9kLRUoIe2AoT4DluJdxgLHE3Q7d0UD33O%2Fcc2joRhqQxBCV9x1UQ6XOcb9RhzXFrmF2gFdSmn4MyPF%2BgTh&X-Amz-Signature=b0b21807aaca95212be1ef4dc90d37ffe718ca65fd35cd022dcdbc4cc90a308a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3OKOCD%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGnpehiH8WbQgmsvGiZDffGaozf6dbBvtO4tX0uysZCQIhAO8Roq5vnidu4MvGTexY5GtKlvpIJueoNAEzLkJUyHqHKv8DCBYQABoMNjM3NDIzMTgzODA1IgwMcJEKSHljZuJOQSUq3AMCv2z3AA0az0MvzTn1LoiVwdLCTTQ6JLW%2Fizc9IfHAOvnma8%2B27SG6W60I0jlSvMeSPE0VdLyKlJpmjdyImQxXqnA2vM9gJPVGuCESKrscNcs2LqPPjy9%2B3VyIfX6iQtXVHtnMJjzRBYThCSZwED0xwcsQatiexJZztBqonH%2BtNm9xJW0NTFWmqhbUaHU32TnHz26PVvcib73ty%2B4igepLLISSfz7rL0nKDZR%2FyfJigdwUdtHpggTquB3B2Kj19OCPecG%2BY6WJeDIWYjPEHOwVkXTXN9qq120vtEV49tlvBFV%2BA4wuXWTnBNcmuHi5rnTvIbhEBOjKYheZCBjg6fah5I060FF13JvVGaZTCGSdR2H8SJsCTxXAEbPAtL0f%2B8eBEd%2BwUhagfzDRX%2FAvjPdMGezOKwk7tDmpj6bGn0rMg%2FqybG6zChpW1VxiFITiuyjL%2B0E8AmNdr%2Bxmn5PP58X0JKtAH5c1eaN5zDIJxou%2F%2FLg%2BjbMg0dd6o5pr7HoJrm9YIP%2Bf4e%2F8b4wPgzCVy%2FqkmLAvKw8oWRS0LUDag9ZTuO0fB2FsbnaKfLomyJTgnMylhrcMdZSWOuU%2BSoYOYkBPtU7U8sZKsXcrpyYoxGTz9R1qelyVSfSBaLFTyDCr3re9BjqkATteiXW7ZmTjdl0A7l2hnSl%2FA9lNfHarpxJFhTaypi5bF5Eu%2BS7eJqqitP54qAJqInDi4PUQK6zeJw%2Bs8dbFUPjoHiLfnYQA8r3avaFvMGV7jVpDF4tU%2Bt%2FP%2FQyJHEaSznhdUweSZL9kLRUoIe2AoT4DluJdxgLHE3Q7d0UD33O%2Fcc2joRhqQxBCV9x1UQ6XOcb9RhzXFrmF2gFdSmn4MyPF%2BgTh&X-Amz-Signature=60b3e24b4bcd741aeadd3dca31a98f7b00b9334114da40a5a386cd13f30b388c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3OKOCD%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGnpehiH8WbQgmsvGiZDffGaozf6dbBvtO4tX0uysZCQIhAO8Roq5vnidu4MvGTexY5GtKlvpIJueoNAEzLkJUyHqHKv8DCBYQABoMNjM3NDIzMTgzODA1IgwMcJEKSHljZuJOQSUq3AMCv2z3AA0az0MvzTn1LoiVwdLCTTQ6JLW%2Fizc9IfHAOvnma8%2B27SG6W60I0jlSvMeSPE0VdLyKlJpmjdyImQxXqnA2vM9gJPVGuCESKrscNcs2LqPPjy9%2B3VyIfX6iQtXVHtnMJjzRBYThCSZwED0xwcsQatiexJZztBqonH%2BtNm9xJW0NTFWmqhbUaHU32TnHz26PVvcib73ty%2B4igepLLISSfz7rL0nKDZR%2FyfJigdwUdtHpggTquB3B2Kj19OCPecG%2BY6WJeDIWYjPEHOwVkXTXN9qq120vtEV49tlvBFV%2BA4wuXWTnBNcmuHi5rnTvIbhEBOjKYheZCBjg6fah5I060FF13JvVGaZTCGSdR2H8SJsCTxXAEbPAtL0f%2B8eBEd%2BwUhagfzDRX%2FAvjPdMGezOKwk7tDmpj6bGn0rMg%2FqybG6zChpW1VxiFITiuyjL%2B0E8AmNdr%2Bxmn5PP58X0JKtAH5c1eaN5zDIJxou%2F%2FLg%2BjbMg0dd6o5pr7HoJrm9YIP%2Bf4e%2F8b4wPgzCVy%2FqkmLAvKw8oWRS0LUDag9ZTuO0fB2FsbnaKfLomyJTgnMylhrcMdZSWOuU%2BSoYOYkBPtU7U8sZKsXcrpyYoxGTz9R1qelyVSfSBaLFTyDCr3re9BjqkATteiXW7ZmTjdl0A7l2hnSl%2FA9lNfHarpxJFhTaypi5bF5Eu%2BS7eJqqitP54qAJqInDi4PUQK6zeJw%2Bs8dbFUPjoHiLfnYQA8r3avaFvMGV7jVpDF4tU%2Bt%2FP%2FQyJHEaSznhdUweSZL9kLRUoIe2AoT4DluJdxgLHE3Q7d0UD33O%2Fcc2joRhqQxBCV9x1UQ6XOcb9RhzXFrmF2gFdSmn4MyPF%2BgTh&X-Amz-Signature=81ba7f436bad6c003c88d6ed4ce1f3827c0269fcae37361ce5f1ae445cc8a6bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3OKOCD%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGnpehiH8WbQgmsvGiZDffGaozf6dbBvtO4tX0uysZCQIhAO8Roq5vnidu4MvGTexY5GtKlvpIJueoNAEzLkJUyHqHKv8DCBYQABoMNjM3NDIzMTgzODA1IgwMcJEKSHljZuJOQSUq3AMCv2z3AA0az0MvzTn1LoiVwdLCTTQ6JLW%2Fizc9IfHAOvnma8%2B27SG6W60I0jlSvMeSPE0VdLyKlJpmjdyImQxXqnA2vM9gJPVGuCESKrscNcs2LqPPjy9%2B3VyIfX6iQtXVHtnMJjzRBYThCSZwED0xwcsQatiexJZztBqonH%2BtNm9xJW0NTFWmqhbUaHU32TnHz26PVvcib73ty%2B4igepLLISSfz7rL0nKDZR%2FyfJigdwUdtHpggTquB3B2Kj19OCPecG%2BY6WJeDIWYjPEHOwVkXTXN9qq120vtEV49tlvBFV%2BA4wuXWTnBNcmuHi5rnTvIbhEBOjKYheZCBjg6fah5I060FF13JvVGaZTCGSdR2H8SJsCTxXAEbPAtL0f%2B8eBEd%2BwUhagfzDRX%2FAvjPdMGezOKwk7tDmpj6bGn0rMg%2FqybG6zChpW1VxiFITiuyjL%2B0E8AmNdr%2Bxmn5PP58X0JKtAH5c1eaN5zDIJxou%2F%2FLg%2BjbMg0dd6o5pr7HoJrm9YIP%2Bf4e%2F8b4wPgzCVy%2FqkmLAvKw8oWRS0LUDag9ZTuO0fB2FsbnaKfLomyJTgnMylhrcMdZSWOuU%2BSoYOYkBPtU7U8sZKsXcrpyYoxGTz9R1qelyVSfSBaLFTyDCr3re9BjqkATteiXW7ZmTjdl0A7l2hnSl%2FA9lNfHarpxJFhTaypi5bF5Eu%2BS7eJqqitP54qAJqInDi4PUQK6zeJw%2Bs8dbFUPjoHiLfnYQA8r3avaFvMGV7jVpDF4tU%2Bt%2FP%2FQyJHEaSznhdUweSZL9kLRUoIe2AoT4DluJdxgLHE3Q7d0UD33O%2Fcc2joRhqQxBCV9x1UQ6XOcb9RhzXFrmF2gFdSmn4MyPF%2BgTh&X-Amz-Signature=91e4326c9febf291df20e1690c844fd80434e573d10a1ab2676702d4f8df9457&X-Amz-SignedHeaders=host&x-id=GetObject)
