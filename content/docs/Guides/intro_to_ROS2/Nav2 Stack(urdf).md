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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMHRVKPW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD4wZbUkRoWF85AmocCH9CL58eEUcTdejvIshpnkeYBwQIgC%2B9ijEYgbe9dJiNnlSedLepOUgHfkv2IWj9BY0QjVe4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN%2F%2FgW9uIVdRCprf0SrcA6sGPBF%2BmnSV45Y5wX0w5a36aDLiFh%2Fe7HK3T%2BJJozwvN1a%2BDIDnhTBBVz33FpiFvTZcOHElKPctRXcAluIqbeRA75dbiLlv3sgIELRPAjglc%2FAsEkpf1eH9Ig78er4sK75CNgIQocsEIpO1kxg%2FGctShAagxG2c81uPZFFd4eDaN97axCj03abrY5X2zokxPwGHDSppPmt1ZQ1ugVD3COoePuyyXeiDPcJByTfaPGc1g3BR9LuE6yhs5Nmc1MHqW56bkfwwKyGYWSaV4lDPVvoBSaPRkVtu3fNWKD8j5mC7p72As4FwolFqLzHEmihHkf9B3FALyPY0s%2BVWjjQEwHreobHFNZ8UTY4mtFg4I9zHhnXQScYIF8iWFgLipYdNqAybaymOYc9o61FtAyo7NWKZFgRDB8il4njSElgpOTux4TqL%2BtLaURtHp5r9zt8rOUuX47AEjzbuRYICQFORjJCosdMe3Sm%2BqQehxnGLyJ3gYkZ3kv5UTvtTzJEtb%2B0N5aALQ0ql5U5PRNewxQj9Vy8dBPp9mUnoYXSNyt1FVFCJmEu%2BLSsf7Sm4EaGk6UJK0KVnqUgVaQnB3KF1MZe2NlbOBuWMgMRPChJ7rLgrZHXw9v0ofbxDwsKmM14JMND6vb0GOqUB3uYsZq6I6dhcW%2F8U%2FnzkJDRNYBFnTegPMdC29PGWdVnyC4nMfx%2Bs71LoiSLv3YbfQvb%2BYz4kQHHoVB6J9ERe0iXOoUgzUELfUXIDBVAVdsqpxSYDZIwxvO6UCzyUQ0S433ehGhOGNXtDkFNFfsh44fUtv5ncAXdbA3R7kGeX7%2FJrl5xjlpg4BknuIF%2BDnOHIjMjhlt09AFpuFPc9uqQuPmCPI4%2B9&X-Amz-Signature=f1a432970bb2d87d893a55e162d7b496fdabb7dc71b40a9f7de471dc0cc48742&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMHRVKPW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD4wZbUkRoWF85AmocCH9CL58eEUcTdejvIshpnkeYBwQIgC%2B9ijEYgbe9dJiNnlSedLepOUgHfkv2IWj9BY0QjVe4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN%2F%2FgW9uIVdRCprf0SrcA6sGPBF%2BmnSV45Y5wX0w5a36aDLiFh%2Fe7HK3T%2BJJozwvN1a%2BDIDnhTBBVz33FpiFvTZcOHElKPctRXcAluIqbeRA75dbiLlv3sgIELRPAjglc%2FAsEkpf1eH9Ig78er4sK75CNgIQocsEIpO1kxg%2FGctShAagxG2c81uPZFFd4eDaN97axCj03abrY5X2zokxPwGHDSppPmt1ZQ1ugVD3COoePuyyXeiDPcJByTfaPGc1g3BR9LuE6yhs5Nmc1MHqW56bkfwwKyGYWSaV4lDPVvoBSaPRkVtu3fNWKD8j5mC7p72As4FwolFqLzHEmihHkf9B3FALyPY0s%2BVWjjQEwHreobHFNZ8UTY4mtFg4I9zHhnXQScYIF8iWFgLipYdNqAybaymOYc9o61FtAyo7NWKZFgRDB8il4njSElgpOTux4TqL%2BtLaURtHp5r9zt8rOUuX47AEjzbuRYICQFORjJCosdMe3Sm%2BqQehxnGLyJ3gYkZ3kv5UTvtTzJEtb%2B0N5aALQ0ql5U5PRNewxQj9Vy8dBPp9mUnoYXSNyt1FVFCJmEu%2BLSsf7Sm4EaGk6UJK0KVnqUgVaQnB3KF1MZe2NlbOBuWMgMRPChJ7rLgrZHXw9v0ofbxDwsKmM14JMND6vb0GOqUB3uYsZq6I6dhcW%2F8U%2FnzkJDRNYBFnTegPMdC29PGWdVnyC4nMfx%2Bs71LoiSLv3YbfQvb%2BYz4kQHHoVB6J9ERe0iXOoUgzUELfUXIDBVAVdsqpxSYDZIwxvO6UCzyUQ0S433ehGhOGNXtDkFNFfsh44fUtv5ncAXdbA3R7kGeX7%2FJrl5xjlpg4BknuIF%2BDnOHIjMjhlt09AFpuFPc9uqQuPmCPI4%2B9&X-Amz-Signature=a0bd05c9a122993d5b885ab202fb6ada04ff178f9492d0b904eaba23cd2e6b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMHRVKPW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD4wZbUkRoWF85AmocCH9CL58eEUcTdejvIshpnkeYBwQIgC%2B9ijEYgbe9dJiNnlSedLepOUgHfkv2IWj9BY0QjVe4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN%2F%2FgW9uIVdRCprf0SrcA6sGPBF%2BmnSV45Y5wX0w5a36aDLiFh%2Fe7HK3T%2BJJozwvN1a%2BDIDnhTBBVz33FpiFvTZcOHElKPctRXcAluIqbeRA75dbiLlv3sgIELRPAjglc%2FAsEkpf1eH9Ig78er4sK75CNgIQocsEIpO1kxg%2FGctShAagxG2c81uPZFFd4eDaN97axCj03abrY5X2zokxPwGHDSppPmt1ZQ1ugVD3COoePuyyXeiDPcJByTfaPGc1g3BR9LuE6yhs5Nmc1MHqW56bkfwwKyGYWSaV4lDPVvoBSaPRkVtu3fNWKD8j5mC7p72As4FwolFqLzHEmihHkf9B3FALyPY0s%2BVWjjQEwHreobHFNZ8UTY4mtFg4I9zHhnXQScYIF8iWFgLipYdNqAybaymOYc9o61FtAyo7NWKZFgRDB8il4njSElgpOTux4TqL%2BtLaURtHp5r9zt8rOUuX47AEjzbuRYICQFORjJCosdMe3Sm%2BqQehxnGLyJ3gYkZ3kv5UTvtTzJEtb%2B0N5aALQ0ql5U5PRNewxQj9Vy8dBPp9mUnoYXSNyt1FVFCJmEu%2BLSsf7Sm4EaGk6UJK0KVnqUgVaQnB3KF1MZe2NlbOBuWMgMRPChJ7rLgrZHXw9v0ofbxDwsKmM14JMND6vb0GOqUB3uYsZq6I6dhcW%2F8U%2FnzkJDRNYBFnTegPMdC29PGWdVnyC4nMfx%2Bs71LoiSLv3YbfQvb%2BYz4kQHHoVB6J9ERe0iXOoUgzUELfUXIDBVAVdsqpxSYDZIwxvO6UCzyUQ0S433ehGhOGNXtDkFNFfsh44fUtv5ncAXdbA3R7kGeX7%2FJrl5xjlpg4BknuIF%2BDnOHIjMjhlt09AFpuFPc9uqQuPmCPI4%2B9&X-Amz-Signature=f57a97da225e880a1e396a2b40a6c005346dfa59f8aec40e224dd57ad7ebb8d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMHRVKPW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD4wZbUkRoWF85AmocCH9CL58eEUcTdejvIshpnkeYBwQIgC%2B9ijEYgbe9dJiNnlSedLepOUgHfkv2IWj9BY0QjVe4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN%2F%2FgW9uIVdRCprf0SrcA6sGPBF%2BmnSV45Y5wX0w5a36aDLiFh%2Fe7HK3T%2BJJozwvN1a%2BDIDnhTBBVz33FpiFvTZcOHElKPctRXcAluIqbeRA75dbiLlv3sgIELRPAjglc%2FAsEkpf1eH9Ig78er4sK75CNgIQocsEIpO1kxg%2FGctShAagxG2c81uPZFFd4eDaN97axCj03abrY5X2zokxPwGHDSppPmt1ZQ1ugVD3COoePuyyXeiDPcJByTfaPGc1g3BR9LuE6yhs5Nmc1MHqW56bkfwwKyGYWSaV4lDPVvoBSaPRkVtu3fNWKD8j5mC7p72As4FwolFqLzHEmihHkf9B3FALyPY0s%2BVWjjQEwHreobHFNZ8UTY4mtFg4I9zHhnXQScYIF8iWFgLipYdNqAybaymOYc9o61FtAyo7NWKZFgRDB8il4njSElgpOTux4TqL%2BtLaURtHp5r9zt8rOUuX47AEjzbuRYICQFORjJCosdMe3Sm%2BqQehxnGLyJ3gYkZ3kv5UTvtTzJEtb%2B0N5aALQ0ql5U5PRNewxQj9Vy8dBPp9mUnoYXSNyt1FVFCJmEu%2BLSsf7Sm4EaGk6UJK0KVnqUgVaQnB3KF1MZe2NlbOBuWMgMRPChJ7rLgrZHXw9v0ofbxDwsKmM14JMND6vb0GOqUB3uYsZq6I6dhcW%2F8U%2FnzkJDRNYBFnTegPMdC29PGWdVnyC4nMfx%2Bs71LoiSLv3YbfQvb%2BYz4kQHHoVB6J9ERe0iXOoUgzUELfUXIDBVAVdsqpxSYDZIwxvO6UCzyUQ0S433ehGhOGNXtDkFNFfsh44fUtv5ncAXdbA3R7kGeX7%2FJrl5xjlpg4BknuIF%2BDnOHIjMjhlt09AFpuFPc9uqQuPmCPI4%2B9&X-Amz-Signature=4b786ba96ad86781ce9637059fd6cb8fd1a1b19ed547cee7f93ed09a6f08ce78&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMHRVKPW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD4wZbUkRoWF85AmocCH9CL58eEUcTdejvIshpnkeYBwQIgC%2B9ijEYgbe9dJiNnlSedLepOUgHfkv2IWj9BY0QjVe4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN%2F%2FgW9uIVdRCprf0SrcA6sGPBF%2BmnSV45Y5wX0w5a36aDLiFh%2Fe7HK3T%2BJJozwvN1a%2BDIDnhTBBVz33FpiFvTZcOHElKPctRXcAluIqbeRA75dbiLlv3sgIELRPAjglc%2FAsEkpf1eH9Ig78er4sK75CNgIQocsEIpO1kxg%2FGctShAagxG2c81uPZFFd4eDaN97axCj03abrY5X2zokxPwGHDSppPmt1ZQ1ugVD3COoePuyyXeiDPcJByTfaPGc1g3BR9LuE6yhs5Nmc1MHqW56bkfwwKyGYWSaV4lDPVvoBSaPRkVtu3fNWKD8j5mC7p72As4FwolFqLzHEmihHkf9B3FALyPY0s%2BVWjjQEwHreobHFNZ8UTY4mtFg4I9zHhnXQScYIF8iWFgLipYdNqAybaymOYc9o61FtAyo7NWKZFgRDB8il4njSElgpOTux4TqL%2BtLaURtHp5r9zt8rOUuX47AEjzbuRYICQFORjJCosdMe3Sm%2BqQehxnGLyJ3gYkZ3kv5UTvtTzJEtb%2B0N5aALQ0ql5U5PRNewxQj9Vy8dBPp9mUnoYXSNyt1FVFCJmEu%2BLSsf7Sm4EaGk6UJK0KVnqUgVaQnB3KF1MZe2NlbOBuWMgMRPChJ7rLgrZHXw9v0ofbxDwsKmM14JMND6vb0GOqUB3uYsZq6I6dhcW%2F8U%2FnzkJDRNYBFnTegPMdC29PGWdVnyC4nMfx%2Bs71LoiSLv3YbfQvb%2BYz4kQHHoVB6J9ERe0iXOoUgzUELfUXIDBVAVdsqpxSYDZIwxvO6UCzyUQ0S433ehGhOGNXtDkFNFfsh44fUtv5ncAXdbA3R7kGeX7%2FJrl5xjlpg4BknuIF%2BDnOHIjMjhlt09AFpuFPc9uqQuPmCPI4%2B9&X-Amz-Signature=a010ad43d4139b09d41c8a652daafa67cae97f4e90395a45aa1b6c0df5b7cec6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMHRVKPW%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD4wZbUkRoWF85AmocCH9CL58eEUcTdejvIshpnkeYBwQIgC%2B9ijEYgbe9dJiNnlSedLepOUgHfkv2IWj9BY0QjVe4q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDN%2F%2FgW9uIVdRCprf0SrcA6sGPBF%2BmnSV45Y5wX0w5a36aDLiFh%2Fe7HK3T%2BJJozwvN1a%2BDIDnhTBBVz33FpiFvTZcOHElKPctRXcAluIqbeRA75dbiLlv3sgIELRPAjglc%2FAsEkpf1eH9Ig78er4sK75CNgIQocsEIpO1kxg%2FGctShAagxG2c81uPZFFd4eDaN97axCj03abrY5X2zokxPwGHDSppPmt1ZQ1ugVD3COoePuyyXeiDPcJByTfaPGc1g3BR9LuE6yhs5Nmc1MHqW56bkfwwKyGYWSaV4lDPVvoBSaPRkVtu3fNWKD8j5mC7p72As4FwolFqLzHEmihHkf9B3FALyPY0s%2BVWjjQEwHreobHFNZ8UTY4mtFg4I9zHhnXQScYIF8iWFgLipYdNqAybaymOYc9o61FtAyo7NWKZFgRDB8il4njSElgpOTux4TqL%2BtLaURtHp5r9zt8rOUuX47AEjzbuRYICQFORjJCosdMe3Sm%2BqQehxnGLyJ3gYkZ3kv5UTvtTzJEtb%2B0N5aALQ0ql5U5PRNewxQj9Vy8dBPp9mUnoYXSNyt1FVFCJmEu%2BLSsf7Sm4EaGk6UJK0KVnqUgVaQnB3KF1MZe2NlbOBuWMgMRPChJ7rLgrZHXw9v0ofbxDwsKmM14JMND6vb0GOqUB3uYsZq6I6dhcW%2F8U%2FnzkJDRNYBFnTegPMdC29PGWdVnyC4nMfx%2Bs71LoiSLv3YbfQvb%2BYz4kQHHoVB6J9ERe0iXOoUgzUELfUXIDBVAVdsqpxSYDZIwxvO6UCzyUQ0S433ehGhOGNXtDkFNFfsh44fUtv5ncAXdbA3R7kGeX7%2FJrl5xjlpg4BknuIF%2BDnOHIjMjhlt09AFpuFPc9uqQuPmCPI4%2B9&X-Amz-Signature=54f1dc96466911a3ee63b097b364abe939d0b70ba8d6b315481cf13ab0df3bab&X-Amz-SignedHeaders=host&x-id=GetObject)
