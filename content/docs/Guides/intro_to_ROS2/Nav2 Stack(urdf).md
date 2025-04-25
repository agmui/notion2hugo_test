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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDVFSDFD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClBmiuTg2IbJge7%2FbSCULaLiu25v7Lc17UHhcvJmTHYQIgS%2FhRIF3YBYKpEAQXAjN0qd%2BbnUL2X0Ls%2FgVOAZa0654q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDaCgCkMD531p1%2FkpyrcA%2FFCmvlcDQv8%2B9ST1jYrQ23g%2FW4E8kyGKX00W3PeCDvLVqZTG3p%2BSE2f6MExri5s0Aj6wO8u8k7Mo7Q9CT6l6MAw1GwpmHvmCtWran2YCR5ifoMBtcdP5Y5Dv%2BJr9ORqrAdkXnB5AudfC0HSknNNeRBiyblhKbBwI8iBx%2Fi%2FWCG6LNPV2wA2oOqYy2N6c3XZ1C1YUcC80k1OMcnY%2FF1u%2BWIVoI%2FUysfuai7Z%2BNhGXIyN9ehPJJlfkIyD40TQfTrk3T%2Bg%2Btz7UDMftcvJ1fBF56NAG5OSk3OpGYujayd6VQsIcUrwBDaYNve6A9FA5p8vtYglu46QVfRgWgra6bKczgpFc1TDCefc0j%2FPMgiSCKRnXpvk%2BXBtwLdm6JyyOOANQ7QSgh4%2BCZQnTJWgqSh31ZrHCcMMYR9o2BVdt%2FgP9F0rG2DF22AZBBDMLugZmFtYagyzlxCo%2FMdgytfETCLjVQeI44TPlv0h5sPYbQsTsX4ESOldJ5u%2FkJn1FiILXUbqlZmudC7IsZ6dvZG%2B%2FfYHBsRYbHCG7hY%2B5fCDVMU%2FSkcbbWxeJbYxGO244djNvIvpSkwDN2n4GgkZ1QhXlkboRLOJIWksufln2HeXaBvsPn9nEdD77NkAlV3aCM%2B2MOHJrMAGOqUB8QOUhKHMcnQarg344oSdihQQKOl6VX81ND1PiqFCMwCntBuk6A%2Fu6FGU4miI6R5%2BFgc99sifmRtTNBdAmURtGNkQ1ijI5KdwRgsLOVdQAAw08GVsNSK0pyYgyEPCGGYh5aPurlb48Ti7E95dBuFGuDxtUs6g2UVAJCz4RgUu%2BUZjLof7cHDWcWMgcfHSP%2Fg6Dt%2FqCrODq53SzJoqMDUTuio9K7jS&X-Amz-Signature=90bdef083c0ead99c61c8099ba3a46b7b18a1f18babebb9fcef21a7cd561bcb9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDVFSDFD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClBmiuTg2IbJge7%2FbSCULaLiu25v7Lc17UHhcvJmTHYQIgS%2FhRIF3YBYKpEAQXAjN0qd%2BbnUL2X0Ls%2FgVOAZa0654q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDaCgCkMD531p1%2FkpyrcA%2FFCmvlcDQv8%2B9ST1jYrQ23g%2FW4E8kyGKX00W3PeCDvLVqZTG3p%2BSE2f6MExri5s0Aj6wO8u8k7Mo7Q9CT6l6MAw1GwpmHvmCtWran2YCR5ifoMBtcdP5Y5Dv%2BJr9ORqrAdkXnB5AudfC0HSknNNeRBiyblhKbBwI8iBx%2Fi%2FWCG6LNPV2wA2oOqYy2N6c3XZ1C1YUcC80k1OMcnY%2FF1u%2BWIVoI%2FUysfuai7Z%2BNhGXIyN9ehPJJlfkIyD40TQfTrk3T%2Bg%2Btz7UDMftcvJ1fBF56NAG5OSk3OpGYujayd6VQsIcUrwBDaYNve6A9FA5p8vtYglu46QVfRgWgra6bKczgpFc1TDCefc0j%2FPMgiSCKRnXpvk%2BXBtwLdm6JyyOOANQ7QSgh4%2BCZQnTJWgqSh31ZrHCcMMYR9o2BVdt%2FgP9F0rG2DF22AZBBDMLugZmFtYagyzlxCo%2FMdgytfETCLjVQeI44TPlv0h5sPYbQsTsX4ESOldJ5u%2FkJn1FiILXUbqlZmudC7IsZ6dvZG%2B%2FfYHBsRYbHCG7hY%2B5fCDVMU%2FSkcbbWxeJbYxGO244djNvIvpSkwDN2n4GgkZ1QhXlkboRLOJIWksufln2HeXaBvsPn9nEdD77NkAlV3aCM%2B2MOHJrMAGOqUB8QOUhKHMcnQarg344oSdihQQKOl6VX81ND1PiqFCMwCntBuk6A%2Fu6FGU4miI6R5%2BFgc99sifmRtTNBdAmURtGNkQ1ijI5KdwRgsLOVdQAAw08GVsNSK0pyYgyEPCGGYh5aPurlb48Ti7E95dBuFGuDxtUs6g2UVAJCz4RgUu%2BUZjLof7cHDWcWMgcfHSP%2Fg6Dt%2FqCrODq53SzJoqMDUTuio9K7jS&X-Amz-Signature=58fcbe9076813d7dffb87840c8928c6e001ffbd37c0fd42c2b25385889c6f92d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDVFSDFD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClBmiuTg2IbJge7%2FbSCULaLiu25v7Lc17UHhcvJmTHYQIgS%2FhRIF3YBYKpEAQXAjN0qd%2BbnUL2X0Ls%2FgVOAZa0654q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDaCgCkMD531p1%2FkpyrcA%2FFCmvlcDQv8%2B9ST1jYrQ23g%2FW4E8kyGKX00W3PeCDvLVqZTG3p%2BSE2f6MExri5s0Aj6wO8u8k7Mo7Q9CT6l6MAw1GwpmHvmCtWran2YCR5ifoMBtcdP5Y5Dv%2BJr9ORqrAdkXnB5AudfC0HSknNNeRBiyblhKbBwI8iBx%2Fi%2FWCG6LNPV2wA2oOqYy2N6c3XZ1C1YUcC80k1OMcnY%2FF1u%2BWIVoI%2FUysfuai7Z%2BNhGXIyN9ehPJJlfkIyD40TQfTrk3T%2Bg%2Btz7UDMftcvJ1fBF56NAG5OSk3OpGYujayd6VQsIcUrwBDaYNve6A9FA5p8vtYglu46QVfRgWgra6bKczgpFc1TDCefc0j%2FPMgiSCKRnXpvk%2BXBtwLdm6JyyOOANQ7QSgh4%2BCZQnTJWgqSh31ZrHCcMMYR9o2BVdt%2FgP9F0rG2DF22AZBBDMLugZmFtYagyzlxCo%2FMdgytfETCLjVQeI44TPlv0h5sPYbQsTsX4ESOldJ5u%2FkJn1FiILXUbqlZmudC7IsZ6dvZG%2B%2FfYHBsRYbHCG7hY%2B5fCDVMU%2FSkcbbWxeJbYxGO244djNvIvpSkwDN2n4GgkZ1QhXlkboRLOJIWksufln2HeXaBvsPn9nEdD77NkAlV3aCM%2B2MOHJrMAGOqUB8QOUhKHMcnQarg344oSdihQQKOl6VX81ND1PiqFCMwCntBuk6A%2Fu6FGU4miI6R5%2BFgc99sifmRtTNBdAmURtGNkQ1ijI5KdwRgsLOVdQAAw08GVsNSK0pyYgyEPCGGYh5aPurlb48Ti7E95dBuFGuDxtUs6g2UVAJCz4RgUu%2BUZjLof7cHDWcWMgcfHSP%2Fg6Dt%2FqCrODq53SzJoqMDUTuio9K7jS&X-Amz-Signature=258c60a5f58525be7156bf1227e6003cf0ff70deb66caae6b96e697475750960&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDVFSDFD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClBmiuTg2IbJge7%2FbSCULaLiu25v7Lc17UHhcvJmTHYQIgS%2FhRIF3YBYKpEAQXAjN0qd%2BbnUL2X0Ls%2FgVOAZa0654q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDaCgCkMD531p1%2FkpyrcA%2FFCmvlcDQv8%2B9ST1jYrQ23g%2FW4E8kyGKX00W3PeCDvLVqZTG3p%2BSE2f6MExri5s0Aj6wO8u8k7Mo7Q9CT6l6MAw1GwpmHvmCtWran2YCR5ifoMBtcdP5Y5Dv%2BJr9ORqrAdkXnB5AudfC0HSknNNeRBiyblhKbBwI8iBx%2Fi%2FWCG6LNPV2wA2oOqYy2N6c3XZ1C1YUcC80k1OMcnY%2FF1u%2BWIVoI%2FUysfuai7Z%2BNhGXIyN9ehPJJlfkIyD40TQfTrk3T%2Bg%2Btz7UDMftcvJ1fBF56NAG5OSk3OpGYujayd6VQsIcUrwBDaYNve6A9FA5p8vtYglu46QVfRgWgra6bKczgpFc1TDCefc0j%2FPMgiSCKRnXpvk%2BXBtwLdm6JyyOOANQ7QSgh4%2BCZQnTJWgqSh31ZrHCcMMYR9o2BVdt%2FgP9F0rG2DF22AZBBDMLugZmFtYagyzlxCo%2FMdgytfETCLjVQeI44TPlv0h5sPYbQsTsX4ESOldJ5u%2FkJn1FiILXUbqlZmudC7IsZ6dvZG%2B%2FfYHBsRYbHCG7hY%2B5fCDVMU%2FSkcbbWxeJbYxGO244djNvIvpSkwDN2n4GgkZ1QhXlkboRLOJIWksufln2HeXaBvsPn9nEdD77NkAlV3aCM%2B2MOHJrMAGOqUB8QOUhKHMcnQarg344oSdihQQKOl6VX81ND1PiqFCMwCntBuk6A%2Fu6FGU4miI6R5%2BFgc99sifmRtTNBdAmURtGNkQ1ijI5KdwRgsLOVdQAAw08GVsNSK0pyYgyEPCGGYh5aPurlb48Ti7E95dBuFGuDxtUs6g2UVAJCz4RgUu%2BUZjLof7cHDWcWMgcfHSP%2Fg6Dt%2FqCrODq53SzJoqMDUTuio9K7jS&X-Amz-Signature=a7dc1023dbc5468da302ab9fbda74391152c650e42892b21e311da6ad7c1b0b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDVFSDFD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClBmiuTg2IbJge7%2FbSCULaLiu25v7Lc17UHhcvJmTHYQIgS%2FhRIF3YBYKpEAQXAjN0qd%2BbnUL2X0Ls%2FgVOAZa0654q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDaCgCkMD531p1%2FkpyrcA%2FFCmvlcDQv8%2B9ST1jYrQ23g%2FW4E8kyGKX00W3PeCDvLVqZTG3p%2BSE2f6MExri5s0Aj6wO8u8k7Mo7Q9CT6l6MAw1GwpmHvmCtWran2YCR5ifoMBtcdP5Y5Dv%2BJr9ORqrAdkXnB5AudfC0HSknNNeRBiyblhKbBwI8iBx%2Fi%2FWCG6LNPV2wA2oOqYy2N6c3XZ1C1YUcC80k1OMcnY%2FF1u%2BWIVoI%2FUysfuai7Z%2BNhGXIyN9ehPJJlfkIyD40TQfTrk3T%2Bg%2Btz7UDMftcvJ1fBF56NAG5OSk3OpGYujayd6VQsIcUrwBDaYNve6A9FA5p8vtYglu46QVfRgWgra6bKczgpFc1TDCefc0j%2FPMgiSCKRnXpvk%2BXBtwLdm6JyyOOANQ7QSgh4%2BCZQnTJWgqSh31ZrHCcMMYR9o2BVdt%2FgP9F0rG2DF22AZBBDMLugZmFtYagyzlxCo%2FMdgytfETCLjVQeI44TPlv0h5sPYbQsTsX4ESOldJ5u%2FkJn1FiILXUbqlZmudC7IsZ6dvZG%2B%2FfYHBsRYbHCG7hY%2B5fCDVMU%2FSkcbbWxeJbYxGO244djNvIvpSkwDN2n4GgkZ1QhXlkboRLOJIWksufln2HeXaBvsPn9nEdD77NkAlV3aCM%2B2MOHJrMAGOqUB8QOUhKHMcnQarg344oSdihQQKOl6VX81ND1PiqFCMwCntBuk6A%2Fu6FGU4miI6R5%2BFgc99sifmRtTNBdAmURtGNkQ1ijI5KdwRgsLOVdQAAw08GVsNSK0pyYgyEPCGGYh5aPurlb48Ti7E95dBuFGuDxtUs6g2UVAJCz4RgUu%2BUZjLof7cHDWcWMgcfHSP%2Fg6Dt%2FqCrODq53SzJoqMDUTuio9K7jS&X-Amz-Signature=bb64a9c067ba700a00e1ecc50a6c828c7355c52783f806492d5569ca9d449f1e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDVFSDFD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T061234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClBmiuTg2IbJge7%2FbSCULaLiu25v7Lc17UHhcvJmTHYQIgS%2FhRIF3YBYKpEAQXAjN0qd%2BbnUL2X0Ls%2FgVOAZa0654q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDaCgCkMD531p1%2FkpyrcA%2FFCmvlcDQv8%2B9ST1jYrQ23g%2FW4E8kyGKX00W3PeCDvLVqZTG3p%2BSE2f6MExri5s0Aj6wO8u8k7Mo7Q9CT6l6MAw1GwpmHvmCtWran2YCR5ifoMBtcdP5Y5Dv%2BJr9ORqrAdkXnB5AudfC0HSknNNeRBiyblhKbBwI8iBx%2Fi%2FWCG6LNPV2wA2oOqYy2N6c3XZ1C1YUcC80k1OMcnY%2FF1u%2BWIVoI%2FUysfuai7Z%2BNhGXIyN9ehPJJlfkIyD40TQfTrk3T%2Bg%2Btz7UDMftcvJ1fBF56NAG5OSk3OpGYujayd6VQsIcUrwBDaYNve6A9FA5p8vtYglu46QVfRgWgra6bKczgpFc1TDCefc0j%2FPMgiSCKRnXpvk%2BXBtwLdm6JyyOOANQ7QSgh4%2BCZQnTJWgqSh31ZrHCcMMYR9o2BVdt%2FgP9F0rG2DF22AZBBDMLugZmFtYagyzlxCo%2FMdgytfETCLjVQeI44TPlv0h5sPYbQsTsX4ESOldJ5u%2FkJn1FiILXUbqlZmudC7IsZ6dvZG%2B%2FfYHBsRYbHCG7hY%2B5fCDVMU%2FSkcbbWxeJbYxGO244djNvIvpSkwDN2n4GgkZ1QhXlkboRLOJIWksufln2HeXaBvsPn9nEdD77NkAlV3aCM%2B2MOHJrMAGOqUB8QOUhKHMcnQarg344oSdihQQKOl6VX81ND1PiqFCMwCntBuk6A%2Fu6FGU4miI6R5%2BFgc99sifmRtTNBdAmURtGNkQ1ijI5KdwRgsLOVdQAAw08GVsNSK0pyYgyEPCGGYh5aPurlb48Ti7E95dBuFGuDxtUs6g2UVAJCz4RgUu%2BUZjLof7cHDWcWMgcfHSP%2Fg6Dt%2FqCrODq53SzJoqMDUTuio9K7jS&X-Amz-Signature=9b07fb8476d8957fef10777fb43e3709d1e34effc6cbf5d0ca89e95a689a2693&X-Amz-SignedHeaders=host&x-id=GetObject)
