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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F37IJEV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeV%2Foc5aTTXuofKRvc363r2r6OySWwz3fRy58vh6O3QgIgWIiWSHCSCbGTM6NJi01gRdCMG%2BCDhX0%2Bk2d9GUgMiUIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYZ3PnTu0pOKGWUvircAyhZlcgAi7eClK6hFwJtpSe1y7yA4R1w%2FXqeop8F0Ou9cxlWb%2B9u9%2BU2BRlunsuzCHycn2RlVulJoRMD9z7L6a8vZVbLayrygRdk7%2FvAJIPbNZkLXBnrchHY%2BCERVgtJUx2V%2BmVDHywWX3DBA2RMtIYb0e%2FdEnDz9dGECIN3VN2vnHIF3gJLmIX8jE5kxvcdXI9Q%2BtqAnedlDzuuRGHeUbXI9vqo%2FT3XlMKXbF4FvfJd7BIRHqq0297lW6vCumtY7qAofYgUJ%2FKZKs7%2BegLfz312iC1mnKlOONbk6qyRohDIbRxTav5zeF8NVRgWXMBt6OxAvoXIvNK%2ForiGFdSOgG%2F3hd1BCdAGi1K5GrYa5OZhTssXCLa5qTWL1jo649lGTFfkXyFl7q7%2BlpbG9itLgDNnXXmjUwdZ%2BtvStl9MwvDL6lIpfGTVwLrd%2FxvfqRQLZwvK0hYWGg%2Bab1ZXhb7Yz5hLb%2BM5EPNXdcJjBngtVhGGo%2BJl%2F0T99WNmuArDClgq6alVgB7goGwtTIBHjblMrozvCA5aRbN3EQDl%2Fuv9kF0B%2BY1ZONR21DsGhVtPBO7xqnY%2FvR6Ff4HOhRIbxqyYPhI4zzZYszmWLYL083UXE1te1HDdoqnF%2B4FjeI0CMIH%2Fw8MGOqUBO1h9Svf7W%2B3p1qYcIpR7dw23DfA4uzkUWh%2FwuLGVpIjJgusKLlsWEC6tgbzU18sWQ2nuPKj2042vY0rkzJthXOZjmHei1YBnOg2gzc%2BuXzUcy%2FxVL0R1s0takuscha8UUrK%2FccP8ZLuEeGHuT4SPdvLRbcrYddOJ%2Bw62VcEruTCxk4OHaPYFVHJVUq92DzirFDHd6Btc1Xy8%2FvQsPdkh3lyLAmHR&X-Amz-Signature=705f41e4ad7c40192feccb5c6ed0ee4289f178edbda07e2d7445bde75aa6934b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F37IJEV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeV%2Foc5aTTXuofKRvc363r2r6OySWwz3fRy58vh6O3QgIgWIiWSHCSCbGTM6NJi01gRdCMG%2BCDhX0%2Bk2d9GUgMiUIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYZ3PnTu0pOKGWUvircAyhZlcgAi7eClK6hFwJtpSe1y7yA4R1w%2FXqeop8F0Ou9cxlWb%2B9u9%2BU2BRlunsuzCHycn2RlVulJoRMD9z7L6a8vZVbLayrygRdk7%2FvAJIPbNZkLXBnrchHY%2BCERVgtJUx2V%2BmVDHywWX3DBA2RMtIYb0e%2FdEnDz9dGECIN3VN2vnHIF3gJLmIX8jE5kxvcdXI9Q%2BtqAnedlDzuuRGHeUbXI9vqo%2FT3XlMKXbF4FvfJd7BIRHqq0297lW6vCumtY7qAofYgUJ%2FKZKs7%2BegLfz312iC1mnKlOONbk6qyRohDIbRxTav5zeF8NVRgWXMBt6OxAvoXIvNK%2ForiGFdSOgG%2F3hd1BCdAGi1K5GrYa5OZhTssXCLa5qTWL1jo649lGTFfkXyFl7q7%2BlpbG9itLgDNnXXmjUwdZ%2BtvStl9MwvDL6lIpfGTVwLrd%2FxvfqRQLZwvK0hYWGg%2Bab1ZXhb7Yz5hLb%2BM5EPNXdcJjBngtVhGGo%2BJl%2F0T99WNmuArDClgq6alVgB7goGwtTIBHjblMrozvCA5aRbN3EQDl%2Fuv9kF0B%2BY1ZONR21DsGhVtPBO7xqnY%2FvR6Ff4HOhRIbxqyYPhI4zzZYszmWLYL083UXE1te1HDdoqnF%2B4FjeI0CMIH%2Fw8MGOqUBO1h9Svf7W%2B3p1qYcIpR7dw23DfA4uzkUWh%2FwuLGVpIjJgusKLlsWEC6tgbzU18sWQ2nuPKj2042vY0rkzJthXOZjmHei1YBnOg2gzc%2BuXzUcy%2FxVL0R1s0takuscha8UUrK%2FccP8ZLuEeGHuT4SPdvLRbcrYddOJ%2Bw62VcEruTCxk4OHaPYFVHJVUq92DzirFDHd6Btc1Xy8%2FvQsPdkh3lyLAmHR&X-Amz-Signature=d84ddbad7747f7fe5845204d86604aa3001b1033e0d7230cf861b5382603ee15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F37IJEV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeV%2Foc5aTTXuofKRvc363r2r6OySWwz3fRy58vh6O3QgIgWIiWSHCSCbGTM6NJi01gRdCMG%2BCDhX0%2Bk2d9GUgMiUIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYZ3PnTu0pOKGWUvircAyhZlcgAi7eClK6hFwJtpSe1y7yA4R1w%2FXqeop8F0Ou9cxlWb%2B9u9%2BU2BRlunsuzCHycn2RlVulJoRMD9z7L6a8vZVbLayrygRdk7%2FvAJIPbNZkLXBnrchHY%2BCERVgtJUx2V%2BmVDHywWX3DBA2RMtIYb0e%2FdEnDz9dGECIN3VN2vnHIF3gJLmIX8jE5kxvcdXI9Q%2BtqAnedlDzuuRGHeUbXI9vqo%2FT3XlMKXbF4FvfJd7BIRHqq0297lW6vCumtY7qAofYgUJ%2FKZKs7%2BegLfz312iC1mnKlOONbk6qyRohDIbRxTav5zeF8NVRgWXMBt6OxAvoXIvNK%2ForiGFdSOgG%2F3hd1BCdAGi1K5GrYa5OZhTssXCLa5qTWL1jo649lGTFfkXyFl7q7%2BlpbG9itLgDNnXXmjUwdZ%2BtvStl9MwvDL6lIpfGTVwLrd%2FxvfqRQLZwvK0hYWGg%2Bab1ZXhb7Yz5hLb%2BM5EPNXdcJjBngtVhGGo%2BJl%2F0T99WNmuArDClgq6alVgB7goGwtTIBHjblMrozvCA5aRbN3EQDl%2Fuv9kF0B%2BY1ZONR21DsGhVtPBO7xqnY%2FvR6Ff4HOhRIbxqyYPhI4zzZYszmWLYL083UXE1te1HDdoqnF%2B4FjeI0CMIH%2Fw8MGOqUBO1h9Svf7W%2B3p1qYcIpR7dw23DfA4uzkUWh%2FwuLGVpIjJgusKLlsWEC6tgbzU18sWQ2nuPKj2042vY0rkzJthXOZjmHei1YBnOg2gzc%2BuXzUcy%2FxVL0R1s0takuscha8UUrK%2FccP8ZLuEeGHuT4SPdvLRbcrYddOJ%2Bw62VcEruTCxk4OHaPYFVHJVUq92DzirFDHd6Btc1Xy8%2FvQsPdkh3lyLAmHR&X-Amz-Signature=b36666cff273b805c269637c1d8df73a2e6b43c143c4a2ac5ccaa0e979eba7bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F37IJEV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeV%2Foc5aTTXuofKRvc363r2r6OySWwz3fRy58vh6O3QgIgWIiWSHCSCbGTM6NJi01gRdCMG%2BCDhX0%2Bk2d9GUgMiUIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYZ3PnTu0pOKGWUvircAyhZlcgAi7eClK6hFwJtpSe1y7yA4R1w%2FXqeop8F0Ou9cxlWb%2B9u9%2BU2BRlunsuzCHycn2RlVulJoRMD9z7L6a8vZVbLayrygRdk7%2FvAJIPbNZkLXBnrchHY%2BCERVgtJUx2V%2BmVDHywWX3DBA2RMtIYb0e%2FdEnDz9dGECIN3VN2vnHIF3gJLmIX8jE5kxvcdXI9Q%2BtqAnedlDzuuRGHeUbXI9vqo%2FT3XlMKXbF4FvfJd7BIRHqq0297lW6vCumtY7qAofYgUJ%2FKZKs7%2BegLfz312iC1mnKlOONbk6qyRohDIbRxTav5zeF8NVRgWXMBt6OxAvoXIvNK%2ForiGFdSOgG%2F3hd1BCdAGi1K5GrYa5OZhTssXCLa5qTWL1jo649lGTFfkXyFl7q7%2BlpbG9itLgDNnXXmjUwdZ%2BtvStl9MwvDL6lIpfGTVwLrd%2FxvfqRQLZwvK0hYWGg%2Bab1ZXhb7Yz5hLb%2BM5EPNXdcJjBngtVhGGo%2BJl%2F0T99WNmuArDClgq6alVgB7goGwtTIBHjblMrozvCA5aRbN3EQDl%2Fuv9kF0B%2BY1ZONR21DsGhVtPBO7xqnY%2FvR6Ff4HOhRIbxqyYPhI4zzZYszmWLYL083UXE1te1HDdoqnF%2B4FjeI0CMIH%2Fw8MGOqUBO1h9Svf7W%2B3p1qYcIpR7dw23DfA4uzkUWh%2FwuLGVpIjJgusKLlsWEC6tgbzU18sWQ2nuPKj2042vY0rkzJthXOZjmHei1YBnOg2gzc%2BuXzUcy%2FxVL0R1s0takuscha8UUrK%2FccP8ZLuEeGHuT4SPdvLRbcrYddOJ%2Bw62VcEruTCxk4OHaPYFVHJVUq92DzirFDHd6Btc1Xy8%2FvQsPdkh3lyLAmHR&X-Amz-Signature=2bb200df0cba17e5304ec48ac6357fc644cccbba1da2b8b7559a0fffe0282cd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F37IJEV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeV%2Foc5aTTXuofKRvc363r2r6OySWwz3fRy58vh6O3QgIgWIiWSHCSCbGTM6NJi01gRdCMG%2BCDhX0%2Bk2d9GUgMiUIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYZ3PnTu0pOKGWUvircAyhZlcgAi7eClK6hFwJtpSe1y7yA4R1w%2FXqeop8F0Ou9cxlWb%2B9u9%2BU2BRlunsuzCHycn2RlVulJoRMD9z7L6a8vZVbLayrygRdk7%2FvAJIPbNZkLXBnrchHY%2BCERVgtJUx2V%2BmVDHywWX3DBA2RMtIYb0e%2FdEnDz9dGECIN3VN2vnHIF3gJLmIX8jE5kxvcdXI9Q%2BtqAnedlDzuuRGHeUbXI9vqo%2FT3XlMKXbF4FvfJd7BIRHqq0297lW6vCumtY7qAofYgUJ%2FKZKs7%2BegLfz312iC1mnKlOONbk6qyRohDIbRxTav5zeF8NVRgWXMBt6OxAvoXIvNK%2ForiGFdSOgG%2F3hd1BCdAGi1K5GrYa5OZhTssXCLa5qTWL1jo649lGTFfkXyFl7q7%2BlpbG9itLgDNnXXmjUwdZ%2BtvStl9MwvDL6lIpfGTVwLrd%2FxvfqRQLZwvK0hYWGg%2Bab1ZXhb7Yz5hLb%2BM5EPNXdcJjBngtVhGGo%2BJl%2F0T99WNmuArDClgq6alVgB7goGwtTIBHjblMrozvCA5aRbN3EQDl%2Fuv9kF0B%2BY1ZONR21DsGhVtPBO7xqnY%2FvR6Ff4HOhRIbxqyYPhI4zzZYszmWLYL083UXE1te1HDdoqnF%2B4FjeI0CMIH%2Fw8MGOqUBO1h9Svf7W%2B3p1qYcIpR7dw23DfA4uzkUWh%2FwuLGVpIjJgusKLlsWEC6tgbzU18sWQ2nuPKj2042vY0rkzJthXOZjmHei1YBnOg2gzc%2BuXzUcy%2FxVL0R1s0takuscha8UUrK%2FccP8ZLuEeGHuT4SPdvLRbcrYddOJ%2Bw62VcEruTCxk4OHaPYFVHJVUq92DzirFDHd6Btc1Xy8%2FvQsPdkh3lyLAmHR&X-Amz-Signature=34086a2ee0e096ca7bad1369e0276f1846ef253c53795890a0828ef69d12ba20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F37IJEV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T132526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeV%2Foc5aTTXuofKRvc363r2r6OySWwz3fRy58vh6O3QgIgWIiWSHCSCbGTM6NJi01gRdCMG%2BCDhX0%2Bk2d9GUgMiUIqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYZ3PnTu0pOKGWUvircAyhZlcgAi7eClK6hFwJtpSe1y7yA4R1w%2FXqeop8F0Ou9cxlWb%2B9u9%2BU2BRlunsuzCHycn2RlVulJoRMD9z7L6a8vZVbLayrygRdk7%2FvAJIPbNZkLXBnrchHY%2BCERVgtJUx2V%2BmVDHywWX3DBA2RMtIYb0e%2FdEnDz9dGECIN3VN2vnHIF3gJLmIX8jE5kxvcdXI9Q%2BtqAnedlDzuuRGHeUbXI9vqo%2FT3XlMKXbF4FvfJd7BIRHqq0297lW6vCumtY7qAofYgUJ%2FKZKs7%2BegLfz312iC1mnKlOONbk6qyRohDIbRxTav5zeF8NVRgWXMBt6OxAvoXIvNK%2ForiGFdSOgG%2F3hd1BCdAGi1K5GrYa5OZhTssXCLa5qTWL1jo649lGTFfkXyFl7q7%2BlpbG9itLgDNnXXmjUwdZ%2BtvStl9MwvDL6lIpfGTVwLrd%2FxvfqRQLZwvK0hYWGg%2Bab1ZXhb7Yz5hLb%2BM5EPNXdcJjBngtVhGGo%2BJl%2F0T99WNmuArDClgq6alVgB7goGwtTIBHjblMrozvCA5aRbN3EQDl%2Fuv9kF0B%2BY1ZONR21DsGhVtPBO7xqnY%2FvR6Ff4HOhRIbxqyYPhI4zzZYszmWLYL083UXE1te1HDdoqnF%2B4FjeI0CMIH%2Fw8MGOqUBO1h9Svf7W%2B3p1qYcIpR7dw23DfA4uzkUWh%2FwuLGVpIjJgusKLlsWEC6tgbzU18sWQ2nuPKj2042vY0rkzJthXOZjmHei1YBnOg2gzc%2BuXzUcy%2FxVL0R1s0takuscha8UUrK%2FccP8ZLuEeGHuT4SPdvLRbcrYddOJ%2Bw62VcEruTCxk4OHaPYFVHJVUq92DzirFDHd6Btc1Xy8%2FvQsPdkh3lyLAmHR&X-Amz-Signature=eed831ef2952543dcccfe4576b4d2c9d07debd0cfcf63f487d5754862a844118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
