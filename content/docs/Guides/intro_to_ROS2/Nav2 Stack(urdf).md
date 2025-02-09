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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SC67DN3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLm8Tp15ch7hfR2Dybgq254F1lTT499xHcKSVkYW%2F6vwIhALsx3eop%2FJQakB489lkueM97ulgmXwFZ08uNVWmZ%2FZZcKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE9qShHFS0GLSFcNsq3ANbl3wxV9KdNCfvbH%2FQ1HAcXgVSOI96pQ23lyF6dHIX05fbh%2BThTTFKeSatT3vB20OYltnps6MPr%2Bcff7s7Wy2npSZpIG15oBu8YYIejDibxcKftQAaPIIFajSIazplP2yKGRmblLlnC6Li7d3yCnTBDCV7Jp%2BxDgz1INAGgrEbo3Ie8fbZ7KT4Lft6l%2BxsQOwq0ihWSQ5V9j9cWmnFamtXDlltzYumns4SCXR8fotpIefj%2BEoPXt%2BMf8Pu7E5iTdSP6xHUwj5IDKyrcm%2BlFvSEBeeisgKY3lu7un99oX8I1LtaHjgFDfKmcMTJMhTFI839Fh%2BQB42OnI0ECTVFabG8B4MKQCaSJJXNJu5ASKTRJ7sS%2F4NnQhJl5fBYrp4HjbvtnZLZoOoqW69k7RMSD03mPxNkEkFhuDym1%2BH9gRzGhFZjlF9fFmlXfOnsdX24b%2BPECkDa3bN0EVtTde8Te%2B7RKpUAPLCb8ceDfAvxZ645ZlbCtBge62WQdWGbJpERqcO6KCBgojrTbHLmkfHcUyU6MRmYVAirFYgqUPrx7Bhil%2FOq0bWFZC%2FnlVNcbkoiVUG8Jn4iQRDoVC5VaBM1cVsDAssvjmmkcN24m9B0k03yGvzr12GcVGsPmDawHjCEoqC9BjqkASvJyj7PUldcsRLQJvrKVATMzNPzAoqKaN%2BAQan%2FDQMxlLT7RYGknKalBUOo4NwEmJJbTs%2FpxXM3J5lLPadr6GAQOQwCrutC329SAxv2YBLJsbfOxVuR0H4imQA0ZkJZj3Unfz%2BuqzrxYfR65N4BkOC89r8i5yZkqbCIXByGQpLGaJQEK9dcdYlufLqdpIz2Hpb0P8SsLNg2UVMGgA2%2FT511sJJH&X-Amz-Signature=32aad098ec6d41eb998e8c0e1955fe16e104db88a9f33e236113360f714e5218&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SC67DN3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLm8Tp15ch7hfR2Dybgq254F1lTT499xHcKSVkYW%2F6vwIhALsx3eop%2FJQakB489lkueM97ulgmXwFZ08uNVWmZ%2FZZcKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE9qShHFS0GLSFcNsq3ANbl3wxV9KdNCfvbH%2FQ1HAcXgVSOI96pQ23lyF6dHIX05fbh%2BThTTFKeSatT3vB20OYltnps6MPr%2Bcff7s7Wy2npSZpIG15oBu8YYIejDibxcKftQAaPIIFajSIazplP2yKGRmblLlnC6Li7d3yCnTBDCV7Jp%2BxDgz1INAGgrEbo3Ie8fbZ7KT4Lft6l%2BxsQOwq0ihWSQ5V9j9cWmnFamtXDlltzYumns4SCXR8fotpIefj%2BEoPXt%2BMf8Pu7E5iTdSP6xHUwj5IDKyrcm%2BlFvSEBeeisgKY3lu7un99oX8I1LtaHjgFDfKmcMTJMhTFI839Fh%2BQB42OnI0ECTVFabG8B4MKQCaSJJXNJu5ASKTRJ7sS%2F4NnQhJl5fBYrp4HjbvtnZLZoOoqW69k7RMSD03mPxNkEkFhuDym1%2BH9gRzGhFZjlF9fFmlXfOnsdX24b%2BPECkDa3bN0EVtTde8Te%2B7RKpUAPLCb8ceDfAvxZ645ZlbCtBge62WQdWGbJpERqcO6KCBgojrTbHLmkfHcUyU6MRmYVAirFYgqUPrx7Bhil%2FOq0bWFZC%2FnlVNcbkoiVUG8Jn4iQRDoVC5VaBM1cVsDAssvjmmkcN24m9B0k03yGvzr12GcVGsPmDawHjCEoqC9BjqkASvJyj7PUldcsRLQJvrKVATMzNPzAoqKaN%2BAQan%2FDQMxlLT7RYGknKalBUOo4NwEmJJbTs%2FpxXM3J5lLPadr6GAQOQwCrutC329SAxv2YBLJsbfOxVuR0H4imQA0ZkJZj3Unfz%2BuqzrxYfR65N4BkOC89r8i5yZkqbCIXByGQpLGaJQEK9dcdYlufLqdpIz2Hpb0P8SsLNg2UVMGgA2%2FT511sJJH&X-Amz-Signature=e199a92e64b1bfbce5f771d8bb8f8bff2cee33f157b23c8467c1ba807aa6d28b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SC67DN3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLm8Tp15ch7hfR2Dybgq254F1lTT499xHcKSVkYW%2F6vwIhALsx3eop%2FJQakB489lkueM97ulgmXwFZ08uNVWmZ%2FZZcKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE9qShHFS0GLSFcNsq3ANbl3wxV9KdNCfvbH%2FQ1HAcXgVSOI96pQ23lyF6dHIX05fbh%2BThTTFKeSatT3vB20OYltnps6MPr%2Bcff7s7Wy2npSZpIG15oBu8YYIejDibxcKftQAaPIIFajSIazplP2yKGRmblLlnC6Li7d3yCnTBDCV7Jp%2BxDgz1INAGgrEbo3Ie8fbZ7KT4Lft6l%2BxsQOwq0ihWSQ5V9j9cWmnFamtXDlltzYumns4SCXR8fotpIefj%2BEoPXt%2BMf8Pu7E5iTdSP6xHUwj5IDKyrcm%2BlFvSEBeeisgKY3lu7un99oX8I1LtaHjgFDfKmcMTJMhTFI839Fh%2BQB42OnI0ECTVFabG8B4MKQCaSJJXNJu5ASKTRJ7sS%2F4NnQhJl5fBYrp4HjbvtnZLZoOoqW69k7RMSD03mPxNkEkFhuDym1%2BH9gRzGhFZjlF9fFmlXfOnsdX24b%2BPECkDa3bN0EVtTde8Te%2B7RKpUAPLCb8ceDfAvxZ645ZlbCtBge62WQdWGbJpERqcO6KCBgojrTbHLmkfHcUyU6MRmYVAirFYgqUPrx7Bhil%2FOq0bWFZC%2FnlVNcbkoiVUG8Jn4iQRDoVC5VaBM1cVsDAssvjmmkcN24m9B0k03yGvzr12GcVGsPmDawHjCEoqC9BjqkASvJyj7PUldcsRLQJvrKVATMzNPzAoqKaN%2BAQan%2FDQMxlLT7RYGknKalBUOo4NwEmJJbTs%2FpxXM3J5lLPadr6GAQOQwCrutC329SAxv2YBLJsbfOxVuR0H4imQA0ZkJZj3Unfz%2BuqzrxYfR65N4BkOC89r8i5yZkqbCIXByGQpLGaJQEK9dcdYlufLqdpIz2Hpb0P8SsLNg2UVMGgA2%2FT511sJJH&X-Amz-Signature=289a5095979946c68fd3552008c1a8398a6678a83450fea81de2fbb5a48c204a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SC67DN3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLm8Tp15ch7hfR2Dybgq254F1lTT499xHcKSVkYW%2F6vwIhALsx3eop%2FJQakB489lkueM97ulgmXwFZ08uNVWmZ%2FZZcKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE9qShHFS0GLSFcNsq3ANbl3wxV9KdNCfvbH%2FQ1HAcXgVSOI96pQ23lyF6dHIX05fbh%2BThTTFKeSatT3vB20OYltnps6MPr%2Bcff7s7Wy2npSZpIG15oBu8YYIejDibxcKftQAaPIIFajSIazplP2yKGRmblLlnC6Li7d3yCnTBDCV7Jp%2BxDgz1INAGgrEbo3Ie8fbZ7KT4Lft6l%2BxsQOwq0ihWSQ5V9j9cWmnFamtXDlltzYumns4SCXR8fotpIefj%2BEoPXt%2BMf8Pu7E5iTdSP6xHUwj5IDKyrcm%2BlFvSEBeeisgKY3lu7un99oX8I1LtaHjgFDfKmcMTJMhTFI839Fh%2BQB42OnI0ECTVFabG8B4MKQCaSJJXNJu5ASKTRJ7sS%2F4NnQhJl5fBYrp4HjbvtnZLZoOoqW69k7RMSD03mPxNkEkFhuDym1%2BH9gRzGhFZjlF9fFmlXfOnsdX24b%2BPECkDa3bN0EVtTde8Te%2B7RKpUAPLCb8ceDfAvxZ645ZlbCtBge62WQdWGbJpERqcO6KCBgojrTbHLmkfHcUyU6MRmYVAirFYgqUPrx7Bhil%2FOq0bWFZC%2FnlVNcbkoiVUG8Jn4iQRDoVC5VaBM1cVsDAssvjmmkcN24m9B0k03yGvzr12GcVGsPmDawHjCEoqC9BjqkASvJyj7PUldcsRLQJvrKVATMzNPzAoqKaN%2BAQan%2FDQMxlLT7RYGknKalBUOo4NwEmJJbTs%2FpxXM3J5lLPadr6GAQOQwCrutC329SAxv2YBLJsbfOxVuR0H4imQA0ZkJZj3Unfz%2BuqzrxYfR65N4BkOC89r8i5yZkqbCIXByGQpLGaJQEK9dcdYlufLqdpIz2Hpb0P8SsLNg2UVMGgA2%2FT511sJJH&X-Amz-Signature=b7d68e48cda0c3bae67fb90423b6b5ce7c3b6e888c975c7df9456cb98197f3b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SC67DN3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLm8Tp15ch7hfR2Dybgq254F1lTT499xHcKSVkYW%2F6vwIhALsx3eop%2FJQakB489lkueM97ulgmXwFZ08uNVWmZ%2FZZcKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE9qShHFS0GLSFcNsq3ANbl3wxV9KdNCfvbH%2FQ1HAcXgVSOI96pQ23lyF6dHIX05fbh%2BThTTFKeSatT3vB20OYltnps6MPr%2Bcff7s7Wy2npSZpIG15oBu8YYIejDibxcKftQAaPIIFajSIazplP2yKGRmblLlnC6Li7d3yCnTBDCV7Jp%2BxDgz1INAGgrEbo3Ie8fbZ7KT4Lft6l%2BxsQOwq0ihWSQ5V9j9cWmnFamtXDlltzYumns4SCXR8fotpIefj%2BEoPXt%2BMf8Pu7E5iTdSP6xHUwj5IDKyrcm%2BlFvSEBeeisgKY3lu7un99oX8I1LtaHjgFDfKmcMTJMhTFI839Fh%2BQB42OnI0ECTVFabG8B4MKQCaSJJXNJu5ASKTRJ7sS%2F4NnQhJl5fBYrp4HjbvtnZLZoOoqW69k7RMSD03mPxNkEkFhuDym1%2BH9gRzGhFZjlF9fFmlXfOnsdX24b%2BPECkDa3bN0EVtTde8Te%2B7RKpUAPLCb8ceDfAvxZ645ZlbCtBge62WQdWGbJpERqcO6KCBgojrTbHLmkfHcUyU6MRmYVAirFYgqUPrx7Bhil%2FOq0bWFZC%2FnlVNcbkoiVUG8Jn4iQRDoVC5VaBM1cVsDAssvjmmkcN24m9B0k03yGvzr12GcVGsPmDawHjCEoqC9BjqkASvJyj7PUldcsRLQJvrKVATMzNPzAoqKaN%2BAQan%2FDQMxlLT7RYGknKalBUOo4NwEmJJbTs%2FpxXM3J5lLPadr6GAQOQwCrutC329SAxv2YBLJsbfOxVuR0H4imQA0ZkJZj3Unfz%2BuqzrxYfR65N4BkOC89r8i5yZkqbCIXByGQpLGaJQEK9dcdYlufLqdpIz2Hpb0P8SsLNg2UVMGgA2%2FT511sJJH&X-Amz-Signature=3a7a1770b2d3d9d75ea9b186712f54a61e6c1caf9ee89e2ce743d3f90c6a99f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SC67DN3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLm8Tp15ch7hfR2Dybgq254F1lTT499xHcKSVkYW%2F6vwIhALsx3eop%2FJQakB489lkueM97ulgmXwFZ08uNVWmZ%2FZZcKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE9qShHFS0GLSFcNsq3ANbl3wxV9KdNCfvbH%2FQ1HAcXgVSOI96pQ23lyF6dHIX05fbh%2BThTTFKeSatT3vB20OYltnps6MPr%2Bcff7s7Wy2npSZpIG15oBu8YYIejDibxcKftQAaPIIFajSIazplP2yKGRmblLlnC6Li7d3yCnTBDCV7Jp%2BxDgz1INAGgrEbo3Ie8fbZ7KT4Lft6l%2BxsQOwq0ihWSQ5V9j9cWmnFamtXDlltzYumns4SCXR8fotpIefj%2BEoPXt%2BMf8Pu7E5iTdSP6xHUwj5IDKyrcm%2BlFvSEBeeisgKY3lu7un99oX8I1LtaHjgFDfKmcMTJMhTFI839Fh%2BQB42OnI0ECTVFabG8B4MKQCaSJJXNJu5ASKTRJ7sS%2F4NnQhJl5fBYrp4HjbvtnZLZoOoqW69k7RMSD03mPxNkEkFhuDym1%2BH9gRzGhFZjlF9fFmlXfOnsdX24b%2BPECkDa3bN0EVtTde8Te%2B7RKpUAPLCb8ceDfAvxZ645ZlbCtBge62WQdWGbJpERqcO6KCBgojrTbHLmkfHcUyU6MRmYVAirFYgqUPrx7Bhil%2FOq0bWFZC%2FnlVNcbkoiVUG8Jn4iQRDoVC5VaBM1cVsDAssvjmmkcN24m9B0k03yGvzr12GcVGsPmDawHjCEoqC9BjqkASvJyj7PUldcsRLQJvrKVATMzNPzAoqKaN%2BAQan%2FDQMxlLT7RYGknKalBUOo4NwEmJJbTs%2FpxXM3J5lLPadr6GAQOQwCrutC329SAxv2YBLJsbfOxVuR0H4imQA0ZkJZj3Unfz%2BuqzrxYfR65N4BkOC89r8i5yZkqbCIXByGQpLGaJQEK9dcdYlufLqdpIz2Hpb0P8SsLNg2UVMGgA2%2FT511sJJH&X-Amz-Signature=f16068a52cd9d51a53b1c65ba4adc317b9dfff326892aceb3a1c1e64c85247cf&X-Amz-SignedHeaders=host&x-id=GetObject)
