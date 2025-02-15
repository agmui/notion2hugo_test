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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQQOFJJ5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCegVfNFHc3nmalsHehAJTt3jNWg36vBjCn1YKCxB%2F53QIhAITawplJfHZbjYvzOhDiIldj4kWTJtjpzvcUNxUxSBX2Kv8DCE0QABoMNjM3NDIzMTgzODA1IgwTjeXyx%2BJwMbZGWGIq3AOodGc5nBcVGHYXEIMNIQKF9dWxcq3b9ctVH86EllZoVnPgFm97g1DG0O0rkyOyqzgovmgqxhkLmp7RTsJPmouuP8bjG7sanszC2zVShRY5sAEEvLogXycW6O%2FiDPgVsHQLq99%2BJGoC3SAyT1zHIDyZO4RjJct68Wzx2xbcRb%2FuIqxq%2BEwc16%2BnXquyPSEr6pleZ7gqLlYM4obXKRkTbZBPrrzulluWVxWH88QMDIrAUPhX6enn8BKv6YSudLWxdDVCuuIF8yn%2FvvAwbGegPG4LBpReDGjTmmuIWEZ1gHMxC9RC1Ax7z%2BBqme%2BW1CChT3U4LqZjDgLnIuJhXz6vI%2BX00k%2FXMVsuDXHnc%2B%2BDT6p4ZKXYeVjC4KEyaKiJ0hysPh9DXeUUEAL%2F6H2U8Lpmizf%2FfCWeBbSgZDb8NkpgxFuLXpH7NHiBmJbg7r%2FxOpiAp026VzMXN39Jy7OgOzYLD9%2B4DK8pWd4rWwlaK8T3EEIQ%2F4nfckk8MLJpJIWSlq4ZAw5sh0UAxgm8apnhsKovLiOoa6qR7o7p6yE0WFdtGe1yI2ut%2FnBw314xpvBggRtMi0R5tj1hS%2F1utTDEW4zkxCTWUIYv%2FNOTdx2wr8LAswpVGoFWhvfzq5gVsNTfOjD72MO9BjqkAXXdow0eDG6bj9ueQ6tPSfLJ%2FGR6r7Zpv9QN9OZh%2Fz%2FtAe0oPodNabE6F2UBTekw8D8nLzsxj1a43uPRxm7wTBv3g7ndciiCcx5y0GXx4Lg4u5lv1ORYano9ss4p98i%2Fckle7w5%2Fjbh6%2Fp0Dib1n7lq7BYgd%2BapYjoz8kRUqxp6Vpaipm0W%2Bi5rR%2FsEWd965AXUSRvm5VQiKeBQA26dysF%2BWtCne&X-Amz-Signature=2c8254fc639e28d0c80de48580b277c7c6b03bc7d7ee723863e8d7855af33cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQQOFJJ5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCegVfNFHc3nmalsHehAJTt3jNWg36vBjCn1YKCxB%2F53QIhAITawplJfHZbjYvzOhDiIldj4kWTJtjpzvcUNxUxSBX2Kv8DCE0QABoMNjM3NDIzMTgzODA1IgwTjeXyx%2BJwMbZGWGIq3AOodGc5nBcVGHYXEIMNIQKF9dWxcq3b9ctVH86EllZoVnPgFm97g1DG0O0rkyOyqzgovmgqxhkLmp7RTsJPmouuP8bjG7sanszC2zVShRY5sAEEvLogXycW6O%2FiDPgVsHQLq99%2BJGoC3SAyT1zHIDyZO4RjJct68Wzx2xbcRb%2FuIqxq%2BEwc16%2BnXquyPSEr6pleZ7gqLlYM4obXKRkTbZBPrrzulluWVxWH88QMDIrAUPhX6enn8BKv6YSudLWxdDVCuuIF8yn%2FvvAwbGegPG4LBpReDGjTmmuIWEZ1gHMxC9RC1Ax7z%2BBqme%2BW1CChT3U4LqZjDgLnIuJhXz6vI%2BX00k%2FXMVsuDXHnc%2B%2BDT6p4ZKXYeVjC4KEyaKiJ0hysPh9DXeUUEAL%2F6H2U8Lpmizf%2FfCWeBbSgZDb8NkpgxFuLXpH7NHiBmJbg7r%2FxOpiAp026VzMXN39Jy7OgOzYLD9%2B4DK8pWd4rWwlaK8T3EEIQ%2F4nfckk8MLJpJIWSlq4ZAw5sh0UAxgm8apnhsKovLiOoa6qR7o7p6yE0WFdtGe1yI2ut%2FnBw314xpvBggRtMi0R5tj1hS%2F1utTDEW4zkxCTWUIYv%2FNOTdx2wr8LAswpVGoFWhvfzq5gVsNTfOjD72MO9BjqkAXXdow0eDG6bj9ueQ6tPSfLJ%2FGR6r7Zpv9QN9OZh%2Fz%2FtAe0oPodNabE6F2UBTekw8D8nLzsxj1a43uPRxm7wTBv3g7ndciiCcx5y0GXx4Lg4u5lv1ORYano9ss4p98i%2Fckle7w5%2Fjbh6%2Fp0Dib1n7lq7BYgd%2BapYjoz8kRUqxp6Vpaipm0W%2Bi5rR%2FsEWd965AXUSRvm5VQiKeBQA26dysF%2BWtCne&X-Amz-Signature=7543bf9cbc80b9198b63ee96181549803baf1cbf093a2abdf0dbf9b121e256f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQQOFJJ5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCegVfNFHc3nmalsHehAJTt3jNWg36vBjCn1YKCxB%2F53QIhAITawplJfHZbjYvzOhDiIldj4kWTJtjpzvcUNxUxSBX2Kv8DCE0QABoMNjM3NDIzMTgzODA1IgwTjeXyx%2BJwMbZGWGIq3AOodGc5nBcVGHYXEIMNIQKF9dWxcq3b9ctVH86EllZoVnPgFm97g1DG0O0rkyOyqzgovmgqxhkLmp7RTsJPmouuP8bjG7sanszC2zVShRY5sAEEvLogXycW6O%2FiDPgVsHQLq99%2BJGoC3SAyT1zHIDyZO4RjJct68Wzx2xbcRb%2FuIqxq%2BEwc16%2BnXquyPSEr6pleZ7gqLlYM4obXKRkTbZBPrrzulluWVxWH88QMDIrAUPhX6enn8BKv6YSudLWxdDVCuuIF8yn%2FvvAwbGegPG4LBpReDGjTmmuIWEZ1gHMxC9RC1Ax7z%2BBqme%2BW1CChT3U4LqZjDgLnIuJhXz6vI%2BX00k%2FXMVsuDXHnc%2B%2BDT6p4ZKXYeVjC4KEyaKiJ0hysPh9DXeUUEAL%2F6H2U8Lpmizf%2FfCWeBbSgZDb8NkpgxFuLXpH7NHiBmJbg7r%2FxOpiAp026VzMXN39Jy7OgOzYLD9%2B4DK8pWd4rWwlaK8T3EEIQ%2F4nfckk8MLJpJIWSlq4ZAw5sh0UAxgm8apnhsKovLiOoa6qR7o7p6yE0WFdtGe1yI2ut%2FnBw314xpvBggRtMi0R5tj1hS%2F1utTDEW4zkxCTWUIYv%2FNOTdx2wr8LAswpVGoFWhvfzq5gVsNTfOjD72MO9BjqkAXXdow0eDG6bj9ueQ6tPSfLJ%2FGR6r7Zpv9QN9OZh%2Fz%2FtAe0oPodNabE6F2UBTekw8D8nLzsxj1a43uPRxm7wTBv3g7ndciiCcx5y0GXx4Lg4u5lv1ORYano9ss4p98i%2Fckle7w5%2Fjbh6%2Fp0Dib1n7lq7BYgd%2BapYjoz8kRUqxp6Vpaipm0W%2Bi5rR%2FsEWd965AXUSRvm5VQiKeBQA26dysF%2BWtCne&X-Amz-Signature=f7c8af427a9f33db730af170fedfd05de23ea7d652a4df933230a6bc917debe4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQQOFJJ5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCegVfNFHc3nmalsHehAJTt3jNWg36vBjCn1YKCxB%2F53QIhAITawplJfHZbjYvzOhDiIldj4kWTJtjpzvcUNxUxSBX2Kv8DCE0QABoMNjM3NDIzMTgzODA1IgwTjeXyx%2BJwMbZGWGIq3AOodGc5nBcVGHYXEIMNIQKF9dWxcq3b9ctVH86EllZoVnPgFm97g1DG0O0rkyOyqzgovmgqxhkLmp7RTsJPmouuP8bjG7sanszC2zVShRY5sAEEvLogXycW6O%2FiDPgVsHQLq99%2BJGoC3SAyT1zHIDyZO4RjJct68Wzx2xbcRb%2FuIqxq%2BEwc16%2BnXquyPSEr6pleZ7gqLlYM4obXKRkTbZBPrrzulluWVxWH88QMDIrAUPhX6enn8BKv6YSudLWxdDVCuuIF8yn%2FvvAwbGegPG4LBpReDGjTmmuIWEZ1gHMxC9RC1Ax7z%2BBqme%2BW1CChT3U4LqZjDgLnIuJhXz6vI%2BX00k%2FXMVsuDXHnc%2B%2BDT6p4ZKXYeVjC4KEyaKiJ0hysPh9DXeUUEAL%2F6H2U8Lpmizf%2FfCWeBbSgZDb8NkpgxFuLXpH7NHiBmJbg7r%2FxOpiAp026VzMXN39Jy7OgOzYLD9%2B4DK8pWd4rWwlaK8T3EEIQ%2F4nfckk8MLJpJIWSlq4ZAw5sh0UAxgm8apnhsKovLiOoa6qR7o7p6yE0WFdtGe1yI2ut%2FnBw314xpvBggRtMi0R5tj1hS%2F1utTDEW4zkxCTWUIYv%2FNOTdx2wr8LAswpVGoFWhvfzq5gVsNTfOjD72MO9BjqkAXXdow0eDG6bj9ueQ6tPSfLJ%2FGR6r7Zpv9QN9OZh%2Fz%2FtAe0oPodNabE6F2UBTekw8D8nLzsxj1a43uPRxm7wTBv3g7ndciiCcx5y0GXx4Lg4u5lv1ORYano9ss4p98i%2Fckle7w5%2Fjbh6%2Fp0Dib1n7lq7BYgd%2BapYjoz8kRUqxp6Vpaipm0W%2Bi5rR%2FsEWd965AXUSRvm5VQiKeBQA26dysF%2BWtCne&X-Amz-Signature=56a18ae2646d42f3732423446d5c50342d7c87a1235cde79e58fc0920ba15a61&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQQOFJJ5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCegVfNFHc3nmalsHehAJTt3jNWg36vBjCn1YKCxB%2F53QIhAITawplJfHZbjYvzOhDiIldj4kWTJtjpzvcUNxUxSBX2Kv8DCE0QABoMNjM3NDIzMTgzODA1IgwTjeXyx%2BJwMbZGWGIq3AOodGc5nBcVGHYXEIMNIQKF9dWxcq3b9ctVH86EllZoVnPgFm97g1DG0O0rkyOyqzgovmgqxhkLmp7RTsJPmouuP8bjG7sanszC2zVShRY5sAEEvLogXycW6O%2FiDPgVsHQLq99%2BJGoC3SAyT1zHIDyZO4RjJct68Wzx2xbcRb%2FuIqxq%2BEwc16%2BnXquyPSEr6pleZ7gqLlYM4obXKRkTbZBPrrzulluWVxWH88QMDIrAUPhX6enn8BKv6YSudLWxdDVCuuIF8yn%2FvvAwbGegPG4LBpReDGjTmmuIWEZ1gHMxC9RC1Ax7z%2BBqme%2BW1CChT3U4LqZjDgLnIuJhXz6vI%2BX00k%2FXMVsuDXHnc%2B%2BDT6p4ZKXYeVjC4KEyaKiJ0hysPh9DXeUUEAL%2F6H2U8Lpmizf%2FfCWeBbSgZDb8NkpgxFuLXpH7NHiBmJbg7r%2FxOpiAp026VzMXN39Jy7OgOzYLD9%2B4DK8pWd4rWwlaK8T3EEIQ%2F4nfckk8MLJpJIWSlq4ZAw5sh0UAxgm8apnhsKovLiOoa6qR7o7p6yE0WFdtGe1yI2ut%2FnBw314xpvBggRtMi0R5tj1hS%2F1utTDEW4zkxCTWUIYv%2FNOTdx2wr8LAswpVGoFWhvfzq5gVsNTfOjD72MO9BjqkAXXdow0eDG6bj9ueQ6tPSfLJ%2FGR6r7Zpv9QN9OZh%2Fz%2FtAe0oPodNabE6F2UBTekw8D8nLzsxj1a43uPRxm7wTBv3g7ndciiCcx5y0GXx4Lg4u5lv1ORYano9ss4p98i%2Fckle7w5%2Fjbh6%2Fp0Dib1n7lq7BYgd%2BapYjoz8kRUqxp6Vpaipm0W%2Bi5rR%2FsEWd965AXUSRvm5VQiKeBQA26dysF%2BWtCne&X-Amz-Signature=c02b4972f89bbebb75cb828627c60777aad3d8f288a9470068fd7a468cfc2468&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQQOFJJ5%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T200719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCegVfNFHc3nmalsHehAJTt3jNWg36vBjCn1YKCxB%2F53QIhAITawplJfHZbjYvzOhDiIldj4kWTJtjpzvcUNxUxSBX2Kv8DCE0QABoMNjM3NDIzMTgzODA1IgwTjeXyx%2BJwMbZGWGIq3AOodGc5nBcVGHYXEIMNIQKF9dWxcq3b9ctVH86EllZoVnPgFm97g1DG0O0rkyOyqzgovmgqxhkLmp7RTsJPmouuP8bjG7sanszC2zVShRY5sAEEvLogXycW6O%2FiDPgVsHQLq99%2BJGoC3SAyT1zHIDyZO4RjJct68Wzx2xbcRb%2FuIqxq%2BEwc16%2BnXquyPSEr6pleZ7gqLlYM4obXKRkTbZBPrrzulluWVxWH88QMDIrAUPhX6enn8BKv6YSudLWxdDVCuuIF8yn%2FvvAwbGegPG4LBpReDGjTmmuIWEZ1gHMxC9RC1Ax7z%2BBqme%2BW1CChT3U4LqZjDgLnIuJhXz6vI%2BX00k%2FXMVsuDXHnc%2B%2BDT6p4ZKXYeVjC4KEyaKiJ0hysPh9DXeUUEAL%2F6H2U8Lpmizf%2FfCWeBbSgZDb8NkpgxFuLXpH7NHiBmJbg7r%2FxOpiAp026VzMXN39Jy7OgOzYLD9%2B4DK8pWd4rWwlaK8T3EEIQ%2F4nfckk8MLJpJIWSlq4ZAw5sh0UAxgm8apnhsKovLiOoa6qR7o7p6yE0WFdtGe1yI2ut%2FnBw314xpvBggRtMi0R5tj1hS%2F1utTDEW4zkxCTWUIYv%2FNOTdx2wr8LAswpVGoFWhvfzq5gVsNTfOjD72MO9BjqkAXXdow0eDG6bj9ueQ6tPSfLJ%2FGR6r7Zpv9QN9OZh%2Fz%2FtAe0oPodNabE6F2UBTekw8D8nLzsxj1a43uPRxm7wTBv3g7ndciiCcx5y0GXx4Lg4u5lv1ORYano9ss4p98i%2Fckle7w5%2Fjbh6%2Fp0Dib1n7lq7BYgd%2BapYjoz8kRUqxp6Vpaipm0W%2Bi5rR%2FsEWd965AXUSRvm5VQiKeBQA26dysF%2BWtCne&X-Amz-Signature=a66065e549a7be36427183b141c0379f044da7e4e63d4b971e82b1d5761adf5f&X-Amz-SignedHeaders=host&x-id=GetObject)
