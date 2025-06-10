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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M4INB4V%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdCTQ5kTcF6YBowhbcMNjgzgsvE3UNJpGRwgR6hHO5aAiEA7jjGKPZ23nb5161C%2F%2Bl55cxxS5mCjPREwRcTp%2Fs1GBwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLX5XGWsKUQM9khTSrcAwQZvlb4Fb7P%2FuaGF0iiJEd%2FtSpkaTM7UIezIivsKnsW4nmIxdTV26iB2YMNnZwqGr8Nv5Qe0yGbMjD%2ByB1STwM5%2B25eH%2FyKUkFZrL5zPvu7S%2FaJF5GghozdBBggMLFmTbYOVOmI8IPuJn9KdPg2BnJInR2fyGbJm32C33M704q91w7mPNbQEDFiDEcXv8ig1kNizt1AHgZwkYPyxtbV64OppAW2ZzJJ2gTEtEHivfQtSPfq8zgYs2HK8o9zR0Pg5m8dA5TZ%2BGXrc%2BTvc791sOjY9Vtk4j9TU4k3TOKzBZzdvh8JEjJyCODK%2BRtW4OKvVZVmmYikccH30AMQTmsOoH%2Fd%2FbBcdH8TWD04Ne6z0jBp7liIRSToI3OPBHY3v4Znw5CaW61Bkg3J9y7DP73PltNx5303sZUxbRRuwGzi%2FoTnxeGsKGmZTtXeoOCFbX%2F%2F75Njwi%2B8CFLxbR44z%2FgtN%2F5FAs8v6S64ue%2BY7f%2BSbz0BTKv7sXDX7GpbbHIj8J%2B0Qah2ZwrdQEMkUcFYRlNbFwmRp%2BNOUXvKXpBD9LPwHZIH1lBykOPWmS7de3RFkaFjHlXCzZ8GZt8AaYKkPPzieuJI9KIQc9RpyXxhwpybRHBK46IsrmK65W1YYcX1MKXKocIGOqUBPC4OawUH0av0PsFPVKTQoIez9DHYGhUG4Q%2FsFbWW46VXr54We3LS7LlQ0fCwLogiuA02g9PV86zI57JlE4CYsufP8ShCU3UgB%2FgweHf6r%2BNeoADzOmnqD5KII%2B2f5%2BYOPT9x%2BfEDdUvYD1B%2BHLVK3ozxDaHLrC0dQiJ9khAjwRp0obUbURcScVuMrz7aVKnNg%2FWuG3e4g%2B%2By1w4DNBskBhcdvDRy&X-Amz-Signature=f4ae2ff7ce04983f9fb0f1803f56032af2069409d1c2ec2b3780e5522fd2df0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M4INB4V%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdCTQ5kTcF6YBowhbcMNjgzgsvE3UNJpGRwgR6hHO5aAiEA7jjGKPZ23nb5161C%2F%2Bl55cxxS5mCjPREwRcTp%2Fs1GBwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLX5XGWsKUQM9khTSrcAwQZvlb4Fb7P%2FuaGF0iiJEd%2FtSpkaTM7UIezIivsKnsW4nmIxdTV26iB2YMNnZwqGr8Nv5Qe0yGbMjD%2ByB1STwM5%2B25eH%2FyKUkFZrL5zPvu7S%2FaJF5GghozdBBggMLFmTbYOVOmI8IPuJn9KdPg2BnJInR2fyGbJm32C33M704q91w7mPNbQEDFiDEcXv8ig1kNizt1AHgZwkYPyxtbV64OppAW2ZzJJ2gTEtEHivfQtSPfq8zgYs2HK8o9zR0Pg5m8dA5TZ%2BGXrc%2BTvc791sOjY9Vtk4j9TU4k3TOKzBZzdvh8JEjJyCODK%2BRtW4OKvVZVmmYikccH30AMQTmsOoH%2Fd%2FbBcdH8TWD04Ne6z0jBp7liIRSToI3OPBHY3v4Znw5CaW61Bkg3J9y7DP73PltNx5303sZUxbRRuwGzi%2FoTnxeGsKGmZTtXeoOCFbX%2F%2F75Njwi%2B8CFLxbR44z%2FgtN%2F5FAs8v6S64ue%2BY7f%2BSbz0BTKv7sXDX7GpbbHIj8J%2B0Qah2ZwrdQEMkUcFYRlNbFwmRp%2BNOUXvKXpBD9LPwHZIH1lBykOPWmS7de3RFkaFjHlXCzZ8GZt8AaYKkPPzieuJI9KIQc9RpyXxhwpybRHBK46IsrmK65W1YYcX1MKXKocIGOqUBPC4OawUH0av0PsFPVKTQoIez9DHYGhUG4Q%2FsFbWW46VXr54We3LS7LlQ0fCwLogiuA02g9PV86zI57JlE4CYsufP8ShCU3UgB%2FgweHf6r%2BNeoADzOmnqD5KII%2B2f5%2BYOPT9x%2BfEDdUvYD1B%2BHLVK3ozxDaHLrC0dQiJ9khAjwRp0obUbURcScVuMrz7aVKnNg%2FWuG3e4g%2B%2By1w4DNBskBhcdvDRy&X-Amz-Signature=5256fda8472a37c9fd9cff40d663d2e495cc9615931d6124654e3cd498ba2578&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M4INB4V%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdCTQ5kTcF6YBowhbcMNjgzgsvE3UNJpGRwgR6hHO5aAiEA7jjGKPZ23nb5161C%2F%2Bl55cxxS5mCjPREwRcTp%2Fs1GBwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLX5XGWsKUQM9khTSrcAwQZvlb4Fb7P%2FuaGF0iiJEd%2FtSpkaTM7UIezIivsKnsW4nmIxdTV26iB2YMNnZwqGr8Nv5Qe0yGbMjD%2ByB1STwM5%2B25eH%2FyKUkFZrL5zPvu7S%2FaJF5GghozdBBggMLFmTbYOVOmI8IPuJn9KdPg2BnJInR2fyGbJm32C33M704q91w7mPNbQEDFiDEcXv8ig1kNizt1AHgZwkYPyxtbV64OppAW2ZzJJ2gTEtEHivfQtSPfq8zgYs2HK8o9zR0Pg5m8dA5TZ%2BGXrc%2BTvc791sOjY9Vtk4j9TU4k3TOKzBZzdvh8JEjJyCODK%2BRtW4OKvVZVmmYikccH30AMQTmsOoH%2Fd%2FbBcdH8TWD04Ne6z0jBp7liIRSToI3OPBHY3v4Znw5CaW61Bkg3J9y7DP73PltNx5303sZUxbRRuwGzi%2FoTnxeGsKGmZTtXeoOCFbX%2F%2F75Njwi%2B8CFLxbR44z%2FgtN%2F5FAs8v6S64ue%2BY7f%2BSbz0BTKv7sXDX7GpbbHIj8J%2B0Qah2ZwrdQEMkUcFYRlNbFwmRp%2BNOUXvKXpBD9LPwHZIH1lBykOPWmS7de3RFkaFjHlXCzZ8GZt8AaYKkPPzieuJI9KIQc9RpyXxhwpybRHBK46IsrmK65W1YYcX1MKXKocIGOqUBPC4OawUH0av0PsFPVKTQoIez9DHYGhUG4Q%2FsFbWW46VXr54We3LS7LlQ0fCwLogiuA02g9PV86zI57JlE4CYsufP8ShCU3UgB%2FgweHf6r%2BNeoADzOmnqD5KII%2B2f5%2BYOPT9x%2BfEDdUvYD1B%2BHLVK3ozxDaHLrC0dQiJ9khAjwRp0obUbURcScVuMrz7aVKnNg%2FWuG3e4g%2B%2By1w4DNBskBhcdvDRy&X-Amz-Signature=3bb625d264673c9ac1b416cb63cfc956955446d67fc365a3bd82cf1c96ece7b6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M4INB4V%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdCTQ5kTcF6YBowhbcMNjgzgsvE3UNJpGRwgR6hHO5aAiEA7jjGKPZ23nb5161C%2F%2Bl55cxxS5mCjPREwRcTp%2Fs1GBwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLX5XGWsKUQM9khTSrcAwQZvlb4Fb7P%2FuaGF0iiJEd%2FtSpkaTM7UIezIivsKnsW4nmIxdTV26iB2YMNnZwqGr8Nv5Qe0yGbMjD%2ByB1STwM5%2B25eH%2FyKUkFZrL5zPvu7S%2FaJF5GghozdBBggMLFmTbYOVOmI8IPuJn9KdPg2BnJInR2fyGbJm32C33M704q91w7mPNbQEDFiDEcXv8ig1kNizt1AHgZwkYPyxtbV64OppAW2ZzJJ2gTEtEHivfQtSPfq8zgYs2HK8o9zR0Pg5m8dA5TZ%2BGXrc%2BTvc791sOjY9Vtk4j9TU4k3TOKzBZzdvh8JEjJyCODK%2BRtW4OKvVZVmmYikccH30AMQTmsOoH%2Fd%2FbBcdH8TWD04Ne6z0jBp7liIRSToI3OPBHY3v4Znw5CaW61Bkg3J9y7DP73PltNx5303sZUxbRRuwGzi%2FoTnxeGsKGmZTtXeoOCFbX%2F%2F75Njwi%2B8CFLxbR44z%2FgtN%2F5FAs8v6S64ue%2BY7f%2BSbz0BTKv7sXDX7GpbbHIj8J%2B0Qah2ZwrdQEMkUcFYRlNbFwmRp%2BNOUXvKXpBD9LPwHZIH1lBykOPWmS7de3RFkaFjHlXCzZ8GZt8AaYKkPPzieuJI9KIQc9RpyXxhwpybRHBK46IsrmK65W1YYcX1MKXKocIGOqUBPC4OawUH0av0PsFPVKTQoIez9DHYGhUG4Q%2FsFbWW46VXr54We3LS7LlQ0fCwLogiuA02g9PV86zI57JlE4CYsufP8ShCU3UgB%2FgweHf6r%2BNeoADzOmnqD5KII%2B2f5%2BYOPT9x%2BfEDdUvYD1B%2BHLVK3ozxDaHLrC0dQiJ9khAjwRp0obUbURcScVuMrz7aVKnNg%2FWuG3e4g%2B%2By1w4DNBskBhcdvDRy&X-Amz-Signature=c68786c04d64732c39baf4e7edde6d080e9ab09c984a2afcd609f267be90c27d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M4INB4V%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdCTQ5kTcF6YBowhbcMNjgzgsvE3UNJpGRwgR6hHO5aAiEA7jjGKPZ23nb5161C%2F%2Bl55cxxS5mCjPREwRcTp%2Fs1GBwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLX5XGWsKUQM9khTSrcAwQZvlb4Fb7P%2FuaGF0iiJEd%2FtSpkaTM7UIezIivsKnsW4nmIxdTV26iB2YMNnZwqGr8Nv5Qe0yGbMjD%2ByB1STwM5%2B25eH%2FyKUkFZrL5zPvu7S%2FaJF5GghozdBBggMLFmTbYOVOmI8IPuJn9KdPg2BnJInR2fyGbJm32C33M704q91w7mPNbQEDFiDEcXv8ig1kNizt1AHgZwkYPyxtbV64OppAW2ZzJJ2gTEtEHivfQtSPfq8zgYs2HK8o9zR0Pg5m8dA5TZ%2BGXrc%2BTvc791sOjY9Vtk4j9TU4k3TOKzBZzdvh8JEjJyCODK%2BRtW4OKvVZVmmYikccH30AMQTmsOoH%2Fd%2FbBcdH8TWD04Ne6z0jBp7liIRSToI3OPBHY3v4Znw5CaW61Bkg3J9y7DP73PltNx5303sZUxbRRuwGzi%2FoTnxeGsKGmZTtXeoOCFbX%2F%2F75Njwi%2B8CFLxbR44z%2FgtN%2F5FAs8v6S64ue%2BY7f%2BSbz0BTKv7sXDX7GpbbHIj8J%2B0Qah2ZwrdQEMkUcFYRlNbFwmRp%2BNOUXvKXpBD9LPwHZIH1lBykOPWmS7de3RFkaFjHlXCzZ8GZt8AaYKkPPzieuJI9KIQc9RpyXxhwpybRHBK46IsrmK65W1YYcX1MKXKocIGOqUBPC4OawUH0av0PsFPVKTQoIez9DHYGhUG4Q%2FsFbWW46VXr54We3LS7LlQ0fCwLogiuA02g9PV86zI57JlE4CYsufP8ShCU3UgB%2FgweHf6r%2BNeoADzOmnqD5KII%2B2f5%2BYOPT9x%2BfEDdUvYD1B%2BHLVK3ozxDaHLrC0dQiJ9khAjwRp0obUbURcScVuMrz7aVKnNg%2FWuG3e4g%2B%2By1w4DNBskBhcdvDRy&X-Amz-Signature=ccff4de55defef8f832afd4b8213f05ebadeb25025cffcc39c02459575278be2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M4INB4V%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdCTQ5kTcF6YBowhbcMNjgzgsvE3UNJpGRwgR6hHO5aAiEA7jjGKPZ23nb5161C%2F%2Bl55cxxS5mCjPREwRcTp%2Fs1GBwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLX5XGWsKUQM9khTSrcAwQZvlb4Fb7P%2FuaGF0iiJEd%2FtSpkaTM7UIezIivsKnsW4nmIxdTV26iB2YMNnZwqGr8Nv5Qe0yGbMjD%2ByB1STwM5%2B25eH%2FyKUkFZrL5zPvu7S%2FaJF5GghozdBBggMLFmTbYOVOmI8IPuJn9KdPg2BnJInR2fyGbJm32C33M704q91w7mPNbQEDFiDEcXv8ig1kNizt1AHgZwkYPyxtbV64OppAW2ZzJJ2gTEtEHivfQtSPfq8zgYs2HK8o9zR0Pg5m8dA5TZ%2BGXrc%2BTvc791sOjY9Vtk4j9TU4k3TOKzBZzdvh8JEjJyCODK%2BRtW4OKvVZVmmYikccH30AMQTmsOoH%2Fd%2FbBcdH8TWD04Ne6z0jBp7liIRSToI3OPBHY3v4Znw5CaW61Bkg3J9y7DP73PltNx5303sZUxbRRuwGzi%2FoTnxeGsKGmZTtXeoOCFbX%2F%2F75Njwi%2B8CFLxbR44z%2FgtN%2F5FAs8v6S64ue%2BY7f%2BSbz0BTKv7sXDX7GpbbHIj8J%2B0Qah2ZwrdQEMkUcFYRlNbFwmRp%2BNOUXvKXpBD9LPwHZIH1lBykOPWmS7de3RFkaFjHlXCzZ8GZt8AaYKkPPzieuJI9KIQc9RpyXxhwpybRHBK46IsrmK65W1YYcX1MKXKocIGOqUBPC4OawUH0av0PsFPVKTQoIez9DHYGhUG4Q%2FsFbWW46VXr54We3LS7LlQ0fCwLogiuA02g9PV86zI57JlE4CYsufP8ShCU3UgB%2FgweHf6r%2BNeoADzOmnqD5KII%2B2f5%2BYOPT9x%2BfEDdUvYD1B%2BHLVK3ozxDaHLrC0dQiJ9khAjwRp0obUbURcScVuMrz7aVKnNg%2FWuG3e4g%2B%2By1w4DNBskBhcdvDRy&X-Amz-Signature=f218ba88dc010963888c7b8fdb984550032b2d4247067ec0a3d9867b97c8500d&X-Amz-SignedHeaders=host&x-id=GetObject)
