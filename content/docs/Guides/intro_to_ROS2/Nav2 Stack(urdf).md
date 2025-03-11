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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DHCN3CL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC2r2aPNxurWgAKQVQ%2BX8Tt%2BvP%2FQuz3Ap%2BO%2FnfC07SsLQIhAOKSB96c6I%2Bush6j1P4hTdTIYKRta3lZMF5Zo1tZXobAKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUqt28CEusLTiPiLsq3ANsxVexBqB3dczo0n98EO6M58rqYJFSSjv2wckFzGLdDfZcNvChBKabVd7c4hxM66gwSTvt9v5CmpCpfSEYtdcCU9KbfFt4crBowYRZDKwvGcp50K%2FEVYg9ACm5f9Cf3GnNsHR8AJOikx5pLrqJPqKxJaHlVf9QWCZIxfCK9Ct3GqZnppqnT627mwAObdToktXtvN2UG54D984WdLxADyqn5tEcnxLBnGx8I6ZbdS5ddO86F7U6%2BEtd1%2FBSHLw9yaEeYmFOllEUCGJbliR0XK9jpnOxbUylWZC%2FV2TvFyi%2BIxOr1TchWv2byuFEjTmFWuJmX%2BjCw3jZc91I9TqdyEWH1D0a64qcO4uOLc7dp0OXmgxYu8vCfzFoKWeDxNsE2xdEmUIbMmt4kJn4EPzXbcySVey1Yd12BOSh6QoUOa8izOgFmAV3kSCILSF1p2A34smFK%2FpOqHd9l9v8RaKqVb5wFaGxa5YbYJGAnvsHz1ocJzq8AehVTjqxV2Y8vy%2BFVcj20hpk2QiG5x2%2B3LIgX%2FAQdIhjNICpJM0%2FBAN2B2siCq%2FZXStUrchu9kVY7D8n7HC6%2BZD5cdJwn3Y8iYDlHtZxgspiULb2oUukgnaP%2Fbl851HQJmq1vp8hcVwT6DDYz76%2BBjqkAToX9MIofN7XB%2FlkzagHBZ5BxOQDqFhxZ2Wih%2FZ4WPR96XiK09CbM%2BHcV3FwUAFKITD7ogI8Op6xUpueBubAViwz9pSeKG%2BvHzOy4%2B9uZ%2BY3y1VLRh7K2FmHlyO9MhmDZC5lPJaqGNMmwafGgCZtAL3wzs9q1IG4WPFSebSiDZca7ZNV6NKhpXKUV1EnqU2qGhoD1NcFQNEZNRU7RJJXFKtFypP8&X-Amz-Signature=df4b5a3bceef0086a08ed9e6d9f6adafbf591d2e4c6c3aba3182d4df5be64fac&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DHCN3CL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC2r2aPNxurWgAKQVQ%2BX8Tt%2BvP%2FQuz3Ap%2BO%2FnfC07SsLQIhAOKSB96c6I%2Bush6j1P4hTdTIYKRta3lZMF5Zo1tZXobAKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUqt28CEusLTiPiLsq3ANsxVexBqB3dczo0n98EO6M58rqYJFSSjv2wckFzGLdDfZcNvChBKabVd7c4hxM66gwSTvt9v5CmpCpfSEYtdcCU9KbfFt4crBowYRZDKwvGcp50K%2FEVYg9ACm5f9Cf3GnNsHR8AJOikx5pLrqJPqKxJaHlVf9QWCZIxfCK9Ct3GqZnppqnT627mwAObdToktXtvN2UG54D984WdLxADyqn5tEcnxLBnGx8I6ZbdS5ddO86F7U6%2BEtd1%2FBSHLw9yaEeYmFOllEUCGJbliR0XK9jpnOxbUylWZC%2FV2TvFyi%2BIxOr1TchWv2byuFEjTmFWuJmX%2BjCw3jZc91I9TqdyEWH1D0a64qcO4uOLc7dp0OXmgxYu8vCfzFoKWeDxNsE2xdEmUIbMmt4kJn4EPzXbcySVey1Yd12BOSh6QoUOa8izOgFmAV3kSCILSF1p2A34smFK%2FpOqHd9l9v8RaKqVb5wFaGxa5YbYJGAnvsHz1ocJzq8AehVTjqxV2Y8vy%2BFVcj20hpk2QiG5x2%2B3LIgX%2FAQdIhjNICpJM0%2FBAN2B2siCq%2FZXStUrchu9kVY7D8n7HC6%2BZD5cdJwn3Y8iYDlHtZxgspiULb2oUukgnaP%2Fbl851HQJmq1vp8hcVwT6DDYz76%2BBjqkAToX9MIofN7XB%2FlkzagHBZ5BxOQDqFhxZ2Wih%2FZ4WPR96XiK09CbM%2BHcV3FwUAFKITD7ogI8Op6xUpueBubAViwz9pSeKG%2BvHzOy4%2B9uZ%2BY3y1VLRh7K2FmHlyO9MhmDZC5lPJaqGNMmwafGgCZtAL3wzs9q1IG4WPFSebSiDZca7ZNV6NKhpXKUV1EnqU2qGhoD1NcFQNEZNRU7RJJXFKtFypP8&X-Amz-Signature=81d7ce6ba4e0fd65dcb7d3d7a60fe69b208cd30841a3e64ba67dd0ec4d7c14b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DHCN3CL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC2r2aPNxurWgAKQVQ%2BX8Tt%2BvP%2FQuz3Ap%2BO%2FnfC07SsLQIhAOKSB96c6I%2Bush6j1P4hTdTIYKRta3lZMF5Zo1tZXobAKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUqt28CEusLTiPiLsq3ANsxVexBqB3dczo0n98EO6M58rqYJFSSjv2wckFzGLdDfZcNvChBKabVd7c4hxM66gwSTvt9v5CmpCpfSEYtdcCU9KbfFt4crBowYRZDKwvGcp50K%2FEVYg9ACm5f9Cf3GnNsHR8AJOikx5pLrqJPqKxJaHlVf9QWCZIxfCK9Ct3GqZnppqnT627mwAObdToktXtvN2UG54D984WdLxADyqn5tEcnxLBnGx8I6ZbdS5ddO86F7U6%2BEtd1%2FBSHLw9yaEeYmFOllEUCGJbliR0XK9jpnOxbUylWZC%2FV2TvFyi%2BIxOr1TchWv2byuFEjTmFWuJmX%2BjCw3jZc91I9TqdyEWH1D0a64qcO4uOLc7dp0OXmgxYu8vCfzFoKWeDxNsE2xdEmUIbMmt4kJn4EPzXbcySVey1Yd12BOSh6QoUOa8izOgFmAV3kSCILSF1p2A34smFK%2FpOqHd9l9v8RaKqVb5wFaGxa5YbYJGAnvsHz1ocJzq8AehVTjqxV2Y8vy%2BFVcj20hpk2QiG5x2%2B3LIgX%2FAQdIhjNICpJM0%2FBAN2B2siCq%2FZXStUrchu9kVY7D8n7HC6%2BZD5cdJwn3Y8iYDlHtZxgspiULb2oUukgnaP%2Fbl851HQJmq1vp8hcVwT6DDYz76%2BBjqkAToX9MIofN7XB%2FlkzagHBZ5BxOQDqFhxZ2Wih%2FZ4WPR96XiK09CbM%2BHcV3FwUAFKITD7ogI8Op6xUpueBubAViwz9pSeKG%2BvHzOy4%2B9uZ%2BY3y1VLRh7K2FmHlyO9MhmDZC5lPJaqGNMmwafGgCZtAL3wzs9q1IG4WPFSebSiDZca7ZNV6NKhpXKUV1EnqU2qGhoD1NcFQNEZNRU7RJJXFKtFypP8&X-Amz-Signature=5722629d024bd211ccc2ab7ecb0788501b32bda7598c749d28f847a05351e8f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DHCN3CL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC2r2aPNxurWgAKQVQ%2BX8Tt%2BvP%2FQuz3Ap%2BO%2FnfC07SsLQIhAOKSB96c6I%2Bush6j1P4hTdTIYKRta3lZMF5Zo1tZXobAKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUqt28CEusLTiPiLsq3ANsxVexBqB3dczo0n98EO6M58rqYJFSSjv2wckFzGLdDfZcNvChBKabVd7c4hxM66gwSTvt9v5CmpCpfSEYtdcCU9KbfFt4crBowYRZDKwvGcp50K%2FEVYg9ACm5f9Cf3GnNsHR8AJOikx5pLrqJPqKxJaHlVf9QWCZIxfCK9Ct3GqZnppqnT627mwAObdToktXtvN2UG54D984WdLxADyqn5tEcnxLBnGx8I6ZbdS5ddO86F7U6%2BEtd1%2FBSHLw9yaEeYmFOllEUCGJbliR0XK9jpnOxbUylWZC%2FV2TvFyi%2BIxOr1TchWv2byuFEjTmFWuJmX%2BjCw3jZc91I9TqdyEWH1D0a64qcO4uOLc7dp0OXmgxYu8vCfzFoKWeDxNsE2xdEmUIbMmt4kJn4EPzXbcySVey1Yd12BOSh6QoUOa8izOgFmAV3kSCILSF1p2A34smFK%2FpOqHd9l9v8RaKqVb5wFaGxa5YbYJGAnvsHz1ocJzq8AehVTjqxV2Y8vy%2BFVcj20hpk2QiG5x2%2B3LIgX%2FAQdIhjNICpJM0%2FBAN2B2siCq%2FZXStUrchu9kVY7D8n7HC6%2BZD5cdJwn3Y8iYDlHtZxgspiULb2oUukgnaP%2Fbl851HQJmq1vp8hcVwT6DDYz76%2BBjqkAToX9MIofN7XB%2FlkzagHBZ5BxOQDqFhxZ2Wih%2FZ4WPR96XiK09CbM%2BHcV3FwUAFKITD7ogI8Op6xUpueBubAViwz9pSeKG%2BvHzOy4%2B9uZ%2BY3y1VLRh7K2FmHlyO9MhmDZC5lPJaqGNMmwafGgCZtAL3wzs9q1IG4WPFSebSiDZca7ZNV6NKhpXKUV1EnqU2qGhoD1NcFQNEZNRU7RJJXFKtFypP8&X-Amz-Signature=184edea1b8e7bfd4cf70afbda13b778828bb263d9a6e1cdd890aae8782bae3b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DHCN3CL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC2r2aPNxurWgAKQVQ%2BX8Tt%2BvP%2FQuz3Ap%2BO%2FnfC07SsLQIhAOKSB96c6I%2Bush6j1P4hTdTIYKRta3lZMF5Zo1tZXobAKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUqt28CEusLTiPiLsq3ANsxVexBqB3dczo0n98EO6M58rqYJFSSjv2wckFzGLdDfZcNvChBKabVd7c4hxM66gwSTvt9v5CmpCpfSEYtdcCU9KbfFt4crBowYRZDKwvGcp50K%2FEVYg9ACm5f9Cf3GnNsHR8AJOikx5pLrqJPqKxJaHlVf9QWCZIxfCK9Ct3GqZnppqnT627mwAObdToktXtvN2UG54D984WdLxADyqn5tEcnxLBnGx8I6ZbdS5ddO86F7U6%2BEtd1%2FBSHLw9yaEeYmFOllEUCGJbliR0XK9jpnOxbUylWZC%2FV2TvFyi%2BIxOr1TchWv2byuFEjTmFWuJmX%2BjCw3jZc91I9TqdyEWH1D0a64qcO4uOLc7dp0OXmgxYu8vCfzFoKWeDxNsE2xdEmUIbMmt4kJn4EPzXbcySVey1Yd12BOSh6QoUOa8izOgFmAV3kSCILSF1p2A34smFK%2FpOqHd9l9v8RaKqVb5wFaGxa5YbYJGAnvsHz1ocJzq8AehVTjqxV2Y8vy%2BFVcj20hpk2QiG5x2%2B3LIgX%2FAQdIhjNICpJM0%2FBAN2B2siCq%2FZXStUrchu9kVY7D8n7HC6%2BZD5cdJwn3Y8iYDlHtZxgspiULb2oUukgnaP%2Fbl851HQJmq1vp8hcVwT6DDYz76%2BBjqkAToX9MIofN7XB%2FlkzagHBZ5BxOQDqFhxZ2Wih%2FZ4WPR96XiK09CbM%2BHcV3FwUAFKITD7ogI8Op6xUpueBubAViwz9pSeKG%2BvHzOy4%2B9uZ%2BY3y1VLRh7K2FmHlyO9MhmDZC5lPJaqGNMmwafGgCZtAL3wzs9q1IG4WPFSebSiDZca7ZNV6NKhpXKUV1EnqU2qGhoD1NcFQNEZNRU7RJJXFKtFypP8&X-Amz-Signature=b8c4709177984f3e8a55b191e56582045f746da88c06fdfb737b4a8464380492&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DHCN3CL%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQC2r2aPNxurWgAKQVQ%2BX8Tt%2BvP%2FQuz3Ap%2BO%2FnfC07SsLQIhAOKSB96c6I%2Bush6j1P4hTdTIYKRta3lZMF5Zo1tZXobAKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUqt28CEusLTiPiLsq3ANsxVexBqB3dczo0n98EO6M58rqYJFSSjv2wckFzGLdDfZcNvChBKabVd7c4hxM66gwSTvt9v5CmpCpfSEYtdcCU9KbfFt4crBowYRZDKwvGcp50K%2FEVYg9ACm5f9Cf3GnNsHR8AJOikx5pLrqJPqKxJaHlVf9QWCZIxfCK9Ct3GqZnppqnT627mwAObdToktXtvN2UG54D984WdLxADyqn5tEcnxLBnGx8I6ZbdS5ddO86F7U6%2BEtd1%2FBSHLw9yaEeYmFOllEUCGJbliR0XK9jpnOxbUylWZC%2FV2TvFyi%2BIxOr1TchWv2byuFEjTmFWuJmX%2BjCw3jZc91I9TqdyEWH1D0a64qcO4uOLc7dp0OXmgxYu8vCfzFoKWeDxNsE2xdEmUIbMmt4kJn4EPzXbcySVey1Yd12BOSh6QoUOa8izOgFmAV3kSCILSF1p2A34smFK%2FpOqHd9l9v8RaKqVb5wFaGxa5YbYJGAnvsHz1ocJzq8AehVTjqxV2Y8vy%2BFVcj20hpk2QiG5x2%2B3LIgX%2FAQdIhjNICpJM0%2FBAN2B2siCq%2FZXStUrchu9kVY7D8n7HC6%2BZD5cdJwn3Y8iYDlHtZxgspiULb2oUukgnaP%2Fbl851HQJmq1vp8hcVwT6DDYz76%2BBjqkAToX9MIofN7XB%2FlkzagHBZ5BxOQDqFhxZ2Wih%2FZ4WPR96XiK09CbM%2BHcV3FwUAFKITD7ogI8Op6xUpueBubAViwz9pSeKG%2BvHzOy4%2B9uZ%2BY3y1VLRh7K2FmHlyO9MhmDZC5lPJaqGNMmwafGgCZtAL3wzs9q1IG4WPFSebSiDZca7ZNV6NKhpXKUV1EnqU2qGhoD1NcFQNEZNRU7RJJXFKtFypP8&X-Amz-Signature=2acab2ac81e551b37ffb9a9adb14c7d491ed29d9f6e05018d8611a2a59afdb19&X-Amz-SignedHeaders=host&x-id=GetObject)
