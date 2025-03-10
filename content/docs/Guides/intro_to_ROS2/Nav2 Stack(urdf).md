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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJMCAX4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDUUUSr%2BlN4%2FJDzBlru0GEa48%2B27l0pwZ8r2pG6uZlRCAIgFugrUL%2BE0SmGCZq2aE6wVwpV1RQ8UnhDx176jlvPjxAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzBOVJc1RGkZono8yrcA%2BWrlZM0UM7L7eKZBAfGs8%2BSU6I%2Fv3ayDqZJnLxOJEzqRh8F2bbpaVvIhDBPndkAk%2BWfMXm5Zt9stgCepI4kll1MSREz3jwy7k4vTHX84bO%2FYNCDJUqrtieiRbeWwLNDLegASBofGKhdNPEGDQv5f2cScI6o6eLUDRV%2FJX2mmCXo8DSXyjycjY%2BcqoLPdgv9KcK3V4MBV6KR9SHDGVEycE%2FndOF2UEACEmVgJ7N%2F2trDCOneBX6c6BsNRmqgzDG%2Bn4VP%2FROFKa1vhGEnO1YESqtUNACFIpjUuXX0NjiYvmcZnQSpnQOmbFvyGRfj9F%2BVnSrD4M7%2BYVWdM8DeeeqLzCExQhQf5ptSPVzWYD1OYdD3wtjCKOVBh%2F8xiEE0rR77Kfoae%2F3PamBWz7kDLzOVUjzrER2FnjEpqRB8AXkLOkQNEYxhWqp%2FmuY2P2XQyu6%2BytSeZRUgIjs0Nw0bTYY0tCb7aMLiow2kCDlCq3jF5kkvpmby8Ogyv4IfKWnygBg%2F0B2qrIOwqmwhfHPYKm2Gb%2F6kxd2GyEVkDR%2F7mE17he9%2FEbqtVuavQt8mSUDuxLyWX6CQ3ee2g0Cm5oJaQVoywjFPEQ8bZhCs8qoPfNjo8l22WFzMCGnAxnPCWEO0MIGLvb4GOqUB6CJLlrmhzll31pgFtZ5EpHJiQxhb3dHtffwij1cOaxqERgko1v5zwr799ETRk93VME9XH9h4CCxm2pa2wOdVrmXe%2FjGEaSQQWvZc5bZldNb%2BI9pPtdS8ZSYfLND6ij9rVKwF%2B5DzBd%2F2rd3gRVU8eI%2FXlSGEd2Kw9xHujmLw%2BXwO%2FFJw1WtTxUOYbdEKSSWQRw5pp7FKLow37BwPG1ncHsf4IGCf&X-Amz-Signature=6dc880735410b4806dd5bdfaaa51cc447cbe3034e0a1b96505054ac1777e50a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJMCAX4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDUUUSr%2BlN4%2FJDzBlru0GEa48%2B27l0pwZ8r2pG6uZlRCAIgFugrUL%2BE0SmGCZq2aE6wVwpV1RQ8UnhDx176jlvPjxAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzBOVJc1RGkZono8yrcA%2BWrlZM0UM7L7eKZBAfGs8%2BSU6I%2Fv3ayDqZJnLxOJEzqRh8F2bbpaVvIhDBPndkAk%2BWfMXm5Zt9stgCepI4kll1MSREz3jwy7k4vTHX84bO%2FYNCDJUqrtieiRbeWwLNDLegASBofGKhdNPEGDQv5f2cScI6o6eLUDRV%2FJX2mmCXo8DSXyjycjY%2BcqoLPdgv9KcK3V4MBV6KR9SHDGVEycE%2FndOF2UEACEmVgJ7N%2F2trDCOneBX6c6BsNRmqgzDG%2Bn4VP%2FROFKa1vhGEnO1YESqtUNACFIpjUuXX0NjiYvmcZnQSpnQOmbFvyGRfj9F%2BVnSrD4M7%2BYVWdM8DeeeqLzCExQhQf5ptSPVzWYD1OYdD3wtjCKOVBh%2F8xiEE0rR77Kfoae%2F3PamBWz7kDLzOVUjzrER2FnjEpqRB8AXkLOkQNEYxhWqp%2FmuY2P2XQyu6%2BytSeZRUgIjs0Nw0bTYY0tCb7aMLiow2kCDlCq3jF5kkvpmby8Ogyv4IfKWnygBg%2F0B2qrIOwqmwhfHPYKm2Gb%2F6kxd2GyEVkDR%2F7mE17he9%2FEbqtVuavQt8mSUDuxLyWX6CQ3ee2g0Cm5oJaQVoywjFPEQ8bZhCs8qoPfNjo8l22WFzMCGnAxnPCWEO0MIGLvb4GOqUB6CJLlrmhzll31pgFtZ5EpHJiQxhb3dHtffwij1cOaxqERgko1v5zwr799ETRk93VME9XH9h4CCxm2pa2wOdVrmXe%2FjGEaSQQWvZc5bZldNb%2BI9pPtdS8ZSYfLND6ij9rVKwF%2B5DzBd%2F2rd3gRVU8eI%2FXlSGEd2Kw9xHujmLw%2BXwO%2FFJw1WtTxUOYbdEKSSWQRw5pp7FKLow37BwPG1ncHsf4IGCf&X-Amz-Signature=f913393b42cd510ed8cc21d5562ad6cfeb75c6490da7e25d7654f1d5a01adc2a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJMCAX4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDUUUSr%2BlN4%2FJDzBlru0GEa48%2B27l0pwZ8r2pG6uZlRCAIgFugrUL%2BE0SmGCZq2aE6wVwpV1RQ8UnhDx176jlvPjxAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzBOVJc1RGkZono8yrcA%2BWrlZM0UM7L7eKZBAfGs8%2BSU6I%2Fv3ayDqZJnLxOJEzqRh8F2bbpaVvIhDBPndkAk%2BWfMXm5Zt9stgCepI4kll1MSREz3jwy7k4vTHX84bO%2FYNCDJUqrtieiRbeWwLNDLegASBofGKhdNPEGDQv5f2cScI6o6eLUDRV%2FJX2mmCXo8DSXyjycjY%2BcqoLPdgv9KcK3V4MBV6KR9SHDGVEycE%2FndOF2UEACEmVgJ7N%2F2trDCOneBX6c6BsNRmqgzDG%2Bn4VP%2FROFKa1vhGEnO1YESqtUNACFIpjUuXX0NjiYvmcZnQSpnQOmbFvyGRfj9F%2BVnSrD4M7%2BYVWdM8DeeeqLzCExQhQf5ptSPVzWYD1OYdD3wtjCKOVBh%2F8xiEE0rR77Kfoae%2F3PamBWz7kDLzOVUjzrER2FnjEpqRB8AXkLOkQNEYxhWqp%2FmuY2P2XQyu6%2BytSeZRUgIjs0Nw0bTYY0tCb7aMLiow2kCDlCq3jF5kkvpmby8Ogyv4IfKWnygBg%2F0B2qrIOwqmwhfHPYKm2Gb%2F6kxd2GyEVkDR%2F7mE17he9%2FEbqtVuavQt8mSUDuxLyWX6CQ3ee2g0Cm5oJaQVoywjFPEQ8bZhCs8qoPfNjo8l22WFzMCGnAxnPCWEO0MIGLvb4GOqUB6CJLlrmhzll31pgFtZ5EpHJiQxhb3dHtffwij1cOaxqERgko1v5zwr799ETRk93VME9XH9h4CCxm2pa2wOdVrmXe%2FjGEaSQQWvZc5bZldNb%2BI9pPtdS8ZSYfLND6ij9rVKwF%2B5DzBd%2F2rd3gRVU8eI%2FXlSGEd2Kw9xHujmLw%2BXwO%2FFJw1WtTxUOYbdEKSSWQRw5pp7FKLow37BwPG1ncHsf4IGCf&X-Amz-Signature=a8f06a381619139f6fca29ac02563b29815398177ff0a63a341b97eaefcbf5aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJMCAX4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDUUUSr%2BlN4%2FJDzBlru0GEa48%2B27l0pwZ8r2pG6uZlRCAIgFugrUL%2BE0SmGCZq2aE6wVwpV1RQ8UnhDx176jlvPjxAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzBOVJc1RGkZono8yrcA%2BWrlZM0UM7L7eKZBAfGs8%2BSU6I%2Fv3ayDqZJnLxOJEzqRh8F2bbpaVvIhDBPndkAk%2BWfMXm5Zt9stgCepI4kll1MSREz3jwy7k4vTHX84bO%2FYNCDJUqrtieiRbeWwLNDLegASBofGKhdNPEGDQv5f2cScI6o6eLUDRV%2FJX2mmCXo8DSXyjycjY%2BcqoLPdgv9KcK3V4MBV6KR9SHDGVEycE%2FndOF2UEACEmVgJ7N%2F2trDCOneBX6c6BsNRmqgzDG%2Bn4VP%2FROFKa1vhGEnO1YESqtUNACFIpjUuXX0NjiYvmcZnQSpnQOmbFvyGRfj9F%2BVnSrD4M7%2BYVWdM8DeeeqLzCExQhQf5ptSPVzWYD1OYdD3wtjCKOVBh%2F8xiEE0rR77Kfoae%2F3PamBWz7kDLzOVUjzrER2FnjEpqRB8AXkLOkQNEYxhWqp%2FmuY2P2XQyu6%2BytSeZRUgIjs0Nw0bTYY0tCb7aMLiow2kCDlCq3jF5kkvpmby8Ogyv4IfKWnygBg%2F0B2qrIOwqmwhfHPYKm2Gb%2F6kxd2GyEVkDR%2F7mE17he9%2FEbqtVuavQt8mSUDuxLyWX6CQ3ee2g0Cm5oJaQVoywjFPEQ8bZhCs8qoPfNjo8l22WFzMCGnAxnPCWEO0MIGLvb4GOqUB6CJLlrmhzll31pgFtZ5EpHJiQxhb3dHtffwij1cOaxqERgko1v5zwr799ETRk93VME9XH9h4CCxm2pa2wOdVrmXe%2FjGEaSQQWvZc5bZldNb%2BI9pPtdS8ZSYfLND6ij9rVKwF%2B5DzBd%2F2rd3gRVU8eI%2FXlSGEd2Kw9xHujmLw%2BXwO%2FFJw1WtTxUOYbdEKSSWQRw5pp7FKLow37BwPG1ncHsf4IGCf&X-Amz-Signature=3dd5caf85f63af23914f4bf2b223577a7474813e0b429e8cdbbeac30fd420187&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJMCAX4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDUUUSr%2BlN4%2FJDzBlru0GEa48%2B27l0pwZ8r2pG6uZlRCAIgFugrUL%2BE0SmGCZq2aE6wVwpV1RQ8UnhDx176jlvPjxAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzBOVJc1RGkZono8yrcA%2BWrlZM0UM7L7eKZBAfGs8%2BSU6I%2Fv3ayDqZJnLxOJEzqRh8F2bbpaVvIhDBPndkAk%2BWfMXm5Zt9stgCepI4kll1MSREz3jwy7k4vTHX84bO%2FYNCDJUqrtieiRbeWwLNDLegASBofGKhdNPEGDQv5f2cScI6o6eLUDRV%2FJX2mmCXo8DSXyjycjY%2BcqoLPdgv9KcK3V4MBV6KR9SHDGVEycE%2FndOF2UEACEmVgJ7N%2F2trDCOneBX6c6BsNRmqgzDG%2Bn4VP%2FROFKa1vhGEnO1YESqtUNACFIpjUuXX0NjiYvmcZnQSpnQOmbFvyGRfj9F%2BVnSrD4M7%2BYVWdM8DeeeqLzCExQhQf5ptSPVzWYD1OYdD3wtjCKOVBh%2F8xiEE0rR77Kfoae%2F3PamBWz7kDLzOVUjzrER2FnjEpqRB8AXkLOkQNEYxhWqp%2FmuY2P2XQyu6%2BytSeZRUgIjs0Nw0bTYY0tCb7aMLiow2kCDlCq3jF5kkvpmby8Ogyv4IfKWnygBg%2F0B2qrIOwqmwhfHPYKm2Gb%2F6kxd2GyEVkDR%2F7mE17he9%2FEbqtVuavQt8mSUDuxLyWX6CQ3ee2g0Cm5oJaQVoywjFPEQ8bZhCs8qoPfNjo8l22WFzMCGnAxnPCWEO0MIGLvb4GOqUB6CJLlrmhzll31pgFtZ5EpHJiQxhb3dHtffwij1cOaxqERgko1v5zwr799ETRk93VME9XH9h4CCxm2pa2wOdVrmXe%2FjGEaSQQWvZc5bZldNb%2BI9pPtdS8ZSYfLND6ij9rVKwF%2B5DzBd%2F2rd3gRVU8eI%2FXlSGEd2Kw9xHujmLw%2BXwO%2FFJw1WtTxUOYbdEKSSWQRw5pp7FKLow37BwPG1ncHsf4IGCf&X-Amz-Signature=c2062660641831114c2d53d3f156304abb00c73df0648cf541805eebabbb3490&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJMCAX4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDUUUSr%2BlN4%2FJDzBlru0GEa48%2B27l0pwZ8r2pG6uZlRCAIgFugrUL%2BE0SmGCZq2aE6wVwpV1RQ8UnhDx176jlvPjxAqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIzBOVJc1RGkZono8yrcA%2BWrlZM0UM7L7eKZBAfGs8%2BSU6I%2Fv3ayDqZJnLxOJEzqRh8F2bbpaVvIhDBPndkAk%2BWfMXm5Zt9stgCepI4kll1MSREz3jwy7k4vTHX84bO%2FYNCDJUqrtieiRbeWwLNDLegASBofGKhdNPEGDQv5f2cScI6o6eLUDRV%2FJX2mmCXo8DSXyjycjY%2BcqoLPdgv9KcK3V4MBV6KR9SHDGVEycE%2FndOF2UEACEmVgJ7N%2F2trDCOneBX6c6BsNRmqgzDG%2Bn4VP%2FROFKa1vhGEnO1YESqtUNACFIpjUuXX0NjiYvmcZnQSpnQOmbFvyGRfj9F%2BVnSrD4M7%2BYVWdM8DeeeqLzCExQhQf5ptSPVzWYD1OYdD3wtjCKOVBh%2F8xiEE0rR77Kfoae%2F3PamBWz7kDLzOVUjzrER2FnjEpqRB8AXkLOkQNEYxhWqp%2FmuY2P2XQyu6%2BytSeZRUgIjs0Nw0bTYY0tCb7aMLiow2kCDlCq3jF5kkvpmby8Ogyv4IfKWnygBg%2F0B2qrIOwqmwhfHPYKm2Gb%2F6kxd2GyEVkDR%2F7mE17he9%2FEbqtVuavQt8mSUDuxLyWX6CQ3ee2g0Cm5oJaQVoywjFPEQ8bZhCs8qoPfNjo8l22WFzMCGnAxnPCWEO0MIGLvb4GOqUB6CJLlrmhzll31pgFtZ5EpHJiQxhb3dHtffwij1cOaxqERgko1v5zwr799ETRk93VME9XH9h4CCxm2pa2wOdVrmXe%2FjGEaSQQWvZc5bZldNb%2BI9pPtdS8ZSYfLND6ij9rVKwF%2B5DzBd%2F2rd3gRVU8eI%2FXlSGEd2Kw9xHujmLw%2BXwO%2FFJw1WtTxUOYbdEKSSWQRw5pp7FKLow37BwPG1ncHsf4IGCf&X-Amz-Signature=2506338af97d8bf97dad27a231e60751d9c76b79c0b5a8ff531de956b621bd79&X-Amz-SignedHeaders=host&x-id=GetObject)
