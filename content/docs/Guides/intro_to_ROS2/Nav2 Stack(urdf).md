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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHN2XRU6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5TRc4MJ02OOun8b37ptLjNoLQ%2FvxfYodBN%2F%2FToiqP5AiBBvTTJGVQdCWneV2Lzp5Vb1dGx6HXFks4NLWDi5TTn0Sr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMWTuxsRVA4i%2B%2BoJ3pKtwD6cDdVF%2FjxaBYC2IBHQVNVzVfwa%2B5ARAXSv3vE84oDfkBiMV4zeE92A%2FaY9S1j3F%2Bjacc%2F6Qr35%2FpgsGwIvEbZ%2FSKZEdusSemzm6dVwQMOq20EsF13tFw%2BEnbAp1odh%2FcRflt7KlKy82gLJCBtrzEldQPR1AnrAc7Xyf3NRtZgnRv7k5v4%2BGBWNEGmqNqmXgUxNgOJbarFAOjAQGvOyRfIrOpRsqb2%2BQ5MJsQPT6s6LxoWGNrnRXF699ulL4k2fS9TjgLGmWAL0yJyOJ7S7mRQYoqvhCO6pcxKxl%2FTBIhNv9b64guPNOte05umTf7%2FBPJOE2Udrruy5ecZ05wfqZSTqD57HZwb77lG%2FcGB%2FwP6t%2Bjy64YerHHoRxqx0YQygsjvmyXWKqtllwADPjR8Moi62G1U%2FALQ9Mrp2yXPz3GOzaKDVURKKJjLSUZKBVGRm3%2BcMNa1OOqHEF3KNLLWHuTS1qj70yEZ87nVpzaA5Jo9m3d%2FB4Et%2F1l7BT3oaAcw4sMvz7agAl5AwaTSIJbNW4fuez0W8nBNxAcQjSjKJ%2BMZT17AD8hQALISzEHufzSvlp%2B6BEuy%2FAacnLHPbGxHi7swC67zJtuxcxGXE3N57Yg5a0tR2iRxF2QXRxIeUowyZS8wAY6pgEuP9AnXWS%2FIGI4nn3hcCmg9cNU5uxa1S%2B1uDqPw26okpNJWpaMIR6U5EUBsknAN4YijPao0Xqich6kQs2q7Yag%2Bs5S4j3bnBK9WJtIeNjGl5pTIDkeUK3MLVe%2BRZN%2FypGy%2FF4WgXIadMo81ucti%2BQt5o5I8Tq5JDT0F%2F%2Fb3jVsjEF%2FzbzIHVR40Y7V4w2h0RMAj6LSeBwwbg6EOqlyZK%2Fq9VYYF6xa&X-Amz-Signature=a9d40559e7a5527a9284b63506fedee8f08c3d5f671a8b84b3f23d0485d825d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHN2XRU6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5TRc4MJ02OOun8b37ptLjNoLQ%2FvxfYodBN%2F%2FToiqP5AiBBvTTJGVQdCWneV2Lzp5Vb1dGx6HXFks4NLWDi5TTn0Sr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMWTuxsRVA4i%2B%2BoJ3pKtwD6cDdVF%2FjxaBYC2IBHQVNVzVfwa%2B5ARAXSv3vE84oDfkBiMV4zeE92A%2FaY9S1j3F%2Bjacc%2F6Qr35%2FpgsGwIvEbZ%2FSKZEdusSemzm6dVwQMOq20EsF13tFw%2BEnbAp1odh%2FcRflt7KlKy82gLJCBtrzEldQPR1AnrAc7Xyf3NRtZgnRv7k5v4%2BGBWNEGmqNqmXgUxNgOJbarFAOjAQGvOyRfIrOpRsqb2%2BQ5MJsQPT6s6LxoWGNrnRXF699ulL4k2fS9TjgLGmWAL0yJyOJ7S7mRQYoqvhCO6pcxKxl%2FTBIhNv9b64guPNOte05umTf7%2FBPJOE2Udrruy5ecZ05wfqZSTqD57HZwb77lG%2FcGB%2FwP6t%2Bjy64YerHHoRxqx0YQygsjvmyXWKqtllwADPjR8Moi62G1U%2FALQ9Mrp2yXPz3GOzaKDVURKKJjLSUZKBVGRm3%2BcMNa1OOqHEF3KNLLWHuTS1qj70yEZ87nVpzaA5Jo9m3d%2FB4Et%2F1l7BT3oaAcw4sMvz7agAl5AwaTSIJbNW4fuez0W8nBNxAcQjSjKJ%2BMZT17AD8hQALISzEHufzSvlp%2B6BEuy%2FAacnLHPbGxHi7swC67zJtuxcxGXE3N57Yg5a0tR2iRxF2QXRxIeUowyZS8wAY6pgEuP9AnXWS%2FIGI4nn3hcCmg9cNU5uxa1S%2B1uDqPw26okpNJWpaMIR6U5EUBsknAN4YijPao0Xqich6kQs2q7Yag%2Bs5S4j3bnBK9WJtIeNjGl5pTIDkeUK3MLVe%2BRZN%2FypGy%2FF4WgXIadMo81ucti%2BQt5o5I8Tq5JDT0F%2F%2Fb3jVsjEF%2FzbzIHVR40Y7V4w2h0RMAj6LSeBwwbg6EOqlyZK%2Fq9VYYF6xa&X-Amz-Signature=a93b9acbac5fb16d95643e81f65ca26e7f8e6d4b61f86af0079e3b6111e5561f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHN2XRU6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5TRc4MJ02OOun8b37ptLjNoLQ%2FvxfYodBN%2F%2FToiqP5AiBBvTTJGVQdCWneV2Lzp5Vb1dGx6HXFks4NLWDi5TTn0Sr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMWTuxsRVA4i%2B%2BoJ3pKtwD6cDdVF%2FjxaBYC2IBHQVNVzVfwa%2B5ARAXSv3vE84oDfkBiMV4zeE92A%2FaY9S1j3F%2Bjacc%2F6Qr35%2FpgsGwIvEbZ%2FSKZEdusSemzm6dVwQMOq20EsF13tFw%2BEnbAp1odh%2FcRflt7KlKy82gLJCBtrzEldQPR1AnrAc7Xyf3NRtZgnRv7k5v4%2BGBWNEGmqNqmXgUxNgOJbarFAOjAQGvOyRfIrOpRsqb2%2BQ5MJsQPT6s6LxoWGNrnRXF699ulL4k2fS9TjgLGmWAL0yJyOJ7S7mRQYoqvhCO6pcxKxl%2FTBIhNv9b64guPNOte05umTf7%2FBPJOE2Udrruy5ecZ05wfqZSTqD57HZwb77lG%2FcGB%2FwP6t%2Bjy64YerHHoRxqx0YQygsjvmyXWKqtllwADPjR8Moi62G1U%2FALQ9Mrp2yXPz3GOzaKDVURKKJjLSUZKBVGRm3%2BcMNa1OOqHEF3KNLLWHuTS1qj70yEZ87nVpzaA5Jo9m3d%2FB4Et%2F1l7BT3oaAcw4sMvz7agAl5AwaTSIJbNW4fuez0W8nBNxAcQjSjKJ%2BMZT17AD8hQALISzEHufzSvlp%2B6BEuy%2FAacnLHPbGxHi7swC67zJtuxcxGXE3N57Yg5a0tR2iRxF2QXRxIeUowyZS8wAY6pgEuP9AnXWS%2FIGI4nn3hcCmg9cNU5uxa1S%2B1uDqPw26okpNJWpaMIR6U5EUBsknAN4YijPao0Xqich6kQs2q7Yag%2Bs5S4j3bnBK9WJtIeNjGl5pTIDkeUK3MLVe%2BRZN%2FypGy%2FF4WgXIadMo81ucti%2BQt5o5I8Tq5JDT0F%2F%2Fb3jVsjEF%2FzbzIHVR40Y7V4w2h0RMAj6LSeBwwbg6EOqlyZK%2Fq9VYYF6xa&X-Amz-Signature=0ec79e42fd82aec4cd7fe5d0921e25ecbb86142e32c20df9c2e492bf8f673dea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHN2XRU6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5TRc4MJ02OOun8b37ptLjNoLQ%2FvxfYodBN%2F%2FToiqP5AiBBvTTJGVQdCWneV2Lzp5Vb1dGx6HXFks4NLWDi5TTn0Sr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMWTuxsRVA4i%2B%2BoJ3pKtwD6cDdVF%2FjxaBYC2IBHQVNVzVfwa%2B5ARAXSv3vE84oDfkBiMV4zeE92A%2FaY9S1j3F%2Bjacc%2F6Qr35%2FpgsGwIvEbZ%2FSKZEdusSemzm6dVwQMOq20EsF13tFw%2BEnbAp1odh%2FcRflt7KlKy82gLJCBtrzEldQPR1AnrAc7Xyf3NRtZgnRv7k5v4%2BGBWNEGmqNqmXgUxNgOJbarFAOjAQGvOyRfIrOpRsqb2%2BQ5MJsQPT6s6LxoWGNrnRXF699ulL4k2fS9TjgLGmWAL0yJyOJ7S7mRQYoqvhCO6pcxKxl%2FTBIhNv9b64guPNOte05umTf7%2FBPJOE2Udrruy5ecZ05wfqZSTqD57HZwb77lG%2FcGB%2FwP6t%2Bjy64YerHHoRxqx0YQygsjvmyXWKqtllwADPjR8Moi62G1U%2FALQ9Mrp2yXPz3GOzaKDVURKKJjLSUZKBVGRm3%2BcMNa1OOqHEF3KNLLWHuTS1qj70yEZ87nVpzaA5Jo9m3d%2FB4Et%2F1l7BT3oaAcw4sMvz7agAl5AwaTSIJbNW4fuez0W8nBNxAcQjSjKJ%2BMZT17AD8hQALISzEHufzSvlp%2B6BEuy%2FAacnLHPbGxHi7swC67zJtuxcxGXE3N57Yg5a0tR2iRxF2QXRxIeUowyZS8wAY6pgEuP9AnXWS%2FIGI4nn3hcCmg9cNU5uxa1S%2B1uDqPw26okpNJWpaMIR6U5EUBsknAN4YijPao0Xqich6kQs2q7Yag%2Bs5S4j3bnBK9WJtIeNjGl5pTIDkeUK3MLVe%2BRZN%2FypGy%2FF4WgXIadMo81ucti%2BQt5o5I8Tq5JDT0F%2F%2Fb3jVsjEF%2FzbzIHVR40Y7V4w2h0RMAj6LSeBwwbg6EOqlyZK%2Fq9VYYF6xa&X-Amz-Signature=e163714bef4dda0b6a820cc29daef67b03420fab5c5c7016725a6fbdd144df18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHN2XRU6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5TRc4MJ02OOun8b37ptLjNoLQ%2FvxfYodBN%2F%2FToiqP5AiBBvTTJGVQdCWneV2Lzp5Vb1dGx6HXFks4NLWDi5TTn0Sr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMWTuxsRVA4i%2B%2BoJ3pKtwD6cDdVF%2FjxaBYC2IBHQVNVzVfwa%2B5ARAXSv3vE84oDfkBiMV4zeE92A%2FaY9S1j3F%2Bjacc%2F6Qr35%2FpgsGwIvEbZ%2FSKZEdusSemzm6dVwQMOq20EsF13tFw%2BEnbAp1odh%2FcRflt7KlKy82gLJCBtrzEldQPR1AnrAc7Xyf3NRtZgnRv7k5v4%2BGBWNEGmqNqmXgUxNgOJbarFAOjAQGvOyRfIrOpRsqb2%2BQ5MJsQPT6s6LxoWGNrnRXF699ulL4k2fS9TjgLGmWAL0yJyOJ7S7mRQYoqvhCO6pcxKxl%2FTBIhNv9b64guPNOte05umTf7%2FBPJOE2Udrruy5ecZ05wfqZSTqD57HZwb77lG%2FcGB%2FwP6t%2Bjy64YerHHoRxqx0YQygsjvmyXWKqtllwADPjR8Moi62G1U%2FALQ9Mrp2yXPz3GOzaKDVURKKJjLSUZKBVGRm3%2BcMNa1OOqHEF3KNLLWHuTS1qj70yEZ87nVpzaA5Jo9m3d%2FB4Et%2F1l7BT3oaAcw4sMvz7agAl5AwaTSIJbNW4fuez0W8nBNxAcQjSjKJ%2BMZT17AD8hQALISzEHufzSvlp%2B6BEuy%2FAacnLHPbGxHi7swC67zJtuxcxGXE3N57Yg5a0tR2iRxF2QXRxIeUowyZS8wAY6pgEuP9AnXWS%2FIGI4nn3hcCmg9cNU5uxa1S%2B1uDqPw26okpNJWpaMIR6U5EUBsknAN4YijPao0Xqich6kQs2q7Yag%2Bs5S4j3bnBK9WJtIeNjGl5pTIDkeUK3MLVe%2BRZN%2FypGy%2FF4WgXIadMo81ucti%2BQt5o5I8Tq5JDT0F%2F%2Fb3jVsjEF%2FzbzIHVR40Y7V4w2h0RMAj6LSeBwwbg6EOqlyZK%2Fq9VYYF6xa&X-Amz-Signature=f4cb7dea5811558fd71c12ef3c220a39c49db35ec5cf5aeba3fe59f6ef873063&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHN2XRU6%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5TRc4MJ02OOun8b37ptLjNoLQ%2FvxfYodBN%2F%2FToiqP5AiBBvTTJGVQdCWneV2Lzp5Vb1dGx6HXFks4NLWDi5TTn0Sr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMWTuxsRVA4i%2B%2BoJ3pKtwD6cDdVF%2FjxaBYC2IBHQVNVzVfwa%2B5ARAXSv3vE84oDfkBiMV4zeE92A%2FaY9S1j3F%2Bjacc%2F6Qr35%2FpgsGwIvEbZ%2FSKZEdusSemzm6dVwQMOq20EsF13tFw%2BEnbAp1odh%2FcRflt7KlKy82gLJCBtrzEldQPR1AnrAc7Xyf3NRtZgnRv7k5v4%2BGBWNEGmqNqmXgUxNgOJbarFAOjAQGvOyRfIrOpRsqb2%2BQ5MJsQPT6s6LxoWGNrnRXF699ulL4k2fS9TjgLGmWAL0yJyOJ7S7mRQYoqvhCO6pcxKxl%2FTBIhNv9b64guPNOte05umTf7%2FBPJOE2Udrruy5ecZ05wfqZSTqD57HZwb77lG%2FcGB%2FwP6t%2Bjy64YerHHoRxqx0YQygsjvmyXWKqtllwADPjR8Moi62G1U%2FALQ9Mrp2yXPz3GOzaKDVURKKJjLSUZKBVGRm3%2BcMNa1OOqHEF3KNLLWHuTS1qj70yEZ87nVpzaA5Jo9m3d%2FB4Et%2F1l7BT3oaAcw4sMvz7agAl5AwaTSIJbNW4fuez0W8nBNxAcQjSjKJ%2BMZT17AD8hQALISzEHufzSvlp%2B6BEuy%2FAacnLHPbGxHi7swC67zJtuxcxGXE3N57Yg5a0tR2iRxF2QXRxIeUowyZS8wAY6pgEuP9AnXWS%2FIGI4nn3hcCmg9cNU5uxa1S%2B1uDqPw26okpNJWpaMIR6U5EUBsknAN4YijPao0Xqich6kQs2q7Yag%2Bs5S4j3bnBK9WJtIeNjGl5pTIDkeUK3MLVe%2BRZN%2FypGy%2FF4WgXIadMo81ucti%2BQt5o5I8Tq5JDT0F%2F%2Fb3jVsjEF%2FzbzIHVR40Y7V4w2h0RMAj6LSeBwwbg6EOqlyZK%2Fq9VYYF6xa&X-Amz-Signature=60d5136deb669d095a836ccd837a4912e51b51e41011b79cd948390224537239&X-Amz-SignedHeaders=host&x-id=GetObject)
