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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7PSYK3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG2kWm6uPqQMDBl3L2OUWPoGzdftC5tDE6fnF7qtCctAiAWYPXNf%2BFDMTYD9wdVVTjYhf632WVfi7usiIk%2F13QjayqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVhMqbfKhaTV5LRuKtwDPRABAbCSDYqFpiGcIQPZaHpqzg9XgF8dTN2EhZZcYY496nU4DDPzJGP7hAsLO7NQAmqX902gAkmz2e1MdXxdIV308%2BSwrh3CP2vak9R5DXc6Z6TlB1NOgLyKSPr457TK27T3zNEHJrson2ZPPN0yu1iU14yheSsfLQWo6e1v%2BnHfzxJiPQoWfYfZtgNb6j0qzhdV7f27tOrcGsCFJzh8Z%2BhAZuy3h0ahDio8RLM%2F9Ujlmz4pUhTDTpYSd6el2aUUkeC%2B9vrmRJ7H0YDhND2yFmoIh1mmo6TZE%2B%2FjY7gPJVwimfTB2SIhj6LMClLJruPMIBuc8kkFHhGGjnZlLWt4ry8I0X0lS3yZFhA8grl3DgkKsAW2OT0IIZQjOm%2BOp1oxlWBKVfZzhyyT3vgPaJLf8Aw1EbNOuvJUVk7AyzUnNjxP9NZtd2LZkC0fXA9emsncb%2B7pdngGfMx99qRFPXnRPdhBPiAXTW%2B%2FmfBJzETehlg4DExzLW4oVKaBoyJeOp6FYIli1nlWT85wP8%2Bm%2FzkJCgQo7hLIzwKt3JAMvvnbZoQY%2FfZztG%2BPpMDvct%2FvczamsEeimZ%2BnNj1gP98geWmhQ37uPl4KFuyFxTRFs8inxVW2j1phovAZ62Ltpbww3a7cwgY6pgH6RltPVwGUOE8bW4Tac0j%2FkKpr0PN8OyNIONxp3qGpyheyjGl2y3tAklCzPrUTEpm9jHaSVw8PzxOPUZ%2BpNhjs%2Fz1YTsGrfpAezC7rWA8z4TYpkF6UtNFRpCOaIa2f5TKfmRgPl4vGb8V1c4bVwLyfVEpL%2BRbN8HgjBrPXW6DhHJ9K7P4bCOcCvzIsop1C5GP93ampzOKz9%2FQs5qQL1LlyW1GsaSne&X-Amz-Signature=7c5d2557117e3c5f2c94c7bdfc30012352c580cdcbdfba22430b7f56698b4055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7PSYK3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG2kWm6uPqQMDBl3L2OUWPoGzdftC5tDE6fnF7qtCctAiAWYPXNf%2BFDMTYD9wdVVTjYhf632WVfi7usiIk%2F13QjayqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVhMqbfKhaTV5LRuKtwDPRABAbCSDYqFpiGcIQPZaHpqzg9XgF8dTN2EhZZcYY496nU4DDPzJGP7hAsLO7NQAmqX902gAkmz2e1MdXxdIV308%2BSwrh3CP2vak9R5DXc6Z6TlB1NOgLyKSPr457TK27T3zNEHJrson2ZPPN0yu1iU14yheSsfLQWo6e1v%2BnHfzxJiPQoWfYfZtgNb6j0qzhdV7f27tOrcGsCFJzh8Z%2BhAZuy3h0ahDio8RLM%2F9Ujlmz4pUhTDTpYSd6el2aUUkeC%2B9vrmRJ7H0YDhND2yFmoIh1mmo6TZE%2B%2FjY7gPJVwimfTB2SIhj6LMClLJruPMIBuc8kkFHhGGjnZlLWt4ry8I0X0lS3yZFhA8grl3DgkKsAW2OT0IIZQjOm%2BOp1oxlWBKVfZzhyyT3vgPaJLf8Aw1EbNOuvJUVk7AyzUnNjxP9NZtd2LZkC0fXA9emsncb%2B7pdngGfMx99qRFPXnRPdhBPiAXTW%2B%2FmfBJzETehlg4DExzLW4oVKaBoyJeOp6FYIli1nlWT85wP8%2Bm%2FzkJCgQo7hLIzwKt3JAMvvnbZoQY%2FfZztG%2BPpMDvct%2FvczamsEeimZ%2BnNj1gP98geWmhQ37uPl4KFuyFxTRFs8inxVW2j1phovAZ62Ltpbww3a7cwgY6pgH6RltPVwGUOE8bW4Tac0j%2FkKpr0PN8OyNIONxp3qGpyheyjGl2y3tAklCzPrUTEpm9jHaSVw8PzxOPUZ%2BpNhjs%2Fz1YTsGrfpAezC7rWA8z4TYpkF6UtNFRpCOaIa2f5TKfmRgPl4vGb8V1c4bVwLyfVEpL%2BRbN8HgjBrPXW6DhHJ9K7P4bCOcCvzIsop1C5GP93ampzOKz9%2FQs5qQL1LlyW1GsaSne&X-Amz-Signature=f0ad1b8bb54c18efe3a939b11eda31d9042baee2df1aaa9161333ae12634edcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7PSYK3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG2kWm6uPqQMDBl3L2OUWPoGzdftC5tDE6fnF7qtCctAiAWYPXNf%2BFDMTYD9wdVVTjYhf632WVfi7usiIk%2F13QjayqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVhMqbfKhaTV5LRuKtwDPRABAbCSDYqFpiGcIQPZaHpqzg9XgF8dTN2EhZZcYY496nU4DDPzJGP7hAsLO7NQAmqX902gAkmz2e1MdXxdIV308%2BSwrh3CP2vak9R5DXc6Z6TlB1NOgLyKSPr457TK27T3zNEHJrson2ZPPN0yu1iU14yheSsfLQWo6e1v%2BnHfzxJiPQoWfYfZtgNb6j0qzhdV7f27tOrcGsCFJzh8Z%2BhAZuy3h0ahDio8RLM%2F9Ujlmz4pUhTDTpYSd6el2aUUkeC%2B9vrmRJ7H0YDhND2yFmoIh1mmo6TZE%2B%2FjY7gPJVwimfTB2SIhj6LMClLJruPMIBuc8kkFHhGGjnZlLWt4ry8I0X0lS3yZFhA8grl3DgkKsAW2OT0IIZQjOm%2BOp1oxlWBKVfZzhyyT3vgPaJLf8Aw1EbNOuvJUVk7AyzUnNjxP9NZtd2LZkC0fXA9emsncb%2B7pdngGfMx99qRFPXnRPdhBPiAXTW%2B%2FmfBJzETehlg4DExzLW4oVKaBoyJeOp6FYIli1nlWT85wP8%2Bm%2FzkJCgQo7hLIzwKt3JAMvvnbZoQY%2FfZztG%2BPpMDvct%2FvczamsEeimZ%2BnNj1gP98geWmhQ37uPl4KFuyFxTRFs8inxVW2j1phovAZ62Ltpbww3a7cwgY6pgH6RltPVwGUOE8bW4Tac0j%2FkKpr0PN8OyNIONxp3qGpyheyjGl2y3tAklCzPrUTEpm9jHaSVw8PzxOPUZ%2BpNhjs%2Fz1YTsGrfpAezC7rWA8z4TYpkF6UtNFRpCOaIa2f5TKfmRgPl4vGb8V1c4bVwLyfVEpL%2BRbN8HgjBrPXW6DhHJ9K7P4bCOcCvzIsop1C5GP93ampzOKz9%2FQs5qQL1LlyW1GsaSne&X-Amz-Signature=5417a117b3e0c2106756d476eeb689641bf17fd9d7c63a913cd8c138d2c76cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7PSYK3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG2kWm6uPqQMDBl3L2OUWPoGzdftC5tDE6fnF7qtCctAiAWYPXNf%2BFDMTYD9wdVVTjYhf632WVfi7usiIk%2F13QjayqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVhMqbfKhaTV5LRuKtwDPRABAbCSDYqFpiGcIQPZaHpqzg9XgF8dTN2EhZZcYY496nU4DDPzJGP7hAsLO7NQAmqX902gAkmz2e1MdXxdIV308%2BSwrh3CP2vak9R5DXc6Z6TlB1NOgLyKSPr457TK27T3zNEHJrson2ZPPN0yu1iU14yheSsfLQWo6e1v%2BnHfzxJiPQoWfYfZtgNb6j0qzhdV7f27tOrcGsCFJzh8Z%2BhAZuy3h0ahDio8RLM%2F9Ujlmz4pUhTDTpYSd6el2aUUkeC%2B9vrmRJ7H0YDhND2yFmoIh1mmo6TZE%2B%2FjY7gPJVwimfTB2SIhj6LMClLJruPMIBuc8kkFHhGGjnZlLWt4ry8I0X0lS3yZFhA8grl3DgkKsAW2OT0IIZQjOm%2BOp1oxlWBKVfZzhyyT3vgPaJLf8Aw1EbNOuvJUVk7AyzUnNjxP9NZtd2LZkC0fXA9emsncb%2B7pdngGfMx99qRFPXnRPdhBPiAXTW%2B%2FmfBJzETehlg4DExzLW4oVKaBoyJeOp6FYIli1nlWT85wP8%2Bm%2FzkJCgQo7hLIzwKt3JAMvvnbZoQY%2FfZztG%2BPpMDvct%2FvczamsEeimZ%2BnNj1gP98geWmhQ37uPl4KFuyFxTRFs8inxVW2j1phovAZ62Ltpbww3a7cwgY6pgH6RltPVwGUOE8bW4Tac0j%2FkKpr0PN8OyNIONxp3qGpyheyjGl2y3tAklCzPrUTEpm9jHaSVw8PzxOPUZ%2BpNhjs%2Fz1YTsGrfpAezC7rWA8z4TYpkF6UtNFRpCOaIa2f5TKfmRgPl4vGb8V1c4bVwLyfVEpL%2BRbN8HgjBrPXW6DhHJ9K7P4bCOcCvzIsop1C5GP93ampzOKz9%2FQs5qQL1LlyW1GsaSne&X-Amz-Signature=40fbcb313bf62b8a1d541d09fedba676029c4edd43e8814bda0fbdccc487e259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7PSYK3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG2kWm6uPqQMDBl3L2OUWPoGzdftC5tDE6fnF7qtCctAiAWYPXNf%2BFDMTYD9wdVVTjYhf632WVfi7usiIk%2F13QjayqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVhMqbfKhaTV5LRuKtwDPRABAbCSDYqFpiGcIQPZaHpqzg9XgF8dTN2EhZZcYY496nU4DDPzJGP7hAsLO7NQAmqX902gAkmz2e1MdXxdIV308%2BSwrh3CP2vak9R5DXc6Z6TlB1NOgLyKSPr457TK27T3zNEHJrson2ZPPN0yu1iU14yheSsfLQWo6e1v%2BnHfzxJiPQoWfYfZtgNb6j0qzhdV7f27tOrcGsCFJzh8Z%2BhAZuy3h0ahDio8RLM%2F9Ujlmz4pUhTDTpYSd6el2aUUkeC%2B9vrmRJ7H0YDhND2yFmoIh1mmo6TZE%2B%2FjY7gPJVwimfTB2SIhj6LMClLJruPMIBuc8kkFHhGGjnZlLWt4ry8I0X0lS3yZFhA8grl3DgkKsAW2OT0IIZQjOm%2BOp1oxlWBKVfZzhyyT3vgPaJLf8Aw1EbNOuvJUVk7AyzUnNjxP9NZtd2LZkC0fXA9emsncb%2B7pdngGfMx99qRFPXnRPdhBPiAXTW%2B%2FmfBJzETehlg4DExzLW4oVKaBoyJeOp6FYIli1nlWT85wP8%2Bm%2FzkJCgQo7hLIzwKt3JAMvvnbZoQY%2FfZztG%2BPpMDvct%2FvczamsEeimZ%2BnNj1gP98geWmhQ37uPl4KFuyFxTRFs8inxVW2j1phovAZ62Ltpbww3a7cwgY6pgH6RltPVwGUOE8bW4Tac0j%2FkKpr0PN8OyNIONxp3qGpyheyjGl2y3tAklCzPrUTEpm9jHaSVw8PzxOPUZ%2BpNhjs%2Fz1YTsGrfpAezC7rWA8z4TYpkF6UtNFRpCOaIa2f5TKfmRgPl4vGb8V1c4bVwLyfVEpL%2BRbN8HgjBrPXW6DhHJ9K7P4bCOcCvzIsop1C5GP93ampzOKz9%2FQs5qQL1LlyW1GsaSne&X-Amz-Signature=3ebf848b02e92d35fed0ecd412d1abfafe9c9c1b12113030c7e41f79b1fc3804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY7PSYK3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG2kWm6uPqQMDBl3L2OUWPoGzdftC5tDE6fnF7qtCctAiAWYPXNf%2BFDMTYD9wdVVTjYhf632WVfi7usiIk%2F13QjayqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FVhMqbfKhaTV5LRuKtwDPRABAbCSDYqFpiGcIQPZaHpqzg9XgF8dTN2EhZZcYY496nU4DDPzJGP7hAsLO7NQAmqX902gAkmz2e1MdXxdIV308%2BSwrh3CP2vak9R5DXc6Z6TlB1NOgLyKSPr457TK27T3zNEHJrson2ZPPN0yu1iU14yheSsfLQWo6e1v%2BnHfzxJiPQoWfYfZtgNb6j0qzhdV7f27tOrcGsCFJzh8Z%2BhAZuy3h0ahDio8RLM%2F9Ujlmz4pUhTDTpYSd6el2aUUkeC%2B9vrmRJ7H0YDhND2yFmoIh1mmo6TZE%2B%2FjY7gPJVwimfTB2SIhj6LMClLJruPMIBuc8kkFHhGGjnZlLWt4ry8I0X0lS3yZFhA8grl3DgkKsAW2OT0IIZQjOm%2BOp1oxlWBKVfZzhyyT3vgPaJLf8Aw1EbNOuvJUVk7AyzUnNjxP9NZtd2LZkC0fXA9emsncb%2B7pdngGfMx99qRFPXnRPdhBPiAXTW%2B%2FmfBJzETehlg4DExzLW4oVKaBoyJeOp6FYIli1nlWT85wP8%2Bm%2FzkJCgQo7hLIzwKt3JAMvvnbZoQY%2FfZztG%2BPpMDvct%2FvczamsEeimZ%2BnNj1gP98geWmhQ37uPl4KFuyFxTRFs8inxVW2j1phovAZ62Ltpbww3a7cwgY6pgH6RltPVwGUOE8bW4Tac0j%2FkKpr0PN8OyNIONxp3qGpyheyjGl2y3tAklCzPrUTEpm9jHaSVw8PzxOPUZ%2BpNhjs%2Fz1YTsGrfpAezC7rWA8z4TYpkF6UtNFRpCOaIa2f5TKfmRgPl4vGb8V1c4bVwLyfVEpL%2BRbN8HgjBrPXW6DhHJ9K7P4bCOcCvzIsop1C5GP93ampzOKz9%2FQs5qQL1LlyW1GsaSne&X-Amz-Signature=133242fc1f30940181841baac4637bed304ddd6671e06c56651453a5efb5ef78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
