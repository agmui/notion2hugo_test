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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQAPBDH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcRIpKV8lF7KUauWrKXO5WHawt%2FrsePYJNMBmIZblMmAIhAODdiIMyMgRMnPr1SjX2py%2Fu90TVSCMaq1j8kc9CXkNsKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx13maylIK8RlB7XyYq3APzewdLvV1%2Fpi57Qat1EMDPtkO%2BY1A5fJocYvqaeZrPnwYMjkC7VX2O8e3zDaMUBPGj%2F0h6UGJW16Vt0iUt8PLiWsw4Y9QCxfXkTjC2CGbQo%2FkdRhg%2FW3zGM6zhEt2xjY9gdDidCOk0rD67ehIwBlc0lHmdidUVY6oTOxYANwmhaiFzr5fzpgLtsvdMkdhUdWKAQv39pXxc0VBZnD8f47IC%2FsE0GLZhjlD0tX%2BqXl1Mu7qTgjIZSVOLbth12k6upYeGHjqU4UEoR4W%2BkUkIb%2BZBTQWmDBYKu5hUKVriQL4bxUORmFzQ6DGfI9Hcj3RmJS7elu3w1e4HLHV%2Blj86HcjS%2Bwu1jrCaurkIo5Lg8G4xrwqrkAf5wwmgN5qlsa8LR6bYNNwwh0KleCcq3ZzZYVglCJxLiWp5X2ydoHV3owp6MyCE9geB5bhI%2FGtv9k04fiaBG31iUTJ1h3TFwb1F82Z1SeHndCpLrasQ2rENtCudRqXpk4%2FE1KFPMdELoQiYS9aQqgm5E1t06JsErJvM8IE%2FgsV6F75Gy%2FpZQlezSl7am64L%2Bnm1LXCrBGcot5wDyUoLWqHDLQq49ZkSC6D199b%2BpOjojHbYf4chsvIE9MRZc5dx5LXYP%2FV7u0Dq6TDW2eO9BjqkAfpILfQmUKlfoisjw3wPV106191WSG3K3p%2BS5SJMhWrRjxaY8k12w4QO6aHFU%2B6na369BI8TVfrG9BXrjuztvcnmNmpUw%2FRJL95qZQYBHztsc4XOEVy%2F2ZI%2FBlNzehoASgNBAsMQJALrdkbTWkpvnrrT1W%2BqQhjOVHXPtTZL6SaGjO4JkKcm6FFAXamoWD4kud0mlEzSWSgDuT2ozjfz6nUH%2BEHX&X-Amz-Signature=e7f3e8afc5254a1f8f396d51f6ade55a47c3bbe2caa8c9bd1768b418e9d3eb46&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQAPBDH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcRIpKV8lF7KUauWrKXO5WHawt%2FrsePYJNMBmIZblMmAIhAODdiIMyMgRMnPr1SjX2py%2Fu90TVSCMaq1j8kc9CXkNsKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx13maylIK8RlB7XyYq3APzewdLvV1%2Fpi57Qat1EMDPtkO%2BY1A5fJocYvqaeZrPnwYMjkC7VX2O8e3zDaMUBPGj%2F0h6UGJW16Vt0iUt8PLiWsw4Y9QCxfXkTjC2CGbQo%2FkdRhg%2FW3zGM6zhEt2xjY9gdDidCOk0rD67ehIwBlc0lHmdidUVY6oTOxYANwmhaiFzr5fzpgLtsvdMkdhUdWKAQv39pXxc0VBZnD8f47IC%2FsE0GLZhjlD0tX%2BqXl1Mu7qTgjIZSVOLbth12k6upYeGHjqU4UEoR4W%2BkUkIb%2BZBTQWmDBYKu5hUKVriQL4bxUORmFzQ6DGfI9Hcj3RmJS7elu3w1e4HLHV%2Blj86HcjS%2Bwu1jrCaurkIo5Lg8G4xrwqrkAf5wwmgN5qlsa8LR6bYNNwwh0KleCcq3ZzZYVglCJxLiWp5X2ydoHV3owp6MyCE9geB5bhI%2FGtv9k04fiaBG31iUTJ1h3TFwb1F82Z1SeHndCpLrasQ2rENtCudRqXpk4%2FE1KFPMdELoQiYS9aQqgm5E1t06JsErJvM8IE%2FgsV6F75Gy%2FpZQlezSl7am64L%2Bnm1LXCrBGcot5wDyUoLWqHDLQq49ZkSC6D199b%2BpOjojHbYf4chsvIE9MRZc5dx5LXYP%2FV7u0Dq6TDW2eO9BjqkAfpILfQmUKlfoisjw3wPV106191WSG3K3p%2BS5SJMhWrRjxaY8k12w4QO6aHFU%2B6na369BI8TVfrG9BXrjuztvcnmNmpUw%2FRJL95qZQYBHztsc4XOEVy%2F2ZI%2FBlNzehoASgNBAsMQJALrdkbTWkpvnrrT1W%2BqQhjOVHXPtTZL6SaGjO4JkKcm6FFAXamoWD4kud0mlEzSWSgDuT2ozjfz6nUH%2BEHX&X-Amz-Signature=59972d06fc6900fd2d1cdd0a529ca924c779a03959d114663fce175b03789ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQAPBDH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcRIpKV8lF7KUauWrKXO5WHawt%2FrsePYJNMBmIZblMmAIhAODdiIMyMgRMnPr1SjX2py%2Fu90TVSCMaq1j8kc9CXkNsKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx13maylIK8RlB7XyYq3APzewdLvV1%2Fpi57Qat1EMDPtkO%2BY1A5fJocYvqaeZrPnwYMjkC7VX2O8e3zDaMUBPGj%2F0h6UGJW16Vt0iUt8PLiWsw4Y9QCxfXkTjC2CGbQo%2FkdRhg%2FW3zGM6zhEt2xjY9gdDidCOk0rD67ehIwBlc0lHmdidUVY6oTOxYANwmhaiFzr5fzpgLtsvdMkdhUdWKAQv39pXxc0VBZnD8f47IC%2FsE0GLZhjlD0tX%2BqXl1Mu7qTgjIZSVOLbth12k6upYeGHjqU4UEoR4W%2BkUkIb%2BZBTQWmDBYKu5hUKVriQL4bxUORmFzQ6DGfI9Hcj3RmJS7elu3w1e4HLHV%2Blj86HcjS%2Bwu1jrCaurkIo5Lg8G4xrwqrkAf5wwmgN5qlsa8LR6bYNNwwh0KleCcq3ZzZYVglCJxLiWp5X2ydoHV3owp6MyCE9geB5bhI%2FGtv9k04fiaBG31iUTJ1h3TFwb1F82Z1SeHndCpLrasQ2rENtCudRqXpk4%2FE1KFPMdELoQiYS9aQqgm5E1t06JsErJvM8IE%2FgsV6F75Gy%2FpZQlezSl7am64L%2Bnm1LXCrBGcot5wDyUoLWqHDLQq49ZkSC6D199b%2BpOjojHbYf4chsvIE9MRZc5dx5LXYP%2FV7u0Dq6TDW2eO9BjqkAfpILfQmUKlfoisjw3wPV106191WSG3K3p%2BS5SJMhWrRjxaY8k12w4QO6aHFU%2B6na369BI8TVfrG9BXrjuztvcnmNmpUw%2FRJL95qZQYBHztsc4XOEVy%2F2ZI%2FBlNzehoASgNBAsMQJALrdkbTWkpvnrrT1W%2BqQhjOVHXPtTZL6SaGjO4JkKcm6FFAXamoWD4kud0mlEzSWSgDuT2ozjfz6nUH%2BEHX&X-Amz-Signature=fc56f4fbec1f109cae4dc426571b51666cda99ff439adfba950427620ccd020f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQAPBDH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcRIpKV8lF7KUauWrKXO5WHawt%2FrsePYJNMBmIZblMmAIhAODdiIMyMgRMnPr1SjX2py%2Fu90TVSCMaq1j8kc9CXkNsKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx13maylIK8RlB7XyYq3APzewdLvV1%2Fpi57Qat1EMDPtkO%2BY1A5fJocYvqaeZrPnwYMjkC7VX2O8e3zDaMUBPGj%2F0h6UGJW16Vt0iUt8PLiWsw4Y9QCxfXkTjC2CGbQo%2FkdRhg%2FW3zGM6zhEt2xjY9gdDidCOk0rD67ehIwBlc0lHmdidUVY6oTOxYANwmhaiFzr5fzpgLtsvdMkdhUdWKAQv39pXxc0VBZnD8f47IC%2FsE0GLZhjlD0tX%2BqXl1Mu7qTgjIZSVOLbth12k6upYeGHjqU4UEoR4W%2BkUkIb%2BZBTQWmDBYKu5hUKVriQL4bxUORmFzQ6DGfI9Hcj3RmJS7elu3w1e4HLHV%2Blj86HcjS%2Bwu1jrCaurkIo5Lg8G4xrwqrkAf5wwmgN5qlsa8LR6bYNNwwh0KleCcq3ZzZYVglCJxLiWp5X2ydoHV3owp6MyCE9geB5bhI%2FGtv9k04fiaBG31iUTJ1h3TFwb1F82Z1SeHndCpLrasQ2rENtCudRqXpk4%2FE1KFPMdELoQiYS9aQqgm5E1t06JsErJvM8IE%2FgsV6F75Gy%2FpZQlezSl7am64L%2Bnm1LXCrBGcot5wDyUoLWqHDLQq49ZkSC6D199b%2BpOjojHbYf4chsvIE9MRZc5dx5LXYP%2FV7u0Dq6TDW2eO9BjqkAfpILfQmUKlfoisjw3wPV106191WSG3K3p%2BS5SJMhWrRjxaY8k12w4QO6aHFU%2B6na369BI8TVfrG9BXrjuztvcnmNmpUw%2FRJL95qZQYBHztsc4XOEVy%2F2ZI%2FBlNzehoASgNBAsMQJALrdkbTWkpvnrrT1W%2BqQhjOVHXPtTZL6SaGjO4JkKcm6FFAXamoWD4kud0mlEzSWSgDuT2ozjfz6nUH%2BEHX&X-Amz-Signature=1e4c0392733a515a6bc02c5f076f55d7d33856f7dfaa4341280a7b3509180f72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQAPBDH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcRIpKV8lF7KUauWrKXO5WHawt%2FrsePYJNMBmIZblMmAIhAODdiIMyMgRMnPr1SjX2py%2Fu90TVSCMaq1j8kc9CXkNsKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx13maylIK8RlB7XyYq3APzewdLvV1%2Fpi57Qat1EMDPtkO%2BY1A5fJocYvqaeZrPnwYMjkC7VX2O8e3zDaMUBPGj%2F0h6UGJW16Vt0iUt8PLiWsw4Y9QCxfXkTjC2CGbQo%2FkdRhg%2FW3zGM6zhEt2xjY9gdDidCOk0rD67ehIwBlc0lHmdidUVY6oTOxYANwmhaiFzr5fzpgLtsvdMkdhUdWKAQv39pXxc0VBZnD8f47IC%2FsE0GLZhjlD0tX%2BqXl1Mu7qTgjIZSVOLbth12k6upYeGHjqU4UEoR4W%2BkUkIb%2BZBTQWmDBYKu5hUKVriQL4bxUORmFzQ6DGfI9Hcj3RmJS7elu3w1e4HLHV%2Blj86HcjS%2Bwu1jrCaurkIo5Lg8G4xrwqrkAf5wwmgN5qlsa8LR6bYNNwwh0KleCcq3ZzZYVglCJxLiWp5X2ydoHV3owp6MyCE9geB5bhI%2FGtv9k04fiaBG31iUTJ1h3TFwb1F82Z1SeHndCpLrasQ2rENtCudRqXpk4%2FE1KFPMdELoQiYS9aQqgm5E1t06JsErJvM8IE%2FgsV6F75Gy%2FpZQlezSl7am64L%2Bnm1LXCrBGcot5wDyUoLWqHDLQq49ZkSC6D199b%2BpOjojHbYf4chsvIE9MRZc5dx5LXYP%2FV7u0Dq6TDW2eO9BjqkAfpILfQmUKlfoisjw3wPV106191WSG3K3p%2BS5SJMhWrRjxaY8k12w4QO6aHFU%2B6na369BI8TVfrG9BXrjuztvcnmNmpUw%2FRJL95qZQYBHztsc4XOEVy%2F2ZI%2FBlNzehoASgNBAsMQJALrdkbTWkpvnrrT1W%2BqQhjOVHXPtTZL6SaGjO4JkKcm6FFAXamoWD4kud0mlEzSWSgDuT2ozjfz6nUH%2BEHX&X-Amz-Signature=1c57c08a322c4cc5e22edab454b5cc722cf9c8960fc804934b5f8bd3a99f7c03&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQAPBDH%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T220722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcRIpKV8lF7KUauWrKXO5WHawt%2FrsePYJNMBmIZblMmAIhAODdiIMyMgRMnPr1SjX2py%2Fu90TVSCMaq1j8kc9CXkNsKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx13maylIK8RlB7XyYq3APzewdLvV1%2Fpi57Qat1EMDPtkO%2BY1A5fJocYvqaeZrPnwYMjkC7VX2O8e3zDaMUBPGj%2F0h6UGJW16Vt0iUt8PLiWsw4Y9QCxfXkTjC2CGbQo%2FkdRhg%2FW3zGM6zhEt2xjY9gdDidCOk0rD67ehIwBlc0lHmdidUVY6oTOxYANwmhaiFzr5fzpgLtsvdMkdhUdWKAQv39pXxc0VBZnD8f47IC%2FsE0GLZhjlD0tX%2BqXl1Mu7qTgjIZSVOLbth12k6upYeGHjqU4UEoR4W%2BkUkIb%2BZBTQWmDBYKu5hUKVriQL4bxUORmFzQ6DGfI9Hcj3RmJS7elu3w1e4HLHV%2Blj86HcjS%2Bwu1jrCaurkIo5Lg8G4xrwqrkAf5wwmgN5qlsa8LR6bYNNwwh0KleCcq3ZzZYVglCJxLiWp5X2ydoHV3owp6MyCE9geB5bhI%2FGtv9k04fiaBG31iUTJ1h3TFwb1F82Z1SeHndCpLrasQ2rENtCudRqXpk4%2FE1KFPMdELoQiYS9aQqgm5E1t06JsErJvM8IE%2FgsV6F75Gy%2FpZQlezSl7am64L%2Bnm1LXCrBGcot5wDyUoLWqHDLQq49ZkSC6D199b%2BpOjojHbYf4chsvIE9MRZc5dx5LXYP%2FV7u0Dq6TDW2eO9BjqkAfpILfQmUKlfoisjw3wPV106191WSG3K3p%2BS5SJMhWrRjxaY8k12w4QO6aHFU%2B6na369BI8TVfrG9BXrjuztvcnmNmpUw%2FRJL95qZQYBHztsc4XOEVy%2F2ZI%2FBlNzehoASgNBAsMQJALrdkbTWkpvnrrT1W%2BqQhjOVHXPtTZL6SaGjO4JkKcm6FFAXamoWD4kud0mlEzSWSgDuT2ozjfz6nUH%2BEHX&X-Amz-Signature=417207a8c2289dc3cab4f4408b846eb382633c05d2278828f5813f820f66dcb0&X-Amz-SignedHeaders=host&x-id=GetObject)
