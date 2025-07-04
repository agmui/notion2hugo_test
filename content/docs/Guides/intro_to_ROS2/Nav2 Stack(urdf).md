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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJJMP5A%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIH8n4DRqTmTdX0CdBruU5u5m4dJfhHwi8goYZ%2BiBClQoAiEA8w1McHJfhZreBFQkvaxbxvL2WlG8QJ7x%2BLySOU77nGQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAItmzHvxo9GUMysMyrcA57UkoKrgBId%2BXQc%2Ft3WOT5grXkRfPb%2B9b9U2yI0LWzglVx8cAqrV9yGum4X51Y9oAJrnvIJ2e6%2BwrCyRmyCwUSrmbKuSfPc0SGxMfku0fdA966E5Cql0N4JqSGqCsVC6OJg2vZiAso9oBuS52MeG3GcfK7Lqmzdlf%2B5f7may1%2Bga6gBn3JnSehIYD4TpDt3ZnOL4NpRNCR%2FIVG7vU6rhPEp8m7Qbgabm1p2c7adQKN7RDWbii4QXUHBx%2BAbYQK1G%2Ba0xH1%2BTL8Qih6ioQXykekJMvHx5JqRxuHpk4W8uXMVm%2BddcZf9%2FkOf%2FhFC9oh%2FX5pojwwl5s7b36XjVvlzA1yIPd0TfqK09hWIBMf8UJwbngHYMg2KJV9ZJ3OvMp0gXkuoR3EYHBobE7oOHkhC8YUNqFHbJFLB%2FeIBzWMAfghgBMhw2C64pX7DWYJUXnDiVqcSWdiU5gN%2FeyYXERqbt8lYyaGW7t%2BD3%2Fj%2FiPylboVaGfnnS0qBrLkfqozlmldIF909CpFQusqvWufEKXLcCX67%2FL%2BOyz7QA6tbOOb1br99ZibabvvtQkrrTo3cDvoX4OKXVgoBLIQxjSU8PogF8YjUZB1c6w0PODyN4jGNGPgei2N7WOEqj%2BUFmgEaMLSNnsMGOqUB7%2FAHKjjd%2FulNoOWGMCrfMm86AnpUdyLd0pSEiibuxu6BRJG13rpTohFw8KYXMe85fhJ9z%2Beyp5FZeSXY4WffFuiCh9EVN2RRyhKdKpRoko5x1p1uc%2BUvFwCFebvJLfrnqPHFQopbf%2FGda2EVUbxkjE%2Fp23hisw6IW8DOktFAr7jdVLFposPqNAm%2FPwQbRiGu7UzMAm3ry%2F4RKfX493Untg8XVmFm&X-Amz-Signature=20a4639c0d17401387a209a9f793574a929bc733e75f53114b958473c6331561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJJMP5A%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIH8n4DRqTmTdX0CdBruU5u5m4dJfhHwi8goYZ%2BiBClQoAiEA8w1McHJfhZreBFQkvaxbxvL2WlG8QJ7x%2BLySOU77nGQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAItmzHvxo9GUMysMyrcA57UkoKrgBId%2BXQc%2Ft3WOT5grXkRfPb%2B9b9U2yI0LWzglVx8cAqrV9yGum4X51Y9oAJrnvIJ2e6%2BwrCyRmyCwUSrmbKuSfPc0SGxMfku0fdA966E5Cql0N4JqSGqCsVC6OJg2vZiAso9oBuS52MeG3GcfK7Lqmzdlf%2B5f7may1%2Bga6gBn3JnSehIYD4TpDt3ZnOL4NpRNCR%2FIVG7vU6rhPEp8m7Qbgabm1p2c7adQKN7RDWbii4QXUHBx%2BAbYQK1G%2Ba0xH1%2BTL8Qih6ioQXykekJMvHx5JqRxuHpk4W8uXMVm%2BddcZf9%2FkOf%2FhFC9oh%2FX5pojwwl5s7b36XjVvlzA1yIPd0TfqK09hWIBMf8UJwbngHYMg2KJV9ZJ3OvMp0gXkuoR3EYHBobE7oOHkhC8YUNqFHbJFLB%2FeIBzWMAfghgBMhw2C64pX7DWYJUXnDiVqcSWdiU5gN%2FeyYXERqbt8lYyaGW7t%2BD3%2Fj%2FiPylboVaGfnnS0qBrLkfqozlmldIF909CpFQusqvWufEKXLcCX67%2FL%2BOyz7QA6tbOOb1br99ZibabvvtQkrrTo3cDvoX4OKXVgoBLIQxjSU8PogF8YjUZB1c6w0PODyN4jGNGPgei2N7WOEqj%2BUFmgEaMLSNnsMGOqUB7%2FAHKjjd%2FulNoOWGMCrfMm86AnpUdyLd0pSEiibuxu6BRJG13rpTohFw8KYXMe85fhJ9z%2Beyp5FZeSXY4WffFuiCh9EVN2RRyhKdKpRoko5x1p1uc%2BUvFwCFebvJLfrnqPHFQopbf%2FGda2EVUbxkjE%2Fp23hisw6IW8DOktFAr7jdVLFposPqNAm%2FPwQbRiGu7UzMAm3ry%2F4RKfX493Untg8XVmFm&X-Amz-Signature=39bf75394f1ae4d0dca171876e7296b7fe5563930e074d9476dcbf6fd8d84a1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJJMP5A%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIH8n4DRqTmTdX0CdBruU5u5m4dJfhHwi8goYZ%2BiBClQoAiEA8w1McHJfhZreBFQkvaxbxvL2WlG8QJ7x%2BLySOU77nGQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAItmzHvxo9GUMysMyrcA57UkoKrgBId%2BXQc%2Ft3WOT5grXkRfPb%2B9b9U2yI0LWzglVx8cAqrV9yGum4X51Y9oAJrnvIJ2e6%2BwrCyRmyCwUSrmbKuSfPc0SGxMfku0fdA966E5Cql0N4JqSGqCsVC6OJg2vZiAso9oBuS52MeG3GcfK7Lqmzdlf%2B5f7may1%2Bga6gBn3JnSehIYD4TpDt3ZnOL4NpRNCR%2FIVG7vU6rhPEp8m7Qbgabm1p2c7adQKN7RDWbii4QXUHBx%2BAbYQK1G%2Ba0xH1%2BTL8Qih6ioQXykekJMvHx5JqRxuHpk4W8uXMVm%2BddcZf9%2FkOf%2FhFC9oh%2FX5pojwwl5s7b36XjVvlzA1yIPd0TfqK09hWIBMf8UJwbngHYMg2KJV9ZJ3OvMp0gXkuoR3EYHBobE7oOHkhC8YUNqFHbJFLB%2FeIBzWMAfghgBMhw2C64pX7DWYJUXnDiVqcSWdiU5gN%2FeyYXERqbt8lYyaGW7t%2BD3%2Fj%2FiPylboVaGfnnS0qBrLkfqozlmldIF909CpFQusqvWufEKXLcCX67%2FL%2BOyz7QA6tbOOb1br99ZibabvvtQkrrTo3cDvoX4OKXVgoBLIQxjSU8PogF8YjUZB1c6w0PODyN4jGNGPgei2N7WOEqj%2BUFmgEaMLSNnsMGOqUB7%2FAHKjjd%2FulNoOWGMCrfMm86AnpUdyLd0pSEiibuxu6BRJG13rpTohFw8KYXMe85fhJ9z%2Beyp5FZeSXY4WffFuiCh9EVN2RRyhKdKpRoko5x1p1uc%2BUvFwCFebvJLfrnqPHFQopbf%2FGda2EVUbxkjE%2Fp23hisw6IW8DOktFAr7jdVLFposPqNAm%2FPwQbRiGu7UzMAm3ry%2F4RKfX493Untg8XVmFm&X-Amz-Signature=1613cb628683965ce73bdff86ccadf05339877c2a87c87c27b0485915b158423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJJMP5A%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIH8n4DRqTmTdX0CdBruU5u5m4dJfhHwi8goYZ%2BiBClQoAiEA8w1McHJfhZreBFQkvaxbxvL2WlG8QJ7x%2BLySOU77nGQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAItmzHvxo9GUMysMyrcA57UkoKrgBId%2BXQc%2Ft3WOT5grXkRfPb%2B9b9U2yI0LWzglVx8cAqrV9yGum4X51Y9oAJrnvIJ2e6%2BwrCyRmyCwUSrmbKuSfPc0SGxMfku0fdA966E5Cql0N4JqSGqCsVC6OJg2vZiAso9oBuS52MeG3GcfK7Lqmzdlf%2B5f7may1%2Bga6gBn3JnSehIYD4TpDt3ZnOL4NpRNCR%2FIVG7vU6rhPEp8m7Qbgabm1p2c7adQKN7RDWbii4QXUHBx%2BAbYQK1G%2Ba0xH1%2BTL8Qih6ioQXykekJMvHx5JqRxuHpk4W8uXMVm%2BddcZf9%2FkOf%2FhFC9oh%2FX5pojwwl5s7b36XjVvlzA1yIPd0TfqK09hWIBMf8UJwbngHYMg2KJV9ZJ3OvMp0gXkuoR3EYHBobE7oOHkhC8YUNqFHbJFLB%2FeIBzWMAfghgBMhw2C64pX7DWYJUXnDiVqcSWdiU5gN%2FeyYXERqbt8lYyaGW7t%2BD3%2Fj%2FiPylboVaGfnnS0qBrLkfqozlmldIF909CpFQusqvWufEKXLcCX67%2FL%2BOyz7QA6tbOOb1br99ZibabvvtQkrrTo3cDvoX4OKXVgoBLIQxjSU8PogF8YjUZB1c6w0PODyN4jGNGPgei2N7WOEqj%2BUFmgEaMLSNnsMGOqUB7%2FAHKjjd%2FulNoOWGMCrfMm86AnpUdyLd0pSEiibuxu6BRJG13rpTohFw8KYXMe85fhJ9z%2Beyp5FZeSXY4WffFuiCh9EVN2RRyhKdKpRoko5x1p1uc%2BUvFwCFebvJLfrnqPHFQopbf%2FGda2EVUbxkjE%2Fp23hisw6IW8DOktFAr7jdVLFposPqNAm%2FPwQbRiGu7UzMAm3ry%2F4RKfX493Untg8XVmFm&X-Amz-Signature=7726e56c8354604e2bda8f5a71546bafa9ea5ea5964a8f66c03db7aa7cf933b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJJMP5A%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIH8n4DRqTmTdX0CdBruU5u5m4dJfhHwi8goYZ%2BiBClQoAiEA8w1McHJfhZreBFQkvaxbxvL2WlG8QJ7x%2BLySOU77nGQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAItmzHvxo9GUMysMyrcA57UkoKrgBId%2BXQc%2Ft3WOT5grXkRfPb%2B9b9U2yI0LWzglVx8cAqrV9yGum4X51Y9oAJrnvIJ2e6%2BwrCyRmyCwUSrmbKuSfPc0SGxMfku0fdA966E5Cql0N4JqSGqCsVC6OJg2vZiAso9oBuS52MeG3GcfK7Lqmzdlf%2B5f7may1%2Bga6gBn3JnSehIYD4TpDt3ZnOL4NpRNCR%2FIVG7vU6rhPEp8m7Qbgabm1p2c7adQKN7RDWbii4QXUHBx%2BAbYQK1G%2Ba0xH1%2BTL8Qih6ioQXykekJMvHx5JqRxuHpk4W8uXMVm%2BddcZf9%2FkOf%2FhFC9oh%2FX5pojwwl5s7b36XjVvlzA1yIPd0TfqK09hWIBMf8UJwbngHYMg2KJV9ZJ3OvMp0gXkuoR3EYHBobE7oOHkhC8YUNqFHbJFLB%2FeIBzWMAfghgBMhw2C64pX7DWYJUXnDiVqcSWdiU5gN%2FeyYXERqbt8lYyaGW7t%2BD3%2Fj%2FiPylboVaGfnnS0qBrLkfqozlmldIF909CpFQusqvWufEKXLcCX67%2FL%2BOyz7QA6tbOOb1br99ZibabvvtQkrrTo3cDvoX4OKXVgoBLIQxjSU8PogF8YjUZB1c6w0PODyN4jGNGPgei2N7WOEqj%2BUFmgEaMLSNnsMGOqUB7%2FAHKjjd%2FulNoOWGMCrfMm86AnpUdyLd0pSEiibuxu6BRJG13rpTohFw8KYXMe85fhJ9z%2Beyp5FZeSXY4WffFuiCh9EVN2RRyhKdKpRoko5x1p1uc%2BUvFwCFebvJLfrnqPHFQopbf%2FGda2EVUbxkjE%2Fp23hisw6IW8DOktFAr7jdVLFposPqNAm%2FPwQbRiGu7UzMAm3ry%2F4RKfX493Untg8XVmFm&X-Amz-Signature=805244a63ca469ba2226cb3e3acf80e230a21011e88faec2e4721566c602108d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUJJMP5A%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIH8n4DRqTmTdX0CdBruU5u5m4dJfhHwi8goYZ%2BiBClQoAiEA8w1McHJfhZreBFQkvaxbxvL2WlG8QJ7x%2BLySOU77nGQq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAItmzHvxo9GUMysMyrcA57UkoKrgBId%2BXQc%2Ft3WOT5grXkRfPb%2B9b9U2yI0LWzglVx8cAqrV9yGum4X51Y9oAJrnvIJ2e6%2BwrCyRmyCwUSrmbKuSfPc0SGxMfku0fdA966E5Cql0N4JqSGqCsVC6OJg2vZiAso9oBuS52MeG3GcfK7Lqmzdlf%2B5f7may1%2Bga6gBn3JnSehIYD4TpDt3ZnOL4NpRNCR%2FIVG7vU6rhPEp8m7Qbgabm1p2c7adQKN7RDWbii4QXUHBx%2BAbYQK1G%2Ba0xH1%2BTL8Qih6ioQXykekJMvHx5JqRxuHpk4W8uXMVm%2BddcZf9%2FkOf%2FhFC9oh%2FX5pojwwl5s7b36XjVvlzA1yIPd0TfqK09hWIBMf8UJwbngHYMg2KJV9ZJ3OvMp0gXkuoR3EYHBobE7oOHkhC8YUNqFHbJFLB%2FeIBzWMAfghgBMhw2C64pX7DWYJUXnDiVqcSWdiU5gN%2FeyYXERqbt8lYyaGW7t%2BD3%2Fj%2FiPylboVaGfnnS0qBrLkfqozlmldIF909CpFQusqvWufEKXLcCX67%2FL%2BOyz7QA6tbOOb1br99ZibabvvtQkrrTo3cDvoX4OKXVgoBLIQxjSU8PogF8YjUZB1c6w0PODyN4jGNGPgei2N7WOEqj%2BUFmgEaMLSNnsMGOqUB7%2FAHKjjd%2FulNoOWGMCrfMm86AnpUdyLd0pSEiibuxu6BRJG13rpTohFw8KYXMe85fhJ9z%2Beyp5FZeSXY4WffFuiCh9EVN2RRyhKdKpRoko5x1p1uc%2BUvFwCFebvJLfrnqPHFQopbf%2FGda2EVUbxkjE%2Fp23hisw6IW8DOktFAr7jdVLFposPqNAm%2FPwQbRiGu7UzMAm3ry%2F4RKfX493Untg8XVmFm&X-Amz-Signature=6cfdcb47c1089a0744e3bfca8ea3c4c4ccee2ededdc1f30af23249565071cc2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
