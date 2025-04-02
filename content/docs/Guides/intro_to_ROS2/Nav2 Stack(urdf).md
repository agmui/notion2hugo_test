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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHQCQIYF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEo%2BjPmnwWkhQSzy8JOtjZ7oIo%2BV%2FlVteFhrbYrKN5kGAiEA%2BKHizUwDHHpxIgAqzjjTiWvaA4N3LcQwGBihavEOVOYqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO5aMt%2F8qUXojNn8CrcA0v3FmbL0jFXhzbpc1Jbxw4Xzq%2Fjj%2F1MhTi7wkoWF%2FasclFJIyV6zZZVyAUUGPKlGOKHGPRA59l%2BS6msikN%2BMUnrGBhvtKtcoDDqlLa3O1FYvQ%2BIZn5WWuO9JFAW7x%2FaNy%2BPfbDFpJtLwLChU1Z27d5iZXbVTtio9Lkhu0y3je3bGKcaM9riFQwLRMpXn6Rq9mlhZCElqX0v9%2B%2F0oFpsoDpojdeqrDCq%2Fv%2BZn36%2FyKYoBkPO3S%2FgyOgCz79JnLuuTYtyG1P7wrfC13N8Yv0yWZenTy575TwZsBTgQgwNQG%2BufYlt4QsNW%2FfPaY6ao%2Fs0ms%2FtNXy8AyOTs7cs3LA3Q7ogO1MwHHI5nDiy%2BLFUSAiqD%2Fv5RYS5pKU9cHhrUJvJ2XWL1aELeZAnG1qXVxgnFKD40P4Ma6Lx0MMz2sIjG5XUfa2NRoz772KvvNY17pWfyvuSZqkBbrEvVHS8oOsmgW7%2BKSU3BJ7biFBaPpQMzVVFkdiggOBroWkUAggckFsRI1Pand%2BNrQH2OeBHEuhODQGY9TCi4ND04JCWfFKMaIlJVTc%2FFwxH1AfxZhe4MnD5hTeyXbBJQei3Mw9XYO0BrpDEfdZ8NzDHnwKv2nIqWtvGANCxQ%2B1kQOHTSc0dMLXXtr8GOqUBRbeiRpz0hIYqoMjmUuZ158xgKmb3zru1elh035Rx7gTLdZxwrgkKaIg3d0zEzHbSUhbGYVzfnBaHmmBtdEPVE%2FFf3uiXOsLq34SXeou3soOxKjcCmQ%2B2LS8gaCRo6eHi7jZja5fXsMYjfYtwO1y1UMVXtErLuuQcR2zTxBN6dOCbsc%2BbgKmqMcMYNKKVrwX8D2A06a%2Fd1r6EkSCYtAh8WVTQdIJg&X-Amz-Signature=d61ab7b8771252daf5f1786db8cfae4632bc3c2868f015eeb06980458777f05e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHQCQIYF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEo%2BjPmnwWkhQSzy8JOtjZ7oIo%2BV%2FlVteFhrbYrKN5kGAiEA%2BKHizUwDHHpxIgAqzjjTiWvaA4N3LcQwGBihavEOVOYqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO5aMt%2F8qUXojNn8CrcA0v3FmbL0jFXhzbpc1Jbxw4Xzq%2Fjj%2F1MhTi7wkoWF%2FasclFJIyV6zZZVyAUUGPKlGOKHGPRA59l%2BS6msikN%2BMUnrGBhvtKtcoDDqlLa3O1FYvQ%2BIZn5WWuO9JFAW7x%2FaNy%2BPfbDFpJtLwLChU1Z27d5iZXbVTtio9Lkhu0y3je3bGKcaM9riFQwLRMpXn6Rq9mlhZCElqX0v9%2B%2F0oFpsoDpojdeqrDCq%2Fv%2BZn36%2FyKYoBkPO3S%2FgyOgCz79JnLuuTYtyG1P7wrfC13N8Yv0yWZenTy575TwZsBTgQgwNQG%2BufYlt4QsNW%2FfPaY6ao%2Fs0ms%2FtNXy8AyOTs7cs3LA3Q7ogO1MwHHI5nDiy%2BLFUSAiqD%2Fv5RYS5pKU9cHhrUJvJ2XWL1aELeZAnG1qXVxgnFKD40P4Ma6Lx0MMz2sIjG5XUfa2NRoz772KvvNY17pWfyvuSZqkBbrEvVHS8oOsmgW7%2BKSU3BJ7biFBaPpQMzVVFkdiggOBroWkUAggckFsRI1Pand%2BNrQH2OeBHEuhODQGY9TCi4ND04JCWfFKMaIlJVTc%2FFwxH1AfxZhe4MnD5hTeyXbBJQei3Mw9XYO0BrpDEfdZ8NzDHnwKv2nIqWtvGANCxQ%2B1kQOHTSc0dMLXXtr8GOqUBRbeiRpz0hIYqoMjmUuZ158xgKmb3zru1elh035Rx7gTLdZxwrgkKaIg3d0zEzHbSUhbGYVzfnBaHmmBtdEPVE%2FFf3uiXOsLq34SXeou3soOxKjcCmQ%2B2LS8gaCRo6eHi7jZja5fXsMYjfYtwO1y1UMVXtErLuuQcR2zTxBN6dOCbsc%2BbgKmqMcMYNKKVrwX8D2A06a%2Fd1r6EkSCYtAh8WVTQdIJg&X-Amz-Signature=98c6be531aeb360da29ae099e4284ef6410b048f76247ff9bec7a33aefe7a523&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHQCQIYF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEo%2BjPmnwWkhQSzy8JOtjZ7oIo%2BV%2FlVteFhrbYrKN5kGAiEA%2BKHizUwDHHpxIgAqzjjTiWvaA4N3LcQwGBihavEOVOYqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO5aMt%2F8qUXojNn8CrcA0v3FmbL0jFXhzbpc1Jbxw4Xzq%2Fjj%2F1MhTi7wkoWF%2FasclFJIyV6zZZVyAUUGPKlGOKHGPRA59l%2BS6msikN%2BMUnrGBhvtKtcoDDqlLa3O1FYvQ%2BIZn5WWuO9JFAW7x%2FaNy%2BPfbDFpJtLwLChU1Z27d5iZXbVTtio9Lkhu0y3je3bGKcaM9riFQwLRMpXn6Rq9mlhZCElqX0v9%2B%2F0oFpsoDpojdeqrDCq%2Fv%2BZn36%2FyKYoBkPO3S%2FgyOgCz79JnLuuTYtyG1P7wrfC13N8Yv0yWZenTy575TwZsBTgQgwNQG%2BufYlt4QsNW%2FfPaY6ao%2Fs0ms%2FtNXy8AyOTs7cs3LA3Q7ogO1MwHHI5nDiy%2BLFUSAiqD%2Fv5RYS5pKU9cHhrUJvJ2XWL1aELeZAnG1qXVxgnFKD40P4Ma6Lx0MMz2sIjG5XUfa2NRoz772KvvNY17pWfyvuSZqkBbrEvVHS8oOsmgW7%2BKSU3BJ7biFBaPpQMzVVFkdiggOBroWkUAggckFsRI1Pand%2BNrQH2OeBHEuhODQGY9TCi4ND04JCWfFKMaIlJVTc%2FFwxH1AfxZhe4MnD5hTeyXbBJQei3Mw9XYO0BrpDEfdZ8NzDHnwKv2nIqWtvGANCxQ%2B1kQOHTSc0dMLXXtr8GOqUBRbeiRpz0hIYqoMjmUuZ158xgKmb3zru1elh035Rx7gTLdZxwrgkKaIg3d0zEzHbSUhbGYVzfnBaHmmBtdEPVE%2FFf3uiXOsLq34SXeou3soOxKjcCmQ%2B2LS8gaCRo6eHi7jZja5fXsMYjfYtwO1y1UMVXtErLuuQcR2zTxBN6dOCbsc%2BbgKmqMcMYNKKVrwX8D2A06a%2Fd1r6EkSCYtAh8WVTQdIJg&X-Amz-Signature=b8bcc961fb90cead964aee2cded7836d41ada6918661b51fd80586a630794947&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHQCQIYF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEo%2BjPmnwWkhQSzy8JOtjZ7oIo%2BV%2FlVteFhrbYrKN5kGAiEA%2BKHizUwDHHpxIgAqzjjTiWvaA4N3LcQwGBihavEOVOYqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO5aMt%2F8qUXojNn8CrcA0v3FmbL0jFXhzbpc1Jbxw4Xzq%2Fjj%2F1MhTi7wkoWF%2FasclFJIyV6zZZVyAUUGPKlGOKHGPRA59l%2BS6msikN%2BMUnrGBhvtKtcoDDqlLa3O1FYvQ%2BIZn5WWuO9JFAW7x%2FaNy%2BPfbDFpJtLwLChU1Z27d5iZXbVTtio9Lkhu0y3je3bGKcaM9riFQwLRMpXn6Rq9mlhZCElqX0v9%2B%2F0oFpsoDpojdeqrDCq%2Fv%2BZn36%2FyKYoBkPO3S%2FgyOgCz79JnLuuTYtyG1P7wrfC13N8Yv0yWZenTy575TwZsBTgQgwNQG%2BufYlt4QsNW%2FfPaY6ao%2Fs0ms%2FtNXy8AyOTs7cs3LA3Q7ogO1MwHHI5nDiy%2BLFUSAiqD%2Fv5RYS5pKU9cHhrUJvJ2XWL1aELeZAnG1qXVxgnFKD40P4Ma6Lx0MMz2sIjG5XUfa2NRoz772KvvNY17pWfyvuSZqkBbrEvVHS8oOsmgW7%2BKSU3BJ7biFBaPpQMzVVFkdiggOBroWkUAggckFsRI1Pand%2BNrQH2OeBHEuhODQGY9TCi4ND04JCWfFKMaIlJVTc%2FFwxH1AfxZhe4MnD5hTeyXbBJQei3Mw9XYO0BrpDEfdZ8NzDHnwKv2nIqWtvGANCxQ%2B1kQOHTSc0dMLXXtr8GOqUBRbeiRpz0hIYqoMjmUuZ158xgKmb3zru1elh035Rx7gTLdZxwrgkKaIg3d0zEzHbSUhbGYVzfnBaHmmBtdEPVE%2FFf3uiXOsLq34SXeou3soOxKjcCmQ%2B2LS8gaCRo6eHi7jZja5fXsMYjfYtwO1y1UMVXtErLuuQcR2zTxBN6dOCbsc%2BbgKmqMcMYNKKVrwX8D2A06a%2Fd1r6EkSCYtAh8WVTQdIJg&X-Amz-Signature=f53856647fb18d22b723da7ee5a781fabea18a0d846481e8b683f4551336beb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHQCQIYF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEo%2BjPmnwWkhQSzy8JOtjZ7oIo%2BV%2FlVteFhrbYrKN5kGAiEA%2BKHizUwDHHpxIgAqzjjTiWvaA4N3LcQwGBihavEOVOYqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO5aMt%2F8qUXojNn8CrcA0v3FmbL0jFXhzbpc1Jbxw4Xzq%2Fjj%2F1MhTi7wkoWF%2FasclFJIyV6zZZVyAUUGPKlGOKHGPRA59l%2BS6msikN%2BMUnrGBhvtKtcoDDqlLa3O1FYvQ%2BIZn5WWuO9JFAW7x%2FaNy%2BPfbDFpJtLwLChU1Z27d5iZXbVTtio9Lkhu0y3je3bGKcaM9riFQwLRMpXn6Rq9mlhZCElqX0v9%2B%2F0oFpsoDpojdeqrDCq%2Fv%2BZn36%2FyKYoBkPO3S%2FgyOgCz79JnLuuTYtyG1P7wrfC13N8Yv0yWZenTy575TwZsBTgQgwNQG%2BufYlt4QsNW%2FfPaY6ao%2Fs0ms%2FtNXy8AyOTs7cs3LA3Q7ogO1MwHHI5nDiy%2BLFUSAiqD%2Fv5RYS5pKU9cHhrUJvJ2XWL1aELeZAnG1qXVxgnFKD40P4Ma6Lx0MMz2sIjG5XUfa2NRoz772KvvNY17pWfyvuSZqkBbrEvVHS8oOsmgW7%2BKSU3BJ7biFBaPpQMzVVFkdiggOBroWkUAggckFsRI1Pand%2BNrQH2OeBHEuhODQGY9TCi4ND04JCWfFKMaIlJVTc%2FFwxH1AfxZhe4MnD5hTeyXbBJQei3Mw9XYO0BrpDEfdZ8NzDHnwKv2nIqWtvGANCxQ%2B1kQOHTSc0dMLXXtr8GOqUBRbeiRpz0hIYqoMjmUuZ158xgKmb3zru1elh035Rx7gTLdZxwrgkKaIg3d0zEzHbSUhbGYVzfnBaHmmBtdEPVE%2FFf3uiXOsLq34SXeou3soOxKjcCmQ%2B2LS8gaCRo6eHi7jZja5fXsMYjfYtwO1y1UMVXtErLuuQcR2zTxBN6dOCbsc%2BbgKmqMcMYNKKVrwX8D2A06a%2Fd1r6EkSCYtAh8WVTQdIJg&X-Amz-Signature=ae833ca234bac94c1c20291498abca45da981b4886409889cba278bac7982275&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHQCQIYF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIEo%2BjPmnwWkhQSzy8JOtjZ7oIo%2BV%2FlVteFhrbYrKN5kGAiEA%2BKHizUwDHHpxIgAqzjjTiWvaA4N3LcQwGBihavEOVOYqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO5aMt%2F8qUXojNn8CrcA0v3FmbL0jFXhzbpc1Jbxw4Xzq%2Fjj%2F1MhTi7wkoWF%2FasclFJIyV6zZZVyAUUGPKlGOKHGPRA59l%2BS6msikN%2BMUnrGBhvtKtcoDDqlLa3O1FYvQ%2BIZn5WWuO9JFAW7x%2FaNy%2BPfbDFpJtLwLChU1Z27d5iZXbVTtio9Lkhu0y3je3bGKcaM9riFQwLRMpXn6Rq9mlhZCElqX0v9%2B%2F0oFpsoDpojdeqrDCq%2Fv%2BZn36%2FyKYoBkPO3S%2FgyOgCz79JnLuuTYtyG1P7wrfC13N8Yv0yWZenTy575TwZsBTgQgwNQG%2BufYlt4QsNW%2FfPaY6ao%2Fs0ms%2FtNXy8AyOTs7cs3LA3Q7ogO1MwHHI5nDiy%2BLFUSAiqD%2Fv5RYS5pKU9cHhrUJvJ2XWL1aELeZAnG1qXVxgnFKD40P4Ma6Lx0MMz2sIjG5XUfa2NRoz772KvvNY17pWfyvuSZqkBbrEvVHS8oOsmgW7%2BKSU3BJ7biFBaPpQMzVVFkdiggOBroWkUAggckFsRI1Pand%2BNrQH2OeBHEuhODQGY9TCi4ND04JCWfFKMaIlJVTc%2FFwxH1AfxZhe4MnD5hTeyXbBJQei3Mw9XYO0BrpDEfdZ8NzDHnwKv2nIqWtvGANCxQ%2B1kQOHTSc0dMLXXtr8GOqUBRbeiRpz0hIYqoMjmUuZ158xgKmb3zru1elh035Rx7gTLdZxwrgkKaIg3d0zEzHbSUhbGYVzfnBaHmmBtdEPVE%2FFf3uiXOsLq34SXeou3soOxKjcCmQ%2B2LS8gaCRo6eHi7jZja5fXsMYjfYtwO1y1UMVXtErLuuQcR2zTxBN6dOCbsc%2BbgKmqMcMYNKKVrwX8D2A06a%2Fd1r6EkSCYtAh8WVTQdIJg&X-Amz-Signature=f57f9312e34e5b3400bece1091ec78059964a3904e0bbf756843c541f5d61733&X-Amz-SignedHeaders=host&x-id=GetObject)
