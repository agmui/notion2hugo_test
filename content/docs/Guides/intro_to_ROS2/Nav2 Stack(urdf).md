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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQTPNZY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQD%2FmheWLRmO0ameCsEc0sHvIrwcKzFTCMFxHiF9LKmaYQIgBojzb6slNsKM3iZkIA6DH99mcbQ7TsifMow6CHzk97gqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrWyVOlv2d2DkXUtSrcAwPBHuW%2BhPUaRbo%2Bt78zForYKS%2Ftixw%2FZqbdmQHiAeKM6QjXbFaOmVvXnxoT%2BOorhHnd5RM5cgqUR9Nf3EcHb2JtxK1EBiTxLgAFx3ObmrMCzWVEiJDAViOiHM2qmp8ghOAp63W4uo70hWcCIn8YS9za2HuZ%2FqZWiCQQCAByK7PkNaocbVRE4tXROjuEcmyUiRk%2FMsq0znh0AMlKLUY%2Bx%2BbYe6ME1EIum3B%2BBBctfYX82CATIhgqNRqfXPh8N0v%2F1iIpfOI6bYDcyqI5CGUgyEDj5%2BWMpro3ZM4yjiE3ucssyerobHVB8cQuO2L1XuL%2Fk0E4ZLv5sBcXSrTBWJifyBn%2BJkd%2F0401AfR%2FRPLh7%2Ff6lzTC1VezTvvzG%2FjG0rfEtIdmhtONdxl76P1DB7D64faVUG6YsQPA9tltDff0gbz84kfaC%2FuFzINymWURwzAvSB0zJo2YLjV8zLsM%2BPcPuwoVyBCe5DiJWnwKnvGO349zi7XZcr2PVwfxuuZw%2BEnjbCJTMSY%2F85tIt0qg%2Fsgu%2FM9aMqv1C67NixOuPnHi%2Bhe2CgjE2vXMVicKVH4VXrthzZP4SgwH9mZm6yOLbMK5yG5a9doO2YftZ47kspkPQF3J5wHfumnmMPIza%2Fg3MMLo7r4GOqUB6KyW6Oc3m5JaPrylWXS6dXDq2ykaB6NvteQcY5SY%2BI7VBRAWEWYj3DTcks3eO0JHKRrdFzO%2FKSEfLmji2f2trXZ6v%2BFVz5g5kQdahFaxaZfyuCgN66U6CN8Yk4c5NCWmscT2ykx%2BYDGoCpdgkJZAuJqGbmbo%2BN4s2JOsFR5acf0x0yY%2FkKmC5vKoYiYV3uJEQwvO0yTC8q8s%2BkfaThdpVtgpo3X%2F&X-Amz-Signature=f847f222ae1bcd2c4f2f62a6deeb15bfbbab1fe5cc5775d305f28e7c884d1617&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQTPNZY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQD%2FmheWLRmO0ameCsEc0sHvIrwcKzFTCMFxHiF9LKmaYQIgBojzb6slNsKM3iZkIA6DH99mcbQ7TsifMow6CHzk97gqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrWyVOlv2d2DkXUtSrcAwPBHuW%2BhPUaRbo%2Bt78zForYKS%2Ftixw%2FZqbdmQHiAeKM6QjXbFaOmVvXnxoT%2BOorhHnd5RM5cgqUR9Nf3EcHb2JtxK1EBiTxLgAFx3ObmrMCzWVEiJDAViOiHM2qmp8ghOAp63W4uo70hWcCIn8YS9za2HuZ%2FqZWiCQQCAByK7PkNaocbVRE4tXROjuEcmyUiRk%2FMsq0znh0AMlKLUY%2Bx%2BbYe6ME1EIum3B%2BBBctfYX82CATIhgqNRqfXPh8N0v%2F1iIpfOI6bYDcyqI5CGUgyEDj5%2BWMpro3ZM4yjiE3ucssyerobHVB8cQuO2L1XuL%2Fk0E4ZLv5sBcXSrTBWJifyBn%2BJkd%2F0401AfR%2FRPLh7%2Ff6lzTC1VezTvvzG%2FjG0rfEtIdmhtONdxl76P1DB7D64faVUG6YsQPA9tltDff0gbz84kfaC%2FuFzINymWURwzAvSB0zJo2YLjV8zLsM%2BPcPuwoVyBCe5DiJWnwKnvGO349zi7XZcr2PVwfxuuZw%2BEnjbCJTMSY%2F85tIt0qg%2Fsgu%2FM9aMqv1C67NixOuPnHi%2Bhe2CgjE2vXMVicKVH4VXrthzZP4SgwH9mZm6yOLbMK5yG5a9doO2YftZ47kspkPQF3J5wHfumnmMPIza%2Fg3MMLo7r4GOqUB6KyW6Oc3m5JaPrylWXS6dXDq2ykaB6NvteQcY5SY%2BI7VBRAWEWYj3DTcks3eO0JHKRrdFzO%2FKSEfLmji2f2trXZ6v%2BFVz5g5kQdahFaxaZfyuCgN66U6CN8Yk4c5NCWmscT2ykx%2BYDGoCpdgkJZAuJqGbmbo%2BN4s2JOsFR5acf0x0yY%2FkKmC5vKoYiYV3uJEQwvO0yTC8q8s%2BkfaThdpVtgpo3X%2F&X-Amz-Signature=5f0fcb495d7c5103b72938e2aa897f25a47599c1e83757ac6f2b446194290c00&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQTPNZY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQD%2FmheWLRmO0ameCsEc0sHvIrwcKzFTCMFxHiF9LKmaYQIgBojzb6slNsKM3iZkIA6DH99mcbQ7TsifMow6CHzk97gqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrWyVOlv2d2DkXUtSrcAwPBHuW%2BhPUaRbo%2Bt78zForYKS%2Ftixw%2FZqbdmQHiAeKM6QjXbFaOmVvXnxoT%2BOorhHnd5RM5cgqUR9Nf3EcHb2JtxK1EBiTxLgAFx3ObmrMCzWVEiJDAViOiHM2qmp8ghOAp63W4uo70hWcCIn8YS9za2HuZ%2FqZWiCQQCAByK7PkNaocbVRE4tXROjuEcmyUiRk%2FMsq0znh0AMlKLUY%2Bx%2BbYe6ME1EIum3B%2BBBctfYX82CATIhgqNRqfXPh8N0v%2F1iIpfOI6bYDcyqI5CGUgyEDj5%2BWMpro3ZM4yjiE3ucssyerobHVB8cQuO2L1XuL%2Fk0E4ZLv5sBcXSrTBWJifyBn%2BJkd%2F0401AfR%2FRPLh7%2Ff6lzTC1VezTvvzG%2FjG0rfEtIdmhtONdxl76P1DB7D64faVUG6YsQPA9tltDff0gbz84kfaC%2FuFzINymWURwzAvSB0zJo2YLjV8zLsM%2BPcPuwoVyBCe5DiJWnwKnvGO349zi7XZcr2PVwfxuuZw%2BEnjbCJTMSY%2F85tIt0qg%2Fsgu%2FM9aMqv1C67NixOuPnHi%2Bhe2CgjE2vXMVicKVH4VXrthzZP4SgwH9mZm6yOLbMK5yG5a9doO2YftZ47kspkPQF3J5wHfumnmMPIza%2Fg3MMLo7r4GOqUB6KyW6Oc3m5JaPrylWXS6dXDq2ykaB6NvteQcY5SY%2BI7VBRAWEWYj3DTcks3eO0JHKRrdFzO%2FKSEfLmji2f2trXZ6v%2BFVz5g5kQdahFaxaZfyuCgN66U6CN8Yk4c5NCWmscT2ykx%2BYDGoCpdgkJZAuJqGbmbo%2BN4s2JOsFR5acf0x0yY%2FkKmC5vKoYiYV3uJEQwvO0yTC8q8s%2BkfaThdpVtgpo3X%2F&X-Amz-Signature=4e7612075e0193ddfa7d149c7c6c8b44cc746c4c99a6611a0ef121a4f4f0064b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQTPNZY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQD%2FmheWLRmO0ameCsEc0sHvIrwcKzFTCMFxHiF9LKmaYQIgBojzb6slNsKM3iZkIA6DH99mcbQ7TsifMow6CHzk97gqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrWyVOlv2d2DkXUtSrcAwPBHuW%2BhPUaRbo%2Bt78zForYKS%2Ftixw%2FZqbdmQHiAeKM6QjXbFaOmVvXnxoT%2BOorhHnd5RM5cgqUR9Nf3EcHb2JtxK1EBiTxLgAFx3ObmrMCzWVEiJDAViOiHM2qmp8ghOAp63W4uo70hWcCIn8YS9za2HuZ%2FqZWiCQQCAByK7PkNaocbVRE4tXROjuEcmyUiRk%2FMsq0znh0AMlKLUY%2Bx%2BbYe6ME1EIum3B%2BBBctfYX82CATIhgqNRqfXPh8N0v%2F1iIpfOI6bYDcyqI5CGUgyEDj5%2BWMpro3ZM4yjiE3ucssyerobHVB8cQuO2L1XuL%2Fk0E4ZLv5sBcXSrTBWJifyBn%2BJkd%2F0401AfR%2FRPLh7%2Ff6lzTC1VezTvvzG%2FjG0rfEtIdmhtONdxl76P1DB7D64faVUG6YsQPA9tltDff0gbz84kfaC%2FuFzINymWURwzAvSB0zJo2YLjV8zLsM%2BPcPuwoVyBCe5DiJWnwKnvGO349zi7XZcr2PVwfxuuZw%2BEnjbCJTMSY%2F85tIt0qg%2Fsgu%2FM9aMqv1C67NixOuPnHi%2Bhe2CgjE2vXMVicKVH4VXrthzZP4SgwH9mZm6yOLbMK5yG5a9doO2YftZ47kspkPQF3J5wHfumnmMPIza%2Fg3MMLo7r4GOqUB6KyW6Oc3m5JaPrylWXS6dXDq2ykaB6NvteQcY5SY%2BI7VBRAWEWYj3DTcks3eO0JHKRrdFzO%2FKSEfLmji2f2trXZ6v%2BFVz5g5kQdahFaxaZfyuCgN66U6CN8Yk4c5NCWmscT2ykx%2BYDGoCpdgkJZAuJqGbmbo%2BN4s2JOsFR5acf0x0yY%2FkKmC5vKoYiYV3uJEQwvO0yTC8q8s%2BkfaThdpVtgpo3X%2F&X-Amz-Signature=cc39c3c060b7d9db6640a256892371587f336adea3778bd009dfbe9dc558c8c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQTPNZY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQD%2FmheWLRmO0ameCsEc0sHvIrwcKzFTCMFxHiF9LKmaYQIgBojzb6slNsKM3iZkIA6DH99mcbQ7TsifMow6CHzk97gqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrWyVOlv2d2DkXUtSrcAwPBHuW%2BhPUaRbo%2Bt78zForYKS%2Ftixw%2FZqbdmQHiAeKM6QjXbFaOmVvXnxoT%2BOorhHnd5RM5cgqUR9Nf3EcHb2JtxK1EBiTxLgAFx3ObmrMCzWVEiJDAViOiHM2qmp8ghOAp63W4uo70hWcCIn8YS9za2HuZ%2FqZWiCQQCAByK7PkNaocbVRE4tXROjuEcmyUiRk%2FMsq0znh0AMlKLUY%2Bx%2BbYe6ME1EIum3B%2BBBctfYX82CATIhgqNRqfXPh8N0v%2F1iIpfOI6bYDcyqI5CGUgyEDj5%2BWMpro3ZM4yjiE3ucssyerobHVB8cQuO2L1XuL%2Fk0E4ZLv5sBcXSrTBWJifyBn%2BJkd%2F0401AfR%2FRPLh7%2Ff6lzTC1VezTvvzG%2FjG0rfEtIdmhtONdxl76P1DB7D64faVUG6YsQPA9tltDff0gbz84kfaC%2FuFzINymWURwzAvSB0zJo2YLjV8zLsM%2BPcPuwoVyBCe5DiJWnwKnvGO349zi7XZcr2PVwfxuuZw%2BEnjbCJTMSY%2F85tIt0qg%2Fsgu%2FM9aMqv1C67NixOuPnHi%2Bhe2CgjE2vXMVicKVH4VXrthzZP4SgwH9mZm6yOLbMK5yG5a9doO2YftZ47kspkPQF3J5wHfumnmMPIza%2Fg3MMLo7r4GOqUB6KyW6Oc3m5JaPrylWXS6dXDq2ykaB6NvteQcY5SY%2BI7VBRAWEWYj3DTcks3eO0JHKRrdFzO%2FKSEfLmji2f2trXZ6v%2BFVz5g5kQdahFaxaZfyuCgN66U6CN8Yk4c5NCWmscT2ykx%2BYDGoCpdgkJZAuJqGbmbo%2BN4s2JOsFR5acf0x0yY%2FkKmC5vKoYiYV3uJEQwvO0yTC8q8s%2BkfaThdpVtgpo3X%2F&X-Amz-Signature=b1e55e08efb0d1c50ab42dc0f2c50ddca3de63f3119595a7b29b4e9bb028ca3e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQTPNZY%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQD%2FmheWLRmO0ameCsEc0sHvIrwcKzFTCMFxHiF9LKmaYQIgBojzb6slNsKM3iZkIA6DH99mcbQ7TsifMow6CHzk97gqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIrWyVOlv2d2DkXUtSrcAwPBHuW%2BhPUaRbo%2Bt78zForYKS%2Ftixw%2FZqbdmQHiAeKM6QjXbFaOmVvXnxoT%2BOorhHnd5RM5cgqUR9Nf3EcHb2JtxK1EBiTxLgAFx3ObmrMCzWVEiJDAViOiHM2qmp8ghOAp63W4uo70hWcCIn8YS9za2HuZ%2FqZWiCQQCAByK7PkNaocbVRE4tXROjuEcmyUiRk%2FMsq0znh0AMlKLUY%2Bx%2BbYe6ME1EIum3B%2BBBctfYX82CATIhgqNRqfXPh8N0v%2F1iIpfOI6bYDcyqI5CGUgyEDj5%2BWMpro3ZM4yjiE3ucssyerobHVB8cQuO2L1XuL%2Fk0E4ZLv5sBcXSrTBWJifyBn%2BJkd%2F0401AfR%2FRPLh7%2Ff6lzTC1VezTvvzG%2FjG0rfEtIdmhtONdxl76P1DB7D64faVUG6YsQPA9tltDff0gbz84kfaC%2FuFzINymWURwzAvSB0zJo2YLjV8zLsM%2BPcPuwoVyBCe5DiJWnwKnvGO349zi7XZcr2PVwfxuuZw%2BEnjbCJTMSY%2F85tIt0qg%2Fsgu%2FM9aMqv1C67NixOuPnHi%2Bhe2CgjE2vXMVicKVH4VXrthzZP4SgwH9mZm6yOLbMK5yG5a9doO2YftZ47kspkPQF3J5wHfumnmMPIza%2Fg3MMLo7r4GOqUB6KyW6Oc3m5JaPrylWXS6dXDq2ykaB6NvteQcY5SY%2BI7VBRAWEWYj3DTcks3eO0JHKRrdFzO%2FKSEfLmji2f2trXZ6v%2BFVz5g5kQdahFaxaZfyuCgN66U6CN8Yk4c5NCWmscT2ykx%2BYDGoCpdgkJZAuJqGbmbo%2BN4s2JOsFR5acf0x0yY%2FkKmC5vKoYiYV3uJEQwvO0yTC8q8s%2BkfaThdpVtgpo3X%2F&X-Amz-Signature=8fc406709ebb6f204d3a05b942d65e62051b0e140404086e2619db5f58ef9652&X-Amz-SignedHeaders=host&x-id=GetObject)
