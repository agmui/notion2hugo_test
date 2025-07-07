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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTXTD4E%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHzEjjlS7heLOqAhOjdxB5Jik1mYThigaWb3Twd%2Ffp1BAiBfP8TBr3eyAGUD2T%2Ff5aLyKR2Xb9PG1NsJ5gS7NoVhuyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMFBYL%2Bg47jV6WzVXgKtwDfxM%2BrYcN6RSw%2BeE0wQiH4VkIjIMn7rD5BdS4K5suqNl62HTZFUkwmWqzYCbzEf68mnEjDTTRNgUFUpZyP4nOIeOw5kOnnlm%2BZ401zapy7mdj2Ejiqs71v6fh%2FySiAPcVfeX6D66Tdzq3cY132UpOLYbYHzSrS9P%2BLRogCRPgOeE7tjXc8HYdRlunzNykkq0hoQ%2Bm%2BlyyyjnyqUlb5nJT0Mg%2By5Za8q5iFz3%2Bww1faH6doUikmvXxT0CDkuUJlsZCmvt7XvhwMVGYUe4DcWMPgm1kKqc1Yh4ybIcFYgYZbOgdWapUJrKw8wEvHt1u8EeeydENFEVJz6qZgF8b%2FvLCQwng%2BEAUKxmPJL%2Fsoku0rqYBC5UWS37f93831hevLMDi86k27ybESJtbCmGbvNScnD0%2F3Agh9TthZ4SHt%2BG0WrQTRIY2O%2B8g%2FUIXAtkZsWY%2BoA5Xo1USYNxZzMc0r1iMJIl9OdBYx41dtekauVsYTqPrM5qarWg7Rb0Y3sEajZDiyY%2BZtRSsSUM2Vm3xDz5byYUFe9nmL7UAfMMrc3TicTVNebsJGbY02S1PQUpxLBnQ%2BhcIh%2FfWNVURkRyhecq88PUvkzuNFfMyK24S7kH4RLwOfNJaNEdneZVOlbow9%2FurwwY6pgHkiUDJ1QAWxyM0qSO2QD8ohzpnfzqzUXNU1hgsr7XfY3lCdmliKv8CWQCWwF2m9MDP8qgtJ3DQDxYSeHW7DCZrprpM2O68BqVDc%2Bsia6G1haL62F7whSdwu%2Bx3q%2Bv95QyOrdJvXu8NgvNnTMHKxb%2FBMRWas2Nb6shRS2hYYC8L8bwTN0nD5dwwXujq3ZfzUttAKJ%2FKud8eCw0tzWRQoxlGKQrIj8oz&X-Amz-Signature=6bd5f80a21e96bde9847331f8e8128b8ad128dafbd795d96127621d047ffd8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTXTD4E%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHzEjjlS7heLOqAhOjdxB5Jik1mYThigaWb3Twd%2Ffp1BAiBfP8TBr3eyAGUD2T%2Ff5aLyKR2Xb9PG1NsJ5gS7NoVhuyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMFBYL%2Bg47jV6WzVXgKtwDfxM%2BrYcN6RSw%2BeE0wQiH4VkIjIMn7rD5BdS4K5suqNl62HTZFUkwmWqzYCbzEf68mnEjDTTRNgUFUpZyP4nOIeOw5kOnnlm%2BZ401zapy7mdj2Ejiqs71v6fh%2FySiAPcVfeX6D66Tdzq3cY132UpOLYbYHzSrS9P%2BLRogCRPgOeE7tjXc8HYdRlunzNykkq0hoQ%2Bm%2BlyyyjnyqUlb5nJT0Mg%2By5Za8q5iFz3%2Bww1faH6doUikmvXxT0CDkuUJlsZCmvt7XvhwMVGYUe4DcWMPgm1kKqc1Yh4ybIcFYgYZbOgdWapUJrKw8wEvHt1u8EeeydENFEVJz6qZgF8b%2FvLCQwng%2BEAUKxmPJL%2Fsoku0rqYBC5UWS37f93831hevLMDi86k27ybESJtbCmGbvNScnD0%2F3Agh9TthZ4SHt%2BG0WrQTRIY2O%2B8g%2FUIXAtkZsWY%2BoA5Xo1USYNxZzMc0r1iMJIl9OdBYx41dtekauVsYTqPrM5qarWg7Rb0Y3sEajZDiyY%2BZtRSsSUM2Vm3xDz5byYUFe9nmL7UAfMMrc3TicTVNebsJGbY02S1PQUpxLBnQ%2BhcIh%2FfWNVURkRyhecq88PUvkzuNFfMyK24S7kH4RLwOfNJaNEdneZVOlbow9%2FurwwY6pgHkiUDJ1QAWxyM0qSO2QD8ohzpnfzqzUXNU1hgsr7XfY3lCdmliKv8CWQCWwF2m9MDP8qgtJ3DQDxYSeHW7DCZrprpM2O68BqVDc%2Bsia6G1haL62F7whSdwu%2Bx3q%2Bv95QyOrdJvXu8NgvNnTMHKxb%2FBMRWas2Nb6shRS2hYYC8L8bwTN0nD5dwwXujq3ZfzUttAKJ%2FKud8eCw0tzWRQoxlGKQrIj8oz&X-Amz-Signature=192aad1072befe0abd6ad44fe6f898b57f67921d8c0e3a81cd5ecb497f2e6c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTXTD4E%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHzEjjlS7heLOqAhOjdxB5Jik1mYThigaWb3Twd%2Ffp1BAiBfP8TBr3eyAGUD2T%2Ff5aLyKR2Xb9PG1NsJ5gS7NoVhuyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMFBYL%2Bg47jV6WzVXgKtwDfxM%2BrYcN6RSw%2BeE0wQiH4VkIjIMn7rD5BdS4K5suqNl62HTZFUkwmWqzYCbzEf68mnEjDTTRNgUFUpZyP4nOIeOw5kOnnlm%2BZ401zapy7mdj2Ejiqs71v6fh%2FySiAPcVfeX6D66Tdzq3cY132UpOLYbYHzSrS9P%2BLRogCRPgOeE7tjXc8HYdRlunzNykkq0hoQ%2Bm%2BlyyyjnyqUlb5nJT0Mg%2By5Za8q5iFz3%2Bww1faH6doUikmvXxT0CDkuUJlsZCmvt7XvhwMVGYUe4DcWMPgm1kKqc1Yh4ybIcFYgYZbOgdWapUJrKw8wEvHt1u8EeeydENFEVJz6qZgF8b%2FvLCQwng%2BEAUKxmPJL%2Fsoku0rqYBC5UWS37f93831hevLMDi86k27ybESJtbCmGbvNScnD0%2F3Agh9TthZ4SHt%2BG0WrQTRIY2O%2B8g%2FUIXAtkZsWY%2BoA5Xo1USYNxZzMc0r1iMJIl9OdBYx41dtekauVsYTqPrM5qarWg7Rb0Y3sEajZDiyY%2BZtRSsSUM2Vm3xDz5byYUFe9nmL7UAfMMrc3TicTVNebsJGbY02S1PQUpxLBnQ%2BhcIh%2FfWNVURkRyhecq88PUvkzuNFfMyK24S7kH4RLwOfNJaNEdneZVOlbow9%2FurwwY6pgHkiUDJ1QAWxyM0qSO2QD8ohzpnfzqzUXNU1hgsr7XfY3lCdmliKv8CWQCWwF2m9MDP8qgtJ3DQDxYSeHW7DCZrprpM2O68BqVDc%2Bsia6G1haL62F7whSdwu%2Bx3q%2Bv95QyOrdJvXu8NgvNnTMHKxb%2FBMRWas2Nb6shRS2hYYC8L8bwTN0nD5dwwXujq3ZfzUttAKJ%2FKud8eCw0tzWRQoxlGKQrIj8oz&X-Amz-Signature=31be958a6a9cd158d8673be8f2e56eb987bf6d00ec471223a6f0560894e7e505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTXTD4E%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHzEjjlS7heLOqAhOjdxB5Jik1mYThigaWb3Twd%2Ffp1BAiBfP8TBr3eyAGUD2T%2Ff5aLyKR2Xb9PG1NsJ5gS7NoVhuyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMFBYL%2Bg47jV6WzVXgKtwDfxM%2BrYcN6RSw%2BeE0wQiH4VkIjIMn7rD5BdS4K5suqNl62HTZFUkwmWqzYCbzEf68mnEjDTTRNgUFUpZyP4nOIeOw5kOnnlm%2BZ401zapy7mdj2Ejiqs71v6fh%2FySiAPcVfeX6D66Tdzq3cY132UpOLYbYHzSrS9P%2BLRogCRPgOeE7tjXc8HYdRlunzNykkq0hoQ%2Bm%2BlyyyjnyqUlb5nJT0Mg%2By5Za8q5iFz3%2Bww1faH6doUikmvXxT0CDkuUJlsZCmvt7XvhwMVGYUe4DcWMPgm1kKqc1Yh4ybIcFYgYZbOgdWapUJrKw8wEvHt1u8EeeydENFEVJz6qZgF8b%2FvLCQwng%2BEAUKxmPJL%2Fsoku0rqYBC5UWS37f93831hevLMDi86k27ybESJtbCmGbvNScnD0%2F3Agh9TthZ4SHt%2BG0WrQTRIY2O%2B8g%2FUIXAtkZsWY%2BoA5Xo1USYNxZzMc0r1iMJIl9OdBYx41dtekauVsYTqPrM5qarWg7Rb0Y3sEajZDiyY%2BZtRSsSUM2Vm3xDz5byYUFe9nmL7UAfMMrc3TicTVNebsJGbY02S1PQUpxLBnQ%2BhcIh%2FfWNVURkRyhecq88PUvkzuNFfMyK24S7kH4RLwOfNJaNEdneZVOlbow9%2FurwwY6pgHkiUDJ1QAWxyM0qSO2QD8ohzpnfzqzUXNU1hgsr7XfY3lCdmliKv8CWQCWwF2m9MDP8qgtJ3DQDxYSeHW7DCZrprpM2O68BqVDc%2Bsia6G1haL62F7whSdwu%2Bx3q%2Bv95QyOrdJvXu8NgvNnTMHKxb%2FBMRWas2Nb6shRS2hYYC8L8bwTN0nD5dwwXujq3ZfzUttAKJ%2FKud8eCw0tzWRQoxlGKQrIj8oz&X-Amz-Signature=9c71ec68025689f2b6ba46872335fb784248bc9d337d83d6e19df85eb872ed41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTXTD4E%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHzEjjlS7heLOqAhOjdxB5Jik1mYThigaWb3Twd%2Ffp1BAiBfP8TBr3eyAGUD2T%2Ff5aLyKR2Xb9PG1NsJ5gS7NoVhuyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMFBYL%2Bg47jV6WzVXgKtwDfxM%2BrYcN6RSw%2BeE0wQiH4VkIjIMn7rD5BdS4K5suqNl62HTZFUkwmWqzYCbzEf68mnEjDTTRNgUFUpZyP4nOIeOw5kOnnlm%2BZ401zapy7mdj2Ejiqs71v6fh%2FySiAPcVfeX6D66Tdzq3cY132UpOLYbYHzSrS9P%2BLRogCRPgOeE7tjXc8HYdRlunzNykkq0hoQ%2Bm%2BlyyyjnyqUlb5nJT0Mg%2By5Za8q5iFz3%2Bww1faH6doUikmvXxT0CDkuUJlsZCmvt7XvhwMVGYUe4DcWMPgm1kKqc1Yh4ybIcFYgYZbOgdWapUJrKw8wEvHt1u8EeeydENFEVJz6qZgF8b%2FvLCQwng%2BEAUKxmPJL%2Fsoku0rqYBC5UWS37f93831hevLMDi86k27ybESJtbCmGbvNScnD0%2F3Agh9TthZ4SHt%2BG0WrQTRIY2O%2B8g%2FUIXAtkZsWY%2BoA5Xo1USYNxZzMc0r1iMJIl9OdBYx41dtekauVsYTqPrM5qarWg7Rb0Y3sEajZDiyY%2BZtRSsSUM2Vm3xDz5byYUFe9nmL7UAfMMrc3TicTVNebsJGbY02S1PQUpxLBnQ%2BhcIh%2FfWNVURkRyhecq88PUvkzuNFfMyK24S7kH4RLwOfNJaNEdneZVOlbow9%2FurwwY6pgHkiUDJ1QAWxyM0qSO2QD8ohzpnfzqzUXNU1hgsr7XfY3lCdmliKv8CWQCWwF2m9MDP8qgtJ3DQDxYSeHW7DCZrprpM2O68BqVDc%2Bsia6G1haL62F7whSdwu%2Bx3q%2Bv95QyOrdJvXu8NgvNnTMHKxb%2FBMRWas2Nb6shRS2hYYC8L8bwTN0nD5dwwXujq3ZfzUttAKJ%2FKud8eCw0tzWRQoxlGKQrIj8oz&X-Amz-Signature=a3047268dde8b31fd5ce535f7722a0fd9955b74b4dea9afdbcab7f74f6b1765f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QTXTD4E%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIHzEjjlS7heLOqAhOjdxB5Jik1mYThigaWb3Twd%2Ffp1BAiBfP8TBr3eyAGUD2T%2Ff5aLyKR2Xb9PG1NsJ5gS7NoVhuyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMFBYL%2Bg47jV6WzVXgKtwDfxM%2BrYcN6RSw%2BeE0wQiH4VkIjIMn7rD5BdS4K5suqNl62HTZFUkwmWqzYCbzEf68mnEjDTTRNgUFUpZyP4nOIeOw5kOnnlm%2BZ401zapy7mdj2Ejiqs71v6fh%2FySiAPcVfeX6D66Tdzq3cY132UpOLYbYHzSrS9P%2BLRogCRPgOeE7tjXc8HYdRlunzNykkq0hoQ%2Bm%2BlyyyjnyqUlb5nJT0Mg%2By5Za8q5iFz3%2Bww1faH6doUikmvXxT0CDkuUJlsZCmvt7XvhwMVGYUe4DcWMPgm1kKqc1Yh4ybIcFYgYZbOgdWapUJrKw8wEvHt1u8EeeydENFEVJz6qZgF8b%2FvLCQwng%2BEAUKxmPJL%2Fsoku0rqYBC5UWS37f93831hevLMDi86k27ybESJtbCmGbvNScnD0%2F3Agh9TthZ4SHt%2BG0WrQTRIY2O%2B8g%2FUIXAtkZsWY%2BoA5Xo1USYNxZzMc0r1iMJIl9OdBYx41dtekauVsYTqPrM5qarWg7Rb0Y3sEajZDiyY%2BZtRSsSUM2Vm3xDz5byYUFe9nmL7UAfMMrc3TicTVNebsJGbY02S1PQUpxLBnQ%2BhcIh%2FfWNVURkRyhecq88PUvkzuNFfMyK24S7kH4RLwOfNJaNEdneZVOlbow9%2FurwwY6pgHkiUDJ1QAWxyM0qSO2QD8ohzpnfzqzUXNU1hgsr7XfY3lCdmliKv8CWQCWwF2m9MDP8qgtJ3DQDxYSeHW7DCZrprpM2O68BqVDc%2Bsia6G1haL62F7whSdwu%2Bx3q%2Bv95QyOrdJvXu8NgvNnTMHKxb%2FBMRWas2Nb6shRS2hYYC8L8bwTN0nD5dwwXujq3ZfzUttAKJ%2FKud8eCw0tzWRQoxlGKQrIj8oz&X-Amz-Signature=55fa6307fc6795916c56860a52c60fea88e254d0ab031fcad09bdf92e9bbdbbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
