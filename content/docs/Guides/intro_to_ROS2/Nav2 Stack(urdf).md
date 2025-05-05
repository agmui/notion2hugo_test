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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53HOP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B2ybwyfEDZq6D69DsGOK84n9vsafbffrk47%2FRzgY74AiEAiK65zCMg6Q0nXYJWnLwosjFbXNoaIFDO17Q6%2FlJ6TqYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLqn0%2FfwaVaDRXLPkCrcA7mGCV8f31KgFz9930CYZdQBUrGV4KtHHPvOeMbLYIBtAP8f4CCRDpks7hgQmc%2FdwHdRWCwMj37wVYQEKimuQQrvn1l9OyNm9O1FWzn7uB1Ig4C6GVwxR1A5Z9MkkI7Lodk1oWbUS39N76IJhhHToq7bvuS9dx3c3%2Fg%2BhutwLwYEZEr2KmRx326tNSjHKa%2FwLGR7Qq0joAO5eUeO8Mq3QO82YJHdXcflduzx8s3Dmf7eSG2tWTVVIURM0ux2j%2Bgu2zsGeIU3Fkn%2FIUVvfuwvBnXgpj3RBmKrLTHwuTNFgIFRJ8RFi0aLgq8yywqDxhuhIadSC3z1DYVhDsF9CnF2n9%2FryrMpds9QkU8mLNWqF2nYXpRYkZfEun43fGu3iiZ%2BKhDcuArfcrvaD134U6zr%2FUt9Xd6c%2B%2F96cWZoPPUvOwIAlcb91q2PUWIf8Yp50II4h5Bis9aeR%2FzxymyG2k9ol%2F9SKIEhlmF3NuoJWIjc2ILri3aDNCdosN5LXEwUud1hvp8M39tMPbx%2B73hDDT4qqMR2QmB6GMUsgbJzTNyk2%2BBzpAB3PlgwoFllP5q6vmg2oUlKtEf0c9UB322mk60YbQWDfFLobZ4UYrr2ApZCr2BTMm2xIZu4LTayNrAmMJX%2B4sAGOqUBnEiqxPmDEgw3Gl3vrHGSYDL0CNau08gG7iPibts2%2BLMs2%2BOi2tPJxI27RmEk%2FJRQWW8r7ip84ZYn8IgTR0cuSO3Ftojksugcb4ZGRWFTfIDhfIiNkFOUPmPoeaq%2Fj8qyqj05sjJMryP5AfAYKzHEeHQeyJFxKryecTQRcvkX1ReHM%2F%2F91s8MHFGCqhBEFY9xhI3%2ByCsiHLYe1DfbJdaA8lht3%2F7S&X-Amz-Signature=82657fd3bcfbeadd6c75ff5d0c0a908e1498ebe9c15422f1830df62fa43ee6d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53HOP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B2ybwyfEDZq6D69DsGOK84n9vsafbffrk47%2FRzgY74AiEAiK65zCMg6Q0nXYJWnLwosjFbXNoaIFDO17Q6%2FlJ6TqYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLqn0%2FfwaVaDRXLPkCrcA7mGCV8f31KgFz9930CYZdQBUrGV4KtHHPvOeMbLYIBtAP8f4CCRDpks7hgQmc%2FdwHdRWCwMj37wVYQEKimuQQrvn1l9OyNm9O1FWzn7uB1Ig4C6GVwxR1A5Z9MkkI7Lodk1oWbUS39N76IJhhHToq7bvuS9dx3c3%2Fg%2BhutwLwYEZEr2KmRx326tNSjHKa%2FwLGR7Qq0joAO5eUeO8Mq3QO82YJHdXcflduzx8s3Dmf7eSG2tWTVVIURM0ux2j%2Bgu2zsGeIU3Fkn%2FIUVvfuwvBnXgpj3RBmKrLTHwuTNFgIFRJ8RFi0aLgq8yywqDxhuhIadSC3z1DYVhDsF9CnF2n9%2FryrMpds9QkU8mLNWqF2nYXpRYkZfEun43fGu3iiZ%2BKhDcuArfcrvaD134U6zr%2FUt9Xd6c%2B%2F96cWZoPPUvOwIAlcb91q2PUWIf8Yp50II4h5Bis9aeR%2FzxymyG2k9ol%2F9SKIEhlmF3NuoJWIjc2ILri3aDNCdosN5LXEwUud1hvp8M39tMPbx%2B73hDDT4qqMR2QmB6GMUsgbJzTNyk2%2BBzpAB3PlgwoFllP5q6vmg2oUlKtEf0c9UB322mk60YbQWDfFLobZ4UYrr2ApZCr2BTMm2xIZu4LTayNrAmMJX%2B4sAGOqUBnEiqxPmDEgw3Gl3vrHGSYDL0CNau08gG7iPibts2%2BLMs2%2BOi2tPJxI27RmEk%2FJRQWW8r7ip84ZYn8IgTR0cuSO3Ftojksugcb4ZGRWFTfIDhfIiNkFOUPmPoeaq%2Fj8qyqj05sjJMryP5AfAYKzHEeHQeyJFxKryecTQRcvkX1ReHM%2F%2F91s8MHFGCqhBEFY9xhI3%2ByCsiHLYe1DfbJdaA8lht3%2F7S&X-Amz-Signature=39ed53e31ea1d335d12c862be605c5e77c2a6a78c738726e4c35f60f5d63c2ae&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53HOP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B2ybwyfEDZq6D69DsGOK84n9vsafbffrk47%2FRzgY74AiEAiK65zCMg6Q0nXYJWnLwosjFbXNoaIFDO17Q6%2FlJ6TqYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLqn0%2FfwaVaDRXLPkCrcA7mGCV8f31KgFz9930CYZdQBUrGV4KtHHPvOeMbLYIBtAP8f4CCRDpks7hgQmc%2FdwHdRWCwMj37wVYQEKimuQQrvn1l9OyNm9O1FWzn7uB1Ig4C6GVwxR1A5Z9MkkI7Lodk1oWbUS39N76IJhhHToq7bvuS9dx3c3%2Fg%2BhutwLwYEZEr2KmRx326tNSjHKa%2FwLGR7Qq0joAO5eUeO8Mq3QO82YJHdXcflduzx8s3Dmf7eSG2tWTVVIURM0ux2j%2Bgu2zsGeIU3Fkn%2FIUVvfuwvBnXgpj3RBmKrLTHwuTNFgIFRJ8RFi0aLgq8yywqDxhuhIadSC3z1DYVhDsF9CnF2n9%2FryrMpds9QkU8mLNWqF2nYXpRYkZfEun43fGu3iiZ%2BKhDcuArfcrvaD134U6zr%2FUt9Xd6c%2B%2F96cWZoPPUvOwIAlcb91q2PUWIf8Yp50II4h5Bis9aeR%2FzxymyG2k9ol%2F9SKIEhlmF3NuoJWIjc2ILri3aDNCdosN5LXEwUud1hvp8M39tMPbx%2B73hDDT4qqMR2QmB6GMUsgbJzTNyk2%2BBzpAB3PlgwoFllP5q6vmg2oUlKtEf0c9UB322mk60YbQWDfFLobZ4UYrr2ApZCr2BTMm2xIZu4LTayNrAmMJX%2B4sAGOqUBnEiqxPmDEgw3Gl3vrHGSYDL0CNau08gG7iPibts2%2BLMs2%2BOi2tPJxI27RmEk%2FJRQWW8r7ip84ZYn8IgTR0cuSO3Ftojksugcb4ZGRWFTfIDhfIiNkFOUPmPoeaq%2Fj8qyqj05sjJMryP5AfAYKzHEeHQeyJFxKryecTQRcvkX1ReHM%2F%2F91s8MHFGCqhBEFY9xhI3%2ByCsiHLYe1DfbJdaA8lht3%2F7S&X-Amz-Signature=f939b1cce5d195be46ced4bf7cd2d8eb1faf4d8d25941d5b186fb42f47bb3c2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53HOP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B2ybwyfEDZq6D69DsGOK84n9vsafbffrk47%2FRzgY74AiEAiK65zCMg6Q0nXYJWnLwosjFbXNoaIFDO17Q6%2FlJ6TqYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLqn0%2FfwaVaDRXLPkCrcA7mGCV8f31KgFz9930CYZdQBUrGV4KtHHPvOeMbLYIBtAP8f4CCRDpks7hgQmc%2FdwHdRWCwMj37wVYQEKimuQQrvn1l9OyNm9O1FWzn7uB1Ig4C6GVwxR1A5Z9MkkI7Lodk1oWbUS39N76IJhhHToq7bvuS9dx3c3%2Fg%2BhutwLwYEZEr2KmRx326tNSjHKa%2FwLGR7Qq0joAO5eUeO8Mq3QO82YJHdXcflduzx8s3Dmf7eSG2tWTVVIURM0ux2j%2Bgu2zsGeIU3Fkn%2FIUVvfuwvBnXgpj3RBmKrLTHwuTNFgIFRJ8RFi0aLgq8yywqDxhuhIadSC3z1DYVhDsF9CnF2n9%2FryrMpds9QkU8mLNWqF2nYXpRYkZfEun43fGu3iiZ%2BKhDcuArfcrvaD134U6zr%2FUt9Xd6c%2B%2F96cWZoPPUvOwIAlcb91q2PUWIf8Yp50II4h5Bis9aeR%2FzxymyG2k9ol%2F9SKIEhlmF3NuoJWIjc2ILri3aDNCdosN5LXEwUud1hvp8M39tMPbx%2B73hDDT4qqMR2QmB6GMUsgbJzTNyk2%2BBzpAB3PlgwoFllP5q6vmg2oUlKtEf0c9UB322mk60YbQWDfFLobZ4UYrr2ApZCr2BTMm2xIZu4LTayNrAmMJX%2B4sAGOqUBnEiqxPmDEgw3Gl3vrHGSYDL0CNau08gG7iPibts2%2BLMs2%2BOi2tPJxI27RmEk%2FJRQWW8r7ip84ZYn8IgTR0cuSO3Ftojksugcb4ZGRWFTfIDhfIiNkFOUPmPoeaq%2Fj8qyqj05sjJMryP5AfAYKzHEeHQeyJFxKryecTQRcvkX1ReHM%2F%2F91s8MHFGCqhBEFY9xhI3%2ByCsiHLYe1DfbJdaA8lht3%2F7S&X-Amz-Signature=d0097d5d9e2edeb2ef9c2174cc44881fd59a378fd9a5feea1c7b2931d6e98b33&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53HOP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B2ybwyfEDZq6D69DsGOK84n9vsafbffrk47%2FRzgY74AiEAiK65zCMg6Q0nXYJWnLwosjFbXNoaIFDO17Q6%2FlJ6TqYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLqn0%2FfwaVaDRXLPkCrcA7mGCV8f31KgFz9930CYZdQBUrGV4KtHHPvOeMbLYIBtAP8f4CCRDpks7hgQmc%2FdwHdRWCwMj37wVYQEKimuQQrvn1l9OyNm9O1FWzn7uB1Ig4C6GVwxR1A5Z9MkkI7Lodk1oWbUS39N76IJhhHToq7bvuS9dx3c3%2Fg%2BhutwLwYEZEr2KmRx326tNSjHKa%2FwLGR7Qq0joAO5eUeO8Mq3QO82YJHdXcflduzx8s3Dmf7eSG2tWTVVIURM0ux2j%2Bgu2zsGeIU3Fkn%2FIUVvfuwvBnXgpj3RBmKrLTHwuTNFgIFRJ8RFi0aLgq8yywqDxhuhIadSC3z1DYVhDsF9CnF2n9%2FryrMpds9QkU8mLNWqF2nYXpRYkZfEun43fGu3iiZ%2BKhDcuArfcrvaD134U6zr%2FUt9Xd6c%2B%2F96cWZoPPUvOwIAlcb91q2PUWIf8Yp50II4h5Bis9aeR%2FzxymyG2k9ol%2F9SKIEhlmF3NuoJWIjc2ILri3aDNCdosN5LXEwUud1hvp8M39tMPbx%2B73hDDT4qqMR2QmB6GMUsgbJzTNyk2%2BBzpAB3PlgwoFllP5q6vmg2oUlKtEf0c9UB322mk60YbQWDfFLobZ4UYrr2ApZCr2BTMm2xIZu4LTayNrAmMJX%2B4sAGOqUBnEiqxPmDEgw3Gl3vrHGSYDL0CNau08gG7iPibts2%2BLMs2%2BOi2tPJxI27RmEk%2FJRQWW8r7ip84ZYn8IgTR0cuSO3Ftojksugcb4ZGRWFTfIDhfIiNkFOUPmPoeaq%2Fj8qyqj05sjJMryP5AfAYKzHEeHQeyJFxKryecTQRcvkX1ReHM%2F%2F91s8MHFGCqhBEFY9xhI3%2ByCsiHLYe1DfbJdaA8lht3%2F7S&X-Amz-Signature=b4d9e6d9e399facaa2e2186be62c7b723ec1924bfb1a1e7c51d047f679b11778&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53HOP%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B2ybwyfEDZq6D69DsGOK84n9vsafbffrk47%2FRzgY74AiEAiK65zCMg6Q0nXYJWnLwosjFbXNoaIFDO17Q6%2FlJ6TqYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLqn0%2FfwaVaDRXLPkCrcA7mGCV8f31KgFz9930CYZdQBUrGV4KtHHPvOeMbLYIBtAP8f4CCRDpks7hgQmc%2FdwHdRWCwMj37wVYQEKimuQQrvn1l9OyNm9O1FWzn7uB1Ig4C6GVwxR1A5Z9MkkI7Lodk1oWbUS39N76IJhhHToq7bvuS9dx3c3%2Fg%2BhutwLwYEZEr2KmRx326tNSjHKa%2FwLGR7Qq0joAO5eUeO8Mq3QO82YJHdXcflduzx8s3Dmf7eSG2tWTVVIURM0ux2j%2Bgu2zsGeIU3Fkn%2FIUVvfuwvBnXgpj3RBmKrLTHwuTNFgIFRJ8RFi0aLgq8yywqDxhuhIadSC3z1DYVhDsF9CnF2n9%2FryrMpds9QkU8mLNWqF2nYXpRYkZfEun43fGu3iiZ%2BKhDcuArfcrvaD134U6zr%2FUt9Xd6c%2B%2F96cWZoPPUvOwIAlcb91q2PUWIf8Yp50II4h5Bis9aeR%2FzxymyG2k9ol%2F9SKIEhlmF3NuoJWIjc2ILri3aDNCdosN5LXEwUud1hvp8M39tMPbx%2B73hDDT4qqMR2QmB6GMUsgbJzTNyk2%2BBzpAB3PlgwoFllP5q6vmg2oUlKtEf0c9UB322mk60YbQWDfFLobZ4UYrr2ApZCr2BTMm2xIZu4LTayNrAmMJX%2B4sAGOqUBnEiqxPmDEgw3Gl3vrHGSYDL0CNau08gG7iPibts2%2BLMs2%2BOi2tPJxI27RmEk%2FJRQWW8r7ip84ZYn8IgTR0cuSO3Ftojksugcb4ZGRWFTfIDhfIiNkFOUPmPoeaq%2Fj8qyqj05sjJMryP5AfAYKzHEeHQeyJFxKryecTQRcvkX1ReHM%2F%2F91s8MHFGCqhBEFY9xhI3%2ByCsiHLYe1DfbJdaA8lht3%2F7S&X-Amz-Signature=10dd3b5b02acfc1b6aa210191a870478e9cf5b27d0043d19cb13f229d2d44dc7&X-Amz-SignedHeaders=host&x-id=GetObject)
