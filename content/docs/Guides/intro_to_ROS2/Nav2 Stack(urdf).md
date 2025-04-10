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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOVH6QZE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIEV60cbOuIUBQs88PAmpw%2BZzFSR81t%2Bs6yjbsTA1CUQfAiEA%2BnpXddkgWANYKJOJs%2BN7aFEaLqC1%2B5Soj%2Ff79QpihPcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjVoA%2BfIeWZ%2FbCgySrcA7cOys7K2Gg4p5WxbbnHQ5gXC4De75PCf5LYF2rOlA1l7pjNKw%2FbILAFg%2FCQMjd0irCJylub7NP4UzImY6kwZU1f1eJ45b5NRS5aHYIaoRLJoASlsPvr2wa%2F5Nv7cziVpZKsYSyOc4M%2BEU97ZpaxsmLTXG1l0e5zOLuG7wt%2Fzs7fs0Wm80IUkWQQHTgoLJLzh9ACT8QKzWnhUsvt1mVrqqpICHWcJ1YTq11FGh4aEdLpiA9ROFDe7Vvd8IZGonSGHeBea6AS1Gt566ArYwru%2FwnBwgDPObCgJdGNaPm7l1hJL34%2ByB%2BSiKldUm2LVhPAqrLnH7zX1YASq8WcOu57EYBhg%2B94k0BDs%2BpJqYWtTEXgVxQDRDBRttThBXmhlRYZygjp9TSe04kAlNEhZyJJQ7R8S0v5j98SJVjlB%2FzBw%2BCIAa%2BgVskQMED8s1fJZFqOE5UQgRYOXKCkGV1%2BalVjLo9UOprvjkGNO%2F%2B9k4CxtmKotSj8Tsj27O0asdw12i9sFZa0LyRKrqQAicf6et3i2z4wcHgbUWo%2BdhBYh5fMrqaBhc96aMU2tJPQbPiVabyqsA0PHGKDh3vvQ74UDOYyZo29Ey6aeDND1kj4hiD1ND9OK6QC3x6TIDZ4cwUqML%2BS3L8GOqUBAfC%2BF1NDCLutu%2FKxjTq%2FcR0wzCdx9Jr0FGqpePNTVWTmfPvnlpgVN4QMdEbYZeR3zyDigt2JoyPvEUElYK4g8rx5DHR2JsALjnanFt3RQOmdvCYrTRmXmE85KkRLU2lBBmXf5klJx261zPoLpexWxzIiD%2F8QV%2BaO1rovDy3%2FgHmoxRX9w0xn7cRIdAevAJa7l85pRKiYY9qvvRkl6gH5pi8MC1nI&X-Amz-Signature=1322b1db9c357d53618451b88cdd15eb0c5b203fdb47abdc482964dde8afbef4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOVH6QZE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIEV60cbOuIUBQs88PAmpw%2BZzFSR81t%2Bs6yjbsTA1CUQfAiEA%2BnpXddkgWANYKJOJs%2BN7aFEaLqC1%2B5Soj%2Ff79QpihPcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjVoA%2BfIeWZ%2FbCgySrcA7cOys7K2Gg4p5WxbbnHQ5gXC4De75PCf5LYF2rOlA1l7pjNKw%2FbILAFg%2FCQMjd0irCJylub7NP4UzImY6kwZU1f1eJ45b5NRS5aHYIaoRLJoASlsPvr2wa%2F5Nv7cziVpZKsYSyOc4M%2BEU97ZpaxsmLTXG1l0e5zOLuG7wt%2Fzs7fs0Wm80IUkWQQHTgoLJLzh9ACT8QKzWnhUsvt1mVrqqpICHWcJ1YTq11FGh4aEdLpiA9ROFDe7Vvd8IZGonSGHeBea6AS1Gt566ArYwru%2FwnBwgDPObCgJdGNaPm7l1hJL34%2ByB%2BSiKldUm2LVhPAqrLnH7zX1YASq8WcOu57EYBhg%2B94k0BDs%2BpJqYWtTEXgVxQDRDBRttThBXmhlRYZygjp9TSe04kAlNEhZyJJQ7R8S0v5j98SJVjlB%2FzBw%2BCIAa%2BgVskQMED8s1fJZFqOE5UQgRYOXKCkGV1%2BalVjLo9UOprvjkGNO%2F%2B9k4CxtmKotSj8Tsj27O0asdw12i9sFZa0LyRKrqQAicf6et3i2z4wcHgbUWo%2BdhBYh5fMrqaBhc96aMU2tJPQbPiVabyqsA0PHGKDh3vvQ74UDOYyZo29Ey6aeDND1kj4hiD1ND9OK6QC3x6TIDZ4cwUqML%2BS3L8GOqUBAfC%2BF1NDCLutu%2FKxjTq%2FcR0wzCdx9Jr0FGqpePNTVWTmfPvnlpgVN4QMdEbYZeR3zyDigt2JoyPvEUElYK4g8rx5DHR2JsALjnanFt3RQOmdvCYrTRmXmE85KkRLU2lBBmXf5klJx261zPoLpexWxzIiD%2F8QV%2BaO1rovDy3%2FgHmoxRX9w0xn7cRIdAevAJa7l85pRKiYY9qvvRkl6gH5pi8MC1nI&X-Amz-Signature=d8feed4be46f8bb0c7fd4eefd11ad77d8e1c0095ef7d888f5807b21e4d9243c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOVH6QZE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIEV60cbOuIUBQs88PAmpw%2BZzFSR81t%2Bs6yjbsTA1CUQfAiEA%2BnpXddkgWANYKJOJs%2BN7aFEaLqC1%2B5Soj%2Ff79QpihPcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjVoA%2BfIeWZ%2FbCgySrcA7cOys7K2Gg4p5WxbbnHQ5gXC4De75PCf5LYF2rOlA1l7pjNKw%2FbILAFg%2FCQMjd0irCJylub7NP4UzImY6kwZU1f1eJ45b5NRS5aHYIaoRLJoASlsPvr2wa%2F5Nv7cziVpZKsYSyOc4M%2BEU97ZpaxsmLTXG1l0e5zOLuG7wt%2Fzs7fs0Wm80IUkWQQHTgoLJLzh9ACT8QKzWnhUsvt1mVrqqpICHWcJ1YTq11FGh4aEdLpiA9ROFDe7Vvd8IZGonSGHeBea6AS1Gt566ArYwru%2FwnBwgDPObCgJdGNaPm7l1hJL34%2ByB%2BSiKldUm2LVhPAqrLnH7zX1YASq8WcOu57EYBhg%2B94k0BDs%2BpJqYWtTEXgVxQDRDBRttThBXmhlRYZygjp9TSe04kAlNEhZyJJQ7R8S0v5j98SJVjlB%2FzBw%2BCIAa%2BgVskQMED8s1fJZFqOE5UQgRYOXKCkGV1%2BalVjLo9UOprvjkGNO%2F%2B9k4CxtmKotSj8Tsj27O0asdw12i9sFZa0LyRKrqQAicf6et3i2z4wcHgbUWo%2BdhBYh5fMrqaBhc96aMU2tJPQbPiVabyqsA0PHGKDh3vvQ74UDOYyZo29Ey6aeDND1kj4hiD1ND9OK6QC3x6TIDZ4cwUqML%2BS3L8GOqUBAfC%2BF1NDCLutu%2FKxjTq%2FcR0wzCdx9Jr0FGqpePNTVWTmfPvnlpgVN4QMdEbYZeR3zyDigt2JoyPvEUElYK4g8rx5DHR2JsALjnanFt3RQOmdvCYrTRmXmE85KkRLU2lBBmXf5klJx261zPoLpexWxzIiD%2F8QV%2BaO1rovDy3%2FgHmoxRX9w0xn7cRIdAevAJa7l85pRKiYY9qvvRkl6gH5pi8MC1nI&X-Amz-Signature=7520bbf0bb91ae629fbc0f417de8e25d62b1e0c90bd1d3ffcb3550e104f355d5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOVH6QZE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIEV60cbOuIUBQs88PAmpw%2BZzFSR81t%2Bs6yjbsTA1CUQfAiEA%2BnpXddkgWANYKJOJs%2BN7aFEaLqC1%2B5Soj%2Ff79QpihPcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjVoA%2BfIeWZ%2FbCgySrcA7cOys7K2Gg4p5WxbbnHQ5gXC4De75PCf5LYF2rOlA1l7pjNKw%2FbILAFg%2FCQMjd0irCJylub7NP4UzImY6kwZU1f1eJ45b5NRS5aHYIaoRLJoASlsPvr2wa%2F5Nv7cziVpZKsYSyOc4M%2BEU97ZpaxsmLTXG1l0e5zOLuG7wt%2Fzs7fs0Wm80IUkWQQHTgoLJLzh9ACT8QKzWnhUsvt1mVrqqpICHWcJ1YTq11FGh4aEdLpiA9ROFDe7Vvd8IZGonSGHeBea6AS1Gt566ArYwru%2FwnBwgDPObCgJdGNaPm7l1hJL34%2ByB%2BSiKldUm2LVhPAqrLnH7zX1YASq8WcOu57EYBhg%2B94k0BDs%2BpJqYWtTEXgVxQDRDBRttThBXmhlRYZygjp9TSe04kAlNEhZyJJQ7R8S0v5j98SJVjlB%2FzBw%2BCIAa%2BgVskQMED8s1fJZFqOE5UQgRYOXKCkGV1%2BalVjLo9UOprvjkGNO%2F%2B9k4CxtmKotSj8Tsj27O0asdw12i9sFZa0LyRKrqQAicf6et3i2z4wcHgbUWo%2BdhBYh5fMrqaBhc96aMU2tJPQbPiVabyqsA0PHGKDh3vvQ74UDOYyZo29Ey6aeDND1kj4hiD1ND9OK6QC3x6TIDZ4cwUqML%2BS3L8GOqUBAfC%2BF1NDCLutu%2FKxjTq%2FcR0wzCdx9Jr0FGqpePNTVWTmfPvnlpgVN4QMdEbYZeR3zyDigt2JoyPvEUElYK4g8rx5DHR2JsALjnanFt3RQOmdvCYrTRmXmE85KkRLU2lBBmXf5klJx261zPoLpexWxzIiD%2F8QV%2BaO1rovDy3%2FgHmoxRX9w0xn7cRIdAevAJa7l85pRKiYY9qvvRkl6gH5pi8MC1nI&X-Amz-Signature=3172768d76ba1d5f51ecb03ca6a77eda2e2c766fe0ff0e722c9c4ee455df13be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOVH6QZE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIEV60cbOuIUBQs88PAmpw%2BZzFSR81t%2Bs6yjbsTA1CUQfAiEA%2BnpXddkgWANYKJOJs%2BN7aFEaLqC1%2B5Soj%2Ff79QpihPcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjVoA%2BfIeWZ%2FbCgySrcA7cOys7K2Gg4p5WxbbnHQ5gXC4De75PCf5LYF2rOlA1l7pjNKw%2FbILAFg%2FCQMjd0irCJylub7NP4UzImY6kwZU1f1eJ45b5NRS5aHYIaoRLJoASlsPvr2wa%2F5Nv7cziVpZKsYSyOc4M%2BEU97ZpaxsmLTXG1l0e5zOLuG7wt%2Fzs7fs0Wm80IUkWQQHTgoLJLzh9ACT8QKzWnhUsvt1mVrqqpICHWcJ1YTq11FGh4aEdLpiA9ROFDe7Vvd8IZGonSGHeBea6AS1Gt566ArYwru%2FwnBwgDPObCgJdGNaPm7l1hJL34%2ByB%2BSiKldUm2LVhPAqrLnH7zX1YASq8WcOu57EYBhg%2B94k0BDs%2BpJqYWtTEXgVxQDRDBRttThBXmhlRYZygjp9TSe04kAlNEhZyJJQ7R8S0v5j98SJVjlB%2FzBw%2BCIAa%2BgVskQMED8s1fJZFqOE5UQgRYOXKCkGV1%2BalVjLo9UOprvjkGNO%2F%2B9k4CxtmKotSj8Tsj27O0asdw12i9sFZa0LyRKrqQAicf6et3i2z4wcHgbUWo%2BdhBYh5fMrqaBhc96aMU2tJPQbPiVabyqsA0PHGKDh3vvQ74UDOYyZo29Ey6aeDND1kj4hiD1ND9OK6QC3x6TIDZ4cwUqML%2BS3L8GOqUBAfC%2BF1NDCLutu%2FKxjTq%2FcR0wzCdx9Jr0FGqpePNTVWTmfPvnlpgVN4QMdEbYZeR3zyDigt2JoyPvEUElYK4g8rx5DHR2JsALjnanFt3RQOmdvCYrTRmXmE85KkRLU2lBBmXf5klJx261zPoLpexWxzIiD%2F8QV%2BaO1rovDy3%2FgHmoxRX9w0xn7cRIdAevAJa7l85pRKiYY9qvvRkl6gH5pi8MC1nI&X-Amz-Signature=432c104969ef8d5750013ee1420c6b1f01d0edbc425fe7627dd4fd90d6fe0b99&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOVH6QZE%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T003856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIEV60cbOuIUBQs88PAmpw%2BZzFSR81t%2Bs6yjbsTA1CUQfAiEA%2BnpXddkgWANYKJOJs%2BN7aFEaLqC1%2B5Soj%2Ff79QpihPcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjVoA%2BfIeWZ%2FbCgySrcA7cOys7K2Gg4p5WxbbnHQ5gXC4De75PCf5LYF2rOlA1l7pjNKw%2FbILAFg%2FCQMjd0irCJylub7NP4UzImY6kwZU1f1eJ45b5NRS5aHYIaoRLJoASlsPvr2wa%2F5Nv7cziVpZKsYSyOc4M%2BEU97ZpaxsmLTXG1l0e5zOLuG7wt%2Fzs7fs0Wm80IUkWQQHTgoLJLzh9ACT8QKzWnhUsvt1mVrqqpICHWcJ1YTq11FGh4aEdLpiA9ROFDe7Vvd8IZGonSGHeBea6AS1Gt566ArYwru%2FwnBwgDPObCgJdGNaPm7l1hJL34%2ByB%2BSiKldUm2LVhPAqrLnH7zX1YASq8WcOu57EYBhg%2B94k0BDs%2BpJqYWtTEXgVxQDRDBRttThBXmhlRYZygjp9TSe04kAlNEhZyJJQ7R8S0v5j98SJVjlB%2FzBw%2BCIAa%2BgVskQMED8s1fJZFqOE5UQgRYOXKCkGV1%2BalVjLo9UOprvjkGNO%2F%2B9k4CxtmKotSj8Tsj27O0asdw12i9sFZa0LyRKrqQAicf6et3i2z4wcHgbUWo%2BdhBYh5fMrqaBhc96aMU2tJPQbPiVabyqsA0PHGKDh3vvQ74UDOYyZo29Ey6aeDND1kj4hiD1ND9OK6QC3x6TIDZ4cwUqML%2BS3L8GOqUBAfC%2BF1NDCLutu%2FKxjTq%2FcR0wzCdx9Jr0FGqpePNTVWTmfPvnlpgVN4QMdEbYZeR3zyDigt2JoyPvEUElYK4g8rx5DHR2JsALjnanFt3RQOmdvCYrTRmXmE85KkRLU2lBBmXf5klJx261zPoLpexWxzIiD%2F8QV%2BaO1rovDy3%2FgHmoxRX9w0xn7cRIdAevAJa7l85pRKiYY9qvvRkl6gH5pi8MC1nI&X-Amz-Signature=275b3fa8ca6936ddd4bc5c147661eac5f8a7893ce5b036ae783a741d22daaa2c&X-Amz-SignedHeaders=host&x-id=GetObject)
