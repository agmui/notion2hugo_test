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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIC363N%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfqluXX%2Fal1YzJnR9zT4%2F%2F8c9vVC4lx9rPYymxSf3tvAiEAztWM5kDsExkbqhiMBg0QA7oAjZUebw4oLmuYk9UDtlAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKkDhfwkQq9SrFZBPyrcAydDIu2JDwj37CXkWX4e1ENx%2FylCEq51vYxXDtcHcW2rYMVBi9VPv%2Bh1we6GXSR18TPvtlBbGMDCqmJy0nHk2N4Pv0hVdXDnIwy%2F%2Fk0vrmDnYF322ZO4Ezq2zGcNykQiOU4rVfB3b0zocPgNs1ZLvnxarTAtp%2BQo5dcdSLj5HocPXnj3%2FMLne%2BjXkMnN657E814c5h%2BzqFESzmKH1Qm9dUxUdwPtM%2B0ZlLMQ3mmZFpzSkSqq0o4t%2FFJtcKxxPAJrzicTj6m%2B%2BSnUu6VeUe69ELd2CR3hHnHu84ze0LzkaXGcCfdYnSwniLiJo32XVziMPw5w8c2DCGY7woGp%2BU50nx599%2BBi2Vz2%2FpqWGT1XHUknJ5u1oaW96ji1YCDafRbU9KoW%2Bi3FL%2FuBR4YzmoBoqWFKW9wvLrHCopWTIPtm18asIpvxW9sUR5r7W5DTaQlLKhhgwpd2xdRwNR6ux65eOlY2CQa9nmCUR99nbh8z4xFwUwqlbpyoViV855KVBUmk1qpYPVehCvu9zOQeaJr4jjyk47vXvZIzr%2ByuDLriry1He8wzDOxMEcIUgEwl4O2mGBdmH0mPnHzzNy240ga%2B3XgfnAW%2BZ%2FP8%2Fh9bMIZBqtGeZWOiOaWtCHQZW3kcMIXHqr4GOqUBtCxdSClmV1uOhBJsOA%2BzoYn8QlF7afpwpKohNRbBBp0ik2oMLlD9sLb5sMfaBJThw9P%2FMPekUsqW8ONRLkXPW4fIF3B2TFNzVw5g%2FB9poiX1emnDfpQa%2BxLW1AZ6D5g890h5dVYsGTfstorrWeamP9kv6Gb6Og%2FEyGNHVXouUrl268%2FOyOQpezUhebUOma5ZF7YqNVLpF8h43VPIhKOwkpR9of%2F9&X-Amz-Signature=40c1c48623fc395fc51c04d454c8d82f1b1a845a3f5273948f0e5587bc8e103e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIC363N%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfqluXX%2Fal1YzJnR9zT4%2F%2F8c9vVC4lx9rPYymxSf3tvAiEAztWM5kDsExkbqhiMBg0QA7oAjZUebw4oLmuYk9UDtlAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKkDhfwkQq9SrFZBPyrcAydDIu2JDwj37CXkWX4e1ENx%2FylCEq51vYxXDtcHcW2rYMVBi9VPv%2Bh1we6GXSR18TPvtlBbGMDCqmJy0nHk2N4Pv0hVdXDnIwy%2F%2Fk0vrmDnYF322ZO4Ezq2zGcNykQiOU4rVfB3b0zocPgNs1ZLvnxarTAtp%2BQo5dcdSLj5HocPXnj3%2FMLne%2BjXkMnN657E814c5h%2BzqFESzmKH1Qm9dUxUdwPtM%2B0ZlLMQ3mmZFpzSkSqq0o4t%2FFJtcKxxPAJrzicTj6m%2B%2BSnUu6VeUe69ELd2CR3hHnHu84ze0LzkaXGcCfdYnSwniLiJo32XVziMPw5w8c2DCGY7woGp%2BU50nx599%2BBi2Vz2%2FpqWGT1XHUknJ5u1oaW96ji1YCDafRbU9KoW%2Bi3FL%2FuBR4YzmoBoqWFKW9wvLrHCopWTIPtm18asIpvxW9sUR5r7W5DTaQlLKhhgwpd2xdRwNR6ux65eOlY2CQa9nmCUR99nbh8z4xFwUwqlbpyoViV855KVBUmk1qpYPVehCvu9zOQeaJr4jjyk47vXvZIzr%2ByuDLriry1He8wzDOxMEcIUgEwl4O2mGBdmH0mPnHzzNy240ga%2B3XgfnAW%2BZ%2FP8%2Fh9bMIZBqtGeZWOiOaWtCHQZW3kcMIXHqr4GOqUBtCxdSClmV1uOhBJsOA%2BzoYn8QlF7afpwpKohNRbBBp0ik2oMLlD9sLb5sMfaBJThw9P%2FMPekUsqW8ONRLkXPW4fIF3B2TFNzVw5g%2FB9poiX1emnDfpQa%2BxLW1AZ6D5g890h5dVYsGTfstorrWeamP9kv6Gb6Og%2FEyGNHVXouUrl268%2FOyOQpezUhebUOma5ZF7YqNVLpF8h43VPIhKOwkpR9of%2F9&X-Amz-Signature=030ca9665b9f8d09e60cbb1f8b745d4c5bab8f57a54e63e451e4e399ea2c79bf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIC363N%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfqluXX%2Fal1YzJnR9zT4%2F%2F8c9vVC4lx9rPYymxSf3tvAiEAztWM5kDsExkbqhiMBg0QA7oAjZUebw4oLmuYk9UDtlAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKkDhfwkQq9SrFZBPyrcAydDIu2JDwj37CXkWX4e1ENx%2FylCEq51vYxXDtcHcW2rYMVBi9VPv%2Bh1we6GXSR18TPvtlBbGMDCqmJy0nHk2N4Pv0hVdXDnIwy%2F%2Fk0vrmDnYF322ZO4Ezq2zGcNykQiOU4rVfB3b0zocPgNs1ZLvnxarTAtp%2BQo5dcdSLj5HocPXnj3%2FMLne%2BjXkMnN657E814c5h%2BzqFESzmKH1Qm9dUxUdwPtM%2B0ZlLMQ3mmZFpzSkSqq0o4t%2FFJtcKxxPAJrzicTj6m%2B%2BSnUu6VeUe69ELd2CR3hHnHu84ze0LzkaXGcCfdYnSwniLiJo32XVziMPw5w8c2DCGY7woGp%2BU50nx599%2BBi2Vz2%2FpqWGT1XHUknJ5u1oaW96ji1YCDafRbU9KoW%2Bi3FL%2FuBR4YzmoBoqWFKW9wvLrHCopWTIPtm18asIpvxW9sUR5r7W5DTaQlLKhhgwpd2xdRwNR6ux65eOlY2CQa9nmCUR99nbh8z4xFwUwqlbpyoViV855KVBUmk1qpYPVehCvu9zOQeaJr4jjyk47vXvZIzr%2ByuDLriry1He8wzDOxMEcIUgEwl4O2mGBdmH0mPnHzzNy240ga%2B3XgfnAW%2BZ%2FP8%2Fh9bMIZBqtGeZWOiOaWtCHQZW3kcMIXHqr4GOqUBtCxdSClmV1uOhBJsOA%2BzoYn8QlF7afpwpKohNRbBBp0ik2oMLlD9sLb5sMfaBJThw9P%2FMPekUsqW8ONRLkXPW4fIF3B2TFNzVw5g%2FB9poiX1emnDfpQa%2BxLW1AZ6D5g890h5dVYsGTfstorrWeamP9kv6Gb6Og%2FEyGNHVXouUrl268%2FOyOQpezUhebUOma5ZF7YqNVLpF8h43VPIhKOwkpR9of%2F9&X-Amz-Signature=e82d057a84846c476e4830de92e39771a879ffd9802e886ccca6d76b40d61fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIC363N%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfqluXX%2Fal1YzJnR9zT4%2F%2F8c9vVC4lx9rPYymxSf3tvAiEAztWM5kDsExkbqhiMBg0QA7oAjZUebw4oLmuYk9UDtlAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKkDhfwkQq9SrFZBPyrcAydDIu2JDwj37CXkWX4e1ENx%2FylCEq51vYxXDtcHcW2rYMVBi9VPv%2Bh1we6GXSR18TPvtlBbGMDCqmJy0nHk2N4Pv0hVdXDnIwy%2F%2Fk0vrmDnYF322ZO4Ezq2zGcNykQiOU4rVfB3b0zocPgNs1ZLvnxarTAtp%2BQo5dcdSLj5HocPXnj3%2FMLne%2BjXkMnN657E814c5h%2BzqFESzmKH1Qm9dUxUdwPtM%2B0ZlLMQ3mmZFpzSkSqq0o4t%2FFJtcKxxPAJrzicTj6m%2B%2BSnUu6VeUe69ELd2CR3hHnHu84ze0LzkaXGcCfdYnSwniLiJo32XVziMPw5w8c2DCGY7woGp%2BU50nx599%2BBi2Vz2%2FpqWGT1XHUknJ5u1oaW96ji1YCDafRbU9KoW%2Bi3FL%2FuBR4YzmoBoqWFKW9wvLrHCopWTIPtm18asIpvxW9sUR5r7W5DTaQlLKhhgwpd2xdRwNR6ux65eOlY2CQa9nmCUR99nbh8z4xFwUwqlbpyoViV855KVBUmk1qpYPVehCvu9zOQeaJr4jjyk47vXvZIzr%2ByuDLriry1He8wzDOxMEcIUgEwl4O2mGBdmH0mPnHzzNy240ga%2B3XgfnAW%2BZ%2FP8%2Fh9bMIZBqtGeZWOiOaWtCHQZW3kcMIXHqr4GOqUBtCxdSClmV1uOhBJsOA%2BzoYn8QlF7afpwpKohNRbBBp0ik2oMLlD9sLb5sMfaBJThw9P%2FMPekUsqW8ONRLkXPW4fIF3B2TFNzVw5g%2FB9poiX1emnDfpQa%2BxLW1AZ6D5g890h5dVYsGTfstorrWeamP9kv6Gb6Og%2FEyGNHVXouUrl268%2FOyOQpezUhebUOma5ZF7YqNVLpF8h43VPIhKOwkpR9of%2F9&X-Amz-Signature=6c8f1b132962fc3dfe344c9ef3e6de77f364f52ff80793dc4f59c38214877e55&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIC363N%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfqluXX%2Fal1YzJnR9zT4%2F%2F8c9vVC4lx9rPYymxSf3tvAiEAztWM5kDsExkbqhiMBg0QA7oAjZUebw4oLmuYk9UDtlAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKkDhfwkQq9SrFZBPyrcAydDIu2JDwj37CXkWX4e1ENx%2FylCEq51vYxXDtcHcW2rYMVBi9VPv%2Bh1we6GXSR18TPvtlBbGMDCqmJy0nHk2N4Pv0hVdXDnIwy%2F%2Fk0vrmDnYF322ZO4Ezq2zGcNykQiOU4rVfB3b0zocPgNs1ZLvnxarTAtp%2BQo5dcdSLj5HocPXnj3%2FMLne%2BjXkMnN657E814c5h%2BzqFESzmKH1Qm9dUxUdwPtM%2B0ZlLMQ3mmZFpzSkSqq0o4t%2FFJtcKxxPAJrzicTj6m%2B%2BSnUu6VeUe69ELd2CR3hHnHu84ze0LzkaXGcCfdYnSwniLiJo32XVziMPw5w8c2DCGY7woGp%2BU50nx599%2BBi2Vz2%2FpqWGT1XHUknJ5u1oaW96ji1YCDafRbU9KoW%2Bi3FL%2FuBR4YzmoBoqWFKW9wvLrHCopWTIPtm18asIpvxW9sUR5r7W5DTaQlLKhhgwpd2xdRwNR6ux65eOlY2CQa9nmCUR99nbh8z4xFwUwqlbpyoViV855KVBUmk1qpYPVehCvu9zOQeaJr4jjyk47vXvZIzr%2ByuDLriry1He8wzDOxMEcIUgEwl4O2mGBdmH0mPnHzzNy240ga%2B3XgfnAW%2BZ%2FP8%2Fh9bMIZBqtGeZWOiOaWtCHQZW3kcMIXHqr4GOqUBtCxdSClmV1uOhBJsOA%2BzoYn8QlF7afpwpKohNRbBBp0ik2oMLlD9sLb5sMfaBJThw9P%2FMPekUsqW8ONRLkXPW4fIF3B2TFNzVw5g%2FB9poiX1emnDfpQa%2BxLW1AZ6D5g890h5dVYsGTfstorrWeamP9kv6Gb6Og%2FEyGNHVXouUrl268%2FOyOQpezUhebUOma5ZF7YqNVLpF8h43VPIhKOwkpR9of%2F9&X-Amz-Signature=ee6bac04ca90ad10b1da625e8e32da27f7c26f8fa45c22a53ed95224aad17b04&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIC363N%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfqluXX%2Fal1YzJnR9zT4%2F%2F8c9vVC4lx9rPYymxSf3tvAiEAztWM5kDsExkbqhiMBg0QA7oAjZUebw4oLmuYk9UDtlAq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDKkDhfwkQq9SrFZBPyrcAydDIu2JDwj37CXkWX4e1ENx%2FylCEq51vYxXDtcHcW2rYMVBi9VPv%2Bh1we6GXSR18TPvtlBbGMDCqmJy0nHk2N4Pv0hVdXDnIwy%2F%2Fk0vrmDnYF322ZO4Ezq2zGcNykQiOU4rVfB3b0zocPgNs1ZLvnxarTAtp%2BQo5dcdSLj5HocPXnj3%2FMLne%2BjXkMnN657E814c5h%2BzqFESzmKH1Qm9dUxUdwPtM%2B0ZlLMQ3mmZFpzSkSqq0o4t%2FFJtcKxxPAJrzicTj6m%2B%2BSnUu6VeUe69ELd2CR3hHnHu84ze0LzkaXGcCfdYnSwniLiJo32XVziMPw5w8c2DCGY7woGp%2BU50nx599%2BBi2Vz2%2FpqWGT1XHUknJ5u1oaW96ji1YCDafRbU9KoW%2Bi3FL%2FuBR4YzmoBoqWFKW9wvLrHCopWTIPtm18asIpvxW9sUR5r7W5DTaQlLKhhgwpd2xdRwNR6ux65eOlY2CQa9nmCUR99nbh8z4xFwUwqlbpyoViV855KVBUmk1qpYPVehCvu9zOQeaJr4jjyk47vXvZIzr%2ByuDLriry1He8wzDOxMEcIUgEwl4O2mGBdmH0mPnHzzNy240ga%2B3XgfnAW%2BZ%2FP8%2Fh9bMIZBqtGeZWOiOaWtCHQZW3kcMIXHqr4GOqUBtCxdSClmV1uOhBJsOA%2BzoYn8QlF7afpwpKohNRbBBp0ik2oMLlD9sLb5sMfaBJThw9P%2FMPekUsqW8ONRLkXPW4fIF3B2TFNzVw5g%2FB9poiX1emnDfpQa%2BxLW1AZ6D5g890h5dVYsGTfstorrWeamP9kv6Gb6Og%2FEyGNHVXouUrl268%2FOyOQpezUhebUOma5ZF7YqNVLpF8h43VPIhKOwkpR9of%2F9&X-Amz-Signature=e61ddc921aea8760211423a38a377ea360a371808c6287aa53752bf522ee754c&X-Amz-SignedHeaders=host&x-id=GetObject)
