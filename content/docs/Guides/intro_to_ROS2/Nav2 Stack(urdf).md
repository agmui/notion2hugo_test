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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ7GBH2M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDbg7%2FVlXkXi2rVyQtwsfzDB9UH7LBOhGJzeqX8Rdb%2FzAIgbBDpjA3Tq1nj5cUyGmMtvFS1LgIyAPCJLSvfR8JQOBMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZiS4MTzwEV8Xv0mCrcA8BdvoZcA0RTIO7Ur2ew2j5oFgdyy3sTJlogZSK%2BKv%2FKv6KWSPJzkFTzWwRIZb5O%2FfA5qdd8CXoYAof0KAdfY%2FiJrHWNMamXTEt4NFUxFfIkt%2B%2BzEVHuLEfmZxgIt3JIgAefxGnR2%2FCAwB4C%2BkJKU%2BuutlKZvNFxmHJ7iD31tvMj%2F5Db9kv0CRLCbvxMsIMHXmqrk21GNDPD%2FpcTBuWKgLYVXgmBcI4ZIBtHaTZyudNUHgRMXLeBEFOqgoBuuKNP%2BUrJlIwNQuT3fe8Z%2FDWgriEFKeOEbI3iTkzua2g1ULYMCMjKu4Q%2FALEAXURKv594NbFNgGqyNsnhr1EBmNkSk%2FZtgc8A%2BTktTFwg1RlOQnJNArKoDQdpgX6bpmNdb9a0TDpJppgCxT3ElNbT7JPox33kDSC9hRCyc87SaFzV5QC1ckNMbUpd5ewjXr1g65lcOTlWOtSdy0Gm5Z9NuXCmhfZ2E4WeS%2FamlDkgumzdLzblQo4NKk18I5%2FEjjj%2FqJuwh1LSU%2FLU5wC9Bfz86q962imMIBwFxV%2F8k%2B0VyXfIH5PPKYAh6ai%2B8FekjJb6eXv6CcI0wIJnB7s4aJCkV00OcgUcdiTjaN6befq6wGVU75L8iLObtXdGEHT%2FS8XoMNua478GOqUBRN8jJLX1UfPB4VQBbfQemhVcw8myPt5vQN06zddVkQJmsXEFEIoWnE%2BdkOx0gSt8atOyVdZF2QQ5UqGWZichabTywLzmDfXcRfNT%2FxfmPBzxa1R6hHaWn4V1lpGgrVErK8gjMfopOEXkcfpxYHK3xpZzzpEH5%2FKTXv0KWsES9VKMIXmVZv4DUNUh2jWw5FFYzpuCSsNIAd6dtvgf%2FTJ2D3TbiW%2Fk&X-Amz-Signature=210c84e91796816401204daa32411670ddc10d8bba40134fdb3a4520931e54f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ7GBH2M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDbg7%2FVlXkXi2rVyQtwsfzDB9UH7LBOhGJzeqX8Rdb%2FzAIgbBDpjA3Tq1nj5cUyGmMtvFS1LgIyAPCJLSvfR8JQOBMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZiS4MTzwEV8Xv0mCrcA8BdvoZcA0RTIO7Ur2ew2j5oFgdyy3sTJlogZSK%2BKv%2FKv6KWSPJzkFTzWwRIZb5O%2FfA5qdd8CXoYAof0KAdfY%2FiJrHWNMamXTEt4NFUxFfIkt%2B%2BzEVHuLEfmZxgIt3JIgAefxGnR2%2FCAwB4C%2BkJKU%2BuutlKZvNFxmHJ7iD31tvMj%2F5Db9kv0CRLCbvxMsIMHXmqrk21GNDPD%2FpcTBuWKgLYVXgmBcI4ZIBtHaTZyudNUHgRMXLeBEFOqgoBuuKNP%2BUrJlIwNQuT3fe8Z%2FDWgriEFKeOEbI3iTkzua2g1ULYMCMjKu4Q%2FALEAXURKv594NbFNgGqyNsnhr1EBmNkSk%2FZtgc8A%2BTktTFwg1RlOQnJNArKoDQdpgX6bpmNdb9a0TDpJppgCxT3ElNbT7JPox33kDSC9hRCyc87SaFzV5QC1ckNMbUpd5ewjXr1g65lcOTlWOtSdy0Gm5Z9NuXCmhfZ2E4WeS%2FamlDkgumzdLzblQo4NKk18I5%2FEjjj%2FqJuwh1LSU%2FLU5wC9Bfz86q962imMIBwFxV%2F8k%2B0VyXfIH5PPKYAh6ai%2B8FekjJb6eXv6CcI0wIJnB7s4aJCkV00OcgUcdiTjaN6befq6wGVU75L8iLObtXdGEHT%2FS8XoMNua478GOqUBRN8jJLX1UfPB4VQBbfQemhVcw8myPt5vQN06zddVkQJmsXEFEIoWnE%2BdkOx0gSt8atOyVdZF2QQ5UqGWZichabTywLzmDfXcRfNT%2FxfmPBzxa1R6hHaWn4V1lpGgrVErK8gjMfopOEXkcfpxYHK3xpZzzpEH5%2FKTXv0KWsES9VKMIXmVZv4DUNUh2jWw5FFYzpuCSsNIAd6dtvgf%2FTJ2D3TbiW%2Fk&X-Amz-Signature=c302df9d912bd811502a107e21c4fb9eee1e87c5b9ee6c7e16a8407d0c8872e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ7GBH2M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDbg7%2FVlXkXi2rVyQtwsfzDB9UH7LBOhGJzeqX8Rdb%2FzAIgbBDpjA3Tq1nj5cUyGmMtvFS1LgIyAPCJLSvfR8JQOBMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZiS4MTzwEV8Xv0mCrcA8BdvoZcA0RTIO7Ur2ew2j5oFgdyy3sTJlogZSK%2BKv%2FKv6KWSPJzkFTzWwRIZb5O%2FfA5qdd8CXoYAof0KAdfY%2FiJrHWNMamXTEt4NFUxFfIkt%2B%2BzEVHuLEfmZxgIt3JIgAefxGnR2%2FCAwB4C%2BkJKU%2BuutlKZvNFxmHJ7iD31tvMj%2F5Db9kv0CRLCbvxMsIMHXmqrk21GNDPD%2FpcTBuWKgLYVXgmBcI4ZIBtHaTZyudNUHgRMXLeBEFOqgoBuuKNP%2BUrJlIwNQuT3fe8Z%2FDWgriEFKeOEbI3iTkzua2g1ULYMCMjKu4Q%2FALEAXURKv594NbFNgGqyNsnhr1EBmNkSk%2FZtgc8A%2BTktTFwg1RlOQnJNArKoDQdpgX6bpmNdb9a0TDpJppgCxT3ElNbT7JPox33kDSC9hRCyc87SaFzV5QC1ckNMbUpd5ewjXr1g65lcOTlWOtSdy0Gm5Z9NuXCmhfZ2E4WeS%2FamlDkgumzdLzblQo4NKk18I5%2FEjjj%2FqJuwh1LSU%2FLU5wC9Bfz86q962imMIBwFxV%2F8k%2B0VyXfIH5PPKYAh6ai%2B8FekjJb6eXv6CcI0wIJnB7s4aJCkV00OcgUcdiTjaN6befq6wGVU75L8iLObtXdGEHT%2FS8XoMNua478GOqUBRN8jJLX1UfPB4VQBbfQemhVcw8myPt5vQN06zddVkQJmsXEFEIoWnE%2BdkOx0gSt8atOyVdZF2QQ5UqGWZichabTywLzmDfXcRfNT%2FxfmPBzxa1R6hHaWn4V1lpGgrVErK8gjMfopOEXkcfpxYHK3xpZzzpEH5%2FKTXv0KWsES9VKMIXmVZv4DUNUh2jWw5FFYzpuCSsNIAd6dtvgf%2FTJ2D3TbiW%2Fk&X-Amz-Signature=ecbf649728db01e42c2b38a9040dfd3a8d5788b1b42bad419f1ca52dd9e3a603&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ7GBH2M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDbg7%2FVlXkXi2rVyQtwsfzDB9UH7LBOhGJzeqX8Rdb%2FzAIgbBDpjA3Tq1nj5cUyGmMtvFS1LgIyAPCJLSvfR8JQOBMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZiS4MTzwEV8Xv0mCrcA8BdvoZcA0RTIO7Ur2ew2j5oFgdyy3sTJlogZSK%2BKv%2FKv6KWSPJzkFTzWwRIZb5O%2FfA5qdd8CXoYAof0KAdfY%2FiJrHWNMamXTEt4NFUxFfIkt%2B%2BzEVHuLEfmZxgIt3JIgAefxGnR2%2FCAwB4C%2BkJKU%2BuutlKZvNFxmHJ7iD31tvMj%2F5Db9kv0CRLCbvxMsIMHXmqrk21GNDPD%2FpcTBuWKgLYVXgmBcI4ZIBtHaTZyudNUHgRMXLeBEFOqgoBuuKNP%2BUrJlIwNQuT3fe8Z%2FDWgriEFKeOEbI3iTkzua2g1ULYMCMjKu4Q%2FALEAXURKv594NbFNgGqyNsnhr1EBmNkSk%2FZtgc8A%2BTktTFwg1RlOQnJNArKoDQdpgX6bpmNdb9a0TDpJppgCxT3ElNbT7JPox33kDSC9hRCyc87SaFzV5QC1ckNMbUpd5ewjXr1g65lcOTlWOtSdy0Gm5Z9NuXCmhfZ2E4WeS%2FamlDkgumzdLzblQo4NKk18I5%2FEjjj%2FqJuwh1LSU%2FLU5wC9Bfz86q962imMIBwFxV%2F8k%2B0VyXfIH5PPKYAh6ai%2B8FekjJb6eXv6CcI0wIJnB7s4aJCkV00OcgUcdiTjaN6befq6wGVU75L8iLObtXdGEHT%2FS8XoMNua478GOqUBRN8jJLX1UfPB4VQBbfQemhVcw8myPt5vQN06zddVkQJmsXEFEIoWnE%2BdkOx0gSt8atOyVdZF2QQ5UqGWZichabTywLzmDfXcRfNT%2FxfmPBzxa1R6hHaWn4V1lpGgrVErK8gjMfopOEXkcfpxYHK3xpZzzpEH5%2FKTXv0KWsES9VKMIXmVZv4DUNUh2jWw5FFYzpuCSsNIAd6dtvgf%2FTJ2D3TbiW%2Fk&X-Amz-Signature=944ff47acd588c207687d97d453c906a87f6a225ae80f54a6ab1d881a34c64e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ7GBH2M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDbg7%2FVlXkXi2rVyQtwsfzDB9UH7LBOhGJzeqX8Rdb%2FzAIgbBDpjA3Tq1nj5cUyGmMtvFS1LgIyAPCJLSvfR8JQOBMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZiS4MTzwEV8Xv0mCrcA8BdvoZcA0RTIO7Ur2ew2j5oFgdyy3sTJlogZSK%2BKv%2FKv6KWSPJzkFTzWwRIZb5O%2FfA5qdd8CXoYAof0KAdfY%2FiJrHWNMamXTEt4NFUxFfIkt%2B%2BzEVHuLEfmZxgIt3JIgAefxGnR2%2FCAwB4C%2BkJKU%2BuutlKZvNFxmHJ7iD31tvMj%2F5Db9kv0CRLCbvxMsIMHXmqrk21GNDPD%2FpcTBuWKgLYVXgmBcI4ZIBtHaTZyudNUHgRMXLeBEFOqgoBuuKNP%2BUrJlIwNQuT3fe8Z%2FDWgriEFKeOEbI3iTkzua2g1ULYMCMjKu4Q%2FALEAXURKv594NbFNgGqyNsnhr1EBmNkSk%2FZtgc8A%2BTktTFwg1RlOQnJNArKoDQdpgX6bpmNdb9a0TDpJppgCxT3ElNbT7JPox33kDSC9hRCyc87SaFzV5QC1ckNMbUpd5ewjXr1g65lcOTlWOtSdy0Gm5Z9NuXCmhfZ2E4WeS%2FamlDkgumzdLzblQo4NKk18I5%2FEjjj%2FqJuwh1LSU%2FLU5wC9Bfz86q962imMIBwFxV%2F8k%2B0VyXfIH5PPKYAh6ai%2B8FekjJb6eXv6CcI0wIJnB7s4aJCkV00OcgUcdiTjaN6befq6wGVU75L8iLObtXdGEHT%2FS8XoMNua478GOqUBRN8jJLX1UfPB4VQBbfQemhVcw8myPt5vQN06zddVkQJmsXEFEIoWnE%2BdkOx0gSt8atOyVdZF2QQ5UqGWZichabTywLzmDfXcRfNT%2FxfmPBzxa1R6hHaWn4V1lpGgrVErK8gjMfopOEXkcfpxYHK3xpZzzpEH5%2FKTXv0KWsES9VKMIXmVZv4DUNUh2jWw5FFYzpuCSsNIAd6dtvgf%2FTJ2D3TbiW%2Fk&X-Amz-Signature=eb8a1c7643cd5d6ca007e0723ff8bbcd11826780c6e9af0cebef4fe52b935617&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ7GBH2M%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T081151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDbg7%2FVlXkXi2rVyQtwsfzDB9UH7LBOhGJzeqX8Rdb%2FzAIgbBDpjA3Tq1nj5cUyGmMtvFS1LgIyAPCJLSvfR8JQOBMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZiS4MTzwEV8Xv0mCrcA8BdvoZcA0RTIO7Ur2ew2j5oFgdyy3sTJlogZSK%2BKv%2FKv6KWSPJzkFTzWwRIZb5O%2FfA5qdd8CXoYAof0KAdfY%2FiJrHWNMamXTEt4NFUxFfIkt%2B%2BzEVHuLEfmZxgIt3JIgAefxGnR2%2FCAwB4C%2BkJKU%2BuutlKZvNFxmHJ7iD31tvMj%2F5Db9kv0CRLCbvxMsIMHXmqrk21GNDPD%2FpcTBuWKgLYVXgmBcI4ZIBtHaTZyudNUHgRMXLeBEFOqgoBuuKNP%2BUrJlIwNQuT3fe8Z%2FDWgriEFKeOEbI3iTkzua2g1ULYMCMjKu4Q%2FALEAXURKv594NbFNgGqyNsnhr1EBmNkSk%2FZtgc8A%2BTktTFwg1RlOQnJNArKoDQdpgX6bpmNdb9a0TDpJppgCxT3ElNbT7JPox33kDSC9hRCyc87SaFzV5QC1ckNMbUpd5ewjXr1g65lcOTlWOtSdy0Gm5Z9NuXCmhfZ2E4WeS%2FamlDkgumzdLzblQo4NKk18I5%2FEjjj%2FqJuwh1LSU%2FLU5wC9Bfz86q962imMIBwFxV%2F8k%2B0VyXfIH5PPKYAh6ai%2B8FekjJb6eXv6CcI0wIJnB7s4aJCkV00OcgUcdiTjaN6befq6wGVU75L8iLObtXdGEHT%2FS8XoMNua478GOqUBRN8jJLX1UfPB4VQBbfQemhVcw8myPt5vQN06zddVkQJmsXEFEIoWnE%2BdkOx0gSt8atOyVdZF2QQ5UqGWZichabTywLzmDfXcRfNT%2FxfmPBzxa1R6hHaWn4V1lpGgrVErK8gjMfopOEXkcfpxYHK3xpZzzpEH5%2FKTXv0KWsES9VKMIXmVZv4DUNUh2jWw5FFYzpuCSsNIAd6dtvgf%2FTJ2D3TbiW%2Fk&X-Amz-Signature=f6ca1986606f7d3936adff53c9bdc51358e906d75798229327436b7ab258c9a3&X-Amz-SignedHeaders=host&x-id=GetObject)
