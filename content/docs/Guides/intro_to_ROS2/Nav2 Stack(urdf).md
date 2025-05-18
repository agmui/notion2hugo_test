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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NLP7N2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC42DGzZxTBCYnWayCJmF619YRUD1mPStXhTCPiuIOfYAiAvHac2MEKhu%2F7hic4NXVYYnpS2%2FblTRNWMr7t1IB7eLir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMOuIXX4X%2FgO%2BtA1bmKtwDZG5hac6ZX%2BwbovkVZiNIzNoh%2Fab3SosTHWToam%2FiyYM2kqfPgFoaM701ckKUuFvZAhTXWLOOSE8wC5uMHyM5jn86ufnbO5UL4y8BvVGYmLknPXaArLmp2ACS20AWWNrFV2HAqtaPzrP%2FnyEGJ%2F2p%2BEmfrtFdVBZoQKzNlSPctwTR0g4fvS2csM4cspUR6Kr2M4SdR2Ts8a9sE%2FrjUI%2FkZxri0afcOwb0jdUmf9AiJwNHqBPaT7lNfjjocZS74PpJFtAzxJHnvd7yvkFb9HGrK7GFPthhmeArDURjJL%2B1KGPzXN%2BvNl%2BZN70mdnyMjYkPdZpBCijSDq%2Bg54eE%2B%2FgUb3MPUTfRMUkgMhWkIASz2dxM7reRGqt8V%2BQ%2B%2BtP%2Fln7CEBdpmNKJ7WAEQPp0%2BBXX0qcWhoFEh4NO%2BLrUN3QwN1BAT8f1UXyZGdFrLKqAvFcekEJFZXEwwW5Lt1geGSyabCZ4Cv9ATMdex9rVG0Ghkov1PKmIgymMrTVJc1qRImLQDnE%2B0H9Iyy%2FUFvwhCipD00YR5KzOZPGHwghSBfdWt3NQ1k6%2Fcwj%2BoEm%2Bldgd79ugqs2LfLIS38Oi9YaqBrHPRctQHf9wH3Bkq9Z2tKUbbSDwddE495BNVw9g7xkwh8KowQY6pgFQrirUOPSWCLYKDiTxUFG7fQTjYCb5%2Bu3fSs964iexmI21LvXcf7G3SdaTN2I04V6gps8JvxB0yfqSaxBi%2FOCmX9zecMmm7IPS4YOj34KJX0UwC5xXYXQSX9oVYL5fi%2FtEjihNy7MVCRmnDPc4vVm8N5jcgyOW6xP7NsENLbRX4MOuihyHt4tV8kR%2BWeYHtUc4%2BnhpU%2Fo8xwQmgh1BLnjYENEU334H&X-Amz-Signature=cb35d2b3046609ff743ff8764216876c2a1e2885e0d4b657a008bc30f0b2f95b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NLP7N2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC42DGzZxTBCYnWayCJmF619YRUD1mPStXhTCPiuIOfYAiAvHac2MEKhu%2F7hic4NXVYYnpS2%2FblTRNWMr7t1IB7eLir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMOuIXX4X%2FgO%2BtA1bmKtwDZG5hac6ZX%2BwbovkVZiNIzNoh%2Fab3SosTHWToam%2FiyYM2kqfPgFoaM701ckKUuFvZAhTXWLOOSE8wC5uMHyM5jn86ufnbO5UL4y8BvVGYmLknPXaArLmp2ACS20AWWNrFV2HAqtaPzrP%2FnyEGJ%2F2p%2BEmfrtFdVBZoQKzNlSPctwTR0g4fvS2csM4cspUR6Kr2M4SdR2Ts8a9sE%2FrjUI%2FkZxri0afcOwb0jdUmf9AiJwNHqBPaT7lNfjjocZS74PpJFtAzxJHnvd7yvkFb9HGrK7GFPthhmeArDURjJL%2B1KGPzXN%2BvNl%2BZN70mdnyMjYkPdZpBCijSDq%2Bg54eE%2B%2FgUb3MPUTfRMUkgMhWkIASz2dxM7reRGqt8V%2BQ%2B%2BtP%2Fln7CEBdpmNKJ7WAEQPp0%2BBXX0qcWhoFEh4NO%2BLrUN3QwN1BAT8f1UXyZGdFrLKqAvFcekEJFZXEwwW5Lt1geGSyabCZ4Cv9ATMdex9rVG0Ghkov1PKmIgymMrTVJc1qRImLQDnE%2B0H9Iyy%2FUFvwhCipD00YR5KzOZPGHwghSBfdWt3NQ1k6%2Fcwj%2BoEm%2Bldgd79ugqs2LfLIS38Oi9YaqBrHPRctQHf9wH3Bkq9Z2tKUbbSDwddE495BNVw9g7xkwh8KowQY6pgFQrirUOPSWCLYKDiTxUFG7fQTjYCb5%2Bu3fSs964iexmI21LvXcf7G3SdaTN2I04V6gps8JvxB0yfqSaxBi%2FOCmX9zecMmm7IPS4YOj34KJX0UwC5xXYXQSX9oVYL5fi%2FtEjihNy7MVCRmnDPc4vVm8N5jcgyOW6xP7NsENLbRX4MOuihyHt4tV8kR%2BWeYHtUc4%2BnhpU%2Fo8xwQmgh1BLnjYENEU334H&X-Amz-Signature=de25c6afa35ffda41e73c5f41909f8d95358555d78a611fc47250e2391a96d5f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NLP7N2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC42DGzZxTBCYnWayCJmF619YRUD1mPStXhTCPiuIOfYAiAvHac2MEKhu%2F7hic4NXVYYnpS2%2FblTRNWMr7t1IB7eLir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMOuIXX4X%2FgO%2BtA1bmKtwDZG5hac6ZX%2BwbovkVZiNIzNoh%2Fab3SosTHWToam%2FiyYM2kqfPgFoaM701ckKUuFvZAhTXWLOOSE8wC5uMHyM5jn86ufnbO5UL4y8BvVGYmLknPXaArLmp2ACS20AWWNrFV2HAqtaPzrP%2FnyEGJ%2F2p%2BEmfrtFdVBZoQKzNlSPctwTR0g4fvS2csM4cspUR6Kr2M4SdR2Ts8a9sE%2FrjUI%2FkZxri0afcOwb0jdUmf9AiJwNHqBPaT7lNfjjocZS74PpJFtAzxJHnvd7yvkFb9HGrK7GFPthhmeArDURjJL%2B1KGPzXN%2BvNl%2BZN70mdnyMjYkPdZpBCijSDq%2Bg54eE%2B%2FgUb3MPUTfRMUkgMhWkIASz2dxM7reRGqt8V%2BQ%2B%2BtP%2Fln7CEBdpmNKJ7WAEQPp0%2BBXX0qcWhoFEh4NO%2BLrUN3QwN1BAT8f1UXyZGdFrLKqAvFcekEJFZXEwwW5Lt1geGSyabCZ4Cv9ATMdex9rVG0Ghkov1PKmIgymMrTVJc1qRImLQDnE%2B0H9Iyy%2FUFvwhCipD00YR5KzOZPGHwghSBfdWt3NQ1k6%2Fcwj%2BoEm%2Bldgd79ugqs2LfLIS38Oi9YaqBrHPRctQHf9wH3Bkq9Z2tKUbbSDwddE495BNVw9g7xkwh8KowQY6pgFQrirUOPSWCLYKDiTxUFG7fQTjYCb5%2Bu3fSs964iexmI21LvXcf7G3SdaTN2I04V6gps8JvxB0yfqSaxBi%2FOCmX9zecMmm7IPS4YOj34KJX0UwC5xXYXQSX9oVYL5fi%2FtEjihNy7MVCRmnDPc4vVm8N5jcgyOW6xP7NsENLbRX4MOuihyHt4tV8kR%2BWeYHtUc4%2BnhpU%2Fo8xwQmgh1BLnjYENEU334H&X-Amz-Signature=7eed0c4731e34b6a344d7a340e4d546216e8537f98d5fcba82e5da6c40fc8622&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NLP7N2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC42DGzZxTBCYnWayCJmF619YRUD1mPStXhTCPiuIOfYAiAvHac2MEKhu%2F7hic4NXVYYnpS2%2FblTRNWMr7t1IB7eLir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMOuIXX4X%2FgO%2BtA1bmKtwDZG5hac6ZX%2BwbovkVZiNIzNoh%2Fab3SosTHWToam%2FiyYM2kqfPgFoaM701ckKUuFvZAhTXWLOOSE8wC5uMHyM5jn86ufnbO5UL4y8BvVGYmLknPXaArLmp2ACS20AWWNrFV2HAqtaPzrP%2FnyEGJ%2F2p%2BEmfrtFdVBZoQKzNlSPctwTR0g4fvS2csM4cspUR6Kr2M4SdR2Ts8a9sE%2FrjUI%2FkZxri0afcOwb0jdUmf9AiJwNHqBPaT7lNfjjocZS74PpJFtAzxJHnvd7yvkFb9HGrK7GFPthhmeArDURjJL%2B1KGPzXN%2BvNl%2BZN70mdnyMjYkPdZpBCijSDq%2Bg54eE%2B%2FgUb3MPUTfRMUkgMhWkIASz2dxM7reRGqt8V%2BQ%2B%2BtP%2Fln7CEBdpmNKJ7WAEQPp0%2BBXX0qcWhoFEh4NO%2BLrUN3QwN1BAT8f1UXyZGdFrLKqAvFcekEJFZXEwwW5Lt1geGSyabCZ4Cv9ATMdex9rVG0Ghkov1PKmIgymMrTVJc1qRImLQDnE%2B0H9Iyy%2FUFvwhCipD00YR5KzOZPGHwghSBfdWt3NQ1k6%2Fcwj%2BoEm%2Bldgd79ugqs2LfLIS38Oi9YaqBrHPRctQHf9wH3Bkq9Z2tKUbbSDwddE495BNVw9g7xkwh8KowQY6pgFQrirUOPSWCLYKDiTxUFG7fQTjYCb5%2Bu3fSs964iexmI21LvXcf7G3SdaTN2I04V6gps8JvxB0yfqSaxBi%2FOCmX9zecMmm7IPS4YOj34KJX0UwC5xXYXQSX9oVYL5fi%2FtEjihNy7MVCRmnDPc4vVm8N5jcgyOW6xP7NsENLbRX4MOuihyHt4tV8kR%2BWeYHtUc4%2BnhpU%2Fo8xwQmgh1BLnjYENEU334H&X-Amz-Signature=023b922c5f875ce84d258acbe2c5f3f86196698484f4ed6fe4806fabfda3e32c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NLP7N2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC42DGzZxTBCYnWayCJmF619YRUD1mPStXhTCPiuIOfYAiAvHac2MEKhu%2F7hic4NXVYYnpS2%2FblTRNWMr7t1IB7eLir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMOuIXX4X%2FgO%2BtA1bmKtwDZG5hac6ZX%2BwbovkVZiNIzNoh%2Fab3SosTHWToam%2FiyYM2kqfPgFoaM701ckKUuFvZAhTXWLOOSE8wC5uMHyM5jn86ufnbO5UL4y8BvVGYmLknPXaArLmp2ACS20AWWNrFV2HAqtaPzrP%2FnyEGJ%2F2p%2BEmfrtFdVBZoQKzNlSPctwTR0g4fvS2csM4cspUR6Kr2M4SdR2Ts8a9sE%2FrjUI%2FkZxri0afcOwb0jdUmf9AiJwNHqBPaT7lNfjjocZS74PpJFtAzxJHnvd7yvkFb9HGrK7GFPthhmeArDURjJL%2B1KGPzXN%2BvNl%2BZN70mdnyMjYkPdZpBCijSDq%2Bg54eE%2B%2FgUb3MPUTfRMUkgMhWkIASz2dxM7reRGqt8V%2BQ%2B%2BtP%2Fln7CEBdpmNKJ7WAEQPp0%2BBXX0qcWhoFEh4NO%2BLrUN3QwN1BAT8f1UXyZGdFrLKqAvFcekEJFZXEwwW5Lt1geGSyabCZ4Cv9ATMdex9rVG0Ghkov1PKmIgymMrTVJc1qRImLQDnE%2B0H9Iyy%2FUFvwhCipD00YR5KzOZPGHwghSBfdWt3NQ1k6%2Fcwj%2BoEm%2Bldgd79ugqs2LfLIS38Oi9YaqBrHPRctQHf9wH3Bkq9Z2tKUbbSDwddE495BNVw9g7xkwh8KowQY6pgFQrirUOPSWCLYKDiTxUFG7fQTjYCb5%2Bu3fSs964iexmI21LvXcf7G3SdaTN2I04V6gps8JvxB0yfqSaxBi%2FOCmX9zecMmm7IPS4YOj34KJX0UwC5xXYXQSX9oVYL5fi%2FtEjihNy7MVCRmnDPc4vVm8N5jcgyOW6xP7NsENLbRX4MOuihyHt4tV8kR%2BWeYHtUc4%2BnhpU%2Fo8xwQmgh1BLnjYENEU334H&X-Amz-Signature=e118d6cb7ffd15d445e5d12063196862f0e8969a66bf74938c91c00b46dd1e71&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NLP7N2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC42DGzZxTBCYnWayCJmF619YRUD1mPStXhTCPiuIOfYAiAvHac2MEKhu%2F7hic4NXVYYnpS2%2FblTRNWMr7t1IB7eLir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMOuIXX4X%2FgO%2BtA1bmKtwDZG5hac6ZX%2BwbovkVZiNIzNoh%2Fab3SosTHWToam%2FiyYM2kqfPgFoaM701ckKUuFvZAhTXWLOOSE8wC5uMHyM5jn86ufnbO5UL4y8BvVGYmLknPXaArLmp2ACS20AWWNrFV2HAqtaPzrP%2FnyEGJ%2F2p%2BEmfrtFdVBZoQKzNlSPctwTR0g4fvS2csM4cspUR6Kr2M4SdR2Ts8a9sE%2FrjUI%2FkZxri0afcOwb0jdUmf9AiJwNHqBPaT7lNfjjocZS74PpJFtAzxJHnvd7yvkFb9HGrK7GFPthhmeArDURjJL%2B1KGPzXN%2BvNl%2BZN70mdnyMjYkPdZpBCijSDq%2Bg54eE%2B%2FgUb3MPUTfRMUkgMhWkIASz2dxM7reRGqt8V%2BQ%2B%2BtP%2Fln7CEBdpmNKJ7WAEQPp0%2BBXX0qcWhoFEh4NO%2BLrUN3QwN1BAT8f1UXyZGdFrLKqAvFcekEJFZXEwwW5Lt1geGSyabCZ4Cv9ATMdex9rVG0Ghkov1PKmIgymMrTVJc1qRImLQDnE%2B0H9Iyy%2FUFvwhCipD00YR5KzOZPGHwghSBfdWt3NQ1k6%2Fcwj%2BoEm%2Bldgd79ugqs2LfLIS38Oi9YaqBrHPRctQHf9wH3Bkq9Z2tKUbbSDwddE495BNVw9g7xkwh8KowQY6pgFQrirUOPSWCLYKDiTxUFG7fQTjYCb5%2Bu3fSs964iexmI21LvXcf7G3SdaTN2I04V6gps8JvxB0yfqSaxBi%2FOCmX9zecMmm7IPS4YOj34KJX0UwC5xXYXQSX9oVYL5fi%2FtEjihNy7MVCRmnDPc4vVm8N5jcgyOW6xP7NsENLbRX4MOuihyHt4tV8kR%2BWeYHtUc4%2BnhpU%2Fo8xwQmgh1BLnjYENEU334H&X-Amz-Signature=d6982636b7bcf7ec2318c2ce85884930f6b33feba7e4c98ee12547d31c3bb780&X-Amz-SignedHeaders=host&x-id=GetObject)
