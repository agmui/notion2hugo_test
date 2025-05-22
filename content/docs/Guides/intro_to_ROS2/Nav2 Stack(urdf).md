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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VCZJQB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIH0k0rbqC6hyuF7mhCX8OwtyfCG8gL34lpeZnRRMRJsjAiEA2TlYmhMs8rGKenBbYmYOExzOHv97yferMJnkDJN3mawqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNbjM4bW9dVhg0Y9ircA%2FHxpppFyg8cUfpZ%2BvgSiEjHdgMHhYZnfd0D5RwzzRShmd3T1CUrN3lNssfzLbrbs%2FuDurudcI2rqMJ8N9%2BPQ672U2ot6aJq4ZzUc%2BSw40SLxgJPXqMDsDpF0nX0eAm1VCNb0ebSL3o7kU1k9%2FpaH9Q5N5d9R%2FPBIytCKN9eruY5lDeojFmuW%2FKdkyomCTa7%2B6%2Bqppgf5FaKTrGrs9KFh2lMRYgSdumcS8IwqlIli%2F6WwWq%2BT5T2UB6sDA7ivEKv5BEEedAhALFn0MBAu6dBwiTX5tqd4n2%2FdYSNvLLddtNv0I9S%2F2geZBeLXZhVC2lDMadLl3D2f21JrkLuf6e6z7JpuMX3ZkUiMExCSV2ae2jsiyowCExmrRmjuEZSQ41sXZAHqlXbiyBPgGaJLPcauLi3YMT52Nxfnk9XsY9xvwL8MgEuQHZ1KobK8UNXu6lsUlXOUmLJ2CR0FWEYKEYdJ3CZYplLuqhKV4WlJmbHMlFFi82e%2Btux%2FwjP2QCQM29kWQ4h0gRKV69fUtUPTPhPgrLcfSUMT0E3TDfzaOZ4xcWTs0OE4N%2ByriWsSYkPnYH7mb%2B2Q%2FLsnSWvPnwrs8GWqpoDbrD7ha%2Fs5FOYp4yOGutVJ4CyBydTPHcYTyz9MN%2Fdu8EGOqUBZNZdJeHg0DMb%2FireawpxTvVU70SsSlyBDDZ6MMrB2%2BJWtGvVX5InFjQ1mQVujCgvUXGQYiNgGP3CQA6SzPXmHwp1HVvjuEq5LnnPldzNK11hKLzZMjC7FMLh4Zy9dzSGc4v4v03UkQF8%2BqOqx%2FtAcZcuWuaKVBpyz88BpsXrL2yLPhgmILTW0e1qd%2Fnvn2YA3fj3wZmbTXR81aUwgUYN8N7RSFTb&X-Amz-Signature=7d153d9fb92d5de3abd7efea7f51b147b6b2673041c73fffadd8b0e350e893ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VCZJQB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIH0k0rbqC6hyuF7mhCX8OwtyfCG8gL34lpeZnRRMRJsjAiEA2TlYmhMs8rGKenBbYmYOExzOHv97yferMJnkDJN3mawqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNbjM4bW9dVhg0Y9ircA%2FHxpppFyg8cUfpZ%2BvgSiEjHdgMHhYZnfd0D5RwzzRShmd3T1CUrN3lNssfzLbrbs%2FuDurudcI2rqMJ8N9%2BPQ672U2ot6aJq4ZzUc%2BSw40SLxgJPXqMDsDpF0nX0eAm1VCNb0ebSL3o7kU1k9%2FpaH9Q5N5d9R%2FPBIytCKN9eruY5lDeojFmuW%2FKdkyomCTa7%2B6%2Bqppgf5FaKTrGrs9KFh2lMRYgSdumcS8IwqlIli%2F6WwWq%2BT5T2UB6sDA7ivEKv5BEEedAhALFn0MBAu6dBwiTX5tqd4n2%2FdYSNvLLddtNv0I9S%2F2geZBeLXZhVC2lDMadLl3D2f21JrkLuf6e6z7JpuMX3ZkUiMExCSV2ae2jsiyowCExmrRmjuEZSQ41sXZAHqlXbiyBPgGaJLPcauLi3YMT52Nxfnk9XsY9xvwL8MgEuQHZ1KobK8UNXu6lsUlXOUmLJ2CR0FWEYKEYdJ3CZYplLuqhKV4WlJmbHMlFFi82e%2Btux%2FwjP2QCQM29kWQ4h0gRKV69fUtUPTPhPgrLcfSUMT0E3TDfzaOZ4xcWTs0OE4N%2ByriWsSYkPnYH7mb%2B2Q%2FLsnSWvPnwrs8GWqpoDbrD7ha%2Fs5FOYp4yOGutVJ4CyBydTPHcYTyz9MN%2Fdu8EGOqUBZNZdJeHg0DMb%2FireawpxTvVU70SsSlyBDDZ6MMrB2%2BJWtGvVX5InFjQ1mQVujCgvUXGQYiNgGP3CQA6SzPXmHwp1HVvjuEq5LnnPldzNK11hKLzZMjC7FMLh4Zy9dzSGc4v4v03UkQF8%2BqOqx%2FtAcZcuWuaKVBpyz88BpsXrL2yLPhgmILTW0e1qd%2Fnvn2YA3fj3wZmbTXR81aUwgUYN8N7RSFTb&X-Amz-Signature=ae8f19896e5396b3d8c497997c5af249d987990ee4cca47767db51a1c531a1cb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VCZJQB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIH0k0rbqC6hyuF7mhCX8OwtyfCG8gL34lpeZnRRMRJsjAiEA2TlYmhMs8rGKenBbYmYOExzOHv97yferMJnkDJN3mawqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNbjM4bW9dVhg0Y9ircA%2FHxpppFyg8cUfpZ%2BvgSiEjHdgMHhYZnfd0D5RwzzRShmd3T1CUrN3lNssfzLbrbs%2FuDurudcI2rqMJ8N9%2BPQ672U2ot6aJq4ZzUc%2BSw40SLxgJPXqMDsDpF0nX0eAm1VCNb0ebSL3o7kU1k9%2FpaH9Q5N5d9R%2FPBIytCKN9eruY5lDeojFmuW%2FKdkyomCTa7%2B6%2Bqppgf5FaKTrGrs9KFh2lMRYgSdumcS8IwqlIli%2F6WwWq%2BT5T2UB6sDA7ivEKv5BEEedAhALFn0MBAu6dBwiTX5tqd4n2%2FdYSNvLLddtNv0I9S%2F2geZBeLXZhVC2lDMadLl3D2f21JrkLuf6e6z7JpuMX3ZkUiMExCSV2ae2jsiyowCExmrRmjuEZSQ41sXZAHqlXbiyBPgGaJLPcauLi3YMT52Nxfnk9XsY9xvwL8MgEuQHZ1KobK8UNXu6lsUlXOUmLJ2CR0FWEYKEYdJ3CZYplLuqhKV4WlJmbHMlFFi82e%2Btux%2FwjP2QCQM29kWQ4h0gRKV69fUtUPTPhPgrLcfSUMT0E3TDfzaOZ4xcWTs0OE4N%2ByriWsSYkPnYH7mb%2B2Q%2FLsnSWvPnwrs8GWqpoDbrD7ha%2Fs5FOYp4yOGutVJ4CyBydTPHcYTyz9MN%2Fdu8EGOqUBZNZdJeHg0DMb%2FireawpxTvVU70SsSlyBDDZ6MMrB2%2BJWtGvVX5InFjQ1mQVujCgvUXGQYiNgGP3CQA6SzPXmHwp1HVvjuEq5LnnPldzNK11hKLzZMjC7FMLh4Zy9dzSGc4v4v03UkQF8%2BqOqx%2FtAcZcuWuaKVBpyz88BpsXrL2yLPhgmILTW0e1qd%2Fnvn2YA3fj3wZmbTXR81aUwgUYN8N7RSFTb&X-Amz-Signature=5edfb965a29e195f3b94a7796671b378611afddfc8fc9cc5e658d6569ba45fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VCZJQB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIH0k0rbqC6hyuF7mhCX8OwtyfCG8gL34lpeZnRRMRJsjAiEA2TlYmhMs8rGKenBbYmYOExzOHv97yferMJnkDJN3mawqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNbjM4bW9dVhg0Y9ircA%2FHxpppFyg8cUfpZ%2BvgSiEjHdgMHhYZnfd0D5RwzzRShmd3T1CUrN3lNssfzLbrbs%2FuDurudcI2rqMJ8N9%2BPQ672U2ot6aJq4ZzUc%2BSw40SLxgJPXqMDsDpF0nX0eAm1VCNb0ebSL3o7kU1k9%2FpaH9Q5N5d9R%2FPBIytCKN9eruY5lDeojFmuW%2FKdkyomCTa7%2B6%2Bqppgf5FaKTrGrs9KFh2lMRYgSdumcS8IwqlIli%2F6WwWq%2BT5T2UB6sDA7ivEKv5BEEedAhALFn0MBAu6dBwiTX5tqd4n2%2FdYSNvLLddtNv0I9S%2F2geZBeLXZhVC2lDMadLl3D2f21JrkLuf6e6z7JpuMX3ZkUiMExCSV2ae2jsiyowCExmrRmjuEZSQ41sXZAHqlXbiyBPgGaJLPcauLi3YMT52Nxfnk9XsY9xvwL8MgEuQHZ1KobK8UNXu6lsUlXOUmLJ2CR0FWEYKEYdJ3CZYplLuqhKV4WlJmbHMlFFi82e%2Btux%2FwjP2QCQM29kWQ4h0gRKV69fUtUPTPhPgrLcfSUMT0E3TDfzaOZ4xcWTs0OE4N%2ByriWsSYkPnYH7mb%2B2Q%2FLsnSWvPnwrs8GWqpoDbrD7ha%2Fs5FOYp4yOGutVJ4CyBydTPHcYTyz9MN%2Fdu8EGOqUBZNZdJeHg0DMb%2FireawpxTvVU70SsSlyBDDZ6MMrB2%2BJWtGvVX5InFjQ1mQVujCgvUXGQYiNgGP3CQA6SzPXmHwp1HVvjuEq5LnnPldzNK11hKLzZMjC7FMLh4Zy9dzSGc4v4v03UkQF8%2BqOqx%2FtAcZcuWuaKVBpyz88BpsXrL2yLPhgmILTW0e1qd%2Fnvn2YA3fj3wZmbTXR81aUwgUYN8N7RSFTb&X-Amz-Signature=f50853bbfbe5a0d686d49a59044fb4f759fa8fa00b4de0b4517a276e5d01b9fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VCZJQB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIH0k0rbqC6hyuF7mhCX8OwtyfCG8gL34lpeZnRRMRJsjAiEA2TlYmhMs8rGKenBbYmYOExzOHv97yferMJnkDJN3mawqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNbjM4bW9dVhg0Y9ircA%2FHxpppFyg8cUfpZ%2BvgSiEjHdgMHhYZnfd0D5RwzzRShmd3T1CUrN3lNssfzLbrbs%2FuDurudcI2rqMJ8N9%2BPQ672U2ot6aJq4ZzUc%2BSw40SLxgJPXqMDsDpF0nX0eAm1VCNb0ebSL3o7kU1k9%2FpaH9Q5N5d9R%2FPBIytCKN9eruY5lDeojFmuW%2FKdkyomCTa7%2B6%2Bqppgf5FaKTrGrs9KFh2lMRYgSdumcS8IwqlIli%2F6WwWq%2BT5T2UB6sDA7ivEKv5BEEedAhALFn0MBAu6dBwiTX5tqd4n2%2FdYSNvLLddtNv0I9S%2F2geZBeLXZhVC2lDMadLl3D2f21JrkLuf6e6z7JpuMX3ZkUiMExCSV2ae2jsiyowCExmrRmjuEZSQ41sXZAHqlXbiyBPgGaJLPcauLi3YMT52Nxfnk9XsY9xvwL8MgEuQHZ1KobK8UNXu6lsUlXOUmLJ2CR0FWEYKEYdJ3CZYplLuqhKV4WlJmbHMlFFi82e%2Btux%2FwjP2QCQM29kWQ4h0gRKV69fUtUPTPhPgrLcfSUMT0E3TDfzaOZ4xcWTs0OE4N%2ByriWsSYkPnYH7mb%2B2Q%2FLsnSWvPnwrs8GWqpoDbrD7ha%2Fs5FOYp4yOGutVJ4CyBydTPHcYTyz9MN%2Fdu8EGOqUBZNZdJeHg0DMb%2FireawpxTvVU70SsSlyBDDZ6MMrB2%2BJWtGvVX5InFjQ1mQVujCgvUXGQYiNgGP3CQA6SzPXmHwp1HVvjuEq5LnnPldzNK11hKLzZMjC7FMLh4Zy9dzSGc4v4v03UkQF8%2BqOqx%2FtAcZcuWuaKVBpyz88BpsXrL2yLPhgmILTW0e1qd%2Fnvn2YA3fj3wZmbTXR81aUwgUYN8N7RSFTb&X-Amz-Signature=d99814bd647f2760237b1cc1fb64414fa7ab351b30dc2275b17870cb5ae2f225&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6VCZJQB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T100952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIH0k0rbqC6hyuF7mhCX8OwtyfCG8gL34lpeZnRRMRJsjAiEA2TlYmhMs8rGKenBbYmYOExzOHv97yferMJnkDJN3mawqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNbjM4bW9dVhg0Y9ircA%2FHxpppFyg8cUfpZ%2BvgSiEjHdgMHhYZnfd0D5RwzzRShmd3T1CUrN3lNssfzLbrbs%2FuDurudcI2rqMJ8N9%2BPQ672U2ot6aJq4ZzUc%2BSw40SLxgJPXqMDsDpF0nX0eAm1VCNb0ebSL3o7kU1k9%2FpaH9Q5N5d9R%2FPBIytCKN9eruY5lDeojFmuW%2FKdkyomCTa7%2B6%2Bqppgf5FaKTrGrs9KFh2lMRYgSdumcS8IwqlIli%2F6WwWq%2BT5T2UB6sDA7ivEKv5BEEedAhALFn0MBAu6dBwiTX5tqd4n2%2FdYSNvLLddtNv0I9S%2F2geZBeLXZhVC2lDMadLl3D2f21JrkLuf6e6z7JpuMX3ZkUiMExCSV2ae2jsiyowCExmrRmjuEZSQ41sXZAHqlXbiyBPgGaJLPcauLi3YMT52Nxfnk9XsY9xvwL8MgEuQHZ1KobK8UNXu6lsUlXOUmLJ2CR0FWEYKEYdJ3CZYplLuqhKV4WlJmbHMlFFi82e%2Btux%2FwjP2QCQM29kWQ4h0gRKV69fUtUPTPhPgrLcfSUMT0E3TDfzaOZ4xcWTs0OE4N%2ByriWsSYkPnYH7mb%2B2Q%2FLsnSWvPnwrs8GWqpoDbrD7ha%2Fs5FOYp4yOGutVJ4CyBydTPHcYTyz9MN%2Fdu8EGOqUBZNZdJeHg0DMb%2FireawpxTvVU70SsSlyBDDZ6MMrB2%2BJWtGvVX5InFjQ1mQVujCgvUXGQYiNgGP3CQA6SzPXmHwp1HVvjuEq5LnnPldzNK11hKLzZMjC7FMLh4Zy9dzSGc4v4v03UkQF8%2BqOqx%2FtAcZcuWuaKVBpyz88BpsXrL2yLPhgmILTW0e1qd%2Fnvn2YA3fj3wZmbTXR81aUwgUYN8N7RSFTb&X-Amz-Signature=9339a55afc4a9863073f80ba2c810397ddd961653c05e729b2ca66bfbe02848b&X-Amz-SignedHeaders=host&x-id=GetObject)
