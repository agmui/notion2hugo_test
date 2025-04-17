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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPIUP7A%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1pKFYpFik9NHCj80ZJj8HEl8xrVR29k5O%2Fkg2GO5JgAiA9Wok8xghwq%2FFwFmB%2B6vq%2FDcZSA7R2HGkj6jVemC%2FoLir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMxsvoPkxI%2FLSdVGGFKtwDhaiO9MmkURi2VVfYEDsLhhzzC01LDlBA99su5%2F7uRAbbrG%2FKV%2FdKDsPD%2B%2B6P6fuw2eoOkASGrptNMr0qpNJrFjXmBefUobr0M6YoYsWNj4qAgfkulGGBpo1bk8DpO3F6hbKuYm1khZm1tHYf27YQyTDEkYiRbOwdr5DQTBoj7K6Nyy%2Bv4bpIFtAWKfauOigfZ9tTMsmZFAWXmi77%2FFS%2BPjKJGCVeKsPmQmcDvwAkm1DhBqvkhFYF3raRacobNUQSXromGJJnpjUrF%2BP1wPehFDWKpoFtxz2PA4zQvfZIAvRd69BxwQGxwrlRlLZRj8ckR06qsTmWL0C%2Baci6XWI6%2BRUuo%2B5RJ5UZKdOm1jaMb%2BN4wQjhGGj7KNaV7YILIul1kdVaEQQ4U2hhakEJX1HYNrlQRi87PQVGO1MopVojQe5nlz8rnGuUZb0Z6rB3006xvO2voZQh1Ok1x7I7NRKo1w2oTJ%2BaV3rvGPp9KB84VnnMAmcFqBerpeWPoMdiJyANVqPxNHO6T5lTPwkd96WlvQVI4gQpLGcXINiC9p97MxUJku5cMh2LBUbhxGhK8dyOmA%2Bxrdn0AfW10Eej887XsV9WgST7pOkt5pvFB1KGle22kygsU28XGuKhYdUwwMiDwAY6pgFxKx4RTEGBYbd0MkLjOg0PJ9tkUJNwhjnOLFIDA9XwSuCc7BYCL5EUvZ%2F%2Bi42Kc857nwTXxqXFvIWxqkL8IVNdVz0K4yOZndqPqelE1nB2oWPmkRDSbx4xC9LZlVOouLSOjeRKQbBqUaSZdOpMVcYsMz9GdBnDPhbrInkEyMiFQXEXKyGbdq4OeW9GFmqHwE%2Fy0bX1k%2BwaU76i1g4MclWfR6TP08am&X-Amz-Signature=3465326593ecc15789116e00db365cc964e8d849c0f38efba3683e2f655aaabf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPIUP7A%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1pKFYpFik9NHCj80ZJj8HEl8xrVR29k5O%2Fkg2GO5JgAiA9Wok8xghwq%2FFwFmB%2B6vq%2FDcZSA7R2HGkj6jVemC%2FoLir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMxsvoPkxI%2FLSdVGGFKtwDhaiO9MmkURi2VVfYEDsLhhzzC01LDlBA99su5%2F7uRAbbrG%2FKV%2FdKDsPD%2B%2B6P6fuw2eoOkASGrptNMr0qpNJrFjXmBefUobr0M6YoYsWNj4qAgfkulGGBpo1bk8DpO3F6hbKuYm1khZm1tHYf27YQyTDEkYiRbOwdr5DQTBoj7K6Nyy%2Bv4bpIFtAWKfauOigfZ9tTMsmZFAWXmi77%2FFS%2BPjKJGCVeKsPmQmcDvwAkm1DhBqvkhFYF3raRacobNUQSXromGJJnpjUrF%2BP1wPehFDWKpoFtxz2PA4zQvfZIAvRd69BxwQGxwrlRlLZRj8ckR06qsTmWL0C%2Baci6XWI6%2BRUuo%2B5RJ5UZKdOm1jaMb%2BN4wQjhGGj7KNaV7YILIul1kdVaEQQ4U2hhakEJX1HYNrlQRi87PQVGO1MopVojQe5nlz8rnGuUZb0Z6rB3006xvO2voZQh1Ok1x7I7NRKo1w2oTJ%2BaV3rvGPp9KB84VnnMAmcFqBerpeWPoMdiJyANVqPxNHO6T5lTPwkd96WlvQVI4gQpLGcXINiC9p97MxUJku5cMh2LBUbhxGhK8dyOmA%2Bxrdn0AfW10Eej887XsV9WgST7pOkt5pvFB1KGle22kygsU28XGuKhYdUwwMiDwAY6pgFxKx4RTEGBYbd0MkLjOg0PJ9tkUJNwhjnOLFIDA9XwSuCc7BYCL5EUvZ%2F%2Bi42Kc857nwTXxqXFvIWxqkL8IVNdVz0K4yOZndqPqelE1nB2oWPmkRDSbx4xC9LZlVOouLSOjeRKQbBqUaSZdOpMVcYsMz9GdBnDPhbrInkEyMiFQXEXKyGbdq4OeW9GFmqHwE%2Fy0bX1k%2BwaU76i1g4MclWfR6TP08am&X-Amz-Signature=3a89a3bc2dc3ea2f7ce143875e6ba52a6996ee07f0e47e73b505ab2b2e2af848&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPIUP7A%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1pKFYpFik9NHCj80ZJj8HEl8xrVR29k5O%2Fkg2GO5JgAiA9Wok8xghwq%2FFwFmB%2B6vq%2FDcZSA7R2HGkj6jVemC%2FoLir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMxsvoPkxI%2FLSdVGGFKtwDhaiO9MmkURi2VVfYEDsLhhzzC01LDlBA99su5%2F7uRAbbrG%2FKV%2FdKDsPD%2B%2B6P6fuw2eoOkASGrptNMr0qpNJrFjXmBefUobr0M6YoYsWNj4qAgfkulGGBpo1bk8DpO3F6hbKuYm1khZm1tHYf27YQyTDEkYiRbOwdr5DQTBoj7K6Nyy%2Bv4bpIFtAWKfauOigfZ9tTMsmZFAWXmi77%2FFS%2BPjKJGCVeKsPmQmcDvwAkm1DhBqvkhFYF3raRacobNUQSXromGJJnpjUrF%2BP1wPehFDWKpoFtxz2PA4zQvfZIAvRd69BxwQGxwrlRlLZRj8ckR06qsTmWL0C%2Baci6XWI6%2BRUuo%2B5RJ5UZKdOm1jaMb%2BN4wQjhGGj7KNaV7YILIul1kdVaEQQ4U2hhakEJX1HYNrlQRi87PQVGO1MopVojQe5nlz8rnGuUZb0Z6rB3006xvO2voZQh1Ok1x7I7NRKo1w2oTJ%2BaV3rvGPp9KB84VnnMAmcFqBerpeWPoMdiJyANVqPxNHO6T5lTPwkd96WlvQVI4gQpLGcXINiC9p97MxUJku5cMh2LBUbhxGhK8dyOmA%2Bxrdn0AfW10Eej887XsV9WgST7pOkt5pvFB1KGle22kygsU28XGuKhYdUwwMiDwAY6pgFxKx4RTEGBYbd0MkLjOg0PJ9tkUJNwhjnOLFIDA9XwSuCc7BYCL5EUvZ%2F%2Bi42Kc857nwTXxqXFvIWxqkL8IVNdVz0K4yOZndqPqelE1nB2oWPmkRDSbx4xC9LZlVOouLSOjeRKQbBqUaSZdOpMVcYsMz9GdBnDPhbrInkEyMiFQXEXKyGbdq4OeW9GFmqHwE%2Fy0bX1k%2BwaU76i1g4MclWfR6TP08am&X-Amz-Signature=838006da8e64a4b02bc740c94393abf05360067534158eacb376b617134a7c62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPIUP7A%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1pKFYpFik9NHCj80ZJj8HEl8xrVR29k5O%2Fkg2GO5JgAiA9Wok8xghwq%2FFwFmB%2B6vq%2FDcZSA7R2HGkj6jVemC%2FoLir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMxsvoPkxI%2FLSdVGGFKtwDhaiO9MmkURi2VVfYEDsLhhzzC01LDlBA99su5%2F7uRAbbrG%2FKV%2FdKDsPD%2B%2B6P6fuw2eoOkASGrptNMr0qpNJrFjXmBefUobr0M6YoYsWNj4qAgfkulGGBpo1bk8DpO3F6hbKuYm1khZm1tHYf27YQyTDEkYiRbOwdr5DQTBoj7K6Nyy%2Bv4bpIFtAWKfauOigfZ9tTMsmZFAWXmi77%2FFS%2BPjKJGCVeKsPmQmcDvwAkm1DhBqvkhFYF3raRacobNUQSXromGJJnpjUrF%2BP1wPehFDWKpoFtxz2PA4zQvfZIAvRd69BxwQGxwrlRlLZRj8ckR06qsTmWL0C%2Baci6XWI6%2BRUuo%2B5RJ5UZKdOm1jaMb%2BN4wQjhGGj7KNaV7YILIul1kdVaEQQ4U2hhakEJX1HYNrlQRi87PQVGO1MopVojQe5nlz8rnGuUZb0Z6rB3006xvO2voZQh1Ok1x7I7NRKo1w2oTJ%2BaV3rvGPp9KB84VnnMAmcFqBerpeWPoMdiJyANVqPxNHO6T5lTPwkd96WlvQVI4gQpLGcXINiC9p97MxUJku5cMh2LBUbhxGhK8dyOmA%2Bxrdn0AfW10Eej887XsV9WgST7pOkt5pvFB1KGle22kygsU28XGuKhYdUwwMiDwAY6pgFxKx4RTEGBYbd0MkLjOg0PJ9tkUJNwhjnOLFIDA9XwSuCc7BYCL5EUvZ%2F%2Bi42Kc857nwTXxqXFvIWxqkL8IVNdVz0K4yOZndqPqelE1nB2oWPmkRDSbx4xC9LZlVOouLSOjeRKQbBqUaSZdOpMVcYsMz9GdBnDPhbrInkEyMiFQXEXKyGbdq4OeW9GFmqHwE%2Fy0bX1k%2BwaU76i1g4MclWfR6TP08am&X-Amz-Signature=add624c39270557077997c5d7ba3d2e2f4cfa5110841ed80c7174ceb09a4df67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPIUP7A%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1pKFYpFik9NHCj80ZJj8HEl8xrVR29k5O%2Fkg2GO5JgAiA9Wok8xghwq%2FFwFmB%2B6vq%2FDcZSA7R2HGkj6jVemC%2FoLir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMxsvoPkxI%2FLSdVGGFKtwDhaiO9MmkURi2VVfYEDsLhhzzC01LDlBA99su5%2F7uRAbbrG%2FKV%2FdKDsPD%2B%2B6P6fuw2eoOkASGrptNMr0qpNJrFjXmBefUobr0M6YoYsWNj4qAgfkulGGBpo1bk8DpO3F6hbKuYm1khZm1tHYf27YQyTDEkYiRbOwdr5DQTBoj7K6Nyy%2Bv4bpIFtAWKfauOigfZ9tTMsmZFAWXmi77%2FFS%2BPjKJGCVeKsPmQmcDvwAkm1DhBqvkhFYF3raRacobNUQSXromGJJnpjUrF%2BP1wPehFDWKpoFtxz2PA4zQvfZIAvRd69BxwQGxwrlRlLZRj8ckR06qsTmWL0C%2Baci6XWI6%2BRUuo%2B5RJ5UZKdOm1jaMb%2BN4wQjhGGj7KNaV7YILIul1kdVaEQQ4U2hhakEJX1HYNrlQRi87PQVGO1MopVojQe5nlz8rnGuUZb0Z6rB3006xvO2voZQh1Ok1x7I7NRKo1w2oTJ%2BaV3rvGPp9KB84VnnMAmcFqBerpeWPoMdiJyANVqPxNHO6T5lTPwkd96WlvQVI4gQpLGcXINiC9p97MxUJku5cMh2LBUbhxGhK8dyOmA%2Bxrdn0AfW10Eej887XsV9WgST7pOkt5pvFB1KGle22kygsU28XGuKhYdUwwMiDwAY6pgFxKx4RTEGBYbd0MkLjOg0PJ9tkUJNwhjnOLFIDA9XwSuCc7BYCL5EUvZ%2F%2Bi42Kc857nwTXxqXFvIWxqkL8IVNdVz0K4yOZndqPqelE1nB2oWPmkRDSbx4xC9LZlVOouLSOjeRKQbBqUaSZdOpMVcYsMz9GdBnDPhbrInkEyMiFQXEXKyGbdq4OeW9GFmqHwE%2Fy0bX1k%2BwaU76i1g4MclWfR6TP08am&X-Amz-Signature=f21aede57ce349c95996683565dc3a4cd7ae824e436701f16704394249781df5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPIUP7A%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1pKFYpFik9NHCj80ZJj8HEl8xrVR29k5O%2Fkg2GO5JgAiA9Wok8xghwq%2FFwFmB%2B6vq%2FDcZSA7R2HGkj6jVemC%2FoLir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMxsvoPkxI%2FLSdVGGFKtwDhaiO9MmkURi2VVfYEDsLhhzzC01LDlBA99su5%2F7uRAbbrG%2FKV%2FdKDsPD%2B%2B6P6fuw2eoOkASGrptNMr0qpNJrFjXmBefUobr0M6YoYsWNj4qAgfkulGGBpo1bk8DpO3F6hbKuYm1khZm1tHYf27YQyTDEkYiRbOwdr5DQTBoj7K6Nyy%2Bv4bpIFtAWKfauOigfZ9tTMsmZFAWXmi77%2FFS%2BPjKJGCVeKsPmQmcDvwAkm1DhBqvkhFYF3raRacobNUQSXromGJJnpjUrF%2BP1wPehFDWKpoFtxz2PA4zQvfZIAvRd69BxwQGxwrlRlLZRj8ckR06qsTmWL0C%2Baci6XWI6%2BRUuo%2B5RJ5UZKdOm1jaMb%2BN4wQjhGGj7KNaV7YILIul1kdVaEQQ4U2hhakEJX1HYNrlQRi87PQVGO1MopVojQe5nlz8rnGuUZb0Z6rB3006xvO2voZQh1Ok1x7I7NRKo1w2oTJ%2BaV3rvGPp9KB84VnnMAmcFqBerpeWPoMdiJyANVqPxNHO6T5lTPwkd96WlvQVI4gQpLGcXINiC9p97MxUJku5cMh2LBUbhxGhK8dyOmA%2Bxrdn0AfW10Eej887XsV9WgST7pOkt5pvFB1KGle22kygsU28XGuKhYdUwwMiDwAY6pgFxKx4RTEGBYbd0MkLjOg0PJ9tkUJNwhjnOLFIDA9XwSuCc7BYCL5EUvZ%2F%2Bi42Kc857nwTXxqXFvIWxqkL8IVNdVz0K4yOZndqPqelE1nB2oWPmkRDSbx4xC9LZlVOouLSOjeRKQbBqUaSZdOpMVcYsMz9GdBnDPhbrInkEyMiFQXEXKyGbdq4OeW9GFmqHwE%2Fy0bX1k%2BwaU76i1g4MclWfR6TP08am&X-Amz-Signature=88969c5c7ce69672cac489138bb75e28d8bbd47c91d16990f1bd92f662d7292d&X-Amz-SignedHeaders=host&x-id=GetObject)
