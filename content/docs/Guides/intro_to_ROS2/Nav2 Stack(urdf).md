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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WRU6KCX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBQyvRphn%2FVlv3Rn%2FqnqdAmQf3tj8wqqrrY6wKH6ExIFAiALaRJv34%2BhC5RABgKjvS%2F1PNg6FoOBPgP%2BSCKyC6mGXSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUXlvoGlsVQYVaorzKtwDz7UiN8VdtjcBX%2FAInTBkfzNKvN2LrEn5N9rsKQ26aflk7s5QNJaXflyox51ImtobCnV7tt2UUTRNlmewwUEVdafNELcAayzHqw9IvaLxXwaIttWmfsBCCqkCFlrjSIetkYbT8lgMNeaDGSeAIwiD9h7Z6qSqeTB8g1W0dlMWyjhKVSCo41RE10DH9VOZx0Sqq4ttPlG6ZGvSJ5FbsiuwgAOePK5P74CX9mveQbTS9ns55nDEHvyjNVPtmsRWpw7Fti9knZNIk9C56QAqeHqOsM3%2BhbgkP1oYE7CWpOuAVvSzOnQgMTkD5MG8Ddh57p%2BXojP8JO8KeopmFPfcMtxG%2BnPAc0xAZEv5mT4vlux4YbOkRzOVVzwjLhIhKSI5Ev5k90t6OvxUc%2BrSF5QIaYYI2%2FQIFhbOF07cR78P9h9U%2BeE%2FoTh2LZxuNmfP7Tc55L1oSm%2BzpVBbmZBjqGDCN7xyfcTTeGd1mZqsubX8J%2B2PYPRsbaRnrRppGRfFS2rr4OUL0j64MksxqX%2B3L%2FogD1qsXcUai4EkH02r8vw%2FrOdSsx3U%2BXwx%2F4bTgP9hYKeJtYBLlYvJvVJ8NpC1PprxMkLQju4S2kTIN29kcOYMHwwlpjrp6o6o0mfLMtuX%2FrQwzfHkvwY6pgFSImsWD5o8ARjWe5JCLVfkSrH2N%2FJWvCjzwzbf18bPms6xW7IipfDIkoA1eaJDuq9pYbzZedxZekR9rrAmU3lfnafdZNE1mWFQyFF0dUNA1Alp%2BXswWbP6YeqZKDUtx7srqVz3ZVz%2Fvy9F2TB9PArg2x9vkLz%2BXz40Rc46gcTUEeP6meEYbcHcgwOodPlgC9CL3yzNXfQVqz35ESQ1jFGTR8lj7rWR&X-Amz-Signature=0289014e8f225aa1576b8c0e59b03e635405bfc47e63172df3a7f80af88a37ca&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WRU6KCX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBQyvRphn%2FVlv3Rn%2FqnqdAmQf3tj8wqqrrY6wKH6ExIFAiALaRJv34%2BhC5RABgKjvS%2F1PNg6FoOBPgP%2BSCKyC6mGXSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUXlvoGlsVQYVaorzKtwDz7UiN8VdtjcBX%2FAInTBkfzNKvN2LrEn5N9rsKQ26aflk7s5QNJaXflyox51ImtobCnV7tt2UUTRNlmewwUEVdafNELcAayzHqw9IvaLxXwaIttWmfsBCCqkCFlrjSIetkYbT8lgMNeaDGSeAIwiD9h7Z6qSqeTB8g1W0dlMWyjhKVSCo41RE10DH9VOZx0Sqq4ttPlG6ZGvSJ5FbsiuwgAOePK5P74CX9mveQbTS9ns55nDEHvyjNVPtmsRWpw7Fti9knZNIk9C56QAqeHqOsM3%2BhbgkP1oYE7CWpOuAVvSzOnQgMTkD5MG8Ddh57p%2BXojP8JO8KeopmFPfcMtxG%2BnPAc0xAZEv5mT4vlux4YbOkRzOVVzwjLhIhKSI5Ev5k90t6OvxUc%2BrSF5QIaYYI2%2FQIFhbOF07cR78P9h9U%2BeE%2FoTh2LZxuNmfP7Tc55L1oSm%2BzpVBbmZBjqGDCN7xyfcTTeGd1mZqsubX8J%2B2PYPRsbaRnrRppGRfFS2rr4OUL0j64MksxqX%2B3L%2FogD1qsXcUai4EkH02r8vw%2FrOdSsx3U%2BXwx%2F4bTgP9hYKeJtYBLlYvJvVJ8NpC1PprxMkLQju4S2kTIN29kcOYMHwwlpjrp6o6o0mfLMtuX%2FrQwzfHkvwY6pgFSImsWD5o8ARjWe5JCLVfkSrH2N%2FJWvCjzwzbf18bPms6xW7IipfDIkoA1eaJDuq9pYbzZedxZekR9rrAmU3lfnafdZNE1mWFQyFF0dUNA1Alp%2BXswWbP6YeqZKDUtx7srqVz3ZVz%2Fvy9F2TB9PArg2x9vkLz%2BXz40Rc46gcTUEeP6meEYbcHcgwOodPlgC9CL3yzNXfQVqz35ESQ1jFGTR8lj7rWR&X-Amz-Signature=2094a349b11c32ee17192e5960d5919d1119aeae6c899c5df2868c18cbf4dc27&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WRU6KCX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBQyvRphn%2FVlv3Rn%2FqnqdAmQf3tj8wqqrrY6wKH6ExIFAiALaRJv34%2BhC5RABgKjvS%2F1PNg6FoOBPgP%2BSCKyC6mGXSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUXlvoGlsVQYVaorzKtwDz7UiN8VdtjcBX%2FAInTBkfzNKvN2LrEn5N9rsKQ26aflk7s5QNJaXflyox51ImtobCnV7tt2UUTRNlmewwUEVdafNELcAayzHqw9IvaLxXwaIttWmfsBCCqkCFlrjSIetkYbT8lgMNeaDGSeAIwiD9h7Z6qSqeTB8g1W0dlMWyjhKVSCo41RE10DH9VOZx0Sqq4ttPlG6ZGvSJ5FbsiuwgAOePK5P74CX9mveQbTS9ns55nDEHvyjNVPtmsRWpw7Fti9knZNIk9C56QAqeHqOsM3%2BhbgkP1oYE7CWpOuAVvSzOnQgMTkD5MG8Ddh57p%2BXojP8JO8KeopmFPfcMtxG%2BnPAc0xAZEv5mT4vlux4YbOkRzOVVzwjLhIhKSI5Ev5k90t6OvxUc%2BrSF5QIaYYI2%2FQIFhbOF07cR78P9h9U%2BeE%2FoTh2LZxuNmfP7Tc55L1oSm%2BzpVBbmZBjqGDCN7xyfcTTeGd1mZqsubX8J%2B2PYPRsbaRnrRppGRfFS2rr4OUL0j64MksxqX%2B3L%2FogD1qsXcUai4EkH02r8vw%2FrOdSsx3U%2BXwx%2F4bTgP9hYKeJtYBLlYvJvVJ8NpC1PprxMkLQju4S2kTIN29kcOYMHwwlpjrp6o6o0mfLMtuX%2FrQwzfHkvwY6pgFSImsWD5o8ARjWe5JCLVfkSrH2N%2FJWvCjzwzbf18bPms6xW7IipfDIkoA1eaJDuq9pYbzZedxZekR9rrAmU3lfnafdZNE1mWFQyFF0dUNA1Alp%2BXswWbP6YeqZKDUtx7srqVz3ZVz%2Fvy9F2TB9PArg2x9vkLz%2BXz40Rc46gcTUEeP6meEYbcHcgwOodPlgC9CL3yzNXfQVqz35ESQ1jFGTR8lj7rWR&X-Amz-Signature=d7944dbe297892bd50fe3fa6619c502e51e73698f8dca5d54f4b8517afd05b08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WRU6KCX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBQyvRphn%2FVlv3Rn%2FqnqdAmQf3tj8wqqrrY6wKH6ExIFAiALaRJv34%2BhC5RABgKjvS%2F1PNg6FoOBPgP%2BSCKyC6mGXSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUXlvoGlsVQYVaorzKtwDz7UiN8VdtjcBX%2FAInTBkfzNKvN2LrEn5N9rsKQ26aflk7s5QNJaXflyox51ImtobCnV7tt2UUTRNlmewwUEVdafNELcAayzHqw9IvaLxXwaIttWmfsBCCqkCFlrjSIetkYbT8lgMNeaDGSeAIwiD9h7Z6qSqeTB8g1W0dlMWyjhKVSCo41RE10DH9VOZx0Sqq4ttPlG6ZGvSJ5FbsiuwgAOePK5P74CX9mveQbTS9ns55nDEHvyjNVPtmsRWpw7Fti9knZNIk9C56QAqeHqOsM3%2BhbgkP1oYE7CWpOuAVvSzOnQgMTkD5MG8Ddh57p%2BXojP8JO8KeopmFPfcMtxG%2BnPAc0xAZEv5mT4vlux4YbOkRzOVVzwjLhIhKSI5Ev5k90t6OvxUc%2BrSF5QIaYYI2%2FQIFhbOF07cR78P9h9U%2BeE%2FoTh2LZxuNmfP7Tc55L1oSm%2BzpVBbmZBjqGDCN7xyfcTTeGd1mZqsubX8J%2B2PYPRsbaRnrRppGRfFS2rr4OUL0j64MksxqX%2B3L%2FogD1qsXcUai4EkH02r8vw%2FrOdSsx3U%2BXwx%2F4bTgP9hYKeJtYBLlYvJvVJ8NpC1PprxMkLQju4S2kTIN29kcOYMHwwlpjrp6o6o0mfLMtuX%2FrQwzfHkvwY6pgFSImsWD5o8ARjWe5JCLVfkSrH2N%2FJWvCjzwzbf18bPms6xW7IipfDIkoA1eaJDuq9pYbzZedxZekR9rrAmU3lfnafdZNE1mWFQyFF0dUNA1Alp%2BXswWbP6YeqZKDUtx7srqVz3ZVz%2Fvy9F2TB9PArg2x9vkLz%2BXz40Rc46gcTUEeP6meEYbcHcgwOodPlgC9CL3yzNXfQVqz35ESQ1jFGTR8lj7rWR&X-Amz-Signature=ba4aec2f1d574c14c565f9a9003f63d6b3f4db113b1d48c86941fc0585416716&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WRU6KCX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBQyvRphn%2FVlv3Rn%2FqnqdAmQf3tj8wqqrrY6wKH6ExIFAiALaRJv34%2BhC5RABgKjvS%2F1PNg6FoOBPgP%2BSCKyC6mGXSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUXlvoGlsVQYVaorzKtwDz7UiN8VdtjcBX%2FAInTBkfzNKvN2LrEn5N9rsKQ26aflk7s5QNJaXflyox51ImtobCnV7tt2UUTRNlmewwUEVdafNELcAayzHqw9IvaLxXwaIttWmfsBCCqkCFlrjSIetkYbT8lgMNeaDGSeAIwiD9h7Z6qSqeTB8g1W0dlMWyjhKVSCo41RE10DH9VOZx0Sqq4ttPlG6ZGvSJ5FbsiuwgAOePK5P74CX9mveQbTS9ns55nDEHvyjNVPtmsRWpw7Fti9knZNIk9C56QAqeHqOsM3%2BhbgkP1oYE7CWpOuAVvSzOnQgMTkD5MG8Ddh57p%2BXojP8JO8KeopmFPfcMtxG%2BnPAc0xAZEv5mT4vlux4YbOkRzOVVzwjLhIhKSI5Ev5k90t6OvxUc%2BrSF5QIaYYI2%2FQIFhbOF07cR78P9h9U%2BeE%2FoTh2LZxuNmfP7Tc55L1oSm%2BzpVBbmZBjqGDCN7xyfcTTeGd1mZqsubX8J%2B2PYPRsbaRnrRppGRfFS2rr4OUL0j64MksxqX%2B3L%2FogD1qsXcUai4EkH02r8vw%2FrOdSsx3U%2BXwx%2F4bTgP9hYKeJtYBLlYvJvVJ8NpC1PprxMkLQju4S2kTIN29kcOYMHwwlpjrp6o6o0mfLMtuX%2FrQwzfHkvwY6pgFSImsWD5o8ARjWe5JCLVfkSrH2N%2FJWvCjzwzbf18bPms6xW7IipfDIkoA1eaJDuq9pYbzZedxZekR9rrAmU3lfnafdZNE1mWFQyFF0dUNA1Alp%2BXswWbP6YeqZKDUtx7srqVz3ZVz%2Fvy9F2TB9PArg2x9vkLz%2BXz40Rc46gcTUEeP6meEYbcHcgwOodPlgC9CL3yzNXfQVqz35ESQ1jFGTR8lj7rWR&X-Amz-Signature=66e01743e58a7821cd013ce2ac071eda191fc232744eee4fc04003d9cefac358&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WRU6KCX%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIBQyvRphn%2FVlv3Rn%2FqnqdAmQf3tj8wqqrrY6wKH6ExIFAiALaRJv34%2BhC5RABgKjvS%2F1PNg6FoOBPgP%2BSCKyC6mGXSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUXlvoGlsVQYVaorzKtwDz7UiN8VdtjcBX%2FAInTBkfzNKvN2LrEn5N9rsKQ26aflk7s5QNJaXflyox51ImtobCnV7tt2UUTRNlmewwUEVdafNELcAayzHqw9IvaLxXwaIttWmfsBCCqkCFlrjSIetkYbT8lgMNeaDGSeAIwiD9h7Z6qSqeTB8g1W0dlMWyjhKVSCo41RE10DH9VOZx0Sqq4ttPlG6ZGvSJ5FbsiuwgAOePK5P74CX9mveQbTS9ns55nDEHvyjNVPtmsRWpw7Fti9knZNIk9C56QAqeHqOsM3%2BhbgkP1oYE7CWpOuAVvSzOnQgMTkD5MG8Ddh57p%2BXojP8JO8KeopmFPfcMtxG%2BnPAc0xAZEv5mT4vlux4YbOkRzOVVzwjLhIhKSI5Ev5k90t6OvxUc%2BrSF5QIaYYI2%2FQIFhbOF07cR78P9h9U%2BeE%2FoTh2LZxuNmfP7Tc55L1oSm%2BzpVBbmZBjqGDCN7xyfcTTeGd1mZqsubX8J%2B2PYPRsbaRnrRppGRfFS2rr4OUL0j64MksxqX%2B3L%2FogD1qsXcUai4EkH02r8vw%2FrOdSsx3U%2BXwx%2F4bTgP9hYKeJtYBLlYvJvVJ8NpC1PprxMkLQju4S2kTIN29kcOYMHwwlpjrp6o6o0mfLMtuX%2FrQwzfHkvwY6pgFSImsWD5o8ARjWe5JCLVfkSrH2N%2FJWvCjzwzbf18bPms6xW7IipfDIkoA1eaJDuq9pYbzZedxZekR9rrAmU3lfnafdZNE1mWFQyFF0dUNA1Alp%2BXswWbP6YeqZKDUtx7srqVz3ZVz%2Fvy9F2TB9PArg2x9vkLz%2BXz40Rc46gcTUEeP6meEYbcHcgwOodPlgC9CL3yzNXfQVqz35ESQ1jFGTR8lj7rWR&X-Amz-Signature=ffb1acfa52c60dcdaa03fbd7e847e2b392b206750b0d3cb5ed13e23c5785408b&X-Amz-SignedHeaders=host&x-id=GetObject)
