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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPEBDA2L%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGMz4n1djKR0rwjw78%2BYImLFosDwFgYX6MEUhVEkPke%2FAiEApGMjRdc3gfnBHY6xQ5PD12p%2FHLBbE0NLLIehfkcYOwwqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzU0Q3J74nJd%2FVY4CrcAyNL2FvLcxxLedxumVHp3D8ZlSTmKG6kAGFzmBASqPuqyCSXDdXOioF9oD7A8Xhfr9QFhN3sUPbYxsmzhZCfAxEsziVCdUehS4gPmJ1XDCwo54H01ksXm3Aq5JHX6iDDd3m962Y1dXvyU0EY%2FphQwqP6X5GR58RF6OotbaMef2NLjKvGYudM8mxCmgLNUYM0JV8Z4QcZ0RvU5XHHvhHqnd%2BFmyd0L5zGgk%2FaXWnmXwzVP4frTxq1fr8WJiQGD7qgo%2BSJvd2SjZJtr6%2FHJq1Rlp9aZq2veoY2ej110Wl0rrUt5Mm8VHMhQn2vFS18Cp%2B%2BBUlwTl37pFOOVISy5jxxDmjuiUT61YqkMdcLLv5jH3%2BLKfpFSi%2F7x6hVI69ICaPnsZJqeIbkR5Limlez917BrdcFHbZOgxjHD1YWHvWyEcAf%2Bwe8qL8sRzhsd3sqTwv%2B4J5TNclB9riSSapJ68hTcJfDoPsncDDK9%2FVAaphSkkN952wmLA0YsRQguWLQmsG9IqIEYVlvBvtwooH5GC8WF%2FpW9cluxwFrEwiNUqf7gx8q5OrQX%2Fni3U7%2F2pgdG8Nc38zV9eFt77HFiIZ9iTYDFWUVJE4wH4Gmr80AiqVzK1%2BzkeFuQFVQVKU%2F9gLvMPG4q78GOqUB7X2Poo8EUIKzcutWXNkcF0M8kJAVxNAfxKIxn77VbbsN6%2FQdVTpjw%2BHHQpqJcZxrr6IMpSjKNrhl%2BDhxuFcf71WwmrIWxwhl0A8vh8g70juRtkDkkgQfOVmZPOyV1RJvwYdIYP505QN2h3HmB1G7nrkk3P05eo4zmHPlO3WbHVPnmTW0sTHZqdklCxCjoBu7M40%2FxEurjbx3A6O3m4Xlsmx7aCCM&X-Amz-Signature=27e5ad0fb4a618f8bbecb7090dd511da2a8bd890a0720a21170d40f69d4b06ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPEBDA2L%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGMz4n1djKR0rwjw78%2BYImLFosDwFgYX6MEUhVEkPke%2FAiEApGMjRdc3gfnBHY6xQ5PD12p%2FHLBbE0NLLIehfkcYOwwqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzU0Q3J74nJd%2FVY4CrcAyNL2FvLcxxLedxumVHp3D8ZlSTmKG6kAGFzmBASqPuqyCSXDdXOioF9oD7A8Xhfr9QFhN3sUPbYxsmzhZCfAxEsziVCdUehS4gPmJ1XDCwo54H01ksXm3Aq5JHX6iDDd3m962Y1dXvyU0EY%2FphQwqP6X5GR58RF6OotbaMef2NLjKvGYudM8mxCmgLNUYM0JV8Z4QcZ0RvU5XHHvhHqnd%2BFmyd0L5zGgk%2FaXWnmXwzVP4frTxq1fr8WJiQGD7qgo%2BSJvd2SjZJtr6%2FHJq1Rlp9aZq2veoY2ej110Wl0rrUt5Mm8VHMhQn2vFS18Cp%2B%2BBUlwTl37pFOOVISy5jxxDmjuiUT61YqkMdcLLv5jH3%2BLKfpFSi%2F7x6hVI69ICaPnsZJqeIbkR5Limlez917BrdcFHbZOgxjHD1YWHvWyEcAf%2Bwe8qL8sRzhsd3sqTwv%2B4J5TNclB9riSSapJ68hTcJfDoPsncDDK9%2FVAaphSkkN952wmLA0YsRQguWLQmsG9IqIEYVlvBvtwooH5GC8WF%2FpW9cluxwFrEwiNUqf7gx8q5OrQX%2Fni3U7%2F2pgdG8Nc38zV9eFt77HFiIZ9iTYDFWUVJE4wH4Gmr80AiqVzK1%2BzkeFuQFVQVKU%2F9gLvMPG4q78GOqUB7X2Poo8EUIKzcutWXNkcF0M8kJAVxNAfxKIxn77VbbsN6%2FQdVTpjw%2BHHQpqJcZxrr6IMpSjKNrhl%2BDhxuFcf71WwmrIWxwhl0A8vh8g70juRtkDkkgQfOVmZPOyV1RJvwYdIYP505QN2h3HmB1G7nrkk3P05eo4zmHPlO3WbHVPnmTW0sTHZqdklCxCjoBu7M40%2FxEurjbx3A6O3m4Xlsmx7aCCM&X-Amz-Signature=d16806d381e8f58b6830ac559bb7814a7b979c25074527d333a47c4cdca9e2b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPEBDA2L%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGMz4n1djKR0rwjw78%2BYImLFosDwFgYX6MEUhVEkPke%2FAiEApGMjRdc3gfnBHY6xQ5PD12p%2FHLBbE0NLLIehfkcYOwwqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzU0Q3J74nJd%2FVY4CrcAyNL2FvLcxxLedxumVHp3D8ZlSTmKG6kAGFzmBASqPuqyCSXDdXOioF9oD7A8Xhfr9QFhN3sUPbYxsmzhZCfAxEsziVCdUehS4gPmJ1XDCwo54H01ksXm3Aq5JHX6iDDd3m962Y1dXvyU0EY%2FphQwqP6X5GR58RF6OotbaMef2NLjKvGYudM8mxCmgLNUYM0JV8Z4QcZ0RvU5XHHvhHqnd%2BFmyd0L5zGgk%2FaXWnmXwzVP4frTxq1fr8WJiQGD7qgo%2BSJvd2SjZJtr6%2FHJq1Rlp9aZq2veoY2ej110Wl0rrUt5Mm8VHMhQn2vFS18Cp%2B%2BBUlwTl37pFOOVISy5jxxDmjuiUT61YqkMdcLLv5jH3%2BLKfpFSi%2F7x6hVI69ICaPnsZJqeIbkR5Limlez917BrdcFHbZOgxjHD1YWHvWyEcAf%2Bwe8qL8sRzhsd3sqTwv%2B4J5TNclB9riSSapJ68hTcJfDoPsncDDK9%2FVAaphSkkN952wmLA0YsRQguWLQmsG9IqIEYVlvBvtwooH5GC8WF%2FpW9cluxwFrEwiNUqf7gx8q5OrQX%2Fni3U7%2F2pgdG8Nc38zV9eFt77HFiIZ9iTYDFWUVJE4wH4Gmr80AiqVzK1%2BzkeFuQFVQVKU%2F9gLvMPG4q78GOqUB7X2Poo8EUIKzcutWXNkcF0M8kJAVxNAfxKIxn77VbbsN6%2FQdVTpjw%2BHHQpqJcZxrr6IMpSjKNrhl%2BDhxuFcf71WwmrIWxwhl0A8vh8g70juRtkDkkgQfOVmZPOyV1RJvwYdIYP505QN2h3HmB1G7nrkk3P05eo4zmHPlO3WbHVPnmTW0sTHZqdklCxCjoBu7M40%2FxEurjbx3A6O3m4Xlsmx7aCCM&X-Amz-Signature=491d7ea3d2ac7233d7bdc9df8e38651de42172e0c0965fc579d836ff3f2f2c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPEBDA2L%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGMz4n1djKR0rwjw78%2BYImLFosDwFgYX6MEUhVEkPke%2FAiEApGMjRdc3gfnBHY6xQ5PD12p%2FHLBbE0NLLIehfkcYOwwqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzU0Q3J74nJd%2FVY4CrcAyNL2FvLcxxLedxumVHp3D8ZlSTmKG6kAGFzmBASqPuqyCSXDdXOioF9oD7A8Xhfr9QFhN3sUPbYxsmzhZCfAxEsziVCdUehS4gPmJ1XDCwo54H01ksXm3Aq5JHX6iDDd3m962Y1dXvyU0EY%2FphQwqP6X5GR58RF6OotbaMef2NLjKvGYudM8mxCmgLNUYM0JV8Z4QcZ0RvU5XHHvhHqnd%2BFmyd0L5zGgk%2FaXWnmXwzVP4frTxq1fr8WJiQGD7qgo%2BSJvd2SjZJtr6%2FHJq1Rlp9aZq2veoY2ej110Wl0rrUt5Mm8VHMhQn2vFS18Cp%2B%2BBUlwTl37pFOOVISy5jxxDmjuiUT61YqkMdcLLv5jH3%2BLKfpFSi%2F7x6hVI69ICaPnsZJqeIbkR5Limlez917BrdcFHbZOgxjHD1YWHvWyEcAf%2Bwe8qL8sRzhsd3sqTwv%2B4J5TNclB9riSSapJ68hTcJfDoPsncDDK9%2FVAaphSkkN952wmLA0YsRQguWLQmsG9IqIEYVlvBvtwooH5GC8WF%2FpW9cluxwFrEwiNUqf7gx8q5OrQX%2Fni3U7%2F2pgdG8Nc38zV9eFt77HFiIZ9iTYDFWUVJE4wH4Gmr80AiqVzK1%2BzkeFuQFVQVKU%2F9gLvMPG4q78GOqUB7X2Poo8EUIKzcutWXNkcF0M8kJAVxNAfxKIxn77VbbsN6%2FQdVTpjw%2BHHQpqJcZxrr6IMpSjKNrhl%2BDhxuFcf71WwmrIWxwhl0A8vh8g70juRtkDkkgQfOVmZPOyV1RJvwYdIYP505QN2h3HmB1G7nrkk3P05eo4zmHPlO3WbHVPnmTW0sTHZqdklCxCjoBu7M40%2FxEurjbx3A6O3m4Xlsmx7aCCM&X-Amz-Signature=59d875746b9286e57973f521ac38d325dfe986686c9f9c57ad2b93dd21b83e98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPEBDA2L%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGMz4n1djKR0rwjw78%2BYImLFosDwFgYX6MEUhVEkPke%2FAiEApGMjRdc3gfnBHY6xQ5PD12p%2FHLBbE0NLLIehfkcYOwwqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzU0Q3J74nJd%2FVY4CrcAyNL2FvLcxxLedxumVHp3D8ZlSTmKG6kAGFzmBASqPuqyCSXDdXOioF9oD7A8Xhfr9QFhN3sUPbYxsmzhZCfAxEsziVCdUehS4gPmJ1XDCwo54H01ksXm3Aq5JHX6iDDd3m962Y1dXvyU0EY%2FphQwqP6X5GR58RF6OotbaMef2NLjKvGYudM8mxCmgLNUYM0JV8Z4QcZ0RvU5XHHvhHqnd%2BFmyd0L5zGgk%2FaXWnmXwzVP4frTxq1fr8WJiQGD7qgo%2BSJvd2SjZJtr6%2FHJq1Rlp9aZq2veoY2ej110Wl0rrUt5Mm8VHMhQn2vFS18Cp%2B%2BBUlwTl37pFOOVISy5jxxDmjuiUT61YqkMdcLLv5jH3%2BLKfpFSi%2F7x6hVI69ICaPnsZJqeIbkR5Limlez917BrdcFHbZOgxjHD1YWHvWyEcAf%2Bwe8qL8sRzhsd3sqTwv%2B4J5TNclB9riSSapJ68hTcJfDoPsncDDK9%2FVAaphSkkN952wmLA0YsRQguWLQmsG9IqIEYVlvBvtwooH5GC8WF%2FpW9cluxwFrEwiNUqf7gx8q5OrQX%2Fni3U7%2F2pgdG8Nc38zV9eFt77HFiIZ9iTYDFWUVJE4wH4Gmr80AiqVzK1%2BzkeFuQFVQVKU%2F9gLvMPG4q78GOqUB7X2Poo8EUIKzcutWXNkcF0M8kJAVxNAfxKIxn77VbbsN6%2FQdVTpjw%2BHHQpqJcZxrr6IMpSjKNrhl%2BDhxuFcf71WwmrIWxwhl0A8vh8g70juRtkDkkgQfOVmZPOyV1RJvwYdIYP505QN2h3HmB1G7nrkk3P05eo4zmHPlO3WbHVPnmTW0sTHZqdklCxCjoBu7M40%2FxEurjbx3A6O3m4Xlsmx7aCCM&X-Amz-Signature=8358de6e5a67d64aeabcc9bc94f02c80789565df80b4074632b9fb07f738e8c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPEBDA2L%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T200947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIGMz4n1djKR0rwjw78%2BYImLFosDwFgYX6MEUhVEkPke%2FAiEApGMjRdc3gfnBHY6xQ5PD12p%2FHLBbE0NLLIehfkcYOwwqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJzU0Q3J74nJd%2FVY4CrcAyNL2FvLcxxLedxumVHp3D8ZlSTmKG6kAGFzmBASqPuqyCSXDdXOioF9oD7A8Xhfr9QFhN3sUPbYxsmzhZCfAxEsziVCdUehS4gPmJ1XDCwo54H01ksXm3Aq5JHX6iDDd3m962Y1dXvyU0EY%2FphQwqP6X5GR58RF6OotbaMef2NLjKvGYudM8mxCmgLNUYM0JV8Z4QcZ0RvU5XHHvhHqnd%2BFmyd0L5zGgk%2FaXWnmXwzVP4frTxq1fr8WJiQGD7qgo%2BSJvd2SjZJtr6%2FHJq1Rlp9aZq2veoY2ej110Wl0rrUt5Mm8VHMhQn2vFS18Cp%2B%2BBUlwTl37pFOOVISy5jxxDmjuiUT61YqkMdcLLv5jH3%2BLKfpFSi%2F7x6hVI69ICaPnsZJqeIbkR5Limlez917BrdcFHbZOgxjHD1YWHvWyEcAf%2Bwe8qL8sRzhsd3sqTwv%2B4J5TNclB9riSSapJ68hTcJfDoPsncDDK9%2FVAaphSkkN952wmLA0YsRQguWLQmsG9IqIEYVlvBvtwooH5GC8WF%2FpW9cluxwFrEwiNUqf7gx8q5OrQX%2Fni3U7%2F2pgdG8Nc38zV9eFt77HFiIZ9iTYDFWUVJE4wH4Gmr80AiqVzK1%2BzkeFuQFVQVKU%2F9gLvMPG4q78GOqUB7X2Poo8EUIKzcutWXNkcF0M8kJAVxNAfxKIxn77VbbsN6%2FQdVTpjw%2BHHQpqJcZxrr6IMpSjKNrhl%2BDhxuFcf71WwmrIWxwhl0A8vh8g70juRtkDkkgQfOVmZPOyV1RJvwYdIYP505QN2h3HmB1G7nrkk3P05eo4zmHPlO3WbHVPnmTW0sTHZqdklCxCjoBu7M40%2FxEurjbx3A6O3m4Xlsmx7aCCM&X-Amz-Signature=2ad7001da4ab09503cb3e6128ee0824367a138a86ef6f41368e12c1ff20c50fd&X-Amz-SignedHeaders=host&x-id=GetObject)
