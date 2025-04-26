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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643PZPPMN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHo4b7wxqXr01Y6%2B09MG9ie1pTWHofOZ5R6smBdH4satAiBGttvxpdIpIaUZbfsvq0dvvYD%2BsLJ0uqPczCaGGNmmeyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMAbDCbw3Ems9jDeyvKtwDIrbyk3GvGZm3xy1P2vjMZZKGM6HfOPCi%2FFyB6Vz5xhpLuKQq52DeqjpA18PJFyCZEvMvNXE6rtbRqKVWh4PCGbltFBPictVLobNXGFbIApI0Y%2BOZBD9covvOJb6Q25VAflk0XaF0td%2FOHXAhyQwGhMReAtHPh3TM0wN%2Bd%2BnjgArDVOt2f%2FB1qt92yJ1Cm4ArRqJxJ492XuBnRiWG8%2BsEBsXjLCGVVzX8HJIdVCTfg5wUx%2FxFKhLlELGlvSpQ5UdGqugpaur9ckdbzH7ujUx8MPd7nr7%2Fn9lxzufXLDyNOhB3c6ZuHCK7nhORS2HzG7d6KBQVRC7KgRIjspF552JGlncXKCPAgSgyXm6eJv%2BPGpwphAg88gTxMHmC962xCLNXaObQYvxzhwCiHNeSPwVJOTOesF1NemPe%2B1oZtfDrwlrPiqCxhNLYFPmUPOAhWZiDTpTuR1WT0twyU7PS2r0GTWKk4k3Bdz0SUSzXRIUTQ%2B3kenKzBHC8p1QHqCo9MYC%2B%2BPro0sO85E9T82xslg0BSJqlRboFR6Qik71TlNCDrsgue8R9KQT56sKrlffHHNfno79s14M3tpdvMVt3v19jFWL4zjYAU26AXWU52YcfUlueQ%2BK6hmJnmUeKVUQwlcyzwAY6pgEOuXQtyHyHVxNpmzpTCxqa9XM06X3ZcVJi6%2FFGOhENLgZd0yqQakoFBv4DsyP1pw1uT1oMieIb%2FtB85gkz1wtXdK7IwB1moST7XjkO6TpyfBsmzWZoPC%2FnEbVje%2Fn64Cj15%2BPkHsrmiABolAIAd5LACiJhPywwlItdrWkYBsRLkIO8b7ifyhn5PnmmdpJGxXUXAmmfQi5WT7JzyetFGoKHPDV0p73A&X-Amz-Signature=321a4a27c9b8fa778c07a335ea6630916d8c10df1f70d0d1b19d750084298069&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643PZPPMN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHo4b7wxqXr01Y6%2B09MG9ie1pTWHofOZ5R6smBdH4satAiBGttvxpdIpIaUZbfsvq0dvvYD%2BsLJ0uqPczCaGGNmmeyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMAbDCbw3Ems9jDeyvKtwDIrbyk3GvGZm3xy1P2vjMZZKGM6HfOPCi%2FFyB6Vz5xhpLuKQq52DeqjpA18PJFyCZEvMvNXE6rtbRqKVWh4PCGbltFBPictVLobNXGFbIApI0Y%2BOZBD9covvOJb6Q25VAflk0XaF0td%2FOHXAhyQwGhMReAtHPh3TM0wN%2Bd%2BnjgArDVOt2f%2FB1qt92yJ1Cm4ArRqJxJ492XuBnRiWG8%2BsEBsXjLCGVVzX8HJIdVCTfg5wUx%2FxFKhLlELGlvSpQ5UdGqugpaur9ckdbzH7ujUx8MPd7nr7%2Fn9lxzufXLDyNOhB3c6ZuHCK7nhORS2HzG7d6KBQVRC7KgRIjspF552JGlncXKCPAgSgyXm6eJv%2BPGpwphAg88gTxMHmC962xCLNXaObQYvxzhwCiHNeSPwVJOTOesF1NemPe%2B1oZtfDrwlrPiqCxhNLYFPmUPOAhWZiDTpTuR1WT0twyU7PS2r0GTWKk4k3Bdz0SUSzXRIUTQ%2B3kenKzBHC8p1QHqCo9MYC%2B%2BPro0sO85E9T82xslg0BSJqlRboFR6Qik71TlNCDrsgue8R9KQT56sKrlffHHNfno79s14M3tpdvMVt3v19jFWL4zjYAU26AXWU52YcfUlueQ%2BK6hmJnmUeKVUQwlcyzwAY6pgEOuXQtyHyHVxNpmzpTCxqa9XM06X3ZcVJi6%2FFGOhENLgZd0yqQakoFBv4DsyP1pw1uT1oMieIb%2FtB85gkz1wtXdK7IwB1moST7XjkO6TpyfBsmzWZoPC%2FnEbVje%2Fn64Cj15%2BPkHsrmiABolAIAd5LACiJhPywwlItdrWkYBsRLkIO8b7ifyhn5PnmmdpJGxXUXAmmfQi5WT7JzyetFGoKHPDV0p73A&X-Amz-Signature=684e7229a958c1b6821f60668709bc06e747f69a3b1aea02c572b0407f4ad737&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643PZPPMN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHo4b7wxqXr01Y6%2B09MG9ie1pTWHofOZ5R6smBdH4satAiBGttvxpdIpIaUZbfsvq0dvvYD%2BsLJ0uqPczCaGGNmmeyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMAbDCbw3Ems9jDeyvKtwDIrbyk3GvGZm3xy1P2vjMZZKGM6HfOPCi%2FFyB6Vz5xhpLuKQq52DeqjpA18PJFyCZEvMvNXE6rtbRqKVWh4PCGbltFBPictVLobNXGFbIApI0Y%2BOZBD9covvOJb6Q25VAflk0XaF0td%2FOHXAhyQwGhMReAtHPh3TM0wN%2Bd%2BnjgArDVOt2f%2FB1qt92yJ1Cm4ArRqJxJ492XuBnRiWG8%2BsEBsXjLCGVVzX8HJIdVCTfg5wUx%2FxFKhLlELGlvSpQ5UdGqugpaur9ckdbzH7ujUx8MPd7nr7%2Fn9lxzufXLDyNOhB3c6ZuHCK7nhORS2HzG7d6KBQVRC7KgRIjspF552JGlncXKCPAgSgyXm6eJv%2BPGpwphAg88gTxMHmC962xCLNXaObQYvxzhwCiHNeSPwVJOTOesF1NemPe%2B1oZtfDrwlrPiqCxhNLYFPmUPOAhWZiDTpTuR1WT0twyU7PS2r0GTWKk4k3Bdz0SUSzXRIUTQ%2B3kenKzBHC8p1QHqCo9MYC%2B%2BPro0sO85E9T82xslg0BSJqlRboFR6Qik71TlNCDrsgue8R9KQT56sKrlffHHNfno79s14M3tpdvMVt3v19jFWL4zjYAU26AXWU52YcfUlueQ%2BK6hmJnmUeKVUQwlcyzwAY6pgEOuXQtyHyHVxNpmzpTCxqa9XM06X3ZcVJi6%2FFGOhENLgZd0yqQakoFBv4DsyP1pw1uT1oMieIb%2FtB85gkz1wtXdK7IwB1moST7XjkO6TpyfBsmzWZoPC%2FnEbVje%2Fn64Cj15%2BPkHsrmiABolAIAd5LACiJhPywwlItdrWkYBsRLkIO8b7ifyhn5PnmmdpJGxXUXAmmfQi5WT7JzyetFGoKHPDV0p73A&X-Amz-Signature=0b1a4125eddfdba0c470c53ebb3b16f59b8b05c7c9db81e1c7f2b062e8bcec6d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643PZPPMN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHo4b7wxqXr01Y6%2B09MG9ie1pTWHofOZ5R6smBdH4satAiBGttvxpdIpIaUZbfsvq0dvvYD%2BsLJ0uqPczCaGGNmmeyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMAbDCbw3Ems9jDeyvKtwDIrbyk3GvGZm3xy1P2vjMZZKGM6HfOPCi%2FFyB6Vz5xhpLuKQq52DeqjpA18PJFyCZEvMvNXE6rtbRqKVWh4PCGbltFBPictVLobNXGFbIApI0Y%2BOZBD9covvOJb6Q25VAflk0XaF0td%2FOHXAhyQwGhMReAtHPh3TM0wN%2Bd%2BnjgArDVOt2f%2FB1qt92yJ1Cm4ArRqJxJ492XuBnRiWG8%2BsEBsXjLCGVVzX8HJIdVCTfg5wUx%2FxFKhLlELGlvSpQ5UdGqugpaur9ckdbzH7ujUx8MPd7nr7%2Fn9lxzufXLDyNOhB3c6ZuHCK7nhORS2HzG7d6KBQVRC7KgRIjspF552JGlncXKCPAgSgyXm6eJv%2BPGpwphAg88gTxMHmC962xCLNXaObQYvxzhwCiHNeSPwVJOTOesF1NemPe%2B1oZtfDrwlrPiqCxhNLYFPmUPOAhWZiDTpTuR1WT0twyU7PS2r0GTWKk4k3Bdz0SUSzXRIUTQ%2B3kenKzBHC8p1QHqCo9MYC%2B%2BPro0sO85E9T82xslg0BSJqlRboFR6Qik71TlNCDrsgue8R9KQT56sKrlffHHNfno79s14M3tpdvMVt3v19jFWL4zjYAU26AXWU52YcfUlueQ%2BK6hmJnmUeKVUQwlcyzwAY6pgEOuXQtyHyHVxNpmzpTCxqa9XM06X3ZcVJi6%2FFGOhENLgZd0yqQakoFBv4DsyP1pw1uT1oMieIb%2FtB85gkz1wtXdK7IwB1moST7XjkO6TpyfBsmzWZoPC%2FnEbVje%2Fn64Cj15%2BPkHsrmiABolAIAd5LACiJhPywwlItdrWkYBsRLkIO8b7ifyhn5PnmmdpJGxXUXAmmfQi5WT7JzyetFGoKHPDV0p73A&X-Amz-Signature=7d79d6561b3092127610f89b2a90cb745d4335b86f2e0e2a770516fa7ad964aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643PZPPMN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHo4b7wxqXr01Y6%2B09MG9ie1pTWHofOZ5R6smBdH4satAiBGttvxpdIpIaUZbfsvq0dvvYD%2BsLJ0uqPczCaGGNmmeyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMAbDCbw3Ems9jDeyvKtwDIrbyk3GvGZm3xy1P2vjMZZKGM6HfOPCi%2FFyB6Vz5xhpLuKQq52DeqjpA18PJFyCZEvMvNXE6rtbRqKVWh4PCGbltFBPictVLobNXGFbIApI0Y%2BOZBD9covvOJb6Q25VAflk0XaF0td%2FOHXAhyQwGhMReAtHPh3TM0wN%2Bd%2BnjgArDVOt2f%2FB1qt92yJ1Cm4ArRqJxJ492XuBnRiWG8%2BsEBsXjLCGVVzX8HJIdVCTfg5wUx%2FxFKhLlELGlvSpQ5UdGqugpaur9ckdbzH7ujUx8MPd7nr7%2Fn9lxzufXLDyNOhB3c6ZuHCK7nhORS2HzG7d6KBQVRC7KgRIjspF552JGlncXKCPAgSgyXm6eJv%2BPGpwphAg88gTxMHmC962xCLNXaObQYvxzhwCiHNeSPwVJOTOesF1NemPe%2B1oZtfDrwlrPiqCxhNLYFPmUPOAhWZiDTpTuR1WT0twyU7PS2r0GTWKk4k3Bdz0SUSzXRIUTQ%2B3kenKzBHC8p1QHqCo9MYC%2B%2BPro0sO85E9T82xslg0BSJqlRboFR6Qik71TlNCDrsgue8R9KQT56sKrlffHHNfno79s14M3tpdvMVt3v19jFWL4zjYAU26AXWU52YcfUlueQ%2BK6hmJnmUeKVUQwlcyzwAY6pgEOuXQtyHyHVxNpmzpTCxqa9XM06X3ZcVJi6%2FFGOhENLgZd0yqQakoFBv4DsyP1pw1uT1oMieIb%2FtB85gkz1wtXdK7IwB1moST7XjkO6TpyfBsmzWZoPC%2FnEbVje%2Fn64Cj15%2BPkHsrmiABolAIAd5LACiJhPywwlItdrWkYBsRLkIO8b7ifyhn5PnmmdpJGxXUXAmmfQi5WT7JzyetFGoKHPDV0p73A&X-Amz-Signature=cfbcb692abfa2018ea5dea3b915b76f0fb63f07f7d3b8630f5e49ed40405bc99&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643PZPPMN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHo4b7wxqXr01Y6%2B09MG9ie1pTWHofOZ5R6smBdH4satAiBGttvxpdIpIaUZbfsvq0dvvYD%2BsLJ0uqPczCaGGNmmeyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMAbDCbw3Ems9jDeyvKtwDIrbyk3GvGZm3xy1P2vjMZZKGM6HfOPCi%2FFyB6Vz5xhpLuKQq52DeqjpA18PJFyCZEvMvNXE6rtbRqKVWh4PCGbltFBPictVLobNXGFbIApI0Y%2BOZBD9covvOJb6Q25VAflk0XaF0td%2FOHXAhyQwGhMReAtHPh3TM0wN%2Bd%2BnjgArDVOt2f%2FB1qt92yJ1Cm4ArRqJxJ492XuBnRiWG8%2BsEBsXjLCGVVzX8HJIdVCTfg5wUx%2FxFKhLlELGlvSpQ5UdGqugpaur9ckdbzH7ujUx8MPd7nr7%2Fn9lxzufXLDyNOhB3c6ZuHCK7nhORS2HzG7d6KBQVRC7KgRIjspF552JGlncXKCPAgSgyXm6eJv%2BPGpwphAg88gTxMHmC962xCLNXaObQYvxzhwCiHNeSPwVJOTOesF1NemPe%2B1oZtfDrwlrPiqCxhNLYFPmUPOAhWZiDTpTuR1WT0twyU7PS2r0GTWKk4k3Bdz0SUSzXRIUTQ%2B3kenKzBHC8p1QHqCo9MYC%2B%2BPro0sO85E9T82xslg0BSJqlRboFR6Qik71TlNCDrsgue8R9KQT56sKrlffHHNfno79s14M3tpdvMVt3v19jFWL4zjYAU26AXWU52YcfUlueQ%2BK6hmJnmUeKVUQwlcyzwAY6pgEOuXQtyHyHVxNpmzpTCxqa9XM06X3ZcVJi6%2FFGOhENLgZd0yqQakoFBv4DsyP1pw1uT1oMieIb%2FtB85gkz1wtXdK7IwB1moST7XjkO6TpyfBsmzWZoPC%2FnEbVje%2Fn64Cj15%2BPkHsrmiABolAIAd5LACiJhPywwlItdrWkYBsRLkIO8b7ifyhn5PnmmdpJGxXUXAmmfQi5WT7JzyetFGoKHPDV0p73A&X-Amz-Signature=cda233d1bc8af62dc8545520f237c678079bdf13756324e5f386e7c8a8df8008&X-Amz-SignedHeaders=host&x-id=GetObject)
