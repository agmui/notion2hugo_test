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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YTLQVL%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD3Hhty4FcRQPsymU%2BnvasQrZn%2FiMf5FkRi3inVZgK88gIgLIRXyCi8nBC35j8O1KBwIZ5BwBoL%2BYe67IuJtPCf1sAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGp3VuLbS4OummvCJCrcA0%2FRuCIw4jfKXko%2BpKR7oMUzve%2Bv%2F1p8JaPAysS6iML5dPN0ADMv%2BMo%2F590YzT1p9elPj73T7anRpj4FOsyTxnpOH1o5Ha%2FTxgK6i0UY7YvF4UjjWCdvWDpwK4b%2BuZWDDE3848poBLwrxHrGr3rkNBr4ewD3%2FIwkq1DOe16GmX7I%2BtTbvDfr825EQMQ7g%2BOavVQcykOBDxZhAJHj1%2F9aQ4TULhMGlbbaN6aEo1dZVo0atM%2BDI2gGSTG0jRGZxNNi%2Bb7Gv16h0IFZJ5J%2B4uYJndEHL6%2FarQQBmOp55dxiFW0rX2pHocwv1aaZuIW24ga98Vb2RqDy8i7Jz2LEuwvmYDJCNhdEfXvNS%2B491%2BVPMpg50rytSaNjDTpB8ikx9k0Wl8lKtjONPJjKnYVxJ%2F%2F%2BGTQMCmFV740qszaLM9kvdTCFJbh4op6STelITWQP3W3t6hQ1XKEppP%2Fpb5TwIDTH%2Fc1hCo5sF%2BBduavUoUjC1tUfEYRgMNXmJBoECzyusMm3dfCqHX1vA03Q1n3SqkIn5yIVS33dbDd4enxLVYxwrYn31JnKNbS5gyGeiBtdkkKFqMfM%2FTbdoSF0ESaHpIvu1vr7pdo907Cd7%2BbOgwJv%2Bm3B3XVHnOH3W0qewOslMKyzgr4GOqUBM0zRDqnQsaX33n2d4Z0xtJ6FlTFggcJFS9vF%2FPmZQ0cRSsPR%2FPwtT4RHnIyC9%2BusxGYngWaweK5gJgxDIvguAmHT9BhsBGt%2Fkk5rtM4ZBhNwmVSndUUiP%2FeMpbxhW7mwfQaSSj4OkzKBHvjHjlJlY0XOa5pB7sPefDHbQPCl%2BIuALJjxC8eLZ7OtrMuwnKnZvAJl5aa9lEmgPMLTuOtTt2ljq7FL&X-Amz-Signature=6ed1d7763190cbffe36875962f7653712db8c68fcd0eb7c647f4293da83153c1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YTLQVL%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD3Hhty4FcRQPsymU%2BnvasQrZn%2FiMf5FkRi3inVZgK88gIgLIRXyCi8nBC35j8O1KBwIZ5BwBoL%2BYe67IuJtPCf1sAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGp3VuLbS4OummvCJCrcA0%2FRuCIw4jfKXko%2BpKR7oMUzve%2Bv%2F1p8JaPAysS6iML5dPN0ADMv%2BMo%2F590YzT1p9elPj73T7anRpj4FOsyTxnpOH1o5Ha%2FTxgK6i0UY7YvF4UjjWCdvWDpwK4b%2BuZWDDE3848poBLwrxHrGr3rkNBr4ewD3%2FIwkq1DOe16GmX7I%2BtTbvDfr825EQMQ7g%2BOavVQcykOBDxZhAJHj1%2F9aQ4TULhMGlbbaN6aEo1dZVo0atM%2BDI2gGSTG0jRGZxNNi%2Bb7Gv16h0IFZJ5J%2B4uYJndEHL6%2FarQQBmOp55dxiFW0rX2pHocwv1aaZuIW24ga98Vb2RqDy8i7Jz2LEuwvmYDJCNhdEfXvNS%2B491%2BVPMpg50rytSaNjDTpB8ikx9k0Wl8lKtjONPJjKnYVxJ%2F%2F%2BGTQMCmFV740qszaLM9kvdTCFJbh4op6STelITWQP3W3t6hQ1XKEppP%2Fpb5TwIDTH%2Fc1hCo5sF%2BBduavUoUjC1tUfEYRgMNXmJBoECzyusMm3dfCqHX1vA03Q1n3SqkIn5yIVS33dbDd4enxLVYxwrYn31JnKNbS5gyGeiBtdkkKFqMfM%2FTbdoSF0ESaHpIvu1vr7pdo907Cd7%2BbOgwJv%2Bm3B3XVHnOH3W0qewOslMKyzgr4GOqUBM0zRDqnQsaX33n2d4Z0xtJ6FlTFggcJFS9vF%2FPmZQ0cRSsPR%2FPwtT4RHnIyC9%2BusxGYngWaweK5gJgxDIvguAmHT9BhsBGt%2Fkk5rtM4ZBhNwmVSndUUiP%2FeMpbxhW7mwfQaSSj4OkzKBHvjHjlJlY0XOa5pB7sPefDHbQPCl%2BIuALJjxC8eLZ7OtrMuwnKnZvAJl5aa9lEmgPMLTuOtTt2ljq7FL&X-Amz-Signature=d74d9bb6ce3f2f7e84da82178942063f309ed2eb86b5c9b34f5b3d4ef26cb305&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YTLQVL%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD3Hhty4FcRQPsymU%2BnvasQrZn%2FiMf5FkRi3inVZgK88gIgLIRXyCi8nBC35j8O1KBwIZ5BwBoL%2BYe67IuJtPCf1sAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGp3VuLbS4OummvCJCrcA0%2FRuCIw4jfKXko%2BpKR7oMUzve%2Bv%2F1p8JaPAysS6iML5dPN0ADMv%2BMo%2F590YzT1p9elPj73T7anRpj4FOsyTxnpOH1o5Ha%2FTxgK6i0UY7YvF4UjjWCdvWDpwK4b%2BuZWDDE3848poBLwrxHrGr3rkNBr4ewD3%2FIwkq1DOe16GmX7I%2BtTbvDfr825EQMQ7g%2BOavVQcykOBDxZhAJHj1%2F9aQ4TULhMGlbbaN6aEo1dZVo0atM%2BDI2gGSTG0jRGZxNNi%2Bb7Gv16h0IFZJ5J%2B4uYJndEHL6%2FarQQBmOp55dxiFW0rX2pHocwv1aaZuIW24ga98Vb2RqDy8i7Jz2LEuwvmYDJCNhdEfXvNS%2B491%2BVPMpg50rytSaNjDTpB8ikx9k0Wl8lKtjONPJjKnYVxJ%2F%2F%2BGTQMCmFV740qszaLM9kvdTCFJbh4op6STelITWQP3W3t6hQ1XKEppP%2Fpb5TwIDTH%2Fc1hCo5sF%2BBduavUoUjC1tUfEYRgMNXmJBoECzyusMm3dfCqHX1vA03Q1n3SqkIn5yIVS33dbDd4enxLVYxwrYn31JnKNbS5gyGeiBtdkkKFqMfM%2FTbdoSF0ESaHpIvu1vr7pdo907Cd7%2BbOgwJv%2Bm3B3XVHnOH3W0qewOslMKyzgr4GOqUBM0zRDqnQsaX33n2d4Z0xtJ6FlTFggcJFS9vF%2FPmZQ0cRSsPR%2FPwtT4RHnIyC9%2BusxGYngWaweK5gJgxDIvguAmHT9BhsBGt%2Fkk5rtM4ZBhNwmVSndUUiP%2FeMpbxhW7mwfQaSSj4OkzKBHvjHjlJlY0XOa5pB7sPefDHbQPCl%2BIuALJjxC8eLZ7OtrMuwnKnZvAJl5aa9lEmgPMLTuOtTt2ljq7FL&X-Amz-Signature=4229a13eb02df1838752067bfcc0b599b441b6b1d6ffbef414084b2b26106943&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YTLQVL%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD3Hhty4FcRQPsymU%2BnvasQrZn%2FiMf5FkRi3inVZgK88gIgLIRXyCi8nBC35j8O1KBwIZ5BwBoL%2BYe67IuJtPCf1sAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGp3VuLbS4OummvCJCrcA0%2FRuCIw4jfKXko%2BpKR7oMUzve%2Bv%2F1p8JaPAysS6iML5dPN0ADMv%2BMo%2F590YzT1p9elPj73T7anRpj4FOsyTxnpOH1o5Ha%2FTxgK6i0UY7YvF4UjjWCdvWDpwK4b%2BuZWDDE3848poBLwrxHrGr3rkNBr4ewD3%2FIwkq1DOe16GmX7I%2BtTbvDfr825EQMQ7g%2BOavVQcykOBDxZhAJHj1%2F9aQ4TULhMGlbbaN6aEo1dZVo0atM%2BDI2gGSTG0jRGZxNNi%2Bb7Gv16h0IFZJ5J%2B4uYJndEHL6%2FarQQBmOp55dxiFW0rX2pHocwv1aaZuIW24ga98Vb2RqDy8i7Jz2LEuwvmYDJCNhdEfXvNS%2B491%2BVPMpg50rytSaNjDTpB8ikx9k0Wl8lKtjONPJjKnYVxJ%2F%2F%2BGTQMCmFV740qszaLM9kvdTCFJbh4op6STelITWQP3W3t6hQ1XKEppP%2Fpb5TwIDTH%2Fc1hCo5sF%2BBduavUoUjC1tUfEYRgMNXmJBoECzyusMm3dfCqHX1vA03Q1n3SqkIn5yIVS33dbDd4enxLVYxwrYn31JnKNbS5gyGeiBtdkkKFqMfM%2FTbdoSF0ESaHpIvu1vr7pdo907Cd7%2BbOgwJv%2Bm3B3XVHnOH3W0qewOslMKyzgr4GOqUBM0zRDqnQsaX33n2d4Z0xtJ6FlTFggcJFS9vF%2FPmZQ0cRSsPR%2FPwtT4RHnIyC9%2BusxGYngWaweK5gJgxDIvguAmHT9BhsBGt%2Fkk5rtM4ZBhNwmVSndUUiP%2FeMpbxhW7mwfQaSSj4OkzKBHvjHjlJlY0XOa5pB7sPefDHbQPCl%2BIuALJjxC8eLZ7OtrMuwnKnZvAJl5aa9lEmgPMLTuOtTt2ljq7FL&X-Amz-Signature=75e2ea563e04fd5c121bb26b8c5e2d275c137d38f6ca1287412feddb5a0109ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YTLQVL%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD3Hhty4FcRQPsymU%2BnvasQrZn%2FiMf5FkRi3inVZgK88gIgLIRXyCi8nBC35j8O1KBwIZ5BwBoL%2BYe67IuJtPCf1sAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGp3VuLbS4OummvCJCrcA0%2FRuCIw4jfKXko%2BpKR7oMUzve%2Bv%2F1p8JaPAysS6iML5dPN0ADMv%2BMo%2F590YzT1p9elPj73T7anRpj4FOsyTxnpOH1o5Ha%2FTxgK6i0UY7YvF4UjjWCdvWDpwK4b%2BuZWDDE3848poBLwrxHrGr3rkNBr4ewD3%2FIwkq1DOe16GmX7I%2BtTbvDfr825EQMQ7g%2BOavVQcykOBDxZhAJHj1%2F9aQ4TULhMGlbbaN6aEo1dZVo0atM%2BDI2gGSTG0jRGZxNNi%2Bb7Gv16h0IFZJ5J%2B4uYJndEHL6%2FarQQBmOp55dxiFW0rX2pHocwv1aaZuIW24ga98Vb2RqDy8i7Jz2LEuwvmYDJCNhdEfXvNS%2B491%2BVPMpg50rytSaNjDTpB8ikx9k0Wl8lKtjONPJjKnYVxJ%2F%2F%2BGTQMCmFV740qszaLM9kvdTCFJbh4op6STelITWQP3W3t6hQ1XKEppP%2Fpb5TwIDTH%2Fc1hCo5sF%2BBduavUoUjC1tUfEYRgMNXmJBoECzyusMm3dfCqHX1vA03Q1n3SqkIn5yIVS33dbDd4enxLVYxwrYn31JnKNbS5gyGeiBtdkkKFqMfM%2FTbdoSF0ESaHpIvu1vr7pdo907Cd7%2BbOgwJv%2Bm3B3XVHnOH3W0qewOslMKyzgr4GOqUBM0zRDqnQsaX33n2d4Z0xtJ6FlTFggcJFS9vF%2FPmZQ0cRSsPR%2FPwtT4RHnIyC9%2BusxGYngWaweK5gJgxDIvguAmHT9BhsBGt%2Fkk5rtM4ZBhNwmVSndUUiP%2FeMpbxhW7mwfQaSSj4OkzKBHvjHjlJlY0XOa5pB7sPefDHbQPCl%2BIuALJjxC8eLZ7OtrMuwnKnZvAJl5aa9lEmgPMLTuOtTt2ljq7FL&X-Amz-Signature=b2630d88d0668fb50b5424fa9c021b9521facf88d09639a9e6b0063ab8fc2f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4YTLQVL%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQD3Hhty4FcRQPsymU%2BnvasQrZn%2FiMf5FkRi3inVZgK88gIgLIRXyCi8nBC35j8O1KBwIZ5BwBoL%2BYe67IuJtPCf1sAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGp3VuLbS4OummvCJCrcA0%2FRuCIw4jfKXko%2BpKR7oMUzve%2Bv%2F1p8JaPAysS6iML5dPN0ADMv%2BMo%2F590YzT1p9elPj73T7anRpj4FOsyTxnpOH1o5Ha%2FTxgK6i0UY7YvF4UjjWCdvWDpwK4b%2BuZWDDE3848poBLwrxHrGr3rkNBr4ewD3%2FIwkq1DOe16GmX7I%2BtTbvDfr825EQMQ7g%2BOavVQcykOBDxZhAJHj1%2F9aQ4TULhMGlbbaN6aEo1dZVo0atM%2BDI2gGSTG0jRGZxNNi%2Bb7Gv16h0IFZJ5J%2B4uYJndEHL6%2FarQQBmOp55dxiFW0rX2pHocwv1aaZuIW24ga98Vb2RqDy8i7Jz2LEuwvmYDJCNhdEfXvNS%2B491%2BVPMpg50rytSaNjDTpB8ikx9k0Wl8lKtjONPJjKnYVxJ%2F%2F%2BGTQMCmFV740qszaLM9kvdTCFJbh4op6STelITWQP3W3t6hQ1XKEppP%2Fpb5TwIDTH%2Fc1hCo5sF%2BBduavUoUjC1tUfEYRgMNXmJBoECzyusMm3dfCqHX1vA03Q1n3SqkIn5yIVS33dbDd4enxLVYxwrYn31JnKNbS5gyGeiBtdkkKFqMfM%2FTbdoSF0ESaHpIvu1vr7pdo907Cd7%2BbOgwJv%2Bm3B3XVHnOH3W0qewOslMKyzgr4GOqUBM0zRDqnQsaX33n2d4Z0xtJ6FlTFggcJFS9vF%2FPmZQ0cRSsPR%2FPwtT4RHnIyC9%2BusxGYngWaweK5gJgxDIvguAmHT9BhsBGt%2Fkk5rtM4ZBhNwmVSndUUiP%2FeMpbxhW7mwfQaSSj4OkzKBHvjHjlJlY0XOa5pB7sPefDHbQPCl%2BIuALJjxC8eLZ7OtrMuwnKnZvAJl5aa9lEmgPMLTuOtTt2ljq7FL&X-Amz-Signature=4d3ae6c22341d0d4d2a1f7bce292f94b5cf02093dec94215995c0d08eb7807c5&X-Amz-SignedHeaders=host&x-id=GetObject)
