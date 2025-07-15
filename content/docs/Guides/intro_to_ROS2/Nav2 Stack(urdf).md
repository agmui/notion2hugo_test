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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BSUGWBD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T191000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB92IkdHjqn5O4MvuOe7mF23C5rVaIPrt%2BRw%2Bin38MbVAiB8uRxLCI9H6IbeSazMK7c%2FO1i45uFMIxF8RmlZ8ciyzir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMvTEcAwp0TXR1Q%2F%2BTKtwD9%2B9ehkPYKWZinQZJtmReGbF2mIjqmMDPuLgjMPYdqCB0pcP3GOnebzCUiwc7iszvytcTiyH91Rnz4txCdySX%2BWSL8XXKMrkfdnIidPn4LnXqRXOSCoiuZty1L%2BlTDQ2VdOfpfaYyvw4QaXRLBnd%2BhiA9%2FN%2B3J%2BKdvhVspP1RDJ1RyCnc0B08eJZoPMeqSWw%2BplOTL8JzRcA%2BFlsxLynMWWvEwMR%2BtXOEzFYqZUxVytHyGpb0uFr5g397fwWfpHpO28%2FekU42J13yjZy%2FpP8qp261uJzZd7Wl97NcZ22SbY9erbjTcSKr%2BpH7Zu0hpfdie90%2BFEaEBoYL9kKFkpcFWcOOU2Ao9LCrok1kwcow4NXlsIe30YxKoY202y0QU1VQDBCsgCiM7onjg29TZ3%2FXzmAhOMeU616Na4p%2BBHXha7FShNfMaHiTAdIREME%2B1qOvdAj7fLzySla9D%2BB%2F4DzF%2F6TQvSrwu9d6qL%2FdSz7SwtbgZ%2BYXELQFX89iIUmEghhya8vi89P57RR%2F0gIm%2B1dXDgj3MeKCm3pZk570N78HkRgaXK%2Bs66ZtPrsvSTHmquRPJETC9huzOLv8gD9lQ7WYWDxwJtEl7ztdB5DyPeEgsKcmIuBvwZft%2B9h39mAw8IXawwY6pgF9zULjr7p%2FTeP8EWSKC03POMQu0qaHDGJV4Ikxb%2BJiu2cbd67ahjN216g4dpX285DnJmvTuMk0e%2FZ5NggjdCNsyY5AxJhTusw56YtOfhCTcj8Cx7WNF444zjkszm6%2FDL%2BrnW6W4HWmLPHNXNbocSHysR3sscJzFTx8G1gx8uEwRxcR85JpRoFuMhJ%2B3XiDXl2BMPi4EYNop8poZQMGwNg3dbkLMlps&X-Amz-Signature=10ef433e573a5dbd9f1526e118c98cd85d60d84151b46ddf83f2c2a052001703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BSUGWBD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T191000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB92IkdHjqn5O4MvuOe7mF23C5rVaIPrt%2BRw%2Bin38MbVAiB8uRxLCI9H6IbeSazMK7c%2FO1i45uFMIxF8RmlZ8ciyzir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMvTEcAwp0TXR1Q%2F%2BTKtwD9%2B9ehkPYKWZinQZJtmReGbF2mIjqmMDPuLgjMPYdqCB0pcP3GOnebzCUiwc7iszvytcTiyH91Rnz4txCdySX%2BWSL8XXKMrkfdnIidPn4LnXqRXOSCoiuZty1L%2BlTDQ2VdOfpfaYyvw4QaXRLBnd%2BhiA9%2FN%2B3J%2BKdvhVspP1RDJ1RyCnc0B08eJZoPMeqSWw%2BplOTL8JzRcA%2BFlsxLynMWWvEwMR%2BtXOEzFYqZUxVytHyGpb0uFr5g397fwWfpHpO28%2FekU42J13yjZy%2FpP8qp261uJzZd7Wl97NcZ22SbY9erbjTcSKr%2BpH7Zu0hpfdie90%2BFEaEBoYL9kKFkpcFWcOOU2Ao9LCrok1kwcow4NXlsIe30YxKoY202y0QU1VQDBCsgCiM7onjg29TZ3%2FXzmAhOMeU616Na4p%2BBHXha7FShNfMaHiTAdIREME%2B1qOvdAj7fLzySla9D%2BB%2F4DzF%2F6TQvSrwu9d6qL%2FdSz7SwtbgZ%2BYXELQFX89iIUmEghhya8vi89P57RR%2F0gIm%2B1dXDgj3MeKCm3pZk570N78HkRgaXK%2Bs66ZtPrsvSTHmquRPJETC9huzOLv8gD9lQ7WYWDxwJtEl7ztdB5DyPeEgsKcmIuBvwZft%2B9h39mAw8IXawwY6pgF9zULjr7p%2FTeP8EWSKC03POMQu0qaHDGJV4Ikxb%2BJiu2cbd67ahjN216g4dpX285DnJmvTuMk0e%2FZ5NggjdCNsyY5AxJhTusw56YtOfhCTcj8Cx7WNF444zjkszm6%2FDL%2BrnW6W4HWmLPHNXNbocSHysR3sscJzFTx8G1gx8uEwRxcR85JpRoFuMhJ%2B3XiDXl2BMPi4EYNop8poZQMGwNg3dbkLMlps&X-Amz-Signature=23c9f3ec6088a3be73341c33e75ac222d6b45941908a0ddd06faf8f8bcaa9c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BSUGWBD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T191000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB92IkdHjqn5O4MvuOe7mF23C5rVaIPrt%2BRw%2Bin38MbVAiB8uRxLCI9H6IbeSazMK7c%2FO1i45uFMIxF8RmlZ8ciyzir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMvTEcAwp0TXR1Q%2F%2BTKtwD9%2B9ehkPYKWZinQZJtmReGbF2mIjqmMDPuLgjMPYdqCB0pcP3GOnebzCUiwc7iszvytcTiyH91Rnz4txCdySX%2BWSL8XXKMrkfdnIidPn4LnXqRXOSCoiuZty1L%2BlTDQ2VdOfpfaYyvw4QaXRLBnd%2BhiA9%2FN%2B3J%2BKdvhVspP1RDJ1RyCnc0B08eJZoPMeqSWw%2BplOTL8JzRcA%2BFlsxLynMWWvEwMR%2BtXOEzFYqZUxVytHyGpb0uFr5g397fwWfpHpO28%2FekU42J13yjZy%2FpP8qp261uJzZd7Wl97NcZ22SbY9erbjTcSKr%2BpH7Zu0hpfdie90%2BFEaEBoYL9kKFkpcFWcOOU2Ao9LCrok1kwcow4NXlsIe30YxKoY202y0QU1VQDBCsgCiM7onjg29TZ3%2FXzmAhOMeU616Na4p%2BBHXha7FShNfMaHiTAdIREME%2B1qOvdAj7fLzySla9D%2BB%2F4DzF%2F6TQvSrwu9d6qL%2FdSz7SwtbgZ%2BYXELQFX89iIUmEghhya8vi89P57RR%2F0gIm%2B1dXDgj3MeKCm3pZk570N78HkRgaXK%2Bs66ZtPrsvSTHmquRPJETC9huzOLv8gD9lQ7WYWDxwJtEl7ztdB5DyPeEgsKcmIuBvwZft%2B9h39mAw8IXawwY6pgF9zULjr7p%2FTeP8EWSKC03POMQu0qaHDGJV4Ikxb%2BJiu2cbd67ahjN216g4dpX285DnJmvTuMk0e%2FZ5NggjdCNsyY5AxJhTusw56YtOfhCTcj8Cx7WNF444zjkszm6%2FDL%2BrnW6W4HWmLPHNXNbocSHysR3sscJzFTx8G1gx8uEwRxcR85JpRoFuMhJ%2B3XiDXl2BMPi4EYNop8poZQMGwNg3dbkLMlps&X-Amz-Signature=641307c8909b0858992bb7ab7b8db80d5b85ea905d1b6b2985477cd20404193e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BSUGWBD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T191000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB92IkdHjqn5O4MvuOe7mF23C5rVaIPrt%2BRw%2Bin38MbVAiB8uRxLCI9H6IbeSazMK7c%2FO1i45uFMIxF8RmlZ8ciyzir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMvTEcAwp0TXR1Q%2F%2BTKtwD9%2B9ehkPYKWZinQZJtmReGbF2mIjqmMDPuLgjMPYdqCB0pcP3GOnebzCUiwc7iszvytcTiyH91Rnz4txCdySX%2BWSL8XXKMrkfdnIidPn4LnXqRXOSCoiuZty1L%2BlTDQ2VdOfpfaYyvw4QaXRLBnd%2BhiA9%2FN%2B3J%2BKdvhVspP1RDJ1RyCnc0B08eJZoPMeqSWw%2BplOTL8JzRcA%2BFlsxLynMWWvEwMR%2BtXOEzFYqZUxVytHyGpb0uFr5g397fwWfpHpO28%2FekU42J13yjZy%2FpP8qp261uJzZd7Wl97NcZ22SbY9erbjTcSKr%2BpH7Zu0hpfdie90%2BFEaEBoYL9kKFkpcFWcOOU2Ao9LCrok1kwcow4NXlsIe30YxKoY202y0QU1VQDBCsgCiM7onjg29TZ3%2FXzmAhOMeU616Na4p%2BBHXha7FShNfMaHiTAdIREME%2B1qOvdAj7fLzySla9D%2BB%2F4DzF%2F6TQvSrwu9d6qL%2FdSz7SwtbgZ%2BYXELQFX89iIUmEghhya8vi89P57RR%2F0gIm%2B1dXDgj3MeKCm3pZk570N78HkRgaXK%2Bs66ZtPrsvSTHmquRPJETC9huzOLv8gD9lQ7WYWDxwJtEl7ztdB5DyPeEgsKcmIuBvwZft%2B9h39mAw8IXawwY6pgF9zULjr7p%2FTeP8EWSKC03POMQu0qaHDGJV4Ikxb%2BJiu2cbd67ahjN216g4dpX285DnJmvTuMk0e%2FZ5NggjdCNsyY5AxJhTusw56YtOfhCTcj8Cx7WNF444zjkszm6%2FDL%2BrnW6W4HWmLPHNXNbocSHysR3sscJzFTx8G1gx8uEwRxcR85JpRoFuMhJ%2B3XiDXl2BMPi4EYNop8poZQMGwNg3dbkLMlps&X-Amz-Signature=463a3ec07e88bf539e41679be739e6fd27b7feee7f50d37a6e06ddfc8903b9a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BSUGWBD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T191000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB92IkdHjqn5O4MvuOe7mF23C5rVaIPrt%2BRw%2Bin38MbVAiB8uRxLCI9H6IbeSazMK7c%2FO1i45uFMIxF8RmlZ8ciyzir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMvTEcAwp0TXR1Q%2F%2BTKtwD9%2B9ehkPYKWZinQZJtmReGbF2mIjqmMDPuLgjMPYdqCB0pcP3GOnebzCUiwc7iszvytcTiyH91Rnz4txCdySX%2BWSL8XXKMrkfdnIidPn4LnXqRXOSCoiuZty1L%2BlTDQ2VdOfpfaYyvw4QaXRLBnd%2BhiA9%2FN%2B3J%2BKdvhVspP1RDJ1RyCnc0B08eJZoPMeqSWw%2BplOTL8JzRcA%2BFlsxLynMWWvEwMR%2BtXOEzFYqZUxVytHyGpb0uFr5g397fwWfpHpO28%2FekU42J13yjZy%2FpP8qp261uJzZd7Wl97NcZ22SbY9erbjTcSKr%2BpH7Zu0hpfdie90%2BFEaEBoYL9kKFkpcFWcOOU2Ao9LCrok1kwcow4NXlsIe30YxKoY202y0QU1VQDBCsgCiM7onjg29TZ3%2FXzmAhOMeU616Na4p%2BBHXha7FShNfMaHiTAdIREME%2B1qOvdAj7fLzySla9D%2BB%2F4DzF%2F6TQvSrwu9d6qL%2FdSz7SwtbgZ%2BYXELQFX89iIUmEghhya8vi89P57RR%2F0gIm%2B1dXDgj3MeKCm3pZk570N78HkRgaXK%2Bs66ZtPrsvSTHmquRPJETC9huzOLv8gD9lQ7WYWDxwJtEl7ztdB5DyPeEgsKcmIuBvwZft%2B9h39mAw8IXawwY6pgF9zULjr7p%2FTeP8EWSKC03POMQu0qaHDGJV4Ikxb%2BJiu2cbd67ahjN216g4dpX285DnJmvTuMk0e%2FZ5NggjdCNsyY5AxJhTusw56YtOfhCTcj8Cx7WNF444zjkszm6%2FDL%2BrnW6W4HWmLPHNXNbocSHysR3sscJzFTx8G1gx8uEwRxcR85JpRoFuMhJ%2B3XiDXl2BMPi4EYNop8poZQMGwNg3dbkLMlps&X-Amz-Signature=31f09e1d3bd47e23cc736284934f9fdf216ef42ff757fc9a3dd645f3ef063354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BSUGWBD%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T191000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB92IkdHjqn5O4MvuOe7mF23C5rVaIPrt%2BRw%2Bin38MbVAiB8uRxLCI9H6IbeSazMK7c%2FO1i45uFMIxF8RmlZ8ciyzir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMvTEcAwp0TXR1Q%2F%2BTKtwD9%2B9ehkPYKWZinQZJtmReGbF2mIjqmMDPuLgjMPYdqCB0pcP3GOnebzCUiwc7iszvytcTiyH91Rnz4txCdySX%2BWSL8XXKMrkfdnIidPn4LnXqRXOSCoiuZty1L%2BlTDQ2VdOfpfaYyvw4QaXRLBnd%2BhiA9%2FN%2B3J%2BKdvhVspP1RDJ1RyCnc0B08eJZoPMeqSWw%2BplOTL8JzRcA%2BFlsxLynMWWvEwMR%2BtXOEzFYqZUxVytHyGpb0uFr5g397fwWfpHpO28%2FekU42J13yjZy%2FpP8qp261uJzZd7Wl97NcZ22SbY9erbjTcSKr%2BpH7Zu0hpfdie90%2BFEaEBoYL9kKFkpcFWcOOU2Ao9LCrok1kwcow4NXlsIe30YxKoY202y0QU1VQDBCsgCiM7onjg29TZ3%2FXzmAhOMeU616Na4p%2BBHXha7FShNfMaHiTAdIREME%2B1qOvdAj7fLzySla9D%2BB%2F4DzF%2F6TQvSrwu9d6qL%2FdSz7SwtbgZ%2BYXELQFX89iIUmEghhya8vi89P57RR%2F0gIm%2B1dXDgj3MeKCm3pZk570N78HkRgaXK%2Bs66ZtPrsvSTHmquRPJETC9huzOLv8gD9lQ7WYWDxwJtEl7ztdB5DyPeEgsKcmIuBvwZft%2B9h39mAw8IXawwY6pgF9zULjr7p%2FTeP8EWSKC03POMQu0qaHDGJV4Ikxb%2BJiu2cbd67ahjN216g4dpX285DnJmvTuMk0e%2FZ5NggjdCNsyY5AxJhTusw56YtOfhCTcj8Cx7WNF444zjkszm6%2FDL%2BrnW6W4HWmLPHNXNbocSHysR3sscJzFTx8G1gx8uEwRxcR85JpRoFuMhJ%2B3XiDXl2BMPi4EYNop8poZQMGwNg3dbkLMlps&X-Amz-Signature=be9bbe0d2534e5e897f56b8cc379c912548bd40557dd5f5bf4b39f75d949fb41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
