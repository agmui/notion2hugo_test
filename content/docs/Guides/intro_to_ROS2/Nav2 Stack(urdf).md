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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQT7ENYE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwEkip8EvAHLZVGbLYIpCMJasd%2F1vo8%2FN7O5OFrJqVoQIgELygxjm7jRtebqg5SvDE77aP1CIen0x5ncew%2BlHb%2B%2FUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDACIRtyBXxO5QOPvxCrcAyMPuTAqudA2sR%2BKvBDjMT9PZjwIqE7UDK550Rgiz6AYxGrR5Y24nIkbAQjjfUoveu3wUVX7cgnmhQM5AUImTeeH465iQaiwZi%2F9CYaAyo4Bo%2FREY8Evblrh%2FozaI8JpzuSXMZvc2jzW3rnIpEs9NvdgLwDhLE8BwgK%2FGeR0jB8gkMmRrt%2B%2FfRJNAo%2F%2F5hcGlFVC2V7WQ9k7bVbvVsmuqHnI6fZLB97FYkPnXZNk9MUoV3GpE%2Ffn1s4lEgVg3pL5OIsHEc67vuuPjomJ1rcoET6NFMoapyAH85J2Rjk8ayweVroqqhAyI0WxD%2Buyp43KUynEMNJwhlDGqRxhy%2F0AZ1xplN3FFDGK8UEEmnlsutpELLYuClNb6f5g2hJdG5lgfx%2BP4r4Bo5GlB4BJ5mCletaFkdaHs9kh8js3aqCIOCC1yYyBLmsrKqWvbzLg5VjFt6V1R6S5sz5%2BK%2BQAZkrS90kKfcfOZAZzh4fUTZEeb3zA0%2BC6f1eOh2Zd%2B7Do4NCjKKx4ndNdgLsC4Ef84kBIctTB1Szafjwu9ZrXtFs9ZZoiVCIBs7PFKDvKt6XS7Ej2WUPbFe%2F9DK0NZP86%2FSkffmZBFyuD7I0e6kWWKjJpMFG%2BsoitvlIGBuj8Jl2BMN%2FmqMEGOqUBztysjpWY9Lo%2FEawHJu%2FziQaD1%2FSAVyXKPmBT67HP2rbfH1PyofIqpUayd54p1QY8GxipkLpMEWmWpNkTDgiNfGpp%2FEKbwJYU3n5oK1dxt8I4SN16yH9UMPViYS9R4eUgKLEUY3Skg2tsPxoduXIWjW%2FQVGOHYksc2BYeeGG5%2BmeTf58Hf3Ie9sIa3Cc78UN8UjEcizSTDhZ1lK8aD3hgBCXCe7ss&X-Amz-Signature=1ed5d4ed74144ea31f8c73c72d86292492bfad633e21529fc2e8e112cdde40e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQT7ENYE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwEkip8EvAHLZVGbLYIpCMJasd%2F1vo8%2FN7O5OFrJqVoQIgELygxjm7jRtebqg5SvDE77aP1CIen0x5ncew%2BlHb%2B%2FUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDACIRtyBXxO5QOPvxCrcAyMPuTAqudA2sR%2BKvBDjMT9PZjwIqE7UDK550Rgiz6AYxGrR5Y24nIkbAQjjfUoveu3wUVX7cgnmhQM5AUImTeeH465iQaiwZi%2F9CYaAyo4Bo%2FREY8Evblrh%2FozaI8JpzuSXMZvc2jzW3rnIpEs9NvdgLwDhLE8BwgK%2FGeR0jB8gkMmRrt%2B%2FfRJNAo%2F%2F5hcGlFVC2V7WQ9k7bVbvVsmuqHnI6fZLB97FYkPnXZNk9MUoV3GpE%2Ffn1s4lEgVg3pL5OIsHEc67vuuPjomJ1rcoET6NFMoapyAH85J2Rjk8ayweVroqqhAyI0WxD%2Buyp43KUynEMNJwhlDGqRxhy%2F0AZ1xplN3FFDGK8UEEmnlsutpELLYuClNb6f5g2hJdG5lgfx%2BP4r4Bo5GlB4BJ5mCletaFkdaHs9kh8js3aqCIOCC1yYyBLmsrKqWvbzLg5VjFt6V1R6S5sz5%2BK%2BQAZkrS90kKfcfOZAZzh4fUTZEeb3zA0%2BC6f1eOh2Zd%2B7Do4NCjKKx4ndNdgLsC4Ef84kBIctTB1Szafjwu9ZrXtFs9ZZoiVCIBs7PFKDvKt6XS7Ej2WUPbFe%2F9DK0NZP86%2FSkffmZBFyuD7I0e6kWWKjJpMFG%2BsoitvlIGBuj8Jl2BMN%2FmqMEGOqUBztysjpWY9Lo%2FEawHJu%2FziQaD1%2FSAVyXKPmBT67HP2rbfH1PyofIqpUayd54p1QY8GxipkLpMEWmWpNkTDgiNfGpp%2FEKbwJYU3n5oK1dxt8I4SN16yH9UMPViYS9R4eUgKLEUY3Skg2tsPxoduXIWjW%2FQVGOHYksc2BYeeGG5%2BmeTf58Hf3Ie9sIa3Cc78UN8UjEcizSTDhZ1lK8aD3hgBCXCe7ss&X-Amz-Signature=55871a57068f73a9f883b14583a81443835d8d102be4d8968b6b779fd856d5a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQT7ENYE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwEkip8EvAHLZVGbLYIpCMJasd%2F1vo8%2FN7O5OFrJqVoQIgELygxjm7jRtebqg5SvDE77aP1CIen0x5ncew%2BlHb%2B%2FUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDACIRtyBXxO5QOPvxCrcAyMPuTAqudA2sR%2BKvBDjMT9PZjwIqE7UDK550Rgiz6AYxGrR5Y24nIkbAQjjfUoveu3wUVX7cgnmhQM5AUImTeeH465iQaiwZi%2F9CYaAyo4Bo%2FREY8Evblrh%2FozaI8JpzuSXMZvc2jzW3rnIpEs9NvdgLwDhLE8BwgK%2FGeR0jB8gkMmRrt%2B%2FfRJNAo%2F%2F5hcGlFVC2V7WQ9k7bVbvVsmuqHnI6fZLB97FYkPnXZNk9MUoV3GpE%2Ffn1s4lEgVg3pL5OIsHEc67vuuPjomJ1rcoET6NFMoapyAH85J2Rjk8ayweVroqqhAyI0WxD%2Buyp43KUynEMNJwhlDGqRxhy%2F0AZ1xplN3FFDGK8UEEmnlsutpELLYuClNb6f5g2hJdG5lgfx%2BP4r4Bo5GlB4BJ5mCletaFkdaHs9kh8js3aqCIOCC1yYyBLmsrKqWvbzLg5VjFt6V1R6S5sz5%2BK%2BQAZkrS90kKfcfOZAZzh4fUTZEeb3zA0%2BC6f1eOh2Zd%2B7Do4NCjKKx4ndNdgLsC4Ef84kBIctTB1Szafjwu9ZrXtFs9ZZoiVCIBs7PFKDvKt6XS7Ej2WUPbFe%2F9DK0NZP86%2FSkffmZBFyuD7I0e6kWWKjJpMFG%2BsoitvlIGBuj8Jl2BMN%2FmqMEGOqUBztysjpWY9Lo%2FEawHJu%2FziQaD1%2FSAVyXKPmBT67HP2rbfH1PyofIqpUayd54p1QY8GxipkLpMEWmWpNkTDgiNfGpp%2FEKbwJYU3n5oK1dxt8I4SN16yH9UMPViYS9R4eUgKLEUY3Skg2tsPxoduXIWjW%2FQVGOHYksc2BYeeGG5%2BmeTf58Hf3Ie9sIa3Cc78UN8UjEcizSTDhZ1lK8aD3hgBCXCe7ss&X-Amz-Signature=473d776b4f3e5ff58e11dba403c7a34fcc11dc0da30499b6c211643ac2387d6e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQT7ENYE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwEkip8EvAHLZVGbLYIpCMJasd%2F1vo8%2FN7O5OFrJqVoQIgELygxjm7jRtebqg5SvDE77aP1CIen0x5ncew%2BlHb%2B%2FUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDACIRtyBXxO5QOPvxCrcAyMPuTAqudA2sR%2BKvBDjMT9PZjwIqE7UDK550Rgiz6AYxGrR5Y24nIkbAQjjfUoveu3wUVX7cgnmhQM5AUImTeeH465iQaiwZi%2F9CYaAyo4Bo%2FREY8Evblrh%2FozaI8JpzuSXMZvc2jzW3rnIpEs9NvdgLwDhLE8BwgK%2FGeR0jB8gkMmRrt%2B%2FfRJNAo%2F%2F5hcGlFVC2V7WQ9k7bVbvVsmuqHnI6fZLB97FYkPnXZNk9MUoV3GpE%2Ffn1s4lEgVg3pL5OIsHEc67vuuPjomJ1rcoET6NFMoapyAH85J2Rjk8ayweVroqqhAyI0WxD%2Buyp43KUynEMNJwhlDGqRxhy%2F0AZ1xplN3FFDGK8UEEmnlsutpELLYuClNb6f5g2hJdG5lgfx%2BP4r4Bo5GlB4BJ5mCletaFkdaHs9kh8js3aqCIOCC1yYyBLmsrKqWvbzLg5VjFt6V1R6S5sz5%2BK%2BQAZkrS90kKfcfOZAZzh4fUTZEeb3zA0%2BC6f1eOh2Zd%2B7Do4NCjKKx4ndNdgLsC4Ef84kBIctTB1Szafjwu9ZrXtFs9ZZoiVCIBs7PFKDvKt6XS7Ej2WUPbFe%2F9DK0NZP86%2FSkffmZBFyuD7I0e6kWWKjJpMFG%2BsoitvlIGBuj8Jl2BMN%2FmqMEGOqUBztysjpWY9Lo%2FEawHJu%2FziQaD1%2FSAVyXKPmBT67HP2rbfH1PyofIqpUayd54p1QY8GxipkLpMEWmWpNkTDgiNfGpp%2FEKbwJYU3n5oK1dxt8I4SN16yH9UMPViYS9R4eUgKLEUY3Skg2tsPxoduXIWjW%2FQVGOHYksc2BYeeGG5%2BmeTf58Hf3Ie9sIa3Cc78UN8UjEcizSTDhZ1lK8aD3hgBCXCe7ss&X-Amz-Signature=6a9398c43ab5db96a0de6d175e742068a7fb45595827722565987aec95163296&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQT7ENYE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwEkip8EvAHLZVGbLYIpCMJasd%2F1vo8%2FN7O5OFrJqVoQIgELygxjm7jRtebqg5SvDE77aP1CIen0x5ncew%2BlHb%2B%2FUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDACIRtyBXxO5QOPvxCrcAyMPuTAqudA2sR%2BKvBDjMT9PZjwIqE7UDK550Rgiz6AYxGrR5Y24nIkbAQjjfUoveu3wUVX7cgnmhQM5AUImTeeH465iQaiwZi%2F9CYaAyo4Bo%2FREY8Evblrh%2FozaI8JpzuSXMZvc2jzW3rnIpEs9NvdgLwDhLE8BwgK%2FGeR0jB8gkMmRrt%2B%2FfRJNAo%2F%2F5hcGlFVC2V7WQ9k7bVbvVsmuqHnI6fZLB97FYkPnXZNk9MUoV3GpE%2Ffn1s4lEgVg3pL5OIsHEc67vuuPjomJ1rcoET6NFMoapyAH85J2Rjk8ayweVroqqhAyI0WxD%2Buyp43KUynEMNJwhlDGqRxhy%2F0AZ1xplN3FFDGK8UEEmnlsutpELLYuClNb6f5g2hJdG5lgfx%2BP4r4Bo5GlB4BJ5mCletaFkdaHs9kh8js3aqCIOCC1yYyBLmsrKqWvbzLg5VjFt6V1R6S5sz5%2BK%2BQAZkrS90kKfcfOZAZzh4fUTZEeb3zA0%2BC6f1eOh2Zd%2B7Do4NCjKKx4ndNdgLsC4Ef84kBIctTB1Szafjwu9ZrXtFs9ZZoiVCIBs7PFKDvKt6XS7Ej2WUPbFe%2F9DK0NZP86%2FSkffmZBFyuD7I0e6kWWKjJpMFG%2BsoitvlIGBuj8Jl2BMN%2FmqMEGOqUBztysjpWY9Lo%2FEawHJu%2FziQaD1%2FSAVyXKPmBT67HP2rbfH1PyofIqpUayd54p1QY8GxipkLpMEWmWpNkTDgiNfGpp%2FEKbwJYU3n5oK1dxt8I4SN16yH9UMPViYS9R4eUgKLEUY3Skg2tsPxoduXIWjW%2FQVGOHYksc2BYeeGG5%2BmeTf58Hf3Ie9sIa3Cc78UN8UjEcizSTDhZ1lK8aD3hgBCXCe7ss&X-Amz-Signature=cef41331d61aeecbe2b5c305b8b0aec7de3a3a8f63033c50e2a0a16c7c172fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQT7ENYE%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwEkip8EvAHLZVGbLYIpCMJasd%2F1vo8%2FN7O5OFrJqVoQIgELygxjm7jRtebqg5SvDE77aP1CIen0x5ncew%2BlHb%2B%2FUq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDACIRtyBXxO5QOPvxCrcAyMPuTAqudA2sR%2BKvBDjMT9PZjwIqE7UDK550Rgiz6AYxGrR5Y24nIkbAQjjfUoveu3wUVX7cgnmhQM5AUImTeeH465iQaiwZi%2F9CYaAyo4Bo%2FREY8Evblrh%2FozaI8JpzuSXMZvc2jzW3rnIpEs9NvdgLwDhLE8BwgK%2FGeR0jB8gkMmRrt%2B%2FfRJNAo%2F%2F5hcGlFVC2V7WQ9k7bVbvVsmuqHnI6fZLB97FYkPnXZNk9MUoV3GpE%2Ffn1s4lEgVg3pL5OIsHEc67vuuPjomJ1rcoET6NFMoapyAH85J2Rjk8ayweVroqqhAyI0WxD%2Buyp43KUynEMNJwhlDGqRxhy%2F0AZ1xplN3FFDGK8UEEmnlsutpELLYuClNb6f5g2hJdG5lgfx%2BP4r4Bo5GlB4BJ5mCletaFkdaHs9kh8js3aqCIOCC1yYyBLmsrKqWvbzLg5VjFt6V1R6S5sz5%2BK%2BQAZkrS90kKfcfOZAZzh4fUTZEeb3zA0%2BC6f1eOh2Zd%2B7Do4NCjKKx4ndNdgLsC4Ef84kBIctTB1Szafjwu9ZrXtFs9ZZoiVCIBs7PFKDvKt6XS7Ej2WUPbFe%2F9DK0NZP86%2FSkffmZBFyuD7I0e6kWWKjJpMFG%2BsoitvlIGBuj8Jl2BMN%2FmqMEGOqUBztysjpWY9Lo%2FEawHJu%2FziQaD1%2FSAVyXKPmBT67HP2rbfH1PyofIqpUayd54p1QY8GxipkLpMEWmWpNkTDgiNfGpp%2FEKbwJYU3n5oK1dxt8I4SN16yH9UMPViYS9R4eUgKLEUY3Skg2tsPxoduXIWjW%2FQVGOHYksc2BYeeGG5%2BmeTf58Hf3Ie9sIa3Cc78UN8UjEcizSTDhZ1lK8aD3hgBCXCe7ss&X-Amz-Signature=6aa96ed21a79bd978dda59d28d44c3d2251ba61d0f3c151e7dc9120261731a85&X-Amz-SignedHeaders=host&x-id=GetObject)
