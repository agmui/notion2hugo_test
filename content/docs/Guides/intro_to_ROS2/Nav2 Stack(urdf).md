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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBAINST6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIF8c49HFFcT9Ned3GU54%2BPJ51jgTkSZroQAhK5dvYZsQAiA79v2stkuvl8qR9E7hrtjhD1k1xb%2BqrjepWqajbLC3xSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMvse%2F9qY4XvBKSiq8KtwD%2FAykxdz0oVAXP63mK0vRFwdtO1P4KicWabft%2FyH3uKTtxAFjLF2MRIBLp3V40EFxDQCOvLGefHenAs4CnAXg44NpqIRExP%2FV4jJABNsiPWpZ%2BMr5DbRnoJ07KqT8zzwfvtNtcjnDOFKod0%2FAC7ajsxL6PUqnZj2zIKD25JtpdlcFlhnD4l%2FBt2wfIdjG0dUZjAu3Ew%2Ftcmdsov7yaC4dGSLp0DII%2BOWCPoGzoUJ0YhGYRV9BG1NWbBwUQPo2h%2B1E91O1oNGnVeGuRo3qdUfrYYCUdUOQp45HTnnlsncCDKrdvsf6qe%2FkkRj29jX6noDJHIDObRDehdkAKL95bNlm4aYW3o%2BGZjVz60D1J6pDPR3%2BaKKxyd488nOagSYF0M9B92FbFFHoOvMNS%2BaEfBgkpVhGvWV9v4Ppz8Ur5kOuoTtvAriJSfmouhAkproo9GtrDP6Z3KgXdxTbEJynr8ANe4phxe8lZ6DHE0U%2BPqSQQ6X4Fa77P8k%2BEEOpxqlHHjH097DN%2B8Ym9b%2FXeAnNn7Y2iQBK5Vgbn3p6rIe3mAnMNjwtJjL39ddrBEy2EkPSHlrFtiKERJD14m1gz1XRPhRQvJDbqBMN%2BzBZ5zxtXx0PKsKv2btr34tY5Ze6SyowlpmqwwY6pgE6NCW%2FrYXaOsELzlryBNVZ9vhfiPKj0p9DaN8PCWQaMnyQ%2Bybq1aa%2BVAo0qvObH1xlh4Wle5DaiSZQ9MrSPjb%2BEufl9zPWMtxLG5doKPT9N1hbHoF9lmqWi94wCLhNcQG%2BA2usMS7Pq6kBHg5EP5uCu02uiuGgOd56PeDc6h%2B7PE%2FF794owFFVHzqkDCKH%2BqdxAszw3WAr8w9zSCCjkR%2F66HoJBDkb&X-Amz-Signature=5ed1b68e76c2788cbe23fe302b35d74ad38b18a39d0bc99ba4a0e2f5db8db0f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBAINST6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIF8c49HFFcT9Ned3GU54%2BPJ51jgTkSZroQAhK5dvYZsQAiA79v2stkuvl8qR9E7hrtjhD1k1xb%2BqrjepWqajbLC3xSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMvse%2F9qY4XvBKSiq8KtwD%2FAykxdz0oVAXP63mK0vRFwdtO1P4KicWabft%2FyH3uKTtxAFjLF2MRIBLp3V40EFxDQCOvLGefHenAs4CnAXg44NpqIRExP%2FV4jJABNsiPWpZ%2BMr5DbRnoJ07KqT8zzwfvtNtcjnDOFKod0%2FAC7ajsxL6PUqnZj2zIKD25JtpdlcFlhnD4l%2FBt2wfIdjG0dUZjAu3Ew%2Ftcmdsov7yaC4dGSLp0DII%2BOWCPoGzoUJ0YhGYRV9BG1NWbBwUQPo2h%2B1E91O1oNGnVeGuRo3qdUfrYYCUdUOQp45HTnnlsncCDKrdvsf6qe%2FkkRj29jX6noDJHIDObRDehdkAKL95bNlm4aYW3o%2BGZjVz60D1J6pDPR3%2BaKKxyd488nOagSYF0M9B92FbFFHoOvMNS%2BaEfBgkpVhGvWV9v4Ppz8Ur5kOuoTtvAriJSfmouhAkproo9GtrDP6Z3KgXdxTbEJynr8ANe4phxe8lZ6DHE0U%2BPqSQQ6X4Fa77P8k%2BEEOpxqlHHjH097DN%2B8Ym9b%2FXeAnNn7Y2iQBK5Vgbn3p6rIe3mAnMNjwtJjL39ddrBEy2EkPSHlrFtiKERJD14m1gz1XRPhRQvJDbqBMN%2BzBZ5zxtXx0PKsKv2btr34tY5Ze6SyowlpmqwwY6pgE6NCW%2FrYXaOsELzlryBNVZ9vhfiPKj0p9DaN8PCWQaMnyQ%2Bybq1aa%2BVAo0qvObH1xlh4Wle5DaiSZQ9MrSPjb%2BEufl9zPWMtxLG5doKPT9N1hbHoF9lmqWi94wCLhNcQG%2BA2usMS7Pq6kBHg5EP5uCu02uiuGgOd56PeDc6h%2B7PE%2FF794owFFVHzqkDCKH%2BqdxAszw3WAr8w9zSCCjkR%2F66HoJBDkb&X-Amz-Signature=29a5293a6da2d4f83a2c6ec81e173e92963b17f8544e8c646e8aca7bf1b8aa9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBAINST6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIF8c49HFFcT9Ned3GU54%2BPJ51jgTkSZroQAhK5dvYZsQAiA79v2stkuvl8qR9E7hrtjhD1k1xb%2BqrjepWqajbLC3xSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMvse%2F9qY4XvBKSiq8KtwD%2FAykxdz0oVAXP63mK0vRFwdtO1P4KicWabft%2FyH3uKTtxAFjLF2MRIBLp3V40EFxDQCOvLGefHenAs4CnAXg44NpqIRExP%2FV4jJABNsiPWpZ%2BMr5DbRnoJ07KqT8zzwfvtNtcjnDOFKod0%2FAC7ajsxL6PUqnZj2zIKD25JtpdlcFlhnD4l%2FBt2wfIdjG0dUZjAu3Ew%2Ftcmdsov7yaC4dGSLp0DII%2BOWCPoGzoUJ0YhGYRV9BG1NWbBwUQPo2h%2B1E91O1oNGnVeGuRo3qdUfrYYCUdUOQp45HTnnlsncCDKrdvsf6qe%2FkkRj29jX6noDJHIDObRDehdkAKL95bNlm4aYW3o%2BGZjVz60D1J6pDPR3%2BaKKxyd488nOagSYF0M9B92FbFFHoOvMNS%2BaEfBgkpVhGvWV9v4Ppz8Ur5kOuoTtvAriJSfmouhAkproo9GtrDP6Z3KgXdxTbEJynr8ANe4phxe8lZ6DHE0U%2BPqSQQ6X4Fa77P8k%2BEEOpxqlHHjH097DN%2B8Ym9b%2FXeAnNn7Y2iQBK5Vgbn3p6rIe3mAnMNjwtJjL39ddrBEy2EkPSHlrFtiKERJD14m1gz1XRPhRQvJDbqBMN%2BzBZ5zxtXx0PKsKv2btr34tY5Ze6SyowlpmqwwY6pgE6NCW%2FrYXaOsELzlryBNVZ9vhfiPKj0p9DaN8PCWQaMnyQ%2Bybq1aa%2BVAo0qvObH1xlh4Wle5DaiSZQ9MrSPjb%2BEufl9zPWMtxLG5doKPT9N1hbHoF9lmqWi94wCLhNcQG%2BA2usMS7Pq6kBHg5EP5uCu02uiuGgOd56PeDc6h%2B7PE%2FF794owFFVHzqkDCKH%2BqdxAszw3WAr8w9zSCCjkR%2F66HoJBDkb&X-Amz-Signature=9d52aaa9c96549a04f851b14fa3171369df65c8b80e1b092ccc2808db655ed22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBAINST6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIF8c49HFFcT9Ned3GU54%2BPJ51jgTkSZroQAhK5dvYZsQAiA79v2stkuvl8qR9E7hrtjhD1k1xb%2BqrjepWqajbLC3xSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMvse%2F9qY4XvBKSiq8KtwD%2FAykxdz0oVAXP63mK0vRFwdtO1P4KicWabft%2FyH3uKTtxAFjLF2MRIBLp3V40EFxDQCOvLGefHenAs4CnAXg44NpqIRExP%2FV4jJABNsiPWpZ%2BMr5DbRnoJ07KqT8zzwfvtNtcjnDOFKod0%2FAC7ajsxL6PUqnZj2zIKD25JtpdlcFlhnD4l%2FBt2wfIdjG0dUZjAu3Ew%2Ftcmdsov7yaC4dGSLp0DII%2BOWCPoGzoUJ0YhGYRV9BG1NWbBwUQPo2h%2B1E91O1oNGnVeGuRo3qdUfrYYCUdUOQp45HTnnlsncCDKrdvsf6qe%2FkkRj29jX6noDJHIDObRDehdkAKL95bNlm4aYW3o%2BGZjVz60D1J6pDPR3%2BaKKxyd488nOagSYF0M9B92FbFFHoOvMNS%2BaEfBgkpVhGvWV9v4Ppz8Ur5kOuoTtvAriJSfmouhAkproo9GtrDP6Z3KgXdxTbEJynr8ANe4phxe8lZ6DHE0U%2BPqSQQ6X4Fa77P8k%2BEEOpxqlHHjH097DN%2B8Ym9b%2FXeAnNn7Y2iQBK5Vgbn3p6rIe3mAnMNjwtJjL39ddrBEy2EkPSHlrFtiKERJD14m1gz1XRPhRQvJDbqBMN%2BzBZ5zxtXx0PKsKv2btr34tY5Ze6SyowlpmqwwY6pgE6NCW%2FrYXaOsELzlryBNVZ9vhfiPKj0p9DaN8PCWQaMnyQ%2Bybq1aa%2BVAo0qvObH1xlh4Wle5DaiSZQ9MrSPjb%2BEufl9zPWMtxLG5doKPT9N1hbHoF9lmqWi94wCLhNcQG%2BA2usMS7Pq6kBHg5EP5uCu02uiuGgOd56PeDc6h%2B7PE%2FF794owFFVHzqkDCKH%2BqdxAszw3WAr8w9zSCCjkR%2F66HoJBDkb&X-Amz-Signature=acabeb47921cd116a3cdec1abd953b350f5e461a8b5c7fb819014f3291302004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBAINST6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIF8c49HFFcT9Ned3GU54%2BPJ51jgTkSZroQAhK5dvYZsQAiA79v2stkuvl8qR9E7hrtjhD1k1xb%2BqrjepWqajbLC3xSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMvse%2F9qY4XvBKSiq8KtwD%2FAykxdz0oVAXP63mK0vRFwdtO1P4KicWabft%2FyH3uKTtxAFjLF2MRIBLp3V40EFxDQCOvLGefHenAs4CnAXg44NpqIRExP%2FV4jJABNsiPWpZ%2BMr5DbRnoJ07KqT8zzwfvtNtcjnDOFKod0%2FAC7ajsxL6PUqnZj2zIKD25JtpdlcFlhnD4l%2FBt2wfIdjG0dUZjAu3Ew%2Ftcmdsov7yaC4dGSLp0DII%2BOWCPoGzoUJ0YhGYRV9BG1NWbBwUQPo2h%2B1E91O1oNGnVeGuRo3qdUfrYYCUdUOQp45HTnnlsncCDKrdvsf6qe%2FkkRj29jX6noDJHIDObRDehdkAKL95bNlm4aYW3o%2BGZjVz60D1J6pDPR3%2BaKKxyd488nOagSYF0M9B92FbFFHoOvMNS%2BaEfBgkpVhGvWV9v4Ppz8Ur5kOuoTtvAriJSfmouhAkproo9GtrDP6Z3KgXdxTbEJynr8ANe4phxe8lZ6DHE0U%2BPqSQQ6X4Fa77P8k%2BEEOpxqlHHjH097DN%2B8Ym9b%2FXeAnNn7Y2iQBK5Vgbn3p6rIe3mAnMNjwtJjL39ddrBEy2EkPSHlrFtiKERJD14m1gz1XRPhRQvJDbqBMN%2BzBZ5zxtXx0PKsKv2btr34tY5Ze6SyowlpmqwwY6pgE6NCW%2FrYXaOsELzlryBNVZ9vhfiPKj0p9DaN8PCWQaMnyQ%2Bybq1aa%2BVAo0qvObH1xlh4Wle5DaiSZQ9MrSPjb%2BEufl9zPWMtxLG5doKPT9N1hbHoF9lmqWi94wCLhNcQG%2BA2usMS7Pq6kBHg5EP5uCu02uiuGgOd56PeDc6h%2B7PE%2FF794owFFVHzqkDCKH%2BqdxAszw3WAr8w9zSCCjkR%2F66HoJBDkb&X-Amz-Signature=c1c25f5e17fb28ac95807db832f1fae31a4862e6987a15f4bcb89525a10aa108&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBAINST6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T150810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIF8c49HFFcT9Ned3GU54%2BPJ51jgTkSZroQAhK5dvYZsQAiA79v2stkuvl8qR9E7hrtjhD1k1xb%2BqrjepWqajbLC3xSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMvse%2F9qY4XvBKSiq8KtwD%2FAykxdz0oVAXP63mK0vRFwdtO1P4KicWabft%2FyH3uKTtxAFjLF2MRIBLp3V40EFxDQCOvLGefHenAs4CnAXg44NpqIRExP%2FV4jJABNsiPWpZ%2BMr5DbRnoJ07KqT8zzwfvtNtcjnDOFKod0%2FAC7ajsxL6PUqnZj2zIKD25JtpdlcFlhnD4l%2FBt2wfIdjG0dUZjAu3Ew%2Ftcmdsov7yaC4dGSLp0DII%2BOWCPoGzoUJ0YhGYRV9BG1NWbBwUQPo2h%2B1E91O1oNGnVeGuRo3qdUfrYYCUdUOQp45HTnnlsncCDKrdvsf6qe%2FkkRj29jX6noDJHIDObRDehdkAKL95bNlm4aYW3o%2BGZjVz60D1J6pDPR3%2BaKKxyd488nOagSYF0M9B92FbFFHoOvMNS%2BaEfBgkpVhGvWV9v4Ppz8Ur5kOuoTtvAriJSfmouhAkproo9GtrDP6Z3KgXdxTbEJynr8ANe4phxe8lZ6DHE0U%2BPqSQQ6X4Fa77P8k%2BEEOpxqlHHjH097DN%2B8Ym9b%2FXeAnNn7Y2iQBK5Vgbn3p6rIe3mAnMNjwtJjL39ddrBEy2EkPSHlrFtiKERJD14m1gz1XRPhRQvJDbqBMN%2BzBZ5zxtXx0PKsKv2btr34tY5Ze6SyowlpmqwwY6pgE6NCW%2FrYXaOsELzlryBNVZ9vhfiPKj0p9DaN8PCWQaMnyQ%2Bybq1aa%2BVAo0qvObH1xlh4Wle5DaiSZQ9MrSPjb%2BEufl9zPWMtxLG5doKPT9N1hbHoF9lmqWi94wCLhNcQG%2BA2usMS7Pq6kBHg5EP5uCu02uiuGgOd56PeDc6h%2B7PE%2FF794owFFVHzqkDCKH%2BqdxAszw3WAr8w9zSCCjkR%2F66HoJBDkb&X-Amz-Signature=a02167aa7835d747a83fbb78d47995379650a3de7498513d5ac3e148004fe9d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
