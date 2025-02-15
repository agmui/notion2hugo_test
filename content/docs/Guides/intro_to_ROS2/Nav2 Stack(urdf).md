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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6M3XEJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCUVSjcFT9NyqWQUyYGX6MVUEK64BBMOf3ibj2s3p6lRQIhAK9F18OU70kjzv0b4n76A8o%2BFCnxBsO6cHjwv6kuRFlGKv8DCEEQABoMNjM3NDIzMTgzODA1IgwuY0BzvBCKC97RTiUq3ANZdqsUYh4LKYZLxCUR6gUJ30wTxHjDPb6KnxBzYBEEJMY5oAoTfEAuX0SQDhyY2IcyQlvCGQzBNLBKsK7yNTL3ojynn3TUbk2WRf8altvhclYuz1Xeppy8ZtYMbOhSmBJ2Vjuj5RjhFxrBPpD5JV%2Bbw8K7qWhtAKV%2FN%2FXaDLRzUJDuVwvUSJ8Ii2vRNqPZytAVVjMs8I6CQMHCEXfyuqoakFmhhebRt7pJU1hrZ0LKRfj%2BG4pOvkcMUpGLrCvBr5NTSStfZVnzxz1jYzNi4O%2B98Rpkx0vwysc6D5vqzVspKzDQsa48%2BXNK%2BoBosuj8zq59J5U%2FJQFk1z90kXyq9du8MNEx0%2F51FCEkkl9Fb36GMjmOAhiNQFrrnFuWPvNpIZuLSgh19HJ0egLQXz7zvqxrXRlN2d3MxaYorPHAF9fjiPLGjQzZbcYbsbAS8H44vyD35OqGUmhbViWi56lJH6UtK99iVZBOjt2ktr4NKkmO%2BHW%2Ba5G8utMsPHqp%2F3k2Mr%2BPRnmgC%2F1V8doTU2At4UDTb73jAAbCGaRTD8P5kSsNEWGB3J4UEViaYrsNiir2xjTPeUE4lf22D23Ns2NFzTcg%2BksNX5R00Q2h64cQa8ZXSfn8bbvx9D4%2BABKQijDchMG9BjqkAa7eqZkTo7FOYVxXv9RJHc7nlLari9xfxasDz8fhQYSHL3egnjl79g48ZnYCMhz0gBYKo%2FBMbQ6qmhx9poOWil0h4vzpgc732wfDoeNPvRZQxWgVlMjOJnex4MzolLCkmr6G3lXPqJU%2BsddpoM1Vx7mmKjlhGoAsXVJ02yAuelCzgPxkUr3adkNkpsvPgYVdfTcDUCkasVQB5lWFOp2dG4NITGFa&X-Amz-Signature=17a560bbe334b0694bad0eacc4ae1b51b13d079bcb5a4acd23c4661b6e4faffb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6M3XEJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCUVSjcFT9NyqWQUyYGX6MVUEK64BBMOf3ibj2s3p6lRQIhAK9F18OU70kjzv0b4n76A8o%2BFCnxBsO6cHjwv6kuRFlGKv8DCEEQABoMNjM3NDIzMTgzODA1IgwuY0BzvBCKC97RTiUq3ANZdqsUYh4LKYZLxCUR6gUJ30wTxHjDPb6KnxBzYBEEJMY5oAoTfEAuX0SQDhyY2IcyQlvCGQzBNLBKsK7yNTL3ojynn3TUbk2WRf8altvhclYuz1Xeppy8ZtYMbOhSmBJ2Vjuj5RjhFxrBPpD5JV%2Bbw8K7qWhtAKV%2FN%2FXaDLRzUJDuVwvUSJ8Ii2vRNqPZytAVVjMs8I6CQMHCEXfyuqoakFmhhebRt7pJU1hrZ0LKRfj%2BG4pOvkcMUpGLrCvBr5NTSStfZVnzxz1jYzNi4O%2B98Rpkx0vwysc6D5vqzVspKzDQsa48%2BXNK%2BoBosuj8zq59J5U%2FJQFk1z90kXyq9du8MNEx0%2F51FCEkkl9Fb36GMjmOAhiNQFrrnFuWPvNpIZuLSgh19HJ0egLQXz7zvqxrXRlN2d3MxaYorPHAF9fjiPLGjQzZbcYbsbAS8H44vyD35OqGUmhbViWi56lJH6UtK99iVZBOjt2ktr4NKkmO%2BHW%2Ba5G8utMsPHqp%2F3k2Mr%2BPRnmgC%2F1V8doTU2At4UDTb73jAAbCGaRTD8P5kSsNEWGB3J4UEViaYrsNiir2xjTPeUE4lf22D23Ns2NFzTcg%2BksNX5R00Q2h64cQa8ZXSfn8bbvx9D4%2BABKQijDchMG9BjqkAa7eqZkTo7FOYVxXv9RJHc7nlLari9xfxasDz8fhQYSHL3egnjl79g48ZnYCMhz0gBYKo%2FBMbQ6qmhx9poOWil0h4vzpgc732wfDoeNPvRZQxWgVlMjOJnex4MzolLCkmr6G3lXPqJU%2BsddpoM1Vx7mmKjlhGoAsXVJ02yAuelCzgPxkUr3adkNkpsvPgYVdfTcDUCkasVQB5lWFOp2dG4NITGFa&X-Amz-Signature=64b988772749445366684db023bb1f34f83bca105d4241bcecc5469f5e484b05&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6M3XEJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCUVSjcFT9NyqWQUyYGX6MVUEK64BBMOf3ibj2s3p6lRQIhAK9F18OU70kjzv0b4n76A8o%2BFCnxBsO6cHjwv6kuRFlGKv8DCEEQABoMNjM3NDIzMTgzODA1IgwuY0BzvBCKC97RTiUq3ANZdqsUYh4LKYZLxCUR6gUJ30wTxHjDPb6KnxBzYBEEJMY5oAoTfEAuX0SQDhyY2IcyQlvCGQzBNLBKsK7yNTL3ojynn3TUbk2WRf8altvhclYuz1Xeppy8ZtYMbOhSmBJ2Vjuj5RjhFxrBPpD5JV%2Bbw8K7qWhtAKV%2FN%2FXaDLRzUJDuVwvUSJ8Ii2vRNqPZytAVVjMs8I6CQMHCEXfyuqoakFmhhebRt7pJU1hrZ0LKRfj%2BG4pOvkcMUpGLrCvBr5NTSStfZVnzxz1jYzNi4O%2B98Rpkx0vwysc6D5vqzVspKzDQsa48%2BXNK%2BoBosuj8zq59J5U%2FJQFk1z90kXyq9du8MNEx0%2F51FCEkkl9Fb36GMjmOAhiNQFrrnFuWPvNpIZuLSgh19HJ0egLQXz7zvqxrXRlN2d3MxaYorPHAF9fjiPLGjQzZbcYbsbAS8H44vyD35OqGUmhbViWi56lJH6UtK99iVZBOjt2ktr4NKkmO%2BHW%2Ba5G8utMsPHqp%2F3k2Mr%2BPRnmgC%2F1V8doTU2At4UDTb73jAAbCGaRTD8P5kSsNEWGB3J4UEViaYrsNiir2xjTPeUE4lf22D23Ns2NFzTcg%2BksNX5R00Q2h64cQa8ZXSfn8bbvx9D4%2BABKQijDchMG9BjqkAa7eqZkTo7FOYVxXv9RJHc7nlLari9xfxasDz8fhQYSHL3egnjl79g48ZnYCMhz0gBYKo%2FBMbQ6qmhx9poOWil0h4vzpgc732wfDoeNPvRZQxWgVlMjOJnex4MzolLCkmr6G3lXPqJU%2BsddpoM1Vx7mmKjlhGoAsXVJ02yAuelCzgPxkUr3adkNkpsvPgYVdfTcDUCkasVQB5lWFOp2dG4NITGFa&X-Amz-Signature=c669f6af90312f21131c171a20f48efe8dd7f644c3f128f2e1d55f0a71017413&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6M3XEJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCUVSjcFT9NyqWQUyYGX6MVUEK64BBMOf3ibj2s3p6lRQIhAK9F18OU70kjzv0b4n76A8o%2BFCnxBsO6cHjwv6kuRFlGKv8DCEEQABoMNjM3NDIzMTgzODA1IgwuY0BzvBCKC97RTiUq3ANZdqsUYh4LKYZLxCUR6gUJ30wTxHjDPb6KnxBzYBEEJMY5oAoTfEAuX0SQDhyY2IcyQlvCGQzBNLBKsK7yNTL3ojynn3TUbk2WRf8altvhclYuz1Xeppy8ZtYMbOhSmBJ2Vjuj5RjhFxrBPpD5JV%2Bbw8K7qWhtAKV%2FN%2FXaDLRzUJDuVwvUSJ8Ii2vRNqPZytAVVjMs8I6CQMHCEXfyuqoakFmhhebRt7pJU1hrZ0LKRfj%2BG4pOvkcMUpGLrCvBr5NTSStfZVnzxz1jYzNi4O%2B98Rpkx0vwysc6D5vqzVspKzDQsa48%2BXNK%2BoBosuj8zq59J5U%2FJQFk1z90kXyq9du8MNEx0%2F51FCEkkl9Fb36GMjmOAhiNQFrrnFuWPvNpIZuLSgh19HJ0egLQXz7zvqxrXRlN2d3MxaYorPHAF9fjiPLGjQzZbcYbsbAS8H44vyD35OqGUmhbViWi56lJH6UtK99iVZBOjt2ktr4NKkmO%2BHW%2Ba5G8utMsPHqp%2F3k2Mr%2BPRnmgC%2F1V8doTU2At4UDTb73jAAbCGaRTD8P5kSsNEWGB3J4UEViaYrsNiir2xjTPeUE4lf22D23Ns2NFzTcg%2BksNX5R00Q2h64cQa8ZXSfn8bbvx9D4%2BABKQijDchMG9BjqkAa7eqZkTo7FOYVxXv9RJHc7nlLari9xfxasDz8fhQYSHL3egnjl79g48ZnYCMhz0gBYKo%2FBMbQ6qmhx9poOWil0h4vzpgc732wfDoeNPvRZQxWgVlMjOJnex4MzolLCkmr6G3lXPqJU%2BsddpoM1Vx7mmKjlhGoAsXVJ02yAuelCzgPxkUr3adkNkpsvPgYVdfTcDUCkasVQB5lWFOp2dG4NITGFa&X-Amz-Signature=b9248b95d81f3d73d5f0083663ca0950e22d27b4a9fdfe9b31ece3518d3cf183&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6M3XEJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCUVSjcFT9NyqWQUyYGX6MVUEK64BBMOf3ibj2s3p6lRQIhAK9F18OU70kjzv0b4n76A8o%2BFCnxBsO6cHjwv6kuRFlGKv8DCEEQABoMNjM3NDIzMTgzODA1IgwuY0BzvBCKC97RTiUq3ANZdqsUYh4LKYZLxCUR6gUJ30wTxHjDPb6KnxBzYBEEJMY5oAoTfEAuX0SQDhyY2IcyQlvCGQzBNLBKsK7yNTL3ojynn3TUbk2WRf8altvhclYuz1Xeppy8ZtYMbOhSmBJ2Vjuj5RjhFxrBPpD5JV%2Bbw8K7qWhtAKV%2FN%2FXaDLRzUJDuVwvUSJ8Ii2vRNqPZytAVVjMs8I6CQMHCEXfyuqoakFmhhebRt7pJU1hrZ0LKRfj%2BG4pOvkcMUpGLrCvBr5NTSStfZVnzxz1jYzNi4O%2B98Rpkx0vwysc6D5vqzVspKzDQsa48%2BXNK%2BoBosuj8zq59J5U%2FJQFk1z90kXyq9du8MNEx0%2F51FCEkkl9Fb36GMjmOAhiNQFrrnFuWPvNpIZuLSgh19HJ0egLQXz7zvqxrXRlN2d3MxaYorPHAF9fjiPLGjQzZbcYbsbAS8H44vyD35OqGUmhbViWi56lJH6UtK99iVZBOjt2ktr4NKkmO%2BHW%2Ba5G8utMsPHqp%2F3k2Mr%2BPRnmgC%2F1V8doTU2At4UDTb73jAAbCGaRTD8P5kSsNEWGB3J4UEViaYrsNiir2xjTPeUE4lf22D23Ns2NFzTcg%2BksNX5R00Q2h64cQa8ZXSfn8bbvx9D4%2BABKQijDchMG9BjqkAa7eqZkTo7FOYVxXv9RJHc7nlLari9xfxasDz8fhQYSHL3egnjl79g48ZnYCMhz0gBYKo%2FBMbQ6qmhx9poOWil0h4vzpgc732wfDoeNPvRZQxWgVlMjOJnex4MzolLCkmr6G3lXPqJU%2BsddpoM1Vx7mmKjlhGoAsXVJ02yAuelCzgPxkUr3adkNkpsvPgYVdfTcDUCkasVQB5lWFOp2dG4NITGFa&X-Amz-Signature=26d2777e72e369bc74252a856d2ea5d67e9573f40cbeacdb1846cbdae88bcc9c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6M3XEJ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T090156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCUVSjcFT9NyqWQUyYGX6MVUEK64BBMOf3ibj2s3p6lRQIhAK9F18OU70kjzv0b4n76A8o%2BFCnxBsO6cHjwv6kuRFlGKv8DCEEQABoMNjM3NDIzMTgzODA1IgwuY0BzvBCKC97RTiUq3ANZdqsUYh4LKYZLxCUR6gUJ30wTxHjDPb6KnxBzYBEEJMY5oAoTfEAuX0SQDhyY2IcyQlvCGQzBNLBKsK7yNTL3ojynn3TUbk2WRf8altvhclYuz1Xeppy8ZtYMbOhSmBJ2Vjuj5RjhFxrBPpD5JV%2Bbw8K7qWhtAKV%2FN%2FXaDLRzUJDuVwvUSJ8Ii2vRNqPZytAVVjMs8I6CQMHCEXfyuqoakFmhhebRt7pJU1hrZ0LKRfj%2BG4pOvkcMUpGLrCvBr5NTSStfZVnzxz1jYzNi4O%2B98Rpkx0vwysc6D5vqzVspKzDQsa48%2BXNK%2BoBosuj8zq59J5U%2FJQFk1z90kXyq9du8MNEx0%2F51FCEkkl9Fb36GMjmOAhiNQFrrnFuWPvNpIZuLSgh19HJ0egLQXz7zvqxrXRlN2d3MxaYorPHAF9fjiPLGjQzZbcYbsbAS8H44vyD35OqGUmhbViWi56lJH6UtK99iVZBOjt2ktr4NKkmO%2BHW%2Ba5G8utMsPHqp%2F3k2Mr%2BPRnmgC%2F1V8doTU2At4UDTb73jAAbCGaRTD8P5kSsNEWGB3J4UEViaYrsNiir2xjTPeUE4lf22D23Ns2NFzTcg%2BksNX5R00Q2h64cQa8ZXSfn8bbvx9D4%2BABKQijDchMG9BjqkAa7eqZkTo7FOYVxXv9RJHc7nlLari9xfxasDz8fhQYSHL3egnjl79g48ZnYCMhz0gBYKo%2FBMbQ6qmhx9poOWil0h4vzpgc732wfDoeNPvRZQxWgVlMjOJnex4MzolLCkmr6G3lXPqJU%2BsddpoM1Vx7mmKjlhGoAsXVJ02yAuelCzgPxkUr3adkNkpsvPgYVdfTcDUCkasVQB5lWFOp2dG4NITGFa&X-Amz-Signature=838b7ec72a50d716201a41a2f907c7941739c2fef1b5ef0b03ac5c852b554fde&X-Amz-SignedHeaders=host&x-id=GetObject)
