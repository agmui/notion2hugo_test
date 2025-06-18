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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNQ2Q7Q%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg87uD9x%2BQoEpeAFho9su5YLCrwu8N8P%2Fqkt8h0ERbzAIhAIsr%2BHxyuV4rjgZBk6W0M9broI35fTSLfsvWvmTzOnduKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1WhmfauZDu6mabpUq3AOXWREifgUQYdl7FnVM9YnXPr62q3VhXHoyZqePKas%2B21ydNlw0cd0goxyu7%2BZjuTSQxMp8Mhn785lew3pi7qt4C4PwhnwAv%2FUX9y7exSakXx2avwWZlGnywEhbXWsxy8UvO1FFy0%2BUKpYyegPLm8CnLOa6UHEl22AUHcym6LHifI1tK81wPSfkCSxZ1IoCjLW8GTE%2BSVXMzLTxJhKIRXQSZ9SoA8x4w6CeQvDJHhjQ4A9tOcLFQkuTg8NO5dBgnWYWZUGQb8o49R5VCetluxzsZSX3UOm%2FGIbTF95QW24wp4su6dE5jvO0LKZKQs0g86spJtYXT0nR5Cli%2FMVtWRlJUhhvbxNl7Divl0GYqAnE%2Fc2b8fI4HAns%2BF%2B8XLQT2I0Es4W%2BpT5fN6QF8hLA%2BLzSO%2FKAS2jaOkUgTRnn%2BFddeqX818wNJRwSb3xAKf%2B3NiQOkcMGdO1wzF2LKd8MYrPN2AZyw%2BbA9Z%2FxyI5U7r2Z5RDuH8NzdAcEBnBm92kus13Pixo9jiOhpzC0qrWRuugnsrxeUjssRW9h3BJuYG2W0I8zMK09NMxLA6bv7v1FB%2B6m47sAwXmCaDR7hvbbWksDBMtyE7UhYZbfyEtdC5cyeFKJYWMMpvdXlVKehzD7%2B8vCBjqkAV7pT6XMQwRHuROevmUlBem740J9L9C9KriCOGLRWkt3TVdY5m6CTw7iHWfPcCuCH%2Fd3sQyK5%2BSgireKdyJ7enD7zLKofXsYLCvatb3DTLH1a4oE5pFBL8dDNMAiARYGpdaSV%2BsIqWCMNP2d1oNHRhC423OJ4nwfVdmH7bSx0IGvKcKhuKa09gCvd8bd58anHIkOeN00pUXwA5kbUvcT%2BNoenn%2Bm&X-Amz-Signature=5dd557e529c581682e2c4ffc174fd86b9d36ff26575f0e441b6ba74b4e570e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNQ2Q7Q%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg87uD9x%2BQoEpeAFho9su5YLCrwu8N8P%2Fqkt8h0ERbzAIhAIsr%2BHxyuV4rjgZBk6W0M9broI35fTSLfsvWvmTzOnduKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1WhmfauZDu6mabpUq3AOXWREifgUQYdl7FnVM9YnXPr62q3VhXHoyZqePKas%2B21ydNlw0cd0goxyu7%2BZjuTSQxMp8Mhn785lew3pi7qt4C4PwhnwAv%2FUX9y7exSakXx2avwWZlGnywEhbXWsxy8UvO1FFy0%2BUKpYyegPLm8CnLOa6UHEl22AUHcym6LHifI1tK81wPSfkCSxZ1IoCjLW8GTE%2BSVXMzLTxJhKIRXQSZ9SoA8x4w6CeQvDJHhjQ4A9tOcLFQkuTg8NO5dBgnWYWZUGQb8o49R5VCetluxzsZSX3UOm%2FGIbTF95QW24wp4su6dE5jvO0LKZKQs0g86spJtYXT0nR5Cli%2FMVtWRlJUhhvbxNl7Divl0GYqAnE%2Fc2b8fI4HAns%2BF%2B8XLQT2I0Es4W%2BpT5fN6QF8hLA%2BLzSO%2FKAS2jaOkUgTRnn%2BFddeqX818wNJRwSb3xAKf%2B3NiQOkcMGdO1wzF2LKd8MYrPN2AZyw%2BbA9Z%2FxyI5U7r2Z5RDuH8NzdAcEBnBm92kus13Pixo9jiOhpzC0qrWRuugnsrxeUjssRW9h3BJuYG2W0I8zMK09NMxLA6bv7v1FB%2B6m47sAwXmCaDR7hvbbWksDBMtyE7UhYZbfyEtdC5cyeFKJYWMMpvdXlVKehzD7%2B8vCBjqkAV7pT6XMQwRHuROevmUlBem740J9L9C9KriCOGLRWkt3TVdY5m6CTw7iHWfPcCuCH%2Fd3sQyK5%2BSgireKdyJ7enD7zLKofXsYLCvatb3DTLH1a4oE5pFBL8dDNMAiARYGpdaSV%2BsIqWCMNP2d1oNHRhC423OJ4nwfVdmH7bSx0IGvKcKhuKa09gCvd8bd58anHIkOeN00pUXwA5kbUvcT%2BNoenn%2Bm&X-Amz-Signature=29b9c08cae0b177b8a9dd444f157c9c7b37aaccb53a16d0f1cbb84890b013303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNQ2Q7Q%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg87uD9x%2BQoEpeAFho9su5YLCrwu8N8P%2Fqkt8h0ERbzAIhAIsr%2BHxyuV4rjgZBk6W0M9broI35fTSLfsvWvmTzOnduKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1WhmfauZDu6mabpUq3AOXWREifgUQYdl7FnVM9YnXPr62q3VhXHoyZqePKas%2B21ydNlw0cd0goxyu7%2BZjuTSQxMp8Mhn785lew3pi7qt4C4PwhnwAv%2FUX9y7exSakXx2avwWZlGnywEhbXWsxy8UvO1FFy0%2BUKpYyegPLm8CnLOa6UHEl22AUHcym6LHifI1tK81wPSfkCSxZ1IoCjLW8GTE%2BSVXMzLTxJhKIRXQSZ9SoA8x4w6CeQvDJHhjQ4A9tOcLFQkuTg8NO5dBgnWYWZUGQb8o49R5VCetluxzsZSX3UOm%2FGIbTF95QW24wp4su6dE5jvO0LKZKQs0g86spJtYXT0nR5Cli%2FMVtWRlJUhhvbxNl7Divl0GYqAnE%2Fc2b8fI4HAns%2BF%2B8XLQT2I0Es4W%2BpT5fN6QF8hLA%2BLzSO%2FKAS2jaOkUgTRnn%2BFddeqX818wNJRwSb3xAKf%2B3NiQOkcMGdO1wzF2LKd8MYrPN2AZyw%2BbA9Z%2FxyI5U7r2Z5RDuH8NzdAcEBnBm92kus13Pixo9jiOhpzC0qrWRuugnsrxeUjssRW9h3BJuYG2W0I8zMK09NMxLA6bv7v1FB%2B6m47sAwXmCaDR7hvbbWksDBMtyE7UhYZbfyEtdC5cyeFKJYWMMpvdXlVKehzD7%2B8vCBjqkAV7pT6XMQwRHuROevmUlBem740J9L9C9KriCOGLRWkt3TVdY5m6CTw7iHWfPcCuCH%2Fd3sQyK5%2BSgireKdyJ7enD7zLKofXsYLCvatb3DTLH1a4oE5pFBL8dDNMAiARYGpdaSV%2BsIqWCMNP2d1oNHRhC423OJ4nwfVdmH7bSx0IGvKcKhuKa09gCvd8bd58anHIkOeN00pUXwA5kbUvcT%2BNoenn%2Bm&X-Amz-Signature=fa2a831284348dcc9a2bcdd07e4f2cc166aab29fac80006f7616995374fde7c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNQ2Q7Q%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg87uD9x%2BQoEpeAFho9su5YLCrwu8N8P%2Fqkt8h0ERbzAIhAIsr%2BHxyuV4rjgZBk6W0M9broI35fTSLfsvWvmTzOnduKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1WhmfauZDu6mabpUq3AOXWREifgUQYdl7FnVM9YnXPr62q3VhXHoyZqePKas%2B21ydNlw0cd0goxyu7%2BZjuTSQxMp8Mhn785lew3pi7qt4C4PwhnwAv%2FUX9y7exSakXx2avwWZlGnywEhbXWsxy8UvO1FFy0%2BUKpYyegPLm8CnLOa6UHEl22AUHcym6LHifI1tK81wPSfkCSxZ1IoCjLW8GTE%2BSVXMzLTxJhKIRXQSZ9SoA8x4w6CeQvDJHhjQ4A9tOcLFQkuTg8NO5dBgnWYWZUGQb8o49R5VCetluxzsZSX3UOm%2FGIbTF95QW24wp4su6dE5jvO0LKZKQs0g86spJtYXT0nR5Cli%2FMVtWRlJUhhvbxNl7Divl0GYqAnE%2Fc2b8fI4HAns%2BF%2B8XLQT2I0Es4W%2BpT5fN6QF8hLA%2BLzSO%2FKAS2jaOkUgTRnn%2BFddeqX818wNJRwSb3xAKf%2B3NiQOkcMGdO1wzF2LKd8MYrPN2AZyw%2BbA9Z%2FxyI5U7r2Z5RDuH8NzdAcEBnBm92kus13Pixo9jiOhpzC0qrWRuugnsrxeUjssRW9h3BJuYG2W0I8zMK09NMxLA6bv7v1FB%2B6m47sAwXmCaDR7hvbbWksDBMtyE7UhYZbfyEtdC5cyeFKJYWMMpvdXlVKehzD7%2B8vCBjqkAV7pT6XMQwRHuROevmUlBem740J9L9C9KriCOGLRWkt3TVdY5m6CTw7iHWfPcCuCH%2Fd3sQyK5%2BSgireKdyJ7enD7zLKofXsYLCvatb3DTLH1a4oE5pFBL8dDNMAiARYGpdaSV%2BsIqWCMNP2d1oNHRhC423OJ4nwfVdmH7bSx0IGvKcKhuKa09gCvd8bd58anHIkOeN00pUXwA5kbUvcT%2BNoenn%2Bm&X-Amz-Signature=b8bb4e27977feb15c634e1790f41b97656553b38f20ca33ff8c1b5b558a3dde7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNQ2Q7Q%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg87uD9x%2BQoEpeAFho9su5YLCrwu8N8P%2Fqkt8h0ERbzAIhAIsr%2BHxyuV4rjgZBk6W0M9broI35fTSLfsvWvmTzOnduKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1WhmfauZDu6mabpUq3AOXWREifgUQYdl7FnVM9YnXPr62q3VhXHoyZqePKas%2B21ydNlw0cd0goxyu7%2BZjuTSQxMp8Mhn785lew3pi7qt4C4PwhnwAv%2FUX9y7exSakXx2avwWZlGnywEhbXWsxy8UvO1FFy0%2BUKpYyegPLm8CnLOa6UHEl22AUHcym6LHifI1tK81wPSfkCSxZ1IoCjLW8GTE%2BSVXMzLTxJhKIRXQSZ9SoA8x4w6CeQvDJHhjQ4A9tOcLFQkuTg8NO5dBgnWYWZUGQb8o49R5VCetluxzsZSX3UOm%2FGIbTF95QW24wp4su6dE5jvO0LKZKQs0g86spJtYXT0nR5Cli%2FMVtWRlJUhhvbxNl7Divl0GYqAnE%2Fc2b8fI4HAns%2BF%2B8XLQT2I0Es4W%2BpT5fN6QF8hLA%2BLzSO%2FKAS2jaOkUgTRnn%2BFddeqX818wNJRwSb3xAKf%2B3NiQOkcMGdO1wzF2LKd8MYrPN2AZyw%2BbA9Z%2FxyI5U7r2Z5RDuH8NzdAcEBnBm92kus13Pixo9jiOhpzC0qrWRuugnsrxeUjssRW9h3BJuYG2W0I8zMK09NMxLA6bv7v1FB%2B6m47sAwXmCaDR7hvbbWksDBMtyE7UhYZbfyEtdC5cyeFKJYWMMpvdXlVKehzD7%2B8vCBjqkAV7pT6XMQwRHuROevmUlBem740J9L9C9KriCOGLRWkt3TVdY5m6CTw7iHWfPcCuCH%2Fd3sQyK5%2BSgireKdyJ7enD7zLKofXsYLCvatb3DTLH1a4oE5pFBL8dDNMAiARYGpdaSV%2BsIqWCMNP2d1oNHRhC423OJ4nwfVdmH7bSx0IGvKcKhuKa09gCvd8bd58anHIkOeN00pUXwA5kbUvcT%2BNoenn%2Bm&X-Amz-Signature=7dfe85a571829e86dc98d67712b3939f3b3cb583e466838aa06680316202b62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGNQ2Q7Q%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg87uD9x%2BQoEpeAFho9su5YLCrwu8N8P%2Fqkt8h0ERbzAIhAIsr%2BHxyuV4rjgZBk6W0M9broI35fTSLfsvWvmTzOnduKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1WhmfauZDu6mabpUq3AOXWREifgUQYdl7FnVM9YnXPr62q3VhXHoyZqePKas%2B21ydNlw0cd0goxyu7%2BZjuTSQxMp8Mhn785lew3pi7qt4C4PwhnwAv%2FUX9y7exSakXx2avwWZlGnywEhbXWsxy8UvO1FFy0%2BUKpYyegPLm8CnLOa6UHEl22AUHcym6LHifI1tK81wPSfkCSxZ1IoCjLW8GTE%2BSVXMzLTxJhKIRXQSZ9SoA8x4w6CeQvDJHhjQ4A9tOcLFQkuTg8NO5dBgnWYWZUGQb8o49R5VCetluxzsZSX3UOm%2FGIbTF95QW24wp4su6dE5jvO0LKZKQs0g86spJtYXT0nR5Cli%2FMVtWRlJUhhvbxNl7Divl0GYqAnE%2Fc2b8fI4HAns%2BF%2B8XLQT2I0Es4W%2BpT5fN6QF8hLA%2BLzSO%2FKAS2jaOkUgTRnn%2BFddeqX818wNJRwSb3xAKf%2B3NiQOkcMGdO1wzF2LKd8MYrPN2AZyw%2BbA9Z%2FxyI5U7r2Z5RDuH8NzdAcEBnBm92kus13Pixo9jiOhpzC0qrWRuugnsrxeUjssRW9h3BJuYG2W0I8zMK09NMxLA6bv7v1FB%2B6m47sAwXmCaDR7hvbbWksDBMtyE7UhYZbfyEtdC5cyeFKJYWMMpvdXlVKehzD7%2B8vCBjqkAV7pT6XMQwRHuROevmUlBem740J9L9C9KriCOGLRWkt3TVdY5m6CTw7iHWfPcCuCH%2Fd3sQyK5%2BSgireKdyJ7enD7zLKofXsYLCvatb3DTLH1a4oE5pFBL8dDNMAiARYGpdaSV%2BsIqWCMNP2d1oNHRhC423OJ4nwfVdmH7bSx0IGvKcKhuKa09gCvd8bd58anHIkOeN00pUXwA5kbUvcT%2BNoenn%2Bm&X-Amz-Signature=dd283d4055774557476235e88bcb6f27856e3c595485e0228f3e6da9a4753356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
