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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654NJDB56%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC0Tj%2F9EaEtj%2BsvPVwAVOxhA0u13HZADsIc33RA76Zk8QIhALHlrdt06R%2B28kLm12cVNu6ZxzNJK8FRi6vVGpeSKsWbKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK6fkRgtQEVDk8sIYq3AO7DNa6Qwk6mMqWPvKMkwzhZxFBimIs0Yv3%2BgheM07n2M5hOxcGZZZYtDwr3CswpQyrfTFR3og6NJp8uAjfBK18u%2FhD0VGsYrEZEfrsRfX8L8MLOqRNfABBNb7hrJo%2BodY0nbtsXSKSnU4FFqyy%2FEE1BaSG8Qb9r6H%2B%2BG6e8uu8VUT5RTfueGx1DlD3IxTGqj6ZTZz3pkJ06VA2KwWJvDnS4aXJnCuX9Dd7kQWAlWylyYLPJbk%2BWkY9CtyfZfKeZi3%2F6%2BwJ%2FKBocsQj%2BA7GGmnS%2F6D3C5hbNS5a8qc6lQSTNBEq%2FewE22Xsp2CZH8rpLeN5o0SnHf9lBMfQsaWX2CXS3Vu%2BlDqkLoBXHXwSj8PDzH0oXOpgoFZvueEXnucaJ0CfNtdAkFfO0iFk2gi8EoJFuW1wY0ITsBg9ggJHAVWP4vCJ%2F9QaDpv00lNkDMWKEM1G0NDTiBVURxJyfF1TGsPjRUiTjWVmKOatEuQ6czvSF2mOcQQ5YEgd%2FgBZDRsItKEtfhAF%2Fl6vY1pMgD4ND2ZKnzIPgnsG954ncC05ItIdFYEd%2FFfzFhcsM%2Bd%2F7kSzKJwFJ2r6LTPIiKwLuAaDEE1qSnU4ToLxkFI5dwFcy5wFkqqINWihtCUhI7cDCTDG1LbBBjqkAdv9eijsLlfcI32ZRvkNQp%2FMYvmaOFHu0SqanW61rDvn%2Brer3XA3WWOMSF1tNsMe3Kevig530OlE%2BbCDnNUqjijZuumbdRDl9vTD3ZlL12c4tExSPbf1MC4C6%2F5G5Ie22TWwnR8ZFfvwdC1MVNDCGdMPq6R1yC60YKYJGlXxz1OJ%2FMUFU9zLlaOkll74HEBYVCRjUY6hCvgf1M6l%2FWfN26gL00PM&X-Amz-Signature=f8ea467fcbadd212c6c6d3578aac0381eff58287e7d3eb4b0486c90d69dfbe58&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654NJDB56%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC0Tj%2F9EaEtj%2BsvPVwAVOxhA0u13HZADsIc33RA76Zk8QIhALHlrdt06R%2B28kLm12cVNu6ZxzNJK8FRi6vVGpeSKsWbKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK6fkRgtQEVDk8sIYq3AO7DNa6Qwk6mMqWPvKMkwzhZxFBimIs0Yv3%2BgheM07n2M5hOxcGZZZYtDwr3CswpQyrfTFR3og6NJp8uAjfBK18u%2FhD0VGsYrEZEfrsRfX8L8MLOqRNfABBNb7hrJo%2BodY0nbtsXSKSnU4FFqyy%2FEE1BaSG8Qb9r6H%2B%2BG6e8uu8VUT5RTfueGx1DlD3IxTGqj6ZTZz3pkJ06VA2KwWJvDnS4aXJnCuX9Dd7kQWAlWylyYLPJbk%2BWkY9CtyfZfKeZi3%2F6%2BwJ%2FKBocsQj%2BA7GGmnS%2F6D3C5hbNS5a8qc6lQSTNBEq%2FewE22Xsp2CZH8rpLeN5o0SnHf9lBMfQsaWX2CXS3Vu%2BlDqkLoBXHXwSj8PDzH0oXOpgoFZvueEXnucaJ0CfNtdAkFfO0iFk2gi8EoJFuW1wY0ITsBg9ggJHAVWP4vCJ%2F9QaDpv00lNkDMWKEM1G0NDTiBVURxJyfF1TGsPjRUiTjWVmKOatEuQ6czvSF2mOcQQ5YEgd%2FgBZDRsItKEtfhAF%2Fl6vY1pMgD4ND2ZKnzIPgnsG954ncC05ItIdFYEd%2FFfzFhcsM%2Bd%2F7kSzKJwFJ2r6LTPIiKwLuAaDEE1qSnU4ToLxkFI5dwFcy5wFkqqINWihtCUhI7cDCTDG1LbBBjqkAdv9eijsLlfcI32ZRvkNQp%2FMYvmaOFHu0SqanW61rDvn%2Brer3XA3WWOMSF1tNsMe3Kevig530OlE%2BbCDnNUqjijZuumbdRDl9vTD3ZlL12c4tExSPbf1MC4C6%2F5G5Ie22TWwnR8ZFfvwdC1MVNDCGdMPq6R1yC60YKYJGlXxz1OJ%2FMUFU9zLlaOkll74HEBYVCRjUY6hCvgf1M6l%2FWfN26gL00PM&X-Amz-Signature=6cca58c6957a7f2935cc788b83a0b68cbdd9df233e5d5e6eedb7f14e5da4e608&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654NJDB56%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC0Tj%2F9EaEtj%2BsvPVwAVOxhA0u13HZADsIc33RA76Zk8QIhALHlrdt06R%2B28kLm12cVNu6ZxzNJK8FRi6vVGpeSKsWbKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK6fkRgtQEVDk8sIYq3AO7DNa6Qwk6mMqWPvKMkwzhZxFBimIs0Yv3%2BgheM07n2M5hOxcGZZZYtDwr3CswpQyrfTFR3og6NJp8uAjfBK18u%2FhD0VGsYrEZEfrsRfX8L8MLOqRNfABBNb7hrJo%2BodY0nbtsXSKSnU4FFqyy%2FEE1BaSG8Qb9r6H%2B%2BG6e8uu8VUT5RTfueGx1DlD3IxTGqj6ZTZz3pkJ06VA2KwWJvDnS4aXJnCuX9Dd7kQWAlWylyYLPJbk%2BWkY9CtyfZfKeZi3%2F6%2BwJ%2FKBocsQj%2BA7GGmnS%2F6D3C5hbNS5a8qc6lQSTNBEq%2FewE22Xsp2CZH8rpLeN5o0SnHf9lBMfQsaWX2CXS3Vu%2BlDqkLoBXHXwSj8PDzH0oXOpgoFZvueEXnucaJ0CfNtdAkFfO0iFk2gi8EoJFuW1wY0ITsBg9ggJHAVWP4vCJ%2F9QaDpv00lNkDMWKEM1G0NDTiBVURxJyfF1TGsPjRUiTjWVmKOatEuQ6czvSF2mOcQQ5YEgd%2FgBZDRsItKEtfhAF%2Fl6vY1pMgD4ND2ZKnzIPgnsG954ncC05ItIdFYEd%2FFfzFhcsM%2Bd%2F7kSzKJwFJ2r6LTPIiKwLuAaDEE1qSnU4ToLxkFI5dwFcy5wFkqqINWihtCUhI7cDCTDG1LbBBjqkAdv9eijsLlfcI32ZRvkNQp%2FMYvmaOFHu0SqanW61rDvn%2Brer3XA3WWOMSF1tNsMe3Kevig530OlE%2BbCDnNUqjijZuumbdRDl9vTD3ZlL12c4tExSPbf1MC4C6%2F5G5Ie22TWwnR8ZFfvwdC1MVNDCGdMPq6R1yC60YKYJGlXxz1OJ%2FMUFU9zLlaOkll74HEBYVCRjUY6hCvgf1M6l%2FWfN26gL00PM&X-Amz-Signature=7a5f7d58d314260d20b3c3edbb5757b788edcfa429c837e138a2a2a5e60a69a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654NJDB56%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC0Tj%2F9EaEtj%2BsvPVwAVOxhA0u13HZADsIc33RA76Zk8QIhALHlrdt06R%2B28kLm12cVNu6ZxzNJK8FRi6vVGpeSKsWbKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK6fkRgtQEVDk8sIYq3AO7DNa6Qwk6mMqWPvKMkwzhZxFBimIs0Yv3%2BgheM07n2M5hOxcGZZZYtDwr3CswpQyrfTFR3og6NJp8uAjfBK18u%2FhD0VGsYrEZEfrsRfX8L8MLOqRNfABBNb7hrJo%2BodY0nbtsXSKSnU4FFqyy%2FEE1BaSG8Qb9r6H%2B%2BG6e8uu8VUT5RTfueGx1DlD3IxTGqj6ZTZz3pkJ06VA2KwWJvDnS4aXJnCuX9Dd7kQWAlWylyYLPJbk%2BWkY9CtyfZfKeZi3%2F6%2BwJ%2FKBocsQj%2BA7GGmnS%2F6D3C5hbNS5a8qc6lQSTNBEq%2FewE22Xsp2CZH8rpLeN5o0SnHf9lBMfQsaWX2CXS3Vu%2BlDqkLoBXHXwSj8PDzH0oXOpgoFZvueEXnucaJ0CfNtdAkFfO0iFk2gi8EoJFuW1wY0ITsBg9ggJHAVWP4vCJ%2F9QaDpv00lNkDMWKEM1G0NDTiBVURxJyfF1TGsPjRUiTjWVmKOatEuQ6czvSF2mOcQQ5YEgd%2FgBZDRsItKEtfhAF%2Fl6vY1pMgD4ND2ZKnzIPgnsG954ncC05ItIdFYEd%2FFfzFhcsM%2Bd%2F7kSzKJwFJ2r6LTPIiKwLuAaDEE1qSnU4ToLxkFI5dwFcy5wFkqqINWihtCUhI7cDCTDG1LbBBjqkAdv9eijsLlfcI32ZRvkNQp%2FMYvmaOFHu0SqanW61rDvn%2Brer3XA3WWOMSF1tNsMe3Kevig530OlE%2BbCDnNUqjijZuumbdRDl9vTD3ZlL12c4tExSPbf1MC4C6%2F5G5Ie22TWwnR8ZFfvwdC1MVNDCGdMPq6R1yC60YKYJGlXxz1OJ%2FMUFU9zLlaOkll74HEBYVCRjUY6hCvgf1M6l%2FWfN26gL00PM&X-Amz-Signature=9d24ef30cf4b4787c771239ea0d065d0ef072aca6ca14410506c1663b6cfe506&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654NJDB56%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC0Tj%2F9EaEtj%2BsvPVwAVOxhA0u13HZADsIc33RA76Zk8QIhALHlrdt06R%2B28kLm12cVNu6ZxzNJK8FRi6vVGpeSKsWbKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK6fkRgtQEVDk8sIYq3AO7DNa6Qwk6mMqWPvKMkwzhZxFBimIs0Yv3%2BgheM07n2M5hOxcGZZZYtDwr3CswpQyrfTFR3og6NJp8uAjfBK18u%2FhD0VGsYrEZEfrsRfX8L8MLOqRNfABBNb7hrJo%2BodY0nbtsXSKSnU4FFqyy%2FEE1BaSG8Qb9r6H%2B%2BG6e8uu8VUT5RTfueGx1DlD3IxTGqj6ZTZz3pkJ06VA2KwWJvDnS4aXJnCuX9Dd7kQWAlWylyYLPJbk%2BWkY9CtyfZfKeZi3%2F6%2BwJ%2FKBocsQj%2BA7GGmnS%2F6D3C5hbNS5a8qc6lQSTNBEq%2FewE22Xsp2CZH8rpLeN5o0SnHf9lBMfQsaWX2CXS3Vu%2BlDqkLoBXHXwSj8PDzH0oXOpgoFZvueEXnucaJ0CfNtdAkFfO0iFk2gi8EoJFuW1wY0ITsBg9ggJHAVWP4vCJ%2F9QaDpv00lNkDMWKEM1G0NDTiBVURxJyfF1TGsPjRUiTjWVmKOatEuQ6czvSF2mOcQQ5YEgd%2FgBZDRsItKEtfhAF%2Fl6vY1pMgD4ND2ZKnzIPgnsG954ncC05ItIdFYEd%2FFfzFhcsM%2Bd%2F7kSzKJwFJ2r6LTPIiKwLuAaDEE1qSnU4ToLxkFI5dwFcy5wFkqqINWihtCUhI7cDCTDG1LbBBjqkAdv9eijsLlfcI32ZRvkNQp%2FMYvmaOFHu0SqanW61rDvn%2Brer3XA3WWOMSF1tNsMe3Kevig530OlE%2BbCDnNUqjijZuumbdRDl9vTD3ZlL12c4tExSPbf1MC4C6%2F5G5Ie22TWwnR8ZFfvwdC1MVNDCGdMPq6R1yC60YKYJGlXxz1OJ%2FMUFU9zLlaOkll74HEBYVCRjUY6hCvgf1M6l%2FWfN26gL00PM&X-Amz-Signature=9d5de6b4f6a8717e64f8b56d5bd97b4a43aa1a4d0136cf4749d55bdcdfed8c46&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654NJDB56%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC0Tj%2F9EaEtj%2BsvPVwAVOxhA0u13HZADsIc33RA76Zk8QIhALHlrdt06R%2B28kLm12cVNu6ZxzNJK8FRi6vVGpeSKsWbKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK6fkRgtQEVDk8sIYq3AO7DNa6Qwk6mMqWPvKMkwzhZxFBimIs0Yv3%2BgheM07n2M5hOxcGZZZYtDwr3CswpQyrfTFR3og6NJp8uAjfBK18u%2FhD0VGsYrEZEfrsRfX8L8MLOqRNfABBNb7hrJo%2BodY0nbtsXSKSnU4FFqyy%2FEE1BaSG8Qb9r6H%2B%2BG6e8uu8VUT5RTfueGx1DlD3IxTGqj6ZTZz3pkJ06VA2KwWJvDnS4aXJnCuX9Dd7kQWAlWylyYLPJbk%2BWkY9CtyfZfKeZi3%2F6%2BwJ%2FKBocsQj%2BA7GGmnS%2F6D3C5hbNS5a8qc6lQSTNBEq%2FewE22Xsp2CZH8rpLeN5o0SnHf9lBMfQsaWX2CXS3Vu%2BlDqkLoBXHXwSj8PDzH0oXOpgoFZvueEXnucaJ0CfNtdAkFfO0iFk2gi8EoJFuW1wY0ITsBg9ggJHAVWP4vCJ%2F9QaDpv00lNkDMWKEM1G0NDTiBVURxJyfF1TGsPjRUiTjWVmKOatEuQ6czvSF2mOcQQ5YEgd%2FgBZDRsItKEtfhAF%2Fl6vY1pMgD4ND2ZKnzIPgnsG954ncC05ItIdFYEd%2FFfzFhcsM%2Bd%2F7kSzKJwFJ2r6LTPIiKwLuAaDEE1qSnU4ToLxkFI5dwFcy5wFkqqINWihtCUhI7cDCTDG1LbBBjqkAdv9eijsLlfcI32ZRvkNQp%2FMYvmaOFHu0SqanW61rDvn%2Brer3XA3WWOMSF1tNsMe3Kevig530OlE%2BbCDnNUqjijZuumbdRDl9vTD3ZlL12c4tExSPbf1MC4C6%2F5G5Ie22TWwnR8ZFfvwdC1MVNDCGdMPq6R1yC60YKYJGlXxz1OJ%2FMUFU9zLlaOkll74HEBYVCRjUY6hCvgf1M6l%2FWfN26gL00PM&X-Amz-Signature=549ad97b16b54d52b23befb3ae23af7d1c8bdbe39c59423fb31e501dc5e09dc2&X-Amz-SignedHeaders=host&x-id=GetObject)
