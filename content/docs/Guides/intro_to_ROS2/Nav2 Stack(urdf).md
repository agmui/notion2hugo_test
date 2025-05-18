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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHR2FL7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8qG9fv7DR7%2FwUyVwHJcVNMPTiGn29O6X2g6VHsvoszAiB9KQ%2FFrH3Cx4uzh9Fm8A6HwrobmgHMipO0WVlJKJ1xzCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMbW4ljbsD2NJK62TmKtwDxZWC4sGo9hJ0bkzaSh%2BTDURo6FLwEsUbPofyhUnHAU0p8xhNnSvDLSyJpRTWt42%2Bi%2BydNCzd1LbGPO2LIfhEDEi18rtNQYNfYOhi3YMfL4iMPb3dkEsBc7FXn8L3FkbkUSAplNB8itY9dAknuWqXKANTsX0JWrIpVprDC0BQWWNLFtNlrFC6UxVeXvW4x54HwUn17d6WlVOkXNpHOkLh7shRDTjP1h%2F89M87vY6JVGAJ%2FxLkp%2FOt6VWRv%2BqsYedW%2BUcJ8GZRF9a3KWzSoTzvdH4li4bnY5yeeDMP1uixpAKhB4o7uF70meCU%2FTiO13MugxBYYn3TrySZwaSCgY9XJ63AgSzSUqtFVf%2BlIMCql5FKb9eH34AyvNNgjEnWfvIXRilyS8gT6L7kEFi8Sc77sVOVYz9v5EeBjttAom00RNWMf7yANYPaPaeKWylOF3%2FL5wk5n%2Bn8K6W1juuQRSPsikajbEHqBTcpOuSQjpzlL975ZxktoAhAsc%2FJl15uw4b7jyUD%2B%2FO7sz9dHDNa7PeoC%2BJxaCCF4CsIsFaGfxTTFgJ7aXLNM2K253U%2BVq3Pgyb21TJ%2FZrS1uYfiGZB1wMeXx1I2IefMm37470P5H21Ub1jHH%2F8aszEg8UbpkmkwgP2lwQY6pgG0cAIqmtZYzIOWj02%2FSBXLjEDsrT1h%2F5ulLTmXOMbW2JLrED%2B%2F03ZINFw4Obnp4sra0jkrMuWx3OpEiK826BG22fiSk5YWnIGyg9lYNC9ifeqSYSiAcDUBERahHrxiO%2FC1NUS3%2B4pI2W6T4AeewtqPJpO6Zzyk6LgT1uh7hF%2FdRBbJTWsTSZafQl23huImGO1vI5%2BoTh2U6FoiD5ZhLpZ0IkgghAyD&X-Amz-Signature=9eacdee028a40b25909e158d3e9cafeeba07bbcc61e01d2ef76c1a6e7455c56a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHR2FL7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8qG9fv7DR7%2FwUyVwHJcVNMPTiGn29O6X2g6VHsvoszAiB9KQ%2FFrH3Cx4uzh9Fm8A6HwrobmgHMipO0WVlJKJ1xzCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMbW4ljbsD2NJK62TmKtwDxZWC4sGo9hJ0bkzaSh%2BTDURo6FLwEsUbPofyhUnHAU0p8xhNnSvDLSyJpRTWt42%2Bi%2BydNCzd1LbGPO2LIfhEDEi18rtNQYNfYOhi3YMfL4iMPb3dkEsBc7FXn8L3FkbkUSAplNB8itY9dAknuWqXKANTsX0JWrIpVprDC0BQWWNLFtNlrFC6UxVeXvW4x54HwUn17d6WlVOkXNpHOkLh7shRDTjP1h%2F89M87vY6JVGAJ%2FxLkp%2FOt6VWRv%2BqsYedW%2BUcJ8GZRF9a3KWzSoTzvdH4li4bnY5yeeDMP1uixpAKhB4o7uF70meCU%2FTiO13MugxBYYn3TrySZwaSCgY9XJ63AgSzSUqtFVf%2BlIMCql5FKb9eH34AyvNNgjEnWfvIXRilyS8gT6L7kEFi8Sc77sVOVYz9v5EeBjttAom00RNWMf7yANYPaPaeKWylOF3%2FL5wk5n%2Bn8K6W1juuQRSPsikajbEHqBTcpOuSQjpzlL975ZxktoAhAsc%2FJl15uw4b7jyUD%2B%2FO7sz9dHDNa7PeoC%2BJxaCCF4CsIsFaGfxTTFgJ7aXLNM2K253U%2BVq3Pgyb21TJ%2FZrS1uYfiGZB1wMeXx1I2IefMm37470P5H21Ub1jHH%2F8aszEg8UbpkmkwgP2lwQY6pgG0cAIqmtZYzIOWj02%2FSBXLjEDsrT1h%2F5ulLTmXOMbW2JLrED%2B%2F03ZINFw4Obnp4sra0jkrMuWx3OpEiK826BG22fiSk5YWnIGyg9lYNC9ifeqSYSiAcDUBERahHrxiO%2FC1NUS3%2B4pI2W6T4AeewtqPJpO6Zzyk6LgT1uh7hF%2FdRBbJTWsTSZafQl23huImGO1vI5%2BoTh2U6FoiD5ZhLpZ0IkgghAyD&X-Amz-Signature=e4661b0d8eee49233cbcb6855be8d3c02a2e853f84cba34daabe13b03f5271da&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHR2FL7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8qG9fv7DR7%2FwUyVwHJcVNMPTiGn29O6X2g6VHsvoszAiB9KQ%2FFrH3Cx4uzh9Fm8A6HwrobmgHMipO0WVlJKJ1xzCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMbW4ljbsD2NJK62TmKtwDxZWC4sGo9hJ0bkzaSh%2BTDURo6FLwEsUbPofyhUnHAU0p8xhNnSvDLSyJpRTWt42%2Bi%2BydNCzd1LbGPO2LIfhEDEi18rtNQYNfYOhi3YMfL4iMPb3dkEsBc7FXn8L3FkbkUSAplNB8itY9dAknuWqXKANTsX0JWrIpVprDC0BQWWNLFtNlrFC6UxVeXvW4x54HwUn17d6WlVOkXNpHOkLh7shRDTjP1h%2F89M87vY6JVGAJ%2FxLkp%2FOt6VWRv%2BqsYedW%2BUcJ8GZRF9a3KWzSoTzvdH4li4bnY5yeeDMP1uixpAKhB4o7uF70meCU%2FTiO13MugxBYYn3TrySZwaSCgY9XJ63AgSzSUqtFVf%2BlIMCql5FKb9eH34AyvNNgjEnWfvIXRilyS8gT6L7kEFi8Sc77sVOVYz9v5EeBjttAom00RNWMf7yANYPaPaeKWylOF3%2FL5wk5n%2Bn8K6W1juuQRSPsikajbEHqBTcpOuSQjpzlL975ZxktoAhAsc%2FJl15uw4b7jyUD%2B%2FO7sz9dHDNa7PeoC%2BJxaCCF4CsIsFaGfxTTFgJ7aXLNM2K253U%2BVq3Pgyb21TJ%2FZrS1uYfiGZB1wMeXx1I2IefMm37470P5H21Ub1jHH%2F8aszEg8UbpkmkwgP2lwQY6pgG0cAIqmtZYzIOWj02%2FSBXLjEDsrT1h%2F5ulLTmXOMbW2JLrED%2B%2F03ZINFw4Obnp4sra0jkrMuWx3OpEiK826BG22fiSk5YWnIGyg9lYNC9ifeqSYSiAcDUBERahHrxiO%2FC1NUS3%2B4pI2W6T4AeewtqPJpO6Zzyk6LgT1uh7hF%2FdRBbJTWsTSZafQl23huImGO1vI5%2BoTh2U6FoiD5ZhLpZ0IkgghAyD&X-Amz-Signature=cc18275644b2c01621eaa8467f8369eafddaeb2fe547ce1309ae66b6e6a6e5b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHR2FL7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8qG9fv7DR7%2FwUyVwHJcVNMPTiGn29O6X2g6VHsvoszAiB9KQ%2FFrH3Cx4uzh9Fm8A6HwrobmgHMipO0WVlJKJ1xzCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMbW4ljbsD2NJK62TmKtwDxZWC4sGo9hJ0bkzaSh%2BTDURo6FLwEsUbPofyhUnHAU0p8xhNnSvDLSyJpRTWt42%2Bi%2BydNCzd1LbGPO2LIfhEDEi18rtNQYNfYOhi3YMfL4iMPb3dkEsBc7FXn8L3FkbkUSAplNB8itY9dAknuWqXKANTsX0JWrIpVprDC0BQWWNLFtNlrFC6UxVeXvW4x54HwUn17d6WlVOkXNpHOkLh7shRDTjP1h%2F89M87vY6JVGAJ%2FxLkp%2FOt6VWRv%2BqsYedW%2BUcJ8GZRF9a3KWzSoTzvdH4li4bnY5yeeDMP1uixpAKhB4o7uF70meCU%2FTiO13MugxBYYn3TrySZwaSCgY9XJ63AgSzSUqtFVf%2BlIMCql5FKb9eH34AyvNNgjEnWfvIXRilyS8gT6L7kEFi8Sc77sVOVYz9v5EeBjttAom00RNWMf7yANYPaPaeKWylOF3%2FL5wk5n%2Bn8K6W1juuQRSPsikajbEHqBTcpOuSQjpzlL975ZxktoAhAsc%2FJl15uw4b7jyUD%2B%2FO7sz9dHDNa7PeoC%2BJxaCCF4CsIsFaGfxTTFgJ7aXLNM2K253U%2BVq3Pgyb21TJ%2FZrS1uYfiGZB1wMeXx1I2IefMm37470P5H21Ub1jHH%2F8aszEg8UbpkmkwgP2lwQY6pgG0cAIqmtZYzIOWj02%2FSBXLjEDsrT1h%2F5ulLTmXOMbW2JLrED%2B%2F03ZINFw4Obnp4sra0jkrMuWx3OpEiK826BG22fiSk5YWnIGyg9lYNC9ifeqSYSiAcDUBERahHrxiO%2FC1NUS3%2B4pI2W6T4AeewtqPJpO6Zzyk6LgT1uh7hF%2FdRBbJTWsTSZafQl23huImGO1vI5%2BoTh2U6FoiD5ZhLpZ0IkgghAyD&X-Amz-Signature=efb8a25c4ab0b8f328c6acb38e665245edf08176e29daa769e834cc2e0ab8bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHR2FL7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8qG9fv7DR7%2FwUyVwHJcVNMPTiGn29O6X2g6VHsvoszAiB9KQ%2FFrH3Cx4uzh9Fm8A6HwrobmgHMipO0WVlJKJ1xzCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMbW4ljbsD2NJK62TmKtwDxZWC4sGo9hJ0bkzaSh%2BTDURo6FLwEsUbPofyhUnHAU0p8xhNnSvDLSyJpRTWt42%2Bi%2BydNCzd1LbGPO2LIfhEDEi18rtNQYNfYOhi3YMfL4iMPb3dkEsBc7FXn8L3FkbkUSAplNB8itY9dAknuWqXKANTsX0JWrIpVprDC0BQWWNLFtNlrFC6UxVeXvW4x54HwUn17d6WlVOkXNpHOkLh7shRDTjP1h%2F89M87vY6JVGAJ%2FxLkp%2FOt6VWRv%2BqsYedW%2BUcJ8GZRF9a3KWzSoTzvdH4li4bnY5yeeDMP1uixpAKhB4o7uF70meCU%2FTiO13MugxBYYn3TrySZwaSCgY9XJ63AgSzSUqtFVf%2BlIMCql5FKb9eH34AyvNNgjEnWfvIXRilyS8gT6L7kEFi8Sc77sVOVYz9v5EeBjttAom00RNWMf7yANYPaPaeKWylOF3%2FL5wk5n%2Bn8K6W1juuQRSPsikajbEHqBTcpOuSQjpzlL975ZxktoAhAsc%2FJl15uw4b7jyUD%2B%2FO7sz9dHDNa7PeoC%2BJxaCCF4CsIsFaGfxTTFgJ7aXLNM2K253U%2BVq3Pgyb21TJ%2FZrS1uYfiGZB1wMeXx1I2IefMm37470P5H21Ub1jHH%2F8aszEg8UbpkmkwgP2lwQY6pgG0cAIqmtZYzIOWj02%2FSBXLjEDsrT1h%2F5ulLTmXOMbW2JLrED%2B%2F03ZINFw4Obnp4sra0jkrMuWx3OpEiK826BG22fiSk5YWnIGyg9lYNC9ifeqSYSiAcDUBERahHrxiO%2FC1NUS3%2B4pI2W6T4AeewtqPJpO6Zzyk6LgT1uh7hF%2FdRBbJTWsTSZafQl23huImGO1vI5%2BoTh2U6FoiD5ZhLpZ0IkgghAyD&X-Amz-Signature=7be29141fcfab400abb312112cb6ce6b0ab5198db88e0e2252a7e6a4855f5a34&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHR2FL7%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T070816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB8qG9fv7DR7%2FwUyVwHJcVNMPTiGn29O6X2g6VHsvoszAiB9KQ%2FFrH3Cx4uzh9Fm8A6HwrobmgHMipO0WVlJKJ1xzCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMbW4ljbsD2NJK62TmKtwDxZWC4sGo9hJ0bkzaSh%2BTDURo6FLwEsUbPofyhUnHAU0p8xhNnSvDLSyJpRTWt42%2Bi%2BydNCzd1LbGPO2LIfhEDEi18rtNQYNfYOhi3YMfL4iMPb3dkEsBc7FXn8L3FkbkUSAplNB8itY9dAknuWqXKANTsX0JWrIpVprDC0BQWWNLFtNlrFC6UxVeXvW4x54HwUn17d6WlVOkXNpHOkLh7shRDTjP1h%2F89M87vY6JVGAJ%2FxLkp%2FOt6VWRv%2BqsYedW%2BUcJ8GZRF9a3KWzSoTzvdH4li4bnY5yeeDMP1uixpAKhB4o7uF70meCU%2FTiO13MugxBYYn3TrySZwaSCgY9XJ63AgSzSUqtFVf%2BlIMCql5FKb9eH34AyvNNgjEnWfvIXRilyS8gT6L7kEFi8Sc77sVOVYz9v5EeBjttAom00RNWMf7yANYPaPaeKWylOF3%2FL5wk5n%2Bn8K6W1juuQRSPsikajbEHqBTcpOuSQjpzlL975ZxktoAhAsc%2FJl15uw4b7jyUD%2B%2FO7sz9dHDNa7PeoC%2BJxaCCF4CsIsFaGfxTTFgJ7aXLNM2K253U%2BVq3Pgyb21TJ%2FZrS1uYfiGZB1wMeXx1I2IefMm37470P5H21Ub1jHH%2F8aszEg8UbpkmkwgP2lwQY6pgG0cAIqmtZYzIOWj02%2FSBXLjEDsrT1h%2F5ulLTmXOMbW2JLrED%2B%2F03ZINFw4Obnp4sra0jkrMuWx3OpEiK826BG22fiSk5YWnIGyg9lYNC9ifeqSYSiAcDUBERahHrxiO%2FC1NUS3%2B4pI2W6T4AeewtqPJpO6Zzyk6LgT1uh7hF%2FdRBbJTWsTSZafQl23huImGO1vI5%2BoTh2U6FoiD5ZhLpZ0IkgghAyD&X-Amz-Signature=920d6ceae623b460f3dee2d15ef0df343a57007b1f5cebddc45d16068edbad54&X-Amz-SignedHeaders=host&x-id=GetObject)
