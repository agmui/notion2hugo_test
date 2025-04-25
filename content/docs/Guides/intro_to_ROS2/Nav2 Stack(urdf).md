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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCAQ4BZV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqWVLQSERBl2KFk%2BRPKLG%2FhCSNf3gUqzImMSAj7ICgbAiBWUL3ap63es5w7kqHFT7WAURNiiuS%2B09QBGJDsPa8MPyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMBLqqhklZtonqj788KtwDwAsUb5IAuHSHcf0afClbl1J0WGuRTFZPZYFAKF%2BN0VAxyuRjQ9Z659Wv1ZxBEWhTiqIc3vqVKbvEpBkwSWUBkBUP6v41ZFHd4KYb%2Fz6dj2%2FeMnVPjvZRghQYBfc1Bdv1aIm2hBP5xcM3Uohv6Zw7nl35qySpiyrnhyc1YGAsQLcbgHAITpGZSRc4%2B4sSQ%2FUjhDI19knZ0xSnJQUryn5NF8slWtW6x9By5BhKh4Tg1jDRaMsuy94jsa6FQptihcfqFGsd7QG3S7km8W%2FF%2B9noP5mdAEVkojHw1uw8vTg4J0vyX7oCssetuxtOcH5My8zTnVSR3CntSZcfn9sRZr%2F0Go%2F85DY5TtBZFo5%2FST1oVDFw8EJzJ%2FRPCF401yV4vOqZBzCfBe18nRuopcYLPoYcMBQrCIriAA3YZDGMxO8R7hWS70Fow7t492Mvm6ecsTEL0MIFVFoRL4fHzqfFQRtEWe4x20BIpqt8f5RYM5cCWyIfBQWhe8rryzE3lv7qCMTG8XuyL3P3%2BdXTZ6yWK3frGBnmrlqYlUIg0X%2BHZpRbKChkRKeqSLHnKV4mF0A%2FAJpAp5UtPjeUK6wxIwHF25AaK7DOsabJVYWNENEJJSneIzlNb%2BQoYSaX06a1PNYw%2FOOtwAY6pgF1gR9q0TzsZjKBS%2BtQh3J4h0HU1QB8Ii2Xs1GnevGJRcQ7N5xTl5zsnXn1O5sC1DfIdfXzCN4w7NhXFjd0I7DZFZMSAFxPWU5X73xOoqkWYyTzjaRcsp99Y4uMLxa9qrb85sNBcWxuasnpQh4gV54A9Wik9e472TTwUErZ4CKrjmgk7NM7JPyqW1RbzNqif27wCIavuMYkM5r%2FvsAr2ZGkTO2tHqP1&X-Amz-Signature=fb6d6a5254d691e57defb6da67a2db62960ef9fcbbba72451df49abf91acb21a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCAQ4BZV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqWVLQSERBl2KFk%2BRPKLG%2FhCSNf3gUqzImMSAj7ICgbAiBWUL3ap63es5w7kqHFT7WAURNiiuS%2B09QBGJDsPa8MPyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMBLqqhklZtonqj788KtwDwAsUb5IAuHSHcf0afClbl1J0WGuRTFZPZYFAKF%2BN0VAxyuRjQ9Z659Wv1ZxBEWhTiqIc3vqVKbvEpBkwSWUBkBUP6v41ZFHd4KYb%2Fz6dj2%2FeMnVPjvZRghQYBfc1Bdv1aIm2hBP5xcM3Uohv6Zw7nl35qySpiyrnhyc1YGAsQLcbgHAITpGZSRc4%2B4sSQ%2FUjhDI19knZ0xSnJQUryn5NF8slWtW6x9By5BhKh4Tg1jDRaMsuy94jsa6FQptihcfqFGsd7QG3S7km8W%2FF%2B9noP5mdAEVkojHw1uw8vTg4J0vyX7oCssetuxtOcH5My8zTnVSR3CntSZcfn9sRZr%2F0Go%2F85DY5TtBZFo5%2FST1oVDFw8EJzJ%2FRPCF401yV4vOqZBzCfBe18nRuopcYLPoYcMBQrCIriAA3YZDGMxO8R7hWS70Fow7t492Mvm6ecsTEL0MIFVFoRL4fHzqfFQRtEWe4x20BIpqt8f5RYM5cCWyIfBQWhe8rryzE3lv7qCMTG8XuyL3P3%2BdXTZ6yWK3frGBnmrlqYlUIg0X%2BHZpRbKChkRKeqSLHnKV4mF0A%2FAJpAp5UtPjeUK6wxIwHF25AaK7DOsabJVYWNENEJJSneIzlNb%2BQoYSaX06a1PNYw%2FOOtwAY6pgF1gR9q0TzsZjKBS%2BtQh3J4h0HU1QB8Ii2Xs1GnevGJRcQ7N5xTl5zsnXn1O5sC1DfIdfXzCN4w7NhXFjd0I7DZFZMSAFxPWU5X73xOoqkWYyTzjaRcsp99Y4uMLxa9qrb85sNBcWxuasnpQh4gV54A9Wik9e472TTwUErZ4CKrjmgk7NM7JPyqW1RbzNqif27wCIavuMYkM5r%2FvsAr2ZGkTO2tHqP1&X-Amz-Signature=0df5e143ffb2f3cf97a7fdb032a8044bf5dfe18e96a7fccb16b1631afb07ae88&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCAQ4BZV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqWVLQSERBl2KFk%2BRPKLG%2FhCSNf3gUqzImMSAj7ICgbAiBWUL3ap63es5w7kqHFT7WAURNiiuS%2B09QBGJDsPa8MPyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMBLqqhklZtonqj788KtwDwAsUb5IAuHSHcf0afClbl1J0WGuRTFZPZYFAKF%2BN0VAxyuRjQ9Z659Wv1ZxBEWhTiqIc3vqVKbvEpBkwSWUBkBUP6v41ZFHd4KYb%2Fz6dj2%2FeMnVPjvZRghQYBfc1Bdv1aIm2hBP5xcM3Uohv6Zw7nl35qySpiyrnhyc1YGAsQLcbgHAITpGZSRc4%2B4sSQ%2FUjhDI19knZ0xSnJQUryn5NF8slWtW6x9By5BhKh4Tg1jDRaMsuy94jsa6FQptihcfqFGsd7QG3S7km8W%2FF%2B9noP5mdAEVkojHw1uw8vTg4J0vyX7oCssetuxtOcH5My8zTnVSR3CntSZcfn9sRZr%2F0Go%2F85DY5TtBZFo5%2FST1oVDFw8EJzJ%2FRPCF401yV4vOqZBzCfBe18nRuopcYLPoYcMBQrCIriAA3YZDGMxO8R7hWS70Fow7t492Mvm6ecsTEL0MIFVFoRL4fHzqfFQRtEWe4x20BIpqt8f5RYM5cCWyIfBQWhe8rryzE3lv7qCMTG8XuyL3P3%2BdXTZ6yWK3frGBnmrlqYlUIg0X%2BHZpRbKChkRKeqSLHnKV4mF0A%2FAJpAp5UtPjeUK6wxIwHF25AaK7DOsabJVYWNENEJJSneIzlNb%2BQoYSaX06a1PNYw%2FOOtwAY6pgF1gR9q0TzsZjKBS%2BtQh3J4h0HU1QB8Ii2Xs1GnevGJRcQ7N5xTl5zsnXn1O5sC1DfIdfXzCN4w7NhXFjd0I7DZFZMSAFxPWU5X73xOoqkWYyTzjaRcsp99Y4uMLxa9qrb85sNBcWxuasnpQh4gV54A9Wik9e472TTwUErZ4CKrjmgk7NM7JPyqW1RbzNqif27wCIavuMYkM5r%2FvsAr2ZGkTO2tHqP1&X-Amz-Signature=0a3d5b952fcf09908313304c58570a54ee5b6efd87f35e48d27443d539df2a34&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCAQ4BZV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqWVLQSERBl2KFk%2BRPKLG%2FhCSNf3gUqzImMSAj7ICgbAiBWUL3ap63es5w7kqHFT7WAURNiiuS%2B09QBGJDsPa8MPyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMBLqqhklZtonqj788KtwDwAsUb5IAuHSHcf0afClbl1J0WGuRTFZPZYFAKF%2BN0VAxyuRjQ9Z659Wv1ZxBEWhTiqIc3vqVKbvEpBkwSWUBkBUP6v41ZFHd4KYb%2Fz6dj2%2FeMnVPjvZRghQYBfc1Bdv1aIm2hBP5xcM3Uohv6Zw7nl35qySpiyrnhyc1YGAsQLcbgHAITpGZSRc4%2B4sSQ%2FUjhDI19knZ0xSnJQUryn5NF8slWtW6x9By5BhKh4Tg1jDRaMsuy94jsa6FQptihcfqFGsd7QG3S7km8W%2FF%2B9noP5mdAEVkojHw1uw8vTg4J0vyX7oCssetuxtOcH5My8zTnVSR3CntSZcfn9sRZr%2F0Go%2F85DY5TtBZFo5%2FST1oVDFw8EJzJ%2FRPCF401yV4vOqZBzCfBe18nRuopcYLPoYcMBQrCIriAA3YZDGMxO8R7hWS70Fow7t492Mvm6ecsTEL0MIFVFoRL4fHzqfFQRtEWe4x20BIpqt8f5RYM5cCWyIfBQWhe8rryzE3lv7qCMTG8XuyL3P3%2BdXTZ6yWK3frGBnmrlqYlUIg0X%2BHZpRbKChkRKeqSLHnKV4mF0A%2FAJpAp5UtPjeUK6wxIwHF25AaK7DOsabJVYWNENEJJSneIzlNb%2BQoYSaX06a1PNYw%2FOOtwAY6pgF1gR9q0TzsZjKBS%2BtQh3J4h0HU1QB8Ii2Xs1GnevGJRcQ7N5xTl5zsnXn1O5sC1DfIdfXzCN4w7NhXFjd0I7DZFZMSAFxPWU5X73xOoqkWYyTzjaRcsp99Y4uMLxa9qrb85sNBcWxuasnpQh4gV54A9Wik9e472TTwUErZ4CKrjmgk7NM7JPyqW1RbzNqif27wCIavuMYkM5r%2FvsAr2ZGkTO2tHqP1&X-Amz-Signature=87c86ba73a1c064888c78def726e805bcf0870a51bd385c9735ec1e76d4f00d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCAQ4BZV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqWVLQSERBl2KFk%2BRPKLG%2FhCSNf3gUqzImMSAj7ICgbAiBWUL3ap63es5w7kqHFT7WAURNiiuS%2B09QBGJDsPa8MPyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMBLqqhklZtonqj788KtwDwAsUb5IAuHSHcf0afClbl1J0WGuRTFZPZYFAKF%2BN0VAxyuRjQ9Z659Wv1ZxBEWhTiqIc3vqVKbvEpBkwSWUBkBUP6v41ZFHd4KYb%2Fz6dj2%2FeMnVPjvZRghQYBfc1Bdv1aIm2hBP5xcM3Uohv6Zw7nl35qySpiyrnhyc1YGAsQLcbgHAITpGZSRc4%2B4sSQ%2FUjhDI19knZ0xSnJQUryn5NF8slWtW6x9By5BhKh4Tg1jDRaMsuy94jsa6FQptihcfqFGsd7QG3S7km8W%2FF%2B9noP5mdAEVkojHw1uw8vTg4J0vyX7oCssetuxtOcH5My8zTnVSR3CntSZcfn9sRZr%2F0Go%2F85DY5TtBZFo5%2FST1oVDFw8EJzJ%2FRPCF401yV4vOqZBzCfBe18nRuopcYLPoYcMBQrCIriAA3YZDGMxO8R7hWS70Fow7t492Mvm6ecsTEL0MIFVFoRL4fHzqfFQRtEWe4x20BIpqt8f5RYM5cCWyIfBQWhe8rryzE3lv7qCMTG8XuyL3P3%2BdXTZ6yWK3frGBnmrlqYlUIg0X%2BHZpRbKChkRKeqSLHnKV4mF0A%2FAJpAp5UtPjeUK6wxIwHF25AaK7DOsabJVYWNENEJJSneIzlNb%2BQoYSaX06a1PNYw%2FOOtwAY6pgF1gR9q0TzsZjKBS%2BtQh3J4h0HU1QB8Ii2Xs1GnevGJRcQ7N5xTl5zsnXn1O5sC1DfIdfXzCN4w7NhXFjd0I7DZFZMSAFxPWU5X73xOoqkWYyTzjaRcsp99Y4uMLxa9qrb85sNBcWxuasnpQh4gV54A9Wik9e472TTwUErZ4CKrjmgk7NM7JPyqW1RbzNqif27wCIavuMYkM5r%2FvsAr2ZGkTO2tHqP1&X-Amz-Signature=ff036e0e3e69c3247554634c6f4d7d6918dc5fc4fc285a036a05452f3fbe94a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCAQ4BZV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBqWVLQSERBl2KFk%2BRPKLG%2FhCSNf3gUqzImMSAj7ICgbAiBWUL3ap63es5w7kqHFT7WAURNiiuS%2B09QBGJDsPa8MPyr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMBLqqhklZtonqj788KtwDwAsUb5IAuHSHcf0afClbl1J0WGuRTFZPZYFAKF%2BN0VAxyuRjQ9Z659Wv1ZxBEWhTiqIc3vqVKbvEpBkwSWUBkBUP6v41ZFHd4KYb%2Fz6dj2%2FeMnVPjvZRghQYBfc1Bdv1aIm2hBP5xcM3Uohv6Zw7nl35qySpiyrnhyc1YGAsQLcbgHAITpGZSRc4%2B4sSQ%2FUjhDI19knZ0xSnJQUryn5NF8slWtW6x9By5BhKh4Tg1jDRaMsuy94jsa6FQptihcfqFGsd7QG3S7km8W%2FF%2B9noP5mdAEVkojHw1uw8vTg4J0vyX7oCssetuxtOcH5My8zTnVSR3CntSZcfn9sRZr%2F0Go%2F85DY5TtBZFo5%2FST1oVDFw8EJzJ%2FRPCF401yV4vOqZBzCfBe18nRuopcYLPoYcMBQrCIriAA3YZDGMxO8R7hWS70Fow7t492Mvm6ecsTEL0MIFVFoRL4fHzqfFQRtEWe4x20BIpqt8f5RYM5cCWyIfBQWhe8rryzE3lv7qCMTG8XuyL3P3%2BdXTZ6yWK3frGBnmrlqYlUIg0X%2BHZpRbKChkRKeqSLHnKV4mF0A%2FAJpAp5UtPjeUK6wxIwHF25AaK7DOsabJVYWNENEJJSneIzlNb%2BQoYSaX06a1PNYw%2FOOtwAY6pgF1gR9q0TzsZjKBS%2BtQh3J4h0HU1QB8Ii2Xs1GnevGJRcQ7N5xTl5zsnXn1O5sC1DfIdfXzCN4w7NhXFjd0I7DZFZMSAFxPWU5X73xOoqkWYyTzjaRcsp99Y4uMLxa9qrb85sNBcWxuasnpQh4gV54A9Wik9e472TTwUErZ4CKrjmgk7NM7JPyqW1RbzNqif27wCIavuMYkM5r%2FvsAr2ZGkTO2tHqP1&X-Amz-Signature=056f6267f1ec73831f639a064fa31413a0c478fbad0af33f0039c1ae3e7f2201&X-Amz-SignedHeaders=host&x-id=GetObject)
