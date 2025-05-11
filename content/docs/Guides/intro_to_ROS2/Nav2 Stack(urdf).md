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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPDYR67%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDwOxLJSrZ2ojMqhbTC%2B1EaYP58r%2BhUWbiahqgb3ukPSwIhANEJOBLaachihdiSMM1Si%2FIVkSb%2FoOJnww8ekFvX9tvmKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW6ciTnnX3nCPRFeQq3ANkxpbYTuGgUORmgRvDZkFBT7RlvoFW14PAhLIDNnkj9gg1fKbEql3094o2utAYbM09%2BILGd9rpb8U7KICzjkshgRRdGvCerQENNUbfkhKh9WwkXxtzVym7pkXJUa%2BU0OKOFdm461aMO9zGGwFX3Hkh2t52WlcaKnYro1ONMw%2B5H7boyn2gkx%2BKbMCdzwEtUKrGfej2P6IKcY3OlHgwJBGNKcijfXgHaTu4tbqU5kNqBoje26jzKKDdkzPMdF2QId6UQMV2MiDrCqGjsEsciRx8CD%2BFsrHMw3QFpnN2IA07ti0Ew%2FrxE7MASFA4YwpwVSrBquRoXXJpGDmJKsRE%2Fus4GLDzbCrUvGM2K1HVEMuTIxENhLHDobbhTskmC1aQ89vX%2BqG1lIgIqzJLmgGKGKlLV1pGOnPGtdjp6%2Fd9%2BcnAaejpQf224aZ43R58NEt8Z2XqMaTEc493FuWNpMQywjDqdKYtwaCf2e7BoST2o%2F%2BDWx6QEzDQpmoC2pwTYHLmOWgG0OawgFaQlNUIHM%2FA%2BvNqyg5MOqe2wP1Ei4hPZZltQW%2BHIDm0JxBVBL9qKxHpt1Wyo%2BGtllM0bLu%2Fnt1F8fxpmigjbMLO3B2xgzjLqLb0M9oZ9qfJnJhSKb52xjDQloTBBjqkAW9ItH0hlO0qtHkc%2Ftg4rQFb7kYyenrGLNNJ0lTskUVu6vSqXXejPQ7v5eH45uSKviH9%2FfYiA1VURRGvCprV7ALYxQNaIxqpNcC7NNFvFKC36tgMwq7oqeBPrhwabtZ%2B9rvfybfFNP%2Fo5Tr3oOvEqTxIaO2aspnsriavboRgtcDThoemgO09XLxgs78BENCbVAiJm49btcRW%2Fys9OGQ35kVY8i9F&X-Amz-Signature=b511cef7b79e92735606e5a9fbcd3fe0e9fcb8e96622a7463117c82bd04a9364&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPDYR67%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDwOxLJSrZ2ojMqhbTC%2B1EaYP58r%2BhUWbiahqgb3ukPSwIhANEJOBLaachihdiSMM1Si%2FIVkSb%2FoOJnww8ekFvX9tvmKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW6ciTnnX3nCPRFeQq3ANkxpbYTuGgUORmgRvDZkFBT7RlvoFW14PAhLIDNnkj9gg1fKbEql3094o2utAYbM09%2BILGd9rpb8U7KICzjkshgRRdGvCerQENNUbfkhKh9WwkXxtzVym7pkXJUa%2BU0OKOFdm461aMO9zGGwFX3Hkh2t52WlcaKnYro1ONMw%2B5H7boyn2gkx%2BKbMCdzwEtUKrGfej2P6IKcY3OlHgwJBGNKcijfXgHaTu4tbqU5kNqBoje26jzKKDdkzPMdF2QId6UQMV2MiDrCqGjsEsciRx8CD%2BFsrHMw3QFpnN2IA07ti0Ew%2FrxE7MASFA4YwpwVSrBquRoXXJpGDmJKsRE%2Fus4GLDzbCrUvGM2K1HVEMuTIxENhLHDobbhTskmC1aQ89vX%2BqG1lIgIqzJLmgGKGKlLV1pGOnPGtdjp6%2Fd9%2BcnAaejpQf224aZ43R58NEt8Z2XqMaTEc493FuWNpMQywjDqdKYtwaCf2e7BoST2o%2F%2BDWx6QEzDQpmoC2pwTYHLmOWgG0OawgFaQlNUIHM%2FA%2BvNqyg5MOqe2wP1Ei4hPZZltQW%2BHIDm0JxBVBL9qKxHpt1Wyo%2BGtllM0bLu%2Fnt1F8fxpmigjbMLO3B2xgzjLqLb0M9oZ9qfJnJhSKb52xjDQloTBBjqkAW9ItH0hlO0qtHkc%2Ftg4rQFb7kYyenrGLNNJ0lTskUVu6vSqXXejPQ7v5eH45uSKviH9%2FfYiA1VURRGvCprV7ALYxQNaIxqpNcC7NNFvFKC36tgMwq7oqeBPrhwabtZ%2B9rvfybfFNP%2Fo5Tr3oOvEqTxIaO2aspnsriavboRgtcDThoemgO09XLxgs78BENCbVAiJm49btcRW%2Fys9OGQ35kVY8i9F&X-Amz-Signature=32c068bb6246643d6d9160e7b5ef564634e97bf71a6ea94d685318128bdda729&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPDYR67%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDwOxLJSrZ2ojMqhbTC%2B1EaYP58r%2BhUWbiahqgb3ukPSwIhANEJOBLaachihdiSMM1Si%2FIVkSb%2FoOJnww8ekFvX9tvmKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW6ciTnnX3nCPRFeQq3ANkxpbYTuGgUORmgRvDZkFBT7RlvoFW14PAhLIDNnkj9gg1fKbEql3094o2utAYbM09%2BILGd9rpb8U7KICzjkshgRRdGvCerQENNUbfkhKh9WwkXxtzVym7pkXJUa%2BU0OKOFdm461aMO9zGGwFX3Hkh2t52WlcaKnYro1ONMw%2B5H7boyn2gkx%2BKbMCdzwEtUKrGfej2P6IKcY3OlHgwJBGNKcijfXgHaTu4tbqU5kNqBoje26jzKKDdkzPMdF2QId6UQMV2MiDrCqGjsEsciRx8CD%2BFsrHMw3QFpnN2IA07ti0Ew%2FrxE7MASFA4YwpwVSrBquRoXXJpGDmJKsRE%2Fus4GLDzbCrUvGM2K1HVEMuTIxENhLHDobbhTskmC1aQ89vX%2BqG1lIgIqzJLmgGKGKlLV1pGOnPGtdjp6%2Fd9%2BcnAaejpQf224aZ43R58NEt8Z2XqMaTEc493FuWNpMQywjDqdKYtwaCf2e7BoST2o%2F%2BDWx6QEzDQpmoC2pwTYHLmOWgG0OawgFaQlNUIHM%2FA%2BvNqyg5MOqe2wP1Ei4hPZZltQW%2BHIDm0JxBVBL9qKxHpt1Wyo%2BGtllM0bLu%2Fnt1F8fxpmigjbMLO3B2xgzjLqLb0M9oZ9qfJnJhSKb52xjDQloTBBjqkAW9ItH0hlO0qtHkc%2Ftg4rQFb7kYyenrGLNNJ0lTskUVu6vSqXXejPQ7v5eH45uSKviH9%2FfYiA1VURRGvCprV7ALYxQNaIxqpNcC7NNFvFKC36tgMwq7oqeBPrhwabtZ%2B9rvfybfFNP%2Fo5Tr3oOvEqTxIaO2aspnsriavboRgtcDThoemgO09XLxgs78BENCbVAiJm49btcRW%2Fys9OGQ35kVY8i9F&X-Amz-Signature=5d70dbcbe6e9c21019737e973317b56e1ad62a76b7217f0f70ee4ad47ae12236&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPDYR67%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDwOxLJSrZ2ojMqhbTC%2B1EaYP58r%2BhUWbiahqgb3ukPSwIhANEJOBLaachihdiSMM1Si%2FIVkSb%2FoOJnww8ekFvX9tvmKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW6ciTnnX3nCPRFeQq3ANkxpbYTuGgUORmgRvDZkFBT7RlvoFW14PAhLIDNnkj9gg1fKbEql3094o2utAYbM09%2BILGd9rpb8U7KICzjkshgRRdGvCerQENNUbfkhKh9WwkXxtzVym7pkXJUa%2BU0OKOFdm461aMO9zGGwFX3Hkh2t52WlcaKnYro1ONMw%2B5H7boyn2gkx%2BKbMCdzwEtUKrGfej2P6IKcY3OlHgwJBGNKcijfXgHaTu4tbqU5kNqBoje26jzKKDdkzPMdF2QId6UQMV2MiDrCqGjsEsciRx8CD%2BFsrHMw3QFpnN2IA07ti0Ew%2FrxE7MASFA4YwpwVSrBquRoXXJpGDmJKsRE%2Fus4GLDzbCrUvGM2K1HVEMuTIxENhLHDobbhTskmC1aQ89vX%2BqG1lIgIqzJLmgGKGKlLV1pGOnPGtdjp6%2Fd9%2BcnAaejpQf224aZ43R58NEt8Z2XqMaTEc493FuWNpMQywjDqdKYtwaCf2e7BoST2o%2F%2BDWx6QEzDQpmoC2pwTYHLmOWgG0OawgFaQlNUIHM%2FA%2BvNqyg5MOqe2wP1Ei4hPZZltQW%2BHIDm0JxBVBL9qKxHpt1Wyo%2BGtllM0bLu%2Fnt1F8fxpmigjbMLO3B2xgzjLqLb0M9oZ9qfJnJhSKb52xjDQloTBBjqkAW9ItH0hlO0qtHkc%2Ftg4rQFb7kYyenrGLNNJ0lTskUVu6vSqXXejPQ7v5eH45uSKviH9%2FfYiA1VURRGvCprV7ALYxQNaIxqpNcC7NNFvFKC36tgMwq7oqeBPrhwabtZ%2B9rvfybfFNP%2Fo5Tr3oOvEqTxIaO2aspnsriavboRgtcDThoemgO09XLxgs78BENCbVAiJm49btcRW%2Fys9OGQ35kVY8i9F&X-Amz-Signature=e369c66d1aa0a689144f24ad52a3a25d53eb65eaeb814c57530429c9d3fc96ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPDYR67%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDwOxLJSrZ2ojMqhbTC%2B1EaYP58r%2BhUWbiahqgb3ukPSwIhANEJOBLaachihdiSMM1Si%2FIVkSb%2FoOJnww8ekFvX9tvmKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW6ciTnnX3nCPRFeQq3ANkxpbYTuGgUORmgRvDZkFBT7RlvoFW14PAhLIDNnkj9gg1fKbEql3094o2utAYbM09%2BILGd9rpb8U7KICzjkshgRRdGvCerQENNUbfkhKh9WwkXxtzVym7pkXJUa%2BU0OKOFdm461aMO9zGGwFX3Hkh2t52WlcaKnYro1ONMw%2B5H7boyn2gkx%2BKbMCdzwEtUKrGfej2P6IKcY3OlHgwJBGNKcijfXgHaTu4tbqU5kNqBoje26jzKKDdkzPMdF2QId6UQMV2MiDrCqGjsEsciRx8CD%2BFsrHMw3QFpnN2IA07ti0Ew%2FrxE7MASFA4YwpwVSrBquRoXXJpGDmJKsRE%2Fus4GLDzbCrUvGM2K1HVEMuTIxENhLHDobbhTskmC1aQ89vX%2BqG1lIgIqzJLmgGKGKlLV1pGOnPGtdjp6%2Fd9%2BcnAaejpQf224aZ43R58NEt8Z2XqMaTEc493FuWNpMQywjDqdKYtwaCf2e7BoST2o%2F%2BDWx6QEzDQpmoC2pwTYHLmOWgG0OawgFaQlNUIHM%2FA%2BvNqyg5MOqe2wP1Ei4hPZZltQW%2BHIDm0JxBVBL9qKxHpt1Wyo%2BGtllM0bLu%2Fnt1F8fxpmigjbMLO3B2xgzjLqLb0M9oZ9qfJnJhSKb52xjDQloTBBjqkAW9ItH0hlO0qtHkc%2Ftg4rQFb7kYyenrGLNNJ0lTskUVu6vSqXXejPQ7v5eH45uSKviH9%2FfYiA1VURRGvCprV7ALYxQNaIxqpNcC7NNFvFKC36tgMwq7oqeBPrhwabtZ%2B9rvfybfFNP%2Fo5Tr3oOvEqTxIaO2aspnsriavboRgtcDThoemgO09XLxgs78BENCbVAiJm49btcRW%2Fys9OGQ35kVY8i9F&X-Amz-Signature=b409d07ceb369d67a9dafa5353314b3524ce673fd4bb173bc6974c94c9a024b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPDYR67%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDwOxLJSrZ2ojMqhbTC%2B1EaYP58r%2BhUWbiahqgb3ukPSwIhANEJOBLaachihdiSMM1Si%2FIVkSb%2FoOJnww8ekFvX9tvmKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW6ciTnnX3nCPRFeQq3ANkxpbYTuGgUORmgRvDZkFBT7RlvoFW14PAhLIDNnkj9gg1fKbEql3094o2utAYbM09%2BILGd9rpb8U7KICzjkshgRRdGvCerQENNUbfkhKh9WwkXxtzVym7pkXJUa%2BU0OKOFdm461aMO9zGGwFX3Hkh2t52WlcaKnYro1ONMw%2B5H7boyn2gkx%2BKbMCdzwEtUKrGfej2P6IKcY3OlHgwJBGNKcijfXgHaTu4tbqU5kNqBoje26jzKKDdkzPMdF2QId6UQMV2MiDrCqGjsEsciRx8CD%2BFsrHMw3QFpnN2IA07ti0Ew%2FrxE7MASFA4YwpwVSrBquRoXXJpGDmJKsRE%2Fus4GLDzbCrUvGM2K1HVEMuTIxENhLHDobbhTskmC1aQ89vX%2BqG1lIgIqzJLmgGKGKlLV1pGOnPGtdjp6%2Fd9%2BcnAaejpQf224aZ43R58NEt8Z2XqMaTEc493FuWNpMQywjDqdKYtwaCf2e7BoST2o%2F%2BDWx6QEzDQpmoC2pwTYHLmOWgG0OawgFaQlNUIHM%2FA%2BvNqyg5MOqe2wP1Ei4hPZZltQW%2BHIDm0JxBVBL9qKxHpt1Wyo%2BGtllM0bLu%2Fnt1F8fxpmigjbMLO3B2xgzjLqLb0M9oZ9qfJnJhSKb52xjDQloTBBjqkAW9ItH0hlO0qtHkc%2Ftg4rQFb7kYyenrGLNNJ0lTskUVu6vSqXXejPQ7v5eH45uSKviH9%2FfYiA1VURRGvCprV7ALYxQNaIxqpNcC7NNFvFKC36tgMwq7oqeBPrhwabtZ%2B9rvfybfFNP%2Fo5Tr3oOvEqTxIaO2aspnsriavboRgtcDThoemgO09XLxgs78BENCbVAiJm49btcRW%2Fys9OGQ35kVY8i9F&X-Amz-Signature=2ac2b5c941f47808bb6f2b271ab3ccaed5636fa03cd1370729ff0514c26066c0&X-Amz-SignedHeaders=host&x-id=GetObject)
