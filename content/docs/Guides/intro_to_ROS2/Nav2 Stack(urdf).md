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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK7VHQL3%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXPWbRkinI%2Bw8M9c%2B9PA8I9U670SHyIrh11bOZXgAQiAiBIrV7F%2FPnRzVTITvkgEhaj7RqYLojvg1UoL2kyZyUm3yqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQd8tAqk%2BWgGl076KtwDHGFJu5%2BN5Ry3OZpM3mNHK%2Flk2MpoY4Lw9AF78myDme%2FRFMxQj3OJFNSdCtxThzILChwqEYAPsBimc99PFcxtrVe73XxKl2degAe7JKH%2Fejrv40zgogmzonEbTp4NokxP2iH%2BAvzrTso41i1jxnpoNrkGcEVSCfYODcoOUk0pwucfPmcKth7ZavQrCqnTLwdTA3WyQq%2Bfx0AYMID1OdNDpYQ1gko7FCvgjXDVIPE0TwegVHvDY%2Bra%2FZOfo0ryt2Spg63bloCBUoOdLdx26h06eYBcibQoECeevt%2BxiF54QZhflVw9WeemoGxAHYWaThZEQ46fKgxpQq2UueE%2BRBx%2FWBAparudEfDEkOJVMLing3sBPNpui0yI2VsjZwr3wrAbvr%2Fy3ifyf%2BHMuOun2O4FKfM1rdM8bChcRCppTDiocmGHttMfroQ2H0175tPuqdP%2Fe%2BhxEdpevtVmxlp0B25ErSaHMalln9jQ1Y08wT33QpfVYjVag5WKFJJmRej5DWRolrWvkRxQTAjEa7HV5IcevM4iS209hUWoGAkS%2FBIY982UlMBEFDBwbPNfNhQt%2Fi2ZnWYkSX4vfwE4%2B%2F9w0Rz0pnd5oH6U%2Fn6uEwNPqWRO4OszGcyi8BPdVFRzjA0w8Y76wwY6pgHfInXM1L8nPOToKy1%2FDDmNFZQC7TcJ28Uv71C%2BMOgGnUv61dGEWFyaSv6cp34d8zjE6VdHKrne8SHD2GAS%2FDv8Fluv9GWKWUmcftPF1LnamhFsPKe7UuZ0KitSHyplCB96jrDzFdKeRZtMkspMeeGerOlg6I8AKv1Igp%2FlbuyhWTJficpWbN9k6zzVchk7CZ7X8KdAPrpQrUThKAasFrRQOB%2BOa0Ze&X-Amz-Signature=16bffe5f746296482ce8cdf83e2947d33c82db97c203ff47af6398c61dda5ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK7VHQL3%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXPWbRkinI%2Bw8M9c%2B9PA8I9U670SHyIrh11bOZXgAQiAiBIrV7F%2FPnRzVTITvkgEhaj7RqYLojvg1UoL2kyZyUm3yqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQd8tAqk%2BWgGl076KtwDHGFJu5%2BN5Ry3OZpM3mNHK%2Flk2MpoY4Lw9AF78myDme%2FRFMxQj3OJFNSdCtxThzILChwqEYAPsBimc99PFcxtrVe73XxKl2degAe7JKH%2Fejrv40zgogmzonEbTp4NokxP2iH%2BAvzrTso41i1jxnpoNrkGcEVSCfYODcoOUk0pwucfPmcKth7ZavQrCqnTLwdTA3WyQq%2Bfx0AYMID1OdNDpYQ1gko7FCvgjXDVIPE0TwegVHvDY%2Bra%2FZOfo0ryt2Spg63bloCBUoOdLdx26h06eYBcibQoECeevt%2BxiF54QZhflVw9WeemoGxAHYWaThZEQ46fKgxpQq2UueE%2BRBx%2FWBAparudEfDEkOJVMLing3sBPNpui0yI2VsjZwr3wrAbvr%2Fy3ifyf%2BHMuOun2O4FKfM1rdM8bChcRCppTDiocmGHttMfroQ2H0175tPuqdP%2Fe%2BhxEdpevtVmxlp0B25ErSaHMalln9jQ1Y08wT33QpfVYjVag5WKFJJmRej5DWRolrWvkRxQTAjEa7HV5IcevM4iS209hUWoGAkS%2FBIY982UlMBEFDBwbPNfNhQt%2Fi2ZnWYkSX4vfwE4%2B%2F9w0Rz0pnd5oH6U%2Fn6uEwNPqWRO4OszGcyi8BPdVFRzjA0w8Y76wwY6pgHfInXM1L8nPOToKy1%2FDDmNFZQC7TcJ28Uv71C%2BMOgGnUv61dGEWFyaSv6cp34d8zjE6VdHKrne8SHD2GAS%2FDv8Fluv9GWKWUmcftPF1LnamhFsPKe7UuZ0KitSHyplCB96jrDzFdKeRZtMkspMeeGerOlg6I8AKv1Igp%2FlbuyhWTJficpWbN9k6zzVchk7CZ7X8KdAPrpQrUThKAasFrRQOB%2BOa0Ze&X-Amz-Signature=163365d48ac2af80dbc51911bead770863148a753ca706204afe8c38e1c9cee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK7VHQL3%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXPWbRkinI%2Bw8M9c%2B9PA8I9U670SHyIrh11bOZXgAQiAiBIrV7F%2FPnRzVTITvkgEhaj7RqYLojvg1UoL2kyZyUm3yqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQd8tAqk%2BWgGl076KtwDHGFJu5%2BN5Ry3OZpM3mNHK%2Flk2MpoY4Lw9AF78myDme%2FRFMxQj3OJFNSdCtxThzILChwqEYAPsBimc99PFcxtrVe73XxKl2degAe7JKH%2Fejrv40zgogmzonEbTp4NokxP2iH%2BAvzrTso41i1jxnpoNrkGcEVSCfYODcoOUk0pwucfPmcKth7ZavQrCqnTLwdTA3WyQq%2Bfx0AYMID1OdNDpYQ1gko7FCvgjXDVIPE0TwegVHvDY%2Bra%2FZOfo0ryt2Spg63bloCBUoOdLdx26h06eYBcibQoECeevt%2BxiF54QZhflVw9WeemoGxAHYWaThZEQ46fKgxpQq2UueE%2BRBx%2FWBAparudEfDEkOJVMLing3sBPNpui0yI2VsjZwr3wrAbvr%2Fy3ifyf%2BHMuOun2O4FKfM1rdM8bChcRCppTDiocmGHttMfroQ2H0175tPuqdP%2Fe%2BhxEdpevtVmxlp0B25ErSaHMalln9jQ1Y08wT33QpfVYjVag5WKFJJmRej5DWRolrWvkRxQTAjEa7HV5IcevM4iS209hUWoGAkS%2FBIY982UlMBEFDBwbPNfNhQt%2Fi2ZnWYkSX4vfwE4%2B%2F9w0Rz0pnd5oH6U%2Fn6uEwNPqWRO4OszGcyi8BPdVFRzjA0w8Y76wwY6pgHfInXM1L8nPOToKy1%2FDDmNFZQC7TcJ28Uv71C%2BMOgGnUv61dGEWFyaSv6cp34d8zjE6VdHKrne8SHD2GAS%2FDv8Fluv9GWKWUmcftPF1LnamhFsPKe7UuZ0KitSHyplCB96jrDzFdKeRZtMkspMeeGerOlg6I8AKv1Igp%2FlbuyhWTJficpWbN9k6zzVchk7CZ7X8KdAPrpQrUThKAasFrRQOB%2BOa0Ze&X-Amz-Signature=f82cb724af049adbfcc5c5d27af40345af402d883456553f251e6cc8ed5419a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK7VHQL3%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXPWbRkinI%2Bw8M9c%2B9PA8I9U670SHyIrh11bOZXgAQiAiBIrV7F%2FPnRzVTITvkgEhaj7RqYLojvg1UoL2kyZyUm3yqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQd8tAqk%2BWgGl076KtwDHGFJu5%2BN5Ry3OZpM3mNHK%2Flk2MpoY4Lw9AF78myDme%2FRFMxQj3OJFNSdCtxThzILChwqEYAPsBimc99PFcxtrVe73XxKl2degAe7JKH%2Fejrv40zgogmzonEbTp4NokxP2iH%2BAvzrTso41i1jxnpoNrkGcEVSCfYODcoOUk0pwucfPmcKth7ZavQrCqnTLwdTA3WyQq%2Bfx0AYMID1OdNDpYQ1gko7FCvgjXDVIPE0TwegVHvDY%2Bra%2FZOfo0ryt2Spg63bloCBUoOdLdx26h06eYBcibQoECeevt%2BxiF54QZhflVw9WeemoGxAHYWaThZEQ46fKgxpQq2UueE%2BRBx%2FWBAparudEfDEkOJVMLing3sBPNpui0yI2VsjZwr3wrAbvr%2Fy3ifyf%2BHMuOun2O4FKfM1rdM8bChcRCppTDiocmGHttMfroQ2H0175tPuqdP%2Fe%2BhxEdpevtVmxlp0B25ErSaHMalln9jQ1Y08wT33QpfVYjVag5WKFJJmRej5DWRolrWvkRxQTAjEa7HV5IcevM4iS209hUWoGAkS%2FBIY982UlMBEFDBwbPNfNhQt%2Fi2ZnWYkSX4vfwE4%2B%2F9w0Rz0pnd5oH6U%2Fn6uEwNPqWRO4OszGcyi8BPdVFRzjA0w8Y76wwY6pgHfInXM1L8nPOToKy1%2FDDmNFZQC7TcJ28Uv71C%2BMOgGnUv61dGEWFyaSv6cp34d8zjE6VdHKrne8SHD2GAS%2FDv8Fluv9GWKWUmcftPF1LnamhFsPKe7UuZ0KitSHyplCB96jrDzFdKeRZtMkspMeeGerOlg6I8AKv1Igp%2FlbuyhWTJficpWbN9k6zzVchk7CZ7X8KdAPrpQrUThKAasFrRQOB%2BOa0Ze&X-Amz-Signature=51698f169fcedc58028adfdc8c1ed840dfbf07077d20c693b731c5ac2fd59755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK7VHQL3%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXPWbRkinI%2Bw8M9c%2B9PA8I9U670SHyIrh11bOZXgAQiAiBIrV7F%2FPnRzVTITvkgEhaj7RqYLojvg1UoL2kyZyUm3yqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQd8tAqk%2BWgGl076KtwDHGFJu5%2BN5Ry3OZpM3mNHK%2Flk2MpoY4Lw9AF78myDme%2FRFMxQj3OJFNSdCtxThzILChwqEYAPsBimc99PFcxtrVe73XxKl2degAe7JKH%2Fejrv40zgogmzonEbTp4NokxP2iH%2BAvzrTso41i1jxnpoNrkGcEVSCfYODcoOUk0pwucfPmcKth7ZavQrCqnTLwdTA3WyQq%2Bfx0AYMID1OdNDpYQ1gko7FCvgjXDVIPE0TwegVHvDY%2Bra%2FZOfo0ryt2Spg63bloCBUoOdLdx26h06eYBcibQoECeevt%2BxiF54QZhflVw9WeemoGxAHYWaThZEQ46fKgxpQq2UueE%2BRBx%2FWBAparudEfDEkOJVMLing3sBPNpui0yI2VsjZwr3wrAbvr%2Fy3ifyf%2BHMuOun2O4FKfM1rdM8bChcRCppTDiocmGHttMfroQ2H0175tPuqdP%2Fe%2BhxEdpevtVmxlp0B25ErSaHMalln9jQ1Y08wT33QpfVYjVag5WKFJJmRej5DWRolrWvkRxQTAjEa7HV5IcevM4iS209hUWoGAkS%2FBIY982UlMBEFDBwbPNfNhQt%2Fi2ZnWYkSX4vfwE4%2B%2F9w0Rz0pnd5oH6U%2Fn6uEwNPqWRO4OszGcyi8BPdVFRzjA0w8Y76wwY6pgHfInXM1L8nPOToKy1%2FDDmNFZQC7TcJ28Uv71C%2BMOgGnUv61dGEWFyaSv6cp34d8zjE6VdHKrne8SHD2GAS%2FDv8Fluv9GWKWUmcftPF1LnamhFsPKe7UuZ0KitSHyplCB96jrDzFdKeRZtMkspMeeGerOlg6I8AKv1Igp%2FlbuyhWTJficpWbN9k6zzVchk7CZ7X8KdAPrpQrUThKAasFrRQOB%2BOa0Ze&X-Amz-Signature=0f34decda42ac2165bf159febaf03f65a95e2c16cdaa772c31833a456deeeec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK7VHQL3%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T191017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXPWbRkinI%2Bw8M9c%2B9PA8I9U670SHyIrh11bOZXgAQiAiBIrV7F%2FPnRzVTITvkgEhaj7RqYLojvg1UoL2kyZyUm3yqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQd8tAqk%2BWgGl076KtwDHGFJu5%2BN5Ry3OZpM3mNHK%2Flk2MpoY4Lw9AF78myDme%2FRFMxQj3OJFNSdCtxThzILChwqEYAPsBimc99PFcxtrVe73XxKl2degAe7JKH%2Fejrv40zgogmzonEbTp4NokxP2iH%2BAvzrTso41i1jxnpoNrkGcEVSCfYODcoOUk0pwucfPmcKth7ZavQrCqnTLwdTA3WyQq%2Bfx0AYMID1OdNDpYQ1gko7FCvgjXDVIPE0TwegVHvDY%2Bra%2FZOfo0ryt2Spg63bloCBUoOdLdx26h06eYBcibQoECeevt%2BxiF54QZhflVw9WeemoGxAHYWaThZEQ46fKgxpQq2UueE%2BRBx%2FWBAparudEfDEkOJVMLing3sBPNpui0yI2VsjZwr3wrAbvr%2Fy3ifyf%2BHMuOun2O4FKfM1rdM8bChcRCppTDiocmGHttMfroQ2H0175tPuqdP%2Fe%2BhxEdpevtVmxlp0B25ErSaHMalln9jQ1Y08wT33QpfVYjVag5WKFJJmRej5DWRolrWvkRxQTAjEa7HV5IcevM4iS209hUWoGAkS%2FBIY982UlMBEFDBwbPNfNhQt%2Fi2ZnWYkSX4vfwE4%2B%2F9w0Rz0pnd5oH6U%2Fn6uEwNPqWRO4OszGcyi8BPdVFRzjA0w8Y76wwY6pgHfInXM1L8nPOToKy1%2FDDmNFZQC7TcJ28Uv71C%2BMOgGnUv61dGEWFyaSv6cp34d8zjE6VdHKrne8SHD2GAS%2FDv8Fluv9GWKWUmcftPF1LnamhFsPKe7UuZ0KitSHyplCB96jrDzFdKeRZtMkspMeeGerOlg6I8AKv1Igp%2FlbuyhWTJficpWbN9k6zzVchk7CZ7X8KdAPrpQrUThKAasFrRQOB%2BOa0Ze&X-Amz-Signature=2c6ebcb69e6d993ae58ece0e28ed4a33c9aa61011101840bceff4517bf451a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
