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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHY2SW7S%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiWvhtnhyhovILybRw38niAjAT%2BRZriICuI0XuKXRBqwIhANaY5dAshAOZku1U9RkLhw4F3VMucdhs3eNeawq6q8PEKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze91SPKItXiaJJHUYq3AM1lFHGtRejk4h83jt4cWeyBa5HEcHFBjw10Uj188AZhM8kcFmwPaIO0euK87FnLf%2Fotxxmcx5w7qAgqe%2FjkVmCUFrkMlH9UEPYZE4QWlqtEQ8XGp66paCfDgXtE31tMRsLqNaqc60UFXiqOqIGbUHf6UefnvUr7ElMTL1I1dK4zp9uXxFRPVWnGHOonEE6Pgk84pc4jrKdoztAZ0Rgt0csRGniiDeOmhUO2R8n3H%2F%2Fo4dgcYQ0LpCaRK3SML0mKrM9joowh%2FSdozBdfL2pjcp0FU0xDi4ngTm9Gz3i0Vgj%2FFUQMUzVaCV9r%2BFfBHII5iXhQxmU0wqqXE6J22%2BZMitUwuHoYcVCkouBMrrJd4Hp0YGdgb1LEU1ds15FE3twUjuDfGuhgVzwyYNDGx84oPBjAffWajvk0SpSEoq28t%2BkkEk%2FQJgrJUTRlFJ5O2D%2FAojDRhgKe3I5TppVtPygSPgCD6rEeRmu0nHOuz5qWe0bj4k0vqc7bzkawNowWC%2FbG1elhtH7Q2LD8hqwwoARI4%2BmYQsvtw4dCLJ9byxLCzNKpLhojIPs7DGPKjPPP9dVGH3MPBU%2FzgsuAiTDhX%2FK7lHedwiVmyy0GG1imPN9LmEDhGgA4EXubRZAwEog4DC2r%2F3ABjqkAdqjo3C3uuYI08ZKNVT0vNwnNIobaGpO139dBFYtYstQyLxwwWrsyrtm1rAXjX5HtFN7NdQF8yRsy3BcPh8jnx3xEKRKfcPGHsnOXJ8VzNzbi0vGfus5WB8w9QSVhCEDVu0OQUnrvYikW6KoKzQTsFdojRImMbiTUyfP3pNh8CXyDa%2BZY%2B2UjaoVlQIeNZgQetWAzPzZIpsCzzCyJuH1Sp7fQ8s2&X-Amz-Signature=a390cda2a09c732e9c3a2b5fb5d272f938d96a842f6487c1e689f80656e62dc8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHY2SW7S%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiWvhtnhyhovILybRw38niAjAT%2BRZriICuI0XuKXRBqwIhANaY5dAshAOZku1U9RkLhw4F3VMucdhs3eNeawq6q8PEKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze91SPKItXiaJJHUYq3AM1lFHGtRejk4h83jt4cWeyBa5HEcHFBjw10Uj188AZhM8kcFmwPaIO0euK87FnLf%2Fotxxmcx5w7qAgqe%2FjkVmCUFrkMlH9UEPYZE4QWlqtEQ8XGp66paCfDgXtE31tMRsLqNaqc60UFXiqOqIGbUHf6UefnvUr7ElMTL1I1dK4zp9uXxFRPVWnGHOonEE6Pgk84pc4jrKdoztAZ0Rgt0csRGniiDeOmhUO2R8n3H%2F%2Fo4dgcYQ0LpCaRK3SML0mKrM9joowh%2FSdozBdfL2pjcp0FU0xDi4ngTm9Gz3i0Vgj%2FFUQMUzVaCV9r%2BFfBHII5iXhQxmU0wqqXE6J22%2BZMitUwuHoYcVCkouBMrrJd4Hp0YGdgb1LEU1ds15FE3twUjuDfGuhgVzwyYNDGx84oPBjAffWajvk0SpSEoq28t%2BkkEk%2FQJgrJUTRlFJ5O2D%2FAojDRhgKe3I5TppVtPygSPgCD6rEeRmu0nHOuz5qWe0bj4k0vqc7bzkawNowWC%2FbG1elhtH7Q2LD8hqwwoARI4%2BmYQsvtw4dCLJ9byxLCzNKpLhojIPs7DGPKjPPP9dVGH3MPBU%2FzgsuAiTDhX%2FK7lHedwiVmyy0GG1imPN9LmEDhGgA4EXubRZAwEog4DC2r%2F3ABjqkAdqjo3C3uuYI08ZKNVT0vNwnNIobaGpO139dBFYtYstQyLxwwWrsyrtm1rAXjX5HtFN7NdQF8yRsy3BcPh8jnx3xEKRKfcPGHsnOXJ8VzNzbi0vGfus5WB8w9QSVhCEDVu0OQUnrvYikW6KoKzQTsFdojRImMbiTUyfP3pNh8CXyDa%2BZY%2B2UjaoVlQIeNZgQetWAzPzZIpsCzzCyJuH1Sp7fQ8s2&X-Amz-Signature=38241d04c490543ad9526159b578ad9e51e181d40e6232c9672ae273ffc9beaf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHY2SW7S%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiWvhtnhyhovILybRw38niAjAT%2BRZriICuI0XuKXRBqwIhANaY5dAshAOZku1U9RkLhw4F3VMucdhs3eNeawq6q8PEKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze91SPKItXiaJJHUYq3AM1lFHGtRejk4h83jt4cWeyBa5HEcHFBjw10Uj188AZhM8kcFmwPaIO0euK87FnLf%2Fotxxmcx5w7qAgqe%2FjkVmCUFrkMlH9UEPYZE4QWlqtEQ8XGp66paCfDgXtE31tMRsLqNaqc60UFXiqOqIGbUHf6UefnvUr7ElMTL1I1dK4zp9uXxFRPVWnGHOonEE6Pgk84pc4jrKdoztAZ0Rgt0csRGniiDeOmhUO2R8n3H%2F%2Fo4dgcYQ0LpCaRK3SML0mKrM9joowh%2FSdozBdfL2pjcp0FU0xDi4ngTm9Gz3i0Vgj%2FFUQMUzVaCV9r%2BFfBHII5iXhQxmU0wqqXE6J22%2BZMitUwuHoYcVCkouBMrrJd4Hp0YGdgb1LEU1ds15FE3twUjuDfGuhgVzwyYNDGx84oPBjAffWajvk0SpSEoq28t%2BkkEk%2FQJgrJUTRlFJ5O2D%2FAojDRhgKe3I5TppVtPygSPgCD6rEeRmu0nHOuz5qWe0bj4k0vqc7bzkawNowWC%2FbG1elhtH7Q2LD8hqwwoARI4%2BmYQsvtw4dCLJ9byxLCzNKpLhojIPs7DGPKjPPP9dVGH3MPBU%2FzgsuAiTDhX%2FK7lHedwiVmyy0GG1imPN9LmEDhGgA4EXubRZAwEog4DC2r%2F3ABjqkAdqjo3C3uuYI08ZKNVT0vNwnNIobaGpO139dBFYtYstQyLxwwWrsyrtm1rAXjX5HtFN7NdQF8yRsy3BcPh8jnx3xEKRKfcPGHsnOXJ8VzNzbi0vGfus5WB8w9QSVhCEDVu0OQUnrvYikW6KoKzQTsFdojRImMbiTUyfP3pNh8CXyDa%2BZY%2B2UjaoVlQIeNZgQetWAzPzZIpsCzzCyJuH1Sp7fQ8s2&X-Amz-Signature=e12afbaa5b8641f4a61c626a981e4c252f0e74c0b0988d554d13ff2f9098fa9f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHY2SW7S%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiWvhtnhyhovILybRw38niAjAT%2BRZriICuI0XuKXRBqwIhANaY5dAshAOZku1U9RkLhw4F3VMucdhs3eNeawq6q8PEKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze91SPKItXiaJJHUYq3AM1lFHGtRejk4h83jt4cWeyBa5HEcHFBjw10Uj188AZhM8kcFmwPaIO0euK87FnLf%2Fotxxmcx5w7qAgqe%2FjkVmCUFrkMlH9UEPYZE4QWlqtEQ8XGp66paCfDgXtE31tMRsLqNaqc60UFXiqOqIGbUHf6UefnvUr7ElMTL1I1dK4zp9uXxFRPVWnGHOonEE6Pgk84pc4jrKdoztAZ0Rgt0csRGniiDeOmhUO2R8n3H%2F%2Fo4dgcYQ0LpCaRK3SML0mKrM9joowh%2FSdozBdfL2pjcp0FU0xDi4ngTm9Gz3i0Vgj%2FFUQMUzVaCV9r%2BFfBHII5iXhQxmU0wqqXE6J22%2BZMitUwuHoYcVCkouBMrrJd4Hp0YGdgb1LEU1ds15FE3twUjuDfGuhgVzwyYNDGx84oPBjAffWajvk0SpSEoq28t%2BkkEk%2FQJgrJUTRlFJ5O2D%2FAojDRhgKe3I5TppVtPygSPgCD6rEeRmu0nHOuz5qWe0bj4k0vqc7bzkawNowWC%2FbG1elhtH7Q2LD8hqwwoARI4%2BmYQsvtw4dCLJ9byxLCzNKpLhojIPs7DGPKjPPP9dVGH3MPBU%2FzgsuAiTDhX%2FK7lHedwiVmyy0GG1imPN9LmEDhGgA4EXubRZAwEog4DC2r%2F3ABjqkAdqjo3C3uuYI08ZKNVT0vNwnNIobaGpO139dBFYtYstQyLxwwWrsyrtm1rAXjX5HtFN7NdQF8yRsy3BcPh8jnx3xEKRKfcPGHsnOXJ8VzNzbi0vGfus5WB8w9QSVhCEDVu0OQUnrvYikW6KoKzQTsFdojRImMbiTUyfP3pNh8CXyDa%2BZY%2B2UjaoVlQIeNZgQetWAzPzZIpsCzzCyJuH1Sp7fQ8s2&X-Amz-Signature=06b93f66fd2b1a41d153720abf27a4f5f8ffc080992d671c05ec6f98074d8945&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHY2SW7S%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiWvhtnhyhovILybRw38niAjAT%2BRZriICuI0XuKXRBqwIhANaY5dAshAOZku1U9RkLhw4F3VMucdhs3eNeawq6q8PEKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze91SPKItXiaJJHUYq3AM1lFHGtRejk4h83jt4cWeyBa5HEcHFBjw10Uj188AZhM8kcFmwPaIO0euK87FnLf%2Fotxxmcx5w7qAgqe%2FjkVmCUFrkMlH9UEPYZE4QWlqtEQ8XGp66paCfDgXtE31tMRsLqNaqc60UFXiqOqIGbUHf6UefnvUr7ElMTL1I1dK4zp9uXxFRPVWnGHOonEE6Pgk84pc4jrKdoztAZ0Rgt0csRGniiDeOmhUO2R8n3H%2F%2Fo4dgcYQ0LpCaRK3SML0mKrM9joowh%2FSdozBdfL2pjcp0FU0xDi4ngTm9Gz3i0Vgj%2FFUQMUzVaCV9r%2BFfBHII5iXhQxmU0wqqXE6J22%2BZMitUwuHoYcVCkouBMrrJd4Hp0YGdgb1LEU1ds15FE3twUjuDfGuhgVzwyYNDGx84oPBjAffWajvk0SpSEoq28t%2BkkEk%2FQJgrJUTRlFJ5O2D%2FAojDRhgKe3I5TppVtPygSPgCD6rEeRmu0nHOuz5qWe0bj4k0vqc7bzkawNowWC%2FbG1elhtH7Q2LD8hqwwoARI4%2BmYQsvtw4dCLJ9byxLCzNKpLhojIPs7DGPKjPPP9dVGH3MPBU%2FzgsuAiTDhX%2FK7lHedwiVmyy0GG1imPN9LmEDhGgA4EXubRZAwEog4DC2r%2F3ABjqkAdqjo3C3uuYI08ZKNVT0vNwnNIobaGpO139dBFYtYstQyLxwwWrsyrtm1rAXjX5HtFN7NdQF8yRsy3BcPh8jnx3xEKRKfcPGHsnOXJ8VzNzbi0vGfus5WB8w9QSVhCEDVu0OQUnrvYikW6KoKzQTsFdojRImMbiTUyfP3pNh8CXyDa%2BZY%2B2UjaoVlQIeNZgQetWAzPzZIpsCzzCyJuH1Sp7fQ8s2&X-Amz-Signature=4c8e8efc91e2f50349ec3cf6c707fb633a1a2dff8fb32dfd73a4ed04c89fc1d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHY2SW7S%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T150736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiWvhtnhyhovILybRw38niAjAT%2BRZriICuI0XuKXRBqwIhANaY5dAshAOZku1U9RkLhw4F3VMucdhs3eNeawq6q8PEKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igze91SPKItXiaJJHUYq3AM1lFHGtRejk4h83jt4cWeyBa5HEcHFBjw10Uj188AZhM8kcFmwPaIO0euK87FnLf%2Fotxxmcx5w7qAgqe%2FjkVmCUFrkMlH9UEPYZE4QWlqtEQ8XGp66paCfDgXtE31tMRsLqNaqc60UFXiqOqIGbUHf6UefnvUr7ElMTL1I1dK4zp9uXxFRPVWnGHOonEE6Pgk84pc4jrKdoztAZ0Rgt0csRGniiDeOmhUO2R8n3H%2F%2Fo4dgcYQ0LpCaRK3SML0mKrM9joowh%2FSdozBdfL2pjcp0FU0xDi4ngTm9Gz3i0Vgj%2FFUQMUzVaCV9r%2BFfBHII5iXhQxmU0wqqXE6J22%2BZMitUwuHoYcVCkouBMrrJd4Hp0YGdgb1LEU1ds15FE3twUjuDfGuhgVzwyYNDGx84oPBjAffWajvk0SpSEoq28t%2BkkEk%2FQJgrJUTRlFJ5O2D%2FAojDRhgKe3I5TppVtPygSPgCD6rEeRmu0nHOuz5qWe0bj4k0vqc7bzkawNowWC%2FbG1elhtH7Q2LD8hqwwoARI4%2BmYQsvtw4dCLJ9byxLCzNKpLhojIPs7DGPKjPPP9dVGH3MPBU%2FzgsuAiTDhX%2FK7lHedwiVmyy0GG1imPN9LmEDhGgA4EXubRZAwEog4DC2r%2F3ABjqkAdqjo3C3uuYI08ZKNVT0vNwnNIobaGpO139dBFYtYstQyLxwwWrsyrtm1rAXjX5HtFN7NdQF8yRsy3BcPh8jnx3xEKRKfcPGHsnOXJ8VzNzbi0vGfus5WB8w9QSVhCEDVu0OQUnrvYikW6KoKzQTsFdojRImMbiTUyfP3pNh8CXyDa%2BZY%2B2UjaoVlQIeNZgQetWAzPzZIpsCzzCyJuH1Sp7fQ8s2&X-Amz-Signature=0d32c6b5ca08fb917b808c5c6005f2a8d1348f4b40c005c194f27b1c5775d1a9&X-Amz-SignedHeaders=host&x-id=GetObject)
