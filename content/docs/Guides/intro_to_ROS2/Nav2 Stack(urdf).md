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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMR4GLC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6OkYuApmXi162I4W3n3PV%2F2A8DuF%2FyBkj5Z3cHZGHOQIgNpEUKJ4DAg%2FFB52ckZDiuTFhXHDmVgch%2BibJrZIR%2BwAqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK97D74mB3gz47l71CrcA0X1ssJK6khmtjOrzbdBpzFEgqjkD5rMuTb6fd9eWfhmQkaFy76xLi91CxncLmxXFup8EJnX824v91mI4Z2hI8o%2BqScX%2FWaUdoGaOaP93GoGAUNhkvfs%2BvGU%2F115na8OmeaZx46C4nUCXpG6cDm95n6KnGQGtJOmW5Xl8VUh%2FXDn0s0N4y0uhQUx3DW5QMzPCrd5yrwRH6HVCsn539OAyMeaJ8ZvJ18dliFZshA9E5lP6GwkD%2FUEM0aLEClfp3kvOiXpf61CEPKZj83RF1HEFCceXOqHHivobg%2BJtPgUl1ZwtTsHRg94HBPdK%2BaM501w5XSQ1bPS7VH7bCzpppTVYsgWrmnGYimgNoZY4jOZAuG29nsxj56YIVInOod3UdFHdIy6EkFod4BvXnyjQmAwc2sGwQt80xzqWeL0xUaVP9R5cK5NzRQmKH4qkBkMwvaX62xdU2fOzqCCVvW4VSSSWOK4dzu0ixEw2dBtPEpv8IGH5xUr3KdVWxauB73YkiJF94qqMWxsICTUVjN7ZOQA%2FOxoX%2Fx%2Bi2gcW0C8o%2BrSSq6s6jIeXQM9%2Bw66x1rk3gc1i8S8ltSpIk%2FvbKPeAyAFOfLcSXVPwYTlFm%2FlxCuUI%2Ff3V4XPzk8opDbCoNVDMIfqu78GOqUBQp8zVtIguxUdmh%2FJPSkR%2BZ3SafclX2sazb0gQVPMAKg6%2BWQsbQetCxYg%2BVYvOAwmuKGmbyFpug2hE4EaimtJbOH5A%2F14vTQJDIkgA0rQAcObXFcmt77drh1phQ9WhdC69niz51fPGtjk05b7w3csJFp%2BuhXHi2a5xlLSpmAuvZACpCC97EYGXbIbtmeA5qvJcKTayK4Gfnj6knR2zLTqVoCaH3f5&X-Amz-Signature=f23136636e793b65b906b3b0e575ef4abe1f0e8e4a0fe67f94445e372971a7de&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMR4GLC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6OkYuApmXi162I4W3n3PV%2F2A8DuF%2FyBkj5Z3cHZGHOQIgNpEUKJ4DAg%2FFB52ckZDiuTFhXHDmVgch%2BibJrZIR%2BwAqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK97D74mB3gz47l71CrcA0X1ssJK6khmtjOrzbdBpzFEgqjkD5rMuTb6fd9eWfhmQkaFy76xLi91CxncLmxXFup8EJnX824v91mI4Z2hI8o%2BqScX%2FWaUdoGaOaP93GoGAUNhkvfs%2BvGU%2F115na8OmeaZx46C4nUCXpG6cDm95n6KnGQGtJOmW5Xl8VUh%2FXDn0s0N4y0uhQUx3DW5QMzPCrd5yrwRH6HVCsn539OAyMeaJ8ZvJ18dliFZshA9E5lP6GwkD%2FUEM0aLEClfp3kvOiXpf61CEPKZj83RF1HEFCceXOqHHivobg%2BJtPgUl1ZwtTsHRg94HBPdK%2BaM501w5XSQ1bPS7VH7bCzpppTVYsgWrmnGYimgNoZY4jOZAuG29nsxj56YIVInOod3UdFHdIy6EkFod4BvXnyjQmAwc2sGwQt80xzqWeL0xUaVP9R5cK5NzRQmKH4qkBkMwvaX62xdU2fOzqCCVvW4VSSSWOK4dzu0ixEw2dBtPEpv8IGH5xUr3KdVWxauB73YkiJF94qqMWxsICTUVjN7ZOQA%2FOxoX%2Fx%2Bi2gcW0C8o%2BrSSq6s6jIeXQM9%2Bw66x1rk3gc1i8S8ltSpIk%2FvbKPeAyAFOfLcSXVPwYTlFm%2FlxCuUI%2Ff3V4XPzk8opDbCoNVDMIfqu78GOqUBQp8zVtIguxUdmh%2FJPSkR%2BZ3SafclX2sazb0gQVPMAKg6%2BWQsbQetCxYg%2BVYvOAwmuKGmbyFpug2hE4EaimtJbOH5A%2F14vTQJDIkgA0rQAcObXFcmt77drh1phQ9WhdC69niz51fPGtjk05b7w3csJFp%2BuhXHi2a5xlLSpmAuvZACpCC97EYGXbIbtmeA5qvJcKTayK4Gfnj6knR2zLTqVoCaH3f5&X-Amz-Signature=d8a92956b5f206390eab1056b9c56e027adb4d55082d8eef1367a31ce4f9809d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMR4GLC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6OkYuApmXi162I4W3n3PV%2F2A8DuF%2FyBkj5Z3cHZGHOQIgNpEUKJ4DAg%2FFB52ckZDiuTFhXHDmVgch%2BibJrZIR%2BwAqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK97D74mB3gz47l71CrcA0X1ssJK6khmtjOrzbdBpzFEgqjkD5rMuTb6fd9eWfhmQkaFy76xLi91CxncLmxXFup8EJnX824v91mI4Z2hI8o%2BqScX%2FWaUdoGaOaP93GoGAUNhkvfs%2BvGU%2F115na8OmeaZx46C4nUCXpG6cDm95n6KnGQGtJOmW5Xl8VUh%2FXDn0s0N4y0uhQUx3DW5QMzPCrd5yrwRH6HVCsn539OAyMeaJ8ZvJ18dliFZshA9E5lP6GwkD%2FUEM0aLEClfp3kvOiXpf61CEPKZj83RF1HEFCceXOqHHivobg%2BJtPgUl1ZwtTsHRg94HBPdK%2BaM501w5XSQ1bPS7VH7bCzpppTVYsgWrmnGYimgNoZY4jOZAuG29nsxj56YIVInOod3UdFHdIy6EkFod4BvXnyjQmAwc2sGwQt80xzqWeL0xUaVP9R5cK5NzRQmKH4qkBkMwvaX62xdU2fOzqCCVvW4VSSSWOK4dzu0ixEw2dBtPEpv8IGH5xUr3KdVWxauB73YkiJF94qqMWxsICTUVjN7ZOQA%2FOxoX%2Fx%2Bi2gcW0C8o%2BrSSq6s6jIeXQM9%2Bw66x1rk3gc1i8S8ltSpIk%2FvbKPeAyAFOfLcSXVPwYTlFm%2FlxCuUI%2Ff3V4XPzk8opDbCoNVDMIfqu78GOqUBQp8zVtIguxUdmh%2FJPSkR%2BZ3SafclX2sazb0gQVPMAKg6%2BWQsbQetCxYg%2BVYvOAwmuKGmbyFpug2hE4EaimtJbOH5A%2F14vTQJDIkgA0rQAcObXFcmt77drh1phQ9WhdC69niz51fPGtjk05b7w3csJFp%2BuhXHi2a5xlLSpmAuvZACpCC97EYGXbIbtmeA5qvJcKTayK4Gfnj6knR2zLTqVoCaH3f5&X-Amz-Signature=9e5e8b8ee4d60127c2e81cdc5566f00a4708b5d41330d4789d575a767663c055&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMR4GLC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6OkYuApmXi162I4W3n3PV%2F2A8DuF%2FyBkj5Z3cHZGHOQIgNpEUKJ4DAg%2FFB52ckZDiuTFhXHDmVgch%2BibJrZIR%2BwAqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK97D74mB3gz47l71CrcA0X1ssJK6khmtjOrzbdBpzFEgqjkD5rMuTb6fd9eWfhmQkaFy76xLi91CxncLmxXFup8EJnX824v91mI4Z2hI8o%2BqScX%2FWaUdoGaOaP93GoGAUNhkvfs%2BvGU%2F115na8OmeaZx46C4nUCXpG6cDm95n6KnGQGtJOmW5Xl8VUh%2FXDn0s0N4y0uhQUx3DW5QMzPCrd5yrwRH6HVCsn539OAyMeaJ8ZvJ18dliFZshA9E5lP6GwkD%2FUEM0aLEClfp3kvOiXpf61CEPKZj83RF1HEFCceXOqHHivobg%2BJtPgUl1ZwtTsHRg94HBPdK%2BaM501w5XSQ1bPS7VH7bCzpppTVYsgWrmnGYimgNoZY4jOZAuG29nsxj56YIVInOod3UdFHdIy6EkFod4BvXnyjQmAwc2sGwQt80xzqWeL0xUaVP9R5cK5NzRQmKH4qkBkMwvaX62xdU2fOzqCCVvW4VSSSWOK4dzu0ixEw2dBtPEpv8IGH5xUr3KdVWxauB73YkiJF94qqMWxsICTUVjN7ZOQA%2FOxoX%2Fx%2Bi2gcW0C8o%2BrSSq6s6jIeXQM9%2Bw66x1rk3gc1i8S8ltSpIk%2FvbKPeAyAFOfLcSXVPwYTlFm%2FlxCuUI%2Ff3V4XPzk8opDbCoNVDMIfqu78GOqUBQp8zVtIguxUdmh%2FJPSkR%2BZ3SafclX2sazb0gQVPMAKg6%2BWQsbQetCxYg%2BVYvOAwmuKGmbyFpug2hE4EaimtJbOH5A%2F14vTQJDIkgA0rQAcObXFcmt77drh1phQ9WhdC69niz51fPGtjk05b7w3csJFp%2BuhXHi2a5xlLSpmAuvZACpCC97EYGXbIbtmeA5qvJcKTayK4Gfnj6knR2zLTqVoCaH3f5&X-Amz-Signature=34cb5f90035253745ec70d2a0188de28e8af3bca22bedebd2c80f5fdc054b811&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMR4GLC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6OkYuApmXi162I4W3n3PV%2F2A8DuF%2FyBkj5Z3cHZGHOQIgNpEUKJ4DAg%2FFB52ckZDiuTFhXHDmVgch%2BibJrZIR%2BwAqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK97D74mB3gz47l71CrcA0X1ssJK6khmtjOrzbdBpzFEgqjkD5rMuTb6fd9eWfhmQkaFy76xLi91CxncLmxXFup8EJnX824v91mI4Z2hI8o%2BqScX%2FWaUdoGaOaP93GoGAUNhkvfs%2BvGU%2F115na8OmeaZx46C4nUCXpG6cDm95n6KnGQGtJOmW5Xl8VUh%2FXDn0s0N4y0uhQUx3DW5QMzPCrd5yrwRH6HVCsn539OAyMeaJ8ZvJ18dliFZshA9E5lP6GwkD%2FUEM0aLEClfp3kvOiXpf61CEPKZj83RF1HEFCceXOqHHivobg%2BJtPgUl1ZwtTsHRg94HBPdK%2BaM501w5XSQ1bPS7VH7bCzpppTVYsgWrmnGYimgNoZY4jOZAuG29nsxj56YIVInOod3UdFHdIy6EkFod4BvXnyjQmAwc2sGwQt80xzqWeL0xUaVP9R5cK5NzRQmKH4qkBkMwvaX62xdU2fOzqCCVvW4VSSSWOK4dzu0ixEw2dBtPEpv8IGH5xUr3KdVWxauB73YkiJF94qqMWxsICTUVjN7ZOQA%2FOxoX%2Fx%2Bi2gcW0C8o%2BrSSq6s6jIeXQM9%2Bw66x1rk3gc1i8S8ltSpIk%2FvbKPeAyAFOfLcSXVPwYTlFm%2FlxCuUI%2Ff3V4XPzk8opDbCoNVDMIfqu78GOqUBQp8zVtIguxUdmh%2FJPSkR%2BZ3SafclX2sazb0gQVPMAKg6%2BWQsbQetCxYg%2BVYvOAwmuKGmbyFpug2hE4EaimtJbOH5A%2F14vTQJDIkgA0rQAcObXFcmt77drh1phQ9WhdC69niz51fPGtjk05b7w3csJFp%2BuhXHi2a5xlLSpmAuvZACpCC97EYGXbIbtmeA5qvJcKTayK4Gfnj6knR2zLTqVoCaH3f5&X-Amz-Signature=264eff53ad587b9f85bebd9e4f789beaed103d105daf1f8a25fbfb3dfc6f5c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMR4GLC%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T210748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6OkYuApmXi162I4W3n3PV%2F2A8DuF%2FyBkj5Z3cHZGHOQIgNpEUKJ4DAg%2FFB52ckZDiuTFhXHDmVgch%2BibJrZIR%2BwAqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK97D74mB3gz47l71CrcA0X1ssJK6khmtjOrzbdBpzFEgqjkD5rMuTb6fd9eWfhmQkaFy76xLi91CxncLmxXFup8EJnX824v91mI4Z2hI8o%2BqScX%2FWaUdoGaOaP93GoGAUNhkvfs%2BvGU%2F115na8OmeaZx46C4nUCXpG6cDm95n6KnGQGtJOmW5Xl8VUh%2FXDn0s0N4y0uhQUx3DW5QMzPCrd5yrwRH6HVCsn539OAyMeaJ8ZvJ18dliFZshA9E5lP6GwkD%2FUEM0aLEClfp3kvOiXpf61CEPKZj83RF1HEFCceXOqHHivobg%2BJtPgUl1ZwtTsHRg94HBPdK%2BaM501w5XSQ1bPS7VH7bCzpppTVYsgWrmnGYimgNoZY4jOZAuG29nsxj56YIVInOod3UdFHdIy6EkFod4BvXnyjQmAwc2sGwQt80xzqWeL0xUaVP9R5cK5NzRQmKH4qkBkMwvaX62xdU2fOzqCCVvW4VSSSWOK4dzu0ixEw2dBtPEpv8IGH5xUr3KdVWxauB73YkiJF94qqMWxsICTUVjN7ZOQA%2FOxoX%2Fx%2Bi2gcW0C8o%2BrSSq6s6jIeXQM9%2Bw66x1rk3gc1i8S8ltSpIk%2FvbKPeAyAFOfLcSXVPwYTlFm%2FlxCuUI%2Ff3V4XPzk8opDbCoNVDMIfqu78GOqUBQp8zVtIguxUdmh%2FJPSkR%2BZ3SafclX2sazb0gQVPMAKg6%2BWQsbQetCxYg%2BVYvOAwmuKGmbyFpug2hE4EaimtJbOH5A%2F14vTQJDIkgA0rQAcObXFcmt77drh1phQ9WhdC69niz51fPGtjk05b7w3csJFp%2BuhXHi2a5xlLSpmAuvZACpCC97EYGXbIbtmeA5qvJcKTayK4Gfnj6knR2zLTqVoCaH3f5&X-Amz-Signature=b3be207c5c8e72fc82958931c4a3231c2ede4ccf1492ce1d5090a870aa692cb1&X-Amz-SignedHeaders=host&x-id=GetObject)
