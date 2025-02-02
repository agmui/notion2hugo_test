---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLFDQLY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgfYBcXCppGuR4niVWggZyMrzm15RwrRUn%2B7KBuqjUSAIgNTMzEiGZpAl8nlq2p9F18r7dIkFUf8aYHZCNA9V3ImsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHding1j2dqYYAfKXSrcA9y7wqgCF%2Bzo%2FesCLKZoduFq1dIyjCzM8qsvu9t6VufmlF6pSScxdlVQ4LOJbm%2B0Z1Fee5bfaN5fjvs66ehr6B%2F7wTkaWSLdLxdpwycWWzyVFJIVot0ru66wV00bFI%2Fmo4PwG7rS0R8S9LDEqWd0YTp81NlLEhEpKHccguuTTZDutlZcfiDEWLo7IqaUH8BERHpRcIdwcPwTdgUjKlMWWu%2BEabPx4TAj9y4D108ImvDsgLkqSpU2e9Dmk0pj4CCvHSVogcR5nEVRMyqxZSCL39QaBRAmfbIZKi0KZwW%2FHFjkVSZ3VLyG4oOl%2BR3rdRgGa8CWm0%2BAGPVEerOR6M7pVtiL3nZJcK9EJAbYMfJYgCNHRyOtiIsDitK9AEasF629WlHU6t00tNwtniq3e3d8L6VW3Knla6pMaAuygasZA2kXi2pu7GnjYrTIbKtnMWC2RE7pIEsoQ8u8aGHWE4HNfJg3ncKRK1t9kDPR09LUFwBxfWFidAyz1FQfAAe3KF8muhTz0YxUUCIyURs%2B6NPrJMlsJXQF7udmxqgP31%2FPWpHqn6eLykBoiIVbOoUizpjAi9Fq5TsC5GsDJrpJ%2F6mEl8mGwh%2BzDxdBvRYGHiIt7%2BKcHkitdW5bdlaXReT7MMbn%2F7wGOqUBQtbvE7P0lBJhk2zs9%2FdchScIRRSmGVOe5BgCD%2BJ7hpaWgVc3fAWfENZ1LLnYExPMoj6h8fwK%2BKBqzcywLfysmkxI0OcQz9McoDhcLKR5Dj59jKKbM0lMoFNATwlvxqAA%2FvoY4g9jbbFjNv0GKJbZ1zpcp74IPY88024d3l7os4jbpbhuLd9QTZcQGX4NnD0nExEwbJwFdfCqINTk7BgDKrhXJzkZ&X-Amz-Signature=93bc9355a2b0fc9f682754bb735b45982a1d1e9c9a6607b3d08c4399e4b99c1b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLFDQLY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgfYBcXCppGuR4niVWggZyMrzm15RwrRUn%2B7KBuqjUSAIgNTMzEiGZpAl8nlq2p9F18r7dIkFUf8aYHZCNA9V3ImsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHding1j2dqYYAfKXSrcA9y7wqgCF%2Bzo%2FesCLKZoduFq1dIyjCzM8qsvu9t6VufmlF6pSScxdlVQ4LOJbm%2B0Z1Fee5bfaN5fjvs66ehr6B%2F7wTkaWSLdLxdpwycWWzyVFJIVot0ru66wV00bFI%2Fmo4PwG7rS0R8S9LDEqWd0YTp81NlLEhEpKHccguuTTZDutlZcfiDEWLo7IqaUH8BERHpRcIdwcPwTdgUjKlMWWu%2BEabPx4TAj9y4D108ImvDsgLkqSpU2e9Dmk0pj4CCvHSVogcR5nEVRMyqxZSCL39QaBRAmfbIZKi0KZwW%2FHFjkVSZ3VLyG4oOl%2BR3rdRgGa8CWm0%2BAGPVEerOR6M7pVtiL3nZJcK9EJAbYMfJYgCNHRyOtiIsDitK9AEasF629WlHU6t00tNwtniq3e3d8L6VW3Knla6pMaAuygasZA2kXi2pu7GnjYrTIbKtnMWC2RE7pIEsoQ8u8aGHWE4HNfJg3ncKRK1t9kDPR09LUFwBxfWFidAyz1FQfAAe3KF8muhTz0YxUUCIyURs%2B6NPrJMlsJXQF7udmxqgP31%2FPWpHqn6eLykBoiIVbOoUizpjAi9Fq5TsC5GsDJrpJ%2F6mEl8mGwh%2BzDxdBvRYGHiIt7%2BKcHkitdW5bdlaXReT7MMbn%2F7wGOqUBQtbvE7P0lBJhk2zs9%2FdchScIRRSmGVOe5BgCD%2BJ7hpaWgVc3fAWfENZ1LLnYExPMoj6h8fwK%2BKBqzcywLfysmkxI0OcQz9McoDhcLKR5Dj59jKKbM0lMoFNATwlvxqAA%2FvoY4g9jbbFjNv0GKJbZ1zpcp74IPY88024d3l7os4jbpbhuLd9QTZcQGX4NnD0nExEwbJwFdfCqINTk7BgDKrhXJzkZ&X-Amz-Signature=e32c7bad49eb3a100d48457db236997f1a29a3def0df5453af7d3203b99dc12d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLFDQLY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgfYBcXCppGuR4niVWggZyMrzm15RwrRUn%2B7KBuqjUSAIgNTMzEiGZpAl8nlq2p9F18r7dIkFUf8aYHZCNA9V3ImsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHding1j2dqYYAfKXSrcA9y7wqgCF%2Bzo%2FesCLKZoduFq1dIyjCzM8qsvu9t6VufmlF6pSScxdlVQ4LOJbm%2B0Z1Fee5bfaN5fjvs66ehr6B%2F7wTkaWSLdLxdpwycWWzyVFJIVot0ru66wV00bFI%2Fmo4PwG7rS0R8S9LDEqWd0YTp81NlLEhEpKHccguuTTZDutlZcfiDEWLo7IqaUH8BERHpRcIdwcPwTdgUjKlMWWu%2BEabPx4TAj9y4D108ImvDsgLkqSpU2e9Dmk0pj4CCvHSVogcR5nEVRMyqxZSCL39QaBRAmfbIZKi0KZwW%2FHFjkVSZ3VLyG4oOl%2BR3rdRgGa8CWm0%2BAGPVEerOR6M7pVtiL3nZJcK9EJAbYMfJYgCNHRyOtiIsDitK9AEasF629WlHU6t00tNwtniq3e3d8L6VW3Knla6pMaAuygasZA2kXi2pu7GnjYrTIbKtnMWC2RE7pIEsoQ8u8aGHWE4HNfJg3ncKRK1t9kDPR09LUFwBxfWFidAyz1FQfAAe3KF8muhTz0YxUUCIyURs%2B6NPrJMlsJXQF7udmxqgP31%2FPWpHqn6eLykBoiIVbOoUizpjAi9Fq5TsC5GsDJrpJ%2F6mEl8mGwh%2BzDxdBvRYGHiIt7%2BKcHkitdW5bdlaXReT7MMbn%2F7wGOqUBQtbvE7P0lBJhk2zs9%2FdchScIRRSmGVOe5BgCD%2BJ7hpaWgVc3fAWfENZ1LLnYExPMoj6h8fwK%2BKBqzcywLfysmkxI0OcQz9McoDhcLKR5Dj59jKKbM0lMoFNATwlvxqAA%2FvoY4g9jbbFjNv0GKJbZ1zpcp74IPY88024d3l7os4jbpbhuLd9QTZcQGX4NnD0nExEwbJwFdfCqINTk7BgDKrhXJzkZ&X-Amz-Signature=cb774a046eb6b6fe4f1eae51fd78cba874210e8d4c15c81e4d82101f30b563a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLFDQLY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgfYBcXCppGuR4niVWggZyMrzm15RwrRUn%2B7KBuqjUSAIgNTMzEiGZpAl8nlq2p9F18r7dIkFUf8aYHZCNA9V3ImsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHding1j2dqYYAfKXSrcA9y7wqgCF%2Bzo%2FesCLKZoduFq1dIyjCzM8qsvu9t6VufmlF6pSScxdlVQ4LOJbm%2B0Z1Fee5bfaN5fjvs66ehr6B%2F7wTkaWSLdLxdpwycWWzyVFJIVot0ru66wV00bFI%2Fmo4PwG7rS0R8S9LDEqWd0YTp81NlLEhEpKHccguuTTZDutlZcfiDEWLo7IqaUH8BERHpRcIdwcPwTdgUjKlMWWu%2BEabPx4TAj9y4D108ImvDsgLkqSpU2e9Dmk0pj4CCvHSVogcR5nEVRMyqxZSCL39QaBRAmfbIZKi0KZwW%2FHFjkVSZ3VLyG4oOl%2BR3rdRgGa8CWm0%2BAGPVEerOR6M7pVtiL3nZJcK9EJAbYMfJYgCNHRyOtiIsDitK9AEasF629WlHU6t00tNwtniq3e3d8L6VW3Knla6pMaAuygasZA2kXi2pu7GnjYrTIbKtnMWC2RE7pIEsoQ8u8aGHWE4HNfJg3ncKRK1t9kDPR09LUFwBxfWFidAyz1FQfAAe3KF8muhTz0YxUUCIyURs%2B6NPrJMlsJXQF7udmxqgP31%2FPWpHqn6eLykBoiIVbOoUizpjAi9Fq5TsC5GsDJrpJ%2F6mEl8mGwh%2BzDxdBvRYGHiIt7%2BKcHkitdW5bdlaXReT7MMbn%2F7wGOqUBQtbvE7P0lBJhk2zs9%2FdchScIRRSmGVOe5BgCD%2BJ7hpaWgVc3fAWfENZ1LLnYExPMoj6h8fwK%2BKBqzcywLfysmkxI0OcQz9McoDhcLKR5Dj59jKKbM0lMoFNATwlvxqAA%2FvoY4g9jbbFjNv0GKJbZ1zpcp74IPY88024d3l7os4jbpbhuLd9QTZcQGX4NnD0nExEwbJwFdfCqINTk7BgDKrhXJzkZ&X-Amz-Signature=1fc1b1480c26d92446eb06b8a69318e751002fb5a0142a6813cc1c4a0b4ffb1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLFDQLY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgfYBcXCppGuR4niVWggZyMrzm15RwrRUn%2B7KBuqjUSAIgNTMzEiGZpAl8nlq2p9F18r7dIkFUf8aYHZCNA9V3ImsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHding1j2dqYYAfKXSrcA9y7wqgCF%2Bzo%2FesCLKZoduFq1dIyjCzM8qsvu9t6VufmlF6pSScxdlVQ4LOJbm%2B0Z1Fee5bfaN5fjvs66ehr6B%2F7wTkaWSLdLxdpwycWWzyVFJIVot0ru66wV00bFI%2Fmo4PwG7rS0R8S9LDEqWd0YTp81NlLEhEpKHccguuTTZDutlZcfiDEWLo7IqaUH8BERHpRcIdwcPwTdgUjKlMWWu%2BEabPx4TAj9y4D108ImvDsgLkqSpU2e9Dmk0pj4CCvHSVogcR5nEVRMyqxZSCL39QaBRAmfbIZKi0KZwW%2FHFjkVSZ3VLyG4oOl%2BR3rdRgGa8CWm0%2BAGPVEerOR6M7pVtiL3nZJcK9EJAbYMfJYgCNHRyOtiIsDitK9AEasF629WlHU6t00tNwtniq3e3d8L6VW3Knla6pMaAuygasZA2kXi2pu7GnjYrTIbKtnMWC2RE7pIEsoQ8u8aGHWE4HNfJg3ncKRK1t9kDPR09LUFwBxfWFidAyz1FQfAAe3KF8muhTz0YxUUCIyURs%2B6NPrJMlsJXQF7udmxqgP31%2FPWpHqn6eLykBoiIVbOoUizpjAi9Fq5TsC5GsDJrpJ%2F6mEl8mGwh%2BzDxdBvRYGHiIt7%2BKcHkitdW5bdlaXReT7MMbn%2F7wGOqUBQtbvE7P0lBJhk2zs9%2FdchScIRRSmGVOe5BgCD%2BJ7hpaWgVc3fAWfENZ1LLnYExPMoj6h8fwK%2BKBqzcywLfysmkxI0OcQz9McoDhcLKR5Dj59jKKbM0lMoFNATwlvxqAA%2FvoY4g9jbbFjNv0GKJbZ1zpcp74IPY88024d3l7os4jbpbhuLd9QTZcQGX4NnD0nExEwbJwFdfCqINTk7BgDKrhXJzkZ&X-Amz-Signature=678ee11d79428f13cf5636c28c801271bda7696d6eb788851124696a84b4a61a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLFDQLY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgfYBcXCppGuR4niVWggZyMrzm15RwrRUn%2B7KBuqjUSAIgNTMzEiGZpAl8nlq2p9F18r7dIkFUf8aYHZCNA9V3ImsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHding1j2dqYYAfKXSrcA9y7wqgCF%2Bzo%2FesCLKZoduFq1dIyjCzM8qsvu9t6VufmlF6pSScxdlVQ4LOJbm%2B0Z1Fee5bfaN5fjvs66ehr6B%2F7wTkaWSLdLxdpwycWWzyVFJIVot0ru66wV00bFI%2Fmo4PwG7rS0R8S9LDEqWd0YTp81NlLEhEpKHccguuTTZDutlZcfiDEWLo7IqaUH8BERHpRcIdwcPwTdgUjKlMWWu%2BEabPx4TAj9y4D108ImvDsgLkqSpU2e9Dmk0pj4CCvHSVogcR5nEVRMyqxZSCL39QaBRAmfbIZKi0KZwW%2FHFjkVSZ3VLyG4oOl%2BR3rdRgGa8CWm0%2BAGPVEerOR6M7pVtiL3nZJcK9EJAbYMfJYgCNHRyOtiIsDitK9AEasF629WlHU6t00tNwtniq3e3d8L6VW3Knla6pMaAuygasZA2kXi2pu7GnjYrTIbKtnMWC2RE7pIEsoQ8u8aGHWE4HNfJg3ncKRK1t9kDPR09LUFwBxfWFidAyz1FQfAAe3KF8muhTz0YxUUCIyURs%2B6NPrJMlsJXQF7udmxqgP31%2FPWpHqn6eLykBoiIVbOoUizpjAi9Fq5TsC5GsDJrpJ%2F6mEl8mGwh%2BzDxdBvRYGHiIt7%2BKcHkitdW5bdlaXReT7MMbn%2F7wGOqUBQtbvE7P0lBJhk2zs9%2FdchScIRRSmGVOe5BgCD%2BJ7hpaWgVc3fAWfENZ1LLnYExPMoj6h8fwK%2BKBqzcywLfysmkxI0OcQz9McoDhcLKR5Dj59jKKbM0lMoFNATwlvxqAA%2FvoY4g9jbbFjNv0GKJbZ1zpcp74IPY88024d3l7os4jbpbhuLd9QTZcQGX4NnD0nExEwbJwFdfCqINTk7BgDKrhXJzkZ&X-Amz-Signature=5010136e428551d9c8bc977f35a56438e8db545e98a90a1afd142e96230ae1ef&X-Amz-SignedHeaders=host&x-id=GetObject)
