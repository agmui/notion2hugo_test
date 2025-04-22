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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FUN6HPC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDKxMjwimlLtyyRiV1raM7ACBEJ1NAPG0QjpMHhx0z5DAIgOjX19WduB9QlSeCCZlPjVIJ0Y0y1WEfnTf4ZarIMWGIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc5k1f8KtVqTkAQ1yrcA1IamAcZ%2Bo1JdhM5wSb3AQiFM2tcnD5jB72AgWLY4uauhndKoWW%2BGwNduVA5x%2B%2ByFVMv9RYBmwmTUxDGvM74HvY9j2cga048k2xElyrChqVX186isHAhpNbevQQl1AT4gSI56IuWGGZ8VbmIF%2BkfBJyyWp%2FHxTz3T5CLsKeBkYL0%2B6I0%2Bgw85OJuARfnl19BwLRdsnS8GhH6Mi3X%2BKHHd2FSWjz0u7HUZdUOG%2FHLAMvm4gendTULl0MgPHBn0GI1NZFhZ8mvScNgGR%2BDB4PNJ2l9vhhdXAzczJ1vU9r4p1FSXNamE4w8Nt1hOM6F56N00KtijlnJwqogHAjBAF8ZPpZu%2FL7Zx2CZzdpTevXNhLRh8BpiWzHPXCvgs9Eu7KofecfpsENUHq02ESxfnCXtlNTidjDT6wXJ%2BobkQ%2FTnEdUWmzcfwdO3JhoMs8OnBRE4CflVU%2BuecQBPJejrxcTGK6tOirKD5sicTYBSI2SdMFCJbJYZllnYLhHVp4XxdwBFWDogbtEzJTihVQ2EXHWAORmpb2RCdnCxvzpJNDKI4Bh8e%2BBMsq4UHEm7tm2lshaybiN9CNr%2FKHerTXalGGQqJzqGUauD88iGslG2FKbcA8orv4reffQuT7Ze5ogMMP%2FwnMAGOqUBu0PScftwgLr9Yvi6pTxCfSAW4TjmDpeGMx1C6mHGwRmQMRCgY%2BzyPWO19UIgQw%2B%2Fuifu4TQVf%2F64TPenIZKIiKVORnfaD4N1iI1m7f%2F2FkOGTHxNkp0axEYgZvnRps%2BLZcxwOoe54mmmtpkD1rEdo9MRhzszVujiOPu2YOoeaoE4aDGQzaISkhbRwlUUh7CuIKbYBtkcj1Djkasg4w6FDkpAs7hV&X-Amz-Signature=06effccd00936288cc8842e96eeb73ab8125004c6bc60c076e06cb51f8520a92&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FUN6HPC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDKxMjwimlLtyyRiV1raM7ACBEJ1NAPG0QjpMHhx0z5DAIgOjX19WduB9QlSeCCZlPjVIJ0Y0y1WEfnTf4ZarIMWGIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc5k1f8KtVqTkAQ1yrcA1IamAcZ%2Bo1JdhM5wSb3AQiFM2tcnD5jB72AgWLY4uauhndKoWW%2BGwNduVA5x%2B%2ByFVMv9RYBmwmTUxDGvM74HvY9j2cga048k2xElyrChqVX186isHAhpNbevQQl1AT4gSI56IuWGGZ8VbmIF%2BkfBJyyWp%2FHxTz3T5CLsKeBkYL0%2B6I0%2Bgw85OJuARfnl19BwLRdsnS8GhH6Mi3X%2BKHHd2FSWjz0u7HUZdUOG%2FHLAMvm4gendTULl0MgPHBn0GI1NZFhZ8mvScNgGR%2BDB4PNJ2l9vhhdXAzczJ1vU9r4p1FSXNamE4w8Nt1hOM6F56N00KtijlnJwqogHAjBAF8ZPpZu%2FL7Zx2CZzdpTevXNhLRh8BpiWzHPXCvgs9Eu7KofecfpsENUHq02ESxfnCXtlNTidjDT6wXJ%2BobkQ%2FTnEdUWmzcfwdO3JhoMs8OnBRE4CflVU%2BuecQBPJejrxcTGK6tOirKD5sicTYBSI2SdMFCJbJYZllnYLhHVp4XxdwBFWDogbtEzJTihVQ2EXHWAORmpb2RCdnCxvzpJNDKI4Bh8e%2BBMsq4UHEm7tm2lshaybiN9CNr%2FKHerTXalGGQqJzqGUauD88iGslG2FKbcA8orv4reffQuT7Ze5ogMMP%2FwnMAGOqUBu0PScftwgLr9Yvi6pTxCfSAW4TjmDpeGMx1C6mHGwRmQMRCgY%2BzyPWO19UIgQw%2B%2Fuifu4TQVf%2F64TPenIZKIiKVORnfaD4N1iI1m7f%2F2FkOGTHxNkp0axEYgZvnRps%2BLZcxwOoe54mmmtpkD1rEdo9MRhzszVujiOPu2YOoeaoE4aDGQzaISkhbRwlUUh7CuIKbYBtkcj1Djkasg4w6FDkpAs7hV&X-Amz-Signature=4471995fc1bab7e37e3c14c38dcb4721c344fc3573d7fc66c59f3e0728948e05&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FUN6HPC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDKxMjwimlLtyyRiV1raM7ACBEJ1NAPG0QjpMHhx0z5DAIgOjX19WduB9QlSeCCZlPjVIJ0Y0y1WEfnTf4ZarIMWGIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc5k1f8KtVqTkAQ1yrcA1IamAcZ%2Bo1JdhM5wSb3AQiFM2tcnD5jB72AgWLY4uauhndKoWW%2BGwNduVA5x%2B%2ByFVMv9RYBmwmTUxDGvM74HvY9j2cga048k2xElyrChqVX186isHAhpNbevQQl1AT4gSI56IuWGGZ8VbmIF%2BkfBJyyWp%2FHxTz3T5CLsKeBkYL0%2B6I0%2Bgw85OJuARfnl19BwLRdsnS8GhH6Mi3X%2BKHHd2FSWjz0u7HUZdUOG%2FHLAMvm4gendTULl0MgPHBn0GI1NZFhZ8mvScNgGR%2BDB4PNJ2l9vhhdXAzczJ1vU9r4p1FSXNamE4w8Nt1hOM6F56N00KtijlnJwqogHAjBAF8ZPpZu%2FL7Zx2CZzdpTevXNhLRh8BpiWzHPXCvgs9Eu7KofecfpsENUHq02ESxfnCXtlNTidjDT6wXJ%2BobkQ%2FTnEdUWmzcfwdO3JhoMs8OnBRE4CflVU%2BuecQBPJejrxcTGK6tOirKD5sicTYBSI2SdMFCJbJYZllnYLhHVp4XxdwBFWDogbtEzJTihVQ2EXHWAORmpb2RCdnCxvzpJNDKI4Bh8e%2BBMsq4UHEm7tm2lshaybiN9CNr%2FKHerTXalGGQqJzqGUauD88iGslG2FKbcA8orv4reffQuT7Ze5ogMMP%2FwnMAGOqUBu0PScftwgLr9Yvi6pTxCfSAW4TjmDpeGMx1C6mHGwRmQMRCgY%2BzyPWO19UIgQw%2B%2Fuifu4TQVf%2F64TPenIZKIiKVORnfaD4N1iI1m7f%2F2FkOGTHxNkp0axEYgZvnRps%2BLZcxwOoe54mmmtpkD1rEdo9MRhzszVujiOPu2YOoeaoE4aDGQzaISkhbRwlUUh7CuIKbYBtkcj1Djkasg4w6FDkpAs7hV&X-Amz-Signature=7e28bda6a9572cbda9b330699df9d0b6b45b5f81693adeb05da52c50d5eccb3c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FUN6HPC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDKxMjwimlLtyyRiV1raM7ACBEJ1NAPG0QjpMHhx0z5DAIgOjX19WduB9QlSeCCZlPjVIJ0Y0y1WEfnTf4ZarIMWGIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc5k1f8KtVqTkAQ1yrcA1IamAcZ%2Bo1JdhM5wSb3AQiFM2tcnD5jB72AgWLY4uauhndKoWW%2BGwNduVA5x%2B%2ByFVMv9RYBmwmTUxDGvM74HvY9j2cga048k2xElyrChqVX186isHAhpNbevQQl1AT4gSI56IuWGGZ8VbmIF%2BkfBJyyWp%2FHxTz3T5CLsKeBkYL0%2B6I0%2Bgw85OJuARfnl19BwLRdsnS8GhH6Mi3X%2BKHHd2FSWjz0u7HUZdUOG%2FHLAMvm4gendTULl0MgPHBn0GI1NZFhZ8mvScNgGR%2BDB4PNJ2l9vhhdXAzczJ1vU9r4p1FSXNamE4w8Nt1hOM6F56N00KtijlnJwqogHAjBAF8ZPpZu%2FL7Zx2CZzdpTevXNhLRh8BpiWzHPXCvgs9Eu7KofecfpsENUHq02ESxfnCXtlNTidjDT6wXJ%2BobkQ%2FTnEdUWmzcfwdO3JhoMs8OnBRE4CflVU%2BuecQBPJejrxcTGK6tOirKD5sicTYBSI2SdMFCJbJYZllnYLhHVp4XxdwBFWDogbtEzJTihVQ2EXHWAORmpb2RCdnCxvzpJNDKI4Bh8e%2BBMsq4UHEm7tm2lshaybiN9CNr%2FKHerTXalGGQqJzqGUauD88iGslG2FKbcA8orv4reffQuT7Ze5ogMMP%2FwnMAGOqUBu0PScftwgLr9Yvi6pTxCfSAW4TjmDpeGMx1C6mHGwRmQMRCgY%2BzyPWO19UIgQw%2B%2Fuifu4TQVf%2F64TPenIZKIiKVORnfaD4N1iI1m7f%2F2FkOGTHxNkp0axEYgZvnRps%2BLZcxwOoe54mmmtpkD1rEdo9MRhzszVujiOPu2YOoeaoE4aDGQzaISkhbRwlUUh7CuIKbYBtkcj1Djkasg4w6FDkpAs7hV&X-Amz-Signature=f7bd11c98313022faeb9744f20a954b7b1755e9958d7b19bb3a54ec8faecc86a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FUN6HPC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDKxMjwimlLtyyRiV1raM7ACBEJ1NAPG0QjpMHhx0z5DAIgOjX19WduB9QlSeCCZlPjVIJ0Y0y1WEfnTf4ZarIMWGIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc5k1f8KtVqTkAQ1yrcA1IamAcZ%2Bo1JdhM5wSb3AQiFM2tcnD5jB72AgWLY4uauhndKoWW%2BGwNduVA5x%2B%2ByFVMv9RYBmwmTUxDGvM74HvY9j2cga048k2xElyrChqVX186isHAhpNbevQQl1AT4gSI56IuWGGZ8VbmIF%2BkfBJyyWp%2FHxTz3T5CLsKeBkYL0%2B6I0%2Bgw85OJuARfnl19BwLRdsnS8GhH6Mi3X%2BKHHd2FSWjz0u7HUZdUOG%2FHLAMvm4gendTULl0MgPHBn0GI1NZFhZ8mvScNgGR%2BDB4PNJ2l9vhhdXAzczJ1vU9r4p1FSXNamE4w8Nt1hOM6F56N00KtijlnJwqogHAjBAF8ZPpZu%2FL7Zx2CZzdpTevXNhLRh8BpiWzHPXCvgs9Eu7KofecfpsENUHq02ESxfnCXtlNTidjDT6wXJ%2BobkQ%2FTnEdUWmzcfwdO3JhoMs8OnBRE4CflVU%2BuecQBPJejrxcTGK6tOirKD5sicTYBSI2SdMFCJbJYZllnYLhHVp4XxdwBFWDogbtEzJTihVQ2EXHWAORmpb2RCdnCxvzpJNDKI4Bh8e%2BBMsq4UHEm7tm2lshaybiN9CNr%2FKHerTXalGGQqJzqGUauD88iGslG2FKbcA8orv4reffQuT7Ze5ogMMP%2FwnMAGOqUBu0PScftwgLr9Yvi6pTxCfSAW4TjmDpeGMx1C6mHGwRmQMRCgY%2BzyPWO19UIgQw%2B%2Fuifu4TQVf%2F64TPenIZKIiKVORnfaD4N1iI1m7f%2F2FkOGTHxNkp0axEYgZvnRps%2BLZcxwOoe54mmmtpkD1rEdo9MRhzszVujiOPu2YOoeaoE4aDGQzaISkhbRwlUUh7CuIKbYBtkcj1Djkasg4w6FDkpAs7hV&X-Amz-Signature=2d0d3e569fd267f7c298a762965d3ad054c56c33a919a9165c1a4410cb84e7ed&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FUN6HPC%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T070924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQDKxMjwimlLtyyRiV1raM7ACBEJ1NAPG0QjpMHhx0z5DAIgOjX19WduB9QlSeCCZlPjVIJ0Y0y1WEfnTf4ZarIMWGIqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHc5k1f8KtVqTkAQ1yrcA1IamAcZ%2Bo1JdhM5wSb3AQiFM2tcnD5jB72AgWLY4uauhndKoWW%2BGwNduVA5x%2B%2ByFVMv9RYBmwmTUxDGvM74HvY9j2cga048k2xElyrChqVX186isHAhpNbevQQl1AT4gSI56IuWGGZ8VbmIF%2BkfBJyyWp%2FHxTz3T5CLsKeBkYL0%2B6I0%2Bgw85OJuARfnl19BwLRdsnS8GhH6Mi3X%2BKHHd2FSWjz0u7HUZdUOG%2FHLAMvm4gendTULl0MgPHBn0GI1NZFhZ8mvScNgGR%2BDB4PNJ2l9vhhdXAzczJ1vU9r4p1FSXNamE4w8Nt1hOM6F56N00KtijlnJwqogHAjBAF8ZPpZu%2FL7Zx2CZzdpTevXNhLRh8BpiWzHPXCvgs9Eu7KofecfpsENUHq02ESxfnCXtlNTidjDT6wXJ%2BobkQ%2FTnEdUWmzcfwdO3JhoMs8OnBRE4CflVU%2BuecQBPJejrxcTGK6tOirKD5sicTYBSI2SdMFCJbJYZllnYLhHVp4XxdwBFWDogbtEzJTihVQ2EXHWAORmpb2RCdnCxvzpJNDKI4Bh8e%2BBMsq4UHEm7tm2lshaybiN9CNr%2FKHerTXalGGQqJzqGUauD88iGslG2FKbcA8orv4reffQuT7Ze5ogMMP%2FwnMAGOqUBu0PScftwgLr9Yvi6pTxCfSAW4TjmDpeGMx1C6mHGwRmQMRCgY%2BzyPWO19UIgQw%2B%2Fuifu4TQVf%2F64TPenIZKIiKVORnfaD4N1iI1m7f%2F2FkOGTHxNkp0axEYgZvnRps%2BLZcxwOoe54mmmtpkD1rEdo9MRhzszVujiOPu2YOoeaoE4aDGQzaISkhbRwlUUh7CuIKbYBtkcj1Djkasg4w6FDkpAs7hV&X-Amz-Signature=6a00f2076e27d188d06dd6974a146ffecc8e0effa41714fdd1f2c5e9f88346df&X-Amz-SignedHeaders=host&x-id=GetObject)
