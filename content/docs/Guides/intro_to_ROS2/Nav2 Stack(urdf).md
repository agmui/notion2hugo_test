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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3246D4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIBwJ1A0DySZJqenRPpen6LCD5ZGijwCzTFF9dhILVDScAiBcfoMn070qQogOewTnZGb2mf87ey4%2BAun8T35Ls2mrkSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMtKpJaeaHdheht9CyKtwD9KOGp3eu7Gb5IaCAPPJxk0UJNPujcK1BheDaX4j70TIaQ3NX0A%2FqzboeV2s62CPzevZEIk8esjI%2BPI1MB5U8jN0LEgX%2FAg7FDRR%2F2xcq1aJdTWBdBI7G4R4sd1FSlvzXqNuxnliKABq4SL43aN3WmrvdvU8v2z%2BSzI3hc%2BUjtNWzgLa5R8xJAW0K0l%2FbIJOlsCPRGM%2Bpix2mKQ8fi7AO3mTy8DNJN0A6P3t7ZYlCYA8fNHj0QSTvbOU5FizzmAOi5Kz%2FgLNKwVY5cAP5gd0%2Bsnf7j72Xssg%2Bnp5G%2FgDvlG8%2BQjB0ec4eykVR9D2rEj5ucFkv1TYLv1AdiOt2f9aXNcmXb8BMhUw8070CyW7I33zYOKjJXQ%2FXJE5zYsdaalG2xWGkkyEy%2FAeqw20Rc2alf21F84bABVkojZ3O3tj9n6nCkZobwP4ffccIxIYCjGLyPDm4c%2F5xgJRCMLHPirN1r%2FZzvfqZLOiDF9qpqeSWlV975CWD9oyUP47%2FGh2Rotp5jXACeBUoH0rk8DgU71ZElR4v%2B83kpY0sfejSliYytvLi74D65kBLkcDgDD3g5t5LDb%2B89xCvr5bhyLAPI%2F1y3byr2fKsM2RR7c5iGzFPi3ZToTiFAC8bijH4kp0wq9KxwgY6pgGR66YvJY0NVqicRHLQjyTONMPUK7OgxPDFvlJlFZL%2BkJxX91eopQBMYj2Tm6dMRJyZ%2B8OqBS6a6Jj01XdqCMWr7UDGuXyRqjuRMZq1zVInVjGDfUFLFiyvx9yBH%2FaexvID47wvNbsLoFvQ9CS4wnuLek3KR9RytZ81hYf%2B4aC3M1E%2FdroRZlSR4ZzmQVs70raOhbCaUITHcQHO13RMwmxegnXAl%2F%2Bi&X-Amz-Signature=a972047aae6654fb4cab2de364b4c885788659b2c259a7c48285510e55927043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3246D4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIBwJ1A0DySZJqenRPpen6LCD5ZGijwCzTFF9dhILVDScAiBcfoMn070qQogOewTnZGb2mf87ey4%2BAun8T35Ls2mrkSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMtKpJaeaHdheht9CyKtwD9KOGp3eu7Gb5IaCAPPJxk0UJNPujcK1BheDaX4j70TIaQ3NX0A%2FqzboeV2s62CPzevZEIk8esjI%2BPI1MB5U8jN0LEgX%2FAg7FDRR%2F2xcq1aJdTWBdBI7G4R4sd1FSlvzXqNuxnliKABq4SL43aN3WmrvdvU8v2z%2BSzI3hc%2BUjtNWzgLa5R8xJAW0K0l%2FbIJOlsCPRGM%2Bpix2mKQ8fi7AO3mTy8DNJN0A6P3t7ZYlCYA8fNHj0QSTvbOU5FizzmAOi5Kz%2FgLNKwVY5cAP5gd0%2Bsnf7j72Xssg%2Bnp5G%2FgDvlG8%2BQjB0ec4eykVR9D2rEj5ucFkv1TYLv1AdiOt2f9aXNcmXb8BMhUw8070CyW7I33zYOKjJXQ%2FXJE5zYsdaalG2xWGkkyEy%2FAeqw20Rc2alf21F84bABVkojZ3O3tj9n6nCkZobwP4ffccIxIYCjGLyPDm4c%2F5xgJRCMLHPirN1r%2FZzvfqZLOiDF9qpqeSWlV975CWD9oyUP47%2FGh2Rotp5jXACeBUoH0rk8DgU71ZElR4v%2B83kpY0sfejSliYytvLi74D65kBLkcDgDD3g5t5LDb%2B89xCvr5bhyLAPI%2F1y3byr2fKsM2RR7c5iGzFPi3ZToTiFAC8bijH4kp0wq9KxwgY6pgGR66YvJY0NVqicRHLQjyTONMPUK7OgxPDFvlJlFZL%2BkJxX91eopQBMYj2Tm6dMRJyZ%2B8OqBS6a6Jj01XdqCMWr7UDGuXyRqjuRMZq1zVInVjGDfUFLFiyvx9yBH%2FaexvID47wvNbsLoFvQ9CS4wnuLek3KR9RytZ81hYf%2B4aC3M1E%2FdroRZlSR4ZzmQVs70raOhbCaUITHcQHO13RMwmxegnXAl%2F%2Bi&X-Amz-Signature=34c1fc56558b9a2354812fb6f34d44e8fbf549cdff2c763e0889eb40499f2605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3246D4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIBwJ1A0DySZJqenRPpen6LCD5ZGijwCzTFF9dhILVDScAiBcfoMn070qQogOewTnZGb2mf87ey4%2BAun8T35Ls2mrkSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMtKpJaeaHdheht9CyKtwD9KOGp3eu7Gb5IaCAPPJxk0UJNPujcK1BheDaX4j70TIaQ3NX0A%2FqzboeV2s62CPzevZEIk8esjI%2BPI1MB5U8jN0LEgX%2FAg7FDRR%2F2xcq1aJdTWBdBI7G4R4sd1FSlvzXqNuxnliKABq4SL43aN3WmrvdvU8v2z%2BSzI3hc%2BUjtNWzgLa5R8xJAW0K0l%2FbIJOlsCPRGM%2Bpix2mKQ8fi7AO3mTy8DNJN0A6P3t7ZYlCYA8fNHj0QSTvbOU5FizzmAOi5Kz%2FgLNKwVY5cAP5gd0%2Bsnf7j72Xssg%2Bnp5G%2FgDvlG8%2BQjB0ec4eykVR9D2rEj5ucFkv1TYLv1AdiOt2f9aXNcmXb8BMhUw8070CyW7I33zYOKjJXQ%2FXJE5zYsdaalG2xWGkkyEy%2FAeqw20Rc2alf21F84bABVkojZ3O3tj9n6nCkZobwP4ffccIxIYCjGLyPDm4c%2F5xgJRCMLHPirN1r%2FZzvfqZLOiDF9qpqeSWlV975CWD9oyUP47%2FGh2Rotp5jXACeBUoH0rk8DgU71ZElR4v%2B83kpY0sfejSliYytvLi74D65kBLkcDgDD3g5t5LDb%2B89xCvr5bhyLAPI%2F1y3byr2fKsM2RR7c5iGzFPi3ZToTiFAC8bijH4kp0wq9KxwgY6pgGR66YvJY0NVqicRHLQjyTONMPUK7OgxPDFvlJlFZL%2BkJxX91eopQBMYj2Tm6dMRJyZ%2B8OqBS6a6Jj01XdqCMWr7UDGuXyRqjuRMZq1zVInVjGDfUFLFiyvx9yBH%2FaexvID47wvNbsLoFvQ9CS4wnuLek3KR9RytZ81hYf%2B4aC3M1E%2FdroRZlSR4ZzmQVs70raOhbCaUITHcQHO13RMwmxegnXAl%2F%2Bi&X-Amz-Signature=234e52ea764867b89054dd956b4c608e70edc4885ba4ff4aab057c0a7a043519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3246D4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIBwJ1A0DySZJqenRPpen6LCD5ZGijwCzTFF9dhILVDScAiBcfoMn070qQogOewTnZGb2mf87ey4%2BAun8T35Ls2mrkSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMtKpJaeaHdheht9CyKtwD9KOGp3eu7Gb5IaCAPPJxk0UJNPujcK1BheDaX4j70TIaQ3NX0A%2FqzboeV2s62CPzevZEIk8esjI%2BPI1MB5U8jN0LEgX%2FAg7FDRR%2F2xcq1aJdTWBdBI7G4R4sd1FSlvzXqNuxnliKABq4SL43aN3WmrvdvU8v2z%2BSzI3hc%2BUjtNWzgLa5R8xJAW0K0l%2FbIJOlsCPRGM%2Bpix2mKQ8fi7AO3mTy8DNJN0A6P3t7ZYlCYA8fNHj0QSTvbOU5FizzmAOi5Kz%2FgLNKwVY5cAP5gd0%2Bsnf7j72Xssg%2Bnp5G%2FgDvlG8%2BQjB0ec4eykVR9D2rEj5ucFkv1TYLv1AdiOt2f9aXNcmXb8BMhUw8070CyW7I33zYOKjJXQ%2FXJE5zYsdaalG2xWGkkyEy%2FAeqw20Rc2alf21F84bABVkojZ3O3tj9n6nCkZobwP4ffccIxIYCjGLyPDm4c%2F5xgJRCMLHPirN1r%2FZzvfqZLOiDF9qpqeSWlV975CWD9oyUP47%2FGh2Rotp5jXACeBUoH0rk8DgU71ZElR4v%2B83kpY0sfejSliYytvLi74D65kBLkcDgDD3g5t5LDb%2B89xCvr5bhyLAPI%2F1y3byr2fKsM2RR7c5iGzFPi3ZToTiFAC8bijH4kp0wq9KxwgY6pgGR66YvJY0NVqicRHLQjyTONMPUK7OgxPDFvlJlFZL%2BkJxX91eopQBMYj2Tm6dMRJyZ%2B8OqBS6a6Jj01XdqCMWr7UDGuXyRqjuRMZq1zVInVjGDfUFLFiyvx9yBH%2FaexvID47wvNbsLoFvQ9CS4wnuLek3KR9RytZ81hYf%2B4aC3M1E%2FdroRZlSR4ZzmQVs70raOhbCaUITHcQHO13RMwmxegnXAl%2F%2Bi&X-Amz-Signature=55fb91d1e3b0c41f6b05780aed0e7adde5f3ee8c957b04c2461e444b6bf94d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3246D4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIBwJ1A0DySZJqenRPpen6LCD5ZGijwCzTFF9dhILVDScAiBcfoMn070qQogOewTnZGb2mf87ey4%2BAun8T35Ls2mrkSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMtKpJaeaHdheht9CyKtwD9KOGp3eu7Gb5IaCAPPJxk0UJNPujcK1BheDaX4j70TIaQ3NX0A%2FqzboeV2s62CPzevZEIk8esjI%2BPI1MB5U8jN0LEgX%2FAg7FDRR%2F2xcq1aJdTWBdBI7G4R4sd1FSlvzXqNuxnliKABq4SL43aN3WmrvdvU8v2z%2BSzI3hc%2BUjtNWzgLa5R8xJAW0K0l%2FbIJOlsCPRGM%2Bpix2mKQ8fi7AO3mTy8DNJN0A6P3t7ZYlCYA8fNHj0QSTvbOU5FizzmAOi5Kz%2FgLNKwVY5cAP5gd0%2Bsnf7j72Xssg%2Bnp5G%2FgDvlG8%2BQjB0ec4eykVR9D2rEj5ucFkv1TYLv1AdiOt2f9aXNcmXb8BMhUw8070CyW7I33zYOKjJXQ%2FXJE5zYsdaalG2xWGkkyEy%2FAeqw20Rc2alf21F84bABVkojZ3O3tj9n6nCkZobwP4ffccIxIYCjGLyPDm4c%2F5xgJRCMLHPirN1r%2FZzvfqZLOiDF9qpqeSWlV975CWD9oyUP47%2FGh2Rotp5jXACeBUoH0rk8DgU71ZElR4v%2B83kpY0sfejSliYytvLi74D65kBLkcDgDD3g5t5LDb%2B89xCvr5bhyLAPI%2F1y3byr2fKsM2RR7c5iGzFPi3ZToTiFAC8bijH4kp0wq9KxwgY6pgGR66YvJY0NVqicRHLQjyTONMPUK7OgxPDFvlJlFZL%2BkJxX91eopQBMYj2Tm6dMRJyZ%2B8OqBS6a6Jj01XdqCMWr7UDGuXyRqjuRMZq1zVInVjGDfUFLFiyvx9yBH%2FaexvID47wvNbsLoFvQ9CS4wnuLek3KR9RytZ81hYf%2B4aC3M1E%2FdroRZlSR4ZzmQVs70raOhbCaUITHcQHO13RMwmxegnXAl%2F%2Bi&X-Amz-Signature=cd2783382fbfdc03f540deefd09f42fa8dfd6361dc6cd9c3b91c94f11f721f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO3246D4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T190727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIBwJ1A0DySZJqenRPpen6LCD5ZGijwCzTFF9dhILVDScAiBcfoMn070qQogOewTnZGb2mf87ey4%2BAun8T35Ls2mrkSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMtKpJaeaHdheht9CyKtwD9KOGp3eu7Gb5IaCAPPJxk0UJNPujcK1BheDaX4j70TIaQ3NX0A%2FqzboeV2s62CPzevZEIk8esjI%2BPI1MB5U8jN0LEgX%2FAg7FDRR%2F2xcq1aJdTWBdBI7G4R4sd1FSlvzXqNuxnliKABq4SL43aN3WmrvdvU8v2z%2BSzI3hc%2BUjtNWzgLa5R8xJAW0K0l%2FbIJOlsCPRGM%2Bpix2mKQ8fi7AO3mTy8DNJN0A6P3t7ZYlCYA8fNHj0QSTvbOU5FizzmAOi5Kz%2FgLNKwVY5cAP5gd0%2Bsnf7j72Xssg%2Bnp5G%2FgDvlG8%2BQjB0ec4eykVR9D2rEj5ucFkv1TYLv1AdiOt2f9aXNcmXb8BMhUw8070CyW7I33zYOKjJXQ%2FXJE5zYsdaalG2xWGkkyEy%2FAeqw20Rc2alf21F84bABVkojZ3O3tj9n6nCkZobwP4ffccIxIYCjGLyPDm4c%2F5xgJRCMLHPirN1r%2FZzvfqZLOiDF9qpqeSWlV975CWD9oyUP47%2FGh2Rotp5jXACeBUoH0rk8DgU71ZElR4v%2B83kpY0sfejSliYytvLi74D65kBLkcDgDD3g5t5LDb%2B89xCvr5bhyLAPI%2F1y3byr2fKsM2RR7c5iGzFPi3ZToTiFAC8bijH4kp0wq9KxwgY6pgGR66YvJY0NVqicRHLQjyTONMPUK7OgxPDFvlJlFZL%2BkJxX91eopQBMYj2Tm6dMRJyZ%2B8OqBS6a6Jj01XdqCMWr7UDGuXyRqjuRMZq1zVInVjGDfUFLFiyvx9yBH%2FaexvID47wvNbsLoFvQ9CS4wnuLek3KR9RytZ81hYf%2B4aC3M1E%2FdroRZlSR4ZzmQVs70raOhbCaUITHcQHO13RMwmxegnXAl%2F%2Bi&X-Amz-Signature=b0d454b57509887efc7d012ed7fdae631d6ea344d397f78d755f2e84c306a9b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
