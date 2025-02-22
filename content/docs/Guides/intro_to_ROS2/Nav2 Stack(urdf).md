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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKJYCRK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fn%2FUO%2FvcTwOiWXFWU1%2BUemD5%2FZT8jr2bRMSkz2vs3DwIgHsKVS5zfs2qsWMp2jJ6d5JAFKpj5dhIxCAEF7ePpehoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0sFb6tUuPCx0K%2BRircA5eJGxDicTvYi31CDqd4HDfsxZf7hacpqiRN3FCXC%2BeECucYxA9qENrbo4437BXpWpQCXp6W4xr%2BOfh%2FuGK4cVBq24ZvucPgCY0kEiv6O4LGBX3k3sG4M9BTb7jb4cMptCv6oMre9%2BXZhrR%2FosZsR1GlVPsTcX9lYTX2rNBv%2FLOW010bTW1fk3MhFoenag838kzN%2Bi48z0zemFmQeVhRepFIK5rrRzl7scSLfwQmQU0Zv%2FQnQOaIvBQrUoqYW3XI1ff10vQhukh0kqKtqsd6JgILfHS9x4CMd9ldXHfTQe%2BnZ1BVFFW%2B9S4CmodaqYRreF8pOwlRKG41ixx%2F%2Fzs%2FDg%2FSAoikfUQGkwFzl3nAXOssthtl0iTToQQPYPZDdgSfVvpJOsefj0r%2FO%2FsZfkgs5ruo7Odo%2BIrc%2FjCkKo3uEI2gbEZIlP3iCYGJZ3z8IKjXPdkmI%2BfgvPycIoiqn4O7iqZmEPBREQClo%2BLvzC%2B0uPLWXKLt3xG7wo6zLnnRn2oWAA8k%2FFaH%2F5VkDgoNyDu8Wa7hyUZX0AEB8t4rm20hAimV6BCt9v7r92WS9NhwMs16QOR%2BGNylCf7JBaZqM9AkWGqSVjqOZQzyu6BKNHsSViVQ97j03lHyK0mjnGTOMInp5r0GOqUBEEAs9trWzJXgk8mhpWFcKZLJ6%2F1vUIbU1taxvevdfSye%2Bp%2Fq%2FJLU1l%2FBCWW5reJCc5thidJM9iWdixD4MRVWHVfbJ0Wqbv3zaY4CYaZZu9NVLemuGuobnH15j5scURbIN7EkurfGFRKElfIrr%2FfnwWuOtv7Hi2ynY7CWhTppjCGcD%2BFtRekG3i7NohbMoex0%2FKn%2BmbVH6DIkL6nY7oG%2F8J1wbV59&X-Amz-Signature=5d15f00b03973d807c8f57c2f1d6b86ba19c146f47b0ee019fdf7866b4d283e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKJYCRK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fn%2FUO%2FvcTwOiWXFWU1%2BUemD5%2FZT8jr2bRMSkz2vs3DwIgHsKVS5zfs2qsWMp2jJ6d5JAFKpj5dhIxCAEF7ePpehoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0sFb6tUuPCx0K%2BRircA5eJGxDicTvYi31CDqd4HDfsxZf7hacpqiRN3FCXC%2BeECucYxA9qENrbo4437BXpWpQCXp6W4xr%2BOfh%2FuGK4cVBq24ZvucPgCY0kEiv6O4LGBX3k3sG4M9BTb7jb4cMptCv6oMre9%2BXZhrR%2FosZsR1GlVPsTcX9lYTX2rNBv%2FLOW010bTW1fk3MhFoenag838kzN%2Bi48z0zemFmQeVhRepFIK5rrRzl7scSLfwQmQU0Zv%2FQnQOaIvBQrUoqYW3XI1ff10vQhukh0kqKtqsd6JgILfHS9x4CMd9ldXHfTQe%2BnZ1BVFFW%2B9S4CmodaqYRreF8pOwlRKG41ixx%2F%2Fzs%2FDg%2FSAoikfUQGkwFzl3nAXOssthtl0iTToQQPYPZDdgSfVvpJOsefj0r%2FO%2FsZfkgs5ruo7Odo%2BIrc%2FjCkKo3uEI2gbEZIlP3iCYGJZ3z8IKjXPdkmI%2BfgvPycIoiqn4O7iqZmEPBREQClo%2BLvzC%2B0uPLWXKLt3xG7wo6zLnnRn2oWAA8k%2FFaH%2F5VkDgoNyDu8Wa7hyUZX0AEB8t4rm20hAimV6BCt9v7r92WS9NhwMs16QOR%2BGNylCf7JBaZqM9AkWGqSVjqOZQzyu6BKNHsSViVQ97j03lHyK0mjnGTOMInp5r0GOqUBEEAs9trWzJXgk8mhpWFcKZLJ6%2F1vUIbU1taxvevdfSye%2Bp%2Fq%2FJLU1l%2FBCWW5reJCc5thidJM9iWdixD4MRVWHVfbJ0Wqbv3zaY4CYaZZu9NVLemuGuobnH15j5scURbIN7EkurfGFRKElfIrr%2FfnwWuOtv7Hi2ynY7CWhTppjCGcD%2BFtRekG3i7NohbMoex0%2FKn%2BmbVH6DIkL6nY7oG%2F8J1wbV59&X-Amz-Signature=a30a4959bdaa5dea50dba458c6c8f0bb3b7a36f393ff95a87773e42b01ca7f89&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKJYCRK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fn%2FUO%2FvcTwOiWXFWU1%2BUemD5%2FZT8jr2bRMSkz2vs3DwIgHsKVS5zfs2qsWMp2jJ6d5JAFKpj5dhIxCAEF7ePpehoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0sFb6tUuPCx0K%2BRircA5eJGxDicTvYi31CDqd4HDfsxZf7hacpqiRN3FCXC%2BeECucYxA9qENrbo4437BXpWpQCXp6W4xr%2BOfh%2FuGK4cVBq24ZvucPgCY0kEiv6O4LGBX3k3sG4M9BTb7jb4cMptCv6oMre9%2BXZhrR%2FosZsR1GlVPsTcX9lYTX2rNBv%2FLOW010bTW1fk3MhFoenag838kzN%2Bi48z0zemFmQeVhRepFIK5rrRzl7scSLfwQmQU0Zv%2FQnQOaIvBQrUoqYW3XI1ff10vQhukh0kqKtqsd6JgILfHS9x4CMd9ldXHfTQe%2BnZ1BVFFW%2B9S4CmodaqYRreF8pOwlRKG41ixx%2F%2Fzs%2FDg%2FSAoikfUQGkwFzl3nAXOssthtl0iTToQQPYPZDdgSfVvpJOsefj0r%2FO%2FsZfkgs5ruo7Odo%2BIrc%2FjCkKo3uEI2gbEZIlP3iCYGJZ3z8IKjXPdkmI%2BfgvPycIoiqn4O7iqZmEPBREQClo%2BLvzC%2B0uPLWXKLt3xG7wo6zLnnRn2oWAA8k%2FFaH%2F5VkDgoNyDu8Wa7hyUZX0AEB8t4rm20hAimV6BCt9v7r92WS9NhwMs16QOR%2BGNylCf7JBaZqM9AkWGqSVjqOZQzyu6BKNHsSViVQ97j03lHyK0mjnGTOMInp5r0GOqUBEEAs9trWzJXgk8mhpWFcKZLJ6%2F1vUIbU1taxvevdfSye%2Bp%2Fq%2FJLU1l%2FBCWW5reJCc5thidJM9iWdixD4MRVWHVfbJ0Wqbv3zaY4CYaZZu9NVLemuGuobnH15j5scURbIN7EkurfGFRKElfIrr%2FfnwWuOtv7Hi2ynY7CWhTppjCGcD%2BFtRekG3i7NohbMoex0%2FKn%2BmbVH6DIkL6nY7oG%2F8J1wbV59&X-Amz-Signature=4847d7303ee7771e4e9f5d4335549692bdfb5520fc496d1339bad4a0fdc1f4ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKJYCRK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fn%2FUO%2FvcTwOiWXFWU1%2BUemD5%2FZT8jr2bRMSkz2vs3DwIgHsKVS5zfs2qsWMp2jJ6d5JAFKpj5dhIxCAEF7ePpehoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0sFb6tUuPCx0K%2BRircA5eJGxDicTvYi31CDqd4HDfsxZf7hacpqiRN3FCXC%2BeECucYxA9qENrbo4437BXpWpQCXp6W4xr%2BOfh%2FuGK4cVBq24ZvucPgCY0kEiv6O4LGBX3k3sG4M9BTb7jb4cMptCv6oMre9%2BXZhrR%2FosZsR1GlVPsTcX9lYTX2rNBv%2FLOW010bTW1fk3MhFoenag838kzN%2Bi48z0zemFmQeVhRepFIK5rrRzl7scSLfwQmQU0Zv%2FQnQOaIvBQrUoqYW3XI1ff10vQhukh0kqKtqsd6JgILfHS9x4CMd9ldXHfTQe%2BnZ1BVFFW%2B9S4CmodaqYRreF8pOwlRKG41ixx%2F%2Fzs%2FDg%2FSAoikfUQGkwFzl3nAXOssthtl0iTToQQPYPZDdgSfVvpJOsefj0r%2FO%2FsZfkgs5ruo7Odo%2BIrc%2FjCkKo3uEI2gbEZIlP3iCYGJZ3z8IKjXPdkmI%2BfgvPycIoiqn4O7iqZmEPBREQClo%2BLvzC%2B0uPLWXKLt3xG7wo6zLnnRn2oWAA8k%2FFaH%2F5VkDgoNyDu8Wa7hyUZX0AEB8t4rm20hAimV6BCt9v7r92WS9NhwMs16QOR%2BGNylCf7JBaZqM9AkWGqSVjqOZQzyu6BKNHsSViVQ97j03lHyK0mjnGTOMInp5r0GOqUBEEAs9trWzJXgk8mhpWFcKZLJ6%2F1vUIbU1taxvevdfSye%2Bp%2Fq%2FJLU1l%2FBCWW5reJCc5thidJM9iWdixD4MRVWHVfbJ0Wqbv3zaY4CYaZZu9NVLemuGuobnH15j5scURbIN7EkurfGFRKElfIrr%2FfnwWuOtv7Hi2ynY7CWhTppjCGcD%2BFtRekG3i7NohbMoex0%2FKn%2BmbVH6DIkL6nY7oG%2F8J1wbV59&X-Amz-Signature=38bc22e08f15c8af705ce00e35f4b26af18ddde08778e303faf3d324a659c328&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKJYCRK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fn%2FUO%2FvcTwOiWXFWU1%2BUemD5%2FZT8jr2bRMSkz2vs3DwIgHsKVS5zfs2qsWMp2jJ6d5JAFKpj5dhIxCAEF7ePpehoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0sFb6tUuPCx0K%2BRircA5eJGxDicTvYi31CDqd4HDfsxZf7hacpqiRN3FCXC%2BeECucYxA9qENrbo4437BXpWpQCXp6W4xr%2BOfh%2FuGK4cVBq24ZvucPgCY0kEiv6O4LGBX3k3sG4M9BTb7jb4cMptCv6oMre9%2BXZhrR%2FosZsR1GlVPsTcX9lYTX2rNBv%2FLOW010bTW1fk3MhFoenag838kzN%2Bi48z0zemFmQeVhRepFIK5rrRzl7scSLfwQmQU0Zv%2FQnQOaIvBQrUoqYW3XI1ff10vQhukh0kqKtqsd6JgILfHS9x4CMd9ldXHfTQe%2BnZ1BVFFW%2B9S4CmodaqYRreF8pOwlRKG41ixx%2F%2Fzs%2FDg%2FSAoikfUQGkwFzl3nAXOssthtl0iTToQQPYPZDdgSfVvpJOsefj0r%2FO%2FsZfkgs5ruo7Odo%2BIrc%2FjCkKo3uEI2gbEZIlP3iCYGJZ3z8IKjXPdkmI%2BfgvPycIoiqn4O7iqZmEPBREQClo%2BLvzC%2B0uPLWXKLt3xG7wo6zLnnRn2oWAA8k%2FFaH%2F5VkDgoNyDu8Wa7hyUZX0AEB8t4rm20hAimV6BCt9v7r92WS9NhwMs16QOR%2BGNylCf7JBaZqM9AkWGqSVjqOZQzyu6BKNHsSViVQ97j03lHyK0mjnGTOMInp5r0GOqUBEEAs9trWzJXgk8mhpWFcKZLJ6%2F1vUIbU1taxvevdfSye%2Bp%2Fq%2FJLU1l%2FBCWW5reJCc5thidJM9iWdixD4MRVWHVfbJ0Wqbv3zaY4CYaZZu9NVLemuGuobnH15j5scURbIN7EkurfGFRKElfIrr%2FfnwWuOtv7Hi2ynY7CWhTppjCGcD%2BFtRekG3i7NohbMoex0%2FKn%2BmbVH6DIkL6nY7oG%2F8J1wbV59&X-Amz-Signature=7f1f0a0823d02afe427e32da9c27e1b0821d47f52dd75766effd6f0eb61a11d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKJYCRK%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Fn%2FUO%2FvcTwOiWXFWU1%2BUemD5%2FZT8jr2bRMSkz2vs3DwIgHsKVS5zfs2qsWMp2jJ6d5JAFKpj5dhIxCAEF7ePpehoqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0sFb6tUuPCx0K%2BRircA5eJGxDicTvYi31CDqd4HDfsxZf7hacpqiRN3FCXC%2BeECucYxA9qENrbo4437BXpWpQCXp6W4xr%2BOfh%2FuGK4cVBq24ZvucPgCY0kEiv6O4LGBX3k3sG4M9BTb7jb4cMptCv6oMre9%2BXZhrR%2FosZsR1GlVPsTcX9lYTX2rNBv%2FLOW010bTW1fk3MhFoenag838kzN%2Bi48z0zemFmQeVhRepFIK5rrRzl7scSLfwQmQU0Zv%2FQnQOaIvBQrUoqYW3XI1ff10vQhukh0kqKtqsd6JgILfHS9x4CMd9ldXHfTQe%2BnZ1BVFFW%2B9S4CmodaqYRreF8pOwlRKG41ixx%2F%2Fzs%2FDg%2FSAoikfUQGkwFzl3nAXOssthtl0iTToQQPYPZDdgSfVvpJOsefj0r%2FO%2FsZfkgs5ruo7Odo%2BIrc%2FjCkKo3uEI2gbEZIlP3iCYGJZ3z8IKjXPdkmI%2BfgvPycIoiqn4O7iqZmEPBREQClo%2BLvzC%2B0uPLWXKLt3xG7wo6zLnnRn2oWAA8k%2FFaH%2F5VkDgoNyDu8Wa7hyUZX0AEB8t4rm20hAimV6BCt9v7r92WS9NhwMs16QOR%2BGNylCf7JBaZqM9AkWGqSVjqOZQzyu6BKNHsSViVQ97j03lHyK0mjnGTOMInp5r0GOqUBEEAs9trWzJXgk8mhpWFcKZLJ6%2F1vUIbU1taxvevdfSye%2Bp%2Fq%2FJLU1l%2FBCWW5reJCc5thidJM9iWdixD4MRVWHVfbJ0Wqbv3zaY4CYaZZu9NVLemuGuobnH15j5scURbIN7EkurfGFRKElfIrr%2FfnwWuOtv7Hi2ynY7CWhTppjCGcD%2BFtRekG3i7NohbMoex0%2FKn%2BmbVH6DIkL6nY7oG%2F8J1wbV59&X-Amz-Signature=56fd8203fe6af8f22a234ddb214e0ee372725b012d215704f3559f5f71be8013&X-Amz-SignedHeaders=host&x-id=GetObject)
