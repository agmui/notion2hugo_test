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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQZ4MWJX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChCFuCUDTu3MEM5ZYjkCYGqtxDtiE8l171jtBkYmCVDAiBgO%2FLqeNlCDWHsg1q%2BkbN8i0Zbhk3ylZ6%2Fx7fRELRCjSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDW9cNSUxdzjQeu%2BKtwDimTV2ApNTogWkuZxRmfb2dEEqn1cBswTW9SUTIPn4CQN%2BshfkV7wyywkvHFcgtn01zLI5cElLml4xhOQjRFFdDnruX9Ohavm4snPKqr5aPrzA2J4%2B2fwdHUKMZpMyUPVgrn0tpUFyAQ2ETaNmrfb8idIpLUOfjTPX9LsL9GWraKSkHOa%2B9pcK%2F%2FpdQpZmq5O18i0JZRgKTsjfXVZni8OUuq5hHXMtgb9SDbs6omLKbto9H7p3CfG5mcZE%2FuF8ev7MU8cvzsGcGrl32w1KHo4XDqpVKKMwHeHP7d3V9Ij8WDQF4VxWwrzz45Wp3jJ5smMV0YxC1aKSPgtMt3lWcCue05JfWpU2npdHpYqD8sjXSvd7xoLxagLKdav4svgJYlkcZysIkNtWa8KrVfN2x%2F1e34FfS2JDCZx8vvLRs%2BCEPVDA1qtTLHTvBUvkWMNxgcplD4lcfwR%2F9vT%2FmX7zcQlRqhJY5%2Bt01RLgfuGyLpexDpuIUtOE4ur5KlpcHps9TJytIF%2BCVdH1Nbxjy9NHZHEjjmb4wEa7Bi0FG7pv6nVWy9N6ZpUnm11SlFj6owSb8B0eIHlKf0IPsmHob0U7mQWwK7aduYlvpP5VUIs8eQvGZP0TtIJdufzBxvOBZww9KHFwAY6pgEK5YdOticgpf%2BIZuxk5ZK6IycUEeWxk%2B19jWjyfsFkLIb5WaMK1TcLvNqf0LlD%2BcoQGT6NIf8DDf1ahpezHhWCSUlgqKv5P2HE6aU%2FF1yq0SAdRGJPhE6HEWKgl%2Fw%2Blbk22TCJRtC1oN0MRBWD7Wt%2FdE8K24rroUAxKFpk2wxfOVHLMaxNPk698f5bO%2B7vsaLzLaLaSBQgjUU3vszGpYvRC8udOaWC&X-Amz-Signature=0fec24e1cd484220369142fa32c8330e9531150f0d19eb5a19a8d134052fcb2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQZ4MWJX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChCFuCUDTu3MEM5ZYjkCYGqtxDtiE8l171jtBkYmCVDAiBgO%2FLqeNlCDWHsg1q%2BkbN8i0Zbhk3ylZ6%2Fx7fRELRCjSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDW9cNSUxdzjQeu%2BKtwDimTV2ApNTogWkuZxRmfb2dEEqn1cBswTW9SUTIPn4CQN%2BshfkV7wyywkvHFcgtn01zLI5cElLml4xhOQjRFFdDnruX9Ohavm4snPKqr5aPrzA2J4%2B2fwdHUKMZpMyUPVgrn0tpUFyAQ2ETaNmrfb8idIpLUOfjTPX9LsL9GWraKSkHOa%2B9pcK%2F%2FpdQpZmq5O18i0JZRgKTsjfXVZni8OUuq5hHXMtgb9SDbs6omLKbto9H7p3CfG5mcZE%2FuF8ev7MU8cvzsGcGrl32w1KHo4XDqpVKKMwHeHP7d3V9Ij8WDQF4VxWwrzz45Wp3jJ5smMV0YxC1aKSPgtMt3lWcCue05JfWpU2npdHpYqD8sjXSvd7xoLxagLKdav4svgJYlkcZysIkNtWa8KrVfN2x%2F1e34FfS2JDCZx8vvLRs%2BCEPVDA1qtTLHTvBUvkWMNxgcplD4lcfwR%2F9vT%2FmX7zcQlRqhJY5%2Bt01RLgfuGyLpexDpuIUtOE4ur5KlpcHps9TJytIF%2BCVdH1Nbxjy9NHZHEjjmb4wEa7Bi0FG7pv6nVWy9N6ZpUnm11SlFj6owSb8B0eIHlKf0IPsmHob0U7mQWwK7aduYlvpP5VUIs8eQvGZP0TtIJdufzBxvOBZww9KHFwAY6pgEK5YdOticgpf%2BIZuxk5ZK6IycUEeWxk%2B19jWjyfsFkLIb5WaMK1TcLvNqf0LlD%2BcoQGT6NIf8DDf1ahpezHhWCSUlgqKv5P2HE6aU%2FF1yq0SAdRGJPhE6HEWKgl%2Fw%2Blbk22TCJRtC1oN0MRBWD7Wt%2FdE8K24rroUAxKFpk2wxfOVHLMaxNPk698f5bO%2B7vsaLzLaLaSBQgjUU3vszGpYvRC8udOaWC&X-Amz-Signature=8fb4960111a4fec43f88f2fcdba30b242a320a9945872231e5bdc18d925ed45e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQZ4MWJX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChCFuCUDTu3MEM5ZYjkCYGqtxDtiE8l171jtBkYmCVDAiBgO%2FLqeNlCDWHsg1q%2BkbN8i0Zbhk3ylZ6%2Fx7fRELRCjSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDW9cNSUxdzjQeu%2BKtwDimTV2ApNTogWkuZxRmfb2dEEqn1cBswTW9SUTIPn4CQN%2BshfkV7wyywkvHFcgtn01zLI5cElLml4xhOQjRFFdDnruX9Ohavm4snPKqr5aPrzA2J4%2B2fwdHUKMZpMyUPVgrn0tpUFyAQ2ETaNmrfb8idIpLUOfjTPX9LsL9GWraKSkHOa%2B9pcK%2F%2FpdQpZmq5O18i0JZRgKTsjfXVZni8OUuq5hHXMtgb9SDbs6omLKbto9H7p3CfG5mcZE%2FuF8ev7MU8cvzsGcGrl32w1KHo4XDqpVKKMwHeHP7d3V9Ij8WDQF4VxWwrzz45Wp3jJ5smMV0YxC1aKSPgtMt3lWcCue05JfWpU2npdHpYqD8sjXSvd7xoLxagLKdav4svgJYlkcZysIkNtWa8KrVfN2x%2F1e34FfS2JDCZx8vvLRs%2BCEPVDA1qtTLHTvBUvkWMNxgcplD4lcfwR%2F9vT%2FmX7zcQlRqhJY5%2Bt01RLgfuGyLpexDpuIUtOE4ur5KlpcHps9TJytIF%2BCVdH1Nbxjy9NHZHEjjmb4wEa7Bi0FG7pv6nVWy9N6ZpUnm11SlFj6owSb8B0eIHlKf0IPsmHob0U7mQWwK7aduYlvpP5VUIs8eQvGZP0TtIJdufzBxvOBZww9KHFwAY6pgEK5YdOticgpf%2BIZuxk5ZK6IycUEeWxk%2B19jWjyfsFkLIb5WaMK1TcLvNqf0LlD%2BcoQGT6NIf8DDf1ahpezHhWCSUlgqKv5P2HE6aU%2FF1yq0SAdRGJPhE6HEWKgl%2Fw%2Blbk22TCJRtC1oN0MRBWD7Wt%2FdE8K24rroUAxKFpk2wxfOVHLMaxNPk698f5bO%2B7vsaLzLaLaSBQgjUU3vszGpYvRC8udOaWC&X-Amz-Signature=77b27d2a8ee248063691bd5e3e4d2fae653e0c7ef9c0f74579d0d87f502fda28&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQZ4MWJX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChCFuCUDTu3MEM5ZYjkCYGqtxDtiE8l171jtBkYmCVDAiBgO%2FLqeNlCDWHsg1q%2BkbN8i0Zbhk3ylZ6%2Fx7fRELRCjSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDW9cNSUxdzjQeu%2BKtwDimTV2ApNTogWkuZxRmfb2dEEqn1cBswTW9SUTIPn4CQN%2BshfkV7wyywkvHFcgtn01zLI5cElLml4xhOQjRFFdDnruX9Ohavm4snPKqr5aPrzA2J4%2B2fwdHUKMZpMyUPVgrn0tpUFyAQ2ETaNmrfb8idIpLUOfjTPX9LsL9GWraKSkHOa%2B9pcK%2F%2FpdQpZmq5O18i0JZRgKTsjfXVZni8OUuq5hHXMtgb9SDbs6omLKbto9H7p3CfG5mcZE%2FuF8ev7MU8cvzsGcGrl32w1KHo4XDqpVKKMwHeHP7d3V9Ij8WDQF4VxWwrzz45Wp3jJ5smMV0YxC1aKSPgtMt3lWcCue05JfWpU2npdHpYqD8sjXSvd7xoLxagLKdav4svgJYlkcZysIkNtWa8KrVfN2x%2F1e34FfS2JDCZx8vvLRs%2BCEPVDA1qtTLHTvBUvkWMNxgcplD4lcfwR%2F9vT%2FmX7zcQlRqhJY5%2Bt01RLgfuGyLpexDpuIUtOE4ur5KlpcHps9TJytIF%2BCVdH1Nbxjy9NHZHEjjmb4wEa7Bi0FG7pv6nVWy9N6ZpUnm11SlFj6owSb8B0eIHlKf0IPsmHob0U7mQWwK7aduYlvpP5VUIs8eQvGZP0TtIJdufzBxvOBZww9KHFwAY6pgEK5YdOticgpf%2BIZuxk5ZK6IycUEeWxk%2B19jWjyfsFkLIb5WaMK1TcLvNqf0LlD%2BcoQGT6NIf8DDf1ahpezHhWCSUlgqKv5P2HE6aU%2FF1yq0SAdRGJPhE6HEWKgl%2Fw%2Blbk22TCJRtC1oN0MRBWD7Wt%2FdE8K24rroUAxKFpk2wxfOVHLMaxNPk698f5bO%2B7vsaLzLaLaSBQgjUU3vszGpYvRC8udOaWC&X-Amz-Signature=118d802af6d1c8574c75c6d2b4a80208ba82363c1bdd8fdb56b03fbff1bbbd54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQZ4MWJX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChCFuCUDTu3MEM5ZYjkCYGqtxDtiE8l171jtBkYmCVDAiBgO%2FLqeNlCDWHsg1q%2BkbN8i0Zbhk3ylZ6%2Fx7fRELRCjSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDW9cNSUxdzjQeu%2BKtwDimTV2ApNTogWkuZxRmfb2dEEqn1cBswTW9SUTIPn4CQN%2BshfkV7wyywkvHFcgtn01zLI5cElLml4xhOQjRFFdDnruX9Ohavm4snPKqr5aPrzA2J4%2B2fwdHUKMZpMyUPVgrn0tpUFyAQ2ETaNmrfb8idIpLUOfjTPX9LsL9GWraKSkHOa%2B9pcK%2F%2FpdQpZmq5O18i0JZRgKTsjfXVZni8OUuq5hHXMtgb9SDbs6omLKbto9H7p3CfG5mcZE%2FuF8ev7MU8cvzsGcGrl32w1KHo4XDqpVKKMwHeHP7d3V9Ij8WDQF4VxWwrzz45Wp3jJ5smMV0YxC1aKSPgtMt3lWcCue05JfWpU2npdHpYqD8sjXSvd7xoLxagLKdav4svgJYlkcZysIkNtWa8KrVfN2x%2F1e34FfS2JDCZx8vvLRs%2BCEPVDA1qtTLHTvBUvkWMNxgcplD4lcfwR%2F9vT%2FmX7zcQlRqhJY5%2Bt01RLgfuGyLpexDpuIUtOE4ur5KlpcHps9TJytIF%2BCVdH1Nbxjy9NHZHEjjmb4wEa7Bi0FG7pv6nVWy9N6ZpUnm11SlFj6owSb8B0eIHlKf0IPsmHob0U7mQWwK7aduYlvpP5VUIs8eQvGZP0TtIJdufzBxvOBZww9KHFwAY6pgEK5YdOticgpf%2BIZuxk5ZK6IycUEeWxk%2B19jWjyfsFkLIb5WaMK1TcLvNqf0LlD%2BcoQGT6NIf8DDf1ahpezHhWCSUlgqKv5P2HE6aU%2FF1yq0SAdRGJPhE6HEWKgl%2Fw%2Blbk22TCJRtC1oN0MRBWD7Wt%2FdE8K24rroUAxKFpk2wxfOVHLMaxNPk698f5bO%2B7vsaLzLaLaSBQgjUU3vszGpYvRC8udOaWC&X-Amz-Signature=73096c7e54d57f5300c4372204867775b16c4e5afbe7eaef24e9123c66714c3d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQZ4MWJX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T004051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChCFuCUDTu3MEM5ZYjkCYGqtxDtiE8l171jtBkYmCVDAiBgO%2FLqeNlCDWHsg1q%2BkbN8i0Zbhk3ylZ6%2Fx7fRELRCjSqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDW9cNSUxdzjQeu%2BKtwDimTV2ApNTogWkuZxRmfb2dEEqn1cBswTW9SUTIPn4CQN%2BshfkV7wyywkvHFcgtn01zLI5cElLml4xhOQjRFFdDnruX9Ohavm4snPKqr5aPrzA2J4%2B2fwdHUKMZpMyUPVgrn0tpUFyAQ2ETaNmrfb8idIpLUOfjTPX9LsL9GWraKSkHOa%2B9pcK%2F%2FpdQpZmq5O18i0JZRgKTsjfXVZni8OUuq5hHXMtgb9SDbs6omLKbto9H7p3CfG5mcZE%2FuF8ev7MU8cvzsGcGrl32w1KHo4XDqpVKKMwHeHP7d3V9Ij8WDQF4VxWwrzz45Wp3jJ5smMV0YxC1aKSPgtMt3lWcCue05JfWpU2npdHpYqD8sjXSvd7xoLxagLKdav4svgJYlkcZysIkNtWa8KrVfN2x%2F1e34FfS2JDCZx8vvLRs%2BCEPVDA1qtTLHTvBUvkWMNxgcplD4lcfwR%2F9vT%2FmX7zcQlRqhJY5%2Bt01RLgfuGyLpexDpuIUtOE4ur5KlpcHps9TJytIF%2BCVdH1Nbxjy9NHZHEjjmb4wEa7Bi0FG7pv6nVWy9N6ZpUnm11SlFj6owSb8B0eIHlKf0IPsmHob0U7mQWwK7aduYlvpP5VUIs8eQvGZP0TtIJdufzBxvOBZww9KHFwAY6pgEK5YdOticgpf%2BIZuxk5ZK6IycUEeWxk%2B19jWjyfsFkLIb5WaMK1TcLvNqf0LlD%2BcoQGT6NIf8DDf1ahpezHhWCSUlgqKv5P2HE6aU%2FF1yq0SAdRGJPhE6HEWKgl%2Fw%2Blbk22TCJRtC1oN0MRBWD7Wt%2FdE8K24rroUAxKFpk2wxfOVHLMaxNPk698f5bO%2B7vsaLzLaLaSBQgjUU3vszGpYvRC8udOaWC&X-Amz-Signature=a3a9d4b1425fe2061014a3b96e6ea8be2740c98c9c79aa9a86d3ee368713ea94&X-Amz-SignedHeaders=host&x-id=GetObject)
