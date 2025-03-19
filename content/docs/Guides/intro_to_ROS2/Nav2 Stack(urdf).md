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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSLANK5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDi9c5MjK19JJbsWpXwsd3EZeZrQqP8vIadTo5EqJNxpAiEAhw5irshWvukREOwQVIExWkuPyRArnllPktArsgMKYIgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI8CCR8QdWBInIBstyrcA4xUmNl7oGlE%2FllVmj%2B9mZAHnL3S4B1ux9UEwKkCbJTXta%2B2hP7ALbKWEIwWp3RQ8W%2Fkuf3oTF9gkmctiARK6Uw5bLAFMIPRzuEly5Xsl1x96pjtC1KqvrkiTvxmpaNfZg8Cjks1l9lvlfvFIhO7h9Jb%2FAkD4PCnwLbsnPmbIB2N35laTMjwxtWbcWpvE840rLDH5xl5mWT%2FDr9TZ7tfZOKpseht4bugdXeVVPx4FyZu9hp%2BjkKP0Sr4P3vr5lApSRJs83aHYnNG9D4pkQJYnmIWywNrWATXGhZwXtog5ixLDedPBBwFX2kDOVwQzOida%2BTwelqLVAlwc%2BvLP5Fgm09ziP0IJb8HAozDUZ0eoqa9ZIFI7qwgZ136MBwr116o89bhe2MAc%2BeNXFOWgaj34CaZLC8uxCqpTVET%2Bv34esc89NhE1StcD4dZQYopZwJMKlW6fFMQVwLnImoWyP0X96l5lT9zYQ%2BlmNbqJccCqVASizyPoQbPJCgaWcrb%2BUwKzZ1h%2Bgb2x8mdZ%2F5GPyq72rbZFNYJRIPl0UmZcLIrAKVv1NL3u%2BxY5n7EMkAKm8LDpO0G9%2BuOPrrNweT3OabgmnTDBS9mJZMpb0ygfJ1ou86mmlBwM3pExRNaY%2FoiMKbg6r4GOqUBKik8u50eaqkbaUi7VabF4DPofYFqUJteu0tel2ByDt1KtIu8g8Kr1Vl9MV3mcWmoi%2FPS6tpBHMMrmq9y%2FpqskoMIleZvc5G2B%2BN0LXNfb01BbHOddJTgQ9CcvfnT9w7dySA1naJF5Cl84hhF5FlV8eS5O2Xu2X1nFEZBt2hIqbRLBKXijGIRxUDR6Cjp7PAgPtTDdG3pO%2Fm5wbo6WD7ZSDsWdgJK&X-Amz-Signature=3af7fc0ee8ed954dd42d05314d6a499cacf7d815906e737f32bfba1c8f2d717c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSLANK5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDi9c5MjK19JJbsWpXwsd3EZeZrQqP8vIadTo5EqJNxpAiEAhw5irshWvukREOwQVIExWkuPyRArnllPktArsgMKYIgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI8CCR8QdWBInIBstyrcA4xUmNl7oGlE%2FllVmj%2B9mZAHnL3S4B1ux9UEwKkCbJTXta%2B2hP7ALbKWEIwWp3RQ8W%2Fkuf3oTF9gkmctiARK6Uw5bLAFMIPRzuEly5Xsl1x96pjtC1KqvrkiTvxmpaNfZg8Cjks1l9lvlfvFIhO7h9Jb%2FAkD4PCnwLbsnPmbIB2N35laTMjwxtWbcWpvE840rLDH5xl5mWT%2FDr9TZ7tfZOKpseht4bugdXeVVPx4FyZu9hp%2BjkKP0Sr4P3vr5lApSRJs83aHYnNG9D4pkQJYnmIWywNrWATXGhZwXtog5ixLDedPBBwFX2kDOVwQzOida%2BTwelqLVAlwc%2BvLP5Fgm09ziP0IJb8HAozDUZ0eoqa9ZIFI7qwgZ136MBwr116o89bhe2MAc%2BeNXFOWgaj34CaZLC8uxCqpTVET%2Bv34esc89NhE1StcD4dZQYopZwJMKlW6fFMQVwLnImoWyP0X96l5lT9zYQ%2BlmNbqJccCqVASizyPoQbPJCgaWcrb%2BUwKzZ1h%2Bgb2x8mdZ%2F5GPyq72rbZFNYJRIPl0UmZcLIrAKVv1NL3u%2BxY5n7EMkAKm8LDpO0G9%2BuOPrrNweT3OabgmnTDBS9mJZMpb0ygfJ1ou86mmlBwM3pExRNaY%2FoiMKbg6r4GOqUBKik8u50eaqkbaUi7VabF4DPofYFqUJteu0tel2ByDt1KtIu8g8Kr1Vl9MV3mcWmoi%2FPS6tpBHMMrmq9y%2FpqskoMIleZvc5G2B%2BN0LXNfb01BbHOddJTgQ9CcvfnT9w7dySA1naJF5Cl84hhF5FlV8eS5O2Xu2X1nFEZBt2hIqbRLBKXijGIRxUDR6Cjp7PAgPtTDdG3pO%2Fm5wbo6WD7ZSDsWdgJK&X-Amz-Signature=e44dca9c4a363029804f69e4984ccabc40ed38072b0973add2fd05beec179386&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSLANK5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDi9c5MjK19JJbsWpXwsd3EZeZrQqP8vIadTo5EqJNxpAiEAhw5irshWvukREOwQVIExWkuPyRArnllPktArsgMKYIgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI8CCR8QdWBInIBstyrcA4xUmNl7oGlE%2FllVmj%2B9mZAHnL3S4B1ux9UEwKkCbJTXta%2B2hP7ALbKWEIwWp3RQ8W%2Fkuf3oTF9gkmctiARK6Uw5bLAFMIPRzuEly5Xsl1x96pjtC1KqvrkiTvxmpaNfZg8Cjks1l9lvlfvFIhO7h9Jb%2FAkD4PCnwLbsnPmbIB2N35laTMjwxtWbcWpvE840rLDH5xl5mWT%2FDr9TZ7tfZOKpseht4bugdXeVVPx4FyZu9hp%2BjkKP0Sr4P3vr5lApSRJs83aHYnNG9D4pkQJYnmIWywNrWATXGhZwXtog5ixLDedPBBwFX2kDOVwQzOida%2BTwelqLVAlwc%2BvLP5Fgm09ziP0IJb8HAozDUZ0eoqa9ZIFI7qwgZ136MBwr116o89bhe2MAc%2BeNXFOWgaj34CaZLC8uxCqpTVET%2Bv34esc89NhE1StcD4dZQYopZwJMKlW6fFMQVwLnImoWyP0X96l5lT9zYQ%2BlmNbqJccCqVASizyPoQbPJCgaWcrb%2BUwKzZ1h%2Bgb2x8mdZ%2F5GPyq72rbZFNYJRIPl0UmZcLIrAKVv1NL3u%2BxY5n7EMkAKm8LDpO0G9%2BuOPrrNweT3OabgmnTDBS9mJZMpb0ygfJ1ou86mmlBwM3pExRNaY%2FoiMKbg6r4GOqUBKik8u50eaqkbaUi7VabF4DPofYFqUJteu0tel2ByDt1KtIu8g8Kr1Vl9MV3mcWmoi%2FPS6tpBHMMrmq9y%2FpqskoMIleZvc5G2B%2BN0LXNfb01BbHOddJTgQ9CcvfnT9w7dySA1naJF5Cl84hhF5FlV8eS5O2Xu2X1nFEZBt2hIqbRLBKXijGIRxUDR6Cjp7PAgPtTDdG3pO%2Fm5wbo6WD7ZSDsWdgJK&X-Amz-Signature=ccd8db1ac9adfd9a1c1418a56d33ebccec45b5be820c77bd9400f0aa5cb1cee0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSLANK5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDi9c5MjK19JJbsWpXwsd3EZeZrQqP8vIadTo5EqJNxpAiEAhw5irshWvukREOwQVIExWkuPyRArnllPktArsgMKYIgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI8CCR8QdWBInIBstyrcA4xUmNl7oGlE%2FllVmj%2B9mZAHnL3S4B1ux9UEwKkCbJTXta%2B2hP7ALbKWEIwWp3RQ8W%2Fkuf3oTF9gkmctiARK6Uw5bLAFMIPRzuEly5Xsl1x96pjtC1KqvrkiTvxmpaNfZg8Cjks1l9lvlfvFIhO7h9Jb%2FAkD4PCnwLbsnPmbIB2N35laTMjwxtWbcWpvE840rLDH5xl5mWT%2FDr9TZ7tfZOKpseht4bugdXeVVPx4FyZu9hp%2BjkKP0Sr4P3vr5lApSRJs83aHYnNG9D4pkQJYnmIWywNrWATXGhZwXtog5ixLDedPBBwFX2kDOVwQzOida%2BTwelqLVAlwc%2BvLP5Fgm09ziP0IJb8HAozDUZ0eoqa9ZIFI7qwgZ136MBwr116o89bhe2MAc%2BeNXFOWgaj34CaZLC8uxCqpTVET%2Bv34esc89NhE1StcD4dZQYopZwJMKlW6fFMQVwLnImoWyP0X96l5lT9zYQ%2BlmNbqJccCqVASizyPoQbPJCgaWcrb%2BUwKzZ1h%2Bgb2x8mdZ%2F5GPyq72rbZFNYJRIPl0UmZcLIrAKVv1NL3u%2BxY5n7EMkAKm8LDpO0G9%2BuOPrrNweT3OabgmnTDBS9mJZMpb0ygfJ1ou86mmlBwM3pExRNaY%2FoiMKbg6r4GOqUBKik8u50eaqkbaUi7VabF4DPofYFqUJteu0tel2ByDt1KtIu8g8Kr1Vl9MV3mcWmoi%2FPS6tpBHMMrmq9y%2FpqskoMIleZvc5G2B%2BN0LXNfb01BbHOddJTgQ9CcvfnT9w7dySA1naJF5Cl84hhF5FlV8eS5O2Xu2X1nFEZBt2hIqbRLBKXijGIRxUDR6Cjp7PAgPtTDdG3pO%2Fm5wbo6WD7ZSDsWdgJK&X-Amz-Signature=944a388513f3ee0363fe35a1f513704a2635ad811c13d453dde466b22d0823ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSLANK5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDi9c5MjK19JJbsWpXwsd3EZeZrQqP8vIadTo5EqJNxpAiEAhw5irshWvukREOwQVIExWkuPyRArnllPktArsgMKYIgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI8CCR8QdWBInIBstyrcA4xUmNl7oGlE%2FllVmj%2B9mZAHnL3S4B1ux9UEwKkCbJTXta%2B2hP7ALbKWEIwWp3RQ8W%2Fkuf3oTF9gkmctiARK6Uw5bLAFMIPRzuEly5Xsl1x96pjtC1KqvrkiTvxmpaNfZg8Cjks1l9lvlfvFIhO7h9Jb%2FAkD4PCnwLbsnPmbIB2N35laTMjwxtWbcWpvE840rLDH5xl5mWT%2FDr9TZ7tfZOKpseht4bugdXeVVPx4FyZu9hp%2BjkKP0Sr4P3vr5lApSRJs83aHYnNG9D4pkQJYnmIWywNrWATXGhZwXtog5ixLDedPBBwFX2kDOVwQzOida%2BTwelqLVAlwc%2BvLP5Fgm09ziP0IJb8HAozDUZ0eoqa9ZIFI7qwgZ136MBwr116o89bhe2MAc%2BeNXFOWgaj34CaZLC8uxCqpTVET%2Bv34esc89NhE1StcD4dZQYopZwJMKlW6fFMQVwLnImoWyP0X96l5lT9zYQ%2BlmNbqJccCqVASizyPoQbPJCgaWcrb%2BUwKzZ1h%2Bgb2x8mdZ%2F5GPyq72rbZFNYJRIPl0UmZcLIrAKVv1NL3u%2BxY5n7EMkAKm8LDpO0G9%2BuOPrrNweT3OabgmnTDBS9mJZMpb0ygfJ1ou86mmlBwM3pExRNaY%2FoiMKbg6r4GOqUBKik8u50eaqkbaUi7VabF4DPofYFqUJteu0tel2ByDt1KtIu8g8Kr1Vl9MV3mcWmoi%2FPS6tpBHMMrmq9y%2FpqskoMIleZvc5G2B%2BN0LXNfb01BbHOddJTgQ9CcvfnT9w7dySA1naJF5Cl84hhF5FlV8eS5O2Xu2X1nFEZBt2hIqbRLBKXijGIRxUDR6Cjp7PAgPtTDdG3pO%2Fm5wbo6WD7ZSDsWdgJK&X-Amz-Signature=50b2f55e704b1ab29f1ee2eac21728d179da7d17c8de253038aa64f79aa29544&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXSLANK5%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIDi9c5MjK19JJbsWpXwsd3EZeZrQqP8vIadTo5EqJNxpAiEAhw5irshWvukREOwQVIExWkuPyRArnllPktArsgMKYIgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDI8CCR8QdWBInIBstyrcA4xUmNl7oGlE%2FllVmj%2B9mZAHnL3S4B1ux9UEwKkCbJTXta%2B2hP7ALbKWEIwWp3RQ8W%2Fkuf3oTF9gkmctiARK6Uw5bLAFMIPRzuEly5Xsl1x96pjtC1KqvrkiTvxmpaNfZg8Cjks1l9lvlfvFIhO7h9Jb%2FAkD4PCnwLbsnPmbIB2N35laTMjwxtWbcWpvE840rLDH5xl5mWT%2FDr9TZ7tfZOKpseht4bugdXeVVPx4FyZu9hp%2BjkKP0Sr4P3vr5lApSRJs83aHYnNG9D4pkQJYnmIWywNrWATXGhZwXtog5ixLDedPBBwFX2kDOVwQzOida%2BTwelqLVAlwc%2BvLP5Fgm09ziP0IJb8HAozDUZ0eoqa9ZIFI7qwgZ136MBwr116o89bhe2MAc%2BeNXFOWgaj34CaZLC8uxCqpTVET%2Bv34esc89NhE1StcD4dZQYopZwJMKlW6fFMQVwLnImoWyP0X96l5lT9zYQ%2BlmNbqJccCqVASizyPoQbPJCgaWcrb%2BUwKzZ1h%2Bgb2x8mdZ%2F5GPyq72rbZFNYJRIPl0UmZcLIrAKVv1NL3u%2BxY5n7EMkAKm8LDpO0G9%2BuOPrrNweT3OabgmnTDBS9mJZMpb0ygfJ1ou86mmlBwM3pExRNaY%2FoiMKbg6r4GOqUBKik8u50eaqkbaUi7VabF4DPofYFqUJteu0tel2ByDt1KtIu8g8Kr1Vl9MV3mcWmoi%2FPS6tpBHMMrmq9y%2FpqskoMIleZvc5G2B%2BN0LXNfb01BbHOddJTgQ9CcvfnT9w7dySA1naJF5Cl84hhF5FlV8eS5O2Xu2X1nFEZBt2hIqbRLBKXijGIRxUDR6Cjp7PAgPtTDdG3pO%2Fm5wbo6WD7ZSDsWdgJK&X-Amz-Signature=4149aa679ce4b2edf987f04b373b7ef2fd4eeeb18088eba04d2a0574666408ce&X-Amz-SignedHeaders=host&x-id=GetObject)
