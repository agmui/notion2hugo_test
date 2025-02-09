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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKXIKP2K%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsEaa8jbT5o36pHToBggYl6NtFhrC7jrykIbsZTACehwIgEtwVq7DEqJWNSXLRO%2FenBU7lHF5Cc3uZi9StcPzAtYAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhLdGS2BdGx5NYUByrcA29Up%2BJw2nQDeFM6RojNwclOKwukFolPbRtr7fCKUtELIcdl670jQcTQV8ntfGRRJIs%2F6mEpRFEfEhb0iN1ut7LhwCJv1Gprmmoq232H9dZc4iYJY4fgs8GpD6xpso4PyJSg5InWYnjrQIBZjDMSGwNcBdx1I4rtVjBb%2Fo%2F4KzQV%2FA4MsEDp7mPMlNnPb8mLoneJ8WguuLtHJzVGzXJZUVL0lA6azuOa1fD8ansB3PrCcEaCg1BWv%2FzR8sHCQjmC7kgSgYg2jz%2BfcfPK6fdhFPGZD%2FrtxNm2oMU7ukH2JdP2oGDWrPmczEhswrQD10zkoDBPmGHhi7luHTJsChi1Z28Jx5h7V4zuihcImT15UHKBllTmiK202RFKjX2EvsHuauD3P5%2FSp9Zj%2FS8MnW%2FFA3yis%2F6nVONQQIFu9zEJzP%2FIuXdND9CZs%2BWFiUyZNpSgQS3qjcb%2BqJkCXPg4hRNyZZx%2FV7svJnCBQUKR0JFCCha3GkwpfEv8Voav3M47rmI7gLmvI78GzFCdPcSx9RdzANnD3USvLsg9ETWhnVvf6G%2ByEzKYUKWVi%2FYMYGiC6xbJVmxmCAntnaE5IdTlqlqjqkDGFiTsV37qasjixpgmLCvc%2FjvBovkkUJW200hnMNz0n70GOqUBcgvu7iGLaJBaiNOdcwYfgYPXhWvhe1xgnnBUMc8h33fE1ceKNr5JtLH4sIqIxy2H8On4wQED7iodYP8xfQHfxFs%2F%2BKYTaXUi6eOr%2BT%2F%2F%2Be8GARatu12g%2FcImtTkkAas6DQGKRrDIKyHe1ERysY1sO6MVPVUybPmm2rhjKGgdv96cxLZpnkXzW%2FQIV2PJge0SI0YsWhAyjRVQC0yR0tnNwSt1%2BFml&X-Amz-Signature=9de76cc23410cd4cdbb3e2da79b6190db272a20f15b8eeea1b3216d5249dbc0d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKXIKP2K%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsEaa8jbT5o36pHToBggYl6NtFhrC7jrykIbsZTACehwIgEtwVq7DEqJWNSXLRO%2FenBU7lHF5Cc3uZi9StcPzAtYAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhLdGS2BdGx5NYUByrcA29Up%2BJw2nQDeFM6RojNwclOKwukFolPbRtr7fCKUtELIcdl670jQcTQV8ntfGRRJIs%2F6mEpRFEfEhb0iN1ut7LhwCJv1Gprmmoq232H9dZc4iYJY4fgs8GpD6xpso4PyJSg5InWYnjrQIBZjDMSGwNcBdx1I4rtVjBb%2Fo%2F4KzQV%2FA4MsEDp7mPMlNnPb8mLoneJ8WguuLtHJzVGzXJZUVL0lA6azuOa1fD8ansB3PrCcEaCg1BWv%2FzR8sHCQjmC7kgSgYg2jz%2BfcfPK6fdhFPGZD%2FrtxNm2oMU7ukH2JdP2oGDWrPmczEhswrQD10zkoDBPmGHhi7luHTJsChi1Z28Jx5h7V4zuihcImT15UHKBllTmiK202RFKjX2EvsHuauD3P5%2FSp9Zj%2FS8MnW%2FFA3yis%2F6nVONQQIFu9zEJzP%2FIuXdND9CZs%2BWFiUyZNpSgQS3qjcb%2BqJkCXPg4hRNyZZx%2FV7svJnCBQUKR0JFCCha3GkwpfEv8Voav3M47rmI7gLmvI78GzFCdPcSx9RdzANnD3USvLsg9ETWhnVvf6G%2ByEzKYUKWVi%2FYMYGiC6xbJVmxmCAntnaE5IdTlqlqjqkDGFiTsV37qasjixpgmLCvc%2FjvBovkkUJW200hnMNz0n70GOqUBcgvu7iGLaJBaiNOdcwYfgYPXhWvhe1xgnnBUMc8h33fE1ceKNr5JtLH4sIqIxy2H8On4wQED7iodYP8xfQHfxFs%2F%2BKYTaXUi6eOr%2BT%2F%2F%2Be8GARatu12g%2FcImtTkkAas6DQGKRrDIKyHe1ERysY1sO6MVPVUybPmm2rhjKGgdv96cxLZpnkXzW%2FQIV2PJge0SI0YsWhAyjRVQC0yR0tnNwSt1%2BFml&X-Amz-Signature=869610f60a3675309c38e8956b94c0f9e0950b96279d52cf54d77dc3b9a92fc7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKXIKP2K%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsEaa8jbT5o36pHToBggYl6NtFhrC7jrykIbsZTACehwIgEtwVq7DEqJWNSXLRO%2FenBU7lHF5Cc3uZi9StcPzAtYAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhLdGS2BdGx5NYUByrcA29Up%2BJw2nQDeFM6RojNwclOKwukFolPbRtr7fCKUtELIcdl670jQcTQV8ntfGRRJIs%2F6mEpRFEfEhb0iN1ut7LhwCJv1Gprmmoq232H9dZc4iYJY4fgs8GpD6xpso4PyJSg5InWYnjrQIBZjDMSGwNcBdx1I4rtVjBb%2Fo%2F4KzQV%2FA4MsEDp7mPMlNnPb8mLoneJ8WguuLtHJzVGzXJZUVL0lA6azuOa1fD8ansB3PrCcEaCg1BWv%2FzR8sHCQjmC7kgSgYg2jz%2BfcfPK6fdhFPGZD%2FrtxNm2oMU7ukH2JdP2oGDWrPmczEhswrQD10zkoDBPmGHhi7luHTJsChi1Z28Jx5h7V4zuihcImT15UHKBllTmiK202RFKjX2EvsHuauD3P5%2FSp9Zj%2FS8MnW%2FFA3yis%2F6nVONQQIFu9zEJzP%2FIuXdND9CZs%2BWFiUyZNpSgQS3qjcb%2BqJkCXPg4hRNyZZx%2FV7svJnCBQUKR0JFCCha3GkwpfEv8Voav3M47rmI7gLmvI78GzFCdPcSx9RdzANnD3USvLsg9ETWhnVvf6G%2ByEzKYUKWVi%2FYMYGiC6xbJVmxmCAntnaE5IdTlqlqjqkDGFiTsV37qasjixpgmLCvc%2FjvBovkkUJW200hnMNz0n70GOqUBcgvu7iGLaJBaiNOdcwYfgYPXhWvhe1xgnnBUMc8h33fE1ceKNr5JtLH4sIqIxy2H8On4wQED7iodYP8xfQHfxFs%2F%2BKYTaXUi6eOr%2BT%2F%2F%2Be8GARatu12g%2FcImtTkkAas6DQGKRrDIKyHe1ERysY1sO6MVPVUybPmm2rhjKGgdv96cxLZpnkXzW%2FQIV2PJge0SI0YsWhAyjRVQC0yR0tnNwSt1%2BFml&X-Amz-Signature=815c042472d81611ae20cec0301c7099639b3dad3aec13fbbf85f92c37e9bdc0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKXIKP2K%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsEaa8jbT5o36pHToBggYl6NtFhrC7jrykIbsZTACehwIgEtwVq7DEqJWNSXLRO%2FenBU7lHF5Cc3uZi9StcPzAtYAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhLdGS2BdGx5NYUByrcA29Up%2BJw2nQDeFM6RojNwclOKwukFolPbRtr7fCKUtELIcdl670jQcTQV8ntfGRRJIs%2F6mEpRFEfEhb0iN1ut7LhwCJv1Gprmmoq232H9dZc4iYJY4fgs8GpD6xpso4PyJSg5InWYnjrQIBZjDMSGwNcBdx1I4rtVjBb%2Fo%2F4KzQV%2FA4MsEDp7mPMlNnPb8mLoneJ8WguuLtHJzVGzXJZUVL0lA6azuOa1fD8ansB3PrCcEaCg1BWv%2FzR8sHCQjmC7kgSgYg2jz%2BfcfPK6fdhFPGZD%2FrtxNm2oMU7ukH2JdP2oGDWrPmczEhswrQD10zkoDBPmGHhi7luHTJsChi1Z28Jx5h7V4zuihcImT15UHKBllTmiK202RFKjX2EvsHuauD3P5%2FSp9Zj%2FS8MnW%2FFA3yis%2F6nVONQQIFu9zEJzP%2FIuXdND9CZs%2BWFiUyZNpSgQS3qjcb%2BqJkCXPg4hRNyZZx%2FV7svJnCBQUKR0JFCCha3GkwpfEv8Voav3M47rmI7gLmvI78GzFCdPcSx9RdzANnD3USvLsg9ETWhnVvf6G%2ByEzKYUKWVi%2FYMYGiC6xbJVmxmCAntnaE5IdTlqlqjqkDGFiTsV37qasjixpgmLCvc%2FjvBovkkUJW200hnMNz0n70GOqUBcgvu7iGLaJBaiNOdcwYfgYPXhWvhe1xgnnBUMc8h33fE1ceKNr5JtLH4sIqIxy2H8On4wQED7iodYP8xfQHfxFs%2F%2BKYTaXUi6eOr%2BT%2F%2F%2Be8GARatu12g%2FcImtTkkAas6DQGKRrDIKyHe1ERysY1sO6MVPVUybPmm2rhjKGgdv96cxLZpnkXzW%2FQIV2PJge0SI0YsWhAyjRVQC0yR0tnNwSt1%2BFml&X-Amz-Signature=0e5e135934ed9733edc651e24e89287c989da5be7a864d3223ef43b8eb1e0ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKXIKP2K%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsEaa8jbT5o36pHToBggYl6NtFhrC7jrykIbsZTACehwIgEtwVq7DEqJWNSXLRO%2FenBU7lHF5Cc3uZi9StcPzAtYAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhLdGS2BdGx5NYUByrcA29Up%2BJw2nQDeFM6RojNwclOKwukFolPbRtr7fCKUtELIcdl670jQcTQV8ntfGRRJIs%2F6mEpRFEfEhb0iN1ut7LhwCJv1Gprmmoq232H9dZc4iYJY4fgs8GpD6xpso4PyJSg5InWYnjrQIBZjDMSGwNcBdx1I4rtVjBb%2Fo%2F4KzQV%2FA4MsEDp7mPMlNnPb8mLoneJ8WguuLtHJzVGzXJZUVL0lA6azuOa1fD8ansB3PrCcEaCg1BWv%2FzR8sHCQjmC7kgSgYg2jz%2BfcfPK6fdhFPGZD%2FrtxNm2oMU7ukH2JdP2oGDWrPmczEhswrQD10zkoDBPmGHhi7luHTJsChi1Z28Jx5h7V4zuihcImT15UHKBllTmiK202RFKjX2EvsHuauD3P5%2FSp9Zj%2FS8MnW%2FFA3yis%2F6nVONQQIFu9zEJzP%2FIuXdND9CZs%2BWFiUyZNpSgQS3qjcb%2BqJkCXPg4hRNyZZx%2FV7svJnCBQUKR0JFCCha3GkwpfEv8Voav3M47rmI7gLmvI78GzFCdPcSx9RdzANnD3USvLsg9ETWhnVvf6G%2ByEzKYUKWVi%2FYMYGiC6xbJVmxmCAntnaE5IdTlqlqjqkDGFiTsV37qasjixpgmLCvc%2FjvBovkkUJW200hnMNz0n70GOqUBcgvu7iGLaJBaiNOdcwYfgYPXhWvhe1xgnnBUMc8h33fE1ceKNr5JtLH4sIqIxy2H8On4wQED7iodYP8xfQHfxFs%2F%2BKYTaXUi6eOr%2BT%2F%2F%2Be8GARatu12g%2FcImtTkkAas6DQGKRrDIKyHe1ERysY1sO6MVPVUybPmm2rhjKGgdv96cxLZpnkXzW%2FQIV2PJge0SI0YsWhAyjRVQC0yR0tnNwSt1%2BFml&X-Amz-Signature=1c354bba7996be20c647eb06b8b5e1e37454381b1b977de7709338eaec922bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKXIKP2K%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T021132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsEaa8jbT5o36pHToBggYl6NtFhrC7jrykIbsZTACehwIgEtwVq7DEqJWNSXLRO%2FenBU7lHF5Cc3uZi9StcPzAtYAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhLdGS2BdGx5NYUByrcA29Up%2BJw2nQDeFM6RojNwclOKwukFolPbRtr7fCKUtELIcdl670jQcTQV8ntfGRRJIs%2F6mEpRFEfEhb0iN1ut7LhwCJv1Gprmmoq232H9dZc4iYJY4fgs8GpD6xpso4PyJSg5InWYnjrQIBZjDMSGwNcBdx1I4rtVjBb%2Fo%2F4KzQV%2FA4MsEDp7mPMlNnPb8mLoneJ8WguuLtHJzVGzXJZUVL0lA6azuOa1fD8ansB3PrCcEaCg1BWv%2FzR8sHCQjmC7kgSgYg2jz%2BfcfPK6fdhFPGZD%2FrtxNm2oMU7ukH2JdP2oGDWrPmczEhswrQD10zkoDBPmGHhi7luHTJsChi1Z28Jx5h7V4zuihcImT15UHKBllTmiK202RFKjX2EvsHuauD3P5%2FSp9Zj%2FS8MnW%2FFA3yis%2F6nVONQQIFu9zEJzP%2FIuXdND9CZs%2BWFiUyZNpSgQS3qjcb%2BqJkCXPg4hRNyZZx%2FV7svJnCBQUKR0JFCCha3GkwpfEv8Voav3M47rmI7gLmvI78GzFCdPcSx9RdzANnD3USvLsg9ETWhnVvf6G%2ByEzKYUKWVi%2FYMYGiC6xbJVmxmCAntnaE5IdTlqlqjqkDGFiTsV37qasjixpgmLCvc%2FjvBovkkUJW200hnMNz0n70GOqUBcgvu7iGLaJBaiNOdcwYfgYPXhWvhe1xgnnBUMc8h33fE1ceKNr5JtLH4sIqIxy2H8On4wQED7iodYP8xfQHfxFs%2F%2BKYTaXUi6eOr%2BT%2F%2F%2Be8GARatu12g%2FcImtTkkAas6DQGKRrDIKyHe1ERysY1sO6MVPVUybPmm2rhjKGgdv96cxLZpnkXzW%2FQIV2PJge0SI0YsWhAyjRVQC0yR0tnNwSt1%2BFml&X-Amz-Signature=a2b400bc73860c91500f917beaa366019a8f5081e7ae63ccc0da0677ba7b4cf5&X-Amz-SignedHeaders=host&x-id=GetObject)
