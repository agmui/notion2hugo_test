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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA26ERZU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAGp9Sxr8%2BwIgHRO9zY8qe2dpT2lU4O4EAh%2FlnbDlx5AiEAuumpWfoC%2FlBcF3E8tbzXiUcMm9yuIg6%2FdvmlqhXkbO0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQGSEXW24ml4CdlFyrcAzNcBi%2ByPGNoAR5LblmevQ2UMxAILT8vf5LHMpvmGBOzR7qp53jA7%2FHLTolJ%2F%2F%2FsDngvtMpBfk9%2B5np184ChisX2pynlhfHdwp1w3RrryZovc4u24V6TOG%2BAgJWM6HiS9Dc5N%2BBaog6vNvpyje7FEWX41f31rspLWRLbwMxi2rhWiSJGoqdSLKaAm9EnY%2BOsJiAI4jLEB70p5wquWe7DYc0YdOGlLahTb8j%2B0ZEINUiIuPrP4UKucSEUAaAWYg9736p%2FpuS54jEjUh1EorbIlGBL%2BMOEMThVkAaIMWfAiVJeFfqeGDB2MyVWjZKRoPayQZ7lq337Xjnp5YE3gyGYBFBb%2ByYvxzGCYtrT0SRt4Ief6bT0N0TaAmIdmkJLh4RL%2BwTvmu%2Fo0nTCtQjUsNe03xTlixWrvjLe%2F%2FebDqso%2FsPfs1Riux%2FYFj420utkTEtv4z7eoohDXpcoWxy6H%2F8mflweOa%2B79zXsGfxA%2BZ6Kuxi3gbKK4qyloxa2ea1UsJcr3o0Vhd8T7cTaIhoN1AmFUsOvcHtuuSg5k%2By0AUwquirMAjgFt3tU3hF4%2FMvPr2v6gpQg2rpm8%2FkC2xsi%2BONtvN33SqojwDmiP201qF5OSa%2FVq6xaUVrImAPIoKyqMOzx1MIGOqUBuurom03Z92ixFRyWKSvawgK11I9CvI7i4CNmLFF2CKZCOpuZZK2NxAH%2BPcbWWbtI0A%2Bd6TEgYVbF8MCYOop%2BVvFO7mV8D56vjl4ACp6koRTVPmfzY2Zzi4RY8lqksp9QG9SLt1GKaknV6hmpV8XlhpUqbgNtzn8CfsjtZvhboUvuLL2jFN%2Ftg%2Fsr9zO%2FQI0fJ1BvhpruRvXDjtLQklzbDxohQYyd&X-Amz-Signature=bd317f9c7003b6fa8d73825f05b481fc8e398258f6e4226456a9b59cd6018ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA26ERZU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAGp9Sxr8%2BwIgHRO9zY8qe2dpT2lU4O4EAh%2FlnbDlx5AiEAuumpWfoC%2FlBcF3E8tbzXiUcMm9yuIg6%2FdvmlqhXkbO0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQGSEXW24ml4CdlFyrcAzNcBi%2ByPGNoAR5LblmevQ2UMxAILT8vf5LHMpvmGBOzR7qp53jA7%2FHLTolJ%2F%2F%2FsDngvtMpBfk9%2B5np184ChisX2pynlhfHdwp1w3RrryZovc4u24V6TOG%2BAgJWM6HiS9Dc5N%2BBaog6vNvpyje7FEWX41f31rspLWRLbwMxi2rhWiSJGoqdSLKaAm9EnY%2BOsJiAI4jLEB70p5wquWe7DYc0YdOGlLahTb8j%2B0ZEINUiIuPrP4UKucSEUAaAWYg9736p%2FpuS54jEjUh1EorbIlGBL%2BMOEMThVkAaIMWfAiVJeFfqeGDB2MyVWjZKRoPayQZ7lq337Xjnp5YE3gyGYBFBb%2ByYvxzGCYtrT0SRt4Ief6bT0N0TaAmIdmkJLh4RL%2BwTvmu%2Fo0nTCtQjUsNe03xTlixWrvjLe%2F%2FebDqso%2FsPfs1Riux%2FYFj420utkTEtv4z7eoohDXpcoWxy6H%2F8mflweOa%2B79zXsGfxA%2BZ6Kuxi3gbKK4qyloxa2ea1UsJcr3o0Vhd8T7cTaIhoN1AmFUsOvcHtuuSg5k%2By0AUwquirMAjgFt3tU3hF4%2FMvPr2v6gpQg2rpm8%2FkC2xsi%2BONtvN33SqojwDmiP201qF5OSa%2FVq6xaUVrImAPIoKyqMOzx1MIGOqUBuurom03Z92ixFRyWKSvawgK11I9CvI7i4CNmLFF2CKZCOpuZZK2NxAH%2BPcbWWbtI0A%2Bd6TEgYVbF8MCYOop%2BVvFO7mV8D56vjl4ACp6koRTVPmfzY2Zzi4RY8lqksp9QG9SLt1GKaknV6hmpV8XlhpUqbgNtzn8CfsjtZvhboUvuLL2jFN%2Ftg%2Fsr9zO%2FQI0fJ1BvhpruRvXDjtLQklzbDxohQYyd&X-Amz-Signature=884b0e10ec7950b1e6fc49c0078b7039b99d8bd90f9aeb7be0b07756e183173f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA26ERZU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAGp9Sxr8%2BwIgHRO9zY8qe2dpT2lU4O4EAh%2FlnbDlx5AiEAuumpWfoC%2FlBcF3E8tbzXiUcMm9yuIg6%2FdvmlqhXkbO0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQGSEXW24ml4CdlFyrcAzNcBi%2ByPGNoAR5LblmevQ2UMxAILT8vf5LHMpvmGBOzR7qp53jA7%2FHLTolJ%2F%2F%2FsDngvtMpBfk9%2B5np184ChisX2pynlhfHdwp1w3RrryZovc4u24V6TOG%2BAgJWM6HiS9Dc5N%2BBaog6vNvpyje7FEWX41f31rspLWRLbwMxi2rhWiSJGoqdSLKaAm9EnY%2BOsJiAI4jLEB70p5wquWe7DYc0YdOGlLahTb8j%2B0ZEINUiIuPrP4UKucSEUAaAWYg9736p%2FpuS54jEjUh1EorbIlGBL%2BMOEMThVkAaIMWfAiVJeFfqeGDB2MyVWjZKRoPayQZ7lq337Xjnp5YE3gyGYBFBb%2ByYvxzGCYtrT0SRt4Ief6bT0N0TaAmIdmkJLh4RL%2BwTvmu%2Fo0nTCtQjUsNe03xTlixWrvjLe%2F%2FebDqso%2FsPfs1Riux%2FYFj420utkTEtv4z7eoohDXpcoWxy6H%2F8mflweOa%2B79zXsGfxA%2BZ6Kuxi3gbKK4qyloxa2ea1UsJcr3o0Vhd8T7cTaIhoN1AmFUsOvcHtuuSg5k%2By0AUwquirMAjgFt3tU3hF4%2FMvPr2v6gpQg2rpm8%2FkC2xsi%2BONtvN33SqojwDmiP201qF5OSa%2FVq6xaUVrImAPIoKyqMOzx1MIGOqUBuurom03Z92ixFRyWKSvawgK11I9CvI7i4CNmLFF2CKZCOpuZZK2NxAH%2BPcbWWbtI0A%2Bd6TEgYVbF8MCYOop%2BVvFO7mV8D56vjl4ACp6koRTVPmfzY2Zzi4RY8lqksp9QG9SLt1GKaknV6hmpV8XlhpUqbgNtzn8CfsjtZvhboUvuLL2jFN%2Ftg%2Fsr9zO%2FQI0fJ1BvhpruRvXDjtLQklzbDxohQYyd&X-Amz-Signature=5ae6c3d3c14a4cf74220f12128dd60fbdf530d0bb2d5792603f2760be2fc7ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA26ERZU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAGp9Sxr8%2BwIgHRO9zY8qe2dpT2lU4O4EAh%2FlnbDlx5AiEAuumpWfoC%2FlBcF3E8tbzXiUcMm9yuIg6%2FdvmlqhXkbO0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQGSEXW24ml4CdlFyrcAzNcBi%2ByPGNoAR5LblmevQ2UMxAILT8vf5LHMpvmGBOzR7qp53jA7%2FHLTolJ%2F%2F%2FsDngvtMpBfk9%2B5np184ChisX2pynlhfHdwp1w3RrryZovc4u24V6TOG%2BAgJWM6HiS9Dc5N%2BBaog6vNvpyje7FEWX41f31rspLWRLbwMxi2rhWiSJGoqdSLKaAm9EnY%2BOsJiAI4jLEB70p5wquWe7DYc0YdOGlLahTb8j%2B0ZEINUiIuPrP4UKucSEUAaAWYg9736p%2FpuS54jEjUh1EorbIlGBL%2BMOEMThVkAaIMWfAiVJeFfqeGDB2MyVWjZKRoPayQZ7lq337Xjnp5YE3gyGYBFBb%2ByYvxzGCYtrT0SRt4Ief6bT0N0TaAmIdmkJLh4RL%2BwTvmu%2Fo0nTCtQjUsNe03xTlixWrvjLe%2F%2FebDqso%2FsPfs1Riux%2FYFj420utkTEtv4z7eoohDXpcoWxy6H%2F8mflweOa%2B79zXsGfxA%2BZ6Kuxi3gbKK4qyloxa2ea1UsJcr3o0Vhd8T7cTaIhoN1AmFUsOvcHtuuSg5k%2By0AUwquirMAjgFt3tU3hF4%2FMvPr2v6gpQg2rpm8%2FkC2xsi%2BONtvN33SqojwDmiP201qF5OSa%2FVq6xaUVrImAPIoKyqMOzx1MIGOqUBuurom03Z92ixFRyWKSvawgK11I9CvI7i4CNmLFF2CKZCOpuZZK2NxAH%2BPcbWWbtI0A%2Bd6TEgYVbF8MCYOop%2BVvFO7mV8D56vjl4ACp6koRTVPmfzY2Zzi4RY8lqksp9QG9SLt1GKaknV6hmpV8XlhpUqbgNtzn8CfsjtZvhboUvuLL2jFN%2Ftg%2Fsr9zO%2FQI0fJ1BvhpruRvXDjtLQklzbDxohQYyd&X-Amz-Signature=d771ff296ae69db7d5f37265c94291d32463b87a5c7acd5a8ce4dbb979ba02fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA26ERZU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAGp9Sxr8%2BwIgHRO9zY8qe2dpT2lU4O4EAh%2FlnbDlx5AiEAuumpWfoC%2FlBcF3E8tbzXiUcMm9yuIg6%2FdvmlqhXkbO0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQGSEXW24ml4CdlFyrcAzNcBi%2ByPGNoAR5LblmevQ2UMxAILT8vf5LHMpvmGBOzR7qp53jA7%2FHLTolJ%2F%2F%2FsDngvtMpBfk9%2B5np184ChisX2pynlhfHdwp1w3RrryZovc4u24V6TOG%2BAgJWM6HiS9Dc5N%2BBaog6vNvpyje7FEWX41f31rspLWRLbwMxi2rhWiSJGoqdSLKaAm9EnY%2BOsJiAI4jLEB70p5wquWe7DYc0YdOGlLahTb8j%2B0ZEINUiIuPrP4UKucSEUAaAWYg9736p%2FpuS54jEjUh1EorbIlGBL%2BMOEMThVkAaIMWfAiVJeFfqeGDB2MyVWjZKRoPayQZ7lq337Xjnp5YE3gyGYBFBb%2ByYvxzGCYtrT0SRt4Ief6bT0N0TaAmIdmkJLh4RL%2BwTvmu%2Fo0nTCtQjUsNe03xTlixWrvjLe%2F%2FebDqso%2FsPfs1Riux%2FYFj420utkTEtv4z7eoohDXpcoWxy6H%2F8mflweOa%2B79zXsGfxA%2BZ6Kuxi3gbKK4qyloxa2ea1UsJcr3o0Vhd8T7cTaIhoN1AmFUsOvcHtuuSg5k%2By0AUwquirMAjgFt3tU3hF4%2FMvPr2v6gpQg2rpm8%2FkC2xsi%2BONtvN33SqojwDmiP201qF5OSa%2FVq6xaUVrImAPIoKyqMOzx1MIGOqUBuurom03Z92ixFRyWKSvawgK11I9CvI7i4CNmLFF2CKZCOpuZZK2NxAH%2BPcbWWbtI0A%2Bd6TEgYVbF8MCYOop%2BVvFO7mV8D56vjl4ACp6koRTVPmfzY2Zzi4RY8lqksp9QG9SLt1GKaknV6hmpV8XlhpUqbgNtzn8CfsjtZvhboUvuLL2jFN%2Ftg%2Fsr9zO%2FQI0fJ1BvhpruRvXDjtLQklzbDxohQYyd&X-Amz-Signature=71ef8ba4fa1410e6e0ec10af6dcf9231eaba23bf052f1f887efc3665ecdf205e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA26ERZU%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAGp9Sxr8%2BwIgHRO9zY8qe2dpT2lU4O4EAh%2FlnbDlx5AiEAuumpWfoC%2FlBcF3E8tbzXiUcMm9yuIg6%2FdvmlqhXkbO0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQGSEXW24ml4CdlFyrcAzNcBi%2ByPGNoAR5LblmevQ2UMxAILT8vf5LHMpvmGBOzR7qp53jA7%2FHLTolJ%2F%2F%2FsDngvtMpBfk9%2B5np184ChisX2pynlhfHdwp1w3RrryZovc4u24V6TOG%2BAgJWM6HiS9Dc5N%2BBaog6vNvpyje7FEWX41f31rspLWRLbwMxi2rhWiSJGoqdSLKaAm9EnY%2BOsJiAI4jLEB70p5wquWe7DYc0YdOGlLahTb8j%2B0ZEINUiIuPrP4UKucSEUAaAWYg9736p%2FpuS54jEjUh1EorbIlGBL%2BMOEMThVkAaIMWfAiVJeFfqeGDB2MyVWjZKRoPayQZ7lq337Xjnp5YE3gyGYBFBb%2ByYvxzGCYtrT0SRt4Ief6bT0N0TaAmIdmkJLh4RL%2BwTvmu%2Fo0nTCtQjUsNe03xTlixWrvjLe%2F%2FebDqso%2FsPfs1Riux%2FYFj420utkTEtv4z7eoohDXpcoWxy6H%2F8mflweOa%2B79zXsGfxA%2BZ6Kuxi3gbKK4qyloxa2ea1UsJcr3o0Vhd8T7cTaIhoN1AmFUsOvcHtuuSg5k%2By0AUwquirMAjgFt3tU3hF4%2FMvPr2v6gpQg2rpm8%2FkC2xsi%2BONtvN33SqojwDmiP201qF5OSa%2FVq6xaUVrImAPIoKyqMOzx1MIGOqUBuurom03Z92ixFRyWKSvawgK11I9CvI7i4CNmLFF2CKZCOpuZZK2NxAH%2BPcbWWbtI0A%2Bd6TEgYVbF8MCYOop%2BVvFO7mV8D56vjl4ACp6koRTVPmfzY2Zzi4RY8lqksp9QG9SLt1GKaknV6hmpV8XlhpUqbgNtzn8CfsjtZvhboUvuLL2jFN%2Ftg%2Fsr9zO%2FQI0fJ1BvhpruRvXDjtLQklzbDxohQYyd&X-Amz-Signature=f1decca0484b393e940ec06593070a70cc4ad09596e4e48a00dbfbe56ab0b4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
