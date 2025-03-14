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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWXIN2Z%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNyJs6zBFg%2BgEm2v6taMQeLC9%2BOJHoSPNE3Fj9cIM3kwIhAMg65vzMys8aieMyrjuPOhHGpSBo1yJFsW8pZJp4eCE4KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlt9kJu1e3Md7Ew74q3AN6Lr1nimID02ZflQ2dMNtHYPx1iYr0kK2FOj2oB%2BolsPOV%2FpveOs065kdpfepGk6%2BIE%2BJjKknOxjZt%2FaE4Resu4Ar1i7Gjk3%2Fq%2BIWyn2dB4fF%2Bwy4MreeDkQgFNyf344VStuuUEduToXsdw98BtpejlPbYHK87VHB2P9UULy9ywIc7WVkVfbFxN%2FMvBoarG0Q1dfqjdBGMj5xS3DqNwaDQQYq5mOFYoNhwKHoxylkhflPNL0C3rRfcigJANj81DzKw8NRuWdsLbLRHmtmwUB32HiDYb1l%2FoidrG8JkGKMihw%2F7gvKF30nxhca3MkWLP4AzyeFhJBAWcfI4K2YSgdtQyJkrghzVetgQJnWr4Jy4tSSI%2BDxb0m2nNrEfQ%2Flh2SyebTXAGbUlZvoBfhMSCnnNVYZKosDsyAR9JWnyqZJlg%2BCNok8FG3wEEl5QRfVFKE%2B1AcMcTBb%2B54tSj%2FdCTQnz%2B9MDOitdpmDfK78Rkv8dj%2BHNGMGCpLuiXuOV7vWqODW0ZTg3w5WF48lddhZNptgWlZwIFG3RNzx7lbX17Ha29VzlhVPSfdco4xMmY%2BbjVVfW7tDNXp83XzI%2FA7AX7d9OLiTQ7GuASPsOmmwr1YFeTzi9wKOB0M3UeMChuzCG0c%2B%2BBjqkARmZKAVE5gvjjacKdPmNADI5H10N9mZGbdAj3J16XYmMGYM0vm1lHD1X55BhsE73b5aw0Qwv9eCvGykC6JTWdj2b8H7PU2ajNN9%2FtHoEcaJYb2fseGoQRnDxr%2BbUXcUO58Z87Ceoae%2FRTKdUl2RNdma%2B8q7kSaRItN024l278OC%2FydONDyTR1wCophTh6Ai9GhR6vIutKdLnRHFzlXFztGrSb6qm&X-Amz-Signature=16a4510aedd602cd9c2fb21075e63cf8c2da96df6cb7a9419b41b489744f7e5f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWXIN2Z%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNyJs6zBFg%2BgEm2v6taMQeLC9%2BOJHoSPNE3Fj9cIM3kwIhAMg65vzMys8aieMyrjuPOhHGpSBo1yJFsW8pZJp4eCE4KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlt9kJu1e3Md7Ew74q3AN6Lr1nimID02ZflQ2dMNtHYPx1iYr0kK2FOj2oB%2BolsPOV%2FpveOs065kdpfepGk6%2BIE%2BJjKknOxjZt%2FaE4Resu4Ar1i7Gjk3%2Fq%2BIWyn2dB4fF%2Bwy4MreeDkQgFNyf344VStuuUEduToXsdw98BtpejlPbYHK87VHB2P9UULy9ywIc7WVkVfbFxN%2FMvBoarG0Q1dfqjdBGMj5xS3DqNwaDQQYq5mOFYoNhwKHoxylkhflPNL0C3rRfcigJANj81DzKw8NRuWdsLbLRHmtmwUB32HiDYb1l%2FoidrG8JkGKMihw%2F7gvKF30nxhca3MkWLP4AzyeFhJBAWcfI4K2YSgdtQyJkrghzVetgQJnWr4Jy4tSSI%2BDxb0m2nNrEfQ%2Flh2SyebTXAGbUlZvoBfhMSCnnNVYZKosDsyAR9JWnyqZJlg%2BCNok8FG3wEEl5QRfVFKE%2B1AcMcTBb%2B54tSj%2FdCTQnz%2B9MDOitdpmDfK78Rkv8dj%2BHNGMGCpLuiXuOV7vWqODW0ZTg3w5WF48lddhZNptgWlZwIFG3RNzx7lbX17Ha29VzlhVPSfdco4xMmY%2BbjVVfW7tDNXp83XzI%2FA7AX7d9OLiTQ7GuASPsOmmwr1YFeTzi9wKOB0M3UeMChuzCG0c%2B%2BBjqkARmZKAVE5gvjjacKdPmNADI5H10N9mZGbdAj3J16XYmMGYM0vm1lHD1X55BhsE73b5aw0Qwv9eCvGykC6JTWdj2b8H7PU2ajNN9%2FtHoEcaJYb2fseGoQRnDxr%2BbUXcUO58Z87Ceoae%2FRTKdUl2RNdma%2B8q7kSaRItN024l278OC%2FydONDyTR1wCophTh6Ai9GhR6vIutKdLnRHFzlXFztGrSb6qm&X-Amz-Signature=c83ab4120048ee02fbb946b185fc755e9483e7ef331f8fd3087adb7f2bc6d5da&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWXIN2Z%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNyJs6zBFg%2BgEm2v6taMQeLC9%2BOJHoSPNE3Fj9cIM3kwIhAMg65vzMys8aieMyrjuPOhHGpSBo1yJFsW8pZJp4eCE4KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlt9kJu1e3Md7Ew74q3AN6Lr1nimID02ZflQ2dMNtHYPx1iYr0kK2FOj2oB%2BolsPOV%2FpveOs065kdpfepGk6%2BIE%2BJjKknOxjZt%2FaE4Resu4Ar1i7Gjk3%2Fq%2BIWyn2dB4fF%2Bwy4MreeDkQgFNyf344VStuuUEduToXsdw98BtpejlPbYHK87VHB2P9UULy9ywIc7WVkVfbFxN%2FMvBoarG0Q1dfqjdBGMj5xS3DqNwaDQQYq5mOFYoNhwKHoxylkhflPNL0C3rRfcigJANj81DzKw8NRuWdsLbLRHmtmwUB32HiDYb1l%2FoidrG8JkGKMihw%2F7gvKF30nxhca3MkWLP4AzyeFhJBAWcfI4K2YSgdtQyJkrghzVetgQJnWr4Jy4tSSI%2BDxb0m2nNrEfQ%2Flh2SyebTXAGbUlZvoBfhMSCnnNVYZKosDsyAR9JWnyqZJlg%2BCNok8FG3wEEl5QRfVFKE%2B1AcMcTBb%2B54tSj%2FdCTQnz%2B9MDOitdpmDfK78Rkv8dj%2BHNGMGCpLuiXuOV7vWqODW0ZTg3w5WF48lddhZNptgWlZwIFG3RNzx7lbX17Ha29VzlhVPSfdco4xMmY%2BbjVVfW7tDNXp83XzI%2FA7AX7d9OLiTQ7GuASPsOmmwr1YFeTzi9wKOB0M3UeMChuzCG0c%2B%2BBjqkARmZKAVE5gvjjacKdPmNADI5H10N9mZGbdAj3J16XYmMGYM0vm1lHD1X55BhsE73b5aw0Qwv9eCvGykC6JTWdj2b8H7PU2ajNN9%2FtHoEcaJYb2fseGoQRnDxr%2BbUXcUO58Z87Ceoae%2FRTKdUl2RNdma%2B8q7kSaRItN024l278OC%2FydONDyTR1wCophTh6Ai9GhR6vIutKdLnRHFzlXFztGrSb6qm&X-Amz-Signature=ad93dda485b5de1f00231c8a43d96b30d51b046aa5ad67aeb10399d0f2a7025c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWXIN2Z%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNyJs6zBFg%2BgEm2v6taMQeLC9%2BOJHoSPNE3Fj9cIM3kwIhAMg65vzMys8aieMyrjuPOhHGpSBo1yJFsW8pZJp4eCE4KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlt9kJu1e3Md7Ew74q3AN6Lr1nimID02ZflQ2dMNtHYPx1iYr0kK2FOj2oB%2BolsPOV%2FpveOs065kdpfepGk6%2BIE%2BJjKknOxjZt%2FaE4Resu4Ar1i7Gjk3%2Fq%2BIWyn2dB4fF%2Bwy4MreeDkQgFNyf344VStuuUEduToXsdw98BtpejlPbYHK87VHB2P9UULy9ywIc7WVkVfbFxN%2FMvBoarG0Q1dfqjdBGMj5xS3DqNwaDQQYq5mOFYoNhwKHoxylkhflPNL0C3rRfcigJANj81DzKw8NRuWdsLbLRHmtmwUB32HiDYb1l%2FoidrG8JkGKMihw%2F7gvKF30nxhca3MkWLP4AzyeFhJBAWcfI4K2YSgdtQyJkrghzVetgQJnWr4Jy4tSSI%2BDxb0m2nNrEfQ%2Flh2SyebTXAGbUlZvoBfhMSCnnNVYZKosDsyAR9JWnyqZJlg%2BCNok8FG3wEEl5QRfVFKE%2B1AcMcTBb%2B54tSj%2FdCTQnz%2B9MDOitdpmDfK78Rkv8dj%2BHNGMGCpLuiXuOV7vWqODW0ZTg3w5WF48lddhZNptgWlZwIFG3RNzx7lbX17Ha29VzlhVPSfdco4xMmY%2BbjVVfW7tDNXp83XzI%2FA7AX7d9OLiTQ7GuASPsOmmwr1YFeTzi9wKOB0M3UeMChuzCG0c%2B%2BBjqkARmZKAVE5gvjjacKdPmNADI5H10N9mZGbdAj3J16XYmMGYM0vm1lHD1X55BhsE73b5aw0Qwv9eCvGykC6JTWdj2b8H7PU2ajNN9%2FtHoEcaJYb2fseGoQRnDxr%2BbUXcUO58Z87Ceoae%2FRTKdUl2RNdma%2B8q7kSaRItN024l278OC%2FydONDyTR1wCophTh6Ai9GhR6vIutKdLnRHFzlXFztGrSb6qm&X-Amz-Signature=8f1e5e604b13203ee234dda85b05f6f9a6ea68b4f77789e84828a96669b5d0f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWXIN2Z%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNyJs6zBFg%2BgEm2v6taMQeLC9%2BOJHoSPNE3Fj9cIM3kwIhAMg65vzMys8aieMyrjuPOhHGpSBo1yJFsW8pZJp4eCE4KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlt9kJu1e3Md7Ew74q3AN6Lr1nimID02ZflQ2dMNtHYPx1iYr0kK2FOj2oB%2BolsPOV%2FpveOs065kdpfepGk6%2BIE%2BJjKknOxjZt%2FaE4Resu4Ar1i7Gjk3%2Fq%2BIWyn2dB4fF%2Bwy4MreeDkQgFNyf344VStuuUEduToXsdw98BtpejlPbYHK87VHB2P9UULy9ywIc7WVkVfbFxN%2FMvBoarG0Q1dfqjdBGMj5xS3DqNwaDQQYq5mOFYoNhwKHoxylkhflPNL0C3rRfcigJANj81DzKw8NRuWdsLbLRHmtmwUB32HiDYb1l%2FoidrG8JkGKMihw%2F7gvKF30nxhca3MkWLP4AzyeFhJBAWcfI4K2YSgdtQyJkrghzVetgQJnWr4Jy4tSSI%2BDxb0m2nNrEfQ%2Flh2SyebTXAGbUlZvoBfhMSCnnNVYZKosDsyAR9JWnyqZJlg%2BCNok8FG3wEEl5QRfVFKE%2B1AcMcTBb%2B54tSj%2FdCTQnz%2B9MDOitdpmDfK78Rkv8dj%2BHNGMGCpLuiXuOV7vWqODW0ZTg3w5WF48lddhZNptgWlZwIFG3RNzx7lbX17Ha29VzlhVPSfdco4xMmY%2BbjVVfW7tDNXp83XzI%2FA7AX7d9OLiTQ7GuASPsOmmwr1YFeTzi9wKOB0M3UeMChuzCG0c%2B%2BBjqkARmZKAVE5gvjjacKdPmNADI5H10N9mZGbdAj3J16XYmMGYM0vm1lHD1X55BhsE73b5aw0Qwv9eCvGykC6JTWdj2b8H7PU2ajNN9%2FtHoEcaJYb2fseGoQRnDxr%2BbUXcUO58Z87Ceoae%2FRTKdUl2RNdma%2B8q7kSaRItN024l278OC%2FydONDyTR1wCophTh6Ai9GhR6vIutKdLnRHFzlXFztGrSb6qm&X-Amz-Signature=7f303e4b234c507c3a035393d8b8b282fc8045a20f8dca11bd960ff6c2456a0b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OWXIN2Z%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNyJs6zBFg%2BgEm2v6taMQeLC9%2BOJHoSPNE3Fj9cIM3kwIhAMg65vzMys8aieMyrjuPOhHGpSBo1yJFsW8pZJp4eCE4KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzlt9kJu1e3Md7Ew74q3AN6Lr1nimID02ZflQ2dMNtHYPx1iYr0kK2FOj2oB%2BolsPOV%2FpveOs065kdpfepGk6%2BIE%2BJjKknOxjZt%2FaE4Resu4Ar1i7Gjk3%2Fq%2BIWyn2dB4fF%2Bwy4MreeDkQgFNyf344VStuuUEduToXsdw98BtpejlPbYHK87VHB2P9UULy9ywIc7WVkVfbFxN%2FMvBoarG0Q1dfqjdBGMj5xS3DqNwaDQQYq5mOFYoNhwKHoxylkhflPNL0C3rRfcigJANj81DzKw8NRuWdsLbLRHmtmwUB32HiDYb1l%2FoidrG8JkGKMihw%2F7gvKF30nxhca3MkWLP4AzyeFhJBAWcfI4K2YSgdtQyJkrghzVetgQJnWr4Jy4tSSI%2BDxb0m2nNrEfQ%2Flh2SyebTXAGbUlZvoBfhMSCnnNVYZKosDsyAR9JWnyqZJlg%2BCNok8FG3wEEl5QRfVFKE%2B1AcMcTBb%2B54tSj%2FdCTQnz%2B9MDOitdpmDfK78Rkv8dj%2BHNGMGCpLuiXuOV7vWqODW0ZTg3w5WF48lddhZNptgWlZwIFG3RNzx7lbX17Ha29VzlhVPSfdco4xMmY%2BbjVVfW7tDNXp83XzI%2FA7AX7d9OLiTQ7GuASPsOmmwr1YFeTzi9wKOB0M3UeMChuzCG0c%2B%2BBjqkARmZKAVE5gvjjacKdPmNADI5H10N9mZGbdAj3J16XYmMGYM0vm1lHD1X55BhsE73b5aw0Qwv9eCvGykC6JTWdj2b8H7PU2ajNN9%2FtHoEcaJYb2fseGoQRnDxr%2BbUXcUO58Z87Ceoae%2FRTKdUl2RNdma%2B8q7kSaRItN024l278OC%2FydONDyTR1wCophTh6Ai9GhR6vIutKdLnRHFzlXFztGrSb6qm&X-Amz-Signature=447f88223c9702e261c9d1e19b04bc38c42d8dbf9164f70d76f9421d62580754&X-Amz-SignedHeaders=host&x-id=GetObject)
