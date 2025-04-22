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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUYRIGI%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDqoVgfFa5WkpypMuGvFJxJrN9zfRj7nPHG6jzDEKpKzgIgG0ZYCAjpaFRZFutblo%2Fnr4W%2Bz3HqFedadkNosJ0oAGsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtnvaz3vP5CLFs%2FfCrcA9qGQQLA1iMOj%2B0e%2BWVpw2iH60TO7n21fmWtwRoY1hSiYO20ZQHWYqCrdBoLiI8Mcj1zI9VpMRCcuqSSxw9vdzBn4UHrhm5%2B7MQ5uY%2Fbtd3hxmGJ9XrSY7L9TQAfDLLeIepOPljDAUdZRy0KVG9b2c%2BGGm4vS2K0MLrQ4rCk5CaeHeDOhujayeNnBepks7g8NgyK5CxXF4kzyySvhtjRs8qnG%2FHyFv7rHXVsqSeZQSl5GqZkR%2FPzS0aJNjFB5QgHqaMRKwvFZyD3jaHUm%2FnOURpQbj8AMgbwGD2wTyOxUvlbtZOC6rZUEG4uer3b3jZOA6JB1x4ny4O8a%2BEg6DtzCp9LZjKy1j%2BN%2BE3RWz9At5cEScbVOJiWEczl2Dm%2FVs%2BaRcWQIUO131AFu9Hx0gRuxhOnKj%2BjAwBGKM8FzLgslE3zoulVnBZExFLOBTJQmu94DLODYr0G0kuV2%2BohoSJGOC9kfdgjLd1GXXmKOixEu9r48g7gKfywszeJj4cQy91dQl5V7DfRATFcdmvKZro3Z7L9Ia8izNf0OFMmdwYdsCkfXfjvuhKTIPLbBuJelCKaX91kC%2BJdg7SK562XvGYQ8TP8pSuI%2B960jWj8kfHTYtRq1vSc4mA1T%2B%2FJgKmtMLiUn8AGOqUBg2seXbMuabm5TlJfj09LWXWgc18VF0T4oif4NNdM1WxplBv34rsT48IdmQ4tJpRvzFaI50ejZYvGLuhHYEJp5wy3FKvLpbHsuSGFv%2Fzi4Z3n4pCKjYNfamuoxg3uO6g7Nki%2BjgBrJl4mIAuJ1UpYNNGVqhmNEZa4QiVZPSPrrqvuTs7AxMcKASchnR24WeKvxhyCoIZlN4NwxPhzl%2B6QHoLh8XwM&X-Amz-Signature=cf43cc1b921f024a70ef38a35383e2f5da64c06057d0dc025e6ffb4f948e5d9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUYRIGI%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDqoVgfFa5WkpypMuGvFJxJrN9zfRj7nPHG6jzDEKpKzgIgG0ZYCAjpaFRZFutblo%2Fnr4W%2Bz3HqFedadkNosJ0oAGsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtnvaz3vP5CLFs%2FfCrcA9qGQQLA1iMOj%2B0e%2BWVpw2iH60TO7n21fmWtwRoY1hSiYO20ZQHWYqCrdBoLiI8Mcj1zI9VpMRCcuqSSxw9vdzBn4UHrhm5%2B7MQ5uY%2Fbtd3hxmGJ9XrSY7L9TQAfDLLeIepOPljDAUdZRy0KVG9b2c%2BGGm4vS2K0MLrQ4rCk5CaeHeDOhujayeNnBepks7g8NgyK5CxXF4kzyySvhtjRs8qnG%2FHyFv7rHXVsqSeZQSl5GqZkR%2FPzS0aJNjFB5QgHqaMRKwvFZyD3jaHUm%2FnOURpQbj8AMgbwGD2wTyOxUvlbtZOC6rZUEG4uer3b3jZOA6JB1x4ny4O8a%2BEg6DtzCp9LZjKy1j%2BN%2BE3RWz9At5cEScbVOJiWEczl2Dm%2FVs%2BaRcWQIUO131AFu9Hx0gRuxhOnKj%2BjAwBGKM8FzLgslE3zoulVnBZExFLOBTJQmu94DLODYr0G0kuV2%2BohoSJGOC9kfdgjLd1GXXmKOixEu9r48g7gKfywszeJj4cQy91dQl5V7DfRATFcdmvKZro3Z7L9Ia8izNf0OFMmdwYdsCkfXfjvuhKTIPLbBuJelCKaX91kC%2BJdg7SK562XvGYQ8TP8pSuI%2B960jWj8kfHTYtRq1vSc4mA1T%2B%2FJgKmtMLiUn8AGOqUBg2seXbMuabm5TlJfj09LWXWgc18VF0T4oif4NNdM1WxplBv34rsT48IdmQ4tJpRvzFaI50ejZYvGLuhHYEJp5wy3FKvLpbHsuSGFv%2Fzi4Z3n4pCKjYNfamuoxg3uO6g7Nki%2BjgBrJl4mIAuJ1UpYNNGVqhmNEZa4QiVZPSPrrqvuTs7AxMcKASchnR24WeKvxhyCoIZlN4NwxPhzl%2B6QHoLh8XwM&X-Amz-Signature=3739b4804ef39cd36fab5cd0a79c06b79ec4e5accdf76545a573025806c2daeb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUYRIGI%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDqoVgfFa5WkpypMuGvFJxJrN9zfRj7nPHG6jzDEKpKzgIgG0ZYCAjpaFRZFutblo%2Fnr4W%2Bz3HqFedadkNosJ0oAGsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtnvaz3vP5CLFs%2FfCrcA9qGQQLA1iMOj%2B0e%2BWVpw2iH60TO7n21fmWtwRoY1hSiYO20ZQHWYqCrdBoLiI8Mcj1zI9VpMRCcuqSSxw9vdzBn4UHrhm5%2B7MQ5uY%2Fbtd3hxmGJ9XrSY7L9TQAfDLLeIepOPljDAUdZRy0KVG9b2c%2BGGm4vS2K0MLrQ4rCk5CaeHeDOhujayeNnBepks7g8NgyK5CxXF4kzyySvhtjRs8qnG%2FHyFv7rHXVsqSeZQSl5GqZkR%2FPzS0aJNjFB5QgHqaMRKwvFZyD3jaHUm%2FnOURpQbj8AMgbwGD2wTyOxUvlbtZOC6rZUEG4uer3b3jZOA6JB1x4ny4O8a%2BEg6DtzCp9LZjKy1j%2BN%2BE3RWz9At5cEScbVOJiWEczl2Dm%2FVs%2BaRcWQIUO131AFu9Hx0gRuxhOnKj%2BjAwBGKM8FzLgslE3zoulVnBZExFLOBTJQmu94DLODYr0G0kuV2%2BohoSJGOC9kfdgjLd1GXXmKOixEu9r48g7gKfywszeJj4cQy91dQl5V7DfRATFcdmvKZro3Z7L9Ia8izNf0OFMmdwYdsCkfXfjvuhKTIPLbBuJelCKaX91kC%2BJdg7SK562XvGYQ8TP8pSuI%2B960jWj8kfHTYtRq1vSc4mA1T%2B%2FJgKmtMLiUn8AGOqUBg2seXbMuabm5TlJfj09LWXWgc18VF0T4oif4NNdM1WxplBv34rsT48IdmQ4tJpRvzFaI50ejZYvGLuhHYEJp5wy3FKvLpbHsuSGFv%2Fzi4Z3n4pCKjYNfamuoxg3uO6g7Nki%2BjgBrJl4mIAuJ1UpYNNGVqhmNEZa4QiVZPSPrrqvuTs7AxMcKASchnR24WeKvxhyCoIZlN4NwxPhzl%2B6QHoLh8XwM&X-Amz-Signature=a39e133611498d70083710e407ebd44aea47b3afda7b084165272e96305c620b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUYRIGI%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDqoVgfFa5WkpypMuGvFJxJrN9zfRj7nPHG6jzDEKpKzgIgG0ZYCAjpaFRZFutblo%2Fnr4W%2Bz3HqFedadkNosJ0oAGsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtnvaz3vP5CLFs%2FfCrcA9qGQQLA1iMOj%2B0e%2BWVpw2iH60TO7n21fmWtwRoY1hSiYO20ZQHWYqCrdBoLiI8Mcj1zI9VpMRCcuqSSxw9vdzBn4UHrhm5%2B7MQ5uY%2Fbtd3hxmGJ9XrSY7L9TQAfDLLeIepOPljDAUdZRy0KVG9b2c%2BGGm4vS2K0MLrQ4rCk5CaeHeDOhujayeNnBepks7g8NgyK5CxXF4kzyySvhtjRs8qnG%2FHyFv7rHXVsqSeZQSl5GqZkR%2FPzS0aJNjFB5QgHqaMRKwvFZyD3jaHUm%2FnOURpQbj8AMgbwGD2wTyOxUvlbtZOC6rZUEG4uer3b3jZOA6JB1x4ny4O8a%2BEg6DtzCp9LZjKy1j%2BN%2BE3RWz9At5cEScbVOJiWEczl2Dm%2FVs%2BaRcWQIUO131AFu9Hx0gRuxhOnKj%2BjAwBGKM8FzLgslE3zoulVnBZExFLOBTJQmu94DLODYr0G0kuV2%2BohoSJGOC9kfdgjLd1GXXmKOixEu9r48g7gKfywszeJj4cQy91dQl5V7DfRATFcdmvKZro3Z7L9Ia8izNf0OFMmdwYdsCkfXfjvuhKTIPLbBuJelCKaX91kC%2BJdg7SK562XvGYQ8TP8pSuI%2B960jWj8kfHTYtRq1vSc4mA1T%2B%2FJgKmtMLiUn8AGOqUBg2seXbMuabm5TlJfj09LWXWgc18VF0T4oif4NNdM1WxplBv34rsT48IdmQ4tJpRvzFaI50ejZYvGLuhHYEJp5wy3FKvLpbHsuSGFv%2Fzi4Z3n4pCKjYNfamuoxg3uO6g7Nki%2BjgBrJl4mIAuJ1UpYNNGVqhmNEZa4QiVZPSPrrqvuTs7AxMcKASchnR24WeKvxhyCoIZlN4NwxPhzl%2B6QHoLh8XwM&X-Amz-Signature=4d1f1bd014d0e57c1dfabed477213fc0ce34a60c63538fb5cb87b87c4400ed3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUYRIGI%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDqoVgfFa5WkpypMuGvFJxJrN9zfRj7nPHG6jzDEKpKzgIgG0ZYCAjpaFRZFutblo%2Fnr4W%2Bz3HqFedadkNosJ0oAGsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtnvaz3vP5CLFs%2FfCrcA9qGQQLA1iMOj%2B0e%2BWVpw2iH60TO7n21fmWtwRoY1hSiYO20ZQHWYqCrdBoLiI8Mcj1zI9VpMRCcuqSSxw9vdzBn4UHrhm5%2B7MQ5uY%2Fbtd3hxmGJ9XrSY7L9TQAfDLLeIepOPljDAUdZRy0KVG9b2c%2BGGm4vS2K0MLrQ4rCk5CaeHeDOhujayeNnBepks7g8NgyK5CxXF4kzyySvhtjRs8qnG%2FHyFv7rHXVsqSeZQSl5GqZkR%2FPzS0aJNjFB5QgHqaMRKwvFZyD3jaHUm%2FnOURpQbj8AMgbwGD2wTyOxUvlbtZOC6rZUEG4uer3b3jZOA6JB1x4ny4O8a%2BEg6DtzCp9LZjKy1j%2BN%2BE3RWz9At5cEScbVOJiWEczl2Dm%2FVs%2BaRcWQIUO131AFu9Hx0gRuxhOnKj%2BjAwBGKM8FzLgslE3zoulVnBZExFLOBTJQmu94DLODYr0G0kuV2%2BohoSJGOC9kfdgjLd1GXXmKOixEu9r48g7gKfywszeJj4cQy91dQl5V7DfRATFcdmvKZro3Z7L9Ia8izNf0OFMmdwYdsCkfXfjvuhKTIPLbBuJelCKaX91kC%2BJdg7SK562XvGYQ8TP8pSuI%2B960jWj8kfHTYtRq1vSc4mA1T%2B%2FJgKmtMLiUn8AGOqUBg2seXbMuabm5TlJfj09LWXWgc18VF0T4oif4NNdM1WxplBv34rsT48IdmQ4tJpRvzFaI50ejZYvGLuhHYEJp5wy3FKvLpbHsuSGFv%2Fzi4Z3n4pCKjYNfamuoxg3uO6g7Nki%2BjgBrJl4mIAuJ1UpYNNGVqhmNEZa4QiVZPSPrrqvuTs7AxMcKASchnR24WeKvxhyCoIZlN4NwxPhzl%2B6QHoLh8XwM&X-Amz-Signature=7e78aa88ef5355d95177630884aa12fbf0c338674d53d0f7e2b1f5a426b95458&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUYRIGI%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T170830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIQDqoVgfFa5WkpypMuGvFJxJrN9zfRj7nPHG6jzDEKpKzgIgG0ZYCAjpaFRZFutblo%2Fnr4W%2Bz3HqFedadkNosJ0oAGsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEtnvaz3vP5CLFs%2FfCrcA9qGQQLA1iMOj%2B0e%2BWVpw2iH60TO7n21fmWtwRoY1hSiYO20ZQHWYqCrdBoLiI8Mcj1zI9VpMRCcuqSSxw9vdzBn4UHrhm5%2B7MQ5uY%2Fbtd3hxmGJ9XrSY7L9TQAfDLLeIepOPljDAUdZRy0KVG9b2c%2BGGm4vS2K0MLrQ4rCk5CaeHeDOhujayeNnBepks7g8NgyK5CxXF4kzyySvhtjRs8qnG%2FHyFv7rHXVsqSeZQSl5GqZkR%2FPzS0aJNjFB5QgHqaMRKwvFZyD3jaHUm%2FnOURpQbj8AMgbwGD2wTyOxUvlbtZOC6rZUEG4uer3b3jZOA6JB1x4ny4O8a%2BEg6DtzCp9LZjKy1j%2BN%2BE3RWz9At5cEScbVOJiWEczl2Dm%2FVs%2BaRcWQIUO131AFu9Hx0gRuxhOnKj%2BjAwBGKM8FzLgslE3zoulVnBZExFLOBTJQmu94DLODYr0G0kuV2%2BohoSJGOC9kfdgjLd1GXXmKOixEu9r48g7gKfywszeJj4cQy91dQl5V7DfRATFcdmvKZro3Z7L9Ia8izNf0OFMmdwYdsCkfXfjvuhKTIPLbBuJelCKaX91kC%2BJdg7SK562XvGYQ8TP8pSuI%2B960jWj8kfHTYtRq1vSc4mA1T%2B%2FJgKmtMLiUn8AGOqUBg2seXbMuabm5TlJfj09LWXWgc18VF0T4oif4NNdM1WxplBv34rsT48IdmQ4tJpRvzFaI50ejZYvGLuhHYEJp5wy3FKvLpbHsuSGFv%2Fzi4Z3n4pCKjYNfamuoxg3uO6g7Nki%2BjgBrJl4mIAuJ1UpYNNGVqhmNEZa4QiVZPSPrrqvuTs7AxMcKASchnR24WeKvxhyCoIZlN4NwxPhzl%2B6QHoLh8XwM&X-Amz-Signature=aa01de920a7a65f43ec330d7afbab6516d1c2814606390dc3ee8c97131113f8a&X-Amz-SignedHeaders=host&x-id=GetObject)
