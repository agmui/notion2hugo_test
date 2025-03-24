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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZA576Q%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnihZFn9KkzLOYqiktWugxIIFrzemMZHM%2FVifWvrEZvAiA9qutFHsZArzGQFMO4vIqFYVUhEezGjvWB7INDOdLRtiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2F7m3jfgKNfzzh0zKtwDn9kXUHlKWMyBvNVXx4AHdxpLjGjmGAz7N%2FbHYGICFYAqHMQZkediTb4Y9mROBlQTwCVfu4Q%2FHjWRkoln01ZL7Esw0Nm0vNaZT6Le1t8D7%2BE3ucHIFSL7sF6CMGi%2B8i6xsZE%2F8IPScSp%2FRaLY1fqRAnRrUawruKnbVM90HJ0achfHx%2FAIj5ZqueqyXOIfSEILdC3X7NtjIVUF2sji1aS7lvsG8O23M02Iwz3BsThs3tHMozce14aiYpS3TNueQxMjh3IeIe09PlwrMoclfW25VdP2QiMbjQBOZ64FAF36XRLFATKpW%2F5eeDFKtvpiEzvDh5EKi0ySrkQX5zdVfxFKHGa44Efgtxkv%2FRuV5tz%2Bznh95O5eFDNQg6AeJw0KSskicSe2wRpn2eTIgB3E33FIU%2F67CY1gb5mGCQAyUvBRvii9ddm2xe4KO0zFOpKukZNfGFH6ZOGnwN%2F2yA4PoZQu07HqVjY6t0lsN1aK1fRp3DBsN1C1%2BdFLxXlIcZPK4qd6Rd06Srk9QvLoviRZGFtN2qaosue1el5gFvtwBM%2BSMqsKtayj6WqO31VRcxIFcK0Vvj4VU7CHDpYDXrPMmlBs6tzmkPWrPTtfMK0JJaryH0qZBj4WnANIZUtZKtkwiJKHvwY6pgFJdlvKMSGLOf0eEt0AK%2FvGKheyAP7R6NnZ7IN73rcC7DxA8LrB2cG%2F2q9xWItzFBj0CvOOzG0S1dVQEOcjifsxv%2FVByhSbk%2Bz0h06CWJT60nXrLzGMR%2BO4mdCZaGIzKCNXlg99pWRALQsTpPCcbfvApZpzZVEsEwVNqrPUQTWpGGdRcOUTWcMexhXup0eFFjFTvToo35D%2BD3zyqrO17IZPSKKk2Jci&X-Amz-Signature=bff7b6a12bc652267668d1f2e56ced6a48d45b78828a7cab6fbeb9ffc691cdce&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZA576Q%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnihZFn9KkzLOYqiktWugxIIFrzemMZHM%2FVifWvrEZvAiA9qutFHsZArzGQFMO4vIqFYVUhEezGjvWB7INDOdLRtiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2F7m3jfgKNfzzh0zKtwDn9kXUHlKWMyBvNVXx4AHdxpLjGjmGAz7N%2FbHYGICFYAqHMQZkediTb4Y9mROBlQTwCVfu4Q%2FHjWRkoln01ZL7Esw0Nm0vNaZT6Le1t8D7%2BE3ucHIFSL7sF6CMGi%2B8i6xsZE%2F8IPScSp%2FRaLY1fqRAnRrUawruKnbVM90HJ0achfHx%2FAIj5ZqueqyXOIfSEILdC3X7NtjIVUF2sji1aS7lvsG8O23M02Iwz3BsThs3tHMozce14aiYpS3TNueQxMjh3IeIe09PlwrMoclfW25VdP2QiMbjQBOZ64FAF36XRLFATKpW%2F5eeDFKtvpiEzvDh5EKi0ySrkQX5zdVfxFKHGa44Efgtxkv%2FRuV5tz%2Bznh95O5eFDNQg6AeJw0KSskicSe2wRpn2eTIgB3E33FIU%2F67CY1gb5mGCQAyUvBRvii9ddm2xe4KO0zFOpKukZNfGFH6ZOGnwN%2F2yA4PoZQu07HqVjY6t0lsN1aK1fRp3DBsN1C1%2BdFLxXlIcZPK4qd6Rd06Srk9QvLoviRZGFtN2qaosue1el5gFvtwBM%2BSMqsKtayj6WqO31VRcxIFcK0Vvj4VU7CHDpYDXrPMmlBs6tzmkPWrPTtfMK0JJaryH0qZBj4WnANIZUtZKtkwiJKHvwY6pgFJdlvKMSGLOf0eEt0AK%2FvGKheyAP7R6NnZ7IN73rcC7DxA8LrB2cG%2F2q9xWItzFBj0CvOOzG0S1dVQEOcjifsxv%2FVByhSbk%2Bz0h06CWJT60nXrLzGMR%2BO4mdCZaGIzKCNXlg99pWRALQsTpPCcbfvApZpzZVEsEwVNqrPUQTWpGGdRcOUTWcMexhXup0eFFjFTvToo35D%2BD3zyqrO17IZPSKKk2Jci&X-Amz-Signature=d3616c0741e57fba73be573cb618d2541b752ecc4be8bb39d3887f2a17388fa1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZA576Q%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnihZFn9KkzLOYqiktWugxIIFrzemMZHM%2FVifWvrEZvAiA9qutFHsZArzGQFMO4vIqFYVUhEezGjvWB7INDOdLRtiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2F7m3jfgKNfzzh0zKtwDn9kXUHlKWMyBvNVXx4AHdxpLjGjmGAz7N%2FbHYGICFYAqHMQZkediTb4Y9mROBlQTwCVfu4Q%2FHjWRkoln01ZL7Esw0Nm0vNaZT6Le1t8D7%2BE3ucHIFSL7sF6CMGi%2B8i6xsZE%2F8IPScSp%2FRaLY1fqRAnRrUawruKnbVM90HJ0achfHx%2FAIj5ZqueqyXOIfSEILdC3X7NtjIVUF2sji1aS7lvsG8O23M02Iwz3BsThs3tHMozce14aiYpS3TNueQxMjh3IeIe09PlwrMoclfW25VdP2QiMbjQBOZ64FAF36XRLFATKpW%2F5eeDFKtvpiEzvDh5EKi0ySrkQX5zdVfxFKHGa44Efgtxkv%2FRuV5tz%2Bznh95O5eFDNQg6AeJw0KSskicSe2wRpn2eTIgB3E33FIU%2F67CY1gb5mGCQAyUvBRvii9ddm2xe4KO0zFOpKukZNfGFH6ZOGnwN%2F2yA4PoZQu07HqVjY6t0lsN1aK1fRp3DBsN1C1%2BdFLxXlIcZPK4qd6Rd06Srk9QvLoviRZGFtN2qaosue1el5gFvtwBM%2BSMqsKtayj6WqO31VRcxIFcK0Vvj4VU7CHDpYDXrPMmlBs6tzmkPWrPTtfMK0JJaryH0qZBj4WnANIZUtZKtkwiJKHvwY6pgFJdlvKMSGLOf0eEt0AK%2FvGKheyAP7R6NnZ7IN73rcC7DxA8LrB2cG%2F2q9xWItzFBj0CvOOzG0S1dVQEOcjifsxv%2FVByhSbk%2Bz0h06CWJT60nXrLzGMR%2BO4mdCZaGIzKCNXlg99pWRALQsTpPCcbfvApZpzZVEsEwVNqrPUQTWpGGdRcOUTWcMexhXup0eFFjFTvToo35D%2BD3zyqrO17IZPSKKk2Jci&X-Amz-Signature=d3c29fd7c3ec1ec4f070bbd1ed84c019a03b4a58009c3c363b09449f9e4aaa59&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZA576Q%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnihZFn9KkzLOYqiktWugxIIFrzemMZHM%2FVifWvrEZvAiA9qutFHsZArzGQFMO4vIqFYVUhEezGjvWB7INDOdLRtiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2F7m3jfgKNfzzh0zKtwDn9kXUHlKWMyBvNVXx4AHdxpLjGjmGAz7N%2FbHYGICFYAqHMQZkediTb4Y9mROBlQTwCVfu4Q%2FHjWRkoln01ZL7Esw0Nm0vNaZT6Le1t8D7%2BE3ucHIFSL7sF6CMGi%2B8i6xsZE%2F8IPScSp%2FRaLY1fqRAnRrUawruKnbVM90HJ0achfHx%2FAIj5ZqueqyXOIfSEILdC3X7NtjIVUF2sji1aS7lvsG8O23M02Iwz3BsThs3tHMozce14aiYpS3TNueQxMjh3IeIe09PlwrMoclfW25VdP2QiMbjQBOZ64FAF36XRLFATKpW%2F5eeDFKtvpiEzvDh5EKi0ySrkQX5zdVfxFKHGa44Efgtxkv%2FRuV5tz%2Bznh95O5eFDNQg6AeJw0KSskicSe2wRpn2eTIgB3E33FIU%2F67CY1gb5mGCQAyUvBRvii9ddm2xe4KO0zFOpKukZNfGFH6ZOGnwN%2F2yA4PoZQu07HqVjY6t0lsN1aK1fRp3DBsN1C1%2BdFLxXlIcZPK4qd6Rd06Srk9QvLoviRZGFtN2qaosue1el5gFvtwBM%2BSMqsKtayj6WqO31VRcxIFcK0Vvj4VU7CHDpYDXrPMmlBs6tzmkPWrPTtfMK0JJaryH0qZBj4WnANIZUtZKtkwiJKHvwY6pgFJdlvKMSGLOf0eEt0AK%2FvGKheyAP7R6NnZ7IN73rcC7DxA8LrB2cG%2F2q9xWItzFBj0CvOOzG0S1dVQEOcjifsxv%2FVByhSbk%2Bz0h06CWJT60nXrLzGMR%2BO4mdCZaGIzKCNXlg99pWRALQsTpPCcbfvApZpzZVEsEwVNqrPUQTWpGGdRcOUTWcMexhXup0eFFjFTvToo35D%2BD3zyqrO17IZPSKKk2Jci&X-Amz-Signature=e03ac4351a2ce1d06d8e0f90361d59fd81530bb8e09f151d2e9757545b0e60e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZA576Q%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnihZFn9KkzLOYqiktWugxIIFrzemMZHM%2FVifWvrEZvAiA9qutFHsZArzGQFMO4vIqFYVUhEezGjvWB7INDOdLRtiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2F7m3jfgKNfzzh0zKtwDn9kXUHlKWMyBvNVXx4AHdxpLjGjmGAz7N%2FbHYGICFYAqHMQZkediTb4Y9mROBlQTwCVfu4Q%2FHjWRkoln01ZL7Esw0Nm0vNaZT6Le1t8D7%2BE3ucHIFSL7sF6CMGi%2B8i6xsZE%2F8IPScSp%2FRaLY1fqRAnRrUawruKnbVM90HJ0achfHx%2FAIj5ZqueqyXOIfSEILdC3X7NtjIVUF2sji1aS7lvsG8O23M02Iwz3BsThs3tHMozce14aiYpS3TNueQxMjh3IeIe09PlwrMoclfW25VdP2QiMbjQBOZ64FAF36XRLFATKpW%2F5eeDFKtvpiEzvDh5EKi0ySrkQX5zdVfxFKHGa44Efgtxkv%2FRuV5tz%2Bznh95O5eFDNQg6AeJw0KSskicSe2wRpn2eTIgB3E33FIU%2F67CY1gb5mGCQAyUvBRvii9ddm2xe4KO0zFOpKukZNfGFH6ZOGnwN%2F2yA4PoZQu07HqVjY6t0lsN1aK1fRp3DBsN1C1%2BdFLxXlIcZPK4qd6Rd06Srk9QvLoviRZGFtN2qaosue1el5gFvtwBM%2BSMqsKtayj6WqO31VRcxIFcK0Vvj4VU7CHDpYDXrPMmlBs6tzmkPWrPTtfMK0JJaryH0qZBj4WnANIZUtZKtkwiJKHvwY6pgFJdlvKMSGLOf0eEt0AK%2FvGKheyAP7R6NnZ7IN73rcC7DxA8LrB2cG%2F2q9xWItzFBj0CvOOzG0S1dVQEOcjifsxv%2FVByhSbk%2Bz0h06CWJT60nXrLzGMR%2BO4mdCZaGIzKCNXlg99pWRALQsTpPCcbfvApZpzZVEsEwVNqrPUQTWpGGdRcOUTWcMexhXup0eFFjFTvToo35D%2BD3zyqrO17IZPSKKk2Jci&X-Amz-Signature=b63ca4717c1f139f71b92ea060efcac4ee079ec1089efe89fa8d7937d393b496&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZA576Q%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnihZFn9KkzLOYqiktWugxIIFrzemMZHM%2FVifWvrEZvAiA9qutFHsZArzGQFMO4vIqFYVUhEezGjvWB7INDOdLRtiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2F7m3jfgKNfzzh0zKtwDn9kXUHlKWMyBvNVXx4AHdxpLjGjmGAz7N%2FbHYGICFYAqHMQZkediTb4Y9mROBlQTwCVfu4Q%2FHjWRkoln01ZL7Esw0Nm0vNaZT6Le1t8D7%2BE3ucHIFSL7sF6CMGi%2B8i6xsZE%2F8IPScSp%2FRaLY1fqRAnRrUawruKnbVM90HJ0achfHx%2FAIj5ZqueqyXOIfSEILdC3X7NtjIVUF2sji1aS7lvsG8O23M02Iwz3BsThs3tHMozce14aiYpS3TNueQxMjh3IeIe09PlwrMoclfW25VdP2QiMbjQBOZ64FAF36XRLFATKpW%2F5eeDFKtvpiEzvDh5EKi0ySrkQX5zdVfxFKHGa44Efgtxkv%2FRuV5tz%2Bznh95O5eFDNQg6AeJw0KSskicSe2wRpn2eTIgB3E33FIU%2F67CY1gb5mGCQAyUvBRvii9ddm2xe4KO0zFOpKukZNfGFH6ZOGnwN%2F2yA4PoZQu07HqVjY6t0lsN1aK1fRp3DBsN1C1%2BdFLxXlIcZPK4qd6Rd06Srk9QvLoviRZGFtN2qaosue1el5gFvtwBM%2BSMqsKtayj6WqO31VRcxIFcK0Vvj4VU7CHDpYDXrPMmlBs6tzmkPWrPTtfMK0JJaryH0qZBj4WnANIZUtZKtkwiJKHvwY6pgFJdlvKMSGLOf0eEt0AK%2FvGKheyAP7R6NnZ7IN73rcC7DxA8LrB2cG%2F2q9xWItzFBj0CvOOzG0S1dVQEOcjifsxv%2FVByhSbk%2Bz0h06CWJT60nXrLzGMR%2BO4mdCZaGIzKCNXlg99pWRALQsTpPCcbfvApZpzZVEsEwVNqrPUQTWpGGdRcOUTWcMexhXup0eFFjFTvToo35D%2BD3zyqrO17IZPSKKk2Jci&X-Amz-Signature=05349aac85be3d0f9d229feba140fae07dc4bad2dc833237a1a2cc84924ad0ea&X-Amz-SignedHeaders=host&x-id=GetObject)
