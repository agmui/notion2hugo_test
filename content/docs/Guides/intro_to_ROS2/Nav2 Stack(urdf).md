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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2YHTUT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICaLYSYx7fBPygqjvNESgK8Fnbqu9SRYDgwysBfpPBTlAiEAss1SH6F2NGI4I4BItAEEDsyl7hkb%2BcwRDxkqiSIe9u0qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoHsrvOm1kt7%2BnjMircA2zgrdYqwlFQLsOhHTdFBjHAYyiecgs9wHcXytLgmpL4%2BNJOFy0VRuerkWuz%2FIAre%2BJQM4sEc1zv1zTVfcnnADtgF4EnHKFRbcCy4SZDbvubkTswpfJAotaq10ElL9vHeSG6XDl1U0gNbtKI6ulOS6k1fzQspcjQ2IDGrsitnNnq0xpB547hrVFRwfhgqNmsfGCF%2BVSnOHlQFAtdgBaSt22E5rsVi0marE4YniJpybE8r6g%2FHn%2FsM1HBNQbGDkFJlIcifu0ERrvWHp4zu43GJVc5Y0GppW9aPOxvAJzsPq7%2BDyC4dUIkqmN0r1wb%2Fg0unnf8UqTKxpSWQOuzHavHIcwlwtWOhAjMUnbLxDMqgnmDHRWLyf3m%2Be4ZjcBQ6idyn6gJ1osLnoI51I0q4d17z7f6i2uTPnXZT9FtjlFUlt%2BjAs3f9jLKWOmdXwMMQR3BxLPBD1E1wk66GxIniZbXXT42wP6DDqHZ%2BpdjpwpkfviHtqm9vrjlEnNN64i2I554RiE74RDk5EW0rLt6JnCMD7e%2BrtnmVWdJ5ytUGfNu5OvvieGMescge02rtJnk6lQ3cjzmLZiS2CLNkyd7OIdSBX3Y4u2rKumJPAC6q6v6fjxS7EzGRwVvX%2BqbciVrMPnohsEGOqUBisk%2Fb1Leed9aD%2BWbB%2BB0Td%2FLt1kRaVqHjMM2kGbxGrkSETp2Z9MXgH3Z9D0BNQU7y0XqlgkljA9ixXZG%2Bh8WdamrrfmL69b697uplwkgb938ifv%2BU0H6B9GiDLqZ%2FDRmLWDyj2qKEuewBHynN23cHr69SJLisP1%2F6P%2BlvvIPz808IjCWo8VLSBU0ZDJmC%2BX%2FZUxD62U3hTq2hsOCm6NbtpmU4Gwv&X-Amz-Signature=aa242192175ecace5a53f9e9fcb4c7f901492753a7d5f63334cdae21809401f3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2YHTUT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICaLYSYx7fBPygqjvNESgK8Fnbqu9SRYDgwysBfpPBTlAiEAss1SH6F2NGI4I4BItAEEDsyl7hkb%2BcwRDxkqiSIe9u0qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoHsrvOm1kt7%2BnjMircA2zgrdYqwlFQLsOhHTdFBjHAYyiecgs9wHcXytLgmpL4%2BNJOFy0VRuerkWuz%2FIAre%2BJQM4sEc1zv1zTVfcnnADtgF4EnHKFRbcCy4SZDbvubkTswpfJAotaq10ElL9vHeSG6XDl1U0gNbtKI6ulOS6k1fzQspcjQ2IDGrsitnNnq0xpB547hrVFRwfhgqNmsfGCF%2BVSnOHlQFAtdgBaSt22E5rsVi0marE4YniJpybE8r6g%2FHn%2FsM1HBNQbGDkFJlIcifu0ERrvWHp4zu43GJVc5Y0GppW9aPOxvAJzsPq7%2BDyC4dUIkqmN0r1wb%2Fg0unnf8UqTKxpSWQOuzHavHIcwlwtWOhAjMUnbLxDMqgnmDHRWLyf3m%2Be4ZjcBQ6idyn6gJ1osLnoI51I0q4d17z7f6i2uTPnXZT9FtjlFUlt%2BjAs3f9jLKWOmdXwMMQR3BxLPBD1E1wk66GxIniZbXXT42wP6DDqHZ%2BpdjpwpkfviHtqm9vrjlEnNN64i2I554RiE74RDk5EW0rLt6JnCMD7e%2BrtnmVWdJ5ytUGfNu5OvvieGMescge02rtJnk6lQ3cjzmLZiS2CLNkyd7OIdSBX3Y4u2rKumJPAC6q6v6fjxS7EzGRwVvX%2BqbciVrMPnohsEGOqUBisk%2Fb1Leed9aD%2BWbB%2BB0Td%2FLt1kRaVqHjMM2kGbxGrkSETp2Z9MXgH3Z9D0BNQU7y0XqlgkljA9ixXZG%2Bh8WdamrrfmL69b697uplwkgb938ifv%2BU0H6B9GiDLqZ%2FDRmLWDyj2qKEuewBHynN23cHr69SJLisP1%2F6P%2BlvvIPz808IjCWo8VLSBU0ZDJmC%2BX%2FZUxD62U3hTq2hsOCm6NbtpmU4Gwv&X-Amz-Signature=6be3f302c91eb6c161232b404377573a019a3d34f88683ebdbf6784036f83bf0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2YHTUT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICaLYSYx7fBPygqjvNESgK8Fnbqu9SRYDgwysBfpPBTlAiEAss1SH6F2NGI4I4BItAEEDsyl7hkb%2BcwRDxkqiSIe9u0qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoHsrvOm1kt7%2BnjMircA2zgrdYqwlFQLsOhHTdFBjHAYyiecgs9wHcXytLgmpL4%2BNJOFy0VRuerkWuz%2FIAre%2BJQM4sEc1zv1zTVfcnnADtgF4EnHKFRbcCy4SZDbvubkTswpfJAotaq10ElL9vHeSG6XDl1U0gNbtKI6ulOS6k1fzQspcjQ2IDGrsitnNnq0xpB547hrVFRwfhgqNmsfGCF%2BVSnOHlQFAtdgBaSt22E5rsVi0marE4YniJpybE8r6g%2FHn%2FsM1HBNQbGDkFJlIcifu0ERrvWHp4zu43GJVc5Y0GppW9aPOxvAJzsPq7%2BDyC4dUIkqmN0r1wb%2Fg0unnf8UqTKxpSWQOuzHavHIcwlwtWOhAjMUnbLxDMqgnmDHRWLyf3m%2Be4ZjcBQ6idyn6gJ1osLnoI51I0q4d17z7f6i2uTPnXZT9FtjlFUlt%2BjAs3f9jLKWOmdXwMMQR3BxLPBD1E1wk66GxIniZbXXT42wP6DDqHZ%2BpdjpwpkfviHtqm9vrjlEnNN64i2I554RiE74RDk5EW0rLt6JnCMD7e%2BrtnmVWdJ5ytUGfNu5OvvieGMescge02rtJnk6lQ3cjzmLZiS2CLNkyd7OIdSBX3Y4u2rKumJPAC6q6v6fjxS7EzGRwVvX%2BqbciVrMPnohsEGOqUBisk%2Fb1Leed9aD%2BWbB%2BB0Td%2FLt1kRaVqHjMM2kGbxGrkSETp2Z9MXgH3Z9D0BNQU7y0XqlgkljA9ixXZG%2Bh8WdamrrfmL69b697uplwkgb938ifv%2BU0H6B9GiDLqZ%2FDRmLWDyj2qKEuewBHynN23cHr69SJLisP1%2F6P%2BlvvIPz808IjCWo8VLSBU0ZDJmC%2BX%2FZUxD62U3hTq2hsOCm6NbtpmU4Gwv&X-Amz-Signature=b378358fa5d48d61e0b60453ddbf6650c8dca70240124092d87f27af16b0ab0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2YHTUT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICaLYSYx7fBPygqjvNESgK8Fnbqu9SRYDgwysBfpPBTlAiEAss1SH6F2NGI4I4BItAEEDsyl7hkb%2BcwRDxkqiSIe9u0qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoHsrvOm1kt7%2BnjMircA2zgrdYqwlFQLsOhHTdFBjHAYyiecgs9wHcXytLgmpL4%2BNJOFy0VRuerkWuz%2FIAre%2BJQM4sEc1zv1zTVfcnnADtgF4EnHKFRbcCy4SZDbvubkTswpfJAotaq10ElL9vHeSG6XDl1U0gNbtKI6ulOS6k1fzQspcjQ2IDGrsitnNnq0xpB547hrVFRwfhgqNmsfGCF%2BVSnOHlQFAtdgBaSt22E5rsVi0marE4YniJpybE8r6g%2FHn%2FsM1HBNQbGDkFJlIcifu0ERrvWHp4zu43GJVc5Y0GppW9aPOxvAJzsPq7%2BDyC4dUIkqmN0r1wb%2Fg0unnf8UqTKxpSWQOuzHavHIcwlwtWOhAjMUnbLxDMqgnmDHRWLyf3m%2Be4ZjcBQ6idyn6gJ1osLnoI51I0q4d17z7f6i2uTPnXZT9FtjlFUlt%2BjAs3f9jLKWOmdXwMMQR3BxLPBD1E1wk66GxIniZbXXT42wP6DDqHZ%2BpdjpwpkfviHtqm9vrjlEnNN64i2I554RiE74RDk5EW0rLt6JnCMD7e%2BrtnmVWdJ5ytUGfNu5OvvieGMescge02rtJnk6lQ3cjzmLZiS2CLNkyd7OIdSBX3Y4u2rKumJPAC6q6v6fjxS7EzGRwVvX%2BqbciVrMPnohsEGOqUBisk%2Fb1Leed9aD%2BWbB%2BB0Td%2FLt1kRaVqHjMM2kGbxGrkSETp2Z9MXgH3Z9D0BNQU7y0XqlgkljA9ixXZG%2Bh8WdamrrfmL69b697uplwkgb938ifv%2BU0H6B9GiDLqZ%2FDRmLWDyj2qKEuewBHynN23cHr69SJLisP1%2F6P%2BlvvIPz808IjCWo8VLSBU0ZDJmC%2BX%2FZUxD62U3hTq2hsOCm6NbtpmU4Gwv&X-Amz-Signature=e1f8548ba45f560160ab4df8c1fe39916dc5cf1ea9f31584621588e506746df5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2YHTUT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICaLYSYx7fBPygqjvNESgK8Fnbqu9SRYDgwysBfpPBTlAiEAss1SH6F2NGI4I4BItAEEDsyl7hkb%2BcwRDxkqiSIe9u0qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoHsrvOm1kt7%2BnjMircA2zgrdYqwlFQLsOhHTdFBjHAYyiecgs9wHcXytLgmpL4%2BNJOFy0VRuerkWuz%2FIAre%2BJQM4sEc1zv1zTVfcnnADtgF4EnHKFRbcCy4SZDbvubkTswpfJAotaq10ElL9vHeSG6XDl1U0gNbtKI6ulOS6k1fzQspcjQ2IDGrsitnNnq0xpB547hrVFRwfhgqNmsfGCF%2BVSnOHlQFAtdgBaSt22E5rsVi0marE4YniJpybE8r6g%2FHn%2FsM1HBNQbGDkFJlIcifu0ERrvWHp4zu43GJVc5Y0GppW9aPOxvAJzsPq7%2BDyC4dUIkqmN0r1wb%2Fg0unnf8UqTKxpSWQOuzHavHIcwlwtWOhAjMUnbLxDMqgnmDHRWLyf3m%2Be4ZjcBQ6idyn6gJ1osLnoI51I0q4d17z7f6i2uTPnXZT9FtjlFUlt%2BjAs3f9jLKWOmdXwMMQR3BxLPBD1E1wk66GxIniZbXXT42wP6DDqHZ%2BpdjpwpkfviHtqm9vrjlEnNN64i2I554RiE74RDk5EW0rLt6JnCMD7e%2BrtnmVWdJ5ytUGfNu5OvvieGMescge02rtJnk6lQ3cjzmLZiS2CLNkyd7OIdSBX3Y4u2rKumJPAC6q6v6fjxS7EzGRwVvX%2BqbciVrMPnohsEGOqUBisk%2Fb1Leed9aD%2BWbB%2BB0Td%2FLt1kRaVqHjMM2kGbxGrkSETp2Z9MXgH3Z9D0BNQU7y0XqlgkljA9ixXZG%2Bh8WdamrrfmL69b697uplwkgb938ifv%2BU0H6B9GiDLqZ%2FDRmLWDyj2qKEuewBHynN23cHr69SJLisP1%2F6P%2BlvvIPz808IjCWo8VLSBU0ZDJmC%2BX%2FZUxD62U3hTq2hsOCm6NbtpmU4Gwv&X-Amz-Signature=f2dcac687ab26f7ad3e2e846407e66613484cab3bbfc01ddb2fb6c83a3f16222&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2YHTUT%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICaLYSYx7fBPygqjvNESgK8Fnbqu9SRYDgwysBfpPBTlAiEAss1SH6F2NGI4I4BItAEEDsyl7hkb%2BcwRDxkqiSIe9u0qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEoHsrvOm1kt7%2BnjMircA2zgrdYqwlFQLsOhHTdFBjHAYyiecgs9wHcXytLgmpL4%2BNJOFy0VRuerkWuz%2FIAre%2BJQM4sEc1zv1zTVfcnnADtgF4EnHKFRbcCy4SZDbvubkTswpfJAotaq10ElL9vHeSG6XDl1U0gNbtKI6ulOS6k1fzQspcjQ2IDGrsitnNnq0xpB547hrVFRwfhgqNmsfGCF%2BVSnOHlQFAtdgBaSt22E5rsVi0marE4YniJpybE8r6g%2FHn%2FsM1HBNQbGDkFJlIcifu0ERrvWHp4zu43GJVc5Y0GppW9aPOxvAJzsPq7%2BDyC4dUIkqmN0r1wb%2Fg0unnf8UqTKxpSWQOuzHavHIcwlwtWOhAjMUnbLxDMqgnmDHRWLyf3m%2Be4ZjcBQ6idyn6gJ1osLnoI51I0q4d17z7f6i2uTPnXZT9FtjlFUlt%2BjAs3f9jLKWOmdXwMMQR3BxLPBD1E1wk66GxIniZbXXT42wP6DDqHZ%2BpdjpwpkfviHtqm9vrjlEnNN64i2I554RiE74RDk5EW0rLt6JnCMD7e%2BrtnmVWdJ5ytUGfNu5OvvieGMescge02rtJnk6lQ3cjzmLZiS2CLNkyd7OIdSBX3Y4u2rKumJPAC6q6v6fjxS7EzGRwVvX%2BqbciVrMPnohsEGOqUBisk%2Fb1Leed9aD%2BWbB%2BB0Td%2FLt1kRaVqHjMM2kGbxGrkSETp2Z9MXgH3Z9D0BNQU7y0XqlgkljA9ixXZG%2Bh8WdamrrfmL69b697uplwkgb938ifv%2BU0H6B9GiDLqZ%2FDRmLWDyj2qKEuewBHynN23cHr69SJLisP1%2F6P%2BlvvIPz808IjCWo8VLSBU0ZDJmC%2BX%2FZUxD62U3hTq2hsOCm6NbtpmU4Gwv&X-Amz-Signature=c1701e42bf94155d4d79866b92e726a197bda12726831bcee183e5b09da54a60&X-Amz-SignedHeaders=host&x-id=GetObject)
