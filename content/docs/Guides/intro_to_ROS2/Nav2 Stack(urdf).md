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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGMY7ES%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBxEnKBvHB5nNjzMw2h%2FfY6RTAYKtYyTOFZWE3j206pEAiAfFDRQsEYihz0PqegkiXDLCM0e5kgxoG2%2BPFLZLwSqwyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMl%2Be79urklbYLMBpLKtwDXGiGBU%2FoMIMR9t4HbmXe3rrrjXo016QoShMkBWQ%2FaBQol3oFlN0VKXzTtPK%2FVofrr23cstHYeXJSZJTv%2FdVJeObPRdd3N1BKP5o6UJo8QMWSmunYe%2FP90hKWnwzE3JH3M111gJqS3AQ3x6zU8%2FKICTGdLFhv5K1Cv2xeU4VOd7wvez4r9k5qSaCOVwFJCVqQLbXY6cK6TVMj2%2F1fKXeojTxNhpoSfJ%2FlPEq%2FfSmjmjRHXt3EpgCpTdxkJPCxMW%2BClJ%2ByZKlfnHOXVXBKZXPFtwb51buZQxvIbmhf1g8KtDsAzYPzTk6AEhaPM4QQM5i1QZdkuWG8lpSb8G7vkuGDQvJy0iPqpgVs78D3ldjncGuRNSwk2E1l4J4yi0Z92ex6f7RYIPQynfzGDqO1ZEgu4uqpQ77817XfU0UHmZhAuaA5qUSdAClwNnNyA0UFL1kMWuBWV7mipyEglpewKaHriHqHjF6i4bfPHedIAZ2Gh5OkXmyNDxRU9IGPkBWfwu%2FKip4iTdmlf4N2kkl8dJeWF%2BjxxQpTHJqiW8w%2BbmWM%2FQRWvqXEtdu1P4CqdrrOxy8pEynZFOfwTNWPZqTiaoHZVOdsD9lZw1tY5EJRVth5JwknKR2hnZscNyxaWdkwkMDIvQY6pgH3Nsm9s44Ad1oiALB%2Bdv%2FCl1PIZzUttUCGG2X6O3GmAdD%2F%2B36Lo0McFs85GG6%2F5%2BGgjtiw2dJERSbMD6y120ppM%2FBRzNOeMQIjTYd29cOjguHV%2Fs7pNIu66cdDtF7%2Fgb8xYZ%2Fujm4jg%2FiTNarwDSnXAbhtSysSqQOMNWaT5lGSN1qFV1Z0r1VP5njobUbXFDsFwu%2BLq7NUuqmLltLchftB%2FjZEm7D6&X-Amz-Signature=da93cb1530a6304d2e6a321d351c1fd84c91f284293a4ca7520727b8613d5b8a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGMY7ES%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBxEnKBvHB5nNjzMw2h%2FfY6RTAYKtYyTOFZWE3j206pEAiAfFDRQsEYihz0PqegkiXDLCM0e5kgxoG2%2BPFLZLwSqwyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMl%2Be79urklbYLMBpLKtwDXGiGBU%2FoMIMR9t4HbmXe3rrrjXo016QoShMkBWQ%2FaBQol3oFlN0VKXzTtPK%2FVofrr23cstHYeXJSZJTv%2FdVJeObPRdd3N1BKP5o6UJo8QMWSmunYe%2FP90hKWnwzE3JH3M111gJqS3AQ3x6zU8%2FKICTGdLFhv5K1Cv2xeU4VOd7wvez4r9k5qSaCOVwFJCVqQLbXY6cK6TVMj2%2F1fKXeojTxNhpoSfJ%2FlPEq%2FfSmjmjRHXt3EpgCpTdxkJPCxMW%2BClJ%2ByZKlfnHOXVXBKZXPFtwb51buZQxvIbmhf1g8KtDsAzYPzTk6AEhaPM4QQM5i1QZdkuWG8lpSb8G7vkuGDQvJy0iPqpgVs78D3ldjncGuRNSwk2E1l4J4yi0Z92ex6f7RYIPQynfzGDqO1ZEgu4uqpQ77817XfU0UHmZhAuaA5qUSdAClwNnNyA0UFL1kMWuBWV7mipyEglpewKaHriHqHjF6i4bfPHedIAZ2Gh5OkXmyNDxRU9IGPkBWfwu%2FKip4iTdmlf4N2kkl8dJeWF%2BjxxQpTHJqiW8w%2BbmWM%2FQRWvqXEtdu1P4CqdrrOxy8pEynZFOfwTNWPZqTiaoHZVOdsD9lZw1tY5EJRVth5JwknKR2hnZscNyxaWdkwkMDIvQY6pgH3Nsm9s44Ad1oiALB%2Bdv%2FCl1PIZzUttUCGG2X6O3GmAdD%2F%2B36Lo0McFs85GG6%2F5%2BGgjtiw2dJERSbMD6y120ppM%2FBRzNOeMQIjTYd29cOjguHV%2Fs7pNIu66cdDtF7%2Fgb8xYZ%2Fujm4jg%2FiTNarwDSnXAbhtSysSqQOMNWaT5lGSN1qFV1Z0r1VP5njobUbXFDsFwu%2BLq7NUuqmLltLchftB%2FjZEm7D6&X-Amz-Signature=267e68a37c20a6a2844dfeac93f3b0301b846a6f32057984cb637e2ac60bb6c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGMY7ES%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBxEnKBvHB5nNjzMw2h%2FfY6RTAYKtYyTOFZWE3j206pEAiAfFDRQsEYihz0PqegkiXDLCM0e5kgxoG2%2BPFLZLwSqwyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMl%2Be79urklbYLMBpLKtwDXGiGBU%2FoMIMR9t4HbmXe3rrrjXo016QoShMkBWQ%2FaBQol3oFlN0VKXzTtPK%2FVofrr23cstHYeXJSZJTv%2FdVJeObPRdd3N1BKP5o6UJo8QMWSmunYe%2FP90hKWnwzE3JH3M111gJqS3AQ3x6zU8%2FKICTGdLFhv5K1Cv2xeU4VOd7wvez4r9k5qSaCOVwFJCVqQLbXY6cK6TVMj2%2F1fKXeojTxNhpoSfJ%2FlPEq%2FfSmjmjRHXt3EpgCpTdxkJPCxMW%2BClJ%2ByZKlfnHOXVXBKZXPFtwb51buZQxvIbmhf1g8KtDsAzYPzTk6AEhaPM4QQM5i1QZdkuWG8lpSb8G7vkuGDQvJy0iPqpgVs78D3ldjncGuRNSwk2E1l4J4yi0Z92ex6f7RYIPQynfzGDqO1ZEgu4uqpQ77817XfU0UHmZhAuaA5qUSdAClwNnNyA0UFL1kMWuBWV7mipyEglpewKaHriHqHjF6i4bfPHedIAZ2Gh5OkXmyNDxRU9IGPkBWfwu%2FKip4iTdmlf4N2kkl8dJeWF%2BjxxQpTHJqiW8w%2BbmWM%2FQRWvqXEtdu1P4CqdrrOxy8pEynZFOfwTNWPZqTiaoHZVOdsD9lZw1tY5EJRVth5JwknKR2hnZscNyxaWdkwkMDIvQY6pgH3Nsm9s44Ad1oiALB%2Bdv%2FCl1PIZzUttUCGG2X6O3GmAdD%2F%2B36Lo0McFs85GG6%2F5%2BGgjtiw2dJERSbMD6y120ppM%2FBRzNOeMQIjTYd29cOjguHV%2Fs7pNIu66cdDtF7%2Fgb8xYZ%2Fujm4jg%2FiTNarwDSnXAbhtSysSqQOMNWaT5lGSN1qFV1Z0r1VP5njobUbXFDsFwu%2BLq7NUuqmLltLchftB%2FjZEm7D6&X-Amz-Signature=26350d9d880cb3b048bacfa87ddb02b0db8bdfa71261abbf6a2f459dbb2567b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGMY7ES%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBxEnKBvHB5nNjzMw2h%2FfY6RTAYKtYyTOFZWE3j206pEAiAfFDRQsEYihz0PqegkiXDLCM0e5kgxoG2%2BPFLZLwSqwyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMl%2Be79urklbYLMBpLKtwDXGiGBU%2FoMIMR9t4HbmXe3rrrjXo016QoShMkBWQ%2FaBQol3oFlN0VKXzTtPK%2FVofrr23cstHYeXJSZJTv%2FdVJeObPRdd3N1BKP5o6UJo8QMWSmunYe%2FP90hKWnwzE3JH3M111gJqS3AQ3x6zU8%2FKICTGdLFhv5K1Cv2xeU4VOd7wvez4r9k5qSaCOVwFJCVqQLbXY6cK6TVMj2%2F1fKXeojTxNhpoSfJ%2FlPEq%2FfSmjmjRHXt3EpgCpTdxkJPCxMW%2BClJ%2ByZKlfnHOXVXBKZXPFtwb51buZQxvIbmhf1g8KtDsAzYPzTk6AEhaPM4QQM5i1QZdkuWG8lpSb8G7vkuGDQvJy0iPqpgVs78D3ldjncGuRNSwk2E1l4J4yi0Z92ex6f7RYIPQynfzGDqO1ZEgu4uqpQ77817XfU0UHmZhAuaA5qUSdAClwNnNyA0UFL1kMWuBWV7mipyEglpewKaHriHqHjF6i4bfPHedIAZ2Gh5OkXmyNDxRU9IGPkBWfwu%2FKip4iTdmlf4N2kkl8dJeWF%2BjxxQpTHJqiW8w%2BbmWM%2FQRWvqXEtdu1P4CqdrrOxy8pEynZFOfwTNWPZqTiaoHZVOdsD9lZw1tY5EJRVth5JwknKR2hnZscNyxaWdkwkMDIvQY6pgH3Nsm9s44Ad1oiALB%2Bdv%2FCl1PIZzUttUCGG2X6O3GmAdD%2F%2B36Lo0McFs85GG6%2F5%2BGgjtiw2dJERSbMD6y120ppM%2FBRzNOeMQIjTYd29cOjguHV%2Fs7pNIu66cdDtF7%2Fgb8xYZ%2Fujm4jg%2FiTNarwDSnXAbhtSysSqQOMNWaT5lGSN1qFV1Z0r1VP5njobUbXFDsFwu%2BLq7NUuqmLltLchftB%2FjZEm7D6&X-Amz-Signature=8186c2b89e70d46771002d11e5467ee1d136a16bbb38bd988a458c20f68185ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGMY7ES%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBxEnKBvHB5nNjzMw2h%2FfY6RTAYKtYyTOFZWE3j206pEAiAfFDRQsEYihz0PqegkiXDLCM0e5kgxoG2%2BPFLZLwSqwyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMl%2Be79urklbYLMBpLKtwDXGiGBU%2FoMIMR9t4HbmXe3rrrjXo016QoShMkBWQ%2FaBQol3oFlN0VKXzTtPK%2FVofrr23cstHYeXJSZJTv%2FdVJeObPRdd3N1BKP5o6UJo8QMWSmunYe%2FP90hKWnwzE3JH3M111gJqS3AQ3x6zU8%2FKICTGdLFhv5K1Cv2xeU4VOd7wvez4r9k5qSaCOVwFJCVqQLbXY6cK6TVMj2%2F1fKXeojTxNhpoSfJ%2FlPEq%2FfSmjmjRHXt3EpgCpTdxkJPCxMW%2BClJ%2ByZKlfnHOXVXBKZXPFtwb51buZQxvIbmhf1g8KtDsAzYPzTk6AEhaPM4QQM5i1QZdkuWG8lpSb8G7vkuGDQvJy0iPqpgVs78D3ldjncGuRNSwk2E1l4J4yi0Z92ex6f7RYIPQynfzGDqO1ZEgu4uqpQ77817XfU0UHmZhAuaA5qUSdAClwNnNyA0UFL1kMWuBWV7mipyEglpewKaHriHqHjF6i4bfPHedIAZ2Gh5OkXmyNDxRU9IGPkBWfwu%2FKip4iTdmlf4N2kkl8dJeWF%2BjxxQpTHJqiW8w%2BbmWM%2FQRWvqXEtdu1P4CqdrrOxy8pEynZFOfwTNWPZqTiaoHZVOdsD9lZw1tY5EJRVth5JwknKR2hnZscNyxaWdkwkMDIvQY6pgH3Nsm9s44Ad1oiALB%2Bdv%2FCl1PIZzUttUCGG2X6O3GmAdD%2F%2B36Lo0McFs85GG6%2F5%2BGgjtiw2dJERSbMD6y120ppM%2FBRzNOeMQIjTYd29cOjguHV%2Fs7pNIu66cdDtF7%2Fgb8xYZ%2Fujm4jg%2FiTNarwDSnXAbhtSysSqQOMNWaT5lGSN1qFV1Z0r1VP5njobUbXFDsFwu%2BLq7NUuqmLltLchftB%2FjZEm7D6&X-Amz-Signature=16c7e30c2fbc5604c0fbb4fd086d605249535730557a4c6d692262d07e3d8e3c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BGMY7ES%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIBxEnKBvHB5nNjzMw2h%2FfY6RTAYKtYyTOFZWE3j206pEAiAfFDRQsEYihz0PqegkiXDLCM0e5kgxoG2%2BPFLZLwSqwyr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMl%2Be79urklbYLMBpLKtwDXGiGBU%2FoMIMR9t4HbmXe3rrrjXo016QoShMkBWQ%2FaBQol3oFlN0VKXzTtPK%2FVofrr23cstHYeXJSZJTv%2FdVJeObPRdd3N1BKP5o6UJo8QMWSmunYe%2FP90hKWnwzE3JH3M111gJqS3AQ3x6zU8%2FKICTGdLFhv5K1Cv2xeU4VOd7wvez4r9k5qSaCOVwFJCVqQLbXY6cK6TVMj2%2F1fKXeojTxNhpoSfJ%2FlPEq%2FfSmjmjRHXt3EpgCpTdxkJPCxMW%2BClJ%2ByZKlfnHOXVXBKZXPFtwb51buZQxvIbmhf1g8KtDsAzYPzTk6AEhaPM4QQM5i1QZdkuWG8lpSb8G7vkuGDQvJy0iPqpgVs78D3ldjncGuRNSwk2E1l4J4yi0Z92ex6f7RYIPQynfzGDqO1ZEgu4uqpQ77817XfU0UHmZhAuaA5qUSdAClwNnNyA0UFL1kMWuBWV7mipyEglpewKaHriHqHjF6i4bfPHedIAZ2Gh5OkXmyNDxRU9IGPkBWfwu%2FKip4iTdmlf4N2kkl8dJeWF%2BjxxQpTHJqiW8w%2BbmWM%2FQRWvqXEtdu1P4CqdrrOxy8pEynZFOfwTNWPZqTiaoHZVOdsD9lZw1tY5EJRVth5JwknKR2hnZscNyxaWdkwkMDIvQY6pgH3Nsm9s44Ad1oiALB%2Bdv%2FCl1PIZzUttUCGG2X6O3GmAdD%2F%2B36Lo0McFs85GG6%2F5%2BGgjtiw2dJERSbMD6y120ppM%2FBRzNOeMQIjTYd29cOjguHV%2Fs7pNIu66cdDtF7%2Fgb8xYZ%2Fujm4jg%2FiTNarwDSnXAbhtSysSqQOMNWaT5lGSN1qFV1Z0r1VP5njobUbXFDsFwu%2BLq7NUuqmLltLchftB%2FjZEm7D6&X-Amz-Signature=43dcbff97af32093527f96a4f2df05ef616cc0f298ec9c0a587993323b114b54&X-Amz-SignedHeaders=host&x-id=GetObject)
