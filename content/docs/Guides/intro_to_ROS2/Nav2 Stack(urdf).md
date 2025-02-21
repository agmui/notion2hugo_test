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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4YVOWF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1wzyfelXjMLaPwk%2Fe2dqOo9wjzeUUMx3Zu8lSyjVJEwIgaaeGObWNK3cTM3cLUQFQEYVB5yyDFlXrPw%2FhYNn9PVcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FGp4UEdswU1q5wySrcAxFSDiXSzjRf9HRpUlVEeJdoHTDcz7j1lBNS6syiVW8wa10tOX60%2BW3gJzHvAh4tYbhyT454xQWkaNW1%2BZcnpPhxqrMzL2sb861UssNLlnlkVOT2QEb9%2FZonDuWZJEOJjuCCaBLH36v4BbjPbEocJtd5N7at%2F0hl437mJ8WpLKEVpuQbLYrdy6Ju0Pr11RfxXz4Fsg%2Bswsi8seAaBJfL0iBaFCAabAkb1kq1ISQUm2QRX4%2BpRbpW%2BweHhJtp1w3PrMK5wFLHxY8ZJzG2%2FqEHi7yF2VXrnPcQ2WW1yGmDimJHHlYPtU8Dqubv03vXIFzuArBJ%2BzwyLGMwFn7wyLXbtWFYgkga9Slpp%2BT4fla2MWsByHtct06%2FTDXWao8p6bjEonwuv5CwmLKUH4gtuXSuezuOhxOWX2k%2FIWu%2FDjGkKA6YNDVRKqsq6UbkJ%2FXkWpS0YunYpvqv9G3tQnaERqM9wZGQQRowTpOa6Fr2icvQZNj7%2FYQ6JUU8EroL6cOlwE7FDhWseyx99a0d4WhXWK0LXM4pJCW%2BXr8jUWu%2BQ7ucPvNdWC0LwkI%2BZL%2FwJAXuG16Z9DtEahva2tilIjKIVlnEITZ%2BP5C0BJ5bYharP7YtfpReWeKjgWXl6XKpCph3MOvn370GOqUBUnHBeVOWhLkm1Jdtg4gigBcre0ANIPRtGzJcMKllD%2FmsKXUMIW6EDdakDYNIxJdxh8lLIUFdnuAiPHf1ttBPZ1mhjFx%2FKzAE8dcoRCoaAvqiQS1cgZNMfVosK7Thu7n3CKz31DJ0pKHM1cDeodlEukvb8nWFt7ciTkA0vkb3JUfyxvE9XX%2FrQ578oSSULmtTA7RtwHiG%2BaUUM7iFV%2FCsmatz7n56&X-Amz-Signature=0700fb36f37d0ebd8ee647d3cd3da763d1144d536a5c6b6584d2e410393a99b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4YVOWF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1wzyfelXjMLaPwk%2Fe2dqOo9wjzeUUMx3Zu8lSyjVJEwIgaaeGObWNK3cTM3cLUQFQEYVB5yyDFlXrPw%2FhYNn9PVcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FGp4UEdswU1q5wySrcAxFSDiXSzjRf9HRpUlVEeJdoHTDcz7j1lBNS6syiVW8wa10tOX60%2BW3gJzHvAh4tYbhyT454xQWkaNW1%2BZcnpPhxqrMzL2sb861UssNLlnlkVOT2QEb9%2FZonDuWZJEOJjuCCaBLH36v4BbjPbEocJtd5N7at%2F0hl437mJ8WpLKEVpuQbLYrdy6Ju0Pr11RfxXz4Fsg%2Bswsi8seAaBJfL0iBaFCAabAkb1kq1ISQUm2QRX4%2BpRbpW%2BweHhJtp1w3PrMK5wFLHxY8ZJzG2%2FqEHi7yF2VXrnPcQ2WW1yGmDimJHHlYPtU8Dqubv03vXIFzuArBJ%2BzwyLGMwFn7wyLXbtWFYgkga9Slpp%2BT4fla2MWsByHtct06%2FTDXWao8p6bjEonwuv5CwmLKUH4gtuXSuezuOhxOWX2k%2FIWu%2FDjGkKA6YNDVRKqsq6UbkJ%2FXkWpS0YunYpvqv9G3tQnaERqM9wZGQQRowTpOa6Fr2icvQZNj7%2FYQ6JUU8EroL6cOlwE7FDhWseyx99a0d4WhXWK0LXM4pJCW%2BXr8jUWu%2BQ7ucPvNdWC0LwkI%2BZL%2FwJAXuG16Z9DtEahva2tilIjKIVlnEITZ%2BP5C0BJ5bYharP7YtfpReWeKjgWXl6XKpCph3MOvn370GOqUBUnHBeVOWhLkm1Jdtg4gigBcre0ANIPRtGzJcMKllD%2FmsKXUMIW6EDdakDYNIxJdxh8lLIUFdnuAiPHf1ttBPZ1mhjFx%2FKzAE8dcoRCoaAvqiQS1cgZNMfVosK7Thu7n3CKz31DJ0pKHM1cDeodlEukvb8nWFt7ciTkA0vkb3JUfyxvE9XX%2FrQ578oSSULmtTA7RtwHiG%2BaUUM7iFV%2FCsmatz7n56&X-Amz-Signature=aeb872d72ca9414fb393419b15b6421c10b834c5fe828302b4ddbe08e2832c22&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4YVOWF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1wzyfelXjMLaPwk%2Fe2dqOo9wjzeUUMx3Zu8lSyjVJEwIgaaeGObWNK3cTM3cLUQFQEYVB5yyDFlXrPw%2FhYNn9PVcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FGp4UEdswU1q5wySrcAxFSDiXSzjRf9HRpUlVEeJdoHTDcz7j1lBNS6syiVW8wa10tOX60%2BW3gJzHvAh4tYbhyT454xQWkaNW1%2BZcnpPhxqrMzL2sb861UssNLlnlkVOT2QEb9%2FZonDuWZJEOJjuCCaBLH36v4BbjPbEocJtd5N7at%2F0hl437mJ8WpLKEVpuQbLYrdy6Ju0Pr11RfxXz4Fsg%2Bswsi8seAaBJfL0iBaFCAabAkb1kq1ISQUm2QRX4%2BpRbpW%2BweHhJtp1w3PrMK5wFLHxY8ZJzG2%2FqEHi7yF2VXrnPcQ2WW1yGmDimJHHlYPtU8Dqubv03vXIFzuArBJ%2BzwyLGMwFn7wyLXbtWFYgkga9Slpp%2BT4fla2MWsByHtct06%2FTDXWao8p6bjEonwuv5CwmLKUH4gtuXSuezuOhxOWX2k%2FIWu%2FDjGkKA6YNDVRKqsq6UbkJ%2FXkWpS0YunYpvqv9G3tQnaERqM9wZGQQRowTpOa6Fr2icvQZNj7%2FYQ6JUU8EroL6cOlwE7FDhWseyx99a0d4WhXWK0LXM4pJCW%2BXr8jUWu%2BQ7ucPvNdWC0LwkI%2BZL%2FwJAXuG16Z9DtEahva2tilIjKIVlnEITZ%2BP5C0BJ5bYharP7YtfpReWeKjgWXl6XKpCph3MOvn370GOqUBUnHBeVOWhLkm1Jdtg4gigBcre0ANIPRtGzJcMKllD%2FmsKXUMIW6EDdakDYNIxJdxh8lLIUFdnuAiPHf1ttBPZ1mhjFx%2FKzAE8dcoRCoaAvqiQS1cgZNMfVosK7Thu7n3CKz31DJ0pKHM1cDeodlEukvb8nWFt7ciTkA0vkb3JUfyxvE9XX%2FrQ578oSSULmtTA7RtwHiG%2BaUUM7iFV%2FCsmatz7n56&X-Amz-Signature=e81dae1de4e1eaa10f503e99e07cffede09e11db4b9f9184bbe6afec378b623f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4YVOWF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1wzyfelXjMLaPwk%2Fe2dqOo9wjzeUUMx3Zu8lSyjVJEwIgaaeGObWNK3cTM3cLUQFQEYVB5yyDFlXrPw%2FhYNn9PVcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FGp4UEdswU1q5wySrcAxFSDiXSzjRf9HRpUlVEeJdoHTDcz7j1lBNS6syiVW8wa10tOX60%2BW3gJzHvAh4tYbhyT454xQWkaNW1%2BZcnpPhxqrMzL2sb861UssNLlnlkVOT2QEb9%2FZonDuWZJEOJjuCCaBLH36v4BbjPbEocJtd5N7at%2F0hl437mJ8WpLKEVpuQbLYrdy6Ju0Pr11RfxXz4Fsg%2Bswsi8seAaBJfL0iBaFCAabAkb1kq1ISQUm2QRX4%2BpRbpW%2BweHhJtp1w3PrMK5wFLHxY8ZJzG2%2FqEHi7yF2VXrnPcQ2WW1yGmDimJHHlYPtU8Dqubv03vXIFzuArBJ%2BzwyLGMwFn7wyLXbtWFYgkga9Slpp%2BT4fla2MWsByHtct06%2FTDXWao8p6bjEonwuv5CwmLKUH4gtuXSuezuOhxOWX2k%2FIWu%2FDjGkKA6YNDVRKqsq6UbkJ%2FXkWpS0YunYpvqv9G3tQnaERqM9wZGQQRowTpOa6Fr2icvQZNj7%2FYQ6JUU8EroL6cOlwE7FDhWseyx99a0d4WhXWK0LXM4pJCW%2BXr8jUWu%2BQ7ucPvNdWC0LwkI%2BZL%2FwJAXuG16Z9DtEahva2tilIjKIVlnEITZ%2BP5C0BJ5bYharP7YtfpReWeKjgWXl6XKpCph3MOvn370GOqUBUnHBeVOWhLkm1Jdtg4gigBcre0ANIPRtGzJcMKllD%2FmsKXUMIW6EDdakDYNIxJdxh8lLIUFdnuAiPHf1ttBPZ1mhjFx%2FKzAE8dcoRCoaAvqiQS1cgZNMfVosK7Thu7n3CKz31DJ0pKHM1cDeodlEukvb8nWFt7ciTkA0vkb3JUfyxvE9XX%2FrQ578oSSULmtTA7RtwHiG%2BaUUM7iFV%2FCsmatz7n56&X-Amz-Signature=e2ae786b6af900ecc23d02dbc91201638166b034f838ea881d643cf3115a4b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4YVOWF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1wzyfelXjMLaPwk%2Fe2dqOo9wjzeUUMx3Zu8lSyjVJEwIgaaeGObWNK3cTM3cLUQFQEYVB5yyDFlXrPw%2FhYNn9PVcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FGp4UEdswU1q5wySrcAxFSDiXSzjRf9HRpUlVEeJdoHTDcz7j1lBNS6syiVW8wa10tOX60%2BW3gJzHvAh4tYbhyT454xQWkaNW1%2BZcnpPhxqrMzL2sb861UssNLlnlkVOT2QEb9%2FZonDuWZJEOJjuCCaBLH36v4BbjPbEocJtd5N7at%2F0hl437mJ8WpLKEVpuQbLYrdy6Ju0Pr11RfxXz4Fsg%2Bswsi8seAaBJfL0iBaFCAabAkb1kq1ISQUm2QRX4%2BpRbpW%2BweHhJtp1w3PrMK5wFLHxY8ZJzG2%2FqEHi7yF2VXrnPcQ2WW1yGmDimJHHlYPtU8Dqubv03vXIFzuArBJ%2BzwyLGMwFn7wyLXbtWFYgkga9Slpp%2BT4fla2MWsByHtct06%2FTDXWao8p6bjEonwuv5CwmLKUH4gtuXSuezuOhxOWX2k%2FIWu%2FDjGkKA6YNDVRKqsq6UbkJ%2FXkWpS0YunYpvqv9G3tQnaERqM9wZGQQRowTpOa6Fr2icvQZNj7%2FYQ6JUU8EroL6cOlwE7FDhWseyx99a0d4WhXWK0LXM4pJCW%2BXr8jUWu%2BQ7ucPvNdWC0LwkI%2BZL%2FwJAXuG16Z9DtEahva2tilIjKIVlnEITZ%2BP5C0BJ5bYharP7YtfpReWeKjgWXl6XKpCph3MOvn370GOqUBUnHBeVOWhLkm1Jdtg4gigBcre0ANIPRtGzJcMKllD%2FmsKXUMIW6EDdakDYNIxJdxh8lLIUFdnuAiPHf1ttBPZ1mhjFx%2FKzAE8dcoRCoaAvqiQS1cgZNMfVosK7Thu7n3CKz31DJ0pKHM1cDeodlEukvb8nWFt7ciTkA0vkb3JUfyxvE9XX%2FrQ578oSSULmtTA7RtwHiG%2BaUUM7iFV%2FCsmatz7n56&X-Amz-Signature=80d6100f971d01e264baed0bfa004b8d65e89680666916fde4f7421fedd3a491&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L4YVOWF%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1wzyfelXjMLaPwk%2Fe2dqOo9wjzeUUMx3Zu8lSyjVJEwIgaaeGObWNK3cTM3cLUQFQEYVB5yyDFlXrPw%2FhYNn9PVcqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FGp4UEdswU1q5wySrcAxFSDiXSzjRf9HRpUlVEeJdoHTDcz7j1lBNS6syiVW8wa10tOX60%2BW3gJzHvAh4tYbhyT454xQWkaNW1%2BZcnpPhxqrMzL2sb861UssNLlnlkVOT2QEb9%2FZonDuWZJEOJjuCCaBLH36v4BbjPbEocJtd5N7at%2F0hl437mJ8WpLKEVpuQbLYrdy6Ju0Pr11RfxXz4Fsg%2Bswsi8seAaBJfL0iBaFCAabAkb1kq1ISQUm2QRX4%2BpRbpW%2BweHhJtp1w3PrMK5wFLHxY8ZJzG2%2FqEHi7yF2VXrnPcQ2WW1yGmDimJHHlYPtU8Dqubv03vXIFzuArBJ%2BzwyLGMwFn7wyLXbtWFYgkga9Slpp%2BT4fla2MWsByHtct06%2FTDXWao8p6bjEonwuv5CwmLKUH4gtuXSuezuOhxOWX2k%2FIWu%2FDjGkKA6YNDVRKqsq6UbkJ%2FXkWpS0YunYpvqv9G3tQnaERqM9wZGQQRowTpOa6Fr2icvQZNj7%2FYQ6JUU8EroL6cOlwE7FDhWseyx99a0d4WhXWK0LXM4pJCW%2BXr8jUWu%2BQ7ucPvNdWC0LwkI%2BZL%2FwJAXuG16Z9DtEahva2tilIjKIVlnEITZ%2BP5C0BJ5bYharP7YtfpReWeKjgWXl6XKpCph3MOvn370GOqUBUnHBeVOWhLkm1Jdtg4gigBcre0ANIPRtGzJcMKllD%2FmsKXUMIW6EDdakDYNIxJdxh8lLIUFdnuAiPHf1ttBPZ1mhjFx%2FKzAE8dcoRCoaAvqiQS1cgZNMfVosK7Thu7n3CKz31DJ0pKHM1cDeodlEukvb8nWFt7ciTkA0vkb3JUfyxvE9XX%2FrQ578oSSULmtTA7RtwHiG%2BaUUM7iFV%2FCsmatz7n56&X-Amz-Signature=684dc97e7b78f01e7f0e98086200b24f8e474da5a2a8e6d9f81d9c91e83f6b34&X-Amz-SignedHeaders=host&x-id=GetObject)
