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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJ23TOA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrzQf3vZRVZU9%2FnlL0KGYe9ZEUWGjJQTDy1fx6khlBBwIhAIhOX03bHM6GNr%2BejEiwosVzn3NH2%2F2M9uRR3kzD9he2KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwivpkYmlW2ce5zkq0q3AOQAMV5XqZ8yfqqfdvz1K8fq%2BPatTLSWjP7vQUM0SFGYV04w1C62xTRr%2FcbmUSrApVfZggy8O%2BVUZPVCKbRkQG5y6NmFNIKUj%2BP2gCyDQ12wfhnEzjuz%2FMzJiCrNE1TU4YbFaqMxXHoiErHvMJ49mqAgIJpIvlYyEpUeFAe9oqXs4M2f1KFwfxSO8NIjiBh%2BFHRIbDlUFstgsfPx5HTFZJ01K0lPBeYgZWVz6NcT48ZwOU6WIiomkMfzbYt0kX8LfQQQtZy70NGQR15Us9MiFTECN5EUmpuEBQtt8epMc4ilG87BC3smOg0qX8ukOcJwTzZCg0rujFlqUgjK6RlHkTSoHr5OZoYdnzAhb8%2FxVpP%2B9V8d7PAOm4PR8di3mqAR9MLCN5uwSigu4N0jvkTKUoLMf4JfkWZdqZXXL0dgC5zSjoUJVkBrQ9OBbqa0%2BtI%2B1z7MCWr5RoE4R%2FNAFduHY9gMPguveG53rIIiJ2q%2BAF7R2seSqyhcjdpwnZmI4LukCOgL5lZ4qGaAV4dyKBqUa0Jg1rhSYyGpBGPWuJ4TjukJBONs1pFoZ0vAt1GGeJB74wmwVW4kYffB24Y1EENrjmS8p3bnwg7ZsHGl6QAXfEMxEBdGigrIPeMJfvZrzC9jJrCBjqkAYfIoq0XYFVnQ0rlu9GkvaNf%2BCiXwYjPo6oM07BdZhPTsC651SCdPpj2dbRXOz7ZRz8oWtFJjT9L1SSeM7hWfWlpCu9cC5xdBK%2FalFs7jYdbzZ122a5lZmYlgFU%2FR6lumNvhc9B%2B9bxVFHMyVOGPEgfpeq3m1U6ZCVyY2tiM5n4tG63mrd9ZuLmZ9bbpxAKtNVNRKyLExMe4Gewa%2BZHVqqGetdB0&X-Amz-Signature=464485094546eb7f5b9dbee589c78927a963d2396b714eacbe90094f71d7dc39&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJ23TOA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrzQf3vZRVZU9%2FnlL0KGYe9ZEUWGjJQTDy1fx6khlBBwIhAIhOX03bHM6GNr%2BejEiwosVzn3NH2%2F2M9uRR3kzD9he2KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwivpkYmlW2ce5zkq0q3AOQAMV5XqZ8yfqqfdvz1K8fq%2BPatTLSWjP7vQUM0SFGYV04w1C62xTRr%2FcbmUSrApVfZggy8O%2BVUZPVCKbRkQG5y6NmFNIKUj%2BP2gCyDQ12wfhnEzjuz%2FMzJiCrNE1TU4YbFaqMxXHoiErHvMJ49mqAgIJpIvlYyEpUeFAe9oqXs4M2f1KFwfxSO8NIjiBh%2BFHRIbDlUFstgsfPx5HTFZJ01K0lPBeYgZWVz6NcT48ZwOU6WIiomkMfzbYt0kX8LfQQQtZy70NGQR15Us9MiFTECN5EUmpuEBQtt8epMc4ilG87BC3smOg0qX8ukOcJwTzZCg0rujFlqUgjK6RlHkTSoHr5OZoYdnzAhb8%2FxVpP%2B9V8d7PAOm4PR8di3mqAR9MLCN5uwSigu4N0jvkTKUoLMf4JfkWZdqZXXL0dgC5zSjoUJVkBrQ9OBbqa0%2BtI%2B1z7MCWr5RoE4R%2FNAFduHY9gMPguveG53rIIiJ2q%2BAF7R2seSqyhcjdpwnZmI4LukCOgL5lZ4qGaAV4dyKBqUa0Jg1rhSYyGpBGPWuJ4TjukJBONs1pFoZ0vAt1GGeJB74wmwVW4kYffB24Y1EENrjmS8p3bnwg7ZsHGl6QAXfEMxEBdGigrIPeMJfvZrzC9jJrCBjqkAYfIoq0XYFVnQ0rlu9GkvaNf%2BCiXwYjPo6oM07BdZhPTsC651SCdPpj2dbRXOz7ZRz8oWtFJjT9L1SSeM7hWfWlpCu9cC5xdBK%2FalFs7jYdbzZ122a5lZmYlgFU%2FR6lumNvhc9B%2B9bxVFHMyVOGPEgfpeq3m1U6ZCVyY2tiM5n4tG63mrd9ZuLmZ9bbpxAKtNVNRKyLExMe4Gewa%2BZHVqqGetdB0&X-Amz-Signature=387eafee1c8b522afd27a1bbb6fc98471d593cf1e94eecf4d10e742cdfd6db80&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJ23TOA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrzQf3vZRVZU9%2FnlL0KGYe9ZEUWGjJQTDy1fx6khlBBwIhAIhOX03bHM6GNr%2BejEiwosVzn3NH2%2F2M9uRR3kzD9he2KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwivpkYmlW2ce5zkq0q3AOQAMV5XqZ8yfqqfdvz1K8fq%2BPatTLSWjP7vQUM0SFGYV04w1C62xTRr%2FcbmUSrApVfZggy8O%2BVUZPVCKbRkQG5y6NmFNIKUj%2BP2gCyDQ12wfhnEzjuz%2FMzJiCrNE1TU4YbFaqMxXHoiErHvMJ49mqAgIJpIvlYyEpUeFAe9oqXs4M2f1KFwfxSO8NIjiBh%2BFHRIbDlUFstgsfPx5HTFZJ01K0lPBeYgZWVz6NcT48ZwOU6WIiomkMfzbYt0kX8LfQQQtZy70NGQR15Us9MiFTECN5EUmpuEBQtt8epMc4ilG87BC3smOg0qX8ukOcJwTzZCg0rujFlqUgjK6RlHkTSoHr5OZoYdnzAhb8%2FxVpP%2B9V8d7PAOm4PR8di3mqAR9MLCN5uwSigu4N0jvkTKUoLMf4JfkWZdqZXXL0dgC5zSjoUJVkBrQ9OBbqa0%2BtI%2B1z7MCWr5RoE4R%2FNAFduHY9gMPguveG53rIIiJ2q%2BAF7R2seSqyhcjdpwnZmI4LukCOgL5lZ4qGaAV4dyKBqUa0Jg1rhSYyGpBGPWuJ4TjukJBONs1pFoZ0vAt1GGeJB74wmwVW4kYffB24Y1EENrjmS8p3bnwg7ZsHGl6QAXfEMxEBdGigrIPeMJfvZrzC9jJrCBjqkAYfIoq0XYFVnQ0rlu9GkvaNf%2BCiXwYjPo6oM07BdZhPTsC651SCdPpj2dbRXOz7ZRz8oWtFJjT9L1SSeM7hWfWlpCu9cC5xdBK%2FalFs7jYdbzZ122a5lZmYlgFU%2FR6lumNvhc9B%2B9bxVFHMyVOGPEgfpeq3m1U6ZCVyY2tiM5n4tG63mrd9ZuLmZ9bbpxAKtNVNRKyLExMe4Gewa%2BZHVqqGetdB0&X-Amz-Signature=63d071947792f28a5631b2476c34d9dc988d881b0d65e2ab999008ba595986e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJ23TOA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrzQf3vZRVZU9%2FnlL0KGYe9ZEUWGjJQTDy1fx6khlBBwIhAIhOX03bHM6GNr%2BejEiwosVzn3NH2%2F2M9uRR3kzD9he2KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwivpkYmlW2ce5zkq0q3AOQAMV5XqZ8yfqqfdvz1K8fq%2BPatTLSWjP7vQUM0SFGYV04w1C62xTRr%2FcbmUSrApVfZggy8O%2BVUZPVCKbRkQG5y6NmFNIKUj%2BP2gCyDQ12wfhnEzjuz%2FMzJiCrNE1TU4YbFaqMxXHoiErHvMJ49mqAgIJpIvlYyEpUeFAe9oqXs4M2f1KFwfxSO8NIjiBh%2BFHRIbDlUFstgsfPx5HTFZJ01K0lPBeYgZWVz6NcT48ZwOU6WIiomkMfzbYt0kX8LfQQQtZy70NGQR15Us9MiFTECN5EUmpuEBQtt8epMc4ilG87BC3smOg0qX8ukOcJwTzZCg0rujFlqUgjK6RlHkTSoHr5OZoYdnzAhb8%2FxVpP%2B9V8d7PAOm4PR8di3mqAR9MLCN5uwSigu4N0jvkTKUoLMf4JfkWZdqZXXL0dgC5zSjoUJVkBrQ9OBbqa0%2BtI%2B1z7MCWr5RoE4R%2FNAFduHY9gMPguveG53rIIiJ2q%2BAF7R2seSqyhcjdpwnZmI4LukCOgL5lZ4qGaAV4dyKBqUa0Jg1rhSYyGpBGPWuJ4TjukJBONs1pFoZ0vAt1GGeJB74wmwVW4kYffB24Y1EENrjmS8p3bnwg7ZsHGl6QAXfEMxEBdGigrIPeMJfvZrzC9jJrCBjqkAYfIoq0XYFVnQ0rlu9GkvaNf%2BCiXwYjPo6oM07BdZhPTsC651SCdPpj2dbRXOz7ZRz8oWtFJjT9L1SSeM7hWfWlpCu9cC5xdBK%2FalFs7jYdbzZ122a5lZmYlgFU%2FR6lumNvhc9B%2B9bxVFHMyVOGPEgfpeq3m1U6ZCVyY2tiM5n4tG63mrd9ZuLmZ9bbpxAKtNVNRKyLExMe4Gewa%2BZHVqqGetdB0&X-Amz-Signature=9c31f65fbc75212a82303658757acf1d1133d2c917da6d87877e942c118d2f97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJ23TOA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrzQf3vZRVZU9%2FnlL0KGYe9ZEUWGjJQTDy1fx6khlBBwIhAIhOX03bHM6GNr%2BejEiwosVzn3NH2%2F2M9uRR3kzD9he2KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwivpkYmlW2ce5zkq0q3AOQAMV5XqZ8yfqqfdvz1K8fq%2BPatTLSWjP7vQUM0SFGYV04w1C62xTRr%2FcbmUSrApVfZggy8O%2BVUZPVCKbRkQG5y6NmFNIKUj%2BP2gCyDQ12wfhnEzjuz%2FMzJiCrNE1TU4YbFaqMxXHoiErHvMJ49mqAgIJpIvlYyEpUeFAe9oqXs4M2f1KFwfxSO8NIjiBh%2BFHRIbDlUFstgsfPx5HTFZJ01K0lPBeYgZWVz6NcT48ZwOU6WIiomkMfzbYt0kX8LfQQQtZy70NGQR15Us9MiFTECN5EUmpuEBQtt8epMc4ilG87BC3smOg0qX8ukOcJwTzZCg0rujFlqUgjK6RlHkTSoHr5OZoYdnzAhb8%2FxVpP%2B9V8d7PAOm4PR8di3mqAR9MLCN5uwSigu4N0jvkTKUoLMf4JfkWZdqZXXL0dgC5zSjoUJVkBrQ9OBbqa0%2BtI%2B1z7MCWr5RoE4R%2FNAFduHY9gMPguveG53rIIiJ2q%2BAF7R2seSqyhcjdpwnZmI4LukCOgL5lZ4qGaAV4dyKBqUa0Jg1rhSYyGpBGPWuJ4TjukJBONs1pFoZ0vAt1GGeJB74wmwVW4kYffB24Y1EENrjmS8p3bnwg7ZsHGl6QAXfEMxEBdGigrIPeMJfvZrzC9jJrCBjqkAYfIoq0XYFVnQ0rlu9GkvaNf%2BCiXwYjPo6oM07BdZhPTsC651SCdPpj2dbRXOz7ZRz8oWtFJjT9L1SSeM7hWfWlpCu9cC5xdBK%2FalFs7jYdbzZ122a5lZmYlgFU%2FR6lumNvhc9B%2B9bxVFHMyVOGPEgfpeq3m1U6ZCVyY2tiM5n4tG63mrd9ZuLmZ9bbpxAKtNVNRKyLExMe4Gewa%2BZHVqqGetdB0&X-Amz-Signature=d9de73a3714fc4778f3b7acf199cb27af083eb2d3d1ed07ba0fc526a2e86b7c1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZJ23TOA%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T071107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrzQf3vZRVZU9%2FnlL0KGYe9ZEUWGjJQTDy1fx6khlBBwIhAIhOX03bHM6GNr%2BejEiwosVzn3NH2%2F2M9uRR3kzD9he2KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwivpkYmlW2ce5zkq0q3AOQAMV5XqZ8yfqqfdvz1K8fq%2BPatTLSWjP7vQUM0SFGYV04w1C62xTRr%2FcbmUSrApVfZggy8O%2BVUZPVCKbRkQG5y6NmFNIKUj%2BP2gCyDQ12wfhnEzjuz%2FMzJiCrNE1TU4YbFaqMxXHoiErHvMJ49mqAgIJpIvlYyEpUeFAe9oqXs4M2f1KFwfxSO8NIjiBh%2BFHRIbDlUFstgsfPx5HTFZJ01K0lPBeYgZWVz6NcT48ZwOU6WIiomkMfzbYt0kX8LfQQQtZy70NGQR15Us9MiFTECN5EUmpuEBQtt8epMc4ilG87BC3smOg0qX8ukOcJwTzZCg0rujFlqUgjK6RlHkTSoHr5OZoYdnzAhb8%2FxVpP%2B9V8d7PAOm4PR8di3mqAR9MLCN5uwSigu4N0jvkTKUoLMf4JfkWZdqZXXL0dgC5zSjoUJVkBrQ9OBbqa0%2BtI%2B1z7MCWr5RoE4R%2FNAFduHY9gMPguveG53rIIiJ2q%2BAF7R2seSqyhcjdpwnZmI4LukCOgL5lZ4qGaAV4dyKBqUa0Jg1rhSYyGpBGPWuJ4TjukJBONs1pFoZ0vAt1GGeJB74wmwVW4kYffB24Y1EENrjmS8p3bnwg7ZsHGl6QAXfEMxEBdGigrIPeMJfvZrzC9jJrCBjqkAYfIoq0XYFVnQ0rlu9GkvaNf%2BCiXwYjPo6oM07BdZhPTsC651SCdPpj2dbRXOz7ZRz8oWtFJjT9L1SSeM7hWfWlpCu9cC5xdBK%2FalFs7jYdbzZ122a5lZmYlgFU%2FR6lumNvhc9B%2B9bxVFHMyVOGPEgfpeq3m1U6ZCVyY2tiM5n4tG63mrd9ZuLmZ9bbpxAKtNVNRKyLExMe4Gewa%2BZHVqqGetdB0&X-Amz-Signature=1dc8be3372aec031980edf7bf4c6df98493311a1578f90c134ab17dd9bdd4b22&X-Amz-SignedHeaders=host&x-id=GetObject)
