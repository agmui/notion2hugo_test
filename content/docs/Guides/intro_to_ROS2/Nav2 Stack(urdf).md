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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B7CRDI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIE8oKLwoNXCMUet4DaYcUbeUGxjTf9uLohvfuvXFDhDXAiAuANwHQrRQ9VGFv%2BQJzk2iz56XPeNqNSjZhxDjBCGU%2BCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ8fgwEbldq00DKZ8KtwDLjmpJdnhzIriUyXJaX7Uo8TfwvYt7zS3uXHhfI%2FvBuYWSumZGFiYowx8uErfu8fnkTYkY3tfnCuUV%2BbVlSq2Tz2yaP8gJUJ16KL8Q9tQrEsdB%2BNJ27BLoB%2B%2FAAx1R%2BGaMFJL6vA44w%2BGlZjlTAgG67uzz91kxD7jLQTS35nxj0l9tNWptN4iPReb1F8cfT7H84AczV85P7f49%2BcntwqMf9Qy9FpkYtDEaqBcxAXJ0%2Bk%2BbL9w3KDV8y375EXHThrZd4LpKlomZT6i%2B7oWjXqrKNjI9hgAOLv6B1Mc%2FurBG2%2BN1EtHERImHcN9kBOhiPBRQ0OnpA3uVsTwkxySWHXfbsnU1qvcAh5sTe7kfdKElXKT6K%2FJ86enAZMOrzH7HHWjWxdaxpkMOSq5NRve5WPvMUQQ%2Bb2P0spsBUgFYLS%2BG27scgHpXttphaNveStXOcj2W99zUGlxJzl3kYRjnx%2FZnOi4rf2ZWnS78WgtyBRKTxp65eHLLjYdPQLy%2BBrDRJ625EYDyYsa%2F%2FqOYCljIXb8HYl7cFgG%2BzuSvGilnaTffoS6NKeFg6fnERk0Ahq9n%2BgLC6K5os%2BI7oVQC%2B1ysfBMzY5ockPmpHVM3h70Aycsmmb17YlOQpfZC1NQY28whLDwvwY6pgFzmEzUJI%2BCeEb%2BEgc%2Bm9gvgM4dF6NrCjlkg8Ft805SuQ7kqME5Ff04F6sQ4MBEBqq5%2FSSf80vWOga4OzmKgviZpc9c4LMl1%2BcHRdlWJ4TM8VqArtuT5LroK3aylc%2F3Y3v28fHx%2FD%2BfYgTMBlusVKzLH10OI%2FeNAV1hQ%2B8g6SHRmqjBKzIrFfjydeQhbK5Vl2OHSOG05GIt6%2FqyFBRZSZmn9KbPjafj&X-Amz-Signature=06f646cff98231a50c71190da13a0b8db2c334eabb5424cd5c69841c051a1e84&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B7CRDI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIE8oKLwoNXCMUet4DaYcUbeUGxjTf9uLohvfuvXFDhDXAiAuANwHQrRQ9VGFv%2BQJzk2iz56XPeNqNSjZhxDjBCGU%2BCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ8fgwEbldq00DKZ8KtwDLjmpJdnhzIriUyXJaX7Uo8TfwvYt7zS3uXHhfI%2FvBuYWSumZGFiYowx8uErfu8fnkTYkY3tfnCuUV%2BbVlSq2Tz2yaP8gJUJ16KL8Q9tQrEsdB%2BNJ27BLoB%2B%2FAAx1R%2BGaMFJL6vA44w%2BGlZjlTAgG67uzz91kxD7jLQTS35nxj0l9tNWptN4iPReb1F8cfT7H84AczV85P7f49%2BcntwqMf9Qy9FpkYtDEaqBcxAXJ0%2Bk%2BbL9w3KDV8y375EXHThrZd4LpKlomZT6i%2B7oWjXqrKNjI9hgAOLv6B1Mc%2FurBG2%2BN1EtHERImHcN9kBOhiPBRQ0OnpA3uVsTwkxySWHXfbsnU1qvcAh5sTe7kfdKElXKT6K%2FJ86enAZMOrzH7HHWjWxdaxpkMOSq5NRve5WPvMUQQ%2Bb2P0spsBUgFYLS%2BG27scgHpXttphaNveStXOcj2W99zUGlxJzl3kYRjnx%2FZnOi4rf2ZWnS78WgtyBRKTxp65eHLLjYdPQLy%2BBrDRJ625EYDyYsa%2F%2FqOYCljIXb8HYl7cFgG%2BzuSvGilnaTffoS6NKeFg6fnERk0Ahq9n%2BgLC6K5os%2BI7oVQC%2B1ysfBMzY5ockPmpHVM3h70Aycsmmb17YlOQpfZC1NQY28whLDwvwY6pgFzmEzUJI%2BCeEb%2BEgc%2Bm9gvgM4dF6NrCjlkg8Ft805SuQ7kqME5Ff04F6sQ4MBEBqq5%2FSSf80vWOga4OzmKgviZpc9c4LMl1%2BcHRdlWJ4TM8VqArtuT5LroK3aylc%2F3Y3v28fHx%2FD%2BfYgTMBlusVKzLH10OI%2FeNAV1hQ%2B8g6SHRmqjBKzIrFfjydeQhbK5Vl2OHSOG05GIt6%2FqyFBRZSZmn9KbPjafj&X-Amz-Signature=4343cf404efc856dc59200e96cda8c18ea86c7ff527130322799d07ff91f1e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B7CRDI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIE8oKLwoNXCMUet4DaYcUbeUGxjTf9uLohvfuvXFDhDXAiAuANwHQrRQ9VGFv%2BQJzk2iz56XPeNqNSjZhxDjBCGU%2BCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ8fgwEbldq00DKZ8KtwDLjmpJdnhzIriUyXJaX7Uo8TfwvYt7zS3uXHhfI%2FvBuYWSumZGFiYowx8uErfu8fnkTYkY3tfnCuUV%2BbVlSq2Tz2yaP8gJUJ16KL8Q9tQrEsdB%2BNJ27BLoB%2B%2FAAx1R%2BGaMFJL6vA44w%2BGlZjlTAgG67uzz91kxD7jLQTS35nxj0l9tNWptN4iPReb1F8cfT7H84AczV85P7f49%2BcntwqMf9Qy9FpkYtDEaqBcxAXJ0%2Bk%2BbL9w3KDV8y375EXHThrZd4LpKlomZT6i%2B7oWjXqrKNjI9hgAOLv6B1Mc%2FurBG2%2BN1EtHERImHcN9kBOhiPBRQ0OnpA3uVsTwkxySWHXfbsnU1qvcAh5sTe7kfdKElXKT6K%2FJ86enAZMOrzH7HHWjWxdaxpkMOSq5NRve5WPvMUQQ%2Bb2P0spsBUgFYLS%2BG27scgHpXttphaNveStXOcj2W99zUGlxJzl3kYRjnx%2FZnOi4rf2ZWnS78WgtyBRKTxp65eHLLjYdPQLy%2BBrDRJ625EYDyYsa%2F%2FqOYCljIXb8HYl7cFgG%2BzuSvGilnaTffoS6NKeFg6fnERk0Ahq9n%2BgLC6K5os%2BI7oVQC%2B1ysfBMzY5ockPmpHVM3h70Aycsmmb17YlOQpfZC1NQY28whLDwvwY6pgFzmEzUJI%2BCeEb%2BEgc%2Bm9gvgM4dF6NrCjlkg8Ft805SuQ7kqME5Ff04F6sQ4MBEBqq5%2FSSf80vWOga4OzmKgviZpc9c4LMl1%2BcHRdlWJ4TM8VqArtuT5LroK3aylc%2F3Y3v28fHx%2FD%2BfYgTMBlusVKzLH10OI%2FeNAV1hQ%2B8g6SHRmqjBKzIrFfjydeQhbK5Vl2OHSOG05GIt6%2FqyFBRZSZmn9KbPjafj&X-Amz-Signature=8f315645922c562cbc6fcdc22a7c21d8d3dceb296c3fcac3469991b6547ac515&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B7CRDI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIE8oKLwoNXCMUet4DaYcUbeUGxjTf9uLohvfuvXFDhDXAiAuANwHQrRQ9VGFv%2BQJzk2iz56XPeNqNSjZhxDjBCGU%2BCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ8fgwEbldq00DKZ8KtwDLjmpJdnhzIriUyXJaX7Uo8TfwvYt7zS3uXHhfI%2FvBuYWSumZGFiYowx8uErfu8fnkTYkY3tfnCuUV%2BbVlSq2Tz2yaP8gJUJ16KL8Q9tQrEsdB%2BNJ27BLoB%2B%2FAAx1R%2BGaMFJL6vA44w%2BGlZjlTAgG67uzz91kxD7jLQTS35nxj0l9tNWptN4iPReb1F8cfT7H84AczV85P7f49%2BcntwqMf9Qy9FpkYtDEaqBcxAXJ0%2Bk%2BbL9w3KDV8y375EXHThrZd4LpKlomZT6i%2B7oWjXqrKNjI9hgAOLv6B1Mc%2FurBG2%2BN1EtHERImHcN9kBOhiPBRQ0OnpA3uVsTwkxySWHXfbsnU1qvcAh5sTe7kfdKElXKT6K%2FJ86enAZMOrzH7HHWjWxdaxpkMOSq5NRve5WPvMUQQ%2Bb2P0spsBUgFYLS%2BG27scgHpXttphaNveStXOcj2W99zUGlxJzl3kYRjnx%2FZnOi4rf2ZWnS78WgtyBRKTxp65eHLLjYdPQLy%2BBrDRJ625EYDyYsa%2F%2FqOYCljIXb8HYl7cFgG%2BzuSvGilnaTffoS6NKeFg6fnERk0Ahq9n%2BgLC6K5os%2BI7oVQC%2B1ysfBMzY5ockPmpHVM3h70Aycsmmb17YlOQpfZC1NQY28whLDwvwY6pgFzmEzUJI%2BCeEb%2BEgc%2Bm9gvgM4dF6NrCjlkg8Ft805SuQ7kqME5Ff04F6sQ4MBEBqq5%2FSSf80vWOga4OzmKgviZpc9c4LMl1%2BcHRdlWJ4TM8VqArtuT5LroK3aylc%2F3Y3v28fHx%2FD%2BfYgTMBlusVKzLH10OI%2FeNAV1hQ%2B8g6SHRmqjBKzIrFfjydeQhbK5Vl2OHSOG05GIt6%2FqyFBRZSZmn9KbPjafj&X-Amz-Signature=58fa568b065604366e618be45aeeb18d1eefd88da0c9dde8867ba2863f95a77f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B7CRDI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIE8oKLwoNXCMUet4DaYcUbeUGxjTf9uLohvfuvXFDhDXAiAuANwHQrRQ9VGFv%2BQJzk2iz56XPeNqNSjZhxDjBCGU%2BCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ8fgwEbldq00DKZ8KtwDLjmpJdnhzIriUyXJaX7Uo8TfwvYt7zS3uXHhfI%2FvBuYWSumZGFiYowx8uErfu8fnkTYkY3tfnCuUV%2BbVlSq2Tz2yaP8gJUJ16KL8Q9tQrEsdB%2BNJ27BLoB%2B%2FAAx1R%2BGaMFJL6vA44w%2BGlZjlTAgG67uzz91kxD7jLQTS35nxj0l9tNWptN4iPReb1F8cfT7H84AczV85P7f49%2BcntwqMf9Qy9FpkYtDEaqBcxAXJ0%2Bk%2BbL9w3KDV8y375EXHThrZd4LpKlomZT6i%2B7oWjXqrKNjI9hgAOLv6B1Mc%2FurBG2%2BN1EtHERImHcN9kBOhiPBRQ0OnpA3uVsTwkxySWHXfbsnU1qvcAh5sTe7kfdKElXKT6K%2FJ86enAZMOrzH7HHWjWxdaxpkMOSq5NRve5WPvMUQQ%2Bb2P0spsBUgFYLS%2BG27scgHpXttphaNveStXOcj2W99zUGlxJzl3kYRjnx%2FZnOi4rf2ZWnS78WgtyBRKTxp65eHLLjYdPQLy%2BBrDRJ625EYDyYsa%2F%2FqOYCljIXb8HYl7cFgG%2BzuSvGilnaTffoS6NKeFg6fnERk0Ahq9n%2BgLC6K5os%2BI7oVQC%2B1ysfBMzY5ockPmpHVM3h70Aycsmmb17YlOQpfZC1NQY28whLDwvwY6pgFzmEzUJI%2BCeEb%2BEgc%2Bm9gvgM4dF6NrCjlkg8Ft805SuQ7kqME5Ff04F6sQ4MBEBqq5%2FSSf80vWOga4OzmKgviZpc9c4LMl1%2BcHRdlWJ4TM8VqArtuT5LroK3aylc%2F3Y3v28fHx%2FD%2BfYgTMBlusVKzLH10OI%2FeNAV1hQ%2B8g6SHRmqjBKzIrFfjydeQhbK5Vl2OHSOG05GIt6%2FqyFBRZSZmn9KbPjafj&X-Amz-Signature=4adf22ab6f835bc72163f8a6b151b493f64d8bfd9ebb7a4edd8d3e0f15420d0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B7CRDI%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIE8oKLwoNXCMUet4DaYcUbeUGxjTf9uLohvfuvXFDhDXAiAuANwHQrRQ9VGFv%2BQJzk2iz56XPeNqNSjZhxDjBCGU%2BCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ8fgwEbldq00DKZ8KtwDLjmpJdnhzIriUyXJaX7Uo8TfwvYt7zS3uXHhfI%2FvBuYWSumZGFiYowx8uErfu8fnkTYkY3tfnCuUV%2BbVlSq2Tz2yaP8gJUJ16KL8Q9tQrEsdB%2BNJ27BLoB%2B%2FAAx1R%2BGaMFJL6vA44w%2BGlZjlTAgG67uzz91kxD7jLQTS35nxj0l9tNWptN4iPReb1F8cfT7H84AczV85P7f49%2BcntwqMf9Qy9FpkYtDEaqBcxAXJ0%2Bk%2BbL9w3KDV8y375EXHThrZd4LpKlomZT6i%2B7oWjXqrKNjI9hgAOLv6B1Mc%2FurBG2%2BN1EtHERImHcN9kBOhiPBRQ0OnpA3uVsTwkxySWHXfbsnU1qvcAh5sTe7kfdKElXKT6K%2FJ86enAZMOrzH7HHWjWxdaxpkMOSq5NRve5WPvMUQQ%2Bb2P0spsBUgFYLS%2BG27scgHpXttphaNveStXOcj2W99zUGlxJzl3kYRjnx%2FZnOi4rf2ZWnS78WgtyBRKTxp65eHLLjYdPQLy%2BBrDRJ625EYDyYsa%2F%2FqOYCljIXb8HYl7cFgG%2BzuSvGilnaTffoS6NKeFg6fnERk0Ahq9n%2BgLC6K5os%2BI7oVQC%2B1ysfBMzY5ockPmpHVM3h70Aycsmmb17YlOQpfZC1NQY28whLDwvwY6pgFzmEzUJI%2BCeEb%2BEgc%2Bm9gvgM4dF6NrCjlkg8Ft805SuQ7kqME5Ff04F6sQ4MBEBqq5%2FSSf80vWOga4OzmKgviZpc9c4LMl1%2BcHRdlWJ4TM8VqArtuT5LroK3aylc%2F3Y3v28fHx%2FD%2BfYgTMBlusVKzLH10OI%2FeNAV1hQ%2B8g6SHRmqjBKzIrFfjydeQhbK5Vl2OHSOG05GIt6%2FqyFBRZSZmn9KbPjafj&X-Amz-Signature=e4fdf30b32cd8287d6b53201e3cd8102a679422508e5318e27b9182519aa8edb&X-Amz-SignedHeaders=host&x-id=GetObject)
