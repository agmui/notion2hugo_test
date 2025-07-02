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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TYR2VAR%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuzoctIFCNK1fHfZd05nF4OKM%2FGMTosLCb9Xam3sjylgIhAIXeQZrsDf%2BxwnZAeGWJnJbaeD4DH8SSunJy1lpL0bA6KogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHtQiDt39SIOVvkb8q3APzo%2FzVeJ1nA8Xv1xtG2nIrFOAUXCI7O6KHJxRr7PgEcg9Wcfq2vh2nA9ACNffiP7O%2FVkZUqt9Xar6eX49cJAq6Bc%2FCi7zoQ9qUFxujc9B91Hc9zE8gtMhHJzNVOhxpVsv7gRxs497LpmJTcKtfLh9duUe2xscuNjnMT3NgFcp0iZEkW0dKDgTCbBFZiipvNWQeyhCDs9s3rouzxcmVREkPdlAqdDhoShsGdY0CHrXsWIYUIXLmAH5qRoRKEmoE2e7lLZIConqG%2F2YJa5d5u1imRb3kBNruuaw%2BDHpRI7lNziGBZYUCC9sFp8XHcYNmqidJSaoWK4E%2Bnpe%2Bh0lTZV1uICH84Iz4U%2FLvi%2FVjgPg91mP1puTC5ZFZk5dh1yk9EFSfMhm2mEoPwn0JUGtMatEsnMz1m7WfUK285ixgvywX9a9FIOnWzoo6c6LmBKeTiD3Nv2BmwHbC%2FYPxtLte6OpD2tJdGUS6eqehLVB8nagHSKQaziYz%2FPaS3NhCkYMpZ2uD0S3y2RvJ%2BOY8U6WT4hQ8KRnFr138w%2B%2Bp4uTZwm6a3C5Jzb1FMTt%2BSSC6GsWX93iTNzVvIc39XW7FBYA2Mo%2F%2FzvgCb%2FgJI85qNVbOYWIjy7WZ9HcRzGxyKUPzljDgnpLDBjqkAduxgo7NOC3ij0B6QakC8IX%2F96BWx8wxnNjqJsn7OqvqSHAUuTCuI8p4aAEQCmL5nLgcSBwQGiTid3b2PXG7vW2WQ3OFCA4pjQ1D6ysYO7kWcklgg2MTZfG9f4KM3r8ADfOVAtApzmyeFY9v9%2BrDGFRkvAkS5RCU8iCd3VKXfro4wjonEA0VztPnirqTaTnST0Ex72Cm2ILjkJqI%2FVhTlqCsOISY&X-Amz-Signature=63238522337840604bc959485ed6577d80a1cdc0b8f9e39366541ec552ab4d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TYR2VAR%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuzoctIFCNK1fHfZd05nF4OKM%2FGMTosLCb9Xam3sjylgIhAIXeQZrsDf%2BxwnZAeGWJnJbaeD4DH8SSunJy1lpL0bA6KogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHtQiDt39SIOVvkb8q3APzo%2FzVeJ1nA8Xv1xtG2nIrFOAUXCI7O6KHJxRr7PgEcg9Wcfq2vh2nA9ACNffiP7O%2FVkZUqt9Xar6eX49cJAq6Bc%2FCi7zoQ9qUFxujc9B91Hc9zE8gtMhHJzNVOhxpVsv7gRxs497LpmJTcKtfLh9duUe2xscuNjnMT3NgFcp0iZEkW0dKDgTCbBFZiipvNWQeyhCDs9s3rouzxcmVREkPdlAqdDhoShsGdY0CHrXsWIYUIXLmAH5qRoRKEmoE2e7lLZIConqG%2F2YJa5d5u1imRb3kBNruuaw%2BDHpRI7lNziGBZYUCC9sFp8XHcYNmqidJSaoWK4E%2Bnpe%2Bh0lTZV1uICH84Iz4U%2FLvi%2FVjgPg91mP1puTC5ZFZk5dh1yk9EFSfMhm2mEoPwn0JUGtMatEsnMz1m7WfUK285ixgvywX9a9FIOnWzoo6c6LmBKeTiD3Nv2BmwHbC%2FYPxtLte6OpD2tJdGUS6eqehLVB8nagHSKQaziYz%2FPaS3NhCkYMpZ2uD0S3y2RvJ%2BOY8U6WT4hQ8KRnFr138w%2B%2Bp4uTZwm6a3C5Jzb1FMTt%2BSSC6GsWX93iTNzVvIc39XW7FBYA2Mo%2F%2FzvgCb%2FgJI85qNVbOYWIjy7WZ9HcRzGxyKUPzljDgnpLDBjqkAduxgo7NOC3ij0B6QakC8IX%2F96BWx8wxnNjqJsn7OqvqSHAUuTCuI8p4aAEQCmL5nLgcSBwQGiTid3b2PXG7vW2WQ3OFCA4pjQ1D6ysYO7kWcklgg2MTZfG9f4KM3r8ADfOVAtApzmyeFY9v9%2BrDGFRkvAkS5RCU8iCd3VKXfro4wjonEA0VztPnirqTaTnST0Ex72Cm2ILjkJqI%2FVhTlqCsOISY&X-Amz-Signature=c55f3fb46d2df82d473328ddfe15261a2d25fa5691d7c6f56721e8069c2768e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TYR2VAR%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuzoctIFCNK1fHfZd05nF4OKM%2FGMTosLCb9Xam3sjylgIhAIXeQZrsDf%2BxwnZAeGWJnJbaeD4DH8SSunJy1lpL0bA6KogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHtQiDt39SIOVvkb8q3APzo%2FzVeJ1nA8Xv1xtG2nIrFOAUXCI7O6KHJxRr7PgEcg9Wcfq2vh2nA9ACNffiP7O%2FVkZUqt9Xar6eX49cJAq6Bc%2FCi7zoQ9qUFxujc9B91Hc9zE8gtMhHJzNVOhxpVsv7gRxs497LpmJTcKtfLh9duUe2xscuNjnMT3NgFcp0iZEkW0dKDgTCbBFZiipvNWQeyhCDs9s3rouzxcmVREkPdlAqdDhoShsGdY0CHrXsWIYUIXLmAH5qRoRKEmoE2e7lLZIConqG%2F2YJa5d5u1imRb3kBNruuaw%2BDHpRI7lNziGBZYUCC9sFp8XHcYNmqidJSaoWK4E%2Bnpe%2Bh0lTZV1uICH84Iz4U%2FLvi%2FVjgPg91mP1puTC5ZFZk5dh1yk9EFSfMhm2mEoPwn0JUGtMatEsnMz1m7WfUK285ixgvywX9a9FIOnWzoo6c6LmBKeTiD3Nv2BmwHbC%2FYPxtLte6OpD2tJdGUS6eqehLVB8nagHSKQaziYz%2FPaS3NhCkYMpZ2uD0S3y2RvJ%2BOY8U6WT4hQ8KRnFr138w%2B%2Bp4uTZwm6a3C5Jzb1FMTt%2BSSC6GsWX93iTNzVvIc39XW7FBYA2Mo%2F%2FzvgCb%2FgJI85qNVbOYWIjy7WZ9HcRzGxyKUPzljDgnpLDBjqkAduxgo7NOC3ij0B6QakC8IX%2F96BWx8wxnNjqJsn7OqvqSHAUuTCuI8p4aAEQCmL5nLgcSBwQGiTid3b2PXG7vW2WQ3OFCA4pjQ1D6ysYO7kWcklgg2MTZfG9f4KM3r8ADfOVAtApzmyeFY9v9%2BrDGFRkvAkS5RCU8iCd3VKXfro4wjonEA0VztPnirqTaTnST0Ex72Cm2ILjkJqI%2FVhTlqCsOISY&X-Amz-Signature=f58c20acf34318c29be0d71751edbccb3a1757a7f5ae733bbab971e92f0ec358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TYR2VAR%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuzoctIFCNK1fHfZd05nF4OKM%2FGMTosLCb9Xam3sjylgIhAIXeQZrsDf%2BxwnZAeGWJnJbaeD4DH8SSunJy1lpL0bA6KogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHtQiDt39SIOVvkb8q3APzo%2FzVeJ1nA8Xv1xtG2nIrFOAUXCI7O6KHJxRr7PgEcg9Wcfq2vh2nA9ACNffiP7O%2FVkZUqt9Xar6eX49cJAq6Bc%2FCi7zoQ9qUFxujc9B91Hc9zE8gtMhHJzNVOhxpVsv7gRxs497LpmJTcKtfLh9duUe2xscuNjnMT3NgFcp0iZEkW0dKDgTCbBFZiipvNWQeyhCDs9s3rouzxcmVREkPdlAqdDhoShsGdY0CHrXsWIYUIXLmAH5qRoRKEmoE2e7lLZIConqG%2F2YJa5d5u1imRb3kBNruuaw%2BDHpRI7lNziGBZYUCC9sFp8XHcYNmqidJSaoWK4E%2Bnpe%2Bh0lTZV1uICH84Iz4U%2FLvi%2FVjgPg91mP1puTC5ZFZk5dh1yk9EFSfMhm2mEoPwn0JUGtMatEsnMz1m7WfUK285ixgvywX9a9FIOnWzoo6c6LmBKeTiD3Nv2BmwHbC%2FYPxtLte6OpD2tJdGUS6eqehLVB8nagHSKQaziYz%2FPaS3NhCkYMpZ2uD0S3y2RvJ%2BOY8U6WT4hQ8KRnFr138w%2B%2Bp4uTZwm6a3C5Jzb1FMTt%2BSSC6GsWX93iTNzVvIc39XW7FBYA2Mo%2F%2FzvgCb%2FgJI85qNVbOYWIjy7WZ9HcRzGxyKUPzljDgnpLDBjqkAduxgo7NOC3ij0B6QakC8IX%2F96BWx8wxnNjqJsn7OqvqSHAUuTCuI8p4aAEQCmL5nLgcSBwQGiTid3b2PXG7vW2WQ3OFCA4pjQ1D6ysYO7kWcklgg2MTZfG9f4KM3r8ADfOVAtApzmyeFY9v9%2BrDGFRkvAkS5RCU8iCd3VKXfro4wjonEA0VztPnirqTaTnST0Ex72Cm2ILjkJqI%2FVhTlqCsOISY&X-Amz-Signature=78874927ab924cf80b39f569b56b7fdf6f8eaa4c8dcd509d5cb6d48bf6b158c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TYR2VAR%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuzoctIFCNK1fHfZd05nF4OKM%2FGMTosLCb9Xam3sjylgIhAIXeQZrsDf%2BxwnZAeGWJnJbaeD4DH8SSunJy1lpL0bA6KogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHtQiDt39SIOVvkb8q3APzo%2FzVeJ1nA8Xv1xtG2nIrFOAUXCI7O6KHJxRr7PgEcg9Wcfq2vh2nA9ACNffiP7O%2FVkZUqt9Xar6eX49cJAq6Bc%2FCi7zoQ9qUFxujc9B91Hc9zE8gtMhHJzNVOhxpVsv7gRxs497LpmJTcKtfLh9duUe2xscuNjnMT3NgFcp0iZEkW0dKDgTCbBFZiipvNWQeyhCDs9s3rouzxcmVREkPdlAqdDhoShsGdY0CHrXsWIYUIXLmAH5qRoRKEmoE2e7lLZIConqG%2F2YJa5d5u1imRb3kBNruuaw%2BDHpRI7lNziGBZYUCC9sFp8XHcYNmqidJSaoWK4E%2Bnpe%2Bh0lTZV1uICH84Iz4U%2FLvi%2FVjgPg91mP1puTC5ZFZk5dh1yk9EFSfMhm2mEoPwn0JUGtMatEsnMz1m7WfUK285ixgvywX9a9FIOnWzoo6c6LmBKeTiD3Nv2BmwHbC%2FYPxtLte6OpD2tJdGUS6eqehLVB8nagHSKQaziYz%2FPaS3NhCkYMpZ2uD0S3y2RvJ%2BOY8U6WT4hQ8KRnFr138w%2B%2Bp4uTZwm6a3C5Jzb1FMTt%2BSSC6GsWX93iTNzVvIc39XW7FBYA2Mo%2F%2FzvgCb%2FgJI85qNVbOYWIjy7WZ9HcRzGxyKUPzljDgnpLDBjqkAduxgo7NOC3ij0B6QakC8IX%2F96BWx8wxnNjqJsn7OqvqSHAUuTCuI8p4aAEQCmL5nLgcSBwQGiTid3b2PXG7vW2WQ3OFCA4pjQ1D6ysYO7kWcklgg2MTZfG9f4KM3r8ADfOVAtApzmyeFY9v9%2BrDGFRkvAkS5RCU8iCd3VKXfro4wjonEA0VztPnirqTaTnST0Ex72Cm2ILjkJqI%2FVhTlqCsOISY&X-Amz-Signature=5b77e5e8a62bc57a62d65af1fdb4f4f8c670dbcf176a23a37b8f0e925bc3dc72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TYR2VAR%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuzoctIFCNK1fHfZd05nF4OKM%2FGMTosLCb9Xam3sjylgIhAIXeQZrsDf%2BxwnZAeGWJnJbaeD4DH8SSunJy1lpL0bA6KogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHtQiDt39SIOVvkb8q3APzo%2FzVeJ1nA8Xv1xtG2nIrFOAUXCI7O6KHJxRr7PgEcg9Wcfq2vh2nA9ACNffiP7O%2FVkZUqt9Xar6eX49cJAq6Bc%2FCi7zoQ9qUFxujc9B91Hc9zE8gtMhHJzNVOhxpVsv7gRxs497LpmJTcKtfLh9duUe2xscuNjnMT3NgFcp0iZEkW0dKDgTCbBFZiipvNWQeyhCDs9s3rouzxcmVREkPdlAqdDhoShsGdY0CHrXsWIYUIXLmAH5qRoRKEmoE2e7lLZIConqG%2F2YJa5d5u1imRb3kBNruuaw%2BDHpRI7lNziGBZYUCC9sFp8XHcYNmqidJSaoWK4E%2Bnpe%2Bh0lTZV1uICH84Iz4U%2FLvi%2FVjgPg91mP1puTC5ZFZk5dh1yk9EFSfMhm2mEoPwn0JUGtMatEsnMz1m7WfUK285ixgvywX9a9FIOnWzoo6c6LmBKeTiD3Nv2BmwHbC%2FYPxtLte6OpD2tJdGUS6eqehLVB8nagHSKQaziYz%2FPaS3NhCkYMpZ2uD0S3y2RvJ%2BOY8U6WT4hQ8KRnFr138w%2B%2Bp4uTZwm6a3C5Jzb1FMTt%2BSSC6GsWX93iTNzVvIc39XW7FBYA2Mo%2F%2FzvgCb%2FgJI85qNVbOYWIjy7WZ9HcRzGxyKUPzljDgnpLDBjqkAduxgo7NOC3ij0B6QakC8IX%2F96BWx8wxnNjqJsn7OqvqSHAUuTCuI8p4aAEQCmL5nLgcSBwQGiTid3b2PXG7vW2WQ3OFCA4pjQ1D6ysYO7kWcklgg2MTZfG9f4KM3r8ADfOVAtApzmyeFY9v9%2BrDGFRkvAkS5RCU8iCd3VKXfro4wjonEA0VztPnirqTaTnST0Ex72Cm2ILjkJqI%2FVhTlqCsOISY&X-Amz-Signature=ff6b2490689a9cd1386073afe5d533f4a876bd6798d43ca43e59372d22929d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
