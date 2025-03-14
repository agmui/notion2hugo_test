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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN66LWFR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAake2LKQHHG1A%2FVqP%2BMfSLcM5hEkWgyP30ZOlT6GzjrAiB8UmZfLJmcH9sEKwpcAyJpDnr2ym6TrVIxug%2F3Khs8zSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMktVeoaQt%2B7cKHFieKtwDnRQPgtk%2F5N6C3eiTEl5zbyYxfEBYgH3e8zbQT41KoWa8Tp5oJb0XVkdgcjMGkZ7aYnZW6QF6e5EIqC1yq%2B4O1C6au%2Fy0UhBfWExHKYhgoRvQ%2FXODCxFxeCfHCW2rPtOh1w9odugpYX15R56dPUsccgnFdkpbfArz5llLJmkHClR%2BjsTaX4LJ6Ai3WSq6%2BUjEP8t2x6D3TPOpevdh%2FdtcpTpiZTykwTTYDDBMi8WxiWTDmpWtqjVFHQlH4XFQ6pPoxzAfN6dX7kH2CQ8DkV4J0HPkEzo5EbnpPqvuyl02qWlXXcuEJZw83F3%2BrPoKf9%2BuJl3EYhmVeHd3kzxEJjy%2BRn4ioQfqfBNPXoh3JeDm8XTR8vNPIJOsmp6kEHezDKomYXJ1CWU4UcmIirH2tPALQDO4oQnZu9KqW%2FsYT%2Fm%2BZ70%2BHp9nDt1P0%2BqRUFYWqCo8feb2y0Cg0ObmIi1oXGK%2BKEbntm9qnSs%2FV7PpVuFa%2BzoDKMmQ%2F3iMNojAu6te2ZYVT%2B8BKQvdhl%2FR5SdRGNGKXGIIJL5ov0D1MmsTnpXNl8X6T6SuSRM2fNnB3%2F4oC49YBZDKA%2FVwJcBcZvuO1tyUhNxA5VKdtLgCPGzS8DWLwH94FcXEkNLB0CJ%2Brd0w3I7OvgY6pgF%2FCX6Q4HQE850yBqstea5s6Yrv3OzSE%2F5z0qBdQLnFJnVe6R%2FbUJKKO8VPkWYlSC8agVs72e%2BdAF7GdUUDUwn1l6b%2FypEXOQ4SXl9nnl4U2Yf07r1KTZStOYsSwYpEpOSzkTBZi%2B3vZ%2FOBVU6k54uaPVKyB3HBWxNHvnXOuepz0%2Fx01WopvzDaRBiLtBCSw7Lf5k9pDN2Ih6ftINSKKnZ6rp4rD56z&X-Amz-Signature=091885a56b2f7f91c5aa33f2560fb4a483fa62bb4739d77b2e2e652570e716d5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN66LWFR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAake2LKQHHG1A%2FVqP%2BMfSLcM5hEkWgyP30ZOlT6GzjrAiB8UmZfLJmcH9sEKwpcAyJpDnr2ym6TrVIxug%2F3Khs8zSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMktVeoaQt%2B7cKHFieKtwDnRQPgtk%2F5N6C3eiTEl5zbyYxfEBYgH3e8zbQT41KoWa8Tp5oJb0XVkdgcjMGkZ7aYnZW6QF6e5EIqC1yq%2B4O1C6au%2Fy0UhBfWExHKYhgoRvQ%2FXODCxFxeCfHCW2rPtOh1w9odugpYX15R56dPUsccgnFdkpbfArz5llLJmkHClR%2BjsTaX4LJ6Ai3WSq6%2BUjEP8t2x6D3TPOpevdh%2FdtcpTpiZTykwTTYDDBMi8WxiWTDmpWtqjVFHQlH4XFQ6pPoxzAfN6dX7kH2CQ8DkV4J0HPkEzo5EbnpPqvuyl02qWlXXcuEJZw83F3%2BrPoKf9%2BuJl3EYhmVeHd3kzxEJjy%2BRn4ioQfqfBNPXoh3JeDm8XTR8vNPIJOsmp6kEHezDKomYXJ1CWU4UcmIirH2tPALQDO4oQnZu9KqW%2FsYT%2Fm%2BZ70%2BHp9nDt1P0%2BqRUFYWqCo8feb2y0Cg0ObmIi1oXGK%2BKEbntm9qnSs%2FV7PpVuFa%2BzoDKMmQ%2F3iMNojAu6te2ZYVT%2B8BKQvdhl%2FR5SdRGNGKXGIIJL5ov0D1MmsTnpXNl8X6T6SuSRM2fNnB3%2F4oC49YBZDKA%2FVwJcBcZvuO1tyUhNxA5VKdtLgCPGzS8DWLwH94FcXEkNLB0CJ%2Brd0w3I7OvgY6pgF%2FCX6Q4HQE850yBqstea5s6Yrv3OzSE%2F5z0qBdQLnFJnVe6R%2FbUJKKO8VPkWYlSC8agVs72e%2BdAF7GdUUDUwn1l6b%2FypEXOQ4SXl9nnl4U2Yf07r1KTZStOYsSwYpEpOSzkTBZi%2B3vZ%2FOBVU6k54uaPVKyB3HBWxNHvnXOuepz0%2Fx01WopvzDaRBiLtBCSw7Lf5k9pDN2Ih6ftINSKKnZ6rp4rD56z&X-Amz-Signature=00072cf47347e3f514e8ff85ecbc83ff15684fe35e0fe209c208a0d0dcfb1578&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN66LWFR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAake2LKQHHG1A%2FVqP%2BMfSLcM5hEkWgyP30ZOlT6GzjrAiB8UmZfLJmcH9sEKwpcAyJpDnr2ym6TrVIxug%2F3Khs8zSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMktVeoaQt%2B7cKHFieKtwDnRQPgtk%2F5N6C3eiTEl5zbyYxfEBYgH3e8zbQT41KoWa8Tp5oJb0XVkdgcjMGkZ7aYnZW6QF6e5EIqC1yq%2B4O1C6au%2Fy0UhBfWExHKYhgoRvQ%2FXODCxFxeCfHCW2rPtOh1w9odugpYX15R56dPUsccgnFdkpbfArz5llLJmkHClR%2BjsTaX4LJ6Ai3WSq6%2BUjEP8t2x6D3TPOpevdh%2FdtcpTpiZTykwTTYDDBMi8WxiWTDmpWtqjVFHQlH4XFQ6pPoxzAfN6dX7kH2CQ8DkV4J0HPkEzo5EbnpPqvuyl02qWlXXcuEJZw83F3%2BrPoKf9%2BuJl3EYhmVeHd3kzxEJjy%2BRn4ioQfqfBNPXoh3JeDm8XTR8vNPIJOsmp6kEHezDKomYXJ1CWU4UcmIirH2tPALQDO4oQnZu9KqW%2FsYT%2Fm%2BZ70%2BHp9nDt1P0%2BqRUFYWqCo8feb2y0Cg0ObmIi1oXGK%2BKEbntm9qnSs%2FV7PpVuFa%2BzoDKMmQ%2F3iMNojAu6te2ZYVT%2B8BKQvdhl%2FR5SdRGNGKXGIIJL5ov0D1MmsTnpXNl8X6T6SuSRM2fNnB3%2F4oC49YBZDKA%2FVwJcBcZvuO1tyUhNxA5VKdtLgCPGzS8DWLwH94FcXEkNLB0CJ%2Brd0w3I7OvgY6pgF%2FCX6Q4HQE850yBqstea5s6Yrv3OzSE%2F5z0qBdQLnFJnVe6R%2FbUJKKO8VPkWYlSC8agVs72e%2BdAF7GdUUDUwn1l6b%2FypEXOQ4SXl9nnl4U2Yf07r1KTZStOYsSwYpEpOSzkTBZi%2B3vZ%2FOBVU6k54uaPVKyB3HBWxNHvnXOuepz0%2Fx01WopvzDaRBiLtBCSw7Lf5k9pDN2Ih6ftINSKKnZ6rp4rD56z&X-Amz-Signature=c251be9cc46e34fd2ec5196a7fc147f9bc405fa243dd701fa7611c2475a128cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN66LWFR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAake2LKQHHG1A%2FVqP%2BMfSLcM5hEkWgyP30ZOlT6GzjrAiB8UmZfLJmcH9sEKwpcAyJpDnr2ym6TrVIxug%2F3Khs8zSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMktVeoaQt%2B7cKHFieKtwDnRQPgtk%2F5N6C3eiTEl5zbyYxfEBYgH3e8zbQT41KoWa8Tp5oJb0XVkdgcjMGkZ7aYnZW6QF6e5EIqC1yq%2B4O1C6au%2Fy0UhBfWExHKYhgoRvQ%2FXODCxFxeCfHCW2rPtOh1w9odugpYX15R56dPUsccgnFdkpbfArz5llLJmkHClR%2BjsTaX4LJ6Ai3WSq6%2BUjEP8t2x6D3TPOpevdh%2FdtcpTpiZTykwTTYDDBMi8WxiWTDmpWtqjVFHQlH4XFQ6pPoxzAfN6dX7kH2CQ8DkV4J0HPkEzo5EbnpPqvuyl02qWlXXcuEJZw83F3%2BrPoKf9%2BuJl3EYhmVeHd3kzxEJjy%2BRn4ioQfqfBNPXoh3JeDm8XTR8vNPIJOsmp6kEHezDKomYXJ1CWU4UcmIirH2tPALQDO4oQnZu9KqW%2FsYT%2Fm%2BZ70%2BHp9nDt1P0%2BqRUFYWqCo8feb2y0Cg0ObmIi1oXGK%2BKEbntm9qnSs%2FV7PpVuFa%2BzoDKMmQ%2F3iMNojAu6te2ZYVT%2B8BKQvdhl%2FR5SdRGNGKXGIIJL5ov0D1MmsTnpXNl8X6T6SuSRM2fNnB3%2F4oC49YBZDKA%2FVwJcBcZvuO1tyUhNxA5VKdtLgCPGzS8DWLwH94FcXEkNLB0CJ%2Brd0w3I7OvgY6pgF%2FCX6Q4HQE850yBqstea5s6Yrv3OzSE%2F5z0qBdQLnFJnVe6R%2FbUJKKO8VPkWYlSC8agVs72e%2BdAF7GdUUDUwn1l6b%2FypEXOQ4SXl9nnl4U2Yf07r1KTZStOYsSwYpEpOSzkTBZi%2B3vZ%2FOBVU6k54uaPVKyB3HBWxNHvnXOuepz0%2Fx01WopvzDaRBiLtBCSw7Lf5k9pDN2Ih6ftINSKKnZ6rp4rD56z&X-Amz-Signature=a4ec95e6e6dacf82b9f2b935a574aa9f9876a1138efdd84807f8dc2294c376b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN66LWFR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAake2LKQHHG1A%2FVqP%2BMfSLcM5hEkWgyP30ZOlT6GzjrAiB8UmZfLJmcH9sEKwpcAyJpDnr2ym6TrVIxug%2F3Khs8zSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMktVeoaQt%2B7cKHFieKtwDnRQPgtk%2F5N6C3eiTEl5zbyYxfEBYgH3e8zbQT41KoWa8Tp5oJb0XVkdgcjMGkZ7aYnZW6QF6e5EIqC1yq%2B4O1C6au%2Fy0UhBfWExHKYhgoRvQ%2FXODCxFxeCfHCW2rPtOh1w9odugpYX15R56dPUsccgnFdkpbfArz5llLJmkHClR%2BjsTaX4LJ6Ai3WSq6%2BUjEP8t2x6D3TPOpevdh%2FdtcpTpiZTykwTTYDDBMi8WxiWTDmpWtqjVFHQlH4XFQ6pPoxzAfN6dX7kH2CQ8DkV4J0HPkEzo5EbnpPqvuyl02qWlXXcuEJZw83F3%2BrPoKf9%2BuJl3EYhmVeHd3kzxEJjy%2BRn4ioQfqfBNPXoh3JeDm8XTR8vNPIJOsmp6kEHezDKomYXJ1CWU4UcmIirH2tPALQDO4oQnZu9KqW%2FsYT%2Fm%2BZ70%2BHp9nDt1P0%2BqRUFYWqCo8feb2y0Cg0ObmIi1oXGK%2BKEbntm9qnSs%2FV7PpVuFa%2BzoDKMmQ%2F3iMNojAu6te2ZYVT%2B8BKQvdhl%2FR5SdRGNGKXGIIJL5ov0D1MmsTnpXNl8X6T6SuSRM2fNnB3%2F4oC49YBZDKA%2FVwJcBcZvuO1tyUhNxA5VKdtLgCPGzS8DWLwH94FcXEkNLB0CJ%2Brd0w3I7OvgY6pgF%2FCX6Q4HQE850yBqstea5s6Yrv3OzSE%2F5z0qBdQLnFJnVe6R%2FbUJKKO8VPkWYlSC8agVs72e%2BdAF7GdUUDUwn1l6b%2FypEXOQ4SXl9nnl4U2Yf07r1KTZStOYsSwYpEpOSzkTBZi%2B3vZ%2FOBVU6k54uaPVKyB3HBWxNHvnXOuepz0%2Fx01WopvzDaRBiLtBCSw7Lf5k9pDN2Ih6ftINSKKnZ6rp4rD56z&X-Amz-Signature=26590cf57e3d8d2288f0f9566b951511154fe505928703d7fa30d8332549da7c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN66LWFR%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T021440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAake2LKQHHG1A%2FVqP%2BMfSLcM5hEkWgyP30ZOlT6GzjrAiB8UmZfLJmcH9sEKwpcAyJpDnr2ym6TrVIxug%2F3Khs8zSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMktVeoaQt%2B7cKHFieKtwDnRQPgtk%2F5N6C3eiTEl5zbyYxfEBYgH3e8zbQT41KoWa8Tp5oJb0XVkdgcjMGkZ7aYnZW6QF6e5EIqC1yq%2B4O1C6au%2Fy0UhBfWExHKYhgoRvQ%2FXODCxFxeCfHCW2rPtOh1w9odugpYX15R56dPUsccgnFdkpbfArz5llLJmkHClR%2BjsTaX4LJ6Ai3WSq6%2BUjEP8t2x6D3TPOpevdh%2FdtcpTpiZTykwTTYDDBMi8WxiWTDmpWtqjVFHQlH4XFQ6pPoxzAfN6dX7kH2CQ8DkV4J0HPkEzo5EbnpPqvuyl02qWlXXcuEJZw83F3%2BrPoKf9%2BuJl3EYhmVeHd3kzxEJjy%2BRn4ioQfqfBNPXoh3JeDm8XTR8vNPIJOsmp6kEHezDKomYXJ1CWU4UcmIirH2tPALQDO4oQnZu9KqW%2FsYT%2Fm%2BZ70%2BHp9nDt1P0%2BqRUFYWqCo8feb2y0Cg0ObmIi1oXGK%2BKEbntm9qnSs%2FV7PpVuFa%2BzoDKMmQ%2F3iMNojAu6te2ZYVT%2B8BKQvdhl%2FR5SdRGNGKXGIIJL5ov0D1MmsTnpXNl8X6T6SuSRM2fNnB3%2F4oC49YBZDKA%2FVwJcBcZvuO1tyUhNxA5VKdtLgCPGzS8DWLwH94FcXEkNLB0CJ%2Brd0w3I7OvgY6pgF%2FCX6Q4HQE850yBqstea5s6Yrv3OzSE%2F5z0qBdQLnFJnVe6R%2FbUJKKO8VPkWYlSC8agVs72e%2BdAF7GdUUDUwn1l6b%2FypEXOQ4SXl9nnl4U2Yf07r1KTZStOYsSwYpEpOSzkTBZi%2B3vZ%2FOBVU6k54uaPVKyB3HBWxNHvnXOuepz0%2Fx01WopvzDaRBiLtBCSw7Lf5k9pDN2Ih6ftINSKKnZ6rp4rD56z&X-Amz-Signature=febebc12e68168fc5002341e0adb44e6d62395791764deb9485a7824c317efef&X-Amz-SignedHeaders=host&x-id=GetObject)
