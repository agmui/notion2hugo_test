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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JG7IKO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIHsZLKQkpTHJUjPHndk6I8QVjsunt4DnWmCnjsH%2Bx1WuAiBokng1K3v4PdCTMJ8lmvhDDvwsOrFLCGkbwTZgsYeu%2ByqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4WiZvUK%2BRp9SRmUUKtwDAVwSLW%2Fxe9bEhWFk%2BtzeS6A1qay7afFUO2YC6IuobuQYZerj%2BAP%2FkLNgITJExCxEav6wQt8G%2BzlzNOxwYkoNOY7zwS7E1%2BgrGRWA%2Bfgwki6rjMJ3LFatj77MqlpdoEI7og%2Bsjypk4WIGGTljSZWNUnjkqfQ2Irq7wSPMsF%2FpSib%2FGkxFyKFlPBNdCy6QOdPOEkH9ckxwVGHk760etohQkk38L4jKPRMjAEmFGKZNab3JdeAsBMSGcet5oewDBtvkj%2FNJ0r19FFxm3%2F9Iluw3vniMuC6lEYSClm3bpm3qxU%2B%2FEpvqbhqgLFjNROENJhUBGFR5PfTzo8cI4FBUf5D0hoOQ%2BAC97m%2FcHhcUsic8tKDT%2F%2BxrY58HAVEjQvqxuONa1pTIzqc8am0ahBdggAE72PPjg5mnoMUkS0OEsNg1110EuAPs%2BR3ClFRQHUPaYVmiB5%2BcfToIfMulthtMLcmbAG7Ysic0XJ5M2Oij6Ut2rFzgeuHvA07vnAlvNFZ6Z%2FqF%2BuPIxjSmbJyzeDQWnKZn8gt66sFdwhZMgM1wW4bfoAC8pceHudTosh%2FM53gA7o2xDYTcVOdVVOMd7S4tcq8T3levF9c%2B8%2B%2B5%2FZJ%2Fpf3J%2Bs4yu2LkDq3kwkyUB5wwpNmDvgY6pgFO2nqyjHXc4GlpU8LdbnjhtyGWJANER%2BUzemLmPmQDnxNQB3I7Upj0S7wF52jb5vQE9oiEjGxzZdIw4aLOzgakm8HMu4bLbbisw50qhjLBjQ1c1W0RbJQ8kjP5JyJmiNBEymPNqjIgzLhpR1RHcQUzC3NUB6UxpSx5%2F583ikgt%2BabA5CSoeYFgpL8nyxXCPfASNeefEUaZX8XUDz3DzSC4X1xnCMw1&X-Amz-Signature=bda424709dfcdb2316af8d12c638fb966cb20cd5fab15008652a757d49a0f77d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JG7IKO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIHsZLKQkpTHJUjPHndk6I8QVjsunt4DnWmCnjsH%2Bx1WuAiBokng1K3v4PdCTMJ8lmvhDDvwsOrFLCGkbwTZgsYeu%2ByqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4WiZvUK%2BRp9SRmUUKtwDAVwSLW%2Fxe9bEhWFk%2BtzeS6A1qay7afFUO2YC6IuobuQYZerj%2BAP%2FkLNgITJExCxEav6wQt8G%2BzlzNOxwYkoNOY7zwS7E1%2BgrGRWA%2Bfgwki6rjMJ3LFatj77MqlpdoEI7og%2Bsjypk4WIGGTljSZWNUnjkqfQ2Irq7wSPMsF%2FpSib%2FGkxFyKFlPBNdCy6QOdPOEkH9ckxwVGHk760etohQkk38L4jKPRMjAEmFGKZNab3JdeAsBMSGcet5oewDBtvkj%2FNJ0r19FFxm3%2F9Iluw3vniMuC6lEYSClm3bpm3qxU%2B%2FEpvqbhqgLFjNROENJhUBGFR5PfTzo8cI4FBUf5D0hoOQ%2BAC97m%2FcHhcUsic8tKDT%2F%2BxrY58HAVEjQvqxuONa1pTIzqc8am0ahBdggAE72PPjg5mnoMUkS0OEsNg1110EuAPs%2BR3ClFRQHUPaYVmiB5%2BcfToIfMulthtMLcmbAG7Ysic0XJ5M2Oij6Ut2rFzgeuHvA07vnAlvNFZ6Z%2FqF%2BuPIxjSmbJyzeDQWnKZn8gt66sFdwhZMgM1wW4bfoAC8pceHudTosh%2FM53gA7o2xDYTcVOdVVOMd7S4tcq8T3levF9c%2B8%2B%2B5%2FZJ%2Fpf3J%2Bs4yu2LkDq3kwkyUB5wwpNmDvgY6pgFO2nqyjHXc4GlpU8LdbnjhtyGWJANER%2BUzemLmPmQDnxNQB3I7Upj0S7wF52jb5vQE9oiEjGxzZdIw4aLOzgakm8HMu4bLbbisw50qhjLBjQ1c1W0RbJQ8kjP5JyJmiNBEymPNqjIgzLhpR1RHcQUzC3NUB6UxpSx5%2F583ikgt%2BabA5CSoeYFgpL8nyxXCPfASNeefEUaZX8XUDz3DzSC4X1xnCMw1&X-Amz-Signature=d3544f4322b9f0f3cf9f56b17a3b10cd5317331140bc6ed232ec5798b92ba338&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JG7IKO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIHsZLKQkpTHJUjPHndk6I8QVjsunt4DnWmCnjsH%2Bx1WuAiBokng1K3v4PdCTMJ8lmvhDDvwsOrFLCGkbwTZgsYeu%2ByqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4WiZvUK%2BRp9SRmUUKtwDAVwSLW%2Fxe9bEhWFk%2BtzeS6A1qay7afFUO2YC6IuobuQYZerj%2BAP%2FkLNgITJExCxEav6wQt8G%2BzlzNOxwYkoNOY7zwS7E1%2BgrGRWA%2Bfgwki6rjMJ3LFatj77MqlpdoEI7og%2Bsjypk4WIGGTljSZWNUnjkqfQ2Irq7wSPMsF%2FpSib%2FGkxFyKFlPBNdCy6QOdPOEkH9ckxwVGHk760etohQkk38L4jKPRMjAEmFGKZNab3JdeAsBMSGcet5oewDBtvkj%2FNJ0r19FFxm3%2F9Iluw3vniMuC6lEYSClm3bpm3qxU%2B%2FEpvqbhqgLFjNROENJhUBGFR5PfTzo8cI4FBUf5D0hoOQ%2BAC97m%2FcHhcUsic8tKDT%2F%2BxrY58HAVEjQvqxuONa1pTIzqc8am0ahBdggAE72PPjg5mnoMUkS0OEsNg1110EuAPs%2BR3ClFRQHUPaYVmiB5%2BcfToIfMulthtMLcmbAG7Ysic0XJ5M2Oij6Ut2rFzgeuHvA07vnAlvNFZ6Z%2FqF%2BuPIxjSmbJyzeDQWnKZn8gt66sFdwhZMgM1wW4bfoAC8pceHudTosh%2FM53gA7o2xDYTcVOdVVOMd7S4tcq8T3levF9c%2B8%2B%2B5%2FZJ%2Fpf3J%2Bs4yu2LkDq3kwkyUB5wwpNmDvgY6pgFO2nqyjHXc4GlpU8LdbnjhtyGWJANER%2BUzemLmPmQDnxNQB3I7Upj0S7wF52jb5vQE9oiEjGxzZdIw4aLOzgakm8HMu4bLbbisw50qhjLBjQ1c1W0RbJQ8kjP5JyJmiNBEymPNqjIgzLhpR1RHcQUzC3NUB6UxpSx5%2F583ikgt%2BabA5CSoeYFgpL8nyxXCPfASNeefEUaZX8XUDz3DzSC4X1xnCMw1&X-Amz-Signature=ee646442a3e312225f69fa413a75cfa7a994df05b56d07313e8547f53884c8fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JG7IKO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIHsZLKQkpTHJUjPHndk6I8QVjsunt4DnWmCnjsH%2Bx1WuAiBokng1K3v4PdCTMJ8lmvhDDvwsOrFLCGkbwTZgsYeu%2ByqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4WiZvUK%2BRp9SRmUUKtwDAVwSLW%2Fxe9bEhWFk%2BtzeS6A1qay7afFUO2YC6IuobuQYZerj%2BAP%2FkLNgITJExCxEav6wQt8G%2BzlzNOxwYkoNOY7zwS7E1%2BgrGRWA%2Bfgwki6rjMJ3LFatj77MqlpdoEI7og%2Bsjypk4WIGGTljSZWNUnjkqfQ2Irq7wSPMsF%2FpSib%2FGkxFyKFlPBNdCy6QOdPOEkH9ckxwVGHk760etohQkk38L4jKPRMjAEmFGKZNab3JdeAsBMSGcet5oewDBtvkj%2FNJ0r19FFxm3%2F9Iluw3vniMuC6lEYSClm3bpm3qxU%2B%2FEpvqbhqgLFjNROENJhUBGFR5PfTzo8cI4FBUf5D0hoOQ%2BAC97m%2FcHhcUsic8tKDT%2F%2BxrY58HAVEjQvqxuONa1pTIzqc8am0ahBdggAE72PPjg5mnoMUkS0OEsNg1110EuAPs%2BR3ClFRQHUPaYVmiB5%2BcfToIfMulthtMLcmbAG7Ysic0XJ5M2Oij6Ut2rFzgeuHvA07vnAlvNFZ6Z%2FqF%2BuPIxjSmbJyzeDQWnKZn8gt66sFdwhZMgM1wW4bfoAC8pceHudTosh%2FM53gA7o2xDYTcVOdVVOMd7S4tcq8T3levF9c%2B8%2B%2B5%2FZJ%2Fpf3J%2Bs4yu2LkDq3kwkyUB5wwpNmDvgY6pgFO2nqyjHXc4GlpU8LdbnjhtyGWJANER%2BUzemLmPmQDnxNQB3I7Upj0S7wF52jb5vQE9oiEjGxzZdIw4aLOzgakm8HMu4bLbbisw50qhjLBjQ1c1W0RbJQ8kjP5JyJmiNBEymPNqjIgzLhpR1RHcQUzC3NUB6UxpSx5%2F583ikgt%2BabA5CSoeYFgpL8nyxXCPfASNeefEUaZX8XUDz3DzSC4X1xnCMw1&X-Amz-Signature=0fb0f140badb318ed94452a204d3238a51adfa39f0c5c23721a7d79fdb92ba50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JG7IKO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIHsZLKQkpTHJUjPHndk6I8QVjsunt4DnWmCnjsH%2Bx1WuAiBokng1K3v4PdCTMJ8lmvhDDvwsOrFLCGkbwTZgsYeu%2ByqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4WiZvUK%2BRp9SRmUUKtwDAVwSLW%2Fxe9bEhWFk%2BtzeS6A1qay7afFUO2YC6IuobuQYZerj%2BAP%2FkLNgITJExCxEav6wQt8G%2BzlzNOxwYkoNOY7zwS7E1%2BgrGRWA%2Bfgwki6rjMJ3LFatj77MqlpdoEI7og%2Bsjypk4WIGGTljSZWNUnjkqfQ2Irq7wSPMsF%2FpSib%2FGkxFyKFlPBNdCy6QOdPOEkH9ckxwVGHk760etohQkk38L4jKPRMjAEmFGKZNab3JdeAsBMSGcet5oewDBtvkj%2FNJ0r19FFxm3%2F9Iluw3vniMuC6lEYSClm3bpm3qxU%2B%2FEpvqbhqgLFjNROENJhUBGFR5PfTzo8cI4FBUf5D0hoOQ%2BAC97m%2FcHhcUsic8tKDT%2F%2BxrY58HAVEjQvqxuONa1pTIzqc8am0ahBdggAE72PPjg5mnoMUkS0OEsNg1110EuAPs%2BR3ClFRQHUPaYVmiB5%2BcfToIfMulthtMLcmbAG7Ysic0XJ5M2Oij6Ut2rFzgeuHvA07vnAlvNFZ6Z%2FqF%2BuPIxjSmbJyzeDQWnKZn8gt66sFdwhZMgM1wW4bfoAC8pceHudTosh%2FM53gA7o2xDYTcVOdVVOMd7S4tcq8T3levF9c%2B8%2B%2B5%2FZJ%2Fpf3J%2Bs4yu2LkDq3kwkyUB5wwpNmDvgY6pgFO2nqyjHXc4GlpU8LdbnjhtyGWJANER%2BUzemLmPmQDnxNQB3I7Upj0S7wF52jb5vQE9oiEjGxzZdIw4aLOzgakm8HMu4bLbbisw50qhjLBjQ1c1W0RbJQ8kjP5JyJmiNBEymPNqjIgzLhpR1RHcQUzC3NUB6UxpSx5%2F583ikgt%2BabA5CSoeYFgpL8nyxXCPfASNeefEUaZX8XUDz3DzSC4X1xnCMw1&X-Amz-Signature=45ae5f720e66763127eb4bd08d174178bf3d3e7a7e7c17b18eba2bf4465b7077&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624JG7IKO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIHsZLKQkpTHJUjPHndk6I8QVjsunt4DnWmCnjsH%2Bx1WuAiBokng1K3v4PdCTMJ8lmvhDDvwsOrFLCGkbwTZgsYeu%2ByqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4WiZvUK%2BRp9SRmUUKtwDAVwSLW%2Fxe9bEhWFk%2BtzeS6A1qay7afFUO2YC6IuobuQYZerj%2BAP%2FkLNgITJExCxEav6wQt8G%2BzlzNOxwYkoNOY7zwS7E1%2BgrGRWA%2Bfgwki6rjMJ3LFatj77MqlpdoEI7og%2Bsjypk4WIGGTljSZWNUnjkqfQ2Irq7wSPMsF%2FpSib%2FGkxFyKFlPBNdCy6QOdPOEkH9ckxwVGHk760etohQkk38L4jKPRMjAEmFGKZNab3JdeAsBMSGcet5oewDBtvkj%2FNJ0r19FFxm3%2F9Iluw3vniMuC6lEYSClm3bpm3qxU%2B%2FEpvqbhqgLFjNROENJhUBGFR5PfTzo8cI4FBUf5D0hoOQ%2BAC97m%2FcHhcUsic8tKDT%2F%2BxrY58HAVEjQvqxuONa1pTIzqc8am0ahBdggAE72PPjg5mnoMUkS0OEsNg1110EuAPs%2BR3ClFRQHUPaYVmiB5%2BcfToIfMulthtMLcmbAG7Ysic0XJ5M2Oij6Ut2rFzgeuHvA07vnAlvNFZ6Z%2FqF%2BuPIxjSmbJyzeDQWnKZn8gt66sFdwhZMgM1wW4bfoAC8pceHudTosh%2FM53gA7o2xDYTcVOdVVOMd7S4tcq8T3levF9c%2B8%2B%2B5%2FZJ%2Fpf3J%2Bs4yu2LkDq3kwkyUB5wwpNmDvgY6pgFO2nqyjHXc4GlpU8LdbnjhtyGWJANER%2BUzemLmPmQDnxNQB3I7Upj0S7wF52jb5vQE9oiEjGxzZdIw4aLOzgakm8HMu4bLbbisw50qhjLBjQ1c1W0RbJQ8kjP5JyJmiNBEymPNqjIgzLhpR1RHcQUzC3NUB6UxpSx5%2F583ikgt%2BabA5CSoeYFgpL8nyxXCPfASNeefEUaZX8XUDz3DzSC4X1xnCMw1&X-Amz-Signature=52766b253b65c37e7427d3f8c5ea90860d7da2adde730b4b0a0b25b309932bbc&X-Amz-SignedHeaders=host&x-id=GetObject)
