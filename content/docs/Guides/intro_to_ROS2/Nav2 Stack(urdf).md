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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LNCY5GV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpPbXK7NfOv4tsxzN%2F9KOv%2B2naAAA34cOGGrJMM1RVvAiB%2Bzrpbohzg0Me08KulzedFlvQDjDPK0Ac5l0ky9AGHGyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMw3m0nNtfXd1pirJJKtwDyTsQLECKoGd%2BkTlGHrgrWZmm0XThKXFlDbZadRGjdiCLCflwmJqeKnSec%2B51HlRXk%2FhHcTR75A%2BRKwqrsdamnWvRcDMGQmC4duUz6DDhbSkENlJYVp5UdhwsuoLYZIWNteFwP4GeqYZRgrUJR0%2B4FJrM9I2qQA90zipO%2Fg3APNsarifz3koqMENROFrzeCaKblvoL2uvLUexcBMxhGro3nUhcrea5y%2BqbB1EMczd39pM%2Bl%2Ft%2BWnMHjO1VhDtDW8fpYvZeoywXiOnLyKYlXUA4P3XqFzvDlbTMfwEmVuUNqbYNmDTLsIB9mHmkKps06bqesD6pyyo88ZmxUkIcfUG5%2B%2BZMg3DRHXRXt3LFpHFlnA9jeDeATEvZ7zE%2Bf%2FR2DwIxMNIIGjcS6orLvEgoIX2LEUflBWyhGzp0ZOlC1cS%2Bd%2FQ2W1ZDtaXQSSQZnIHPWzbMXO1XJf5Rhj65oJrk7sXSGp1IsSJHmQJ%2BTe4bt8Is1K4QOWO0k0BZBqMwh%2BdWDt9du5%2BwpIKEALXFOZRLL4XBt8K6%2F1%2FAcez7rpZOm3v4ZPQM0xjSrHyA7Ng7hhQJbaAFHMpDrM5vNIxFj1V%2FlHxXP6tmKsS9PgNwIoy%2BR61SnZxf4z9OAtfme9cxZMwvbjNvwY6pgEe8NTA%2BUDEEdtf2StGzJqPiwzbuR4l3jqk5ZWiY5ceKUpLJPgqdjpo0YHyhOa5iMquVLIKy73VoeGoQ5wnvUmEeoz35mhw%2Fr2iARJf4hfV6V0iUWioQ3CVJrz15KChMIZ53DtpsXPxGt0In8MfCHjscEA7lBuSyTCLv%2FCCIWgIWXTBjwiBkkvvO%2B4Bmpreri8LphKTheSDF9sZnQRL%2BU39U%2BjGj85U&X-Amz-Signature=d30ecad769ed1ff7ff92ec477c57764dbd012ee53994f3d1a76736bd6f1b858b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LNCY5GV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpPbXK7NfOv4tsxzN%2F9KOv%2B2naAAA34cOGGrJMM1RVvAiB%2Bzrpbohzg0Me08KulzedFlvQDjDPK0Ac5l0ky9AGHGyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMw3m0nNtfXd1pirJJKtwDyTsQLECKoGd%2BkTlGHrgrWZmm0XThKXFlDbZadRGjdiCLCflwmJqeKnSec%2B51HlRXk%2FhHcTR75A%2BRKwqrsdamnWvRcDMGQmC4duUz6DDhbSkENlJYVp5UdhwsuoLYZIWNteFwP4GeqYZRgrUJR0%2B4FJrM9I2qQA90zipO%2Fg3APNsarifz3koqMENROFrzeCaKblvoL2uvLUexcBMxhGro3nUhcrea5y%2BqbB1EMczd39pM%2Bl%2Ft%2BWnMHjO1VhDtDW8fpYvZeoywXiOnLyKYlXUA4P3XqFzvDlbTMfwEmVuUNqbYNmDTLsIB9mHmkKps06bqesD6pyyo88ZmxUkIcfUG5%2B%2BZMg3DRHXRXt3LFpHFlnA9jeDeATEvZ7zE%2Bf%2FR2DwIxMNIIGjcS6orLvEgoIX2LEUflBWyhGzp0ZOlC1cS%2Bd%2FQ2W1ZDtaXQSSQZnIHPWzbMXO1XJf5Rhj65oJrk7sXSGp1IsSJHmQJ%2BTe4bt8Is1K4QOWO0k0BZBqMwh%2BdWDt9du5%2BwpIKEALXFOZRLL4XBt8K6%2F1%2FAcez7rpZOm3v4ZPQM0xjSrHyA7Ng7hhQJbaAFHMpDrM5vNIxFj1V%2FlHxXP6tmKsS9PgNwIoy%2BR61SnZxf4z9OAtfme9cxZMwvbjNvwY6pgEe8NTA%2BUDEEdtf2StGzJqPiwzbuR4l3jqk5ZWiY5ceKUpLJPgqdjpo0YHyhOa5iMquVLIKy73VoeGoQ5wnvUmEeoz35mhw%2Fr2iARJf4hfV6V0iUWioQ3CVJrz15KChMIZ53DtpsXPxGt0In8MfCHjscEA7lBuSyTCLv%2FCCIWgIWXTBjwiBkkvvO%2B4Bmpreri8LphKTheSDF9sZnQRL%2BU39U%2BjGj85U&X-Amz-Signature=e70d901a67e4e551dc597a3417155d12e3e2ec50228d2c575abc776b033ac88c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LNCY5GV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpPbXK7NfOv4tsxzN%2F9KOv%2B2naAAA34cOGGrJMM1RVvAiB%2Bzrpbohzg0Me08KulzedFlvQDjDPK0Ac5l0ky9AGHGyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMw3m0nNtfXd1pirJJKtwDyTsQLECKoGd%2BkTlGHrgrWZmm0XThKXFlDbZadRGjdiCLCflwmJqeKnSec%2B51HlRXk%2FhHcTR75A%2BRKwqrsdamnWvRcDMGQmC4duUz6DDhbSkENlJYVp5UdhwsuoLYZIWNteFwP4GeqYZRgrUJR0%2B4FJrM9I2qQA90zipO%2Fg3APNsarifz3koqMENROFrzeCaKblvoL2uvLUexcBMxhGro3nUhcrea5y%2BqbB1EMczd39pM%2Bl%2Ft%2BWnMHjO1VhDtDW8fpYvZeoywXiOnLyKYlXUA4P3XqFzvDlbTMfwEmVuUNqbYNmDTLsIB9mHmkKps06bqesD6pyyo88ZmxUkIcfUG5%2B%2BZMg3DRHXRXt3LFpHFlnA9jeDeATEvZ7zE%2Bf%2FR2DwIxMNIIGjcS6orLvEgoIX2LEUflBWyhGzp0ZOlC1cS%2Bd%2FQ2W1ZDtaXQSSQZnIHPWzbMXO1XJf5Rhj65oJrk7sXSGp1IsSJHmQJ%2BTe4bt8Is1K4QOWO0k0BZBqMwh%2BdWDt9du5%2BwpIKEALXFOZRLL4XBt8K6%2F1%2FAcez7rpZOm3v4ZPQM0xjSrHyA7Ng7hhQJbaAFHMpDrM5vNIxFj1V%2FlHxXP6tmKsS9PgNwIoy%2BR61SnZxf4z9OAtfme9cxZMwvbjNvwY6pgEe8NTA%2BUDEEdtf2StGzJqPiwzbuR4l3jqk5ZWiY5ceKUpLJPgqdjpo0YHyhOa5iMquVLIKy73VoeGoQ5wnvUmEeoz35mhw%2Fr2iARJf4hfV6V0iUWioQ3CVJrz15KChMIZ53DtpsXPxGt0In8MfCHjscEA7lBuSyTCLv%2FCCIWgIWXTBjwiBkkvvO%2B4Bmpreri8LphKTheSDF9sZnQRL%2BU39U%2BjGj85U&X-Amz-Signature=24882221c2bc4f3850857817b4db526b5c9b7371aee6c3cbcbe48b53a725b7d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LNCY5GV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpPbXK7NfOv4tsxzN%2F9KOv%2B2naAAA34cOGGrJMM1RVvAiB%2Bzrpbohzg0Me08KulzedFlvQDjDPK0Ac5l0ky9AGHGyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMw3m0nNtfXd1pirJJKtwDyTsQLECKoGd%2BkTlGHrgrWZmm0XThKXFlDbZadRGjdiCLCflwmJqeKnSec%2B51HlRXk%2FhHcTR75A%2BRKwqrsdamnWvRcDMGQmC4duUz6DDhbSkENlJYVp5UdhwsuoLYZIWNteFwP4GeqYZRgrUJR0%2B4FJrM9I2qQA90zipO%2Fg3APNsarifz3koqMENROFrzeCaKblvoL2uvLUexcBMxhGro3nUhcrea5y%2BqbB1EMczd39pM%2Bl%2Ft%2BWnMHjO1VhDtDW8fpYvZeoywXiOnLyKYlXUA4P3XqFzvDlbTMfwEmVuUNqbYNmDTLsIB9mHmkKps06bqesD6pyyo88ZmxUkIcfUG5%2B%2BZMg3DRHXRXt3LFpHFlnA9jeDeATEvZ7zE%2Bf%2FR2DwIxMNIIGjcS6orLvEgoIX2LEUflBWyhGzp0ZOlC1cS%2Bd%2FQ2W1ZDtaXQSSQZnIHPWzbMXO1XJf5Rhj65oJrk7sXSGp1IsSJHmQJ%2BTe4bt8Is1K4QOWO0k0BZBqMwh%2BdWDt9du5%2BwpIKEALXFOZRLL4XBt8K6%2F1%2FAcez7rpZOm3v4ZPQM0xjSrHyA7Ng7hhQJbaAFHMpDrM5vNIxFj1V%2FlHxXP6tmKsS9PgNwIoy%2BR61SnZxf4z9OAtfme9cxZMwvbjNvwY6pgEe8NTA%2BUDEEdtf2StGzJqPiwzbuR4l3jqk5ZWiY5ceKUpLJPgqdjpo0YHyhOa5iMquVLIKy73VoeGoQ5wnvUmEeoz35mhw%2Fr2iARJf4hfV6V0iUWioQ3CVJrz15KChMIZ53DtpsXPxGt0In8MfCHjscEA7lBuSyTCLv%2FCCIWgIWXTBjwiBkkvvO%2B4Bmpreri8LphKTheSDF9sZnQRL%2BU39U%2BjGj85U&X-Amz-Signature=3b8eda81f51e14649b44c1eed6c1dddf67c0fd89cc25aa73f49c45c2815083e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LNCY5GV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpPbXK7NfOv4tsxzN%2F9KOv%2B2naAAA34cOGGrJMM1RVvAiB%2Bzrpbohzg0Me08KulzedFlvQDjDPK0Ac5l0ky9AGHGyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMw3m0nNtfXd1pirJJKtwDyTsQLECKoGd%2BkTlGHrgrWZmm0XThKXFlDbZadRGjdiCLCflwmJqeKnSec%2B51HlRXk%2FhHcTR75A%2BRKwqrsdamnWvRcDMGQmC4duUz6DDhbSkENlJYVp5UdhwsuoLYZIWNteFwP4GeqYZRgrUJR0%2B4FJrM9I2qQA90zipO%2Fg3APNsarifz3koqMENROFrzeCaKblvoL2uvLUexcBMxhGro3nUhcrea5y%2BqbB1EMczd39pM%2Bl%2Ft%2BWnMHjO1VhDtDW8fpYvZeoywXiOnLyKYlXUA4P3XqFzvDlbTMfwEmVuUNqbYNmDTLsIB9mHmkKps06bqesD6pyyo88ZmxUkIcfUG5%2B%2BZMg3DRHXRXt3LFpHFlnA9jeDeATEvZ7zE%2Bf%2FR2DwIxMNIIGjcS6orLvEgoIX2LEUflBWyhGzp0ZOlC1cS%2Bd%2FQ2W1ZDtaXQSSQZnIHPWzbMXO1XJf5Rhj65oJrk7sXSGp1IsSJHmQJ%2BTe4bt8Is1K4QOWO0k0BZBqMwh%2BdWDt9du5%2BwpIKEALXFOZRLL4XBt8K6%2F1%2FAcez7rpZOm3v4ZPQM0xjSrHyA7Ng7hhQJbaAFHMpDrM5vNIxFj1V%2FlHxXP6tmKsS9PgNwIoy%2BR61SnZxf4z9OAtfme9cxZMwvbjNvwY6pgEe8NTA%2BUDEEdtf2StGzJqPiwzbuR4l3jqk5ZWiY5ceKUpLJPgqdjpo0YHyhOa5iMquVLIKy73VoeGoQ5wnvUmEeoz35mhw%2Fr2iARJf4hfV6V0iUWioQ3CVJrz15KChMIZ53DtpsXPxGt0In8MfCHjscEA7lBuSyTCLv%2FCCIWgIWXTBjwiBkkvvO%2B4Bmpreri8LphKTheSDF9sZnQRL%2BU39U%2BjGj85U&X-Amz-Signature=29cd2e597e0ac9b2dccf046045b7566ecccca7e9deb5e7954f2e46cbc6a17b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LNCY5GV%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHpPbXK7NfOv4tsxzN%2F9KOv%2B2naAAA34cOGGrJMM1RVvAiB%2Bzrpbohzg0Me08KulzedFlvQDjDPK0Ac5l0ky9AGHGyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMw3m0nNtfXd1pirJJKtwDyTsQLECKoGd%2BkTlGHrgrWZmm0XThKXFlDbZadRGjdiCLCflwmJqeKnSec%2B51HlRXk%2FhHcTR75A%2BRKwqrsdamnWvRcDMGQmC4duUz6DDhbSkENlJYVp5UdhwsuoLYZIWNteFwP4GeqYZRgrUJR0%2B4FJrM9I2qQA90zipO%2Fg3APNsarifz3koqMENROFrzeCaKblvoL2uvLUexcBMxhGro3nUhcrea5y%2BqbB1EMczd39pM%2Bl%2Ft%2BWnMHjO1VhDtDW8fpYvZeoywXiOnLyKYlXUA4P3XqFzvDlbTMfwEmVuUNqbYNmDTLsIB9mHmkKps06bqesD6pyyo88ZmxUkIcfUG5%2B%2BZMg3DRHXRXt3LFpHFlnA9jeDeATEvZ7zE%2Bf%2FR2DwIxMNIIGjcS6orLvEgoIX2LEUflBWyhGzp0ZOlC1cS%2Bd%2FQ2W1ZDtaXQSSQZnIHPWzbMXO1XJf5Rhj65oJrk7sXSGp1IsSJHmQJ%2BTe4bt8Is1K4QOWO0k0BZBqMwh%2BdWDt9du5%2BwpIKEALXFOZRLL4XBt8K6%2F1%2FAcez7rpZOm3v4ZPQM0xjSrHyA7Ng7hhQJbaAFHMpDrM5vNIxFj1V%2FlHxXP6tmKsS9PgNwIoy%2BR61SnZxf4z9OAtfme9cxZMwvbjNvwY6pgEe8NTA%2BUDEEdtf2StGzJqPiwzbuR4l3jqk5ZWiY5ceKUpLJPgqdjpo0YHyhOa5iMquVLIKy73VoeGoQ5wnvUmEeoz35mhw%2Fr2iARJf4hfV6V0iUWioQ3CVJrz15KChMIZ53DtpsXPxGt0In8MfCHjscEA7lBuSyTCLv%2FCCIWgIWXTBjwiBkkvvO%2B4Bmpreri8LphKTheSDF9sZnQRL%2BU39U%2BjGj85U&X-Amz-Signature=cc6876469999ece787583c097f911b32c15f6f8c82358678db382ab91d071190&X-Amz-SignedHeaders=host&x-id=GetObject)
