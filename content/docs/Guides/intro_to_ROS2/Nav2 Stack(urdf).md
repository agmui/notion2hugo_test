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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672JAYKUX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHy3WMZJ%2FwjXE%2Fh2IWa6aes%2B5uxQn5OmvxXUZGIlgDdjAiBP7AGbkh%2F5ViCKSETurJ%2BmM5%2FP98sO54r9hXFOSTUBnCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMki7niPB353o1U8iVKtwDEE5HCgdHvjOaQPHoJ%2FriPR8YrsMdFh671HE6z30D%2FVvQQ6eKVsmsCZ3s130jzG61AaOxHYb3L9uf8OsqE4vK4IC8OKmgq59ZcGUEMippf5hMTYgkTpzFzCFTsvxp%2BZNhGJcuMauA5jcwhfuaWpqgB5Bed4KdEfjFqUmUpmQ2tFN2xeaXNEAQfD7qu%2FDDabJTmudzIxFsTtagxwdxN0n8sK9fBUnfxv1W0hkQo1PRI6Pv0BrI6fRlR5Yk0bHibf4szQkqBUG%2F4dqg0YPIJuUtNyANrlZd201ZYLhb2g2rko07mxDU0uqbzYmplxy2Zq2VydKyj8rkn%2Fq2b4nIJ76D%2B6yTnutBmDKzEln9unUgSbe5KTGfxH6qj4dI%2FPxBwg%2BGLDr%2FdGKGV619ZtHkkqLinFfAKC%2F3L3LdNAlBGnf6GTds%2FZvw0oExRxaj%2Fk57WTxc6MppBgHnlBnFhJSKF6opYhb4mQEptwKfVXTUZK56U54LjpmhoC30tO0zqaWN6Oldael96p50ps9ID1TU%2BCLmxGZ7MmYC3g8t%2FvoVTSqgIiSGdLaQKXIQ7myzVI%2FgcixjJ%2F%2BR3TmZCh0G8vjilWU3%2B%2FIH8tiKQaNZTw3903WhjhYrMJ0VXjg01o22On4wve35wQY6pgF1sUzPJmP5zA3KoP4P1lZFo0jAv%2B1CVeNCL9YOdtIRL81kc2myenz3nWdE5cb2lZkcXIM%2F4S163AQMWxxQhedNnMMMQRqV%2Bn4LhE%2F9Sq72V68q8BSDXA%2FmqmxbZEDcBWs6ktM3p2%2FT3RPfq7i51Zv3izMYjhFSsx33RvsDZTKaqHm9X4PGkIkYcv0ccgM6YSR2GVgIiqtmEIFKvZ1gBd2HoBGuCTyg&X-Amz-Signature=57c5a9be61c1052feb819f9742c12f5fd84b1ec11d026cf9b118d8d60dde7230&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672JAYKUX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHy3WMZJ%2FwjXE%2Fh2IWa6aes%2B5uxQn5OmvxXUZGIlgDdjAiBP7AGbkh%2F5ViCKSETurJ%2BmM5%2FP98sO54r9hXFOSTUBnCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMki7niPB353o1U8iVKtwDEE5HCgdHvjOaQPHoJ%2FriPR8YrsMdFh671HE6z30D%2FVvQQ6eKVsmsCZ3s130jzG61AaOxHYb3L9uf8OsqE4vK4IC8OKmgq59ZcGUEMippf5hMTYgkTpzFzCFTsvxp%2BZNhGJcuMauA5jcwhfuaWpqgB5Bed4KdEfjFqUmUpmQ2tFN2xeaXNEAQfD7qu%2FDDabJTmudzIxFsTtagxwdxN0n8sK9fBUnfxv1W0hkQo1PRI6Pv0BrI6fRlR5Yk0bHibf4szQkqBUG%2F4dqg0YPIJuUtNyANrlZd201ZYLhb2g2rko07mxDU0uqbzYmplxy2Zq2VydKyj8rkn%2Fq2b4nIJ76D%2B6yTnutBmDKzEln9unUgSbe5KTGfxH6qj4dI%2FPxBwg%2BGLDr%2FdGKGV619ZtHkkqLinFfAKC%2F3L3LdNAlBGnf6GTds%2FZvw0oExRxaj%2Fk57WTxc6MppBgHnlBnFhJSKF6opYhb4mQEptwKfVXTUZK56U54LjpmhoC30tO0zqaWN6Oldael96p50ps9ID1TU%2BCLmxGZ7MmYC3g8t%2FvoVTSqgIiSGdLaQKXIQ7myzVI%2FgcixjJ%2F%2BR3TmZCh0G8vjilWU3%2B%2FIH8tiKQaNZTw3903WhjhYrMJ0VXjg01o22On4wve35wQY6pgF1sUzPJmP5zA3KoP4P1lZFo0jAv%2B1CVeNCL9YOdtIRL81kc2myenz3nWdE5cb2lZkcXIM%2F4S163AQMWxxQhedNnMMMQRqV%2Bn4LhE%2F9Sq72V68q8BSDXA%2FmqmxbZEDcBWs6ktM3p2%2FT3RPfq7i51Zv3izMYjhFSsx33RvsDZTKaqHm9X4PGkIkYcv0ccgM6YSR2GVgIiqtmEIFKvZ1gBd2HoBGuCTyg&X-Amz-Signature=cd0e0c22642d31793e9565268c44245a4b635e269bf8e2c1cf330a1e62315c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672JAYKUX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHy3WMZJ%2FwjXE%2Fh2IWa6aes%2B5uxQn5OmvxXUZGIlgDdjAiBP7AGbkh%2F5ViCKSETurJ%2BmM5%2FP98sO54r9hXFOSTUBnCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMki7niPB353o1U8iVKtwDEE5HCgdHvjOaQPHoJ%2FriPR8YrsMdFh671HE6z30D%2FVvQQ6eKVsmsCZ3s130jzG61AaOxHYb3L9uf8OsqE4vK4IC8OKmgq59ZcGUEMippf5hMTYgkTpzFzCFTsvxp%2BZNhGJcuMauA5jcwhfuaWpqgB5Bed4KdEfjFqUmUpmQ2tFN2xeaXNEAQfD7qu%2FDDabJTmudzIxFsTtagxwdxN0n8sK9fBUnfxv1W0hkQo1PRI6Pv0BrI6fRlR5Yk0bHibf4szQkqBUG%2F4dqg0YPIJuUtNyANrlZd201ZYLhb2g2rko07mxDU0uqbzYmplxy2Zq2VydKyj8rkn%2Fq2b4nIJ76D%2B6yTnutBmDKzEln9unUgSbe5KTGfxH6qj4dI%2FPxBwg%2BGLDr%2FdGKGV619ZtHkkqLinFfAKC%2F3L3LdNAlBGnf6GTds%2FZvw0oExRxaj%2Fk57WTxc6MppBgHnlBnFhJSKF6opYhb4mQEptwKfVXTUZK56U54LjpmhoC30tO0zqaWN6Oldael96p50ps9ID1TU%2BCLmxGZ7MmYC3g8t%2FvoVTSqgIiSGdLaQKXIQ7myzVI%2FgcixjJ%2F%2BR3TmZCh0G8vjilWU3%2B%2FIH8tiKQaNZTw3903WhjhYrMJ0VXjg01o22On4wve35wQY6pgF1sUzPJmP5zA3KoP4P1lZFo0jAv%2B1CVeNCL9YOdtIRL81kc2myenz3nWdE5cb2lZkcXIM%2F4S163AQMWxxQhedNnMMMQRqV%2Bn4LhE%2F9Sq72V68q8BSDXA%2FmqmxbZEDcBWs6ktM3p2%2FT3RPfq7i51Zv3izMYjhFSsx33RvsDZTKaqHm9X4PGkIkYcv0ccgM6YSR2GVgIiqtmEIFKvZ1gBd2HoBGuCTyg&X-Amz-Signature=dc96531be762e1b11f3069b772c8b29fcc80aeaf24fa294f54ca5bb1a49a87a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672JAYKUX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHy3WMZJ%2FwjXE%2Fh2IWa6aes%2B5uxQn5OmvxXUZGIlgDdjAiBP7AGbkh%2F5ViCKSETurJ%2BmM5%2FP98sO54r9hXFOSTUBnCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMki7niPB353o1U8iVKtwDEE5HCgdHvjOaQPHoJ%2FriPR8YrsMdFh671HE6z30D%2FVvQQ6eKVsmsCZ3s130jzG61AaOxHYb3L9uf8OsqE4vK4IC8OKmgq59ZcGUEMippf5hMTYgkTpzFzCFTsvxp%2BZNhGJcuMauA5jcwhfuaWpqgB5Bed4KdEfjFqUmUpmQ2tFN2xeaXNEAQfD7qu%2FDDabJTmudzIxFsTtagxwdxN0n8sK9fBUnfxv1W0hkQo1PRI6Pv0BrI6fRlR5Yk0bHibf4szQkqBUG%2F4dqg0YPIJuUtNyANrlZd201ZYLhb2g2rko07mxDU0uqbzYmplxy2Zq2VydKyj8rkn%2Fq2b4nIJ76D%2B6yTnutBmDKzEln9unUgSbe5KTGfxH6qj4dI%2FPxBwg%2BGLDr%2FdGKGV619ZtHkkqLinFfAKC%2F3L3LdNAlBGnf6GTds%2FZvw0oExRxaj%2Fk57WTxc6MppBgHnlBnFhJSKF6opYhb4mQEptwKfVXTUZK56U54LjpmhoC30tO0zqaWN6Oldael96p50ps9ID1TU%2BCLmxGZ7MmYC3g8t%2FvoVTSqgIiSGdLaQKXIQ7myzVI%2FgcixjJ%2F%2BR3TmZCh0G8vjilWU3%2B%2FIH8tiKQaNZTw3903WhjhYrMJ0VXjg01o22On4wve35wQY6pgF1sUzPJmP5zA3KoP4P1lZFo0jAv%2B1CVeNCL9YOdtIRL81kc2myenz3nWdE5cb2lZkcXIM%2F4S163AQMWxxQhedNnMMMQRqV%2Bn4LhE%2F9Sq72V68q8BSDXA%2FmqmxbZEDcBWs6ktM3p2%2FT3RPfq7i51Zv3izMYjhFSsx33RvsDZTKaqHm9X4PGkIkYcv0ccgM6YSR2GVgIiqtmEIFKvZ1gBd2HoBGuCTyg&X-Amz-Signature=79187079cb5e576ffc533f30cb806051f1bd4497cf7f253fd5036bdc9d383454&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672JAYKUX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHy3WMZJ%2FwjXE%2Fh2IWa6aes%2B5uxQn5OmvxXUZGIlgDdjAiBP7AGbkh%2F5ViCKSETurJ%2BmM5%2FP98sO54r9hXFOSTUBnCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMki7niPB353o1U8iVKtwDEE5HCgdHvjOaQPHoJ%2FriPR8YrsMdFh671HE6z30D%2FVvQQ6eKVsmsCZ3s130jzG61AaOxHYb3L9uf8OsqE4vK4IC8OKmgq59ZcGUEMippf5hMTYgkTpzFzCFTsvxp%2BZNhGJcuMauA5jcwhfuaWpqgB5Bed4KdEfjFqUmUpmQ2tFN2xeaXNEAQfD7qu%2FDDabJTmudzIxFsTtagxwdxN0n8sK9fBUnfxv1W0hkQo1PRI6Pv0BrI6fRlR5Yk0bHibf4szQkqBUG%2F4dqg0YPIJuUtNyANrlZd201ZYLhb2g2rko07mxDU0uqbzYmplxy2Zq2VydKyj8rkn%2Fq2b4nIJ76D%2B6yTnutBmDKzEln9unUgSbe5KTGfxH6qj4dI%2FPxBwg%2BGLDr%2FdGKGV619ZtHkkqLinFfAKC%2F3L3LdNAlBGnf6GTds%2FZvw0oExRxaj%2Fk57WTxc6MppBgHnlBnFhJSKF6opYhb4mQEptwKfVXTUZK56U54LjpmhoC30tO0zqaWN6Oldael96p50ps9ID1TU%2BCLmxGZ7MmYC3g8t%2FvoVTSqgIiSGdLaQKXIQ7myzVI%2FgcixjJ%2F%2BR3TmZCh0G8vjilWU3%2B%2FIH8tiKQaNZTw3903WhjhYrMJ0VXjg01o22On4wve35wQY6pgF1sUzPJmP5zA3KoP4P1lZFo0jAv%2B1CVeNCL9YOdtIRL81kc2myenz3nWdE5cb2lZkcXIM%2F4S163AQMWxxQhedNnMMMQRqV%2Bn4LhE%2F9Sq72V68q8BSDXA%2FmqmxbZEDcBWs6ktM3p2%2FT3RPfq7i51Zv3izMYjhFSsx33RvsDZTKaqHm9X4PGkIkYcv0ccgM6YSR2GVgIiqtmEIFKvZ1gBd2HoBGuCTyg&X-Amz-Signature=9cc9516cd726549ce17e4f94df3bc787e1b7a9dbec3b45c6b91991085b748204&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672JAYKUX%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T041625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIHy3WMZJ%2FwjXE%2Fh2IWa6aes%2B5uxQn5OmvxXUZGIlgDdjAiBP7AGbkh%2F5ViCKSETurJ%2BmM5%2FP98sO54r9hXFOSTUBnCqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMki7niPB353o1U8iVKtwDEE5HCgdHvjOaQPHoJ%2FriPR8YrsMdFh671HE6z30D%2FVvQQ6eKVsmsCZ3s130jzG61AaOxHYb3L9uf8OsqE4vK4IC8OKmgq59ZcGUEMippf5hMTYgkTpzFzCFTsvxp%2BZNhGJcuMauA5jcwhfuaWpqgB5Bed4KdEfjFqUmUpmQ2tFN2xeaXNEAQfD7qu%2FDDabJTmudzIxFsTtagxwdxN0n8sK9fBUnfxv1W0hkQo1PRI6Pv0BrI6fRlR5Yk0bHibf4szQkqBUG%2F4dqg0YPIJuUtNyANrlZd201ZYLhb2g2rko07mxDU0uqbzYmplxy2Zq2VydKyj8rkn%2Fq2b4nIJ76D%2B6yTnutBmDKzEln9unUgSbe5KTGfxH6qj4dI%2FPxBwg%2BGLDr%2FdGKGV619ZtHkkqLinFfAKC%2F3L3LdNAlBGnf6GTds%2FZvw0oExRxaj%2Fk57WTxc6MppBgHnlBnFhJSKF6opYhb4mQEptwKfVXTUZK56U54LjpmhoC30tO0zqaWN6Oldael96p50ps9ID1TU%2BCLmxGZ7MmYC3g8t%2FvoVTSqgIiSGdLaQKXIQ7myzVI%2FgcixjJ%2F%2BR3TmZCh0G8vjilWU3%2B%2FIH8tiKQaNZTw3903WhjhYrMJ0VXjg01o22On4wve35wQY6pgF1sUzPJmP5zA3KoP4P1lZFo0jAv%2B1CVeNCL9YOdtIRL81kc2myenz3nWdE5cb2lZkcXIM%2F4S163AQMWxxQhedNnMMMQRqV%2Bn4LhE%2F9Sq72V68q8BSDXA%2FmqmxbZEDcBWs6ktM3p2%2FT3RPfq7i51Zv3izMYjhFSsx33RvsDZTKaqHm9X4PGkIkYcv0ccgM6YSR2GVgIiqtmEIFKvZ1gBd2HoBGuCTyg&X-Amz-Signature=39307c6f6d713406d5d562d427d5c4315219627ba516d84eefb12af178238206&X-Amz-SignedHeaders=host&x-id=GetObject)
