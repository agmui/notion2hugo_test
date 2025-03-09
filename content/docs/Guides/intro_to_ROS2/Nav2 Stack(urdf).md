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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3W4DQD%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCnHF4mjUfB08Gua3hkFDI4frh4HzCkpFtraM9I3LmurQIhAIt1DISpn7Z3VAHD%2BQSmebhGAzBEjYxv4Atj203TqcvMKv8DCG4QABoMNjM3NDIzMTgzODA1IgzJoAPVLG711YbDyjAq3AO7tY8i0hG2lOJUPS3NK5Q1Ip4qsU0VVRbFl4PajGrYFyxmdnJ849xn3FYxPM4BY3OlxMzCaNTGb8nHdDqdbFGaDHdxakvi2RHd1RkJZFYCqVOlNmeelRN%2FoPzl1auJYpILf1ssPuxJZaSz4krtlHohOcJ5DXridGMCtrHsQ4z2Zy9Dz1V28VZvz2OBl%2FnbXixSMKAzJ%2BqEM6kw%2BIucLnuB05yt4QH0U9zoBB6u66GOZ09Q3b%2FpxJB8U7t8b8ezh5z4UMOG86h7UF2h6MArk5paYNpzk%2FTsW4SxA1dKgxlPOZZv%2BTyVt9CqCN5nu77hrXNr8EIiDf9%2BKVgx4skb8J7Pgk5jRjTFMDu7pdS3Su39R3%2BcmgKoY5s%2BLPsCOgBdNG7vvuDaVhyDDpk3NxR3%2B43SrynsXW%2BxQQJ%2FuFd0K8L1momA3w%2BgqZmd5gFXtEde8FxRb4iGPyieTcwO2F7V4jDBhrtAkZS5P4CSWUYt5mqpNJqNputvcba8OFOUaTadkxyQizX2%2B4WYDOU%2BvcncBkj6Vd0CKfEebpgWqMUUo2ZwBxknh2Oykn5v%2BkKsRF1XU1cxwhlnf966g4jGMwdwX4Y7KJfgJc9jCV6gpfsC1wBEDktVIukntlqbKgOzJDCmyLS%2BBjqkASys7ZPS8vAyQrmWOp5FZYxURnu5d69rveLhaT4LD%2F8ICajDQa4VQUA7v2kNpXV%2F7ZOzsr%2FnPbHr7rr%2BXhP5FvKLAE7EjY2%2Fi7m6bd%2BhBrAb7gIgNRNgPna8KBmnfQIsFg04huTXuHefJ6mAhNm4EUy8tGARML2rCoLQz1FDDBppFB6nIyWygYxR4zx7QmUOYxjrHpxqh2mLCSd%2BkPz1lviV6B5h&X-Amz-Signature=28a52109b3450d6c9d5941a08e8237d15ff9dbbc56f79572085779c12d5302bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3W4DQD%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCnHF4mjUfB08Gua3hkFDI4frh4HzCkpFtraM9I3LmurQIhAIt1DISpn7Z3VAHD%2BQSmebhGAzBEjYxv4Atj203TqcvMKv8DCG4QABoMNjM3NDIzMTgzODA1IgzJoAPVLG711YbDyjAq3AO7tY8i0hG2lOJUPS3NK5Q1Ip4qsU0VVRbFl4PajGrYFyxmdnJ849xn3FYxPM4BY3OlxMzCaNTGb8nHdDqdbFGaDHdxakvi2RHd1RkJZFYCqVOlNmeelRN%2FoPzl1auJYpILf1ssPuxJZaSz4krtlHohOcJ5DXridGMCtrHsQ4z2Zy9Dz1V28VZvz2OBl%2FnbXixSMKAzJ%2BqEM6kw%2BIucLnuB05yt4QH0U9zoBB6u66GOZ09Q3b%2FpxJB8U7t8b8ezh5z4UMOG86h7UF2h6MArk5paYNpzk%2FTsW4SxA1dKgxlPOZZv%2BTyVt9CqCN5nu77hrXNr8EIiDf9%2BKVgx4skb8J7Pgk5jRjTFMDu7pdS3Su39R3%2BcmgKoY5s%2BLPsCOgBdNG7vvuDaVhyDDpk3NxR3%2B43SrynsXW%2BxQQJ%2FuFd0K8L1momA3w%2BgqZmd5gFXtEde8FxRb4iGPyieTcwO2F7V4jDBhrtAkZS5P4CSWUYt5mqpNJqNputvcba8OFOUaTadkxyQizX2%2B4WYDOU%2BvcncBkj6Vd0CKfEebpgWqMUUo2ZwBxknh2Oykn5v%2BkKsRF1XU1cxwhlnf966g4jGMwdwX4Y7KJfgJc9jCV6gpfsC1wBEDktVIukntlqbKgOzJDCmyLS%2BBjqkASys7ZPS8vAyQrmWOp5FZYxURnu5d69rveLhaT4LD%2F8ICajDQa4VQUA7v2kNpXV%2F7ZOzsr%2FnPbHr7rr%2BXhP5FvKLAE7EjY2%2Fi7m6bd%2BhBrAb7gIgNRNgPna8KBmnfQIsFg04huTXuHefJ6mAhNm4EUy8tGARML2rCoLQz1FDDBppFB6nIyWygYxR4zx7QmUOYxjrHpxqh2mLCSd%2BkPz1lviV6B5h&X-Amz-Signature=ded5e3c5530d19f20c5e5f7eed4eb72afa43572409a7be5713a6dc22cec09b8d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3W4DQD%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCnHF4mjUfB08Gua3hkFDI4frh4HzCkpFtraM9I3LmurQIhAIt1DISpn7Z3VAHD%2BQSmebhGAzBEjYxv4Atj203TqcvMKv8DCG4QABoMNjM3NDIzMTgzODA1IgzJoAPVLG711YbDyjAq3AO7tY8i0hG2lOJUPS3NK5Q1Ip4qsU0VVRbFl4PajGrYFyxmdnJ849xn3FYxPM4BY3OlxMzCaNTGb8nHdDqdbFGaDHdxakvi2RHd1RkJZFYCqVOlNmeelRN%2FoPzl1auJYpILf1ssPuxJZaSz4krtlHohOcJ5DXridGMCtrHsQ4z2Zy9Dz1V28VZvz2OBl%2FnbXixSMKAzJ%2BqEM6kw%2BIucLnuB05yt4QH0U9zoBB6u66GOZ09Q3b%2FpxJB8U7t8b8ezh5z4UMOG86h7UF2h6MArk5paYNpzk%2FTsW4SxA1dKgxlPOZZv%2BTyVt9CqCN5nu77hrXNr8EIiDf9%2BKVgx4skb8J7Pgk5jRjTFMDu7pdS3Su39R3%2BcmgKoY5s%2BLPsCOgBdNG7vvuDaVhyDDpk3NxR3%2B43SrynsXW%2BxQQJ%2FuFd0K8L1momA3w%2BgqZmd5gFXtEde8FxRb4iGPyieTcwO2F7V4jDBhrtAkZS5P4CSWUYt5mqpNJqNputvcba8OFOUaTadkxyQizX2%2B4WYDOU%2BvcncBkj6Vd0CKfEebpgWqMUUo2ZwBxknh2Oykn5v%2BkKsRF1XU1cxwhlnf966g4jGMwdwX4Y7KJfgJc9jCV6gpfsC1wBEDktVIukntlqbKgOzJDCmyLS%2BBjqkASys7ZPS8vAyQrmWOp5FZYxURnu5d69rveLhaT4LD%2F8ICajDQa4VQUA7v2kNpXV%2F7ZOzsr%2FnPbHr7rr%2BXhP5FvKLAE7EjY2%2Fi7m6bd%2BhBrAb7gIgNRNgPna8KBmnfQIsFg04huTXuHefJ6mAhNm4EUy8tGARML2rCoLQz1FDDBppFB6nIyWygYxR4zx7QmUOYxjrHpxqh2mLCSd%2BkPz1lviV6B5h&X-Amz-Signature=fe58efba8fe9d45dab9f5c41413849f8ea87ae4390bfd08b5c0077d4dcd9c908&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3W4DQD%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCnHF4mjUfB08Gua3hkFDI4frh4HzCkpFtraM9I3LmurQIhAIt1DISpn7Z3VAHD%2BQSmebhGAzBEjYxv4Atj203TqcvMKv8DCG4QABoMNjM3NDIzMTgzODA1IgzJoAPVLG711YbDyjAq3AO7tY8i0hG2lOJUPS3NK5Q1Ip4qsU0VVRbFl4PajGrYFyxmdnJ849xn3FYxPM4BY3OlxMzCaNTGb8nHdDqdbFGaDHdxakvi2RHd1RkJZFYCqVOlNmeelRN%2FoPzl1auJYpILf1ssPuxJZaSz4krtlHohOcJ5DXridGMCtrHsQ4z2Zy9Dz1V28VZvz2OBl%2FnbXixSMKAzJ%2BqEM6kw%2BIucLnuB05yt4QH0U9zoBB6u66GOZ09Q3b%2FpxJB8U7t8b8ezh5z4UMOG86h7UF2h6MArk5paYNpzk%2FTsW4SxA1dKgxlPOZZv%2BTyVt9CqCN5nu77hrXNr8EIiDf9%2BKVgx4skb8J7Pgk5jRjTFMDu7pdS3Su39R3%2BcmgKoY5s%2BLPsCOgBdNG7vvuDaVhyDDpk3NxR3%2B43SrynsXW%2BxQQJ%2FuFd0K8L1momA3w%2BgqZmd5gFXtEde8FxRb4iGPyieTcwO2F7V4jDBhrtAkZS5P4CSWUYt5mqpNJqNputvcba8OFOUaTadkxyQizX2%2B4WYDOU%2BvcncBkj6Vd0CKfEebpgWqMUUo2ZwBxknh2Oykn5v%2BkKsRF1XU1cxwhlnf966g4jGMwdwX4Y7KJfgJc9jCV6gpfsC1wBEDktVIukntlqbKgOzJDCmyLS%2BBjqkASys7ZPS8vAyQrmWOp5FZYxURnu5d69rveLhaT4LD%2F8ICajDQa4VQUA7v2kNpXV%2F7ZOzsr%2FnPbHr7rr%2BXhP5FvKLAE7EjY2%2Fi7m6bd%2BhBrAb7gIgNRNgPna8KBmnfQIsFg04huTXuHefJ6mAhNm4EUy8tGARML2rCoLQz1FDDBppFB6nIyWygYxR4zx7QmUOYxjrHpxqh2mLCSd%2BkPz1lviV6B5h&X-Amz-Signature=1941d1f9efb98a862b74eab05c38a0ecc2b36e5ea07a9031d98f67065d73acfe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3W4DQD%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCnHF4mjUfB08Gua3hkFDI4frh4HzCkpFtraM9I3LmurQIhAIt1DISpn7Z3VAHD%2BQSmebhGAzBEjYxv4Atj203TqcvMKv8DCG4QABoMNjM3NDIzMTgzODA1IgzJoAPVLG711YbDyjAq3AO7tY8i0hG2lOJUPS3NK5Q1Ip4qsU0VVRbFl4PajGrYFyxmdnJ849xn3FYxPM4BY3OlxMzCaNTGb8nHdDqdbFGaDHdxakvi2RHd1RkJZFYCqVOlNmeelRN%2FoPzl1auJYpILf1ssPuxJZaSz4krtlHohOcJ5DXridGMCtrHsQ4z2Zy9Dz1V28VZvz2OBl%2FnbXixSMKAzJ%2BqEM6kw%2BIucLnuB05yt4QH0U9zoBB6u66GOZ09Q3b%2FpxJB8U7t8b8ezh5z4UMOG86h7UF2h6MArk5paYNpzk%2FTsW4SxA1dKgxlPOZZv%2BTyVt9CqCN5nu77hrXNr8EIiDf9%2BKVgx4skb8J7Pgk5jRjTFMDu7pdS3Su39R3%2BcmgKoY5s%2BLPsCOgBdNG7vvuDaVhyDDpk3NxR3%2B43SrynsXW%2BxQQJ%2FuFd0K8L1momA3w%2BgqZmd5gFXtEde8FxRb4iGPyieTcwO2F7V4jDBhrtAkZS5P4CSWUYt5mqpNJqNputvcba8OFOUaTadkxyQizX2%2B4WYDOU%2BvcncBkj6Vd0CKfEebpgWqMUUo2ZwBxknh2Oykn5v%2BkKsRF1XU1cxwhlnf966g4jGMwdwX4Y7KJfgJc9jCV6gpfsC1wBEDktVIukntlqbKgOzJDCmyLS%2BBjqkASys7ZPS8vAyQrmWOp5FZYxURnu5d69rveLhaT4LD%2F8ICajDQa4VQUA7v2kNpXV%2F7ZOzsr%2FnPbHr7rr%2BXhP5FvKLAE7EjY2%2Fi7m6bd%2BhBrAb7gIgNRNgPna8KBmnfQIsFg04huTXuHefJ6mAhNm4EUy8tGARML2rCoLQz1FDDBppFB6nIyWygYxR4zx7QmUOYxjrHpxqh2mLCSd%2BkPz1lviV6B5h&X-Amz-Signature=ddb364b0eb4a7a5b5ca0534af5296887ab82a9bbdf1ca70fc811691809a5c5b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3W4DQD%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCnHF4mjUfB08Gua3hkFDI4frh4HzCkpFtraM9I3LmurQIhAIt1DISpn7Z3VAHD%2BQSmebhGAzBEjYxv4Atj203TqcvMKv8DCG4QABoMNjM3NDIzMTgzODA1IgzJoAPVLG711YbDyjAq3AO7tY8i0hG2lOJUPS3NK5Q1Ip4qsU0VVRbFl4PajGrYFyxmdnJ849xn3FYxPM4BY3OlxMzCaNTGb8nHdDqdbFGaDHdxakvi2RHd1RkJZFYCqVOlNmeelRN%2FoPzl1auJYpILf1ssPuxJZaSz4krtlHohOcJ5DXridGMCtrHsQ4z2Zy9Dz1V28VZvz2OBl%2FnbXixSMKAzJ%2BqEM6kw%2BIucLnuB05yt4QH0U9zoBB6u66GOZ09Q3b%2FpxJB8U7t8b8ezh5z4UMOG86h7UF2h6MArk5paYNpzk%2FTsW4SxA1dKgxlPOZZv%2BTyVt9CqCN5nu77hrXNr8EIiDf9%2BKVgx4skb8J7Pgk5jRjTFMDu7pdS3Su39R3%2BcmgKoY5s%2BLPsCOgBdNG7vvuDaVhyDDpk3NxR3%2B43SrynsXW%2BxQQJ%2FuFd0K8L1momA3w%2BgqZmd5gFXtEde8FxRb4iGPyieTcwO2F7V4jDBhrtAkZS5P4CSWUYt5mqpNJqNputvcba8OFOUaTadkxyQizX2%2B4WYDOU%2BvcncBkj6Vd0CKfEebpgWqMUUo2ZwBxknh2Oykn5v%2BkKsRF1XU1cxwhlnf966g4jGMwdwX4Y7KJfgJc9jCV6gpfsC1wBEDktVIukntlqbKgOzJDCmyLS%2BBjqkASys7ZPS8vAyQrmWOp5FZYxURnu5d69rveLhaT4LD%2F8ICajDQa4VQUA7v2kNpXV%2F7ZOzsr%2FnPbHr7rr%2BXhP5FvKLAE7EjY2%2Fi7m6bd%2BhBrAb7gIgNRNgPna8KBmnfQIsFg04huTXuHefJ6mAhNm4EUy8tGARML2rCoLQz1FDDBppFB6nIyWygYxR4zx7QmUOYxjrHpxqh2mLCSd%2BkPz1lviV6B5h&X-Amz-Signature=4a775ab1b40e4fd8a58e8ec52c0398a2e4252146b1b9fce539767d430ad1db2f&X-Amz-SignedHeaders=host&x-id=GetObject)
