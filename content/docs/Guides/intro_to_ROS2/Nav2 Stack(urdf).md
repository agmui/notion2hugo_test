---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466324F4ILV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCZUmV6Bj2krD%2FZzd9HgcKfpXi8%2Fp5SeKXsxn7WDJdwAiBQ%2B9Y88WmtBH4Sro3R6kDYndVBkr7qwdhLUVp3RrG9XyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv5JnKUmp6f%2BRAP7mKtwDns7sfRYdyGQAedMgpXo9252ic7MRjxb2SwSzIcsxqWraqhA68yKRKogqYg7o633SWY8uxGlU1AyeLBk%2BTRppcUjWF1WJ1Xul0TBEEHYzARaWnaNTGt9I3J5RMpe%2BADCSAWVgla7hXBQ6NAa4dWl%2FQ4j49OTTFyqOe0ZjalMmfDzncnJjgC%2F%2BcIrb4cKMmhp9OX9Dc5zaUAh7liLQTWJqbASdSIwCuXdRsHHcUC%2FA9H76HEKgBu8OspK5N10i8gs0kpBomAYdzge4Tu2hyDaP4nqI9aNtPizcki9vFtLbUYYKGeB%2B51lb9gXvMguHRJEzc3zLzMVO24Qc2mWw8hCD6KcuZs0X5FeXzlTdWfywdEhg9j9ZIkevxV%2FodYobncEKECQXo%2BEWS5SvAqCfM8oF98tsTReGR2mWOLBGI7pXUmrN2RI0S%2BD3%2FxdE1dgIsW%2FhwlOMwrbupW1SX%2BzKKrvkJ6T%2BDRlHRcsxFbUjz6kz%2F7R2nfgAQCGN5%2FK3UP8BCJs7dlLgMZmhur8LpOVL3kfuOG46%2F%2F3LnSG1UeXvSVATu3oEe7tyixYzb2o3TVTKvEkFlYkIvV6lOLlqsI%2BoASqMroPAP2MO5qRMv%2BlpP4u0U2pMMxfnk1zip163kNgwv%2BvrvAY6pgFqormoxr763kSXpX1SblHTc8eVzHti7PCNz1FljIRmOMHL7E2qtks2%2Bx9mzxWi1Lec72%2FkaKn9jU32xpP%2F3%2Ffv78KlfA5ZNtdkGySeVlz4shCZ13QJS44MjqKvsuvDLe1mieeno3iGYWthXtHi5D1Cdog%2F6XehH9gDePx7NZC3m1bb3HIdr9kbVlbgBsMKs%2FssBBLeJZMWtMNHnAQ0dy%2FGtFwVUy%2FM&X-Amz-Signature=eeb352bcd8d1320214dad848193dff629585e42384d56205b9e1e1be8a8c104e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466324F4ILV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCZUmV6Bj2krD%2FZzd9HgcKfpXi8%2Fp5SeKXsxn7WDJdwAiBQ%2B9Y88WmtBH4Sro3R6kDYndVBkr7qwdhLUVp3RrG9XyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv5JnKUmp6f%2BRAP7mKtwDns7sfRYdyGQAedMgpXo9252ic7MRjxb2SwSzIcsxqWraqhA68yKRKogqYg7o633SWY8uxGlU1AyeLBk%2BTRppcUjWF1WJ1Xul0TBEEHYzARaWnaNTGt9I3J5RMpe%2BADCSAWVgla7hXBQ6NAa4dWl%2FQ4j49OTTFyqOe0ZjalMmfDzncnJjgC%2F%2BcIrb4cKMmhp9OX9Dc5zaUAh7liLQTWJqbASdSIwCuXdRsHHcUC%2FA9H76HEKgBu8OspK5N10i8gs0kpBomAYdzge4Tu2hyDaP4nqI9aNtPizcki9vFtLbUYYKGeB%2B51lb9gXvMguHRJEzc3zLzMVO24Qc2mWw8hCD6KcuZs0X5FeXzlTdWfywdEhg9j9ZIkevxV%2FodYobncEKECQXo%2BEWS5SvAqCfM8oF98tsTReGR2mWOLBGI7pXUmrN2RI0S%2BD3%2FxdE1dgIsW%2FhwlOMwrbupW1SX%2BzKKrvkJ6T%2BDRlHRcsxFbUjz6kz%2F7R2nfgAQCGN5%2FK3UP8BCJs7dlLgMZmhur8LpOVL3kfuOG46%2F%2F3LnSG1UeXvSVATu3oEe7tyixYzb2o3TVTKvEkFlYkIvV6lOLlqsI%2BoASqMroPAP2MO5qRMv%2BlpP4u0U2pMMxfnk1zip163kNgwv%2BvrvAY6pgFqormoxr763kSXpX1SblHTc8eVzHti7PCNz1FljIRmOMHL7E2qtks2%2Bx9mzxWi1Lec72%2FkaKn9jU32xpP%2F3%2Ffv78KlfA5ZNtdkGySeVlz4shCZ13QJS44MjqKvsuvDLe1mieeno3iGYWthXtHi5D1Cdog%2F6XehH9gDePx7NZC3m1bb3HIdr9kbVlbgBsMKs%2FssBBLeJZMWtMNHnAQ0dy%2FGtFwVUy%2FM&X-Amz-Signature=8671f80a379df9662c5565ecb185c5cf0cc58748a17679c608d1a6e85f61fc44&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466324F4ILV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCZUmV6Bj2krD%2FZzd9HgcKfpXi8%2Fp5SeKXsxn7WDJdwAiBQ%2B9Y88WmtBH4Sro3R6kDYndVBkr7qwdhLUVp3RrG9XyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv5JnKUmp6f%2BRAP7mKtwDns7sfRYdyGQAedMgpXo9252ic7MRjxb2SwSzIcsxqWraqhA68yKRKogqYg7o633SWY8uxGlU1AyeLBk%2BTRppcUjWF1WJ1Xul0TBEEHYzARaWnaNTGt9I3J5RMpe%2BADCSAWVgla7hXBQ6NAa4dWl%2FQ4j49OTTFyqOe0ZjalMmfDzncnJjgC%2F%2BcIrb4cKMmhp9OX9Dc5zaUAh7liLQTWJqbASdSIwCuXdRsHHcUC%2FA9H76HEKgBu8OspK5N10i8gs0kpBomAYdzge4Tu2hyDaP4nqI9aNtPizcki9vFtLbUYYKGeB%2B51lb9gXvMguHRJEzc3zLzMVO24Qc2mWw8hCD6KcuZs0X5FeXzlTdWfywdEhg9j9ZIkevxV%2FodYobncEKECQXo%2BEWS5SvAqCfM8oF98tsTReGR2mWOLBGI7pXUmrN2RI0S%2BD3%2FxdE1dgIsW%2FhwlOMwrbupW1SX%2BzKKrvkJ6T%2BDRlHRcsxFbUjz6kz%2F7R2nfgAQCGN5%2FK3UP8BCJs7dlLgMZmhur8LpOVL3kfuOG46%2F%2F3LnSG1UeXvSVATu3oEe7tyixYzb2o3TVTKvEkFlYkIvV6lOLlqsI%2BoASqMroPAP2MO5qRMv%2BlpP4u0U2pMMxfnk1zip163kNgwv%2BvrvAY6pgFqormoxr763kSXpX1SblHTc8eVzHti7PCNz1FljIRmOMHL7E2qtks2%2Bx9mzxWi1Lec72%2FkaKn9jU32xpP%2F3%2Ffv78KlfA5ZNtdkGySeVlz4shCZ13QJS44MjqKvsuvDLe1mieeno3iGYWthXtHi5D1Cdog%2F6XehH9gDePx7NZC3m1bb3HIdr9kbVlbgBsMKs%2FssBBLeJZMWtMNHnAQ0dy%2FGtFwVUy%2FM&X-Amz-Signature=22d32228799a2ba4e555e5f346a11bdd09cc96eef28ba9849092ce9cda847701&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466324F4ILV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCZUmV6Bj2krD%2FZzd9HgcKfpXi8%2Fp5SeKXsxn7WDJdwAiBQ%2B9Y88WmtBH4Sro3R6kDYndVBkr7qwdhLUVp3RrG9XyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv5JnKUmp6f%2BRAP7mKtwDns7sfRYdyGQAedMgpXo9252ic7MRjxb2SwSzIcsxqWraqhA68yKRKogqYg7o633SWY8uxGlU1AyeLBk%2BTRppcUjWF1WJ1Xul0TBEEHYzARaWnaNTGt9I3J5RMpe%2BADCSAWVgla7hXBQ6NAa4dWl%2FQ4j49OTTFyqOe0ZjalMmfDzncnJjgC%2F%2BcIrb4cKMmhp9OX9Dc5zaUAh7liLQTWJqbASdSIwCuXdRsHHcUC%2FA9H76HEKgBu8OspK5N10i8gs0kpBomAYdzge4Tu2hyDaP4nqI9aNtPizcki9vFtLbUYYKGeB%2B51lb9gXvMguHRJEzc3zLzMVO24Qc2mWw8hCD6KcuZs0X5FeXzlTdWfywdEhg9j9ZIkevxV%2FodYobncEKECQXo%2BEWS5SvAqCfM8oF98tsTReGR2mWOLBGI7pXUmrN2RI0S%2BD3%2FxdE1dgIsW%2FhwlOMwrbupW1SX%2BzKKrvkJ6T%2BDRlHRcsxFbUjz6kz%2F7R2nfgAQCGN5%2FK3UP8BCJs7dlLgMZmhur8LpOVL3kfuOG46%2F%2F3LnSG1UeXvSVATu3oEe7tyixYzb2o3TVTKvEkFlYkIvV6lOLlqsI%2BoASqMroPAP2MO5qRMv%2BlpP4u0U2pMMxfnk1zip163kNgwv%2BvrvAY6pgFqormoxr763kSXpX1SblHTc8eVzHti7PCNz1FljIRmOMHL7E2qtks2%2Bx9mzxWi1Lec72%2FkaKn9jU32xpP%2F3%2Ffv78KlfA5ZNtdkGySeVlz4shCZ13QJS44MjqKvsuvDLe1mieeno3iGYWthXtHi5D1Cdog%2F6XehH9gDePx7NZC3m1bb3HIdr9kbVlbgBsMKs%2FssBBLeJZMWtMNHnAQ0dy%2FGtFwVUy%2FM&X-Amz-Signature=bd1ea6c26d81342bf9a046429811fe2ba8ff8b002e288d0620f86728973d12e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466324F4ILV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCZUmV6Bj2krD%2FZzd9HgcKfpXi8%2Fp5SeKXsxn7WDJdwAiBQ%2B9Y88WmtBH4Sro3R6kDYndVBkr7qwdhLUVp3RrG9XyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv5JnKUmp6f%2BRAP7mKtwDns7sfRYdyGQAedMgpXo9252ic7MRjxb2SwSzIcsxqWraqhA68yKRKogqYg7o633SWY8uxGlU1AyeLBk%2BTRppcUjWF1WJ1Xul0TBEEHYzARaWnaNTGt9I3J5RMpe%2BADCSAWVgla7hXBQ6NAa4dWl%2FQ4j49OTTFyqOe0ZjalMmfDzncnJjgC%2F%2BcIrb4cKMmhp9OX9Dc5zaUAh7liLQTWJqbASdSIwCuXdRsHHcUC%2FA9H76HEKgBu8OspK5N10i8gs0kpBomAYdzge4Tu2hyDaP4nqI9aNtPizcki9vFtLbUYYKGeB%2B51lb9gXvMguHRJEzc3zLzMVO24Qc2mWw8hCD6KcuZs0X5FeXzlTdWfywdEhg9j9ZIkevxV%2FodYobncEKECQXo%2BEWS5SvAqCfM8oF98tsTReGR2mWOLBGI7pXUmrN2RI0S%2BD3%2FxdE1dgIsW%2FhwlOMwrbupW1SX%2BzKKrvkJ6T%2BDRlHRcsxFbUjz6kz%2F7R2nfgAQCGN5%2FK3UP8BCJs7dlLgMZmhur8LpOVL3kfuOG46%2F%2F3LnSG1UeXvSVATu3oEe7tyixYzb2o3TVTKvEkFlYkIvV6lOLlqsI%2BoASqMroPAP2MO5qRMv%2BlpP4u0U2pMMxfnk1zip163kNgwv%2BvrvAY6pgFqormoxr763kSXpX1SblHTc8eVzHti7PCNz1FljIRmOMHL7E2qtks2%2Bx9mzxWi1Lec72%2FkaKn9jU32xpP%2F3%2Ffv78KlfA5ZNtdkGySeVlz4shCZ13QJS44MjqKvsuvDLe1mieeno3iGYWthXtHi5D1Cdog%2F6XehH9gDePx7NZC3m1bb3HIdr9kbVlbgBsMKs%2FssBBLeJZMWtMNHnAQ0dy%2FGtFwVUy%2FM&X-Amz-Signature=45e7a476497beb3de132189aab95b5225f3d76593629f0e54764ec01a36e7522&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466324F4ILV%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCZUmV6Bj2krD%2FZzd9HgcKfpXi8%2Fp5SeKXsxn7WDJdwAiBQ%2B9Y88WmtBH4Sro3R6kDYndVBkr7qwdhLUVp3RrG9XyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv5JnKUmp6f%2BRAP7mKtwDns7sfRYdyGQAedMgpXo9252ic7MRjxb2SwSzIcsxqWraqhA68yKRKogqYg7o633SWY8uxGlU1AyeLBk%2BTRppcUjWF1WJ1Xul0TBEEHYzARaWnaNTGt9I3J5RMpe%2BADCSAWVgla7hXBQ6NAa4dWl%2FQ4j49OTTFyqOe0ZjalMmfDzncnJjgC%2F%2BcIrb4cKMmhp9OX9Dc5zaUAh7liLQTWJqbASdSIwCuXdRsHHcUC%2FA9H76HEKgBu8OspK5N10i8gs0kpBomAYdzge4Tu2hyDaP4nqI9aNtPizcki9vFtLbUYYKGeB%2B51lb9gXvMguHRJEzc3zLzMVO24Qc2mWw8hCD6KcuZs0X5FeXzlTdWfywdEhg9j9ZIkevxV%2FodYobncEKECQXo%2BEWS5SvAqCfM8oF98tsTReGR2mWOLBGI7pXUmrN2RI0S%2BD3%2FxdE1dgIsW%2FhwlOMwrbupW1SX%2BzKKrvkJ6T%2BDRlHRcsxFbUjz6kz%2F7R2nfgAQCGN5%2FK3UP8BCJs7dlLgMZmhur8LpOVL3kfuOG46%2F%2F3LnSG1UeXvSVATu3oEe7tyixYzb2o3TVTKvEkFlYkIvV6lOLlqsI%2BoASqMroPAP2MO5qRMv%2BlpP4u0U2pMMxfnk1zip163kNgwv%2BvrvAY6pgFqormoxr763kSXpX1SblHTc8eVzHti7PCNz1FljIRmOMHL7E2qtks2%2Bx9mzxWi1Lec72%2FkaKn9jU32xpP%2F3%2Ffv78KlfA5ZNtdkGySeVlz4shCZ13QJS44MjqKvsuvDLe1mieeno3iGYWthXtHi5D1Cdog%2F6XehH9gDePx7NZC3m1bb3HIdr9kbVlbgBsMKs%2FssBBLeJZMWtMNHnAQ0dy%2FGtFwVUy%2FM&X-Amz-Signature=9b5dad3ba122eca0a4984f7570579c81453f8994d03c215cbbae19de86a61355&X-Amz-SignedHeaders=host&x-id=GetObject)
