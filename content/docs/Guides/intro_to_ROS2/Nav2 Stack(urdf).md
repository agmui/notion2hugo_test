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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FR3ZT2A%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCAwjyvbgnrhRp%2BoKEQCNhDYzunGGVi8OgQCxdfPW9uhQIgUPEausI7YluedDId3%2FB%2Fe1PC5vaHcHRQ8JGtCxe%2FBV0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVsdae2gkD5hAGpFircA5f7kPxIoqC9RuddOBupbSX8rUDcC%2FuKCXw%2FkoZx6KdiFqH%2FPkvddfuZlLNuRfEWtYcOQn3w2sSk%2F1SMkXbMZ1UxCTT45gRYod6EeCLsUP%2FZc57489jmhRr34C%2FnBqyON85s9LmTfYSRovZgjOzpeydOy3lPmNMncsGIcLEQy7AiYtzs4VcOIb0gfuT%2FnL1zMxE9q6QP0PpVQUec6kUG99mdZWu7KJmTLR%2BuwMlZX87vQPPYOpcxssQ1TUBKp8V7pvIVvLJAuTCvLeRHvGl%2FyrXT%2BUhGsA7FFWK0FwDdpF1XpEgFgC31eOL8eo%2Fuz1jIIqsjcL1WzUBJOhNA8xVDtoMcloFE5u%2FcDoyip%2FKaOerQ6S0ODDVVB35IDEGTI6D1OdQMUPtr3qIKaJYKmPKqOTjKmIMJl%2Freln5PBFz2i5YB9cLqrnCRYd7whub0vnUahYl6uVgPw9lHGDb0ZrgMy7hiOBaBEXxhdPPqEygVUC01zLo9DfOIv%2FXdqIUJv9YNcQMoJF063fgYAJUYMXvsUAj7jt1W2IyhGgEEELoNv0sjInSzi%2BAq3ll1l%2BxGwDnO5wUKMUgccmxR%2BjiavDA45MgHaNsjg6T%2B%2Bsz6aSsq19jd1v277Y4feJbCIANfMI730b0GOqUBX0y6rkCb8NKQ5IimqamD2mES0svwcSJQH8Evrs%2B6%2Bq6p3NMqKE9ITsa1C%2BWqKGS81M3qUXTB4NYVwW%2BhZ8w%2Bi%2FIg1FjDCHDLZ%2B3ewsFIl2fDT3XHqL4gh44gtgOYqFVOn%2F7gTN1ODjjSikmsTJXKPqdLK2wRo%2FUKA%2BMc5CpHzI6jxV4%2BbnzcqPcH742bFAoqI7pIJ7Oy1EoX8ihKzZsIJCtAbN8P&X-Amz-Signature=d20fe780e260fa4fa3bb36adee99bdf8e5da720d5b1b5b3584f1d4d13b0fd810&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FR3ZT2A%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCAwjyvbgnrhRp%2BoKEQCNhDYzunGGVi8OgQCxdfPW9uhQIgUPEausI7YluedDId3%2FB%2Fe1PC5vaHcHRQ8JGtCxe%2FBV0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVsdae2gkD5hAGpFircA5f7kPxIoqC9RuddOBupbSX8rUDcC%2FuKCXw%2FkoZx6KdiFqH%2FPkvddfuZlLNuRfEWtYcOQn3w2sSk%2F1SMkXbMZ1UxCTT45gRYod6EeCLsUP%2FZc57489jmhRr34C%2FnBqyON85s9LmTfYSRovZgjOzpeydOy3lPmNMncsGIcLEQy7AiYtzs4VcOIb0gfuT%2FnL1zMxE9q6QP0PpVQUec6kUG99mdZWu7KJmTLR%2BuwMlZX87vQPPYOpcxssQ1TUBKp8V7pvIVvLJAuTCvLeRHvGl%2FyrXT%2BUhGsA7FFWK0FwDdpF1XpEgFgC31eOL8eo%2Fuz1jIIqsjcL1WzUBJOhNA8xVDtoMcloFE5u%2FcDoyip%2FKaOerQ6S0ODDVVB35IDEGTI6D1OdQMUPtr3qIKaJYKmPKqOTjKmIMJl%2Freln5PBFz2i5YB9cLqrnCRYd7whub0vnUahYl6uVgPw9lHGDb0ZrgMy7hiOBaBEXxhdPPqEygVUC01zLo9DfOIv%2FXdqIUJv9YNcQMoJF063fgYAJUYMXvsUAj7jt1W2IyhGgEEELoNv0sjInSzi%2BAq3ll1l%2BxGwDnO5wUKMUgccmxR%2BjiavDA45MgHaNsjg6T%2B%2Bsz6aSsq19jd1v277Y4feJbCIANfMI730b0GOqUBX0y6rkCb8NKQ5IimqamD2mES0svwcSJQH8Evrs%2B6%2Bq6p3NMqKE9ITsa1C%2BWqKGS81M3qUXTB4NYVwW%2BhZ8w%2Bi%2FIg1FjDCHDLZ%2B3ewsFIl2fDT3XHqL4gh44gtgOYqFVOn%2F7gTN1ODjjSikmsTJXKPqdLK2wRo%2FUKA%2BMc5CpHzI6jxV4%2BbnzcqPcH742bFAoqI7pIJ7Oy1EoX8ihKzZsIJCtAbN8P&X-Amz-Signature=5b72dbf55551f107d8bc605ecbe6c6361acb52b82fbcb9c9e2cd956af694ba8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FR3ZT2A%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCAwjyvbgnrhRp%2BoKEQCNhDYzunGGVi8OgQCxdfPW9uhQIgUPEausI7YluedDId3%2FB%2Fe1PC5vaHcHRQ8JGtCxe%2FBV0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVsdae2gkD5hAGpFircA5f7kPxIoqC9RuddOBupbSX8rUDcC%2FuKCXw%2FkoZx6KdiFqH%2FPkvddfuZlLNuRfEWtYcOQn3w2sSk%2F1SMkXbMZ1UxCTT45gRYod6EeCLsUP%2FZc57489jmhRr34C%2FnBqyON85s9LmTfYSRovZgjOzpeydOy3lPmNMncsGIcLEQy7AiYtzs4VcOIb0gfuT%2FnL1zMxE9q6QP0PpVQUec6kUG99mdZWu7KJmTLR%2BuwMlZX87vQPPYOpcxssQ1TUBKp8V7pvIVvLJAuTCvLeRHvGl%2FyrXT%2BUhGsA7FFWK0FwDdpF1XpEgFgC31eOL8eo%2Fuz1jIIqsjcL1WzUBJOhNA8xVDtoMcloFE5u%2FcDoyip%2FKaOerQ6S0ODDVVB35IDEGTI6D1OdQMUPtr3qIKaJYKmPKqOTjKmIMJl%2Freln5PBFz2i5YB9cLqrnCRYd7whub0vnUahYl6uVgPw9lHGDb0ZrgMy7hiOBaBEXxhdPPqEygVUC01zLo9DfOIv%2FXdqIUJv9YNcQMoJF063fgYAJUYMXvsUAj7jt1W2IyhGgEEELoNv0sjInSzi%2BAq3ll1l%2BxGwDnO5wUKMUgccmxR%2BjiavDA45MgHaNsjg6T%2B%2Bsz6aSsq19jd1v277Y4feJbCIANfMI730b0GOqUBX0y6rkCb8NKQ5IimqamD2mES0svwcSJQH8Evrs%2B6%2Bq6p3NMqKE9ITsa1C%2BWqKGS81M3qUXTB4NYVwW%2BhZ8w%2Bi%2FIg1FjDCHDLZ%2B3ewsFIl2fDT3XHqL4gh44gtgOYqFVOn%2F7gTN1ODjjSikmsTJXKPqdLK2wRo%2FUKA%2BMc5CpHzI6jxV4%2BbnzcqPcH742bFAoqI7pIJ7Oy1EoX8ihKzZsIJCtAbN8P&X-Amz-Signature=b05c92f74737bf0970482655cd5891caa33bd6c2dcabe94928a7e248dcd9522c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FR3ZT2A%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCAwjyvbgnrhRp%2BoKEQCNhDYzunGGVi8OgQCxdfPW9uhQIgUPEausI7YluedDId3%2FB%2Fe1PC5vaHcHRQ8JGtCxe%2FBV0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVsdae2gkD5hAGpFircA5f7kPxIoqC9RuddOBupbSX8rUDcC%2FuKCXw%2FkoZx6KdiFqH%2FPkvddfuZlLNuRfEWtYcOQn3w2sSk%2F1SMkXbMZ1UxCTT45gRYod6EeCLsUP%2FZc57489jmhRr34C%2FnBqyON85s9LmTfYSRovZgjOzpeydOy3lPmNMncsGIcLEQy7AiYtzs4VcOIb0gfuT%2FnL1zMxE9q6QP0PpVQUec6kUG99mdZWu7KJmTLR%2BuwMlZX87vQPPYOpcxssQ1TUBKp8V7pvIVvLJAuTCvLeRHvGl%2FyrXT%2BUhGsA7FFWK0FwDdpF1XpEgFgC31eOL8eo%2Fuz1jIIqsjcL1WzUBJOhNA8xVDtoMcloFE5u%2FcDoyip%2FKaOerQ6S0ODDVVB35IDEGTI6D1OdQMUPtr3qIKaJYKmPKqOTjKmIMJl%2Freln5PBFz2i5YB9cLqrnCRYd7whub0vnUahYl6uVgPw9lHGDb0ZrgMy7hiOBaBEXxhdPPqEygVUC01zLo9DfOIv%2FXdqIUJv9YNcQMoJF063fgYAJUYMXvsUAj7jt1W2IyhGgEEELoNv0sjInSzi%2BAq3ll1l%2BxGwDnO5wUKMUgccmxR%2BjiavDA45MgHaNsjg6T%2B%2Bsz6aSsq19jd1v277Y4feJbCIANfMI730b0GOqUBX0y6rkCb8NKQ5IimqamD2mES0svwcSJQH8Evrs%2B6%2Bq6p3NMqKE9ITsa1C%2BWqKGS81M3qUXTB4NYVwW%2BhZ8w%2Bi%2FIg1FjDCHDLZ%2B3ewsFIl2fDT3XHqL4gh44gtgOYqFVOn%2F7gTN1ODjjSikmsTJXKPqdLK2wRo%2FUKA%2BMc5CpHzI6jxV4%2BbnzcqPcH742bFAoqI7pIJ7Oy1EoX8ihKzZsIJCtAbN8P&X-Amz-Signature=f53833cb7655e09cedf85bc75f2f5aa3df5f9e95e25ac6e9b5ab5649c40bd911&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FR3ZT2A%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCAwjyvbgnrhRp%2BoKEQCNhDYzunGGVi8OgQCxdfPW9uhQIgUPEausI7YluedDId3%2FB%2Fe1PC5vaHcHRQ8JGtCxe%2FBV0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVsdae2gkD5hAGpFircA5f7kPxIoqC9RuddOBupbSX8rUDcC%2FuKCXw%2FkoZx6KdiFqH%2FPkvddfuZlLNuRfEWtYcOQn3w2sSk%2F1SMkXbMZ1UxCTT45gRYod6EeCLsUP%2FZc57489jmhRr34C%2FnBqyON85s9LmTfYSRovZgjOzpeydOy3lPmNMncsGIcLEQy7AiYtzs4VcOIb0gfuT%2FnL1zMxE9q6QP0PpVQUec6kUG99mdZWu7KJmTLR%2BuwMlZX87vQPPYOpcxssQ1TUBKp8V7pvIVvLJAuTCvLeRHvGl%2FyrXT%2BUhGsA7FFWK0FwDdpF1XpEgFgC31eOL8eo%2Fuz1jIIqsjcL1WzUBJOhNA8xVDtoMcloFE5u%2FcDoyip%2FKaOerQ6S0ODDVVB35IDEGTI6D1OdQMUPtr3qIKaJYKmPKqOTjKmIMJl%2Freln5PBFz2i5YB9cLqrnCRYd7whub0vnUahYl6uVgPw9lHGDb0ZrgMy7hiOBaBEXxhdPPqEygVUC01zLo9DfOIv%2FXdqIUJv9YNcQMoJF063fgYAJUYMXvsUAj7jt1W2IyhGgEEELoNv0sjInSzi%2BAq3ll1l%2BxGwDnO5wUKMUgccmxR%2BjiavDA45MgHaNsjg6T%2B%2Bsz6aSsq19jd1v277Y4feJbCIANfMI730b0GOqUBX0y6rkCb8NKQ5IimqamD2mES0svwcSJQH8Evrs%2B6%2Bq6p3NMqKE9ITsa1C%2BWqKGS81M3qUXTB4NYVwW%2BhZ8w%2Bi%2FIg1FjDCHDLZ%2B3ewsFIl2fDT3XHqL4gh44gtgOYqFVOn%2F7gTN1ODjjSikmsTJXKPqdLK2wRo%2FUKA%2BMc5CpHzI6jxV4%2BbnzcqPcH742bFAoqI7pIJ7Oy1EoX8ihKzZsIJCtAbN8P&X-Amz-Signature=6c5f6e552989b1454616d3533c1949566bc0e589b3f3efd11b49660d65fc1866&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FR3ZT2A%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T131531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCAwjyvbgnrhRp%2BoKEQCNhDYzunGGVi8OgQCxdfPW9uhQIgUPEausI7YluedDId3%2FB%2Fe1PC5vaHcHRQ8JGtCxe%2FBV0qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAVsdae2gkD5hAGpFircA5f7kPxIoqC9RuddOBupbSX8rUDcC%2FuKCXw%2FkoZx6KdiFqH%2FPkvddfuZlLNuRfEWtYcOQn3w2sSk%2F1SMkXbMZ1UxCTT45gRYod6EeCLsUP%2FZc57489jmhRr34C%2FnBqyON85s9LmTfYSRovZgjOzpeydOy3lPmNMncsGIcLEQy7AiYtzs4VcOIb0gfuT%2FnL1zMxE9q6QP0PpVQUec6kUG99mdZWu7KJmTLR%2BuwMlZX87vQPPYOpcxssQ1TUBKp8V7pvIVvLJAuTCvLeRHvGl%2FyrXT%2BUhGsA7FFWK0FwDdpF1XpEgFgC31eOL8eo%2Fuz1jIIqsjcL1WzUBJOhNA8xVDtoMcloFE5u%2FcDoyip%2FKaOerQ6S0ODDVVB35IDEGTI6D1OdQMUPtr3qIKaJYKmPKqOTjKmIMJl%2Freln5PBFz2i5YB9cLqrnCRYd7whub0vnUahYl6uVgPw9lHGDb0ZrgMy7hiOBaBEXxhdPPqEygVUC01zLo9DfOIv%2FXdqIUJv9YNcQMoJF063fgYAJUYMXvsUAj7jt1W2IyhGgEEELoNv0sjInSzi%2BAq3ll1l%2BxGwDnO5wUKMUgccmxR%2BjiavDA45MgHaNsjg6T%2B%2Bsz6aSsq19jd1v277Y4feJbCIANfMI730b0GOqUBX0y6rkCb8NKQ5IimqamD2mES0svwcSJQH8Evrs%2B6%2Bq6p3NMqKE9ITsa1C%2BWqKGS81M3qUXTB4NYVwW%2BhZ8w%2Bi%2FIg1FjDCHDLZ%2B3ewsFIl2fDT3XHqL4gh44gtgOYqFVOn%2F7gTN1ODjjSikmsTJXKPqdLK2wRo%2FUKA%2BMc5CpHzI6jxV4%2BbnzcqPcH742bFAoqI7pIJ7Oy1EoX8ihKzZsIJCtAbN8P&X-Amz-Signature=8665fd0acf0cef3d8c560d05e852e6c0060c90eea54d19ebb3b7c8178541d4f6&X-Amz-SignedHeaders=host&x-id=GetObject)
