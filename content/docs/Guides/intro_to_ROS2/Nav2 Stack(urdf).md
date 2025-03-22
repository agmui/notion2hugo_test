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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U23ATEVO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAu%2FMhs96n9jNX5EFAC18Tl9B76orJf8h2zavtdpw5G5AiAidcHsNv6%2BHoAlXq3%2BwZSY5pUZbj%2F%2FhBqpMLYVf%2B8dSCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfgQ1Y10xQ5IxS%2FwKtwDa%2ByQtEpkaWN5fa0mgtvlLmkRdIGS8vplY8%2BCvqPzQEJyYdaWa%2Bqmk1rMx16tVs1Q9hfh3MWm2wbQPtE3rr6Wbw8NbxrmRe2HtCdlYIUHaCfJOR7tPTxI%2FpibI5CMmXbIa3rxqTj05%2BMZ4BckkrHnb%2FskPPmUc3lWmUVfG8czSDxzm8yxVmOH9uEdVEiHLYD51REErOT7xr6WBKvyNHf0%2FkBl8oFXUsBYIzSJ0gq2U7oUj2v475fkYZbKE9gRS%2BT%2BnE3gNlgjIy%2FK3%2BvVRNDVyOcPISpWyduizgUyUh%2BZOv411ym6QUQH35y7H%2FEYUHRCc%2FvoC7l%2F12Apv17bsb81xACLOJkiib0YUIqq2u%2Bo8aE58ipdHyOfTua4KzAyYrCHmDJKG3RcCNMLXjeZ96fCOdTiJ%2FJGdJdy6azpVbZBME%2BF%2FYdukIXSbm76log1qUoMSe9A055lLn2gjOhTZaqwW8P5YYyZiKircVfueUurhhUiJUUFDksZu6OGoVggqLU%2BIV7rLqxNJVnZ08DxuzswN3ljO%2BH9mZFy94LaFs3kQjgDhsH6hzxmkqyq2Z6q7NnAhpPpSttyxkpo%2B%2FWa3Y869PkeI0D3qt8ckeHMd21kkE%2FbQ4ZtNXjAcTlJdyYw7K36vgY6pgFEDluFWLQ%2FJ%2BZY2r8LchEgwnbyZvbVpT3sCVfL7CGQ4G%2BEMfT%2F%2BlUVpQ%2BxEN8%2FkevHU1e%2B%2BuNeajpYMC9pbY5vag%2BTkHqGA5OecQAkEC9vaG%2BL%2FxnT6YHXglSP8iT%2F3CUlVj94SnYxoIlIxT2%2FRgvOhRoRPPBcV0UqNkvflmNk1dAC0KPim2xy7tvR4vgceCBE7YT%2FsAwENAVgQjZtrPzNPJAHWeaj&X-Amz-Signature=6db7f6aa5d382bfebb767d8d1bf35448341acc7f6e56d140850caf1f10df3d01&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U23ATEVO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAu%2FMhs96n9jNX5EFAC18Tl9B76orJf8h2zavtdpw5G5AiAidcHsNv6%2BHoAlXq3%2BwZSY5pUZbj%2F%2FhBqpMLYVf%2B8dSCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfgQ1Y10xQ5IxS%2FwKtwDa%2ByQtEpkaWN5fa0mgtvlLmkRdIGS8vplY8%2BCvqPzQEJyYdaWa%2Bqmk1rMx16tVs1Q9hfh3MWm2wbQPtE3rr6Wbw8NbxrmRe2HtCdlYIUHaCfJOR7tPTxI%2FpibI5CMmXbIa3rxqTj05%2BMZ4BckkrHnb%2FskPPmUc3lWmUVfG8czSDxzm8yxVmOH9uEdVEiHLYD51REErOT7xr6WBKvyNHf0%2FkBl8oFXUsBYIzSJ0gq2U7oUj2v475fkYZbKE9gRS%2BT%2BnE3gNlgjIy%2FK3%2BvVRNDVyOcPISpWyduizgUyUh%2BZOv411ym6QUQH35y7H%2FEYUHRCc%2FvoC7l%2F12Apv17bsb81xACLOJkiib0YUIqq2u%2Bo8aE58ipdHyOfTua4KzAyYrCHmDJKG3RcCNMLXjeZ96fCOdTiJ%2FJGdJdy6azpVbZBME%2BF%2FYdukIXSbm76log1qUoMSe9A055lLn2gjOhTZaqwW8P5YYyZiKircVfueUurhhUiJUUFDksZu6OGoVggqLU%2BIV7rLqxNJVnZ08DxuzswN3ljO%2BH9mZFy94LaFs3kQjgDhsH6hzxmkqyq2Z6q7NnAhpPpSttyxkpo%2B%2FWa3Y869PkeI0D3qt8ckeHMd21kkE%2FbQ4ZtNXjAcTlJdyYw7K36vgY6pgFEDluFWLQ%2FJ%2BZY2r8LchEgwnbyZvbVpT3sCVfL7CGQ4G%2BEMfT%2F%2BlUVpQ%2BxEN8%2FkevHU1e%2B%2BuNeajpYMC9pbY5vag%2BTkHqGA5OecQAkEC9vaG%2BL%2FxnT6YHXglSP8iT%2F3CUlVj94SnYxoIlIxT2%2FRgvOhRoRPPBcV0UqNkvflmNk1dAC0KPim2xy7tvR4vgceCBE7YT%2FsAwENAVgQjZtrPzNPJAHWeaj&X-Amz-Signature=d27f78dcdee2de55b6b405b06a389d87e074896dc9c3126c1f6d41b45cfad9b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U23ATEVO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAu%2FMhs96n9jNX5EFAC18Tl9B76orJf8h2zavtdpw5G5AiAidcHsNv6%2BHoAlXq3%2BwZSY5pUZbj%2F%2FhBqpMLYVf%2B8dSCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfgQ1Y10xQ5IxS%2FwKtwDa%2ByQtEpkaWN5fa0mgtvlLmkRdIGS8vplY8%2BCvqPzQEJyYdaWa%2Bqmk1rMx16tVs1Q9hfh3MWm2wbQPtE3rr6Wbw8NbxrmRe2HtCdlYIUHaCfJOR7tPTxI%2FpibI5CMmXbIa3rxqTj05%2BMZ4BckkrHnb%2FskPPmUc3lWmUVfG8czSDxzm8yxVmOH9uEdVEiHLYD51REErOT7xr6WBKvyNHf0%2FkBl8oFXUsBYIzSJ0gq2U7oUj2v475fkYZbKE9gRS%2BT%2BnE3gNlgjIy%2FK3%2BvVRNDVyOcPISpWyduizgUyUh%2BZOv411ym6QUQH35y7H%2FEYUHRCc%2FvoC7l%2F12Apv17bsb81xACLOJkiib0YUIqq2u%2Bo8aE58ipdHyOfTua4KzAyYrCHmDJKG3RcCNMLXjeZ96fCOdTiJ%2FJGdJdy6azpVbZBME%2BF%2FYdukIXSbm76log1qUoMSe9A055lLn2gjOhTZaqwW8P5YYyZiKircVfueUurhhUiJUUFDksZu6OGoVggqLU%2BIV7rLqxNJVnZ08DxuzswN3ljO%2BH9mZFy94LaFs3kQjgDhsH6hzxmkqyq2Z6q7NnAhpPpSttyxkpo%2B%2FWa3Y869PkeI0D3qt8ckeHMd21kkE%2FbQ4ZtNXjAcTlJdyYw7K36vgY6pgFEDluFWLQ%2FJ%2BZY2r8LchEgwnbyZvbVpT3sCVfL7CGQ4G%2BEMfT%2F%2BlUVpQ%2BxEN8%2FkevHU1e%2B%2BuNeajpYMC9pbY5vag%2BTkHqGA5OecQAkEC9vaG%2BL%2FxnT6YHXglSP8iT%2F3CUlVj94SnYxoIlIxT2%2FRgvOhRoRPPBcV0UqNkvflmNk1dAC0KPim2xy7tvR4vgceCBE7YT%2FsAwENAVgQjZtrPzNPJAHWeaj&X-Amz-Signature=1752d0cfb69e04bb6ed3e426fd831d6da66abe266b1cca6703efef79d12d54ca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U23ATEVO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAu%2FMhs96n9jNX5EFAC18Tl9B76orJf8h2zavtdpw5G5AiAidcHsNv6%2BHoAlXq3%2BwZSY5pUZbj%2F%2FhBqpMLYVf%2B8dSCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfgQ1Y10xQ5IxS%2FwKtwDa%2ByQtEpkaWN5fa0mgtvlLmkRdIGS8vplY8%2BCvqPzQEJyYdaWa%2Bqmk1rMx16tVs1Q9hfh3MWm2wbQPtE3rr6Wbw8NbxrmRe2HtCdlYIUHaCfJOR7tPTxI%2FpibI5CMmXbIa3rxqTj05%2BMZ4BckkrHnb%2FskPPmUc3lWmUVfG8czSDxzm8yxVmOH9uEdVEiHLYD51REErOT7xr6WBKvyNHf0%2FkBl8oFXUsBYIzSJ0gq2U7oUj2v475fkYZbKE9gRS%2BT%2BnE3gNlgjIy%2FK3%2BvVRNDVyOcPISpWyduizgUyUh%2BZOv411ym6QUQH35y7H%2FEYUHRCc%2FvoC7l%2F12Apv17bsb81xACLOJkiib0YUIqq2u%2Bo8aE58ipdHyOfTua4KzAyYrCHmDJKG3RcCNMLXjeZ96fCOdTiJ%2FJGdJdy6azpVbZBME%2BF%2FYdukIXSbm76log1qUoMSe9A055lLn2gjOhTZaqwW8P5YYyZiKircVfueUurhhUiJUUFDksZu6OGoVggqLU%2BIV7rLqxNJVnZ08DxuzswN3ljO%2BH9mZFy94LaFs3kQjgDhsH6hzxmkqyq2Z6q7NnAhpPpSttyxkpo%2B%2FWa3Y869PkeI0D3qt8ckeHMd21kkE%2FbQ4ZtNXjAcTlJdyYw7K36vgY6pgFEDluFWLQ%2FJ%2BZY2r8LchEgwnbyZvbVpT3sCVfL7CGQ4G%2BEMfT%2F%2BlUVpQ%2BxEN8%2FkevHU1e%2B%2BuNeajpYMC9pbY5vag%2BTkHqGA5OecQAkEC9vaG%2BL%2FxnT6YHXglSP8iT%2F3CUlVj94SnYxoIlIxT2%2FRgvOhRoRPPBcV0UqNkvflmNk1dAC0KPim2xy7tvR4vgceCBE7YT%2FsAwENAVgQjZtrPzNPJAHWeaj&X-Amz-Signature=a66449d4edf9d12043dbe51a6a19172c02e757eb74b7e6ab7d878301557afef4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U23ATEVO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAu%2FMhs96n9jNX5EFAC18Tl9B76orJf8h2zavtdpw5G5AiAidcHsNv6%2BHoAlXq3%2BwZSY5pUZbj%2F%2FhBqpMLYVf%2B8dSCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfgQ1Y10xQ5IxS%2FwKtwDa%2ByQtEpkaWN5fa0mgtvlLmkRdIGS8vplY8%2BCvqPzQEJyYdaWa%2Bqmk1rMx16tVs1Q9hfh3MWm2wbQPtE3rr6Wbw8NbxrmRe2HtCdlYIUHaCfJOR7tPTxI%2FpibI5CMmXbIa3rxqTj05%2BMZ4BckkrHnb%2FskPPmUc3lWmUVfG8czSDxzm8yxVmOH9uEdVEiHLYD51REErOT7xr6WBKvyNHf0%2FkBl8oFXUsBYIzSJ0gq2U7oUj2v475fkYZbKE9gRS%2BT%2BnE3gNlgjIy%2FK3%2BvVRNDVyOcPISpWyduizgUyUh%2BZOv411ym6QUQH35y7H%2FEYUHRCc%2FvoC7l%2F12Apv17bsb81xACLOJkiib0YUIqq2u%2Bo8aE58ipdHyOfTua4KzAyYrCHmDJKG3RcCNMLXjeZ96fCOdTiJ%2FJGdJdy6azpVbZBME%2BF%2FYdukIXSbm76log1qUoMSe9A055lLn2gjOhTZaqwW8P5YYyZiKircVfueUurhhUiJUUFDksZu6OGoVggqLU%2BIV7rLqxNJVnZ08DxuzswN3ljO%2BH9mZFy94LaFs3kQjgDhsH6hzxmkqyq2Z6q7NnAhpPpSttyxkpo%2B%2FWa3Y869PkeI0D3qt8ckeHMd21kkE%2FbQ4ZtNXjAcTlJdyYw7K36vgY6pgFEDluFWLQ%2FJ%2BZY2r8LchEgwnbyZvbVpT3sCVfL7CGQ4G%2BEMfT%2F%2BlUVpQ%2BxEN8%2FkevHU1e%2B%2BuNeajpYMC9pbY5vag%2BTkHqGA5OecQAkEC9vaG%2BL%2FxnT6YHXglSP8iT%2F3CUlVj94SnYxoIlIxT2%2FRgvOhRoRPPBcV0UqNkvflmNk1dAC0KPim2xy7tvR4vgceCBE7YT%2FsAwENAVgQjZtrPzNPJAHWeaj&X-Amz-Signature=b72484c91283732e907de66d2787739dd809ba99a2778ea6415e409bb97364a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U23ATEVO%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T131326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIAu%2FMhs96n9jNX5EFAC18Tl9B76orJf8h2zavtdpw5G5AiAidcHsNv6%2BHoAlXq3%2BwZSY5pUZbj%2F%2FhBqpMLYVf%2B8dSCqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpfgQ1Y10xQ5IxS%2FwKtwDa%2ByQtEpkaWN5fa0mgtvlLmkRdIGS8vplY8%2BCvqPzQEJyYdaWa%2Bqmk1rMx16tVs1Q9hfh3MWm2wbQPtE3rr6Wbw8NbxrmRe2HtCdlYIUHaCfJOR7tPTxI%2FpibI5CMmXbIa3rxqTj05%2BMZ4BckkrHnb%2FskPPmUc3lWmUVfG8czSDxzm8yxVmOH9uEdVEiHLYD51REErOT7xr6WBKvyNHf0%2FkBl8oFXUsBYIzSJ0gq2U7oUj2v475fkYZbKE9gRS%2BT%2BnE3gNlgjIy%2FK3%2BvVRNDVyOcPISpWyduizgUyUh%2BZOv411ym6QUQH35y7H%2FEYUHRCc%2FvoC7l%2F12Apv17bsb81xACLOJkiib0YUIqq2u%2Bo8aE58ipdHyOfTua4KzAyYrCHmDJKG3RcCNMLXjeZ96fCOdTiJ%2FJGdJdy6azpVbZBME%2BF%2FYdukIXSbm76log1qUoMSe9A055lLn2gjOhTZaqwW8P5YYyZiKircVfueUurhhUiJUUFDksZu6OGoVggqLU%2BIV7rLqxNJVnZ08DxuzswN3ljO%2BH9mZFy94LaFs3kQjgDhsH6hzxmkqyq2Z6q7NnAhpPpSttyxkpo%2B%2FWa3Y869PkeI0D3qt8ckeHMd21kkE%2FbQ4ZtNXjAcTlJdyYw7K36vgY6pgFEDluFWLQ%2FJ%2BZY2r8LchEgwnbyZvbVpT3sCVfL7CGQ4G%2BEMfT%2F%2BlUVpQ%2BxEN8%2FkevHU1e%2B%2BuNeajpYMC9pbY5vag%2BTkHqGA5OecQAkEC9vaG%2BL%2FxnT6YHXglSP8iT%2F3CUlVj94SnYxoIlIxT2%2FRgvOhRoRPPBcV0UqNkvflmNk1dAC0KPim2xy7tvR4vgceCBE7YT%2FsAwENAVgQjZtrPzNPJAHWeaj&X-Amz-Signature=7d63c3b535a88649060f0eb28e4c7df1b78f7d5e3350dfcf3f921fdc893b62ac&X-Amz-SignedHeaders=host&x-id=GetObject)
