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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYNUCME%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7e3AUNKgdFiIe%2BF8goTtQkm1vL7tZL6oD3oK8WFw1gIgVaG%2Bul86hZVpsgZWjoRwBKkWHmfQXWmmra4oI6wjMVMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMVUFUSGFwMVuYKyCCrcA47WXu5n9gjvaSqmXnugZSRRH0onSK73EBPNI%2Fkr1v0remp57V1BgcNbOFPyX2OjJf%2FHZpkhqsWtO3j0ceyTjfrsSk0E3OkCWlbtVi9bmGTxoLBt6MGLEg0Q9dbnX9zlZrQVchZxjlDJooGudXR4gGK1%2FY1K7W8jY11wJTnOm16N2OxowYMXQEJPFNHQkuXIUbQmvCWJ71tocNqpAkWYm2nSRRyRVQmeDMqJk8pf3q1MWqFrbgUSB3rOHWxYJ5oZSeTV2jk7sM86cqxc88%2FExDiZL93CsVDLUSrLJO0OqnOOFlJX3t5zniSnTyh2ah11f%2Bn9MZ1%2B%2BEI1n9TYzN4Ly6ihxbf10wIXqSP5jo5HtdieNHysH1lsZ3Hjad3erhHX%2F6r9i9ALI%2BQYbO4%2F%2B%2BHgh4WjJHIV%2BI5uw8T2CbrqBhelp0AHO4%2Bi%2F9g55baGja4RI5J2VEYNbkJnXwUJcZFoMDMR2z%2BY1n%2FUCd%2BwwTK%2ByDzQzKByI1Hrgiv88u60XgQQ33aXLrhLYwdDEYGhfadWnVMGP76UcZqCX19%2FYbu53A3bzWpr0ulfex7Vb%2BKatLx47q%2FZya0GM5z5ASGEXCJ8A8eyK9l%2F223nSD5H8yqrzadl9%2FyiYHceMgUy9Qm5MIX81sEGOqUBunkBvoZfOUGXNKLT%2FhSM51vs2w9nm55BtxXaowj0KIQr%2Bbfj%2FjnKneUFjvHKhujK1WYvxthwMFGIUVeIi0UbwNBmOvGc7vhBiY6HSmfEydAkQYA26%2FuDRNkb2s4l%2BKsiNKqEEY167WrCOVYWKkQVyyyNJyrjQsSCb8uMw3uBn3fdio33o8Kinep%2BlHpP%2BqAqrQ9LnQOuOevx7vFuIwfDokun7S9h&X-Amz-Signature=22eee8a43e7709ce156e8a3efa8e12687e5a4ffec828ad53f6670afac4484eed&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYNUCME%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7e3AUNKgdFiIe%2BF8goTtQkm1vL7tZL6oD3oK8WFw1gIgVaG%2Bul86hZVpsgZWjoRwBKkWHmfQXWmmra4oI6wjMVMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMVUFUSGFwMVuYKyCCrcA47WXu5n9gjvaSqmXnugZSRRH0onSK73EBPNI%2Fkr1v0remp57V1BgcNbOFPyX2OjJf%2FHZpkhqsWtO3j0ceyTjfrsSk0E3OkCWlbtVi9bmGTxoLBt6MGLEg0Q9dbnX9zlZrQVchZxjlDJooGudXR4gGK1%2FY1K7W8jY11wJTnOm16N2OxowYMXQEJPFNHQkuXIUbQmvCWJ71tocNqpAkWYm2nSRRyRVQmeDMqJk8pf3q1MWqFrbgUSB3rOHWxYJ5oZSeTV2jk7sM86cqxc88%2FExDiZL93CsVDLUSrLJO0OqnOOFlJX3t5zniSnTyh2ah11f%2Bn9MZ1%2B%2BEI1n9TYzN4Ly6ihxbf10wIXqSP5jo5HtdieNHysH1lsZ3Hjad3erhHX%2F6r9i9ALI%2BQYbO4%2F%2B%2BHgh4WjJHIV%2BI5uw8T2CbrqBhelp0AHO4%2Bi%2F9g55baGja4RI5J2VEYNbkJnXwUJcZFoMDMR2z%2BY1n%2FUCd%2BwwTK%2ByDzQzKByI1Hrgiv88u60XgQQ33aXLrhLYwdDEYGhfadWnVMGP76UcZqCX19%2FYbu53A3bzWpr0ulfex7Vb%2BKatLx47q%2FZya0GM5z5ASGEXCJ8A8eyK9l%2F223nSD5H8yqrzadl9%2FyiYHceMgUy9Qm5MIX81sEGOqUBunkBvoZfOUGXNKLT%2FhSM51vs2w9nm55BtxXaowj0KIQr%2Bbfj%2FjnKneUFjvHKhujK1WYvxthwMFGIUVeIi0UbwNBmOvGc7vhBiY6HSmfEydAkQYA26%2FuDRNkb2s4l%2BKsiNKqEEY167WrCOVYWKkQVyyyNJyrjQsSCb8uMw3uBn3fdio33o8Kinep%2BlHpP%2BqAqrQ9LnQOuOevx7vFuIwfDokun7S9h&X-Amz-Signature=1d62d20a857d2f9b623ad6c1ab8657f2ae399a15ad73d252b8748842e6719b87&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYNUCME%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7e3AUNKgdFiIe%2BF8goTtQkm1vL7tZL6oD3oK8WFw1gIgVaG%2Bul86hZVpsgZWjoRwBKkWHmfQXWmmra4oI6wjMVMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMVUFUSGFwMVuYKyCCrcA47WXu5n9gjvaSqmXnugZSRRH0onSK73EBPNI%2Fkr1v0remp57V1BgcNbOFPyX2OjJf%2FHZpkhqsWtO3j0ceyTjfrsSk0E3OkCWlbtVi9bmGTxoLBt6MGLEg0Q9dbnX9zlZrQVchZxjlDJooGudXR4gGK1%2FY1K7W8jY11wJTnOm16N2OxowYMXQEJPFNHQkuXIUbQmvCWJ71tocNqpAkWYm2nSRRyRVQmeDMqJk8pf3q1MWqFrbgUSB3rOHWxYJ5oZSeTV2jk7sM86cqxc88%2FExDiZL93CsVDLUSrLJO0OqnOOFlJX3t5zniSnTyh2ah11f%2Bn9MZ1%2B%2BEI1n9TYzN4Ly6ihxbf10wIXqSP5jo5HtdieNHysH1lsZ3Hjad3erhHX%2F6r9i9ALI%2BQYbO4%2F%2B%2BHgh4WjJHIV%2BI5uw8T2CbrqBhelp0AHO4%2Bi%2F9g55baGja4RI5J2VEYNbkJnXwUJcZFoMDMR2z%2BY1n%2FUCd%2BwwTK%2ByDzQzKByI1Hrgiv88u60XgQQ33aXLrhLYwdDEYGhfadWnVMGP76UcZqCX19%2FYbu53A3bzWpr0ulfex7Vb%2BKatLx47q%2FZya0GM5z5ASGEXCJ8A8eyK9l%2F223nSD5H8yqrzadl9%2FyiYHceMgUy9Qm5MIX81sEGOqUBunkBvoZfOUGXNKLT%2FhSM51vs2w9nm55BtxXaowj0KIQr%2Bbfj%2FjnKneUFjvHKhujK1WYvxthwMFGIUVeIi0UbwNBmOvGc7vhBiY6HSmfEydAkQYA26%2FuDRNkb2s4l%2BKsiNKqEEY167WrCOVYWKkQVyyyNJyrjQsSCb8uMw3uBn3fdio33o8Kinep%2BlHpP%2BqAqrQ9LnQOuOevx7vFuIwfDokun7S9h&X-Amz-Signature=f0708951c7d3a51070dd54993c431e486c0965b65a52eaf4d5070f2168e6d562&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYNUCME%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7e3AUNKgdFiIe%2BF8goTtQkm1vL7tZL6oD3oK8WFw1gIgVaG%2Bul86hZVpsgZWjoRwBKkWHmfQXWmmra4oI6wjMVMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMVUFUSGFwMVuYKyCCrcA47WXu5n9gjvaSqmXnugZSRRH0onSK73EBPNI%2Fkr1v0remp57V1BgcNbOFPyX2OjJf%2FHZpkhqsWtO3j0ceyTjfrsSk0E3OkCWlbtVi9bmGTxoLBt6MGLEg0Q9dbnX9zlZrQVchZxjlDJooGudXR4gGK1%2FY1K7W8jY11wJTnOm16N2OxowYMXQEJPFNHQkuXIUbQmvCWJ71tocNqpAkWYm2nSRRyRVQmeDMqJk8pf3q1MWqFrbgUSB3rOHWxYJ5oZSeTV2jk7sM86cqxc88%2FExDiZL93CsVDLUSrLJO0OqnOOFlJX3t5zniSnTyh2ah11f%2Bn9MZ1%2B%2BEI1n9TYzN4Ly6ihxbf10wIXqSP5jo5HtdieNHysH1lsZ3Hjad3erhHX%2F6r9i9ALI%2BQYbO4%2F%2B%2BHgh4WjJHIV%2BI5uw8T2CbrqBhelp0AHO4%2Bi%2F9g55baGja4RI5J2VEYNbkJnXwUJcZFoMDMR2z%2BY1n%2FUCd%2BwwTK%2ByDzQzKByI1Hrgiv88u60XgQQ33aXLrhLYwdDEYGhfadWnVMGP76UcZqCX19%2FYbu53A3bzWpr0ulfex7Vb%2BKatLx47q%2FZya0GM5z5ASGEXCJ8A8eyK9l%2F223nSD5H8yqrzadl9%2FyiYHceMgUy9Qm5MIX81sEGOqUBunkBvoZfOUGXNKLT%2FhSM51vs2w9nm55BtxXaowj0KIQr%2Bbfj%2FjnKneUFjvHKhujK1WYvxthwMFGIUVeIi0UbwNBmOvGc7vhBiY6HSmfEydAkQYA26%2FuDRNkb2s4l%2BKsiNKqEEY167WrCOVYWKkQVyyyNJyrjQsSCb8uMw3uBn3fdio33o8Kinep%2BlHpP%2BqAqrQ9LnQOuOevx7vFuIwfDokun7S9h&X-Amz-Signature=e29a0f6f1be0011eedfaf7b301f489c56d1467688ef65864a84a0312103932e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYNUCME%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7e3AUNKgdFiIe%2BF8goTtQkm1vL7tZL6oD3oK8WFw1gIgVaG%2Bul86hZVpsgZWjoRwBKkWHmfQXWmmra4oI6wjMVMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMVUFUSGFwMVuYKyCCrcA47WXu5n9gjvaSqmXnugZSRRH0onSK73EBPNI%2Fkr1v0remp57V1BgcNbOFPyX2OjJf%2FHZpkhqsWtO3j0ceyTjfrsSk0E3OkCWlbtVi9bmGTxoLBt6MGLEg0Q9dbnX9zlZrQVchZxjlDJooGudXR4gGK1%2FY1K7W8jY11wJTnOm16N2OxowYMXQEJPFNHQkuXIUbQmvCWJ71tocNqpAkWYm2nSRRyRVQmeDMqJk8pf3q1MWqFrbgUSB3rOHWxYJ5oZSeTV2jk7sM86cqxc88%2FExDiZL93CsVDLUSrLJO0OqnOOFlJX3t5zniSnTyh2ah11f%2Bn9MZ1%2B%2BEI1n9TYzN4Ly6ihxbf10wIXqSP5jo5HtdieNHysH1lsZ3Hjad3erhHX%2F6r9i9ALI%2BQYbO4%2F%2B%2BHgh4WjJHIV%2BI5uw8T2CbrqBhelp0AHO4%2Bi%2F9g55baGja4RI5J2VEYNbkJnXwUJcZFoMDMR2z%2BY1n%2FUCd%2BwwTK%2ByDzQzKByI1Hrgiv88u60XgQQ33aXLrhLYwdDEYGhfadWnVMGP76UcZqCX19%2FYbu53A3bzWpr0ulfex7Vb%2BKatLx47q%2FZya0GM5z5ASGEXCJ8A8eyK9l%2F223nSD5H8yqrzadl9%2FyiYHceMgUy9Qm5MIX81sEGOqUBunkBvoZfOUGXNKLT%2FhSM51vs2w9nm55BtxXaowj0KIQr%2Bbfj%2FjnKneUFjvHKhujK1WYvxthwMFGIUVeIi0UbwNBmOvGc7vhBiY6HSmfEydAkQYA26%2FuDRNkb2s4l%2BKsiNKqEEY167WrCOVYWKkQVyyyNJyrjQsSCb8uMw3uBn3fdio33o8Kinep%2BlHpP%2BqAqrQ9LnQOuOevx7vFuIwfDokun7S9h&X-Amz-Signature=ae22c88d5fbd9a7ecff0767080bfde5ab3ea1d4fc5c20b1c48be4d730a7ebf57&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HYNUCME%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCH7e3AUNKgdFiIe%2BF8goTtQkm1vL7tZL6oD3oK8WFw1gIgVaG%2Bul86hZVpsgZWjoRwBKkWHmfQXWmmra4oI6wjMVMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMVUFUSGFwMVuYKyCCrcA47WXu5n9gjvaSqmXnugZSRRH0onSK73EBPNI%2Fkr1v0remp57V1BgcNbOFPyX2OjJf%2FHZpkhqsWtO3j0ceyTjfrsSk0E3OkCWlbtVi9bmGTxoLBt6MGLEg0Q9dbnX9zlZrQVchZxjlDJooGudXR4gGK1%2FY1K7W8jY11wJTnOm16N2OxowYMXQEJPFNHQkuXIUbQmvCWJ71tocNqpAkWYm2nSRRyRVQmeDMqJk8pf3q1MWqFrbgUSB3rOHWxYJ5oZSeTV2jk7sM86cqxc88%2FExDiZL93CsVDLUSrLJO0OqnOOFlJX3t5zniSnTyh2ah11f%2Bn9MZ1%2B%2BEI1n9TYzN4Ly6ihxbf10wIXqSP5jo5HtdieNHysH1lsZ3Hjad3erhHX%2F6r9i9ALI%2BQYbO4%2F%2B%2BHgh4WjJHIV%2BI5uw8T2CbrqBhelp0AHO4%2Bi%2F9g55baGja4RI5J2VEYNbkJnXwUJcZFoMDMR2z%2BY1n%2FUCd%2BwwTK%2ByDzQzKByI1Hrgiv88u60XgQQ33aXLrhLYwdDEYGhfadWnVMGP76UcZqCX19%2FYbu53A3bzWpr0ulfex7Vb%2BKatLx47q%2FZya0GM5z5ASGEXCJ8A8eyK9l%2F223nSD5H8yqrzadl9%2FyiYHceMgUy9Qm5MIX81sEGOqUBunkBvoZfOUGXNKLT%2FhSM51vs2w9nm55BtxXaowj0KIQr%2Bbfj%2FjnKneUFjvHKhujK1WYvxthwMFGIUVeIi0UbwNBmOvGc7vhBiY6HSmfEydAkQYA26%2FuDRNkb2s4l%2BKsiNKqEEY167WrCOVYWKkQVyyyNJyrjQsSCb8uMw3uBn3fdio33o8Kinep%2BlHpP%2BqAqrQ9LnQOuOevx7vFuIwfDokun7S9h&X-Amz-Signature=163333ce97c9f994246ebe3d2583053dfa7b5a4f3ccc68ec443afde3019efce0&X-Amz-SignedHeaders=host&x-id=GetObject)
