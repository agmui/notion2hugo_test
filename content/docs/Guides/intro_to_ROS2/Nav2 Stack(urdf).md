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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LTCKQSF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6OR2%2BW7G%2FC5lyzU8qKPN9Nv4YeLPlbZnZrCXKkVlqWAIhAOW6TSymJLdWYZeLYYGZGVGP7lkUN9cuXZpTS5bUoINLKv8DCBoQABoMNjM3NDIzMTgzODA1IgxwiY%2F0%2BQb6sLZjKdYq3AOOnBMjDPFUqRh9GwwE8LWr9UCrsxYPsueGtQioOckfglk%2Fqq7DAEulakv1oK0L5nTxkB5NHUvfOZS2QD0xzPuIIItFcqLKgoxOv3mRk7j26vWBvk7XNKLTx1aSNtN0AfhdXB56qXu1P%2FtKHEK8jjRgwNPqZcNyzZqmmCluWwoJhrfejzVbZPxCs3pyeKRkUm5q7HwEU0ZU1%2FUKXXB1X5da3%2BBfUtHr11pfgXgIMhB%2FP7AlWVHHfuGP%2F5TtAQ7ACuGU4m5RWJ1lh8pbV46uv7Xmj9VJGL8t1YhHf6T3bEdW6LaDkY946zp4yrIfygE2l4kho1GF3DY3im6GxCs9XujZOFAtNNqhveS1fS8dBCs1Q94nGS34LrTnjsI5jdW9VjDUwpzX%2Fo9cPM3xBt4oCR0YLfk%2FJ5deiwb1ajSL7Xj0FXE6t2q2a3Y6E%2F7DEaenBKscbTPI9TLuZ0w8gKdYK73JCd7hSgX%2BQ6dW3FZAwkVlce1MHfH9N7NEXN8ZGn3bYbfRdFJsxV61Z3rSgKfBwENq1POGS%2FgFxUNU6DGhT%2BiTu3%2F7zQYojrpkzJb8TUoapNGIFgtNzNGy2HgWYn72oPfsQSpwjajHrI0Amnve6yb9kBfik4cBLeQhaLxo7DDwg6K%2BBjqkAZRZlyEU4gktk43a7E3p4gdbft7xt5D01qaJ%2FlC0SyN8TleYKfbmwUdtGDROB2tvNsCbeLqjriPrDD%2B4QHIgE197BieluZqdYtRPjiRkYir8g4XWbKm6xzCg6QhLgQNmPDAXHuokFCZ8tt7LUTcMqn7Wg4lMArMD%2BCqQW9lQsR36y6N4iThYwm5venmMpROMeGi5C%2BIqaTrqDmDtTspGNX7g%2Bu3R&X-Amz-Signature=92227bffa43df430de4b1f8c3250d23d5df28291ecd8b6474cebd2ba0f40783d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LTCKQSF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6OR2%2BW7G%2FC5lyzU8qKPN9Nv4YeLPlbZnZrCXKkVlqWAIhAOW6TSymJLdWYZeLYYGZGVGP7lkUN9cuXZpTS5bUoINLKv8DCBoQABoMNjM3NDIzMTgzODA1IgxwiY%2F0%2BQb6sLZjKdYq3AOOnBMjDPFUqRh9GwwE8LWr9UCrsxYPsueGtQioOckfglk%2Fqq7DAEulakv1oK0L5nTxkB5NHUvfOZS2QD0xzPuIIItFcqLKgoxOv3mRk7j26vWBvk7XNKLTx1aSNtN0AfhdXB56qXu1P%2FtKHEK8jjRgwNPqZcNyzZqmmCluWwoJhrfejzVbZPxCs3pyeKRkUm5q7HwEU0ZU1%2FUKXXB1X5da3%2BBfUtHr11pfgXgIMhB%2FP7AlWVHHfuGP%2F5TtAQ7ACuGU4m5RWJ1lh8pbV46uv7Xmj9VJGL8t1YhHf6T3bEdW6LaDkY946zp4yrIfygE2l4kho1GF3DY3im6GxCs9XujZOFAtNNqhveS1fS8dBCs1Q94nGS34LrTnjsI5jdW9VjDUwpzX%2Fo9cPM3xBt4oCR0YLfk%2FJ5deiwb1ajSL7Xj0FXE6t2q2a3Y6E%2F7DEaenBKscbTPI9TLuZ0w8gKdYK73JCd7hSgX%2BQ6dW3FZAwkVlce1MHfH9N7NEXN8ZGn3bYbfRdFJsxV61Z3rSgKfBwENq1POGS%2FgFxUNU6DGhT%2BiTu3%2F7zQYojrpkzJb8TUoapNGIFgtNzNGy2HgWYn72oPfsQSpwjajHrI0Amnve6yb9kBfik4cBLeQhaLxo7DDwg6K%2BBjqkAZRZlyEU4gktk43a7E3p4gdbft7xt5D01qaJ%2FlC0SyN8TleYKfbmwUdtGDROB2tvNsCbeLqjriPrDD%2B4QHIgE197BieluZqdYtRPjiRkYir8g4XWbKm6xzCg6QhLgQNmPDAXHuokFCZ8tt7LUTcMqn7Wg4lMArMD%2BCqQW9lQsR36y6N4iThYwm5venmMpROMeGi5C%2BIqaTrqDmDtTspGNX7g%2Bu3R&X-Amz-Signature=33d8dc065befb5c128e550f3daa52ee72542ccf21461b55877a49527e9fd861f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LTCKQSF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6OR2%2BW7G%2FC5lyzU8qKPN9Nv4YeLPlbZnZrCXKkVlqWAIhAOW6TSymJLdWYZeLYYGZGVGP7lkUN9cuXZpTS5bUoINLKv8DCBoQABoMNjM3NDIzMTgzODA1IgxwiY%2F0%2BQb6sLZjKdYq3AOOnBMjDPFUqRh9GwwE8LWr9UCrsxYPsueGtQioOckfglk%2Fqq7DAEulakv1oK0L5nTxkB5NHUvfOZS2QD0xzPuIIItFcqLKgoxOv3mRk7j26vWBvk7XNKLTx1aSNtN0AfhdXB56qXu1P%2FtKHEK8jjRgwNPqZcNyzZqmmCluWwoJhrfejzVbZPxCs3pyeKRkUm5q7HwEU0ZU1%2FUKXXB1X5da3%2BBfUtHr11pfgXgIMhB%2FP7AlWVHHfuGP%2F5TtAQ7ACuGU4m5RWJ1lh8pbV46uv7Xmj9VJGL8t1YhHf6T3bEdW6LaDkY946zp4yrIfygE2l4kho1GF3DY3im6GxCs9XujZOFAtNNqhveS1fS8dBCs1Q94nGS34LrTnjsI5jdW9VjDUwpzX%2Fo9cPM3xBt4oCR0YLfk%2FJ5deiwb1ajSL7Xj0FXE6t2q2a3Y6E%2F7DEaenBKscbTPI9TLuZ0w8gKdYK73JCd7hSgX%2BQ6dW3FZAwkVlce1MHfH9N7NEXN8ZGn3bYbfRdFJsxV61Z3rSgKfBwENq1POGS%2FgFxUNU6DGhT%2BiTu3%2F7zQYojrpkzJb8TUoapNGIFgtNzNGy2HgWYn72oPfsQSpwjajHrI0Amnve6yb9kBfik4cBLeQhaLxo7DDwg6K%2BBjqkAZRZlyEU4gktk43a7E3p4gdbft7xt5D01qaJ%2FlC0SyN8TleYKfbmwUdtGDROB2tvNsCbeLqjriPrDD%2B4QHIgE197BieluZqdYtRPjiRkYir8g4XWbKm6xzCg6QhLgQNmPDAXHuokFCZ8tt7LUTcMqn7Wg4lMArMD%2BCqQW9lQsR36y6N4iThYwm5venmMpROMeGi5C%2BIqaTrqDmDtTspGNX7g%2Bu3R&X-Amz-Signature=c28b6ec918838b0a5583e7ecfc7bd39b6275b1bd5eff41fa1aed361bd6875808&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LTCKQSF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6OR2%2BW7G%2FC5lyzU8qKPN9Nv4YeLPlbZnZrCXKkVlqWAIhAOW6TSymJLdWYZeLYYGZGVGP7lkUN9cuXZpTS5bUoINLKv8DCBoQABoMNjM3NDIzMTgzODA1IgxwiY%2F0%2BQb6sLZjKdYq3AOOnBMjDPFUqRh9GwwE8LWr9UCrsxYPsueGtQioOckfglk%2Fqq7DAEulakv1oK0L5nTxkB5NHUvfOZS2QD0xzPuIIItFcqLKgoxOv3mRk7j26vWBvk7XNKLTx1aSNtN0AfhdXB56qXu1P%2FtKHEK8jjRgwNPqZcNyzZqmmCluWwoJhrfejzVbZPxCs3pyeKRkUm5q7HwEU0ZU1%2FUKXXB1X5da3%2BBfUtHr11pfgXgIMhB%2FP7AlWVHHfuGP%2F5TtAQ7ACuGU4m5RWJ1lh8pbV46uv7Xmj9VJGL8t1YhHf6T3bEdW6LaDkY946zp4yrIfygE2l4kho1GF3DY3im6GxCs9XujZOFAtNNqhveS1fS8dBCs1Q94nGS34LrTnjsI5jdW9VjDUwpzX%2Fo9cPM3xBt4oCR0YLfk%2FJ5deiwb1ajSL7Xj0FXE6t2q2a3Y6E%2F7DEaenBKscbTPI9TLuZ0w8gKdYK73JCd7hSgX%2BQ6dW3FZAwkVlce1MHfH9N7NEXN8ZGn3bYbfRdFJsxV61Z3rSgKfBwENq1POGS%2FgFxUNU6DGhT%2BiTu3%2F7zQYojrpkzJb8TUoapNGIFgtNzNGy2HgWYn72oPfsQSpwjajHrI0Amnve6yb9kBfik4cBLeQhaLxo7DDwg6K%2BBjqkAZRZlyEU4gktk43a7E3p4gdbft7xt5D01qaJ%2FlC0SyN8TleYKfbmwUdtGDROB2tvNsCbeLqjriPrDD%2B4QHIgE197BieluZqdYtRPjiRkYir8g4XWbKm6xzCg6QhLgQNmPDAXHuokFCZ8tt7LUTcMqn7Wg4lMArMD%2BCqQW9lQsR36y6N4iThYwm5venmMpROMeGi5C%2BIqaTrqDmDtTspGNX7g%2Bu3R&X-Amz-Signature=dffa541dcbc1a1ede2b595f57b0aad1d7accd9409648442b4dffde420a8e0dcd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LTCKQSF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6OR2%2BW7G%2FC5lyzU8qKPN9Nv4YeLPlbZnZrCXKkVlqWAIhAOW6TSymJLdWYZeLYYGZGVGP7lkUN9cuXZpTS5bUoINLKv8DCBoQABoMNjM3NDIzMTgzODA1IgxwiY%2F0%2BQb6sLZjKdYq3AOOnBMjDPFUqRh9GwwE8LWr9UCrsxYPsueGtQioOckfglk%2Fqq7DAEulakv1oK0L5nTxkB5NHUvfOZS2QD0xzPuIIItFcqLKgoxOv3mRk7j26vWBvk7XNKLTx1aSNtN0AfhdXB56qXu1P%2FtKHEK8jjRgwNPqZcNyzZqmmCluWwoJhrfejzVbZPxCs3pyeKRkUm5q7HwEU0ZU1%2FUKXXB1X5da3%2BBfUtHr11pfgXgIMhB%2FP7AlWVHHfuGP%2F5TtAQ7ACuGU4m5RWJ1lh8pbV46uv7Xmj9VJGL8t1YhHf6T3bEdW6LaDkY946zp4yrIfygE2l4kho1GF3DY3im6GxCs9XujZOFAtNNqhveS1fS8dBCs1Q94nGS34LrTnjsI5jdW9VjDUwpzX%2Fo9cPM3xBt4oCR0YLfk%2FJ5deiwb1ajSL7Xj0FXE6t2q2a3Y6E%2F7DEaenBKscbTPI9TLuZ0w8gKdYK73JCd7hSgX%2BQ6dW3FZAwkVlce1MHfH9N7NEXN8ZGn3bYbfRdFJsxV61Z3rSgKfBwENq1POGS%2FgFxUNU6DGhT%2BiTu3%2F7zQYojrpkzJb8TUoapNGIFgtNzNGy2HgWYn72oPfsQSpwjajHrI0Amnve6yb9kBfik4cBLeQhaLxo7DDwg6K%2BBjqkAZRZlyEU4gktk43a7E3p4gdbft7xt5D01qaJ%2FlC0SyN8TleYKfbmwUdtGDROB2tvNsCbeLqjriPrDD%2B4QHIgE197BieluZqdYtRPjiRkYir8g4XWbKm6xzCg6QhLgQNmPDAXHuokFCZ8tt7LUTcMqn7Wg4lMArMD%2BCqQW9lQsR36y6N4iThYwm5venmMpROMeGi5C%2BIqaTrqDmDtTspGNX7g%2Bu3R&X-Amz-Signature=fab63e1c607923e9d2b2d0ea5b3c98a2be3e27832781fe01fbe26dc833a16471&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LTCKQSF%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6OR2%2BW7G%2FC5lyzU8qKPN9Nv4YeLPlbZnZrCXKkVlqWAIhAOW6TSymJLdWYZeLYYGZGVGP7lkUN9cuXZpTS5bUoINLKv8DCBoQABoMNjM3NDIzMTgzODA1IgxwiY%2F0%2BQb6sLZjKdYq3AOOnBMjDPFUqRh9GwwE8LWr9UCrsxYPsueGtQioOckfglk%2Fqq7DAEulakv1oK0L5nTxkB5NHUvfOZS2QD0xzPuIIItFcqLKgoxOv3mRk7j26vWBvk7XNKLTx1aSNtN0AfhdXB56qXu1P%2FtKHEK8jjRgwNPqZcNyzZqmmCluWwoJhrfejzVbZPxCs3pyeKRkUm5q7HwEU0ZU1%2FUKXXB1X5da3%2BBfUtHr11pfgXgIMhB%2FP7AlWVHHfuGP%2F5TtAQ7ACuGU4m5RWJ1lh8pbV46uv7Xmj9VJGL8t1YhHf6T3bEdW6LaDkY946zp4yrIfygE2l4kho1GF3DY3im6GxCs9XujZOFAtNNqhveS1fS8dBCs1Q94nGS34LrTnjsI5jdW9VjDUwpzX%2Fo9cPM3xBt4oCR0YLfk%2FJ5deiwb1ajSL7Xj0FXE6t2q2a3Y6E%2F7DEaenBKscbTPI9TLuZ0w8gKdYK73JCd7hSgX%2BQ6dW3FZAwkVlce1MHfH9N7NEXN8ZGn3bYbfRdFJsxV61Z3rSgKfBwENq1POGS%2FgFxUNU6DGhT%2BiTu3%2F7zQYojrpkzJb8TUoapNGIFgtNzNGy2HgWYn72oPfsQSpwjajHrI0Amnve6yb9kBfik4cBLeQhaLxo7DDwg6K%2BBjqkAZRZlyEU4gktk43a7E3p4gdbft7xt5D01qaJ%2FlC0SyN8TleYKfbmwUdtGDROB2tvNsCbeLqjriPrDD%2B4QHIgE197BieluZqdYtRPjiRkYir8g4XWbKm6xzCg6QhLgQNmPDAXHuokFCZ8tt7LUTcMqn7Wg4lMArMD%2BCqQW9lQsR36y6N4iThYwm5venmMpROMeGi5C%2BIqaTrqDmDtTspGNX7g%2Bu3R&X-Amz-Signature=97d9556ca379aaa2e520a718df4d44f1a34a08165b9cd22d0828fa561172802a&X-Amz-SignedHeaders=host&x-id=GetObject)
