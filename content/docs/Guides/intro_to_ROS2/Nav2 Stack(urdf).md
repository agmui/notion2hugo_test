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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBOZR45I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZnyaYCiv4lbW6yDTZJ5rOe1ExF0VQ3ofX0o5kbhj7UAiBsP40HhdJUDhJerLdFOZwmimwQk7b5553JTNaus%2FleEyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMFfIPnFGrgGAeGXBJKtwDWBeElNCr4ezzMm%2F8UdvVNzcHfwOtKmgS9a3LCBf1yLZ1wettvopEloEtHbgnTb1ODtZI1E0rSr7AVzZLwotfDroHMCNqfkVSZHLuDMyfkhABY09c2gqUfkJt6s2OnOmvEhGgX7Y3Sx8NqINF9wKcIFKwmAyZohXRCALI%2Bycs7Xq%2Fk41Py9Je92RDEbJwlx2BhwOezeYwLZqSWgybdo2sb7qB%2BJdmnEARBiXNfyIAWM30Y3H3R0S5YtOkzzY9Rxeb5i9sf5H4dtZGtyC%2FV78B98CzvfaYxBJUsUaG%2FZqCnf6kZzXWtkursC750FIWuTZsIURC19CdD%2B65DbssHkZEC0cIzTRNgDuJMTZYy3P8rFspOFgjIjSTheKXnay8wlxYKpX3vqtkK38lixbkfrIqWa4JETRBTI%2FO3pdgo6%2FTSX4V2bRGrYgqQj9uY3IyrRUSX%2Bgx4cl5DOPxpkJDTpXBVpMIbcM6Dj7Q3NOmD4qOB6rZZX24W9SlwJiY7bSTatL3ukl5ZVnBv8Y8wyzptttgUScBDaNsjXZoiHmHkIVGiB6iaC1GVTzIHgZhu7jwjxBUdoW0HHqyxAH5gg0inx3xVX2RrmWhRtA%2B9dIGA0WtiP8EMhInnt2MTq%2BY21Mw6ojBvwY6pgH8V%2Bf2VOB9tioIswJugaBj%2Fj9SYgeiBFmwlOg0qXbie3lk%2B2ImVoecMcfg%2Bdownb1snpCHWJqEWQNo24q9BOmfwhbflFA4Su89V1dDwmXpWdPwbBQNPgojMyuQuuh7QFB%2Bnoi6XcvBJbGdP8nopahMqc5IpCQEThy6uckgrI0OMzzAUbeWoRusNk6s3T2ebsTPGp5%2FY73wcG4Clw5As70ZGX9heqye&X-Amz-Signature=2634b95ae8fab0c2840117a0a0f6a329be29bc3e3f0924349d8b97a412cee1de&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBOZR45I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZnyaYCiv4lbW6yDTZJ5rOe1ExF0VQ3ofX0o5kbhj7UAiBsP40HhdJUDhJerLdFOZwmimwQk7b5553JTNaus%2FleEyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMFfIPnFGrgGAeGXBJKtwDWBeElNCr4ezzMm%2F8UdvVNzcHfwOtKmgS9a3LCBf1yLZ1wettvopEloEtHbgnTb1ODtZI1E0rSr7AVzZLwotfDroHMCNqfkVSZHLuDMyfkhABY09c2gqUfkJt6s2OnOmvEhGgX7Y3Sx8NqINF9wKcIFKwmAyZohXRCALI%2Bycs7Xq%2Fk41Py9Je92RDEbJwlx2BhwOezeYwLZqSWgybdo2sb7qB%2BJdmnEARBiXNfyIAWM30Y3H3R0S5YtOkzzY9Rxeb5i9sf5H4dtZGtyC%2FV78B98CzvfaYxBJUsUaG%2FZqCnf6kZzXWtkursC750FIWuTZsIURC19CdD%2B65DbssHkZEC0cIzTRNgDuJMTZYy3P8rFspOFgjIjSTheKXnay8wlxYKpX3vqtkK38lixbkfrIqWa4JETRBTI%2FO3pdgo6%2FTSX4V2bRGrYgqQj9uY3IyrRUSX%2Bgx4cl5DOPxpkJDTpXBVpMIbcM6Dj7Q3NOmD4qOB6rZZX24W9SlwJiY7bSTatL3ukl5ZVnBv8Y8wyzptttgUScBDaNsjXZoiHmHkIVGiB6iaC1GVTzIHgZhu7jwjxBUdoW0HHqyxAH5gg0inx3xVX2RrmWhRtA%2B9dIGA0WtiP8EMhInnt2MTq%2BY21Mw6ojBvwY6pgH8V%2Bf2VOB9tioIswJugaBj%2Fj9SYgeiBFmwlOg0qXbie3lk%2B2ImVoecMcfg%2Bdownb1snpCHWJqEWQNo24q9BOmfwhbflFA4Su89V1dDwmXpWdPwbBQNPgojMyuQuuh7QFB%2Bnoi6XcvBJbGdP8nopahMqc5IpCQEThy6uckgrI0OMzzAUbeWoRusNk6s3T2ebsTPGp5%2FY73wcG4Clw5As70ZGX9heqye&X-Amz-Signature=ea0d824ec86876db5b8c5ba2849b6486b088ab32c64fd3b55587d70bf47a2da5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBOZR45I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZnyaYCiv4lbW6yDTZJ5rOe1ExF0VQ3ofX0o5kbhj7UAiBsP40HhdJUDhJerLdFOZwmimwQk7b5553JTNaus%2FleEyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMFfIPnFGrgGAeGXBJKtwDWBeElNCr4ezzMm%2F8UdvVNzcHfwOtKmgS9a3LCBf1yLZ1wettvopEloEtHbgnTb1ODtZI1E0rSr7AVzZLwotfDroHMCNqfkVSZHLuDMyfkhABY09c2gqUfkJt6s2OnOmvEhGgX7Y3Sx8NqINF9wKcIFKwmAyZohXRCALI%2Bycs7Xq%2Fk41Py9Je92RDEbJwlx2BhwOezeYwLZqSWgybdo2sb7qB%2BJdmnEARBiXNfyIAWM30Y3H3R0S5YtOkzzY9Rxeb5i9sf5H4dtZGtyC%2FV78B98CzvfaYxBJUsUaG%2FZqCnf6kZzXWtkursC750FIWuTZsIURC19CdD%2B65DbssHkZEC0cIzTRNgDuJMTZYy3P8rFspOFgjIjSTheKXnay8wlxYKpX3vqtkK38lixbkfrIqWa4JETRBTI%2FO3pdgo6%2FTSX4V2bRGrYgqQj9uY3IyrRUSX%2Bgx4cl5DOPxpkJDTpXBVpMIbcM6Dj7Q3NOmD4qOB6rZZX24W9SlwJiY7bSTatL3ukl5ZVnBv8Y8wyzptttgUScBDaNsjXZoiHmHkIVGiB6iaC1GVTzIHgZhu7jwjxBUdoW0HHqyxAH5gg0inx3xVX2RrmWhRtA%2B9dIGA0WtiP8EMhInnt2MTq%2BY21Mw6ojBvwY6pgH8V%2Bf2VOB9tioIswJugaBj%2Fj9SYgeiBFmwlOg0qXbie3lk%2B2ImVoecMcfg%2Bdownb1snpCHWJqEWQNo24q9BOmfwhbflFA4Su89V1dDwmXpWdPwbBQNPgojMyuQuuh7QFB%2Bnoi6XcvBJbGdP8nopahMqc5IpCQEThy6uckgrI0OMzzAUbeWoRusNk6s3T2ebsTPGp5%2FY73wcG4Clw5As70ZGX9heqye&X-Amz-Signature=4a66f4ae4fdc8aea593731f98af1aea5d82d6aa66791a79da120ccec7e83aaee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBOZR45I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZnyaYCiv4lbW6yDTZJ5rOe1ExF0VQ3ofX0o5kbhj7UAiBsP40HhdJUDhJerLdFOZwmimwQk7b5553JTNaus%2FleEyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMFfIPnFGrgGAeGXBJKtwDWBeElNCr4ezzMm%2F8UdvVNzcHfwOtKmgS9a3LCBf1yLZ1wettvopEloEtHbgnTb1ODtZI1E0rSr7AVzZLwotfDroHMCNqfkVSZHLuDMyfkhABY09c2gqUfkJt6s2OnOmvEhGgX7Y3Sx8NqINF9wKcIFKwmAyZohXRCALI%2Bycs7Xq%2Fk41Py9Je92RDEbJwlx2BhwOezeYwLZqSWgybdo2sb7qB%2BJdmnEARBiXNfyIAWM30Y3H3R0S5YtOkzzY9Rxeb5i9sf5H4dtZGtyC%2FV78B98CzvfaYxBJUsUaG%2FZqCnf6kZzXWtkursC750FIWuTZsIURC19CdD%2B65DbssHkZEC0cIzTRNgDuJMTZYy3P8rFspOFgjIjSTheKXnay8wlxYKpX3vqtkK38lixbkfrIqWa4JETRBTI%2FO3pdgo6%2FTSX4V2bRGrYgqQj9uY3IyrRUSX%2Bgx4cl5DOPxpkJDTpXBVpMIbcM6Dj7Q3NOmD4qOB6rZZX24W9SlwJiY7bSTatL3ukl5ZVnBv8Y8wyzptttgUScBDaNsjXZoiHmHkIVGiB6iaC1GVTzIHgZhu7jwjxBUdoW0HHqyxAH5gg0inx3xVX2RrmWhRtA%2B9dIGA0WtiP8EMhInnt2MTq%2BY21Mw6ojBvwY6pgH8V%2Bf2VOB9tioIswJugaBj%2Fj9SYgeiBFmwlOg0qXbie3lk%2B2ImVoecMcfg%2Bdownb1snpCHWJqEWQNo24q9BOmfwhbflFA4Su89V1dDwmXpWdPwbBQNPgojMyuQuuh7QFB%2Bnoi6XcvBJbGdP8nopahMqc5IpCQEThy6uckgrI0OMzzAUbeWoRusNk6s3T2ebsTPGp5%2FY73wcG4Clw5As70ZGX9heqye&X-Amz-Signature=8f815b3711d1d9b2a73dc351bffca63f1e829dbacec7d91607bef94f9eebf56b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBOZR45I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZnyaYCiv4lbW6yDTZJ5rOe1ExF0VQ3ofX0o5kbhj7UAiBsP40HhdJUDhJerLdFOZwmimwQk7b5553JTNaus%2FleEyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMFfIPnFGrgGAeGXBJKtwDWBeElNCr4ezzMm%2F8UdvVNzcHfwOtKmgS9a3LCBf1yLZ1wettvopEloEtHbgnTb1ODtZI1E0rSr7AVzZLwotfDroHMCNqfkVSZHLuDMyfkhABY09c2gqUfkJt6s2OnOmvEhGgX7Y3Sx8NqINF9wKcIFKwmAyZohXRCALI%2Bycs7Xq%2Fk41Py9Je92RDEbJwlx2BhwOezeYwLZqSWgybdo2sb7qB%2BJdmnEARBiXNfyIAWM30Y3H3R0S5YtOkzzY9Rxeb5i9sf5H4dtZGtyC%2FV78B98CzvfaYxBJUsUaG%2FZqCnf6kZzXWtkursC750FIWuTZsIURC19CdD%2B65DbssHkZEC0cIzTRNgDuJMTZYy3P8rFspOFgjIjSTheKXnay8wlxYKpX3vqtkK38lixbkfrIqWa4JETRBTI%2FO3pdgo6%2FTSX4V2bRGrYgqQj9uY3IyrRUSX%2Bgx4cl5DOPxpkJDTpXBVpMIbcM6Dj7Q3NOmD4qOB6rZZX24W9SlwJiY7bSTatL3ukl5ZVnBv8Y8wyzptttgUScBDaNsjXZoiHmHkIVGiB6iaC1GVTzIHgZhu7jwjxBUdoW0HHqyxAH5gg0inx3xVX2RrmWhRtA%2B9dIGA0WtiP8EMhInnt2MTq%2BY21Mw6ojBvwY6pgH8V%2Bf2VOB9tioIswJugaBj%2Fj9SYgeiBFmwlOg0qXbie3lk%2B2ImVoecMcfg%2Bdownb1snpCHWJqEWQNo24q9BOmfwhbflFA4Su89V1dDwmXpWdPwbBQNPgojMyuQuuh7QFB%2Bnoi6XcvBJbGdP8nopahMqc5IpCQEThy6uckgrI0OMzzAUbeWoRusNk6s3T2ebsTPGp5%2FY73wcG4Clw5As70ZGX9heqye&X-Amz-Signature=c9db9ae13eebed08bf9dc77923b1cd8060c222af5f09a3486d8a054ee75c17d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBOZR45I%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZnyaYCiv4lbW6yDTZJ5rOe1ExF0VQ3ofX0o5kbhj7UAiBsP40HhdJUDhJerLdFOZwmimwQk7b5553JTNaus%2FleEyr%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMFfIPnFGrgGAeGXBJKtwDWBeElNCr4ezzMm%2F8UdvVNzcHfwOtKmgS9a3LCBf1yLZ1wettvopEloEtHbgnTb1ODtZI1E0rSr7AVzZLwotfDroHMCNqfkVSZHLuDMyfkhABY09c2gqUfkJt6s2OnOmvEhGgX7Y3Sx8NqINF9wKcIFKwmAyZohXRCALI%2Bycs7Xq%2Fk41Py9Je92RDEbJwlx2BhwOezeYwLZqSWgybdo2sb7qB%2BJdmnEARBiXNfyIAWM30Y3H3R0S5YtOkzzY9Rxeb5i9sf5H4dtZGtyC%2FV78B98CzvfaYxBJUsUaG%2FZqCnf6kZzXWtkursC750FIWuTZsIURC19CdD%2B65DbssHkZEC0cIzTRNgDuJMTZYy3P8rFspOFgjIjSTheKXnay8wlxYKpX3vqtkK38lixbkfrIqWa4JETRBTI%2FO3pdgo6%2FTSX4V2bRGrYgqQj9uY3IyrRUSX%2Bgx4cl5DOPxpkJDTpXBVpMIbcM6Dj7Q3NOmD4qOB6rZZX24W9SlwJiY7bSTatL3ukl5ZVnBv8Y8wyzptttgUScBDaNsjXZoiHmHkIVGiB6iaC1GVTzIHgZhu7jwjxBUdoW0HHqyxAH5gg0inx3xVX2RrmWhRtA%2B9dIGA0WtiP8EMhInnt2MTq%2BY21Mw6ojBvwY6pgH8V%2Bf2VOB9tioIswJugaBj%2Fj9SYgeiBFmwlOg0qXbie3lk%2B2ImVoecMcfg%2Bdownb1snpCHWJqEWQNo24q9BOmfwhbflFA4Su89V1dDwmXpWdPwbBQNPgojMyuQuuh7QFB%2Bnoi6XcvBJbGdP8nopahMqc5IpCQEThy6uckgrI0OMzzAUbeWoRusNk6s3T2ebsTPGp5%2FY73wcG4Clw5As70ZGX9heqye&X-Amz-Signature=fa9aa572a3f24a168de9dfa46c3433858103d413537567cde543b011ebd6b2d8&X-Amz-SignedHeaders=host&x-id=GetObject)
