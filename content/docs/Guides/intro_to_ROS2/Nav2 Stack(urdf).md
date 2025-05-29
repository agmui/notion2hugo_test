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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6LHKST%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAv8Qzrnt8M6aDe9sXkXnB5IPh%2FOXv2Qbtcq15DA1r0dAiB1q2Nlpi9udRGqfdqRPR8hiRg1WHOY2k2sLKgyr%2FZ3niqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmOyFeAxjdVex4esPKtwDLfCu%2BESW36OlCVUE7BDo3eQDje6jhE83iycbvqEZ68VawO4ONwX6H2mz1OoPRJLCuOOZwjX11kK9e7s9sXIqV4ulogmbQb8NKWUqqqmcBdPVpq1y7rAAIgjVok4S2XgB1NGHEmRIGPxXOkmrduuBpX68N5qPEkRrhTmZ5jt65epKA9FWnea3Df30jn9jURVB7GZHNutmFfoW47zmsjYig%2Bz2gwaCz%2FB0ldFqWFV4eAi%2BBCbvYP5Auj51MPeyStZUrX5gS6Ip13ONn63BBIAXoGTpp2Z2BE%2FE9HyWJfetwr8EjU5sKMTaT%2FMlQBUP8LvfnKzcF7edVO%2FmxJcZcBKTqCBrLv14VLrep%2F%2BGP%2FBGdSL2zXUi5yRTrc2ziqQegw87Lw5w4NIiP99G5nDAQfIZSIcAEx3Oduhx892XDjqRHFkISOVQ7fuFj9VMtGqS06Y4e3WRda3660rJ1sqkf1ubOu4jU8BoOmYjaBO64eBFw0IazrNwkGrMAUVmK%2FuKBb4ZSrZzYp2wf5dg3TUHHONKLkeDh%2BECcHNn2lHPPN9y6rOCYFNXQCxhhBz7SwQ0s%2BGxr0JfkiY1aOgZZCENt0hmRN6l00KRjN6%2F0wMhyQAcz5IckZIjFBQ14Xy5cLswm7LhwQY6pgEY9KidNJZzVxfb%2BypFiFHeWxvSVy4BmxPaxSycJjvYDQW%2B8cgyqc2YVZHH6RW%2Fgcs9gVu5s0fAaQ3IPVaHnqWbMi83dP1l2TQ1SH0cws5pga4LJyvKaPsFCJGF0PBII7pQn3ZVlb9Qz%2FpdxuxLpF85fqKq3kQrIZXpkN3FV6oON7IyflgtTRqWxTLX0S%2ByktZD2omljeCr64%2F3XsuZq4OmUJJzVux3&X-Amz-Signature=0f8abaf92af21018c16e08f260e51c4ed40221ad40da5977271d9fa2c989cbd9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6LHKST%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAv8Qzrnt8M6aDe9sXkXnB5IPh%2FOXv2Qbtcq15DA1r0dAiB1q2Nlpi9udRGqfdqRPR8hiRg1WHOY2k2sLKgyr%2FZ3niqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmOyFeAxjdVex4esPKtwDLfCu%2BESW36OlCVUE7BDo3eQDje6jhE83iycbvqEZ68VawO4ONwX6H2mz1OoPRJLCuOOZwjX11kK9e7s9sXIqV4ulogmbQb8NKWUqqqmcBdPVpq1y7rAAIgjVok4S2XgB1NGHEmRIGPxXOkmrduuBpX68N5qPEkRrhTmZ5jt65epKA9FWnea3Df30jn9jURVB7GZHNutmFfoW47zmsjYig%2Bz2gwaCz%2FB0ldFqWFV4eAi%2BBCbvYP5Auj51MPeyStZUrX5gS6Ip13ONn63BBIAXoGTpp2Z2BE%2FE9HyWJfetwr8EjU5sKMTaT%2FMlQBUP8LvfnKzcF7edVO%2FmxJcZcBKTqCBrLv14VLrep%2F%2BGP%2FBGdSL2zXUi5yRTrc2ziqQegw87Lw5w4NIiP99G5nDAQfIZSIcAEx3Oduhx892XDjqRHFkISOVQ7fuFj9VMtGqS06Y4e3WRda3660rJ1sqkf1ubOu4jU8BoOmYjaBO64eBFw0IazrNwkGrMAUVmK%2FuKBb4ZSrZzYp2wf5dg3TUHHONKLkeDh%2BECcHNn2lHPPN9y6rOCYFNXQCxhhBz7SwQ0s%2BGxr0JfkiY1aOgZZCENt0hmRN6l00KRjN6%2F0wMhyQAcz5IckZIjFBQ14Xy5cLswm7LhwQY6pgEY9KidNJZzVxfb%2BypFiFHeWxvSVy4BmxPaxSycJjvYDQW%2B8cgyqc2YVZHH6RW%2Fgcs9gVu5s0fAaQ3IPVaHnqWbMi83dP1l2TQ1SH0cws5pga4LJyvKaPsFCJGF0PBII7pQn3ZVlb9Qz%2FpdxuxLpF85fqKq3kQrIZXpkN3FV6oON7IyflgtTRqWxTLX0S%2ByktZD2omljeCr64%2F3XsuZq4OmUJJzVux3&X-Amz-Signature=e3594352742d7346c90a8343de714ecc1cca2dfed8a2e3032f44f42f5f401a93&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6LHKST%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAv8Qzrnt8M6aDe9sXkXnB5IPh%2FOXv2Qbtcq15DA1r0dAiB1q2Nlpi9udRGqfdqRPR8hiRg1WHOY2k2sLKgyr%2FZ3niqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmOyFeAxjdVex4esPKtwDLfCu%2BESW36OlCVUE7BDo3eQDje6jhE83iycbvqEZ68VawO4ONwX6H2mz1OoPRJLCuOOZwjX11kK9e7s9sXIqV4ulogmbQb8NKWUqqqmcBdPVpq1y7rAAIgjVok4S2XgB1NGHEmRIGPxXOkmrduuBpX68N5qPEkRrhTmZ5jt65epKA9FWnea3Df30jn9jURVB7GZHNutmFfoW47zmsjYig%2Bz2gwaCz%2FB0ldFqWFV4eAi%2BBCbvYP5Auj51MPeyStZUrX5gS6Ip13ONn63BBIAXoGTpp2Z2BE%2FE9HyWJfetwr8EjU5sKMTaT%2FMlQBUP8LvfnKzcF7edVO%2FmxJcZcBKTqCBrLv14VLrep%2F%2BGP%2FBGdSL2zXUi5yRTrc2ziqQegw87Lw5w4NIiP99G5nDAQfIZSIcAEx3Oduhx892XDjqRHFkISOVQ7fuFj9VMtGqS06Y4e3WRda3660rJ1sqkf1ubOu4jU8BoOmYjaBO64eBFw0IazrNwkGrMAUVmK%2FuKBb4ZSrZzYp2wf5dg3TUHHONKLkeDh%2BECcHNn2lHPPN9y6rOCYFNXQCxhhBz7SwQ0s%2BGxr0JfkiY1aOgZZCENt0hmRN6l00KRjN6%2F0wMhyQAcz5IckZIjFBQ14Xy5cLswm7LhwQY6pgEY9KidNJZzVxfb%2BypFiFHeWxvSVy4BmxPaxSycJjvYDQW%2B8cgyqc2YVZHH6RW%2Fgcs9gVu5s0fAaQ3IPVaHnqWbMi83dP1l2TQ1SH0cws5pga4LJyvKaPsFCJGF0PBII7pQn3ZVlb9Qz%2FpdxuxLpF85fqKq3kQrIZXpkN3FV6oON7IyflgtTRqWxTLX0S%2ByktZD2omljeCr64%2F3XsuZq4OmUJJzVux3&X-Amz-Signature=f96430ccaf1dfae22b7e9804901f848604c56a654562404146c0267fd363cb04&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6LHKST%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAv8Qzrnt8M6aDe9sXkXnB5IPh%2FOXv2Qbtcq15DA1r0dAiB1q2Nlpi9udRGqfdqRPR8hiRg1WHOY2k2sLKgyr%2FZ3niqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmOyFeAxjdVex4esPKtwDLfCu%2BESW36OlCVUE7BDo3eQDje6jhE83iycbvqEZ68VawO4ONwX6H2mz1OoPRJLCuOOZwjX11kK9e7s9sXIqV4ulogmbQb8NKWUqqqmcBdPVpq1y7rAAIgjVok4S2XgB1NGHEmRIGPxXOkmrduuBpX68N5qPEkRrhTmZ5jt65epKA9FWnea3Df30jn9jURVB7GZHNutmFfoW47zmsjYig%2Bz2gwaCz%2FB0ldFqWFV4eAi%2BBCbvYP5Auj51MPeyStZUrX5gS6Ip13ONn63BBIAXoGTpp2Z2BE%2FE9HyWJfetwr8EjU5sKMTaT%2FMlQBUP8LvfnKzcF7edVO%2FmxJcZcBKTqCBrLv14VLrep%2F%2BGP%2FBGdSL2zXUi5yRTrc2ziqQegw87Lw5w4NIiP99G5nDAQfIZSIcAEx3Oduhx892XDjqRHFkISOVQ7fuFj9VMtGqS06Y4e3WRda3660rJ1sqkf1ubOu4jU8BoOmYjaBO64eBFw0IazrNwkGrMAUVmK%2FuKBb4ZSrZzYp2wf5dg3TUHHONKLkeDh%2BECcHNn2lHPPN9y6rOCYFNXQCxhhBz7SwQ0s%2BGxr0JfkiY1aOgZZCENt0hmRN6l00KRjN6%2F0wMhyQAcz5IckZIjFBQ14Xy5cLswm7LhwQY6pgEY9KidNJZzVxfb%2BypFiFHeWxvSVy4BmxPaxSycJjvYDQW%2B8cgyqc2YVZHH6RW%2Fgcs9gVu5s0fAaQ3IPVaHnqWbMi83dP1l2TQ1SH0cws5pga4LJyvKaPsFCJGF0PBII7pQn3ZVlb9Qz%2FpdxuxLpF85fqKq3kQrIZXpkN3FV6oON7IyflgtTRqWxTLX0S%2ByktZD2omljeCr64%2F3XsuZq4OmUJJzVux3&X-Amz-Signature=9eae985e2bf56801fcb6acff81be5f454994624d264255bfb1ccd4ddc7ae3707&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6LHKST%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAv8Qzrnt8M6aDe9sXkXnB5IPh%2FOXv2Qbtcq15DA1r0dAiB1q2Nlpi9udRGqfdqRPR8hiRg1WHOY2k2sLKgyr%2FZ3niqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmOyFeAxjdVex4esPKtwDLfCu%2BESW36OlCVUE7BDo3eQDje6jhE83iycbvqEZ68VawO4ONwX6H2mz1OoPRJLCuOOZwjX11kK9e7s9sXIqV4ulogmbQb8NKWUqqqmcBdPVpq1y7rAAIgjVok4S2XgB1NGHEmRIGPxXOkmrduuBpX68N5qPEkRrhTmZ5jt65epKA9FWnea3Df30jn9jURVB7GZHNutmFfoW47zmsjYig%2Bz2gwaCz%2FB0ldFqWFV4eAi%2BBCbvYP5Auj51MPeyStZUrX5gS6Ip13ONn63BBIAXoGTpp2Z2BE%2FE9HyWJfetwr8EjU5sKMTaT%2FMlQBUP8LvfnKzcF7edVO%2FmxJcZcBKTqCBrLv14VLrep%2F%2BGP%2FBGdSL2zXUi5yRTrc2ziqQegw87Lw5w4NIiP99G5nDAQfIZSIcAEx3Oduhx892XDjqRHFkISOVQ7fuFj9VMtGqS06Y4e3WRda3660rJ1sqkf1ubOu4jU8BoOmYjaBO64eBFw0IazrNwkGrMAUVmK%2FuKBb4ZSrZzYp2wf5dg3TUHHONKLkeDh%2BECcHNn2lHPPN9y6rOCYFNXQCxhhBz7SwQ0s%2BGxr0JfkiY1aOgZZCENt0hmRN6l00KRjN6%2F0wMhyQAcz5IckZIjFBQ14Xy5cLswm7LhwQY6pgEY9KidNJZzVxfb%2BypFiFHeWxvSVy4BmxPaxSycJjvYDQW%2B8cgyqc2YVZHH6RW%2Fgcs9gVu5s0fAaQ3IPVaHnqWbMi83dP1l2TQ1SH0cws5pga4LJyvKaPsFCJGF0PBII7pQn3ZVlb9Qz%2FpdxuxLpF85fqKq3kQrIZXpkN3FV6oON7IyflgtTRqWxTLX0S%2ByktZD2omljeCr64%2F3XsuZq4OmUJJzVux3&X-Amz-Signature=a88d92573610359a5ded2d6bfa1d0f0e22889a267ea33f6f025c23e1053a7767&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6LHKST%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T140849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAv8Qzrnt8M6aDe9sXkXnB5IPh%2FOXv2Qbtcq15DA1r0dAiB1q2Nlpi9udRGqfdqRPR8hiRg1WHOY2k2sLKgyr%2FZ3niqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmOyFeAxjdVex4esPKtwDLfCu%2BESW36OlCVUE7BDo3eQDje6jhE83iycbvqEZ68VawO4ONwX6H2mz1OoPRJLCuOOZwjX11kK9e7s9sXIqV4ulogmbQb8NKWUqqqmcBdPVpq1y7rAAIgjVok4S2XgB1NGHEmRIGPxXOkmrduuBpX68N5qPEkRrhTmZ5jt65epKA9FWnea3Df30jn9jURVB7GZHNutmFfoW47zmsjYig%2Bz2gwaCz%2FB0ldFqWFV4eAi%2BBCbvYP5Auj51MPeyStZUrX5gS6Ip13ONn63BBIAXoGTpp2Z2BE%2FE9HyWJfetwr8EjU5sKMTaT%2FMlQBUP8LvfnKzcF7edVO%2FmxJcZcBKTqCBrLv14VLrep%2F%2BGP%2FBGdSL2zXUi5yRTrc2ziqQegw87Lw5w4NIiP99G5nDAQfIZSIcAEx3Oduhx892XDjqRHFkISOVQ7fuFj9VMtGqS06Y4e3WRda3660rJ1sqkf1ubOu4jU8BoOmYjaBO64eBFw0IazrNwkGrMAUVmK%2FuKBb4ZSrZzYp2wf5dg3TUHHONKLkeDh%2BECcHNn2lHPPN9y6rOCYFNXQCxhhBz7SwQ0s%2BGxr0JfkiY1aOgZZCENt0hmRN6l00KRjN6%2F0wMhyQAcz5IckZIjFBQ14Xy5cLswm7LhwQY6pgEY9KidNJZzVxfb%2BypFiFHeWxvSVy4BmxPaxSycJjvYDQW%2B8cgyqc2YVZHH6RW%2Fgcs9gVu5s0fAaQ3IPVaHnqWbMi83dP1l2TQ1SH0cws5pga4LJyvKaPsFCJGF0PBII7pQn3ZVlb9Qz%2FpdxuxLpF85fqKq3kQrIZXpkN3FV6oON7IyflgtTRqWxTLX0S%2ByktZD2omljeCr64%2F3XsuZq4OmUJJzVux3&X-Amz-Signature=de9f679095c98d033425519c65b16e9749c89a18024963f919933345ad5ce325&X-Amz-SignedHeaders=host&x-id=GetObject)
