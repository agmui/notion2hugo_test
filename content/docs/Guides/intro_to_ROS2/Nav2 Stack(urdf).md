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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6D5OGAM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBgpvYQY8DFYU5i1gC7P1diK0zisV02jFCiWYbmiQZsAiB5TJjBLtvLnmheY8IvxCKPcoN2VxftP5rwNKt4giFYsCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYqw%2F4o1dkacuczgQKtwDzyEGoaMKRVB%2BwZT%2FfKFnGYDnxa4ZiLIpO14qQJ%2FnEXKr%2Bzvhp%2F9CiyVP6kICNGffJOOTG6RW2jAxx6XQAsiEty%2BK2ozJKvC4AM85BpTwCkbYeKrsDkKnSuHZhS0vG5Wix%2FrTbelsIsRIG3I%2FJK1HZGuGC44bWsmb6tBUrn7RcAG0cFDzRB%2BxZ6KI23SzkMyzZASMlB%2F1snNtQ%2FY1GjdgZgZz%2BIzxD6R9V3ttSugMghkplG9lOi2abDv3W3PqrTiH5qdTyC7Jnb2trAkjSZdeMRl%2FhDzH8SbCQK5X2mXu7LO%2BZi1MrXSPRRCA%2BSq4%2F1jyIr4yIivujr9SN6KpMILd6oXgOecFapzpY5nVNnI6oxI9HRBg7fyF%2FQtssdrqprzOcAWr%2FpMwYmOb0%2F4Bgw5Shts2sxDtlgYGXLT0no9mCyhYR4htm5LNidsxR119%2BNLky%2FUw9OxwPrvg09SaG8TW%2FntcI3e20aJbuYliZXSBUUDvCQtsrM40tzY7dCkkvPXntU7KR01PzizcsvzbOKT9DS4Wv%2Fy8j24voNCERPxN5pN9HPJemj3e%2BjERw2hA4e50%2B7Hzos59kEuUYxlvKiyQdL9F5Iu%2FRRL%2FfaxDymO%2Fg%2Byk9FFhcxdfxHk7vWkw%2BK2uvQY6pgHGijAfLQBLQ2O5G9VLGmE09zSjKULNi4CimELqPfUtMmSS2kbxupbXbp3tFRQt%2F8Mp2LavpXwSORjNixUhTCKiz%2B2HMNX0mJMmu%2BDesbJm3aIwLAMBy6uQ1RlTTQDR94%2B2LIi4E%2FifbdTzOL2%2BdVZz0Wj4ilS%2B8%2FCqwT1az%2B8Z1v9TEJdFeo%2B7c%2Bw6qorzwgt%2BpBS4dxIt1Zqbf2MPiy4%2Fl0GkpsV7&X-Amz-Signature=6b23e8fd155d871cb54659d84e185bd16100e89c2fc9ccf1f9e30a84f06eef2e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6D5OGAM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBgpvYQY8DFYU5i1gC7P1diK0zisV02jFCiWYbmiQZsAiB5TJjBLtvLnmheY8IvxCKPcoN2VxftP5rwNKt4giFYsCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYqw%2F4o1dkacuczgQKtwDzyEGoaMKRVB%2BwZT%2FfKFnGYDnxa4ZiLIpO14qQJ%2FnEXKr%2Bzvhp%2F9CiyVP6kICNGffJOOTG6RW2jAxx6XQAsiEty%2BK2ozJKvC4AM85BpTwCkbYeKrsDkKnSuHZhS0vG5Wix%2FrTbelsIsRIG3I%2FJK1HZGuGC44bWsmb6tBUrn7RcAG0cFDzRB%2BxZ6KI23SzkMyzZASMlB%2F1snNtQ%2FY1GjdgZgZz%2BIzxD6R9V3ttSugMghkplG9lOi2abDv3W3PqrTiH5qdTyC7Jnb2trAkjSZdeMRl%2FhDzH8SbCQK5X2mXu7LO%2BZi1MrXSPRRCA%2BSq4%2F1jyIr4yIivujr9SN6KpMILd6oXgOecFapzpY5nVNnI6oxI9HRBg7fyF%2FQtssdrqprzOcAWr%2FpMwYmOb0%2F4Bgw5Shts2sxDtlgYGXLT0no9mCyhYR4htm5LNidsxR119%2BNLky%2FUw9OxwPrvg09SaG8TW%2FntcI3e20aJbuYliZXSBUUDvCQtsrM40tzY7dCkkvPXntU7KR01PzizcsvzbOKT9DS4Wv%2Fy8j24voNCERPxN5pN9HPJemj3e%2BjERw2hA4e50%2B7Hzos59kEuUYxlvKiyQdL9F5Iu%2FRRL%2FfaxDymO%2Fg%2Byk9FFhcxdfxHk7vWkw%2BK2uvQY6pgHGijAfLQBLQ2O5G9VLGmE09zSjKULNi4CimELqPfUtMmSS2kbxupbXbp3tFRQt%2F8Mp2LavpXwSORjNixUhTCKiz%2B2HMNX0mJMmu%2BDesbJm3aIwLAMBy6uQ1RlTTQDR94%2B2LIi4E%2FifbdTzOL2%2BdVZz0Wj4ilS%2B8%2FCqwT1az%2B8Z1v9TEJdFeo%2B7c%2Bw6qorzwgt%2BpBS4dxIt1Zqbf2MPiy4%2Fl0GkpsV7&X-Amz-Signature=7c034b7b54a5f209f0802eec8f449d6dfa1e64b2b420b9229820e123e00c1338&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6D5OGAM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBgpvYQY8DFYU5i1gC7P1diK0zisV02jFCiWYbmiQZsAiB5TJjBLtvLnmheY8IvxCKPcoN2VxftP5rwNKt4giFYsCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYqw%2F4o1dkacuczgQKtwDzyEGoaMKRVB%2BwZT%2FfKFnGYDnxa4ZiLIpO14qQJ%2FnEXKr%2Bzvhp%2F9CiyVP6kICNGffJOOTG6RW2jAxx6XQAsiEty%2BK2ozJKvC4AM85BpTwCkbYeKrsDkKnSuHZhS0vG5Wix%2FrTbelsIsRIG3I%2FJK1HZGuGC44bWsmb6tBUrn7RcAG0cFDzRB%2BxZ6KI23SzkMyzZASMlB%2F1snNtQ%2FY1GjdgZgZz%2BIzxD6R9V3ttSugMghkplG9lOi2abDv3W3PqrTiH5qdTyC7Jnb2trAkjSZdeMRl%2FhDzH8SbCQK5X2mXu7LO%2BZi1MrXSPRRCA%2BSq4%2F1jyIr4yIivujr9SN6KpMILd6oXgOecFapzpY5nVNnI6oxI9HRBg7fyF%2FQtssdrqprzOcAWr%2FpMwYmOb0%2F4Bgw5Shts2sxDtlgYGXLT0no9mCyhYR4htm5LNidsxR119%2BNLky%2FUw9OxwPrvg09SaG8TW%2FntcI3e20aJbuYliZXSBUUDvCQtsrM40tzY7dCkkvPXntU7KR01PzizcsvzbOKT9DS4Wv%2Fy8j24voNCERPxN5pN9HPJemj3e%2BjERw2hA4e50%2B7Hzos59kEuUYxlvKiyQdL9F5Iu%2FRRL%2FfaxDymO%2Fg%2Byk9FFhcxdfxHk7vWkw%2BK2uvQY6pgHGijAfLQBLQ2O5G9VLGmE09zSjKULNi4CimELqPfUtMmSS2kbxupbXbp3tFRQt%2F8Mp2LavpXwSORjNixUhTCKiz%2B2HMNX0mJMmu%2BDesbJm3aIwLAMBy6uQ1RlTTQDR94%2B2LIi4E%2FifbdTzOL2%2BdVZz0Wj4ilS%2B8%2FCqwT1az%2B8Z1v9TEJdFeo%2B7c%2Bw6qorzwgt%2BpBS4dxIt1Zqbf2MPiy4%2Fl0GkpsV7&X-Amz-Signature=6509d0654e8bad7aaa7b57226bf8735f02c08551559e6bc1b8b3de6d9863501b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6D5OGAM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBgpvYQY8DFYU5i1gC7P1diK0zisV02jFCiWYbmiQZsAiB5TJjBLtvLnmheY8IvxCKPcoN2VxftP5rwNKt4giFYsCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYqw%2F4o1dkacuczgQKtwDzyEGoaMKRVB%2BwZT%2FfKFnGYDnxa4ZiLIpO14qQJ%2FnEXKr%2Bzvhp%2F9CiyVP6kICNGffJOOTG6RW2jAxx6XQAsiEty%2BK2ozJKvC4AM85BpTwCkbYeKrsDkKnSuHZhS0vG5Wix%2FrTbelsIsRIG3I%2FJK1HZGuGC44bWsmb6tBUrn7RcAG0cFDzRB%2BxZ6KI23SzkMyzZASMlB%2F1snNtQ%2FY1GjdgZgZz%2BIzxD6R9V3ttSugMghkplG9lOi2abDv3W3PqrTiH5qdTyC7Jnb2trAkjSZdeMRl%2FhDzH8SbCQK5X2mXu7LO%2BZi1MrXSPRRCA%2BSq4%2F1jyIr4yIivujr9SN6KpMILd6oXgOecFapzpY5nVNnI6oxI9HRBg7fyF%2FQtssdrqprzOcAWr%2FpMwYmOb0%2F4Bgw5Shts2sxDtlgYGXLT0no9mCyhYR4htm5LNidsxR119%2BNLky%2FUw9OxwPrvg09SaG8TW%2FntcI3e20aJbuYliZXSBUUDvCQtsrM40tzY7dCkkvPXntU7KR01PzizcsvzbOKT9DS4Wv%2Fy8j24voNCERPxN5pN9HPJemj3e%2BjERw2hA4e50%2B7Hzos59kEuUYxlvKiyQdL9F5Iu%2FRRL%2FfaxDymO%2Fg%2Byk9FFhcxdfxHk7vWkw%2BK2uvQY6pgHGijAfLQBLQ2O5G9VLGmE09zSjKULNi4CimELqPfUtMmSS2kbxupbXbp3tFRQt%2F8Mp2LavpXwSORjNixUhTCKiz%2B2HMNX0mJMmu%2BDesbJm3aIwLAMBy6uQ1RlTTQDR94%2B2LIi4E%2FifbdTzOL2%2BdVZz0Wj4ilS%2B8%2FCqwT1az%2B8Z1v9TEJdFeo%2B7c%2Bw6qorzwgt%2BpBS4dxIt1Zqbf2MPiy4%2Fl0GkpsV7&X-Amz-Signature=6eaa3183e03d3814092fa133386d5f9057147872281ad13ccbf6f9b43a169a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6D5OGAM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBgpvYQY8DFYU5i1gC7P1diK0zisV02jFCiWYbmiQZsAiB5TJjBLtvLnmheY8IvxCKPcoN2VxftP5rwNKt4giFYsCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYqw%2F4o1dkacuczgQKtwDzyEGoaMKRVB%2BwZT%2FfKFnGYDnxa4ZiLIpO14qQJ%2FnEXKr%2Bzvhp%2F9CiyVP6kICNGffJOOTG6RW2jAxx6XQAsiEty%2BK2ozJKvC4AM85BpTwCkbYeKrsDkKnSuHZhS0vG5Wix%2FrTbelsIsRIG3I%2FJK1HZGuGC44bWsmb6tBUrn7RcAG0cFDzRB%2BxZ6KI23SzkMyzZASMlB%2F1snNtQ%2FY1GjdgZgZz%2BIzxD6R9V3ttSugMghkplG9lOi2abDv3W3PqrTiH5qdTyC7Jnb2trAkjSZdeMRl%2FhDzH8SbCQK5X2mXu7LO%2BZi1MrXSPRRCA%2BSq4%2F1jyIr4yIivujr9SN6KpMILd6oXgOecFapzpY5nVNnI6oxI9HRBg7fyF%2FQtssdrqprzOcAWr%2FpMwYmOb0%2F4Bgw5Shts2sxDtlgYGXLT0no9mCyhYR4htm5LNidsxR119%2BNLky%2FUw9OxwPrvg09SaG8TW%2FntcI3e20aJbuYliZXSBUUDvCQtsrM40tzY7dCkkvPXntU7KR01PzizcsvzbOKT9DS4Wv%2Fy8j24voNCERPxN5pN9HPJemj3e%2BjERw2hA4e50%2B7Hzos59kEuUYxlvKiyQdL9F5Iu%2FRRL%2FfaxDymO%2Fg%2Byk9FFhcxdfxHk7vWkw%2BK2uvQY6pgHGijAfLQBLQ2O5G9VLGmE09zSjKULNi4CimELqPfUtMmSS2kbxupbXbp3tFRQt%2F8Mp2LavpXwSORjNixUhTCKiz%2B2HMNX0mJMmu%2BDesbJm3aIwLAMBy6uQ1RlTTQDR94%2B2LIi4E%2FifbdTzOL2%2BdVZz0Wj4ilS%2B8%2FCqwT1az%2B8Z1v9TEJdFeo%2B7c%2Bw6qorzwgt%2BpBS4dxIt1Zqbf2MPiy4%2Fl0GkpsV7&X-Amz-Signature=74aeb3bce2d1dcf1f58cc1274cb707852c5959262cc391b90779b68ba7ea762c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6D5OGAM%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBgpvYQY8DFYU5i1gC7P1diK0zisV02jFCiWYbmiQZsAiB5TJjBLtvLnmheY8IvxCKPcoN2VxftP5rwNKt4giFYsCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYqw%2F4o1dkacuczgQKtwDzyEGoaMKRVB%2BwZT%2FfKFnGYDnxa4ZiLIpO14qQJ%2FnEXKr%2Bzvhp%2F9CiyVP6kICNGffJOOTG6RW2jAxx6XQAsiEty%2BK2ozJKvC4AM85BpTwCkbYeKrsDkKnSuHZhS0vG5Wix%2FrTbelsIsRIG3I%2FJK1HZGuGC44bWsmb6tBUrn7RcAG0cFDzRB%2BxZ6KI23SzkMyzZASMlB%2F1snNtQ%2FY1GjdgZgZz%2BIzxD6R9V3ttSugMghkplG9lOi2abDv3W3PqrTiH5qdTyC7Jnb2trAkjSZdeMRl%2FhDzH8SbCQK5X2mXu7LO%2BZi1MrXSPRRCA%2BSq4%2F1jyIr4yIivujr9SN6KpMILd6oXgOecFapzpY5nVNnI6oxI9HRBg7fyF%2FQtssdrqprzOcAWr%2FpMwYmOb0%2F4Bgw5Shts2sxDtlgYGXLT0no9mCyhYR4htm5LNidsxR119%2BNLky%2FUw9OxwPrvg09SaG8TW%2FntcI3e20aJbuYliZXSBUUDvCQtsrM40tzY7dCkkvPXntU7KR01PzizcsvzbOKT9DS4Wv%2Fy8j24voNCERPxN5pN9HPJemj3e%2BjERw2hA4e50%2B7Hzos59kEuUYxlvKiyQdL9F5Iu%2FRRL%2FfaxDymO%2Fg%2Byk9FFhcxdfxHk7vWkw%2BK2uvQY6pgHGijAfLQBLQ2O5G9VLGmE09zSjKULNi4CimELqPfUtMmSS2kbxupbXbp3tFRQt%2F8Mp2LavpXwSORjNixUhTCKiz%2B2HMNX0mJMmu%2BDesbJm3aIwLAMBy6uQ1RlTTQDR94%2B2LIi4E%2FifbdTzOL2%2BdVZz0Wj4ilS%2B8%2FCqwT1az%2B8Z1v9TEJdFeo%2B7c%2Bw6qorzwgt%2BpBS4dxIt1Zqbf2MPiy4%2Fl0GkpsV7&X-Amz-Signature=783f352f418283e15bb6987e9a4a7fb6dd07c1c4bb17771044947210c11acbba&X-Amz-SignedHeaders=host&x-id=GetObject)
