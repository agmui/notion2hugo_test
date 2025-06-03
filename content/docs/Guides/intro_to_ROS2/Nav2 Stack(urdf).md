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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV4ZYGIY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAYST4PRicGf2fRnDhM3qTNfrSxGGBVviXmK5yQ5XNs%2BAiAi45jq0JJFWp2EQvzbSEJepbljTpCnK2pRtuUxK2w0tiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyIbPmmsuV0PsSPc2KtwD8izFgEitoq6JkDKDNOOk9SnO%2FTCHYMitcLSa0hiQ278Q2NPbwJzsIW0SOKAxRYwI57huItiiwPiK8XfS0Ak%2BcE3xO%2BV0BWBiJSuGuGxB9PcpZC0a1lJm5%2FWHJSlNIMZIpje7ZaQovJ206t7Ln4LR2sAuJhB%2BkVhRfzZJmZCdAt77eAi%2BIvLXMLCzKTs1thCP%2B8oklolNLX%2Bq1d4KRQUl15pmkeVzr%2Fc%2Fn%2BPkmbYFSRccM%2Bn06QDRevM5olIvPSydjzc9svD97tUeG322YEPAUHes%2BMvDJTIzcXbuNbiz1gPEQ3e5uLCAsFXXkz7hHnPziZWynn5tYp2znmoyKt46vAG2FWINzjQIXFNVhtbVWXfEhwXA9jn%2F1IoY1YVZn6JEAvDa7TEK1zDygeYZe2qR85lrnUQ35O8kbYwwIDenmuUEd%2F3%2BBT8xpuKWkjKEU5w7xcNKYUXTxg2GBZ9tPNZ28XGoZGCJSX87Ag%2FTgEMfMvjh0Mpk6ZeQkTizVV0MSE%2F3fPBQayghzadcRyDwob5Y0BdH5RKW4mXUfBXKNN3WJ6HlNF5hpoTyl5uwRM6RXI%2BSuqm6ETFMsMyvzQEgAL%2B6YxDHMvRuGVM7P1zmGofqzUIceb291H3zsup89iIwy8T5wQY6pgHKiqINaQ9KugSlbbvLTCKj98AOl8VgEXdh%2FixRaW62rfBjWq9wiPCM2Y4i9ZsJ3BRkbH%2Ft7NPHzbeLEUULEG7CUZm5iW5HMftSTuRE1V3b0MOVKMODPiBEhrvToUH8FyW4L%2BozYQ8XXBjxqoSwIu%2BlZL9kYwhi%2FxaIKOgHYJ%2FbPHFqHIhrFZXIqY0pj8uEb5fU%2BOYM3vhwXAIGC%2FA7XKnGx5z88OxT&X-Amz-Signature=f6a672a7656fa31acb76e0491800051624b5181d92529df40f1c83ed0c1da1c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV4ZYGIY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAYST4PRicGf2fRnDhM3qTNfrSxGGBVviXmK5yQ5XNs%2BAiAi45jq0JJFWp2EQvzbSEJepbljTpCnK2pRtuUxK2w0tiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyIbPmmsuV0PsSPc2KtwD8izFgEitoq6JkDKDNOOk9SnO%2FTCHYMitcLSa0hiQ278Q2NPbwJzsIW0SOKAxRYwI57huItiiwPiK8XfS0Ak%2BcE3xO%2BV0BWBiJSuGuGxB9PcpZC0a1lJm5%2FWHJSlNIMZIpje7ZaQovJ206t7Ln4LR2sAuJhB%2BkVhRfzZJmZCdAt77eAi%2BIvLXMLCzKTs1thCP%2B8oklolNLX%2Bq1d4KRQUl15pmkeVzr%2Fc%2Fn%2BPkmbYFSRccM%2Bn06QDRevM5olIvPSydjzc9svD97tUeG322YEPAUHes%2BMvDJTIzcXbuNbiz1gPEQ3e5uLCAsFXXkz7hHnPziZWynn5tYp2znmoyKt46vAG2FWINzjQIXFNVhtbVWXfEhwXA9jn%2F1IoY1YVZn6JEAvDa7TEK1zDygeYZe2qR85lrnUQ35O8kbYwwIDenmuUEd%2F3%2BBT8xpuKWkjKEU5w7xcNKYUXTxg2GBZ9tPNZ28XGoZGCJSX87Ag%2FTgEMfMvjh0Mpk6ZeQkTizVV0MSE%2F3fPBQayghzadcRyDwob5Y0BdH5RKW4mXUfBXKNN3WJ6HlNF5hpoTyl5uwRM6RXI%2BSuqm6ETFMsMyvzQEgAL%2B6YxDHMvRuGVM7P1zmGofqzUIceb291H3zsup89iIwy8T5wQY6pgHKiqINaQ9KugSlbbvLTCKj98AOl8VgEXdh%2FixRaW62rfBjWq9wiPCM2Y4i9ZsJ3BRkbH%2Ft7NPHzbeLEUULEG7CUZm5iW5HMftSTuRE1V3b0MOVKMODPiBEhrvToUH8FyW4L%2BozYQ8XXBjxqoSwIu%2BlZL9kYwhi%2FxaIKOgHYJ%2FbPHFqHIhrFZXIqY0pj8uEb5fU%2BOYM3vhwXAIGC%2FA7XKnGx5z88OxT&X-Amz-Signature=e343df24dce02a6e653cc472bdb5deafcc018dc592e753e81b342bf53ae30f31&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV4ZYGIY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAYST4PRicGf2fRnDhM3qTNfrSxGGBVviXmK5yQ5XNs%2BAiAi45jq0JJFWp2EQvzbSEJepbljTpCnK2pRtuUxK2w0tiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyIbPmmsuV0PsSPc2KtwD8izFgEitoq6JkDKDNOOk9SnO%2FTCHYMitcLSa0hiQ278Q2NPbwJzsIW0SOKAxRYwI57huItiiwPiK8XfS0Ak%2BcE3xO%2BV0BWBiJSuGuGxB9PcpZC0a1lJm5%2FWHJSlNIMZIpje7ZaQovJ206t7Ln4LR2sAuJhB%2BkVhRfzZJmZCdAt77eAi%2BIvLXMLCzKTs1thCP%2B8oklolNLX%2Bq1d4KRQUl15pmkeVzr%2Fc%2Fn%2BPkmbYFSRccM%2Bn06QDRevM5olIvPSydjzc9svD97tUeG322YEPAUHes%2BMvDJTIzcXbuNbiz1gPEQ3e5uLCAsFXXkz7hHnPziZWynn5tYp2znmoyKt46vAG2FWINzjQIXFNVhtbVWXfEhwXA9jn%2F1IoY1YVZn6JEAvDa7TEK1zDygeYZe2qR85lrnUQ35O8kbYwwIDenmuUEd%2F3%2BBT8xpuKWkjKEU5w7xcNKYUXTxg2GBZ9tPNZ28XGoZGCJSX87Ag%2FTgEMfMvjh0Mpk6ZeQkTizVV0MSE%2F3fPBQayghzadcRyDwob5Y0BdH5RKW4mXUfBXKNN3WJ6HlNF5hpoTyl5uwRM6RXI%2BSuqm6ETFMsMyvzQEgAL%2B6YxDHMvRuGVM7P1zmGofqzUIceb291H3zsup89iIwy8T5wQY6pgHKiqINaQ9KugSlbbvLTCKj98AOl8VgEXdh%2FixRaW62rfBjWq9wiPCM2Y4i9ZsJ3BRkbH%2Ft7NPHzbeLEUULEG7CUZm5iW5HMftSTuRE1V3b0MOVKMODPiBEhrvToUH8FyW4L%2BozYQ8XXBjxqoSwIu%2BlZL9kYwhi%2FxaIKOgHYJ%2FbPHFqHIhrFZXIqY0pj8uEb5fU%2BOYM3vhwXAIGC%2FA7XKnGx5z88OxT&X-Amz-Signature=63de545033f71045c9ef053e6656552e75c28c2832cd8d8e321876b3ae1603bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV4ZYGIY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAYST4PRicGf2fRnDhM3qTNfrSxGGBVviXmK5yQ5XNs%2BAiAi45jq0JJFWp2EQvzbSEJepbljTpCnK2pRtuUxK2w0tiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyIbPmmsuV0PsSPc2KtwD8izFgEitoq6JkDKDNOOk9SnO%2FTCHYMitcLSa0hiQ278Q2NPbwJzsIW0SOKAxRYwI57huItiiwPiK8XfS0Ak%2BcE3xO%2BV0BWBiJSuGuGxB9PcpZC0a1lJm5%2FWHJSlNIMZIpje7ZaQovJ206t7Ln4LR2sAuJhB%2BkVhRfzZJmZCdAt77eAi%2BIvLXMLCzKTs1thCP%2B8oklolNLX%2Bq1d4KRQUl15pmkeVzr%2Fc%2Fn%2BPkmbYFSRccM%2Bn06QDRevM5olIvPSydjzc9svD97tUeG322YEPAUHes%2BMvDJTIzcXbuNbiz1gPEQ3e5uLCAsFXXkz7hHnPziZWynn5tYp2znmoyKt46vAG2FWINzjQIXFNVhtbVWXfEhwXA9jn%2F1IoY1YVZn6JEAvDa7TEK1zDygeYZe2qR85lrnUQ35O8kbYwwIDenmuUEd%2F3%2BBT8xpuKWkjKEU5w7xcNKYUXTxg2GBZ9tPNZ28XGoZGCJSX87Ag%2FTgEMfMvjh0Mpk6ZeQkTizVV0MSE%2F3fPBQayghzadcRyDwob5Y0BdH5RKW4mXUfBXKNN3WJ6HlNF5hpoTyl5uwRM6RXI%2BSuqm6ETFMsMyvzQEgAL%2B6YxDHMvRuGVM7P1zmGofqzUIceb291H3zsup89iIwy8T5wQY6pgHKiqINaQ9KugSlbbvLTCKj98AOl8VgEXdh%2FixRaW62rfBjWq9wiPCM2Y4i9ZsJ3BRkbH%2Ft7NPHzbeLEUULEG7CUZm5iW5HMftSTuRE1V3b0MOVKMODPiBEhrvToUH8FyW4L%2BozYQ8XXBjxqoSwIu%2BlZL9kYwhi%2FxaIKOgHYJ%2FbPHFqHIhrFZXIqY0pj8uEb5fU%2BOYM3vhwXAIGC%2FA7XKnGx5z88OxT&X-Amz-Signature=9977bc5908c2553403ccf4852956ca8cba8292332bc12c62a11ac2fcb3cc341f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV4ZYGIY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAYST4PRicGf2fRnDhM3qTNfrSxGGBVviXmK5yQ5XNs%2BAiAi45jq0JJFWp2EQvzbSEJepbljTpCnK2pRtuUxK2w0tiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyIbPmmsuV0PsSPc2KtwD8izFgEitoq6JkDKDNOOk9SnO%2FTCHYMitcLSa0hiQ278Q2NPbwJzsIW0SOKAxRYwI57huItiiwPiK8XfS0Ak%2BcE3xO%2BV0BWBiJSuGuGxB9PcpZC0a1lJm5%2FWHJSlNIMZIpje7ZaQovJ206t7Ln4LR2sAuJhB%2BkVhRfzZJmZCdAt77eAi%2BIvLXMLCzKTs1thCP%2B8oklolNLX%2Bq1d4KRQUl15pmkeVzr%2Fc%2Fn%2BPkmbYFSRccM%2Bn06QDRevM5olIvPSydjzc9svD97tUeG322YEPAUHes%2BMvDJTIzcXbuNbiz1gPEQ3e5uLCAsFXXkz7hHnPziZWynn5tYp2znmoyKt46vAG2FWINzjQIXFNVhtbVWXfEhwXA9jn%2F1IoY1YVZn6JEAvDa7TEK1zDygeYZe2qR85lrnUQ35O8kbYwwIDenmuUEd%2F3%2BBT8xpuKWkjKEU5w7xcNKYUXTxg2GBZ9tPNZ28XGoZGCJSX87Ag%2FTgEMfMvjh0Mpk6ZeQkTizVV0MSE%2F3fPBQayghzadcRyDwob5Y0BdH5RKW4mXUfBXKNN3WJ6HlNF5hpoTyl5uwRM6RXI%2BSuqm6ETFMsMyvzQEgAL%2B6YxDHMvRuGVM7P1zmGofqzUIceb291H3zsup89iIwy8T5wQY6pgHKiqINaQ9KugSlbbvLTCKj98AOl8VgEXdh%2FixRaW62rfBjWq9wiPCM2Y4i9ZsJ3BRkbH%2Ft7NPHzbeLEUULEG7CUZm5iW5HMftSTuRE1V3b0MOVKMODPiBEhrvToUH8FyW4L%2BozYQ8XXBjxqoSwIu%2BlZL9kYwhi%2FxaIKOgHYJ%2FbPHFqHIhrFZXIqY0pj8uEb5fU%2BOYM3vhwXAIGC%2FA7XKnGx5z88OxT&X-Amz-Signature=768cb1e2e170b80fdae6e2ceadc209288e5a64b0001e8be60ec6834f764b010b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV4ZYGIY%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAYST4PRicGf2fRnDhM3qTNfrSxGGBVviXmK5yQ5XNs%2BAiAi45jq0JJFWp2EQvzbSEJepbljTpCnK2pRtuUxK2w0tiqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyIbPmmsuV0PsSPc2KtwD8izFgEitoq6JkDKDNOOk9SnO%2FTCHYMitcLSa0hiQ278Q2NPbwJzsIW0SOKAxRYwI57huItiiwPiK8XfS0Ak%2BcE3xO%2BV0BWBiJSuGuGxB9PcpZC0a1lJm5%2FWHJSlNIMZIpje7ZaQovJ206t7Ln4LR2sAuJhB%2BkVhRfzZJmZCdAt77eAi%2BIvLXMLCzKTs1thCP%2B8oklolNLX%2Bq1d4KRQUl15pmkeVzr%2Fc%2Fn%2BPkmbYFSRccM%2Bn06QDRevM5olIvPSydjzc9svD97tUeG322YEPAUHes%2BMvDJTIzcXbuNbiz1gPEQ3e5uLCAsFXXkz7hHnPziZWynn5tYp2znmoyKt46vAG2FWINzjQIXFNVhtbVWXfEhwXA9jn%2F1IoY1YVZn6JEAvDa7TEK1zDygeYZe2qR85lrnUQ35O8kbYwwIDenmuUEd%2F3%2BBT8xpuKWkjKEU5w7xcNKYUXTxg2GBZ9tPNZ28XGoZGCJSX87Ag%2FTgEMfMvjh0Mpk6ZeQkTizVV0MSE%2F3fPBQayghzadcRyDwob5Y0BdH5RKW4mXUfBXKNN3WJ6HlNF5hpoTyl5uwRM6RXI%2BSuqm6ETFMsMyvzQEgAL%2B6YxDHMvRuGVM7P1zmGofqzUIceb291H3zsup89iIwy8T5wQY6pgHKiqINaQ9KugSlbbvLTCKj98AOl8VgEXdh%2FixRaW62rfBjWq9wiPCM2Y4i9ZsJ3BRkbH%2Ft7NPHzbeLEUULEG7CUZm5iW5HMftSTuRE1V3b0MOVKMODPiBEhrvToUH8FyW4L%2BozYQ8XXBjxqoSwIu%2BlZL9kYwhi%2FxaIKOgHYJ%2FbPHFqHIhrFZXIqY0pj8uEb5fU%2BOYM3vhwXAIGC%2FA7XKnGx5z88OxT&X-Amz-Signature=fde1afe89bf935cc00627cef1c59825b80195932a12a276f938bc915448b0071&X-Amz-SignedHeaders=host&x-id=GetObject)
