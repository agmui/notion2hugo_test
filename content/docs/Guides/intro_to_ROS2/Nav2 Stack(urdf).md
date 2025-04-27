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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OJ5NKHW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5DTj8FflnoPTup%2Bk52o5r0Z143a0jG6jbudEay96V2AiAlYmDZyqFIjOlN7R9melC5%2FJyBu8zEpBXDA859Tr2L4yr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMWuplzv2uW1hCmn7XKtwD6OUoF3PJyl9va2tY3wuDNfHxfqo%2FG4kPaMzJbGe%2Fe703LKtv7dTcQbQhKduz0UjV7Rv1uP4NHCYO9OW8bHysI7ne8p0j7sq8u1SuL68uh07Mg7cF0O1DEHFdMge25lPsMoRcQ2P265KH2WFP%2FabH8mZnKi9Exmb550fENpi1KtErSOAtT4y03mHXX52iIqqHhpF%2BWBug%2BsvsbMe6O28WGVfzTKCsEwn0f4HqE4IUNJIQiZS30b5UCy3dqNaPdyQ9dKWmbXPDK6jO5ISq6zND3ZxWFa%2FFnWMsivxQ1jo2rqBKi2GNPPGq%2BiHeOL8qzypAbPVWRE6lby%2Btf2YO8dwoe%2B6NeTmfHw97RCbl4j%2ByqdHOsUl4n6xK3hmvIs1eTKFDyjVx%2FxLKCyUkByoPqIDjnOKRCGY%2FoYxhW%2BtLQ2r3y3SFatIfIX5jkIc%2BBaPNMXdcHRzq%2FzpW9VAYwiX94xHb%2BfDeb6IYuwVIiMNlxPFzuab5XAWg6Z10dq3BB39jd%2F4GZ3STsDrdCMivgRL0zBPKI%2FsYMW9zpLgx0oLiEfMiBRhwprIUPy1BLjNZjJtrBRo6qUbnIL8HURsJ%2BpNRD%2Fi8xhtoxN093Al%2F%2FTOi8jRX7elilRbf2uWPsDAlkKMwqIy4wAY6pgF1kYLtzgyQBspboGdvMs%2BjIoO2RzlfI%2BCCZaIjvhcuZ9dtTaf1DeRmmt3CiTJEoBps631tbP%2FBU5r4m%2BrZwnZlurWGldwlr1xIPypGDFJl3B827xhXxG7MgKKYTzK%2BWy9CIiMw%2Fzb1TGl6JGCgf%2BiIJEebt0A0IAOOxSP3pFIXPlW4UbGN0BBv%2B9A1o6jhVzji3cKR5VcS2AtIwMaGX8yoD8My7o2m&X-Amz-Signature=9a99682353cb6a4f6da7ed5e44240722e5643e6d093cc1c9eeeaaf6ecaccf082&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OJ5NKHW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5DTj8FflnoPTup%2Bk52o5r0Z143a0jG6jbudEay96V2AiAlYmDZyqFIjOlN7R9melC5%2FJyBu8zEpBXDA859Tr2L4yr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMWuplzv2uW1hCmn7XKtwD6OUoF3PJyl9va2tY3wuDNfHxfqo%2FG4kPaMzJbGe%2Fe703LKtv7dTcQbQhKduz0UjV7Rv1uP4NHCYO9OW8bHysI7ne8p0j7sq8u1SuL68uh07Mg7cF0O1DEHFdMge25lPsMoRcQ2P265KH2WFP%2FabH8mZnKi9Exmb550fENpi1KtErSOAtT4y03mHXX52iIqqHhpF%2BWBug%2BsvsbMe6O28WGVfzTKCsEwn0f4HqE4IUNJIQiZS30b5UCy3dqNaPdyQ9dKWmbXPDK6jO5ISq6zND3ZxWFa%2FFnWMsivxQ1jo2rqBKi2GNPPGq%2BiHeOL8qzypAbPVWRE6lby%2Btf2YO8dwoe%2B6NeTmfHw97RCbl4j%2ByqdHOsUl4n6xK3hmvIs1eTKFDyjVx%2FxLKCyUkByoPqIDjnOKRCGY%2FoYxhW%2BtLQ2r3y3SFatIfIX5jkIc%2BBaPNMXdcHRzq%2FzpW9VAYwiX94xHb%2BfDeb6IYuwVIiMNlxPFzuab5XAWg6Z10dq3BB39jd%2F4GZ3STsDrdCMivgRL0zBPKI%2FsYMW9zpLgx0oLiEfMiBRhwprIUPy1BLjNZjJtrBRo6qUbnIL8HURsJ%2BpNRD%2Fi8xhtoxN093Al%2F%2FTOi8jRX7elilRbf2uWPsDAlkKMwqIy4wAY6pgF1kYLtzgyQBspboGdvMs%2BjIoO2RzlfI%2BCCZaIjvhcuZ9dtTaf1DeRmmt3CiTJEoBps631tbP%2FBU5r4m%2BrZwnZlurWGldwlr1xIPypGDFJl3B827xhXxG7MgKKYTzK%2BWy9CIiMw%2Fzb1TGl6JGCgf%2BiIJEebt0A0IAOOxSP3pFIXPlW4UbGN0BBv%2B9A1o6jhVzji3cKR5VcS2AtIwMaGX8yoD8My7o2m&X-Amz-Signature=584080b417d6f06c74078a6172fa1e922ac4f424d7a2b32cfff3a2e2a1eb2299&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OJ5NKHW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5DTj8FflnoPTup%2Bk52o5r0Z143a0jG6jbudEay96V2AiAlYmDZyqFIjOlN7R9melC5%2FJyBu8zEpBXDA859Tr2L4yr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMWuplzv2uW1hCmn7XKtwD6OUoF3PJyl9va2tY3wuDNfHxfqo%2FG4kPaMzJbGe%2Fe703LKtv7dTcQbQhKduz0UjV7Rv1uP4NHCYO9OW8bHysI7ne8p0j7sq8u1SuL68uh07Mg7cF0O1DEHFdMge25lPsMoRcQ2P265KH2WFP%2FabH8mZnKi9Exmb550fENpi1KtErSOAtT4y03mHXX52iIqqHhpF%2BWBug%2BsvsbMe6O28WGVfzTKCsEwn0f4HqE4IUNJIQiZS30b5UCy3dqNaPdyQ9dKWmbXPDK6jO5ISq6zND3ZxWFa%2FFnWMsivxQ1jo2rqBKi2GNPPGq%2BiHeOL8qzypAbPVWRE6lby%2Btf2YO8dwoe%2B6NeTmfHw97RCbl4j%2ByqdHOsUl4n6xK3hmvIs1eTKFDyjVx%2FxLKCyUkByoPqIDjnOKRCGY%2FoYxhW%2BtLQ2r3y3SFatIfIX5jkIc%2BBaPNMXdcHRzq%2FzpW9VAYwiX94xHb%2BfDeb6IYuwVIiMNlxPFzuab5XAWg6Z10dq3BB39jd%2F4GZ3STsDrdCMivgRL0zBPKI%2FsYMW9zpLgx0oLiEfMiBRhwprIUPy1BLjNZjJtrBRo6qUbnIL8HURsJ%2BpNRD%2Fi8xhtoxN093Al%2F%2FTOi8jRX7elilRbf2uWPsDAlkKMwqIy4wAY6pgF1kYLtzgyQBspboGdvMs%2BjIoO2RzlfI%2BCCZaIjvhcuZ9dtTaf1DeRmmt3CiTJEoBps631tbP%2FBU5r4m%2BrZwnZlurWGldwlr1xIPypGDFJl3B827xhXxG7MgKKYTzK%2BWy9CIiMw%2Fzb1TGl6JGCgf%2BiIJEebt0A0IAOOxSP3pFIXPlW4UbGN0BBv%2B9A1o6jhVzji3cKR5VcS2AtIwMaGX8yoD8My7o2m&X-Amz-Signature=fb96f95bdd30cb4ebde73e3f44d295f5e79cb53286a875f8a1a3aeb44232d586&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OJ5NKHW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5DTj8FflnoPTup%2Bk52o5r0Z143a0jG6jbudEay96V2AiAlYmDZyqFIjOlN7R9melC5%2FJyBu8zEpBXDA859Tr2L4yr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMWuplzv2uW1hCmn7XKtwD6OUoF3PJyl9va2tY3wuDNfHxfqo%2FG4kPaMzJbGe%2Fe703LKtv7dTcQbQhKduz0UjV7Rv1uP4NHCYO9OW8bHysI7ne8p0j7sq8u1SuL68uh07Mg7cF0O1DEHFdMge25lPsMoRcQ2P265KH2WFP%2FabH8mZnKi9Exmb550fENpi1KtErSOAtT4y03mHXX52iIqqHhpF%2BWBug%2BsvsbMe6O28WGVfzTKCsEwn0f4HqE4IUNJIQiZS30b5UCy3dqNaPdyQ9dKWmbXPDK6jO5ISq6zND3ZxWFa%2FFnWMsivxQ1jo2rqBKi2GNPPGq%2BiHeOL8qzypAbPVWRE6lby%2Btf2YO8dwoe%2B6NeTmfHw97RCbl4j%2ByqdHOsUl4n6xK3hmvIs1eTKFDyjVx%2FxLKCyUkByoPqIDjnOKRCGY%2FoYxhW%2BtLQ2r3y3SFatIfIX5jkIc%2BBaPNMXdcHRzq%2FzpW9VAYwiX94xHb%2BfDeb6IYuwVIiMNlxPFzuab5XAWg6Z10dq3BB39jd%2F4GZ3STsDrdCMivgRL0zBPKI%2FsYMW9zpLgx0oLiEfMiBRhwprIUPy1BLjNZjJtrBRo6qUbnIL8HURsJ%2BpNRD%2Fi8xhtoxN093Al%2F%2FTOi8jRX7elilRbf2uWPsDAlkKMwqIy4wAY6pgF1kYLtzgyQBspboGdvMs%2BjIoO2RzlfI%2BCCZaIjvhcuZ9dtTaf1DeRmmt3CiTJEoBps631tbP%2FBU5r4m%2BrZwnZlurWGldwlr1xIPypGDFJl3B827xhXxG7MgKKYTzK%2BWy9CIiMw%2Fzb1TGl6JGCgf%2BiIJEebt0A0IAOOxSP3pFIXPlW4UbGN0BBv%2B9A1o6jhVzji3cKR5VcS2AtIwMaGX8yoD8My7o2m&X-Amz-Signature=46e8acff7ae7194e2d85c1fcc20fb2bb02dcedfe377d5fcbcff621e96191ba51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OJ5NKHW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5DTj8FflnoPTup%2Bk52o5r0Z143a0jG6jbudEay96V2AiAlYmDZyqFIjOlN7R9melC5%2FJyBu8zEpBXDA859Tr2L4yr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMWuplzv2uW1hCmn7XKtwD6OUoF3PJyl9va2tY3wuDNfHxfqo%2FG4kPaMzJbGe%2Fe703LKtv7dTcQbQhKduz0UjV7Rv1uP4NHCYO9OW8bHysI7ne8p0j7sq8u1SuL68uh07Mg7cF0O1DEHFdMge25lPsMoRcQ2P265KH2WFP%2FabH8mZnKi9Exmb550fENpi1KtErSOAtT4y03mHXX52iIqqHhpF%2BWBug%2BsvsbMe6O28WGVfzTKCsEwn0f4HqE4IUNJIQiZS30b5UCy3dqNaPdyQ9dKWmbXPDK6jO5ISq6zND3ZxWFa%2FFnWMsivxQ1jo2rqBKi2GNPPGq%2BiHeOL8qzypAbPVWRE6lby%2Btf2YO8dwoe%2B6NeTmfHw97RCbl4j%2ByqdHOsUl4n6xK3hmvIs1eTKFDyjVx%2FxLKCyUkByoPqIDjnOKRCGY%2FoYxhW%2BtLQ2r3y3SFatIfIX5jkIc%2BBaPNMXdcHRzq%2FzpW9VAYwiX94xHb%2BfDeb6IYuwVIiMNlxPFzuab5XAWg6Z10dq3BB39jd%2F4GZ3STsDrdCMivgRL0zBPKI%2FsYMW9zpLgx0oLiEfMiBRhwprIUPy1BLjNZjJtrBRo6qUbnIL8HURsJ%2BpNRD%2Fi8xhtoxN093Al%2F%2FTOi8jRX7elilRbf2uWPsDAlkKMwqIy4wAY6pgF1kYLtzgyQBspboGdvMs%2BjIoO2RzlfI%2BCCZaIjvhcuZ9dtTaf1DeRmmt3CiTJEoBps631tbP%2FBU5r4m%2BrZwnZlurWGldwlr1xIPypGDFJl3B827xhXxG7MgKKYTzK%2BWy9CIiMw%2Fzb1TGl6JGCgf%2BiIJEebt0A0IAOOxSP3pFIXPlW4UbGN0BBv%2B9A1o6jhVzji3cKR5VcS2AtIwMaGX8yoD8My7o2m&X-Amz-Signature=7aacad0e80cc2f703a482d6c911171e514c9ea3f64746361aefb5c07c244eda3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OJ5NKHW%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5DTj8FflnoPTup%2Bk52o5r0Z143a0jG6jbudEay96V2AiAlYmDZyqFIjOlN7R9melC5%2FJyBu8zEpBXDA859Tr2L4yr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMWuplzv2uW1hCmn7XKtwD6OUoF3PJyl9va2tY3wuDNfHxfqo%2FG4kPaMzJbGe%2Fe703LKtv7dTcQbQhKduz0UjV7Rv1uP4NHCYO9OW8bHysI7ne8p0j7sq8u1SuL68uh07Mg7cF0O1DEHFdMge25lPsMoRcQ2P265KH2WFP%2FabH8mZnKi9Exmb550fENpi1KtErSOAtT4y03mHXX52iIqqHhpF%2BWBug%2BsvsbMe6O28WGVfzTKCsEwn0f4HqE4IUNJIQiZS30b5UCy3dqNaPdyQ9dKWmbXPDK6jO5ISq6zND3ZxWFa%2FFnWMsivxQ1jo2rqBKi2GNPPGq%2BiHeOL8qzypAbPVWRE6lby%2Btf2YO8dwoe%2B6NeTmfHw97RCbl4j%2ByqdHOsUl4n6xK3hmvIs1eTKFDyjVx%2FxLKCyUkByoPqIDjnOKRCGY%2FoYxhW%2BtLQ2r3y3SFatIfIX5jkIc%2BBaPNMXdcHRzq%2FzpW9VAYwiX94xHb%2BfDeb6IYuwVIiMNlxPFzuab5XAWg6Z10dq3BB39jd%2F4GZ3STsDrdCMivgRL0zBPKI%2FsYMW9zpLgx0oLiEfMiBRhwprIUPy1BLjNZjJtrBRo6qUbnIL8HURsJ%2BpNRD%2Fi8xhtoxN093Al%2F%2FTOi8jRX7elilRbf2uWPsDAlkKMwqIy4wAY6pgF1kYLtzgyQBspboGdvMs%2BjIoO2RzlfI%2BCCZaIjvhcuZ9dtTaf1DeRmmt3CiTJEoBps631tbP%2FBU5r4m%2BrZwnZlurWGldwlr1xIPypGDFJl3B827xhXxG7MgKKYTzK%2BWy9CIiMw%2Fzb1TGl6JGCgf%2BiIJEebt0A0IAOOxSP3pFIXPlW4UbGN0BBv%2B9A1o6jhVzji3cKR5VcS2AtIwMaGX8yoD8My7o2m&X-Amz-Signature=a46306095f6f400a96a61f04b97d88d0e15ae64b99ec80285ccba518ec7e7150&X-Amz-SignedHeaders=host&x-id=GetObject)
