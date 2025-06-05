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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY7BWQXL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIExvh3agWQoZ6ahm2ocXcIS2P8r%2FkPQyd4FpRfB670NdAiBgDIilF4kkAf3PARKYQQt0G5vw4G3oHJwIaV5tK3%2FOZyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMdcaTdi%2BPbCOzWZCQKtwDjI%2FXhFBSobKBGu%2FB3Yhn0DicHlvyz42tgSc3muRvEcO7pI9HBjDiTK5s3c2mHqkNTHnw9mG94XGPUfQd9Nb4Zrk%2FtOYRS3EXwhImKBChncMnNSa03UUzYmvT%2Bwj2UycYPcDToYkG2Gld3Re%2BUgDVCquNdvtBLvuaQYQRwPmTVd6uipDSSjZD5ATRSZQKDkbk%2FiLThnlbtkazrEN1irgwhudOrp%2Fk6NvCqwdnvt9HaiX5bZXniFPJKxVUVJ3lQIZej7ZsmgJBbjbQVm732rigCDXF05%2Ff7hvZ0aJM17yevn5u8WXjiiUJXOZ2VMx2RDRQRU9oRCqetzB1dqBTO6%2BM3IUZS2bkd3oBk5kwf9W%2BOhtCKbqEzDVeeLQ8D22HzmPmLforkHVbmcq7fsaJk86u7%2FQzBrQ%2FBWgxrnWajSSR5SjqOaGX9GTzDhSqWQ13wlDZHQtcWrno0yecF%2FX2JwuvhvXhsHQ97uhPaGKNmt303zZVzciTBNTEsww6zSz6KzYdOYbt8JHFYcBqBPz1M6hFe3sOQCOTqGdlVVPRYehLfPGDsiregMhRMvWCEKWn6GAGOdJyB4y00baXbmDM8Yjdro6PWqi4H3XuXmk5v9dyR45fK8XxLUSscN4%2FA0Uw8qiHwgY6pgFdICddAoApvMf%2FXh%2B%2BE5wakIndcAGurfUZCxLRT9%2F9DlNrexDC06Z9JgdLAvj%2FU3%2Fe5gVtW5ZS9sSkmA2pbfCiEkfPdT8usEV0FrZIfxycjuKywsE%2BZb9q9E8UxtPA%2BwKzXns%2FgwEtUzKpx0jc5Gp8ufu6c9zDNNa4I7oDZzzGh%2BNhy0cwxThKzWNXKV%2FcfR7n2okWSRxMds%2B2N8kv6L%2FZRPNIsgOz&X-Amz-Signature=0a1257ab86ea5585aa0fa62120176e52bec4196e8e8edbd08b3f2840c97894ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY7BWQXL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIExvh3agWQoZ6ahm2ocXcIS2P8r%2FkPQyd4FpRfB670NdAiBgDIilF4kkAf3PARKYQQt0G5vw4G3oHJwIaV5tK3%2FOZyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMdcaTdi%2BPbCOzWZCQKtwDjI%2FXhFBSobKBGu%2FB3Yhn0DicHlvyz42tgSc3muRvEcO7pI9HBjDiTK5s3c2mHqkNTHnw9mG94XGPUfQd9Nb4Zrk%2FtOYRS3EXwhImKBChncMnNSa03UUzYmvT%2Bwj2UycYPcDToYkG2Gld3Re%2BUgDVCquNdvtBLvuaQYQRwPmTVd6uipDSSjZD5ATRSZQKDkbk%2FiLThnlbtkazrEN1irgwhudOrp%2Fk6NvCqwdnvt9HaiX5bZXniFPJKxVUVJ3lQIZej7ZsmgJBbjbQVm732rigCDXF05%2Ff7hvZ0aJM17yevn5u8WXjiiUJXOZ2VMx2RDRQRU9oRCqetzB1dqBTO6%2BM3IUZS2bkd3oBk5kwf9W%2BOhtCKbqEzDVeeLQ8D22HzmPmLforkHVbmcq7fsaJk86u7%2FQzBrQ%2FBWgxrnWajSSR5SjqOaGX9GTzDhSqWQ13wlDZHQtcWrno0yecF%2FX2JwuvhvXhsHQ97uhPaGKNmt303zZVzciTBNTEsww6zSz6KzYdOYbt8JHFYcBqBPz1M6hFe3sOQCOTqGdlVVPRYehLfPGDsiregMhRMvWCEKWn6GAGOdJyB4y00baXbmDM8Yjdro6PWqi4H3XuXmk5v9dyR45fK8XxLUSscN4%2FA0Uw8qiHwgY6pgFdICddAoApvMf%2FXh%2B%2BE5wakIndcAGurfUZCxLRT9%2F9DlNrexDC06Z9JgdLAvj%2FU3%2Fe5gVtW5ZS9sSkmA2pbfCiEkfPdT8usEV0FrZIfxycjuKywsE%2BZb9q9E8UxtPA%2BwKzXns%2FgwEtUzKpx0jc5Gp8ufu6c9zDNNa4I7oDZzzGh%2BNhy0cwxThKzWNXKV%2FcfR7n2okWSRxMds%2B2N8kv6L%2FZRPNIsgOz&X-Amz-Signature=04589585b766c6c9da3d56faac7a13da1d1962a88ae52451eab783c0944b0335&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY7BWQXL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIExvh3agWQoZ6ahm2ocXcIS2P8r%2FkPQyd4FpRfB670NdAiBgDIilF4kkAf3PARKYQQt0G5vw4G3oHJwIaV5tK3%2FOZyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMdcaTdi%2BPbCOzWZCQKtwDjI%2FXhFBSobKBGu%2FB3Yhn0DicHlvyz42tgSc3muRvEcO7pI9HBjDiTK5s3c2mHqkNTHnw9mG94XGPUfQd9Nb4Zrk%2FtOYRS3EXwhImKBChncMnNSa03UUzYmvT%2Bwj2UycYPcDToYkG2Gld3Re%2BUgDVCquNdvtBLvuaQYQRwPmTVd6uipDSSjZD5ATRSZQKDkbk%2FiLThnlbtkazrEN1irgwhudOrp%2Fk6NvCqwdnvt9HaiX5bZXniFPJKxVUVJ3lQIZej7ZsmgJBbjbQVm732rigCDXF05%2Ff7hvZ0aJM17yevn5u8WXjiiUJXOZ2VMx2RDRQRU9oRCqetzB1dqBTO6%2BM3IUZS2bkd3oBk5kwf9W%2BOhtCKbqEzDVeeLQ8D22HzmPmLforkHVbmcq7fsaJk86u7%2FQzBrQ%2FBWgxrnWajSSR5SjqOaGX9GTzDhSqWQ13wlDZHQtcWrno0yecF%2FX2JwuvhvXhsHQ97uhPaGKNmt303zZVzciTBNTEsww6zSz6KzYdOYbt8JHFYcBqBPz1M6hFe3sOQCOTqGdlVVPRYehLfPGDsiregMhRMvWCEKWn6GAGOdJyB4y00baXbmDM8Yjdro6PWqi4H3XuXmk5v9dyR45fK8XxLUSscN4%2FA0Uw8qiHwgY6pgFdICddAoApvMf%2FXh%2B%2BE5wakIndcAGurfUZCxLRT9%2F9DlNrexDC06Z9JgdLAvj%2FU3%2Fe5gVtW5ZS9sSkmA2pbfCiEkfPdT8usEV0FrZIfxycjuKywsE%2BZb9q9E8UxtPA%2BwKzXns%2FgwEtUzKpx0jc5Gp8ufu6c9zDNNa4I7oDZzzGh%2BNhy0cwxThKzWNXKV%2FcfR7n2okWSRxMds%2B2N8kv6L%2FZRPNIsgOz&X-Amz-Signature=621aaf03b62d198421102ce58db2f925e785be5ec29bf8bb38ce5c4f4be0c951&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY7BWQXL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIExvh3agWQoZ6ahm2ocXcIS2P8r%2FkPQyd4FpRfB670NdAiBgDIilF4kkAf3PARKYQQt0G5vw4G3oHJwIaV5tK3%2FOZyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMdcaTdi%2BPbCOzWZCQKtwDjI%2FXhFBSobKBGu%2FB3Yhn0DicHlvyz42tgSc3muRvEcO7pI9HBjDiTK5s3c2mHqkNTHnw9mG94XGPUfQd9Nb4Zrk%2FtOYRS3EXwhImKBChncMnNSa03UUzYmvT%2Bwj2UycYPcDToYkG2Gld3Re%2BUgDVCquNdvtBLvuaQYQRwPmTVd6uipDSSjZD5ATRSZQKDkbk%2FiLThnlbtkazrEN1irgwhudOrp%2Fk6NvCqwdnvt9HaiX5bZXniFPJKxVUVJ3lQIZej7ZsmgJBbjbQVm732rigCDXF05%2Ff7hvZ0aJM17yevn5u8WXjiiUJXOZ2VMx2RDRQRU9oRCqetzB1dqBTO6%2BM3IUZS2bkd3oBk5kwf9W%2BOhtCKbqEzDVeeLQ8D22HzmPmLforkHVbmcq7fsaJk86u7%2FQzBrQ%2FBWgxrnWajSSR5SjqOaGX9GTzDhSqWQ13wlDZHQtcWrno0yecF%2FX2JwuvhvXhsHQ97uhPaGKNmt303zZVzciTBNTEsww6zSz6KzYdOYbt8JHFYcBqBPz1M6hFe3sOQCOTqGdlVVPRYehLfPGDsiregMhRMvWCEKWn6GAGOdJyB4y00baXbmDM8Yjdro6PWqi4H3XuXmk5v9dyR45fK8XxLUSscN4%2FA0Uw8qiHwgY6pgFdICddAoApvMf%2FXh%2B%2BE5wakIndcAGurfUZCxLRT9%2F9DlNrexDC06Z9JgdLAvj%2FU3%2Fe5gVtW5ZS9sSkmA2pbfCiEkfPdT8usEV0FrZIfxycjuKywsE%2BZb9q9E8UxtPA%2BwKzXns%2FgwEtUzKpx0jc5Gp8ufu6c9zDNNa4I7oDZzzGh%2BNhy0cwxThKzWNXKV%2FcfR7n2okWSRxMds%2B2N8kv6L%2FZRPNIsgOz&X-Amz-Signature=d58a447917444f8045fe603997d40441f003eddf6d12fe118ff4ae581bfa30fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY7BWQXL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIExvh3agWQoZ6ahm2ocXcIS2P8r%2FkPQyd4FpRfB670NdAiBgDIilF4kkAf3PARKYQQt0G5vw4G3oHJwIaV5tK3%2FOZyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMdcaTdi%2BPbCOzWZCQKtwDjI%2FXhFBSobKBGu%2FB3Yhn0DicHlvyz42tgSc3muRvEcO7pI9HBjDiTK5s3c2mHqkNTHnw9mG94XGPUfQd9Nb4Zrk%2FtOYRS3EXwhImKBChncMnNSa03UUzYmvT%2Bwj2UycYPcDToYkG2Gld3Re%2BUgDVCquNdvtBLvuaQYQRwPmTVd6uipDSSjZD5ATRSZQKDkbk%2FiLThnlbtkazrEN1irgwhudOrp%2Fk6NvCqwdnvt9HaiX5bZXniFPJKxVUVJ3lQIZej7ZsmgJBbjbQVm732rigCDXF05%2Ff7hvZ0aJM17yevn5u8WXjiiUJXOZ2VMx2RDRQRU9oRCqetzB1dqBTO6%2BM3IUZS2bkd3oBk5kwf9W%2BOhtCKbqEzDVeeLQ8D22HzmPmLforkHVbmcq7fsaJk86u7%2FQzBrQ%2FBWgxrnWajSSR5SjqOaGX9GTzDhSqWQ13wlDZHQtcWrno0yecF%2FX2JwuvhvXhsHQ97uhPaGKNmt303zZVzciTBNTEsww6zSz6KzYdOYbt8JHFYcBqBPz1M6hFe3sOQCOTqGdlVVPRYehLfPGDsiregMhRMvWCEKWn6GAGOdJyB4y00baXbmDM8Yjdro6PWqi4H3XuXmk5v9dyR45fK8XxLUSscN4%2FA0Uw8qiHwgY6pgFdICddAoApvMf%2FXh%2B%2BE5wakIndcAGurfUZCxLRT9%2F9DlNrexDC06Z9JgdLAvj%2FU3%2Fe5gVtW5ZS9sSkmA2pbfCiEkfPdT8usEV0FrZIfxycjuKywsE%2BZb9q9E8UxtPA%2BwKzXns%2FgwEtUzKpx0jc5Gp8ufu6c9zDNNa4I7oDZzzGh%2BNhy0cwxThKzWNXKV%2FcfR7n2okWSRxMds%2B2N8kv6L%2FZRPNIsgOz&X-Amz-Signature=3761ac170fb8c35d02226e1b10adb1d646ab8d1aba74e629389914190169f100&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY7BWQXL%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIExvh3agWQoZ6ahm2ocXcIS2P8r%2FkPQyd4FpRfB670NdAiBgDIilF4kkAf3PARKYQQt0G5vw4G3oHJwIaV5tK3%2FOZyr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMdcaTdi%2BPbCOzWZCQKtwDjI%2FXhFBSobKBGu%2FB3Yhn0DicHlvyz42tgSc3muRvEcO7pI9HBjDiTK5s3c2mHqkNTHnw9mG94XGPUfQd9Nb4Zrk%2FtOYRS3EXwhImKBChncMnNSa03UUzYmvT%2Bwj2UycYPcDToYkG2Gld3Re%2BUgDVCquNdvtBLvuaQYQRwPmTVd6uipDSSjZD5ATRSZQKDkbk%2FiLThnlbtkazrEN1irgwhudOrp%2Fk6NvCqwdnvt9HaiX5bZXniFPJKxVUVJ3lQIZej7ZsmgJBbjbQVm732rigCDXF05%2Ff7hvZ0aJM17yevn5u8WXjiiUJXOZ2VMx2RDRQRU9oRCqetzB1dqBTO6%2BM3IUZS2bkd3oBk5kwf9W%2BOhtCKbqEzDVeeLQ8D22HzmPmLforkHVbmcq7fsaJk86u7%2FQzBrQ%2FBWgxrnWajSSR5SjqOaGX9GTzDhSqWQ13wlDZHQtcWrno0yecF%2FX2JwuvhvXhsHQ97uhPaGKNmt303zZVzciTBNTEsww6zSz6KzYdOYbt8JHFYcBqBPz1M6hFe3sOQCOTqGdlVVPRYehLfPGDsiregMhRMvWCEKWn6GAGOdJyB4y00baXbmDM8Yjdro6PWqi4H3XuXmk5v9dyR45fK8XxLUSscN4%2FA0Uw8qiHwgY6pgFdICddAoApvMf%2FXh%2B%2BE5wakIndcAGurfUZCxLRT9%2F9DlNrexDC06Z9JgdLAvj%2FU3%2Fe5gVtW5ZS9sSkmA2pbfCiEkfPdT8usEV0FrZIfxycjuKywsE%2BZb9q9E8UxtPA%2BwKzXns%2FgwEtUzKpx0jc5Gp8ufu6c9zDNNa4I7oDZzzGh%2BNhy0cwxThKzWNXKV%2FcfR7n2okWSRxMds%2B2N8kv6L%2FZRPNIsgOz&X-Amz-Signature=5c36548840d47a59e3583c4019e4208e57b785158aa440597894c5bf13ab74b9&X-Amz-SignedHeaders=host&x-id=GetObject)
