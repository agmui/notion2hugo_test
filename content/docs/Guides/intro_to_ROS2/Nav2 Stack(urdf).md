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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAY33DGD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGILgDrJgsqmVoLUGt13CrJ7sJ%2FDVJdNYxmbigp%2FPy8wIhAMyO3OeX%2FuVbi1%2FjXU54UIBiGHlQeSECCSAz12xTIRlfKv8DCFgQABoMNjM3NDIzMTgzODA1IgyV4g%2BZSllDndebv6Qq3AM1WQzOl4lq0p1NL1BGzKfvqC8PtR6HPNgn5JtMyTyYLf68TKdRAO%2BtdTBdwQLiHd%2Fb%2FtOGtb4TRwTaF7wixECFcEGMUhaR6Ti6an9%2BiT8bz5WOjkB357TDaTK97ZXezvHGdlZTkg5QxdbAOZdZ3ldG4O5zOoH0Lz8bZKeiw6Pd8LoUs3fYHkzZro6S1s8H0D0VkIXH2I9oJrjv%2FJVMDCutAOxtcXdCfOj7o6SaIUmfx%2BOjTTelkMRHE0qkrZpFTxMQFLOPd%2Bg6dCUaubRvQn0chygehk0C7S1SsuNZFBY4TFNNmWCKJP2tfg5%2BP0Eaw7ZzRH8aV8ce1ewmg44PkA1HXUpvrtTuni2n9z4V1%2FwxEEC8KkEWfAOWpeJkUTJSu%2FmgJDdiJBXroE56Kf2Mg3EZ0MJLw7u9KxjxI7dzL0ZIcm4rcrGAlAShmalJlRpD2ih%2BSuKef9GA1FyfVrinzZSTWKJOmHlWx1P3xsIbwi902s5hBLHVadBgr7RkCRSpRcagxxke6uZeCRjp0DNKkmLe3MhxrYZL3poV8Gg%2BtyUBOC5oP7HI8r3cXlSoelS3HZBcuAzpjfZzvQvmnimmfVuFWfFr7cga0cRcB2Bnf%2BHrvlISuwqq5%2Fas%2FBuGvTDFtuS%2BBjqkAUe7WEkvq3Vt7oYRh7AXHTESgy2rmsKP7zPyfCDMkfdFU9FY8gggIpEv3iCuZBIpYEd7XAxKWEZIseJ8IN9Tvj3HlQwDVxdQtSw08YE2JtSmYWFKcEva%2Btbjpz6UvEGtqxs1V54XZgMRtvhwz6yfdJVfYHal9BnVJ2c%2BZ77DG7YUPwGtnC55Sgps2ux%2Fxb%2FcQ4jVAicmcLlgQMgDd4cPf6BCmW%2FK&X-Amz-Signature=d81d6508a06e141e933a1078b2975ec6a790a01a76452d75e227ed9154d46ce6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAY33DGD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGILgDrJgsqmVoLUGt13CrJ7sJ%2FDVJdNYxmbigp%2FPy8wIhAMyO3OeX%2FuVbi1%2FjXU54UIBiGHlQeSECCSAz12xTIRlfKv8DCFgQABoMNjM3NDIzMTgzODA1IgyV4g%2BZSllDndebv6Qq3AM1WQzOl4lq0p1NL1BGzKfvqC8PtR6HPNgn5JtMyTyYLf68TKdRAO%2BtdTBdwQLiHd%2Fb%2FtOGtb4TRwTaF7wixECFcEGMUhaR6Ti6an9%2BiT8bz5WOjkB357TDaTK97ZXezvHGdlZTkg5QxdbAOZdZ3ldG4O5zOoH0Lz8bZKeiw6Pd8LoUs3fYHkzZro6S1s8H0D0VkIXH2I9oJrjv%2FJVMDCutAOxtcXdCfOj7o6SaIUmfx%2BOjTTelkMRHE0qkrZpFTxMQFLOPd%2Bg6dCUaubRvQn0chygehk0C7S1SsuNZFBY4TFNNmWCKJP2tfg5%2BP0Eaw7ZzRH8aV8ce1ewmg44PkA1HXUpvrtTuni2n9z4V1%2FwxEEC8KkEWfAOWpeJkUTJSu%2FmgJDdiJBXroE56Kf2Mg3EZ0MJLw7u9KxjxI7dzL0ZIcm4rcrGAlAShmalJlRpD2ih%2BSuKef9GA1FyfVrinzZSTWKJOmHlWx1P3xsIbwi902s5hBLHVadBgr7RkCRSpRcagxxke6uZeCRjp0DNKkmLe3MhxrYZL3poV8Gg%2BtyUBOC5oP7HI8r3cXlSoelS3HZBcuAzpjfZzvQvmnimmfVuFWfFr7cga0cRcB2Bnf%2BHrvlISuwqq5%2Fas%2FBuGvTDFtuS%2BBjqkAUe7WEkvq3Vt7oYRh7AXHTESgy2rmsKP7zPyfCDMkfdFU9FY8gggIpEv3iCuZBIpYEd7XAxKWEZIseJ8IN9Tvj3HlQwDVxdQtSw08YE2JtSmYWFKcEva%2Btbjpz6UvEGtqxs1V54XZgMRtvhwz6yfdJVfYHal9BnVJ2c%2BZ77DG7YUPwGtnC55Sgps2ux%2Fxb%2FcQ4jVAicmcLlgQMgDd4cPf6BCmW%2FK&X-Amz-Signature=93eff82ae83e42bf184fafc8c6733ba33fa83c5d844bab5653bb9c7b247ba552&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAY33DGD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGILgDrJgsqmVoLUGt13CrJ7sJ%2FDVJdNYxmbigp%2FPy8wIhAMyO3OeX%2FuVbi1%2FjXU54UIBiGHlQeSECCSAz12xTIRlfKv8DCFgQABoMNjM3NDIzMTgzODA1IgyV4g%2BZSllDndebv6Qq3AM1WQzOl4lq0p1NL1BGzKfvqC8PtR6HPNgn5JtMyTyYLf68TKdRAO%2BtdTBdwQLiHd%2Fb%2FtOGtb4TRwTaF7wixECFcEGMUhaR6Ti6an9%2BiT8bz5WOjkB357TDaTK97ZXezvHGdlZTkg5QxdbAOZdZ3ldG4O5zOoH0Lz8bZKeiw6Pd8LoUs3fYHkzZro6S1s8H0D0VkIXH2I9oJrjv%2FJVMDCutAOxtcXdCfOj7o6SaIUmfx%2BOjTTelkMRHE0qkrZpFTxMQFLOPd%2Bg6dCUaubRvQn0chygehk0C7S1SsuNZFBY4TFNNmWCKJP2tfg5%2BP0Eaw7ZzRH8aV8ce1ewmg44PkA1HXUpvrtTuni2n9z4V1%2FwxEEC8KkEWfAOWpeJkUTJSu%2FmgJDdiJBXroE56Kf2Mg3EZ0MJLw7u9KxjxI7dzL0ZIcm4rcrGAlAShmalJlRpD2ih%2BSuKef9GA1FyfVrinzZSTWKJOmHlWx1P3xsIbwi902s5hBLHVadBgr7RkCRSpRcagxxke6uZeCRjp0DNKkmLe3MhxrYZL3poV8Gg%2BtyUBOC5oP7HI8r3cXlSoelS3HZBcuAzpjfZzvQvmnimmfVuFWfFr7cga0cRcB2Bnf%2BHrvlISuwqq5%2Fas%2FBuGvTDFtuS%2BBjqkAUe7WEkvq3Vt7oYRh7AXHTESgy2rmsKP7zPyfCDMkfdFU9FY8gggIpEv3iCuZBIpYEd7XAxKWEZIseJ8IN9Tvj3HlQwDVxdQtSw08YE2JtSmYWFKcEva%2Btbjpz6UvEGtqxs1V54XZgMRtvhwz6yfdJVfYHal9BnVJ2c%2BZ77DG7YUPwGtnC55Sgps2ux%2Fxb%2FcQ4jVAicmcLlgQMgDd4cPf6BCmW%2FK&X-Amz-Signature=4aaf44841f44738e4b52cea7476743347eb8cbaa81896d422a65f79e7ab7e796&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAY33DGD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGILgDrJgsqmVoLUGt13CrJ7sJ%2FDVJdNYxmbigp%2FPy8wIhAMyO3OeX%2FuVbi1%2FjXU54UIBiGHlQeSECCSAz12xTIRlfKv8DCFgQABoMNjM3NDIzMTgzODA1IgyV4g%2BZSllDndebv6Qq3AM1WQzOl4lq0p1NL1BGzKfvqC8PtR6HPNgn5JtMyTyYLf68TKdRAO%2BtdTBdwQLiHd%2Fb%2FtOGtb4TRwTaF7wixECFcEGMUhaR6Ti6an9%2BiT8bz5WOjkB357TDaTK97ZXezvHGdlZTkg5QxdbAOZdZ3ldG4O5zOoH0Lz8bZKeiw6Pd8LoUs3fYHkzZro6S1s8H0D0VkIXH2I9oJrjv%2FJVMDCutAOxtcXdCfOj7o6SaIUmfx%2BOjTTelkMRHE0qkrZpFTxMQFLOPd%2Bg6dCUaubRvQn0chygehk0C7S1SsuNZFBY4TFNNmWCKJP2tfg5%2BP0Eaw7ZzRH8aV8ce1ewmg44PkA1HXUpvrtTuni2n9z4V1%2FwxEEC8KkEWfAOWpeJkUTJSu%2FmgJDdiJBXroE56Kf2Mg3EZ0MJLw7u9KxjxI7dzL0ZIcm4rcrGAlAShmalJlRpD2ih%2BSuKef9GA1FyfVrinzZSTWKJOmHlWx1P3xsIbwi902s5hBLHVadBgr7RkCRSpRcagxxke6uZeCRjp0DNKkmLe3MhxrYZL3poV8Gg%2BtyUBOC5oP7HI8r3cXlSoelS3HZBcuAzpjfZzvQvmnimmfVuFWfFr7cga0cRcB2Bnf%2BHrvlISuwqq5%2Fas%2FBuGvTDFtuS%2BBjqkAUe7WEkvq3Vt7oYRh7AXHTESgy2rmsKP7zPyfCDMkfdFU9FY8gggIpEv3iCuZBIpYEd7XAxKWEZIseJ8IN9Tvj3HlQwDVxdQtSw08YE2JtSmYWFKcEva%2Btbjpz6UvEGtqxs1V54XZgMRtvhwz6yfdJVfYHal9BnVJ2c%2BZ77DG7YUPwGtnC55Sgps2ux%2Fxb%2FcQ4jVAicmcLlgQMgDd4cPf6BCmW%2FK&X-Amz-Signature=2bc4b1408084fefd05d4d6df5155816262eeb5071cfa2d02e7095e25065da27f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAY33DGD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGILgDrJgsqmVoLUGt13CrJ7sJ%2FDVJdNYxmbigp%2FPy8wIhAMyO3OeX%2FuVbi1%2FjXU54UIBiGHlQeSECCSAz12xTIRlfKv8DCFgQABoMNjM3NDIzMTgzODA1IgyV4g%2BZSllDndebv6Qq3AM1WQzOl4lq0p1NL1BGzKfvqC8PtR6HPNgn5JtMyTyYLf68TKdRAO%2BtdTBdwQLiHd%2Fb%2FtOGtb4TRwTaF7wixECFcEGMUhaR6Ti6an9%2BiT8bz5WOjkB357TDaTK97ZXezvHGdlZTkg5QxdbAOZdZ3ldG4O5zOoH0Lz8bZKeiw6Pd8LoUs3fYHkzZro6S1s8H0D0VkIXH2I9oJrjv%2FJVMDCutAOxtcXdCfOj7o6SaIUmfx%2BOjTTelkMRHE0qkrZpFTxMQFLOPd%2Bg6dCUaubRvQn0chygehk0C7S1SsuNZFBY4TFNNmWCKJP2tfg5%2BP0Eaw7ZzRH8aV8ce1ewmg44PkA1HXUpvrtTuni2n9z4V1%2FwxEEC8KkEWfAOWpeJkUTJSu%2FmgJDdiJBXroE56Kf2Mg3EZ0MJLw7u9KxjxI7dzL0ZIcm4rcrGAlAShmalJlRpD2ih%2BSuKef9GA1FyfVrinzZSTWKJOmHlWx1P3xsIbwi902s5hBLHVadBgr7RkCRSpRcagxxke6uZeCRjp0DNKkmLe3MhxrYZL3poV8Gg%2BtyUBOC5oP7HI8r3cXlSoelS3HZBcuAzpjfZzvQvmnimmfVuFWfFr7cga0cRcB2Bnf%2BHrvlISuwqq5%2Fas%2FBuGvTDFtuS%2BBjqkAUe7WEkvq3Vt7oYRh7AXHTESgy2rmsKP7zPyfCDMkfdFU9FY8gggIpEv3iCuZBIpYEd7XAxKWEZIseJ8IN9Tvj3HlQwDVxdQtSw08YE2JtSmYWFKcEva%2Btbjpz6UvEGtqxs1V54XZgMRtvhwz6yfdJVfYHal9BnVJ2c%2BZ77DG7YUPwGtnC55Sgps2ux%2Fxb%2FcQ4jVAicmcLlgQMgDd4cPf6BCmW%2FK&X-Amz-Signature=452ab3775a113ac8839293690577392e9a4a1182438ea36dee46c7ff8692625e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAY33DGD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T081124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGILgDrJgsqmVoLUGt13CrJ7sJ%2FDVJdNYxmbigp%2FPy8wIhAMyO3OeX%2FuVbi1%2FjXU54UIBiGHlQeSECCSAz12xTIRlfKv8DCFgQABoMNjM3NDIzMTgzODA1IgyV4g%2BZSllDndebv6Qq3AM1WQzOl4lq0p1NL1BGzKfvqC8PtR6HPNgn5JtMyTyYLf68TKdRAO%2BtdTBdwQLiHd%2Fb%2FtOGtb4TRwTaF7wixECFcEGMUhaR6Ti6an9%2BiT8bz5WOjkB357TDaTK97ZXezvHGdlZTkg5QxdbAOZdZ3ldG4O5zOoH0Lz8bZKeiw6Pd8LoUs3fYHkzZro6S1s8H0D0VkIXH2I9oJrjv%2FJVMDCutAOxtcXdCfOj7o6SaIUmfx%2BOjTTelkMRHE0qkrZpFTxMQFLOPd%2Bg6dCUaubRvQn0chygehk0C7S1SsuNZFBY4TFNNmWCKJP2tfg5%2BP0Eaw7ZzRH8aV8ce1ewmg44PkA1HXUpvrtTuni2n9z4V1%2FwxEEC8KkEWfAOWpeJkUTJSu%2FmgJDdiJBXroE56Kf2Mg3EZ0MJLw7u9KxjxI7dzL0ZIcm4rcrGAlAShmalJlRpD2ih%2BSuKef9GA1FyfVrinzZSTWKJOmHlWx1P3xsIbwi902s5hBLHVadBgr7RkCRSpRcagxxke6uZeCRjp0DNKkmLe3MhxrYZL3poV8Gg%2BtyUBOC5oP7HI8r3cXlSoelS3HZBcuAzpjfZzvQvmnimmfVuFWfFr7cga0cRcB2Bnf%2BHrvlISuwqq5%2Fas%2FBuGvTDFtuS%2BBjqkAUe7WEkvq3Vt7oYRh7AXHTESgy2rmsKP7zPyfCDMkfdFU9FY8gggIpEv3iCuZBIpYEd7XAxKWEZIseJ8IN9Tvj3HlQwDVxdQtSw08YE2JtSmYWFKcEva%2Btbjpz6UvEGtqxs1V54XZgMRtvhwz6yfdJVfYHal9BnVJ2c%2BZ77DG7YUPwGtnC55Sgps2ux%2Fxb%2FcQ4jVAicmcLlgQMgDd4cPf6BCmW%2FK&X-Amz-Signature=85f232719f227695d2f6fd3aa997d77e1d6622f5a6862dcf1c07566b61eb666e&X-Amz-SignedHeaders=host&x-id=GetObject)
