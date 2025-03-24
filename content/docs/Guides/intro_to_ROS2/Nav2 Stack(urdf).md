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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOH37BP%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAnPrh3PS6TQbOQsL8OaMIEHE3J944WZV0BAY1%2F%2F8X6AIgedShyeN1KmtJd5dGQ%2FsDrYDSIVw8JYnOYCPEzTYJuyQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRhkc%2F8QAX2fNe7eCrcA1LP0mL2z7n6w9oX8cyW%2FlmgptoOirFNH2RW%2F8xy1428BGKBWX7TARtPHJ%2BKU8gFw4NhHgrluoWhTK%2FQQ1EdmWsHWtM%2ByjDZRNjJzjzKHtF4j0n5%2B18tYgjMKAsYPuS7RF89EYuYZuLHKB93G8P9111pFEGaxn7JWhx5Z8eQSdnJeQkdwwUTyhP69Ax%2B8c%2Bvg3ptxRU961ZSLWHASYHgk2te1cKAQAuzy5PO%2FtzA%2BYODL0oQWUdn8vlOOZkwN6na18zC2lOK05eS0rx1hfIUY%2BgKFqkaSP%2BQ%2BWsfir%2FD4jJ87DcehnfJTASp2wCP9FtUxOleKDnh9qFG%2FHGr8oARPjM11Qz%2FdjqyOnleTVyIY0fN71k72k23z3Sco6a7I%2Fh8AXxkqHMhm9VUVbhFjMKrDMpotE%2FVNk87cFh%2BJeMP1ovosMOVyEGVTUNYea6dp0k76N423y1zzORA7dU2qhqsWsQf9BBXbXTQP6Gc8vlcEu%2Be1pNiSo8hI1rALM8qdQV4lqjcC%2Fs2pGFZBdjhl8ELL4YZ%2BLu4wr5q1wC0g2I%2BeCksF%2BpSW%2FvdaEBN84h8OzJNSjP%2FiqU3LhWYnkMe7vhOqmPBKGDPQWG0kvwwQXi2SSb5xsHKFTzAPBrBqalgMImxh78GOqUBu5DQh0ZFdsdamFAujlsBx4Tk0nwPphCSiuIaYB1aqcxh8CvLd3lmMs3xaLdL9g2iEEfGL%2B0CKsA7EnqfVaTgEX9TNzocrTKaUf4u2tfGhBadqOKBS%2FIZUpOI7lkEKSC8YtLyPGSFVU7paqlBli96OF52TaOXjZeYcjwipH8LecrVcSQPeTTz2kTyd6YBX0Pv1nHKykjwCDjtaNrChHumQ0aNOxab&X-Amz-Signature=7462a06d512f5287e879b6a085f84005794abb6d80e2e65f90a02023cfeeb8c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOH37BP%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAnPrh3PS6TQbOQsL8OaMIEHE3J944WZV0BAY1%2F%2F8X6AIgedShyeN1KmtJd5dGQ%2FsDrYDSIVw8JYnOYCPEzTYJuyQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRhkc%2F8QAX2fNe7eCrcA1LP0mL2z7n6w9oX8cyW%2FlmgptoOirFNH2RW%2F8xy1428BGKBWX7TARtPHJ%2BKU8gFw4NhHgrluoWhTK%2FQQ1EdmWsHWtM%2ByjDZRNjJzjzKHtF4j0n5%2B18tYgjMKAsYPuS7RF89EYuYZuLHKB93G8P9111pFEGaxn7JWhx5Z8eQSdnJeQkdwwUTyhP69Ax%2B8c%2Bvg3ptxRU961ZSLWHASYHgk2te1cKAQAuzy5PO%2FtzA%2BYODL0oQWUdn8vlOOZkwN6na18zC2lOK05eS0rx1hfIUY%2BgKFqkaSP%2BQ%2BWsfir%2FD4jJ87DcehnfJTASp2wCP9FtUxOleKDnh9qFG%2FHGr8oARPjM11Qz%2FdjqyOnleTVyIY0fN71k72k23z3Sco6a7I%2Fh8AXxkqHMhm9VUVbhFjMKrDMpotE%2FVNk87cFh%2BJeMP1ovosMOVyEGVTUNYea6dp0k76N423y1zzORA7dU2qhqsWsQf9BBXbXTQP6Gc8vlcEu%2Be1pNiSo8hI1rALM8qdQV4lqjcC%2Fs2pGFZBdjhl8ELL4YZ%2BLu4wr5q1wC0g2I%2BeCksF%2BpSW%2FvdaEBN84h8OzJNSjP%2FiqU3LhWYnkMe7vhOqmPBKGDPQWG0kvwwQXi2SSb5xsHKFTzAPBrBqalgMImxh78GOqUBu5DQh0ZFdsdamFAujlsBx4Tk0nwPphCSiuIaYB1aqcxh8CvLd3lmMs3xaLdL9g2iEEfGL%2B0CKsA7EnqfVaTgEX9TNzocrTKaUf4u2tfGhBadqOKBS%2FIZUpOI7lkEKSC8YtLyPGSFVU7paqlBli96OF52TaOXjZeYcjwipH8LecrVcSQPeTTz2kTyd6YBX0Pv1nHKykjwCDjtaNrChHumQ0aNOxab&X-Amz-Signature=6a94cd18756fcc8770749a66d3cf3df00a5aefffd57e9ad2cdf2ab48f5d03223&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOH37BP%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAnPrh3PS6TQbOQsL8OaMIEHE3J944WZV0BAY1%2F%2F8X6AIgedShyeN1KmtJd5dGQ%2FsDrYDSIVw8JYnOYCPEzTYJuyQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRhkc%2F8QAX2fNe7eCrcA1LP0mL2z7n6w9oX8cyW%2FlmgptoOirFNH2RW%2F8xy1428BGKBWX7TARtPHJ%2BKU8gFw4NhHgrluoWhTK%2FQQ1EdmWsHWtM%2ByjDZRNjJzjzKHtF4j0n5%2B18tYgjMKAsYPuS7RF89EYuYZuLHKB93G8P9111pFEGaxn7JWhx5Z8eQSdnJeQkdwwUTyhP69Ax%2B8c%2Bvg3ptxRU961ZSLWHASYHgk2te1cKAQAuzy5PO%2FtzA%2BYODL0oQWUdn8vlOOZkwN6na18zC2lOK05eS0rx1hfIUY%2BgKFqkaSP%2BQ%2BWsfir%2FD4jJ87DcehnfJTASp2wCP9FtUxOleKDnh9qFG%2FHGr8oARPjM11Qz%2FdjqyOnleTVyIY0fN71k72k23z3Sco6a7I%2Fh8AXxkqHMhm9VUVbhFjMKrDMpotE%2FVNk87cFh%2BJeMP1ovosMOVyEGVTUNYea6dp0k76N423y1zzORA7dU2qhqsWsQf9BBXbXTQP6Gc8vlcEu%2Be1pNiSo8hI1rALM8qdQV4lqjcC%2Fs2pGFZBdjhl8ELL4YZ%2BLu4wr5q1wC0g2I%2BeCksF%2BpSW%2FvdaEBN84h8OzJNSjP%2FiqU3LhWYnkMe7vhOqmPBKGDPQWG0kvwwQXi2SSb5xsHKFTzAPBrBqalgMImxh78GOqUBu5DQh0ZFdsdamFAujlsBx4Tk0nwPphCSiuIaYB1aqcxh8CvLd3lmMs3xaLdL9g2iEEfGL%2B0CKsA7EnqfVaTgEX9TNzocrTKaUf4u2tfGhBadqOKBS%2FIZUpOI7lkEKSC8YtLyPGSFVU7paqlBli96OF52TaOXjZeYcjwipH8LecrVcSQPeTTz2kTyd6YBX0Pv1nHKykjwCDjtaNrChHumQ0aNOxab&X-Amz-Signature=6188f94a78adc72d6c325683965fe98caf8a22d6828953e070d8d34a681c7ca3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOH37BP%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAnPrh3PS6TQbOQsL8OaMIEHE3J944WZV0BAY1%2F%2F8X6AIgedShyeN1KmtJd5dGQ%2FsDrYDSIVw8JYnOYCPEzTYJuyQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRhkc%2F8QAX2fNe7eCrcA1LP0mL2z7n6w9oX8cyW%2FlmgptoOirFNH2RW%2F8xy1428BGKBWX7TARtPHJ%2BKU8gFw4NhHgrluoWhTK%2FQQ1EdmWsHWtM%2ByjDZRNjJzjzKHtF4j0n5%2B18tYgjMKAsYPuS7RF89EYuYZuLHKB93G8P9111pFEGaxn7JWhx5Z8eQSdnJeQkdwwUTyhP69Ax%2B8c%2Bvg3ptxRU961ZSLWHASYHgk2te1cKAQAuzy5PO%2FtzA%2BYODL0oQWUdn8vlOOZkwN6na18zC2lOK05eS0rx1hfIUY%2BgKFqkaSP%2BQ%2BWsfir%2FD4jJ87DcehnfJTASp2wCP9FtUxOleKDnh9qFG%2FHGr8oARPjM11Qz%2FdjqyOnleTVyIY0fN71k72k23z3Sco6a7I%2Fh8AXxkqHMhm9VUVbhFjMKrDMpotE%2FVNk87cFh%2BJeMP1ovosMOVyEGVTUNYea6dp0k76N423y1zzORA7dU2qhqsWsQf9BBXbXTQP6Gc8vlcEu%2Be1pNiSo8hI1rALM8qdQV4lqjcC%2Fs2pGFZBdjhl8ELL4YZ%2BLu4wr5q1wC0g2I%2BeCksF%2BpSW%2FvdaEBN84h8OzJNSjP%2FiqU3LhWYnkMe7vhOqmPBKGDPQWG0kvwwQXi2SSb5xsHKFTzAPBrBqalgMImxh78GOqUBu5DQh0ZFdsdamFAujlsBx4Tk0nwPphCSiuIaYB1aqcxh8CvLd3lmMs3xaLdL9g2iEEfGL%2B0CKsA7EnqfVaTgEX9TNzocrTKaUf4u2tfGhBadqOKBS%2FIZUpOI7lkEKSC8YtLyPGSFVU7paqlBli96OF52TaOXjZeYcjwipH8LecrVcSQPeTTz2kTyd6YBX0Pv1nHKykjwCDjtaNrChHumQ0aNOxab&X-Amz-Signature=a2a7b0415fe8350d796928d46f531a691f39fddceb1c4be77f766819ee01b991&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOH37BP%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAnPrh3PS6TQbOQsL8OaMIEHE3J944WZV0BAY1%2F%2F8X6AIgedShyeN1KmtJd5dGQ%2FsDrYDSIVw8JYnOYCPEzTYJuyQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRhkc%2F8QAX2fNe7eCrcA1LP0mL2z7n6w9oX8cyW%2FlmgptoOirFNH2RW%2F8xy1428BGKBWX7TARtPHJ%2BKU8gFw4NhHgrluoWhTK%2FQQ1EdmWsHWtM%2ByjDZRNjJzjzKHtF4j0n5%2B18tYgjMKAsYPuS7RF89EYuYZuLHKB93G8P9111pFEGaxn7JWhx5Z8eQSdnJeQkdwwUTyhP69Ax%2B8c%2Bvg3ptxRU961ZSLWHASYHgk2te1cKAQAuzy5PO%2FtzA%2BYODL0oQWUdn8vlOOZkwN6na18zC2lOK05eS0rx1hfIUY%2BgKFqkaSP%2BQ%2BWsfir%2FD4jJ87DcehnfJTASp2wCP9FtUxOleKDnh9qFG%2FHGr8oARPjM11Qz%2FdjqyOnleTVyIY0fN71k72k23z3Sco6a7I%2Fh8AXxkqHMhm9VUVbhFjMKrDMpotE%2FVNk87cFh%2BJeMP1ovosMOVyEGVTUNYea6dp0k76N423y1zzORA7dU2qhqsWsQf9BBXbXTQP6Gc8vlcEu%2Be1pNiSo8hI1rALM8qdQV4lqjcC%2Fs2pGFZBdjhl8ELL4YZ%2BLu4wr5q1wC0g2I%2BeCksF%2BpSW%2FvdaEBN84h8OzJNSjP%2FiqU3LhWYnkMe7vhOqmPBKGDPQWG0kvwwQXi2SSb5xsHKFTzAPBrBqalgMImxh78GOqUBu5DQh0ZFdsdamFAujlsBx4Tk0nwPphCSiuIaYB1aqcxh8CvLd3lmMs3xaLdL9g2iEEfGL%2B0CKsA7EnqfVaTgEX9TNzocrTKaUf4u2tfGhBadqOKBS%2FIZUpOI7lkEKSC8YtLyPGSFVU7paqlBli96OF52TaOXjZeYcjwipH8LecrVcSQPeTTz2kTyd6YBX0Pv1nHKykjwCDjtaNrChHumQ0aNOxab&X-Amz-Signature=0b3d9bbcac73c5fbfe0c887b7f88f928b660b704e888410fd02e6e32a50777fb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROOH37BP%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAnPrh3PS6TQbOQsL8OaMIEHE3J944WZV0BAY1%2F%2F8X6AIgedShyeN1KmtJd5dGQ%2FsDrYDSIVw8JYnOYCPEzTYJuyQqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHRhkc%2F8QAX2fNe7eCrcA1LP0mL2z7n6w9oX8cyW%2FlmgptoOirFNH2RW%2F8xy1428BGKBWX7TARtPHJ%2BKU8gFw4NhHgrluoWhTK%2FQQ1EdmWsHWtM%2ByjDZRNjJzjzKHtF4j0n5%2B18tYgjMKAsYPuS7RF89EYuYZuLHKB93G8P9111pFEGaxn7JWhx5Z8eQSdnJeQkdwwUTyhP69Ax%2B8c%2Bvg3ptxRU961ZSLWHASYHgk2te1cKAQAuzy5PO%2FtzA%2BYODL0oQWUdn8vlOOZkwN6na18zC2lOK05eS0rx1hfIUY%2BgKFqkaSP%2BQ%2BWsfir%2FD4jJ87DcehnfJTASp2wCP9FtUxOleKDnh9qFG%2FHGr8oARPjM11Qz%2FdjqyOnleTVyIY0fN71k72k23z3Sco6a7I%2Fh8AXxkqHMhm9VUVbhFjMKrDMpotE%2FVNk87cFh%2BJeMP1ovosMOVyEGVTUNYea6dp0k76N423y1zzORA7dU2qhqsWsQf9BBXbXTQP6Gc8vlcEu%2Be1pNiSo8hI1rALM8qdQV4lqjcC%2Fs2pGFZBdjhl8ELL4YZ%2BLu4wr5q1wC0g2I%2BeCksF%2BpSW%2FvdaEBN84h8OzJNSjP%2FiqU3LhWYnkMe7vhOqmPBKGDPQWG0kvwwQXi2SSb5xsHKFTzAPBrBqalgMImxh78GOqUBu5DQh0ZFdsdamFAujlsBx4Tk0nwPphCSiuIaYB1aqcxh8CvLd3lmMs3xaLdL9g2iEEfGL%2B0CKsA7EnqfVaTgEX9TNzocrTKaUf4u2tfGhBadqOKBS%2FIZUpOI7lkEKSC8YtLyPGSFVU7paqlBli96OF52TaOXjZeYcjwipH8LecrVcSQPeTTz2kTyd6YBX0Pv1nHKykjwCDjtaNrChHumQ0aNOxab&X-Amz-Signature=90cb6759249733ef36fcf3d983e2b07be5a9e3dfd24e7d4c37ee8a564b07909d&X-Amz-SignedHeaders=host&x-id=GetObject)
