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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVHSEWF6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFhugLmmky5EHqciVCNpeZbKG%2B1pHZOm4Y8bKUAC3mJqAiASzjYpnmXe6eN%2Ft4TxPsNzYpA2ldtdJnD%2F17bsbde1Sir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMCjzS5UiNk9fuKSWSKtwDgxyI2p9rGxkIy98HcGmnsEWn2QEo9Jb7XbY3X14jYbj%2F08p%2F9fChlK96JQvyX1nmy1TllFjQX%2FWrlWjJy%2BgVwa01l8gT3uApGrXF9NekwOjDA2Z7A5KoxsPhWOveyT2gregnadED88%2FhqvNq3bhcQdjmhvFIm1gbP2o7dDAmcNzSMPAVgVdC9NBv7BgW30TndnRI0wDpw7WYJ8QKyTMCcKCWC9hVT%2BMERVyX6Ws26G5UFqYLuIGWxyNZLXddBAf0KwW6aRDm9v4tDyNQsxF825b%2FfoWC0fJrZ2ZT89Uy5SaE9hroM5OcvuyRivzu7FqyU0Y%2Bwj33yn7SDkqgEeqyErTPYt4QO3JtXPGCR6VvaTjdkz83E38SmYFLabzvzKq1jhIk2A0cjxae7XxjbifE2QyyXjORrQ3J7cvCJzz6QBsc1SUYOpKsJ6gt705nomotqkgV8NmjozN6ZfSj6WvucvvsU4bIQC%2B2XJZ0CI9mfj4RlsGBHlAyxk6Us9csF%2F2XLeYsRyl7TrBtirIUQcZD%2FGFM6i75PxfYKcUa6Ha89jR6%2FvxO3pZ%2BzVlv04qcbkyAOnIWYFNlu5rw2JDiQK%2Fj4NHu7Bi3QysXw%2BVKX5Fw%2FIshl5rAo9M5OrjfAoQw68PdwAY6pgGsBO%2FigMIG9LD%2FEZT9A4x7%2Fk%2BydoKTDijMl4IbRsJ%2BhGPMv1HVUHLFBs5BS9EsltXRZyix55vKlruVRqS%2BjRnVIPcBMmzjQaDAeoItFqFZLlN0L945UM%2Bile8jCgnzHQyQM3IJo1RXVcGp9yVVVd7rXiBnvB38Qa52IG8hUjlB0WJvVP3UJfCXzAMWtBR6XUsrCrl3aSpPAeCT8j2br5f%2ByPr9ViBj&X-Amz-Signature=8b75dc836a062a31355a9ba7754d73b5e473cf9759346bdffac96319ac7e62fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVHSEWF6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFhugLmmky5EHqciVCNpeZbKG%2B1pHZOm4Y8bKUAC3mJqAiASzjYpnmXe6eN%2Ft4TxPsNzYpA2ldtdJnD%2F17bsbde1Sir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMCjzS5UiNk9fuKSWSKtwDgxyI2p9rGxkIy98HcGmnsEWn2QEo9Jb7XbY3X14jYbj%2F08p%2F9fChlK96JQvyX1nmy1TllFjQX%2FWrlWjJy%2BgVwa01l8gT3uApGrXF9NekwOjDA2Z7A5KoxsPhWOveyT2gregnadED88%2FhqvNq3bhcQdjmhvFIm1gbP2o7dDAmcNzSMPAVgVdC9NBv7BgW30TndnRI0wDpw7WYJ8QKyTMCcKCWC9hVT%2BMERVyX6Ws26G5UFqYLuIGWxyNZLXddBAf0KwW6aRDm9v4tDyNQsxF825b%2FfoWC0fJrZ2ZT89Uy5SaE9hroM5OcvuyRivzu7FqyU0Y%2Bwj33yn7SDkqgEeqyErTPYt4QO3JtXPGCR6VvaTjdkz83E38SmYFLabzvzKq1jhIk2A0cjxae7XxjbifE2QyyXjORrQ3J7cvCJzz6QBsc1SUYOpKsJ6gt705nomotqkgV8NmjozN6ZfSj6WvucvvsU4bIQC%2B2XJZ0CI9mfj4RlsGBHlAyxk6Us9csF%2F2XLeYsRyl7TrBtirIUQcZD%2FGFM6i75PxfYKcUa6Ha89jR6%2FvxO3pZ%2BzVlv04qcbkyAOnIWYFNlu5rw2JDiQK%2Fj4NHu7Bi3QysXw%2BVKX5Fw%2FIshl5rAo9M5OrjfAoQw68PdwAY6pgGsBO%2FigMIG9LD%2FEZT9A4x7%2Fk%2BydoKTDijMl4IbRsJ%2BhGPMv1HVUHLFBs5BS9EsltXRZyix55vKlruVRqS%2BjRnVIPcBMmzjQaDAeoItFqFZLlN0L945UM%2Bile8jCgnzHQyQM3IJo1RXVcGp9yVVVd7rXiBnvB38Qa52IG8hUjlB0WJvVP3UJfCXzAMWtBR6XUsrCrl3aSpPAeCT8j2br5f%2ByPr9ViBj&X-Amz-Signature=af979cce29feb8aaae0b32703a8048be87b8eff2a165c8ea6e01dcf186922d57&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVHSEWF6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFhugLmmky5EHqciVCNpeZbKG%2B1pHZOm4Y8bKUAC3mJqAiASzjYpnmXe6eN%2Ft4TxPsNzYpA2ldtdJnD%2F17bsbde1Sir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMCjzS5UiNk9fuKSWSKtwDgxyI2p9rGxkIy98HcGmnsEWn2QEo9Jb7XbY3X14jYbj%2F08p%2F9fChlK96JQvyX1nmy1TllFjQX%2FWrlWjJy%2BgVwa01l8gT3uApGrXF9NekwOjDA2Z7A5KoxsPhWOveyT2gregnadED88%2FhqvNq3bhcQdjmhvFIm1gbP2o7dDAmcNzSMPAVgVdC9NBv7BgW30TndnRI0wDpw7WYJ8QKyTMCcKCWC9hVT%2BMERVyX6Ws26G5UFqYLuIGWxyNZLXddBAf0KwW6aRDm9v4tDyNQsxF825b%2FfoWC0fJrZ2ZT89Uy5SaE9hroM5OcvuyRivzu7FqyU0Y%2Bwj33yn7SDkqgEeqyErTPYt4QO3JtXPGCR6VvaTjdkz83E38SmYFLabzvzKq1jhIk2A0cjxae7XxjbifE2QyyXjORrQ3J7cvCJzz6QBsc1SUYOpKsJ6gt705nomotqkgV8NmjozN6ZfSj6WvucvvsU4bIQC%2B2XJZ0CI9mfj4RlsGBHlAyxk6Us9csF%2F2XLeYsRyl7TrBtirIUQcZD%2FGFM6i75PxfYKcUa6Ha89jR6%2FvxO3pZ%2BzVlv04qcbkyAOnIWYFNlu5rw2JDiQK%2Fj4NHu7Bi3QysXw%2BVKX5Fw%2FIshl5rAo9M5OrjfAoQw68PdwAY6pgGsBO%2FigMIG9LD%2FEZT9A4x7%2Fk%2BydoKTDijMl4IbRsJ%2BhGPMv1HVUHLFBs5BS9EsltXRZyix55vKlruVRqS%2BjRnVIPcBMmzjQaDAeoItFqFZLlN0L945UM%2Bile8jCgnzHQyQM3IJo1RXVcGp9yVVVd7rXiBnvB38Qa52IG8hUjlB0WJvVP3UJfCXzAMWtBR6XUsrCrl3aSpPAeCT8j2br5f%2ByPr9ViBj&X-Amz-Signature=f7c49916584640448fd9fcc5ecbc63d8767be04b7a29a7682d766b13abb31b63&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVHSEWF6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFhugLmmky5EHqciVCNpeZbKG%2B1pHZOm4Y8bKUAC3mJqAiASzjYpnmXe6eN%2Ft4TxPsNzYpA2ldtdJnD%2F17bsbde1Sir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMCjzS5UiNk9fuKSWSKtwDgxyI2p9rGxkIy98HcGmnsEWn2QEo9Jb7XbY3X14jYbj%2F08p%2F9fChlK96JQvyX1nmy1TllFjQX%2FWrlWjJy%2BgVwa01l8gT3uApGrXF9NekwOjDA2Z7A5KoxsPhWOveyT2gregnadED88%2FhqvNq3bhcQdjmhvFIm1gbP2o7dDAmcNzSMPAVgVdC9NBv7BgW30TndnRI0wDpw7WYJ8QKyTMCcKCWC9hVT%2BMERVyX6Ws26G5UFqYLuIGWxyNZLXddBAf0KwW6aRDm9v4tDyNQsxF825b%2FfoWC0fJrZ2ZT89Uy5SaE9hroM5OcvuyRivzu7FqyU0Y%2Bwj33yn7SDkqgEeqyErTPYt4QO3JtXPGCR6VvaTjdkz83E38SmYFLabzvzKq1jhIk2A0cjxae7XxjbifE2QyyXjORrQ3J7cvCJzz6QBsc1SUYOpKsJ6gt705nomotqkgV8NmjozN6ZfSj6WvucvvsU4bIQC%2B2XJZ0CI9mfj4RlsGBHlAyxk6Us9csF%2F2XLeYsRyl7TrBtirIUQcZD%2FGFM6i75PxfYKcUa6Ha89jR6%2FvxO3pZ%2BzVlv04qcbkyAOnIWYFNlu5rw2JDiQK%2Fj4NHu7Bi3QysXw%2BVKX5Fw%2FIshl5rAo9M5OrjfAoQw68PdwAY6pgGsBO%2FigMIG9LD%2FEZT9A4x7%2Fk%2BydoKTDijMl4IbRsJ%2BhGPMv1HVUHLFBs5BS9EsltXRZyix55vKlruVRqS%2BjRnVIPcBMmzjQaDAeoItFqFZLlN0L945UM%2Bile8jCgnzHQyQM3IJo1RXVcGp9yVVVd7rXiBnvB38Qa52IG8hUjlB0WJvVP3UJfCXzAMWtBR6XUsrCrl3aSpPAeCT8j2br5f%2ByPr9ViBj&X-Amz-Signature=51f1e42481f43bf851b16b03706f85b53b5bf5b4aa931b18acbe0d03224cfeea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVHSEWF6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFhugLmmky5EHqciVCNpeZbKG%2B1pHZOm4Y8bKUAC3mJqAiASzjYpnmXe6eN%2Ft4TxPsNzYpA2ldtdJnD%2F17bsbde1Sir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMCjzS5UiNk9fuKSWSKtwDgxyI2p9rGxkIy98HcGmnsEWn2QEo9Jb7XbY3X14jYbj%2F08p%2F9fChlK96JQvyX1nmy1TllFjQX%2FWrlWjJy%2BgVwa01l8gT3uApGrXF9NekwOjDA2Z7A5KoxsPhWOveyT2gregnadED88%2FhqvNq3bhcQdjmhvFIm1gbP2o7dDAmcNzSMPAVgVdC9NBv7BgW30TndnRI0wDpw7WYJ8QKyTMCcKCWC9hVT%2BMERVyX6Ws26G5UFqYLuIGWxyNZLXddBAf0KwW6aRDm9v4tDyNQsxF825b%2FfoWC0fJrZ2ZT89Uy5SaE9hroM5OcvuyRivzu7FqyU0Y%2Bwj33yn7SDkqgEeqyErTPYt4QO3JtXPGCR6VvaTjdkz83E38SmYFLabzvzKq1jhIk2A0cjxae7XxjbifE2QyyXjORrQ3J7cvCJzz6QBsc1SUYOpKsJ6gt705nomotqkgV8NmjozN6ZfSj6WvucvvsU4bIQC%2B2XJZ0CI9mfj4RlsGBHlAyxk6Us9csF%2F2XLeYsRyl7TrBtirIUQcZD%2FGFM6i75PxfYKcUa6Ha89jR6%2FvxO3pZ%2BzVlv04qcbkyAOnIWYFNlu5rw2JDiQK%2Fj4NHu7Bi3QysXw%2BVKX5Fw%2FIshl5rAo9M5OrjfAoQw68PdwAY6pgGsBO%2FigMIG9LD%2FEZT9A4x7%2Fk%2BydoKTDijMl4IbRsJ%2BhGPMv1HVUHLFBs5BS9EsltXRZyix55vKlruVRqS%2BjRnVIPcBMmzjQaDAeoItFqFZLlN0L945UM%2Bile8jCgnzHQyQM3IJo1RXVcGp9yVVVd7rXiBnvB38Qa52IG8hUjlB0WJvVP3UJfCXzAMWtBR6XUsrCrl3aSpPAeCT8j2br5f%2ByPr9ViBj&X-Amz-Signature=ed29c70163ff72d1a4e9e05fe9a5f30f5225c7c6aa04710764ad469861bbd6e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVHSEWF6%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFhugLmmky5EHqciVCNpeZbKG%2B1pHZOm4Y8bKUAC3mJqAiASzjYpnmXe6eN%2Ft4TxPsNzYpA2ldtdJnD%2F17bsbde1Sir%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIMCjzS5UiNk9fuKSWSKtwDgxyI2p9rGxkIy98HcGmnsEWn2QEo9Jb7XbY3X14jYbj%2F08p%2F9fChlK96JQvyX1nmy1TllFjQX%2FWrlWjJy%2BgVwa01l8gT3uApGrXF9NekwOjDA2Z7A5KoxsPhWOveyT2gregnadED88%2FhqvNq3bhcQdjmhvFIm1gbP2o7dDAmcNzSMPAVgVdC9NBv7BgW30TndnRI0wDpw7WYJ8QKyTMCcKCWC9hVT%2BMERVyX6Ws26G5UFqYLuIGWxyNZLXddBAf0KwW6aRDm9v4tDyNQsxF825b%2FfoWC0fJrZ2ZT89Uy5SaE9hroM5OcvuyRivzu7FqyU0Y%2Bwj33yn7SDkqgEeqyErTPYt4QO3JtXPGCR6VvaTjdkz83E38SmYFLabzvzKq1jhIk2A0cjxae7XxjbifE2QyyXjORrQ3J7cvCJzz6QBsc1SUYOpKsJ6gt705nomotqkgV8NmjozN6ZfSj6WvucvvsU4bIQC%2B2XJZ0CI9mfj4RlsGBHlAyxk6Us9csF%2F2XLeYsRyl7TrBtirIUQcZD%2FGFM6i75PxfYKcUa6Ha89jR6%2FvxO3pZ%2BzVlv04qcbkyAOnIWYFNlu5rw2JDiQK%2Fj4NHu7Bi3QysXw%2BVKX5Fw%2FIshl5rAo9M5OrjfAoQw68PdwAY6pgGsBO%2FigMIG9LD%2FEZT9A4x7%2Fk%2BydoKTDijMl4IbRsJ%2BhGPMv1HVUHLFBs5BS9EsltXRZyix55vKlruVRqS%2BjRnVIPcBMmzjQaDAeoItFqFZLlN0L945UM%2Bile8jCgnzHQyQM3IJo1RXVcGp9yVVVd7rXiBnvB38Qa52IG8hUjlB0WJvVP3UJfCXzAMWtBR6XUsrCrl3aSpPAeCT8j2br5f%2ByPr9ViBj&X-Amz-Signature=b4f8e3240e032ffa399a578956bfbb48921df07c1c92b6bdb7c502625d798c70&X-Amz-SignedHeaders=host&x-id=GetObject)
