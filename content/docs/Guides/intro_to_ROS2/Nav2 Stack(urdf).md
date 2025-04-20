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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6DAXKKT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDOeOBs9FEO%2By01RPAqRXPqGVKZdmT830u3neEDPKbrtgIgIyJFw3Vx5oNAPvoOOxRQSy0atfvGrMnN1KWUePSVascqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQZ0qgd2X%2FyLLc55ircAxSPVO6NfM3PacSWD5qaCw2u9989BDWQdLkI1KGMkR7xWvDICkBY3VEhRIkDP2J37PqRo4BCh95Ugkn3xW5AD0%2Fk2FOGwa9n0QNXLyKTc4Gu4Atn0drLrnHgMkcnkpCFU6LoadshgCLquUnFFSfKenTZm19uTIKdyr7wTZfeM%2FIX1jIgqyDA4bKKrKXnPfTiBfhe7FO7yK1ZA7aijTBWCKc7e3DnmXBEfz2YF1LA4W1wdu2wNPMnfOFJw03vej4VdbsfNbxgFgvgx9owK6mdvY7Il4RKJmV4K5aGaa8IUsZkZPkPOxuMhegn0If0EaTaUS0KE1eDrux0gGKJ4m0X8LYxz0Q6tABmY7uXp30p6KARWtbmV4fHwD6mgWici4W7piATRyaNjrrGDRQF%2FEIVRlbcj4HTPEPlNX1MlGRQr310SVX22p72EpZZfqf8u9plMr0%2FwkJiGmYRHJZuDUOKoOGco8zZp1O3OOUim1A6OHkcrakZ%2FGowfqEonpjx%2FltJV3VD9MqUyo9tdBELzn%2B7%2F1ni%2FH9mb%2BN0ozddJci5aTbxYdKMolCnzcNrAf7z2zaysyx4L0SAn4QfW2gDG7Rj5z1lPktl8O0iq7zKQHaNgIPZKWB5joRp7DAxEsvRMOOBkcAGOqUBiTCOdfFCwTdalQ6DClPS0I5lPwU%2FZyuxGKRTlam%2BPoYSf1wpo0UKVNJ3DcKSSY3Tovju%2FOTecw0xeSx1GZlqTSiNmS6Qx2Rka%2B7gkXXayq6fzgr6NFEMOJeHKf3Keq4vHbtQFLz7FZ3MMqnxpBSfAI18lKhcIeDZI6u0Oz7YJKGklwomyzxlNfPaqm8Ae3VoVpcy6LvZDWiNzfcv4cY8kWHOI6Kw&X-Amz-Signature=7ffddbd8d6959e49b6a89622dfeef5bc3acbd5c18490fe2d70ff87ba074cf8f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6DAXKKT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDOeOBs9FEO%2By01RPAqRXPqGVKZdmT830u3neEDPKbrtgIgIyJFw3Vx5oNAPvoOOxRQSy0atfvGrMnN1KWUePSVascqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQZ0qgd2X%2FyLLc55ircAxSPVO6NfM3PacSWD5qaCw2u9989BDWQdLkI1KGMkR7xWvDICkBY3VEhRIkDP2J37PqRo4BCh95Ugkn3xW5AD0%2Fk2FOGwa9n0QNXLyKTc4Gu4Atn0drLrnHgMkcnkpCFU6LoadshgCLquUnFFSfKenTZm19uTIKdyr7wTZfeM%2FIX1jIgqyDA4bKKrKXnPfTiBfhe7FO7yK1ZA7aijTBWCKc7e3DnmXBEfz2YF1LA4W1wdu2wNPMnfOFJw03vej4VdbsfNbxgFgvgx9owK6mdvY7Il4RKJmV4K5aGaa8IUsZkZPkPOxuMhegn0If0EaTaUS0KE1eDrux0gGKJ4m0X8LYxz0Q6tABmY7uXp30p6KARWtbmV4fHwD6mgWici4W7piATRyaNjrrGDRQF%2FEIVRlbcj4HTPEPlNX1MlGRQr310SVX22p72EpZZfqf8u9plMr0%2FwkJiGmYRHJZuDUOKoOGco8zZp1O3OOUim1A6OHkcrakZ%2FGowfqEonpjx%2FltJV3VD9MqUyo9tdBELzn%2B7%2F1ni%2FH9mb%2BN0ozddJci5aTbxYdKMolCnzcNrAf7z2zaysyx4L0SAn4QfW2gDG7Rj5z1lPktl8O0iq7zKQHaNgIPZKWB5joRp7DAxEsvRMOOBkcAGOqUBiTCOdfFCwTdalQ6DClPS0I5lPwU%2FZyuxGKRTlam%2BPoYSf1wpo0UKVNJ3DcKSSY3Tovju%2FOTecw0xeSx1GZlqTSiNmS6Qx2Rka%2B7gkXXayq6fzgr6NFEMOJeHKf3Keq4vHbtQFLz7FZ3MMqnxpBSfAI18lKhcIeDZI6u0Oz7YJKGklwomyzxlNfPaqm8Ae3VoVpcy6LvZDWiNzfcv4cY8kWHOI6Kw&X-Amz-Signature=7c25f9d811395b5134805e41c31eb4930cea0f62b1d603a939b9026279ce3d75&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6DAXKKT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDOeOBs9FEO%2By01RPAqRXPqGVKZdmT830u3neEDPKbrtgIgIyJFw3Vx5oNAPvoOOxRQSy0atfvGrMnN1KWUePSVascqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQZ0qgd2X%2FyLLc55ircAxSPVO6NfM3PacSWD5qaCw2u9989BDWQdLkI1KGMkR7xWvDICkBY3VEhRIkDP2J37PqRo4BCh95Ugkn3xW5AD0%2Fk2FOGwa9n0QNXLyKTc4Gu4Atn0drLrnHgMkcnkpCFU6LoadshgCLquUnFFSfKenTZm19uTIKdyr7wTZfeM%2FIX1jIgqyDA4bKKrKXnPfTiBfhe7FO7yK1ZA7aijTBWCKc7e3DnmXBEfz2YF1LA4W1wdu2wNPMnfOFJw03vej4VdbsfNbxgFgvgx9owK6mdvY7Il4RKJmV4K5aGaa8IUsZkZPkPOxuMhegn0If0EaTaUS0KE1eDrux0gGKJ4m0X8LYxz0Q6tABmY7uXp30p6KARWtbmV4fHwD6mgWici4W7piATRyaNjrrGDRQF%2FEIVRlbcj4HTPEPlNX1MlGRQr310SVX22p72EpZZfqf8u9plMr0%2FwkJiGmYRHJZuDUOKoOGco8zZp1O3OOUim1A6OHkcrakZ%2FGowfqEonpjx%2FltJV3VD9MqUyo9tdBELzn%2B7%2F1ni%2FH9mb%2BN0ozddJci5aTbxYdKMolCnzcNrAf7z2zaysyx4L0SAn4QfW2gDG7Rj5z1lPktl8O0iq7zKQHaNgIPZKWB5joRp7DAxEsvRMOOBkcAGOqUBiTCOdfFCwTdalQ6DClPS0I5lPwU%2FZyuxGKRTlam%2BPoYSf1wpo0UKVNJ3DcKSSY3Tovju%2FOTecw0xeSx1GZlqTSiNmS6Qx2Rka%2B7gkXXayq6fzgr6NFEMOJeHKf3Keq4vHbtQFLz7FZ3MMqnxpBSfAI18lKhcIeDZI6u0Oz7YJKGklwomyzxlNfPaqm8Ae3VoVpcy6LvZDWiNzfcv4cY8kWHOI6Kw&X-Amz-Signature=eb414098c28d2388b31cc174ab1de00e84c258bbbbb9d1d93fcef3188bbff8b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6DAXKKT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDOeOBs9FEO%2By01RPAqRXPqGVKZdmT830u3neEDPKbrtgIgIyJFw3Vx5oNAPvoOOxRQSy0atfvGrMnN1KWUePSVascqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQZ0qgd2X%2FyLLc55ircAxSPVO6NfM3PacSWD5qaCw2u9989BDWQdLkI1KGMkR7xWvDICkBY3VEhRIkDP2J37PqRo4BCh95Ugkn3xW5AD0%2Fk2FOGwa9n0QNXLyKTc4Gu4Atn0drLrnHgMkcnkpCFU6LoadshgCLquUnFFSfKenTZm19uTIKdyr7wTZfeM%2FIX1jIgqyDA4bKKrKXnPfTiBfhe7FO7yK1ZA7aijTBWCKc7e3DnmXBEfz2YF1LA4W1wdu2wNPMnfOFJw03vej4VdbsfNbxgFgvgx9owK6mdvY7Il4RKJmV4K5aGaa8IUsZkZPkPOxuMhegn0If0EaTaUS0KE1eDrux0gGKJ4m0X8LYxz0Q6tABmY7uXp30p6KARWtbmV4fHwD6mgWici4W7piATRyaNjrrGDRQF%2FEIVRlbcj4HTPEPlNX1MlGRQr310SVX22p72EpZZfqf8u9plMr0%2FwkJiGmYRHJZuDUOKoOGco8zZp1O3OOUim1A6OHkcrakZ%2FGowfqEonpjx%2FltJV3VD9MqUyo9tdBELzn%2B7%2F1ni%2FH9mb%2BN0ozddJci5aTbxYdKMolCnzcNrAf7z2zaysyx4L0SAn4QfW2gDG7Rj5z1lPktl8O0iq7zKQHaNgIPZKWB5joRp7DAxEsvRMOOBkcAGOqUBiTCOdfFCwTdalQ6DClPS0I5lPwU%2FZyuxGKRTlam%2BPoYSf1wpo0UKVNJ3DcKSSY3Tovju%2FOTecw0xeSx1GZlqTSiNmS6Qx2Rka%2B7gkXXayq6fzgr6NFEMOJeHKf3Keq4vHbtQFLz7FZ3MMqnxpBSfAI18lKhcIeDZI6u0Oz7YJKGklwomyzxlNfPaqm8Ae3VoVpcy6LvZDWiNzfcv4cY8kWHOI6Kw&X-Amz-Signature=6ad01e4318fdf0e215a63061722376cc40658672851629022eb5780e06a553c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6DAXKKT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDOeOBs9FEO%2By01RPAqRXPqGVKZdmT830u3neEDPKbrtgIgIyJFw3Vx5oNAPvoOOxRQSy0atfvGrMnN1KWUePSVascqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQZ0qgd2X%2FyLLc55ircAxSPVO6NfM3PacSWD5qaCw2u9989BDWQdLkI1KGMkR7xWvDICkBY3VEhRIkDP2J37PqRo4BCh95Ugkn3xW5AD0%2Fk2FOGwa9n0QNXLyKTc4Gu4Atn0drLrnHgMkcnkpCFU6LoadshgCLquUnFFSfKenTZm19uTIKdyr7wTZfeM%2FIX1jIgqyDA4bKKrKXnPfTiBfhe7FO7yK1ZA7aijTBWCKc7e3DnmXBEfz2YF1LA4W1wdu2wNPMnfOFJw03vej4VdbsfNbxgFgvgx9owK6mdvY7Il4RKJmV4K5aGaa8IUsZkZPkPOxuMhegn0If0EaTaUS0KE1eDrux0gGKJ4m0X8LYxz0Q6tABmY7uXp30p6KARWtbmV4fHwD6mgWici4W7piATRyaNjrrGDRQF%2FEIVRlbcj4HTPEPlNX1MlGRQr310SVX22p72EpZZfqf8u9plMr0%2FwkJiGmYRHJZuDUOKoOGco8zZp1O3OOUim1A6OHkcrakZ%2FGowfqEonpjx%2FltJV3VD9MqUyo9tdBELzn%2B7%2F1ni%2FH9mb%2BN0ozddJci5aTbxYdKMolCnzcNrAf7z2zaysyx4L0SAn4QfW2gDG7Rj5z1lPktl8O0iq7zKQHaNgIPZKWB5joRp7DAxEsvRMOOBkcAGOqUBiTCOdfFCwTdalQ6DClPS0I5lPwU%2FZyuxGKRTlam%2BPoYSf1wpo0UKVNJ3DcKSSY3Tovju%2FOTecw0xeSx1GZlqTSiNmS6Qx2Rka%2B7gkXXayq6fzgr6NFEMOJeHKf3Keq4vHbtQFLz7FZ3MMqnxpBSfAI18lKhcIeDZI6u0Oz7YJKGklwomyzxlNfPaqm8Ae3VoVpcy6LvZDWiNzfcv4cY8kWHOI6Kw&X-Amz-Signature=45fbf2a36f96c09d0b06ea8c59ddfdebf1899c79bfdd25517ae6d293e0938060&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6DAXKKT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T004346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDOeOBs9FEO%2By01RPAqRXPqGVKZdmT830u3neEDPKbrtgIgIyJFw3Vx5oNAPvoOOxRQSy0atfvGrMnN1KWUePSVascqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQZ0qgd2X%2FyLLc55ircAxSPVO6NfM3PacSWD5qaCw2u9989BDWQdLkI1KGMkR7xWvDICkBY3VEhRIkDP2J37PqRo4BCh95Ugkn3xW5AD0%2Fk2FOGwa9n0QNXLyKTc4Gu4Atn0drLrnHgMkcnkpCFU6LoadshgCLquUnFFSfKenTZm19uTIKdyr7wTZfeM%2FIX1jIgqyDA4bKKrKXnPfTiBfhe7FO7yK1ZA7aijTBWCKc7e3DnmXBEfz2YF1LA4W1wdu2wNPMnfOFJw03vej4VdbsfNbxgFgvgx9owK6mdvY7Il4RKJmV4K5aGaa8IUsZkZPkPOxuMhegn0If0EaTaUS0KE1eDrux0gGKJ4m0X8LYxz0Q6tABmY7uXp30p6KARWtbmV4fHwD6mgWici4W7piATRyaNjrrGDRQF%2FEIVRlbcj4HTPEPlNX1MlGRQr310SVX22p72EpZZfqf8u9plMr0%2FwkJiGmYRHJZuDUOKoOGco8zZp1O3OOUim1A6OHkcrakZ%2FGowfqEonpjx%2FltJV3VD9MqUyo9tdBELzn%2B7%2F1ni%2FH9mb%2BN0ozddJci5aTbxYdKMolCnzcNrAf7z2zaysyx4L0SAn4QfW2gDG7Rj5z1lPktl8O0iq7zKQHaNgIPZKWB5joRp7DAxEsvRMOOBkcAGOqUBiTCOdfFCwTdalQ6DClPS0I5lPwU%2FZyuxGKRTlam%2BPoYSf1wpo0UKVNJ3DcKSSY3Tovju%2FOTecw0xeSx1GZlqTSiNmS6Qx2Rka%2B7gkXXayq6fzgr6NFEMOJeHKf3Keq4vHbtQFLz7FZ3MMqnxpBSfAI18lKhcIeDZI6u0Oz7YJKGklwomyzxlNfPaqm8Ae3VoVpcy6LvZDWiNzfcv4cY8kWHOI6Kw&X-Amz-Signature=d6be0818568d8759a2661e3772a3bae99e520ed0022d08256dd888a3261686be&X-Amz-SignedHeaders=host&x-id=GetObject)
