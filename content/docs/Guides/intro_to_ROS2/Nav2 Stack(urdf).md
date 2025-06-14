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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXKP556%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGJGUMgB7L7dLnKt8ERmWFajnQKIUSBQp8F5tSefWcLGAiBH8ZyAuU09KqkiO7Le3xHIUGm3NUkfs6KlK2GVeo6cYyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMw0dv0TRWsBGuWetwKtwDhA4GRshVi4sgYji3nilwNBenkauLADa%2F0fJ8MD8ujVn2CispmhOFENcXab8GiinuFpqATwddCW%2F%2BB6qZViwSb7VVhpHh5yXShbH1IkSnm1FsZDABkathNvwlHNh26905%2BZRAfz8X%2B0Gezm3itvVpsu8m9sgq6Bq3308MhmK%2Fws%2BAzC9O1TzLuSAPRjvWluQg7W4NFOkDkydK5h%2BxT56%2BqjRnc4OyYJrTk3qjIH4cEj%2FyQUboBMf6DgeSLPr1I%2BpgvbgWqj9MGQWXNhCiYCC4WuhCNyuMn9eGJ8JEfXBRo8jvSibrUu%2BGEIn%2FHt2VLB0fB%2B3ZhpOZSTMXxQQah8VkoE8yDOtSIS4NwvM4mkS3kwhzllyrGmy2uFyWI0VoJXef9yZwtUXevsqbkr9taT7q%2B6XR%2FcWuC6EllGrbSH7exRkE6YjAF%2BCfz7wBsXeo759hBqT7t1kWwZCYO3hC66FZt6wgv5CyyjKs4oo1IZ1cq%2B1AxhAzLjAhvYHmE5%2Fi74BIZvQmklO%2BOcXOTT%2BdoyJw5mTo437K1K2Z8s1MjMkPRqQlLnNxCLN5djzX6U8muMPIUrQA6M8lP%2F6B0il8G2Cnh8IfRxNyv%2Fnx2eAn8U%2FQIqbStt3cKk6JuLgJjEwwn8G1wgY6pgHe3WghsavU%2FiTQUgMzuteLzCVGdBuq97tCivR1tm6ZBcAN48X3xuPAm3ducEa%2F6URIh1ZV0oL6U0itKaGowULnInApHpKJU2zoPnHJc9LhURjBqYQTCHAXIvCxr46Fk6QHuSOJIkLoDlpQUKZsGHniO%2B1Twx3UkvRWdLV3PyP7v4KcfpeToxZf9YVwYQtsIiNxuNJTaJQxre4oEYfa7yheNvvc0RPd&X-Amz-Signature=57e43d2dfa354c5ac817624c455ae6065ee723387f4a6a2ecadad1edbef71e0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXKP556%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGJGUMgB7L7dLnKt8ERmWFajnQKIUSBQp8F5tSefWcLGAiBH8ZyAuU09KqkiO7Le3xHIUGm3NUkfs6KlK2GVeo6cYyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMw0dv0TRWsBGuWetwKtwDhA4GRshVi4sgYji3nilwNBenkauLADa%2F0fJ8MD8ujVn2CispmhOFENcXab8GiinuFpqATwddCW%2F%2BB6qZViwSb7VVhpHh5yXShbH1IkSnm1FsZDABkathNvwlHNh26905%2BZRAfz8X%2B0Gezm3itvVpsu8m9sgq6Bq3308MhmK%2Fws%2BAzC9O1TzLuSAPRjvWluQg7W4NFOkDkydK5h%2BxT56%2BqjRnc4OyYJrTk3qjIH4cEj%2FyQUboBMf6DgeSLPr1I%2BpgvbgWqj9MGQWXNhCiYCC4WuhCNyuMn9eGJ8JEfXBRo8jvSibrUu%2BGEIn%2FHt2VLB0fB%2B3ZhpOZSTMXxQQah8VkoE8yDOtSIS4NwvM4mkS3kwhzllyrGmy2uFyWI0VoJXef9yZwtUXevsqbkr9taT7q%2B6XR%2FcWuC6EllGrbSH7exRkE6YjAF%2BCfz7wBsXeo759hBqT7t1kWwZCYO3hC66FZt6wgv5CyyjKs4oo1IZ1cq%2B1AxhAzLjAhvYHmE5%2Fi74BIZvQmklO%2BOcXOTT%2BdoyJw5mTo437K1K2Z8s1MjMkPRqQlLnNxCLN5djzX6U8muMPIUrQA6M8lP%2F6B0il8G2Cnh8IfRxNyv%2Fnx2eAn8U%2FQIqbStt3cKk6JuLgJjEwwn8G1wgY6pgHe3WghsavU%2FiTQUgMzuteLzCVGdBuq97tCivR1tm6ZBcAN48X3xuPAm3ducEa%2F6URIh1ZV0oL6U0itKaGowULnInApHpKJU2zoPnHJc9LhURjBqYQTCHAXIvCxr46Fk6QHuSOJIkLoDlpQUKZsGHniO%2B1Twx3UkvRWdLV3PyP7v4KcfpeToxZf9YVwYQtsIiNxuNJTaJQxre4oEYfa7yheNvvc0RPd&X-Amz-Signature=57c593b46b5c5f653bb1cecb9dc27ca47c21f457c43ee80d5a35c91415db3c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXKP556%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGJGUMgB7L7dLnKt8ERmWFajnQKIUSBQp8F5tSefWcLGAiBH8ZyAuU09KqkiO7Le3xHIUGm3NUkfs6KlK2GVeo6cYyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMw0dv0TRWsBGuWetwKtwDhA4GRshVi4sgYji3nilwNBenkauLADa%2F0fJ8MD8ujVn2CispmhOFENcXab8GiinuFpqATwddCW%2F%2BB6qZViwSb7VVhpHh5yXShbH1IkSnm1FsZDABkathNvwlHNh26905%2BZRAfz8X%2B0Gezm3itvVpsu8m9sgq6Bq3308MhmK%2Fws%2BAzC9O1TzLuSAPRjvWluQg7W4NFOkDkydK5h%2BxT56%2BqjRnc4OyYJrTk3qjIH4cEj%2FyQUboBMf6DgeSLPr1I%2BpgvbgWqj9MGQWXNhCiYCC4WuhCNyuMn9eGJ8JEfXBRo8jvSibrUu%2BGEIn%2FHt2VLB0fB%2B3ZhpOZSTMXxQQah8VkoE8yDOtSIS4NwvM4mkS3kwhzllyrGmy2uFyWI0VoJXef9yZwtUXevsqbkr9taT7q%2B6XR%2FcWuC6EllGrbSH7exRkE6YjAF%2BCfz7wBsXeo759hBqT7t1kWwZCYO3hC66FZt6wgv5CyyjKs4oo1IZ1cq%2B1AxhAzLjAhvYHmE5%2Fi74BIZvQmklO%2BOcXOTT%2BdoyJw5mTo437K1K2Z8s1MjMkPRqQlLnNxCLN5djzX6U8muMPIUrQA6M8lP%2F6B0il8G2Cnh8IfRxNyv%2Fnx2eAn8U%2FQIqbStt3cKk6JuLgJjEwwn8G1wgY6pgHe3WghsavU%2FiTQUgMzuteLzCVGdBuq97tCivR1tm6ZBcAN48X3xuPAm3ducEa%2F6URIh1ZV0oL6U0itKaGowULnInApHpKJU2zoPnHJc9LhURjBqYQTCHAXIvCxr46Fk6QHuSOJIkLoDlpQUKZsGHniO%2B1Twx3UkvRWdLV3PyP7v4KcfpeToxZf9YVwYQtsIiNxuNJTaJQxre4oEYfa7yheNvvc0RPd&X-Amz-Signature=b3dad98fc81964ee2cb76a2058c18f5056a1bfbfc5bb13d01604e102505a8fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXKP556%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGJGUMgB7L7dLnKt8ERmWFajnQKIUSBQp8F5tSefWcLGAiBH8ZyAuU09KqkiO7Le3xHIUGm3NUkfs6KlK2GVeo6cYyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMw0dv0TRWsBGuWetwKtwDhA4GRshVi4sgYji3nilwNBenkauLADa%2F0fJ8MD8ujVn2CispmhOFENcXab8GiinuFpqATwddCW%2F%2BB6qZViwSb7VVhpHh5yXShbH1IkSnm1FsZDABkathNvwlHNh26905%2BZRAfz8X%2B0Gezm3itvVpsu8m9sgq6Bq3308MhmK%2Fws%2BAzC9O1TzLuSAPRjvWluQg7W4NFOkDkydK5h%2BxT56%2BqjRnc4OyYJrTk3qjIH4cEj%2FyQUboBMf6DgeSLPr1I%2BpgvbgWqj9MGQWXNhCiYCC4WuhCNyuMn9eGJ8JEfXBRo8jvSibrUu%2BGEIn%2FHt2VLB0fB%2B3ZhpOZSTMXxQQah8VkoE8yDOtSIS4NwvM4mkS3kwhzllyrGmy2uFyWI0VoJXef9yZwtUXevsqbkr9taT7q%2B6XR%2FcWuC6EllGrbSH7exRkE6YjAF%2BCfz7wBsXeo759hBqT7t1kWwZCYO3hC66FZt6wgv5CyyjKs4oo1IZ1cq%2B1AxhAzLjAhvYHmE5%2Fi74BIZvQmklO%2BOcXOTT%2BdoyJw5mTo437K1K2Z8s1MjMkPRqQlLnNxCLN5djzX6U8muMPIUrQA6M8lP%2F6B0il8G2Cnh8IfRxNyv%2Fnx2eAn8U%2FQIqbStt3cKk6JuLgJjEwwn8G1wgY6pgHe3WghsavU%2FiTQUgMzuteLzCVGdBuq97tCivR1tm6ZBcAN48X3xuPAm3ducEa%2F6URIh1ZV0oL6U0itKaGowULnInApHpKJU2zoPnHJc9LhURjBqYQTCHAXIvCxr46Fk6QHuSOJIkLoDlpQUKZsGHniO%2B1Twx3UkvRWdLV3PyP7v4KcfpeToxZf9YVwYQtsIiNxuNJTaJQxre4oEYfa7yheNvvc0RPd&X-Amz-Signature=f9c8e3143822e0b3dd52e8cf644d5867ec4f1ecf35bcfc0d5352efd5f9c2d9b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXKP556%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGJGUMgB7L7dLnKt8ERmWFajnQKIUSBQp8F5tSefWcLGAiBH8ZyAuU09KqkiO7Le3xHIUGm3NUkfs6KlK2GVeo6cYyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMw0dv0TRWsBGuWetwKtwDhA4GRshVi4sgYji3nilwNBenkauLADa%2F0fJ8MD8ujVn2CispmhOFENcXab8GiinuFpqATwddCW%2F%2BB6qZViwSb7VVhpHh5yXShbH1IkSnm1FsZDABkathNvwlHNh26905%2BZRAfz8X%2B0Gezm3itvVpsu8m9sgq6Bq3308MhmK%2Fws%2BAzC9O1TzLuSAPRjvWluQg7W4NFOkDkydK5h%2BxT56%2BqjRnc4OyYJrTk3qjIH4cEj%2FyQUboBMf6DgeSLPr1I%2BpgvbgWqj9MGQWXNhCiYCC4WuhCNyuMn9eGJ8JEfXBRo8jvSibrUu%2BGEIn%2FHt2VLB0fB%2B3ZhpOZSTMXxQQah8VkoE8yDOtSIS4NwvM4mkS3kwhzllyrGmy2uFyWI0VoJXef9yZwtUXevsqbkr9taT7q%2B6XR%2FcWuC6EllGrbSH7exRkE6YjAF%2BCfz7wBsXeo759hBqT7t1kWwZCYO3hC66FZt6wgv5CyyjKs4oo1IZ1cq%2B1AxhAzLjAhvYHmE5%2Fi74BIZvQmklO%2BOcXOTT%2BdoyJw5mTo437K1K2Z8s1MjMkPRqQlLnNxCLN5djzX6U8muMPIUrQA6M8lP%2F6B0il8G2Cnh8IfRxNyv%2Fnx2eAn8U%2FQIqbStt3cKk6JuLgJjEwwn8G1wgY6pgHe3WghsavU%2FiTQUgMzuteLzCVGdBuq97tCivR1tm6ZBcAN48X3xuPAm3ducEa%2F6URIh1ZV0oL6U0itKaGowULnInApHpKJU2zoPnHJc9LhURjBqYQTCHAXIvCxr46Fk6QHuSOJIkLoDlpQUKZsGHniO%2B1Twx3UkvRWdLV3PyP7v4KcfpeToxZf9YVwYQtsIiNxuNJTaJQxre4oEYfa7yheNvvc0RPd&X-Amz-Signature=dba2010760c05743661fd0c824f0151be79068777c27a1adcafe6e9166512413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXKP556%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGJGUMgB7L7dLnKt8ERmWFajnQKIUSBQp8F5tSefWcLGAiBH8ZyAuU09KqkiO7Le3xHIUGm3NUkfs6KlK2GVeo6cYyr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMw0dv0TRWsBGuWetwKtwDhA4GRshVi4sgYji3nilwNBenkauLADa%2F0fJ8MD8ujVn2CispmhOFENcXab8GiinuFpqATwddCW%2F%2BB6qZViwSb7VVhpHh5yXShbH1IkSnm1FsZDABkathNvwlHNh26905%2BZRAfz8X%2B0Gezm3itvVpsu8m9sgq6Bq3308MhmK%2Fws%2BAzC9O1TzLuSAPRjvWluQg7W4NFOkDkydK5h%2BxT56%2BqjRnc4OyYJrTk3qjIH4cEj%2FyQUboBMf6DgeSLPr1I%2BpgvbgWqj9MGQWXNhCiYCC4WuhCNyuMn9eGJ8JEfXBRo8jvSibrUu%2BGEIn%2FHt2VLB0fB%2B3ZhpOZSTMXxQQah8VkoE8yDOtSIS4NwvM4mkS3kwhzllyrGmy2uFyWI0VoJXef9yZwtUXevsqbkr9taT7q%2B6XR%2FcWuC6EllGrbSH7exRkE6YjAF%2BCfz7wBsXeo759hBqT7t1kWwZCYO3hC66FZt6wgv5CyyjKs4oo1IZ1cq%2B1AxhAzLjAhvYHmE5%2Fi74BIZvQmklO%2BOcXOTT%2BdoyJw5mTo437K1K2Z8s1MjMkPRqQlLnNxCLN5djzX6U8muMPIUrQA6M8lP%2F6B0il8G2Cnh8IfRxNyv%2Fnx2eAn8U%2FQIqbStt3cKk6JuLgJjEwwn8G1wgY6pgHe3WghsavU%2FiTQUgMzuteLzCVGdBuq97tCivR1tm6ZBcAN48X3xuPAm3ducEa%2F6URIh1ZV0oL6U0itKaGowULnInApHpKJU2zoPnHJc9LhURjBqYQTCHAXIvCxr46Fk6QHuSOJIkLoDlpQUKZsGHniO%2B1Twx3UkvRWdLV3PyP7v4KcfpeToxZf9YVwYQtsIiNxuNJTaJQxre4oEYfa7yheNvvc0RPd&X-Amz-Signature=d55a43828e99cfb4a62bb4e0f472842724ebfa89fc579f8a4cb46924d735e523&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
