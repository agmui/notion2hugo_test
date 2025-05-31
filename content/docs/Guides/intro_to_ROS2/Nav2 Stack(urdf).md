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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUP622C7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzqz5pgFQt5xstfOMHSQyXoBR9%2FRVvprec%2FrwVIanglAiEA4jgPTZ8Opx9vl1%2F8a6QtAxCBbLV7OVDBKcTfAE85GWEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8uH2Q8bLlNsMoewCrcAy%2F4Kh8%2B8GMdZOzHQKTktTeZryUVneag4fQABgGQfCm3h6aEscToNDXWz1x%2BNFPPVOMu8vSmZUsD4Qj1kRSKmiqH3OjB7wxZ0MJjUmfHp%2FqrCNHGQda4GORjnkUfIJFRQQRIMwcrNwDf9C05jQcWSsTt%2BTIYWwR4tkw9d%2FqbCmVhmy0Sv20NGIL1hFxa1rZNmK4nsRWs%2BggX38f17ewL59wN4N4k%2BznfsNpV4wMZwzOD5wEdMDMQu74t0hFSuG4h0zRvtogTOMMrITLdaXVikzCFPOXAuj8bgQ1BR2NSG%2BTU2VkSqOLNxJZAPU9wNK3w7zc5uj7LgGLAYDVh3gp%2BPdddcijrZbR80AQDLDekNrMOljqR1OyX5B5XeV07QgTBXblWsk7aXJ0oJU%2F5fhTv%2BHPFyjD4Nc42NzUerBmf46zZ1pzZENIh9GYYCdIzVv7O07Naf8w1I4FH4lSAPgmVVyT5hHLlrY7E7ZOt3X8gVoPe2REE3N5MclFVpB1wSIWnLcQPU1jaIRZCaUMkjBXHP%2FYB6zc0GnmBLziONjI%2F1JMp6R%2FLIV86P4PYg0okVEsTafaoXZSfypa9ujciTRIinRVO%2FK2vLQOd%2Bg3VUZclZOQJeIFZHQ0MzNMcIaw7MOui7MEGOqUBtaGFgqUK%2FZd1vZVeZasDUkIQAvU9sJB5QhBHBz%2FE19GAPca8N5WZfF%2FhUdOM8YRv%2BM6RCHPJwekbPCWYxX4MzC8TV%2FazIIy98zhE41HhG94zAu6JDYWAszKgEzvvKOQdA8SVXkMvrTe5uN6cK3WIVcVeoilToaepGGCKu8qEyEU9SV9PP9SR3wNPqbilkhjKh2QF8Ioq9BHyaUroj65dBt6vk%2FGH&X-Amz-Signature=8e0c980c27c9d261aaff3b845f7938212bf9b8bdfb1196cac13dec083ec9e726&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUP622C7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzqz5pgFQt5xstfOMHSQyXoBR9%2FRVvprec%2FrwVIanglAiEA4jgPTZ8Opx9vl1%2F8a6QtAxCBbLV7OVDBKcTfAE85GWEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8uH2Q8bLlNsMoewCrcAy%2F4Kh8%2B8GMdZOzHQKTktTeZryUVneag4fQABgGQfCm3h6aEscToNDXWz1x%2BNFPPVOMu8vSmZUsD4Qj1kRSKmiqH3OjB7wxZ0MJjUmfHp%2FqrCNHGQda4GORjnkUfIJFRQQRIMwcrNwDf9C05jQcWSsTt%2BTIYWwR4tkw9d%2FqbCmVhmy0Sv20NGIL1hFxa1rZNmK4nsRWs%2BggX38f17ewL59wN4N4k%2BznfsNpV4wMZwzOD5wEdMDMQu74t0hFSuG4h0zRvtogTOMMrITLdaXVikzCFPOXAuj8bgQ1BR2NSG%2BTU2VkSqOLNxJZAPU9wNK3w7zc5uj7LgGLAYDVh3gp%2BPdddcijrZbR80AQDLDekNrMOljqR1OyX5B5XeV07QgTBXblWsk7aXJ0oJU%2F5fhTv%2BHPFyjD4Nc42NzUerBmf46zZ1pzZENIh9GYYCdIzVv7O07Naf8w1I4FH4lSAPgmVVyT5hHLlrY7E7ZOt3X8gVoPe2REE3N5MclFVpB1wSIWnLcQPU1jaIRZCaUMkjBXHP%2FYB6zc0GnmBLziONjI%2F1JMp6R%2FLIV86P4PYg0okVEsTafaoXZSfypa9ujciTRIinRVO%2FK2vLQOd%2Bg3VUZclZOQJeIFZHQ0MzNMcIaw7MOui7MEGOqUBtaGFgqUK%2FZd1vZVeZasDUkIQAvU9sJB5QhBHBz%2FE19GAPca8N5WZfF%2FhUdOM8YRv%2BM6RCHPJwekbPCWYxX4MzC8TV%2FazIIy98zhE41HhG94zAu6JDYWAszKgEzvvKOQdA8SVXkMvrTe5uN6cK3WIVcVeoilToaepGGCKu8qEyEU9SV9PP9SR3wNPqbilkhjKh2QF8Ioq9BHyaUroj65dBt6vk%2FGH&X-Amz-Signature=b4153dbf4df8f7a56a52ef9c417f497ff978c9d0f517f209f693ef9eba31bb32&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUP622C7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzqz5pgFQt5xstfOMHSQyXoBR9%2FRVvprec%2FrwVIanglAiEA4jgPTZ8Opx9vl1%2F8a6QtAxCBbLV7OVDBKcTfAE85GWEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8uH2Q8bLlNsMoewCrcAy%2F4Kh8%2B8GMdZOzHQKTktTeZryUVneag4fQABgGQfCm3h6aEscToNDXWz1x%2BNFPPVOMu8vSmZUsD4Qj1kRSKmiqH3OjB7wxZ0MJjUmfHp%2FqrCNHGQda4GORjnkUfIJFRQQRIMwcrNwDf9C05jQcWSsTt%2BTIYWwR4tkw9d%2FqbCmVhmy0Sv20NGIL1hFxa1rZNmK4nsRWs%2BggX38f17ewL59wN4N4k%2BznfsNpV4wMZwzOD5wEdMDMQu74t0hFSuG4h0zRvtogTOMMrITLdaXVikzCFPOXAuj8bgQ1BR2NSG%2BTU2VkSqOLNxJZAPU9wNK3w7zc5uj7LgGLAYDVh3gp%2BPdddcijrZbR80AQDLDekNrMOljqR1OyX5B5XeV07QgTBXblWsk7aXJ0oJU%2F5fhTv%2BHPFyjD4Nc42NzUerBmf46zZ1pzZENIh9GYYCdIzVv7O07Naf8w1I4FH4lSAPgmVVyT5hHLlrY7E7ZOt3X8gVoPe2REE3N5MclFVpB1wSIWnLcQPU1jaIRZCaUMkjBXHP%2FYB6zc0GnmBLziONjI%2F1JMp6R%2FLIV86P4PYg0okVEsTafaoXZSfypa9ujciTRIinRVO%2FK2vLQOd%2Bg3VUZclZOQJeIFZHQ0MzNMcIaw7MOui7MEGOqUBtaGFgqUK%2FZd1vZVeZasDUkIQAvU9sJB5QhBHBz%2FE19GAPca8N5WZfF%2FhUdOM8YRv%2BM6RCHPJwekbPCWYxX4MzC8TV%2FazIIy98zhE41HhG94zAu6JDYWAszKgEzvvKOQdA8SVXkMvrTe5uN6cK3WIVcVeoilToaepGGCKu8qEyEU9SV9PP9SR3wNPqbilkhjKh2QF8Ioq9BHyaUroj65dBt6vk%2FGH&X-Amz-Signature=1e0df96b5eb5b934f1f1d3f41a6cb5d0c0456793d5064f5e6dd88367a6d4d96c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUP622C7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzqz5pgFQt5xstfOMHSQyXoBR9%2FRVvprec%2FrwVIanglAiEA4jgPTZ8Opx9vl1%2F8a6QtAxCBbLV7OVDBKcTfAE85GWEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8uH2Q8bLlNsMoewCrcAy%2F4Kh8%2B8GMdZOzHQKTktTeZryUVneag4fQABgGQfCm3h6aEscToNDXWz1x%2BNFPPVOMu8vSmZUsD4Qj1kRSKmiqH3OjB7wxZ0MJjUmfHp%2FqrCNHGQda4GORjnkUfIJFRQQRIMwcrNwDf9C05jQcWSsTt%2BTIYWwR4tkw9d%2FqbCmVhmy0Sv20NGIL1hFxa1rZNmK4nsRWs%2BggX38f17ewL59wN4N4k%2BznfsNpV4wMZwzOD5wEdMDMQu74t0hFSuG4h0zRvtogTOMMrITLdaXVikzCFPOXAuj8bgQ1BR2NSG%2BTU2VkSqOLNxJZAPU9wNK3w7zc5uj7LgGLAYDVh3gp%2BPdddcijrZbR80AQDLDekNrMOljqR1OyX5B5XeV07QgTBXblWsk7aXJ0oJU%2F5fhTv%2BHPFyjD4Nc42NzUerBmf46zZ1pzZENIh9GYYCdIzVv7O07Naf8w1I4FH4lSAPgmVVyT5hHLlrY7E7ZOt3X8gVoPe2REE3N5MclFVpB1wSIWnLcQPU1jaIRZCaUMkjBXHP%2FYB6zc0GnmBLziONjI%2F1JMp6R%2FLIV86P4PYg0okVEsTafaoXZSfypa9ujciTRIinRVO%2FK2vLQOd%2Bg3VUZclZOQJeIFZHQ0MzNMcIaw7MOui7MEGOqUBtaGFgqUK%2FZd1vZVeZasDUkIQAvU9sJB5QhBHBz%2FE19GAPca8N5WZfF%2FhUdOM8YRv%2BM6RCHPJwekbPCWYxX4MzC8TV%2FazIIy98zhE41HhG94zAu6JDYWAszKgEzvvKOQdA8SVXkMvrTe5uN6cK3WIVcVeoilToaepGGCKu8qEyEU9SV9PP9SR3wNPqbilkhjKh2QF8Ioq9BHyaUroj65dBt6vk%2FGH&X-Amz-Signature=5714d47e494eb85b7ac49ac146233507f22743353e2a8c9e3d72abc80f3c02f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUP622C7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzqz5pgFQt5xstfOMHSQyXoBR9%2FRVvprec%2FrwVIanglAiEA4jgPTZ8Opx9vl1%2F8a6QtAxCBbLV7OVDBKcTfAE85GWEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8uH2Q8bLlNsMoewCrcAy%2F4Kh8%2B8GMdZOzHQKTktTeZryUVneag4fQABgGQfCm3h6aEscToNDXWz1x%2BNFPPVOMu8vSmZUsD4Qj1kRSKmiqH3OjB7wxZ0MJjUmfHp%2FqrCNHGQda4GORjnkUfIJFRQQRIMwcrNwDf9C05jQcWSsTt%2BTIYWwR4tkw9d%2FqbCmVhmy0Sv20NGIL1hFxa1rZNmK4nsRWs%2BggX38f17ewL59wN4N4k%2BznfsNpV4wMZwzOD5wEdMDMQu74t0hFSuG4h0zRvtogTOMMrITLdaXVikzCFPOXAuj8bgQ1BR2NSG%2BTU2VkSqOLNxJZAPU9wNK3w7zc5uj7LgGLAYDVh3gp%2BPdddcijrZbR80AQDLDekNrMOljqR1OyX5B5XeV07QgTBXblWsk7aXJ0oJU%2F5fhTv%2BHPFyjD4Nc42NzUerBmf46zZ1pzZENIh9GYYCdIzVv7O07Naf8w1I4FH4lSAPgmVVyT5hHLlrY7E7ZOt3X8gVoPe2REE3N5MclFVpB1wSIWnLcQPU1jaIRZCaUMkjBXHP%2FYB6zc0GnmBLziONjI%2F1JMp6R%2FLIV86P4PYg0okVEsTafaoXZSfypa9ujciTRIinRVO%2FK2vLQOd%2Bg3VUZclZOQJeIFZHQ0MzNMcIaw7MOui7MEGOqUBtaGFgqUK%2FZd1vZVeZasDUkIQAvU9sJB5QhBHBz%2FE19GAPca8N5WZfF%2FhUdOM8YRv%2BM6RCHPJwekbPCWYxX4MzC8TV%2FazIIy98zhE41HhG94zAu6JDYWAszKgEzvvKOQdA8SVXkMvrTe5uN6cK3WIVcVeoilToaepGGCKu8qEyEU9SV9PP9SR3wNPqbilkhjKh2QF8Ioq9BHyaUroj65dBt6vk%2FGH&X-Amz-Signature=47b35034e689b714d183f2d104a5243bf115d4333f8d85b841cf70965ab932d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUP622C7%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzqz5pgFQt5xstfOMHSQyXoBR9%2FRVvprec%2FrwVIanglAiEA4jgPTZ8Opx9vl1%2F8a6QtAxCBbLV7OVDBKcTfAE85GWEqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8uH2Q8bLlNsMoewCrcAy%2F4Kh8%2B8GMdZOzHQKTktTeZryUVneag4fQABgGQfCm3h6aEscToNDXWz1x%2BNFPPVOMu8vSmZUsD4Qj1kRSKmiqH3OjB7wxZ0MJjUmfHp%2FqrCNHGQda4GORjnkUfIJFRQQRIMwcrNwDf9C05jQcWSsTt%2BTIYWwR4tkw9d%2FqbCmVhmy0Sv20NGIL1hFxa1rZNmK4nsRWs%2BggX38f17ewL59wN4N4k%2BznfsNpV4wMZwzOD5wEdMDMQu74t0hFSuG4h0zRvtogTOMMrITLdaXVikzCFPOXAuj8bgQ1BR2NSG%2BTU2VkSqOLNxJZAPU9wNK3w7zc5uj7LgGLAYDVh3gp%2BPdddcijrZbR80AQDLDekNrMOljqR1OyX5B5XeV07QgTBXblWsk7aXJ0oJU%2F5fhTv%2BHPFyjD4Nc42NzUerBmf46zZ1pzZENIh9GYYCdIzVv7O07Naf8w1I4FH4lSAPgmVVyT5hHLlrY7E7ZOt3X8gVoPe2REE3N5MclFVpB1wSIWnLcQPU1jaIRZCaUMkjBXHP%2FYB6zc0GnmBLziONjI%2F1JMp6R%2FLIV86P4PYg0okVEsTafaoXZSfypa9ujciTRIinRVO%2FK2vLQOd%2Bg3VUZclZOQJeIFZHQ0MzNMcIaw7MOui7MEGOqUBtaGFgqUK%2FZd1vZVeZasDUkIQAvU9sJB5QhBHBz%2FE19GAPca8N5WZfF%2FhUdOM8YRv%2BM6RCHPJwekbPCWYxX4MzC8TV%2FazIIy98zhE41HhG94zAu6JDYWAszKgEzvvKOQdA8SVXkMvrTe5uN6cK3WIVcVeoilToaepGGCKu8qEyEU9SV9PP9SR3wNPqbilkhjKh2QF8Ioq9BHyaUroj65dBt6vk%2FGH&X-Amz-Signature=36c2ad7c5b1f95e649f9c432389680d7b682121313952bae1fda3d20eabf6ec2&X-Amz-SignedHeaders=host&x-id=GetObject)
