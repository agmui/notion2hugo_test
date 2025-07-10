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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6IKYTDR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICO81Umd1icTl%2BqKFX6HZjxUAGRt0dfGs44gA1QWCYFlAiBXa3B2aDmtPr%2FoFCdAtuKtKVMf8S8b2QVOpVgy%2B%2BXFAiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW8fNYhKB%2FKn4ZwWgKtwDoLpYAvT31Zk%2FG7za%2B7HWQM7qXaqf9HByh%2F2w1%2Bo0Z77cAD2EI%2F4j95fYpvZiRaT%2FoYIpiE7f0AMG8UGXzKfyqVji8JxvVOITLcwlJeAt4xGK01RQJeex3uvjREP%2B%2BsGtw47dQniCCSd4NeoFEOMHUuzXSyfv9KnP2JZSGHs5Cl1ECdIxFdSoyRfqcy6Q5aCGfDhuSqre1o%2BjLAM5gz%2FLblJO%2FceqkPlIROmsJybJsfTODSoVNZkbFf4UM6%2FRScMSKIuvfXHyGEauWAhgot7mCu5%2BFeNRzjfe7zrOMU4j7R4sZhJ4yljDarUrgVeRnh4vqW7lxED08DKPUNlrit1TwE4Gdn3iXA%2BLODILZ2ipmin6mqdxKoMSCyqB65jh%2BUvSZ8CUexFc2sdm4ZxgjiEB7IuajF%2BqIHNQ4XPw3XzznDKb9%2FKyLlXRnNhyxyzF2lAGw3ZYzfAy%2BctgB1hoQisfIBs9AwfdI03jd3yb8XfNGaku6xqQh%2FoCUIfhavdACxlqJybE6ou5N%2Fkv0xg8YrMXlAVaSd93OjBHbYuPMT9endVbS7dKIwJGazRqYlaj%2BEPs7US%2BOVTeoQyxYH4F1rdJvLiRWH4GzTLHaK%2FXgINjnfRKO9ZCZP6CGTF73%2B0wiqu%2BwwY6pgFYEU2wHlz%2BTrLUbQPw0Htssvv0%2Fwk2YTE2n8oa0XXY6xhskzcmKb1KJDdv62Sqzsgs7D4PaXLFiDTcvBq%2F%2BsPPYnncaPK2Bt4deYSFYwCtaGMyHw%2F6OTHltCDRupRA3iAsVcijH7xnvWj8ZYh9eJkV1O0hRCVhh4c7y7VpNhuhUAHw60KlU0HnBqwaXuzaaf%2BQhowUY%2BhVBfrYDOBr6nZ4C7M14H17&X-Amz-Signature=5fdf67240f7ba87933cd65d4429f2e877b553d9890fdb52f13a638b4d36b1dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6IKYTDR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICO81Umd1icTl%2BqKFX6HZjxUAGRt0dfGs44gA1QWCYFlAiBXa3B2aDmtPr%2FoFCdAtuKtKVMf8S8b2QVOpVgy%2B%2BXFAiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW8fNYhKB%2FKn4ZwWgKtwDoLpYAvT31Zk%2FG7za%2B7HWQM7qXaqf9HByh%2F2w1%2Bo0Z77cAD2EI%2F4j95fYpvZiRaT%2FoYIpiE7f0AMG8UGXzKfyqVji8JxvVOITLcwlJeAt4xGK01RQJeex3uvjREP%2B%2BsGtw47dQniCCSd4NeoFEOMHUuzXSyfv9KnP2JZSGHs5Cl1ECdIxFdSoyRfqcy6Q5aCGfDhuSqre1o%2BjLAM5gz%2FLblJO%2FceqkPlIROmsJybJsfTODSoVNZkbFf4UM6%2FRScMSKIuvfXHyGEauWAhgot7mCu5%2BFeNRzjfe7zrOMU4j7R4sZhJ4yljDarUrgVeRnh4vqW7lxED08DKPUNlrit1TwE4Gdn3iXA%2BLODILZ2ipmin6mqdxKoMSCyqB65jh%2BUvSZ8CUexFc2sdm4ZxgjiEB7IuajF%2BqIHNQ4XPw3XzznDKb9%2FKyLlXRnNhyxyzF2lAGw3ZYzfAy%2BctgB1hoQisfIBs9AwfdI03jd3yb8XfNGaku6xqQh%2FoCUIfhavdACxlqJybE6ou5N%2Fkv0xg8YrMXlAVaSd93OjBHbYuPMT9endVbS7dKIwJGazRqYlaj%2BEPs7US%2BOVTeoQyxYH4F1rdJvLiRWH4GzTLHaK%2FXgINjnfRKO9ZCZP6CGTF73%2B0wiqu%2BwwY6pgFYEU2wHlz%2BTrLUbQPw0Htssvv0%2Fwk2YTE2n8oa0XXY6xhskzcmKb1KJDdv62Sqzsgs7D4PaXLFiDTcvBq%2F%2BsPPYnncaPK2Bt4deYSFYwCtaGMyHw%2F6OTHltCDRupRA3iAsVcijH7xnvWj8ZYh9eJkV1O0hRCVhh4c7y7VpNhuhUAHw60KlU0HnBqwaXuzaaf%2BQhowUY%2BhVBfrYDOBr6nZ4C7M14H17&X-Amz-Signature=0b24eb5d7eb96994408de5db6ffc65923a7b37294b44ac87fb5f0c500d343f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6IKYTDR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICO81Umd1icTl%2BqKFX6HZjxUAGRt0dfGs44gA1QWCYFlAiBXa3B2aDmtPr%2FoFCdAtuKtKVMf8S8b2QVOpVgy%2B%2BXFAiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW8fNYhKB%2FKn4ZwWgKtwDoLpYAvT31Zk%2FG7za%2B7HWQM7qXaqf9HByh%2F2w1%2Bo0Z77cAD2EI%2F4j95fYpvZiRaT%2FoYIpiE7f0AMG8UGXzKfyqVji8JxvVOITLcwlJeAt4xGK01RQJeex3uvjREP%2B%2BsGtw47dQniCCSd4NeoFEOMHUuzXSyfv9KnP2JZSGHs5Cl1ECdIxFdSoyRfqcy6Q5aCGfDhuSqre1o%2BjLAM5gz%2FLblJO%2FceqkPlIROmsJybJsfTODSoVNZkbFf4UM6%2FRScMSKIuvfXHyGEauWAhgot7mCu5%2BFeNRzjfe7zrOMU4j7R4sZhJ4yljDarUrgVeRnh4vqW7lxED08DKPUNlrit1TwE4Gdn3iXA%2BLODILZ2ipmin6mqdxKoMSCyqB65jh%2BUvSZ8CUexFc2sdm4ZxgjiEB7IuajF%2BqIHNQ4XPw3XzznDKb9%2FKyLlXRnNhyxyzF2lAGw3ZYzfAy%2BctgB1hoQisfIBs9AwfdI03jd3yb8XfNGaku6xqQh%2FoCUIfhavdACxlqJybE6ou5N%2Fkv0xg8YrMXlAVaSd93OjBHbYuPMT9endVbS7dKIwJGazRqYlaj%2BEPs7US%2BOVTeoQyxYH4F1rdJvLiRWH4GzTLHaK%2FXgINjnfRKO9ZCZP6CGTF73%2B0wiqu%2BwwY6pgFYEU2wHlz%2BTrLUbQPw0Htssvv0%2Fwk2YTE2n8oa0XXY6xhskzcmKb1KJDdv62Sqzsgs7D4PaXLFiDTcvBq%2F%2BsPPYnncaPK2Bt4deYSFYwCtaGMyHw%2F6OTHltCDRupRA3iAsVcijH7xnvWj8ZYh9eJkV1O0hRCVhh4c7y7VpNhuhUAHw60KlU0HnBqwaXuzaaf%2BQhowUY%2BhVBfrYDOBr6nZ4C7M14H17&X-Amz-Signature=b914b64d5d163c6be07bf4c74555f327a5b4a23c915771236b7ec40adb14103a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6IKYTDR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICO81Umd1icTl%2BqKFX6HZjxUAGRt0dfGs44gA1QWCYFlAiBXa3B2aDmtPr%2FoFCdAtuKtKVMf8S8b2QVOpVgy%2B%2BXFAiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW8fNYhKB%2FKn4ZwWgKtwDoLpYAvT31Zk%2FG7za%2B7HWQM7qXaqf9HByh%2F2w1%2Bo0Z77cAD2EI%2F4j95fYpvZiRaT%2FoYIpiE7f0AMG8UGXzKfyqVji8JxvVOITLcwlJeAt4xGK01RQJeex3uvjREP%2B%2BsGtw47dQniCCSd4NeoFEOMHUuzXSyfv9KnP2JZSGHs5Cl1ECdIxFdSoyRfqcy6Q5aCGfDhuSqre1o%2BjLAM5gz%2FLblJO%2FceqkPlIROmsJybJsfTODSoVNZkbFf4UM6%2FRScMSKIuvfXHyGEauWAhgot7mCu5%2BFeNRzjfe7zrOMU4j7R4sZhJ4yljDarUrgVeRnh4vqW7lxED08DKPUNlrit1TwE4Gdn3iXA%2BLODILZ2ipmin6mqdxKoMSCyqB65jh%2BUvSZ8CUexFc2sdm4ZxgjiEB7IuajF%2BqIHNQ4XPw3XzznDKb9%2FKyLlXRnNhyxyzF2lAGw3ZYzfAy%2BctgB1hoQisfIBs9AwfdI03jd3yb8XfNGaku6xqQh%2FoCUIfhavdACxlqJybE6ou5N%2Fkv0xg8YrMXlAVaSd93OjBHbYuPMT9endVbS7dKIwJGazRqYlaj%2BEPs7US%2BOVTeoQyxYH4F1rdJvLiRWH4GzTLHaK%2FXgINjnfRKO9ZCZP6CGTF73%2B0wiqu%2BwwY6pgFYEU2wHlz%2BTrLUbQPw0Htssvv0%2Fwk2YTE2n8oa0XXY6xhskzcmKb1KJDdv62Sqzsgs7D4PaXLFiDTcvBq%2F%2BsPPYnncaPK2Bt4deYSFYwCtaGMyHw%2F6OTHltCDRupRA3iAsVcijH7xnvWj8ZYh9eJkV1O0hRCVhh4c7y7VpNhuhUAHw60KlU0HnBqwaXuzaaf%2BQhowUY%2BhVBfrYDOBr6nZ4C7M14H17&X-Amz-Signature=26bce6eb17405ec10a4a477b52c03fcacdd43d7eed95a5f4cc60998c03874188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6IKYTDR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICO81Umd1icTl%2BqKFX6HZjxUAGRt0dfGs44gA1QWCYFlAiBXa3B2aDmtPr%2FoFCdAtuKtKVMf8S8b2QVOpVgy%2B%2BXFAiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW8fNYhKB%2FKn4ZwWgKtwDoLpYAvT31Zk%2FG7za%2B7HWQM7qXaqf9HByh%2F2w1%2Bo0Z77cAD2EI%2F4j95fYpvZiRaT%2FoYIpiE7f0AMG8UGXzKfyqVji8JxvVOITLcwlJeAt4xGK01RQJeex3uvjREP%2B%2BsGtw47dQniCCSd4NeoFEOMHUuzXSyfv9KnP2JZSGHs5Cl1ECdIxFdSoyRfqcy6Q5aCGfDhuSqre1o%2BjLAM5gz%2FLblJO%2FceqkPlIROmsJybJsfTODSoVNZkbFf4UM6%2FRScMSKIuvfXHyGEauWAhgot7mCu5%2BFeNRzjfe7zrOMU4j7R4sZhJ4yljDarUrgVeRnh4vqW7lxED08DKPUNlrit1TwE4Gdn3iXA%2BLODILZ2ipmin6mqdxKoMSCyqB65jh%2BUvSZ8CUexFc2sdm4ZxgjiEB7IuajF%2BqIHNQ4XPw3XzznDKb9%2FKyLlXRnNhyxyzF2lAGw3ZYzfAy%2BctgB1hoQisfIBs9AwfdI03jd3yb8XfNGaku6xqQh%2FoCUIfhavdACxlqJybE6ou5N%2Fkv0xg8YrMXlAVaSd93OjBHbYuPMT9endVbS7dKIwJGazRqYlaj%2BEPs7US%2BOVTeoQyxYH4F1rdJvLiRWH4GzTLHaK%2FXgINjnfRKO9ZCZP6CGTF73%2B0wiqu%2BwwY6pgFYEU2wHlz%2BTrLUbQPw0Htssvv0%2Fwk2YTE2n8oa0XXY6xhskzcmKb1KJDdv62Sqzsgs7D4PaXLFiDTcvBq%2F%2BsPPYnncaPK2Bt4deYSFYwCtaGMyHw%2F6OTHltCDRupRA3iAsVcijH7xnvWj8ZYh9eJkV1O0hRCVhh4c7y7VpNhuhUAHw60KlU0HnBqwaXuzaaf%2BQhowUY%2BhVBfrYDOBr6nZ4C7M14H17&X-Amz-Signature=d4d0804e4d103ab4eda6e1450ad3bc5b7137d1574c8a2d54c09c5d06a5173390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6IKYTDR%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICO81Umd1icTl%2BqKFX6HZjxUAGRt0dfGs44gA1QWCYFlAiBXa3B2aDmtPr%2FoFCdAtuKtKVMf8S8b2QVOpVgy%2B%2BXFAiqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW8fNYhKB%2FKn4ZwWgKtwDoLpYAvT31Zk%2FG7za%2B7HWQM7qXaqf9HByh%2F2w1%2Bo0Z77cAD2EI%2F4j95fYpvZiRaT%2FoYIpiE7f0AMG8UGXzKfyqVji8JxvVOITLcwlJeAt4xGK01RQJeex3uvjREP%2B%2BsGtw47dQniCCSd4NeoFEOMHUuzXSyfv9KnP2JZSGHs5Cl1ECdIxFdSoyRfqcy6Q5aCGfDhuSqre1o%2BjLAM5gz%2FLblJO%2FceqkPlIROmsJybJsfTODSoVNZkbFf4UM6%2FRScMSKIuvfXHyGEauWAhgot7mCu5%2BFeNRzjfe7zrOMU4j7R4sZhJ4yljDarUrgVeRnh4vqW7lxED08DKPUNlrit1TwE4Gdn3iXA%2BLODILZ2ipmin6mqdxKoMSCyqB65jh%2BUvSZ8CUexFc2sdm4ZxgjiEB7IuajF%2BqIHNQ4XPw3XzznDKb9%2FKyLlXRnNhyxyzF2lAGw3ZYzfAy%2BctgB1hoQisfIBs9AwfdI03jd3yb8XfNGaku6xqQh%2FoCUIfhavdACxlqJybE6ou5N%2Fkv0xg8YrMXlAVaSd93OjBHbYuPMT9endVbS7dKIwJGazRqYlaj%2BEPs7US%2BOVTeoQyxYH4F1rdJvLiRWH4GzTLHaK%2FXgINjnfRKO9ZCZP6CGTF73%2B0wiqu%2BwwY6pgFYEU2wHlz%2BTrLUbQPw0Htssvv0%2Fwk2YTE2n8oa0XXY6xhskzcmKb1KJDdv62Sqzsgs7D4PaXLFiDTcvBq%2F%2BsPPYnncaPK2Bt4deYSFYwCtaGMyHw%2F6OTHltCDRupRA3iAsVcijH7xnvWj8ZYh9eJkV1O0hRCVhh4c7y7VpNhuhUAHw60KlU0HnBqwaXuzaaf%2BQhowUY%2BhVBfrYDOBr6nZ4C7M14H17&X-Amz-Signature=c0eaf454391092032783a5139c30c4656002a800bd32c8c60fa1c79655552b21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
