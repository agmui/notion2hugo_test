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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JZCEFC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC70TEpYQ3MYZTneOAfd8SC0gl%2FBv0XSI9AplNl9x4DhAiEA89HdK2Shwo95L5%2F%2BVfOD2uyl39Jw8j4qkpNE8qv%2BFy8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCiBu0Ieiuw6YSHjNyrcA2ZGOqFo%2FJWbE%2BFNNLQSWfGTdx4FO4um3H7TS7uWMNuPML84Y1HAOxOPXQB9nfifDC1GGSeEhJzdPnayzeHnTv%2BrKFFJJFDq4mjo8hI2zG3G8UV0%2FuOsrpoDzXPf%2B9fzoKDttp0PwxJIeRrZ4hzwfwCYD%2F2rNmzEWCc%2F00Zbh9eT2Yg93%2FSA6%2B3GkLeDGlzuiHVx3AgBhfgrPTtV%2B5c41SdF8z7ZM6N5PmUOjDoidCTVhVpdTBRmSCxnnpvPkMyRrs4mMtp4PIVdvd7fiEOGCCGE9CZFrRJZj7zUuw%2Fu%2B9CbIxjMmcJ%2Btr6%2ByM8QqffzlNoI3agl75BKqOGNhRNlrbapssXBxHJmnXoETJg8QZh13Q4IKrUTSiQabxhohEVbSyZ2jnfFdPRmfsVUUAS5hBKOCxonTWOGwbPazT%2FJTzIpTrtacBH7I3KZ4IO4be5atYkjJigFSVHPlu8EcnmwUYkay3MW4bH%2FQljaiLDa%2B5gaMeREqv6KFPsob6wCET0do3ZZs0SM3kBbEOdfFmaL4gzpwTNjP6OKZhmHE8lVhUmaDS4B%2BdM%2BuaMMGnn5WwKHW6Exp0Gy0dtuKn8HXikuSLXPAZqKYLOz1jt%2F4b%2BS6dlsdcV0NQuAMO46WczhMMGX6MAGOqUBVhV0CjlmCvlxZZlfY3zNKFXyBunkbWjW8gnEEr%2FuNACGQZIe18v4%2FXuQWeQzA%2FQcTB5bEjqEnS5Xcqi5fkXyTQqaHMthQntf7SlDc0JIsb2DpHhCfSgpHZ12zOCVEZdgw0Yx4TLZ0l8uoK8hZ%2Ft1lR70sJaAq8reIy66S%2FdE5sxl5wTkpZcXn5ZKvC7NDtQoBtNsRT3qLKXIKZgOY4lXgtWpLjqM&X-Amz-Signature=f2b03b194fa18c32563e72be76cc7959da19d0a3b0848e9877b32c812a7c935d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JZCEFC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC70TEpYQ3MYZTneOAfd8SC0gl%2FBv0XSI9AplNl9x4DhAiEA89HdK2Shwo95L5%2F%2BVfOD2uyl39Jw8j4qkpNE8qv%2BFy8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCiBu0Ieiuw6YSHjNyrcA2ZGOqFo%2FJWbE%2BFNNLQSWfGTdx4FO4um3H7TS7uWMNuPML84Y1HAOxOPXQB9nfifDC1GGSeEhJzdPnayzeHnTv%2BrKFFJJFDq4mjo8hI2zG3G8UV0%2FuOsrpoDzXPf%2B9fzoKDttp0PwxJIeRrZ4hzwfwCYD%2F2rNmzEWCc%2F00Zbh9eT2Yg93%2FSA6%2B3GkLeDGlzuiHVx3AgBhfgrPTtV%2B5c41SdF8z7ZM6N5PmUOjDoidCTVhVpdTBRmSCxnnpvPkMyRrs4mMtp4PIVdvd7fiEOGCCGE9CZFrRJZj7zUuw%2Fu%2B9CbIxjMmcJ%2Btr6%2ByM8QqffzlNoI3agl75BKqOGNhRNlrbapssXBxHJmnXoETJg8QZh13Q4IKrUTSiQabxhohEVbSyZ2jnfFdPRmfsVUUAS5hBKOCxonTWOGwbPazT%2FJTzIpTrtacBH7I3KZ4IO4be5atYkjJigFSVHPlu8EcnmwUYkay3MW4bH%2FQljaiLDa%2B5gaMeREqv6KFPsob6wCET0do3ZZs0SM3kBbEOdfFmaL4gzpwTNjP6OKZhmHE8lVhUmaDS4B%2BdM%2BuaMMGnn5WwKHW6Exp0Gy0dtuKn8HXikuSLXPAZqKYLOz1jt%2F4b%2BS6dlsdcV0NQuAMO46WczhMMGX6MAGOqUBVhV0CjlmCvlxZZlfY3zNKFXyBunkbWjW8gnEEr%2FuNACGQZIe18v4%2FXuQWeQzA%2FQcTB5bEjqEnS5Xcqi5fkXyTQqaHMthQntf7SlDc0JIsb2DpHhCfSgpHZ12zOCVEZdgw0Yx4TLZ0l8uoK8hZ%2Ft1lR70sJaAq8reIy66S%2FdE5sxl5wTkpZcXn5ZKvC7NDtQoBtNsRT3qLKXIKZgOY4lXgtWpLjqM&X-Amz-Signature=702d7d90c3cf7b4b246389533a754ef153176456148c380f699fd2aecd109ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JZCEFC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC70TEpYQ3MYZTneOAfd8SC0gl%2FBv0XSI9AplNl9x4DhAiEA89HdK2Shwo95L5%2F%2BVfOD2uyl39Jw8j4qkpNE8qv%2BFy8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCiBu0Ieiuw6YSHjNyrcA2ZGOqFo%2FJWbE%2BFNNLQSWfGTdx4FO4um3H7TS7uWMNuPML84Y1HAOxOPXQB9nfifDC1GGSeEhJzdPnayzeHnTv%2BrKFFJJFDq4mjo8hI2zG3G8UV0%2FuOsrpoDzXPf%2B9fzoKDttp0PwxJIeRrZ4hzwfwCYD%2F2rNmzEWCc%2F00Zbh9eT2Yg93%2FSA6%2B3GkLeDGlzuiHVx3AgBhfgrPTtV%2B5c41SdF8z7ZM6N5PmUOjDoidCTVhVpdTBRmSCxnnpvPkMyRrs4mMtp4PIVdvd7fiEOGCCGE9CZFrRJZj7zUuw%2Fu%2B9CbIxjMmcJ%2Btr6%2ByM8QqffzlNoI3agl75BKqOGNhRNlrbapssXBxHJmnXoETJg8QZh13Q4IKrUTSiQabxhohEVbSyZ2jnfFdPRmfsVUUAS5hBKOCxonTWOGwbPazT%2FJTzIpTrtacBH7I3KZ4IO4be5atYkjJigFSVHPlu8EcnmwUYkay3MW4bH%2FQljaiLDa%2B5gaMeREqv6KFPsob6wCET0do3ZZs0SM3kBbEOdfFmaL4gzpwTNjP6OKZhmHE8lVhUmaDS4B%2BdM%2BuaMMGnn5WwKHW6Exp0Gy0dtuKn8HXikuSLXPAZqKYLOz1jt%2F4b%2BS6dlsdcV0NQuAMO46WczhMMGX6MAGOqUBVhV0CjlmCvlxZZlfY3zNKFXyBunkbWjW8gnEEr%2FuNACGQZIe18v4%2FXuQWeQzA%2FQcTB5bEjqEnS5Xcqi5fkXyTQqaHMthQntf7SlDc0JIsb2DpHhCfSgpHZ12zOCVEZdgw0Yx4TLZ0l8uoK8hZ%2Ft1lR70sJaAq8reIy66S%2FdE5sxl5wTkpZcXn5ZKvC7NDtQoBtNsRT3qLKXIKZgOY4lXgtWpLjqM&X-Amz-Signature=1a0d075310d1f8b299bc21dd8df0b8f265722daa678c88e58277f74325b9c99f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JZCEFC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC70TEpYQ3MYZTneOAfd8SC0gl%2FBv0XSI9AplNl9x4DhAiEA89HdK2Shwo95L5%2F%2BVfOD2uyl39Jw8j4qkpNE8qv%2BFy8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCiBu0Ieiuw6YSHjNyrcA2ZGOqFo%2FJWbE%2BFNNLQSWfGTdx4FO4um3H7TS7uWMNuPML84Y1HAOxOPXQB9nfifDC1GGSeEhJzdPnayzeHnTv%2BrKFFJJFDq4mjo8hI2zG3G8UV0%2FuOsrpoDzXPf%2B9fzoKDttp0PwxJIeRrZ4hzwfwCYD%2F2rNmzEWCc%2F00Zbh9eT2Yg93%2FSA6%2B3GkLeDGlzuiHVx3AgBhfgrPTtV%2B5c41SdF8z7ZM6N5PmUOjDoidCTVhVpdTBRmSCxnnpvPkMyRrs4mMtp4PIVdvd7fiEOGCCGE9CZFrRJZj7zUuw%2Fu%2B9CbIxjMmcJ%2Btr6%2ByM8QqffzlNoI3agl75BKqOGNhRNlrbapssXBxHJmnXoETJg8QZh13Q4IKrUTSiQabxhohEVbSyZ2jnfFdPRmfsVUUAS5hBKOCxonTWOGwbPazT%2FJTzIpTrtacBH7I3KZ4IO4be5atYkjJigFSVHPlu8EcnmwUYkay3MW4bH%2FQljaiLDa%2B5gaMeREqv6KFPsob6wCET0do3ZZs0SM3kBbEOdfFmaL4gzpwTNjP6OKZhmHE8lVhUmaDS4B%2BdM%2BuaMMGnn5WwKHW6Exp0Gy0dtuKn8HXikuSLXPAZqKYLOz1jt%2F4b%2BS6dlsdcV0NQuAMO46WczhMMGX6MAGOqUBVhV0CjlmCvlxZZlfY3zNKFXyBunkbWjW8gnEEr%2FuNACGQZIe18v4%2FXuQWeQzA%2FQcTB5bEjqEnS5Xcqi5fkXyTQqaHMthQntf7SlDc0JIsb2DpHhCfSgpHZ12zOCVEZdgw0Yx4TLZ0l8uoK8hZ%2Ft1lR70sJaAq8reIy66S%2FdE5sxl5wTkpZcXn5ZKvC7NDtQoBtNsRT3qLKXIKZgOY4lXgtWpLjqM&X-Amz-Signature=a5eea4124e984f5ba6dda050bca79a485ca3a7a5192e9b9adcfbc6f598505415&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JZCEFC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC70TEpYQ3MYZTneOAfd8SC0gl%2FBv0XSI9AplNl9x4DhAiEA89HdK2Shwo95L5%2F%2BVfOD2uyl39Jw8j4qkpNE8qv%2BFy8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCiBu0Ieiuw6YSHjNyrcA2ZGOqFo%2FJWbE%2BFNNLQSWfGTdx4FO4um3H7TS7uWMNuPML84Y1HAOxOPXQB9nfifDC1GGSeEhJzdPnayzeHnTv%2BrKFFJJFDq4mjo8hI2zG3G8UV0%2FuOsrpoDzXPf%2B9fzoKDttp0PwxJIeRrZ4hzwfwCYD%2F2rNmzEWCc%2F00Zbh9eT2Yg93%2FSA6%2B3GkLeDGlzuiHVx3AgBhfgrPTtV%2B5c41SdF8z7ZM6N5PmUOjDoidCTVhVpdTBRmSCxnnpvPkMyRrs4mMtp4PIVdvd7fiEOGCCGE9CZFrRJZj7zUuw%2Fu%2B9CbIxjMmcJ%2Btr6%2ByM8QqffzlNoI3agl75BKqOGNhRNlrbapssXBxHJmnXoETJg8QZh13Q4IKrUTSiQabxhohEVbSyZ2jnfFdPRmfsVUUAS5hBKOCxonTWOGwbPazT%2FJTzIpTrtacBH7I3KZ4IO4be5atYkjJigFSVHPlu8EcnmwUYkay3MW4bH%2FQljaiLDa%2B5gaMeREqv6KFPsob6wCET0do3ZZs0SM3kBbEOdfFmaL4gzpwTNjP6OKZhmHE8lVhUmaDS4B%2BdM%2BuaMMGnn5WwKHW6Exp0Gy0dtuKn8HXikuSLXPAZqKYLOz1jt%2F4b%2BS6dlsdcV0NQuAMO46WczhMMGX6MAGOqUBVhV0CjlmCvlxZZlfY3zNKFXyBunkbWjW8gnEEr%2FuNACGQZIe18v4%2FXuQWeQzA%2FQcTB5bEjqEnS5Xcqi5fkXyTQqaHMthQntf7SlDc0JIsb2DpHhCfSgpHZ12zOCVEZdgw0Yx4TLZ0l8uoK8hZ%2Ft1lR70sJaAq8reIy66S%2FdE5sxl5wTkpZcXn5ZKvC7NDtQoBtNsRT3qLKXIKZgOY4lXgtWpLjqM&X-Amz-Signature=3ed1c403682f30bf9ec15c9f8203e8e46867551531faff115e694a300a4c9626&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JZCEFC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC70TEpYQ3MYZTneOAfd8SC0gl%2FBv0XSI9AplNl9x4DhAiEA89HdK2Shwo95L5%2F%2BVfOD2uyl39Jw8j4qkpNE8qv%2BFy8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCiBu0Ieiuw6YSHjNyrcA2ZGOqFo%2FJWbE%2BFNNLQSWfGTdx4FO4um3H7TS7uWMNuPML84Y1HAOxOPXQB9nfifDC1GGSeEhJzdPnayzeHnTv%2BrKFFJJFDq4mjo8hI2zG3G8UV0%2FuOsrpoDzXPf%2B9fzoKDttp0PwxJIeRrZ4hzwfwCYD%2F2rNmzEWCc%2F00Zbh9eT2Yg93%2FSA6%2B3GkLeDGlzuiHVx3AgBhfgrPTtV%2B5c41SdF8z7ZM6N5PmUOjDoidCTVhVpdTBRmSCxnnpvPkMyRrs4mMtp4PIVdvd7fiEOGCCGE9CZFrRJZj7zUuw%2Fu%2B9CbIxjMmcJ%2Btr6%2ByM8QqffzlNoI3agl75BKqOGNhRNlrbapssXBxHJmnXoETJg8QZh13Q4IKrUTSiQabxhohEVbSyZ2jnfFdPRmfsVUUAS5hBKOCxonTWOGwbPazT%2FJTzIpTrtacBH7I3KZ4IO4be5atYkjJigFSVHPlu8EcnmwUYkay3MW4bH%2FQljaiLDa%2B5gaMeREqv6KFPsob6wCET0do3ZZs0SM3kBbEOdfFmaL4gzpwTNjP6OKZhmHE8lVhUmaDS4B%2BdM%2BuaMMGnn5WwKHW6Exp0Gy0dtuKn8HXikuSLXPAZqKYLOz1jt%2F4b%2BS6dlsdcV0NQuAMO46WczhMMGX6MAGOqUBVhV0CjlmCvlxZZlfY3zNKFXyBunkbWjW8gnEEr%2FuNACGQZIe18v4%2FXuQWeQzA%2FQcTB5bEjqEnS5Xcqi5fkXyTQqaHMthQntf7SlDc0JIsb2DpHhCfSgpHZ12zOCVEZdgw0Yx4TLZ0l8uoK8hZ%2Ft1lR70sJaAq8reIy66S%2FdE5sxl5wTkpZcXn5ZKvC7NDtQoBtNsRT3qLKXIKZgOY4lXgtWpLjqM&X-Amz-Signature=515d8aaac30fca954299257ec6bf841d1515a73a1dbc0481bd9645cacc5360e4&X-Amz-SignedHeaders=host&x-id=GetObject)
