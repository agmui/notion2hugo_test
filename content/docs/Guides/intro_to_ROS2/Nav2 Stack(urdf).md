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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFK7QWVM%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDChTv4qIHy%2F9bizDZZC4iesVPEyALZswXiDc7RSqjXvgIgLXuX4YWgfwTgBIN5Imp9LPaMW%2FjLXAoj%2Fse3ql3Xi54qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGREW78XxfMwuHASNSrcAykons85B3cFOwpZglX9FV4E%2BHxJQ2U1DvmfMxylYBZm3QcmZO2vp2GgVw1SBcpmrmxHqeSWwpZsdQkCakbBVaJzkBe0WRc0IPpk9BVeOdEfmQMArJb5fZ2liURDedzlrXDOb710XHU3OKhrEeX2%2BmEGs6rVYxVgi2%2BVxSifB%2F%2BGivK3TRmBi1%2Bg95i0v9sHsfEbb9WeEZFy6sCOqbrs7UkV%2BRwN%2Bzy5ghTc9cfaCzRvd1GAcXPaHBL5wX4yBZ3LsDUhpvP2wcyX9yvk4PoP05Vn69g43tZitq0bwDHtE%2BuB4pCPLqeLw3OrMwyceSx29cz1cE3qBBR6QKVgwBbHjfpl5velePJisNfxcbu%2BoENRGHl7nnc82D3pNyEAN6y7rAYL%2BZI8CC67QJqHRa7I%2FCxbvLMVxef2NKxUBvUKXLup2r4AIKRoDNJKjtwuJ%2BbKJ0EuMDdVWuI6zbWVOZxFyfyPeDywy5zG9cZcFUzkbIHe6Z3oe2oCGP2weqgkLh3M1tDC4YAWD4BHEXhaRX0bAw9yl8l%2Ful1AQkXTGaBT%2BJciGNaAARTiNIqECMrRXeogxOr6XmK6UVNxi8WLWC7H5jB%2FFfLr4Lx1yYrntvb%2FjeXifuV%2Fe8v6x%2FouPB9bMI2f%2B8MGOqUBGkkcRwuqryVmyQnnpFNeuURgcUGJHr%2FOlR3Q6GruUlDMKKt05gsZwAXHA96tShju7hBWDM9eKSoGzX0ri7TqJAoIsrE1F2t%2FEUPHzNmL1x5WvL%2FnmBEiRG9rn6eHK6YmRkVWf2pJyYAnjQpeh1H7u42XJdoaIcKotKBE6phU0vRFKeQbZr89UDyGGfynF6LcMA4Y00uuW6y7IeFvkUbIrsk4C%2B6z&X-Amz-Signature=b7b8d8753bebd11b39963e69bab00f84c3f2b6c90caa474bdd30eabee2279328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFK7QWVM%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDChTv4qIHy%2F9bizDZZC4iesVPEyALZswXiDc7RSqjXvgIgLXuX4YWgfwTgBIN5Imp9LPaMW%2FjLXAoj%2Fse3ql3Xi54qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGREW78XxfMwuHASNSrcAykons85B3cFOwpZglX9FV4E%2BHxJQ2U1DvmfMxylYBZm3QcmZO2vp2GgVw1SBcpmrmxHqeSWwpZsdQkCakbBVaJzkBe0WRc0IPpk9BVeOdEfmQMArJb5fZ2liURDedzlrXDOb710XHU3OKhrEeX2%2BmEGs6rVYxVgi2%2BVxSifB%2F%2BGivK3TRmBi1%2Bg95i0v9sHsfEbb9WeEZFy6sCOqbrs7UkV%2BRwN%2Bzy5ghTc9cfaCzRvd1GAcXPaHBL5wX4yBZ3LsDUhpvP2wcyX9yvk4PoP05Vn69g43tZitq0bwDHtE%2BuB4pCPLqeLw3OrMwyceSx29cz1cE3qBBR6QKVgwBbHjfpl5velePJisNfxcbu%2BoENRGHl7nnc82D3pNyEAN6y7rAYL%2BZI8CC67QJqHRa7I%2FCxbvLMVxef2NKxUBvUKXLup2r4AIKRoDNJKjtwuJ%2BbKJ0EuMDdVWuI6zbWVOZxFyfyPeDywy5zG9cZcFUzkbIHe6Z3oe2oCGP2weqgkLh3M1tDC4YAWD4BHEXhaRX0bAw9yl8l%2Ful1AQkXTGaBT%2BJciGNaAARTiNIqECMrRXeogxOr6XmK6UVNxi8WLWC7H5jB%2FFfLr4Lx1yYrntvb%2FjeXifuV%2Fe8v6x%2FouPB9bMI2f%2B8MGOqUBGkkcRwuqryVmyQnnpFNeuURgcUGJHr%2FOlR3Q6GruUlDMKKt05gsZwAXHA96tShju7hBWDM9eKSoGzX0ri7TqJAoIsrE1F2t%2FEUPHzNmL1x5WvL%2FnmBEiRG9rn6eHK6YmRkVWf2pJyYAnjQpeh1H7u42XJdoaIcKotKBE6phU0vRFKeQbZr89UDyGGfynF6LcMA4Y00uuW6y7IeFvkUbIrsk4C%2B6z&X-Amz-Signature=8244c4c4d54bb3f3cca08d06ca1db74a77c9f122bc57a5b4cce5d55ea75e48dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFK7QWVM%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDChTv4qIHy%2F9bizDZZC4iesVPEyALZswXiDc7RSqjXvgIgLXuX4YWgfwTgBIN5Imp9LPaMW%2FjLXAoj%2Fse3ql3Xi54qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGREW78XxfMwuHASNSrcAykons85B3cFOwpZglX9FV4E%2BHxJQ2U1DvmfMxylYBZm3QcmZO2vp2GgVw1SBcpmrmxHqeSWwpZsdQkCakbBVaJzkBe0WRc0IPpk9BVeOdEfmQMArJb5fZ2liURDedzlrXDOb710XHU3OKhrEeX2%2BmEGs6rVYxVgi2%2BVxSifB%2F%2BGivK3TRmBi1%2Bg95i0v9sHsfEbb9WeEZFy6sCOqbrs7UkV%2BRwN%2Bzy5ghTc9cfaCzRvd1GAcXPaHBL5wX4yBZ3LsDUhpvP2wcyX9yvk4PoP05Vn69g43tZitq0bwDHtE%2BuB4pCPLqeLw3OrMwyceSx29cz1cE3qBBR6QKVgwBbHjfpl5velePJisNfxcbu%2BoENRGHl7nnc82D3pNyEAN6y7rAYL%2BZI8CC67QJqHRa7I%2FCxbvLMVxef2NKxUBvUKXLup2r4AIKRoDNJKjtwuJ%2BbKJ0EuMDdVWuI6zbWVOZxFyfyPeDywy5zG9cZcFUzkbIHe6Z3oe2oCGP2weqgkLh3M1tDC4YAWD4BHEXhaRX0bAw9yl8l%2Ful1AQkXTGaBT%2BJciGNaAARTiNIqECMrRXeogxOr6XmK6UVNxi8WLWC7H5jB%2FFfLr4Lx1yYrntvb%2FjeXifuV%2Fe8v6x%2FouPB9bMI2f%2B8MGOqUBGkkcRwuqryVmyQnnpFNeuURgcUGJHr%2FOlR3Q6GruUlDMKKt05gsZwAXHA96tShju7hBWDM9eKSoGzX0ri7TqJAoIsrE1F2t%2FEUPHzNmL1x5WvL%2FnmBEiRG9rn6eHK6YmRkVWf2pJyYAnjQpeh1H7u42XJdoaIcKotKBE6phU0vRFKeQbZr89UDyGGfynF6LcMA4Y00uuW6y7IeFvkUbIrsk4C%2B6z&X-Amz-Signature=91592c054d75f1451c240eb04bd86b776b4ca6e17143f6b2229d841d1b38b527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFK7QWVM%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDChTv4qIHy%2F9bizDZZC4iesVPEyALZswXiDc7RSqjXvgIgLXuX4YWgfwTgBIN5Imp9LPaMW%2FjLXAoj%2Fse3ql3Xi54qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGREW78XxfMwuHASNSrcAykons85B3cFOwpZglX9FV4E%2BHxJQ2U1DvmfMxylYBZm3QcmZO2vp2GgVw1SBcpmrmxHqeSWwpZsdQkCakbBVaJzkBe0WRc0IPpk9BVeOdEfmQMArJb5fZ2liURDedzlrXDOb710XHU3OKhrEeX2%2BmEGs6rVYxVgi2%2BVxSifB%2F%2BGivK3TRmBi1%2Bg95i0v9sHsfEbb9WeEZFy6sCOqbrs7UkV%2BRwN%2Bzy5ghTc9cfaCzRvd1GAcXPaHBL5wX4yBZ3LsDUhpvP2wcyX9yvk4PoP05Vn69g43tZitq0bwDHtE%2BuB4pCPLqeLw3OrMwyceSx29cz1cE3qBBR6QKVgwBbHjfpl5velePJisNfxcbu%2BoENRGHl7nnc82D3pNyEAN6y7rAYL%2BZI8CC67QJqHRa7I%2FCxbvLMVxef2NKxUBvUKXLup2r4AIKRoDNJKjtwuJ%2BbKJ0EuMDdVWuI6zbWVOZxFyfyPeDywy5zG9cZcFUzkbIHe6Z3oe2oCGP2weqgkLh3M1tDC4YAWD4BHEXhaRX0bAw9yl8l%2Ful1AQkXTGaBT%2BJciGNaAARTiNIqECMrRXeogxOr6XmK6UVNxi8WLWC7H5jB%2FFfLr4Lx1yYrntvb%2FjeXifuV%2Fe8v6x%2FouPB9bMI2f%2B8MGOqUBGkkcRwuqryVmyQnnpFNeuURgcUGJHr%2FOlR3Q6GruUlDMKKt05gsZwAXHA96tShju7hBWDM9eKSoGzX0ri7TqJAoIsrE1F2t%2FEUPHzNmL1x5WvL%2FnmBEiRG9rn6eHK6YmRkVWf2pJyYAnjQpeh1H7u42XJdoaIcKotKBE6phU0vRFKeQbZr89UDyGGfynF6LcMA4Y00uuW6y7IeFvkUbIrsk4C%2B6z&X-Amz-Signature=6b6caf203e1e00319daee3d4955a0770c8a8870b816bc076b66ac93c0f93255c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFK7QWVM%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDChTv4qIHy%2F9bizDZZC4iesVPEyALZswXiDc7RSqjXvgIgLXuX4YWgfwTgBIN5Imp9LPaMW%2FjLXAoj%2Fse3ql3Xi54qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGREW78XxfMwuHASNSrcAykons85B3cFOwpZglX9FV4E%2BHxJQ2U1DvmfMxylYBZm3QcmZO2vp2GgVw1SBcpmrmxHqeSWwpZsdQkCakbBVaJzkBe0WRc0IPpk9BVeOdEfmQMArJb5fZ2liURDedzlrXDOb710XHU3OKhrEeX2%2BmEGs6rVYxVgi2%2BVxSifB%2F%2BGivK3TRmBi1%2Bg95i0v9sHsfEbb9WeEZFy6sCOqbrs7UkV%2BRwN%2Bzy5ghTc9cfaCzRvd1GAcXPaHBL5wX4yBZ3LsDUhpvP2wcyX9yvk4PoP05Vn69g43tZitq0bwDHtE%2BuB4pCPLqeLw3OrMwyceSx29cz1cE3qBBR6QKVgwBbHjfpl5velePJisNfxcbu%2BoENRGHl7nnc82D3pNyEAN6y7rAYL%2BZI8CC67QJqHRa7I%2FCxbvLMVxef2NKxUBvUKXLup2r4AIKRoDNJKjtwuJ%2BbKJ0EuMDdVWuI6zbWVOZxFyfyPeDywy5zG9cZcFUzkbIHe6Z3oe2oCGP2weqgkLh3M1tDC4YAWD4BHEXhaRX0bAw9yl8l%2Ful1AQkXTGaBT%2BJciGNaAARTiNIqECMrRXeogxOr6XmK6UVNxi8WLWC7H5jB%2FFfLr4Lx1yYrntvb%2FjeXifuV%2Fe8v6x%2FouPB9bMI2f%2B8MGOqUBGkkcRwuqryVmyQnnpFNeuURgcUGJHr%2FOlR3Q6GruUlDMKKt05gsZwAXHA96tShju7hBWDM9eKSoGzX0ri7TqJAoIsrE1F2t%2FEUPHzNmL1x5WvL%2FnmBEiRG9rn6eHK6YmRkVWf2pJyYAnjQpeh1H7u42XJdoaIcKotKBE6phU0vRFKeQbZr89UDyGGfynF6LcMA4Y00uuW6y7IeFvkUbIrsk4C%2B6z&X-Amz-Signature=a93e2014cb6febc74f8572994f474471a7818228667e5b471be4144cc1601476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFK7QWVM%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDChTv4qIHy%2F9bizDZZC4iesVPEyALZswXiDc7RSqjXvgIgLXuX4YWgfwTgBIN5Imp9LPaMW%2FjLXAoj%2Fse3ql3Xi54qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGREW78XxfMwuHASNSrcAykons85B3cFOwpZglX9FV4E%2BHxJQ2U1DvmfMxylYBZm3QcmZO2vp2GgVw1SBcpmrmxHqeSWwpZsdQkCakbBVaJzkBe0WRc0IPpk9BVeOdEfmQMArJb5fZ2liURDedzlrXDOb710XHU3OKhrEeX2%2BmEGs6rVYxVgi2%2BVxSifB%2F%2BGivK3TRmBi1%2Bg95i0v9sHsfEbb9WeEZFy6sCOqbrs7UkV%2BRwN%2Bzy5ghTc9cfaCzRvd1GAcXPaHBL5wX4yBZ3LsDUhpvP2wcyX9yvk4PoP05Vn69g43tZitq0bwDHtE%2BuB4pCPLqeLw3OrMwyceSx29cz1cE3qBBR6QKVgwBbHjfpl5velePJisNfxcbu%2BoENRGHl7nnc82D3pNyEAN6y7rAYL%2BZI8CC67QJqHRa7I%2FCxbvLMVxef2NKxUBvUKXLup2r4AIKRoDNJKjtwuJ%2BbKJ0EuMDdVWuI6zbWVOZxFyfyPeDywy5zG9cZcFUzkbIHe6Z3oe2oCGP2weqgkLh3M1tDC4YAWD4BHEXhaRX0bAw9yl8l%2Ful1AQkXTGaBT%2BJciGNaAARTiNIqECMrRXeogxOr6XmK6UVNxi8WLWC7H5jB%2FFfLr4Lx1yYrntvb%2FjeXifuV%2Fe8v6x%2FouPB9bMI2f%2B8MGOqUBGkkcRwuqryVmyQnnpFNeuURgcUGJHr%2FOlR3Q6GruUlDMKKt05gsZwAXHA96tShju7hBWDM9eKSoGzX0ri7TqJAoIsrE1F2t%2FEUPHzNmL1x5WvL%2FnmBEiRG9rn6eHK6YmRkVWf2pJyYAnjQpeh1H7u42XJdoaIcKotKBE6phU0vRFKeQbZr89UDyGGfynF6LcMA4Y00uuW6y7IeFvkUbIrsk4C%2B6z&X-Amz-Signature=428d7c378bbc14d561c2c52cbeb3afff614232bc4b26a5cf7b9aef5a91f88f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
