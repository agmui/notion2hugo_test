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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A2TNEBP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpNah4PZFsk1DOHSivYwkgBt4GYVagCgBryaUdBGPjsAiEA4z4Et2y%2BYm97tdOSfxFDkyMzIjp2wXpZ6GuYYw9zLscqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINJCCf3f1t7UE6RqircA3ux2GIbO5BbvUuw0sFmyTmwIKyBXxvYWC4ohdFKINsJuZL9Et4%2BSnkAJ%2FEavkoLqiZOzMZu67Oj3aqTTrHGRuRatwXNSIFkrP%2F%2FzDsT5OIkFgFZi1pcoozOIVHUQE2mB%2FlIR1yyEsBsZOp%2BighH%2FVUomytsl3yNip3GTeaOorjZbgIGHqEVynPCulQc00mrTBMCpWZIuhuLFfROPqSP5mbYMiGwO2b%2BIxy9l0BDNAz5bQiL%2FCnC0YY3cZd9wkxaayANbFf3tDlwVLm5qgsP6C7gXAxg0nKxPsiX98BOTMWRmFBpowdyRDpmim88YmZkRqnE%2F7K2kc9jtaYnphFBy1DzDTL3wrFKz8sS6b8bYK9GAjgNELE36tZaw%2FDjKkRIi%2BqtMY2m%2FVQsF7fXxK9HdfJqxSFuik4P4%2F4W6ZZXlRtxtEJO8fWSpj0MO7fSdZO%2Fo7FmVvD1A7UPWDgl5uAHnDW1bkFAzoXTMCVBnGx20zzX65ln9qCSKPKksJcuiVVKAqWeTb%2FK%2BiPMxmE6neW359YOBXfOs9hB9ttQE%2F5R3mtdhGztGW0vqRiouNb7gxBW%2FilZb9n7qexHqtXM7g0FZxgPJdg6CAFxbZWxf%2F5dPA4uhFCxL%2F6QAGY8GQfmMNihvMMGOqUB3x8c%2FR%2BZPYrntBJ9vww3H%2F0SX9QSGGN3ytLSEhF8QFXfyFHoI1srkzEjSJrZbPPPhsjqRGZvxI7hr4XOP05Ztp2ysjdLqIBJkt1wRXVOzB5%2FznPYCFAZWLxCgPOFnp998%2Fz71bwTChSOk1GRqTzynsHPHarV6rJccQm0TZgr%2BgDbF4QNjEy%2FiRLcI9AOx1cBapV%2F%2BVU9HARW2xFTR1%2BxVh6fH8I3&X-Amz-Signature=0046212697160d79dfb72d9a7efb9c94be6ca04003c531c849f8ef980fb40b5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A2TNEBP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpNah4PZFsk1DOHSivYwkgBt4GYVagCgBryaUdBGPjsAiEA4z4Et2y%2BYm97tdOSfxFDkyMzIjp2wXpZ6GuYYw9zLscqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINJCCf3f1t7UE6RqircA3ux2GIbO5BbvUuw0sFmyTmwIKyBXxvYWC4ohdFKINsJuZL9Et4%2BSnkAJ%2FEavkoLqiZOzMZu67Oj3aqTTrHGRuRatwXNSIFkrP%2F%2FzDsT5OIkFgFZi1pcoozOIVHUQE2mB%2FlIR1yyEsBsZOp%2BighH%2FVUomytsl3yNip3GTeaOorjZbgIGHqEVynPCulQc00mrTBMCpWZIuhuLFfROPqSP5mbYMiGwO2b%2BIxy9l0BDNAz5bQiL%2FCnC0YY3cZd9wkxaayANbFf3tDlwVLm5qgsP6C7gXAxg0nKxPsiX98BOTMWRmFBpowdyRDpmim88YmZkRqnE%2F7K2kc9jtaYnphFBy1DzDTL3wrFKz8sS6b8bYK9GAjgNELE36tZaw%2FDjKkRIi%2BqtMY2m%2FVQsF7fXxK9HdfJqxSFuik4P4%2F4W6ZZXlRtxtEJO8fWSpj0MO7fSdZO%2Fo7FmVvD1A7UPWDgl5uAHnDW1bkFAzoXTMCVBnGx20zzX65ln9qCSKPKksJcuiVVKAqWeTb%2FK%2BiPMxmE6neW359YOBXfOs9hB9ttQE%2F5R3mtdhGztGW0vqRiouNb7gxBW%2FilZb9n7qexHqtXM7g0FZxgPJdg6CAFxbZWxf%2F5dPA4uhFCxL%2F6QAGY8GQfmMNihvMMGOqUB3x8c%2FR%2BZPYrntBJ9vww3H%2F0SX9QSGGN3ytLSEhF8QFXfyFHoI1srkzEjSJrZbPPPhsjqRGZvxI7hr4XOP05Ztp2ysjdLqIBJkt1wRXVOzB5%2FznPYCFAZWLxCgPOFnp998%2Fz71bwTChSOk1GRqTzynsHPHarV6rJccQm0TZgr%2BgDbF4QNjEy%2FiRLcI9AOx1cBapV%2F%2BVU9HARW2xFTR1%2BxVh6fH8I3&X-Amz-Signature=567262eb6f68f5d50643d64a4b04d4c63f625cd3f71a5cc2d9a2cdbb89712f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A2TNEBP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpNah4PZFsk1DOHSivYwkgBt4GYVagCgBryaUdBGPjsAiEA4z4Et2y%2BYm97tdOSfxFDkyMzIjp2wXpZ6GuYYw9zLscqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINJCCf3f1t7UE6RqircA3ux2GIbO5BbvUuw0sFmyTmwIKyBXxvYWC4ohdFKINsJuZL9Et4%2BSnkAJ%2FEavkoLqiZOzMZu67Oj3aqTTrHGRuRatwXNSIFkrP%2F%2FzDsT5OIkFgFZi1pcoozOIVHUQE2mB%2FlIR1yyEsBsZOp%2BighH%2FVUomytsl3yNip3GTeaOorjZbgIGHqEVynPCulQc00mrTBMCpWZIuhuLFfROPqSP5mbYMiGwO2b%2BIxy9l0BDNAz5bQiL%2FCnC0YY3cZd9wkxaayANbFf3tDlwVLm5qgsP6C7gXAxg0nKxPsiX98BOTMWRmFBpowdyRDpmim88YmZkRqnE%2F7K2kc9jtaYnphFBy1DzDTL3wrFKz8sS6b8bYK9GAjgNELE36tZaw%2FDjKkRIi%2BqtMY2m%2FVQsF7fXxK9HdfJqxSFuik4P4%2F4W6ZZXlRtxtEJO8fWSpj0MO7fSdZO%2Fo7FmVvD1A7UPWDgl5uAHnDW1bkFAzoXTMCVBnGx20zzX65ln9qCSKPKksJcuiVVKAqWeTb%2FK%2BiPMxmE6neW359YOBXfOs9hB9ttQE%2F5R3mtdhGztGW0vqRiouNb7gxBW%2FilZb9n7qexHqtXM7g0FZxgPJdg6CAFxbZWxf%2F5dPA4uhFCxL%2F6QAGY8GQfmMNihvMMGOqUB3x8c%2FR%2BZPYrntBJ9vww3H%2F0SX9QSGGN3ytLSEhF8QFXfyFHoI1srkzEjSJrZbPPPhsjqRGZvxI7hr4XOP05Ztp2ysjdLqIBJkt1wRXVOzB5%2FznPYCFAZWLxCgPOFnp998%2Fz71bwTChSOk1GRqTzynsHPHarV6rJccQm0TZgr%2BgDbF4QNjEy%2FiRLcI9AOx1cBapV%2F%2BVU9HARW2xFTR1%2BxVh6fH8I3&X-Amz-Signature=0e51eaa33bd761879421928a0fc0ce4e1312ae9606ac4e5301ddbce501261382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A2TNEBP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpNah4PZFsk1DOHSivYwkgBt4GYVagCgBryaUdBGPjsAiEA4z4Et2y%2BYm97tdOSfxFDkyMzIjp2wXpZ6GuYYw9zLscqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINJCCf3f1t7UE6RqircA3ux2GIbO5BbvUuw0sFmyTmwIKyBXxvYWC4ohdFKINsJuZL9Et4%2BSnkAJ%2FEavkoLqiZOzMZu67Oj3aqTTrHGRuRatwXNSIFkrP%2F%2FzDsT5OIkFgFZi1pcoozOIVHUQE2mB%2FlIR1yyEsBsZOp%2BighH%2FVUomytsl3yNip3GTeaOorjZbgIGHqEVynPCulQc00mrTBMCpWZIuhuLFfROPqSP5mbYMiGwO2b%2BIxy9l0BDNAz5bQiL%2FCnC0YY3cZd9wkxaayANbFf3tDlwVLm5qgsP6C7gXAxg0nKxPsiX98BOTMWRmFBpowdyRDpmim88YmZkRqnE%2F7K2kc9jtaYnphFBy1DzDTL3wrFKz8sS6b8bYK9GAjgNELE36tZaw%2FDjKkRIi%2BqtMY2m%2FVQsF7fXxK9HdfJqxSFuik4P4%2F4W6ZZXlRtxtEJO8fWSpj0MO7fSdZO%2Fo7FmVvD1A7UPWDgl5uAHnDW1bkFAzoXTMCVBnGx20zzX65ln9qCSKPKksJcuiVVKAqWeTb%2FK%2BiPMxmE6neW359YOBXfOs9hB9ttQE%2F5R3mtdhGztGW0vqRiouNb7gxBW%2FilZb9n7qexHqtXM7g0FZxgPJdg6CAFxbZWxf%2F5dPA4uhFCxL%2F6QAGY8GQfmMNihvMMGOqUB3x8c%2FR%2BZPYrntBJ9vww3H%2F0SX9QSGGN3ytLSEhF8QFXfyFHoI1srkzEjSJrZbPPPhsjqRGZvxI7hr4XOP05Ztp2ysjdLqIBJkt1wRXVOzB5%2FznPYCFAZWLxCgPOFnp998%2Fz71bwTChSOk1GRqTzynsHPHarV6rJccQm0TZgr%2BgDbF4QNjEy%2FiRLcI9AOx1cBapV%2F%2BVU9HARW2xFTR1%2BxVh6fH8I3&X-Amz-Signature=f6d5f3ad41a8a1a5e830db2973059fdb2dc67e86fc9e1adadde47c3743458287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A2TNEBP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpNah4PZFsk1DOHSivYwkgBt4GYVagCgBryaUdBGPjsAiEA4z4Et2y%2BYm97tdOSfxFDkyMzIjp2wXpZ6GuYYw9zLscqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINJCCf3f1t7UE6RqircA3ux2GIbO5BbvUuw0sFmyTmwIKyBXxvYWC4ohdFKINsJuZL9Et4%2BSnkAJ%2FEavkoLqiZOzMZu67Oj3aqTTrHGRuRatwXNSIFkrP%2F%2FzDsT5OIkFgFZi1pcoozOIVHUQE2mB%2FlIR1yyEsBsZOp%2BighH%2FVUomytsl3yNip3GTeaOorjZbgIGHqEVynPCulQc00mrTBMCpWZIuhuLFfROPqSP5mbYMiGwO2b%2BIxy9l0BDNAz5bQiL%2FCnC0YY3cZd9wkxaayANbFf3tDlwVLm5qgsP6C7gXAxg0nKxPsiX98BOTMWRmFBpowdyRDpmim88YmZkRqnE%2F7K2kc9jtaYnphFBy1DzDTL3wrFKz8sS6b8bYK9GAjgNELE36tZaw%2FDjKkRIi%2BqtMY2m%2FVQsF7fXxK9HdfJqxSFuik4P4%2F4W6ZZXlRtxtEJO8fWSpj0MO7fSdZO%2Fo7FmVvD1A7UPWDgl5uAHnDW1bkFAzoXTMCVBnGx20zzX65ln9qCSKPKksJcuiVVKAqWeTb%2FK%2BiPMxmE6neW359YOBXfOs9hB9ttQE%2F5R3mtdhGztGW0vqRiouNb7gxBW%2FilZb9n7qexHqtXM7g0FZxgPJdg6CAFxbZWxf%2F5dPA4uhFCxL%2F6QAGY8GQfmMNihvMMGOqUB3x8c%2FR%2BZPYrntBJ9vww3H%2F0SX9QSGGN3ytLSEhF8QFXfyFHoI1srkzEjSJrZbPPPhsjqRGZvxI7hr4XOP05Ztp2ysjdLqIBJkt1wRXVOzB5%2FznPYCFAZWLxCgPOFnp998%2Fz71bwTChSOk1GRqTzynsHPHarV6rJccQm0TZgr%2BgDbF4QNjEy%2FiRLcI9AOx1cBapV%2F%2BVU9HARW2xFTR1%2BxVh6fH8I3&X-Amz-Signature=a38c755facc5909295a436a876f80bc9581f2464ef0fa9fed523fe6c3b7d17f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A2TNEBP%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T024432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBpNah4PZFsk1DOHSivYwkgBt4GYVagCgBryaUdBGPjsAiEA4z4Et2y%2BYm97tdOSfxFDkyMzIjp2wXpZ6GuYYw9zLscqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDINJCCf3f1t7UE6RqircA3ux2GIbO5BbvUuw0sFmyTmwIKyBXxvYWC4ohdFKINsJuZL9Et4%2BSnkAJ%2FEavkoLqiZOzMZu67Oj3aqTTrHGRuRatwXNSIFkrP%2F%2FzDsT5OIkFgFZi1pcoozOIVHUQE2mB%2FlIR1yyEsBsZOp%2BighH%2FVUomytsl3yNip3GTeaOorjZbgIGHqEVynPCulQc00mrTBMCpWZIuhuLFfROPqSP5mbYMiGwO2b%2BIxy9l0BDNAz5bQiL%2FCnC0YY3cZd9wkxaayANbFf3tDlwVLm5qgsP6C7gXAxg0nKxPsiX98BOTMWRmFBpowdyRDpmim88YmZkRqnE%2F7K2kc9jtaYnphFBy1DzDTL3wrFKz8sS6b8bYK9GAjgNELE36tZaw%2FDjKkRIi%2BqtMY2m%2FVQsF7fXxK9HdfJqxSFuik4P4%2F4W6ZZXlRtxtEJO8fWSpj0MO7fSdZO%2Fo7FmVvD1A7UPWDgl5uAHnDW1bkFAzoXTMCVBnGx20zzX65ln9qCSKPKksJcuiVVKAqWeTb%2FK%2BiPMxmE6neW359YOBXfOs9hB9ttQE%2F5R3mtdhGztGW0vqRiouNb7gxBW%2FilZb9n7qexHqtXM7g0FZxgPJdg6CAFxbZWxf%2F5dPA4uhFCxL%2F6QAGY8GQfmMNihvMMGOqUB3x8c%2FR%2BZPYrntBJ9vww3H%2F0SX9QSGGN3ytLSEhF8QFXfyFHoI1srkzEjSJrZbPPPhsjqRGZvxI7hr4XOP05Ztp2ysjdLqIBJkt1wRXVOzB5%2FznPYCFAZWLxCgPOFnp998%2Fz71bwTChSOk1GRqTzynsHPHarV6rJccQm0TZgr%2BgDbF4QNjEy%2FiRLcI9AOx1cBapV%2F%2BVU9HARW2xFTR1%2BxVh6fH8I3&X-Amz-Signature=800fe050b2d29e5118a53f2650eb439346b84f1466d91f6b86f88f5d77c705bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
