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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEKHOBU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCID4lWP0GpbDXheEp2qYeDJBoCuvT5N7AW4tBsm671irOAiEA%2BSUXkzxKkwSwaFq%2Fo07NZovM44YvmbFyzwcQQB4pe6QqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGk98boamTreRuSwYircAxlsR3pB34nFtTdF57g8vbAOwb7UND7RiMmGmGTt7AH1StBI9kGjONUqc37vyNoXZpGmDWjds39%2BxpW9WzNDCG%2BAFOeiM6xMZDhWIPG0%2B8gTXQmuCiTIBYZjpkBvD5e2dtet3MWiUuaDiUpkSJsGJoI8fphfOunsymEEdq9YNP3qa6ZMuHKJDeawNktPTCXxMVnqDtwwj6duFWR78oG4yoPbCaCrhRy7QgEtE3f3on0W%2F%2FYQo9B8CowXOSbgzPPNglYSDORDK43yGIKgShphndKpLnwXq3IL6FTGPiDRfUzaap3jj8aM3w7wwiH3SiRo%2BV7s9rrJojZfGOVTkjYSAAjGUZE9piARPrkZ%2B44Bdrn9ObfEH%2B24WHUCl5OwHKxtu2PsKLn286hnsRQ%2BP9W6Sp8Q18Hsew4K9Z1cFPZJ9lAu5YkGRiiusyg%2B%2BlzpRvdYFj5FTuSOWUz708QL4fnVnLi6pROaBeQLqpzF%2B7A3B6ctWAZ3ZK%2Bwsw50blRQH6GQY%2BGTHX7y6n0gUeBh8iy%2FBuU1pCZ6Bo2gBIMi7E4p68NOp%2BpFzFU3MhFz08pT4Tqjijc6Ci%2F3VO96DfYpeNiQtH0cEmnpVPjfE5MxohK73xMwEBZmACfla1%2FmJJn%2BMKiMvb4GOqUBr9ZxPNPChzX5aqMZ9NIkic%2FfvSBfAC5tDTZAF36GkLZvC%2BwymHMWcwPL%2BN%2FRowBLmpeO79vN6zelP74BPekxHC2GgtjwrJs%2FxiudxXNXADyVVwM9KEQODMZkWN4nPyc6oV5%2Baf3BTB%2B79SQLt4erBd3CenAGUJC2wIB%2Bb6516Slq3OF8%2Bn4Pd14tRfbo%2B8E5n3FSq2zsZTguEf82q5n5p9S7p7xT&X-Amz-Signature=c14fce57bbf4e32345fbd6125c56d79461f4101b67ebfbc2a7bc31b6e1592600&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEKHOBU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCID4lWP0GpbDXheEp2qYeDJBoCuvT5N7AW4tBsm671irOAiEA%2BSUXkzxKkwSwaFq%2Fo07NZovM44YvmbFyzwcQQB4pe6QqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGk98boamTreRuSwYircAxlsR3pB34nFtTdF57g8vbAOwb7UND7RiMmGmGTt7AH1StBI9kGjONUqc37vyNoXZpGmDWjds39%2BxpW9WzNDCG%2BAFOeiM6xMZDhWIPG0%2B8gTXQmuCiTIBYZjpkBvD5e2dtet3MWiUuaDiUpkSJsGJoI8fphfOunsymEEdq9YNP3qa6ZMuHKJDeawNktPTCXxMVnqDtwwj6duFWR78oG4yoPbCaCrhRy7QgEtE3f3on0W%2F%2FYQo9B8CowXOSbgzPPNglYSDORDK43yGIKgShphndKpLnwXq3IL6FTGPiDRfUzaap3jj8aM3w7wwiH3SiRo%2BV7s9rrJojZfGOVTkjYSAAjGUZE9piARPrkZ%2B44Bdrn9ObfEH%2B24WHUCl5OwHKxtu2PsKLn286hnsRQ%2BP9W6Sp8Q18Hsew4K9Z1cFPZJ9lAu5YkGRiiusyg%2B%2BlzpRvdYFj5FTuSOWUz708QL4fnVnLi6pROaBeQLqpzF%2B7A3B6ctWAZ3ZK%2Bwsw50blRQH6GQY%2BGTHX7y6n0gUeBh8iy%2FBuU1pCZ6Bo2gBIMi7E4p68NOp%2BpFzFU3MhFz08pT4Tqjijc6Ci%2F3VO96DfYpeNiQtH0cEmnpVPjfE5MxohK73xMwEBZmACfla1%2FmJJn%2BMKiMvb4GOqUBr9ZxPNPChzX5aqMZ9NIkic%2FfvSBfAC5tDTZAF36GkLZvC%2BwymHMWcwPL%2BN%2FRowBLmpeO79vN6zelP74BPekxHC2GgtjwrJs%2FxiudxXNXADyVVwM9KEQODMZkWN4nPyc6oV5%2Baf3BTB%2B79SQLt4erBd3CenAGUJC2wIB%2Bb6516Slq3OF8%2Bn4Pd14tRfbo%2B8E5n3FSq2zsZTguEf82q5n5p9S7p7xT&X-Amz-Signature=aea4cf9afd37fdc65ae065c526e7647f528a471c748353a6fedac4e3bc5c6180&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEKHOBU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCID4lWP0GpbDXheEp2qYeDJBoCuvT5N7AW4tBsm671irOAiEA%2BSUXkzxKkwSwaFq%2Fo07NZovM44YvmbFyzwcQQB4pe6QqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGk98boamTreRuSwYircAxlsR3pB34nFtTdF57g8vbAOwb7UND7RiMmGmGTt7AH1StBI9kGjONUqc37vyNoXZpGmDWjds39%2BxpW9WzNDCG%2BAFOeiM6xMZDhWIPG0%2B8gTXQmuCiTIBYZjpkBvD5e2dtet3MWiUuaDiUpkSJsGJoI8fphfOunsymEEdq9YNP3qa6ZMuHKJDeawNktPTCXxMVnqDtwwj6duFWR78oG4yoPbCaCrhRy7QgEtE3f3on0W%2F%2FYQo9B8CowXOSbgzPPNglYSDORDK43yGIKgShphndKpLnwXq3IL6FTGPiDRfUzaap3jj8aM3w7wwiH3SiRo%2BV7s9rrJojZfGOVTkjYSAAjGUZE9piARPrkZ%2B44Bdrn9ObfEH%2B24WHUCl5OwHKxtu2PsKLn286hnsRQ%2BP9W6Sp8Q18Hsew4K9Z1cFPZJ9lAu5YkGRiiusyg%2B%2BlzpRvdYFj5FTuSOWUz708QL4fnVnLi6pROaBeQLqpzF%2B7A3B6ctWAZ3ZK%2Bwsw50blRQH6GQY%2BGTHX7y6n0gUeBh8iy%2FBuU1pCZ6Bo2gBIMi7E4p68NOp%2BpFzFU3MhFz08pT4Tqjijc6Ci%2F3VO96DfYpeNiQtH0cEmnpVPjfE5MxohK73xMwEBZmACfla1%2FmJJn%2BMKiMvb4GOqUBr9ZxPNPChzX5aqMZ9NIkic%2FfvSBfAC5tDTZAF36GkLZvC%2BwymHMWcwPL%2BN%2FRowBLmpeO79vN6zelP74BPekxHC2GgtjwrJs%2FxiudxXNXADyVVwM9KEQODMZkWN4nPyc6oV5%2Baf3BTB%2B79SQLt4erBd3CenAGUJC2wIB%2Bb6516Slq3OF8%2Bn4Pd14tRfbo%2B8E5n3FSq2zsZTguEf82q5n5p9S7p7xT&X-Amz-Signature=4987ce1340ab9b0bcdf3ba29d2efa14debf5e75301a9074a7c49bf5b3b11e287&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEKHOBU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCID4lWP0GpbDXheEp2qYeDJBoCuvT5N7AW4tBsm671irOAiEA%2BSUXkzxKkwSwaFq%2Fo07NZovM44YvmbFyzwcQQB4pe6QqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGk98boamTreRuSwYircAxlsR3pB34nFtTdF57g8vbAOwb7UND7RiMmGmGTt7AH1StBI9kGjONUqc37vyNoXZpGmDWjds39%2BxpW9WzNDCG%2BAFOeiM6xMZDhWIPG0%2B8gTXQmuCiTIBYZjpkBvD5e2dtet3MWiUuaDiUpkSJsGJoI8fphfOunsymEEdq9YNP3qa6ZMuHKJDeawNktPTCXxMVnqDtwwj6duFWR78oG4yoPbCaCrhRy7QgEtE3f3on0W%2F%2FYQo9B8CowXOSbgzPPNglYSDORDK43yGIKgShphndKpLnwXq3IL6FTGPiDRfUzaap3jj8aM3w7wwiH3SiRo%2BV7s9rrJojZfGOVTkjYSAAjGUZE9piARPrkZ%2B44Bdrn9ObfEH%2B24WHUCl5OwHKxtu2PsKLn286hnsRQ%2BP9W6Sp8Q18Hsew4K9Z1cFPZJ9lAu5YkGRiiusyg%2B%2BlzpRvdYFj5FTuSOWUz708QL4fnVnLi6pROaBeQLqpzF%2B7A3B6ctWAZ3ZK%2Bwsw50blRQH6GQY%2BGTHX7y6n0gUeBh8iy%2FBuU1pCZ6Bo2gBIMi7E4p68NOp%2BpFzFU3MhFz08pT4Tqjijc6Ci%2F3VO96DfYpeNiQtH0cEmnpVPjfE5MxohK73xMwEBZmACfla1%2FmJJn%2BMKiMvb4GOqUBr9ZxPNPChzX5aqMZ9NIkic%2FfvSBfAC5tDTZAF36GkLZvC%2BwymHMWcwPL%2BN%2FRowBLmpeO79vN6zelP74BPekxHC2GgtjwrJs%2FxiudxXNXADyVVwM9KEQODMZkWN4nPyc6oV5%2Baf3BTB%2B79SQLt4erBd3CenAGUJC2wIB%2Bb6516Slq3OF8%2Bn4Pd14tRfbo%2B8E5n3FSq2zsZTguEf82q5n5p9S7p7xT&X-Amz-Signature=4d5eda49bc8f2fc37517fa9b3c2a4348486c0800a3b4ebe65561aca7ad677268&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEKHOBU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCID4lWP0GpbDXheEp2qYeDJBoCuvT5N7AW4tBsm671irOAiEA%2BSUXkzxKkwSwaFq%2Fo07NZovM44YvmbFyzwcQQB4pe6QqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGk98boamTreRuSwYircAxlsR3pB34nFtTdF57g8vbAOwb7UND7RiMmGmGTt7AH1StBI9kGjONUqc37vyNoXZpGmDWjds39%2BxpW9WzNDCG%2BAFOeiM6xMZDhWIPG0%2B8gTXQmuCiTIBYZjpkBvD5e2dtet3MWiUuaDiUpkSJsGJoI8fphfOunsymEEdq9YNP3qa6ZMuHKJDeawNktPTCXxMVnqDtwwj6duFWR78oG4yoPbCaCrhRy7QgEtE3f3on0W%2F%2FYQo9B8CowXOSbgzPPNglYSDORDK43yGIKgShphndKpLnwXq3IL6FTGPiDRfUzaap3jj8aM3w7wwiH3SiRo%2BV7s9rrJojZfGOVTkjYSAAjGUZE9piARPrkZ%2B44Bdrn9ObfEH%2B24WHUCl5OwHKxtu2PsKLn286hnsRQ%2BP9W6Sp8Q18Hsew4K9Z1cFPZJ9lAu5YkGRiiusyg%2B%2BlzpRvdYFj5FTuSOWUz708QL4fnVnLi6pROaBeQLqpzF%2B7A3B6ctWAZ3ZK%2Bwsw50blRQH6GQY%2BGTHX7y6n0gUeBh8iy%2FBuU1pCZ6Bo2gBIMi7E4p68NOp%2BpFzFU3MhFz08pT4Tqjijc6Ci%2F3VO96DfYpeNiQtH0cEmnpVPjfE5MxohK73xMwEBZmACfla1%2FmJJn%2BMKiMvb4GOqUBr9ZxPNPChzX5aqMZ9NIkic%2FfvSBfAC5tDTZAF36GkLZvC%2BwymHMWcwPL%2BN%2FRowBLmpeO79vN6zelP74BPekxHC2GgtjwrJs%2FxiudxXNXADyVVwM9KEQODMZkWN4nPyc6oV5%2Baf3BTB%2B79SQLt4erBd3CenAGUJC2wIB%2Bb6516Slq3OF8%2Bn4Pd14tRfbo%2B8E5n3FSq2zsZTguEf82q5n5p9S7p7xT&X-Amz-Signature=7704cdc7966854cb3e1c2b8873c9510dde07b3e8ff75211dc8836952321dbcea&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CEKHOBU%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCID4lWP0GpbDXheEp2qYeDJBoCuvT5N7AW4tBsm671irOAiEA%2BSUXkzxKkwSwaFq%2Fo07NZovM44YvmbFyzwcQQB4pe6QqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGk98boamTreRuSwYircAxlsR3pB34nFtTdF57g8vbAOwb7UND7RiMmGmGTt7AH1StBI9kGjONUqc37vyNoXZpGmDWjds39%2BxpW9WzNDCG%2BAFOeiM6xMZDhWIPG0%2B8gTXQmuCiTIBYZjpkBvD5e2dtet3MWiUuaDiUpkSJsGJoI8fphfOunsymEEdq9YNP3qa6ZMuHKJDeawNktPTCXxMVnqDtwwj6duFWR78oG4yoPbCaCrhRy7QgEtE3f3on0W%2F%2FYQo9B8CowXOSbgzPPNglYSDORDK43yGIKgShphndKpLnwXq3IL6FTGPiDRfUzaap3jj8aM3w7wwiH3SiRo%2BV7s9rrJojZfGOVTkjYSAAjGUZE9piARPrkZ%2B44Bdrn9ObfEH%2B24WHUCl5OwHKxtu2PsKLn286hnsRQ%2BP9W6Sp8Q18Hsew4K9Z1cFPZJ9lAu5YkGRiiusyg%2B%2BlzpRvdYFj5FTuSOWUz708QL4fnVnLi6pROaBeQLqpzF%2B7A3B6ctWAZ3ZK%2Bwsw50blRQH6GQY%2BGTHX7y6n0gUeBh8iy%2FBuU1pCZ6Bo2gBIMi7E4p68NOp%2BpFzFU3MhFz08pT4Tqjijc6Ci%2F3VO96DfYpeNiQtH0cEmnpVPjfE5MxohK73xMwEBZmACfla1%2FmJJn%2BMKiMvb4GOqUBr9ZxPNPChzX5aqMZ9NIkic%2FfvSBfAC5tDTZAF36GkLZvC%2BwymHMWcwPL%2BN%2FRowBLmpeO79vN6zelP74BPekxHC2GgtjwrJs%2FxiudxXNXADyVVwM9KEQODMZkWN4nPyc6oV5%2Baf3BTB%2B79SQLt4erBd3CenAGUJC2wIB%2Bb6516Slq3OF8%2Bn4Pd14tRfbo%2B8E5n3FSq2zsZTguEf82q5n5p9S7p7xT&X-Amz-Signature=ee355551d809517183a440d5dfc8fbcf5c4f7adfbbcd7e650f2bd7bc31104b5a&X-Amz-SignedHeaders=host&x-id=GetObject)
