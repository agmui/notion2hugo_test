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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRACQYVP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd7LBqzAzVsiEjLC9db6WPXz7YYnn4HqRUawo0Gz0TGgIhANOFr790eLZ0w2JpjRAj5ZkaT6F18wRulY3dDGYPw1a4Kv8DCDQQABoMNjM3NDIzMTgzODA1IgxQFEF1ie0wJBDOYHMq3AOKkihbxo1s4J6P2KwJy7vHBNCLnoMYeJwxPlXT530wa%2FRO7OLR6hDDVsdrnYqCpzKtrvjR%2BXOs5DQi%2BYAoGYLBE5PrLif3vJcwyDOQPF%2FDSLIW8MxqUc2Vuidj1oedGhsmvzRqHHPZ7ZV3HU%2B6u5AviK7Zj29FQ0QipxqXnXeOLOkvgR6H857IC1VE6NaZvPdspLAMfzmpBmDEW00qSPx5Qig7vgO4Pc%2BqpK8t92%2BgATDlqBXRVzM0UnG6qjOz3SpKB6ZZXZT9QWG76a%2FUYw0jddYLwHF9zMZCN8zGwSQQtEEjI9%2BC1PYYT6EFXk98SjyKC%2FQKfdsyzRSfb09lelIbAFXR9JIKNN43N4QdZp1tH9SZqwznNRbSEb9XkfkmPJJjTTJtFtfH%2FuViHDaWQAn0pmsRyoE%2FjMWzPJZMEBj1r7mYV5%2FVSFFzaSIduRuYOoQQSlRUtjPRbSC9jxTWt0tJjcrYG3nUxvvxJCORJXnzgSlXeMosNw50jLyYbBPi%2BTOIJGts3ceD3FhEDXod4l24Qw1e1lpsfgrzjSYmXo7acVxQFBbzFGzO2e%2FwlHDgJe%2FWAHZq%2BiMOIhLOapF6ZxHHmWyjWoyW8fJ6Qo5rtFJMG4rmvpKHAgyuW0PwWDCS%2FfK9BjqkAeoIxhHehfSGp3eJFv8yqzAEkF0tgUt4cb%2F2XG9cxCbpsBuwD4nXphQjGLBphW%2BrARnJjXS0wPDT282i6Z56BEpFMQf%2FhnLAb0bKPsupiEXxaOqPkt9zwtqoY1olZt3dS1r5R9iaABnjejRWiCBiUXQpYrZEwUm4n%2FbKRb3tYdIjXhA1ORHTA6qigvSt0TjywHxXs6btmQiUmJEZqEpHVdk2m3NT&X-Amz-Signature=eeff47eb3340798499f2c19704f4479f5f9f9b4dce95a11047e6d273e6a83192&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRACQYVP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd7LBqzAzVsiEjLC9db6WPXz7YYnn4HqRUawo0Gz0TGgIhANOFr790eLZ0w2JpjRAj5ZkaT6F18wRulY3dDGYPw1a4Kv8DCDQQABoMNjM3NDIzMTgzODA1IgxQFEF1ie0wJBDOYHMq3AOKkihbxo1s4J6P2KwJy7vHBNCLnoMYeJwxPlXT530wa%2FRO7OLR6hDDVsdrnYqCpzKtrvjR%2BXOs5DQi%2BYAoGYLBE5PrLif3vJcwyDOQPF%2FDSLIW8MxqUc2Vuidj1oedGhsmvzRqHHPZ7ZV3HU%2B6u5AviK7Zj29FQ0QipxqXnXeOLOkvgR6H857IC1VE6NaZvPdspLAMfzmpBmDEW00qSPx5Qig7vgO4Pc%2BqpK8t92%2BgATDlqBXRVzM0UnG6qjOz3SpKB6ZZXZT9QWG76a%2FUYw0jddYLwHF9zMZCN8zGwSQQtEEjI9%2BC1PYYT6EFXk98SjyKC%2FQKfdsyzRSfb09lelIbAFXR9JIKNN43N4QdZp1tH9SZqwznNRbSEb9XkfkmPJJjTTJtFtfH%2FuViHDaWQAn0pmsRyoE%2FjMWzPJZMEBj1r7mYV5%2FVSFFzaSIduRuYOoQQSlRUtjPRbSC9jxTWt0tJjcrYG3nUxvvxJCORJXnzgSlXeMosNw50jLyYbBPi%2BTOIJGts3ceD3FhEDXod4l24Qw1e1lpsfgrzjSYmXo7acVxQFBbzFGzO2e%2FwlHDgJe%2FWAHZq%2BiMOIhLOapF6ZxHHmWyjWoyW8fJ6Qo5rtFJMG4rmvpKHAgyuW0PwWDCS%2FfK9BjqkAeoIxhHehfSGp3eJFv8yqzAEkF0tgUt4cb%2F2XG9cxCbpsBuwD4nXphQjGLBphW%2BrARnJjXS0wPDT282i6Z56BEpFMQf%2FhnLAb0bKPsupiEXxaOqPkt9zwtqoY1olZt3dS1r5R9iaABnjejRWiCBiUXQpYrZEwUm4n%2FbKRb3tYdIjXhA1ORHTA6qigvSt0TjywHxXs6btmQiUmJEZqEpHVdk2m3NT&X-Amz-Signature=a616a42b4ee3835637bd0ec987570ba33a0e5675e2f3f52e7cf552e40ab1f343&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRACQYVP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd7LBqzAzVsiEjLC9db6WPXz7YYnn4HqRUawo0Gz0TGgIhANOFr790eLZ0w2JpjRAj5ZkaT6F18wRulY3dDGYPw1a4Kv8DCDQQABoMNjM3NDIzMTgzODA1IgxQFEF1ie0wJBDOYHMq3AOKkihbxo1s4J6P2KwJy7vHBNCLnoMYeJwxPlXT530wa%2FRO7OLR6hDDVsdrnYqCpzKtrvjR%2BXOs5DQi%2BYAoGYLBE5PrLif3vJcwyDOQPF%2FDSLIW8MxqUc2Vuidj1oedGhsmvzRqHHPZ7ZV3HU%2B6u5AviK7Zj29FQ0QipxqXnXeOLOkvgR6H857IC1VE6NaZvPdspLAMfzmpBmDEW00qSPx5Qig7vgO4Pc%2BqpK8t92%2BgATDlqBXRVzM0UnG6qjOz3SpKB6ZZXZT9QWG76a%2FUYw0jddYLwHF9zMZCN8zGwSQQtEEjI9%2BC1PYYT6EFXk98SjyKC%2FQKfdsyzRSfb09lelIbAFXR9JIKNN43N4QdZp1tH9SZqwznNRbSEb9XkfkmPJJjTTJtFtfH%2FuViHDaWQAn0pmsRyoE%2FjMWzPJZMEBj1r7mYV5%2FVSFFzaSIduRuYOoQQSlRUtjPRbSC9jxTWt0tJjcrYG3nUxvvxJCORJXnzgSlXeMosNw50jLyYbBPi%2BTOIJGts3ceD3FhEDXod4l24Qw1e1lpsfgrzjSYmXo7acVxQFBbzFGzO2e%2FwlHDgJe%2FWAHZq%2BiMOIhLOapF6ZxHHmWyjWoyW8fJ6Qo5rtFJMG4rmvpKHAgyuW0PwWDCS%2FfK9BjqkAeoIxhHehfSGp3eJFv8yqzAEkF0tgUt4cb%2F2XG9cxCbpsBuwD4nXphQjGLBphW%2BrARnJjXS0wPDT282i6Z56BEpFMQf%2FhnLAb0bKPsupiEXxaOqPkt9zwtqoY1olZt3dS1r5R9iaABnjejRWiCBiUXQpYrZEwUm4n%2FbKRb3tYdIjXhA1ORHTA6qigvSt0TjywHxXs6btmQiUmJEZqEpHVdk2m3NT&X-Amz-Signature=48bfeb0d4f5731d51ec96cf9ddf0572ad9b44bd023302b8053e3b3e9f8d1ff4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRACQYVP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd7LBqzAzVsiEjLC9db6WPXz7YYnn4HqRUawo0Gz0TGgIhANOFr790eLZ0w2JpjRAj5ZkaT6F18wRulY3dDGYPw1a4Kv8DCDQQABoMNjM3NDIzMTgzODA1IgxQFEF1ie0wJBDOYHMq3AOKkihbxo1s4J6P2KwJy7vHBNCLnoMYeJwxPlXT530wa%2FRO7OLR6hDDVsdrnYqCpzKtrvjR%2BXOs5DQi%2BYAoGYLBE5PrLif3vJcwyDOQPF%2FDSLIW8MxqUc2Vuidj1oedGhsmvzRqHHPZ7ZV3HU%2B6u5AviK7Zj29FQ0QipxqXnXeOLOkvgR6H857IC1VE6NaZvPdspLAMfzmpBmDEW00qSPx5Qig7vgO4Pc%2BqpK8t92%2BgATDlqBXRVzM0UnG6qjOz3SpKB6ZZXZT9QWG76a%2FUYw0jddYLwHF9zMZCN8zGwSQQtEEjI9%2BC1PYYT6EFXk98SjyKC%2FQKfdsyzRSfb09lelIbAFXR9JIKNN43N4QdZp1tH9SZqwznNRbSEb9XkfkmPJJjTTJtFtfH%2FuViHDaWQAn0pmsRyoE%2FjMWzPJZMEBj1r7mYV5%2FVSFFzaSIduRuYOoQQSlRUtjPRbSC9jxTWt0tJjcrYG3nUxvvxJCORJXnzgSlXeMosNw50jLyYbBPi%2BTOIJGts3ceD3FhEDXod4l24Qw1e1lpsfgrzjSYmXo7acVxQFBbzFGzO2e%2FwlHDgJe%2FWAHZq%2BiMOIhLOapF6ZxHHmWyjWoyW8fJ6Qo5rtFJMG4rmvpKHAgyuW0PwWDCS%2FfK9BjqkAeoIxhHehfSGp3eJFv8yqzAEkF0tgUt4cb%2F2XG9cxCbpsBuwD4nXphQjGLBphW%2BrARnJjXS0wPDT282i6Z56BEpFMQf%2FhnLAb0bKPsupiEXxaOqPkt9zwtqoY1olZt3dS1r5R9iaABnjejRWiCBiUXQpYrZEwUm4n%2FbKRb3tYdIjXhA1ORHTA6qigvSt0TjywHxXs6btmQiUmJEZqEpHVdk2m3NT&X-Amz-Signature=27ceed4b45517645defa3e3f0a8fa9e8c47f3affd929331668888721ecdabc6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRACQYVP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd7LBqzAzVsiEjLC9db6WPXz7YYnn4HqRUawo0Gz0TGgIhANOFr790eLZ0w2JpjRAj5ZkaT6F18wRulY3dDGYPw1a4Kv8DCDQQABoMNjM3NDIzMTgzODA1IgxQFEF1ie0wJBDOYHMq3AOKkihbxo1s4J6P2KwJy7vHBNCLnoMYeJwxPlXT530wa%2FRO7OLR6hDDVsdrnYqCpzKtrvjR%2BXOs5DQi%2BYAoGYLBE5PrLif3vJcwyDOQPF%2FDSLIW8MxqUc2Vuidj1oedGhsmvzRqHHPZ7ZV3HU%2B6u5AviK7Zj29FQ0QipxqXnXeOLOkvgR6H857IC1VE6NaZvPdspLAMfzmpBmDEW00qSPx5Qig7vgO4Pc%2BqpK8t92%2BgATDlqBXRVzM0UnG6qjOz3SpKB6ZZXZT9QWG76a%2FUYw0jddYLwHF9zMZCN8zGwSQQtEEjI9%2BC1PYYT6EFXk98SjyKC%2FQKfdsyzRSfb09lelIbAFXR9JIKNN43N4QdZp1tH9SZqwznNRbSEb9XkfkmPJJjTTJtFtfH%2FuViHDaWQAn0pmsRyoE%2FjMWzPJZMEBj1r7mYV5%2FVSFFzaSIduRuYOoQQSlRUtjPRbSC9jxTWt0tJjcrYG3nUxvvxJCORJXnzgSlXeMosNw50jLyYbBPi%2BTOIJGts3ceD3FhEDXod4l24Qw1e1lpsfgrzjSYmXo7acVxQFBbzFGzO2e%2FwlHDgJe%2FWAHZq%2BiMOIhLOapF6ZxHHmWyjWoyW8fJ6Qo5rtFJMG4rmvpKHAgyuW0PwWDCS%2FfK9BjqkAeoIxhHehfSGp3eJFv8yqzAEkF0tgUt4cb%2F2XG9cxCbpsBuwD4nXphQjGLBphW%2BrARnJjXS0wPDT282i6Z56BEpFMQf%2FhnLAb0bKPsupiEXxaOqPkt9zwtqoY1olZt3dS1r5R9iaABnjejRWiCBiUXQpYrZEwUm4n%2FbKRb3tYdIjXhA1ORHTA6qigvSt0TjywHxXs6btmQiUmJEZqEpHVdk2m3NT&X-Amz-Signature=d2ff88de4ee1e187efc29c1bf1ae987669de2b101b023915c2c6518d591928d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRACQYVP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd7LBqzAzVsiEjLC9db6WPXz7YYnn4HqRUawo0Gz0TGgIhANOFr790eLZ0w2JpjRAj5ZkaT6F18wRulY3dDGYPw1a4Kv8DCDQQABoMNjM3NDIzMTgzODA1IgxQFEF1ie0wJBDOYHMq3AOKkihbxo1s4J6P2KwJy7vHBNCLnoMYeJwxPlXT530wa%2FRO7OLR6hDDVsdrnYqCpzKtrvjR%2BXOs5DQi%2BYAoGYLBE5PrLif3vJcwyDOQPF%2FDSLIW8MxqUc2Vuidj1oedGhsmvzRqHHPZ7ZV3HU%2B6u5AviK7Zj29FQ0QipxqXnXeOLOkvgR6H857IC1VE6NaZvPdspLAMfzmpBmDEW00qSPx5Qig7vgO4Pc%2BqpK8t92%2BgATDlqBXRVzM0UnG6qjOz3SpKB6ZZXZT9QWG76a%2FUYw0jddYLwHF9zMZCN8zGwSQQtEEjI9%2BC1PYYT6EFXk98SjyKC%2FQKfdsyzRSfb09lelIbAFXR9JIKNN43N4QdZp1tH9SZqwznNRbSEb9XkfkmPJJjTTJtFtfH%2FuViHDaWQAn0pmsRyoE%2FjMWzPJZMEBj1r7mYV5%2FVSFFzaSIduRuYOoQQSlRUtjPRbSC9jxTWt0tJjcrYG3nUxvvxJCORJXnzgSlXeMosNw50jLyYbBPi%2BTOIJGts3ceD3FhEDXod4l24Qw1e1lpsfgrzjSYmXo7acVxQFBbzFGzO2e%2FwlHDgJe%2FWAHZq%2BiMOIhLOapF6ZxHHmWyjWoyW8fJ6Qo5rtFJMG4rmvpKHAgyuW0PwWDCS%2FfK9BjqkAeoIxhHehfSGp3eJFv8yqzAEkF0tgUt4cb%2F2XG9cxCbpsBuwD4nXphQjGLBphW%2BrARnJjXS0wPDT282i6Z56BEpFMQf%2FhnLAb0bKPsupiEXxaOqPkt9zwtqoY1olZt3dS1r5R9iaABnjejRWiCBiUXQpYrZEwUm4n%2FbKRb3tYdIjXhA1ORHTA6qigvSt0TjywHxXs6btmQiUmJEZqEpHVdk2m3NT&X-Amz-Signature=d39b4428cc15e867494bf23beca6eeb0baaf42e928915a2d219c66f0328fb1c3&X-Amz-SignedHeaders=host&x-id=GetObject)
