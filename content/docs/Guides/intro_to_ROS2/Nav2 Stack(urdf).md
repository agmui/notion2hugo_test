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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXGMQ2SD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjphs36F5H0mYu7n5T4U%2BbcwokKK12SsUS20W5jwwbHAiEA9D9K127xABFeFVEvgpSGF2NBmIrWS90bzwG4w4Z6MwgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmrh41Co7DGck5SHSrcA784dduGy153sWs%2BXsAUF2yh0z7D27kgK6eQCCgB3ky4C0CdluwZCsBs8HbwmINESs4%2BptRnuhqhnuoE6yBu9kon52BdBNFbcHIpJJ6wDEtrSMdyYH6veqbPQ6TLAVUOeTPkKfR7A9LS9ZG2cPpHos3Tm3jSHhsQC7%2FjMDXiofXkf7UkeA3XMJyAFmtli82F%2BsJRhUtiR%2FGSSOS9ZYuy7xH%2B9XQClC2HRK4oRs682aGdaHWqhPViTs%2FcDYR1LEeCh5%2BK6OiUz8JA0mIXBB2TMKhl%2FwdeZz0SpPQ%2FcMroyP8aKrkarQtqrUJxP02RAtuT8ktqfgYRan%2BPjrTUU78MLzuJ%2BYcDH77Uza5rgstyYoLEy1PNg9HY0wnQ37Bs9n7tWKkOTUp7EtwLsOX5vYxhecnvMUcqDrWMxTQz6V7%2F1nyFSwEzrO0UdbDOefZLF62Qa%2BolwvPpEtmA7IgAC%2BXiND%2Fz81%2FjHu5EWOOgMZyv2qFaVK6mE0ll8%2BMEY5z3cHDzSgEvWj2JZFXNUjDfxxFEMteklliWGTK7fapkiImw37i1EvOhW4z8UrFcY%2FoFyU%2B2hN8hzUekuQmhe0tTr23%2FSuZWqodtqgnJ7r8b4OzHhP4Hyeha7gNNBjRpL2CeMOKR%2FMAGOqUBSIxqxADQYFivCHT7FWA6IWEklzlCdUgIcE5QdZ99YC9eFY4GFhrbph53ytuoxhaY0s%2Bely3MPW3M0Le1Enw56utau2y%2FOm1DBpwJUmrvtfd24ec9GDiSWERD5NJEFMEE3cjFKE9O4cdsnCqQ9vrAHFUQxzmkboJsmeJO1%2FukZQqRaWnNeN0FWzxo8biwAPzL7G0qZxXk7Crtw2qGzc5ETuuIUqTA&X-Amz-Signature=210a4458ea19a65457f49d053fafef91117b7965c27b63c845d2834ce34d7903&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXGMQ2SD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjphs36F5H0mYu7n5T4U%2BbcwokKK12SsUS20W5jwwbHAiEA9D9K127xABFeFVEvgpSGF2NBmIrWS90bzwG4w4Z6MwgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmrh41Co7DGck5SHSrcA784dduGy153sWs%2BXsAUF2yh0z7D27kgK6eQCCgB3ky4C0CdluwZCsBs8HbwmINESs4%2BptRnuhqhnuoE6yBu9kon52BdBNFbcHIpJJ6wDEtrSMdyYH6veqbPQ6TLAVUOeTPkKfR7A9LS9ZG2cPpHos3Tm3jSHhsQC7%2FjMDXiofXkf7UkeA3XMJyAFmtli82F%2BsJRhUtiR%2FGSSOS9ZYuy7xH%2B9XQClC2HRK4oRs682aGdaHWqhPViTs%2FcDYR1LEeCh5%2BK6OiUz8JA0mIXBB2TMKhl%2FwdeZz0SpPQ%2FcMroyP8aKrkarQtqrUJxP02RAtuT8ktqfgYRan%2BPjrTUU78MLzuJ%2BYcDH77Uza5rgstyYoLEy1PNg9HY0wnQ37Bs9n7tWKkOTUp7EtwLsOX5vYxhecnvMUcqDrWMxTQz6V7%2F1nyFSwEzrO0UdbDOefZLF62Qa%2BolwvPpEtmA7IgAC%2BXiND%2Fz81%2FjHu5EWOOgMZyv2qFaVK6mE0ll8%2BMEY5z3cHDzSgEvWj2JZFXNUjDfxxFEMteklliWGTK7fapkiImw37i1EvOhW4z8UrFcY%2FoFyU%2B2hN8hzUekuQmhe0tTr23%2FSuZWqodtqgnJ7r8b4OzHhP4Hyeha7gNNBjRpL2CeMOKR%2FMAGOqUBSIxqxADQYFivCHT7FWA6IWEklzlCdUgIcE5QdZ99YC9eFY4GFhrbph53ytuoxhaY0s%2Bely3MPW3M0Le1Enw56utau2y%2FOm1DBpwJUmrvtfd24ec9GDiSWERD5NJEFMEE3cjFKE9O4cdsnCqQ9vrAHFUQxzmkboJsmeJO1%2FukZQqRaWnNeN0FWzxo8biwAPzL7G0qZxXk7Crtw2qGzc5ETuuIUqTA&X-Amz-Signature=3c637ed2fa023595db0b332f918dc2ce00f700bb9f74dc4b764c2cfff55169e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXGMQ2SD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjphs36F5H0mYu7n5T4U%2BbcwokKK12SsUS20W5jwwbHAiEA9D9K127xABFeFVEvgpSGF2NBmIrWS90bzwG4w4Z6MwgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmrh41Co7DGck5SHSrcA784dduGy153sWs%2BXsAUF2yh0z7D27kgK6eQCCgB3ky4C0CdluwZCsBs8HbwmINESs4%2BptRnuhqhnuoE6yBu9kon52BdBNFbcHIpJJ6wDEtrSMdyYH6veqbPQ6TLAVUOeTPkKfR7A9LS9ZG2cPpHos3Tm3jSHhsQC7%2FjMDXiofXkf7UkeA3XMJyAFmtli82F%2BsJRhUtiR%2FGSSOS9ZYuy7xH%2B9XQClC2HRK4oRs682aGdaHWqhPViTs%2FcDYR1LEeCh5%2BK6OiUz8JA0mIXBB2TMKhl%2FwdeZz0SpPQ%2FcMroyP8aKrkarQtqrUJxP02RAtuT8ktqfgYRan%2BPjrTUU78MLzuJ%2BYcDH77Uza5rgstyYoLEy1PNg9HY0wnQ37Bs9n7tWKkOTUp7EtwLsOX5vYxhecnvMUcqDrWMxTQz6V7%2F1nyFSwEzrO0UdbDOefZLF62Qa%2BolwvPpEtmA7IgAC%2BXiND%2Fz81%2FjHu5EWOOgMZyv2qFaVK6mE0ll8%2BMEY5z3cHDzSgEvWj2JZFXNUjDfxxFEMteklliWGTK7fapkiImw37i1EvOhW4z8UrFcY%2FoFyU%2B2hN8hzUekuQmhe0tTr23%2FSuZWqodtqgnJ7r8b4OzHhP4Hyeha7gNNBjRpL2CeMOKR%2FMAGOqUBSIxqxADQYFivCHT7FWA6IWEklzlCdUgIcE5QdZ99YC9eFY4GFhrbph53ytuoxhaY0s%2Bely3MPW3M0Le1Enw56utau2y%2FOm1DBpwJUmrvtfd24ec9GDiSWERD5NJEFMEE3cjFKE9O4cdsnCqQ9vrAHFUQxzmkboJsmeJO1%2FukZQqRaWnNeN0FWzxo8biwAPzL7G0qZxXk7Crtw2qGzc5ETuuIUqTA&X-Amz-Signature=ba9114b45cf68e407c3d23be6fa264dd53f4734ee8b56792ce8249f56f5184ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXGMQ2SD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjphs36F5H0mYu7n5T4U%2BbcwokKK12SsUS20W5jwwbHAiEA9D9K127xABFeFVEvgpSGF2NBmIrWS90bzwG4w4Z6MwgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmrh41Co7DGck5SHSrcA784dduGy153sWs%2BXsAUF2yh0z7D27kgK6eQCCgB3ky4C0CdluwZCsBs8HbwmINESs4%2BptRnuhqhnuoE6yBu9kon52BdBNFbcHIpJJ6wDEtrSMdyYH6veqbPQ6TLAVUOeTPkKfR7A9LS9ZG2cPpHos3Tm3jSHhsQC7%2FjMDXiofXkf7UkeA3XMJyAFmtli82F%2BsJRhUtiR%2FGSSOS9ZYuy7xH%2B9XQClC2HRK4oRs682aGdaHWqhPViTs%2FcDYR1LEeCh5%2BK6OiUz8JA0mIXBB2TMKhl%2FwdeZz0SpPQ%2FcMroyP8aKrkarQtqrUJxP02RAtuT8ktqfgYRan%2BPjrTUU78MLzuJ%2BYcDH77Uza5rgstyYoLEy1PNg9HY0wnQ37Bs9n7tWKkOTUp7EtwLsOX5vYxhecnvMUcqDrWMxTQz6V7%2F1nyFSwEzrO0UdbDOefZLF62Qa%2BolwvPpEtmA7IgAC%2BXiND%2Fz81%2FjHu5EWOOgMZyv2qFaVK6mE0ll8%2BMEY5z3cHDzSgEvWj2JZFXNUjDfxxFEMteklliWGTK7fapkiImw37i1EvOhW4z8UrFcY%2FoFyU%2B2hN8hzUekuQmhe0tTr23%2FSuZWqodtqgnJ7r8b4OzHhP4Hyeha7gNNBjRpL2CeMOKR%2FMAGOqUBSIxqxADQYFivCHT7FWA6IWEklzlCdUgIcE5QdZ99YC9eFY4GFhrbph53ytuoxhaY0s%2Bely3MPW3M0Le1Enw56utau2y%2FOm1DBpwJUmrvtfd24ec9GDiSWERD5NJEFMEE3cjFKE9O4cdsnCqQ9vrAHFUQxzmkboJsmeJO1%2FukZQqRaWnNeN0FWzxo8biwAPzL7G0qZxXk7Crtw2qGzc5ETuuIUqTA&X-Amz-Signature=3ec44175a23b01e22e1fa7a2dc1f7eea947687615617f8bc267c926375dac7ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXGMQ2SD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjphs36F5H0mYu7n5T4U%2BbcwokKK12SsUS20W5jwwbHAiEA9D9K127xABFeFVEvgpSGF2NBmIrWS90bzwG4w4Z6MwgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmrh41Co7DGck5SHSrcA784dduGy153sWs%2BXsAUF2yh0z7D27kgK6eQCCgB3ky4C0CdluwZCsBs8HbwmINESs4%2BptRnuhqhnuoE6yBu9kon52BdBNFbcHIpJJ6wDEtrSMdyYH6veqbPQ6TLAVUOeTPkKfR7A9LS9ZG2cPpHos3Tm3jSHhsQC7%2FjMDXiofXkf7UkeA3XMJyAFmtli82F%2BsJRhUtiR%2FGSSOS9ZYuy7xH%2B9XQClC2HRK4oRs682aGdaHWqhPViTs%2FcDYR1LEeCh5%2BK6OiUz8JA0mIXBB2TMKhl%2FwdeZz0SpPQ%2FcMroyP8aKrkarQtqrUJxP02RAtuT8ktqfgYRan%2BPjrTUU78MLzuJ%2BYcDH77Uza5rgstyYoLEy1PNg9HY0wnQ37Bs9n7tWKkOTUp7EtwLsOX5vYxhecnvMUcqDrWMxTQz6V7%2F1nyFSwEzrO0UdbDOefZLF62Qa%2BolwvPpEtmA7IgAC%2BXiND%2Fz81%2FjHu5EWOOgMZyv2qFaVK6mE0ll8%2BMEY5z3cHDzSgEvWj2JZFXNUjDfxxFEMteklliWGTK7fapkiImw37i1EvOhW4z8UrFcY%2FoFyU%2B2hN8hzUekuQmhe0tTr23%2FSuZWqodtqgnJ7r8b4OzHhP4Hyeha7gNNBjRpL2CeMOKR%2FMAGOqUBSIxqxADQYFivCHT7FWA6IWEklzlCdUgIcE5QdZ99YC9eFY4GFhrbph53ytuoxhaY0s%2Bely3MPW3M0Le1Enw56utau2y%2FOm1DBpwJUmrvtfd24ec9GDiSWERD5NJEFMEE3cjFKE9O4cdsnCqQ9vrAHFUQxzmkboJsmeJO1%2FukZQqRaWnNeN0FWzxo8biwAPzL7G0qZxXk7Crtw2qGzc5ETuuIUqTA&X-Amz-Signature=b772790507112f9f796215acc7d5369f203eb296b8a66335ac3593d74ef236e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXGMQ2SD%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjphs36F5H0mYu7n5T4U%2BbcwokKK12SsUS20W5jwwbHAiEA9D9K127xABFeFVEvgpSGF2NBmIrWS90bzwG4w4Z6MwgqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmrh41Co7DGck5SHSrcA784dduGy153sWs%2BXsAUF2yh0z7D27kgK6eQCCgB3ky4C0CdluwZCsBs8HbwmINESs4%2BptRnuhqhnuoE6yBu9kon52BdBNFbcHIpJJ6wDEtrSMdyYH6veqbPQ6TLAVUOeTPkKfR7A9LS9ZG2cPpHos3Tm3jSHhsQC7%2FjMDXiofXkf7UkeA3XMJyAFmtli82F%2BsJRhUtiR%2FGSSOS9ZYuy7xH%2B9XQClC2HRK4oRs682aGdaHWqhPViTs%2FcDYR1LEeCh5%2BK6OiUz8JA0mIXBB2TMKhl%2FwdeZz0SpPQ%2FcMroyP8aKrkarQtqrUJxP02RAtuT8ktqfgYRan%2BPjrTUU78MLzuJ%2BYcDH77Uza5rgstyYoLEy1PNg9HY0wnQ37Bs9n7tWKkOTUp7EtwLsOX5vYxhecnvMUcqDrWMxTQz6V7%2F1nyFSwEzrO0UdbDOefZLF62Qa%2BolwvPpEtmA7IgAC%2BXiND%2Fz81%2FjHu5EWOOgMZyv2qFaVK6mE0ll8%2BMEY5z3cHDzSgEvWj2JZFXNUjDfxxFEMteklliWGTK7fapkiImw37i1EvOhW4z8UrFcY%2FoFyU%2B2hN8hzUekuQmhe0tTr23%2FSuZWqodtqgnJ7r8b4OzHhP4Hyeha7gNNBjRpL2CeMOKR%2FMAGOqUBSIxqxADQYFivCHT7FWA6IWEklzlCdUgIcE5QdZ99YC9eFY4GFhrbph53ytuoxhaY0s%2Bely3MPW3M0Le1Enw56utau2y%2FOm1DBpwJUmrvtfd24ec9GDiSWERD5NJEFMEE3cjFKE9O4cdsnCqQ9vrAHFUQxzmkboJsmeJO1%2FukZQqRaWnNeN0FWzxo8biwAPzL7G0qZxXk7Crtw2qGzc5ETuuIUqTA&X-Amz-Signature=eadb58e6ff43a4738caeebf446850156b6f82b4556c2b8f075920d4be1ab693c&X-Amz-SignedHeaders=host&x-id=GetObject)
