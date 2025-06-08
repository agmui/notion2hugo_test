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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466467VLBUP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAykBAz3oV%2BmASGhEJX75tyMWPSckWmiSgJYVywaWpW0AiBSttw23s4su4OmTrkpjKppM0HfGLsKblk5nDLoFQdjciqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkDhdSvNWtYYKDAtKtwD2fh1OcfN9NoFqKN%2BmLICABcc6S7HLETWWfm18HEpe3lrMI3F43%2BfBKocmBwJWJ1zt4jG4OM9Guxegvx2eoCW4%2FLJhQbU%2BgJrv%2BT6vuWEuYu0C7bkZCfsk3%2FzPJ1s%2BsKVh%2F59HYOYJxrrAnJd2ni8Smv5w5kul8kwTfAnWR9UVsi65ZIRvvTexZ4YKB1JH7TatfmVZDaT7vadXaWWf0ooCamvS4dxgfqEYM4qma4s2QgMjTxG2ZCmCLzIYc4mGqf5ypTVp3E4Vt%2BpmlLTwwgU6ohcMBdJIijY3utCRnZyHZh9a%2BhA3KF1eukSUZnJlIs8nXgeBZFQ2ngRl69if6%2F7U7AAqnHphPJvkBW2dI3irt%2Fe95zBRdBi%2BQzTC48MSZVlSSYd%2BvX3hNTdQkmHlorRzVTosXzLVLFG2sf6m%2F7khQJVfi1tNlWkP6gabxUkcg99kjFWPT%2FVnUNXZmEt5fJVZaC%2FBC4QHqET%2FWeIsXpgdV5mKocron6atq4rvnLEi94y2HZ8b6bvpG9tKV0XnMROqqFi%2FgGMPUxCG3jmmw%2FqNJuFjX9pZUrzIqQIjDQqXG8REG%2FBHXIL%2B15R0wd08LjnSrxsqOaQQ1WFZuGIqks7oAHMLO9nIYez%2Ftum2HIw%2BLOWwgY6pgHzqDl5kevuixv%2FixgIiWcpyF5IOdizK92XrBgz3cM3p9s%2FRRx0fsvlTDWLIH1d%2FjmO80MTMTYFOvuxWwfW%2B%2FYrzYYP1HZ7q5NFuPLbBEnj9gplXVg1xmnCh8l52ggfsmy06YpflXbkuAsm8hYffLmJy3vObbnP96z%2B9%2Bs2CvLPoZOn4wbLF%2B9aS51oVbvqyM8Zz2%2FiNMvpmyT0ze0UygFBwfm6AnXf&X-Amz-Signature=b0001612c9da225b5e8d8ee811231c075061496cf536890d9005b1cb71331bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466467VLBUP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAykBAz3oV%2BmASGhEJX75tyMWPSckWmiSgJYVywaWpW0AiBSttw23s4su4OmTrkpjKppM0HfGLsKblk5nDLoFQdjciqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkDhdSvNWtYYKDAtKtwD2fh1OcfN9NoFqKN%2BmLICABcc6S7HLETWWfm18HEpe3lrMI3F43%2BfBKocmBwJWJ1zt4jG4OM9Guxegvx2eoCW4%2FLJhQbU%2BgJrv%2BT6vuWEuYu0C7bkZCfsk3%2FzPJ1s%2BsKVh%2F59HYOYJxrrAnJd2ni8Smv5w5kul8kwTfAnWR9UVsi65ZIRvvTexZ4YKB1JH7TatfmVZDaT7vadXaWWf0ooCamvS4dxgfqEYM4qma4s2QgMjTxG2ZCmCLzIYc4mGqf5ypTVp3E4Vt%2BpmlLTwwgU6ohcMBdJIijY3utCRnZyHZh9a%2BhA3KF1eukSUZnJlIs8nXgeBZFQ2ngRl69if6%2F7U7AAqnHphPJvkBW2dI3irt%2Fe95zBRdBi%2BQzTC48MSZVlSSYd%2BvX3hNTdQkmHlorRzVTosXzLVLFG2sf6m%2F7khQJVfi1tNlWkP6gabxUkcg99kjFWPT%2FVnUNXZmEt5fJVZaC%2FBC4QHqET%2FWeIsXpgdV5mKocron6atq4rvnLEi94y2HZ8b6bvpG9tKV0XnMROqqFi%2FgGMPUxCG3jmmw%2FqNJuFjX9pZUrzIqQIjDQqXG8REG%2FBHXIL%2B15R0wd08LjnSrxsqOaQQ1WFZuGIqks7oAHMLO9nIYez%2Ftum2HIw%2BLOWwgY6pgHzqDl5kevuixv%2FixgIiWcpyF5IOdizK92XrBgz3cM3p9s%2FRRx0fsvlTDWLIH1d%2FjmO80MTMTYFOvuxWwfW%2B%2FYrzYYP1HZ7q5NFuPLbBEnj9gplXVg1xmnCh8l52ggfsmy06YpflXbkuAsm8hYffLmJy3vObbnP96z%2B9%2Bs2CvLPoZOn4wbLF%2B9aS51oVbvqyM8Zz2%2FiNMvpmyT0ze0UygFBwfm6AnXf&X-Amz-Signature=9aa2a5ce329f3b0f1d9e8ab32fc728125344654080684fffd20f60d20aceb1e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466467VLBUP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAykBAz3oV%2BmASGhEJX75tyMWPSckWmiSgJYVywaWpW0AiBSttw23s4su4OmTrkpjKppM0HfGLsKblk5nDLoFQdjciqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkDhdSvNWtYYKDAtKtwD2fh1OcfN9NoFqKN%2BmLICABcc6S7HLETWWfm18HEpe3lrMI3F43%2BfBKocmBwJWJ1zt4jG4OM9Guxegvx2eoCW4%2FLJhQbU%2BgJrv%2BT6vuWEuYu0C7bkZCfsk3%2FzPJ1s%2BsKVh%2F59HYOYJxrrAnJd2ni8Smv5w5kul8kwTfAnWR9UVsi65ZIRvvTexZ4YKB1JH7TatfmVZDaT7vadXaWWf0ooCamvS4dxgfqEYM4qma4s2QgMjTxG2ZCmCLzIYc4mGqf5ypTVp3E4Vt%2BpmlLTwwgU6ohcMBdJIijY3utCRnZyHZh9a%2BhA3KF1eukSUZnJlIs8nXgeBZFQ2ngRl69if6%2F7U7AAqnHphPJvkBW2dI3irt%2Fe95zBRdBi%2BQzTC48MSZVlSSYd%2BvX3hNTdQkmHlorRzVTosXzLVLFG2sf6m%2F7khQJVfi1tNlWkP6gabxUkcg99kjFWPT%2FVnUNXZmEt5fJVZaC%2FBC4QHqET%2FWeIsXpgdV5mKocron6atq4rvnLEi94y2HZ8b6bvpG9tKV0XnMROqqFi%2FgGMPUxCG3jmmw%2FqNJuFjX9pZUrzIqQIjDQqXG8REG%2FBHXIL%2B15R0wd08LjnSrxsqOaQQ1WFZuGIqks7oAHMLO9nIYez%2Ftum2HIw%2BLOWwgY6pgHzqDl5kevuixv%2FixgIiWcpyF5IOdizK92XrBgz3cM3p9s%2FRRx0fsvlTDWLIH1d%2FjmO80MTMTYFOvuxWwfW%2B%2FYrzYYP1HZ7q5NFuPLbBEnj9gplXVg1xmnCh8l52ggfsmy06YpflXbkuAsm8hYffLmJy3vObbnP96z%2B9%2Bs2CvLPoZOn4wbLF%2B9aS51oVbvqyM8Zz2%2FiNMvpmyT0ze0UygFBwfm6AnXf&X-Amz-Signature=3a4df1d191415e21f44ae3db362ef814babeceab8857d5ef663ca0b194da7650&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466467VLBUP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAykBAz3oV%2BmASGhEJX75tyMWPSckWmiSgJYVywaWpW0AiBSttw23s4su4OmTrkpjKppM0HfGLsKblk5nDLoFQdjciqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkDhdSvNWtYYKDAtKtwD2fh1OcfN9NoFqKN%2BmLICABcc6S7HLETWWfm18HEpe3lrMI3F43%2BfBKocmBwJWJ1zt4jG4OM9Guxegvx2eoCW4%2FLJhQbU%2BgJrv%2BT6vuWEuYu0C7bkZCfsk3%2FzPJ1s%2BsKVh%2F59HYOYJxrrAnJd2ni8Smv5w5kul8kwTfAnWR9UVsi65ZIRvvTexZ4YKB1JH7TatfmVZDaT7vadXaWWf0ooCamvS4dxgfqEYM4qma4s2QgMjTxG2ZCmCLzIYc4mGqf5ypTVp3E4Vt%2BpmlLTwwgU6ohcMBdJIijY3utCRnZyHZh9a%2BhA3KF1eukSUZnJlIs8nXgeBZFQ2ngRl69if6%2F7U7AAqnHphPJvkBW2dI3irt%2Fe95zBRdBi%2BQzTC48MSZVlSSYd%2BvX3hNTdQkmHlorRzVTosXzLVLFG2sf6m%2F7khQJVfi1tNlWkP6gabxUkcg99kjFWPT%2FVnUNXZmEt5fJVZaC%2FBC4QHqET%2FWeIsXpgdV5mKocron6atq4rvnLEi94y2HZ8b6bvpG9tKV0XnMROqqFi%2FgGMPUxCG3jmmw%2FqNJuFjX9pZUrzIqQIjDQqXG8REG%2FBHXIL%2B15R0wd08LjnSrxsqOaQQ1WFZuGIqks7oAHMLO9nIYez%2Ftum2HIw%2BLOWwgY6pgHzqDl5kevuixv%2FixgIiWcpyF5IOdizK92XrBgz3cM3p9s%2FRRx0fsvlTDWLIH1d%2FjmO80MTMTYFOvuxWwfW%2B%2FYrzYYP1HZ7q5NFuPLbBEnj9gplXVg1xmnCh8l52ggfsmy06YpflXbkuAsm8hYffLmJy3vObbnP96z%2B9%2Bs2CvLPoZOn4wbLF%2B9aS51oVbvqyM8Zz2%2FiNMvpmyT0ze0UygFBwfm6AnXf&X-Amz-Signature=d1e46b4bb57b086526dfcf2cba16fa88f96588441d461a59f4d4113e2fb9b626&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466467VLBUP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAykBAz3oV%2BmASGhEJX75tyMWPSckWmiSgJYVywaWpW0AiBSttw23s4su4OmTrkpjKppM0HfGLsKblk5nDLoFQdjciqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkDhdSvNWtYYKDAtKtwD2fh1OcfN9NoFqKN%2BmLICABcc6S7HLETWWfm18HEpe3lrMI3F43%2BfBKocmBwJWJ1zt4jG4OM9Guxegvx2eoCW4%2FLJhQbU%2BgJrv%2BT6vuWEuYu0C7bkZCfsk3%2FzPJ1s%2BsKVh%2F59HYOYJxrrAnJd2ni8Smv5w5kul8kwTfAnWR9UVsi65ZIRvvTexZ4YKB1JH7TatfmVZDaT7vadXaWWf0ooCamvS4dxgfqEYM4qma4s2QgMjTxG2ZCmCLzIYc4mGqf5ypTVp3E4Vt%2BpmlLTwwgU6ohcMBdJIijY3utCRnZyHZh9a%2BhA3KF1eukSUZnJlIs8nXgeBZFQ2ngRl69if6%2F7U7AAqnHphPJvkBW2dI3irt%2Fe95zBRdBi%2BQzTC48MSZVlSSYd%2BvX3hNTdQkmHlorRzVTosXzLVLFG2sf6m%2F7khQJVfi1tNlWkP6gabxUkcg99kjFWPT%2FVnUNXZmEt5fJVZaC%2FBC4QHqET%2FWeIsXpgdV5mKocron6atq4rvnLEi94y2HZ8b6bvpG9tKV0XnMROqqFi%2FgGMPUxCG3jmmw%2FqNJuFjX9pZUrzIqQIjDQqXG8REG%2FBHXIL%2B15R0wd08LjnSrxsqOaQQ1WFZuGIqks7oAHMLO9nIYez%2Ftum2HIw%2BLOWwgY6pgHzqDl5kevuixv%2FixgIiWcpyF5IOdizK92XrBgz3cM3p9s%2FRRx0fsvlTDWLIH1d%2FjmO80MTMTYFOvuxWwfW%2B%2FYrzYYP1HZ7q5NFuPLbBEnj9gplXVg1xmnCh8l52ggfsmy06YpflXbkuAsm8hYffLmJy3vObbnP96z%2B9%2Bs2CvLPoZOn4wbLF%2B9aS51oVbvqyM8Zz2%2FiNMvpmyT0ze0UygFBwfm6AnXf&X-Amz-Signature=ecd630ed57e11da01d1436653dc7bd45ab776fa41b234996888e69bd0f240cf9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466467VLBUP%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAykBAz3oV%2BmASGhEJX75tyMWPSckWmiSgJYVywaWpW0AiBSttw23s4su4OmTrkpjKppM0HfGLsKblk5nDLoFQdjciqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkDhdSvNWtYYKDAtKtwD2fh1OcfN9NoFqKN%2BmLICABcc6S7HLETWWfm18HEpe3lrMI3F43%2BfBKocmBwJWJ1zt4jG4OM9Guxegvx2eoCW4%2FLJhQbU%2BgJrv%2BT6vuWEuYu0C7bkZCfsk3%2FzPJ1s%2BsKVh%2F59HYOYJxrrAnJd2ni8Smv5w5kul8kwTfAnWR9UVsi65ZIRvvTexZ4YKB1JH7TatfmVZDaT7vadXaWWf0ooCamvS4dxgfqEYM4qma4s2QgMjTxG2ZCmCLzIYc4mGqf5ypTVp3E4Vt%2BpmlLTwwgU6ohcMBdJIijY3utCRnZyHZh9a%2BhA3KF1eukSUZnJlIs8nXgeBZFQ2ngRl69if6%2F7U7AAqnHphPJvkBW2dI3irt%2Fe95zBRdBi%2BQzTC48MSZVlSSYd%2BvX3hNTdQkmHlorRzVTosXzLVLFG2sf6m%2F7khQJVfi1tNlWkP6gabxUkcg99kjFWPT%2FVnUNXZmEt5fJVZaC%2FBC4QHqET%2FWeIsXpgdV5mKocron6atq4rvnLEi94y2HZ8b6bvpG9tKV0XnMROqqFi%2FgGMPUxCG3jmmw%2FqNJuFjX9pZUrzIqQIjDQqXG8REG%2FBHXIL%2B15R0wd08LjnSrxsqOaQQ1WFZuGIqks7oAHMLO9nIYez%2Ftum2HIw%2BLOWwgY6pgHzqDl5kevuixv%2FixgIiWcpyF5IOdizK92XrBgz3cM3p9s%2FRRx0fsvlTDWLIH1d%2FjmO80MTMTYFOvuxWwfW%2B%2FYrzYYP1HZ7q5NFuPLbBEnj9gplXVg1xmnCh8l52ggfsmy06YpflXbkuAsm8hYffLmJy3vObbnP96z%2B9%2Bs2CvLPoZOn4wbLF%2B9aS51oVbvqyM8Zz2%2FiNMvpmyT0ze0UygFBwfm6AnXf&X-Amz-Signature=95cfea9b3d6551169dc168be7fcfca33e88335f05d1beca125f58a65b1220459&X-Amz-SignedHeaders=host&x-id=GetObject)
