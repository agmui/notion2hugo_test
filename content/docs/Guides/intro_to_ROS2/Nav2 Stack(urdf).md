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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQ7H7RR%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFr8DCcD5qqf%2BH9PTidEWL7JXWBR%2FuRKmu6a98haKKQwIhALtFkwR%2BXAUxTdhNyh3e8AehN84zQ8TpwZyvOaEWqFyUKv8DCCAQABoMNjM3NDIzMTgzODA1IgziwkVKim5B1MBEwlcq3AO4EWcwmflaQPYxAmL3ntXhmTgOrqUnBdczyq4Ok8KZaGwrMPUjaZI1JfvtBArkKIrsW%2BKXYX0ufK8l4APn7hpbBrorL7JT%2BaerkNiuMUeLUeMavcc5DdUMDxpwHUhaSuFzD29OJGPdQJOGJh7PuPZMLuuRSNGeqvKnQmBxKDPKABXJw8reimix41fCdImn%2BOGKjXxe7D8jgMSnBwngcUcC96S1EZ4EUZILfHV%2B8OPrqfCUCBB7xhF%2BAeevLsUcgWb6Gcm3Qig%2BbnEdTPUzd0mvWhHwfmrfzcRZTL%2Brx%2B%2Fa5demA%2BocZTMlEw0TW3WxPTYz5bYiJeq1iP2RKtAVRiNcSKGnFeOqIARpkPMhb9W3GtTI0SZ5Jyhkr9vbE2FJYdAzQiDX65kzmzgNEr1uB%2F5TdzXiFgo3xe8nBfHQ8iWJhr3JgGnui%2BQLom%2FMJ9Pp2%2BleW6Y9gujYYtgf2z4xQHutziIzBWq55SmuoZDpCJTAOnU7sErT%2Bxq1YyGK7BoRvK8Gb3%2Fq5wXG8tijbeLAUAGTn2gCeK5BQRVXWAnSI5Hd1WwpN5PKXi3t%2B8ujZEgVK5%2BVIOjN2h%2Fh2j%2BPuQJh%2BMzEJngFPGN%2F%2FzYOCY5iXVciyYxNraK4vIu02ViX%2FzDBvMG%2FBjqkAeX7inbOh%2BOT6YTNf0gfVi01qzLE6GL3KNeMrJtG5avy%2Bn0ngCB%2BfnI7QVMZYjBLrogTv1HQ5g5lXOk%2BctHXVmLPOG48OuR5Pwg%2BluFnp1Hd%2B2wYvbpt0ccOEEQb9X0woZARb4IqtoAmla5zzhOFPp0wwWfN4Asui0wSdtjRRihcQ0Eudk0bReYP1xvbdc219THP6Pi4oLjrS8x%2FYoNLxNvZaWz7&X-Amz-Signature=39c02525fe731d8f6c25a1aef01e2fc99934d9d11b63203d10426b939fe6f2b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQ7H7RR%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFr8DCcD5qqf%2BH9PTidEWL7JXWBR%2FuRKmu6a98haKKQwIhALtFkwR%2BXAUxTdhNyh3e8AehN84zQ8TpwZyvOaEWqFyUKv8DCCAQABoMNjM3NDIzMTgzODA1IgziwkVKim5B1MBEwlcq3AO4EWcwmflaQPYxAmL3ntXhmTgOrqUnBdczyq4Ok8KZaGwrMPUjaZI1JfvtBArkKIrsW%2BKXYX0ufK8l4APn7hpbBrorL7JT%2BaerkNiuMUeLUeMavcc5DdUMDxpwHUhaSuFzD29OJGPdQJOGJh7PuPZMLuuRSNGeqvKnQmBxKDPKABXJw8reimix41fCdImn%2BOGKjXxe7D8jgMSnBwngcUcC96S1EZ4EUZILfHV%2B8OPrqfCUCBB7xhF%2BAeevLsUcgWb6Gcm3Qig%2BbnEdTPUzd0mvWhHwfmrfzcRZTL%2Brx%2B%2Fa5demA%2BocZTMlEw0TW3WxPTYz5bYiJeq1iP2RKtAVRiNcSKGnFeOqIARpkPMhb9W3GtTI0SZ5Jyhkr9vbE2FJYdAzQiDX65kzmzgNEr1uB%2F5TdzXiFgo3xe8nBfHQ8iWJhr3JgGnui%2BQLom%2FMJ9Pp2%2BleW6Y9gujYYtgf2z4xQHutziIzBWq55SmuoZDpCJTAOnU7sErT%2Bxq1YyGK7BoRvK8Gb3%2Fq5wXG8tijbeLAUAGTn2gCeK5BQRVXWAnSI5Hd1WwpN5PKXi3t%2B8ujZEgVK5%2BVIOjN2h%2Fh2j%2BPuQJh%2BMzEJngFPGN%2F%2FzYOCY5iXVciyYxNraK4vIu02ViX%2FzDBvMG%2FBjqkAeX7inbOh%2BOT6YTNf0gfVi01qzLE6GL3KNeMrJtG5avy%2Bn0ngCB%2BfnI7QVMZYjBLrogTv1HQ5g5lXOk%2BctHXVmLPOG48OuR5Pwg%2BluFnp1Hd%2B2wYvbpt0ccOEEQb9X0woZARb4IqtoAmla5zzhOFPp0wwWfN4Asui0wSdtjRRihcQ0Eudk0bReYP1xvbdc219THP6Pi4oLjrS8x%2FYoNLxNvZaWz7&X-Amz-Signature=96e375be88b51d8acc8d75f482709af4ea29fe62f00ded7f43401391ffb291f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQ7H7RR%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFr8DCcD5qqf%2BH9PTidEWL7JXWBR%2FuRKmu6a98haKKQwIhALtFkwR%2BXAUxTdhNyh3e8AehN84zQ8TpwZyvOaEWqFyUKv8DCCAQABoMNjM3NDIzMTgzODA1IgziwkVKim5B1MBEwlcq3AO4EWcwmflaQPYxAmL3ntXhmTgOrqUnBdczyq4Ok8KZaGwrMPUjaZI1JfvtBArkKIrsW%2BKXYX0ufK8l4APn7hpbBrorL7JT%2BaerkNiuMUeLUeMavcc5DdUMDxpwHUhaSuFzD29OJGPdQJOGJh7PuPZMLuuRSNGeqvKnQmBxKDPKABXJw8reimix41fCdImn%2BOGKjXxe7D8jgMSnBwngcUcC96S1EZ4EUZILfHV%2B8OPrqfCUCBB7xhF%2BAeevLsUcgWb6Gcm3Qig%2BbnEdTPUzd0mvWhHwfmrfzcRZTL%2Brx%2B%2Fa5demA%2BocZTMlEw0TW3WxPTYz5bYiJeq1iP2RKtAVRiNcSKGnFeOqIARpkPMhb9W3GtTI0SZ5Jyhkr9vbE2FJYdAzQiDX65kzmzgNEr1uB%2F5TdzXiFgo3xe8nBfHQ8iWJhr3JgGnui%2BQLom%2FMJ9Pp2%2BleW6Y9gujYYtgf2z4xQHutziIzBWq55SmuoZDpCJTAOnU7sErT%2Bxq1YyGK7BoRvK8Gb3%2Fq5wXG8tijbeLAUAGTn2gCeK5BQRVXWAnSI5Hd1WwpN5PKXi3t%2B8ujZEgVK5%2BVIOjN2h%2Fh2j%2BPuQJh%2BMzEJngFPGN%2F%2FzYOCY5iXVciyYxNraK4vIu02ViX%2FzDBvMG%2FBjqkAeX7inbOh%2BOT6YTNf0gfVi01qzLE6GL3KNeMrJtG5avy%2Bn0ngCB%2BfnI7QVMZYjBLrogTv1HQ5g5lXOk%2BctHXVmLPOG48OuR5Pwg%2BluFnp1Hd%2B2wYvbpt0ccOEEQb9X0woZARb4IqtoAmla5zzhOFPp0wwWfN4Asui0wSdtjRRihcQ0Eudk0bReYP1xvbdc219THP6Pi4oLjrS8x%2FYoNLxNvZaWz7&X-Amz-Signature=7ba3e243f78883f119366ebd97f020fee074567d494ec9e84f2c1cc58f332ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQ7H7RR%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFr8DCcD5qqf%2BH9PTidEWL7JXWBR%2FuRKmu6a98haKKQwIhALtFkwR%2BXAUxTdhNyh3e8AehN84zQ8TpwZyvOaEWqFyUKv8DCCAQABoMNjM3NDIzMTgzODA1IgziwkVKim5B1MBEwlcq3AO4EWcwmflaQPYxAmL3ntXhmTgOrqUnBdczyq4Ok8KZaGwrMPUjaZI1JfvtBArkKIrsW%2BKXYX0ufK8l4APn7hpbBrorL7JT%2BaerkNiuMUeLUeMavcc5DdUMDxpwHUhaSuFzD29OJGPdQJOGJh7PuPZMLuuRSNGeqvKnQmBxKDPKABXJw8reimix41fCdImn%2BOGKjXxe7D8jgMSnBwngcUcC96S1EZ4EUZILfHV%2B8OPrqfCUCBB7xhF%2BAeevLsUcgWb6Gcm3Qig%2BbnEdTPUzd0mvWhHwfmrfzcRZTL%2Brx%2B%2Fa5demA%2BocZTMlEw0TW3WxPTYz5bYiJeq1iP2RKtAVRiNcSKGnFeOqIARpkPMhb9W3GtTI0SZ5Jyhkr9vbE2FJYdAzQiDX65kzmzgNEr1uB%2F5TdzXiFgo3xe8nBfHQ8iWJhr3JgGnui%2BQLom%2FMJ9Pp2%2BleW6Y9gujYYtgf2z4xQHutziIzBWq55SmuoZDpCJTAOnU7sErT%2Bxq1YyGK7BoRvK8Gb3%2Fq5wXG8tijbeLAUAGTn2gCeK5BQRVXWAnSI5Hd1WwpN5PKXi3t%2B8ujZEgVK5%2BVIOjN2h%2Fh2j%2BPuQJh%2BMzEJngFPGN%2F%2FzYOCY5iXVciyYxNraK4vIu02ViX%2FzDBvMG%2FBjqkAeX7inbOh%2BOT6YTNf0gfVi01qzLE6GL3KNeMrJtG5avy%2Bn0ngCB%2BfnI7QVMZYjBLrogTv1HQ5g5lXOk%2BctHXVmLPOG48OuR5Pwg%2BluFnp1Hd%2B2wYvbpt0ccOEEQb9X0woZARb4IqtoAmla5zzhOFPp0wwWfN4Asui0wSdtjRRihcQ0Eudk0bReYP1xvbdc219THP6Pi4oLjrS8x%2FYoNLxNvZaWz7&X-Amz-Signature=65c0fb460b4ca24247278d049d91a85c5318c07653eb525e1b7b2274129223fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQ7H7RR%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFr8DCcD5qqf%2BH9PTidEWL7JXWBR%2FuRKmu6a98haKKQwIhALtFkwR%2BXAUxTdhNyh3e8AehN84zQ8TpwZyvOaEWqFyUKv8DCCAQABoMNjM3NDIzMTgzODA1IgziwkVKim5B1MBEwlcq3AO4EWcwmflaQPYxAmL3ntXhmTgOrqUnBdczyq4Ok8KZaGwrMPUjaZI1JfvtBArkKIrsW%2BKXYX0ufK8l4APn7hpbBrorL7JT%2BaerkNiuMUeLUeMavcc5DdUMDxpwHUhaSuFzD29OJGPdQJOGJh7PuPZMLuuRSNGeqvKnQmBxKDPKABXJw8reimix41fCdImn%2BOGKjXxe7D8jgMSnBwngcUcC96S1EZ4EUZILfHV%2B8OPrqfCUCBB7xhF%2BAeevLsUcgWb6Gcm3Qig%2BbnEdTPUzd0mvWhHwfmrfzcRZTL%2Brx%2B%2Fa5demA%2BocZTMlEw0TW3WxPTYz5bYiJeq1iP2RKtAVRiNcSKGnFeOqIARpkPMhb9W3GtTI0SZ5Jyhkr9vbE2FJYdAzQiDX65kzmzgNEr1uB%2F5TdzXiFgo3xe8nBfHQ8iWJhr3JgGnui%2BQLom%2FMJ9Pp2%2BleW6Y9gujYYtgf2z4xQHutziIzBWq55SmuoZDpCJTAOnU7sErT%2Bxq1YyGK7BoRvK8Gb3%2Fq5wXG8tijbeLAUAGTn2gCeK5BQRVXWAnSI5Hd1WwpN5PKXi3t%2B8ujZEgVK5%2BVIOjN2h%2Fh2j%2BPuQJh%2BMzEJngFPGN%2F%2FzYOCY5iXVciyYxNraK4vIu02ViX%2FzDBvMG%2FBjqkAeX7inbOh%2BOT6YTNf0gfVi01qzLE6GL3KNeMrJtG5avy%2Bn0ngCB%2BfnI7QVMZYjBLrogTv1HQ5g5lXOk%2BctHXVmLPOG48OuR5Pwg%2BluFnp1Hd%2B2wYvbpt0ccOEEQb9X0woZARb4IqtoAmla5zzhOFPp0wwWfN4Asui0wSdtjRRihcQ0Eudk0bReYP1xvbdc219THP6Pi4oLjrS8x%2FYoNLxNvZaWz7&X-Amz-Signature=e6fe2724d543433d7eaa6c4fdee86871249149d5463e8bfe2e0cd67dad75a6a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDQ7H7RR%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFr8DCcD5qqf%2BH9PTidEWL7JXWBR%2FuRKmu6a98haKKQwIhALtFkwR%2BXAUxTdhNyh3e8AehN84zQ8TpwZyvOaEWqFyUKv8DCCAQABoMNjM3NDIzMTgzODA1IgziwkVKim5B1MBEwlcq3AO4EWcwmflaQPYxAmL3ntXhmTgOrqUnBdczyq4Ok8KZaGwrMPUjaZI1JfvtBArkKIrsW%2BKXYX0ufK8l4APn7hpbBrorL7JT%2BaerkNiuMUeLUeMavcc5DdUMDxpwHUhaSuFzD29OJGPdQJOGJh7PuPZMLuuRSNGeqvKnQmBxKDPKABXJw8reimix41fCdImn%2BOGKjXxe7D8jgMSnBwngcUcC96S1EZ4EUZILfHV%2B8OPrqfCUCBB7xhF%2BAeevLsUcgWb6Gcm3Qig%2BbnEdTPUzd0mvWhHwfmrfzcRZTL%2Brx%2B%2Fa5demA%2BocZTMlEw0TW3WxPTYz5bYiJeq1iP2RKtAVRiNcSKGnFeOqIARpkPMhb9W3GtTI0SZ5Jyhkr9vbE2FJYdAzQiDX65kzmzgNEr1uB%2F5TdzXiFgo3xe8nBfHQ8iWJhr3JgGnui%2BQLom%2FMJ9Pp2%2BleW6Y9gujYYtgf2z4xQHutziIzBWq55SmuoZDpCJTAOnU7sErT%2Bxq1YyGK7BoRvK8Gb3%2Fq5wXG8tijbeLAUAGTn2gCeK5BQRVXWAnSI5Hd1WwpN5PKXi3t%2B8ujZEgVK5%2BVIOjN2h%2Fh2j%2BPuQJh%2BMzEJngFPGN%2F%2FzYOCY5iXVciyYxNraK4vIu02ViX%2FzDBvMG%2FBjqkAeX7inbOh%2BOT6YTNf0gfVi01qzLE6GL3KNeMrJtG5avy%2Bn0ngCB%2BfnI7QVMZYjBLrogTv1HQ5g5lXOk%2BctHXVmLPOG48OuR5Pwg%2BluFnp1Hd%2B2wYvbpt0ccOEEQb9X0woZARb4IqtoAmla5zzhOFPp0wwWfN4Asui0wSdtjRRihcQ0Eudk0bReYP1xvbdc219THP6Pi4oLjrS8x%2FYoNLxNvZaWz7&X-Amz-Signature=2f5a3700141de75d7c799b12cdeb3bab980296fa1d9c23ab0a2a628c8814b0dd&X-Amz-SignedHeaders=host&x-id=GetObject)
