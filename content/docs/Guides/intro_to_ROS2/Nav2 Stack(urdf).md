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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NICDH7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvHuFZms8yRIeHwXvP%2BOkXSYDc%2FfOs73pxtxVCDgyWoQIhAMdz1sRll5F5ubzyX9A1OI49ckvUf%2BeCYS665ZDfKW5BKv8DCBgQABoMNjM3NDIzMTgzODA1IgyZUExXxMgMIkzUBYoq3APsmunzviu7ncFElqejSdnQF7JdVQlP%2FPSFSC8Z4dwb%2Fra%2FwTX5n5QfzABvQjOmka8uA2ipx36lervT7ujwwAKDFQbvCZr1HlmMMAuSHoY8gErdaM0iSyG3Etryly37dZKF0BfwESxin4%2FmO05If8JiVh91dLM1kca7wdsMj2q1r89MzmauhOQ8ZTdDqL6Kl3nu6%2B5qF7trHsFTM%2BWIxLn90VTYcqXy2YSr6hRVQ%2BbKe5IDkNq631NeQioZTK%2FW4nSkMtPor%2BDfQaNiFxu4m8LsjcePAh6O7Kx5bvMY0Qx5rkcXFVVtk6ws4EuQkwlDLSE72YvxL7bDHB26FBQZB774HigZYwDvnIKWJYCNEiVBKEzYSJrZWT5%2BB133%2F8hw8MVlA1KPPyC7r1AphN6bony5ranPBia%2FRRuBk3npv0uSp8XIZlGrF%2FnQdTokq%2FHvCOKJO6b%2B4kcFtIgwtHdBHQG%2BU2z318txlrJRRfqwc2UKC3Y3nQa4KGk%2BoxRxpbrfqPmaS7wtoC5GxY0pyYgQ%2FXkeVkmhbw08xIilqvqpQmsB%2Fz9dLIwQOCY1A25Ug%2BBVy4pCd6UFC81gn8xuR3VjUp7HEopnRXAbIVA8aoHOLQn3JwnZvQaC0KpSD6q4SzCv%2Buy9BjqkAVge9XfBoD8GNQGOtvm9shB1bZ5id2SZ1cvjnl1RHOChx9QhtnK4AGxy8N9uEKXDvRhDU5hS%2BgSZr5aBc7JtWMZvdZlcA74EFICTudIYzDD%2FQ1MzWGJ1TOF7W8NI%2F6LBCWvBDqxC1Jdys%2FwnIkSPWwyzF7m%2BFwawntwT%2BC%2BXSb1MytrUIgqtk4bSeeGVoK35JdWyXsW5Dm0m0JlvhEFDfdgh%2B%2Fv%2F&X-Amz-Signature=8247f20bf6b8e63b24477ce476a19c79135baa6e28ac8a6fe3278b244dcf6cc6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NICDH7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvHuFZms8yRIeHwXvP%2BOkXSYDc%2FfOs73pxtxVCDgyWoQIhAMdz1sRll5F5ubzyX9A1OI49ckvUf%2BeCYS665ZDfKW5BKv8DCBgQABoMNjM3NDIzMTgzODA1IgyZUExXxMgMIkzUBYoq3APsmunzviu7ncFElqejSdnQF7JdVQlP%2FPSFSC8Z4dwb%2Fra%2FwTX5n5QfzABvQjOmka8uA2ipx36lervT7ujwwAKDFQbvCZr1HlmMMAuSHoY8gErdaM0iSyG3Etryly37dZKF0BfwESxin4%2FmO05If8JiVh91dLM1kca7wdsMj2q1r89MzmauhOQ8ZTdDqL6Kl3nu6%2B5qF7trHsFTM%2BWIxLn90VTYcqXy2YSr6hRVQ%2BbKe5IDkNq631NeQioZTK%2FW4nSkMtPor%2BDfQaNiFxu4m8LsjcePAh6O7Kx5bvMY0Qx5rkcXFVVtk6ws4EuQkwlDLSE72YvxL7bDHB26FBQZB774HigZYwDvnIKWJYCNEiVBKEzYSJrZWT5%2BB133%2F8hw8MVlA1KPPyC7r1AphN6bony5ranPBia%2FRRuBk3npv0uSp8XIZlGrF%2FnQdTokq%2FHvCOKJO6b%2B4kcFtIgwtHdBHQG%2BU2z318txlrJRRfqwc2UKC3Y3nQa4KGk%2BoxRxpbrfqPmaS7wtoC5GxY0pyYgQ%2FXkeVkmhbw08xIilqvqpQmsB%2Fz9dLIwQOCY1A25Ug%2BBVy4pCd6UFC81gn8xuR3VjUp7HEopnRXAbIVA8aoHOLQn3JwnZvQaC0KpSD6q4SzCv%2Buy9BjqkAVge9XfBoD8GNQGOtvm9shB1bZ5id2SZ1cvjnl1RHOChx9QhtnK4AGxy8N9uEKXDvRhDU5hS%2BgSZr5aBc7JtWMZvdZlcA74EFICTudIYzDD%2FQ1MzWGJ1TOF7W8NI%2F6LBCWvBDqxC1Jdys%2FwnIkSPWwyzF7m%2BFwawntwT%2BC%2BXSb1MytrUIgqtk4bSeeGVoK35JdWyXsW5Dm0m0JlvhEFDfdgh%2B%2Fv%2F&X-Amz-Signature=2d488069e0e65f96077c071a80dce110071dbdb04297f62bba01008895e94d43&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NICDH7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvHuFZms8yRIeHwXvP%2BOkXSYDc%2FfOs73pxtxVCDgyWoQIhAMdz1sRll5F5ubzyX9A1OI49ckvUf%2BeCYS665ZDfKW5BKv8DCBgQABoMNjM3NDIzMTgzODA1IgyZUExXxMgMIkzUBYoq3APsmunzviu7ncFElqejSdnQF7JdVQlP%2FPSFSC8Z4dwb%2Fra%2FwTX5n5QfzABvQjOmka8uA2ipx36lervT7ujwwAKDFQbvCZr1HlmMMAuSHoY8gErdaM0iSyG3Etryly37dZKF0BfwESxin4%2FmO05If8JiVh91dLM1kca7wdsMj2q1r89MzmauhOQ8ZTdDqL6Kl3nu6%2B5qF7trHsFTM%2BWIxLn90VTYcqXy2YSr6hRVQ%2BbKe5IDkNq631NeQioZTK%2FW4nSkMtPor%2BDfQaNiFxu4m8LsjcePAh6O7Kx5bvMY0Qx5rkcXFVVtk6ws4EuQkwlDLSE72YvxL7bDHB26FBQZB774HigZYwDvnIKWJYCNEiVBKEzYSJrZWT5%2BB133%2F8hw8MVlA1KPPyC7r1AphN6bony5ranPBia%2FRRuBk3npv0uSp8XIZlGrF%2FnQdTokq%2FHvCOKJO6b%2B4kcFtIgwtHdBHQG%2BU2z318txlrJRRfqwc2UKC3Y3nQa4KGk%2BoxRxpbrfqPmaS7wtoC5GxY0pyYgQ%2FXkeVkmhbw08xIilqvqpQmsB%2Fz9dLIwQOCY1A25Ug%2BBVy4pCd6UFC81gn8xuR3VjUp7HEopnRXAbIVA8aoHOLQn3JwnZvQaC0KpSD6q4SzCv%2Buy9BjqkAVge9XfBoD8GNQGOtvm9shB1bZ5id2SZ1cvjnl1RHOChx9QhtnK4AGxy8N9uEKXDvRhDU5hS%2BgSZr5aBc7JtWMZvdZlcA74EFICTudIYzDD%2FQ1MzWGJ1TOF7W8NI%2F6LBCWvBDqxC1Jdys%2FwnIkSPWwyzF7m%2BFwawntwT%2BC%2BXSb1MytrUIgqtk4bSeeGVoK35JdWyXsW5Dm0m0JlvhEFDfdgh%2B%2Fv%2F&X-Amz-Signature=9c11f14088f4fd0ac9203110d7064404cf8147e0cf922c928cafa5a6a5d32beb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NICDH7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvHuFZms8yRIeHwXvP%2BOkXSYDc%2FfOs73pxtxVCDgyWoQIhAMdz1sRll5F5ubzyX9A1OI49ckvUf%2BeCYS665ZDfKW5BKv8DCBgQABoMNjM3NDIzMTgzODA1IgyZUExXxMgMIkzUBYoq3APsmunzviu7ncFElqejSdnQF7JdVQlP%2FPSFSC8Z4dwb%2Fra%2FwTX5n5QfzABvQjOmka8uA2ipx36lervT7ujwwAKDFQbvCZr1HlmMMAuSHoY8gErdaM0iSyG3Etryly37dZKF0BfwESxin4%2FmO05If8JiVh91dLM1kca7wdsMj2q1r89MzmauhOQ8ZTdDqL6Kl3nu6%2B5qF7trHsFTM%2BWIxLn90VTYcqXy2YSr6hRVQ%2BbKe5IDkNq631NeQioZTK%2FW4nSkMtPor%2BDfQaNiFxu4m8LsjcePAh6O7Kx5bvMY0Qx5rkcXFVVtk6ws4EuQkwlDLSE72YvxL7bDHB26FBQZB774HigZYwDvnIKWJYCNEiVBKEzYSJrZWT5%2BB133%2F8hw8MVlA1KPPyC7r1AphN6bony5ranPBia%2FRRuBk3npv0uSp8XIZlGrF%2FnQdTokq%2FHvCOKJO6b%2B4kcFtIgwtHdBHQG%2BU2z318txlrJRRfqwc2UKC3Y3nQa4KGk%2BoxRxpbrfqPmaS7wtoC5GxY0pyYgQ%2FXkeVkmhbw08xIilqvqpQmsB%2Fz9dLIwQOCY1A25Ug%2BBVy4pCd6UFC81gn8xuR3VjUp7HEopnRXAbIVA8aoHOLQn3JwnZvQaC0KpSD6q4SzCv%2Buy9BjqkAVge9XfBoD8GNQGOtvm9shB1bZ5id2SZ1cvjnl1RHOChx9QhtnK4AGxy8N9uEKXDvRhDU5hS%2BgSZr5aBc7JtWMZvdZlcA74EFICTudIYzDD%2FQ1MzWGJ1TOF7W8NI%2F6LBCWvBDqxC1Jdys%2FwnIkSPWwyzF7m%2BFwawntwT%2BC%2BXSb1MytrUIgqtk4bSeeGVoK35JdWyXsW5Dm0m0JlvhEFDfdgh%2B%2Fv%2F&X-Amz-Signature=3db4eb35f2623f45cb0e00d53a7dfa8f566285b2050654b96c6a5226de109d26&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NICDH7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvHuFZms8yRIeHwXvP%2BOkXSYDc%2FfOs73pxtxVCDgyWoQIhAMdz1sRll5F5ubzyX9A1OI49ckvUf%2BeCYS665ZDfKW5BKv8DCBgQABoMNjM3NDIzMTgzODA1IgyZUExXxMgMIkzUBYoq3APsmunzviu7ncFElqejSdnQF7JdVQlP%2FPSFSC8Z4dwb%2Fra%2FwTX5n5QfzABvQjOmka8uA2ipx36lervT7ujwwAKDFQbvCZr1HlmMMAuSHoY8gErdaM0iSyG3Etryly37dZKF0BfwESxin4%2FmO05If8JiVh91dLM1kca7wdsMj2q1r89MzmauhOQ8ZTdDqL6Kl3nu6%2B5qF7trHsFTM%2BWIxLn90VTYcqXy2YSr6hRVQ%2BbKe5IDkNq631NeQioZTK%2FW4nSkMtPor%2BDfQaNiFxu4m8LsjcePAh6O7Kx5bvMY0Qx5rkcXFVVtk6ws4EuQkwlDLSE72YvxL7bDHB26FBQZB774HigZYwDvnIKWJYCNEiVBKEzYSJrZWT5%2BB133%2F8hw8MVlA1KPPyC7r1AphN6bony5ranPBia%2FRRuBk3npv0uSp8XIZlGrF%2FnQdTokq%2FHvCOKJO6b%2B4kcFtIgwtHdBHQG%2BU2z318txlrJRRfqwc2UKC3Y3nQa4KGk%2BoxRxpbrfqPmaS7wtoC5GxY0pyYgQ%2FXkeVkmhbw08xIilqvqpQmsB%2Fz9dLIwQOCY1A25Ug%2BBVy4pCd6UFC81gn8xuR3VjUp7HEopnRXAbIVA8aoHOLQn3JwnZvQaC0KpSD6q4SzCv%2Buy9BjqkAVge9XfBoD8GNQGOtvm9shB1bZ5id2SZ1cvjnl1RHOChx9QhtnK4AGxy8N9uEKXDvRhDU5hS%2BgSZr5aBc7JtWMZvdZlcA74EFICTudIYzDD%2FQ1MzWGJ1TOF7W8NI%2F6LBCWvBDqxC1Jdys%2FwnIkSPWwyzF7m%2BFwawntwT%2BC%2BXSb1MytrUIgqtk4bSeeGVoK35JdWyXsW5Dm0m0JlvhEFDfdgh%2B%2Fv%2F&X-Amz-Signature=e4ebefd3cfbd88af605260e726bb8d62b28e346c85224a4844901e4fe9fc3f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NICDH7%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvHuFZms8yRIeHwXvP%2BOkXSYDc%2FfOs73pxtxVCDgyWoQIhAMdz1sRll5F5ubzyX9A1OI49ckvUf%2BeCYS665ZDfKW5BKv8DCBgQABoMNjM3NDIzMTgzODA1IgyZUExXxMgMIkzUBYoq3APsmunzviu7ncFElqejSdnQF7JdVQlP%2FPSFSC8Z4dwb%2Fra%2FwTX5n5QfzABvQjOmka8uA2ipx36lervT7ujwwAKDFQbvCZr1HlmMMAuSHoY8gErdaM0iSyG3Etryly37dZKF0BfwESxin4%2FmO05If8JiVh91dLM1kca7wdsMj2q1r89MzmauhOQ8ZTdDqL6Kl3nu6%2B5qF7trHsFTM%2BWIxLn90VTYcqXy2YSr6hRVQ%2BbKe5IDkNq631NeQioZTK%2FW4nSkMtPor%2BDfQaNiFxu4m8LsjcePAh6O7Kx5bvMY0Qx5rkcXFVVtk6ws4EuQkwlDLSE72YvxL7bDHB26FBQZB774HigZYwDvnIKWJYCNEiVBKEzYSJrZWT5%2BB133%2F8hw8MVlA1KPPyC7r1AphN6bony5ranPBia%2FRRuBk3npv0uSp8XIZlGrF%2FnQdTokq%2FHvCOKJO6b%2B4kcFtIgwtHdBHQG%2BU2z318txlrJRRfqwc2UKC3Y3nQa4KGk%2BoxRxpbrfqPmaS7wtoC5GxY0pyYgQ%2FXkeVkmhbw08xIilqvqpQmsB%2Fz9dLIwQOCY1A25Ug%2BBVy4pCd6UFC81gn8xuR3VjUp7HEopnRXAbIVA8aoHOLQn3JwnZvQaC0KpSD6q4SzCv%2Buy9BjqkAVge9XfBoD8GNQGOtvm9shB1bZ5id2SZ1cvjnl1RHOChx9QhtnK4AGxy8N9uEKXDvRhDU5hS%2BgSZr5aBc7JtWMZvdZlcA74EFICTudIYzDD%2FQ1MzWGJ1TOF7W8NI%2F6LBCWvBDqxC1Jdys%2FwnIkSPWwyzF7m%2BFwawntwT%2BC%2BXSb1MytrUIgqtk4bSeeGVoK35JdWyXsW5Dm0m0JlvhEFDfdgh%2B%2Fv%2F&X-Amz-Signature=df894098b7c6f44bf3c4b8608e1cf05d01b6fe3147abce43acb980184ea47363&X-Amz-SignedHeaders=host&x-id=GetObject)
