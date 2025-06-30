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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REIYPRKB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGF334MxIAFqkji%2FB%2BKVbkGjKvJiZXiupE8%2B%2B1Ufo1gCAiEAv4w4DH2iDi8KY1cWSDC6qIjdxZC1BR%2F4GgtJ6IWe650qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrerPniZtzANFr4%2FSrcA40P5s07O4X%2B4FqlIwerT8%2BSxV16deG58pL2557ItYRU14oez60mauxh4PCrQQN3lgtgaxHx9%2FUeHsVnF0iJ0eIQ3fHnxQ5Ao6aG5sriS7Ur64Num3MaEAPAJ3h%2BAo%2FpepW%2Fs1bON5m5jYZnkTRmmxJ9Oql3QTH4CEVnowmlY4Dpgb6niB1kerNMIw103qMu0kZgyBYEYrK3wWC5EPbt3OE8b9sMTE1ODo1mq58KSBBglnVUpwTswiMBoaScAyFd37%2FagpF7rUi03lLknh0IoyJgT78RiR7jYpoGtZKsHxpI1v0vHi5DawSs7QhjxxLuQUgF5PoQprj6VRyUKSR1Mw2Rlw%2BOiH4Bs1tbux8ppyeBEkBoWbUq5%2Bs4SyCxwxgCZAY1OiP%2FAeE2OWUWIAZerXo7od2dD0SQ2bBIYqClkwuj58Hx1WWSzL%2FP01xNCcWXKX81IqGaJpybhGsEmKmf9wl0%2B5feE0qzsbwSEXZ2uRPRqvZQq1xQcXB7Q12JPkh6WhI5wE75jWZ41E1OwDjPcUP4GXMd1WVj4TaQfWOb3pYPp0Pzn94NbnpM6zIK5XG4MrkRWwyb0SUxBoSMjTBCm012nymtwR%2BwVcK4rw%2FRG5%2F91k993ai4RMEKtLHHMMjoh8MGOqUBRxiWHWPwBRiePa117pDosnbciD0wOwJQ6cMprkuWr1%2BdWkkeTIER1QjVjE4pZanHLb4AI3ZHp7WKu83js%2BH2VBnzI6MJQl6NZRka6tVW7xfKrsABMIzIHqUMQcWIk%2FG0jS7LnpyLJ22dF50V0bNHUfCfXdAyhM14Knm2K53IJHv2gnMsTSruAPzzHlPArTFRBlGgQjRn%2FYzsyrMgngv7M761uWSn&X-Amz-Signature=4b6c8fd523e72739e81b8f0332ff390a16c2506ee279ae5ad4e34d5e9214aa02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REIYPRKB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGF334MxIAFqkji%2FB%2BKVbkGjKvJiZXiupE8%2B%2B1Ufo1gCAiEAv4w4DH2iDi8KY1cWSDC6qIjdxZC1BR%2F4GgtJ6IWe650qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrerPniZtzANFr4%2FSrcA40P5s07O4X%2B4FqlIwerT8%2BSxV16deG58pL2557ItYRU14oez60mauxh4PCrQQN3lgtgaxHx9%2FUeHsVnF0iJ0eIQ3fHnxQ5Ao6aG5sriS7Ur64Num3MaEAPAJ3h%2BAo%2FpepW%2Fs1bON5m5jYZnkTRmmxJ9Oql3QTH4CEVnowmlY4Dpgb6niB1kerNMIw103qMu0kZgyBYEYrK3wWC5EPbt3OE8b9sMTE1ODo1mq58KSBBglnVUpwTswiMBoaScAyFd37%2FagpF7rUi03lLknh0IoyJgT78RiR7jYpoGtZKsHxpI1v0vHi5DawSs7QhjxxLuQUgF5PoQprj6VRyUKSR1Mw2Rlw%2BOiH4Bs1tbux8ppyeBEkBoWbUq5%2Bs4SyCxwxgCZAY1OiP%2FAeE2OWUWIAZerXo7od2dD0SQ2bBIYqClkwuj58Hx1WWSzL%2FP01xNCcWXKX81IqGaJpybhGsEmKmf9wl0%2B5feE0qzsbwSEXZ2uRPRqvZQq1xQcXB7Q12JPkh6WhI5wE75jWZ41E1OwDjPcUP4GXMd1WVj4TaQfWOb3pYPp0Pzn94NbnpM6zIK5XG4MrkRWwyb0SUxBoSMjTBCm012nymtwR%2BwVcK4rw%2FRG5%2F91k993ai4RMEKtLHHMMjoh8MGOqUBRxiWHWPwBRiePa117pDosnbciD0wOwJQ6cMprkuWr1%2BdWkkeTIER1QjVjE4pZanHLb4AI3ZHp7WKu83js%2BH2VBnzI6MJQl6NZRka6tVW7xfKrsABMIzIHqUMQcWIk%2FG0jS7LnpyLJ22dF50V0bNHUfCfXdAyhM14Knm2K53IJHv2gnMsTSruAPzzHlPArTFRBlGgQjRn%2FYzsyrMgngv7M761uWSn&X-Amz-Signature=f59da49357c4c95ff354a40ad0f7ad07b55f289bfc342ad2693d5f89080d5d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REIYPRKB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGF334MxIAFqkji%2FB%2BKVbkGjKvJiZXiupE8%2B%2B1Ufo1gCAiEAv4w4DH2iDi8KY1cWSDC6qIjdxZC1BR%2F4GgtJ6IWe650qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrerPniZtzANFr4%2FSrcA40P5s07O4X%2B4FqlIwerT8%2BSxV16deG58pL2557ItYRU14oez60mauxh4PCrQQN3lgtgaxHx9%2FUeHsVnF0iJ0eIQ3fHnxQ5Ao6aG5sriS7Ur64Num3MaEAPAJ3h%2BAo%2FpepW%2Fs1bON5m5jYZnkTRmmxJ9Oql3QTH4CEVnowmlY4Dpgb6niB1kerNMIw103qMu0kZgyBYEYrK3wWC5EPbt3OE8b9sMTE1ODo1mq58KSBBglnVUpwTswiMBoaScAyFd37%2FagpF7rUi03lLknh0IoyJgT78RiR7jYpoGtZKsHxpI1v0vHi5DawSs7QhjxxLuQUgF5PoQprj6VRyUKSR1Mw2Rlw%2BOiH4Bs1tbux8ppyeBEkBoWbUq5%2Bs4SyCxwxgCZAY1OiP%2FAeE2OWUWIAZerXo7od2dD0SQ2bBIYqClkwuj58Hx1WWSzL%2FP01xNCcWXKX81IqGaJpybhGsEmKmf9wl0%2B5feE0qzsbwSEXZ2uRPRqvZQq1xQcXB7Q12JPkh6WhI5wE75jWZ41E1OwDjPcUP4GXMd1WVj4TaQfWOb3pYPp0Pzn94NbnpM6zIK5XG4MrkRWwyb0SUxBoSMjTBCm012nymtwR%2BwVcK4rw%2FRG5%2F91k993ai4RMEKtLHHMMjoh8MGOqUBRxiWHWPwBRiePa117pDosnbciD0wOwJQ6cMprkuWr1%2BdWkkeTIER1QjVjE4pZanHLb4AI3ZHp7WKu83js%2BH2VBnzI6MJQl6NZRka6tVW7xfKrsABMIzIHqUMQcWIk%2FG0jS7LnpyLJ22dF50V0bNHUfCfXdAyhM14Knm2K53IJHv2gnMsTSruAPzzHlPArTFRBlGgQjRn%2FYzsyrMgngv7M761uWSn&X-Amz-Signature=830762fb641e47e268809a49210f3743df21098d21920372bcf24f4e3f48f1eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REIYPRKB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGF334MxIAFqkji%2FB%2BKVbkGjKvJiZXiupE8%2B%2B1Ufo1gCAiEAv4w4DH2iDi8KY1cWSDC6qIjdxZC1BR%2F4GgtJ6IWe650qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrerPniZtzANFr4%2FSrcA40P5s07O4X%2B4FqlIwerT8%2BSxV16deG58pL2557ItYRU14oez60mauxh4PCrQQN3lgtgaxHx9%2FUeHsVnF0iJ0eIQ3fHnxQ5Ao6aG5sriS7Ur64Num3MaEAPAJ3h%2BAo%2FpepW%2Fs1bON5m5jYZnkTRmmxJ9Oql3QTH4CEVnowmlY4Dpgb6niB1kerNMIw103qMu0kZgyBYEYrK3wWC5EPbt3OE8b9sMTE1ODo1mq58KSBBglnVUpwTswiMBoaScAyFd37%2FagpF7rUi03lLknh0IoyJgT78RiR7jYpoGtZKsHxpI1v0vHi5DawSs7QhjxxLuQUgF5PoQprj6VRyUKSR1Mw2Rlw%2BOiH4Bs1tbux8ppyeBEkBoWbUq5%2Bs4SyCxwxgCZAY1OiP%2FAeE2OWUWIAZerXo7od2dD0SQ2bBIYqClkwuj58Hx1WWSzL%2FP01xNCcWXKX81IqGaJpybhGsEmKmf9wl0%2B5feE0qzsbwSEXZ2uRPRqvZQq1xQcXB7Q12JPkh6WhI5wE75jWZ41E1OwDjPcUP4GXMd1WVj4TaQfWOb3pYPp0Pzn94NbnpM6zIK5XG4MrkRWwyb0SUxBoSMjTBCm012nymtwR%2BwVcK4rw%2FRG5%2F91k993ai4RMEKtLHHMMjoh8MGOqUBRxiWHWPwBRiePa117pDosnbciD0wOwJQ6cMprkuWr1%2BdWkkeTIER1QjVjE4pZanHLb4AI3ZHp7WKu83js%2BH2VBnzI6MJQl6NZRka6tVW7xfKrsABMIzIHqUMQcWIk%2FG0jS7LnpyLJ22dF50V0bNHUfCfXdAyhM14Knm2K53IJHv2gnMsTSruAPzzHlPArTFRBlGgQjRn%2FYzsyrMgngv7M761uWSn&X-Amz-Signature=4470da63aa04a919c6bedeff53248be6e130bc764190a956d0252205e2e3a3d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REIYPRKB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGF334MxIAFqkji%2FB%2BKVbkGjKvJiZXiupE8%2B%2B1Ufo1gCAiEAv4w4DH2iDi8KY1cWSDC6qIjdxZC1BR%2F4GgtJ6IWe650qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrerPniZtzANFr4%2FSrcA40P5s07O4X%2B4FqlIwerT8%2BSxV16deG58pL2557ItYRU14oez60mauxh4PCrQQN3lgtgaxHx9%2FUeHsVnF0iJ0eIQ3fHnxQ5Ao6aG5sriS7Ur64Num3MaEAPAJ3h%2BAo%2FpepW%2Fs1bON5m5jYZnkTRmmxJ9Oql3QTH4CEVnowmlY4Dpgb6niB1kerNMIw103qMu0kZgyBYEYrK3wWC5EPbt3OE8b9sMTE1ODo1mq58KSBBglnVUpwTswiMBoaScAyFd37%2FagpF7rUi03lLknh0IoyJgT78RiR7jYpoGtZKsHxpI1v0vHi5DawSs7QhjxxLuQUgF5PoQprj6VRyUKSR1Mw2Rlw%2BOiH4Bs1tbux8ppyeBEkBoWbUq5%2Bs4SyCxwxgCZAY1OiP%2FAeE2OWUWIAZerXo7od2dD0SQ2bBIYqClkwuj58Hx1WWSzL%2FP01xNCcWXKX81IqGaJpybhGsEmKmf9wl0%2B5feE0qzsbwSEXZ2uRPRqvZQq1xQcXB7Q12JPkh6WhI5wE75jWZ41E1OwDjPcUP4GXMd1WVj4TaQfWOb3pYPp0Pzn94NbnpM6zIK5XG4MrkRWwyb0SUxBoSMjTBCm012nymtwR%2BwVcK4rw%2FRG5%2F91k993ai4RMEKtLHHMMjoh8MGOqUBRxiWHWPwBRiePa117pDosnbciD0wOwJQ6cMprkuWr1%2BdWkkeTIER1QjVjE4pZanHLb4AI3ZHp7WKu83js%2BH2VBnzI6MJQl6NZRka6tVW7xfKrsABMIzIHqUMQcWIk%2FG0jS7LnpyLJ22dF50V0bNHUfCfXdAyhM14Knm2K53IJHv2gnMsTSruAPzzHlPArTFRBlGgQjRn%2FYzsyrMgngv7M761uWSn&X-Amz-Signature=aa389490840577d00cf3c786fbad6b63a079a92c960c9938acd616870472d654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REIYPRKB%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGF334MxIAFqkji%2FB%2BKVbkGjKvJiZXiupE8%2B%2B1Ufo1gCAiEAv4w4DH2iDi8KY1cWSDC6qIjdxZC1BR%2F4GgtJ6IWe650qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrerPniZtzANFr4%2FSrcA40P5s07O4X%2B4FqlIwerT8%2BSxV16deG58pL2557ItYRU14oez60mauxh4PCrQQN3lgtgaxHx9%2FUeHsVnF0iJ0eIQ3fHnxQ5Ao6aG5sriS7Ur64Num3MaEAPAJ3h%2BAo%2FpepW%2Fs1bON5m5jYZnkTRmmxJ9Oql3QTH4CEVnowmlY4Dpgb6niB1kerNMIw103qMu0kZgyBYEYrK3wWC5EPbt3OE8b9sMTE1ODo1mq58KSBBglnVUpwTswiMBoaScAyFd37%2FagpF7rUi03lLknh0IoyJgT78RiR7jYpoGtZKsHxpI1v0vHi5DawSs7QhjxxLuQUgF5PoQprj6VRyUKSR1Mw2Rlw%2BOiH4Bs1tbux8ppyeBEkBoWbUq5%2Bs4SyCxwxgCZAY1OiP%2FAeE2OWUWIAZerXo7od2dD0SQ2bBIYqClkwuj58Hx1WWSzL%2FP01xNCcWXKX81IqGaJpybhGsEmKmf9wl0%2B5feE0qzsbwSEXZ2uRPRqvZQq1xQcXB7Q12JPkh6WhI5wE75jWZ41E1OwDjPcUP4GXMd1WVj4TaQfWOb3pYPp0Pzn94NbnpM6zIK5XG4MrkRWwyb0SUxBoSMjTBCm012nymtwR%2BwVcK4rw%2FRG5%2F91k993ai4RMEKtLHHMMjoh8MGOqUBRxiWHWPwBRiePa117pDosnbciD0wOwJQ6cMprkuWr1%2BdWkkeTIER1QjVjE4pZanHLb4AI3ZHp7WKu83js%2BH2VBnzI6MJQl6NZRka6tVW7xfKrsABMIzIHqUMQcWIk%2FG0jS7LnpyLJ22dF50V0bNHUfCfXdAyhM14Knm2K53IJHv2gnMsTSruAPzzHlPArTFRBlGgQjRn%2FYzsyrMgngv7M761uWSn&X-Amz-Signature=b15b9d6e13386f6d45b992eb295232f3d754cd8f5922f08021f82218c6d75df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
