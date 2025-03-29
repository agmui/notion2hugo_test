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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IRDB3P%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7mbaAARVVZaCwy9u%2BVC7BCvp5w16OkDsr5kVaZlF8PAIhAI2SX220zfj0yfBZdXbUx3L53AhwbPVaWEqwDK7S7u%2B1Kv8DCHMQABoMNjM3NDIzMTgzODA1Igwad0J%2BZGsqDvkIbgMq3APehbhf7lZwZr0R%2BbX87voGvCHiBsdhJMX70E55YO9UffYOaY6dGU0DWJVIoOXkPg%2F0vrRLgOBUW5zHK2Sd%2Fo3ppLcBph38zXPtW1ZAJtqZJ7xQC5QpOmZTCteBZTmsYOv%2F%2By4ZxORRO70%2F9Olnh7uR%2Bag7RjpKFWWjCujBrPHoWOyS5ptrU4vcYCuHSIXM0ttAwFQif%2Fm4VfRcbV9GJXWtKmIXgtQZJKzHK4a63a8FxK1ArvHTdKBDKfVlBzXvjwREe5SdeBx1oLXxYMhxN8jLzddSh3ob4HHuoEUfD8TFu5e8C7fr7xE4zDtoym6VbnthfNq8bPCh27csok%2FG%2BgjR0BxaydQbwpgEqddpo8LEz3EyMLUDqANaaS5FL0wIV93VkiDdwNLLLSJoC7IhCB1ZsbvaodL0B5h%2BgCzPBBmn4cgu1J0HlVqEuzSj%2BVWKc0vGalgVMqg2FEzkJ%2FxMvHBq41jfhRDhEUCekM4sTcr%2BQKxN5Z8yvhfOh6Yy4LpQE%2FSNBP3rDuizQ1IZeP5StkFUzLtdr%2FSmgq7R%2B1ezdin7267lKAn15gMvVkJKPj4J9G2FQvLn8NdzgSpwIiLPO9taGqdy9%2FMWJ8YrY2q51j7wetgb%2BTWA84QoMTXpujC2i5%2B%2FBjqkAeEfz3AAlGm80fwtfL6TRb%2Bif%2FuhyLxCcMifu3JaEwZCoFa966H9wZjy7lf3MN%2BoXdleqnZpJDDKsghgl3UAtDCR3WyfC97BQbd7oPo1R1KVC1%2BpwvYHezw%2B%2BdpEdJRXqZ8xyoTqk3vqG5bOeVCkjgxwRX3AIMGt3lN%2Fkzq1VifCAFk8sP4sDMGb5BE6LSNzAzmzsuA7Ac0YyOlUnvH%2Fqo0iXAjD&X-Amz-Signature=c2e420fbbd5ad4d5bb456a71b38b5abf40de92506930225f47520b4d9f2ed668&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IRDB3P%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7mbaAARVVZaCwy9u%2BVC7BCvp5w16OkDsr5kVaZlF8PAIhAI2SX220zfj0yfBZdXbUx3L53AhwbPVaWEqwDK7S7u%2B1Kv8DCHMQABoMNjM3NDIzMTgzODA1Igwad0J%2BZGsqDvkIbgMq3APehbhf7lZwZr0R%2BbX87voGvCHiBsdhJMX70E55YO9UffYOaY6dGU0DWJVIoOXkPg%2F0vrRLgOBUW5zHK2Sd%2Fo3ppLcBph38zXPtW1ZAJtqZJ7xQC5QpOmZTCteBZTmsYOv%2F%2By4ZxORRO70%2F9Olnh7uR%2Bag7RjpKFWWjCujBrPHoWOyS5ptrU4vcYCuHSIXM0ttAwFQif%2Fm4VfRcbV9GJXWtKmIXgtQZJKzHK4a63a8FxK1ArvHTdKBDKfVlBzXvjwREe5SdeBx1oLXxYMhxN8jLzddSh3ob4HHuoEUfD8TFu5e8C7fr7xE4zDtoym6VbnthfNq8bPCh27csok%2FG%2BgjR0BxaydQbwpgEqddpo8LEz3EyMLUDqANaaS5FL0wIV93VkiDdwNLLLSJoC7IhCB1ZsbvaodL0B5h%2BgCzPBBmn4cgu1J0HlVqEuzSj%2BVWKc0vGalgVMqg2FEzkJ%2FxMvHBq41jfhRDhEUCekM4sTcr%2BQKxN5Z8yvhfOh6Yy4LpQE%2FSNBP3rDuizQ1IZeP5StkFUzLtdr%2FSmgq7R%2B1ezdin7267lKAn15gMvVkJKPj4J9G2FQvLn8NdzgSpwIiLPO9taGqdy9%2FMWJ8YrY2q51j7wetgb%2BTWA84QoMTXpujC2i5%2B%2FBjqkAeEfz3AAlGm80fwtfL6TRb%2Bif%2FuhyLxCcMifu3JaEwZCoFa966H9wZjy7lf3MN%2BoXdleqnZpJDDKsghgl3UAtDCR3WyfC97BQbd7oPo1R1KVC1%2BpwvYHezw%2B%2BdpEdJRXqZ8xyoTqk3vqG5bOeVCkjgxwRX3AIMGt3lN%2Fkzq1VifCAFk8sP4sDMGb5BE6LSNzAzmzsuA7Ac0YyOlUnvH%2Fqo0iXAjD&X-Amz-Signature=b9a23bd5a9aba3a0a075d2c49f8a5cc3b2bae799ca711aeae258fcb563b6e35c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IRDB3P%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7mbaAARVVZaCwy9u%2BVC7BCvp5w16OkDsr5kVaZlF8PAIhAI2SX220zfj0yfBZdXbUx3L53AhwbPVaWEqwDK7S7u%2B1Kv8DCHMQABoMNjM3NDIzMTgzODA1Igwad0J%2BZGsqDvkIbgMq3APehbhf7lZwZr0R%2BbX87voGvCHiBsdhJMX70E55YO9UffYOaY6dGU0DWJVIoOXkPg%2F0vrRLgOBUW5zHK2Sd%2Fo3ppLcBph38zXPtW1ZAJtqZJ7xQC5QpOmZTCteBZTmsYOv%2F%2By4ZxORRO70%2F9Olnh7uR%2Bag7RjpKFWWjCujBrPHoWOyS5ptrU4vcYCuHSIXM0ttAwFQif%2Fm4VfRcbV9GJXWtKmIXgtQZJKzHK4a63a8FxK1ArvHTdKBDKfVlBzXvjwREe5SdeBx1oLXxYMhxN8jLzddSh3ob4HHuoEUfD8TFu5e8C7fr7xE4zDtoym6VbnthfNq8bPCh27csok%2FG%2BgjR0BxaydQbwpgEqddpo8LEz3EyMLUDqANaaS5FL0wIV93VkiDdwNLLLSJoC7IhCB1ZsbvaodL0B5h%2BgCzPBBmn4cgu1J0HlVqEuzSj%2BVWKc0vGalgVMqg2FEzkJ%2FxMvHBq41jfhRDhEUCekM4sTcr%2BQKxN5Z8yvhfOh6Yy4LpQE%2FSNBP3rDuizQ1IZeP5StkFUzLtdr%2FSmgq7R%2B1ezdin7267lKAn15gMvVkJKPj4J9G2FQvLn8NdzgSpwIiLPO9taGqdy9%2FMWJ8YrY2q51j7wetgb%2BTWA84QoMTXpujC2i5%2B%2FBjqkAeEfz3AAlGm80fwtfL6TRb%2Bif%2FuhyLxCcMifu3JaEwZCoFa966H9wZjy7lf3MN%2BoXdleqnZpJDDKsghgl3UAtDCR3WyfC97BQbd7oPo1R1KVC1%2BpwvYHezw%2B%2BdpEdJRXqZ8xyoTqk3vqG5bOeVCkjgxwRX3AIMGt3lN%2Fkzq1VifCAFk8sP4sDMGb5BE6LSNzAzmzsuA7Ac0YyOlUnvH%2Fqo0iXAjD&X-Amz-Signature=0e2806f7528933f740e6867747c2bb2a5ec85558bad9eb3e8648241b4832fa10&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IRDB3P%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7mbaAARVVZaCwy9u%2BVC7BCvp5w16OkDsr5kVaZlF8PAIhAI2SX220zfj0yfBZdXbUx3L53AhwbPVaWEqwDK7S7u%2B1Kv8DCHMQABoMNjM3NDIzMTgzODA1Igwad0J%2BZGsqDvkIbgMq3APehbhf7lZwZr0R%2BbX87voGvCHiBsdhJMX70E55YO9UffYOaY6dGU0DWJVIoOXkPg%2F0vrRLgOBUW5zHK2Sd%2Fo3ppLcBph38zXPtW1ZAJtqZJ7xQC5QpOmZTCteBZTmsYOv%2F%2By4ZxORRO70%2F9Olnh7uR%2Bag7RjpKFWWjCujBrPHoWOyS5ptrU4vcYCuHSIXM0ttAwFQif%2Fm4VfRcbV9GJXWtKmIXgtQZJKzHK4a63a8FxK1ArvHTdKBDKfVlBzXvjwREe5SdeBx1oLXxYMhxN8jLzddSh3ob4HHuoEUfD8TFu5e8C7fr7xE4zDtoym6VbnthfNq8bPCh27csok%2FG%2BgjR0BxaydQbwpgEqddpo8LEz3EyMLUDqANaaS5FL0wIV93VkiDdwNLLLSJoC7IhCB1ZsbvaodL0B5h%2BgCzPBBmn4cgu1J0HlVqEuzSj%2BVWKc0vGalgVMqg2FEzkJ%2FxMvHBq41jfhRDhEUCekM4sTcr%2BQKxN5Z8yvhfOh6Yy4LpQE%2FSNBP3rDuizQ1IZeP5StkFUzLtdr%2FSmgq7R%2B1ezdin7267lKAn15gMvVkJKPj4J9G2FQvLn8NdzgSpwIiLPO9taGqdy9%2FMWJ8YrY2q51j7wetgb%2BTWA84QoMTXpujC2i5%2B%2FBjqkAeEfz3AAlGm80fwtfL6TRb%2Bif%2FuhyLxCcMifu3JaEwZCoFa966H9wZjy7lf3MN%2BoXdleqnZpJDDKsghgl3UAtDCR3WyfC97BQbd7oPo1R1KVC1%2BpwvYHezw%2B%2BdpEdJRXqZ8xyoTqk3vqG5bOeVCkjgxwRX3AIMGt3lN%2Fkzq1VifCAFk8sP4sDMGb5BE6LSNzAzmzsuA7Ac0YyOlUnvH%2Fqo0iXAjD&X-Amz-Signature=8523738bdd114f5ff0ffeb1a662f268b70b1c98423fd87f21aa226352341a369&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IRDB3P%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7mbaAARVVZaCwy9u%2BVC7BCvp5w16OkDsr5kVaZlF8PAIhAI2SX220zfj0yfBZdXbUx3L53AhwbPVaWEqwDK7S7u%2B1Kv8DCHMQABoMNjM3NDIzMTgzODA1Igwad0J%2BZGsqDvkIbgMq3APehbhf7lZwZr0R%2BbX87voGvCHiBsdhJMX70E55YO9UffYOaY6dGU0DWJVIoOXkPg%2F0vrRLgOBUW5zHK2Sd%2Fo3ppLcBph38zXPtW1ZAJtqZJ7xQC5QpOmZTCteBZTmsYOv%2F%2By4ZxORRO70%2F9Olnh7uR%2Bag7RjpKFWWjCujBrPHoWOyS5ptrU4vcYCuHSIXM0ttAwFQif%2Fm4VfRcbV9GJXWtKmIXgtQZJKzHK4a63a8FxK1ArvHTdKBDKfVlBzXvjwREe5SdeBx1oLXxYMhxN8jLzddSh3ob4HHuoEUfD8TFu5e8C7fr7xE4zDtoym6VbnthfNq8bPCh27csok%2FG%2BgjR0BxaydQbwpgEqddpo8LEz3EyMLUDqANaaS5FL0wIV93VkiDdwNLLLSJoC7IhCB1ZsbvaodL0B5h%2BgCzPBBmn4cgu1J0HlVqEuzSj%2BVWKc0vGalgVMqg2FEzkJ%2FxMvHBq41jfhRDhEUCekM4sTcr%2BQKxN5Z8yvhfOh6Yy4LpQE%2FSNBP3rDuizQ1IZeP5StkFUzLtdr%2FSmgq7R%2B1ezdin7267lKAn15gMvVkJKPj4J9G2FQvLn8NdzgSpwIiLPO9taGqdy9%2FMWJ8YrY2q51j7wetgb%2BTWA84QoMTXpujC2i5%2B%2FBjqkAeEfz3AAlGm80fwtfL6TRb%2Bif%2FuhyLxCcMifu3JaEwZCoFa966H9wZjy7lf3MN%2BoXdleqnZpJDDKsghgl3UAtDCR3WyfC97BQbd7oPo1R1KVC1%2BpwvYHezw%2B%2BdpEdJRXqZ8xyoTqk3vqG5bOeVCkjgxwRX3AIMGt3lN%2Fkzq1VifCAFk8sP4sDMGb5BE6LSNzAzmzsuA7Ac0YyOlUnvH%2Fqo0iXAjD&X-Amz-Signature=067680039a1d79fc4fd1b26309094d3b5a7c9e79194a258a76175277defee2e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7IRDB3P%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T110107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD7mbaAARVVZaCwy9u%2BVC7BCvp5w16OkDsr5kVaZlF8PAIhAI2SX220zfj0yfBZdXbUx3L53AhwbPVaWEqwDK7S7u%2B1Kv8DCHMQABoMNjM3NDIzMTgzODA1Igwad0J%2BZGsqDvkIbgMq3APehbhf7lZwZr0R%2BbX87voGvCHiBsdhJMX70E55YO9UffYOaY6dGU0DWJVIoOXkPg%2F0vrRLgOBUW5zHK2Sd%2Fo3ppLcBph38zXPtW1ZAJtqZJ7xQC5QpOmZTCteBZTmsYOv%2F%2By4ZxORRO70%2F9Olnh7uR%2Bag7RjpKFWWjCujBrPHoWOyS5ptrU4vcYCuHSIXM0ttAwFQif%2Fm4VfRcbV9GJXWtKmIXgtQZJKzHK4a63a8FxK1ArvHTdKBDKfVlBzXvjwREe5SdeBx1oLXxYMhxN8jLzddSh3ob4HHuoEUfD8TFu5e8C7fr7xE4zDtoym6VbnthfNq8bPCh27csok%2FG%2BgjR0BxaydQbwpgEqddpo8LEz3EyMLUDqANaaS5FL0wIV93VkiDdwNLLLSJoC7IhCB1ZsbvaodL0B5h%2BgCzPBBmn4cgu1J0HlVqEuzSj%2BVWKc0vGalgVMqg2FEzkJ%2FxMvHBq41jfhRDhEUCekM4sTcr%2BQKxN5Z8yvhfOh6Yy4LpQE%2FSNBP3rDuizQ1IZeP5StkFUzLtdr%2FSmgq7R%2B1ezdin7267lKAn15gMvVkJKPj4J9G2FQvLn8NdzgSpwIiLPO9taGqdy9%2FMWJ8YrY2q51j7wetgb%2BTWA84QoMTXpujC2i5%2B%2FBjqkAeEfz3AAlGm80fwtfL6TRb%2Bif%2FuhyLxCcMifu3JaEwZCoFa966H9wZjy7lf3MN%2BoXdleqnZpJDDKsghgl3UAtDCR3WyfC97BQbd7oPo1R1KVC1%2BpwvYHezw%2B%2BdpEdJRXqZ8xyoTqk3vqG5bOeVCkjgxwRX3AIMGt3lN%2Fkzq1VifCAFk8sP4sDMGb5BE6LSNzAzmzsuA7Ac0YyOlUnvH%2Fqo0iXAjD&X-Amz-Signature=2457734f63fe295077e752605edefafa29ba83a60cd9763f18fadc65df78e78e&X-Amz-SignedHeaders=host&x-id=GetObject)
