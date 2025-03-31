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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSRYEPN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCza0fB5iN%2B3CvMp%2BdbwbG3%2FsT3Oz7eG1R4RvxiY18d%2BgIhAOhFdOBfR4fX3ZylfsJftOWDTDWvVw6U0Pmk8eJDNZUHKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ2fqHOAHox%2FptADoq3AMQSYNgZQ2N0xJTwRW8o4%2F5WP7AX20f8BD4zNDrXLUKunsv9zgZTEkq9pG8Z4ervumfeP1H6e7tkgyZ8vRpo5nsFeSJweYy9vCioV3qEXObXWbu%2FpNO%2Fy%2BmXV1gJ2lmgkDQ8GX0G%2F8ITSUBBLSJK7gNNg4aVMGzEFiu2%2F6QChdgjm9M0N1wXfjZ7n8HDzC4yrA94%2BSHtOb6wWSPCUHCxS7qp30aU1GOzAUpmrkpGTuaUNRBVOg3P%2By8DWxg7eW7BuXOgUdhJRD8QIz2jGGgFp%2B%2F%2F63bmJ%2BMfFAOyMu5D%2Fd%2F0eSh88nIsbGIDKTHFVXEtkH8uLIX1FkF5NjzqYlg3u1BxtWd67i74SxeIMnhhdnnFOQ5IP%2Fb0VGhhU%2F9YdSHPihBf9LKQl%2FD4YDW6iiHZJwGCm4QYpqKnP9mUOupcMQLiY%2FroGZd50GQBtraICDR8l1BI47g6JEjhCdzbVMqpKPCXQX6OKPNXo8KOKY8W8GXv1n%2FbQnlgf3TEICwW%2Fc4dH4FSNSJXi0F3L3kTQKCkPvGo2mYY%2B5hUYno3S4uHAeaFsDMDkPTlAfPBGUXlJ7Pe4iRqe5W1s9Um8hgAXJ8OOJVAsm29XmzFqFTpQNW9kVgLfXM%2Fl9JnOOyMWh7QjDVzqm%2FBjqkAWryA65vcXWszYcriMXx1ESF%2Faiu1xaDsgz5a43Iod6f9kXOJwXpNakVQ1vEPt0jx6wVqRV1%2FU%2Floe9PxFyOywZah4V9NK97M3bafteWGeZumFi1QFRgVPVXJk02MeFoB4VI3mO8rYC6%2Fqo4ZgxVYBFaUZhXNASryaFNcp9LL%2BBCanjEofgF0%2BMsj5fbqeHc4hfLewHgVkFlwaT5hXO6JsZqDLnX&X-Amz-Signature=56ec28196ab1ad08225f21c6b7ae2bf9f45a40c63348cd53e95eeb78270d22b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSRYEPN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCza0fB5iN%2B3CvMp%2BdbwbG3%2FsT3Oz7eG1R4RvxiY18d%2BgIhAOhFdOBfR4fX3ZylfsJftOWDTDWvVw6U0Pmk8eJDNZUHKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ2fqHOAHox%2FptADoq3AMQSYNgZQ2N0xJTwRW8o4%2F5WP7AX20f8BD4zNDrXLUKunsv9zgZTEkq9pG8Z4ervumfeP1H6e7tkgyZ8vRpo5nsFeSJweYy9vCioV3qEXObXWbu%2FpNO%2Fy%2BmXV1gJ2lmgkDQ8GX0G%2F8ITSUBBLSJK7gNNg4aVMGzEFiu2%2F6QChdgjm9M0N1wXfjZ7n8HDzC4yrA94%2BSHtOb6wWSPCUHCxS7qp30aU1GOzAUpmrkpGTuaUNRBVOg3P%2By8DWxg7eW7BuXOgUdhJRD8QIz2jGGgFp%2B%2F%2F63bmJ%2BMfFAOyMu5D%2Fd%2F0eSh88nIsbGIDKTHFVXEtkH8uLIX1FkF5NjzqYlg3u1BxtWd67i74SxeIMnhhdnnFOQ5IP%2Fb0VGhhU%2F9YdSHPihBf9LKQl%2FD4YDW6iiHZJwGCm4QYpqKnP9mUOupcMQLiY%2FroGZd50GQBtraICDR8l1BI47g6JEjhCdzbVMqpKPCXQX6OKPNXo8KOKY8W8GXv1n%2FbQnlgf3TEICwW%2Fc4dH4FSNSJXi0F3L3kTQKCkPvGo2mYY%2B5hUYno3S4uHAeaFsDMDkPTlAfPBGUXlJ7Pe4iRqe5W1s9Um8hgAXJ8OOJVAsm29XmzFqFTpQNW9kVgLfXM%2Fl9JnOOyMWh7QjDVzqm%2FBjqkAWryA65vcXWszYcriMXx1ESF%2Faiu1xaDsgz5a43Iod6f9kXOJwXpNakVQ1vEPt0jx6wVqRV1%2FU%2Floe9PxFyOywZah4V9NK97M3bafteWGeZumFi1QFRgVPVXJk02MeFoB4VI3mO8rYC6%2Fqo4ZgxVYBFaUZhXNASryaFNcp9LL%2BBCanjEofgF0%2BMsj5fbqeHc4hfLewHgVkFlwaT5hXO6JsZqDLnX&X-Amz-Signature=0a2215fc7427d3249520293e1de587eccf3dabf168c2c43b732518ac6f1a02d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSRYEPN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCza0fB5iN%2B3CvMp%2BdbwbG3%2FsT3Oz7eG1R4RvxiY18d%2BgIhAOhFdOBfR4fX3ZylfsJftOWDTDWvVw6U0Pmk8eJDNZUHKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ2fqHOAHox%2FptADoq3AMQSYNgZQ2N0xJTwRW8o4%2F5WP7AX20f8BD4zNDrXLUKunsv9zgZTEkq9pG8Z4ervumfeP1H6e7tkgyZ8vRpo5nsFeSJweYy9vCioV3qEXObXWbu%2FpNO%2Fy%2BmXV1gJ2lmgkDQ8GX0G%2F8ITSUBBLSJK7gNNg4aVMGzEFiu2%2F6QChdgjm9M0N1wXfjZ7n8HDzC4yrA94%2BSHtOb6wWSPCUHCxS7qp30aU1GOzAUpmrkpGTuaUNRBVOg3P%2By8DWxg7eW7BuXOgUdhJRD8QIz2jGGgFp%2B%2F%2F63bmJ%2BMfFAOyMu5D%2Fd%2F0eSh88nIsbGIDKTHFVXEtkH8uLIX1FkF5NjzqYlg3u1BxtWd67i74SxeIMnhhdnnFOQ5IP%2Fb0VGhhU%2F9YdSHPihBf9LKQl%2FD4YDW6iiHZJwGCm4QYpqKnP9mUOupcMQLiY%2FroGZd50GQBtraICDR8l1BI47g6JEjhCdzbVMqpKPCXQX6OKPNXo8KOKY8W8GXv1n%2FbQnlgf3TEICwW%2Fc4dH4FSNSJXi0F3L3kTQKCkPvGo2mYY%2B5hUYno3S4uHAeaFsDMDkPTlAfPBGUXlJ7Pe4iRqe5W1s9Um8hgAXJ8OOJVAsm29XmzFqFTpQNW9kVgLfXM%2Fl9JnOOyMWh7QjDVzqm%2FBjqkAWryA65vcXWszYcriMXx1ESF%2Faiu1xaDsgz5a43Iod6f9kXOJwXpNakVQ1vEPt0jx6wVqRV1%2FU%2Floe9PxFyOywZah4V9NK97M3bafteWGeZumFi1QFRgVPVXJk02MeFoB4VI3mO8rYC6%2Fqo4ZgxVYBFaUZhXNASryaFNcp9LL%2BBCanjEofgF0%2BMsj5fbqeHc4hfLewHgVkFlwaT5hXO6JsZqDLnX&X-Amz-Signature=bc0451d1c06bb42ecf9938909e5be8f35ac6dab744d3576b1cfd379a1dd52d53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSRYEPN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCza0fB5iN%2B3CvMp%2BdbwbG3%2FsT3Oz7eG1R4RvxiY18d%2BgIhAOhFdOBfR4fX3ZylfsJftOWDTDWvVw6U0Pmk8eJDNZUHKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ2fqHOAHox%2FptADoq3AMQSYNgZQ2N0xJTwRW8o4%2F5WP7AX20f8BD4zNDrXLUKunsv9zgZTEkq9pG8Z4ervumfeP1H6e7tkgyZ8vRpo5nsFeSJweYy9vCioV3qEXObXWbu%2FpNO%2Fy%2BmXV1gJ2lmgkDQ8GX0G%2F8ITSUBBLSJK7gNNg4aVMGzEFiu2%2F6QChdgjm9M0N1wXfjZ7n8HDzC4yrA94%2BSHtOb6wWSPCUHCxS7qp30aU1GOzAUpmrkpGTuaUNRBVOg3P%2By8DWxg7eW7BuXOgUdhJRD8QIz2jGGgFp%2B%2F%2F63bmJ%2BMfFAOyMu5D%2Fd%2F0eSh88nIsbGIDKTHFVXEtkH8uLIX1FkF5NjzqYlg3u1BxtWd67i74SxeIMnhhdnnFOQ5IP%2Fb0VGhhU%2F9YdSHPihBf9LKQl%2FD4YDW6iiHZJwGCm4QYpqKnP9mUOupcMQLiY%2FroGZd50GQBtraICDR8l1BI47g6JEjhCdzbVMqpKPCXQX6OKPNXo8KOKY8W8GXv1n%2FbQnlgf3TEICwW%2Fc4dH4FSNSJXi0F3L3kTQKCkPvGo2mYY%2B5hUYno3S4uHAeaFsDMDkPTlAfPBGUXlJ7Pe4iRqe5W1s9Um8hgAXJ8OOJVAsm29XmzFqFTpQNW9kVgLfXM%2Fl9JnOOyMWh7QjDVzqm%2FBjqkAWryA65vcXWszYcriMXx1ESF%2Faiu1xaDsgz5a43Iod6f9kXOJwXpNakVQ1vEPt0jx6wVqRV1%2FU%2Floe9PxFyOywZah4V9NK97M3bafteWGeZumFi1QFRgVPVXJk02MeFoB4VI3mO8rYC6%2Fqo4ZgxVYBFaUZhXNASryaFNcp9LL%2BBCanjEofgF0%2BMsj5fbqeHc4hfLewHgVkFlwaT5hXO6JsZqDLnX&X-Amz-Signature=69c64885b12d6432bfb678e76c1f34a632d5c0a78fc78d6a5e132b27dd8d8ad2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSRYEPN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCza0fB5iN%2B3CvMp%2BdbwbG3%2FsT3Oz7eG1R4RvxiY18d%2BgIhAOhFdOBfR4fX3ZylfsJftOWDTDWvVw6U0Pmk8eJDNZUHKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ2fqHOAHox%2FptADoq3AMQSYNgZQ2N0xJTwRW8o4%2F5WP7AX20f8BD4zNDrXLUKunsv9zgZTEkq9pG8Z4ervumfeP1H6e7tkgyZ8vRpo5nsFeSJweYy9vCioV3qEXObXWbu%2FpNO%2Fy%2BmXV1gJ2lmgkDQ8GX0G%2F8ITSUBBLSJK7gNNg4aVMGzEFiu2%2F6QChdgjm9M0N1wXfjZ7n8HDzC4yrA94%2BSHtOb6wWSPCUHCxS7qp30aU1GOzAUpmrkpGTuaUNRBVOg3P%2By8DWxg7eW7BuXOgUdhJRD8QIz2jGGgFp%2B%2F%2F63bmJ%2BMfFAOyMu5D%2Fd%2F0eSh88nIsbGIDKTHFVXEtkH8uLIX1FkF5NjzqYlg3u1BxtWd67i74SxeIMnhhdnnFOQ5IP%2Fb0VGhhU%2F9YdSHPihBf9LKQl%2FD4YDW6iiHZJwGCm4QYpqKnP9mUOupcMQLiY%2FroGZd50GQBtraICDR8l1BI47g6JEjhCdzbVMqpKPCXQX6OKPNXo8KOKY8W8GXv1n%2FbQnlgf3TEICwW%2Fc4dH4FSNSJXi0F3L3kTQKCkPvGo2mYY%2B5hUYno3S4uHAeaFsDMDkPTlAfPBGUXlJ7Pe4iRqe5W1s9Um8hgAXJ8OOJVAsm29XmzFqFTpQNW9kVgLfXM%2Fl9JnOOyMWh7QjDVzqm%2FBjqkAWryA65vcXWszYcriMXx1ESF%2Faiu1xaDsgz5a43Iod6f9kXOJwXpNakVQ1vEPt0jx6wVqRV1%2FU%2Floe9PxFyOywZah4V9NK97M3bafteWGeZumFi1QFRgVPVXJk02MeFoB4VI3mO8rYC6%2Fqo4ZgxVYBFaUZhXNASryaFNcp9LL%2BBCanjEofgF0%2BMsj5fbqeHc4hfLewHgVkFlwaT5hXO6JsZqDLnX&X-Amz-Signature=8b9bdd438e1c4c48ce03811222d31e1beeaab605eb3cfe0a76d3e0af0248b862&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSRYEPN%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCza0fB5iN%2B3CvMp%2BdbwbG3%2FsT3Oz7eG1R4RvxiY18d%2BgIhAOhFdOBfR4fX3ZylfsJftOWDTDWvVw6U0Pmk8eJDNZUHKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ2fqHOAHox%2FptADoq3AMQSYNgZQ2N0xJTwRW8o4%2F5WP7AX20f8BD4zNDrXLUKunsv9zgZTEkq9pG8Z4ervumfeP1H6e7tkgyZ8vRpo5nsFeSJweYy9vCioV3qEXObXWbu%2FpNO%2Fy%2BmXV1gJ2lmgkDQ8GX0G%2F8ITSUBBLSJK7gNNg4aVMGzEFiu2%2F6QChdgjm9M0N1wXfjZ7n8HDzC4yrA94%2BSHtOb6wWSPCUHCxS7qp30aU1GOzAUpmrkpGTuaUNRBVOg3P%2By8DWxg7eW7BuXOgUdhJRD8QIz2jGGgFp%2B%2F%2F63bmJ%2BMfFAOyMu5D%2Fd%2F0eSh88nIsbGIDKTHFVXEtkH8uLIX1FkF5NjzqYlg3u1BxtWd67i74SxeIMnhhdnnFOQ5IP%2Fb0VGhhU%2F9YdSHPihBf9LKQl%2FD4YDW6iiHZJwGCm4QYpqKnP9mUOupcMQLiY%2FroGZd50GQBtraICDR8l1BI47g6JEjhCdzbVMqpKPCXQX6OKPNXo8KOKY8W8GXv1n%2FbQnlgf3TEICwW%2Fc4dH4FSNSJXi0F3L3kTQKCkPvGo2mYY%2B5hUYno3S4uHAeaFsDMDkPTlAfPBGUXlJ7Pe4iRqe5W1s9Um8hgAXJ8OOJVAsm29XmzFqFTpQNW9kVgLfXM%2Fl9JnOOyMWh7QjDVzqm%2FBjqkAWryA65vcXWszYcriMXx1ESF%2Faiu1xaDsgz5a43Iod6f9kXOJwXpNakVQ1vEPt0jx6wVqRV1%2FU%2Floe9PxFyOywZah4V9NK97M3bafteWGeZumFi1QFRgVPVXJk02MeFoB4VI3mO8rYC6%2Fqo4ZgxVYBFaUZhXNASryaFNcp9LL%2BBCanjEofgF0%2BMsj5fbqeHc4hfLewHgVkFlwaT5hXO6JsZqDLnX&X-Amz-Signature=5d708a85ddfdcf9101ddb924731618909428d28aec51ad052b581641651d294a&X-Amz-SignedHeaders=host&x-id=GetObject)
