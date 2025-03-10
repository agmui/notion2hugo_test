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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULJM4HJZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHp2vvZyr%2Bx2B1rPcW43%2FW2wDWKwMr8Cjak%2FUdChFSygAiEA2FNzVjX5Drj%2FGcbyaHXPwwTTveIVjTwQTC4tEf3UcnAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQEuORz7jQ4h0MCwircAwSYpUOP4JsrYj%2B1TxVcKEBaN6uvUu9kzspyJgOivp3P2FWHdl3zTMie1CJiG6%2F%2BLkeqNwgeaoLC9rVFWwGp1EUb3tX0a87Cuz%2BX0Yud7tUGk1Vo1cDEFXZ5KfJHOXX6Zn9qwF4W8HuKLXFVVYkCokl4nPENcD%2BqJay9vIXJg109pvYoMk5n0GRvs2q32aJ1FkicPK7qbAQt11kcZxLV%2BiXsH33A7DHCH1X8oxwA3fvAmERayYI8wYPliTh4BAOhl%2F507iETvCDYz0Cmq7HqCIW9yMDR6GNQpXu%2F4gYFIfeBhNLBnnRLJOZSoNCiqx6PUbCmiQlK6nbX%2BWEXlvalVtZrD9DQi%2B78BD1nQZetc5xc2tbLM33ojZVbX2fmdFSaJgIIu98%2FtFLXpliobiWJDUZPjfU2PQ4I8l42FnT0vErzF4EmxwUI71WMRLVzB%2BT7dRma2kVysCzOuKoitEVSND7bZVa6sB1UmqmIok%2FqrEj1CF8rrLyRhkQY%2BGkpPC4s7kyboNW0q0nPOVaeWgLwy%2BfvywO0rFTA5Az7NxN34m7k7jqcUTaJtY1slwl%2FzltyC13dufqhg4tVir617%2FDXhd2xyNCxL3m%2Fy8nKPRjLJjId4GkNYr9tBIcFbylXMKKKu74GOqUB48CkH4W1psfl3KYjhN%2BCSeytWr0cHQMohXSH45EJSyuyfTnJTTZpKKReTXqLUnxrFSZowwa6OyLMoSLQazTANE8WZ0hBtHKDkbvefwfo8aLPSbuAp%2B4YxE2UWx2pmEQNMupUStUyVoMUowQofPdGjCFpsEHz0eHjk6SIp%2Bj12Jtvhr9qlOOFGU2fR4%2FD3tmoLRMz1dg1Q6C38FgT%2F4ka0hdX7axV&X-Amz-Signature=7b13c5bb85b1a38f8764900635b2db91f24cd4385ded80570dac6767863022d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULJM4HJZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHp2vvZyr%2Bx2B1rPcW43%2FW2wDWKwMr8Cjak%2FUdChFSygAiEA2FNzVjX5Drj%2FGcbyaHXPwwTTveIVjTwQTC4tEf3UcnAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQEuORz7jQ4h0MCwircAwSYpUOP4JsrYj%2B1TxVcKEBaN6uvUu9kzspyJgOivp3P2FWHdl3zTMie1CJiG6%2F%2BLkeqNwgeaoLC9rVFWwGp1EUb3tX0a87Cuz%2BX0Yud7tUGk1Vo1cDEFXZ5KfJHOXX6Zn9qwF4W8HuKLXFVVYkCokl4nPENcD%2BqJay9vIXJg109pvYoMk5n0GRvs2q32aJ1FkicPK7qbAQt11kcZxLV%2BiXsH33A7DHCH1X8oxwA3fvAmERayYI8wYPliTh4BAOhl%2F507iETvCDYz0Cmq7HqCIW9yMDR6GNQpXu%2F4gYFIfeBhNLBnnRLJOZSoNCiqx6PUbCmiQlK6nbX%2BWEXlvalVtZrD9DQi%2B78BD1nQZetc5xc2tbLM33ojZVbX2fmdFSaJgIIu98%2FtFLXpliobiWJDUZPjfU2PQ4I8l42FnT0vErzF4EmxwUI71WMRLVzB%2BT7dRma2kVysCzOuKoitEVSND7bZVa6sB1UmqmIok%2FqrEj1CF8rrLyRhkQY%2BGkpPC4s7kyboNW0q0nPOVaeWgLwy%2BfvywO0rFTA5Az7NxN34m7k7jqcUTaJtY1slwl%2FzltyC13dufqhg4tVir617%2FDXhd2xyNCxL3m%2Fy8nKPRjLJjId4GkNYr9tBIcFbylXMKKKu74GOqUB48CkH4W1psfl3KYjhN%2BCSeytWr0cHQMohXSH45EJSyuyfTnJTTZpKKReTXqLUnxrFSZowwa6OyLMoSLQazTANE8WZ0hBtHKDkbvefwfo8aLPSbuAp%2B4YxE2UWx2pmEQNMupUStUyVoMUowQofPdGjCFpsEHz0eHjk6SIp%2Bj12Jtvhr9qlOOFGU2fR4%2FD3tmoLRMz1dg1Q6C38FgT%2F4ka0hdX7axV&X-Amz-Signature=3cafdf1e2f9c9b28fcc7dca451eec25a9b4a970c002123fe85c9b1d487fa6061&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULJM4HJZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHp2vvZyr%2Bx2B1rPcW43%2FW2wDWKwMr8Cjak%2FUdChFSygAiEA2FNzVjX5Drj%2FGcbyaHXPwwTTveIVjTwQTC4tEf3UcnAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQEuORz7jQ4h0MCwircAwSYpUOP4JsrYj%2B1TxVcKEBaN6uvUu9kzspyJgOivp3P2FWHdl3zTMie1CJiG6%2F%2BLkeqNwgeaoLC9rVFWwGp1EUb3tX0a87Cuz%2BX0Yud7tUGk1Vo1cDEFXZ5KfJHOXX6Zn9qwF4W8HuKLXFVVYkCokl4nPENcD%2BqJay9vIXJg109pvYoMk5n0GRvs2q32aJ1FkicPK7qbAQt11kcZxLV%2BiXsH33A7DHCH1X8oxwA3fvAmERayYI8wYPliTh4BAOhl%2F507iETvCDYz0Cmq7HqCIW9yMDR6GNQpXu%2F4gYFIfeBhNLBnnRLJOZSoNCiqx6PUbCmiQlK6nbX%2BWEXlvalVtZrD9DQi%2B78BD1nQZetc5xc2tbLM33ojZVbX2fmdFSaJgIIu98%2FtFLXpliobiWJDUZPjfU2PQ4I8l42FnT0vErzF4EmxwUI71WMRLVzB%2BT7dRma2kVysCzOuKoitEVSND7bZVa6sB1UmqmIok%2FqrEj1CF8rrLyRhkQY%2BGkpPC4s7kyboNW0q0nPOVaeWgLwy%2BfvywO0rFTA5Az7NxN34m7k7jqcUTaJtY1slwl%2FzltyC13dufqhg4tVir617%2FDXhd2xyNCxL3m%2Fy8nKPRjLJjId4GkNYr9tBIcFbylXMKKKu74GOqUB48CkH4W1psfl3KYjhN%2BCSeytWr0cHQMohXSH45EJSyuyfTnJTTZpKKReTXqLUnxrFSZowwa6OyLMoSLQazTANE8WZ0hBtHKDkbvefwfo8aLPSbuAp%2B4YxE2UWx2pmEQNMupUStUyVoMUowQofPdGjCFpsEHz0eHjk6SIp%2Bj12Jtvhr9qlOOFGU2fR4%2FD3tmoLRMz1dg1Q6C38FgT%2F4ka0hdX7axV&X-Amz-Signature=ee69fc1479a33fb9a9e41d6ed82aabfc0573eff350788b3f1641701803b21eef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULJM4HJZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHp2vvZyr%2Bx2B1rPcW43%2FW2wDWKwMr8Cjak%2FUdChFSygAiEA2FNzVjX5Drj%2FGcbyaHXPwwTTveIVjTwQTC4tEf3UcnAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQEuORz7jQ4h0MCwircAwSYpUOP4JsrYj%2B1TxVcKEBaN6uvUu9kzspyJgOivp3P2FWHdl3zTMie1CJiG6%2F%2BLkeqNwgeaoLC9rVFWwGp1EUb3tX0a87Cuz%2BX0Yud7tUGk1Vo1cDEFXZ5KfJHOXX6Zn9qwF4W8HuKLXFVVYkCokl4nPENcD%2BqJay9vIXJg109pvYoMk5n0GRvs2q32aJ1FkicPK7qbAQt11kcZxLV%2BiXsH33A7DHCH1X8oxwA3fvAmERayYI8wYPliTh4BAOhl%2F507iETvCDYz0Cmq7HqCIW9yMDR6GNQpXu%2F4gYFIfeBhNLBnnRLJOZSoNCiqx6PUbCmiQlK6nbX%2BWEXlvalVtZrD9DQi%2B78BD1nQZetc5xc2tbLM33ojZVbX2fmdFSaJgIIu98%2FtFLXpliobiWJDUZPjfU2PQ4I8l42FnT0vErzF4EmxwUI71WMRLVzB%2BT7dRma2kVysCzOuKoitEVSND7bZVa6sB1UmqmIok%2FqrEj1CF8rrLyRhkQY%2BGkpPC4s7kyboNW0q0nPOVaeWgLwy%2BfvywO0rFTA5Az7NxN34m7k7jqcUTaJtY1slwl%2FzltyC13dufqhg4tVir617%2FDXhd2xyNCxL3m%2Fy8nKPRjLJjId4GkNYr9tBIcFbylXMKKKu74GOqUB48CkH4W1psfl3KYjhN%2BCSeytWr0cHQMohXSH45EJSyuyfTnJTTZpKKReTXqLUnxrFSZowwa6OyLMoSLQazTANE8WZ0hBtHKDkbvefwfo8aLPSbuAp%2B4YxE2UWx2pmEQNMupUStUyVoMUowQofPdGjCFpsEHz0eHjk6SIp%2Bj12Jtvhr9qlOOFGU2fR4%2FD3tmoLRMz1dg1Q6C38FgT%2F4ka0hdX7axV&X-Amz-Signature=ac6c5dbda2626a76aa317e7459d380a4ab3c9e5c668d074d5ad6c459b8ccfb50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULJM4HJZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHp2vvZyr%2Bx2B1rPcW43%2FW2wDWKwMr8Cjak%2FUdChFSygAiEA2FNzVjX5Drj%2FGcbyaHXPwwTTveIVjTwQTC4tEf3UcnAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQEuORz7jQ4h0MCwircAwSYpUOP4JsrYj%2B1TxVcKEBaN6uvUu9kzspyJgOivp3P2FWHdl3zTMie1CJiG6%2F%2BLkeqNwgeaoLC9rVFWwGp1EUb3tX0a87Cuz%2BX0Yud7tUGk1Vo1cDEFXZ5KfJHOXX6Zn9qwF4W8HuKLXFVVYkCokl4nPENcD%2BqJay9vIXJg109pvYoMk5n0GRvs2q32aJ1FkicPK7qbAQt11kcZxLV%2BiXsH33A7DHCH1X8oxwA3fvAmERayYI8wYPliTh4BAOhl%2F507iETvCDYz0Cmq7HqCIW9yMDR6GNQpXu%2F4gYFIfeBhNLBnnRLJOZSoNCiqx6PUbCmiQlK6nbX%2BWEXlvalVtZrD9DQi%2B78BD1nQZetc5xc2tbLM33ojZVbX2fmdFSaJgIIu98%2FtFLXpliobiWJDUZPjfU2PQ4I8l42FnT0vErzF4EmxwUI71WMRLVzB%2BT7dRma2kVysCzOuKoitEVSND7bZVa6sB1UmqmIok%2FqrEj1CF8rrLyRhkQY%2BGkpPC4s7kyboNW0q0nPOVaeWgLwy%2BfvywO0rFTA5Az7NxN34m7k7jqcUTaJtY1slwl%2FzltyC13dufqhg4tVir617%2FDXhd2xyNCxL3m%2Fy8nKPRjLJjId4GkNYr9tBIcFbylXMKKKu74GOqUB48CkH4W1psfl3KYjhN%2BCSeytWr0cHQMohXSH45EJSyuyfTnJTTZpKKReTXqLUnxrFSZowwa6OyLMoSLQazTANE8WZ0hBtHKDkbvefwfo8aLPSbuAp%2B4YxE2UWx2pmEQNMupUStUyVoMUowQofPdGjCFpsEHz0eHjk6SIp%2Bj12Jtvhr9qlOOFGU2fR4%2FD3tmoLRMz1dg1Q6C38FgT%2F4ka0hdX7axV&X-Amz-Signature=e23984f1a47fc435bf96818e2e74a91bedb385c1c1b917495e2deb08c276dd09&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULJM4HJZ%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T110131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHp2vvZyr%2Bx2B1rPcW43%2FW2wDWKwMr8Cjak%2FUdChFSygAiEA2FNzVjX5Drj%2FGcbyaHXPwwTTveIVjTwQTC4tEf3UcnAqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQEuORz7jQ4h0MCwircAwSYpUOP4JsrYj%2B1TxVcKEBaN6uvUu9kzspyJgOivp3P2FWHdl3zTMie1CJiG6%2F%2BLkeqNwgeaoLC9rVFWwGp1EUb3tX0a87Cuz%2BX0Yud7tUGk1Vo1cDEFXZ5KfJHOXX6Zn9qwF4W8HuKLXFVVYkCokl4nPENcD%2BqJay9vIXJg109pvYoMk5n0GRvs2q32aJ1FkicPK7qbAQt11kcZxLV%2BiXsH33A7DHCH1X8oxwA3fvAmERayYI8wYPliTh4BAOhl%2F507iETvCDYz0Cmq7HqCIW9yMDR6GNQpXu%2F4gYFIfeBhNLBnnRLJOZSoNCiqx6PUbCmiQlK6nbX%2BWEXlvalVtZrD9DQi%2B78BD1nQZetc5xc2tbLM33ojZVbX2fmdFSaJgIIu98%2FtFLXpliobiWJDUZPjfU2PQ4I8l42FnT0vErzF4EmxwUI71WMRLVzB%2BT7dRma2kVysCzOuKoitEVSND7bZVa6sB1UmqmIok%2FqrEj1CF8rrLyRhkQY%2BGkpPC4s7kyboNW0q0nPOVaeWgLwy%2BfvywO0rFTA5Az7NxN34m7k7jqcUTaJtY1slwl%2FzltyC13dufqhg4tVir617%2FDXhd2xyNCxL3m%2Fy8nKPRjLJjId4GkNYr9tBIcFbylXMKKKu74GOqUB48CkH4W1psfl3KYjhN%2BCSeytWr0cHQMohXSH45EJSyuyfTnJTTZpKKReTXqLUnxrFSZowwa6OyLMoSLQazTANE8WZ0hBtHKDkbvefwfo8aLPSbuAp%2B4YxE2UWx2pmEQNMupUStUyVoMUowQofPdGjCFpsEHz0eHjk6SIp%2Bj12Jtvhr9qlOOFGU2fR4%2FD3tmoLRMz1dg1Q6C38FgT%2F4ka0hdX7axV&X-Amz-Signature=cae8c27bfe804d9771c047b04352a6454e0f4676e555352ece9dba100aceacca&X-Amz-SignedHeaders=host&x-id=GetObject)
