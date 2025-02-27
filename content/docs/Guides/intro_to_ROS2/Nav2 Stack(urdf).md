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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HQP5Q5%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCK5T8KngThtcT%2Fo%2BZyOz33QCzVZM0K1IzF3FiFvKJBrQIgcTQGPEZQS9%2FGeqq1N%2BlQIuJHPfnzzTB8BqR%2FwP5IJ9Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGhCPC9aJEonKFdmNircAzER4vdoeDNY0M0dK8sTRRtKlZLe9LZFbUS9X0%2BGZN7W9I7YLJz6v%2FUwrgDsJqdOPiSA75b13suYlLSC4XI2scbuElIWbrvda34QTVPiIDOjQQyURwxqex85gcmf44Ssax5DrJgsKvK6pE3U311n3nh16LPQjEsti8th6y9Dl2ALa45oZwe7Pq0RoejbPD1%2BVQzgKrJFHBLV6FCwspn%2FF6nZfq%2BJoaA8KCHUxZqAmHTIxnyfxxmZGRxzrj3Cu7qsoJEEo%2FDpMadYsZRV1KsSZTCemcTv0PfPbvstqb9aMXtdKk9OG8bqHScKpiiO0Z%2B%2F6UCkuNiO6rcZWdWqGOKhsqzJ37c%2FC9ULVEe5DSodQ9EUhZWxdirAD4d2veK%2BCc8vYiwirNQzZ0MS8E08jpcqpV%2FcCjPoE86DINByYhTcfUafH8nty2U9tbrFFBso%2FixsOxLcbaDTWHWMgnZNLqp1uQxpiAj6JrrtTND%2BUJFkqrAX9K%2FXZsMnHmUjYN1e6ppl%2F3E8dCI%2FEoGoXA7uroj6K1fzRKOUVyjqatzQpN18uoBX3dAmWnP232WgsONeltrRqtpH8jFLo9SBiBPhUU2UBVQTU7XwRnp0dPNA7pvql2qD2yVx7YQpV4oMFMZkMN2LgL4GOqUB8LRqpMt2P916JlutfcMy%2B5UBkG2ALdxwun2w34Uq6LPGeqmB%2B7aAoMUBa%2FykLU4hGlxGblT631XpTyogKmwnSOf5QVd3Dv3jmXQXokJgPCXQiPJBBoEqHa2LeKYmvKM1GjiUxKeSgxX5uZSMna7OlvXiEKGy8L73xehaU57i51NoD2ros7Mkkk8PoPMCSz%2FEGJgjbjeNRJlfGZWl9s5pu3V1Zp0y&X-Amz-Signature=2b75f51063dbcbc75f3bdf6322e71b561f5c7be058b5499ecf2cd57e9c20d965&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HQP5Q5%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCK5T8KngThtcT%2Fo%2BZyOz33QCzVZM0K1IzF3FiFvKJBrQIgcTQGPEZQS9%2FGeqq1N%2BlQIuJHPfnzzTB8BqR%2FwP5IJ9Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGhCPC9aJEonKFdmNircAzER4vdoeDNY0M0dK8sTRRtKlZLe9LZFbUS9X0%2BGZN7W9I7YLJz6v%2FUwrgDsJqdOPiSA75b13suYlLSC4XI2scbuElIWbrvda34QTVPiIDOjQQyURwxqex85gcmf44Ssax5DrJgsKvK6pE3U311n3nh16LPQjEsti8th6y9Dl2ALa45oZwe7Pq0RoejbPD1%2BVQzgKrJFHBLV6FCwspn%2FF6nZfq%2BJoaA8KCHUxZqAmHTIxnyfxxmZGRxzrj3Cu7qsoJEEo%2FDpMadYsZRV1KsSZTCemcTv0PfPbvstqb9aMXtdKk9OG8bqHScKpiiO0Z%2B%2F6UCkuNiO6rcZWdWqGOKhsqzJ37c%2FC9ULVEe5DSodQ9EUhZWxdirAD4d2veK%2BCc8vYiwirNQzZ0MS8E08jpcqpV%2FcCjPoE86DINByYhTcfUafH8nty2U9tbrFFBso%2FixsOxLcbaDTWHWMgnZNLqp1uQxpiAj6JrrtTND%2BUJFkqrAX9K%2FXZsMnHmUjYN1e6ppl%2F3E8dCI%2FEoGoXA7uroj6K1fzRKOUVyjqatzQpN18uoBX3dAmWnP232WgsONeltrRqtpH8jFLo9SBiBPhUU2UBVQTU7XwRnp0dPNA7pvql2qD2yVx7YQpV4oMFMZkMN2LgL4GOqUB8LRqpMt2P916JlutfcMy%2B5UBkG2ALdxwun2w34Uq6LPGeqmB%2B7aAoMUBa%2FykLU4hGlxGblT631XpTyogKmwnSOf5QVd3Dv3jmXQXokJgPCXQiPJBBoEqHa2LeKYmvKM1GjiUxKeSgxX5uZSMna7OlvXiEKGy8L73xehaU57i51NoD2ros7Mkkk8PoPMCSz%2FEGJgjbjeNRJlfGZWl9s5pu3V1Zp0y&X-Amz-Signature=775704ee98b17875fe2b22492304b3cd044981b66fb5861f4479add43e94fc29&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HQP5Q5%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCK5T8KngThtcT%2Fo%2BZyOz33QCzVZM0K1IzF3FiFvKJBrQIgcTQGPEZQS9%2FGeqq1N%2BlQIuJHPfnzzTB8BqR%2FwP5IJ9Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGhCPC9aJEonKFdmNircAzER4vdoeDNY0M0dK8sTRRtKlZLe9LZFbUS9X0%2BGZN7W9I7YLJz6v%2FUwrgDsJqdOPiSA75b13suYlLSC4XI2scbuElIWbrvda34QTVPiIDOjQQyURwxqex85gcmf44Ssax5DrJgsKvK6pE3U311n3nh16LPQjEsti8th6y9Dl2ALa45oZwe7Pq0RoejbPD1%2BVQzgKrJFHBLV6FCwspn%2FF6nZfq%2BJoaA8KCHUxZqAmHTIxnyfxxmZGRxzrj3Cu7qsoJEEo%2FDpMadYsZRV1KsSZTCemcTv0PfPbvstqb9aMXtdKk9OG8bqHScKpiiO0Z%2B%2F6UCkuNiO6rcZWdWqGOKhsqzJ37c%2FC9ULVEe5DSodQ9EUhZWxdirAD4d2veK%2BCc8vYiwirNQzZ0MS8E08jpcqpV%2FcCjPoE86DINByYhTcfUafH8nty2U9tbrFFBso%2FixsOxLcbaDTWHWMgnZNLqp1uQxpiAj6JrrtTND%2BUJFkqrAX9K%2FXZsMnHmUjYN1e6ppl%2F3E8dCI%2FEoGoXA7uroj6K1fzRKOUVyjqatzQpN18uoBX3dAmWnP232WgsONeltrRqtpH8jFLo9SBiBPhUU2UBVQTU7XwRnp0dPNA7pvql2qD2yVx7YQpV4oMFMZkMN2LgL4GOqUB8LRqpMt2P916JlutfcMy%2B5UBkG2ALdxwun2w34Uq6LPGeqmB%2B7aAoMUBa%2FykLU4hGlxGblT631XpTyogKmwnSOf5QVd3Dv3jmXQXokJgPCXQiPJBBoEqHa2LeKYmvKM1GjiUxKeSgxX5uZSMna7OlvXiEKGy8L73xehaU57i51NoD2ros7Mkkk8PoPMCSz%2FEGJgjbjeNRJlfGZWl9s5pu3V1Zp0y&X-Amz-Signature=4943c74823f750e2f9636d07fd1d4ac344cf29a830539ca4b766e82628dd3f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HQP5Q5%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCK5T8KngThtcT%2Fo%2BZyOz33QCzVZM0K1IzF3FiFvKJBrQIgcTQGPEZQS9%2FGeqq1N%2BlQIuJHPfnzzTB8BqR%2FwP5IJ9Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGhCPC9aJEonKFdmNircAzER4vdoeDNY0M0dK8sTRRtKlZLe9LZFbUS9X0%2BGZN7W9I7YLJz6v%2FUwrgDsJqdOPiSA75b13suYlLSC4XI2scbuElIWbrvda34QTVPiIDOjQQyURwxqex85gcmf44Ssax5DrJgsKvK6pE3U311n3nh16LPQjEsti8th6y9Dl2ALa45oZwe7Pq0RoejbPD1%2BVQzgKrJFHBLV6FCwspn%2FF6nZfq%2BJoaA8KCHUxZqAmHTIxnyfxxmZGRxzrj3Cu7qsoJEEo%2FDpMadYsZRV1KsSZTCemcTv0PfPbvstqb9aMXtdKk9OG8bqHScKpiiO0Z%2B%2F6UCkuNiO6rcZWdWqGOKhsqzJ37c%2FC9ULVEe5DSodQ9EUhZWxdirAD4d2veK%2BCc8vYiwirNQzZ0MS8E08jpcqpV%2FcCjPoE86DINByYhTcfUafH8nty2U9tbrFFBso%2FixsOxLcbaDTWHWMgnZNLqp1uQxpiAj6JrrtTND%2BUJFkqrAX9K%2FXZsMnHmUjYN1e6ppl%2F3E8dCI%2FEoGoXA7uroj6K1fzRKOUVyjqatzQpN18uoBX3dAmWnP232WgsONeltrRqtpH8jFLo9SBiBPhUU2UBVQTU7XwRnp0dPNA7pvql2qD2yVx7YQpV4oMFMZkMN2LgL4GOqUB8LRqpMt2P916JlutfcMy%2B5UBkG2ALdxwun2w34Uq6LPGeqmB%2B7aAoMUBa%2FykLU4hGlxGblT631XpTyogKmwnSOf5QVd3Dv3jmXQXokJgPCXQiPJBBoEqHa2LeKYmvKM1GjiUxKeSgxX5uZSMna7OlvXiEKGy8L73xehaU57i51NoD2ros7Mkkk8PoPMCSz%2FEGJgjbjeNRJlfGZWl9s5pu3V1Zp0y&X-Amz-Signature=12ef82540edf2b7c404fe5fbe4d9473ba42e322a849bfff8455f7e0bab599cb4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HQP5Q5%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCK5T8KngThtcT%2Fo%2BZyOz33QCzVZM0K1IzF3FiFvKJBrQIgcTQGPEZQS9%2FGeqq1N%2BlQIuJHPfnzzTB8BqR%2FwP5IJ9Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGhCPC9aJEonKFdmNircAzER4vdoeDNY0M0dK8sTRRtKlZLe9LZFbUS9X0%2BGZN7W9I7YLJz6v%2FUwrgDsJqdOPiSA75b13suYlLSC4XI2scbuElIWbrvda34QTVPiIDOjQQyURwxqex85gcmf44Ssax5DrJgsKvK6pE3U311n3nh16LPQjEsti8th6y9Dl2ALa45oZwe7Pq0RoejbPD1%2BVQzgKrJFHBLV6FCwspn%2FF6nZfq%2BJoaA8KCHUxZqAmHTIxnyfxxmZGRxzrj3Cu7qsoJEEo%2FDpMadYsZRV1KsSZTCemcTv0PfPbvstqb9aMXtdKk9OG8bqHScKpiiO0Z%2B%2F6UCkuNiO6rcZWdWqGOKhsqzJ37c%2FC9ULVEe5DSodQ9EUhZWxdirAD4d2veK%2BCc8vYiwirNQzZ0MS8E08jpcqpV%2FcCjPoE86DINByYhTcfUafH8nty2U9tbrFFBso%2FixsOxLcbaDTWHWMgnZNLqp1uQxpiAj6JrrtTND%2BUJFkqrAX9K%2FXZsMnHmUjYN1e6ppl%2F3E8dCI%2FEoGoXA7uroj6K1fzRKOUVyjqatzQpN18uoBX3dAmWnP232WgsONeltrRqtpH8jFLo9SBiBPhUU2UBVQTU7XwRnp0dPNA7pvql2qD2yVx7YQpV4oMFMZkMN2LgL4GOqUB8LRqpMt2P916JlutfcMy%2B5UBkG2ALdxwun2w34Uq6LPGeqmB%2B7aAoMUBa%2FykLU4hGlxGblT631XpTyogKmwnSOf5QVd3Dv3jmXQXokJgPCXQiPJBBoEqHa2LeKYmvKM1GjiUxKeSgxX5uZSMna7OlvXiEKGy8L73xehaU57i51NoD2ros7Mkkk8PoPMCSz%2FEGJgjbjeNRJlfGZWl9s5pu3V1Zp0y&X-Amz-Signature=cd0549222dcd640e904cafc88dce7a9c4895c6f02299eb931ba1374bce4269f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HQP5Q5%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQCK5T8KngThtcT%2Fo%2BZyOz33QCzVZM0K1IzF3FiFvKJBrQIgcTQGPEZQS9%2FGeqq1N%2BlQIuJHPfnzzTB8BqR%2FwP5IJ9Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGhCPC9aJEonKFdmNircAzER4vdoeDNY0M0dK8sTRRtKlZLe9LZFbUS9X0%2BGZN7W9I7YLJz6v%2FUwrgDsJqdOPiSA75b13suYlLSC4XI2scbuElIWbrvda34QTVPiIDOjQQyURwxqex85gcmf44Ssax5DrJgsKvK6pE3U311n3nh16LPQjEsti8th6y9Dl2ALa45oZwe7Pq0RoejbPD1%2BVQzgKrJFHBLV6FCwspn%2FF6nZfq%2BJoaA8KCHUxZqAmHTIxnyfxxmZGRxzrj3Cu7qsoJEEo%2FDpMadYsZRV1KsSZTCemcTv0PfPbvstqb9aMXtdKk9OG8bqHScKpiiO0Z%2B%2F6UCkuNiO6rcZWdWqGOKhsqzJ37c%2FC9ULVEe5DSodQ9EUhZWxdirAD4d2veK%2BCc8vYiwirNQzZ0MS8E08jpcqpV%2FcCjPoE86DINByYhTcfUafH8nty2U9tbrFFBso%2FixsOxLcbaDTWHWMgnZNLqp1uQxpiAj6JrrtTND%2BUJFkqrAX9K%2FXZsMnHmUjYN1e6ppl%2F3E8dCI%2FEoGoXA7uroj6K1fzRKOUVyjqatzQpN18uoBX3dAmWnP232WgsONeltrRqtpH8jFLo9SBiBPhUU2UBVQTU7XwRnp0dPNA7pvql2qD2yVx7YQpV4oMFMZkMN2LgL4GOqUB8LRqpMt2P916JlutfcMy%2B5UBkG2ALdxwun2w34Uq6LPGeqmB%2B7aAoMUBa%2FykLU4hGlxGblT631XpTyogKmwnSOf5QVd3Dv3jmXQXokJgPCXQiPJBBoEqHa2LeKYmvKM1GjiUxKeSgxX5uZSMna7OlvXiEKGy8L73xehaU57i51NoD2ros7Mkkk8PoPMCSz%2FEGJgjbjeNRJlfGZWl9s5pu3V1Zp0y&X-Amz-Signature=59db7e9c1293e16119ccb54b511913b736584e8e5f6b3b0a9eca594c818eee79&X-Amz-SignedHeaders=host&x-id=GetObject)
