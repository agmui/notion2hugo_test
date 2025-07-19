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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4IINBLO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICu2VazbIimNDbLy0keWqqyRdPPpi5cDP9P8UqQw6lRYAiBR3D4OkABguOYmPMRBTLM%2FKEDBdfpCJvo2rnzKyUWtzSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIkp%2FYpQ46skMScMqKtwDNHmhxoNKpop773m6adGWvVpKGpz84ihLsiDacm%2FTQhNbKWvWCszCncCIfwf7w2LmLS%2FRLz9EOtZn6Q2gOtlf%2FPZFRBJmjOhTW81SOlUgR%2BWVhKX5%2F%2BlsDYyP2T6%2Fi9hoduK0fBYhbwXJVF1F3GrvbXLH2umuhGVzUrh%2Fheg2JsdBttBWYGol9KmIRQKZQXjqLkNijkdn14YGregG5ZbxTOU60vBaXBp8%2FjO2PkCtmVulZm2iFJANQ5QSZrtd1KD%2F%2BsYW4C710n3Dlidtm1g3VADwdD5A47UmY1AFGupP%2B5RnEMfgxc2kP3peq56fNpe7784x1ZcdEARcY7f5sXGtpH8X5Wh9CS0w2hRbiN%2FGWKH4tcRIXsN31K3%2Bm635mASTiqGu1%2B8cc0Plnhbr6mj8rySkBeNsn26F22JQrhy7YfdX%2FXO0Xd19wRiVT1tRKlPZObXxsPV9U88Q9WhX%2B%2FkWKqvbr2qeNxZp%2FPdA5T0P3Yjyd3DBIqmOc%2F7rk%2BuxwOAVZoJ6qE0yNviqy6v5UKtDd%2FSoYWYySLIe6a89AJDGtGsIduIx1ktrJ8wkJefsdUEpAbixrvREsOyjT5ywT7gOJNDovM%2BLY%2FnaJ2kzz5mxP0nvwB6tj3XbhtdkzjAwnMXswwY6pgGWd31nLxx%2Bf2gGbn36fmvqkSkA%2B9IZjvkNfEtUQO2SgVMDwAAKxzkOY44KE4nlIGASj1mcYa8ESs%2FAEY4TlEg4mxwfv2HBV9Gkj%2Fy6NuvM%2FCzbhC3iFMTzLXSgVTVgWHOzQpU0bDTayBorRTAq5MQJKNI6nmJZrV4TqBbia2oYxiWzZGVZ4d%2B8OqWf1gr8%2BoPx4PXRAqhQShlLumN7LDCOBx%2BCBE5F&X-Amz-Signature=ba1543e7edebd0e56b79e15332fa8bf432c89a4208603b1961ca9a456004714b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4IINBLO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICu2VazbIimNDbLy0keWqqyRdPPpi5cDP9P8UqQw6lRYAiBR3D4OkABguOYmPMRBTLM%2FKEDBdfpCJvo2rnzKyUWtzSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIkp%2FYpQ46skMScMqKtwDNHmhxoNKpop773m6adGWvVpKGpz84ihLsiDacm%2FTQhNbKWvWCszCncCIfwf7w2LmLS%2FRLz9EOtZn6Q2gOtlf%2FPZFRBJmjOhTW81SOlUgR%2BWVhKX5%2F%2BlsDYyP2T6%2Fi9hoduK0fBYhbwXJVF1F3GrvbXLH2umuhGVzUrh%2Fheg2JsdBttBWYGol9KmIRQKZQXjqLkNijkdn14YGregG5ZbxTOU60vBaXBp8%2FjO2PkCtmVulZm2iFJANQ5QSZrtd1KD%2F%2BsYW4C710n3Dlidtm1g3VADwdD5A47UmY1AFGupP%2B5RnEMfgxc2kP3peq56fNpe7784x1ZcdEARcY7f5sXGtpH8X5Wh9CS0w2hRbiN%2FGWKH4tcRIXsN31K3%2Bm635mASTiqGu1%2B8cc0Plnhbr6mj8rySkBeNsn26F22JQrhy7YfdX%2FXO0Xd19wRiVT1tRKlPZObXxsPV9U88Q9WhX%2B%2FkWKqvbr2qeNxZp%2FPdA5T0P3Yjyd3DBIqmOc%2F7rk%2BuxwOAVZoJ6qE0yNviqy6v5UKtDd%2FSoYWYySLIe6a89AJDGtGsIduIx1ktrJ8wkJefsdUEpAbixrvREsOyjT5ywT7gOJNDovM%2BLY%2FnaJ2kzz5mxP0nvwB6tj3XbhtdkzjAwnMXswwY6pgGWd31nLxx%2Bf2gGbn36fmvqkSkA%2B9IZjvkNfEtUQO2SgVMDwAAKxzkOY44KE4nlIGASj1mcYa8ESs%2FAEY4TlEg4mxwfv2HBV9Gkj%2Fy6NuvM%2FCzbhC3iFMTzLXSgVTVgWHOzQpU0bDTayBorRTAq5MQJKNI6nmJZrV4TqBbia2oYxiWzZGVZ4d%2B8OqWf1gr8%2BoPx4PXRAqhQShlLumN7LDCOBx%2BCBE5F&X-Amz-Signature=91947cfe49e27a205800a628c2c80cc2ce22be545d225a0499a6d5c9ee4350d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4IINBLO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICu2VazbIimNDbLy0keWqqyRdPPpi5cDP9P8UqQw6lRYAiBR3D4OkABguOYmPMRBTLM%2FKEDBdfpCJvo2rnzKyUWtzSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIkp%2FYpQ46skMScMqKtwDNHmhxoNKpop773m6adGWvVpKGpz84ihLsiDacm%2FTQhNbKWvWCszCncCIfwf7w2LmLS%2FRLz9EOtZn6Q2gOtlf%2FPZFRBJmjOhTW81SOlUgR%2BWVhKX5%2F%2BlsDYyP2T6%2Fi9hoduK0fBYhbwXJVF1F3GrvbXLH2umuhGVzUrh%2Fheg2JsdBttBWYGol9KmIRQKZQXjqLkNijkdn14YGregG5ZbxTOU60vBaXBp8%2FjO2PkCtmVulZm2iFJANQ5QSZrtd1KD%2F%2BsYW4C710n3Dlidtm1g3VADwdD5A47UmY1AFGupP%2B5RnEMfgxc2kP3peq56fNpe7784x1ZcdEARcY7f5sXGtpH8X5Wh9CS0w2hRbiN%2FGWKH4tcRIXsN31K3%2Bm635mASTiqGu1%2B8cc0Plnhbr6mj8rySkBeNsn26F22JQrhy7YfdX%2FXO0Xd19wRiVT1tRKlPZObXxsPV9U88Q9WhX%2B%2FkWKqvbr2qeNxZp%2FPdA5T0P3Yjyd3DBIqmOc%2F7rk%2BuxwOAVZoJ6qE0yNviqy6v5UKtDd%2FSoYWYySLIe6a89AJDGtGsIduIx1ktrJ8wkJefsdUEpAbixrvREsOyjT5ywT7gOJNDovM%2BLY%2FnaJ2kzz5mxP0nvwB6tj3XbhtdkzjAwnMXswwY6pgGWd31nLxx%2Bf2gGbn36fmvqkSkA%2B9IZjvkNfEtUQO2SgVMDwAAKxzkOY44KE4nlIGASj1mcYa8ESs%2FAEY4TlEg4mxwfv2HBV9Gkj%2Fy6NuvM%2FCzbhC3iFMTzLXSgVTVgWHOzQpU0bDTayBorRTAq5MQJKNI6nmJZrV4TqBbia2oYxiWzZGVZ4d%2B8OqWf1gr8%2BoPx4PXRAqhQShlLumN7LDCOBx%2BCBE5F&X-Amz-Signature=dad4d4c159b9ecc05f86cb8ccabf955a91ffd24a507349215060420180faaba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4IINBLO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICu2VazbIimNDbLy0keWqqyRdPPpi5cDP9P8UqQw6lRYAiBR3D4OkABguOYmPMRBTLM%2FKEDBdfpCJvo2rnzKyUWtzSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIkp%2FYpQ46skMScMqKtwDNHmhxoNKpop773m6adGWvVpKGpz84ihLsiDacm%2FTQhNbKWvWCszCncCIfwf7w2LmLS%2FRLz9EOtZn6Q2gOtlf%2FPZFRBJmjOhTW81SOlUgR%2BWVhKX5%2F%2BlsDYyP2T6%2Fi9hoduK0fBYhbwXJVF1F3GrvbXLH2umuhGVzUrh%2Fheg2JsdBttBWYGol9KmIRQKZQXjqLkNijkdn14YGregG5ZbxTOU60vBaXBp8%2FjO2PkCtmVulZm2iFJANQ5QSZrtd1KD%2F%2BsYW4C710n3Dlidtm1g3VADwdD5A47UmY1AFGupP%2B5RnEMfgxc2kP3peq56fNpe7784x1ZcdEARcY7f5sXGtpH8X5Wh9CS0w2hRbiN%2FGWKH4tcRIXsN31K3%2Bm635mASTiqGu1%2B8cc0Plnhbr6mj8rySkBeNsn26F22JQrhy7YfdX%2FXO0Xd19wRiVT1tRKlPZObXxsPV9U88Q9WhX%2B%2FkWKqvbr2qeNxZp%2FPdA5T0P3Yjyd3DBIqmOc%2F7rk%2BuxwOAVZoJ6qE0yNviqy6v5UKtDd%2FSoYWYySLIe6a89AJDGtGsIduIx1ktrJ8wkJefsdUEpAbixrvREsOyjT5ywT7gOJNDovM%2BLY%2FnaJ2kzz5mxP0nvwB6tj3XbhtdkzjAwnMXswwY6pgGWd31nLxx%2Bf2gGbn36fmvqkSkA%2B9IZjvkNfEtUQO2SgVMDwAAKxzkOY44KE4nlIGASj1mcYa8ESs%2FAEY4TlEg4mxwfv2HBV9Gkj%2Fy6NuvM%2FCzbhC3iFMTzLXSgVTVgWHOzQpU0bDTayBorRTAq5MQJKNI6nmJZrV4TqBbia2oYxiWzZGVZ4d%2B8OqWf1gr8%2BoPx4PXRAqhQShlLumN7LDCOBx%2BCBE5F&X-Amz-Signature=858331fc9d4d820d7d0ce397929bab16a37c3dbbda991d2d03d8adee0bdb1c45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4IINBLO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICu2VazbIimNDbLy0keWqqyRdPPpi5cDP9P8UqQw6lRYAiBR3D4OkABguOYmPMRBTLM%2FKEDBdfpCJvo2rnzKyUWtzSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIkp%2FYpQ46skMScMqKtwDNHmhxoNKpop773m6adGWvVpKGpz84ihLsiDacm%2FTQhNbKWvWCszCncCIfwf7w2LmLS%2FRLz9EOtZn6Q2gOtlf%2FPZFRBJmjOhTW81SOlUgR%2BWVhKX5%2F%2BlsDYyP2T6%2Fi9hoduK0fBYhbwXJVF1F3GrvbXLH2umuhGVzUrh%2Fheg2JsdBttBWYGol9KmIRQKZQXjqLkNijkdn14YGregG5ZbxTOU60vBaXBp8%2FjO2PkCtmVulZm2iFJANQ5QSZrtd1KD%2F%2BsYW4C710n3Dlidtm1g3VADwdD5A47UmY1AFGupP%2B5RnEMfgxc2kP3peq56fNpe7784x1ZcdEARcY7f5sXGtpH8X5Wh9CS0w2hRbiN%2FGWKH4tcRIXsN31K3%2Bm635mASTiqGu1%2B8cc0Plnhbr6mj8rySkBeNsn26F22JQrhy7YfdX%2FXO0Xd19wRiVT1tRKlPZObXxsPV9U88Q9WhX%2B%2FkWKqvbr2qeNxZp%2FPdA5T0P3Yjyd3DBIqmOc%2F7rk%2BuxwOAVZoJ6qE0yNviqy6v5UKtDd%2FSoYWYySLIe6a89AJDGtGsIduIx1ktrJ8wkJefsdUEpAbixrvREsOyjT5ywT7gOJNDovM%2BLY%2FnaJ2kzz5mxP0nvwB6tj3XbhtdkzjAwnMXswwY6pgGWd31nLxx%2Bf2gGbn36fmvqkSkA%2B9IZjvkNfEtUQO2SgVMDwAAKxzkOY44KE4nlIGASj1mcYa8ESs%2FAEY4TlEg4mxwfv2HBV9Gkj%2Fy6NuvM%2FCzbhC3iFMTzLXSgVTVgWHOzQpU0bDTayBorRTAq5MQJKNI6nmJZrV4TqBbia2oYxiWzZGVZ4d%2B8OqWf1gr8%2BoPx4PXRAqhQShlLumN7LDCOBx%2BCBE5F&X-Amz-Signature=f091160024d2d85f2dd329c4510c8ddfb738a84a7ae965b945e8ef1b961a7ba8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4IINBLO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICu2VazbIimNDbLy0keWqqyRdPPpi5cDP9P8UqQw6lRYAiBR3D4OkABguOYmPMRBTLM%2FKEDBdfpCJvo2rnzKyUWtzSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIkp%2FYpQ46skMScMqKtwDNHmhxoNKpop773m6adGWvVpKGpz84ihLsiDacm%2FTQhNbKWvWCszCncCIfwf7w2LmLS%2FRLz9EOtZn6Q2gOtlf%2FPZFRBJmjOhTW81SOlUgR%2BWVhKX5%2F%2BlsDYyP2T6%2Fi9hoduK0fBYhbwXJVF1F3GrvbXLH2umuhGVzUrh%2Fheg2JsdBttBWYGol9KmIRQKZQXjqLkNijkdn14YGregG5ZbxTOU60vBaXBp8%2FjO2PkCtmVulZm2iFJANQ5QSZrtd1KD%2F%2BsYW4C710n3Dlidtm1g3VADwdD5A47UmY1AFGupP%2B5RnEMfgxc2kP3peq56fNpe7784x1ZcdEARcY7f5sXGtpH8X5Wh9CS0w2hRbiN%2FGWKH4tcRIXsN31K3%2Bm635mASTiqGu1%2B8cc0Plnhbr6mj8rySkBeNsn26F22JQrhy7YfdX%2FXO0Xd19wRiVT1tRKlPZObXxsPV9U88Q9WhX%2B%2FkWKqvbr2qeNxZp%2FPdA5T0P3Yjyd3DBIqmOc%2F7rk%2BuxwOAVZoJ6qE0yNviqy6v5UKtDd%2FSoYWYySLIe6a89AJDGtGsIduIx1ktrJ8wkJefsdUEpAbixrvREsOyjT5ywT7gOJNDovM%2BLY%2FnaJ2kzz5mxP0nvwB6tj3XbhtdkzjAwnMXswwY6pgGWd31nLxx%2Bf2gGbn36fmvqkSkA%2B9IZjvkNfEtUQO2SgVMDwAAKxzkOY44KE4nlIGASj1mcYa8ESs%2FAEY4TlEg4mxwfv2HBV9Gkj%2Fy6NuvM%2FCzbhC3iFMTzLXSgVTVgWHOzQpU0bDTayBorRTAq5MQJKNI6nmJZrV4TqBbia2oYxiWzZGVZ4d%2B8OqWf1gr8%2BoPx4PXRAqhQShlLumN7LDCOBx%2BCBE5F&X-Amz-Signature=320accf4282591feef890bf3b89f154011fb6695c252ea87b9539a3abf25c8e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
