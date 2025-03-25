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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEMWWN6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEksxYZwFhblyTqs70C%2FLNorE3rtJx%2F3zw3aKjXwvs2AiA5jdhY8ertC2nAcy1F%2Bv4A3gJuCS7sNDuwrANw1hlUZiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlZRasTuuBfsbzfayKtwDKcEuqAmO%2BBxGBt74t%2BY5m1HbMk%2FQBhDxdbYQ92TjIDrOXWajdyS0tH%2FGfRcMhgY80QHr8NyYvLVzCTfIOiNVuH8wW%2Fa7g15mP6HVj9C3pi4KVpVKtVFXLrI8cTDomLAB5%2F4EJlBdDCnK63v0avEuG7SWnOjzvdn%2FZmcduvSpBBU7lH1zkt4LAB30vNnx7S0s6wexT0oeGrXW%2BMXky3MzubeKv23%2Bf%2BVN7lqnXjD0TZt2ScWdWyTrYFPbgRKCwHNLYlleAI0uNcCnjAKTVxDO4kBfGRbt9rq2VXPRJttkPbfk%2BIScGZfX%2F%2BjLTNkfphMDNtZzmh9nGrMvsL3FTK89GR6meKNGbROuJDsKtOlkUUyevFAZN50np6eEutxpzcrwmg7RCFSWQI4HCgqUVfInM%2B9OztYGgld3hG1FuJsj4PIQNzJBX%2B49943GILyZiV1TN8cKl0oY9kb%2FBoKvnYxYeRQo7wPITkeBzDhglu%2BtNcFebz%2FNu5og6KWtLxyV%2B20tg9NRFAcLq59f6c6N0NcR7MLQydKtIjPTUMTpgVU3B1Ke5zdDrWhStrSeINfuMcYsxaeqLduN%2Bo2MgrSTFE1Z9oeckDBJ7QUyoer6zv%2BUf3cEMKuh4m43AqQkoXYwp4%2BJvwY6pgEvlfh%2BF%2BqmsNoXareqQwB748HU9oLcaAf3%2BpLuZPjEqTy6Pjj%2F9gdnlbbWD5T2p3ji2Ce5AALcDnsA7vlJv5n%2F%2FM4KKyrBl6UxdWf%2B9%2BfwwJVh7QR0z63Spphb2sSJbjhSE5aqfEjCZDJKb6MSiO51D0TvyLzO06Y6dKOaPRI8oBPv6WrzhPUBXBU%2B5P1VBsKPRhJLLG0r7H23s6NAhdPipODejw7I&X-Amz-Signature=b825d73fcd4ce5651bb259e327957643bf417182d05ddf9d997765101a8c2f33&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEMWWN6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEksxYZwFhblyTqs70C%2FLNorE3rtJx%2F3zw3aKjXwvs2AiA5jdhY8ertC2nAcy1F%2Bv4A3gJuCS7sNDuwrANw1hlUZiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlZRasTuuBfsbzfayKtwDKcEuqAmO%2BBxGBt74t%2BY5m1HbMk%2FQBhDxdbYQ92TjIDrOXWajdyS0tH%2FGfRcMhgY80QHr8NyYvLVzCTfIOiNVuH8wW%2Fa7g15mP6HVj9C3pi4KVpVKtVFXLrI8cTDomLAB5%2F4EJlBdDCnK63v0avEuG7SWnOjzvdn%2FZmcduvSpBBU7lH1zkt4LAB30vNnx7S0s6wexT0oeGrXW%2BMXky3MzubeKv23%2Bf%2BVN7lqnXjD0TZt2ScWdWyTrYFPbgRKCwHNLYlleAI0uNcCnjAKTVxDO4kBfGRbt9rq2VXPRJttkPbfk%2BIScGZfX%2F%2BjLTNkfphMDNtZzmh9nGrMvsL3FTK89GR6meKNGbROuJDsKtOlkUUyevFAZN50np6eEutxpzcrwmg7RCFSWQI4HCgqUVfInM%2B9OztYGgld3hG1FuJsj4PIQNzJBX%2B49943GILyZiV1TN8cKl0oY9kb%2FBoKvnYxYeRQo7wPITkeBzDhglu%2BtNcFebz%2FNu5og6KWtLxyV%2B20tg9NRFAcLq59f6c6N0NcR7MLQydKtIjPTUMTpgVU3B1Ke5zdDrWhStrSeINfuMcYsxaeqLduN%2Bo2MgrSTFE1Z9oeckDBJ7QUyoer6zv%2BUf3cEMKuh4m43AqQkoXYwp4%2BJvwY6pgEvlfh%2BF%2BqmsNoXareqQwB748HU9oLcaAf3%2BpLuZPjEqTy6Pjj%2F9gdnlbbWD5T2p3ji2Ce5AALcDnsA7vlJv5n%2F%2FM4KKyrBl6UxdWf%2B9%2BfwwJVh7QR0z63Spphb2sSJbjhSE5aqfEjCZDJKb6MSiO51D0TvyLzO06Y6dKOaPRI8oBPv6WrzhPUBXBU%2B5P1VBsKPRhJLLG0r7H23s6NAhdPipODejw7I&X-Amz-Signature=cd1e4bd0ed7d0ea6744075ca202f803fcf830fb3524f4760d183ff9852a4d088&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEMWWN6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEksxYZwFhblyTqs70C%2FLNorE3rtJx%2F3zw3aKjXwvs2AiA5jdhY8ertC2nAcy1F%2Bv4A3gJuCS7sNDuwrANw1hlUZiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlZRasTuuBfsbzfayKtwDKcEuqAmO%2BBxGBt74t%2BY5m1HbMk%2FQBhDxdbYQ92TjIDrOXWajdyS0tH%2FGfRcMhgY80QHr8NyYvLVzCTfIOiNVuH8wW%2Fa7g15mP6HVj9C3pi4KVpVKtVFXLrI8cTDomLAB5%2F4EJlBdDCnK63v0avEuG7SWnOjzvdn%2FZmcduvSpBBU7lH1zkt4LAB30vNnx7S0s6wexT0oeGrXW%2BMXky3MzubeKv23%2Bf%2BVN7lqnXjD0TZt2ScWdWyTrYFPbgRKCwHNLYlleAI0uNcCnjAKTVxDO4kBfGRbt9rq2VXPRJttkPbfk%2BIScGZfX%2F%2BjLTNkfphMDNtZzmh9nGrMvsL3FTK89GR6meKNGbROuJDsKtOlkUUyevFAZN50np6eEutxpzcrwmg7RCFSWQI4HCgqUVfInM%2B9OztYGgld3hG1FuJsj4PIQNzJBX%2B49943GILyZiV1TN8cKl0oY9kb%2FBoKvnYxYeRQo7wPITkeBzDhglu%2BtNcFebz%2FNu5og6KWtLxyV%2B20tg9NRFAcLq59f6c6N0NcR7MLQydKtIjPTUMTpgVU3B1Ke5zdDrWhStrSeINfuMcYsxaeqLduN%2Bo2MgrSTFE1Z9oeckDBJ7QUyoer6zv%2BUf3cEMKuh4m43AqQkoXYwp4%2BJvwY6pgEvlfh%2BF%2BqmsNoXareqQwB748HU9oLcaAf3%2BpLuZPjEqTy6Pjj%2F9gdnlbbWD5T2p3ji2Ce5AALcDnsA7vlJv5n%2F%2FM4KKyrBl6UxdWf%2B9%2BfwwJVh7QR0z63Spphb2sSJbjhSE5aqfEjCZDJKb6MSiO51D0TvyLzO06Y6dKOaPRI8oBPv6WrzhPUBXBU%2B5P1VBsKPRhJLLG0r7H23s6NAhdPipODejw7I&X-Amz-Signature=aaa60e9d173102de9de33cb74b55e30e49c9b861263e87411c89dde1aa80a7f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEMWWN6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEksxYZwFhblyTqs70C%2FLNorE3rtJx%2F3zw3aKjXwvs2AiA5jdhY8ertC2nAcy1F%2Bv4A3gJuCS7sNDuwrANw1hlUZiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlZRasTuuBfsbzfayKtwDKcEuqAmO%2BBxGBt74t%2BY5m1HbMk%2FQBhDxdbYQ92TjIDrOXWajdyS0tH%2FGfRcMhgY80QHr8NyYvLVzCTfIOiNVuH8wW%2Fa7g15mP6HVj9C3pi4KVpVKtVFXLrI8cTDomLAB5%2F4EJlBdDCnK63v0avEuG7SWnOjzvdn%2FZmcduvSpBBU7lH1zkt4LAB30vNnx7S0s6wexT0oeGrXW%2BMXky3MzubeKv23%2Bf%2BVN7lqnXjD0TZt2ScWdWyTrYFPbgRKCwHNLYlleAI0uNcCnjAKTVxDO4kBfGRbt9rq2VXPRJttkPbfk%2BIScGZfX%2F%2BjLTNkfphMDNtZzmh9nGrMvsL3FTK89GR6meKNGbROuJDsKtOlkUUyevFAZN50np6eEutxpzcrwmg7RCFSWQI4HCgqUVfInM%2B9OztYGgld3hG1FuJsj4PIQNzJBX%2B49943GILyZiV1TN8cKl0oY9kb%2FBoKvnYxYeRQo7wPITkeBzDhglu%2BtNcFebz%2FNu5og6KWtLxyV%2B20tg9NRFAcLq59f6c6N0NcR7MLQydKtIjPTUMTpgVU3B1Ke5zdDrWhStrSeINfuMcYsxaeqLduN%2Bo2MgrSTFE1Z9oeckDBJ7QUyoer6zv%2BUf3cEMKuh4m43AqQkoXYwp4%2BJvwY6pgEvlfh%2BF%2BqmsNoXareqQwB748HU9oLcaAf3%2BpLuZPjEqTy6Pjj%2F9gdnlbbWD5T2p3ji2Ce5AALcDnsA7vlJv5n%2F%2FM4KKyrBl6UxdWf%2B9%2BfwwJVh7QR0z63Spphb2sSJbjhSE5aqfEjCZDJKb6MSiO51D0TvyLzO06Y6dKOaPRI8oBPv6WrzhPUBXBU%2B5P1VBsKPRhJLLG0r7H23s6NAhdPipODejw7I&X-Amz-Signature=867b8adda2bdc67a47471a0999c97e91b69759733a271fcb113175863b085b66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEMWWN6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEksxYZwFhblyTqs70C%2FLNorE3rtJx%2F3zw3aKjXwvs2AiA5jdhY8ertC2nAcy1F%2Bv4A3gJuCS7sNDuwrANw1hlUZiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlZRasTuuBfsbzfayKtwDKcEuqAmO%2BBxGBt74t%2BY5m1HbMk%2FQBhDxdbYQ92TjIDrOXWajdyS0tH%2FGfRcMhgY80QHr8NyYvLVzCTfIOiNVuH8wW%2Fa7g15mP6HVj9C3pi4KVpVKtVFXLrI8cTDomLAB5%2F4EJlBdDCnK63v0avEuG7SWnOjzvdn%2FZmcduvSpBBU7lH1zkt4LAB30vNnx7S0s6wexT0oeGrXW%2BMXky3MzubeKv23%2Bf%2BVN7lqnXjD0TZt2ScWdWyTrYFPbgRKCwHNLYlleAI0uNcCnjAKTVxDO4kBfGRbt9rq2VXPRJttkPbfk%2BIScGZfX%2F%2BjLTNkfphMDNtZzmh9nGrMvsL3FTK89GR6meKNGbROuJDsKtOlkUUyevFAZN50np6eEutxpzcrwmg7RCFSWQI4HCgqUVfInM%2B9OztYGgld3hG1FuJsj4PIQNzJBX%2B49943GILyZiV1TN8cKl0oY9kb%2FBoKvnYxYeRQo7wPITkeBzDhglu%2BtNcFebz%2FNu5og6KWtLxyV%2B20tg9NRFAcLq59f6c6N0NcR7MLQydKtIjPTUMTpgVU3B1Ke5zdDrWhStrSeINfuMcYsxaeqLduN%2Bo2MgrSTFE1Z9oeckDBJ7QUyoer6zv%2BUf3cEMKuh4m43AqQkoXYwp4%2BJvwY6pgEvlfh%2BF%2BqmsNoXareqQwB748HU9oLcaAf3%2BpLuZPjEqTy6Pjj%2F9gdnlbbWD5T2p3ji2Ce5AALcDnsA7vlJv5n%2F%2FM4KKyrBl6UxdWf%2B9%2BfwwJVh7QR0z63Spphb2sSJbjhSE5aqfEjCZDJKb6MSiO51D0TvyLzO06Y6dKOaPRI8oBPv6WrzhPUBXBU%2B5P1VBsKPRhJLLG0r7H23s6NAhdPipODejw7I&X-Amz-Signature=49a808d79756f6b761b7725c919491e76df374236e8e0a363daf085fd8577737&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQEMWWN6%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEksxYZwFhblyTqs70C%2FLNorE3rtJx%2F3zw3aKjXwvs2AiA5jdhY8ertC2nAcy1F%2Bv4A3gJuCS7sNDuwrANw1hlUZiqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlZRasTuuBfsbzfayKtwDKcEuqAmO%2BBxGBt74t%2BY5m1HbMk%2FQBhDxdbYQ92TjIDrOXWajdyS0tH%2FGfRcMhgY80QHr8NyYvLVzCTfIOiNVuH8wW%2Fa7g15mP6HVj9C3pi4KVpVKtVFXLrI8cTDomLAB5%2F4EJlBdDCnK63v0avEuG7SWnOjzvdn%2FZmcduvSpBBU7lH1zkt4LAB30vNnx7S0s6wexT0oeGrXW%2BMXky3MzubeKv23%2Bf%2BVN7lqnXjD0TZt2ScWdWyTrYFPbgRKCwHNLYlleAI0uNcCnjAKTVxDO4kBfGRbt9rq2VXPRJttkPbfk%2BIScGZfX%2F%2BjLTNkfphMDNtZzmh9nGrMvsL3FTK89GR6meKNGbROuJDsKtOlkUUyevFAZN50np6eEutxpzcrwmg7RCFSWQI4HCgqUVfInM%2B9OztYGgld3hG1FuJsj4PIQNzJBX%2B49943GILyZiV1TN8cKl0oY9kb%2FBoKvnYxYeRQo7wPITkeBzDhglu%2BtNcFebz%2FNu5og6KWtLxyV%2B20tg9NRFAcLq59f6c6N0NcR7MLQydKtIjPTUMTpgVU3B1Ke5zdDrWhStrSeINfuMcYsxaeqLduN%2Bo2MgrSTFE1Z9oeckDBJ7QUyoer6zv%2BUf3cEMKuh4m43AqQkoXYwp4%2BJvwY6pgEvlfh%2BF%2BqmsNoXareqQwB748HU9oLcaAf3%2BpLuZPjEqTy6Pjj%2F9gdnlbbWD5T2p3ji2Ce5AALcDnsA7vlJv5n%2F%2FM4KKyrBl6UxdWf%2B9%2BfwwJVh7QR0z63Spphb2sSJbjhSE5aqfEjCZDJKb6MSiO51D0TvyLzO06Y6dKOaPRI8oBPv6WrzhPUBXBU%2B5P1VBsKPRhJLLG0r7H23s6NAhdPipODejw7I&X-Amz-Signature=0417714dff65f52b8c471ca497c03ebe166abc99880919772d00e278f9ab0f0a&X-Amz-SignedHeaders=host&x-id=GetObject)
