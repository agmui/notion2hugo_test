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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAWFKC3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3xYe0%2FAtTu37iGWSO9t1Cb4%2F8rknTbNC%2Bp9sFd160cAIhAMCvOuY2xbQjuhor2jLplHfmFDe0nNo%2BKoinxXNO9VDrKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMHLDf3ZHj7bkZCjQq3AMXEoVFfSqkNUP4u8QHAna32owc1Avvv2VQdhGM%2Fr7sJXFT7t%2BjZLnVbYlgthtuEWl6RdBM6Yh9uw99KVJfQ%2BO21oi%2FIRjCnDghl1PDFm8gf6B%2FCG7KLiERlKk5l1bX4jyRnELrW5e7zS2zRzaWShrf1QAmvWn2gD6OjmtWy0%2BCYhRYlATrsSt3doYGllk3MvxsNXxVp3Q0ptU9mdE8U6D3h0fJ09ZuLywSXRaTSzF4MjVujbSSpeEjkOXExPFJ9z8eCkDuy8DfCuiHRSGO%2BnHw93UFivkpKW%2Fm0Et3Kv9rY%2FT6bznvO4m1a8w7aKpTRE%2FUGQrI9ohsqInwFafalORU56f1IsnExzug9OjdYN5KjBHUZGXRvqVpQsbvOCuPB7ce3giZSEq%2FkDm3oT1V2vQrgQi7zGwAxhvRSt1MuIdqS6wmRq279E2GDIsZI6uQRl7pERWdiGHIO9fRZkRo%2FDcFKq84NnKv%2F9nipI%2FkzOVVSnCDNUN8m6CWwoS6vtENj02DfJaoKgxLOu50Sibm29IFTAVgLBZ0Xo9TspBk5m%2FEtJqas5uU6B1EBnngmI0EdpIevdEeg4KlpApXtQFomlcehI8nP13TQhTG%2F5a7t1qEWRtdmYR2tsQKzt3eOjC7x%2BW9BjqkASWtBFUq0u2hUZBccSVt3ePPk6IVZDEgGkBsO8Ob4kyrLNoOpxRKwvZkWkV%2FOZhHJdSK%2FN2edQNJzx7peEw04q75UxZlDKFG5fT0izMEq386Z0kK4Ke7iu348GNNwH%2FbXPa8olUmOawX1Ep4ae91M3wXrbhNEIpAKKjU%2BO%2FR8Eq88n6dKs9xFh0yQGf%2BU6GCIoh4fBooEddTFfogkXeopkm9nERm&X-Amz-Signature=0d9c2e132fcc471f3d033ad3476579361357fd32984620906ed63ca9e8124840&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAWFKC3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3xYe0%2FAtTu37iGWSO9t1Cb4%2F8rknTbNC%2Bp9sFd160cAIhAMCvOuY2xbQjuhor2jLplHfmFDe0nNo%2BKoinxXNO9VDrKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMHLDf3ZHj7bkZCjQq3AMXEoVFfSqkNUP4u8QHAna32owc1Avvv2VQdhGM%2Fr7sJXFT7t%2BjZLnVbYlgthtuEWl6RdBM6Yh9uw99KVJfQ%2BO21oi%2FIRjCnDghl1PDFm8gf6B%2FCG7KLiERlKk5l1bX4jyRnELrW5e7zS2zRzaWShrf1QAmvWn2gD6OjmtWy0%2BCYhRYlATrsSt3doYGllk3MvxsNXxVp3Q0ptU9mdE8U6D3h0fJ09ZuLywSXRaTSzF4MjVujbSSpeEjkOXExPFJ9z8eCkDuy8DfCuiHRSGO%2BnHw93UFivkpKW%2Fm0Et3Kv9rY%2FT6bznvO4m1a8w7aKpTRE%2FUGQrI9ohsqInwFafalORU56f1IsnExzug9OjdYN5KjBHUZGXRvqVpQsbvOCuPB7ce3giZSEq%2FkDm3oT1V2vQrgQi7zGwAxhvRSt1MuIdqS6wmRq279E2GDIsZI6uQRl7pERWdiGHIO9fRZkRo%2FDcFKq84NnKv%2F9nipI%2FkzOVVSnCDNUN8m6CWwoS6vtENj02DfJaoKgxLOu50Sibm29IFTAVgLBZ0Xo9TspBk5m%2FEtJqas5uU6B1EBnngmI0EdpIevdEeg4KlpApXtQFomlcehI8nP13TQhTG%2F5a7t1qEWRtdmYR2tsQKzt3eOjC7x%2BW9BjqkASWtBFUq0u2hUZBccSVt3ePPk6IVZDEgGkBsO8Ob4kyrLNoOpxRKwvZkWkV%2FOZhHJdSK%2FN2edQNJzx7peEw04q75UxZlDKFG5fT0izMEq386Z0kK4Ke7iu348GNNwH%2FbXPa8olUmOawX1Ep4ae91M3wXrbhNEIpAKKjU%2BO%2FR8Eq88n6dKs9xFh0yQGf%2BU6GCIoh4fBooEddTFfogkXeopkm9nERm&X-Amz-Signature=2990a9f09c97ce042f51865227cbacf685f2e7b6fbccad655ba1673b25f0e25a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAWFKC3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3xYe0%2FAtTu37iGWSO9t1Cb4%2F8rknTbNC%2Bp9sFd160cAIhAMCvOuY2xbQjuhor2jLplHfmFDe0nNo%2BKoinxXNO9VDrKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMHLDf3ZHj7bkZCjQq3AMXEoVFfSqkNUP4u8QHAna32owc1Avvv2VQdhGM%2Fr7sJXFT7t%2BjZLnVbYlgthtuEWl6RdBM6Yh9uw99KVJfQ%2BO21oi%2FIRjCnDghl1PDFm8gf6B%2FCG7KLiERlKk5l1bX4jyRnELrW5e7zS2zRzaWShrf1QAmvWn2gD6OjmtWy0%2BCYhRYlATrsSt3doYGllk3MvxsNXxVp3Q0ptU9mdE8U6D3h0fJ09ZuLywSXRaTSzF4MjVujbSSpeEjkOXExPFJ9z8eCkDuy8DfCuiHRSGO%2BnHw93UFivkpKW%2Fm0Et3Kv9rY%2FT6bznvO4m1a8w7aKpTRE%2FUGQrI9ohsqInwFafalORU56f1IsnExzug9OjdYN5KjBHUZGXRvqVpQsbvOCuPB7ce3giZSEq%2FkDm3oT1V2vQrgQi7zGwAxhvRSt1MuIdqS6wmRq279E2GDIsZI6uQRl7pERWdiGHIO9fRZkRo%2FDcFKq84NnKv%2F9nipI%2FkzOVVSnCDNUN8m6CWwoS6vtENj02DfJaoKgxLOu50Sibm29IFTAVgLBZ0Xo9TspBk5m%2FEtJqas5uU6B1EBnngmI0EdpIevdEeg4KlpApXtQFomlcehI8nP13TQhTG%2F5a7t1qEWRtdmYR2tsQKzt3eOjC7x%2BW9BjqkASWtBFUq0u2hUZBccSVt3ePPk6IVZDEgGkBsO8Ob4kyrLNoOpxRKwvZkWkV%2FOZhHJdSK%2FN2edQNJzx7peEw04q75UxZlDKFG5fT0izMEq386Z0kK4Ke7iu348GNNwH%2FbXPa8olUmOawX1Ep4ae91M3wXrbhNEIpAKKjU%2BO%2FR8Eq88n6dKs9xFh0yQGf%2BU6GCIoh4fBooEddTFfogkXeopkm9nERm&X-Amz-Signature=1d5fff23567ab006f3d086df1b898efa71260062b53f0ebcbcf824f2c5cbfdc4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAWFKC3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3xYe0%2FAtTu37iGWSO9t1Cb4%2F8rknTbNC%2Bp9sFd160cAIhAMCvOuY2xbQjuhor2jLplHfmFDe0nNo%2BKoinxXNO9VDrKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMHLDf3ZHj7bkZCjQq3AMXEoVFfSqkNUP4u8QHAna32owc1Avvv2VQdhGM%2Fr7sJXFT7t%2BjZLnVbYlgthtuEWl6RdBM6Yh9uw99KVJfQ%2BO21oi%2FIRjCnDghl1PDFm8gf6B%2FCG7KLiERlKk5l1bX4jyRnELrW5e7zS2zRzaWShrf1QAmvWn2gD6OjmtWy0%2BCYhRYlATrsSt3doYGllk3MvxsNXxVp3Q0ptU9mdE8U6D3h0fJ09ZuLywSXRaTSzF4MjVujbSSpeEjkOXExPFJ9z8eCkDuy8DfCuiHRSGO%2BnHw93UFivkpKW%2Fm0Et3Kv9rY%2FT6bznvO4m1a8w7aKpTRE%2FUGQrI9ohsqInwFafalORU56f1IsnExzug9OjdYN5KjBHUZGXRvqVpQsbvOCuPB7ce3giZSEq%2FkDm3oT1V2vQrgQi7zGwAxhvRSt1MuIdqS6wmRq279E2GDIsZI6uQRl7pERWdiGHIO9fRZkRo%2FDcFKq84NnKv%2F9nipI%2FkzOVVSnCDNUN8m6CWwoS6vtENj02DfJaoKgxLOu50Sibm29IFTAVgLBZ0Xo9TspBk5m%2FEtJqas5uU6B1EBnngmI0EdpIevdEeg4KlpApXtQFomlcehI8nP13TQhTG%2F5a7t1qEWRtdmYR2tsQKzt3eOjC7x%2BW9BjqkASWtBFUq0u2hUZBccSVt3ePPk6IVZDEgGkBsO8Ob4kyrLNoOpxRKwvZkWkV%2FOZhHJdSK%2FN2edQNJzx7peEw04q75UxZlDKFG5fT0izMEq386Z0kK4Ke7iu348GNNwH%2FbXPa8olUmOawX1Ep4ae91M3wXrbhNEIpAKKjU%2BO%2FR8Eq88n6dKs9xFh0yQGf%2BU6GCIoh4fBooEddTFfogkXeopkm9nERm&X-Amz-Signature=67383a7c4b9aeadff7639b11d5254e3dd0785964d2ef261be6032a94464d5b9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAWFKC3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3xYe0%2FAtTu37iGWSO9t1Cb4%2F8rknTbNC%2Bp9sFd160cAIhAMCvOuY2xbQjuhor2jLplHfmFDe0nNo%2BKoinxXNO9VDrKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMHLDf3ZHj7bkZCjQq3AMXEoVFfSqkNUP4u8QHAna32owc1Avvv2VQdhGM%2Fr7sJXFT7t%2BjZLnVbYlgthtuEWl6RdBM6Yh9uw99KVJfQ%2BO21oi%2FIRjCnDghl1PDFm8gf6B%2FCG7KLiERlKk5l1bX4jyRnELrW5e7zS2zRzaWShrf1QAmvWn2gD6OjmtWy0%2BCYhRYlATrsSt3doYGllk3MvxsNXxVp3Q0ptU9mdE8U6D3h0fJ09ZuLywSXRaTSzF4MjVujbSSpeEjkOXExPFJ9z8eCkDuy8DfCuiHRSGO%2BnHw93UFivkpKW%2Fm0Et3Kv9rY%2FT6bznvO4m1a8w7aKpTRE%2FUGQrI9ohsqInwFafalORU56f1IsnExzug9OjdYN5KjBHUZGXRvqVpQsbvOCuPB7ce3giZSEq%2FkDm3oT1V2vQrgQi7zGwAxhvRSt1MuIdqS6wmRq279E2GDIsZI6uQRl7pERWdiGHIO9fRZkRo%2FDcFKq84NnKv%2F9nipI%2FkzOVVSnCDNUN8m6CWwoS6vtENj02DfJaoKgxLOu50Sibm29IFTAVgLBZ0Xo9TspBk5m%2FEtJqas5uU6B1EBnngmI0EdpIevdEeg4KlpApXtQFomlcehI8nP13TQhTG%2F5a7t1qEWRtdmYR2tsQKzt3eOjC7x%2BW9BjqkASWtBFUq0u2hUZBccSVt3ePPk6IVZDEgGkBsO8Ob4kyrLNoOpxRKwvZkWkV%2FOZhHJdSK%2FN2edQNJzx7peEw04q75UxZlDKFG5fT0izMEq386Z0kK4Ke7iu348GNNwH%2FbXPa8olUmOawX1Ep4ae91M3wXrbhNEIpAKKjU%2BO%2FR8Eq88n6dKs9xFh0yQGf%2BU6GCIoh4fBooEddTFfogkXeopkm9nERm&X-Amz-Signature=014d0216e3af5f3a83433293d47d0f40499fce5d40b4511594d26c672705fb39&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAWFKC3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3xYe0%2FAtTu37iGWSO9t1Cb4%2F8rknTbNC%2Bp9sFd160cAIhAMCvOuY2xbQjuhor2jLplHfmFDe0nNo%2BKoinxXNO9VDrKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMHLDf3ZHj7bkZCjQq3AMXEoVFfSqkNUP4u8QHAna32owc1Avvv2VQdhGM%2Fr7sJXFT7t%2BjZLnVbYlgthtuEWl6RdBM6Yh9uw99KVJfQ%2BO21oi%2FIRjCnDghl1PDFm8gf6B%2FCG7KLiERlKk5l1bX4jyRnELrW5e7zS2zRzaWShrf1QAmvWn2gD6OjmtWy0%2BCYhRYlATrsSt3doYGllk3MvxsNXxVp3Q0ptU9mdE8U6D3h0fJ09ZuLywSXRaTSzF4MjVujbSSpeEjkOXExPFJ9z8eCkDuy8DfCuiHRSGO%2BnHw93UFivkpKW%2Fm0Et3Kv9rY%2FT6bznvO4m1a8w7aKpTRE%2FUGQrI9ohsqInwFafalORU56f1IsnExzug9OjdYN5KjBHUZGXRvqVpQsbvOCuPB7ce3giZSEq%2FkDm3oT1V2vQrgQi7zGwAxhvRSt1MuIdqS6wmRq279E2GDIsZI6uQRl7pERWdiGHIO9fRZkRo%2FDcFKq84NnKv%2F9nipI%2FkzOVVSnCDNUN8m6CWwoS6vtENj02DfJaoKgxLOu50Sibm29IFTAVgLBZ0Xo9TspBk5m%2FEtJqas5uU6B1EBnngmI0EdpIevdEeg4KlpApXtQFomlcehI8nP13TQhTG%2F5a7t1qEWRtdmYR2tsQKzt3eOjC7x%2BW9BjqkASWtBFUq0u2hUZBccSVt3ePPk6IVZDEgGkBsO8Ob4kyrLNoOpxRKwvZkWkV%2FOZhHJdSK%2FN2edQNJzx7peEw04q75UxZlDKFG5fT0izMEq386Z0kK4Ke7iu348GNNwH%2FbXPa8olUmOawX1Ep4ae91M3wXrbhNEIpAKKjU%2BO%2FR8Eq88n6dKs9xFh0yQGf%2BU6GCIoh4fBooEddTFfogkXeopkm9nERm&X-Amz-Signature=f03ea820607b3925e6b6a0b1fa679727fdcf37092e49334579b96b06b1de87e1&X-Amz-SignedHeaders=host&x-id=GetObject)
