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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FKKVQM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIH927wTcW2kjNZ0J%2FyptcQAsu4YZgtouRJIORIiUYMgFAiEA%2FF%2BgzcHlmBF1HFSN6DBtrSQ0droDL0DDZ6ePqKSa6owq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIVZnov4eyDqE%2FUDGSrcAyhEnHOr88LH%2Fpak51vTx5L3eSMVwz7xwpjSsjfsG6wZOsXb0tfBuH5tl%2FAjufUpz8np%2F%2B9fUb3D3ORrxfA0N6vaE6LnWN4jYJs%2BBFEVj00Ge9yWr8Y3YjL%2B6My2zyJHZnxFVWo2%2FU6upHjFK19stH0RwyWfJKJb0Ssp8vtj2hsxeLbiS3E8sUc%2BAK%2FIHtGKaWry8e8rkO6KUnijcNmM1IEJgavLeaOEPjvo64BMO2yBPCly4CQesJloieDcsw41BJIOEP5GC7JP%2B3nxm2usO3Qzt9QbqZw8MOlKtk8Ocf3BO2XjccuBvo7YgAkyLwlqgIdwvP5wsoiiPIAgU2wVLZL45f2QOhcHYY%2Fvm72T19TISRy3mK2ve41%2FamfbRrDYowZfB28L2amMYiBa8qDKEFZDZ5reqxJH4y9Lv0%2BngP0a6s1ZU6PM1ozEHntX8rpy5I4RoyhBr9tqyDHMUqTzaZV0oCMBuCvtNidX65NlVyZa%2B%2FGxEe1GU1IhrBAIhAQg6XDRuzQVoT9q2kuuAJP007cZmxsRx0Laupx1QOgnZ896STuCOUHW9cP2VssFS8GCQq5e7IGZjkfqcnAFb9d%2BOl4g3LITdLckGv0hnwcoD2TXJYAwD2vucb0FBUbDMJi68cIGOqUBefzlMUehIo%2BvOT8xXQFSL0Dl14EGaJ%2FP%2FaMzDreYQjBtqb5JPdHBRe2NpuGHQOVp4T%2FfkcxQ76hGQh%2FHfP4SW60q6qPfFvS3NLP37NZaYaUwMhi1%2FeH%2FBpgDoC30MZwSBTJVNx0PAbfr3OnQTjuk%2BXVjegBilJscVS6az4%2Fd1AURYnzQW5ERMzRXDL40gELTuGGmcsp%2FF1fetMI6qweXDiTmdW5j&X-Amz-Signature=966b0d057d62e823b0e46242d06277e5be55224471b435fe42f068f60e27f42b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FKKVQM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIH927wTcW2kjNZ0J%2FyptcQAsu4YZgtouRJIORIiUYMgFAiEA%2FF%2BgzcHlmBF1HFSN6DBtrSQ0droDL0DDZ6ePqKSa6owq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIVZnov4eyDqE%2FUDGSrcAyhEnHOr88LH%2Fpak51vTx5L3eSMVwz7xwpjSsjfsG6wZOsXb0tfBuH5tl%2FAjufUpz8np%2F%2B9fUb3D3ORrxfA0N6vaE6LnWN4jYJs%2BBFEVj00Ge9yWr8Y3YjL%2B6My2zyJHZnxFVWo2%2FU6upHjFK19stH0RwyWfJKJb0Ssp8vtj2hsxeLbiS3E8sUc%2BAK%2FIHtGKaWry8e8rkO6KUnijcNmM1IEJgavLeaOEPjvo64BMO2yBPCly4CQesJloieDcsw41BJIOEP5GC7JP%2B3nxm2usO3Qzt9QbqZw8MOlKtk8Ocf3BO2XjccuBvo7YgAkyLwlqgIdwvP5wsoiiPIAgU2wVLZL45f2QOhcHYY%2Fvm72T19TISRy3mK2ve41%2FamfbRrDYowZfB28L2amMYiBa8qDKEFZDZ5reqxJH4y9Lv0%2BngP0a6s1ZU6PM1ozEHntX8rpy5I4RoyhBr9tqyDHMUqTzaZV0oCMBuCvtNidX65NlVyZa%2B%2FGxEe1GU1IhrBAIhAQg6XDRuzQVoT9q2kuuAJP007cZmxsRx0Laupx1QOgnZ896STuCOUHW9cP2VssFS8GCQq5e7IGZjkfqcnAFb9d%2BOl4g3LITdLckGv0hnwcoD2TXJYAwD2vucb0FBUbDMJi68cIGOqUBefzlMUehIo%2BvOT8xXQFSL0Dl14EGaJ%2FP%2FaMzDreYQjBtqb5JPdHBRe2NpuGHQOVp4T%2FfkcxQ76hGQh%2FHfP4SW60q6qPfFvS3NLP37NZaYaUwMhi1%2FeH%2FBpgDoC30MZwSBTJVNx0PAbfr3OnQTjuk%2BXVjegBilJscVS6az4%2Fd1AURYnzQW5ERMzRXDL40gELTuGGmcsp%2FF1fetMI6qweXDiTmdW5j&X-Amz-Signature=8a5ea4228f384aeda56ec8442ec6cdbacff7605a6a298eaec962fb8aa729fd97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FKKVQM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIH927wTcW2kjNZ0J%2FyptcQAsu4YZgtouRJIORIiUYMgFAiEA%2FF%2BgzcHlmBF1HFSN6DBtrSQ0droDL0DDZ6ePqKSa6owq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIVZnov4eyDqE%2FUDGSrcAyhEnHOr88LH%2Fpak51vTx5L3eSMVwz7xwpjSsjfsG6wZOsXb0tfBuH5tl%2FAjufUpz8np%2F%2B9fUb3D3ORrxfA0N6vaE6LnWN4jYJs%2BBFEVj00Ge9yWr8Y3YjL%2B6My2zyJHZnxFVWo2%2FU6upHjFK19stH0RwyWfJKJb0Ssp8vtj2hsxeLbiS3E8sUc%2BAK%2FIHtGKaWry8e8rkO6KUnijcNmM1IEJgavLeaOEPjvo64BMO2yBPCly4CQesJloieDcsw41BJIOEP5GC7JP%2B3nxm2usO3Qzt9QbqZw8MOlKtk8Ocf3BO2XjccuBvo7YgAkyLwlqgIdwvP5wsoiiPIAgU2wVLZL45f2QOhcHYY%2Fvm72T19TISRy3mK2ve41%2FamfbRrDYowZfB28L2amMYiBa8qDKEFZDZ5reqxJH4y9Lv0%2BngP0a6s1ZU6PM1ozEHntX8rpy5I4RoyhBr9tqyDHMUqTzaZV0oCMBuCvtNidX65NlVyZa%2B%2FGxEe1GU1IhrBAIhAQg6XDRuzQVoT9q2kuuAJP007cZmxsRx0Laupx1QOgnZ896STuCOUHW9cP2VssFS8GCQq5e7IGZjkfqcnAFb9d%2BOl4g3LITdLckGv0hnwcoD2TXJYAwD2vucb0FBUbDMJi68cIGOqUBefzlMUehIo%2BvOT8xXQFSL0Dl14EGaJ%2FP%2FaMzDreYQjBtqb5JPdHBRe2NpuGHQOVp4T%2FfkcxQ76hGQh%2FHfP4SW60q6qPfFvS3NLP37NZaYaUwMhi1%2FeH%2FBpgDoC30MZwSBTJVNx0PAbfr3OnQTjuk%2BXVjegBilJscVS6az4%2Fd1AURYnzQW5ERMzRXDL40gELTuGGmcsp%2FF1fetMI6qweXDiTmdW5j&X-Amz-Signature=f784b947b1fe4af35df440d566f9e514cfc83d456085ed6aa1f39ee9c2358169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FKKVQM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIH927wTcW2kjNZ0J%2FyptcQAsu4YZgtouRJIORIiUYMgFAiEA%2FF%2BgzcHlmBF1HFSN6DBtrSQ0droDL0DDZ6ePqKSa6owq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIVZnov4eyDqE%2FUDGSrcAyhEnHOr88LH%2Fpak51vTx5L3eSMVwz7xwpjSsjfsG6wZOsXb0tfBuH5tl%2FAjufUpz8np%2F%2B9fUb3D3ORrxfA0N6vaE6LnWN4jYJs%2BBFEVj00Ge9yWr8Y3YjL%2B6My2zyJHZnxFVWo2%2FU6upHjFK19stH0RwyWfJKJb0Ssp8vtj2hsxeLbiS3E8sUc%2BAK%2FIHtGKaWry8e8rkO6KUnijcNmM1IEJgavLeaOEPjvo64BMO2yBPCly4CQesJloieDcsw41BJIOEP5GC7JP%2B3nxm2usO3Qzt9QbqZw8MOlKtk8Ocf3BO2XjccuBvo7YgAkyLwlqgIdwvP5wsoiiPIAgU2wVLZL45f2QOhcHYY%2Fvm72T19TISRy3mK2ve41%2FamfbRrDYowZfB28L2amMYiBa8qDKEFZDZ5reqxJH4y9Lv0%2BngP0a6s1ZU6PM1ozEHntX8rpy5I4RoyhBr9tqyDHMUqTzaZV0oCMBuCvtNidX65NlVyZa%2B%2FGxEe1GU1IhrBAIhAQg6XDRuzQVoT9q2kuuAJP007cZmxsRx0Laupx1QOgnZ896STuCOUHW9cP2VssFS8GCQq5e7IGZjkfqcnAFb9d%2BOl4g3LITdLckGv0hnwcoD2TXJYAwD2vucb0FBUbDMJi68cIGOqUBefzlMUehIo%2BvOT8xXQFSL0Dl14EGaJ%2FP%2FaMzDreYQjBtqb5JPdHBRe2NpuGHQOVp4T%2FfkcxQ76hGQh%2FHfP4SW60q6qPfFvS3NLP37NZaYaUwMhi1%2FeH%2FBpgDoC30MZwSBTJVNx0PAbfr3OnQTjuk%2BXVjegBilJscVS6az4%2Fd1AURYnzQW5ERMzRXDL40gELTuGGmcsp%2FF1fetMI6qweXDiTmdW5j&X-Amz-Signature=d6ce2e7c3c85fa7e3a85dc20f2efb19aef184be223a043581598d7f48016e9e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FKKVQM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIH927wTcW2kjNZ0J%2FyptcQAsu4YZgtouRJIORIiUYMgFAiEA%2FF%2BgzcHlmBF1HFSN6DBtrSQ0droDL0DDZ6ePqKSa6owq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIVZnov4eyDqE%2FUDGSrcAyhEnHOr88LH%2Fpak51vTx5L3eSMVwz7xwpjSsjfsG6wZOsXb0tfBuH5tl%2FAjufUpz8np%2F%2B9fUb3D3ORrxfA0N6vaE6LnWN4jYJs%2BBFEVj00Ge9yWr8Y3YjL%2B6My2zyJHZnxFVWo2%2FU6upHjFK19stH0RwyWfJKJb0Ssp8vtj2hsxeLbiS3E8sUc%2BAK%2FIHtGKaWry8e8rkO6KUnijcNmM1IEJgavLeaOEPjvo64BMO2yBPCly4CQesJloieDcsw41BJIOEP5GC7JP%2B3nxm2usO3Qzt9QbqZw8MOlKtk8Ocf3BO2XjccuBvo7YgAkyLwlqgIdwvP5wsoiiPIAgU2wVLZL45f2QOhcHYY%2Fvm72T19TISRy3mK2ve41%2FamfbRrDYowZfB28L2amMYiBa8qDKEFZDZ5reqxJH4y9Lv0%2BngP0a6s1ZU6PM1ozEHntX8rpy5I4RoyhBr9tqyDHMUqTzaZV0oCMBuCvtNidX65NlVyZa%2B%2FGxEe1GU1IhrBAIhAQg6XDRuzQVoT9q2kuuAJP007cZmxsRx0Laupx1QOgnZ896STuCOUHW9cP2VssFS8GCQq5e7IGZjkfqcnAFb9d%2BOl4g3LITdLckGv0hnwcoD2TXJYAwD2vucb0FBUbDMJi68cIGOqUBefzlMUehIo%2BvOT8xXQFSL0Dl14EGaJ%2FP%2FaMzDreYQjBtqb5JPdHBRe2NpuGHQOVp4T%2FfkcxQ76hGQh%2FHfP4SW60q6qPfFvS3NLP37NZaYaUwMhi1%2FeH%2FBpgDoC30MZwSBTJVNx0PAbfr3OnQTjuk%2BXVjegBilJscVS6az4%2Fd1AURYnzQW5ERMzRXDL40gELTuGGmcsp%2FF1fetMI6qweXDiTmdW5j&X-Amz-Signature=87197e6b7e4ad7891f58df6c261e3f2e1410f66571d730dcbec539d81f9153c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5FKKVQM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIH927wTcW2kjNZ0J%2FyptcQAsu4YZgtouRJIORIiUYMgFAiEA%2FF%2BgzcHlmBF1HFSN6DBtrSQ0droDL0DDZ6ePqKSa6owq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIVZnov4eyDqE%2FUDGSrcAyhEnHOr88LH%2Fpak51vTx5L3eSMVwz7xwpjSsjfsG6wZOsXb0tfBuH5tl%2FAjufUpz8np%2F%2B9fUb3D3ORrxfA0N6vaE6LnWN4jYJs%2BBFEVj00Ge9yWr8Y3YjL%2B6My2zyJHZnxFVWo2%2FU6upHjFK19stH0RwyWfJKJb0Ssp8vtj2hsxeLbiS3E8sUc%2BAK%2FIHtGKaWry8e8rkO6KUnijcNmM1IEJgavLeaOEPjvo64BMO2yBPCly4CQesJloieDcsw41BJIOEP5GC7JP%2B3nxm2usO3Qzt9QbqZw8MOlKtk8Ocf3BO2XjccuBvo7YgAkyLwlqgIdwvP5wsoiiPIAgU2wVLZL45f2QOhcHYY%2Fvm72T19TISRy3mK2ve41%2FamfbRrDYowZfB28L2amMYiBa8qDKEFZDZ5reqxJH4y9Lv0%2BngP0a6s1ZU6PM1ozEHntX8rpy5I4RoyhBr9tqyDHMUqTzaZV0oCMBuCvtNidX65NlVyZa%2B%2FGxEe1GU1IhrBAIhAQg6XDRuzQVoT9q2kuuAJP007cZmxsRx0Laupx1QOgnZ896STuCOUHW9cP2VssFS8GCQq5e7IGZjkfqcnAFb9d%2BOl4g3LITdLckGv0hnwcoD2TXJYAwD2vucb0FBUbDMJi68cIGOqUBefzlMUehIo%2BvOT8xXQFSL0Dl14EGaJ%2FP%2FaMzDreYQjBtqb5JPdHBRe2NpuGHQOVp4T%2FfkcxQ76hGQh%2FHfP4SW60q6qPfFvS3NLP37NZaYaUwMhi1%2FeH%2FBpgDoC30MZwSBTJVNx0PAbfr3OnQTjuk%2BXVjegBilJscVS6az4%2Fd1AURYnzQW5ERMzRXDL40gELTuGGmcsp%2FF1fetMI6qweXDiTmdW5j&X-Amz-Signature=90f44c00ee4c37b40ff67e61cc0bdb18e299d0d377d301aba5c311496fa90464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
