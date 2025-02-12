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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NRJVP3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuMiuifgrIPX3b9XQri65LySDpKN2mqmLeYqdgleqeoAiAQ6yt0sNuLC4PU5VMucvttFFaeUJI1m%2BFPh9vrMdthVyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ8HSSfwR9l0CwkEtKtwDqMfagTDrwC5jBKNPEA%2BEYIaFvzo9Boii4VVoNUNIAwuWRZU8seNtwMkloc%2FqJ7E3r5RPUzlYHpHwJDXIeN8JuBrnd%2FjvIYyaoB%2FAFGpHDUTdwztd2uklnjw%2FxNukAj2rZvSpMbgF1MzQVrWP1DRGfo5AID8ZkaBbKpy2Ch6i3FIXhRxtyhaeRLe%2B1pqOBWGGg%2B7Di8RfxPr2o6Gb8GvGohUTv82yZelBIwq8ne7Fa1E9E8jn%2Flx1bnxNaV9FcLniUIq%2FL5AZ1Fy6nXNzXNPCy5%2BgT7sjv4B5Dq0CpgfGJGjxBrBr4JJtgnJWsI8qjmslyMKzSIR47a763i7oMEoLVSCbgi9s2ws2aN3dK4zTZc5t03yY8U06Fdgdi%2Fv77TXVUoC%2FKjs4BpoBWMevi3K7M7iMymnqfLxhM0izwOAfrcRmTMaY%2Ft35TZqws0xvRCMCvjRPAYhXBmxp7L7wJek4BZWOZ1Jt1UHKQwrckfGM%2BCc%2FY%2BQHoOI%2B3HWLIbri%2FBDce4rAEpjYvoTZ50f8AZUmcEeUeRvsak04BFtTo7Z5KXAZFG3MPt21VlLcJWMuWEXMvDNnRyils%2FAztbFeT5501MW78YYocToJB0F7CITdHP3EX0Nljq6SX38lC4kwi6qyvQY6pgEWnkBP7tzLjIRHDAeMb3QtSocQ95%2FYtBMLRJvqZm%2BqtRhB5o%2F7LhyzGQVjKlTQFVX0w4%2FV5MAosVsf0kXDmej7i7UTO6flZW%2BxTQkx5wpUvgAxewGzAbtdrO4%2F6W1mp9tmyIxkNBgvOcl7vJCNA0xZCwZIVl6%2BeiieiT3Gmt32bhLJ6nHS%2FdiJDRUOeoSCKXetj228WBWV%2BzGKA2btZhJ2APOK8cd1&X-Amz-Signature=7f9ea9e5b170807d010d909bac94325bd526103a108187e4a18e3a093f761fb0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NRJVP3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuMiuifgrIPX3b9XQri65LySDpKN2mqmLeYqdgleqeoAiAQ6yt0sNuLC4PU5VMucvttFFaeUJI1m%2BFPh9vrMdthVyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ8HSSfwR9l0CwkEtKtwDqMfagTDrwC5jBKNPEA%2BEYIaFvzo9Boii4VVoNUNIAwuWRZU8seNtwMkloc%2FqJ7E3r5RPUzlYHpHwJDXIeN8JuBrnd%2FjvIYyaoB%2FAFGpHDUTdwztd2uklnjw%2FxNukAj2rZvSpMbgF1MzQVrWP1DRGfo5AID8ZkaBbKpy2Ch6i3FIXhRxtyhaeRLe%2B1pqOBWGGg%2B7Di8RfxPr2o6Gb8GvGohUTv82yZelBIwq8ne7Fa1E9E8jn%2Flx1bnxNaV9FcLniUIq%2FL5AZ1Fy6nXNzXNPCy5%2BgT7sjv4B5Dq0CpgfGJGjxBrBr4JJtgnJWsI8qjmslyMKzSIR47a763i7oMEoLVSCbgi9s2ws2aN3dK4zTZc5t03yY8U06Fdgdi%2Fv77TXVUoC%2FKjs4BpoBWMevi3K7M7iMymnqfLxhM0izwOAfrcRmTMaY%2Ft35TZqws0xvRCMCvjRPAYhXBmxp7L7wJek4BZWOZ1Jt1UHKQwrckfGM%2BCc%2FY%2BQHoOI%2B3HWLIbri%2FBDce4rAEpjYvoTZ50f8AZUmcEeUeRvsak04BFtTo7Z5KXAZFG3MPt21VlLcJWMuWEXMvDNnRyils%2FAztbFeT5501MW78YYocToJB0F7CITdHP3EX0Nljq6SX38lC4kwi6qyvQY6pgEWnkBP7tzLjIRHDAeMb3QtSocQ95%2FYtBMLRJvqZm%2BqtRhB5o%2F7LhyzGQVjKlTQFVX0w4%2FV5MAosVsf0kXDmej7i7UTO6flZW%2BxTQkx5wpUvgAxewGzAbtdrO4%2F6W1mp9tmyIxkNBgvOcl7vJCNA0xZCwZIVl6%2BeiieiT3Gmt32bhLJ6nHS%2FdiJDRUOeoSCKXetj228WBWV%2BzGKA2btZhJ2APOK8cd1&X-Amz-Signature=ee9347a361465003522e3c87385fbb5710021f3bab4ce4b8c706f888e62becf4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NRJVP3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuMiuifgrIPX3b9XQri65LySDpKN2mqmLeYqdgleqeoAiAQ6yt0sNuLC4PU5VMucvttFFaeUJI1m%2BFPh9vrMdthVyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ8HSSfwR9l0CwkEtKtwDqMfagTDrwC5jBKNPEA%2BEYIaFvzo9Boii4VVoNUNIAwuWRZU8seNtwMkloc%2FqJ7E3r5RPUzlYHpHwJDXIeN8JuBrnd%2FjvIYyaoB%2FAFGpHDUTdwztd2uklnjw%2FxNukAj2rZvSpMbgF1MzQVrWP1DRGfo5AID8ZkaBbKpy2Ch6i3FIXhRxtyhaeRLe%2B1pqOBWGGg%2B7Di8RfxPr2o6Gb8GvGohUTv82yZelBIwq8ne7Fa1E9E8jn%2Flx1bnxNaV9FcLniUIq%2FL5AZ1Fy6nXNzXNPCy5%2BgT7sjv4B5Dq0CpgfGJGjxBrBr4JJtgnJWsI8qjmslyMKzSIR47a763i7oMEoLVSCbgi9s2ws2aN3dK4zTZc5t03yY8U06Fdgdi%2Fv77TXVUoC%2FKjs4BpoBWMevi3K7M7iMymnqfLxhM0izwOAfrcRmTMaY%2Ft35TZqws0xvRCMCvjRPAYhXBmxp7L7wJek4BZWOZ1Jt1UHKQwrckfGM%2BCc%2FY%2BQHoOI%2B3HWLIbri%2FBDce4rAEpjYvoTZ50f8AZUmcEeUeRvsak04BFtTo7Z5KXAZFG3MPt21VlLcJWMuWEXMvDNnRyils%2FAztbFeT5501MW78YYocToJB0F7CITdHP3EX0Nljq6SX38lC4kwi6qyvQY6pgEWnkBP7tzLjIRHDAeMb3QtSocQ95%2FYtBMLRJvqZm%2BqtRhB5o%2F7LhyzGQVjKlTQFVX0w4%2FV5MAosVsf0kXDmej7i7UTO6flZW%2BxTQkx5wpUvgAxewGzAbtdrO4%2F6W1mp9tmyIxkNBgvOcl7vJCNA0xZCwZIVl6%2BeiieiT3Gmt32bhLJ6nHS%2FdiJDRUOeoSCKXetj228WBWV%2BzGKA2btZhJ2APOK8cd1&X-Amz-Signature=cc1ba7dfb6e67a83f83621710f77446da539ffdf0c54f71c076e3ed0f97ea215&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NRJVP3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuMiuifgrIPX3b9XQri65LySDpKN2mqmLeYqdgleqeoAiAQ6yt0sNuLC4PU5VMucvttFFaeUJI1m%2BFPh9vrMdthVyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ8HSSfwR9l0CwkEtKtwDqMfagTDrwC5jBKNPEA%2BEYIaFvzo9Boii4VVoNUNIAwuWRZU8seNtwMkloc%2FqJ7E3r5RPUzlYHpHwJDXIeN8JuBrnd%2FjvIYyaoB%2FAFGpHDUTdwztd2uklnjw%2FxNukAj2rZvSpMbgF1MzQVrWP1DRGfo5AID8ZkaBbKpy2Ch6i3FIXhRxtyhaeRLe%2B1pqOBWGGg%2B7Di8RfxPr2o6Gb8GvGohUTv82yZelBIwq8ne7Fa1E9E8jn%2Flx1bnxNaV9FcLniUIq%2FL5AZ1Fy6nXNzXNPCy5%2BgT7sjv4B5Dq0CpgfGJGjxBrBr4JJtgnJWsI8qjmslyMKzSIR47a763i7oMEoLVSCbgi9s2ws2aN3dK4zTZc5t03yY8U06Fdgdi%2Fv77TXVUoC%2FKjs4BpoBWMevi3K7M7iMymnqfLxhM0izwOAfrcRmTMaY%2Ft35TZqws0xvRCMCvjRPAYhXBmxp7L7wJek4BZWOZ1Jt1UHKQwrckfGM%2BCc%2FY%2BQHoOI%2B3HWLIbri%2FBDce4rAEpjYvoTZ50f8AZUmcEeUeRvsak04BFtTo7Z5KXAZFG3MPt21VlLcJWMuWEXMvDNnRyils%2FAztbFeT5501MW78YYocToJB0F7CITdHP3EX0Nljq6SX38lC4kwi6qyvQY6pgEWnkBP7tzLjIRHDAeMb3QtSocQ95%2FYtBMLRJvqZm%2BqtRhB5o%2F7LhyzGQVjKlTQFVX0w4%2FV5MAosVsf0kXDmej7i7UTO6flZW%2BxTQkx5wpUvgAxewGzAbtdrO4%2F6W1mp9tmyIxkNBgvOcl7vJCNA0xZCwZIVl6%2BeiieiT3Gmt32bhLJ6nHS%2FdiJDRUOeoSCKXetj228WBWV%2BzGKA2btZhJ2APOK8cd1&X-Amz-Signature=bdae5a92709780a0019939ed05c098258b4bdfcc3fef00a1b501477912552f14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NRJVP3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuMiuifgrIPX3b9XQri65LySDpKN2mqmLeYqdgleqeoAiAQ6yt0sNuLC4PU5VMucvttFFaeUJI1m%2BFPh9vrMdthVyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ8HSSfwR9l0CwkEtKtwDqMfagTDrwC5jBKNPEA%2BEYIaFvzo9Boii4VVoNUNIAwuWRZU8seNtwMkloc%2FqJ7E3r5RPUzlYHpHwJDXIeN8JuBrnd%2FjvIYyaoB%2FAFGpHDUTdwztd2uklnjw%2FxNukAj2rZvSpMbgF1MzQVrWP1DRGfo5AID8ZkaBbKpy2Ch6i3FIXhRxtyhaeRLe%2B1pqOBWGGg%2B7Di8RfxPr2o6Gb8GvGohUTv82yZelBIwq8ne7Fa1E9E8jn%2Flx1bnxNaV9FcLniUIq%2FL5AZ1Fy6nXNzXNPCy5%2BgT7sjv4B5Dq0CpgfGJGjxBrBr4JJtgnJWsI8qjmslyMKzSIR47a763i7oMEoLVSCbgi9s2ws2aN3dK4zTZc5t03yY8U06Fdgdi%2Fv77TXVUoC%2FKjs4BpoBWMevi3K7M7iMymnqfLxhM0izwOAfrcRmTMaY%2Ft35TZqws0xvRCMCvjRPAYhXBmxp7L7wJek4BZWOZ1Jt1UHKQwrckfGM%2BCc%2FY%2BQHoOI%2B3HWLIbri%2FBDce4rAEpjYvoTZ50f8AZUmcEeUeRvsak04BFtTo7Z5KXAZFG3MPt21VlLcJWMuWEXMvDNnRyils%2FAztbFeT5501MW78YYocToJB0F7CITdHP3EX0Nljq6SX38lC4kwi6qyvQY6pgEWnkBP7tzLjIRHDAeMb3QtSocQ95%2FYtBMLRJvqZm%2BqtRhB5o%2F7LhyzGQVjKlTQFVX0w4%2FV5MAosVsf0kXDmej7i7UTO6flZW%2BxTQkx5wpUvgAxewGzAbtdrO4%2F6W1mp9tmyIxkNBgvOcl7vJCNA0xZCwZIVl6%2BeiieiT3Gmt32bhLJ6nHS%2FdiJDRUOeoSCKXetj228WBWV%2BzGKA2btZhJ2APOK8cd1&X-Amz-Signature=788c89550275c6fa5cf1ad38f90bf9eb02e79c8cae4d2defd95adad37fe76c43&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NRJVP3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuMiuifgrIPX3b9XQri65LySDpKN2mqmLeYqdgleqeoAiAQ6yt0sNuLC4PU5VMucvttFFaeUJI1m%2BFPh9vrMdthVyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ8HSSfwR9l0CwkEtKtwDqMfagTDrwC5jBKNPEA%2BEYIaFvzo9Boii4VVoNUNIAwuWRZU8seNtwMkloc%2FqJ7E3r5RPUzlYHpHwJDXIeN8JuBrnd%2FjvIYyaoB%2FAFGpHDUTdwztd2uklnjw%2FxNukAj2rZvSpMbgF1MzQVrWP1DRGfo5AID8ZkaBbKpy2Ch6i3FIXhRxtyhaeRLe%2B1pqOBWGGg%2B7Di8RfxPr2o6Gb8GvGohUTv82yZelBIwq8ne7Fa1E9E8jn%2Flx1bnxNaV9FcLniUIq%2FL5AZ1Fy6nXNzXNPCy5%2BgT7sjv4B5Dq0CpgfGJGjxBrBr4JJtgnJWsI8qjmslyMKzSIR47a763i7oMEoLVSCbgi9s2ws2aN3dK4zTZc5t03yY8U06Fdgdi%2Fv77TXVUoC%2FKjs4BpoBWMevi3K7M7iMymnqfLxhM0izwOAfrcRmTMaY%2Ft35TZqws0xvRCMCvjRPAYhXBmxp7L7wJek4BZWOZ1Jt1UHKQwrckfGM%2BCc%2FY%2BQHoOI%2B3HWLIbri%2FBDce4rAEpjYvoTZ50f8AZUmcEeUeRvsak04BFtTo7Z5KXAZFG3MPt21VlLcJWMuWEXMvDNnRyils%2FAztbFeT5501MW78YYocToJB0F7CITdHP3EX0Nljq6SX38lC4kwi6qyvQY6pgEWnkBP7tzLjIRHDAeMb3QtSocQ95%2FYtBMLRJvqZm%2BqtRhB5o%2F7LhyzGQVjKlTQFVX0w4%2FV5MAosVsf0kXDmej7i7UTO6flZW%2BxTQkx5wpUvgAxewGzAbtdrO4%2F6W1mp9tmyIxkNBgvOcl7vJCNA0xZCwZIVl6%2BeiieiT3Gmt32bhLJ6nHS%2FdiJDRUOeoSCKXetj228WBWV%2BzGKA2btZhJ2APOK8cd1&X-Amz-Signature=dc27995e1973eaf4151949b9cf71684d291605ddd19ea6df587f7fac6b5057b3&X-Amz-SignedHeaders=host&x-id=GetObject)
