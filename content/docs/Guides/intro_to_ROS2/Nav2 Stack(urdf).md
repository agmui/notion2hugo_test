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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6SNUJI7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDL66n0QMlxDL%2FKFXnC9DScx9vAsG6V%2F04S%2FwokykXd9AIhALsEP9sxUADWvckfIQgiYJw8e1dYtCrsbu%2F6mESrp%2BRpKv8DCEIQABoMNjM3NDIzMTgzODA1IgxqjrG52w6TcyFPWFEq3APTVZJqBvgARtcSwL%2FEtfB6m5NUTgyW2yT9QLQxYsX56GxastJBLbqv9hSx2qpfL2cFj2KCR4LBCxrNCpOniH8U8wgYLZOHUmBSZX9dKcq9HtpYNbFYCdMPfTB1Pj35ejeV8v0mOCLYHuJoa0s%2Fb6nh4f%2BhCfIi3jRZK9Z7VwnJqxjjuaCoS9BwkT1aeZtP29uELXdWwXPTYMyKTAeBrCtAAX74Wm2ob7bRnbbuAqLHhuHC6DBKmxFH6wQN1fqSvzJgDnAgrMtltK%2Fi6RQeiCEpbvnGPon1YoY1Y1Rvq0pZtvK4uTwAx1ugGZKRkH4wk2YQf488ws06lfi7B4OthpkufqCtTBxBGuqVZBvmlpancA%2BxTgyygd%2BhcsSjlCybtK%2B%2BtD8fgFwRBmFt4qPyfaHRzRnW7tAuK7C65RIXDtJhp98u3yLmuNJmvzmlV%2FlhxfnGNTX2EQ5OPAkCSNYWpMy%2FiO9UnBpYtpvLqSRMWy8CnJk0QMOZGbL6UZLBiVRmjskZYEfIqh8XHB8Bt3vtuTafH7%2F0F4G04xzGHeKC25BLyJhONIo0RYXxh0ltlXEQFIN%2B6rbXxnyVSMAWv6WEVMOfNR%2BErtcBzQ6OGsSmIyZVyyvk3d4ZRUKk6bBaGTCysNjDBjqkAWbLkwAT8Mp6PPE0PxBUHEThTNUspHL5sNgqlkGyoE8F8WD4lQTTgbIC9n9eEWYmlZhhj9Rr4R4O79A3edr64CQLyle9nfmlxfzSMLIWFU%2BKXQyR%2B3lXam4%2Fp2uBrwzabyXBTxpy9LbY0jE7oNvJqwdkyJcbrYoxscMiGHglLKkd9F39EI%2F2fKLhYluhwhdd58Qf76vTes%2Fvojvj%2BUMzJM1GzkT%2B&X-Amz-Signature=19fca6494bf9baa13b61479fdbc78d464728829d03fa6bb273da8bdeba78dea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6SNUJI7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDL66n0QMlxDL%2FKFXnC9DScx9vAsG6V%2F04S%2FwokykXd9AIhALsEP9sxUADWvckfIQgiYJw8e1dYtCrsbu%2F6mESrp%2BRpKv8DCEIQABoMNjM3NDIzMTgzODA1IgxqjrG52w6TcyFPWFEq3APTVZJqBvgARtcSwL%2FEtfB6m5NUTgyW2yT9QLQxYsX56GxastJBLbqv9hSx2qpfL2cFj2KCR4LBCxrNCpOniH8U8wgYLZOHUmBSZX9dKcq9HtpYNbFYCdMPfTB1Pj35ejeV8v0mOCLYHuJoa0s%2Fb6nh4f%2BhCfIi3jRZK9Z7VwnJqxjjuaCoS9BwkT1aeZtP29uELXdWwXPTYMyKTAeBrCtAAX74Wm2ob7bRnbbuAqLHhuHC6DBKmxFH6wQN1fqSvzJgDnAgrMtltK%2Fi6RQeiCEpbvnGPon1YoY1Y1Rvq0pZtvK4uTwAx1ugGZKRkH4wk2YQf488ws06lfi7B4OthpkufqCtTBxBGuqVZBvmlpancA%2BxTgyygd%2BhcsSjlCybtK%2B%2BtD8fgFwRBmFt4qPyfaHRzRnW7tAuK7C65RIXDtJhp98u3yLmuNJmvzmlV%2FlhxfnGNTX2EQ5OPAkCSNYWpMy%2FiO9UnBpYtpvLqSRMWy8CnJk0QMOZGbL6UZLBiVRmjskZYEfIqh8XHB8Bt3vtuTafH7%2F0F4G04xzGHeKC25BLyJhONIo0RYXxh0ltlXEQFIN%2B6rbXxnyVSMAWv6WEVMOfNR%2BErtcBzQ6OGsSmIyZVyyvk3d4ZRUKk6bBaGTCysNjDBjqkAWbLkwAT8Mp6PPE0PxBUHEThTNUspHL5sNgqlkGyoE8F8WD4lQTTgbIC9n9eEWYmlZhhj9Rr4R4O79A3edr64CQLyle9nfmlxfzSMLIWFU%2BKXQyR%2B3lXam4%2Fp2uBrwzabyXBTxpy9LbY0jE7oNvJqwdkyJcbrYoxscMiGHglLKkd9F39EI%2F2fKLhYluhwhdd58Qf76vTes%2Fvojvj%2BUMzJM1GzkT%2B&X-Amz-Signature=9e3ff44b096b31dbe4962ba40c214845acf3ac6c9714e391d76ece4d1ba64e2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6SNUJI7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDL66n0QMlxDL%2FKFXnC9DScx9vAsG6V%2F04S%2FwokykXd9AIhALsEP9sxUADWvckfIQgiYJw8e1dYtCrsbu%2F6mESrp%2BRpKv8DCEIQABoMNjM3NDIzMTgzODA1IgxqjrG52w6TcyFPWFEq3APTVZJqBvgARtcSwL%2FEtfB6m5NUTgyW2yT9QLQxYsX56GxastJBLbqv9hSx2qpfL2cFj2KCR4LBCxrNCpOniH8U8wgYLZOHUmBSZX9dKcq9HtpYNbFYCdMPfTB1Pj35ejeV8v0mOCLYHuJoa0s%2Fb6nh4f%2BhCfIi3jRZK9Z7VwnJqxjjuaCoS9BwkT1aeZtP29uELXdWwXPTYMyKTAeBrCtAAX74Wm2ob7bRnbbuAqLHhuHC6DBKmxFH6wQN1fqSvzJgDnAgrMtltK%2Fi6RQeiCEpbvnGPon1YoY1Y1Rvq0pZtvK4uTwAx1ugGZKRkH4wk2YQf488ws06lfi7B4OthpkufqCtTBxBGuqVZBvmlpancA%2BxTgyygd%2BhcsSjlCybtK%2B%2BtD8fgFwRBmFt4qPyfaHRzRnW7tAuK7C65RIXDtJhp98u3yLmuNJmvzmlV%2FlhxfnGNTX2EQ5OPAkCSNYWpMy%2FiO9UnBpYtpvLqSRMWy8CnJk0QMOZGbL6UZLBiVRmjskZYEfIqh8XHB8Bt3vtuTafH7%2F0F4G04xzGHeKC25BLyJhONIo0RYXxh0ltlXEQFIN%2B6rbXxnyVSMAWv6WEVMOfNR%2BErtcBzQ6OGsSmIyZVyyvk3d4ZRUKk6bBaGTCysNjDBjqkAWbLkwAT8Mp6PPE0PxBUHEThTNUspHL5sNgqlkGyoE8F8WD4lQTTgbIC9n9eEWYmlZhhj9Rr4R4O79A3edr64CQLyle9nfmlxfzSMLIWFU%2BKXQyR%2B3lXam4%2Fp2uBrwzabyXBTxpy9LbY0jE7oNvJqwdkyJcbrYoxscMiGHglLKkd9F39EI%2F2fKLhYluhwhdd58Qf76vTes%2Fvojvj%2BUMzJM1GzkT%2B&X-Amz-Signature=0f25852bd1cc28d4a5c99229c8d9847a6e9f3e572805aab549fa95ba6ad90c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6SNUJI7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDL66n0QMlxDL%2FKFXnC9DScx9vAsG6V%2F04S%2FwokykXd9AIhALsEP9sxUADWvckfIQgiYJw8e1dYtCrsbu%2F6mESrp%2BRpKv8DCEIQABoMNjM3NDIzMTgzODA1IgxqjrG52w6TcyFPWFEq3APTVZJqBvgARtcSwL%2FEtfB6m5NUTgyW2yT9QLQxYsX56GxastJBLbqv9hSx2qpfL2cFj2KCR4LBCxrNCpOniH8U8wgYLZOHUmBSZX9dKcq9HtpYNbFYCdMPfTB1Pj35ejeV8v0mOCLYHuJoa0s%2Fb6nh4f%2BhCfIi3jRZK9Z7VwnJqxjjuaCoS9BwkT1aeZtP29uELXdWwXPTYMyKTAeBrCtAAX74Wm2ob7bRnbbuAqLHhuHC6DBKmxFH6wQN1fqSvzJgDnAgrMtltK%2Fi6RQeiCEpbvnGPon1YoY1Y1Rvq0pZtvK4uTwAx1ugGZKRkH4wk2YQf488ws06lfi7B4OthpkufqCtTBxBGuqVZBvmlpancA%2BxTgyygd%2BhcsSjlCybtK%2B%2BtD8fgFwRBmFt4qPyfaHRzRnW7tAuK7C65RIXDtJhp98u3yLmuNJmvzmlV%2FlhxfnGNTX2EQ5OPAkCSNYWpMy%2FiO9UnBpYtpvLqSRMWy8CnJk0QMOZGbL6UZLBiVRmjskZYEfIqh8XHB8Bt3vtuTafH7%2F0F4G04xzGHeKC25BLyJhONIo0RYXxh0ltlXEQFIN%2B6rbXxnyVSMAWv6WEVMOfNR%2BErtcBzQ6OGsSmIyZVyyvk3d4ZRUKk6bBaGTCysNjDBjqkAWbLkwAT8Mp6PPE0PxBUHEThTNUspHL5sNgqlkGyoE8F8WD4lQTTgbIC9n9eEWYmlZhhj9Rr4R4O79A3edr64CQLyle9nfmlxfzSMLIWFU%2BKXQyR%2B3lXam4%2Fp2uBrwzabyXBTxpy9LbY0jE7oNvJqwdkyJcbrYoxscMiGHglLKkd9F39EI%2F2fKLhYluhwhdd58Qf76vTes%2Fvojvj%2BUMzJM1GzkT%2B&X-Amz-Signature=c5b31616a3fa1bacb3b9c0258faaae5ad4038353b27ed239d39fd0a5720f34de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6SNUJI7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDL66n0QMlxDL%2FKFXnC9DScx9vAsG6V%2F04S%2FwokykXd9AIhALsEP9sxUADWvckfIQgiYJw8e1dYtCrsbu%2F6mESrp%2BRpKv8DCEIQABoMNjM3NDIzMTgzODA1IgxqjrG52w6TcyFPWFEq3APTVZJqBvgARtcSwL%2FEtfB6m5NUTgyW2yT9QLQxYsX56GxastJBLbqv9hSx2qpfL2cFj2KCR4LBCxrNCpOniH8U8wgYLZOHUmBSZX9dKcq9HtpYNbFYCdMPfTB1Pj35ejeV8v0mOCLYHuJoa0s%2Fb6nh4f%2BhCfIi3jRZK9Z7VwnJqxjjuaCoS9BwkT1aeZtP29uELXdWwXPTYMyKTAeBrCtAAX74Wm2ob7bRnbbuAqLHhuHC6DBKmxFH6wQN1fqSvzJgDnAgrMtltK%2Fi6RQeiCEpbvnGPon1YoY1Y1Rvq0pZtvK4uTwAx1ugGZKRkH4wk2YQf488ws06lfi7B4OthpkufqCtTBxBGuqVZBvmlpancA%2BxTgyygd%2BhcsSjlCybtK%2B%2BtD8fgFwRBmFt4qPyfaHRzRnW7tAuK7C65RIXDtJhp98u3yLmuNJmvzmlV%2FlhxfnGNTX2EQ5OPAkCSNYWpMy%2FiO9UnBpYtpvLqSRMWy8CnJk0QMOZGbL6UZLBiVRmjskZYEfIqh8XHB8Bt3vtuTafH7%2F0F4G04xzGHeKC25BLyJhONIo0RYXxh0ltlXEQFIN%2B6rbXxnyVSMAWv6WEVMOfNR%2BErtcBzQ6OGsSmIyZVyyvk3d4ZRUKk6bBaGTCysNjDBjqkAWbLkwAT8Mp6PPE0PxBUHEThTNUspHL5sNgqlkGyoE8F8WD4lQTTgbIC9n9eEWYmlZhhj9Rr4R4O79A3edr64CQLyle9nfmlxfzSMLIWFU%2BKXQyR%2B3lXam4%2Fp2uBrwzabyXBTxpy9LbY0jE7oNvJqwdkyJcbrYoxscMiGHglLKkd9F39EI%2F2fKLhYluhwhdd58Qf76vTes%2Fvojvj%2BUMzJM1GzkT%2B&X-Amz-Signature=70ab966cba689e050f6b6cca68a199acd77b7ae3f968c74359a7904d8a940878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6SNUJI7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQDL66n0QMlxDL%2FKFXnC9DScx9vAsG6V%2F04S%2FwokykXd9AIhALsEP9sxUADWvckfIQgiYJw8e1dYtCrsbu%2F6mESrp%2BRpKv8DCEIQABoMNjM3NDIzMTgzODA1IgxqjrG52w6TcyFPWFEq3APTVZJqBvgARtcSwL%2FEtfB6m5NUTgyW2yT9QLQxYsX56GxastJBLbqv9hSx2qpfL2cFj2KCR4LBCxrNCpOniH8U8wgYLZOHUmBSZX9dKcq9HtpYNbFYCdMPfTB1Pj35ejeV8v0mOCLYHuJoa0s%2Fb6nh4f%2BhCfIi3jRZK9Z7VwnJqxjjuaCoS9BwkT1aeZtP29uELXdWwXPTYMyKTAeBrCtAAX74Wm2ob7bRnbbuAqLHhuHC6DBKmxFH6wQN1fqSvzJgDnAgrMtltK%2Fi6RQeiCEpbvnGPon1YoY1Y1Rvq0pZtvK4uTwAx1ugGZKRkH4wk2YQf488ws06lfi7B4OthpkufqCtTBxBGuqVZBvmlpancA%2BxTgyygd%2BhcsSjlCybtK%2B%2BtD8fgFwRBmFt4qPyfaHRzRnW7tAuK7C65RIXDtJhp98u3yLmuNJmvzmlV%2FlhxfnGNTX2EQ5OPAkCSNYWpMy%2FiO9UnBpYtpvLqSRMWy8CnJk0QMOZGbL6UZLBiVRmjskZYEfIqh8XHB8Bt3vtuTafH7%2F0F4G04xzGHeKC25BLyJhONIo0RYXxh0ltlXEQFIN%2B6rbXxnyVSMAWv6WEVMOfNR%2BErtcBzQ6OGsSmIyZVyyvk3d4ZRUKk6bBaGTCysNjDBjqkAWbLkwAT8Mp6PPE0PxBUHEThTNUspHL5sNgqlkGyoE8F8WD4lQTTgbIC9n9eEWYmlZhhj9Rr4R4O79A3edr64CQLyle9nfmlxfzSMLIWFU%2BKXQyR%2B3lXam4%2Fp2uBrwzabyXBTxpy9LbY0jE7oNvJqwdkyJcbrYoxscMiGHglLKkd9F39EI%2F2fKLhYluhwhdd58Qf76vTes%2Fvojvj%2BUMzJM1GzkT%2B&X-Amz-Signature=2ef36973f58bc2f2b0f84b082fd83f309392c7eeabb9d7322df86149d810b7bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
