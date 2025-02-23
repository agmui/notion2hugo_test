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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDRBAOL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5YOmpInoNkFMXNPipv1kCNvt%2Bcs%2B6oSeGdYinbK09xAiBgxR5ttTeFFgkvg5w6YgqRpeeGsnGELon8FTLw8OVVNir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMoZ0Sq4UvYDhwnwCvKtwDjtJgQVJqldI8jG3J9U7UFUvT3Ognntf5JXsfqPRJWgFMPhydOiDUuJnBRe%2FraEEAgz4BIDB7XIMO54DuetoJjgeLA3NiVTBpsw%2Bvs9%2B0S2w13uyfpfaRCCwY3FY%2BzpqWNr9sM7JGhx4ZlvLiQuEh5TcuvJTGd%2FAFdRXhR%2FtKxnezQ2%2FlBO8IAEM6YlKRCRuJ5%2FhjSRmQCrB0ZjAFCRG18T6uTEY%2Bn1WcxckLRFlJ2kpEYgX9VdhPRnipv%2B6vK6FJbgzu1HnLzp0HTCOcfozN4wZo0zTgBEXUtS1TQuiy605DJjob2CQFWZFZW%2BXmzc0ivRCvk0EIUVRiLkDiBqzreuw08TbkeVA74mPtDekpqrNTzD3yTzwQMraygHOlFG0MBsp65tEOQWqwdFygJLvPvrINYNwAyaMPNNsry2paG2dKgw4XxO2qb1mAjRZivBL24S94UdSYZa%2F%2FLSVE4AdBaDkpPU6D7hyOvl8ilfRrvSMT44P3CUjaAO8RDcZZPNmYfpmfu22%2Bd878Re3Ujkiqy3OvNTyqPkxVjtBgI%2FdOK3LSvuUaFENFyGEd%2BFE2S35Cb1h6QvXo8n5%2BJ%2Fn3tvI8aLkbQ3d3f3PkB4YCgiCEviLh%2Bf42tZQuU6ShMnEwpfDrvQY6pgENwits7HRRof3ICubJbCOwfp0eo%2FjuidowbU%2FcnOjjuS%2FNXyOQeOTfcD5XU0udiBX5%2Flw5QZhlyNYoj0fSaL7XpaSswGzYJL70IvsFzl%2BczOfTITNVZTxlPzB1h%2BzKh2QByFtgAnyw4zFj1IAPFsJua1D5g%2F4F3t1e79P%2F4HDZpVJFzkjAsmGyqEIqk5elk4vva2NjRD5WN2lMzUt4djWKAtBZ%2FJ0c&X-Amz-Signature=749b61876358678165df1a317bd6b8e880be1734616892c0ad7e7fbb1dd5781a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDRBAOL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5YOmpInoNkFMXNPipv1kCNvt%2Bcs%2B6oSeGdYinbK09xAiBgxR5ttTeFFgkvg5w6YgqRpeeGsnGELon8FTLw8OVVNir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMoZ0Sq4UvYDhwnwCvKtwDjtJgQVJqldI8jG3J9U7UFUvT3Ognntf5JXsfqPRJWgFMPhydOiDUuJnBRe%2FraEEAgz4BIDB7XIMO54DuetoJjgeLA3NiVTBpsw%2Bvs9%2B0S2w13uyfpfaRCCwY3FY%2BzpqWNr9sM7JGhx4ZlvLiQuEh5TcuvJTGd%2FAFdRXhR%2FtKxnezQ2%2FlBO8IAEM6YlKRCRuJ5%2FhjSRmQCrB0ZjAFCRG18T6uTEY%2Bn1WcxckLRFlJ2kpEYgX9VdhPRnipv%2B6vK6FJbgzu1HnLzp0HTCOcfozN4wZo0zTgBEXUtS1TQuiy605DJjob2CQFWZFZW%2BXmzc0ivRCvk0EIUVRiLkDiBqzreuw08TbkeVA74mPtDekpqrNTzD3yTzwQMraygHOlFG0MBsp65tEOQWqwdFygJLvPvrINYNwAyaMPNNsry2paG2dKgw4XxO2qb1mAjRZivBL24S94UdSYZa%2F%2FLSVE4AdBaDkpPU6D7hyOvl8ilfRrvSMT44P3CUjaAO8RDcZZPNmYfpmfu22%2Bd878Re3Ujkiqy3OvNTyqPkxVjtBgI%2FdOK3LSvuUaFENFyGEd%2BFE2S35Cb1h6QvXo8n5%2BJ%2Fn3tvI8aLkbQ3d3f3PkB4YCgiCEviLh%2Bf42tZQuU6ShMnEwpfDrvQY6pgENwits7HRRof3ICubJbCOwfp0eo%2FjuidowbU%2FcnOjjuS%2FNXyOQeOTfcD5XU0udiBX5%2Flw5QZhlyNYoj0fSaL7XpaSswGzYJL70IvsFzl%2BczOfTITNVZTxlPzB1h%2BzKh2QByFtgAnyw4zFj1IAPFsJua1D5g%2F4F3t1e79P%2F4HDZpVJFzkjAsmGyqEIqk5elk4vva2NjRD5WN2lMzUt4djWKAtBZ%2FJ0c&X-Amz-Signature=d298e8a4920813b0f7804c369a4342146a98c35d3417f103a8dac854ae14d438&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDRBAOL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5YOmpInoNkFMXNPipv1kCNvt%2Bcs%2B6oSeGdYinbK09xAiBgxR5ttTeFFgkvg5w6YgqRpeeGsnGELon8FTLw8OVVNir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMoZ0Sq4UvYDhwnwCvKtwDjtJgQVJqldI8jG3J9U7UFUvT3Ognntf5JXsfqPRJWgFMPhydOiDUuJnBRe%2FraEEAgz4BIDB7XIMO54DuetoJjgeLA3NiVTBpsw%2Bvs9%2B0S2w13uyfpfaRCCwY3FY%2BzpqWNr9sM7JGhx4ZlvLiQuEh5TcuvJTGd%2FAFdRXhR%2FtKxnezQ2%2FlBO8IAEM6YlKRCRuJ5%2FhjSRmQCrB0ZjAFCRG18T6uTEY%2Bn1WcxckLRFlJ2kpEYgX9VdhPRnipv%2B6vK6FJbgzu1HnLzp0HTCOcfozN4wZo0zTgBEXUtS1TQuiy605DJjob2CQFWZFZW%2BXmzc0ivRCvk0EIUVRiLkDiBqzreuw08TbkeVA74mPtDekpqrNTzD3yTzwQMraygHOlFG0MBsp65tEOQWqwdFygJLvPvrINYNwAyaMPNNsry2paG2dKgw4XxO2qb1mAjRZivBL24S94UdSYZa%2F%2FLSVE4AdBaDkpPU6D7hyOvl8ilfRrvSMT44P3CUjaAO8RDcZZPNmYfpmfu22%2Bd878Re3Ujkiqy3OvNTyqPkxVjtBgI%2FdOK3LSvuUaFENFyGEd%2BFE2S35Cb1h6QvXo8n5%2BJ%2Fn3tvI8aLkbQ3d3f3PkB4YCgiCEviLh%2Bf42tZQuU6ShMnEwpfDrvQY6pgENwits7HRRof3ICubJbCOwfp0eo%2FjuidowbU%2FcnOjjuS%2FNXyOQeOTfcD5XU0udiBX5%2Flw5QZhlyNYoj0fSaL7XpaSswGzYJL70IvsFzl%2BczOfTITNVZTxlPzB1h%2BzKh2QByFtgAnyw4zFj1IAPFsJua1D5g%2F4F3t1e79P%2F4HDZpVJFzkjAsmGyqEIqk5elk4vva2NjRD5WN2lMzUt4djWKAtBZ%2FJ0c&X-Amz-Signature=e5dce13e83d391375284aa3d6c4592bdc2a5417f2953a646ede9f4522afc41f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDRBAOL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5YOmpInoNkFMXNPipv1kCNvt%2Bcs%2B6oSeGdYinbK09xAiBgxR5ttTeFFgkvg5w6YgqRpeeGsnGELon8FTLw8OVVNir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMoZ0Sq4UvYDhwnwCvKtwDjtJgQVJqldI8jG3J9U7UFUvT3Ognntf5JXsfqPRJWgFMPhydOiDUuJnBRe%2FraEEAgz4BIDB7XIMO54DuetoJjgeLA3NiVTBpsw%2Bvs9%2B0S2w13uyfpfaRCCwY3FY%2BzpqWNr9sM7JGhx4ZlvLiQuEh5TcuvJTGd%2FAFdRXhR%2FtKxnezQ2%2FlBO8IAEM6YlKRCRuJ5%2FhjSRmQCrB0ZjAFCRG18T6uTEY%2Bn1WcxckLRFlJ2kpEYgX9VdhPRnipv%2B6vK6FJbgzu1HnLzp0HTCOcfozN4wZo0zTgBEXUtS1TQuiy605DJjob2CQFWZFZW%2BXmzc0ivRCvk0EIUVRiLkDiBqzreuw08TbkeVA74mPtDekpqrNTzD3yTzwQMraygHOlFG0MBsp65tEOQWqwdFygJLvPvrINYNwAyaMPNNsry2paG2dKgw4XxO2qb1mAjRZivBL24S94UdSYZa%2F%2FLSVE4AdBaDkpPU6D7hyOvl8ilfRrvSMT44P3CUjaAO8RDcZZPNmYfpmfu22%2Bd878Re3Ujkiqy3OvNTyqPkxVjtBgI%2FdOK3LSvuUaFENFyGEd%2BFE2S35Cb1h6QvXo8n5%2BJ%2Fn3tvI8aLkbQ3d3f3PkB4YCgiCEviLh%2Bf42tZQuU6ShMnEwpfDrvQY6pgENwits7HRRof3ICubJbCOwfp0eo%2FjuidowbU%2FcnOjjuS%2FNXyOQeOTfcD5XU0udiBX5%2Flw5QZhlyNYoj0fSaL7XpaSswGzYJL70IvsFzl%2BczOfTITNVZTxlPzB1h%2BzKh2QByFtgAnyw4zFj1IAPFsJua1D5g%2F4F3t1e79P%2F4HDZpVJFzkjAsmGyqEIqk5elk4vva2NjRD5WN2lMzUt4djWKAtBZ%2FJ0c&X-Amz-Signature=24fe9556883af8e642b8ee41fac1e70addf2ba83f7496e1c28b7eee495cef653&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDRBAOL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5YOmpInoNkFMXNPipv1kCNvt%2Bcs%2B6oSeGdYinbK09xAiBgxR5ttTeFFgkvg5w6YgqRpeeGsnGELon8FTLw8OVVNir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMoZ0Sq4UvYDhwnwCvKtwDjtJgQVJqldI8jG3J9U7UFUvT3Ognntf5JXsfqPRJWgFMPhydOiDUuJnBRe%2FraEEAgz4BIDB7XIMO54DuetoJjgeLA3NiVTBpsw%2Bvs9%2B0S2w13uyfpfaRCCwY3FY%2BzpqWNr9sM7JGhx4ZlvLiQuEh5TcuvJTGd%2FAFdRXhR%2FtKxnezQ2%2FlBO8IAEM6YlKRCRuJ5%2FhjSRmQCrB0ZjAFCRG18T6uTEY%2Bn1WcxckLRFlJ2kpEYgX9VdhPRnipv%2B6vK6FJbgzu1HnLzp0HTCOcfozN4wZo0zTgBEXUtS1TQuiy605DJjob2CQFWZFZW%2BXmzc0ivRCvk0EIUVRiLkDiBqzreuw08TbkeVA74mPtDekpqrNTzD3yTzwQMraygHOlFG0MBsp65tEOQWqwdFygJLvPvrINYNwAyaMPNNsry2paG2dKgw4XxO2qb1mAjRZivBL24S94UdSYZa%2F%2FLSVE4AdBaDkpPU6D7hyOvl8ilfRrvSMT44P3CUjaAO8RDcZZPNmYfpmfu22%2Bd878Re3Ujkiqy3OvNTyqPkxVjtBgI%2FdOK3LSvuUaFENFyGEd%2BFE2S35Cb1h6QvXo8n5%2BJ%2Fn3tvI8aLkbQ3d3f3PkB4YCgiCEviLh%2Bf42tZQuU6ShMnEwpfDrvQY6pgENwits7HRRof3ICubJbCOwfp0eo%2FjuidowbU%2FcnOjjuS%2FNXyOQeOTfcD5XU0udiBX5%2Flw5QZhlyNYoj0fSaL7XpaSswGzYJL70IvsFzl%2BczOfTITNVZTxlPzB1h%2BzKh2QByFtgAnyw4zFj1IAPFsJua1D5g%2F4F3t1e79P%2F4HDZpVJFzkjAsmGyqEIqk5elk4vva2NjRD5WN2lMzUt4djWKAtBZ%2FJ0c&X-Amz-Signature=325609c66457fcf35b9e800627bf53f0588fe2b4efe38c63594c4f85dfead85b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VDRBAOL%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T150431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5YOmpInoNkFMXNPipv1kCNvt%2Bcs%2B6oSeGdYinbK09xAiBgxR5ttTeFFgkvg5w6YgqRpeeGsnGELon8FTLw8OVVNir%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMoZ0Sq4UvYDhwnwCvKtwDjtJgQVJqldI8jG3J9U7UFUvT3Ognntf5JXsfqPRJWgFMPhydOiDUuJnBRe%2FraEEAgz4BIDB7XIMO54DuetoJjgeLA3NiVTBpsw%2Bvs9%2B0S2w13uyfpfaRCCwY3FY%2BzpqWNr9sM7JGhx4ZlvLiQuEh5TcuvJTGd%2FAFdRXhR%2FtKxnezQ2%2FlBO8IAEM6YlKRCRuJ5%2FhjSRmQCrB0ZjAFCRG18T6uTEY%2Bn1WcxckLRFlJ2kpEYgX9VdhPRnipv%2B6vK6FJbgzu1HnLzp0HTCOcfozN4wZo0zTgBEXUtS1TQuiy605DJjob2CQFWZFZW%2BXmzc0ivRCvk0EIUVRiLkDiBqzreuw08TbkeVA74mPtDekpqrNTzD3yTzwQMraygHOlFG0MBsp65tEOQWqwdFygJLvPvrINYNwAyaMPNNsry2paG2dKgw4XxO2qb1mAjRZivBL24S94UdSYZa%2F%2FLSVE4AdBaDkpPU6D7hyOvl8ilfRrvSMT44P3CUjaAO8RDcZZPNmYfpmfu22%2Bd878Re3Ujkiqy3OvNTyqPkxVjtBgI%2FdOK3LSvuUaFENFyGEd%2BFE2S35Cb1h6QvXo8n5%2BJ%2Fn3tvI8aLkbQ3d3f3PkB4YCgiCEviLh%2Bf42tZQuU6ShMnEwpfDrvQY6pgENwits7HRRof3ICubJbCOwfp0eo%2FjuidowbU%2FcnOjjuS%2FNXyOQeOTfcD5XU0udiBX5%2Flw5QZhlyNYoj0fSaL7XpaSswGzYJL70IvsFzl%2BczOfTITNVZTxlPzB1h%2BzKh2QByFtgAnyw4zFj1IAPFsJua1D5g%2F4F3t1e79P%2F4HDZpVJFzkjAsmGyqEIqk5elk4vva2NjRD5WN2lMzUt4djWKAtBZ%2FJ0c&X-Amz-Signature=bc739055d35e2fe090aea14f9dff85bd05f4144a8111843960d3f1cedd549ea2&X-Amz-SignedHeaders=host&x-id=GetObject)
