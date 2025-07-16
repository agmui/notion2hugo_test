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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOZNOP2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBKR4p89pbJC4zsZUpDXoS3emaBxi9yMzYkiJByIWj3NAiEAoBEjoVDHeOjybov2KQ0tCMk%2F1o4s3loVJbcsGHQ8xjoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHf%2FsE%2B02aXTw71hMircA25637DlenqbS%2FPqACHglVTWLVei5sOGULSa583Pv%2B5h5vVThrJAhj4JAixXYgteWxJyR9sP7NCRk2Dx98q89hZI7WOwa0Fwom9QUhdqnE275A95VydxZ8QRyqCb1F%2FwG%2BNaABpnaHAylJfzsHnik%2FX7Lt10ywFnyD08vOp95D4CMeySuJjhGMWOccZF7bqGwXZuzidMDCyJA8UD8dqjopuZK8Ooe%2B9aL%2F1fRhFkI7hYorB6Us%2FbCNgsx8zpwCgqcp3zFKYTmaK1gkHX8Pl%2BB%2BXhGXPrDd%2BS%2B7VlxXkH16cPvLA0yorHjUp665exuGcQ1jsUev9mhdmlU9ekFNIdQGX7KclRZ8nazF8wlmjAxMVznyoMcTNJ7Z1rPjsLCdYMeTcQOQaD2qzvMjpgljxkRqj6JY%2Fv09myzFz2hdy%2Bqj9uncVN9P8OWcn2bVSUZ75bOrK5vjRIptZbDm8i%2BIWha3XGY3dVpt2rJDed2x2rJs9ftZaRY3IzdipRbqxhmLn5XVcPRK0758BKkdjBj7S11voIQMfzWrxRNeSJVwgovYq39SlDdmfKXwwawmtbeiAZchjBn9S%2B87jY5DhdR80tzDKGZisccZu%2FYdYZypX7%2BoiD37Of1u2xIGFaaIQXMPmt3MMGOqUBHf%2BKFvc1OSOP2FsRqHk1v1chvE7J2HemI%2FfIGjKFk6%2F74mXq4MMVgbCG72tVSnJpY%2F4iB7MGSR%2BgmuXo2z%2BdJDN%2BJislakU14bS6T2dh7Jjd2qIcxWriT6dUXqzL3IzX8lvHCvoZtk9EQJU4kaE%2B4SIqcg9p97fGw%2B%2FLnmxAC7SKGQPm26zy6E319D8yB9cmyzXhztvtdXr6sGeQKqbkeXjA2XU5&X-Amz-Signature=6b5d493ede05c0b01387ad1557faf4b5abcb8a625c55d165f3c858058eacd1dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOZNOP2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBKR4p89pbJC4zsZUpDXoS3emaBxi9yMzYkiJByIWj3NAiEAoBEjoVDHeOjybov2KQ0tCMk%2F1o4s3loVJbcsGHQ8xjoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHf%2FsE%2B02aXTw71hMircA25637DlenqbS%2FPqACHglVTWLVei5sOGULSa583Pv%2B5h5vVThrJAhj4JAixXYgteWxJyR9sP7NCRk2Dx98q89hZI7WOwa0Fwom9QUhdqnE275A95VydxZ8QRyqCb1F%2FwG%2BNaABpnaHAylJfzsHnik%2FX7Lt10ywFnyD08vOp95D4CMeySuJjhGMWOccZF7bqGwXZuzidMDCyJA8UD8dqjopuZK8Ooe%2B9aL%2F1fRhFkI7hYorB6Us%2FbCNgsx8zpwCgqcp3zFKYTmaK1gkHX8Pl%2BB%2BXhGXPrDd%2BS%2B7VlxXkH16cPvLA0yorHjUp665exuGcQ1jsUev9mhdmlU9ekFNIdQGX7KclRZ8nazF8wlmjAxMVznyoMcTNJ7Z1rPjsLCdYMeTcQOQaD2qzvMjpgljxkRqj6JY%2Fv09myzFz2hdy%2Bqj9uncVN9P8OWcn2bVSUZ75bOrK5vjRIptZbDm8i%2BIWha3XGY3dVpt2rJDed2x2rJs9ftZaRY3IzdipRbqxhmLn5XVcPRK0758BKkdjBj7S11voIQMfzWrxRNeSJVwgovYq39SlDdmfKXwwawmtbeiAZchjBn9S%2B87jY5DhdR80tzDKGZisccZu%2FYdYZypX7%2BoiD37Of1u2xIGFaaIQXMPmt3MMGOqUBHf%2BKFvc1OSOP2FsRqHk1v1chvE7J2HemI%2FfIGjKFk6%2F74mXq4MMVgbCG72tVSnJpY%2F4iB7MGSR%2BgmuXo2z%2BdJDN%2BJislakU14bS6T2dh7Jjd2qIcxWriT6dUXqzL3IzX8lvHCvoZtk9EQJU4kaE%2B4SIqcg9p97fGw%2B%2FLnmxAC7SKGQPm26zy6E319D8yB9cmyzXhztvtdXr6sGeQKqbkeXjA2XU5&X-Amz-Signature=516b52e5c3e6fd7ba15ef02226f0f6056b59fd5efb7e0d973c404b5927469b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOZNOP2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBKR4p89pbJC4zsZUpDXoS3emaBxi9yMzYkiJByIWj3NAiEAoBEjoVDHeOjybov2KQ0tCMk%2F1o4s3loVJbcsGHQ8xjoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHf%2FsE%2B02aXTw71hMircA25637DlenqbS%2FPqACHglVTWLVei5sOGULSa583Pv%2B5h5vVThrJAhj4JAixXYgteWxJyR9sP7NCRk2Dx98q89hZI7WOwa0Fwom9QUhdqnE275A95VydxZ8QRyqCb1F%2FwG%2BNaABpnaHAylJfzsHnik%2FX7Lt10ywFnyD08vOp95D4CMeySuJjhGMWOccZF7bqGwXZuzidMDCyJA8UD8dqjopuZK8Ooe%2B9aL%2F1fRhFkI7hYorB6Us%2FbCNgsx8zpwCgqcp3zFKYTmaK1gkHX8Pl%2BB%2BXhGXPrDd%2BS%2B7VlxXkH16cPvLA0yorHjUp665exuGcQ1jsUev9mhdmlU9ekFNIdQGX7KclRZ8nazF8wlmjAxMVznyoMcTNJ7Z1rPjsLCdYMeTcQOQaD2qzvMjpgljxkRqj6JY%2Fv09myzFz2hdy%2Bqj9uncVN9P8OWcn2bVSUZ75bOrK5vjRIptZbDm8i%2BIWha3XGY3dVpt2rJDed2x2rJs9ftZaRY3IzdipRbqxhmLn5XVcPRK0758BKkdjBj7S11voIQMfzWrxRNeSJVwgovYq39SlDdmfKXwwawmtbeiAZchjBn9S%2B87jY5DhdR80tzDKGZisccZu%2FYdYZypX7%2BoiD37Of1u2xIGFaaIQXMPmt3MMGOqUBHf%2BKFvc1OSOP2FsRqHk1v1chvE7J2HemI%2FfIGjKFk6%2F74mXq4MMVgbCG72tVSnJpY%2F4iB7MGSR%2BgmuXo2z%2BdJDN%2BJislakU14bS6T2dh7Jjd2qIcxWriT6dUXqzL3IzX8lvHCvoZtk9EQJU4kaE%2B4SIqcg9p97fGw%2B%2FLnmxAC7SKGQPm26zy6E319D8yB9cmyzXhztvtdXr6sGeQKqbkeXjA2XU5&X-Amz-Signature=1f6fad8f64557e54f846775c7189d894037d6265b4bd700a3c4f8bdbdcb9030b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOZNOP2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBKR4p89pbJC4zsZUpDXoS3emaBxi9yMzYkiJByIWj3NAiEAoBEjoVDHeOjybov2KQ0tCMk%2F1o4s3loVJbcsGHQ8xjoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHf%2FsE%2B02aXTw71hMircA25637DlenqbS%2FPqACHglVTWLVei5sOGULSa583Pv%2B5h5vVThrJAhj4JAixXYgteWxJyR9sP7NCRk2Dx98q89hZI7WOwa0Fwom9QUhdqnE275A95VydxZ8QRyqCb1F%2FwG%2BNaABpnaHAylJfzsHnik%2FX7Lt10ywFnyD08vOp95D4CMeySuJjhGMWOccZF7bqGwXZuzidMDCyJA8UD8dqjopuZK8Ooe%2B9aL%2F1fRhFkI7hYorB6Us%2FbCNgsx8zpwCgqcp3zFKYTmaK1gkHX8Pl%2BB%2BXhGXPrDd%2BS%2B7VlxXkH16cPvLA0yorHjUp665exuGcQ1jsUev9mhdmlU9ekFNIdQGX7KclRZ8nazF8wlmjAxMVznyoMcTNJ7Z1rPjsLCdYMeTcQOQaD2qzvMjpgljxkRqj6JY%2Fv09myzFz2hdy%2Bqj9uncVN9P8OWcn2bVSUZ75bOrK5vjRIptZbDm8i%2BIWha3XGY3dVpt2rJDed2x2rJs9ftZaRY3IzdipRbqxhmLn5XVcPRK0758BKkdjBj7S11voIQMfzWrxRNeSJVwgovYq39SlDdmfKXwwawmtbeiAZchjBn9S%2B87jY5DhdR80tzDKGZisccZu%2FYdYZypX7%2BoiD37Of1u2xIGFaaIQXMPmt3MMGOqUBHf%2BKFvc1OSOP2FsRqHk1v1chvE7J2HemI%2FfIGjKFk6%2F74mXq4MMVgbCG72tVSnJpY%2F4iB7MGSR%2BgmuXo2z%2BdJDN%2BJislakU14bS6T2dh7Jjd2qIcxWriT6dUXqzL3IzX8lvHCvoZtk9EQJU4kaE%2B4SIqcg9p97fGw%2B%2FLnmxAC7SKGQPm26zy6E319D8yB9cmyzXhztvtdXr6sGeQKqbkeXjA2XU5&X-Amz-Signature=31d58f73f049add8eef6526dd93fd67133500f246436d9102c07adf800333c82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOZNOP2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBKR4p89pbJC4zsZUpDXoS3emaBxi9yMzYkiJByIWj3NAiEAoBEjoVDHeOjybov2KQ0tCMk%2F1o4s3loVJbcsGHQ8xjoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHf%2FsE%2B02aXTw71hMircA25637DlenqbS%2FPqACHglVTWLVei5sOGULSa583Pv%2B5h5vVThrJAhj4JAixXYgteWxJyR9sP7NCRk2Dx98q89hZI7WOwa0Fwom9QUhdqnE275A95VydxZ8QRyqCb1F%2FwG%2BNaABpnaHAylJfzsHnik%2FX7Lt10ywFnyD08vOp95D4CMeySuJjhGMWOccZF7bqGwXZuzidMDCyJA8UD8dqjopuZK8Ooe%2B9aL%2F1fRhFkI7hYorB6Us%2FbCNgsx8zpwCgqcp3zFKYTmaK1gkHX8Pl%2BB%2BXhGXPrDd%2BS%2B7VlxXkH16cPvLA0yorHjUp665exuGcQ1jsUev9mhdmlU9ekFNIdQGX7KclRZ8nazF8wlmjAxMVznyoMcTNJ7Z1rPjsLCdYMeTcQOQaD2qzvMjpgljxkRqj6JY%2Fv09myzFz2hdy%2Bqj9uncVN9P8OWcn2bVSUZ75bOrK5vjRIptZbDm8i%2BIWha3XGY3dVpt2rJDed2x2rJs9ftZaRY3IzdipRbqxhmLn5XVcPRK0758BKkdjBj7S11voIQMfzWrxRNeSJVwgovYq39SlDdmfKXwwawmtbeiAZchjBn9S%2B87jY5DhdR80tzDKGZisccZu%2FYdYZypX7%2BoiD37Of1u2xIGFaaIQXMPmt3MMGOqUBHf%2BKFvc1OSOP2FsRqHk1v1chvE7J2HemI%2FfIGjKFk6%2F74mXq4MMVgbCG72tVSnJpY%2F4iB7MGSR%2BgmuXo2z%2BdJDN%2BJislakU14bS6T2dh7Jjd2qIcxWriT6dUXqzL3IzX8lvHCvoZtk9EQJU4kaE%2B4SIqcg9p97fGw%2B%2FLnmxAC7SKGQPm26zy6E319D8yB9cmyzXhztvtdXr6sGeQKqbkeXjA2XU5&X-Amz-Signature=5372d8aeb308eb7cfd3e113600963630a816641f464784424ce7819ee71de883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NOZNOP2%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T035224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIBKR4p89pbJC4zsZUpDXoS3emaBxi9yMzYkiJByIWj3NAiEAoBEjoVDHeOjybov2KQ0tCMk%2F1o4s3loVJbcsGHQ8xjoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHf%2FsE%2B02aXTw71hMircA25637DlenqbS%2FPqACHglVTWLVei5sOGULSa583Pv%2B5h5vVThrJAhj4JAixXYgteWxJyR9sP7NCRk2Dx98q89hZI7WOwa0Fwom9QUhdqnE275A95VydxZ8QRyqCb1F%2FwG%2BNaABpnaHAylJfzsHnik%2FX7Lt10ywFnyD08vOp95D4CMeySuJjhGMWOccZF7bqGwXZuzidMDCyJA8UD8dqjopuZK8Ooe%2B9aL%2F1fRhFkI7hYorB6Us%2FbCNgsx8zpwCgqcp3zFKYTmaK1gkHX8Pl%2BB%2BXhGXPrDd%2BS%2B7VlxXkH16cPvLA0yorHjUp665exuGcQ1jsUev9mhdmlU9ekFNIdQGX7KclRZ8nazF8wlmjAxMVznyoMcTNJ7Z1rPjsLCdYMeTcQOQaD2qzvMjpgljxkRqj6JY%2Fv09myzFz2hdy%2Bqj9uncVN9P8OWcn2bVSUZ75bOrK5vjRIptZbDm8i%2BIWha3XGY3dVpt2rJDed2x2rJs9ftZaRY3IzdipRbqxhmLn5XVcPRK0758BKkdjBj7S11voIQMfzWrxRNeSJVwgovYq39SlDdmfKXwwawmtbeiAZchjBn9S%2B87jY5DhdR80tzDKGZisccZu%2FYdYZypX7%2BoiD37Of1u2xIGFaaIQXMPmt3MMGOqUBHf%2BKFvc1OSOP2FsRqHk1v1chvE7J2HemI%2FfIGjKFk6%2F74mXq4MMVgbCG72tVSnJpY%2F4iB7MGSR%2BgmuXo2z%2BdJDN%2BJislakU14bS6T2dh7Jjd2qIcxWriT6dUXqzL3IzX8lvHCvoZtk9EQJU4kaE%2B4SIqcg9p97fGw%2B%2FLnmxAC7SKGQPm26zy6E319D8yB9cmyzXhztvtdXr6sGeQKqbkeXjA2XU5&X-Amz-Signature=ebb0275da9f44edf8f42f0f6e235f12e913cee3201ad10b4ee9d41a117ed855d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
