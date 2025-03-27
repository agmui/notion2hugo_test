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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675OKLVM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdhvLjNsK1pPhutcZkJrcevLNceEJHX0p7kiYgT4OfuQIgTp0cJBNNk4gA7XghYnW5Fnhby%2FVSPgC546xtk4meJG8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAbXWmS7eTyGicq%2BfSrcA6NIVEa0a4xTmLvwn3XfQWy5LmHyU%2BDnyR0lcwJR4g%2FxI0bIRKgK0l2kXarSsuR5KFcRg6cNWvt3G2m0pzQjhe6ZCpnlA5QlRt5HnROE3FT4bthIPqBJbTfIsvmI7THyiHZ9UZ0fi5JsFe%2FkE%2BsL0GuIuLmD6mq40pzYO9jUUXHvU%2FQAvinHg40S2Zw97%2BsXXSmyDjJoDokVdINikWEaQp7fMzpsXd4YBs8okfwmTPV5PhP78KyiggdQVMJm0ADupssr5kfHEvJjwBnKow9j2WdfeQ%2BoLVIVaZtYygPnGn39ebP5emJUhfs0ELqPngKE9zxtpcodrdmDSOc6e9ag84%2FcuY03NRy7t5n9YHfW2To1k2GgjVquJeKD8ojj5CA0uYfMA4Im2Q%2ByQIGn5VlMedYe4EhXoNhmzf5Nu%2BXusBO%2Fft2J1HW0XeHbM3KoD0yD3tmabXkjucgdQQjbh7Z%2FT8d8Pbgz%2B9Oe5fORFYWfAZIT5UZyEMUo4bQR6anU72iSvOQF9Kp2%2BiKIsb6siKJS9n0d%2F7Rzzbe15AK2GcWA1k8kehnOQux9dKDvvyy5XZtVozAvchlALep7qT1WaVnajv9GZy%2FouPLC7cvfoxgBGXu%2Bz6TAYZ9CRO0C0iLiMKGGlr8GOqUBfAXylWu3Y%2FQkrYyxYLo%2BPnknKTs4WfJJzqJAcceav5o49zGIBudg4Xsw1mVQnYq6741rdU1PVlSk45oqutiI7f6g9dZ9VSGZjtr5FY95cic59OgPITKTIsysy%2BIWiwE%2F5EWnQ2KnT1UhwejVTQ5lsRiwI3093%2FAKCfZ8mIURiZpqvEX2%2FkHO0T%2BjkltCsmw7tjb8NnccJuJQc9oyHBaELwL%2FmrhB&X-Amz-Signature=3e033253ab5d4eda2f9b28f029c11bcd95cfb52aeba630337ae593b08c340355&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675OKLVM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdhvLjNsK1pPhutcZkJrcevLNceEJHX0p7kiYgT4OfuQIgTp0cJBNNk4gA7XghYnW5Fnhby%2FVSPgC546xtk4meJG8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAbXWmS7eTyGicq%2BfSrcA6NIVEa0a4xTmLvwn3XfQWy5LmHyU%2BDnyR0lcwJR4g%2FxI0bIRKgK0l2kXarSsuR5KFcRg6cNWvt3G2m0pzQjhe6ZCpnlA5QlRt5HnROE3FT4bthIPqBJbTfIsvmI7THyiHZ9UZ0fi5JsFe%2FkE%2BsL0GuIuLmD6mq40pzYO9jUUXHvU%2FQAvinHg40S2Zw97%2BsXXSmyDjJoDokVdINikWEaQp7fMzpsXd4YBs8okfwmTPV5PhP78KyiggdQVMJm0ADupssr5kfHEvJjwBnKow9j2WdfeQ%2BoLVIVaZtYygPnGn39ebP5emJUhfs0ELqPngKE9zxtpcodrdmDSOc6e9ag84%2FcuY03NRy7t5n9YHfW2To1k2GgjVquJeKD8ojj5CA0uYfMA4Im2Q%2ByQIGn5VlMedYe4EhXoNhmzf5Nu%2BXusBO%2Fft2J1HW0XeHbM3KoD0yD3tmabXkjucgdQQjbh7Z%2FT8d8Pbgz%2B9Oe5fORFYWfAZIT5UZyEMUo4bQR6anU72iSvOQF9Kp2%2BiKIsb6siKJS9n0d%2F7Rzzbe15AK2GcWA1k8kehnOQux9dKDvvyy5XZtVozAvchlALep7qT1WaVnajv9GZy%2FouPLC7cvfoxgBGXu%2Bz6TAYZ9CRO0C0iLiMKGGlr8GOqUBfAXylWu3Y%2FQkrYyxYLo%2BPnknKTs4WfJJzqJAcceav5o49zGIBudg4Xsw1mVQnYq6741rdU1PVlSk45oqutiI7f6g9dZ9VSGZjtr5FY95cic59OgPITKTIsysy%2BIWiwE%2F5EWnQ2KnT1UhwejVTQ5lsRiwI3093%2FAKCfZ8mIURiZpqvEX2%2FkHO0T%2BjkltCsmw7tjb8NnccJuJQc9oyHBaELwL%2FmrhB&X-Amz-Signature=c18a078f2a7da99c3d255ba8ba028a7768134f7893999361172b20e69254348b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675OKLVM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdhvLjNsK1pPhutcZkJrcevLNceEJHX0p7kiYgT4OfuQIgTp0cJBNNk4gA7XghYnW5Fnhby%2FVSPgC546xtk4meJG8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAbXWmS7eTyGicq%2BfSrcA6NIVEa0a4xTmLvwn3XfQWy5LmHyU%2BDnyR0lcwJR4g%2FxI0bIRKgK0l2kXarSsuR5KFcRg6cNWvt3G2m0pzQjhe6ZCpnlA5QlRt5HnROE3FT4bthIPqBJbTfIsvmI7THyiHZ9UZ0fi5JsFe%2FkE%2BsL0GuIuLmD6mq40pzYO9jUUXHvU%2FQAvinHg40S2Zw97%2BsXXSmyDjJoDokVdINikWEaQp7fMzpsXd4YBs8okfwmTPV5PhP78KyiggdQVMJm0ADupssr5kfHEvJjwBnKow9j2WdfeQ%2BoLVIVaZtYygPnGn39ebP5emJUhfs0ELqPngKE9zxtpcodrdmDSOc6e9ag84%2FcuY03NRy7t5n9YHfW2To1k2GgjVquJeKD8ojj5CA0uYfMA4Im2Q%2ByQIGn5VlMedYe4EhXoNhmzf5Nu%2BXusBO%2Fft2J1HW0XeHbM3KoD0yD3tmabXkjucgdQQjbh7Z%2FT8d8Pbgz%2B9Oe5fORFYWfAZIT5UZyEMUo4bQR6anU72iSvOQF9Kp2%2BiKIsb6siKJS9n0d%2F7Rzzbe15AK2GcWA1k8kehnOQux9dKDvvyy5XZtVozAvchlALep7qT1WaVnajv9GZy%2FouPLC7cvfoxgBGXu%2Bz6TAYZ9CRO0C0iLiMKGGlr8GOqUBfAXylWu3Y%2FQkrYyxYLo%2BPnknKTs4WfJJzqJAcceav5o49zGIBudg4Xsw1mVQnYq6741rdU1PVlSk45oqutiI7f6g9dZ9VSGZjtr5FY95cic59OgPITKTIsysy%2BIWiwE%2F5EWnQ2KnT1UhwejVTQ5lsRiwI3093%2FAKCfZ8mIURiZpqvEX2%2FkHO0T%2BjkltCsmw7tjb8NnccJuJQc9oyHBaELwL%2FmrhB&X-Amz-Signature=f37512cd5983519ac7798f33375086b81f5e990064c93204e27445fbb97238de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675OKLVM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdhvLjNsK1pPhutcZkJrcevLNceEJHX0p7kiYgT4OfuQIgTp0cJBNNk4gA7XghYnW5Fnhby%2FVSPgC546xtk4meJG8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAbXWmS7eTyGicq%2BfSrcA6NIVEa0a4xTmLvwn3XfQWy5LmHyU%2BDnyR0lcwJR4g%2FxI0bIRKgK0l2kXarSsuR5KFcRg6cNWvt3G2m0pzQjhe6ZCpnlA5QlRt5HnROE3FT4bthIPqBJbTfIsvmI7THyiHZ9UZ0fi5JsFe%2FkE%2BsL0GuIuLmD6mq40pzYO9jUUXHvU%2FQAvinHg40S2Zw97%2BsXXSmyDjJoDokVdINikWEaQp7fMzpsXd4YBs8okfwmTPV5PhP78KyiggdQVMJm0ADupssr5kfHEvJjwBnKow9j2WdfeQ%2BoLVIVaZtYygPnGn39ebP5emJUhfs0ELqPngKE9zxtpcodrdmDSOc6e9ag84%2FcuY03NRy7t5n9YHfW2To1k2GgjVquJeKD8ojj5CA0uYfMA4Im2Q%2ByQIGn5VlMedYe4EhXoNhmzf5Nu%2BXusBO%2Fft2J1HW0XeHbM3KoD0yD3tmabXkjucgdQQjbh7Z%2FT8d8Pbgz%2B9Oe5fORFYWfAZIT5UZyEMUo4bQR6anU72iSvOQF9Kp2%2BiKIsb6siKJS9n0d%2F7Rzzbe15AK2GcWA1k8kehnOQux9dKDvvyy5XZtVozAvchlALep7qT1WaVnajv9GZy%2FouPLC7cvfoxgBGXu%2Bz6TAYZ9CRO0C0iLiMKGGlr8GOqUBfAXylWu3Y%2FQkrYyxYLo%2BPnknKTs4WfJJzqJAcceav5o49zGIBudg4Xsw1mVQnYq6741rdU1PVlSk45oqutiI7f6g9dZ9VSGZjtr5FY95cic59OgPITKTIsysy%2BIWiwE%2F5EWnQ2KnT1UhwejVTQ5lsRiwI3093%2FAKCfZ8mIURiZpqvEX2%2FkHO0T%2BjkltCsmw7tjb8NnccJuJQc9oyHBaELwL%2FmrhB&X-Amz-Signature=8fe28e0f69308864d7724146e4757f1769977e8e13ad46264e29fc403bc73ed8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675OKLVM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdhvLjNsK1pPhutcZkJrcevLNceEJHX0p7kiYgT4OfuQIgTp0cJBNNk4gA7XghYnW5Fnhby%2FVSPgC546xtk4meJG8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAbXWmS7eTyGicq%2BfSrcA6NIVEa0a4xTmLvwn3XfQWy5LmHyU%2BDnyR0lcwJR4g%2FxI0bIRKgK0l2kXarSsuR5KFcRg6cNWvt3G2m0pzQjhe6ZCpnlA5QlRt5HnROE3FT4bthIPqBJbTfIsvmI7THyiHZ9UZ0fi5JsFe%2FkE%2BsL0GuIuLmD6mq40pzYO9jUUXHvU%2FQAvinHg40S2Zw97%2BsXXSmyDjJoDokVdINikWEaQp7fMzpsXd4YBs8okfwmTPV5PhP78KyiggdQVMJm0ADupssr5kfHEvJjwBnKow9j2WdfeQ%2BoLVIVaZtYygPnGn39ebP5emJUhfs0ELqPngKE9zxtpcodrdmDSOc6e9ag84%2FcuY03NRy7t5n9YHfW2To1k2GgjVquJeKD8ojj5CA0uYfMA4Im2Q%2ByQIGn5VlMedYe4EhXoNhmzf5Nu%2BXusBO%2Fft2J1HW0XeHbM3KoD0yD3tmabXkjucgdQQjbh7Z%2FT8d8Pbgz%2B9Oe5fORFYWfAZIT5UZyEMUo4bQR6anU72iSvOQF9Kp2%2BiKIsb6siKJS9n0d%2F7Rzzbe15AK2GcWA1k8kehnOQux9dKDvvyy5XZtVozAvchlALep7qT1WaVnajv9GZy%2FouPLC7cvfoxgBGXu%2Bz6TAYZ9CRO0C0iLiMKGGlr8GOqUBfAXylWu3Y%2FQkrYyxYLo%2BPnknKTs4WfJJzqJAcceav5o49zGIBudg4Xsw1mVQnYq6741rdU1PVlSk45oqutiI7f6g9dZ9VSGZjtr5FY95cic59OgPITKTIsysy%2BIWiwE%2F5EWnQ2KnT1UhwejVTQ5lsRiwI3093%2FAKCfZ8mIURiZpqvEX2%2FkHO0T%2BjkltCsmw7tjb8NnccJuJQc9oyHBaELwL%2FmrhB&X-Amz-Signature=39fa1e2ea117e2c1f7d18e859689dc71204f740fbc010508f440ca8ed3ce958b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675OKLVM%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdhvLjNsK1pPhutcZkJrcevLNceEJHX0p7kiYgT4OfuQIgTp0cJBNNk4gA7XghYnW5Fnhby%2FVSPgC546xtk4meJG8q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAbXWmS7eTyGicq%2BfSrcA6NIVEa0a4xTmLvwn3XfQWy5LmHyU%2BDnyR0lcwJR4g%2FxI0bIRKgK0l2kXarSsuR5KFcRg6cNWvt3G2m0pzQjhe6ZCpnlA5QlRt5HnROE3FT4bthIPqBJbTfIsvmI7THyiHZ9UZ0fi5JsFe%2FkE%2BsL0GuIuLmD6mq40pzYO9jUUXHvU%2FQAvinHg40S2Zw97%2BsXXSmyDjJoDokVdINikWEaQp7fMzpsXd4YBs8okfwmTPV5PhP78KyiggdQVMJm0ADupssr5kfHEvJjwBnKow9j2WdfeQ%2BoLVIVaZtYygPnGn39ebP5emJUhfs0ELqPngKE9zxtpcodrdmDSOc6e9ag84%2FcuY03NRy7t5n9YHfW2To1k2GgjVquJeKD8ojj5CA0uYfMA4Im2Q%2ByQIGn5VlMedYe4EhXoNhmzf5Nu%2BXusBO%2Fft2J1HW0XeHbM3KoD0yD3tmabXkjucgdQQjbh7Z%2FT8d8Pbgz%2B9Oe5fORFYWfAZIT5UZyEMUo4bQR6anU72iSvOQF9Kp2%2BiKIsb6siKJS9n0d%2F7Rzzbe15AK2GcWA1k8kehnOQux9dKDvvyy5XZtVozAvchlALep7qT1WaVnajv9GZy%2FouPLC7cvfoxgBGXu%2Bz6TAYZ9CRO0C0iLiMKGGlr8GOqUBfAXylWu3Y%2FQkrYyxYLo%2BPnknKTs4WfJJzqJAcceav5o49zGIBudg4Xsw1mVQnYq6741rdU1PVlSk45oqutiI7f6g9dZ9VSGZjtr5FY95cic59OgPITKTIsysy%2BIWiwE%2F5EWnQ2KnT1UhwejVTQ5lsRiwI3093%2FAKCfZ8mIURiZpqvEX2%2FkHO0T%2BjkltCsmw7tjb8NnccJuJQc9oyHBaELwL%2FmrhB&X-Amz-Signature=ba5ff665866248911c4d0c275173e55e40727ca8567fadcc6690cf74342ebfb4&X-Amz-SignedHeaders=host&x-id=GetObject)
