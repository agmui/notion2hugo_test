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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GPII7R2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIA2HjGWU8s9pndyOrM2e1HZqSLIXsXlPpaGXCMNvMTfAAiAbbj3f6uLAriAwp5g3NkXRoxvWGto9SF9aUd5DTqvwaSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvTl2WcEiMmCT6sHMKtwDSsK%2B5Neq2QxQt%2F%2FiUSLo6Kj6SD%2BFb5q%2FYYxXIMAMq9NsB8WEv1VkwTUo6A1zcsIFiIvKKMahEfLbpBAFXZzcGNzyEbrCdLf7Uu%2B8Fvo9Sou82hGSYAca7tvtDhaGNdlD0LHX%2BPcIKgR9HSODya13ziWt%2B7ymIrzydoZRZOY5UEPtLFbYD08a9DuvNRSpAkQtdwG2ULoac2DisVsSnX536I2qPu9798VrNOQ8D5NCgmNtQyOZ82BzyzNwDvLaSpqkJHV2492WGW3A%2F1VoYrr2vAoKLXyd9MxyXIYJjjsO8SFJesetmw8E2327H9ROGAFLm8qgirMOThJ5%2FRCvoquNEl%2BlAV6LOPnEIknkcW2rVAQdeY%2FrgilJqG8RnRpVlI4YO9LIqeQpd2Wl6Zr7xPDnhauvkB0nrI0IbtDlnBh9D9O49TFOhI%2BZArPPDF0PJHntrMQlM3hu43F1x1OtEk3BO5Be7Qf1YZWnpoUUqLJGdr48kv8S5lkKO8T%2FdGid0C9e%2BtLWelDEXj5ITTSczB10oeCovsTr0wGh9GXokRk1OYv9sJ639xQQbkcdlaozWxch2iXItjPeEWzyWZPZYvBJ9u3YjytH6Lv7GhO51ISmTVqG%2BiF9aeWre2vZ5NIwmNnlvwY6pgG9mqkTP%2BCz7k%2BNtWueIW2x0WS%2BLwvyEZrirw5C6ydk1zDlPgDKSgX3pqKiLZLP%2Bl3ZY9fQoitqrDYqn%2BdEmLPuklCBOvYHW%2FdxsZ%2F%2BnUbimG3x3JkvgxPbFLgn%2FLYDm88GNLpLb1gJ8aZCpskDNNHH%2FA0Ptp%2FlQ9wB3H4AY82gx6KHJrtFE2uwB9IE69V%2B9XWpNMG8EdIQGbmWmb29bhplwTk4wkB6&X-Amz-Signature=98e11bfc80db19b629fc34444fadcc00928da843678ad0564511a4f2b14db5ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GPII7R2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIA2HjGWU8s9pndyOrM2e1HZqSLIXsXlPpaGXCMNvMTfAAiAbbj3f6uLAriAwp5g3NkXRoxvWGto9SF9aUd5DTqvwaSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvTl2WcEiMmCT6sHMKtwDSsK%2B5Neq2QxQt%2F%2FiUSLo6Kj6SD%2BFb5q%2FYYxXIMAMq9NsB8WEv1VkwTUo6A1zcsIFiIvKKMahEfLbpBAFXZzcGNzyEbrCdLf7Uu%2B8Fvo9Sou82hGSYAca7tvtDhaGNdlD0LHX%2BPcIKgR9HSODya13ziWt%2B7ymIrzydoZRZOY5UEPtLFbYD08a9DuvNRSpAkQtdwG2ULoac2DisVsSnX536I2qPu9798VrNOQ8D5NCgmNtQyOZ82BzyzNwDvLaSpqkJHV2492WGW3A%2F1VoYrr2vAoKLXyd9MxyXIYJjjsO8SFJesetmw8E2327H9ROGAFLm8qgirMOThJ5%2FRCvoquNEl%2BlAV6LOPnEIknkcW2rVAQdeY%2FrgilJqG8RnRpVlI4YO9LIqeQpd2Wl6Zr7xPDnhauvkB0nrI0IbtDlnBh9D9O49TFOhI%2BZArPPDF0PJHntrMQlM3hu43F1x1OtEk3BO5Be7Qf1YZWnpoUUqLJGdr48kv8S5lkKO8T%2FdGid0C9e%2BtLWelDEXj5ITTSczB10oeCovsTr0wGh9GXokRk1OYv9sJ639xQQbkcdlaozWxch2iXItjPeEWzyWZPZYvBJ9u3YjytH6Lv7GhO51ISmTVqG%2BiF9aeWre2vZ5NIwmNnlvwY6pgG9mqkTP%2BCz7k%2BNtWueIW2x0WS%2BLwvyEZrirw5C6ydk1zDlPgDKSgX3pqKiLZLP%2Bl3ZY9fQoitqrDYqn%2BdEmLPuklCBOvYHW%2FdxsZ%2F%2BnUbimG3x3JkvgxPbFLgn%2FLYDm88GNLpLb1gJ8aZCpskDNNHH%2FA0Ptp%2FlQ9wB3H4AY82gx6KHJrtFE2uwB9IE69V%2B9XWpNMG8EdIQGbmWmb29bhplwTk4wkB6&X-Amz-Signature=57c086171e862e5229fd02dfc017e74ef12af642a7288cf5dba8bed4116b96ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GPII7R2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIA2HjGWU8s9pndyOrM2e1HZqSLIXsXlPpaGXCMNvMTfAAiAbbj3f6uLAriAwp5g3NkXRoxvWGto9SF9aUd5DTqvwaSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvTl2WcEiMmCT6sHMKtwDSsK%2B5Neq2QxQt%2F%2FiUSLo6Kj6SD%2BFb5q%2FYYxXIMAMq9NsB8WEv1VkwTUo6A1zcsIFiIvKKMahEfLbpBAFXZzcGNzyEbrCdLf7Uu%2B8Fvo9Sou82hGSYAca7tvtDhaGNdlD0LHX%2BPcIKgR9HSODya13ziWt%2B7ymIrzydoZRZOY5UEPtLFbYD08a9DuvNRSpAkQtdwG2ULoac2DisVsSnX536I2qPu9798VrNOQ8D5NCgmNtQyOZ82BzyzNwDvLaSpqkJHV2492WGW3A%2F1VoYrr2vAoKLXyd9MxyXIYJjjsO8SFJesetmw8E2327H9ROGAFLm8qgirMOThJ5%2FRCvoquNEl%2BlAV6LOPnEIknkcW2rVAQdeY%2FrgilJqG8RnRpVlI4YO9LIqeQpd2Wl6Zr7xPDnhauvkB0nrI0IbtDlnBh9D9O49TFOhI%2BZArPPDF0PJHntrMQlM3hu43F1x1OtEk3BO5Be7Qf1YZWnpoUUqLJGdr48kv8S5lkKO8T%2FdGid0C9e%2BtLWelDEXj5ITTSczB10oeCovsTr0wGh9GXokRk1OYv9sJ639xQQbkcdlaozWxch2iXItjPeEWzyWZPZYvBJ9u3YjytH6Lv7GhO51ISmTVqG%2BiF9aeWre2vZ5NIwmNnlvwY6pgG9mqkTP%2BCz7k%2BNtWueIW2x0WS%2BLwvyEZrirw5C6ydk1zDlPgDKSgX3pqKiLZLP%2Bl3ZY9fQoitqrDYqn%2BdEmLPuklCBOvYHW%2FdxsZ%2F%2BnUbimG3x3JkvgxPbFLgn%2FLYDm88GNLpLb1gJ8aZCpskDNNHH%2FA0Ptp%2FlQ9wB3H4AY82gx6KHJrtFE2uwB9IE69V%2B9XWpNMG8EdIQGbmWmb29bhplwTk4wkB6&X-Amz-Signature=273e8f00ca33fc67abba084a2f4683fc370a43414f88e39b2f8d5337839db88d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GPII7R2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIA2HjGWU8s9pndyOrM2e1HZqSLIXsXlPpaGXCMNvMTfAAiAbbj3f6uLAriAwp5g3NkXRoxvWGto9SF9aUd5DTqvwaSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvTl2WcEiMmCT6sHMKtwDSsK%2B5Neq2QxQt%2F%2FiUSLo6Kj6SD%2BFb5q%2FYYxXIMAMq9NsB8WEv1VkwTUo6A1zcsIFiIvKKMahEfLbpBAFXZzcGNzyEbrCdLf7Uu%2B8Fvo9Sou82hGSYAca7tvtDhaGNdlD0LHX%2BPcIKgR9HSODya13ziWt%2B7ymIrzydoZRZOY5UEPtLFbYD08a9DuvNRSpAkQtdwG2ULoac2DisVsSnX536I2qPu9798VrNOQ8D5NCgmNtQyOZ82BzyzNwDvLaSpqkJHV2492WGW3A%2F1VoYrr2vAoKLXyd9MxyXIYJjjsO8SFJesetmw8E2327H9ROGAFLm8qgirMOThJ5%2FRCvoquNEl%2BlAV6LOPnEIknkcW2rVAQdeY%2FrgilJqG8RnRpVlI4YO9LIqeQpd2Wl6Zr7xPDnhauvkB0nrI0IbtDlnBh9D9O49TFOhI%2BZArPPDF0PJHntrMQlM3hu43F1x1OtEk3BO5Be7Qf1YZWnpoUUqLJGdr48kv8S5lkKO8T%2FdGid0C9e%2BtLWelDEXj5ITTSczB10oeCovsTr0wGh9GXokRk1OYv9sJ639xQQbkcdlaozWxch2iXItjPeEWzyWZPZYvBJ9u3YjytH6Lv7GhO51ISmTVqG%2BiF9aeWre2vZ5NIwmNnlvwY6pgG9mqkTP%2BCz7k%2BNtWueIW2x0WS%2BLwvyEZrirw5C6ydk1zDlPgDKSgX3pqKiLZLP%2Bl3ZY9fQoitqrDYqn%2BdEmLPuklCBOvYHW%2FdxsZ%2F%2BnUbimG3x3JkvgxPbFLgn%2FLYDm88GNLpLb1gJ8aZCpskDNNHH%2FA0Ptp%2FlQ9wB3H4AY82gx6KHJrtFE2uwB9IE69V%2B9XWpNMG8EdIQGbmWmb29bhplwTk4wkB6&X-Amz-Signature=a654772ab772f1fcd58857c66078b4cb1900cde11bb7e308a79a1f8f79d32934&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GPII7R2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIA2HjGWU8s9pndyOrM2e1HZqSLIXsXlPpaGXCMNvMTfAAiAbbj3f6uLAriAwp5g3NkXRoxvWGto9SF9aUd5DTqvwaSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvTl2WcEiMmCT6sHMKtwDSsK%2B5Neq2QxQt%2F%2FiUSLo6Kj6SD%2BFb5q%2FYYxXIMAMq9NsB8WEv1VkwTUo6A1zcsIFiIvKKMahEfLbpBAFXZzcGNzyEbrCdLf7Uu%2B8Fvo9Sou82hGSYAca7tvtDhaGNdlD0LHX%2BPcIKgR9HSODya13ziWt%2B7ymIrzydoZRZOY5UEPtLFbYD08a9DuvNRSpAkQtdwG2ULoac2DisVsSnX536I2qPu9798VrNOQ8D5NCgmNtQyOZ82BzyzNwDvLaSpqkJHV2492WGW3A%2F1VoYrr2vAoKLXyd9MxyXIYJjjsO8SFJesetmw8E2327H9ROGAFLm8qgirMOThJ5%2FRCvoquNEl%2BlAV6LOPnEIknkcW2rVAQdeY%2FrgilJqG8RnRpVlI4YO9LIqeQpd2Wl6Zr7xPDnhauvkB0nrI0IbtDlnBh9D9O49TFOhI%2BZArPPDF0PJHntrMQlM3hu43F1x1OtEk3BO5Be7Qf1YZWnpoUUqLJGdr48kv8S5lkKO8T%2FdGid0C9e%2BtLWelDEXj5ITTSczB10oeCovsTr0wGh9GXokRk1OYv9sJ639xQQbkcdlaozWxch2iXItjPeEWzyWZPZYvBJ9u3YjytH6Lv7GhO51ISmTVqG%2BiF9aeWre2vZ5NIwmNnlvwY6pgG9mqkTP%2BCz7k%2BNtWueIW2x0WS%2BLwvyEZrirw5C6ydk1zDlPgDKSgX3pqKiLZLP%2Bl3ZY9fQoitqrDYqn%2BdEmLPuklCBOvYHW%2FdxsZ%2F%2BnUbimG3x3JkvgxPbFLgn%2FLYDm88GNLpLb1gJ8aZCpskDNNHH%2FA0Ptp%2FlQ9wB3H4AY82gx6KHJrtFE2uwB9IE69V%2B9XWpNMG8EdIQGbmWmb29bhplwTk4wkB6&X-Amz-Signature=4eee9c237ed82afd492da3c4dd6a88fbdd2b95c5ab13a454a1d4780de1029319&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GPII7R2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIA2HjGWU8s9pndyOrM2e1HZqSLIXsXlPpaGXCMNvMTfAAiAbbj3f6uLAriAwp5g3NkXRoxvWGto9SF9aUd5DTqvwaSqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvTl2WcEiMmCT6sHMKtwDSsK%2B5Neq2QxQt%2F%2FiUSLo6Kj6SD%2BFb5q%2FYYxXIMAMq9NsB8WEv1VkwTUo6A1zcsIFiIvKKMahEfLbpBAFXZzcGNzyEbrCdLf7Uu%2B8Fvo9Sou82hGSYAca7tvtDhaGNdlD0LHX%2BPcIKgR9HSODya13ziWt%2B7ymIrzydoZRZOY5UEPtLFbYD08a9DuvNRSpAkQtdwG2ULoac2DisVsSnX536I2qPu9798VrNOQ8D5NCgmNtQyOZ82BzyzNwDvLaSpqkJHV2492WGW3A%2F1VoYrr2vAoKLXyd9MxyXIYJjjsO8SFJesetmw8E2327H9ROGAFLm8qgirMOThJ5%2FRCvoquNEl%2BlAV6LOPnEIknkcW2rVAQdeY%2FrgilJqG8RnRpVlI4YO9LIqeQpd2Wl6Zr7xPDnhauvkB0nrI0IbtDlnBh9D9O49TFOhI%2BZArPPDF0PJHntrMQlM3hu43F1x1OtEk3BO5Be7Qf1YZWnpoUUqLJGdr48kv8S5lkKO8T%2FdGid0C9e%2BtLWelDEXj5ITTSczB10oeCovsTr0wGh9GXokRk1OYv9sJ639xQQbkcdlaozWxch2iXItjPeEWzyWZPZYvBJ9u3YjytH6Lv7GhO51ISmTVqG%2BiF9aeWre2vZ5NIwmNnlvwY6pgG9mqkTP%2BCz7k%2BNtWueIW2x0WS%2BLwvyEZrirw5C6ydk1zDlPgDKSgX3pqKiLZLP%2Bl3ZY9fQoitqrDYqn%2BdEmLPuklCBOvYHW%2FdxsZ%2F%2BnUbimG3x3JkvgxPbFLgn%2FLYDm88GNLpLb1gJ8aZCpskDNNHH%2FA0Ptp%2FlQ9wB3H4AY82gx6KHJrtFE2uwB9IE69V%2B9XWpNMG8EdIQGbmWmb29bhplwTk4wkB6&X-Amz-Signature=c25e133b2aa1211b2800d37e5686a41b72c77bc29c2144a302e122dcd5324ac2&X-Amz-SignedHeaders=host&x-id=GetObject)
