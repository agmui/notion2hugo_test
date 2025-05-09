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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YARCHMN2%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBskHwIjew40TKYxdCxJLrjdWNMNw7l5NMNgT2c4Y3sAiEA7VM05B%2B%2BwzWpyvm7baekqoLnW368mKsn3n76Aexx2pgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGg4KZGXdduB3C8P8yrcA6YzLH3frGa4U9NxtNI6kh2WO7VsBUy2Yg49JOTvcieE1ewG4uXpYqttSTZCgQTPpBOdVSJsjdC6zdpWkAhz3fjJTaDIEH5cdmRyZ7L5otcp07lXJFkrVqPgV1u7TPnqneBlIs4D0TKEzpHm0MR8R8L%2BYS%2FqsaQ%2Bt%2Bg5a%2BYJJhxM62eHW0qfLdpE9S0zNbZg1AOGgAgRnw6q5u2%2B7xuzZajmfECq1%2FUL4KzVuEe5AL%2Fpj%2FF9E0QHuM4OHCgo2VmOUW5988qgbJl%2BMGc2uRsqfKVJRCW5WjQ5qYCqhRTTvBmmdbypx%2F486LAAqSG%2F35pa6A9axyH0o60Jyd4CnhqwESgLZ%2FM4WxLEWpbAZxjLGl4qoGgKQEz0o6yz311XivMMFdTM3zTkx7RZeGhPFDhUi%2BI%2F0yQ3jkmNOvuGDQsya2NavzGxbpcl9KYHb0nONpaHDQAliFd%2B7GTR3iLZ1h4xoKUaJLiqCvxlvlzoHEzG40fTBWYlsdn%2BDIQuTLdYXdkaV%2FPOJm%2F3n9O64ABXSicPYG46iGwGQX8tB6r9GF258EcQhcp2aR4n1u7CpFLeo7YkRIO6m249aCvUWhJM3eMan327UsFiDNuBGhB%2BtmB4XEbeuwFXq7cSnIEa1rJ3MPPM9cAGOqUBZSPBhiDnd6%2Fk%2BzsQc5W27JmrmNhm3LHF8U8%2FL%2FyyZcpMeRalxAFOBhQ0S882BHp9ryBKEKFLBzNMJG7dYic5e8b8t2%2FcTKbGgcTXOx62anmRh2TQo5Yo6sT9MyfLlqfZNr%2F39Nc0du7wWE7RkGS5S6mXWYHtejuvn3likXcCSb1i6WN%2FKOpBQ%2BUk9DlHyIM7ucrqteElbnCWfpDTlzcLea7Qu8ak&X-Amz-Signature=52e47893f529c852c0a90fae558629a18ba556fb9985bba08578a3a02e858d13&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YARCHMN2%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBskHwIjew40TKYxdCxJLrjdWNMNw7l5NMNgT2c4Y3sAiEA7VM05B%2B%2BwzWpyvm7baekqoLnW368mKsn3n76Aexx2pgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGg4KZGXdduB3C8P8yrcA6YzLH3frGa4U9NxtNI6kh2WO7VsBUy2Yg49JOTvcieE1ewG4uXpYqttSTZCgQTPpBOdVSJsjdC6zdpWkAhz3fjJTaDIEH5cdmRyZ7L5otcp07lXJFkrVqPgV1u7TPnqneBlIs4D0TKEzpHm0MR8R8L%2BYS%2FqsaQ%2Bt%2Bg5a%2BYJJhxM62eHW0qfLdpE9S0zNbZg1AOGgAgRnw6q5u2%2B7xuzZajmfECq1%2FUL4KzVuEe5AL%2Fpj%2FF9E0QHuM4OHCgo2VmOUW5988qgbJl%2BMGc2uRsqfKVJRCW5WjQ5qYCqhRTTvBmmdbypx%2F486LAAqSG%2F35pa6A9axyH0o60Jyd4CnhqwESgLZ%2FM4WxLEWpbAZxjLGl4qoGgKQEz0o6yz311XivMMFdTM3zTkx7RZeGhPFDhUi%2BI%2F0yQ3jkmNOvuGDQsya2NavzGxbpcl9KYHb0nONpaHDQAliFd%2B7GTR3iLZ1h4xoKUaJLiqCvxlvlzoHEzG40fTBWYlsdn%2BDIQuTLdYXdkaV%2FPOJm%2F3n9O64ABXSicPYG46iGwGQX8tB6r9GF258EcQhcp2aR4n1u7CpFLeo7YkRIO6m249aCvUWhJM3eMan327UsFiDNuBGhB%2BtmB4XEbeuwFXq7cSnIEa1rJ3MPPM9cAGOqUBZSPBhiDnd6%2Fk%2BzsQc5W27JmrmNhm3LHF8U8%2FL%2FyyZcpMeRalxAFOBhQ0S882BHp9ryBKEKFLBzNMJG7dYic5e8b8t2%2FcTKbGgcTXOx62anmRh2TQo5Yo6sT9MyfLlqfZNr%2F39Nc0du7wWE7RkGS5S6mXWYHtejuvn3likXcCSb1i6WN%2FKOpBQ%2BUk9DlHyIM7ucrqteElbnCWfpDTlzcLea7Qu8ak&X-Amz-Signature=a5268c147006b14e9f3421c8457d4918880cd3e957b808a641bc1d20f3369cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YARCHMN2%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBskHwIjew40TKYxdCxJLrjdWNMNw7l5NMNgT2c4Y3sAiEA7VM05B%2B%2BwzWpyvm7baekqoLnW368mKsn3n76Aexx2pgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGg4KZGXdduB3C8P8yrcA6YzLH3frGa4U9NxtNI6kh2WO7VsBUy2Yg49JOTvcieE1ewG4uXpYqttSTZCgQTPpBOdVSJsjdC6zdpWkAhz3fjJTaDIEH5cdmRyZ7L5otcp07lXJFkrVqPgV1u7TPnqneBlIs4D0TKEzpHm0MR8R8L%2BYS%2FqsaQ%2Bt%2Bg5a%2BYJJhxM62eHW0qfLdpE9S0zNbZg1AOGgAgRnw6q5u2%2B7xuzZajmfECq1%2FUL4KzVuEe5AL%2Fpj%2FF9E0QHuM4OHCgo2VmOUW5988qgbJl%2BMGc2uRsqfKVJRCW5WjQ5qYCqhRTTvBmmdbypx%2F486LAAqSG%2F35pa6A9axyH0o60Jyd4CnhqwESgLZ%2FM4WxLEWpbAZxjLGl4qoGgKQEz0o6yz311XivMMFdTM3zTkx7RZeGhPFDhUi%2BI%2F0yQ3jkmNOvuGDQsya2NavzGxbpcl9KYHb0nONpaHDQAliFd%2B7GTR3iLZ1h4xoKUaJLiqCvxlvlzoHEzG40fTBWYlsdn%2BDIQuTLdYXdkaV%2FPOJm%2F3n9O64ABXSicPYG46iGwGQX8tB6r9GF258EcQhcp2aR4n1u7CpFLeo7YkRIO6m249aCvUWhJM3eMan327UsFiDNuBGhB%2BtmB4XEbeuwFXq7cSnIEa1rJ3MPPM9cAGOqUBZSPBhiDnd6%2Fk%2BzsQc5W27JmrmNhm3LHF8U8%2FL%2FyyZcpMeRalxAFOBhQ0S882BHp9ryBKEKFLBzNMJG7dYic5e8b8t2%2FcTKbGgcTXOx62anmRh2TQo5Yo6sT9MyfLlqfZNr%2F39Nc0du7wWE7RkGS5S6mXWYHtejuvn3likXcCSb1i6WN%2FKOpBQ%2BUk9DlHyIM7ucrqteElbnCWfpDTlzcLea7Qu8ak&X-Amz-Signature=bf9e713ba2090bf7fcf0560e28a08124fc6f1625c80e528c73a3cb7d1f765948&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YARCHMN2%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBskHwIjew40TKYxdCxJLrjdWNMNw7l5NMNgT2c4Y3sAiEA7VM05B%2B%2BwzWpyvm7baekqoLnW368mKsn3n76Aexx2pgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGg4KZGXdduB3C8P8yrcA6YzLH3frGa4U9NxtNI6kh2WO7VsBUy2Yg49JOTvcieE1ewG4uXpYqttSTZCgQTPpBOdVSJsjdC6zdpWkAhz3fjJTaDIEH5cdmRyZ7L5otcp07lXJFkrVqPgV1u7TPnqneBlIs4D0TKEzpHm0MR8R8L%2BYS%2FqsaQ%2Bt%2Bg5a%2BYJJhxM62eHW0qfLdpE9S0zNbZg1AOGgAgRnw6q5u2%2B7xuzZajmfECq1%2FUL4KzVuEe5AL%2Fpj%2FF9E0QHuM4OHCgo2VmOUW5988qgbJl%2BMGc2uRsqfKVJRCW5WjQ5qYCqhRTTvBmmdbypx%2F486LAAqSG%2F35pa6A9axyH0o60Jyd4CnhqwESgLZ%2FM4WxLEWpbAZxjLGl4qoGgKQEz0o6yz311XivMMFdTM3zTkx7RZeGhPFDhUi%2BI%2F0yQ3jkmNOvuGDQsya2NavzGxbpcl9KYHb0nONpaHDQAliFd%2B7GTR3iLZ1h4xoKUaJLiqCvxlvlzoHEzG40fTBWYlsdn%2BDIQuTLdYXdkaV%2FPOJm%2F3n9O64ABXSicPYG46iGwGQX8tB6r9GF258EcQhcp2aR4n1u7CpFLeo7YkRIO6m249aCvUWhJM3eMan327UsFiDNuBGhB%2BtmB4XEbeuwFXq7cSnIEa1rJ3MPPM9cAGOqUBZSPBhiDnd6%2Fk%2BzsQc5W27JmrmNhm3LHF8U8%2FL%2FyyZcpMeRalxAFOBhQ0S882BHp9ryBKEKFLBzNMJG7dYic5e8b8t2%2FcTKbGgcTXOx62anmRh2TQo5Yo6sT9MyfLlqfZNr%2F39Nc0du7wWE7RkGS5S6mXWYHtejuvn3likXcCSb1i6WN%2FKOpBQ%2BUk9DlHyIM7ucrqteElbnCWfpDTlzcLea7Qu8ak&X-Amz-Signature=03a0f5cae75104c2d5c076e8e38f9fd1377c10d46ab4633348807879e85efee6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YARCHMN2%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBskHwIjew40TKYxdCxJLrjdWNMNw7l5NMNgT2c4Y3sAiEA7VM05B%2B%2BwzWpyvm7baekqoLnW368mKsn3n76Aexx2pgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGg4KZGXdduB3C8P8yrcA6YzLH3frGa4U9NxtNI6kh2WO7VsBUy2Yg49JOTvcieE1ewG4uXpYqttSTZCgQTPpBOdVSJsjdC6zdpWkAhz3fjJTaDIEH5cdmRyZ7L5otcp07lXJFkrVqPgV1u7TPnqneBlIs4D0TKEzpHm0MR8R8L%2BYS%2FqsaQ%2Bt%2Bg5a%2BYJJhxM62eHW0qfLdpE9S0zNbZg1AOGgAgRnw6q5u2%2B7xuzZajmfECq1%2FUL4KzVuEe5AL%2Fpj%2FF9E0QHuM4OHCgo2VmOUW5988qgbJl%2BMGc2uRsqfKVJRCW5WjQ5qYCqhRTTvBmmdbypx%2F486LAAqSG%2F35pa6A9axyH0o60Jyd4CnhqwESgLZ%2FM4WxLEWpbAZxjLGl4qoGgKQEz0o6yz311XivMMFdTM3zTkx7RZeGhPFDhUi%2BI%2F0yQ3jkmNOvuGDQsya2NavzGxbpcl9KYHb0nONpaHDQAliFd%2B7GTR3iLZ1h4xoKUaJLiqCvxlvlzoHEzG40fTBWYlsdn%2BDIQuTLdYXdkaV%2FPOJm%2F3n9O64ABXSicPYG46iGwGQX8tB6r9GF258EcQhcp2aR4n1u7CpFLeo7YkRIO6m249aCvUWhJM3eMan327UsFiDNuBGhB%2BtmB4XEbeuwFXq7cSnIEa1rJ3MPPM9cAGOqUBZSPBhiDnd6%2Fk%2BzsQc5W27JmrmNhm3LHF8U8%2FL%2FyyZcpMeRalxAFOBhQ0S882BHp9ryBKEKFLBzNMJG7dYic5e8b8t2%2FcTKbGgcTXOx62anmRh2TQo5Yo6sT9MyfLlqfZNr%2F39Nc0du7wWE7RkGS5S6mXWYHtejuvn3likXcCSb1i6WN%2FKOpBQ%2BUk9DlHyIM7ucrqteElbnCWfpDTlzcLea7Qu8ak&X-Amz-Signature=08d089406607f1fa894e937acaa2bca7fdf5bdfe7a933a5a177a14a2f9add677&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YARCHMN2%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBskHwIjew40TKYxdCxJLrjdWNMNw7l5NMNgT2c4Y3sAiEA7VM05B%2B%2BwzWpyvm7baekqoLnW368mKsn3n76Aexx2pgqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGg4KZGXdduB3C8P8yrcA6YzLH3frGa4U9NxtNI6kh2WO7VsBUy2Yg49JOTvcieE1ewG4uXpYqttSTZCgQTPpBOdVSJsjdC6zdpWkAhz3fjJTaDIEH5cdmRyZ7L5otcp07lXJFkrVqPgV1u7TPnqneBlIs4D0TKEzpHm0MR8R8L%2BYS%2FqsaQ%2Bt%2Bg5a%2BYJJhxM62eHW0qfLdpE9S0zNbZg1AOGgAgRnw6q5u2%2B7xuzZajmfECq1%2FUL4KzVuEe5AL%2Fpj%2FF9E0QHuM4OHCgo2VmOUW5988qgbJl%2BMGc2uRsqfKVJRCW5WjQ5qYCqhRTTvBmmdbypx%2F486LAAqSG%2F35pa6A9axyH0o60Jyd4CnhqwESgLZ%2FM4WxLEWpbAZxjLGl4qoGgKQEz0o6yz311XivMMFdTM3zTkx7RZeGhPFDhUi%2BI%2F0yQ3jkmNOvuGDQsya2NavzGxbpcl9KYHb0nONpaHDQAliFd%2B7GTR3iLZ1h4xoKUaJLiqCvxlvlzoHEzG40fTBWYlsdn%2BDIQuTLdYXdkaV%2FPOJm%2F3n9O64ABXSicPYG46iGwGQX8tB6r9GF258EcQhcp2aR4n1u7CpFLeo7YkRIO6m249aCvUWhJM3eMan327UsFiDNuBGhB%2BtmB4XEbeuwFXq7cSnIEa1rJ3MPPM9cAGOqUBZSPBhiDnd6%2Fk%2BzsQc5W27JmrmNhm3LHF8U8%2FL%2FyyZcpMeRalxAFOBhQ0S882BHp9ryBKEKFLBzNMJG7dYic5e8b8t2%2FcTKbGgcTXOx62anmRh2TQo5Yo6sT9MyfLlqfZNr%2F39Nc0du7wWE7RkGS5S6mXWYHtejuvn3likXcCSb1i6WN%2FKOpBQ%2BUk9DlHyIM7ucrqteElbnCWfpDTlzcLea7Qu8ak&X-Amz-Signature=3d0bdf54cd6f8c84b6fbea2265505185bfc19bc3b3d50c759737bd868664d5b7&X-Amz-SignedHeaders=host&x-id=GetObject)
