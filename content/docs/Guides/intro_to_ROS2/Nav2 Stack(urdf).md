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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHCGHJT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjnXvJDBzCN0g%2FsWj5u97MwAfLnK019nH9ZqKgLDNhpAiApMl1%2B9i6zEOQD9%2FgsPkJqezIuV5dxSSRreGISI99izSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM%2F7fZlDVuP7cAd6gwKtwDIr0KgvDsewGpGJJCH0uUGYSxXBdHivDd4ASMNnAN%2B01DKko7ybomX%2F3jsPn9NfTAoNO2Gm245L6%2BHORxbGa%2BneN9hrwjfXkpcPYk51YSywHAJcZ09bgNXTJ%2FsHVa1htPor9WJE0r0kD%2Be8phDvxwdVY2wll2U%2BI6cZk6VjSFiNUAgeP3pS4wfcH1Pt%2Fa8JVt69B4lyp%2BBILjy6yS0Qcma9oe%2FF5sdvXI1C2zNJSuV%2FpvcIRAyDm%2BmhH6%2FSWTqdBzdHSTNHmGjN0nU35%2B63n1WGeGSjE0Hjk1CR5z0qAithTCQ9jeGFbHdztmSghSMyA1E67I19z%2BKRONQN8PhG7dIqUBn6iDmgMFmFav%2F7doJYXtH7O%2BxxtfnKH5NomLLOp%2B%2F1Ak4tvpRRAfm72EFfQJLg%2FcZN8TGWZm0iHL9w6tr4JhGipEVGtB2yvA5HZugSNCcBg6EOIAoK0Mkcfz3sNrll2lGGpyQJarjNgH5AGM%2B6bC0EvUK8Ksbo4F9I5Lw6dwpo5sXP86JW9b7A7aXFZxUTWUE8yEa1doNCje%2BJ50DYTX5egAnRTyvAOHDbSPNdO0WwFMW2qZKp8p1GPtEarQE5m5pPz1yO%2BA34B1XqltNWl0nZ42gyQBJgwDpG4wqrrOvwY6pgHtFx7VdPP5U2yD2L6r3iLDy82%2By%2BFMgSFE2phjj0DNzm3sCFDokzBRauv5NELjpkucOiGTzMAyPMYL9gpDswpFu5r2L%2FB977xEEC%2FIKO%2BmEEA%2BWQz2LHBbOTMWGw1rv9Q5FpV82O19x6KL2ef2xvmijeiYQifu8CFOFsdmcEdo3D5IUdrLNan0VG2D%2FpR2aMUa2MAqvx4nN5l3rwA%2BtOJogchVaqbR&X-Amz-Signature=b2fbe64ffe47f617eaf61120c06e96c3b6e208e8f0f0704ee991741259d239c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHCGHJT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjnXvJDBzCN0g%2FsWj5u97MwAfLnK019nH9ZqKgLDNhpAiApMl1%2B9i6zEOQD9%2FgsPkJqezIuV5dxSSRreGISI99izSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM%2F7fZlDVuP7cAd6gwKtwDIr0KgvDsewGpGJJCH0uUGYSxXBdHivDd4ASMNnAN%2B01DKko7ybomX%2F3jsPn9NfTAoNO2Gm245L6%2BHORxbGa%2BneN9hrwjfXkpcPYk51YSywHAJcZ09bgNXTJ%2FsHVa1htPor9WJE0r0kD%2Be8phDvxwdVY2wll2U%2BI6cZk6VjSFiNUAgeP3pS4wfcH1Pt%2Fa8JVt69B4lyp%2BBILjy6yS0Qcma9oe%2FF5sdvXI1C2zNJSuV%2FpvcIRAyDm%2BmhH6%2FSWTqdBzdHSTNHmGjN0nU35%2B63n1WGeGSjE0Hjk1CR5z0qAithTCQ9jeGFbHdztmSghSMyA1E67I19z%2BKRONQN8PhG7dIqUBn6iDmgMFmFav%2F7doJYXtH7O%2BxxtfnKH5NomLLOp%2B%2F1Ak4tvpRRAfm72EFfQJLg%2FcZN8TGWZm0iHL9w6tr4JhGipEVGtB2yvA5HZugSNCcBg6EOIAoK0Mkcfz3sNrll2lGGpyQJarjNgH5AGM%2B6bC0EvUK8Ksbo4F9I5Lw6dwpo5sXP86JW9b7A7aXFZxUTWUE8yEa1doNCje%2BJ50DYTX5egAnRTyvAOHDbSPNdO0WwFMW2qZKp8p1GPtEarQE5m5pPz1yO%2BA34B1XqltNWl0nZ42gyQBJgwDpG4wqrrOvwY6pgHtFx7VdPP5U2yD2L6r3iLDy82%2By%2BFMgSFE2phjj0DNzm3sCFDokzBRauv5NELjpkucOiGTzMAyPMYL9gpDswpFu5r2L%2FB977xEEC%2FIKO%2BmEEA%2BWQz2LHBbOTMWGw1rv9Q5FpV82O19x6KL2ef2xvmijeiYQifu8CFOFsdmcEdo3D5IUdrLNan0VG2D%2FpR2aMUa2MAqvx4nN5l3rwA%2BtOJogchVaqbR&X-Amz-Signature=40fdb41b8cf344457a09d3fabc4b91c0a5174e3b7e1fcbc0d7f3f02997c0d6a0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHCGHJT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjnXvJDBzCN0g%2FsWj5u97MwAfLnK019nH9ZqKgLDNhpAiApMl1%2B9i6zEOQD9%2FgsPkJqezIuV5dxSSRreGISI99izSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM%2F7fZlDVuP7cAd6gwKtwDIr0KgvDsewGpGJJCH0uUGYSxXBdHivDd4ASMNnAN%2B01DKko7ybomX%2F3jsPn9NfTAoNO2Gm245L6%2BHORxbGa%2BneN9hrwjfXkpcPYk51YSywHAJcZ09bgNXTJ%2FsHVa1htPor9WJE0r0kD%2Be8phDvxwdVY2wll2U%2BI6cZk6VjSFiNUAgeP3pS4wfcH1Pt%2Fa8JVt69B4lyp%2BBILjy6yS0Qcma9oe%2FF5sdvXI1C2zNJSuV%2FpvcIRAyDm%2BmhH6%2FSWTqdBzdHSTNHmGjN0nU35%2B63n1WGeGSjE0Hjk1CR5z0qAithTCQ9jeGFbHdztmSghSMyA1E67I19z%2BKRONQN8PhG7dIqUBn6iDmgMFmFav%2F7doJYXtH7O%2BxxtfnKH5NomLLOp%2B%2F1Ak4tvpRRAfm72EFfQJLg%2FcZN8TGWZm0iHL9w6tr4JhGipEVGtB2yvA5HZugSNCcBg6EOIAoK0Mkcfz3sNrll2lGGpyQJarjNgH5AGM%2B6bC0EvUK8Ksbo4F9I5Lw6dwpo5sXP86JW9b7A7aXFZxUTWUE8yEa1doNCje%2BJ50DYTX5egAnRTyvAOHDbSPNdO0WwFMW2qZKp8p1GPtEarQE5m5pPz1yO%2BA34B1XqltNWl0nZ42gyQBJgwDpG4wqrrOvwY6pgHtFx7VdPP5U2yD2L6r3iLDy82%2By%2BFMgSFE2phjj0DNzm3sCFDokzBRauv5NELjpkucOiGTzMAyPMYL9gpDswpFu5r2L%2FB977xEEC%2FIKO%2BmEEA%2BWQz2LHBbOTMWGw1rv9Q5FpV82O19x6KL2ef2xvmijeiYQifu8CFOFsdmcEdo3D5IUdrLNan0VG2D%2FpR2aMUa2MAqvx4nN5l3rwA%2BtOJogchVaqbR&X-Amz-Signature=aa647cb07cfdf60a57d8c4f41eaabb4bbef04193563786b409aacc5f2df9f158&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHCGHJT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjnXvJDBzCN0g%2FsWj5u97MwAfLnK019nH9ZqKgLDNhpAiApMl1%2B9i6zEOQD9%2FgsPkJqezIuV5dxSSRreGISI99izSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM%2F7fZlDVuP7cAd6gwKtwDIr0KgvDsewGpGJJCH0uUGYSxXBdHivDd4ASMNnAN%2B01DKko7ybomX%2F3jsPn9NfTAoNO2Gm245L6%2BHORxbGa%2BneN9hrwjfXkpcPYk51YSywHAJcZ09bgNXTJ%2FsHVa1htPor9WJE0r0kD%2Be8phDvxwdVY2wll2U%2BI6cZk6VjSFiNUAgeP3pS4wfcH1Pt%2Fa8JVt69B4lyp%2BBILjy6yS0Qcma9oe%2FF5sdvXI1C2zNJSuV%2FpvcIRAyDm%2BmhH6%2FSWTqdBzdHSTNHmGjN0nU35%2B63n1WGeGSjE0Hjk1CR5z0qAithTCQ9jeGFbHdztmSghSMyA1E67I19z%2BKRONQN8PhG7dIqUBn6iDmgMFmFav%2F7doJYXtH7O%2BxxtfnKH5NomLLOp%2B%2F1Ak4tvpRRAfm72EFfQJLg%2FcZN8TGWZm0iHL9w6tr4JhGipEVGtB2yvA5HZugSNCcBg6EOIAoK0Mkcfz3sNrll2lGGpyQJarjNgH5AGM%2B6bC0EvUK8Ksbo4F9I5Lw6dwpo5sXP86JW9b7A7aXFZxUTWUE8yEa1doNCje%2BJ50DYTX5egAnRTyvAOHDbSPNdO0WwFMW2qZKp8p1GPtEarQE5m5pPz1yO%2BA34B1XqltNWl0nZ42gyQBJgwDpG4wqrrOvwY6pgHtFx7VdPP5U2yD2L6r3iLDy82%2By%2BFMgSFE2phjj0DNzm3sCFDokzBRauv5NELjpkucOiGTzMAyPMYL9gpDswpFu5r2L%2FB977xEEC%2FIKO%2BmEEA%2BWQz2LHBbOTMWGw1rv9Q5FpV82O19x6KL2ef2xvmijeiYQifu8CFOFsdmcEdo3D5IUdrLNan0VG2D%2FpR2aMUa2MAqvx4nN5l3rwA%2BtOJogchVaqbR&X-Amz-Signature=cd6d478f015e6ee80c72de294836417c758c0ffcaf1eee1c08b2d9d8d3fc899d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHCGHJT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjnXvJDBzCN0g%2FsWj5u97MwAfLnK019nH9ZqKgLDNhpAiApMl1%2B9i6zEOQD9%2FgsPkJqezIuV5dxSSRreGISI99izSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM%2F7fZlDVuP7cAd6gwKtwDIr0KgvDsewGpGJJCH0uUGYSxXBdHivDd4ASMNnAN%2B01DKko7ybomX%2F3jsPn9NfTAoNO2Gm245L6%2BHORxbGa%2BneN9hrwjfXkpcPYk51YSywHAJcZ09bgNXTJ%2FsHVa1htPor9WJE0r0kD%2Be8phDvxwdVY2wll2U%2BI6cZk6VjSFiNUAgeP3pS4wfcH1Pt%2Fa8JVt69B4lyp%2BBILjy6yS0Qcma9oe%2FF5sdvXI1C2zNJSuV%2FpvcIRAyDm%2BmhH6%2FSWTqdBzdHSTNHmGjN0nU35%2B63n1WGeGSjE0Hjk1CR5z0qAithTCQ9jeGFbHdztmSghSMyA1E67I19z%2BKRONQN8PhG7dIqUBn6iDmgMFmFav%2F7doJYXtH7O%2BxxtfnKH5NomLLOp%2B%2F1Ak4tvpRRAfm72EFfQJLg%2FcZN8TGWZm0iHL9w6tr4JhGipEVGtB2yvA5HZugSNCcBg6EOIAoK0Mkcfz3sNrll2lGGpyQJarjNgH5AGM%2B6bC0EvUK8Ksbo4F9I5Lw6dwpo5sXP86JW9b7A7aXFZxUTWUE8yEa1doNCje%2BJ50DYTX5egAnRTyvAOHDbSPNdO0WwFMW2qZKp8p1GPtEarQE5m5pPz1yO%2BA34B1XqltNWl0nZ42gyQBJgwDpG4wqrrOvwY6pgHtFx7VdPP5U2yD2L6r3iLDy82%2By%2BFMgSFE2phjj0DNzm3sCFDokzBRauv5NELjpkucOiGTzMAyPMYL9gpDswpFu5r2L%2FB977xEEC%2FIKO%2BmEEA%2BWQz2LHBbOTMWGw1rv9Q5FpV82O19x6KL2ef2xvmijeiYQifu8CFOFsdmcEdo3D5IUdrLNan0VG2D%2FpR2aMUa2MAqvx4nN5l3rwA%2BtOJogchVaqbR&X-Amz-Signature=7eddd26c77bcb1f303ee3dce681b4dac5d10005c4cdd4b8e8a7031588943e3f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SHCGHJT%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICjnXvJDBzCN0g%2FsWj5u97MwAfLnK019nH9ZqKgLDNhpAiApMl1%2B9i6zEOQD9%2FgsPkJqezIuV5dxSSRreGISI99izSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM%2F7fZlDVuP7cAd6gwKtwDIr0KgvDsewGpGJJCH0uUGYSxXBdHivDd4ASMNnAN%2B01DKko7ybomX%2F3jsPn9NfTAoNO2Gm245L6%2BHORxbGa%2BneN9hrwjfXkpcPYk51YSywHAJcZ09bgNXTJ%2FsHVa1htPor9WJE0r0kD%2Be8phDvxwdVY2wll2U%2BI6cZk6VjSFiNUAgeP3pS4wfcH1Pt%2Fa8JVt69B4lyp%2BBILjy6yS0Qcma9oe%2FF5sdvXI1C2zNJSuV%2FpvcIRAyDm%2BmhH6%2FSWTqdBzdHSTNHmGjN0nU35%2B63n1WGeGSjE0Hjk1CR5z0qAithTCQ9jeGFbHdztmSghSMyA1E67I19z%2BKRONQN8PhG7dIqUBn6iDmgMFmFav%2F7doJYXtH7O%2BxxtfnKH5NomLLOp%2B%2F1Ak4tvpRRAfm72EFfQJLg%2FcZN8TGWZm0iHL9w6tr4JhGipEVGtB2yvA5HZugSNCcBg6EOIAoK0Mkcfz3sNrll2lGGpyQJarjNgH5AGM%2B6bC0EvUK8Ksbo4F9I5Lw6dwpo5sXP86JW9b7A7aXFZxUTWUE8yEa1doNCje%2BJ50DYTX5egAnRTyvAOHDbSPNdO0WwFMW2qZKp8p1GPtEarQE5m5pPz1yO%2BA34B1XqltNWl0nZ42gyQBJgwDpG4wqrrOvwY6pgHtFx7VdPP5U2yD2L6r3iLDy82%2By%2BFMgSFE2phjj0DNzm3sCFDokzBRauv5NELjpkucOiGTzMAyPMYL9gpDswpFu5r2L%2FB977xEEC%2FIKO%2BmEEA%2BWQz2LHBbOTMWGw1rv9Q5FpV82O19x6KL2ef2xvmijeiYQifu8CFOFsdmcEdo3D5IUdrLNan0VG2D%2FpR2aMUa2MAqvx4nN5l3rwA%2BtOJogchVaqbR&X-Amz-Signature=23ead58f1ed66620afd9ffaa13c36bf45751b30330f4d5835332f1fb9d2d8925&X-Amz-SignedHeaders=host&x-id=GetObject)
