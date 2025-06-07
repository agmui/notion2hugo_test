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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JBAUIET%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpyAWtGXTdTFN%2BOaXbNsc9bVkwepXREGpZmLqzIaFLyAiBFw1on%2B%2BloDh6jB%2FdCeY7htAOMz1Ol8TGLXM05WKHdrCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMxMEOETo4a69wU5DcKtwDSrdG41WHNoTYldXL087ab%2B3TdrGk%2Byr1m9ulQ%2BMjSVCa%2B%2BwSWj9P4li0JixeJ2N4RIa6mxgJLiivK9Dm86zGwJ%2FoWwu7IV7ayYDucZXdUdGvVMhfgVhVrUEzEN%2BRagddgLXpktdXSjBYEEZjRqkfh00iKvNGWVI6puRX%2BEZ4F5Zddrg51bkTWPFE4pg1iF3bxT4wJ6M%2F1oqHQKdvY9Agbmiyewh0E3d5%2FwFJ5Wh2N8%2Bq04lc3q37eY8PmbtDW38y7eOrSOqtx3CZWK1FvnOeeTZ%2Be4kb0unCurOEeUm2NfHTVs1oykhuz1F%2BoE3ydLfqSvGMG%2BTrJpBBN9NfVk915spA9zUItQMd%2F8%2FLYgtcMTlFPSvDEMJdTvPNc0Q65n86yC8qSQYCXKuTPGjDg7pHLlu0yUTw%2F%2FpSD6L%2BNGNCGZ0GC6zRDlDg4jkp0gXpl%2F2DqW5FOw%2B4QhKeTwSJqI1f6r2Bahi1VeQVH95MH2SdVKeTYexaoKkKEaeBzw02K24KigguH2X4OFqQJsqlR2KKgo7jg%2FSXesm0y0HUqW%2FsOY8Sbq73cm8VJeNSx%2BpF%2F3rjIePrvvvq%2FkhMtcL0s6U1CjdGFfO8edqAqmVC3oWQNES5sX8aGdO1xrR%2F0Agw35WSwgY6pgFKtewShwcvaWTPGsEBYt%2BBfun%2F0%2FF%2Fa6vFKGU%2BQS0mP1m76X0FxDq%2FupawzPV3MxAsZJaB1pRpDb1CetKdpA273pONUuSJj4Aus6Vsnd5mSqoCdmcbrTtREBJHK1YVM7%2BYzNh4sfL8rLzXd3KgtZuLDsHKFUgvZB0pi2%2BeEeK%2BOyxqJBYYLFgYKr7si%2BTCG7qlA0lNBMmcdow5zK5Edy0aEW2ymwbC&X-Amz-Signature=21764225282ffb5c55d3dc854006b9f80abe2fff4a7684e82682dd25f1288129&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JBAUIET%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpyAWtGXTdTFN%2BOaXbNsc9bVkwepXREGpZmLqzIaFLyAiBFw1on%2B%2BloDh6jB%2FdCeY7htAOMz1Ol8TGLXM05WKHdrCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMxMEOETo4a69wU5DcKtwDSrdG41WHNoTYldXL087ab%2B3TdrGk%2Byr1m9ulQ%2BMjSVCa%2B%2BwSWj9P4li0JixeJ2N4RIa6mxgJLiivK9Dm86zGwJ%2FoWwu7IV7ayYDucZXdUdGvVMhfgVhVrUEzEN%2BRagddgLXpktdXSjBYEEZjRqkfh00iKvNGWVI6puRX%2BEZ4F5Zddrg51bkTWPFE4pg1iF3bxT4wJ6M%2F1oqHQKdvY9Agbmiyewh0E3d5%2FwFJ5Wh2N8%2Bq04lc3q37eY8PmbtDW38y7eOrSOqtx3CZWK1FvnOeeTZ%2Be4kb0unCurOEeUm2NfHTVs1oykhuz1F%2BoE3ydLfqSvGMG%2BTrJpBBN9NfVk915spA9zUItQMd%2F8%2FLYgtcMTlFPSvDEMJdTvPNc0Q65n86yC8qSQYCXKuTPGjDg7pHLlu0yUTw%2F%2FpSD6L%2BNGNCGZ0GC6zRDlDg4jkp0gXpl%2F2DqW5FOw%2B4QhKeTwSJqI1f6r2Bahi1VeQVH95MH2SdVKeTYexaoKkKEaeBzw02K24KigguH2X4OFqQJsqlR2KKgo7jg%2FSXesm0y0HUqW%2FsOY8Sbq73cm8VJeNSx%2BpF%2F3rjIePrvvvq%2FkhMtcL0s6U1CjdGFfO8edqAqmVC3oWQNES5sX8aGdO1xrR%2F0Agw35WSwgY6pgFKtewShwcvaWTPGsEBYt%2BBfun%2F0%2FF%2Fa6vFKGU%2BQS0mP1m76X0FxDq%2FupawzPV3MxAsZJaB1pRpDb1CetKdpA273pONUuSJj4Aus6Vsnd5mSqoCdmcbrTtREBJHK1YVM7%2BYzNh4sfL8rLzXd3KgtZuLDsHKFUgvZB0pi2%2BeEeK%2BOyxqJBYYLFgYKr7si%2BTCG7qlA0lNBMmcdow5zK5Edy0aEW2ymwbC&X-Amz-Signature=e64fbe825849891c91d4229618c0e4776c7cc2bf1b36c9ea83fc498e73c93216&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JBAUIET%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpyAWtGXTdTFN%2BOaXbNsc9bVkwepXREGpZmLqzIaFLyAiBFw1on%2B%2BloDh6jB%2FdCeY7htAOMz1Ol8TGLXM05WKHdrCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMxMEOETo4a69wU5DcKtwDSrdG41WHNoTYldXL087ab%2B3TdrGk%2Byr1m9ulQ%2BMjSVCa%2B%2BwSWj9P4li0JixeJ2N4RIa6mxgJLiivK9Dm86zGwJ%2FoWwu7IV7ayYDucZXdUdGvVMhfgVhVrUEzEN%2BRagddgLXpktdXSjBYEEZjRqkfh00iKvNGWVI6puRX%2BEZ4F5Zddrg51bkTWPFE4pg1iF3bxT4wJ6M%2F1oqHQKdvY9Agbmiyewh0E3d5%2FwFJ5Wh2N8%2Bq04lc3q37eY8PmbtDW38y7eOrSOqtx3CZWK1FvnOeeTZ%2Be4kb0unCurOEeUm2NfHTVs1oykhuz1F%2BoE3ydLfqSvGMG%2BTrJpBBN9NfVk915spA9zUItQMd%2F8%2FLYgtcMTlFPSvDEMJdTvPNc0Q65n86yC8qSQYCXKuTPGjDg7pHLlu0yUTw%2F%2FpSD6L%2BNGNCGZ0GC6zRDlDg4jkp0gXpl%2F2DqW5FOw%2B4QhKeTwSJqI1f6r2Bahi1VeQVH95MH2SdVKeTYexaoKkKEaeBzw02K24KigguH2X4OFqQJsqlR2KKgo7jg%2FSXesm0y0HUqW%2FsOY8Sbq73cm8VJeNSx%2BpF%2F3rjIePrvvvq%2FkhMtcL0s6U1CjdGFfO8edqAqmVC3oWQNES5sX8aGdO1xrR%2F0Agw35WSwgY6pgFKtewShwcvaWTPGsEBYt%2BBfun%2F0%2FF%2Fa6vFKGU%2BQS0mP1m76X0FxDq%2FupawzPV3MxAsZJaB1pRpDb1CetKdpA273pONUuSJj4Aus6Vsnd5mSqoCdmcbrTtREBJHK1YVM7%2BYzNh4sfL8rLzXd3KgtZuLDsHKFUgvZB0pi2%2BeEeK%2BOyxqJBYYLFgYKr7si%2BTCG7qlA0lNBMmcdow5zK5Edy0aEW2ymwbC&X-Amz-Signature=fcc2f814eb33d11ca3c0cc8a14e63dd7dbb343eb23f1a7b29ba461748db38469&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JBAUIET%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpyAWtGXTdTFN%2BOaXbNsc9bVkwepXREGpZmLqzIaFLyAiBFw1on%2B%2BloDh6jB%2FdCeY7htAOMz1Ol8TGLXM05WKHdrCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMxMEOETo4a69wU5DcKtwDSrdG41WHNoTYldXL087ab%2B3TdrGk%2Byr1m9ulQ%2BMjSVCa%2B%2BwSWj9P4li0JixeJ2N4RIa6mxgJLiivK9Dm86zGwJ%2FoWwu7IV7ayYDucZXdUdGvVMhfgVhVrUEzEN%2BRagddgLXpktdXSjBYEEZjRqkfh00iKvNGWVI6puRX%2BEZ4F5Zddrg51bkTWPFE4pg1iF3bxT4wJ6M%2F1oqHQKdvY9Agbmiyewh0E3d5%2FwFJ5Wh2N8%2Bq04lc3q37eY8PmbtDW38y7eOrSOqtx3CZWK1FvnOeeTZ%2Be4kb0unCurOEeUm2NfHTVs1oykhuz1F%2BoE3ydLfqSvGMG%2BTrJpBBN9NfVk915spA9zUItQMd%2F8%2FLYgtcMTlFPSvDEMJdTvPNc0Q65n86yC8qSQYCXKuTPGjDg7pHLlu0yUTw%2F%2FpSD6L%2BNGNCGZ0GC6zRDlDg4jkp0gXpl%2F2DqW5FOw%2B4QhKeTwSJqI1f6r2Bahi1VeQVH95MH2SdVKeTYexaoKkKEaeBzw02K24KigguH2X4OFqQJsqlR2KKgo7jg%2FSXesm0y0HUqW%2FsOY8Sbq73cm8VJeNSx%2BpF%2F3rjIePrvvvq%2FkhMtcL0s6U1CjdGFfO8edqAqmVC3oWQNES5sX8aGdO1xrR%2F0Agw35WSwgY6pgFKtewShwcvaWTPGsEBYt%2BBfun%2F0%2FF%2Fa6vFKGU%2BQS0mP1m76X0FxDq%2FupawzPV3MxAsZJaB1pRpDb1CetKdpA273pONUuSJj4Aus6Vsnd5mSqoCdmcbrTtREBJHK1YVM7%2BYzNh4sfL8rLzXd3KgtZuLDsHKFUgvZB0pi2%2BeEeK%2BOyxqJBYYLFgYKr7si%2BTCG7qlA0lNBMmcdow5zK5Edy0aEW2ymwbC&X-Amz-Signature=0a9ad92066a219aa2c8e9d7d49eed6f007d1b03bb4f97b0e00585e8ac2de2000&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JBAUIET%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpyAWtGXTdTFN%2BOaXbNsc9bVkwepXREGpZmLqzIaFLyAiBFw1on%2B%2BloDh6jB%2FdCeY7htAOMz1Ol8TGLXM05WKHdrCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMxMEOETo4a69wU5DcKtwDSrdG41WHNoTYldXL087ab%2B3TdrGk%2Byr1m9ulQ%2BMjSVCa%2B%2BwSWj9P4li0JixeJ2N4RIa6mxgJLiivK9Dm86zGwJ%2FoWwu7IV7ayYDucZXdUdGvVMhfgVhVrUEzEN%2BRagddgLXpktdXSjBYEEZjRqkfh00iKvNGWVI6puRX%2BEZ4F5Zddrg51bkTWPFE4pg1iF3bxT4wJ6M%2F1oqHQKdvY9Agbmiyewh0E3d5%2FwFJ5Wh2N8%2Bq04lc3q37eY8PmbtDW38y7eOrSOqtx3CZWK1FvnOeeTZ%2Be4kb0unCurOEeUm2NfHTVs1oykhuz1F%2BoE3ydLfqSvGMG%2BTrJpBBN9NfVk915spA9zUItQMd%2F8%2FLYgtcMTlFPSvDEMJdTvPNc0Q65n86yC8qSQYCXKuTPGjDg7pHLlu0yUTw%2F%2FpSD6L%2BNGNCGZ0GC6zRDlDg4jkp0gXpl%2F2DqW5FOw%2B4QhKeTwSJqI1f6r2Bahi1VeQVH95MH2SdVKeTYexaoKkKEaeBzw02K24KigguH2X4OFqQJsqlR2KKgo7jg%2FSXesm0y0HUqW%2FsOY8Sbq73cm8VJeNSx%2BpF%2F3rjIePrvvvq%2FkhMtcL0s6U1CjdGFfO8edqAqmVC3oWQNES5sX8aGdO1xrR%2F0Agw35WSwgY6pgFKtewShwcvaWTPGsEBYt%2BBfun%2F0%2FF%2Fa6vFKGU%2BQS0mP1m76X0FxDq%2FupawzPV3MxAsZJaB1pRpDb1CetKdpA273pONUuSJj4Aus6Vsnd5mSqoCdmcbrTtREBJHK1YVM7%2BYzNh4sfL8rLzXd3KgtZuLDsHKFUgvZB0pi2%2BeEeK%2BOyxqJBYYLFgYKr7si%2BTCG7qlA0lNBMmcdow5zK5Edy0aEW2ymwbC&X-Amz-Signature=d04357119016ad7a67e2a1d156f1d3e6bc249174d8743a3fdfac35c1ef6a8f42&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JBAUIET%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T190220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpyAWtGXTdTFN%2BOaXbNsc9bVkwepXREGpZmLqzIaFLyAiBFw1on%2B%2BloDh6jB%2FdCeY7htAOMz1Ol8TGLXM05WKHdrCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMxMEOETo4a69wU5DcKtwDSrdG41WHNoTYldXL087ab%2B3TdrGk%2Byr1m9ulQ%2BMjSVCa%2B%2BwSWj9P4li0JixeJ2N4RIa6mxgJLiivK9Dm86zGwJ%2FoWwu7IV7ayYDucZXdUdGvVMhfgVhVrUEzEN%2BRagddgLXpktdXSjBYEEZjRqkfh00iKvNGWVI6puRX%2BEZ4F5Zddrg51bkTWPFE4pg1iF3bxT4wJ6M%2F1oqHQKdvY9Agbmiyewh0E3d5%2FwFJ5Wh2N8%2Bq04lc3q37eY8PmbtDW38y7eOrSOqtx3CZWK1FvnOeeTZ%2Be4kb0unCurOEeUm2NfHTVs1oykhuz1F%2BoE3ydLfqSvGMG%2BTrJpBBN9NfVk915spA9zUItQMd%2F8%2FLYgtcMTlFPSvDEMJdTvPNc0Q65n86yC8qSQYCXKuTPGjDg7pHLlu0yUTw%2F%2FpSD6L%2BNGNCGZ0GC6zRDlDg4jkp0gXpl%2F2DqW5FOw%2B4QhKeTwSJqI1f6r2Bahi1VeQVH95MH2SdVKeTYexaoKkKEaeBzw02K24KigguH2X4OFqQJsqlR2KKgo7jg%2FSXesm0y0HUqW%2FsOY8Sbq73cm8VJeNSx%2BpF%2F3rjIePrvvvq%2FkhMtcL0s6U1CjdGFfO8edqAqmVC3oWQNES5sX8aGdO1xrR%2F0Agw35WSwgY6pgFKtewShwcvaWTPGsEBYt%2BBfun%2F0%2FF%2Fa6vFKGU%2BQS0mP1m76X0FxDq%2FupawzPV3MxAsZJaB1pRpDb1CetKdpA273pONUuSJj4Aus6Vsnd5mSqoCdmcbrTtREBJHK1YVM7%2BYzNh4sfL8rLzXd3KgtZuLDsHKFUgvZB0pi2%2BeEeK%2BOyxqJBYYLFgYKr7si%2BTCG7qlA0lNBMmcdow5zK5Edy0aEW2ymwbC&X-Amz-Signature=241fbe531b8bfa97843b1155247a598ced7a59b1cc5157c71f9978ffb66e23cf&X-Amz-SignedHeaders=host&x-id=GetObject)
