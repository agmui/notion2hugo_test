---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIUXRMKW%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDjIUOA9uyIvHIZvkEQZh3t5csFQRoGpJYAl9RWMN63zAiBFa6Bz4ZslXUxvhprD4%2FkqkKGQ%2FW%2BerMHJgcTyWm0M8Cr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2B7saM%2Bina%2BpPWu4OKtwD%2FBuUSl3%2FJLSg2WRnhF9c1HFLpuOXJOfD2XX3Zy6vDtzUuMPPjEZzkCN%2F%2BT7eP3QmyJxJrbVH7b9o%2B9K8E%2F0qoFl4zHGC7V4SgVfbGp8wRWczfqa47Cg%2FJuMxdTo4dpYsa2ampNgEpBsY1aYxlW8VTCeCdo1jcKZ8HMqUJrtVkICGaMXi5WCmTp1L7bHcQqzdf80tg9aVvHXO%2BcGnDQK2VDQUFV25kPsAuVHz22yrJznl9ZEFE16Yd7LsKzUEObzA%2BZJ6WEP7FaAHUBZ0b2QVL2leanzFU7NADwdMeSzrsOftmrDgVChTki17d6gqAYv3Ibsx3vw5QRLTApYvVcoPq6NIVnuKZ7QdciqeGfy7bV4ZCsjJwvxti129%2BLtfGvYR1%2B1jbJQhmJc%2FUvkCDfeg5%2BnxfaNXX%2FEetNvGr5XHwLXho4XFXfMwQyLVyxS46UdvmxWjWzYJ75wH7mTva9YoyuwwZkETDVAf6EMyBxasdhxBlDja%2F%2FAANC7JmE6focvGmDmF8F6UrK45sPSVpl%2FcAXaZJOScUJKkAb%2BzX%2BQ36TEDgkDD7kPwSWuGlmup1YOwuw6Bd08pVm9ss5sgdp9h7d4Q22B%2Bmv5ee%2BplbrNR1WOdOKli%2FpAJSLbYgsEw7uWNvQY6pgGTzD1NdNsAZZQ4yOrpZZQ9yBqlXfcK2VHrPjt2J7uR13KyS%2ByvLT3VAkX3DX%2FdwaAYNxifohkwq67GekFYl1%2BXcezn%2FoRfndbQu3%2BgwPXCrfkXM5Kn4CPOoLbcyhV3sugKLOaqHMXPkPuFxdC42r3U%2FYOC5%2Bq9mdZN0LTzMtUyqGcVK%2BMXdaoisaJ2pBkp66ybsjMUK5b9SWYGRKZRwbHiN1UZBk78&X-Amz-Signature=664b26829766d18e96bc6e87d1f810f142cf4c82accce6a752be9d1bfdcfdb70&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIUXRMKW%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDjIUOA9uyIvHIZvkEQZh3t5csFQRoGpJYAl9RWMN63zAiBFa6Bz4ZslXUxvhprD4%2FkqkKGQ%2FW%2BerMHJgcTyWm0M8Cr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2B7saM%2Bina%2BpPWu4OKtwD%2FBuUSl3%2FJLSg2WRnhF9c1HFLpuOXJOfD2XX3Zy6vDtzUuMPPjEZzkCN%2F%2BT7eP3QmyJxJrbVH7b9o%2B9K8E%2F0qoFl4zHGC7V4SgVfbGp8wRWczfqa47Cg%2FJuMxdTo4dpYsa2ampNgEpBsY1aYxlW8VTCeCdo1jcKZ8HMqUJrtVkICGaMXi5WCmTp1L7bHcQqzdf80tg9aVvHXO%2BcGnDQK2VDQUFV25kPsAuVHz22yrJznl9ZEFE16Yd7LsKzUEObzA%2BZJ6WEP7FaAHUBZ0b2QVL2leanzFU7NADwdMeSzrsOftmrDgVChTki17d6gqAYv3Ibsx3vw5QRLTApYvVcoPq6NIVnuKZ7QdciqeGfy7bV4ZCsjJwvxti129%2BLtfGvYR1%2B1jbJQhmJc%2FUvkCDfeg5%2BnxfaNXX%2FEetNvGr5XHwLXho4XFXfMwQyLVyxS46UdvmxWjWzYJ75wH7mTva9YoyuwwZkETDVAf6EMyBxasdhxBlDja%2F%2FAANC7JmE6focvGmDmF8F6UrK45sPSVpl%2FcAXaZJOScUJKkAb%2BzX%2BQ36TEDgkDD7kPwSWuGlmup1YOwuw6Bd08pVm9ss5sgdp9h7d4Q22B%2Bmv5ee%2BplbrNR1WOdOKli%2FpAJSLbYgsEw7uWNvQY6pgGTzD1NdNsAZZQ4yOrpZZQ9yBqlXfcK2VHrPjt2J7uR13KyS%2ByvLT3VAkX3DX%2FdwaAYNxifohkwq67GekFYl1%2BXcezn%2FoRfndbQu3%2BgwPXCrfkXM5Kn4CPOoLbcyhV3sugKLOaqHMXPkPuFxdC42r3U%2FYOC5%2Bq9mdZN0LTzMtUyqGcVK%2BMXdaoisaJ2pBkp66ybsjMUK5b9SWYGRKZRwbHiN1UZBk78&X-Amz-Signature=2f2aaf1139946e77e2bb95e4fc7231a1a2d0ddc33276cde609867507fb132aeb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIUXRMKW%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDjIUOA9uyIvHIZvkEQZh3t5csFQRoGpJYAl9RWMN63zAiBFa6Bz4ZslXUxvhprD4%2FkqkKGQ%2FW%2BerMHJgcTyWm0M8Cr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2B7saM%2Bina%2BpPWu4OKtwD%2FBuUSl3%2FJLSg2WRnhF9c1HFLpuOXJOfD2XX3Zy6vDtzUuMPPjEZzkCN%2F%2BT7eP3QmyJxJrbVH7b9o%2B9K8E%2F0qoFl4zHGC7V4SgVfbGp8wRWczfqa47Cg%2FJuMxdTo4dpYsa2ampNgEpBsY1aYxlW8VTCeCdo1jcKZ8HMqUJrtVkICGaMXi5WCmTp1L7bHcQqzdf80tg9aVvHXO%2BcGnDQK2VDQUFV25kPsAuVHz22yrJznl9ZEFE16Yd7LsKzUEObzA%2BZJ6WEP7FaAHUBZ0b2QVL2leanzFU7NADwdMeSzrsOftmrDgVChTki17d6gqAYv3Ibsx3vw5QRLTApYvVcoPq6NIVnuKZ7QdciqeGfy7bV4ZCsjJwvxti129%2BLtfGvYR1%2B1jbJQhmJc%2FUvkCDfeg5%2BnxfaNXX%2FEetNvGr5XHwLXho4XFXfMwQyLVyxS46UdvmxWjWzYJ75wH7mTva9YoyuwwZkETDVAf6EMyBxasdhxBlDja%2F%2FAANC7JmE6focvGmDmF8F6UrK45sPSVpl%2FcAXaZJOScUJKkAb%2BzX%2BQ36TEDgkDD7kPwSWuGlmup1YOwuw6Bd08pVm9ss5sgdp9h7d4Q22B%2Bmv5ee%2BplbrNR1WOdOKli%2FpAJSLbYgsEw7uWNvQY6pgGTzD1NdNsAZZQ4yOrpZZQ9yBqlXfcK2VHrPjt2J7uR13KyS%2ByvLT3VAkX3DX%2FdwaAYNxifohkwq67GekFYl1%2BXcezn%2FoRfndbQu3%2BgwPXCrfkXM5Kn4CPOoLbcyhV3sugKLOaqHMXPkPuFxdC42r3U%2FYOC5%2Bq9mdZN0LTzMtUyqGcVK%2BMXdaoisaJ2pBkp66ybsjMUK5b9SWYGRKZRwbHiN1UZBk78&X-Amz-Signature=9018c835046041f1ab3432c7473b608743ad60f2e5875d343ba6fab5b4ad0a07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIUXRMKW%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDjIUOA9uyIvHIZvkEQZh3t5csFQRoGpJYAl9RWMN63zAiBFa6Bz4ZslXUxvhprD4%2FkqkKGQ%2FW%2BerMHJgcTyWm0M8Cr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2B7saM%2Bina%2BpPWu4OKtwD%2FBuUSl3%2FJLSg2WRnhF9c1HFLpuOXJOfD2XX3Zy6vDtzUuMPPjEZzkCN%2F%2BT7eP3QmyJxJrbVH7b9o%2B9K8E%2F0qoFl4zHGC7V4SgVfbGp8wRWczfqa47Cg%2FJuMxdTo4dpYsa2ampNgEpBsY1aYxlW8VTCeCdo1jcKZ8HMqUJrtVkICGaMXi5WCmTp1L7bHcQqzdf80tg9aVvHXO%2BcGnDQK2VDQUFV25kPsAuVHz22yrJznl9ZEFE16Yd7LsKzUEObzA%2BZJ6WEP7FaAHUBZ0b2QVL2leanzFU7NADwdMeSzrsOftmrDgVChTki17d6gqAYv3Ibsx3vw5QRLTApYvVcoPq6NIVnuKZ7QdciqeGfy7bV4ZCsjJwvxti129%2BLtfGvYR1%2B1jbJQhmJc%2FUvkCDfeg5%2BnxfaNXX%2FEetNvGr5XHwLXho4XFXfMwQyLVyxS46UdvmxWjWzYJ75wH7mTva9YoyuwwZkETDVAf6EMyBxasdhxBlDja%2F%2FAANC7JmE6focvGmDmF8F6UrK45sPSVpl%2FcAXaZJOScUJKkAb%2BzX%2BQ36TEDgkDD7kPwSWuGlmup1YOwuw6Bd08pVm9ss5sgdp9h7d4Q22B%2Bmv5ee%2BplbrNR1WOdOKli%2FpAJSLbYgsEw7uWNvQY6pgGTzD1NdNsAZZQ4yOrpZZQ9yBqlXfcK2VHrPjt2J7uR13KyS%2ByvLT3VAkX3DX%2FdwaAYNxifohkwq67GekFYl1%2BXcezn%2FoRfndbQu3%2BgwPXCrfkXM5Kn4CPOoLbcyhV3sugKLOaqHMXPkPuFxdC42r3U%2FYOC5%2Bq9mdZN0LTzMtUyqGcVK%2BMXdaoisaJ2pBkp66ybsjMUK5b9SWYGRKZRwbHiN1UZBk78&X-Amz-Signature=0be419ede13ecd6f1b6755dea632d1519fa4dc697c52adf3b6897d9431e349c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIUXRMKW%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDjIUOA9uyIvHIZvkEQZh3t5csFQRoGpJYAl9RWMN63zAiBFa6Bz4ZslXUxvhprD4%2FkqkKGQ%2FW%2BerMHJgcTyWm0M8Cr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2B7saM%2Bina%2BpPWu4OKtwD%2FBuUSl3%2FJLSg2WRnhF9c1HFLpuOXJOfD2XX3Zy6vDtzUuMPPjEZzkCN%2F%2BT7eP3QmyJxJrbVH7b9o%2B9K8E%2F0qoFl4zHGC7V4SgVfbGp8wRWczfqa47Cg%2FJuMxdTo4dpYsa2ampNgEpBsY1aYxlW8VTCeCdo1jcKZ8HMqUJrtVkICGaMXi5WCmTp1L7bHcQqzdf80tg9aVvHXO%2BcGnDQK2VDQUFV25kPsAuVHz22yrJznl9ZEFE16Yd7LsKzUEObzA%2BZJ6WEP7FaAHUBZ0b2QVL2leanzFU7NADwdMeSzrsOftmrDgVChTki17d6gqAYv3Ibsx3vw5QRLTApYvVcoPq6NIVnuKZ7QdciqeGfy7bV4ZCsjJwvxti129%2BLtfGvYR1%2B1jbJQhmJc%2FUvkCDfeg5%2BnxfaNXX%2FEetNvGr5XHwLXho4XFXfMwQyLVyxS46UdvmxWjWzYJ75wH7mTva9YoyuwwZkETDVAf6EMyBxasdhxBlDja%2F%2FAANC7JmE6focvGmDmF8F6UrK45sPSVpl%2FcAXaZJOScUJKkAb%2BzX%2BQ36TEDgkDD7kPwSWuGlmup1YOwuw6Bd08pVm9ss5sgdp9h7d4Q22B%2Bmv5ee%2BplbrNR1WOdOKli%2FpAJSLbYgsEw7uWNvQY6pgGTzD1NdNsAZZQ4yOrpZZQ9yBqlXfcK2VHrPjt2J7uR13KyS%2ByvLT3VAkX3DX%2FdwaAYNxifohkwq67GekFYl1%2BXcezn%2FoRfndbQu3%2BgwPXCrfkXM5Kn4CPOoLbcyhV3sugKLOaqHMXPkPuFxdC42r3U%2FYOC5%2Bq9mdZN0LTzMtUyqGcVK%2BMXdaoisaJ2pBkp66ybsjMUK5b9SWYGRKZRwbHiN1UZBk78&X-Amz-Signature=a46ced5f661f4858fc2c5379e6a3e049f2ce94011e20e0564fd12f0490c3dc38&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIUXRMKW%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDjIUOA9uyIvHIZvkEQZh3t5csFQRoGpJYAl9RWMN63zAiBFa6Bz4ZslXUxvhprD4%2FkqkKGQ%2FW%2BerMHJgcTyWm0M8Cr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM%2B7saM%2Bina%2BpPWu4OKtwD%2FBuUSl3%2FJLSg2WRnhF9c1HFLpuOXJOfD2XX3Zy6vDtzUuMPPjEZzkCN%2F%2BT7eP3QmyJxJrbVH7b9o%2B9K8E%2F0qoFl4zHGC7V4SgVfbGp8wRWczfqa47Cg%2FJuMxdTo4dpYsa2ampNgEpBsY1aYxlW8VTCeCdo1jcKZ8HMqUJrtVkICGaMXi5WCmTp1L7bHcQqzdf80tg9aVvHXO%2BcGnDQK2VDQUFV25kPsAuVHz22yrJznl9ZEFE16Yd7LsKzUEObzA%2BZJ6WEP7FaAHUBZ0b2QVL2leanzFU7NADwdMeSzrsOftmrDgVChTki17d6gqAYv3Ibsx3vw5QRLTApYvVcoPq6NIVnuKZ7QdciqeGfy7bV4ZCsjJwvxti129%2BLtfGvYR1%2B1jbJQhmJc%2FUvkCDfeg5%2BnxfaNXX%2FEetNvGr5XHwLXho4XFXfMwQyLVyxS46UdvmxWjWzYJ75wH7mTva9YoyuwwZkETDVAf6EMyBxasdhxBlDja%2F%2FAANC7JmE6focvGmDmF8F6UrK45sPSVpl%2FcAXaZJOScUJKkAb%2BzX%2BQ36TEDgkDD7kPwSWuGlmup1YOwuw6Bd08pVm9ss5sgdp9h7d4Q22B%2Bmv5ee%2BplbrNR1WOdOKli%2FpAJSLbYgsEw7uWNvQY6pgGTzD1NdNsAZZQ4yOrpZZQ9yBqlXfcK2VHrPjt2J7uR13KyS%2ByvLT3VAkX3DX%2FdwaAYNxifohkwq67GekFYl1%2BXcezn%2FoRfndbQu3%2BgwPXCrfkXM5Kn4CPOoLbcyhV3sugKLOaqHMXPkPuFxdC42r3U%2FYOC5%2Bq9mdZN0LTzMtUyqGcVK%2BMXdaoisaJ2pBkp66ybsjMUK5b9SWYGRKZRwbHiN1UZBk78&X-Amz-Signature=349074a93186406b04ebe2447d989ddb31e627917f33b3c95abe204ce0017135&X-Amz-SignedHeaders=host&x-id=GetObject)
