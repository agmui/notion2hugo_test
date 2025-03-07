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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H23KQZA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKP87U%2BR5zGYkUEn%2Bct0Rk4cvycreKl5y%2F7CR5WxXUagIhAMZ%2FLKPMXv8t9BMZS8UVygW0NtaTyA9P6SNTPKAMmU%2FdKv8DCD0QABoMNjM3NDIzMTgzODA1IgzsxxbIboiX2mtPpSMq3AM84nQuOIOAvLXM1NyaaFGja83Q0FFzzkUzpPnS4AI2eE9pRGOEmO0vJ7jd9U2PK6Sa%2FsmrOpnw%2BR%2B%2FWreSsQb3gHEaoR%2BXNJS7Mk4CkjTiqpLCF3bf0MNI%2BAZGAReYW87BuCr5iQkTkr29pLV7GFB%2FpdzCBzAct3x7xNVOoMR6Ao9gwUplskkwfxfJWGQWnL%2FCjqfbkv20DvySbGTdoNVl%2BTPeKzy5xFLqbAuwIn7jKzIkvI1%2BdYeRATuXBHb3nxB1hBessP9IYFEv7LRCcceSOuXgOEy4H3xPyaK56QCKhPGxIvltXP7YptJ4JGrUDbL42QhoxhhT6R%2FI6D8w8mZJAsCYCEdL0EYI4pK25jhYSt4ejhdtJ5eGYKM89k5uvq%2FBYDrHJPrrDAyRMQSfSuEa%2BmMOj0KF3oksUX3rQ8oxMieAI7YGa%2F1AVAP045%2BWL2UXAegTecIbG6%2BKRKxknFEtrf5oVz2x8WIC%2BGs2sdg1hTExmhC5abQRP8nJHk2cTof0CWDkL%2FTK5P6GbYv1HcKiPqvBv6DdaYjofZVRGEkQZ7aX8EXIWyzQORtP%2FSluj4MW2rN%2F%2Fg4W0PM6AI29gw9c2QTyH29q8PATTH22lDlC%2BOo61l5VoLo1He79WzDj5qm%2BBjqkAXDIEyQG9Cx1I3w5eYXt0kxdLOMPwo71GHySAuCmp4gyIRSg%2FKsRHCC5A9%2BTrEnd1POWBA0fBXj9mqbekwseCxKRjRQ6rLfypJFBF3VmDUICVZVg%2B51xRS9aoYXYfmqjSpLlxgx1Oe0eJp74IWt26IGDapo8R3OshI7V4l0Oqxms%2FyRBOw%2FnEluQNcJc9ohAA290wMNe2nm8ZE4mda2hhs5CQkIW&X-Amz-Signature=1ce07095e04ffa3d8df9e1273c77c152c05d6dbd130898b712f8b937653a6ee4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H23KQZA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKP87U%2BR5zGYkUEn%2Bct0Rk4cvycreKl5y%2F7CR5WxXUagIhAMZ%2FLKPMXv8t9BMZS8UVygW0NtaTyA9P6SNTPKAMmU%2FdKv8DCD0QABoMNjM3NDIzMTgzODA1IgzsxxbIboiX2mtPpSMq3AM84nQuOIOAvLXM1NyaaFGja83Q0FFzzkUzpPnS4AI2eE9pRGOEmO0vJ7jd9U2PK6Sa%2FsmrOpnw%2BR%2B%2FWreSsQb3gHEaoR%2BXNJS7Mk4CkjTiqpLCF3bf0MNI%2BAZGAReYW87BuCr5iQkTkr29pLV7GFB%2FpdzCBzAct3x7xNVOoMR6Ao9gwUplskkwfxfJWGQWnL%2FCjqfbkv20DvySbGTdoNVl%2BTPeKzy5xFLqbAuwIn7jKzIkvI1%2BdYeRATuXBHb3nxB1hBessP9IYFEv7LRCcceSOuXgOEy4H3xPyaK56QCKhPGxIvltXP7YptJ4JGrUDbL42QhoxhhT6R%2FI6D8w8mZJAsCYCEdL0EYI4pK25jhYSt4ejhdtJ5eGYKM89k5uvq%2FBYDrHJPrrDAyRMQSfSuEa%2BmMOj0KF3oksUX3rQ8oxMieAI7YGa%2F1AVAP045%2BWL2UXAegTecIbG6%2BKRKxknFEtrf5oVz2x8WIC%2BGs2sdg1hTExmhC5abQRP8nJHk2cTof0CWDkL%2FTK5P6GbYv1HcKiPqvBv6DdaYjofZVRGEkQZ7aX8EXIWyzQORtP%2FSluj4MW2rN%2F%2Fg4W0PM6AI29gw9c2QTyH29q8PATTH22lDlC%2BOo61l5VoLo1He79WzDj5qm%2BBjqkAXDIEyQG9Cx1I3w5eYXt0kxdLOMPwo71GHySAuCmp4gyIRSg%2FKsRHCC5A9%2BTrEnd1POWBA0fBXj9mqbekwseCxKRjRQ6rLfypJFBF3VmDUICVZVg%2B51xRS9aoYXYfmqjSpLlxgx1Oe0eJp74IWt26IGDapo8R3OshI7V4l0Oqxms%2FyRBOw%2FnEluQNcJc9ohAA290wMNe2nm8ZE4mda2hhs5CQkIW&X-Amz-Signature=71474d2fd4079a9228ed87a502420891fd48e965aa0235e82696075639e1e070&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H23KQZA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKP87U%2BR5zGYkUEn%2Bct0Rk4cvycreKl5y%2F7CR5WxXUagIhAMZ%2FLKPMXv8t9BMZS8UVygW0NtaTyA9P6SNTPKAMmU%2FdKv8DCD0QABoMNjM3NDIzMTgzODA1IgzsxxbIboiX2mtPpSMq3AM84nQuOIOAvLXM1NyaaFGja83Q0FFzzkUzpPnS4AI2eE9pRGOEmO0vJ7jd9U2PK6Sa%2FsmrOpnw%2BR%2B%2FWreSsQb3gHEaoR%2BXNJS7Mk4CkjTiqpLCF3bf0MNI%2BAZGAReYW87BuCr5iQkTkr29pLV7GFB%2FpdzCBzAct3x7xNVOoMR6Ao9gwUplskkwfxfJWGQWnL%2FCjqfbkv20DvySbGTdoNVl%2BTPeKzy5xFLqbAuwIn7jKzIkvI1%2BdYeRATuXBHb3nxB1hBessP9IYFEv7LRCcceSOuXgOEy4H3xPyaK56QCKhPGxIvltXP7YptJ4JGrUDbL42QhoxhhT6R%2FI6D8w8mZJAsCYCEdL0EYI4pK25jhYSt4ejhdtJ5eGYKM89k5uvq%2FBYDrHJPrrDAyRMQSfSuEa%2BmMOj0KF3oksUX3rQ8oxMieAI7YGa%2F1AVAP045%2BWL2UXAegTecIbG6%2BKRKxknFEtrf5oVz2x8WIC%2BGs2sdg1hTExmhC5abQRP8nJHk2cTof0CWDkL%2FTK5P6GbYv1HcKiPqvBv6DdaYjofZVRGEkQZ7aX8EXIWyzQORtP%2FSluj4MW2rN%2F%2Fg4W0PM6AI29gw9c2QTyH29q8PATTH22lDlC%2BOo61l5VoLo1He79WzDj5qm%2BBjqkAXDIEyQG9Cx1I3w5eYXt0kxdLOMPwo71GHySAuCmp4gyIRSg%2FKsRHCC5A9%2BTrEnd1POWBA0fBXj9mqbekwseCxKRjRQ6rLfypJFBF3VmDUICVZVg%2B51xRS9aoYXYfmqjSpLlxgx1Oe0eJp74IWt26IGDapo8R3OshI7V4l0Oqxms%2FyRBOw%2FnEluQNcJc9ohAA290wMNe2nm8ZE4mda2hhs5CQkIW&X-Amz-Signature=b88fd449b41c99145de60de701b63d2adf08ccad17e63e0018b4b2b6f60b9856&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H23KQZA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKP87U%2BR5zGYkUEn%2Bct0Rk4cvycreKl5y%2F7CR5WxXUagIhAMZ%2FLKPMXv8t9BMZS8UVygW0NtaTyA9P6SNTPKAMmU%2FdKv8DCD0QABoMNjM3NDIzMTgzODA1IgzsxxbIboiX2mtPpSMq3AM84nQuOIOAvLXM1NyaaFGja83Q0FFzzkUzpPnS4AI2eE9pRGOEmO0vJ7jd9U2PK6Sa%2FsmrOpnw%2BR%2B%2FWreSsQb3gHEaoR%2BXNJS7Mk4CkjTiqpLCF3bf0MNI%2BAZGAReYW87BuCr5iQkTkr29pLV7GFB%2FpdzCBzAct3x7xNVOoMR6Ao9gwUplskkwfxfJWGQWnL%2FCjqfbkv20DvySbGTdoNVl%2BTPeKzy5xFLqbAuwIn7jKzIkvI1%2BdYeRATuXBHb3nxB1hBessP9IYFEv7LRCcceSOuXgOEy4H3xPyaK56QCKhPGxIvltXP7YptJ4JGrUDbL42QhoxhhT6R%2FI6D8w8mZJAsCYCEdL0EYI4pK25jhYSt4ejhdtJ5eGYKM89k5uvq%2FBYDrHJPrrDAyRMQSfSuEa%2BmMOj0KF3oksUX3rQ8oxMieAI7YGa%2F1AVAP045%2BWL2UXAegTecIbG6%2BKRKxknFEtrf5oVz2x8WIC%2BGs2sdg1hTExmhC5abQRP8nJHk2cTof0CWDkL%2FTK5P6GbYv1HcKiPqvBv6DdaYjofZVRGEkQZ7aX8EXIWyzQORtP%2FSluj4MW2rN%2F%2Fg4W0PM6AI29gw9c2QTyH29q8PATTH22lDlC%2BOo61l5VoLo1He79WzDj5qm%2BBjqkAXDIEyQG9Cx1I3w5eYXt0kxdLOMPwo71GHySAuCmp4gyIRSg%2FKsRHCC5A9%2BTrEnd1POWBA0fBXj9mqbekwseCxKRjRQ6rLfypJFBF3VmDUICVZVg%2B51xRS9aoYXYfmqjSpLlxgx1Oe0eJp74IWt26IGDapo8R3OshI7V4l0Oqxms%2FyRBOw%2FnEluQNcJc9ohAA290wMNe2nm8ZE4mda2hhs5CQkIW&X-Amz-Signature=a9273549bdb183087e1ea9cc3d40df81f82aa62e53cbde658d065afe454335b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H23KQZA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKP87U%2BR5zGYkUEn%2Bct0Rk4cvycreKl5y%2F7CR5WxXUagIhAMZ%2FLKPMXv8t9BMZS8UVygW0NtaTyA9P6SNTPKAMmU%2FdKv8DCD0QABoMNjM3NDIzMTgzODA1IgzsxxbIboiX2mtPpSMq3AM84nQuOIOAvLXM1NyaaFGja83Q0FFzzkUzpPnS4AI2eE9pRGOEmO0vJ7jd9U2PK6Sa%2FsmrOpnw%2BR%2B%2FWreSsQb3gHEaoR%2BXNJS7Mk4CkjTiqpLCF3bf0MNI%2BAZGAReYW87BuCr5iQkTkr29pLV7GFB%2FpdzCBzAct3x7xNVOoMR6Ao9gwUplskkwfxfJWGQWnL%2FCjqfbkv20DvySbGTdoNVl%2BTPeKzy5xFLqbAuwIn7jKzIkvI1%2BdYeRATuXBHb3nxB1hBessP9IYFEv7LRCcceSOuXgOEy4H3xPyaK56QCKhPGxIvltXP7YptJ4JGrUDbL42QhoxhhT6R%2FI6D8w8mZJAsCYCEdL0EYI4pK25jhYSt4ejhdtJ5eGYKM89k5uvq%2FBYDrHJPrrDAyRMQSfSuEa%2BmMOj0KF3oksUX3rQ8oxMieAI7YGa%2F1AVAP045%2BWL2UXAegTecIbG6%2BKRKxknFEtrf5oVz2x8WIC%2BGs2sdg1hTExmhC5abQRP8nJHk2cTof0CWDkL%2FTK5P6GbYv1HcKiPqvBv6DdaYjofZVRGEkQZ7aX8EXIWyzQORtP%2FSluj4MW2rN%2F%2Fg4W0PM6AI29gw9c2QTyH29q8PATTH22lDlC%2BOo61l5VoLo1He79WzDj5qm%2BBjqkAXDIEyQG9Cx1I3w5eYXt0kxdLOMPwo71GHySAuCmp4gyIRSg%2FKsRHCC5A9%2BTrEnd1POWBA0fBXj9mqbekwseCxKRjRQ6rLfypJFBF3VmDUICVZVg%2B51xRS9aoYXYfmqjSpLlxgx1Oe0eJp74IWt26IGDapo8R3OshI7V4l0Oqxms%2FyRBOw%2FnEluQNcJc9ohAA290wMNe2nm8ZE4mda2hhs5CQkIW&X-Amz-Signature=0af5c6eec3103bc9f2a50bab57dc9920b1a63350c0eca3c7fb6f21db4f217632&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H23KQZA%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKP87U%2BR5zGYkUEn%2Bct0Rk4cvycreKl5y%2F7CR5WxXUagIhAMZ%2FLKPMXv8t9BMZS8UVygW0NtaTyA9P6SNTPKAMmU%2FdKv8DCD0QABoMNjM3NDIzMTgzODA1IgzsxxbIboiX2mtPpSMq3AM84nQuOIOAvLXM1NyaaFGja83Q0FFzzkUzpPnS4AI2eE9pRGOEmO0vJ7jd9U2PK6Sa%2FsmrOpnw%2BR%2B%2FWreSsQb3gHEaoR%2BXNJS7Mk4CkjTiqpLCF3bf0MNI%2BAZGAReYW87BuCr5iQkTkr29pLV7GFB%2FpdzCBzAct3x7xNVOoMR6Ao9gwUplskkwfxfJWGQWnL%2FCjqfbkv20DvySbGTdoNVl%2BTPeKzy5xFLqbAuwIn7jKzIkvI1%2BdYeRATuXBHb3nxB1hBessP9IYFEv7LRCcceSOuXgOEy4H3xPyaK56QCKhPGxIvltXP7YptJ4JGrUDbL42QhoxhhT6R%2FI6D8w8mZJAsCYCEdL0EYI4pK25jhYSt4ejhdtJ5eGYKM89k5uvq%2FBYDrHJPrrDAyRMQSfSuEa%2BmMOj0KF3oksUX3rQ8oxMieAI7YGa%2F1AVAP045%2BWL2UXAegTecIbG6%2BKRKxknFEtrf5oVz2x8WIC%2BGs2sdg1hTExmhC5abQRP8nJHk2cTof0CWDkL%2FTK5P6GbYv1HcKiPqvBv6DdaYjofZVRGEkQZ7aX8EXIWyzQORtP%2FSluj4MW2rN%2F%2Fg4W0PM6AI29gw9c2QTyH29q8PATTH22lDlC%2BOo61l5VoLo1He79WzDj5qm%2BBjqkAXDIEyQG9Cx1I3w5eYXt0kxdLOMPwo71GHySAuCmp4gyIRSg%2FKsRHCC5A9%2BTrEnd1POWBA0fBXj9mqbekwseCxKRjRQ6rLfypJFBF3VmDUICVZVg%2B51xRS9aoYXYfmqjSpLlxgx1Oe0eJp74IWt26IGDapo8R3OshI7V4l0Oqxms%2FyRBOw%2FnEluQNcJc9ohAA290wMNe2nm8ZE4mda2hhs5CQkIW&X-Amz-Signature=7498b5c6ee2a32aaf448cf1f0b8dfeb600c8bbb6e488ab1b1656d0d55acfee4a&X-Amz-SignedHeaders=host&x-id=GetObject)
