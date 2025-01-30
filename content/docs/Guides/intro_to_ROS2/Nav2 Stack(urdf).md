---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MGVFY2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWD0kDStP81VciWG%2Ba60z4Qiw6ZkFhGjmohS6EQ2U13AiBEaqWBxaabb1ze%2BLaMSJTtfcGhRLmEVHeX28tthFPPoyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Dq4zVSIxz9P2wIQKtwD8fPOWe9rFo5qIpLWDkPgPPjpDy%2FTmPLhyub%2F5SIPhzK8DAofTDg3EhylTrXr1DuLmGjGpIwncLcdDSbUJYjL3L%2B6VmvIm5R5N46NBRksq9RB3hjw5Xpdvjh1%2BdC%2F1gBsGkcf%2BZweKzVZpRkqQDTKghK2CJOTvJ%2BQAy%2FGqOXTrC86wHoDJmeuZ9ayRsaJkIDkRkLwJKj7P4C%2FXET34VPa9mNQgH2%2F4jsIPfY2G4Ylhw4DPSHPy3Y0aGRJ28RokncFvFkfohPqrkek34fi%2BsP7USzEKY94HRq%2BhCm%2BY7fR2lgds5i1hvFrdM0%2Bit8C8PvNZ%2FI5p0UmQkRD3HPpgR7Z1jNWDoI8tEBPBWpD85pTsgT9ZudAO0gykjUQj472OJaOhz3uVbJn4DigaVyEJsPU93dhIc69RzUZfdzTSKNAeAHrY6jTfsUv7U4phn63aSSXqc0XqPsZ0inZmdUjs71MGe5NBFx1g%2FEr9G7Xk86NtKic4Gq1YX80n8p64NQY6v1aM5R4bnIe30fpVe92oPjdEfkbh8KkUZLbh1IftzN5zgmC3tnhPbDjeVmAZoF94yst1tGWC3fvA%2FQN4lGhOMtKMfljH1EQOWEtpMcg0DFdAEuyD3R9BbfHNB7F1%2F0wnuLvvAY6pgE59%2BT0O%2FR4lwYM2e0gtW1ImuOgQATlDKYtrYvCiz44sZNvD4Mxtn0spQtQrOWcMzQA1r4BshjPoppX7tkIuw6JkNhpRblrFrmlZNfa7f64nI56ss6RFHUg3pJcnKrdWFT8w61iEd0UbMVn6JuNxcoeRBe0wOAuA4qthWMJXH7vNoM7IpMUP8VcL9xdq8OmTaHSo0PwDtyAfz%2BDz2oBbC1KruERDfCW&X-Amz-Signature=91ffeb45e88d40227ebdb973bc52ebd4e7eb76213f778a5c3b44e8bb7a0336ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MGVFY2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWD0kDStP81VciWG%2Ba60z4Qiw6ZkFhGjmohS6EQ2U13AiBEaqWBxaabb1ze%2BLaMSJTtfcGhRLmEVHeX28tthFPPoyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Dq4zVSIxz9P2wIQKtwD8fPOWe9rFo5qIpLWDkPgPPjpDy%2FTmPLhyub%2F5SIPhzK8DAofTDg3EhylTrXr1DuLmGjGpIwncLcdDSbUJYjL3L%2B6VmvIm5R5N46NBRksq9RB3hjw5Xpdvjh1%2BdC%2F1gBsGkcf%2BZweKzVZpRkqQDTKghK2CJOTvJ%2BQAy%2FGqOXTrC86wHoDJmeuZ9ayRsaJkIDkRkLwJKj7P4C%2FXET34VPa9mNQgH2%2F4jsIPfY2G4Ylhw4DPSHPy3Y0aGRJ28RokncFvFkfohPqrkek34fi%2BsP7USzEKY94HRq%2BhCm%2BY7fR2lgds5i1hvFrdM0%2Bit8C8PvNZ%2FI5p0UmQkRD3HPpgR7Z1jNWDoI8tEBPBWpD85pTsgT9ZudAO0gykjUQj472OJaOhz3uVbJn4DigaVyEJsPU93dhIc69RzUZfdzTSKNAeAHrY6jTfsUv7U4phn63aSSXqc0XqPsZ0inZmdUjs71MGe5NBFx1g%2FEr9G7Xk86NtKic4Gq1YX80n8p64NQY6v1aM5R4bnIe30fpVe92oPjdEfkbh8KkUZLbh1IftzN5zgmC3tnhPbDjeVmAZoF94yst1tGWC3fvA%2FQN4lGhOMtKMfljH1EQOWEtpMcg0DFdAEuyD3R9BbfHNB7F1%2F0wnuLvvAY6pgE59%2BT0O%2FR4lwYM2e0gtW1ImuOgQATlDKYtrYvCiz44sZNvD4Mxtn0spQtQrOWcMzQA1r4BshjPoppX7tkIuw6JkNhpRblrFrmlZNfa7f64nI56ss6RFHUg3pJcnKrdWFT8w61iEd0UbMVn6JuNxcoeRBe0wOAuA4qthWMJXH7vNoM7IpMUP8VcL9xdq8OmTaHSo0PwDtyAfz%2BDz2oBbC1KruERDfCW&X-Amz-Signature=6309e5e60178d075a178438e8ae2b7e82a033cad4be46ceae682cc5e922a19f3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MGVFY2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWD0kDStP81VciWG%2Ba60z4Qiw6ZkFhGjmohS6EQ2U13AiBEaqWBxaabb1ze%2BLaMSJTtfcGhRLmEVHeX28tthFPPoyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Dq4zVSIxz9P2wIQKtwD8fPOWe9rFo5qIpLWDkPgPPjpDy%2FTmPLhyub%2F5SIPhzK8DAofTDg3EhylTrXr1DuLmGjGpIwncLcdDSbUJYjL3L%2B6VmvIm5R5N46NBRksq9RB3hjw5Xpdvjh1%2BdC%2F1gBsGkcf%2BZweKzVZpRkqQDTKghK2CJOTvJ%2BQAy%2FGqOXTrC86wHoDJmeuZ9ayRsaJkIDkRkLwJKj7P4C%2FXET34VPa9mNQgH2%2F4jsIPfY2G4Ylhw4DPSHPy3Y0aGRJ28RokncFvFkfohPqrkek34fi%2BsP7USzEKY94HRq%2BhCm%2BY7fR2lgds5i1hvFrdM0%2Bit8C8PvNZ%2FI5p0UmQkRD3HPpgR7Z1jNWDoI8tEBPBWpD85pTsgT9ZudAO0gykjUQj472OJaOhz3uVbJn4DigaVyEJsPU93dhIc69RzUZfdzTSKNAeAHrY6jTfsUv7U4phn63aSSXqc0XqPsZ0inZmdUjs71MGe5NBFx1g%2FEr9G7Xk86NtKic4Gq1YX80n8p64NQY6v1aM5R4bnIe30fpVe92oPjdEfkbh8KkUZLbh1IftzN5zgmC3tnhPbDjeVmAZoF94yst1tGWC3fvA%2FQN4lGhOMtKMfljH1EQOWEtpMcg0DFdAEuyD3R9BbfHNB7F1%2F0wnuLvvAY6pgE59%2BT0O%2FR4lwYM2e0gtW1ImuOgQATlDKYtrYvCiz44sZNvD4Mxtn0spQtQrOWcMzQA1r4BshjPoppX7tkIuw6JkNhpRblrFrmlZNfa7f64nI56ss6RFHUg3pJcnKrdWFT8w61iEd0UbMVn6JuNxcoeRBe0wOAuA4qthWMJXH7vNoM7IpMUP8VcL9xdq8OmTaHSo0PwDtyAfz%2BDz2oBbC1KruERDfCW&X-Amz-Signature=9ab1a0e795a903052ae773aa09f6e50f4df9736bf6cded00be8e047565e4f499&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MGVFY2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWD0kDStP81VciWG%2Ba60z4Qiw6ZkFhGjmohS6EQ2U13AiBEaqWBxaabb1ze%2BLaMSJTtfcGhRLmEVHeX28tthFPPoyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Dq4zVSIxz9P2wIQKtwD8fPOWe9rFo5qIpLWDkPgPPjpDy%2FTmPLhyub%2F5SIPhzK8DAofTDg3EhylTrXr1DuLmGjGpIwncLcdDSbUJYjL3L%2B6VmvIm5R5N46NBRksq9RB3hjw5Xpdvjh1%2BdC%2F1gBsGkcf%2BZweKzVZpRkqQDTKghK2CJOTvJ%2BQAy%2FGqOXTrC86wHoDJmeuZ9ayRsaJkIDkRkLwJKj7P4C%2FXET34VPa9mNQgH2%2F4jsIPfY2G4Ylhw4DPSHPy3Y0aGRJ28RokncFvFkfohPqrkek34fi%2BsP7USzEKY94HRq%2BhCm%2BY7fR2lgds5i1hvFrdM0%2Bit8C8PvNZ%2FI5p0UmQkRD3HPpgR7Z1jNWDoI8tEBPBWpD85pTsgT9ZudAO0gykjUQj472OJaOhz3uVbJn4DigaVyEJsPU93dhIc69RzUZfdzTSKNAeAHrY6jTfsUv7U4phn63aSSXqc0XqPsZ0inZmdUjs71MGe5NBFx1g%2FEr9G7Xk86NtKic4Gq1YX80n8p64NQY6v1aM5R4bnIe30fpVe92oPjdEfkbh8KkUZLbh1IftzN5zgmC3tnhPbDjeVmAZoF94yst1tGWC3fvA%2FQN4lGhOMtKMfljH1EQOWEtpMcg0DFdAEuyD3R9BbfHNB7F1%2F0wnuLvvAY6pgE59%2BT0O%2FR4lwYM2e0gtW1ImuOgQATlDKYtrYvCiz44sZNvD4Mxtn0spQtQrOWcMzQA1r4BshjPoppX7tkIuw6JkNhpRblrFrmlZNfa7f64nI56ss6RFHUg3pJcnKrdWFT8w61iEd0UbMVn6JuNxcoeRBe0wOAuA4qthWMJXH7vNoM7IpMUP8VcL9xdq8OmTaHSo0PwDtyAfz%2BDz2oBbC1KruERDfCW&X-Amz-Signature=a234ee94f52a2beb00d01a0f9dc6c16ce2f973759cfd37a82648412e8cdeed6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MGVFY2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWD0kDStP81VciWG%2Ba60z4Qiw6ZkFhGjmohS6EQ2U13AiBEaqWBxaabb1ze%2BLaMSJTtfcGhRLmEVHeX28tthFPPoyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Dq4zVSIxz9P2wIQKtwD8fPOWe9rFo5qIpLWDkPgPPjpDy%2FTmPLhyub%2F5SIPhzK8DAofTDg3EhylTrXr1DuLmGjGpIwncLcdDSbUJYjL3L%2B6VmvIm5R5N46NBRksq9RB3hjw5Xpdvjh1%2BdC%2F1gBsGkcf%2BZweKzVZpRkqQDTKghK2CJOTvJ%2BQAy%2FGqOXTrC86wHoDJmeuZ9ayRsaJkIDkRkLwJKj7P4C%2FXET34VPa9mNQgH2%2F4jsIPfY2G4Ylhw4DPSHPy3Y0aGRJ28RokncFvFkfohPqrkek34fi%2BsP7USzEKY94HRq%2BhCm%2BY7fR2lgds5i1hvFrdM0%2Bit8C8PvNZ%2FI5p0UmQkRD3HPpgR7Z1jNWDoI8tEBPBWpD85pTsgT9ZudAO0gykjUQj472OJaOhz3uVbJn4DigaVyEJsPU93dhIc69RzUZfdzTSKNAeAHrY6jTfsUv7U4phn63aSSXqc0XqPsZ0inZmdUjs71MGe5NBFx1g%2FEr9G7Xk86NtKic4Gq1YX80n8p64NQY6v1aM5R4bnIe30fpVe92oPjdEfkbh8KkUZLbh1IftzN5zgmC3tnhPbDjeVmAZoF94yst1tGWC3fvA%2FQN4lGhOMtKMfljH1EQOWEtpMcg0DFdAEuyD3R9BbfHNB7F1%2F0wnuLvvAY6pgE59%2BT0O%2FR4lwYM2e0gtW1ImuOgQATlDKYtrYvCiz44sZNvD4Mxtn0spQtQrOWcMzQA1r4BshjPoppX7tkIuw6JkNhpRblrFrmlZNfa7f64nI56ss6RFHUg3pJcnKrdWFT8w61iEd0UbMVn6JuNxcoeRBe0wOAuA4qthWMJXH7vNoM7IpMUP8VcL9xdq8OmTaHSo0PwDtyAfz%2BDz2oBbC1KruERDfCW&X-Amz-Signature=f38a0519c27446d167368336813a818af5a1b9943884b04e47da147936155b61&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MGVFY2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWD0kDStP81VciWG%2Ba60z4Qiw6ZkFhGjmohS6EQ2U13AiBEaqWBxaabb1ze%2BLaMSJTtfcGhRLmEVHeX28tthFPPoyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3Dq4zVSIxz9P2wIQKtwD8fPOWe9rFo5qIpLWDkPgPPjpDy%2FTmPLhyub%2F5SIPhzK8DAofTDg3EhylTrXr1DuLmGjGpIwncLcdDSbUJYjL3L%2B6VmvIm5R5N46NBRksq9RB3hjw5Xpdvjh1%2BdC%2F1gBsGkcf%2BZweKzVZpRkqQDTKghK2CJOTvJ%2BQAy%2FGqOXTrC86wHoDJmeuZ9ayRsaJkIDkRkLwJKj7P4C%2FXET34VPa9mNQgH2%2F4jsIPfY2G4Ylhw4DPSHPy3Y0aGRJ28RokncFvFkfohPqrkek34fi%2BsP7USzEKY94HRq%2BhCm%2BY7fR2lgds5i1hvFrdM0%2Bit8C8PvNZ%2FI5p0UmQkRD3HPpgR7Z1jNWDoI8tEBPBWpD85pTsgT9ZudAO0gykjUQj472OJaOhz3uVbJn4DigaVyEJsPU93dhIc69RzUZfdzTSKNAeAHrY6jTfsUv7U4phn63aSSXqc0XqPsZ0inZmdUjs71MGe5NBFx1g%2FEr9G7Xk86NtKic4Gq1YX80n8p64NQY6v1aM5R4bnIe30fpVe92oPjdEfkbh8KkUZLbh1IftzN5zgmC3tnhPbDjeVmAZoF94yst1tGWC3fvA%2FQN4lGhOMtKMfljH1EQOWEtpMcg0DFdAEuyD3R9BbfHNB7F1%2F0wnuLvvAY6pgE59%2BT0O%2FR4lwYM2e0gtW1ImuOgQATlDKYtrYvCiz44sZNvD4Mxtn0spQtQrOWcMzQA1r4BshjPoppX7tkIuw6JkNhpRblrFrmlZNfa7f64nI56ss6RFHUg3pJcnKrdWFT8w61iEd0UbMVn6JuNxcoeRBe0wOAuA4qthWMJXH7vNoM7IpMUP8VcL9xdq8OmTaHSo0PwDtyAfz%2BDz2oBbC1KruERDfCW&X-Amz-Signature=97f0ae2a8389a0a6cb49a4b2e87c175a139db487120ca06dc1f614a33512a6a6&X-Amz-SignedHeaders=host&x-id=GetObject)
