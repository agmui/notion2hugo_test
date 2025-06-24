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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRDE6AL%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC%2B4Cp52EB636oVhI0SSrVfU1o8jHS%2BG3oqRNWGZHw6zQIhALfBZco4bsCqIZg2ofwgA%2FrwVHH7ZeIaLWU4KqHTPaZBKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyshKf7oDaP9eq74kq3AMDBNZOJ0kSPLeAMQMaSw6KdwnNI4l2g5eGIfCCxp7CeDw0vALW2nb9DRuumqiJL1N0Sii%2BtpF8bj9dMNLmO%2B1fC88vrnvQY0L2YLOUtj7UPYZIuCrAgRlYdW9ow8ZtMvMVKD6QgiKKNM8G0716%2BiAqn8q8FVyhzKakqIxdzLU0KEhzauoZ%2BZFt%2F1zjDzY4xDW9TQSSb8fM7sa2yJkY5wn1vFDofOOErUpxL97y1mwFoA7Mk%2FZ1T%2FnwXa%2FCDrUtdu5ezb1zhU0Hc%2FBxKDgDWvVGSbc34G7Bf1WA2BjR%2FfpbiUO1b9xvFSwJZskVbE5ioYmasB6jqt3E2ibHQJqqNXg4s5DPtP2BnoXCvzJ%2FAOXTlCG2Mh6tmUSC%2FZiyFXsVX7497nvyNI82cGjAB5XiS3%2FH5g0xDUr7aIJwSHWTBA5Drqi%2FdoVOTs9bzgMIANrDNuNc878%2B9DreEbK7K74MRtHqYZkk1KCE6xhhJgGPeI0OqnUKZQPzVPL9%2B3YscXq8dIBSmjPtfyLylatmJShH0DdtOp4bWm8o7nDoaK3FSrj%2BgcUa45HM2M7iShUs%2BQfYoN0keBQN0mK1LcH%2FTXk2b7Kespw7SyXnIobxD1CZZ%2FZuS9qa1ba4swC%2Bx7XqhDCd3OrCBjqkAetaydt6e2OV622JaZnsJRPNA1fBnGCZbme%2FSUTaLGK0OSKNfEz2KEQEnKh3lEWklwBWhpEdjuO7MEmQ96gEejH0YlNOvLSG%2FfHcJquQSs8ozJLB5YyTqcvg33b93hYEVARSrnFQY5%2BNY9nz7GvK4dmImucQBMwTQJQUwHHqSI4JmQYQceV%2BlidsYA97%2Btr7vj7agab%2Bpt4ehDdBEOtRTLodr5l3&X-Amz-Signature=986028a4fb1930fef0e5918ef55b3ae22ff5e552aca295e33e140aa5abf8c0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRDE6AL%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC%2B4Cp52EB636oVhI0SSrVfU1o8jHS%2BG3oqRNWGZHw6zQIhALfBZco4bsCqIZg2ofwgA%2FrwVHH7ZeIaLWU4KqHTPaZBKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyshKf7oDaP9eq74kq3AMDBNZOJ0kSPLeAMQMaSw6KdwnNI4l2g5eGIfCCxp7CeDw0vALW2nb9DRuumqiJL1N0Sii%2BtpF8bj9dMNLmO%2B1fC88vrnvQY0L2YLOUtj7UPYZIuCrAgRlYdW9ow8ZtMvMVKD6QgiKKNM8G0716%2BiAqn8q8FVyhzKakqIxdzLU0KEhzauoZ%2BZFt%2F1zjDzY4xDW9TQSSb8fM7sa2yJkY5wn1vFDofOOErUpxL97y1mwFoA7Mk%2FZ1T%2FnwXa%2FCDrUtdu5ezb1zhU0Hc%2FBxKDgDWvVGSbc34G7Bf1WA2BjR%2FfpbiUO1b9xvFSwJZskVbE5ioYmasB6jqt3E2ibHQJqqNXg4s5DPtP2BnoXCvzJ%2FAOXTlCG2Mh6tmUSC%2FZiyFXsVX7497nvyNI82cGjAB5XiS3%2FH5g0xDUr7aIJwSHWTBA5Drqi%2FdoVOTs9bzgMIANrDNuNc878%2B9DreEbK7K74MRtHqYZkk1KCE6xhhJgGPeI0OqnUKZQPzVPL9%2B3YscXq8dIBSmjPtfyLylatmJShH0DdtOp4bWm8o7nDoaK3FSrj%2BgcUa45HM2M7iShUs%2BQfYoN0keBQN0mK1LcH%2FTXk2b7Kespw7SyXnIobxD1CZZ%2FZuS9qa1ba4swC%2Bx7XqhDCd3OrCBjqkAetaydt6e2OV622JaZnsJRPNA1fBnGCZbme%2FSUTaLGK0OSKNfEz2KEQEnKh3lEWklwBWhpEdjuO7MEmQ96gEejH0YlNOvLSG%2FfHcJquQSs8ozJLB5YyTqcvg33b93hYEVARSrnFQY5%2BNY9nz7GvK4dmImucQBMwTQJQUwHHqSI4JmQYQceV%2BlidsYA97%2Btr7vj7agab%2Bpt4ehDdBEOtRTLodr5l3&X-Amz-Signature=6c12f512d5322e247053fece623ce8b8c14b1431b17a916c5ec31d9136affa97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRDE6AL%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC%2B4Cp52EB636oVhI0SSrVfU1o8jHS%2BG3oqRNWGZHw6zQIhALfBZco4bsCqIZg2ofwgA%2FrwVHH7ZeIaLWU4KqHTPaZBKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyshKf7oDaP9eq74kq3AMDBNZOJ0kSPLeAMQMaSw6KdwnNI4l2g5eGIfCCxp7CeDw0vALW2nb9DRuumqiJL1N0Sii%2BtpF8bj9dMNLmO%2B1fC88vrnvQY0L2YLOUtj7UPYZIuCrAgRlYdW9ow8ZtMvMVKD6QgiKKNM8G0716%2BiAqn8q8FVyhzKakqIxdzLU0KEhzauoZ%2BZFt%2F1zjDzY4xDW9TQSSb8fM7sa2yJkY5wn1vFDofOOErUpxL97y1mwFoA7Mk%2FZ1T%2FnwXa%2FCDrUtdu5ezb1zhU0Hc%2FBxKDgDWvVGSbc34G7Bf1WA2BjR%2FfpbiUO1b9xvFSwJZskVbE5ioYmasB6jqt3E2ibHQJqqNXg4s5DPtP2BnoXCvzJ%2FAOXTlCG2Mh6tmUSC%2FZiyFXsVX7497nvyNI82cGjAB5XiS3%2FH5g0xDUr7aIJwSHWTBA5Drqi%2FdoVOTs9bzgMIANrDNuNc878%2B9DreEbK7K74MRtHqYZkk1KCE6xhhJgGPeI0OqnUKZQPzVPL9%2B3YscXq8dIBSmjPtfyLylatmJShH0DdtOp4bWm8o7nDoaK3FSrj%2BgcUa45HM2M7iShUs%2BQfYoN0keBQN0mK1LcH%2FTXk2b7Kespw7SyXnIobxD1CZZ%2FZuS9qa1ba4swC%2Bx7XqhDCd3OrCBjqkAetaydt6e2OV622JaZnsJRPNA1fBnGCZbme%2FSUTaLGK0OSKNfEz2KEQEnKh3lEWklwBWhpEdjuO7MEmQ96gEejH0YlNOvLSG%2FfHcJquQSs8ozJLB5YyTqcvg33b93hYEVARSrnFQY5%2BNY9nz7GvK4dmImucQBMwTQJQUwHHqSI4JmQYQceV%2BlidsYA97%2Btr7vj7agab%2Bpt4ehDdBEOtRTLodr5l3&X-Amz-Signature=e93ef416a9467b962e1a8e92c0e9b30ff8348e0fe00372c0b5c68c2905628508&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRDE6AL%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC%2B4Cp52EB636oVhI0SSrVfU1o8jHS%2BG3oqRNWGZHw6zQIhALfBZco4bsCqIZg2ofwgA%2FrwVHH7ZeIaLWU4KqHTPaZBKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyshKf7oDaP9eq74kq3AMDBNZOJ0kSPLeAMQMaSw6KdwnNI4l2g5eGIfCCxp7CeDw0vALW2nb9DRuumqiJL1N0Sii%2BtpF8bj9dMNLmO%2B1fC88vrnvQY0L2YLOUtj7UPYZIuCrAgRlYdW9ow8ZtMvMVKD6QgiKKNM8G0716%2BiAqn8q8FVyhzKakqIxdzLU0KEhzauoZ%2BZFt%2F1zjDzY4xDW9TQSSb8fM7sa2yJkY5wn1vFDofOOErUpxL97y1mwFoA7Mk%2FZ1T%2FnwXa%2FCDrUtdu5ezb1zhU0Hc%2FBxKDgDWvVGSbc34G7Bf1WA2BjR%2FfpbiUO1b9xvFSwJZskVbE5ioYmasB6jqt3E2ibHQJqqNXg4s5DPtP2BnoXCvzJ%2FAOXTlCG2Mh6tmUSC%2FZiyFXsVX7497nvyNI82cGjAB5XiS3%2FH5g0xDUr7aIJwSHWTBA5Drqi%2FdoVOTs9bzgMIANrDNuNc878%2B9DreEbK7K74MRtHqYZkk1KCE6xhhJgGPeI0OqnUKZQPzVPL9%2B3YscXq8dIBSmjPtfyLylatmJShH0DdtOp4bWm8o7nDoaK3FSrj%2BgcUa45HM2M7iShUs%2BQfYoN0keBQN0mK1LcH%2FTXk2b7Kespw7SyXnIobxD1CZZ%2FZuS9qa1ba4swC%2Bx7XqhDCd3OrCBjqkAetaydt6e2OV622JaZnsJRPNA1fBnGCZbme%2FSUTaLGK0OSKNfEz2KEQEnKh3lEWklwBWhpEdjuO7MEmQ96gEejH0YlNOvLSG%2FfHcJquQSs8ozJLB5YyTqcvg33b93hYEVARSrnFQY5%2BNY9nz7GvK4dmImucQBMwTQJQUwHHqSI4JmQYQceV%2BlidsYA97%2Btr7vj7agab%2Bpt4ehDdBEOtRTLodr5l3&X-Amz-Signature=7aacf8df499aeaa380abb6ac8794f88c0bc53eec69aad058d8d8b101ee292dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRDE6AL%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC%2B4Cp52EB636oVhI0SSrVfU1o8jHS%2BG3oqRNWGZHw6zQIhALfBZco4bsCqIZg2ofwgA%2FrwVHH7ZeIaLWU4KqHTPaZBKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyshKf7oDaP9eq74kq3AMDBNZOJ0kSPLeAMQMaSw6KdwnNI4l2g5eGIfCCxp7CeDw0vALW2nb9DRuumqiJL1N0Sii%2BtpF8bj9dMNLmO%2B1fC88vrnvQY0L2YLOUtj7UPYZIuCrAgRlYdW9ow8ZtMvMVKD6QgiKKNM8G0716%2BiAqn8q8FVyhzKakqIxdzLU0KEhzauoZ%2BZFt%2F1zjDzY4xDW9TQSSb8fM7sa2yJkY5wn1vFDofOOErUpxL97y1mwFoA7Mk%2FZ1T%2FnwXa%2FCDrUtdu5ezb1zhU0Hc%2FBxKDgDWvVGSbc34G7Bf1WA2BjR%2FfpbiUO1b9xvFSwJZskVbE5ioYmasB6jqt3E2ibHQJqqNXg4s5DPtP2BnoXCvzJ%2FAOXTlCG2Mh6tmUSC%2FZiyFXsVX7497nvyNI82cGjAB5XiS3%2FH5g0xDUr7aIJwSHWTBA5Drqi%2FdoVOTs9bzgMIANrDNuNc878%2B9DreEbK7K74MRtHqYZkk1KCE6xhhJgGPeI0OqnUKZQPzVPL9%2B3YscXq8dIBSmjPtfyLylatmJShH0DdtOp4bWm8o7nDoaK3FSrj%2BgcUa45HM2M7iShUs%2BQfYoN0keBQN0mK1LcH%2FTXk2b7Kespw7SyXnIobxD1CZZ%2FZuS9qa1ba4swC%2Bx7XqhDCd3OrCBjqkAetaydt6e2OV622JaZnsJRPNA1fBnGCZbme%2FSUTaLGK0OSKNfEz2KEQEnKh3lEWklwBWhpEdjuO7MEmQ96gEejH0YlNOvLSG%2FfHcJquQSs8ozJLB5YyTqcvg33b93hYEVARSrnFQY5%2BNY9nz7GvK4dmImucQBMwTQJQUwHHqSI4JmQYQceV%2BlidsYA97%2Btr7vj7agab%2Bpt4ehDdBEOtRTLodr5l3&X-Amz-Signature=79e4878ef0583a20d613a0b5cc5dd26a86d4151a5e0d0e94ad1cfd5949071fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRDE6AL%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC%2B4Cp52EB636oVhI0SSrVfU1o8jHS%2BG3oqRNWGZHw6zQIhALfBZco4bsCqIZg2ofwgA%2FrwVHH7ZeIaLWU4KqHTPaZBKv8DCC8QABoMNjM3NDIzMTgzODA1IgyyshKf7oDaP9eq74kq3AMDBNZOJ0kSPLeAMQMaSw6KdwnNI4l2g5eGIfCCxp7CeDw0vALW2nb9DRuumqiJL1N0Sii%2BtpF8bj9dMNLmO%2B1fC88vrnvQY0L2YLOUtj7UPYZIuCrAgRlYdW9ow8ZtMvMVKD6QgiKKNM8G0716%2BiAqn8q8FVyhzKakqIxdzLU0KEhzauoZ%2BZFt%2F1zjDzY4xDW9TQSSb8fM7sa2yJkY5wn1vFDofOOErUpxL97y1mwFoA7Mk%2FZ1T%2FnwXa%2FCDrUtdu5ezb1zhU0Hc%2FBxKDgDWvVGSbc34G7Bf1WA2BjR%2FfpbiUO1b9xvFSwJZskVbE5ioYmasB6jqt3E2ibHQJqqNXg4s5DPtP2BnoXCvzJ%2FAOXTlCG2Mh6tmUSC%2FZiyFXsVX7497nvyNI82cGjAB5XiS3%2FH5g0xDUr7aIJwSHWTBA5Drqi%2FdoVOTs9bzgMIANrDNuNc878%2B9DreEbK7K74MRtHqYZkk1KCE6xhhJgGPeI0OqnUKZQPzVPL9%2B3YscXq8dIBSmjPtfyLylatmJShH0DdtOp4bWm8o7nDoaK3FSrj%2BgcUa45HM2M7iShUs%2BQfYoN0keBQN0mK1LcH%2FTXk2b7Kespw7SyXnIobxD1CZZ%2FZuS9qa1ba4swC%2Bx7XqhDCd3OrCBjqkAetaydt6e2OV622JaZnsJRPNA1fBnGCZbme%2FSUTaLGK0OSKNfEz2KEQEnKh3lEWklwBWhpEdjuO7MEmQ96gEejH0YlNOvLSG%2FfHcJquQSs8ozJLB5YyTqcvg33b93hYEVARSrnFQY5%2BNY9nz7GvK4dmImucQBMwTQJQUwHHqSI4JmQYQceV%2BlidsYA97%2Btr7vj7agab%2Bpt4ehDdBEOtRTLodr5l3&X-Amz-Signature=181a4b8ea5e1de3bbb28b43afc56c68e5fc2ea0cb5f9d3a718a58c9bcfe4287a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
