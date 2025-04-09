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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOBKZNNO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFLt0SpA09XbpH%2BDv%2FM3hdHY4%2Fy%2BA7RznW%2FUIrtdjdBsAiEA09QddXi5BFS6wPJoxdLTn4oiI8RSSHygeEqT82Jb8jEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8mig%2FiduyWvaR94ircAwFG2YpUqeDJsbUl44424Szws3xYoLRbkdvxrqYHgwevSLN2Sk7%2FZ1%2BxLp4V6tmgQjf4WB1onfRcHrm4mRfgwHDVhXJum5iIAEGuhnyTZpkhu4ny1UMAa5XUVBggoygpprmrlSKrxGRzVIkbqG4wwDLtIxrhcN4GdxCsq%2B5QPkz6ihgZvlNhlPPEAj2ut%2BHrJwd2gEsMSFjLzP6ZSVvszyFYHArkeJyHbT%2Bol4rSkwmqefvcUtlOz%2FMOlqZPDt%2BanoANPd2zf6n4tmaIFjTZI%2BA5JZgIoXm5w0B14sSVuBtvG3NhCgWw4OV9S9nhFKKtWNhYejm903DDD3htkrGtHrqSuuVY26dyGlavBgkSmseGlAfqbWyEeSUQxeFpnRM17kv3bCvExnBjBs8NmiOYuBy%2BDEFIctgiErYfN2gnA5IDFvuWVs6A25ozYwNnDwflEZg0WdlDcuhp6qXDZy6H34wK6XSrkO9xUYAMwEN5Fk0x%2BwvRZXhYSUZFRso32JLHGt0KKIn5A7NXQNgt9NvIX0XfVRWKmtu8zFMeOXcMtfumCL9PiwobFlDmYgyaDBKGq45OEGB6n2WZXhAy8yCKyGgyWWzKJlUZL3FfXIsotA1hWxyJNRmEnotN6RHgMLbW178GOqUBFfM8n5rheFQK9cert%2Fue2slv2M0%2FD3WI8PWuWjf5srZyY%2BjdWlTTFJzd3K5zIixu%2Fd6pzQ%2BWhwTIjhkkJqNahMyMR3bSn4jwUZ5Cgxf1JXKSKTaNn2d0ME5XwxXWumqy00gtiqeEtqUs4iOWvvsFfTqRv0jNAAUwFrRJj4DwIWf6JT6%2BbbzUbw7mhROlMera%2Fgt3Oxx1HfCC8vy5ALPqX4QpPl2E&X-Amz-Signature=f281ba13408bfb4fbc9d2bf1e97fbc8e15e1b6c46e797803ca4e4ed767d1691d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOBKZNNO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFLt0SpA09XbpH%2BDv%2FM3hdHY4%2Fy%2BA7RznW%2FUIrtdjdBsAiEA09QddXi5BFS6wPJoxdLTn4oiI8RSSHygeEqT82Jb8jEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8mig%2FiduyWvaR94ircAwFG2YpUqeDJsbUl44424Szws3xYoLRbkdvxrqYHgwevSLN2Sk7%2FZ1%2BxLp4V6tmgQjf4WB1onfRcHrm4mRfgwHDVhXJum5iIAEGuhnyTZpkhu4ny1UMAa5XUVBggoygpprmrlSKrxGRzVIkbqG4wwDLtIxrhcN4GdxCsq%2B5QPkz6ihgZvlNhlPPEAj2ut%2BHrJwd2gEsMSFjLzP6ZSVvszyFYHArkeJyHbT%2Bol4rSkwmqefvcUtlOz%2FMOlqZPDt%2BanoANPd2zf6n4tmaIFjTZI%2BA5JZgIoXm5w0B14sSVuBtvG3NhCgWw4OV9S9nhFKKtWNhYejm903DDD3htkrGtHrqSuuVY26dyGlavBgkSmseGlAfqbWyEeSUQxeFpnRM17kv3bCvExnBjBs8NmiOYuBy%2BDEFIctgiErYfN2gnA5IDFvuWVs6A25ozYwNnDwflEZg0WdlDcuhp6qXDZy6H34wK6XSrkO9xUYAMwEN5Fk0x%2BwvRZXhYSUZFRso32JLHGt0KKIn5A7NXQNgt9NvIX0XfVRWKmtu8zFMeOXcMtfumCL9PiwobFlDmYgyaDBKGq45OEGB6n2WZXhAy8yCKyGgyWWzKJlUZL3FfXIsotA1hWxyJNRmEnotN6RHgMLbW178GOqUBFfM8n5rheFQK9cert%2Fue2slv2M0%2FD3WI8PWuWjf5srZyY%2BjdWlTTFJzd3K5zIixu%2Fd6pzQ%2BWhwTIjhkkJqNahMyMR3bSn4jwUZ5Cgxf1JXKSKTaNn2d0ME5XwxXWumqy00gtiqeEtqUs4iOWvvsFfTqRv0jNAAUwFrRJj4DwIWf6JT6%2BbbzUbw7mhROlMera%2Fgt3Oxx1HfCC8vy5ALPqX4QpPl2E&X-Amz-Signature=f735707ffc5c3f44f816d07cf8e107984d379b92f66298e00326e563529a0628&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOBKZNNO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFLt0SpA09XbpH%2BDv%2FM3hdHY4%2Fy%2BA7RznW%2FUIrtdjdBsAiEA09QddXi5BFS6wPJoxdLTn4oiI8RSSHygeEqT82Jb8jEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8mig%2FiduyWvaR94ircAwFG2YpUqeDJsbUl44424Szws3xYoLRbkdvxrqYHgwevSLN2Sk7%2FZ1%2BxLp4V6tmgQjf4WB1onfRcHrm4mRfgwHDVhXJum5iIAEGuhnyTZpkhu4ny1UMAa5XUVBggoygpprmrlSKrxGRzVIkbqG4wwDLtIxrhcN4GdxCsq%2B5QPkz6ihgZvlNhlPPEAj2ut%2BHrJwd2gEsMSFjLzP6ZSVvszyFYHArkeJyHbT%2Bol4rSkwmqefvcUtlOz%2FMOlqZPDt%2BanoANPd2zf6n4tmaIFjTZI%2BA5JZgIoXm5w0B14sSVuBtvG3NhCgWw4OV9S9nhFKKtWNhYejm903DDD3htkrGtHrqSuuVY26dyGlavBgkSmseGlAfqbWyEeSUQxeFpnRM17kv3bCvExnBjBs8NmiOYuBy%2BDEFIctgiErYfN2gnA5IDFvuWVs6A25ozYwNnDwflEZg0WdlDcuhp6qXDZy6H34wK6XSrkO9xUYAMwEN5Fk0x%2BwvRZXhYSUZFRso32JLHGt0KKIn5A7NXQNgt9NvIX0XfVRWKmtu8zFMeOXcMtfumCL9PiwobFlDmYgyaDBKGq45OEGB6n2WZXhAy8yCKyGgyWWzKJlUZL3FfXIsotA1hWxyJNRmEnotN6RHgMLbW178GOqUBFfM8n5rheFQK9cert%2Fue2slv2M0%2FD3WI8PWuWjf5srZyY%2BjdWlTTFJzd3K5zIixu%2Fd6pzQ%2BWhwTIjhkkJqNahMyMR3bSn4jwUZ5Cgxf1JXKSKTaNn2d0ME5XwxXWumqy00gtiqeEtqUs4iOWvvsFfTqRv0jNAAUwFrRJj4DwIWf6JT6%2BbbzUbw7mhROlMera%2Fgt3Oxx1HfCC8vy5ALPqX4QpPl2E&X-Amz-Signature=f50c10768dbd2d6dc1de7d9a168c496abca66ef98f749d82683b74cb4a5b0298&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOBKZNNO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFLt0SpA09XbpH%2BDv%2FM3hdHY4%2Fy%2BA7RznW%2FUIrtdjdBsAiEA09QddXi5BFS6wPJoxdLTn4oiI8RSSHygeEqT82Jb8jEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8mig%2FiduyWvaR94ircAwFG2YpUqeDJsbUl44424Szws3xYoLRbkdvxrqYHgwevSLN2Sk7%2FZ1%2BxLp4V6tmgQjf4WB1onfRcHrm4mRfgwHDVhXJum5iIAEGuhnyTZpkhu4ny1UMAa5XUVBggoygpprmrlSKrxGRzVIkbqG4wwDLtIxrhcN4GdxCsq%2B5QPkz6ihgZvlNhlPPEAj2ut%2BHrJwd2gEsMSFjLzP6ZSVvszyFYHArkeJyHbT%2Bol4rSkwmqefvcUtlOz%2FMOlqZPDt%2BanoANPd2zf6n4tmaIFjTZI%2BA5JZgIoXm5w0B14sSVuBtvG3NhCgWw4OV9S9nhFKKtWNhYejm903DDD3htkrGtHrqSuuVY26dyGlavBgkSmseGlAfqbWyEeSUQxeFpnRM17kv3bCvExnBjBs8NmiOYuBy%2BDEFIctgiErYfN2gnA5IDFvuWVs6A25ozYwNnDwflEZg0WdlDcuhp6qXDZy6H34wK6XSrkO9xUYAMwEN5Fk0x%2BwvRZXhYSUZFRso32JLHGt0KKIn5A7NXQNgt9NvIX0XfVRWKmtu8zFMeOXcMtfumCL9PiwobFlDmYgyaDBKGq45OEGB6n2WZXhAy8yCKyGgyWWzKJlUZL3FfXIsotA1hWxyJNRmEnotN6RHgMLbW178GOqUBFfM8n5rheFQK9cert%2Fue2slv2M0%2FD3WI8PWuWjf5srZyY%2BjdWlTTFJzd3K5zIixu%2Fd6pzQ%2BWhwTIjhkkJqNahMyMR3bSn4jwUZ5Cgxf1JXKSKTaNn2d0ME5XwxXWumqy00gtiqeEtqUs4iOWvvsFfTqRv0jNAAUwFrRJj4DwIWf6JT6%2BbbzUbw7mhROlMera%2Fgt3Oxx1HfCC8vy5ALPqX4QpPl2E&X-Amz-Signature=7c4c3e2f08bcf744c4014545c34b4da2bcc52c5321ae683a5587f5b8c75dae5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOBKZNNO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFLt0SpA09XbpH%2BDv%2FM3hdHY4%2Fy%2BA7RznW%2FUIrtdjdBsAiEA09QddXi5BFS6wPJoxdLTn4oiI8RSSHygeEqT82Jb8jEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8mig%2FiduyWvaR94ircAwFG2YpUqeDJsbUl44424Szws3xYoLRbkdvxrqYHgwevSLN2Sk7%2FZ1%2BxLp4V6tmgQjf4WB1onfRcHrm4mRfgwHDVhXJum5iIAEGuhnyTZpkhu4ny1UMAa5XUVBggoygpprmrlSKrxGRzVIkbqG4wwDLtIxrhcN4GdxCsq%2B5QPkz6ihgZvlNhlPPEAj2ut%2BHrJwd2gEsMSFjLzP6ZSVvszyFYHArkeJyHbT%2Bol4rSkwmqefvcUtlOz%2FMOlqZPDt%2BanoANPd2zf6n4tmaIFjTZI%2BA5JZgIoXm5w0B14sSVuBtvG3NhCgWw4OV9S9nhFKKtWNhYejm903DDD3htkrGtHrqSuuVY26dyGlavBgkSmseGlAfqbWyEeSUQxeFpnRM17kv3bCvExnBjBs8NmiOYuBy%2BDEFIctgiErYfN2gnA5IDFvuWVs6A25ozYwNnDwflEZg0WdlDcuhp6qXDZy6H34wK6XSrkO9xUYAMwEN5Fk0x%2BwvRZXhYSUZFRso32JLHGt0KKIn5A7NXQNgt9NvIX0XfVRWKmtu8zFMeOXcMtfumCL9PiwobFlDmYgyaDBKGq45OEGB6n2WZXhAy8yCKyGgyWWzKJlUZL3FfXIsotA1hWxyJNRmEnotN6RHgMLbW178GOqUBFfM8n5rheFQK9cert%2Fue2slv2M0%2FD3WI8PWuWjf5srZyY%2BjdWlTTFJzd3K5zIixu%2Fd6pzQ%2BWhwTIjhkkJqNahMyMR3bSn4jwUZ5Cgxf1JXKSKTaNn2d0ME5XwxXWumqy00gtiqeEtqUs4iOWvvsFfTqRv0jNAAUwFrRJj4DwIWf6JT6%2BbbzUbw7mhROlMera%2Fgt3Oxx1HfCC8vy5ALPqX4QpPl2E&X-Amz-Signature=62da7148c052e5c237452a4130cc1a725f98f30151d78e46ec7a7a0fb1982e28&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOBKZNNO%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFLt0SpA09XbpH%2BDv%2FM3hdHY4%2Fy%2BA7RznW%2FUIrtdjdBsAiEA09QddXi5BFS6wPJoxdLTn4oiI8RSSHygeEqT82Jb8jEqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8mig%2FiduyWvaR94ircAwFG2YpUqeDJsbUl44424Szws3xYoLRbkdvxrqYHgwevSLN2Sk7%2FZ1%2BxLp4V6tmgQjf4WB1onfRcHrm4mRfgwHDVhXJum5iIAEGuhnyTZpkhu4ny1UMAa5XUVBggoygpprmrlSKrxGRzVIkbqG4wwDLtIxrhcN4GdxCsq%2B5QPkz6ihgZvlNhlPPEAj2ut%2BHrJwd2gEsMSFjLzP6ZSVvszyFYHArkeJyHbT%2Bol4rSkwmqefvcUtlOz%2FMOlqZPDt%2BanoANPd2zf6n4tmaIFjTZI%2BA5JZgIoXm5w0B14sSVuBtvG3NhCgWw4OV9S9nhFKKtWNhYejm903DDD3htkrGtHrqSuuVY26dyGlavBgkSmseGlAfqbWyEeSUQxeFpnRM17kv3bCvExnBjBs8NmiOYuBy%2BDEFIctgiErYfN2gnA5IDFvuWVs6A25ozYwNnDwflEZg0WdlDcuhp6qXDZy6H34wK6XSrkO9xUYAMwEN5Fk0x%2BwvRZXhYSUZFRso32JLHGt0KKIn5A7NXQNgt9NvIX0XfVRWKmtu8zFMeOXcMtfumCL9PiwobFlDmYgyaDBKGq45OEGB6n2WZXhAy8yCKyGgyWWzKJlUZL3FfXIsotA1hWxyJNRmEnotN6RHgMLbW178GOqUBFfM8n5rheFQK9cert%2Fue2slv2M0%2FD3WI8PWuWjf5srZyY%2BjdWlTTFJzd3K5zIixu%2Fd6pzQ%2BWhwTIjhkkJqNahMyMR3bSn4jwUZ5Cgxf1JXKSKTaNn2d0ME5XwxXWumqy00gtiqeEtqUs4iOWvvsFfTqRv0jNAAUwFrRJj4DwIWf6JT6%2BbbzUbw7mhROlMera%2Fgt3Oxx1HfCC8vy5ALPqX4QpPl2E&X-Amz-Signature=617845d5114b1568b07c93cdb3b908b07af7520c9cacb903f5cb590706d53d7a&X-Amz-SignedHeaders=host&x-id=GetObject)
