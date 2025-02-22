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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOHDXML%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4vwGEeXa8H6LKol%2FbRwHC7NPSElWvjMrRla6mlK90ZQIgdL75XvJ%2BvyE8KnvNICAhuoH9mlMjtT7d7PmiGs5OjL0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQ9rkSekqvYUPQUjSrcA%2B%2FqQoi89zfe4kr0pZjYIRZIM0eR4s7Pp2EB2s1B4GrEzlChbpD%2Fy9u25qwGeK4XExEqtxXoyHDpGP0uiS2HGR%2B0bLHF08fF3xkkdeWsSjgAeiNUYiqRRLCajntERs%2FF4DhR%2FFRw3U2IeJ4VD46coyBwJadnYacEBgVif1arjquWFop0UfRW5rK%2FJBhDofIbrwmlzey2oVoWOy07rqDSyjqbsEu7PQrEhhFUqNg6Ql9quRzdlCnFu13B7mopnWRZYWhvC1Zn9MAYWlfrN1xHPGgKc2mIvkbdi4UdA9nA%2FcgAP0AqdILRz9dVuRuzpl2uzmXu14nuBkGUesws6aq6hhZFz7xjKc8UfktxYa%2F1H%2B8%2BceZxnEV9j9Uvd%2BrLh1gGY8eS3TiM0nuUIgJ6xWrUdlWLAFFwEZTQZtIK0u12l2UJJZbYBrcOL3AFnqhYn7fCh0XGxvKKtOSQkWeDbFb4Ie5ZalDAWyZbWY%2FzMi%2FTiYXOWMTDGx7925I5dF6e1npgRALVHIAMQfcL6%2BWqjKVsLP3yiOLr2VrMMlEKGcJh4GaTZvLt1mGlIsrXQXtm4aqclUxJkKGlQXiUs%2BLHdMov07VRyc%2FeRFgWLBImB%2F%2BLtfviU%2Fk9NBA%2FRN9FibD3MMLk5r0GOqUB%2BLYKQ6N9uRuBCS2F2NTt3nKOnRk4dw5nzJaYJ0pybZuH1P6KpT45gSxd5tS3fj1b42nCor9hEPNLQ%2BG0Yd%2BU1jEweA53q8LgtuHZDgW6cZSVp1jCqE1vxtjqKfjjFYRbtbpsJRWyKF%2FEM%2Bo3sNCRBXda%2BX7W%2FAfbtoAWxgG1PTaXlfeDuYX9Rzjyw1yW6rm6u1vd56iCdkZqaCaFgnEEAGqmD2W%2B&X-Amz-Signature=513a24a812490b856a7df4ef21903f326adadd9165272955c264a9e206c0a1bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOHDXML%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4vwGEeXa8H6LKol%2FbRwHC7NPSElWvjMrRla6mlK90ZQIgdL75XvJ%2BvyE8KnvNICAhuoH9mlMjtT7d7PmiGs5OjL0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQ9rkSekqvYUPQUjSrcA%2B%2FqQoi89zfe4kr0pZjYIRZIM0eR4s7Pp2EB2s1B4GrEzlChbpD%2Fy9u25qwGeK4XExEqtxXoyHDpGP0uiS2HGR%2B0bLHF08fF3xkkdeWsSjgAeiNUYiqRRLCajntERs%2FF4DhR%2FFRw3U2IeJ4VD46coyBwJadnYacEBgVif1arjquWFop0UfRW5rK%2FJBhDofIbrwmlzey2oVoWOy07rqDSyjqbsEu7PQrEhhFUqNg6Ql9quRzdlCnFu13B7mopnWRZYWhvC1Zn9MAYWlfrN1xHPGgKc2mIvkbdi4UdA9nA%2FcgAP0AqdILRz9dVuRuzpl2uzmXu14nuBkGUesws6aq6hhZFz7xjKc8UfktxYa%2F1H%2B8%2BceZxnEV9j9Uvd%2BrLh1gGY8eS3TiM0nuUIgJ6xWrUdlWLAFFwEZTQZtIK0u12l2UJJZbYBrcOL3AFnqhYn7fCh0XGxvKKtOSQkWeDbFb4Ie5ZalDAWyZbWY%2FzMi%2FTiYXOWMTDGx7925I5dF6e1npgRALVHIAMQfcL6%2BWqjKVsLP3yiOLr2VrMMlEKGcJh4GaTZvLt1mGlIsrXQXtm4aqclUxJkKGlQXiUs%2BLHdMov07VRyc%2FeRFgWLBImB%2F%2BLtfviU%2Fk9NBA%2FRN9FibD3MMLk5r0GOqUB%2BLYKQ6N9uRuBCS2F2NTt3nKOnRk4dw5nzJaYJ0pybZuH1P6KpT45gSxd5tS3fj1b42nCor9hEPNLQ%2BG0Yd%2BU1jEweA53q8LgtuHZDgW6cZSVp1jCqE1vxtjqKfjjFYRbtbpsJRWyKF%2FEM%2Bo3sNCRBXda%2BX7W%2FAfbtoAWxgG1PTaXlfeDuYX9Rzjyw1yW6rm6u1vd56iCdkZqaCaFgnEEAGqmD2W%2B&X-Amz-Signature=99627ade08de0d2c3beeef6a5cc7e2ce3eeaf4b78ef9d8f5d383780471c0a609&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOHDXML%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4vwGEeXa8H6LKol%2FbRwHC7NPSElWvjMrRla6mlK90ZQIgdL75XvJ%2BvyE8KnvNICAhuoH9mlMjtT7d7PmiGs5OjL0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQ9rkSekqvYUPQUjSrcA%2B%2FqQoi89zfe4kr0pZjYIRZIM0eR4s7Pp2EB2s1B4GrEzlChbpD%2Fy9u25qwGeK4XExEqtxXoyHDpGP0uiS2HGR%2B0bLHF08fF3xkkdeWsSjgAeiNUYiqRRLCajntERs%2FF4DhR%2FFRw3U2IeJ4VD46coyBwJadnYacEBgVif1arjquWFop0UfRW5rK%2FJBhDofIbrwmlzey2oVoWOy07rqDSyjqbsEu7PQrEhhFUqNg6Ql9quRzdlCnFu13B7mopnWRZYWhvC1Zn9MAYWlfrN1xHPGgKc2mIvkbdi4UdA9nA%2FcgAP0AqdILRz9dVuRuzpl2uzmXu14nuBkGUesws6aq6hhZFz7xjKc8UfktxYa%2F1H%2B8%2BceZxnEV9j9Uvd%2BrLh1gGY8eS3TiM0nuUIgJ6xWrUdlWLAFFwEZTQZtIK0u12l2UJJZbYBrcOL3AFnqhYn7fCh0XGxvKKtOSQkWeDbFb4Ie5ZalDAWyZbWY%2FzMi%2FTiYXOWMTDGx7925I5dF6e1npgRALVHIAMQfcL6%2BWqjKVsLP3yiOLr2VrMMlEKGcJh4GaTZvLt1mGlIsrXQXtm4aqclUxJkKGlQXiUs%2BLHdMov07VRyc%2FeRFgWLBImB%2F%2BLtfviU%2Fk9NBA%2FRN9FibD3MMLk5r0GOqUB%2BLYKQ6N9uRuBCS2F2NTt3nKOnRk4dw5nzJaYJ0pybZuH1P6KpT45gSxd5tS3fj1b42nCor9hEPNLQ%2BG0Yd%2BU1jEweA53q8LgtuHZDgW6cZSVp1jCqE1vxtjqKfjjFYRbtbpsJRWyKF%2FEM%2Bo3sNCRBXda%2BX7W%2FAfbtoAWxgG1PTaXlfeDuYX9Rzjyw1yW6rm6u1vd56iCdkZqaCaFgnEEAGqmD2W%2B&X-Amz-Signature=be62f169b8e7a6d52c77fef7d717be0ee3d347d8575f1c8f284355b308507bc7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOHDXML%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4vwGEeXa8H6LKol%2FbRwHC7NPSElWvjMrRla6mlK90ZQIgdL75XvJ%2BvyE8KnvNICAhuoH9mlMjtT7d7PmiGs5OjL0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQ9rkSekqvYUPQUjSrcA%2B%2FqQoi89zfe4kr0pZjYIRZIM0eR4s7Pp2EB2s1B4GrEzlChbpD%2Fy9u25qwGeK4XExEqtxXoyHDpGP0uiS2HGR%2B0bLHF08fF3xkkdeWsSjgAeiNUYiqRRLCajntERs%2FF4DhR%2FFRw3U2IeJ4VD46coyBwJadnYacEBgVif1arjquWFop0UfRW5rK%2FJBhDofIbrwmlzey2oVoWOy07rqDSyjqbsEu7PQrEhhFUqNg6Ql9quRzdlCnFu13B7mopnWRZYWhvC1Zn9MAYWlfrN1xHPGgKc2mIvkbdi4UdA9nA%2FcgAP0AqdILRz9dVuRuzpl2uzmXu14nuBkGUesws6aq6hhZFz7xjKc8UfktxYa%2F1H%2B8%2BceZxnEV9j9Uvd%2BrLh1gGY8eS3TiM0nuUIgJ6xWrUdlWLAFFwEZTQZtIK0u12l2UJJZbYBrcOL3AFnqhYn7fCh0XGxvKKtOSQkWeDbFb4Ie5ZalDAWyZbWY%2FzMi%2FTiYXOWMTDGx7925I5dF6e1npgRALVHIAMQfcL6%2BWqjKVsLP3yiOLr2VrMMlEKGcJh4GaTZvLt1mGlIsrXQXtm4aqclUxJkKGlQXiUs%2BLHdMov07VRyc%2FeRFgWLBImB%2F%2BLtfviU%2Fk9NBA%2FRN9FibD3MMLk5r0GOqUB%2BLYKQ6N9uRuBCS2F2NTt3nKOnRk4dw5nzJaYJ0pybZuH1P6KpT45gSxd5tS3fj1b42nCor9hEPNLQ%2BG0Yd%2BU1jEweA53q8LgtuHZDgW6cZSVp1jCqE1vxtjqKfjjFYRbtbpsJRWyKF%2FEM%2Bo3sNCRBXda%2BX7W%2FAfbtoAWxgG1PTaXlfeDuYX9Rzjyw1yW6rm6u1vd56iCdkZqaCaFgnEEAGqmD2W%2B&X-Amz-Signature=c80db82b06a20051386b4fbca63296b5460c8e0ea8db4ec06a8a1fafb5dc2f24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOHDXML%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4vwGEeXa8H6LKol%2FbRwHC7NPSElWvjMrRla6mlK90ZQIgdL75XvJ%2BvyE8KnvNICAhuoH9mlMjtT7d7PmiGs5OjL0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQ9rkSekqvYUPQUjSrcA%2B%2FqQoi89zfe4kr0pZjYIRZIM0eR4s7Pp2EB2s1B4GrEzlChbpD%2Fy9u25qwGeK4XExEqtxXoyHDpGP0uiS2HGR%2B0bLHF08fF3xkkdeWsSjgAeiNUYiqRRLCajntERs%2FF4DhR%2FFRw3U2IeJ4VD46coyBwJadnYacEBgVif1arjquWFop0UfRW5rK%2FJBhDofIbrwmlzey2oVoWOy07rqDSyjqbsEu7PQrEhhFUqNg6Ql9quRzdlCnFu13B7mopnWRZYWhvC1Zn9MAYWlfrN1xHPGgKc2mIvkbdi4UdA9nA%2FcgAP0AqdILRz9dVuRuzpl2uzmXu14nuBkGUesws6aq6hhZFz7xjKc8UfktxYa%2F1H%2B8%2BceZxnEV9j9Uvd%2BrLh1gGY8eS3TiM0nuUIgJ6xWrUdlWLAFFwEZTQZtIK0u12l2UJJZbYBrcOL3AFnqhYn7fCh0XGxvKKtOSQkWeDbFb4Ie5ZalDAWyZbWY%2FzMi%2FTiYXOWMTDGx7925I5dF6e1npgRALVHIAMQfcL6%2BWqjKVsLP3yiOLr2VrMMlEKGcJh4GaTZvLt1mGlIsrXQXtm4aqclUxJkKGlQXiUs%2BLHdMov07VRyc%2FeRFgWLBImB%2F%2BLtfviU%2Fk9NBA%2FRN9FibD3MMLk5r0GOqUB%2BLYKQ6N9uRuBCS2F2NTt3nKOnRk4dw5nzJaYJ0pybZuH1P6KpT45gSxd5tS3fj1b42nCor9hEPNLQ%2BG0Yd%2BU1jEweA53q8LgtuHZDgW6cZSVp1jCqE1vxtjqKfjjFYRbtbpsJRWyKF%2FEM%2Bo3sNCRBXda%2BX7W%2FAfbtoAWxgG1PTaXlfeDuYX9Rzjyw1yW6rm6u1vd56iCdkZqaCaFgnEEAGqmD2W%2B&X-Amz-Signature=5c3bebe4bd30860cd1a93a0e21e943e0451281aae3183089ff95041f45b05f05&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCOHDXML%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T170138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4vwGEeXa8H6LKol%2FbRwHC7NPSElWvjMrRla6mlK90ZQIgdL75XvJ%2BvyE8KnvNICAhuoH9mlMjtT7d7PmiGs5OjL0qiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQ9rkSekqvYUPQUjSrcA%2B%2FqQoi89zfe4kr0pZjYIRZIM0eR4s7Pp2EB2s1B4GrEzlChbpD%2Fy9u25qwGeK4XExEqtxXoyHDpGP0uiS2HGR%2B0bLHF08fF3xkkdeWsSjgAeiNUYiqRRLCajntERs%2FF4DhR%2FFRw3U2IeJ4VD46coyBwJadnYacEBgVif1arjquWFop0UfRW5rK%2FJBhDofIbrwmlzey2oVoWOy07rqDSyjqbsEu7PQrEhhFUqNg6Ql9quRzdlCnFu13B7mopnWRZYWhvC1Zn9MAYWlfrN1xHPGgKc2mIvkbdi4UdA9nA%2FcgAP0AqdILRz9dVuRuzpl2uzmXu14nuBkGUesws6aq6hhZFz7xjKc8UfktxYa%2F1H%2B8%2BceZxnEV9j9Uvd%2BrLh1gGY8eS3TiM0nuUIgJ6xWrUdlWLAFFwEZTQZtIK0u12l2UJJZbYBrcOL3AFnqhYn7fCh0XGxvKKtOSQkWeDbFb4Ie5ZalDAWyZbWY%2FzMi%2FTiYXOWMTDGx7925I5dF6e1npgRALVHIAMQfcL6%2BWqjKVsLP3yiOLr2VrMMlEKGcJh4GaTZvLt1mGlIsrXQXtm4aqclUxJkKGlQXiUs%2BLHdMov07VRyc%2FeRFgWLBImB%2F%2BLtfviU%2Fk9NBA%2FRN9FibD3MMLk5r0GOqUB%2BLYKQ6N9uRuBCS2F2NTt3nKOnRk4dw5nzJaYJ0pybZuH1P6KpT45gSxd5tS3fj1b42nCor9hEPNLQ%2BG0Yd%2BU1jEweA53q8LgtuHZDgW6cZSVp1jCqE1vxtjqKfjjFYRbtbpsJRWyKF%2FEM%2Bo3sNCRBXda%2BX7W%2FAfbtoAWxgG1PTaXlfeDuYX9Rzjyw1yW6rm6u1vd56iCdkZqaCaFgnEEAGqmD2W%2B&X-Amz-Signature=5fbdc5eeca3a4a1984581b441fef3a8adde4eadc0bc5eac578fcf7389899c4cc&X-Amz-SignedHeaders=host&x-id=GetObject)
