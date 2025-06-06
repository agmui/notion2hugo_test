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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUX6CCT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29wVs4YOuMGO1JoHHcfreT4oIXbLIW0zHwPTqxOvkzQIhALfEwIZRqsXsJQSmVIpZgr3AI9OYL2r0g0Es%2Bf8w31LsKv8DCGEQABoMNjM3NDIzMTgzODA1IgyX%2FSu2%2FiPkCH349Pwq3APImtIwu%2FvLP%2BKpyQpu9qI5%2B%2BeJKMkzje1i6L2v4Qwgtz1Pc%2BRubtDLWqLTCXjVj5FPNSYjHTf2m9HNa3b%2B8dMI4060MkMa066wgyqcCp6ojjmuPZ%2FVIS09W7zWQW7NE9xrcceXKIl8viC8SU3EkwU%2BuDXnCK%2BOHg9PZImqrH7n8Mlrg%2B7l6oy3D2zHRuFkyFfz8kvpWk%2F5OWTW%2BoRbbgbKyzSTILsVj2L5yIfnFHVrTsmth6UvgKzLntlzglDIa1LlsRLRBiRdaqFoN7kOR8UP3QVXdOGncLeDbXTrhT%2F8IwwNA3CgZs726kbh7EiXs%2FhSjAvjoYv1cquqm9FIjHS2Ngga0pdnrXsoFYdHLvH9bMUtEqP4BE%2BjWpjvRmcYpzMoELvUMRWuD9tE%2FDxgEOsc6W%2BkQ2%2Br3M3Tk8lBItjvrE6RXbxa5gPZMEnhMOrU8PNbftMnK7PML30EE0oCfLNtkaDecMjmLo9KXwSm%2FpcT7SEXVrGGcOC7742%2FTi7mpL4X1ZmzNzI0%2BJe1K8D%2FDbEOG6Np3FjJ3rekYuljB3qwLNjgulz1WVWNhtkH1ECXKTqtmrtNzIawPzSm0mZ8I9oQ6Ffkt1GKo5W%2BTZVSDWCAgRxut0Ny%2BpIwy6kmLjCloozCBjqkAWAUPBniEy2Cqay%2FdvNXPKf8dgAZGMlM%2BJa33rvib8pHrcayQ8OS1iTYAmzna3KOaWG29bkPEU5DTfROdvnAcEBTlVyojeQ4cpoB0fO7zAa448Gvq0MXC%2B%2FhE3UYhwhMEjGA3lFdWcahtA9gSIY82ggSe6RCu8q9yEjyIu6aCJVqS5KdyPTKwcbrF9YLUZjHYJpQ41PYafaZP0fU%2Fo27I1E6%2FtTo&X-Amz-Signature=48d09fa2bd2b67c9c3c9a7f926d6c23fefedbeeab5786daed8a3f8a970ccf42f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUX6CCT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29wVs4YOuMGO1JoHHcfreT4oIXbLIW0zHwPTqxOvkzQIhALfEwIZRqsXsJQSmVIpZgr3AI9OYL2r0g0Es%2Bf8w31LsKv8DCGEQABoMNjM3NDIzMTgzODA1IgyX%2FSu2%2FiPkCH349Pwq3APImtIwu%2FvLP%2BKpyQpu9qI5%2B%2BeJKMkzje1i6L2v4Qwgtz1Pc%2BRubtDLWqLTCXjVj5FPNSYjHTf2m9HNa3b%2B8dMI4060MkMa066wgyqcCp6ojjmuPZ%2FVIS09W7zWQW7NE9xrcceXKIl8viC8SU3EkwU%2BuDXnCK%2BOHg9PZImqrH7n8Mlrg%2B7l6oy3D2zHRuFkyFfz8kvpWk%2F5OWTW%2BoRbbgbKyzSTILsVj2L5yIfnFHVrTsmth6UvgKzLntlzglDIa1LlsRLRBiRdaqFoN7kOR8UP3QVXdOGncLeDbXTrhT%2F8IwwNA3CgZs726kbh7EiXs%2FhSjAvjoYv1cquqm9FIjHS2Ngga0pdnrXsoFYdHLvH9bMUtEqP4BE%2BjWpjvRmcYpzMoELvUMRWuD9tE%2FDxgEOsc6W%2BkQ2%2Br3M3Tk8lBItjvrE6RXbxa5gPZMEnhMOrU8PNbftMnK7PML30EE0oCfLNtkaDecMjmLo9KXwSm%2FpcT7SEXVrGGcOC7742%2FTi7mpL4X1ZmzNzI0%2BJe1K8D%2FDbEOG6Np3FjJ3rekYuljB3qwLNjgulz1WVWNhtkH1ECXKTqtmrtNzIawPzSm0mZ8I9oQ6Ffkt1GKo5W%2BTZVSDWCAgRxut0Ny%2BpIwy6kmLjCloozCBjqkAWAUPBniEy2Cqay%2FdvNXPKf8dgAZGMlM%2BJa33rvib8pHrcayQ8OS1iTYAmzna3KOaWG29bkPEU5DTfROdvnAcEBTlVyojeQ4cpoB0fO7zAa448Gvq0MXC%2B%2FhE3UYhwhMEjGA3lFdWcahtA9gSIY82ggSe6RCu8q9yEjyIu6aCJVqS5KdyPTKwcbrF9YLUZjHYJpQ41PYafaZP0fU%2Fo27I1E6%2FtTo&X-Amz-Signature=f07279941ab86bcf736c9d0f962ba5bcf1367ca9aeecec63de00192640f0132d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUX6CCT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29wVs4YOuMGO1JoHHcfreT4oIXbLIW0zHwPTqxOvkzQIhALfEwIZRqsXsJQSmVIpZgr3AI9OYL2r0g0Es%2Bf8w31LsKv8DCGEQABoMNjM3NDIzMTgzODA1IgyX%2FSu2%2FiPkCH349Pwq3APImtIwu%2FvLP%2BKpyQpu9qI5%2B%2BeJKMkzje1i6L2v4Qwgtz1Pc%2BRubtDLWqLTCXjVj5FPNSYjHTf2m9HNa3b%2B8dMI4060MkMa066wgyqcCp6ojjmuPZ%2FVIS09W7zWQW7NE9xrcceXKIl8viC8SU3EkwU%2BuDXnCK%2BOHg9PZImqrH7n8Mlrg%2B7l6oy3D2zHRuFkyFfz8kvpWk%2F5OWTW%2BoRbbgbKyzSTILsVj2L5yIfnFHVrTsmth6UvgKzLntlzglDIa1LlsRLRBiRdaqFoN7kOR8UP3QVXdOGncLeDbXTrhT%2F8IwwNA3CgZs726kbh7EiXs%2FhSjAvjoYv1cquqm9FIjHS2Ngga0pdnrXsoFYdHLvH9bMUtEqP4BE%2BjWpjvRmcYpzMoELvUMRWuD9tE%2FDxgEOsc6W%2BkQ2%2Br3M3Tk8lBItjvrE6RXbxa5gPZMEnhMOrU8PNbftMnK7PML30EE0oCfLNtkaDecMjmLo9KXwSm%2FpcT7SEXVrGGcOC7742%2FTi7mpL4X1ZmzNzI0%2BJe1K8D%2FDbEOG6Np3FjJ3rekYuljB3qwLNjgulz1WVWNhtkH1ECXKTqtmrtNzIawPzSm0mZ8I9oQ6Ffkt1GKo5W%2BTZVSDWCAgRxut0Ny%2BpIwy6kmLjCloozCBjqkAWAUPBniEy2Cqay%2FdvNXPKf8dgAZGMlM%2BJa33rvib8pHrcayQ8OS1iTYAmzna3KOaWG29bkPEU5DTfROdvnAcEBTlVyojeQ4cpoB0fO7zAa448Gvq0MXC%2B%2FhE3UYhwhMEjGA3lFdWcahtA9gSIY82ggSe6RCu8q9yEjyIu6aCJVqS5KdyPTKwcbrF9YLUZjHYJpQ41PYafaZP0fU%2Fo27I1E6%2FtTo&X-Amz-Signature=5fdb286b74e60cec32c28b53de35214c13826a3b07801cbddf90807cb8eb8f41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUX6CCT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29wVs4YOuMGO1JoHHcfreT4oIXbLIW0zHwPTqxOvkzQIhALfEwIZRqsXsJQSmVIpZgr3AI9OYL2r0g0Es%2Bf8w31LsKv8DCGEQABoMNjM3NDIzMTgzODA1IgyX%2FSu2%2FiPkCH349Pwq3APImtIwu%2FvLP%2BKpyQpu9qI5%2B%2BeJKMkzje1i6L2v4Qwgtz1Pc%2BRubtDLWqLTCXjVj5FPNSYjHTf2m9HNa3b%2B8dMI4060MkMa066wgyqcCp6ojjmuPZ%2FVIS09W7zWQW7NE9xrcceXKIl8viC8SU3EkwU%2BuDXnCK%2BOHg9PZImqrH7n8Mlrg%2B7l6oy3D2zHRuFkyFfz8kvpWk%2F5OWTW%2BoRbbgbKyzSTILsVj2L5yIfnFHVrTsmth6UvgKzLntlzglDIa1LlsRLRBiRdaqFoN7kOR8UP3QVXdOGncLeDbXTrhT%2F8IwwNA3CgZs726kbh7EiXs%2FhSjAvjoYv1cquqm9FIjHS2Ngga0pdnrXsoFYdHLvH9bMUtEqP4BE%2BjWpjvRmcYpzMoELvUMRWuD9tE%2FDxgEOsc6W%2BkQ2%2Br3M3Tk8lBItjvrE6RXbxa5gPZMEnhMOrU8PNbftMnK7PML30EE0oCfLNtkaDecMjmLo9KXwSm%2FpcT7SEXVrGGcOC7742%2FTi7mpL4X1ZmzNzI0%2BJe1K8D%2FDbEOG6Np3FjJ3rekYuljB3qwLNjgulz1WVWNhtkH1ECXKTqtmrtNzIawPzSm0mZ8I9oQ6Ffkt1GKo5W%2BTZVSDWCAgRxut0Ny%2BpIwy6kmLjCloozCBjqkAWAUPBniEy2Cqay%2FdvNXPKf8dgAZGMlM%2BJa33rvib8pHrcayQ8OS1iTYAmzna3KOaWG29bkPEU5DTfROdvnAcEBTlVyojeQ4cpoB0fO7zAa448Gvq0MXC%2B%2FhE3UYhwhMEjGA3lFdWcahtA9gSIY82ggSe6RCu8q9yEjyIu6aCJVqS5KdyPTKwcbrF9YLUZjHYJpQ41PYafaZP0fU%2Fo27I1E6%2FtTo&X-Amz-Signature=a142480d61c18d41e88988b05b90f19476d8cfe1d91e791e7d4f83933f596ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUX6CCT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29wVs4YOuMGO1JoHHcfreT4oIXbLIW0zHwPTqxOvkzQIhALfEwIZRqsXsJQSmVIpZgr3AI9OYL2r0g0Es%2Bf8w31LsKv8DCGEQABoMNjM3NDIzMTgzODA1IgyX%2FSu2%2FiPkCH349Pwq3APImtIwu%2FvLP%2BKpyQpu9qI5%2B%2BeJKMkzje1i6L2v4Qwgtz1Pc%2BRubtDLWqLTCXjVj5FPNSYjHTf2m9HNa3b%2B8dMI4060MkMa066wgyqcCp6ojjmuPZ%2FVIS09W7zWQW7NE9xrcceXKIl8viC8SU3EkwU%2BuDXnCK%2BOHg9PZImqrH7n8Mlrg%2B7l6oy3D2zHRuFkyFfz8kvpWk%2F5OWTW%2BoRbbgbKyzSTILsVj2L5yIfnFHVrTsmth6UvgKzLntlzglDIa1LlsRLRBiRdaqFoN7kOR8UP3QVXdOGncLeDbXTrhT%2F8IwwNA3CgZs726kbh7EiXs%2FhSjAvjoYv1cquqm9FIjHS2Ngga0pdnrXsoFYdHLvH9bMUtEqP4BE%2BjWpjvRmcYpzMoELvUMRWuD9tE%2FDxgEOsc6W%2BkQ2%2Br3M3Tk8lBItjvrE6RXbxa5gPZMEnhMOrU8PNbftMnK7PML30EE0oCfLNtkaDecMjmLo9KXwSm%2FpcT7SEXVrGGcOC7742%2FTi7mpL4X1ZmzNzI0%2BJe1K8D%2FDbEOG6Np3FjJ3rekYuljB3qwLNjgulz1WVWNhtkH1ECXKTqtmrtNzIawPzSm0mZ8I9oQ6Ffkt1GKo5W%2BTZVSDWCAgRxut0Ny%2BpIwy6kmLjCloozCBjqkAWAUPBniEy2Cqay%2FdvNXPKf8dgAZGMlM%2BJa33rvib8pHrcayQ8OS1iTYAmzna3KOaWG29bkPEU5DTfROdvnAcEBTlVyojeQ4cpoB0fO7zAa448Gvq0MXC%2B%2FhE3UYhwhMEjGA3lFdWcahtA9gSIY82ggSe6RCu8q9yEjyIu6aCJVqS5KdyPTKwcbrF9YLUZjHYJpQ41PYafaZP0fU%2Fo27I1E6%2FtTo&X-Amz-Signature=169fba30a2954d411d74d7b9a77b5805b861dd6288fd3bcdc1a43a1c54fc4d62&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWUX6CCT%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC29wVs4YOuMGO1JoHHcfreT4oIXbLIW0zHwPTqxOvkzQIhALfEwIZRqsXsJQSmVIpZgr3AI9OYL2r0g0Es%2Bf8w31LsKv8DCGEQABoMNjM3NDIzMTgzODA1IgyX%2FSu2%2FiPkCH349Pwq3APImtIwu%2FvLP%2BKpyQpu9qI5%2B%2BeJKMkzje1i6L2v4Qwgtz1Pc%2BRubtDLWqLTCXjVj5FPNSYjHTf2m9HNa3b%2B8dMI4060MkMa066wgyqcCp6ojjmuPZ%2FVIS09W7zWQW7NE9xrcceXKIl8viC8SU3EkwU%2BuDXnCK%2BOHg9PZImqrH7n8Mlrg%2B7l6oy3D2zHRuFkyFfz8kvpWk%2F5OWTW%2BoRbbgbKyzSTILsVj2L5yIfnFHVrTsmth6UvgKzLntlzglDIa1LlsRLRBiRdaqFoN7kOR8UP3QVXdOGncLeDbXTrhT%2F8IwwNA3CgZs726kbh7EiXs%2FhSjAvjoYv1cquqm9FIjHS2Ngga0pdnrXsoFYdHLvH9bMUtEqP4BE%2BjWpjvRmcYpzMoELvUMRWuD9tE%2FDxgEOsc6W%2BkQ2%2Br3M3Tk8lBItjvrE6RXbxa5gPZMEnhMOrU8PNbftMnK7PML30EE0oCfLNtkaDecMjmLo9KXwSm%2FpcT7SEXVrGGcOC7742%2FTi7mpL4X1ZmzNzI0%2BJe1K8D%2FDbEOG6Np3FjJ3rekYuljB3qwLNjgulz1WVWNhtkH1ECXKTqtmrtNzIawPzSm0mZ8I9oQ6Ffkt1GKo5W%2BTZVSDWCAgRxut0Ny%2BpIwy6kmLjCloozCBjqkAWAUPBniEy2Cqay%2FdvNXPKf8dgAZGMlM%2BJa33rvib8pHrcayQ8OS1iTYAmzna3KOaWG29bkPEU5DTfROdvnAcEBTlVyojeQ4cpoB0fO7zAa448Gvq0MXC%2B%2FhE3UYhwhMEjGA3lFdWcahtA9gSIY82ggSe6RCu8q9yEjyIu6aCJVqS5KdyPTKwcbrF9YLUZjHYJpQ41PYafaZP0fU%2Fo27I1E6%2FtTo&X-Amz-Signature=e4744e51e5b3352a0cdc8fa1b948c2326dd262d5929728bf4b54f2d8ffb8c237&X-Amz-SignedHeaders=host&x-id=GetObject)
