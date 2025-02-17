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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZPJRE2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEAEmg3wI2xTnkOukPaFb%2Bs%2FuX7fvOECPEDmriIzui%2F%2FAiAjM8dBpsknnpxc1rToLpu4tm4pSLVBtdhwA4IBw3wj1yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMUJXVGnTgWiDJlGa7KtwD5Srb%2BKGYjLEWt8BuJ0kQpK9wRLftWGMuuJrnnIhdTyslS8WBJhxZ3DG0mPjGxVjFbi8XqWM27SlUFsLjjzsO%2FmgAgKnF8NgBJqYTm8%2B1un4NfQ2A6XNkpyNSUuyVb%2BwikctAUWjCLcyyS2gn5l9Xj7HVkTgGg8V4g5Wbxi3sSzdtxA3XLD7rQGrgm3OkbJ00x53lkxP%2BJwYgaOMvBSW2mQO5Q2F%2BFqT5Z9hAjAQ%2Bk5a0PupoZrSd4UyZ4x26PCVQmfdBLHoQ2Mudj1hzGjaIeuQdTTGzlvECoZfe6PQyUE83Qc1kcaZ97rVtYuTG2DuRWnB%2FUfOVwNjMXzEu2Pc6Gm3%2BusGTuM3LC7Ks8o4XtJUk0hG1frNBnc1d10rTfGdQL7X305bf3vcM3BK%2B9Mmf9u4WcSYBkgG2g%2BzS%2F2fAVbf2WnS05LwFxmVIMuV%2F6xdrwPnhgwrOmgWVKQTXLjbDVU5hcOsagUwddxy4bA5QmRk7gxACNPqboxt0hok%2BFvXQSvYpsemJtZQ9hoynoTd%2BuPAB71mnqf1FiLVmlMLJK4CcvMZcwUe7nXtTenKUeO%2FCXaVLnuSun7BEnubOzjfmkQmgnihbH9hGXhlgGrGdmvo57WmsW44SlAFPDu8wpM7LvQY6pgFLVbR%2FWeu43JjggYvdjBE2GAAvInbmUM6HuMjuxgvoWUSZSDTnZY2BPMLajo6zf9UlIms%2Bu3eBLUOwOqSngz2QP%2BTTd7Jc2RtbipPMDPOBiE%2BWzHuIENSh75O44wGLY2XndhaBBNXCs%2BSPtRC3KK%2BNWfAVU3M2FHUyYf8g86i9kY1Vn1IpVopTiKsMrtZtPH%2B558H63bVFuyG4dfWwbaQVPZRSHmCq&X-Amz-Signature=c1cd7ff34b861ad9a0486d7fd9f3803a307fd9ed124c26f69cbf6e5bf0e90e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZPJRE2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEAEmg3wI2xTnkOukPaFb%2Bs%2FuX7fvOECPEDmriIzui%2F%2FAiAjM8dBpsknnpxc1rToLpu4tm4pSLVBtdhwA4IBw3wj1yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMUJXVGnTgWiDJlGa7KtwD5Srb%2BKGYjLEWt8BuJ0kQpK9wRLftWGMuuJrnnIhdTyslS8WBJhxZ3DG0mPjGxVjFbi8XqWM27SlUFsLjjzsO%2FmgAgKnF8NgBJqYTm8%2B1un4NfQ2A6XNkpyNSUuyVb%2BwikctAUWjCLcyyS2gn5l9Xj7HVkTgGg8V4g5Wbxi3sSzdtxA3XLD7rQGrgm3OkbJ00x53lkxP%2BJwYgaOMvBSW2mQO5Q2F%2BFqT5Z9hAjAQ%2Bk5a0PupoZrSd4UyZ4x26PCVQmfdBLHoQ2Mudj1hzGjaIeuQdTTGzlvECoZfe6PQyUE83Qc1kcaZ97rVtYuTG2DuRWnB%2FUfOVwNjMXzEu2Pc6Gm3%2BusGTuM3LC7Ks8o4XtJUk0hG1frNBnc1d10rTfGdQL7X305bf3vcM3BK%2B9Mmf9u4WcSYBkgG2g%2BzS%2F2fAVbf2WnS05LwFxmVIMuV%2F6xdrwPnhgwrOmgWVKQTXLjbDVU5hcOsagUwddxy4bA5QmRk7gxACNPqboxt0hok%2BFvXQSvYpsemJtZQ9hoynoTd%2BuPAB71mnqf1FiLVmlMLJK4CcvMZcwUe7nXtTenKUeO%2FCXaVLnuSun7BEnubOzjfmkQmgnihbH9hGXhlgGrGdmvo57WmsW44SlAFPDu8wpM7LvQY6pgFLVbR%2FWeu43JjggYvdjBE2GAAvInbmUM6HuMjuxgvoWUSZSDTnZY2BPMLajo6zf9UlIms%2Bu3eBLUOwOqSngz2QP%2BTTd7Jc2RtbipPMDPOBiE%2BWzHuIENSh75O44wGLY2XndhaBBNXCs%2BSPtRC3KK%2BNWfAVU3M2FHUyYf8g86i9kY1Vn1IpVopTiKsMrtZtPH%2B558H63bVFuyG4dfWwbaQVPZRSHmCq&X-Amz-Signature=04f6522e030fc5294aee88da7b125e2524a8ed212e9d4204684025018b5e9694&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZPJRE2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEAEmg3wI2xTnkOukPaFb%2Bs%2FuX7fvOECPEDmriIzui%2F%2FAiAjM8dBpsknnpxc1rToLpu4tm4pSLVBtdhwA4IBw3wj1yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMUJXVGnTgWiDJlGa7KtwD5Srb%2BKGYjLEWt8BuJ0kQpK9wRLftWGMuuJrnnIhdTyslS8WBJhxZ3DG0mPjGxVjFbi8XqWM27SlUFsLjjzsO%2FmgAgKnF8NgBJqYTm8%2B1un4NfQ2A6XNkpyNSUuyVb%2BwikctAUWjCLcyyS2gn5l9Xj7HVkTgGg8V4g5Wbxi3sSzdtxA3XLD7rQGrgm3OkbJ00x53lkxP%2BJwYgaOMvBSW2mQO5Q2F%2BFqT5Z9hAjAQ%2Bk5a0PupoZrSd4UyZ4x26PCVQmfdBLHoQ2Mudj1hzGjaIeuQdTTGzlvECoZfe6PQyUE83Qc1kcaZ97rVtYuTG2DuRWnB%2FUfOVwNjMXzEu2Pc6Gm3%2BusGTuM3LC7Ks8o4XtJUk0hG1frNBnc1d10rTfGdQL7X305bf3vcM3BK%2B9Mmf9u4WcSYBkgG2g%2BzS%2F2fAVbf2WnS05LwFxmVIMuV%2F6xdrwPnhgwrOmgWVKQTXLjbDVU5hcOsagUwddxy4bA5QmRk7gxACNPqboxt0hok%2BFvXQSvYpsemJtZQ9hoynoTd%2BuPAB71mnqf1FiLVmlMLJK4CcvMZcwUe7nXtTenKUeO%2FCXaVLnuSun7BEnubOzjfmkQmgnihbH9hGXhlgGrGdmvo57WmsW44SlAFPDu8wpM7LvQY6pgFLVbR%2FWeu43JjggYvdjBE2GAAvInbmUM6HuMjuxgvoWUSZSDTnZY2BPMLajo6zf9UlIms%2Bu3eBLUOwOqSngz2QP%2BTTd7Jc2RtbipPMDPOBiE%2BWzHuIENSh75O44wGLY2XndhaBBNXCs%2BSPtRC3KK%2BNWfAVU3M2FHUyYf8g86i9kY1Vn1IpVopTiKsMrtZtPH%2B558H63bVFuyG4dfWwbaQVPZRSHmCq&X-Amz-Signature=c31026de59ba311f855c01779725ea7d2bc26055d59eac9a51404fe1b27409d6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZPJRE2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEAEmg3wI2xTnkOukPaFb%2Bs%2FuX7fvOECPEDmriIzui%2F%2FAiAjM8dBpsknnpxc1rToLpu4tm4pSLVBtdhwA4IBw3wj1yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMUJXVGnTgWiDJlGa7KtwD5Srb%2BKGYjLEWt8BuJ0kQpK9wRLftWGMuuJrnnIhdTyslS8WBJhxZ3DG0mPjGxVjFbi8XqWM27SlUFsLjjzsO%2FmgAgKnF8NgBJqYTm8%2B1un4NfQ2A6XNkpyNSUuyVb%2BwikctAUWjCLcyyS2gn5l9Xj7HVkTgGg8V4g5Wbxi3sSzdtxA3XLD7rQGrgm3OkbJ00x53lkxP%2BJwYgaOMvBSW2mQO5Q2F%2BFqT5Z9hAjAQ%2Bk5a0PupoZrSd4UyZ4x26PCVQmfdBLHoQ2Mudj1hzGjaIeuQdTTGzlvECoZfe6PQyUE83Qc1kcaZ97rVtYuTG2DuRWnB%2FUfOVwNjMXzEu2Pc6Gm3%2BusGTuM3LC7Ks8o4XtJUk0hG1frNBnc1d10rTfGdQL7X305bf3vcM3BK%2B9Mmf9u4WcSYBkgG2g%2BzS%2F2fAVbf2WnS05LwFxmVIMuV%2F6xdrwPnhgwrOmgWVKQTXLjbDVU5hcOsagUwddxy4bA5QmRk7gxACNPqboxt0hok%2BFvXQSvYpsemJtZQ9hoynoTd%2BuPAB71mnqf1FiLVmlMLJK4CcvMZcwUe7nXtTenKUeO%2FCXaVLnuSun7BEnubOzjfmkQmgnihbH9hGXhlgGrGdmvo57WmsW44SlAFPDu8wpM7LvQY6pgFLVbR%2FWeu43JjggYvdjBE2GAAvInbmUM6HuMjuxgvoWUSZSDTnZY2BPMLajo6zf9UlIms%2Bu3eBLUOwOqSngz2QP%2BTTd7Jc2RtbipPMDPOBiE%2BWzHuIENSh75O44wGLY2XndhaBBNXCs%2BSPtRC3KK%2BNWfAVU3M2FHUyYf8g86i9kY1Vn1IpVopTiKsMrtZtPH%2B558H63bVFuyG4dfWwbaQVPZRSHmCq&X-Amz-Signature=b415921b99da566ba3ffea583204e5cbab3dff783b398aab8a5c0cf2356d2e38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZPJRE2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEAEmg3wI2xTnkOukPaFb%2Bs%2FuX7fvOECPEDmriIzui%2F%2FAiAjM8dBpsknnpxc1rToLpu4tm4pSLVBtdhwA4IBw3wj1yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMUJXVGnTgWiDJlGa7KtwD5Srb%2BKGYjLEWt8BuJ0kQpK9wRLftWGMuuJrnnIhdTyslS8WBJhxZ3DG0mPjGxVjFbi8XqWM27SlUFsLjjzsO%2FmgAgKnF8NgBJqYTm8%2B1un4NfQ2A6XNkpyNSUuyVb%2BwikctAUWjCLcyyS2gn5l9Xj7HVkTgGg8V4g5Wbxi3sSzdtxA3XLD7rQGrgm3OkbJ00x53lkxP%2BJwYgaOMvBSW2mQO5Q2F%2BFqT5Z9hAjAQ%2Bk5a0PupoZrSd4UyZ4x26PCVQmfdBLHoQ2Mudj1hzGjaIeuQdTTGzlvECoZfe6PQyUE83Qc1kcaZ97rVtYuTG2DuRWnB%2FUfOVwNjMXzEu2Pc6Gm3%2BusGTuM3LC7Ks8o4XtJUk0hG1frNBnc1d10rTfGdQL7X305bf3vcM3BK%2B9Mmf9u4WcSYBkgG2g%2BzS%2F2fAVbf2WnS05LwFxmVIMuV%2F6xdrwPnhgwrOmgWVKQTXLjbDVU5hcOsagUwddxy4bA5QmRk7gxACNPqboxt0hok%2BFvXQSvYpsemJtZQ9hoynoTd%2BuPAB71mnqf1FiLVmlMLJK4CcvMZcwUe7nXtTenKUeO%2FCXaVLnuSun7BEnubOzjfmkQmgnihbH9hGXhlgGrGdmvo57WmsW44SlAFPDu8wpM7LvQY6pgFLVbR%2FWeu43JjggYvdjBE2GAAvInbmUM6HuMjuxgvoWUSZSDTnZY2BPMLajo6zf9UlIms%2Bu3eBLUOwOqSngz2QP%2BTTd7Jc2RtbipPMDPOBiE%2BWzHuIENSh75O44wGLY2XndhaBBNXCs%2BSPtRC3KK%2BNWfAVU3M2FHUyYf8g86i9kY1Vn1IpVopTiKsMrtZtPH%2B558H63bVFuyG4dfWwbaQVPZRSHmCq&X-Amz-Signature=719fe555e3a65f163e91ae6fcf71340665c4a86b2953f00c4699bdd1f7146e0f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVZPJRE2%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T081206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIEAEmg3wI2xTnkOukPaFb%2Bs%2FuX7fvOECPEDmriIzui%2F%2FAiAjM8dBpsknnpxc1rToLpu4tm4pSLVBtdhwA4IBw3wj1yr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMUJXVGnTgWiDJlGa7KtwD5Srb%2BKGYjLEWt8BuJ0kQpK9wRLftWGMuuJrnnIhdTyslS8WBJhxZ3DG0mPjGxVjFbi8XqWM27SlUFsLjjzsO%2FmgAgKnF8NgBJqYTm8%2B1un4NfQ2A6XNkpyNSUuyVb%2BwikctAUWjCLcyyS2gn5l9Xj7HVkTgGg8V4g5Wbxi3sSzdtxA3XLD7rQGrgm3OkbJ00x53lkxP%2BJwYgaOMvBSW2mQO5Q2F%2BFqT5Z9hAjAQ%2Bk5a0PupoZrSd4UyZ4x26PCVQmfdBLHoQ2Mudj1hzGjaIeuQdTTGzlvECoZfe6PQyUE83Qc1kcaZ97rVtYuTG2DuRWnB%2FUfOVwNjMXzEu2Pc6Gm3%2BusGTuM3LC7Ks8o4XtJUk0hG1frNBnc1d10rTfGdQL7X305bf3vcM3BK%2B9Mmf9u4WcSYBkgG2g%2BzS%2F2fAVbf2WnS05LwFxmVIMuV%2F6xdrwPnhgwrOmgWVKQTXLjbDVU5hcOsagUwddxy4bA5QmRk7gxACNPqboxt0hok%2BFvXQSvYpsemJtZQ9hoynoTd%2BuPAB71mnqf1FiLVmlMLJK4CcvMZcwUe7nXtTenKUeO%2FCXaVLnuSun7BEnubOzjfmkQmgnihbH9hGXhlgGrGdmvo57WmsW44SlAFPDu8wpM7LvQY6pgFLVbR%2FWeu43JjggYvdjBE2GAAvInbmUM6HuMjuxgvoWUSZSDTnZY2BPMLajo6zf9UlIms%2Bu3eBLUOwOqSngz2QP%2BTTd7Jc2RtbipPMDPOBiE%2BWzHuIENSh75O44wGLY2XndhaBBNXCs%2BSPtRC3KK%2BNWfAVU3M2FHUyYf8g86i9kY1Vn1IpVopTiKsMrtZtPH%2B558H63bVFuyG4dfWwbaQVPZRSHmCq&X-Amz-Signature=b56b066b54ff78e4dba72ede187f4ada4a15e510b244ca53491672f58b0d445f&X-Amz-SignedHeaders=host&x-id=GetObject)
