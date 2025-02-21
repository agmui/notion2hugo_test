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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBATLFF4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX381A4KLKr8tgl9UJWR3fhwXOOrHjkDMH5aAhbDQIHQIgCVk2KzjzKt%2BNPAL0udELKLiPcHPDzTL0ja0Jo0oGzz0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAac3VAXtYQ%2FFWMQhSrcAzi3lwbqHs5%2FJfGQiaijrirkTCaxrSFdDbavIR0%2F5TWFkxmy5qyUeUI5sfu603HVBj5P%2BAbIdJ7ySL3uTLT8dKoZWj7F07TiTqnSilPalh47eoqSHKULIHinBnDhvaM8bAbYka%2FIizBPUlH%2Bcd0zCM2Yb0j7JeNMRIQW%2FT%2BnLh6%2FeGjUpjd3s5L2qiv80pMOH5TAHiUD06NQDVAuesEwBvXIwwMvqBws2W64RthMNJOjDbqLA%2B7sL9WyWoRmOZz3P37c2arofvNdZ5uQEpkoHLQcilcn16x3nkVETctkRDhrKfOJkuLw9thcntNoZYT9XElhidM6ssOHfCH7Xy4YeZKUfwOoWSqvKdb9umnA6rWCGZaOSLcJyR2usTOz1v9CFKNbfiM9xHLa%2F4%2BE4sqADRtEmDFSXDtAeuN0Fev76%2F%2BVOymT%2BGzHU7B6L1jpZ6fallvU2LQV26%2B%2BZHNHwKMK51DCK3d4f4iWzezLgBl7%2FFAWUaSenzz5OxdtYXgsWhb%2B3UsQM9gxe3QJF8xh4NlgeUtvoAGoxM1vvM625IE0TntOW8mZ%2BC97qIf6sNv7409Xcld2r2tTe1AQlA3czaH0uulWcmS2ZYo6nByPT1UjEyJ9AIRsmF5geHceQA3wMIGB470GOqUBabLaUYSgGaFd9BVAeO8IDwvwZWU9CXEHzKtwc0G1gRZJ5KD75%2Fv8xdmlRL3sHWmBB7lJbHDS7UVY0Pu%2FtN0svTw2TWBILx5MBo9%2B6qKdWZU2WiydwAtGrkZxDuLjni1FiIDQCtl%2BC10Y9kqX7%2BbJGqLZQRPDw3kyvlDdis4FUze%2BJg1OU9WXqKjmKDiN8yTX%2Bue862bFEzrVTaEEzjikh7UZSPiI&X-Amz-Signature=03bd02e3411ec99283db2481d124200e36b13b5baea10dfb172fdf7cfe9b1c01&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBATLFF4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX381A4KLKr8tgl9UJWR3fhwXOOrHjkDMH5aAhbDQIHQIgCVk2KzjzKt%2BNPAL0udELKLiPcHPDzTL0ja0Jo0oGzz0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAac3VAXtYQ%2FFWMQhSrcAzi3lwbqHs5%2FJfGQiaijrirkTCaxrSFdDbavIR0%2F5TWFkxmy5qyUeUI5sfu603HVBj5P%2BAbIdJ7ySL3uTLT8dKoZWj7F07TiTqnSilPalh47eoqSHKULIHinBnDhvaM8bAbYka%2FIizBPUlH%2Bcd0zCM2Yb0j7JeNMRIQW%2FT%2BnLh6%2FeGjUpjd3s5L2qiv80pMOH5TAHiUD06NQDVAuesEwBvXIwwMvqBws2W64RthMNJOjDbqLA%2B7sL9WyWoRmOZz3P37c2arofvNdZ5uQEpkoHLQcilcn16x3nkVETctkRDhrKfOJkuLw9thcntNoZYT9XElhidM6ssOHfCH7Xy4YeZKUfwOoWSqvKdb9umnA6rWCGZaOSLcJyR2usTOz1v9CFKNbfiM9xHLa%2F4%2BE4sqADRtEmDFSXDtAeuN0Fev76%2F%2BVOymT%2BGzHU7B6L1jpZ6fallvU2LQV26%2B%2BZHNHwKMK51DCK3d4f4iWzezLgBl7%2FFAWUaSenzz5OxdtYXgsWhb%2B3UsQM9gxe3QJF8xh4NlgeUtvoAGoxM1vvM625IE0TntOW8mZ%2BC97qIf6sNv7409Xcld2r2tTe1AQlA3czaH0uulWcmS2ZYo6nByPT1UjEyJ9AIRsmF5geHceQA3wMIGB470GOqUBabLaUYSgGaFd9BVAeO8IDwvwZWU9CXEHzKtwc0G1gRZJ5KD75%2Fv8xdmlRL3sHWmBB7lJbHDS7UVY0Pu%2FtN0svTw2TWBILx5MBo9%2B6qKdWZU2WiydwAtGrkZxDuLjni1FiIDQCtl%2BC10Y9kqX7%2BbJGqLZQRPDw3kyvlDdis4FUze%2BJg1OU9WXqKjmKDiN8yTX%2Bue862bFEzrVTaEEzjikh7UZSPiI&X-Amz-Signature=9977ab1c530262a0ed93dffff3a8c6400ad1c2489af47d38a85d573a06f67074&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBATLFF4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX381A4KLKr8tgl9UJWR3fhwXOOrHjkDMH5aAhbDQIHQIgCVk2KzjzKt%2BNPAL0udELKLiPcHPDzTL0ja0Jo0oGzz0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAac3VAXtYQ%2FFWMQhSrcAzi3lwbqHs5%2FJfGQiaijrirkTCaxrSFdDbavIR0%2F5TWFkxmy5qyUeUI5sfu603HVBj5P%2BAbIdJ7ySL3uTLT8dKoZWj7F07TiTqnSilPalh47eoqSHKULIHinBnDhvaM8bAbYka%2FIizBPUlH%2Bcd0zCM2Yb0j7JeNMRIQW%2FT%2BnLh6%2FeGjUpjd3s5L2qiv80pMOH5TAHiUD06NQDVAuesEwBvXIwwMvqBws2W64RthMNJOjDbqLA%2B7sL9WyWoRmOZz3P37c2arofvNdZ5uQEpkoHLQcilcn16x3nkVETctkRDhrKfOJkuLw9thcntNoZYT9XElhidM6ssOHfCH7Xy4YeZKUfwOoWSqvKdb9umnA6rWCGZaOSLcJyR2usTOz1v9CFKNbfiM9xHLa%2F4%2BE4sqADRtEmDFSXDtAeuN0Fev76%2F%2BVOymT%2BGzHU7B6L1jpZ6fallvU2LQV26%2B%2BZHNHwKMK51DCK3d4f4iWzezLgBl7%2FFAWUaSenzz5OxdtYXgsWhb%2B3UsQM9gxe3QJF8xh4NlgeUtvoAGoxM1vvM625IE0TntOW8mZ%2BC97qIf6sNv7409Xcld2r2tTe1AQlA3czaH0uulWcmS2ZYo6nByPT1UjEyJ9AIRsmF5geHceQA3wMIGB470GOqUBabLaUYSgGaFd9BVAeO8IDwvwZWU9CXEHzKtwc0G1gRZJ5KD75%2Fv8xdmlRL3sHWmBB7lJbHDS7UVY0Pu%2FtN0svTw2TWBILx5MBo9%2B6qKdWZU2WiydwAtGrkZxDuLjni1FiIDQCtl%2BC10Y9kqX7%2BbJGqLZQRPDw3kyvlDdis4FUze%2BJg1OU9WXqKjmKDiN8yTX%2Bue862bFEzrVTaEEzjikh7UZSPiI&X-Amz-Signature=b3c5b7d01bcd3bdabb461017e4a835755ab760e092b7a364918d6b787ee8c795&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBATLFF4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX381A4KLKr8tgl9UJWR3fhwXOOrHjkDMH5aAhbDQIHQIgCVk2KzjzKt%2BNPAL0udELKLiPcHPDzTL0ja0Jo0oGzz0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAac3VAXtYQ%2FFWMQhSrcAzi3lwbqHs5%2FJfGQiaijrirkTCaxrSFdDbavIR0%2F5TWFkxmy5qyUeUI5sfu603HVBj5P%2BAbIdJ7ySL3uTLT8dKoZWj7F07TiTqnSilPalh47eoqSHKULIHinBnDhvaM8bAbYka%2FIizBPUlH%2Bcd0zCM2Yb0j7JeNMRIQW%2FT%2BnLh6%2FeGjUpjd3s5L2qiv80pMOH5TAHiUD06NQDVAuesEwBvXIwwMvqBws2W64RthMNJOjDbqLA%2B7sL9WyWoRmOZz3P37c2arofvNdZ5uQEpkoHLQcilcn16x3nkVETctkRDhrKfOJkuLw9thcntNoZYT9XElhidM6ssOHfCH7Xy4YeZKUfwOoWSqvKdb9umnA6rWCGZaOSLcJyR2usTOz1v9CFKNbfiM9xHLa%2F4%2BE4sqADRtEmDFSXDtAeuN0Fev76%2F%2BVOymT%2BGzHU7B6L1jpZ6fallvU2LQV26%2B%2BZHNHwKMK51DCK3d4f4iWzezLgBl7%2FFAWUaSenzz5OxdtYXgsWhb%2B3UsQM9gxe3QJF8xh4NlgeUtvoAGoxM1vvM625IE0TntOW8mZ%2BC97qIf6sNv7409Xcld2r2tTe1AQlA3czaH0uulWcmS2ZYo6nByPT1UjEyJ9AIRsmF5geHceQA3wMIGB470GOqUBabLaUYSgGaFd9BVAeO8IDwvwZWU9CXEHzKtwc0G1gRZJ5KD75%2Fv8xdmlRL3sHWmBB7lJbHDS7UVY0Pu%2FtN0svTw2TWBILx5MBo9%2B6qKdWZU2WiydwAtGrkZxDuLjni1FiIDQCtl%2BC10Y9kqX7%2BbJGqLZQRPDw3kyvlDdis4FUze%2BJg1OU9WXqKjmKDiN8yTX%2Bue862bFEzrVTaEEzjikh7UZSPiI&X-Amz-Signature=fa1b2330c7b84f96b98e95214ec25ac45c2c843e577ea4f72bb8407686f3d5c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBATLFF4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX381A4KLKr8tgl9UJWR3fhwXOOrHjkDMH5aAhbDQIHQIgCVk2KzjzKt%2BNPAL0udELKLiPcHPDzTL0ja0Jo0oGzz0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAac3VAXtYQ%2FFWMQhSrcAzi3lwbqHs5%2FJfGQiaijrirkTCaxrSFdDbavIR0%2F5TWFkxmy5qyUeUI5sfu603HVBj5P%2BAbIdJ7ySL3uTLT8dKoZWj7F07TiTqnSilPalh47eoqSHKULIHinBnDhvaM8bAbYka%2FIizBPUlH%2Bcd0zCM2Yb0j7JeNMRIQW%2FT%2BnLh6%2FeGjUpjd3s5L2qiv80pMOH5TAHiUD06NQDVAuesEwBvXIwwMvqBws2W64RthMNJOjDbqLA%2B7sL9WyWoRmOZz3P37c2arofvNdZ5uQEpkoHLQcilcn16x3nkVETctkRDhrKfOJkuLw9thcntNoZYT9XElhidM6ssOHfCH7Xy4YeZKUfwOoWSqvKdb9umnA6rWCGZaOSLcJyR2usTOz1v9CFKNbfiM9xHLa%2F4%2BE4sqADRtEmDFSXDtAeuN0Fev76%2F%2BVOymT%2BGzHU7B6L1jpZ6fallvU2LQV26%2B%2BZHNHwKMK51DCK3d4f4iWzezLgBl7%2FFAWUaSenzz5OxdtYXgsWhb%2B3UsQM9gxe3QJF8xh4NlgeUtvoAGoxM1vvM625IE0TntOW8mZ%2BC97qIf6sNv7409Xcld2r2tTe1AQlA3czaH0uulWcmS2ZYo6nByPT1UjEyJ9AIRsmF5geHceQA3wMIGB470GOqUBabLaUYSgGaFd9BVAeO8IDwvwZWU9CXEHzKtwc0G1gRZJ5KD75%2Fv8xdmlRL3sHWmBB7lJbHDS7UVY0Pu%2FtN0svTw2TWBILx5MBo9%2B6qKdWZU2WiydwAtGrkZxDuLjni1FiIDQCtl%2BC10Y9kqX7%2BbJGqLZQRPDw3kyvlDdis4FUze%2BJg1OU9WXqKjmKDiN8yTX%2Bue862bFEzrVTaEEzjikh7UZSPiI&X-Amz-Signature=fdeb33761824da04619317955ac8512f56039a6d1bc56130a38efe608954be8b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBATLFF4%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T190214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX381A4KLKr8tgl9UJWR3fhwXOOrHjkDMH5aAhbDQIHQIgCVk2KzjzKt%2BNPAL0udELKLiPcHPDzTL0ja0Jo0oGzz0qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAac3VAXtYQ%2FFWMQhSrcAzi3lwbqHs5%2FJfGQiaijrirkTCaxrSFdDbavIR0%2F5TWFkxmy5qyUeUI5sfu603HVBj5P%2BAbIdJ7ySL3uTLT8dKoZWj7F07TiTqnSilPalh47eoqSHKULIHinBnDhvaM8bAbYka%2FIizBPUlH%2Bcd0zCM2Yb0j7JeNMRIQW%2FT%2BnLh6%2FeGjUpjd3s5L2qiv80pMOH5TAHiUD06NQDVAuesEwBvXIwwMvqBws2W64RthMNJOjDbqLA%2B7sL9WyWoRmOZz3P37c2arofvNdZ5uQEpkoHLQcilcn16x3nkVETctkRDhrKfOJkuLw9thcntNoZYT9XElhidM6ssOHfCH7Xy4YeZKUfwOoWSqvKdb9umnA6rWCGZaOSLcJyR2usTOz1v9CFKNbfiM9xHLa%2F4%2BE4sqADRtEmDFSXDtAeuN0Fev76%2F%2BVOymT%2BGzHU7B6L1jpZ6fallvU2LQV26%2B%2BZHNHwKMK51DCK3d4f4iWzezLgBl7%2FFAWUaSenzz5OxdtYXgsWhb%2B3UsQM9gxe3QJF8xh4NlgeUtvoAGoxM1vvM625IE0TntOW8mZ%2BC97qIf6sNv7409Xcld2r2tTe1AQlA3czaH0uulWcmS2ZYo6nByPT1UjEyJ9AIRsmF5geHceQA3wMIGB470GOqUBabLaUYSgGaFd9BVAeO8IDwvwZWU9CXEHzKtwc0G1gRZJ5KD75%2Fv8xdmlRL3sHWmBB7lJbHDS7UVY0Pu%2FtN0svTw2TWBILx5MBo9%2B6qKdWZU2WiydwAtGrkZxDuLjni1FiIDQCtl%2BC10Y9kqX7%2BbJGqLZQRPDw3kyvlDdis4FUze%2BJg1OU9WXqKjmKDiN8yTX%2Bue862bFEzrVTaEEzjikh7UZSPiI&X-Amz-Signature=c98f275838d3abf433e1355a9bec5a793430f762360f05232a87032af31ade7c&X-Amz-SignedHeaders=host&x-id=GetObject)
