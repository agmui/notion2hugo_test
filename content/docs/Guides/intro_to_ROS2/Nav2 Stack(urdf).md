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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BVOYL3J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIC0gN7ZYtyLqrSuR0B7VEvKT0ecT0sNCCGlGLilZDV%2BfAiEAgz3g9VwuZCyJkokAcpC5pfLLw4gmnwjwbCtAC9dvZg4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEas%2Fk%2F5FlFG9grJfyrcAxCfICuMVAgmE6gkGvs9NoBrQb8QmOIn%2FHx9Mg67Xa%2FEIm1Cq7NaA3ynV5AkV9rWc%2B%2BXEgVjjBj6ZElR7ngUJsjvds269nJEQldJiui7xx9ZdjTpsX6vUQjxG2tVH2bbhIKe7GZqv001rPY8XKBDBUdaXvsBJZyVEKhF02n3%2BN00lScojvypBt9tYM1A86X0eQkeqoZaWkJu5A3RjkVakEUg7cwTS%2FpwLc8uel%2Fodnx4gR62e8U1g9vyEfqfBiE42RUz0mauIxqm8WN2k9wGV5wgVyaqKCoN%2FLDsrorxjAQVg2IV0YUSzWqcsSdW38zMxluxrJnG8LVMIaM7mhHz08AE%2FdW7JzPkjxkysLHqJZTMhhh3TTnsUbV8Yg2X5VsCef39lgNlHdjFMUpZDhVsduKEaT8PKI%2FTLiWKqWijfWcMXNZ0aFbqQPwiauKy3czzdFCZ%2BFuwncz7LQVcmYxu49LINdtUeZEKLSudjkE%2FbXDtsndkaXOBhl1zR%2Bq10o%2BWcgl6cCfbb4oYX7noXgKOj%2Fz4vzNFfRDOSxCLvoLbsRl%2Fo7MM6TrtPr34cK4HmcIL2Q5dBOXoSxXSypiy0POKCBX4efygHrqkVJjRx3qOqSGuEUdXRqof%2FvW7QZ3%2FMNju378GOqUB%2BxeWPBZ3epv9QQfn%2FB82zLkW8hG%2B2TedYGFDYikkynoSB8UmBozmLLsLxnLOj1jeuTgu6EClyn5AjY4fZtcnakw60XKeS5VLL6SvWGbsBWBFzQmEvWG%2BjoOqEVmKn8spV77btSiuCmL5vfRCbSukyZzp5FYa5k5l2CdnFcN7J4b0ACxB2Ix9C289WlSvkZm5tlzOV3MAV2tdngntVbqMEXEUT%2FAn&X-Amz-Signature=085e23cca4c5b4b66aa55f80972c59c8f506ea3010097b9644006b3021fdfcbc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BVOYL3J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIC0gN7ZYtyLqrSuR0B7VEvKT0ecT0sNCCGlGLilZDV%2BfAiEAgz3g9VwuZCyJkokAcpC5pfLLw4gmnwjwbCtAC9dvZg4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEas%2Fk%2F5FlFG9grJfyrcAxCfICuMVAgmE6gkGvs9NoBrQb8QmOIn%2FHx9Mg67Xa%2FEIm1Cq7NaA3ynV5AkV9rWc%2B%2BXEgVjjBj6ZElR7ngUJsjvds269nJEQldJiui7xx9ZdjTpsX6vUQjxG2tVH2bbhIKe7GZqv001rPY8XKBDBUdaXvsBJZyVEKhF02n3%2BN00lScojvypBt9tYM1A86X0eQkeqoZaWkJu5A3RjkVakEUg7cwTS%2FpwLc8uel%2Fodnx4gR62e8U1g9vyEfqfBiE42RUz0mauIxqm8WN2k9wGV5wgVyaqKCoN%2FLDsrorxjAQVg2IV0YUSzWqcsSdW38zMxluxrJnG8LVMIaM7mhHz08AE%2FdW7JzPkjxkysLHqJZTMhhh3TTnsUbV8Yg2X5VsCef39lgNlHdjFMUpZDhVsduKEaT8PKI%2FTLiWKqWijfWcMXNZ0aFbqQPwiauKy3czzdFCZ%2BFuwncz7LQVcmYxu49LINdtUeZEKLSudjkE%2FbXDtsndkaXOBhl1zR%2Bq10o%2BWcgl6cCfbb4oYX7noXgKOj%2Fz4vzNFfRDOSxCLvoLbsRl%2Fo7MM6TrtPr34cK4HmcIL2Q5dBOXoSxXSypiy0POKCBX4efygHrqkVJjRx3qOqSGuEUdXRqof%2FvW7QZ3%2FMNju378GOqUB%2BxeWPBZ3epv9QQfn%2FB82zLkW8hG%2B2TedYGFDYikkynoSB8UmBozmLLsLxnLOj1jeuTgu6EClyn5AjY4fZtcnakw60XKeS5VLL6SvWGbsBWBFzQmEvWG%2BjoOqEVmKn8spV77btSiuCmL5vfRCbSukyZzp5FYa5k5l2CdnFcN7J4b0ACxB2Ix9C289WlSvkZm5tlzOV3MAV2tdngntVbqMEXEUT%2FAn&X-Amz-Signature=17abdc2f32113ae8f7d9667d01f402d629b31d3684d2f131627022b5c55c2e26&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BVOYL3J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIC0gN7ZYtyLqrSuR0B7VEvKT0ecT0sNCCGlGLilZDV%2BfAiEAgz3g9VwuZCyJkokAcpC5pfLLw4gmnwjwbCtAC9dvZg4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEas%2Fk%2F5FlFG9grJfyrcAxCfICuMVAgmE6gkGvs9NoBrQb8QmOIn%2FHx9Mg67Xa%2FEIm1Cq7NaA3ynV5AkV9rWc%2B%2BXEgVjjBj6ZElR7ngUJsjvds269nJEQldJiui7xx9ZdjTpsX6vUQjxG2tVH2bbhIKe7GZqv001rPY8XKBDBUdaXvsBJZyVEKhF02n3%2BN00lScojvypBt9tYM1A86X0eQkeqoZaWkJu5A3RjkVakEUg7cwTS%2FpwLc8uel%2Fodnx4gR62e8U1g9vyEfqfBiE42RUz0mauIxqm8WN2k9wGV5wgVyaqKCoN%2FLDsrorxjAQVg2IV0YUSzWqcsSdW38zMxluxrJnG8LVMIaM7mhHz08AE%2FdW7JzPkjxkysLHqJZTMhhh3TTnsUbV8Yg2X5VsCef39lgNlHdjFMUpZDhVsduKEaT8PKI%2FTLiWKqWijfWcMXNZ0aFbqQPwiauKy3czzdFCZ%2BFuwncz7LQVcmYxu49LINdtUeZEKLSudjkE%2FbXDtsndkaXOBhl1zR%2Bq10o%2BWcgl6cCfbb4oYX7noXgKOj%2Fz4vzNFfRDOSxCLvoLbsRl%2Fo7MM6TrtPr34cK4HmcIL2Q5dBOXoSxXSypiy0POKCBX4efygHrqkVJjRx3qOqSGuEUdXRqof%2FvW7QZ3%2FMNju378GOqUB%2BxeWPBZ3epv9QQfn%2FB82zLkW8hG%2B2TedYGFDYikkynoSB8UmBozmLLsLxnLOj1jeuTgu6EClyn5AjY4fZtcnakw60XKeS5VLL6SvWGbsBWBFzQmEvWG%2BjoOqEVmKn8spV77btSiuCmL5vfRCbSukyZzp5FYa5k5l2CdnFcN7J4b0ACxB2Ix9C289WlSvkZm5tlzOV3MAV2tdngntVbqMEXEUT%2FAn&X-Amz-Signature=5b99eb923ffc7eb81933f5aeec2fea477a401103a2b88b671c1b9ec17a54eee7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BVOYL3J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIC0gN7ZYtyLqrSuR0B7VEvKT0ecT0sNCCGlGLilZDV%2BfAiEAgz3g9VwuZCyJkokAcpC5pfLLw4gmnwjwbCtAC9dvZg4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEas%2Fk%2F5FlFG9grJfyrcAxCfICuMVAgmE6gkGvs9NoBrQb8QmOIn%2FHx9Mg67Xa%2FEIm1Cq7NaA3ynV5AkV9rWc%2B%2BXEgVjjBj6ZElR7ngUJsjvds269nJEQldJiui7xx9ZdjTpsX6vUQjxG2tVH2bbhIKe7GZqv001rPY8XKBDBUdaXvsBJZyVEKhF02n3%2BN00lScojvypBt9tYM1A86X0eQkeqoZaWkJu5A3RjkVakEUg7cwTS%2FpwLc8uel%2Fodnx4gR62e8U1g9vyEfqfBiE42RUz0mauIxqm8WN2k9wGV5wgVyaqKCoN%2FLDsrorxjAQVg2IV0YUSzWqcsSdW38zMxluxrJnG8LVMIaM7mhHz08AE%2FdW7JzPkjxkysLHqJZTMhhh3TTnsUbV8Yg2X5VsCef39lgNlHdjFMUpZDhVsduKEaT8PKI%2FTLiWKqWijfWcMXNZ0aFbqQPwiauKy3czzdFCZ%2BFuwncz7LQVcmYxu49LINdtUeZEKLSudjkE%2FbXDtsndkaXOBhl1zR%2Bq10o%2BWcgl6cCfbb4oYX7noXgKOj%2Fz4vzNFfRDOSxCLvoLbsRl%2Fo7MM6TrtPr34cK4HmcIL2Q5dBOXoSxXSypiy0POKCBX4efygHrqkVJjRx3qOqSGuEUdXRqof%2FvW7QZ3%2FMNju378GOqUB%2BxeWPBZ3epv9QQfn%2FB82zLkW8hG%2B2TedYGFDYikkynoSB8UmBozmLLsLxnLOj1jeuTgu6EClyn5AjY4fZtcnakw60XKeS5VLL6SvWGbsBWBFzQmEvWG%2BjoOqEVmKn8spV77btSiuCmL5vfRCbSukyZzp5FYa5k5l2CdnFcN7J4b0ACxB2Ix9C289WlSvkZm5tlzOV3MAV2tdngntVbqMEXEUT%2FAn&X-Amz-Signature=b6418dc0ce96b8ca0184a968c2555c473e316f58d5ff5c7b2ba59fea293bd3c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BVOYL3J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIC0gN7ZYtyLqrSuR0B7VEvKT0ecT0sNCCGlGLilZDV%2BfAiEAgz3g9VwuZCyJkokAcpC5pfLLw4gmnwjwbCtAC9dvZg4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEas%2Fk%2F5FlFG9grJfyrcAxCfICuMVAgmE6gkGvs9NoBrQb8QmOIn%2FHx9Mg67Xa%2FEIm1Cq7NaA3ynV5AkV9rWc%2B%2BXEgVjjBj6ZElR7ngUJsjvds269nJEQldJiui7xx9ZdjTpsX6vUQjxG2tVH2bbhIKe7GZqv001rPY8XKBDBUdaXvsBJZyVEKhF02n3%2BN00lScojvypBt9tYM1A86X0eQkeqoZaWkJu5A3RjkVakEUg7cwTS%2FpwLc8uel%2Fodnx4gR62e8U1g9vyEfqfBiE42RUz0mauIxqm8WN2k9wGV5wgVyaqKCoN%2FLDsrorxjAQVg2IV0YUSzWqcsSdW38zMxluxrJnG8LVMIaM7mhHz08AE%2FdW7JzPkjxkysLHqJZTMhhh3TTnsUbV8Yg2X5VsCef39lgNlHdjFMUpZDhVsduKEaT8PKI%2FTLiWKqWijfWcMXNZ0aFbqQPwiauKy3czzdFCZ%2BFuwncz7LQVcmYxu49LINdtUeZEKLSudjkE%2FbXDtsndkaXOBhl1zR%2Bq10o%2BWcgl6cCfbb4oYX7noXgKOj%2Fz4vzNFfRDOSxCLvoLbsRl%2Fo7MM6TrtPr34cK4HmcIL2Q5dBOXoSxXSypiy0POKCBX4efygHrqkVJjRx3qOqSGuEUdXRqof%2FvW7QZ3%2FMNju378GOqUB%2BxeWPBZ3epv9QQfn%2FB82zLkW8hG%2B2TedYGFDYikkynoSB8UmBozmLLsLxnLOj1jeuTgu6EClyn5AjY4fZtcnakw60XKeS5VLL6SvWGbsBWBFzQmEvWG%2BjoOqEVmKn8spV77btSiuCmL5vfRCbSukyZzp5FYa5k5l2CdnFcN7J4b0ACxB2Ix9C289WlSvkZm5tlzOV3MAV2tdngntVbqMEXEUT%2FAn&X-Amz-Signature=3cba97a2d767d9745d6608ae6371ee6d946e794f2d0342da32f6fe4d229acc98&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BVOYL3J%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T170759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIC0gN7ZYtyLqrSuR0B7VEvKT0ecT0sNCCGlGLilZDV%2BfAiEAgz3g9VwuZCyJkokAcpC5pfLLw4gmnwjwbCtAC9dvZg4qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEas%2Fk%2F5FlFG9grJfyrcAxCfICuMVAgmE6gkGvs9NoBrQb8QmOIn%2FHx9Mg67Xa%2FEIm1Cq7NaA3ynV5AkV9rWc%2B%2BXEgVjjBj6ZElR7ngUJsjvds269nJEQldJiui7xx9ZdjTpsX6vUQjxG2tVH2bbhIKe7GZqv001rPY8XKBDBUdaXvsBJZyVEKhF02n3%2BN00lScojvypBt9tYM1A86X0eQkeqoZaWkJu5A3RjkVakEUg7cwTS%2FpwLc8uel%2Fodnx4gR62e8U1g9vyEfqfBiE42RUz0mauIxqm8WN2k9wGV5wgVyaqKCoN%2FLDsrorxjAQVg2IV0YUSzWqcsSdW38zMxluxrJnG8LVMIaM7mhHz08AE%2FdW7JzPkjxkysLHqJZTMhhh3TTnsUbV8Yg2X5VsCef39lgNlHdjFMUpZDhVsduKEaT8PKI%2FTLiWKqWijfWcMXNZ0aFbqQPwiauKy3czzdFCZ%2BFuwncz7LQVcmYxu49LINdtUeZEKLSudjkE%2FbXDtsndkaXOBhl1zR%2Bq10o%2BWcgl6cCfbb4oYX7noXgKOj%2Fz4vzNFfRDOSxCLvoLbsRl%2Fo7MM6TrtPr34cK4HmcIL2Q5dBOXoSxXSypiy0POKCBX4efygHrqkVJjRx3qOqSGuEUdXRqof%2FvW7QZ3%2FMNju378GOqUB%2BxeWPBZ3epv9QQfn%2FB82zLkW8hG%2B2TedYGFDYikkynoSB8UmBozmLLsLxnLOj1jeuTgu6EClyn5AjY4fZtcnakw60XKeS5VLL6SvWGbsBWBFzQmEvWG%2BjoOqEVmKn8spV77btSiuCmL5vfRCbSukyZzp5FYa5k5l2CdnFcN7J4b0ACxB2Ix9C289WlSvkZm5tlzOV3MAV2tdngntVbqMEXEUT%2FAn&X-Amz-Signature=96c0cbf733ac0ef93fe9b8b768265c1c10c774d0d64b68a142701a685575ecea&X-Amz-SignedHeaders=host&x-id=GetObject)
