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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECDO6PB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIErU6yQZiHOdwiLM5uiKbUp%2F9m51r1vE4usXgoiGjf0oAiBahsJhNDWa%2FUFh3F9hgP%2BhLSJroipQYL%2FkVGnfG6Mt0Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMP8l5yaTmp5upTLE2KtwDLi%2B6vdiTIsU1CeFuRLqstdGsfRn7lMY5Uzfnv7U8C57vNpgbf1D6KOLquwbCOA0gYsYlC7Na2yFDR0a1IPkE24kNdy1fUue5sATeN5CkSOa%2FspA9VBBrHMhDRH%2FmPl5SBGNHpcabR8Sat5HUWh8H9pODhILfJkyRPYGAF5XfFm0UCIBhq811LVtZqKcztXNEcUNZel5ZlDCH555hOp0BFg09LoeCr1g3g4RjivewT1ObOazDfcF53lOJHkrPMhU524YtW4jkMmsU1j%2FOZPYh1ldAPZ3nTV8hNk0vnSo%2Be0QOX7%2BAbZKGC3o3DFDxMF2eoltgTdCSXpusxPXYEGurB4sRfF58juB0bHQGn%2Fgcp8dH2mxGKtvG%2Bn0zJcA6M81spOxnP8flNlvmV8UDLgFGIohhYSvTgeD6LCq4QCAshP3oZJ8XPL7l8%2BF23NHcnCKimwGlTGrpX2Y1uiz6OP1HVYFrdP7Gtzodnoy%2F%2FaJTpCH8iMYblk22uxof5SKjxnx%2BN8jIwLc50ccHokO06Pd3QSqyAvPOdXMVRbvfrRJqLVB8yqYVTH%2Ff6QKZaqVo9QGOQCxqQ46W5UJ0oQOOkDEB78TV5vz5XQO0E44QZ%2BC%2BN39isAYQmD1pZRFXoA4ws4j8vQY6pgFLsigvCCu%2FaRxAmssKsSFDphmHdGLIvuI7ymS4kGNXrhOAKbIuT61qFLcPnigptMO0PiAiSAsKtUByydJUXnBg9jxp0QdAIHo%2F1AQNeNXlGJZL1s1zmiigRaNR4%2FU3SgJ4kDNj7Dcge8wCWoW%2Fwcdm7qY1yLLrqlj1AsBnsyPs1luAadUL%2BpD%2BlQzSoT67t8bBawkdflKE3xP1KNxO9myAMzDjsWrg&X-Amz-Signature=aba0c7f99197b712435c16a6cb2996a97c46730de04604f54ff90476f0d9c052&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECDO6PB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIErU6yQZiHOdwiLM5uiKbUp%2F9m51r1vE4usXgoiGjf0oAiBahsJhNDWa%2FUFh3F9hgP%2BhLSJroipQYL%2FkVGnfG6Mt0Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMP8l5yaTmp5upTLE2KtwDLi%2B6vdiTIsU1CeFuRLqstdGsfRn7lMY5Uzfnv7U8C57vNpgbf1D6KOLquwbCOA0gYsYlC7Na2yFDR0a1IPkE24kNdy1fUue5sATeN5CkSOa%2FspA9VBBrHMhDRH%2FmPl5SBGNHpcabR8Sat5HUWh8H9pODhILfJkyRPYGAF5XfFm0UCIBhq811LVtZqKcztXNEcUNZel5ZlDCH555hOp0BFg09LoeCr1g3g4RjivewT1ObOazDfcF53lOJHkrPMhU524YtW4jkMmsU1j%2FOZPYh1ldAPZ3nTV8hNk0vnSo%2Be0QOX7%2BAbZKGC3o3DFDxMF2eoltgTdCSXpusxPXYEGurB4sRfF58juB0bHQGn%2Fgcp8dH2mxGKtvG%2Bn0zJcA6M81spOxnP8flNlvmV8UDLgFGIohhYSvTgeD6LCq4QCAshP3oZJ8XPL7l8%2BF23NHcnCKimwGlTGrpX2Y1uiz6OP1HVYFrdP7Gtzodnoy%2F%2FaJTpCH8iMYblk22uxof5SKjxnx%2BN8jIwLc50ccHokO06Pd3QSqyAvPOdXMVRbvfrRJqLVB8yqYVTH%2Ff6QKZaqVo9QGOQCxqQ46W5UJ0oQOOkDEB78TV5vz5XQO0E44QZ%2BC%2BN39isAYQmD1pZRFXoA4ws4j8vQY6pgFLsigvCCu%2FaRxAmssKsSFDphmHdGLIvuI7ymS4kGNXrhOAKbIuT61qFLcPnigptMO0PiAiSAsKtUByydJUXnBg9jxp0QdAIHo%2F1AQNeNXlGJZL1s1zmiigRaNR4%2FU3SgJ4kDNj7Dcge8wCWoW%2Fwcdm7qY1yLLrqlj1AsBnsyPs1luAadUL%2BpD%2BlQzSoT67t8bBawkdflKE3xP1KNxO9myAMzDjsWrg&X-Amz-Signature=c22cc6793feacacb923ceae446b8a5678e52adad88f88b72c6ab70bf1adff596&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECDO6PB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIErU6yQZiHOdwiLM5uiKbUp%2F9m51r1vE4usXgoiGjf0oAiBahsJhNDWa%2FUFh3F9hgP%2BhLSJroipQYL%2FkVGnfG6Mt0Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMP8l5yaTmp5upTLE2KtwDLi%2B6vdiTIsU1CeFuRLqstdGsfRn7lMY5Uzfnv7U8C57vNpgbf1D6KOLquwbCOA0gYsYlC7Na2yFDR0a1IPkE24kNdy1fUue5sATeN5CkSOa%2FspA9VBBrHMhDRH%2FmPl5SBGNHpcabR8Sat5HUWh8H9pODhILfJkyRPYGAF5XfFm0UCIBhq811LVtZqKcztXNEcUNZel5ZlDCH555hOp0BFg09LoeCr1g3g4RjivewT1ObOazDfcF53lOJHkrPMhU524YtW4jkMmsU1j%2FOZPYh1ldAPZ3nTV8hNk0vnSo%2Be0QOX7%2BAbZKGC3o3DFDxMF2eoltgTdCSXpusxPXYEGurB4sRfF58juB0bHQGn%2Fgcp8dH2mxGKtvG%2Bn0zJcA6M81spOxnP8flNlvmV8UDLgFGIohhYSvTgeD6LCq4QCAshP3oZJ8XPL7l8%2BF23NHcnCKimwGlTGrpX2Y1uiz6OP1HVYFrdP7Gtzodnoy%2F%2FaJTpCH8iMYblk22uxof5SKjxnx%2BN8jIwLc50ccHokO06Pd3QSqyAvPOdXMVRbvfrRJqLVB8yqYVTH%2Ff6QKZaqVo9QGOQCxqQ46W5UJ0oQOOkDEB78TV5vz5XQO0E44QZ%2BC%2BN39isAYQmD1pZRFXoA4ws4j8vQY6pgFLsigvCCu%2FaRxAmssKsSFDphmHdGLIvuI7ymS4kGNXrhOAKbIuT61qFLcPnigptMO0PiAiSAsKtUByydJUXnBg9jxp0QdAIHo%2F1AQNeNXlGJZL1s1zmiigRaNR4%2FU3SgJ4kDNj7Dcge8wCWoW%2Fwcdm7qY1yLLrqlj1AsBnsyPs1luAadUL%2BpD%2BlQzSoT67t8bBawkdflKE3xP1KNxO9myAMzDjsWrg&X-Amz-Signature=47538df25a1409565d8134fa7872aa1115347bed1f132f8a2b8d06b51d5fb553&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECDO6PB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIErU6yQZiHOdwiLM5uiKbUp%2F9m51r1vE4usXgoiGjf0oAiBahsJhNDWa%2FUFh3F9hgP%2BhLSJroipQYL%2FkVGnfG6Mt0Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMP8l5yaTmp5upTLE2KtwDLi%2B6vdiTIsU1CeFuRLqstdGsfRn7lMY5Uzfnv7U8C57vNpgbf1D6KOLquwbCOA0gYsYlC7Na2yFDR0a1IPkE24kNdy1fUue5sATeN5CkSOa%2FspA9VBBrHMhDRH%2FmPl5SBGNHpcabR8Sat5HUWh8H9pODhILfJkyRPYGAF5XfFm0UCIBhq811LVtZqKcztXNEcUNZel5ZlDCH555hOp0BFg09LoeCr1g3g4RjivewT1ObOazDfcF53lOJHkrPMhU524YtW4jkMmsU1j%2FOZPYh1ldAPZ3nTV8hNk0vnSo%2Be0QOX7%2BAbZKGC3o3DFDxMF2eoltgTdCSXpusxPXYEGurB4sRfF58juB0bHQGn%2Fgcp8dH2mxGKtvG%2Bn0zJcA6M81spOxnP8flNlvmV8UDLgFGIohhYSvTgeD6LCq4QCAshP3oZJ8XPL7l8%2BF23NHcnCKimwGlTGrpX2Y1uiz6OP1HVYFrdP7Gtzodnoy%2F%2FaJTpCH8iMYblk22uxof5SKjxnx%2BN8jIwLc50ccHokO06Pd3QSqyAvPOdXMVRbvfrRJqLVB8yqYVTH%2Ff6QKZaqVo9QGOQCxqQ46W5UJ0oQOOkDEB78TV5vz5XQO0E44QZ%2BC%2BN39isAYQmD1pZRFXoA4ws4j8vQY6pgFLsigvCCu%2FaRxAmssKsSFDphmHdGLIvuI7ymS4kGNXrhOAKbIuT61qFLcPnigptMO0PiAiSAsKtUByydJUXnBg9jxp0QdAIHo%2F1AQNeNXlGJZL1s1zmiigRaNR4%2FU3SgJ4kDNj7Dcge8wCWoW%2Fwcdm7qY1yLLrqlj1AsBnsyPs1luAadUL%2BpD%2BlQzSoT67t8bBawkdflKE3xP1KNxO9myAMzDjsWrg&X-Amz-Signature=a6fa163e72f748689bf91bf5f42cdd8fb7e69e6927d7468ccbe01b6bd37758a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECDO6PB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIErU6yQZiHOdwiLM5uiKbUp%2F9m51r1vE4usXgoiGjf0oAiBahsJhNDWa%2FUFh3F9hgP%2BhLSJroipQYL%2FkVGnfG6Mt0Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMP8l5yaTmp5upTLE2KtwDLi%2B6vdiTIsU1CeFuRLqstdGsfRn7lMY5Uzfnv7U8C57vNpgbf1D6KOLquwbCOA0gYsYlC7Na2yFDR0a1IPkE24kNdy1fUue5sATeN5CkSOa%2FspA9VBBrHMhDRH%2FmPl5SBGNHpcabR8Sat5HUWh8H9pODhILfJkyRPYGAF5XfFm0UCIBhq811LVtZqKcztXNEcUNZel5ZlDCH555hOp0BFg09LoeCr1g3g4RjivewT1ObOazDfcF53lOJHkrPMhU524YtW4jkMmsU1j%2FOZPYh1ldAPZ3nTV8hNk0vnSo%2Be0QOX7%2BAbZKGC3o3DFDxMF2eoltgTdCSXpusxPXYEGurB4sRfF58juB0bHQGn%2Fgcp8dH2mxGKtvG%2Bn0zJcA6M81spOxnP8flNlvmV8UDLgFGIohhYSvTgeD6LCq4QCAshP3oZJ8XPL7l8%2BF23NHcnCKimwGlTGrpX2Y1uiz6OP1HVYFrdP7Gtzodnoy%2F%2FaJTpCH8iMYblk22uxof5SKjxnx%2BN8jIwLc50ccHokO06Pd3QSqyAvPOdXMVRbvfrRJqLVB8yqYVTH%2Ff6QKZaqVo9QGOQCxqQ46W5UJ0oQOOkDEB78TV5vz5XQO0E44QZ%2BC%2BN39isAYQmD1pZRFXoA4ws4j8vQY6pgFLsigvCCu%2FaRxAmssKsSFDphmHdGLIvuI7ymS4kGNXrhOAKbIuT61qFLcPnigptMO0PiAiSAsKtUByydJUXnBg9jxp0QdAIHo%2F1AQNeNXlGJZL1s1zmiigRaNR4%2FU3SgJ4kDNj7Dcge8wCWoW%2Fwcdm7qY1yLLrqlj1AsBnsyPs1luAadUL%2BpD%2BlQzSoT67t8bBawkdflKE3xP1KNxO9myAMzDjsWrg&X-Amz-Signature=dd0653fdf7d0a41c21b566e67c5d24c174000cd4c3b26a80af628d984e4ed9c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECDO6PB%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T140757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIErU6yQZiHOdwiLM5uiKbUp%2F9m51r1vE4usXgoiGjf0oAiBahsJhNDWa%2FUFh3F9hgP%2BhLSJroipQYL%2FkVGnfG6Mt0Cr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMP8l5yaTmp5upTLE2KtwDLi%2B6vdiTIsU1CeFuRLqstdGsfRn7lMY5Uzfnv7U8C57vNpgbf1D6KOLquwbCOA0gYsYlC7Na2yFDR0a1IPkE24kNdy1fUue5sATeN5CkSOa%2FspA9VBBrHMhDRH%2FmPl5SBGNHpcabR8Sat5HUWh8H9pODhILfJkyRPYGAF5XfFm0UCIBhq811LVtZqKcztXNEcUNZel5ZlDCH555hOp0BFg09LoeCr1g3g4RjivewT1ObOazDfcF53lOJHkrPMhU524YtW4jkMmsU1j%2FOZPYh1ldAPZ3nTV8hNk0vnSo%2Be0QOX7%2BAbZKGC3o3DFDxMF2eoltgTdCSXpusxPXYEGurB4sRfF58juB0bHQGn%2Fgcp8dH2mxGKtvG%2Bn0zJcA6M81spOxnP8flNlvmV8UDLgFGIohhYSvTgeD6LCq4QCAshP3oZJ8XPL7l8%2BF23NHcnCKimwGlTGrpX2Y1uiz6OP1HVYFrdP7Gtzodnoy%2F%2FaJTpCH8iMYblk22uxof5SKjxnx%2BN8jIwLc50ccHokO06Pd3QSqyAvPOdXMVRbvfrRJqLVB8yqYVTH%2Ff6QKZaqVo9QGOQCxqQ46W5UJ0oQOOkDEB78TV5vz5XQO0E44QZ%2BC%2BN39isAYQmD1pZRFXoA4ws4j8vQY6pgFLsigvCCu%2FaRxAmssKsSFDphmHdGLIvuI7ymS4kGNXrhOAKbIuT61qFLcPnigptMO0PiAiSAsKtUByydJUXnBg9jxp0QdAIHo%2F1AQNeNXlGJZL1s1zmiigRaNR4%2FU3SgJ4kDNj7Dcge8wCWoW%2Fwcdm7qY1yLLrqlj1AsBnsyPs1luAadUL%2BpD%2BlQzSoT67t8bBawkdflKE3xP1KNxO9myAMzDjsWrg&X-Amz-Signature=be25dc5da9e883f65060adfc10603bdf95548fbf191f5e5b39b4b2e998c4ce7e&X-Amz-SignedHeaders=host&x-id=GetObject)
