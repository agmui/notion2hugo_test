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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3C3LQAU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIH1BCpOt3iVOob8Mxu84OxNnW3NN%2F3sVf070qebNgXWGAiAcEheSRFofpJwL1CBw60QkMAACWKrchzIy3FGAmWFWXCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7H9f1nLtQ%2BVVkWR5KtwDHzfQp3eGDSAMd%2B5v9YR6qWlDt261tauXWc2hlmdWD7mDdp19i255b5Ch2p0syFg37yDH5q2uwcbPvI0uA6Ewp76pF%2B%2F3jUDkjGybqdnFihrINSQp9Q5lpcVQZ2W7Vs5FanstQg6YUTYc3hcvvEqz%2BZ2Dn%2BLxd7l4X3hb7%2BepcTWnk1FSk%2Fsl1NQ%2B0X%2BcO2Mm01T%2BZjL5jfCejfNckF5%2Fz2Gzv4WzzaUkBjHDL7VN9rIRsgo3P%2B5J%2BXcaf52VZBRuKC5SwaTKTMw5%2FzrKCZkSPhrEuoLVGe2Ms3yYSeALSbl9IZQBuFN9yNzuFhUZSIG8mrxU3sR8DhsKl%2FbjDQTGfaBYcAvHQ7iLSY21xyUdbFH1aCyK8Bb8XxMcPfbdMf%2BBYrU3TZX3OogSdjtIpri%2F3rxMo4dcaC6Exnn71a4TI2SEJRJtg1R1Uzt%2Fud2Siw0BPPj1agb0nlwJjxM4nsORF4I5zmloaK%2BuU1i84myprIPw23kgc4oxSSNisBT0kodXgQ76MnVGrJMncaopXrzZ2rsaLaEFbUIeN0xvNKqaY2IPNzCq7ADgFAntUBmRR%2B1cLymS151poqlXqe%2FDuGkXiWJx2Cl5hWEyGlaPvoO%2Bf5u5HyZmcz%2F%2BlasleGYw%2BtjawAY6pgH1yFfZOztYVv5LWxg2rKisfTV0Ks76v1pxiCf3Tbt%2F5PYlvYtCbjq5dDScAIAdlTDEQXrR0iZwnbiLMF%2BN7q5hdTKoYsFRpkb1NkXcAR%2Bz7Unk%2Bo7m5STmuwt3%2FgLBhJgaPotyjkyvOMDPyHk7%2F1QsT%2FTBcnFq9CcQkp4cWWCjHzrx%2Bp%2FDQVPJB69FV%2FmMcndvhUOymx5N1jrzbYZ3ZVQ4XQ6yK22Z&X-Amz-Signature=476e83b641cbbf3fbdb71d7fca309b3cb56553ecc117d7910740577d41066a07&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3C3LQAU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIH1BCpOt3iVOob8Mxu84OxNnW3NN%2F3sVf070qebNgXWGAiAcEheSRFofpJwL1CBw60QkMAACWKrchzIy3FGAmWFWXCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7H9f1nLtQ%2BVVkWR5KtwDHzfQp3eGDSAMd%2B5v9YR6qWlDt261tauXWc2hlmdWD7mDdp19i255b5Ch2p0syFg37yDH5q2uwcbPvI0uA6Ewp76pF%2B%2F3jUDkjGybqdnFihrINSQp9Q5lpcVQZ2W7Vs5FanstQg6YUTYc3hcvvEqz%2BZ2Dn%2BLxd7l4X3hb7%2BepcTWnk1FSk%2Fsl1NQ%2B0X%2BcO2Mm01T%2BZjL5jfCejfNckF5%2Fz2Gzv4WzzaUkBjHDL7VN9rIRsgo3P%2B5J%2BXcaf52VZBRuKC5SwaTKTMw5%2FzrKCZkSPhrEuoLVGe2Ms3yYSeALSbl9IZQBuFN9yNzuFhUZSIG8mrxU3sR8DhsKl%2FbjDQTGfaBYcAvHQ7iLSY21xyUdbFH1aCyK8Bb8XxMcPfbdMf%2BBYrU3TZX3OogSdjtIpri%2F3rxMo4dcaC6Exnn71a4TI2SEJRJtg1R1Uzt%2Fud2Siw0BPPj1agb0nlwJjxM4nsORF4I5zmloaK%2BuU1i84myprIPw23kgc4oxSSNisBT0kodXgQ76MnVGrJMncaopXrzZ2rsaLaEFbUIeN0xvNKqaY2IPNzCq7ADgFAntUBmRR%2B1cLymS151poqlXqe%2FDuGkXiWJx2Cl5hWEyGlaPvoO%2Bf5u5HyZmcz%2F%2BlasleGYw%2BtjawAY6pgH1yFfZOztYVv5LWxg2rKisfTV0Ks76v1pxiCf3Tbt%2F5PYlvYtCbjq5dDScAIAdlTDEQXrR0iZwnbiLMF%2BN7q5hdTKoYsFRpkb1NkXcAR%2Bz7Unk%2Bo7m5STmuwt3%2FgLBhJgaPotyjkyvOMDPyHk7%2F1QsT%2FTBcnFq9CcQkp4cWWCjHzrx%2Bp%2FDQVPJB69FV%2FmMcndvhUOymx5N1jrzbYZ3ZVQ4XQ6yK22Z&X-Amz-Signature=600921cf02eac5292df7fb551cee8ef17b43f36391cd40ab6a805c99de4ef1ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3C3LQAU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIH1BCpOt3iVOob8Mxu84OxNnW3NN%2F3sVf070qebNgXWGAiAcEheSRFofpJwL1CBw60QkMAACWKrchzIy3FGAmWFWXCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7H9f1nLtQ%2BVVkWR5KtwDHzfQp3eGDSAMd%2B5v9YR6qWlDt261tauXWc2hlmdWD7mDdp19i255b5Ch2p0syFg37yDH5q2uwcbPvI0uA6Ewp76pF%2B%2F3jUDkjGybqdnFihrINSQp9Q5lpcVQZ2W7Vs5FanstQg6YUTYc3hcvvEqz%2BZ2Dn%2BLxd7l4X3hb7%2BepcTWnk1FSk%2Fsl1NQ%2B0X%2BcO2Mm01T%2BZjL5jfCejfNckF5%2Fz2Gzv4WzzaUkBjHDL7VN9rIRsgo3P%2B5J%2BXcaf52VZBRuKC5SwaTKTMw5%2FzrKCZkSPhrEuoLVGe2Ms3yYSeALSbl9IZQBuFN9yNzuFhUZSIG8mrxU3sR8DhsKl%2FbjDQTGfaBYcAvHQ7iLSY21xyUdbFH1aCyK8Bb8XxMcPfbdMf%2BBYrU3TZX3OogSdjtIpri%2F3rxMo4dcaC6Exnn71a4TI2SEJRJtg1R1Uzt%2Fud2Siw0BPPj1agb0nlwJjxM4nsORF4I5zmloaK%2BuU1i84myprIPw23kgc4oxSSNisBT0kodXgQ76MnVGrJMncaopXrzZ2rsaLaEFbUIeN0xvNKqaY2IPNzCq7ADgFAntUBmRR%2B1cLymS151poqlXqe%2FDuGkXiWJx2Cl5hWEyGlaPvoO%2Bf5u5HyZmcz%2F%2BlasleGYw%2BtjawAY6pgH1yFfZOztYVv5LWxg2rKisfTV0Ks76v1pxiCf3Tbt%2F5PYlvYtCbjq5dDScAIAdlTDEQXrR0iZwnbiLMF%2BN7q5hdTKoYsFRpkb1NkXcAR%2Bz7Unk%2Bo7m5STmuwt3%2FgLBhJgaPotyjkyvOMDPyHk7%2F1QsT%2FTBcnFq9CcQkp4cWWCjHzrx%2Bp%2FDQVPJB69FV%2FmMcndvhUOymx5N1jrzbYZ3ZVQ4XQ6yK22Z&X-Amz-Signature=b8cd1a6a1839bfd727b350bf6f69b23a5e4deec8efdcdeb5dfd324eefefcb9b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3C3LQAU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIH1BCpOt3iVOob8Mxu84OxNnW3NN%2F3sVf070qebNgXWGAiAcEheSRFofpJwL1CBw60QkMAACWKrchzIy3FGAmWFWXCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7H9f1nLtQ%2BVVkWR5KtwDHzfQp3eGDSAMd%2B5v9YR6qWlDt261tauXWc2hlmdWD7mDdp19i255b5Ch2p0syFg37yDH5q2uwcbPvI0uA6Ewp76pF%2B%2F3jUDkjGybqdnFihrINSQp9Q5lpcVQZ2W7Vs5FanstQg6YUTYc3hcvvEqz%2BZ2Dn%2BLxd7l4X3hb7%2BepcTWnk1FSk%2Fsl1NQ%2B0X%2BcO2Mm01T%2BZjL5jfCejfNckF5%2Fz2Gzv4WzzaUkBjHDL7VN9rIRsgo3P%2B5J%2BXcaf52VZBRuKC5SwaTKTMw5%2FzrKCZkSPhrEuoLVGe2Ms3yYSeALSbl9IZQBuFN9yNzuFhUZSIG8mrxU3sR8DhsKl%2FbjDQTGfaBYcAvHQ7iLSY21xyUdbFH1aCyK8Bb8XxMcPfbdMf%2BBYrU3TZX3OogSdjtIpri%2F3rxMo4dcaC6Exnn71a4TI2SEJRJtg1R1Uzt%2Fud2Siw0BPPj1agb0nlwJjxM4nsORF4I5zmloaK%2BuU1i84myprIPw23kgc4oxSSNisBT0kodXgQ76MnVGrJMncaopXrzZ2rsaLaEFbUIeN0xvNKqaY2IPNzCq7ADgFAntUBmRR%2B1cLymS151poqlXqe%2FDuGkXiWJx2Cl5hWEyGlaPvoO%2Bf5u5HyZmcz%2F%2BlasleGYw%2BtjawAY6pgH1yFfZOztYVv5LWxg2rKisfTV0Ks76v1pxiCf3Tbt%2F5PYlvYtCbjq5dDScAIAdlTDEQXrR0iZwnbiLMF%2BN7q5hdTKoYsFRpkb1NkXcAR%2Bz7Unk%2Bo7m5STmuwt3%2FgLBhJgaPotyjkyvOMDPyHk7%2F1QsT%2FTBcnFq9CcQkp4cWWCjHzrx%2Bp%2FDQVPJB69FV%2FmMcndvhUOymx5N1jrzbYZ3ZVQ4XQ6yK22Z&X-Amz-Signature=d31d70c9c188044b7ce8a2cd170e7fdab25724f8a88ba55eca45fe17b9e435ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3C3LQAU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIH1BCpOt3iVOob8Mxu84OxNnW3NN%2F3sVf070qebNgXWGAiAcEheSRFofpJwL1CBw60QkMAACWKrchzIy3FGAmWFWXCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7H9f1nLtQ%2BVVkWR5KtwDHzfQp3eGDSAMd%2B5v9YR6qWlDt261tauXWc2hlmdWD7mDdp19i255b5Ch2p0syFg37yDH5q2uwcbPvI0uA6Ewp76pF%2B%2F3jUDkjGybqdnFihrINSQp9Q5lpcVQZ2W7Vs5FanstQg6YUTYc3hcvvEqz%2BZ2Dn%2BLxd7l4X3hb7%2BepcTWnk1FSk%2Fsl1NQ%2B0X%2BcO2Mm01T%2BZjL5jfCejfNckF5%2Fz2Gzv4WzzaUkBjHDL7VN9rIRsgo3P%2B5J%2BXcaf52VZBRuKC5SwaTKTMw5%2FzrKCZkSPhrEuoLVGe2Ms3yYSeALSbl9IZQBuFN9yNzuFhUZSIG8mrxU3sR8DhsKl%2FbjDQTGfaBYcAvHQ7iLSY21xyUdbFH1aCyK8Bb8XxMcPfbdMf%2BBYrU3TZX3OogSdjtIpri%2F3rxMo4dcaC6Exnn71a4TI2SEJRJtg1R1Uzt%2Fud2Siw0BPPj1agb0nlwJjxM4nsORF4I5zmloaK%2BuU1i84myprIPw23kgc4oxSSNisBT0kodXgQ76MnVGrJMncaopXrzZ2rsaLaEFbUIeN0xvNKqaY2IPNzCq7ADgFAntUBmRR%2B1cLymS151poqlXqe%2FDuGkXiWJx2Cl5hWEyGlaPvoO%2Bf5u5HyZmcz%2F%2BlasleGYw%2BtjawAY6pgH1yFfZOztYVv5LWxg2rKisfTV0Ks76v1pxiCf3Tbt%2F5PYlvYtCbjq5dDScAIAdlTDEQXrR0iZwnbiLMF%2BN7q5hdTKoYsFRpkb1NkXcAR%2Bz7Unk%2Bo7m5STmuwt3%2FgLBhJgaPotyjkyvOMDPyHk7%2F1QsT%2FTBcnFq9CcQkp4cWWCjHzrx%2Bp%2FDQVPJB69FV%2FmMcndvhUOymx5N1jrzbYZ3ZVQ4XQ6yK22Z&X-Amz-Signature=3c5e18a4036b423022cc7196526f2629ce904c6c9d002706259620ea02362567&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3C3LQAU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIH1BCpOt3iVOob8Mxu84OxNnW3NN%2F3sVf070qebNgXWGAiAcEheSRFofpJwL1CBw60QkMAACWKrchzIy3FGAmWFWXCqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7H9f1nLtQ%2BVVkWR5KtwDHzfQp3eGDSAMd%2B5v9YR6qWlDt261tauXWc2hlmdWD7mDdp19i255b5Ch2p0syFg37yDH5q2uwcbPvI0uA6Ewp76pF%2B%2F3jUDkjGybqdnFihrINSQp9Q5lpcVQZ2W7Vs5FanstQg6YUTYc3hcvvEqz%2BZ2Dn%2BLxd7l4X3hb7%2BepcTWnk1FSk%2Fsl1NQ%2B0X%2BcO2Mm01T%2BZjL5jfCejfNckF5%2Fz2Gzv4WzzaUkBjHDL7VN9rIRsgo3P%2B5J%2BXcaf52VZBRuKC5SwaTKTMw5%2FzrKCZkSPhrEuoLVGe2Ms3yYSeALSbl9IZQBuFN9yNzuFhUZSIG8mrxU3sR8DhsKl%2FbjDQTGfaBYcAvHQ7iLSY21xyUdbFH1aCyK8Bb8XxMcPfbdMf%2BBYrU3TZX3OogSdjtIpri%2F3rxMo4dcaC6Exnn71a4TI2SEJRJtg1R1Uzt%2Fud2Siw0BPPj1agb0nlwJjxM4nsORF4I5zmloaK%2BuU1i84myprIPw23kgc4oxSSNisBT0kodXgQ76MnVGrJMncaopXrzZ2rsaLaEFbUIeN0xvNKqaY2IPNzCq7ADgFAntUBmRR%2B1cLymS151poqlXqe%2FDuGkXiWJx2Cl5hWEyGlaPvoO%2Bf5u5HyZmcz%2F%2BlasleGYw%2BtjawAY6pgH1yFfZOztYVv5LWxg2rKisfTV0Ks76v1pxiCf3Tbt%2F5PYlvYtCbjq5dDScAIAdlTDEQXrR0iZwnbiLMF%2BN7q5hdTKoYsFRpkb1NkXcAR%2Bz7Unk%2Bo7m5STmuwt3%2FgLBhJgaPotyjkyvOMDPyHk7%2F1QsT%2FTBcnFq9CcQkp4cWWCjHzrx%2Bp%2FDQVPJB69FV%2FmMcndvhUOymx5N1jrzbYZ3ZVQ4XQ6yK22Z&X-Amz-Signature=1183f5141f79cce9ef6f9528f1ea01f2a673c15dc4375d55e349f1dda2412b68&X-Amz-SignedHeaders=host&x-id=GetObject)
