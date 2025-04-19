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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633G4QFEY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRygjLcMGf9uYrM5QHDU2H8PRUbbQgqMkYNVssmHbJhAiA7KcHuhPMKeFcvG4GEHkPfFwkvOG%2B%2BA63sTrYy566SciqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDrqoY%2FWn5QpQvsypKtwD76TrD81uiSzq4QG0dMSabtlaP2xpq5zhAhhY7AOBCSPj5Ztq44POLBbujkqNNbF7cuHMOvGPe%2B3BlxuaEg3J1YX0otM%2FzOoD3QRTDy94CcEXXbaaE89sFtz9tn1y7%2FNpodhNqPjiB5E7S%2Fl%2FeeHlq%2BRvET2I5L79UhmGO%2F2bwbyF76AbA%2FVQ%2Fq2jP6kk9jC%2BmcjPBE8uWCEccv8xGSzLXUoh3ltNOglcG2NQGWwZgQXPshVAHzXuBFxqSUnppUsCgIO8C19YOCa4oxQjbLP5wjotABTGqAc0B4UC%2Bnpi5%2Ft9Uiy7sFdHKfYN10kdXuSaexz4blPjmyCF2g%2FZ%2FDGleBVJdCl7AKJua8nwhxRmDRE5MglEYScRXziGuNciP42QUGfLh6e%2FsW6AFd%2Bo4JZDPuwt7DztI1M6hv8%2FuQ5GZohkQTUObjQesxXCutZPvETB102%2Bp97%2B%2F5pLaruFJeoOcq2UB8DK07vtcxr9xDq%2BnIb4C4V5x3EyLTOJX%2BH5Ty%2BikgzXZ7N%2FsNHN3%2FyeFu5ISMEgAjHbkpA90%2F2Lt%2Fh057j3ifwh%2BqGE6B88%2BTJ5lu9jgCF0YGJ6fvs6d4AFKe9oOMURv4jv2G0D2yK%2F2HhylW0aMrAykHb6lKktWkkwg86LwAY6pgHltEShbhj0qUjlLT8LWX5XLNeFGzARBVWN0LzzP%2FfNumyBAI%2Bo23yA%2FpCkzHr%2B2TyVUksrONO7ICP%2BooNDnRBRz%2B1%2FhKeT7ZZIyQmepGjW3DnfrGA0DuqpDbZ86YbaqR8147qO7QYkGOBJQ22wECbFsysgWDZLKBAPfAemXHcqk42GQJUxL3pZtKRAJxEh9xvp1t0Xr7%2BP7ylrEBTkRRDZNCfunjw%2F&X-Amz-Signature=d8b0283cb2ab6340a5712d2141cffde05c521a5123a857f41ce00089519ce76f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633G4QFEY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRygjLcMGf9uYrM5QHDU2H8PRUbbQgqMkYNVssmHbJhAiA7KcHuhPMKeFcvG4GEHkPfFwkvOG%2B%2BA63sTrYy566SciqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDrqoY%2FWn5QpQvsypKtwD76TrD81uiSzq4QG0dMSabtlaP2xpq5zhAhhY7AOBCSPj5Ztq44POLBbujkqNNbF7cuHMOvGPe%2B3BlxuaEg3J1YX0otM%2FzOoD3QRTDy94CcEXXbaaE89sFtz9tn1y7%2FNpodhNqPjiB5E7S%2Fl%2FeeHlq%2BRvET2I5L79UhmGO%2F2bwbyF76AbA%2FVQ%2Fq2jP6kk9jC%2BmcjPBE8uWCEccv8xGSzLXUoh3ltNOglcG2NQGWwZgQXPshVAHzXuBFxqSUnppUsCgIO8C19YOCa4oxQjbLP5wjotABTGqAc0B4UC%2Bnpi5%2Ft9Uiy7sFdHKfYN10kdXuSaexz4blPjmyCF2g%2FZ%2FDGleBVJdCl7AKJua8nwhxRmDRE5MglEYScRXziGuNciP42QUGfLh6e%2FsW6AFd%2Bo4JZDPuwt7DztI1M6hv8%2FuQ5GZohkQTUObjQesxXCutZPvETB102%2Bp97%2B%2F5pLaruFJeoOcq2UB8DK07vtcxr9xDq%2BnIb4C4V5x3EyLTOJX%2BH5Ty%2BikgzXZ7N%2FsNHN3%2FyeFu5ISMEgAjHbkpA90%2F2Lt%2Fh057j3ifwh%2BqGE6B88%2BTJ5lu9jgCF0YGJ6fvs6d4AFKe9oOMURv4jv2G0D2yK%2F2HhylW0aMrAykHb6lKktWkkwg86LwAY6pgHltEShbhj0qUjlLT8LWX5XLNeFGzARBVWN0LzzP%2FfNumyBAI%2Bo23yA%2FpCkzHr%2B2TyVUksrONO7ICP%2BooNDnRBRz%2B1%2FhKeT7ZZIyQmepGjW3DnfrGA0DuqpDbZ86YbaqR8147qO7QYkGOBJQ22wECbFsysgWDZLKBAPfAemXHcqk42GQJUxL3pZtKRAJxEh9xvp1t0Xr7%2BP7ylrEBTkRRDZNCfunjw%2F&X-Amz-Signature=ddefca364c3f437b476f16196314d6b106e2936d5eb6099c54fea6622f40be86&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633G4QFEY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRygjLcMGf9uYrM5QHDU2H8PRUbbQgqMkYNVssmHbJhAiA7KcHuhPMKeFcvG4GEHkPfFwkvOG%2B%2BA63sTrYy566SciqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDrqoY%2FWn5QpQvsypKtwD76TrD81uiSzq4QG0dMSabtlaP2xpq5zhAhhY7AOBCSPj5Ztq44POLBbujkqNNbF7cuHMOvGPe%2B3BlxuaEg3J1YX0otM%2FzOoD3QRTDy94CcEXXbaaE89sFtz9tn1y7%2FNpodhNqPjiB5E7S%2Fl%2FeeHlq%2BRvET2I5L79UhmGO%2F2bwbyF76AbA%2FVQ%2Fq2jP6kk9jC%2BmcjPBE8uWCEccv8xGSzLXUoh3ltNOglcG2NQGWwZgQXPshVAHzXuBFxqSUnppUsCgIO8C19YOCa4oxQjbLP5wjotABTGqAc0B4UC%2Bnpi5%2Ft9Uiy7sFdHKfYN10kdXuSaexz4blPjmyCF2g%2FZ%2FDGleBVJdCl7AKJua8nwhxRmDRE5MglEYScRXziGuNciP42QUGfLh6e%2FsW6AFd%2Bo4JZDPuwt7DztI1M6hv8%2FuQ5GZohkQTUObjQesxXCutZPvETB102%2Bp97%2B%2F5pLaruFJeoOcq2UB8DK07vtcxr9xDq%2BnIb4C4V5x3EyLTOJX%2BH5Ty%2BikgzXZ7N%2FsNHN3%2FyeFu5ISMEgAjHbkpA90%2F2Lt%2Fh057j3ifwh%2BqGE6B88%2BTJ5lu9jgCF0YGJ6fvs6d4AFKe9oOMURv4jv2G0D2yK%2F2HhylW0aMrAykHb6lKktWkkwg86LwAY6pgHltEShbhj0qUjlLT8LWX5XLNeFGzARBVWN0LzzP%2FfNumyBAI%2Bo23yA%2FpCkzHr%2B2TyVUksrONO7ICP%2BooNDnRBRz%2B1%2FhKeT7ZZIyQmepGjW3DnfrGA0DuqpDbZ86YbaqR8147qO7QYkGOBJQ22wECbFsysgWDZLKBAPfAemXHcqk42GQJUxL3pZtKRAJxEh9xvp1t0Xr7%2BP7ylrEBTkRRDZNCfunjw%2F&X-Amz-Signature=f81eee0ef9d7253bce7eec62e64c2bf27c052bf7e03ce9552bef8f09f34ec041&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633G4QFEY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRygjLcMGf9uYrM5QHDU2H8PRUbbQgqMkYNVssmHbJhAiA7KcHuhPMKeFcvG4GEHkPfFwkvOG%2B%2BA63sTrYy566SciqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDrqoY%2FWn5QpQvsypKtwD76TrD81uiSzq4QG0dMSabtlaP2xpq5zhAhhY7AOBCSPj5Ztq44POLBbujkqNNbF7cuHMOvGPe%2B3BlxuaEg3J1YX0otM%2FzOoD3QRTDy94CcEXXbaaE89sFtz9tn1y7%2FNpodhNqPjiB5E7S%2Fl%2FeeHlq%2BRvET2I5L79UhmGO%2F2bwbyF76AbA%2FVQ%2Fq2jP6kk9jC%2BmcjPBE8uWCEccv8xGSzLXUoh3ltNOglcG2NQGWwZgQXPshVAHzXuBFxqSUnppUsCgIO8C19YOCa4oxQjbLP5wjotABTGqAc0B4UC%2Bnpi5%2Ft9Uiy7sFdHKfYN10kdXuSaexz4blPjmyCF2g%2FZ%2FDGleBVJdCl7AKJua8nwhxRmDRE5MglEYScRXziGuNciP42QUGfLh6e%2FsW6AFd%2Bo4JZDPuwt7DztI1M6hv8%2FuQ5GZohkQTUObjQesxXCutZPvETB102%2Bp97%2B%2F5pLaruFJeoOcq2UB8DK07vtcxr9xDq%2BnIb4C4V5x3EyLTOJX%2BH5Ty%2BikgzXZ7N%2FsNHN3%2FyeFu5ISMEgAjHbkpA90%2F2Lt%2Fh057j3ifwh%2BqGE6B88%2BTJ5lu9jgCF0YGJ6fvs6d4AFKe9oOMURv4jv2G0D2yK%2F2HhylW0aMrAykHb6lKktWkkwg86LwAY6pgHltEShbhj0qUjlLT8LWX5XLNeFGzARBVWN0LzzP%2FfNumyBAI%2Bo23yA%2FpCkzHr%2B2TyVUksrONO7ICP%2BooNDnRBRz%2B1%2FhKeT7ZZIyQmepGjW3DnfrGA0DuqpDbZ86YbaqR8147qO7QYkGOBJQ22wECbFsysgWDZLKBAPfAemXHcqk42GQJUxL3pZtKRAJxEh9xvp1t0Xr7%2BP7ylrEBTkRRDZNCfunjw%2F&X-Amz-Signature=33bc5c0e5f9a457dd85b36178a4faceb31eef5c954aab04090877492b962e633&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633G4QFEY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRygjLcMGf9uYrM5QHDU2H8PRUbbQgqMkYNVssmHbJhAiA7KcHuhPMKeFcvG4GEHkPfFwkvOG%2B%2BA63sTrYy566SciqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDrqoY%2FWn5QpQvsypKtwD76TrD81uiSzq4QG0dMSabtlaP2xpq5zhAhhY7AOBCSPj5Ztq44POLBbujkqNNbF7cuHMOvGPe%2B3BlxuaEg3J1YX0otM%2FzOoD3QRTDy94CcEXXbaaE89sFtz9tn1y7%2FNpodhNqPjiB5E7S%2Fl%2FeeHlq%2BRvET2I5L79UhmGO%2F2bwbyF76AbA%2FVQ%2Fq2jP6kk9jC%2BmcjPBE8uWCEccv8xGSzLXUoh3ltNOglcG2NQGWwZgQXPshVAHzXuBFxqSUnppUsCgIO8C19YOCa4oxQjbLP5wjotABTGqAc0B4UC%2Bnpi5%2Ft9Uiy7sFdHKfYN10kdXuSaexz4blPjmyCF2g%2FZ%2FDGleBVJdCl7AKJua8nwhxRmDRE5MglEYScRXziGuNciP42QUGfLh6e%2FsW6AFd%2Bo4JZDPuwt7DztI1M6hv8%2FuQ5GZohkQTUObjQesxXCutZPvETB102%2Bp97%2B%2F5pLaruFJeoOcq2UB8DK07vtcxr9xDq%2BnIb4C4V5x3EyLTOJX%2BH5Ty%2BikgzXZ7N%2FsNHN3%2FyeFu5ISMEgAjHbkpA90%2F2Lt%2Fh057j3ifwh%2BqGE6B88%2BTJ5lu9jgCF0YGJ6fvs6d4AFKe9oOMURv4jv2G0D2yK%2F2HhylW0aMrAykHb6lKktWkkwg86LwAY6pgHltEShbhj0qUjlLT8LWX5XLNeFGzARBVWN0LzzP%2FfNumyBAI%2Bo23yA%2FpCkzHr%2B2TyVUksrONO7ICP%2BooNDnRBRz%2B1%2FhKeT7ZZIyQmepGjW3DnfrGA0DuqpDbZ86YbaqR8147qO7QYkGOBJQ22wECbFsysgWDZLKBAPfAemXHcqk42GQJUxL3pZtKRAJxEh9xvp1t0Xr7%2BP7ylrEBTkRRDZNCfunjw%2F&X-Amz-Signature=596835d04f651daa1ccab4c7d60ec3a13779998a3d7d4d733f3fa091802d3a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633G4QFEY%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRygjLcMGf9uYrM5QHDU2H8PRUbbQgqMkYNVssmHbJhAiA7KcHuhPMKeFcvG4GEHkPfFwkvOG%2B%2BA63sTrYy566SciqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDrqoY%2FWn5QpQvsypKtwD76TrD81uiSzq4QG0dMSabtlaP2xpq5zhAhhY7AOBCSPj5Ztq44POLBbujkqNNbF7cuHMOvGPe%2B3BlxuaEg3J1YX0otM%2FzOoD3QRTDy94CcEXXbaaE89sFtz9tn1y7%2FNpodhNqPjiB5E7S%2Fl%2FeeHlq%2BRvET2I5L79UhmGO%2F2bwbyF76AbA%2FVQ%2Fq2jP6kk9jC%2BmcjPBE8uWCEccv8xGSzLXUoh3ltNOglcG2NQGWwZgQXPshVAHzXuBFxqSUnppUsCgIO8C19YOCa4oxQjbLP5wjotABTGqAc0B4UC%2Bnpi5%2Ft9Uiy7sFdHKfYN10kdXuSaexz4blPjmyCF2g%2FZ%2FDGleBVJdCl7AKJua8nwhxRmDRE5MglEYScRXziGuNciP42QUGfLh6e%2FsW6AFd%2Bo4JZDPuwt7DztI1M6hv8%2FuQ5GZohkQTUObjQesxXCutZPvETB102%2Bp97%2B%2F5pLaruFJeoOcq2UB8DK07vtcxr9xDq%2BnIb4C4V5x3EyLTOJX%2BH5Ty%2BikgzXZ7N%2FsNHN3%2FyeFu5ISMEgAjHbkpA90%2F2Lt%2Fh057j3ifwh%2BqGE6B88%2BTJ5lu9jgCF0YGJ6fvs6d4AFKe9oOMURv4jv2G0D2yK%2F2HhylW0aMrAykHb6lKktWkkwg86LwAY6pgHltEShbhj0qUjlLT8LWX5XLNeFGzARBVWN0LzzP%2FfNumyBAI%2Bo23yA%2FpCkzHr%2B2TyVUksrONO7ICP%2BooNDnRBRz%2B1%2FhKeT7ZZIyQmepGjW3DnfrGA0DuqpDbZ86YbaqR8147qO7QYkGOBJQ22wECbFsysgWDZLKBAPfAemXHcqk42GQJUxL3pZtKRAJxEh9xvp1t0Xr7%2BP7ylrEBTkRRDZNCfunjw%2F&X-Amz-Signature=4a906e7d94066eef3ab16bffa598edec4aef1ed1e6b9fcc82675180826c422d5&X-Amz-SignedHeaders=host&x-id=GetObject)
