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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARKYBLO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDWRNKtKk%2Fi1Dre8LS2SfaJBXQql%2FnrK9M2Bzhtz6JEwgIgPjLtWuxEnBpWYa6y4BF5piaWEtW2vpy2N9Jlh6vcxuwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLe5zDaAYmLudldooircAyAxIJHgoY03VglcTKic8rpKdZYQQsgtyeWh8r%2BmQstkQh2J44sShkYe7Lx%2BU0AWqWO7fR84z73c0JcX3f1NbpjQuyfV9jS4HyF2dQn3dBcct%2FZmyBq8%2FGsILwJ1CJ1iYsAZ%2B4OcI8ZqfSdro9XcCh1BqY6Je2D5iQdwYl2zeQ9bMWRC0%2F1Fq2BEfOQaxlv71%2BLgoyAeZyEGGjik4tYhU547u7D8jVgTFUy7z0RT7s0dYmfi1xz78uF3XJMi3lNh76fuLB7UdhUyLwDJNHRGlH0IuLuIHT4uw%2BfMPI8BCtYhWN1jfLcHuNIDXhJB1q7EkqYTu4Fapu40oteOqGKybfHqLmihA8yZp1EdKoPSESvIViNPJi0%2FvOQ50ZNjibrv%2BCmhM1x0DJrE%2Fo1V2jl4%2BAVxY3gocmXGxuEk5jyz0roHYzv0QKyeuBcSEXJilqePMNDjtr4n9w6srRXbh5TnXX%2FssfmGeQnoJrsQl4KW%2FpzPCLIxm%2Btsld2PYKHPhWJag6yNfj%2BBnannFYRQQ1Jg%2BCvWWyOoArcM7ciZLlYAW5m%2F9LndQQQCuZFpXl5MqZ%2BufPImg4Nt%2B3lGDf%2FD7Ml8S4pLJ%2FuM0eTOrr5Q4oy%2FVm%2FyL333su1L06aQd6kEMPrJyr0GOqUBxc6ZEOTd5r0UKJBFRjGoozptNOp1CWHOk88YoDjkYw%2F5Pl1ZYrCm%2FN1qAYv%2FCJ6OxqhjBmAMoDxuyMMD6oqvLtMpr6ROfMGEzXzHHtmA9xzepQUEO%2BHMUH%2BBQ%2FmqwB1PSeL%2Fq9UsCV8Kb0Z0Oq5COndCmIOa1AN7t6Sa24kaY0cLiYWU%2BWPcFJRx9LsuaxLYVQIqZUFj93THlGfSouyMxHyn%2BetG&X-Amz-Signature=523683e0129d35adb44d5f36fd779c399565b7647df56fbc9d400efcfa5b4abc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARKYBLO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDWRNKtKk%2Fi1Dre8LS2SfaJBXQql%2FnrK9M2Bzhtz6JEwgIgPjLtWuxEnBpWYa6y4BF5piaWEtW2vpy2N9Jlh6vcxuwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLe5zDaAYmLudldooircAyAxIJHgoY03VglcTKic8rpKdZYQQsgtyeWh8r%2BmQstkQh2J44sShkYe7Lx%2BU0AWqWO7fR84z73c0JcX3f1NbpjQuyfV9jS4HyF2dQn3dBcct%2FZmyBq8%2FGsILwJ1CJ1iYsAZ%2B4OcI8ZqfSdro9XcCh1BqY6Je2D5iQdwYl2zeQ9bMWRC0%2F1Fq2BEfOQaxlv71%2BLgoyAeZyEGGjik4tYhU547u7D8jVgTFUy7z0RT7s0dYmfi1xz78uF3XJMi3lNh76fuLB7UdhUyLwDJNHRGlH0IuLuIHT4uw%2BfMPI8BCtYhWN1jfLcHuNIDXhJB1q7EkqYTu4Fapu40oteOqGKybfHqLmihA8yZp1EdKoPSESvIViNPJi0%2FvOQ50ZNjibrv%2BCmhM1x0DJrE%2Fo1V2jl4%2BAVxY3gocmXGxuEk5jyz0roHYzv0QKyeuBcSEXJilqePMNDjtr4n9w6srRXbh5TnXX%2FssfmGeQnoJrsQl4KW%2FpzPCLIxm%2Btsld2PYKHPhWJag6yNfj%2BBnannFYRQQ1Jg%2BCvWWyOoArcM7ciZLlYAW5m%2F9LndQQQCuZFpXl5MqZ%2BufPImg4Nt%2B3lGDf%2FD7Ml8S4pLJ%2FuM0eTOrr5Q4oy%2FVm%2FyL333su1L06aQd6kEMPrJyr0GOqUBxc6ZEOTd5r0UKJBFRjGoozptNOp1CWHOk88YoDjkYw%2F5Pl1ZYrCm%2FN1qAYv%2FCJ6OxqhjBmAMoDxuyMMD6oqvLtMpr6ROfMGEzXzHHtmA9xzepQUEO%2BHMUH%2BBQ%2FmqwB1PSeL%2Fq9UsCV8Kb0Z0Oq5COndCmIOa1AN7t6Sa24kaY0cLiYWU%2BWPcFJRx9LsuaxLYVQIqZUFj93THlGfSouyMxHyn%2BetG&X-Amz-Signature=be8cdb5096ae1df496e16ec60c67cecc07ab7918b179052eae19235a30905c5c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARKYBLO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDWRNKtKk%2Fi1Dre8LS2SfaJBXQql%2FnrK9M2Bzhtz6JEwgIgPjLtWuxEnBpWYa6y4BF5piaWEtW2vpy2N9Jlh6vcxuwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLe5zDaAYmLudldooircAyAxIJHgoY03VglcTKic8rpKdZYQQsgtyeWh8r%2BmQstkQh2J44sShkYe7Lx%2BU0AWqWO7fR84z73c0JcX3f1NbpjQuyfV9jS4HyF2dQn3dBcct%2FZmyBq8%2FGsILwJ1CJ1iYsAZ%2B4OcI8ZqfSdro9XcCh1BqY6Je2D5iQdwYl2zeQ9bMWRC0%2F1Fq2BEfOQaxlv71%2BLgoyAeZyEGGjik4tYhU547u7D8jVgTFUy7z0RT7s0dYmfi1xz78uF3XJMi3lNh76fuLB7UdhUyLwDJNHRGlH0IuLuIHT4uw%2BfMPI8BCtYhWN1jfLcHuNIDXhJB1q7EkqYTu4Fapu40oteOqGKybfHqLmihA8yZp1EdKoPSESvIViNPJi0%2FvOQ50ZNjibrv%2BCmhM1x0DJrE%2Fo1V2jl4%2BAVxY3gocmXGxuEk5jyz0roHYzv0QKyeuBcSEXJilqePMNDjtr4n9w6srRXbh5TnXX%2FssfmGeQnoJrsQl4KW%2FpzPCLIxm%2Btsld2PYKHPhWJag6yNfj%2BBnannFYRQQ1Jg%2BCvWWyOoArcM7ciZLlYAW5m%2F9LndQQQCuZFpXl5MqZ%2BufPImg4Nt%2B3lGDf%2FD7Ml8S4pLJ%2FuM0eTOrr5Q4oy%2FVm%2FyL333su1L06aQd6kEMPrJyr0GOqUBxc6ZEOTd5r0UKJBFRjGoozptNOp1CWHOk88YoDjkYw%2F5Pl1ZYrCm%2FN1qAYv%2FCJ6OxqhjBmAMoDxuyMMD6oqvLtMpr6ROfMGEzXzHHtmA9xzepQUEO%2BHMUH%2BBQ%2FmqwB1PSeL%2Fq9UsCV8Kb0Z0Oq5COndCmIOa1AN7t6Sa24kaY0cLiYWU%2BWPcFJRx9LsuaxLYVQIqZUFj93THlGfSouyMxHyn%2BetG&X-Amz-Signature=ed1c093debf90f9ce210967e2c560601677ae5f0f37339e53e24aa6b1e750d02&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARKYBLO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDWRNKtKk%2Fi1Dre8LS2SfaJBXQql%2FnrK9M2Bzhtz6JEwgIgPjLtWuxEnBpWYa6y4BF5piaWEtW2vpy2N9Jlh6vcxuwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLe5zDaAYmLudldooircAyAxIJHgoY03VglcTKic8rpKdZYQQsgtyeWh8r%2BmQstkQh2J44sShkYe7Lx%2BU0AWqWO7fR84z73c0JcX3f1NbpjQuyfV9jS4HyF2dQn3dBcct%2FZmyBq8%2FGsILwJ1CJ1iYsAZ%2B4OcI8ZqfSdro9XcCh1BqY6Je2D5iQdwYl2zeQ9bMWRC0%2F1Fq2BEfOQaxlv71%2BLgoyAeZyEGGjik4tYhU547u7D8jVgTFUy7z0RT7s0dYmfi1xz78uF3XJMi3lNh76fuLB7UdhUyLwDJNHRGlH0IuLuIHT4uw%2BfMPI8BCtYhWN1jfLcHuNIDXhJB1q7EkqYTu4Fapu40oteOqGKybfHqLmihA8yZp1EdKoPSESvIViNPJi0%2FvOQ50ZNjibrv%2BCmhM1x0DJrE%2Fo1V2jl4%2BAVxY3gocmXGxuEk5jyz0roHYzv0QKyeuBcSEXJilqePMNDjtr4n9w6srRXbh5TnXX%2FssfmGeQnoJrsQl4KW%2FpzPCLIxm%2Btsld2PYKHPhWJag6yNfj%2BBnannFYRQQ1Jg%2BCvWWyOoArcM7ciZLlYAW5m%2F9LndQQQCuZFpXl5MqZ%2BufPImg4Nt%2B3lGDf%2FD7Ml8S4pLJ%2FuM0eTOrr5Q4oy%2FVm%2FyL333su1L06aQd6kEMPrJyr0GOqUBxc6ZEOTd5r0UKJBFRjGoozptNOp1CWHOk88YoDjkYw%2F5Pl1ZYrCm%2FN1qAYv%2FCJ6OxqhjBmAMoDxuyMMD6oqvLtMpr6ROfMGEzXzHHtmA9xzepQUEO%2BHMUH%2BBQ%2FmqwB1PSeL%2Fq9UsCV8Kb0Z0Oq5COndCmIOa1AN7t6Sa24kaY0cLiYWU%2BWPcFJRx9LsuaxLYVQIqZUFj93THlGfSouyMxHyn%2BetG&X-Amz-Signature=2e604776cabc2222a0c2b15ac54f955212d82c39280ae32382e7ba10da8c99c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARKYBLO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDWRNKtKk%2Fi1Dre8LS2SfaJBXQql%2FnrK9M2Bzhtz6JEwgIgPjLtWuxEnBpWYa6y4BF5piaWEtW2vpy2N9Jlh6vcxuwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLe5zDaAYmLudldooircAyAxIJHgoY03VglcTKic8rpKdZYQQsgtyeWh8r%2BmQstkQh2J44sShkYe7Lx%2BU0AWqWO7fR84z73c0JcX3f1NbpjQuyfV9jS4HyF2dQn3dBcct%2FZmyBq8%2FGsILwJ1CJ1iYsAZ%2B4OcI8ZqfSdro9XcCh1BqY6Je2D5iQdwYl2zeQ9bMWRC0%2F1Fq2BEfOQaxlv71%2BLgoyAeZyEGGjik4tYhU547u7D8jVgTFUy7z0RT7s0dYmfi1xz78uF3XJMi3lNh76fuLB7UdhUyLwDJNHRGlH0IuLuIHT4uw%2BfMPI8BCtYhWN1jfLcHuNIDXhJB1q7EkqYTu4Fapu40oteOqGKybfHqLmihA8yZp1EdKoPSESvIViNPJi0%2FvOQ50ZNjibrv%2BCmhM1x0DJrE%2Fo1V2jl4%2BAVxY3gocmXGxuEk5jyz0roHYzv0QKyeuBcSEXJilqePMNDjtr4n9w6srRXbh5TnXX%2FssfmGeQnoJrsQl4KW%2FpzPCLIxm%2Btsld2PYKHPhWJag6yNfj%2BBnannFYRQQ1Jg%2BCvWWyOoArcM7ciZLlYAW5m%2F9LndQQQCuZFpXl5MqZ%2BufPImg4Nt%2B3lGDf%2FD7Ml8S4pLJ%2FuM0eTOrr5Q4oy%2FVm%2FyL333su1L06aQd6kEMPrJyr0GOqUBxc6ZEOTd5r0UKJBFRjGoozptNOp1CWHOk88YoDjkYw%2F5Pl1ZYrCm%2FN1qAYv%2FCJ6OxqhjBmAMoDxuyMMD6oqvLtMpr6ROfMGEzXzHHtmA9xzepQUEO%2BHMUH%2BBQ%2FmqwB1PSeL%2Fq9UsCV8Kb0Z0Oq5COndCmIOa1AN7t6Sa24kaY0cLiYWU%2BWPcFJRx9LsuaxLYVQIqZUFj93THlGfSouyMxHyn%2BetG&X-Amz-Signature=acc001c5eb93e7c15d337e94df60bdf6a3caa23d2576fd112f35d3644e36f282&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VARKYBLO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDWRNKtKk%2Fi1Dre8LS2SfaJBXQql%2FnrK9M2Bzhtz6JEwgIgPjLtWuxEnBpWYa6y4BF5piaWEtW2vpy2N9Jlh6vcxuwq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDLe5zDaAYmLudldooircAyAxIJHgoY03VglcTKic8rpKdZYQQsgtyeWh8r%2BmQstkQh2J44sShkYe7Lx%2BU0AWqWO7fR84z73c0JcX3f1NbpjQuyfV9jS4HyF2dQn3dBcct%2FZmyBq8%2FGsILwJ1CJ1iYsAZ%2B4OcI8ZqfSdro9XcCh1BqY6Je2D5iQdwYl2zeQ9bMWRC0%2F1Fq2BEfOQaxlv71%2BLgoyAeZyEGGjik4tYhU547u7D8jVgTFUy7z0RT7s0dYmfi1xz78uF3XJMi3lNh76fuLB7UdhUyLwDJNHRGlH0IuLuIHT4uw%2BfMPI8BCtYhWN1jfLcHuNIDXhJB1q7EkqYTu4Fapu40oteOqGKybfHqLmihA8yZp1EdKoPSESvIViNPJi0%2FvOQ50ZNjibrv%2BCmhM1x0DJrE%2Fo1V2jl4%2BAVxY3gocmXGxuEk5jyz0roHYzv0QKyeuBcSEXJilqePMNDjtr4n9w6srRXbh5TnXX%2FssfmGeQnoJrsQl4KW%2FpzPCLIxm%2Btsld2PYKHPhWJag6yNfj%2BBnannFYRQQ1Jg%2BCvWWyOoArcM7ciZLlYAW5m%2F9LndQQQCuZFpXl5MqZ%2BufPImg4Nt%2B3lGDf%2FD7Ml8S4pLJ%2FuM0eTOrr5Q4oy%2FVm%2FyL333su1L06aQd6kEMPrJyr0GOqUBxc6ZEOTd5r0UKJBFRjGoozptNOp1CWHOk88YoDjkYw%2F5Pl1ZYrCm%2FN1qAYv%2FCJ6OxqhjBmAMoDxuyMMD6oqvLtMpr6ROfMGEzXzHHtmA9xzepQUEO%2BHMUH%2BBQ%2FmqwB1PSeL%2Fq9UsCV8Kb0Z0Oq5COndCmIOa1AN7t6Sa24kaY0cLiYWU%2BWPcFJRx9LsuaxLYVQIqZUFj93THlGfSouyMxHyn%2BetG&X-Amz-Signature=adc45c5b67af7c25115da56cf868f5291abdecdca68d434366a2f33c2c286f60&X-Amz-SignedHeaders=host&x-id=GetObject)
