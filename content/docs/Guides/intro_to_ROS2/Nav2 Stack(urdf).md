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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTAWNS2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCB0qmysFKDLHA9lggF4yYlhiTyj3RM%2BP91TKCeAM1YIwIgRlXnCzhggsNpo4%2Bo0k%2BGZVTKI2nl%2BV3TqzQMvvpSkskqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVD6Pw5hWnkF4ggnircAyZa%2FiRpTGG3zVA07dGqbWDMJb1aeYlCYbwU%2Fn5%2BXvmnw7L9smNy8f%2BdAm66RHLeI5IUPI%2BCPGW9IDj%2F6jD7HIsVR3X7pWfC9wdzlIJZscacH5W1NT%2BZhjjdHFL8QZQKEWK3olzFkTCQpdpEebxqnSOvXNymKiUgWoD89RBd%2FSDGiguGtPef%2FQsF4T%2FxF4yLNhySRulm0z8HoBTRwQHp67fu0ejNjsrD58oSa2CpYsZPwjLfMgJjgyk%2BnwfkNTIXbXkoFCzErJi23xcBgiucuoBs3mopg6dzUw%2BY3vZYJR5Jc7z6e7lmAdKDQFf%2FADEJQSvnUgm6a8crNk4JqWsEXMhYjl5n40qGAVVqvzdvzfIDru6U0MfI77wlgAFR%2FDTwe0G1psTQ5HFXByW2Mrsc8lelR7Tf704kM%2FVfVJafdksO3x%2FPmrtIQID%2Faq7MvESl5fWWLIS%2BWyU53ClD12cmAPvneF8bSqYCaMLLRd%2BUGZvfka2Ab6TNR52tZpqDHvdaxk1rLo6pNQhjf5oyNnyrtyvIUX0XpO0gNft%2BI6%2FEp1tkBPmySy3T%2Fb%2BWMvCbkzNoTPPG8N9X4vOQeUt8kU3VZP2VGvjifuZTTH%2BgEyt2ntYk7nIKUgOCE0g6kmSfMNqosb8GOqUBTCb6%2Bvvb9RBZLYArLOYlQelNkmODtm1emta6MdEknCEb2QE0Hczx5w6skmAfJhJa5VNnFcbw60M6EC3QSS3ZR8QBr33S3KQ4icWMfqOM0KTua6NviNg%2BgYUsXuaGMzL6OzBmTylVoZq27ZJNEWmPnyx7B2pgZgqYkZdSP52gRS5u2h%2FLCHWNhgeqxOQUgEnQtho5N0Lo04pij1MLsnmSk64z1qcL&X-Amz-Signature=55a947e51e529763006c07ee02a995e10bca0ee162b13af886763146c51e269e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTAWNS2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCB0qmysFKDLHA9lggF4yYlhiTyj3RM%2BP91TKCeAM1YIwIgRlXnCzhggsNpo4%2Bo0k%2BGZVTKI2nl%2BV3TqzQMvvpSkskqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVD6Pw5hWnkF4ggnircAyZa%2FiRpTGG3zVA07dGqbWDMJb1aeYlCYbwU%2Fn5%2BXvmnw7L9smNy8f%2BdAm66RHLeI5IUPI%2BCPGW9IDj%2F6jD7HIsVR3X7pWfC9wdzlIJZscacH5W1NT%2BZhjjdHFL8QZQKEWK3olzFkTCQpdpEebxqnSOvXNymKiUgWoD89RBd%2FSDGiguGtPef%2FQsF4T%2FxF4yLNhySRulm0z8HoBTRwQHp67fu0ejNjsrD58oSa2CpYsZPwjLfMgJjgyk%2BnwfkNTIXbXkoFCzErJi23xcBgiucuoBs3mopg6dzUw%2BY3vZYJR5Jc7z6e7lmAdKDQFf%2FADEJQSvnUgm6a8crNk4JqWsEXMhYjl5n40qGAVVqvzdvzfIDru6U0MfI77wlgAFR%2FDTwe0G1psTQ5HFXByW2Mrsc8lelR7Tf704kM%2FVfVJafdksO3x%2FPmrtIQID%2Faq7MvESl5fWWLIS%2BWyU53ClD12cmAPvneF8bSqYCaMLLRd%2BUGZvfka2Ab6TNR52tZpqDHvdaxk1rLo6pNQhjf5oyNnyrtyvIUX0XpO0gNft%2BI6%2FEp1tkBPmySy3T%2Fb%2BWMvCbkzNoTPPG8N9X4vOQeUt8kU3VZP2VGvjifuZTTH%2BgEyt2ntYk7nIKUgOCE0g6kmSfMNqosb8GOqUBTCb6%2Bvvb9RBZLYArLOYlQelNkmODtm1emta6MdEknCEb2QE0Hczx5w6skmAfJhJa5VNnFcbw60M6EC3QSS3ZR8QBr33S3KQ4icWMfqOM0KTua6NviNg%2BgYUsXuaGMzL6OzBmTylVoZq27ZJNEWmPnyx7B2pgZgqYkZdSP52gRS5u2h%2FLCHWNhgeqxOQUgEnQtho5N0Lo04pij1MLsnmSk64z1qcL&X-Amz-Signature=c52d3e5255da0380cd68e619b8f1ae56bb9b0ccdfa59753296c2471e49fe7961&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTAWNS2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCB0qmysFKDLHA9lggF4yYlhiTyj3RM%2BP91TKCeAM1YIwIgRlXnCzhggsNpo4%2Bo0k%2BGZVTKI2nl%2BV3TqzQMvvpSkskqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVD6Pw5hWnkF4ggnircAyZa%2FiRpTGG3zVA07dGqbWDMJb1aeYlCYbwU%2Fn5%2BXvmnw7L9smNy8f%2BdAm66RHLeI5IUPI%2BCPGW9IDj%2F6jD7HIsVR3X7pWfC9wdzlIJZscacH5W1NT%2BZhjjdHFL8QZQKEWK3olzFkTCQpdpEebxqnSOvXNymKiUgWoD89RBd%2FSDGiguGtPef%2FQsF4T%2FxF4yLNhySRulm0z8HoBTRwQHp67fu0ejNjsrD58oSa2CpYsZPwjLfMgJjgyk%2BnwfkNTIXbXkoFCzErJi23xcBgiucuoBs3mopg6dzUw%2BY3vZYJR5Jc7z6e7lmAdKDQFf%2FADEJQSvnUgm6a8crNk4JqWsEXMhYjl5n40qGAVVqvzdvzfIDru6U0MfI77wlgAFR%2FDTwe0G1psTQ5HFXByW2Mrsc8lelR7Tf704kM%2FVfVJafdksO3x%2FPmrtIQID%2Faq7MvESl5fWWLIS%2BWyU53ClD12cmAPvneF8bSqYCaMLLRd%2BUGZvfka2Ab6TNR52tZpqDHvdaxk1rLo6pNQhjf5oyNnyrtyvIUX0XpO0gNft%2BI6%2FEp1tkBPmySy3T%2Fb%2BWMvCbkzNoTPPG8N9X4vOQeUt8kU3VZP2VGvjifuZTTH%2BgEyt2ntYk7nIKUgOCE0g6kmSfMNqosb8GOqUBTCb6%2Bvvb9RBZLYArLOYlQelNkmODtm1emta6MdEknCEb2QE0Hczx5w6skmAfJhJa5VNnFcbw60M6EC3QSS3ZR8QBr33S3KQ4icWMfqOM0KTua6NviNg%2BgYUsXuaGMzL6OzBmTylVoZq27ZJNEWmPnyx7B2pgZgqYkZdSP52gRS5u2h%2FLCHWNhgeqxOQUgEnQtho5N0Lo04pij1MLsnmSk64z1qcL&X-Amz-Signature=fa79638c6e9577353a20c8d3fca7ac1007c6de9aacff9cacff5e9c24534ea67d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTAWNS2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCB0qmysFKDLHA9lggF4yYlhiTyj3RM%2BP91TKCeAM1YIwIgRlXnCzhggsNpo4%2Bo0k%2BGZVTKI2nl%2BV3TqzQMvvpSkskqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVD6Pw5hWnkF4ggnircAyZa%2FiRpTGG3zVA07dGqbWDMJb1aeYlCYbwU%2Fn5%2BXvmnw7L9smNy8f%2BdAm66RHLeI5IUPI%2BCPGW9IDj%2F6jD7HIsVR3X7pWfC9wdzlIJZscacH5W1NT%2BZhjjdHFL8QZQKEWK3olzFkTCQpdpEebxqnSOvXNymKiUgWoD89RBd%2FSDGiguGtPef%2FQsF4T%2FxF4yLNhySRulm0z8HoBTRwQHp67fu0ejNjsrD58oSa2CpYsZPwjLfMgJjgyk%2BnwfkNTIXbXkoFCzErJi23xcBgiucuoBs3mopg6dzUw%2BY3vZYJR5Jc7z6e7lmAdKDQFf%2FADEJQSvnUgm6a8crNk4JqWsEXMhYjl5n40qGAVVqvzdvzfIDru6U0MfI77wlgAFR%2FDTwe0G1psTQ5HFXByW2Mrsc8lelR7Tf704kM%2FVfVJafdksO3x%2FPmrtIQID%2Faq7MvESl5fWWLIS%2BWyU53ClD12cmAPvneF8bSqYCaMLLRd%2BUGZvfka2Ab6TNR52tZpqDHvdaxk1rLo6pNQhjf5oyNnyrtyvIUX0XpO0gNft%2BI6%2FEp1tkBPmySy3T%2Fb%2BWMvCbkzNoTPPG8N9X4vOQeUt8kU3VZP2VGvjifuZTTH%2BgEyt2ntYk7nIKUgOCE0g6kmSfMNqosb8GOqUBTCb6%2Bvvb9RBZLYArLOYlQelNkmODtm1emta6MdEknCEb2QE0Hczx5w6skmAfJhJa5VNnFcbw60M6EC3QSS3ZR8QBr33S3KQ4icWMfqOM0KTua6NviNg%2BgYUsXuaGMzL6OzBmTylVoZq27ZJNEWmPnyx7B2pgZgqYkZdSP52gRS5u2h%2FLCHWNhgeqxOQUgEnQtho5N0Lo04pij1MLsnmSk64z1qcL&X-Amz-Signature=b26b7cfc33354e846b17c64da6dee275404baa1c1bf03006dc970f452d311e57&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTAWNS2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCB0qmysFKDLHA9lggF4yYlhiTyj3RM%2BP91TKCeAM1YIwIgRlXnCzhggsNpo4%2Bo0k%2BGZVTKI2nl%2BV3TqzQMvvpSkskqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVD6Pw5hWnkF4ggnircAyZa%2FiRpTGG3zVA07dGqbWDMJb1aeYlCYbwU%2Fn5%2BXvmnw7L9smNy8f%2BdAm66RHLeI5IUPI%2BCPGW9IDj%2F6jD7HIsVR3X7pWfC9wdzlIJZscacH5W1NT%2BZhjjdHFL8QZQKEWK3olzFkTCQpdpEebxqnSOvXNymKiUgWoD89RBd%2FSDGiguGtPef%2FQsF4T%2FxF4yLNhySRulm0z8HoBTRwQHp67fu0ejNjsrD58oSa2CpYsZPwjLfMgJjgyk%2BnwfkNTIXbXkoFCzErJi23xcBgiucuoBs3mopg6dzUw%2BY3vZYJR5Jc7z6e7lmAdKDQFf%2FADEJQSvnUgm6a8crNk4JqWsEXMhYjl5n40qGAVVqvzdvzfIDru6U0MfI77wlgAFR%2FDTwe0G1psTQ5HFXByW2Mrsc8lelR7Tf704kM%2FVfVJafdksO3x%2FPmrtIQID%2Faq7MvESl5fWWLIS%2BWyU53ClD12cmAPvneF8bSqYCaMLLRd%2BUGZvfka2Ab6TNR52tZpqDHvdaxk1rLo6pNQhjf5oyNnyrtyvIUX0XpO0gNft%2BI6%2FEp1tkBPmySy3T%2Fb%2BWMvCbkzNoTPPG8N9X4vOQeUt8kU3VZP2VGvjifuZTTH%2BgEyt2ntYk7nIKUgOCE0g6kmSfMNqosb8GOqUBTCb6%2Bvvb9RBZLYArLOYlQelNkmODtm1emta6MdEknCEb2QE0Hczx5w6skmAfJhJa5VNnFcbw60M6EC3QSS3ZR8QBr33S3KQ4icWMfqOM0KTua6NviNg%2BgYUsXuaGMzL6OzBmTylVoZq27ZJNEWmPnyx7B2pgZgqYkZdSP52gRS5u2h%2FLCHWNhgeqxOQUgEnQtho5N0Lo04pij1MLsnmSk64z1qcL&X-Amz-Signature=cb9e644dae3817673b0feecbd43d62b9ebbba848199c48ef7bb06777430a0ffb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTAWNS2%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCB0qmysFKDLHA9lggF4yYlhiTyj3RM%2BP91TKCeAM1YIwIgRlXnCzhggsNpo4%2Bo0k%2BGZVTKI2nl%2BV3TqzQMvvpSkskqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVD6Pw5hWnkF4ggnircAyZa%2FiRpTGG3zVA07dGqbWDMJb1aeYlCYbwU%2Fn5%2BXvmnw7L9smNy8f%2BdAm66RHLeI5IUPI%2BCPGW9IDj%2F6jD7HIsVR3X7pWfC9wdzlIJZscacH5W1NT%2BZhjjdHFL8QZQKEWK3olzFkTCQpdpEebxqnSOvXNymKiUgWoD89RBd%2FSDGiguGtPef%2FQsF4T%2FxF4yLNhySRulm0z8HoBTRwQHp67fu0ejNjsrD58oSa2CpYsZPwjLfMgJjgyk%2BnwfkNTIXbXkoFCzErJi23xcBgiucuoBs3mopg6dzUw%2BY3vZYJR5Jc7z6e7lmAdKDQFf%2FADEJQSvnUgm6a8crNk4JqWsEXMhYjl5n40qGAVVqvzdvzfIDru6U0MfI77wlgAFR%2FDTwe0G1psTQ5HFXByW2Mrsc8lelR7Tf704kM%2FVfVJafdksO3x%2FPmrtIQID%2Faq7MvESl5fWWLIS%2BWyU53ClD12cmAPvneF8bSqYCaMLLRd%2BUGZvfka2Ab6TNR52tZpqDHvdaxk1rLo6pNQhjf5oyNnyrtyvIUX0XpO0gNft%2BI6%2FEp1tkBPmySy3T%2Fb%2BWMvCbkzNoTPPG8N9X4vOQeUt8kU3VZP2VGvjifuZTTH%2BgEyt2ntYk7nIKUgOCE0g6kmSfMNqosb8GOqUBTCb6%2Bvvb9RBZLYArLOYlQelNkmODtm1emta6MdEknCEb2QE0Hczx5w6skmAfJhJa5VNnFcbw60M6EC3QSS3ZR8QBr33S3KQ4icWMfqOM0KTua6NviNg%2BgYUsXuaGMzL6OzBmTylVoZq27ZJNEWmPnyx7B2pgZgqYkZdSP52gRS5u2h%2FLCHWNhgeqxOQUgEnQtho5N0Lo04pij1MLsnmSk64z1qcL&X-Amz-Signature=dc1c449608b87795dcf1d081bcacfa33ab97c6eda7b4ef9ae19f0f12e8395337&X-Amz-SignedHeaders=host&x-id=GetObject)
