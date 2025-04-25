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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K2R2OUN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZc%2Bttko5Fvv5mz8J3mc7nDubu%2FI37QyPQzClsHeX8OAiBbcfP3K32UKEJ4dGjvYdjXkfe6OfNBs2OuBNpdmp%2F2ySr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM%2FpOm9MzbQxZOOHJBKtwDT0sck0Yms%2FGJ7OgPgxT2AtENhT3tpAs4Zom3vQEDnhqrwuhH1tNoE3ncUiXf1wsKztuTomX3ctwBYtigUkFdG0DdvcxmmvqQyJT%2FOZ%2Fz5e2OuxPtmtet0zAlNsRcu4Qs%2BlJ%2BKPeZ23yoWPcNmA8A1Xunn%2BuLYVFwKw%2BuWZo989TS5GoIL6KX4E4z%2BUq0pbqw9JEz9vl0pnsvK6awcAYzKbcmcbhv09z%2BiYgxqJQOICyWfHM00O4qdzCdhSUagZoZwMHb3xtgbnTY5E02YCUdQAOYYuslHcj5mlq%2FE%2FoCaLofOkSDElvWaohGxiS4RA%2BctFNQOOb%2B%2B6e5XuNmpVPnSY%2B0KUzZCx4F8Dz3I1IRvx%2FytHWEPvhYxwGoWgNylu%2FZ1lGggcdB3iSSW2Aw3OGqojHv2kxWrjl4zj27W3dd0L1cUR9q3p9DR72r8hV6bpbzMrxiXnPXXzYXi4KoEa7oD%2FaRwDue445irU%2BMi%2BY5GzQC85je7oP4SuBJpPPP%2BLSQOpWhQYiAGUeACFLcw6xzwm2qSZebvCEF%2FWY935OutcMsm4itvs1jZr5INMJDS2i057VAVC1SieZUPMy829wFovqSMYXn3OoFcHSJ1IzeOyc%2B%2B5tDdG66WSnRnocwgvqrwAY6pgHIfqJGX5%2BdIySADdJh4wK9T8kIVO9zI4SFXzKYrQTDYphM7UhWyJ7btn8ns5gaLxND40X5ki3hb1f9HFgCrrvwKO37xezjj1FgK8rAebd2CBZwGiimje%2BKTfhkUJJ7d61InlsW9vLS30ZXcmOkuEQlaRymFrrYZAlx8D9Kq%2Fdmj8OyXNIWR17KCui9zJDKb%2FfwC8jm7PMiXR9rfMCN6cs%2BxgSFP37f&X-Amz-Signature=70f2cda1ad05c546bb9fcffc32cc8f4ca8c9a9a02b0f9b4f86861bf8efae200f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K2R2OUN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZc%2Bttko5Fvv5mz8J3mc7nDubu%2FI37QyPQzClsHeX8OAiBbcfP3K32UKEJ4dGjvYdjXkfe6OfNBs2OuBNpdmp%2F2ySr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM%2FpOm9MzbQxZOOHJBKtwDT0sck0Yms%2FGJ7OgPgxT2AtENhT3tpAs4Zom3vQEDnhqrwuhH1tNoE3ncUiXf1wsKztuTomX3ctwBYtigUkFdG0DdvcxmmvqQyJT%2FOZ%2Fz5e2OuxPtmtet0zAlNsRcu4Qs%2BlJ%2BKPeZ23yoWPcNmA8A1Xunn%2BuLYVFwKw%2BuWZo989TS5GoIL6KX4E4z%2BUq0pbqw9JEz9vl0pnsvK6awcAYzKbcmcbhv09z%2BiYgxqJQOICyWfHM00O4qdzCdhSUagZoZwMHb3xtgbnTY5E02YCUdQAOYYuslHcj5mlq%2FE%2FoCaLofOkSDElvWaohGxiS4RA%2BctFNQOOb%2B%2B6e5XuNmpVPnSY%2B0KUzZCx4F8Dz3I1IRvx%2FytHWEPvhYxwGoWgNylu%2FZ1lGggcdB3iSSW2Aw3OGqojHv2kxWrjl4zj27W3dd0L1cUR9q3p9DR72r8hV6bpbzMrxiXnPXXzYXi4KoEa7oD%2FaRwDue445irU%2BMi%2BY5GzQC85je7oP4SuBJpPPP%2BLSQOpWhQYiAGUeACFLcw6xzwm2qSZebvCEF%2FWY935OutcMsm4itvs1jZr5INMJDS2i057VAVC1SieZUPMy829wFovqSMYXn3OoFcHSJ1IzeOyc%2B%2B5tDdG66WSnRnocwgvqrwAY6pgHIfqJGX5%2BdIySADdJh4wK9T8kIVO9zI4SFXzKYrQTDYphM7UhWyJ7btn8ns5gaLxND40X5ki3hb1f9HFgCrrvwKO37xezjj1FgK8rAebd2CBZwGiimje%2BKTfhkUJJ7d61InlsW9vLS30ZXcmOkuEQlaRymFrrYZAlx8D9Kq%2Fdmj8OyXNIWR17KCui9zJDKb%2FfwC8jm7PMiXR9rfMCN6cs%2BxgSFP37f&X-Amz-Signature=0227060e0d884b46eb580c4fc52bf5b958b1cd00376e9e7a21637933cd646a84&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K2R2OUN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZc%2Bttko5Fvv5mz8J3mc7nDubu%2FI37QyPQzClsHeX8OAiBbcfP3K32UKEJ4dGjvYdjXkfe6OfNBs2OuBNpdmp%2F2ySr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM%2FpOm9MzbQxZOOHJBKtwDT0sck0Yms%2FGJ7OgPgxT2AtENhT3tpAs4Zom3vQEDnhqrwuhH1tNoE3ncUiXf1wsKztuTomX3ctwBYtigUkFdG0DdvcxmmvqQyJT%2FOZ%2Fz5e2OuxPtmtet0zAlNsRcu4Qs%2BlJ%2BKPeZ23yoWPcNmA8A1Xunn%2BuLYVFwKw%2BuWZo989TS5GoIL6KX4E4z%2BUq0pbqw9JEz9vl0pnsvK6awcAYzKbcmcbhv09z%2BiYgxqJQOICyWfHM00O4qdzCdhSUagZoZwMHb3xtgbnTY5E02YCUdQAOYYuslHcj5mlq%2FE%2FoCaLofOkSDElvWaohGxiS4RA%2BctFNQOOb%2B%2B6e5XuNmpVPnSY%2B0KUzZCx4F8Dz3I1IRvx%2FytHWEPvhYxwGoWgNylu%2FZ1lGggcdB3iSSW2Aw3OGqojHv2kxWrjl4zj27W3dd0L1cUR9q3p9DR72r8hV6bpbzMrxiXnPXXzYXi4KoEa7oD%2FaRwDue445irU%2BMi%2BY5GzQC85je7oP4SuBJpPPP%2BLSQOpWhQYiAGUeACFLcw6xzwm2qSZebvCEF%2FWY935OutcMsm4itvs1jZr5INMJDS2i057VAVC1SieZUPMy829wFovqSMYXn3OoFcHSJ1IzeOyc%2B%2B5tDdG66WSnRnocwgvqrwAY6pgHIfqJGX5%2BdIySADdJh4wK9T8kIVO9zI4SFXzKYrQTDYphM7UhWyJ7btn8ns5gaLxND40X5ki3hb1f9HFgCrrvwKO37xezjj1FgK8rAebd2CBZwGiimje%2BKTfhkUJJ7d61InlsW9vLS30ZXcmOkuEQlaRymFrrYZAlx8D9Kq%2Fdmj8OyXNIWR17KCui9zJDKb%2FfwC8jm7PMiXR9rfMCN6cs%2BxgSFP37f&X-Amz-Signature=872fadc14d89091d279631ae8b68ee6d65d089a19e09781cb96a2dd148160a7c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K2R2OUN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZc%2Bttko5Fvv5mz8J3mc7nDubu%2FI37QyPQzClsHeX8OAiBbcfP3K32UKEJ4dGjvYdjXkfe6OfNBs2OuBNpdmp%2F2ySr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM%2FpOm9MzbQxZOOHJBKtwDT0sck0Yms%2FGJ7OgPgxT2AtENhT3tpAs4Zom3vQEDnhqrwuhH1tNoE3ncUiXf1wsKztuTomX3ctwBYtigUkFdG0DdvcxmmvqQyJT%2FOZ%2Fz5e2OuxPtmtet0zAlNsRcu4Qs%2BlJ%2BKPeZ23yoWPcNmA8A1Xunn%2BuLYVFwKw%2BuWZo989TS5GoIL6KX4E4z%2BUq0pbqw9JEz9vl0pnsvK6awcAYzKbcmcbhv09z%2BiYgxqJQOICyWfHM00O4qdzCdhSUagZoZwMHb3xtgbnTY5E02YCUdQAOYYuslHcj5mlq%2FE%2FoCaLofOkSDElvWaohGxiS4RA%2BctFNQOOb%2B%2B6e5XuNmpVPnSY%2B0KUzZCx4F8Dz3I1IRvx%2FytHWEPvhYxwGoWgNylu%2FZ1lGggcdB3iSSW2Aw3OGqojHv2kxWrjl4zj27W3dd0L1cUR9q3p9DR72r8hV6bpbzMrxiXnPXXzYXi4KoEa7oD%2FaRwDue445irU%2BMi%2BY5GzQC85je7oP4SuBJpPPP%2BLSQOpWhQYiAGUeACFLcw6xzwm2qSZebvCEF%2FWY935OutcMsm4itvs1jZr5INMJDS2i057VAVC1SieZUPMy829wFovqSMYXn3OoFcHSJ1IzeOyc%2B%2B5tDdG66WSnRnocwgvqrwAY6pgHIfqJGX5%2BdIySADdJh4wK9T8kIVO9zI4SFXzKYrQTDYphM7UhWyJ7btn8ns5gaLxND40X5ki3hb1f9HFgCrrvwKO37xezjj1FgK8rAebd2CBZwGiimje%2BKTfhkUJJ7d61InlsW9vLS30ZXcmOkuEQlaRymFrrYZAlx8D9Kq%2Fdmj8OyXNIWR17KCui9zJDKb%2FfwC8jm7PMiXR9rfMCN6cs%2BxgSFP37f&X-Amz-Signature=8843bf7661cb849c6081f5a0880660b26b321f20b8055720b0a6f4961d7539df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K2R2OUN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZc%2Bttko5Fvv5mz8J3mc7nDubu%2FI37QyPQzClsHeX8OAiBbcfP3K32UKEJ4dGjvYdjXkfe6OfNBs2OuBNpdmp%2F2ySr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM%2FpOm9MzbQxZOOHJBKtwDT0sck0Yms%2FGJ7OgPgxT2AtENhT3tpAs4Zom3vQEDnhqrwuhH1tNoE3ncUiXf1wsKztuTomX3ctwBYtigUkFdG0DdvcxmmvqQyJT%2FOZ%2Fz5e2OuxPtmtet0zAlNsRcu4Qs%2BlJ%2BKPeZ23yoWPcNmA8A1Xunn%2BuLYVFwKw%2BuWZo989TS5GoIL6KX4E4z%2BUq0pbqw9JEz9vl0pnsvK6awcAYzKbcmcbhv09z%2BiYgxqJQOICyWfHM00O4qdzCdhSUagZoZwMHb3xtgbnTY5E02YCUdQAOYYuslHcj5mlq%2FE%2FoCaLofOkSDElvWaohGxiS4RA%2BctFNQOOb%2B%2B6e5XuNmpVPnSY%2B0KUzZCx4F8Dz3I1IRvx%2FytHWEPvhYxwGoWgNylu%2FZ1lGggcdB3iSSW2Aw3OGqojHv2kxWrjl4zj27W3dd0L1cUR9q3p9DR72r8hV6bpbzMrxiXnPXXzYXi4KoEa7oD%2FaRwDue445irU%2BMi%2BY5GzQC85je7oP4SuBJpPPP%2BLSQOpWhQYiAGUeACFLcw6xzwm2qSZebvCEF%2FWY935OutcMsm4itvs1jZr5INMJDS2i057VAVC1SieZUPMy829wFovqSMYXn3OoFcHSJ1IzeOyc%2B%2B5tDdG66WSnRnocwgvqrwAY6pgHIfqJGX5%2BdIySADdJh4wK9T8kIVO9zI4SFXzKYrQTDYphM7UhWyJ7btn8ns5gaLxND40X5ki3hb1f9HFgCrrvwKO37xezjj1FgK8rAebd2CBZwGiimje%2BKTfhkUJJ7d61InlsW9vLS30ZXcmOkuEQlaRymFrrYZAlx8D9Kq%2Fdmj8OyXNIWR17KCui9zJDKb%2FfwC8jm7PMiXR9rfMCN6cs%2BxgSFP37f&X-Amz-Signature=a42377b0080e75b0eb07b7260cac5a073cb64d53d5834170eb7b02f42cba2c00&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663K2R2OUN%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZc%2Bttko5Fvv5mz8J3mc7nDubu%2FI37QyPQzClsHeX8OAiBbcfP3K32UKEJ4dGjvYdjXkfe6OfNBs2OuBNpdmp%2F2ySr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM%2FpOm9MzbQxZOOHJBKtwDT0sck0Yms%2FGJ7OgPgxT2AtENhT3tpAs4Zom3vQEDnhqrwuhH1tNoE3ncUiXf1wsKztuTomX3ctwBYtigUkFdG0DdvcxmmvqQyJT%2FOZ%2Fz5e2OuxPtmtet0zAlNsRcu4Qs%2BlJ%2BKPeZ23yoWPcNmA8A1Xunn%2BuLYVFwKw%2BuWZo989TS5GoIL6KX4E4z%2BUq0pbqw9JEz9vl0pnsvK6awcAYzKbcmcbhv09z%2BiYgxqJQOICyWfHM00O4qdzCdhSUagZoZwMHb3xtgbnTY5E02YCUdQAOYYuslHcj5mlq%2FE%2FoCaLofOkSDElvWaohGxiS4RA%2BctFNQOOb%2B%2B6e5XuNmpVPnSY%2B0KUzZCx4F8Dz3I1IRvx%2FytHWEPvhYxwGoWgNylu%2FZ1lGggcdB3iSSW2Aw3OGqojHv2kxWrjl4zj27W3dd0L1cUR9q3p9DR72r8hV6bpbzMrxiXnPXXzYXi4KoEa7oD%2FaRwDue445irU%2BMi%2BY5GzQC85je7oP4SuBJpPPP%2BLSQOpWhQYiAGUeACFLcw6xzwm2qSZebvCEF%2FWY935OutcMsm4itvs1jZr5INMJDS2i057VAVC1SieZUPMy829wFovqSMYXn3OoFcHSJ1IzeOyc%2B%2B5tDdG66WSnRnocwgvqrwAY6pgHIfqJGX5%2BdIySADdJh4wK9T8kIVO9zI4SFXzKYrQTDYphM7UhWyJ7btn8ns5gaLxND40X5ki3hb1f9HFgCrrvwKO37xezjj1FgK8rAebd2CBZwGiimje%2BKTfhkUJJ7d61InlsW9vLS30ZXcmOkuEQlaRymFrrYZAlx8D9Kq%2Fdmj8OyXNIWR17KCui9zJDKb%2FfwC8jm7PMiXR9rfMCN6cs%2BxgSFP37f&X-Amz-Signature=ee8eb6e0e9aef2de0bde53f2bb0b0bf3280be157cb33255efa441e052c1be95e&X-Amz-SignedHeaders=host&x-id=GetObject)
