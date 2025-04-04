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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWRTRHF3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQFHgfROt8p6eoCKEI%2FGmuVpE0ctvG1TlkFm2k457oTAIhAL5HBHgUK1rmZpYSBU2dOteF7nvft%2FO7gWZDSAeqSNH1Kv8DCBIQABoMNjM3NDIzMTgzODA1Igw5jdWrwujjdb3SBNMq3AP0tRRGM9v1ipkkrTbbaskEIi8lZRA6cMZjZ0e98OlgvMoI093J3WNk8Ui6gKTd3GOGUQdDV3eybEzhdOIsauaSQB8%2B6CW6aXCisw1FT14C0i4gsFfCNOmrPV69gxD0fVa9zO1UTysVLKlgU3%2FPyQTaUFLHeu2ytnqi2fGmGcU0fpMa0DHF6syhNIf52hp2GDbcSRp4jZ37%2BVdRaCFubYu%2F%2FYaBgyBSd0W6A5HCGsqwhVnfJxFuhsI%2FOx%2FvGxmAZ%2FDMVu7S573Dr%2FSgqAsfN7A3iNGeqNOat9cdpJS0BvhTZEYRPEFFjziNG%2FEskuxOpMsazoRhi%2BqIyiRm6X8hoJzRLUGO76KMJgmpaXSsO3GsV6O6kweuwtJbgHKzmoMReA%2BcSi0w6vhOW%2FSE%2FhN9X6biNX8lIoxgj4CmbKzY0IYbDroAz%2F8PwfvbcW7QTG4UEfulHrb4xKbm3s%2F6bW7h9dvHVY%2F91WI8GLm2NUiRTqPVkbfj6Bm8LydpionB%2BDcObcMvZWGzqHUg5xwqzK%2Bf11cLjE0BK1%2FaTBs9i7iINcdUFWhAaOAXXEeem1OwubY3V1wACgkQb3BELcwf2i4jx7pb4mQW8KUunEEOu7%2BhtKgdQZRsA5piurls2iWHBTDxrr6%2FBjqkASpJOBG4AjlIJ0JP9J7h%2B%2FZ8g5uWT7ZfrImC0xIx0GimOHItzCa8aBjT%2FUYSmwJC9HA9imx%2F3Bcn1XgYED1vBjcS4meEJ9jbQR8vKLlKkRvpwJdF2PQDT9o9efpF2tSj0qAqXpbGHY0IKRWsxAs45cDaejZIlaO2tXECDmfvBbIHpuUjdzWBO0nfSqnph%2BieBD5I4%2FnvrA0EqvQsw8%2FvhzY7ltTB&X-Amz-Signature=c9007cc27599646279192a2fbf5b61a8694fc9305d546a9812a0cd47fe6f7bac&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWRTRHF3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQFHgfROt8p6eoCKEI%2FGmuVpE0ctvG1TlkFm2k457oTAIhAL5HBHgUK1rmZpYSBU2dOteF7nvft%2FO7gWZDSAeqSNH1Kv8DCBIQABoMNjM3NDIzMTgzODA1Igw5jdWrwujjdb3SBNMq3AP0tRRGM9v1ipkkrTbbaskEIi8lZRA6cMZjZ0e98OlgvMoI093J3WNk8Ui6gKTd3GOGUQdDV3eybEzhdOIsauaSQB8%2B6CW6aXCisw1FT14C0i4gsFfCNOmrPV69gxD0fVa9zO1UTysVLKlgU3%2FPyQTaUFLHeu2ytnqi2fGmGcU0fpMa0DHF6syhNIf52hp2GDbcSRp4jZ37%2BVdRaCFubYu%2F%2FYaBgyBSd0W6A5HCGsqwhVnfJxFuhsI%2FOx%2FvGxmAZ%2FDMVu7S573Dr%2FSgqAsfN7A3iNGeqNOat9cdpJS0BvhTZEYRPEFFjziNG%2FEskuxOpMsazoRhi%2BqIyiRm6X8hoJzRLUGO76KMJgmpaXSsO3GsV6O6kweuwtJbgHKzmoMReA%2BcSi0w6vhOW%2FSE%2FhN9X6biNX8lIoxgj4CmbKzY0IYbDroAz%2F8PwfvbcW7QTG4UEfulHrb4xKbm3s%2F6bW7h9dvHVY%2F91WI8GLm2NUiRTqPVkbfj6Bm8LydpionB%2BDcObcMvZWGzqHUg5xwqzK%2Bf11cLjE0BK1%2FaTBs9i7iINcdUFWhAaOAXXEeem1OwubY3V1wACgkQb3BELcwf2i4jx7pb4mQW8KUunEEOu7%2BhtKgdQZRsA5piurls2iWHBTDxrr6%2FBjqkASpJOBG4AjlIJ0JP9J7h%2B%2FZ8g5uWT7ZfrImC0xIx0GimOHItzCa8aBjT%2FUYSmwJC9HA9imx%2F3Bcn1XgYED1vBjcS4meEJ9jbQR8vKLlKkRvpwJdF2PQDT9o9efpF2tSj0qAqXpbGHY0IKRWsxAs45cDaejZIlaO2tXECDmfvBbIHpuUjdzWBO0nfSqnph%2BieBD5I4%2FnvrA0EqvQsw8%2FvhzY7ltTB&X-Amz-Signature=57de07e6d0c57841d83f72fdb961f0a2808eb333ec15e577e8dc98c3049bc7e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWRTRHF3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQFHgfROt8p6eoCKEI%2FGmuVpE0ctvG1TlkFm2k457oTAIhAL5HBHgUK1rmZpYSBU2dOteF7nvft%2FO7gWZDSAeqSNH1Kv8DCBIQABoMNjM3NDIzMTgzODA1Igw5jdWrwujjdb3SBNMq3AP0tRRGM9v1ipkkrTbbaskEIi8lZRA6cMZjZ0e98OlgvMoI093J3WNk8Ui6gKTd3GOGUQdDV3eybEzhdOIsauaSQB8%2B6CW6aXCisw1FT14C0i4gsFfCNOmrPV69gxD0fVa9zO1UTysVLKlgU3%2FPyQTaUFLHeu2ytnqi2fGmGcU0fpMa0DHF6syhNIf52hp2GDbcSRp4jZ37%2BVdRaCFubYu%2F%2FYaBgyBSd0W6A5HCGsqwhVnfJxFuhsI%2FOx%2FvGxmAZ%2FDMVu7S573Dr%2FSgqAsfN7A3iNGeqNOat9cdpJS0BvhTZEYRPEFFjziNG%2FEskuxOpMsazoRhi%2BqIyiRm6X8hoJzRLUGO76KMJgmpaXSsO3GsV6O6kweuwtJbgHKzmoMReA%2BcSi0w6vhOW%2FSE%2FhN9X6biNX8lIoxgj4CmbKzY0IYbDroAz%2F8PwfvbcW7QTG4UEfulHrb4xKbm3s%2F6bW7h9dvHVY%2F91WI8GLm2NUiRTqPVkbfj6Bm8LydpionB%2BDcObcMvZWGzqHUg5xwqzK%2Bf11cLjE0BK1%2FaTBs9i7iINcdUFWhAaOAXXEeem1OwubY3V1wACgkQb3BELcwf2i4jx7pb4mQW8KUunEEOu7%2BhtKgdQZRsA5piurls2iWHBTDxrr6%2FBjqkASpJOBG4AjlIJ0JP9J7h%2B%2FZ8g5uWT7ZfrImC0xIx0GimOHItzCa8aBjT%2FUYSmwJC9HA9imx%2F3Bcn1XgYED1vBjcS4meEJ9jbQR8vKLlKkRvpwJdF2PQDT9o9efpF2tSj0qAqXpbGHY0IKRWsxAs45cDaejZIlaO2tXECDmfvBbIHpuUjdzWBO0nfSqnph%2BieBD5I4%2FnvrA0EqvQsw8%2FvhzY7ltTB&X-Amz-Signature=6bf8872dcfbbe727d2548922cfd2de711d10564eafa5c70d541d1aa1645cc390&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWRTRHF3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQFHgfROt8p6eoCKEI%2FGmuVpE0ctvG1TlkFm2k457oTAIhAL5HBHgUK1rmZpYSBU2dOteF7nvft%2FO7gWZDSAeqSNH1Kv8DCBIQABoMNjM3NDIzMTgzODA1Igw5jdWrwujjdb3SBNMq3AP0tRRGM9v1ipkkrTbbaskEIi8lZRA6cMZjZ0e98OlgvMoI093J3WNk8Ui6gKTd3GOGUQdDV3eybEzhdOIsauaSQB8%2B6CW6aXCisw1FT14C0i4gsFfCNOmrPV69gxD0fVa9zO1UTysVLKlgU3%2FPyQTaUFLHeu2ytnqi2fGmGcU0fpMa0DHF6syhNIf52hp2GDbcSRp4jZ37%2BVdRaCFubYu%2F%2FYaBgyBSd0W6A5HCGsqwhVnfJxFuhsI%2FOx%2FvGxmAZ%2FDMVu7S573Dr%2FSgqAsfN7A3iNGeqNOat9cdpJS0BvhTZEYRPEFFjziNG%2FEskuxOpMsazoRhi%2BqIyiRm6X8hoJzRLUGO76KMJgmpaXSsO3GsV6O6kweuwtJbgHKzmoMReA%2BcSi0w6vhOW%2FSE%2FhN9X6biNX8lIoxgj4CmbKzY0IYbDroAz%2F8PwfvbcW7QTG4UEfulHrb4xKbm3s%2F6bW7h9dvHVY%2F91WI8GLm2NUiRTqPVkbfj6Bm8LydpionB%2BDcObcMvZWGzqHUg5xwqzK%2Bf11cLjE0BK1%2FaTBs9i7iINcdUFWhAaOAXXEeem1OwubY3V1wACgkQb3BELcwf2i4jx7pb4mQW8KUunEEOu7%2BhtKgdQZRsA5piurls2iWHBTDxrr6%2FBjqkASpJOBG4AjlIJ0JP9J7h%2B%2FZ8g5uWT7ZfrImC0xIx0GimOHItzCa8aBjT%2FUYSmwJC9HA9imx%2F3Bcn1XgYED1vBjcS4meEJ9jbQR8vKLlKkRvpwJdF2PQDT9o9efpF2tSj0qAqXpbGHY0IKRWsxAs45cDaejZIlaO2tXECDmfvBbIHpuUjdzWBO0nfSqnph%2BieBD5I4%2FnvrA0EqvQsw8%2FvhzY7ltTB&X-Amz-Signature=20ccb12833ee26e84f713ac0f233b0ee1f064e9b021c000111693639084eade8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWRTRHF3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQFHgfROt8p6eoCKEI%2FGmuVpE0ctvG1TlkFm2k457oTAIhAL5HBHgUK1rmZpYSBU2dOteF7nvft%2FO7gWZDSAeqSNH1Kv8DCBIQABoMNjM3NDIzMTgzODA1Igw5jdWrwujjdb3SBNMq3AP0tRRGM9v1ipkkrTbbaskEIi8lZRA6cMZjZ0e98OlgvMoI093J3WNk8Ui6gKTd3GOGUQdDV3eybEzhdOIsauaSQB8%2B6CW6aXCisw1FT14C0i4gsFfCNOmrPV69gxD0fVa9zO1UTysVLKlgU3%2FPyQTaUFLHeu2ytnqi2fGmGcU0fpMa0DHF6syhNIf52hp2GDbcSRp4jZ37%2BVdRaCFubYu%2F%2FYaBgyBSd0W6A5HCGsqwhVnfJxFuhsI%2FOx%2FvGxmAZ%2FDMVu7S573Dr%2FSgqAsfN7A3iNGeqNOat9cdpJS0BvhTZEYRPEFFjziNG%2FEskuxOpMsazoRhi%2BqIyiRm6X8hoJzRLUGO76KMJgmpaXSsO3GsV6O6kweuwtJbgHKzmoMReA%2BcSi0w6vhOW%2FSE%2FhN9X6biNX8lIoxgj4CmbKzY0IYbDroAz%2F8PwfvbcW7QTG4UEfulHrb4xKbm3s%2F6bW7h9dvHVY%2F91WI8GLm2NUiRTqPVkbfj6Bm8LydpionB%2BDcObcMvZWGzqHUg5xwqzK%2Bf11cLjE0BK1%2FaTBs9i7iINcdUFWhAaOAXXEeem1OwubY3V1wACgkQb3BELcwf2i4jx7pb4mQW8KUunEEOu7%2BhtKgdQZRsA5piurls2iWHBTDxrr6%2FBjqkASpJOBG4AjlIJ0JP9J7h%2B%2FZ8g5uWT7ZfrImC0xIx0GimOHItzCa8aBjT%2FUYSmwJC9HA9imx%2F3Bcn1XgYED1vBjcS4meEJ9jbQR8vKLlKkRvpwJdF2PQDT9o9efpF2tSj0qAqXpbGHY0IKRWsxAs45cDaejZIlaO2tXECDmfvBbIHpuUjdzWBO0nfSqnph%2BieBD5I4%2FnvrA0EqvQsw8%2FvhzY7ltTB&X-Amz-Signature=46f5b6e1e6aef5da9e83baa1791201eb1e32b32a523866f91d42f3f1e9e9a81a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWRTRHF3%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQFHgfROt8p6eoCKEI%2FGmuVpE0ctvG1TlkFm2k457oTAIhAL5HBHgUK1rmZpYSBU2dOteF7nvft%2FO7gWZDSAeqSNH1Kv8DCBIQABoMNjM3NDIzMTgzODA1Igw5jdWrwujjdb3SBNMq3AP0tRRGM9v1ipkkrTbbaskEIi8lZRA6cMZjZ0e98OlgvMoI093J3WNk8Ui6gKTd3GOGUQdDV3eybEzhdOIsauaSQB8%2B6CW6aXCisw1FT14C0i4gsFfCNOmrPV69gxD0fVa9zO1UTysVLKlgU3%2FPyQTaUFLHeu2ytnqi2fGmGcU0fpMa0DHF6syhNIf52hp2GDbcSRp4jZ37%2BVdRaCFubYu%2F%2FYaBgyBSd0W6A5HCGsqwhVnfJxFuhsI%2FOx%2FvGxmAZ%2FDMVu7S573Dr%2FSgqAsfN7A3iNGeqNOat9cdpJS0BvhTZEYRPEFFjziNG%2FEskuxOpMsazoRhi%2BqIyiRm6X8hoJzRLUGO76KMJgmpaXSsO3GsV6O6kweuwtJbgHKzmoMReA%2BcSi0w6vhOW%2FSE%2FhN9X6biNX8lIoxgj4CmbKzY0IYbDroAz%2F8PwfvbcW7QTG4UEfulHrb4xKbm3s%2F6bW7h9dvHVY%2F91WI8GLm2NUiRTqPVkbfj6Bm8LydpionB%2BDcObcMvZWGzqHUg5xwqzK%2Bf11cLjE0BK1%2FaTBs9i7iINcdUFWhAaOAXXEeem1OwubY3V1wACgkQb3BELcwf2i4jx7pb4mQW8KUunEEOu7%2BhtKgdQZRsA5piurls2iWHBTDxrr6%2FBjqkASpJOBG4AjlIJ0JP9J7h%2B%2FZ8g5uWT7ZfrImC0xIx0GimOHItzCa8aBjT%2FUYSmwJC9HA9imx%2F3Bcn1XgYED1vBjcS4meEJ9jbQR8vKLlKkRvpwJdF2PQDT9o9efpF2tSj0qAqXpbGHY0IKRWsxAs45cDaejZIlaO2tXECDmfvBbIHpuUjdzWBO0nfSqnph%2BieBD5I4%2FnvrA0EqvQsw8%2FvhzY7ltTB&X-Amz-Signature=e9d19d7861b9959b25207fea1541a7de223e3de9e2e38fe961e1f9e1c0112941&X-Amz-SignedHeaders=host&x-id=GetObject)
