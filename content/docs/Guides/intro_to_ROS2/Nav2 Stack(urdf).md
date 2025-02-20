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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QA3XPVX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwAeGAniwLz5CrD2spG1iNFYYTuMT5gSaiwvUoPC87mAiEA5%2F5%2FfrbC1rCEQ4g8e05wM9FWFFw7cEj6AQXw9oR0cdgqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEvfS5uLKgAHBrrRSrcAwQ2A8QvUssBuA1Xk73x%2BAQl1wRKnxr3Pvi1YmqVb%2Bg8vXu04VSzVrR9sqGM46SPqFC6soiQCP4nRbkR1JlPwk8wOOjbQBwpsnOMckso34RmCq3eYEzLEsUbrYz4D80zhbeDFmxPP8lqhULpRaiWqJWv%2Ffi0et1%2Be8bYoS7GXaf5wK%2FRK4O%2FMfGtX%2F3qoPlA4v8QKxnT82Lfqj1e6YgL%2FbihSitgPI8KjJYp23VUtJmXaWx5E51X0ZHKeNXj6H1K0ueXykt46PUTdqWD5zVEqQ5pRK%2BXY3MPNIFBPSWGIotX7QZYH8JCOUF2FIyiHFawoGAQZtTOor9eiJQAYo4K4K2KnLtmUJQ19qaUY5NDIgXjwnDsndlgd11cfrlNcv%2BH4aLTYeJj4098XBogOOF7rhsbrVc0x7JBOyeiQjChXhM2OD881Mso3wqBpQqYgvB0NvzJxPfkRXRIX94tt0RZgMGyR40jfHinE4Crid6t2CqEqgvUZNX1iZ1xw1PmQPXl2pcXaqBnDTasMntAaNeFmTgujBdzXH%2B%2BMy3jq0zB0ur6XZHsylG6QSSnZZi9g0he6TdsCgcaGPsJSNNnRVgTOpRhz5Rz3vMttRHEIbpu0GZC5%2BnELbAlkeVyWTCqML743L0GOqUB9riDEOlgHPmVuBfIrSeliZYGdhbeXdpwRBQr0FRw2aXby1hTV0sC%2FN0BBLrVOkv0eJ5%2BkVEnejob%2FznNt5uorol0hk4XbhfNSP6fbN8h1V3KHh4zNUTaY11UmuaAf3I917PQ1bLHFDDW4dnd9nvedKxGJS0S1P2rPqw1cw3tKh8NB93l%2FogxeqwUh8woA5z5aHnWt9BlbjZtKh7a66%2FMp2Y%2B%2FsvU&X-Amz-Signature=fa69fe80c53ca9362d65541797ea649ed1ca2a5fe865a1758dc0b9f6536b97f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QA3XPVX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwAeGAniwLz5CrD2spG1iNFYYTuMT5gSaiwvUoPC87mAiEA5%2F5%2FfrbC1rCEQ4g8e05wM9FWFFw7cEj6AQXw9oR0cdgqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEvfS5uLKgAHBrrRSrcAwQ2A8QvUssBuA1Xk73x%2BAQl1wRKnxr3Pvi1YmqVb%2Bg8vXu04VSzVrR9sqGM46SPqFC6soiQCP4nRbkR1JlPwk8wOOjbQBwpsnOMckso34RmCq3eYEzLEsUbrYz4D80zhbeDFmxPP8lqhULpRaiWqJWv%2Ffi0et1%2Be8bYoS7GXaf5wK%2FRK4O%2FMfGtX%2F3qoPlA4v8QKxnT82Lfqj1e6YgL%2FbihSitgPI8KjJYp23VUtJmXaWx5E51X0ZHKeNXj6H1K0ueXykt46PUTdqWD5zVEqQ5pRK%2BXY3MPNIFBPSWGIotX7QZYH8JCOUF2FIyiHFawoGAQZtTOor9eiJQAYo4K4K2KnLtmUJQ19qaUY5NDIgXjwnDsndlgd11cfrlNcv%2BH4aLTYeJj4098XBogOOF7rhsbrVc0x7JBOyeiQjChXhM2OD881Mso3wqBpQqYgvB0NvzJxPfkRXRIX94tt0RZgMGyR40jfHinE4Crid6t2CqEqgvUZNX1iZ1xw1PmQPXl2pcXaqBnDTasMntAaNeFmTgujBdzXH%2B%2BMy3jq0zB0ur6XZHsylG6QSSnZZi9g0he6TdsCgcaGPsJSNNnRVgTOpRhz5Rz3vMttRHEIbpu0GZC5%2BnELbAlkeVyWTCqML743L0GOqUB9riDEOlgHPmVuBfIrSeliZYGdhbeXdpwRBQr0FRw2aXby1hTV0sC%2FN0BBLrVOkv0eJ5%2BkVEnejob%2FznNt5uorol0hk4XbhfNSP6fbN8h1V3KHh4zNUTaY11UmuaAf3I917PQ1bLHFDDW4dnd9nvedKxGJS0S1P2rPqw1cw3tKh8NB93l%2FogxeqwUh8woA5z5aHnWt9BlbjZtKh7a66%2FMp2Y%2B%2FsvU&X-Amz-Signature=0c30527b3b1d0c505e098211d6a446c0f29a3e0862d08a6c07b57bdb818169c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QA3XPVX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwAeGAniwLz5CrD2spG1iNFYYTuMT5gSaiwvUoPC87mAiEA5%2F5%2FfrbC1rCEQ4g8e05wM9FWFFw7cEj6AQXw9oR0cdgqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEvfS5uLKgAHBrrRSrcAwQ2A8QvUssBuA1Xk73x%2BAQl1wRKnxr3Pvi1YmqVb%2Bg8vXu04VSzVrR9sqGM46SPqFC6soiQCP4nRbkR1JlPwk8wOOjbQBwpsnOMckso34RmCq3eYEzLEsUbrYz4D80zhbeDFmxPP8lqhULpRaiWqJWv%2Ffi0et1%2Be8bYoS7GXaf5wK%2FRK4O%2FMfGtX%2F3qoPlA4v8QKxnT82Lfqj1e6YgL%2FbihSitgPI8KjJYp23VUtJmXaWx5E51X0ZHKeNXj6H1K0ueXykt46PUTdqWD5zVEqQ5pRK%2BXY3MPNIFBPSWGIotX7QZYH8JCOUF2FIyiHFawoGAQZtTOor9eiJQAYo4K4K2KnLtmUJQ19qaUY5NDIgXjwnDsndlgd11cfrlNcv%2BH4aLTYeJj4098XBogOOF7rhsbrVc0x7JBOyeiQjChXhM2OD881Mso3wqBpQqYgvB0NvzJxPfkRXRIX94tt0RZgMGyR40jfHinE4Crid6t2CqEqgvUZNX1iZ1xw1PmQPXl2pcXaqBnDTasMntAaNeFmTgujBdzXH%2B%2BMy3jq0zB0ur6XZHsylG6QSSnZZi9g0he6TdsCgcaGPsJSNNnRVgTOpRhz5Rz3vMttRHEIbpu0GZC5%2BnELbAlkeVyWTCqML743L0GOqUB9riDEOlgHPmVuBfIrSeliZYGdhbeXdpwRBQr0FRw2aXby1hTV0sC%2FN0BBLrVOkv0eJ5%2BkVEnejob%2FznNt5uorol0hk4XbhfNSP6fbN8h1V3KHh4zNUTaY11UmuaAf3I917PQ1bLHFDDW4dnd9nvedKxGJS0S1P2rPqw1cw3tKh8NB93l%2FogxeqwUh8woA5z5aHnWt9BlbjZtKh7a66%2FMp2Y%2B%2FsvU&X-Amz-Signature=07ba4adca02a04d565b2aaf51173ce77375835ec66d14d5a187d652a488d928d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QA3XPVX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwAeGAniwLz5CrD2spG1iNFYYTuMT5gSaiwvUoPC87mAiEA5%2F5%2FfrbC1rCEQ4g8e05wM9FWFFw7cEj6AQXw9oR0cdgqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEvfS5uLKgAHBrrRSrcAwQ2A8QvUssBuA1Xk73x%2BAQl1wRKnxr3Pvi1YmqVb%2Bg8vXu04VSzVrR9sqGM46SPqFC6soiQCP4nRbkR1JlPwk8wOOjbQBwpsnOMckso34RmCq3eYEzLEsUbrYz4D80zhbeDFmxPP8lqhULpRaiWqJWv%2Ffi0et1%2Be8bYoS7GXaf5wK%2FRK4O%2FMfGtX%2F3qoPlA4v8QKxnT82Lfqj1e6YgL%2FbihSitgPI8KjJYp23VUtJmXaWx5E51X0ZHKeNXj6H1K0ueXykt46PUTdqWD5zVEqQ5pRK%2BXY3MPNIFBPSWGIotX7QZYH8JCOUF2FIyiHFawoGAQZtTOor9eiJQAYo4K4K2KnLtmUJQ19qaUY5NDIgXjwnDsndlgd11cfrlNcv%2BH4aLTYeJj4098XBogOOF7rhsbrVc0x7JBOyeiQjChXhM2OD881Mso3wqBpQqYgvB0NvzJxPfkRXRIX94tt0RZgMGyR40jfHinE4Crid6t2CqEqgvUZNX1iZ1xw1PmQPXl2pcXaqBnDTasMntAaNeFmTgujBdzXH%2B%2BMy3jq0zB0ur6XZHsylG6QSSnZZi9g0he6TdsCgcaGPsJSNNnRVgTOpRhz5Rz3vMttRHEIbpu0GZC5%2BnELbAlkeVyWTCqML743L0GOqUB9riDEOlgHPmVuBfIrSeliZYGdhbeXdpwRBQr0FRw2aXby1hTV0sC%2FN0BBLrVOkv0eJ5%2BkVEnejob%2FznNt5uorol0hk4XbhfNSP6fbN8h1V3KHh4zNUTaY11UmuaAf3I917PQ1bLHFDDW4dnd9nvedKxGJS0S1P2rPqw1cw3tKh8NB93l%2FogxeqwUh8woA5z5aHnWt9BlbjZtKh7a66%2FMp2Y%2B%2FsvU&X-Amz-Signature=08fb8db1768ae79066f38aa2eb1f0167330dfa812d48a08c9e272245468ccdac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QA3XPVX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwAeGAniwLz5CrD2spG1iNFYYTuMT5gSaiwvUoPC87mAiEA5%2F5%2FfrbC1rCEQ4g8e05wM9FWFFw7cEj6AQXw9oR0cdgqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEvfS5uLKgAHBrrRSrcAwQ2A8QvUssBuA1Xk73x%2BAQl1wRKnxr3Pvi1YmqVb%2Bg8vXu04VSzVrR9sqGM46SPqFC6soiQCP4nRbkR1JlPwk8wOOjbQBwpsnOMckso34RmCq3eYEzLEsUbrYz4D80zhbeDFmxPP8lqhULpRaiWqJWv%2Ffi0et1%2Be8bYoS7GXaf5wK%2FRK4O%2FMfGtX%2F3qoPlA4v8QKxnT82Lfqj1e6YgL%2FbihSitgPI8KjJYp23VUtJmXaWx5E51X0ZHKeNXj6H1K0ueXykt46PUTdqWD5zVEqQ5pRK%2BXY3MPNIFBPSWGIotX7QZYH8JCOUF2FIyiHFawoGAQZtTOor9eiJQAYo4K4K2KnLtmUJQ19qaUY5NDIgXjwnDsndlgd11cfrlNcv%2BH4aLTYeJj4098XBogOOF7rhsbrVc0x7JBOyeiQjChXhM2OD881Mso3wqBpQqYgvB0NvzJxPfkRXRIX94tt0RZgMGyR40jfHinE4Crid6t2CqEqgvUZNX1iZ1xw1PmQPXl2pcXaqBnDTasMntAaNeFmTgujBdzXH%2B%2BMy3jq0zB0ur6XZHsylG6QSSnZZi9g0he6TdsCgcaGPsJSNNnRVgTOpRhz5Rz3vMttRHEIbpu0GZC5%2BnELbAlkeVyWTCqML743L0GOqUB9riDEOlgHPmVuBfIrSeliZYGdhbeXdpwRBQr0FRw2aXby1hTV0sC%2FN0BBLrVOkv0eJ5%2BkVEnejob%2FznNt5uorol0hk4XbhfNSP6fbN8h1V3KHh4zNUTaY11UmuaAf3I917PQ1bLHFDDW4dnd9nvedKxGJS0S1P2rPqw1cw3tKh8NB93l%2FogxeqwUh8woA5z5aHnWt9BlbjZtKh7a66%2FMp2Y%2B%2FsvU&X-Amz-Signature=44158e29c3049ef279aa6c4182820bd874b8776e11c4ffc846c2b0cfa7f2c401&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QA3XPVX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwAeGAniwLz5CrD2spG1iNFYYTuMT5gSaiwvUoPC87mAiEA5%2F5%2FfrbC1rCEQ4g8e05wM9FWFFw7cEj6AQXw9oR0cdgqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEvfS5uLKgAHBrrRSrcAwQ2A8QvUssBuA1Xk73x%2BAQl1wRKnxr3Pvi1YmqVb%2Bg8vXu04VSzVrR9sqGM46SPqFC6soiQCP4nRbkR1JlPwk8wOOjbQBwpsnOMckso34RmCq3eYEzLEsUbrYz4D80zhbeDFmxPP8lqhULpRaiWqJWv%2Ffi0et1%2Be8bYoS7GXaf5wK%2FRK4O%2FMfGtX%2F3qoPlA4v8QKxnT82Lfqj1e6YgL%2FbihSitgPI8KjJYp23VUtJmXaWx5E51X0ZHKeNXj6H1K0ueXykt46PUTdqWD5zVEqQ5pRK%2BXY3MPNIFBPSWGIotX7QZYH8JCOUF2FIyiHFawoGAQZtTOor9eiJQAYo4K4K2KnLtmUJQ19qaUY5NDIgXjwnDsndlgd11cfrlNcv%2BH4aLTYeJj4098XBogOOF7rhsbrVc0x7JBOyeiQjChXhM2OD881Mso3wqBpQqYgvB0NvzJxPfkRXRIX94tt0RZgMGyR40jfHinE4Crid6t2CqEqgvUZNX1iZ1xw1PmQPXl2pcXaqBnDTasMntAaNeFmTgujBdzXH%2B%2BMy3jq0zB0ur6XZHsylG6QSSnZZi9g0he6TdsCgcaGPsJSNNnRVgTOpRhz5Rz3vMttRHEIbpu0GZC5%2BnELbAlkeVyWTCqML743L0GOqUB9riDEOlgHPmVuBfIrSeliZYGdhbeXdpwRBQr0FRw2aXby1hTV0sC%2FN0BBLrVOkv0eJ5%2BkVEnejob%2FznNt5uorol0hk4XbhfNSP6fbN8h1V3KHh4zNUTaY11UmuaAf3I917PQ1bLHFDDW4dnd9nvedKxGJS0S1P2rPqw1cw3tKh8NB93l%2FogxeqwUh8woA5z5aHnWt9BlbjZtKh7a66%2FMp2Y%2B%2FsvU&X-Amz-Signature=f95a326fb9123d0b552f7931e2b5025c2523573af876f2c76e01b03ae33cdb02&X-Amz-SignedHeaders=host&x-id=GetObject)
