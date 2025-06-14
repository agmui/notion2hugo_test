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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N4HURBR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCii496y3AzO9J1cm9gfpYVtT3D87raz4btv3qQG8vF9wIhALjn%2FdTX5NoBnW8EpWj3m0tNl834ZODERjMy0Sa4Of5GKv8DCCIQABoMNjM3NDIzMTgzODA1IgzV2CsBlFNIVggoIncq3AOynpi0rb9MK7M7YdL4eQutRFy%2FX6c5L8OCq0N%2FQaVGu7Qgeex8yDh05GUmm2IM0CagQdcs1eCKd%2BdpQNsP7ThBnZFSLW4XNNEizA0QFy86%2B0dHjaFb7ccTIO%2Fd7jCoKPAo%2BBTHebisvDFOIhHRZRSl6A6GoVase%2F4re%2F%2B6jyedjN3uTgb60R%2FoG%2B2DnZu37KFu%2F9g6dLmL1wlKeM1RhssmcT8mCe7cBz8kdXeVyxX2zYkWkfoHL85xm%2BHetZnnWP1%2FwdHtAapsGzU4iAfc3YpbtIsaTmvoZ4%2By5cOTCXxQwEQoFl3XWXp3KFww8z9YxNf7Obv0FClFVfXQb3UNMzNcZ%2B%2BuK1%2FT85jvSxpjvsra0RSP%2B5RpVuzYvKzSdWQPL%2BKYU5E67eM8HwE%2BMFUPMZgll1XfhQOn1r4vkGSFwfA%2FnLHUyWMbSboz3Rc9zCem7%2BR%2FKLFPVMhYa8T3kk3NJ5NR7nWX8D7C9FGkFviEfdjv2I4INJTl0XMdYiPluJJm%2BSR4SviO022mjlczTjBDcPqV3xyKbQ5qiBWYvLu%2B1oGrV%2Fggcqpzfwc7mU%2BHCxHAvixrdm64%2F2UuRgxT2K%2ByJYu7r9%2B%2BVEkJnlAee5pnboNkK0GpbKhy3yOGqBcS3DC9jbPCBjqkAZ6CtwpkD1khbONmauVAxXQQThm1LNH0sfq%2FfcMbkiU7ZZfuCamDQ%2BkhjeYmC98W2%2F%2BM4mMnsU3QIItn4XUnn6fCpYtIp2KoI8t25kzWFkBFLwo9k5UR%2B8Cyf2pnh7%2Baq9yYMlcyk2b7VWrf0t515jhTdCok1FHoJzo0wx9wDq5Y%2B8ILNDJVmJT7miH6WQcmJusQ2Wmczx07GHoMn7cyJRjtH9uj&X-Amz-Signature=8be38a72196141df145f3990819d2e0f3ee66e78b90a8d2880b29323c4b8f63c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N4HURBR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCii496y3AzO9J1cm9gfpYVtT3D87raz4btv3qQG8vF9wIhALjn%2FdTX5NoBnW8EpWj3m0tNl834ZODERjMy0Sa4Of5GKv8DCCIQABoMNjM3NDIzMTgzODA1IgzV2CsBlFNIVggoIncq3AOynpi0rb9MK7M7YdL4eQutRFy%2FX6c5L8OCq0N%2FQaVGu7Qgeex8yDh05GUmm2IM0CagQdcs1eCKd%2BdpQNsP7ThBnZFSLW4XNNEizA0QFy86%2B0dHjaFb7ccTIO%2Fd7jCoKPAo%2BBTHebisvDFOIhHRZRSl6A6GoVase%2F4re%2F%2B6jyedjN3uTgb60R%2FoG%2B2DnZu37KFu%2F9g6dLmL1wlKeM1RhssmcT8mCe7cBz8kdXeVyxX2zYkWkfoHL85xm%2BHetZnnWP1%2FwdHtAapsGzU4iAfc3YpbtIsaTmvoZ4%2By5cOTCXxQwEQoFl3XWXp3KFww8z9YxNf7Obv0FClFVfXQb3UNMzNcZ%2B%2BuK1%2FT85jvSxpjvsra0RSP%2B5RpVuzYvKzSdWQPL%2BKYU5E67eM8HwE%2BMFUPMZgll1XfhQOn1r4vkGSFwfA%2FnLHUyWMbSboz3Rc9zCem7%2BR%2FKLFPVMhYa8T3kk3NJ5NR7nWX8D7C9FGkFviEfdjv2I4INJTl0XMdYiPluJJm%2BSR4SviO022mjlczTjBDcPqV3xyKbQ5qiBWYvLu%2B1oGrV%2Fggcqpzfwc7mU%2BHCxHAvixrdm64%2F2UuRgxT2K%2ByJYu7r9%2B%2BVEkJnlAee5pnboNkK0GpbKhy3yOGqBcS3DC9jbPCBjqkAZ6CtwpkD1khbONmauVAxXQQThm1LNH0sfq%2FfcMbkiU7ZZfuCamDQ%2BkhjeYmC98W2%2F%2BM4mMnsU3QIItn4XUnn6fCpYtIp2KoI8t25kzWFkBFLwo9k5UR%2B8Cyf2pnh7%2Baq9yYMlcyk2b7VWrf0t515jhTdCok1FHoJzo0wx9wDq5Y%2B8ILNDJVmJT7miH6WQcmJusQ2Wmczx07GHoMn7cyJRjtH9uj&X-Amz-Signature=b66087ea5034370c8e789bb44c9e17f42317aae0fb6a6d1cfc5fd9af47256bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N4HURBR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCii496y3AzO9J1cm9gfpYVtT3D87raz4btv3qQG8vF9wIhALjn%2FdTX5NoBnW8EpWj3m0tNl834ZODERjMy0Sa4Of5GKv8DCCIQABoMNjM3NDIzMTgzODA1IgzV2CsBlFNIVggoIncq3AOynpi0rb9MK7M7YdL4eQutRFy%2FX6c5L8OCq0N%2FQaVGu7Qgeex8yDh05GUmm2IM0CagQdcs1eCKd%2BdpQNsP7ThBnZFSLW4XNNEizA0QFy86%2B0dHjaFb7ccTIO%2Fd7jCoKPAo%2BBTHebisvDFOIhHRZRSl6A6GoVase%2F4re%2F%2B6jyedjN3uTgb60R%2FoG%2B2DnZu37KFu%2F9g6dLmL1wlKeM1RhssmcT8mCe7cBz8kdXeVyxX2zYkWkfoHL85xm%2BHetZnnWP1%2FwdHtAapsGzU4iAfc3YpbtIsaTmvoZ4%2By5cOTCXxQwEQoFl3XWXp3KFww8z9YxNf7Obv0FClFVfXQb3UNMzNcZ%2B%2BuK1%2FT85jvSxpjvsra0RSP%2B5RpVuzYvKzSdWQPL%2BKYU5E67eM8HwE%2BMFUPMZgll1XfhQOn1r4vkGSFwfA%2FnLHUyWMbSboz3Rc9zCem7%2BR%2FKLFPVMhYa8T3kk3NJ5NR7nWX8D7C9FGkFviEfdjv2I4INJTl0XMdYiPluJJm%2BSR4SviO022mjlczTjBDcPqV3xyKbQ5qiBWYvLu%2B1oGrV%2Fggcqpzfwc7mU%2BHCxHAvixrdm64%2F2UuRgxT2K%2ByJYu7r9%2B%2BVEkJnlAee5pnboNkK0GpbKhy3yOGqBcS3DC9jbPCBjqkAZ6CtwpkD1khbONmauVAxXQQThm1LNH0sfq%2FfcMbkiU7ZZfuCamDQ%2BkhjeYmC98W2%2F%2BM4mMnsU3QIItn4XUnn6fCpYtIp2KoI8t25kzWFkBFLwo9k5UR%2B8Cyf2pnh7%2Baq9yYMlcyk2b7VWrf0t515jhTdCok1FHoJzo0wx9wDq5Y%2B8ILNDJVmJT7miH6WQcmJusQ2Wmczx07GHoMn7cyJRjtH9uj&X-Amz-Signature=e9a0027a289563e8f350305063dd98b1c107bd5c74f2f957960775c1dcd760b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N4HURBR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCii496y3AzO9J1cm9gfpYVtT3D87raz4btv3qQG8vF9wIhALjn%2FdTX5NoBnW8EpWj3m0tNl834ZODERjMy0Sa4Of5GKv8DCCIQABoMNjM3NDIzMTgzODA1IgzV2CsBlFNIVggoIncq3AOynpi0rb9MK7M7YdL4eQutRFy%2FX6c5L8OCq0N%2FQaVGu7Qgeex8yDh05GUmm2IM0CagQdcs1eCKd%2BdpQNsP7ThBnZFSLW4XNNEizA0QFy86%2B0dHjaFb7ccTIO%2Fd7jCoKPAo%2BBTHebisvDFOIhHRZRSl6A6GoVase%2F4re%2F%2B6jyedjN3uTgb60R%2FoG%2B2DnZu37KFu%2F9g6dLmL1wlKeM1RhssmcT8mCe7cBz8kdXeVyxX2zYkWkfoHL85xm%2BHetZnnWP1%2FwdHtAapsGzU4iAfc3YpbtIsaTmvoZ4%2By5cOTCXxQwEQoFl3XWXp3KFww8z9YxNf7Obv0FClFVfXQb3UNMzNcZ%2B%2BuK1%2FT85jvSxpjvsra0RSP%2B5RpVuzYvKzSdWQPL%2BKYU5E67eM8HwE%2BMFUPMZgll1XfhQOn1r4vkGSFwfA%2FnLHUyWMbSboz3Rc9zCem7%2BR%2FKLFPVMhYa8T3kk3NJ5NR7nWX8D7C9FGkFviEfdjv2I4INJTl0XMdYiPluJJm%2BSR4SviO022mjlczTjBDcPqV3xyKbQ5qiBWYvLu%2B1oGrV%2Fggcqpzfwc7mU%2BHCxHAvixrdm64%2F2UuRgxT2K%2ByJYu7r9%2B%2BVEkJnlAee5pnboNkK0GpbKhy3yOGqBcS3DC9jbPCBjqkAZ6CtwpkD1khbONmauVAxXQQThm1LNH0sfq%2FfcMbkiU7ZZfuCamDQ%2BkhjeYmC98W2%2F%2BM4mMnsU3QIItn4XUnn6fCpYtIp2KoI8t25kzWFkBFLwo9k5UR%2B8Cyf2pnh7%2Baq9yYMlcyk2b7VWrf0t515jhTdCok1FHoJzo0wx9wDq5Y%2B8ILNDJVmJT7miH6WQcmJusQ2Wmczx07GHoMn7cyJRjtH9uj&X-Amz-Signature=813bcb0a9c71b4ebf6f25750ff322be4a82c4d308d552f9ad93219df11e807f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N4HURBR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCii496y3AzO9J1cm9gfpYVtT3D87raz4btv3qQG8vF9wIhALjn%2FdTX5NoBnW8EpWj3m0tNl834ZODERjMy0Sa4Of5GKv8DCCIQABoMNjM3NDIzMTgzODA1IgzV2CsBlFNIVggoIncq3AOynpi0rb9MK7M7YdL4eQutRFy%2FX6c5L8OCq0N%2FQaVGu7Qgeex8yDh05GUmm2IM0CagQdcs1eCKd%2BdpQNsP7ThBnZFSLW4XNNEizA0QFy86%2B0dHjaFb7ccTIO%2Fd7jCoKPAo%2BBTHebisvDFOIhHRZRSl6A6GoVase%2F4re%2F%2B6jyedjN3uTgb60R%2FoG%2B2DnZu37KFu%2F9g6dLmL1wlKeM1RhssmcT8mCe7cBz8kdXeVyxX2zYkWkfoHL85xm%2BHetZnnWP1%2FwdHtAapsGzU4iAfc3YpbtIsaTmvoZ4%2By5cOTCXxQwEQoFl3XWXp3KFww8z9YxNf7Obv0FClFVfXQb3UNMzNcZ%2B%2BuK1%2FT85jvSxpjvsra0RSP%2B5RpVuzYvKzSdWQPL%2BKYU5E67eM8HwE%2BMFUPMZgll1XfhQOn1r4vkGSFwfA%2FnLHUyWMbSboz3Rc9zCem7%2BR%2FKLFPVMhYa8T3kk3NJ5NR7nWX8D7C9FGkFviEfdjv2I4INJTl0XMdYiPluJJm%2BSR4SviO022mjlczTjBDcPqV3xyKbQ5qiBWYvLu%2B1oGrV%2Fggcqpzfwc7mU%2BHCxHAvixrdm64%2F2UuRgxT2K%2ByJYu7r9%2B%2BVEkJnlAee5pnboNkK0GpbKhy3yOGqBcS3DC9jbPCBjqkAZ6CtwpkD1khbONmauVAxXQQThm1LNH0sfq%2FfcMbkiU7ZZfuCamDQ%2BkhjeYmC98W2%2F%2BM4mMnsU3QIItn4XUnn6fCpYtIp2KoI8t25kzWFkBFLwo9k5UR%2B8Cyf2pnh7%2Baq9yYMlcyk2b7VWrf0t515jhTdCok1FHoJzo0wx9wDq5Y%2B8ILNDJVmJT7miH6WQcmJusQ2Wmczx07GHoMn7cyJRjtH9uj&X-Amz-Signature=c8b7699ec7d237d73d07a676bedd3330a80282035336fb858a18b04d4551a9a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N4HURBR%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T022647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCii496y3AzO9J1cm9gfpYVtT3D87raz4btv3qQG8vF9wIhALjn%2FdTX5NoBnW8EpWj3m0tNl834ZODERjMy0Sa4Of5GKv8DCCIQABoMNjM3NDIzMTgzODA1IgzV2CsBlFNIVggoIncq3AOynpi0rb9MK7M7YdL4eQutRFy%2FX6c5L8OCq0N%2FQaVGu7Qgeex8yDh05GUmm2IM0CagQdcs1eCKd%2BdpQNsP7ThBnZFSLW4XNNEizA0QFy86%2B0dHjaFb7ccTIO%2Fd7jCoKPAo%2BBTHebisvDFOIhHRZRSl6A6GoVase%2F4re%2F%2B6jyedjN3uTgb60R%2FoG%2B2DnZu37KFu%2F9g6dLmL1wlKeM1RhssmcT8mCe7cBz8kdXeVyxX2zYkWkfoHL85xm%2BHetZnnWP1%2FwdHtAapsGzU4iAfc3YpbtIsaTmvoZ4%2By5cOTCXxQwEQoFl3XWXp3KFww8z9YxNf7Obv0FClFVfXQb3UNMzNcZ%2B%2BuK1%2FT85jvSxpjvsra0RSP%2B5RpVuzYvKzSdWQPL%2BKYU5E67eM8HwE%2BMFUPMZgll1XfhQOn1r4vkGSFwfA%2FnLHUyWMbSboz3Rc9zCem7%2BR%2FKLFPVMhYa8T3kk3NJ5NR7nWX8D7C9FGkFviEfdjv2I4INJTl0XMdYiPluJJm%2BSR4SviO022mjlczTjBDcPqV3xyKbQ5qiBWYvLu%2B1oGrV%2Fggcqpzfwc7mU%2BHCxHAvixrdm64%2F2UuRgxT2K%2ByJYu7r9%2B%2BVEkJnlAee5pnboNkK0GpbKhy3yOGqBcS3DC9jbPCBjqkAZ6CtwpkD1khbONmauVAxXQQThm1LNH0sfq%2FfcMbkiU7ZZfuCamDQ%2BkhjeYmC98W2%2F%2BM4mMnsU3QIItn4XUnn6fCpYtIp2KoI8t25kzWFkBFLwo9k5UR%2B8Cyf2pnh7%2Baq9yYMlcyk2b7VWrf0t515jhTdCok1FHoJzo0wx9wDq5Y%2B8ILNDJVmJT7miH6WQcmJusQ2Wmczx07GHoMn7cyJRjtH9uj&X-Amz-Signature=501e1e1fb15cdabb6bc092798ba9b59f98bb70b591e1d56a93ccff860ad57926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
