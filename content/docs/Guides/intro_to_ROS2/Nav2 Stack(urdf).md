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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4WRGI3A%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDgHKUI6udg6a%2BVfJhnHTw7PynXzCuKFnjQclvPsUscmQIgV5a%2Bo6A7NnaBEAsSElUD%2FEZzGffPcL2oFnhwENO5HW4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDI5uCIN98biD9tsQEircA2cSQ70n6MpeLnHzfc48np2yerIarKnTFSi587td3LFkNo4AfrWSBCz1iUNlKz7ANwc50eMkcFhkwvJFq7rj9nujdYo7sCHlS7KollXGzjo0fCMX5tE9oJZ35%2F6029OMovbQohxL0w4P0Cdw4uF6p6NgAPxCr63oyPnbD7rpwF47IyenuKjCCChh%2Bbw8QGPJeaPmM8vcb7BzsJhAaH9ZUddUOpTsCmjv5ye5B3TyFRIVcGnQsFG8TP7wH4TjrqSIj65%2BHx5mnhgFgw0O8Lb2FfMW%2F%2B8rListYNn%2Fewtlbjfm6u1Ny1OpsFEMfBCHttsqwkR0ua0PjKQ5jG0oJbF74zeBAVp68WaFq8JWweCDSBmIoOXFaARsktf3b7zD5xg9h9O9JmrbOjYws3HvBlkqqp6Q13RudKvMrXwkOTCj2%2BpZwxCKdzji8BIDQgypuXRc%2FrTMH99Cm0b9ufKM8d2ANeX7bYPasg9gS0RET54lE006Rgy81EuAI6XrXj%2F3dzt40kjwNB0rRd3DfOrcPWyoYSS0VC9r%2FFfmoFmMx5iDXPDb9MZpYqbYhBPfbMCBsIp4YcI0C1QXTyVt1Al0osNFX3Nc4G9YrlF9JyX8bBrVuVXYev%2B7xhodD9nK5VflMKyZx70GOqUBYiq8wRe8ScpHSVlpGyGic5BRqP9YoWbJ35RBWhVXLL7ZCn9k54YowGXIurNBCxO0fuIL7c%2BlvSMcmCT94Es3BaYM45uJb%2F95b2Jk4K2Dbwfpc%2FS6KQyeMjJQN5Lvz%2F4Y325LRN1WuMqv%2BF5bIF46LDdJ3NJOLh61aEFPW1NIzUx9obrGVeZXYU7xtzHIfl9tMRrklTz2XEsPm7I%2BGzl2lWSfcom8&X-Amz-Signature=ebb85d518d8e8fe2683474dd35ffba73853606ae0a39c931f704c85dcc3416ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4WRGI3A%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDgHKUI6udg6a%2BVfJhnHTw7PynXzCuKFnjQclvPsUscmQIgV5a%2Bo6A7NnaBEAsSElUD%2FEZzGffPcL2oFnhwENO5HW4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDI5uCIN98biD9tsQEircA2cSQ70n6MpeLnHzfc48np2yerIarKnTFSi587td3LFkNo4AfrWSBCz1iUNlKz7ANwc50eMkcFhkwvJFq7rj9nujdYo7sCHlS7KollXGzjo0fCMX5tE9oJZ35%2F6029OMovbQohxL0w4P0Cdw4uF6p6NgAPxCr63oyPnbD7rpwF47IyenuKjCCChh%2Bbw8QGPJeaPmM8vcb7BzsJhAaH9ZUddUOpTsCmjv5ye5B3TyFRIVcGnQsFG8TP7wH4TjrqSIj65%2BHx5mnhgFgw0O8Lb2FfMW%2F%2B8rListYNn%2Fewtlbjfm6u1Ny1OpsFEMfBCHttsqwkR0ua0PjKQ5jG0oJbF74zeBAVp68WaFq8JWweCDSBmIoOXFaARsktf3b7zD5xg9h9O9JmrbOjYws3HvBlkqqp6Q13RudKvMrXwkOTCj2%2BpZwxCKdzji8BIDQgypuXRc%2FrTMH99Cm0b9ufKM8d2ANeX7bYPasg9gS0RET54lE006Rgy81EuAI6XrXj%2F3dzt40kjwNB0rRd3DfOrcPWyoYSS0VC9r%2FFfmoFmMx5iDXPDb9MZpYqbYhBPfbMCBsIp4YcI0C1QXTyVt1Al0osNFX3Nc4G9YrlF9JyX8bBrVuVXYev%2B7xhodD9nK5VflMKyZx70GOqUBYiq8wRe8ScpHSVlpGyGic5BRqP9YoWbJ35RBWhVXLL7ZCn9k54YowGXIurNBCxO0fuIL7c%2BlvSMcmCT94Es3BaYM45uJb%2F95b2Jk4K2Dbwfpc%2FS6KQyeMjJQN5Lvz%2F4Y325LRN1WuMqv%2BF5bIF46LDdJ3NJOLh61aEFPW1NIzUx9obrGVeZXYU7xtzHIfl9tMRrklTz2XEsPm7I%2BGzl2lWSfcom8&X-Amz-Signature=c0d79465244d9b53f094e6ac4d9f85b4b1cac876adff363f998edfd558a8c3e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4WRGI3A%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDgHKUI6udg6a%2BVfJhnHTw7PynXzCuKFnjQclvPsUscmQIgV5a%2Bo6A7NnaBEAsSElUD%2FEZzGffPcL2oFnhwENO5HW4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDI5uCIN98biD9tsQEircA2cSQ70n6MpeLnHzfc48np2yerIarKnTFSi587td3LFkNo4AfrWSBCz1iUNlKz7ANwc50eMkcFhkwvJFq7rj9nujdYo7sCHlS7KollXGzjo0fCMX5tE9oJZ35%2F6029OMovbQohxL0w4P0Cdw4uF6p6NgAPxCr63oyPnbD7rpwF47IyenuKjCCChh%2Bbw8QGPJeaPmM8vcb7BzsJhAaH9ZUddUOpTsCmjv5ye5B3TyFRIVcGnQsFG8TP7wH4TjrqSIj65%2BHx5mnhgFgw0O8Lb2FfMW%2F%2B8rListYNn%2Fewtlbjfm6u1Ny1OpsFEMfBCHttsqwkR0ua0PjKQ5jG0oJbF74zeBAVp68WaFq8JWweCDSBmIoOXFaARsktf3b7zD5xg9h9O9JmrbOjYws3HvBlkqqp6Q13RudKvMrXwkOTCj2%2BpZwxCKdzji8BIDQgypuXRc%2FrTMH99Cm0b9ufKM8d2ANeX7bYPasg9gS0RET54lE006Rgy81EuAI6XrXj%2F3dzt40kjwNB0rRd3DfOrcPWyoYSS0VC9r%2FFfmoFmMx5iDXPDb9MZpYqbYhBPfbMCBsIp4YcI0C1QXTyVt1Al0osNFX3Nc4G9YrlF9JyX8bBrVuVXYev%2B7xhodD9nK5VflMKyZx70GOqUBYiq8wRe8ScpHSVlpGyGic5BRqP9YoWbJ35RBWhVXLL7ZCn9k54YowGXIurNBCxO0fuIL7c%2BlvSMcmCT94Es3BaYM45uJb%2F95b2Jk4K2Dbwfpc%2FS6KQyeMjJQN5Lvz%2F4Y325LRN1WuMqv%2BF5bIF46LDdJ3NJOLh61aEFPW1NIzUx9obrGVeZXYU7xtzHIfl9tMRrklTz2XEsPm7I%2BGzl2lWSfcom8&X-Amz-Signature=fda9b419904fca488001a9cb658d958142a1b4cfb6bd778d6607c8409a2fb6be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4WRGI3A%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDgHKUI6udg6a%2BVfJhnHTw7PynXzCuKFnjQclvPsUscmQIgV5a%2Bo6A7NnaBEAsSElUD%2FEZzGffPcL2oFnhwENO5HW4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDI5uCIN98biD9tsQEircA2cSQ70n6MpeLnHzfc48np2yerIarKnTFSi587td3LFkNo4AfrWSBCz1iUNlKz7ANwc50eMkcFhkwvJFq7rj9nujdYo7sCHlS7KollXGzjo0fCMX5tE9oJZ35%2F6029OMovbQohxL0w4P0Cdw4uF6p6NgAPxCr63oyPnbD7rpwF47IyenuKjCCChh%2Bbw8QGPJeaPmM8vcb7BzsJhAaH9ZUddUOpTsCmjv5ye5B3TyFRIVcGnQsFG8TP7wH4TjrqSIj65%2BHx5mnhgFgw0O8Lb2FfMW%2F%2B8rListYNn%2Fewtlbjfm6u1Ny1OpsFEMfBCHttsqwkR0ua0PjKQ5jG0oJbF74zeBAVp68WaFq8JWweCDSBmIoOXFaARsktf3b7zD5xg9h9O9JmrbOjYws3HvBlkqqp6Q13RudKvMrXwkOTCj2%2BpZwxCKdzji8BIDQgypuXRc%2FrTMH99Cm0b9ufKM8d2ANeX7bYPasg9gS0RET54lE006Rgy81EuAI6XrXj%2F3dzt40kjwNB0rRd3DfOrcPWyoYSS0VC9r%2FFfmoFmMx5iDXPDb9MZpYqbYhBPfbMCBsIp4YcI0C1QXTyVt1Al0osNFX3Nc4G9YrlF9JyX8bBrVuVXYev%2B7xhodD9nK5VflMKyZx70GOqUBYiq8wRe8ScpHSVlpGyGic5BRqP9YoWbJ35RBWhVXLL7ZCn9k54YowGXIurNBCxO0fuIL7c%2BlvSMcmCT94Es3BaYM45uJb%2F95b2Jk4K2Dbwfpc%2FS6KQyeMjJQN5Lvz%2F4Y325LRN1WuMqv%2BF5bIF46LDdJ3NJOLh61aEFPW1NIzUx9obrGVeZXYU7xtzHIfl9tMRrklTz2XEsPm7I%2BGzl2lWSfcom8&X-Amz-Signature=bd3f07e56b2c9c5f48b18de9db77e1f0fd605d3dbc3a410a41aa98d98aaa0b8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4WRGI3A%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDgHKUI6udg6a%2BVfJhnHTw7PynXzCuKFnjQclvPsUscmQIgV5a%2Bo6A7NnaBEAsSElUD%2FEZzGffPcL2oFnhwENO5HW4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDI5uCIN98biD9tsQEircA2cSQ70n6MpeLnHzfc48np2yerIarKnTFSi587td3LFkNo4AfrWSBCz1iUNlKz7ANwc50eMkcFhkwvJFq7rj9nujdYo7sCHlS7KollXGzjo0fCMX5tE9oJZ35%2F6029OMovbQohxL0w4P0Cdw4uF6p6NgAPxCr63oyPnbD7rpwF47IyenuKjCCChh%2Bbw8QGPJeaPmM8vcb7BzsJhAaH9ZUddUOpTsCmjv5ye5B3TyFRIVcGnQsFG8TP7wH4TjrqSIj65%2BHx5mnhgFgw0O8Lb2FfMW%2F%2B8rListYNn%2Fewtlbjfm6u1Ny1OpsFEMfBCHttsqwkR0ua0PjKQ5jG0oJbF74zeBAVp68WaFq8JWweCDSBmIoOXFaARsktf3b7zD5xg9h9O9JmrbOjYws3HvBlkqqp6Q13RudKvMrXwkOTCj2%2BpZwxCKdzji8BIDQgypuXRc%2FrTMH99Cm0b9ufKM8d2ANeX7bYPasg9gS0RET54lE006Rgy81EuAI6XrXj%2F3dzt40kjwNB0rRd3DfOrcPWyoYSS0VC9r%2FFfmoFmMx5iDXPDb9MZpYqbYhBPfbMCBsIp4YcI0C1QXTyVt1Al0osNFX3Nc4G9YrlF9JyX8bBrVuVXYev%2B7xhodD9nK5VflMKyZx70GOqUBYiq8wRe8ScpHSVlpGyGic5BRqP9YoWbJ35RBWhVXLL7ZCn9k54YowGXIurNBCxO0fuIL7c%2BlvSMcmCT94Es3BaYM45uJb%2F95b2Jk4K2Dbwfpc%2FS6KQyeMjJQN5Lvz%2F4Y325LRN1WuMqv%2BF5bIF46LDdJ3NJOLh61aEFPW1NIzUx9obrGVeZXYU7xtzHIfl9tMRrklTz2XEsPm7I%2BGzl2lWSfcom8&X-Amz-Signature=ac5ffe4b5feccbf61352ac2a8b8ad4248a20a222de1dd85c0bf7becd23ed6bef&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4WRGI3A%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T170206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDgHKUI6udg6a%2BVfJhnHTw7PynXzCuKFnjQclvPsUscmQIgV5a%2Bo6A7NnaBEAsSElUD%2FEZzGffPcL2oFnhwENO5HW4q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDI5uCIN98biD9tsQEircA2cSQ70n6MpeLnHzfc48np2yerIarKnTFSi587td3LFkNo4AfrWSBCz1iUNlKz7ANwc50eMkcFhkwvJFq7rj9nujdYo7sCHlS7KollXGzjo0fCMX5tE9oJZ35%2F6029OMovbQohxL0w4P0Cdw4uF6p6NgAPxCr63oyPnbD7rpwF47IyenuKjCCChh%2Bbw8QGPJeaPmM8vcb7BzsJhAaH9ZUddUOpTsCmjv5ye5B3TyFRIVcGnQsFG8TP7wH4TjrqSIj65%2BHx5mnhgFgw0O8Lb2FfMW%2F%2B8rListYNn%2Fewtlbjfm6u1Ny1OpsFEMfBCHttsqwkR0ua0PjKQ5jG0oJbF74zeBAVp68WaFq8JWweCDSBmIoOXFaARsktf3b7zD5xg9h9O9JmrbOjYws3HvBlkqqp6Q13RudKvMrXwkOTCj2%2BpZwxCKdzji8BIDQgypuXRc%2FrTMH99Cm0b9ufKM8d2ANeX7bYPasg9gS0RET54lE006Rgy81EuAI6XrXj%2F3dzt40kjwNB0rRd3DfOrcPWyoYSS0VC9r%2FFfmoFmMx5iDXPDb9MZpYqbYhBPfbMCBsIp4YcI0C1QXTyVt1Al0osNFX3Nc4G9YrlF9JyX8bBrVuVXYev%2B7xhodD9nK5VflMKyZx70GOqUBYiq8wRe8ScpHSVlpGyGic5BRqP9YoWbJ35RBWhVXLL7ZCn9k54YowGXIurNBCxO0fuIL7c%2BlvSMcmCT94Es3BaYM45uJb%2F95b2Jk4K2Dbwfpc%2FS6KQyeMjJQN5Lvz%2F4Y325LRN1WuMqv%2BF5bIF46LDdJ3NJOLh61aEFPW1NIzUx9obrGVeZXYU7xtzHIfl9tMRrklTz2XEsPm7I%2BGzl2lWSfcom8&X-Amz-Signature=25ae4683ba865cf55b60166482296663738d7fbf3e2c165bd3096fda5e8baa92&X-Amz-SignedHeaders=host&x-id=GetObject)
