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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27KNQTO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7u%2F6D7leE3Mr%2Ba5cD6sGB0%2Bxo6M6sJMdr6yslN0m6cAiEA01Pp0jE8kxxkvPQ79pm1IyEVgyXfWOYRrRhbC5GjwcwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0mcpZEJZWDTiR2UCrcAwsKF0rkRghrOdvRutFbNPfCQjRk4xFv04CIPztiokRbgn2Z8m6Zks6dNvFlCk896ws0ZJ2lDtW966Lr8dKB18groo%2FiOB6qehtZGRKB%2BxZkF%2FghGvEzGYtPLy38G6IZkH%2BgpfSmSVy1TeQYtybKI6FTEf%2FQvf7US02nGncLwWg5DyhUT4yR6RieRrX8bDHWg4bNR6yCl5vDAQBN61OKIJ3xoP8%2F5K%2FKGX7AlKVI2yPoXjkDWSVziVkt2zUGXMWgXgmL3UmpRwipC0fRCoeIgiVJchZxKaD%2FlHrGBsiujIVV2fpOmBhENEZRw763Xa09c9qcyMJRm9BxAy7YFDBfDehp5on6Wd7TlMH7HQ20ZPeNwWzpX1Dl5xqPRhfj1JNHfg62vJDmTTxf23LsW3ENUN3vtOSBxPhLZIoAw6d74X15tRllrRyvSgtNSnHhjswTlOD%2Bfx8z0%2FGHpaEVKne5yyO6ymlwiip%2Fsd3znG2OXvxFeT7JpjIaVTyPvRZQoEs9%2Fe%2BepZtXFP5IwirlcQ9FBA%2BvURUhQuLdlQZq8NuwvAgZEuUyq%2BZs%2Fn6ZRJftjs0yR5Y1mHH6drl0eBWQHQkVBQ65xHUFIY7Ss3pezexBOMJzQG1q1687YWg%2BLbv1MJba38EGOqUBukDA%2FI0BIp0Pv2t9Il6NIgZa2BBmqlWy9e0N64vz6hOfQS%2BZIbQkzkusPkwWJ7Au3aSXf%2FRQ2ZtGWFo9gqzUjHlOHpwbz1S7l9Jdzri4yJsY7J%2FOaaYOeqIcuuV2X9Ro3v8g%2F7st7TsYSXDMDz3BUd6VW3Rmj3ilAO%2BVSyIFg37OrWWgclsJ7sejYG%2BGkUj7QbN10vE0nRh3SdZFWQNEom%2B37%2BYh&X-Amz-Signature=ed3ee657652aa3dc7ee5214fa3a7b7c5b8f7968bf9f80aa4e636ebd4afea79a5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27KNQTO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7u%2F6D7leE3Mr%2Ba5cD6sGB0%2Bxo6M6sJMdr6yslN0m6cAiEA01Pp0jE8kxxkvPQ79pm1IyEVgyXfWOYRrRhbC5GjwcwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0mcpZEJZWDTiR2UCrcAwsKF0rkRghrOdvRutFbNPfCQjRk4xFv04CIPztiokRbgn2Z8m6Zks6dNvFlCk896ws0ZJ2lDtW966Lr8dKB18groo%2FiOB6qehtZGRKB%2BxZkF%2FghGvEzGYtPLy38G6IZkH%2BgpfSmSVy1TeQYtybKI6FTEf%2FQvf7US02nGncLwWg5DyhUT4yR6RieRrX8bDHWg4bNR6yCl5vDAQBN61OKIJ3xoP8%2F5K%2FKGX7AlKVI2yPoXjkDWSVziVkt2zUGXMWgXgmL3UmpRwipC0fRCoeIgiVJchZxKaD%2FlHrGBsiujIVV2fpOmBhENEZRw763Xa09c9qcyMJRm9BxAy7YFDBfDehp5on6Wd7TlMH7HQ20ZPeNwWzpX1Dl5xqPRhfj1JNHfg62vJDmTTxf23LsW3ENUN3vtOSBxPhLZIoAw6d74X15tRllrRyvSgtNSnHhjswTlOD%2Bfx8z0%2FGHpaEVKne5yyO6ymlwiip%2Fsd3znG2OXvxFeT7JpjIaVTyPvRZQoEs9%2Fe%2BepZtXFP5IwirlcQ9FBA%2BvURUhQuLdlQZq8NuwvAgZEuUyq%2BZs%2Fn6ZRJftjs0yR5Y1mHH6drl0eBWQHQkVBQ65xHUFIY7Ss3pezexBOMJzQG1q1687YWg%2BLbv1MJba38EGOqUBukDA%2FI0BIp0Pv2t9Il6NIgZa2BBmqlWy9e0N64vz6hOfQS%2BZIbQkzkusPkwWJ7Au3aSXf%2FRQ2ZtGWFo9gqzUjHlOHpwbz1S7l9Jdzri4yJsY7J%2FOaaYOeqIcuuV2X9Ro3v8g%2F7st7TsYSXDMDz3BUd6VW3Rmj3ilAO%2BVSyIFg37OrWWgclsJ7sejYG%2BGkUj7QbN10vE0nRh3SdZFWQNEom%2B37%2BYh&X-Amz-Signature=e4a587bafe39a2c980538d343d8d3023c4190225ae128f5bcdfa35adc4730606&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27KNQTO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7u%2F6D7leE3Mr%2Ba5cD6sGB0%2Bxo6M6sJMdr6yslN0m6cAiEA01Pp0jE8kxxkvPQ79pm1IyEVgyXfWOYRrRhbC5GjwcwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0mcpZEJZWDTiR2UCrcAwsKF0rkRghrOdvRutFbNPfCQjRk4xFv04CIPztiokRbgn2Z8m6Zks6dNvFlCk896ws0ZJ2lDtW966Lr8dKB18groo%2FiOB6qehtZGRKB%2BxZkF%2FghGvEzGYtPLy38G6IZkH%2BgpfSmSVy1TeQYtybKI6FTEf%2FQvf7US02nGncLwWg5DyhUT4yR6RieRrX8bDHWg4bNR6yCl5vDAQBN61OKIJ3xoP8%2F5K%2FKGX7AlKVI2yPoXjkDWSVziVkt2zUGXMWgXgmL3UmpRwipC0fRCoeIgiVJchZxKaD%2FlHrGBsiujIVV2fpOmBhENEZRw763Xa09c9qcyMJRm9BxAy7YFDBfDehp5on6Wd7TlMH7HQ20ZPeNwWzpX1Dl5xqPRhfj1JNHfg62vJDmTTxf23LsW3ENUN3vtOSBxPhLZIoAw6d74X15tRllrRyvSgtNSnHhjswTlOD%2Bfx8z0%2FGHpaEVKne5yyO6ymlwiip%2Fsd3znG2OXvxFeT7JpjIaVTyPvRZQoEs9%2Fe%2BepZtXFP5IwirlcQ9FBA%2BvURUhQuLdlQZq8NuwvAgZEuUyq%2BZs%2Fn6ZRJftjs0yR5Y1mHH6drl0eBWQHQkVBQ65xHUFIY7Ss3pezexBOMJzQG1q1687YWg%2BLbv1MJba38EGOqUBukDA%2FI0BIp0Pv2t9Il6NIgZa2BBmqlWy9e0N64vz6hOfQS%2BZIbQkzkusPkwWJ7Au3aSXf%2FRQ2ZtGWFo9gqzUjHlOHpwbz1S7l9Jdzri4yJsY7J%2FOaaYOeqIcuuV2X9Ro3v8g%2F7st7TsYSXDMDz3BUd6VW3Rmj3ilAO%2BVSyIFg37OrWWgclsJ7sejYG%2BGkUj7QbN10vE0nRh3SdZFWQNEom%2B37%2BYh&X-Amz-Signature=68378a8e7559fd7f759d6d75bf440ae596fe84f9baee29c08e13f778df94ce93&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27KNQTO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7u%2F6D7leE3Mr%2Ba5cD6sGB0%2Bxo6M6sJMdr6yslN0m6cAiEA01Pp0jE8kxxkvPQ79pm1IyEVgyXfWOYRrRhbC5GjwcwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0mcpZEJZWDTiR2UCrcAwsKF0rkRghrOdvRutFbNPfCQjRk4xFv04CIPztiokRbgn2Z8m6Zks6dNvFlCk896ws0ZJ2lDtW966Lr8dKB18groo%2FiOB6qehtZGRKB%2BxZkF%2FghGvEzGYtPLy38G6IZkH%2BgpfSmSVy1TeQYtybKI6FTEf%2FQvf7US02nGncLwWg5DyhUT4yR6RieRrX8bDHWg4bNR6yCl5vDAQBN61OKIJ3xoP8%2F5K%2FKGX7AlKVI2yPoXjkDWSVziVkt2zUGXMWgXgmL3UmpRwipC0fRCoeIgiVJchZxKaD%2FlHrGBsiujIVV2fpOmBhENEZRw763Xa09c9qcyMJRm9BxAy7YFDBfDehp5on6Wd7TlMH7HQ20ZPeNwWzpX1Dl5xqPRhfj1JNHfg62vJDmTTxf23LsW3ENUN3vtOSBxPhLZIoAw6d74X15tRllrRyvSgtNSnHhjswTlOD%2Bfx8z0%2FGHpaEVKne5yyO6ymlwiip%2Fsd3znG2OXvxFeT7JpjIaVTyPvRZQoEs9%2Fe%2BepZtXFP5IwirlcQ9FBA%2BvURUhQuLdlQZq8NuwvAgZEuUyq%2BZs%2Fn6ZRJftjs0yR5Y1mHH6drl0eBWQHQkVBQ65xHUFIY7Ss3pezexBOMJzQG1q1687YWg%2BLbv1MJba38EGOqUBukDA%2FI0BIp0Pv2t9Il6NIgZa2BBmqlWy9e0N64vz6hOfQS%2BZIbQkzkusPkwWJ7Au3aSXf%2FRQ2ZtGWFo9gqzUjHlOHpwbz1S7l9Jdzri4yJsY7J%2FOaaYOeqIcuuV2X9Ro3v8g%2F7st7TsYSXDMDz3BUd6VW3Rmj3ilAO%2BVSyIFg37OrWWgclsJ7sejYG%2BGkUj7QbN10vE0nRh3SdZFWQNEom%2B37%2BYh&X-Amz-Signature=1f376b60ecc1f5c9a925b16fab45d0235b44d9b36c457a721324f181a04655d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27KNQTO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7u%2F6D7leE3Mr%2Ba5cD6sGB0%2Bxo6M6sJMdr6yslN0m6cAiEA01Pp0jE8kxxkvPQ79pm1IyEVgyXfWOYRrRhbC5GjwcwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0mcpZEJZWDTiR2UCrcAwsKF0rkRghrOdvRutFbNPfCQjRk4xFv04CIPztiokRbgn2Z8m6Zks6dNvFlCk896ws0ZJ2lDtW966Lr8dKB18groo%2FiOB6qehtZGRKB%2BxZkF%2FghGvEzGYtPLy38G6IZkH%2BgpfSmSVy1TeQYtybKI6FTEf%2FQvf7US02nGncLwWg5DyhUT4yR6RieRrX8bDHWg4bNR6yCl5vDAQBN61OKIJ3xoP8%2F5K%2FKGX7AlKVI2yPoXjkDWSVziVkt2zUGXMWgXgmL3UmpRwipC0fRCoeIgiVJchZxKaD%2FlHrGBsiujIVV2fpOmBhENEZRw763Xa09c9qcyMJRm9BxAy7YFDBfDehp5on6Wd7TlMH7HQ20ZPeNwWzpX1Dl5xqPRhfj1JNHfg62vJDmTTxf23LsW3ENUN3vtOSBxPhLZIoAw6d74X15tRllrRyvSgtNSnHhjswTlOD%2Bfx8z0%2FGHpaEVKne5yyO6ymlwiip%2Fsd3znG2OXvxFeT7JpjIaVTyPvRZQoEs9%2Fe%2BepZtXFP5IwirlcQ9FBA%2BvURUhQuLdlQZq8NuwvAgZEuUyq%2BZs%2Fn6ZRJftjs0yR5Y1mHH6drl0eBWQHQkVBQ65xHUFIY7Ss3pezexBOMJzQG1q1687YWg%2BLbv1MJba38EGOqUBukDA%2FI0BIp0Pv2t9Il6NIgZa2BBmqlWy9e0N64vz6hOfQS%2BZIbQkzkusPkwWJ7Au3aSXf%2FRQ2ZtGWFo9gqzUjHlOHpwbz1S7l9Jdzri4yJsY7J%2FOaaYOeqIcuuV2X9Ro3v8g%2F7st7TsYSXDMDz3BUd6VW3Rmj3ilAO%2BVSyIFg37OrWWgclsJ7sejYG%2BGkUj7QbN10vE0nRh3SdZFWQNEom%2B37%2BYh&X-Amz-Signature=1d9b3fc59e069ba9ce3324fa0fddcf7b7494c12b059bc24c10661a782dec29c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T27KNQTO%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7u%2F6D7leE3Mr%2Ba5cD6sGB0%2Bxo6M6sJMdr6yslN0m6cAiEA01Pp0jE8kxxkvPQ79pm1IyEVgyXfWOYRrRhbC5GjwcwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0mcpZEJZWDTiR2UCrcAwsKF0rkRghrOdvRutFbNPfCQjRk4xFv04CIPztiokRbgn2Z8m6Zks6dNvFlCk896ws0ZJ2lDtW966Lr8dKB18groo%2FiOB6qehtZGRKB%2BxZkF%2FghGvEzGYtPLy38G6IZkH%2BgpfSmSVy1TeQYtybKI6FTEf%2FQvf7US02nGncLwWg5DyhUT4yR6RieRrX8bDHWg4bNR6yCl5vDAQBN61OKIJ3xoP8%2F5K%2FKGX7AlKVI2yPoXjkDWSVziVkt2zUGXMWgXgmL3UmpRwipC0fRCoeIgiVJchZxKaD%2FlHrGBsiujIVV2fpOmBhENEZRw763Xa09c9qcyMJRm9BxAy7YFDBfDehp5on6Wd7TlMH7HQ20ZPeNwWzpX1Dl5xqPRhfj1JNHfg62vJDmTTxf23LsW3ENUN3vtOSBxPhLZIoAw6d74X15tRllrRyvSgtNSnHhjswTlOD%2Bfx8z0%2FGHpaEVKne5yyO6ymlwiip%2Fsd3znG2OXvxFeT7JpjIaVTyPvRZQoEs9%2Fe%2BepZtXFP5IwirlcQ9FBA%2BvURUhQuLdlQZq8NuwvAgZEuUyq%2BZs%2Fn6ZRJftjs0yR5Y1mHH6drl0eBWQHQkVBQ65xHUFIY7Ss3pezexBOMJzQG1q1687YWg%2BLbv1MJba38EGOqUBukDA%2FI0BIp0Pv2t9Il6NIgZa2BBmqlWy9e0N64vz6hOfQS%2BZIbQkzkusPkwWJ7Au3aSXf%2FRQ2ZtGWFo9gqzUjHlOHpwbz1S7l9Jdzri4yJsY7J%2FOaaYOeqIcuuV2X9Ro3v8g%2F7st7TsYSXDMDz3BUd6VW3Rmj3ilAO%2BVSyIFg37OrWWgclsJ7sejYG%2BGkUj7QbN10vE0nRh3SdZFWQNEom%2B37%2BYh&X-Amz-Signature=cd7639024f13eb5ac9e63d8765e9884a676481e7239f8ca00c2aa2107ea5ec44&X-Amz-SignedHeaders=host&x-id=GetObject)
