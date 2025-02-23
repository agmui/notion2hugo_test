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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQCBTGHG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm7VZh5t2HqFcA%2B%2B2v%2B6cBmUcx9nYwdgESVXUt7YiTNwIhANZ4ixndxlCTxobGxUIg6dtfmfLclscm%2Bb%2BstgK%2BqAb%2BKv8DCBAQABoMNjM3NDIzMTgzODA1IgwoucMPgSltu0IPqGEq3ANc42%2BdoiBAq8HlYI4adOiSfBEgPKd1cpPRqQ97KTRPFNt%2FU%2BdUOPTK0azHWJMqOV7CB%2F1GqRyJ8uEtsVivgSBgWNQw0SlilEs4JGELSR36zoex8t05Hj9p3opQ1RLoqszryITutbOyKhdWNpjtZdqJEkNqyPwn%2BXQNtOwwxuGV2CJ7IQdvkwDQX0rXEbqG4ymmTz2fV%2B688GE1tfPP5tk3TdESHzVdUBHaknV5yDLbSQS1XIAe67UyZpINAQQqmknPBCWk%2Bao1rosOMla3QMvbA3g%2FLvdh0126ZFOJoJHIxnussU9%2BckAvlvUW94d8cnDu6J7cGWgAYucBJckNq9HCr%2BkGl7NWXznjsm1BN426Xpee2OmqyZ%2FvN%2FzDv5CS6JeO%2Fahsg8l2Tf6w5v0wOferDDah7VasCiu1mm813Jjmg6nsl5pLxLhicr%2F1JSSic9LaFWATblN7EwBpbNoySEIh7Wz2yXPnyk0ypMmGTH7%2FIDHfkKqlbfIT4Sdx%2BBjmda3NzOHwQh5v3GWwjbqTVUSBRTl7u6%2FyGj6K45AN89IS2%2FzD%2FYTCxb%2F0dYMwQWzuYcCZXX1xXBCOSkz8eccgpLD%2BeoUwk6FiC83cuiw2W%2B19g8GafBvDb3tJJr3wijC8heu9BjqkAQLfWDdobPBachivNacpSVaXbI2pjVe7W5HFQyELlPdA6ItCAzLIv5NVOHCCVcjVVI14jcDCo1z5BaDushQDKEvrLfk8u4ZHBDD7Hcp612TUnBwB4fwiNr6cUvMZh%2FIlQWYyCnvZjRpE4RFNkz9yuGEdv1ZcdPHrcR3gqeIEe3MJTrmOfY%2FL3Gm1yS0%2FNtnJAHpVgQh1QjIjykUaUzI5kaPqW026&X-Amz-Signature=d8c78117bb1b347e7d8e5ef32af49f639145d89c092509f823db1598a57b30d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQCBTGHG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm7VZh5t2HqFcA%2B%2B2v%2B6cBmUcx9nYwdgESVXUt7YiTNwIhANZ4ixndxlCTxobGxUIg6dtfmfLclscm%2Bb%2BstgK%2BqAb%2BKv8DCBAQABoMNjM3NDIzMTgzODA1IgwoucMPgSltu0IPqGEq3ANc42%2BdoiBAq8HlYI4adOiSfBEgPKd1cpPRqQ97KTRPFNt%2FU%2BdUOPTK0azHWJMqOV7CB%2F1GqRyJ8uEtsVivgSBgWNQw0SlilEs4JGELSR36zoex8t05Hj9p3opQ1RLoqszryITutbOyKhdWNpjtZdqJEkNqyPwn%2BXQNtOwwxuGV2CJ7IQdvkwDQX0rXEbqG4ymmTz2fV%2B688GE1tfPP5tk3TdESHzVdUBHaknV5yDLbSQS1XIAe67UyZpINAQQqmknPBCWk%2Bao1rosOMla3QMvbA3g%2FLvdh0126ZFOJoJHIxnussU9%2BckAvlvUW94d8cnDu6J7cGWgAYucBJckNq9HCr%2BkGl7NWXznjsm1BN426Xpee2OmqyZ%2FvN%2FzDv5CS6JeO%2Fahsg8l2Tf6w5v0wOferDDah7VasCiu1mm813Jjmg6nsl5pLxLhicr%2F1JSSic9LaFWATblN7EwBpbNoySEIh7Wz2yXPnyk0ypMmGTH7%2FIDHfkKqlbfIT4Sdx%2BBjmda3NzOHwQh5v3GWwjbqTVUSBRTl7u6%2FyGj6K45AN89IS2%2FzD%2FYTCxb%2F0dYMwQWzuYcCZXX1xXBCOSkz8eccgpLD%2BeoUwk6FiC83cuiw2W%2B19g8GafBvDb3tJJr3wijC8heu9BjqkAQLfWDdobPBachivNacpSVaXbI2pjVe7W5HFQyELlPdA6ItCAzLIv5NVOHCCVcjVVI14jcDCo1z5BaDushQDKEvrLfk8u4ZHBDD7Hcp612TUnBwB4fwiNr6cUvMZh%2FIlQWYyCnvZjRpE4RFNkz9yuGEdv1ZcdPHrcR3gqeIEe3MJTrmOfY%2FL3Gm1yS0%2FNtnJAHpVgQh1QjIjykUaUzI5kaPqW026&X-Amz-Signature=893e2255d0d24f25829c5f5795e3b27c6fbd15d8ee8d2dd5cde5d6aa54f77536&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQCBTGHG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm7VZh5t2HqFcA%2B%2B2v%2B6cBmUcx9nYwdgESVXUt7YiTNwIhANZ4ixndxlCTxobGxUIg6dtfmfLclscm%2Bb%2BstgK%2BqAb%2BKv8DCBAQABoMNjM3NDIzMTgzODA1IgwoucMPgSltu0IPqGEq3ANc42%2BdoiBAq8HlYI4adOiSfBEgPKd1cpPRqQ97KTRPFNt%2FU%2BdUOPTK0azHWJMqOV7CB%2F1GqRyJ8uEtsVivgSBgWNQw0SlilEs4JGELSR36zoex8t05Hj9p3opQ1RLoqszryITutbOyKhdWNpjtZdqJEkNqyPwn%2BXQNtOwwxuGV2CJ7IQdvkwDQX0rXEbqG4ymmTz2fV%2B688GE1tfPP5tk3TdESHzVdUBHaknV5yDLbSQS1XIAe67UyZpINAQQqmknPBCWk%2Bao1rosOMla3QMvbA3g%2FLvdh0126ZFOJoJHIxnussU9%2BckAvlvUW94d8cnDu6J7cGWgAYucBJckNq9HCr%2BkGl7NWXznjsm1BN426Xpee2OmqyZ%2FvN%2FzDv5CS6JeO%2Fahsg8l2Tf6w5v0wOferDDah7VasCiu1mm813Jjmg6nsl5pLxLhicr%2F1JSSic9LaFWATblN7EwBpbNoySEIh7Wz2yXPnyk0ypMmGTH7%2FIDHfkKqlbfIT4Sdx%2BBjmda3NzOHwQh5v3GWwjbqTVUSBRTl7u6%2FyGj6K45AN89IS2%2FzD%2FYTCxb%2F0dYMwQWzuYcCZXX1xXBCOSkz8eccgpLD%2BeoUwk6FiC83cuiw2W%2B19g8GafBvDb3tJJr3wijC8heu9BjqkAQLfWDdobPBachivNacpSVaXbI2pjVe7W5HFQyELlPdA6ItCAzLIv5NVOHCCVcjVVI14jcDCo1z5BaDushQDKEvrLfk8u4ZHBDD7Hcp612TUnBwB4fwiNr6cUvMZh%2FIlQWYyCnvZjRpE4RFNkz9yuGEdv1ZcdPHrcR3gqeIEe3MJTrmOfY%2FL3Gm1yS0%2FNtnJAHpVgQh1QjIjykUaUzI5kaPqW026&X-Amz-Signature=645fc850f3fa142bf9fa9e1eb779fa753527bb7c6a2840db43ab020f4abf941f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQCBTGHG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm7VZh5t2HqFcA%2B%2B2v%2B6cBmUcx9nYwdgESVXUt7YiTNwIhANZ4ixndxlCTxobGxUIg6dtfmfLclscm%2Bb%2BstgK%2BqAb%2BKv8DCBAQABoMNjM3NDIzMTgzODA1IgwoucMPgSltu0IPqGEq3ANc42%2BdoiBAq8HlYI4adOiSfBEgPKd1cpPRqQ97KTRPFNt%2FU%2BdUOPTK0azHWJMqOV7CB%2F1GqRyJ8uEtsVivgSBgWNQw0SlilEs4JGELSR36zoex8t05Hj9p3opQ1RLoqszryITutbOyKhdWNpjtZdqJEkNqyPwn%2BXQNtOwwxuGV2CJ7IQdvkwDQX0rXEbqG4ymmTz2fV%2B688GE1tfPP5tk3TdESHzVdUBHaknV5yDLbSQS1XIAe67UyZpINAQQqmknPBCWk%2Bao1rosOMla3QMvbA3g%2FLvdh0126ZFOJoJHIxnussU9%2BckAvlvUW94d8cnDu6J7cGWgAYucBJckNq9HCr%2BkGl7NWXznjsm1BN426Xpee2OmqyZ%2FvN%2FzDv5CS6JeO%2Fahsg8l2Tf6w5v0wOferDDah7VasCiu1mm813Jjmg6nsl5pLxLhicr%2F1JSSic9LaFWATblN7EwBpbNoySEIh7Wz2yXPnyk0ypMmGTH7%2FIDHfkKqlbfIT4Sdx%2BBjmda3NzOHwQh5v3GWwjbqTVUSBRTl7u6%2FyGj6K45AN89IS2%2FzD%2FYTCxb%2F0dYMwQWzuYcCZXX1xXBCOSkz8eccgpLD%2BeoUwk6FiC83cuiw2W%2B19g8GafBvDb3tJJr3wijC8heu9BjqkAQLfWDdobPBachivNacpSVaXbI2pjVe7W5HFQyELlPdA6ItCAzLIv5NVOHCCVcjVVI14jcDCo1z5BaDushQDKEvrLfk8u4ZHBDD7Hcp612TUnBwB4fwiNr6cUvMZh%2FIlQWYyCnvZjRpE4RFNkz9yuGEdv1ZcdPHrcR3gqeIEe3MJTrmOfY%2FL3Gm1yS0%2FNtnJAHpVgQh1QjIjykUaUzI5kaPqW026&X-Amz-Signature=547265e190257a7e457b2c144d2fbd837819413b2dc6f2a3fcdd265b6d7ed550&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQCBTGHG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm7VZh5t2HqFcA%2B%2B2v%2B6cBmUcx9nYwdgESVXUt7YiTNwIhANZ4ixndxlCTxobGxUIg6dtfmfLclscm%2Bb%2BstgK%2BqAb%2BKv8DCBAQABoMNjM3NDIzMTgzODA1IgwoucMPgSltu0IPqGEq3ANc42%2BdoiBAq8HlYI4adOiSfBEgPKd1cpPRqQ97KTRPFNt%2FU%2BdUOPTK0azHWJMqOV7CB%2F1GqRyJ8uEtsVivgSBgWNQw0SlilEs4JGELSR36zoex8t05Hj9p3opQ1RLoqszryITutbOyKhdWNpjtZdqJEkNqyPwn%2BXQNtOwwxuGV2CJ7IQdvkwDQX0rXEbqG4ymmTz2fV%2B688GE1tfPP5tk3TdESHzVdUBHaknV5yDLbSQS1XIAe67UyZpINAQQqmknPBCWk%2Bao1rosOMla3QMvbA3g%2FLvdh0126ZFOJoJHIxnussU9%2BckAvlvUW94d8cnDu6J7cGWgAYucBJckNq9HCr%2BkGl7NWXznjsm1BN426Xpee2OmqyZ%2FvN%2FzDv5CS6JeO%2Fahsg8l2Tf6w5v0wOferDDah7VasCiu1mm813Jjmg6nsl5pLxLhicr%2F1JSSic9LaFWATblN7EwBpbNoySEIh7Wz2yXPnyk0ypMmGTH7%2FIDHfkKqlbfIT4Sdx%2BBjmda3NzOHwQh5v3GWwjbqTVUSBRTl7u6%2FyGj6K45AN89IS2%2FzD%2FYTCxb%2F0dYMwQWzuYcCZXX1xXBCOSkz8eccgpLD%2BeoUwk6FiC83cuiw2W%2B19g8GafBvDb3tJJr3wijC8heu9BjqkAQLfWDdobPBachivNacpSVaXbI2pjVe7W5HFQyELlPdA6ItCAzLIv5NVOHCCVcjVVI14jcDCo1z5BaDushQDKEvrLfk8u4ZHBDD7Hcp612TUnBwB4fwiNr6cUvMZh%2FIlQWYyCnvZjRpE4RFNkz9yuGEdv1ZcdPHrcR3gqeIEe3MJTrmOfY%2FL3Gm1yS0%2FNtnJAHpVgQh1QjIjykUaUzI5kaPqW026&X-Amz-Signature=96004f0e19a149335202a1a15293af5ccea864108b90c6efdf10ff016e032655&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQCBTGHG%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T121217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm7VZh5t2HqFcA%2B%2B2v%2B6cBmUcx9nYwdgESVXUt7YiTNwIhANZ4ixndxlCTxobGxUIg6dtfmfLclscm%2Bb%2BstgK%2BqAb%2BKv8DCBAQABoMNjM3NDIzMTgzODA1IgwoucMPgSltu0IPqGEq3ANc42%2BdoiBAq8HlYI4adOiSfBEgPKd1cpPRqQ97KTRPFNt%2FU%2BdUOPTK0azHWJMqOV7CB%2F1GqRyJ8uEtsVivgSBgWNQw0SlilEs4JGELSR36zoex8t05Hj9p3opQ1RLoqszryITutbOyKhdWNpjtZdqJEkNqyPwn%2BXQNtOwwxuGV2CJ7IQdvkwDQX0rXEbqG4ymmTz2fV%2B688GE1tfPP5tk3TdESHzVdUBHaknV5yDLbSQS1XIAe67UyZpINAQQqmknPBCWk%2Bao1rosOMla3QMvbA3g%2FLvdh0126ZFOJoJHIxnussU9%2BckAvlvUW94d8cnDu6J7cGWgAYucBJckNq9HCr%2BkGl7NWXznjsm1BN426Xpee2OmqyZ%2FvN%2FzDv5CS6JeO%2Fahsg8l2Tf6w5v0wOferDDah7VasCiu1mm813Jjmg6nsl5pLxLhicr%2F1JSSic9LaFWATblN7EwBpbNoySEIh7Wz2yXPnyk0ypMmGTH7%2FIDHfkKqlbfIT4Sdx%2BBjmda3NzOHwQh5v3GWwjbqTVUSBRTl7u6%2FyGj6K45AN89IS2%2FzD%2FYTCxb%2F0dYMwQWzuYcCZXX1xXBCOSkz8eccgpLD%2BeoUwk6FiC83cuiw2W%2B19g8GafBvDb3tJJr3wijC8heu9BjqkAQLfWDdobPBachivNacpSVaXbI2pjVe7W5HFQyELlPdA6ItCAzLIv5NVOHCCVcjVVI14jcDCo1z5BaDushQDKEvrLfk8u4ZHBDD7Hcp612TUnBwB4fwiNr6cUvMZh%2FIlQWYyCnvZjRpE4RFNkz9yuGEdv1ZcdPHrcR3gqeIEe3MJTrmOfY%2FL3Gm1yS0%2FNtnJAHpVgQh1QjIjykUaUzI5kaPqW026&X-Amz-Signature=cce680703d15a03bcad987c13adebc4b34e497429a782aa497ff6a31e51dd1a3&X-Amz-SignedHeaders=host&x-id=GetObject)
