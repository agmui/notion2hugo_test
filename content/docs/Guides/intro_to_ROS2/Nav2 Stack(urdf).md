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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KVYCG7H%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkqk4l3HDydLKkUFxI6zl3pGMdEHhRaPs454X2bM2mJgIhAK6Zxec8tKcW4iXY2ZNyee3G3B4DIT6YX4rivI2FDJpvKv8DCBIQABoMNjM3NDIzMTgzODA1Igx0FuJv0XuMJK0LoTAq3AMD3K9VAoehN4ZIjQ7w22A0GE7Dp9UP%2FuDXEZlwXJdmXDcVW5CEcFY%2FJjS2FiYO9VNriXkrz2gbgE1FGS21ZGxLojpeaXct5lfJQORSCR7ECMfP1SZg6ARos86UjDYjvkqKgf7WLWYhsBKq%2BZzIYuPDhvWC8q%2BIzwAERWHxA0poGg4G%2FcDGC51QbHCKl0e0%2BqTo8isbnfgBQ1TJXdcZuyVkYQhVzge1oyyj5Ej4ls47VlKiBCYRwCw8LEm80yr4EhOd3fvd66z7JeJiBv5Ws3XrjztdJWc7woluEq9YnM2LAlf2QYMkSLPuKb4EZvX13phvsj9ktq602Z0LRJA0Hd%2F2JdWXSZEDiofdL4lQNwe6%2BXhoyt51P5n1dyczKpePxSu6hkuBpLLjixMqg5f4NloHqlcbjq9aGnW%2FHbnh2pvOJ7QSxcrXWZkhZIXxGsvrkfpP5eFw89Dytg7W9v8BFP0iPXyidIaxu01Y9DdholP2lBr6%2BBU7JiIx812ENuWCkYSbUuOBwMr2A%2FGR%2BQdHlnVdH%2Bv55Ov9sJtiZgN%2FE2SkDn251QWW%2BglXatThcNG7Y25x8HwKguR3Oe%2FeaVnXvk9LNz7K5X7tSq71GiwsPWO6PUigOzdyM5hTSRUe5TDWyL6%2FBjqkAWMuAvrhJoyS5ePhrsGEmsx87xYqPDwb6YOTUgqnV9REmC3qdK9y5qky0vK2Nhk7yok%2ByeAroVOmfhPkZliE3%2FXznvM0l8uW8xyZ87xmL7S0eb%2BLkznce2rdueYOSl386mf7WMjPFiER4lcvsQS21EsMZWGsdCqvwEaiUfs3D%2BpPJoVy53HluTMylmrWHUZ7emqPW0GQNdfYnwtwglBPPvY%2BxHMF&X-Amz-Signature=271d8d4462ceb5f0786c35909667a067c9b1c2005b702e042948761f08e0bdf6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KVYCG7H%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkqk4l3HDydLKkUFxI6zl3pGMdEHhRaPs454X2bM2mJgIhAK6Zxec8tKcW4iXY2ZNyee3G3B4DIT6YX4rivI2FDJpvKv8DCBIQABoMNjM3NDIzMTgzODA1Igx0FuJv0XuMJK0LoTAq3AMD3K9VAoehN4ZIjQ7w22A0GE7Dp9UP%2FuDXEZlwXJdmXDcVW5CEcFY%2FJjS2FiYO9VNriXkrz2gbgE1FGS21ZGxLojpeaXct5lfJQORSCR7ECMfP1SZg6ARos86UjDYjvkqKgf7WLWYhsBKq%2BZzIYuPDhvWC8q%2BIzwAERWHxA0poGg4G%2FcDGC51QbHCKl0e0%2BqTo8isbnfgBQ1TJXdcZuyVkYQhVzge1oyyj5Ej4ls47VlKiBCYRwCw8LEm80yr4EhOd3fvd66z7JeJiBv5Ws3XrjztdJWc7woluEq9YnM2LAlf2QYMkSLPuKb4EZvX13phvsj9ktq602Z0LRJA0Hd%2F2JdWXSZEDiofdL4lQNwe6%2BXhoyt51P5n1dyczKpePxSu6hkuBpLLjixMqg5f4NloHqlcbjq9aGnW%2FHbnh2pvOJ7QSxcrXWZkhZIXxGsvrkfpP5eFw89Dytg7W9v8BFP0iPXyidIaxu01Y9DdholP2lBr6%2BBU7JiIx812ENuWCkYSbUuOBwMr2A%2FGR%2BQdHlnVdH%2Bv55Ov9sJtiZgN%2FE2SkDn251QWW%2BglXatThcNG7Y25x8HwKguR3Oe%2FeaVnXvk9LNz7K5X7tSq71GiwsPWO6PUigOzdyM5hTSRUe5TDWyL6%2FBjqkAWMuAvrhJoyS5ePhrsGEmsx87xYqPDwb6YOTUgqnV9REmC3qdK9y5qky0vK2Nhk7yok%2ByeAroVOmfhPkZliE3%2FXznvM0l8uW8xyZ87xmL7S0eb%2BLkznce2rdueYOSl386mf7WMjPFiER4lcvsQS21EsMZWGsdCqvwEaiUfs3D%2BpPJoVy53HluTMylmrWHUZ7emqPW0GQNdfYnwtwglBPPvY%2BxHMF&X-Amz-Signature=597832180ace0682cf064af91446d67936e03708e08e6315f5e4115fcdfc97c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KVYCG7H%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkqk4l3HDydLKkUFxI6zl3pGMdEHhRaPs454X2bM2mJgIhAK6Zxec8tKcW4iXY2ZNyee3G3B4DIT6YX4rivI2FDJpvKv8DCBIQABoMNjM3NDIzMTgzODA1Igx0FuJv0XuMJK0LoTAq3AMD3K9VAoehN4ZIjQ7w22A0GE7Dp9UP%2FuDXEZlwXJdmXDcVW5CEcFY%2FJjS2FiYO9VNriXkrz2gbgE1FGS21ZGxLojpeaXct5lfJQORSCR7ECMfP1SZg6ARos86UjDYjvkqKgf7WLWYhsBKq%2BZzIYuPDhvWC8q%2BIzwAERWHxA0poGg4G%2FcDGC51QbHCKl0e0%2BqTo8isbnfgBQ1TJXdcZuyVkYQhVzge1oyyj5Ej4ls47VlKiBCYRwCw8LEm80yr4EhOd3fvd66z7JeJiBv5Ws3XrjztdJWc7woluEq9YnM2LAlf2QYMkSLPuKb4EZvX13phvsj9ktq602Z0LRJA0Hd%2F2JdWXSZEDiofdL4lQNwe6%2BXhoyt51P5n1dyczKpePxSu6hkuBpLLjixMqg5f4NloHqlcbjq9aGnW%2FHbnh2pvOJ7QSxcrXWZkhZIXxGsvrkfpP5eFw89Dytg7W9v8BFP0iPXyidIaxu01Y9DdholP2lBr6%2BBU7JiIx812ENuWCkYSbUuOBwMr2A%2FGR%2BQdHlnVdH%2Bv55Ov9sJtiZgN%2FE2SkDn251QWW%2BglXatThcNG7Y25x8HwKguR3Oe%2FeaVnXvk9LNz7K5X7tSq71GiwsPWO6PUigOzdyM5hTSRUe5TDWyL6%2FBjqkAWMuAvrhJoyS5ePhrsGEmsx87xYqPDwb6YOTUgqnV9REmC3qdK9y5qky0vK2Nhk7yok%2ByeAroVOmfhPkZliE3%2FXznvM0l8uW8xyZ87xmL7S0eb%2BLkznce2rdueYOSl386mf7WMjPFiER4lcvsQS21EsMZWGsdCqvwEaiUfs3D%2BpPJoVy53HluTMylmrWHUZ7emqPW0GQNdfYnwtwglBPPvY%2BxHMF&X-Amz-Signature=ea906c15b2372f027b8f1b884036ff92543491763aa28a40c15d188550f2f5b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KVYCG7H%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkqk4l3HDydLKkUFxI6zl3pGMdEHhRaPs454X2bM2mJgIhAK6Zxec8tKcW4iXY2ZNyee3G3B4DIT6YX4rivI2FDJpvKv8DCBIQABoMNjM3NDIzMTgzODA1Igx0FuJv0XuMJK0LoTAq3AMD3K9VAoehN4ZIjQ7w22A0GE7Dp9UP%2FuDXEZlwXJdmXDcVW5CEcFY%2FJjS2FiYO9VNriXkrz2gbgE1FGS21ZGxLojpeaXct5lfJQORSCR7ECMfP1SZg6ARos86UjDYjvkqKgf7WLWYhsBKq%2BZzIYuPDhvWC8q%2BIzwAERWHxA0poGg4G%2FcDGC51QbHCKl0e0%2BqTo8isbnfgBQ1TJXdcZuyVkYQhVzge1oyyj5Ej4ls47VlKiBCYRwCw8LEm80yr4EhOd3fvd66z7JeJiBv5Ws3XrjztdJWc7woluEq9YnM2LAlf2QYMkSLPuKb4EZvX13phvsj9ktq602Z0LRJA0Hd%2F2JdWXSZEDiofdL4lQNwe6%2BXhoyt51P5n1dyczKpePxSu6hkuBpLLjixMqg5f4NloHqlcbjq9aGnW%2FHbnh2pvOJ7QSxcrXWZkhZIXxGsvrkfpP5eFw89Dytg7W9v8BFP0iPXyidIaxu01Y9DdholP2lBr6%2BBU7JiIx812ENuWCkYSbUuOBwMr2A%2FGR%2BQdHlnVdH%2Bv55Ov9sJtiZgN%2FE2SkDn251QWW%2BglXatThcNG7Y25x8HwKguR3Oe%2FeaVnXvk9LNz7K5X7tSq71GiwsPWO6PUigOzdyM5hTSRUe5TDWyL6%2FBjqkAWMuAvrhJoyS5ePhrsGEmsx87xYqPDwb6YOTUgqnV9REmC3qdK9y5qky0vK2Nhk7yok%2ByeAroVOmfhPkZliE3%2FXznvM0l8uW8xyZ87xmL7S0eb%2BLkznce2rdueYOSl386mf7WMjPFiER4lcvsQS21EsMZWGsdCqvwEaiUfs3D%2BpPJoVy53HluTMylmrWHUZ7emqPW0GQNdfYnwtwglBPPvY%2BxHMF&X-Amz-Signature=9e78658c6b1da20af2ed42f538e097d97195553e86a23c5ec2e2ecd1ce96b8d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KVYCG7H%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkqk4l3HDydLKkUFxI6zl3pGMdEHhRaPs454X2bM2mJgIhAK6Zxec8tKcW4iXY2ZNyee3G3B4DIT6YX4rivI2FDJpvKv8DCBIQABoMNjM3NDIzMTgzODA1Igx0FuJv0XuMJK0LoTAq3AMD3K9VAoehN4ZIjQ7w22A0GE7Dp9UP%2FuDXEZlwXJdmXDcVW5CEcFY%2FJjS2FiYO9VNriXkrz2gbgE1FGS21ZGxLojpeaXct5lfJQORSCR7ECMfP1SZg6ARos86UjDYjvkqKgf7WLWYhsBKq%2BZzIYuPDhvWC8q%2BIzwAERWHxA0poGg4G%2FcDGC51QbHCKl0e0%2BqTo8isbnfgBQ1TJXdcZuyVkYQhVzge1oyyj5Ej4ls47VlKiBCYRwCw8LEm80yr4EhOd3fvd66z7JeJiBv5Ws3XrjztdJWc7woluEq9YnM2LAlf2QYMkSLPuKb4EZvX13phvsj9ktq602Z0LRJA0Hd%2F2JdWXSZEDiofdL4lQNwe6%2BXhoyt51P5n1dyczKpePxSu6hkuBpLLjixMqg5f4NloHqlcbjq9aGnW%2FHbnh2pvOJ7QSxcrXWZkhZIXxGsvrkfpP5eFw89Dytg7W9v8BFP0iPXyidIaxu01Y9DdholP2lBr6%2BBU7JiIx812ENuWCkYSbUuOBwMr2A%2FGR%2BQdHlnVdH%2Bv55Ov9sJtiZgN%2FE2SkDn251QWW%2BglXatThcNG7Y25x8HwKguR3Oe%2FeaVnXvk9LNz7K5X7tSq71GiwsPWO6PUigOzdyM5hTSRUe5TDWyL6%2FBjqkAWMuAvrhJoyS5ePhrsGEmsx87xYqPDwb6YOTUgqnV9REmC3qdK9y5qky0vK2Nhk7yok%2ByeAroVOmfhPkZliE3%2FXznvM0l8uW8xyZ87xmL7S0eb%2BLkznce2rdueYOSl386mf7WMjPFiER4lcvsQS21EsMZWGsdCqvwEaiUfs3D%2BpPJoVy53HluTMylmrWHUZ7emqPW0GQNdfYnwtwglBPPvY%2BxHMF&X-Amz-Signature=5814a8f0f302f9c3242ce316e8ca7a3926ff4c6767e954b9c961b8c01c6ce73f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KVYCG7H%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T100854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkqk4l3HDydLKkUFxI6zl3pGMdEHhRaPs454X2bM2mJgIhAK6Zxec8tKcW4iXY2ZNyee3G3B4DIT6YX4rivI2FDJpvKv8DCBIQABoMNjM3NDIzMTgzODA1Igx0FuJv0XuMJK0LoTAq3AMD3K9VAoehN4ZIjQ7w22A0GE7Dp9UP%2FuDXEZlwXJdmXDcVW5CEcFY%2FJjS2FiYO9VNriXkrz2gbgE1FGS21ZGxLojpeaXct5lfJQORSCR7ECMfP1SZg6ARos86UjDYjvkqKgf7WLWYhsBKq%2BZzIYuPDhvWC8q%2BIzwAERWHxA0poGg4G%2FcDGC51QbHCKl0e0%2BqTo8isbnfgBQ1TJXdcZuyVkYQhVzge1oyyj5Ej4ls47VlKiBCYRwCw8LEm80yr4EhOd3fvd66z7JeJiBv5Ws3XrjztdJWc7woluEq9YnM2LAlf2QYMkSLPuKb4EZvX13phvsj9ktq602Z0LRJA0Hd%2F2JdWXSZEDiofdL4lQNwe6%2BXhoyt51P5n1dyczKpePxSu6hkuBpLLjixMqg5f4NloHqlcbjq9aGnW%2FHbnh2pvOJ7QSxcrXWZkhZIXxGsvrkfpP5eFw89Dytg7W9v8BFP0iPXyidIaxu01Y9DdholP2lBr6%2BBU7JiIx812ENuWCkYSbUuOBwMr2A%2FGR%2BQdHlnVdH%2Bv55Ov9sJtiZgN%2FE2SkDn251QWW%2BglXatThcNG7Y25x8HwKguR3Oe%2FeaVnXvk9LNz7K5X7tSq71GiwsPWO6PUigOzdyM5hTSRUe5TDWyL6%2FBjqkAWMuAvrhJoyS5ePhrsGEmsx87xYqPDwb6YOTUgqnV9REmC3qdK9y5qky0vK2Nhk7yok%2ByeAroVOmfhPkZliE3%2FXznvM0l8uW8xyZ87xmL7S0eb%2BLkznce2rdueYOSl386mf7WMjPFiER4lcvsQS21EsMZWGsdCqvwEaiUfs3D%2BpPJoVy53HluTMylmrWHUZ7emqPW0GQNdfYnwtwglBPPvY%2BxHMF&X-Amz-Signature=cf1d5dc11b4abc825ae996e81dac7584c427b79ef30b923f74938c2dbe50301a&X-Amz-SignedHeaders=host&x-id=GetObject)
