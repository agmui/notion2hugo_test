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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KHHBZ3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg9w2LuUqPLrmIkrjlSS4wqXlZP1pHv85%2FQCtNV%2FT04wIgQ7G3f1hZhlHQKIaHSi8o5Q4fAl%2BrVT%2B2HJ4kz9FPy3wq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMmuG78bKmXTCkZRxircA1MEyoHHt9HYP6y41wrTxDOpDj2PAaiwP5HLCl%2BS7qaDpLJZi8I7YWaITy6tAs0FyzyrIhf1NnNsMa6njZYNVI0sVWALP8OGWtXjiVnjxVj83ln65gWnTlLOZZdyIx5p1Uwzg29pS%2F9pkgYMGPRsrBT0tPE8QAEdYLsqmlronrdP3wr68cApppB4JsFX430J1lvyQRWyrzaeDjvIuGT3lR%2BXAs2oEVajHQv24lldfvu%2FF3dtvP0wCd6hBalKgbkkHUtDdXpMh6yxOEWMUWBcojp%2Bai4zhX%2FF6Cio%2F%2BnrWn6xjlN5dTllSPt4mbZxIkJe9kqF%2FP2BlVuqh2B%2BeIhy%2FiY%2FaQtXDO2kqaMyqkKNPektIcGItzyxQAA1QMQQV%2BNRBuYgcRx1w3vbEij%2FimesVntUsdGGR2KoN7LxGNvLBQwTSwTHuiP9WHbU7jI7lX6kw00mSFeIuWMtkoaFltdmMStx9pUV8XwdVN2i6Khu4OjC%2BvCmhMVV78piDv6nntLDSY0hzxgHZhVrBhgl9mohglJsqad0t55UpMwEeFu9B4I7tKSYx%2BrlqvnH2P%2F8v775%2F2kX%2FgXbr%2BQnr%2FgS2GXjkLtxDUImrzoKXlRptYyxOnpkHOuph2qMMzASPOwEMPOSmL8GOqUBe7fuRgzBqsU13IPTjRqnTx6Q7SDHAsJWYQu6j5JYz98IAP3%2B%2Fc11naLztbjdmaGcAiyFe%2B5We03Gy6YrIrmTd5p1LVuwnswPbJVdS4ZnLXN7Xsoec7WvgugGJqtV%2BYLd5M4CQ3QGT%2FpDzKpDqv0iwMFeJZ1VwO%2B0%2F%2FIrf2W5JEdcCK%2BWWowkOvJD2iK0G%2B1EoCuyVPUdRBZd1rZ%2FQsU5S77DWODN&X-Amz-Signature=01b1bb1e4e155d2d965c52c6473f0e68dd3db7681e6686cb7f0bf95b1fdefcd1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KHHBZ3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg9w2LuUqPLrmIkrjlSS4wqXlZP1pHv85%2FQCtNV%2FT04wIgQ7G3f1hZhlHQKIaHSi8o5Q4fAl%2BrVT%2B2HJ4kz9FPy3wq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMmuG78bKmXTCkZRxircA1MEyoHHt9HYP6y41wrTxDOpDj2PAaiwP5HLCl%2BS7qaDpLJZi8I7YWaITy6tAs0FyzyrIhf1NnNsMa6njZYNVI0sVWALP8OGWtXjiVnjxVj83ln65gWnTlLOZZdyIx5p1Uwzg29pS%2F9pkgYMGPRsrBT0tPE8QAEdYLsqmlronrdP3wr68cApppB4JsFX430J1lvyQRWyrzaeDjvIuGT3lR%2BXAs2oEVajHQv24lldfvu%2FF3dtvP0wCd6hBalKgbkkHUtDdXpMh6yxOEWMUWBcojp%2Bai4zhX%2FF6Cio%2F%2BnrWn6xjlN5dTllSPt4mbZxIkJe9kqF%2FP2BlVuqh2B%2BeIhy%2FiY%2FaQtXDO2kqaMyqkKNPektIcGItzyxQAA1QMQQV%2BNRBuYgcRx1w3vbEij%2FimesVntUsdGGR2KoN7LxGNvLBQwTSwTHuiP9WHbU7jI7lX6kw00mSFeIuWMtkoaFltdmMStx9pUV8XwdVN2i6Khu4OjC%2BvCmhMVV78piDv6nntLDSY0hzxgHZhVrBhgl9mohglJsqad0t55UpMwEeFu9B4I7tKSYx%2BrlqvnH2P%2F8v775%2F2kX%2FgXbr%2BQnr%2FgS2GXjkLtxDUImrzoKXlRptYyxOnpkHOuph2qMMzASPOwEMPOSmL8GOqUBe7fuRgzBqsU13IPTjRqnTx6Q7SDHAsJWYQu6j5JYz98IAP3%2B%2Fc11naLztbjdmaGcAiyFe%2B5We03Gy6YrIrmTd5p1LVuwnswPbJVdS4ZnLXN7Xsoec7WvgugGJqtV%2BYLd5M4CQ3QGT%2FpDzKpDqv0iwMFeJZ1VwO%2B0%2F%2FIrf2W5JEdcCK%2BWWowkOvJD2iK0G%2B1EoCuyVPUdRBZd1rZ%2FQsU5S77DWODN&X-Amz-Signature=e4913497f6bb5d494b7963e0119678c0a62367c8ab949c0a645bcbf243af3c31&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KHHBZ3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg9w2LuUqPLrmIkrjlSS4wqXlZP1pHv85%2FQCtNV%2FT04wIgQ7G3f1hZhlHQKIaHSi8o5Q4fAl%2BrVT%2B2HJ4kz9FPy3wq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMmuG78bKmXTCkZRxircA1MEyoHHt9HYP6y41wrTxDOpDj2PAaiwP5HLCl%2BS7qaDpLJZi8I7YWaITy6tAs0FyzyrIhf1NnNsMa6njZYNVI0sVWALP8OGWtXjiVnjxVj83ln65gWnTlLOZZdyIx5p1Uwzg29pS%2F9pkgYMGPRsrBT0tPE8QAEdYLsqmlronrdP3wr68cApppB4JsFX430J1lvyQRWyrzaeDjvIuGT3lR%2BXAs2oEVajHQv24lldfvu%2FF3dtvP0wCd6hBalKgbkkHUtDdXpMh6yxOEWMUWBcojp%2Bai4zhX%2FF6Cio%2F%2BnrWn6xjlN5dTllSPt4mbZxIkJe9kqF%2FP2BlVuqh2B%2BeIhy%2FiY%2FaQtXDO2kqaMyqkKNPektIcGItzyxQAA1QMQQV%2BNRBuYgcRx1w3vbEij%2FimesVntUsdGGR2KoN7LxGNvLBQwTSwTHuiP9WHbU7jI7lX6kw00mSFeIuWMtkoaFltdmMStx9pUV8XwdVN2i6Khu4OjC%2BvCmhMVV78piDv6nntLDSY0hzxgHZhVrBhgl9mohglJsqad0t55UpMwEeFu9B4I7tKSYx%2BrlqvnH2P%2F8v775%2F2kX%2FgXbr%2BQnr%2FgS2GXjkLtxDUImrzoKXlRptYyxOnpkHOuph2qMMzASPOwEMPOSmL8GOqUBe7fuRgzBqsU13IPTjRqnTx6Q7SDHAsJWYQu6j5JYz98IAP3%2B%2Fc11naLztbjdmaGcAiyFe%2B5We03Gy6YrIrmTd5p1LVuwnswPbJVdS4ZnLXN7Xsoec7WvgugGJqtV%2BYLd5M4CQ3QGT%2FpDzKpDqv0iwMFeJZ1VwO%2B0%2F%2FIrf2W5JEdcCK%2BWWowkOvJD2iK0G%2B1EoCuyVPUdRBZd1rZ%2FQsU5S77DWODN&X-Amz-Signature=a3820fba74a024c6db84d5409aa8b994e703812f25e4d595b82d78ff1b007b77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KHHBZ3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg9w2LuUqPLrmIkrjlSS4wqXlZP1pHv85%2FQCtNV%2FT04wIgQ7G3f1hZhlHQKIaHSi8o5Q4fAl%2BrVT%2B2HJ4kz9FPy3wq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMmuG78bKmXTCkZRxircA1MEyoHHt9HYP6y41wrTxDOpDj2PAaiwP5HLCl%2BS7qaDpLJZi8I7YWaITy6tAs0FyzyrIhf1NnNsMa6njZYNVI0sVWALP8OGWtXjiVnjxVj83ln65gWnTlLOZZdyIx5p1Uwzg29pS%2F9pkgYMGPRsrBT0tPE8QAEdYLsqmlronrdP3wr68cApppB4JsFX430J1lvyQRWyrzaeDjvIuGT3lR%2BXAs2oEVajHQv24lldfvu%2FF3dtvP0wCd6hBalKgbkkHUtDdXpMh6yxOEWMUWBcojp%2Bai4zhX%2FF6Cio%2F%2BnrWn6xjlN5dTllSPt4mbZxIkJe9kqF%2FP2BlVuqh2B%2BeIhy%2FiY%2FaQtXDO2kqaMyqkKNPektIcGItzyxQAA1QMQQV%2BNRBuYgcRx1w3vbEij%2FimesVntUsdGGR2KoN7LxGNvLBQwTSwTHuiP9WHbU7jI7lX6kw00mSFeIuWMtkoaFltdmMStx9pUV8XwdVN2i6Khu4OjC%2BvCmhMVV78piDv6nntLDSY0hzxgHZhVrBhgl9mohglJsqad0t55UpMwEeFu9B4I7tKSYx%2BrlqvnH2P%2F8v775%2F2kX%2FgXbr%2BQnr%2FgS2GXjkLtxDUImrzoKXlRptYyxOnpkHOuph2qMMzASPOwEMPOSmL8GOqUBe7fuRgzBqsU13IPTjRqnTx6Q7SDHAsJWYQu6j5JYz98IAP3%2B%2Fc11naLztbjdmaGcAiyFe%2B5We03Gy6YrIrmTd5p1LVuwnswPbJVdS4ZnLXN7Xsoec7WvgugGJqtV%2BYLd5M4CQ3QGT%2FpDzKpDqv0iwMFeJZ1VwO%2B0%2F%2FIrf2W5JEdcCK%2BWWowkOvJD2iK0G%2B1EoCuyVPUdRBZd1rZ%2FQsU5S77DWODN&X-Amz-Signature=58b586b377034b8b5f86bb8b7f3e652679d05cb7607533b35bd4bcbb34688dfe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KHHBZ3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg9w2LuUqPLrmIkrjlSS4wqXlZP1pHv85%2FQCtNV%2FT04wIgQ7G3f1hZhlHQKIaHSi8o5Q4fAl%2BrVT%2B2HJ4kz9FPy3wq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMmuG78bKmXTCkZRxircA1MEyoHHt9HYP6y41wrTxDOpDj2PAaiwP5HLCl%2BS7qaDpLJZi8I7YWaITy6tAs0FyzyrIhf1NnNsMa6njZYNVI0sVWALP8OGWtXjiVnjxVj83ln65gWnTlLOZZdyIx5p1Uwzg29pS%2F9pkgYMGPRsrBT0tPE8QAEdYLsqmlronrdP3wr68cApppB4JsFX430J1lvyQRWyrzaeDjvIuGT3lR%2BXAs2oEVajHQv24lldfvu%2FF3dtvP0wCd6hBalKgbkkHUtDdXpMh6yxOEWMUWBcojp%2Bai4zhX%2FF6Cio%2F%2BnrWn6xjlN5dTllSPt4mbZxIkJe9kqF%2FP2BlVuqh2B%2BeIhy%2FiY%2FaQtXDO2kqaMyqkKNPektIcGItzyxQAA1QMQQV%2BNRBuYgcRx1w3vbEij%2FimesVntUsdGGR2KoN7LxGNvLBQwTSwTHuiP9WHbU7jI7lX6kw00mSFeIuWMtkoaFltdmMStx9pUV8XwdVN2i6Khu4OjC%2BvCmhMVV78piDv6nntLDSY0hzxgHZhVrBhgl9mohglJsqad0t55UpMwEeFu9B4I7tKSYx%2BrlqvnH2P%2F8v775%2F2kX%2FgXbr%2BQnr%2FgS2GXjkLtxDUImrzoKXlRptYyxOnpkHOuph2qMMzASPOwEMPOSmL8GOqUBe7fuRgzBqsU13IPTjRqnTx6Q7SDHAsJWYQu6j5JYz98IAP3%2B%2Fc11naLztbjdmaGcAiyFe%2B5We03Gy6YrIrmTd5p1LVuwnswPbJVdS4ZnLXN7Xsoec7WvgugGJqtV%2BYLd5M4CQ3QGT%2FpDzKpDqv0iwMFeJZ1VwO%2B0%2F%2FIrf2W5JEdcCK%2BWWowkOvJD2iK0G%2B1EoCuyVPUdRBZd1rZ%2FQsU5S77DWODN&X-Amz-Signature=23c170dd838b2e1dee9987e7bf5fa8f8df8b447a65dcece7609d7c16e83dd551&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7KHHBZ3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T032515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg9w2LuUqPLrmIkrjlSS4wqXlZP1pHv85%2FQCtNV%2FT04wIgQ7G3f1hZhlHQKIaHSi8o5Q4fAl%2BrVT%2B2HJ4kz9FPy3wq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDMmuG78bKmXTCkZRxircA1MEyoHHt9HYP6y41wrTxDOpDj2PAaiwP5HLCl%2BS7qaDpLJZi8I7YWaITy6tAs0FyzyrIhf1NnNsMa6njZYNVI0sVWALP8OGWtXjiVnjxVj83ln65gWnTlLOZZdyIx5p1Uwzg29pS%2F9pkgYMGPRsrBT0tPE8QAEdYLsqmlronrdP3wr68cApppB4JsFX430J1lvyQRWyrzaeDjvIuGT3lR%2BXAs2oEVajHQv24lldfvu%2FF3dtvP0wCd6hBalKgbkkHUtDdXpMh6yxOEWMUWBcojp%2Bai4zhX%2FF6Cio%2F%2BnrWn6xjlN5dTllSPt4mbZxIkJe9kqF%2FP2BlVuqh2B%2BeIhy%2FiY%2FaQtXDO2kqaMyqkKNPektIcGItzyxQAA1QMQQV%2BNRBuYgcRx1w3vbEij%2FimesVntUsdGGR2KoN7LxGNvLBQwTSwTHuiP9WHbU7jI7lX6kw00mSFeIuWMtkoaFltdmMStx9pUV8XwdVN2i6Khu4OjC%2BvCmhMVV78piDv6nntLDSY0hzxgHZhVrBhgl9mohglJsqad0t55UpMwEeFu9B4I7tKSYx%2BrlqvnH2P%2F8v775%2F2kX%2FgXbr%2BQnr%2FgS2GXjkLtxDUImrzoKXlRptYyxOnpkHOuph2qMMzASPOwEMPOSmL8GOqUBe7fuRgzBqsU13IPTjRqnTx6Q7SDHAsJWYQu6j5JYz98IAP3%2B%2Fc11naLztbjdmaGcAiyFe%2B5We03Gy6YrIrmTd5p1LVuwnswPbJVdS4ZnLXN7Xsoec7WvgugGJqtV%2BYLd5M4CQ3QGT%2FpDzKpDqv0iwMFeJZ1VwO%2B0%2F%2FIrf2W5JEdcCK%2BWWowkOvJD2iK0G%2B1EoCuyVPUdRBZd1rZ%2FQsU5S77DWODN&X-Amz-Signature=80e8392efac69ebd9ae272da8e8dd5cbda30b9f0739623c0f17454b017189f79&X-Amz-SignedHeaders=host&x-id=GetObject)
