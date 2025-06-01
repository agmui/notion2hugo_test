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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVOPNGS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIBSom%2FUdwPh4LCxTFUzQg8qM1yJy5O4%2FagWBfq42onjHAiBevEnIvqhTUOBViuWCt7Rs9pvQ0y2siwkD0MOcOopBVCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm62pMBS%2Bjjvp8as4KtwDrxemC45s1d7PWjL4HWN2c1tTmjS8HLFVywHdFrP64Q4gCB2OYzXAe%2Ff9g8MqPrkfyfWlUq1%2Bh9MNxbNSdGgN9olH6pyPgNQUaV0cBC6%2B5gaiYnTUppQTxkBsti5hSjGXXrUL0%2FG91Pe36aL%2BNKd5ZcgSnUpdlg2c8WZdIDaZ%2F44JX4cCy%2FqNL311AbOOvce8QPa4uDKD8i76Kobkt6PDTFjQyvvXypFykuZfZ7EWak8VN3Q9hrShyI9I0BVqK1vzJ%2FVfRyzmfip%2FEyNLCD24FnlMGuDUeuf35iSsQKkYMFdILbJgA3HnhCNe3K8mRSr9z0t61ooFYLiUw2ihD8kQBaApaUAVfZchluudVbNV4Rq%2FhkX1LCucNSmksZMYf%2B4huKQcOdF6FRlZzLFrDbxsRWAQ5AIqfFd96vSF5cQwAf082xVdp%2BL1kA61nMkC6gW8cFJG3kuzVcKfsZvteK%2FB002CoZzkyRnDR%2FjcU2XSj40RQCtRk%2BHSwApJpj3E056of3nHWU4%2FBCHTpRAZCjJ0PdAZsdHTuRnJ8szYIpzfRa4jMPFxPPW3wt388tuFt1ZM%2BVLUUK2kmfy0ZBpspVUV2mI5ciHUeCkv43FEEBjDdsh8xsw6V4U0m2ytvLcw%2Bb%2FxwQY6pgFsWVK2p1jmCXP%2BH2HMUcZG6ffuewjADDxOrnIEg%2BHnPxqBXnMqI1G48HkWnhhzBwy1ZhWibhUUPDp9YhJ9lGKZ1lXao7c7TS7qvQtwCleM4fHlGxo2IxFt2sAoMRFG333Uv8U43pOde60BPAKq2GGQqduDwdbfTgd%2FdWVXV8PF%2FLq0VKvoqgaMWZKSMLccij0PLpt%2F57jfP0LjTYmcSrkJoNw6gr0A&X-Amz-Signature=136d0717824f8a0e27a7c09cc79178505a318bbcde6aab2b2e33ee26b5378bc9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVOPNGS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIBSom%2FUdwPh4LCxTFUzQg8qM1yJy5O4%2FagWBfq42onjHAiBevEnIvqhTUOBViuWCt7Rs9pvQ0y2siwkD0MOcOopBVCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm62pMBS%2Bjjvp8as4KtwDrxemC45s1d7PWjL4HWN2c1tTmjS8HLFVywHdFrP64Q4gCB2OYzXAe%2Ff9g8MqPrkfyfWlUq1%2Bh9MNxbNSdGgN9olH6pyPgNQUaV0cBC6%2B5gaiYnTUppQTxkBsti5hSjGXXrUL0%2FG91Pe36aL%2BNKd5ZcgSnUpdlg2c8WZdIDaZ%2F44JX4cCy%2FqNL311AbOOvce8QPa4uDKD8i76Kobkt6PDTFjQyvvXypFykuZfZ7EWak8VN3Q9hrShyI9I0BVqK1vzJ%2FVfRyzmfip%2FEyNLCD24FnlMGuDUeuf35iSsQKkYMFdILbJgA3HnhCNe3K8mRSr9z0t61ooFYLiUw2ihD8kQBaApaUAVfZchluudVbNV4Rq%2FhkX1LCucNSmksZMYf%2B4huKQcOdF6FRlZzLFrDbxsRWAQ5AIqfFd96vSF5cQwAf082xVdp%2BL1kA61nMkC6gW8cFJG3kuzVcKfsZvteK%2FB002CoZzkyRnDR%2FjcU2XSj40RQCtRk%2BHSwApJpj3E056of3nHWU4%2FBCHTpRAZCjJ0PdAZsdHTuRnJ8szYIpzfRa4jMPFxPPW3wt388tuFt1ZM%2BVLUUK2kmfy0ZBpspVUV2mI5ciHUeCkv43FEEBjDdsh8xsw6V4U0m2ytvLcw%2Bb%2FxwQY6pgFsWVK2p1jmCXP%2BH2HMUcZG6ffuewjADDxOrnIEg%2BHnPxqBXnMqI1G48HkWnhhzBwy1ZhWibhUUPDp9YhJ9lGKZ1lXao7c7TS7qvQtwCleM4fHlGxo2IxFt2sAoMRFG333Uv8U43pOde60BPAKq2GGQqduDwdbfTgd%2FdWVXV8PF%2FLq0VKvoqgaMWZKSMLccij0PLpt%2F57jfP0LjTYmcSrkJoNw6gr0A&X-Amz-Signature=202e0e968c1ea0db74665b1d47fb7730f1d4c02b239ab44bee9f821c695d1ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVOPNGS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIBSom%2FUdwPh4LCxTFUzQg8qM1yJy5O4%2FagWBfq42onjHAiBevEnIvqhTUOBViuWCt7Rs9pvQ0y2siwkD0MOcOopBVCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm62pMBS%2Bjjvp8as4KtwDrxemC45s1d7PWjL4HWN2c1tTmjS8HLFVywHdFrP64Q4gCB2OYzXAe%2Ff9g8MqPrkfyfWlUq1%2Bh9MNxbNSdGgN9olH6pyPgNQUaV0cBC6%2B5gaiYnTUppQTxkBsti5hSjGXXrUL0%2FG91Pe36aL%2BNKd5ZcgSnUpdlg2c8WZdIDaZ%2F44JX4cCy%2FqNL311AbOOvce8QPa4uDKD8i76Kobkt6PDTFjQyvvXypFykuZfZ7EWak8VN3Q9hrShyI9I0BVqK1vzJ%2FVfRyzmfip%2FEyNLCD24FnlMGuDUeuf35iSsQKkYMFdILbJgA3HnhCNe3K8mRSr9z0t61ooFYLiUw2ihD8kQBaApaUAVfZchluudVbNV4Rq%2FhkX1LCucNSmksZMYf%2B4huKQcOdF6FRlZzLFrDbxsRWAQ5AIqfFd96vSF5cQwAf082xVdp%2BL1kA61nMkC6gW8cFJG3kuzVcKfsZvteK%2FB002CoZzkyRnDR%2FjcU2XSj40RQCtRk%2BHSwApJpj3E056of3nHWU4%2FBCHTpRAZCjJ0PdAZsdHTuRnJ8szYIpzfRa4jMPFxPPW3wt388tuFt1ZM%2BVLUUK2kmfy0ZBpspVUV2mI5ciHUeCkv43FEEBjDdsh8xsw6V4U0m2ytvLcw%2Bb%2FxwQY6pgFsWVK2p1jmCXP%2BH2HMUcZG6ffuewjADDxOrnIEg%2BHnPxqBXnMqI1G48HkWnhhzBwy1ZhWibhUUPDp9YhJ9lGKZ1lXao7c7TS7qvQtwCleM4fHlGxo2IxFt2sAoMRFG333Uv8U43pOde60BPAKq2GGQqduDwdbfTgd%2FdWVXV8PF%2FLq0VKvoqgaMWZKSMLccij0PLpt%2F57jfP0LjTYmcSrkJoNw6gr0A&X-Amz-Signature=9ebe12d6e9ec11d1547d570ef25a02bc8026a8f63487a8011e2ca87540505923&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVOPNGS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIBSom%2FUdwPh4LCxTFUzQg8qM1yJy5O4%2FagWBfq42onjHAiBevEnIvqhTUOBViuWCt7Rs9pvQ0y2siwkD0MOcOopBVCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm62pMBS%2Bjjvp8as4KtwDrxemC45s1d7PWjL4HWN2c1tTmjS8HLFVywHdFrP64Q4gCB2OYzXAe%2Ff9g8MqPrkfyfWlUq1%2Bh9MNxbNSdGgN9olH6pyPgNQUaV0cBC6%2B5gaiYnTUppQTxkBsti5hSjGXXrUL0%2FG91Pe36aL%2BNKd5ZcgSnUpdlg2c8WZdIDaZ%2F44JX4cCy%2FqNL311AbOOvce8QPa4uDKD8i76Kobkt6PDTFjQyvvXypFykuZfZ7EWak8VN3Q9hrShyI9I0BVqK1vzJ%2FVfRyzmfip%2FEyNLCD24FnlMGuDUeuf35iSsQKkYMFdILbJgA3HnhCNe3K8mRSr9z0t61ooFYLiUw2ihD8kQBaApaUAVfZchluudVbNV4Rq%2FhkX1LCucNSmksZMYf%2B4huKQcOdF6FRlZzLFrDbxsRWAQ5AIqfFd96vSF5cQwAf082xVdp%2BL1kA61nMkC6gW8cFJG3kuzVcKfsZvteK%2FB002CoZzkyRnDR%2FjcU2XSj40RQCtRk%2BHSwApJpj3E056of3nHWU4%2FBCHTpRAZCjJ0PdAZsdHTuRnJ8szYIpzfRa4jMPFxPPW3wt388tuFt1ZM%2BVLUUK2kmfy0ZBpspVUV2mI5ciHUeCkv43FEEBjDdsh8xsw6V4U0m2ytvLcw%2Bb%2FxwQY6pgFsWVK2p1jmCXP%2BH2HMUcZG6ffuewjADDxOrnIEg%2BHnPxqBXnMqI1G48HkWnhhzBwy1ZhWibhUUPDp9YhJ9lGKZ1lXao7c7TS7qvQtwCleM4fHlGxo2IxFt2sAoMRFG333Uv8U43pOde60BPAKq2GGQqduDwdbfTgd%2FdWVXV8PF%2FLq0VKvoqgaMWZKSMLccij0PLpt%2F57jfP0LjTYmcSrkJoNw6gr0A&X-Amz-Signature=ff9b4f4dbaf72b9356ad71f94c090955272216113813f6af415621e4e20ef30d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVOPNGS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIBSom%2FUdwPh4LCxTFUzQg8qM1yJy5O4%2FagWBfq42onjHAiBevEnIvqhTUOBViuWCt7Rs9pvQ0y2siwkD0MOcOopBVCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm62pMBS%2Bjjvp8as4KtwDrxemC45s1d7PWjL4HWN2c1tTmjS8HLFVywHdFrP64Q4gCB2OYzXAe%2Ff9g8MqPrkfyfWlUq1%2Bh9MNxbNSdGgN9olH6pyPgNQUaV0cBC6%2B5gaiYnTUppQTxkBsti5hSjGXXrUL0%2FG91Pe36aL%2BNKd5ZcgSnUpdlg2c8WZdIDaZ%2F44JX4cCy%2FqNL311AbOOvce8QPa4uDKD8i76Kobkt6PDTFjQyvvXypFykuZfZ7EWak8VN3Q9hrShyI9I0BVqK1vzJ%2FVfRyzmfip%2FEyNLCD24FnlMGuDUeuf35iSsQKkYMFdILbJgA3HnhCNe3K8mRSr9z0t61ooFYLiUw2ihD8kQBaApaUAVfZchluudVbNV4Rq%2FhkX1LCucNSmksZMYf%2B4huKQcOdF6FRlZzLFrDbxsRWAQ5AIqfFd96vSF5cQwAf082xVdp%2BL1kA61nMkC6gW8cFJG3kuzVcKfsZvteK%2FB002CoZzkyRnDR%2FjcU2XSj40RQCtRk%2BHSwApJpj3E056of3nHWU4%2FBCHTpRAZCjJ0PdAZsdHTuRnJ8szYIpzfRa4jMPFxPPW3wt388tuFt1ZM%2BVLUUK2kmfy0ZBpspVUV2mI5ciHUeCkv43FEEBjDdsh8xsw6V4U0m2ytvLcw%2Bb%2FxwQY6pgFsWVK2p1jmCXP%2BH2HMUcZG6ffuewjADDxOrnIEg%2BHnPxqBXnMqI1G48HkWnhhzBwy1ZhWibhUUPDp9YhJ9lGKZ1lXao7c7TS7qvQtwCleM4fHlGxo2IxFt2sAoMRFG333Uv8U43pOde60BPAKq2GGQqduDwdbfTgd%2FdWVXV8PF%2FLq0VKvoqgaMWZKSMLccij0PLpt%2F57jfP0LjTYmcSrkJoNw6gr0A&X-Amz-Signature=2c5d4c35fececd548c01000848841485fad312a78e629d86baa246df96df76d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZVOPNGS%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIBSom%2FUdwPh4LCxTFUzQg8qM1yJy5O4%2FagWBfq42onjHAiBevEnIvqhTUOBViuWCt7Rs9pvQ0y2siwkD0MOcOopBVCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm62pMBS%2Bjjvp8as4KtwDrxemC45s1d7PWjL4HWN2c1tTmjS8HLFVywHdFrP64Q4gCB2OYzXAe%2Ff9g8MqPrkfyfWlUq1%2Bh9MNxbNSdGgN9olH6pyPgNQUaV0cBC6%2B5gaiYnTUppQTxkBsti5hSjGXXrUL0%2FG91Pe36aL%2BNKd5ZcgSnUpdlg2c8WZdIDaZ%2F44JX4cCy%2FqNL311AbOOvce8QPa4uDKD8i76Kobkt6PDTFjQyvvXypFykuZfZ7EWak8VN3Q9hrShyI9I0BVqK1vzJ%2FVfRyzmfip%2FEyNLCD24FnlMGuDUeuf35iSsQKkYMFdILbJgA3HnhCNe3K8mRSr9z0t61ooFYLiUw2ihD8kQBaApaUAVfZchluudVbNV4Rq%2FhkX1LCucNSmksZMYf%2B4huKQcOdF6FRlZzLFrDbxsRWAQ5AIqfFd96vSF5cQwAf082xVdp%2BL1kA61nMkC6gW8cFJG3kuzVcKfsZvteK%2FB002CoZzkyRnDR%2FjcU2XSj40RQCtRk%2BHSwApJpj3E056of3nHWU4%2FBCHTpRAZCjJ0PdAZsdHTuRnJ8szYIpzfRa4jMPFxPPW3wt388tuFt1ZM%2BVLUUK2kmfy0ZBpspVUV2mI5ciHUeCkv43FEEBjDdsh8xsw6V4U0m2ytvLcw%2Bb%2FxwQY6pgFsWVK2p1jmCXP%2BH2HMUcZG6ffuewjADDxOrnIEg%2BHnPxqBXnMqI1G48HkWnhhzBwy1ZhWibhUUPDp9YhJ9lGKZ1lXao7c7TS7qvQtwCleM4fHlGxo2IxFt2sAoMRFG333Uv8U43pOde60BPAKq2GGQqduDwdbfTgd%2FdWVXV8PF%2FLq0VKvoqgaMWZKSMLccij0PLpt%2F57jfP0LjTYmcSrkJoNw6gr0A&X-Amz-Signature=1738927479894ac4f12035fad6ec27debf33b7953b378785e97d5bef0df59679&X-Amz-SignedHeaders=host&x-id=GetObject)
