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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667APN24PV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDLQLFeFFiELXMcB0lvUEjjKv2T4L9AJwAM1yTao%2FP3LQIhAIwR2e91bgtKduCYx2M3EMOxH0jqpCCV1n5VdZGUTOhCKv8DCGQQABoMNjM3NDIzMTgzODA1IgzWoVxzH4lC%2FEQtMM4q3ANO2qH%2BUP%2FVDFDJEX0F0v7lQ1h0OutPXHo8lYMXppPpLc0tG79Ijrg6OpAJYKLHyY%2BFCwKljHu1TSPXBFIS3TAL0ao5GrnefG7YAipH%2FjoyjQjgX6NGwUTXUn7EJsGOTxBqnBomyQ9qkcuHsOLHgZBzlcDzs848dshXSFKci8cnmSpuRghJEU1oyirEbYYX59xmjmHCZMhPIm3D%2BqD8ejUcnt8f76igCpFS%2FIZUF34FErIVW6mbDcPOkermk8EZWGgdRMRMMxfKGMMbRDKZfPyOpsEbci92jdxKyhuGM9qNjU7HoBVpklhp%2Bv0BuUIU9MjHNJ%2F6ZWdIz34EWAD1iEmywU1RvJoi95uZbgja%2FGk6ns5gm%2FXs59wQ9IhncSsPlqtObR7XUJT%2Fj5X7CzQpoihWptcVxObDFC3ogQyMBevbEo5nNb%2BzXzte0wBFFr4x2u3M1owYHo2IbIuBtmOsGYHgGFz3EcIhvtLz%2Bcvut6Qd0flncqdtXYCpwded77550TSJw4IaITbx%2BH0c8chox6slGu9ZXMkv915HUs9gtE7F7kF%2FQqRlNIdJIcjxG8kskCsQK%2FZUrKN4QMex4HOcxVoGf0mmEcwIS8ysBPBjMUEJFuf1V0V4Giq4z5paUTCd38HCBjqkAYghdq3PlaXrDxwzel1TAyhkPZNdV7OpjuiUQjP6uQFI9TM7x7teA5hjJa8%2B8UVP6wbXPWKmy4VRIv3IZN2NoLUuAN%2Bu50cuPCHaL0Ku%2B7z5dq0CMwTQg7k%2BGKi2D%2F4MzTDXdvkZHpOAhE4T2T37%2FWHpmgj6r7el8l9YPjuHhJnBc7amZ6%2FE%2F4Fmri%2BABQGJ4MROzvLilNA9zGnFiKYfEoPPCfi9&X-Amz-Signature=cde31d23b767ceb4feca7d51db7774b7ce8917c718ea20a961f6ab1b50dff1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667APN24PV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDLQLFeFFiELXMcB0lvUEjjKv2T4L9AJwAM1yTao%2FP3LQIhAIwR2e91bgtKduCYx2M3EMOxH0jqpCCV1n5VdZGUTOhCKv8DCGQQABoMNjM3NDIzMTgzODA1IgzWoVxzH4lC%2FEQtMM4q3ANO2qH%2BUP%2FVDFDJEX0F0v7lQ1h0OutPXHo8lYMXppPpLc0tG79Ijrg6OpAJYKLHyY%2BFCwKljHu1TSPXBFIS3TAL0ao5GrnefG7YAipH%2FjoyjQjgX6NGwUTXUn7EJsGOTxBqnBomyQ9qkcuHsOLHgZBzlcDzs848dshXSFKci8cnmSpuRghJEU1oyirEbYYX59xmjmHCZMhPIm3D%2BqD8ejUcnt8f76igCpFS%2FIZUF34FErIVW6mbDcPOkermk8EZWGgdRMRMMxfKGMMbRDKZfPyOpsEbci92jdxKyhuGM9qNjU7HoBVpklhp%2Bv0BuUIU9MjHNJ%2F6ZWdIz34EWAD1iEmywU1RvJoi95uZbgja%2FGk6ns5gm%2FXs59wQ9IhncSsPlqtObR7XUJT%2Fj5X7CzQpoihWptcVxObDFC3ogQyMBevbEo5nNb%2BzXzte0wBFFr4x2u3M1owYHo2IbIuBtmOsGYHgGFz3EcIhvtLz%2Bcvut6Qd0flncqdtXYCpwded77550TSJw4IaITbx%2BH0c8chox6slGu9ZXMkv915HUs9gtE7F7kF%2FQqRlNIdJIcjxG8kskCsQK%2FZUrKN4QMex4HOcxVoGf0mmEcwIS8ysBPBjMUEJFuf1V0V4Giq4z5paUTCd38HCBjqkAYghdq3PlaXrDxwzel1TAyhkPZNdV7OpjuiUQjP6uQFI9TM7x7teA5hjJa8%2B8UVP6wbXPWKmy4VRIv3IZN2NoLUuAN%2Bu50cuPCHaL0Ku%2B7z5dq0CMwTQg7k%2BGKi2D%2F4MzTDXdvkZHpOAhE4T2T37%2FWHpmgj6r7el8l9YPjuHhJnBc7amZ6%2FE%2F4Fmri%2BABQGJ4MROzvLilNA9zGnFiKYfEoPPCfi9&X-Amz-Signature=8bf17ef514a781368cc91622a944443027ac7bb98834ad1c733f808b7b3afe5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667APN24PV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDLQLFeFFiELXMcB0lvUEjjKv2T4L9AJwAM1yTao%2FP3LQIhAIwR2e91bgtKduCYx2M3EMOxH0jqpCCV1n5VdZGUTOhCKv8DCGQQABoMNjM3NDIzMTgzODA1IgzWoVxzH4lC%2FEQtMM4q3ANO2qH%2BUP%2FVDFDJEX0F0v7lQ1h0OutPXHo8lYMXppPpLc0tG79Ijrg6OpAJYKLHyY%2BFCwKljHu1TSPXBFIS3TAL0ao5GrnefG7YAipH%2FjoyjQjgX6NGwUTXUn7EJsGOTxBqnBomyQ9qkcuHsOLHgZBzlcDzs848dshXSFKci8cnmSpuRghJEU1oyirEbYYX59xmjmHCZMhPIm3D%2BqD8ejUcnt8f76igCpFS%2FIZUF34FErIVW6mbDcPOkermk8EZWGgdRMRMMxfKGMMbRDKZfPyOpsEbci92jdxKyhuGM9qNjU7HoBVpklhp%2Bv0BuUIU9MjHNJ%2F6ZWdIz34EWAD1iEmywU1RvJoi95uZbgja%2FGk6ns5gm%2FXs59wQ9IhncSsPlqtObR7XUJT%2Fj5X7CzQpoihWptcVxObDFC3ogQyMBevbEo5nNb%2BzXzte0wBFFr4x2u3M1owYHo2IbIuBtmOsGYHgGFz3EcIhvtLz%2Bcvut6Qd0flncqdtXYCpwded77550TSJw4IaITbx%2BH0c8chox6slGu9ZXMkv915HUs9gtE7F7kF%2FQqRlNIdJIcjxG8kskCsQK%2FZUrKN4QMex4HOcxVoGf0mmEcwIS8ysBPBjMUEJFuf1V0V4Giq4z5paUTCd38HCBjqkAYghdq3PlaXrDxwzel1TAyhkPZNdV7OpjuiUQjP6uQFI9TM7x7teA5hjJa8%2B8UVP6wbXPWKmy4VRIv3IZN2NoLUuAN%2Bu50cuPCHaL0Ku%2B7z5dq0CMwTQg7k%2BGKi2D%2F4MzTDXdvkZHpOAhE4T2T37%2FWHpmgj6r7el8l9YPjuHhJnBc7amZ6%2FE%2F4Fmri%2BABQGJ4MROzvLilNA9zGnFiKYfEoPPCfi9&X-Amz-Signature=9030ff0d0f6ce32bb839d5b1f64e4a7102a081cade9cff5ed45c7aaef5dc0123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667APN24PV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDLQLFeFFiELXMcB0lvUEjjKv2T4L9AJwAM1yTao%2FP3LQIhAIwR2e91bgtKduCYx2M3EMOxH0jqpCCV1n5VdZGUTOhCKv8DCGQQABoMNjM3NDIzMTgzODA1IgzWoVxzH4lC%2FEQtMM4q3ANO2qH%2BUP%2FVDFDJEX0F0v7lQ1h0OutPXHo8lYMXppPpLc0tG79Ijrg6OpAJYKLHyY%2BFCwKljHu1TSPXBFIS3TAL0ao5GrnefG7YAipH%2FjoyjQjgX6NGwUTXUn7EJsGOTxBqnBomyQ9qkcuHsOLHgZBzlcDzs848dshXSFKci8cnmSpuRghJEU1oyirEbYYX59xmjmHCZMhPIm3D%2BqD8ejUcnt8f76igCpFS%2FIZUF34FErIVW6mbDcPOkermk8EZWGgdRMRMMxfKGMMbRDKZfPyOpsEbci92jdxKyhuGM9qNjU7HoBVpklhp%2Bv0BuUIU9MjHNJ%2F6ZWdIz34EWAD1iEmywU1RvJoi95uZbgja%2FGk6ns5gm%2FXs59wQ9IhncSsPlqtObR7XUJT%2Fj5X7CzQpoihWptcVxObDFC3ogQyMBevbEo5nNb%2BzXzte0wBFFr4x2u3M1owYHo2IbIuBtmOsGYHgGFz3EcIhvtLz%2Bcvut6Qd0flncqdtXYCpwded77550TSJw4IaITbx%2BH0c8chox6slGu9ZXMkv915HUs9gtE7F7kF%2FQqRlNIdJIcjxG8kskCsQK%2FZUrKN4QMex4HOcxVoGf0mmEcwIS8ysBPBjMUEJFuf1V0V4Giq4z5paUTCd38HCBjqkAYghdq3PlaXrDxwzel1TAyhkPZNdV7OpjuiUQjP6uQFI9TM7x7teA5hjJa8%2B8UVP6wbXPWKmy4VRIv3IZN2NoLUuAN%2Bu50cuPCHaL0Ku%2B7z5dq0CMwTQg7k%2BGKi2D%2F4MzTDXdvkZHpOAhE4T2T37%2FWHpmgj6r7el8l9YPjuHhJnBc7amZ6%2FE%2F4Fmri%2BABQGJ4MROzvLilNA9zGnFiKYfEoPPCfi9&X-Amz-Signature=79b9e8da9d6555314f1c48ba0877b91927213982d78cb4fa3c6a413dfe12a1fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667APN24PV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDLQLFeFFiELXMcB0lvUEjjKv2T4L9AJwAM1yTao%2FP3LQIhAIwR2e91bgtKduCYx2M3EMOxH0jqpCCV1n5VdZGUTOhCKv8DCGQQABoMNjM3NDIzMTgzODA1IgzWoVxzH4lC%2FEQtMM4q3ANO2qH%2BUP%2FVDFDJEX0F0v7lQ1h0OutPXHo8lYMXppPpLc0tG79Ijrg6OpAJYKLHyY%2BFCwKljHu1TSPXBFIS3TAL0ao5GrnefG7YAipH%2FjoyjQjgX6NGwUTXUn7EJsGOTxBqnBomyQ9qkcuHsOLHgZBzlcDzs848dshXSFKci8cnmSpuRghJEU1oyirEbYYX59xmjmHCZMhPIm3D%2BqD8ejUcnt8f76igCpFS%2FIZUF34FErIVW6mbDcPOkermk8EZWGgdRMRMMxfKGMMbRDKZfPyOpsEbci92jdxKyhuGM9qNjU7HoBVpklhp%2Bv0BuUIU9MjHNJ%2F6ZWdIz34EWAD1iEmywU1RvJoi95uZbgja%2FGk6ns5gm%2FXs59wQ9IhncSsPlqtObR7XUJT%2Fj5X7CzQpoihWptcVxObDFC3ogQyMBevbEo5nNb%2BzXzte0wBFFr4x2u3M1owYHo2IbIuBtmOsGYHgGFz3EcIhvtLz%2Bcvut6Qd0flncqdtXYCpwded77550TSJw4IaITbx%2BH0c8chox6slGu9ZXMkv915HUs9gtE7F7kF%2FQqRlNIdJIcjxG8kskCsQK%2FZUrKN4QMex4HOcxVoGf0mmEcwIS8ysBPBjMUEJFuf1V0V4Giq4z5paUTCd38HCBjqkAYghdq3PlaXrDxwzel1TAyhkPZNdV7OpjuiUQjP6uQFI9TM7x7teA5hjJa8%2B8UVP6wbXPWKmy4VRIv3IZN2NoLUuAN%2Bu50cuPCHaL0Ku%2B7z5dq0CMwTQg7k%2BGKi2D%2F4MzTDXdvkZHpOAhE4T2T37%2FWHpmgj6r7el8l9YPjuHhJnBc7amZ6%2FE%2F4Fmri%2BABQGJ4MROzvLilNA9zGnFiKYfEoPPCfi9&X-Amz-Signature=ec729887fc78329e66b070e69ed8b69d0abc04c428ab155cc498a26055954970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667APN24PV%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T201009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDLQLFeFFiELXMcB0lvUEjjKv2T4L9AJwAM1yTao%2FP3LQIhAIwR2e91bgtKduCYx2M3EMOxH0jqpCCV1n5VdZGUTOhCKv8DCGQQABoMNjM3NDIzMTgzODA1IgzWoVxzH4lC%2FEQtMM4q3ANO2qH%2BUP%2FVDFDJEX0F0v7lQ1h0OutPXHo8lYMXppPpLc0tG79Ijrg6OpAJYKLHyY%2BFCwKljHu1TSPXBFIS3TAL0ao5GrnefG7YAipH%2FjoyjQjgX6NGwUTXUn7EJsGOTxBqnBomyQ9qkcuHsOLHgZBzlcDzs848dshXSFKci8cnmSpuRghJEU1oyirEbYYX59xmjmHCZMhPIm3D%2BqD8ejUcnt8f76igCpFS%2FIZUF34FErIVW6mbDcPOkermk8EZWGgdRMRMMxfKGMMbRDKZfPyOpsEbci92jdxKyhuGM9qNjU7HoBVpklhp%2Bv0BuUIU9MjHNJ%2F6ZWdIz34EWAD1iEmywU1RvJoi95uZbgja%2FGk6ns5gm%2FXs59wQ9IhncSsPlqtObR7XUJT%2Fj5X7CzQpoihWptcVxObDFC3ogQyMBevbEo5nNb%2BzXzte0wBFFr4x2u3M1owYHo2IbIuBtmOsGYHgGFz3EcIhvtLz%2Bcvut6Qd0flncqdtXYCpwded77550TSJw4IaITbx%2BH0c8chox6slGu9ZXMkv915HUs9gtE7F7kF%2FQqRlNIdJIcjxG8kskCsQK%2FZUrKN4QMex4HOcxVoGf0mmEcwIS8ysBPBjMUEJFuf1V0V4Giq4z5paUTCd38HCBjqkAYghdq3PlaXrDxwzel1TAyhkPZNdV7OpjuiUQjP6uQFI9TM7x7teA5hjJa8%2B8UVP6wbXPWKmy4VRIv3IZN2NoLUuAN%2Bu50cuPCHaL0Ku%2B7z5dq0CMwTQg7k%2BGKi2D%2F4MzTDXdvkZHpOAhE4T2T37%2FWHpmgj6r7el8l9YPjuHhJnBc7amZ6%2FE%2F4Fmri%2BABQGJ4MROzvLilNA9zGnFiKYfEoPPCfi9&X-Amz-Signature=0ea8d7cf578be7e7e337cad6dca1f2740f0002bfc8aea144ab014bc0b9cce118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
