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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECSS6Q5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCiQxRTy2ZnyqMcmOWOIYQVbUXcvp30%2BYAsxHRHCFPpAiA6MV1FkH%2Bs3o3yQ5gPwFXkYtx26nc0V%2Fw%2FIZrcyq3pYCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwEB4CFSib9wA%2B9dzKtwDxl3NGtahSFVgg4nIR8YhA8cTAPR1AHq7lsdSHVV9boss%2Bo9HaSNx1LPhuGC1Kly%2F75iotzTuBtyfGrihSRWODSx8OwC2ziV6bEoLyIfYF2bTLYplAui%2BEPGeUFBJ5xOB8XLEmHPzf7naCnTyjYZFqVWHysMZ3%2Fx9lZFPA1cIIE4wxS9dFw1Or%2FtT4cU0i5rvHG%2Bn5b88w4W13DEB4rlPzp%2FvXuSE38ZP4W%2FlcGBOfMXM3jSU81JMeHhpKBqxO59I%2FMD8Fnzts7YNCW1rnzNNjK%2BbKWAZvy6g82dKztjCjWeGjciQj6rJiR81WfXI94osl5rvCHs8Bze8McAdLZmfYU10PsykIdLfX3f460ZXVKn%2BRp4UrbpZzhpQFyu6Kwcq6pKoV14NMSMstg3DEpn5six%2BzAG5adpGof3xfSMoaO8YT%2FIiozeGI0jFihMy30KcsYTSz3S%2B9Qq%2FtRjNAyIWMEl6nBLDL8tx4892KTaLZSCSMqAvqks2X5c2Dg4Lu%2B1MQ7OvzpjZrzrs19JMkgdMxxLQb1qlpMEAUXD2Wio0qc9LsMO3FxPlLr9Z5Oq0rIVVdQcY4jQm4CD6fIKMBK%2BEffKCuY%2B8%2Bs6cFubO8cUWhZRbfIQNK6hMRm3MyQIwlaTVwgY6pgHg4YbkT%2B3QzVW4fec7IfpNoXQyoMIaj%2B61fiRtKX5m%2BkfTKowCDYjsOinDHMOtQkJLfcRUM%2FwdD8J%2BlNYTY38SoNIqoaBE4gLIYS7%2BboN8UPzLCxS5uTy9p4xMiJTFqk1okd%2FXepZbxwmVsu3nJ2aB35rTebsbMGQApZW575HSnWm2zHql0cRrtJawMMSNJWtfGXERdvYnNm0GYfYlobagJCT5KqzT&X-Amz-Signature=b88a14fb5edcd1eb5dcaf354e35a080ec9dff609fcaf905cb431a37f4da318ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECSS6Q5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCiQxRTy2ZnyqMcmOWOIYQVbUXcvp30%2BYAsxHRHCFPpAiA6MV1FkH%2Bs3o3yQ5gPwFXkYtx26nc0V%2Fw%2FIZrcyq3pYCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwEB4CFSib9wA%2B9dzKtwDxl3NGtahSFVgg4nIR8YhA8cTAPR1AHq7lsdSHVV9boss%2Bo9HaSNx1LPhuGC1Kly%2F75iotzTuBtyfGrihSRWODSx8OwC2ziV6bEoLyIfYF2bTLYplAui%2BEPGeUFBJ5xOB8XLEmHPzf7naCnTyjYZFqVWHysMZ3%2Fx9lZFPA1cIIE4wxS9dFw1Or%2FtT4cU0i5rvHG%2Bn5b88w4W13DEB4rlPzp%2FvXuSE38ZP4W%2FlcGBOfMXM3jSU81JMeHhpKBqxO59I%2FMD8Fnzts7YNCW1rnzNNjK%2BbKWAZvy6g82dKztjCjWeGjciQj6rJiR81WfXI94osl5rvCHs8Bze8McAdLZmfYU10PsykIdLfX3f460ZXVKn%2BRp4UrbpZzhpQFyu6Kwcq6pKoV14NMSMstg3DEpn5six%2BzAG5adpGof3xfSMoaO8YT%2FIiozeGI0jFihMy30KcsYTSz3S%2B9Qq%2FtRjNAyIWMEl6nBLDL8tx4892KTaLZSCSMqAvqks2X5c2Dg4Lu%2B1MQ7OvzpjZrzrs19JMkgdMxxLQb1qlpMEAUXD2Wio0qc9LsMO3FxPlLr9Z5Oq0rIVVdQcY4jQm4CD6fIKMBK%2BEffKCuY%2B8%2Bs6cFubO8cUWhZRbfIQNK6hMRm3MyQIwlaTVwgY6pgHg4YbkT%2B3QzVW4fec7IfpNoXQyoMIaj%2B61fiRtKX5m%2BkfTKowCDYjsOinDHMOtQkJLfcRUM%2FwdD8J%2BlNYTY38SoNIqoaBE4gLIYS7%2BboN8UPzLCxS5uTy9p4xMiJTFqk1okd%2FXepZbxwmVsu3nJ2aB35rTebsbMGQApZW575HSnWm2zHql0cRrtJawMMSNJWtfGXERdvYnNm0GYfYlobagJCT5KqzT&X-Amz-Signature=608839dff029b5aaca1fdc4a06c5f41721c3907228e5c58b2c72e1ddee5d0b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECSS6Q5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCiQxRTy2ZnyqMcmOWOIYQVbUXcvp30%2BYAsxHRHCFPpAiA6MV1FkH%2Bs3o3yQ5gPwFXkYtx26nc0V%2Fw%2FIZrcyq3pYCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwEB4CFSib9wA%2B9dzKtwDxl3NGtahSFVgg4nIR8YhA8cTAPR1AHq7lsdSHVV9boss%2Bo9HaSNx1LPhuGC1Kly%2F75iotzTuBtyfGrihSRWODSx8OwC2ziV6bEoLyIfYF2bTLYplAui%2BEPGeUFBJ5xOB8XLEmHPzf7naCnTyjYZFqVWHysMZ3%2Fx9lZFPA1cIIE4wxS9dFw1Or%2FtT4cU0i5rvHG%2Bn5b88w4W13DEB4rlPzp%2FvXuSE38ZP4W%2FlcGBOfMXM3jSU81JMeHhpKBqxO59I%2FMD8Fnzts7YNCW1rnzNNjK%2BbKWAZvy6g82dKztjCjWeGjciQj6rJiR81WfXI94osl5rvCHs8Bze8McAdLZmfYU10PsykIdLfX3f460ZXVKn%2BRp4UrbpZzhpQFyu6Kwcq6pKoV14NMSMstg3DEpn5six%2BzAG5adpGof3xfSMoaO8YT%2FIiozeGI0jFihMy30KcsYTSz3S%2B9Qq%2FtRjNAyIWMEl6nBLDL8tx4892KTaLZSCSMqAvqks2X5c2Dg4Lu%2B1MQ7OvzpjZrzrs19JMkgdMxxLQb1qlpMEAUXD2Wio0qc9LsMO3FxPlLr9Z5Oq0rIVVdQcY4jQm4CD6fIKMBK%2BEffKCuY%2B8%2Bs6cFubO8cUWhZRbfIQNK6hMRm3MyQIwlaTVwgY6pgHg4YbkT%2B3QzVW4fec7IfpNoXQyoMIaj%2B61fiRtKX5m%2BkfTKowCDYjsOinDHMOtQkJLfcRUM%2FwdD8J%2BlNYTY38SoNIqoaBE4gLIYS7%2BboN8UPzLCxS5uTy9p4xMiJTFqk1okd%2FXepZbxwmVsu3nJ2aB35rTebsbMGQApZW575HSnWm2zHql0cRrtJawMMSNJWtfGXERdvYnNm0GYfYlobagJCT5KqzT&X-Amz-Signature=43ac68114c065894ae8b1081366c2b3686c4648b616e126bd88adfb73856b7eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECSS6Q5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCiQxRTy2ZnyqMcmOWOIYQVbUXcvp30%2BYAsxHRHCFPpAiA6MV1FkH%2Bs3o3yQ5gPwFXkYtx26nc0V%2Fw%2FIZrcyq3pYCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwEB4CFSib9wA%2B9dzKtwDxl3NGtahSFVgg4nIR8YhA8cTAPR1AHq7lsdSHVV9boss%2Bo9HaSNx1LPhuGC1Kly%2F75iotzTuBtyfGrihSRWODSx8OwC2ziV6bEoLyIfYF2bTLYplAui%2BEPGeUFBJ5xOB8XLEmHPzf7naCnTyjYZFqVWHysMZ3%2Fx9lZFPA1cIIE4wxS9dFw1Or%2FtT4cU0i5rvHG%2Bn5b88w4W13DEB4rlPzp%2FvXuSE38ZP4W%2FlcGBOfMXM3jSU81JMeHhpKBqxO59I%2FMD8Fnzts7YNCW1rnzNNjK%2BbKWAZvy6g82dKztjCjWeGjciQj6rJiR81WfXI94osl5rvCHs8Bze8McAdLZmfYU10PsykIdLfX3f460ZXVKn%2BRp4UrbpZzhpQFyu6Kwcq6pKoV14NMSMstg3DEpn5six%2BzAG5adpGof3xfSMoaO8YT%2FIiozeGI0jFihMy30KcsYTSz3S%2B9Qq%2FtRjNAyIWMEl6nBLDL8tx4892KTaLZSCSMqAvqks2X5c2Dg4Lu%2B1MQ7OvzpjZrzrs19JMkgdMxxLQb1qlpMEAUXD2Wio0qc9LsMO3FxPlLr9Z5Oq0rIVVdQcY4jQm4CD6fIKMBK%2BEffKCuY%2B8%2Bs6cFubO8cUWhZRbfIQNK6hMRm3MyQIwlaTVwgY6pgHg4YbkT%2B3QzVW4fec7IfpNoXQyoMIaj%2B61fiRtKX5m%2BkfTKowCDYjsOinDHMOtQkJLfcRUM%2FwdD8J%2BlNYTY38SoNIqoaBE4gLIYS7%2BboN8UPzLCxS5uTy9p4xMiJTFqk1okd%2FXepZbxwmVsu3nJ2aB35rTebsbMGQApZW575HSnWm2zHql0cRrtJawMMSNJWtfGXERdvYnNm0GYfYlobagJCT5KqzT&X-Amz-Signature=c5df9743c77e734e03ffca14e3320f7df5c244dbc433be73aded98903cbf2272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECSS6Q5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCiQxRTy2ZnyqMcmOWOIYQVbUXcvp30%2BYAsxHRHCFPpAiA6MV1FkH%2Bs3o3yQ5gPwFXkYtx26nc0V%2Fw%2FIZrcyq3pYCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwEB4CFSib9wA%2B9dzKtwDxl3NGtahSFVgg4nIR8YhA8cTAPR1AHq7lsdSHVV9boss%2Bo9HaSNx1LPhuGC1Kly%2F75iotzTuBtyfGrihSRWODSx8OwC2ziV6bEoLyIfYF2bTLYplAui%2BEPGeUFBJ5xOB8XLEmHPzf7naCnTyjYZFqVWHysMZ3%2Fx9lZFPA1cIIE4wxS9dFw1Or%2FtT4cU0i5rvHG%2Bn5b88w4W13DEB4rlPzp%2FvXuSE38ZP4W%2FlcGBOfMXM3jSU81JMeHhpKBqxO59I%2FMD8Fnzts7YNCW1rnzNNjK%2BbKWAZvy6g82dKztjCjWeGjciQj6rJiR81WfXI94osl5rvCHs8Bze8McAdLZmfYU10PsykIdLfX3f460ZXVKn%2BRp4UrbpZzhpQFyu6Kwcq6pKoV14NMSMstg3DEpn5six%2BzAG5adpGof3xfSMoaO8YT%2FIiozeGI0jFihMy30KcsYTSz3S%2B9Qq%2FtRjNAyIWMEl6nBLDL8tx4892KTaLZSCSMqAvqks2X5c2Dg4Lu%2B1MQ7OvzpjZrzrs19JMkgdMxxLQb1qlpMEAUXD2Wio0qc9LsMO3FxPlLr9Z5Oq0rIVVdQcY4jQm4CD6fIKMBK%2BEffKCuY%2B8%2Bs6cFubO8cUWhZRbfIQNK6hMRm3MyQIwlaTVwgY6pgHg4YbkT%2B3QzVW4fec7IfpNoXQyoMIaj%2B61fiRtKX5m%2BkfTKowCDYjsOinDHMOtQkJLfcRUM%2FwdD8J%2BlNYTY38SoNIqoaBE4gLIYS7%2BboN8UPzLCxS5uTy9p4xMiJTFqk1okd%2FXepZbxwmVsu3nJ2aB35rTebsbMGQApZW575HSnWm2zHql0cRrtJawMMSNJWtfGXERdvYnNm0GYfYlobagJCT5KqzT&X-Amz-Signature=33d6a0fa76215c9227b15bf15d5cbc60deacd7ba3656c0ed404686d399005e51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECSS6Q5%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFCiQxRTy2ZnyqMcmOWOIYQVbUXcvp30%2BYAsxHRHCFPpAiA6MV1FkH%2Bs3o3yQ5gPwFXkYtx26nc0V%2Fw%2FIZrcyq3pYCqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwEB4CFSib9wA%2B9dzKtwDxl3NGtahSFVgg4nIR8YhA8cTAPR1AHq7lsdSHVV9boss%2Bo9HaSNx1LPhuGC1Kly%2F75iotzTuBtyfGrihSRWODSx8OwC2ziV6bEoLyIfYF2bTLYplAui%2BEPGeUFBJ5xOB8XLEmHPzf7naCnTyjYZFqVWHysMZ3%2Fx9lZFPA1cIIE4wxS9dFw1Or%2FtT4cU0i5rvHG%2Bn5b88w4W13DEB4rlPzp%2FvXuSE38ZP4W%2FlcGBOfMXM3jSU81JMeHhpKBqxO59I%2FMD8Fnzts7YNCW1rnzNNjK%2BbKWAZvy6g82dKztjCjWeGjciQj6rJiR81WfXI94osl5rvCHs8Bze8McAdLZmfYU10PsykIdLfX3f460ZXVKn%2BRp4UrbpZzhpQFyu6Kwcq6pKoV14NMSMstg3DEpn5six%2BzAG5adpGof3xfSMoaO8YT%2FIiozeGI0jFihMy30KcsYTSz3S%2B9Qq%2FtRjNAyIWMEl6nBLDL8tx4892KTaLZSCSMqAvqks2X5c2Dg4Lu%2B1MQ7OvzpjZrzrs19JMkgdMxxLQb1qlpMEAUXD2Wio0qc9LsMO3FxPlLr9Z5Oq0rIVVdQcY4jQm4CD6fIKMBK%2BEffKCuY%2B8%2Bs6cFubO8cUWhZRbfIQNK6hMRm3MyQIwlaTVwgY6pgHg4YbkT%2B3QzVW4fec7IfpNoXQyoMIaj%2B61fiRtKX5m%2BkfTKowCDYjsOinDHMOtQkJLfcRUM%2FwdD8J%2BlNYTY38SoNIqoaBE4gLIYS7%2BboN8UPzLCxS5uTy9p4xMiJTFqk1okd%2FXepZbxwmVsu3nJ2aB35rTebsbMGQApZW575HSnWm2zHql0cRrtJawMMSNJWtfGXERdvYnNm0GYfYlobagJCT5KqzT&X-Amz-Signature=150add8c560e3be16aed5a5e4a829b542c3264ad90f7cda72b6abebb2df29738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
