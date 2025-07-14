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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6KHC4F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDxb6QErg4luekwlbC1XamtH%2B2whqmgwMofCwoR4uad2QIhAKodAVOK%2FIPTj96ycWC6JLq%2B2lrgHy1FeTbUDDKZZsYKKv8DCC4QABoMNjM3NDIzMTgzODA1IgwYmvodHHn1dcXC0l4q3AP%2BujvNKkWaBrOAi7zT8EPpR2BZW3Ky0txXUeNwJX9QmLbcaq79zIWkVt0y%2F9LRp7dYwgppWoNs6VP8XYavDbuPZ%2FZu%2FR1zdG2YThfGjy4AzBm%2FUjCyTdDEuFYtQ9F%2FJXWUfr70BvMKTdkcNgxPPFxmtl0hII3gkPvSqdfVFjWrojnZLozSrOGGYYxgG4YFv7YPOlTbswWIEvYthtSs8fR5MbaXdcLbezIWDkoPBN7a5oF5%2B4k1%2FMxP0LACk1KF9xXGnjO4cFvCOBYCYranL%2BsZ8TiQki%2BEUxpg9c97Y4e3wg4%2B8GXey0CeJONFIj2wxeYQWcDb55x3TGTII0IjKbZKR90cr0gHjWwoIQyN2PkQ9pwkhtfhMBh8EoeWt4h8quop8nbVArGhwxG7uEvnKiJ5Wa36mv3qh6gNZNF4oIqgSDuCUTehxGKtb2IPiXsn6jQ%2FHQswZih3q1I2JtkbztZGZW5TiC%2B8xc1f4y0s7v58Is9HC9d8e55W6bqct%2B%2F%2FHY0pz92WG2BeY9y9eOyA3VhnCHZQa8k7GIOqtDbD%2B%2B05jpR3SaKpnQAe3%2BqMve1XPw340UbO%2BJvieYAb%2B9L3FTWNz6L0eiFqmfozf3C3RiyEORxPKOYZDAR%2FqDVYhjD2hNTDBjqkAeV342qAVoXRs1GOxvT0MtaGNn1wvCBcSGYA4a55T3npPntDtWA8N%2FVtmUa%2FAtGwOQymzNS14xaDGMfqJTDS7dyFKs%2BwyK2wAa2bQW72XprsqhNk86S9Luc4946Jkpt3vSHFX%2Bqh37pQ7e6P1ZX5HHh2cz7rDvanewpB%2BGGSB%2F2o5K3A%2FEINJekDdDhDjT3Iw%2FAepzOrMRaRFTTEffUj8G%2BdWE%2FM&X-Amz-Signature=535ca9c430d32a7d5bd5031e37530f04a74de66b84f8d0cf6fb69e70d364b82e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6KHC4F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDxb6QErg4luekwlbC1XamtH%2B2whqmgwMofCwoR4uad2QIhAKodAVOK%2FIPTj96ycWC6JLq%2B2lrgHy1FeTbUDDKZZsYKKv8DCC4QABoMNjM3NDIzMTgzODA1IgwYmvodHHn1dcXC0l4q3AP%2BujvNKkWaBrOAi7zT8EPpR2BZW3Ky0txXUeNwJX9QmLbcaq79zIWkVt0y%2F9LRp7dYwgppWoNs6VP8XYavDbuPZ%2FZu%2FR1zdG2YThfGjy4AzBm%2FUjCyTdDEuFYtQ9F%2FJXWUfr70BvMKTdkcNgxPPFxmtl0hII3gkPvSqdfVFjWrojnZLozSrOGGYYxgG4YFv7YPOlTbswWIEvYthtSs8fR5MbaXdcLbezIWDkoPBN7a5oF5%2B4k1%2FMxP0LACk1KF9xXGnjO4cFvCOBYCYranL%2BsZ8TiQki%2BEUxpg9c97Y4e3wg4%2B8GXey0CeJONFIj2wxeYQWcDb55x3TGTII0IjKbZKR90cr0gHjWwoIQyN2PkQ9pwkhtfhMBh8EoeWt4h8quop8nbVArGhwxG7uEvnKiJ5Wa36mv3qh6gNZNF4oIqgSDuCUTehxGKtb2IPiXsn6jQ%2FHQswZih3q1I2JtkbztZGZW5TiC%2B8xc1f4y0s7v58Is9HC9d8e55W6bqct%2B%2F%2FHY0pz92WG2BeY9y9eOyA3VhnCHZQa8k7GIOqtDbD%2B%2B05jpR3SaKpnQAe3%2BqMve1XPw340UbO%2BJvieYAb%2B9L3FTWNz6L0eiFqmfozf3C3RiyEORxPKOYZDAR%2FqDVYhjD2hNTDBjqkAeV342qAVoXRs1GOxvT0MtaGNn1wvCBcSGYA4a55T3npPntDtWA8N%2FVtmUa%2FAtGwOQymzNS14xaDGMfqJTDS7dyFKs%2BwyK2wAa2bQW72XprsqhNk86S9Luc4946Jkpt3vSHFX%2Bqh37pQ7e6P1ZX5HHh2cz7rDvanewpB%2BGGSB%2F2o5K3A%2FEINJekDdDhDjT3Iw%2FAepzOrMRaRFTTEffUj8G%2BdWE%2FM&X-Amz-Signature=2a7466c2eb4ed477cbae4cb69205deb73b43aac44ea4c2b2b5f73e3eb025ff4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6KHC4F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDxb6QErg4luekwlbC1XamtH%2B2whqmgwMofCwoR4uad2QIhAKodAVOK%2FIPTj96ycWC6JLq%2B2lrgHy1FeTbUDDKZZsYKKv8DCC4QABoMNjM3NDIzMTgzODA1IgwYmvodHHn1dcXC0l4q3AP%2BujvNKkWaBrOAi7zT8EPpR2BZW3Ky0txXUeNwJX9QmLbcaq79zIWkVt0y%2F9LRp7dYwgppWoNs6VP8XYavDbuPZ%2FZu%2FR1zdG2YThfGjy4AzBm%2FUjCyTdDEuFYtQ9F%2FJXWUfr70BvMKTdkcNgxPPFxmtl0hII3gkPvSqdfVFjWrojnZLozSrOGGYYxgG4YFv7YPOlTbswWIEvYthtSs8fR5MbaXdcLbezIWDkoPBN7a5oF5%2B4k1%2FMxP0LACk1KF9xXGnjO4cFvCOBYCYranL%2BsZ8TiQki%2BEUxpg9c97Y4e3wg4%2B8GXey0CeJONFIj2wxeYQWcDb55x3TGTII0IjKbZKR90cr0gHjWwoIQyN2PkQ9pwkhtfhMBh8EoeWt4h8quop8nbVArGhwxG7uEvnKiJ5Wa36mv3qh6gNZNF4oIqgSDuCUTehxGKtb2IPiXsn6jQ%2FHQswZih3q1I2JtkbztZGZW5TiC%2B8xc1f4y0s7v58Is9HC9d8e55W6bqct%2B%2F%2FHY0pz92WG2BeY9y9eOyA3VhnCHZQa8k7GIOqtDbD%2B%2B05jpR3SaKpnQAe3%2BqMve1XPw340UbO%2BJvieYAb%2B9L3FTWNz6L0eiFqmfozf3C3RiyEORxPKOYZDAR%2FqDVYhjD2hNTDBjqkAeV342qAVoXRs1GOxvT0MtaGNn1wvCBcSGYA4a55T3npPntDtWA8N%2FVtmUa%2FAtGwOQymzNS14xaDGMfqJTDS7dyFKs%2BwyK2wAa2bQW72XprsqhNk86S9Luc4946Jkpt3vSHFX%2Bqh37pQ7e6P1ZX5HHh2cz7rDvanewpB%2BGGSB%2F2o5K3A%2FEINJekDdDhDjT3Iw%2FAepzOrMRaRFTTEffUj8G%2BdWE%2FM&X-Amz-Signature=0a64e95a93141564298c92bec1ce7df0a0ac429c076768aaab7792e003d7823b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6KHC4F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDxb6QErg4luekwlbC1XamtH%2B2whqmgwMofCwoR4uad2QIhAKodAVOK%2FIPTj96ycWC6JLq%2B2lrgHy1FeTbUDDKZZsYKKv8DCC4QABoMNjM3NDIzMTgzODA1IgwYmvodHHn1dcXC0l4q3AP%2BujvNKkWaBrOAi7zT8EPpR2BZW3Ky0txXUeNwJX9QmLbcaq79zIWkVt0y%2F9LRp7dYwgppWoNs6VP8XYavDbuPZ%2FZu%2FR1zdG2YThfGjy4AzBm%2FUjCyTdDEuFYtQ9F%2FJXWUfr70BvMKTdkcNgxPPFxmtl0hII3gkPvSqdfVFjWrojnZLozSrOGGYYxgG4YFv7YPOlTbswWIEvYthtSs8fR5MbaXdcLbezIWDkoPBN7a5oF5%2B4k1%2FMxP0LACk1KF9xXGnjO4cFvCOBYCYranL%2BsZ8TiQki%2BEUxpg9c97Y4e3wg4%2B8GXey0CeJONFIj2wxeYQWcDb55x3TGTII0IjKbZKR90cr0gHjWwoIQyN2PkQ9pwkhtfhMBh8EoeWt4h8quop8nbVArGhwxG7uEvnKiJ5Wa36mv3qh6gNZNF4oIqgSDuCUTehxGKtb2IPiXsn6jQ%2FHQswZih3q1I2JtkbztZGZW5TiC%2B8xc1f4y0s7v58Is9HC9d8e55W6bqct%2B%2F%2FHY0pz92WG2BeY9y9eOyA3VhnCHZQa8k7GIOqtDbD%2B%2B05jpR3SaKpnQAe3%2BqMve1XPw340UbO%2BJvieYAb%2B9L3FTWNz6L0eiFqmfozf3C3RiyEORxPKOYZDAR%2FqDVYhjD2hNTDBjqkAeV342qAVoXRs1GOxvT0MtaGNn1wvCBcSGYA4a55T3npPntDtWA8N%2FVtmUa%2FAtGwOQymzNS14xaDGMfqJTDS7dyFKs%2BwyK2wAa2bQW72XprsqhNk86S9Luc4946Jkpt3vSHFX%2Bqh37pQ7e6P1ZX5HHh2cz7rDvanewpB%2BGGSB%2F2o5K3A%2FEINJekDdDhDjT3Iw%2FAepzOrMRaRFTTEffUj8G%2BdWE%2FM&X-Amz-Signature=9599607d1f653ba7790f945619fd07c778041258817c7bf828c7eed5f1474212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6KHC4F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDxb6QErg4luekwlbC1XamtH%2B2whqmgwMofCwoR4uad2QIhAKodAVOK%2FIPTj96ycWC6JLq%2B2lrgHy1FeTbUDDKZZsYKKv8DCC4QABoMNjM3NDIzMTgzODA1IgwYmvodHHn1dcXC0l4q3AP%2BujvNKkWaBrOAi7zT8EPpR2BZW3Ky0txXUeNwJX9QmLbcaq79zIWkVt0y%2F9LRp7dYwgppWoNs6VP8XYavDbuPZ%2FZu%2FR1zdG2YThfGjy4AzBm%2FUjCyTdDEuFYtQ9F%2FJXWUfr70BvMKTdkcNgxPPFxmtl0hII3gkPvSqdfVFjWrojnZLozSrOGGYYxgG4YFv7YPOlTbswWIEvYthtSs8fR5MbaXdcLbezIWDkoPBN7a5oF5%2B4k1%2FMxP0LACk1KF9xXGnjO4cFvCOBYCYranL%2BsZ8TiQki%2BEUxpg9c97Y4e3wg4%2B8GXey0CeJONFIj2wxeYQWcDb55x3TGTII0IjKbZKR90cr0gHjWwoIQyN2PkQ9pwkhtfhMBh8EoeWt4h8quop8nbVArGhwxG7uEvnKiJ5Wa36mv3qh6gNZNF4oIqgSDuCUTehxGKtb2IPiXsn6jQ%2FHQswZih3q1I2JtkbztZGZW5TiC%2B8xc1f4y0s7v58Is9HC9d8e55W6bqct%2B%2F%2FHY0pz92WG2BeY9y9eOyA3VhnCHZQa8k7GIOqtDbD%2B%2B05jpR3SaKpnQAe3%2BqMve1XPw340UbO%2BJvieYAb%2B9L3FTWNz6L0eiFqmfozf3C3RiyEORxPKOYZDAR%2FqDVYhjD2hNTDBjqkAeV342qAVoXRs1GOxvT0MtaGNn1wvCBcSGYA4a55T3npPntDtWA8N%2FVtmUa%2FAtGwOQymzNS14xaDGMfqJTDS7dyFKs%2BwyK2wAa2bQW72XprsqhNk86S9Luc4946Jkpt3vSHFX%2Bqh37pQ7e6P1ZX5HHh2cz7rDvanewpB%2BGGSB%2F2o5K3A%2FEINJekDdDhDjT3Iw%2FAepzOrMRaRFTTEffUj8G%2BdWE%2FM&X-Amz-Signature=04d070c44544fe5f6e03154b677262d50778ded10529cc12c78cda4550a60af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U6KHC4F%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDxb6QErg4luekwlbC1XamtH%2B2whqmgwMofCwoR4uad2QIhAKodAVOK%2FIPTj96ycWC6JLq%2B2lrgHy1FeTbUDDKZZsYKKv8DCC4QABoMNjM3NDIzMTgzODA1IgwYmvodHHn1dcXC0l4q3AP%2BujvNKkWaBrOAi7zT8EPpR2BZW3Ky0txXUeNwJX9QmLbcaq79zIWkVt0y%2F9LRp7dYwgppWoNs6VP8XYavDbuPZ%2FZu%2FR1zdG2YThfGjy4AzBm%2FUjCyTdDEuFYtQ9F%2FJXWUfr70BvMKTdkcNgxPPFxmtl0hII3gkPvSqdfVFjWrojnZLozSrOGGYYxgG4YFv7YPOlTbswWIEvYthtSs8fR5MbaXdcLbezIWDkoPBN7a5oF5%2B4k1%2FMxP0LACk1KF9xXGnjO4cFvCOBYCYranL%2BsZ8TiQki%2BEUxpg9c97Y4e3wg4%2B8GXey0CeJONFIj2wxeYQWcDb55x3TGTII0IjKbZKR90cr0gHjWwoIQyN2PkQ9pwkhtfhMBh8EoeWt4h8quop8nbVArGhwxG7uEvnKiJ5Wa36mv3qh6gNZNF4oIqgSDuCUTehxGKtb2IPiXsn6jQ%2FHQswZih3q1I2JtkbztZGZW5TiC%2B8xc1f4y0s7v58Is9HC9d8e55W6bqct%2B%2F%2FHY0pz92WG2BeY9y9eOyA3VhnCHZQa8k7GIOqtDbD%2B%2B05jpR3SaKpnQAe3%2BqMve1XPw340UbO%2BJvieYAb%2B9L3FTWNz6L0eiFqmfozf3C3RiyEORxPKOYZDAR%2FqDVYhjD2hNTDBjqkAeV342qAVoXRs1GOxvT0MtaGNn1wvCBcSGYA4a55T3npPntDtWA8N%2FVtmUa%2FAtGwOQymzNS14xaDGMfqJTDS7dyFKs%2BwyK2wAa2bQW72XprsqhNk86S9Luc4946Jkpt3vSHFX%2Bqh37pQ7e6P1ZX5HHh2cz7rDvanewpB%2BGGSB%2F2o5K3A%2FEINJekDdDhDjT3Iw%2FAepzOrMRaRFTTEffUj8G%2BdWE%2FM&X-Amz-Signature=0918729be63d6cf32a42940e4f247a2660857786120f86427fcb5f6b207f9cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
