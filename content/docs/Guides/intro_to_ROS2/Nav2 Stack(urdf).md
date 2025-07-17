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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4FPWOV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDQd53agoiVFy6v8rr%2FCgFT9pYx%2B3ZDNrcQnOmy%2B3mWjgIhAMABrjEO9CpJw0Q3CYSeFIHeBe1GmSqomGyflakE3aEIKv8DCHwQABoMNjM3NDIzMTgzODA1IgwQqsvVWlLYn3ZXWrYq3ANbUa2lhE%2BD%2BFt%2B2yLdxV2p%2BLFDuuNGxvME4pn1xbAxVGuvNCv2VK0BrhwXWIwVMP7y6AS4iWxvnz4Rqqw70MssmSlECsY7oBtfJ7Xg3hlvN%2FHngLeHzGNdr5U9bx7AJSKUOIQwUuwu3xqJkb5dSyahqDCn886ugvwMZf4Sr8Vn25hFz334e8qD564FnkwtEB1GK0HqfFuArNPAKYk4iqfkbIKMpnDbPgFlQbw89UkE82KKBqCmMxJfkSDZDWSj6xiNHC76ib1K0VdegCA0lf1mIUCaTW8fbzD%2F%2BDYLwtY4p6gB7JVlgRBY5TNpeW6Hzh%2FmygdVxi4EdA3%2FYmfl9aHQwcAAdHfgU3bifrCrbkYg2OoGwd%2BJdvI996q3sQDDwlZlIDq8rX1lF9ZvZJYlFYSPEJa4y%2BJ4VedFvQt54cRAWD98FB4OCNoHw7BR0KONprXhDSwM3IV5MFYpwiE9AyOHBkHDmtkB3UuJfQziH1O6LRqTuXO%2BnG72brivrSrqmM92vor180Y9f6jLKQq89%2Bp78jSCRMGiyrpCx2hOlLMvKvmjqT9FxTtEWruX2Yew0UdyPb0sbTj4ZIDn%2Be3DtrNEmZj84ciQEbmSNUdkx433D2nBoJdfrVtoV26NRjDbjuXDBjqkAYgq3GR0LCVpeLGrr473balsP5ohEILUoxpb%2FIKwOyAlKr9WVCd4szSlPaCr8fgar%2B4jWRVxdWQnqStrKO0RnCQSvP00%2B94hffKhqv6N8C6mRcdnyENcL2kn82DQbRSxecuXLCHfkmJXPCMaJmeBsuawBqXP2azlKINgBovoHtl121X4svm1R2LrXTW6JWEJpAQsSbx4MrSBFwzlqMRHcFhy%2FBFj&X-Amz-Signature=684ad24a7586585f8454fb09bce79a4d8e5d99f991953b269229cb8d3658da7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4FPWOV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDQd53agoiVFy6v8rr%2FCgFT9pYx%2B3ZDNrcQnOmy%2B3mWjgIhAMABrjEO9CpJw0Q3CYSeFIHeBe1GmSqomGyflakE3aEIKv8DCHwQABoMNjM3NDIzMTgzODA1IgwQqsvVWlLYn3ZXWrYq3ANbUa2lhE%2BD%2BFt%2B2yLdxV2p%2BLFDuuNGxvME4pn1xbAxVGuvNCv2VK0BrhwXWIwVMP7y6AS4iWxvnz4Rqqw70MssmSlECsY7oBtfJ7Xg3hlvN%2FHngLeHzGNdr5U9bx7AJSKUOIQwUuwu3xqJkb5dSyahqDCn886ugvwMZf4Sr8Vn25hFz334e8qD564FnkwtEB1GK0HqfFuArNPAKYk4iqfkbIKMpnDbPgFlQbw89UkE82KKBqCmMxJfkSDZDWSj6xiNHC76ib1K0VdegCA0lf1mIUCaTW8fbzD%2F%2BDYLwtY4p6gB7JVlgRBY5TNpeW6Hzh%2FmygdVxi4EdA3%2FYmfl9aHQwcAAdHfgU3bifrCrbkYg2OoGwd%2BJdvI996q3sQDDwlZlIDq8rX1lF9ZvZJYlFYSPEJa4y%2BJ4VedFvQt54cRAWD98FB4OCNoHw7BR0KONprXhDSwM3IV5MFYpwiE9AyOHBkHDmtkB3UuJfQziH1O6LRqTuXO%2BnG72brivrSrqmM92vor180Y9f6jLKQq89%2Bp78jSCRMGiyrpCx2hOlLMvKvmjqT9FxTtEWruX2Yew0UdyPb0sbTj4ZIDn%2Be3DtrNEmZj84ciQEbmSNUdkx433D2nBoJdfrVtoV26NRjDbjuXDBjqkAYgq3GR0LCVpeLGrr473balsP5ohEILUoxpb%2FIKwOyAlKr9WVCd4szSlPaCr8fgar%2B4jWRVxdWQnqStrKO0RnCQSvP00%2B94hffKhqv6N8C6mRcdnyENcL2kn82DQbRSxecuXLCHfkmJXPCMaJmeBsuawBqXP2azlKINgBovoHtl121X4svm1R2LrXTW6JWEJpAQsSbx4MrSBFwzlqMRHcFhy%2FBFj&X-Amz-Signature=ed07ad99ce1fec6756af54d088e367e2e472a4461b35b64ef3063d5f7a96f875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4FPWOV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDQd53agoiVFy6v8rr%2FCgFT9pYx%2B3ZDNrcQnOmy%2B3mWjgIhAMABrjEO9CpJw0Q3CYSeFIHeBe1GmSqomGyflakE3aEIKv8DCHwQABoMNjM3NDIzMTgzODA1IgwQqsvVWlLYn3ZXWrYq3ANbUa2lhE%2BD%2BFt%2B2yLdxV2p%2BLFDuuNGxvME4pn1xbAxVGuvNCv2VK0BrhwXWIwVMP7y6AS4iWxvnz4Rqqw70MssmSlECsY7oBtfJ7Xg3hlvN%2FHngLeHzGNdr5U9bx7AJSKUOIQwUuwu3xqJkb5dSyahqDCn886ugvwMZf4Sr8Vn25hFz334e8qD564FnkwtEB1GK0HqfFuArNPAKYk4iqfkbIKMpnDbPgFlQbw89UkE82KKBqCmMxJfkSDZDWSj6xiNHC76ib1K0VdegCA0lf1mIUCaTW8fbzD%2F%2BDYLwtY4p6gB7JVlgRBY5TNpeW6Hzh%2FmygdVxi4EdA3%2FYmfl9aHQwcAAdHfgU3bifrCrbkYg2OoGwd%2BJdvI996q3sQDDwlZlIDq8rX1lF9ZvZJYlFYSPEJa4y%2BJ4VedFvQt54cRAWD98FB4OCNoHw7BR0KONprXhDSwM3IV5MFYpwiE9AyOHBkHDmtkB3UuJfQziH1O6LRqTuXO%2BnG72brivrSrqmM92vor180Y9f6jLKQq89%2Bp78jSCRMGiyrpCx2hOlLMvKvmjqT9FxTtEWruX2Yew0UdyPb0sbTj4ZIDn%2Be3DtrNEmZj84ciQEbmSNUdkx433D2nBoJdfrVtoV26NRjDbjuXDBjqkAYgq3GR0LCVpeLGrr473balsP5ohEILUoxpb%2FIKwOyAlKr9WVCd4szSlPaCr8fgar%2B4jWRVxdWQnqStrKO0RnCQSvP00%2B94hffKhqv6N8C6mRcdnyENcL2kn82DQbRSxecuXLCHfkmJXPCMaJmeBsuawBqXP2azlKINgBovoHtl121X4svm1R2LrXTW6JWEJpAQsSbx4MrSBFwzlqMRHcFhy%2FBFj&X-Amz-Signature=24d7e2cbc97f1cafd349cd23419f916292a847dbe4b8328838cc7b5cafebb4fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4FPWOV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDQd53agoiVFy6v8rr%2FCgFT9pYx%2B3ZDNrcQnOmy%2B3mWjgIhAMABrjEO9CpJw0Q3CYSeFIHeBe1GmSqomGyflakE3aEIKv8DCHwQABoMNjM3NDIzMTgzODA1IgwQqsvVWlLYn3ZXWrYq3ANbUa2lhE%2BD%2BFt%2B2yLdxV2p%2BLFDuuNGxvME4pn1xbAxVGuvNCv2VK0BrhwXWIwVMP7y6AS4iWxvnz4Rqqw70MssmSlECsY7oBtfJ7Xg3hlvN%2FHngLeHzGNdr5U9bx7AJSKUOIQwUuwu3xqJkb5dSyahqDCn886ugvwMZf4Sr8Vn25hFz334e8qD564FnkwtEB1GK0HqfFuArNPAKYk4iqfkbIKMpnDbPgFlQbw89UkE82KKBqCmMxJfkSDZDWSj6xiNHC76ib1K0VdegCA0lf1mIUCaTW8fbzD%2F%2BDYLwtY4p6gB7JVlgRBY5TNpeW6Hzh%2FmygdVxi4EdA3%2FYmfl9aHQwcAAdHfgU3bifrCrbkYg2OoGwd%2BJdvI996q3sQDDwlZlIDq8rX1lF9ZvZJYlFYSPEJa4y%2BJ4VedFvQt54cRAWD98FB4OCNoHw7BR0KONprXhDSwM3IV5MFYpwiE9AyOHBkHDmtkB3UuJfQziH1O6LRqTuXO%2BnG72brivrSrqmM92vor180Y9f6jLKQq89%2Bp78jSCRMGiyrpCx2hOlLMvKvmjqT9FxTtEWruX2Yew0UdyPb0sbTj4ZIDn%2Be3DtrNEmZj84ciQEbmSNUdkx433D2nBoJdfrVtoV26NRjDbjuXDBjqkAYgq3GR0LCVpeLGrr473balsP5ohEILUoxpb%2FIKwOyAlKr9WVCd4szSlPaCr8fgar%2B4jWRVxdWQnqStrKO0RnCQSvP00%2B94hffKhqv6N8C6mRcdnyENcL2kn82DQbRSxecuXLCHfkmJXPCMaJmeBsuawBqXP2azlKINgBovoHtl121X4svm1R2LrXTW6JWEJpAQsSbx4MrSBFwzlqMRHcFhy%2FBFj&X-Amz-Signature=424b459287a5d606519e3679fb4c2ecc04808e87a4ee4e05eb63f5f65f3b588b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4FPWOV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDQd53agoiVFy6v8rr%2FCgFT9pYx%2B3ZDNrcQnOmy%2B3mWjgIhAMABrjEO9CpJw0Q3CYSeFIHeBe1GmSqomGyflakE3aEIKv8DCHwQABoMNjM3NDIzMTgzODA1IgwQqsvVWlLYn3ZXWrYq3ANbUa2lhE%2BD%2BFt%2B2yLdxV2p%2BLFDuuNGxvME4pn1xbAxVGuvNCv2VK0BrhwXWIwVMP7y6AS4iWxvnz4Rqqw70MssmSlECsY7oBtfJ7Xg3hlvN%2FHngLeHzGNdr5U9bx7AJSKUOIQwUuwu3xqJkb5dSyahqDCn886ugvwMZf4Sr8Vn25hFz334e8qD564FnkwtEB1GK0HqfFuArNPAKYk4iqfkbIKMpnDbPgFlQbw89UkE82KKBqCmMxJfkSDZDWSj6xiNHC76ib1K0VdegCA0lf1mIUCaTW8fbzD%2F%2BDYLwtY4p6gB7JVlgRBY5TNpeW6Hzh%2FmygdVxi4EdA3%2FYmfl9aHQwcAAdHfgU3bifrCrbkYg2OoGwd%2BJdvI996q3sQDDwlZlIDq8rX1lF9ZvZJYlFYSPEJa4y%2BJ4VedFvQt54cRAWD98FB4OCNoHw7BR0KONprXhDSwM3IV5MFYpwiE9AyOHBkHDmtkB3UuJfQziH1O6LRqTuXO%2BnG72brivrSrqmM92vor180Y9f6jLKQq89%2Bp78jSCRMGiyrpCx2hOlLMvKvmjqT9FxTtEWruX2Yew0UdyPb0sbTj4ZIDn%2Be3DtrNEmZj84ciQEbmSNUdkx433D2nBoJdfrVtoV26NRjDbjuXDBjqkAYgq3GR0LCVpeLGrr473balsP5ohEILUoxpb%2FIKwOyAlKr9WVCd4szSlPaCr8fgar%2B4jWRVxdWQnqStrKO0RnCQSvP00%2B94hffKhqv6N8C6mRcdnyENcL2kn82DQbRSxecuXLCHfkmJXPCMaJmeBsuawBqXP2azlKINgBovoHtl121X4svm1R2LrXTW6JWEJpAQsSbx4MrSBFwzlqMRHcFhy%2FBFj&X-Amz-Signature=7d01b6644aa48db5cb377301937de3212603024c681671310f2c86f02728b0b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4FPWOV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDQd53agoiVFy6v8rr%2FCgFT9pYx%2B3ZDNrcQnOmy%2B3mWjgIhAMABrjEO9CpJw0Q3CYSeFIHeBe1GmSqomGyflakE3aEIKv8DCHwQABoMNjM3NDIzMTgzODA1IgwQqsvVWlLYn3ZXWrYq3ANbUa2lhE%2BD%2BFt%2B2yLdxV2p%2BLFDuuNGxvME4pn1xbAxVGuvNCv2VK0BrhwXWIwVMP7y6AS4iWxvnz4Rqqw70MssmSlECsY7oBtfJ7Xg3hlvN%2FHngLeHzGNdr5U9bx7AJSKUOIQwUuwu3xqJkb5dSyahqDCn886ugvwMZf4Sr8Vn25hFz334e8qD564FnkwtEB1GK0HqfFuArNPAKYk4iqfkbIKMpnDbPgFlQbw89UkE82KKBqCmMxJfkSDZDWSj6xiNHC76ib1K0VdegCA0lf1mIUCaTW8fbzD%2F%2BDYLwtY4p6gB7JVlgRBY5TNpeW6Hzh%2FmygdVxi4EdA3%2FYmfl9aHQwcAAdHfgU3bifrCrbkYg2OoGwd%2BJdvI996q3sQDDwlZlIDq8rX1lF9ZvZJYlFYSPEJa4y%2BJ4VedFvQt54cRAWD98FB4OCNoHw7BR0KONprXhDSwM3IV5MFYpwiE9AyOHBkHDmtkB3UuJfQziH1O6LRqTuXO%2BnG72brivrSrqmM92vor180Y9f6jLKQq89%2Bp78jSCRMGiyrpCx2hOlLMvKvmjqT9FxTtEWruX2Yew0UdyPb0sbTj4ZIDn%2Be3DtrNEmZj84ciQEbmSNUdkx433D2nBoJdfrVtoV26NRjDbjuXDBjqkAYgq3GR0LCVpeLGrr473balsP5ohEILUoxpb%2FIKwOyAlKr9WVCd4szSlPaCr8fgar%2B4jWRVxdWQnqStrKO0RnCQSvP00%2B94hffKhqv6N8C6mRcdnyENcL2kn82DQbRSxecuXLCHfkmJXPCMaJmeBsuawBqXP2azlKINgBovoHtl121X4svm1R2LrXTW6JWEJpAQsSbx4MrSBFwzlqMRHcFhy%2FBFj&X-Amz-Signature=4734e48932160cec80dcfff4ab98c6326ab180dda1261272bc7a2c819efaac18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
