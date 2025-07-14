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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666HWQCH6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCrJPGJQ7jVMd4TglmPuD%2F%2B67w67fXuBaF3fSPQ4iLhEgIhAMq%2FBUfRjmMxPUC8uDUquK%2Bcpr0%2FXN8RxKctz6MpEu2%2BKv8DCCcQABoMNjM3NDIzMTgzODA1IgwjnVK1YzmuKlw7YtMq3ANCTFY%2FX54fx3GkdT%2BmClbbmNGwynQEPp%2FgjPmVV8KBsPPjcUfvtDpEZ4zdSI%2FXSUKPOTkysmeI1gqKrZGC%2BlcdyfWi9AmStd5z72FAMRtocniKnl57W9sSEBG0ZSfXS7N4ty6w%2BeI05Je6widEjJz2u3X1Zn3ytpS50mR0lNBuCI2GnAybgPCElNowYzFzaW%2FUi55VNAe2Q2sNyXYseUX3H6RrrBkiGb1K2NE0ZZMHdqyPopvZixObmX1OqjkLy8OqJYKo1sT4n6rb4cTbUvVBqvn8smNFoqMdGz%2FWa6io22sU%2FqBEJKH%2BpRHduhqWN88ALinCpeos0XLRCpYH%2F4RmIq%2B57W6IFJ69jjbXeeIB93KEKmcl9QnTIGs%2FpOPBiMWUzMqCCCGuzDhTGdhQodxGMFDi0rPDmT6YTO8ja6jeYj1VBjcLCaqDIHAFwhonm1M4ejENgBnbLOygXLsdGmJ0wt%2Fnv4DuAFzo0n6FO9ma1a45TV82qMfx6Q6ypnGfVAOibaN%2BzANHVbnuQJQ3uLFHbkwW8YQD53GDvtbk0Y7kWCMBp4kinF5yZiuaJ5I6cROP9k6T1uem2iulL%2BF79dcy2ggPB6ceRZSLacN7nOslDYlCdt%2BXlpFa%2BkpW%2FTD%2FsNLDBjqkAfdKYUvfZR%2FLC6%2BACpIeU4tpy4MsJzfizJIJNsoL8u0yACgS5755pdnfN7qYvQWuBR7Ets%2BU4haChSUySbrrRynZXM2rysb3QhVM%2F%2F0t6IiTkr9ti5Eb8EN6Mu24ieOrKC5OYd8YgLKdspsn4YSG90BVVx2AixLwyGQWT4S4%2BlLBwL%2B37oS96cFg6oPiqbOqBBY0HLqs9p0Rp86vDLlFWBeV7wdE&X-Amz-Signature=5652bb32b1bd01f6a9bd7ee033d986623af86b916e40a208fc3142ff2fb00db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666HWQCH6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCrJPGJQ7jVMd4TglmPuD%2F%2B67w67fXuBaF3fSPQ4iLhEgIhAMq%2FBUfRjmMxPUC8uDUquK%2Bcpr0%2FXN8RxKctz6MpEu2%2BKv8DCCcQABoMNjM3NDIzMTgzODA1IgwjnVK1YzmuKlw7YtMq3ANCTFY%2FX54fx3GkdT%2BmClbbmNGwynQEPp%2FgjPmVV8KBsPPjcUfvtDpEZ4zdSI%2FXSUKPOTkysmeI1gqKrZGC%2BlcdyfWi9AmStd5z72FAMRtocniKnl57W9sSEBG0ZSfXS7N4ty6w%2BeI05Je6widEjJz2u3X1Zn3ytpS50mR0lNBuCI2GnAybgPCElNowYzFzaW%2FUi55VNAe2Q2sNyXYseUX3H6RrrBkiGb1K2NE0ZZMHdqyPopvZixObmX1OqjkLy8OqJYKo1sT4n6rb4cTbUvVBqvn8smNFoqMdGz%2FWa6io22sU%2FqBEJKH%2BpRHduhqWN88ALinCpeos0XLRCpYH%2F4RmIq%2B57W6IFJ69jjbXeeIB93KEKmcl9QnTIGs%2FpOPBiMWUzMqCCCGuzDhTGdhQodxGMFDi0rPDmT6YTO8ja6jeYj1VBjcLCaqDIHAFwhonm1M4ejENgBnbLOygXLsdGmJ0wt%2Fnv4DuAFzo0n6FO9ma1a45TV82qMfx6Q6ypnGfVAOibaN%2BzANHVbnuQJQ3uLFHbkwW8YQD53GDvtbk0Y7kWCMBp4kinF5yZiuaJ5I6cROP9k6T1uem2iulL%2BF79dcy2ggPB6ceRZSLacN7nOslDYlCdt%2BXlpFa%2BkpW%2FTD%2FsNLDBjqkAfdKYUvfZR%2FLC6%2BACpIeU4tpy4MsJzfizJIJNsoL8u0yACgS5755pdnfN7qYvQWuBR7Ets%2BU4haChSUySbrrRynZXM2rysb3QhVM%2F%2F0t6IiTkr9ti5Eb8EN6Mu24ieOrKC5OYd8YgLKdspsn4YSG90BVVx2AixLwyGQWT4S4%2BlLBwL%2B37oS96cFg6oPiqbOqBBY0HLqs9p0Rp86vDLlFWBeV7wdE&X-Amz-Signature=2e7df76903e8cbdd4b24b868dc098f48b5cc9e5513917be922521e30035e5f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666HWQCH6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCrJPGJQ7jVMd4TglmPuD%2F%2B67w67fXuBaF3fSPQ4iLhEgIhAMq%2FBUfRjmMxPUC8uDUquK%2Bcpr0%2FXN8RxKctz6MpEu2%2BKv8DCCcQABoMNjM3NDIzMTgzODA1IgwjnVK1YzmuKlw7YtMq3ANCTFY%2FX54fx3GkdT%2BmClbbmNGwynQEPp%2FgjPmVV8KBsPPjcUfvtDpEZ4zdSI%2FXSUKPOTkysmeI1gqKrZGC%2BlcdyfWi9AmStd5z72FAMRtocniKnl57W9sSEBG0ZSfXS7N4ty6w%2BeI05Je6widEjJz2u3X1Zn3ytpS50mR0lNBuCI2GnAybgPCElNowYzFzaW%2FUi55VNAe2Q2sNyXYseUX3H6RrrBkiGb1K2NE0ZZMHdqyPopvZixObmX1OqjkLy8OqJYKo1sT4n6rb4cTbUvVBqvn8smNFoqMdGz%2FWa6io22sU%2FqBEJKH%2BpRHduhqWN88ALinCpeos0XLRCpYH%2F4RmIq%2B57W6IFJ69jjbXeeIB93KEKmcl9QnTIGs%2FpOPBiMWUzMqCCCGuzDhTGdhQodxGMFDi0rPDmT6YTO8ja6jeYj1VBjcLCaqDIHAFwhonm1M4ejENgBnbLOygXLsdGmJ0wt%2Fnv4DuAFzo0n6FO9ma1a45TV82qMfx6Q6ypnGfVAOibaN%2BzANHVbnuQJQ3uLFHbkwW8YQD53GDvtbk0Y7kWCMBp4kinF5yZiuaJ5I6cROP9k6T1uem2iulL%2BF79dcy2ggPB6ceRZSLacN7nOslDYlCdt%2BXlpFa%2BkpW%2FTD%2FsNLDBjqkAfdKYUvfZR%2FLC6%2BACpIeU4tpy4MsJzfizJIJNsoL8u0yACgS5755pdnfN7qYvQWuBR7Ets%2BU4haChSUySbrrRynZXM2rysb3QhVM%2F%2F0t6IiTkr9ti5Eb8EN6Mu24ieOrKC5OYd8YgLKdspsn4YSG90BVVx2AixLwyGQWT4S4%2BlLBwL%2B37oS96cFg6oPiqbOqBBY0HLqs9p0Rp86vDLlFWBeV7wdE&X-Amz-Signature=e06a0d594d02af40503a9607e748863197fbcfdc9574f6f415322f2cbdc77167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666HWQCH6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCrJPGJQ7jVMd4TglmPuD%2F%2B67w67fXuBaF3fSPQ4iLhEgIhAMq%2FBUfRjmMxPUC8uDUquK%2Bcpr0%2FXN8RxKctz6MpEu2%2BKv8DCCcQABoMNjM3NDIzMTgzODA1IgwjnVK1YzmuKlw7YtMq3ANCTFY%2FX54fx3GkdT%2BmClbbmNGwynQEPp%2FgjPmVV8KBsPPjcUfvtDpEZ4zdSI%2FXSUKPOTkysmeI1gqKrZGC%2BlcdyfWi9AmStd5z72FAMRtocniKnl57W9sSEBG0ZSfXS7N4ty6w%2BeI05Je6widEjJz2u3X1Zn3ytpS50mR0lNBuCI2GnAybgPCElNowYzFzaW%2FUi55VNAe2Q2sNyXYseUX3H6RrrBkiGb1K2NE0ZZMHdqyPopvZixObmX1OqjkLy8OqJYKo1sT4n6rb4cTbUvVBqvn8smNFoqMdGz%2FWa6io22sU%2FqBEJKH%2BpRHduhqWN88ALinCpeos0XLRCpYH%2F4RmIq%2B57W6IFJ69jjbXeeIB93KEKmcl9QnTIGs%2FpOPBiMWUzMqCCCGuzDhTGdhQodxGMFDi0rPDmT6YTO8ja6jeYj1VBjcLCaqDIHAFwhonm1M4ejENgBnbLOygXLsdGmJ0wt%2Fnv4DuAFzo0n6FO9ma1a45TV82qMfx6Q6ypnGfVAOibaN%2BzANHVbnuQJQ3uLFHbkwW8YQD53GDvtbk0Y7kWCMBp4kinF5yZiuaJ5I6cROP9k6T1uem2iulL%2BF79dcy2ggPB6ceRZSLacN7nOslDYlCdt%2BXlpFa%2BkpW%2FTD%2FsNLDBjqkAfdKYUvfZR%2FLC6%2BACpIeU4tpy4MsJzfizJIJNsoL8u0yACgS5755pdnfN7qYvQWuBR7Ets%2BU4haChSUySbrrRynZXM2rysb3QhVM%2F%2F0t6IiTkr9ti5Eb8EN6Mu24ieOrKC5OYd8YgLKdspsn4YSG90BVVx2AixLwyGQWT4S4%2BlLBwL%2B37oS96cFg6oPiqbOqBBY0HLqs9p0Rp86vDLlFWBeV7wdE&X-Amz-Signature=08ff5831fed68d37a97399fc3a7d5306fbb21e7d18dcda9a5afd665f6c8006ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666HWQCH6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCrJPGJQ7jVMd4TglmPuD%2F%2B67w67fXuBaF3fSPQ4iLhEgIhAMq%2FBUfRjmMxPUC8uDUquK%2Bcpr0%2FXN8RxKctz6MpEu2%2BKv8DCCcQABoMNjM3NDIzMTgzODA1IgwjnVK1YzmuKlw7YtMq3ANCTFY%2FX54fx3GkdT%2BmClbbmNGwynQEPp%2FgjPmVV8KBsPPjcUfvtDpEZ4zdSI%2FXSUKPOTkysmeI1gqKrZGC%2BlcdyfWi9AmStd5z72FAMRtocniKnl57W9sSEBG0ZSfXS7N4ty6w%2BeI05Je6widEjJz2u3X1Zn3ytpS50mR0lNBuCI2GnAybgPCElNowYzFzaW%2FUi55VNAe2Q2sNyXYseUX3H6RrrBkiGb1K2NE0ZZMHdqyPopvZixObmX1OqjkLy8OqJYKo1sT4n6rb4cTbUvVBqvn8smNFoqMdGz%2FWa6io22sU%2FqBEJKH%2BpRHduhqWN88ALinCpeos0XLRCpYH%2F4RmIq%2B57W6IFJ69jjbXeeIB93KEKmcl9QnTIGs%2FpOPBiMWUzMqCCCGuzDhTGdhQodxGMFDi0rPDmT6YTO8ja6jeYj1VBjcLCaqDIHAFwhonm1M4ejENgBnbLOygXLsdGmJ0wt%2Fnv4DuAFzo0n6FO9ma1a45TV82qMfx6Q6ypnGfVAOibaN%2BzANHVbnuQJQ3uLFHbkwW8YQD53GDvtbk0Y7kWCMBp4kinF5yZiuaJ5I6cROP9k6T1uem2iulL%2BF79dcy2ggPB6ceRZSLacN7nOslDYlCdt%2BXlpFa%2BkpW%2FTD%2FsNLDBjqkAfdKYUvfZR%2FLC6%2BACpIeU4tpy4MsJzfizJIJNsoL8u0yACgS5755pdnfN7qYvQWuBR7Ets%2BU4haChSUySbrrRynZXM2rysb3QhVM%2F%2F0t6IiTkr9ti5Eb8EN6Mu24ieOrKC5OYd8YgLKdspsn4YSG90BVVx2AixLwyGQWT4S4%2BlLBwL%2B37oS96cFg6oPiqbOqBBY0HLqs9p0Rp86vDLlFWBeV7wdE&X-Amz-Signature=46ddd6ca95eccf143ae512a8fc91fe2838dfa9c217893006f54fb916abec08fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666HWQCH6%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T061538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCrJPGJQ7jVMd4TglmPuD%2F%2B67w67fXuBaF3fSPQ4iLhEgIhAMq%2FBUfRjmMxPUC8uDUquK%2Bcpr0%2FXN8RxKctz6MpEu2%2BKv8DCCcQABoMNjM3NDIzMTgzODA1IgwjnVK1YzmuKlw7YtMq3ANCTFY%2FX54fx3GkdT%2BmClbbmNGwynQEPp%2FgjPmVV8KBsPPjcUfvtDpEZ4zdSI%2FXSUKPOTkysmeI1gqKrZGC%2BlcdyfWi9AmStd5z72FAMRtocniKnl57W9sSEBG0ZSfXS7N4ty6w%2BeI05Je6widEjJz2u3X1Zn3ytpS50mR0lNBuCI2GnAybgPCElNowYzFzaW%2FUi55VNAe2Q2sNyXYseUX3H6RrrBkiGb1K2NE0ZZMHdqyPopvZixObmX1OqjkLy8OqJYKo1sT4n6rb4cTbUvVBqvn8smNFoqMdGz%2FWa6io22sU%2FqBEJKH%2BpRHduhqWN88ALinCpeos0XLRCpYH%2F4RmIq%2B57W6IFJ69jjbXeeIB93KEKmcl9QnTIGs%2FpOPBiMWUzMqCCCGuzDhTGdhQodxGMFDi0rPDmT6YTO8ja6jeYj1VBjcLCaqDIHAFwhonm1M4ejENgBnbLOygXLsdGmJ0wt%2Fnv4DuAFzo0n6FO9ma1a45TV82qMfx6Q6ypnGfVAOibaN%2BzANHVbnuQJQ3uLFHbkwW8YQD53GDvtbk0Y7kWCMBp4kinF5yZiuaJ5I6cROP9k6T1uem2iulL%2BF79dcy2ggPB6ceRZSLacN7nOslDYlCdt%2BXlpFa%2BkpW%2FTD%2FsNLDBjqkAfdKYUvfZR%2FLC6%2BACpIeU4tpy4MsJzfizJIJNsoL8u0yACgS5755pdnfN7qYvQWuBR7Ets%2BU4haChSUySbrrRynZXM2rysb3QhVM%2F%2F0t6IiTkr9ti5Eb8EN6Mu24ieOrKC5OYd8YgLKdspsn4YSG90BVVx2AixLwyGQWT4S4%2BlLBwL%2B37oS96cFg6oPiqbOqBBY0HLqs9p0Rp86vDLlFWBeV7wdE&X-Amz-Signature=a76e6c6affe4e782225714b1144dc2b8c711fe753c45196d56ae97b3afcdcf80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
