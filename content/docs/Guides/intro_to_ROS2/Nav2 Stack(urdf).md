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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3HGZTV3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5Eqm7isq7p7tlN7qjFh0t7Yr4eQyWdIBX2mjOG4HsyAiBxX10ZK8Sc5av0qgqWTC1XBKaknOcnAkvEg9%2F2hpR71yqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtufcHwsN7umBPrgKtwDb22nXFPpVbrHtfOpyI%2FtgC%2FhWKU5%2BspaLiErYmgCRXAjRcmwQVG0amKrRVkck4qSvfJKOVPE62dEvxb2P%2BEq2esZsYlM%2Brx%2Bw7vKc6kcNmKJh1TjjNs4xYTR52LKdpVCDnAQ7oZbJbWs1wPpgz4K4UGz3oXxlEqxYYrXRCL%2BzF2XjBN9lSgyTxoHMvEE%2BaMoPelJUd5viwWfSeztD%2Bxv0ndJjGm6Wzyi90UEkULf%2FkqNkeTgE7lkTsqMPzFTumcaGQD06h12JRPD8Y6OIWhHDBpohrXiiGm65uAqbewbvPPW02RkOeUkR%2Fa%2FhuDm9J5pBoF5YuW0bdmmFEzNHhy2jz9ezMgzJEyKBUVjkjWRxsEZDT4RvESqVnBwM85kzSO8ntVcWz8RUB4hKiKPOJjfkelKPE4%2BvMRsAlmQK%2Fo7u%2BCqzmj5s9A7yk6PPg18XNjPOndGMBG1jwq61PS2A7zsS8pP4%2BwElQmzh89HDvvs4KzGCbjKXAlWgeUxq%2BMl4pKF%2FYjnfwHI6HSLemcNQX1%2FwGRkodzAUvC2TAfKRN%2FCHyO9018HqKgi3UQcB62HMAX8TcbtfGoeUExDbItvKrOHcMyPAfTANs%2FdSQqXUcBZPDfGdOwhY2ORwCh9GCEwt63MwwY6pgGJwqXgvO39MX9fWByPqXDq5C6u4pBLz26t5RXKbl%2F10UPHBgxVetmbaaNuHgX4APwCWRnPY4BhKi2keO9biwiJkWLryR2pDwynCr5ArG%2FLjOvoI9xUY0uEN1hDVSFg8dQX0vH2imoW%2BKZOKbXxNjOiZLBOtPwDL9lgVXRoEz4cxn%2FKpXcER57AwbVF50CgDOzcF20QN8yoKUiBWnedXrpaQf1ZNifj&X-Amz-Signature=7e90ebd28e11de6cf47683d9f37f1d15b4155307efa0b3fd80264c9b9dd5d090&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3HGZTV3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5Eqm7isq7p7tlN7qjFh0t7Yr4eQyWdIBX2mjOG4HsyAiBxX10ZK8Sc5av0qgqWTC1XBKaknOcnAkvEg9%2F2hpR71yqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtufcHwsN7umBPrgKtwDb22nXFPpVbrHtfOpyI%2FtgC%2FhWKU5%2BspaLiErYmgCRXAjRcmwQVG0amKrRVkck4qSvfJKOVPE62dEvxb2P%2BEq2esZsYlM%2Brx%2Bw7vKc6kcNmKJh1TjjNs4xYTR52LKdpVCDnAQ7oZbJbWs1wPpgz4K4UGz3oXxlEqxYYrXRCL%2BzF2XjBN9lSgyTxoHMvEE%2BaMoPelJUd5viwWfSeztD%2Bxv0ndJjGm6Wzyi90UEkULf%2FkqNkeTgE7lkTsqMPzFTumcaGQD06h12JRPD8Y6OIWhHDBpohrXiiGm65uAqbewbvPPW02RkOeUkR%2Fa%2FhuDm9J5pBoF5YuW0bdmmFEzNHhy2jz9ezMgzJEyKBUVjkjWRxsEZDT4RvESqVnBwM85kzSO8ntVcWz8RUB4hKiKPOJjfkelKPE4%2BvMRsAlmQK%2Fo7u%2BCqzmj5s9A7yk6PPg18XNjPOndGMBG1jwq61PS2A7zsS8pP4%2BwElQmzh89HDvvs4KzGCbjKXAlWgeUxq%2BMl4pKF%2FYjnfwHI6HSLemcNQX1%2FwGRkodzAUvC2TAfKRN%2FCHyO9018HqKgi3UQcB62HMAX8TcbtfGoeUExDbItvKrOHcMyPAfTANs%2FdSQqXUcBZPDfGdOwhY2ORwCh9GCEwt63MwwY6pgGJwqXgvO39MX9fWByPqXDq5C6u4pBLz26t5RXKbl%2F10UPHBgxVetmbaaNuHgX4APwCWRnPY4BhKi2keO9biwiJkWLryR2pDwynCr5ArG%2FLjOvoI9xUY0uEN1hDVSFg8dQX0vH2imoW%2BKZOKbXxNjOiZLBOtPwDL9lgVXRoEz4cxn%2FKpXcER57AwbVF50CgDOzcF20QN8yoKUiBWnedXrpaQf1ZNifj&X-Amz-Signature=0521ee67a40c3e05e927a472dfe5542525ce9c01e164f312c57d08db570e8971&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3HGZTV3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5Eqm7isq7p7tlN7qjFh0t7Yr4eQyWdIBX2mjOG4HsyAiBxX10ZK8Sc5av0qgqWTC1XBKaknOcnAkvEg9%2F2hpR71yqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtufcHwsN7umBPrgKtwDb22nXFPpVbrHtfOpyI%2FtgC%2FhWKU5%2BspaLiErYmgCRXAjRcmwQVG0amKrRVkck4qSvfJKOVPE62dEvxb2P%2BEq2esZsYlM%2Brx%2Bw7vKc6kcNmKJh1TjjNs4xYTR52LKdpVCDnAQ7oZbJbWs1wPpgz4K4UGz3oXxlEqxYYrXRCL%2BzF2XjBN9lSgyTxoHMvEE%2BaMoPelJUd5viwWfSeztD%2Bxv0ndJjGm6Wzyi90UEkULf%2FkqNkeTgE7lkTsqMPzFTumcaGQD06h12JRPD8Y6OIWhHDBpohrXiiGm65uAqbewbvPPW02RkOeUkR%2Fa%2FhuDm9J5pBoF5YuW0bdmmFEzNHhy2jz9ezMgzJEyKBUVjkjWRxsEZDT4RvESqVnBwM85kzSO8ntVcWz8RUB4hKiKPOJjfkelKPE4%2BvMRsAlmQK%2Fo7u%2BCqzmj5s9A7yk6PPg18XNjPOndGMBG1jwq61PS2A7zsS8pP4%2BwElQmzh89HDvvs4KzGCbjKXAlWgeUxq%2BMl4pKF%2FYjnfwHI6HSLemcNQX1%2FwGRkodzAUvC2TAfKRN%2FCHyO9018HqKgi3UQcB62HMAX8TcbtfGoeUExDbItvKrOHcMyPAfTANs%2FdSQqXUcBZPDfGdOwhY2ORwCh9GCEwt63MwwY6pgGJwqXgvO39MX9fWByPqXDq5C6u4pBLz26t5RXKbl%2F10UPHBgxVetmbaaNuHgX4APwCWRnPY4BhKi2keO9biwiJkWLryR2pDwynCr5ArG%2FLjOvoI9xUY0uEN1hDVSFg8dQX0vH2imoW%2BKZOKbXxNjOiZLBOtPwDL9lgVXRoEz4cxn%2FKpXcER57AwbVF50CgDOzcF20QN8yoKUiBWnedXrpaQf1ZNifj&X-Amz-Signature=0f022100d5bab66a88508df6ca2a651cc2375e34fc442df8a9f77b83c16bb2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3HGZTV3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5Eqm7isq7p7tlN7qjFh0t7Yr4eQyWdIBX2mjOG4HsyAiBxX10ZK8Sc5av0qgqWTC1XBKaknOcnAkvEg9%2F2hpR71yqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtufcHwsN7umBPrgKtwDb22nXFPpVbrHtfOpyI%2FtgC%2FhWKU5%2BspaLiErYmgCRXAjRcmwQVG0amKrRVkck4qSvfJKOVPE62dEvxb2P%2BEq2esZsYlM%2Brx%2Bw7vKc6kcNmKJh1TjjNs4xYTR52LKdpVCDnAQ7oZbJbWs1wPpgz4K4UGz3oXxlEqxYYrXRCL%2BzF2XjBN9lSgyTxoHMvEE%2BaMoPelJUd5viwWfSeztD%2Bxv0ndJjGm6Wzyi90UEkULf%2FkqNkeTgE7lkTsqMPzFTumcaGQD06h12JRPD8Y6OIWhHDBpohrXiiGm65uAqbewbvPPW02RkOeUkR%2Fa%2FhuDm9J5pBoF5YuW0bdmmFEzNHhy2jz9ezMgzJEyKBUVjkjWRxsEZDT4RvESqVnBwM85kzSO8ntVcWz8RUB4hKiKPOJjfkelKPE4%2BvMRsAlmQK%2Fo7u%2BCqzmj5s9A7yk6PPg18XNjPOndGMBG1jwq61PS2A7zsS8pP4%2BwElQmzh89HDvvs4KzGCbjKXAlWgeUxq%2BMl4pKF%2FYjnfwHI6HSLemcNQX1%2FwGRkodzAUvC2TAfKRN%2FCHyO9018HqKgi3UQcB62HMAX8TcbtfGoeUExDbItvKrOHcMyPAfTANs%2FdSQqXUcBZPDfGdOwhY2ORwCh9GCEwt63MwwY6pgGJwqXgvO39MX9fWByPqXDq5C6u4pBLz26t5RXKbl%2F10UPHBgxVetmbaaNuHgX4APwCWRnPY4BhKi2keO9biwiJkWLryR2pDwynCr5ArG%2FLjOvoI9xUY0uEN1hDVSFg8dQX0vH2imoW%2BKZOKbXxNjOiZLBOtPwDL9lgVXRoEz4cxn%2FKpXcER57AwbVF50CgDOzcF20QN8yoKUiBWnedXrpaQf1ZNifj&X-Amz-Signature=53779cad45525a7caa697ad0cd6c1207154c9edd39ca70c0d831a3a398a6afa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3HGZTV3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5Eqm7isq7p7tlN7qjFh0t7Yr4eQyWdIBX2mjOG4HsyAiBxX10ZK8Sc5av0qgqWTC1XBKaknOcnAkvEg9%2F2hpR71yqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtufcHwsN7umBPrgKtwDb22nXFPpVbrHtfOpyI%2FtgC%2FhWKU5%2BspaLiErYmgCRXAjRcmwQVG0amKrRVkck4qSvfJKOVPE62dEvxb2P%2BEq2esZsYlM%2Brx%2Bw7vKc6kcNmKJh1TjjNs4xYTR52LKdpVCDnAQ7oZbJbWs1wPpgz4K4UGz3oXxlEqxYYrXRCL%2BzF2XjBN9lSgyTxoHMvEE%2BaMoPelJUd5viwWfSeztD%2Bxv0ndJjGm6Wzyi90UEkULf%2FkqNkeTgE7lkTsqMPzFTumcaGQD06h12JRPD8Y6OIWhHDBpohrXiiGm65uAqbewbvPPW02RkOeUkR%2Fa%2FhuDm9J5pBoF5YuW0bdmmFEzNHhy2jz9ezMgzJEyKBUVjkjWRxsEZDT4RvESqVnBwM85kzSO8ntVcWz8RUB4hKiKPOJjfkelKPE4%2BvMRsAlmQK%2Fo7u%2BCqzmj5s9A7yk6PPg18XNjPOndGMBG1jwq61PS2A7zsS8pP4%2BwElQmzh89HDvvs4KzGCbjKXAlWgeUxq%2BMl4pKF%2FYjnfwHI6HSLemcNQX1%2FwGRkodzAUvC2TAfKRN%2FCHyO9018HqKgi3UQcB62HMAX8TcbtfGoeUExDbItvKrOHcMyPAfTANs%2FdSQqXUcBZPDfGdOwhY2ORwCh9GCEwt63MwwY6pgGJwqXgvO39MX9fWByPqXDq5C6u4pBLz26t5RXKbl%2F10UPHBgxVetmbaaNuHgX4APwCWRnPY4BhKi2keO9biwiJkWLryR2pDwynCr5ArG%2FLjOvoI9xUY0uEN1hDVSFg8dQX0vH2imoW%2BKZOKbXxNjOiZLBOtPwDL9lgVXRoEz4cxn%2FKpXcER57AwbVF50CgDOzcF20QN8yoKUiBWnedXrpaQf1ZNifj&X-Amz-Signature=e6b42c302065e47f849161c1e72864ea00046297df3473a8b537af1e7b03f796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3HGZTV3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T025543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF5Eqm7isq7p7tlN7qjFh0t7Yr4eQyWdIBX2mjOG4HsyAiBxX10ZK8Sc5av0qgqWTC1XBKaknOcnAkvEg9%2F2hpR71yqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWtufcHwsN7umBPrgKtwDb22nXFPpVbrHtfOpyI%2FtgC%2FhWKU5%2BspaLiErYmgCRXAjRcmwQVG0amKrRVkck4qSvfJKOVPE62dEvxb2P%2BEq2esZsYlM%2Brx%2Bw7vKc6kcNmKJh1TjjNs4xYTR52LKdpVCDnAQ7oZbJbWs1wPpgz4K4UGz3oXxlEqxYYrXRCL%2BzF2XjBN9lSgyTxoHMvEE%2BaMoPelJUd5viwWfSeztD%2Bxv0ndJjGm6Wzyi90UEkULf%2FkqNkeTgE7lkTsqMPzFTumcaGQD06h12JRPD8Y6OIWhHDBpohrXiiGm65uAqbewbvPPW02RkOeUkR%2Fa%2FhuDm9J5pBoF5YuW0bdmmFEzNHhy2jz9ezMgzJEyKBUVjkjWRxsEZDT4RvESqVnBwM85kzSO8ntVcWz8RUB4hKiKPOJjfkelKPE4%2BvMRsAlmQK%2Fo7u%2BCqzmj5s9A7yk6PPg18XNjPOndGMBG1jwq61PS2A7zsS8pP4%2BwElQmzh89HDvvs4KzGCbjKXAlWgeUxq%2BMl4pKF%2FYjnfwHI6HSLemcNQX1%2FwGRkodzAUvC2TAfKRN%2FCHyO9018HqKgi3UQcB62HMAX8TcbtfGoeUExDbItvKrOHcMyPAfTANs%2FdSQqXUcBZPDfGdOwhY2ORwCh9GCEwt63MwwY6pgGJwqXgvO39MX9fWByPqXDq5C6u4pBLz26t5RXKbl%2F10UPHBgxVetmbaaNuHgX4APwCWRnPY4BhKi2keO9biwiJkWLryR2pDwynCr5ArG%2FLjOvoI9xUY0uEN1hDVSFg8dQX0vH2imoW%2BKZOKbXxNjOiZLBOtPwDL9lgVXRoEz4cxn%2FKpXcER57AwbVF50CgDOzcF20QN8yoKUiBWnedXrpaQf1ZNifj&X-Amz-Signature=eb85c3d1c8844c828025c5183d476ee9ef29888f469cf3505c9e080b361edc31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
