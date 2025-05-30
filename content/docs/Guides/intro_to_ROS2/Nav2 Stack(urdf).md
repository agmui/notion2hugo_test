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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI67XU2M%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVG0TZHfwS1W3wPefUUml8VIwQdmGTssy6JzkREKSuAAiBEe926Rqec3bkT8Qw7qMqWaTpSmBxVwF9EoCVKGFikNiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKvsna5yaBz0fL%2FZMKtwD2CbolSL%2FgmhKHLKQ5jDghH8ano2y4SotyZQdpMrzEAffZ3Q8Eq0BCDzd4yOyYIm6913ZRnn2xjH2CzTHZ0XjLH46BHbzXUF7vkwG2DcUUMg6MfXp%2Fa0i7Q%2FzlbHdmapfan%2Fup9%2FQSy8cP7xv3EvSdsj4SJJwUtqL9%2BD4SvLwrLRXditfggSe5yfiH65pgxK6yBUFHVIXrIQQVqjFA%2FW9zfc7SowrX5gCOrU0zxxHNBIOYPnuIOcYZQY6VEtQ0BznjOY478L8WYQNQdrcHEuNV2b5UXXNfQF9Hn%2FHtFUuhx4aeKH%2F2V6Y1BAmfLonWPyBz1nlGe4dZK%2BwVYoA4ZrNh56mwl7UWmKJWeTg%2FN6DmgfPLsYlJ0IrGKBRpf6PgYrkIEiuU1NfOL15yQeYiViJVt%2Fh8sxT4IEEBqGk4mlx4b0tXv8TdcOvJFZQO9omM%2FKz30ik3Zk%2F%2BNaFpl9Qzlpz1NzEMccpQ%2FTVLMQl4ZvqtKTpAJwp31FCyhX3xMhQ3ihhW7zYSFAiJQ57yj4GWGDq%2F3Ka9F7Svgj6ADE%2B3yRNQdSjLeN6umUAVdRhqjYGlqkFAwaUZ7z3q0J%2B4mYP8%2BFFhcDAWzDT0iSV54zNYOms7btfnl5BaqUNRcmDdgcw9fznwQY6pgFgmPkMu2BsHRsc9GeO6gEtl%2BQmuxLdadY%2Fu%2FKuB6s80vDHPpG10%2Bo7CGzf3%2FpnANAg2%2BpQvZ6LCJzwKneZLyR7flBYLVH3qKgeLFIQ%2BWSGm798Nb%2Fxj2fZJfHqKwY6iJHB2CEU8GU%2F8ntfMXKFImy8mSpOOtUxwKvQ3YUoaLheIYKupD24qW0myjwNQkscZ2nMxE1%2FArq6DcNplPAxAu84ipuU56Qa&X-Amz-Signature=f6daf0305b6f5447b013c14e1878b088b9cddebd64b77e0e9348bf11af28e576&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI67XU2M%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVG0TZHfwS1W3wPefUUml8VIwQdmGTssy6JzkREKSuAAiBEe926Rqec3bkT8Qw7qMqWaTpSmBxVwF9EoCVKGFikNiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKvsna5yaBz0fL%2FZMKtwD2CbolSL%2FgmhKHLKQ5jDghH8ano2y4SotyZQdpMrzEAffZ3Q8Eq0BCDzd4yOyYIm6913ZRnn2xjH2CzTHZ0XjLH46BHbzXUF7vkwG2DcUUMg6MfXp%2Fa0i7Q%2FzlbHdmapfan%2Fup9%2FQSy8cP7xv3EvSdsj4SJJwUtqL9%2BD4SvLwrLRXditfggSe5yfiH65pgxK6yBUFHVIXrIQQVqjFA%2FW9zfc7SowrX5gCOrU0zxxHNBIOYPnuIOcYZQY6VEtQ0BznjOY478L8WYQNQdrcHEuNV2b5UXXNfQF9Hn%2FHtFUuhx4aeKH%2F2V6Y1BAmfLonWPyBz1nlGe4dZK%2BwVYoA4ZrNh56mwl7UWmKJWeTg%2FN6DmgfPLsYlJ0IrGKBRpf6PgYrkIEiuU1NfOL15yQeYiViJVt%2Fh8sxT4IEEBqGk4mlx4b0tXv8TdcOvJFZQO9omM%2FKz30ik3Zk%2F%2BNaFpl9Qzlpz1NzEMccpQ%2FTVLMQl4ZvqtKTpAJwp31FCyhX3xMhQ3ihhW7zYSFAiJQ57yj4GWGDq%2F3Ka9F7Svgj6ADE%2B3yRNQdSjLeN6umUAVdRhqjYGlqkFAwaUZ7z3q0J%2B4mYP8%2BFFhcDAWzDT0iSV54zNYOms7btfnl5BaqUNRcmDdgcw9fznwQY6pgFgmPkMu2BsHRsc9GeO6gEtl%2BQmuxLdadY%2Fu%2FKuB6s80vDHPpG10%2Bo7CGzf3%2FpnANAg2%2BpQvZ6LCJzwKneZLyR7flBYLVH3qKgeLFIQ%2BWSGm798Nb%2Fxj2fZJfHqKwY6iJHB2CEU8GU%2F8ntfMXKFImy8mSpOOtUxwKvQ3YUoaLheIYKupD24qW0myjwNQkscZ2nMxE1%2FArq6DcNplPAxAu84ipuU56Qa&X-Amz-Signature=6252b940190d0110c6bf23a433b4e3c9f9093f2a2b513c9e2f6b5751cd29da27&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI67XU2M%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVG0TZHfwS1W3wPefUUml8VIwQdmGTssy6JzkREKSuAAiBEe926Rqec3bkT8Qw7qMqWaTpSmBxVwF9EoCVKGFikNiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKvsna5yaBz0fL%2FZMKtwD2CbolSL%2FgmhKHLKQ5jDghH8ano2y4SotyZQdpMrzEAffZ3Q8Eq0BCDzd4yOyYIm6913ZRnn2xjH2CzTHZ0XjLH46BHbzXUF7vkwG2DcUUMg6MfXp%2Fa0i7Q%2FzlbHdmapfan%2Fup9%2FQSy8cP7xv3EvSdsj4SJJwUtqL9%2BD4SvLwrLRXditfggSe5yfiH65pgxK6yBUFHVIXrIQQVqjFA%2FW9zfc7SowrX5gCOrU0zxxHNBIOYPnuIOcYZQY6VEtQ0BznjOY478L8WYQNQdrcHEuNV2b5UXXNfQF9Hn%2FHtFUuhx4aeKH%2F2V6Y1BAmfLonWPyBz1nlGe4dZK%2BwVYoA4ZrNh56mwl7UWmKJWeTg%2FN6DmgfPLsYlJ0IrGKBRpf6PgYrkIEiuU1NfOL15yQeYiViJVt%2Fh8sxT4IEEBqGk4mlx4b0tXv8TdcOvJFZQO9omM%2FKz30ik3Zk%2F%2BNaFpl9Qzlpz1NzEMccpQ%2FTVLMQl4ZvqtKTpAJwp31FCyhX3xMhQ3ihhW7zYSFAiJQ57yj4GWGDq%2F3Ka9F7Svgj6ADE%2B3yRNQdSjLeN6umUAVdRhqjYGlqkFAwaUZ7z3q0J%2B4mYP8%2BFFhcDAWzDT0iSV54zNYOms7btfnl5BaqUNRcmDdgcw9fznwQY6pgFgmPkMu2BsHRsc9GeO6gEtl%2BQmuxLdadY%2Fu%2FKuB6s80vDHPpG10%2Bo7CGzf3%2FpnANAg2%2BpQvZ6LCJzwKneZLyR7flBYLVH3qKgeLFIQ%2BWSGm798Nb%2Fxj2fZJfHqKwY6iJHB2CEU8GU%2F8ntfMXKFImy8mSpOOtUxwKvQ3YUoaLheIYKupD24qW0myjwNQkscZ2nMxE1%2FArq6DcNplPAxAu84ipuU56Qa&X-Amz-Signature=4515f226dd1be17c290aed3482f13d2f76a9dec34cfca482c24b7e48218b31b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI67XU2M%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVG0TZHfwS1W3wPefUUml8VIwQdmGTssy6JzkREKSuAAiBEe926Rqec3bkT8Qw7qMqWaTpSmBxVwF9EoCVKGFikNiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKvsna5yaBz0fL%2FZMKtwD2CbolSL%2FgmhKHLKQ5jDghH8ano2y4SotyZQdpMrzEAffZ3Q8Eq0BCDzd4yOyYIm6913ZRnn2xjH2CzTHZ0XjLH46BHbzXUF7vkwG2DcUUMg6MfXp%2Fa0i7Q%2FzlbHdmapfan%2Fup9%2FQSy8cP7xv3EvSdsj4SJJwUtqL9%2BD4SvLwrLRXditfggSe5yfiH65pgxK6yBUFHVIXrIQQVqjFA%2FW9zfc7SowrX5gCOrU0zxxHNBIOYPnuIOcYZQY6VEtQ0BznjOY478L8WYQNQdrcHEuNV2b5UXXNfQF9Hn%2FHtFUuhx4aeKH%2F2V6Y1BAmfLonWPyBz1nlGe4dZK%2BwVYoA4ZrNh56mwl7UWmKJWeTg%2FN6DmgfPLsYlJ0IrGKBRpf6PgYrkIEiuU1NfOL15yQeYiViJVt%2Fh8sxT4IEEBqGk4mlx4b0tXv8TdcOvJFZQO9omM%2FKz30ik3Zk%2F%2BNaFpl9Qzlpz1NzEMccpQ%2FTVLMQl4ZvqtKTpAJwp31FCyhX3xMhQ3ihhW7zYSFAiJQ57yj4GWGDq%2F3Ka9F7Svgj6ADE%2B3yRNQdSjLeN6umUAVdRhqjYGlqkFAwaUZ7z3q0J%2B4mYP8%2BFFhcDAWzDT0iSV54zNYOms7btfnl5BaqUNRcmDdgcw9fznwQY6pgFgmPkMu2BsHRsc9GeO6gEtl%2BQmuxLdadY%2Fu%2FKuB6s80vDHPpG10%2Bo7CGzf3%2FpnANAg2%2BpQvZ6LCJzwKneZLyR7flBYLVH3qKgeLFIQ%2BWSGm798Nb%2Fxj2fZJfHqKwY6iJHB2CEU8GU%2F8ntfMXKFImy8mSpOOtUxwKvQ3YUoaLheIYKupD24qW0myjwNQkscZ2nMxE1%2FArq6DcNplPAxAu84ipuU56Qa&X-Amz-Signature=6a0bb59f5919a4bc2fc2979f65f5c8bc83c50af714ec512f694bc2b2669d05d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI67XU2M%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVG0TZHfwS1W3wPefUUml8VIwQdmGTssy6JzkREKSuAAiBEe926Rqec3bkT8Qw7qMqWaTpSmBxVwF9EoCVKGFikNiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKvsna5yaBz0fL%2FZMKtwD2CbolSL%2FgmhKHLKQ5jDghH8ano2y4SotyZQdpMrzEAffZ3Q8Eq0BCDzd4yOyYIm6913ZRnn2xjH2CzTHZ0XjLH46BHbzXUF7vkwG2DcUUMg6MfXp%2Fa0i7Q%2FzlbHdmapfan%2Fup9%2FQSy8cP7xv3EvSdsj4SJJwUtqL9%2BD4SvLwrLRXditfggSe5yfiH65pgxK6yBUFHVIXrIQQVqjFA%2FW9zfc7SowrX5gCOrU0zxxHNBIOYPnuIOcYZQY6VEtQ0BznjOY478L8WYQNQdrcHEuNV2b5UXXNfQF9Hn%2FHtFUuhx4aeKH%2F2V6Y1BAmfLonWPyBz1nlGe4dZK%2BwVYoA4ZrNh56mwl7UWmKJWeTg%2FN6DmgfPLsYlJ0IrGKBRpf6PgYrkIEiuU1NfOL15yQeYiViJVt%2Fh8sxT4IEEBqGk4mlx4b0tXv8TdcOvJFZQO9omM%2FKz30ik3Zk%2F%2BNaFpl9Qzlpz1NzEMccpQ%2FTVLMQl4ZvqtKTpAJwp31FCyhX3xMhQ3ihhW7zYSFAiJQ57yj4GWGDq%2F3Ka9F7Svgj6ADE%2B3yRNQdSjLeN6umUAVdRhqjYGlqkFAwaUZ7z3q0J%2B4mYP8%2BFFhcDAWzDT0iSV54zNYOms7btfnl5BaqUNRcmDdgcw9fznwQY6pgFgmPkMu2BsHRsc9GeO6gEtl%2BQmuxLdadY%2Fu%2FKuB6s80vDHPpG10%2Bo7CGzf3%2FpnANAg2%2BpQvZ6LCJzwKneZLyR7flBYLVH3qKgeLFIQ%2BWSGm798Nb%2Fxj2fZJfHqKwY6iJHB2CEU8GU%2F8ntfMXKFImy8mSpOOtUxwKvQ3YUoaLheIYKupD24qW0myjwNQkscZ2nMxE1%2FArq6DcNplPAxAu84ipuU56Qa&X-Amz-Signature=7f97b6d1369515a7de293d46dfa536ce6e4e84b033e0d3e0e9ae81632360fe15&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI67XU2M%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVG0TZHfwS1W3wPefUUml8VIwQdmGTssy6JzkREKSuAAiBEe926Rqec3bkT8Qw7qMqWaTpSmBxVwF9EoCVKGFikNiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKvsna5yaBz0fL%2FZMKtwD2CbolSL%2FgmhKHLKQ5jDghH8ano2y4SotyZQdpMrzEAffZ3Q8Eq0BCDzd4yOyYIm6913ZRnn2xjH2CzTHZ0XjLH46BHbzXUF7vkwG2DcUUMg6MfXp%2Fa0i7Q%2FzlbHdmapfan%2Fup9%2FQSy8cP7xv3EvSdsj4SJJwUtqL9%2BD4SvLwrLRXditfggSe5yfiH65pgxK6yBUFHVIXrIQQVqjFA%2FW9zfc7SowrX5gCOrU0zxxHNBIOYPnuIOcYZQY6VEtQ0BznjOY478L8WYQNQdrcHEuNV2b5UXXNfQF9Hn%2FHtFUuhx4aeKH%2F2V6Y1BAmfLonWPyBz1nlGe4dZK%2BwVYoA4ZrNh56mwl7UWmKJWeTg%2FN6DmgfPLsYlJ0IrGKBRpf6PgYrkIEiuU1NfOL15yQeYiViJVt%2Fh8sxT4IEEBqGk4mlx4b0tXv8TdcOvJFZQO9omM%2FKz30ik3Zk%2F%2BNaFpl9Qzlpz1NzEMccpQ%2FTVLMQl4ZvqtKTpAJwp31FCyhX3xMhQ3ihhW7zYSFAiJQ57yj4GWGDq%2F3Ka9F7Svgj6ADE%2B3yRNQdSjLeN6umUAVdRhqjYGlqkFAwaUZ7z3q0J%2B4mYP8%2BFFhcDAWzDT0iSV54zNYOms7btfnl5BaqUNRcmDdgcw9fznwQY6pgFgmPkMu2BsHRsc9GeO6gEtl%2BQmuxLdadY%2Fu%2FKuB6s80vDHPpG10%2Bo7CGzf3%2FpnANAg2%2BpQvZ6LCJzwKneZLyR7flBYLVH3qKgeLFIQ%2BWSGm798Nb%2Fxj2fZJfHqKwY6iJHB2CEU8GU%2F8ntfMXKFImy8mSpOOtUxwKvQ3YUoaLheIYKupD24qW0myjwNQkscZ2nMxE1%2FArq6DcNplPAxAu84ipuU56Qa&X-Amz-Signature=84f70015a3967a2f3be129db0138b66d4665e9a8546b7dd015ee04c04ae35633&X-Amz-SignedHeaders=host&x-id=GetObject)
