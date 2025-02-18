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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634WQZJGU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDHR94YQPc3XLGBHEzFDrGr3lSOWSd7lRSpCt%2FAI83kYQIgJZUhDsK7JHdIxHjdQh%2FKCpntyF7EtP1d6K%2F22coKZjAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMMYv4ziqaKyrflJircA2XAVEKCoMhO%2FjC8I7LuN9G6GbwJ1UjsX9XlyNfNLhZI8TKcGpWqtRf4spT%2F5NAucwA9nowLmQMujp%2FjFEWiYeVfWsXvI89vAwxffz5LiDnxle%2BlE27P8eESyjuqA5anONvUWdnjTVx8RXqRdkcvXrTr95pyOvAsB06wsWavKBRn408UgteI5GDvdtIPfK8%2BaVlNSjWA%2BjdS5hJ1W9Z6frcWmhHKY5Uh5TSgNDiUCYLoeMl7wumwoo3ZkjNGk9wS8of4Z71bzlMENw%2BbHixP0MiXSQi7T%2FmwCeW1QuQh6ZDCcJZIRHMikl6fDOV2lwcwKY2aZaFVBUXd0nda%2FPkHV5F2ODPLqX4JTIFaXoCeRcvg7SOJGHJL5sbuS2Ej%2FwvkHVyvIAOV%2FOh3gBp6LMpJdlT8qWfDghusceiRbaorrltrTd3sw6mZOSQnSxI1gQO%2Btew1dzhMztJo8Tit7vaCFSsiCeYVIo%2BqKxaOMHrOtwAwhIb%2BpullEsN5IrDVCFzdCgRjz6H4C2Iee0%2FJ5DcMq0rxrkOXxnaqkrZh%2BWD2FUNVX%2BW8AA3siGE0eGPb52EgbviG431qllZe07FNBEnBWISfXojHG8jbAo4agEHZO7EJ6%2F0EydpETiEAlzDgMO%2Bx0r0GOqUBRRWQ71DgtZbhrKJzmWYi5RmSGcXiFZo6OMkYEYmTmgG20fJmn4IXmsGf4iAuaLgIlub8eFlLXMtqDzuo3CK%2F9CIqZMRGLgE4%2FdfN46bP2RS4JHZWQjzqid8NxGDBUbaQSJSVjlCc6TLt67YYZJjNxzz8%2BlmthP6go5Go61BE8I39%2FNi8i%2FPRb1ccV%2B5bTxc4QXVRvpE3BdzFvCiSOpq3J8DactKr&X-Amz-Signature=f7d73b244029aa7467be627795a06e210a92016fec9028a8625276f6ff4fe392&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634WQZJGU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDHR94YQPc3XLGBHEzFDrGr3lSOWSd7lRSpCt%2FAI83kYQIgJZUhDsK7JHdIxHjdQh%2FKCpntyF7EtP1d6K%2F22coKZjAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMMYv4ziqaKyrflJircA2XAVEKCoMhO%2FjC8I7LuN9G6GbwJ1UjsX9XlyNfNLhZI8TKcGpWqtRf4spT%2F5NAucwA9nowLmQMujp%2FjFEWiYeVfWsXvI89vAwxffz5LiDnxle%2BlE27P8eESyjuqA5anONvUWdnjTVx8RXqRdkcvXrTr95pyOvAsB06wsWavKBRn408UgteI5GDvdtIPfK8%2BaVlNSjWA%2BjdS5hJ1W9Z6frcWmhHKY5Uh5TSgNDiUCYLoeMl7wumwoo3ZkjNGk9wS8of4Z71bzlMENw%2BbHixP0MiXSQi7T%2FmwCeW1QuQh6ZDCcJZIRHMikl6fDOV2lwcwKY2aZaFVBUXd0nda%2FPkHV5F2ODPLqX4JTIFaXoCeRcvg7SOJGHJL5sbuS2Ej%2FwvkHVyvIAOV%2FOh3gBp6LMpJdlT8qWfDghusceiRbaorrltrTd3sw6mZOSQnSxI1gQO%2Btew1dzhMztJo8Tit7vaCFSsiCeYVIo%2BqKxaOMHrOtwAwhIb%2BpullEsN5IrDVCFzdCgRjz6H4C2Iee0%2FJ5DcMq0rxrkOXxnaqkrZh%2BWD2FUNVX%2BW8AA3siGE0eGPb52EgbviG431qllZe07FNBEnBWISfXojHG8jbAo4agEHZO7EJ6%2F0EydpETiEAlzDgMO%2Bx0r0GOqUBRRWQ71DgtZbhrKJzmWYi5RmSGcXiFZo6OMkYEYmTmgG20fJmn4IXmsGf4iAuaLgIlub8eFlLXMtqDzuo3CK%2F9CIqZMRGLgE4%2FdfN46bP2RS4JHZWQjzqid8NxGDBUbaQSJSVjlCc6TLt67YYZJjNxzz8%2BlmthP6go5Go61BE8I39%2FNi8i%2FPRb1ccV%2B5bTxc4QXVRvpE3BdzFvCiSOpq3J8DactKr&X-Amz-Signature=0f49782f3fa2afa4007eface0dd73fa6a67562686112afebded8ec30b5177146&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634WQZJGU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDHR94YQPc3XLGBHEzFDrGr3lSOWSd7lRSpCt%2FAI83kYQIgJZUhDsK7JHdIxHjdQh%2FKCpntyF7EtP1d6K%2F22coKZjAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMMYv4ziqaKyrflJircA2XAVEKCoMhO%2FjC8I7LuN9G6GbwJ1UjsX9XlyNfNLhZI8TKcGpWqtRf4spT%2F5NAucwA9nowLmQMujp%2FjFEWiYeVfWsXvI89vAwxffz5LiDnxle%2BlE27P8eESyjuqA5anONvUWdnjTVx8RXqRdkcvXrTr95pyOvAsB06wsWavKBRn408UgteI5GDvdtIPfK8%2BaVlNSjWA%2BjdS5hJ1W9Z6frcWmhHKY5Uh5TSgNDiUCYLoeMl7wumwoo3ZkjNGk9wS8of4Z71bzlMENw%2BbHixP0MiXSQi7T%2FmwCeW1QuQh6ZDCcJZIRHMikl6fDOV2lwcwKY2aZaFVBUXd0nda%2FPkHV5F2ODPLqX4JTIFaXoCeRcvg7SOJGHJL5sbuS2Ej%2FwvkHVyvIAOV%2FOh3gBp6LMpJdlT8qWfDghusceiRbaorrltrTd3sw6mZOSQnSxI1gQO%2Btew1dzhMztJo8Tit7vaCFSsiCeYVIo%2BqKxaOMHrOtwAwhIb%2BpullEsN5IrDVCFzdCgRjz6H4C2Iee0%2FJ5DcMq0rxrkOXxnaqkrZh%2BWD2FUNVX%2BW8AA3siGE0eGPb52EgbviG431qllZe07FNBEnBWISfXojHG8jbAo4agEHZO7EJ6%2F0EydpETiEAlzDgMO%2Bx0r0GOqUBRRWQ71DgtZbhrKJzmWYi5RmSGcXiFZo6OMkYEYmTmgG20fJmn4IXmsGf4iAuaLgIlub8eFlLXMtqDzuo3CK%2F9CIqZMRGLgE4%2FdfN46bP2RS4JHZWQjzqid8NxGDBUbaQSJSVjlCc6TLt67YYZJjNxzz8%2BlmthP6go5Go61BE8I39%2FNi8i%2FPRb1ccV%2B5bTxc4QXVRvpE3BdzFvCiSOpq3J8DactKr&X-Amz-Signature=b98960d519c4184b330f689d916d7c236b5e19a72f9e3056ec5bea3215fccb47&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634WQZJGU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDHR94YQPc3XLGBHEzFDrGr3lSOWSd7lRSpCt%2FAI83kYQIgJZUhDsK7JHdIxHjdQh%2FKCpntyF7EtP1d6K%2F22coKZjAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMMYv4ziqaKyrflJircA2XAVEKCoMhO%2FjC8I7LuN9G6GbwJ1UjsX9XlyNfNLhZI8TKcGpWqtRf4spT%2F5NAucwA9nowLmQMujp%2FjFEWiYeVfWsXvI89vAwxffz5LiDnxle%2BlE27P8eESyjuqA5anONvUWdnjTVx8RXqRdkcvXrTr95pyOvAsB06wsWavKBRn408UgteI5GDvdtIPfK8%2BaVlNSjWA%2BjdS5hJ1W9Z6frcWmhHKY5Uh5TSgNDiUCYLoeMl7wumwoo3ZkjNGk9wS8of4Z71bzlMENw%2BbHixP0MiXSQi7T%2FmwCeW1QuQh6ZDCcJZIRHMikl6fDOV2lwcwKY2aZaFVBUXd0nda%2FPkHV5F2ODPLqX4JTIFaXoCeRcvg7SOJGHJL5sbuS2Ej%2FwvkHVyvIAOV%2FOh3gBp6LMpJdlT8qWfDghusceiRbaorrltrTd3sw6mZOSQnSxI1gQO%2Btew1dzhMztJo8Tit7vaCFSsiCeYVIo%2BqKxaOMHrOtwAwhIb%2BpullEsN5IrDVCFzdCgRjz6H4C2Iee0%2FJ5DcMq0rxrkOXxnaqkrZh%2BWD2FUNVX%2BW8AA3siGE0eGPb52EgbviG431qllZe07FNBEnBWISfXojHG8jbAo4agEHZO7EJ6%2F0EydpETiEAlzDgMO%2Bx0r0GOqUBRRWQ71DgtZbhrKJzmWYi5RmSGcXiFZo6OMkYEYmTmgG20fJmn4IXmsGf4iAuaLgIlub8eFlLXMtqDzuo3CK%2F9CIqZMRGLgE4%2FdfN46bP2RS4JHZWQjzqid8NxGDBUbaQSJSVjlCc6TLt67YYZJjNxzz8%2BlmthP6go5Go61BE8I39%2FNi8i%2FPRb1ccV%2B5bTxc4QXVRvpE3BdzFvCiSOpq3J8DactKr&X-Amz-Signature=f678fe48ac46f1626bef5de7ff2a08b895657f1ce03f057520b44c25b14ec491&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634WQZJGU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDHR94YQPc3XLGBHEzFDrGr3lSOWSd7lRSpCt%2FAI83kYQIgJZUhDsK7JHdIxHjdQh%2FKCpntyF7EtP1d6K%2F22coKZjAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMMYv4ziqaKyrflJircA2XAVEKCoMhO%2FjC8I7LuN9G6GbwJ1UjsX9XlyNfNLhZI8TKcGpWqtRf4spT%2F5NAucwA9nowLmQMujp%2FjFEWiYeVfWsXvI89vAwxffz5LiDnxle%2BlE27P8eESyjuqA5anONvUWdnjTVx8RXqRdkcvXrTr95pyOvAsB06wsWavKBRn408UgteI5GDvdtIPfK8%2BaVlNSjWA%2BjdS5hJ1W9Z6frcWmhHKY5Uh5TSgNDiUCYLoeMl7wumwoo3ZkjNGk9wS8of4Z71bzlMENw%2BbHixP0MiXSQi7T%2FmwCeW1QuQh6ZDCcJZIRHMikl6fDOV2lwcwKY2aZaFVBUXd0nda%2FPkHV5F2ODPLqX4JTIFaXoCeRcvg7SOJGHJL5sbuS2Ej%2FwvkHVyvIAOV%2FOh3gBp6LMpJdlT8qWfDghusceiRbaorrltrTd3sw6mZOSQnSxI1gQO%2Btew1dzhMztJo8Tit7vaCFSsiCeYVIo%2BqKxaOMHrOtwAwhIb%2BpullEsN5IrDVCFzdCgRjz6H4C2Iee0%2FJ5DcMq0rxrkOXxnaqkrZh%2BWD2FUNVX%2BW8AA3siGE0eGPb52EgbviG431qllZe07FNBEnBWISfXojHG8jbAo4agEHZO7EJ6%2F0EydpETiEAlzDgMO%2Bx0r0GOqUBRRWQ71DgtZbhrKJzmWYi5RmSGcXiFZo6OMkYEYmTmgG20fJmn4IXmsGf4iAuaLgIlub8eFlLXMtqDzuo3CK%2F9CIqZMRGLgE4%2FdfN46bP2RS4JHZWQjzqid8NxGDBUbaQSJSVjlCc6TLt67YYZJjNxzz8%2BlmthP6go5Go61BE8I39%2FNi8i%2FPRb1ccV%2B5bTxc4QXVRvpE3BdzFvCiSOpq3J8DactKr&X-Amz-Signature=bcedc45014a1b3680fd835d90a9655dd3512fe376f72bb2838390e4f98ccce3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634WQZJGU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDHR94YQPc3XLGBHEzFDrGr3lSOWSd7lRSpCt%2FAI83kYQIgJZUhDsK7JHdIxHjdQh%2FKCpntyF7EtP1d6K%2F22coKZjAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMMYv4ziqaKyrflJircA2XAVEKCoMhO%2FjC8I7LuN9G6GbwJ1UjsX9XlyNfNLhZI8TKcGpWqtRf4spT%2F5NAucwA9nowLmQMujp%2FjFEWiYeVfWsXvI89vAwxffz5LiDnxle%2BlE27P8eESyjuqA5anONvUWdnjTVx8RXqRdkcvXrTr95pyOvAsB06wsWavKBRn408UgteI5GDvdtIPfK8%2BaVlNSjWA%2BjdS5hJ1W9Z6frcWmhHKY5Uh5TSgNDiUCYLoeMl7wumwoo3ZkjNGk9wS8of4Z71bzlMENw%2BbHixP0MiXSQi7T%2FmwCeW1QuQh6ZDCcJZIRHMikl6fDOV2lwcwKY2aZaFVBUXd0nda%2FPkHV5F2ODPLqX4JTIFaXoCeRcvg7SOJGHJL5sbuS2Ej%2FwvkHVyvIAOV%2FOh3gBp6LMpJdlT8qWfDghusceiRbaorrltrTd3sw6mZOSQnSxI1gQO%2Btew1dzhMztJo8Tit7vaCFSsiCeYVIo%2BqKxaOMHrOtwAwhIb%2BpullEsN5IrDVCFzdCgRjz6H4C2Iee0%2FJ5DcMq0rxrkOXxnaqkrZh%2BWD2FUNVX%2BW8AA3siGE0eGPb52EgbviG431qllZe07FNBEnBWISfXojHG8jbAo4agEHZO7EJ6%2F0EydpETiEAlzDgMO%2Bx0r0GOqUBRRWQ71DgtZbhrKJzmWYi5RmSGcXiFZo6OMkYEYmTmgG20fJmn4IXmsGf4iAuaLgIlub8eFlLXMtqDzuo3CK%2F9CIqZMRGLgE4%2FdfN46bP2RS4JHZWQjzqid8NxGDBUbaQSJSVjlCc6TLt67YYZJjNxzz8%2BlmthP6go5Go61BE8I39%2FNi8i%2FPRb1ccV%2B5bTxc4QXVRvpE3BdzFvCiSOpq3J8DactKr&X-Amz-Signature=83f16dafcc0dc71e5766ed3c3936486929bc1d04675e806b9b696b24d2652887&X-Amz-SignedHeaders=host&x-id=GetObject)
