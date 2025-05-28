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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOAEN26%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF1P%2FSv2GUKFD%2FBdKrfReDPzpCQJF9xOxzPyJB3AnzawIgJbYRRsICB7%2BaRtiHqs%2Bow%2BpmONFthbOVORdsAv9zYt8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPU0w59DbPQLQurkqCrcA5yGZ90yFtJAzMndmCrZBdSoKwyg94gAC4HgtHz8g7SvlEqMH5bXUbpAuxillrHuNDfkK2RKI%2BS%2B9dgSykOVDgJCXLsM1Zw8Bga8YhhGWwB%2FpqHom6WupEVHd3MEpqdvN9Av7Rbj4Wl4Sxakrt1RcnBew%2B32H%2B0locCwrfIlgYnI5GqWDWITyOC1z00bXPVd9cUr0MRAJ%2FLesqnVPB%2FUn7mZHQpyf9nZcbiqnKisTSqqal2V9yKW4BRbXTGKwKRomaDC7GhAhKd0ufSMi%2F3nFGbnwa8tlkHuyATZ%2BS5d4ncX0vapnM5nQnVHiHXd55fDg2N98SC639c1LPzc8kxnLKgEl6hkG3U7LS2K53Bh1vGHXkE8P0RkOwTQQsjGFBCiwNNtqeXVPJf7RWy%2BsZQvJ0bV3LfXJw3eGvnhEz5wmg6mzY%2BLnkcv9MTLg0BGAL3Bb9lY4NDawOiDWBzhWn5psQMx7drXxbOT71LEOmBrvlzNAxW86wUAeOm6X1cMiMlaqlmgUP9mfTaFwvrVPKKHUgjGyAlEqaC1rgOPcZLEUcDKt%2FD2JjD20TrWckwKuvDOxmxc510Lv8cJhWVGFJv57bzX7l3TVC9ruRN%2BoELim6pjuYoVpDG1ZWlfi58AMO2k2cEGOqUBWYgduzsr6XeYyB7MVbEkgPpN9q2NVbcNtiPtxDjwUd8aS9HnDm2r5uNSU%2BOOEjSChL8qH6G5LxLLhqsAutREevWK%2BZFhO6lxMBeFyq0L1Tu9NxAUGVe9pfyfERWIGRjvZs8by8clLtXk9RJhFFmBc9BVjOqHXnyM5rOJF5kCBhSXvYcXvrUUk0uLisLsvIQBABkIe%2B1MRRkNdfL3H3bqp7y7JALn&X-Amz-Signature=07ad9109d9b5f41d3d9ccc3c359cef7f1792b464d3eb9531f93c1d7f5d046646&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOAEN26%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF1P%2FSv2GUKFD%2FBdKrfReDPzpCQJF9xOxzPyJB3AnzawIgJbYRRsICB7%2BaRtiHqs%2Bow%2BpmONFthbOVORdsAv9zYt8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPU0w59DbPQLQurkqCrcA5yGZ90yFtJAzMndmCrZBdSoKwyg94gAC4HgtHz8g7SvlEqMH5bXUbpAuxillrHuNDfkK2RKI%2BS%2B9dgSykOVDgJCXLsM1Zw8Bga8YhhGWwB%2FpqHom6WupEVHd3MEpqdvN9Av7Rbj4Wl4Sxakrt1RcnBew%2B32H%2B0locCwrfIlgYnI5GqWDWITyOC1z00bXPVd9cUr0MRAJ%2FLesqnVPB%2FUn7mZHQpyf9nZcbiqnKisTSqqal2V9yKW4BRbXTGKwKRomaDC7GhAhKd0ufSMi%2F3nFGbnwa8tlkHuyATZ%2BS5d4ncX0vapnM5nQnVHiHXd55fDg2N98SC639c1LPzc8kxnLKgEl6hkG3U7LS2K53Bh1vGHXkE8P0RkOwTQQsjGFBCiwNNtqeXVPJf7RWy%2BsZQvJ0bV3LfXJw3eGvnhEz5wmg6mzY%2BLnkcv9MTLg0BGAL3Bb9lY4NDawOiDWBzhWn5psQMx7drXxbOT71LEOmBrvlzNAxW86wUAeOm6X1cMiMlaqlmgUP9mfTaFwvrVPKKHUgjGyAlEqaC1rgOPcZLEUcDKt%2FD2JjD20TrWckwKuvDOxmxc510Lv8cJhWVGFJv57bzX7l3TVC9ruRN%2BoELim6pjuYoVpDG1ZWlfi58AMO2k2cEGOqUBWYgduzsr6XeYyB7MVbEkgPpN9q2NVbcNtiPtxDjwUd8aS9HnDm2r5uNSU%2BOOEjSChL8qH6G5LxLLhqsAutREevWK%2BZFhO6lxMBeFyq0L1Tu9NxAUGVe9pfyfERWIGRjvZs8by8clLtXk9RJhFFmBc9BVjOqHXnyM5rOJF5kCBhSXvYcXvrUUk0uLisLsvIQBABkIe%2B1MRRkNdfL3H3bqp7y7JALn&X-Amz-Signature=28c7733a5aea474063c2578148cf3adf20842d2d32d42371faa134fcf612acbc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOAEN26%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF1P%2FSv2GUKFD%2FBdKrfReDPzpCQJF9xOxzPyJB3AnzawIgJbYRRsICB7%2BaRtiHqs%2Bow%2BpmONFthbOVORdsAv9zYt8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPU0w59DbPQLQurkqCrcA5yGZ90yFtJAzMndmCrZBdSoKwyg94gAC4HgtHz8g7SvlEqMH5bXUbpAuxillrHuNDfkK2RKI%2BS%2B9dgSykOVDgJCXLsM1Zw8Bga8YhhGWwB%2FpqHom6WupEVHd3MEpqdvN9Av7Rbj4Wl4Sxakrt1RcnBew%2B32H%2B0locCwrfIlgYnI5GqWDWITyOC1z00bXPVd9cUr0MRAJ%2FLesqnVPB%2FUn7mZHQpyf9nZcbiqnKisTSqqal2V9yKW4BRbXTGKwKRomaDC7GhAhKd0ufSMi%2F3nFGbnwa8tlkHuyATZ%2BS5d4ncX0vapnM5nQnVHiHXd55fDg2N98SC639c1LPzc8kxnLKgEl6hkG3U7LS2K53Bh1vGHXkE8P0RkOwTQQsjGFBCiwNNtqeXVPJf7RWy%2BsZQvJ0bV3LfXJw3eGvnhEz5wmg6mzY%2BLnkcv9MTLg0BGAL3Bb9lY4NDawOiDWBzhWn5psQMx7drXxbOT71LEOmBrvlzNAxW86wUAeOm6X1cMiMlaqlmgUP9mfTaFwvrVPKKHUgjGyAlEqaC1rgOPcZLEUcDKt%2FD2JjD20TrWckwKuvDOxmxc510Lv8cJhWVGFJv57bzX7l3TVC9ruRN%2BoELim6pjuYoVpDG1ZWlfi58AMO2k2cEGOqUBWYgduzsr6XeYyB7MVbEkgPpN9q2NVbcNtiPtxDjwUd8aS9HnDm2r5uNSU%2BOOEjSChL8qH6G5LxLLhqsAutREevWK%2BZFhO6lxMBeFyq0L1Tu9NxAUGVe9pfyfERWIGRjvZs8by8clLtXk9RJhFFmBc9BVjOqHXnyM5rOJF5kCBhSXvYcXvrUUk0uLisLsvIQBABkIe%2B1MRRkNdfL3H3bqp7y7JALn&X-Amz-Signature=c71059f3a44eb41546eef714620e609109797a269f59c7b91fcc128d1abb80d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOAEN26%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF1P%2FSv2GUKFD%2FBdKrfReDPzpCQJF9xOxzPyJB3AnzawIgJbYRRsICB7%2BaRtiHqs%2Bow%2BpmONFthbOVORdsAv9zYt8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPU0w59DbPQLQurkqCrcA5yGZ90yFtJAzMndmCrZBdSoKwyg94gAC4HgtHz8g7SvlEqMH5bXUbpAuxillrHuNDfkK2RKI%2BS%2B9dgSykOVDgJCXLsM1Zw8Bga8YhhGWwB%2FpqHom6WupEVHd3MEpqdvN9Av7Rbj4Wl4Sxakrt1RcnBew%2B32H%2B0locCwrfIlgYnI5GqWDWITyOC1z00bXPVd9cUr0MRAJ%2FLesqnVPB%2FUn7mZHQpyf9nZcbiqnKisTSqqal2V9yKW4BRbXTGKwKRomaDC7GhAhKd0ufSMi%2F3nFGbnwa8tlkHuyATZ%2BS5d4ncX0vapnM5nQnVHiHXd55fDg2N98SC639c1LPzc8kxnLKgEl6hkG3U7LS2K53Bh1vGHXkE8P0RkOwTQQsjGFBCiwNNtqeXVPJf7RWy%2BsZQvJ0bV3LfXJw3eGvnhEz5wmg6mzY%2BLnkcv9MTLg0BGAL3Bb9lY4NDawOiDWBzhWn5psQMx7drXxbOT71LEOmBrvlzNAxW86wUAeOm6X1cMiMlaqlmgUP9mfTaFwvrVPKKHUgjGyAlEqaC1rgOPcZLEUcDKt%2FD2JjD20TrWckwKuvDOxmxc510Lv8cJhWVGFJv57bzX7l3TVC9ruRN%2BoELim6pjuYoVpDG1ZWlfi58AMO2k2cEGOqUBWYgduzsr6XeYyB7MVbEkgPpN9q2NVbcNtiPtxDjwUd8aS9HnDm2r5uNSU%2BOOEjSChL8qH6G5LxLLhqsAutREevWK%2BZFhO6lxMBeFyq0L1Tu9NxAUGVe9pfyfERWIGRjvZs8by8clLtXk9RJhFFmBc9BVjOqHXnyM5rOJF5kCBhSXvYcXvrUUk0uLisLsvIQBABkIe%2B1MRRkNdfL3H3bqp7y7JALn&X-Amz-Signature=eb373627a935128726c0477c4419af7c580734234f161c1d3309bc14b82efe49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOAEN26%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF1P%2FSv2GUKFD%2FBdKrfReDPzpCQJF9xOxzPyJB3AnzawIgJbYRRsICB7%2BaRtiHqs%2Bow%2BpmONFthbOVORdsAv9zYt8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPU0w59DbPQLQurkqCrcA5yGZ90yFtJAzMndmCrZBdSoKwyg94gAC4HgtHz8g7SvlEqMH5bXUbpAuxillrHuNDfkK2RKI%2BS%2B9dgSykOVDgJCXLsM1Zw8Bga8YhhGWwB%2FpqHom6WupEVHd3MEpqdvN9Av7Rbj4Wl4Sxakrt1RcnBew%2B32H%2B0locCwrfIlgYnI5GqWDWITyOC1z00bXPVd9cUr0MRAJ%2FLesqnVPB%2FUn7mZHQpyf9nZcbiqnKisTSqqal2V9yKW4BRbXTGKwKRomaDC7GhAhKd0ufSMi%2F3nFGbnwa8tlkHuyATZ%2BS5d4ncX0vapnM5nQnVHiHXd55fDg2N98SC639c1LPzc8kxnLKgEl6hkG3U7LS2K53Bh1vGHXkE8P0RkOwTQQsjGFBCiwNNtqeXVPJf7RWy%2BsZQvJ0bV3LfXJw3eGvnhEz5wmg6mzY%2BLnkcv9MTLg0BGAL3Bb9lY4NDawOiDWBzhWn5psQMx7drXxbOT71LEOmBrvlzNAxW86wUAeOm6X1cMiMlaqlmgUP9mfTaFwvrVPKKHUgjGyAlEqaC1rgOPcZLEUcDKt%2FD2JjD20TrWckwKuvDOxmxc510Lv8cJhWVGFJv57bzX7l3TVC9ruRN%2BoELim6pjuYoVpDG1ZWlfi58AMO2k2cEGOqUBWYgduzsr6XeYyB7MVbEkgPpN9q2NVbcNtiPtxDjwUd8aS9HnDm2r5uNSU%2BOOEjSChL8qH6G5LxLLhqsAutREevWK%2BZFhO6lxMBeFyq0L1Tu9NxAUGVe9pfyfERWIGRjvZs8by8clLtXk9RJhFFmBc9BVjOqHXnyM5rOJF5kCBhSXvYcXvrUUk0uLisLsvIQBABkIe%2B1MRRkNdfL3H3bqp7y7JALn&X-Amz-Signature=cb42ee698be90d667a3c1cb9df426964d930abb8bf2737e453faeb83d0954e0d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMOAEN26%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T004212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF1P%2FSv2GUKFD%2FBdKrfReDPzpCQJF9xOxzPyJB3AnzawIgJbYRRsICB7%2BaRtiHqs%2Bow%2BpmONFthbOVORdsAv9zYt8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDPU0w59DbPQLQurkqCrcA5yGZ90yFtJAzMndmCrZBdSoKwyg94gAC4HgtHz8g7SvlEqMH5bXUbpAuxillrHuNDfkK2RKI%2BS%2B9dgSykOVDgJCXLsM1Zw8Bga8YhhGWwB%2FpqHom6WupEVHd3MEpqdvN9Av7Rbj4Wl4Sxakrt1RcnBew%2B32H%2B0locCwrfIlgYnI5GqWDWITyOC1z00bXPVd9cUr0MRAJ%2FLesqnVPB%2FUn7mZHQpyf9nZcbiqnKisTSqqal2V9yKW4BRbXTGKwKRomaDC7GhAhKd0ufSMi%2F3nFGbnwa8tlkHuyATZ%2BS5d4ncX0vapnM5nQnVHiHXd55fDg2N98SC639c1LPzc8kxnLKgEl6hkG3U7LS2K53Bh1vGHXkE8P0RkOwTQQsjGFBCiwNNtqeXVPJf7RWy%2BsZQvJ0bV3LfXJw3eGvnhEz5wmg6mzY%2BLnkcv9MTLg0BGAL3Bb9lY4NDawOiDWBzhWn5psQMx7drXxbOT71LEOmBrvlzNAxW86wUAeOm6X1cMiMlaqlmgUP9mfTaFwvrVPKKHUgjGyAlEqaC1rgOPcZLEUcDKt%2FD2JjD20TrWckwKuvDOxmxc510Lv8cJhWVGFJv57bzX7l3TVC9ruRN%2BoELim6pjuYoVpDG1ZWlfi58AMO2k2cEGOqUBWYgduzsr6XeYyB7MVbEkgPpN9q2NVbcNtiPtxDjwUd8aS9HnDm2r5uNSU%2BOOEjSChL8qH6G5LxLLhqsAutREevWK%2BZFhO6lxMBeFyq0L1Tu9NxAUGVe9pfyfERWIGRjvZs8by8clLtXk9RJhFFmBc9BVjOqHXnyM5rOJF5kCBhSXvYcXvrUUk0uLisLsvIQBABkIe%2B1MRRkNdfL3H3bqp7y7JALn&X-Amz-Signature=a0659be722042e8cd112d8ac288e444e5d7d8f81b449c699b14b2866c72ea128&X-Amz-SignedHeaders=host&x-id=GetObject)
