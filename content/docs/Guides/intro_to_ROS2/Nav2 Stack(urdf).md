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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NUY3XI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSV5h3LCfjOncigm7YLT9xtwCQ6PH6zetY5ODRVYRpcwIgbvPzYMyyRYw8q90vhbpifrRTNXnRYeDvjXwHtwxMS7kqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOZb%2FaLsTW6KcA0sSrcA5kvpIhI%2FQD%2Bzl4mthiNakd3AZktCEugz02zVGya3LMP2qTI6KQ%2FD4pCSc0Hcv%2FqQayv%2Fnn31Lar8O24N8RH%2FMcZxvcoY1cnPHjgsryAa6mEw6iOfDw6sfQjEJJ%2ByD8GiTZKPhHmG1YFSTXRICMDQSLDqHBxYb5jbsPGE%2Fiubl4zXjwdS3IQEH5dmc9VdApNBn7teus1z6thZdoXGXcA1WuIVASNARx397h5BHpDgEY9MoGYTP2IQgdGE9oIi4iamLMVnfxdhto47Fz6de1rBjbvYLoVryIV2NKjdgZv%2FNV795fyB5JPPwvziacMc1VEgw2pfDT0%2F9njb02gvy33ykijhbNi%2B8vjIIqxei%2FCx5XDLCXmwoQc5PfuFaculRNvZpxxVFRNMxg4zq%2BMha0Xod3z33ZkRMclJGd7SB33uxJp7j3aB7n1JGQEoaIVhRjehDWUQrV2BE76N3BfzHvvR%2F1CSEzBEaw8XDi9MGygAl4xU6k3KOfvZE%2FgQZ8hcxgnSHaJAjBt7M%2F2zeS9O5pRbfbcfQbHXTadwaywOd7%2BWFc%2F%2BWsNOd0WOC3kJ2rSGh2dl70Tgx5lRnK43bbquN4btv8C7j%2BwksGkhg6vdFjAgiZMYr63IEC1lOrzZiPfMKLTwsMGOqUBFfV%2BtZEnz5uZ4ugeLp9NNqYkfG0RVwRJlLwDOC9CUf0S00%2BUTdtePVeSKKxM4Pi4VVhdFUaoOKG6XQbFSGBJ5R38R7KirwGaKWLrmsqo3HZ5Arwc7G2M3Pb3ywOV0WQlimAfIV9pZrZOAGs9iUnJu4hy0EJGVHqXMA6kDQA0aaDHNxIzR8Uw4EsY4whwuyjhhJzcTr5WgRLywsZH6rCQpfVlwz%2By&X-Amz-Signature=2ad8e56467ce408daa3fb325761881ee68eb0a7f399a2ca2d8e78d4673260223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NUY3XI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSV5h3LCfjOncigm7YLT9xtwCQ6PH6zetY5ODRVYRpcwIgbvPzYMyyRYw8q90vhbpifrRTNXnRYeDvjXwHtwxMS7kqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOZb%2FaLsTW6KcA0sSrcA5kvpIhI%2FQD%2Bzl4mthiNakd3AZktCEugz02zVGya3LMP2qTI6KQ%2FD4pCSc0Hcv%2FqQayv%2Fnn31Lar8O24N8RH%2FMcZxvcoY1cnPHjgsryAa6mEw6iOfDw6sfQjEJJ%2ByD8GiTZKPhHmG1YFSTXRICMDQSLDqHBxYb5jbsPGE%2Fiubl4zXjwdS3IQEH5dmc9VdApNBn7teus1z6thZdoXGXcA1WuIVASNARx397h5BHpDgEY9MoGYTP2IQgdGE9oIi4iamLMVnfxdhto47Fz6de1rBjbvYLoVryIV2NKjdgZv%2FNV795fyB5JPPwvziacMc1VEgw2pfDT0%2F9njb02gvy33ykijhbNi%2B8vjIIqxei%2FCx5XDLCXmwoQc5PfuFaculRNvZpxxVFRNMxg4zq%2BMha0Xod3z33ZkRMclJGd7SB33uxJp7j3aB7n1JGQEoaIVhRjehDWUQrV2BE76N3BfzHvvR%2F1CSEzBEaw8XDi9MGygAl4xU6k3KOfvZE%2FgQZ8hcxgnSHaJAjBt7M%2F2zeS9O5pRbfbcfQbHXTadwaywOd7%2BWFc%2F%2BWsNOd0WOC3kJ2rSGh2dl70Tgx5lRnK43bbquN4btv8C7j%2BwksGkhg6vdFjAgiZMYr63IEC1lOrzZiPfMKLTwsMGOqUBFfV%2BtZEnz5uZ4ugeLp9NNqYkfG0RVwRJlLwDOC9CUf0S00%2BUTdtePVeSKKxM4Pi4VVhdFUaoOKG6XQbFSGBJ5R38R7KirwGaKWLrmsqo3HZ5Arwc7G2M3Pb3ywOV0WQlimAfIV9pZrZOAGs9iUnJu4hy0EJGVHqXMA6kDQA0aaDHNxIzR8Uw4EsY4whwuyjhhJzcTr5WgRLywsZH6rCQpfVlwz%2By&X-Amz-Signature=e419fff16a6303d63fc2d7d57d72f18e774c326a3a3599f01f51fe09aa4573c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NUY3XI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSV5h3LCfjOncigm7YLT9xtwCQ6PH6zetY5ODRVYRpcwIgbvPzYMyyRYw8q90vhbpifrRTNXnRYeDvjXwHtwxMS7kqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOZb%2FaLsTW6KcA0sSrcA5kvpIhI%2FQD%2Bzl4mthiNakd3AZktCEugz02zVGya3LMP2qTI6KQ%2FD4pCSc0Hcv%2FqQayv%2Fnn31Lar8O24N8RH%2FMcZxvcoY1cnPHjgsryAa6mEw6iOfDw6sfQjEJJ%2ByD8GiTZKPhHmG1YFSTXRICMDQSLDqHBxYb5jbsPGE%2Fiubl4zXjwdS3IQEH5dmc9VdApNBn7teus1z6thZdoXGXcA1WuIVASNARx397h5BHpDgEY9MoGYTP2IQgdGE9oIi4iamLMVnfxdhto47Fz6de1rBjbvYLoVryIV2NKjdgZv%2FNV795fyB5JPPwvziacMc1VEgw2pfDT0%2F9njb02gvy33ykijhbNi%2B8vjIIqxei%2FCx5XDLCXmwoQc5PfuFaculRNvZpxxVFRNMxg4zq%2BMha0Xod3z33ZkRMclJGd7SB33uxJp7j3aB7n1JGQEoaIVhRjehDWUQrV2BE76N3BfzHvvR%2F1CSEzBEaw8XDi9MGygAl4xU6k3KOfvZE%2FgQZ8hcxgnSHaJAjBt7M%2F2zeS9O5pRbfbcfQbHXTadwaywOd7%2BWFc%2F%2BWsNOd0WOC3kJ2rSGh2dl70Tgx5lRnK43bbquN4btv8C7j%2BwksGkhg6vdFjAgiZMYr63IEC1lOrzZiPfMKLTwsMGOqUBFfV%2BtZEnz5uZ4ugeLp9NNqYkfG0RVwRJlLwDOC9CUf0S00%2BUTdtePVeSKKxM4Pi4VVhdFUaoOKG6XQbFSGBJ5R38R7KirwGaKWLrmsqo3HZ5Arwc7G2M3Pb3ywOV0WQlimAfIV9pZrZOAGs9iUnJu4hy0EJGVHqXMA6kDQA0aaDHNxIzR8Uw4EsY4whwuyjhhJzcTr5WgRLywsZH6rCQpfVlwz%2By&X-Amz-Signature=fa01e835bfc27f8cb6905fdf6f43a0a945f8f9ce5947bc682bd95d894df0a717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NUY3XI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSV5h3LCfjOncigm7YLT9xtwCQ6PH6zetY5ODRVYRpcwIgbvPzYMyyRYw8q90vhbpifrRTNXnRYeDvjXwHtwxMS7kqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOZb%2FaLsTW6KcA0sSrcA5kvpIhI%2FQD%2Bzl4mthiNakd3AZktCEugz02zVGya3LMP2qTI6KQ%2FD4pCSc0Hcv%2FqQayv%2Fnn31Lar8O24N8RH%2FMcZxvcoY1cnPHjgsryAa6mEw6iOfDw6sfQjEJJ%2ByD8GiTZKPhHmG1YFSTXRICMDQSLDqHBxYb5jbsPGE%2Fiubl4zXjwdS3IQEH5dmc9VdApNBn7teus1z6thZdoXGXcA1WuIVASNARx397h5BHpDgEY9MoGYTP2IQgdGE9oIi4iamLMVnfxdhto47Fz6de1rBjbvYLoVryIV2NKjdgZv%2FNV795fyB5JPPwvziacMc1VEgw2pfDT0%2F9njb02gvy33ykijhbNi%2B8vjIIqxei%2FCx5XDLCXmwoQc5PfuFaculRNvZpxxVFRNMxg4zq%2BMha0Xod3z33ZkRMclJGd7SB33uxJp7j3aB7n1JGQEoaIVhRjehDWUQrV2BE76N3BfzHvvR%2F1CSEzBEaw8XDi9MGygAl4xU6k3KOfvZE%2FgQZ8hcxgnSHaJAjBt7M%2F2zeS9O5pRbfbcfQbHXTadwaywOd7%2BWFc%2F%2BWsNOd0WOC3kJ2rSGh2dl70Tgx5lRnK43bbquN4btv8C7j%2BwksGkhg6vdFjAgiZMYr63IEC1lOrzZiPfMKLTwsMGOqUBFfV%2BtZEnz5uZ4ugeLp9NNqYkfG0RVwRJlLwDOC9CUf0S00%2BUTdtePVeSKKxM4Pi4VVhdFUaoOKG6XQbFSGBJ5R38R7KirwGaKWLrmsqo3HZ5Arwc7G2M3Pb3ywOV0WQlimAfIV9pZrZOAGs9iUnJu4hy0EJGVHqXMA6kDQA0aaDHNxIzR8Uw4EsY4whwuyjhhJzcTr5WgRLywsZH6rCQpfVlwz%2By&X-Amz-Signature=1c99579235ead02c627b1e5cef6375b2fa89c3982e64c16aee53b9fba750df87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NUY3XI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSV5h3LCfjOncigm7YLT9xtwCQ6PH6zetY5ODRVYRpcwIgbvPzYMyyRYw8q90vhbpifrRTNXnRYeDvjXwHtwxMS7kqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOZb%2FaLsTW6KcA0sSrcA5kvpIhI%2FQD%2Bzl4mthiNakd3AZktCEugz02zVGya3LMP2qTI6KQ%2FD4pCSc0Hcv%2FqQayv%2Fnn31Lar8O24N8RH%2FMcZxvcoY1cnPHjgsryAa6mEw6iOfDw6sfQjEJJ%2ByD8GiTZKPhHmG1YFSTXRICMDQSLDqHBxYb5jbsPGE%2Fiubl4zXjwdS3IQEH5dmc9VdApNBn7teus1z6thZdoXGXcA1WuIVASNARx397h5BHpDgEY9MoGYTP2IQgdGE9oIi4iamLMVnfxdhto47Fz6de1rBjbvYLoVryIV2NKjdgZv%2FNV795fyB5JPPwvziacMc1VEgw2pfDT0%2F9njb02gvy33ykijhbNi%2B8vjIIqxei%2FCx5XDLCXmwoQc5PfuFaculRNvZpxxVFRNMxg4zq%2BMha0Xod3z33ZkRMclJGd7SB33uxJp7j3aB7n1JGQEoaIVhRjehDWUQrV2BE76N3BfzHvvR%2F1CSEzBEaw8XDi9MGygAl4xU6k3KOfvZE%2FgQZ8hcxgnSHaJAjBt7M%2F2zeS9O5pRbfbcfQbHXTadwaywOd7%2BWFc%2F%2BWsNOd0WOC3kJ2rSGh2dl70Tgx5lRnK43bbquN4btv8C7j%2BwksGkhg6vdFjAgiZMYr63IEC1lOrzZiPfMKLTwsMGOqUBFfV%2BtZEnz5uZ4ugeLp9NNqYkfG0RVwRJlLwDOC9CUf0S00%2BUTdtePVeSKKxM4Pi4VVhdFUaoOKG6XQbFSGBJ5R38R7KirwGaKWLrmsqo3HZ5Arwc7G2M3Pb3ywOV0WQlimAfIV9pZrZOAGs9iUnJu4hy0EJGVHqXMA6kDQA0aaDHNxIzR8Uw4EsY4whwuyjhhJzcTr5WgRLywsZH6rCQpfVlwz%2By&X-Amz-Signature=c8b8ce76ca4bf0e50ba755ce8298714973969413fa77f0b09db5d5711684d615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624NUY3XI%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T071211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSV5h3LCfjOncigm7YLT9xtwCQ6PH6zetY5ODRVYRpcwIgbvPzYMyyRYw8q90vhbpifrRTNXnRYeDvjXwHtwxMS7kqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBOZb%2FaLsTW6KcA0sSrcA5kvpIhI%2FQD%2Bzl4mthiNakd3AZktCEugz02zVGya3LMP2qTI6KQ%2FD4pCSc0Hcv%2FqQayv%2Fnn31Lar8O24N8RH%2FMcZxvcoY1cnPHjgsryAa6mEw6iOfDw6sfQjEJJ%2ByD8GiTZKPhHmG1YFSTXRICMDQSLDqHBxYb5jbsPGE%2Fiubl4zXjwdS3IQEH5dmc9VdApNBn7teus1z6thZdoXGXcA1WuIVASNARx397h5BHpDgEY9MoGYTP2IQgdGE9oIi4iamLMVnfxdhto47Fz6de1rBjbvYLoVryIV2NKjdgZv%2FNV795fyB5JPPwvziacMc1VEgw2pfDT0%2F9njb02gvy33ykijhbNi%2B8vjIIqxei%2FCx5XDLCXmwoQc5PfuFaculRNvZpxxVFRNMxg4zq%2BMha0Xod3z33ZkRMclJGd7SB33uxJp7j3aB7n1JGQEoaIVhRjehDWUQrV2BE76N3BfzHvvR%2F1CSEzBEaw8XDi9MGygAl4xU6k3KOfvZE%2FgQZ8hcxgnSHaJAjBt7M%2F2zeS9O5pRbfbcfQbHXTadwaywOd7%2BWFc%2F%2BWsNOd0WOC3kJ2rSGh2dl70Tgx5lRnK43bbquN4btv8C7j%2BwksGkhg6vdFjAgiZMYr63IEC1lOrzZiPfMKLTwsMGOqUBFfV%2BtZEnz5uZ4ugeLp9NNqYkfG0RVwRJlLwDOC9CUf0S00%2BUTdtePVeSKKxM4Pi4VVhdFUaoOKG6XQbFSGBJ5R38R7KirwGaKWLrmsqo3HZ5Arwc7G2M3Pb3ywOV0WQlimAfIV9pZrZOAGs9iUnJu4hy0EJGVHqXMA6kDQA0aaDHNxIzR8Uw4EsY4whwuyjhhJzcTr5WgRLywsZH6rCQpfVlwz%2By&X-Amz-Signature=1e0f3cbd438e2a2bceb47bc6b8f4091102eacf4f08aa208e44a56b37713fa400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
