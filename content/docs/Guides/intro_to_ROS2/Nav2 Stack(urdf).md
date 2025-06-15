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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXX27SK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDN%2FtXCf3DTOaETlaIO9HLBysNCSnbrz%2FCMNAd7xGjY%2BwIgRdjsPZjiVHC43MnPBk8m%2FKe6YoFFC13dhAqNMmDm11Eq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDP4WdLS7Ew3Zr1Yd0CrcA5VZrtobso9MMPrXHPC1bxmMhEVUR09JDiGusTq0L%2Fn%2BQrBx9BORmTmE3g49ckZBwUjCIPaTkGKrJbAnt4LxdFw%2FjhAJaV2yHvA7QTCPP0REtLvPL9MbBuvXHHsKcMO2gM%2Bay0Tz7XaEikKpcsrI5eJEVzLipFVFJfPE9L1Fshi%2BAPwQRBmvmsBg4l5U%2B84r8sNdD1sX%2BJtQ5uZ%2FhfndMU4K4wp8U39B%2FX19H0yXu3h5ThQFpM%2Fe9jFizk2raYr%2FgsskFvZCFQLYwlwYTaKYCbqDd2%2BEdb%2FwHqkiD7QoQ4Q%2Bl%2BDWj3NSWRFUABNQ4v4%2FNBnJWZSjGQNLoJiObx1CR2%2FJT3Nya%2FUkuzbNXe8SgpAbTOEnpk4QQO5VnAkKJj5Dqfd%2FGLZKpvJX2d4RJ8gPi45oSmw87bsTeH5GtrE2CE%2Fc7WxFC2LjeX9qQ9L%2Brh%2B2u%2BSawvoYVx%2FH%2BKNWvrlHmb1x9iTdNsp5wZNcSK%2Flx8mTlXwARIQMvAXi2hIWYLWa%2Fbs2Qx%2FF2zhgEnoQZVdd2mOcFDNWnOG3KZ8Xyuc86rkJJ00pzO34yh0OOG%2BS5dOWeUKfgEI8qgHAHaKoMAdnXtk8sy1SgHf1eERVZvlFCb9FSjHyqbPcOe5c7rePMJ6EvMIGOqUBQ5Yj6twdFFT7fYbMWbnTg5lXmBD2e0bMnAlMS5hpVW0MaTPBAsfEVWSyjdAb60RReyUQ8wEOgdG%2BlqDk27ptU6Hx125HBxui3Td6tESWsz34Fh5xBJM9j9e0k547flqOwAIMGWV3ZEpV3tGSM9s%2FOUcWLCHkzwNj%2B6bX8rcG4kXPimjrmjEf9uUL8nzxWD%2F46wVyZ4Bhcx2ettqNCvYR36Oza3pw&X-Amz-Signature=2a0a85bb0ea023f4514807400ad76568b352e093d87e018cfdb7574b2fde390a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXX27SK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDN%2FtXCf3DTOaETlaIO9HLBysNCSnbrz%2FCMNAd7xGjY%2BwIgRdjsPZjiVHC43MnPBk8m%2FKe6YoFFC13dhAqNMmDm11Eq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDP4WdLS7Ew3Zr1Yd0CrcA5VZrtobso9MMPrXHPC1bxmMhEVUR09JDiGusTq0L%2Fn%2BQrBx9BORmTmE3g49ckZBwUjCIPaTkGKrJbAnt4LxdFw%2FjhAJaV2yHvA7QTCPP0REtLvPL9MbBuvXHHsKcMO2gM%2Bay0Tz7XaEikKpcsrI5eJEVzLipFVFJfPE9L1Fshi%2BAPwQRBmvmsBg4l5U%2B84r8sNdD1sX%2BJtQ5uZ%2FhfndMU4K4wp8U39B%2FX19H0yXu3h5ThQFpM%2Fe9jFizk2raYr%2FgsskFvZCFQLYwlwYTaKYCbqDd2%2BEdb%2FwHqkiD7QoQ4Q%2Bl%2BDWj3NSWRFUABNQ4v4%2FNBnJWZSjGQNLoJiObx1CR2%2FJT3Nya%2FUkuzbNXe8SgpAbTOEnpk4QQO5VnAkKJj5Dqfd%2FGLZKpvJX2d4RJ8gPi45oSmw87bsTeH5GtrE2CE%2Fc7WxFC2LjeX9qQ9L%2Brh%2B2u%2BSawvoYVx%2FH%2BKNWvrlHmb1x9iTdNsp5wZNcSK%2Flx8mTlXwARIQMvAXi2hIWYLWa%2Fbs2Qx%2FF2zhgEnoQZVdd2mOcFDNWnOG3KZ8Xyuc86rkJJ00pzO34yh0OOG%2BS5dOWeUKfgEI8qgHAHaKoMAdnXtk8sy1SgHf1eERVZvlFCb9FSjHyqbPcOe5c7rePMJ6EvMIGOqUBQ5Yj6twdFFT7fYbMWbnTg5lXmBD2e0bMnAlMS5hpVW0MaTPBAsfEVWSyjdAb60RReyUQ8wEOgdG%2BlqDk27ptU6Hx125HBxui3Td6tESWsz34Fh5xBJM9j9e0k547flqOwAIMGWV3ZEpV3tGSM9s%2FOUcWLCHkzwNj%2B6bX8rcG4kXPimjrmjEf9uUL8nzxWD%2F46wVyZ4Bhcx2ettqNCvYR36Oza3pw&X-Amz-Signature=bfed60f453a25a21539e16345febc7cf371f8cc3c8d8f639f78aeda43af48278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXX27SK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDN%2FtXCf3DTOaETlaIO9HLBysNCSnbrz%2FCMNAd7xGjY%2BwIgRdjsPZjiVHC43MnPBk8m%2FKe6YoFFC13dhAqNMmDm11Eq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDP4WdLS7Ew3Zr1Yd0CrcA5VZrtobso9MMPrXHPC1bxmMhEVUR09JDiGusTq0L%2Fn%2BQrBx9BORmTmE3g49ckZBwUjCIPaTkGKrJbAnt4LxdFw%2FjhAJaV2yHvA7QTCPP0REtLvPL9MbBuvXHHsKcMO2gM%2Bay0Tz7XaEikKpcsrI5eJEVzLipFVFJfPE9L1Fshi%2BAPwQRBmvmsBg4l5U%2B84r8sNdD1sX%2BJtQ5uZ%2FhfndMU4K4wp8U39B%2FX19H0yXu3h5ThQFpM%2Fe9jFizk2raYr%2FgsskFvZCFQLYwlwYTaKYCbqDd2%2BEdb%2FwHqkiD7QoQ4Q%2Bl%2BDWj3NSWRFUABNQ4v4%2FNBnJWZSjGQNLoJiObx1CR2%2FJT3Nya%2FUkuzbNXe8SgpAbTOEnpk4QQO5VnAkKJj5Dqfd%2FGLZKpvJX2d4RJ8gPi45oSmw87bsTeH5GtrE2CE%2Fc7WxFC2LjeX9qQ9L%2Brh%2B2u%2BSawvoYVx%2FH%2BKNWvrlHmb1x9iTdNsp5wZNcSK%2Flx8mTlXwARIQMvAXi2hIWYLWa%2Fbs2Qx%2FF2zhgEnoQZVdd2mOcFDNWnOG3KZ8Xyuc86rkJJ00pzO34yh0OOG%2BS5dOWeUKfgEI8qgHAHaKoMAdnXtk8sy1SgHf1eERVZvlFCb9FSjHyqbPcOe5c7rePMJ6EvMIGOqUBQ5Yj6twdFFT7fYbMWbnTg5lXmBD2e0bMnAlMS5hpVW0MaTPBAsfEVWSyjdAb60RReyUQ8wEOgdG%2BlqDk27ptU6Hx125HBxui3Td6tESWsz34Fh5xBJM9j9e0k547flqOwAIMGWV3ZEpV3tGSM9s%2FOUcWLCHkzwNj%2B6bX8rcG4kXPimjrmjEf9uUL8nzxWD%2F46wVyZ4Bhcx2ettqNCvYR36Oza3pw&X-Amz-Signature=a1303276be6cbeb70d870e6df7efef7993dfa5fc1800adedaf296c5603e6742f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXX27SK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDN%2FtXCf3DTOaETlaIO9HLBysNCSnbrz%2FCMNAd7xGjY%2BwIgRdjsPZjiVHC43MnPBk8m%2FKe6YoFFC13dhAqNMmDm11Eq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDP4WdLS7Ew3Zr1Yd0CrcA5VZrtobso9MMPrXHPC1bxmMhEVUR09JDiGusTq0L%2Fn%2BQrBx9BORmTmE3g49ckZBwUjCIPaTkGKrJbAnt4LxdFw%2FjhAJaV2yHvA7QTCPP0REtLvPL9MbBuvXHHsKcMO2gM%2Bay0Tz7XaEikKpcsrI5eJEVzLipFVFJfPE9L1Fshi%2BAPwQRBmvmsBg4l5U%2B84r8sNdD1sX%2BJtQ5uZ%2FhfndMU4K4wp8U39B%2FX19H0yXu3h5ThQFpM%2Fe9jFizk2raYr%2FgsskFvZCFQLYwlwYTaKYCbqDd2%2BEdb%2FwHqkiD7QoQ4Q%2Bl%2BDWj3NSWRFUABNQ4v4%2FNBnJWZSjGQNLoJiObx1CR2%2FJT3Nya%2FUkuzbNXe8SgpAbTOEnpk4QQO5VnAkKJj5Dqfd%2FGLZKpvJX2d4RJ8gPi45oSmw87bsTeH5GtrE2CE%2Fc7WxFC2LjeX9qQ9L%2Brh%2B2u%2BSawvoYVx%2FH%2BKNWvrlHmb1x9iTdNsp5wZNcSK%2Flx8mTlXwARIQMvAXi2hIWYLWa%2Fbs2Qx%2FF2zhgEnoQZVdd2mOcFDNWnOG3KZ8Xyuc86rkJJ00pzO34yh0OOG%2BS5dOWeUKfgEI8qgHAHaKoMAdnXtk8sy1SgHf1eERVZvlFCb9FSjHyqbPcOe5c7rePMJ6EvMIGOqUBQ5Yj6twdFFT7fYbMWbnTg5lXmBD2e0bMnAlMS5hpVW0MaTPBAsfEVWSyjdAb60RReyUQ8wEOgdG%2BlqDk27ptU6Hx125HBxui3Td6tESWsz34Fh5xBJM9j9e0k547flqOwAIMGWV3ZEpV3tGSM9s%2FOUcWLCHkzwNj%2B6bX8rcG4kXPimjrmjEf9uUL8nzxWD%2F46wVyZ4Bhcx2ettqNCvYR36Oza3pw&X-Amz-Signature=a36f9af293e0e3226e40bcdedb7f152de98c62ef4faa15b0e3d476fe69a550ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXX27SK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDN%2FtXCf3DTOaETlaIO9HLBysNCSnbrz%2FCMNAd7xGjY%2BwIgRdjsPZjiVHC43MnPBk8m%2FKe6YoFFC13dhAqNMmDm11Eq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDP4WdLS7Ew3Zr1Yd0CrcA5VZrtobso9MMPrXHPC1bxmMhEVUR09JDiGusTq0L%2Fn%2BQrBx9BORmTmE3g49ckZBwUjCIPaTkGKrJbAnt4LxdFw%2FjhAJaV2yHvA7QTCPP0REtLvPL9MbBuvXHHsKcMO2gM%2Bay0Tz7XaEikKpcsrI5eJEVzLipFVFJfPE9L1Fshi%2BAPwQRBmvmsBg4l5U%2B84r8sNdD1sX%2BJtQ5uZ%2FhfndMU4K4wp8U39B%2FX19H0yXu3h5ThQFpM%2Fe9jFizk2raYr%2FgsskFvZCFQLYwlwYTaKYCbqDd2%2BEdb%2FwHqkiD7QoQ4Q%2Bl%2BDWj3NSWRFUABNQ4v4%2FNBnJWZSjGQNLoJiObx1CR2%2FJT3Nya%2FUkuzbNXe8SgpAbTOEnpk4QQO5VnAkKJj5Dqfd%2FGLZKpvJX2d4RJ8gPi45oSmw87bsTeH5GtrE2CE%2Fc7WxFC2LjeX9qQ9L%2Brh%2B2u%2BSawvoYVx%2FH%2BKNWvrlHmb1x9iTdNsp5wZNcSK%2Flx8mTlXwARIQMvAXi2hIWYLWa%2Fbs2Qx%2FF2zhgEnoQZVdd2mOcFDNWnOG3KZ8Xyuc86rkJJ00pzO34yh0OOG%2BS5dOWeUKfgEI8qgHAHaKoMAdnXtk8sy1SgHf1eERVZvlFCb9FSjHyqbPcOe5c7rePMJ6EvMIGOqUBQ5Yj6twdFFT7fYbMWbnTg5lXmBD2e0bMnAlMS5hpVW0MaTPBAsfEVWSyjdAb60RReyUQ8wEOgdG%2BlqDk27ptU6Hx125HBxui3Td6tESWsz34Fh5xBJM9j9e0k547flqOwAIMGWV3ZEpV3tGSM9s%2FOUcWLCHkzwNj%2B6bX8rcG4kXPimjrmjEf9uUL8nzxWD%2F46wVyZ4Bhcx2ettqNCvYR36Oza3pw&X-Amz-Signature=930e75dbc1326ffd67cf79d7b4a1f2701d353554804907705f9e9b012e84d5f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPXX27SK%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDN%2FtXCf3DTOaETlaIO9HLBysNCSnbrz%2FCMNAd7xGjY%2BwIgRdjsPZjiVHC43MnPBk8m%2FKe6YoFFC13dhAqNMmDm11Eq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDP4WdLS7Ew3Zr1Yd0CrcA5VZrtobso9MMPrXHPC1bxmMhEVUR09JDiGusTq0L%2Fn%2BQrBx9BORmTmE3g49ckZBwUjCIPaTkGKrJbAnt4LxdFw%2FjhAJaV2yHvA7QTCPP0REtLvPL9MbBuvXHHsKcMO2gM%2Bay0Tz7XaEikKpcsrI5eJEVzLipFVFJfPE9L1Fshi%2BAPwQRBmvmsBg4l5U%2B84r8sNdD1sX%2BJtQ5uZ%2FhfndMU4K4wp8U39B%2FX19H0yXu3h5ThQFpM%2Fe9jFizk2raYr%2FgsskFvZCFQLYwlwYTaKYCbqDd2%2BEdb%2FwHqkiD7QoQ4Q%2Bl%2BDWj3NSWRFUABNQ4v4%2FNBnJWZSjGQNLoJiObx1CR2%2FJT3Nya%2FUkuzbNXe8SgpAbTOEnpk4QQO5VnAkKJj5Dqfd%2FGLZKpvJX2d4RJ8gPi45oSmw87bsTeH5GtrE2CE%2Fc7WxFC2LjeX9qQ9L%2Brh%2B2u%2BSawvoYVx%2FH%2BKNWvrlHmb1x9iTdNsp5wZNcSK%2Flx8mTlXwARIQMvAXi2hIWYLWa%2Fbs2Qx%2FF2zhgEnoQZVdd2mOcFDNWnOG3KZ8Xyuc86rkJJ00pzO34yh0OOG%2BS5dOWeUKfgEI8qgHAHaKoMAdnXtk8sy1SgHf1eERVZvlFCb9FSjHyqbPcOe5c7rePMJ6EvMIGOqUBQ5Yj6twdFFT7fYbMWbnTg5lXmBD2e0bMnAlMS5hpVW0MaTPBAsfEVWSyjdAb60RReyUQ8wEOgdG%2BlqDk27ptU6Hx125HBxui3Td6tESWsz34Fh5xBJM9j9e0k547flqOwAIMGWV3ZEpV3tGSM9s%2FOUcWLCHkzwNj%2B6bX8rcG4kXPimjrmjEf9uUL8nzxWD%2F46wVyZ4Bhcx2ettqNCvYR36Oza3pw&X-Amz-Signature=2031b1dc59cf6a28a2c1fd2513aa8f3d9f6fb58c300c34a1662844ecb1d8aa66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
