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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRKO4LA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC4qOJGjQuwgc65anDlgb1cgg2CzaSjVwhJxddBGytmRQIhAL%2BJzYqQz0vKvBuY80Y6EjMNMo8rXq4w9reHDZd%2BY7tuKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIB7bbGwAQ6FV9IB4q3AO6EwbYN076qTWCvqe198QMQmwkr9UqYe4f4%2BnxltfrVNnHaINNsJnRhgyzTj7retiPL%2FMKw0vHPUYEL5TTajIDoaaDvRTtZ%2F1CEdAxo3ngTObvOSCOOyGf65tb4mC7ZCXwhpZ3YKn44vyJUURYblF%2FUfsTLYR9EUe6owiSZMTAY0UuPod9VYvzJ%2Bp5J%2BO8C79QYZsC6Tbb4ZUO5ZISFhq%2BrIHpn1rpbIEDgaCT7q1q65ZuWlo742Ya2prt4bnXT5MEhm7djYIlEMZ%2FG8w%2Fq9iylvEkognvjYoLSDl1wL%2BPXoKPGEwYWH7570kAqujqgiyY75lj85ipB7YQQ3asrvawA9JIh3hGN2bM%2Fh6QpQKyBV8%2BXpQ%2BrbxBm3WsinMp4urJKzVT%2FFreLuxQb2rOmH2A9l4kEaUPDs2juHsIFl2sNenNS5t4qDsToNPT6z77%2BLNfjDSfsF9SxJLA%2FxgStj3dNDukz80Gj8t%2FNlasJ%2Fhhg0joVPrsIrBovJbNer6qOTDXSGNznSlrFetMolzjio6Mb8tcrQCI3NdFUtEZaGxw4wWFk7L2wAHJbnHpUyfVzkCmJ6WZbK4Oh15oZNG2GKMUEGr8bNyivrkU59cevKpqZmEPnMvQYmb2hgosYTCUuavCBjqkAYoPSaciVneLGpcHMY8blyMAwP1%2BFZxzHaRrns2Z0H5F8HmL9h%2B7FFe0bTjOa4jm4ss1P4uOwb0PDKY1PNQGW3b2D1xGoX4Gt9%2BlcD3iuT5WANmUBiZFCuX6Chd%2BpWN4GwKnw6Vg9HM9S48VtJ3eBe0a3PhDWeCZHwck%2BS1RmxY5QSlpOmJWwUVNwxu2wkI3NOPJ6I%2FqjqiRH0c9oT33LMrTj7YY&X-Amz-Signature=dd1aaec03a49566de3036a066094338a556c19cdce8872b8f928c80aae6a686e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRKO4LA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC4qOJGjQuwgc65anDlgb1cgg2CzaSjVwhJxddBGytmRQIhAL%2BJzYqQz0vKvBuY80Y6EjMNMo8rXq4w9reHDZd%2BY7tuKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIB7bbGwAQ6FV9IB4q3AO6EwbYN076qTWCvqe198QMQmwkr9UqYe4f4%2BnxltfrVNnHaINNsJnRhgyzTj7retiPL%2FMKw0vHPUYEL5TTajIDoaaDvRTtZ%2F1CEdAxo3ngTObvOSCOOyGf65tb4mC7ZCXwhpZ3YKn44vyJUURYblF%2FUfsTLYR9EUe6owiSZMTAY0UuPod9VYvzJ%2Bp5J%2BO8C79QYZsC6Tbb4ZUO5ZISFhq%2BrIHpn1rpbIEDgaCT7q1q65ZuWlo742Ya2prt4bnXT5MEhm7djYIlEMZ%2FG8w%2Fq9iylvEkognvjYoLSDl1wL%2BPXoKPGEwYWH7570kAqujqgiyY75lj85ipB7YQQ3asrvawA9JIh3hGN2bM%2Fh6QpQKyBV8%2BXpQ%2BrbxBm3WsinMp4urJKzVT%2FFreLuxQb2rOmH2A9l4kEaUPDs2juHsIFl2sNenNS5t4qDsToNPT6z77%2BLNfjDSfsF9SxJLA%2FxgStj3dNDukz80Gj8t%2FNlasJ%2Fhhg0joVPrsIrBovJbNer6qOTDXSGNznSlrFetMolzjio6Mb8tcrQCI3NdFUtEZaGxw4wWFk7L2wAHJbnHpUyfVzkCmJ6WZbK4Oh15oZNG2GKMUEGr8bNyivrkU59cevKpqZmEPnMvQYmb2hgosYTCUuavCBjqkAYoPSaciVneLGpcHMY8blyMAwP1%2BFZxzHaRrns2Z0H5F8HmL9h%2B7FFe0bTjOa4jm4ss1P4uOwb0PDKY1PNQGW3b2D1xGoX4Gt9%2BlcD3iuT5WANmUBiZFCuX6Chd%2BpWN4GwKnw6Vg9HM9S48VtJ3eBe0a3PhDWeCZHwck%2BS1RmxY5QSlpOmJWwUVNwxu2wkI3NOPJ6I%2FqjqiRH0c9oT33LMrTj7YY&X-Amz-Signature=dfc7c16c6c37a676672b618d1bf1f44a393166be2e2bf7a77b525a4a02d6fde9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRKO4LA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC4qOJGjQuwgc65anDlgb1cgg2CzaSjVwhJxddBGytmRQIhAL%2BJzYqQz0vKvBuY80Y6EjMNMo8rXq4w9reHDZd%2BY7tuKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIB7bbGwAQ6FV9IB4q3AO6EwbYN076qTWCvqe198QMQmwkr9UqYe4f4%2BnxltfrVNnHaINNsJnRhgyzTj7retiPL%2FMKw0vHPUYEL5TTajIDoaaDvRTtZ%2F1CEdAxo3ngTObvOSCOOyGf65tb4mC7ZCXwhpZ3YKn44vyJUURYblF%2FUfsTLYR9EUe6owiSZMTAY0UuPod9VYvzJ%2Bp5J%2BO8C79QYZsC6Tbb4ZUO5ZISFhq%2BrIHpn1rpbIEDgaCT7q1q65ZuWlo742Ya2prt4bnXT5MEhm7djYIlEMZ%2FG8w%2Fq9iylvEkognvjYoLSDl1wL%2BPXoKPGEwYWH7570kAqujqgiyY75lj85ipB7YQQ3asrvawA9JIh3hGN2bM%2Fh6QpQKyBV8%2BXpQ%2BrbxBm3WsinMp4urJKzVT%2FFreLuxQb2rOmH2A9l4kEaUPDs2juHsIFl2sNenNS5t4qDsToNPT6z77%2BLNfjDSfsF9SxJLA%2FxgStj3dNDukz80Gj8t%2FNlasJ%2Fhhg0joVPrsIrBovJbNer6qOTDXSGNznSlrFetMolzjio6Mb8tcrQCI3NdFUtEZaGxw4wWFk7L2wAHJbnHpUyfVzkCmJ6WZbK4Oh15oZNG2GKMUEGr8bNyivrkU59cevKpqZmEPnMvQYmb2hgosYTCUuavCBjqkAYoPSaciVneLGpcHMY8blyMAwP1%2BFZxzHaRrns2Z0H5F8HmL9h%2B7FFe0bTjOa4jm4ss1P4uOwb0PDKY1PNQGW3b2D1xGoX4Gt9%2BlcD3iuT5WANmUBiZFCuX6Chd%2BpWN4GwKnw6Vg9HM9S48VtJ3eBe0a3PhDWeCZHwck%2BS1RmxY5QSlpOmJWwUVNwxu2wkI3NOPJ6I%2FqjqiRH0c9oT33LMrTj7YY&X-Amz-Signature=1708a7c9ea96453cb5264fe2ada699db4288d80816e900f2a1b34464d0025cd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRKO4LA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC4qOJGjQuwgc65anDlgb1cgg2CzaSjVwhJxddBGytmRQIhAL%2BJzYqQz0vKvBuY80Y6EjMNMo8rXq4w9reHDZd%2BY7tuKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIB7bbGwAQ6FV9IB4q3AO6EwbYN076qTWCvqe198QMQmwkr9UqYe4f4%2BnxltfrVNnHaINNsJnRhgyzTj7retiPL%2FMKw0vHPUYEL5TTajIDoaaDvRTtZ%2F1CEdAxo3ngTObvOSCOOyGf65tb4mC7ZCXwhpZ3YKn44vyJUURYblF%2FUfsTLYR9EUe6owiSZMTAY0UuPod9VYvzJ%2Bp5J%2BO8C79QYZsC6Tbb4ZUO5ZISFhq%2BrIHpn1rpbIEDgaCT7q1q65ZuWlo742Ya2prt4bnXT5MEhm7djYIlEMZ%2FG8w%2Fq9iylvEkognvjYoLSDl1wL%2BPXoKPGEwYWH7570kAqujqgiyY75lj85ipB7YQQ3asrvawA9JIh3hGN2bM%2Fh6QpQKyBV8%2BXpQ%2BrbxBm3WsinMp4urJKzVT%2FFreLuxQb2rOmH2A9l4kEaUPDs2juHsIFl2sNenNS5t4qDsToNPT6z77%2BLNfjDSfsF9SxJLA%2FxgStj3dNDukz80Gj8t%2FNlasJ%2Fhhg0joVPrsIrBovJbNer6qOTDXSGNznSlrFetMolzjio6Mb8tcrQCI3NdFUtEZaGxw4wWFk7L2wAHJbnHpUyfVzkCmJ6WZbK4Oh15oZNG2GKMUEGr8bNyivrkU59cevKpqZmEPnMvQYmb2hgosYTCUuavCBjqkAYoPSaciVneLGpcHMY8blyMAwP1%2BFZxzHaRrns2Z0H5F8HmL9h%2B7FFe0bTjOa4jm4ss1P4uOwb0PDKY1PNQGW3b2D1xGoX4Gt9%2BlcD3iuT5WANmUBiZFCuX6Chd%2BpWN4GwKnw6Vg9HM9S48VtJ3eBe0a3PhDWeCZHwck%2BS1RmxY5QSlpOmJWwUVNwxu2wkI3NOPJ6I%2FqjqiRH0c9oT33LMrTj7YY&X-Amz-Signature=2e68301e979be8fa240535b42d186cefe47e74ccec8b808b0f765c0c1c12ca99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRKO4LA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC4qOJGjQuwgc65anDlgb1cgg2CzaSjVwhJxddBGytmRQIhAL%2BJzYqQz0vKvBuY80Y6EjMNMo8rXq4w9reHDZd%2BY7tuKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIB7bbGwAQ6FV9IB4q3AO6EwbYN076qTWCvqe198QMQmwkr9UqYe4f4%2BnxltfrVNnHaINNsJnRhgyzTj7retiPL%2FMKw0vHPUYEL5TTajIDoaaDvRTtZ%2F1CEdAxo3ngTObvOSCOOyGf65tb4mC7ZCXwhpZ3YKn44vyJUURYblF%2FUfsTLYR9EUe6owiSZMTAY0UuPod9VYvzJ%2Bp5J%2BO8C79QYZsC6Tbb4ZUO5ZISFhq%2BrIHpn1rpbIEDgaCT7q1q65ZuWlo742Ya2prt4bnXT5MEhm7djYIlEMZ%2FG8w%2Fq9iylvEkognvjYoLSDl1wL%2BPXoKPGEwYWH7570kAqujqgiyY75lj85ipB7YQQ3asrvawA9JIh3hGN2bM%2Fh6QpQKyBV8%2BXpQ%2BrbxBm3WsinMp4urJKzVT%2FFreLuxQb2rOmH2A9l4kEaUPDs2juHsIFl2sNenNS5t4qDsToNPT6z77%2BLNfjDSfsF9SxJLA%2FxgStj3dNDukz80Gj8t%2FNlasJ%2Fhhg0joVPrsIrBovJbNer6qOTDXSGNznSlrFetMolzjio6Mb8tcrQCI3NdFUtEZaGxw4wWFk7L2wAHJbnHpUyfVzkCmJ6WZbK4Oh15oZNG2GKMUEGr8bNyivrkU59cevKpqZmEPnMvQYmb2hgosYTCUuavCBjqkAYoPSaciVneLGpcHMY8blyMAwP1%2BFZxzHaRrns2Z0H5F8HmL9h%2B7FFe0bTjOa4jm4ss1P4uOwb0PDKY1PNQGW3b2D1xGoX4Gt9%2BlcD3iuT5WANmUBiZFCuX6Chd%2BpWN4GwKnw6Vg9HM9S48VtJ3eBe0a3PhDWeCZHwck%2BS1RmxY5QSlpOmJWwUVNwxu2wkI3NOPJ6I%2FqjqiRH0c9oT33LMrTj7YY&X-Amz-Signature=e403f3c1830d62c519dd6096350d72c1327b466884f0bb7964b530ebb3899221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JRKO4LA%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T150959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQC4qOJGjQuwgc65anDlgb1cgg2CzaSjVwhJxddBGytmRQIhAL%2BJzYqQz0vKvBuY80Y6EjMNMo8rXq4w9reHDZd%2BY7tuKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxIB7bbGwAQ6FV9IB4q3AO6EwbYN076qTWCvqe198QMQmwkr9UqYe4f4%2BnxltfrVNnHaINNsJnRhgyzTj7retiPL%2FMKw0vHPUYEL5TTajIDoaaDvRTtZ%2F1CEdAxo3ngTObvOSCOOyGf65tb4mC7ZCXwhpZ3YKn44vyJUURYblF%2FUfsTLYR9EUe6owiSZMTAY0UuPod9VYvzJ%2Bp5J%2BO8C79QYZsC6Tbb4ZUO5ZISFhq%2BrIHpn1rpbIEDgaCT7q1q65ZuWlo742Ya2prt4bnXT5MEhm7djYIlEMZ%2FG8w%2Fq9iylvEkognvjYoLSDl1wL%2BPXoKPGEwYWH7570kAqujqgiyY75lj85ipB7YQQ3asrvawA9JIh3hGN2bM%2Fh6QpQKyBV8%2BXpQ%2BrbxBm3WsinMp4urJKzVT%2FFreLuxQb2rOmH2A9l4kEaUPDs2juHsIFl2sNenNS5t4qDsToNPT6z77%2BLNfjDSfsF9SxJLA%2FxgStj3dNDukz80Gj8t%2FNlasJ%2Fhhg0joVPrsIrBovJbNer6qOTDXSGNznSlrFetMolzjio6Mb8tcrQCI3NdFUtEZaGxw4wWFk7L2wAHJbnHpUyfVzkCmJ6WZbK4Oh15oZNG2GKMUEGr8bNyivrkU59cevKpqZmEPnMvQYmb2hgosYTCUuavCBjqkAYoPSaciVneLGpcHMY8blyMAwP1%2BFZxzHaRrns2Z0H5F8HmL9h%2B7FFe0bTjOa4jm4ss1P4uOwb0PDKY1PNQGW3b2D1xGoX4Gt9%2BlcD3iuT5WANmUBiZFCuX6Chd%2BpWN4GwKnw6Vg9HM9S48VtJ3eBe0a3PhDWeCZHwck%2BS1RmxY5QSlpOmJWwUVNwxu2wkI3NOPJ6I%2FqjqiRH0c9oT33LMrTj7YY&X-Amz-Signature=fce6fbb0490270773b859435d56bf6b134d80bb09986090bd12db17b1ee9b59c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
