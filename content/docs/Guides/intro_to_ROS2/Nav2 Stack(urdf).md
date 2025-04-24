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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623QMG3WL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADH7piqhs%2Fddok0w7HSBQlQAyK0wQ64QcvDBsRs0jcAAiEAjcYnfM%2FDj40YV1DtMEmchfIGEoseCXtA9nUL2GIBYRgq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFaETP3dq%2F00NPwQySrcA3r59ztfGQK85kNlwb4DrMTvqDFEZ%2BN3KH%2Fb7eI7HTwugfW7MK2fUL3EM7ree3sOfRAQTDUTTDi67k4M2ytnMOqWBWs5x4RXOAwJ%2FCuQWv20v4Q0isk9%2BwZLZo7bw54zJugeEZc8bRImmZCaFjq6gngw0KG6ut8rlHKulRm3JlX0m7siYoLk%2FeIsbS3q0itxcM9Iw5vIa9jdHp8EAWiNH%2B5RR1TsOoha2cDkZyHCPVb1D%2FP0aWETARNkrEvFixzOuFvhJdSJ8rpVbX8HP2hS%2BlyZtv6eso2yTa0CbxpUzrj%2FbzzBtbN%2BHY99IqS28qlDcTq2ETfFd8naDB%2BRsl%2FMQ2TPiIkez5TjdfR%2BI%2BqWqZR1L63VFltknH3FJVYuLZ1D0CFs5seZ3aBX2tNcRkZbg8NjSQQREDswx2PAan8ai0xyORQ6v5p5eEwx8pYGxzR9df3uvSuWTVDf2fdl4LVfkALOD6qKA3UESrScXqeWlHXT%2BPr%2BU2F7Dbgs4AneJFt%2B%2BhewDPysa2siFeVHamfjL8ZYsJHMMovrhyMX%2FLHIFJwWhLMFOjyPn0eMb9b9YbigPEEk33QOmyoJR264ARazPF%2Bs4V%2F0794WfvtnwOY4uBBS7FwlEgN4iE8hbhHtMLj0qsAGOqUBex6Dq5ymMpvVzibG96M5SRKl0UyyzU6%2BauQTf0qjyJSOrUhjDjBeau1b5ZzmjkJhOdrOxM1IvLNT9yC6i%2F4zX2pbMg3qzf6R64hQZCO7lQ5NCH5uUmD9ZIhGPPM4vuDOQKZz8zQOsXsT9O7vpOFSMJ3Y5TdtHNGyqCI2ln6CqwCr6%2BKPsHiI5yFWT7gcdCK8ofqurbz9dZTSzRmEkxNrHv9JKBqo&X-Amz-Signature=c382505c88673b2792bcb37ac8abda8a41d559c0910b525b8842eb28e865b995&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623QMG3WL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADH7piqhs%2Fddok0w7HSBQlQAyK0wQ64QcvDBsRs0jcAAiEAjcYnfM%2FDj40YV1DtMEmchfIGEoseCXtA9nUL2GIBYRgq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFaETP3dq%2F00NPwQySrcA3r59ztfGQK85kNlwb4DrMTvqDFEZ%2BN3KH%2Fb7eI7HTwugfW7MK2fUL3EM7ree3sOfRAQTDUTTDi67k4M2ytnMOqWBWs5x4RXOAwJ%2FCuQWv20v4Q0isk9%2BwZLZo7bw54zJugeEZc8bRImmZCaFjq6gngw0KG6ut8rlHKulRm3JlX0m7siYoLk%2FeIsbS3q0itxcM9Iw5vIa9jdHp8EAWiNH%2B5RR1TsOoha2cDkZyHCPVb1D%2FP0aWETARNkrEvFixzOuFvhJdSJ8rpVbX8HP2hS%2BlyZtv6eso2yTa0CbxpUzrj%2FbzzBtbN%2BHY99IqS28qlDcTq2ETfFd8naDB%2BRsl%2FMQ2TPiIkez5TjdfR%2BI%2BqWqZR1L63VFltknH3FJVYuLZ1D0CFs5seZ3aBX2tNcRkZbg8NjSQQREDswx2PAan8ai0xyORQ6v5p5eEwx8pYGxzR9df3uvSuWTVDf2fdl4LVfkALOD6qKA3UESrScXqeWlHXT%2BPr%2BU2F7Dbgs4AneJFt%2B%2BhewDPysa2siFeVHamfjL8ZYsJHMMovrhyMX%2FLHIFJwWhLMFOjyPn0eMb9b9YbigPEEk33QOmyoJR264ARazPF%2Bs4V%2F0794WfvtnwOY4uBBS7FwlEgN4iE8hbhHtMLj0qsAGOqUBex6Dq5ymMpvVzibG96M5SRKl0UyyzU6%2BauQTf0qjyJSOrUhjDjBeau1b5ZzmjkJhOdrOxM1IvLNT9yC6i%2F4zX2pbMg3qzf6R64hQZCO7lQ5NCH5uUmD9ZIhGPPM4vuDOQKZz8zQOsXsT9O7vpOFSMJ3Y5TdtHNGyqCI2ln6CqwCr6%2BKPsHiI5yFWT7gcdCK8ofqurbz9dZTSzRmEkxNrHv9JKBqo&X-Amz-Signature=790e06b64e5f08589b1a0a6912f4f7ff7861cea9a7fc6d4a3d01b1e3d23fd47f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623QMG3WL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADH7piqhs%2Fddok0w7HSBQlQAyK0wQ64QcvDBsRs0jcAAiEAjcYnfM%2FDj40YV1DtMEmchfIGEoseCXtA9nUL2GIBYRgq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFaETP3dq%2F00NPwQySrcA3r59ztfGQK85kNlwb4DrMTvqDFEZ%2BN3KH%2Fb7eI7HTwugfW7MK2fUL3EM7ree3sOfRAQTDUTTDi67k4M2ytnMOqWBWs5x4RXOAwJ%2FCuQWv20v4Q0isk9%2BwZLZo7bw54zJugeEZc8bRImmZCaFjq6gngw0KG6ut8rlHKulRm3JlX0m7siYoLk%2FeIsbS3q0itxcM9Iw5vIa9jdHp8EAWiNH%2B5RR1TsOoha2cDkZyHCPVb1D%2FP0aWETARNkrEvFixzOuFvhJdSJ8rpVbX8HP2hS%2BlyZtv6eso2yTa0CbxpUzrj%2FbzzBtbN%2BHY99IqS28qlDcTq2ETfFd8naDB%2BRsl%2FMQ2TPiIkez5TjdfR%2BI%2BqWqZR1L63VFltknH3FJVYuLZ1D0CFs5seZ3aBX2tNcRkZbg8NjSQQREDswx2PAan8ai0xyORQ6v5p5eEwx8pYGxzR9df3uvSuWTVDf2fdl4LVfkALOD6qKA3UESrScXqeWlHXT%2BPr%2BU2F7Dbgs4AneJFt%2B%2BhewDPysa2siFeVHamfjL8ZYsJHMMovrhyMX%2FLHIFJwWhLMFOjyPn0eMb9b9YbigPEEk33QOmyoJR264ARazPF%2Bs4V%2F0794WfvtnwOY4uBBS7FwlEgN4iE8hbhHtMLj0qsAGOqUBex6Dq5ymMpvVzibG96M5SRKl0UyyzU6%2BauQTf0qjyJSOrUhjDjBeau1b5ZzmjkJhOdrOxM1IvLNT9yC6i%2F4zX2pbMg3qzf6R64hQZCO7lQ5NCH5uUmD9ZIhGPPM4vuDOQKZz8zQOsXsT9O7vpOFSMJ3Y5TdtHNGyqCI2ln6CqwCr6%2BKPsHiI5yFWT7gcdCK8ofqurbz9dZTSzRmEkxNrHv9JKBqo&X-Amz-Signature=9437f050e27d33f1ce7f28ffd6b82d69a405d3f2e308314efcb1c52df71deeed&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623QMG3WL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADH7piqhs%2Fddok0w7HSBQlQAyK0wQ64QcvDBsRs0jcAAiEAjcYnfM%2FDj40YV1DtMEmchfIGEoseCXtA9nUL2GIBYRgq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFaETP3dq%2F00NPwQySrcA3r59ztfGQK85kNlwb4DrMTvqDFEZ%2BN3KH%2Fb7eI7HTwugfW7MK2fUL3EM7ree3sOfRAQTDUTTDi67k4M2ytnMOqWBWs5x4RXOAwJ%2FCuQWv20v4Q0isk9%2BwZLZo7bw54zJugeEZc8bRImmZCaFjq6gngw0KG6ut8rlHKulRm3JlX0m7siYoLk%2FeIsbS3q0itxcM9Iw5vIa9jdHp8EAWiNH%2B5RR1TsOoha2cDkZyHCPVb1D%2FP0aWETARNkrEvFixzOuFvhJdSJ8rpVbX8HP2hS%2BlyZtv6eso2yTa0CbxpUzrj%2FbzzBtbN%2BHY99IqS28qlDcTq2ETfFd8naDB%2BRsl%2FMQ2TPiIkez5TjdfR%2BI%2BqWqZR1L63VFltknH3FJVYuLZ1D0CFs5seZ3aBX2tNcRkZbg8NjSQQREDswx2PAan8ai0xyORQ6v5p5eEwx8pYGxzR9df3uvSuWTVDf2fdl4LVfkALOD6qKA3UESrScXqeWlHXT%2BPr%2BU2F7Dbgs4AneJFt%2B%2BhewDPysa2siFeVHamfjL8ZYsJHMMovrhyMX%2FLHIFJwWhLMFOjyPn0eMb9b9YbigPEEk33QOmyoJR264ARazPF%2Bs4V%2F0794WfvtnwOY4uBBS7FwlEgN4iE8hbhHtMLj0qsAGOqUBex6Dq5ymMpvVzibG96M5SRKl0UyyzU6%2BauQTf0qjyJSOrUhjDjBeau1b5ZzmjkJhOdrOxM1IvLNT9yC6i%2F4zX2pbMg3qzf6R64hQZCO7lQ5NCH5uUmD9ZIhGPPM4vuDOQKZz8zQOsXsT9O7vpOFSMJ3Y5TdtHNGyqCI2ln6CqwCr6%2BKPsHiI5yFWT7gcdCK8ofqurbz9dZTSzRmEkxNrHv9JKBqo&X-Amz-Signature=7f8b828d31f42d24bafb02ee11ef6ca6a77e03e2ed2c03afd32a0400cc65aa9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623QMG3WL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADH7piqhs%2Fddok0w7HSBQlQAyK0wQ64QcvDBsRs0jcAAiEAjcYnfM%2FDj40YV1DtMEmchfIGEoseCXtA9nUL2GIBYRgq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFaETP3dq%2F00NPwQySrcA3r59ztfGQK85kNlwb4DrMTvqDFEZ%2BN3KH%2Fb7eI7HTwugfW7MK2fUL3EM7ree3sOfRAQTDUTTDi67k4M2ytnMOqWBWs5x4RXOAwJ%2FCuQWv20v4Q0isk9%2BwZLZo7bw54zJugeEZc8bRImmZCaFjq6gngw0KG6ut8rlHKulRm3JlX0m7siYoLk%2FeIsbS3q0itxcM9Iw5vIa9jdHp8EAWiNH%2B5RR1TsOoha2cDkZyHCPVb1D%2FP0aWETARNkrEvFixzOuFvhJdSJ8rpVbX8HP2hS%2BlyZtv6eso2yTa0CbxpUzrj%2FbzzBtbN%2BHY99IqS28qlDcTq2ETfFd8naDB%2BRsl%2FMQ2TPiIkez5TjdfR%2BI%2BqWqZR1L63VFltknH3FJVYuLZ1D0CFs5seZ3aBX2tNcRkZbg8NjSQQREDswx2PAan8ai0xyORQ6v5p5eEwx8pYGxzR9df3uvSuWTVDf2fdl4LVfkALOD6qKA3UESrScXqeWlHXT%2BPr%2BU2F7Dbgs4AneJFt%2B%2BhewDPysa2siFeVHamfjL8ZYsJHMMovrhyMX%2FLHIFJwWhLMFOjyPn0eMb9b9YbigPEEk33QOmyoJR264ARazPF%2Bs4V%2F0794WfvtnwOY4uBBS7FwlEgN4iE8hbhHtMLj0qsAGOqUBex6Dq5ymMpvVzibG96M5SRKl0UyyzU6%2BauQTf0qjyJSOrUhjDjBeau1b5ZzmjkJhOdrOxM1IvLNT9yC6i%2F4zX2pbMg3qzf6R64hQZCO7lQ5NCH5uUmD9ZIhGPPM4vuDOQKZz8zQOsXsT9O7vpOFSMJ3Y5TdtHNGyqCI2ln6CqwCr6%2BKPsHiI5yFWT7gcdCK8ofqurbz9dZTSzRmEkxNrHv9JKBqo&X-Amz-Signature=cbf473ea04bd3657065c799471c9ccbb101b54468cfecd1e2b941a5fb28f51be&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623QMG3WL%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIADH7piqhs%2Fddok0w7HSBQlQAyK0wQ64QcvDBsRs0jcAAiEAjcYnfM%2FDj40YV1DtMEmchfIGEoseCXtA9nUL2GIBYRgq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDFaETP3dq%2F00NPwQySrcA3r59ztfGQK85kNlwb4DrMTvqDFEZ%2BN3KH%2Fb7eI7HTwugfW7MK2fUL3EM7ree3sOfRAQTDUTTDi67k4M2ytnMOqWBWs5x4RXOAwJ%2FCuQWv20v4Q0isk9%2BwZLZo7bw54zJugeEZc8bRImmZCaFjq6gngw0KG6ut8rlHKulRm3JlX0m7siYoLk%2FeIsbS3q0itxcM9Iw5vIa9jdHp8EAWiNH%2B5RR1TsOoha2cDkZyHCPVb1D%2FP0aWETARNkrEvFixzOuFvhJdSJ8rpVbX8HP2hS%2BlyZtv6eso2yTa0CbxpUzrj%2FbzzBtbN%2BHY99IqS28qlDcTq2ETfFd8naDB%2BRsl%2FMQ2TPiIkez5TjdfR%2BI%2BqWqZR1L63VFltknH3FJVYuLZ1D0CFs5seZ3aBX2tNcRkZbg8NjSQQREDswx2PAan8ai0xyORQ6v5p5eEwx8pYGxzR9df3uvSuWTVDf2fdl4LVfkALOD6qKA3UESrScXqeWlHXT%2BPr%2BU2F7Dbgs4AneJFt%2B%2BhewDPysa2siFeVHamfjL8ZYsJHMMovrhyMX%2FLHIFJwWhLMFOjyPn0eMb9b9YbigPEEk33QOmyoJR264ARazPF%2Bs4V%2F0794WfvtnwOY4uBBS7FwlEgN4iE8hbhHtMLj0qsAGOqUBex6Dq5ymMpvVzibG96M5SRKl0UyyzU6%2BauQTf0qjyJSOrUhjDjBeau1b5ZzmjkJhOdrOxM1IvLNT9yC6i%2F4zX2pbMg3qzf6R64hQZCO7lQ5NCH5uUmD9ZIhGPPM4vuDOQKZz8zQOsXsT9O7vpOFSMJ3Y5TdtHNGyqCI2ln6CqwCr6%2BKPsHiI5yFWT7gcdCK8ofqurbz9dZTSzRmEkxNrHv9JKBqo&X-Amz-Signature=c47216da46a41a4867a5f2385a25ccea600ea3e6b81503e1ee375e8e87257b79&X-Amz-SignedHeaders=host&x-id=GetObject)
