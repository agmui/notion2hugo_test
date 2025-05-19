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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNBBRHN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYKqVQnc8MbYoCl2xUJNdPH1mElbJAB0ATjm9uBOkrPwIhAMVs3YDwgCbU4cn2QF%2FI0bRb2qwfxPURDaF9h8gIOI%2B1KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyar7nwnSAEw4m5pP0q3AOFrtPQ0PTMaTOd7JjncivhijXIGrbA3emF7vK0l5%2FMxwMduyON%2FtiB2EHjhGQ8fl6vL4YKx%2BbTwOdUT4npcJLedJFU6ObpmwkWsNg2zpBOAOo5ELDYlS4oLpbV9AIhv46tnqrK648AKViLEAK56mUul9YK0wCYJAm%2FDiM2DFdkrtRDnoD1qVL84XJcqzXJR%2BqmSdt2a12CcP6tgrojbQ1gE%2B59cgindGLqCSEYDuqtt%2BuksCkSynC0pI0HYHf%2FWTrZzZSxb0gCMAZtQOi36GchZVUuShLiJvhqNxPqsRkz8dm1V95oR4B236VuXotgMfBjrf0o0bSqOD0rEMTvRiKscCGOAjyfdqAp4qu6xo8IV0R1S0dwO0zlUA65Lb2BWMaMkN2LeUCLfxTUhs%2FT5MWUlUqq%2By7HaVFigBeR%2FmIjsSGABcUja1qUCUh5Pc5%2BK4spP6NmjhWA93EHXWM6XDOSn%2B9Y3bTg7oxqahnBXPkpfoVPB5YCzUEP%2BZcZnOgeaXz%2B9QKuX5TrKV3lONg8G69Y9wIS5WRDifx7%2BoirHIWElUNl79ADAxbB5WahVDlrOxSPfhxCaUgEM6X119lVY6VgTOrgGscOJ8jNkyaUOXFAMzpnR0aq3rSU1ZbcVDCqx67BBjqkAaphceHJz2OYqupMbqQHEVMP6qvlw4VQP%2Bv%2BSnH%2FocOYKGyaEzG2R9efNkpc3u9JwQk9QBx7YTOYsAHmmNxHVsMcBJSI9CeA8YK0RrGblsmS587LkpF8Mfhs6EzFkdN%2B9srqII%2BM9O5E%2BTd3%2FxHTZ4bpz3w7g3%2BDapkFteqpzf6W40ZsilatpARyf%2BgWENQjAXL81o2LEfHOIpJ6Ge2Zuercekbn&X-Amz-Signature=bff2cdc53c05f801457ae7c1995e76c5a0cda30e915b0f9ea52e37721d708d5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNBBRHN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYKqVQnc8MbYoCl2xUJNdPH1mElbJAB0ATjm9uBOkrPwIhAMVs3YDwgCbU4cn2QF%2FI0bRb2qwfxPURDaF9h8gIOI%2B1KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyar7nwnSAEw4m5pP0q3AOFrtPQ0PTMaTOd7JjncivhijXIGrbA3emF7vK0l5%2FMxwMduyON%2FtiB2EHjhGQ8fl6vL4YKx%2BbTwOdUT4npcJLedJFU6ObpmwkWsNg2zpBOAOo5ELDYlS4oLpbV9AIhv46tnqrK648AKViLEAK56mUul9YK0wCYJAm%2FDiM2DFdkrtRDnoD1qVL84XJcqzXJR%2BqmSdt2a12CcP6tgrojbQ1gE%2B59cgindGLqCSEYDuqtt%2BuksCkSynC0pI0HYHf%2FWTrZzZSxb0gCMAZtQOi36GchZVUuShLiJvhqNxPqsRkz8dm1V95oR4B236VuXotgMfBjrf0o0bSqOD0rEMTvRiKscCGOAjyfdqAp4qu6xo8IV0R1S0dwO0zlUA65Lb2BWMaMkN2LeUCLfxTUhs%2FT5MWUlUqq%2By7HaVFigBeR%2FmIjsSGABcUja1qUCUh5Pc5%2BK4spP6NmjhWA93EHXWM6XDOSn%2B9Y3bTg7oxqahnBXPkpfoVPB5YCzUEP%2BZcZnOgeaXz%2B9QKuX5TrKV3lONg8G69Y9wIS5WRDifx7%2BoirHIWElUNl79ADAxbB5WahVDlrOxSPfhxCaUgEM6X119lVY6VgTOrgGscOJ8jNkyaUOXFAMzpnR0aq3rSU1ZbcVDCqx67BBjqkAaphceHJz2OYqupMbqQHEVMP6qvlw4VQP%2Bv%2BSnH%2FocOYKGyaEzG2R9efNkpc3u9JwQk9QBx7YTOYsAHmmNxHVsMcBJSI9CeA8YK0RrGblsmS587LkpF8Mfhs6EzFkdN%2B9srqII%2BM9O5E%2BTd3%2FxHTZ4bpz3w7g3%2BDapkFteqpzf6W40ZsilatpARyf%2BgWENQjAXL81o2LEfHOIpJ6Ge2Zuercekbn&X-Amz-Signature=78161869f45f534c7708e9e3fdb504557230507db575f0c84076c4becc0720ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNBBRHN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYKqVQnc8MbYoCl2xUJNdPH1mElbJAB0ATjm9uBOkrPwIhAMVs3YDwgCbU4cn2QF%2FI0bRb2qwfxPURDaF9h8gIOI%2B1KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyar7nwnSAEw4m5pP0q3AOFrtPQ0PTMaTOd7JjncivhijXIGrbA3emF7vK0l5%2FMxwMduyON%2FtiB2EHjhGQ8fl6vL4YKx%2BbTwOdUT4npcJLedJFU6ObpmwkWsNg2zpBOAOo5ELDYlS4oLpbV9AIhv46tnqrK648AKViLEAK56mUul9YK0wCYJAm%2FDiM2DFdkrtRDnoD1qVL84XJcqzXJR%2BqmSdt2a12CcP6tgrojbQ1gE%2B59cgindGLqCSEYDuqtt%2BuksCkSynC0pI0HYHf%2FWTrZzZSxb0gCMAZtQOi36GchZVUuShLiJvhqNxPqsRkz8dm1V95oR4B236VuXotgMfBjrf0o0bSqOD0rEMTvRiKscCGOAjyfdqAp4qu6xo8IV0R1S0dwO0zlUA65Lb2BWMaMkN2LeUCLfxTUhs%2FT5MWUlUqq%2By7HaVFigBeR%2FmIjsSGABcUja1qUCUh5Pc5%2BK4spP6NmjhWA93EHXWM6XDOSn%2B9Y3bTg7oxqahnBXPkpfoVPB5YCzUEP%2BZcZnOgeaXz%2B9QKuX5TrKV3lONg8G69Y9wIS5WRDifx7%2BoirHIWElUNl79ADAxbB5WahVDlrOxSPfhxCaUgEM6X119lVY6VgTOrgGscOJ8jNkyaUOXFAMzpnR0aq3rSU1ZbcVDCqx67BBjqkAaphceHJz2OYqupMbqQHEVMP6qvlw4VQP%2Bv%2BSnH%2FocOYKGyaEzG2R9efNkpc3u9JwQk9QBx7YTOYsAHmmNxHVsMcBJSI9CeA8YK0RrGblsmS587LkpF8Mfhs6EzFkdN%2B9srqII%2BM9O5E%2BTd3%2FxHTZ4bpz3w7g3%2BDapkFteqpzf6W40ZsilatpARyf%2BgWENQjAXL81o2LEfHOIpJ6Ge2Zuercekbn&X-Amz-Signature=b08ac01c32e602a1dc887e72bc9d4160f8dac5edfed80f1a9df8d5ff913af2bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNBBRHN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYKqVQnc8MbYoCl2xUJNdPH1mElbJAB0ATjm9uBOkrPwIhAMVs3YDwgCbU4cn2QF%2FI0bRb2qwfxPURDaF9h8gIOI%2B1KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyar7nwnSAEw4m5pP0q3AOFrtPQ0PTMaTOd7JjncivhijXIGrbA3emF7vK0l5%2FMxwMduyON%2FtiB2EHjhGQ8fl6vL4YKx%2BbTwOdUT4npcJLedJFU6ObpmwkWsNg2zpBOAOo5ELDYlS4oLpbV9AIhv46tnqrK648AKViLEAK56mUul9YK0wCYJAm%2FDiM2DFdkrtRDnoD1qVL84XJcqzXJR%2BqmSdt2a12CcP6tgrojbQ1gE%2B59cgindGLqCSEYDuqtt%2BuksCkSynC0pI0HYHf%2FWTrZzZSxb0gCMAZtQOi36GchZVUuShLiJvhqNxPqsRkz8dm1V95oR4B236VuXotgMfBjrf0o0bSqOD0rEMTvRiKscCGOAjyfdqAp4qu6xo8IV0R1S0dwO0zlUA65Lb2BWMaMkN2LeUCLfxTUhs%2FT5MWUlUqq%2By7HaVFigBeR%2FmIjsSGABcUja1qUCUh5Pc5%2BK4spP6NmjhWA93EHXWM6XDOSn%2B9Y3bTg7oxqahnBXPkpfoVPB5YCzUEP%2BZcZnOgeaXz%2B9QKuX5TrKV3lONg8G69Y9wIS5WRDifx7%2BoirHIWElUNl79ADAxbB5WahVDlrOxSPfhxCaUgEM6X119lVY6VgTOrgGscOJ8jNkyaUOXFAMzpnR0aq3rSU1ZbcVDCqx67BBjqkAaphceHJz2OYqupMbqQHEVMP6qvlw4VQP%2Bv%2BSnH%2FocOYKGyaEzG2R9efNkpc3u9JwQk9QBx7YTOYsAHmmNxHVsMcBJSI9CeA8YK0RrGblsmS587LkpF8Mfhs6EzFkdN%2B9srqII%2BM9O5E%2BTd3%2FxHTZ4bpz3w7g3%2BDapkFteqpzf6W40ZsilatpARyf%2BgWENQjAXL81o2LEfHOIpJ6Ge2Zuercekbn&X-Amz-Signature=c5d50ee919e62fa3b038ad3acc68174cc16e6cc8549aaef000ca943e9cbbc756&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNBBRHN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYKqVQnc8MbYoCl2xUJNdPH1mElbJAB0ATjm9uBOkrPwIhAMVs3YDwgCbU4cn2QF%2FI0bRb2qwfxPURDaF9h8gIOI%2B1KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyar7nwnSAEw4m5pP0q3AOFrtPQ0PTMaTOd7JjncivhijXIGrbA3emF7vK0l5%2FMxwMduyON%2FtiB2EHjhGQ8fl6vL4YKx%2BbTwOdUT4npcJLedJFU6ObpmwkWsNg2zpBOAOo5ELDYlS4oLpbV9AIhv46tnqrK648AKViLEAK56mUul9YK0wCYJAm%2FDiM2DFdkrtRDnoD1qVL84XJcqzXJR%2BqmSdt2a12CcP6tgrojbQ1gE%2B59cgindGLqCSEYDuqtt%2BuksCkSynC0pI0HYHf%2FWTrZzZSxb0gCMAZtQOi36GchZVUuShLiJvhqNxPqsRkz8dm1V95oR4B236VuXotgMfBjrf0o0bSqOD0rEMTvRiKscCGOAjyfdqAp4qu6xo8IV0R1S0dwO0zlUA65Lb2BWMaMkN2LeUCLfxTUhs%2FT5MWUlUqq%2By7HaVFigBeR%2FmIjsSGABcUja1qUCUh5Pc5%2BK4spP6NmjhWA93EHXWM6XDOSn%2B9Y3bTg7oxqahnBXPkpfoVPB5YCzUEP%2BZcZnOgeaXz%2B9QKuX5TrKV3lONg8G69Y9wIS5WRDifx7%2BoirHIWElUNl79ADAxbB5WahVDlrOxSPfhxCaUgEM6X119lVY6VgTOrgGscOJ8jNkyaUOXFAMzpnR0aq3rSU1ZbcVDCqx67BBjqkAaphceHJz2OYqupMbqQHEVMP6qvlw4VQP%2Bv%2BSnH%2FocOYKGyaEzG2R9efNkpc3u9JwQk9QBx7YTOYsAHmmNxHVsMcBJSI9CeA8YK0RrGblsmS587LkpF8Mfhs6EzFkdN%2B9srqII%2BM9O5E%2BTd3%2FxHTZ4bpz3w7g3%2BDapkFteqpzf6W40ZsilatpARyf%2BgWENQjAXL81o2LEfHOIpJ6Ge2Zuercekbn&X-Amz-Signature=6b4877974579b7b46e8fdd1fefedd79a120b5cab317589f87e12e6e02887db16&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGNBBRHN%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYKqVQnc8MbYoCl2xUJNdPH1mElbJAB0ATjm9uBOkrPwIhAMVs3YDwgCbU4cn2QF%2FI0bRb2qwfxPURDaF9h8gIOI%2B1KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyar7nwnSAEw4m5pP0q3AOFrtPQ0PTMaTOd7JjncivhijXIGrbA3emF7vK0l5%2FMxwMduyON%2FtiB2EHjhGQ8fl6vL4YKx%2BbTwOdUT4npcJLedJFU6ObpmwkWsNg2zpBOAOo5ELDYlS4oLpbV9AIhv46tnqrK648AKViLEAK56mUul9YK0wCYJAm%2FDiM2DFdkrtRDnoD1qVL84XJcqzXJR%2BqmSdt2a12CcP6tgrojbQ1gE%2B59cgindGLqCSEYDuqtt%2BuksCkSynC0pI0HYHf%2FWTrZzZSxb0gCMAZtQOi36GchZVUuShLiJvhqNxPqsRkz8dm1V95oR4B236VuXotgMfBjrf0o0bSqOD0rEMTvRiKscCGOAjyfdqAp4qu6xo8IV0R1S0dwO0zlUA65Lb2BWMaMkN2LeUCLfxTUhs%2FT5MWUlUqq%2By7HaVFigBeR%2FmIjsSGABcUja1qUCUh5Pc5%2BK4spP6NmjhWA93EHXWM6XDOSn%2B9Y3bTg7oxqahnBXPkpfoVPB5YCzUEP%2BZcZnOgeaXz%2B9QKuX5TrKV3lONg8G69Y9wIS5WRDifx7%2BoirHIWElUNl79ADAxbB5WahVDlrOxSPfhxCaUgEM6X119lVY6VgTOrgGscOJ8jNkyaUOXFAMzpnR0aq3rSU1ZbcVDCqx67BBjqkAaphceHJz2OYqupMbqQHEVMP6qvlw4VQP%2Bv%2BSnH%2FocOYKGyaEzG2R9efNkpc3u9JwQk9QBx7YTOYsAHmmNxHVsMcBJSI9CeA8YK0RrGblsmS587LkpF8Mfhs6EzFkdN%2B9srqII%2BM9O5E%2BTd3%2FxHTZ4bpz3w7g3%2BDapkFteqpzf6W40ZsilatpARyf%2BgWENQjAXL81o2LEfHOIpJ6Ge2Zuercekbn&X-Amz-Signature=3a63797507fdfd8e8ec34965653a846573a6c006547ab5b1def65bee1f3e7cd0&X-Amz-SignedHeaders=host&x-id=GetObject)
