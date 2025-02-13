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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCDSB5N%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9e7OLnbg6Ls4LjsRZxj5%2FCUj8S43dxeSP8GxNDU58IAiBZFfd4%2Fry8Y6gHevAaCgt0sViVLgD1yLfz8HDaa3vGciqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVZlnKYtuRURlZYjLKtwDeTAy0s76ARVVcPQgQscmVCEgza0SHZI2gJ0vQ1Cmanlqz3Yq9qYv1UGo%2B07Ci%2Fvbo2j68AjZNAjjUhPfgNRczo2ox2hbjBNvNOUIzOtpXC0bWTDvrQc4UI4B7OC1tGpwEPeY8FCAw%2B%2FEp5pgQwvHkkh2OT6aLchEGdBoEoVlHis4INZFlV%2BkefqLfKd8TenaxHtWP6YkmbGQs3OC3TX%2BRaO9T3Xy2Ho4%2F%2FJ%2F1pV7bRx%2FpL%2Fg%2F9CyqCm7nTvxB9GmNDaUsfniGzPyVedytN3Mt2o%2Bmloa1w5ajf9%2BtSRB11SMss0aqmd%2BGfnn64rnlGcIJMS6yAYf9%2BbeEK5REvPmxj10PFASjpCCF8yV1X37ltx7rbs0Z6C%2F2Z3qtqx2nHpttWuvmnmOGym3V1tImYpTGWZ%2B3M5glqfzFsX2fHAn%2FWK3Si%2F6wYMLzYm3WHrddXM9HRoeDAFbDKIBpDZhmICljjS5ZteCEdcD4NxLTgUPe3WMfkNSm4POzel6HA%2FshvEAUavkeX%2FARlSnunB9dxnrOWNeWpgNe5%2FcLpREcji%2B5F2LPjg5iyKwRqBZdtL1llmJ16AiKis0At1aBfikfvTKKWrBtdkTiITjaNDra78H3SCAMzqT7ljRfazmDtAwtOG0vQY6pgHAprAjk4ZihWB2nG4zwrNLNZ3wO80KI7c78DTfrIU9dnRIZwSFRgUfVvwbITwX%2Fr1hbShsroBIP94A21zu2YfKliGpVvdtoXlFQm3QEagslQrvj6ZQANMuDxqtKM0ve%2FuKRpRo8mSQ67iXtY8DTTX8ohJ6jBEmyRxbvGo09DRhMf9yLhbkbiqHy5c66LdBMKiVdjvUqKLZOv%2BSgcAG19RzLbSGxMl9&X-Amz-Signature=e81c983007401a8fad6d5ad12eaba3d7cde7979aaa262d53dc33e73cbe772f77&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCDSB5N%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9e7OLnbg6Ls4LjsRZxj5%2FCUj8S43dxeSP8GxNDU58IAiBZFfd4%2Fry8Y6gHevAaCgt0sViVLgD1yLfz8HDaa3vGciqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVZlnKYtuRURlZYjLKtwDeTAy0s76ARVVcPQgQscmVCEgza0SHZI2gJ0vQ1Cmanlqz3Yq9qYv1UGo%2B07Ci%2Fvbo2j68AjZNAjjUhPfgNRczo2ox2hbjBNvNOUIzOtpXC0bWTDvrQc4UI4B7OC1tGpwEPeY8FCAw%2B%2FEp5pgQwvHkkh2OT6aLchEGdBoEoVlHis4INZFlV%2BkefqLfKd8TenaxHtWP6YkmbGQs3OC3TX%2BRaO9T3Xy2Ho4%2F%2FJ%2F1pV7bRx%2FpL%2Fg%2F9CyqCm7nTvxB9GmNDaUsfniGzPyVedytN3Mt2o%2Bmloa1w5ajf9%2BtSRB11SMss0aqmd%2BGfnn64rnlGcIJMS6yAYf9%2BbeEK5REvPmxj10PFASjpCCF8yV1X37ltx7rbs0Z6C%2F2Z3qtqx2nHpttWuvmnmOGym3V1tImYpTGWZ%2B3M5glqfzFsX2fHAn%2FWK3Si%2F6wYMLzYm3WHrddXM9HRoeDAFbDKIBpDZhmICljjS5ZteCEdcD4NxLTgUPe3WMfkNSm4POzel6HA%2FshvEAUavkeX%2FARlSnunB9dxnrOWNeWpgNe5%2FcLpREcji%2B5F2LPjg5iyKwRqBZdtL1llmJ16AiKis0At1aBfikfvTKKWrBtdkTiITjaNDra78H3SCAMzqT7ljRfazmDtAwtOG0vQY6pgHAprAjk4ZihWB2nG4zwrNLNZ3wO80KI7c78DTfrIU9dnRIZwSFRgUfVvwbITwX%2Fr1hbShsroBIP94A21zu2YfKliGpVvdtoXlFQm3QEagslQrvj6ZQANMuDxqtKM0ve%2FuKRpRo8mSQ67iXtY8DTTX8ohJ6jBEmyRxbvGo09DRhMf9yLhbkbiqHy5c66LdBMKiVdjvUqKLZOv%2BSgcAG19RzLbSGxMl9&X-Amz-Signature=cc22f3152459587e03fae01ca9d5a1c1e534acd976b2f6a2a7df262ae34f7f0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCDSB5N%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9e7OLnbg6Ls4LjsRZxj5%2FCUj8S43dxeSP8GxNDU58IAiBZFfd4%2Fry8Y6gHevAaCgt0sViVLgD1yLfz8HDaa3vGciqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVZlnKYtuRURlZYjLKtwDeTAy0s76ARVVcPQgQscmVCEgza0SHZI2gJ0vQ1Cmanlqz3Yq9qYv1UGo%2B07Ci%2Fvbo2j68AjZNAjjUhPfgNRczo2ox2hbjBNvNOUIzOtpXC0bWTDvrQc4UI4B7OC1tGpwEPeY8FCAw%2B%2FEp5pgQwvHkkh2OT6aLchEGdBoEoVlHis4INZFlV%2BkefqLfKd8TenaxHtWP6YkmbGQs3OC3TX%2BRaO9T3Xy2Ho4%2F%2FJ%2F1pV7bRx%2FpL%2Fg%2F9CyqCm7nTvxB9GmNDaUsfniGzPyVedytN3Mt2o%2Bmloa1w5ajf9%2BtSRB11SMss0aqmd%2BGfnn64rnlGcIJMS6yAYf9%2BbeEK5REvPmxj10PFASjpCCF8yV1X37ltx7rbs0Z6C%2F2Z3qtqx2nHpttWuvmnmOGym3V1tImYpTGWZ%2B3M5glqfzFsX2fHAn%2FWK3Si%2F6wYMLzYm3WHrddXM9HRoeDAFbDKIBpDZhmICljjS5ZteCEdcD4NxLTgUPe3WMfkNSm4POzel6HA%2FshvEAUavkeX%2FARlSnunB9dxnrOWNeWpgNe5%2FcLpREcji%2B5F2LPjg5iyKwRqBZdtL1llmJ16AiKis0At1aBfikfvTKKWrBtdkTiITjaNDra78H3SCAMzqT7ljRfazmDtAwtOG0vQY6pgHAprAjk4ZihWB2nG4zwrNLNZ3wO80KI7c78DTfrIU9dnRIZwSFRgUfVvwbITwX%2Fr1hbShsroBIP94A21zu2YfKliGpVvdtoXlFQm3QEagslQrvj6ZQANMuDxqtKM0ve%2FuKRpRo8mSQ67iXtY8DTTX8ohJ6jBEmyRxbvGo09DRhMf9yLhbkbiqHy5c66LdBMKiVdjvUqKLZOv%2BSgcAG19RzLbSGxMl9&X-Amz-Signature=bb752b32f021230af9034288d6bf434f4dc6b8ec0ee91b62863a646c4d490e69&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCDSB5N%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9e7OLnbg6Ls4LjsRZxj5%2FCUj8S43dxeSP8GxNDU58IAiBZFfd4%2Fry8Y6gHevAaCgt0sViVLgD1yLfz8HDaa3vGciqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVZlnKYtuRURlZYjLKtwDeTAy0s76ARVVcPQgQscmVCEgza0SHZI2gJ0vQ1Cmanlqz3Yq9qYv1UGo%2B07Ci%2Fvbo2j68AjZNAjjUhPfgNRczo2ox2hbjBNvNOUIzOtpXC0bWTDvrQc4UI4B7OC1tGpwEPeY8FCAw%2B%2FEp5pgQwvHkkh2OT6aLchEGdBoEoVlHis4INZFlV%2BkefqLfKd8TenaxHtWP6YkmbGQs3OC3TX%2BRaO9T3Xy2Ho4%2F%2FJ%2F1pV7bRx%2FpL%2Fg%2F9CyqCm7nTvxB9GmNDaUsfniGzPyVedytN3Mt2o%2Bmloa1w5ajf9%2BtSRB11SMss0aqmd%2BGfnn64rnlGcIJMS6yAYf9%2BbeEK5REvPmxj10PFASjpCCF8yV1X37ltx7rbs0Z6C%2F2Z3qtqx2nHpttWuvmnmOGym3V1tImYpTGWZ%2B3M5glqfzFsX2fHAn%2FWK3Si%2F6wYMLzYm3WHrddXM9HRoeDAFbDKIBpDZhmICljjS5ZteCEdcD4NxLTgUPe3WMfkNSm4POzel6HA%2FshvEAUavkeX%2FARlSnunB9dxnrOWNeWpgNe5%2FcLpREcji%2B5F2LPjg5iyKwRqBZdtL1llmJ16AiKis0At1aBfikfvTKKWrBtdkTiITjaNDra78H3SCAMzqT7ljRfazmDtAwtOG0vQY6pgHAprAjk4ZihWB2nG4zwrNLNZ3wO80KI7c78DTfrIU9dnRIZwSFRgUfVvwbITwX%2Fr1hbShsroBIP94A21zu2YfKliGpVvdtoXlFQm3QEagslQrvj6ZQANMuDxqtKM0ve%2FuKRpRo8mSQ67iXtY8DTTX8ohJ6jBEmyRxbvGo09DRhMf9yLhbkbiqHy5c66LdBMKiVdjvUqKLZOv%2BSgcAG19RzLbSGxMl9&X-Amz-Signature=fee2a429458ad91a2fdf5240a1f27db16747938e4969cd59178b7f7451b44759&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCDSB5N%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9e7OLnbg6Ls4LjsRZxj5%2FCUj8S43dxeSP8GxNDU58IAiBZFfd4%2Fry8Y6gHevAaCgt0sViVLgD1yLfz8HDaa3vGciqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVZlnKYtuRURlZYjLKtwDeTAy0s76ARVVcPQgQscmVCEgza0SHZI2gJ0vQ1Cmanlqz3Yq9qYv1UGo%2B07Ci%2Fvbo2j68AjZNAjjUhPfgNRczo2ox2hbjBNvNOUIzOtpXC0bWTDvrQc4UI4B7OC1tGpwEPeY8FCAw%2B%2FEp5pgQwvHkkh2OT6aLchEGdBoEoVlHis4INZFlV%2BkefqLfKd8TenaxHtWP6YkmbGQs3OC3TX%2BRaO9T3Xy2Ho4%2F%2FJ%2F1pV7bRx%2FpL%2Fg%2F9CyqCm7nTvxB9GmNDaUsfniGzPyVedytN3Mt2o%2Bmloa1w5ajf9%2BtSRB11SMss0aqmd%2BGfnn64rnlGcIJMS6yAYf9%2BbeEK5REvPmxj10PFASjpCCF8yV1X37ltx7rbs0Z6C%2F2Z3qtqx2nHpttWuvmnmOGym3V1tImYpTGWZ%2B3M5glqfzFsX2fHAn%2FWK3Si%2F6wYMLzYm3WHrddXM9HRoeDAFbDKIBpDZhmICljjS5ZteCEdcD4NxLTgUPe3WMfkNSm4POzel6HA%2FshvEAUavkeX%2FARlSnunB9dxnrOWNeWpgNe5%2FcLpREcji%2B5F2LPjg5iyKwRqBZdtL1llmJ16AiKis0At1aBfikfvTKKWrBtdkTiITjaNDra78H3SCAMzqT7ljRfazmDtAwtOG0vQY6pgHAprAjk4ZihWB2nG4zwrNLNZ3wO80KI7c78DTfrIU9dnRIZwSFRgUfVvwbITwX%2Fr1hbShsroBIP94A21zu2YfKliGpVvdtoXlFQm3QEagslQrvj6ZQANMuDxqtKM0ve%2FuKRpRo8mSQ67iXtY8DTTX8ohJ6jBEmyRxbvGo09DRhMf9yLhbkbiqHy5c66LdBMKiVdjvUqKLZOv%2BSgcAG19RzLbSGxMl9&X-Amz-Signature=664a81d201b56e04ef1f152ac183d48babd3067d4d1876c75bb58e177b942b0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZCDSB5N%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T003621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH9e7OLnbg6Ls4LjsRZxj5%2FCUj8S43dxeSP8GxNDU58IAiBZFfd4%2Fry8Y6gHevAaCgt0sViVLgD1yLfz8HDaa3vGciqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVZlnKYtuRURlZYjLKtwDeTAy0s76ARVVcPQgQscmVCEgza0SHZI2gJ0vQ1Cmanlqz3Yq9qYv1UGo%2B07Ci%2Fvbo2j68AjZNAjjUhPfgNRczo2ox2hbjBNvNOUIzOtpXC0bWTDvrQc4UI4B7OC1tGpwEPeY8FCAw%2B%2FEp5pgQwvHkkh2OT6aLchEGdBoEoVlHis4INZFlV%2BkefqLfKd8TenaxHtWP6YkmbGQs3OC3TX%2BRaO9T3Xy2Ho4%2F%2FJ%2F1pV7bRx%2FpL%2Fg%2F9CyqCm7nTvxB9GmNDaUsfniGzPyVedytN3Mt2o%2Bmloa1w5ajf9%2BtSRB11SMss0aqmd%2BGfnn64rnlGcIJMS6yAYf9%2BbeEK5REvPmxj10PFASjpCCF8yV1X37ltx7rbs0Z6C%2F2Z3qtqx2nHpttWuvmnmOGym3V1tImYpTGWZ%2B3M5glqfzFsX2fHAn%2FWK3Si%2F6wYMLzYm3WHrddXM9HRoeDAFbDKIBpDZhmICljjS5ZteCEdcD4NxLTgUPe3WMfkNSm4POzel6HA%2FshvEAUavkeX%2FARlSnunB9dxnrOWNeWpgNe5%2FcLpREcji%2B5F2LPjg5iyKwRqBZdtL1llmJ16AiKis0At1aBfikfvTKKWrBtdkTiITjaNDra78H3SCAMzqT7ljRfazmDtAwtOG0vQY6pgHAprAjk4ZihWB2nG4zwrNLNZ3wO80KI7c78DTfrIU9dnRIZwSFRgUfVvwbITwX%2Fr1hbShsroBIP94A21zu2YfKliGpVvdtoXlFQm3QEagslQrvj6ZQANMuDxqtKM0ve%2FuKRpRo8mSQ67iXtY8DTTX8ohJ6jBEmyRxbvGo09DRhMf9yLhbkbiqHy5c66LdBMKiVdjvUqKLZOv%2BSgcAG19RzLbSGxMl9&X-Amz-Signature=28b6e8fdc1cea9db7c564124598f49d2a9787880125e101d2e52add031f1e546&X-Amz-SignedHeaders=host&x-id=GetObject)
