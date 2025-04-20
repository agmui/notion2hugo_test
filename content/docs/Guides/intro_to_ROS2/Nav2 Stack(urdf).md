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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEG57OOG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDEIlTdr5biX2i85sSCBofkEHOug6v9c3Scjhkq1vASrgIgfK%2B3MtNogeHdVgC4f8lBmsSWEpK0GLiEfeqQ7Qg3Y5UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoLsyZ6EmhnLj9mKSrcA76FpxP1L2i1NUOu5zt%2BQCnGeJzwduWEMe9q6ySuE5urTkZBFzfqHyXHbVLLhqVHZNEga%2BUnKTEzhKsqZtxzC9IMHamGRKbg5JlOdFZCZvhbuMcQdMdYNK6AJtSzCaXaFHGlo87TiQu6baCUo%2BXGK1BFJ6etjHktPZLhsmY4ntBykqh%2FZA99OqtZ8hKzNglkJJJUU30o7C4jJ862xgeT846KDEf9w%2Bg5RwmV6jssNO3kYxL%2B0WSsLiArB5tPWIvE6MuV6xamm0r8LjQ1gyhDK4r2F4d4U%2FOwvvpE3Btz4pQ5BVOeFE7qi0RxQrpn35G96qBqzi1gYogZOgHRJxMIraGxAQS5tTUbM0MXAEePKHgjlEb8hrRzxRpxf88CKeFApKKMvYdxktcBfnQUCc%2Bc%2FzfyMi0ZD%2FSafcJOjg0%2FRWzQFzsSvgsBFWZ%2FeAAkfBHQLqFn%2FVPV2B38GtTxRronUmS7yZt1rGTb%2BSwFfSXWDlKAMtlQHHI0uSI%2Bvy2YdAWr0TWkjwBQ9BQcVdEx2hVQgybLe2CqhKf2Q%2FdSk%2FUkweZGlUU9wFbCPkVDidwT%2BB7a9hem3piLvXmaQG2g0Tj6akvOgX9ak0u5jzSYslUMtfT8EQSY%2FRL0X4Xbye%2B%2FMK%2FAk8AGOqUByS4jvSe0Va5IZvHoP1VNbC5CQtrPUAo%2BX%2F4xHYmfttHeRZb4YOkcGRp2xuewgFScNdMKs%2BReGqRTnojxgMHSaLmzewmGhc7L%2BFmAN6WtURxR6qrGEN%2Bf5Eeq5Y7NU9LsfCoLJ0sYWxeOHJ%2BxyGHPbTru%2BDh7DnVdNz3g3cxcX3K3uVV%2FOHgf0h%2B0AMhsunkbew%2FnakR25LgRgis5t38PRc1FMPjx&X-Amz-Signature=aa18f7294fb4eb65e1b4ea182b256c5ce82b430893078a04733544884863bd6c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEG57OOG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDEIlTdr5biX2i85sSCBofkEHOug6v9c3Scjhkq1vASrgIgfK%2B3MtNogeHdVgC4f8lBmsSWEpK0GLiEfeqQ7Qg3Y5UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoLsyZ6EmhnLj9mKSrcA76FpxP1L2i1NUOu5zt%2BQCnGeJzwduWEMe9q6ySuE5urTkZBFzfqHyXHbVLLhqVHZNEga%2BUnKTEzhKsqZtxzC9IMHamGRKbg5JlOdFZCZvhbuMcQdMdYNK6AJtSzCaXaFHGlo87TiQu6baCUo%2BXGK1BFJ6etjHktPZLhsmY4ntBykqh%2FZA99OqtZ8hKzNglkJJJUU30o7C4jJ862xgeT846KDEf9w%2Bg5RwmV6jssNO3kYxL%2B0WSsLiArB5tPWIvE6MuV6xamm0r8LjQ1gyhDK4r2F4d4U%2FOwvvpE3Btz4pQ5BVOeFE7qi0RxQrpn35G96qBqzi1gYogZOgHRJxMIraGxAQS5tTUbM0MXAEePKHgjlEb8hrRzxRpxf88CKeFApKKMvYdxktcBfnQUCc%2Bc%2FzfyMi0ZD%2FSafcJOjg0%2FRWzQFzsSvgsBFWZ%2FeAAkfBHQLqFn%2FVPV2B38GtTxRronUmS7yZt1rGTb%2BSwFfSXWDlKAMtlQHHI0uSI%2Bvy2YdAWr0TWkjwBQ9BQcVdEx2hVQgybLe2CqhKf2Q%2FdSk%2FUkweZGlUU9wFbCPkVDidwT%2BB7a9hem3piLvXmaQG2g0Tj6akvOgX9ak0u5jzSYslUMtfT8EQSY%2FRL0X4Xbye%2B%2FMK%2FAk8AGOqUByS4jvSe0Va5IZvHoP1VNbC5CQtrPUAo%2BX%2F4xHYmfttHeRZb4YOkcGRp2xuewgFScNdMKs%2BReGqRTnojxgMHSaLmzewmGhc7L%2BFmAN6WtURxR6qrGEN%2Bf5Eeq5Y7NU9LsfCoLJ0sYWxeOHJ%2BxyGHPbTru%2BDh7DnVdNz3g3cxcX3K3uVV%2FOHgf0h%2B0AMhsunkbew%2FnakR25LgRgis5t38PRc1FMPjx&X-Amz-Signature=25f71e4f74e3a1c7599aa1e05dab165bf7bbe90a2ae6e249024c6eaafecf50d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEG57OOG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDEIlTdr5biX2i85sSCBofkEHOug6v9c3Scjhkq1vASrgIgfK%2B3MtNogeHdVgC4f8lBmsSWEpK0GLiEfeqQ7Qg3Y5UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoLsyZ6EmhnLj9mKSrcA76FpxP1L2i1NUOu5zt%2BQCnGeJzwduWEMe9q6ySuE5urTkZBFzfqHyXHbVLLhqVHZNEga%2BUnKTEzhKsqZtxzC9IMHamGRKbg5JlOdFZCZvhbuMcQdMdYNK6AJtSzCaXaFHGlo87TiQu6baCUo%2BXGK1BFJ6etjHktPZLhsmY4ntBykqh%2FZA99OqtZ8hKzNglkJJJUU30o7C4jJ862xgeT846KDEf9w%2Bg5RwmV6jssNO3kYxL%2B0WSsLiArB5tPWIvE6MuV6xamm0r8LjQ1gyhDK4r2F4d4U%2FOwvvpE3Btz4pQ5BVOeFE7qi0RxQrpn35G96qBqzi1gYogZOgHRJxMIraGxAQS5tTUbM0MXAEePKHgjlEb8hrRzxRpxf88CKeFApKKMvYdxktcBfnQUCc%2Bc%2FzfyMi0ZD%2FSafcJOjg0%2FRWzQFzsSvgsBFWZ%2FeAAkfBHQLqFn%2FVPV2B38GtTxRronUmS7yZt1rGTb%2BSwFfSXWDlKAMtlQHHI0uSI%2Bvy2YdAWr0TWkjwBQ9BQcVdEx2hVQgybLe2CqhKf2Q%2FdSk%2FUkweZGlUU9wFbCPkVDidwT%2BB7a9hem3piLvXmaQG2g0Tj6akvOgX9ak0u5jzSYslUMtfT8EQSY%2FRL0X4Xbye%2B%2FMK%2FAk8AGOqUByS4jvSe0Va5IZvHoP1VNbC5CQtrPUAo%2BX%2F4xHYmfttHeRZb4YOkcGRp2xuewgFScNdMKs%2BReGqRTnojxgMHSaLmzewmGhc7L%2BFmAN6WtURxR6qrGEN%2Bf5Eeq5Y7NU9LsfCoLJ0sYWxeOHJ%2BxyGHPbTru%2BDh7DnVdNz3g3cxcX3K3uVV%2FOHgf0h%2B0AMhsunkbew%2FnakR25LgRgis5t38PRc1FMPjx&X-Amz-Signature=23cada07f162ce5d94f13faeb1b0b6ad23d3a6c4d3020acaa15c5c2052e50e2a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEG57OOG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDEIlTdr5biX2i85sSCBofkEHOug6v9c3Scjhkq1vASrgIgfK%2B3MtNogeHdVgC4f8lBmsSWEpK0GLiEfeqQ7Qg3Y5UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoLsyZ6EmhnLj9mKSrcA76FpxP1L2i1NUOu5zt%2BQCnGeJzwduWEMe9q6ySuE5urTkZBFzfqHyXHbVLLhqVHZNEga%2BUnKTEzhKsqZtxzC9IMHamGRKbg5JlOdFZCZvhbuMcQdMdYNK6AJtSzCaXaFHGlo87TiQu6baCUo%2BXGK1BFJ6etjHktPZLhsmY4ntBykqh%2FZA99OqtZ8hKzNglkJJJUU30o7C4jJ862xgeT846KDEf9w%2Bg5RwmV6jssNO3kYxL%2B0WSsLiArB5tPWIvE6MuV6xamm0r8LjQ1gyhDK4r2F4d4U%2FOwvvpE3Btz4pQ5BVOeFE7qi0RxQrpn35G96qBqzi1gYogZOgHRJxMIraGxAQS5tTUbM0MXAEePKHgjlEb8hrRzxRpxf88CKeFApKKMvYdxktcBfnQUCc%2Bc%2FzfyMi0ZD%2FSafcJOjg0%2FRWzQFzsSvgsBFWZ%2FeAAkfBHQLqFn%2FVPV2B38GtTxRronUmS7yZt1rGTb%2BSwFfSXWDlKAMtlQHHI0uSI%2Bvy2YdAWr0TWkjwBQ9BQcVdEx2hVQgybLe2CqhKf2Q%2FdSk%2FUkweZGlUU9wFbCPkVDidwT%2BB7a9hem3piLvXmaQG2g0Tj6akvOgX9ak0u5jzSYslUMtfT8EQSY%2FRL0X4Xbye%2B%2FMK%2FAk8AGOqUByS4jvSe0Va5IZvHoP1VNbC5CQtrPUAo%2BX%2F4xHYmfttHeRZb4YOkcGRp2xuewgFScNdMKs%2BReGqRTnojxgMHSaLmzewmGhc7L%2BFmAN6WtURxR6qrGEN%2Bf5Eeq5Y7NU9LsfCoLJ0sYWxeOHJ%2BxyGHPbTru%2BDh7DnVdNz3g3cxcX3K3uVV%2FOHgf0h%2B0AMhsunkbew%2FnakR25LgRgis5t38PRc1FMPjx&X-Amz-Signature=ccf5b64da6d31331d4e135a3162347115c2f295159a6c7cc1a06e0946e33efe8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEG57OOG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDEIlTdr5biX2i85sSCBofkEHOug6v9c3Scjhkq1vASrgIgfK%2B3MtNogeHdVgC4f8lBmsSWEpK0GLiEfeqQ7Qg3Y5UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoLsyZ6EmhnLj9mKSrcA76FpxP1L2i1NUOu5zt%2BQCnGeJzwduWEMe9q6ySuE5urTkZBFzfqHyXHbVLLhqVHZNEga%2BUnKTEzhKsqZtxzC9IMHamGRKbg5JlOdFZCZvhbuMcQdMdYNK6AJtSzCaXaFHGlo87TiQu6baCUo%2BXGK1BFJ6etjHktPZLhsmY4ntBykqh%2FZA99OqtZ8hKzNglkJJJUU30o7C4jJ862xgeT846KDEf9w%2Bg5RwmV6jssNO3kYxL%2B0WSsLiArB5tPWIvE6MuV6xamm0r8LjQ1gyhDK4r2F4d4U%2FOwvvpE3Btz4pQ5BVOeFE7qi0RxQrpn35G96qBqzi1gYogZOgHRJxMIraGxAQS5tTUbM0MXAEePKHgjlEb8hrRzxRpxf88CKeFApKKMvYdxktcBfnQUCc%2Bc%2FzfyMi0ZD%2FSafcJOjg0%2FRWzQFzsSvgsBFWZ%2FeAAkfBHQLqFn%2FVPV2B38GtTxRronUmS7yZt1rGTb%2BSwFfSXWDlKAMtlQHHI0uSI%2Bvy2YdAWr0TWkjwBQ9BQcVdEx2hVQgybLe2CqhKf2Q%2FdSk%2FUkweZGlUU9wFbCPkVDidwT%2BB7a9hem3piLvXmaQG2g0Tj6akvOgX9ak0u5jzSYslUMtfT8EQSY%2FRL0X4Xbye%2B%2FMK%2FAk8AGOqUByS4jvSe0Va5IZvHoP1VNbC5CQtrPUAo%2BX%2F4xHYmfttHeRZb4YOkcGRp2xuewgFScNdMKs%2BReGqRTnojxgMHSaLmzewmGhc7L%2BFmAN6WtURxR6qrGEN%2Bf5Eeq5Y7NU9LsfCoLJ0sYWxeOHJ%2BxyGHPbTru%2BDh7DnVdNz3g3cxcX3K3uVV%2FOHgf0h%2B0AMhsunkbew%2FnakR25LgRgis5t38PRc1FMPjx&X-Amz-Signature=d4758477e1a1e5502594decdb5b9e9fa81ebb8a5698a0be436ef5b48dfd8bd67&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEG57OOG%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T131713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQDEIlTdr5biX2i85sSCBofkEHOug6v9c3Scjhkq1vASrgIgfK%2B3MtNogeHdVgC4f8lBmsSWEpK0GLiEfeqQ7Qg3Y5UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoLsyZ6EmhnLj9mKSrcA76FpxP1L2i1NUOu5zt%2BQCnGeJzwduWEMe9q6ySuE5urTkZBFzfqHyXHbVLLhqVHZNEga%2BUnKTEzhKsqZtxzC9IMHamGRKbg5JlOdFZCZvhbuMcQdMdYNK6AJtSzCaXaFHGlo87TiQu6baCUo%2BXGK1BFJ6etjHktPZLhsmY4ntBykqh%2FZA99OqtZ8hKzNglkJJJUU30o7C4jJ862xgeT846KDEf9w%2Bg5RwmV6jssNO3kYxL%2B0WSsLiArB5tPWIvE6MuV6xamm0r8LjQ1gyhDK4r2F4d4U%2FOwvvpE3Btz4pQ5BVOeFE7qi0RxQrpn35G96qBqzi1gYogZOgHRJxMIraGxAQS5tTUbM0MXAEePKHgjlEb8hrRzxRpxf88CKeFApKKMvYdxktcBfnQUCc%2Bc%2FzfyMi0ZD%2FSafcJOjg0%2FRWzQFzsSvgsBFWZ%2FeAAkfBHQLqFn%2FVPV2B38GtTxRronUmS7yZt1rGTb%2BSwFfSXWDlKAMtlQHHI0uSI%2Bvy2YdAWr0TWkjwBQ9BQcVdEx2hVQgybLe2CqhKf2Q%2FdSk%2FUkweZGlUU9wFbCPkVDidwT%2BB7a9hem3piLvXmaQG2g0Tj6akvOgX9ak0u5jzSYslUMtfT8EQSY%2FRL0X4Xbye%2B%2FMK%2FAk8AGOqUByS4jvSe0Va5IZvHoP1VNbC5CQtrPUAo%2BX%2F4xHYmfttHeRZb4YOkcGRp2xuewgFScNdMKs%2BReGqRTnojxgMHSaLmzewmGhc7L%2BFmAN6WtURxR6qrGEN%2Bf5Eeq5Y7NU9LsfCoLJ0sYWxeOHJ%2BxyGHPbTru%2BDh7DnVdNz3g3cxcX3K3uVV%2FOHgf0h%2B0AMhsunkbew%2FnakR25LgRgis5t38PRc1FMPjx&X-Amz-Signature=cac211155d63d29e21aa22a921ca126932eed7ffb6fe6298dc67b637eebf53e4&X-Amz-SignedHeaders=host&x-id=GetObject)
