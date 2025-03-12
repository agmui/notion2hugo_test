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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3ZC5SF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDDFDrcfqd4llICD08OQZLGUD7j4xA9FcslOljGLThjfAiEAsfLs1uqJy9O9pT1twkXdQDyQOFO88m4IUR3akYu63wUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwboUUn%2FXQJAE8f%2ByrcA3CnPlqRtirEaHNRQYbIkoH4Vg0ZEajNVPoqAc%2BAkin6mHd7oTwPHOj3rbWO2lWfV2iSCYAExSVGOv4lVysEhvXuEh0DQ3JeTZy%2Fa5p%2FZzCVzyPQPQx14g9w0gRCLKlpKy%2BprgEkaCZh4fMbWjXS457485y0iu1FLGyFuYcs%2F36OMHykEMNf%2FA%2BvdQe1lh%2Bbr%2BV4dnvARDqQPk7eqCVfM6%2F40UmvJ7IDLg3KdZDfK7j6hi%2BYiWboWYrmjJbWPiKkz%2FIvEkLnr9rfKGWZQCOmr2YEybGy%2F6VhlSARqi5CxVnfXghATFwwgwqV%2FbmoO8xCAHZ1GRYTZFJR9RL1J03HHAgmwdXuM3BHC9oJg0DU4MT%2B2EEdbK6mGC%2FtiiylbChsYXBdgqnwZcr0yNLvAcImIAjItmODF5Jt%2F5W%2F2dAmFqrdMcnrZdpil5Yt1Xr807i2DmEmrAB7wC%2FM4elRhKorcSUJ3brS5SfsZeBUr6C5anoYyqiWy6FS6VIyho8Jg65Um37uvZTU%2B9zKEOXpsOzkFRZ5WHd%2Byq8X%2BVMU0deezMOelUwEH3%2ByzUtBhm01cM8TjPJf6c%2Byf2bRSOqHVORc8016KyMvV0Tk3F7zDNTPp5IwAZAKtvAKSZZ1dvJOMOmAx74GOqUBFYHi2aPF76Zwrev32%2BqIu9JGmRv3mpfiCICd4uKeroilFU2Wk5wd7iPjI5qrU38XHm0VwvbGYP2sIsPUfoLRoTW3dOV6GwP9yBOFIQyqHmF5thlTyEZ1oT9w2I1d7Bu8jB2RTy5jng1T43lR1f57PLxG6WfnQihEHqhtBWza4PRay9AI%2BjI2tkUh6rl5mRYU3s%2BSZSTJ9vO8cJ10K0PQQP3TQzap&X-Amz-Signature=2f0e5e3a09118cd25140fad849cbe657201834c8fb2277c46268228ffe205fdc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3ZC5SF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDDFDrcfqd4llICD08OQZLGUD7j4xA9FcslOljGLThjfAiEAsfLs1uqJy9O9pT1twkXdQDyQOFO88m4IUR3akYu63wUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwboUUn%2FXQJAE8f%2ByrcA3CnPlqRtirEaHNRQYbIkoH4Vg0ZEajNVPoqAc%2BAkin6mHd7oTwPHOj3rbWO2lWfV2iSCYAExSVGOv4lVysEhvXuEh0DQ3JeTZy%2Fa5p%2FZzCVzyPQPQx14g9w0gRCLKlpKy%2BprgEkaCZh4fMbWjXS457485y0iu1FLGyFuYcs%2F36OMHykEMNf%2FA%2BvdQe1lh%2Bbr%2BV4dnvARDqQPk7eqCVfM6%2F40UmvJ7IDLg3KdZDfK7j6hi%2BYiWboWYrmjJbWPiKkz%2FIvEkLnr9rfKGWZQCOmr2YEybGy%2F6VhlSARqi5CxVnfXghATFwwgwqV%2FbmoO8xCAHZ1GRYTZFJR9RL1J03HHAgmwdXuM3BHC9oJg0DU4MT%2B2EEdbK6mGC%2FtiiylbChsYXBdgqnwZcr0yNLvAcImIAjItmODF5Jt%2F5W%2F2dAmFqrdMcnrZdpil5Yt1Xr807i2DmEmrAB7wC%2FM4elRhKorcSUJ3brS5SfsZeBUr6C5anoYyqiWy6FS6VIyho8Jg65Um37uvZTU%2B9zKEOXpsOzkFRZ5WHd%2Byq8X%2BVMU0deezMOelUwEH3%2ByzUtBhm01cM8TjPJf6c%2Byf2bRSOqHVORc8016KyMvV0Tk3F7zDNTPp5IwAZAKtvAKSZZ1dvJOMOmAx74GOqUBFYHi2aPF76Zwrev32%2BqIu9JGmRv3mpfiCICd4uKeroilFU2Wk5wd7iPjI5qrU38XHm0VwvbGYP2sIsPUfoLRoTW3dOV6GwP9yBOFIQyqHmF5thlTyEZ1oT9w2I1d7Bu8jB2RTy5jng1T43lR1f57PLxG6WfnQihEHqhtBWza4PRay9AI%2BjI2tkUh6rl5mRYU3s%2BSZSTJ9vO8cJ10K0PQQP3TQzap&X-Amz-Signature=527529b4f2fe2660e3a1099e36c052febc6fe1960d7fb13ccf6c50ea14a05c46&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3ZC5SF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDDFDrcfqd4llICD08OQZLGUD7j4xA9FcslOljGLThjfAiEAsfLs1uqJy9O9pT1twkXdQDyQOFO88m4IUR3akYu63wUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwboUUn%2FXQJAE8f%2ByrcA3CnPlqRtirEaHNRQYbIkoH4Vg0ZEajNVPoqAc%2BAkin6mHd7oTwPHOj3rbWO2lWfV2iSCYAExSVGOv4lVysEhvXuEh0DQ3JeTZy%2Fa5p%2FZzCVzyPQPQx14g9w0gRCLKlpKy%2BprgEkaCZh4fMbWjXS457485y0iu1FLGyFuYcs%2F36OMHykEMNf%2FA%2BvdQe1lh%2Bbr%2BV4dnvARDqQPk7eqCVfM6%2F40UmvJ7IDLg3KdZDfK7j6hi%2BYiWboWYrmjJbWPiKkz%2FIvEkLnr9rfKGWZQCOmr2YEybGy%2F6VhlSARqi5CxVnfXghATFwwgwqV%2FbmoO8xCAHZ1GRYTZFJR9RL1J03HHAgmwdXuM3BHC9oJg0DU4MT%2B2EEdbK6mGC%2FtiiylbChsYXBdgqnwZcr0yNLvAcImIAjItmODF5Jt%2F5W%2F2dAmFqrdMcnrZdpil5Yt1Xr807i2DmEmrAB7wC%2FM4elRhKorcSUJ3brS5SfsZeBUr6C5anoYyqiWy6FS6VIyho8Jg65Um37uvZTU%2B9zKEOXpsOzkFRZ5WHd%2Byq8X%2BVMU0deezMOelUwEH3%2ByzUtBhm01cM8TjPJf6c%2Byf2bRSOqHVORc8016KyMvV0Tk3F7zDNTPp5IwAZAKtvAKSZZ1dvJOMOmAx74GOqUBFYHi2aPF76Zwrev32%2BqIu9JGmRv3mpfiCICd4uKeroilFU2Wk5wd7iPjI5qrU38XHm0VwvbGYP2sIsPUfoLRoTW3dOV6GwP9yBOFIQyqHmF5thlTyEZ1oT9w2I1d7Bu8jB2RTy5jng1T43lR1f57PLxG6WfnQihEHqhtBWza4PRay9AI%2BjI2tkUh6rl5mRYU3s%2BSZSTJ9vO8cJ10K0PQQP3TQzap&X-Amz-Signature=880f148613f2d7932817c798b44632fc885739f3aa9ec3ad6a9d2a1ec4322c12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3ZC5SF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDDFDrcfqd4llICD08OQZLGUD7j4xA9FcslOljGLThjfAiEAsfLs1uqJy9O9pT1twkXdQDyQOFO88m4IUR3akYu63wUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwboUUn%2FXQJAE8f%2ByrcA3CnPlqRtirEaHNRQYbIkoH4Vg0ZEajNVPoqAc%2BAkin6mHd7oTwPHOj3rbWO2lWfV2iSCYAExSVGOv4lVysEhvXuEh0DQ3JeTZy%2Fa5p%2FZzCVzyPQPQx14g9w0gRCLKlpKy%2BprgEkaCZh4fMbWjXS457485y0iu1FLGyFuYcs%2F36OMHykEMNf%2FA%2BvdQe1lh%2Bbr%2BV4dnvARDqQPk7eqCVfM6%2F40UmvJ7IDLg3KdZDfK7j6hi%2BYiWboWYrmjJbWPiKkz%2FIvEkLnr9rfKGWZQCOmr2YEybGy%2F6VhlSARqi5CxVnfXghATFwwgwqV%2FbmoO8xCAHZ1GRYTZFJR9RL1J03HHAgmwdXuM3BHC9oJg0DU4MT%2B2EEdbK6mGC%2FtiiylbChsYXBdgqnwZcr0yNLvAcImIAjItmODF5Jt%2F5W%2F2dAmFqrdMcnrZdpil5Yt1Xr807i2DmEmrAB7wC%2FM4elRhKorcSUJ3brS5SfsZeBUr6C5anoYyqiWy6FS6VIyho8Jg65Um37uvZTU%2B9zKEOXpsOzkFRZ5WHd%2Byq8X%2BVMU0deezMOelUwEH3%2ByzUtBhm01cM8TjPJf6c%2Byf2bRSOqHVORc8016KyMvV0Tk3F7zDNTPp5IwAZAKtvAKSZZ1dvJOMOmAx74GOqUBFYHi2aPF76Zwrev32%2BqIu9JGmRv3mpfiCICd4uKeroilFU2Wk5wd7iPjI5qrU38XHm0VwvbGYP2sIsPUfoLRoTW3dOV6GwP9yBOFIQyqHmF5thlTyEZ1oT9w2I1d7Bu8jB2RTy5jng1T43lR1f57PLxG6WfnQihEHqhtBWza4PRay9AI%2BjI2tkUh6rl5mRYU3s%2BSZSTJ9vO8cJ10K0PQQP3TQzap&X-Amz-Signature=bdf617065b558c352ae28fcdc513b425eff1eea029dec61e087b018e0d172d6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3ZC5SF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDDFDrcfqd4llICD08OQZLGUD7j4xA9FcslOljGLThjfAiEAsfLs1uqJy9O9pT1twkXdQDyQOFO88m4IUR3akYu63wUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwboUUn%2FXQJAE8f%2ByrcA3CnPlqRtirEaHNRQYbIkoH4Vg0ZEajNVPoqAc%2BAkin6mHd7oTwPHOj3rbWO2lWfV2iSCYAExSVGOv4lVysEhvXuEh0DQ3JeTZy%2Fa5p%2FZzCVzyPQPQx14g9w0gRCLKlpKy%2BprgEkaCZh4fMbWjXS457485y0iu1FLGyFuYcs%2F36OMHykEMNf%2FA%2BvdQe1lh%2Bbr%2BV4dnvARDqQPk7eqCVfM6%2F40UmvJ7IDLg3KdZDfK7j6hi%2BYiWboWYrmjJbWPiKkz%2FIvEkLnr9rfKGWZQCOmr2YEybGy%2F6VhlSARqi5CxVnfXghATFwwgwqV%2FbmoO8xCAHZ1GRYTZFJR9RL1J03HHAgmwdXuM3BHC9oJg0DU4MT%2B2EEdbK6mGC%2FtiiylbChsYXBdgqnwZcr0yNLvAcImIAjItmODF5Jt%2F5W%2F2dAmFqrdMcnrZdpil5Yt1Xr807i2DmEmrAB7wC%2FM4elRhKorcSUJ3brS5SfsZeBUr6C5anoYyqiWy6FS6VIyho8Jg65Um37uvZTU%2B9zKEOXpsOzkFRZ5WHd%2Byq8X%2BVMU0deezMOelUwEH3%2ByzUtBhm01cM8TjPJf6c%2Byf2bRSOqHVORc8016KyMvV0Tk3F7zDNTPp5IwAZAKtvAKSZZ1dvJOMOmAx74GOqUBFYHi2aPF76Zwrev32%2BqIu9JGmRv3mpfiCICd4uKeroilFU2Wk5wd7iPjI5qrU38XHm0VwvbGYP2sIsPUfoLRoTW3dOV6GwP9yBOFIQyqHmF5thlTyEZ1oT9w2I1d7Bu8jB2RTy5jng1T43lR1f57PLxG6WfnQihEHqhtBWza4PRay9AI%2BjI2tkUh6rl5mRYU3s%2BSZSTJ9vO8cJ10K0PQQP3TQzap&X-Amz-Signature=61d405cc33639cc51b90af8778490db24b718dbda3352275d4688a5141d162a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T3ZC5SF%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIDDFDrcfqd4llICD08OQZLGUD7j4xA9FcslOljGLThjfAiEAsfLs1uqJy9O9pT1twkXdQDyQOFO88m4IUR3akYu63wUqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwboUUn%2FXQJAE8f%2ByrcA3CnPlqRtirEaHNRQYbIkoH4Vg0ZEajNVPoqAc%2BAkin6mHd7oTwPHOj3rbWO2lWfV2iSCYAExSVGOv4lVysEhvXuEh0DQ3JeTZy%2Fa5p%2FZzCVzyPQPQx14g9w0gRCLKlpKy%2BprgEkaCZh4fMbWjXS457485y0iu1FLGyFuYcs%2F36OMHykEMNf%2FA%2BvdQe1lh%2Bbr%2BV4dnvARDqQPk7eqCVfM6%2F40UmvJ7IDLg3KdZDfK7j6hi%2BYiWboWYrmjJbWPiKkz%2FIvEkLnr9rfKGWZQCOmr2YEybGy%2F6VhlSARqi5CxVnfXghATFwwgwqV%2FbmoO8xCAHZ1GRYTZFJR9RL1J03HHAgmwdXuM3BHC9oJg0DU4MT%2B2EEdbK6mGC%2FtiiylbChsYXBdgqnwZcr0yNLvAcImIAjItmODF5Jt%2F5W%2F2dAmFqrdMcnrZdpil5Yt1Xr807i2DmEmrAB7wC%2FM4elRhKorcSUJ3brS5SfsZeBUr6C5anoYyqiWy6FS6VIyho8Jg65Um37uvZTU%2B9zKEOXpsOzkFRZ5WHd%2Byq8X%2BVMU0deezMOelUwEH3%2ByzUtBhm01cM8TjPJf6c%2Byf2bRSOqHVORc8016KyMvV0Tk3F7zDNTPp5IwAZAKtvAKSZZ1dvJOMOmAx74GOqUBFYHi2aPF76Zwrev32%2BqIu9JGmRv3mpfiCICd4uKeroilFU2Wk5wd7iPjI5qrU38XHm0VwvbGYP2sIsPUfoLRoTW3dOV6GwP9yBOFIQyqHmF5thlTyEZ1oT9w2I1d7Bu8jB2RTy5jng1T43lR1f57PLxG6WfnQihEHqhtBWza4PRay9AI%2BjI2tkUh6rl5mRYU3s%2BSZSTJ9vO8cJ10K0PQQP3TQzap&X-Amz-Signature=92ef99df8d49d62538351ccaef920ab5e0c40524d0d7ed913b3ae6bc1e9b8160&X-Amz-SignedHeaders=host&x-id=GetObject)
