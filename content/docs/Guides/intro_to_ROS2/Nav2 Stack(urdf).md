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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQS7V5C%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDYBHH1SuBaSIZeTgUNzXjQLNfgUPA7bg5SQ%2BKnHNUVwQIgA9c2mAO4A576cxk%2Fj%2B0AXSkICuxFSkjcnVkEUBrehrwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi6QE0cC504PCtC3SrcA04%2FIwUx6q8M2LabwrazsW59fDc3GUtnADb0watlUrodk8d91%2Bo%2Fe%2BZmMG7003wRTMrL3sMuiBs6na1HcYYo9K5DwkE6jWsdwZtOHMJkBJ2TvZUEMy84CGvWKVu9ZzjdR8sx7xWkWReQk5X4axLukNT5SADt4q0IZ3HZ8FHGTOMv%2FDtuZW6tiWFHVqMPwaqDbs8M00cxabhQ5Sv232i4wYQslgGfAcEWh5Qw06t1O3iohzyiSv8z5DQs5S7xV3nvVuv5vlJj01EwUkXlGXca8Sk%2FRfa4vJiXwC95COkk7s3xT8oTuDTx%2BTAYyJtKOs55jCJhioKvN%2B1aqbzXhE0LP%2FcNC1eF2h%2F1TsX74zuPhPBkeJ9wrMXBTwiqLjbTCraeYnNNfwP9ILQKlCB8bWxlLflFab8epXjWTVYev433JHGEgY0F8TKAgaobNoD8J76QR%2FqtzOdtxiZB%2BhH7En9YN9h4c79v70e8O0RWH4YGFX9uRCNUAf8dIucCAnxdYoM9spqJIdlBVDZLS%2FAS%2BXZ28tUtXEMLwwe%2BRI8S3aDYKQti3r8dnwfmzWCnUhtlV3aS0EKKqbPX2osriqMaJ1elMrV9ndxs8Rrb4AoYAtqxi3Z3J%2B6lslnCQqslymDFMKDi98EGOqUBiedGZ3S774nq6QwI%2Bl80baU25HjOAUJuB7xmJFJ8t%2FyvyKkYm9o9Vc8M00%2Bl7lNRAYe3KeGKykGNT72kD9eOWWPd2q9FhWpQmOkk1LAEnlZlOSATzWpm18iwdMU0tckHPQXEnaMCn8W0cyvQPu2tQ0ojBMAVO3MGb69lCFEUoaCyf%2F9ts6WlJMaV%2BjYbX3YO9nknNPSwJFikHrSpizIXFFQhj2%2BO&X-Amz-Signature=8a1af7f8867c398cfbc64a1d8fcbf6e5d129cc4c092beda78e66b5638184894a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQS7V5C%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDYBHH1SuBaSIZeTgUNzXjQLNfgUPA7bg5SQ%2BKnHNUVwQIgA9c2mAO4A576cxk%2Fj%2B0AXSkICuxFSkjcnVkEUBrehrwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi6QE0cC504PCtC3SrcA04%2FIwUx6q8M2LabwrazsW59fDc3GUtnADb0watlUrodk8d91%2Bo%2Fe%2BZmMG7003wRTMrL3sMuiBs6na1HcYYo9K5DwkE6jWsdwZtOHMJkBJ2TvZUEMy84CGvWKVu9ZzjdR8sx7xWkWReQk5X4axLukNT5SADt4q0IZ3HZ8FHGTOMv%2FDtuZW6tiWFHVqMPwaqDbs8M00cxabhQ5Sv232i4wYQslgGfAcEWh5Qw06t1O3iohzyiSv8z5DQs5S7xV3nvVuv5vlJj01EwUkXlGXca8Sk%2FRfa4vJiXwC95COkk7s3xT8oTuDTx%2BTAYyJtKOs55jCJhioKvN%2B1aqbzXhE0LP%2FcNC1eF2h%2F1TsX74zuPhPBkeJ9wrMXBTwiqLjbTCraeYnNNfwP9ILQKlCB8bWxlLflFab8epXjWTVYev433JHGEgY0F8TKAgaobNoD8J76QR%2FqtzOdtxiZB%2BhH7En9YN9h4c79v70e8O0RWH4YGFX9uRCNUAf8dIucCAnxdYoM9spqJIdlBVDZLS%2FAS%2BXZ28tUtXEMLwwe%2BRI8S3aDYKQti3r8dnwfmzWCnUhtlV3aS0EKKqbPX2osriqMaJ1elMrV9ndxs8Rrb4AoYAtqxi3Z3J%2B6lslnCQqslymDFMKDi98EGOqUBiedGZ3S774nq6QwI%2Bl80baU25HjOAUJuB7xmJFJ8t%2FyvyKkYm9o9Vc8M00%2Bl7lNRAYe3KeGKykGNT72kD9eOWWPd2q9FhWpQmOkk1LAEnlZlOSATzWpm18iwdMU0tckHPQXEnaMCn8W0cyvQPu2tQ0ojBMAVO3MGb69lCFEUoaCyf%2F9ts6WlJMaV%2BjYbX3YO9nknNPSwJFikHrSpizIXFFQhj2%2BO&X-Amz-Signature=52aef13f4959d7b4f91527921c6f61edd7a5c5a249706dbb35844835f81d88dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQS7V5C%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDYBHH1SuBaSIZeTgUNzXjQLNfgUPA7bg5SQ%2BKnHNUVwQIgA9c2mAO4A576cxk%2Fj%2B0AXSkICuxFSkjcnVkEUBrehrwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi6QE0cC504PCtC3SrcA04%2FIwUx6q8M2LabwrazsW59fDc3GUtnADb0watlUrodk8d91%2Bo%2Fe%2BZmMG7003wRTMrL3sMuiBs6na1HcYYo9K5DwkE6jWsdwZtOHMJkBJ2TvZUEMy84CGvWKVu9ZzjdR8sx7xWkWReQk5X4axLukNT5SADt4q0IZ3HZ8FHGTOMv%2FDtuZW6tiWFHVqMPwaqDbs8M00cxabhQ5Sv232i4wYQslgGfAcEWh5Qw06t1O3iohzyiSv8z5DQs5S7xV3nvVuv5vlJj01EwUkXlGXca8Sk%2FRfa4vJiXwC95COkk7s3xT8oTuDTx%2BTAYyJtKOs55jCJhioKvN%2B1aqbzXhE0LP%2FcNC1eF2h%2F1TsX74zuPhPBkeJ9wrMXBTwiqLjbTCraeYnNNfwP9ILQKlCB8bWxlLflFab8epXjWTVYev433JHGEgY0F8TKAgaobNoD8J76QR%2FqtzOdtxiZB%2BhH7En9YN9h4c79v70e8O0RWH4YGFX9uRCNUAf8dIucCAnxdYoM9spqJIdlBVDZLS%2FAS%2BXZ28tUtXEMLwwe%2BRI8S3aDYKQti3r8dnwfmzWCnUhtlV3aS0EKKqbPX2osriqMaJ1elMrV9ndxs8Rrb4AoYAtqxi3Z3J%2B6lslnCQqslymDFMKDi98EGOqUBiedGZ3S774nq6QwI%2Bl80baU25HjOAUJuB7xmJFJ8t%2FyvyKkYm9o9Vc8M00%2Bl7lNRAYe3KeGKykGNT72kD9eOWWPd2q9FhWpQmOkk1LAEnlZlOSATzWpm18iwdMU0tckHPQXEnaMCn8W0cyvQPu2tQ0ojBMAVO3MGb69lCFEUoaCyf%2F9ts6WlJMaV%2BjYbX3YO9nknNPSwJFikHrSpizIXFFQhj2%2BO&X-Amz-Signature=0f9e8e1f4f783cfa84ea1c78d71221bc52e075306b47ec9e8d1e214459949872&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQS7V5C%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDYBHH1SuBaSIZeTgUNzXjQLNfgUPA7bg5SQ%2BKnHNUVwQIgA9c2mAO4A576cxk%2Fj%2B0AXSkICuxFSkjcnVkEUBrehrwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi6QE0cC504PCtC3SrcA04%2FIwUx6q8M2LabwrazsW59fDc3GUtnADb0watlUrodk8d91%2Bo%2Fe%2BZmMG7003wRTMrL3sMuiBs6na1HcYYo9K5DwkE6jWsdwZtOHMJkBJ2TvZUEMy84CGvWKVu9ZzjdR8sx7xWkWReQk5X4axLukNT5SADt4q0IZ3HZ8FHGTOMv%2FDtuZW6tiWFHVqMPwaqDbs8M00cxabhQ5Sv232i4wYQslgGfAcEWh5Qw06t1O3iohzyiSv8z5DQs5S7xV3nvVuv5vlJj01EwUkXlGXca8Sk%2FRfa4vJiXwC95COkk7s3xT8oTuDTx%2BTAYyJtKOs55jCJhioKvN%2B1aqbzXhE0LP%2FcNC1eF2h%2F1TsX74zuPhPBkeJ9wrMXBTwiqLjbTCraeYnNNfwP9ILQKlCB8bWxlLflFab8epXjWTVYev433JHGEgY0F8TKAgaobNoD8J76QR%2FqtzOdtxiZB%2BhH7En9YN9h4c79v70e8O0RWH4YGFX9uRCNUAf8dIucCAnxdYoM9spqJIdlBVDZLS%2FAS%2BXZ28tUtXEMLwwe%2BRI8S3aDYKQti3r8dnwfmzWCnUhtlV3aS0EKKqbPX2osriqMaJ1elMrV9ndxs8Rrb4AoYAtqxi3Z3J%2B6lslnCQqslymDFMKDi98EGOqUBiedGZ3S774nq6QwI%2Bl80baU25HjOAUJuB7xmJFJ8t%2FyvyKkYm9o9Vc8M00%2Bl7lNRAYe3KeGKykGNT72kD9eOWWPd2q9FhWpQmOkk1LAEnlZlOSATzWpm18iwdMU0tckHPQXEnaMCn8W0cyvQPu2tQ0ojBMAVO3MGb69lCFEUoaCyf%2F9ts6WlJMaV%2BjYbX3YO9nknNPSwJFikHrSpizIXFFQhj2%2BO&X-Amz-Signature=d5d41351116de992159e43feba42c018cdf4cebbb47fbc0728fae3763d4514e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQS7V5C%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDYBHH1SuBaSIZeTgUNzXjQLNfgUPA7bg5SQ%2BKnHNUVwQIgA9c2mAO4A576cxk%2Fj%2B0AXSkICuxFSkjcnVkEUBrehrwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi6QE0cC504PCtC3SrcA04%2FIwUx6q8M2LabwrazsW59fDc3GUtnADb0watlUrodk8d91%2Bo%2Fe%2BZmMG7003wRTMrL3sMuiBs6na1HcYYo9K5DwkE6jWsdwZtOHMJkBJ2TvZUEMy84CGvWKVu9ZzjdR8sx7xWkWReQk5X4axLukNT5SADt4q0IZ3HZ8FHGTOMv%2FDtuZW6tiWFHVqMPwaqDbs8M00cxabhQ5Sv232i4wYQslgGfAcEWh5Qw06t1O3iohzyiSv8z5DQs5S7xV3nvVuv5vlJj01EwUkXlGXca8Sk%2FRfa4vJiXwC95COkk7s3xT8oTuDTx%2BTAYyJtKOs55jCJhioKvN%2B1aqbzXhE0LP%2FcNC1eF2h%2F1TsX74zuPhPBkeJ9wrMXBTwiqLjbTCraeYnNNfwP9ILQKlCB8bWxlLflFab8epXjWTVYev433JHGEgY0F8TKAgaobNoD8J76QR%2FqtzOdtxiZB%2BhH7En9YN9h4c79v70e8O0RWH4YGFX9uRCNUAf8dIucCAnxdYoM9spqJIdlBVDZLS%2FAS%2BXZ28tUtXEMLwwe%2BRI8S3aDYKQti3r8dnwfmzWCnUhtlV3aS0EKKqbPX2osriqMaJ1elMrV9ndxs8Rrb4AoYAtqxi3Z3J%2B6lslnCQqslymDFMKDi98EGOqUBiedGZ3S774nq6QwI%2Bl80baU25HjOAUJuB7xmJFJ8t%2FyvyKkYm9o9Vc8M00%2Bl7lNRAYe3KeGKykGNT72kD9eOWWPd2q9FhWpQmOkk1LAEnlZlOSATzWpm18iwdMU0tckHPQXEnaMCn8W0cyvQPu2tQ0ojBMAVO3MGb69lCFEUoaCyf%2F9ts6WlJMaV%2BjYbX3YO9nknNPSwJFikHrSpizIXFFQhj2%2BO&X-Amz-Signature=af0c606a588ac6e6a21ff37d63b274e3d99ab44d0a934ba58c57b0ae2e32dc8f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQS7V5C%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQDYBHH1SuBaSIZeTgUNzXjQLNfgUPA7bg5SQ%2BKnHNUVwQIgA9c2mAO4A576cxk%2Fj%2B0AXSkICuxFSkjcnVkEUBrehrwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMi6QE0cC504PCtC3SrcA04%2FIwUx6q8M2LabwrazsW59fDc3GUtnADb0watlUrodk8d91%2Bo%2Fe%2BZmMG7003wRTMrL3sMuiBs6na1HcYYo9K5DwkE6jWsdwZtOHMJkBJ2TvZUEMy84CGvWKVu9ZzjdR8sx7xWkWReQk5X4axLukNT5SADt4q0IZ3HZ8FHGTOMv%2FDtuZW6tiWFHVqMPwaqDbs8M00cxabhQ5Sv232i4wYQslgGfAcEWh5Qw06t1O3iohzyiSv8z5DQs5S7xV3nvVuv5vlJj01EwUkXlGXca8Sk%2FRfa4vJiXwC95COkk7s3xT8oTuDTx%2BTAYyJtKOs55jCJhioKvN%2B1aqbzXhE0LP%2FcNC1eF2h%2F1TsX74zuPhPBkeJ9wrMXBTwiqLjbTCraeYnNNfwP9ILQKlCB8bWxlLflFab8epXjWTVYev433JHGEgY0F8TKAgaobNoD8J76QR%2FqtzOdtxiZB%2BhH7En9YN9h4c79v70e8O0RWH4YGFX9uRCNUAf8dIucCAnxdYoM9spqJIdlBVDZLS%2FAS%2BXZ28tUtXEMLwwe%2BRI8S3aDYKQti3r8dnwfmzWCnUhtlV3aS0EKKqbPX2osriqMaJ1elMrV9ndxs8Rrb4AoYAtqxi3Z3J%2B6lslnCQqslymDFMKDi98EGOqUBiedGZ3S774nq6QwI%2Bl80baU25HjOAUJuB7xmJFJ8t%2FyvyKkYm9o9Vc8M00%2Bl7lNRAYe3KeGKykGNT72kD9eOWWPd2q9FhWpQmOkk1LAEnlZlOSATzWpm18iwdMU0tckHPQXEnaMCn8W0cyvQPu2tQ0ojBMAVO3MGb69lCFEUoaCyf%2F9ts6WlJMaV%2BjYbX3YO9nknNPSwJFikHrSpizIXFFQhj2%2BO&X-Amz-Signature=4d2c202d2b7acf3b570065e0c14aa611cabfbecf4746b97a50399c03ba4a6a91&X-Amz-SignedHeaders=host&x-id=GetObject)
