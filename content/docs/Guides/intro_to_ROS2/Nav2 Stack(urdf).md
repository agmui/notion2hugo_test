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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64VMRQW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHA8kyqa2wATcMU1OagE8e%2BA9RMKtuNlph77hxsmWILqAiA%2FQEN5Qho9ZC0CFmoYdRKtFXOUUNbVDRK7Bwv4dB9gMir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM99hOENdvVmd8vyLBKtwDHH6c7HHLBjyUqU2SYoofLL1VjHVlwFuQ42%2BR62rHqje%2FuGWYJl3UwzH%2Baxsb9Fc%2BF%2B8LIiI4uOZ%2F8euJiaZXT%2FQqqwcSPOtd5Aw%2FUTpw6EGNBAOx1pojMAhsPTmb7eb3d93k2P%2Fkg2br0%2Bd2pD0DKEapXDUwsNDbtpB6ycTY92UiyR7hoSrvOJAE2p3R%2F3Wg6VsWQFXv4WJJR08oylgUsy0%2BlvoahFmQseI6xFx9fxuynTYup4vNtpRdl%2FXFoPYJiu4nDoY5kNANOOp3aZS0DFB4kbohsQcptCXpJ5kYFJs9qwPYV7SKqpaYRYbmyC6u2zmGdYhdSeImPbQOX09OyeCpDQdGWVJKm9stfWiM68Oimcyt4BPzq1yld%2F0cryRShA4AbNt9TVJudZ0dD5OpThIg%2FwbFW4DV7azoGc8924bv71Hj91w13CO7%2FB3mKR6gRWy6AxP4377%2Fj8N8GeAPt9EO1QXmAMNxLHb90thRGDSht39viWESWSkii4NjF2%2B2yVl8bTTJeBgIi3yUQCTiPF5yHuYvXd4Rvd5YApFncl5tLayxdKhgzedl2S%2Be2B%2FWdlkCNLtz2Cnkbsx0Yrt%2BRrVkvo%2BrgrPY9nFrW0NUU8CaebAGkXkg8g5jx%2B0wsv7WwwY6pgGIZDzWYTypgWjQCvSIQKhiY89BXd14uYLUpT0TrQQFf2GZFOCnv3ogPBJNeQmbj8c57zrnzkhvYxin5Hab0i93fvXE9bI%2FkhU9lL6ObOt89P7vNF9Xstekhcr8v2R%2FDL8fe2ALw0yyeoekwL5IufSwSJndajXTCZjsmrr0Z8F7RYNGjqXWryZ1qSP03AZrieIlqtu9ZwSB6Okdx0EVnnyiPn5%2BRTG2&X-Amz-Signature=e01b2ac88f2db9b1d80f4ed54ef3e097b3cadb22b42754943890af9f4a822906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64VMRQW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHA8kyqa2wATcMU1OagE8e%2BA9RMKtuNlph77hxsmWILqAiA%2FQEN5Qho9ZC0CFmoYdRKtFXOUUNbVDRK7Bwv4dB9gMir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM99hOENdvVmd8vyLBKtwDHH6c7HHLBjyUqU2SYoofLL1VjHVlwFuQ42%2BR62rHqje%2FuGWYJl3UwzH%2Baxsb9Fc%2BF%2B8LIiI4uOZ%2F8euJiaZXT%2FQqqwcSPOtd5Aw%2FUTpw6EGNBAOx1pojMAhsPTmb7eb3d93k2P%2Fkg2br0%2Bd2pD0DKEapXDUwsNDbtpB6ycTY92UiyR7hoSrvOJAE2p3R%2F3Wg6VsWQFXv4WJJR08oylgUsy0%2BlvoahFmQseI6xFx9fxuynTYup4vNtpRdl%2FXFoPYJiu4nDoY5kNANOOp3aZS0DFB4kbohsQcptCXpJ5kYFJs9qwPYV7SKqpaYRYbmyC6u2zmGdYhdSeImPbQOX09OyeCpDQdGWVJKm9stfWiM68Oimcyt4BPzq1yld%2F0cryRShA4AbNt9TVJudZ0dD5OpThIg%2FwbFW4DV7azoGc8924bv71Hj91w13CO7%2FB3mKR6gRWy6AxP4377%2Fj8N8GeAPt9EO1QXmAMNxLHb90thRGDSht39viWESWSkii4NjF2%2B2yVl8bTTJeBgIi3yUQCTiPF5yHuYvXd4Rvd5YApFncl5tLayxdKhgzedl2S%2Be2B%2FWdlkCNLtz2Cnkbsx0Yrt%2BRrVkvo%2BrgrPY9nFrW0NUU8CaebAGkXkg8g5jx%2B0wsv7WwwY6pgGIZDzWYTypgWjQCvSIQKhiY89BXd14uYLUpT0TrQQFf2GZFOCnv3ogPBJNeQmbj8c57zrnzkhvYxin5Hab0i93fvXE9bI%2FkhU9lL6ObOt89P7vNF9Xstekhcr8v2R%2FDL8fe2ALw0yyeoekwL5IufSwSJndajXTCZjsmrr0Z8F7RYNGjqXWryZ1qSP03AZrieIlqtu9ZwSB6Okdx0EVnnyiPn5%2BRTG2&X-Amz-Signature=6ad8880324eaef0e30dfcae5f33397a82ad28a46154a3976d6e81cd05bb39744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64VMRQW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHA8kyqa2wATcMU1OagE8e%2BA9RMKtuNlph77hxsmWILqAiA%2FQEN5Qho9ZC0CFmoYdRKtFXOUUNbVDRK7Bwv4dB9gMir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM99hOENdvVmd8vyLBKtwDHH6c7HHLBjyUqU2SYoofLL1VjHVlwFuQ42%2BR62rHqje%2FuGWYJl3UwzH%2Baxsb9Fc%2BF%2B8LIiI4uOZ%2F8euJiaZXT%2FQqqwcSPOtd5Aw%2FUTpw6EGNBAOx1pojMAhsPTmb7eb3d93k2P%2Fkg2br0%2Bd2pD0DKEapXDUwsNDbtpB6ycTY92UiyR7hoSrvOJAE2p3R%2F3Wg6VsWQFXv4WJJR08oylgUsy0%2BlvoahFmQseI6xFx9fxuynTYup4vNtpRdl%2FXFoPYJiu4nDoY5kNANOOp3aZS0DFB4kbohsQcptCXpJ5kYFJs9qwPYV7SKqpaYRYbmyC6u2zmGdYhdSeImPbQOX09OyeCpDQdGWVJKm9stfWiM68Oimcyt4BPzq1yld%2F0cryRShA4AbNt9TVJudZ0dD5OpThIg%2FwbFW4DV7azoGc8924bv71Hj91w13CO7%2FB3mKR6gRWy6AxP4377%2Fj8N8GeAPt9EO1QXmAMNxLHb90thRGDSht39viWESWSkii4NjF2%2B2yVl8bTTJeBgIi3yUQCTiPF5yHuYvXd4Rvd5YApFncl5tLayxdKhgzedl2S%2Be2B%2FWdlkCNLtz2Cnkbsx0Yrt%2BRrVkvo%2BrgrPY9nFrW0NUU8CaebAGkXkg8g5jx%2B0wsv7WwwY6pgGIZDzWYTypgWjQCvSIQKhiY89BXd14uYLUpT0TrQQFf2GZFOCnv3ogPBJNeQmbj8c57zrnzkhvYxin5Hab0i93fvXE9bI%2FkhU9lL6ObOt89P7vNF9Xstekhcr8v2R%2FDL8fe2ALw0yyeoekwL5IufSwSJndajXTCZjsmrr0Z8F7RYNGjqXWryZ1qSP03AZrieIlqtu9ZwSB6Okdx0EVnnyiPn5%2BRTG2&X-Amz-Signature=cb998375decf52b5516a2868e55cf476b970fc189f8ebcf5ebc4ec3e834ab14e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64VMRQW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHA8kyqa2wATcMU1OagE8e%2BA9RMKtuNlph77hxsmWILqAiA%2FQEN5Qho9ZC0CFmoYdRKtFXOUUNbVDRK7Bwv4dB9gMir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM99hOENdvVmd8vyLBKtwDHH6c7HHLBjyUqU2SYoofLL1VjHVlwFuQ42%2BR62rHqje%2FuGWYJl3UwzH%2Baxsb9Fc%2BF%2B8LIiI4uOZ%2F8euJiaZXT%2FQqqwcSPOtd5Aw%2FUTpw6EGNBAOx1pojMAhsPTmb7eb3d93k2P%2Fkg2br0%2Bd2pD0DKEapXDUwsNDbtpB6ycTY92UiyR7hoSrvOJAE2p3R%2F3Wg6VsWQFXv4WJJR08oylgUsy0%2BlvoahFmQseI6xFx9fxuynTYup4vNtpRdl%2FXFoPYJiu4nDoY5kNANOOp3aZS0DFB4kbohsQcptCXpJ5kYFJs9qwPYV7SKqpaYRYbmyC6u2zmGdYhdSeImPbQOX09OyeCpDQdGWVJKm9stfWiM68Oimcyt4BPzq1yld%2F0cryRShA4AbNt9TVJudZ0dD5OpThIg%2FwbFW4DV7azoGc8924bv71Hj91w13CO7%2FB3mKR6gRWy6AxP4377%2Fj8N8GeAPt9EO1QXmAMNxLHb90thRGDSht39viWESWSkii4NjF2%2B2yVl8bTTJeBgIi3yUQCTiPF5yHuYvXd4Rvd5YApFncl5tLayxdKhgzedl2S%2Be2B%2FWdlkCNLtz2Cnkbsx0Yrt%2BRrVkvo%2BrgrPY9nFrW0NUU8CaebAGkXkg8g5jx%2B0wsv7WwwY6pgGIZDzWYTypgWjQCvSIQKhiY89BXd14uYLUpT0TrQQFf2GZFOCnv3ogPBJNeQmbj8c57zrnzkhvYxin5Hab0i93fvXE9bI%2FkhU9lL6ObOt89P7vNF9Xstekhcr8v2R%2FDL8fe2ALw0yyeoekwL5IufSwSJndajXTCZjsmrr0Z8F7RYNGjqXWryZ1qSP03AZrieIlqtu9ZwSB6Okdx0EVnnyiPn5%2BRTG2&X-Amz-Signature=e0b750cc5b229cc3cbf57ef5c24fa31fe3965610a1b669a57175f829878bb101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64VMRQW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHA8kyqa2wATcMU1OagE8e%2BA9RMKtuNlph77hxsmWILqAiA%2FQEN5Qho9ZC0CFmoYdRKtFXOUUNbVDRK7Bwv4dB9gMir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM99hOENdvVmd8vyLBKtwDHH6c7HHLBjyUqU2SYoofLL1VjHVlwFuQ42%2BR62rHqje%2FuGWYJl3UwzH%2Baxsb9Fc%2BF%2B8LIiI4uOZ%2F8euJiaZXT%2FQqqwcSPOtd5Aw%2FUTpw6EGNBAOx1pojMAhsPTmb7eb3d93k2P%2Fkg2br0%2Bd2pD0DKEapXDUwsNDbtpB6ycTY92UiyR7hoSrvOJAE2p3R%2F3Wg6VsWQFXv4WJJR08oylgUsy0%2BlvoahFmQseI6xFx9fxuynTYup4vNtpRdl%2FXFoPYJiu4nDoY5kNANOOp3aZS0DFB4kbohsQcptCXpJ5kYFJs9qwPYV7SKqpaYRYbmyC6u2zmGdYhdSeImPbQOX09OyeCpDQdGWVJKm9stfWiM68Oimcyt4BPzq1yld%2F0cryRShA4AbNt9TVJudZ0dD5OpThIg%2FwbFW4DV7azoGc8924bv71Hj91w13CO7%2FB3mKR6gRWy6AxP4377%2Fj8N8GeAPt9EO1QXmAMNxLHb90thRGDSht39viWESWSkii4NjF2%2B2yVl8bTTJeBgIi3yUQCTiPF5yHuYvXd4Rvd5YApFncl5tLayxdKhgzedl2S%2Be2B%2FWdlkCNLtz2Cnkbsx0Yrt%2BRrVkvo%2BrgrPY9nFrW0NUU8CaebAGkXkg8g5jx%2B0wsv7WwwY6pgGIZDzWYTypgWjQCvSIQKhiY89BXd14uYLUpT0TrQQFf2GZFOCnv3ogPBJNeQmbj8c57zrnzkhvYxin5Hab0i93fvXE9bI%2FkhU9lL6ObOt89P7vNF9Xstekhcr8v2R%2FDL8fe2ALw0yyeoekwL5IufSwSJndajXTCZjsmrr0Z8F7RYNGjqXWryZ1qSP03AZrieIlqtu9ZwSB6Okdx0EVnnyiPn5%2BRTG2&X-Amz-Signature=0f4d63df61c8f4d9cef40aafaea4ffd54b05d3c1d4aaf3a57d13aeb7c45212ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T64VMRQW%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T025216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHA8kyqa2wATcMU1OagE8e%2BA9RMKtuNlph77hxsmWILqAiA%2FQEN5Qho9ZC0CFmoYdRKtFXOUUNbVDRK7Bwv4dB9gMir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM99hOENdvVmd8vyLBKtwDHH6c7HHLBjyUqU2SYoofLL1VjHVlwFuQ42%2BR62rHqje%2FuGWYJl3UwzH%2Baxsb9Fc%2BF%2B8LIiI4uOZ%2F8euJiaZXT%2FQqqwcSPOtd5Aw%2FUTpw6EGNBAOx1pojMAhsPTmb7eb3d93k2P%2Fkg2br0%2Bd2pD0DKEapXDUwsNDbtpB6ycTY92UiyR7hoSrvOJAE2p3R%2F3Wg6VsWQFXv4WJJR08oylgUsy0%2BlvoahFmQseI6xFx9fxuynTYup4vNtpRdl%2FXFoPYJiu4nDoY5kNANOOp3aZS0DFB4kbohsQcptCXpJ5kYFJs9qwPYV7SKqpaYRYbmyC6u2zmGdYhdSeImPbQOX09OyeCpDQdGWVJKm9stfWiM68Oimcyt4BPzq1yld%2F0cryRShA4AbNt9TVJudZ0dD5OpThIg%2FwbFW4DV7azoGc8924bv71Hj91w13CO7%2FB3mKR6gRWy6AxP4377%2Fj8N8GeAPt9EO1QXmAMNxLHb90thRGDSht39viWESWSkii4NjF2%2B2yVl8bTTJeBgIi3yUQCTiPF5yHuYvXd4Rvd5YApFncl5tLayxdKhgzedl2S%2Be2B%2FWdlkCNLtz2Cnkbsx0Yrt%2BRrVkvo%2BrgrPY9nFrW0NUU8CaebAGkXkg8g5jx%2B0wsv7WwwY6pgGIZDzWYTypgWjQCvSIQKhiY89BXd14uYLUpT0TrQQFf2GZFOCnv3ogPBJNeQmbj8c57zrnzkhvYxin5Hab0i93fvXE9bI%2FkhU9lL6ObOt89P7vNF9Xstekhcr8v2R%2FDL8fe2ALw0yyeoekwL5IufSwSJndajXTCZjsmrr0Z8F7RYNGjqXWryZ1qSP03AZrieIlqtu9ZwSB6Okdx0EVnnyiPn5%2BRTG2&X-Amz-Signature=e999978a57fc45cf8c73f8815502954259a9966e533711c785571887424cb480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
