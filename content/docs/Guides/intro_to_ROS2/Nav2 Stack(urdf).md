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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZMNBPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2FeIYEh70gwXXuef%2FR2q08Yt0hEGudWszbgUwnGEGqAIgBwNBInvKjCKr4z1fj3p8RRge5tjZk%2FeggHqGi0QKnBMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE4mHwddUgezIM4wircAzlYYVvROwILfq2wybN4nmA3ajbZhJZUIKSBb8TAIP3xJ4cuRQfHAJ2v4vs2YuM016dVAUo1L1mhmtzYbOOLlwghzrqH%2BurYmTXizNOCJ6rHkhrhliE1Nc93QZo2c%2F5V4MjLjWFICr8Yofggcpdg7puh8EtzCnDTJjfXuBs61Mdx5utEfDDqd%2BsTGkrQCGKNJCDWtYcd0ROs4JlGSPwCKBYBS2klmFXuf4i1kprAkVVbzIxh3%2BMq%2FvZ%2F1JhXWBM7rkF6Tkr%2B75I4L%2FNJifMReW2dZalLuRnBKxdTkZdy3gf7Zb8TG0k1Smp0ODlVztY5vhk%2BliD%2F1XohNByjH0v7pdvraUNfRZFSY0vpy8mtSwb5VXNxnKXhojOyyg7giHqlePb2P0Z9N4Xnm3hiHOm9NqpeZZANlLFD506pHwVUDUjIo0HRwy4W%2BV6RRbSd%2BA1oYHQBvB41nA3iDp8n%2BmtL%2BHV3WjGfHlmsrTjdk6wH6MI4AuQdHxRfPgfzq5auPuVpFdvvTemFEHulbVHs25lH9iF1m9rvMlTzYzHm0BAQtr6%2BLbkSJ3eKlQCzhKLouyQ1anq4BSefr0xTKTresD9hICZ6VDQOLKOGujSU1aq0y%2FUUV0B9GBlm1xpRJwhnMObGsMEGOqUBfNjE5REdXD3CigxGmQtqNwUT%2BKBA4lEa6iA6yO0a5MpAU9NlmzakXaKkSNSy8rEVZkLdrDhlOE0wcgLzoru0HHHKa%2F8ardH38C8NN6e2YDJ15TLa%2B%2Bnq3rboHyusjSZZ2%2BFUoTi0u2tYiHTK%2FvmCOsuKwucQWHyptC3QMzDzga5ZcHQ0oq%2F9wybL5gHvt5szHxRQeAkKxxVg3YKtL9d7p4s8gpWB&X-Amz-Signature=1ba1aa8ca92ec4e64e9ed2470bca50197e12bddde893196fcaa3b81fcf16c2f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZMNBPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2FeIYEh70gwXXuef%2FR2q08Yt0hEGudWszbgUwnGEGqAIgBwNBInvKjCKr4z1fj3p8RRge5tjZk%2FeggHqGi0QKnBMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE4mHwddUgezIM4wircAzlYYVvROwILfq2wybN4nmA3ajbZhJZUIKSBb8TAIP3xJ4cuRQfHAJ2v4vs2YuM016dVAUo1L1mhmtzYbOOLlwghzrqH%2BurYmTXizNOCJ6rHkhrhliE1Nc93QZo2c%2F5V4MjLjWFICr8Yofggcpdg7puh8EtzCnDTJjfXuBs61Mdx5utEfDDqd%2BsTGkrQCGKNJCDWtYcd0ROs4JlGSPwCKBYBS2klmFXuf4i1kprAkVVbzIxh3%2BMq%2FvZ%2F1JhXWBM7rkF6Tkr%2B75I4L%2FNJifMReW2dZalLuRnBKxdTkZdy3gf7Zb8TG0k1Smp0ODlVztY5vhk%2BliD%2F1XohNByjH0v7pdvraUNfRZFSY0vpy8mtSwb5VXNxnKXhojOyyg7giHqlePb2P0Z9N4Xnm3hiHOm9NqpeZZANlLFD506pHwVUDUjIo0HRwy4W%2BV6RRbSd%2BA1oYHQBvB41nA3iDp8n%2BmtL%2BHV3WjGfHlmsrTjdk6wH6MI4AuQdHxRfPgfzq5auPuVpFdvvTemFEHulbVHs25lH9iF1m9rvMlTzYzHm0BAQtr6%2BLbkSJ3eKlQCzhKLouyQ1anq4BSefr0xTKTresD9hICZ6VDQOLKOGujSU1aq0y%2FUUV0B9GBlm1xpRJwhnMObGsMEGOqUBfNjE5REdXD3CigxGmQtqNwUT%2BKBA4lEa6iA6yO0a5MpAU9NlmzakXaKkSNSy8rEVZkLdrDhlOE0wcgLzoru0HHHKa%2F8ardH38C8NN6e2YDJ15TLa%2B%2Bnq3rboHyusjSZZ2%2BFUoTi0u2tYiHTK%2FvmCOsuKwucQWHyptC3QMzDzga5ZcHQ0oq%2F9wybL5gHvt5szHxRQeAkKxxVg3YKtL9d7p4s8gpWB&X-Amz-Signature=969f6b857880646c45f8f50b72c38a4b65ce78dceedfd2d4ebd374642accdfa1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZMNBPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2FeIYEh70gwXXuef%2FR2q08Yt0hEGudWszbgUwnGEGqAIgBwNBInvKjCKr4z1fj3p8RRge5tjZk%2FeggHqGi0QKnBMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE4mHwddUgezIM4wircAzlYYVvROwILfq2wybN4nmA3ajbZhJZUIKSBb8TAIP3xJ4cuRQfHAJ2v4vs2YuM016dVAUo1L1mhmtzYbOOLlwghzrqH%2BurYmTXizNOCJ6rHkhrhliE1Nc93QZo2c%2F5V4MjLjWFICr8Yofggcpdg7puh8EtzCnDTJjfXuBs61Mdx5utEfDDqd%2BsTGkrQCGKNJCDWtYcd0ROs4JlGSPwCKBYBS2klmFXuf4i1kprAkVVbzIxh3%2BMq%2FvZ%2F1JhXWBM7rkF6Tkr%2B75I4L%2FNJifMReW2dZalLuRnBKxdTkZdy3gf7Zb8TG0k1Smp0ODlVztY5vhk%2BliD%2F1XohNByjH0v7pdvraUNfRZFSY0vpy8mtSwb5VXNxnKXhojOyyg7giHqlePb2P0Z9N4Xnm3hiHOm9NqpeZZANlLFD506pHwVUDUjIo0HRwy4W%2BV6RRbSd%2BA1oYHQBvB41nA3iDp8n%2BmtL%2BHV3WjGfHlmsrTjdk6wH6MI4AuQdHxRfPgfzq5auPuVpFdvvTemFEHulbVHs25lH9iF1m9rvMlTzYzHm0BAQtr6%2BLbkSJ3eKlQCzhKLouyQ1anq4BSefr0xTKTresD9hICZ6VDQOLKOGujSU1aq0y%2FUUV0B9GBlm1xpRJwhnMObGsMEGOqUBfNjE5REdXD3CigxGmQtqNwUT%2BKBA4lEa6iA6yO0a5MpAU9NlmzakXaKkSNSy8rEVZkLdrDhlOE0wcgLzoru0HHHKa%2F8ardH38C8NN6e2YDJ15TLa%2B%2Bnq3rboHyusjSZZ2%2BFUoTi0u2tYiHTK%2FvmCOsuKwucQWHyptC3QMzDzga5ZcHQ0oq%2F9wybL5gHvt5szHxRQeAkKxxVg3YKtL9d7p4s8gpWB&X-Amz-Signature=f14709c03b162dee1d16b41cf73e61ce7917aa2aeb44da5b85700b21da4ab9b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZMNBPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2FeIYEh70gwXXuef%2FR2q08Yt0hEGudWszbgUwnGEGqAIgBwNBInvKjCKr4z1fj3p8RRge5tjZk%2FeggHqGi0QKnBMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE4mHwddUgezIM4wircAzlYYVvROwILfq2wybN4nmA3ajbZhJZUIKSBb8TAIP3xJ4cuRQfHAJ2v4vs2YuM016dVAUo1L1mhmtzYbOOLlwghzrqH%2BurYmTXizNOCJ6rHkhrhliE1Nc93QZo2c%2F5V4MjLjWFICr8Yofggcpdg7puh8EtzCnDTJjfXuBs61Mdx5utEfDDqd%2BsTGkrQCGKNJCDWtYcd0ROs4JlGSPwCKBYBS2klmFXuf4i1kprAkVVbzIxh3%2BMq%2FvZ%2F1JhXWBM7rkF6Tkr%2B75I4L%2FNJifMReW2dZalLuRnBKxdTkZdy3gf7Zb8TG0k1Smp0ODlVztY5vhk%2BliD%2F1XohNByjH0v7pdvraUNfRZFSY0vpy8mtSwb5VXNxnKXhojOyyg7giHqlePb2P0Z9N4Xnm3hiHOm9NqpeZZANlLFD506pHwVUDUjIo0HRwy4W%2BV6RRbSd%2BA1oYHQBvB41nA3iDp8n%2BmtL%2BHV3WjGfHlmsrTjdk6wH6MI4AuQdHxRfPgfzq5auPuVpFdvvTemFEHulbVHs25lH9iF1m9rvMlTzYzHm0BAQtr6%2BLbkSJ3eKlQCzhKLouyQ1anq4BSefr0xTKTresD9hICZ6VDQOLKOGujSU1aq0y%2FUUV0B9GBlm1xpRJwhnMObGsMEGOqUBfNjE5REdXD3CigxGmQtqNwUT%2BKBA4lEa6iA6yO0a5MpAU9NlmzakXaKkSNSy8rEVZkLdrDhlOE0wcgLzoru0HHHKa%2F8ardH38C8NN6e2YDJ15TLa%2B%2Bnq3rboHyusjSZZ2%2BFUoTi0u2tYiHTK%2FvmCOsuKwucQWHyptC3QMzDzga5ZcHQ0oq%2F9wybL5gHvt5szHxRQeAkKxxVg3YKtL9d7p4s8gpWB&X-Amz-Signature=d4fb2bade6c6f424f6c09798dc2649ab614cbe17c58a97998f2ce5a6f8563c95&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZMNBPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2FeIYEh70gwXXuef%2FR2q08Yt0hEGudWszbgUwnGEGqAIgBwNBInvKjCKr4z1fj3p8RRge5tjZk%2FeggHqGi0QKnBMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE4mHwddUgezIM4wircAzlYYVvROwILfq2wybN4nmA3ajbZhJZUIKSBb8TAIP3xJ4cuRQfHAJ2v4vs2YuM016dVAUo1L1mhmtzYbOOLlwghzrqH%2BurYmTXizNOCJ6rHkhrhliE1Nc93QZo2c%2F5V4MjLjWFICr8Yofggcpdg7puh8EtzCnDTJjfXuBs61Mdx5utEfDDqd%2BsTGkrQCGKNJCDWtYcd0ROs4JlGSPwCKBYBS2klmFXuf4i1kprAkVVbzIxh3%2BMq%2FvZ%2F1JhXWBM7rkF6Tkr%2B75I4L%2FNJifMReW2dZalLuRnBKxdTkZdy3gf7Zb8TG0k1Smp0ODlVztY5vhk%2BliD%2F1XohNByjH0v7pdvraUNfRZFSY0vpy8mtSwb5VXNxnKXhojOyyg7giHqlePb2P0Z9N4Xnm3hiHOm9NqpeZZANlLFD506pHwVUDUjIo0HRwy4W%2BV6RRbSd%2BA1oYHQBvB41nA3iDp8n%2BmtL%2BHV3WjGfHlmsrTjdk6wH6MI4AuQdHxRfPgfzq5auPuVpFdvvTemFEHulbVHs25lH9iF1m9rvMlTzYzHm0BAQtr6%2BLbkSJ3eKlQCzhKLouyQ1anq4BSefr0xTKTresD9hICZ6VDQOLKOGujSU1aq0y%2FUUV0B9GBlm1xpRJwhnMObGsMEGOqUBfNjE5REdXD3CigxGmQtqNwUT%2BKBA4lEa6iA6yO0a5MpAU9NlmzakXaKkSNSy8rEVZkLdrDhlOE0wcgLzoru0HHHKa%2F8ardH38C8NN6e2YDJ15TLa%2B%2Bnq3rboHyusjSZZ2%2BFUoTi0u2tYiHTK%2FvmCOsuKwucQWHyptC3QMzDzga5ZcHQ0oq%2F9wybL5gHvt5szHxRQeAkKxxVg3YKtL9d7p4s8gpWB&X-Amz-Signature=c829910e63675f88ef52964215867de3ca750a8b0b922a74eb390c7daa794f29&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKZMNBPS%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6%2FeIYEh70gwXXuef%2FR2q08Yt0hEGudWszbgUwnGEGqAIgBwNBInvKjCKr4z1fj3p8RRge5tjZk%2FeggHqGi0QKnBMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPE4mHwddUgezIM4wircAzlYYVvROwILfq2wybN4nmA3ajbZhJZUIKSBb8TAIP3xJ4cuRQfHAJ2v4vs2YuM016dVAUo1L1mhmtzYbOOLlwghzrqH%2BurYmTXizNOCJ6rHkhrhliE1Nc93QZo2c%2F5V4MjLjWFICr8Yofggcpdg7puh8EtzCnDTJjfXuBs61Mdx5utEfDDqd%2BsTGkrQCGKNJCDWtYcd0ROs4JlGSPwCKBYBS2klmFXuf4i1kprAkVVbzIxh3%2BMq%2FvZ%2F1JhXWBM7rkF6Tkr%2B75I4L%2FNJifMReW2dZalLuRnBKxdTkZdy3gf7Zb8TG0k1Smp0ODlVztY5vhk%2BliD%2F1XohNByjH0v7pdvraUNfRZFSY0vpy8mtSwb5VXNxnKXhojOyyg7giHqlePb2P0Z9N4Xnm3hiHOm9NqpeZZANlLFD506pHwVUDUjIo0HRwy4W%2BV6RRbSd%2BA1oYHQBvB41nA3iDp8n%2BmtL%2BHV3WjGfHlmsrTjdk6wH6MI4AuQdHxRfPgfzq5auPuVpFdvvTemFEHulbVHs25lH9iF1m9rvMlTzYzHm0BAQtr6%2BLbkSJ3eKlQCzhKLouyQ1anq4BSefr0xTKTresD9hICZ6VDQOLKOGujSU1aq0y%2FUUV0B9GBlm1xpRJwhnMObGsMEGOqUBfNjE5REdXD3CigxGmQtqNwUT%2BKBA4lEa6iA6yO0a5MpAU9NlmzakXaKkSNSy8rEVZkLdrDhlOE0wcgLzoru0HHHKa%2F8ardH38C8NN6e2YDJ15TLa%2B%2Bnq3rboHyusjSZZ2%2BFUoTi0u2tYiHTK%2FvmCOsuKwucQWHyptC3QMzDzga5ZcHQ0oq%2F9wybL5gHvt5szHxRQeAkKxxVg3YKtL9d7p4s8gpWB&X-Amz-Signature=fa598eb54518b6fd64a6f5cea955fa7b70262c23eb0b1398730692cbc5b81054&X-Amz-SignedHeaders=host&x-id=GetObject)
