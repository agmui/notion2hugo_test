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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVWCRGSP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxH5sfQFEEaeYeVaOKB6p2bLHqZjJJ8z8Tfb1qvMsSjAiEA7xPSSYAimw7jWblFyM%2BsSArB918wXt19R7XX8pn%2B7UYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJusthwRthZC4QX76CrcA5wrFb04ZAXwXDP2OjhCqBiyrYbhpcwOg72XRPnYOVBZbHdreVpS6uEp3GM%2ByMpWpifHm2hOdL9QLG%2FspPtg58hNBGPsjV%2BF7OT5xQJy9VkvZhMtKl%2FNwhRvYMaBGqDa9ef6MX7tpQIcQv5kEz01EpwjCgWB3xkVRkJx4syWfGsY4KpXeG2fVBIHEawWCZX%2Bc%2Ff9DmVjn8i4iF5MjalXRWcp2tozkvZxJ7GNspN7T5pkVC323WS%2FYbKdDaymHEkyzND9KRw1ad2gEeRWPT5wvFFrlW%2FAT2QdCCKcVG%2BU9Na26sApwv3z7QemYj8nhUr1qyjZ4o6Lg%2BEO3TSXey%2BhmXAHYAT40m9tuOIUpEmLfqQLsuAFEjKWhBA5v3XaZ0PjOF%2Fzt3Pbuhit9AFolPQ1FKzK9HHexPLNcTJYqaFzRyy1sgtbeFhU%2B6U%2BkodI9UO74KY1eFPrp2VDXxlhDmHZumekBfIYGoPNT11u%2Bu6CNZ%2BG6V5SRH621G01QW72xKRqbg0qyzvbLholE7JPxFX5m%2FEdK90v2m2%2F2BPi%2B2q%2BiG52HS%2BRSAYgPqvf22PUXW5syEzOJXrZorBEIhFkUxOU73jBi7xtSbFe0yV%2FGNNhHrVrV00%2F8dusC3UaclDVMPKBrMEGOqUBguB6bsiSwyThx1Czb4MZyAl%2BH%2FK4MujBk%2BLs%2FqpivvTVB1wLC0MYuOhnLGvm%2Fu8rb7vnYT2WuX2phrfRhjVNa%2BpquKkc8DRt%2BdE061P2AMLoPoqMNh0WJSAdwchwHTwrIMJ4oZljdlmaCFsfmgsnqnqFGIeIUO7%2Ff2jxD%2FRQTp9lvvrBrC19fhhEaCNLVDfQfQab0YYvk%2BTwpKlDOpMAWffisn1S&X-Amz-Signature=6f26ef52ab56641dee305217eb6a7f66da15a30221968a935afc94c464c6e5fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVWCRGSP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxH5sfQFEEaeYeVaOKB6p2bLHqZjJJ8z8Tfb1qvMsSjAiEA7xPSSYAimw7jWblFyM%2BsSArB918wXt19R7XX8pn%2B7UYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJusthwRthZC4QX76CrcA5wrFb04ZAXwXDP2OjhCqBiyrYbhpcwOg72XRPnYOVBZbHdreVpS6uEp3GM%2ByMpWpifHm2hOdL9QLG%2FspPtg58hNBGPsjV%2BF7OT5xQJy9VkvZhMtKl%2FNwhRvYMaBGqDa9ef6MX7tpQIcQv5kEz01EpwjCgWB3xkVRkJx4syWfGsY4KpXeG2fVBIHEawWCZX%2Bc%2Ff9DmVjn8i4iF5MjalXRWcp2tozkvZxJ7GNspN7T5pkVC323WS%2FYbKdDaymHEkyzND9KRw1ad2gEeRWPT5wvFFrlW%2FAT2QdCCKcVG%2BU9Na26sApwv3z7QemYj8nhUr1qyjZ4o6Lg%2BEO3TSXey%2BhmXAHYAT40m9tuOIUpEmLfqQLsuAFEjKWhBA5v3XaZ0PjOF%2Fzt3Pbuhit9AFolPQ1FKzK9HHexPLNcTJYqaFzRyy1sgtbeFhU%2B6U%2BkodI9UO74KY1eFPrp2VDXxlhDmHZumekBfIYGoPNT11u%2Bu6CNZ%2BG6V5SRH621G01QW72xKRqbg0qyzvbLholE7JPxFX5m%2FEdK90v2m2%2F2BPi%2B2q%2BiG52HS%2BRSAYgPqvf22PUXW5syEzOJXrZorBEIhFkUxOU73jBi7xtSbFe0yV%2FGNNhHrVrV00%2F8dusC3UaclDVMPKBrMEGOqUBguB6bsiSwyThx1Czb4MZyAl%2BH%2FK4MujBk%2BLs%2FqpivvTVB1wLC0MYuOhnLGvm%2Fu8rb7vnYT2WuX2phrfRhjVNa%2BpquKkc8DRt%2BdE061P2AMLoPoqMNh0WJSAdwchwHTwrIMJ4oZljdlmaCFsfmgsnqnqFGIeIUO7%2Ff2jxD%2FRQTp9lvvrBrC19fhhEaCNLVDfQfQab0YYvk%2BTwpKlDOpMAWffisn1S&X-Amz-Signature=ceebc1097005c4cacee322548f8b74078a7bad1221ec0219c77a49d5a3a54307&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVWCRGSP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxH5sfQFEEaeYeVaOKB6p2bLHqZjJJ8z8Tfb1qvMsSjAiEA7xPSSYAimw7jWblFyM%2BsSArB918wXt19R7XX8pn%2B7UYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJusthwRthZC4QX76CrcA5wrFb04ZAXwXDP2OjhCqBiyrYbhpcwOg72XRPnYOVBZbHdreVpS6uEp3GM%2ByMpWpifHm2hOdL9QLG%2FspPtg58hNBGPsjV%2BF7OT5xQJy9VkvZhMtKl%2FNwhRvYMaBGqDa9ef6MX7tpQIcQv5kEz01EpwjCgWB3xkVRkJx4syWfGsY4KpXeG2fVBIHEawWCZX%2Bc%2Ff9DmVjn8i4iF5MjalXRWcp2tozkvZxJ7GNspN7T5pkVC323WS%2FYbKdDaymHEkyzND9KRw1ad2gEeRWPT5wvFFrlW%2FAT2QdCCKcVG%2BU9Na26sApwv3z7QemYj8nhUr1qyjZ4o6Lg%2BEO3TSXey%2BhmXAHYAT40m9tuOIUpEmLfqQLsuAFEjKWhBA5v3XaZ0PjOF%2Fzt3Pbuhit9AFolPQ1FKzK9HHexPLNcTJYqaFzRyy1sgtbeFhU%2B6U%2BkodI9UO74KY1eFPrp2VDXxlhDmHZumekBfIYGoPNT11u%2Bu6CNZ%2BG6V5SRH621G01QW72xKRqbg0qyzvbLholE7JPxFX5m%2FEdK90v2m2%2F2BPi%2B2q%2BiG52HS%2BRSAYgPqvf22PUXW5syEzOJXrZorBEIhFkUxOU73jBi7xtSbFe0yV%2FGNNhHrVrV00%2F8dusC3UaclDVMPKBrMEGOqUBguB6bsiSwyThx1Czb4MZyAl%2BH%2FK4MujBk%2BLs%2FqpivvTVB1wLC0MYuOhnLGvm%2Fu8rb7vnYT2WuX2phrfRhjVNa%2BpquKkc8DRt%2BdE061P2AMLoPoqMNh0WJSAdwchwHTwrIMJ4oZljdlmaCFsfmgsnqnqFGIeIUO7%2Ff2jxD%2FRQTp9lvvrBrC19fhhEaCNLVDfQfQab0YYvk%2BTwpKlDOpMAWffisn1S&X-Amz-Signature=6f2d7a793876c20e7d378287bb49d7fcd31f7bea99283b1a6abae06a1ef2a855&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVWCRGSP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxH5sfQFEEaeYeVaOKB6p2bLHqZjJJ8z8Tfb1qvMsSjAiEA7xPSSYAimw7jWblFyM%2BsSArB918wXt19R7XX8pn%2B7UYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJusthwRthZC4QX76CrcA5wrFb04ZAXwXDP2OjhCqBiyrYbhpcwOg72XRPnYOVBZbHdreVpS6uEp3GM%2ByMpWpifHm2hOdL9QLG%2FspPtg58hNBGPsjV%2BF7OT5xQJy9VkvZhMtKl%2FNwhRvYMaBGqDa9ef6MX7tpQIcQv5kEz01EpwjCgWB3xkVRkJx4syWfGsY4KpXeG2fVBIHEawWCZX%2Bc%2Ff9DmVjn8i4iF5MjalXRWcp2tozkvZxJ7GNspN7T5pkVC323WS%2FYbKdDaymHEkyzND9KRw1ad2gEeRWPT5wvFFrlW%2FAT2QdCCKcVG%2BU9Na26sApwv3z7QemYj8nhUr1qyjZ4o6Lg%2BEO3TSXey%2BhmXAHYAT40m9tuOIUpEmLfqQLsuAFEjKWhBA5v3XaZ0PjOF%2Fzt3Pbuhit9AFolPQ1FKzK9HHexPLNcTJYqaFzRyy1sgtbeFhU%2B6U%2BkodI9UO74KY1eFPrp2VDXxlhDmHZumekBfIYGoPNT11u%2Bu6CNZ%2BG6V5SRH621G01QW72xKRqbg0qyzvbLholE7JPxFX5m%2FEdK90v2m2%2F2BPi%2B2q%2BiG52HS%2BRSAYgPqvf22PUXW5syEzOJXrZorBEIhFkUxOU73jBi7xtSbFe0yV%2FGNNhHrVrV00%2F8dusC3UaclDVMPKBrMEGOqUBguB6bsiSwyThx1Czb4MZyAl%2BH%2FK4MujBk%2BLs%2FqpivvTVB1wLC0MYuOhnLGvm%2Fu8rb7vnYT2WuX2phrfRhjVNa%2BpquKkc8DRt%2BdE061P2AMLoPoqMNh0WJSAdwchwHTwrIMJ4oZljdlmaCFsfmgsnqnqFGIeIUO7%2Ff2jxD%2FRQTp9lvvrBrC19fhhEaCNLVDfQfQab0YYvk%2BTwpKlDOpMAWffisn1S&X-Amz-Signature=b5448fa02e801d10f6526ce3f9e83b50464ab99ac723858a4f53985190f86279&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVWCRGSP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxH5sfQFEEaeYeVaOKB6p2bLHqZjJJ8z8Tfb1qvMsSjAiEA7xPSSYAimw7jWblFyM%2BsSArB918wXt19R7XX8pn%2B7UYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJusthwRthZC4QX76CrcA5wrFb04ZAXwXDP2OjhCqBiyrYbhpcwOg72XRPnYOVBZbHdreVpS6uEp3GM%2ByMpWpifHm2hOdL9QLG%2FspPtg58hNBGPsjV%2BF7OT5xQJy9VkvZhMtKl%2FNwhRvYMaBGqDa9ef6MX7tpQIcQv5kEz01EpwjCgWB3xkVRkJx4syWfGsY4KpXeG2fVBIHEawWCZX%2Bc%2Ff9DmVjn8i4iF5MjalXRWcp2tozkvZxJ7GNspN7T5pkVC323WS%2FYbKdDaymHEkyzND9KRw1ad2gEeRWPT5wvFFrlW%2FAT2QdCCKcVG%2BU9Na26sApwv3z7QemYj8nhUr1qyjZ4o6Lg%2BEO3TSXey%2BhmXAHYAT40m9tuOIUpEmLfqQLsuAFEjKWhBA5v3XaZ0PjOF%2Fzt3Pbuhit9AFolPQ1FKzK9HHexPLNcTJYqaFzRyy1sgtbeFhU%2B6U%2BkodI9UO74KY1eFPrp2VDXxlhDmHZumekBfIYGoPNT11u%2Bu6CNZ%2BG6V5SRH621G01QW72xKRqbg0qyzvbLholE7JPxFX5m%2FEdK90v2m2%2F2BPi%2B2q%2BiG52HS%2BRSAYgPqvf22PUXW5syEzOJXrZorBEIhFkUxOU73jBi7xtSbFe0yV%2FGNNhHrVrV00%2F8dusC3UaclDVMPKBrMEGOqUBguB6bsiSwyThx1Czb4MZyAl%2BH%2FK4MujBk%2BLs%2FqpivvTVB1wLC0MYuOhnLGvm%2Fu8rb7vnYT2WuX2phrfRhjVNa%2BpquKkc8DRt%2BdE061P2AMLoPoqMNh0WJSAdwchwHTwrIMJ4oZljdlmaCFsfmgsnqnqFGIeIUO7%2Ff2jxD%2FRQTp9lvvrBrC19fhhEaCNLVDfQfQab0YYvk%2BTwpKlDOpMAWffisn1S&X-Amz-Signature=eb84b11caf3a7dab2dd68ac6b242559824dfcc29f4461ec2419984d22e63f0b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVWCRGSP%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxH5sfQFEEaeYeVaOKB6p2bLHqZjJJ8z8Tfb1qvMsSjAiEA7xPSSYAimw7jWblFyM%2BsSArB918wXt19R7XX8pn%2B7UYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJusthwRthZC4QX76CrcA5wrFb04ZAXwXDP2OjhCqBiyrYbhpcwOg72XRPnYOVBZbHdreVpS6uEp3GM%2ByMpWpifHm2hOdL9QLG%2FspPtg58hNBGPsjV%2BF7OT5xQJy9VkvZhMtKl%2FNwhRvYMaBGqDa9ef6MX7tpQIcQv5kEz01EpwjCgWB3xkVRkJx4syWfGsY4KpXeG2fVBIHEawWCZX%2Bc%2Ff9DmVjn8i4iF5MjalXRWcp2tozkvZxJ7GNspN7T5pkVC323WS%2FYbKdDaymHEkyzND9KRw1ad2gEeRWPT5wvFFrlW%2FAT2QdCCKcVG%2BU9Na26sApwv3z7QemYj8nhUr1qyjZ4o6Lg%2BEO3TSXey%2BhmXAHYAT40m9tuOIUpEmLfqQLsuAFEjKWhBA5v3XaZ0PjOF%2Fzt3Pbuhit9AFolPQ1FKzK9HHexPLNcTJYqaFzRyy1sgtbeFhU%2B6U%2BkodI9UO74KY1eFPrp2VDXxlhDmHZumekBfIYGoPNT11u%2Bu6CNZ%2BG6V5SRH621G01QW72xKRqbg0qyzvbLholE7JPxFX5m%2FEdK90v2m2%2F2BPi%2B2q%2BiG52HS%2BRSAYgPqvf22PUXW5syEzOJXrZorBEIhFkUxOU73jBi7xtSbFe0yV%2FGNNhHrVrV00%2F8dusC3UaclDVMPKBrMEGOqUBguB6bsiSwyThx1Czb4MZyAl%2BH%2FK4MujBk%2BLs%2FqpivvTVB1wLC0MYuOhnLGvm%2Fu8rb7vnYT2WuX2phrfRhjVNa%2BpquKkc8DRt%2BdE061P2AMLoPoqMNh0WJSAdwchwHTwrIMJ4oZljdlmaCFsfmgsnqnqFGIeIUO7%2Ff2jxD%2FRQTp9lvvrBrC19fhhEaCNLVDfQfQab0YYvk%2BTwpKlDOpMAWffisn1S&X-Amz-Signature=5f7e10db2be567ece75caf422a8e63489153b9cbacf08f261053485a3fb4046d&X-Amz-SignedHeaders=host&x-id=GetObject)
