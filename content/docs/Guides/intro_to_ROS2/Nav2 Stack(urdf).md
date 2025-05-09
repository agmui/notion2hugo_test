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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KCQKIY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExbcycA6tRgouMA%2F99x9I6jyQLsaCAEnhAqXMC4GqHsAiA%2FYQ9YZmMKT9Zww08%2BmjWMPQvEc%2Fujdx11mwnWw3XqEiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfAfJfizSLC0bn14sKtwDc5sxR5vMGAuM4oV4z3DBCeNCSc10wVFXACI%2Bvk1VfgJvsf6kjPoGEABoR5B4kSavUOxzttgGAHrah01VrcStSJP84DtklrekPLFUeUFQEMNLP7gXTBdfZXaGWds7o5sjTOLAthtRdH4HlY2ExMlGOdAKescRHqBD52mhWUvdgMMVyFfDRcvLpxWAM%2BogyuFroJOqX0mHgh92LuTGg3ryxa%2FCJr7%2BLlJuuh005x%2FgwZA30SGyfNnSwavLZ24rm%2FKlEQAvQd54jyGCOlh6gXgJKLwSX4Lpbtmnw9WOpkWe4DuIKLhSjPlR5rWr1Wl9eHnaCClvWdngYdlCecixqKtLuypYlQnk9YsKEJ5VYWRVg%2F4bAiulHj%2Bk1grcFVpwMXSNed1GPUYEH0oH7Rj%2BsG9lxurXoYM0WQBAyOlwRIknm%2BuzwmBoFAK5QJwEcVjs7ue3YOppAmI4Hcg8bG0EwN37kndeWe4t8D%2FxdOKNxjIgskoJZ409Zx68hnYdp1LD5IlzMfVdvTA%2FoK0%2FmesWi%2Bd6DpPykIFNlXLGxyxhNtPAjur6F9D9g0%2FDh9RnlhqiMjXS1UFRgbdCLtUlD8I0Ozm%2F9mokEpVWV7fW%2BG4MVmGVRsBfnzHlNP6QMTk6r7cw0PD4wAY6pgF6KoYcAPf%2Be2W%2Bie%2BijmAmR6bqohLpNTLewB%2Focd9R80JpbWDBUTJhn7JTjHEoRbIGVgiAnZhwFdJAv76pdaz2cRykHsQNT%2Bq7gXeU8ZywBxg9dVGiajYWYjSa%2BkSy32M%2FTCJimdmNA6G4beRYkvr6kWP3nkVO99iTMJYppealrTKiAoQ0bOyhLOeT2VCHhC9mBd9%2BSrrGNL%2Bf6vxt%2F2aU1Y5Ydllz&X-Amz-Signature=a1cedeb048423b9f05a5e9977413c1fcbed3eff1956999a1cf9a6c44b1283970&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KCQKIY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExbcycA6tRgouMA%2F99x9I6jyQLsaCAEnhAqXMC4GqHsAiA%2FYQ9YZmMKT9Zww08%2BmjWMPQvEc%2Fujdx11mwnWw3XqEiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfAfJfizSLC0bn14sKtwDc5sxR5vMGAuM4oV4z3DBCeNCSc10wVFXACI%2Bvk1VfgJvsf6kjPoGEABoR5B4kSavUOxzttgGAHrah01VrcStSJP84DtklrekPLFUeUFQEMNLP7gXTBdfZXaGWds7o5sjTOLAthtRdH4HlY2ExMlGOdAKescRHqBD52mhWUvdgMMVyFfDRcvLpxWAM%2BogyuFroJOqX0mHgh92LuTGg3ryxa%2FCJr7%2BLlJuuh005x%2FgwZA30SGyfNnSwavLZ24rm%2FKlEQAvQd54jyGCOlh6gXgJKLwSX4Lpbtmnw9WOpkWe4DuIKLhSjPlR5rWr1Wl9eHnaCClvWdngYdlCecixqKtLuypYlQnk9YsKEJ5VYWRVg%2F4bAiulHj%2Bk1grcFVpwMXSNed1GPUYEH0oH7Rj%2BsG9lxurXoYM0WQBAyOlwRIknm%2BuzwmBoFAK5QJwEcVjs7ue3YOppAmI4Hcg8bG0EwN37kndeWe4t8D%2FxdOKNxjIgskoJZ409Zx68hnYdp1LD5IlzMfVdvTA%2FoK0%2FmesWi%2Bd6DpPykIFNlXLGxyxhNtPAjur6F9D9g0%2FDh9RnlhqiMjXS1UFRgbdCLtUlD8I0Ozm%2F9mokEpVWV7fW%2BG4MVmGVRsBfnzHlNP6QMTk6r7cw0PD4wAY6pgF6KoYcAPf%2Be2W%2Bie%2BijmAmR6bqohLpNTLewB%2Focd9R80JpbWDBUTJhn7JTjHEoRbIGVgiAnZhwFdJAv76pdaz2cRykHsQNT%2Bq7gXeU8ZywBxg9dVGiajYWYjSa%2BkSy32M%2FTCJimdmNA6G4beRYkvr6kWP3nkVO99iTMJYppealrTKiAoQ0bOyhLOeT2VCHhC9mBd9%2BSrrGNL%2Bf6vxt%2F2aU1Y5Ydllz&X-Amz-Signature=729152d60a197647e2e36b0f094b9db38d8d0eab59a80c03b46090c0b334afef&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KCQKIY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExbcycA6tRgouMA%2F99x9I6jyQLsaCAEnhAqXMC4GqHsAiA%2FYQ9YZmMKT9Zww08%2BmjWMPQvEc%2Fujdx11mwnWw3XqEiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfAfJfizSLC0bn14sKtwDc5sxR5vMGAuM4oV4z3DBCeNCSc10wVFXACI%2Bvk1VfgJvsf6kjPoGEABoR5B4kSavUOxzttgGAHrah01VrcStSJP84DtklrekPLFUeUFQEMNLP7gXTBdfZXaGWds7o5sjTOLAthtRdH4HlY2ExMlGOdAKescRHqBD52mhWUvdgMMVyFfDRcvLpxWAM%2BogyuFroJOqX0mHgh92LuTGg3ryxa%2FCJr7%2BLlJuuh005x%2FgwZA30SGyfNnSwavLZ24rm%2FKlEQAvQd54jyGCOlh6gXgJKLwSX4Lpbtmnw9WOpkWe4DuIKLhSjPlR5rWr1Wl9eHnaCClvWdngYdlCecixqKtLuypYlQnk9YsKEJ5VYWRVg%2F4bAiulHj%2Bk1grcFVpwMXSNed1GPUYEH0oH7Rj%2BsG9lxurXoYM0WQBAyOlwRIknm%2BuzwmBoFAK5QJwEcVjs7ue3YOppAmI4Hcg8bG0EwN37kndeWe4t8D%2FxdOKNxjIgskoJZ409Zx68hnYdp1LD5IlzMfVdvTA%2FoK0%2FmesWi%2Bd6DpPykIFNlXLGxyxhNtPAjur6F9D9g0%2FDh9RnlhqiMjXS1UFRgbdCLtUlD8I0Ozm%2F9mokEpVWV7fW%2BG4MVmGVRsBfnzHlNP6QMTk6r7cw0PD4wAY6pgF6KoYcAPf%2Be2W%2Bie%2BijmAmR6bqohLpNTLewB%2Focd9R80JpbWDBUTJhn7JTjHEoRbIGVgiAnZhwFdJAv76pdaz2cRykHsQNT%2Bq7gXeU8ZywBxg9dVGiajYWYjSa%2BkSy32M%2FTCJimdmNA6G4beRYkvr6kWP3nkVO99iTMJYppealrTKiAoQ0bOyhLOeT2VCHhC9mBd9%2BSrrGNL%2Bf6vxt%2F2aU1Y5Ydllz&X-Amz-Signature=056c8a5f7422aeabca8bdf4841263ca2498e3473eac502b102df389f3ea40ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KCQKIY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExbcycA6tRgouMA%2F99x9I6jyQLsaCAEnhAqXMC4GqHsAiA%2FYQ9YZmMKT9Zww08%2BmjWMPQvEc%2Fujdx11mwnWw3XqEiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfAfJfizSLC0bn14sKtwDc5sxR5vMGAuM4oV4z3DBCeNCSc10wVFXACI%2Bvk1VfgJvsf6kjPoGEABoR5B4kSavUOxzttgGAHrah01VrcStSJP84DtklrekPLFUeUFQEMNLP7gXTBdfZXaGWds7o5sjTOLAthtRdH4HlY2ExMlGOdAKescRHqBD52mhWUvdgMMVyFfDRcvLpxWAM%2BogyuFroJOqX0mHgh92LuTGg3ryxa%2FCJr7%2BLlJuuh005x%2FgwZA30SGyfNnSwavLZ24rm%2FKlEQAvQd54jyGCOlh6gXgJKLwSX4Lpbtmnw9WOpkWe4DuIKLhSjPlR5rWr1Wl9eHnaCClvWdngYdlCecixqKtLuypYlQnk9YsKEJ5VYWRVg%2F4bAiulHj%2Bk1grcFVpwMXSNed1GPUYEH0oH7Rj%2BsG9lxurXoYM0WQBAyOlwRIknm%2BuzwmBoFAK5QJwEcVjs7ue3YOppAmI4Hcg8bG0EwN37kndeWe4t8D%2FxdOKNxjIgskoJZ409Zx68hnYdp1LD5IlzMfVdvTA%2FoK0%2FmesWi%2Bd6DpPykIFNlXLGxyxhNtPAjur6F9D9g0%2FDh9RnlhqiMjXS1UFRgbdCLtUlD8I0Ozm%2F9mokEpVWV7fW%2BG4MVmGVRsBfnzHlNP6QMTk6r7cw0PD4wAY6pgF6KoYcAPf%2Be2W%2Bie%2BijmAmR6bqohLpNTLewB%2Focd9R80JpbWDBUTJhn7JTjHEoRbIGVgiAnZhwFdJAv76pdaz2cRykHsQNT%2Bq7gXeU8ZywBxg9dVGiajYWYjSa%2BkSy32M%2FTCJimdmNA6G4beRYkvr6kWP3nkVO99iTMJYppealrTKiAoQ0bOyhLOeT2VCHhC9mBd9%2BSrrGNL%2Bf6vxt%2F2aU1Y5Ydllz&X-Amz-Signature=faf41b884547ab1f312e30a5148376fe1986f54e53fdeb90d793c807ed5251db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KCQKIY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExbcycA6tRgouMA%2F99x9I6jyQLsaCAEnhAqXMC4GqHsAiA%2FYQ9YZmMKT9Zww08%2BmjWMPQvEc%2Fujdx11mwnWw3XqEiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfAfJfizSLC0bn14sKtwDc5sxR5vMGAuM4oV4z3DBCeNCSc10wVFXACI%2Bvk1VfgJvsf6kjPoGEABoR5B4kSavUOxzttgGAHrah01VrcStSJP84DtklrekPLFUeUFQEMNLP7gXTBdfZXaGWds7o5sjTOLAthtRdH4HlY2ExMlGOdAKescRHqBD52mhWUvdgMMVyFfDRcvLpxWAM%2BogyuFroJOqX0mHgh92LuTGg3ryxa%2FCJr7%2BLlJuuh005x%2FgwZA30SGyfNnSwavLZ24rm%2FKlEQAvQd54jyGCOlh6gXgJKLwSX4Lpbtmnw9WOpkWe4DuIKLhSjPlR5rWr1Wl9eHnaCClvWdngYdlCecixqKtLuypYlQnk9YsKEJ5VYWRVg%2F4bAiulHj%2Bk1grcFVpwMXSNed1GPUYEH0oH7Rj%2BsG9lxurXoYM0WQBAyOlwRIknm%2BuzwmBoFAK5QJwEcVjs7ue3YOppAmI4Hcg8bG0EwN37kndeWe4t8D%2FxdOKNxjIgskoJZ409Zx68hnYdp1LD5IlzMfVdvTA%2FoK0%2FmesWi%2Bd6DpPykIFNlXLGxyxhNtPAjur6F9D9g0%2FDh9RnlhqiMjXS1UFRgbdCLtUlD8I0Ozm%2F9mokEpVWV7fW%2BG4MVmGVRsBfnzHlNP6QMTk6r7cw0PD4wAY6pgF6KoYcAPf%2Be2W%2Bie%2BijmAmR6bqohLpNTLewB%2Focd9R80JpbWDBUTJhn7JTjHEoRbIGVgiAnZhwFdJAv76pdaz2cRykHsQNT%2Bq7gXeU8ZywBxg9dVGiajYWYjSa%2BkSy32M%2FTCJimdmNA6G4beRYkvr6kWP3nkVO99iTMJYppealrTKiAoQ0bOyhLOeT2VCHhC9mBd9%2BSrrGNL%2Bf6vxt%2F2aU1Y5Ydllz&X-Amz-Signature=209e17e3b6da8bc6d942daa3a8c2cdb1a2accf550559585a0be443efc3461f16&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KCQKIY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIExbcycA6tRgouMA%2F99x9I6jyQLsaCAEnhAqXMC4GqHsAiA%2FYQ9YZmMKT9Zww08%2BmjWMPQvEc%2Fujdx11mwnWw3XqEiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfAfJfizSLC0bn14sKtwDc5sxR5vMGAuM4oV4z3DBCeNCSc10wVFXACI%2Bvk1VfgJvsf6kjPoGEABoR5B4kSavUOxzttgGAHrah01VrcStSJP84DtklrekPLFUeUFQEMNLP7gXTBdfZXaGWds7o5sjTOLAthtRdH4HlY2ExMlGOdAKescRHqBD52mhWUvdgMMVyFfDRcvLpxWAM%2BogyuFroJOqX0mHgh92LuTGg3ryxa%2FCJr7%2BLlJuuh005x%2FgwZA30SGyfNnSwavLZ24rm%2FKlEQAvQd54jyGCOlh6gXgJKLwSX4Lpbtmnw9WOpkWe4DuIKLhSjPlR5rWr1Wl9eHnaCClvWdngYdlCecixqKtLuypYlQnk9YsKEJ5VYWRVg%2F4bAiulHj%2Bk1grcFVpwMXSNed1GPUYEH0oH7Rj%2BsG9lxurXoYM0WQBAyOlwRIknm%2BuzwmBoFAK5QJwEcVjs7ue3YOppAmI4Hcg8bG0EwN37kndeWe4t8D%2FxdOKNxjIgskoJZ409Zx68hnYdp1LD5IlzMfVdvTA%2FoK0%2FmesWi%2Bd6DpPykIFNlXLGxyxhNtPAjur6F9D9g0%2FDh9RnlhqiMjXS1UFRgbdCLtUlD8I0Ozm%2F9mokEpVWV7fW%2BG4MVmGVRsBfnzHlNP6QMTk6r7cw0PD4wAY6pgF6KoYcAPf%2Be2W%2Bie%2BijmAmR6bqohLpNTLewB%2Focd9R80JpbWDBUTJhn7JTjHEoRbIGVgiAnZhwFdJAv76pdaz2cRykHsQNT%2Bq7gXeU8ZywBxg9dVGiajYWYjSa%2BkSy32M%2FTCJimdmNA6G4beRYkvr6kWP3nkVO99iTMJYppealrTKiAoQ0bOyhLOeT2VCHhC9mBd9%2BSrrGNL%2Bf6vxt%2F2aU1Y5Ydllz&X-Amz-Signature=c79454e3f275b29fea8464187ddb3e4d785dcc7e938633fd6bf1cae6d50442fa&X-Amz-SignedHeaders=host&x-id=GetObject)
