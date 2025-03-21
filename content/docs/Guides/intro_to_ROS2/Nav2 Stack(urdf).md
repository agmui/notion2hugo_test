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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542FGTCT%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC2qlbTxzwtD%2Fc08SHUxW02Dcsmkl%2B7uRw%2F2zpDl86lyQIhANjbd6L5uVH62t73k2%2FtM6Bz1b7rJpTxSl9K9%2FCY%2BpsGKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyG1uQQW3NjpRegAwq3ANUT%2FjEOsNfe7TrD9b%2B4kRogwuH8y5PXREOs0usjqcYCjg0yNspV6XonfyiIeY5TgxdIFYuyiq80jnTdhxkDrDbx31OjPZZ5wDgC9CtwtaeVpjaDjrOh%2FhftTwBXq2gVZC%2BatDG2EkZGbIMnadRKquUH4gjsS8uBHycE7OX%2FGLfKdYaZvQjxk%2BOPXKtpYZsh8SMUYK%2Fe9w1OH%2BCmBvenawC63MbFoRE3kNyLbWgt9%2FSe77EsKebtQx2CAag6593KN0xmx9lYBcA2CCW93QrbgMb9GGx3X8GCHN34ZRtdLyS8p3NYnWXw3HyRw1k6X18DfMu7dsdZ8eCBAdy3Odk5aVajIzQHuQoZGgmP1ZL2KmCNvtjfDJsyaBaLE5pZOeLKeJ91nUIX4TaKAnDtYanqwl0sVFPLetAGQ7iLNw%2BDwcHcWgqUmDTzLsFMOtny09iktHK%2B11KrhXqM9eytab8qROBfM68sz1jEgL9f5lTqN26n2R1SZoiv030mDb1tiULsNRT6uXO0I4kqE1yZ5Ho8IvOBs4tFPFUv2rEyny870P0%2BRGBm%2FhyZSzksBth9mb5fWyadWSkOT%2BEAvPOFB7rCjz59izcdwgR5AhdU0THla5mPUKHHLyjnvsjG%2BaCZDDwmfW%2BBjqkAZFXgjRooRtKwXf8JY2IlOGN2M%2FIKPG3cWSDolNjANMC6A6w4zh0MiJcZkU7XwQcrdpYO3s7KufMIJjkOUvkUV1e5EvHnwuWbwKzFrXSD6cZ3Wtlfh3SoPMuqLlP12DCYbZcG%2BDGZv2HuuuCw2qwnoU00BDDAe%2B9F1qn24R8lhJbvqP2jBweADn12RpAm3M81DxbXm7Qy1UISUkGd23pAtnK5vEJ&X-Amz-Signature=f86ebf37bafb1406f53ed794503ff00f86a00a0e5ea67d6e736a226b205abe63&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542FGTCT%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC2qlbTxzwtD%2Fc08SHUxW02Dcsmkl%2B7uRw%2F2zpDl86lyQIhANjbd6L5uVH62t73k2%2FtM6Bz1b7rJpTxSl9K9%2FCY%2BpsGKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyG1uQQW3NjpRegAwq3ANUT%2FjEOsNfe7TrD9b%2B4kRogwuH8y5PXREOs0usjqcYCjg0yNspV6XonfyiIeY5TgxdIFYuyiq80jnTdhxkDrDbx31OjPZZ5wDgC9CtwtaeVpjaDjrOh%2FhftTwBXq2gVZC%2BatDG2EkZGbIMnadRKquUH4gjsS8uBHycE7OX%2FGLfKdYaZvQjxk%2BOPXKtpYZsh8SMUYK%2Fe9w1OH%2BCmBvenawC63MbFoRE3kNyLbWgt9%2FSe77EsKebtQx2CAag6593KN0xmx9lYBcA2CCW93QrbgMb9GGx3X8GCHN34ZRtdLyS8p3NYnWXw3HyRw1k6X18DfMu7dsdZ8eCBAdy3Odk5aVajIzQHuQoZGgmP1ZL2KmCNvtjfDJsyaBaLE5pZOeLKeJ91nUIX4TaKAnDtYanqwl0sVFPLetAGQ7iLNw%2BDwcHcWgqUmDTzLsFMOtny09iktHK%2B11KrhXqM9eytab8qROBfM68sz1jEgL9f5lTqN26n2R1SZoiv030mDb1tiULsNRT6uXO0I4kqE1yZ5Ho8IvOBs4tFPFUv2rEyny870P0%2BRGBm%2FhyZSzksBth9mb5fWyadWSkOT%2BEAvPOFB7rCjz59izcdwgR5AhdU0THla5mPUKHHLyjnvsjG%2BaCZDDwmfW%2BBjqkAZFXgjRooRtKwXf8JY2IlOGN2M%2FIKPG3cWSDolNjANMC6A6w4zh0MiJcZkU7XwQcrdpYO3s7KufMIJjkOUvkUV1e5EvHnwuWbwKzFrXSD6cZ3Wtlfh3SoPMuqLlP12DCYbZcG%2BDGZv2HuuuCw2qwnoU00BDDAe%2B9F1qn24R8lhJbvqP2jBweADn12RpAm3M81DxbXm7Qy1UISUkGd23pAtnK5vEJ&X-Amz-Signature=7eece4d8ff86ba0236323ecc219f729534dfcef44dd453457bef9ed5488bea73&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542FGTCT%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC2qlbTxzwtD%2Fc08SHUxW02Dcsmkl%2B7uRw%2F2zpDl86lyQIhANjbd6L5uVH62t73k2%2FtM6Bz1b7rJpTxSl9K9%2FCY%2BpsGKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyG1uQQW3NjpRegAwq3ANUT%2FjEOsNfe7TrD9b%2B4kRogwuH8y5PXREOs0usjqcYCjg0yNspV6XonfyiIeY5TgxdIFYuyiq80jnTdhxkDrDbx31OjPZZ5wDgC9CtwtaeVpjaDjrOh%2FhftTwBXq2gVZC%2BatDG2EkZGbIMnadRKquUH4gjsS8uBHycE7OX%2FGLfKdYaZvQjxk%2BOPXKtpYZsh8SMUYK%2Fe9w1OH%2BCmBvenawC63MbFoRE3kNyLbWgt9%2FSe77EsKebtQx2CAag6593KN0xmx9lYBcA2CCW93QrbgMb9GGx3X8GCHN34ZRtdLyS8p3NYnWXw3HyRw1k6X18DfMu7dsdZ8eCBAdy3Odk5aVajIzQHuQoZGgmP1ZL2KmCNvtjfDJsyaBaLE5pZOeLKeJ91nUIX4TaKAnDtYanqwl0sVFPLetAGQ7iLNw%2BDwcHcWgqUmDTzLsFMOtny09iktHK%2B11KrhXqM9eytab8qROBfM68sz1jEgL9f5lTqN26n2R1SZoiv030mDb1tiULsNRT6uXO0I4kqE1yZ5Ho8IvOBs4tFPFUv2rEyny870P0%2BRGBm%2FhyZSzksBth9mb5fWyadWSkOT%2BEAvPOFB7rCjz59izcdwgR5AhdU0THla5mPUKHHLyjnvsjG%2BaCZDDwmfW%2BBjqkAZFXgjRooRtKwXf8JY2IlOGN2M%2FIKPG3cWSDolNjANMC6A6w4zh0MiJcZkU7XwQcrdpYO3s7KufMIJjkOUvkUV1e5EvHnwuWbwKzFrXSD6cZ3Wtlfh3SoPMuqLlP12DCYbZcG%2BDGZv2HuuuCw2qwnoU00BDDAe%2B9F1qn24R8lhJbvqP2jBweADn12RpAm3M81DxbXm7Qy1UISUkGd23pAtnK5vEJ&X-Amz-Signature=5d8ad55b895238b7781361597ed579af571783472e9e9ee00f0116a8e44b80af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542FGTCT%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC2qlbTxzwtD%2Fc08SHUxW02Dcsmkl%2B7uRw%2F2zpDl86lyQIhANjbd6L5uVH62t73k2%2FtM6Bz1b7rJpTxSl9K9%2FCY%2BpsGKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyG1uQQW3NjpRegAwq3ANUT%2FjEOsNfe7TrD9b%2B4kRogwuH8y5PXREOs0usjqcYCjg0yNspV6XonfyiIeY5TgxdIFYuyiq80jnTdhxkDrDbx31OjPZZ5wDgC9CtwtaeVpjaDjrOh%2FhftTwBXq2gVZC%2BatDG2EkZGbIMnadRKquUH4gjsS8uBHycE7OX%2FGLfKdYaZvQjxk%2BOPXKtpYZsh8SMUYK%2Fe9w1OH%2BCmBvenawC63MbFoRE3kNyLbWgt9%2FSe77EsKebtQx2CAag6593KN0xmx9lYBcA2CCW93QrbgMb9GGx3X8GCHN34ZRtdLyS8p3NYnWXw3HyRw1k6X18DfMu7dsdZ8eCBAdy3Odk5aVajIzQHuQoZGgmP1ZL2KmCNvtjfDJsyaBaLE5pZOeLKeJ91nUIX4TaKAnDtYanqwl0sVFPLetAGQ7iLNw%2BDwcHcWgqUmDTzLsFMOtny09iktHK%2B11KrhXqM9eytab8qROBfM68sz1jEgL9f5lTqN26n2R1SZoiv030mDb1tiULsNRT6uXO0I4kqE1yZ5Ho8IvOBs4tFPFUv2rEyny870P0%2BRGBm%2FhyZSzksBth9mb5fWyadWSkOT%2BEAvPOFB7rCjz59izcdwgR5AhdU0THla5mPUKHHLyjnvsjG%2BaCZDDwmfW%2BBjqkAZFXgjRooRtKwXf8JY2IlOGN2M%2FIKPG3cWSDolNjANMC6A6w4zh0MiJcZkU7XwQcrdpYO3s7KufMIJjkOUvkUV1e5EvHnwuWbwKzFrXSD6cZ3Wtlfh3SoPMuqLlP12DCYbZcG%2BDGZv2HuuuCw2qwnoU00BDDAe%2B9F1qn24R8lhJbvqP2jBweADn12RpAm3M81DxbXm7Qy1UISUkGd23pAtnK5vEJ&X-Amz-Signature=649cb4ff467ca2e499c8f1c92640a02418e8b9cfc0dd9fd318614394ff8eb9f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542FGTCT%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC2qlbTxzwtD%2Fc08SHUxW02Dcsmkl%2B7uRw%2F2zpDl86lyQIhANjbd6L5uVH62t73k2%2FtM6Bz1b7rJpTxSl9K9%2FCY%2BpsGKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyG1uQQW3NjpRegAwq3ANUT%2FjEOsNfe7TrD9b%2B4kRogwuH8y5PXREOs0usjqcYCjg0yNspV6XonfyiIeY5TgxdIFYuyiq80jnTdhxkDrDbx31OjPZZ5wDgC9CtwtaeVpjaDjrOh%2FhftTwBXq2gVZC%2BatDG2EkZGbIMnadRKquUH4gjsS8uBHycE7OX%2FGLfKdYaZvQjxk%2BOPXKtpYZsh8SMUYK%2Fe9w1OH%2BCmBvenawC63MbFoRE3kNyLbWgt9%2FSe77EsKebtQx2CAag6593KN0xmx9lYBcA2CCW93QrbgMb9GGx3X8GCHN34ZRtdLyS8p3NYnWXw3HyRw1k6X18DfMu7dsdZ8eCBAdy3Odk5aVajIzQHuQoZGgmP1ZL2KmCNvtjfDJsyaBaLE5pZOeLKeJ91nUIX4TaKAnDtYanqwl0sVFPLetAGQ7iLNw%2BDwcHcWgqUmDTzLsFMOtny09iktHK%2B11KrhXqM9eytab8qROBfM68sz1jEgL9f5lTqN26n2R1SZoiv030mDb1tiULsNRT6uXO0I4kqE1yZ5Ho8IvOBs4tFPFUv2rEyny870P0%2BRGBm%2FhyZSzksBth9mb5fWyadWSkOT%2BEAvPOFB7rCjz59izcdwgR5AhdU0THla5mPUKHHLyjnvsjG%2BaCZDDwmfW%2BBjqkAZFXgjRooRtKwXf8JY2IlOGN2M%2FIKPG3cWSDolNjANMC6A6w4zh0MiJcZkU7XwQcrdpYO3s7KufMIJjkOUvkUV1e5EvHnwuWbwKzFrXSD6cZ3Wtlfh3SoPMuqLlP12DCYbZcG%2BDGZv2HuuuCw2qwnoU00BDDAe%2B9F1qn24R8lhJbvqP2jBweADn12RpAm3M81DxbXm7Qy1UISUkGd23pAtnK5vEJ&X-Amz-Signature=8fb168aac9aef11d0d534e5921bdf1118374ef66b2d378ca0b277a9b8064e775&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466542FGTCT%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQC2qlbTxzwtD%2Fc08SHUxW02Dcsmkl%2B7uRw%2F2zpDl86lyQIhANjbd6L5uVH62t73k2%2FtM6Bz1b7rJpTxSl9K9%2FCY%2BpsGKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyG1uQQW3NjpRegAwq3ANUT%2FjEOsNfe7TrD9b%2B4kRogwuH8y5PXREOs0usjqcYCjg0yNspV6XonfyiIeY5TgxdIFYuyiq80jnTdhxkDrDbx31OjPZZ5wDgC9CtwtaeVpjaDjrOh%2FhftTwBXq2gVZC%2BatDG2EkZGbIMnadRKquUH4gjsS8uBHycE7OX%2FGLfKdYaZvQjxk%2BOPXKtpYZsh8SMUYK%2Fe9w1OH%2BCmBvenawC63MbFoRE3kNyLbWgt9%2FSe77EsKebtQx2CAag6593KN0xmx9lYBcA2CCW93QrbgMb9GGx3X8GCHN34ZRtdLyS8p3NYnWXw3HyRw1k6X18DfMu7dsdZ8eCBAdy3Odk5aVajIzQHuQoZGgmP1ZL2KmCNvtjfDJsyaBaLE5pZOeLKeJ91nUIX4TaKAnDtYanqwl0sVFPLetAGQ7iLNw%2BDwcHcWgqUmDTzLsFMOtny09iktHK%2B11KrhXqM9eytab8qROBfM68sz1jEgL9f5lTqN26n2R1SZoiv030mDb1tiULsNRT6uXO0I4kqE1yZ5Ho8IvOBs4tFPFUv2rEyny870P0%2BRGBm%2FhyZSzksBth9mb5fWyadWSkOT%2BEAvPOFB7rCjz59izcdwgR5AhdU0THla5mPUKHHLyjnvsjG%2BaCZDDwmfW%2BBjqkAZFXgjRooRtKwXf8JY2IlOGN2M%2FIKPG3cWSDolNjANMC6A6w4zh0MiJcZkU7XwQcrdpYO3s7KufMIJjkOUvkUV1e5EvHnwuWbwKzFrXSD6cZ3Wtlfh3SoPMuqLlP12DCYbZcG%2BDGZv2HuuuCw2qwnoU00BDDAe%2B9F1qn24R8lhJbvqP2jBweADn12RpAm3M81DxbXm7Qy1UISUkGd23pAtnK5vEJ&X-Amz-Signature=3485b034b697aeefefb2bbf897b0611f0afc79ae0435d226e9ca5e90582969d0&X-Amz-SignedHeaders=host&x-id=GetObject)
