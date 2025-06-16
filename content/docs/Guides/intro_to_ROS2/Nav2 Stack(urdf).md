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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6G6F275%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBpP%2B21t6bGyAmwmsQrLysNbNUFmx9wgQ9Ywb3IGKxi7AiEAhJm7ww8r29K1KeQLdGCBrAhb5iEMF%2FfV5Xv1k5OEofkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMQ%2F8nUbF2Vy1ml1GircA1peXesWr7IhTFPRGbYI%2FlSlsRYnl7UuPDLLLUODxQmlQmT3u%2Fo3DTY13n%2FR%2Fa0ky282%2FUROCnEgJz0mDaEa2d4wkSke36h3gr1w2MudNpqJa3GcO4%2Fm1NBcRTZhN7q7Id6ndS%2FjcoIwsYMAYzmM7LoEyM0O85TyQ8WJxGkGMGE9T%2FigwkF7PR9ScR%2B7PohJ%2Fywr8%2BmdYkKtvEaaY8C0f5OunQjLEIai4oH50KsIJETpN2RhYwe566KMChIvtEPSNyDbiIE6WcM5ISxrqxYx6QVO7rZTXih8fyCq00S5OMx93IBFHvcix44DyzvtKquuiyoe19Mu0lTqnBfUZPzEGqP97QH5SZ0E5c7CQjmGlsXa%2B3PkIAmNlEIYpwGD4xguNpKY%2B2rjuxJH5gLX%2BM38vhkKAqaigrh3s5PzTaqedRp4Y0uOEoa0CaPKwN8qRap7Fogp74QfP0hjIQfSjuN8MUzZ%2BfhVtiE11Np6cDWBC%2Br9tV4bseLwiiqDCl%2FCxDR%2Fj9SWYaRI35j3s7VmC3AYkOXM7t6h2hdSj99w1YHqXi9X6uA1xB47nRVCqK7vs5UCukFuRw%2FOvj3kzCcNVSy8jJ26C0BikKzL%2FA3176cQ6bIsMh%2BXbU0YMaLMF61OMJeOwsIGOqUBxgNvg78bx5qfVwJRKPGm8evqAVLRb7gIpS9vUv5e6SmOz2ga1bIYU4KmlHX%2BpilXSQ9%2FckCl2GDhFLSKQpvjkDfAKT9s8hiEMQm3jrjij2buxnVwOBu8qSPPwM9gTg1DSquaGWpBHI03zFLAEo9YkaF%2FbqroLLKCbGXJi32PaJ9StXZ%2FKftKKxnjAyTyBKFI3FB3OmZ9yg7romaMNYlpUBgTTBvi&X-Amz-Signature=6129055809096bd095573554966cc8147c6e4e369b0433962e8477805605bc2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6G6F275%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBpP%2B21t6bGyAmwmsQrLysNbNUFmx9wgQ9Ywb3IGKxi7AiEAhJm7ww8r29K1KeQLdGCBrAhb5iEMF%2FfV5Xv1k5OEofkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMQ%2F8nUbF2Vy1ml1GircA1peXesWr7IhTFPRGbYI%2FlSlsRYnl7UuPDLLLUODxQmlQmT3u%2Fo3DTY13n%2FR%2Fa0ky282%2FUROCnEgJz0mDaEa2d4wkSke36h3gr1w2MudNpqJa3GcO4%2Fm1NBcRTZhN7q7Id6ndS%2FjcoIwsYMAYzmM7LoEyM0O85TyQ8WJxGkGMGE9T%2FigwkF7PR9ScR%2B7PohJ%2Fywr8%2BmdYkKtvEaaY8C0f5OunQjLEIai4oH50KsIJETpN2RhYwe566KMChIvtEPSNyDbiIE6WcM5ISxrqxYx6QVO7rZTXih8fyCq00S5OMx93IBFHvcix44DyzvtKquuiyoe19Mu0lTqnBfUZPzEGqP97QH5SZ0E5c7CQjmGlsXa%2B3PkIAmNlEIYpwGD4xguNpKY%2B2rjuxJH5gLX%2BM38vhkKAqaigrh3s5PzTaqedRp4Y0uOEoa0CaPKwN8qRap7Fogp74QfP0hjIQfSjuN8MUzZ%2BfhVtiE11Np6cDWBC%2Br9tV4bseLwiiqDCl%2FCxDR%2Fj9SWYaRI35j3s7VmC3AYkOXM7t6h2hdSj99w1YHqXi9X6uA1xB47nRVCqK7vs5UCukFuRw%2FOvj3kzCcNVSy8jJ26C0BikKzL%2FA3176cQ6bIsMh%2BXbU0YMaLMF61OMJeOwsIGOqUBxgNvg78bx5qfVwJRKPGm8evqAVLRb7gIpS9vUv5e6SmOz2ga1bIYU4KmlHX%2BpilXSQ9%2FckCl2GDhFLSKQpvjkDfAKT9s8hiEMQm3jrjij2buxnVwOBu8qSPPwM9gTg1DSquaGWpBHI03zFLAEo9YkaF%2FbqroLLKCbGXJi32PaJ9StXZ%2FKftKKxnjAyTyBKFI3FB3OmZ9yg7romaMNYlpUBgTTBvi&X-Amz-Signature=0db9b914a5e13b9a98b62b9a5ab203e992006c8b8700a28b6a87dc8935aea059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6G6F275%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBpP%2B21t6bGyAmwmsQrLysNbNUFmx9wgQ9Ywb3IGKxi7AiEAhJm7ww8r29K1KeQLdGCBrAhb5iEMF%2FfV5Xv1k5OEofkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMQ%2F8nUbF2Vy1ml1GircA1peXesWr7IhTFPRGbYI%2FlSlsRYnl7UuPDLLLUODxQmlQmT3u%2Fo3DTY13n%2FR%2Fa0ky282%2FUROCnEgJz0mDaEa2d4wkSke36h3gr1w2MudNpqJa3GcO4%2Fm1NBcRTZhN7q7Id6ndS%2FjcoIwsYMAYzmM7LoEyM0O85TyQ8WJxGkGMGE9T%2FigwkF7PR9ScR%2B7PohJ%2Fywr8%2BmdYkKtvEaaY8C0f5OunQjLEIai4oH50KsIJETpN2RhYwe566KMChIvtEPSNyDbiIE6WcM5ISxrqxYx6QVO7rZTXih8fyCq00S5OMx93IBFHvcix44DyzvtKquuiyoe19Mu0lTqnBfUZPzEGqP97QH5SZ0E5c7CQjmGlsXa%2B3PkIAmNlEIYpwGD4xguNpKY%2B2rjuxJH5gLX%2BM38vhkKAqaigrh3s5PzTaqedRp4Y0uOEoa0CaPKwN8qRap7Fogp74QfP0hjIQfSjuN8MUzZ%2BfhVtiE11Np6cDWBC%2Br9tV4bseLwiiqDCl%2FCxDR%2Fj9SWYaRI35j3s7VmC3AYkOXM7t6h2hdSj99w1YHqXi9X6uA1xB47nRVCqK7vs5UCukFuRw%2FOvj3kzCcNVSy8jJ26C0BikKzL%2FA3176cQ6bIsMh%2BXbU0YMaLMF61OMJeOwsIGOqUBxgNvg78bx5qfVwJRKPGm8evqAVLRb7gIpS9vUv5e6SmOz2ga1bIYU4KmlHX%2BpilXSQ9%2FckCl2GDhFLSKQpvjkDfAKT9s8hiEMQm3jrjij2buxnVwOBu8qSPPwM9gTg1DSquaGWpBHI03zFLAEo9YkaF%2FbqroLLKCbGXJi32PaJ9StXZ%2FKftKKxnjAyTyBKFI3FB3OmZ9yg7romaMNYlpUBgTTBvi&X-Amz-Signature=efa1583b3063da0c1e8c288700c7d7191bb639b371971d878a28fd57ae34d62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6G6F275%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBpP%2B21t6bGyAmwmsQrLysNbNUFmx9wgQ9Ywb3IGKxi7AiEAhJm7ww8r29K1KeQLdGCBrAhb5iEMF%2FfV5Xv1k5OEofkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMQ%2F8nUbF2Vy1ml1GircA1peXesWr7IhTFPRGbYI%2FlSlsRYnl7UuPDLLLUODxQmlQmT3u%2Fo3DTY13n%2FR%2Fa0ky282%2FUROCnEgJz0mDaEa2d4wkSke36h3gr1w2MudNpqJa3GcO4%2Fm1NBcRTZhN7q7Id6ndS%2FjcoIwsYMAYzmM7LoEyM0O85TyQ8WJxGkGMGE9T%2FigwkF7PR9ScR%2B7PohJ%2Fywr8%2BmdYkKtvEaaY8C0f5OunQjLEIai4oH50KsIJETpN2RhYwe566KMChIvtEPSNyDbiIE6WcM5ISxrqxYx6QVO7rZTXih8fyCq00S5OMx93IBFHvcix44DyzvtKquuiyoe19Mu0lTqnBfUZPzEGqP97QH5SZ0E5c7CQjmGlsXa%2B3PkIAmNlEIYpwGD4xguNpKY%2B2rjuxJH5gLX%2BM38vhkKAqaigrh3s5PzTaqedRp4Y0uOEoa0CaPKwN8qRap7Fogp74QfP0hjIQfSjuN8MUzZ%2BfhVtiE11Np6cDWBC%2Br9tV4bseLwiiqDCl%2FCxDR%2Fj9SWYaRI35j3s7VmC3AYkOXM7t6h2hdSj99w1YHqXi9X6uA1xB47nRVCqK7vs5UCukFuRw%2FOvj3kzCcNVSy8jJ26C0BikKzL%2FA3176cQ6bIsMh%2BXbU0YMaLMF61OMJeOwsIGOqUBxgNvg78bx5qfVwJRKPGm8evqAVLRb7gIpS9vUv5e6SmOz2ga1bIYU4KmlHX%2BpilXSQ9%2FckCl2GDhFLSKQpvjkDfAKT9s8hiEMQm3jrjij2buxnVwOBu8qSPPwM9gTg1DSquaGWpBHI03zFLAEo9YkaF%2FbqroLLKCbGXJi32PaJ9StXZ%2FKftKKxnjAyTyBKFI3FB3OmZ9yg7romaMNYlpUBgTTBvi&X-Amz-Signature=ad56edb2a3f2146de6cc6a1861383e5182afa6de74781e0ed16a7c1145c566e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6G6F275%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBpP%2B21t6bGyAmwmsQrLysNbNUFmx9wgQ9Ywb3IGKxi7AiEAhJm7ww8r29K1KeQLdGCBrAhb5iEMF%2FfV5Xv1k5OEofkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMQ%2F8nUbF2Vy1ml1GircA1peXesWr7IhTFPRGbYI%2FlSlsRYnl7UuPDLLLUODxQmlQmT3u%2Fo3DTY13n%2FR%2Fa0ky282%2FUROCnEgJz0mDaEa2d4wkSke36h3gr1w2MudNpqJa3GcO4%2Fm1NBcRTZhN7q7Id6ndS%2FjcoIwsYMAYzmM7LoEyM0O85TyQ8WJxGkGMGE9T%2FigwkF7PR9ScR%2B7PohJ%2Fywr8%2BmdYkKtvEaaY8C0f5OunQjLEIai4oH50KsIJETpN2RhYwe566KMChIvtEPSNyDbiIE6WcM5ISxrqxYx6QVO7rZTXih8fyCq00S5OMx93IBFHvcix44DyzvtKquuiyoe19Mu0lTqnBfUZPzEGqP97QH5SZ0E5c7CQjmGlsXa%2B3PkIAmNlEIYpwGD4xguNpKY%2B2rjuxJH5gLX%2BM38vhkKAqaigrh3s5PzTaqedRp4Y0uOEoa0CaPKwN8qRap7Fogp74QfP0hjIQfSjuN8MUzZ%2BfhVtiE11Np6cDWBC%2Br9tV4bseLwiiqDCl%2FCxDR%2Fj9SWYaRI35j3s7VmC3AYkOXM7t6h2hdSj99w1YHqXi9X6uA1xB47nRVCqK7vs5UCukFuRw%2FOvj3kzCcNVSy8jJ26C0BikKzL%2FA3176cQ6bIsMh%2BXbU0YMaLMF61OMJeOwsIGOqUBxgNvg78bx5qfVwJRKPGm8evqAVLRb7gIpS9vUv5e6SmOz2ga1bIYU4KmlHX%2BpilXSQ9%2FckCl2GDhFLSKQpvjkDfAKT9s8hiEMQm3jrjij2buxnVwOBu8qSPPwM9gTg1DSquaGWpBHI03zFLAEo9YkaF%2FbqroLLKCbGXJi32PaJ9StXZ%2FKftKKxnjAyTyBKFI3FB3OmZ9yg7romaMNYlpUBgTTBvi&X-Amz-Signature=6e1510435a1adf211a9546d08372ff85638f142b88b0a78ee4108664768414eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6G6F275%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T220856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIBpP%2B21t6bGyAmwmsQrLysNbNUFmx9wgQ9Ywb3IGKxi7AiEAhJm7ww8r29K1KeQLdGCBrAhb5iEMF%2FfV5Xv1k5OEofkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMQ%2F8nUbF2Vy1ml1GircA1peXesWr7IhTFPRGbYI%2FlSlsRYnl7UuPDLLLUODxQmlQmT3u%2Fo3DTY13n%2FR%2Fa0ky282%2FUROCnEgJz0mDaEa2d4wkSke36h3gr1w2MudNpqJa3GcO4%2Fm1NBcRTZhN7q7Id6ndS%2FjcoIwsYMAYzmM7LoEyM0O85TyQ8WJxGkGMGE9T%2FigwkF7PR9ScR%2B7PohJ%2Fywr8%2BmdYkKtvEaaY8C0f5OunQjLEIai4oH50KsIJETpN2RhYwe566KMChIvtEPSNyDbiIE6WcM5ISxrqxYx6QVO7rZTXih8fyCq00S5OMx93IBFHvcix44DyzvtKquuiyoe19Mu0lTqnBfUZPzEGqP97QH5SZ0E5c7CQjmGlsXa%2B3PkIAmNlEIYpwGD4xguNpKY%2B2rjuxJH5gLX%2BM38vhkKAqaigrh3s5PzTaqedRp4Y0uOEoa0CaPKwN8qRap7Fogp74QfP0hjIQfSjuN8MUzZ%2BfhVtiE11Np6cDWBC%2Br9tV4bseLwiiqDCl%2FCxDR%2Fj9SWYaRI35j3s7VmC3AYkOXM7t6h2hdSj99w1YHqXi9X6uA1xB47nRVCqK7vs5UCukFuRw%2FOvj3kzCcNVSy8jJ26C0BikKzL%2FA3176cQ6bIsMh%2BXbU0YMaLMF61OMJeOwsIGOqUBxgNvg78bx5qfVwJRKPGm8evqAVLRb7gIpS9vUv5e6SmOz2ga1bIYU4KmlHX%2BpilXSQ9%2FckCl2GDhFLSKQpvjkDfAKT9s8hiEMQm3jrjij2buxnVwOBu8qSPPwM9gTg1DSquaGWpBHI03zFLAEo9YkaF%2FbqroLLKCbGXJi32PaJ9StXZ%2FKftKKxnjAyTyBKFI3FB3OmZ9yg7romaMNYlpUBgTTBvi&X-Amz-Signature=bce92a3a40d2c138bd5490250ea5f83719a6f292952118a130b7095200bfcb5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
