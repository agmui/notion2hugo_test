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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAWSJZX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGAjFA3BzN%2BMv%2BFj39tf8PZ7toAvhCJngc%2B1cp1Kd018AiEArNxyHxqso1KXppObDRSnw14BQ2ANhwZ0CxqcnC7zqJEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJZOR6l8k%2BRrF0AcsyrcAyHpATmGipRftWdw0MEs%2FSwDqqZOdEbK7ugTl6GCBsnIayvhRXsZYY6CeIcimBIjt95NzXqxRNtOSdAtYoDHJkI0yXYTsyh%2FUy%2FoEo8zh%2BKAJ2uxIoKtU9djA%2B3zl47Y9yx98f3D9symi6DCQ%2F45H2Wm3s3HStRriHg2fCD7R2w8fHwUebfP0fBRSLaQBOUOW40%2FDjIVyi3A%2FeXJACi%2FEdC9UNLLGfJIGrqk7kRDTJiQbrKgxq0pUnyPorzaBphg0BQ5BPeWFLWi4NwstnRTq5ffzmTNC7dEcqyc0OybRESo%2BIXp6cBdCV7XUFm4SR5v0wFe0ktNd%2FhjuNNgAxoSM%2FOm6NC2eGAREM5Ei%2B%2Fmav%2FbrxOuk%2FBt0ZJ81awc%2BtA%2FFFVtLdU%2FUmSWjZGgmNvJvx3698d2Ku0CQnj9M9X%2BxcWuhTGYjz62a3%2BBuA5cnePHj0Vw4tt5%2BFpNbEUJpCkCrBhRvg2Ai%2FlwjLSK7xHkok3kDvG6NOtRr%2F18yU7m4lcB7JTKC6x27wjJYSbBuFFivlD%2FnHqXJOwXOVmULS4%2B6XZzb2cpEvhOWwbSv3GZK0Sxbnx0iCnYm%2BjESEHeQ3DTxvzntGXMGPUbkBSHI0laoRxlhAmzsk%2FNCp8CoIctMI7BtcIGOqUB0ReMKnXT0Egw0Y6OsjyuP%2B5DRRanMSHXDsNOxDj4aRVeEMjST%2FECXhgeVDnseAUwk7MMM42ElVlIdVxL1vcAsfFlcLsAhYe5yzRp8uZU%2BtwyRlADCem8J%2B5%2B0E5pGpEmRhw8NxP%2BgZwbFKe%2BWT9MUa5vDKSXlBSQ9d9o9LX8js70RmDdkXZxFDaKlsFl%2BIfySEpH79ENzMIMaHNS2PO66n2G%2BOek&X-Amz-Signature=3a0b331434012fdb25656a26657465cfb0f81dc934aaf1acc0a77831b8c6d01f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAWSJZX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGAjFA3BzN%2BMv%2BFj39tf8PZ7toAvhCJngc%2B1cp1Kd018AiEArNxyHxqso1KXppObDRSnw14BQ2ANhwZ0CxqcnC7zqJEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJZOR6l8k%2BRrF0AcsyrcAyHpATmGipRftWdw0MEs%2FSwDqqZOdEbK7ugTl6GCBsnIayvhRXsZYY6CeIcimBIjt95NzXqxRNtOSdAtYoDHJkI0yXYTsyh%2FUy%2FoEo8zh%2BKAJ2uxIoKtU9djA%2B3zl47Y9yx98f3D9symi6DCQ%2F45H2Wm3s3HStRriHg2fCD7R2w8fHwUebfP0fBRSLaQBOUOW40%2FDjIVyi3A%2FeXJACi%2FEdC9UNLLGfJIGrqk7kRDTJiQbrKgxq0pUnyPorzaBphg0BQ5BPeWFLWi4NwstnRTq5ffzmTNC7dEcqyc0OybRESo%2BIXp6cBdCV7XUFm4SR5v0wFe0ktNd%2FhjuNNgAxoSM%2FOm6NC2eGAREM5Ei%2B%2Fmav%2FbrxOuk%2FBt0ZJ81awc%2BtA%2FFFVtLdU%2FUmSWjZGgmNvJvx3698d2Ku0CQnj9M9X%2BxcWuhTGYjz62a3%2BBuA5cnePHj0Vw4tt5%2BFpNbEUJpCkCrBhRvg2Ai%2FlwjLSK7xHkok3kDvG6NOtRr%2F18yU7m4lcB7JTKC6x27wjJYSbBuFFivlD%2FnHqXJOwXOVmULS4%2B6XZzb2cpEvhOWwbSv3GZK0Sxbnx0iCnYm%2BjESEHeQ3DTxvzntGXMGPUbkBSHI0laoRxlhAmzsk%2FNCp8CoIctMI7BtcIGOqUB0ReMKnXT0Egw0Y6OsjyuP%2B5DRRanMSHXDsNOxDj4aRVeEMjST%2FECXhgeVDnseAUwk7MMM42ElVlIdVxL1vcAsfFlcLsAhYe5yzRp8uZU%2BtwyRlADCem8J%2B5%2B0E5pGpEmRhw8NxP%2BgZwbFKe%2BWT9MUa5vDKSXlBSQ9d9o9LX8js70RmDdkXZxFDaKlsFl%2BIfySEpH79ENzMIMaHNS2PO66n2G%2BOek&X-Amz-Signature=1a6c95c45bdfb83412abab0846c50af5b41b2991b732ef6cb71189a6ea8ef346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAWSJZX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGAjFA3BzN%2BMv%2BFj39tf8PZ7toAvhCJngc%2B1cp1Kd018AiEArNxyHxqso1KXppObDRSnw14BQ2ANhwZ0CxqcnC7zqJEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJZOR6l8k%2BRrF0AcsyrcAyHpATmGipRftWdw0MEs%2FSwDqqZOdEbK7ugTl6GCBsnIayvhRXsZYY6CeIcimBIjt95NzXqxRNtOSdAtYoDHJkI0yXYTsyh%2FUy%2FoEo8zh%2BKAJ2uxIoKtU9djA%2B3zl47Y9yx98f3D9symi6DCQ%2F45H2Wm3s3HStRriHg2fCD7R2w8fHwUebfP0fBRSLaQBOUOW40%2FDjIVyi3A%2FeXJACi%2FEdC9UNLLGfJIGrqk7kRDTJiQbrKgxq0pUnyPorzaBphg0BQ5BPeWFLWi4NwstnRTq5ffzmTNC7dEcqyc0OybRESo%2BIXp6cBdCV7XUFm4SR5v0wFe0ktNd%2FhjuNNgAxoSM%2FOm6NC2eGAREM5Ei%2B%2Fmav%2FbrxOuk%2FBt0ZJ81awc%2BtA%2FFFVtLdU%2FUmSWjZGgmNvJvx3698d2Ku0CQnj9M9X%2BxcWuhTGYjz62a3%2BBuA5cnePHj0Vw4tt5%2BFpNbEUJpCkCrBhRvg2Ai%2FlwjLSK7xHkok3kDvG6NOtRr%2F18yU7m4lcB7JTKC6x27wjJYSbBuFFivlD%2FnHqXJOwXOVmULS4%2B6XZzb2cpEvhOWwbSv3GZK0Sxbnx0iCnYm%2BjESEHeQ3DTxvzntGXMGPUbkBSHI0laoRxlhAmzsk%2FNCp8CoIctMI7BtcIGOqUB0ReMKnXT0Egw0Y6OsjyuP%2B5DRRanMSHXDsNOxDj4aRVeEMjST%2FECXhgeVDnseAUwk7MMM42ElVlIdVxL1vcAsfFlcLsAhYe5yzRp8uZU%2BtwyRlADCem8J%2B5%2B0E5pGpEmRhw8NxP%2BgZwbFKe%2BWT9MUa5vDKSXlBSQ9d9o9LX8js70RmDdkXZxFDaKlsFl%2BIfySEpH79ENzMIMaHNS2PO66n2G%2BOek&X-Amz-Signature=d93e68170ada1d2fa331054b562aca97aa4ca0ecfd490994a1028797508f6cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAWSJZX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGAjFA3BzN%2BMv%2BFj39tf8PZ7toAvhCJngc%2B1cp1Kd018AiEArNxyHxqso1KXppObDRSnw14BQ2ANhwZ0CxqcnC7zqJEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJZOR6l8k%2BRrF0AcsyrcAyHpATmGipRftWdw0MEs%2FSwDqqZOdEbK7ugTl6GCBsnIayvhRXsZYY6CeIcimBIjt95NzXqxRNtOSdAtYoDHJkI0yXYTsyh%2FUy%2FoEo8zh%2BKAJ2uxIoKtU9djA%2B3zl47Y9yx98f3D9symi6DCQ%2F45H2Wm3s3HStRriHg2fCD7R2w8fHwUebfP0fBRSLaQBOUOW40%2FDjIVyi3A%2FeXJACi%2FEdC9UNLLGfJIGrqk7kRDTJiQbrKgxq0pUnyPorzaBphg0BQ5BPeWFLWi4NwstnRTq5ffzmTNC7dEcqyc0OybRESo%2BIXp6cBdCV7XUFm4SR5v0wFe0ktNd%2FhjuNNgAxoSM%2FOm6NC2eGAREM5Ei%2B%2Fmav%2FbrxOuk%2FBt0ZJ81awc%2BtA%2FFFVtLdU%2FUmSWjZGgmNvJvx3698d2Ku0CQnj9M9X%2BxcWuhTGYjz62a3%2BBuA5cnePHj0Vw4tt5%2BFpNbEUJpCkCrBhRvg2Ai%2FlwjLSK7xHkok3kDvG6NOtRr%2F18yU7m4lcB7JTKC6x27wjJYSbBuFFivlD%2FnHqXJOwXOVmULS4%2B6XZzb2cpEvhOWwbSv3GZK0Sxbnx0iCnYm%2BjESEHeQ3DTxvzntGXMGPUbkBSHI0laoRxlhAmzsk%2FNCp8CoIctMI7BtcIGOqUB0ReMKnXT0Egw0Y6OsjyuP%2B5DRRanMSHXDsNOxDj4aRVeEMjST%2FECXhgeVDnseAUwk7MMM42ElVlIdVxL1vcAsfFlcLsAhYe5yzRp8uZU%2BtwyRlADCem8J%2B5%2B0E5pGpEmRhw8NxP%2BgZwbFKe%2BWT9MUa5vDKSXlBSQ9d9o9LX8js70RmDdkXZxFDaKlsFl%2BIfySEpH79ENzMIMaHNS2PO66n2G%2BOek&X-Amz-Signature=177002c646c5bb131ee04282649fad752a83e075098756e61005052130a00131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAWSJZX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGAjFA3BzN%2BMv%2BFj39tf8PZ7toAvhCJngc%2B1cp1Kd018AiEArNxyHxqso1KXppObDRSnw14BQ2ANhwZ0CxqcnC7zqJEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJZOR6l8k%2BRrF0AcsyrcAyHpATmGipRftWdw0MEs%2FSwDqqZOdEbK7ugTl6GCBsnIayvhRXsZYY6CeIcimBIjt95NzXqxRNtOSdAtYoDHJkI0yXYTsyh%2FUy%2FoEo8zh%2BKAJ2uxIoKtU9djA%2B3zl47Y9yx98f3D9symi6DCQ%2F45H2Wm3s3HStRriHg2fCD7R2w8fHwUebfP0fBRSLaQBOUOW40%2FDjIVyi3A%2FeXJACi%2FEdC9UNLLGfJIGrqk7kRDTJiQbrKgxq0pUnyPorzaBphg0BQ5BPeWFLWi4NwstnRTq5ffzmTNC7dEcqyc0OybRESo%2BIXp6cBdCV7XUFm4SR5v0wFe0ktNd%2FhjuNNgAxoSM%2FOm6NC2eGAREM5Ei%2B%2Fmav%2FbrxOuk%2FBt0ZJ81awc%2BtA%2FFFVtLdU%2FUmSWjZGgmNvJvx3698d2Ku0CQnj9M9X%2BxcWuhTGYjz62a3%2BBuA5cnePHj0Vw4tt5%2BFpNbEUJpCkCrBhRvg2Ai%2FlwjLSK7xHkok3kDvG6NOtRr%2F18yU7m4lcB7JTKC6x27wjJYSbBuFFivlD%2FnHqXJOwXOVmULS4%2B6XZzb2cpEvhOWwbSv3GZK0Sxbnx0iCnYm%2BjESEHeQ3DTxvzntGXMGPUbkBSHI0laoRxlhAmzsk%2FNCp8CoIctMI7BtcIGOqUB0ReMKnXT0Egw0Y6OsjyuP%2B5DRRanMSHXDsNOxDj4aRVeEMjST%2FECXhgeVDnseAUwk7MMM42ElVlIdVxL1vcAsfFlcLsAhYe5yzRp8uZU%2BtwyRlADCem8J%2B5%2B0E5pGpEmRhw8NxP%2BgZwbFKe%2BWT9MUa5vDKSXlBSQ9d9o9LX8js70RmDdkXZxFDaKlsFl%2BIfySEpH79ENzMIMaHNS2PO66n2G%2BOek&X-Amz-Signature=2bc4609859964dace2798754112fa7d584d20293a3c1ecd86e6d1d83f6ec5603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAWSJZX%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGAjFA3BzN%2BMv%2BFj39tf8PZ7toAvhCJngc%2B1cp1Kd018AiEArNxyHxqso1KXppObDRSnw14BQ2ANhwZ0CxqcnC7zqJEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDJZOR6l8k%2BRrF0AcsyrcAyHpATmGipRftWdw0MEs%2FSwDqqZOdEbK7ugTl6GCBsnIayvhRXsZYY6CeIcimBIjt95NzXqxRNtOSdAtYoDHJkI0yXYTsyh%2FUy%2FoEo8zh%2BKAJ2uxIoKtU9djA%2B3zl47Y9yx98f3D9symi6DCQ%2F45H2Wm3s3HStRriHg2fCD7R2w8fHwUebfP0fBRSLaQBOUOW40%2FDjIVyi3A%2FeXJACi%2FEdC9UNLLGfJIGrqk7kRDTJiQbrKgxq0pUnyPorzaBphg0BQ5BPeWFLWi4NwstnRTq5ffzmTNC7dEcqyc0OybRESo%2BIXp6cBdCV7XUFm4SR5v0wFe0ktNd%2FhjuNNgAxoSM%2FOm6NC2eGAREM5Ei%2B%2Fmav%2FbrxOuk%2FBt0ZJ81awc%2BtA%2FFFVtLdU%2FUmSWjZGgmNvJvx3698d2Ku0CQnj9M9X%2BxcWuhTGYjz62a3%2BBuA5cnePHj0Vw4tt5%2BFpNbEUJpCkCrBhRvg2Ai%2FlwjLSK7xHkok3kDvG6NOtRr%2F18yU7m4lcB7JTKC6x27wjJYSbBuFFivlD%2FnHqXJOwXOVmULS4%2B6XZzb2cpEvhOWwbSv3GZK0Sxbnx0iCnYm%2BjESEHeQ3DTxvzntGXMGPUbkBSHI0laoRxlhAmzsk%2FNCp8CoIctMI7BtcIGOqUB0ReMKnXT0Egw0Y6OsjyuP%2B5DRRanMSHXDsNOxDj4aRVeEMjST%2FECXhgeVDnseAUwk7MMM42ElVlIdVxL1vcAsfFlcLsAhYe5yzRp8uZU%2BtwyRlADCem8J%2B5%2B0E5pGpEmRhw8NxP%2BgZwbFKe%2BWT9MUa5vDKSXlBSQ9d9o9LX8js70RmDdkXZxFDaKlsFl%2BIfySEpH79ENzMIMaHNS2PO66n2G%2BOek&X-Amz-Signature=3add9b8b3ea96c13e535cc012771cc039135ef5fcc1eaff453a13b43ed24b1ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
