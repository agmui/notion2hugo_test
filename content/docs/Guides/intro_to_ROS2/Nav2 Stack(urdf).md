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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B53YDIG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHw3J%2FP44yuB9VZ8WkRkkuwg9UDnEDPRue%2FXnMQTSY9HAiEAk6kOpx7zm3hviMDUzJt%2FV3jnPakHWF8qQN%2B2p1Xo6FIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHRDDf4aQjxJXRpXgyrcA0kI40rG3eTLEACwmhPwMA6%2FKH5iuxL262kKfPc3UvW6A%2BPBDmIoSF9%2F4Uui09uHNUH%2FAKplSZrwvJubKT1FbF9MGCtufB7OvGXJjpvZHGTbFxzvkloNDAfZvRub6E2K2kXRwUJj8tKvhq0ZkXUhC%2BpDozhe%2BnFkcziDACDYVObNnBRZVcA2GU5Hki35iRjVGsjOZI3Cg1jV28EtnrPM7CQyTk3erRrn1SFYVPL2NEspJ%2FiuLyZC03GAuJJr%2Br56p%2FAXF9iFFJKV20%2Bic7%2BcZfpQdqoxR1hEUdirxPd9bNZcvRpdoS3hTq9nDldxRKJ6PGjAXGl2E8qItMdcSuiJTjA%2FSLgNohCaD9Og7Ev1I3qBR%2BswkCnHh7U3MTUBw%2BTQrhCcoh6ZuoD4qavVIKqsbK2OUDIy8muMJ%2B90GyMvdgcV9FNLIPkz%2BjzIxQcI2nxDz3vm40%2BKiDX6rcJE9h1c05iMB0qNDycGPHYy6B9EMXiUPPZ2xi5MbEYh7i32AWbOu9htQZGks%2BfzAhRxsB2Lcqg42wIY2d7gBxod150fbubzsoY%2BiPe0rQQOcNRwaU40C35NivRgpVLv6nIzg4hO6kgwCh4xe%2BU2FiujZ4Map7qvLxdoqhS9sFdooEGLMMa91L8GOqUBamBHaQTlCJxnp8Kt4xSqVnIiqfyb63ik%2F71TAfsRggTvfpTGuxD6A8d%2FOn50Taseu%2BBKBulKenak9X9p7OV6WfYsAa3c8FnPxjNd%2BeQ9mEv2CSEVKrfZBchJsUt2xHH52%2BdkWhorg2c5tz%2BhHUKkfXhel7HBfkweJB9996i3gqVeZf3M035Qf18LNmGAIsE3h%2F9y1LQzVH7LL3PmU8VdZssiWoNB&X-Amz-Signature=3f2a7b2e9d24800000db4509bb5750a595bf6282cd23680394717f92b8d31f96&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B53YDIG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHw3J%2FP44yuB9VZ8WkRkkuwg9UDnEDPRue%2FXnMQTSY9HAiEAk6kOpx7zm3hviMDUzJt%2FV3jnPakHWF8qQN%2B2p1Xo6FIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHRDDf4aQjxJXRpXgyrcA0kI40rG3eTLEACwmhPwMA6%2FKH5iuxL262kKfPc3UvW6A%2BPBDmIoSF9%2F4Uui09uHNUH%2FAKplSZrwvJubKT1FbF9MGCtufB7OvGXJjpvZHGTbFxzvkloNDAfZvRub6E2K2kXRwUJj8tKvhq0ZkXUhC%2BpDozhe%2BnFkcziDACDYVObNnBRZVcA2GU5Hki35iRjVGsjOZI3Cg1jV28EtnrPM7CQyTk3erRrn1SFYVPL2NEspJ%2FiuLyZC03GAuJJr%2Br56p%2FAXF9iFFJKV20%2Bic7%2BcZfpQdqoxR1hEUdirxPd9bNZcvRpdoS3hTq9nDldxRKJ6PGjAXGl2E8qItMdcSuiJTjA%2FSLgNohCaD9Og7Ev1I3qBR%2BswkCnHh7U3MTUBw%2BTQrhCcoh6ZuoD4qavVIKqsbK2OUDIy8muMJ%2B90GyMvdgcV9FNLIPkz%2BjzIxQcI2nxDz3vm40%2BKiDX6rcJE9h1c05iMB0qNDycGPHYy6B9EMXiUPPZ2xi5MbEYh7i32AWbOu9htQZGks%2BfzAhRxsB2Lcqg42wIY2d7gBxod150fbubzsoY%2BiPe0rQQOcNRwaU40C35NivRgpVLv6nIzg4hO6kgwCh4xe%2BU2FiujZ4Map7qvLxdoqhS9sFdooEGLMMa91L8GOqUBamBHaQTlCJxnp8Kt4xSqVnIiqfyb63ik%2F71TAfsRggTvfpTGuxD6A8d%2FOn50Taseu%2BBKBulKenak9X9p7OV6WfYsAa3c8FnPxjNd%2BeQ9mEv2CSEVKrfZBchJsUt2xHH52%2BdkWhorg2c5tz%2BhHUKkfXhel7HBfkweJB9996i3gqVeZf3M035Qf18LNmGAIsE3h%2F9y1LQzVH7LL3PmU8VdZssiWoNB&X-Amz-Signature=af9ff94723749e86acd65f064597a6ff3694a144baaa3da348846772f9358764&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B53YDIG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHw3J%2FP44yuB9VZ8WkRkkuwg9UDnEDPRue%2FXnMQTSY9HAiEAk6kOpx7zm3hviMDUzJt%2FV3jnPakHWF8qQN%2B2p1Xo6FIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHRDDf4aQjxJXRpXgyrcA0kI40rG3eTLEACwmhPwMA6%2FKH5iuxL262kKfPc3UvW6A%2BPBDmIoSF9%2F4Uui09uHNUH%2FAKplSZrwvJubKT1FbF9MGCtufB7OvGXJjpvZHGTbFxzvkloNDAfZvRub6E2K2kXRwUJj8tKvhq0ZkXUhC%2BpDozhe%2BnFkcziDACDYVObNnBRZVcA2GU5Hki35iRjVGsjOZI3Cg1jV28EtnrPM7CQyTk3erRrn1SFYVPL2NEspJ%2FiuLyZC03GAuJJr%2Br56p%2FAXF9iFFJKV20%2Bic7%2BcZfpQdqoxR1hEUdirxPd9bNZcvRpdoS3hTq9nDldxRKJ6PGjAXGl2E8qItMdcSuiJTjA%2FSLgNohCaD9Og7Ev1I3qBR%2BswkCnHh7U3MTUBw%2BTQrhCcoh6ZuoD4qavVIKqsbK2OUDIy8muMJ%2B90GyMvdgcV9FNLIPkz%2BjzIxQcI2nxDz3vm40%2BKiDX6rcJE9h1c05iMB0qNDycGPHYy6B9EMXiUPPZ2xi5MbEYh7i32AWbOu9htQZGks%2BfzAhRxsB2Lcqg42wIY2d7gBxod150fbubzsoY%2BiPe0rQQOcNRwaU40C35NivRgpVLv6nIzg4hO6kgwCh4xe%2BU2FiujZ4Map7qvLxdoqhS9sFdooEGLMMa91L8GOqUBamBHaQTlCJxnp8Kt4xSqVnIiqfyb63ik%2F71TAfsRggTvfpTGuxD6A8d%2FOn50Taseu%2BBKBulKenak9X9p7OV6WfYsAa3c8FnPxjNd%2BeQ9mEv2CSEVKrfZBchJsUt2xHH52%2BdkWhorg2c5tz%2BhHUKkfXhel7HBfkweJB9996i3gqVeZf3M035Qf18LNmGAIsE3h%2F9y1LQzVH7LL3PmU8VdZssiWoNB&X-Amz-Signature=56b2041020a1e5ab729cc4a04dce2df0bcee8efba574b1f650d5d290b5d01657&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B53YDIG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHw3J%2FP44yuB9VZ8WkRkkuwg9UDnEDPRue%2FXnMQTSY9HAiEAk6kOpx7zm3hviMDUzJt%2FV3jnPakHWF8qQN%2B2p1Xo6FIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHRDDf4aQjxJXRpXgyrcA0kI40rG3eTLEACwmhPwMA6%2FKH5iuxL262kKfPc3UvW6A%2BPBDmIoSF9%2F4Uui09uHNUH%2FAKplSZrwvJubKT1FbF9MGCtufB7OvGXJjpvZHGTbFxzvkloNDAfZvRub6E2K2kXRwUJj8tKvhq0ZkXUhC%2BpDozhe%2BnFkcziDACDYVObNnBRZVcA2GU5Hki35iRjVGsjOZI3Cg1jV28EtnrPM7CQyTk3erRrn1SFYVPL2NEspJ%2FiuLyZC03GAuJJr%2Br56p%2FAXF9iFFJKV20%2Bic7%2BcZfpQdqoxR1hEUdirxPd9bNZcvRpdoS3hTq9nDldxRKJ6PGjAXGl2E8qItMdcSuiJTjA%2FSLgNohCaD9Og7Ev1I3qBR%2BswkCnHh7U3MTUBw%2BTQrhCcoh6ZuoD4qavVIKqsbK2OUDIy8muMJ%2B90GyMvdgcV9FNLIPkz%2BjzIxQcI2nxDz3vm40%2BKiDX6rcJE9h1c05iMB0qNDycGPHYy6B9EMXiUPPZ2xi5MbEYh7i32AWbOu9htQZGks%2BfzAhRxsB2Lcqg42wIY2d7gBxod150fbubzsoY%2BiPe0rQQOcNRwaU40C35NivRgpVLv6nIzg4hO6kgwCh4xe%2BU2FiujZ4Map7qvLxdoqhS9sFdooEGLMMa91L8GOqUBamBHaQTlCJxnp8Kt4xSqVnIiqfyb63ik%2F71TAfsRggTvfpTGuxD6A8d%2FOn50Taseu%2BBKBulKenak9X9p7OV6WfYsAa3c8FnPxjNd%2BeQ9mEv2CSEVKrfZBchJsUt2xHH52%2BdkWhorg2c5tz%2BhHUKkfXhel7HBfkweJB9996i3gqVeZf3M035Qf18LNmGAIsE3h%2F9y1LQzVH7LL3PmU8VdZssiWoNB&X-Amz-Signature=bc6cbfe044077a1e1a0c017ae6f851a6e0fe82ef747b3710003307bc6b33d526&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B53YDIG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHw3J%2FP44yuB9VZ8WkRkkuwg9UDnEDPRue%2FXnMQTSY9HAiEAk6kOpx7zm3hviMDUzJt%2FV3jnPakHWF8qQN%2B2p1Xo6FIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHRDDf4aQjxJXRpXgyrcA0kI40rG3eTLEACwmhPwMA6%2FKH5iuxL262kKfPc3UvW6A%2BPBDmIoSF9%2F4Uui09uHNUH%2FAKplSZrwvJubKT1FbF9MGCtufB7OvGXJjpvZHGTbFxzvkloNDAfZvRub6E2K2kXRwUJj8tKvhq0ZkXUhC%2BpDozhe%2BnFkcziDACDYVObNnBRZVcA2GU5Hki35iRjVGsjOZI3Cg1jV28EtnrPM7CQyTk3erRrn1SFYVPL2NEspJ%2FiuLyZC03GAuJJr%2Br56p%2FAXF9iFFJKV20%2Bic7%2BcZfpQdqoxR1hEUdirxPd9bNZcvRpdoS3hTq9nDldxRKJ6PGjAXGl2E8qItMdcSuiJTjA%2FSLgNohCaD9Og7Ev1I3qBR%2BswkCnHh7U3MTUBw%2BTQrhCcoh6ZuoD4qavVIKqsbK2OUDIy8muMJ%2B90GyMvdgcV9FNLIPkz%2BjzIxQcI2nxDz3vm40%2BKiDX6rcJE9h1c05iMB0qNDycGPHYy6B9EMXiUPPZ2xi5MbEYh7i32AWbOu9htQZGks%2BfzAhRxsB2Lcqg42wIY2d7gBxod150fbubzsoY%2BiPe0rQQOcNRwaU40C35NivRgpVLv6nIzg4hO6kgwCh4xe%2BU2FiujZ4Map7qvLxdoqhS9sFdooEGLMMa91L8GOqUBamBHaQTlCJxnp8Kt4xSqVnIiqfyb63ik%2F71TAfsRggTvfpTGuxD6A8d%2FOn50Taseu%2BBKBulKenak9X9p7OV6WfYsAa3c8FnPxjNd%2BeQ9mEv2CSEVKrfZBchJsUt2xHH52%2BdkWhorg2c5tz%2BhHUKkfXhel7HBfkweJB9996i3gqVeZf3M035Qf18LNmGAIsE3h%2F9y1LQzVH7LL3PmU8VdZssiWoNB&X-Amz-Signature=a67fa8bbc4a6dc3087d0f8febeb076dd36e36becce8c28416a7f39c3edd021ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665B53YDIG%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T132044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHw3J%2FP44yuB9VZ8WkRkkuwg9UDnEDPRue%2FXnMQTSY9HAiEAk6kOpx7zm3hviMDUzJt%2FV3jnPakHWF8qQN%2B2p1Xo6FIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHRDDf4aQjxJXRpXgyrcA0kI40rG3eTLEACwmhPwMA6%2FKH5iuxL262kKfPc3UvW6A%2BPBDmIoSF9%2F4Uui09uHNUH%2FAKplSZrwvJubKT1FbF9MGCtufB7OvGXJjpvZHGTbFxzvkloNDAfZvRub6E2K2kXRwUJj8tKvhq0ZkXUhC%2BpDozhe%2BnFkcziDACDYVObNnBRZVcA2GU5Hki35iRjVGsjOZI3Cg1jV28EtnrPM7CQyTk3erRrn1SFYVPL2NEspJ%2FiuLyZC03GAuJJr%2Br56p%2FAXF9iFFJKV20%2Bic7%2BcZfpQdqoxR1hEUdirxPd9bNZcvRpdoS3hTq9nDldxRKJ6PGjAXGl2E8qItMdcSuiJTjA%2FSLgNohCaD9Og7Ev1I3qBR%2BswkCnHh7U3MTUBw%2BTQrhCcoh6ZuoD4qavVIKqsbK2OUDIy8muMJ%2B90GyMvdgcV9FNLIPkz%2BjzIxQcI2nxDz3vm40%2BKiDX6rcJE9h1c05iMB0qNDycGPHYy6B9EMXiUPPZ2xi5MbEYh7i32AWbOu9htQZGks%2BfzAhRxsB2Lcqg42wIY2d7gBxod150fbubzsoY%2BiPe0rQQOcNRwaU40C35NivRgpVLv6nIzg4hO6kgwCh4xe%2BU2FiujZ4Map7qvLxdoqhS9sFdooEGLMMa91L8GOqUBamBHaQTlCJxnp8Kt4xSqVnIiqfyb63ik%2F71TAfsRggTvfpTGuxD6A8d%2FOn50Taseu%2BBKBulKenak9X9p7OV6WfYsAa3c8FnPxjNd%2BeQ9mEv2CSEVKrfZBchJsUt2xHH52%2BdkWhorg2c5tz%2BhHUKkfXhel7HBfkweJB9996i3gqVeZf3M035Qf18LNmGAIsE3h%2F9y1LQzVH7LL3PmU8VdZssiWoNB&X-Amz-Signature=ab62289d2006a04f093be883e4b7e361008238c116340c23b6ebdb5d3538e41c&X-Amz-SignedHeaders=host&x-id=GetObject)
