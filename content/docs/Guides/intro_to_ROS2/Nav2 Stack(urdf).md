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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CY376H7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOQtqsXiBf9yAZ4hoWVypf2bxFirF4Jo4gvLa3M57QbAiEAuJ1A1rBbxGqbtUlzRuSCbQdNgOMzQlz49Tg5TsQ3v14q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAFgDIXdugqXPkOJSircAzGjEjdYWMGtjsfXb%2BNZS2U9G3QaJbTBiU7mSmzD5AQxPelRtMkgvI%2B0ebp%2BvXW3jgiWJsCACTvWcCPHTFbJggdDJ2tNWG2%2B5VFgXw%2FB8BqTLD%2BKXWMztWRYb7sPh9RaR7h%2Fv%2B%2Bjgltt6%2FIIkB6Ud46XQdUVVkos9d6HiKeKmODKVVIwMwyun0LqiJR2lynaKKNVZE8vsrISgErFV121yKxosZCr5dnxkZTB4VSTGc7PT6f0O3QhCKAbw2Xor48gPG3d9wMa%2FFqIUX2E%2BSWOEnPaTa1ClT0Sa103JJ6y54m3pOvgMxwDLse6V6Ouk9H%2BWXeH4Lbl8jdYb3pDE3hkdLAp9Bh9WeopdIkq8LRw8sMTVToeYPFWQ%2FK%2F27AnpYJxQ9AvetVb6dffsVvUSA8T503AqQ8zhbIflPpoVBBqvdtW9QlFJ37E2mbhSgB7AZpESGundke03jMH%2BGjh49%2BDfXXI3nn79k95gWlLC3z7iscJXO0NVPyT1AWswXrJ2lxQ%2F%2BdHNIMRYvL1oAqljej2oCmdQ%2B1CkfdOqRecmPO0ZALO27%2FExsKbq33atr3AgkV5xZQNqnrC8%2B1aEWdfLzgC1U7daAcEmTo6w9X0TompPCiUtt%2FPT4z4DvG%2FZaRmMLbuxMIGOqUBPST8m%2FduUGYDIfy9MMfep7SqL2MSuR3O9CTKmiBhlnYjnUoJfPG8wYS6lVm%2FG%2BUBfEp%2F4N4L%2B1JcGzt%2FWwPXYdeT62bQnr8XXG1SG%2Bu%2Bi6YGCkjYjZNsAyb5I477e%2F5liQRX6wcSBp2LWsmo1jS2DE95CltvH9tbqRcULRKxzWEwCQD60PqLWMoJjOAG18TgSYInPyDEBwoWCl9GvFaaretNgH2i&X-Amz-Signature=9246898339962827e65413fb39e26d3eed0c748db907381d69be44f1f4dfb70a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CY376H7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOQtqsXiBf9yAZ4hoWVypf2bxFirF4Jo4gvLa3M57QbAiEAuJ1A1rBbxGqbtUlzRuSCbQdNgOMzQlz49Tg5TsQ3v14q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAFgDIXdugqXPkOJSircAzGjEjdYWMGtjsfXb%2BNZS2U9G3QaJbTBiU7mSmzD5AQxPelRtMkgvI%2B0ebp%2BvXW3jgiWJsCACTvWcCPHTFbJggdDJ2tNWG2%2B5VFgXw%2FB8BqTLD%2BKXWMztWRYb7sPh9RaR7h%2Fv%2B%2Bjgltt6%2FIIkB6Ud46XQdUVVkos9d6HiKeKmODKVVIwMwyun0LqiJR2lynaKKNVZE8vsrISgErFV121yKxosZCr5dnxkZTB4VSTGc7PT6f0O3QhCKAbw2Xor48gPG3d9wMa%2FFqIUX2E%2BSWOEnPaTa1ClT0Sa103JJ6y54m3pOvgMxwDLse6V6Ouk9H%2BWXeH4Lbl8jdYb3pDE3hkdLAp9Bh9WeopdIkq8LRw8sMTVToeYPFWQ%2FK%2F27AnpYJxQ9AvetVb6dffsVvUSA8T503AqQ8zhbIflPpoVBBqvdtW9QlFJ37E2mbhSgB7AZpESGundke03jMH%2BGjh49%2BDfXXI3nn79k95gWlLC3z7iscJXO0NVPyT1AWswXrJ2lxQ%2F%2BdHNIMRYvL1oAqljej2oCmdQ%2B1CkfdOqRecmPO0ZALO27%2FExsKbq33atr3AgkV5xZQNqnrC8%2B1aEWdfLzgC1U7daAcEmTo6w9X0TompPCiUtt%2FPT4z4DvG%2FZaRmMLbuxMIGOqUBPST8m%2FduUGYDIfy9MMfep7SqL2MSuR3O9CTKmiBhlnYjnUoJfPG8wYS6lVm%2FG%2BUBfEp%2F4N4L%2B1JcGzt%2FWwPXYdeT62bQnr8XXG1SG%2Bu%2Bi6YGCkjYjZNsAyb5I477e%2F5liQRX6wcSBp2LWsmo1jS2DE95CltvH9tbqRcULRKxzWEwCQD60PqLWMoJjOAG18TgSYInPyDEBwoWCl9GvFaaretNgH2i&X-Amz-Signature=eef90bda7c6ca7b0ea216e490cba238d7af27044b5203e40a872070af5453c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CY376H7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOQtqsXiBf9yAZ4hoWVypf2bxFirF4Jo4gvLa3M57QbAiEAuJ1A1rBbxGqbtUlzRuSCbQdNgOMzQlz49Tg5TsQ3v14q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAFgDIXdugqXPkOJSircAzGjEjdYWMGtjsfXb%2BNZS2U9G3QaJbTBiU7mSmzD5AQxPelRtMkgvI%2B0ebp%2BvXW3jgiWJsCACTvWcCPHTFbJggdDJ2tNWG2%2B5VFgXw%2FB8BqTLD%2BKXWMztWRYb7sPh9RaR7h%2Fv%2B%2Bjgltt6%2FIIkB6Ud46XQdUVVkos9d6HiKeKmODKVVIwMwyun0LqiJR2lynaKKNVZE8vsrISgErFV121yKxosZCr5dnxkZTB4VSTGc7PT6f0O3QhCKAbw2Xor48gPG3d9wMa%2FFqIUX2E%2BSWOEnPaTa1ClT0Sa103JJ6y54m3pOvgMxwDLse6V6Ouk9H%2BWXeH4Lbl8jdYb3pDE3hkdLAp9Bh9WeopdIkq8LRw8sMTVToeYPFWQ%2FK%2F27AnpYJxQ9AvetVb6dffsVvUSA8T503AqQ8zhbIflPpoVBBqvdtW9QlFJ37E2mbhSgB7AZpESGundke03jMH%2BGjh49%2BDfXXI3nn79k95gWlLC3z7iscJXO0NVPyT1AWswXrJ2lxQ%2F%2BdHNIMRYvL1oAqljej2oCmdQ%2B1CkfdOqRecmPO0ZALO27%2FExsKbq33atr3AgkV5xZQNqnrC8%2B1aEWdfLzgC1U7daAcEmTo6w9X0TompPCiUtt%2FPT4z4DvG%2FZaRmMLbuxMIGOqUBPST8m%2FduUGYDIfy9MMfep7SqL2MSuR3O9CTKmiBhlnYjnUoJfPG8wYS6lVm%2FG%2BUBfEp%2F4N4L%2B1JcGzt%2FWwPXYdeT62bQnr8XXG1SG%2Bu%2Bi6YGCkjYjZNsAyb5I477e%2F5liQRX6wcSBp2LWsmo1jS2DE95CltvH9tbqRcULRKxzWEwCQD60PqLWMoJjOAG18TgSYInPyDEBwoWCl9GvFaaretNgH2i&X-Amz-Signature=1cbfd9eab1640b01487c6ce5c5f7a3ea1d56e3642ae30f38c4a0db971334487e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CY376H7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOQtqsXiBf9yAZ4hoWVypf2bxFirF4Jo4gvLa3M57QbAiEAuJ1A1rBbxGqbtUlzRuSCbQdNgOMzQlz49Tg5TsQ3v14q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAFgDIXdugqXPkOJSircAzGjEjdYWMGtjsfXb%2BNZS2U9G3QaJbTBiU7mSmzD5AQxPelRtMkgvI%2B0ebp%2BvXW3jgiWJsCACTvWcCPHTFbJggdDJ2tNWG2%2B5VFgXw%2FB8BqTLD%2BKXWMztWRYb7sPh9RaR7h%2Fv%2B%2Bjgltt6%2FIIkB6Ud46XQdUVVkos9d6HiKeKmODKVVIwMwyun0LqiJR2lynaKKNVZE8vsrISgErFV121yKxosZCr5dnxkZTB4VSTGc7PT6f0O3QhCKAbw2Xor48gPG3d9wMa%2FFqIUX2E%2BSWOEnPaTa1ClT0Sa103JJ6y54m3pOvgMxwDLse6V6Ouk9H%2BWXeH4Lbl8jdYb3pDE3hkdLAp9Bh9WeopdIkq8LRw8sMTVToeYPFWQ%2FK%2F27AnpYJxQ9AvetVb6dffsVvUSA8T503AqQ8zhbIflPpoVBBqvdtW9QlFJ37E2mbhSgB7AZpESGundke03jMH%2BGjh49%2BDfXXI3nn79k95gWlLC3z7iscJXO0NVPyT1AWswXrJ2lxQ%2F%2BdHNIMRYvL1oAqljej2oCmdQ%2B1CkfdOqRecmPO0ZALO27%2FExsKbq33atr3AgkV5xZQNqnrC8%2B1aEWdfLzgC1U7daAcEmTo6w9X0TompPCiUtt%2FPT4z4DvG%2FZaRmMLbuxMIGOqUBPST8m%2FduUGYDIfy9MMfep7SqL2MSuR3O9CTKmiBhlnYjnUoJfPG8wYS6lVm%2FG%2BUBfEp%2F4N4L%2B1JcGzt%2FWwPXYdeT62bQnr8XXG1SG%2Bu%2Bi6YGCkjYjZNsAyb5I477e%2F5liQRX6wcSBp2LWsmo1jS2DE95CltvH9tbqRcULRKxzWEwCQD60PqLWMoJjOAG18TgSYInPyDEBwoWCl9GvFaaretNgH2i&X-Amz-Signature=b2c5d807e82e378933af89d60febb3065220783c390723a385786e30a01912c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CY376H7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOQtqsXiBf9yAZ4hoWVypf2bxFirF4Jo4gvLa3M57QbAiEAuJ1A1rBbxGqbtUlzRuSCbQdNgOMzQlz49Tg5TsQ3v14q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAFgDIXdugqXPkOJSircAzGjEjdYWMGtjsfXb%2BNZS2U9G3QaJbTBiU7mSmzD5AQxPelRtMkgvI%2B0ebp%2BvXW3jgiWJsCACTvWcCPHTFbJggdDJ2tNWG2%2B5VFgXw%2FB8BqTLD%2BKXWMztWRYb7sPh9RaR7h%2Fv%2B%2Bjgltt6%2FIIkB6Ud46XQdUVVkos9d6HiKeKmODKVVIwMwyun0LqiJR2lynaKKNVZE8vsrISgErFV121yKxosZCr5dnxkZTB4VSTGc7PT6f0O3QhCKAbw2Xor48gPG3d9wMa%2FFqIUX2E%2BSWOEnPaTa1ClT0Sa103JJ6y54m3pOvgMxwDLse6V6Ouk9H%2BWXeH4Lbl8jdYb3pDE3hkdLAp9Bh9WeopdIkq8LRw8sMTVToeYPFWQ%2FK%2F27AnpYJxQ9AvetVb6dffsVvUSA8T503AqQ8zhbIflPpoVBBqvdtW9QlFJ37E2mbhSgB7AZpESGundke03jMH%2BGjh49%2BDfXXI3nn79k95gWlLC3z7iscJXO0NVPyT1AWswXrJ2lxQ%2F%2BdHNIMRYvL1oAqljej2oCmdQ%2B1CkfdOqRecmPO0ZALO27%2FExsKbq33atr3AgkV5xZQNqnrC8%2B1aEWdfLzgC1U7daAcEmTo6w9X0TompPCiUtt%2FPT4z4DvG%2FZaRmMLbuxMIGOqUBPST8m%2FduUGYDIfy9MMfep7SqL2MSuR3O9CTKmiBhlnYjnUoJfPG8wYS6lVm%2FG%2BUBfEp%2F4N4L%2B1JcGzt%2FWwPXYdeT62bQnr8XXG1SG%2Bu%2Bi6YGCkjYjZNsAyb5I477e%2F5liQRX6wcSBp2LWsmo1jS2DE95CltvH9tbqRcULRKxzWEwCQD60PqLWMoJjOAG18TgSYInPyDEBwoWCl9GvFaaretNgH2i&X-Amz-Signature=f13de2b342d4de51dfb4883a8298a4abedab19adb573e7a11bf744192458cc4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CY376H7%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOQtqsXiBf9yAZ4hoWVypf2bxFirF4Jo4gvLa3M57QbAiEAuJ1A1rBbxGqbtUlzRuSCbQdNgOMzQlz49Tg5TsQ3v14q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAFgDIXdugqXPkOJSircAzGjEjdYWMGtjsfXb%2BNZS2U9G3QaJbTBiU7mSmzD5AQxPelRtMkgvI%2B0ebp%2BvXW3jgiWJsCACTvWcCPHTFbJggdDJ2tNWG2%2B5VFgXw%2FB8BqTLD%2BKXWMztWRYb7sPh9RaR7h%2Fv%2B%2Bjgltt6%2FIIkB6Ud46XQdUVVkos9d6HiKeKmODKVVIwMwyun0LqiJR2lynaKKNVZE8vsrISgErFV121yKxosZCr5dnxkZTB4VSTGc7PT6f0O3QhCKAbw2Xor48gPG3d9wMa%2FFqIUX2E%2BSWOEnPaTa1ClT0Sa103JJ6y54m3pOvgMxwDLse6V6Ouk9H%2BWXeH4Lbl8jdYb3pDE3hkdLAp9Bh9WeopdIkq8LRw8sMTVToeYPFWQ%2FK%2F27AnpYJxQ9AvetVb6dffsVvUSA8T503AqQ8zhbIflPpoVBBqvdtW9QlFJ37E2mbhSgB7AZpESGundke03jMH%2BGjh49%2BDfXXI3nn79k95gWlLC3z7iscJXO0NVPyT1AWswXrJ2lxQ%2F%2BdHNIMRYvL1oAqljej2oCmdQ%2B1CkfdOqRecmPO0ZALO27%2FExsKbq33atr3AgkV5xZQNqnrC8%2B1aEWdfLzgC1U7daAcEmTo6w9X0TompPCiUtt%2FPT4z4DvG%2FZaRmMLbuxMIGOqUBPST8m%2FduUGYDIfy9MMfep7SqL2MSuR3O9CTKmiBhlnYjnUoJfPG8wYS6lVm%2FG%2BUBfEp%2F4N4L%2B1JcGzt%2FWwPXYdeT62bQnr8XXG1SG%2Bu%2Bi6YGCkjYjZNsAyb5I477e%2F5liQRX6wcSBp2LWsmo1jS2DE95CltvH9tbqRcULRKxzWEwCQD60PqLWMoJjOAG18TgSYInPyDEBwoWCl9GvFaaretNgH2i&X-Amz-Signature=489359a82e6632a826e0a54312f490ee6ace894a906d361faff7d21e0e6720c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
