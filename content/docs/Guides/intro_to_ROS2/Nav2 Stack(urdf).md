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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T5SSXUC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgw6uAfYTqtqpXLaKyg2kd5MpatkYwT3P3iWfIteAShQIgZqc0iqowW90a7mRSmO5Xs0VZu8beQZYQFDNHHKdS520qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqkIVyCNm4n9ymJxSrcAxSCcFcoj3l9RWfRjWBSJmIs4%2BKzsgmVwV3dpEJWsQXffiK0gEqKi5pduxLITFlNp6OKaXqBcAlL0Qqt3zyz7zo5DNUfr660DlQpGtRiHrKIyQNPAoCxJRaSpc0yRPgq9NRk7WG9lcv99IsqPQ%2FU6xsLbXrg4McAVoGdXGIJmYFVTB2TfFu4TQ%2F1hO96jM8AhJjovIpQPvnjE65opP9eDy5lcTsNicRf4MKnCAsrQiuy7%2BCWDx7L%2FWHn5tLNK2aSDkAClyOEeobFsRuEUfSk9rmWHNcKTl78eTO%2BkQJLlOU7pdlLmo85KPKEg%2BCNc1wjBKzkZAitk049WGYU%2FTcF%2F1Uov9tOsmWZCEETiAAfo9RCpylwNZL5MIxK4SW1CKt00NmeGyGV7qBpmWIDnkbbdAjAEGdGk7QsX2D8jWQuD5EvdvOtKNnivdrSXWqtehJMikBsAB7l0hTCpMKsRCMDmKvWVmA5%2BuM%2Fv12Mobs7qh0%2FUc0nV1pFSRO0KWTUyEICZLhwrwSyNJfaV%2BpyZAAJi%2BgzeQ%2BUedgSeqrxeIEXQoMylXD491lBxa1PJWjEDr4Bc%2FoCRC%2FTjDoBkr133vIBqREpqrz%2FHUVhOcOy%2BD%2BB%2BDJvJbVpoHCkob2KWphEMOHZysMGOqUB6y5xfwaxG4rGs%2F0dHdwHbmtvyVKCHkIUxsDwvU3MLRnxgwWMfQcofKCJc24ADwFzOEtodac%2F8SsvVqkZHwJTIZUqfw1bb5JAFcltvsuvgQm77CHStQCswKNeWyHEvxXjrf35I%2F3ReV%2By5UE5%2BdF4PcP4xzH7ELJJfD9i3zpMADLZn4UKuLEikLuXZND0QO1EPhT8Cl%2F%2BtLcuJ84n5cevfufjHIlv&X-Amz-Signature=c0f12eb39193cbdb621831f5cd7215ca3a70824aaf0acd16a55d47059e1313c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T5SSXUC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgw6uAfYTqtqpXLaKyg2kd5MpatkYwT3P3iWfIteAShQIgZqc0iqowW90a7mRSmO5Xs0VZu8beQZYQFDNHHKdS520qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqkIVyCNm4n9ymJxSrcAxSCcFcoj3l9RWfRjWBSJmIs4%2BKzsgmVwV3dpEJWsQXffiK0gEqKi5pduxLITFlNp6OKaXqBcAlL0Qqt3zyz7zo5DNUfr660DlQpGtRiHrKIyQNPAoCxJRaSpc0yRPgq9NRk7WG9lcv99IsqPQ%2FU6xsLbXrg4McAVoGdXGIJmYFVTB2TfFu4TQ%2F1hO96jM8AhJjovIpQPvnjE65opP9eDy5lcTsNicRf4MKnCAsrQiuy7%2BCWDx7L%2FWHn5tLNK2aSDkAClyOEeobFsRuEUfSk9rmWHNcKTl78eTO%2BkQJLlOU7pdlLmo85KPKEg%2BCNc1wjBKzkZAitk049WGYU%2FTcF%2F1Uov9tOsmWZCEETiAAfo9RCpylwNZL5MIxK4SW1CKt00NmeGyGV7qBpmWIDnkbbdAjAEGdGk7QsX2D8jWQuD5EvdvOtKNnivdrSXWqtehJMikBsAB7l0hTCpMKsRCMDmKvWVmA5%2BuM%2Fv12Mobs7qh0%2FUc0nV1pFSRO0KWTUyEICZLhwrwSyNJfaV%2BpyZAAJi%2BgzeQ%2BUedgSeqrxeIEXQoMylXD491lBxa1PJWjEDr4Bc%2FoCRC%2FTjDoBkr133vIBqREpqrz%2FHUVhOcOy%2BD%2BB%2BDJvJbVpoHCkob2KWphEMOHZysMGOqUB6y5xfwaxG4rGs%2F0dHdwHbmtvyVKCHkIUxsDwvU3MLRnxgwWMfQcofKCJc24ADwFzOEtodac%2F8SsvVqkZHwJTIZUqfw1bb5JAFcltvsuvgQm77CHStQCswKNeWyHEvxXjrf35I%2F3ReV%2By5UE5%2BdF4PcP4xzH7ELJJfD9i3zpMADLZn4UKuLEikLuXZND0QO1EPhT8Cl%2F%2BtLcuJ84n5cevfufjHIlv&X-Amz-Signature=0b0475b975710e04130286a844d53a3ebdae4d71f279c85ebd28637be6cb8fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T5SSXUC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgw6uAfYTqtqpXLaKyg2kd5MpatkYwT3P3iWfIteAShQIgZqc0iqowW90a7mRSmO5Xs0VZu8beQZYQFDNHHKdS520qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqkIVyCNm4n9ymJxSrcAxSCcFcoj3l9RWfRjWBSJmIs4%2BKzsgmVwV3dpEJWsQXffiK0gEqKi5pduxLITFlNp6OKaXqBcAlL0Qqt3zyz7zo5DNUfr660DlQpGtRiHrKIyQNPAoCxJRaSpc0yRPgq9NRk7WG9lcv99IsqPQ%2FU6xsLbXrg4McAVoGdXGIJmYFVTB2TfFu4TQ%2F1hO96jM8AhJjovIpQPvnjE65opP9eDy5lcTsNicRf4MKnCAsrQiuy7%2BCWDx7L%2FWHn5tLNK2aSDkAClyOEeobFsRuEUfSk9rmWHNcKTl78eTO%2BkQJLlOU7pdlLmo85KPKEg%2BCNc1wjBKzkZAitk049WGYU%2FTcF%2F1Uov9tOsmWZCEETiAAfo9RCpylwNZL5MIxK4SW1CKt00NmeGyGV7qBpmWIDnkbbdAjAEGdGk7QsX2D8jWQuD5EvdvOtKNnivdrSXWqtehJMikBsAB7l0hTCpMKsRCMDmKvWVmA5%2BuM%2Fv12Mobs7qh0%2FUc0nV1pFSRO0KWTUyEICZLhwrwSyNJfaV%2BpyZAAJi%2BgzeQ%2BUedgSeqrxeIEXQoMylXD491lBxa1PJWjEDr4Bc%2FoCRC%2FTjDoBkr133vIBqREpqrz%2FHUVhOcOy%2BD%2BB%2BDJvJbVpoHCkob2KWphEMOHZysMGOqUB6y5xfwaxG4rGs%2F0dHdwHbmtvyVKCHkIUxsDwvU3MLRnxgwWMfQcofKCJc24ADwFzOEtodac%2F8SsvVqkZHwJTIZUqfw1bb5JAFcltvsuvgQm77CHStQCswKNeWyHEvxXjrf35I%2F3ReV%2By5UE5%2BdF4PcP4xzH7ELJJfD9i3zpMADLZn4UKuLEikLuXZND0QO1EPhT8Cl%2F%2BtLcuJ84n5cevfufjHIlv&X-Amz-Signature=cbcdc181753f745f87536bd4502c48ce4954860edcdd2ff11a170c24bbafd4e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T5SSXUC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgw6uAfYTqtqpXLaKyg2kd5MpatkYwT3P3iWfIteAShQIgZqc0iqowW90a7mRSmO5Xs0VZu8beQZYQFDNHHKdS520qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqkIVyCNm4n9ymJxSrcAxSCcFcoj3l9RWfRjWBSJmIs4%2BKzsgmVwV3dpEJWsQXffiK0gEqKi5pduxLITFlNp6OKaXqBcAlL0Qqt3zyz7zo5DNUfr660DlQpGtRiHrKIyQNPAoCxJRaSpc0yRPgq9NRk7WG9lcv99IsqPQ%2FU6xsLbXrg4McAVoGdXGIJmYFVTB2TfFu4TQ%2F1hO96jM8AhJjovIpQPvnjE65opP9eDy5lcTsNicRf4MKnCAsrQiuy7%2BCWDx7L%2FWHn5tLNK2aSDkAClyOEeobFsRuEUfSk9rmWHNcKTl78eTO%2BkQJLlOU7pdlLmo85KPKEg%2BCNc1wjBKzkZAitk049WGYU%2FTcF%2F1Uov9tOsmWZCEETiAAfo9RCpylwNZL5MIxK4SW1CKt00NmeGyGV7qBpmWIDnkbbdAjAEGdGk7QsX2D8jWQuD5EvdvOtKNnivdrSXWqtehJMikBsAB7l0hTCpMKsRCMDmKvWVmA5%2BuM%2Fv12Mobs7qh0%2FUc0nV1pFSRO0KWTUyEICZLhwrwSyNJfaV%2BpyZAAJi%2BgzeQ%2BUedgSeqrxeIEXQoMylXD491lBxa1PJWjEDr4Bc%2FoCRC%2FTjDoBkr133vIBqREpqrz%2FHUVhOcOy%2BD%2BB%2BDJvJbVpoHCkob2KWphEMOHZysMGOqUB6y5xfwaxG4rGs%2F0dHdwHbmtvyVKCHkIUxsDwvU3MLRnxgwWMfQcofKCJc24ADwFzOEtodac%2F8SsvVqkZHwJTIZUqfw1bb5JAFcltvsuvgQm77CHStQCswKNeWyHEvxXjrf35I%2F3ReV%2By5UE5%2BdF4PcP4xzH7ELJJfD9i3zpMADLZn4UKuLEikLuXZND0QO1EPhT8Cl%2F%2BtLcuJ84n5cevfufjHIlv&X-Amz-Signature=a94b04c12385c28d7ae31bdd5bc877038b04d241479ecfe1481b0257d7e3a4cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T5SSXUC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgw6uAfYTqtqpXLaKyg2kd5MpatkYwT3P3iWfIteAShQIgZqc0iqowW90a7mRSmO5Xs0VZu8beQZYQFDNHHKdS520qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqkIVyCNm4n9ymJxSrcAxSCcFcoj3l9RWfRjWBSJmIs4%2BKzsgmVwV3dpEJWsQXffiK0gEqKi5pduxLITFlNp6OKaXqBcAlL0Qqt3zyz7zo5DNUfr660DlQpGtRiHrKIyQNPAoCxJRaSpc0yRPgq9NRk7WG9lcv99IsqPQ%2FU6xsLbXrg4McAVoGdXGIJmYFVTB2TfFu4TQ%2F1hO96jM8AhJjovIpQPvnjE65opP9eDy5lcTsNicRf4MKnCAsrQiuy7%2BCWDx7L%2FWHn5tLNK2aSDkAClyOEeobFsRuEUfSk9rmWHNcKTl78eTO%2BkQJLlOU7pdlLmo85KPKEg%2BCNc1wjBKzkZAitk049WGYU%2FTcF%2F1Uov9tOsmWZCEETiAAfo9RCpylwNZL5MIxK4SW1CKt00NmeGyGV7qBpmWIDnkbbdAjAEGdGk7QsX2D8jWQuD5EvdvOtKNnivdrSXWqtehJMikBsAB7l0hTCpMKsRCMDmKvWVmA5%2BuM%2Fv12Mobs7qh0%2FUc0nV1pFSRO0KWTUyEICZLhwrwSyNJfaV%2BpyZAAJi%2BgzeQ%2BUedgSeqrxeIEXQoMylXD491lBxa1PJWjEDr4Bc%2FoCRC%2FTjDoBkr133vIBqREpqrz%2FHUVhOcOy%2BD%2BB%2BDJvJbVpoHCkob2KWphEMOHZysMGOqUB6y5xfwaxG4rGs%2F0dHdwHbmtvyVKCHkIUxsDwvU3MLRnxgwWMfQcofKCJc24ADwFzOEtodac%2F8SsvVqkZHwJTIZUqfw1bb5JAFcltvsuvgQm77CHStQCswKNeWyHEvxXjrf35I%2F3ReV%2By5UE5%2BdF4PcP4xzH7ELJJfD9i3zpMADLZn4UKuLEikLuXZND0QO1EPhT8Cl%2F%2BtLcuJ84n5cevfufjHIlv&X-Amz-Signature=129cb31227f195f40cf7d2a440583120b0464bd711fb7f381cd62f7c6a5daddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T5SSXUC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T190336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgw6uAfYTqtqpXLaKyg2kd5MpatkYwT3P3iWfIteAShQIgZqc0iqowW90a7mRSmO5Xs0VZu8beQZYQFDNHHKdS520qiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqkIVyCNm4n9ymJxSrcAxSCcFcoj3l9RWfRjWBSJmIs4%2BKzsgmVwV3dpEJWsQXffiK0gEqKi5pduxLITFlNp6OKaXqBcAlL0Qqt3zyz7zo5DNUfr660DlQpGtRiHrKIyQNPAoCxJRaSpc0yRPgq9NRk7WG9lcv99IsqPQ%2FU6xsLbXrg4McAVoGdXGIJmYFVTB2TfFu4TQ%2F1hO96jM8AhJjovIpQPvnjE65opP9eDy5lcTsNicRf4MKnCAsrQiuy7%2BCWDx7L%2FWHn5tLNK2aSDkAClyOEeobFsRuEUfSk9rmWHNcKTl78eTO%2BkQJLlOU7pdlLmo85KPKEg%2BCNc1wjBKzkZAitk049WGYU%2FTcF%2F1Uov9tOsmWZCEETiAAfo9RCpylwNZL5MIxK4SW1CKt00NmeGyGV7qBpmWIDnkbbdAjAEGdGk7QsX2D8jWQuD5EvdvOtKNnivdrSXWqtehJMikBsAB7l0hTCpMKsRCMDmKvWVmA5%2BuM%2Fv12Mobs7qh0%2FUc0nV1pFSRO0KWTUyEICZLhwrwSyNJfaV%2BpyZAAJi%2BgzeQ%2BUedgSeqrxeIEXQoMylXD491lBxa1PJWjEDr4Bc%2FoCRC%2FTjDoBkr133vIBqREpqrz%2FHUVhOcOy%2BD%2BB%2BDJvJbVpoHCkob2KWphEMOHZysMGOqUB6y5xfwaxG4rGs%2F0dHdwHbmtvyVKCHkIUxsDwvU3MLRnxgwWMfQcofKCJc24ADwFzOEtodac%2F8SsvVqkZHwJTIZUqfw1bb5JAFcltvsuvgQm77CHStQCswKNeWyHEvxXjrf35I%2F3ReV%2By5UE5%2BdF4PcP4xzH7ELJJfD9i3zpMADLZn4UKuLEikLuXZND0QO1EPhT8Cl%2F%2BtLcuJ84n5cevfufjHIlv&X-Amz-Signature=fb8e923f03d154b1998df2d71a1a9b4e5a1e1776079985f188a9f395c6a915c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
