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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LBRIR4M%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBDE5k8XB2t2JN4P%2FrxbP%2BXG5xcpRFUk1pcBPkzlwEYtAiBRSFTg5RehPtHBoKUA8VUu8u4C0nqKdk1gsiMc2WuBLCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM85HcAZrtIQvwk6VKtwDwfN57knJ%2BpdPKnWPLsEuSrATYTyvDeIvKAtlW8bA8Ikd9qtRjMh6JlXqNKqlDZKvUDVejmohYDmbFcQiY1vlX7vUwqI8PASMq4laLaXmjRR3HMaO5NCvtvKfSs%2FgRojaopX9seUg6fBaA7EJRGoaqdf6OnX008KpeO5vM5ZccNadAfONTBSellLSvvr66XasdiMJo8EEb2ZwMu3kNPpn937UEo0bdSELY%2F2hNWi6of%2BYCwxg3Gqp%2FpzMqEGGnSsvC3QfJTakg355T6wGSzkCQvP%2B14qx%2F2q6G%2Bc03%2FxcvEmrsz2LpCazR4pb6nQ9WrmUXPol6mwE9L1MVigMJLgK6MwAH3Re2ze6bQgGCSdGGTmEijx1OqjVBuDpPQ%2F44iyY5kp2R5HL8bJbP6%2B3a6mmuoLspcL2hr02rDrbBjns4ek9y01%2Fry8Rfri%2Bk9XQnjkWTjtM2T34NldZxH047b9qJ5wRn8MLeHR66gnsL67HKRd4CqUov783qJsWpe6Ciak%2Fzsl7PljXH0zXA3YShyu9RoYWW8NdnKp3%2FknI847MBYCvFauAcqhwNUrwi5avo0qYL3lUrLYJ9GdzEMPrzFblr8jcylk1jTF3ojTWbYFkLj8v1aNMF4LYNrDQ48ow2vb6vgY6pgGaGd5u1wCPcwM4tZtt4uwRmkOaQDr%2Bqur5ee%2FhpqyXHFR1KTtBEkncgmoLoirU7SsdQJTw%2FZtxdtGClLRA9Sh7Drbyq6U3T5Hvn0c74rzGp0w%2FqYF7UB%2FTuOpxkc6MPiIhhh%2BX0nAgZ3ohvd5tfJ3kZvaWhVsWGHhpzM%2FjZmQ%2B1Iz8KImLND%2BvhlSMPkMJ9ri%2FqgTRjYg6j1u%2B0hWi9%2FH7O9bAmPbU&X-Amz-Signature=aa23b9a200c3d3fc48518dfe0688a75f73966b7be76a4f5194badb596df55744&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LBRIR4M%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBDE5k8XB2t2JN4P%2FrxbP%2BXG5xcpRFUk1pcBPkzlwEYtAiBRSFTg5RehPtHBoKUA8VUu8u4C0nqKdk1gsiMc2WuBLCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM85HcAZrtIQvwk6VKtwDwfN57knJ%2BpdPKnWPLsEuSrATYTyvDeIvKAtlW8bA8Ikd9qtRjMh6JlXqNKqlDZKvUDVejmohYDmbFcQiY1vlX7vUwqI8PASMq4laLaXmjRR3HMaO5NCvtvKfSs%2FgRojaopX9seUg6fBaA7EJRGoaqdf6OnX008KpeO5vM5ZccNadAfONTBSellLSvvr66XasdiMJo8EEb2ZwMu3kNPpn937UEo0bdSELY%2F2hNWi6of%2BYCwxg3Gqp%2FpzMqEGGnSsvC3QfJTakg355T6wGSzkCQvP%2B14qx%2F2q6G%2Bc03%2FxcvEmrsz2LpCazR4pb6nQ9WrmUXPol6mwE9L1MVigMJLgK6MwAH3Re2ze6bQgGCSdGGTmEijx1OqjVBuDpPQ%2F44iyY5kp2R5HL8bJbP6%2B3a6mmuoLspcL2hr02rDrbBjns4ek9y01%2Fry8Rfri%2Bk9XQnjkWTjtM2T34NldZxH047b9qJ5wRn8MLeHR66gnsL67HKRd4CqUov783qJsWpe6Ciak%2Fzsl7PljXH0zXA3YShyu9RoYWW8NdnKp3%2FknI847MBYCvFauAcqhwNUrwi5avo0qYL3lUrLYJ9GdzEMPrzFblr8jcylk1jTF3ojTWbYFkLj8v1aNMF4LYNrDQ48ow2vb6vgY6pgGaGd5u1wCPcwM4tZtt4uwRmkOaQDr%2Bqur5ee%2FhpqyXHFR1KTtBEkncgmoLoirU7SsdQJTw%2FZtxdtGClLRA9Sh7Drbyq6U3T5Hvn0c74rzGp0w%2FqYF7UB%2FTuOpxkc6MPiIhhh%2BX0nAgZ3ohvd5tfJ3kZvaWhVsWGHhpzM%2FjZmQ%2B1Iz8KImLND%2BvhlSMPkMJ9ri%2FqgTRjYg6j1u%2B0hWi9%2FH7O9bAmPbU&X-Amz-Signature=2ad1ac337d76162e74c04029d45527e5f1665b6ced46a67025ae6053737776af&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LBRIR4M%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBDE5k8XB2t2JN4P%2FrxbP%2BXG5xcpRFUk1pcBPkzlwEYtAiBRSFTg5RehPtHBoKUA8VUu8u4C0nqKdk1gsiMc2WuBLCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM85HcAZrtIQvwk6VKtwDwfN57knJ%2BpdPKnWPLsEuSrATYTyvDeIvKAtlW8bA8Ikd9qtRjMh6JlXqNKqlDZKvUDVejmohYDmbFcQiY1vlX7vUwqI8PASMq4laLaXmjRR3HMaO5NCvtvKfSs%2FgRojaopX9seUg6fBaA7EJRGoaqdf6OnX008KpeO5vM5ZccNadAfONTBSellLSvvr66XasdiMJo8EEb2ZwMu3kNPpn937UEo0bdSELY%2F2hNWi6of%2BYCwxg3Gqp%2FpzMqEGGnSsvC3QfJTakg355T6wGSzkCQvP%2B14qx%2F2q6G%2Bc03%2FxcvEmrsz2LpCazR4pb6nQ9WrmUXPol6mwE9L1MVigMJLgK6MwAH3Re2ze6bQgGCSdGGTmEijx1OqjVBuDpPQ%2F44iyY5kp2R5HL8bJbP6%2B3a6mmuoLspcL2hr02rDrbBjns4ek9y01%2Fry8Rfri%2Bk9XQnjkWTjtM2T34NldZxH047b9qJ5wRn8MLeHR66gnsL67HKRd4CqUov783qJsWpe6Ciak%2Fzsl7PljXH0zXA3YShyu9RoYWW8NdnKp3%2FknI847MBYCvFauAcqhwNUrwi5avo0qYL3lUrLYJ9GdzEMPrzFblr8jcylk1jTF3ojTWbYFkLj8v1aNMF4LYNrDQ48ow2vb6vgY6pgGaGd5u1wCPcwM4tZtt4uwRmkOaQDr%2Bqur5ee%2FhpqyXHFR1KTtBEkncgmoLoirU7SsdQJTw%2FZtxdtGClLRA9Sh7Drbyq6U3T5Hvn0c74rzGp0w%2FqYF7UB%2FTuOpxkc6MPiIhhh%2BX0nAgZ3ohvd5tfJ3kZvaWhVsWGHhpzM%2FjZmQ%2B1Iz8KImLND%2BvhlSMPkMJ9ri%2FqgTRjYg6j1u%2B0hWi9%2FH7O9bAmPbU&X-Amz-Signature=745fd5db1279791c8f08c6858fd680d5c8e1330190d6de0f74a7007152f885b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LBRIR4M%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBDE5k8XB2t2JN4P%2FrxbP%2BXG5xcpRFUk1pcBPkzlwEYtAiBRSFTg5RehPtHBoKUA8VUu8u4C0nqKdk1gsiMc2WuBLCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM85HcAZrtIQvwk6VKtwDwfN57knJ%2BpdPKnWPLsEuSrATYTyvDeIvKAtlW8bA8Ikd9qtRjMh6JlXqNKqlDZKvUDVejmohYDmbFcQiY1vlX7vUwqI8PASMq4laLaXmjRR3HMaO5NCvtvKfSs%2FgRojaopX9seUg6fBaA7EJRGoaqdf6OnX008KpeO5vM5ZccNadAfONTBSellLSvvr66XasdiMJo8EEb2ZwMu3kNPpn937UEo0bdSELY%2F2hNWi6of%2BYCwxg3Gqp%2FpzMqEGGnSsvC3QfJTakg355T6wGSzkCQvP%2B14qx%2F2q6G%2Bc03%2FxcvEmrsz2LpCazR4pb6nQ9WrmUXPol6mwE9L1MVigMJLgK6MwAH3Re2ze6bQgGCSdGGTmEijx1OqjVBuDpPQ%2F44iyY5kp2R5HL8bJbP6%2B3a6mmuoLspcL2hr02rDrbBjns4ek9y01%2Fry8Rfri%2Bk9XQnjkWTjtM2T34NldZxH047b9qJ5wRn8MLeHR66gnsL67HKRd4CqUov783qJsWpe6Ciak%2Fzsl7PljXH0zXA3YShyu9RoYWW8NdnKp3%2FknI847MBYCvFauAcqhwNUrwi5avo0qYL3lUrLYJ9GdzEMPrzFblr8jcylk1jTF3ojTWbYFkLj8v1aNMF4LYNrDQ48ow2vb6vgY6pgGaGd5u1wCPcwM4tZtt4uwRmkOaQDr%2Bqur5ee%2FhpqyXHFR1KTtBEkncgmoLoirU7SsdQJTw%2FZtxdtGClLRA9Sh7Drbyq6U3T5Hvn0c74rzGp0w%2FqYF7UB%2FTuOpxkc6MPiIhhh%2BX0nAgZ3ohvd5tfJ3kZvaWhVsWGHhpzM%2FjZmQ%2B1Iz8KImLND%2BvhlSMPkMJ9ri%2FqgTRjYg6j1u%2B0hWi9%2FH7O9bAmPbU&X-Amz-Signature=859664a041998cd477ce8f392b322b34ce63082fcf3c3280ac948a4b2e9c7cde&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LBRIR4M%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBDE5k8XB2t2JN4P%2FrxbP%2BXG5xcpRFUk1pcBPkzlwEYtAiBRSFTg5RehPtHBoKUA8VUu8u4C0nqKdk1gsiMc2WuBLCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM85HcAZrtIQvwk6VKtwDwfN57knJ%2BpdPKnWPLsEuSrATYTyvDeIvKAtlW8bA8Ikd9qtRjMh6JlXqNKqlDZKvUDVejmohYDmbFcQiY1vlX7vUwqI8PASMq4laLaXmjRR3HMaO5NCvtvKfSs%2FgRojaopX9seUg6fBaA7EJRGoaqdf6OnX008KpeO5vM5ZccNadAfONTBSellLSvvr66XasdiMJo8EEb2ZwMu3kNPpn937UEo0bdSELY%2F2hNWi6of%2BYCwxg3Gqp%2FpzMqEGGnSsvC3QfJTakg355T6wGSzkCQvP%2B14qx%2F2q6G%2Bc03%2FxcvEmrsz2LpCazR4pb6nQ9WrmUXPol6mwE9L1MVigMJLgK6MwAH3Re2ze6bQgGCSdGGTmEijx1OqjVBuDpPQ%2F44iyY5kp2R5HL8bJbP6%2B3a6mmuoLspcL2hr02rDrbBjns4ek9y01%2Fry8Rfri%2Bk9XQnjkWTjtM2T34NldZxH047b9qJ5wRn8MLeHR66gnsL67HKRd4CqUov783qJsWpe6Ciak%2Fzsl7PljXH0zXA3YShyu9RoYWW8NdnKp3%2FknI847MBYCvFauAcqhwNUrwi5avo0qYL3lUrLYJ9GdzEMPrzFblr8jcylk1jTF3ojTWbYFkLj8v1aNMF4LYNrDQ48ow2vb6vgY6pgGaGd5u1wCPcwM4tZtt4uwRmkOaQDr%2Bqur5ee%2FhpqyXHFR1KTtBEkncgmoLoirU7SsdQJTw%2FZtxdtGClLRA9Sh7Drbyq6U3T5Hvn0c74rzGp0w%2FqYF7UB%2FTuOpxkc6MPiIhhh%2BX0nAgZ3ohvd5tfJ3kZvaWhVsWGHhpzM%2FjZmQ%2B1Iz8KImLND%2BvhlSMPkMJ9ri%2FqgTRjYg6j1u%2B0hWi9%2FH7O9bAmPbU&X-Amz-Signature=f515c6dc0333168685974265791bfb9ec80b028d82377b894db89c7869a23823&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LBRIR4M%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T160814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBDE5k8XB2t2JN4P%2FrxbP%2BXG5xcpRFUk1pcBPkzlwEYtAiBRSFTg5RehPtHBoKUA8VUu8u4C0nqKdk1gsiMc2WuBLCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM85HcAZrtIQvwk6VKtwDwfN57knJ%2BpdPKnWPLsEuSrATYTyvDeIvKAtlW8bA8Ikd9qtRjMh6JlXqNKqlDZKvUDVejmohYDmbFcQiY1vlX7vUwqI8PASMq4laLaXmjRR3HMaO5NCvtvKfSs%2FgRojaopX9seUg6fBaA7EJRGoaqdf6OnX008KpeO5vM5ZccNadAfONTBSellLSvvr66XasdiMJo8EEb2ZwMu3kNPpn937UEo0bdSELY%2F2hNWi6of%2BYCwxg3Gqp%2FpzMqEGGnSsvC3QfJTakg355T6wGSzkCQvP%2B14qx%2F2q6G%2Bc03%2FxcvEmrsz2LpCazR4pb6nQ9WrmUXPol6mwE9L1MVigMJLgK6MwAH3Re2ze6bQgGCSdGGTmEijx1OqjVBuDpPQ%2F44iyY5kp2R5HL8bJbP6%2B3a6mmuoLspcL2hr02rDrbBjns4ek9y01%2Fry8Rfri%2Bk9XQnjkWTjtM2T34NldZxH047b9qJ5wRn8MLeHR66gnsL67HKRd4CqUov783qJsWpe6Ciak%2Fzsl7PljXH0zXA3YShyu9RoYWW8NdnKp3%2FknI847MBYCvFauAcqhwNUrwi5avo0qYL3lUrLYJ9GdzEMPrzFblr8jcylk1jTF3ojTWbYFkLj8v1aNMF4LYNrDQ48ow2vb6vgY6pgGaGd5u1wCPcwM4tZtt4uwRmkOaQDr%2Bqur5ee%2FhpqyXHFR1KTtBEkncgmoLoirU7SsdQJTw%2FZtxdtGClLRA9Sh7Drbyq6U3T5Hvn0c74rzGp0w%2FqYF7UB%2FTuOpxkc6MPiIhhh%2BX0nAgZ3ohvd5tfJ3kZvaWhVsWGHhpzM%2FjZmQ%2B1Iz8KImLND%2BvhlSMPkMJ9ri%2FqgTRjYg6j1u%2B0hWi9%2FH7O9bAmPbU&X-Amz-Signature=05651e781d4539f7f07484089d08437ba38e167eddce5122d8e2a723c54dbe36&X-Amz-SignedHeaders=host&x-id=GetObject)
