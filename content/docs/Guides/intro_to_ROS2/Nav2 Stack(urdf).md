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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5VDQCR4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARyyu%2FbI%2B3UfLTaBjGLP8GuVUmaVtvDLlZuczPFuc1bAiBjBfVvA5umTPbviDkgJP5j4YIHWB1R2j46D8eS80aEiSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOnvxUOkZNyr0uBFKtwD3%2F3zULZYB%2Fjbyyzfbc6sGRFgCCU5O4m1cZcKlIvnwKc2BY6KxHWy5q0pd5enUs0pFbHTOgTetMY8ib00O%2FwakNNIh%2F2P3R24JA3T%2FTNxVx9mwqKobmXpAPy6H1oFPhSEKWpkp6TmK395S5jWq2j0KmJYij65JFHMJWMcznla6UUQQXPlKXJgB3Vs9DAHpuQBi4BBlpsqw9Q%2BQze3C0CKNx7JMnKL0W9z%2Fi5SwHrTvOFvsYI5nUVjG5I8dwhNq%2FbvU6MfRDMjO25%2B2IpJIiPGsPyl7LpfR9EqHi0MUMHm51Ft6%2F0mpiJgSm5ho2u%2BwYolst4VrOXDU12k4P4lyzqoNxVrc%2Bps6nf7PN41EA8OD%2BpAIGI41RxJP1svNnhMZg%2B5wqvc%2FBT3%2BfXsuGouMPqy23FaANfO%2BcJstmNJDuHzJ0UH6neXufhyXkuvFBZBIbeqI3pdX4W2pVnrgIJ8VwqoLqffWLMZao0S%2BMXVV%2FHK7jiy8VDAlpMa6s1%2F08KJODHBRa5tDwZQhPFOYbJ6%2Bw7WPEpm0LKyyBI82j60BML1A7UuOEeL4FBQYq8%2FhMSHRTs6riWZv60%2FMMafhhsBvj3aIiXckT6LxYl4UNJ0bUxmZZIuJvQuhxGX16O9GdQwzK3LwwY6pgHKvHnwzmxqxHbooII3dzcAzFrLBmxidAAPic7bIRL%2FSKM%2Bwg6d0DmuaUeQ5yuiLFnoD92Np573cNZiho72Yzus%2FGks9Wz3KXJKLu4Wm1XxV26P%2F2h7IPYxp4KYgxmEmy72M0NjUfSXOWiEnZlvTSAT3175XE2qYRIA3MonRbpL7BwQ33WCeadQg8cpV9UXHYXPtxtWuY%2FWn0ExT5B0WrGsxWgvm8Zr&X-Amz-Signature=0033613a59525bbc3653ae0eec2c5deea046a4f81cf5493bb7bd80c4aa8c4903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5VDQCR4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARyyu%2FbI%2B3UfLTaBjGLP8GuVUmaVtvDLlZuczPFuc1bAiBjBfVvA5umTPbviDkgJP5j4YIHWB1R2j46D8eS80aEiSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOnvxUOkZNyr0uBFKtwD3%2F3zULZYB%2Fjbyyzfbc6sGRFgCCU5O4m1cZcKlIvnwKc2BY6KxHWy5q0pd5enUs0pFbHTOgTetMY8ib00O%2FwakNNIh%2F2P3R24JA3T%2FTNxVx9mwqKobmXpAPy6H1oFPhSEKWpkp6TmK395S5jWq2j0KmJYij65JFHMJWMcznla6UUQQXPlKXJgB3Vs9DAHpuQBi4BBlpsqw9Q%2BQze3C0CKNx7JMnKL0W9z%2Fi5SwHrTvOFvsYI5nUVjG5I8dwhNq%2FbvU6MfRDMjO25%2B2IpJIiPGsPyl7LpfR9EqHi0MUMHm51Ft6%2F0mpiJgSm5ho2u%2BwYolst4VrOXDU12k4P4lyzqoNxVrc%2Bps6nf7PN41EA8OD%2BpAIGI41RxJP1svNnhMZg%2B5wqvc%2FBT3%2BfXsuGouMPqy23FaANfO%2BcJstmNJDuHzJ0UH6neXufhyXkuvFBZBIbeqI3pdX4W2pVnrgIJ8VwqoLqffWLMZao0S%2BMXVV%2FHK7jiy8VDAlpMa6s1%2F08KJODHBRa5tDwZQhPFOYbJ6%2Bw7WPEpm0LKyyBI82j60BML1A7UuOEeL4FBQYq8%2FhMSHRTs6riWZv60%2FMMafhhsBvj3aIiXckT6LxYl4UNJ0bUxmZZIuJvQuhxGX16O9GdQwzK3LwwY6pgHKvHnwzmxqxHbooII3dzcAzFrLBmxidAAPic7bIRL%2FSKM%2Bwg6d0DmuaUeQ5yuiLFnoD92Np573cNZiho72Yzus%2FGks9Wz3KXJKLu4Wm1XxV26P%2F2h7IPYxp4KYgxmEmy72M0NjUfSXOWiEnZlvTSAT3175XE2qYRIA3MonRbpL7BwQ33WCeadQg8cpV9UXHYXPtxtWuY%2FWn0ExT5B0WrGsxWgvm8Zr&X-Amz-Signature=3537d333ec7466e0d2176b0514e5d765ec355e096594998bc4390f0049467376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5VDQCR4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARyyu%2FbI%2B3UfLTaBjGLP8GuVUmaVtvDLlZuczPFuc1bAiBjBfVvA5umTPbviDkgJP5j4YIHWB1R2j46D8eS80aEiSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOnvxUOkZNyr0uBFKtwD3%2F3zULZYB%2Fjbyyzfbc6sGRFgCCU5O4m1cZcKlIvnwKc2BY6KxHWy5q0pd5enUs0pFbHTOgTetMY8ib00O%2FwakNNIh%2F2P3R24JA3T%2FTNxVx9mwqKobmXpAPy6H1oFPhSEKWpkp6TmK395S5jWq2j0KmJYij65JFHMJWMcznla6UUQQXPlKXJgB3Vs9DAHpuQBi4BBlpsqw9Q%2BQze3C0CKNx7JMnKL0W9z%2Fi5SwHrTvOFvsYI5nUVjG5I8dwhNq%2FbvU6MfRDMjO25%2B2IpJIiPGsPyl7LpfR9EqHi0MUMHm51Ft6%2F0mpiJgSm5ho2u%2BwYolst4VrOXDU12k4P4lyzqoNxVrc%2Bps6nf7PN41EA8OD%2BpAIGI41RxJP1svNnhMZg%2B5wqvc%2FBT3%2BfXsuGouMPqy23FaANfO%2BcJstmNJDuHzJ0UH6neXufhyXkuvFBZBIbeqI3pdX4W2pVnrgIJ8VwqoLqffWLMZao0S%2BMXVV%2FHK7jiy8VDAlpMa6s1%2F08KJODHBRa5tDwZQhPFOYbJ6%2Bw7WPEpm0LKyyBI82j60BML1A7UuOEeL4FBQYq8%2FhMSHRTs6riWZv60%2FMMafhhsBvj3aIiXckT6LxYl4UNJ0bUxmZZIuJvQuhxGX16O9GdQwzK3LwwY6pgHKvHnwzmxqxHbooII3dzcAzFrLBmxidAAPic7bIRL%2FSKM%2Bwg6d0DmuaUeQ5yuiLFnoD92Np573cNZiho72Yzus%2FGks9Wz3KXJKLu4Wm1XxV26P%2F2h7IPYxp4KYgxmEmy72M0NjUfSXOWiEnZlvTSAT3175XE2qYRIA3MonRbpL7BwQ33WCeadQg8cpV9UXHYXPtxtWuY%2FWn0ExT5B0WrGsxWgvm8Zr&X-Amz-Signature=32e9966a2704e9a82497939d19ffe6b7923aabae6c107635e483fd65bd3b16f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5VDQCR4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARyyu%2FbI%2B3UfLTaBjGLP8GuVUmaVtvDLlZuczPFuc1bAiBjBfVvA5umTPbviDkgJP5j4YIHWB1R2j46D8eS80aEiSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOnvxUOkZNyr0uBFKtwD3%2F3zULZYB%2Fjbyyzfbc6sGRFgCCU5O4m1cZcKlIvnwKc2BY6KxHWy5q0pd5enUs0pFbHTOgTetMY8ib00O%2FwakNNIh%2F2P3R24JA3T%2FTNxVx9mwqKobmXpAPy6H1oFPhSEKWpkp6TmK395S5jWq2j0KmJYij65JFHMJWMcznla6UUQQXPlKXJgB3Vs9DAHpuQBi4BBlpsqw9Q%2BQze3C0CKNx7JMnKL0W9z%2Fi5SwHrTvOFvsYI5nUVjG5I8dwhNq%2FbvU6MfRDMjO25%2B2IpJIiPGsPyl7LpfR9EqHi0MUMHm51Ft6%2F0mpiJgSm5ho2u%2BwYolst4VrOXDU12k4P4lyzqoNxVrc%2Bps6nf7PN41EA8OD%2BpAIGI41RxJP1svNnhMZg%2B5wqvc%2FBT3%2BfXsuGouMPqy23FaANfO%2BcJstmNJDuHzJ0UH6neXufhyXkuvFBZBIbeqI3pdX4W2pVnrgIJ8VwqoLqffWLMZao0S%2BMXVV%2FHK7jiy8VDAlpMa6s1%2F08KJODHBRa5tDwZQhPFOYbJ6%2Bw7WPEpm0LKyyBI82j60BML1A7UuOEeL4FBQYq8%2FhMSHRTs6riWZv60%2FMMafhhsBvj3aIiXckT6LxYl4UNJ0bUxmZZIuJvQuhxGX16O9GdQwzK3LwwY6pgHKvHnwzmxqxHbooII3dzcAzFrLBmxidAAPic7bIRL%2FSKM%2Bwg6d0DmuaUeQ5yuiLFnoD92Np573cNZiho72Yzus%2FGks9Wz3KXJKLu4Wm1XxV26P%2F2h7IPYxp4KYgxmEmy72M0NjUfSXOWiEnZlvTSAT3175XE2qYRIA3MonRbpL7BwQ33WCeadQg8cpV9UXHYXPtxtWuY%2FWn0ExT5B0WrGsxWgvm8Zr&X-Amz-Signature=29ae1f3fb38721bf2ffa783bacef709860df0eea06941e18b95aca19b0f92731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5VDQCR4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARyyu%2FbI%2B3UfLTaBjGLP8GuVUmaVtvDLlZuczPFuc1bAiBjBfVvA5umTPbviDkgJP5j4YIHWB1R2j46D8eS80aEiSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOnvxUOkZNyr0uBFKtwD3%2F3zULZYB%2Fjbyyzfbc6sGRFgCCU5O4m1cZcKlIvnwKc2BY6KxHWy5q0pd5enUs0pFbHTOgTetMY8ib00O%2FwakNNIh%2F2P3R24JA3T%2FTNxVx9mwqKobmXpAPy6H1oFPhSEKWpkp6TmK395S5jWq2j0KmJYij65JFHMJWMcznla6UUQQXPlKXJgB3Vs9DAHpuQBi4BBlpsqw9Q%2BQze3C0CKNx7JMnKL0W9z%2Fi5SwHrTvOFvsYI5nUVjG5I8dwhNq%2FbvU6MfRDMjO25%2B2IpJIiPGsPyl7LpfR9EqHi0MUMHm51Ft6%2F0mpiJgSm5ho2u%2BwYolst4VrOXDU12k4P4lyzqoNxVrc%2Bps6nf7PN41EA8OD%2BpAIGI41RxJP1svNnhMZg%2B5wqvc%2FBT3%2BfXsuGouMPqy23FaANfO%2BcJstmNJDuHzJ0UH6neXufhyXkuvFBZBIbeqI3pdX4W2pVnrgIJ8VwqoLqffWLMZao0S%2BMXVV%2FHK7jiy8VDAlpMa6s1%2F08KJODHBRa5tDwZQhPFOYbJ6%2Bw7WPEpm0LKyyBI82j60BML1A7UuOEeL4FBQYq8%2FhMSHRTs6riWZv60%2FMMafhhsBvj3aIiXckT6LxYl4UNJ0bUxmZZIuJvQuhxGX16O9GdQwzK3LwwY6pgHKvHnwzmxqxHbooII3dzcAzFrLBmxidAAPic7bIRL%2FSKM%2Bwg6d0DmuaUeQ5yuiLFnoD92Np573cNZiho72Yzus%2FGks9Wz3KXJKLu4Wm1XxV26P%2F2h7IPYxp4KYgxmEmy72M0NjUfSXOWiEnZlvTSAT3175XE2qYRIA3MonRbpL7BwQ33WCeadQg8cpV9UXHYXPtxtWuY%2FWn0ExT5B0WrGsxWgvm8Zr&X-Amz-Signature=2461002dd1fbe97b301c387e6426973be18ca4eeabfc9d2f150941eebc6e692c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5VDQCR4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARyyu%2FbI%2B3UfLTaBjGLP8GuVUmaVtvDLlZuczPFuc1bAiBjBfVvA5umTPbviDkgJP5j4YIHWB1R2j46D8eS80aEiSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTOnvxUOkZNyr0uBFKtwD3%2F3zULZYB%2Fjbyyzfbc6sGRFgCCU5O4m1cZcKlIvnwKc2BY6KxHWy5q0pd5enUs0pFbHTOgTetMY8ib00O%2FwakNNIh%2F2P3R24JA3T%2FTNxVx9mwqKobmXpAPy6H1oFPhSEKWpkp6TmK395S5jWq2j0KmJYij65JFHMJWMcznla6UUQQXPlKXJgB3Vs9DAHpuQBi4BBlpsqw9Q%2BQze3C0CKNx7JMnKL0W9z%2Fi5SwHrTvOFvsYI5nUVjG5I8dwhNq%2FbvU6MfRDMjO25%2B2IpJIiPGsPyl7LpfR9EqHi0MUMHm51Ft6%2F0mpiJgSm5ho2u%2BwYolst4VrOXDU12k4P4lyzqoNxVrc%2Bps6nf7PN41EA8OD%2BpAIGI41RxJP1svNnhMZg%2B5wqvc%2FBT3%2BfXsuGouMPqy23FaANfO%2BcJstmNJDuHzJ0UH6neXufhyXkuvFBZBIbeqI3pdX4W2pVnrgIJ8VwqoLqffWLMZao0S%2BMXVV%2FHK7jiy8VDAlpMa6s1%2F08KJODHBRa5tDwZQhPFOYbJ6%2Bw7WPEpm0LKyyBI82j60BML1A7UuOEeL4FBQYq8%2FhMSHRTs6riWZv60%2FMMafhhsBvj3aIiXckT6LxYl4UNJ0bUxmZZIuJvQuhxGX16O9GdQwzK3LwwY6pgHKvHnwzmxqxHbooII3dzcAzFrLBmxidAAPic7bIRL%2FSKM%2Bwg6d0DmuaUeQ5yuiLFnoD92Np573cNZiho72Yzus%2FGks9Wz3KXJKLu4Wm1XxV26P%2F2h7IPYxp4KYgxmEmy72M0NjUfSXOWiEnZlvTSAT3175XE2qYRIA3MonRbpL7BwQ33WCeadQg8cpV9UXHYXPtxtWuY%2FWn0ExT5B0WrGsxWgvm8Zr&X-Amz-Signature=a7b0639226a0d32910bd66e3dc507c2ce618e92f20b027cfece515c93607d3bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
