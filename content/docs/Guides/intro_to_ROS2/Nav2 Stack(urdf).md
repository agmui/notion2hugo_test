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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMFHRJZ3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDey1YdaVekVezxsSixWXNhgL1kdicCyztio6%2FO5kST9AiEAstPEtBXSgXfPiUZvVtET8DODVt5GY8fS%2B2p%2F5inhyU0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJNZ7E7vUZ2CBB8oSrcAy9jrOUApI98s5ff%2F8%2BVVSp5bUkx17qUC6In8YLAssZPdAlZvBtriXwf1yRmAEHWLojvp%2B67FfCI6F%2B9yDTxJDI748cpnB3gnLg2x0UozCwCMUUSoszxzwQGBgxfgLU0NBwCBIMUKcBZlqWIGmRruwHv1gk0eKuKFkn99dFHPOFrWW%2BiSh%2FxJJqVv1eHz3QkztkKvJiilAXLobK8zEPRduuGWBVFmgTqz4ssOTTzBjB20964tezOYP6NPgpUWuvM26C8jkUpYe63l4%2B0drkQMQ1X1aYt8bRQpDfEYRg42Djms41556aHFlBktg%2BK9d8fmwlNcWjkcAar6XeH4YE9kmXu9rcndjRGJJkB5A0qYL8%2FVokH0O0vZBBRUAHx4hxXnV5%2BZJKyCPr%2B1q2nEfbBPpxSjO5LAc0qE1g8fgDj4AgZgI3gMX6EB6smXAQd%2BdzKaOUIG2WQVgLY6P2iAJk4Dj0gEW6dYTWuocGLty0LwjqRFzuivGmH5l5f2MyXO%2F%2B0jPRIocUXqD93j%2Bru%2BVWYBbEVTZ6T9CSqXtjO8JV4tY9wfM8s52fiLKJmJeBxqo4tH4JwtYgtsxjBMaeVPuBDh4lmLoxN5Ozl2gYpk%2Bk07X8b5yP%2BxuLr4bGjfT9tMMOy3b0GOqUBByJE2tGoFy9pfvX81vA3VqsiRYqfiSgisLM3VMyppKlkI%2FuapjP9a6wzE0QWozqN56%2FgyByravFfz2L7wxyZdTF9RPN5Mx5sGmi8qJJKFBLz5ShTOqs3xUmOdk7E0VRZ1j%2F7KcXxGZNzjNb2hb%2FfZJYIhcyC93XM55yMOna6c5AIpJD0ieYg7EVCWIGgZjZZCTJT%2F3NkR9BcH6pWZ9t6In5i%2B2T4&X-Amz-Signature=d6ed39ea1250c7084912ce24ba0f2a2c68ad841d9b6ae134a3360106280fd24c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMFHRJZ3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDey1YdaVekVezxsSixWXNhgL1kdicCyztio6%2FO5kST9AiEAstPEtBXSgXfPiUZvVtET8DODVt5GY8fS%2B2p%2F5inhyU0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJNZ7E7vUZ2CBB8oSrcAy9jrOUApI98s5ff%2F8%2BVVSp5bUkx17qUC6In8YLAssZPdAlZvBtriXwf1yRmAEHWLojvp%2B67FfCI6F%2B9yDTxJDI748cpnB3gnLg2x0UozCwCMUUSoszxzwQGBgxfgLU0NBwCBIMUKcBZlqWIGmRruwHv1gk0eKuKFkn99dFHPOFrWW%2BiSh%2FxJJqVv1eHz3QkztkKvJiilAXLobK8zEPRduuGWBVFmgTqz4ssOTTzBjB20964tezOYP6NPgpUWuvM26C8jkUpYe63l4%2B0drkQMQ1X1aYt8bRQpDfEYRg42Djms41556aHFlBktg%2BK9d8fmwlNcWjkcAar6XeH4YE9kmXu9rcndjRGJJkB5A0qYL8%2FVokH0O0vZBBRUAHx4hxXnV5%2BZJKyCPr%2B1q2nEfbBPpxSjO5LAc0qE1g8fgDj4AgZgI3gMX6EB6smXAQd%2BdzKaOUIG2WQVgLY6P2iAJk4Dj0gEW6dYTWuocGLty0LwjqRFzuivGmH5l5f2MyXO%2F%2B0jPRIocUXqD93j%2Bru%2BVWYBbEVTZ6T9CSqXtjO8JV4tY9wfM8s52fiLKJmJeBxqo4tH4JwtYgtsxjBMaeVPuBDh4lmLoxN5Ozl2gYpk%2Bk07X8b5yP%2BxuLr4bGjfT9tMMOy3b0GOqUBByJE2tGoFy9pfvX81vA3VqsiRYqfiSgisLM3VMyppKlkI%2FuapjP9a6wzE0QWozqN56%2FgyByravFfz2L7wxyZdTF9RPN5Mx5sGmi8qJJKFBLz5ShTOqs3xUmOdk7E0VRZ1j%2F7KcXxGZNzjNb2hb%2FfZJYIhcyC93XM55yMOna6c5AIpJD0ieYg7EVCWIGgZjZZCTJT%2F3NkR9BcH6pWZ9t6In5i%2B2T4&X-Amz-Signature=f2769991963b8e2bac9e328d5215578b0e762b401f44f3aecb5d8fd243425292&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMFHRJZ3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDey1YdaVekVezxsSixWXNhgL1kdicCyztio6%2FO5kST9AiEAstPEtBXSgXfPiUZvVtET8DODVt5GY8fS%2B2p%2F5inhyU0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJNZ7E7vUZ2CBB8oSrcAy9jrOUApI98s5ff%2F8%2BVVSp5bUkx17qUC6In8YLAssZPdAlZvBtriXwf1yRmAEHWLojvp%2B67FfCI6F%2B9yDTxJDI748cpnB3gnLg2x0UozCwCMUUSoszxzwQGBgxfgLU0NBwCBIMUKcBZlqWIGmRruwHv1gk0eKuKFkn99dFHPOFrWW%2BiSh%2FxJJqVv1eHz3QkztkKvJiilAXLobK8zEPRduuGWBVFmgTqz4ssOTTzBjB20964tezOYP6NPgpUWuvM26C8jkUpYe63l4%2B0drkQMQ1X1aYt8bRQpDfEYRg42Djms41556aHFlBktg%2BK9d8fmwlNcWjkcAar6XeH4YE9kmXu9rcndjRGJJkB5A0qYL8%2FVokH0O0vZBBRUAHx4hxXnV5%2BZJKyCPr%2B1q2nEfbBPpxSjO5LAc0qE1g8fgDj4AgZgI3gMX6EB6smXAQd%2BdzKaOUIG2WQVgLY6P2iAJk4Dj0gEW6dYTWuocGLty0LwjqRFzuivGmH5l5f2MyXO%2F%2B0jPRIocUXqD93j%2Bru%2BVWYBbEVTZ6T9CSqXtjO8JV4tY9wfM8s52fiLKJmJeBxqo4tH4JwtYgtsxjBMaeVPuBDh4lmLoxN5Ozl2gYpk%2Bk07X8b5yP%2BxuLr4bGjfT9tMMOy3b0GOqUBByJE2tGoFy9pfvX81vA3VqsiRYqfiSgisLM3VMyppKlkI%2FuapjP9a6wzE0QWozqN56%2FgyByravFfz2L7wxyZdTF9RPN5Mx5sGmi8qJJKFBLz5ShTOqs3xUmOdk7E0VRZ1j%2F7KcXxGZNzjNb2hb%2FfZJYIhcyC93XM55yMOna6c5AIpJD0ieYg7EVCWIGgZjZZCTJT%2F3NkR9BcH6pWZ9t6In5i%2B2T4&X-Amz-Signature=fe12345fb908f91e95f8587ccab2ce2c10ee8a215f510879f2804685720582dd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMFHRJZ3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDey1YdaVekVezxsSixWXNhgL1kdicCyztio6%2FO5kST9AiEAstPEtBXSgXfPiUZvVtET8DODVt5GY8fS%2B2p%2F5inhyU0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJNZ7E7vUZ2CBB8oSrcAy9jrOUApI98s5ff%2F8%2BVVSp5bUkx17qUC6In8YLAssZPdAlZvBtriXwf1yRmAEHWLojvp%2B67FfCI6F%2B9yDTxJDI748cpnB3gnLg2x0UozCwCMUUSoszxzwQGBgxfgLU0NBwCBIMUKcBZlqWIGmRruwHv1gk0eKuKFkn99dFHPOFrWW%2BiSh%2FxJJqVv1eHz3QkztkKvJiilAXLobK8zEPRduuGWBVFmgTqz4ssOTTzBjB20964tezOYP6NPgpUWuvM26C8jkUpYe63l4%2B0drkQMQ1X1aYt8bRQpDfEYRg42Djms41556aHFlBktg%2BK9d8fmwlNcWjkcAar6XeH4YE9kmXu9rcndjRGJJkB5A0qYL8%2FVokH0O0vZBBRUAHx4hxXnV5%2BZJKyCPr%2B1q2nEfbBPpxSjO5LAc0qE1g8fgDj4AgZgI3gMX6EB6smXAQd%2BdzKaOUIG2WQVgLY6P2iAJk4Dj0gEW6dYTWuocGLty0LwjqRFzuivGmH5l5f2MyXO%2F%2B0jPRIocUXqD93j%2Bru%2BVWYBbEVTZ6T9CSqXtjO8JV4tY9wfM8s52fiLKJmJeBxqo4tH4JwtYgtsxjBMaeVPuBDh4lmLoxN5Ozl2gYpk%2Bk07X8b5yP%2BxuLr4bGjfT9tMMOy3b0GOqUBByJE2tGoFy9pfvX81vA3VqsiRYqfiSgisLM3VMyppKlkI%2FuapjP9a6wzE0QWozqN56%2FgyByravFfz2L7wxyZdTF9RPN5Mx5sGmi8qJJKFBLz5ShTOqs3xUmOdk7E0VRZ1j%2F7KcXxGZNzjNb2hb%2FfZJYIhcyC93XM55yMOna6c5AIpJD0ieYg7EVCWIGgZjZZCTJT%2F3NkR9BcH6pWZ9t6In5i%2B2T4&X-Amz-Signature=b5e73e803f7c052325c97a023359bc5a4767ee3049934abf9818dd3971b53d7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMFHRJZ3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDey1YdaVekVezxsSixWXNhgL1kdicCyztio6%2FO5kST9AiEAstPEtBXSgXfPiUZvVtET8DODVt5GY8fS%2B2p%2F5inhyU0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJNZ7E7vUZ2CBB8oSrcAy9jrOUApI98s5ff%2F8%2BVVSp5bUkx17qUC6In8YLAssZPdAlZvBtriXwf1yRmAEHWLojvp%2B67FfCI6F%2B9yDTxJDI748cpnB3gnLg2x0UozCwCMUUSoszxzwQGBgxfgLU0NBwCBIMUKcBZlqWIGmRruwHv1gk0eKuKFkn99dFHPOFrWW%2BiSh%2FxJJqVv1eHz3QkztkKvJiilAXLobK8zEPRduuGWBVFmgTqz4ssOTTzBjB20964tezOYP6NPgpUWuvM26C8jkUpYe63l4%2B0drkQMQ1X1aYt8bRQpDfEYRg42Djms41556aHFlBktg%2BK9d8fmwlNcWjkcAar6XeH4YE9kmXu9rcndjRGJJkB5A0qYL8%2FVokH0O0vZBBRUAHx4hxXnV5%2BZJKyCPr%2B1q2nEfbBPpxSjO5LAc0qE1g8fgDj4AgZgI3gMX6EB6smXAQd%2BdzKaOUIG2WQVgLY6P2iAJk4Dj0gEW6dYTWuocGLty0LwjqRFzuivGmH5l5f2MyXO%2F%2B0jPRIocUXqD93j%2Bru%2BVWYBbEVTZ6T9CSqXtjO8JV4tY9wfM8s52fiLKJmJeBxqo4tH4JwtYgtsxjBMaeVPuBDh4lmLoxN5Ozl2gYpk%2Bk07X8b5yP%2BxuLr4bGjfT9tMMOy3b0GOqUBByJE2tGoFy9pfvX81vA3VqsiRYqfiSgisLM3VMyppKlkI%2FuapjP9a6wzE0QWozqN56%2FgyByravFfz2L7wxyZdTF9RPN5Mx5sGmi8qJJKFBLz5ShTOqs3xUmOdk7E0VRZ1j%2F7KcXxGZNzjNb2hb%2FfZJYIhcyC93XM55yMOna6c5AIpJD0ieYg7EVCWIGgZjZZCTJT%2F3NkR9BcH6pWZ9t6In5i%2B2T4&X-Amz-Signature=7a037c0f087617dec57d9b9bccfacf20ce533a5bd65aa1a8f2b2070e774c7799&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMFHRJZ3%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T170709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDey1YdaVekVezxsSixWXNhgL1kdicCyztio6%2FO5kST9AiEAstPEtBXSgXfPiUZvVtET8DODVt5GY8fS%2B2p%2F5inhyU0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJNZ7E7vUZ2CBB8oSrcAy9jrOUApI98s5ff%2F8%2BVVSp5bUkx17qUC6In8YLAssZPdAlZvBtriXwf1yRmAEHWLojvp%2B67FfCI6F%2B9yDTxJDI748cpnB3gnLg2x0UozCwCMUUSoszxzwQGBgxfgLU0NBwCBIMUKcBZlqWIGmRruwHv1gk0eKuKFkn99dFHPOFrWW%2BiSh%2FxJJqVv1eHz3QkztkKvJiilAXLobK8zEPRduuGWBVFmgTqz4ssOTTzBjB20964tezOYP6NPgpUWuvM26C8jkUpYe63l4%2B0drkQMQ1X1aYt8bRQpDfEYRg42Djms41556aHFlBktg%2BK9d8fmwlNcWjkcAar6XeH4YE9kmXu9rcndjRGJJkB5A0qYL8%2FVokH0O0vZBBRUAHx4hxXnV5%2BZJKyCPr%2B1q2nEfbBPpxSjO5LAc0qE1g8fgDj4AgZgI3gMX6EB6smXAQd%2BdzKaOUIG2WQVgLY6P2iAJk4Dj0gEW6dYTWuocGLty0LwjqRFzuivGmH5l5f2MyXO%2F%2B0jPRIocUXqD93j%2Bru%2BVWYBbEVTZ6T9CSqXtjO8JV4tY9wfM8s52fiLKJmJeBxqo4tH4JwtYgtsxjBMaeVPuBDh4lmLoxN5Ozl2gYpk%2Bk07X8b5yP%2BxuLr4bGjfT9tMMOy3b0GOqUBByJE2tGoFy9pfvX81vA3VqsiRYqfiSgisLM3VMyppKlkI%2FuapjP9a6wzE0QWozqN56%2FgyByravFfz2L7wxyZdTF9RPN5Mx5sGmi8qJJKFBLz5ShTOqs3xUmOdk7E0VRZ1j%2F7KcXxGZNzjNb2hb%2FfZJYIhcyC93XM55yMOna6c5AIpJD0ieYg7EVCWIGgZjZZCTJT%2F3NkR9BcH6pWZ9t6In5i%2B2T4&X-Amz-Signature=7b737f3431611fc0c355596ef66252d7563acfde9114628e54ef68966fe8a5a7&X-Amz-SignedHeaders=host&x-id=GetObject)
