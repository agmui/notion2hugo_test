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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYKXSL2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCraNwSm%2B8Whlq1C6MdqUIQTOQQNQU3y0umK1uySUNaOgIhAIdp2WmPu2odk2RqjRTy7IsfwmCaQHA8AGOlYn8dW%2FYeKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8Zf0TcqrK3ErlLbAq3APqcsnzQWRd%2FcnKJhQpxpGlnd8DdItEIuczJ8pzu%2FWLXG%2FpiAirqDKxFVMa0nYa3M9%2FgGiwiqSxRU7pTL9bjk5yIebREuAuCrhg%2Frs7%2Fu99cBYnJrW49lvCRyoVKqv470jlYQgJi6hyUGBjc0rDS8qbw1y385YCRkuJjZjrMkLZLq3xBNgeL04NIBNszXR%2FhPnj2Z3mmw6lepZbPmmfbbn5E7wXvthL%2BVPxceAa3VS98yXlylw%2F72pxgI1kM0yYfOCtgNs%2Bd%2FN45tLSOPUUdNWpWkGCFx%2Fmj0W8VCvqY8eDiaOKL0mWoU9QVAhDqa2i4TwyUlyhIegN8FISMQfFQQj8VfOSdRF%2Bmgm4L5z0vbteaq2%2Beif6rO0RutSk1r1sfXiNTAR2S7cfHQX0rz0w9zKkcWmRIQ4sOV8rA6cr%2B1LDdmrIHSKyC0VeOya62J%2FIq8gBdu7wbfdtUq9lrmpMGy3hlk0fx%2Bz1lXj9U3B7IULpJWHTxeC0yETOQEP3GSN5NnPX4Tv7elsY9Y7ZRUbBfWxxabsU3uXqkBYXbzBafHcDyJzLgEKtBSQTjsrZApZpH88tW0iMQw54QKtK2U6z0QPyn7GB1I5mw7aj11ar3It3%2BaOJK6Coc2S3nv6QljCU%2F%2BTBBjqkAWeNJPal7SV2fQN0quvr8R0g0r9a1yucq4j1utiuHkJUxq18qCo8tqN6cszFwVRFqJ%2FG%2F9wWuVCisntT1GmrsXVY%2B1kWHranL2CaZaastmNxu4JOzi%2FoHs8zPoE4ay8H4EVpi0ahUcry3jP2Z5fO8xu%2FpgbEMa1O9cmYRSWJo%2FEXuQOk89BRQYhfcjhR1IDAZgqL4iF190FRBS8nYYQ83Mo6zFhK&X-Amz-Signature=01c23c58f229a6b67ae34e290b838e7862ca041acb4f6b43943dc715e9c745c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYKXSL2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCraNwSm%2B8Whlq1C6MdqUIQTOQQNQU3y0umK1uySUNaOgIhAIdp2WmPu2odk2RqjRTy7IsfwmCaQHA8AGOlYn8dW%2FYeKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8Zf0TcqrK3ErlLbAq3APqcsnzQWRd%2FcnKJhQpxpGlnd8DdItEIuczJ8pzu%2FWLXG%2FpiAirqDKxFVMa0nYa3M9%2FgGiwiqSxRU7pTL9bjk5yIebREuAuCrhg%2Frs7%2Fu99cBYnJrW49lvCRyoVKqv470jlYQgJi6hyUGBjc0rDS8qbw1y385YCRkuJjZjrMkLZLq3xBNgeL04NIBNszXR%2FhPnj2Z3mmw6lepZbPmmfbbn5E7wXvthL%2BVPxceAa3VS98yXlylw%2F72pxgI1kM0yYfOCtgNs%2Bd%2FN45tLSOPUUdNWpWkGCFx%2Fmj0W8VCvqY8eDiaOKL0mWoU9QVAhDqa2i4TwyUlyhIegN8FISMQfFQQj8VfOSdRF%2Bmgm4L5z0vbteaq2%2Beif6rO0RutSk1r1sfXiNTAR2S7cfHQX0rz0w9zKkcWmRIQ4sOV8rA6cr%2B1LDdmrIHSKyC0VeOya62J%2FIq8gBdu7wbfdtUq9lrmpMGy3hlk0fx%2Bz1lXj9U3B7IULpJWHTxeC0yETOQEP3GSN5NnPX4Tv7elsY9Y7ZRUbBfWxxabsU3uXqkBYXbzBafHcDyJzLgEKtBSQTjsrZApZpH88tW0iMQw54QKtK2U6z0QPyn7GB1I5mw7aj11ar3It3%2BaOJK6Coc2S3nv6QljCU%2F%2BTBBjqkAWeNJPal7SV2fQN0quvr8R0g0r9a1yucq4j1utiuHkJUxq18qCo8tqN6cszFwVRFqJ%2FG%2F9wWuVCisntT1GmrsXVY%2B1kWHranL2CaZaastmNxu4JOzi%2FoHs8zPoE4ay8H4EVpi0ahUcry3jP2Z5fO8xu%2FpgbEMa1O9cmYRSWJo%2FEXuQOk89BRQYhfcjhR1IDAZgqL4iF190FRBS8nYYQ83Mo6zFhK&X-Amz-Signature=248f611b5f3c725865a9186af80f787f60b4909349cf816613ce6e2b8e56da23&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYKXSL2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCraNwSm%2B8Whlq1C6MdqUIQTOQQNQU3y0umK1uySUNaOgIhAIdp2WmPu2odk2RqjRTy7IsfwmCaQHA8AGOlYn8dW%2FYeKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8Zf0TcqrK3ErlLbAq3APqcsnzQWRd%2FcnKJhQpxpGlnd8DdItEIuczJ8pzu%2FWLXG%2FpiAirqDKxFVMa0nYa3M9%2FgGiwiqSxRU7pTL9bjk5yIebREuAuCrhg%2Frs7%2Fu99cBYnJrW49lvCRyoVKqv470jlYQgJi6hyUGBjc0rDS8qbw1y385YCRkuJjZjrMkLZLq3xBNgeL04NIBNszXR%2FhPnj2Z3mmw6lepZbPmmfbbn5E7wXvthL%2BVPxceAa3VS98yXlylw%2F72pxgI1kM0yYfOCtgNs%2Bd%2FN45tLSOPUUdNWpWkGCFx%2Fmj0W8VCvqY8eDiaOKL0mWoU9QVAhDqa2i4TwyUlyhIegN8FISMQfFQQj8VfOSdRF%2Bmgm4L5z0vbteaq2%2Beif6rO0RutSk1r1sfXiNTAR2S7cfHQX0rz0w9zKkcWmRIQ4sOV8rA6cr%2B1LDdmrIHSKyC0VeOya62J%2FIq8gBdu7wbfdtUq9lrmpMGy3hlk0fx%2Bz1lXj9U3B7IULpJWHTxeC0yETOQEP3GSN5NnPX4Tv7elsY9Y7ZRUbBfWxxabsU3uXqkBYXbzBafHcDyJzLgEKtBSQTjsrZApZpH88tW0iMQw54QKtK2U6z0QPyn7GB1I5mw7aj11ar3It3%2BaOJK6Coc2S3nv6QljCU%2F%2BTBBjqkAWeNJPal7SV2fQN0quvr8R0g0r9a1yucq4j1utiuHkJUxq18qCo8tqN6cszFwVRFqJ%2FG%2F9wWuVCisntT1GmrsXVY%2B1kWHranL2CaZaastmNxu4JOzi%2FoHs8zPoE4ay8H4EVpi0ahUcry3jP2Z5fO8xu%2FpgbEMa1O9cmYRSWJo%2FEXuQOk89BRQYhfcjhR1IDAZgqL4iF190FRBS8nYYQ83Mo6zFhK&X-Amz-Signature=02afd0eaaa28728e4de4343dad4b9c639d5b1fc6de0d0fd607cb591605693266&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYKXSL2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCraNwSm%2B8Whlq1C6MdqUIQTOQQNQU3y0umK1uySUNaOgIhAIdp2WmPu2odk2RqjRTy7IsfwmCaQHA8AGOlYn8dW%2FYeKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8Zf0TcqrK3ErlLbAq3APqcsnzQWRd%2FcnKJhQpxpGlnd8DdItEIuczJ8pzu%2FWLXG%2FpiAirqDKxFVMa0nYa3M9%2FgGiwiqSxRU7pTL9bjk5yIebREuAuCrhg%2Frs7%2Fu99cBYnJrW49lvCRyoVKqv470jlYQgJi6hyUGBjc0rDS8qbw1y385YCRkuJjZjrMkLZLq3xBNgeL04NIBNszXR%2FhPnj2Z3mmw6lepZbPmmfbbn5E7wXvthL%2BVPxceAa3VS98yXlylw%2F72pxgI1kM0yYfOCtgNs%2Bd%2FN45tLSOPUUdNWpWkGCFx%2Fmj0W8VCvqY8eDiaOKL0mWoU9QVAhDqa2i4TwyUlyhIegN8FISMQfFQQj8VfOSdRF%2Bmgm4L5z0vbteaq2%2Beif6rO0RutSk1r1sfXiNTAR2S7cfHQX0rz0w9zKkcWmRIQ4sOV8rA6cr%2B1LDdmrIHSKyC0VeOya62J%2FIq8gBdu7wbfdtUq9lrmpMGy3hlk0fx%2Bz1lXj9U3B7IULpJWHTxeC0yETOQEP3GSN5NnPX4Tv7elsY9Y7ZRUbBfWxxabsU3uXqkBYXbzBafHcDyJzLgEKtBSQTjsrZApZpH88tW0iMQw54QKtK2U6z0QPyn7GB1I5mw7aj11ar3It3%2BaOJK6Coc2S3nv6QljCU%2F%2BTBBjqkAWeNJPal7SV2fQN0quvr8R0g0r9a1yucq4j1utiuHkJUxq18qCo8tqN6cszFwVRFqJ%2FG%2F9wWuVCisntT1GmrsXVY%2B1kWHranL2CaZaastmNxu4JOzi%2FoHs8zPoE4ay8H4EVpi0ahUcry3jP2Z5fO8xu%2FpgbEMa1O9cmYRSWJo%2FEXuQOk89BRQYhfcjhR1IDAZgqL4iF190FRBS8nYYQ83Mo6zFhK&X-Amz-Signature=ba4cf96b3beb99f55101e91459a3d2e3b07d7a94747ab1cfd24f2aac89ac7501&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYKXSL2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCraNwSm%2B8Whlq1C6MdqUIQTOQQNQU3y0umK1uySUNaOgIhAIdp2WmPu2odk2RqjRTy7IsfwmCaQHA8AGOlYn8dW%2FYeKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8Zf0TcqrK3ErlLbAq3APqcsnzQWRd%2FcnKJhQpxpGlnd8DdItEIuczJ8pzu%2FWLXG%2FpiAirqDKxFVMa0nYa3M9%2FgGiwiqSxRU7pTL9bjk5yIebREuAuCrhg%2Frs7%2Fu99cBYnJrW49lvCRyoVKqv470jlYQgJi6hyUGBjc0rDS8qbw1y385YCRkuJjZjrMkLZLq3xBNgeL04NIBNszXR%2FhPnj2Z3mmw6lepZbPmmfbbn5E7wXvthL%2BVPxceAa3VS98yXlylw%2F72pxgI1kM0yYfOCtgNs%2Bd%2FN45tLSOPUUdNWpWkGCFx%2Fmj0W8VCvqY8eDiaOKL0mWoU9QVAhDqa2i4TwyUlyhIegN8FISMQfFQQj8VfOSdRF%2Bmgm4L5z0vbteaq2%2Beif6rO0RutSk1r1sfXiNTAR2S7cfHQX0rz0w9zKkcWmRIQ4sOV8rA6cr%2B1LDdmrIHSKyC0VeOya62J%2FIq8gBdu7wbfdtUq9lrmpMGy3hlk0fx%2Bz1lXj9U3B7IULpJWHTxeC0yETOQEP3GSN5NnPX4Tv7elsY9Y7ZRUbBfWxxabsU3uXqkBYXbzBafHcDyJzLgEKtBSQTjsrZApZpH88tW0iMQw54QKtK2U6z0QPyn7GB1I5mw7aj11ar3It3%2BaOJK6Coc2S3nv6QljCU%2F%2BTBBjqkAWeNJPal7SV2fQN0quvr8R0g0r9a1yucq4j1utiuHkJUxq18qCo8tqN6cszFwVRFqJ%2FG%2F9wWuVCisntT1GmrsXVY%2B1kWHranL2CaZaastmNxu4JOzi%2FoHs8zPoE4ay8H4EVpi0ahUcry3jP2Z5fO8xu%2FpgbEMa1O9cmYRSWJo%2FEXuQOk89BRQYhfcjhR1IDAZgqL4iF190FRBS8nYYQ83Mo6zFhK&X-Amz-Signature=0b83d9bca80513fcb8869f23d1025ffdfdd2aeaeb1772f4848273ad98e24e4d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYKXSL2%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T061312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCraNwSm%2B8Whlq1C6MdqUIQTOQQNQU3y0umK1uySUNaOgIhAIdp2WmPu2odk2RqjRTy7IsfwmCaQHA8AGOlYn8dW%2FYeKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8Zf0TcqrK3ErlLbAq3APqcsnzQWRd%2FcnKJhQpxpGlnd8DdItEIuczJ8pzu%2FWLXG%2FpiAirqDKxFVMa0nYa3M9%2FgGiwiqSxRU7pTL9bjk5yIebREuAuCrhg%2Frs7%2Fu99cBYnJrW49lvCRyoVKqv470jlYQgJi6hyUGBjc0rDS8qbw1y385YCRkuJjZjrMkLZLq3xBNgeL04NIBNszXR%2FhPnj2Z3mmw6lepZbPmmfbbn5E7wXvthL%2BVPxceAa3VS98yXlylw%2F72pxgI1kM0yYfOCtgNs%2Bd%2FN45tLSOPUUdNWpWkGCFx%2Fmj0W8VCvqY8eDiaOKL0mWoU9QVAhDqa2i4TwyUlyhIegN8FISMQfFQQj8VfOSdRF%2Bmgm4L5z0vbteaq2%2Beif6rO0RutSk1r1sfXiNTAR2S7cfHQX0rz0w9zKkcWmRIQ4sOV8rA6cr%2B1LDdmrIHSKyC0VeOya62J%2FIq8gBdu7wbfdtUq9lrmpMGy3hlk0fx%2Bz1lXj9U3B7IULpJWHTxeC0yETOQEP3GSN5NnPX4Tv7elsY9Y7ZRUbBfWxxabsU3uXqkBYXbzBafHcDyJzLgEKtBSQTjsrZApZpH88tW0iMQw54QKtK2U6z0QPyn7GB1I5mw7aj11ar3It3%2BaOJK6Coc2S3nv6QljCU%2F%2BTBBjqkAWeNJPal7SV2fQN0quvr8R0g0r9a1yucq4j1utiuHkJUxq18qCo8tqN6cszFwVRFqJ%2FG%2F9wWuVCisntT1GmrsXVY%2B1kWHranL2CaZaastmNxu4JOzi%2FoHs8zPoE4ay8H4EVpi0ahUcry3jP2Z5fO8xu%2FpgbEMa1O9cmYRSWJo%2FEXuQOk89BRQYhfcjhR1IDAZgqL4iF190FRBS8nYYQ83Mo6zFhK&X-Amz-Signature=2811462cb46bfa8a46f3363a76b0adf9b52f71eaaf43da1307ece4a19ed697b8&X-Amz-SignedHeaders=host&x-id=GetObject)
