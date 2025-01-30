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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR37BN6K%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPYGWJSI9j7xE8iJ69b%2FcaeWnutE9243M7riYxbF0piAiAuvcJ5jkRfMI2uRNXB57XffqfqdZJStpI5tiOMy0jSsyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZEH4g9RtafGRbvKwKtwDE%2B9xfK71ZwkD581jwFcYc5noB8sb4%2FTGOGAKCRCTg1rBCnKBCUOMcWRe5ctkvKNxitppHxNQX%2BoHjusWh7dhJXYadY2TFHHNZdFW7lV2fqh8H%2FVAoZ2U%2BRyEX02icUJ35%2F2NFKhszKdju7%2FuWPVYlzbErczP2VuzDHkIRJd6l8aW8uZEIdnrb64z2%2B4JhGoy2gw4EwfnqDM7J2c2kxDzE6oZIFjnJmB445vPKxZAo6rgKF8kXGWu3ycQ0Bt47Jj6%2BeNtzoRiB5tVi8zI3FE06TDKOF93rtF1FjX%2BLJls%2FGC7ETscOlqoMCAxwrNWjeGXg%2BHwEcRsP8ZPe1YCauD2g%2BwCwRpBkNhlrXDxx0jKLVmOZ2D4HKfEM9HymQDNrQ3%2B9ZlzVmSyuuXPBK7lSJkVD%2FufXpXey5D%2BbN4GWK87RI7wVx21jaNwUEz0wnf4ou6Ts5Sx3Hd7gAS1PE7I1Eg1altL80REjwk963dpSTR9qBtVLcK6VDRWyhAnCcqvH69I0koC60wsm6YQ%2Bv5PkTRHrebSDXRKEb6Q2kd3MvKNnV7ciSjs9AWs0WRH1YXWQ%2B5HcDeHzWXFhEk%2Brnun6OqYuZy5bsdeTjgCWNiLn%2BZaOEhzTO5R4%2Fo1C0xtzvMw3fPuvAY6pgH6ICWzAHyDPOF1XTBLimmhbFeC6g2XgqSZZk1BIWzySS4eLHqdf1ZK6L1vwl2ThgRb6imBbrLAoZevbNvTO1vq4hCHb2v%2FG9E%2FMDx5Qj0DIdF9XOwevoUAP6JOCiUTTg1LwT2Tdm2rC8oaAWLHzZTdYEad357HIfM0XHyzRb8eMHO2y8ybry%2FHOB46Fga6K4AWJR3kp7e7pAELIwUKujJ4XB2M3B00&X-Amz-Signature=e5b47352560f67a07efb081d67095c2053dabd38d787e52f6570a4576f514c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR37BN6K%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPYGWJSI9j7xE8iJ69b%2FcaeWnutE9243M7riYxbF0piAiAuvcJ5jkRfMI2uRNXB57XffqfqdZJStpI5tiOMy0jSsyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZEH4g9RtafGRbvKwKtwDE%2B9xfK71ZwkD581jwFcYc5noB8sb4%2FTGOGAKCRCTg1rBCnKBCUOMcWRe5ctkvKNxitppHxNQX%2BoHjusWh7dhJXYadY2TFHHNZdFW7lV2fqh8H%2FVAoZ2U%2BRyEX02icUJ35%2F2NFKhszKdju7%2FuWPVYlzbErczP2VuzDHkIRJd6l8aW8uZEIdnrb64z2%2B4JhGoy2gw4EwfnqDM7J2c2kxDzE6oZIFjnJmB445vPKxZAo6rgKF8kXGWu3ycQ0Bt47Jj6%2BeNtzoRiB5tVi8zI3FE06TDKOF93rtF1FjX%2BLJls%2FGC7ETscOlqoMCAxwrNWjeGXg%2BHwEcRsP8ZPe1YCauD2g%2BwCwRpBkNhlrXDxx0jKLVmOZ2D4HKfEM9HymQDNrQ3%2B9ZlzVmSyuuXPBK7lSJkVD%2FufXpXey5D%2BbN4GWK87RI7wVx21jaNwUEz0wnf4ou6Ts5Sx3Hd7gAS1PE7I1Eg1altL80REjwk963dpSTR9qBtVLcK6VDRWyhAnCcqvH69I0koC60wsm6YQ%2Bv5PkTRHrebSDXRKEb6Q2kd3MvKNnV7ciSjs9AWs0WRH1YXWQ%2B5HcDeHzWXFhEk%2Brnun6OqYuZy5bsdeTjgCWNiLn%2BZaOEhzTO5R4%2Fo1C0xtzvMw3fPuvAY6pgH6ICWzAHyDPOF1XTBLimmhbFeC6g2XgqSZZk1BIWzySS4eLHqdf1ZK6L1vwl2ThgRb6imBbrLAoZevbNvTO1vq4hCHb2v%2FG9E%2FMDx5Qj0DIdF9XOwevoUAP6JOCiUTTg1LwT2Tdm2rC8oaAWLHzZTdYEad357HIfM0XHyzRb8eMHO2y8ybry%2FHOB46Fga6K4AWJR3kp7e7pAELIwUKujJ4XB2M3B00&X-Amz-Signature=6470d1b1dca234a2b639a54f65bcd81ee7ba4a18b7e486d571ec579867de47e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR37BN6K%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPYGWJSI9j7xE8iJ69b%2FcaeWnutE9243M7riYxbF0piAiAuvcJ5jkRfMI2uRNXB57XffqfqdZJStpI5tiOMy0jSsyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZEH4g9RtafGRbvKwKtwDE%2B9xfK71ZwkD581jwFcYc5noB8sb4%2FTGOGAKCRCTg1rBCnKBCUOMcWRe5ctkvKNxitppHxNQX%2BoHjusWh7dhJXYadY2TFHHNZdFW7lV2fqh8H%2FVAoZ2U%2BRyEX02icUJ35%2F2NFKhszKdju7%2FuWPVYlzbErczP2VuzDHkIRJd6l8aW8uZEIdnrb64z2%2B4JhGoy2gw4EwfnqDM7J2c2kxDzE6oZIFjnJmB445vPKxZAo6rgKF8kXGWu3ycQ0Bt47Jj6%2BeNtzoRiB5tVi8zI3FE06TDKOF93rtF1FjX%2BLJls%2FGC7ETscOlqoMCAxwrNWjeGXg%2BHwEcRsP8ZPe1YCauD2g%2BwCwRpBkNhlrXDxx0jKLVmOZ2D4HKfEM9HymQDNrQ3%2B9ZlzVmSyuuXPBK7lSJkVD%2FufXpXey5D%2BbN4GWK87RI7wVx21jaNwUEz0wnf4ou6Ts5Sx3Hd7gAS1PE7I1Eg1altL80REjwk963dpSTR9qBtVLcK6VDRWyhAnCcqvH69I0koC60wsm6YQ%2Bv5PkTRHrebSDXRKEb6Q2kd3MvKNnV7ciSjs9AWs0WRH1YXWQ%2B5HcDeHzWXFhEk%2Brnun6OqYuZy5bsdeTjgCWNiLn%2BZaOEhzTO5R4%2Fo1C0xtzvMw3fPuvAY6pgH6ICWzAHyDPOF1XTBLimmhbFeC6g2XgqSZZk1BIWzySS4eLHqdf1ZK6L1vwl2ThgRb6imBbrLAoZevbNvTO1vq4hCHb2v%2FG9E%2FMDx5Qj0DIdF9XOwevoUAP6JOCiUTTg1LwT2Tdm2rC8oaAWLHzZTdYEad357HIfM0XHyzRb8eMHO2y8ybry%2FHOB46Fga6K4AWJR3kp7e7pAELIwUKujJ4XB2M3B00&X-Amz-Signature=1189958a355415e4f94a6752feb3cec65e67099cdff4ee3339b523fddb13aac7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR37BN6K%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPYGWJSI9j7xE8iJ69b%2FcaeWnutE9243M7riYxbF0piAiAuvcJ5jkRfMI2uRNXB57XffqfqdZJStpI5tiOMy0jSsyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZEH4g9RtafGRbvKwKtwDE%2B9xfK71ZwkD581jwFcYc5noB8sb4%2FTGOGAKCRCTg1rBCnKBCUOMcWRe5ctkvKNxitppHxNQX%2BoHjusWh7dhJXYadY2TFHHNZdFW7lV2fqh8H%2FVAoZ2U%2BRyEX02icUJ35%2F2NFKhszKdju7%2FuWPVYlzbErczP2VuzDHkIRJd6l8aW8uZEIdnrb64z2%2B4JhGoy2gw4EwfnqDM7J2c2kxDzE6oZIFjnJmB445vPKxZAo6rgKF8kXGWu3ycQ0Bt47Jj6%2BeNtzoRiB5tVi8zI3FE06TDKOF93rtF1FjX%2BLJls%2FGC7ETscOlqoMCAxwrNWjeGXg%2BHwEcRsP8ZPe1YCauD2g%2BwCwRpBkNhlrXDxx0jKLVmOZ2D4HKfEM9HymQDNrQ3%2B9ZlzVmSyuuXPBK7lSJkVD%2FufXpXey5D%2BbN4GWK87RI7wVx21jaNwUEz0wnf4ou6Ts5Sx3Hd7gAS1PE7I1Eg1altL80REjwk963dpSTR9qBtVLcK6VDRWyhAnCcqvH69I0koC60wsm6YQ%2Bv5PkTRHrebSDXRKEb6Q2kd3MvKNnV7ciSjs9AWs0WRH1YXWQ%2B5HcDeHzWXFhEk%2Brnun6OqYuZy5bsdeTjgCWNiLn%2BZaOEhzTO5R4%2Fo1C0xtzvMw3fPuvAY6pgH6ICWzAHyDPOF1XTBLimmhbFeC6g2XgqSZZk1BIWzySS4eLHqdf1ZK6L1vwl2ThgRb6imBbrLAoZevbNvTO1vq4hCHb2v%2FG9E%2FMDx5Qj0DIdF9XOwevoUAP6JOCiUTTg1LwT2Tdm2rC8oaAWLHzZTdYEad357HIfM0XHyzRb8eMHO2y8ybry%2FHOB46Fga6K4AWJR3kp7e7pAELIwUKujJ4XB2M3B00&X-Amz-Signature=1da2d5a61bfa70108b82b5e23b01327977ccb13486f8226295581662c5d87dd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR37BN6K%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPYGWJSI9j7xE8iJ69b%2FcaeWnutE9243M7riYxbF0piAiAuvcJ5jkRfMI2uRNXB57XffqfqdZJStpI5tiOMy0jSsyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZEH4g9RtafGRbvKwKtwDE%2B9xfK71ZwkD581jwFcYc5noB8sb4%2FTGOGAKCRCTg1rBCnKBCUOMcWRe5ctkvKNxitppHxNQX%2BoHjusWh7dhJXYadY2TFHHNZdFW7lV2fqh8H%2FVAoZ2U%2BRyEX02icUJ35%2F2NFKhszKdju7%2FuWPVYlzbErczP2VuzDHkIRJd6l8aW8uZEIdnrb64z2%2B4JhGoy2gw4EwfnqDM7J2c2kxDzE6oZIFjnJmB445vPKxZAo6rgKF8kXGWu3ycQ0Bt47Jj6%2BeNtzoRiB5tVi8zI3FE06TDKOF93rtF1FjX%2BLJls%2FGC7ETscOlqoMCAxwrNWjeGXg%2BHwEcRsP8ZPe1YCauD2g%2BwCwRpBkNhlrXDxx0jKLVmOZ2D4HKfEM9HymQDNrQ3%2B9ZlzVmSyuuXPBK7lSJkVD%2FufXpXey5D%2BbN4GWK87RI7wVx21jaNwUEz0wnf4ou6Ts5Sx3Hd7gAS1PE7I1Eg1altL80REjwk963dpSTR9qBtVLcK6VDRWyhAnCcqvH69I0koC60wsm6YQ%2Bv5PkTRHrebSDXRKEb6Q2kd3MvKNnV7ciSjs9AWs0WRH1YXWQ%2B5HcDeHzWXFhEk%2Brnun6OqYuZy5bsdeTjgCWNiLn%2BZaOEhzTO5R4%2Fo1C0xtzvMw3fPuvAY6pgH6ICWzAHyDPOF1XTBLimmhbFeC6g2XgqSZZk1BIWzySS4eLHqdf1ZK6L1vwl2ThgRb6imBbrLAoZevbNvTO1vq4hCHb2v%2FG9E%2FMDx5Qj0DIdF9XOwevoUAP6JOCiUTTg1LwT2Tdm2rC8oaAWLHzZTdYEad357HIfM0XHyzRb8eMHO2y8ybry%2FHOB46Fga6K4AWJR3kp7e7pAELIwUKujJ4XB2M3B00&X-Amz-Signature=42614e49f768af33c734bc2add33084901b2e06cdbc2ca6c91d1386bcc2f5168&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR37BN6K%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T181011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPYGWJSI9j7xE8iJ69b%2FcaeWnutE9243M7riYxbF0piAiAuvcJ5jkRfMI2uRNXB57XffqfqdZJStpI5tiOMy0jSsyqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZEH4g9RtafGRbvKwKtwDE%2B9xfK71ZwkD581jwFcYc5noB8sb4%2FTGOGAKCRCTg1rBCnKBCUOMcWRe5ctkvKNxitppHxNQX%2BoHjusWh7dhJXYadY2TFHHNZdFW7lV2fqh8H%2FVAoZ2U%2BRyEX02icUJ35%2F2NFKhszKdju7%2FuWPVYlzbErczP2VuzDHkIRJd6l8aW8uZEIdnrb64z2%2B4JhGoy2gw4EwfnqDM7J2c2kxDzE6oZIFjnJmB445vPKxZAo6rgKF8kXGWu3ycQ0Bt47Jj6%2BeNtzoRiB5tVi8zI3FE06TDKOF93rtF1FjX%2BLJls%2FGC7ETscOlqoMCAxwrNWjeGXg%2BHwEcRsP8ZPe1YCauD2g%2BwCwRpBkNhlrXDxx0jKLVmOZ2D4HKfEM9HymQDNrQ3%2B9ZlzVmSyuuXPBK7lSJkVD%2FufXpXey5D%2BbN4GWK87RI7wVx21jaNwUEz0wnf4ou6Ts5Sx3Hd7gAS1PE7I1Eg1altL80REjwk963dpSTR9qBtVLcK6VDRWyhAnCcqvH69I0koC60wsm6YQ%2Bv5PkTRHrebSDXRKEb6Q2kd3MvKNnV7ciSjs9AWs0WRH1YXWQ%2B5HcDeHzWXFhEk%2Brnun6OqYuZy5bsdeTjgCWNiLn%2BZaOEhzTO5R4%2Fo1C0xtzvMw3fPuvAY6pgH6ICWzAHyDPOF1XTBLimmhbFeC6g2XgqSZZk1BIWzySS4eLHqdf1ZK6L1vwl2ThgRb6imBbrLAoZevbNvTO1vq4hCHb2v%2FG9E%2FMDx5Qj0DIdF9XOwevoUAP6JOCiUTTg1LwT2Tdm2rC8oaAWLHzZTdYEad357HIfM0XHyzRb8eMHO2y8ybry%2FHOB46Fga6K4AWJR3kp7e7pAELIwUKujJ4XB2M3B00&X-Amz-Signature=451ec5513ae49286e2787d244415284754d45e5bd0ace919a5a1446a62c908ac&X-Amz-SignedHeaders=host&x-id=GetObject)
