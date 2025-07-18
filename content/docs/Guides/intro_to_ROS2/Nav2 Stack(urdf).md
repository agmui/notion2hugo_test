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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XPQ4DH7%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDUN2XsHGsbiDditSQq380iN3nWmW2y2fo8qROyKBCj8AIhANa3YB8gWTYQbdy2HSn30gZYxhsBPneq%2BFy%2FCHmn2BIAKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2F6nWpZZssC8ltxcsq3AMMsAXSwuNmcaJwbCpIOa7ohl0u8T5MlZUJD1Gbs%2FRk6sSILbsKTgZf%2FVNAkQhcNTyLROjZBBwa7dpavp1HzFkDx1LQ0JgwJexpT8VEZy9g23ZcQK8%2FQJU7YDCuXp3yxM%2Bm9qRxN7h%2BG2G3r5ZhC2%2F2ldKX7vidWiWtN94d4sktHx5swlat9nQdvrRiaeP1rAHYc2OH7Zbi3TzLymV8ccBBvMTL3qZqM7NcYKk6yzzHd8FMX9%2B%2Fi673yuJNt5Y4BdRlN%2FYo1o1Wa9ctctKdHLdNdEAg64bZpvTdjROFLlia3ieBzl%2BT%2FVgTqOPdU%2BLpjbE3mO1AUDOjJN5z08p9SpCPSLmpi854Pq%2Bxqy%2BcsIZpEDvgOgN0R%2BuCQ7kyr1FtfZzqeRMHId3xXDdV6UoNElnTv6aY%2F%2BmJ%2F4KUcvhlBLCZPKdSeXhqxMkL%2FCvUgjciCM4RLgM4MiO3tUtm5s2I1eZxvKmnuJhe1pt8jhBtiIBOwxXqV9wSBw96yaM8dimZKh0kEQKBc87aS7sTwOvmVKQDDw%2FkR9fRH1cbDGZG4rBZIFNEei%2Boi9bDcfJgtWaUbNnReTICIOGnCRDOY6Meca5cptHNnfyDkQ0RrQPCXGSoeBiqp3UjX3nfRmOUZzC3v%2BrDBjqkAXyqW32IuYQdL8Y7HSYVMvZkhBZ64zV0vM4xdqx92VeplRbEJIa8TnPfjXzuPVgwMDp9R7LqT%2Bo79jHlhp0S5F8hajHz5mOCN4Cgxw%2BlZA17GLtCNBr7QZQ0wozhxQ%2FOwEIUj04L37HlKcsZsiSOFFjFUdJ7KgxSZDgWtYCoFa3gzF%2FXycRNj7ONRDM85%2Bt%2FmfsQ6A4acqoRp9UP0838EPbU7nW3&X-Amz-Signature=d919150663b85c7eb8dd049d50347238e97748dd8525774ad4b50cfeee37ada1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XPQ4DH7%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDUN2XsHGsbiDditSQq380iN3nWmW2y2fo8qROyKBCj8AIhANa3YB8gWTYQbdy2HSn30gZYxhsBPneq%2BFy%2FCHmn2BIAKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2F6nWpZZssC8ltxcsq3AMMsAXSwuNmcaJwbCpIOa7ohl0u8T5MlZUJD1Gbs%2FRk6sSILbsKTgZf%2FVNAkQhcNTyLROjZBBwa7dpavp1HzFkDx1LQ0JgwJexpT8VEZy9g23ZcQK8%2FQJU7YDCuXp3yxM%2Bm9qRxN7h%2BG2G3r5ZhC2%2F2ldKX7vidWiWtN94d4sktHx5swlat9nQdvrRiaeP1rAHYc2OH7Zbi3TzLymV8ccBBvMTL3qZqM7NcYKk6yzzHd8FMX9%2B%2Fi673yuJNt5Y4BdRlN%2FYo1o1Wa9ctctKdHLdNdEAg64bZpvTdjROFLlia3ieBzl%2BT%2FVgTqOPdU%2BLpjbE3mO1AUDOjJN5z08p9SpCPSLmpi854Pq%2Bxqy%2BcsIZpEDvgOgN0R%2BuCQ7kyr1FtfZzqeRMHId3xXDdV6UoNElnTv6aY%2F%2BmJ%2F4KUcvhlBLCZPKdSeXhqxMkL%2FCvUgjciCM4RLgM4MiO3tUtm5s2I1eZxvKmnuJhe1pt8jhBtiIBOwxXqV9wSBw96yaM8dimZKh0kEQKBc87aS7sTwOvmVKQDDw%2FkR9fRH1cbDGZG4rBZIFNEei%2Boi9bDcfJgtWaUbNnReTICIOGnCRDOY6Meca5cptHNnfyDkQ0RrQPCXGSoeBiqp3UjX3nfRmOUZzC3v%2BrDBjqkAXyqW32IuYQdL8Y7HSYVMvZkhBZ64zV0vM4xdqx92VeplRbEJIa8TnPfjXzuPVgwMDp9R7LqT%2Bo79jHlhp0S5F8hajHz5mOCN4Cgxw%2BlZA17GLtCNBr7QZQ0wozhxQ%2FOwEIUj04L37HlKcsZsiSOFFjFUdJ7KgxSZDgWtYCoFa3gzF%2FXycRNj7ONRDM85%2Bt%2FmfsQ6A4acqoRp9UP0838EPbU7nW3&X-Amz-Signature=1f3fc5656b54e0e2732d43c4a5e4941d32dc391d01f4a045581921ae39b79afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XPQ4DH7%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDUN2XsHGsbiDditSQq380iN3nWmW2y2fo8qROyKBCj8AIhANa3YB8gWTYQbdy2HSn30gZYxhsBPneq%2BFy%2FCHmn2BIAKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2F6nWpZZssC8ltxcsq3AMMsAXSwuNmcaJwbCpIOa7ohl0u8T5MlZUJD1Gbs%2FRk6sSILbsKTgZf%2FVNAkQhcNTyLROjZBBwa7dpavp1HzFkDx1LQ0JgwJexpT8VEZy9g23ZcQK8%2FQJU7YDCuXp3yxM%2Bm9qRxN7h%2BG2G3r5ZhC2%2F2ldKX7vidWiWtN94d4sktHx5swlat9nQdvrRiaeP1rAHYc2OH7Zbi3TzLymV8ccBBvMTL3qZqM7NcYKk6yzzHd8FMX9%2B%2Fi673yuJNt5Y4BdRlN%2FYo1o1Wa9ctctKdHLdNdEAg64bZpvTdjROFLlia3ieBzl%2BT%2FVgTqOPdU%2BLpjbE3mO1AUDOjJN5z08p9SpCPSLmpi854Pq%2Bxqy%2BcsIZpEDvgOgN0R%2BuCQ7kyr1FtfZzqeRMHId3xXDdV6UoNElnTv6aY%2F%2BmJ%2F4KUcvhlBLCZPKdSeXhqxMkL%2FCvUgjciCM4RLgM4MiO3tUtm5s2I1eZxvKmnuJhe1pt8jhBtiIBOwxXqV9wSBw96yaM8dimZKh0kEQKBc87aS7sTwOvmVKQDDw%2FkR9fRH1cbDGZG4rBZIFNEei%2Boi9bDcfJgtWaUbNnReTICIOGnCRDOY6Meca5cptHNnfyDkQ0RrQPCXGSoeBiqp3UjX3nfRmOUZzC3v%2BrDBjqkAXyqW32IuYQdL8Y7HSYVMvZkhBZ64zV0vM4xdqx92VeplRbEJIa8TnPfjXzuPVgwMDp9R7LqT%2Bo79jHlhp0S5F8hajHz5mOCN4Cgxw%2BlZA17GLtCNBr7QZQ0wozhxQ%2FOwEIUj04L37HlKcsZsiSOFFjFUdJ7KgxSZDgWtYCoFa3gzF%2FXycRNj7ONRDM85%2Bt%2FmfsQ6A4acqoRp9UP0838EPbU7nW3&X-Amz-Signature=011f3787ce2495b85d52359f636efbc7ea0ff9128bc7e8326b1390aee980fc68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XPQ4DH7%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDUN2XsHGsbiDditSQq380iN3nWmW2y2fo8qROyKBCj8AIhANa3YB8gWTYQbdy2HSn30gZYxhsBPneq%2BFy%2FCHmn2BIAKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2F6nWpZZssC8ltxcsq3AMMsAXSwuNmcaJwbCpIOa7ohl0u8T5MlZUJD1Gbs%2FRk6sSILbsKTgZf%2FVNAkQhcNTyLROjZBBwa7dpavp1HzFkDx1LQ0JgwJexpT8VEZy9g23ZcQK8%2FQJU7YDCuXp3yxM%2Bm9qRxN7h%2BG2G3r5ZhC2%2F2ldKX7vidWiWtN94d4sktHx5swlat9nQdvrRiaeP1rAHYc2OH7Zbi3TzLymV8ccBBvMTL3qZqM7NcYKk6yzzHd8FMX9%2B%2Fi673yuJNt5Y4BdRlN%2FYo1o1Wa9ctctKdHLdNdEAg64bZpvTdjROFLlia3ieBzl%2BT%2FVgTqOPdU%2BLpjbE3mO1AUDOjJN5z08p9SpCPSLmpi854Pq%2Bxqy%2BcsIZpEDvgOgN0R%2BuCQ7kyr1FtfZzqeRMHId3xXDdV6UoNElnTv6aY%2F%2BmJ%2F4KUcvhlBLCZPKdSeXhqxMkL%2FCvUgjciCM4RLgM4MiO3tUtm5s2I1eZxvKmnuJhe1pt8jhBtiIBOwxXqV9wSBw96yaM8dimZKh0kEQKBc87aS7sTwOvmVKQDDw%2FkR9fRH1cbDGZG4rBZIFNEei%2Boi9bDcfJgtWaUbNnReTICIOGnCRDOY6Meca5cptHNnfyDkQ0RrQPCXGSoeBiqp3UjX3nfRmOUZzC3v%2BrDBjqkAXyqW32IuYQdL8Y7HSYVMvZkhBZ64zV0vM4xdqx92VeplRbEJIa8TnPfjXzuPVgwMDp9R7LqT%2Bo79jHlhp0S5F8hajHz5mOCN4Cgxw%2BlZA17GLtCNBr7QZQ0wozhxQ%2FOwEIUj04L37HlKcsZsiSOFFjFUdJ7KgxSZDgWtYCoFa3gzF%2FXycRNj7ONRDM85%2Bt%2FmfsQ6A4acqoRp9UP0838EPbU7nW3&X-Amz-Signature=68caa4f1f738587fafd4f95a0e02fef4f98882cdeae63be17ac782821e12115e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XPQ4DH7%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDUN2XsHGsbiDditSQq380iN3nWmW2y2fo8qROyKBCj8AIhANa3YB8gWTYQbdy2HSn30gZYxhsBPneq%2BFy%2FCHmn2BIAKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2F6nWpZZssC8ltxcsq3AMMsAXSwuNmcaJwbCpIOa7ohl0u8T5MlZUJD1Gbs%2FRk6sSILbsKTgZf%2FVNAkQhcNTyLROjZBBwa7dpavp1HzFkDx1LQ0JgwJexpT8VEZy9g23ZcQK8%2FQJU7YDCuXp3yxM%2Bm9qRxN7h%2BG2G3r5ZhC2%2F2ldKX7vidWiWtN94d4sktHx5swlat9nQdvrRiaeP1rAHYc2OH7Zbi3TzLymV8ccBBvMTL3qZqM7NcYKk6yzzHd8FMX9%2B%2Fi673yuJNt5Y4BdRlN%2FYo1o1Wa9ctctKdHLdNdEAg64bZpvTdjROFLlia3ieBzl%2BT%2FVgTqOPdU%2BLpjbE3mO1AUDOjJN5z08p9SpCPSLmpi854Pq%2Bxqy%2BcsIZpEDvgOgN0R%2BuCQ7kyr1FtfZzqeRMHId3xXDdV6UoNElnTv6aY%2F%2BmJ%2F4KUcvhlBLCZPKdSeXhqxMkL%2FCvUgjciCM4RLgM4MiO3tUtm5s2I1eZxvKmnuJhe1pt8jhBtiIBOwxXqV9wSBw96yaM8dimZKh0kEQKBc87aS7sTwOvmVKQDDw%2FkR9fRH1cbDGZG4rBZIFNEei%2Boi9bDcfJgtWaUbNnReTICIOGnCRDOY6Meca5cptHNnfyDkQ0RrQPCXGSoeBiqp3UjX3nfRmOUZzC3v%2BrDBjqkAXyqW32IuYQdL8Y7HSYVMvZkhBZ64zV0vM4xdqx92VeplRbEJIa8TnPfjXzuPVgwMDp9R7LqT%2Bo79jHlhp0S5F8hajHz5mOCN4Cgxw%2BlZA17GLtCNBr7QZQ0wozhxQ%2FOwEIUj04L37HlKcsZsiSOFFjFUdJ7KgxSZDgWtYCoFa3gzF%2FXycRNj7ONRDM85%2Bt%2FmfsQ6A4acqoRp9UP0838EPbU7nW3&X-Amz-Signature=87908a9c7d47b1cf7e363db0acb96d5114fc85c5645c123612ef993a351c9d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XPQ4DH7%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDUN2XsHGsbiDditSQq380iN3nWmW2y2fo8qROyKBCj8AIhANa3YB8gWTYQbdy2HSn30gZYxhsBPneq%2BFy%2FCHmn2BIAKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2F6nWpZZssC8ltxcsq3AMMsAXSwuNmcaJwbCpIOa7ohl0u8T5MlZUJD1Gbs%2FRk6sSILbsKTgZf%2FVNAkQhcNTyLROjZBBwa7dpavp1HzFkDx1LQ0JgwJexpT8VEZy9g23ZcQK8%2FQJU7YDCuXp3yxM%2Bm9qRxN7h%2BG2G3r5ZhC2%2F2ldKX7vidWiWtN94d4sktHx5swlat9nQdvrRiaeP1rAHYc2OH7Zbi3TzLymV8ccBBvMTL3qZqM7NcYKk6yzzHd8FMX9%2B%2Fi673yuJNt5Y4BdRlN%2FYo1o1Wa9ctctKdHLdNdEAg64bZpvTdjROFLlia3ieBzl%2BT%2FVgTqOPdU%2BLpjbE3mO1AUDOjJN5z08p9SpCPSLmpi854Pq%2Bxqy%2BcsIZpEDvgOgN0R%2BuCQ7kyr1FtfZzqeRMHId3xXDdV6UoNElnTv6aY%2F%2BmJ%2F4KUcvhlBLCZPKdSeXhqxMkL%2FCvUgjciCM4RLgM4MiO3tUtm5s2I1eZxvKmnuJhe1pt8jhBtiIBOwxXqV9wSBw96yaM8dimZKh0kEQKBc87aS7sTwOvmVKQDDw%2FkR9fRH1cbDGZG4rBZIFNEei%2Boi9bDcfJgtWaUbNnReTICIOGnCRDOY6Meca5cptHNnfyDkQ0RrQPCXGSoeBiqp3UjX3nfRmOUZzC3v%2BrDBjqkAXyqW32IuYQdL8Y7HSYVMvZkhBZ64zV0vM4xdqx92VeplRbEJIa8TnPfjXzuPVgwMDp9R7LqT%2Bo79jHlhp0S5F8hajHz5mOCN4Cgxw%2BlZA17GLtCNBr7QZQ0wozhxQ%2FOwEIUj04L37HlKcsZsiSOFFjFUdJ7KgxSZDgWtYCoFa3gzF%2FXycRNj7ONRDM85%2Bt%2FmfsQ6A4acqoRp9UP0838EPbU7nW3&X-Amz-Signature=c248899f3c1c11da60c5ae21c230d20de34b3855b08971a441368aae1ad60ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
