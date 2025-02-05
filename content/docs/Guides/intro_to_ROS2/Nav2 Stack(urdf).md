---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEG5VFTZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDNFVPZuAUSVcKB89ghBEBrVYlVjXtNoy%2Fs5z9Ng%2B6rtgIhALETLlsL%2FEQhJH6MBpSxIBhPsZ1jQmh%2BnyMvOB2tmUMbKv8DCEQQABoMNjM3NDIzMTgzODA1IgxT1lsGcxxxhoTGwEYq3AONphsE%2Bj30tUzEOH5Q76%2FCNn0YX71gP5azZgDC0zqa2BZFHBKMV8gdSZRglSm1VGv2%2BabP6lg7Ec7zEnvxu%2Bnq1LmxsP4M0TpAx21swFLa13R5pob10CjWgBSXcGIIgV1IIYSZ20lwoBCq2icGGXeUFn%2F2ieR32A0KXTKbyugNNaxssxcRm6NUGsQJXNlzSPl5uDxiW9RWjOfy5rcldkKSRbBSmq3NvMmrc5bmET0TewuXXDTD%2BQgFTmbXHYPXdbJM%2F%2Fi2qFtPdFlVzk%2BlVLPws03Mfw9Z%2FrBqmUFfDi4CoMWShZN%2F2SpgvWkHKFcmoFEGBV8X7OzsGKTxX10N4ornW%2F%2FxEQF%2FaS5xBl1X2MfWsGjU2LbjZxbjz91gWkbTzNjL2%2Bi%2FNser81yi9HxF7sY%2Bd251A6JILneihcPcyZEyqKkeejgHTOr4gtu3k7KDfvIgU1PQ%2Fm%2FKbfZIs3z1q0HjrbhnQonaQmEQz6WCndUGbTx6jF%2FSn4h60LlCQCydmoXD%2BTppQRqWEFPfA2utdz2FLo712VTnDXwB%2BZ9c09RDLkz43KMXT6FY8RkHSO0nnrCVN%2FZ%2BiTBnIHj26jr8sN7Nn2ahqHUDS6eyUbxGHDHPF3Swu2BswTV%2BhSonCzDkjI29BjqkATUYnDL1qOxSMJzTD%2FZo21sZlhjaV33y5Ab8tsprDeXKp97RnQWSODiEgo1JV%2Bi%2BnPWlDQs1nwDrKNwCRfZ%2FQYIRt68XYE5vLPc9mkwBJPnX8234NZI3H6wZuBtkyu%2BdrOIzJt3yiCekDHdTh7ejRrM%2BnwDBd2JLqegGbYZYa44Uj20vaoyy7EzhG3g0tESgIyzgzs1qyzR9zqRMDSY69SAtzGdv&X-Amz-Signature=7af955eaf413f34a264f51ca76f566f81206c1f25910161c55abd77a89a84efb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEG5VFTZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDNFVPZuAUSVcKB89ghBEBrVYlVjXtNoy%2Fs5z9Ng%2B6rtgIhALETLlsL%2FEQhJH6MBpSxIBhPsZ1jQmh%2BnyMvOB2tmUMbKv8DCEQQABoMNjM3NDIzMTgzODA1IgxT1lsGcxxxhoTGwEYq3AONphsE%2Bj30tUzEOH5Q76%2FCNn0YX71gP5azZgDC0zqa2BZFHBKMV8gdSZRglSm1VGv2%2BabP6lg7Ec7zEnvxu%2Bnq1LmxsP4M0TpAx21swFLa13R5pob10CjWgBSXcGIIgV1IIYSZ20lwoBCq2icGGXeUFn%2F2ieR32A0KXTKbyugNNaxssxcRm6NUGsQJXNlzSPl5uDxiW9RWjOfy5rcldkKSRbBSmq3NvMmrc5bmET0TewuXXDTD%2BQgFTmbXHYPXdbJM%2F%2Fi2qFtPdFlVzk%2BlVLPws03Mfw9Z%2FrBqmUFfDi4CoMWShZN%2F2SpgvWkHKFcmoFEGBV8X7OzsGKTxX10N4ornW%2F%2FxEQF%2FaS5xBl1X2MfWsGjU2LbjZxbjz91gWkbTzNjL2%2Bi%2FNser81yi9HxF7sY%2Bd251A6JILneihcPcyZEyqKkeejgHTOr4gtu3k7KDfvIgU1PQ%2Fm%2FKbfZIs3z1q0HjrbhnQonaQmEQz6WCndUGbTx6jF%2FSn4h60LlCQCydmoXD%2BTppQRqWEFPfA2utdz2FLo712VTnDXwB%2BZ9c09RDLkz43KMXT6FY8RkHSO0nnrCVN%2FZ%2BiTBnIHj26jr8sN7Nn2ahqHUDS6eyUbxGHDHPF3Swu2BswTV%2BhSonCzDkjI29BjqkATUYnDL1qOxSMJzTD%2FZo21sZlhjaV33y5Ab8tsprDeXKp97RnQWSODiEgo1JV%2Bi%2BnPWlDQs1nwDrKNwCRfZ%2FQYIRt68XYE5vLPc9mkwBJPnX8234NZI3H6wZuBtkyu%2BdrOIzJt3yiCekDHdTh7ejRrM%2BnwDBd2JLqegGbYZYa44Uj20vaoyy7EzhG3g0tESgIyzgzs1qyzR9zqRMDSY69SAtzGdv&X-Amz-Signature=2c406a64ef4bf03cdffbfd401cbeb444142b1777b4ce287a5e24a41e5d463153&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEG5VFTZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDNFVPZuAUSVcKB89ghBEBrVYlVjXtNoy%2Fs5z9Ng%2B6rtgIhALETLlsL%2FEQhJH6MBpSxIBhPsZ1jQmh%2BnyMvOB2tmUMbKv8DCEQQABoMNjM3NDIzMTgzODA1IgxT1lsGcxxxhoTGwEYq3AONphsE%2Bj30tUzEOH5Q76%2FCNn0YX71gP5azZgDC0zqa2BZFHBKMV8gdSZRglSm1VGv2%2BabP6lg7Ec7zEnvxu%2Bnq1LmxsP4M0TpAx21swFLa13R5pob10CjWgBSXcGIIgV1IIYSZ20lwoBCq2icGGXeUFn%2F2ieR32A0KXTKbyugNNaxssxcRm6NUGsQJXNlzSPl5uDxiW9RWjOfy5rcldkKSRbBSmq3NvMmrc5bmET0TewuXXDTD%2BQgFTmbXHYPXdbJM%2F%2Fi2qFtPdFlVzk%2BlVLPws03Mfw9Z%2FrBqmUFfDi4CoMWShZN%2F2SpgvWkHKFcmoFEGBV8X7OzsGKTxX10N4ornW%2F%2FxEQF%2FaS5xBl1X2MfWsGjU2LbjZxbjz91gWkbTzNjL2%2Bi%2FNser81yi9HxF7sY%2Bd251A6JILneihcPcyZEyqKkeejgHTOr4gtu3k7KDfvIgU1PQ%2Fm%2FKbfZIs3z1q0HjrbhnQonaQmEQz6WCndUGbTx6jF%2FSn4h60LlCQCydmoXD%2BTppQRqWEFPfA2utdz2FLo712VTnDXwB%2BZ9c09RDLkz43KMXT6FY8RkHSO0nnrCVN%2FZ%2BiTBnIHj26jr8sN7Nn2ahqHUDS6eyUbxGHDHPF3Swu2BswTV%2BhSonCzDkjI29BjqkATUYnDL1qOxSMJzTD%2FZo21sZlhjaV33y5Ab8tsprDeXKp97RnQWSODiEgo1JV%2Bi%2BnPWlDQs1nwDrKNwCRfZ%2FQYIRt68XYE5vLPc9mkwBJPnX8234NZI3H6wZuBtkyu%2BdrOIzJt3yiCekDHdTh7ejRrM%2BnwDBd2JLqegGbYZYa44Uj20vaoyy7EzhG3g0tESgIyzgzs1qyzR9zqRMDSY69SAtzGdv&X-Amz-Signature=1243d1212cab79c9533dc573cbe2b3e291f6fa2c1786fe355362d6b243b99b9f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEG5VFTZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDNFVPZuAUSVcKB89ghBEBrVYlVjXtNoy%2Fs5z9Ng%2B6rtgIhALETLlsL%2FEQhJH6MBpSxIBhPsZ1jQmh%2BnyMvOB2tmUMbKv8DCEQQABoMNjM3NDIzMTgzODA1IgxT1lsGcxxxhoTGwEYq3AONphsE%2Bj30tUzEOH5Q76%2FCNn0YX71gP5azZgDC0zqa2BZFHBKMV8gdSZRglSm1VGv2%2BabP6lg7Ec7zEnvxu%2Bnq1LmxsP4M0TpAx21swFLa13R5pob10CjWgBSXcGIIgV1IIYSZ20lwoBCq2icGGXeUFn%2F2ieR32A0KXTKbyugNNaxssxcRm6NUGsQJXNlzSPl5uDxiW9RWjOfy5rcldkKSRbBSmq3NvMmrc5bmET0TewuXXDTD%2BQgFTmbXHYPXdbJM%2F%2Fi2qFtPdFlVzk%2BlVLPws03Mfw9Z%2FrBqmUFfDi4CoMWShZN%2F2SpgvWkHKFcmoFEGBV8X7OzsGKTxX10N4ornW%2F%2FxEQF%2FaS5xBl1X2MfWsGjU2LbjZxbjz91gWkbTzNjL2%2Bi%2FNser81yi9HxF7sY%2Bd251A6JILneihcPcyZEyqKkeejgHTOr4gtu3k7KDfvIgU1PQ%2Fm%2FKbfZIs3z1q0HjrbhnQonaQmEQz6WCndUGbTx6jF%2FSn4h60LlCQCydmoXD%2BTppQRqWEFPfA2utdz2FLo712VTnDXwB%2BZ9c09RDLkz43KMXT6FY8RkHSO0nnrCVN%2FZ%2BiTBnIHj26jr8sN7Nn2ahqHUDS6eyUbxGHDHPF3Swu2BswTV%2BhSonCzDkjI29BjqkATUYnDL1qOxSMJzTD%2FZo21sZlhjaV33y5Ab8tsprDeXKp97RnQWSODiEgo1JV%2Bi%2BnPWlDQs1nwDrKNwCRfZ%2FQYIRt68XYE5vLPc9mkwBJPnX8234NZI3H6wZuBtkyu%2BdrOIzJt3yiCekDHdTh7ejRrM%2BnwDBd2JLqegGbYZYa44Uj20vaoyy7EzhG3g0tESgIyzgzs1qyzR9zqRMDSY69SAtzGdv&X-Amz-Signature=5f1154a311c1c1c7766219b055ce7bcb46b5ff35c2c01bb32977d6f323764e18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEG5VFTZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDNFVPZuAUSVcKB89ghBEBrVYlVjXtNoy%2Fs5z9Ng%2B6rtgIhALETLlsL%2FEQhJH6MBpSxIBhPsZ1jQmh%2BnyMvOB2tmUMbKv8DCEQQABoMNjM3NDIzMTgzODA1IgxT1lsGcxxxhoTGwEYq3AONphsE%2Bj30tUzEOH5Q76%2FCNn0YX71gP5azZgDC0zqa2BZFHBKMV8gdSZRglSm1VGv2%2BabP6lg7Ec7zEnvxu%2Bnq1LmxsP4M0TpAx21swFLa13R5pob10CjWgBSXcGIIgV1IIYSZ20lwoBCq2icGGXeUFn%2F2ieR32A0KXTKbyugNNaxssxcRm6NUGsQJXNlzSPl5uDxiW9RWjOfy5rcldkKSRbBSmq3NvMmrc5bmET0TewuXXDTD%2BQgFTmbXHYPXdbJM%2F%2Fi2qFtPdFlVzk%2BlVLPws03Mfw9Z%2FrBqmUFfDi4CoMWShZN%2F2SpgvWkHKFcmoFEGBV8X7OzsGKTxX10N4ornW%2F%2FxEQF%2FaS5xBl1X2MfWsGjU2LbjZxbjz91gWkbTzNjL2%2Bi%2FNser81yi9HxF7sY%2Bd251A6JILneihcPcyZEyqKkeejgHTOr4gtu3k7KDfvIgU1PQ%2Fm%2FKbfZIs3z1q0HjrbhnQonaQmEQz6WCndUGbTx6jF%2FSn4h60LlCQCydmoXD%2BTppQRqWEFPfA2utdz2FLo712VTnDXwB%2BZ9c09RDLkz43KMXT6FY8RkHSO0nnrCVN%2FZ%2BiTBnIHj26jr8sN7Nn2ahqHUDS6eyUbxGHDHPF3Swu2BswTV%2BhSonCzDkjI29BjqkATUYnDL1qOxSMJzTD%2FZo21sZlhjaV33y5Ab8tsprDeXKp97RnQWSODiEgo1JV%2Bi%2BnPWlDQs1nwDrKNwCRfZ%2FQYIRt68XYE5vLPc9mkwBJPnX8234NZI3H6wZuBtkyu%2BdrOIzJt3yiCekDHdTh7ejRrM%2BnwDBd2JLqegGbYZYa44Uj20vaoyy7EzhG3g0tESgIyzgzs1qyzR9zqRMDSY69SAtzGdv&X-Amz-Signature=74fe7f71fe67db338cf62f0037b6932261bf3d0d7b693f83eaa3094e2eebc657&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEG5VFTZ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDNFVPZuAUSVcKB89ghBEBrVYlVjXtNoy%2Fs5z9Ng%2B6rtgIhALETLlsL%2FEQhJH6MBpSxIBhPsZ1jQmh%2BnyMvOB2tmUMbKv8DCEQQABoMNjM3NDIzMTgzODA1IgxT1lsGcxxxhoTGwEYq3AONphsE%2Bj30tUzEOH5Q76%2FCNn0YX71gP5azZgDC0zqa2BZFHBKMV8gdSZRglSm1VGv2%2BabP6lg7Ec7zEnvxu%2Bnq1LmxsP4M0TpAx21swFLa13R5pob10CjWgBSXcGIIgV1IIYSZ20lwoBCq2icGGXeUFn%2F2ieR32A0KXTKbyugNNaxssxcRm6NUGsQJXNlzSPl5uDxiW9RWjOfy5rcldkKSRbBSmq3NvMmrc5bmET0TewuXXDTD%2BQgFTmbXHYPXdbJM%2F%2Fi2qFtPdFlVzk%2BlVLPws03Mfw9Z%2FrBqmUFfDi4CoMWShZN%2F2SpgvWkHKFcmoFEGBV8X7OzsGKTxX10N4ornW%2F%2FxEQF%2FaS5xBl1X2MfWsGjU2LbjZxbjz91gWkbTzNjL2%2Bi%2FNser81yi9HxF7sY%2Bd251A6JILneihcPcyZEyqKkeejgHTOr4gtu3k7KDfvIgU1PQ%2Fm%2FKbfZIs3z1q0HjrbhnQonaQmEQz6WCndUGbTx6jF%2FSn4h60LlCQCydmoXD%2BTppQRqWEFPfA2utdz2FLo712VTnDXwB%2BZ9c09RDLkz43KMXT6FY8RkHSO0nnrCVN%2FZ%2BiTBnIHj26jr8sN7Nn2ahqHUDS6eyUbxGHDHPF3Swu2BswTV%2BhSonCzDkjI29BjqkATUYnDL1qOxSMJzTD%2FZo21sZlhjaV33y5Ab8tsprDeXKp97RnQWSODiEgo1JV%2Bi%2BnPWlDQs1nwDrKNwCRfZ%2FQYIRt68XYE5vLPc9mkwBJPnX8234NZI3H6wZuBtkyu%2BdrOIzJt3yiCekDHdTh7ejRrM%2BnwDBd2JLqegGbYZYa44Uj20vaoyy7EzhG3g0tESgIyzgzs1qyzR9zqRMDSY69SAtzGdv&X-Amz-Signature=cc45a18b891c0959136b5dd5e89ce5cbff9e60d1e907cb71e1787dc41ee7bbba&X-Amz-SignedHeaders=host&x-id=GetObject)
