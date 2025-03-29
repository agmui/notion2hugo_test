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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVPO2C2H%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBF4D0fbjBNkMqAHXVb3AFJTqFWNBcxxgaLQKB%2FRL8c3AiB46OtKvsUi%2BwIxJ3KvWlzjIvctGT6HFlhR4hYp27uNSCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMCe8NKu%2Beu83NObNpKtwDaBy9Wohy%2FDiyXlB1ICO5B5qBLS1%2B3T6tG2omT%2B2xF6MIGzCc7VfhRwFH%2Ft2tKkMUUzbIHojdAtO8lN0lBPoTAgK8PRjim9hgGN2mbodz31nJ2FprmeKVKdiufUbaT5A1iudmJMNVeGMimByR%2F83l%2FBSUt%2Bfx8psxlFSQEkZhKHEYNhUcA%2BUhW%2BcSn6ILYh2YrBxGd09RT2E%2F0HqV8FG7vk88hzN%2FJzu7o25th1j0UWi5x9EPA6Uf30rcdu%2F6Q5n1gane%2FugFLaI4hCZMqmXtuNmfWy6%2FymgpWBSb4jdYT3e7dABTZG6WJfE0L%2BU5X3C6uFhs5Lh50ln4BFYL3RzoDSNoRixsD9e34DRT3e7S5N16mm4OedRwi3j%2FlobOpjwJfEt2fmw971ig5ZggaY9d68Ln8cP9LSMyiYb5auWkbTbF6H6o%2FnwNBAybGTGjdGszda2iXPX7feErmG8h83Jsb1tkxSOYP6j5hqTS2t61YAdGqHL%2F3NVFuJznaAgPZbE210nbKgiv0SicVkknDeN3m1yHMG2B9Nt2I2mPs2w9WEKxXqhMIjTTuI7J2q196H50FQ%2FugZIT%2FrDy2IRO3CreaeqvRcgjCEIFEeXMxcB38Je%2Bdgq%2BRV2lCNyPVFMw8tuhvwY6pgH5JOZ0Az8hXckNEsbyydklU0kg0rN3ybue%2F%2FGpaq0WPWLKFoLs2%2Ffir68u1zbpbB%2BS%2F%2FAjoXRmMzc3xoBKx3L5YOGc2QXcySUZVu1ALyUS%2BILfh46KF%2F37PzsRm9u6h6V9ZEFL53BWJfkz5bn45KyW1aLnl18qMp%2FzqG28fEPdq93kZuRrvGf94FGZclbf%2B8r7XzOjo0OewrJJFchDlrM8US3KyhnB&X-Amz-Signature=c71a64a0b856f013a5c8a482029a5afdce9b1149709626c7ac6438faf514bc72&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVPO2C2H%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBF4D0fbjBNkMqAHXVb3AFJTqFWNBcxxgaLQKB%2FRL8c3AiB46OtKvsUi%2BwIxJ3KvWlzjIvctGT6HFlhR4hYp27uNSCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMCe8NKu%2Beu83NObNpKtwDaBy9Wohy%2FDiyXlB1ICO5B5qBLS1%2B3T6tG2omT%2B2xF6MIGzCc7VfhRwFH%2Ft2tKkMUUzbIHojdAtO8lN0lBPoTAgK8PRjim9hgGN2mbodz31nJ2FprmeKVKdiufUbaT5A1iudmJMNVeGMimByR%2F83l%2FBSUt%2Bfx8psxlFSQEkZhKHEYNhUcA%2BUhW%2BcSn6ILYh2YrBxGd09RT2E%2F0HqV8FG7vk88hzN%2FJzu7o25th1j0UWi5x9EPA6Uf30rcdu%2F6Q5n1gane%2FugFLaI4hCZMqmXtuNmfWy6%2FymgpWBSb4jdYT3e7dABTZG6WJfE0L%2BU5X3C6uFhs5Lh50ln4BFYL3RzoDSNoRixsD9e34DRT3e7S5N16mm4OedRwi3j%2FlobOpjwJfEt2fmw971ig5ZggaY9d68Ln8cP9LSMyiYb5auWkbTbF6H6o%2FnwNBAybGTGjdGszda2iXPX7feErmG8h83Jsb1tkxSOYP6j5hqTS2t61YAdGqHL%2F3NVFuJznaAgPZbE210nbKgiv0SicVkknDeN3m1yHMG2B9Nt2I2mPs2w9WEKxXqhMIjTTuI7J2q196H50FQ%2FugZIT%2FrDy2IRO3CreaeqvRcgjCEIFEeXMxcB38Je%2Bdgq%2BRV2lCNyPVFMw8tuhvwY6pgH5JOZ0Az8hXckNEsbyydklU0kg0rN3ybue%2F%2FGpaq0WPWLKFoLs2%2Ffir68u1zbpbB%2BS%2F%2FAjoXRmMzc3xoBKx3L5YOGc2QXcySUZVu1ALyUS%2BILfh46KF%2F37PzsRm9u6h6V9ZEFL53BWJfkz5bn45KyW1aLnl18qMp%2FzqG28fEPdq93kZuRrvGf94FGZclbf%2B8r7XzOjo0OewrJJFchDlrM8US3KyhnB&X-Amz-Signature=51d639bc91b531157938e819b285a27fba848852d04435accf38c42f362d2c32&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVPO2C2H%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBF4D0fbjBNkMqAHXVb3AFJTqFWNBcxxgaLQKB%2FRL8c3AiB46OtKvsUi%2BwIxJ3KvWlzjIvctGT6HFlhR4hYp27uNSCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMCe8NKu%2Beu83NObNpKtwDaBy9Wohy%2FDiyXlB1ICO5B5qBLS1%2B3T6tG2omT%2B2xF6MIGzCc7VfhRwFH%2Ft2tKkMUUzbIHojdAtO8lN0lBPoTAgK8PRjim9hgGN2mbodz31nJ2FprmeKVKdiufUbaT5A1iudmJMNVeGMimByR%2F83l%2FBSUt%2Bfx8psxlFSQEkZhKHEYNhUcA%2BUhW%2BcSn6ILYh2YrBxGd09RT2E%2F0HqV8FG7vk88hzN%2FJzu7o25th1j0UWi5x9EPA6Uf30rcdu%2F6Q5n1gane%2FugFLaI4hCZMqmXtuNmfWy6%2FymgpWBSb4jdYT3e7dABTZG6WJfE0L%2BU5X3C6uFhs5Lh50ln4BFYL3RzoDSNoRixsD9e34DRT3e7S5N16mm4OedRwi3j%2FlobOpjwJfEt2fmw971ig5ZggaY9d68Ln8cP9LSMyiYb5auWkbTbF6H6o%2FnwNBAybGTGjdGszda2iXPX7feErmG8h83Jsb1tkxSOYP6j5hqTS2t61YAdGqHL%2F3NVFuJznaAgPZbE210nbKgiv0SicVkknDeN3m1yHMG2B9Nt2I2mPs2w9WEKxXqhMIjTTuI7J2q196H50FQ%2FugZIT%2FrDy2IRO3CreaeqvRcgjCEIFEeXMxcB38Je%2Bdgq%2BRV2lCNyPVFMw8tuhvwY6pgH5JOZ0Az8hXckNEsbyydklU0kg0rN3ybue%2F%2FGpaq0WPWLKFoLs2%2Ffir68u1zbpbB%2BS%2F%2FAjoXRmMzc3xoBKx3L5YOGc2QXcySUZVu1ALyUS%2BILfh46KF%2F37PzsRm9u6h6V9ZEFL53BWJfkz5bn45KyW1aLnl18qMp%2FzqG28fEPdq93kZuRrvGf94FGZclbf%2B8r7XzOjo0OewrJJFchDlrM8US3KyhnB&X-Amz-Signature=e61b10697d9886b848505fee3c5d886c9e2d01764b14fc31cc1167c75b7ad5a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVPO2C2H%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBF4D0fbjBNkMqAHXVb3AFJTqFWNBcxxgaLQKB%2FRL8c3AiB46OtKvsUi%2BwIxJ3KvWlzjIvctGT6HFlhR4hYp27uNSCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMCe8NKu%2Beu83NObNpKtwDaBy9Wohy%2FDiyXlB1ICO5B5qBLS1%2B3T6tG2omT%2B2xF6MIGzCc7VfhRwFH%2Ft2tKkMUUzbIHojdAtO8lN0lBPoTAgK8PRjim9hgGN2mbodz31nJ2FprmeKVKdiufUbaT5A1iudmJMNVeGMimByR%2F83l%2FBSUt%2Bfx8psxlFSQEkZhKHEYNhUcA%2BUhW%2BcSn6ILYh2YrBxGd09RT2E%2F0HqV8FG7vk88hzN%2FJzu7o25th1j0UWi5x9EPA6Uf30rcdu%2F6Q5n1gane%2FugFLaI4hCZMqmXtuNmfWy6%2FymgpWBSb4jdYT3e7dABTZG6WJfE0L%2BU5X3C6uFhs5Lh50ln4BFYL3RzoDSNoRixsD9e34DRT3e7S5N16mm4OedRwi3j%2FlobOpjwJfEt2fmw971ig5ZggaY9d68Ln8cP9LSMyiYb5auWkbTbF6H6o%2FnwNBAybGTGjdGszda2iXPX7feErmG8h83Jsb1tkxSOYP6j5hqTS2t61YAdGqHL%2F3NVFuJznaAgPZbE210nbKgiv0SicVkknDeN3m1yHMG2B9Nt2I2mPs2w9WEKxXqhMIjTTuI7J2q196H50FQ%2FugZIT%2FrDy2IRO3CreaeqvRcgjCEIFEeXMxcB38Je%2Bdgq%2BRV2lCNyPVFMw8tuhvwY6pgH5JOZ0Az8hXckNEsbyydklU0kg0rN3ybue%2F%2FGpaq0WPWLKFoLs2%2Ffir68u1zbpbB%2BS%2F%2FAjoXRmMzc3xoBKx3L5YOGc2QXcySUZVu1ALyUS%2BILfh46KF%2F37PzsRm9u6h6V9ZEFL53BWJfkz5bn45KyW1aLnl18qMp%2FzqG28fEPdq93kZuRrvGf94FGZclbf%2B8r7XzOjo0OewrJJFchDlrM8US3KyhnB&X-Amz-Signature=244a5441361b6104948e8e48f2e1dc81469b8bbeddfd142810e77f0e5c8ca7a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVPO2C2H%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBF4D0fbjBNkMqAHXVb3AFJTqFWNBcxxgaLQKB%2FRL8c3AiB46OtKvsUi%2BwIxJ3KvWlzjIvctGT6HFlhR4hYp27uNSCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMCe8NKu%2Beu83NObNpKtwDaBy9Wohy%2FDiyXlB1ICO5B5qBLS1%2B3T6tG2omT%2B2xF6MIGzCc7VfhRwFH%2Ft2tKkMUUzbIHojdAtO8lN0lBPoTAgK8PRjim9hgGN2mbodz31nJ2FprmeKVKdiufUbaT5A1iudmJMNVeGMimByR%2F83l%2FBSUt%2Bfx8psxlFSQEkZhKHEYNhUcA%2BUhW%2BcSn6ILYh2YrBxGd09RT2E%2F0HqV8FG7vk88hzN%2FJzu7o25th1j0UWi5x9EPA6Uf30rcdu%2F6Q5n1gane%2FugFLaI4hCZMqmXtuNmfWy6%2FymgpWBSb4jdYT3e7dABTZG6WJfE0L%2BU5X3C6uFhs5Lh50ln4BFYL3RzoDSNoRixsD9e34DRT3e7S5N16mm4OedRwi3j%2FlobOpjwJfEt2fmw971ig5ZggaY9d68Ln8cP9LSMyiYb5auWkbTbF6H6o%2FnwNBAybGTGjdGszda2iXPX7feErmG8h83Jsb1tkxSOYP6j5hqTS2t61YAdGqHL%2F3NVFuJznaAgPZbE210nbKgiv0SicVkknDeN3m1yHMG2B9Nt2I2mPs2w9WEKxXqhMIjTTuI7J2q196H50FQ%2FugZIT%2FrDy2IRO3CreaeqvRcgjCEIFEeXMxcB38Je%2Bdgq%2BRV2lCNyPVFMw8tuhvwY6pgH5JOZ0Az8hXckNEsbyydklU0kg0rN3ybue%2F%2FGpaq0WPWLKFoLs2%2Ffir68u1zbpbB%2BS%2F%2FAjoXRmMzc3xoBKx3L5YOGc2QXcySUZVu1ALyUS%2BILfh46KF%2F37PzsRm9u6h6V9ZEFL53BWJfkz5bn45KyW1aLnl18qMp%2FzqG28fEPdq93kZuRrvGf94FGZclbf%2B8r7XzOjo0OewrJJFchDlrM8US3KyhnB&X-Amz-Signature=f79dfb5682f6b0f0146e263b09c7e905b829bcbd6136a3739356bad317b0bc79&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVPO2C2H%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIBF4D0fbjBNkMqAHXVb3AFJTqFWNBcxxgaLQKB%2FRL8c3AiB46OtKvsUi%2BwIxJ3KvWlzjIvctGT6HFlhR4hYp27uNSCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMCe8NKu%2Beu83NObNpKtwDaBy9Wohy%2FDiyXlB1ICO5B5qBLS1%2B3T6tG2omT%2B2xF6MIGzCc7VfhRwFH%2Ft2tKkMUUzbIHojdAtO8lN0lBPoTAgK8PRjim9hgGN2mbodz31nJ2FprmeKVKdiufUbaT5A1iudmJMNVeGMimByR%2F83l%2FBSUt%2Bfx8psxlFSQEkZhKHEYNhUcA%2BUhW%2BcSn6ILYh2YrBxGd09RT2E%2F0HqV8FG7vk88hzN%2FJzu7o25th1j0UWi5x9EPA6Uf30rcdu%2F6Q5n1gane%2FugFLaI4hCZMqmXtuNmfWy6%2FymgpWBSb4jdYT3e7dABTZG6WJfE0L%2BU5X3C6uFhs5Lh50ln4BFYL3RzoDSNoRixsD9e34DRT3e7S5N16mm4OedRwi3j%2FlobOpjwJfEt2fmw971ig5ZggaY9d68Ln8cP9LSMyiYb5auWkbTbF6H6o%2FnwNBAybGTGjdGszda2iXPX7feErmG8h83Jsb1tkxSOYP6j5hqTS2t61YAdGqHL%2F3NVFuJznaAgPZbE210nbKgiv0SicVkknDeN3m1yHMG2B9Nt2I2mPs2w9WEKxXqhMIjTTuI7J2q196H50FQ%2FugZIT%2FrDy2IRO3CreaeqvRcgjCEIFEeXMxcB38Je%2Bdgq%2BRV2lCNyPVFMw8tuhvwY6pgH5JOZ0Az8hXckNEsbyydklU0kg0rN3ybue%2F%2FGpaq0WPWLKFoLs2%2Ffir68u1zbpbB%2BS%2F%2FAjoXRmMzc3xoBKx3L5YOGc2QXcySUZVu1ALyUS%2BILfh46KF%2F37PzsRm9u6h6V9ZEFL53BWJfkz5bn45KyW1aLnl18qMp%2FzqG28fEPdq93kZuRrvGf94FGZclbf%2B8r7XzOjo0OewrJJFchDlrM8US3KyhnB&X-Amz-Signature=0b5c74db04be660897de4135cba72299fe73d7102f64bdfa799d02c09eadcb06&X-Amz-SignedHeaders=host&x-id=GetObject)
