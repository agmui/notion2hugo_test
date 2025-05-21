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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF4EXBOJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIEAWyzjnSeGd0Q1dGXXWEE3OjDFi1bugjY37ahfbODgjAiB%2FP3y8US7VDoz4LlwXYTfVbeVM7csh4YpiF10xNz8YZSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMakuzATRdl03QSxoSKtwD%2FaIhUkNs2CO%2BVqcocBJNgjawfD8uU0yyGYiuvXZbbogbId2VKwVESNI%2FxCwz%2BhS68QXJbBuzizBADWJU%2FOhrSe9iobAZIA8jJS7tsoBAx0%2FyS1G2NZsh%2FY9hdCo5cd8nBvsYe%2B%2FjShoAwHjWRBU0R40%2FGtzgds252fMV%2B6fikNB%2BKzyMpMa8A3rxRCgPNnfWIexNVsOPUdz5g2L8b5jhgP%2F9ZOvH36hQ%2BmA7GDiGhznxlaFZeF8CPuRa4uU%2BA6BS0MnkWLlUldp%2B8Xe2WzX9Zs31fsHqEO8cKq%2BUJRSBeOZGew0rNUONEoo6T3DJ%2BJlgkzAAzfUTWSnU2tVBpI1rkNdtUG4EVj1IkMfTcERkF6osSvbpXnsUlws%2BG9IBe%2BsUhhVN29l%2F2NIt0t%2F6Fk3QW8VXP4WcdTpwb9d%2FpP8MaJ3%2FPNi2BrOM1BK28BaV2oIU1ZKhPkb4x0sk3qaYPIatQurrdTdxeBzqXr7f5gZTvEs1%2F%2BT%2FhGnl4o0dnbyiQ20DW%2FOcZpMIpcCaPQqRcS6f8RqSgnCDz5n%2B7oEsMxBI1CzK6YckqVO1kQX6pDFqSzVx5UpJEpj7L8DdjBsW%2FU26uCoZGoVVcnV8PH0j8fv6aIlK46b2WZnsjSsWFqkwlO62wQY6pgGCsZbJpOGgQjsWSMXkCr6UGvR2pqXDzBVn7NgcjYlITkak1JyiInMriXVXwZuLiuayjReJiSx8B3Wq7cUQUC9SlPg2ppvuHze23goXCMhDkzWO0%2FAyNPUifZumQ3Qr%2BSBRPdOdgOd01xHUoLP4ewSk%2Fq9j0J%2B2wspPfJcM9%2Fc8BbdNEPvu00OdvecrLbx4vWeTkYsZpxr6EMwtrrMM7I3cyQ4dlerY&X-Amz-Signature=36c1c77e50b548333148bd7bec9c64952192d848a83ed947b06c2f528d6c8f59&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF4EXBOJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIEAWyzjnSeGd0Q1dGXXWEE3OjDFi1bugjY37ahfbODgjAiB%2FP3y8US7VDoz4LlwXYTfVbeVM7csh4YpiF10xNz8YZSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMakuzATRdl03QSxoSKtwD%2FaIhUkNs2CO%2BVqcocBJNgjawfD8uU0yyGYiuvXZbbogbId2VKwVESNI%2FxCwz%2BhS68QXJbBuzizBADWJU%2FOhrSe9iobAZIA8jJS7tsoBAx0%2FyS1G2NZsh%2FY9hdCo5cd8nBvsYe%2B%2FjShoAwHjWRBU0R40%2FGtzgds252fMV%2B6fikNB%2BKzyMpMa8A3rxRCgPNnfWIexNVsOPUdz5g2L8b5jhgP%2F9ZOvH36hQ%2BmA7GDiGhznxlaFZeF8CPuRa4uU%2BA6BS0MnkWLlUldp%2B8Xe2WzX9Zs31fsHqEO8cKq%2BUJRSBeOZGew0rNUONEoo6T3DJ%2BJlgkzAAzfUTWSnU2tVBpI1rkNdtUG4EVj1IkMfTcERkF6osSvbpXnsUlws%2BG9IBe%2BsUhhVN29l%2F2NIt0t%2F6Fk3QW8VXP4WcdTpwb9d%2FpP8MaJ3%2FPNi2BrOM1BK28BaV2oIU1ZKhPkb4x0sk3qaYPIatQurrdTdxeBzqXr7f5gZTvEs1%2F%2BT%2FhGnl4o0dnbyiQ20DW%2FOcZpMIpcCaPQqRcS6f8RqSgnCDz5n%2B7oEsMxBI1CzK6YckqVO1kQX6pDFqSzVx5UpJEpj7L8DdjBsW%2FU26uCoZGoVVcnV8PH0j8fv6aIlK46b2WZnsjSsWFqkwlO62wQY6pgGCsZbJpOGgQjsWSMXkCr6UGvR2pqXDzBVn7NgcjYlITkak1JyiInMriXVXwZuLiuayjReJiSx8B3Wq7cUQUC9SlPg2ppvuHze23goXCMhDkzWO0%2FAyNPUifZumQ3Qr%2BSBRPdOdgOd01xHUoLP4ewSk%2Fq9j0J%2B2wspPfJcM9%2Fc8BbdNEPvu00OdvecrLbx4vWeTkYsZpxr6EMwtrrMM7I3cyQ4dlerY&X-Amz-Signature=452cf1f593b664e1b7255160e1aa9af9492b801ec10964a49fab555252bbf610&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF4EXBOJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIEAWyzjnSeGd0Q1dGXXWEE3OjDFi1bugjY37ahfbODgjAiB%2FP3y8US7VDoz4LlwXYTfVbeVM7csh4YpiF10xNz8YZSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMakuzATRdl03QSxoSKtwD%2FaIhUkNs2CO%2BVqcocBJNgjawfD8uU0yyGYiuvXZbbogbId2VKwVESNI%2FxCwz%2BhS68QXJbBuzizBADWJU%2FOhrSe9iobAZIA8jJS7tsoBAx0%2FyS1G2NZsh%2FY9hdCo5cd8nBvsYe%2B%2FjShoAwHjWRBU0R40%2FGtzgds252fMV%2B6fikNB%2BKzyMpMa8A3rxRCgPNnfWIexNVsOPUdz5g2L8b5jhgP%2F9ZOvH36hQ%2BmA7GDiGhznxlaFZeF8CPuRa4uU%2BA6BS0MnkWLlUldp%2B8Xe2WzX9Zs31fsHqEO8cKq%2BUJRSBeOZGew0rNUONEoo6T3DJ%2BJlgkzAAzfUTWSnU2tVBpI1rkNdtUG4EVj1IkMfTcERkF6osSvbpXnsUlws%2BG9IBe%2BsUhhVN29l%2F2NIt0t%2F6Fk3QW8VXP4WcdTpwb9d%2FpP8MaJ3%2FPNi2BrOM1BK28BaV2oIU1ZKhPkb4x0sk3qaYPIatQurrdTdxeBzqXr7f5gZTvEs1%2F%2BT%2FhGnl4o0dnbyiQ20DW%2FOcZpMIpcCaPQqRcS6f8RqSgnCDz5n%2B7oEsMxBI1CzK6YckqVO1kQX6pDFqSzVx5UpJEpj7L8DdjBsW%2FU26uCoZGoVVcnV8PH0j8fv6aIlK46b2WZnsjSsWFqkwlO62wQY6pgGCsZbJpOGgQjsWSMXkCr6UGvR2pqXDzBVn7NgcjYlITkak1JyiInMriXVXwZuLiuayjReJiSx8B3Wq7cUQUC9SlPg2ppvuHze23goXCMhDkzWO0%2FAyNPUifZumQ3Qr%2BSBRPdOdgOd01xHUoLP4ewSk%2Fq9j0J%2B2wspPfJcM9%2Fc8BbdNEPvu00OdvecrLbx4vWeTkYsZpxr6EMwtrrMM7I3cyQ4dlerY&X-Amz-Signature=c847a5653f7377f31d3f2878e9770372758848f5af3dc8c4a5f91050ec0ddae2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF4EXBOJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIEAWyzjnSeGd0Q1dGXXWEE3OjDFi1bugjY37ahfbODgjAiB%2FP3y8US7VDoz4LlwXYTfVbeVM7csh4YpiF10xNz8YZSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMakuzATRdl03QSxoSKtwD%2FaIhUkNs2CO%2BVqcocBJNgjawfD8uU0yyGYiuvXZbbogbId2VKwVESNI%2FxCwz%2BhS68QXJbBuzizBADWJU%2FOhrSe9iobAZIA8jJS7tsoBAx0%2FyS1G2NZsh%2FY9hdCo5cd8nBvsYe%2B%2FjShoAwHjWRBU0R40%2FGtzgds252fMV%2B6fikNB%2BKzyMpMa8A3rxRCgPNnfWIexNVsOPUdz5g2L8b5jhgP%2F9ZOvH36hQ%2BmA7GDiGhznxlaFZeF8CPuRa4uU%2BA6BS0MnkWLlUldp%2B8Xe2WzX9Zs31fsHqEO8cKq%2BUJRSBeOZGew0rNUONEoo6T3DJ%2BJlgkzAAzfUTWSnU2tVBpI1rkNdtUG4EVj1IkMfTcERkF6osSvbpXnsUlws%2BG9IBe%2BsUhhVN29l%2F2NIt0t%2F6Fk3QW8VXP4WcdTpwb9d%2FpP8MaJ3%2FPNi2BrOM1BK28BaV2oIU1ZKhPkb4x0sk3qaYPIatQurrdTdxeBzqXr7f5gZTvEs1%2F%2BT%2FhGnl4o0dnbyiQ20DW%2FOcZpMIpcCaPQqRcS6f8RqSgnCDz5n%2B7oEsMxBI1CzK6YckqVO1kQX6pDFqSzVx5UpJEpj7L8DdjBsW%2FU26uCoZGoVVcnV8PH0j8fv6aIlK46b2WZnsjSsWFqkwlO62wQY6pgGCsZbJpOGgQjsWSMXkCr6UGvR2pqXDzBVn7NgcjYlITkak1JyiInMriXVXwZuLiuayjReJiSx8B3Wq7cUQUC9SlPg2ppvuHze23goXCMhDkzWO0%2FAyNPUifZumQ3Qr%2BSBRPdOdgOd01xHUoLP4ewSk%2Fq9j0J%2B2wspPfJcM9%2Fc8BbdNEPvu00OdvecrLbx4vWeTkYsZpxr6EMwtrrMM7I3cyQ4dlerY&X-Amz-Signature=0c80e97860a6bc72b4cc037548a5d60428b144e02bd2dca1257dd91d23572e66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF4EXBOJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIEAWyzjnSeGd0Q1dGXXWEE3OjDFi1bugjY37ahfbODgjAiB%2FP3y8US7VDoz4LlwXYTfVbeVM7csh4YpiF10xNz8YZSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMakuzATRdl03QSxoSKtwD%2FaIhUkNs2CO%2BVqcocBJNgjawfD8uU0yyGYiuvXZbbogbId2VKwVESNI%2FxCwz%2BhS68QXJbBuzizBADWJU%2FOhrSe9iobAZIA8jJS7tsoBAx0%2FyS1G2NZsh%2FY9hdCo5cd8nBvsYe%2B%2FjShoAwHjWRBU0R40%2FGtzgds252fMV%2B6fikNB%2BKzyMpMa8A3rxRCgPNnfWIexNVsOPUdz5g2L8b5jhgP%2F9ZOvH36hQ%2BmA7GDiGhznxlaFZeF8CPuRa4uU%2BA6BS0MnkWLlUldp%2B8Xe2WzX9Zs31fsHqEO8cKq%2BUJRSBeOZGew0rNUONEoo6T3DJ%2BJlgkzAAzfUTWSnU2tVBpI1rkNdtUG4EVj1IkMfTcERkF6osSvbpXnsUlws%2BG9IBe%2BsUhhVN29l%2F2NIt0t%2F6Fk3QW8VXP4WcdTpwb9d%2FpP8MaJ3%2FPNi2BrOM1BK28BaV2oIU1ZKhPkb4x0sk3qaYPIatQurrdTdxeBzqXr7f5gZTvEs1%2F%2BT%2FhGnl4o0dnbyiQ20DW%2FOcZpMIpcCaPQqRcS6f8RqSgnCDz5n%2B7oEsMxBI1CzK6YckqVO1kQX6pDFqSzVx5UpJEpj7L8DdjBsW%2FU26uCoZGoVVcnV8PH0j8fv6aIlK46b2WZnsjSsWFqkwlO62wQY6pgGCsZbJpOGgQjsWSMXkCr6UGvR2pqXDzBVn7NgcjYlITkak1JyiInMriXVXwZuLiuayjReJiSx8B3Wq7cUQUC9SlPg2ppvuHze23goXCMhDkzWO0%2FAyNPUifZumQ3Qr%2BSBRPdOdgOd01xHUoLP4ewSk%2Fq9j0J%2B2wspPfJcM9%2Fc8BbdNEPvu00OdvecrLbx4vWeTkYsZpxr6EMwtrrMM7I3cyQ4dlerY&X-Amz-Signature=beee2391a8986209ee53a3cba756968d47a036dc159fb547ae8dd4b016bc0f8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WF4EXBOJ%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIEAWyzjnSeGd0Q1dGXXWEE3OjDFi1bugjY37ahfbODgjAiB%2FP3y8US7VDoz4LlwXYTfVbeVM7csh4YpiF10xNz8YZSqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMakuzATRdl03QSxoSKtwD%2FaIhUkNs2CO%2BVqcocBJNgjawfD8uU0yyGYiuvXZbbogbId2VKwVESNI%2FxCwz%2BhS68QXJbBuzizBADWJU%2FOhrSe9iobAZIA8jJS7tsoBAx0%2FyS1G2NZsh%2FY9hdCo5cd8nBvsYe%2B%2FjShoAwHjWRBU0R40%2FGtzgds252fMV%2B6fikNB%2BKzyMpMa8A3rxRCgPNnfWIexNVsOPUdz5g2L8b5jhgP%2F9ZOvH36hQ%2BmA7GDiGhznxlaFZeF8CPuRa4uU%2BA6BS0MnkWLlUldp%2B8Xe2WzX9Zs31fsHqEO8cKq%2BUJRSBeOZGew0rNUONEoo6T3DJ%2BJlgkzAAzfUTWSnU2tVBpI1rkNdtUG4EVj1IkMfTcERkF6osSvbpXnsUlws%2BG9IBe%2BsUhhVN29l%2F2NIt0t%2F6Fk3QW8VXP4WcdTpwb9d%2FpP8MaJ3%2FPNi2BrOM1BK28BaV2oIU1ZKhPkb4x0sk3qaYPIatQurrdTdxeBzqXr7f5gZTvEs1%2F%2BT%2FhGnl4o0dnbyiQ20DW%2FOcZpMIpcCaPQqRcS6f8RqSgnCDz5n%2B7oEsMxBI1CzK6YckqVO1kQX6pDFqSzVx5UpJEpj7L8DdjBsW%2FU26uCoZGoVVcnV8PH0j8fv6aIlK46b2WZnsjSsWFqkwlO62wQY6pgGCsZbJpOGgQjsWSMXkCr6UGvR2pqXDzBVn7NgcjYlITkak1JyiInMriXVXwZuLiuayjReJiSx8B3Wq7cUQUC9SlPg2ppvuHze23goXCMhDkzWO0%2FAyNPUifZumQ3Qr%2BSBRPdOdgOd01xHUoLP4ewSk%2Fq9j0J%2B2wspPfJcM9%2Fc8BbdNEPvu00OdvecrLbx4vWeTkYsZpxr6EMwtrrMM7I3cyQ4dlerY&X-Amz-Signature=5795e91e676217ab48a1bbb1969e3488ef4b02faabbd1427b651d36766945ffb&X-Amz-SignedHeaders=host&x-id=GetObject)
