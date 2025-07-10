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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624BTYRBD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQI75Cnauu3PfvpyCFXjtmXI6GmZ0quC3hHPm2kh8YJQIgUiWxJXnrHugZufaSdaEQt7yCVJfSFyD73nR0ksE0BXAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkw1Txa%2B8lkAQOY0ircA42UahrWx0v4PMiIXa%2BPRyQ1fj7l9xvsV4AhojV9TwwXRUiEWv1gG7EjDDk1l3N3sd0Je8qUw2NVJhX0MWM4IruObh%2BWG820cf3bTr2SxtjaAssV93AR8cj5GiOxHe%2FQdTsLPs1kCUMyfv7SpdQ4PfHBvAD7m37DnjLamJoEgKNoIvwv9af19owKKBRs52Yr2tw0gqgOc7GUzVKwMXM%2BmU1mX%2BejPAVNdCUh4fiCoILmq6%2BWtOm8XE3jlsMlC7lTvxwbEnXzwXy8bj2Uj2YMhetvyrDL9J6gMN4KAsHs3g1GhChZmfoFanEy4K5qOIr7EOfuusVVEPsrxjNFa5JazFZkcqVXzI8juqZ%2FPJvp8%2FPDu33ETqlj%2FmrBH3eLWa%2FzbbYjTlbw5mYYDSPYDKiQzPI9dAU64sy9Ys2RfwC3tlT1%2BAIoTUVwd%2Fch8Mr%2Btw12Qc2Qq%2BSM7ATbdZNwLxyK4Zk53hXFQAOogEmthPpZ4wrMwO88g%2Bi5sovZ0Kb117cXZUIMqWLpX2CmGJ8ukpARX2xarsWb7xJpQaw5qY8ZHpRFQ0ItJfgDvbjQ6sy86ujBwFr3%2Fyx%2Fhf5qhujlowVsM0gWd73h%2BMvrPC9TzdR3snc2eSUnKcKD1vk3mnIoMKXwu8MGOqUBvIgM4y1BwpBGu4xO4fHN0E0atbaqjPo3xa%2Bp%2FGqPyD6KEGQKTgTZQwbUeC5vzzAMuJYkpGIrlcWvCQtaa4x0DxU3gf9Brj4rUSHB8cZPBPBKDyZJd29pSspnO0%2F4EmgwkJZtW7GrjJqoOi2hLZ9lmQvShN44VrpdPpMjNqgeW9%2FkhTyldzPOW8YWKx0%2BbpSQqxeLTrgwj77daVyXSQTCFnKXb1Va&X-Amz-Signature=16c7820d2b1fae6bedb495b962f6ff1b9e44e39d2030bfa07740cf117b30a528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624BTYRBD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQI75Cnauu3PfvpyCFXjtmXI6GmZ0quC3hHPm2kh8YJQIgUiWxJXnrHugZufaSdaEQt7yCVJfSFyD73nR0ksE0BXAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkw1Txa%2B8lkAQOY0ircA42UahrWx0v4PMiIXa%2BPRyQ1fj7l9xvsV4AhojV9TwwXRUiEWv1gG7EjDDk1l3N3sd0Je8qUw2NVJhX0MWM4IruObh%2BWG820cf3bTr2SxtjaAssV93AR8cj5GiOxHe%2FQdTsLPs1kCUMyfv7SpdQ4PfHBvAD7m37DnjLamJoEgKNoIvwv9af19owKKBRs52Yr2tw0gqgOc7GUzVKwMXM%2BmU1mX%2BejPAVNdCUh4fiCoILmq6%2BWtOm8XE3jlsMlC7lTvxwbEnXzwXy8bj2Uj2YMhetvyrDL9J6gMN4KAsHs3g1GhChZmfoFanEy4K5qOIr7EOfuusVVEPsrxjNFa5JazFZkcqVXzI8juqZ%2FPJvp8%2FPDu33ETqlj%2FmrBH3eLWa%2FzbbYjTlbw5mYYDSPYDKiQzPI9dAU64sy9Ys2RfwC3tlT1%2BAIoTUVwd%2Fch8Mr%2Btw12Qc2Qq%2BSM7ATbdZNwLxyK4Zk53hXFQAOogEmthPpZ4wrMwO88g%2Bi5sovZ0Kb117cXZUIMqWLpX2CmGJ8ukpARX2xarsWb7xJpQaw5qY8ZHpRFQ0ItJfgDvbjQ6sy86ujBwFr3%2Fyx%2Fhf5qhujlowVsM0gWd73h%2BMvrPC9TzdR3snc2eSUnKcKD1vk3mnIoMKXwu8MGOqUBvIgM4y1BwpBGu4xO4fHN0E0atbaqjPo3xa%2Bp%2FGqPyD6KEGQKTgTZQwbUeC5vzzAMuJYkpGIrlcWvCQtaa4x0DxU3gf9Brj4rUSHB8cZPBPBKDyZJd29pSspnO0%2F4EmgwkJZtW7GrjJqoOi2hLZ9lmQvShN44VrpdPpMjNqgeW9%2FkhTyldzPOW8YWKx0%2BbpSQqxeLTrgwj77daVyXSQTCFnKXb1Va&X-Amz-Signature=163dc708a428b0a020712f6d126d84a08261dc0f6f26e91f8b2952b7225a3381&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624BTYRBD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQI75Cnauu3PfvpyCFXjtmXI6GmZ0quC3hHPm2kh8YJQIgUiWxJXnrHugZufaSdaEQt7yCVJfSFyD73nR0ksE0BXAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkw1Txa%2B8lkAQOY0ircA42UahrWx0v4PMiIXa%2BPRyQ1fj7l9xvsV4AhojV9TwwXRUiEWv1gG7EjDDk1l3N3sd0Je8qUw2NVJhX0MWM4IruObh%2BWG820cf3bTr2SxtjaAssV93AR8cj5GiOxHe%2FQdTsLPs1kCUMyfv7SpdQ4PfHBvAD7m37DnjLamJoEgKNoIvwv9af19owKKBRs52Yr2tw0gqgOc7GUzVKwMXM%2BmU1mX%2BejPAVNdCUh4fiCoILmq6%2BWtOm8XE3jlsMlC7lTvxwbEnXzwXy8bj2Uj2YMhetvyrDL9J6gMN4KAsHs3g1GhChZmfoFanEy4K5qOIr7EOfuusVVEPsrxjNFa5JazFZkcqVXzI8juqZ%2FPJvp8%2FPDu33ETqlj%2FmrBH3eLWa%2FzbbYjTlbw5mYYDSPYDKiQzPI9dAU64sy9Ys2RfwC3tlT1%2BAIoTUVwd%2Fch8Mr%2Btw12Qc2Qq%2BSM7ATbdZNwLxyK4Zk53hXFQAOogEmthPpZ4wrMwO88g%2Bi5sovZ0Kb117cXZUIMqWLpX2CmGJ8ukpARX2xarsWb7xJpQaw5qY8ZHpRFQ0ItJfgDvbjQ6sy86ujBwFr3%2Fyx%2Fhf5qhujlowVsM0gWd73h%2BMvrPC9TzdR3snc2eSUnKcKD1vk3mnIoMKXwu8MGOqUBvIgM4y1BwpBGu4xO4fHN0E0atbaqjPo3xa%2Bp%2FGqPyD6KEGQKTgTZQwbUeC5vzzAMuJYkpGIrlcWvCQtaa4x0DxU3gf9Brj4rUSHB8cZPBPBKDyZJd29pSspnO0%2F4EmgwkJZtW7GrjJqoOi2hLZ9lmQvShN44VrpdPpMjNqgeW9%2FkhTyldzPOW8YWKx0%2BbpSQqxeLTrgwj77daVyXSQTCFnKXb1Va&X-Amz-Signature=b973a6a6be252be331957a765d8e095f37c9f11063c0ab60950f1ac346f4f0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624BTYRBD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQI75Cnauu3PfvpyCFXjtmXI6GmZ0quC3hHPm2kh8YJQIgUiWxJXnrHugZufaSdaEQt7yCVJfSFyD73nR0ksE0BXAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkw1Txa%2B8lkAQOY0ircA42UahrWx0v4PMiIXa%2BPRyQ1fj7l9xvsV4AhojV9TwwXRUiEWv1gG7EjDDk1l3N3sd0Je8qUw2NVJhX0MWM4IruObh%2BWG820cf3bTr2SxtjaAssV93AR8cj5GiOxHe%2FQdTsLPs1kCUMyfv7SpdQ4PfHBvAD7m37DnjLamJoEgKNoIvwv9af19owKKBRs52Yr2tw0gqgOc7GUzVKwMXM%2BmU1mX%2BejPAVNdCUh4fiCoILmq6%2BWtOm8XE3jlsMlC7lTvxwbEnXzwXy8bj2Uj2YMhetvyrDL9J6gMN4KAsHs3g1GhChZmfoFanEy4K5qOIr7EOfuusVVEPsrxjNFa5JazFZkcqVXzI8juqZ%2FPJvp8%2FPDu33ETqlj%2FmrBH3eLWa%2FzbbYjTlbw5mYYDSPYDKiQzPI9dAU64sy9Ys2RfwC3tlT1%2BAIoTUVwd%2Fch8Mr%2Btw12Qc2Qq%2BSM7ATbdZNwLxyK4Zk53hXFQAOogEmthPpZ4wrMwO88g%2Bi5sovZ0Kb117cXZUIMqWLpX2CmGJ8ukpARX2xarsWb7xJpQaw5qY8ZHpRFQ0ItJfgDvbjQ6sy86ujBwFr3%2Fyx%2Fhf5qhujlowVsM0gWd73h%2BMvrPC9TzdR3snc2eSUnKcKD1vk3mnIoMKXwu8MGOqUBvIgM4y1BwpBGu4xO4fHN0E0atbaqjPo3xa%2Bp%2FGqPyD6KEGQKTgTZQwbUeC5vzzAMuJYkpGIrlcWvCQtaa4x0DxU3gf9Brj4rUSHB8cZPBPBKDyZJd29pSspnO0%2F4EmgwkJZtW7GrjJqoOi2hLZ9lmQvShN44VrpdPpMjNqgeW9%2FkhTyldzPOW8YWKx0%2BbpSQqxeLTrgwj77daVyXSQTCFnKXb1Va&X-Amz-Signature=cbacf2a94edce1eb6906d4fa19407d7818bc00c240f1a4bea6c1c8101b8e0532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624BTYRBD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQI75Cnauu3PfvpyCFXjtmXI6GmZ0quC3hHPm2kh8YJQIgUiWxJXnrHugZufaSdaEQt7yCVJfSFyD73nR0ksE0BXAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkw1Txa%2B8lkAQOY0ircA42UahrWx0v4PMiIXa%2BPRyQ1fj7l9xvsV4AhojV9TwwXRUiEWv1gG7EjDDk1l3N3sd0Je8qUw2NVJhX0MWM4IruObh%2BWG820cf3bTr2SxtjaAssV93AR8cj5GiOxHe%2FQdTsLPs1kCUMyfv7SpdQ4PfHBvAD7m37DnjLamJoEgKNoIvwv9af19owKKBRs52Yr2tw0gqgOc7GUzVKwMXM%2BmU1mX%2BejPAVNdCUh4fiCoILmq6%2BWtOm8XE3jlsMlC7lTvxwbEnXzwXy8bj2Uj2YMhetvyrDL9J6gMN4KAsHs3g1GhChZmfoFanEy4K5qOIr7EOfuusVVEPsrxjNFa5JazFZkcqVXzI8juqZ%2FPJvp8%2FPDu33ETqlj%2FmrBH3eLWa%2FzbbYjTlbw5mYYDSPYDKiQzPI9dAU64sy9Ys2RfwC3tlT1%2BAIoTUVwd%2Fch8Mr%2Btw12Qc2Qq%2BSM7ATbdZNwLxyK4Zk53hXFQAOogEmthPpZ4wrMwO88g%2Bi5sovZ0Kb117cXZUIMqWLpX2CmGJ8ukpARX2xarsWb7xJpQaw5qY8ZHpRFQ0ItJfgDvbjQ6sy86ujBwFr3%2Fyx%2Fhf5qhujlowVsM0gWd73h%2BMvrPC9TzdR3snc2eSUnKcKD1vk3mnIoMKXwu8MGOqUBvIgM4y1BwpBGu4xO4fHN0E0atbaqjPo3xa%2Bp%2FGqPyD6KEGQKTgTZQwbUeC5vzzAMuJYkpGIrlcWvCQtaa4x0DxU3gf9Brj4rUSHB8cZPBPBKDyZJd29pSspnO0%2F4EmgwkJZtW7GrjJqoOi2hLZ9lmQvShN44VrpdPpMjNqgeW9%2FkhTyldzPOW8YWKx0%2BbpSQqxeLTrgwj77daVyXSQTCFnKXb1Va&X-Amz-Signature=d8b06c769356e3b366abb5b2730d6243d6462272e81942f18e40940d170a1a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624BTYRBD%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T004351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQI75Cnauu3PfvpyCFXjtmXI6GmZ0quC3hHPm2kh8YJQIgUiWxJXnrHugZufaSdaEQt7yCVJfSFyD73nR0ksE0BXAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkw1Txa%2B8lkAQOY0ircA42UahrWx0v4PMiIXa%2BPRyQ1fj7l9xvsV4AhojV9TwwXRUiEWv1gG7EjDDk1l3N3sd0Je8qUw2NVJhX0MWM4IruObh%2BWG820cf3bTr2SxtjaAssV93AR8cj5GiOxHe%2FQdTsLPs1kCUMyfv7SpdQ4PfHBvAD7m37DnjLamJoEgKNoIvwv9af19owKKBRs52Yr2tw0gqgOc7GUzVKwMXM%2BmU1mX%2BejPAVNdCUh4fiCoILmq6%2BWtOm8XE3jlsMlC7lTvxwbEnXzwXy8bj2Uj2YMhetvyrDL9J6gMN4KAsHs3g1GhChZmfoFanEy4K5qOIr7EOfuusVVEPsrxjNFa5JazFZkcqVXzI8juqZ%2FPJvp8%2FPDu33ETqlj%2FmrBH3eLWa%2FzbbYjTlbw5mYYDSPYDKiQzPI9dAU64sy9Ys2RfwC3tlT1%2BAIoTUVwd%2Fch8Mr%2Btw12Qc2Qq%2BSM7ATbdZNwLxyK4Zk53hXFQAOogEmthPpZ4wrMwO88g%2Bi5sovZ0Kb117cXZUIMqWLpX2CmGJ8ukpARX2xarsWb7xJpQaw5qY8ZHpRFQ0ItJfgDvbjQ6sy86ujBwFr3%2Fyx%2Fhf5qhujlowVsM0gWd73h%2BMvrPC9TzdR3snc2eSUnKcKD1vk3mnIoMKXwu8MGOqUBvIgM4y1BwpBGu4xO4fHN0E0atbaqjPo3xa%2Bp%2FGqPyD6KEGQKTgTZQwbUeC5vzzAMuJYkpGIrlcWvCQtaa4x0DxU3gf9Brj4rUSHB8cZPBPBKDyZJd29pSspnO0%2F4EmgwkJZtW7GrjJqoOi2hLZ9lmQvShN44VrpdPpMjNqgeW9%2FkhTyldzPOW8YWKx0%2BbpSQqxeLTrgwj77daVyXSQTCFnKXb1Va&X-Amz-Signature=05df07d211b5875c31d98dc51daacb60827b05f7b0666224df7a9f32457a4c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
