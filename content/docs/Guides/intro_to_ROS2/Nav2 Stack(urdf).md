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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646U7PE55%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDJcJ02mgj%2BxnnorDPV7s%2BL5EAMrlFkrM4NnNtoTpG9PgIgdG7hTdGHhslweI29QeVU7iCJAlLtIxhMbJg6H8hVtQ8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOVFcYN6Sn6C9%2FoY1CrcA3sEh4rWoT8jmRlUHWMUzHrsoDqd0ON%2BdSNkSIvOrLghF0enLcXjtZb5%2BDQUi0bV6yF7Z4vJvIUpTICPxzKx%2B6hwE2GF8AwitIAkioI3NL4WIdtKA746JvghhvRTXOZ4%2BaE0IWEuvcTnSRSYY6n%2Bdi7qCj44sTs0Z3%2FxpouEs84ka%2FJe68YZdOEtrHp9hqRen5vIQ2tFvWoNVn0h0s5KIRobu%2B5dEC%2BhMoqqZJyl1KVeeZ9gyH78w2yo%2Fa9jZJgguCvCmeHY%2F1DrlJrhqdPng821Oh3IF4ms0TQlk65bjlTBG%2Bacl4EQtmW16MrqLgG4UPxUhvenUUJUTWOHDTgzWvDyaiA4E7qaqgrlZHiwP7Gy64MibVduTgEVQ5YbIoIlf0UPiwVbfUeofDA%2Boah9tghspOp0xoqRtgNdH1dfDen%2BCJpIevHmG9qa7%2FnlxJqJHcnCrs2whic8BbCvAJ79rHT%2FBXuuD0Vj6HcOkXLLH2o1kD97axi4U2YCVhLtlTXuwR77dFPl6%2BT3uSiCE6VDtd5kfm9SPeVK25Pk3lH5a3tSSl%2F0u6QUyikj6KIPWaCu57PPbI5PTkdQBg%2FNligSILkdg99vE6o1yCebSF9PVGJle6PE59T%2F5OIr2%2B06MIaFusIGOqUBzTk6BOapaYvS3hQj2a%2FvcAPjNE2XigR5NkjKlrS%2BiMyw8X89QxyOzf5td1z6cDPGLqxCjUIJtGo5i3URtdSBLC9B%2FnHOyzy2tsVyWSyoyGZyiiFwrDnEZMKVc6Vl95rMOBJeg5FxDJ5Uv0E3THY%2BBWQnii2YDa3fBHkr6m4wyg0dr6JCUG2iDcyNJ5Xl5CnVfwBSLopdNE6asYA5hzKfL2hYlWeD&X-Amz-Signature=1613e2e3a7a492e78252512e82a1664e3097b706f550084bdf276f0bcd3b8297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646U7PE55%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDJcJ02mgj%2BxnnorDPV7s%2BL5EAMrlFkrM4NnNtoTpG9PgIgdG7hTdGHhslweI29QeVU7iCJAlLtIxhMbJg6H8hVtQ8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOVFcYN6Sn6C9%2FoY1CrcA3sEh4rWoT8jmRlUHWMUzHrsoDqd0ON%2BdSNkSIvOrLghF0enLcXjtZb5%2BDQUi0bV6yF7Z4vJvIUpTICPxzKx%2B6hwE2GF8AwitIAkioI3NL4WIdtKA746JvghhvRTXOZ4%2BaE0IWEuvcTnSRSYY6n%2Bdi7qCj44sTs0Z3%2FxpouEs84ka%2FJe68YZdOEtrHp9hqRen5vIQ2tFvWoNVn0h0s5KIRobu%2B5dEC%2BhMoqqZJyl1KVeeZ9gyH78w2yo%2Fa9jZJgguCvCmeHY%2F1DrlJrhqdPng821Oh3IF4ms0TQlk65bjlTBG%2Bacl4EQtmW16MrqLgG4UPxUhvenUUJUTWOHDTgzWvDyaiA4E7qaqgrlZHiwP7Gy64MibVduTgEVQ5YbIoIlf0UPiwVbfUeofDA%2Boah9tghspOp0xoqRtgNdH1dfDen%2BCJpIevHmG9qa7%2FnlxJqJHcnCrs2whic8BbCvAJ79rHT%2FBXuuD0Vj6HcOkXLLH2o1kD97axi4U2YCVhLtlTXuwR77dFPl6%2BT3uSiCE6VDtd5kfm9SPeVK25Pk3lH5a3tSSl%2F0u6QUyikj6KIPWaCu57PPbI5PTkdQBg%2FNligSILkdg99vE6o1yCebSF9PVGJle6PE59T%2F5OIr2%2B06MIaFusIGOqUBzTk6BOapaYvS3hQj2a%2FvcAPjNE2XigR5NkjKlrS%2BiMyw8X89QxyOzf5td1z6cDPGLqxCjUIJtGo5i3URtdSBLC9B%2FnHOyzy2tsVyWSyoyGZyiiFwrDnEZMKVc6Vl95rMOBJeg5FxDJ5Uv0E3THY%2BBWQnii2YDa3fBHkr6m4wyg0dr6JCUG2iDcyNJ5Xl5CnVfwBSLopdNE6asYA5hzKfL2hYlWeD&X-Amz-Signature=07279baa23a712b563132b28e485664acdd2f0c0d022a8c690d85713055774cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646U7PE55%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDJcJ02mgj%2BxnnorDPV7s%2BL5EAMrlFkrM4NnNtoTpG9PgIgdG7hTdGHhslweI29QeVU7iCJAlLtIxhMbJg6H8hVtQ8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOVFcYN6Sn6C9%2FoY1CrcA3sEh4rWoT8jmRlUHWMUzHrsoDqd0ON%2BdSNkSIvOrLghF0enLcXjtZb5%2BDQUi0bV6yF7Z4vJvIUpTICPxzKx%2B6hwE2GF8AwitIAkioI3NL4WIdtKA746JvghhvRTXOZ4%2BaE0IWEuvcTnSRSYY6n%2Bdi7qCj44sTs0Z3%2FxpouEs84ka%2FJe68YZdOEtrHp9hqRen5vIQ2tFvWoNVn0h0s5KIRobu%2B5dEC%2BhMoqqZJyl1KVeeZ9gyH78w2yo%2Fa9jZJgguCvCmeHY%2F1DrlJrhqdPng821Oh3IF4ms0TQlk65bjlTBG%2Bacl4EQtmW16MrqLgG4UPxUhvenUUJUTWOHDTgzWvDyaiA4E7qaqgrlZHiwP7Gy64MibVduTgEVQ5YbIoIlf0UPiwVbfUeofDA%2Boah9tghspOp0xoqRtgNdH1dfDen%2BCJpIevHmG9qa7%2FnlxJqJHcnCrs2whic8BbCvAJ79rHT%2FBXuuD0Vj6HcOkXLLH2o1kD97axi4U2YCVhLtlTXuwR77dFPl6%2BT3uSiCE6VDtd5kfm9SPeVK25Pk3lH5a3tSSl%2F0u6QUyikj6KIPWaCu57PPbI5PTkdQBg%2FNligSILkdg99vE6o1yCebSF9PVGJle6PE59T%2F5OIr2%2B06MIaFusIGOqUBzTk6BOapaYvS3hQj2a%2FvcAPjNE2XigR5NkjKlrS%2BiMyw8X89QxyOzf5td1z6cDPGLqxCjUIJtGo5i3URtdSBLC9B%2FnHOyzy2tsVyWSyoyGZyiiFwrDnEZMKVc6Vl95rMOBJeg5FxDJ5Uv0E3THY%2BBWQnii2YDa3fBHkr6m4wyg0dr6JCUG2iDcyNJ5Xl5CnVfwBSLopdNE6asYA5hzKfL2hYlWeD&X-Amz-Signature=503e99e22ca88135917d40c456584b6c88a14e2a81eabfb212fe78012233f997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646U7PE55%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDJcJ02mgj%2BxnnorDPV7s%2BL5EAMrlFkrM4NnNtoTpG9PgIgdG7hTdGHhslweI29QeVU7iCJAlLtIxhMbJg6H8hVtQ8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOVFcYN6Sn6C9%2FoY1CrcA3sEh4rWoT8jmRlUHWMUzHrsoDqd0ON%2BdSNkSIvOrLghF0enLcXjtZb5%2BDQUi0bV6yF7Z4vJvIUpTICPxzKx%2B6hwE2GF8AwitIAkioI3NL4WIdtKA746JvghhvRTXOZ4%2BaE0IWEuvcTnSRSYY6n%2Bdi7qCj44sTs0Z3%2FxpouEs84ka%2FJe68YZdOEtrHp9hqRen5vIQ2tFvWoNVn0h0s5KIRobu%2B5dEC%2BhMoqqZJyl1KVeeZ9gyH78w2yo%2Fa9jZJgguCvCmeHY%2F1DrlJrhqdPng821Oh3IF4ms0TQlk65bjlTBG%2Bacl4EQtmW16MrqLgG4UPxUhvenUUJUTWOHDTgzWvDyaiA4E7qaqgrlZHiwP7Gy64MibVduTgEVQ5YbIoIlf0UPiwVbfUeofDA%2Boah9tghspOp0xoqRtgNdH1dfDen%2BCJpIevHmG9qa7%2FnlxJqJHcnCrs2whic8BbCvAJ79rHT%2FBXuuD0Vj6HcOkXLLH2o1kD97axi4U2YCVhLtlTXuwR77dFPl6%2BT3uSiCE6VDtd5kfm9SPeVK25Pk3lH5a3tSSl%2F0u6QUyikj6KIPWaCu57PPbI5PTkdQBg%2FNligSILkdg99vE6o1yCebSF9PVGJle6PE59T%2F5OIr2%2B06MIaFusIGOqUBzTk6BOapaYvS3hQj2a%2FvcAPjNE2XigR5NkjKlrS%2BiMyw8X89QxyOzf5td1z6cDPGLqxCjUIJtGo5i3URtdSBLC9B%2FnHOyzy2tsVyWSyoyGZyiiFwrDnEZMKVc6Vl95rMOBJeg5FxDJ5Uv0E3THY%2BBWQnii2YDa3fBHkr6m4wyg0dr6JCUG2iDcyNJ5Xl5CnVfwBSLopdNE6asYA5hzKfL2hYlWeD&X-Amz-Signature=43749c920bb0100343b649b3fdbad35013261cbe88c6febd190604debc68bd32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646U7PE55%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDJcJ02mgj%2BxnnorDPV7s%2BL5EAMrlFkrM4NnNtoTpG9PgIgdG7hTdGHhslweI29QeVU7iCJAlLtIxhMbJg6H8hVtQ8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOVFcYN6Sn6C9%2FoY1CrcA3sEh4rWoT8jmRlUHWMUzHrsoDqd0ON%2BdSNkSIvOrLghF0enLcXjtZb5%2BDQUi0bV6yF7Z4vJvIUpTICPxzKx%2B6hwE2GF8AwitIAkioI3NL4WIdtKA746JvghhvRTXOZ4%2BaE0IWEuvcTnSRSYY6n%2Bdi7qCj44sTs0Z3%2FxpouEs84ka%2FJe68YZdOEtrHp9hqRen5vIQ2tFvWoNVn0h0s5KIRobu%2B5dEC%2BhMoqqZJyl1KVeeZ9gyH78w2yo%2Fa9jZJgguCvCmeHY%2F1DrlJrhqdPng821Oh3IF4ms0TQlk65bjlTBG%2Bacl4EQtmW16MrqLgG4UPxUhvenUUJUTWOHDTgzWvDyaiA4E7qaqgrlZHiwP7Gy64MibVduTgEVQ5YbIoIlf0UPiwVbfUeofDA%2Boah9tghspOp0xoqRtgNdH1dfDen%2BCJpIevHmG9qa7%2FnlxJqJHcnCrs2whic8BbCvAJ79rHT%2FBXuuD0Vj6HcOkXLLH2o1kD97axi4U2YCVhLtlTXuwR77dFPl6%2BT3uSiCE6VDtd5kfm9SPeVK25Pk3lH5a3tSSl%2F0u6QUyikj6KIPWaCu57PPbI5PTkdQBg%2FNligSILkdg99vE6o1yCebSF9PVGJle6PE59T%2F5OIr2%2B06MIaFusIGOqUBzTk6BOapaYvS3hQj2a%2FvcAPjNE2XigR5NkjKlrS%2BiMyw8X89QxyOzf5td1z6cDPGLqxCjUIJtGo5i3URtdSBLC9B%2FnHOyzy2tsVyWSyoyGZyiiFwrDnEZMKVc6Vl95rMOBJeg5FxDJ5Uv0E3THY%2BBWQnii2YDa3fBHkr6m4wyg0dr6JCUG2iDcyNJ5Xl5CnVfwBSLopdNE6asYA5hzKfL2hYlWeD&X-Amz-Signature=4c795b4ea2dcd48909c95ef3cf3238c658b1cf315ddd5c00f6269ebdf07174d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646U7PE55%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDJcJ02mgj%2BxnnorDPV7s%2BL5EAMrlFkrM4NnNtoTpG9PgIgdG7hTdGHhslweI29QeVU7iCJAlLtIxhMbJg6H8hVtQ8q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDOVFcYN6Sn6C9%2FoY1CrcA3sEh4rWoT8jmRlUHWMUzHrsoDqd0ON%2BdSNkSIvOrLghF0enLcXjtZb5%2BDQUi0bV6yF7Z4vJvIUpTICPxzKx%2B6hwE2GF8AwitIAkioI3NL4WIdtKA746JvghhvRTXOZ4%2BaE0IWEuvcTnSRSYY6n%2Bdi7qCj44sTs0Z3%2FxpouEs84ka%2FJe68YZdOEtrHp9hqRen5vIQ2tFvWoNVn0h0s5KIRobu%2B5dEC%2BhMoqqZJyl1KVeeZ9gyH78w2yo%2Fa9jZJgguCvCmeHY%2F1DrlJrhqdPng821Oh3IF4ms0TQlk65bjlTBG%2Bacl4EQtmW16MrqLgG4UPxUhvenUUJUTWOHDTgzWvDyaiA4E7qaqgrlZHiwP7Gy64MibVduTgEVQ5YbIoIlf0UPiwVbfUeofDA%2Boah9tghspOp0xoqRtgNdH1dfDen%2BCJpIevHmG9qa7%2FnlxJqJHcnCrs2whic8BbCvAJ79rHT%2FBXuuD0Vj6HcOkXLLH2o1kD97axi4U2YCVhLtlTXuwR77dFPl6%2BT3uSiCE6VDtd5kfm9SPeVK25Pk3lH5a3tSSl%2F0u6QUyikj6KIPWaCu57PPbI5PTkdQBg%2FNligSILkdg99vE6o1yCebSF9PVGJle6PE59T%2F5OIr2%2B06MIaFusIGOqUBzTk6BOapaYvS3hQj2a%2FvcAPjNE2XigR5NkjKlrS%2BiMyw8X89QxyOzf5td1z6cDPGLqxCjUIJtGo5i3URtdSBLC9B%2FnHOyzy2tsVyWSyoyGZyiiFwrDnEZMKVc6Vl95rMOBJeg5FxDJ5Uv0E3THY%2BBWQnii2YDa3fBHkr6m4wyg0dr6JCUG2iDcyNJ5Xl5CnVfwBSLopdNE6asYA5hzKfL2hYlWeD&X-Amz-Signature=fdd9cb00c8cfde7f5df10e5f2871c98472ae844ce708df3808de5258f3cf5a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
