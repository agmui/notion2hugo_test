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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FCDWOVU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD0N%2FLY6u3ScqoNbjUeWxeYbW94nkLlPsD5ipy9Ublm5QIhAOt36BaWUB8cXU97f%2FQ5V7LkoQTJrV%2B6i281VrDAYjhFKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFIZ%2BrTSIstmYHqHgq3APh7yGl4jfPuCod2HfAgJ5yrjJQ7No59i0JXGVajeoHlOVLcdH3K0yrLsFRh05t%2FYSBvZeniiESDY7LhZwhx94fJ9MC5LHhkTIu3%2FibpENoQbCRN%2FYhGb9di0cK806AHv%2Fs1%2FDy%2FdEW3EHWfUmAemWrh1sEMvn9d4vx9HMDL%2BufiEbhAGcgwcIft0lH%2F6rzXJsj8xpuqMLUEzuEOqBqeOBRbBpfW%2FKIUJias4w6TG%2B0OVvWIyX7dfx5spF6l60MPZDOS14UfCkrXip9DaUxCPbC9i1bf97QMQrODSHtINCDdTK2OQuBqppy3BYqtCbGBGXuT18DVYrFWTFDoqeDfLhzpReSU%2B9ETQwAN%2Bu%2BKmZrWUCAhufd%2BZO55zQFNTiHO4ZRcdIb73Sf43IoRuNzNIx8mVeKVgr3KWw4ymQ%2FY3ROd%2FINyTnDQhizFzPNen0jh3yWopr9HHENzZIdLd5Vt46BteWp1iFEiVNKXqDZJHK4RqOmykBPz%2FJaEB2Uix14Qf90QV3PChH5XEauUCzg4FNeGgDhcyj1UddmUrLBoWvfD4jFJuxQFjlcZgHtJLiCUJzuRMphCJDqzctWi7rmL85G3FVrWW6FD6N3Vigsww2%2BcXb%2FDlHVLvt6OP9M%2BzCdiZjABjqkAT%2FxAF%2BN5oQ1fwFgpmTzx6Qrn1R2enHmDpNQ0k%2Faus%2BkD6S9MCTtn0cQcR0F7sbEcjhAoQwU5L64HhX%2FV%2BtVCBxOJYNl36rrIc0LQ%2F59S5TVVKbkGRoAJ4VZKcN3dvRf8CmTxKLUEdJhGYHisYjuzCGOqLyMPSFeJ3rZzXkbCo5lC1q4KvhR1NVKbql1UlxNVOu%2B6rs%2Fo0GLxcQ3fbI2uxRHh%2Bs4&X-Amz-Signature=f855f2a14461db905306b89b0cae6340aeee3606485ca93f9c37065ef769b20a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FCDWOVU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD0N%2FLY6u3ScqoNbjUeWxeYbW94nkLlPsD5ipy9Ublm5QIhAOt36BaWUB8cXU97f%2FQ5V7LkoQTJrV%2B6i281VrDAYjhFKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFIZ%2BrTSIstmYHqHgq3APh7yGl4jfPuCod2HfAgJ5yrjJQ7No59i0JXGVajeoHlOVLcdH3K0yrLsFRh05t%2FYSBvZeniiESDY7LhZwhx94fJ9MC5LHhkTIu3%2FibpENoQbCRN%2FYhGb9di0cK806AHv%2Fs1%2FDy%2FdEW3EHWfUmAemWrh1sEMvn9d4vx9HMDL%2BufiEbhAGcgwcIft0lH%2F6rzXJsj8xpuqMLUEzuEOqBqeOBRbBpfW%2FKIUJias4w6TG%2B0OVvWIyX7dfx5spF6l60MPZDOS14UfCkrXip9DaUxCPbC9i1bf97QMQrODSHtINCDdTK2OQuBqppy3BYqtCbGBGXuT18DVYrFWTFDoqeDfLhzpReSU%2B9ETQwAN%2Bu%2BKmZrWUCAhufd%2BZO55zQFNTiHO4ZRcdIb73Sf43IoRuNzNIx8mVeKVgr3KWw4ymQ%2FY3ROd%2FINyTnDQhizFzPNen0jh3yWopr9HHENzZIdLd5Vt46BteWp1iFEiVNKXqDZJHK4RqOmykBPz%2FJaEB2Uix14Qf90QV3PChH5XEauUCzg4FNeGgDhcyj1UddmUrLBoWvfD4jFJuxQFjlcZgHtJLiCUJzuRMphCJDqzctWi7rmL85G3FVrWW6FD6N3Vigsww2%2BcXb%2FDlHVLvt6OP9M%2BzCdiZjABjqkAT%2FxAF%2BN5oQ1fwFgpmTzx6Qrn1R2enHmDpNQ0k%2Faus%2BkD6S9MCTtn0cQcR0F7sbEcjhAoQwU5L64HhX%2FV%2BtVCBxOJYNl36rrIc0LQ%2F59S5TVVKbkGRoAJ4VZKcN3dvRf8CmTxKLUEdJhGYHisYjuzCGOqLyMPSFeJ3rZzXkbCo5lC1q4KvhR1NVKbql1UlxNVOu%2B6rs%2Fo0GLxcQ3fbI2uxRHh%2Bs4&X-Amz-Signature=313f5f6696bef8f9642622b64faa6e9a0ca326875e3e2148d3bac163b3cdf9df&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FCDWOVU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD0N%2FLY6u3ScqoNbjUeWxeYbW94nkLlPsD5ipy9Ublm5QIhAOt36BaWUB8cXU97f%2FQ5V7LkoQTJrV%2B6i281VrDAYjhFKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFIZ%2BrTSIstmYHqHgq3APh7yGl4jfPuCod2HfAgJ5yrjJQ7No59i0JXGVajeoHlOVLcdH3K0yrLsFRh05t%2FYSBvZeniiESDY7LhZwhx94fJ9MC5LHhkTIu3%2FibpENoQbCRN%2FYhGb9di0cK806AHv%2Fs1%2FDy%2FdEW3EHWfUmAemWrh1sEMvn9d4vx9HMDL%2BufiEbhAGcgwcIft0lH%2F6rzXJsj8xpuqMLUEzuEOqBqeOBRbBpfW%2FKIUJias4w6TG%2B0OVvWIyX7dfx5spF6l60MPZDOS14UfCkrXip9DaUxCPbC9i1bf97QMQrODSHtINCDdTK2OQuBqppy3BYqtCbGBGXuT18DVYrFWTFDoqeDfLhzpReSU%2B9ETQwAN%2Bu%2BKmZrWUCAhufd%2BZO55zQFNTiHO4ZRcdIb73Sf43IoRuNzNIx8mVeKVgr3KWw4ymQ%2FY3ROd%2FINyTnDQhizFzPNen0jh3yWopr9HHENzZIdLd5Vt46BteWp1iFEiVNKXqDZJHK4RqOmykBPz%2FJaEB2Uix14Qf90QV3PChH5XEauUCzg4FNeGgDhcyj1UddmUrLBoWvfD4jFJuxQFjlcZgHtJLiCUJzuRMphCJDqzctWi7rmL85G3FVrWW6FD6N3Vigsww2%2BcXb%2FDlHVLvt6OP9M%2BzCdiZjABjqkAT%2FxAF%2BN5oQ1fwFgpmTzx6Qrn1R2enHmDpNQ0k%2Faus%2BkD6S9MCTtn0cQcR0F7sbEcjhAoQwU5L64HhX%2FV%2BtVCBxOJYNl36rrIc0LQ%2F59S5TVVKbkGRoAJ4VZKcN3dvRf8CmTxKLUEdJhGYHisYjuzCGOqLyMPSFeJ3rZzXkbCo5lC1q4KvhR1NVKbql1UlxNVOu%2B6rs%2Fo0GLxcQ3fbI2uxRHh%2Bs4&X-Amz-Signature=772081b9082c9b06593ae3cdc4023371ef9c047473f1ca6b68499d5ea1d38f80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FCDWOVU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD0N%2FLY6u3ScqoNbjUeWxeYbW94nkLlPsD5ipy9Ublm5QIhAOt36BaWUB8cXU97f%2FQ5V7LkoQTJrV%2B6i281VrDAYjhFKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFIZ%2BrTSIstmYHqHgq3APh7yGl4jfPuCod2HfAgJ5yrjJQ7No59i0JXGVajeoHlOVLcdH3K0yrLsFRh05t%2FYSBvZeniiESDY7LhZwhx94fJ9MC5LHhkTIu3%2FibpENoQbCRN%2FYhGb9di0cK806AHv%2Fs1%2FDy%2FdEW3EHWfUmAemWrh1sEMvn9d4vx9HMDL%2BufiEbhAGcgwcIft0lH%2F6rzXJsj8xpuqMLUEzuEOqBqeOBRbBpfW%2FKIUJias4w6TG%2B0OVvWIyX7dfx5spF6l60MPZDOS14UfCkrXip9DaUxCPbC9i1bf97QMQrODSHtINCDdTK2OQuBqppy3BYqtCbGBGXuT18DVYrFWTFDoqeDfLhzpReSU%2B9ETQwAN%2Bu%2BKmZrWUCAhufd%2BZO55zQFNTiHO4ZRcdIb73Sf43IoRuNzNIx8mVeKVgr3KWw4ymQ%2FY3ROd%2FINyTnDQhizFzPNen0jh3yWopr9HHENzZIdLd5Vt46BteWp1iFEiVNKXqDZJHK4RqOmykBPz%2FJaEB2Uix14Qf90QV3PChH5XEauUCzg4FNeGgDhcyj1UddmUrLBoWvfD4jFJuxQFjlcZgHtJLiCUJzuRMphCJDqzctWi7rmL85G3FVrWW6FD6N3Vigsww2%2BcXb%2FDlHVLvt6OP9M%2BzCdiZjABjqkAT%2FxAF%2BN5oQ1fwFgpmTzx6Qrn1R2enHmDpNQ0k%2Faus%2BkD6S9MCTtn0cQcR0F7sbEcjhAoQwU5L64HhX%2FV%2BtVCBxOJYNl36rrIc0LQ%2F59S5TVVKbkGRoAJ4VZKcN3dvRf8CmTxKLUEdJhGYHisYjuzCGOqLyMPSFeJ3rZzXkbCo5lC1q4KvhR1NVKbql1UlxNVOu%2B6rs%2Fo0GLxcQ3fbI2uxRHh%2Bs4&X-Amz-Signature=38a0be73e889ee9e84822b5c72e1bef1bb6660a009bce8e981d12765da9e39b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FCDWOVU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD0N%2FLY6u3ScqoNbjUeWxeYbW94nkLlPsD5ipy9Ublm5QIhAOt36BaWUB8cXU97f%2FQ5V7LkoQTJrV%2B6i281VrDAYjhFKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFIZ%2BrTSIstmYHqHgq3APh7yGl4jfPuCod2HfAgJ5yrjJQ7No59i0JXGVajeoHlOVLcdH3K0yrLsFRh05t%2FYSBvZeniiESDY7LhZwhx94fJ9MC5LHhkTIu3%2FibpENoQbCRN%2FYhGb9di0cK806AHv%2Fs1%2FDy%2FdEW3EHWfUmAemWrh1sEMvn9d4vx9HMDL%2BufiEbhAGcgwcIft0lH%2F6rzXJsj8xpuqMLUEzuEOqBqeOBRbBpfW%2FKIUJias4w6TG%2B0OVvWIyX7dfx5spF6l60MPZDOS14UfCkrXip9DaUxCPbC9i1bf97QMQrODSHtINCDdTK2OQuBqppy3BYqtCbGBGXuT18DVYrFWTFDoqeDfLhzpReSU%2B9ETQwAN%2Bu%2BKmZrWUCAhufd%2BZO55zQFNTiHO4ZRcdIb73Sf43IoRuNzNIx8mVeKVgr3KWw4ymQ%2FY3ROd%2FINyTnDQhizFzPNen0jh3yWopr9HHENzZIdLd5Vt46BteWp1iFEiVNKXqDZJHK4RqOmykBPz%2FJaEB2Uix14Qf90QV3PChH5XEauUCzg4FNeGgDhcyj1UddmUrLBoWvfD4jFJuxQFjlcZgHtJLiCUJzuRMphCJDqzctWi7rmL85G3FVrWW6FD6N3Vigsww2%2BcXb%2FDlHVLvt6OP9M%2BzCdiZjABjqkAT%2FxAF%2BN5oQ1fwFgpmTzx6Qrn1R2enHmDpNQ0k%2Faus%2BkD6S9MCTtn0cQcR0F7sbEcjhAoQwU5L64HhX%2FV%2BtVCBxOJYNl36rrIc0LQ%2F59S5TVVKbkGRoAJ4VZKcN3dvRf8CmTxKLUEdJhGYHisYjuzCGOqLyMPSFeJ3rZzXkbCo5lC1q4KvhR1NVKbql1UlxNVOu%2B6rs%2Fo0GLxcQ3fbI2uxRHh%2Bs4&X-Amz-Signature=ef95cbca0b122c21db2d12befe3124d08ab6e8734e4ae98ef0cf11d3af4a26aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FCDWOVU%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQD0N%2FLY6u3ScqoNbjUeWxeYbW94nkLlPsD5ipy9Ublm5QIhAOt36BaWUB8cXU97f%2FQ5V7LkoQTJrV%2B6i281VrDAYjhFKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFIZ%2BrTSIstmYHqHgq3APh7yGl4jfPuCod2HfAgJ5yrjJQ7No59i0JXGVajeoHlOVLcdH3K0yrLsFRh05t%2FYSBvZeniiESDY7LhZwhx94fJ9MC5LHhkTIu3%2FibpENoQbCRN%2FYhGb9di0cK806AHv%2Fs1%2FDy%2FdEW3EHWfUmAemWrh1sEMvn9d4vx9HMDL%2BufiEbhAGcgwcIft0lH%2F6rzXJsj8xpuqMLUEzuEOqBqeOBRbBpfW%2FKIUJias4w6TG%2B0OVvWIyX7dfx5spF6l60MPZDOS14UfCkrXip9DaUxCPbC9i1bf97QMQrODSHtINCDdTK2OQuBqppy3BYqtCbGBGXuT18DVYrFWTFDoqeDfLhzpReSU%2B9ETQwAN%2Bu%2BKmZrWUCAhufd%2BZO55zQFNTiHO4ZRcdIb73Sf43IoRuNzNIx8mVeKVgr3KWw4ymQ%2FY3ROd%2FINyTnDQhizFzPNen0jh3yWopr9HHENzZIdLd5Vt46BteWp1iFEiVNKXqDZJHK4RqOmykBPz%2FJaEB2Uix14Qf90QV3PChH5XEauUCzg4FNeGgDhcyj1UddmUrLBoWvfD4jFJuxQFjlcZgHtJLiCUJzuRMphCJDqzctWi7rmL85G3FVrWW6FD6N3Vigsww2%2BcXb%2FDlHVLvt6OP9M%2BzCdiZjABjqkAT%2FxAF%2BN5oQ1fwFgpmTzx6Qrn1R2enHmDpNQ0k%2Faus%2BkD6S9MCTtn0cQcR0F7sbEcjhAoQwU5L64HhX%2FV%2BtVCBxOJYNl36rrIc0LQ%2F59S5TVVKbkGRoAJ4VZKcN3dvRf8CmTxKLUEdJhGYHisYjuzCGOqLyMPSFeJ3rZzXkbCo5lC1q4KvhR1NVKbql1UlxNVOu%2B6rs%2Fo0GLxcQ3fbI2uxRHh%2Bs4&X-Amz-Signature=8ac4c5caa0834a816652bc62bb5f9b14282333d9cce63b605eff76afa7e29f1b&X-Amz-SignedHeaders=host&x-id=GetObject)
