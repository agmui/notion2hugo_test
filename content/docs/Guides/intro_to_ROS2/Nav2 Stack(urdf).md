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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USEK5WCD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T133002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCnhXGn8fZNoFncR%2BG3DQnGSmd3c60cntQsco5Pl4KV1wIhAKjzyiHaPp%2BVMHoCd8BwR%2BkPu8wqYuo4IDf3Z7HtBI6bKv8DCHYQABoMNjM3NDIzMTgzODA1IgyhmH2r2IaZAcLVkOcq3AOFCgl04QN29gAe3y9F2ieg21%2Ba6SR7k6nrLYk5HFnhNnulXdzsJ01ESjtqcJCgGQPDEv3UhDKVQibvJNGwvF8Jg9YcAS49aWEylRYk4L1cw85KoG%2BsgxF5ULfJKxsYqZDPSNeeiYT%2BEMwNMEcMROmJ5lkDs2Sfy2yMbjQZbmHsaIu1Knyuz1L9PFp3Xg3Uhvawy4imdY8IPKbKDSAF2Rq0GTDsDFbjUgDiKPrKIkCaFnNPh3YYU1oIpvfX1qPnYTBeUAN5KN6GRBzQzZZHtms7HVk03bRmmDAgYaA8UeF8hIkPbU%2FLfmHgx0wsynvGyUYf4DlNEDuryQvwbk1ZinX17w83EzVOLKW%2FXai3DVtOJ5J4fALtvtsQB6ubIEq3prRC2GiUIlsbcu%2BkV5mle2Ip6BCEigqSom9hvqqKVh2H1Iz9pkaZ%2BtF%2FuqqvFUIZZQFk%2BnMRth9S%2Fbc9mSbrnQS2iFr8z3GQ8c1Mi6tNUXfq64QEi2vX9i092Z7z%2BAB5mO6piLLHx%2FSIRsYB7WUchnMgG91iLSzroKDhOfW0xFehjANrj2jzSA0sHB9qlE%2Bvx9ckauenvSonD9IgMlysFffcwNj56sqaHaKe8qC2z%2BrY1xFqkOvbjGhPugZd%2BTDD4uPDBjqkAaP21uHLcLHlJfnLYXskV89uyER5zO5F%2BguAM21KaP1zfd5Ic2PvJj8OxLoRnzhsB2lKFdy%2FslqpjU6Wr66ydpqC5Ak3SAzrcBbqjketenWdsXufdQ7X8qZl%2Bh2CJJbx8V78r2%2FXQUP9%2FMNVSUhtTGMXFraRnMyfE0qDo6DA6LnHbb8c%2BlJzlqICaiKbew8gCg9n5QggiDnl0FF3pHbrZhKDhKZh&X-Amz-Signature=5b1aa3e40ddb797072706a429fff7a45a64d982b377f0bb133c709eaff95c3bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USEK5WCD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T133002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCnhXGn8fZNoFncR%2BG3DQnGSmd3c60cntQsco5Pl4KV1wIhAKjzyiHaPp%2BVMHoCd8BwR%2BkPu8wqYuo4IDf3Z7HtBI6bKv8DCHYQABoMNjM3NDIzMTgzODA1IgyhmH2r2IaZAcLVkOcq3AOFCgl04QN29gAe3y9F2ieg21%2Ba6SR7k6nrLYk5HFnhNnulXdzsJ01ESjtqcJCgGQPDEv3UhDKVQibvJNGwvF8Jg9YcAS49aWEylRYk4L1cw85KoG%2BsgxF5ULfJKxsYqZDPSNeeiYT%2BEMwNMEcMROmJ5lkDs2Sfy2yMbjQZbmHsaIu1Knyuz1L9PFp3Xg3Uhvawy4imdY8IPKbKDSAF2Rq0GTDsDFbjUgDiKPrKIkCaFnNPh3YYU1oIpvfX1qPnYTBeUAN5KN6GRBzQzZZHtms7HVk03bRmmDAgYaA8UeF8hIkPbU%2FLfmHgx0wsynvGyUYf4DlNEDuryQvwbk1ZinX17w83EzVOLKW%2FXai3DVtOJ5J4fALtvtsQB6ubIEq3prRC2GiUIlsbcu%2BkV5mle2Ip6BCEigqSom9hvqqKVh2H1Iz9pkaZ%2BtF%2FuqqvFUIZZQFk%2BnMRth9S%2Fbc9mSbrnQS2iFr8z3GQ8c1Mi6tNUXfq64QEi2vX9i092Z7z%2BAB5mO6piLLHx%2FSIRsYB7WUchnMgG91iLSzroKDhOfW0xFehjANrj2jzSA0sHB9qlE%2Bvx9ckauenvSonD9IgMlysFffcwNj56sqaHaKe8qC2z%2BrY1xFqkOvbjGhPugZd%2BTDD4uPDBjqkAaP21uHLcLHlJfnLYXskV89uyER5zO5F%2BguAM21KaP1zfd5Ic2PvJj8OxLoRnzhsB2lKFdy%2FslqpjU6Wr66ydpqC5Ak3SAzrcBbqjketenWdsXufdQ7X8qZl%2Bh2CJJbx8V78r2%2FXQUP9%2FMNVSUhtTGMXFraRnMyfE0qDo6DA6LnHbb8c%2BlJzlqICaiKbew8gCg9n5QggiDnl0FF3pHbrZhKDhKZh&X-Amz-Signature=63434e112354d0c038e07e9310f1333f6c29c8fa6dd4f6524ca7c6a91ab5e70f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USEK5WCD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T133002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCnhXGn8fZNoFncR%2BG3DQnGSmd3c60cntQsco5Pl4KV1wIhAKjzyiHaPp%2BVMHoCd8BwR%2BkPu8wqYuo4IDf3Z7HtBI6bKv8DCHYQABoMNjM3NDIzMTgzODA1IgyhmH2r2IaZAcLVkOcq3AOFCgl04QN29gAe3y9F2ieg21%2Ba6SR7k6nrLYk5HFnhNnulXdzsJ01ESjtqcJCgGQPDEv3UhDKVQibvJNGwvF8Jg9YcAS49aWEylRYk4L1cw85KoG%2BsgxF5ULfJKxsYqZDPSNeeiYT%2BEMwNMEcMROmJ5lkDs2Sfy2yMbjQZbmHsaIu1Knyuz1L9PFp3Xg3Uhvawy4imdY8IPKbKDSAF2Rq0GTDsDFbjUgDiKPrKIkCaFnNPh3YYU1oIpvfX1qPnYTBeUAN5KN6GRBzQzZZHtms7HVk03bRmmDAgYaA8UeF8hIkPbU%2FLfmHgx0wsynvGyUYf4DlNEDuryQvwbk1ZinX17w83EzVOLKW%2FXai3DVtOJ5J4fALtvtsQB6ubIEq3prRC2GiUIlsbcu%2BkV5mle2Ip6BCEigqSom9hvqqKVh2H1Iz9pkaZ%2BtF%2FuqqvFUIZZQFk%2BnMRth9S%2Fbc9mSbrnQS2iFr8z3GQ8c1Mi6tNUXfq64QEi2vX9i092Z7z%2BAB5mO6piLLHx%2FSIRsYB7WUchnMgG91iLSzroKDhOfW0xFehjANrj2jzSA0sHB9qlE%2Bvx9ckauenvSonD9IgMlysFffcwNj56sqaHaKe8qC2z%2BrY1xFqkOvbjGhPugZd%2BTDD4uPDBjqkAaP21uHLcLHlJfnLYXskV89uyER5zO5F%2BguAM21KaP1zfd5Ic2PvJj8OxLoRnzhsB2lKFdy%2FslqpjU6Wr66ydpqC5Ak3SAzrcBbqjketenWdsXufdQ7X8qZl%2Bh2CJJbx8V78r2%2FXQUP9%2FMNVSUhtTGMXFraRnMyfE0qDo6DA6LnHbb8c%2BlJzlqICaiKbew8gCg9n5QggiDnl0FF3pHbrZhKDhKZh&X-Amz-Signature=90e31a54f1cc00a278dada51eeae58c7806a676ba0ab2bd582f5582c7fb6f382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USEK5WCD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T133002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCnhXGn8fZNoFncR%2BG3DQnGSmd3c60cntQsco5Pl4KV1wIhAKjzyiHaPp%2BVMHoCd8BwR%2BkPu8wqYuo4IDf3Z7HtBI6bKv8DCHYQABoMNjM3NDIzMTgzODA1IgyhmH2r2IaZAcLVkOcq3AOFCgl04QN29gAe3y9F2ieg21%2Ba6SR7k6nrLYk5HFnhNnulXdzsJ01ESjtqcJCgGQPDEv3UhDKVQibvJNGwvF8Jg9YcAS49aWEylRYk4L1cw85KoG%2BsgxF5ULfJKxsYqZDPSNeeiYT%2BEMwNMEcMROmJ5lkDs2Sfy2yMbjQZbmHsaIu1Knyuz1L9PFp3Xg3Uhvawy4imdY8IPKbKDSAF2Rq0GTDsDFbjUgDiKPrKIkCaFnNPh3YYU1oIpvfX1qPnYTBeUAN5KN6GRBzQzZZHtms7HVk03bRmmDAgYaA8UeF8hIkPbU%2FLfmHgx0wsynvGyUYf4DlNEDuryQvwbk1ZinX17w83EzVOLKW%2FXai3DVtOJ5J4fALtvtsQB6ubIEq3prRC2GiUIlsbcu%2BkV5mle2Ip6BCEigqSom9hvqqKVh2H1Iz9pkaZ%2BtF%2FuqqvFUIZZQFk%2BnMRth9S%2Fbc9mSbrnQS2iFr8z3GQ8c1Mi6tNUXfq64QEi2vX9i092Z7z%2BAB5mO6piLLHx%2FSIRsYB7WUchnMgG91iLSzroKDhOfW0xFehjANrj2jzSA0sHB9qlE%2Bvx9ckauenvSonD9IgMlysFffcwNj56sqaHaKe8qC2z%2BrY1xFqkOvbjGhPugZd%2BTDD4uPDBjqkAaP21uHLcLHlJfnLYXskV89uyER5zO5F%2BguAM21KaP1zfd5Ic2PvJj8OxLoRnzhsB2lKFdy%2FslqpjU6Wr66ydpqC5Ak3SAzrcBbqjketenWdsXufdQ7X8qZl%2Bh2CJJbx8V78r2%2FXQUP9%2FMNVSUhtTGMXFraRnMyfE0qDo6DA6LnHbb8c%2BlJzlqICaiKbew8gCg9n5QggiDnl0FF3pHbrZhKDhKZh&X-Amz-Signature=6e006410150b2a78f3da61b03496f68ff3fa03b01e45199a48916cd9011fd3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USEK5WCD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T133003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCnhXGn8fZNoFncR%2BG3DQnGSmd3c60cntQsco5Pl4KV1wIhAKjzyiHaPp%2BVMHoCd8BwR%2BkPu8wqYuo4IDf3Z7HtBI6bKv8DCHYQABoMNjM3NDIzMTgzODA1IgyhmH2r2IaZAcLVkOcq3AOFCgl04QN29gAe3y9F2ieg21%2Ba6SR7k6nrLYk5HFnhNnulXdzsJ01ESjtqcJCgGQPDEv3UhDKVQibvJNGwvF8Jg9YcAS49aWEylRYk4L1cw85KoG%2BsgxF5ULfJKxsYqZDPSNeeiYT%2BEMwNMEcMROmJ5lkDs2Sfy2yMbjQZbmHsaIu1Knyuz1L9PFp3Xg3Uhvawy4imdY8IPKbKDSAF2Rq0GTDsDFbjUgDiKPrKIkCaFnNPh3YYU1oIpvfX1qPnYTBeUAN5KN6GRBzQzZZHtms7HVk03bRmmDAgYaA8UeF8hIkPbU%2FLfmHgx0wsynvGyUYf4DlNEDuryQvwbk1ZinX17w83EzVOLKW%2FXai3DVtOJ5J4fALtvtsQB6ubIEq3prRC2GiUIlsbcu%2BkV5mle2Ip6BCEigqSom9hvqqKVh2H1Iz9pkaZ%2BtF%2FuqqvFUIZZQFk%2BnMRth9S%2Fbc9mSbrnQS2iFr8z3GQ8c1Mi6tNUXfq64QEi2vX9i092Z7z%2BAB5mO6piLLHx%2FSIRsYB7WUchnMgG91iLSzroKDhOfW0xFehjANrj2jzSA0sHB9qlE%2Bvx9ckauenvSonD9IgMlysFffcwNj56sqaHaKe8qC2z%2BrY1xFqkOvbjGhPugZd%2BTDD4uPDBjqkAaP21uHLcLHlJfnLYXskV89uyER5zO5F%2BguAM21KaP1zfd5Ic2PvJj8OxLoRnzhsB2lKFdy%2FslqpjU6Wr66ydpqC5Ak3SAzrcBbqjketenWdsXufdQ7X8qZl%2Bh2CJJbx8V78r2%2FXQUP9%2FMNVSUhtTGMXFraRnMyfE0qDo6DA6LnHbb8c%2BlJzlqICaiKbew8gCg9n5QggiDnl0FF3pHbrZhKDhKZh&X-Amz-Signature=cc7ae815bd120994f366ef7089df06272c1dce4d5abfb6ac64ae6e32fbbb4627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USEK5WCD%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T133003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQCnhXGn8fZNoFncR%2BG3DQnGSmd3c60cntQsco5Pl4KV1wIhAKjzyiHaPp%2BVMHoCd8BwR%2BkPu8wqYuo4IDf3Z7HtBI6bKv8DCHYQABoMNjM3NDIzMTgzODA1IgyhmH2r2IaZAcLVkOcq3AOFCgl04QN29gAe3y9F2ieg21%2Ba6SR7k6nrLYk5HFnhNnulXdzsJ01ESjtqcJCgGQPDEv3UhDKVQibvJNGwvF8Jg9YcAS49aWEylRYk4L1cw85KoG%2BsgxF5ULfJKxsYqZDPSNeeiYT%2BEMwNMEcMROmJ5lkDs2Sfy2yMbjQZbmHsaIu1Knyuz1L9PFp3Xg3Uhvawy4imdY8IPKbKDSAF2Rq0GTDsDFbjUgDiKPrKIkCaFnNPh3YYU1oIpvfX1qPnYTBeUAN5KN6GRBzQzZZHtms7HVk03bRmmDAgYaA8UeF8hIkPbU%2FLfmHgx0wsynvGyUYf4DlNEDuryQvwbk1ZinX17w83EzVOLKW%2FXai3DVtOJ5J4fALtvtsQB6ubIEq3prRC2GiUIlsbcu%2BkV5mle2Ip6BCEigqSom9hvqqKVh2H1Iz9pkaZ%2BtF%2FuqqvFUIZZQFk%2BnMRth9S%2Fbc9mSbrnQS2iFr8z3GQ8c1Mi6tNUXfq64QEi2vX9i092Z7z%2BAB5mO6piLLHx%2FSIRsYB7WUchnMgG91iLSzroKDhOfW0xFehjANrj2jzSA0sHB9qlE%2Bvx9ckauenvSonD9IgMlysFffcwNj56sqaHaKe8qC2z%2BrY1xFqkOvbjGhPugZd%2BTDD4uPDBjqkAaP21uHLcLHlJfnLYXskV89uyER5zO5F%2BguAM21KaP1zfd5Ic2PvJj8OxLoRnzhsB2lKFdy%2FslqpjU6Wr66ydpqC5Ak3SAzrcBbqjketenWdsXufdQ7X8qZl%2Bh2CJJbx8V78r2%2FXQUP9%2FMNVSUhtTGMXFraRnMyfE0qDo6DA6LnHbb8c%2BlJzlqICaiKbew8gCg9n5QggiDnl0FF3pHbrZhKDhKZh&X-Amz-Signature=081114eae74b505a743ad09b5de1b22e49e7f2ea967c4c0159444e65a1bf9998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
