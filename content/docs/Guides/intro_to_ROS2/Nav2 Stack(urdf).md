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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TPVTRDL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIAYi6dpYKfRu5l9gRpaLBYg2v9KCiuEAIxbHS0S7yYKtAiEA71tglGDk3%2Fp%2FokJ1i3oFHU2jiC09OTHaD4SiZP7za3EqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgkrgWJ%2FD9QB9BO1CrcA6g211o4DFq1bG2h22cGFSETOk6nxG%2FjK%2BBw%2BPJ4fGexnQ%2FiJno7tStBLImjilSe0UgP%2BKqXx4gr2ZcH61r5f137eN%2FTBOIlesoR1jNM9eYzEAvKiNuWnTzP7maHqLBfdLvhovBIYDuogx211EYVacnAPmrsKDvNmHitKqUl4blkDWiempXxzNeZy5XqkdVJkYjkWHHZi8z6LcVKW%2F2988YuT5hUTq8ToSaofr8Zw3VccKZG629W3Bpv%2F%2BIO2QtGp6VCjpPkn%2Ffb4W3z2neCT4Ug06RF9N4Yt9BSmBy6GRGIN2W%2BkfdAkFY1YwnhnU2OaijZJmA3YTyXC32UJrG28OYivxxhbw3XfHnI65xU6Pz53aD7AeYHnazkZZQj9Ar5266vvXOoFoDpW0wsEh2VW6jGZjkHv6PnxA1YH4CW0IXHBWSQpP97OcGxBGmPt2WwqK2kz4EGS5FQyJjAOPSPvicPuuFqdaIxPDsz2DaIFu3JblMWkE5jQhHM%2BNPGelAo9FhCIFLDY4lHi8XLGbnqUC2ik0JNF29a%2BvWhTKJMGHjp3jgJjIbMWd7%2BL0zMMjTWaC%2B1Bpzr%2Fr4Dvy1sei7NlW2aS6t7DB5RRkbpyWWOIJUp3Uy0lZdrxhvX3kdXMOGOv74GOqUBpPIU6LFfhS6eANi26CI6Ewol2hWX0HcalhQPWiQ70KX9cI2j9%2BzmSfwZiqA503nkOc7ZMVQUR73AIwRmdg8dZHKPWOr79wuU20b6D%2Bg3XBjoCjcaIrQNJH69tdYm8c6SjY%2FxRNETp3kr51CMjaj5xvJnE9YfB3AS8FAJsx6dkQFGUqgIwLBGhLAAPGhcxVn8gYODW%2BfGAEvguWsk4VeED8g1LeOc&X-Amz-Signature=4824fa31769124a00b6ef56461984d525f61425f1b82b8cf3ca922b18b10a3ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TPVTRDL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIAYi6dpYKfRu5l9gRpaLBYg2v9KCiuEAIxbHS0S7yYKtAiEA71tglGDk3%2Fp%2FokJ1i3oFHU2jiC09OTHaD4SiZP7za3EqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgkrgWJ%2FD9QB9BO1CrcA6g211o4DFq1bG2h22cGFSETOk6nxG%2FjK%2BBw%2BPJ4fGexnQ%2FiJno7tStBLImjilSe0UgP%2BKqXx4gr2ZcH61r5f137eN%2FTBOIlesoR1jNM9eYzEAvKiNuWnTzP7maHqLBfdLvhovBIYDuogx211EYVacnAPmrsKDvNmHitKqUl4blkDWiempXxzNeZy5XqkdVJkYjkWHHZi8z6LcVKW%2F2988YuT5hUTq8ToSaofr8Zw3VccKZG629W3Bpv%2F%2BIO2QtGp6VCjpPkn%2Ffb4W3z2neCT4Ug06RF9N4Yt9BSmBy6GRGIN2W%2BkfdAkFY1YwnhnU2OaijZJmA3YTyXC32UJrG28OYivxxhbw3XfHnI65xU6Pz53aD7AeYHnazkZZQj9Ar5266vvXOoFoDpW0wsEh2VW6jGZjkHv6PnxA1YH4CW0IXHBWSQpP97OcGxBGmPt2WwqK2kz4EGS5FQyJjAOPSPvicPuuFqdaIxPDsz2DaIFu3JblMWkE5jQhHM%2BNPGelAo9FhCIFLDY4lHi8XLGbnqUC2ik0JNF29a%2BvWhTKJMGHjp3jgJjIbMWd7%2BL0zMMjTWaC%2B1Bpzr%2Fr4Dvy1sei7NlW2aS6t7DB5RRkbpyWWOIJUp3Uy0lZdrxhvX3kdXMOGOv74GOqUBpPIU6LFfhS6eANi26CI6Ewol2hWX0HcalhQPWiQ70KX9cI2j9%2BzmSfwZiqA503nkOc7ZMVQUR73AIwRmdg8dZHKPWOr79wuU20b6D%2Bg3XBjoCjcaIrQNJH69tdYm8c6SjY%2FxRNETp3kr51CMjaj5xvJnE9YfB3AS8FAJsx6dkQFGUqgIwLBGhLAAPGhcxVn8gYODW%2BfGAEvguWsk4VeED8g1LeOc&X-Amz-Signature=8c242a670cc1ef7cca652eafb38f62b30af00b6ff2c0c97563e88004d276747d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TPVTRDL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIAYi6dpYKfRu5l9gRpaLBYg2v9KCiuEAIxbHS0S7yYKtAiEA71tglGDk3%2Fp%2FokJ1i3oFHU2jiC09OTHaD4SiZP7za3EqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgkrgWJ%2FD9QB9BO1CrcA6g211o4DFq1bG2h22cGFSETOk6nxG%2FjK%2BBw%2BPJ4fGexnQ%2FiJno7tStBLImjilSe0UgP%2BKqXx4gr2ZcH61r5f137eN%2FTBOIlesoR1jNM9eYzEAvKiNuWnTzP7maHqLBfdLvhovBIYDuogx211EYVacnAPmrsKDvNmHitKqUl4blkDWiempXxzNeZy5XqkdVJkYjkWHHZi8z6LcVKW%2F2988YuT5hUTq8ToSaofr8Zw3VccKZG629W3Bpv%2F%2BIO2QtGp6VCjpPkn%2Ffb4W3z2neCT4Ug06RF9N4Yt9BSmBy6GRGIN2W%2BkfdAkFY1YwnhnU2OaijZJmA3YTyXC32UJrG28OYivxxhbw3XfHnI65xU6Pz53aD7AeYHnazkZZQj9Ar5266vvXOoFoDpW0wsEh2VW6jGZjkHv6PnxA1YH4CW0IXHBWSQpP97OcGxBGmPt2WwqK2kz4EGS5FQyJjAOPSPvicPuuFqdaIxPDsz2DaIFu3JblMWkE5jQhHM%2BNPGelAo9FhCIFLDY4lHi8XLGbnqUC2ik0JNF29a%2BvWhTKJMGHjp3jgJjIbMWd7%2BL0zMMjTWaC%2B1Bpzr%2Fr4Dvy1sei7NlW2aS6t7DB5RRkbpyWWOIJUp3Uy0lZdrxhvX3kdXMOGOv74GOqUBpPIU6LFfhS6eANi26CI6Ewol2hWX0HcalhQPWiQ70KX9cI2j9%2BzmSfwZiqA503nkOc7ZMVQUR73AIwRmdg8dZHKPWOr79wuU20b6D%2Bg3XBjoCjcaIrQNJH69tdYm8c6SjY%2FxRNETp3kr51CMjaj5xvJnE9YfB3AS8FAJsx6dkQFGUqgIwLBGhLAAPGhcxVn8gYODW%2BfGAEvguWsk4VeED8g1LeOc&X-Amz-Signature=a00c1fead32d7c814fe3eccbc1339cb0712d45ea594e97b72eaaa1c2a672e55d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TPVTRDL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIAYi6dpYKfRu5l9gRpaLBYg2v9KCiuEAIxbHS0S7yYKtAiEA71tglGDk3%2Fp%2FokJ1i3oFHU2jiC09OTHaD4SiZP7za3EqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgkrgWJ%2FD9QB9BO1CrcA6g211o4DFq1bG2h22cGFSETOk6nxG%2FjK%2BBw%2BPJ4fGexnQ%2FiJno7tStBLImjilSe0UgP%2BKqXx4gr2ZcH61r5f137eN%2FTBOIlesoR1jNM9eYzEAvKiNuWnTzP7maHqLBfdLvhovBIYDuogx211EYVacnAPmrsKDvNmHitKqUl4blkDWiempXxzNeZy5XqkdVJkYjkWHHZi8z6LcVKW%2F2988YuT5hUTq8ToSaofr8Zw3VccKZG629W3Bpv%2F%2BIO2QtGp6VCjpPkn%2Ffb4W3z2neCT4Ug06RF9N4Yt9BSmBy6GRGIN2W%2BkfdAkFY1YwnhnU2OaijZJmA3YTyXC32UJrG28OYivxxhbw3XfHnI65xU6Pz53aD7AeYHnazkZZQj9Ar5266vvXOoFoDpW0wsEh2VW6jGZjkHv6PnxA1YH4CW0IXHBWSQpP97OcGxBGmPt2WwqK2kz4EGS5FQyJjAOPSPvicPuuFqdaIxPDsz2DaIFu3JblMWkE5jQhHM%2BNPGelAo9FhCIFLDY4lHi8XLGbnqUC2ik0JNF29a%2BvWhTKJMGHjp3jgJjIbMWd7%2BL0zMMjTWaC%2B1Bpzr%2Fr4Dvy1sei7NlW2aS6t7DB5RRkbpyWWOIJUp3Uy0lZdrxhvX3kdXMOGOv74GOqUBpPIU6LFfhS6eANi26CI6Ewol2hWX0HcalhQPWiQ70KX9cI2j9%2BzmSfwZiqA503nkOc7ZMVQUR73AIwRmdg8dZHKPWOr79wuU20b6D%2Bg3XBjoCjcaIrQNJH69tdYm8c6SjY%2FxRNETp3kr51CMjaj5xvJnE9YfB3AS8FAJsx6dkQFGUqgIwLBGhLAAPGhcxVn8gYODW%2BfGAEvguWsk4VeED8g1LeOc&X-Amz-Signature=f628518f392fe37abee0047c4d364f7883b61db2182398384d0383a1312d73fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TPVTRDL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIAYi6dpYKfRu5l9gRpaLBYg2v9KCiuEAIxbHS0S7yYKtAiEA71tglGDk3%2Fp%2FokJ1i3oFHU2jiC09OTHaD4SiZP7za3EqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgkrgWJ%2FD9QB9BO1CrcA6g211o4DFq1bG2h22cGFSETOk6nxG%2FjK%2BBw%2BPJ4fGexnQ%2FiJno7tStBLImjilSe0UgP%2BKqXx4gr2ZcH61r5f137eN%2FTBOIlesoR1jNM9eYzEAvKiNuWnTzP7maHqLBfdLvhovBIYDuogx211EYVacnAPmrsKDvNmHitKqUl4blkDWiempXxzNeZy5XqkdVJkYjkWHHZi8z6LcVKW%2F2988YuT5hUTq8ToSaofr8Zw3VccKZG629W3Bpv%2F%2BIO2QtGp6VCjpPkn%2Ffb4W3z2neCT4Ug06RF9N4Yt9BSmBy6GRGIN2W%2BkfdAkFY1YwnhnU2OaijZJmA3YTyXC32UJrG28OYivxxhbw3XfHnI65xU6Pz53aD7AeYHnazkZZQj9Ar5266vvXOoFoDpW0wsEh2VW6jGZjkHv6PnxA1YH4CW0IXHBWSQpP97OcGxBGmPt2WwqK2kz4EGS5FQyJjAOPSPvicPuuFqdaIxPDsz2DaIFu3JblMWkE5jQhHM%2BNPGelAo9FhCIFLDY4lHi8XLGbnqUC2ik0JNF29a%2BvWhTKJMGHjp3jgJjIbMWd7%2BL0zMMjTWaC%2B1Bpzr%2Fr4Dvy1sei7NlW2aS6t7DB5RRkbpyWWOIJUp3Uy0lZdrxhvX3kdXMOGOv74GOqUBpPIU6LFfhS6eANi26CI6Ewol2hWX0HcalhQPWiQ70KX9cI2j9%2BzmSfwZiqA503nkOc7ZMVQUR73AIwRmdg8dZHKPWOr79wuU20b6D%2Bg3XBjoCjcaIrQNJH69tdYm8c6SjY%2FxRNETp3kr51CMjaj5xvJnE9YfB3AS8FAJsx6dkQFGUqgIwLBGhLAAPGhcxVn8gYODW%2BfGAEvguWsk4VeED8g1LeOc&X-Amz-Signature=c69a265d7f203050adb8d2a2dc37fe927010c570a73927f5ff3c5bc7f60d2f6e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TPVTRDL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T061214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIAYi6dpYKfRu5l9gRpaLBYg2v9KCiuEAIxbHS0S7yYKtAiEA71tglGDk3%2Fp%2FokJ1i3oFHU2jiC09OTHaD4SiZP7za3EqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKgkrgWJ%2FD9QB9BO1CrcA6g211o4DFq1bG2h22cGFSETOk6nxG%2FjK%2BBw%2BPJ4fGexnQ%2FiJno7tStBLImjilSe0UgP%2BKqXx4gr2ZcH61r5f137eN%2FTBOIlesoR1jNM9eYzEAvKiNuWnTzP7maHqLBfdLvhovBIYDuogx211EYVacnAPmrsKDvNmHitKqUl4blkDWiempXxzNeZy5XqkdVJkYjkWHHZi8z6LcVKW%2F2988YuT5hUTq8ToSaofr8Zw3VccKZG629W3Bpv%2F%2BIO2QtGp6VCjpPkn%2Ffb4W3z2neCT4Ug06RF9N4Yt9BSmBy6GRGIN2W%2BkfdAkFY1YwnhnU2OaijZJmA3YTyXC32UJrG28OYivxxhbw3XfHnI65xU6Pz53aD7AeYHnazkZZQj9Ar5266vvXOoFoDpW0wsEh2VW6jGZjkHv6PnxA1YH4CW0IXHBWSQpP97OcGxBGmPt2WwqK2kz4EGS5FQyJjAOPSPvicPuuFqdaIxPDsz2DaIFu3JblMWkE5jQhHM%2BNPGelAo9FhCIFLDY4lHi8XLGbnqUC2ik0JNF29a%2BvWhTKJMGHjp3jgJjIbMWd7%2BL0zMMjTWaC%2B1Bpzr%2Fr4Dvy1sei7NlW2aS6t7DB5RRkbpyWWOIJUp3Uy0lZdrxhvX3kdXMOGOv74GOqUBpPIU6LFfhS6eANi26CI6Ewol2hWX0HcalhQPWiQ70KX9cI2j9%2BzmSfwZiqA503nkOc7ZMVQUR73AIwRmdg8dZHKPWOr79wuU20b6D%2Bg3XBjoCjcaIrQNJH69tdYm8c6SjY%2FxRNETp3kr51CMjaj5xvJnE9YfB3AS8FAJsx6dkQFGUqgIwLBGhLAAPGhcxVn8gYODW%2BfGAEvguWsk4VeED8g1LeOc&X-Amz-Signature=0f59d77f4e0f4564509b2ffc75bd9d21245ccc480bf7e3fdcf51d0cc67eb942a&X-Amz-SignedHeaders=host&x-id=GetObject)
