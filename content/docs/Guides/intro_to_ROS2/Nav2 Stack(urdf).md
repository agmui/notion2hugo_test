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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755QPFY3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGazzdeJxRtskDtCosEbq11HkvzbGfyH9K6jfsy7tLHDAiEAhg2yjglWEck6guSo2j6EBzVBfXAG%2FTm8z9OpNnr4Y%2Fkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMu%2FNyFodaLwV%2FR1iCrcA7rOSJtU5xdgI%2Fp9dnJpqDgB67Dk%2BG9ofSnmy9HQXS36tXg0pUvi7P%2FGbiAOAglbKbtrUfz%2BT16TEfK6jkBfI4OsKp6uch3ojsQuWf3h9f4llBfbO1vx82Gq%2BJnb3xH1clt7lLFQ%2FMLRXINAZAVIruY8BdURhrMuIUIYX691%2BXTVWAXfh0SLP9c%2BQzVuO9yKU5Ntz0fBASt%2BCurFZZZrLMjpiTt9NS3W7BZ0dFxLJlR1FjkvEqi5CgOJnWCYAFDe%2FJ9C92u6xgHMptRjAkBVkcIzWlbUDjzXMglEMybttTSvakVruVG065bYhbsVEAZn2%2BhQ6TSITyKHUD0DNklquoh0NTXu112OGyBKDR%2Bc3bLkt8duppY%2FM%2BoWRdLNKHFBjo5GOfa4KPE42%2FZrDq6vL5EMl%2B7nPxDNcjSQUK5VMHbwgHBQUejBpXfZP%2BrBeyO1smvpJcIiW0Z555HYf1GPbzUoIT%2FMxAgL%2ByujtmU86VqCZTcYCu6tAIuKOkTjMmxvkcSdgu8OuemCCpMdlUTcR9mNho9n5kBpZeNHs1gLQf%2Bv69m2eEuPxr4KUlW3uKBVZf9HLin3D1JK%2F1RpXJSWc%2FXir1yYLmnAxNCKBRleKnzMyW0viWZyug3a5SmSMKaS0sEGOqUBaL8q6j1hs6vRxbqiR4I09tQJ1I7BeJmNkdim0VwQ4kGm1Ltk9eZMACys%2F%2Bmb5pmlhQMRf10UiOpx1rPIpAXbzfoF2m4iubFEM0SCb%2BWSTPOs58yoPHwkJXg5NI%2BqWvfPgf47jA0FpFmjiM1ZqZmn3MIJMgLfgvDGjcrqPSl%2BmTjUyPfKoXzrhn7Vktkca6BCOmEgapvaQEhTaeoQIlKqie7MfyTP&X-Amz-Signature=da40a640804c7926451cea3c90c7dffab73a95ee618054adb55bbc640a865ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755QPFY3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGazzdeJxRtskDtCosEbq11HkvzbGfyH9K6jfsy7tLHDAiEAhg2yjglWEck6guSo2j6EBzVBfXAG%2FTm8z9OpNnr4Y%2Fkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMu%2FNyFodaLwV%2FR1iCrcA7rOSJtU5xdgI%2Fp9dnJpqDgB67Dk%2BG9ofSnmy9HQXS36tXg0pUvi7P%2FGbiAOAglbKbtrUfz%2BT16TEfK6jkBfI4OsKp6uch3ojsQuWf3h9f4llBfbO1vx82Gq%2BJnb3xH1clt7lLFQ%2FMLRXINAZAVIruY8BdURhrMuIUIYX691%2BXTVWAXfh0SLP9c%2BQzVuO9yKU5Ntz0fBASt%2BCurFZZZrLMjpiTt9NS3W7BZ0dFxLJlR1FjkvEqi5CgOJnWCYAFDe%2FJ9C92u6xgHMptRjAkBVkcIzWlbUDjzXMglEMybttTSvakVruVG065bYhbsVEAZn2%2BhQ6TSITyKHUD0DNklquoh0NTXu112OGyBKDR%2Bc3bLkt8duppY%2FM%2BoWRdLNKHFBjo5GOfa4KPE42%2FZrDq6vL5EMl%2B7nPxDNcjSQUK5VMHbwgHBQUejBpXfZP%2BrBeyO1smvpJcIiW0Z555HYf1GPbzUoIT%2FMxAgL%2ByujtmU86VqCZTcYCu6tAIuKOkTjMmxvkcSdgu8OuemCCpMdlUTcR9mNho9n5kBpZeNHs1gLQf%2Bv69m2eEuPxr4KUlW3uKBVZf9HLin3D1JK%2F1RpXJSWc%2FXir1yYLmnAxNCKBRleKnzMyW0viWZyug3a5SmSMKaS0sEGOqUBaL8q6j1hs6vRxbqiR4I09tQJ1I7BeJmNkdim0VwQ4kGm1Ltk9eZMACys%2F%2Bmb5pmlhQMRf10UiOpx1rPIpAXbzfoF2m4iubFEM0SCb%2BWSTPOs58yoPHwkJXg5NI%2BqWvfPgf47jA0FpFmjiM1ZqZmn3MIJMgLfgvDGjcrqPSl%2BmTjUyPfKoXzrhn7Vktkca6BCOmEgapvaQEhTaeoQIlKqie7MfyTP&X-Amz-Signature=5f1a0f56d166ddec8f0d104413ce6ff340d2c042f9dd40317e18c6490e7b84a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755QPFY3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGazzdeJxRtskDtCosEbq11HkvzbGfyH9K6jfsy7tLHDAiEAhg2yjglWEck6guSo2j6EBzVBfXAG%2FTm8z9OpNnr4Y%2Fkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMu%2FNyFodaLwV%2FR1iCrcA7rOSJtU5xdgI%2Fp9dnJpqDgB67Dk%2BG9ofSnmy9HQXS36tXg0pUvi7P%2FGbiAOAglbKbtrUfz%2BT16TEfK6jkBfI4OsKp6uch3ojsQuWf3h9f4llBfbO1vx82Gq%2BJnb3xH1clt7lLFQ%2FMLRXINAZAVIruY8BdURhrMuIUIYX691%2BXTVWAXfh0SLP9c%2BQzVuO9yKU5Ntz0fBASt%2BCurFZZZrLMjpiTt9NS3W7BZ0dFxLJlR1FjkvEqi5CgOJnWCYAFDe%2FJ9C92u6xgHMptRjAkBVkcIzWlbUDjzXMglEMybttTSvakVruVG065bYhbsVEAZn2%2BhQ6TSITyKHUD0DNklquoh0NTXu112OGyBKDR%2Bc3bLkt8duppY%2FM%2BoWRdLNKHFBjo5GOfa4KPE42%2FZrDq6vL5EMl%2B7nPxDNcjSQUK5VMHbwgHBQUejBpXfZP%2BrBeyO1smvpJcIiW0Z555HYf1GPbzUoIT%2FMxAgL%2ByujtmU86VqCZTcYCu6tAIuKOkTjMmxvkcSdgu8OuemCCpMdlUTcR9mNho9n5kBpZeNHs1gLQf%2Bv69m2eEuPxr4KUlW3uKBVZf9HLin3D1JK%2F1RpXJSWc%2FXir1yYLmnAxNCKBRleKnzMyW0viWZyug3a5SmSMKaS0sEGOqUBaL8q6j1hs6vRxbqiR4I09tQJ1I7BeJmNkdim0VwQ4kGm1Ltk9eZMACys%2F%2Bmb5pmlhQMRf10UiOpx1rPIpAXbzfoF2m4iubFEM0SCb%2BWSTPOs58yoPHwkJXg5NI%2BqWvfPgf47jA0FpFmjiM1ZqZmn3MIJMgLfgvDGjcrqPSl%2BmTjUyPfKoXzrhn7Vktkca6BCOmEgapvaQEhTaeoQIlKqie7MfyTP&X-Amz-Signature=b659fc56716fa838ca3a99a836c06cc36379531611b0a9850426f2ca8126fd08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755QPFY3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGazzdeJxRtskDtCosEbq11HkvzbGfyH9K6jfsy7tLHDAiEAhg2yjglWEck6guSo2j6EBzVBfXAG%2FTm8z9OpNnr4Y%2Fkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMu%2FNyFodaLwV%2FR1iCrcA7rOSJtU5xdgI%2Fp9dnJpqDgB67Dk%2BG9ofSnmy9HQXS36tXg0pUvi7P%2FGbiAOAglbKbtrUfz%2BT16TEfK6jkBfI4OsKp6uch3ojsQuWf3h9f4llBfbO1vx82Gq%2BJnb3xH1clt7lLFQ%2FMLRXINAZAVIruY8BdURhrMuIUIYX691%2BXTVWAXfh0SLP9c%2BQzVuO9yKU5Ntz0fBASt%2BCurFZZZrLMjpiTt9NS3W7BZ0dFxLJlR1FjkvEqi5CgOJnWCYAFDe%2FJ9C92u6xgHMptRjAkBVkcIzWlbUDjzXMglEMybttTSvakVruVG065bYhbsVEAZn2%2BhQ6TSITyKHUD0DNklquoh0NTXu112OGyBKDR%2Bc3bLkt8duppY%2FM%2BoWRdLNKHFBjo5GOfa4KPE42%2FZrDq6vL5EMl%2B7nPxDNcjSQUK5VMHbwgHBQUejBpXfZP%2BrBeyO1smvpJcIiW0Z555HYf1GPbzUoIT%2FMxAgL%2ByujtmU86VqCZTcYCu6tAIuKOkTjMmxvkcSdgu8OuemCCpMdlUTcR9mNho9n5kBpZeNHs1gLQf%2Bv69m2eEuPxr4KUlW3uKBVZf9HLin3D1JK%2F1RpXJSWc%2FXir1yYLmnAxNCKBRleKnzMyW0viWZyug3a5SmSMKaS0sEGOqUBaL8q6j1hs6vRxbqiR4I09tQJ1I7BeJmNkdim0VwQ4kGm1Ltk9eZMACys%2F%2Bmb5pmlhQMRf10UiOpx1rPIpAXbzfoF2m4iubFEM0SCb%2BWSTPOs58yoPHwkJXg5NI%2BqWvfPgf47jA0FpFmjiM1ZqZmn3MIJMgLfgvDGjcrqPSl%2BmTjUyPfKoXzrhn7Vktkca6BCOmEgapvaQEhTaeoQIlKqie7MfyTP&X-Amz-Signature=00be64b3c5ec41e86d43580c0e3a50f7b5fa4980169eb3af487938ef8c496403&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755QPFY3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGazzdeJxRtskDtCosEbq11HkvzbGfyH9K6jfsy7tLHDAiEAhg2yjglWEck6guSo2j6EBzVBfXAG%2FTm8z9OpNnr4Y%2Fkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMu%2FNyFodaLwV%2FR1iCrcA7rOSJtU5xdgI%2Fp9dnJpqDgB67Dk%2BG9ofSnmy9HQXS36tXg0pUvi7P%2FGbiAOAglbKbtrUfz%2BT16TEfK6jkBfI4OsKp6uch3ojsQuWf3h9f4llBfbO1vx82Gq%2BJnb3xH1clt7lLFQ%2FMLRXINAZAVIruY8BdURhrMuIUIYX691%2BXTVWAXfh0SLP9c%2BQzVuO9yKU5Ntz0fBASt%2BCurFZZZrLMjpiTt9NS3W7BZ0dFxLJlR1FjkvEqi5CgOJnWCYAFDe%2FJ9C92u6xgHMptRjAkBVkcIzWlbUDjzXMglEMybttTSvakVruVG065bYhbsVEAZn2%2BhQ6TSITyKHUD0DNklquoh0NTXu112OGyBKDR%2Bc3bLkt8duppY%2FM%2BoWRdLNKHFBjo5GOfa4KPE42%2FZrDq6vL5EMl%2B7nPxDNcjSQUK5VMHbwgHBQUejBpXfZP%2BrBeyO1smvpJcIiW0Z555HYf1GPbzUoIT%2FMxAgL%2ByujtmU86VqCZTcYCu6tAIuKOkTjMmxvkcSdgu8OuemCCpMdlUTcR9mNho9n5kBpZeNHs1gLQf%2Bv69m2eEuPxr4KUlW3uKBVZf9HLin3D1JK%2F1RpXJSWc%2FXir1yYLmnAxNCKBRleKnzMyW0viWZyug3a5SmSMKaS0sEGOqUBaL8q6j1hs6vRxbqiR4I09tQJ1I7BeJmNkdim0VwQ4kGm1Ltk9eZMACys%2F%2Bmb5pmlhQMRf10UiOpx1rPIpAXbzfoF2m4iubFEM0SCb%2BWSTPOs58yoPHwkJXg5NI%2BqWvfPgf47jA0FpFmjiM1ZqZmn3MIJMgLfgvDGjcrqPSl%2BmTjUyPfKoXzrhn7Vktkca6BCOmEgapvaQEhTaeoQIlKqie7MfyTP&X-Amz-Signature=556763df281a9b6e33e300b02c4d329011066a99368a9942ec6ebb114569a1e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466755QPFY3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T161046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGazzdeJxRtskDtCosEbq11HkvzbGfyH9K6jfsy7tLHDAiEAhg2yjglWEck6guSo2j6EBzVBfXAG%2FTm8z9OpNnr4Y%2Fkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDMu%2FNyFodaLwV%2FR1iCrcA7rOSJtU5xdgI%2Fp9dnJpqDgB67Dk%2BG9ofSnmy9HQXS36tXg0pUvi7P%2FGbiAOAglbKbtrUfz%2BT16TEfK6jkBfI4OsKp6uch3ojsQuWf3h9f4llBfbO1vx82Gq%2BJnb3xH1clt7lLFQ%2FMLRXINAZAVIruY8BdURhrMuIUIYX691%2BXTVWAXfh0SLP9c%2BQzVuO9yKU5Ntz0fBASt%2BCurFZZZrLMjpiTt9NS3W7BZ0dFxLJlR1FjkvEqi5CgOJnWCYAFDe%2FJ9C92u6xgHMptRjAkBVkcIzWlbUDjzXMglEMybttTSvakVruVG065bYhbsVEAZn2%2BhQ6TSITyKHUD0DNklquoh0NTXu112OGyBKDR%2Bc3bLkt8duppY%2FM%2BoWRdLNKHFBjo5GOfa4KPE42%2FZrDq6vL5EMl%2B7nPxDNcjSQUK5VMHbwgHBQUejBpXfZP%2BrBeyO1smvpJcIiW0Z555HYf1GPbzUoIT%2FMxAgL%2ByujtmU86VqCZTcYCu6tAIuKOkTjMmxvkcSdgu8OuemCCpMdlUTcR9mNho9n5kBpZeNHs1gLQf%2Bv69m2eEuPxr4KUlW3uKBVZf9HLin3D1JK%2F1RpXJSWc%2FXir1yYLmnAxNCKBRleKnzMyW0viWZyug3a5SmSMKaS0sEGOqUBaL8q6j1hs6vRxbqiR4I09tQJ1I7BeJmNkdim0VwQ4kGm1Ltk9eZMACys%2F%2Bmb5pmlhQMRf10UiOpx1rPIpAXbzfoF2m4iubFEM0SCb%2BWSTPOs58yoPHwkJXg5NI%2BqWvfPgf47jA0FpFmjiM1ZqZmn3MIJMgLfgvDGjcrqPSl%2BmTjUyPfKoXzrhn7Vktkca6BCOmEgapvaQEhTaeoQIlKqie7MfyTP&X-Amz-Signature=8736cd0914f0f9db5af7f7541003efa0b3da9496806ba96ab121235a5d3fd051&X-Amz-SignedHeaders=host&x-id=GetObject)
