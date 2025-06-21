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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBT75MG2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0Xc7mq1s01Nppsjw5YbYFn4gL%2B8nf1fKpPf4PRioN7AiBVAKVaKO8geVrbxp4OsHDLXn2AEWZYAxma9cgh3X8m6SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRrsvpPuUkdIr8ACNKtwDO%2BsFnhKyrVeryKWMpbM3wFQ8csZqg9F8mQJxMiYIfv6swCDHcRXYGpK6hrMJs69oI80ThmTl%2BkXnIcYG%2FyE4izwbE4ynaUKRcrfUygjYmVtzcTkAxWVVhNqYOxU6gbqgLEoV4kQSJbCnXefNU2997Q1qqrR1PygHf2z5kUoPyuKs9KgVkBVl2IkSc%2FjptWHFguSRzDMz0ALzhfcqLgqZQGpSfB3KtbLTHx53RdkYR382nGmKOD8PUeEGOFSQgwchq3QtBvhYI1J0r%2B1hCyksNM%2BnHZnsFWlKydXHJb6VHAiizyqkBUHXPq44Mck2mt8OywFAxrZ%2FmlDVv5jeuLx48UzzzsdyMx5WAwHW%2BvaMr1EY4JC1qk5DQaiNrqGxrvMaonCNFMRzqJsvfYwSYpqABae7WaWGgo%2BM1DyIT2m0gWUpjBpmN6nPxCz%2FaVQ0gQa9F4ZJEbPXZmNmwvKUkPkucg64nPMyebw7kn6ob4rmO6BCwSYk%2F1B4rNfCfnDXCYvFbxQJJdsNjkLZiAt7b%2FK2ECK5uG4KrHI%2FsCnY7aeweU%2FUiMPHq%2FAbtYDvC6ZMEu76UAEYZZkDmLUj7i2wHe8QT0tErEm8GYZokRde5cuIub9BlN5guumKQGWcg2Uwl7DYwgY6pgEZJPjLx8ey0R0048ugJb3fGGFq8%2BvoJqn3oAUgOKEiTGAlbpLom15Y4ra9kya58cTH0zXf4EmpoXm9zDWZRh7IthLZ04jWAATl3%2Bid8cvnlKZw4%2FbMB%2BzttsfG0ILn4M%2BR7r4EbdkY1O8WAyubYH12TY6sWbN3N6kaLy8Ez3qgy%2FsZku2K1Mw4IujkDKZJMKfnHSwkndfweS2OVkQVe7XjR8DLNtxd&X-Amz-Signature=dfab461ecd042b8e6e0914a604687be24c42677ffc9846380bc733120a419644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBT75MG2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0Xc7mq1s01Nppsjw5YbYFn4gL%2B8nf1fKpPf4PRioN7AiBVAKVaKO8geVrbxp4OsHDLXn2AEWZYAxma9cgh3X8m6SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRrsvpPuUkdIr8ACNKtwDO%2BsFnhKyrVeryKWMpbM3wFQ8csZqg9F8mQJxMiYIfv6swCDHcRXYGpK6hrMJs69oI80ThmTl%2BkXnIcYG%2FyE4izwbE4ynaUKRcrfUygjYmVtzcTkAxWVVhNqYOxU6gbqgLEoV4kQSJbCnXefNU2997Q1qqrR1PygHf2z5kUoPyuKs9KgVkBVl2IkSc%2FjptWHFguSRzDMz0ALzhfcqLgqZQGpSfB3KtbLTHx53RdkYR382nGmKOD8PUeEGOFSQgwchq3QtBvhYI1J0r%2B1hCyksNM%2BnHZnsFWlKydXHJb6VHAiizyqkBUHXPq44Mck2mt8OywFAxrZ%2FmlDVv5jeuLx48UzzzsdyMx5WAwHW%2BvaMr1EY4JC1qk5DQaiNrqGxrvMaonCNFMRzqJsvfYwSYpqABae7WaWGgo%2BM1DyIT2m0gWUpjBpmN6nPxCz%2FaVQ0gQa9F4ZJEbPXZmNmwvKUkPkucg64nPMyebw7kn6ob4rmO6BCwSYk%2F1B4rNfCfnDXCYvFbxQJJdsNjkLZiAt7b%2FK2ECK5uG4KrHI%2FsCnY7aeweU%2FUiMPHq%2FAbtYDvC6ZMEu76UAEYZZkDmLUj7i2wHe8QT0tErEm8GYZokRde5cuIub9BlN5guumKQGWcg2Uwl7DYwgY6pgEZJPjLx8ey0R0048ugJb3fGGFq8%2BvoJqn3oAUgOKEiTGAlbpLom15Y4ra9kya58cTH0zXf4EmpoXm9zDWZRh7IthLZ04jWAATl3%2Bid8cvnlKZw4%2FbMB%2BzttsfG0ILn4M%2BR7r4EbdkY1O8WAyubYH12TY6sWbN3N6kaLy8Ez3qgy%2FsZku2K1Mw4IujkDKZJMKfnHSwkndfweS2OVkQVe7XjR8DLNtxd&X-Amz-Signature=cf24e4e0fcfda74c2aa982935c7baef3f44d0b0867651d3af667d3ff324d36dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBT75MG2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0Xc7mq1s01Nppsjw5YbYFn4gL%2B8nf1fKpPf4PRioN7AiBVAKVaKO8geVrbxp4OsHDLXn2AEWZYAxma9cgh3X8m6SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRrsvpPuUkdIr8ACNKtwDO%2BsFnhKyrVeryKWMpbM3wFQ8csZqg9F8mQJxMiYIfv6swCDHcRXYGpK6hrMJs69oI80ThmTl%2BkXnIcYG%2FyE4izwbE4ynaUKRcrfUygjYmVtzcTkAxWVVhNqYOxU6gbqgLEoV4kQSJbCnXefNU2997Q1qqrR1PygHf2z5kUoPyuKs9KgVkBVl2IkSc%2FjptWHFguSRzDMz0ALzhfcqLgqZQGpSfB3KtbLTHx53RdkYR382nGmKOD8PUeEGOFSQgwchq3QtBvhYI1J0r%2B1hCyksNM%2BnHZnsFWlKydXHJb6VHAiizyqkBUHXPq44Mck2mt8OywFAxrZ%2FmlDVv5jeuLx48UzzzsdyMx5WAwHW%2BvaMr1EY4JC1qk5DQaiNrqGxrvMaonCNFMRzqJsvfYwSYpqABae7WaWGgo%2BM1DyIT2m0gWUpjBpmN6nPxCz%2FaVQ0gQa9F4ZJEbPXZmNmwvKUkPkucg64nPMyebw7kn6ob4rmO6BCwSYk%2F1B4rNfCfnDXCYvFbxQJJdsNjkLZiAt7b%2FK2ECK5uG4KrHI%2FsCnY7aeweU%2FUiMPHq%2FAbtYDvC6ZMEu76UAEYZZkDmLUj7i2wHe8QT0tErEm8GYZokRde5cuIub9BlN5guumKQGWcg2Uwl7DYwgY6pgEZJPjLx8ey0R0048ugJb3fGGFq8%2BvoJqn3oAUgOKEiTGAlbpLom15Y4ra9kya58cTH0zXf4EmpoXm9zDWZRh7IthLZ04jWAATl3%2Bid8cvnlKZw4%2FbMB%2BzttsfG0ILn4M%2BR7r4EbdkY1O8WAyubYH12TY6sWbN3N6kaLy8Ez3qgy%2FsZku2K1Mw4IujkDKZJMKfnHSwkndfweS2OVkQVe7XjR8DLNtxd&X-Amz-Signature=31a9830c60e98cf54a6c358cbb0ef1ff994a6da839bfc2f4e612ec99c805a8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBT75MG2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0Xc7mq1s01Nppsjw5YbYFn4gL%2B8nf1fKpPf4PRioN7AiBVAKVaKO8geVrbxp4OsHDLXn2AEWZYAxma9cgh3X8m6SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRrsvpPuUkdIr8ACNKtwDO%2BsFnhKyrVeryKWMpbM3wFQ8csZqg9F8mQJxMiYIfv6swCDHcRXYGpK6hrMJs69oI80ThmTl%2BkXnIcYG%2FyE4izwbE4ynaUKRcrfUygjYmVtzcTkAxWVVhNqYOxU6gbqgLEoV4kQSJbCnXefNU2997Q1qqrR1PygHf2z5kUoPyuKs9KgVkBVl2IkSc%2FjptWHFguSRzDMz0ALzhfcqLgqZQGpSfB3KtbLTHx53RdkYR382nGmKOD8PUeEGOFSQgwchq3QtBvhYI1J0r%2B1hCyksNM%2BnHZnsFWlKydXHJb6VHAiizyqkBUHXPq44Mck2mt8OywFAxrZ%2FmlDVv5jeuLx48UzzzsdyMx5WAwHW%2BvaMr1EY4JC1qk5DQaiNrqGxrvMaonCNFMRzqJsvfYwSYpqABae7WaWGgo%2BM1DyIT2m0gWUpjBpmN6nPxCz%2FaVQ0gQa9F4ZJEbPXZmNmwvKUkPkucg64nPMyebw7kn6ob4rmO6BCwSYk%2F1B4rNfCfnDXCYvFbxQJJdsNjkLZiAt7b%2FK2ECK5uG4KrHI%2FsCnY7aeweU%2FUiMPHq%2FAbtYDvC6ZMEu76UAEYZZkDmLUj7i2wHe8QT0tErEm8GYZokRde5cuIub9BlN5guumKQGWcg2Uwl7DYwgY6pgEZJPjLx8ey0R0048ugJb3fGGFq8%2BvoJqn3oAUgOKEiTGAlbpLom15Y4ra9kya58cTH0zXf4EmpoXm9zDWZRh7IthLZ04jWAATl3%2Bid8cvnlKZw4%2FbMB%2BzttsfG0ILn4M%2BR7r4EbdkY1O8WAyubYH12TY6sWbN3N6kaLy8Ez3qgy%2FsZku2K1Mw4IujkDKZJMKfnHSwkndfweS2OVkQVe7XjR8DLNtxd&X-Amz-Signature=3324c2e33541bfd1ce2b1de506e1e25eb8f1b5ee8cabeac459d1446d3f1671c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBT75MG2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0Xc7mq1s01Nppsjw5YbYFn4gL%2B8nf1fKpPf4PRioN7AiBVAKVaKO8geVrbxp4OsHDLXn2AEWZYAxma9cgh3X8m6SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRrsvpPuUkdIr8ACNKtwDO%2BsFnhKyrVeryKWMpbM3wFQ8csZqg9F8mQJxMiYIfv6swCDHcRXYGpK6hrMJs69oI80ThmTl%2BkXnIcYG%2FyE4izwbE4ynaUKRcrfUygjYmVtzcTkAxWVVhNqYOxU6gbqgLEoV4kQSJbCnXefNU2997Q1qqrR1PygHf2z5kUoPyuKs9KgVkBVl2IkSc%2FjptWHFguSRzDMz0ALzhfcqLgqZQGpSfB3KtbLTHx53RdkYR382nGmKOD8PUeEGOFSQgwchq3QtBvhYI1J0r%2B1hCyksNM%2BnHZnsFWlKydXHJb6VHAiizyqkBUHXPq44Mck2mt8OywFAxrZ%2FmlDVv5jeuLx48UzzzsdyMx5WAwHW%2BvaMr1EY4JC1qk5DQaiNrqGxrvMaonCNFMRzqJsvfYwSYpqABae7WaWGgo%2BM1DyIT2m0gWUpjBpmN6nPxCz%2FaVQ0gQa9F4ZJEbPXZmNmwvKUkPkucg64nPMyebw7kn6ob4rmO6BCwSYk%2F1B4rNfCfnDXCYvFbxQJJdsNjkLZiAt7b%2FK2ECK5uG4KrHI%2FsCnY7aeweU%2FUiMPHq%2FAbtYDvC6ZMEu76UAEYZZkDmLUj7i2wHe8QT0tErEm8GYZokRde5cuIub9BlN5guumKQGWcg2Uwl7DYwgY6pgEZJPjLx8ey0R0048ugJb3fGGFq8%2BvoJqn3oAUgOKEiTGAlbpLom15Y4ra9kya58cTH0zXf4EmpoXm9zDWZRh7IthLZ04jWAATl3%2Bid8cvnlKZw4%2FbMB%2BzttsfG0ILn4M%2BR7r4EbdkY1O8WAyubYH12TY6sWbN3N6kaLy8Ez3qgy%2FsZku2K1Mw4IujkDKZJMKfnHSwkndfweS2OVkQVe7XjR8DLNtxd&X-Amz-Signature=db50a833478617facf62faa642c05d28ffa12c759234c97d9bcc00f362af77b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBT75MG2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0Xc7mq1s01Nppsjw5YbYFn4gL%2B8nf1fKpPf4PRioN7AiBVAKVaKO8geVrbxp4OsHDLXn2AEWZYAxma9cgh3X8m6SqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRrsvpPuUkdIr8ACNKtwDO%2BsFnhKyrVeryKWMpbM3wFQ8csZqg9F8mQJxMiYIfv6swCDHcRXYGpK6hrMJs69oI80ThmTl%2BkXnIcYG%2FyE4izwbE4ynaUKRcrfUygjYmVtzcTkAxWVVhNqYOxU6gbqgLEoV4kQSJbCnXefNU2997Q1qqrR1PygHf2z5kUoPyuKs9KgVkBVl2IkSc%2FjptWHFguSRzDMz0ALzhfcqLgqZQGpSfB3KtbLTHx53RdkYR382nGmKOD8PUeEGOFSQgwchq3QtBvhYI1J0r%2B1hCyksNM%2BnHZnsFWlKydXHJb6VHAiizyqkBUHXPq44Mck2mt8OywFAxrZ%2FmlDVv5jeuLx48UzzzsdyMx5WAwHW%2BvaMr1EY4JC1qk5DQaiNrqGxrvMaonCNFMRzqJsvfYwSYpqABae7WaWGgo%2BM1DyIT2m0gWUpjBpmN6nPxCz%2FaVQ0gQa9F4ZJEbPXZmNmwvKUkPkucg64nPMyebw7kn6ob4rmO6BCwSYk%2F1B4rNfCfnDXCYvFbxQJJdsNjkLZiAt7b%2FK2ECK5uG4KrHI%2FsCnY7aeweU%2FUiMPHq%2FAbtYDvC6ZMEu76UAEYZZkDmLUj7i2wHe8QT0tErEm8GYZokRde5cuIub9BlN5guumKQGWcg2Uwl7DYwgY6pgEZJPjLx8ey0R0048ugJb3fGGFq8%2BvoJqn3oAUgOKEiTGAlbpLom15Y4ra9kya58cTH0zXf4EmpoXm9zDWZRh7IthLZ04jWAATl3%2Bid8cvnlKZw4%2FbMB%2BzttsfG0ILn4M%2BR7r4EbdkY1O8WAyubYH12TY6sWbN3N6kaLy8Ez3qgy%2FsZku2K1Mw4IujkDKZJMKfnHSwkndfweS2OVkQVe7XjR8DLNtxd&X-Amz-Signature=aa272c1bc9c786c8e9e0b7e0e8d50664e272017c276a4038c0489a3071b56ce0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
