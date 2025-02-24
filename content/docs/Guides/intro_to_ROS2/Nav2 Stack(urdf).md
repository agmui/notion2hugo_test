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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPJZ2X2U%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYMnCsCONr%2Bu1SwZPMLcxdcjxU2m0MNeNXarUN%2BdD7QIgEsMxPVAOnlyPzzGmRxJFYFz%2FCq2Q1CN8hkVFF4ub34Eq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGSq88Xdkmi7cIAkIircA6zGQ8p6CRZWuylyTG11NeDoQ70Q06KvW033I6yq86BudQnJGf2rl1q6v%2B8T1oXLtBGNaDvV9axSt414LBvcqwAVfl7jqee5JKBcxoWzguy0pvKtwoIdBkU09rs801BHqcZhVsKcrCYyYAMgWb5bbVVd0nxzw52qyYpgCO3EJqNUP%2FVKs2IGUNNXol0fxN44wT0Bf84zowdyRRiAnrtE69%2BzRxgU6bNi5ODobJ1AJlraodhOL48KMYZefvePz8Osol88Z0XG2DaUEienVKtD8Tja525nMG3Xp6KJ1KPuophxQox4AL5V5HWb9xi6AykQc9HONjJfcgIkhs45hSmvMlymiKXR4mIZ8RY9%2FQ4Lyt3RBAeokNhiFOmz55fOvvDCoDa65r%2FpnEYtZ1ijC3STEHMhGZP7fUVZHyk79SeuObtN47zjaOwQzlmlCb3Fefdhj3VtM%2B76WWqlOFnU3nYoQPwKLlqEuE8g95ClgGae7N3EPqkmF%2BrYrp6NPMlWE%2B5srXJIJ%2F%2BDEbsRQPDfmioibf6%2FNG6gB%2FpRwUBZ5Nh4IX1SJhLACcad3LwP9vuyHlS85Aj%2FOkXR%2BrPBw3p0iAne%2FoKgBYgeC5zo0WuuEtGpVoXmCYlbLPZ1TxJ%2F81hyMI%2Bc8r0GOqUB5HX9kSZEaxCz5oiaIx6uFb4%2F0%2BYJXRWhWHqLjLhJ3Udw%2Bon7wAcLcncI3MDnxaPcto0No%2F8gGMNAQLWHU1RHZALFRETtJbhDoaWOaNf49rQda%2BPRatauxxLcXvgj%2Flz3nRyy1jkd4aQIPt2XeoTIJ%2BTJ%2BAmqeuVKbzh9eIdJR31C6se3DXhVZoPav6YgqUT7SB8QkDtpCHOTdMv2wfEcukQhmIXi&X-Amz-Signature=8461f9a37b88db2b95ea5a591b51e076d37cfcb1850f4babfaef7d290f69f9b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPJZ2X2U%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYMnCsCONr%2Bu1SwZPMLcxdcjxU2m0MNeNXarUN%2BdD7QIgEsMxPVAOnlyPzzGmRxJFYFz%2FCq2Q1CN8hkVFF4ub34Eq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGSq88Xdkmi7cIAkIircA6zGQ8p6CRZWuylyTG11NeDoQ70Q06KvW033I6yq86BudQnJGf2rl1q6v%2B8T1oXLtBGNaDvV9axSt414LBvcqwAVfl7jqee5JKBcxoWzguy0pvKtwoIdBkU09rs801BHqcZhVsKcrCYyYAMgWb5bbVVd0nxzw52qyYpgCO3EJqNUP%2FVKs2IGUNNXol0fxN44wT0Bf84zowdyRRiAnrtE69%2BzRxgU6bNi5ODobJ1AJlraodhOL48KMYZefvePz8Osol88Z0XG2DaUEienVKtD8Tja525nMG3Xp6KJ1KPuophxQox4AL5V5HWb9xi6AykQc9HONjJfcgIkhs45hSmvMlymiKXR4mIZ8RY9%2FQ4Lyt3RBAeokNhiFOmz55fOvvDCoDa65r%2FpnEYtZ1ijC3STEHMhGZP7fUVZHyk79SeuObtN47zjaOwQzlmlCb3Fefdhj3VtM%2B76WWqlOFnU3nYoQPwKLlqEuE8g95ClgGae7N3EPqkmF%2BrYrp6NPMlWE%2B5srXJIJ%2F%2BDEbsRQPDfmioibf6%2FNG6gB%2FpRwUBZ5Nh4IX1SJhLACcad3LwP9vuyHlS85Aj%2FOkXR%2BrPBw3p0iAne%2FoKgBYgeC5zo0WuuEtGpVoXmCYlbLPZ1TxJ%2F81hyMI%2Bc8r0GOqUB5HX9kSZEaxCz5oiaIx6uFb4%2F0%2BYJXRWhWHqLjLhJ3Udw%2Bon7wAcLcncI3MDnxaPcto0No%2F8gGMNAQLWHU1RHZALFRETtJbhDoaWOaNf49rQda%2BPRatauxxLcXvgj%2Flz3nRyy1jkd4aQIPt2XeoTIJ%2BTJ%2BAmqeuVKbzh9eIdJR31C6se3DXhVZoPav6YgqUT7SB8QkDtpCHOTdMv2wfEcukQhmIXi&X-Amz-Signature=c9e62acab754f0dc1a662d4d9b2a5f3677e6a9df69fb89dc15bd9afb4c42404b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPJZ2X2U%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYMnCsCONr%2Bu1SwZPMLcxdcjxU2m0MNeNXarUN%2BdD7QIgEsMxPVAOnlyPzzGmRxJFYFz%2FCq2Q1CN8hkVFF4ub34Eq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGSq88Xdkmi7cIAkIircA6zGQ8p6CRZWuylyTG11NeDoQ70Q06KvW033I6yq86BudQnJGf2rl1q6v%2B8T1oXLtBGNaDvV9axSt414LBvcqwAVfl7jqee5JKBcxoWzguy0pvKtwoIdBkU09rs801BHqcZhVsKcrCYyYAMgWb5bbVVd0nxzw52qyYpgCO3EJqNUP%2FVKs2IGUNNXol0fxN44wT0Bf84zowdyRRiAnrtE69%2BzRxgU6bNi5ODobJ1AJlraodhOL48KMYZefvePz8Osol88Z0XG2DaUEienVKtD8Tja525nMG3Xp6KJ1KPuophxQox4AL5V5HWb9xi6AykQc9HONjJfcgIkhs45hSmvMlymiKXR4mIZ8RY9%2FQ4Lyt3RBAeokNhiFOmz55fOvvDCoDa65r%2FpnEYtZ1ijC3STEHMhGZP7fUVZHyk79SeuObtN47zjaOwQzlmlCb3Fefdhj3VtM%2B76WWqlOFnU3nYoQPwKLlqEuE8g95ClgGae7N3EPqkmF%2BrYrp6NPMlWE%2B5srXJIJ%2F%2BDEbsRQPDfmioibf6%2FNG6gB%2FpRwUBZ5Nh4IX1SJhLACcad3LwP9vuyHlS85Aj%2FOkXR%2BrPBw3p0iAne%2FoKgBYgeC5zo0WuuEtGpVoXmCYlbLPZ1TxJ%2F81hyMI%2Bc8r0GOqUB5HX9kSZEaxCz5oiaIx6uFb4%2F0%2BYJXRWhWHqLjLhJ3Udw%2Bon7wAcLcncI3MDnxaPcto0No%2F8gGMNAQLWHU1RHZALFRETtJbhDoaWOaNf49rQda%2BPRatauxxLcXvgj%2Flz3nRyy1jkd4aQIPt2XeoTIJ%2BTJ%2BAmqeuVKbzh9eIdJR31C6se3DXhVZoPav6YgqUT7SB8QkDtpCHOTdMv2wfEcukQhmIXi&X-Amz-Signature=1a0afb03fd91e82e000188dff6093a4a536dc926bedd70635796f17a65932da8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPJZ2X2U%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYMnCsCONr%2Bu1SwZPMLcxdcjxU2m0MNeNXarUN%2BdD7QIgEsMxPVAOnlyPzzGmRxJFYFz%2FCq2Q1CN8hkVFF4ub34Eq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGSq88Xdkmi7cIAkIircA6zGQ8p6CRZWuylyTG11NeDoQ70Q06KvW033I6yq86BudQnJGf2rl1q6v%2B8T1oXLtBGNaDvV9axSt414LBvcqwAVfl7jqee5JKBcxoWzguy0pvKtwoIdBkU09rs801BHqcZhVsKcrCYyYAMgWb5bbVVd0nxzw52qyYpgCO3EJqNUP%2FVKs2IGUNNXol0fxN44wT0Bf84zowdyRRiAnrtE69%2BzRxgU6bNi5ODobJ1AJlraodhOL48KMYZefvePz8Osol88Z0XG2DaUEienVKtD8Tja525nMG3Xp6KJ1KPuophxQox4AL5V5HWb9xi6AykQc9HONjJfcgIkhs45hSmvMlymiKXR4mIZ8RY9%2FQ4Lyt3RBAeokNhiFOmz55fOvvDCoDa65r%2FpnEYtZ1ijC3STEHMhGZP7fUVZHyk79SeuObtN47zjaOwQzlmlCb3Fefdhj3VtM%2B76WWqlOFnU3nYoQPwKLlqEuE8g95ClgGae7N3EPqkmF%2BrYrp6NPMlWE%2B5srXJIJ%2F%2BDEbsRQPDfmioibf6%2FNG6gB%2FpRwUBZ5Nh4IX1SJhLACcad3LwP9vuyHlS85Aj%2FOkXR%2BrPBw3p0iAne%2FoKgBYgeC5zo0WuuEtGpVoXmCYlbLPZ1TxJ%2F81hyMI%2Bc8r0GOqUB5HX9kSZEaxCz5oiaIx6uFb4%2F0%2BYJXRWhWHqLjLhJ3Udw%2Bon7wAcLcncI3MDnxaPcto0No%2F8gGMNAQLWHU1RHZALFRETtJbhDoaWOaNf49rQda%2BPRatauxxLcXvgj%2Flz3nRyy1jkd4aQIPt2XeoTIJ%2BTJ%2BAmqeuVKbzh9eIdJR31C6se3DXhVZoPav6YgqUT7SB8QkDtpCHOTdMv2wfEcukQhmIXi&X-Amz-Signature=037064cacb939c8d83c1440cfd98334812e8909733bfdcaccafa8f57b2515d42&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPJZ2X2U%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYMnCsCONr%2Bu1SwZPMLcxdcjxU2m0MNeNXarUN%2BdD7QIgEsMxPVAOnlyPzzGmRxJFYFz%2FCq2Q1CN8hkVFF4ub34Eq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGSq88Xdkmi7cIAkIircA6zGQ8p6CRZWuylyTG11NeDoQ70Q06KvW033I6yq86BudQnJGf2rl1q6v%2B8T1oXLtBGNaDvV9axSt414LBvcqwAVfl7jqee5JKBcxoWzguy0pvKtwoIdBkU09rs801BHqcZhVsKcrCYyYAMgWb5bbVVd0nxzw52qyYpgCO3EJqNUP%2FVKs2IGUNNXol0fxN44wT0Bf84zowdyRRiAnrtE69%2BzRxgU6bNi5ODobJ1AJlraodhOL48KMYZefvePz8Osol88Z0XG2DaUEienVKtD8Tja525nMG3Xp6KJ1KPuophxQox4AL5V5HWb9xi6AykQc9HONjJfcgIkhs45hSmvMlymiKXR4mIZ8RY9%2FQ4Lyt3RBAeokNhiFOmz55fOvvDCoDa65r%2FpnEYtZ1ijC3STEHMhGZP7fUVZHyk79SeuObtN47zjaOwQzlmlCb3Fefdhj3VtM%2B76WWqlOFnU3nYoQPwKLlqEuE8g95ClgGae7N3EPqkmF%2BrYrp6NPMlWE%2B5srXJIJ%2F%2BDEbsRQPDfmioibf6%2FNG6gB%2FpRwUBZ5Nh4IX1SJhLACcad3LwP9vuyHlS85Aj%2FOkXR%2BrPBw3p0iAne%2FoKgBYgeC5zo0WuuEtGpVoXmCYlbLPZ1TxJ%2F81hyMI%2Bc8r0GOqUB5HX9kSZEaxCz5oiaIx6uFb4%2F0%2BYJXRWhWHqLjLhJ3Udw%2Bon7wAcLcncI3MDnxaPcto0No%2F8gGMNAQLWHU1RHZALFRETtJbhDoaWOaNf49rQda%2BPRatauxxLcXvgj%2Flz3nRyy1jkd4aQIPt2XeoTIJ%2BTJ%2BAmqeuVKbzh9eIdJR31C6se3DXhVZoPav6YgqUT7SB8QkDtpCHOTdMv2wfEcukQhmIXi&X-Amz-Signature=ab3e0c648c9065deef67f7e0fab8086e49bab6a52b04a907ee4d3037481ce180&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPJZ2X2U%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FYMnCsCONr%2Bu1SwZPMLcxdcjxU2m0MNeNXarUN%2BdD7QIgEsMxPVAOnlyPzzGmRxJFYFz%2FCq2Q1CN8hkVFF4ub34Eq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDGSq88Xdkmi7cIAkIircA6zGQ8p6CRZWuylyTG11NeDoQ70Q06KvW033I6yq86BudQnJGf2rl1q6v%2B8T1oXLtBGNaDvV9axSt414LBvcqwAVfl7jqee5JKBcxoWzguy0pvKtwoIdBkU09rs801BHqcZhVsKcrCYyYAMgWb5bbVVd0nxzw52qyYpgCO3EJqNUP%2FVKs2IGUNNXol0fxN44wT0Bf84zowdyRRiAnrtE69%2BzRxgU6bNi5ODobJ1AJlraodhOL48KMYZefvePz8Osol88Z0XG2DaUEienVKtD8Tja525nMG3Xp6KJ1KPuophxQox4AL5V5HWb9xi6AykQc9HONjJfcgIkhs45hSmvMlymiKXR4mIZ8RY9%2FQ4Lyt3RBAeokNhiFOmz55fOvvDCoDa65r%2FpnEYtZ1ijC3STEHMhGZP7fUVZHyk79SeuObtN47zjaOwQzlmlCb3Fefdhj3VtM%2B76WWqlOFnU3nYoQPwKLlqEuE8g95ClgGae7N3EPqkmF%2BrYrp6NPMlWE%2B5srXJIJ%2F%2BDEbsRQPDfmioibf6%2FNG6gB%2FpRwUBZ5Nh4IX1SJhLACcad3LwP9vuyHlS85Aj%2FOkXR%2BrPBw3p0iAne%2FoKgBYgeC5zo0WuuEtGpVoXmCYlbLPZ1TxJ%2F81hyMI%2Bc8r0GOqUB5HX9kSZEaxCz5oiaIx6uFb4%2F0%2BYJXRWhWHqLjLhJ3Udw%2Bon7wAcLcncI3MDnxaPcto0No%2F8gGMNAQLWHU1RHZALFRETtJbhDoaWOaNf49rQda%2BPRatauxxLcXvgj%2Flz3nRyy1jkd4aQIPt2XeoTIJ%2BTJ%2BAmqeuVKbzh9eIdJR31C6se3DXhVZoPav6YgqUT7SB8QkDtpCHOTdMv2wfEcukQhmIXi&X-Amz-Signature=2f6445680aa7432bd3861246654f34557140d297be89ace96c5af29ee29a095b&X-Amz-SignedHeaders=host&x-id=GetObject)
