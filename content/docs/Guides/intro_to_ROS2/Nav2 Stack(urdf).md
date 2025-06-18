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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEYRPZ2K%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVyC4zz2RCAvVXBlA8h5401AP7LYjZOQisvnDPgdatpAiBEJJuedpu6U0dLGvDL6I1uiNDL1O%2Bi0I8Hf1A5uYVJdCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfF3eHNaUoAX17lzKtwD2Z7iOQU7NA5%2BW65DpU7NLX5cknJZvkWKbWSK3AK1aILJdX1muQoJbkQNs1Ob1dLTmWbpV5CaGx0SViZ4Q7LvbQRcGXIGgvr9PV7uAO6hbbw1iphOTvyT90H1y5gF9yqHecXqdPniLP8KfJonkYongi95qMa4xwTc7J6Gtbp4%2BR0CuZEvret%2FodkgZ5cCNUduakTHQGKizlNVzC09q8%2FSE8E8xoPP1btrKP9iDSZaDSWSfQZB5PSRf%2B%2Fho6q6MCYwAm9KcvWQJVOVk%2BJe8vg2nabf6KED6B7ppbP%2FqoLsCVfe%2BuSfH0cuqjcoOJ2vLx4klazzEs%2BtQ%2Fagijl%2FNA%2FHLSEoq5CbiR7Dq60bDI8w6ZmC%2B0plHypJQHzd5l30Wbm2rBmvqZqk86HZLs1VRlMuYzP6rTvXp6RDsBXmCyhJ1gkgAtGlQdwsgghHRGyHFyqU2blhSn8RV%2FPNEcy%2FRmgpjzGK%2FA%2BzuViFK9jyzlMKrVDTlUInhwuZi9doH%2FvV49yE0nX6Il1iUWXuaUrJA5cHp8mUjO2pDB5HEGERSFYjzpp%2BAFHsXCzARpcEpXA94Vu2xTDGGEqYal864z4FdhOFZEEjQWuRY3s8FGbzzIRjYKhOJ%2B4n32JKPFzdN2Ew8PvLwgY6pgHyZQGCuyQBeoFsm7XZomfnWzOXAztttyeTTVV1Ckr14JWQqHoV2DCt%2FoHaBrnfaI2yvmamG3ZqPQa9wItCYuCnSYz7C4kbp2f26PTL6I2PUWIjFfrR75o4T6FBFKLDgoo0jvwTa94ztxU1wa%2BHmfMNZDCIA8eGRW66HD4c1qE%2BTvxeAngpSoozSCwepZA2NSarxE%2Bs6LikRIzFUFrC8QcszGXVJz0M&X-Amz-Signature=50b02aef4f49e483c1f09cebbe7451f8d16ff2563ebcfe68b81f7b39e2e8f952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEYRPZ2K%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVyC4zz2RCAvVXBlA8h5401AP7LYjZOQisvnDPgdatpAiBEJJuedpu6U0dLGvDL6I1uiNDL1O%2Bi0I8Hf1A5uYVJdCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfF3eHNaUoAX17lzKtwD2Z7iOQU7NA5%2BW65DpU7NLX5cknJZvkWKbWSK3AK1aILJdX1muQoJbkQNs1Ob1dLTmWbpV5CaGx0SViZ4Q7LvbQRcGXIGgvr9PV7uAO6hbbw1iphOTvyT90H1y5gF9yqHecXqdPniLP8KfJonkYongi95qMa4xwTc7J6Gtbp4%2BR0CuZEvret%2FodkgZ5cCNUduakTHQGKizlNVzC09q8%2FSE8E8xoPP1btrKP9iDSZaDSWSfQZB5PSRf%2B%2Fho6q6MCYwAm9KcvWQJVOVk%2BJe8vg2nabf6KED6B7ppbP%2FqoLsCVfe%2BuSfH0cuqjcoOJ2vLx4klazzEs%2BtQ%2Fagijl%2FNA%2FHLSEoq5CbiR7Dq60bDI8w6ZmC%2B0plHypJQHzd5l30Wbm2rBmvqZqk86HZLs1VRlMuYzP6rTvXp6RDsBXmCyhJ1gkgAtGlQdwsgghHRGyHFyqU2blhSn8RV%2FPNEcy%2FRmgpjzGK%2FA%2BzuViFK9jyzlMKrVDTlUInhwuZi9doH%2FvV49yE0nX6Il1iUWXuaUrJA5cHp8mUjO2pDB5HEGERSFYjzpp%2BAFHsXCzARpcEpXA94Vu2xTDGGEqYal864z4FdhOFZEEjQWuRY3s8FGbzzIRjYKhOJ%2B4n32JKPFzdN2Ew8PvLwgY6pgHyZQGCuyQBeoFsm7XZomfnWzOXAztttyeTTVV1Ckr14JWQqHoV2DCt%2FoHaBrnfaI2yvmamG3ZqPQa9wItCYuCnSYz7C4kbp2f26PTL6I2PUWIjFfrR75o4T6FBFKLDgoo0jvwTa94ztxU1wa%2BHmfMNZDCIA8eGRW66HD4c1qE%2BTvxeAngpSoozSCwepZA2NSarxE%2Bs6LikRIzFUFrC8QcszGXVJz0M&X-Amz-Signature=f0326e945df8cc269fb8c006861a897d0960c8bbee7b8368ec7f546443ca61ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEYRPZ2K%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVyC4zz2RCAvVXBlA8h5401AP7LYjZOQisvnDPgdatpAiBEJJuedpu6U0dLGvDL6I1uiNDL1O%2Bi0I8Hf1A5uYVJdCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfF3eHNaUoAX17lzKtwD2Z7iOQU7NA5%2BW65DpU7NLX5cknJZvkWKbWSK3AK1aILJdX1muQoJbkQNs1Ob1dLTmWbpV5CaGx0SViZ4Q7LvbQRcGXIGgvr9PV7uAO6hbbw1iphOTvyT90H1y5gF9yqHecXqdPniLP8KfJonkYongi95qMa4xwTc7J6Gtbp4%2BR0CuZEvret%2FodkgZ5cCNUduakTHQGKizlNVzC09q8%2FSE8E8xoPP1btrKP9iDSZaDSWSfQZB5PSRf%2B%2Fho6q6MCYwAm9KcvWQJVOVk%2BJe8vg2nabf6KED6B7ppbP%2FqoLsCVfe%2BuSfH0cuqjcoOJ2vLx4klazzEs%2BtQ%2Fagijl%2FNA%2FHLSEoq5CbiR7Dq60bDI8w6ZmC%2B0plHypJQHzd5l30Wbm2rBmvqZqk86HZLs1VRlMuYzP6rTvXp6RDsBXmCyhJ1gkgAtGlQdwsgghHRGyHFyqU2blhSn8RV%2FPNEcy%2FRmgpjzGK%2FA%2BzuViFK9jyzlMKrVDTlUInhwuZi9doH%2FvV49yE0nX6Il1iUWXuaUrJA5cHp8mUjO2pDB5HEGERSFYjzpp%2BAFHsXCzARpcEpXA94Vu2xTDGGEqYal864z4FdhOFZEEjQWuRY3s8FGbzzIRjYKhOJ%2B4n32JKPFzdN2Ew8PvLwgY6pgHyZQGCuyQBeoFsm7XZomfnWzOXAztttyeTTVV1Ckr14JWQqHoV2DCt%2FoHaBrnfaI2yvmamG3ZqPQa9wItCYuCnSYz7C4kbp2f26PTL6I2PUWIjFfrR75o4T6FBFKLDgoo0jvwTa94ztxU1wa%2BHmfMNZDCIA8eGRW66HD4c1qE%2BTvxeAngpSoozSCwepZA2NSarxE%2Bs6LikRIzFUFrC8QcszGXVJz0M&X-Amz-Signature=02be1c7f2a4cd50d7325571da05bdbc0b4295b08e8d186e8641cac84f7efd9a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEYRPZ2K%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVyC4zz2RCAvVXBlA8h5401AP7LYjZOQisvnDPgdatpAiBEJJuedpu6U0dLGvDL6I1uiNDL1O%2Bi0I8Hf1A5uYVJdCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfF3eHNaUoAX17lzKtwD2Z7iOQU7NA5%2BW65DpU7NLX5cknJZvkWKbWSK3AK1aILJdX1muQoJbkQNs1Ob1dLTmWbpV5CaGx0SViZ4Q7LvbQRcGXIGgvr9PV7uAO6hbbw1iphOTvyT90H1y5gF9yqHecXqdPniLP8KfJonkYongi95qMa4xwTc7J6Gtbp4%2BR0CuZEvret%2FodkgZ5cCNUduakTHQGKizlNVzC09q8%2FSE8E8xoPP1btrKP9iDSZaDSWSfQZB5PSRf%2B%2Fho6q6MCYwAm9KcvWQJVOVk%2BJe8vg2nabf6KED6B7ppbP%2FqoLsCVfe%2BuSfH0cuqjcoOJ2vLx4klazzEs%2BtQ%2Fagijl%2FNA%2FHLSEoq5CbiR7Dq60bDI8w6ZmC%2B0plHypJQHzd5l30Wbm2rBmvqZqk86HZLs1VRlMuYzP6rTvXp6RDsBXmCyhJ1gkgAtGlQdwsgghHRGyHFyqU2blhSn8RV%2FPNEcy%2FRmgpjzGK%2FA%2BzuViFK9jyzlMKrVDTlUInhwuZi9doH%2FvV49yE0nX6Il1iUWXuaUrJA5cHp8mUjO2pDB5HEGERSFYjzpp%2BAFHsXCzARpcEpXA94Vu2xTDGGEqYal864z4FdhOFZEEjQWuRY3s8FGbzzIRjYKhOJ%2B4n32JKPFzdN2Ew8PvLwgY6pgHyZQGCuyQBeoFsm7XZomfnWzOXAztttyeTTVV1Ckr14JWQqHoV2DCt%2FoHaBrnfaI2yvmamG3ZqPQa9wItCYuCnSYz7C4kbp2f26PTL6I2PUWIjFfrR75o4T6FBFKLDgoo0jvwTa94ztxU1wa%2BHmfMNZDCIA8eGRW66HD4c1qE%2BTvxeAngpSoozSCwepZA2NSarxE%2Bs6LikRIzFUFrC8QcszGXVJz0M&X-Amz-Signature=7ad5c606de47e9cf5d69122144f420819903f46bfb392326f0401b77f605d109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEYRPZ2K%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVyC4zz2RCAvVXBlA8h5401AP7LYjZOQisvnDPgdatpAiBEJJuedpu6U0dLGvDL6I1uiNDL1O%2Bi0I8Hf1A5uYVJdCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfF3eHNaUoAX17lzKtwD2Z7iOQU7NA5%2BW65DpU7NLX5cknJZvkWKbWSK3AK1aILJdX1muQoJbkQNs1Ob1dLTmWbpV5CaGx0SViZ4Q7LvbQRcGXIGgvr9PV7uAO6hbbw1iphOTvyT90H1y5gF9yqHecXqdPniLP8KfJonkYongi95qMa4xwTc7J6Gtbp4%2BR0CuZEvret%2FodkgZ5cCNUduakTHQGKizlNVzC09q8%2FSE8E8xoPP1btrKP9iDSZaDSWSfQZB5PSRf%2B%2Fho6q6MCYwAm9KcvWQJVOVk%2BJe8vg2nabf6KED6B7ppbP%2FqoLsCVfe%2BuSfH0cuqjcoOJ2vLx4klazzEs%2BtQ%2Fagijl%2FNA%2FHLSEoq5CbiR7Dq60bDI8w6ZmC%2B0plHypJQHzd5l30Wbm2rBmvqZqk86HZLs1VRlMuYzP6rTvXp6RDsBXmCyhJ1gkgAtGlQdwsgghHRGyHFyqU2blhSn8RV%2FPNEcy%2FRmgpjzGK%2FA%2BzuViFK9jyzlMKrVDTlUInhwuZi9doH%2FvV49yE0nX6Il1iUWXuaUrJA5cHp8mUjO2pDB5HEGERSFYjzpp%2BAFHsXCzARpcEpXA94Vu2xTDGGEqYal864z4FdhOFZEEjQWuRY3s8FGbzzIRjYKhOJ%2B4n32JKPFzdN2Ew8PvLwgY6pgHyZQGCuyQBeoFsm7XZomfnWzOXAztttyeTTVV1Ckr14JWQqHoV2DCt%2FoHaBrnfaI2yvmamG3ZqPQa9wItCYuCnSYz7C4kbp2f26PTL6I2PUWIjFfrR75o4T6FBFKLDgoo0jvwTa94ztxU1wa%2BHmfMNZDCIA8eGRW66HD4c1qE%2BTvxeAngpSoozSCwepZA2NSarxE%2Bs6LikRIzFUFrC8QcszGXVJz0M&X-Amz-Signature=fe9cf1b440c2fee5aec0f891f44b26f123c9ed20f2c99aaf1bdc391eba76e392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEYRPZ2K%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVyC4zz2RCAvVXBlA8h5401AP7LYjZOQisvnDPgdatpAiBEJJuedpu6U0dLGvDL6I1uiNDL1O%2Bi0I8Hf1A5uYVJdCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfF3eHNaUoAX17lzKtwD2Z7iOQU7NA5%2BW65DpU7NLX5cknJZvkWKbWSK3AK1aILJdX1muQoJbkQNs1Ob1dLTmWbpV5CaGx0SViZ4Q7LvbQRcGXIGgvr9PV7uAO6hbbw1iphOTvyT90H1y5gF9yqHecXqdPniLP8KfJonkYongi95qMa4xwTc7J6Gtbp4%2BR0CuZEvret%2FodkgZ5cCNUduakTHQGKizlNVzC09q8%2FSE8E8xoPP1btrKP9iDSZaDSWSfQZB5PSRf%2B%2Fho6q6MCYwAm9KcvWQJVOVk%2BJe8vg2nabf6KED6B7ppbP%2FqoLsCVfe%2BuSfH0cuqjcoOJ2vLx4klazzEs%2BtQ%2Fagijl%2FNA%2FHLSEoq5CbiR7Dq60bDI8w6ZmC%2B0plHypJQHzd5l30Wbm2rBmvqZqk86HZLs1VRlMuYzP6rTvXp6RDsBXmCyhJ1gkgAtGlQdwsgghHRGyHFyqU2blhSn8RV%2FPNEcy%2FRmgpjzGK%2FA%2BzuViFK9jyzlMKrVDTlUInhwuZi9doH%2FvV49yE0nX6Il1iUWXuaUrJA5cHp8mUjO2pDB5HEGERSFYjzpp%2BAFHsXCzARpcEpXA94Vu2xTDGGEqYal864z4FdhOFZEEjQWuRY3s8FGbzzIRjYKhOJ%2B4n32JKPFzdN2Ew8PvLwgY6pgHyZQGCuyQBeoFsm7XZomfnWzOXAztttyeTTVV1Ckr14JWQqHoV2DCt%2FoHaBrnfaI2yvmamG3ZqPQa9wItCYuCnSYz7C4kbp2f26PTL6I2PUWIjFfrR75o4T6FBFKLDgoo0jvwTa94ztxU1wa%2BHmfMNZDCIA8eGRW66HD4c1qE%2BTvxeAngpSoozSCwepZA2NSarxE%2Bs6LikRIzFUFrC8QcszGXVJz0M&X-Amz-Signature=245f127d47803761c95451a49b3565cb3c53cf94157f789da53fd80ca24ba38d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
