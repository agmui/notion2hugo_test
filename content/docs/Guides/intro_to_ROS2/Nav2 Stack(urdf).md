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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVM2CVGE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYW%2FC5bcpz1gJJ8F%2Bdw0zuZYBC%2B%2FrC5qmy5EpjUxU5ZAiBVCv4m%2BVeDcSxBRZu0PKEBSNAzwGAQGvBnmTwU%2F2ksfCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2FZqkHh65sUbzZ0rsKtwD2czpSLCyRxFT43uCJO%2FuZ3JVWveubekPx1%2BY%2F8LsYiB6ySofZQAH%2F5eS4MOymFOy0MemcGVG%2BpD93%2FjvgbpWqlM3GjoFaAj5xMpDsqeLPG9Fol26509ba5FZecfbMp8YleKAHcUjB6Qz8BVHPGN433M5PFcpyHWAf4dt6GD3XEvqz8NIe8pYuTdYdxapJ1R%2B8Mw1%2FNjs69VNgJvoT1ne2o%2FHbrUHRBTsuLnDyA2ghIrs6rfS0%2Br5dfBwPK6FQJyE1bexMb1atP%2BgzuuKQG7Fwze%2BS7Ds%2Fl3ijXzjhZonp%2BumTFuCH8MAdzUlTVai4B3KPVIcpCQn7h%2FNwo8Uh8fhSTfwgASZgpHFW2aGaG9jtFmwTc4deSbaxYXr7weVTqDMrbecoUDJCXMd1zjIMDWs8gc%2BWYxa2g8yikzbfauSOVnaGeJjqSc8ZlYXMISniBPBGYyKVJXetbGggAPCPXzWi2kl8oqvHM2WIQNGrjMUdWdf8EBCNolpHzMosuoxYXUQV%2BuDiGQyhz%2FCGURvAa6ekzkmkLNVc34bmC2ULvvqOFKo8yoNB%2Flq3skxNxHrm7%2FnhJhY1ebtChSCY%2FdLkfGSGX%2Foq4rxVsyaCMCURTOPNoVdR8o%2FyVHmrkM0z00w7crlwAY6pgE0YOko5c1T08avMbO%2F1%2FHWf%2FMT%2F9MXNOg2%2FfVAN9ay3faY59dgSSgi15ipYcK1NkoSFjEyIaNCC0mQm%2BhwMcJ%2BRQCOQJ%2B%2BFuoyiJXC4zEtqA2UVJHNCBo4ouuQ2VajaMnt6Vac5dmRfg49O3yx%2BfGP5JqRSyHArKIcpSaBXLhqvEOec3IGG5WtMZARydGBApy84KwDOCS8G8sPt4g1n86SjI4c7to4&X-Amz-Signature=d49cac586bbd552750b6a52f55929161e940a16669fa198c2f1d490088df6099&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVM2CVGE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYW%2FC5bcpz1gJJ8F%2Bdw0zuZYBC%2B%2FrC5qmy5EpjUxU5ZAiBVCv4m%2BVeDcSxBRZu0PKEBSNAzwGAQGvBnmTwU%2F2ksfCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2FZqkHh65sUbzZ0rsKtwD2czpSLCyRxFT43uCJO%2FuZ3JVWveubekPx1%2BY%2F8LsYiB6ySofZQAH%2F5eS4MOymFOy0MemcGVG%2BpD93%2FjvgbpWqlM3GjoFaAj5xMpDsqeLPG9Fol26509ba5FZecfbMp8YleKAHcUjB6Qz8BVHPGN433M5PFcpyHWAf4dt6GD3XEvqz8NIe8pYuTdYdxapJ1R%2B8Mw1%2FNjs69VNgJvoT1ne2o%2FHbrUHRBTsuLnDyA2ghIrs6rfS0%2Br5dfBwPK6FQJyE1bexMb1atP%2BgzuuKQG7Fwze%2BS7Ds%2Fl3ijXzjhZonp%2BumTFuCH8MAdzUlTVai4B3KPVIcpCQn7h%2FNwo8Uh8fhSTfwgASZgpHFW2aGaG9jtFmwTc4deSbaxYXr7weVTqDMrbecoUDJCXMd1zjIMDWs8gc%2BWYxa2g8yikzbfauSOVnaGeJjqSc8ZlYXMISniBPBGYyKVJXetbGggAPCPXzWi2kl8oqvHM2WIQNGrjMUdWdf8EBCNolpHzMosuoxYXUQV%2BuDiGQyhz%2FCGURvAa6ekzkmkLNVc34bmC2ULvvqOFKo8yoNB%2Flq3skxNxHrm7%2FnhJhY1ebtChSCY%2FdLkfGSGX%2Foq4rxVsyaCMCURTOPNoVdR8o%2FyVHmrkM0z00w7crlwAY6pgE0YOko5c1T08avMbO%2F1%2FHWf%2FMT%2F9MXNOg2%2FfVAN9ay3faY59dgSSgi15ipYcK1NkoSFjEyIaNCC0mQm%2BhwMcJ%2BRQCOQJ%2B%2BFuoyiJXC4zEtqA2UVJHNCBo4ouuQ2VajaMnt6Vac5dmRfg49O3yx%2BfGP5JqRSyHArKIcpSaBXLhqvEOec3IGG5WtMZARydGBApy84KwDOCS8G8sPt4g1n86SjI4c7to4&X-Amz-Signature=175409d394d0d66b37f7347764c8a94180ce96b98819e00a22ab63dd6b1864f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVM2CVGE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYW%2FC5bcpz1gJJ8F%2Bdw0zuZYBC%2B%2FrC5qmy5EpjUxU5ZAiBVCv4m%2BVeDcSxBRZu0PKEBSNAzwGAQGvBnmTwU%2F2ksfCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2FZqkHh65sUbzZ0rsKtwD2czpSLCyRxFT43uCJO%2FuZ3JVWveubekPx1%2BY%2F8LsYiB6ySofZQAH%2F5eS4MOymFOy0MemcGVG%2BpD93%2FjvgbpWqlM3GjoFaAj5xMpDsqeLPG9Fol26509ba5FZecfbMp8YleKAHcUjB6Qz8BVHPGN433M5PFcpyHWAf4dt6GD3XEvqz8NIe8pYuTdYdxapJ1R%2B8Mw1%2FNjs69VNgJvoT1ne2o%2FHbrUHRBTsuLnDyA2ghIrs6rfS0%2Br5dfBwPK6FQJyE1bexMb1atP%2BgzuuKQG7Fwze%2BS7Ds%2Fl3ijXzjhZonp%2BumTFuCH8MAdzUlTVai4B3KPVIcpCQn7h%2FNwo8Uh8fhSTfwgASZgpHFW2aGaG9jtFmwTc4deSbaxYXr7weVTqDMrbecoUDJCXMd1zjIMDWs8gc%2BWYxa2g8yikzbfauSOVnaGeJjqSc8ZlYXMISniBPBGYyKVJXetbGggAPCPXzWi2kl8oqvHM2WIQNGrjMUdWdf8EBCNolpHzMosuoxYXUQV%2BuDiGQyhz%2FCGURvAa6ekzkmkLNVc34bmC2ULvvqOFKo8yoNB%2Flq3skxNxHrm7%2FnhJhY1ebtChSCY%2FdLkfGSGX%2Foq4rxVsyaCMCURTOPNoVdR8o%2FyVHmrkM0z00w7crlwAY6pgE0YOko5c1T08avMbO%2F1%2FHWf%2FMT%2F9MXNOg2%2FfVAN9ay3faY59dgSSgi15ipYcK1NkoSFjEyIaNCC0mQm%2BhwMcJ%2BRQCOQJ%2B%2BFuoyiJXC4zEtqA2UVJHNCBo4ouuQ2VajaMnt6Vac5dmRfg49O3yx%2BfGP5JqRSyHArKIcpSaBXLhqvEOec3IGG5WtMZARydGBApy84KwDOCS8G8sPt4g1n86SjI4c7to4&X-Amz-Signature=e705eb8ebc306ed31917c7608d6286883967951cb564915c8c28c717357a187c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVM2CVGE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYW%2FC5bcpz1gJJ8F%2Bdw0zuZYBC%2B%2FrC5qmy5EpjUxU5ZAiBVCv4m%2BVeDcSxBRZu0PKEBSNAzwGAQGvBnmTwU%2F2ksfCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2FZqkHh65sUbzZ0rsKtwD2czpSLCyRxFT43uCJO%2FuZ3JVWveubekPx1%2BY%2F8LsYiB6ySofZQAH%2F5eS4MOymFOy0MemcGVG%2BpD93%2FjvgbpWqlM3GjoFaAj5xMpDsqeLPG9Fol26509ba5FZecfbMp8YleKAHcUjB6Qz8BVHPGN433M5PFcpyHWAf4dt6GD3XEvqz8NIe8pYuTdYdxapJ1R%2B8Mw1%2FNjs69VNgJvoT1ne2o%2FHbrUHRBTsuLnDyA2ghIrs6rfS0%2Br5dfBwPK6FQJyE1bexMb1atP%2BgzuuKQG7Fwze%2BS7Ds%2Fl3ijXzjhZonp%2BumTFuCH8MAdzUlTVai4B3KPVIcpCQn7h%2FNwo8Uh8fhSTfwgASZgpHFW2aGaG9jtFmwTc4deSbaxYXr7weVTqDMrbecoUDJCXMd1zjIMDWs8gc%2BWYxa2g8yikzbfauSOVnaGeJjqSc8ZlYXMISniBPBGYyKVJXetbGggAPCPXzWi2kl8oqvHM2WIQNGrjMUdWdf8EBCNolpHzMosuoxYXUQV%2BuDiGQyhz%2FCGURvAa6ekzkmkLNVc34bmC2ULvvqOFKo8yoNB%2Flq3skxNxHrm7%2FnhJhY1ebtChSCY%2FdLkfGSGX%2Foq4rxVsyaCMCURTOPNoVdR8o%2FyVHmrkM0z00w7crlwAY6pgE0YOko5c1T08avMbO%2F1%2FHWf%2FMT%2F9MXNOg2%2FfVAN9ay3faY59dgSSgi15ipYcK1NkoSFjEyIaNCC0mQm%2BhwMcJ%2BRQCOQJ%2B%2BFuoyiJXC4zEtqA2UVJHNCBo4ouuQ2VajaMnt6Vac5dmRfg49O3yx%2BfGP5JqRSyHArKIcpSaBXLhqvEOec3IGG5WtMZARydGBApy84KwDOCS8G8sPt4g1n86SjI4c7to4&X-Amz-Signature=13544d908d32e0fc7308f093b513b997b5cf15e9a4f55af261d932fb23545589&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVM2CVGE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYW%2FC5bcpz1gJJ8F%2Bdw0zuZYBC%2B%2FrC5qmy5EpjUxU5ZAiBVCv4m%2BVeDcSxBRZu0PKEBSNAzwGAQGvBnmTwU%2F2ksfCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2FZqkHh65sUbzZ0rsKtwD2czpSLCyRxFT43uCJO%2FuZ3JVWveubekPx1%2BY%2F8LsYiB6ySofZQAH%2F5eS4MOymFOy0MemcGVG%2BpD93%2FjvgbpWqlM3GjoFaAj5xMpDsqeLPG9Fol26509ba5FZecfbMp8YleKAHcUjB6Qz8BVHPGN433M5PFcpyHWAf4dt6GD3XEvqz8NIe8pYuTdYdxapJ1R%2B8Mw1%2FNjs69VNgJvoT1ne2o%2FHbrUHRBTsuLnDyA2ghIrs6rfS0%2Br5dfBwPK6FQJyE1bexMb1atP%2BgzuuKQG7Fwze%2BS7Ds%2Fl3ijXzjhZonp%2BumTFuCH8MAdzUlTVai4B3KPVIcpCQn7h%2FNwo8Uh8fhSTfwgASZgpHFW2aGaG9jtFmwTc4deSbaxYXr7weVTqDMrbecoUDJCXMd1zjIMDWs8gc%2BWYxa2g8yikzbfauSOVnaGeJjqSc8ZlYXMISniBPBGYyKVJXetbGggAPCPXzWi2kl8oqvHM2WIQNGrjMUdWdf8EBCNolpHzMosuoxYXUQV%2BuDiGQyhz%2FCGURvAa6ekzkmkLNVc34bmC2ULvvqOFKo8yoNB%2Flq3skxNxHrm7%2FnhJhY1ebtChSCY%2FdLkfGSGX%2Foq4rxVsyaCMCURTOPNoVdR8o%2FyVHmrkM0z00w7crlwAY6pgE0YOko5c1T08avMbO%2F1%2FHWf%2FMT%2F9MXNOg2%2FfVAN9ay3faY59dgSSgi15ipYcK1NkoSFjEyIaNCC0mQm%2BhwMcJ%2BRQCOQJ%2B%2BFuoyiJXC4zEtqA2UVJHNCBo4ouuQ2VajaMnt6Vac5dmRfg49O3yx%2BfGP5JqRSyHArKIcpSaBXLhqvEOec3IGG5WtMZARydGBApy84KwDOCS8G8sPt4g1n86SjI4c7to4&X-Amz-Signature=dc1092e5c68606d3f8eb807888e61d5e4b7da0842633efd3940fe936814a7961&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVM2CVGE%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T022519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYW%2FC5bcpz1gJJ8F%2Bdw0zuZYBC%2B%2FrC5qmy5EpjUxU5ZAiBVCv4m%2BVeDcSxBRZu0PKEBSNAzwGAQGvBnmTwU%2F2ksfCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2FZqkHh65sUbzZ0rsKtwD2czpSLCyRxFT43uCJO%2FuZ3JVWveubekPx1%2BY%2F8LsYiB6ySofZQAH%2F5eS4MOymFOy0MemcGVG%2BpD93%2FjvgbpWqlM3GjoFaAj5xMpDsqeLPG9Fol26509ba5FZecfbMp8YleKAHcUjB6Qz8BVHPGN433M5PFcpyHWAf4dt6GD3XEvqz8NIe8pYuTdYdxapJ1R%2B8Mw1%2FNjs69VNgJvoT1ne2o%2FHbrUHRBTsuLnDyA2ghIrs6rfS0%2Br5dfBwPK6FQJyE1bexMb1atP%2BgzuuKQG7Fwze%2BS7Ds%2Fl3ijXzjhZonp%2BumTFuCH8MAdzUlTVai4B3KPVIcpCQn7h%2FNwo8Uh8fhSTfwgASZgpHFW2aGaG9jtFmwTc4deSbaxYXr7weVTqDMrbecoUDJCXMd1zjIMDWs8gc%2BWYxa2g8yikzbfauSOVnaGeJjqSc8ZlYXMISniBPBGYyKVJXetbGggAPCPXzWi2kl8oqvHM2WIQNGrjMUdWdf8EBCNolpHzMosuoxYXUQV%2BuDiGQyhz%2FCGURvAa6ekzkmkLNVc34bmC2ULvvqOFKo8yoNB%2Flq3skxNxHrm7%2FnhJhY1ebtChSCY%2FdLkfGSGX%2Foq4rxVsyaCMCURTOPNoVdR8o%2FyVHmrkM0z00w7crlwAY6pgE0YOko5c1T08avMbO%2F1%2FHWf%2FMT%2F9MXNOg2%2FfVAN9ay3faY59dgSSgi15ipYcK1NkoSFjEyIaNCC0mQm%2BhwMcJ%2BRQCOQJ%2B%2BFuoyiJXC4zEtqA2UVJHNCBo4ouuQ2VajaMnt6Vac5dmRfg49O3yx%2BfGP5JqRSyHArKIcpSaBXLhqvEOec3IGG5WtMZARydGBApy84KwDOCS8G8sPt4g1n86SjI4c7to4&X-Amz-Signature=ff3f9f7a53637f73d2acc56b8285882b27683aaa3deaab2c92ecfedc1e6e2aea&X-Amz-SignedHeaders=host&x-id=GetObject)
