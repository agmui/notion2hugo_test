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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOYZASUT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvEiFpTjPyh3ylFSLYjI3hT3SdWhma%2F8HbtutZ8VVN%2FwIhALTovD37s6cEuzKgmVGp1kDn%2BNw1TcFxAA2RZaz4I3BlKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL8vo5%2BDLdvYC7pVsq3AM0UTzEGe3Q1%2Ff1rML80GrOBWaBrHNimwXI2ZPh%2F9m%2Fs%2BOeWJtAsbOQZA3ldKrH7mwZjw6lqvaaYzoXXnYJiVORKEeZgMgAkl%2BSBbr5Alb7s81sup0ia2aeI7DSU6xBHphJeSzr1CXff6h60VBv73yPskidE%2FxetP9HaZVJv0t3yp%2Bnej%2B5FL22le7GUNzM7Z30I0ZwHb554HztY%2BH0RXxp6IQ5YYRLbtvkLKb7Hgnb2T8rzK9Q%2BV0sag%2Byj4wxMdfXW1RM%2FPtT%2FwXm%2F2CdTmQYAMhs%2Fcq%2Fg9sAsBu2Dm8QQpQBfK8iYVaCPybg92PzcLBTYkvR58jXj5fPB%2FyDlmYDmFVbkpqmDHr%2FKs5xPjvVVFuiC0C3Vzc2AXTedHf5wbIVI69itI4NA76v2JWf%2FDlm5Xs%2Fj29InM4wm3fVaFIMlItTfFjpbGseN3MJL2%2BA%2BF2k0PnFbHEra4QEpfbjb6uCt%2Bx8iNy0sitvwqobd9AO7H42EMb0Zd6eSSsOVp6vTlFrQK3UlbdsMFxZreuCLrF8vtq19nwYt9sMHQfxxirzMdEVAp7r7LfEJmSufen1JihJ46Ck4LzNVgf%2FbgXB0U4pVX0Af8nR0UGuFV6cKi81MYV5EYO9gPjk4xkS9TD%2BlPW8BjqkAVJ6RC9xxZdWZOXE5CF3wJSpBTs85XCl27ddDgk702CmkeiRPvLbrHVou8M61WV9xFZA6hMxzKwfc9gTlGNBjEfLNGESYaaXYaKNGUja%2F04kULf%2FYaOdOwJMdbPfH6O7di%2BQ9EIEQgkzNW82JYnvYFCG8wRrvM2WA8a%2BXMsBJTJXf89DosXi1h49ats1tt%2B6HT4nyzW3i1Q7Z7Zw8iqahBQq8VgP&X-Amz-Signature=2b88f8780a853704aa1eaac1a05e4ef7e7376d55c9970f53cf4fb4e076e973ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOYZASUT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvEiFpTjPyh3ylFSLYjI3hT3SdWhma%2F8HbtutZ8VVN%2FwIhALTovD37s6cEuzKgmVGp1kDn%2BNw1TcFxAA2RZaz4I3BlKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL8vo5%2BDLdvYC7pVsq3AM0UTzEGe3Q1%2Ff1rML80GrOBWaBrHNimwXI2ZPh%2F9m%2Fs%2BOeWJtAsbOQZA3ldKrH7mwZjw6lqvaaYzoXXnYJiVORKEeZgMgAkl%2BSBbr5Alb7s81sup0ia2aeI7DSU6xBHphJeSzr1CXff6h60VBv73yPskidE%2FxetP9HaZVJv0t3yp%2Bnej%2B5FL22le7GUNzM7Z30I0ZwHb554HztY%2BH0RXxp6IQ5YYRLbtvkLKb7Hgnb2T8rzK9Q%2BV0sag%2Byj4wxMdfXW1RM%2FPtT%2FwXm%2F2CdTmQYAMhs%2Fcq%2Fg9sAsBu2Dm8QQpQBfK8iYVaCPybg92PzcLBTYkvR58jXj5fPB%2FyDlmYDmFVbkpqmDHr%2FKs5xPjvVVFuiC0C3Vzc2AXTedHf5wbIVI69itI4NA76v2JWf%2FDlm5Xs%2Fj29InM4wm3fVaFIMlItTfFjpbGseN3MJL2%2BA%2BF2k0PnFbHEra4QEpfbjb6uCt%2Bx8iNy0sitvwqobd9AO7H42EMb0Zd6eSSsOVp6vTlFrQK3UlbdsMFxZreuCLrF8vtq19nwYt9sMHQfxxirzMdEVAp7r7LfEJmSufen1JihJ46Ck4LzNVgf%2FbgXB0U4pVX0Af8nR0UGuFV6cKi81MYV5EYO9gPjk4xkS9TD%2BlPW8BjqkAVJ6RC9xxZdWZOXE5CF3wJSpBTs85XCl27ddDgk702CmkeiRPvLbrHVou8M61WV9xFZA6hMxzKwfc9gTlGNBjEfLNGESYaaXYaKNGUja%2F04kULf%2FYaOdOwJMdbPfH6O7di%2BQ9EIEQgkzNW82JYnvYFCG8wRrvM2WA8a%2BXMsBJTJXf89DosXi1h49ats1tt%2B6HT4nyzW3i1Q7Z7Zw8iqahBQq8VgP&X-Amz-Signature=6793cdf03c0ddedfab7baece64971b0ef636f84f50d4c07ee03499c3c5b42823&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOYZASUT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvEiFpTjPyh3ylFSLYjI3hT3SdWhma%2F8HbtutZ8VVN%2FwIhALTovD37s6cEuzKgmVGp1kDn%2BNw1TcFxAA2RZaz4I3BlKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL8vo5%2BDLdvYC7pVsq3AM0UTzEGe3Q1%2Ff1rML80GrOBWaBrHNimwXI2ZPh%2F9m%2Fs%2BOeWJtAsbOQZA3ldKrH7mwZjw6lqvaaYzoXXnYJiVORKEeZgMgAkl%2BSBbr5Alb7s81sup0ia2aeI7DSU6xBHphJeSzr1CXff6h60VBv73yPskidE%2FxetP9HaZVJv0t3yp%2Bnej%2B5FL22le7GUNzM7Z30I0ZwHb554HztY%2BH0RXxp6IQ5YYRLbtvkLKb7Hgnb2T8rzK9Q%2BV0sag%2Byj4wxMdfXW1RM%2FPtT%2FwXm%2F2CdTmQYAMhs%2Fcq%2Fg9sAsBu2Dm8QQpQBfK8iYVaCPybg92PzcLBTYkvR58jXj5fPB%2FyDlmYDmFVbkpqmDHr%2FKs5xPjvVVFuiC0C3Vzc2AXTedHf5wbIVI69itI4NA76v2JWf%2FDlm5Xs%2Fj29InM4wm3fVaFIMlItTfFjpbGseN3MJL2%2BA%2BF2k0PnFbHEra4QEpfbjb6uCt%2Bx8iNy0sitvwqobd9AO7H42EMb0Zd6eSSsOVp6vTlFrQK3UlbdsMFxZreuCLrF8vtq19nwYt9sMHQfxxirzMdEVAp7r7LfEJmSufen1JihJ46Ck4LzNVgf%2FbgXB0U4pVX0Af8nR0UGuFV6cKi81MYV5EYO9gPjk4xkS9TD%2BlPW8BjqkAVJ6RC9xxZdWZOXE5CF3wJSpBTs85XCl27ddDgk702CmkeiRPvLbrHVou8M61WV9xFZA6hMxzKwfc9gTlGNBjEfLNGESYaaXYaKNGUja%2F04kULf%2FYaOdOwJMdbPfH6O7di%2BQ9EIEQgkzNW82JYnvYFCG8wRrvM2WA8a%2BXMsBJTJXf89DosXi1h49ats1tt%2B6HT4nyzW3i1Q7Z7Zw8iqahBQq8VgP&X-Amz-Signature=e98b6817b3241206f3a56d07b1bb0a30ea50f7a83bb4478d9ee1aedb080f170a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOYZASUT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvEiFpTjPyh3ylFSLYjI3hT3SdWhma%2F8HbtutZ8VVN%2FwIhALTovD37s6cEuzKgmVGp1kDn%2BNw1TcFxAA2RZaz4I3BlKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL8vo5%2BDLdvYC7pVsq3AM0UTzEGe3Q1%2Ff1rML80GrOBWaBrHNimwXI2ZPh%2F9m%2Fs%2BOeWJtAsbOQZA3ldKrH7mwZjw6lqvaaYzoXXnYJiVORKEeZgMgAkl%2BSBbr5Alb7s81sup0ia2aeI7DSU6xBHphJeSzr1CXff6h60VBv73yPskidE%2FxetP9HaZVJv0t3yp%2Bnej%2B5FL22le7GUNzM7Z30I0ZwHb554HztY%2BH0RXxp6IQ5YYRLbtvkLKb7Hgnb2T8rzK9Q%2BV0sag%2Byj4wxMdfXW1RM%2FPtT%2FwXm%2F2CdTmQYAMhs%2Fcq%2Fg9sAsBu2Dm8QQpQBfK8iYVaCPybg92PzcLBTYkvR58jXj5fPB%2FyDlmYDmFVbkpqmDHr%2FKs5xPjvVVFuiC0C3Vzc2AXTedHf5wbIVI69itI4NA76v2JWf%2FDlm5Xs%2Fj29InM4wm3fVaFIMlItTfFjpbGseN3MJL2%2BA%2BF2k0PnFbHEra4QEpfbjb6uCt%2Bx8iNy0sitvwqobd9AO7H42EMb0Zd6eSSsOVp6vTlFrQK3UlbdsMFxZreuCLrF8vtq19nwYt9sMHQfxxirzMdEVAp7r7LfEJmSufen1JihJ46Ck4LzNVgf%2FbgXB0U4pVX0Af8nR0UGuFV6cKi81MYV5EYO9gPjk4xkS9TD%2BlPW8BjqkAVJ6RC9xxZdWZOXE5CF3wJSpBTs85XCl27ddDgk702CmkeiRPvLbrHVou8M61WV9xFZA6hMxzKwfc9gTlGNBjEfLNGESYaaXYaKNGUja%2F04kULf%2FYaOdOwJMdbPfH6O7di%2BQ9EIEQgkzNW82JYnvYFCG8wRrvM2WA8a%2BXMsBJTJXf89DosXi1h49ats1tt%2B6HT4nyzW3i1Q7Z7Zw8iqahBQq8VgP&X-Amz-Signature=2552a150b6bc72648c43b7a9d612e54d0b68b13e0d7f28639f183e33587a871f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOYZASUT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvEiFpTjPyh3ylFSLYjI3hT3SdWhma%2F8HbtutZ8VVN%2FwIhALTovD37s6cEuzKgmVGp1kDn%2BNw1TcFxAA2RZaz4I3BlKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL8vo5%2BDLdvYC7pVsq3AM0UTzEGe3Q1%2Ff1rML80GrOBWaBrHNimwXI2ZPh%2F9m%2Fs%2BOeWJtAsbOQZA3ldKrH7mwZjw6lqvaaYzoXXnYJiVORKEeZgMgAkl%2BSBbr5Alb7s81sup0ia2aeI7DSU6xBHphJeSzr1CXff6h60VBv73yPskidE%2FxetP9HaZVJv0t3yp%2Bnej%2B5FL22le7GUNzM7Z30I0ZwHb554HztY%2BH0RXxp6IQ5YYRLbtvkLKb7Hgnb2T8rzK9Q%2BV0sag%2Byj4wxMdfXW1RM%2FPtT%2FwXm%2F2CdTmQYAMhs%2Fcq%2Fg9sAsBu2Dm8QQpQBfK8iYVaCPybg92PzcLBTYkvR58jXj5fPB%2FyDlmYDmFVbkpqmDHr%2FKs5xPjvVVFuiC0C3Vzc2AXTedHf5wbIVI69itI4NA76v2JWf%2FDlm5Xs%2Fj29InM4wm3fVaFIMlItTfFjpbGseN3MJL2%2BA%2BF2k0PnFbHEra4QEpfbjb6uCt%2Bx8iNy0sitvwqobd9AO7H42EMb0Zd6eSSsOVp6vTlFrQK3UlbdsMFxZreuCLrF8vtq19nwYt9sMHQfxxirzMdEVAp7r7LfEJmSufen1JihJ46Ck4LzNVgf%2FbgXB0U4pVX0Af8nR0UGuFV6cKi81MYV5EYO9gPjk4xkS9TD%2BlPW8BjqkAVJ6RC9xxZdWZOXE5CF3wJSpBTs85XCl27ddDgk702CmkeiRPvLbrHVou8M61WV9xFZA6hMxzKwfc9gTlGNBjEfLNGESYaaXYaKNGUja%2F04kULf%2FYaOdOwJMdbPfH6O7di%2BQ9EIEQgkzNW82JYnvYFCG8wRrvM2WA8a%2BXMsBJTJXf89DosXi1h49ats1tt%2B6HT4nyzW3i1Q7Z7Zw8iqahBQq8VgP&X-Amz-Signature=ee44df92af47e6ec45b217192bcc04b890b1195af54b1165f0d2604fc32b03de&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOYZASUT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvEiFpTjPyh3ylFSLYjI3hT3SdWhma%2F8HbtutZ8VVN%2FwIhALTovD37s6cEuzKgmVGp1kDn%2BNw1TcFxAA2RZaz4I3BlKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL8vo5%2BDLdvYC7pVsq3AM0UTzEGe3Q1%2Ff1rML80GrOBWaBrHNimwXI2ZPh%2F9m%2Fs%2BOeWJtAsbOQZA3ldKrH7mwZjw6lqvaaYzoXXnYJiVORKEeZgMgAkl%2BSBbr5Alb7s81sup0ia2aeI7DSU6xBHphJeSzr1CXff6h60VBv73yPskidE%2FxetP9HaZVJv0t3yp%2Bnej%2B5FL22le7GUNzM7Z30I0ZwHb554HztY%2BH0RXxp6IQ5YYRLbtvkLKb7Hgnb2T8rzK9Q%2BV0sag%2Byj4wxMdfXW1RM%2FPtT%2FwXm%2F2CdTmQYAMhs%2Fcq%2Fg9sAsBu2Dm8QQpQBfK8iYVaCPybg92PzcLBTYkvR58jXj5fPB%2FyDlmYDmFVbkpqmDHr%2FKs5xPjvVVFuiC0C3Vzc2AXTedHf5wbIVI69itI4NA76v2JWf%2FDlm5Xs%2Fj29InM4wm3fVaFIMlItTfFjpbGseN3MJL2%2BA%2BF2k0PnFbHEra4QEpfbjb6uCt%2Bx8iNy0sitvwqobd9AO7H42EMb0Zd6eSSsOVp6vTlFrQK3UlbdsMFxZreuCLrF8vtq19nwYt9sMHQfxxirzMdEVAp7r7LfEJmSufen1JihJ46Ck4LzNVgf%2FbgXB0U4pVX0Af8nR0UGuFV6cKi81MYV5EYO9gPjk4xkS9TD%2BlPW8BjqkAVJ6RC9xxZdWZOXE5CF3wJSpBTs85XCl27ddDgk702CmkeiRPvLbrHVou8M61WV9xFZA6hMxzKwfc9gTlGNBjEfLNGESYaaXYaKNGUja%2F04kULf%2FYaOdOwJMdbPfH6O7di%2BQ9EIEQgkzNW82JYnvYFCG8wRrvM2WA8a%2BXMsBJTJXf89DosXi1h49ats1tt%2B6HT4nyzW3i1Q7Z7Zw8iqahBQq8VgP&X-Amz-Signature=66f8aabcf3d9b6a64915bf46640cb98ede31c0428e32177fa33dd2469c452725&X-Amz-SignedHeaders=host&x-id=GetObject)
