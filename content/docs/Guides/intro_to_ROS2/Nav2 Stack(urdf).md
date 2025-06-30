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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3DZEE3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDNBNUzbVCZ1ceRCp%2BpIJY4GSN2JtFDDvKZuJ%2FOSSiMAiAZtl5UoDV5Qy1lhnUjapq%2BAMZzb%2FWJB9zThQBIqdR1VyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYl0LotTKh8HMR918KtwD23BdIK6S3Vy%2BUn9wcUAI%2BcFCtWdJKms%2FvgJ4%2Ff9kXlScOiULRai7oEPVHUL2CL75bL%2FnS%2BXyrqhrnVMEHcKbggTkGbMjO8faok3hPenvuZWfNwVyB9i%2B4wZIB%2FI4X5EqCHKPGVaacTr%2FLOIfLs9qK%2B7iDWXFc7sCkcumYVqKakMzKyZXn6ElcTKnDuJfYRWZM2WLvE%2BOx%2FYNwl3vLjGEnktk8qHgflPeAJeTxTJ%2Bzn868eaeNXYa03VdJKN7OCf4wguvAKS4UUPcEsoN6pCCc5wOZxk75NHp3Wo5oiKUshuTLLg%2F4NBJvwJXQj7ZYSBXylzTx9ZHN%2B0XLgw6nmMG3%2BWk3QX5GjxoDclfBh4jXknTJqa40e5n12rmZgQZSJf%2Bp8lIkUP0YaTgn2Yr4zKSYeM%2Fn%2FjqQcBU7fcZ3v%2FWT6ph%2B6tRDl3Jdd9aHNQS2aRNn9qjZOYNQE2BbuCBebmTHXt0Vabl6Pmm3BBSddz3nyI1TyuaYDlkuANoF2GTYmH0M2kIMQRqLq68UZ4mVKCVOyMFZPsdtZknsYhLKKYImt3x8EaKmuFBW78IFf8%2BcJmJBmdLgXbPVvEfgzcZ40K5BHrWzfCeLmqhBdZ%2FDfTMIh%2BKuACFigUj2cKcV%2FUwmryIwwY6pgG1YTq1SFKK%2BCg2mEcwO72sYL2hZzm4N4ciLRtUSLQhGw0%2BzwAF1eTymF%2FnJVawwLKL5JzukwXD4XjkIiam9Te0K34H3S1pqRYWEOpG8lCYMMAdwvWIGGgMN7GyT%2FR5%2BO0CsaJEhtK0mryd4frNk12f4klogiW%2FdmdAhvcTZCECnoSvdhfImPDAMBAEgbOWEDRs%2FAbOaQvd4C3yS1jPq9ZZ4BULJLSo&X-Amz-Signature=c370eccceaa778dd92fe2dd57ddf23c969085fb1c883e06585dc667cb0c34503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3DZEE3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDNBNUzbVCZ1ceRCp%2BpIJY4GSN2JtFDDvKZuJ%2FOSSiMAiAZtl5UoDV5Qy1lhnUjapq%2BAMZzb%2FWJB9zThQBIqdR1VyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYl0LotTKh8HMR918KtwD23BdIK6S3Vy%2BUn9wcUAI%2BcFCtWdJKms%2FvgJ4%2Ff9kXlScOiULRai7oEPVHUL2CL75bL%2FnS%2BXyrqhrnVMEHcKbggTkGbMjO8faok3hPenvuZWfNwVyB9i%2B4wZIB%2FI4X5EqCHKPGVaacTr%2FLOIfLs9qK%2B7iDWXFc7sCkcumYVqKakMzKyZXn6ElcTKnDuJfYRWZM2WLvE%2BOx%2FYNwl3vLjGEnktk8qHgflPeAJeTxTJ%2Bzn868eaeNXYa03VdJKN7OCf4wguvAKS4UUPcEsoN6pCCc5wOZxk75NHp3Wo5oiKUshuTLLg%2F4NBJvwJXQj7ZYSBXylzTx9ZHN%2B0XLgw6nmMG3%2BWk3QX5GjxoDclfBh4jXknTJqa40e5n12rmZgQZSJf%2Bp8lIkUP0YaTgn2Yr4zKSYeM%2Fn%2FjqQcBU7fcZ3v%2FWT6ph%2B6tRDl3Jdd9aHNQS2aRNn9qjZOYNQE2BbuCBebmTHXt0Vabl6Pmm3BBSddz3nyI1TyuaYDlkuANoF2GTYmH0M2kIMQRqLq68UZ4mVKCVOyMFZPsdtZknsYhLKKYImt3x8EaKmuFBW78IFf8%2BcJmJBmdLgXbPVvEfgzcZ40K5BHrWzfCeLmqhBdZ%2FDfTMIh%2BKuACFigUj2cKcV%2FUwmryIwwY6pgG1YTq1SFKK%2BCg2mEcwO72sYL2hZzm4N4ciLRtUSLQhGw0%2BzwAF1eTymF%2FnJVawwLKL5JzukwXD4XjkIiam9Te0K34H3S1pqRYWEOpG8lCYMMAdwvWIGGgMN7GyT%2FR5%2BO0CsaJEhtK0mryd4frNk12f4klogiW%2FdmdAhvcTZCECnoSvdhfImPDAMBAEgbOWEDRs%2FAbOaQvd4C3yS1jPq9ZZ4BULJLSo&X-Amz-Signature=17593d288cde2f02ff803f49709e0f61db01f129ea4012ddc6370e8fca2c2aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3DZEE3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDNBNUzbVCZ1ceRCp%2BpIJY4GSN2JtFDDvKZuJ%2FOSSiMAiAZtl5UoDV5Qy1lhnUjapq%2BAMZzb%2FWJB9zThQBIqdR1VyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYl0LotTKh8HMR918KtwD23BdIK6S3Vy%2BUn9wcUAI%2BcFCtWdJKms%2FvgJ4%2Ff9kXlScOiULRai7oEPVHUL2CL75bL%2FnS%2BXyrqhrnVMEHcKbggTkGbMjO8faok3hPenvuZWfNwVyB9i%2B4wZIB%2FI4X5EqCHKPGVaacTr%2FLOIfLs9qK%2B7iDWXFc7sCkcumYVqKakMzKyZXn6ElcTKnDuJfYRWZM2WLvE%2BOx%2FYNwl3vLjGEnktk8qHgflPeAJeTxTJ%2Bzn868eaeNXYa03VdJKN7OCf4wguvAKS4UUPcEsoN6pCCc5wOZxk75NHp3Wo5oiKUshuTLLg%2F4NBJvwJXQj7ZYSBXylzTx9ZHN%2B0XLgw6nmMG3%2BWk3QX5GjxoDclfBh4jXknTJqa40e5n12rmZgQZSJf%2Bp8lIkUP0YaTgn2Yr4zKSYeM%2Fn%2FjqQcBU7fcZ3v%2FWT6ph%2B6tRDl3Jdd9aHNQS2aRNn9qjZOYNQE2BbuCBebmTHXt0Vabl6Pmm3BBSddz3nyI1TyuaYDlkuANoF2GTYmH0M2kIMQRqLq68UZ4mVKCVOyMFZPsdtZknsYhLKKYImt3x8EaKmuFBW78IFf8%2BcJmJBmdLgXbPVvEfgzcZ40K5BHrWzfCeLmqhBdZ%2FDfTMIh%2BKuACFigUj2cKcV%2FUwmryIwwY6pgG1YTq1SFKK%2BCg2mEcwO72sYL2hZzm4N4ciLRtUSLQhGw0%2BzwAF1eTymF%2FnJVawwLKL5JzukwXD4XjkIiam9Te0K34H3S1pqRYWEOpG8lCYMMAdwvWIGGgMN7GyT%2FR5%2BO0CsaJEhtK0mryd4frNk12f4klogiW%2FdmdAhvcTZCECnoSvdhfImPDAMBAEgbOWEDRs%2FAbOaQvd4C3yS1jPq9ZZ4BULJLSo&X-Amz-Signature=339645a0bc11d3497cd4ec3ce218080e439fd009a65605a7f077e9fcdce31d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3DZEE3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDNBNUzbVCZ1ceRCp%2BpIJY4GSN2JtFDDvKZuJ%2FOSSiMAiAZtl5UoDV5Qy1lhnUjapq%2BAMZzb%2FWJB9zThQBIqdR1VyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYl0LotTKh8HMR918KtwD23BdIK6S3Vy%2BUn9wcUAI%2BcFCtWdJKms%2FvgJ4%2Ff9kXlScOiULRai7oEPVHUL2CL75bL%2FnS%2BXyrqhrnVMEHcKbggTkGbMjO8faok3hPenvuZWfNwVyB9i%2B4wZIB%2FI4X5EqCHKPGVaacTr%2FLOIfLs9qK%2B7iDWXFc7sCkcumYVqKakMzKyZXn6ElcTKnDuJfYRWZM2WLvE%2BOx%2FYNwl3vLjGEnktk8qHgflPeAJeTxTJ%2Bzn868eaeNXYa03VdJKN7OCf4wguvAKS4UUPcEsoN6pCCc5wOZxk75NHp3Wo5oiKUshuTLLg%2F4NBJvwJXQj7ZYSBXylzTx9ZHN%2B0XLgw6nmMG3%2BWk3QX5GjxoDclfBh4jXknTJqa40e5n12rmZgQZSJf%2Bp8lIkUP0YaTgn2Yr4zKSYeM%2Fn%2FjqQcBU7fcZ3v%2FWT6ph%2B6tRDl3Jdd9aHNQS2aRNn9qjZOYNQE2BbuCBebmTHXt0Vabl6Pmm3BBSddz3nyI1TyuaYDlkuANoF2GTYmH0M2kIMQRqLq68UZ4mVKCVOyMFZPsdtZknsYhLKKYImt3x8EaKmuFBW78IFf8%2BcJmJBmdLgXbPVvEfgzcZ40K5BHrWzfCeLmqhBdZ%2FDfTMIh%2BKuACFigUj2cKcV%2FUwmryIwwY6pgG1YTq1SFKK%2BCg2mEcwO72sYL2hZzm4N4ciLRtUSLQhGw0%2BzwAF1eTymF%2FnJVawwLKL5JzukwXD4XjkIiam9Te0K34H3S1pqRYWEOpG8lCYMMAdwvWIGGgMN7GyT%2FR5%2BO0CsaJEhtK0mryd4frNk12f4klogiW%2FdmdAhvcTZCECnoSvdhfImPDAMBAEgbOWEDRs%2FAbOaQvd4C3yS1jPq9ZZ4BULJLSo&X-Amz-Signature=b9f8bd4e8dd56beb739cf7233e4107bcd1221a593b785c33aca7e1f9802cf03d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3DZEE3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDNBNUzbVCZ1ceRCp%2BpIJY4GSN2JtFDDvKZuJ%2FOSSiMAiAZtl5UoDV5Qy1lhnUjapq%2BAMZzb%2FWJB9zThQBIqdR1VyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYl0LotTKh8HMR918KtwD23BdIK6S3Vy%2BUn9wcUAI%2BcFCtWdJKms%2FvgJ4%2Ff9kXlScOiULRai7oEPVHUL2CL75bL%2FnS%2BXyrqhrnVMEHcKbggTkGbMjO8faok3hPenvuZWfNwVyB9i%2B4wZIB%2FI4X5EqCHKPGVaacTr%2FLOIfLs9qK%2B7iDWXFc7sCkcumYVqKakMzKyZXn6ElcTKnDuJfYRWZM2WLvE%2BOx%2FYNwl3vLjGEnktk8qHgflPeAJeTxTJ%2Bzn868eaeNXYa03VdJKN7OCf4wguvAKS4UUPcEsoN6pCCc5wOZxk75NHp3Wo5oiKUshuTLLg%2F4NBJvwJXQj7ZYSBXylzTx9ZHN%2B0XLgw6nmMG3%2BWk3QX5GjxoDclfBh4jXknTJqa40e5n12rmZgQZSJf%2Bp8lIkUP0YaTgn2Yr4zKSYeM%2Fn%2FjqQcBU7fcZ3v%2FWT6ph%2B6tRDl3Jdd9aHNQS2aRNn9qjZOYNQE2BbuCBebmTHXt0Vabl6Pmm3BBSddz3nyI1TyuaYDlkuANoF2GTYmH0M2kIMQRqLq68UZ4mVKCVOyMFZPsdtZknsYhLKKYImt3x8EaKmuFBW78IFf8%2BcJmJBmdLgXbPVvEfgzcZ40K5BHrWzfCeLmqhBdZ%2FDfTMIh%2BKuACFigUj2cKcV%2FUwmryIwwY6pgG1YTq1SFKK%2BCg2mEcwO72sYL2hZzm4N4ciLRtUSLQhGw0%2BzwAF1eTymF%2FnJVawwLKL5JzukwXD4XjkIiam9Te0K34H3S1pqRYWEOpG8lCYMMAdwvWIGGgMN7GyT%2FR5%2BO0CsaJEhtK0mryd4frNk12f4klogiW%2FdmdAhvcTZCECnoSvdhfImPDAMBAEgbOWEDRs%2FAbOaQvd4C3yS1jPq9ZZ4BULJLSo&X-Amz-Signature=c46ddfa8a6174f84444f578984387ef41bd6a6c6da4bf678ca50c690a0dcfeae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI3DZEE3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBDNBNUzbVCZ1ceRCp%2BpIJY4GSN2JtFDDvKZuJ%2FOSSiMAiAZtl5UoDV5Qy1lhnUjapq%2BAMZzb%2FWJB9zThQBIqdR1VyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYl0LotTKh8HMR918KtwD23BdIK6S3Vy%2BUn9wcUAI%2BcFCtWdJKms%2FvgJ4%2Ff9kXlScOiULRai7oEPVHUL2CL75bL%2FnS%2BXyrqhrnVMEHcKbggTkGbMjO8faok3hPenvuZWfNwVyB9i%2B4wZIB%2FI4X5EqCHKPGVaacTr%2FLOIfLs9qK%2B7iDWXFc7sCkcumYVqKakMzKyZXn6ElcTKnDuJfYRWZM2WLvE%2BOx%2FYNwl3vLjGEnktk8qHgflPeAJeTxTJ%2Bzn868eaeNXYa03VdJKN7OCf4wguvAKS4UUPcEsoN6pCCc5wOZxk75NHp3Wo5oiKUshuTLLg%2F4NBJvwJXQj7ZYSBXylzTx9ZHN%2B0XLgw6nmMG3%2BWk3QX5GjxoDclfBh4jXknTJqa40e5n12rmZgQZSJf%2Bp8lIkUP0YaTgn2Yr4zKSYeM%2Fn%2FjqQcBU7fcZ3v%2FWT6ph%2B6tRDl3Jdd9aHNQS2aRNn9qjZOYNQE2BbuCBebmTHXt0Vabl6Pmm3BBSddz3nyI1TyuaYDlkuANoF2GTYmH0M2kIMQRqLq68UZ4mVKCVOyMFZPsdtZknsYhLKKYImt3x8EaKmuFBW78IFf8%2BcJmJBmdLgXbPVvEfgzcZ40K5BHrWzfCeLmqhBdZ%2FDfTMIh%2BKuACFigUj2cKcV%2FUwmryIwwY6pgG1YTq1SFKK%2BCg2mEcwO72sYL2hZzm4N4ciLRtUSLQhGw0%2BzwAF1eTymF%2FnJVawwLKL5JzukwXD4XjkIiam9Te0K34H3S1pqRYWEOpG8lCYMMAdwvWIGGgMN7GyT%2FR5%2BO0CsaJEhtK0mryd4frNk12f4klogiW%2FdmdAhvcTZCECnoSvdhfImPDAMBAEgbOWEDRs%2FAbOaQvd4C3yS1jPq9ZZ4BULJLSo&X-Amz-Signature=007ad5de5eba98517efc4d5fd8cd6300430b6cc42ac2d6f05833cf47c1507696&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
