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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EMLUAR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDxsRpMtUCwoji6cjwVM4iSBciheVtFyyLBbPziH2THBwIgK9vk0dETigrYjt2roxHcmPLgYQ33Tc2jhqQ7u7NFPswqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVBnpXHTpnVqEF11SrcAyueDhgJqoP6YNBSfmjaKhdAiOb98qWjwYrTgNUnfG7GEdWf3t30AIeRMIHswzulYyRL11OAjEZq4D7DFny%2BXEemMcsN2PCR1NtyphsgzsjlkSIhgUhwYE0xaGLCoV6NFluhyaTmb7ABBehTcdNcJX0EcU9QEChLuZJfJYLqj2sApSXFG6tRagkR2Qe0k9vvueZ7sbAo89FIWc1ysReRIKOWpXh%2B7TVngzCaHzIQ8BrWdQdPHnt%2Ba2XzrfkkO0xfqcczRsvRONuaL%2B24UMKW%2Fd2ZrY58LVZYyjJ9cXRAG8mWCS4ynxKL7EkoeeujHjadYlKcDYEmkdUcdsBsMvAg4lSDzokL4OvuEyTa2cq5HOSPQ3%2FSv8AaV11Y2Eip6NpW13ADG001P2V%2F21ojaIlWtteNtsklJFXVzv53I%2BmHK5IVT3chXbmSGBnsyFqLQ4N4YUVJjFtsatDNYG277IuOhzexONNrKhrK0uvf1WHf4Nn0pk%2FQUfECOb%2BPM4BczXCftgIrzdgpOmD8xzjnCShUUPVo83iBKlR0zj5vboy66prPGlUpSVLSN4YA0qRyezFv%2F9z2y2nGAgIS8%2FW3jgtAvkz7JhYk%2FXj1e8IFdwoSbCX4E%2BQM8257c20seyxWMKfegMEGOqUBU9iXqjG8MscZFq%2B%2F4V3MICcdxycOFPov2VLpQCW%2FU2g1rPhF8sTLn%2BQgyGXJCidDkc7gtI35wSnAeaUbVNOlu6yi%2FO7cV1fiCAFaUah2%2BQhm9upkDG2fepHeWCRzNLZgxBBTVgZcYLAXK56Izf1VtczROf7U2PwoHsrVott3ppUK6DP4yF2NjXGGiwpr%2F1SRM4rwzpFWWPmM5b8%2BQMPCr4Lb%2BjgC&X-Amz-Signature=f4beecbc827af16aac78804c947349546997835ab840c91766f07cceb2111878&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EMLUAR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDxsRpMtUCwoji6cjwVM4iSBciheVtFyyLBbPziH2THBwIgK9vk0dETigrYjt2roxHcmPLgYQ33Tc2jhqQ7u7NFPswqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVBnpXHTpnVqEF11SrcAyueDhgJqoP6YNBSfmjaKhdAiOb98qWjwYrTgNUnfG7GEdWf3t30AIeRMIHswzulYyRL11OAjEZq4D7DFny%2BXEemMcsN2PCR1NtyphsgzsjlkSIhgUhwYE0xaGLCoV6NFluhyaTmb7ABBehTcdNcJX0EcU9QEChLuZJfJYLqj2sApSXFG6tRagkR2Qe0k9vvueZ7sbAo89FIWc1ysReRIKOWpXh%2B7TVngzCaHzIQ8BrWdQdPHnt%2Ba2XzrfkkO0xfqcczRsvRONuaL%2B24UMKW%2Fd2ZrY58LVZYyjJ9cXRAG8mWCS4ynxKL7EkoeeujHjadYlKcDYEmkdUcdsBsMvAg4lSDzokL4OvuEyTa2cq5HOSPQ3%2FSv8AaV11Y2Eip6NpW13ADG001P2V%2F21ojaIlWtteNtsklJFXVzv53I%2BmHK5IVT3chXbmSGBnsyFqLQ4N4YUVJjFtsatDNYG277IuOhzexONNrKhrK0uvf1WHf4Nn0pk%2FQUfECOb%2BPM4BczXCftgIrzdgpOmD8xzjnCShUUPVo83iBKlR0zj5vboy66prPGlUpSVLSN4YA0qRyezFv%2F9z2y2nGAgIS8%2FW3jgtAvkz7JhYk%2FXj1e8IFdwoSbCX4E%2BQM8257c20seyxWMKfegMEGOqUBU9iXqjG8MscZFq%2B%2F4V3MICcdxycOFPov2VLpQCW%2FU2g1rPhF8sTLn%2BQgyGXJCidDkc7gtI35wSnAeaUbVNOlu6yi%2FO7cV1fiCAFaUah2%2BQhm9upkDG2fepHeWCRzNLZgxBBTVgZcYLAXK56Izf1VtczROf7U2PwoHsrVott3ppUK6DP4yF2NjXGGiwpr%2F1SRM4rwzpFWWPmM5b8%2BQMPCr4Lb%2BjgC&X-Amz-Signature=3b5bc35bcdd389b0250271700c8e04bd46ac760d6ad26b43404618cdbbce4050&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EMLUAR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDxsRpMtUCwoji6cjwVM4iSBciheVtFyyLBbPziH2THBwIgK9vk0dETigrYjt2roxHcmPLgYQ33Tc2jhqQ7u7NFPswqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVBnpXHTpnVqEF11SrcAyueDhgJqoP6YNBSfmjaKhdAiOb98qWjwYrTgNUnfG7GEdWf3t30AIeRMIHswzulYyRL11OAjEZq4D7DFny%2BXEemMcsN2PCR1NtyphsgzsjlkSIhgUhwYE0xaGLCoV6NFluhyaTmb7ABBehTcdNcJX0EcU9QEChLuZJfJYLqj2sApSXFG6tRagkR2Qe0k9vvueZ7sbAo89FIWc1ysReRIKOWpXh%2B7TVngzCaHzIQ8BrWdQdPHnt%2Ba2XzrfkkO0xfqcczRsvRONuaL%2B24UMKW%2Fd2ZrY58LVZYyjJ9cXRAG8mWCS4ynxKL7EkoeeujHjadYlKcDYEmkdUcdsBsMvAg4lSDzokL4OvuEyTa2cq5HOSPQ3%2FSv8AaV11Y2Eip6NpW13ADG001P2V%2F21ojaIlWtteNtsklJFXVzv53I%2BmHK5IVT3chXbmSGBnsyFqLQ4N4YUVJjFtsatDNYG277IuOhzexONNrKhrK0uvf1WHf4Nn0pk%2FQUfECOb%2BPM4BczXCftgIrzdgpOmD8xzjnCShUUPVo83iBKlR0zj5vboy66prPGlUpSVLSN4YA0qRyezFv%2F9z2y2nGAgIS8%2FW3jgtAvkz7JhYk%2FXj1e8IFdwoSbCX4E%2BQM8257c20seyxWMKfegMEGOqUBU9iXqjG8MscZFq%2B%2F4V3MICcdxycOFPov2VLpQCW%2FU2g1rPhF8sTLn%2BQgyGXJCidDkc7gtI35wSnAeaUbVNOlu6yi%2FO7cV1fiCAFaUah2%2BQhm9upkDG2fepHeWCRzNLZgxBBTVgZcYLAXK56Izf1VtczROf7U2PwoHsrVott3ppUK6DP4yF2NjXGGiwpr%2F1SRM4rwzpFWWPmM5b8%2BQMPCr4Lb%2BjgC&X-Amz-Signature=5617b0b1904926f5ce4d42a21496391a2048d357ea4ba1c5fe262ff74b457242&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EMLUAR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDxsRpMtUCwoji6cjwVM4iSBciheVtFyyLBbPziH2THBwIgK9vk0dETigrYjt2roxHcmPLgYQ33Tc2jhqQ7u7NFPswqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVBnpXHTpnVqEF11SrcAyueDhgJqoP6YNBSfmjaKhdAiOb98qWjwYrTgNUnfG7GEdWf3t30AIeRMIHswzulYyRL11OAjEZq4D7DFny%2BXEemMcsN2PCR1NtyphsgzsjlkSIhgUhwYE0xaGLCoV6NFluhyaTmb7ABBehTcdNcJX0EcU9QEChLuZJfJYLqj2sApSXFG6tRagkR2Qe0k9vvueZ7sbAo89FIWc1ysReRIKOWpXh%2B7TVngzCaHzIQ8BrWdQdPHnt%2Ba2XzrfkkO0xfqcczRsvRONuaL%2B24UMKW%2Fd2ZrY58LVZYyjJ9cXRAG8mWCS4ynxKL7EkoeeujHjadYlKcDYEmkdUcdsBsMvAg4lSDzokL4OvuEyTa2cq5HOSPQ3%2FSv8AaV11Y2Eip6NpW13ADG001P2V%2F21ojaIlWtteNtsklJFXVzv53I%2BmHK5IVT3chXbmSGBnsyFqLQ4N4YUVJjFtsatDNYG277IuOhzexONNrKhrK0uvf1WHf4Nn0pk%2FQUfECOb%2BPM4BczXCftgIrzdgpOmD8xzjnCShUUPVo83iBKlR0zj5vboy66prPGlUpSVLSN4YA0qRyezFv%2F9z2y2nGAgIS8%2FW3jgtAvkz7JhYk%2FXj1e8IFdwoSbCX4E%2BQM8257c20seyxWMKfegMEGOqUBU9iXqjG8MscZFq%2B%2F4V3MICcdxycOFPov2VLpQCW%2FU2g1rPhF8sTLn%2BQgyGXJCidDkc7gtI35wSnAeaUbVNOlu6yi%2FO7cV1fiCAFaUah2%2BQhm9upkDG2fepHeWCRzNLZgxBBTVgZcYLAXK56Izf1VtczROf7U2PwoHsrVott3ppUK6DP4yF2NjXGGiwpr%2F1SRM4rwzpFWWPmM5b8%2BQMPCr4Lb%2BjgC&X-Amz-Signature=4a21d6660db3d7301bf967f630e9584d29f50ee3b6ce0e871c6ad296fc731037&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EMLUAR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDxsRpMtUCwoji6cjwVM4iSBciheVtFyyLBbPziH2THBwIgK9vk0dETigrYjt2roxHcmPLgYQ33Tc2jhqQ7u7NFPswqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVBnpXHTpnVqEF11SrcAyueDhgJqoP6YNBSfmjaKhdAiOb98qWjwYrTgNUnfG7GEdWf3t30AIeRMIHswzulYyRL11OAjEZq4D7DFny%2BXEemMcsN2PCR1NtyphsgzsjlkSIhgUhwYE0xaGLCoV6NFluhyaTmb7ABBehTcdNcJX0EcU9QEChLuZJfJYLqj2sApSXFG6tRagkR2Qe0k9vvueZ7sbAo89FIWc1ysReRIKOWpXh%2B7TVngzCaHzIQ8BrWdQdPHnt%2Ba2XzrfkkO0xfqcczRsvRONuaL%2B24UMKW%2Fd2ZrY58LVZYyjJ9cXRAG8mWCS4ynxKL7EkoeeujHjadYlKcDYEmkdUcdsBsMvAg4lSDzokL4OvuEyTa2cq5HOSPQ3%2FSv8AaV11Y2Eip6NpW13ADG001P2V%2F21ojaIlWtteNtsklJFXVzv53I%2BmHK5IVT3chXbmSGBnsyFqLQ4N4YUVJjFtsatDNYG277IuOhzexONNrKhrK0uvf1WHf4Nn0pk%2FQUfECOb%2BPM4BczXCftgIrzdgpOmD8xzjnCShUUPVo83iBKlR0zj5vboy66prPGlUpSVLSN4YA0qRyezFv%2F9z2y2nGAgIS8%2FW3jgtAvkz7JhYk%2FXj1e8IFdwoSbCX4E%2BQM8257c20seyxWMKfegMEGOqUBU9iXqjG8MscZFq%2B%2F4V3MICcdxycOFPov2VLpQCW%2FU2g1rPhF8sTLn%2BQgyGXJCidDkc7gtI35wSnAeaUbVNOlu6yi%2FO7cV1fiCAFaUah2%2BQhm9upkDG2fepHeWCRzNLZgxBBTVgZcYLAXK56Izf1VtczROf7U2PwoHsrVott3ppUK6DP4yF2NjXGGiwpr%2F1SRM4rwzpFWWPmM5b8%2BQMPCr4Lb%2BjgC&X-Amz-Signature=0d48b06410abe650d0c1e02778534463d43e98a68a99524fedd681ce34dd1fed&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7EMLUAR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDxsRpMtUCwoji6cjwVM4iSBciheVtFyyLBbPziH2THBwIgK9vk0dETigrYjt2roxHcmPLgYQ33Tc2jhqQ7u7NFPswqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVBnpXHTpnVqEF11SrcAyueDhgJqoP6YNBSfmjaKhdAiOb98qWjwYrTgNUnfG7GEdWf3t30AIeRMIHswzulYyRL11OAjEZq4D7DFny%2BXEemMcsN2PCR1NtyphsgzsjlkSIhgUhwYE0xaGLCoV6NFluhyaTmb7ABBehTcdNcJX0EcU9QEChLuZJfJYLqj2sApSXFG6tRagkR2Qe0k9vvueZ7sbAo89FIWc1ysReRIKOWpXh%2B7TVngzCaHzIQ8BrWdQdPHnt%2Ba2XzrfkkO0xfqcczRsvRONuaL%2B24UMKW%2Fd2ZrY58LVZYyjJ9cXRAG8mWCS4ynxKL7EkoeeujHjadYlKcDYEmkdUcdsBsMvAg4lSDzokL4OvuEyTa2cq5HOSPQ3%2FSv8AaV11Y2Eip6NpW13ADG001P2V%2F21ojaIlWtteNtsklJFXVzv53I%2BmHK5IVT3chXbmSGBnsyFqLQ4N4YUVJjFtsatDNYG277IuOhzexONNrKhrK0uvf1WHf4Nn0pk%2FQUfECOb%2BPM4BczXCftgIrzdgpOmD8xzjnCShUUPVo83iBKlR0zj5vboy66prPGlUpSVLSN4YA0qRyezFv%2F9z2y2nGAgIS8%2FW3jgtAvkz7JhYk%2FXj1e8IFdwoSbCX4E%2BQM8257c20seyxWMKfegMEGOqUBU9iXqjG8MscZFq%2B%2F4V3MICcdxycOFPov2VLpQCW%2FU2g1rPhF8sTLn%2BQgyGXJCidDkc7gtI35wSnAeaUbVNOlu6yi%2FO7cV1fiCAFaUah2%2BQhm9upkDG2fepHeWCRzNLZgxBBTVgZcYLAXK56Izf1VtczROf7U2PwoHsrVott3ppUK6DP4yF2NjXGGiwpr%2F1SRM4rwzpFWWPmM5b8%2BQMPCr4Lb%2BjgC&X-Amz-Signature=c76f665f8e4a85e78e177a10e4cdb5b5debaf43e6e1ef28a3228b1798c5c0bbd&X-Amz-SignedHeaders=host&x-id=GetObject)
