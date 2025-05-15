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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBXJ4FI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDSGHTQX7Px7f7bKJ%2FWO9acTAf78Dy5FejBKEccgOnbFQIhANvQxtC4KOTS7KexRBWxDx67JqwaDfEAhfmtZaf%2F9WudKv8DCDgQABoMNjM3NDIzMTgzODA1IgzMCfLEBJ%2FpuCXviRYq3APy6VNLPPfiLag7uKT9W6FRvUNdX7hYbUs9NmpM7jiPn51eyg%2B9aX%2B2hXSiQOz7zk8eMo1f8FW5O7lhCb2NMWsIbQWM%2B6VufRfKVFwKLKOMqcvaLbyaqxvk3RQzR2zMzco0t6beuPSanZyFdN3bu9KkSq%2B6CDq81tidzqukhLpTyp7WboAGUziwDBAaOLq6omCrVNoTNopN9yjNqVkD8ChSq7s2iD6%2B%2BHlWJPxk51hd8mVPwTr9an6vbX9sEm2zSM9ocUntghQxtBDuK02N%2Bah4TbZqJyMYP1jbDPGUrM1ag4qXZjHS6D6%2BYcR5o99Cint4%2Fili3%2BpN%2BmKT83Z5TLjEVaiFZv2LbMvNVQ6zXKbE6XIcW15bX0ZluR59qRXudgskVSchZZGMllGB0uBI%2BOfTK27DxXO8yq9z1GBxQQkH%2FLND0ddNqRIbfLW82ftYvSZcoOPXdRHPJRtbkqzTuj6IKliyReLLQy5Bkxxac5CplVVrX4pLj9honQmnwsCVt3gBHjkQMqsaf9cRXBc3p%2F7rv5EFFv3mpq8BoLNfCYwvpr0xgYB3w%2FpVxrR9L7JueIbpCNbeSGjQrBa5dpvaH9aLqW2C%2BaBZHVGEbLdlmlvMCyWS7gGWoghlTOIzSjDV4pnBBjqkAQecNoa%2FhLsqoRRWf3xBWY3Z59DOcZUFcv0TSijm8Ev7R5tVeGFhj6UphGvF%2F6nNr5PU%2FGxZzUFltW7VUpOwr9lD6QUSLIIaO49pEpuhec1g2uOIaI26H437Rs%2BHej1R1EAYLA8Pqyt6F9R9VeycmSvA4J337E65B%2FrHXtelgdPZhUjuUf6pBOUpRbRgwTe6gOXVUxch9QWjI%2FA1S0urOURaQCJE&X-Amz-Signature=cfb4f8595ea7f6bf4c3a9076b6c1b4c3b6aa4ab9635358ef31029a6e06e11c84&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBXJ4FI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDSGHTQX7Px7f7bKJ%2FWO9acTAf78Dy5FejBKEccgOnbFQIhANvQxtC4KOTS7KexRBWxDx67JqwaDfEAhfmtZaf%2F9WudKv8DCDgQABoMNjM3NDIzMTgzODA1IgzMCfLEBJ%2FpuCXviRYq3APy6VNLPPfiLag7uKT9W6FRvUNdX7hYbUs9NmpM7jiPn51eyg%2B9aX%2B2hXSiQOz7zk8eMo1f8FW5O7lhCb2NMWsIbQWM%2B6VufRfKVFwKLKOMqcvaLbyaqxvk3RQzR2zMzco0t6beuPSanZyFdN3bu9KkSq%2B6CDq81tidzqukhLpTyp7WboAGUziwDBAaOLq6omCrVNoTNopN9yjNqVkD8ChSq7s2iD6%2B%2BHlWJPxk51hd8mVPwTr9an6vbX9sEm2zSM9ocUntghQxtBDuK02N%2Bah4TbZqJyMYP1jbDPGUrM1ag4qXZjHS6D6%2BYcR5o99Cint4%2Fili3%2BpN%2BmKT83Z5TLjEVaiFZv2LbMvNVQ6zXKbE6XIcW15bX0ZluR59qRXudgskVSchZZGMllGB0uBI%2BOfTK27DxXO8yq9z1GBxQQkH%2FLND0ddNqRIbfLW82ftYvSZcoOPXdRHPJRtbkqzTuj6IKliyReLLQy5Bkxxac5CplVVrX4pLj9honQmnwsCVt3gBHjkQMqsaf9cRXBc3p%2F7rv5EFFv3mpq8BoLNfCYwvpr0xgYB3w%2FpVxrR9L7JueIbpCNbeSGjQrBa5dpvaH9aLqW2C%2BaBZHVGEbLdlmlvMCyWS7gGWoghlTOIzSjDV4pnBBjqkAQecNoa%2FhLsqoRRWf3xBWY3Z59DOcZUFcv0TSijm8Ev7R5tVeGFhj6UphGvF%2F6nNr5PU%2FGxZzUFltW7VUpOwr9lD6QUSLIIaO49pEpuhec1g2uOIaI26H437Rs%2BHej1R1EAYLA8Pqyt6F9R9VeycmSvA4J337E65B%2FrHXtelgdPZhUjuUf6pBOUpRbRgwTe6gOXVUxch9QWjI%2FA1S0urOURaQCJE&X-Amz-Signature=bb32e0154773007cc31d0fb011ac0fb00c7824fb61f9e128f1cbe92eb51e8eee&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBXJ4FI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDSGHTQX7Px7f7bKJ%2FWO9acTAf78Dy5FejBKEccgOnbFQIhANvQxtC4KOTS7KexRBWxDx67JqwaDfEAhfmtZaf%2F9WudKv8DCDgQABoMNjM3NDIzMTgzODA1IgzMCfLEBJ%2FpuCXviRYq3APy6VNLPPfiLag7uKT9W6FRvUNdX7hYbUs9NmpM7jiPn51eyg%2B9aX%2B2hXSiQOz7zk8eMo1f8FW5O7lhCb2NMWsIbQWM%2B6VufRfKVFwKLKOMqcvaLbyaqxvk3RQzR2zMzco0t6beuPSanZyFdN3bu9KkSq%2B6CDq81tidzqukhLpTyp7WboAGUziwDBAaOLq6omCrVNoTNopN9yjNqVkD8ChSq7s2iD6%2B%2BHlWJPxk51hd8mVPwTr9an6vbX9sEm2zSM9ocUntghQxtBDuK02N%2Bah4TbZqJyMYP1jbDPGUrM1ag4qXZjHS6D6%2BYcR5o99Cint4%2Fili3%2BpN%2BmKT83Z5TLjEVaiFZv2LbMvNVQ6zXKbE6XIcW15bX0ZluR59qRXudgskVSchZZGMllGB0uBI%2BOfTK27DxXO8yq9z1GBxQQkH%2FLND0ddNqRIbfLW82ftYvSZcoOPXdRHPJRtbkqzTuj6IKliyReLLQy5Bkxxac5CplVVrX4pLj9honQmnwsCVt3gBHjkQMqsaf9cRXBc3p%2F7rv5EFFv3mpq8BoLNfCYwvpr0xgYB3w%2FpVxrR9L7JueIbpCNbeSGjQrBa5dpvaH9aLqW2C%2BaBZHVGEbLdlmlvMCyWS7gGWoghlTOIzSjDV4pnBBjqkAQecNoa%2FhLsqoRRWf3xBWY3Z59DOcZUFcv0TSijm8Ev7R5tVeGFhj6UphGvF%2F6nNr5PU%2FGxZzUFltW7VUpOwr9lD6QUSLIIaO49pEpuhec1g2uOIaI26H437Rs%2BHej1R1EAYLA8Pqyt6F9R9VeycmSvA4J337E65B%2FrHXtelgdPZhUjuUf6pBOUpRbRgwTe6gOXVUxch9QWjI%2FA1S0urOURaQCJE&X-Amz-Signature=ec31c42eb087baa325aef2fd66822552adb3d8c5d837f245bf64a89f219afcbd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBXJ4FI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDSGHTQX7Px7f7bKJ%2FWO9acTAf78Dy5FejBKEccgOnbFQIhANvQxtC4KOTS7KexRBWxDx67JqwaDfEAhfmtZaf%2F9WudKv8DCDgQABoMNjM3NDIzMTgzODA1IgzMCfLEBJ%2FpuCXviRYq3APy6VNLPPfiLag7uKT9W6FRvUNdX7hYbUs9NmpM7jiPn51eyg%2B9aX%2B2hXSiQOz7zk8eMo1f8FW5O7lhCb2NMWsIbQWM%2B6VufRfKVFwKLKOMqcvaLbyaqxvk3RQzR2zMzco0t6beuPSanZyFdN3bu9KkSq%2B6CDq81tidzqukhLpTyp7WboAGUziwDBAaOLq6omCrVNoTNopN9yjNqVkD8ChSq7s2iD6%2B%2BHlWJPxk51hd8mVPwTr9an6vbX9sEm2zSM9ocUntghQxtBDuK02N%2Bah4TbZqJyMYP1jbDPGUrM1ag4qXZjHS6D6%2BYcR5o99Cint4%2Fili3%2BpN%2BmKT83Z5TLjEVaiFZv2LbMvNVQ6zXKbE6XIcW15bX0ZluR59qRXudgskVSchZZGMllGB0uBI%2BOfTK27DxXO8yq9z1GBxQQkH%2FLND0ddNqRIbfLW82ftYvSZcoOPXdRHPJRtbkqzTuj6IKliyReLLQy5Bkxxac5CplVVrX4pLj9honQmnwsCVt3gBHjkQMqsaf9cRXBc3p%2F7rv5EFFv3mpq8BoLNfCYwvpr0xgYB3w%2FpVxrR9L7JueIbpCNbeSGjQrBa5dpvaH9aLqW2C%2BaBZHVGEbLdlmlvMCyWS7gGWoghlTOIzSjDV4pnBBjqkAQecNoa%2FhLsqoRRWf3xBWY3Z59DOcZUFcv0TSijm8Ev7R5tVeGFhj6UphGvF%2F6nNr5PU%2FGxZzUFltW7VUpOwr9lD6QUSLIIaO49pEpuhec1g2uOIaI26H437Rs%2BHej1R1EAYLA8Pqyt6F9R9VeycmSvA4J337E65B%2FrHXtelgdPZhUjuUf6pBOUpRbRgwTe6gOXVUxch9QWjI%2FA1S0urOURaQCJE&X-Amz-Signature=fef4b0ca70c7b5daa48ef40c0a47406d05dfa683c755f20e15e925cd41b29332&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBXJ4FI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDSGHTQX7Px7f7bKJ%2FWO9acTAf78Dy5FejBKEccgOnbFQIhANvQxtC4KOTS7KexRBWxDx67JqwaDfEAhfmtZaf%2F9WudKv8DCDgQABoMNjM3NDIzMTgzODA1IgzMCfLEBJ%2FpuCXviRYq3APy6VNLPPfiLag7uKT9W6FRvUNdX7hYbUs9NmpM7jiPn51eyg%2B9aX%2B2hXSiQOz7zk8eMo1f8FW5O7lhCb2NMWsIbQWM%2B6VufRfKVFwKLKOMqcvaLbyaqxvk3RQzR2zMzco0t6beuPSanZyFdN3bu9KkSq%2B6CDq81tidzqukhLpTyp7WboAGUziwDBAaOLq6omCrVNoTNopN9yjNqVkD8ChSq7s2iD6%2B%2BHlWJPxk51hd8mVPwTr9an6vbX9sEm2zSM9ocUntghQxtBDuK02N%2Bah4TbZqJyMYP1jbDPGUrM1ag4qXZjHS6D6%2BYcR5o99Cint4%2Fili3%2BpN%2BmKT83Z5TLjEVaiFZv2LbMvNVQ6zXKbE6XIcW15bX0ZluR59qRXudgskVSchZZGMllGB0uBI%2BOfTK27DxXO8yq9z1GBxQQkH%2FLND0ddNqRIbfLW82ftYvSZcoOPXdRHPJRtbkqzTuj6IKliyReLLQy5Bkxxac5CplVVrX4pLj9honQmnwsCVt3gBHjkQMqsaf9cRXBc3p%2F7rv5EFFv3mpq8BoLNfCYwvpr0xgYB3w%2FpVxrR9L7JueIbpCNbeSGjQrBa5dpvaH9aLqW2C%2BaBZHVGEbLdlmlvMCyWS7gGWoghlTOIzSjDV4pnBBjqkAQecNoa%2FhLsqoRRWf3xBWY3Z59DOcZUFcv0TSijm8Ev7R5tVeGFhj6UphGvF%2F6nNr5PU%2FGxZzUFltW7VUpOwr9lD6QUSLIIaO49pEpuhec1g2uOIaI26H437Rs%2BHej1R1EAYLA8Pqyt6F9R9VeycmSvA4J337E65B%2FrHXtelgdPZhUjuUf6pBOUpRbRgwTe6gOXVUxch9QWjI%2FA1S0urOURaQCJE&X-Amz-Signature=298c0dc5174d111b18ae17e67f20133b160b82cffc3cfd8a7d511d5315b7062b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCBXJ4FI%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDSGHTQX7Px7f7bKJ%2FWO9acTAf78Dy5FejBKEccgOnbFQIhANvQxtC4KOTS7KexRBWxDx67JqwaDfEAhfmtZaf%2F9WudKv8DCDgQABoMNjM3NDIzMTgzODA1IgzMCfLEBJ%2FpuCXviRYq3APy6VNLPPfiLag7uKT9W6FRvUNdX7hYbUs9NmpM7jiPn51eyg%2B9aX%2B2hXSiQOz7zk8eMo1f8FW5O7lhCb2NMWsIbQWM%2B6VufRfKVFwKLKOMqcvaLbyaqxvk3RQzR2zMzco0t6beuPSanZyFdN3bu9KkSq%2B6CDq81tidzqukhLpTyp7WboAGUziwDBAaOLq6omCrVNoTNopN9yjNqVkD8ChSq7s2iD6%2B%2BHlWJPxk51hd8mVPwTr9an6vbX9sEm2zSM9ocUntghQxtBDuK02N%2Bah4TbZqJyMYP1jbDPGUrM1ag4qXZjHS6D6%2BYcR5o99Cint4%2Fili3%2BpN%2BmKT83Z5TLjEVaiFZv2LbMvNVQ6zXKbE6XIcW15bX0ZluR59qRXudgskVSchZZGMllGB0uBI%2BOfTK27DxXO8yq9z1GBxQQkH%2FLND0ddNqRIbfLW82ftYvSZcoOPXdRHPJRtbkqzTuj6IKliyReLLQy5Bkxxac5CplVVrX4pLj9honQmnwsCVt3gBHjkQMqsaf9cRXBc3p%2F7rv5EFFv3mpq8BoLNfCYwvpr0xgYB3w%2FpVxrR9L7JueIbpCNbeSGjQrBa5dpvaH9aLqW2C%2BaBZHVGEbLdlmlvMCyWS7gGWoghlTOIzSjDV4pnBBjqkAQecNoa%2FhLsqoRRWf3xBWY3Z59DOcZUFcv0TSijm8Ev7R5tVeGFhj6UphGvF%2F6nNr5PU%2FGxZzUFltW7VUpOwr9lD6QUSLIIaO49pEpuhec1g2uOIaI26H437Rs%2BHej1R1EAYLA8Pqyt6F9R9VeycmSvA4J337E65B%2FrHXtelgdPZhUjuUf6pBOUpRbRgwTe6gOXVUxch9QWjI%2FA1S0urOURaQCJE&X-Amz-Signature=c5c22b826bd07cc33f2e8e2cc748e1e2da68bfddf7e34305c532afcc2ebf840b&X-Amz-SignedHeaders=host&x-id=GetObject)
