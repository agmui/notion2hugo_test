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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZX4VGM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqZsEQ6%2FBki1rzQKzS7swEMvUaGPBz%2BgwA5YEGwbBb3QIhAPdD1L5KCe%2F7URlm3otp%2BaIFyw5LAp%2B86e2j1syM7xvUKv8DCBkQABoMNjM3NDIzMTgzODA1IgzEddk4YrqwTJ4Dso8q3APolFqSgf3yw902ztb%2FNqG1ZDaKe6BCmVvkCcn9uaMewzOSUjGYsXOZz1CTqDeo5ZFdsR1gbpdMNVP5Q14knDZi6syZmclr%2BWaAzgYWRqwSzBd2so2hhi36ocr%2Bur9UYopQM96dx30YzIafQkFSn80ZjKgUzllmdRU8jg3tntKBv%2B7AnkkwUrXK0EHc%2FnoIb1E%2BtQf%2FIXHLQJ2Emzf5ReexVTwTGAFJKx3S1nKDxv81fox%2BZjacTVkVWnioQebv%2BbBdVcNfPpXOUTDkBrR2mgWBIQBxhxNKf7fcMLLiKngby7ac%2Foaz6cPCZX3UgxUHJ8SzEOjWrpmohaNAx%2B0zlkNYXd%2BjsbRDuGej1cQ3bNth%2Flt06oo9bBcLdi6OtRcsnADKBIJXPv7c1%2FZ37iOwfTB7JTKbl1dYEPvRidVZqV8C4BIqTMrvFHm78guO1ObJjfRkSppgPcmCxKYmG8hh4PeRo1YIjJz3PsSPI0mVA%2Bz1A0H7Z%2BCCS272jGjlTLBjNPyDDu0ErLl0Jp2ViaKt3s0llgEtIGVUnmK3ZyKIGS8fKkDxt3%2Fhf%2F1EyKMZHZDB0mYdd3kNV0SbSYNH4vrgT9Md%2FT9u9W6BIAjGTazJ%2BqWqgTi0bz3fJ9rh7JOMtDCvzcfBBjqkAXwtLAZa0VmIcaODshrUQ9kbduF3ZzZmH793Nau4HfWqF%2F%2FLfT%2FCHINxJ3TTfS%2BwLTnTujTf8vIU7XovH4Ml3HLie31C9zCyuH8YbrASBoN6N9%2BubERTaL1x34bRRrxRxcItiT7vcfTsJ8KvP%2FUJ3iIHWXJqZjXKTUBvthh2G1MgpG4ls9uKaimjy%2FuydtmlnbktrXqGkNjUCG9iCktChZGFM%2B7e&X-Amz-Signature=ef7cc09f4ad61e3a1d98c4b2c1d111af567ac63f9fea6d6fb621a15c513bd908&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZX4VGM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqZsEQ6%2FBki1rzQKzS7swEMvUaGPBz%2BgwA5YEGwbBb3QIhAPdD1L5KCe%2F7URlm3otp%2BaIFyw5LAp%2B86e2j1syM7xvUKv8DCBkQABoMNjM3NDIzMTgzODA1IgzEddk4YrqwTJ4Dso8q3APolFqSgf3yw902ztb%2FNqG1ZDaKe6BCmVvkCcn9uaMewzOSUjGYsXOZz1CTqDeo5ZFdsR1gbpdMNVP5Q14knDZi6syZmclr%2BWaAzgYWRqwSzBd2so2hhi36ocr%2Bur9UYopQM96dx30YzIafQkFSn80ZjKgUzllmdRU8jg3tntKBv%2B7AnkkwUrXK0EHc%2FnoIb1E%2BtQf%2FIXHLQJ2Emzf5ReexVTwTGAFJKx3S1nKDxv81fox%2BZjacTVkVWnioQebv%2BbBdVcNfPpXOUTDkBrR2mgWBIQBxhxNKf7fcMLLiKngby7ac%2Foaz6cPCZX3UgxUHJ8SzEOjWrpmohaNAx%2B0zlkNYXd%2BjsbRDuGej1cQ3bNth%2Flt06oo9bBcLdi6OtRcsnADKBIJXPv7c1%2FZ37iOwfTB7JTKbl1dYEPvRidVZqV8C4BIqTMrvFHm78guO1ObJjfRkSppgPcmCxKYmG8hh4PeRo1YIjJz3PsSPI0mVA%2Bz1A0H7Z%2BCCS272jGjlTLBjNPyDDu0ErLl0Jp2ViaKt3s0llgEtIGVUnmK3ZyKIGS8fKkDxt3%2Fhf%2F1EyKMZHZDB0mYdd3kNV0SbSYNH4vrgT9Md%2FT9u9W6BIAjGTazJ%2BqWqgTi0bz3fJ9rh7JOMtDCvzcfBBjqkAXwtLAZa0VmIcaODshrUQ9kbduF3ZzZmH793Nau4HfWqF%2F%2FLfT%2FCHINxJ3TTfS%2BwLTnTujTf8vIU7XovH4Ml3HLie31C9zCyuH8YbrASBoN6N9%2BubERTaL1x34bRRrxRxcItiT7vcfTsJ8KvP%2FUJ3iIHWXJqZjXKTUBvthh2G1MgpG4ls9uKaimjy%2FuydtmlnbktrXqGkNjUCG9iCktChZGFM%2B7e&X-Amz-Signature=c0592724532d263b5387c7c1e6060b458df3ec338f58480456881d4e8e76743e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZX4VGM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqZsEQ6%2FBki1rzQKzS7swEMvUaGPBz%2BgwA5YEGwbBb3QIhAPdD1L5KCe%2F7URlm3otp%2BaIFyw5LAp%2B86e2j1syM7xvUKv8DCBkQABoMNjM3NDIzMTgzODA1IgzEddk4YrqwTJ4Dso8q3APolFqSgf3yw902ztb%2FNqG1ZDaKe6BCmVvkCcn9uaMewzOSUjGYsXOZz1CTqDeo5ZFdsR1gbpdMNVP5Q14knDZi6syZmclr%2BWaAzgYWRqwSzBd2so2hhi36ocr%2Bur9UYopQM96dx30YzIafQkFSn80ZjKgUzllmdRU8jg3tntKBv%2B7AnkkwUrXK0EHc%2FnoIb1E%2BtQf%2FIXHLQJ2Emzf5ReexVTwTGAFJKx3S1nKDxv81fox%2BZjacTVkVWnioQebv%2BbBdVcNfPpXOUTDkBrR2mgWBIQBxhxNKf7fcMLLiKngby7ac%2Foaz6cPCZX3UgxUHJ8SzEOjWrpmohaNAx%2B0zlkNYXd%2BjsbRDuGej1cQ3bNth%2Flt06oo9bBcLdi6OtRcsnADKBIJXPv7c1%2FZ37iOwfTB7JTKbl1dYEPvRidVZqV8C4BIqTMrvFHm78guO1ObJjfRkSppgPcmCxKYmG8hh4PeRo1YIjJz3PsSPI0mVA%2Bz1A0H7Z%2BCCS272jGjlTLBjNPyDDu0ErLl0Jp2ViaKt3s0llgEtIGVUnmK3ZyKIGS8fKkDxt3%2Fhf%2F1EyKMZHZDB0mYdd3kNV0SbSYNH4vrgT9Md%2FT9u9W6BIAjGTazJ%2BqWqgTi0bz3fJ9rh7JOMtDCvzcfBBjqkAXwtLAZa0VmIcaODshrUQ9kbduF3ZzZmH793Nau4HfWqF%2F%2FLfT%2FCHINxJ3TTfS%2BwLTnTujTf8vIU7XovH4Ml3HLie31C9zCyuH8YbrASBoN6N9%2BubERTaL1x34bRRrxRxcItiT7vcfTsJ8KvP%2FUJ3iIHWXJqZjXKTUBvthh2G1MgpG4ls9uKaimjy%2FuydtmlnbktrXqGkNjUCG9iCktChZGFM%2B7e&X-Amz-Signature=c30c341552516f7d2a596f174945f2365cf274e556ab3876af126c236213dc54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZX4VGM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqZsEQ6%2FBki1rzQKzS7swEMvUaGPBz%2BgwA5YEGwbBb3QIhAPdD1L5KCe%2F7URlm3otp%2BaIFyw5LAp%2B86e2j1syM7xvUKv8DCBkQABoMNjM3NDIzMTgzODA1IgzEddk4YrqwTJ4Dso8q3APolFqSgf3yw902ztb%2FNqG1ZDaKe6BCmVvkCcn9uaMewzOSUjGYsXOZz1CTqDeo5ZFdsR1gbpdMNVP5Q14knDZi6syZmclr%2BWaAzgYWRqwSzBd2so2hhi36ocr%2Bur9UYopQM96dx30YzIafQkFSn80ZjKgUzllmdRU8jg3tntKBv%2B7AnkkwUrXK0EHc%2FnoIb1E%2BtQf%2FIXHLQJ2Emzf5ReexVTwTGAFJKx3S1nKDxv81fox%2BZjacTVkVWnioQebv%2BbBdVcNfPpXOUTDkBrR2mgWBIQBxhxNKf7fcMLLiKngby7ac%2Foaz6cPCZX3UgxUHJ8SzEOjWrpmohaNAx%2B0zlkNYXd%2BjsbRDuGej1cQ3bNth%2Flt06oo9bBcLdi6OtRcsnADKBIJXPv7c1%2FZ37iOwfTB7JTKbl1dYEPvRidVZqV8C4BIqTMrvFHm78guO1ObJjfRkSppgPcmCxKYmG8hh4PeRo1YIjJz3PsSPI0mVA%2Bz1A0H7Z%2BCCS272jGjlTLBjNPyDDu0ErLl0Jp2ViaKt3s0llgEtIGVUnmK3ZyKIGS8fKkDxt3%2Fhf%2F1EyKMZHZDB0mYdd3kNV0SbSYNH4vrgT9Md%2FT9u9W6BIAjGTazJ%2BqWqgTi0bz3fJ9rh7JOMtDCvzcfBBjqkAXwtLAZa0VmIcaODshrUQ9kbduF3ZzZmH793Nau4HfWqF%2F%2FLfT%2FCHINxJ3TTfS%2BwLTnTujTf8vIU7XovH4Ml3HLie31C9zCyuH8YbrASBoN6N9%2BubERTaL1x34bRRrxRxcItiT7vcfTsJ8KvP%2FUJ3iIHWXJqZjXKTUBvthh2G1MgpG4ls9uKaimjy%2FuydtmlnbktrXqGkNjUCG9iCktChZGFM%2B7e&X-Amz-Signature=fc9a2d687edf25abae129f501a1c3ff19353470a23876b08db71a39860c7ed34&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZX4VGM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqZsEQ6%2FBki1rzQKzS7swEMvUaGPBz%2BgwA5YEGwbBb3QIhAPdD1L5KCe%2F7URlm3otp%2BaIFyw5LAp%2B86e2j1syM7xvUKv8DCBkQABoMNjM3NDIzMTgzODA1IgzEddk4YrqwTJ4Dso8q3APolFqSgf3yw902ztb%2FNqG1ZDaKe6BCmVvkCcn9uaMewzOSUjGYsXOZz1CTqDeo5ZFdsR1gbpdMNVP5Q14knDZi6syZmclr%2BWaAzgYWRqwSzBd2so2hhi36ocr%2Bur9UYopQM96dx30YzIafQkFSn80ZjKgUzllmdRU8jg3tntKBv%2B7AnkkwUrXK0EHc%2FnoIb1E%2BtQf%2FIXHLQJ2Emzf5ReexVTwTGAFJKx3S1nKDxv81fox%2BZjacTVkVWnioQebv%2BbBdVcNfPpXOUTDkBrR2mgWBIQBxhxNKf7fcMLLiKngby7ac%2Foaz6cPCZX3UgxUHJ8SzEOjWrpmohaNAx%2B0zlkNYXd%2BjsbRDuGej1cQ3bNth%2Flt06oo9bBcLdi6OtRcsnADKBIJXPv7c1%2FZ37iOwfTB7JTKbl1dYEPvRidVZqV8C4BIqTMrvFHm78guO1ObJjfRkSppgPcmCxKYmG8hh4PeRo1YIjJz3PsSPI0mVA%2Bz1A0H7Z%2BCCS272jGjlTLBjNPyDDu0ErLl0Jp2ViaKt3s0llgEtIGVUnmK3ZyKIGS8fKkDxt3%2Fhf%2F1EyKMZHZDB0mYdd3kNV0SbSYNH4vrgT9Md%2FT9u9W6BIAjGTazJ%2BqWqgTi0bz3fJ9rh7JOMtDCvzcfBBjqkAXwtLAZa0VmIcaODshrUQ9kbduF3ZzZmH793Nau4HfWqF%2F%2FLfT%2FCHINxJ3TTfS%2BwLTnTujTf8vIU7XovH4Ml3HLie31C9zCyuH8YbrASBoN6N9%2BubERTaL1x34bRRrxRxcItiT7vcfTsJ8KvP%2FUJ3iIHWXJqZjXKTUBvthh2G1MgpG4ls9uKaimjy%2FuydtmlnbktrXqGkNjUCG9iCktChZGFM%2B7e&X-Amz-Signature=a6c00fb66222bf79d4194f672dfa41570e50d4a005ad154a72799f66e92aafe0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZZX4VGM%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCqZsEQ6%2FBki1rzQKzS7swEMvUaGPBz%2BgwA5YEGwbBb3QIhAPdD1L5KCe%2F7URlm3otp%2BaIFyw5LAp%2B86e2j1syM7xvUKv8DCBkQABoMNjM3NDIzMTgzODA1IgzEddk4YrqwTJ4Dso8q3APolFqSgf3yw902ztb%2FNqG1ZDaKe6BCmVvkCcn9uaMewzOSUjGYsXOZz1CTqDeo5ZFdsR1gbpdMNVP5Q14knDZi6syZmclr%2BWaAzgYWRqwSzBd2so2hhi36ocr%2Bur9UYopQM96dx30YzIafQkFSn80ZjKgUzllmdRU8jg3tntKBv%2B7AnkkwUrXK0EHc%2FnoIb1E%2BtQf%2FIXHLQJ2Emzf5ReexVTwTGAFJKx3S1nKDxv81fox%2BZjacTVkVWnioQebv%2BbBdVcNfPpXOUTDkBrR2mgWBIQBxhxNKf7fcMLLiKngby7ac%2Foaz6cPCZX3UgxUHJ8SzEOjWrpmohaNAx%2B0zlkNYXd%2BjsbRDuGej1cQ3bNth%2Flt06oo9bBcLdi6OtRcsnADKBIJXPv7c1%2FZ37iOwfTB7JTKbl1dYEPvRidVZqV8C4BIqTMrvFHm78guO1ObJjfRkSppgPcmCxKYmG8hh4PeRo1YIjJz3PsSPI0mVA%2Bz1A0H7Z%2BCCS272jGjlTLBjNPyDDu0ErLl0Jp2ViaKt3s0llgEtIGVUnmK3ZyKIGS8fKkDxt3%2Fhf%2F1EyKMZHZDB0mYdd3kNV0SbSYNH4vrgT9Md%2FT9u9W6BIAjGTazJ%2BqWqgTi0bz3fJ9rh7JOMtDCvzcfBBjqkAXwtLAZa0VmIcaODshrUQ9kbduF3ZzZmH793Nau4HfWqF%2F%2FLfT%2FCHINxJ3TTfS%2BwLTnTujTf8vIU7XovH4Ml3HLie31C9zCyuH8YbrASBoN6N9%2BubERTaL1x34bRRrxRxcItiT7vcfTsJ8KvP%2FUJ3iIHWXJqZjXKTUBvthh2G1MgpG4ls9uKaimjy%2FuydtmlnbktrXqGkNjUCG9iCktChZGFM%2B7e&X-Amz-Signature=a3534cc7900db1a993d52eafc73a55be82a09a8ab07be9d289aa83494026c321&X-Amz-SignedHeaders=host&x-id=GetObject)
