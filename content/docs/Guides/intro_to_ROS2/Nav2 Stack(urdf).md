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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XWD7RXY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEDOSosH2VO13yy2oDia9PfKrDwWtOYQRiGMTwW79v6QAiEA0Qw%2Bd2cQqfMUd1UDPbbGr%2B9R5eGgZ7ChlCNcDsqgDc0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDENZmLZ5ULVVpY0yjircA4SsSkEv19hmK43lMX4a5T02FHkZPyT6yosHyXsw%2BYAnFsmSGWhhVsifU5qfTsb5TB95FPApmC24Ys2E2bje0O%2FYJ1jCuvAKJW2YAaJueLyKPjO2fH9k0537lNJLmKuMydeJDFQqd5H1lozd0dg%2BewaACCyTzii01ha93yfgFdE4JA3tVDOVIjrRsVlPhDyjgOxJLGgU0W8gHsJn6YN%2F4xWATvKL6QbUJEePRcGWKLrguEFH1rLkotDUOCeoWWydCyqZWxC3x1vQv6xnscUTkbMGKsFKQ7IfjdZHpu%2BsLVusvKons4KIN1Xbt%2FlXevRiqoEcvh8j5OrtYdhYbKhjZyq7Y3tCzcjJhhK%2FKVlZR7Myh6l3qgyFxj%2F%2Funp9W6RHN4f%2BUOAnOSNL7zHrPqWFBJQINitDE03tAZZlDRZ8t7qADtyyho9A6Sgbe3d7BlB%2FgWA3%2BVXMTH7FvLSmHuv020C0CLtvJ8IajzEAwtcb2Y%2BdbsUFdbP1E7a5v93GvWWCOuksS8sdyT%2B7wdJnqSDpz%2BkCo3VH%2FITYQqmRbgQU6nqgkvDM61kSki%2FJPfVn61R3FllMjgAkLjfXFxPkN1llSHGdDF5uTebQcgd5tUaFJ%2FSwFJ55rlQCue4rPaBNMJ%2F9qMMGOqUBG9TRFut9vZzG1yytgeG45Ydft73iqdj48eNxbj20Vetv66akATVUebHvoLe1Gz4GHIOK1qtkfPBV0MtcSI9epf9c7npFDAfj%2BTCLw%2FvzEg79q%2BhdiQb6OS4PVXtrTsCwnHTD0ZpsfNZg%2FZEaJGIBLQVlry1z49VXZGulP28achsUxXsTbVeAK5ud7v297xhkjMSeXjpoWusgpfxkt0jmOrf9WePo&X-Amz-Signature=5cda6bf918d747596b65c97fa8ed9457422d46aec3d7aa99f6cd65aa1e184a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XWD7RXY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEDOSosH2VO13yy2oDia9PfKrDwWtOYQRiGMTwW79v6QAiEA0Qw%2Bd2cQqfMUd1UDPbbGr%2B9R5eGgZ7ChlCNcDsqgDc0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDENZmLZ5ULVVpY0yjircA4SsSkEv19hmK43lMX4a5T02FHkZPyT6yosHyXsw%2BYAnFsmSGWhhVsifU5qfTsb5TB95FPApmC24Ys2E2bje0O%2FYJ1jCuvAKJW2YAaJueLyKPjO2fH9k0537lNJLmKuMydeJDFQqd5H1lozd0dg%2BewaACCyTzii01ha93yfgFdE4JA3tVDOVIjrRsVlPhDyjgOxJLGgU0W8gHsJn6YN%2F4xWATvKL6QbUJEePRcGWKLrguEFH1rLkotDUOCeoWWydCyqZWxC3x1vQv6xnscUTkbMGKsFKQ7IfjdZHpu%2BsLVusvKons4KIN1Xbt%2FlXevRiqoEcvh8j5OrtYdhYbKhjZyq7Y3tCzcjJhhK%2FKVlZR7Myh6l3qgyFxj%2F%2Funp9W6RHN4f%2BUOAnOSNL7zHrPqWFBJQINitDE03tAZZlDRZ8t7qADtyyho9A6Sgbe3d7BlB%2FgWA3%2BVXMTH7FvLSmHuv020C0CLtvJ8IajzEAwtcb2Y%2BdbsUFdbP1E7a5v93GvWWCOuksS8sdyT%2B7wdJnqSDpz%2BkCo3VH%2FITYQqmRbgQU6nqgkvDM61kSki%2FJPfVn61R3FllMjgAkLjfXFxPkN1llSHGdDF5uTebQcgd5tUaFJ%2FSwFJ55rlQCue4rPaBNMJ%2F9qMMGOqUBG9TRFut9vZzG1yytgeG45Ydft73iqdj48eNxbj20Vetv66akATVUebHvoLe1Gz4GHIOK1qtkfPBV0MtcSI9epf9c7npFDAfj%2BTCLw%2FvzEg79q%2BhdiQb6OS4PVXtrTsCwnHTD0ZpsfNZg%2FZEaJGIBLQVlry1z49VXZGulP28achsUxXsTbVeAK5ud7v297xhkjMSeXjpoWusgpfxkt0jmOrf9WePo&X-Amz-Signature=1c3a52f64a8766876ad14e257603ef41726a9290cbbc739515e97da50ade5a39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XWD7RXY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEDOSosH2VO13yy2oDia9PfKrDwWtOYQRiGMTwW79v6QAiEA0Qw%2Bd2cQqfMUd1UDPbbGr%2B9R5eGgZ7ChlCNcDsqgDc0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDENZmLZ5ULVVpY0yjircA4SsSkEv19hmK43lMX4a5T02FHkZPyT6yosHyXsw%2BYAnFsmSGWhhVsifU5qfTsb5TB95FPApmC24Ys2E2bje0O%2FYJ1jCuvAKJW2YAaJueLyKPjO2fH9k0537lNJLmKuMydeJDFQqd5H1lozd0dg%2BewaACCyTzii01ha93yfgFdE4JA3tVDOVIjrRsVlPhDyjgOxJLGgU0W8gHsJn6YN%2F4xWATvKL6QbUJEePRcGWKLrguEFH1rLkotDUOCeoWWydCyqZWxC3x1vQv6xnscUTkbMGKsFKQ7IfjdZHpu%2BsLVusvKons4KIN1Xbt%2FlXevRiqoEcvh8j5OrtYdhYbKhjZyq7Y3tCzcjJhhK%2FKVlZR7Myh6l3qgyFxj%2F%2Funp9W6RHN4f%2BUOAnOSNL7zHrPqWFBJQINitDE03tAZZlDRZ8t7qADtyyho9A6Sgbe3d7BlB%2FgWA3%2BVXMTH7FvLSmHuv020C0CLtvJ8IajzEAwtcb2Y%2BdbsUFdbP1E7a5v93GvWWCOuksS8sdyT%2B7wdJnqSDpz%2BkCo3VH%2FITYQqmRbgQU6nqgkvDM61kSki%2FJPfVn61R3FllMjgAkLjfXFxPkN1llSHGdDF5uTebQcgd5tUaFJ%2FSwFJ55rlQCue4rPaBNMJ%2F9qMMGOqUBG9TRFut9vZzG1yytgeG45Ydft73iqdj48eNxbj20Vetv66akATVUebHvoLe1Gz4GHIOK1qtkfPBV0MtcSI9epf9c7npFDAfj%2BTCLw%2FvzEg79q%2BhdiQb6OS4PVXtrTsCwnHTD0ZpsfNZg%2FZEaJGIBLQVlry1z49VXZGulP28achsUxXsTbVeAK5ud7v297xhkjMSeXjpoWusgpfxkt0jmOrf9WePo&X-Amz-Signature=a73a2310528401cb5e4b268a8cf969d56a03ca3b560ec99f32825a2deb04e69a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XWD7RXY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEDOSosH2VO13yy2oDia9PfKrDwWtOYQRiGMTwW79v6QAiEA0Qw%2Bd2cQqfMUd1UDPbbGr%2B9R5eGgZ7ChlCNcDsqgDc0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDENZmLZ5ULVVpY0yjircA4SsSkEv19hmK43lMX4a5T02FHkZPyT6yosHyXsw%2BYAnFsmSGWhhVsifU5qfTsb5TB95FPApmC24Ys2E2bje0O%2FYJ1jCuvAKJW2YAaJueLyKPjO2fH9k0537lNJLmKuMydeJDFQqd5H1lozd0dg%2BewaACCyTzii01ha93yfgFdE4JA3tVDOVIjrRsVlPhDyjgOxJLGgU0W8gHsJn6YN%2F4xWATvKL6QbUJEePRcGWKLrguEFH1rLkotDUOCeoWWydCyqZWxC3x1vQv6xnscUTkbMGKsFKQ7IfjdZHpu%2BsLVusvKons4KIN1Xbt%2FlXevRiqoEcvh8j5OrtYdhYbKhjZyq7Y3tCzcjJhhK%2FKVlZR7Myh6l3qgyFxj%2F%2Funp9W6RHN4f%2BUOAnOSNL7zHrPqWFBJQINitDE03tAZZlDRZ8t7qADtyyho9A6Sgbe3d7BlB%2FgWA3%2BVXMTH7FvLSmHuv020C0CLtvJ8IajzEAwtcb2Y%2BdbsUFdbP1E7a5v93GvWWCOuksS8sdyT%2B7wdJnqSDpz%2BkCo3VH%2FITYQqmRbgQU6nqgkvDM61kSki%2FJPfVn61R3FllMjgAkLjfXFxPkN1llSHGdDF5uTebQcgd5tUaFJ%2FSwFJ55rlQCue4rPaBNMJ%2F9qMMGOqUBG9TRFut9vZzG1yytgeG45Ydft73iqdj48eNxbj20Vetv66akATVUebHvoLe1Gz4GHIOK1qtkfPBV0MtcSI9epf9c7npFDAfj%2BTCLw%2FvzEg79q%2BhdiQb6OS4PVXtrTsCwnHTD0ZpsfNZg%2FZEaJGIBLQVlry1z49VXZGulP28achsUxXsTbVeAK5ud7v297xhkjMSeXjpoWusgpfxkt0jmOrf9WePo&X-Amz-Signature=c9e771017bbbbbc94027646762d21b9087b4eaca50d1b57663b7515bc59f7428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XWD7RXY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEDOSosH2VO13yy2oDia9PfKrDwWtOYQRiGMTwW79v6QAiEA0Qw%2Bd2cQqfMUd1UDPbbGr%2B9R5eGgZ7ChlCNcDsqgDc0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDENZmLZ5ULVVpY0yjircA4SsSkEv19hmK43lMX4a5T02FHkZPyT6yosHyXsw%2BYAnFsmSGWhhVsifU5qfTsb5TB95FPApmC24Ys2E2bje0O%2FYJ1jCuvAKJW2YAaJueLyKPjO2fH9k0537lNJLmKuMydeJDFQqd5H1lozd0dg%2BewaACCyTzii01ha93yfgFdE4JA3tVDOVIjrRsVlPhDyjgOxJLGgU0W8gHsJn6YN%2F4xWATvKL6QbUJEePRcGWKLrguEFH1rLkotDUOCeoWWydCyqZWxC3x1vQv6xnscUTkbMGKsFKQ7IfjdZHpu%2BsLVusvKons4KIN1Xbt%2FlXevRiqoEcvh8j5OrtYdhYbKhjZyq7Y3tCzcjJhhK%2FKVlZR7Myh6l3qgyFxj%2F%2Funp9W6RHN4f%2BUOAnOSNL7zHrPqWFBJQINitDE03tAZZlDRZ8t7qADtyyho9A6Sgbe3d7BlB%2FgWA3%2BVXMTH7FvLSmHuv020C0CLtvJ8IajzEAwtcb2Y%2BdbsUFdbP1E7a5v93GvWWCOuksS8sdyT%2B7wdJnqSDpz%2BkCo3VH%2FITYQqmRbgQU6nqgkvDM61kSki%2FJPfVn61R3FllMjgAkLjfXFxPkN1llSHGdDF5uTebQcgd5tUaFJ%2FSwFJ55rlQCue4rPaBNMJ%2F9qMMGOqUBG9TRFut9vZzG1yytgeG45Ydft73iqdj48eNxbj20Vetv66akATVUebHvoLe1Gz4GHIOK1qtkfPBV0MtcSI9epf9c7npFDAfj%2BTCLw%2FvzEg79q%2BhdiQb6OS4PVXtrTsCwnHTD0ZpsfNZg%2FZEaJGIBLQVlry1z49VXZGulP28achsUxXsTbVeAK5ud7v297xhkjMSeXjpoWusgpfxkt0jmOrf9WePo&X-Amz-Signature=c5816d1f8df93f7595fe10066d341dcd897ac9fc65338dba97b34f3be2d91ea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XWD7RXY%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T110159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIEDOSosH2VO13yy2oDia9PfKrDwWtOYQRiGMTwW79v6QAiEA0Qw%2Bd2cQqfMUd1UDPbbGr%2B9R5eGgZ7ChlCNcDsqgDc0q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDENZmLZ5ULVVpY0yjircA4SsSkEv19hmK43lMX4a5T02FHkZPyT6yosHyXsw%2BYAnFsmSGWhhVsifU5qfTsb5TB95FPApmC24Ys2E2bje0O%2FYJ1jCuvAKJW2YAaJueLyKPjO2fH9k0537lNJLmKuMydeJDFQqd5H1lozd0dg%2BewaACCyTzii01ha93yfgFdE4JA3tVDOVIjrRsVlPhDyjgOxJLGgU0W8gHsJn6YN%2F4xWATvKL6QbUJEePRcGWKLrguEFH1rLkotDUOCeoWWydCyqZWxC3x1vQv6xnscUTkbMGKsFKQ7IfjdZHpu%2BsLVusvKons4KIN1Xbt%2FlXevRiqoEcvh8j5OrtYdhYbKhjZyq7Y3tCzcjJhhK%2FKVlZR7Myh6l3qgyFxj%2F%2Funp9W6RHN4f%2BUOAnOSNL7zHrPqWFBJQINitDE03tAZZlDRZ8t7qADtyyho9A6Sgbe3d7BlB%2FgWA3%2BVXMTH7FvLSmHuv020C0CLtvJ8IajzEAwtcb2Y%2BdbsUFdbP1E7a5v93GvWWCOuksS8sdyT%2B7wdJnqSDpz%2BkCo3VH%2FITYQqmRbgQU6nqgkvDM61kSki%2FJPfVn61R3FllMjgAkLjfXFxPkN1llSHGdDF5uTebQcgd5tUaFJ%2FSwFJ55rlQCue4rPaBNMJ%2F9qMMGOqUBG9TRFut9vZzG1yytgeG45Ydft73iqdj48eNxbj20Vetv66akATVUebHvoLe1Gz4GHIOK1qtkfPBV0MtcSI9epf9c7npFDAfj%2BTCLw%2FvzEg79q%2BhdiQb6OS4PVXtrTsCwnHTD0ZpsfNZg%2FZEaJGIBLQVlry1z49VXZGulP28achsUxXsTbVeAK5ud7v297xhkjMSeXjpoWusgpfxkt0jmOrf9WePo&X-Amz-Signature=53f0d399e10815ac78eb50bde5b12e9805171a2afa8c06755293561a52c00b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
