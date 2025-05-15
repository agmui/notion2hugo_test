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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7J3TC37%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDxqKp50aF6t2RtnSiKuKmZaHo4e1wecvSUO6OBwkhAwgIgXaX8xZRcB5JeLFLLHyWxyatNhpkWBa5Nj4uRgdNu6pcq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLiHxYvnpaYVn3oQaCrcA32p1tD2pbHyBxVaqCk%2B2UNblvr9XgIcM3x3pnlQPjzF0WXHCMg92R5UQjTX0R6zG%2BzM5YwsOw4RPzOhzz2jx59fVlVnGVbslRo8HEOfWk9WTbf8lVd%2B%2BQvzHqUgzCjl8aeQ%2BYCUQFydvTTYS0Sr4YpQ7kId1fE%2BgTlhj4Ch8J2XcrVFdoZ6JhZSJuMbk4jvFeWPDiLgVND%2BTuqqLtC1LmiiWY0FaipGywXuVj%2FviYjdysaultXJEs2tZW%2FjUGnQJfQ6p1Pw3jmLSq5aP3Pe%2FyTsyAVmte5LObujqGiaDeb9HfC%2Fs%2BjDdTj5Bki8I5Geygh9aEB21GQBdm9vT2fn7miVee50wCPvFi7gbM9D1ZxcBaO5oQ1e%2FT894mid8OzBJHxJrVBSwWfPd%2FUnkJ2rQjItUgHJh3%2FuHVNi8ahQFSbby6o98%2FH1k3kNmoi4Mp0v3k7hsEqmlleuT6cuYqQWLITvI%2Fe18vqK6a3iyBUQTyYBpTz4DoWktfvqGzA7kE5%2Fkp6qwEQWWcwS0Fo9KW8XohHduxYTlNxgCy4mRkeZqX6Yc4EElKd9ONZwCFxjTwUGbNB1agWzHCRiWldnC%2FRK0p9KGZoC%2BxBKxU1Qhg9DTQnsZn16G9NX78yALWwUMP3plcEGOqUBy4b4rdP5I0PnxZFGk7PksuduyYydisRdTNfnKOSvtHargQKO1XFel3JtQUxazev3rDhXXZLICedlEpzQMuDq%2FlQlCQ7ktlf0WbXaN0ApFP5BCr%2B6x%2B4mKIK7brj1DV63%2Bbqn4GL591g5DZ17ZoS1tR6gWlPXuQIVWYhGnTBg%2F9wBYXcLJTaqHoz3uyfc%2Fie8K9eEWyrj51k4QTm91pEc9MYA6etf&X-Amz-Signature=4ce31be8b53392cd5b98634e84a3242ad20e79476fe923665e39985bb8095504&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7J3TC37%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDxqKp50aF6t2RtnSiKuKmZaHo4e1wecvSUO6OBwkhAwgIgXaX8xZRcB5JeLFLLHyWxyatNhpkWBa5Nj4uRgdNu6pcq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLiHxYvnpaYVn3oQaCrcA32p1tD2pbHyBxVaqCk%2B2UNblvr9XgIcM3x3pnlQPjzF0WXHCMg92R5UQjTX0R6zG%2BzM5YwsOw4RPzOhzz2jx59fVlVnGVbslRo8HEOfWk9WTbf8lVd%2B%2BQvzHqUgzCjl8aeQ%2BYCUQFydvTTYS0Sr4YpQ7kId1fE%2BgTlhj4Ch8J2XcrVFdoZ6JhZSJuMbk4jvFeWPDiLgVND%2BTuqqLtC1LmiiWY0FaipGywXuVj%2FviYjdysaultXJEs2tZW%2FjUGnQJfQ6p1Pw3jmLSq5aP3Pe%2FyTsyAVmte5LObujqGiaDeb9HfC%2Fs%2BjDdTj5Bki8I5Geygh9aEB21GQBdm9vT2fn7miVee50wCPvFi7gbM9D1ZxcBaO5oQ1e%2FT894mid8OzBJHxJrVBSwWfPd%2FUnkJ2rQjItUgHJh3%2FuHVNi8ahQFSbby6o98%2FH1k3kNmoi4Mp0v3k7hsEqmlleuT6cuYqQWLITvI%2Fe18vqK6a3iyBUQTyYBpTz4DoWktfvqGzA7kE5%2Fkp6qwEQWWcwS0Fo9KW8XohHduxYTlNxgCy4mRkeZqX6Yc4EElKd9ONZwCFxjTwUGbNB1agWzHCRiWldnC%2FRK0p9KGZoC%2BxBKxU1Qhg9DTQnsZn16G9NX78yALWwUMP3plcEGOqUBy4b4rdP5I0PnxZFGk7PksuduyYydisRdTNfnKOSvtHargQKO1XFel3JtQUxazev3rDhXXZLICedlEpzQMuDq%2FlQlCQ7ktlf0WbXaN0ApFP5BCr%2B6x%2B4mKIK7brj1DV63%2Bbqn4GL591g5DZ17ZoS1tR6gWlPXuQIVWYhGnTBg%2F9wBYXcLJTaqHoz3uyfc%2Fie8K9eEWyrj51k4QTm91pEc9MYA6etf&X-Amz-Signature=de78ceade5e82baa9ca3faf497f5928c3fce0c87f2a762b1d02e9bbea5ee01d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7J3TC37%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDxqKp50aF6t2RtnSiKuKmZaHo4e1wecvSUO6OBwkhAwgIgXaX8xZRcB5JeLFLLHyWxyatNhpkWBa5Nj4uRgdNu6pcq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLiHxYvnpaYVn3oQaCrcA32p1tD2pbHyBxVaqCk%2B2UNblvr9XgIcM3x3pnlQPjzF0WXHCMg92R5UQjTX0R6zG%2BzM5YwsOw4RPzOhzz2jx59fVlVnGVbslRo8HEOfWk9WTbf8lVd%2B%2BQvzHqUgzCjl8aeQ%2BYCUQFydvTTYS0Sr4YpQ7kId1fE%2BgTlhj4Ch8J2XcrVFdoZ6JhZSJuMbk4jvFeWPDiLgVND%2BTuqqLtC1LmiiWY0FaipGywXuVj%2FviYjdysaultXJEs2tZW%2FjUGnQJfQ6p1Pw3jmLSq5aP3Pe%2FyTsyAVmte5LObujqGiaDeb9HfC%2Fs%2BjDdTj5Bki8I5Geygh9aEB21GQBdm9vT2fn7miVee50wCPvFi7gbM9D1ZxcBaO5oQ1e%2FT894mid8OzBJHxJrVBSwWfPd%2FUnkJ2rQjItUgHJh3%2FuHVNi8ahQFSbby6o98%2FH1k3kNmoi4Mp0v3k7hsEqmlleuT6cuYqQWLITvI%2Fe18vqK6a3iyBUQTyYBpTz4DoWktfvqGzA7kE5%2Fkp6qwEQWWcwS0Fo9KW8XohHduxYTlNxgCy4mRkeZqX6Yc4EElKd9ONZwCFxjTwUGbNB1agWzHCRiWldnC%2FRK0p9KGZoC%2BxBKxU1Qhg9DTQnsZn16G9NX78yALWwUMP3plcEGOqUBy4b4rdP5I0PnxZFGk7PksuduyYydisRdTNfnKOSvtHargQKO1XFel3JtQUxazev3rDhXXZLICedlEpzQMuDq%2FlQlCQ7ktlf0WbXaN0ApFP5BCr%2B6x%2B4mKIK7brj1DV63%2Bbqn4GL591g5DZ17ZoS1tR6gWlPXuQIVWYhGnTBg%2F9wBYXcLJTaqHoz3uyfc%2Fie8K9eEWyrj51k4QTm91pEc9MYA6etf&X-Amz-Signature=b13e15bc4cd2892c468e91e589be211be6ca739dbf820e6a00e845a35d4e67b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7J3TC37%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDxqKp50aF6t2RtnSiKuKmZaHo4e1wecvSUO6OBwkhAwgIgXaX8xZRcB5JeLFLLHyWxyatNhpkWBa5Nj4uRgdNu6pcq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLiHxYvnpaYVn3oQaCrcA32p1tD2pbHyBxVaqCk%2B2UNblvr9XgIcM3x3pnlQPjzF0WXHCMg92R5UQjTX0R6zG%2BzM5YwsOw4RPzOhzz2jx59fVlVnGVbslRo8HEOfWk9WTbf8lVd%2B%2BQvzHqUgzCjl8aeQ%2BYCUQFydvTTYS0Sr4YpQ7kId1fE%2BgTlhj4Ch8J2XcrVFdoZ6JhZSJuMbk4jvFeWPDiLgVND%2BTuqqLtC1LmiiWY0FaipGywXuVj%2FviYjdysaultXJEs2tZW%2FjUGnQJfQ6p1Pw3jmLSq5aP3Pe%2FyTsyAVmte5LObujqGiaDeb9HfC%2Fs%2BjDdTj5Bki8I5Geygh9aEB21GQBdm9vT2fn7miVee50wCPvFi7gbM9D1ZxcBaO5oQ1e%2FT894mid8OzBJHxJrVBSwWfPd%2FUnkJ2rQjItUgHJh3%2FuHVNi8ahQFSbby6o98%2FH1k3kNmoi4Mp0v3k7hsEqmlleuT6cuYqQWLITvI%2Fe18vqK6a3iyBUQTyYBpTz4DoWktfvqGzA7kE5%2Fkp6qwEQWWcwS0Fo9KW8XohHduxYTlNxgCy4mRkeZqX6Yc4EElKd9ONZwCFxjTwUGbNB1agWzHCRiWldnC%2FRK0p9KGZoC%2BxBKxU1Qhg9DTQnsZn16G9NX78yALWwUMP3plcEGOqUBy4b4rdP5I0PnxZFGk7PksuduyYydisRdTNfnKOSvtHargQKO1XFel3JtQUxazev3rDhXXZLICedlEpzQMuDq%2FlQlCQ7ktlf0WbXaN0ApFP5BCr%2B6x%2B4mKIK7brj1DV63%2Bbqn4GL591g5DZ17ZoS1tR6gWlPXuQIVWYhGnTBg%2F9wBYXcLJTaqHoz3uyfc%2Fie8K9eEWyrj51k4QTm91pEc9MYA6etf&X-Amz-Signature=36435bb73b4adec1d9e8d3964c70a4cfcd92cb89e24b50f1fd875a3a4005b529&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7J3TC37%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDxqKp50aF6t2RtnSiKuKmZaHo4e1wecvSUO6OBwkhAwgIgXaX8xZRcB5JeLFLLHyWxyatNhpkWBa5Nj4uRgdNu6pcq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLiHxYvnpaYVn3oQaCrcA32p1tD2pbHyBxVaqCk%2B2UNblvr9XgIcM3x3pnlQPjzF0WXHCMg92R5UQjTX0R6zG%2BzM5YwsOw4RPzOhzz2jx59fVlVnGVbslRo8HEOfWk9WTbf8lVd%2B%2BQvzHqUgzCjl8aeQ%2BYCUQFydvTTYS0Sr4YpQ7kId1fE%2BgTlhj4Ch8J2XcrVFdoZ6JhZSJuMbk4jvFeWPDiLgVND%2BTuqqLtC1LmiiWY0FaipGywXuVj%2FviYjdysaultXJEs2tZW%2FjUGnQJfQ6p1Pw3jmLSq5aP3Pe%2FyTsyAVmte5LObujqGiaDeb9HfC%2Fs%2BjDdTj5Bki8I5Geygh9aEB21GQBdm9vT2fn7miVee50wCPvFi7gbM9D1ZxcBaO5oQ1e%2FT894mid8OzBJHxJrVBSwWfPd%2FUnkJ2rQjItUgHJh3%2FuHVNi8ahQFSbby6o98%2FH1k3kNmoi4Mp0v3k7hsEqmlleuT6cuYqQWLITvI%2Fe18vqK6a3iyBUQTyYBpTz4DoWktfvqGzA7kE5%2Fkp6qwEQWWcwS0Fo9KW8XohHduxYTlNxgCy4mRkeZqX6Yc4EElKd9ONZwCFxjTwUGbNB1agWzHCRiWldnC%2FRK0p9KGZoC%2BxBKxU1Qhg9DTQnsZn16G9NX78yALWwUMP3plcEGOqUBy4b4rdP5I0PnxZFGk7PksuduyYydisRdTNfnKOSvtHargQKO1XFel3JtQUxazev3rDhXXZLICedlEpzQMuDq%2FlQlCQ7ktlf0WbXaN0ApFP5BCr%2B6x%2B4mKIK7brj1DV63%2Bbqn4GL591g5DZ17ZoS1tR6gWlPXuQIVWYhGnTBg%2F9wBYXcLJTaqHoz3uyfc%2Fie8K9eEWyrj51k4QTm91pEc9MYA6etf&X-Amz-Signature=a17237920c8306ac1ed7b3531e833eaa5c3adaf49072ed1fdd1ab89da39adc6d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7J3TC37%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T050959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDxqKp50aF6t2RtnSiKuKmZaHo4e1wecvSUO6OBwkhAwgIgXaX8xZRcB5JeLFLLHyWxyatNhpkWBa5Nj4uRgdNu6pcq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLiHxYvnpaYVn3oQaCrcA32p1tD2pbHyBxVaqCk%2B2UNblvr9XgIcM3x3pnlQPjzF0WXHCMg92R5UQjTX0R6zG%2BzM5YwsOw4RPzOhzz2jx59fVlVnGVbslRo8HEOfWk9WTbf8lVd%2B%2BQvzHqUgzCjl8aeQ%2BYCUQFydvTTYS0Sr4YpQ7kId1fE%2BgTlhj4Ch8J2XcrVFdoZ6JhZSJuMbk4jvFeWPDiLgVND%2BTuqqLtC1LmiiWY0FaipGywXuVj%2FviYjdysaultXJEs2tZW%2FjUGnQJfQ6p1Pw3jmLSq5aP3Pe%2FyTsyAVmte5LObujqGiaDeb9HfC%2Fs%2BjDdTj5Bki8I5Geygh9aEB21GQBdm9vT2fn7miVee50wCPvFi7gbM9D1ZxcBaO5oQ1e%2FT894mid8OzBJHxJrVBSwWfPd%2FUnkJ2rQjItUgHJh3%2FuHVNi8ahQFSbby6o98%2FH1k3kNmoi4Mp0v3k7hsEqmlleuT6cuYqQWLITvI%2Fe18vqK6a3iyBUQTyYBpTz4DoWktfvqGzA7kE5%2Fkp6qwEQWWcwS0Fo9KW8XohHduxYTlNxgCy4mRkeZqX6Yc4EElKd9ONZwCFxjTwUGbNB1agWzHCRiWldnC%2FRK0p9KGZoC%2BxBKxU1Qhg9DTQnsZn16G9NX78yALWwUMP3plcEGOqUBy4b4rdP5I0PnxZFGk7PksuduyYydisRdTNfnKOSvtHargQKO1XFel3JtQUxazev3rDhXXZLICedlEpzQMuDq%2FlQlCQ7ktlf0WbXaN0ApFP5BCr%2B6x%2B4mKIK7brj1DV63%2Bbqn4GL591g5DZ17ZoS1tR6gWlPXuQIVWYhGnTBg%2F9wBYXcLJTaqHoz3uyfc%2Fie8K9eEWyrj51k4QTm91pEc9MYA6etf&X-Amz-Signature=fc382db5e78e4ad7395c0e9f2496e6be9affca1563bd13b527c5af70e4302e7a&X-Amz-SignedHeaders=host&x-id=GetObject)
