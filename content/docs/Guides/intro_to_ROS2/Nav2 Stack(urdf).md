---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2YBA5A%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIEQEh9AYVxhwKDzxQqHdzFVN0rD8d3n4p1l3SKILTwJTAiARbyhpxpeXZlJBwAOZa6uIeEIAXHWBkRH7jZ6TQWedcyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMPMnIHZzwqvimazakKtwDzsovnKdRp2J%2Ffr3gBrydCoc4bH07ryPK7xivKLW7AoMRRlngvdtgdHj7%2BfEM6jMIJE%2Fi5TMdnGzVYLvM8ySB9mm%2Fr7SrGU3KP09v95d1bijn6mOAGEwn6ZJn0eJCzHLAqUufLDD6fH1lw4DGHLsknXSERP7iGBqTOBnTDXtfhycK0sby5me5WgiadQgWM1dMTDX6mgHeA9skOkKBGbb%2FoFouTAbW9g9WGmNnv6BQNxnM7kbemNZdmsZR7NA61K04jjHCZ1Bnm9aT2y5PFJCQVWG5lvrGRDUt6rWsuaZ2lld1Ioy94gNoTSRgBsuVbQJaiT5%2F5T2kdc%2FLJvoQ9%2FnxBte7IDjhlwGBt0mMFWMDSVG6MK1nZjflbb0%2FJy7QjACnlAZisphBfFIibcnS7N7fnRpUdJ59zUqzOLm7PXXGA0KcRT5DrXejxyuF9hSMZfQA39%2B0wyiAnH6KewW8dVt7RltETqbiS6a1VmLtsnXiLPoPUrKhRGi4kBqH6N0nKmOAMj0Fshmzt9wRGDZJTe7I%2FpDTYvwErc4RE2M2ErV%2FGhhwN0EWhGbudmrqOXkDZmvATpZfmBMtG29WB8DN2dBWwnAekF0SlifDBTfCfwK9ib3l9ZdJ7sTPDSVb480w%2B76IvQY6pgFvfvrqmIbMKaDLfesjzgX%2BxxTNo2h2IzTjDGQObMjDAzx5lmiHfTm%2Fj2hXG%2B1zfNVVarC2qggoAA7uSRZsT3tJUkyx3A6qxssQm%2FanawKkw8xsSxWBxnQtDCHKHfT7GsnRTGduU%2Bt63SCFkQDaJnYK75doqY2H%2FgP5gFVBNd73UB8y7D2feeCthXlXt8IxWwO9qvk13QnAeZ7yu708lgMDwPPs3es3&X-Amz-Signature=76ad8100a813f6f77ef24ffca4cbaa0e137ed0bca9de59aee633ec1642d5e4b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2YBA5A%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIEQEh9AYVxhwKDzxQqHdzFVN0rD8d3n4p1l3SKILTwJTAiARbyhpxpeXZlJBwAOZa6uIeEIAXHWBkRH7jZ6TQWedcyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMPMnIHZzwqvimazakKtwDzsovnKdRp2J%2Ffr3gBrydCoc4bH07ryPK7xivKLW7AoMRRlngvdtgdHj7%2BfEM6jMIJE%2Fi5TMdnGzVYLvM8ySB9mm%2Fr7SrGU3KP09v95d1bijn6mOAGEwn6ZJn0eJCzHLAqUufLDD6fH1lw4DGHLsknXSERP7iGBqTOBnTDXtfhycK0sby5me5WgiadQgWM1dMTDX6mgHeA9skOkKBGbb%2FoFouTAbW9g9WGmNnv6BQNxnM7kbemNZdmsZR7NA61K04jjHCZ1Bnm9aT2y5PFJCQVWG5lvrGRDUt6rWsuaZ2lld1Ioy94gNoTSRgBsuVbQJaiT5%2F5T2kdc%2FLJvoQ9%2FnxBte7IDjhlwGBt0mMFWMDSVG6MK1nZjflbb0%2FJy7QjACnlAZisphBfFIibcnS7N7fnRpUdJ59zUqzOLm7PXXGA0KcRT5DrXejxyuF9hSMZfQA39%2B0wyiAnH6KewW8dVt7RltETqbiS6a1VmLtsnXiLPoPUrKhRGi4kBqH6N0nKmOAMj0Fshmzt9wRGDZJTe7I%2FpDTYvwErc4RE2M2ErV%2FGhhwN0EWhGbudmrqOXkDZmvATpZfmBMtG29WB8DN2dBWwnAekF0SlifDBTfCfwK9ib3l9ZdJ7sTPDSVb480w%2B76IvQY6pgFvfvrqmIbMKaDLfesjzgX%2BxxTNo2h2IzTjDGQObMjDAzx5lmiHfTm%2Fj2hXG%2B1zfNVVarC2qggoAA7uSRZsT3tJUkyx3A6qxssQm%2FanawKkw8xsSxWBxnQtDCHKHfT7GsnRTGduU%2Bt63SCFkQDaJnYK75doqY2H%2FgP5gFVBNd73UB8y7D2feeCthXlXt8IxWwO9qvk13QnAeZ7yu708lgMDwPPs3es3&X-Amz-Signature=e98f5e13480bc4ad7928b93ef52d9c412393cad61b5420a66ff1bc2c5e208b17&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2YBA5A%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIEQEh9AYVxhwKDzxQqHdzFVN0rD8d3n4p1l3SKILTwJTAiARbyhpxpeXZlJBwAOZa6uIeEIAXHWBkRH7jZ6TQWedcyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMPMnIHZzwqvimazakKtwDzsovnKdRp2J%2Ffr3gBrydCoc4bH07ryPK7xivKLW7AoMRRlngvdtgdHj7%2BfEM6jMIJE%2Fi5TMdnGzVYLvM8ySB9mm%2Fr7SrGU3KP09v95d1bijn6mOAGEwn6ZJn0eJCzHLAqUufLDD6fH1lw4DGHLsknXSERP7iGBqTOBnTDXtfhycK0sby5me5WgiadQgWM1dMTDX6mgHeA9skOkKBGbb%2FoFouTAbW9g9WGmNnv6BQNxnM7kbemNZdmsZR7NA61K04jjHCZ1Bnm9aT2y5PFJCQVWG5lvrGRDUt6rWsuaZ2lld1Ioy94gNoTSRgBsuVbQJaiT5%2F5T2kdc%2FLJvoQ9%2FnxBte7IDjhlwGBt0mMFWMDSVG6MK1nZjflbb0%2FJy7QjACnlAZisphBfFIibcnS7N7fnRpUdJ59zUqzOLm7PXXGA0KcRT5DrXejxyuF9hSMZfQA39%2B0wyiAnH6KewW8dVt7RltETqbiS6a1VmLtsnXiLPoPUrKhRGi4kBqH6N0nKmOAMj0Fshmzt9wRGDZJTe7I%2FpDTYvwErc4RE2M2ErV%2FGhhwN0EWhGbudmrqOXkDZmvATpZfmBMtG29WB8DN2dBWwnAekF0SlifDBTfCfwK9ib3l9ZdJ7sTPDSVb480w%2B76IvQY6pgFvfvrqmIbMKaDLfesjzgX%2BxxTNo2h2IzTjDGQObMjDAzx5lmiHfTm%2Fj2hXG%2B1zfNVVarC2qggoAA7uSRZsT3tJUkyx3A6qxssQm%2FanawKkw8xsSxWBxnQtDCHKHfT7GsnRTGduU%2Bt63SCFkQDaJnYK75doqY2H%2FgP5gFVBNd73UB8y7D2feeCthXlXt8IxWwO9qvk13QnAeZ7yu708lgMDwPPs3es3&X-Amz-Signature=70dbb8f8c46c8175d0229dc2b7ec41b5ed29784291c7e308139a7485de3ac50f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2YBA5A%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIEQEh9AYVxhwKDzxQqHdzFVN0rD8d3n4p1l3SKILTwJTAiARbyhpxpeXZlJBwAOZa6uIeEIAXHWBkRH7jZ6TQWedcyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMPMnIHZzwqvimazakKtwDzsovnKdRp2J%2Ffr3gBrydCoc4bH07ryPK7xivKLW7AoMRRlngvdtgdHj7%2BfEM6jMIJE%2Fi5TMdnGzVYLvM8ySB9mm%2Fr7SrGU3KP09v95d1bijn6mOAGEwn6ZJn0eJCzHLAqUufLDD6fH1lw4DGHLsknXSERP7iGBqTOBnTDXtfhycK0sby5me5WgiadQgWM1dMTDX6mgHeA9skOkKBGbb%2FoFouTAbW9g9WGmNnv6BQNxnM7kbemNZdmsZR7NA61K04jjHCZ1Bnm9aT2y5PFJCQVWG5lvrGRDUt6rWsuaZ2lld1Ioy94gNoTSRgBsuVbQJaiT5%2F5T2kdc%2FLJvoQ9%2FnxBte7IDjhlwGBt0mMFWMDSVG6MK1nZjflbb0%2FJy7QjACnlAZisphBfFIibcnS7N7fnRpUdJ59zUqzOLm7PXXGA0KcRT5DrXejxyuF9hSMZfQA39%2B0wyiAnH6KewW8dVt7RltETqbiS6a1VmLtsnXiLPoPUrKhRGi4kBqH6N0nKmOAMj0Fshmzt9wRGDZJTe7I%2FpDTYvwErc4RE2M2ErV%2FGhhwN0EWhGbudmrqOXkDZmvATpZfmBMtG29WB8DN2dBWwnAekF0SlifDBTfCfwK9ib3l9ZdJ7sTPDSVb480w%2B76IvQY6pgFvfvrqmIbMKaDLfesjzgX%2BxxTNo2h2IzTjDGQObMjDAzx5lmiHfTm%2Fj2hXG%2B1zfNVVarC2qggoAA7uSRZsT3tJUkyx3A6qxssQm%2FanawKkw8xsSxWBxnQtDCHKHfT7GsnRTGduU%2Bt63SCFkQDaJnYK75doqY2H%2FgP5gFVBNd73UB8y7D2feeCthXlXt8IxWwO9qvk13QnAeZ7yu708lgMDwPPs3es3&X-Amz-Signature=ecf86c392821849efa887b21baf212bdec48a30aee915bff7726bdfc68110fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2YBA5A%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIEQEh9AYVxhwKDzxQqHdzFVN0rD8d3n4p1l3SKILTwJTAiARbyhpxpeXZlJBwAOZa6uIeEIAXHWBkRH7jZ6TQWedcyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMPMnIHZzwqvimazakKtwDzsovnKdRp2J%2Ffr3gBrydCoc4bH07ryPK7xivKLW7AoMRRlngvdtgdHj7%2BfEM6jMIJE%2Fi5TMdnGzVYLvM8ySB9mm%2Fr7SrGU3KP09v95d1bijn6mOAGEwn6ZJn0eJCzHLAqUufLDD6fH1lw4DGHLsknXSERP7iGBqTOBnTDXtfhycK0sby5me5WgiadQgWM1dMTDX6mgHeA9skOkKBGbb%2FoFouTAbW9g9WGmNnv6BQNxnM7kbemNZdmsZR7NA61K04jjHCZ1Bnm9aT2y5PFJCQVWG5lvrGRDUt6rWsuaZ2lld1Ioy94gNoTSRgBsuVbQJaiT5%2F5T2kdc%2FLJvoQ9%2FnxBte7IDjhlwGBt0mMFWMDSVG6MK1nZjflbb0%2FJy7QjACnlAZisphBfFIibcnS7N7fnRpUdJ59zUqzOLm7PXXGA0KcRT5DrXejxyuF9hSMZfQA39%2B0wyiAnH6KewW8dVt7RltETqbiS6a1VmLtsnXiLPoPUrKhRGi4kBqH6N0nKmOAMj0Fshmzt9wRGDZJTe7I%2FpDTYvwErc4RE2M2ErV%2FGhhwN0EWhGbudmrqOXkDZmvATpZfmBMtG29WB8DN2dBWwnAekF0SlifDBTfCfwK9ib3l9ZdJ7sTPDSVb480w%2B76IvQY6pgFvfvrqmIbMKaDLfesjzgX%2BxxTNo2h2IzTjDGQObMjDAzx5lmiHfTm%2Fj2hXG%2B1zfNVVarC2qggoAA7uSRZsT3tJUkyx3A6qxssQm%2FanawKkw8xsSxWBxnQtDCHKHfT7GsnRTGduU%2Bt63SCFkQDaJnYK75doqY2H%2FgP5gFVBNd73UB8y7D2feeCthXlXt8IxWwO9qvk13QnAeZ7yu708lgMDwPPs3es3&X-Amz-Signature=b630979702f7a2feccbd591b802f633436bacf138d10797a254a87705d122cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2YBA5A%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIEQEh9AYVxhwKDzxQqHdzFVN0rD8d3n4p1l3SKILTwJTAiARbyhpxpeXZlJBwAOZa6uIeEIAXHWBkRH7jZ6TQWedcyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMPMnIHZzwqvimazakKtwDzsovnKdRp2J%2Ffr3gBrydCoc4bH07ryPK7xivKLW7AoMRRlngvdtgdHj7%2BfEM6jMIJE%2Fi5TMdnGzVYLvM8ySB9mm%2Fr7SrGU3KP09v95d1bijn6mOAGEwn6ZJn0eJCzHLAqUufLDD6fH1lw4DGHLsknXSERP7iGBqTOBnTDXtfhycK0sby5me5WgiadQgWM1dMTDX6mgHeA9skOkKBGbb%2FoFouTAbW9g9WGmNnv6BQNxnM7kbemNZdmsZR7NA61K04jjHCZ1Bnm9aT2y5PFJCQVWG5lvrGRDUt6rWsuaZ2lld1Ioy94gNoTSRgBsuVbQJaiT5%2F5T2kdc%2FLJvoQ9%2FnxBte7IDjhlwGBt0mMFWMDSVG6MK1nZjflbb0%2FJy7QjACnlAZisphBfFIibcnS7N7fnRpUdJ59zUqzOLm7PXXGA0KcRT5DrXejxyuF9hSMZfQA39%2B0wyiAnH6KewW8dVt7RltETqbiS6a1VmLtsnXiLPoPUrKhRGi4kBqH6N0nKmOAMj0Fshmzt9wRGDZJTe7I%2FpDTYvwErc4RE2M2ErV%2FGhhwN0EWhGbudmrqOXkDZmvATpZfmBMtG29WB8DN2dBWwnAekF0SlifDBTfCfwK9ib3l9ZdJ7sTPDSVb480w%2B76IvQY6pgFvfvrqmIbMKaDLfesjzgX%2BxxTNo2h2IzTjDGQObMjDAzx5lmiHfTm%2Fj2hXG%2B1zfNVVarC2qggoAA7uSRZsT3tJUkyx3A6qxssQm%2FanawKkw8xsSxWBxnQtDCHKHfT7GsnRTGduU%2Bt63SCFkQDaJnYK75doqY2H%2FgP5gFVBNd73UB8y7D2feeCthXlXt8IxWwO9qvk13QnAeZ7yu708lgMDwPPs3es3&X-Amz-Signature=45885b126dadb0faed03f7d9c1e659c447400b4a67b92515862b30cd669b3f86&X-Amz-SignedHeaders=host&x-id=GetObject)
