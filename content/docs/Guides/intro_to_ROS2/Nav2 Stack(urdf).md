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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLF7CO3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBXKOIr45qTAAt%2FCXOmMQRwgV3rVEakPftqCdUM6z3GfAiAJKNlZhR0al50ny6lVcqLigdybiRX0vBjoWxaarMazJSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFJ%2BHO8wzfk3Yv2ZfKtwDGN7j2iNjUkzLlA%2BLn%2FfsV%2BLQFviAgljcGBaiLo9RgU%2FAvASO3AzoIoIqv59kSQpyjb%2BS%2Fbf918ojBWPSoeJDgwmXHtX6lfFx0iHIgwpZ313t5XfpZV3FhkAHL6iG%2Fb3eENX9kTH6%2FLZq64mNI%2F1Y50z09LHBkyjVLxZgBuViH5cmLbN4RpgUBYFSXSgNISrdnsqj6TZh9ovVTTn1DFz%2B3JbghgTb4oat%2FTeiF8j43XYT3WndNQSxcJEhouu43YrBcXv2qIeIYvUOn%2Blw10PkaJzXQfbV6nTbTEeHSN%2BlB%2FuKylsP%2FonDvzwV9Vh%2BweZmhK8M4IZoltpllSJmIq98sTLsg6JpiLZoShg93hmpoprU%2FhxeVxKh0IPurxzjxJ97zt4bi%2FOh0iBUCZtD45SRkYJm2LzI%2B%2BTzwHQVuVTbCuuVgB92%2FsyfmsXw4v00fJuP%2B2DUQ5MEm4eTx5RBOOQAYqL61QUQtrsYHNk776RaMOPBJQXBdxEOrjRqHnmj340W2BvH2Y2gklQFW9z%2FJuSkoc6Pldc0AkWYbJyUh0qjN28fjbZK54kVhnmsnclDcNsuA2SBW0lLnQUhQvuK1FPfQWwfxYV2mg0Kvnfxc7dBd9aScIdit8eR3gX9k6Uwn9iPvgY6pgExJq2ceiIkvBcqcU6DDL%2FScPfzpAx%2F1lANsc%2B72Fa9gJ4z7v3LoTA7RxkkFERSUolARXwtTtbB8upmrc9PtYHqCX2SKRg%2FjpGRDs5jwzs2LGP6G6Og%2FwxQ7Cv03DLMmW%2B22nCZfIa6hPUfwA4J8p9miJ4Lt4Q0B8EXMAovKnzX9qAO6eNodp1z6DTbBYSnhINtpDNgpZ7EcOKn14DJCupGZXKlCS19&X-Amz-Signature=d27cfac4405ffa00064be8ee73963be47d59fd7e1374098f4884333239bc7904&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLF7CO3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBXKOIr45qTAAt%2FCXOmMQRwgV3rVEakPftqCdUM6z3GfAiAJKNlZhR0al50ny6lVcqLigdybiRX0vBjoWxaarMazJSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFJ%2BHO8wzfk3Yv2ZfKtwDGN7j2iNjUkzLlA%2BLn%2FfsV%2BLQFviAgljcGBaiLo9RgU%2FAvASO3AzoIoIqv59kSQpyjb%2BS%2Fbf918ojBWPSoeJDgwmXHtX6lfFx0iHIgwpZ313t5XfpZV3FhkAHL6iG%2Fb3eENX9kTH6%2FLZq64mNI%2F1Y50z09LHBkyjVLxZgBuViH5cmLbN4RpgUBYFSXSgNISrdnsqj6TZh9ovVTTn1DFz%2B3JbghgTb4oat%2FTeiF8j43XYT3WndNQSxcJEhouu43YrBcXv2qIeIYvUOn%2Blw10PkaJzXQfbV6nTbTEeHSN%2BlB%2FuKylsP%2FonDvzwV9Vh%2BweZmhK8M4IZoltpllSJmIq98sTLsg6JpiLZoShg93hmpoprU%2FhxeVxKh0IPurxzjxJ97zt4bi%2FOh0iBUCZtD45SRkYJm2LzI%2B%2BTzwHQVuVTbCuuVgB92%2FsyfmsXw4v00fJuP%2B2DUQ5MEm4eTx5RBOOQAYqL61QUQtrsYHNk776RaMOPBJQXBdxEOrjRqHnmj340W2BvH2Y2gklQFW9z%2FJuSkoc6Pldc0AkWYbJyUh0qjN28fjbZK54kVhnmsnclDcNsuA2SBW0lLnQUhQvuK1FPfQWwfxYV2mg0Kvnfxc7dBd9aScIdit8eR3gX9k6Uwn9iPvgY6pgExJq2ceiIkvBcqcU6DDL%2FScPfzpAx%2F1lANsc%2B72Fa9gJ4z7v3LoTA7RxkkFERSUolARXwtTtbB8upmrc9PtYHqCX2SKRg%2FjpGRDs5jwzs2LGP6G6Og%2FwxQ7Cv03DLMmW%2B22nCZfIa6hPUfwA4J8p9miJ4Lt4Q0B8EXMAovKnzX9qAO6eNodp1z6DTbBYSnhINtpDNgpZ7EcOKn14DJCupGZXKlCS19&X-Amz-Signature=20bc753905ee8350c215052edbd228018ff1a58f5794e85a4e041ac08cb4570a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLF7CO3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBXKOIr45qTAAt%2FCXOmMQRwgV3rVEakPftqCdUM6z3GfAiAJKNlZhR0al50ny6lVcqLigdybiRX0vBjoWxaarMazJSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFJ%2BHO8wzfk3Yv2ZfKtwDGN7j2iNjUkzLlA%2BLn%2FfsV%2BLQFviAgljcGBaiLo9RgU%2FAvASO3AzoIoIqv59kSQpyjb%2BS%2Fbf918ojBWPSoeJDgwmXHtX6lfFx0iHIgwpZ313t5XfpZV3FhkAHL6iG%2Fb3eENX9kTH6%2FLZq64mNI%2F1Y50z09LHBkyjVLxZgBuViH5cmLbN4RpgUBYFSXSgNISrdnsqj6TZh9ovVTTn1DFz%2B3JbghgTb4oat%2FTeiF8j43XYT3WndNQSxcJEhouu43YrBcXv2qIeIYvUOn%2Blw10PkaJzXQfbV6nTbTEeHSN%2BlB%2FuKylsP%2FonDvzwV9Vh%2BweZmhK8M4IZoltpllSJmIq98sTLsg6JpiLZoShg93hmpoprU%2FhxeVxKh0IPurxzjxJ97zt4bi%2FOh0iBUCZtD45SRkYJm2LzI%2B%2BTzwHQVuVTbCuuVgB92%2FsyfmsXw4v00fJuP%2B2DUQ5MEm4eTx5RBOOQAYqL61QUQtrsYHNk776RaMOPBJQXBdxEOrjRqHnmj340W2BvH2Y2gklQFW9z%2FJuSkoc6Pldc0AkWYbJyUh0qjN28fjbZK54kVhnmsnclDcNsuA2SBW0lLnQUhQvuK1FPfQWwfxYV2mg0Kvnfxc7dBd9aScIdit8eR3gX9k6Uwn9iPvgY6pgExJq2ceiIkvBcqcU6DDL%2FScPfzpAx%2F1lANsc%2B72Fa9gJ4z7v3LoTA7RxkkFERSUolARXwtTtbB8upmrc9PtYHqCX2SKRg%2FjpGRDs5jwzs2LGP6G6Og%2FwxQ7Cv03DLMmW%2B22nCZfIa6hPUfwA4J8p9miJ4Lt4Q0B8EXMAovKnzX9qAO6eNodp1z6DTbBYSnhINtpDNgpZ7EcOKn14DJCupGZXKlCS19&X-Amz-Signature=38ddcd12cfe070faa856b60afa84d3100c6586758b5a548cb7d67497e8a41e5c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLF7CO3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBXKOIr45qTAAt%2FCXOmMQRwgV3rVEakPftqCdUM6z3GfAiAJKNlZhR0al50ny6lVcqLigdybiRX0vBjoWxaarMazJSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFJ%2BHO8wzfk3Yv2ZfKtwDGN7j2iNjUkzLlA%2BLn%2FfsV%2BLQFviAgljcGBaiLo9RgU%2FAvASO3AzoIoIqv59kSQpyjb%2BS%2Fbf918ojBWPSoeJDgwmXHtX6lfFx0iHIgwpZ313t5XfpZV3FhkAHL6iG%2Fb3eENX9kTH6%2FLZq64mNI%2F1Y50z09LHBkyjVLxZgBuViH5cmLbN4RpgUBYFSXSgNISrdnsqj6TZh9ovVTTn1DFz%2B3JbghgTb4oat%2FTeiF8j43XYT3WndNQSxcJEhouu43YrBcXv2qIeIYvUOn%2Blw10PkaJzXQfbV6nTbTEeHSN%2BlB%2FuKylsP%2FonDvzwV9Vh%2BweZmhK8M4IZoltpllSJmIq98sTLsg6JpiLZoShg93hmpoprU%2FhxeVxKh0IPurxzjxJ97zt4bi%2FOh0iBUCZtD45SRkYJm2LzI%2B%2BTzwHQVuVTbCuuVgB92%2FsyfmsXw4v00fJuP%2B2DUQ5MEm4eTx5RBOOQAYqL61QUQtrsYHNk776RaMOPBJQXBdxEOrjRqHnmj340W2BvH2Y2gklQFW9z%2FJuSkoc6Pldc0AkWYbJyUh0qjN28fjbZK54kVhnmsnclDcNsuA2SBW0lLnQUhQvuK1FPfQWwfxYV2mg0Kvnfxc7dBd9aScIdit8eR3gX9k6Uwn9iPvgY6pgExJq2ceiIkvBcqcU6DDL%2FScPfzpAx%2F1lANsc%2B72Fa9gJ4z7v3LoTA7RxkkFERSUolARXwtTtbB8upmrc9PtYHqCX2SKRg%2FjpGRDs5jwzs2LGP6G6Og%2FwxQ7Cv03DLMmW%2B22nCZfIa6hPUfwA4J8p9miJ4Lt4Q0B8EXMAovKnzX9qAO6eNodp1z6DTbBYSnhINtpDNgpZ7EcOKn14DJCupGZXKlCS19&X-Amz-Signature=ed7caf8d872b4b3aa75339e4eb4378a4aa7d364208eb9e90065413511cd01c14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLF7CO3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBXKOIr45qTAAt%2FCXOmMQRwgV3rVEakPftqCdUM6z3GfAiAJKNlZhR0al50ny6lVcqLigdybiRX0vBjoWxaarMazJSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFJ%2BHO8wzfk3Yv2ZfKtwDGN7j2iNjUkzLlA%2BLn%2FfsV%2BLQFviAgljcGBaiLo9RgU%2FAvASO3AzoIoIqv59kSQpyjb%2BS%2Fbf918ojBWPSoeJDgwmXHtX6lfFx0iHIgwpZ313t5XfpZV3FhkAHL6iG%2Fb3eENX9kTH6%2FLZq64mNI%2F1Y50z09LHBkyjVLxZgBuViH5cmLbN4RpgUBYFSXSgNISrdnsqj6TZh9ovVTTn1DFz%2B3JbghgTb4oat%2FTeiF8j43XYT3WndNQSxcJEhouu43YrBcXv2qIeIYvUOn%2Blw10PkaJzXQfbV6nTbTEeHSN%2BlB%2FuKylsP%2FonDvzwV9Vh%2BweZmhK8M4IZoltpllSJmIq98sTLsg6JpiLZoShg93hmpoprU%2FhxeVxKh0IPurxzjxJ97zt4bi%2FOh0iBUCZtD45SRkYJm2LzI%2B%2BTzwHQVuVTbCuuVgB92%2FsyfmsXw4v00fJuP%2B2DUQ5MEm4eTx5RBOOQAYqL61QUQtrsYHNk776RaMOPBJQXBdxEOrjRqHnmj340W2BvH2Y2gklQFW9z%2FJuSkoc6Pldc0AkWYbJyUh0qjN28fjbZK54kVhnmsnclDcNsuA2SBW0lLnQUhQvuK1FPfQWwfxYV2mg0Kvnfxc7dBd9aScIdit8eR3gX9k6Uwn9iPvgY6pgExJq2ceiIkvBcqcU6DDL%2FScPfzpAx%2F1lANsc%2B72Fa9gJ4z7v3LoTA7RxkkFERSUolARXwtTtbB8upmrc9PtYHqCX2SKRg%2FjpGRDs5jwzs2LGP6G6Og%2FwxQ7Cv03DLMmW%2B22nCZfIa6hPUfwA4J8p9miJ4Lt4Q0B8EXMAovKnzX9qAO6eNodp1z6DTbBYSnhINtpDNgpZ7EcOKn14DJCupGZXKlCS19&X-Amz-Signature=459bee939377e9770bcbc15586d3112cca5bf487f52828a60a7a297496c25014&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KLF7CO3%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIBXKOIr45qTAAt%2FCXOmMQRwgV3rVEakPftqCdUM6z3GfAiAJKNlZhR0al50ny6lVcqLigdybiRX0vBjoWxaarMazJSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFJ%2BHO8wzfk3Yv2ZfKtwDGN7j2iNjUkzLlA%2BLn%2FfsV%2BLQFviAgljcGBaiLo9RgU%2FAvASO3AzoIoIqv59kSQpyjb%2BS%2Fbf918ojBWPSoeJDgwmXHtX6lfFx0iHIgwpZ313t5XfpZV3FhkAHL6iG%2Fb3eENX9kTH6%2FLZq64mNI%2F1Y50z09LHBkyjVLxZgBuViH5cmLbN4RpgUBYFSXSgNISrdnsqj6TZh9ovVTTn1DFz%2B3JbghgTb4oat%2FTeiF8j43XYT3WndNQSxcJEhouu43YrBcXv2qIeIYvUOn%2Blw10PkaJzXQfbV6nTbTEeHSN%2BlB%2FuKylsP%2FonDvzwV9Vh%2BweZmhK8M4IZoltpllSJmIq98sTLsg6JpiLZoShg93hmpoprU%2FhxeVxKh0IPurxzjxJ97zt4bi%2FOh0iBUCZtD45SRkYJm2LzI%2B%2BTzwHQVuVTbCuuVgB92%2FsyfmsXw4v00fJuP%2B2DUQ5MEm4eTx5RBOOQAYqL61QUQtrsYHNk776RaMOPBJQXBdxEOrjRqHnmj340W2BvH2Y2gklQFW9z%2FJuSkoc6Pldc0AkWYbJyUh0qjN28fjbZK54kVhnmsnclDcNsuA2SBW0lLnQUhQvuK1FPfQWwfxYV2mg0Kvnfxc7dBd9aScIdit8eR3gX9k6Uwn9iPvgY6pgExJq2ceiIkvBcqcU6DDL%2FScPfzpAx%2F1lANsc%2B72Fa9gJ4z7v3LoTA7RxkkFERSUolARXwtTtbB8upmrc9PtYHqCX2SKRg%2FjpGRDs5jwzs2LGP6G6Og%2FwxQ7Cv03DLMmW%2B22nCZfIa6hPUfwA4J8p9miJ4Lt4Q0B8EXMAovKnzX9qAO6eNodp1z6DTbBYSnhINtpDNgpZ7EcOKn14DJCupGZXKlCS19&X-Amz-Signature=ff57e7a95c57bb00b215307b020abb8d6b362ae65ffc1ed42614904588c27f84&X-Amz-SignedHeaders=host&x-id=GetObject)
