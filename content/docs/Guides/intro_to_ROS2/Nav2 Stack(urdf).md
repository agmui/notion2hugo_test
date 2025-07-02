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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLEIXMN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGry8qigydi0%2FOvefmuNGdxbNNa2YXHXFVErsg8E%2Fp37AiARx6EHRtC12LlLv6GncCmkTfC4ujgrlqEhQ4VEXhBuxyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWa3o9uTuwSX2MMPKtwD141X5p9N0%2BLXeaotiSJW%2B2S0WgUH0UCQLzHoO9LabZIYy5cZAsS3TDQdcQj7PmIHe8lCtSUPHzAujv9KvY02e2rd7DYnm95jSYlTvA%2FgbRZLNgcGTqiXoRjx%2FpuaXd7yj83siJOdaSIM6ezVYMCiEeaq7vqECfuPMOKGRbWP662kMAGCyYtiM7swbfbatnA23RyNEBhdKiAm63H6pYqpxcaxxd0aoJ%2FfAY9Y6DtwStyUxPCepVoljDpqkETidg%2FdQBoYpps28C2ByvfMfE6Wdqaeru2qwGHUJCmuXY3KrIcCAdgU13qumhQWc4UM1q%2B2ZaN8Rz7E7yK1mOZGsQK2fxDJWKTo1hHoL%2FIdAupo%2FDi5EKCgR6kTcSqLN9J%2BD33MuJCkh4GR9MSEm3sFUECgd4oYPJMutqqS9hnJpKRZ8pQBxkip0WB2yB3Y25wU%2FhX92IBgpGt0S58jwrFUkSPZ25NpUONLc1wPFbSOulLa%2Fpn4JRNE%2FsWdCRLpXlTPYWTlg5yn3UEsFVHsLtoeAbvG3Id%2BpR6XiP%2FDuh%2F%2FN00BBvUJ3hStTh4rGqiWpJUwYG4y1fuTidqst3p2CM6N2hBE3aZRcYf7SHYcyo1USZ8Z%2FzuLXfTmFYYH7Bl84KgwleaUwwY6pgFofZfLBA9QFMuhXZ8MZsZFFJYwj8QYlEZdb%2BqzPl%2FbeLzsUMfGFJJ89IrZrHoncJAet5bmCpfO38jty7XYSbRlNbDsoNEjBFqXFFmIWMrgQEkEo%2FBOTp15pi0u5jcuuYY3MNJybVpimkBW7B3qXb6ZaMEGDNyP5JcPNpeLOlLOzUgM926mm91zhAkwMyr227ICYEqUZkaYjM5HywIMFVlUwPUSgsg%2B&X-Amz-Signature=07bba27edada6a82040d1c21418813036f2c8505e6bd22ab92c117b17231c8a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLEIXMN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGry8qigydi0%2FOvefmuNGdxbNNa2YXHXFVErsg8E%2Fp37AiARx6EHRtC12LlLv6GncCmkTfC4ujgrlqEhQ4VEXhBuxyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWa3o9uTuwSX2MMPKtwD141X5p9N0%2BLXeaotiSJW%2B2S0WgUH0UCQLzHoO9LabZIYy5cZAsS3TDQdcQj7PmIHe8lCtSUPHzAujv9KvY02e2rd7DYnm95jSYlTvA%2FgbRZLNgcGTqiXoRjx%2FpuaXd7yj83siJOdaSIM6ezVYMCiEeaq7vqECfuPMOKGRbWP662kMAGCyYtiM7swbfbatnA23RyNEBhdKiAm63H6pYqpxcaxxd0aoJ%2FfAY9Y6DtwStyUxPCepVoljDpqkETidg%2FdQBoYpps28C2ByvfMfE6Wdqaeru2qwGHUJCmuXY3KrIcCAdgU13qumhQWc4UM1q%2B2ZaN8Rz7E7yK1mOZGsQK2fxDJWKTo1hHoL%2FIdAupo%2FDi5EKCgR6kTcSqLN9J%2BD33MuJCkh4GR9MSEm3sFUECgd4oYPJMutqqS9hnJpKRZ8pQBxkip0WB2yB3Y25wU%2FhX92IBgpGt0S58jwrFUkSPZ25NpUONLc1wPFbSOulLa%2Fpn4JRNE%2FsWdCRLpXlTPYWTlg5yn3UEsFVHsLtoeAbvG3Id%2BpR6XiP%2FDuh%2F%2FN00BBvUJ3hStTh4rGqiWpJUwYG4y1fuTidqst3p2CM6N2hBE3aZRcYf7SHYcyo1USZ8Z%2FzuLXfTmFYYH7Bl84KgwleaUwwY6pgFofZfLBA9QFMuhXZ8MZsZFFJYwj8QYlEZdb%2BqzPl%2FbeLzsUMfGFJJ89IrZrHoncJAet5bmCpfO38jty7XYSbRlNbDsoNEjBFqXFFmIWMrgQEkEo%2FBOTp15pi0u5jcuuYY3MNJybVpimkBW7B3qXb6ZaMEGDNyP5JcPNpeLOlLOzUgM926mm91zhAkwMyr227ICYEqUZkaYjM5HywIMFVlUwPUSgsg%2B&X-Amz-Signature=5923f913e83c5f9c9f52229a7f3ae5e5d87f17acbf5021243d08dbc8becbcaf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLEIXMN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGry8qigydi0%2FOvefmuNGdxbNNa2YXHXFVErsg8E%2Fp37AiARx6EHRtC12LlLv6GncCmkTfC4ujgrlqEhQ4VEXhBuxyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWa3o9uTuwSX2MMPKtwD141X5p9N0%2BLXeaotiSJW%2B2S0WgUH0UCQLzHoO9LabZIYy5cZAsS3TDQdcQj7PmIHe8lCtSUPHzAujv9KvY02e2rd7DYnm95jSYlTvA%2FgbRZLNgcGTqiXoRjx%2FpuaXd7yj83siJOdaSIM6ezVYMCiEeaq7vqECfuPMOKGRbWP662kMAGCyYtiM7swbfbatnA23RyNEBhdKiAm63H6pYqpxcaxxd0aoJ%2FfAY9Y6DtwStyUxPCepVoljDpqkETidg%2FdQBoYpps28C2ByvfMfE6Wdqaeru2qwGHUJCmuXY3KrIcCAdgU13qumhQWc4UM1q%2B2ZaN8Rz7E7yK1mOZGsQK2fxDJWKTo1hHoL%2FIdAupo%2FDi5EKCgR6kTcSqLN9J%2BD33MuJCkh4GR9MSEm3sFUECgd4oYPJMutqqS9hnJpKRZ8pQBxkip0WB2yB3Y25wU%2FhX92IBgpGt0S58jwrFUkSPZ25NpUONLc1wPFbSOulLa%2Fpn4JRNE%2FsWdCRLpXlTPYWTlg5yn3UEsFVHsLtoeAbvG3Id%2BpR6XiP%2FDuh%2F%2FN00BBvUJ3hStTh4rGqiWpJUwYG4y1fuTidqst3p2CM6N2hBE3aZRcYf7SHYcyo1USZ8Z%2FzuLXfTmFYYH7Bl84KgwleaUwwY6pgFofZfLBA9QFMuhXZ8MZsZFFJYwj8QYlEZdb%2BqzPl%2FbeLzsUMfGFJJ89IrZrHoncJAet5bmCpfO38jty7XYSbRlNbDsoNEjBFqXFFmIWMrgQEkEo%2FBOTp15pi0u5jcuuYY3MNJybVpimkBW7B3qXb6ZaMEGDNyP5JcPNpeLOlLOzUgM926mm91zhAkwMyr227ICYEqUZkaYjM5HywIMFVlUwPUSgsg%2B&X-Amz-Signature=d9de325843d565fbaa79e1e06940fb513d9fdb37fa422ed394f85885c78e12e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLEIXMN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGry8qigydi0%2FOvefmuNGdxbNNa2YXHXFVErsg8E%2Fp37AiARx6EHRtC12LlLv6GncCmkTfC4ujgrlqEhQ4VEXhBuxyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWa3o9uTuwSX2MMPKtwD141X5p9N0%2BLXeaotiSJW%2B2S0WgUH0UCQLzHoO9LabZIYy5cZAsS3TDQdcQj7PmIHe8lCtSUPHzAujv9KvY02e2rd7DYnm95jSYlTvA%2FgbRZLNgcGTqiXoRjx%2FpuaXd7yj83siJOdaSIM6ezVYMCiEeaq7vqECfuPMOKGRbWP662kMAGCyYtiM7swbfbatnA23RyNEBhdKiAm63H6pYqpxcaxxd0aoJ%2FfAY9Y6DtwStyUxPCepVoljDpqkETidg%2FdQBoYpps28C2ByvfMfE6Wdqaeru2qwGHUJCmuXY3KrIcCAdgU13qumhQWc4UM1q%2B2ZaN8Rz7E7yK1mOZGsQK2fxDJWKTo1hHoL%2FIdAupo%2FDi5EKCgR6kTcSqLN9J%2BD33MuJCkh4GR9MSEm3sFUECgd4oYPJMutqqS9hnJpKRZ8pQBxkip0WB2yB3Y25wU%2FhX92IBgpGt0S58jwrFUkSPZ25NpUONLc1wPFbSOulLa%2Fpn4JRNE%2FsWdCRLpXlTPYWTlg5yn3UEsFVHsLtoeAbvG3Id%2BpR6XiP%2FDuh%2F%2FN00BBvUJ3hStTh4rGqiWpJUwYG4y1fuTidqst3p2CM6N2hBE3aZRcYf7SHYcyo1USZ8Z%2FzuLXfTmFYYH7Bl84KgwleaUwwY6pgFofZfLBA9QFMuhXZ8MZsZFFJYwj8QYlEZdb%2BqzPl%2FbeLzsUMfGFJJ89IrZrHoncJAet5bmCpfO38jty7XYSbRlNbDsoNEjBFqXFFmIWMrgQEkEo%2FBOTp15pi0u5jcuuYY3MNJybVpimkBW7B3qXb6ZaMEGDNyP5JcPNpeLOlLOzUgM926mm91zhAkwMyr227ICYEqUZkaYjM5HywIMFVlUwPUSgsg%2B&X-Amz-Signature=60441c35af817540bf8ab9b9e6240535f9feff13e0a09ad105c76850cc0a2af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLEIXMN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGry8qigydi0%2FOvefmuNGdxbNNa2YXHXFVErsg8E%2Fp37AiARx6EHRtC12LlLv6GncCmkTfC4ujgrlqEhQ4VEXhBuxyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWa3o9uTuwSX2MMPKtwD141X5p9N0%2BLXeaotiSJW%2B2S0WgUH0UCQLzHoO9LabZIYy5cZAsS3TDQdcQj7PmIHe8lCtSUPHzAujv9KvY02e2rd7DYnm95jSYlTvA%2FgbRZLNgcGTqiXoRjx%2FpuaXd7yj83siJOdaSIM6ezVYMCiEeaq7vqECfuPMOKGRbWP662kMAGCyYtiM7swbfbatnA23RyNEBhdKiAm63H6pYqpxcaxxd0aoJ%2FfAY9Y6DtwStyUxPCepVoljDpqkETidg%2FdQBoYpps28C2ByvfMfE6Wdqaeru2qwGHUJCmuXY3KrIcCAdgU13qumhQWc4UM1q%2B2ZaN8Rz7E7yK1mOZGsQK2fxDJWKTo1hHoL%2FIdAupo%2FDi5EKCgR6kTcSqLN9J%2BD33MuJCkh4GR9MSEm3sFUECgd4oYPJMutqqS9hnJpKRZ8pQBxkip0WB2yB3Y25wU%2FhX92IBgpGt0S58jwrFUkSPZ25NpUONLc1wPFbSOulLa%2Fpn4JRNE%2FsWdCRLpXlTPYWTlg5yn3UEsFVHsLtoeAbvG3Id%2BpR6XiP%2FDuh%2F%2FN00BBvUJ3hStTh4rGqiWpJUwYG4y1fuTidqst3p2CM6N2hBE3aZRcYf7SHYcyo1USZ8Z%2FzuLXfTmFYYH7Bl84KgwleaUwwY6pgFofZfLBA9QFMuhXZ8MZsZFFJYwj8QYlEZdb%2BqzPl%2FbeLzsUMfGFJJ89IrZrHoncJAet5bmCpfO38jty7XYSbRlNbDsoNEjBFqXFFmIWMrgQEkEo%2FBOTp15pi0u5jcuuYY3MNJybVpimkBW7B3qXb6ZaMEGDNyP5JcPNpeLOlLOzUgM926mm91zhAkwMyr227ICYEqUZkaYjM5HywIMFVlUwPUSgsg%2B&X-Amz-Signature=557dc535acf00ac581ad9888764f9427803890574a359cca7be80b820c32f403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLEIXMN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGry8qigydi0%2FOvefmuNGdxbNNa2YXHXFVErsg8E%2Fp37AiARx6EHRtC12LlLv6GncCmkTfC4ujgrlqEhQ4VEXhBuxyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlWa3o9uTuwSX2MMPKtwD141X5p9N0%2BLXeaotiSJW%2B2S0WgUH0UCQLzHoO9LabZIYy5cZAsS3TDQdcQj7PmIHe8lCtSUPHzAujv9KvY02e2rd7DYnm95jSYlTvA%2FgbRZLNgcGTqiXoRjx%2FpuaXd7yj83siJOdaSIM6ezVYMCiEeaq7vqECfuPMOKGRbWP662kMAGCyYtiM7swbfbatnA23RyNEBhdKiAm63H6pYqpxcaxxd0aoJ%2FfAY9Y6DtwStyUxPCepVoljDpqkETidg%2FdQBoYpps28C2ByvfMfE6Wdqaeru2qwGHUJCmuXY3KrIcCAdgU13qumhQWc4UM1q%2B2ZaN8Rz7E7yK1mOZGsQK2fxDJWKTo1hHoL%2FIdAupo%2FDi5EKCgR6kTcSqLN9J%2BD33MuJCkh4GR9MSEm3sFUECgd4oYPJMutqqS9hnJpKRZ8pQBxkip0WB2yB3Y25wU%2FhX92IBgpGt0S58jwrFUkSPZ25NpUONLc1wPFbSOulLa%2Fpn4JRNE%2FsWdCRLpXlTPYWTlg5yn3UEsFVHsLtoeAbvG3Id%2BpR6XiP%2FDuh%2F%2FN00BBvUJ3hStTh4rGqiWpJUwYG4y1fuTidqst3p2CM6N2hBE3aZRcYf7SHYcyo1USZ8Z%2FzuLXfTmFYYH7Bl84KgwleaUwwY6pgFofZfLBA9QFMuhXZ8MZsZFFJYwj8QYlEZdb%2BqzPl%2FbeLzsUMfGFJJ89IrZrHoncJAet5bmCpfO38jty7XYSbRlNbDsoNEjBFqXFFmIWMrgQEkEo%2FBOTp15pi0u5jcuuYY3MNJybVpimkBW7B3qXb6ZaMEGDNyP5JcPNpeLOlLOzUgM926mm91zhAkwMyr227ICYEqUZkaYjM5HywIMFVlUwPUSgsg%2B&X-Amz-Signature=ce87ca51e675ba0b80b1bdf4ab529b97bbd52dbf864edaea3271a8c866605c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
