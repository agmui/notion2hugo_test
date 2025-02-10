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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2OLDCG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVoZTlRf42BzutoGqMBCPeBYYcANDtzztkbXXgkVi4xAiAz3kx6emDvNTWhcJaU8rChUSCaKj5x5f2WZY%2BIVq3jhCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoN%2Fcg9FYMxp43SCTKtwDhgs3x5fG4379elVG1xhPF3gPizenB1D%2F8QiRumF%2Fk34TvEtLlLI1foGsgj%2B1Wj0pYaNSLCU8an4qtGGDCEIJXk9h%2B%2BUtyXYAX6MDGLPZYNzGd0OZdrB%2B9wNJwup1imzXQx1TtT8JzmBx39v2wU9Z1zx%2FPHK65BVH%2FqOXDIjW3fYvc9LLfr2ETJ%2BP%2ByViPRWlGwKLmCepQowr0ApDqUmUoltZl9781HWztVKKVybcNQxd%2FZbFMMFOkbLmlaBLKl5nd3GkBnrSgwO5rbkLXtLotig0aYcyXHs9svLactIBpOeTQv2Fl9LQxWUL0zTS9zIdKEODOQyTvC3zYWHjSbvj%2FlpCaGX00pJ8%2F44adjZRh4k8ju9jkSBQgF6UhSx66jpRPTF4oVK3I2jqDw6cq%2B80ybx6E6VacxIM1GO55TzGwWip7Ku3C3ed2sGqHL%2FovUQhvllZouHgKFQMip1rRVEk%2Fnt1eKIWFseykO0qA6Gc7ORUZx3mxjmEX%2BSujgwVgdSemC015Ue6BeteTg4X5ph5GPs2JdqQhm6BscAhAnFv2ulTigYVF9aLCfqVAr1val%2BwigkYmPwWwCdKF%2B9Jab9J%2F3D18uynzDTMaPXc0flRILYw4eTLNnkubbQT3mMwwM2pvQY6pgHHKoOo3zlC3CpZAbg%2FddsxzLURgAf8beW%2BBUgYa%2FJp624u1gv%2FVsM9j1myzpIgz%2F3GLKvYpfs2xgeF7oF6dXhNU4%2Bjp%2BBwbu%2BBeBekVnF5lWPuqloWQLt2zRCe2Hdpfdzn%2BgEazAb%2F1G6KkOMIHYs1wYiHMzMSy3wnvG5lx1jdTNEzZi9ese0JOz9aQ4llM1uI70MDQpV0dLQJ28bub3NZ%2Fstz1fKC&X-Amz-Signature=7410bb65ef72d190ba969cfc1c7eca865c97929e723ff988e92900da5995e5de&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2OLDCG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVoZTlRf42BzutoGqMBCPeBYYcANDtzztkbXXgkVi4xAiAz3kx6emDvNTWhcJaU8rChUSCaKj5x5f2WZY%2BIVq3jhCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoN%2Fcg9FYMxp43SCTKtwDhgs3x5fG4379elVG1xhPF3gPizenB1D%2F8QiRumF%2Fk34TvEtLlLI1foGsgj%2B1Wj0pYaNSLCU8an4qtGGDCEIJXk9h%2B%2BUtyXYAX6MDGLPZYNzGd0OZdrB%2B9wNJwup1imzXQx1TtT8JzmBx39v2wU9Z1zx%2FPHK65BVH%2FqOXDIjW3fYvc9LLfr2ETJ%2BP%2ByViPRWlGwKLmCepQowr0ApDqUmUoltZl9781HWztVKKVybcNQxd%2FZbFMMFOkbLmlaBLKl5nd3GkBnrSgwO5rbkLXtLotig0aYcyXHs9svLactIBpOeTQv2Fl9LQxWUL0zTS9zIdKEODOQyTvC3zYWHjSbvj%2FlpCaGX00pJ8%2F44adjZRh4k8ju9jkSBQgF6UhSx66jpRPTF4oVK3I2jqDw6cq%2B80ybx6E6VacxIM1GO55TzGwWip7Ku3C3ed2sGqHL%2FovUQhvllZouHgKFQMip1rRVEk%2Fnt1eKIWFseykO0qA6Gc7ORUZx3mxjmEX%2BSujgwVgdSemC015Ue6BeteTg4X5ph5GPs2JdqQhm6BscAhAnFv2ulTigYVF9aLCfqVAr1val%2BwigkYmPwWwCdKF%2B9Jab9J%2F3D18uynzDTMaPXc0flRILYw4eTLNnkubbQT3mMwwM2pvQY6pgHHKoOo3zlC3CpZAbg%2FddsxzLURgAf8beW%2BBUgYa%2FJp624u1gv%2FVsM9j1myzpIgz%2F3GLKvYpfs2xgeF7oF6dXhNU4%2Bjp%2BBwbu%2BBeBekVnF5lWPuqloWQLt2zRCe2Hdpfdzn%2BgEazAb%2F1G6KkOMIHYs1wYiHMzMSy3wnvG5lx1jdTNEzZi9ese0JOz9aQ4llM1uI70MDQpV0dLQJ28bub3NZ%2Fstz1fKC&X-Amz-Signature=60b8d4d72297b8c850d3d9820dfa8f1a608b69c6e21d2ff4d47795bc6b564177&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2OLDCG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVoZTlRf42BzutoGqMBCPeBYYcANDtzztkbXXgkVi4xAiAz3kx6emDvNTWhcJaU8rChUSCaKj5x5f2WZY%2BIVq3jhCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoN%2Fcg9FYMxp43SCTKtwDhgs3x5fG4379elVG1xhPF3gPizenB1D%2F8QiRumF%2Fk34TvEtLlLI1foGsgj%2B1Wj0pYaNSLCU8an4qtGGDCEIJXk9h%2B%2BUtyXYAX6MDGLPZYNzGd0OZdrB%2B9wNJwup1imzXQx1TtT8JzmBx39v2wU9Z1zx%2FPHK65BVH%2FqOXDIjW3fYvc9LLfr2ETJ%2BP%2ByViPRWlGwKLmCepQowr0ApDqUmUoltZl9781HWztVKKVybcNQxd%2FZbFMMFOkbLmlaBLKl5nd3GkBnrSgwO5rbkLXtLotig0aYcyXHs9svLactIBpOeTQv2Fl9LQxWUL0zTS9zIdKEODOQyTvC3zYWHjSbvj%2FlpCaGX00pJ8%2F44adjZRh4k8ju9jkSBQgF6UhSx66jpRPTF4oVK3I2jqDw6cq%2B80ybx6E6VacxIM1GO55TzGwWip7Ku3C3ed2sGqHL%2FovUQhvllZouHgKFQMip1rRVEk%2Fnt1eKIWFseykO0qA6Gc7ORUZx3mxjmEX%2BSujgwVgdSemC015Ue6BeteTg4X5ph5GPs2JdqQhm6BscAhAnFv2ulTigYVF9aLCfqVAr1val%2BwigkYmPwWwCdKF%2B9Jab9J%2F3D18uynzDTMaPXc0flRILYw4eTLNnkubbQT3mMwwM2pvQY6pgHHKoOo3zlC3CpZAbg%2FddsxzLURgAf8beW%2BBUgYa%2FJp624u1gv%2FVsM9j1myzpIgz%2F3GLKvYpfs2xgeF7oF6dXhNU4%2Bjp%2BBwbu%2BBeBekVnF5lWPuqloWQLt2zRCe2Hdpfdzn%2BgEazAb%2F1G6KkOMIHYs1wYiHMzMSy3wnvG5lx1jdTNEzZi9ese0JOz9aQ4llM1uI70MDQpV0dLQJ28bub3NZ%2Fstz1fKC&X-Amz-Signature=6fba85d0900606ae081b476a82e76a79204733de7cbfaf5495c5682be48c72ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2OLDCG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVoZTlRf42BzutoGqMBCPeBYYcANDtzztkbXXgkVi4xAiAz3kx6emDvNTWhcJaU8rChUSCaKj5x5f2WZY%2BIVq3jhCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoN%2Fcg9FYMxp43SCTKtwDhgs3x5fG4379elVG1xhPF3gPizenB1D%2F8QiRumF%2Fk34TvEtLlLI1foGsgj%2B1Wj0pYaNSLCU8an4qtGGDCEIJXk9h%2B%2BUtyXYAX6MDGLPZYNzGd0OZdrB%2B9wNJwup1imzXQx1TtT8JzmBx39v2wU9Z1zx%2FPHK65BVH%2FqOXDIjW3fYvc9LLfr2ETJ%2BP%2ByViPRWlGwKLmCepQowr0ApDqUmUoltZl9781HWztVKKVybcNQxd%2FZbFMMFOkbLmlaBLKl5nd3GkBnrSgwO5rbkLXtLotig0aYcyXHs9svLactIBpOeTQv2Fl9LQxWUL0zTS9zIdKEODOQyTvC3zYWHjSbvj%2FlpCaGX00pJ8%2F44adjZRh4k8ju9jkSBQgF6UhSx66jpRPTF4oVK3I2jqDw6cq%2B80ybx6E6VacxIM1GO55TzGwWip7Ku3C3ed2sGqHL%2FovUQhvllZouHgKFQMip1rRVEk%2Fnt1eKIWFseykO0qA6Gc7ORUZx3mxjmEX%2BSujgwVgdSemC015Ue6BeteTg4X5ph5GPs2JdqQhm6BscAhAnFv2ulTigYVF9aLCfqVAr1val%2BwigkYmPwWwCdKF%2B9Jab9J%2F3D18uynzDTMaPXc0flRILYw4eTLNnkubbQT3mMwwM2pvQY6pgHHKoOo3zlC3CpZAbg%2FddsxzLURgAf8beW%2BBUgYa%2FJp624u1gv%2FVsM9j1myzpIgz%2F3GLKvYpfs2xgeF7oF6dXhNU4%2Bjp%2BBwbu%2BBeBekVnF5lWPuqloWQLt2zRCe2Hdpfdzn%2BgEazAb%2F1G6KkOMIHYs1wYiHMzMSy3wnvG5lx1jdTNEzZi9ese0JOz9aQ4llM1uI70MDQpV0dLQJ28bub3NZ%2Fstz1fKC&X-Amz-Signature=2498f173554d6debc2354e129746f1e82a635b816eb4171614f55fdbcb4c7283&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2OLDCG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVoZTlRf42BzutoGqMBCPeBYYcANDtzztkbXXgkVi4xAiAz3kx6emDvNTWhcJaU8rChUSCaKj5x5f2WZY%2BIVq3jhCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoN%2Fcg9FYMxp43SCTKtwDhgs3x5fG4379elVG1xhPF3gPizenB1D%2F8QiRumF%2Fk34TvEtLlLI1foGsgj%2B1Wj0pYaNSLCU8an4qtGGDCEIJXk9h%2B%2BUtyXYAX6MDGLPZYNzGd0OZdrB%2B9wNJwup1imzXQx1TtT8JzmBx39v2wU9Z1zx%2FPHK65BVH%2FqOXDIjW3fYvc9LLfr2ETJ%2BP%2ByViPRWlGwKLmCepQowr0ApDqUmUoltZl9781HWztVKKVybcNQxd%2FZbFMMFOkbLmlaBLKl5nd3GkBnrSgwO5rbkLXtLotig0aYcyXHs9svLactIBpOeTQv2Fl9LQxWUL0zTS9zIdKEODOQyTvC3zYWHjSbvj%2FlpCaGX00pJ8%2F44adjZRh4k8ju9jkSBQgF6UhSx66jpRPTF4oVK3I2jqDw6cq%2B80ybx6E6VacxIM1GO55TzGwWip7Ku3C3ed2sGqHL%2FovUQhvllZouHgKFQMip1rRVEk%2Fnt1eKIWFseykO0qA6Gc7ORUZx3mxjmEX%2BSujgwVgdSemC015Ue6BeteTg4X5ph5GPs2JdqQhm6BscAhAnFv2ulTigYVF9aLCfqVAr1val%2BwigkYmPwWwCdKF%2B9Jab9J%2F3D18uynzDTMaPXc0flRILYw4eTLNnkubbQT3mMwwM2pvQY6pgHHKoOo3zlC3CpZAbg%2FddsxzLURgAf8beW%2BBUgYa%2FJp624u1gv%2FVsM9j1myzpIgz%2F3GLKvYpfs2xgeF7oF6dXhNU4%2Bjp%2BBwbu%2BBeBekVnF5lWPuqloWQLt2zRCe2Hdpfdzn%2BgEazAb%2F1G6KkOMIHYs1wYiHMzMSy3wnvG5lx1jdTNEzZi9ese0JOz9aQ4llM1uI70MDQpV0dLQJ28bub3NZ%2Fstz1fKC&X-Amz-Signature=8e1d0b9f2303233fe78df3826493260c59766c7054df827e1490a0c2e3e0a5db&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC2OLDCG%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVoZTlRf42BzutoGqMBCPeBYYcANDtzztkbXXgkVi4xAiAz3kx6emDvNTWhcJaU8rChUSCaKj5x5f2WZY%2BIVq3jhCqIBAjG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoN%2Fcg9FYMxp43SCTKtwDhgs3x5fG4379elVG1xhPF3gPizenB1D%2F8QiRumF%2Fk34TvEtLlLI1foGsgj%2B1Wj0pYaNSLCU8an4qtGGDCEIJXk9h%2B%2BUtyXYAX6MDGLPZYNzGd0OZdrB%2B9wNJwup1imzXQx1TtT8JzmBx39v2wU9Z1zx%2FPHK65BVH%2FqOXDIjW3fYvc9LLfr2ETJ%2BP%2ByViPRWlGwKLmCepQowr0ApDqUmUoltZl9781HWztVKKVybcNQxd%2FZbFMMFOkbLmlaBLKl5nd3GkBnrSgwO5rbkLXtLotig0aYcyXHs9svLactIBpOeTQv2Fl9LQxWUL0zTS9zIdKEODOQyTvC3zYWHjSbvj%2FlpCaGX00pJ8%2F44adjZRh4k8ju9jkSBQgF6UhSx66jpRPTF4oVK3I2jqDw6cq%2B80ybx6E6VacxIM1GO55TzGwWip7Ku3C3ed2sGqHL%2FovUQhvllZouHgKFQMip1rRVEk%2Fnt1eKIWFseykO0qA6Gc7ORUZx3mxjmEX%2BSujgwVgdSemC015Ue6BeteTg4X5ph5GPs2JdqQhm6BscAhAnFv2ulTigYVF9aLCfqVAr1val%2BwigkYmPwWwCdKF%2B9Jab9J%2F3D18uynzDTMaPXc0flRILYw4eTLNnkubbQT3mMwwM2pvQY6pgHHKoOo3zlC3CpZAbg%2FddsxzLURgAf8beW%2BBUgYa%2FJp624u1gv%2FVsM9j1myzpIgz%2F3GLKvYpfs2xgeF7oF6dXhNU4%2Bjp%2BBwbu%2BBeBekVnF5lWPuqloWQLt2zRCe2Hdpfdzn%2BgEazAb%2F1G6KkOMIHYs1wYiHMzMSy3wnvG5lx1jdTNEzZi9ese0JOz9aQ4llM1uI70MDQpV0dLQJ28bub3NZ%2Fstz1fKC&X-Amz-Signature=80c2b91b831ad715f6120f92e0a17317e18cab6016bda859b24989adcbae5b09&X-Amz-SignedHeaders=host&x-id=GetObject)
