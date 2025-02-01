---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKADLMT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY2vs4n2YWdGd9jUewzpqMbAiZcHct956%2FUeyorwCxCwIhAI%2Fy80P%2Fas8yiSF7DT%2FpLf%2F%2Be9j33JI156Tim%2BsLIcUjKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDces8YrufYB4kN%2FIq3AOoeDF6EGg5jwLnooQZB6mT6t9MsNzUVQFpC5giwUMStsPdCbTN2BIZGDpQ6KnHKV5VYsFZAt6OeGuiVcQWrH6qkvAzW8LQilIN9D0ypgZsSVlY8%2FTjEUbc1k9jboT4mDnnwjRJ1AB0RRTMrIn9S0x2g0V1GbO5GPpiOPCDQv6BViMM88Qfl2lFmefOdhqIruXbz7xZ3dXGix%2BSCrVXZYC%2FBDPqtxUxGjb5k%2Fj62%2FcZfcyBMQ1NIjaxRUo6oJ8XD9a1xNLzTBQOA%2FH1UeTpzWn0Z40rpiaEfJndHi3wdMaI4vIHRtHJxnwVbb5mD1PL5zFWRU2WFUqRRmoWwAdetIazR5HNyiZ2qBhy7cLuZHtuL3%2FPmMb9A0WJCJIDYyO90ZcyvgHBB%2Bng1qT6ELwWAjvrXy5Z%2Bear1K5BoTMBn1l%2BX1uvSPiwUOSt4y%2BKXfZK0p%2FM52PN9aDcaEP%2FQHbJtyZPS8kjWJeAb4QuvP8ArIT8AjkUA6fY%2BguHQSaAaw1f16ueRUHevfd8cUCE2OKg2BHdYbwwWDu%2BPy7Gp8LvXk3arlH6a6Lxu6XH%2FTZcomVix6uObMLawimHHPGOjwC0FL9JwAjB6Ddkt65KBnrl7kYhrs4cYjJlrmLQB9JLJjDpx%2Fi8BjqkAZnFzdooBrsEH5gYlNtngioZAa%2FMTz%2B2f4h3Hr2Ne5DbcfN2Xu09CPT50c05lPV4L13oaJo1kWQ17RUFFocVwrcZguf%2B6gPkpiVFEHJlM%2BEi2EZmT2zmBh8iYXg%2B5MKCmcXJoF1tGRgWcAXTNuEF1PyFE3P%2BeQdIyHHkE%2F5azQz6muDrnRchMYU8iwWDbHKC%2BClLDQeWU1Qa4SyPcenmMSdiBMhx&X-Amz-Signature=127fece31bcebcc90420e5236fe0595b406e93ec496cdfda26ded57d8f5df0ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKADLMT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY2vs4n2YWdGd9jUewzpqMbAiZcHct956%2FUeyorwCxCwIhAI%2Fy80P%2Fas8yiSF7DT%2FpLf%2F%2Be9j33JI156Tim%2BsLIcUjKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDces8YrufYB4kN%2FIq3AOoeDF6EGg5jwLnooQZB6mT6t9MsNzUVQFpC5giwUMStsPdCbTN2BIZGDpQ6KnHKV5VYsFZAt6OeGuiVcQWrH6qkvAzW8LQilIN9D0ypgZsSVlY8%2FTjEUbc1k9jboT4mDnnwjRJ1AB0RRTMrIn9S0x2g0V1GbO5GPpiOPCDQv6BViMM88Qfl2lFmefOdhqIruXbz7xZ3dXGix%2BSCrVXZYC%2FBDPqtxUxGjb5k%2Fj62%2FcZfcyBMQ1NIjaxRUo6oJ8XD9a1xNLzTBQOA%2FH1UeTpzWn0Z40rpiaEfJndHi3wdMaI4vIHRtHJxnwVbb5mD1PL5zFWRU2WFUqRRmoWwAdetIazR5HNyiZ2qBhy7cLuZHtuL3%2FPmMb9A0WJCJIDYyO90ZcyvgHBB%2Bng1qT6ELwWAjvrXy5Z%2Bear1K5BoTMBn1l%2BX1uvSPiwUOSt4y%2BKXfZK0p%2FM52PN9aDcaEP%2FQHbJtyZPS8kjWJeAb4QuvP8ArIT8AjkUA6fY%2BguHQSaAaw1f16ueRUHevfd8cUCE2OKg2BHdYbwwWDu%2BPy7Gp8LvXk3arlH6a6Lxu6XH%2FTZcomVix6uObMLawimHHPGOjwC0FL9JwAjB6Ddkt65KBnrl7kYhrs4cYjJlrmLQB9JLJjDpx%2Fi8BjqkAZnFzdooBrsEH5gYlNtngioZAa%2FMTz%2B2f4h3Hr2Ne5DbcfN2Xu09CPT50c05lPV4L13oaJo1kWQ17RUFFocVwrcZguf%2B6gPkpiVFEHJlM%2BEi2EZmT2zmBh8iYXg%2B5MKCmcXJoF1tGRgWcAXTNuEF1PyFE3P%2BeQdIyHHkE%2F5azQz6muDrnRchMYU8iwWDbHKC%2BClLDQeWU1Qa4SyPcenmMSdiBMhx&X-Amz-Signature=65a2d57010e118c4a98fc44a081da6d9ad6812244d538511e338906050b2c956&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKADLMT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY2vs4n2YWdGd9jUewzpqMbAiZcHct956%2FUeyorwCxCwIhAI%2Fy80P%2Fas8yiSF7DT%2FpLf%2F%2Be9j33JI156Tim%2BsLIcUjKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDces8YrufYB4kN%2FIq3AOoeDF6EGg5jwLnooQZB6mT6t9MsNzUVQFpC5giwUMStsPdCbTN2BIZGDpQ6KnHKV5VYsFZAt6OeGuiVcQWrH6qkvAzW8LQilIN9D0ypgZsSVlY8%2FTjEUbc1k9jboT4mDnnwjRJ1AB0RRTMrIn9S0x2g0V1GbO5GPpiOPCDQv6BViMM88Qfl2lFmefOdhqIruXbz7xZ3dXGix%2BSCrVXZYC%2FBDPqtxUxGjb5k%2Fj62%2FcZfcyBMQ1NIjaxRUo6oJ8XD9a1xNLzTBQOA%2FH1UeTpzWn0Z40rpiaEfJndHi3wdMaI4vIHRtHJxnwVbb5mD1PL5zFWRU2WFUqRRmoWwAdetIazR5HNyiZ2qBhy7cLuZHtuL3%2FPmMb9A0WJCJIDYyO90ZcyvgHBB%2Bng1qT6ELwWAjvrXy5Z%2Bear1K5BoTMBn1l%2BX1uvSPiwUOSt4y%2BKXfZK0p%2FM52PN9aDcaEP%2FQHbJtyZPS8kjWJeAb4QuvP8ArIT8AjkUA6fY%2BguHQSaAaw1f16ueRUHevfd8cUCE2OKg2BHdYbwwWDu%2BPy7Gp8LvXk3arlH6a6Lxu6XH%2FTZcomVix6uObMLawimHHPGOjwC0FL9JwAjB6Ddkt65KBnrl7kYhrs4cYjJlrmLQB9JLJjDpx%2Fi8BjqkAZnFzdooBrsEH5gYlNtngioZAa%2FMTz%2B2f4h3Hr2Ne5DbcfN2Xu09CPT50c05lPV4L13oaJo1kWQ17RUFFocVwrcZguf%2B6gPkpiVFEHJlM%2BEi2EZmT2zmBh8iYXg%2B5MKCmcXJoF1tGRgWcAXTNuEF1PyFE3P%2BeQdIyHHkE%2F5azQz6muDrnRchMYU8iwWDbHKC%2BClLDQeWU1Qa4SyPcenmMSdiBMhx&X-Amz-Signature=e0fb55e559996b859aa2e22bbf0926ba911b3044c3cdf4b88a011b3985eef4b8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKADLMT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY2vs4n2YWdGd9jUewzpqMbAiZcHct956%2FUeyorwCxCwIhAI%2Fy80P%2Fas8yiSF7DT%2FpLf%2F%2Be9j33JI156Tim%2BsLIcUjKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDces8YrufYB4kN%2FIq3AOoeDF6EGg5jwLnooQZB6mT6t9MsNzUVQFpC5giwUMStsPdCbTN2BIZGDpQ6KnHKV5VYsFZAt6OeGuiVcQWrH6qkvAzW8LQilIN9D0ypgZsSVlY8%2FTjEUbc1k9jboT4mDnnwjRJ1AB0RRTMrIn9S0x2g0V1GbO5GPpiOPCDQv6BViMM88Qfl2lFmefOdhqIruXbz7xZ3dXGix%2BSCrVXZYC%2FBDPqtxUxGjb5k%2Fj62%2FcZfcyBMQ1NIjaxRUo6oJ8XD9a1xNLzTBQOA%2FH1UeTpzWn0Z40rpiaEfJndHi3wdMaI4vIHRtHJxnwVbb5mD1PL5zFWRU2WFUqRRmoWwAdetIazR5HNyiZ2qBhy7cLuZHtuL3%2FPmMb9A0WJCJIDYyO90ZcyvgHBB%2Bng1qT6ELwWAjvrXy5Z%2Bear1K5BoTMBn1l%2BX1uvSPiwUOSt4y%2BKXfZK0p%2FM52PN9aDcaEP%2FQHbJtyZPS8kjWJeAb4QuvP8ArIT8AjkUA6fY%2BguHQSaAaw1f16ueRUHevfd8cUCE2OKg2BHdYbwwWDu%2BPy7Gp8LvXk3arlH6a6Lxu6XH%2FTZcomVix6uObMLawimHHPGOjwC0FL9JwAjB6Ddkt65KBnrl7kYhrs4cYjJlrmLQB9JLJjDpx%2Fi8BjqkAZnFzdooBrsEH5gYlNtngioZAa%2FMTz%2B2f4h3Hr2Ne5DbcfN2Xu09CPT50c05lPV4L13oaJo1kWQ17RUFFocVwrcZguf%2B6gPkpiVFEHJlM%2BEi2EZmT2zmBh8iYXg%2B5MKCmcXJoF1tGRgWcAXTNuEF1PyFE3P%2BeQdIyHHkE%2F5azQz6muDrnRchMYU8iwWDbHKC%2BClLDQeWU1Qa4SyPcenmMSdiBMhx&X-Amz-Signature=62cfaa1557f0ed2feb6dc248e652b58929ef28e0c6fdac7727cc6d5e6e2376c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKADLMT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY2vs4n2YWdGd9jUewzpqMbAiZcHct956%2FUeyorwCxCwIhAI%2Fy80P%2Fas8yiSF7DT%2FpLf%2F%2Be9j33JI156Tim%2BsLIcUjKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDces8YrufYB4kN%2FIq3AOoeDF6EGg5jwLnooQZB6mT6t9MsNzUVQFpC5giwUMStsPdCbTN2BIZGDpQ6KnHKV5VYsFZAt6OeGuiVcQWrH6qkvAzW8LQilIN9D0ypgZsSVlY8%2FTjEUbc1k9jboT4mDnnwjRJ1AB0RRTMrIn9S0x2g0V1GbO5GPpiOPCDQv6BViMM88Qfl2lFmefOdhqIruXbz7xZ3dXGix%2BSCrVXZYC%2FBDPqtxUxGjb5k%2Fj62%2FcZfcyBMQ1NIjaxRUo6oJ8XD9a1xNLzTBQOA%2FH1UeTpzWn0Z40rpiaEfJndHi3wdMaI4vIHRtHJxnwVbb5mD1PL5zFWRU2WFUqRRmoWwAdetIazR5HNyiZ2qBhy7cLuZHtuL3%2FPmMb9A0WJCJIDYyO90ZcyvgHBB%2Bng1qT6ELwWAjvrXy5Z%2Bear1K5BoTMBn1l%2BX1uvSPiwUOSt4y%2BKXfZK0p%2FM52PN9aDcaEP%2FQHbJtyZPS8kjWJeAb4QuvP8ArIT8AjkUA6fY%2BguHQSaAaw1f16ueRUHevfd8cUCE2OKg2BHdYbwwWDu%2BPy7Gp8LvXk3arlH6a6Lxu6XH%2FTZcomVix6uObMLawimHHPGOjwC0FL9JwAjB6Ddkt65KBnrl7kYhrs4cYjJlrmLQB9JLJjDpx%2Fi8BjqkAZnFzdooBrsEH5gYlNtngioZAa%2FMTz%2B2f4h3Hr2Ne5DbcfN2Xu09CPT50c05lPV4L13oaJo1kWQ17RUFFocVwrcZguf%2B6gPkpiVFEHJlM%2BEi2EZmT2zmBh8iYXg%2B5MKCmcXJoF1tGRgWcAXTNuEF1PyFE3P%2BeQdIyHHkE%2F5azQz6muDrnRchMYU8iwWDbHKC%2BClLDQeWU1Qa4SyPcenmMSdiBMhx&X-Amz-Signature=877475dad4571ff21a42f753cef32306d40435ee2c9e98ff065af25e7081ded7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNKADLMT%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY2vs4n2YWdGd9jUewzpqMbAiZcHct956%2FUeyorwCxCwIhAI%2Fy80P%2Fas8yiSF7DT%2FpLf%2F%2Be9j33JI156Tim%2BsLIcUjKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDces8YrufYB4kN%2FIq3AOoeDF6EGg5jwLnooQZB6mT6t9MsNzUVQFpC5giwUMStsPdCbTN2BIZGDpQ6KnHKV5VYsFZAt6OeGuiVcQWrH6qkvAzW8LQilIN9D0ypgZsSVlY8%2FTjEUbc1k9jboT4mDnnwjRJ1AB0RRTMrIn9S0x2g0V1GbO5GPpiOPCDQv6BViMM88Qfl2lFmefOdhqIruXbz7xZ3dXGix%2BSCrVXZYC%2FBDPqtxUxGjb5k%2Fj62%2FcZfcyBMQ1NIjaxRUo6oJ8XD9a1xNLzTBQOA%2FH1UeTpzWn0Z40rpiaEfJndHi3wdMaI4vIHRtHJxnwVbb5mD1PL5zFWRU2WFUqRRmoWwAdetIazR5HNyiZ2qBhy7cLuZHtuL3%2FPmMb9A0WJCJIDYyO90ZcyvgHBB%2Bng1qT6ELwWAjvrXy5Z%2Bear1K5BoTMBn1l%2BX1uvSPiwUOSt4y%2BKXfZK0p%2FM52PN9aDcaEP%2FQHbJtyZPS8kjWJeAb4QuvP8ArIT8AjkUA6fY%2BguHQSaAaw1f16ueRUHevfd8cUCE2OKg2BHdYbwwWDu%2BPy7Gp8LvXk3arlH6a6Lxu6XH%2FTZcomVix6uObMLawimHHPGOjwC0FL9JwAjB6Ddkt65KBnrl7kYhrs4cYjJlrmLQB9JLJjDpx%2Fi8BjqkAZnFzdooBrsEH5gYlNtngioZAa%2FMTz%2B2f4h3Hr2Ne5DbcfN2Xu09CPT50c05lPV4L13oaJo1kWQ17RUFFocVwrcZguf%2B6gPkpiVFEHJlM%2BEi2EZmT2zmBh8iYXg%2B5MKCmcXJoF1tGRgWcAXTNuEF1PyFE3P%2BeQdIyHHkE%2F5azQz6muDrnRchMYU8iwWDbHKC%2BClLDQeWU1Qa4SyPcenmMSdiBMhx&X-Amz-Signature=bfde852bf7bfb5ac71c8a86bfc13ee47e4ece1553ccb983c5eefa5e820fd60b2&X-Amz-SignedHeaders=host&x-id=GetObject)
