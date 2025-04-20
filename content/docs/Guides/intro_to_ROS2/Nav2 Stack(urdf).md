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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XNW4LBP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFXCdWqDkA2wALgfPpUJDFYO1q%2BZ%2BD2fcGdA8bQBMKHpAiEA%2FK6qWj1%2F6kf1mAq4RE7TkNGk%2B0ma4LW0%2FV5u9ZB9%2F%2FEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjNqBZ22hBUYTpbNyrcA4AySB3z2atRqeGN1Jve1PGs9PWswNIwJedr64aL2SvbPzZOC%2BkmiElNxzpwBygX48FcQwUGpjKz7Shrhkvzt%2F%2Fj2ZOs1u%2FPsO%2F4kQFUhvRHaCfN3q4i1A4ZwBqn9XY14kwuwZvRU3X9QOBsRmtb%2BlfsJVhHANiMKsAwxnfwt9EU3%2FdZKhC9KZaPKbWNS%2B%2BDl2Lpzw%2BbPqGGd9QTTAtL3%2BGx%2BmN%2BLjWwf0a3e4D0RUDywAe9850vXZZlGnZmbEtIve1rkJ4sTB4GtS0YvHx6JxzwX8qLO%2F8oOEcB0unVOHNyyoL0Sb0tHUxJLoEOyKdGDC7SMRJRHFFOeWA5KejSKtnyZBiTTozRiK8WBG30QTUK612ZuDx2eNKU3VujYRMTwXhPKs4UQWPsbseX6RD21LTlHEehPt%2FYI4Oc6faYL3JTvg8hxjsFS%2F1tdgZo%2FSjKg8GKmfevNd1BhqzrbhlERU%2FwecE672rAmtllbsKvX1mCvjGlttvGuHdHdaDOl3O0jTzebFatFlmeVbNiPm2Pgmzcws8ckpQTzEBCRPmLuhG4TD6uTsRa%2BhJNHUT8nKB2g%2FM1nHpGwyRen%2Fwqput%2BXmc41eHFhF3F9ECFjXTVAR7itOLucKC7FfFMS2PUML%2FIk8AGOqUBLEN2DiFmBgUn3h%2F1rAdgjh7bVEQtEd4deaSe06E%2BHPhtfUblVv4vwTmFPHDUkn%2BZNLq8G%2FFUqmNdE5q4zwttjHvy29pZCSHDNu9MA4U%2BXC4cuKRyFr80pkeOmIeUB7fkO3tN%2F8S2qSIBmGW9uvxwQnLQ6fSmn8E1CmmSWoZ6aURRgbmeQJCLi8Y%2FjfPDOqf5qPlBRM9GmZp6Ijwk0Mp5yCBzLlrn&X-Amz-Signature=7f05c8b42ad133ac4bd65060d1bfd56d89e94c0b57401c4e5ebdc5c0a9d03743&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XNW4LBP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFXCdWqDkA2wALgfPpUJDFYO1q%2BZ%2BD2fcGdA8bQBMKHpAiEA%2FK6qWj1%2F6kf1mAq4RE7TkNGk%2B0ma4LW0%2FV5u9ZB9%2F%2FEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjNqBZ22hBUYTpbNyrcA4AySB3z2atRqeGN1Jve1PGs9PWswNIwJedr64aL2SvbPzZOC%2BkmiElNxzpwBygX48FcQwUGpjKz7Shrhkvzt%2F%2Fj2ZOs1u%2FPsO%2F4kQFUhvRHaCfN3q4i1A4ZwBqn9XY14kwuwZvRU3X9QOBsRmtb%2BlfsJVhHANiMKsAwxnfwt9EU3%2FdZKhC9KZaPKbWNS%2B%2BDl2Lpzw%2BbPqGGd9QTTAtL3%2BGx%2BmN%2BLjWwf0a3e4D0RUDywAe9850vXZZlGnZmbEtIve1rkJ4sTB4GtS0YvHx6JxzwX8qLO%2F8oOEcB0unVOHNyyoL0Sb0tHUxJLoEOyKdGDC7SMRJRHFFOeWA5KejSKtnyZBiTTozRiK8WBG30QTUK612ZuDx2eNKU3VujYRMTwXhPKs4UQWPsbseX6RD21LTlHEehPt%2FYI4Oc6faYL3JTvg8hxjsFS%2F1tdgZo%2FSjKg8GKmfevNd1BhqzrbhlERU%2FwecE672rAmtllbsKvX1mCvjGlttvGuHdHdaDOl3O0jTzebFatFlmeVbNiPm2Pgmzcws8ckpQTzEBCRPmLuhG4TD6uTsRa%2BhJNHUT8nKB2g%2FM1nHpGwyRen%2Fwqput%2BXmc41eHFhF3F9ECFjXTVAR7itOLucKC7FfFMS2PUML%2FIk8AGOqUBLEN2DiFmBgUn3h%2F1rAdgjh7bVEQtEd4deaSe06E%2BHPhtfUblVv4vwTmFPHDUkn%2BZNLq8G%2FFUqmNdE5q4zwttjHvy29pZCSHDNu9MA4U%2BXC4cuKRyFr80pkeOmIeUB7fkO3tN%2F8S2qSIBmGW9uvxwQnLQ6fSmn8E1CmmSWoZ6aURRgbmeQJCLi8Y%2FjfPDOqf5qPlBRM9GmZp6Ijwk0Mp5yCBzLlrn&X-Amz-Signature=2e09c7a58f5e9b825b764a10ebd0c6220e94fbcdfd9f034887b6c16b26315a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XNW4LBP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFXCdWqDkA2wALgfPpUJDFYO1q%2BZ%2BD2fcGdA8bQBMKHpAiEA%2FK6qWj1%2F6kf1mAq4RE7TkNGk%2B0ma4LW0%2FV5u9ZB9%2F%2FEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjNqBZ22hBUYTpbNyrcA4AySB3z2atRqeGN1Jve1PGs9PWswNIwJedr64aL2SvbPzZOC%2BkmiElNxzpwBygX48FcQwUGpjKz7Shrhkvzt%2F%2Fj2ZOs1u%2FPsO%2F4kQFUhvRHaCfN3q4i1A4ZwBqn9XY14kwuwZvRU3X9QOBsRmtb%2BlfsJVhHANiMKsAwxnfwt9EU3%2FdZKhC9KZaPKbWNS%2B%2BDl2Lpzw%2BbPqGGd9QTTAtL3%2BGx%2BmN%2BLjWwf0a3e4D0RUDywAe9850vXZZlGnZmbEtIve1rkJ4sTB4GtS0YvHx6JxzwX8qLO%2F8oOEcB0unVOHNyyoL0Sb0tHUxJLoEOyKdGDC7SMRJRHFFOeWA5KejSKtnyZBiTTozRiK8WBG30QTUK612ZuDx2eNKU3VujYRMTwXhPKs4UQWPsbseX6RD21LTlHEehPt%2FYI4Oc6faYL3JTvg8hxjsFS%2F1tdgZo%2FSjKg8GKmfevNd1BhqzrbhlERU%2FwecE672rAmtllbsKvX1mCvjGlttvGuHdHdaDOl3O0jTzebFatFlmeVbNiPm2Pgmzcws8ckpQTzEBCRPmLuhG4TD6uTsRa%2BhJNHUT8nKB2g%2FM1nHpGwyRen%2Fwqput%2BXmc41eHFhF3F9ECFjXTVAR7itOLucKC7FfFMS2PUML%2FIk8AGOqUBLEN2DiFmBgUn3h%2F1rAdgjh7bVEQtEd4deaSe06E%2BHPhtfUblVv4vwTmFPHDUkn%2BZNLq8G%2FFUqmNdE5q4zwttjHvy29pZCSHDNu9MA4U%2BXC4cuKRyFr80pkeOmIeUB7fkO3tN%2F8S2qSIBmGW9uvxwQnLQ6fSmn8E1CmmSWoZ6aURRgbmeQJCLi8Y%2FjfPDOqf5qPlBRM9GmZp6Ijwk0Mp5yCBzLlrn&X-Amz-Signature=a04c4e773149cc16d2c6b20956795d9332fba4303f9016c867054ad3ca2aedbe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XNW4LBP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFXCdWqDkA2wALgfPpUJDFYO1q%2BZ%2BD2fcGdA8bQBMKHpAiEA%2FK6qWj1%2F6kf1mAq4RE7TkNGk%2B0ma4LW0%2FV5u9ZB9%2F%2FEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjNqBZ22hBUYTpbNyrcA4AySB3z2atRqeGN1Jve1PGs9PWswNIwJedr64aL2SvbPzZOC%2BkmiElNxzpwBygX48FcQwUGpjKz7Shrhkvzt%2F%2Fj2ZOs1u%2FPsO%2F4kQFUhvRHaCfN3q4i1A4ZwBqn9XY14kwuwZvRU3X9QOBsRmtb%2BlfsJVhHANiMKsAwxnfwt9EU3%2FdZKhC9KZaPKbWNS%2B%2BDl2Lpzw%2BbPqGGd9QTTAtL3%2BGx%2BmN%2BLjWwf0a3e4D0RUDywAe9850vXZZlGnZmbEtIve1rkJ4sTB4GtS0YvHx6JxzwX8qLO%2F8oOEcB0unVOHNyyoL0Sb0tHUxJLoEOyKdGDC7SMRJRHFFOeWA5KejSKtnyZBiTTozRiK8WBG30QTUK612ZuDx2eNKU3VujYRMTwXhPKs4UQWPsbseX6RD21LTlHEehPt%2FYI4Oc6faYL3JTvg8hxjsFS%2F1tdgZo%2FSjKg8GKmfevNd1BhqzrbhlERU%2FwecE672rAmtllbsKvX1mCvjGlttvGuHdHdaDOl3O0jTzebFatFlmeVbNiPm2Pgmzcws8ckpQTzEBCRPmLuhG4TD6uTsRa%2BhJNHUT8nKB2g%2FM1nHpGwyRen%2Fwqput%2BXmc41eHFhF3F9ECFjXTVAR7itOLucKC7FfFMS2PUML%2FIk8AGOqUBLEN2DiFmBgUn3h%2F1rAdgjh7bVEQtEd4deaSe06E%2BHPhtfUblVv4vwTmFPHDUkn%2BZNLq8G%2FFUqmNdE5q4zwttjHvy29pZCSHDNu9MA4U%2BXC4cuKRyFr80pkeOmIeUB7fkO3tN%2F8S2qSIBmGW9uvxwQnLQ6fSmn8E1CmmSWoZ6aURRgbmeQJCLi8Y%2FjfPDOqf5qPlBRM9GmZp6Ijwk0Mp5yCBzLlrn&X-Amz-Signature=1d5dbbcfa4f67a56b0c7ecf60570725e73d686c69d7ec2a8dab33133751fc721&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XNW4LBP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFXCdWqDkA2wALgfPpUJDFYO1q%2BZ%2BD2fcGdA8bQBMKHpAiEA%2FK6qWj1%2F6kf1mAq4RE7TkNGk%2B0ma4LW0%2FV5u9ZB9%2F%2FEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjNqBZ22hBUYTpbNyrcA4AySB3z2atRqeGN1Jve1PGs9PWswNIwJedr64aL2SvbPzZOC%2BkmiElNxzpwBygX48FcQwUGpjKz7Shrhkvzt%2F%2Fj2ZOs1u%2FPsO%2F4kQFUhvRHaCfN3q4i1A4ZwBqn9XY14kwuwZvRU3X9QOBsRmtb%2BlfsJVhHANiMKsAwxnfwt9EU3%2FdZKhC9KZaPKbWNS%2B%2BDl2Lpzw%2BbPqGGd9QTTAtL3%2BGx%2BmN%2BLjWwf0a3e4D0RUDywAe9850vXZZlGnZmbEtIve1rkJ4sTB4GtS0YvHx6JxzwX8qLO%2F8oOEcB0unVOHNyyoL0Sb0tHUxJLoEOyKdGDC7SMRJRHFFOeWA5KejSKtnyZBiTTozRiK8WBG30QTUK612ZuDx2eNKU3VujYRMTwXhPKs4UQWPsbseX6RD21LTlHEehPt%2FYI4Oc6faYL3JTvg8hxjsFS%2F1tdgZo%2FSjKg8GKmfevNd1BhqzrbhlERU%2FwecE672rAmtllbsKvX1mCvjGlttvGuHdHdaDOl3O0jTzebFatFlmeVbNiPm2Pgmzcws8ckpQTzEBCRPmLuhG4TD6uTsRa%2BhJNHUT8nKB2g%2FM1nHpGwyRen%2Fwqput%2BXmc41eHFhF3F9ECFjXTVAR7itOLucKC7FfFMS2PUML%2FIk8AGOqUBLEN2DiFmBgUn3h%2F1rAdgjh7bVEQtEd4deaSe06E%2BHPhtfUblVv4vwTmFPHDUkn%2BZNLq8G%2FFUqmNdE5q4zwttjHvy29pZCSHDNu9MA4U%2BXC4cuKRyFr80pkeOmIeUB7fkO3tN%2F8S2qSIBmGW9uvxwQnLQ6fSmn8E1CmmSWoZ6aURRgbmeQJCLi8Y%2FjfPDOqf5qPlBRM9GmZp6Ijwk0Mp5yCBzLlrn&X-Amz-Signature=cf6e444573b94ffa1621d17d0805ec18e40a582f899bd5dadbb801fec78ddfce&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XNW4LBP%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T160827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIFXCdWqDkA2wALgfPpUJDFYO1q%2BZ%2BD2fcGdA8bQBMKHpAiEA%2FK6qWj1%2F6kf1mAq4RE7TkNGk%2B0ma4LW0%2FV5u9ZB9%2F%2FEqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCjNqBZ22hBUYTpbNyrcA4AySB3z2atRqeGN1Jve1PGs9PWswNIwJedr64aL2SvbPzZOC%2BkmiElNxzpwBygX48FcQwUGpjKz7Shrhkvzt%2F%2Fj2ZOs1u%2FPsO%2F4kQFUhvRHaCfN3q4i1A4ZwBqn9XY14kwuwZvRU3X9QOBsRmtb%2BlfsJVhHANiMKsAwxnfwt9EU3%2FdZKhC9KZaPKbWNS%2B%2BDl2Lpzw%2BbPqGGd9QTTAtL3%2BGx%2BmN%2BLjWwf0a3e4D0RUDywAe9850vXZZlGnZmbEtIve1rkJ4sTB4GtS0YvHx6JxzwX8qLO%2F8oOEcB0unVOHNyyoL0Sb0tHUxJLoEOyKdGDC7SMRJRHFFOeWA5KejSKtnyZBiTTozRiK8WBG30QTUK612ZuDx2eNKU3VujYRMTwXhPKs4UQWPsbseX6RD21LTlHEehPt%2FYI4Oc6faYL3JTvg8hxjsFS%2F1tdgZo%2FSjKg8GKmfevNd1BhqzrbhlERU%2FwecE672rAmtllbsKvX1mCvjGlttvGuHdHdaDOl3O0jTzebFatFlmeVbNiPm2Pgmzcws8ckpQTzEBCRPmLuhG4TD6uTsRa%2BhJNHUT8nKB2g%2FM1nHpGwyRen%2Fwqput%2BXmc41eHFhF3F9ECFjXTVAR7itOLucKC7FfFMS2PUML%2FIk8AGOqUBLEN2DiFmBgUn3h%2F1rAdgjh7bVEQtEd4deaSe06E%2BHPhtfUblVv4vwTmFPHDUkn%2BZNLq8G%2FFUqmNdE5q4zwttjHvy29pZCSHDNu9MA4U%2BXC4cuKRyFr80pkeOmIeUB7fkO3tN%2F8S2qSIBmGW9uvxwQnLQ6fSmn8E1CmmSWoZ6aURRgbmeQJCLi8Y%2FjfPDOqf5qPlBRM9GmZp6Ijwk0Mp5yCBzLlrn&X-Amz-Signature=d5f7c32e74d7f67cd11bd06caec99d8557f5fa3329ff8a93cdcf501f625bd7ab&X-Amz-SignedHeaders=host&x-id=GetObject)
