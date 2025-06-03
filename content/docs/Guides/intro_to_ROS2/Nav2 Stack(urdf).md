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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OVDXYHS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIHk49Axb1SS0UyNY1cMwGwS2vEHippF%2Bnk8cWb5QT2xRAiBww0W5UvhpQSyupCCCYtKYJDkbq9uj7iLX9Cs4jQzIbyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMAFIxs9Md1XJjrlo7KtwDfxTXXeo%2Fvq24aR54KBxPG4m15TyGpUDgLdgpGXjDHQGGjvbb0dwppK%2F6phgvuBu4wqbLDm3NE%2FeEMhuxaXpfW2BLfqwl%2FF09oBFqvLciM0bXen6tbyOHKwH3L9iV16tpovlf51hkXgso9%2F1yhmOKrem%2B%2F0WBp%2BNcR7MVcSpzJT28wPo6Ug3dhY%2B5xM%2FK0oR4yf%2FJ2MaSwbTNR1D87Sxb7Wt4LluHevfb8w5V6QvGbFf6Xdtah8MvtQGF6JTlOodPU7oV%2BjTrBnQeSJEpDiScE%2F99lkjbMyKb%2FkCCdwa8XOBFtkYloxkifbZ%2BP31wMR0d61Jfy1w1QOuG53OQSP0E60d9qL7FZj68L4BDChjq8FX2QFvZPVlUbmIQ73XKPpJdA9g3ZZcmg4ZgSdwlM17opsrIX03QXK5kplPeQvqWGTlu11GvPzXwCtHvF89FxxaBsegfMARLBwRjhXyNQ1bhwvaKDGKSChek%2BYIYxQcOejT5gad%2Fc%2BYvkiGdbs0M1Zs5FguIj0VOlzdqiNyqsXa6W7CjAw4xOMWvlL8hOUtOx266N6QPskedSnHThUg6Dd%2FDZv1tPt2u%2BUBxhmOEjPsalB1gktaiOStIrn0HvDu93NPc5mLr2dmZ1rOe7y8wndL8wQY6pgFlbAYtJR4%2FEFTCjPW4SjvIux5cdwG4fpyIHB2qmipqmyszeOM18uNPUEgd%2FPAkEZvHdCTV14jQsCzLHR3TSTz1An%2Fe%2FVe8GNfRxCFOtbEuq7pHKwd0pDptsTqJ5RutWYDT44JS1gJbtQAEl8hbJaBg8%2BnIuwpuG7qFXekdzd0NlQZSlPIN%2FrpACEbSyMdcQjes88UxjJUKrLxUXJ5M9DZvrZA5lese&X-Amz-Signature=9c44abb478939b74634672ea9d14ee6c76138cb61cbe1c8a5e4bc32e18bb3ec2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OVDXYHS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIHk49Axb1SS0UyNY1cMwGwS2vEHippF%2Bnk8cWb5QT2xRAiBww0W5UvhpQSyupCCCYtKYJDkbq9uj7iLX9Cs4jQzIbyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMAFIxs9Md1XJjrlo7KtwDfxTXXeo%2Fvq24aR54KBxPG4m15TyGpUDgLdgpGXjDHQGGjvbb0dwppK%2F6phgvuBu4wqbLDm3NE%2FeEMhuxaXpfW2BLfqwl%2FF09oBFqvLciM0bXen6tbyOHKwH3L9iV16tpovlf51hkXgso9%2F1yhmOKrem%2B%2F0WBp%2BNcR7MVcSpzJT28wPo6Ug3dhY%2B5xM%2FK0oR4yf%2FJ2MaSwbTNR1D87Sxb7Wt4LluHevfb8w5V6QvGbFf6Xdtah8MvtQGF6JTlOodPU7oV%2BjTrBnQeSJEpDiScE%2F99lkjbMyKb%2FkCCdwa8XOBFtkYloxkifbZ%2BP31wMR0d61Jfy1w1QOuG53OQSP0E60d9qL7FZj68L4BDChjq8FX2QFvZPVlUbmIQ73XKPpJdA9g3ZZcmg4ZgSdwlM17opsrIX03QXK5kplPeQvqWGTlu11GvPzXwCtHvF89FxxaBsegfMARLBwRjhXyNQ1bhwvaKDGKSChek%2BYIYxQcOejT5gad%2Fc%2BYvkiGdbs0M1Zs5FguIj0VOlzdqiNyqsXa6W7CjAw4xOMWvlL8hOUtOx266N6QPskedSnHThUg6Dd%2FDZv1tPt2u%2BUBxhmOEjPsalB1gktaiOStIrn0HvDu93NPc5mLr2dmZ1rOe7y8wndL8wQY6pgFlbAYtJR4%2FEFTCjPW4SjvIux5cdwG4fpyIHB2qmipqmyszeOM18uNPUEgd%2FPAkEZvHdCTV14jQsCzLHR3TSTz1An%2Fe%2FVe8GNfRxCFOtbEuq7pHKwd0pDptsTqJ5RutWYDT44JS1gJbtQAEl8hbJaBg8%2BnIuwpuG7qFXekdzd0NlQZSlPIN%2FrpACEbSyMdcQjes88UxjJUKrLxUXJ5M9DZvrZA5lese&X-Amz-Signature=5ffd45c1c127ecbe7660bcdc5c9e122c0d8f2587115ef427c340056f7cf0e848&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OVDXYHS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIHk49Axb1SS0UyNY1cMwGwS2vEHippF%2Bnk8cWb5QT2xRAiBww0W5UvhpQSyupCCCYtKYJDkbq9uj7iLX9Cs4jQzIbyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMAFIxs9Md1XJjrlo7KtwDfxTXXeo%2Fvq24aR54KBxPG4m15TyGpUDgLdgpGXjDHQGGjvbb0dwppK%2F6phgvuBu4wqbLDm3NE%2FeEMhuxaXpfW2BLfqwl%2FF09oBFqvLciM0bXen6tbyOHKwH3L9iV16tpovlf51hkXgso9%2F1yhmOKrem%2B%2F0WBp%2BNcR7MVcSpzJT28wPo6Ug3dhY%2B5xM%2FK0oR4yf%2FJ2MaSwbTNR1D87Sxb7Wt4LluHevfb8w5V6QvGbFf6Xdtah8MvtQGF6JTlOodPU7oV%2BjTrBnQeSJEpDiScE%2F99lkjbMyKb%2FkCCdwa8XOBFtkYloxkifbZ%2BP31wMR0d61Jfy1w1QOuG53OQSP0E60d9qL7FZj68L4BDChjq8FX2QFvZPVlUbmIQ73XKPpJdA9g3ZZcmg4ZgSdwlM17opsrIX03QXK5kplPeQvqWGTlu11GvPzXwCtHvF89FxxaBsegfMARLBwRjhXyNQ1bhwvaKDGKSChek%2BYIYxQcOejT5gad%2Fc%2BYvkiGdbs0M1Zs5FguIj0VOlzdqiNyqsXa6W7CjAw4xOMWvlL8hOUtOx266N6QPskedSnHThUg6Dd%2FDZv1tPt2u%2BUBxhmOEjPsalB1gktaiOStIrn0HvDu93NPc5mLr2dmZ1rOe7y8wndL8wQY6pgFlbAYtJR4%2FEFTCjPW4SjvIux5cdwG4fpyIHB2qmipqmyszeOM18uNPUEgd%2FPAkEZvHdCTV14jQsCzLHR3TSTz1An%2Fe%2FVe8GNfRxCFOtbEuq7pHKwd0pDptsTqJ5RutWYDT44JS1gJbtQAEl8hbJaBg8%2BnIuwpuG7qFXekdzd0NlQZSlPIN%2FrpACEbSyMdcQjes88UxjJUKrLxUXJ5M9DZvrZA5lese&X-Amz-Signature=ed7bb33cbd504f6b8e4086f822e51183a12d33079449c42932d8ee587d10714e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OVDXYHS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIHk49Axb1SS0UyNY1cMwGwS2vEHippF%2Bnk8cWb5QT2xRAiBww0W5UvhpQSyupCCCYtKYJDkbq9uj7iLX9Cs4jQzIbyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMAFIxs9Md1XJjrlo7KtwDfxTXXeo%2Fvq24aR54KBxPG4m15TyGpUDgLdgpGXjDHQGGjvbb0dwppK%2F6phgvuBu4wqbLDm3NE%2FeEMhuxaXpfW2BLfqwl%2FF09oBFqvLciM0bXen6tbyOHKwH3L9iV16tpovlf51hkXgso9%2F1yhmOKrem%2B%2F0WBp%2BNcR7MVcSpzJT28wPo6Ug3dhY%2B5xM%2FK0oR4yf%2FJ2MaSwbTNR1D87Sxb7Wt4LluHevfb8w5V6QvGbFf6Xdtah8MvtQGF6JTlOodPU7oV%2BjTrBnQeSJEpDiScE%2F99lkjbMyKb%2FkCCdwa8XOBFtkYloxkifbZ%2BP31wMR0d61Jfy1w1QOuG53OQSP0E60d9qL7FZj68L4BDChjq8FX2QFvZPVlUbmIQ73XKPpJdA9g3ZZcmg4ZgSdwlM17opsrIX03QXK5kplPeQvqWGTlu11GvPzXwCtHvF89FxxaBsegfMARLBwRjhXyNQ1bhwvaKDGKSChek%2BYIYxQcOejT5gad%2Fc%2BYvkiGdbs0M1Zs5FguIj0VOlzdqiNyqsXa6W7CjAw4xOMWvlL8hOUtOx266N6QPskedSnHThUg6Dd%2FDZv1tPt2u%2BUBxhmOEjPsalB1gktaiOStIrn0HvDu93NPc5mLr2dmZ1rOe7y8wndL8wQY6pgFlbAYtJR4%2FEFTCjPW4SjvIux5cdwG4fpyIHB2qmipqmyszeOM18uNPUEgd%2FPAkEZvHdCTV14jQsCzLHR3TSTz1An%2Fe%2FVe8GNfRxCFOtbEuq7pHKwd0pDptsTqJ5RutWYDT44JS1gJbtQAEl8hbJaBg8%2BnIuwpuG7qFXekdzd0NlQZSlPIN%2FrpACEbSyMdcQjes88UxjJUKrLxUXJ5M9DZvrZA5lese&X-Amz-Signature=2e49ce6d708057d0684ad50f43826e422be7794345df68c3bf19c09359a9db16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OVDXYHS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIHk49Axb1SS0UyNY1cMwGwS2vEHippF%2Bnk8cWb5QT2xRAiBww0W5UvhpQSyupCCCYtKYJDkbq9uj7iLX9Cs4jQzIbyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMAFIxs9Md1XJjrlo7KtwDfxTXXeo%2Fvq24aR54KBxPG4m15TyGpUDgLdgpGXjDHQGGjvbb0dwppK%2F6phgvuBu4wqbLDm3NE%2FeEMhuxaXpfW2BLfqwl%2FF09oBFqvLciM0bXen6tbyOHKwH3L9iV16tpovlf51hkXgso9%2F1yhmOKrem%2B%2F0WBp%2BNcR7MVcSpzJT28wPo6Ug3dhY%2B5xM%2FK0oR4yf%2FJ2MaSwbTNR1D87Sxb7Wt4LluHevfb8w5V6QvGbFf6Xdtah8MvtQGF6JTlOodPU7oV%2BjTrBnQeSJEpDiScE%2F99lkjbMyKb%2FkCCdwa8XOBFtkYloxkifbZ%2BP31wMR0d61Jfy1w1QOuG53OQSP0E60d9qL7FZj68L4BDChjq8FX2QFvZPVlUbmIQ73XKPpJdA9g3ZZcmg4ZgSdwlM17opsrIX03QXK5kplPeQvqWGTlu11GvPzXwCtHvF89FxxaBsegfMARLBwRjhXyNQ1bhwvaKDGKSChek%2BYIYxQcOejT5gad%2Fc%2BYvkiGdbs0M1Zs5FguIj0VOlzdqiNyqsXa6W7CjAw4xOMWvlL8hOUtOx266N6QPskedSnHThUg6Dd%2FDZv1tPt2u%2BUBxhmOEjPsalB1gktaiOStIrn0HvDu93NPc5mLr2dmZ1rOe7y8wndL8wQY6pgFlbAYtJR4%2FEFTCjPW4SjvIux5cdwG4fpyIHB2qmipqmyszeOM18uNPUEgd%2FPAkEZvHdCTV14jQsCzLHR3TSTz1An%2Fe%2FVe8GNfRxCFOtbEuq7pHKwd0pDptsTqJ5RutWYDT44JS1gJbtQAEl8hbJaBg8%2BnIuwpuG7qFXekdzd0NlQZSlPIN%2FrpACEbSyMdcQjes88UxjJUKrLxUXJ5M9DZvrZA5lese&X-Amz-Signature=badd28c473ba7362ba6875cbbad6aa5fd898b9545a696badf7ff315192e149f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OVDXYHS%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIHk49Axb1SS0UyNY1cMwGwS2vEHippF%2Bnk8cWb5QT2xRAiBww0W5UvhpQSyupCCCYtKYJDkbq9uj7iLX9Cs4jQzIbyr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMAFIxs9Md1XJjrlo7KtwDfxTXXeo%2Fvq24aR54KBxPG4m15TyGpUDgLdgpGXjDHQGGjvbb0dwppK%2F6phgvuBu4wqbLDm3NE%2FeEMhuxaXpfW2BLfqwl%2FF09oBFqvLciM0bXen6tbyOHKwH3L9iV16tpovlf51hkXgso9%2F1yhmOKrem%2B%2F0WBp%2BNcR7MVcSpzJT28wPo6Ug3dhY%2B5xM%2FK0oR4yf%2FJ2MaSwbTNR1D87Sxb7Wt4LluHevfb8w5V6QvGbFf6Xdtah8MvtQGF6JTlOodPU7oV%2BjTrBnQeSJEpDiScE%2F99lkjbMyKb%2FkCCdwa8XOBFtkYloxkifbZ%2BP31wMR0d61Jfy1w1QOuG53OQSP0E60d9qL7FZj68L4BDChjq8FX2QFvZPVlUbmIQ73XKPpJdA9g3ZZcmg4ZgSdwlM17opsrIX03QXK5kplPeQvqWGTlu11GvPzXwCtHvF89FxxaBsegfMARLBwRjhXyNQ1bhwvaKDGKSChek%2BYIYxQcOejT5gad%2Fc%2BYvkiGdbs0M1Zs5FguIj0VOlzdqiNyqsXa6W7CjAw4xOMWvlL8hOUtOx266N6QPskedSnHThUg6Dd%2FDZv1tPt2u%2BUBxhmOEjPsalB1gktaiOStIrn0HvDu93NPc5mLr2dmZ1rOe7y8wndL8wQY6pgFlbAYtJR4%2FEFTCjPW4SjvIux5cdwG4fpyIHB2qmipqmyszeOM18uNPUEgd%2FPAkEZvHdCTV14jQsCzLHR3TSTz1An%2Fe%2FVe8GNfRxCFOtbEuq7pHKwd0pDptsTqJ5RutWYDT44JS1gJbtQAEl8hbJaBg8%2BnIuwpuG7qFXekdzd0NlQZSlPIN%2FrpACEbSyMdcQjes88UxjJUKrLxUXJ5M9DZvrZA5lese&X-Amz-Signature=825cdecfb987dcecfd7f131c8071c04618acab0751a80f3ef0dda13137e3bea1&X-Amz-SignedHeaders=host&x-id=GetObject)
