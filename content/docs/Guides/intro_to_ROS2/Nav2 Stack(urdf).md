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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5ERP5H%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTaTHGVfzrFBij%2F8mboreTJfHLX%2BYDbO4JdepNGFxZgAIhANmqruUMAZsRuIMu3SOBm5wgmDUafne9SPomGgWt7sOhKv8DCDIQABoMNjM3NDIzMTgzODA1Igy47y7Kg5vXkzRZhGsq3AP6pio8xX2ekxZ5ABtNR4uQGVYIB0W04QXAMi3jOAhFrvnc4eKrPEslBbA2sXEg8h3U154i3hNcmUGmhbQoTVmc8L8AS0yo9rhbZGuiJJnQRqi%2B%2F02AQu9v73Qj%2FCqn04aWU2XhcXJIdWWckai%2ByW3TfuLJ73wQ%2BzWK57r9kmr1MOS4ih8FBP%2Bt8FvaJZ%2BszIYHA%2BRNn1wt0v9BP5XDA7WE683GZGOjFee6fKLvbtQROPfoyT1%2BV%2F4NQfWcG6dgIpaSgv1%2FALa%2B7od3gEBvGcSfRcH1Y46tG%2BV0hf15zKyFexlUtEtMOnFK%2FWGv24SkP83JCRmwh5920V%2BeSiQdmbt66Kkpn8kdVIn%2F66mtm74oqjJKHN9XihVduMSqnkoDh1%2BQYuw1XmZ76yvOJpZ%2BIX84dzmvo3FjzWfLhls1CctK5vQodp8ZiLOyXO0SxlhxwHkXYPzzCT4%2BMMOK0ErLqM2tZ9FLaK55SBJXNPHVLHoi0CeEBTPbWQ3VVgvWPXcX%2BP8ZaEyKUCqet0fcYyFm4h%2BQ%2B8QpWE3Xph4EAfB7BpGcfIg8Iw8GsZR17sESSFD4d8Krj%2BznvMsYLuLwjDUUlGl6VKmX6VVx5iNkEapPp5eFdnLp8NULd8%2F%2BTEP9fzChyMW%2FBjqkAWhUzAOp6KWNZonaGpobPI9i87KxystiZ6FaIhb%2Fvtgj4sHmlSVuvj4kG0uEYNvgSeL9qCT5yc%2FnaMFBDPtP7e6S9XIou3ms14mmHWwjpZ9UIMyGHHR06qEI54NAMnZtpqrKekg1ea48s1AG1UG%2BTz08SAQgK3AgPzx%2FWRVGrHmsWQVJug3p6o7zFaFsMXfP8mOCRRFlleZGCTCX%2BvG7xeEGokJU&X-Amz-Signature=0ab8e811ccba23cd637d4285b768fa3590bf13596553e4c1a19e580f503e68a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5ERP5H%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTaTHGVfzrFBij%2F8mboreTJfHLX%2BYDbO4JdepNGFxZgAIhANmqruUMAZsRuIMu3SOBm5wgmDUafne9SPomGgWt7sOhKv8DCDIQABoMNjM3NDIzMTgzODA1Igy47y7Kg5vXkzRZhGsq3AP6pio8xX2ekxZ5ABtNR4uQGVYIB0W04QXAMi3jOAhFrvnc4eKrPEslBbA2sXEg8h3U154i3hNcmUGmhbQoTVmc8L8AS0yo9rhbZGuiJJnQRqi%2B%2F02AQu9v73Qj%2FCqn04aWU2XhcXJIdWWckai%2ByW3TfuLJ73wQ%2BzWK57r9kmr1MOS4ih8FBP%2Bt8FvaJZ%2BszIYHA%2BRNn1wt0v9BP5XDA7WE683GZGOjFee6fKLvbtQROPfoyT1%2BV%2F4NQfWcG6dgIpaSgv1%2FALa%2B7od3gEBvGcSfRcH1Y46tG%2BV0hf15zKyFexlUtEtMOnFK%2FWGv24SkP83JCRmwh5920V%2BeSiQdmbt66Kkpn8kdVIn%2F66mtm74oqjJKHN9XihVduMSqnkoDh1%2BQYuw1XmZ76yvOJpZ%2BIX84dzmvo3FjzWfLhls1CctK5vQodp8ZiLOyXO0SxlhxwHkXYPzzCT4%2BMMOK0ErLqM2tZ9FLaK55SBJXNPHVLHoi0CeEBTPbWQ3VVgvWPXcX%2BP8ZaEyKUCqet0fcYyFm4h%2BQ%2B8QpWE3Xph4EAfB7BpGcfIg8Iw8GsZR17sESSFD4d8Krj%2BznvMsYLuLwjDUUlGl6VKmX6VVx5iNkEapPp5eFdnLp8NULd8%2F%2BTEP9fzChyMW%2FBjqkAWhUzAOp6KWNZonaGpobPI9i87KxystiZ6FaIhb%2Fvtgj4sHmlSVuvj4kG0uEYNvgSeL9qCT5yc%2FnaMFBDPtP7e6S9XIou3ms14mmHWwjpZ9UIMyGHHR06qEI54NAMnZtpqrKekg1ea48s1AG1UG%2BTz08SAQgK3AgPzx%2FWRVGrHmsWQVJug3p6o7zFaFsMXfP8mOCRRFlleZGCTCX%2BvG7xeEGokJU&X-Amz-Signature=980d561711ff3d73806347ef73b6dae94a4c6c57a8c09a6cb8605b1fb1eaf866&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5ERP5H%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTaTHGVfzrFBij%2F8mboreTJfHLX%2BYDbO4JdepNGFxZgAIhANmqruUMAZsRuIMu3SOBm5wgmDUafne9SPomGgWt7sOhKv8DCDIQABoMNjM3NDIzMTgzODA1Igy47y7Kg5vXkzRZhGsq3AP6pio8xX2ekxZ5ABtNR4uQGVYIB0W04QXAMi3jOAhFrvnc4eKrPEslBbA2sXEg8h3U154i3hNcmUGmhbQoTVmc8L8AS0yo9rhbZGuiJJnQRqi%2B%2F02AQu9v73Qj%2FCqn04aWU2XhcXJIdWWckai%2ByW3TfuLJ73wQ%2BzWK57r9kmr1MOS4ih8FBP%2Bt8FvaJZ%2BszIYHA%2BRNn1wt0v9BP5XDA7WE683GZGOjFee6fKLvbtQROPfoyT1%2BV%2F4NQfWcG6dgIpaSgv1%2FALa%2B7od3gEBvGcSfRcH1Y46tG%2BV0hf15zKyFexlUtEtMOnFK%2FWGv24SkP83JCRmwh5920V%2BeSiQdmbt66Kkpn8kdVIn%2F66mtm74oqjJKHN9XihVduMSqnkoDh1%2BQYuw1XmZ76yvOJpZ%2BIX84dzmvo3FjzWfLhls1CctK5vQodp8ZiLOyXO0SxlhxwHkXYPzzCT4%2BMMOK0ErLqM2tZ9FLaK55SBJXNPHVLHoi0CeEBTPbWQ3VVgvWPXcX%2BP8ZaEyKUCqet0fcYyFm4h%2BQ%2B8QpWE3Xph4EAfB7BpGcfIg8Iw8GsZR17sESSFD4d8Krj%2BznvMsYLuLwjDUUlGl6VKmX6VVx5iNkEapPp5eFdnLp8NULd8%2F%2BTEP9fzChyMW%2FBjqkAWhUzAOp6KWNZonaGpobPI9i87KxystiZ6FaIhb%2Fvtgj4sHmlSVuvj4kG0uEYNvgSeL9qCT5yc%2FnaMFBDPtP7e6S9XIou3ms14mmHWwjpZ9UIMyGHHR06qEI54NAMnZtpqrKekg1ea48s1AG1UG%2BTz08SAQgK3AgPzx%2FWRVGrHmsWQVJug3p6o7zFaFsMXfP8mOCRRFlleZGCTCX%2BvG7xeEGokJU&X-Amz-Signature=a92756bc4981567aa17bf26b44b51bfe3191df8f4c12979750463d30508a63db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5ERP5H%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTaTHGVfzrFBij%2F8mboreTJfHLX%2BYDbO4JdepNGFxZgAIhANmqruUMAZsRuIMu3SOBm5wgmDUafne9SPomGgWt7sOhKv8DCDIQABoMNjM3NDIzMTgzODA1Igy47y7Kg5vXkzRZhGsq3AP6pio8xX2ekxZ5ABtNR4uQGVYIB0W04QXAMi3jOAhFrvnc4eKrPEslBbA2sXEg8h3U154i3hNcmUGmhbQoTVmc8L8AS0yo9rhbZGuiJJnQRqi%2B%2F02AQu9v73Qj%2FCqn04aWU2XhcXJIdWWckai%2ByW3TfuLJ73wQ%2BzWK57r9kmr1MOS4ih8FBP%2Bt8FvaJZ%2BszIYHA%2BRNn1wt0v9BP5XDA7WE683GZGOjFee6fKLvbtQROPfoyT1%2BV%2F4NQfWcG6dgIpaSgv1%2FALa%2B7od3gEBvGcSfRcH1Y46tG%2BV0hf15zKyFexlUtEtMOnFK%2FWGv24SkP83JCRmwh5920V%2BeSiQdmbt66Kkpn8kdVIn%2F66mtm74oqjJKHN9XihVduMSqnkoDh1%2BQYuw1XmZ76yvOJpZ%2BIX84dzmvo3FjzWfLhls1CctK5vQodp8ZiLOyXO0SxlhxwHkXYPzzCT4%2BMMOK0ErLqM2tZ9FLaK55SBJXNPHVLHoi0CeEBTPbWQ3VVgvWPXcX%2BP8ZaEyKUCqet0fcYyFm4h%2BQ%2B8QpWE3Xph4EAfB7BpGcfIg8Iw8GsZR17sESSFD4d8Krj%2BznvMsYLuLwjDUUlGl6VKmX6VVx5iNkEapPp5eFdnLp8NULd8%2F%2BTEP9fzChyMW%2FBjqkAWhUzAOp6KWNZonaGpobPI9i87KxystiZ6FaIhb%2Fvtgj4sHmlSVuvj4kG0uEYNvgSeL9qCT5yc%2FnaMFBDPtP7e6S9XIou3ms14mmHWwjpZ9UIMyGHHR06qEI54NAMnZtpqrKekg1ea48s1AG1UG%2BTz08SAQgK3AgPzx%2FWRVGrHmsWQVJug3p6o7zFaFsMXfP8mOCRRFlleZGCTCX%2BvG7xeEGokJU&X-Amz-Signature=ce41e79f509eecf5e3042253116274b2e7e3ba247f888c5abf99b56e83b845dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5ERP5H%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTaTHGVfzrFBij%2F8mboreTJfHLX%2BYDbO4JdepNGFxZgAIhANmqruUMAZsRuIMu3SOBm5wgmDUafne9SPomGgWt7sOhKv8DCDIQABoMNjM3NDIzMTgzODA1Igy47y7Kg5vXkzRZhGsq3AP6pio8xX2ekxZ5ABtNR4uQGVYIB0W04QXAMi3jOAhFrvnc4eKrPEslBbA2sXEg8h3U154i3hNcmUGmhbQoTVmc8L8AS0yo9rhbZGuiJJnQRqi%2B%2F02AQu9v73Qj%2FCqn04aWU2XhcXJIdWWckai%2ByW3TfuLJ73wQ%2BzWK57r9kmr1MOS4ih8FBP%2Bt8FvaJZ%2BszIYHA%2BRNn1wt0v9BP5XDA7WE683GZGOjFee6fKLvbtQROPfoyT1%2BV%2F4NQfWcG6dgIpaSgv1%2FALa%2B7od3gEBvGcSfRcH1Y46tG%2BV0hf15zKyFexlUtEtMOnFK%2FWGv24SkP83JCRmwh5920V%2BeSiQdmbt66Kkpn8kdVIn%2F66mtm74oqjJKHN9XihVduMSqnkoDh1%2BQYuw1XmZ76yvOJpZ%2BIX84dzmvo3FjzWfLhls1CctK5vQodp8ZiLOyXO0SxlhxwHkXYPzzCT4%2BMMOK0ErLqM2tZ9FLaK55SBJXNPHVLHoi0CeEBTPbWQ3VVgvWPXcX%2BP8ZaEyKUCqet0fcYyFm4h%2BQ%2B8QpWE3Xph4EAfB7BpGcfIg8Iw8GsZR17sESSFD4d8Krj%2BznvMsYLuLwjDUUlGl6VKmX6VVx5iNkEapPp5eFdnLp8NULd8%2F%2BTEP9fzChyMW%2FBjqkAWhUzAOp6KWNZonaGpobPI9i87KxystiZ6FaIhb%2Fvtgj4sHmlSVuvj4kG0uEYNvgSeL9qCT5yc%2FnaMFBDPtP7e6S9XIou3ms14mmHWwjpZ9UIMyGHHR06qEI54NAMnZtpqrKekg1ea48s1AG1UG%2BTz08SAQgK3AgPzx%2FWRVGrHmsWQVJug3p6o7zFaFsMXfP8mOCRRFlleZGCTCX%2BvG7xeEGokJU&X-Amz-Signature=534d810d9c5bb2c3ca7d583e0329bd77e33a5e578ca773293044094457043939&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A5ERP5H%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T180946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTaTHGVfzrFBij%2F8mboreTJfHLX%2BYDbO4JdepNGFxZgAIhANmqruUMAZsRuIMu3SOBm5wgmDUafne9SPomGgWt7sOhKv8DCDIQABoMNjM3NDIzMTgzODA1Igy47y7Kg5vXkzRZhGsq3AP6pio8xX2ekxZ5ABtNR4uQGVYIB0W04QXAMi3jOAhFrvnc4eKrPEslBbA2sXEg8h3U154i3hNcmUGmhbQoTVmc8L8AS0yo9rhbZGuiJJnQRqi%2B%2F02AQu9v73Qj%2FCqn04aWU2XhcXJIdWWckai%2ByW3TfuLJ73wQ%2BzWK57r9kmr1MOS4ih8FBP%2Bt8FvaJZ%2BszIYHA%2BRNn1wt0v9BP5XDA7WE683GZGOjFee6fKLvbtQROPfoyT1%2BV%2F4NQfWcG6dgIpaSgv1%2FALa%2B7od3gEBvGcSfRcH1Y46tG%2BV0hf15zKyFexlUtEtMOnFK%2FWGv24SkP83JCRmwh5920V%2BeSiQdmbt66Kkpn8kdVIn%2F66mtm74oqjJKHN9XihVduMSqnkoDh1%2BQYuw1XmZ76yvOJpZ%2BIX84dzmvo3FjzWfLhls1CctK5vQodp8ZiLOyXO0SxlhxwHkXYPzzCT4%2BMMOK0ErLqM2tZ9FLaK55SBJXNPHVLHoi0CeEBTPbWQ3VVgvWPXcX%2BP8ZaEyKUCqet0fcYyFm4h%2BQ%2B8QpWE3Xph4EAfB7BpGcfIg8Iw8GsZR17sESSFD4d8Krj%2BznvMsYLuLwjDUUlGl6VKmX6VVx5iNkEapPp5eFdnLp8NULd8%2F%2BTEP9fzChyMW%2FBjqkAWhUzAOp6KWNZonaGpobPI9i87KxystiZ6FaIhb%2Fvtgj4sHmlSVuvj4kG0uEYNvgSeL9qCT5yc%2FnaMFBDPtP7e6S9XIou3ms14mmHWwjpZ9UIMyGHHR06qEI54NAMnZtpqrKekg1ea48s1AG1UG%2BTz08SAQgK3AgPzx%2FWRVGrHmsWQVJug3p6o7zFaFsMXfP8mOCRRFlleZGCTCX%2BvG7xeEGokJU&X-Amz-Signature=f0b523a858cdd3f94e77b6beb5b2ea19027baf64a819261c71a342c164622cee&X-Amz-SignedHeaders=host&x-id=GetObject)
