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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4SXFR3L%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHU57n25t%2Bgg8ys%2BmVGnjtzRB%2FaZd85Djlje5JhRuO9uAiA3Mwun068aihW0ZPNQYFeHUnKg71bNeSzxQoxz2AYyKiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyXxCrxtgRhQV0F4fKtwD2ObTR9exJApH6Bvih4gYHb6hR1jLnzQg3RlTqJNvkpvJdN3IOGsYi7U6kPO5qf6UBeLeWaYPLXjW44CnVCpMSlIsGMB5iL9rqVmBuwGEKNxRWiTmQRBbSNeVqn9YCzaWZd5iGz7k1KA6Q%2BcFVpIi6U%2BWw6%2B8Lxnw7wP7%2FnWvfBwWJ2%2F2SJwbSn8Bt%2BSkYOY4knbt2nS7mSFv7Uu6HPpcJzvUBNFE6mVmaOT%2BmlaeaGjMmQIlDJFDSHn3JeaVExGuRfMmLloHSjiXaRTBW%2FEC3Jl3g0vlknxjmAKoxlF9663XWLm4IGse64llLOyYxa3LhqQrBWw5t4nf8KFkSFHS7aQHijjG0VChxE%2FM1Btz%2B40x54lMZhbaO2nJ8l1v5Ze%2BvvdntDMY9g2QWNYZBsguxVVE2gM%2FZpGJs0Fopbq3CGcjBx5INHfq%2BGSy%2BpY%2FlyP3ewGT3ejJr0IMgommcIapj%2Ba6vw7PLR74SASG%2FOEHebVPY6OA29tnEMMC71hWpVc6THtFDYGpp5sObvK%2Bix9CuTul6aaUljE32cQLhxrg809lkEySiwQuoINTkI%2FzivdZjFjP0zyfxXHpY%2BP94QVp2qTg4SNEa8baH4jRmede%2BBeGc7VJY0ln2DxpB9Ew3q63vwY6pgE4P%2BKh%2BTdgRYi6vVsj5VqOLGk%2BUu30Zh3JSLd7fCYI1%2FhRrWOiuzwfOt7OEn8kTM%2FaHxCTCUZS8MIuaJnrZkB3BY3i4EDkLOIXVJoAu3QPYHPQG8sIfsHVM02hg9ahCZrFhjcOFtDepaJW1XPrdroBf34imgZwm0s9NfTwzEVTQg2fxNT1oJEMQJtzv8DFSTcY8bNwRdx8OnuqVCRvG2RqQC0XPhZY&X-Amz-Signature=4c413e8180dfc1959b54f02ed9b7fdd06d5c2922af5f48c2b9bd3e2b88caf644&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4SXFR3L%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHU57n25t%2Bgg8ys%2BmVGnjtzRB%2FaZd85Djlje5JhRuO9uAiA3Mwun068aihW0ZPNQYFeHUnKg71bNeSzxQoxz2AYyKiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyXxCrxtgRhQV0F4fKtwD2ObTR9exJApH6Bvih4gYHb6hR1jLnzQg3RlTqJNvkpvJdN3IOGsYi7U6kPO5qf6UBeLeWaYPLXjW44CnVCpMSlIsGMB5iL9rqVmBuwGEKNxRWiTmQRBbSNeVqn9YCzaWZd5iGz7k1KA6Q%2BcFVpIi6U%2BWw6%2B8Lxnw7wP7%2FnWvfBwWJ2%2F2SJwbSn8Bt%2BSkYOY4knbt2nS7mSFv7Uu6HPpcJzvUBNFE6mVmaOT%2BmlaeaGjMmQIlDJFDSHn3JeaVExGuRfMmLloHSjiXaRTBW%2FEC3Jl3g0vlknxjmAKoxlF9663XWLm4IGse64llLOyYxa3LhqQrBWw5t4nf8KFkSFHS7aQHijjG0VChxE%2FM1Btz%2B40x54lMZhbaO2nJ8l1v5Ze%2BvvdntDMY9g2QWNYZBsguxVVE2gM%2FZpGJs0Fopbq3CGcjBx5INHfq%2BGSy%2BpY%2FlyP3ewGT3ejJr0IMgommcIapj%2Ba6vw7PLR74SASG%2FOEHebVPY6OA29tnEMMC71hWpVc6THtFDYGpp5sObvK%2Bix9CuTul6aaUljE32cQLhxrg809lkEySiwQuoINTkI%2FzivdZjFjP0zyfxXHpY%2BP94QVp2qTg4SNEa8baH4jRmede%2BBeGc7VJY0ln2DxpB9Ew3q63vwY6pgE4P%2BKh%2BTdgRYi6vVsj5VqOLGk%2BUu30Zh3JSLd7fCYI1%2FhRrWOiuzwfOt7OEn8kTM%2FaHxCTCUZS8MIuaJnrZkB3BY3i4EDkLOIXVJoAu3QPYHPQG8sIfsHVM02hg9ahCZrFhjcOFtDepaJW1XPrdroBf34imgZwm0s9NfTwzEVTQg2fxNT1oJEMQJtzv8DFSTcY8bNwRdx8OnuqVCRvG2RqQC0XPhZY&X-Amz-Signature=10567486ba4676d87da8aec85f495df3d7754503309079fbf877d6c6dd7468b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4SXFR3L%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHU57n25t%2Bgg8ys%2BmVGnjtzRB%2FaZd85Djlje5JhRuO9uAiA3Mwun068aihW0ZPNQYFeHUnKg71bNeSzxQoxz2AYyKiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyXxCrxtgRhQV0F4fKtwD2ObTR9exJApH6Bvih4gYHb6hR1jLnzQg3RlTqJNvkpvJdN3IOGsYi7U6kPO5qf6UBeLeWaYPLXjW44CnVCpMSlIsGMB5iL9rqVmBuwGEKNxRWiTmQRBbSNeVqn9YCzaWZd5iGz7k1KA6Q%2BcFVpIi6U%2BWw6%2B8Lxnw7wP7%2FnWvfBwWJ2%2F2SJwbSn8Bt%2BSkYOY4knbt2nS7mSFv7Uu6HPpcJzvUBNFE6mVmaOT%2BmlaeaGjMmQIlDJFDSHn3JeaVExGuRfMmLloHSjiXaRTBW%2FEC3Jl3g0vlknxjmAKoxlF9663XWLm4IGse64llLOyYxa3LhqQrBWw5t4nf8KFkSFHS7aQHijjG0VChxE%2FM1Btz%2B40x54lMZhbaO2nJ8l1v5Ze%2BvvdntDMY9g2QWNYZBsguxVVE2gM%2FZpGJs0Fopbq3CGcjBx5INHfq%2BGSy%2BpY%2FlyP3ewGT3ejJr0IMgommcIapj%2Ba6vw7PLR74SASG%2FOEHebVPY6OA29tnEMMC71hWpVc6THtFDYGpp5sObvK%2Bix9CuTul6aaUljE32cQLhxrg809lkEySiwQuoINTkI%2FzivdZjFjP0zyfxXHpY%2BP94QVp2qTg4SNEa8baH4jRmede%2BBeGc7VJY0ln2DxpB9Ew3q63vwY6pgE4P%2BKh%2BTdgRYi6vVsj5VqOLGk%2BUu30Zh3JSLd7fCYI1%2FhRrWOiuzwfOt7OEn8kTM%2FaHxCTCUZS8MIuaJnrZkB3BY3i4EDkLOIXVJoAu3QPYHPQG8sIfsHVM02hg9ahCZrFhjcOFtDepaJW1XPrdroBf34imgZwm0s9NfTwzEVTQg2fxNT1oJEMQJtzv8DFSTcY8bNwRdx8OnuqVCRvG2RqQC0XPhZY&X-Amz-Signature=6feb158d63d8deb918f4fc76be92f51dd12afc38e6666a17c4ff39ba9d3735f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4SXFR3L%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHU57n25t%2Bgg8ys%2BmVGnjtzRB%2FaZd85Djlje5JhRuO9uAiA3Mwun068aihW0ZPNQYFeHUnKg71bNeSzxQoxz2AYyKiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyXxCrxtgRhQV0F4fKtwD2ObTR9exJApH6Bvih4gYHb6hR1jLnzQg3RlTqJNvkpvJdN3IOGsYi7U6kPO5qf6UBeLeWaYPLXjW44CnVCpMSlIsGMB5iL9rqVmBuwGEKNxRWiTmQRBbSNeVqn9YCzaWZd5iGz7k1KA6Q%2BcFVpIi6U%2BWw6%2B8Lxnw7wP7%2FnWvfBwWJ2%2F2SJwbSn8Bt%2BSkYOY4knbt2nS7mSFv7Uu6HPpcJzvUBNFE6mVmaOT%2BmlaeaGjMmQIlDJFDSHn3JeaVExGuRfMmLloHSjiXaRTBW%2FEC3Jl3g0vlknxjmAKoxlF9663XWLm4IGse64llLOyYxa3LhqQrBWw5t4nf8KFkSFHS7aQHijjG0VChxE%2FM1Btz%2B40x54lMZhbaO2nJ8l1v5Ze%2BvvdntDMY9g2QWNYZBsguxVVE2gM%2FZpGJs0Fopbq3CGcjBx5INHfq%2BGSy%2BpY%2FlyP3ewGT3ejJr0IMgommcIapj%2Ba6vw7PLR74SASG%2FOEHebVPY6OA29tnEMMC71hWpVc6THtFDYGpp5sObvK%2Bix9CuTul6aaUljE32cQLhxrg809lkEySiwQuoINTkI%2FzivdZjFjP0zyfxXHpY%2BP94QVp2qTg4SNEa8baH4jRmede%2BBeGc7VJY0ln2DxpB9Ew3q63vwY6pgE4P%2BKh%2BTdgRYi6vVsj5VqOLGk%2BUu30Zh3JSLd7fCYI1%2FhRrWOiuzwfOt7OEn8kTM%2FaHxCTCUZS8MIuaJnrZkB3BY3i4EDkLOIXVJoAu3QPYHPQG8sIfsHVM02hg9ahCZrFhjcOFtDepaJW1XPrdroBf34imgZwm0s9NfTwzEVTQg2fxNT1oJEMQJtzv8DFSTcY8bNwRdx8OnuqVCRvG2RqQC0XPhZY&X-Amz-Signature=4c1ce8448af864428701866fdc281f4f5b7af24687cf4563be407ce2b9624a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4SXFR3L%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHU57n25t%2Bgg8ys%2BmVGnjtzRB%2FaZd85Djlje5JhRuO9uAiA3Mwun068aihW0ZPNQYFeHUnKg71bNeSzxQoxz2AYyKiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyXxCrxtgRhQV0F4fKtwD2ObTR9exJApH6Bvih4gYHb6hR1jLnzQg3RlTqJNvkpvJdN3IOGsYi7U6kPO5qf6UBeLeWaYPLXjW44CnVCpMSlIsGMB5iL9rqVmBuwGEKNxRWiTmQRBbSNeVqn9YCzaWZd5iGz7k1KA6Q%2BcFVpIi6U%2BWw6%2B8Lxnw7wP7%2FnWvfBwWJ2%2F2SJwbSn8Bt%2BSkYOY4knbt2nS7mSFv7Uu6HPpcJzvUBNFE6mVmaOT%2BmlaeaGjMmQIlDJFDSHn3JeaVExGuRfMmLloHSjiXaRTBW%2FEC3Jl3g0vlknxjmAKoxlF9663XWLm4IGse64llLOyYxa3LhqQrBWw5t4nf8KFkSFHS7aQHijjG0VChxE%2FM1Btz%2B40x54lMZhbaO2nJ8l1v5Ze%2BvvdntDMY9g2QWNYZBsguxVVE2gM%2FZpGJs0Fopbq3CGcjBx5INHfq%2BGSy%2BpY%2FlyP3ewGT3ejJr0IMgommcIapj%2Ba6vw7PLR74SASG%2FOEHebVPY6OA29tnEMMC71hWpVc6THtFDYGpp5sObvK%2Bix9CuTul6aaUljE32cQLhxrg809lkEySiwQuoINTkI%2FzivdZjFjP0zyfxXHpY%2BP94QVp2qTg4SNEa8baH4jRmede%2BBeGc7VJY0ln2DxpB9Ew3q63vwY6pgE4P%2BKh%2BTdgRYi6vVsj5VqOLGk%2BUu30Zh3JSLd7fCYI1%2FhRrWOiuzwfOt7OEn8kTM%2FaHxCTCUZS8MIuaJnrZkB3BY3i4EDkLOIXVJoAu3QPYHPQG8sIfsHVM02hg9ahCZrFhjcOFtDepaJW1XPrdroBf34imgZwm0s9NfTwzEVTQg2fxNT1oJEMQJtzv8DFSTcY8bNwRdx8OnuqVCRvG2RqQC0XPhZY&X-Amz-Signature=31c6918003ce3896321522cd09652eafd9e6890b8751c7a62e263278113e1968&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4SXFR3L%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHU57n25t%2Bgg8ys%2BmVGnjtzRB%2FaZd85Djlje5JhRuO9uAiA3Mwun068aihW0ZPNQYFeHUnKg71bNeSzxQoxz2AYyKiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyXxCrxtgRhQV0F4fKtwD2ObTR9exJApH6Bvih4gYHb6hR1jLnzQg3RlTqJNvkpvJdN3IOGsYi7U6kPO5qf6UBeLeWaYPLXjW44CnVCpMSlIsGMB5iL9rqVmBuwGEKNxRWiTmQRBbSNeVqn9YCzaWZd5iGz7k1KA6Q%2BcFVpIi6U%2BWw6%2B8Lxnw7wP7%2FnWvfBwWJ2%2F2SJwbSn8Bt%2BSkYOY4knbt2nS7mSFv7Uu6HPpcJzvUBNFE6mVmaOT%2BmlaeaGjMmQIlDJFDSHn3JeaVExGuRfMmLloHSjiXaRTBW%2FEC3Jl3g0vlknxjmAKoxlF9663XWLm4IGse64llLOyYxa3LhqQrBWw5t4nf8KFkSFHS7aQHijjG0VChxE%2FM1Btz%2B40x54lMZhbaO2nJ8l1v5Ze%2BvvdntDMY9g2QWNYZBsguxVVE2gM%2FZpGJs0Fopbq3CGcjBx5INHfq%2BGSy%2BpY%2FlyP3ewGT3ejJr0IMgommcIapj%2Ba6vw7PLR74SASG%2FOEHebVPY6OA29tnEMMC71hWpVc6THtFDYGpp5sObvK%2Bix9CuTul6aaUljE32cQLhxrg809lkEySiwQuoINTkI%2FzivdZjFjP0zyfxXHpY%2BP94QVp2qTg4SNEa8baH4jRmede%2BBeGc7VJY0ln2DxpB9Ew3q63vwY6pgE4P%2BKh%2BTdgRYi6vVsj5VqOLGk%2BUu30Zh3JSLd7fCYI1%2FhRrWOiuzwfOt7OEn8kTM%2FaHxCTCUZS8MIuaJnrZkB3BY3i4EDkLOIXVJoAu3QPYHPQG8sIfsHVM02hg9ahCZrFhjcOFtDepaJW1XPrdroBf34imgZwm0s9NfTwzEVTQg2fxNT1oJEMQJtzv8DFSTcY8bNwRdx8OnuqVCRvG2RqQC0XPhZY&X-Amz-Signature=76186276c9f941df2e821213f1487f2dc73af473f07bd8d958a2c40fa073d5e9&X-Amz-SignedHeaders=host&x-id=GetObject)
