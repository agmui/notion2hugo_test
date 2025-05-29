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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OD3DSLK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BbzdMt6qlmGnhfNGdszXtuDXqdxM%2F2aasumNLIwlRgIhAP6y3VNknNb2xz1S0yA2qyvmvM3N11%2By60J1vyFhhKQPKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOHNSp2%2B10DGG8g%2F0q3AMsDdd5vnc11ClUwyMQ6RxVUisqOrTRwYVvd4hjGpZhjKKCKIwfXgIx6cIJI5Y9oOBT8UyUYK7yvsltwcvF2dNRLhe9Q9of704Tu2cHix2KJyRh1b3zjO6Fjvq2%2BWlEXOv%2F%2BNXWNoIB3uXmYKe3%2FpHNaBX3R%2FtxFQPYm24ebILwKwNFMg447BYaGFtX%2F5Ei8g5T4uVC2QJTTzjrKueOIAzhXjkzbPoYj1Qg4YKkv%2Bi%2FUxQ84adgHDnmkbLOz7bOrQEhSv50cBjqt6sfWK%2BDvPxQQVxXuc9ScnKo9h4SM2Lz6A%2FBESuf3uo%2BHEFzrRFvUm2Ydz78sD9j8Td5ZcKnS1NfA7ysaAya6aSV6ai9nz8SDw3Nsfh%2BwbvkEgDWIKV0DEkTkfoKz3IvxCKrhnOoV3S%2BEX%2F11xPIX5erFDz%2FItzuW2W8Im36HfTGKxWin0sgphTHwq8RUaxtYAAXo8wjAR6VoCVNhc7CzFgREkoz5ptVhZOzjW0ztrlFW%2Ft4yOT9HJFti4i%2B4CjE51lgYrxigT7EayHHnvA%2FldVFoXwIp15qhr3NydM4mkBc9WwSpbDJK6H%2BjTFGVdxWwxT%2Bw0CRqIRFohacuoXIoLLD%2FbKLrILMiDrPpDszrRuRCNPbEjCzsuHBBjqkASjnU8pf9gAm2tGZ12cQ74PEn0sPa2fnrK3oKOFLnkM0eGfOSDSAv1wUwVhp6NjTdULBiXBrU0C1RCxDDLVavoY5oQohNFOfeqTLiMnA87Gdr0z6Ea4%2F1HRLFKkhPJK1Bometf35cAoOLRdvmoWm8kkOzpV9wU1%2FOKua6bQCz9lpCI9ng2MmMF4MivJOJX81MpH%2BzCyugirHZvKKh%2FtzJISobFuf&X-Amz-Signature=cecf0f15e52f15876f072e5fb00aab4dc05aea05745fc1550c4acc29393427a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OD3DSLK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BbzdMt6qlmGnhfNGdszXtuDXqdxM%2F2aasumNLIwlRgIhAP6y3VNknNb2xz1S0yA2qyvmvM3N11%2By60J1vyFhhKQPKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOHNSp2%2B10DGG8g%2F0q3AMsDdd5vnc11ClUwyMQ6RxVUisqOrTRwYVvd4hjGpZhjKKCKIwfXgIx6cIJI5Y9oOBT8UyUYK7yvsltwcvF2dNRLhe9Q9of704Tu2cHix2KJyRh1b3zjO6Fjvq2%2BWlEXOv%2F%2BNXWNoIB3uXmYKe3%2FpHNaBX3R%2FtxFQPYm24ebILwKwNFMg447BYaGFtX%2F5Ei8g5T4uVC2QJTTzjrKueOIAzhXjkzbPoYj1Qg4YKkv%2Bi%2FUxQ84adgHDnmkbLOz7bOrQEhSv50cBjqt6sfWK%2BDvPxQQVxXuc9ScnKo9h4SM2Lz6A%2FBESuf3uo%2BHEFzrRFvUm2Ydz78sD9j8Td5ZcKnS1NfA7ysaAya6aSV6ai9nz8SDw3Nsfh%2BwbvkEgDWIKV0DEkTkfoKz3IvxCKrhnOoV3S%2BEX%2F11xPIX5erFDz%2FItzuW2W8Im36HfTGKxWin0sgphTHwq8RUaxtYAAXo8wjAR6VoCVNhc7CzFgREkoz5ptVhZOzjW0ztrlFW%2Ft4yOT9HJFti4i%2B4CjE51lgYrxigT7EayHHnvA%2FldVFoXwIp15qhr3NydM4mkBc9WwSpbDJK6H%2BjTFGVdxWwxT%2Bw0CRqIRFohacuoXIoLLD%2FbKLrILMiDrPpDszrRuRCNPbEjCzsuHBBjqkASjnU8pf9gAm2tGZ12cQ74PEn0sPa2fnrK3oKOFLnkM0eGfOSDSAv1wUwVhp6NjTdULBiXBrU0C1RCxDDLVavoY5oQohNFOfeqTLiMnA87Gdr0z6Ea4%2F1HRLFKkhPJK1Bometf35cAoOLRdvmoWm8kkOzpV9wU1%2FOKua6bQCz9lpCI9ng2MmMF4MivJOJX81MpH%2BzCyugirHZvKKh%2FtzJISobFuf&X-Amz-Signature=b5c6fea1525778b7ef49976d5f93f294d546074cf6fbe21ad974b7ed12073db4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OD3DSLK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BbzdMt6qlmGnhfNGdszXtuDXqdxM%2F2aasumNLIwlRgIhAP6y3VNknNb2xz1S0yA2qyvmvM3N11%2By60J1vyFhhKQPKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOHNSp2%2B10DGG8g%2F0q3AMsDdd5vnc11ClUwyMQ6RxVUisqOrTRwYVvd4hjGpZhjKKCKIwfXgIx6cIJI5Y9oOBT8UyUYK7yvsltwcvF2dNRLhe9Q9of704Tu2cHix2KJyRh1b3zjO6Fjvq2%2BWlEXOv%2F%2BNXWNoIB3uXmYKe3%2FpHNaBX3R%2FtxFQPYm24ebILwKwNFMg447BYaGFtX%2F5Ei8g5T4uVC2QJTTzjrKueOIAzhXjkzbPoYj1Qg4YKkv%2Bi%2FUxQ84adgHDnmkbLOz7bOrQEhSv50cBjqt6sfWK%2BDvPxQQVxXuc9ScnKo9h4SM2Lz6A%2FBESuf3uo%2BHEFzrRFvUm2Ydz78sD9j8Td5ZcKnS1NfA7ysaAya6aSV6ai9nz8SDw3Nsfh%2BwbvkEgDWIKV0DEkTkfoKz3IvxCKrhnOoV3S%2BEX%2F11xPIX5erFDz%2FItzuW2W8Im36HfTGKxWin0sgphTHwq8RUaxtYAAXo8wjAR6VoCVNhc7CzFgREkoz5ptVhZOzjW0ztrlFW%2Ft4yOT9HJFti4i%2B4CjE51lgYrxigT7EayHHnvA%2FldVFoXwIp15qhr3NydM4mkBc9WwSpbDJK6H%2BjTFGVdxWwxT%2Bw0CRqIRFohacuoXIoLLD%2FbKLrILMiDrPpDszrRuRCNPbEjCzsuHBBjqkASjnU8pf9gAm2tGZ12cQ74PEn0sPa2fnrK3oKOFLnkM0eGfOSDSAv1wUwVhp6NjTdULBiXBrU0C1RCxDDLVavoY5oQohNFOfeqTLiMnA87Gdr0z6Ea4%2F1HRLFKkhPJK1Bometf35cAoOLRdvmoWm8kkOzpV9wU1%2FOKua6bQCz9lpCI9ng2MmMF4MivJOJX81MpH%2BzCyugirHZvKKh%2FtzJISobFuf&X-Amz-Signature=94ef8c2a537783854998cabf5415986cec256d32880e79081d44636eda0956b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OD3DSLK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BbzdMt6qlmGnhfNGdszXtuDXqdxM%2F2aasumNLIwlRgIhAP6y3VNknNb2xz1S0yA2qyvmvM3N11%2By60J1vyFhhKQPKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOHNSp2%2B10DGG8g%2F0q3AMsDdd5vnc11ClUwyMQ6RxVUisqOrTRwYVvd4hjGpZhjKKCKIwfXgIx6cIJI5Y9oOBT8UyUYK7yvsltwcvF2dNRLhe9Q9of704Tu2cHix2KJyRh1b3zjO6Fjvq2%2BWlEXOv%2F%2BNXWNoIB3uXmYKe3%2FpHNaBX3R%2FtxFQPYm24ebILwKwNFMg447BYaGFtX%2F5Ei8g5T4uVC2QJTTzjrKueOIAzhXjkzbPoYj1Qg4YKkv%2Bi%2FUxQ84adgHDnmkbLOz7bOrQEhSv50cBjqt6sfWK%2BDvPxQQVxXuc9ScnKo9h4SM2Lz6A%2FBESuf3uo%2BHEFzrRFvUm2Ydz78sD9j8Td5ZcKnS1NfA7ysaAya6aSV6ai9nz8SDw3Nsfh%2BwbvkEgDWIKV0DEkTkfoKz3IvxCKrhnOoV3S%2BEX%2F11xPIX5erFDz%2FItzuW2W8Im36HfTGKxWin0sgphTHwq8RUaxtYAAXo8wjAR6VoCVNhc7CzFgREkoz5ptVhZOzjW0ztrlFW%2Ft4yOT9HJFti4i%2B4CjE51lgYrxigT7EayHHnvA%2FldVFoXwIp15qhr3NydM4mkBc9WwSpbDJK6H%2BjTFGVdxWwxT%2Bw0CRqIRFohacuoXIoLLD%2FbKLrILMiDrPpDszrRuRCNPbEjCzsuHBBjqkASjnU8pf9gAm2tGZ12cQ74PEn0sPa2fnrK3oKOFLnkM0eGfOSDSAv1wUwVhp6NjTdULBiXBrU0C1RCxDDLVavoY5oQohNFOfeqTLiMnA87Gdr0z6Ea4%2F1HRLFKkhPJK1Bometf35cAoOLRdvmoWm8kkOzpV9wU1%2FOKua6bQCz9lpCI9ng2MmMF4MivJOJX81MpH%2BzCyugirHZvKKh%2FtzJISobFuf&X-Amz-Signature=16276bd9bb17d9d4c0a7644f48aad6f7fef8411ec87b7121e01413d5af252227&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OD3DSLK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BbzdMt6qlmGnhfNGdszXtuDXqdxM%2F2aasumNLIwlRgIhAP6y3VNknNb2xz1S0yA2qyvmvM3N11%2By60J1vyFhhKQPKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOHNSp2%2B10DGG8g%2F0q3AMsDdd5vnc11ClUwyMQ6RxVUisqOrTRwYVvd4hjGpZhjKKCKIwfXgIx6cIJI5Y9oOBT8UyUYK7yvsltwcvF2dNRLhe9Q9of704Tu2cHix2KJyRh1b3zjO6Fjvq2%2BWlEXOv%2F%2BNXWNoIB3uXmYKe3%2FpHNaBX3R%2FtxFQPYm24ebILwKwNFMg447BYaGFtX%2F5Ei8g5T4uVC2QJTTzjrKueOIAzhXjkzbPoYj1Qg4YKkv%2Bi%2FUxQ84adgHDnmkbLOz7bOrQEhSv50cBjqt6sfWK%2BDvPxQQVxXuc9ScnKo9h4SM2Lz6A%2FBESuf3uo%2BHEFzrRFvUm2Ydz78sD9j8Td5ZcKnS1NfA7ysaAya6aSV6ai9nz8SDw3Nsfh%2BwbvkEgDWIKV0DEkTkfoKz3IvxCKrhnOoV3S%2BEX%2F11xPIX5erFDz%2FItzuW2W8Im36HfTGKxWin0sgphTHwq8RUaxtYAAXo8wjAR6VoCVNhc7CzFgREkoz5ptVhZOzjW0ztrlFW%2Ft4yOT9HJFti4i%2B4CjE51lgYrxigT7EayHHnvA%2FldVFoXwIp15qhr3NydM4mkBc9WwSpbDJK6H%2BjTFGVdxWwxT%2Bw0CRqIRFohacuoXIoLLD%2FbKLrILMiDrPpDszrRuRCNPbEjCzsuHBBjqkASjnU8pf9gAm2tGZ12cQ74PEn0sPa2fnrK3oKOFLnkM0eGfOSDSAv1wUwVhp6NjTdULBiXBrU0C1RCxDDLVavoY5oQohNFOfeqTLiMnA87Gdr0z6Ea4%2F1HRLFKkhPJK1Bometf35cAoOLRdvmoWm8kkOzpV9wU1%2FOKua6bQCz9lpCI9ng2MmMF4MivJOJX81MpH%2BzCyugirHZvKKh%2FtzJISobFuf&X-Amz-Signature=b965835c63a116f9b7d21f867e2166b0400111b393a7c25330f3c4bcecd06c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OD3DSLK%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T132257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd%2BbzdMt6qlmGnhfNGdszXtuDXqdxM%2F2aasumNLIwlRgIhAP6y3VNknNb2xz1S0yA2qyvmvM3N11%2By60J1vyFhhKQPKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOHNSp2%2B10DGG8g%2F0q3AMsDdd5vnc11ClUwyMQ6RxVUisqOrTRwYVvd4hjGpZhjKKCKIwfXgIx6cIJI5Y9oOBT8UyUYK7yvsltwcvF2dNRLhe9Q9of704Tu2cHix2KJyRh1b3zjO6Fjvq2%2BWlEXOv%2F%2BNXWNoIB3uXmYKe3%2FpHNaBX3R%2FtxFQPYm24ebILwKwNFMg447BYaGFtX%2F5Ei8g5T4uVC2QJTTzjrKueOIAzhXjkzbPoYj1Qg4YKkv%2Bi%2FUxQ84adgHDnmkbLOz7bOrQEhSv50cBjqt6sfWK%2BDvPxQQVxXuc9ScnKo9h4SM2Lz6A%2FBESuf3uo%2BHEFzrRFvUm2Ydz78sD9j8Td5ZcKnS1NfA7ysaAya6aSV6ai9nz8SDw3Nsfh%2BwbvkEgDWIKV0DEkTkfoKz3IvxCKrhnOoV3S%2BEX%2F11xPIX5erFDz%2FItzuW2W8Im36HfTGKxWin0sgphTHwq8RUaxtYAAXo8wjAR6VoCVNhc7CzFgREkoz5ptVhZOzjW0ztrlFW%2Ft4yOT9HJFti4i%2B4CjE51lgYrxigT7EayHHnvA%2FldVFoXwIp15qhr3NydM4mkBc9WwSpbDJK6H%2BjTFGVdxWwxT%2Bw0CRqIRFohacuoXIoLLD%2FbKLrILMiDrPpDszrRuRCNPbEjCzsuHBBjqkASjnU8pf9gAm2tGZ12cQ74PEn0sPa2fnrK3oKOFLnkM0eGfOSDSAv1wUwVhp6NjTdULBiXBrU0C1RCxDDLVavoY5oQohNFOfeqTLiMnA87Gdr0z6Ea4%2F1HRLFKkhPJK1Bometf35cAoOLRdvmoWm8kkOzpV9wU1%2FOKua6bQCz9lpCI9ng2MmMF4MivJOJX81MpH%2BzCyugirHZvKKh%2FtzJISobFuf&X-Amz-Signature=3ad0c29175896488abf7e4afa48689cd78f6a106a6623b7d1dcff40873b87093&X-Amz-SignedHeaders=host&x-id=GetObject)
