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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYNXTBX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFJtAgHUMUGOJyu3JSdAa1LV%2Fw%2Fya68CGcWKoEcjq4DHAiAjth%2Fa%2F6D9e8LJkw4vn%2BYBM6cysoVNz1IP3orLA470BCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM2Qx%2FZddAzxTGGZqsKtwDkKI37sDKapDLmE2RGDbySopHHEGZt81nmD6biHlZNjXxEHO1h4%2Fs8dr7MspCtrkO%2BWPec0mawVJIpuQst9EmVlrQ2WjWlYU3%2FBYguZPOPc1xkV4px0MPppQbXEc3BMW%2BO58xAQkO%2FUqb682T9XAUT%2BygZTiZGqMqrzAkDbxsfTGxlv7EIfJL0ond2LSCPHwPXC45M%2BNshYrezBCCSE8jgkn2jXrVNUfc5iReJUGsnKErZTqbi5g2r5tskfIqvJ9CHj0QuNtoaXlCOA8K57KJ8A6L8F%2FBds6fluNNqKt40TW8GERlgIlq5rSpUy%2BBh3wICwWPMrM31iIgwPR5znYdlfkDwSEuc%2FLqYAcZuBruiuyxVEHs4Q9XszsnypFkgC2zDO%2BpS1Pp4XQNbG6950Bw4PEhBLUDKGiWBslQMN8zJxYf9C32XdOxNtwJodkSObMaUONG2ENHkV%2BGHXbXthd%2FdKVY9%2BebWg4GinDIqchMzl4CUtEZDMBAnANHwDZX8zgPWuRia5S2o1qSjA%2FPCMM0RVvJ0ODio%2B9m8W0tDN0ZSDG7jeSlA6LJqBmajh%2FWyicm6ZpKM1bgbqca7%2BEtlFYI%2FsPcrN3o2ab%2B3q%2F2PxfQnb%2BIUj6wEfcH%2BtrQfSwws%2BrLvQY6pgHTR1Xs6xA8Js2CGyEMcNUNj0Tf2s8LzEwl%2BiSZmUdGcMlKPetd7tv8P%2B5OBnBk%2BbA6VpBJtEvULpkmXPfeJoOrzWHWhek4PDEs4f0fZ6vUpNiYOfoCkWZzwSwjM8oVqPSjb6QRntMfy1eqhkfRL5WwNc9TuppldkEI9P3FfZVvUqkJ0a9E2AN%2BtO3oTcWMz1Uc5II2%2BZara%2BZX8kCxHsj1XzASMuXc&X-Amz-Signature=f23e90aaad320cbe8c81c09d60f3bf4f536b88d0cf6d1bc61a279f86a8a55e56&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYNXTBX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFJtAgHUMUGOJyu3JSdAa1LV%2Fw%2Fya68CGcWKoEcjq4DHAiAjth%2Fa%2F6D9e8LJkw4vn%2BYBM6cysoVNz1IP3orLA470BCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM2Qx%2FZddAzxTGGZqsKtwDkKI37sDKapDLmE2RGDbySopHHEGZt81nmD6biHlZNjXxEHO1h4%2Fs8dr7MspCtrkO%2BWPec0mawVJIpuQst9EmVlrQ2WjWlYU3%2FBYguZPOPc1xkV4px0MPppQbXEc3BMW%2BO58xAQkO%2FUqb682T9XAUT%2BygZTiZGqMqrzAkDbxsfTGxlv7EIfJL0ond2LSCPHwPXC45M%2BNshYrezBCCSE8jgkn2jXrVNUfc5iReJUGsnKErZTqbi5g2r5tskfIqvJ9CHj0QuNtoaXlCOA8K57KJ8A6L8F%2FBds6fluNNqKt40TW8GERlgIlq5rSpUy%2BBh3wICwWPMrM31iIgwPR5znYdlfkDwSEuc%2FLqYAcZuBruiuyxVEHs4Q9XszsnypFkgC2zDO%2BpS1Pp4XQNbG6950Bw4PEhBLUDKGiWBslQMN8zJxYf9C32XdOxNtwJodkSObMaUONG2ENHkV%2BGHXbXthd%2FdKVY9%2BebWg4GinDIqchMzl4CUtEZDMBAnANHwDZX8zgPWuRia5S2o1qSjA%2FPCMM0RVvJ0ODio%2B9m8W0tDN0ZSDG7jeSlA6LJqBmajh%2FWyicm6ZpKM1bgbqca7%2BEtlFYI%2FsPcrN3o2ab%2B3q%2F2PxfQnb%2BIUj6wEfcH%2BtrQfSwws%2BrLvQY6pgHTR1Xs6xA8Js2CGyEMcNUNj0Tf2s8LzEwl%2BiSZmUdGcMlKPetd7tv8P%2B5OBnBk%2BbA6VpBJtEvULpkmXPfeJoOrzWHWhek4PDEs4f0fZ6vUpNiYOfoCkWZzwSwjM8oVqPSjb6QRntMfy1eqhkfRL5WwNc9TuppldkEI9P3FfZVvUqkJ0a9E2AN%2BtO3oTcWMz1Uc5II2%2BZara%2BZX8kCxHsj1XzASMuXc&X-Amz-Signature=32bafe6c3040f31ef74a570d9a70a31f895d2dd8ca967082b80bd05d36b8397e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYNXTBX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFJtAgHUMUGOJyu3JSdAa1LV%2Fw%2Fya68CGcWKoEcjq4DHAiAjth%2Fa%2F6D9e8LJkw4vn%2BYBM6cysoVNz1IP3orLA470BCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM2Qx%2FZddAzxTGGZqsKtwDkKI37sDKapDLmE2RGDbySopHHEGZt81nmD6biHlZNjXxEHO1h4%2Fs8dr7MspCtrkO%2BWPec0mawVJIpuQst9EmVlrQ2WjWlYU3%2FBYguZPOPc1xkV4px0MPppQbXEc3BMW%2BO58xAQkO%2FUqb682T9XAUT%2BygZTiZGqMqrzAkDbxsfTGxlv7EIfJL0ond2LSCPHwPXC45M%2BNshYrezBCCSE8jgkn2jXrVNUfc5iReJUGsnKErZTqbi5g2r5tskfIqvJ9CHj0QuNtoaXlCOA8K57KJ8A6L8F%2FBds6fluNNqKt40TW8GERlgIlq5rSpUy%2BBh3wICwWPMrM31iIgwPR5znYdlfkDwSEuc%2FLqYAcZuBruiuyxVEHs4Q9XszsnypFkgC2zDO%2BpS1Pp4XQNbG6950Bw4PEhBLUDKGiWBslQMN8zJxYf9C32XdOxNtwJodkSObMaUONG2ENHkV%2BGHXbXthd%2FdKVY9%2BebWg4GinDIqchMzl4CUtEZDMBAnANHwDZX8zgPWuRia5S2o1qSjA%2FPCMM0RVvJ0ODio%2B9m8W0tDN0ZSDG7jeSlA6LJqBmajh%2FWyicm6ZpKM1bgbqca7%2BEtlFYI%2FsPcrN3o2ab%2B3q%2F2PxfQnb%2BIUj6wEfcH%2BtrQfSwws%2BrLvQY6pgHTR1Xs6xA8Js2CGyEMcNUNj0Tf2s8LzEwl%2BiSZmUdGcMlKPetd7tv8P%2B5OBnBk%2BbA6VpBJtEvULpkmXPfeJoOrzWHWhek4PDEs4f0fZ6vUpNiYOfoCkWZzwSwjM8oVqPSjb6QRntMfy1eqhkfRL5WwNc9TuppldkEI9P3FfZVvUqkJ0a9E2AN%2BtO3oTcWMz1Uc5II2%2BZara%2BZX8kCxHsj1XzASMuXc&X-Amz-Signature=f252d92887c62373ad5395b6fafaf10f6a60e3cdab60dc75156fa3b1c507e2a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYNXTBX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFJtAgHUMUGOJyu3JSdAa1LV%2Fw%2Fya68CGcWKoEcjq4DHAiAjth%2Fa%2F6D9e8LJkw4vn%2BYBM6cysoVNz1IP3orLA470BCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM2Qx%2FZddAzxTGGZqsKtwDkKI37sDKapDLmE2RGDbySopHHEGZt81nmD6biHlZNjXxEHO1h4%2Fs8dr7MspCtrkO%2BWPec0mawVJIpuQst9EmVlrQ2WjWlYU3%2FBYguZPOPc1xkV4px0MPppQbXEc3BMW%2BO58xAQkO%2FUqb682T9XAUT%2BygZTiZGqMqrzAkDbxsfTGxlv7EIfJL0ond2LSCPHwPXC45M%2BNshYrezBCCSE8jgkn2jXrVNUfc5iReJUGsnKErZTqbi5g2r5tskfIqvJ9CHj0QuNtoaXlCOA8K57KJ8A6L8F%2FBds6fluNNqKt40TW8GERlgIlq5rSpUy%2BBh3wICwWPMrM31iIgwPR5znYdlfkDwSEuc%2FLqYAcZuBruiuyxVEHs4Q9XszsnypFkgC2zDO%2BpS1Pp4XQNbG6950Bw4PEhBLUDKGiWBslQMN8zJxYf9C32XdOxNtwJodkSObMaUONG2ENHkV%2BGHXbXthd%2FdKVY9%2BebWg4GinDIqchMzl4CUtEZDMBAnANHwDZX8zgPWuRia5S2o1qSjA%2FPCMM0RVvJ0ODio%2B9m8W0tDN0ZSDG7jeSlA6LJqBmajh%2FWyicm6ZpKM1bgbqca7%2BEtlFYI%2FsPcrN3o2ab%2B3q%2F2PxfQnb%2BIUj6wEfcH%2BtrQfSwws%2BrLvQY6pgHTR1Xs6xA8Js2CGyEMcNUNj0Tf2s8LzEwl%2BiSZmUdGcMlKPetd7tv8P%2B5OBnBk%2BbA6VpBJtEvULpkmXPfeJoOrzWHWhek4PDEs4f0fZ6vUpNiYOfoCkWZzwSwjM8oVqPSjb6QRntMfy1eqhkfRL5WwNc9TuppldkEI9P3FfZVvUqkJ0a9E2AN%2BtO3oTcWMz1Uc5II2%2BZara%2BZX8kCxHsj1XzASMuXc&X-Amz-Signature=445fe8a3175d416ca7228d2755372d7bc5f7c4a97d9d3de7a8f163503116c5d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYNXTBX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFJtAgHUMUGOJyu3JSdAa1LV%2Fw%2Fya68CGcWKoEcjq4DHAiAjth%2Fa%2F6D9e8LJkw4vn%2BYBM6cysoVNz1IP3orLA470BCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM2Qx%2FZddAzxTGGZqsKtwDkKI37sDKapDLmE2RGDbySopHHEGZt81nmD6biHlZNjXxEHO1h4%2Fs8dr7MspCtrkO%2BWPec0mawVJIpuQst9EmVlrQ2WjWlYU3%2FBYguZPOPc1xkV4px0MPppQbXEc3BMW%2BO58xAQkO%2FUqb682T9XAUT%2BygZTiZGqMqrzAkDbxsfTGxlv7EIfJL0ond2LSCPHwPXC45M%2BNshYrezBCCSE8jgkn2jXrVNUfc5iReJUGsnKErZTqbi5g2r5tskfIqvJ9CHj0QuNtoaXlCOA8K57KJ8A6L8F%2FBds6fluNNqKt40TW8GERlgIlq5rSpUy%2BBh3wICwWPMrM31iIgwPR5znYdlfkDwSEuc%2FLqYAcZuBruiuyxVEHs4Q9XszsnypFkgC2zDO%2BpS1Pp4XQNbG6950Bw4PEhBLUDKGiWBslQMN8zJxYf9C32XdOxNtwJodkSObMaUONG2ENHkV%2BGHXbXthd%2FdKVY9%2BebWg4GinDIqchMzl4CUtEZDMBAnANHwDZX8zgPWuRia5S2o1qSjA%2FPCMM0RVvJ0ODio%2B9m8W0tDN0ZSDG7jeSlA6LJqBmajh%2FWyicm6ZpKM1bgbqca7%2BEtlFYI%2FsPcrN3o2ab%2B3q%2F2PxfQnb%2BIUj6wEfcH%2BtrQfSwws%2BrLvQY6pgHTR1Xs6xA8Js2CGyEMcNUNj0Tf2s8LzEwl%2BiSZmUdGcMlKPetd7tv8P%2B5OBnBk%2BbA6VpBJtEvULpkmXPfeJoOrzWHWhek4PDEs4f0fZ6vUpNiYOfoCkWZzwSwjM8oVqPSjb6QRntMfy1eqhkfRL5WwNc9TuppldkEI9P3FfZVvUqkJ0a9E2AN%2BtO3oTcWMz1Uc5II2%2BZara%2BZX8kCxHsj1XzASMuXc&X-Amz-Signature=78f59deec572636c8f5fba8e01f4886f56c00722078ecdfdbf2a1c3ce2ca0265&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYNXTBX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFJtAgHUMUGOJyu3JSdAa1LV%2Fw%2Fya68CGcWKoEcjq4DHAiAjth%2Fa%2F6D9e8LJkw4vn%2BYBM6cysoVNz1IP3orLA470BCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM2Qx%2FZddAzxTGGZqsKtwDkKI37sDKapDLmE2RGDbySopHHEGZt81nmD6biHlZNjXxEHO1h4%2Fs8dr7MspCtrkO%2BWPec0mawVJIpuQst9EmVlrQ2WjWlYU3%2FBYguZPOPc1xkV4px0MPppQbXEc3BMW%2BO58xAQkO%2FUqb682T9XAUT%2BygZTiZGqMqrzAkDbxsfTGxlv7EIfJL0ond2LSCPHwPXC45M%2BNshYrezBCCSE8jgkn2jXrVNUfc5iReJUGsnKErZTqbi5g2r5tskfIqvJ9CHj0QuNtoaXlCOA8K57KJ8A6L8F%2FBds6fluNNqKt40TW8GERlgIlq5rSpUy%2BBh3wICwWPMrM31iIgwPR5znYdlfkDwSEuc%2FLqYAcZuBruiuyxVEHs4Q9XszsnypFkgC2zDO%2BpS1Pp4XQNbG6950Bw4PEhBLUDKGiWBslQMN8zJxYf9C32XdOxNtwJodkSObMaUONG2ENHkV%2BGHXbXthd%2FdKVY9%2BebWg4GinDIqchMzl4CUtEZDMBAnANHwDZX8zgPWuRia5S2o1qSjA%2FPCMM0RVvJ0ODio%2B9m8W0tDN0ZSDG7jeSlA6LJqBmajh%2FWyicm6ZpKM1bgbqca7%2BEtlFYI%2FsPcrN3o2ab%2B3q%2F2PxfQnb%2BIUj6wEfcH%2BtrQfSwws%2BrLvQY6pgHTR1Xs6xA8Js2CGyEMcNUNj0Tf2s8LzEwl%2BiSZmUdGcMlKPetd7tv8P%2B5OBnBk%2BbA6VpBJtEvULpkmXPfeJoOrzWHWhek4PDEs4f0fZ6vUpNiYOfoCkWZzwSwjM8oVqPSjb6QRntMfy1eqhkfRL5WwNc9TuppldkEI9P3FfZVvUqkJ0a9E2AN%2BtO3oTcWMz1Uc5II2%2BZara%2BZX8kCxHsj1XzASMuXc&X-Amz-Signature=65c7f30c2fa47338f5ec202e4dca52fb51fda113b7b05f302d45596d1a4aec49&X-Amz-SignedHeaders=host&x-id=GetObject)
