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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NS4C7MH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXjW6HHFpt1JkmOFDmc2PG%2Fw8GPErtpdHdlXRPWrP7EwIhAMJm8o2rZnvkx49JZrIfvqHwaFmmSDvqcvK24VULC1mmKv8DCCQQABoMNjM3NDIzMTgzODA1IgzuBFJE8H5VNQIr6NYq3AN7sn9PW7ibk2sidXuzb1Jz2x%2BvMYmezW87zUW211%2FOtDqWLDKk2aiAqzudGQmMm9x3iVv6xsTUvQBUie60l5HKOkb7z4O%2BHzGRcobVnXmJo3r29jeD49DubRVZaxpE7b5gYt356bDNo0yxRVECgpVXl4gEhAUvTdEeC3NzZX5Pu10ZG804GfWHfuoNEyeIPez7%2Fd342HkgvuY08zcmwuUK4U%2B0Rhz3s68h2QS0CdSuD1zj7nvEHi6DqfCiKW7Mj1blQyFTiPJrnuwDR9Vv2%2BbQrOmfLO17E3ZGJyxINWjuW6elwhvnkWkk3QNU7kvCv5v3rPoteDbAsT%2BZ7MVC1A700jqeriutB4XUCjawoGwtSewx%2BSEmWXKFfeH29q6MBYPleHRZS49ivh2T7g%2BycJYWF%2FjQPqIRxVTWcivPQuNycYVHBwHnCS%2B7j%2BZaKvjchNdHdr1JHND7pP0Jf%2FwyWuXLmhSP9p4D3P2QvWWiqu%2BLIeJj2e4lPiMPYurg7%2BmOKSTJsa6H3igz4eu%2By7g0utL67ahjQ7HjyIu%2FePPwe9tNUJHblCOf3rFCL5O7F6Zh28fCUGDmDSBybbUFxcdi2aZxncOBjAcu1Cgy7MRncKA8gb%2Bw1ZiiU3ic0dW29jDznfe%2FBjqkAXB8EoYs9nf7sKC8cBLxspRtlgOV5fUT8pWpbOz2890X4%2F%2BcnJ58qPY5yyIfpzL1dcNLp2VYCFqn897dyEWouW9eJYGF7bZrcx0Vq4KyWKFfi0ipwTUeOWKgb8yCpAtHVsZI6b%2FEbKsWIyLfWSmvSenqygEMPOsxvzPFTyfVRNQUPKP4uLTT9A%2F9OJGeIISJC8Wgg3qkE13ut2rSN8Bg3B4y15Cz&X-Amz-Signature=6892a7842aac3c180921768d41fed47e92051a9b342e4799278c1c3766f7af24&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NS4C7MH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXjW6HHFpt1JkmOFDmc2PG%2Fw8GPErtpdHdlXRPWrP7EwIhAMJm8o2rZnvkx49JZrIfvqHwaFmmSDvqcvK24VULC1mmKv8DCCQQABoMNjM3NDIzMTgzODA1IgzuBFJE8H5VNQIr6NYq3AN7sn9PW7ibk2sidXuzb1Jz2x%2BvMYmezW87zUW211%2FOtDqWLDKk2aiAqzudGQmMm9x3iVv6xsTUvQBUie60l5HKOkb7z4O%2BHzGRcobVnXmJo3r29jeD49DubRVZaxpE7b5gYt356bDNo0yxRVECgpVXl4gEhAUvTdEeC3NzZX5Pu10ZG804GfWHfuoNEyeIPez7%2Fd342HkgvuY08zcmwuUK4U%2B0Rhz3s68h2QS0CdSuD1zj7nvEHi6DqfCiKW7Mj1blQyFTiPJrnuwDR9Vv2%2BbQrOmfLO17E3ZGJyxINWjuW6elwhvnkWkk3QNU7kvCv5v3rPoteDbAsT%2BZ7MVC1A700jqeriutB4XUCjawoGwtSewx%2BSEmWXKFfeH29q6MBYPleHRZS49ivh2T7g%2BycJYWF%2FjQPqIRxVTWcivPQuNycYVHBwHnCS%2B7j%2BZaKvjchNdHdr1JHND7pP0Jf%2FwyWuXLmhSP9p4D3P2QvWWiqu%2BLIeJj2e4lPiMPYurg7%2BmOKSTJsa6H3igz4eu%2By7g0utL67ahjQ7HjyIu%2FePPwe9tNUJHblCOf3rFCL5O7F6Zh28fCUGDmDSBybbUFxcdi2aZxncOBjAcu1Cgy7MRncKA8gb%2Bw1ZiiU3ic0dW29jDznfe%2FBjqkAXB8EoYs9nf7sKC8cBLxspRtlgOV5fUT8pWpbOz2890X4%2F%2BcnJ58qPY5yyIfpzL1dcNLp2VYCFqn897dyEWouW9eJYGF7bZrcx0Vq4KyWKFfi0ipwTUeOWKgb8yCpAtHVsZI6b%2FEbKsWIyLfWSmvSenqygEMPOsxvzPFTyfVRNQUPKP4uLTT9A%2F9OJGeIISJC8Wgg3qkE13ut2rSN8Bg3B4y15Cz&X-Amz-Signature=54029eaa8745fad88b62c25d7d3f8ecb522e9fe06972910ac02bc0c843ebd888&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NS4C7MH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXjW6HHFpt1JkmOFDmc2PG%2Fw8GPErtpdHdlXRPWrP7EwIhAMJm8o2rZnvkx49JZrIfvqHwaFmmSDvqcvK24VULC1mmKv8DCCQQABoMNjM3NDIzMTgzODA1IgzuBFJE8H5VNQIr6NYq3AN7sn9PW7ibk2sidXuzb1Jz2x%2BvMYmezW87zUW211%2FOtDqWLDKk2aiAqzudGQmMm9x3iVv6xsTUvQBUie60l5HKOkb7z4O%2BHzGRcobVnXmJo3r29jeD49DubRVZaxpE7b5gYt356bDNo0yxRVECgpVXl4gEhAUvTdEeC3NzZX5Pu10ZG804GfWHfuoNEyeIPez7%2Fd342HkgvuY08zcmwuUK4U%2B0Rhz3s68h2QS0CdSuD1zj7nvEHi6DqfCiKW7Mj1blQyFTiPJrnuwDR9Vv2%2BbQrOmfLO17E3ZGJyxINWjuW6elwhvnkWkk3QNU7kvCv5v3rPoteDbAsT%2BZ7MVC1A700jqeriutB4XUCjawoGwtSewx%2BSEmWXKFfeH29q6MBYPleHRZS49ivh2T7g%2BycJYWF%2FjQPqIRxVTWcivPQuNycYVHBwHnCS%2B7j%2BZaKvjchNdHdr1JHND7pP0Jf%2FwyWuXLmhSP9p4D3P2QvWWiqu%2BLIeJj2e4lPiMPYurg7%2BmOKSTJsa6H3igz4eu%2By7g0utL67ahjQ7HjyIu%2FePPwe9tNUJHblCOf3rFCL5O7F6Zh28fCUGDmDSBybbUFxcdi2aZxncOBjAcu1Cgy7MRncKA8gb%2Bw1ZiiU3ic0dW29jDznfe%2FBjqkAXB8EoYs9nf7sKC8cBLxspRtlgOV5fUT8pWpbOz2890X4%2F%2BcnJ58qPY5yyIfpzL1dcNLp2VYCFqn897dyEWouW9eJYGF7bZrcx0Vq4KyWKFfi0ipwTUeOWKgb8yCpAtHVsZI6b%2FEbKsWIyLfWSmvSenqygEMPOsxvzPFTyfVRNQUPKP4uLTT9A%2F9OJGeIISJC8Wgg3qkE13ut2rSN8Bg3B4y15Cz&X-Amz-Signature=043c92072df82538f3b75246afa5d6fee2a2c393ca777c8934e61fc5634d65f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NS4C7MH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXjW6HHFpt1JkmOFDmc2PG%2Fw8GPErtpdHdlXRPWrP7EwIhAMJm8o2rZnvkx49JZrIfvqHwaFmmSDvqcvK24VULC1mmKv8DCCQQABoMNjM3NDIzMTgzODA1IgzuBFJE8H5VNQIr6NYq3AN7sn9PW7ibk2sidXuzb1Jz2x%2BvMYmezW87zUW211%2FOtDqWLDKk2aiAqzudGQmMm9x3iVv6xsTUvQBUie60l5HKOkb7z4O%2BHzGRcobVnXmJo3r29jeD49DubRVZaxpE7b5gYt356bDNo0yxRVECgpVXl4gEhAUvTdEeC3NzZX5Pu10ZG804GfWHfuoNEyeIPez7%2Fd342HkgvuY08zcmwuUK4U%2B0Rhz3s68h2QS0CdSuD1zj7nvEHi6DqfCiKW7Mj1blQyFTiPJrnuwDR9Vv2%2BbQrOmfLO17E3ZGJyxINWjuW6elwhvnkWkk3QNU7kvCv5v3rPoteDbAsT%2BZ7MVC1A700jqeriutB4XUCjawoGwtSewx%2BSEmWXKFfeH29q6MBYPleHRZS49ivh2T7g%2BycJYWF%2FjQPqIRxVTWcivPQuNycYVHBwHnCS%2B7j%2BZaKvjchNdHdr1JHND7pP0Jf%2FwyWuXLmhSP9p4D3P2QvWWiqu%2BLIeJj2e4lPiMPYurg7%2BmOKSTJsa6H3igz4eu%2By7g0utL67ahjQ7HjyIu%2FePPwe9tNUJHblCOf3rFCL5O7F6Zh28fCUGDmDSBybbUFxcdi2aZxncOBjAcu1Cgy7MRncKA8gb%2Bw1ZiiU3ic0dW29jDznfe%2FBjqkAXB8EoYs9nf7sKC8cBLxspRtlgOV5fUT8pWpbOz2890X4%2F%2BcnJ58qPY5yyIfpzL1dcNLp2VYCFqn897dyEWouW9eJYGF7bZrcx0Vq4KyWKFfi0ipwTUeOWKgb8yCpAtHVsZI6b%2FEbKsWIyLfWSmvSenqygEMPOsxvzPFTyfVRNQUPKP4uLTT9A%2F9OJGeIISJC8Wgg3qkE13ut2rSN8Bg3B4y15Cz&X-Amz-Signature=a7f3173117b0ffd59cbff17e339bc02988d086e6b534c7e754ce9a83ad5e79b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NS4C7MH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXjW6HHFpt1JkmOFDmc2PG%2Fw8GPErtpdHdlXRPWrP7EwIhAMJm8o2rZnvkx49JZrIfvqHwaFmmSDvqcvK24VULC1mmKv8DCCQQABoMNjM3NDIzMTgzODA1IgzuBFJE8H5VNQIr6NYq3AN7sn9PW7ibk2sidXuzb1Jz2x%2BvMYmezW87zUW211%2FOtDqWLDKk2aiAqzudGQmMm9x3iVv6xsTUvQBUie60l5HKOkb7z4O%2BHzGRcobVnXmJo3r29jeD49DubRVZaxpE7b5gYt356bDNo0yxRVECgpVXl4gEhAUvTdEeC3NzZX5Pu10ZG804GfWHfuoNEyeIPez7%2Fd342HkgvuY08zcmwuUK4U%2B0Rhz3s68h2QS0CdSuD1zj7nvEHi6DqfCiKW7Mj1blQyFTiPJrnuwDR9Vv2%2BbQrOmfLO17E3ZGJyxINWjuW6elwhvnkWkk3QNU7kvCv5v3rPoteDbAsT%2BZ7MVC1A700jqeriutB4XUCjawoGwtSewx%2BSEmWXKFfeH29q6MBYPleHRZS49ivh2T7g%2BycJYWF%2FjQPqIRxVTWcivPQuNycYVHBwHnCS%2B7j%2BZaKvjchNdHdr1JHND7pP0Jf%2FwyWuXLmhSP9p4D3P2QvWWiqu%2BLIeJj2e4lPiMPYurg7%2BmOKSTJsa6H3igz4eu%2By7g0utL67ahjQ7HjyIu%2FePPwe9tNUJHblCOf3rFCL5O7F6Zh28fCUGDmDSBybbUFxcdi2aZxncOBjAcu1Cgy7MRncKA8gb%2Bw1ZiiU3ic0dW29jDznfe%2FBjqkAXB8EoYs9nf7sKC8cBLxspRtlgOV5fUT8pWpbOz2890X4%2F%2BcnJ58qPY5yyIfpzL1dcNLp2VYCFqn897dyEWouW9eJYGF7bZrcx0Vq4KyWKFfi0ipwTUeOWKgb8yCpAtHVsZI6b%2FEbKsWIyLfWSmvSenqygEMPOsxvzPFTyfVRNQUPKP4uLTT9A%2F9OJGeIISJC8Wgg3qkE13ut2rSN8Bg3B4y15Cz&X-Amz-Signature=73b227312b1850cd2ce1dfba937755b09a86853ba63b14f7e9611579a29ab894&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NS4C7MH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T033044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXjW6HHFpt1JkmOFDmc2PG%2Fw8GPErtpdHdlXRPWrP7EwIhAMJm8o2rZnvkx49JZrIfvqHwaFmmSDvqcvK24VULC1mmKv8DCCQQABoMNjM3NDIzMTgzODA1IgzuBFJE8H5VNQIr6NYq3AN7sn9PW7ibk2sidXuzb1Jz2x%2BvMYmezW87zUW211%2FOtDqWLDKk2aiAqzudGQmMm9x3iVv6xsTUvQBUie60l5HKOkb7z4O%2BHzGRcobVnXmJo3r29jeD49DubRVZaxpE7b5gYt356bDNo0yxRVECgpVXl4gEhAUvTdEeC3NzZX5Pu10ZG804GfWHfuoNEyeIPez7%2Fd342HkgvuY08zcmwuUK4U%2B0Rhz3s68h2QS0CdSuD1zj7nvEHi6DqfCiKW7Mj1blQyFTiPJrnuwDR9Vv2%2BbQrOmfLO17E3ZGJyxINWjuW6elwhvnkWkk3QNU7kvCv5v3rPoteDbAsT%2BZ7MVC1A700jqeriutB4XUCjawoGwtSewx%2BSEmWXKFfeH29q6MBYPleHRZS49ivh2T7g%2BycJYWF%2FjQPqIRxVTWcivPQuNycYVHBwHnCS%2B7j%2BZaKvjchNdHdr1JHND7pP0Jf%2FwyWuXLmhSP9p4D3P2QvWWiqu%2BLIeJj2e4lPiMPYurg7%2BmOKSTJsa6H3igz4eu%2By7g0utL67ahjQ7HjyIu%2FePPwe9tNUJHblCOf3rFCL5O7F6Zh28fCUGDmDSBybbUFxcdi2aZxncOBjAcu1Cgy7MRncKA8gb%2Bw1ZiiU3ic0dW29jDznfe%2FBjqkAXB8EoYs9nf7sKC8cBLxspRtlgOV5fUT8pWpbOz2890X4%2F%2BcnJ58qPY5yyIfpzL1dcNLp2VYCFqn897dyEWouW9eJYGF7bZrcx0Vq4KyWKFfi0ipwTUeOWKgb8yCpAtHVsZI6b%2FEbKsWIyLfWSmvSenqygEMPOsxvzPFTyfVRNQUPKP4uLTT9A%2F9OJGeIISJC8Wgg3qkE13ut2rSN8Bg3B4y15Cz&X-Amz-Signature=9f0f974b81041b372bdb88d95149fed78b1328e42df374edfefa2774fc0b5b86&X-Amz-SignedHeaders=host&x-id=GetObject)
