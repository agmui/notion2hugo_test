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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKP6OJ2%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJJPUQX4I37hQz%2BMeJ72RUuXDO1%2FjVQD%2BFDZF8UVbVUwIhAJorgoOcLcIDwRL5%2Bcj5cG%2BtnDryOAfSi38qaLM%2BKITxKv8DCH4QABoMNjM3NDIzMTgzODA1IgzzWLB78R0e1zS2N7sq3AOsDxPj7e8bFFlavZSKva2%2BoTyIa7B2U7MAmc3wDbP1X%2Bq4WPfcOlYZxYRJRoCIMG08gFgWkE%2BPMVAFGPZWwTbJsp1z6tdiQJXRu3V2GRfFmvK7GO2AtU1uKR6%2FupF7hNPKjYUp1VtRRYT%2Blt3zyODAqzVO3Ebwu33FgaUMBIGGOtSmsIzIV4pD2DuaFXTnZzxRtqXqXkqT7H7%2BTkg1wlu2UkMXUCJXI%2FfMS%2FsvTRzDWbafO8VRkYypNmCDelXRoAo47mX3qZpnQRp2LBl9STiLmcE3kO8WHXJyRgVmXb744tQwv6gGyqh91VpbPAuBzL9jXwlzWxIRiPeLcli0zcVR56I3HnRmqNwfO0zSDRMPzcLR9qbk6ja15IoU2Ntm2%2BALINPu3OoyZYLn0xM4em1pywyIYRsVoiNdxW3sPX97Dk%2Bv2COm8qSJOpwzDZtk0lRd2A16vGZ2i8klXQTXVUVbNiwKtCxHoy%2BC0b8VpQbXU7w86NNUInwIT2WTRxA1fOifTpx%2FU1i%2Fhu2ImdDA5wXWD4hf50b6qz12ZBq4217E1hRR%2FLGIJ%2FmvIDcI%2FRWIF9W25CPpFsP6kM57AHe7%2FmLBwrAb1wOK%2B%2FOhZ%2FYjTeJQD2tYOqMjHS%2FQxpgQ5DCQ5t3BBjqkAae3vu8VmCWbtbkGA3RbDpoo8wea%2BTIssxbf5CnMMK%2B7h4Rrb%2BBjOd60WOf5pP%2FSYxFGa%2Bt15Xs0GeWAJ9Wz%2BuUPZYHWMgkMw651Bj%2F0UJ%2BUhMP4Xw%2B6HLNQCkRSGgxTNZ253eNgpqrlSws3eR27zwbPf4Fx2GAxrJUp4LmiVzZVwWiswtSSWYc0pb2Bgm%2BZ5WtUPDr9AKL43dkl68%2BxRWwdcHNm&X-Amz-Signature=fdbc365c222073d4d522cfdac22cd7e03782402d5d5a17097d7b1497bf73ca98&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKP6OJ2%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJJPUQX4I37hQz%2BMeJ72RUuXDO1%2FjVQD%2BFDZF8UVbVUwIhAJorgoOcLcIDwRL5%2Bcj5cG%2BtnDryOAfSi38qaLM%2BKITxKv8DCH4QABoMNjM3NDIzMTgzODA1IgzzWLB78R0e1zS2N7sq3AOsDxPj7e8bFFlavZSKva2%2BoTyIa7B2U7MAmc3wDbP1X%2Bq4WPfcOlYZxYRJRoCIMG08gFgWkE%2BPMVAFGPZWwTbJsp1z6tdiQJXRu3V2GRfFmvK7GO2AtU1uKR6%2FupF7hNPKjYUp1VtRRYT%2Blt3zyODAqzVO3Ebwu33FgaUMBIGGOtSmsIzIV4pD2DuaFXTnZzxRtqXqXkqT7H7%2BTkg1wlu2UkMXUCJXI%2FfMS%2FsvTRzDWbafO8VRkYypNmCDelXRoAo47mX3qZpnQRp2LBl9STiLmcE3kO8WHXJyRgVmXb744tQwv6gGyqh91VpbPAuBzL9jXwlzWxIRiPeLcli0zcVR56I3HnRmqNwfO0zSDRMPzcLR9qbk6ja15IoU2Ntm2%2BALINPu3OoyZYLn0xM4em1pywyIYRsVoiNdxW3sPX97Dk%2Bv2COm8qSJOpwzDZtk0lRd2A16vGZ2i8klXQTXVUVbNiwKtCxHoy%2BC0b8VpQbXU7w86NNUInwIT2WTRxA1fOifTpx%2FU1i%2Fhu2ImdDA5wXWD4hf50b6qz12ZBq4217E1hRR%2FLGIJ%2FmvIDcI%2FRWIF9W25CPpFsP6kM57AHe7%2FmLBwrAb1wOK%2B%2FOhZ%2FYjTeJQD2tYOqMjHS%2FQxpgQ5DCQ5t3BBjqkAae3vu8VmCWbtbkGA3RbDpoo8wea%2BTIssxbf5CnMMK%2B7h4Rrb%2BBjOd60WOf5pP%2FSYxFGa%2Bt15Xs0GeWAJ9Wz%2BuUPZYHWMgkMw651Bj%2F0UJ%2BUhMP4Xw%2B6HLNQCkRSGgxTNZ253eNgpqrlSws3eR27zwbPf4Fx2GAxrJUp4LmiVzZVwWiswtSSWYc0pb2Bgm%2BZ5WtUPDr9AKL43dkl68%2BxRWwdcHNm&X-Amz-Signature=1a7323bfd13cff97b07f1dcc2e65d9262221b22abf02f5d9d21cdc82da9cff9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKP6OJ2%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJJPUQX4I37hQz%2BMeJ72RUuXDO1%2FjVQD%2BFDZF8UVbVUwIhAJorgoOcLcIDwRL5%2Bcj5cG%2BtnDryOAfSi38qaLM%2BKITxKv8DCH4QABoMNjM3NDIzMTgzODA1IgzzWLB78R0e1zS2N7sq3AOsDxPj7e8bFFlavZSKva2%2BoTyIa7B2U7MAmc3wDbP1X%2Bq4WPfcOlYZxYRJRoCIMG08gFgWkE%2BPMVAFGPZWwTbJsp1z6tdiQJXRu3V2GRfFmvK7GO2AtU1uKR6%2FupF7hNPKjYUp1VtRRYT%2Blt3zyODAqzVO3Ebwu33FgaUMBIGGOtSmsIzIV4pD2DuaFXTnZzxRtqXqXkqT7H7%2BTkg1wlu2UkMXUCJXI%2FfMS%2FsvTRzDWbafO8VRkYypNmCDelXRoAo47mX3qZpnQRp2LBl9STiLmcE3kO8WHXJyRgVmXb744tQwv6gGyqh91VpbPAuBzL9jXwlzWxIRiPeLcli0zcVR56I3HnRmqNwfO0zSDRMPzcLR9qbk6ja15IoU2Ntm2%2BALINPu3OoyZYLn0xM4em1pywyIYRsVoiNdxW3sPX97Dk%2Bv2COm8qSJOpwzDZtk0lRd2A16vGZ2i8klXQTXVUVbNiwKtCxHoy%2BC0b8VpQbXU7w86NNUInwIT2WTRxA1fOifTpx%2FU1i%2Fhu2ImdDA5wXWD4hf50b6qz12ZBq4217E1hRR%2FLGIJ%2FmvIDcI%2FRWIF9W25CPpFsP6kM57AHe7%2FmLBwrAb1wOK%2B%2FOhZ%2FYjTeJQD2tYOqMjHS%2FQxpgQ5DCQ5t3BBjqkAae3vu8VmCWbtbkGA3RbDpoo8wea%2BTIssxbf5CnMMK%2B7h4Rrb%2BBjOd60WOf5pP%2FSYxFGa%2Bt15Xs0GeWAJ9Wz%2BuUPZYHWMgkMw651Bj%2F0UJ%2BUhMP4Xw%2B6HLNQCkRSGgxTNZ253eNgpqrlSws3eR27zwbPf4Fx2GAxrJUp4LmiVzZVwWiswtSSWYc0pb2Bgm%2BZ5WtUPDr9AKL43dkl68%2BxRWwdcHNm&X-Amz-Signature=77c33fdac7c97e6b45976d612870f214693a03acc52e6b1ecf4197832de72169&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKP6OJ2%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJJPUQX4I37hQz%2BMeJ72RUuXDO1%2FjVQD%2BFDZF8UVbVUwIhAJorgoOcLcIDwRL5%2Bcj5cG%2BtnDryOAfSi38qaLM%2BKITxKv8DCH4QABoMNjM3NDIzMTgzODA1IgzzWLB78R0e1zS2N7sq3AOsDxPj7e8bFFlavZSKva2%2BoTyIa7B2U7MAmc3wDbP1X%2Bq4WPfcOlYZxYRJRoCIMG08gFgWkE%2BPMVAFGPZWwTbJsp1z6tdiQJXRu3V2GRfFmvK7GO2AtU1uKR6%2FupF7hNPKjYUp1VtRRYT%2Blt3zyODAqzVO3Ebwu33FgaUMBIGGOtSmsIzIV4pD2DuaFXTnZzxRtqXqXkqT7H7%2BTkg1wlu2UkMXUCJXI%2FfMS%2FsvTRzDWbafO8VRkYypNmCDelXRoAo47mX3qZpnQRp2LBl9STiLmcE3kO8WHXJyRgVmXb744tQwv6gGyqh91VpbPAuBzL9jXwlzWxIRiPeLcli0zcVR56I3HnRmqNwfO0zSDRMPzcLR9qbk6ja15IoU2Ntm2%2BALINPu3OoyZYLn0xM4em1pywyIYRsVoiNdxW3sPX97Dk%2Bv2COm8qSJOpwzDZtk0lRd2A16vGZ2i8klXQTXVUVbNiwKtCxHoy%2BC0b8VpQbXU7w86NNUInwIT2WTRxA1fOifTpx%2FU1i%2Fhu2ImdDA5wXWD4hf50b6qz12ZBq4217E1hRR%2FLGIJ%2FmvIDcI%2FRWIF9W25CPpFsP6kM57AHe7%2FmLBwrAb1wOK%2B%2FOhZ%2FYjTeJQD2tYOqMjHS%2FQxpgQ5DCQ5t3BBjqkAae3vu8VmCWbtbkGA3RbDpoo8wea%2BTIssxbf5CnMMK%2B7h4Rrb%2BBjOd60WOf5pP%2FSYxFGa%2Bt15Xs0GeWAJ9Wz%2BuUPZYHWMgkMw651Bj%2F0UJ%2BUhMP4Xw%2B6HLNQCkRSGgxTNZ253eNgpqrlSws3eR27zwbPf4Fx2GAxrJUp4LmiVzZVwWiswtSSWYc0pb2Bgm%2BZ5WtUPDr9AKL43dkl68%2BxRWwdcHNm&X-Amz-Signature=8610b083921e81d65cfde3c05f2644a32b385d82f36b65b7deab107624d24b24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKP6OJ2%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJJPUQX4I37hQz%2BMeJ72RUuXDO1%2FjVQD%2BFDZF8UVbVUwIhAJorgoOcLcIDwRL5%2Bcj5cG%2BtnDryOAfSi38qaLM%2BKITxKv8DCH4QABoMNjM3NDIzMTgzODA1IgzzWLB78R0e1zS2N7sq3AOsDxPj7e8bFFlavZSKva2%2BoTyIa7B2U7MAmc3wDbP1X%2Bq4WPfcOlYZxYRJRoCIMG08gFgWkE%2BPMVAFGPZWwTbJsp1z6tdiQJXRu3V2GRfFmvK7GO2AtU1uKR6%2FupF7hNPKjYUp1VtRRYT%2Blt3zyODAqzVO3Ebwu33FgaUMBIGGOtSmsIzIV4pD2DuaFXTnZzxRtqXqXkqT7H7%2BTkg1wlu2UkMXUCJXI%2FfMS%2FsvTRzDWbafO8VRkYypNmCDelXRoAo47mX3qZpnQRp2LBl9STiLmcE3kO8WHXJyRgVmXb744tQwv6gGyqh91VpbPAuBzL9jXwlzWxIRiPeLcli0zcVR56I3HnRmqNwfO0zSDRMPzcLR9qbk6ja15IoU2Ntm2%2BALINPu3OoyZYLn0xM4em1pywyIYRsVoiNdxW3sPX97Dk%2Bv2COm8qSJOpwzDZtk0lRd2A16vGZ2i8klXQTXVUVbNiwKtCxHoy%2BC0b8VpQbXU7w86NNUInwIT2WTRxA1fOifTpx%2FU1i%2Fhu2ImdDA5wXWD4hf50b6qz12ZBq4217E1hRR%2FLGIJ%2FmvIDcI%2FRWIF9W25CPpFsP6kM57AHe7%2FmLBwrAb1wOK%2B%2FOhZ%2FYjTeJQD2tYOqMjHS%2FQxpgQ5DCQ5t3BBjqkAae3vu8VmCWbtbkGA3RbDpoo8wea%2BTIssxbf5CnMMK%2B7h4Rrb%2BBjOd60WOf5pP%2FSYxFGa%2Bt15Xs0GeWAJ9Wz%2BuUPZYHWMgkMw651Bj%2F0UJ%2BUhMP4Xw%2B6HLNQCkRSGgxTNZ253eNgpqrlSws3eR27zwbPf4Fx2GAxrJUp4LmiVzZVwWiswtSSWYc0pb2Bgm%2BZ5WtUPDr9AKL43dkl68%2BxRWwdcHNm&X-Amz-Signature=e503352c1c6f73df9b5358da1e437bf9dd3f22e55e1b85291cc92e041b7942f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKP6OJ2%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJJPUQX4I37hQz%2BMeJ72RUuXDO1%2FjVQD%2BFDZF8UVbVUwIhAJorgoOcLcIDwRL5%2Bcj5cG%2BtnDryOAfSi38qaLM%2BKITxKv8DCH4QABoMNjM3NDIzMTgzODA1IgzzWLB78R0e1zS2N7sq3AOsDxPj7e8bFFlavZSKva2%2BoTyIa7B2U7MAmc3wDbP1X%2Bq4WPfcOlYZxYRJRoCIMG08gFgWkE%2BPMVAFGPZWwTbJsp1z6tdiQJXRu3V2GRfFmvK7GO2AtU1uKR6%2FupF7hNPKjYUp1VtRRYT%2Blt3zyODAqzVO3Ebwu33FgaUMBIGGOtSmsIzIV4pD2DuaFXTnZzxRtqXqXkqT7H7%2BTkg1wlu2UkMXUCJXI%2FfMS%2FsvTRzDWbafO8VRkYypNmCDelXRoAo47mX3qZpnQRp2LBl9STiLmcE3kO8WHXJyRgVmXb744tQwv6gGyqh91VpbPAuBzL9jXwlzWxIRiPeLcli0zcVR56I3HnRmqNwfO0zSDRMPzcLR9qbk6ja15IoU2Ntm2%2BALINPu3OoyZYLn0xM4em1pywyIYRsVoiNdxW3sPX97Dk%2Bv2COm8qSJOpwzDZtk0lRd2A16vGZ2i8klXQTXVUVbNiwKtCxHoy%2BC0b8VpQbXU7w86NNUInwIT2WTRxA1fOifTpx%2FU1i%2Fhu2ImdDA5wXWD4hf50b6qz12ZBq4217E1hRR%2FLGIJ%2FmvIDcI%2FRWIF9W25CPpFsP6kM57AHe7%2FmLBwrAb1wOK%2B%2FOhZ%2FYjTeJQD2tYOqMjHS%2FQxpgQ5DCQ5t3BBjqkAae3vu8VmCWbtbkGA3RbDpoo8wea%2BTIssxbf5CnMMK%2B7h4Rrb%2BBjOd60WOf5pP%2FSYxFGa%2Bt15Xs0GeWAJ9Wz%2BuUPZYHWMgkMw651Bj%2F0UJ%2BUhMP4Xw%2B6HLNQCkRSGgxTNZ253eNgpqrlSws3eR27zwbPf4Fx2GAxrJUp4LmiVzZVwWiswtSSWYc0pb2Bgm%2BZ5WtUPDr9AKL43dkl68%2BxRWwdcHNm&X-Amz-Signature=d4123aad722561d3f222cf404a040cad7e2aeee69bcc6c097730800a1fcd5b6b&X-Amz-SignedHeaders=host&x-id=GetObject)
