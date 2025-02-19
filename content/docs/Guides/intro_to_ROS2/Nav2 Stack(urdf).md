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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4TC2Y7T%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDUWWyKxU8xWVk3m3D%2FmTbOrRP5YakjXPhTRh3qC%2FliUwIgYSc1mbq6U8ZcS2x7DZ9e9Ue%2FjiLBnPxdsB3HZvXekZwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC03eo7FzIkpqnXpfCrcA7Bm5eIsxqGVs%2FF0GbBInsSJGw9ch1owS7TG%2Fgpro40sHg%2BbWkyANXgwAOEA33bWTJGl2NP8u98hJTH4lH9i%2B9JrZ61H%2FjGy%2FMlADdSATKBNVvGu9KVHV8NT4SogDWRIsEEHgMeXq0afhkFTZPp6G366k0bU8rllQf7TSCvxOfHCNt0m8P2eZMWK86EKRenwXhWG2qCGlEAhsPMFWLwQxIbBHkYzz9O9u71c46rOzvrL0PPybCWALyjLkaF2BfUMUtHpomExdHj0iBrJxwhteAnLWRSqbdLLM2F0I2EkZLmENr83gET6DsU9CZKW%2F0VDL7Ye%2BcPnGUjUNJaP8XyuFg%2FGQ2jdE4m%2FubJguezxPjqiIM0kzFipxDXj4ojCXtikpZViTljDEq0ufNVlc7V7LUDew2NVnoBiQz1Oix7oe4vnYWSIokdd5ReaeJycaA8fPjatQH1ZqqOrLWjNpfbgbwQ9dVmmV4UGxhkeqUOaVFkx%2BE8ORc20Dzwzo75dV6y9zJ16CLz2HazbDix9IusThyJG5K0c%2BTChtZrrZacOqm7sCHKNeL74gbg7MqyFCouACPMOLbtsNmAo6dDOoDy8HU%2FBVSdet2tWsRWXSgvv22xsqgA3RWnTnYcQK%2BCuMJWe1r0GOqUBUj9GkI%2Fehl08WZfNFNlXJKVo7JmK4jngNB2QScRXO3u20xHp%2Ff7%2FJCuGKzPt5lAt10H2%2FOmtHkYwZSUuMJdTrmpca3ZGOy9HFWqv0bEAE0lLEdQlOIHbEqKPforSFokLx%2BkW4%2FzwLVBs7Z%2BYpj4OpZFZ550MM%2FYPnDLaxN2DOGQMDnBxXLPxy%2F4wr0MUP0LDEdduf3%2FdB4rSCw5OPI4d%2FykGDN4O&X-Amz-Signature=8722cefb97bbbee10880cf3e4e5059e012d9bbe10ac04fbe3ca60874632e6edf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4TC2Y7T%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDUWWyKxU8xWVk3m3D%2FmTbOrRP5YakjXPhTRh3qC%2FliUwIgYSc1mbq6U8ZcS2x7DZ9e9Ue%2FjiLBnPxdsB3HZvXekZwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC03eo7FzIkpqnXpfCrcA7Bm5eIsxqGVs%2FF0GbBInsSJGw9ch1owS7TG%2Fgpro40sHg%2BbWkyANXgwAOEA33bWTJGl2NP8u98hJTH4lH9i%2B9JrZ61H%2FjGy%2FMlADdSATKBNVvGu9KVHV8NT4SogDWRIsEEHgMeXq0afhkFTZPp6G366k0bU8rllQf7TSCvxOfHCNt0m8P2eZMWK86EKRenwXhWG2qCGlEAhsPMFWLwQxIbBHkYzz9O9u71c46rOzvrL0PPybCWALyjLkaF2BfUMUtHpomExdHj0iBrJxwhteAnLWRSqbdLLM2F0I2EkZLmENr83gET6DsU9CZKW%2F0VDL7Ye%2BcPnGUjUNJaP8XyuFg%2FGQ2jdE4m%2FubJguezxPjqiIM0kzFipxDXj4ojCXtikpZViTljDEq0ufNVlc7V7LUDew2NVnoBiQz1Oix7oe4vnYWSIokdd5ReaeJycaA8fPjatQH1ZqqOrLWjNpfbgbwQ9dVmmV4UGxhkeqUOaVFkx%2BE8ORc20Dzwzo75dV6y9zJ16CLz2HazbDix9IusThyJG5K0c%2BTChtZrrZacOqm7sCHKNeL74gbg7MqyFCouACPMOLbtsNmAo6dDOoDy8HU%2FBVSdet2tWsRWXSgvv22xsqgA3RWnTnYcQK%2BCuMJWe1r0GOqUBUj9GkI%2Fehl08WZfNFNlXJKVo7JmK4jngNB2QScRXO3u20xHp%2Ff7%2FJCuGKzPt5lAt10H2%2FOmtHkYwZSUuMJdTrmpca3ZGOy9HFWqv0bEAE0lLEdQlOIHbEqKPforSFokLx%2BkW4%2FzwLVBs7Z%2BYpj4OpZFZ550MM%2FYPnDLaxN2DOGQMDnBxXLPxy%2F4wr0MUP0LDEdduf3%2FdB4rSCw5OPI4d%2FykGDN4O&X-Amz-Signature=fe1a1274c0745e903480bed845305b7366d7b631ec730aab0879f7d8ff9bd407&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4TC2Y7T%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDUWWyKxU8xWVk3m3D%2FmTbOrRP5YakjXPhTRh3qC%2FliUwIgYSc1mbq6U8ZcS2x7DZ9e9Ue%2FjiLBnPxdsB3HZvXekZwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC03eo7FzIkpqnXpfCrcA7Bm5eIsxqGVs%2FF0GbBInsSJGw9ch1owS7TG%2Fgpro40sHg%2BbWkyANXgwAOEA33bWTJGl2NP8u98hJTH4lH9i%2B9JrZ61H%2FjGy%2FMlADdSATKBNVvGu9KVHV8NT4SogDWRIsEEHgMeXq0afhkFTZPp6G366k0bU8rllQf7TSCvxOfHCNt0m8P2eZMWK86EKRenwXhWG2qCGlEAhsPMFWLwQxIbBHkYzz9O9u71c46rOzvrL0PPybCWALyjLkaF2BfUMUtHpomExdHj0iBrJxwhteAnLWRSqbdLLM2F0I2EkZLmENr83gET6DsU9CZKW%2F0VDL7Ye%2BcPnGUjUNJaP8XyuFg%2FGQ2jdE4m%2FubJguezxPjqiIM0kzFipxDXj4ojCXtikpZViTljDEq0ufNVlc7V7LUDew2NVnoBiQz1Oix7oe4vnYWSIokdd5ReaeJycaA8fPjatQH1ZqqOrLWjNpfbgbwQ9dVmmV4UGxhkeqUOaVFkx%2BE8ORc20Dzwzo75dV6y9zJ16CLz2HazbDix9IusThyJG5K0c%2BTChtZrrZacOqm7sCHKNeL74gbg7MqyFCouACPMOLbtsNmAo6dDOoDy8HU%2FBVSdet2tWsRWXSgvv22xsqgA3RWnTnYcQK%2BCuMJWe1r0GOqUBUj9GkI%2Fehl08WZfNFNlXJKVo7JmK4jngNB2QScRXO3u20xHp%2Ff7%2FJCuGKzPt5lAt10H2%2FOmtHkYwZSUuMJdTrmpca3ZGOy9HFWqv0bEAE0lLEdQlOIHbEqKPforSFokLx%2BkW4%2FzwLVBs7Z%2BYpj4OpZFZ550MM%2FYPnDLaxN2DOGQMDnBxXLPxy%2F4wr0MUP0LDEdduf3%2FdB4rSCw5OPI4d%2FykGDN4O&X-Amz-Signature=ec69f44fc6ff415cb317d0d0ade34fa56a237bc58c3c9b2143a6d01bcbc1a0a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4TC2Y7T%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDUWWyKxU8xWVk3m3D%2FmTbOrRP5YakjXPhTRh3qC%2FliUwIgYSc1mbq6U8ZcS2x7DZ9e9Ue%2FjiLBnPxdsB3HZvXekZwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC03eo7FzIkpqnXpfCrcA7Bm5eIsxqGVs%2FF0GbBInsSJGw9ch1owS7TG%2Fgpro40sHg%2BbWkyANXgwAOEA33bWTJGl2NP8u98hJTH4lH9i%2B9JrZ61H%2FjGy%2FMlADdSATKBNVvGu9KVHV8NT4SogDWRIsEEHgMeXq0afhkFTZPp6G366k0bU8rllQf7TSCvxOfHCNt0m8P2eZMWK86EKRenwXhWG2qCGlEAhsPMFWLwQxIbBHkYzz9O9u71c46rOzvrL0PPybCWALyjLkaF2BfUMUtHpomExdHj0iBrJxwhteAnLWRSqbdLLM2F0I2EkZLmENr83gET6DsU9CZKW%2F0VDL7Ye%2BcPnGUjUNJaP8XyuFg%2FGQ2jdE4m%2FubJguezxPjqiIM0kzFipxDXj4ojCXtikpZViTljDEq0ufNVlc7V7LUDew2NVnoBiQz1Oix7oe4vnYWSIokdd5ReaeJycaA8fPjatQH1ZqqOrLWjNpfbgbwQ9dVmmV4UGxhkeqUOaVFkx%2BE8ORc20Dzwzo75dV6y9zJ16CLz2HazbDix9IusThyJG5K0c%2BTChtZrrZacOqm7sCHKNeL74gbg7MqyFCouACPMOLbtsNmAo6dDOoDy8HU%2FBVSdet2tWsRWXSgvv22xsqgA3RWnTnYcQK%2BCuMJWe1r0GOqUBUj9GkI%2Fehl08WZfNFNlXJKVo7JmK4jngNB2QScRXO3u20xHp%2Ff7%2FJCuGKzPt5lAt10H2%2FOmtHkYwZSUuMJdTrmpca3ZGOy9HFWqv0bEAE0lLEdQlOIHbEqKPforSFokLx%2BkW4%2FzwLVBs7Z%2BYpj4OpZFZ550MM%2FYPnDLaxN2DOGQMDnBxXLPxy%2F4wr0MUP0LDEdduf3%2FdB4rSCw5OPI4d%2FykGDN4O&X-Amz-Signature=40f6da56f73a6707da2d828c0c25692b815d313e48590d2fec2fbd621f84afaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4TC2Y7T%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDUWWyKxU8xWVk3m3D%2FmTbOrRP5YakjXPhTRh3qC%2FliUwIgYSc1mbq6U8ZcS2x7DZ9e9Ue%2FjiLBnPxdsB3HZvXekZwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC03eo7FzIkpqnXpfCrcA7Bm5eIsxqGVs%2FF0GbBInsSJGw9ch1owS7TG%2Fgpro40sHg%2BbWkyANXgwAOEA33bWTJGl2NP8u98hJTH4lH9i%2B9JrZ61H%2FjGy%2FMlADdSATKBNVvGu9KVHV8NT4SogDWRIsEEHgMeXq0afhkFTZPp6G366k0bU8rllQf7TSCvxOfHCNt0m8P2eZMWK86EKRenwXhWG2qCGlEAhsPMFWLwQxIbBHkYzz9O9u71c46rOzvrL0PPybCWALyjLkaF2BfUMUtHpomExdHj0iBrJxwhteAnLWRSqbdLLM2F0I2EkZLmENr83gET6DsU9CZKW%2F0VDL7Ye%2BcPnGUjUNJaP8XyuFg%2FGQ2jdE4m%2FubJguezxPjqiIM0kzFipxDXj4ojCXtikpZViTljDEq0ufNVlc7V7LUDew2NVnoBiQz1Oix7oe4vnYWSIokdd5ReaeJycaA8fPjatQH1ZqqOrLWjNpfbgbwQ9dVmmV4UGxhkeqUOaVFkx%2BE8ORc20Dzwzo75dV6y9zJ16CLz2HazbDix9IusThyJG5K0c%2BTChtZrrZacOqm7sCHKNeL74gbg7MqyFCouACPMOLbtsNmAo6dDOoDy8HU%2FBVSdet2tWsRWXSgvv22xsqgA3RWnTnYcQK%2BCuMJWe1r0GOqUBUj9GkI%2Fehl08WZfNFNlXJKVo7JmK4jngNB2QScRXO3u20xHp%2Ff7%2FJCuGKzPt5lAt10H2%2FOmtHkYwZSUuMJdTrmpca3ZGOy9HFWqv0bEAE0lLEdQlOIHbEqKPforSFokLx%2BkW4%2FzwLVBs7Z%2BYpj4OpZFZ550MM%2FYPnDLaxN2DOGQMDnBxXLPxy%2F4wr0MUP0LDEdduf3%2FdB4rSCw5OPI4d%2FykGDN4O&X-Amz-Signature=df8b1e952e00d9bcee7add716221def94c275aa553bc0a4cf72e8761531f0b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4TC2Y7T%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T081115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDUWWyKxU8xWVk3m3D%2FmTbOrRP5YakjXPhTRh3qC%2FliUwIgYSc1mbq6U8ZcS2x7DZ9e9Ue%2FjiLBnPxdsB3HZvXekZwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC03eo7FzIkpqnXpfCrcA7Bm5eIsxqGVs%2FF0GbBInsSJGw9ch1owS7TG%2Fgpro40sHg%2BbWkyANXgwAOEA33bWTJGl2NP8u98hJTH4lH9i%2B9JrZ61H%2FjGy%2FMlADdSATKBNVvGu9KVHV8NT4SogDWRIsEEHgMeXq0afhkFTZPp6G366k0bU8rllQf7TSCvxOfHCNt0m8P2eZMWK86EKRenwXhWG2qCGlEAhsPMFWLwQxIbBHkYzz9O9u71c46rOzvrL0PPybCWALyjLkaF2BfUMUtHpomExdHj0iBrJxwhteAnLWRSqbdLLM2F0I2EkZLmENr83gET6DsU9CZKW%2F0VDL7Ye%2BcPnGUjUNJaP8XyuFg%2FGQ2jdE4m%2FubJguezxPjqiIM0kzFipxDXj4ojCXtikpZViTljDEq0ufNVlc7V7LUDew2NVnoBiQz1Oix7oe4vnYWSIokdd5ReaeJycaA8fPjatQH1ZqqOrLWjNpfbgbwQ9dVmmV4UGxhkeqUOaVFkx%2BE8ORc20Dzwzo75dV6y9zJ16CLz2HazbDix9IusThyJG5K0c%2BTChtZrrZacOqm7sCHKNeL74gbg7MqyFCouACPMOLbtsNmAo6dDOoDy8HU%2FBVSdet2tWsRWXSgvv22xsqgA3RWnTnYcQK%2BCuMJWe1r0GOqUBUj9GkI%2Fehl08WZfNFNlXJKVo7JmK4jngNB2QScRXO3u20xHp%2Ff7%2FJCuGKzPt5lAt10H2%2FOmtHkYwZSUuMJdTrmpca3ZGOy9HFWqv0bEAE0lLEdQlOIHbEqKPforSFokLx%2BkW4%2FzwLVBs7Z%2BYpj4OpZFZ550MM%2FYPnDLaxN2DOGQMDnBxXLPxy%2F4wr0MUP0LDEdduf3%2FdB4rSCw5OPI4d%2FykGDN4O&X-Amz-Signature=6c912c68185d92215baa1cfb747c6bd26ca96d43f57bed6046aeb18212222969&X-Amz-SignedHeaders=host&x-id=GetObject)
