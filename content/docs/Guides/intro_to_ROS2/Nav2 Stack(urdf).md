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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4GMPVFQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDa%2F54qhkmUFjHGzQT4ZlKKsc3biaa9GPkdIdgjKvd5bQIhALq%2BRqBQ0Azf4XlspqfrfxGNXUB0rYJ%2F4fhwmY5%2FOWLRKv8DCEAQABoMNjM3NDIzMTgzODA1Igy5b0Rz0TJKjqxwUoYq3ANbaTguePuUAwq4P4MdMSecIhW%2FvCzxcgpfM1rvVHsOG%2FnV1r0kDKdIf0lFqpEBVraNfXhaEFKeYXoXfd7A7YHBZDWlSs0mIJubm%2BmcIVLcpjZUSY5eeFZv0r%2BwX3OKIzqQemzVDsMY%2FeS6aM3ufPy%2FAN3CJeqJ2q7awjXbCzop0FoOa99XXkqs%2FvylagMHXui4kUIDDEH8o531zik%2BD0Z67rQ%2FbBhwND42o9TlHc57Y1tmBk3TV5sbaiVAczQXi%2BHzLUsDjLC50J19ATz6N1IFKc4HfMu%2FOnNmn2w5LbtVlacd5SiCX0OY13eihWhYjvroAo8VkZrZdHKCIw3f8QhN4Jrd%2FCZwRCtod3cZ91gw14OL1CCbSZH%2BtuL4tfc%2Biwm33TC0CnHZrJsbVkEbvm06zKvYh0cTZG%2FK8qTqQZszkbwEE8G0Ip32TpfUC2RNo0106WjYcv52f4wQ76yGlrfzTw8HnrAEUpAP6xifkcddxguSHw%2BqhFG7Vev5arggK6QR2XGaVcyaijtqydGw%2B8K57toGHIQCJH9%2FjtugnrSNP%2B23KYY6kqJohz6K1Ue1jJj54wd8o6BtyCzQP9%2Faky69zDt%2BPSqT7wbzlKbn16H8z91qK9tbC9Bz%2Bxa7OzDBgdjDBjqkAePk0McSrnoCw68d8cmFUV6kuWranQ0zdcUq7sXG4icEHoh6o3ymKGV4Z9aumkPy22psx6IXDLnGkj%2B4DIUZt%2BelLfiKtz1eAUPmvx0IrmNnEgTPL08aKTUI50c%2Bg%2F7vaCu3oxYBRGw8o7P9S5OvQ%2FtyKiq3NudAOxJNCFOeoQvwhfwuwQo6BgQ1jKY1mGkj3ITcBN1klmj7KDkDW1zB90sjzve1&X-Amz-Signature=8da1baf6a80716901816e949eac1b28b18f3f649466e3f0bcdf44ebfc76b8dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4GMPVFQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDa%2F54qhkmUFjHGzQT4ZlKKsc3biaa9GPkdIdgjKvd5bQIhALq%2BRqBQ0Azf4XlspqfrfxGNXUB0rYJ%2F4fhwmY5%2FOWLRKv8DCEAQABoMNjM3NDIzMTgzODA1Igy5b0Rz0TJKjqxwUoYq3ANbaTguePuUAwq4P4MdMSecIhW%2FvCzxcgpfM1rvVHsOG%2FnV1r0kDKdIf0lFqpEBVraNfXhaEFKeYXoXfd7A7YHBZDWlSs0mIJubm%2BmcIVLcpjZUSY5eeFZv0r%2BwX3OKIzqQemzVDsMY%2FeS6aM3ufPy%2FAN3CJeqJ2q7awjXbCzop0FoOa99XXkqs%2FvylagMHXui4kUIDDEH8o531zik%2BD0Z67rQ%2FbBhwND42o9TlHc57Y1tmBk3TV5sbaiVAczQXi%2BHzLUsDjLC50J19ATz6N1IFKc4HfMu%2FOnNmn2w5LbtVlacd5SiCX0OY13eihWhYjvroAo8VkZrZdHKCIw3f8QhN4Jrd%2FCZwRCtod3cZ91gw14OL1CCbSZH%2BtuL4tfc%2Biwm33TC0CnHZrJsbVkEbvm06zKvYh0cTZG%2FK8qTqQZszkbwEE8G0Ip32TpfUC2RNo0106WjYcv52f4wQ76yGlrfzTw8HnrAEUpAP6xifkcddxguSHw%2BqhFG7Vev5arggK6QR2XGaVcyaijtqydGw%2B8K57toGHIQCJH9%2FjtugnrSNP%2B23KYY6kqJohz6K1Ue1jJj54wd8o6BtyCzQP9%2Faky69zDt%2BPSqT7wbzlKbn16H8z91qK9tbC9Bz%2Bxa7OzDBgdjDBjqkAePk0McSrnoCw68d8cmFUV6kuWranQ0zdcUq7sXG4icEHoh6o3ymKGV4Z9aumkPy22psx6IXDLnGkj%2B4DIUZt%2BelLfiKtz1eAUPmvx0IrmNnEgTPL08aKTUI50c%2Bg%2F7vaCu3oxYBRGw8o7P9S5OvQ%2FtyKiq3NudAOxJNCFOeoQvwhfwuwQo6BgQ1jKY1mGkj3ITcBN1klmj7KDkDW1zB90sjzve1&X-Amz-Signature=acaff0d6637c824307b90691a0014ee5962dce4927fdec46500a83f5ae6ff85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4GMPVFQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDa%2F54qhkmUFjHGzQT4ZlKKsc3biaa9GPkdIdgjKvd5bQIhALq%2BRqBQ0Azf4XlspqfrfxGNXUB0rYJ%2F4fhwmY5%2FOWLRKv8DCEAQABoMNjM3NDIzMTgzODA1Igy5b0Rz0TJKjqxwUoYq3ANbaTguePuUAwq4P4MdMSecIhW%2FvCzxcgpfM1rvVHsOG%2FnV1r0kDKdIf0lFqpEBVraNfXhaEFKeYXoXfd7A7YHBZDWlSs0mIJubm%2BmcIVLcpjZUSY5eeFZv0r%2BwX3OKIzqQemzVDsMY%2FeS6aM3ufPy%2FAN3CJeqJ2q7awjXbCzop0FoOa99XXkqs%2FvylagMHXui4kUIDDEH8o531zik%2BD0Z67rQ%2FbBhwND42o9TlHc57Y1tmBk3TV5sbaiVAczQXi%2BHzLUsDjLC50J19ATz6N1IFKc4HfMu%2FOnNmn2w5LbtVlacd5SiCX0OY13eihWhYjvroAo8VkZrZdHKCIw3f8QhN4Jrd%2FCZwRCtod3cZ91gw14OL1CCbSZH%2BtuL4tfc%2Biwm33TC0CnHZrJsbVkEbvm06zKvYh0cTZG%2FK8qTqQZszkbwEE8G0Ip32TpfUC2RNo0106WjYcv52f4wQ76yGlrfzTw8HnrAEUpAP6xifkcddxguSHw%2BqhFG7Vev5arggK6QR2XGaVcyaijtqydGw%2B8K57toGHIQCJH9%2FjtugnrSNP%2B23KYY6kqJohz6K1Ue1jJj54wd8o6BtyCzQP9%2Faky69zDt%2BPSqT7wbzlKbn16H8z91qK9tbC9Bz%2Bxa7OzDBgdjDBjqkAePk0McSrnoCw68d8cmFUV6kuWranQ0zdcUq7sXG4icEHoh6o3ymKGV4Z9aumkPy22psx6IXDLnGkj%2B4DIUZt%2BelLfiKtz1eAUPmvx0IrmNnEgTPL08aKTUI50c%2Bg%2F7vaCu3oxYBRGw8o7P9S5OvQ%2FtyKiq3NudAOxJNCFOeoQvwhfwuwQo6BgQ1jKY1mGkj3ITcBN1klmj7KDkDW1zB90sjzve1&X-Amz-Signature=0e5ddc88cc594eeb283a5380f874be148188272b0483f0aa02f65ea99372c042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4GMPVFQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDa%2F54qhkmUFjHGzQT4ZlKKsc3biaa9GPkdIdgjKvd5bQIhALq%2BRqBQ0Azf4XlspqfrfxGNXUB0rYJ%2F4fhwmY5%2FOWLRKv8DCEAQABoMNjM3NDIzMTgzODA1Igy5b0Rz0TJKjqxwUoYq3ANbaTguePuUAwq4P4MdMSecIhW%2FvCzxcgpfM1rvVHsOG%2FnV1r0kDKdIf0lFqpEBVraNfXhaEFKeYXoXfd7A7YHBZDWlSs0mIJubm%2BmcIVLcpjZUSY5eeFZv0r%2BwX3OKIzqQemzVDsMY%2FeS6aM3ufPy%2FAN3CJeqJ2q7awjXbCzop0FoOa99XXkqs%2FvylagMHXui4kUIDDEH8o531zik%2BD0Z67rQ%2FbBhwND42o9TlHc57Y1tmBk3TV5sbaiVAczQXi%2BHzLUsDjLC50J19ATz6N1IFKc4HfMu%2FOnNmn2w5LbtVlacd5SiCX0OY13eihWhYjvroAo8VkZrZdHKCIw3f8QhN4Jrd%2FCZwRCtod3cZ91gw14OL1CCbSZH%2BtuL4tfc%2Biwm33TC0CnHZrJsbVkEbvm06zKvYh0cTZG%2FK8qTqQZszkbwEE8G0Ip32TpfUC2RNo0106WjYcv52f4wQ76yGlrfzTw8HnrAEUpAP6xifkcddxguSHw%2BqhFG7Vev5arggK6QR2XGaVcyaijtqydGw%2B8K57toGHIQCJH9%2FjtugnrSNP%2B23KYY6kqJohz6K1Ue1jJj54wd8o6BtyCzQP9%2Faky69zDt%2BPSqT7wbzlKbn16H8z91qK9tbC9Bz%2Bxa7OzDBgdjDBjqkAePk0McSrnoCw68d8cmFUV6kuWranQ0zdcUq7sXG4icEHoh6o3ymKGV4Z9aumkPy22psx6IXDLnGkj%2B4DIUZt%2BelLfiKtz1eAUPmvx0IrmNnEgTPL08aKTUI50c%2Bg%2F7vaCu3oxYBRGw8o7P9S5OvQ%2FtyKiq3NudAOxJNCFOeoQvwhfwuwQo6BgQ1jKY1mGkj3ITcBN1klmj7KDkDW1zB90sjzve1&X-Amz-Signature=0c40510cdd5f862d38b127f3c2f2974138d4fb977771c09f284c3ca526ae0b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4GMPVFQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDa%2F54qhkmUFjHGzQT4ZlKKsc3biaa9GPkdIdgjKvd5bQIhALq%2BRqBQ0Azf4XlspqfrfxGNXUB0rYJ%2F4fhwmY5%2FOWLRKv8DCEAQABoMNjM3NDIzMTgzODA1Igy5b0Rz0TJKjqxwUoYq3ANbaTguePuUAwq4P4MdMSecIhW%2FvCzxcgpfM1rvVHsOG%2FnV1r0kDKdIf0lFqpEBVraNfXhaEFKeYXoXfd7A7YHBZDWlSs0mIJubm%2BmcIVLcpjZUSY5eeFZv0r%2BwX3OKIzqQemzVDsMY%2FeS6aM3ufPy%2FAN3CJeqJ2q7awjXbCzop0FoOa99XXkqs%2FvylagMHXui4kUIDDEH8o531zik%2BD0Z67rQ%2FbBhwND42o9TlHc57Y1tmBk3TV5sbaiVAczQXi%2BHzLUsDjLC50J19ATz6N1IFKc4HfMu%2FOnNmn2w5LbtVlacd5SiCX0OY13eihWhYjvroAo8VkZrZdHKCIw3f8QhN4Jrd%2FCZwRCtod3cZ91gw14OL1CCbSZH%2BtuL4tfc%2Biwm33TC0CnHZrJsbVkEbvm06zKvYh0cTZG%2FK8qTqQZszkbwEE8G0Ip32TpfUC2RNo0106WjYcv52f4wQ76yGlrfzTw8HnrAEUpAP6xifkcddxguSHw%2BqhFG7Vev5arggK6QR2XGaVcyaijtqydGw%2B8K57toGHIQCJH9%2FjtugnrSNP%2B23KYY6kqJohz6K1Ue1jJj54wd8o6BtyCzQP9%2Faky69zDt%2BPSqT7wbzlKbn16H8z91qK9tbC9Bz%2Bxa7OzDBgdjDBjqkAePk0McSrnoCw68d8cmFUV6kuWranQ0zdcUq7sXG4icEHoh6o3ymKGV4Z9aumkPy22psx6IXDLnGkj%2B4DIUZt%2BelLfiKtz1eAUPmvx0IrmNnEgTPL08aKTUI50c%2Bg%2F7vaCu3oxYBRGw8o7P9S5OvQ%2FtyKiq3NudAOxJNCFOeoQvwhfwuwQo6BgQ1jKY1mGkj3ITcBN1klmj7KDkDW1zB90sjzve1&X-Amz-Signature=25475ac3489372da684d9ccb41b738054bd56c6fff9e9483cf2fc53080fd3416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4GMPVFQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDa%2F54qhkmUFjHGzQT4ZlKKsc3biaa9GPkdIdgjKvd5bQIhALq%2BRqBQ0Azf4XlspqfrfxGNXUB0rYJ%2F4fhwmY5%2FOWLRKv8DCEAQABoMNjM3NDIzMTgzODA1Igy5b0Rz0TJKjqxwUoYq3ANbaTguePuUAwq4P4MdMSecIhW%2FvCzxcgpfM1rvVHsOG%2FnV1r0kDKdIf0lFqpEBVraNfXhaEFKeYXoXfd7A7YHBZDWlSs0mIJubm%2BmcIVLcpjZUSY5eeFZv0r%2BwX3OKIzqQemzVDsMY%2FeS6aM3ufPy%2FAN3CJeqJ2q7awjXbCzop0FoOa99XXkqs%2FvylagMHXui4kUIDDEH8o531zik%2BD0Z67rQ%2FbBhwND42o9TlHc57Y1tmBk3TV5sbaiVAczQXi%2BHzLUsDjLC50J19ATz6N1IFKc4HfMu%2FOnNmn2w5LbtVlacd5SiCX0OY13eihWhYjvroAo8VkZrZdHKCIw3f8QhN4Jrd%2FCZwRCtod3cZ91gw14OL1CCbSZH%2BtuL4tfc%2Biwm33TC0CnHZrJsbVkEbvm06zKvYh0cTZG%2FK8qTqQZszkbwEE8G0Ip32TpfUC2RNo0106WjYcv52f4wQ76yGlrfzTw8HnrAEUpAP6xifkcddxguSHw%2BqhFG7Vev5arggK6QR2XGaVcyaijtqydGw%2B8K57toGHIQCJH9%2FjtugnrSNP%2B23KYY6kqJohz6K1Ue1jJj54wd8o6BtyCzQP9%2Faky69zDt%2BPSqT7wbzlKbn16H8z91qK9tbC9Bz%2Bxa7OzDBgdjDBjqkAePk0McSrnoCw68d8cmFUV6kuWranQ0zdcUq7sXG4icEHoh6o3ymKGV4Z9aumkPy22psx6IXDLnGkj%2B4DIUZt%2BelLfiKtz1eAUPmvx0IrmNnEgTPL08aKTUI50c%2Bg%2F7vaCu3oxYBRGw8o7P9S5OvQ%2FtyKiq3NudAOxJNCFOeoQvwhfwuwQo6BgQ1jKY1mGkj3ITcBN1klmj7KDkDW1zB90sjzve1&X-Amz-Signature=7eded3dd2a62cb4aa4da1c24f11906053eb754211922f75dfb63a90ed9ce1128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
