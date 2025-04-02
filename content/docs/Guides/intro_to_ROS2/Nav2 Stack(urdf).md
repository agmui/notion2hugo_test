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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPFUL6J%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBJAgAVfkPVv2yac17Qsb78P5PoaPDX0w6g7uTGEfaQjAiBXJCUJLO0WN0epbvr9hp01l%2Fs9gcq2fLO6kXMuiS%2B6vSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaY9m2mExe94sY6MdKtwDfWE28g7FTRGgMprDdNEnOmxGKRbZ8QJrtM7fd7qO4HMZkti81YSS4cKOmafwCTiWkXseZtzud9J%2F3u1Vt8ApA1vWLLQoAJ2jhsyoF3Xxgr8uqJxTzJopiMhK4XoAZMlRhcrMhE%2B%2BmZwbU1D%2F7FqDLI8T1MCtyOHtMB6HValHBLJzTyl%2BTupNbGJPew7%2Fu8rum%2BQkIiFK6CGXotK%2FYsiGhXvKAnSKME%2FMI3Nv4pMNEIUW7TE0ds4g79AATwPJVOuIy5PwH9xMAGLDgr7dTNkufeY5U3AqiOW9nM%2FksCMDJhvrjKT3HGW7DOFzxO3Dqf5bNDQe1nRyUYmKVhYH%2F8XNCJaTo69OfYcFlRzsVbYQOr63QPYluQNuyxAJDPogUWQfoPGrTYIFIAwqVH8haaE1aBNLidM73qYtE7V2x9umadCIhh3fKfXk8vE%2FGDM6hD73uhgPhlQHIKefGNqXFS2UB%2FCih4MwUvAPtNQ1HvfNydeHCA2TjnErswQr9UyEUpFgbJVBNgY8fRhdTqSegZAvN2iPukj5Io%2FLlelCqo4DgJMui03jX0xTIxAc55BGP4g8zVPS2muB0n2NJ8%2BgYLVI4WgK7v5LGMEumTiJZ9sSo9jgED%2BBA7dbVMFsU1wwyc%2BzvwY6pgF3nVxm810G2un0%2FYvVV7YXXkEeicTSbGcIYL5tsAFN2W0duq3tc9BgSKx7VWqrmpgzpg8NlfWnL%2FldMrvPYR9r16n10N%2FWBraPlMeKabfQY6%2B4%2FmY1ql94H3tBbmHyJvPY9y9xVW4QB4iBZFIuOL2yIKXn6X6nDs3fLm9srXJVsUFuBD2ZpuUs9jGus4ckoTBOfFmrAwbLyr7ot7EcjhzPeQ%2BaSp10&X-Amz-Signature=d6493fb5e1d44b932cd870d71ff1ccb099c77f0412fa0a8f4ab1b1984d509ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPFUL6J%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBJAgAVfkPVv2yac17Qsb78P5PoaPDX0w6g7uTGEfaQjAiBXJCUJLO0WN0epbvr9hp01l%2Fs9gcq2fLO6kXMuiS%2B6vSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaY9m2mExe94sY6MdKtwDfWE28g7FTRGgMprDdNEnOmxGKRbZ8QJrtM7fd7qO4HMZkti81YSS4cKOmafwCTiWkXseZtzud9J%2F3u1Vt8ApA1vWLLQoAJ2jhsyoF3Xxgr8uqJxTzJopiMhK4XoAZMlRhcrMhE%2B%2BmZwbU1D%2F7FqDLI8T1MCtyOHtMB6HValHBLJzTyl%2BTupNbGJPew7%2Fu8rum%2BQkIiFK6CGXotK%2FYsiGhXvKAnSKME%2FMI3Nv4pMNEIUW7TE0ds4g79AATwPJVOuIy5PwH9xMAGLDgr7dTNkufeY5U3AqiOW9nM%2FksCMDJhvrjKT3HGW7DOFzxO3Dqf5bNDQe1nRyUYmKVhYH%2F8XNCJaTo69OfYcFlRzsVbYQOr63QPYluQNuyxAJDPogUWQfoPGrTYIFIAwqVH8haaE1aBNLidM73qYtE7V2x9umadCIhh3fKfXk8vE%2FGDM6hD73uhgPhlQHIKefGNqXFS2UB%2FCih4MwUvAPtNQ1HvfNydeHCA2TjnErswQr9UyEUpFgbJVBNgY8fRhdTqSegZAvN2iPukj5Io%2FLlelCqo4DgJMui03jX0xTIxAc55BGP4g8zVPS2muB0n2NJ8%2BgYLVI4WgK7v5LGMEumTiJZ9sSo9jgED%2BBA7dbVMFsU1wwyc%2BzvwY6pgF3nVxm810G2un0%2FYvVV7YXXkEeicTSbGcIYL5tsAFN2W0duq3tc9BgSKx7VWqrmpgzpg8NlfWnL%2FldMrvPYR9r16n10N%2FWBraPlMeKabfQY6%2B4%2FmY1ql94H3tBbmHyJvPY9y9xVW4QB4iBZFIuOL2yIKXn6X6nDs3fLm9srXJVsUFuBD2ZpuUs9jGus4ckoTBOfFmrAwbLyr7ot7EcjhzPeQ%2BaSp10&X-Amz-Signature=9ec8d0f4e9e37684d5fe87937a6d7c337ed06cfb7a7a0d6eb2d50802a070b6a6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPFUL6J%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBJAgAVfkPVv2yac17Qsb78P5PoaPDX0w6g7uTGEfaQjAiBXJCUJLO0WN0epbvr9hp01l%2Fs9gcq2fLO6kXMuiS%2B6vSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaY9m2mExe94sY6MdKtwDfWE28g7FTRGgMprDdNEnOmxGKRbZ8QJrtM7fd7qO4HMZkti81YSS4cKOmafwCTiWkXseZtzud9J%2F3u1Vt8ApA1vWLLQoAJ2jhsyoF3Xxgr8uqJxTzJopiMhK4XoAZMlRhcrMhE%2B%2BmZwbU1D%2F7FqDLI8T1MCtyOHtMB6HValHBLJzTyl%2BTupNbGJPew7%2Fu8rum%2BQkIiFK6CGXotK%2FYsiGhXvKAnSKME%2FMI3Nv4pMNEIUW7TE0ds4g79AATwPJVOuIy5PwH9xMAGLDgr7dTNkufeY5U3AqiOW9nM%2FksCMDJhvrjKT3HGW7DOFzxO3Dqf5bNDQe1nRyUYmKVhYH%2F8XNCJaTo69OfYcFlRzsVbYQOr63QPYluQNuyxAJDPogUWQfoPGrTYIFIAwqVH8haaE1aBNLidM73qYtE7V2x9umadCIhh3fKfXk8vE%2FGDM6hD73uhgPhlQHIKefGNqXFS2UB%2FCih4MwUvAPtNQ1HvfNydeHCA2TjnErswQr9UyEUpFgbJVBNgY8fRhdTqSegZAvN2iPukj5Io%2FLlelCqo4DgJMui03jX0xTIxAc55BGP4g8zVPS2muB0n2NJ8%2BgYLVI4WgK7v5LGMEumTiJZ9sSo9jgED%2BBA7dbVMFsU1wwyc%2BzvwY6pgF3nVxm810G2un0%2FYvVV7YXXkEeicTSbGcIYL5tsAFN2W0duq3tc9BgSKx7VWqrmpgzpg8NlfWnL%2FldMrvPYR9r16n10N%2FWBraPlMeKabfQY6%2B4%2FmY1ql94H3tBbmHyJvPY9y9xVW4QB4iBZFIuOL2yIKXn6X6nDs3fLm9srXJVsUFuBD2ZpuUs9jGus4ckoTBOfFmrAwbLyr7ot7EcjhzPeQ%2BaSp10&X-Amz-Signature=1c6af1427f233ea84997315a33961d779ce652d958e9bebf54f14c1fb4d6e290&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPFUL6J%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBJAgAVfkPVv2yac17Qsb78P5PoaPDX0w6g7uTGEfaQjAiBXJCUJLO0WN0epbvr9hp01l%2Fs9gcq2fLO6kXMuiS%2B6vSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaY9m2mExe94sY6MdKtwDfWE28g7FTRGgMprDdNEnOmxGKRbZ8QJrtM7fd7qO4HMZkti81YSS4cKOmafwCTiWkXseZtzud9J%2F3u1Vt8ApA1vWLLQoAJ2jhsyoF3Xxgr8uqJxTzJopiMhK4XoAZMlRhcrMhE%2B%2BmZwbU1D%2F7FqDLI8T1MCtyOHtMB6HValHBLJzTyl%2BTupNbGJPew7%2Fu8rum%2BQkIiFK6CGXotK%2FYsiGhXvKAnSKME%2FMI3Nv4pMNEIUW7TE0ds4g79AATwPJVOuIy5PwH9xMAGLDgr7dTNkufeY5U3AqiOW9nM%2FksCMDJhvrjKT3HGW7DOFzxO3Dqf5bNDQe1nRyUYmKVhYH%2F8XNCJaTo69OfYcFlRzsVbYQOr63QPYluQNuyxAJDPogUWQfoPGrTYIFIAwqVH8haaE1aBNLidM73qYtE7V2x9umadCIhh3fKfXk8vE%2FGDM6hD73uhgPhlQHIKefGNqXFS2UB%2FCih4MwUvAPtNQ1HvfNydeHCA2TjnErswQr9UyEUpFgbJVBNgY8fRhdTqSegZAvN2iPukj5Io%2FLlelCqo4DgJMui03jX0xTIxAc55BGP4g8zVPS2muB0n2NJ8%2BgYLVI4WgK7v5LGMEumTiJZ9sSo9jgED%2BBA7dbVMFsU1wwyc%2BzvwY6pgF3nVxm810G2un0%2FYvVV7YXXkEeicTSbGcIYL5tsAFN2W0duq3tc9BgSKx7VWqrmpgzpg8NlfWnL%2FldMrvPYR9r16n10N%2FWBraPlMeKabfQY6%2B4%2FmY1ql94H3tBbmHyJvPY9y9xVW4QB4iBZFIuOL2yIKXn6X6nDs3fLm9srXJVsUFuBD2ZpuUs9jGus4ckoTBOfFmrAwbLyr7ot7EcjhzPeQ%2BaSp10&X-Amz-Signature=b432067b69fdf7158750f8d61d776a4cffae3e87cd22d27d467d070e6610199a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPFUL6J%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBJAgAVfkPVv2yac17Qsb78P5PoaPDX0w6g7uTGEfaQjAiBXJCUJLO0WN0epbvr9hp01l%2Fs9gcq2fLO6kXMuiS%2B6vSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaY9m2mExe94sY6MdKtwDfWE28g7FTRGgMprDdNEnOmxGKRbZ8QJrtM7fd7qO4HMZkti81YSS4cKOmafwCTiWkXseZtzud9J%2F3u1Vt8ApA1vWLLQoAJ2jhsyoF3Xxgr8uqJxTzJopiMhK4XoAZMlRhcrMhE%2B%2BmZwbU1D%2F7FqDLI8T1MCtyOHtMB6HValHBLJzTyl%2BTupNbGJPew7%2Fu8rum%2BQkIiFK6CGXotK%2FYsiGhXvKAnSKME%2FMI3Nv4pMNEIUW7TE0ds4g79AATwPJVOuIy5PwH9xMAGLDgr7dTNkufeY5U3AqiOW9nM%2FksCMDJhvrjKT3HGW7DOFzxO3Dqf5bNDQe1nRyUYmKVhYH%2F8XNCJaTo69OfYcFlRzsVbYQOr63QPYluQNuyxAJDPogUWQfoPGrTYIFIAwqVH8haaE1aBNLidM73qYtE7V2x9umadCIhh3fKfXk8vE%2FGDM6hD73uhgPhlQHIKefGNqXFS2UB%2FCih4MwUvAPtNQ1HvfNydeHCA2TjnErswQr9UyEUpFgbJVBNgY8fRhdTqSegZAvN2iPukj5Io%2FLlelCqo4DgJMui03jX0xTIxAc55BGP4g8zVPS2muB0n2NJ8%2BgYLVI4WgK7v5LGMEumTiJZ9sSo9jgED%2BBA7dbVMFsU1wwyc%2BzvwY6pgF3nVxm810G2un0%2FYvVV7YXXkEeicTSbGcIYL5tsAFN2W0duq3tc9BgSKx7VWqrmpgzpg8NlfWnL%2FldMrvPYR9r16n10N%2FWBraPlMeKabfQY6%2B4%2FmY1ql94H3tBbmHyJvPY9y9xVW4QB4iBZFIuOL2yIKXn6X6nDs3fLm9srXJVsUFuBD2ZpuUs9jGus4ckoTBOfFmrAwbLyr7ot7EcjhzPeQ%2BaSp10&X-Amz-Signature=ce15fb1c3b77ceae9affec07410f7f7a7eb4deda6e514323a9321944fd7e268c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPFUL6J%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIBJAgAVfkPVv2yac17Qsb78P5PoaPDX0w6g7uTGEfaQjAiBXJCUJLO0WN0epbvr9hp01l%2Fs9gcq2fLO6kXMuiS%2B6vSqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMaY9m2mExe94sY6MdKtwDfWE28g7FTRGgMprDdNEnOmxGKRbZ8QJrtM7fd7qO4HMZkti81YSS4cKOmafwCTiWkXseZtzud9J%2F3u1Vt8ApA1vWLLQoAJ2jhsyoF3Xxgr8uqJxTzJopiMhK4XoAZMlRhcrMhE%2B%2BmZwbU1D%2F7FqDLI8T1MCtyOHtMB6HValHBLJzTyl%2BTupNbGJPew7%2Fu8rum%2BQkIiFK6CGXotK%2FYsiGhXvKAnSKME%2FMI3Nv4pMNEIUW7TE0ds4g79AATwPJVOuIy5PwH9xMAGLDgr7dTNkufeY5U3AqiOW9nM%2FksCMDJhvrjKT3HGW7DOFzxO3Dqf5bNDQe1nRyUYmKVhYH%2F8XNCJaTo69OfYcFlRzsVbYQOr63QPYluQNuyxAJDPogUWQfoPGrTYIFIAwqVH8haaE1aBNLidM73qYtE7V2x9umadCIhh3fKfXk8vE%2FGDM6hD73uhgPhlQHIKefGNqXFS2UB%2FCih4MwUvAPtNQ1HvfNydeHCA2TjnErswQr9UyEUpFgbJVBNgY8fRhdTqSegZAvN2iPukj5Io%2FLlelCqo4DgJMui03jX0xTIxAc55BGP4g8zVPS2muB0n2NJ8%2BgYLVI4WgK7v5LGMEumTiJZ9sSo9jgED%2BBA7dbVMFsU1wwyc%2BzvwY6pgF3nVxm810G2un0%2FYvVV7YXXkEeicTSbGcIYL5tsAFN2W0duq3tc9BgSKx7VWqrmpgzpg8NlfWnL%2FldMrvPYR9r16n10N%2FWBraPlMeKabfQY6%2B4%2FmY1ql94H3tBbmHyJvPY9y9xVW4QB4iBZFIuOL2yIKXn6X6nDs3fLm9srXJVsUFuBD2ZpuUs9jGus4ckoTBOfFmrAwbLyr7ot7EcjhzPeQ%2BaSp10&X-Amz-Signature=47430a678bf038b7fc49893a5a0c4fba6d3fe02f5c73f8c7db7a08feb17f1a4e&X-Amz-SignedHeaders=host&x-id=GetObject)
