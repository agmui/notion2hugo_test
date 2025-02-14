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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WODP6CUN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5bN7vKcflrVQTu41MAbELg%2F12AJdoRQbZNqQcrUWDBAIgB7i4tukUDfEOWVsiENhFXgr3vzg1dmGJhgQ%2BQc0BEugq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHalzSrD1GaCVXKHuircA2cGroWkbaR%2F%2F0DROO03M3BGe%2B5Bu%2BELg13Z64q4fe3UkP6dTzX%2BnhvSGwmyNJgDc58dxdiQmou7A1MyCvn2ofVT65CZeMr24YeqW0Xa13wGgzWaG5Qa2%2B%2BGvX2Ox98RfAov5qanaTi5fJn%2B3sBY6EdKQXc0L50%2BLr5tRuhTJ4kG1lARC%2Fo9fu%2Bvyr%2B4yxsaqdzhdJRvZOcUkxOWVv%2BgmHNDqrDAjU%2Bk7krCFjnSt0F%2BPfBs9fY1Znjc9ZLENOnDfv8LAL7kQsiGVplmjgHUKNGy1OjMo49DSkhpL1bpv27db5kuN5U99rgz2ujJkot8mfQVRbVnNV5Jp6slerPCmmBfZh%2BT2lPB7dIE%2B9oTATdQvLTH1SVboVZk7OkqhxQgizJ0yQZA1Lwpvmr8Wwimj79XrbtWyCEjFpHbefp2IdWSHJrp9LglNJFqpNLXT%2BBmjzqKFUvUzxQ38on%2BOPf3waxINPhnURmLgkIzbKK9PSRxinFutQnDIoq0XpcS7wU2kAH1J%2B6gvgBkYgkDES7FnRsYdifphT9EwF676pLPhcr4AWPvcxJX2gK0%2FWyHZjCI0Q03bwYTUVfQj8n8R9%2BZCffPn6m0ivj%2FiAHE8nTiRqOnROxL9%2BhFpkpcatY5MJ6our0GOqUB4dgCVkxFL3pBfYtPkprDyIerQSlSCuF2CyeSagGwtWIsTcZxQloFv43jq8e51yue1WfYEnsJvOinvod43Yplt3AsnOfr2W8bK6RYlx0ng0ffapP9pUi18W%2FYfvxxAAbiM7Wr6X2w0peOeHn2FlZLUw4WkcdcGFzRLgToRWrR6aDykkLdJUhXlZltaeRJqNpZ0ZGssGlT31G0Ez4U%2FR048lwduxAu&X-Amz-Signature=fed6a071fe31bdcafe67adb570cbdcf8a820246fe3ba193c6b3e217ecb6a0735&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WODP6CUN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5bN7vKcflrVQTu41MAbELg%2F12AJdoRQbZNqQcrUWDBAIgB7i4tukUDfEOWVsiENhFXgr3vzg1dmGJhgQ%2BQc0BEugq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHalzSrD1GaCVXKHuircA2cGroWkbaR%2F%2F0DROO03M3BGe%2B5Bu%2BELg13Z64q4fe3UkP6dTzX%2BnhvSGwmyNJgDc58dxdiQmou7A1MyCvn2ofVT65CZeMr24YeqW0Xa13wGgzWaG5Qa2%2B%2BGvX2Ox98RfAov5qanaTi5fJn%2B3sBY6EdKQXc0L50%2BLr5tRuhTJ4kG1lARC%2Fo9fu%2Bvyr%2B4yxsaqdzhdJRvZOcUkxOWVv%2BgmHNDqrDAjU%2Bk7krCFjnSt0F%2BPfBs9fY1Znjc9ZLENOnDfv8LAL7kQsiGVplmjgHUKNGy1OjMo49DSkhpL1bpv27db5kuN5U99rgz2ujJkot8mfQVRbVnNV5Jp6slerPCmmBfZh%2BT2lPB7dIE%2B9oTATdQvLTH1SVboVZk7OkqhxQgizJ0yQZA1Lwpvmr8Wwimj79XrbtWyCEjFpHbefp2IdWSHJrp9LglNJFqpNLXT%2BBmjzqKFUvUzxQ38on%2BOPf3waxINPhnURmLgkIzbKK9PSRxinFutQnDIoq0XpcS7wU2kAH1J%2B6gvgBkYgkDES7FnRsYdifphT9EwF676pLPhcr4AWPvcxJX2gK0%2FWyHZjCI0Q03bwYTUVfQj8n8R9%2BZCffPn6m0ivj%2FiAHE8nTiRqOnROxL9%2BhFpkpcatY5MJ6our0GOqUB4dgCVkxFL3pBfYtPkprDyIerQSlSCuF2CyeSagGwtWIsTcZxQloFv43jq8e51yue1WfYEnsJvOinvod43Yplt3AsnOfr2W8bK6RYlx0ng0ffapP9pUi18W%2FYfvxxAAbiM7Wr6X2w0peOeHn2FlZLUw4WkcdcGFzRLgToRWrR6aDykkLdJUhXlZltaeRJqNpZ0ZGssGlT31G0Ez4U%2FR048lwduxAu&X-Amz-Signature=fbd1f4c8ef3bcd95c4dea50591658f6e55f84db0de39ed6b12185747feae001b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WODP6CUN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5bN7vKcflrVQTu41MAbELg%2F12AJdoRQbZNqQcrUWDBAIgB7i4tukUDfEOWVsiENhFXgr3vzg1dmGJhgQ%2BQc0BEugq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHalzSrD1GaCVXKHuircA2cGroWkbaR%2F%2F0DROO03M3BGe%2B5Bu%2BELg13Z64q4fe3UkP6dTzX%2BnhvSGwmyNJgDc58dxdiQmou7A1MyCvn2ofVT65CZeMr24YeqW0Xa13wGgzWaG5Qa2%2B%2BGvX2Ox98RfAov5qanaTi5fJn%2B3sBY6EdKQXc0L50%2BLr5tRuhTJ4kG1lARC%2Fo9fu%2Bvyr%2B4yxsaqdzhdJRvZOcUkxOWVv%2BgmHNDqrDAjU%2Bk7krCFjnSt0F%2BPfBs9fY1Znjc9ZLENOnDfv8LAL7kQsiGVplmjgHUKNGy1OjMo49DSkhpL1bpv27db5kuN5U99rgz2ujJkot8mfQVRbVnNV5Jp6slerPCmmBfZh%2BT2lPB7dIE%2B9oTATdQvLTH1SVboVZk7OkqhxQgizJ0yQZA1Lwpvmr8Wwimj79XrbtWyCEjFpHbefp2IdWSHJrp9LglNJFqpNLXT%2BBmjzqKFUvUzxQ38on%2BOPf3waxINPhnURmLgkIzbKK9PSRxinFutQnDIoq0XpcS7wU2kAH1J%2B6gvgBkYgkDES7FnRsYdifphT9EwF676pLPhcr4AWPvcxJX2gK0%2FWyHZjCI0Q03bwYTUVfQj8n8R9%2BZCffPn6m0ivj%2FiAHE8nTiRqOnROxL9%2BhFpkpcatY5MJ6our0GOqUB4dgCVkxFL3pBfYtPkprDyIerQSlSCuF2CyeSagGwtWIsTcZxQloFv43jq8e51yue1WfYEnsJvOinvod43Yplt3AsnOfr2W8bK6RYlx0ng0ffapP9pUi18W%2FYfvxxAAbiM7Wr6X2w0peOeHn2FlZLUw4WkcdcGFzRLgToRWrR6aDykkLdJUhXlZltaeRJqNpZ0ZGssGlT31G0Ez4U%2FR048lwduxAu&X-Amz-Signature=b0730f508216518d1a44f52e71e43f70d2dea71e05add6d245d17ce889f3508b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WODP6CUN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5bN7vKcflrVQTu41MAbELg%2F12AJdoRQbZNqQcrUWDBAIgB7i4tukUDfEOWVsiENhFXgr3vzg1dmGJhgQ%2BQc0BEugq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHalzSrD1GaCVXKHuircA2cGroWkbaR%2F%2F0DROO03M3BGe%2B5Bu%2BELg13Z64q4fe3UkP6dTzX%2BnhvSGwmyNJgDc58dxdiQmou7A1MyCvn2ofVT65CZeMr24YeqW0Xa13wGgzWaG5Qa2%2B%2BGvX2Ox98RfAov5qanaTi5fJn%2B3sBY6EdKQXc0L50%2BLr5tRuhTJ4kG1lARC%2Fo9fu%2Bvyr%2B4yxsaqdzhdJRvZOcUkxOWVv%2BgmHNDqrDAjU%2Bk7krCFjnSt0F%2BPfBs9fY1Znjc9ZLENOnDfv8LAL7kQsiGVplmjgHUKNGy1OjMo49DSkhpL1bpv27db5kuN5U99rgz2ujJkot8mfQVRbVnNV5Jp6slerPCmmBfZh%2BT2lPB7dIE%2B9oTATdQvLTH1SVboVZk7OkqhxQgizJ0yQZA1Lwpvmr8Wwimj79XrbtWyCEjFpHbefp2IdWSHJrp9LglNJFqpNLXT%2BBmjzqKFUvUzxQ38on%2BOPf3waxINPhnURmLgkIzbKK9PSRxinFutQnDIoq0XpcS7wU2kAH1J%2B6gvgBkYgkDES7FnRsYdifphT9EwF676pLPhcr4AWPvcxJX2gK0%2FWyHZjCI0Q03bwYTUVfQj8n8R9%2BZCffPn6m0ivj%2FiAHE8nTiRqOnROxL9%2BhFpkpcatY5MJ6our0GOqUB4dgCVkxFL3pBfYtPkprDyIerQSlSCuF2CyeSagGwtWIsTcZxQloFv43jq8e51yue1WfYEnsJvOinvod43Yplt3AsnOfr2W8bK6RYlx0ng0ffapP9pUi18W%2FYfvxxAAbiM7Wr6X2w0peOeHn2FlZLUw4WkcdcGFzRLgToRWrR6aDykkLdJUhXlZltaeRJqNpZ0ZGssGlT31G0Ez4U%2FR048lwduxAu&X-Amz-Signature=949a52d75e1ef9cf0e8d78e97288e2040371f49fbb81e58831fd579094844be2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WODP6CUN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5bN7vKcflrVQTu41MAbELg%2F12AJdoRQbZNqQcrUWDBAIgB7i4tukUDfEOWVsiENhFXgr3vzg1dmGJhgQ%2BQc0BEugq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHalzSrD1GaCVXKHuircA2cGroWkbaR%2F%2F0DROO03M3BGe%2B5Bu%2BELg13Z64q4fe3UkP6dTzX%2BnhvSGwmyNJgDc58dxdiQmou7A1MyCvn2ofVT65CZeMr24YeqW0Xa13wGgzWaG5Qa2%2B%2BGvX2Ox98RfAov5qanaTi5fJn%2B3sBY6EdKQXc0L50%2BLr5tRuhTJ4kG1lARC%2Fo9fu%2Bvyr%2B4yxsaqdzhdJRvZOcUkxOWVv%2BgmHNDqrDAjU%2Bk7krCFjnSt0F%2BPfBs9fY1Znjc9ZLENOnDfv8LAL7kQsiGVplmjgHUKNGy1OjMo49DSkhpL1bpv27db5kuN5U99rgz2ujJkot8mfQVRbVnNV5Jp6slerPCmmBfZh%2BT2lPB7dIE%2B9oTATdQvLTH1SVboVZk7OkqhxQgizJ0yQZA1Lwpvmr8Wwimj79XrbtWyCEjFpHbefp2IdWSHJrp9LglNJFqpNLXT%2BBmjzqKFUvUzxQ38on%2BOPf3waxINPhnURmLgkIzbKK9PSRxinFutQnDIoq0XpcS7wU2kAH1J%2B6gvgBkYgkDES7FnRsYdifphT9EwF676pLPhcr4AWPvcxJX2gK0%2FWyHZjCI0Q03bwYTUVfQj8n8R9%2BZCffPn6m0ivj%2FiAHE8nTiRqOnROxL9%2BhFpkpcatY5MJ6our0GOqUB4dgCVkxFL3pBfYtPkprDyIerQSlSCuF2CyeSagGwtWIsTcZxQloFv43jq8e51yue1WfYEnsJvOinvod43Yplt3AsnOfr2W8bK6RYlx0ng0ffapP9pUi18W%2FYfvxxAAbiM7Wr6X2w0peOeHn2FlZLUw4WkcdcGFzRLgToRWrR6aDykkLdJUhXlZltaeRJqNpZ0ZGssGlT31G0Ez4U%2FR048lwduxAu&X-Amz-Signature=323838799163d6612c7cf8d4f62d2451d54bdcd7bb1b5bb52afad8d51746e7a6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WODP6CUN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T020858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5bN7vKcflrVQTu41MAbELg%2F12AJdoRQbZNqQcrUWDBAIgB7i4tukUDfEOWVsiENhFXgr3vzg1dmGJhgQ%2BQc0BEugq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHalzSrD1GaCVXKHuircA2cGroWkbaR%2F%2F0DROO03M3BGe%2B5Bu%2BELg13Z64q4fe3UkP6dTzX%2BnhvSGwmyNJgDc58dxdiQmou7A1MyCvn2ofVT65CZeMr24YeqW0Xa13wGgzWaG5Qa2%2B%2BGvX2Ox98RfAov5qanaTi5fJn%2B3sBY6EdKQXc0L50%2BLr5tRuhTJ4kG1lARC%2Fo9fu%2Bvyr%2B4yxsaqdzhdJRvZOcUkxOWVv%2BgmHNDqrDAjU%2Bk7krCFjnSt0F%2BPfBs9fY1Znjc9ZLENOnDfv8LAL7kQsiGVplmjgHUKNGy1OjMo49DSkhpL1bpv27db5kuN5U99rgz2ujJkot8mfQVRbVnNV5Jp6slerPCmmBfZh%2BT2lPB7dIE%2B9oTATdQvLTH1SVboVZk7OkqhxQgizJ0yQZA1Lwpvmr8Wwimj79XrbtWyCEjFpHbefp2IdWSHJrp9LglNJFqpNLXT%2BBmjzqKFUvUzxQ38on%2BOPf3waxINPhnURmLgkIzbKK9PSRxinFutQnDIoq0XpcS7wU2kAH1J%2B6gvgBkYgkDES7FnRsYdifphT9EwF676pLPhcr4AWPvcxJX2gK0%2FWyHZjCI0Q03bwYTUVfQj8n8R9%2BZCffPn6m0ivj%2FiAHE8nTiRqOnROxL9%2BhFpkpcatY5MJ6our0GOqUB4dgCVkxFL3pBfYtPkprDyIerQSlSCuF2CyeSagGwtWIsTcZxQloFv43jq8e51yue1WfYEnsJvOinvod43Yplt3AsnOfr2W8bK6RYlx0ng0ffapP9pUi18W%2FYfvxxAAbiM7Wr6X2w0peOeHn2FlZLUw4WkcdcGFzRLgToRWrR6aDykkLdJUhXlZltaeRJqNpZ0ZGssGlT31G0Ez4U%2FR048lwduxAu&X-Amz-Signature=b01e115c2356f8f6cd5db3acb63d9b0f1b829df5913a2f749ff0e5d735f6b57f&X-Amz-SignedHeaders=host&x-id=GetObject)
