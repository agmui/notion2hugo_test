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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKUNCW7P%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYH0lH70SkT8QO4gxWj4dL3TfVT6aqWm87%2BIkxu995bAiEAoJSFCLP9Y5Jb7NFxstZ7OVkdD9aOXIde7fepnNclu0kq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKwRtjO2UKtSmfAz0SrcAzGxvwb33HQMXwHzd%2FMiyqbvz8mcM7wxym2XxNhF8QdnFm8iL1SvU%2FFWAcT74a5xT446Aixvy4zVW%2Fz5f6UoFDmqiOwX56am9jLDD7M%2FV%2BgRLcNmvAtNQ8Fdmhclb8gY%2FjTeGO%2F%2FB2A%2BW%2BpQRMpIJNtPk2r%2FsBboZ5zxQlv6AD9TgGLRCV86yetkO%2F%2BbLSR5wRDqD8ZM1MwDphOt9PsQd%2B%2Fuzv7yjeIcQQudWsk3WDTRsQvcbkmDgREhEEIOKjWk41i6J6A68dQVWdFNhhhpGOXMH6oTkGMJttP1qOnmZUWYRixgd%2FWfqNEIcw0ADr5edZZXg9F8IOZFUx8q34jtTglKI%2F65h%2F3fLCejL1y3qjhPJ9JPwsPO4KqJebfKEyVkUWUfw3OgR0pTGSoz0bkR6HEU24S8DNESpsmpGjfV3xvQJaKJl5zSoJIDjnbrzfxqtZrmn9owjYyMhl0cccJ9nDkg%2FdlXtXYqP9uQfyDMZwKmDh4jMfff4kZTgI6SycdLuXXATWrirn62QsCrEiNTdR00DZ1XHHubLN1OoNI6eRbX2rPP19vII9TBsbpC6W%2FNq%2FGTEkzCB0zbROQywGVFND7YsNtzGk%2BtO2T%2FNkXbWfMiy%2Fr7t6Vu2fyASmxsMPH5j78GOqUBijMOTxAY4nw58lgosq4c%2FEwgNrndigA5kLix2TCVKVNptV3Gtbhtzj9dZLyZi4rSC149OIG0dD907TKv4IlLSukB5XawkbKex1awbo86udB9XkzL9V9TzPis4YiDD51d1Cm8qa1WGICJCfjwolqDgtkj85hnH%2F%2Fy9ndU95wJu8skvOX1k%2FgBpfbf2wYl1y13Cd5VqbCgTA8vw2bdkzcMAAtMr4jE&X-Amz-Signature=6da808aee8af63db8c03490c091e1f7dff3de0fc155e7b299982af9f32ecb09c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKUNCW7P%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYH0lH70SkT8QO4gxWj4dL3TfVT6aqWm87%2BIkxu995bAiEAoJSFCLP9Y5Jb7NFxstZ7OVkdD9aOXIde7fepnNclu0kq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKwRtjO2UKtSmfAz0SrcAzGxvwb33HQMXwHzd%2FMiyqbvz8mcM7wxym2XxNhF8QdnFm8iL1SvU%2FFWAcT74a5xT446Aixvy4zVW%2Fz5f6UoFDmqiOwX56am9jLDD7M%2FV%2BgRLcNmvAtNQ8Fdmhclb8gY%2FjTeGO%2F%2FB2A%2BW%2BpQRMpIJNtPk2r%2FsBboZ5zxQlv6AD9TgGLRCV86yetkO%2F%2BbLSR5wRDqD8ZM1MwDphOt9PsQd%2B%2Fuzv7yjeIcQQudWsk3WDTRsQvcbkmDgREhEEIOKjWk41i6J6A68dQVWdFNhhhpGOXMH6oTkGMJttP1qOnmZUWYRixgd%2FWfqNEIcw0ADr5edZZXg9F8IOZFUx8q34jtTglKI%2F65h%2F3fLCejL1y3qjhPJ9JPwsPO4KqJebfKEyVkUWUfw3OgR0pTGSoz0bkR6HEU24S8DNESpsmpGjfV3xvQJaKJl5zSoJIDjnbrzfxqtZrmn9owjYyMhl0cccJ9nDkg%2FdlXtXYqP9uQfyDMZwKmDh4jMfff4kZTgI6SycdLuXXATWrirn62QsCrEiNTdR00DZ1XHHubLN1OoNI6eRbX2rPP19vII9TBsbpC6W%2FNq%2FGTEkzCB0zbROQywGVFND7YsNtzGk%2BtO2T%2FNkXbWfMiy%2Fr7t6Vu2fyASmxsMPH5j78GOqUBijMOTxAY4nw58lgosq4c%2FEwgNrndigA5kLix2TCVKVNptV3Gtbhtzj9dZLyZi4rSC149OIG0dD907TKv4IlLSukB5XawkbKex1awbo86udB9XkzL9V9TzPis4YiDD51d1Cm8qa1WGICJCfjwolqDgtkj85hnH%2F%2Fy9ndU95wJu8skvOX1k%2FgBpfbf2wYl1y13Cd5VqbCgTA8vw2bdkzcMAAtMr4jE&X-Amz-Signature=9046cc20417fa768e786b9e022adc32479ac0134ec35b3fe1b2a484885fff3d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKUNCW7P%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYH0lH70SkT8QO4gxWj4dL3TfVT6aqWm87%2BIkxu995bAiEAoJSFCLP9Y5Jb7NFxstZ7OVkdD9aOXIde7fepnNclu0kq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKwRtjO2UKtSmfAz0SrcAzGxvwb33HQMXwHzd%2FMiyqbvz8mcM7wxym2XxNhF8QdnFm8iL1SvU%2FFWAcT74a5xT446Aixvy4zVW%2Fz5f6UoFDmqiOwX56am9jLDD7M%2FV%2BgRLcNmvAtNQ8Fdmhclb8gY%2FjTeGO%2F%2FB2A%2BW%2BpQRMpIJNtPk2r%2FsBboZ5zxQlv6AD9TgGLRCV86yetkO%2F%2BbLSR5wRDqD8ZM1MwDphOt9PsQd%2B%2Fuzv7yjeIcQQudWsk3WDTRsQvcbkmDgREhEEIOKjWk41i6J6A68dQVWdFNhhhpGOXMH6oTkGMJttP1qOnmZUWYRixgd%2FWfqNEIcw0ADr5edZZXg9F8IOZFUx8q34jtTglKI%2F65h%2F3fLCejL1y3qjhPJ9JPwsPO4KqJebfKEyVkUWUfw3OgR0pTGSoz0bkR6HEU24S8DNESpsmpGjfV3xvQJaKJl5zSoJIDjnbrzfxqtZrmn9owjYyMhl0cccJ9nDkg%2FdlXtXYqP9uQfyDMZwKmDh4jMfff4kZTgI6SycdLuXXATWrirn62QsCrEiNTdR00DZ1XHHubLN1OoNI6eRbX2rPP19vII9TBsbpC6W%2FNq%2FGTEkzCB0zbROQywGVFND7YsNtzGk%2BtO2T%2FNkXbWfMiy%2Fr7t6Vu2fyASmxsMPH5j78GOqUBijMOTxAY4nw58lgosq4c%2FEwgNrndigA5kLix2TCVKVNptV3Gtbhtzj9dZLyZi4rSC149OIG0dD907TKv4IlLSukB5XawkbKex1awbo86udB9XkzL9V9TzPis4YiDD51d1Cm8qa1WGICJCfjwolqDgtkj85hnH%2F%2Fy9ndU95wJu8skvOX1k%2FgBpfbf2wYl1y13Cd5VqbCgTA8vw2bdkzcMAAtMr4jE&X-Amz-Signature=b192f2dc49781d3be14e3a0a4b28ea8f8f95db6f9824b1bc3504c109fa7fb204&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKUNCW7P%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYH0lH70SkT8QO4gxWj4dL3TfVT6aqWm87%2BIkxu995bAiEAoJSFCLP9Y5Jb7NFxstZ7OVkdD9aOXIde7fepnNclu0kq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKwRtjO2UKtSmfAz0SrcAzGxvwb33HQMXwHzd%2FMiyqbvz8mcM7wxym2XxNhF8QdnFm8iL1SvU%2FFWAcT74a5xT446Aixvy4zVW%2Fz5f6UoFDmqiOwX56am9jLDD7M%2FV%2BgRLcNmvAtNQ8Fdmhclb8gY%2FjTeGO%2F%2FB2A%2BW%2BpQRMpIJNtPk2r%2FsBboZ5zxQlv6AD9TgGLRCV86yetkO%2F%2BbLSR5wRDqD8ZM1MwDphOt9PsQd%2B%2Fuzv7yjeIcQQudWsk3WDTRsQvcbkmDgREhEEIOKjWk41i6J6A68dQVWdFNhhhpGOXMH6oTkGMJttP1qOnmZUWYRixgd%2FWfqNEIcw0ADr5edZZXg9F8IOZFUx8q34jtTglKI%2F65h%2F3fLCejL1y3qjhPJ9JPwsPO4KqJebfKEyVkUWUfw3OgR0pTGSoz0bkR6HEU24S8DNESpsmpGjfV3xvQJaKJl5zSoJIDjnbrzfxqtZrmn9owjYyMhl0cccJ9nDkg%2FdlXtXYqP9uQfyDMZwKmDh4jMfff4kZTgI6SycdLuXXATWrirn62QsCrEiNTdR00DZ1XHHubLN1OoNI6eRbX2rPP19vII9TBsbpC6W%2FNq%2FGTEkzCB0zbROQywGVFND7YsNtzGk%2BtO2T%2FNkXbWfMiy%2Fr7t6Vu2fyASmxsMPH5j78GOqUBijMOTxAY4nw58lgosq4c%2FEwgNrndigA5kLix2TCVKVNptV3Gtbhtzj9dZLyZi4rSC149OIG0dD907TKv4IlLSukB5XawkbKex1awbo86udB9XkzL9V9TzPis4YiDD51d1Cm8qa1WGICJCfjwolqDgtkj85hnH%2F%2Fy9ndU95wJu8skvOX1k%2FgBpfbf2wYl1y13Cd5VqbCgTA8vw2bdkzcMAAtMr4jE&X-Amz-Signature=593823bcd7aa509adc9235388bef99a991ff40fb35f4b7b7fd146258a6d35b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKUNCW7P%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYH0lH70SkT8QO4gxWj4dL3TfVT6aqWm87%2BIkxu995bAiEAoJSFCLP9Y5Jb7NFxstZ7OVkdD9aOXIde7fepnNclu0kq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKwRtjO2UKtSmfAz0SrcAzGxvwb33HQMXwHzd%2FMiyqbvz8mcM7wxym2XxNhF8QdnFm8iL1SvU%2FFWAcT74a5xT446Aixvy4zVW%2Fz5f6UoFDmqiOwX56am9jLDD7M%2FV%2BgRLcNmvAtNQ8Fdmhclb8gY%2FjTeGO%2F%2FB2A%2BW%2BpQRMpIJNtPk2r%2FsBboZ5zxQlv6AD9TgGLRCV86yetkO%2F%2BbLSR5wRDqD8ZM1MwDphOt9PsQd%2B%2Fuzv7yjeIcQQudWsk3WDTRsQvcbkmDgREhEEIOKjWk41i6J6A68dQVWdFNhhhpGOXMH6oTkGMJttP1qOnmZUWYRixgd%2FWfqNEIcw0ADr5edZZXg9F8IOZFUx8q34jtTglKI%2F65h%2F3fLCejL1y3qjhPJ9JPwsPO4KqJebfKEyVkUWUfw3OgR0pTGSoz0bkR6HEU24S8DNESpsmpGjfV3xvQJaKJl5zSoJIDjnbrzfxqtZrmn9owjYyMhl0cccJ9nDkg%2FdlXtXYqP9uQfyDMZwKmDh4jMfff4kZTgI6SycdLuXXATWrirn62QsCrEiNTdR00DZ1XHHubLN1OoNI6eRbX2rPP19vII9TBsbpC6W%2FNq%2FGTEkzCB0zbROQywGVFND7YsNtzGk%2BtO2T%2FNkXbWfMiy%2Fr7t6Vu2fyASmxsMPH5j78GOqUBijMOTxAY4nw58lgosq4c%2FEwgNrndigA5kLix2TCVKVNptV3Gtbhtzj9dZLyZi4rSC149OIG0dD907TKv4IlLSukB5XawkbKex1awbo86udB9XkzL9V9TzPis4YiDD51d1Cm8qa1WGICJCfjwolqDgtkj85hnH%2F%2Fy9ndU95wJu8skvOX1k%2FgBpfbf2wYl1y13Cd5VqbCgTA8vw2bdkzcMAAtMr4jE&X-Amz-Signature=c5d4c56b2fa83e58797e4835fd0774a803e8feabc3eceb9486ba51a8700c27c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKUNCW7P%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHYH0lH70SkT8QO4gxWj4dL3TfVT6aqWm87%2BIkxu995bAiEAoJSFCLP9Y5Jb7NFxstZ7OVkdD9aOXIde7fepnNclu0kq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKwRtjO2UKtSmfAz0SrcAzGxvwb33HQMXwHzd%2FMiyqbvz8mcM7wxym2XxNhF8QdnFm8iL1SvU%2FFWAcT74a5xT446Aixvy4zVW%2Fz5f6UoFDmqiOwX56am9jLDD7M%2FV%2BgRLcNmvAtNQ8Fdmhclb8gY%2FjTeGO%2F%2FB2A%2BW%2BpQRMpIJNtPk2r%2FsBboZ5zxQlv6AD9TgGLRCV86yetkO%2F%2BbLSR5wRDqD8ZM1MwDphOt9PsQd%2B%2Fuzv7yjeIcQQudWsk3WDTRsQvcbkmDgREhEEIOKjWk41i6J6A68dQVWdFNhhhpGOXMH6oTkGMJttP1qOnmZUWYRixgd%2FWfqNEIcw0ADr5edZZXg9F8IOZFUx8q34jtTglKI%2F65h%2F3fLCejL1y3qjhPJ9JPwsPO4KqJebfKEyVkUWUfw3OgR0pTGSoz0bkR6HEU24S8DNESpsmpGjfV3xvQJaKJl5zSoJIDjnbrzfxqtZrmn9owjYyMhl0cccJ9nDkg%2FdlXtXYqP9uQfyDMZwKmDh4jMfff4kZTgI6SycdLuXXATWrirn62QsCrEiNTdR00DZ1XHHubLN1OoNI6eRbX2rPP19vII9TBsbpC6W%2FNq%2FGTEkzCB0zbROQywGVFND7YsNtzGk%2BtO2T%2FNkXbWfMiy%2Fr7t6Vu2fyASmxsMPH5j78GOqUBijMOTxAY4nw58lgosq4c%2FEwgNrndigA5kLix2TCVKVNptV3Gtbhtzj9dZLyZi4rSC149OIG0dD907TKv4IlLSukB5XawkbKex1awbo86udB9XkzL9V9TzPis4YiDD51d1Cm8qa1WGICJCfjwolqDgtkj85hnH%2F%2Fy9ndU95wJu8skvOX1k%2FgBpfbf2wYl1y13Cd5VqbCgTA8vw2bdkzcMAAtMr4jE&X-Amz-Signature=4d213d3973479e203dba873213cd1ceedb22dcc8013581d15f97daad112f77bf&X-Amz-SignedHeaders=host&x-id=GetObject)
