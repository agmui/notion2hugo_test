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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NGGGE7U%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1VjzpBUDDIbexeui3ngFG8XuecVj8BGBaVIokvt5qYAiAvj9v3Gw1VF1nr5Gcl0ovFylO3%2F8KGEDQ30CaCLgtaFyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMf0dqaQAt%2BXRdfSKtwDRpvL4P46Y9FJohGDatULePIeEpJpR30toRKU2WoAE%2F5Q2YZi%2FVIIhlwHwBZIZTIq2nbQk9YCVuk887OKICUgyQvpdg248wIjeFWy0D8iIWyKINGxcTDX93fWg5OV9rzqJOUlQtf%2BxBG1iyBCqDX3Toxgdcz2hK7zaaFA3RCtpZG2PckKRAZZevq%2BmaAqE7Y%2BiDWEiSPpnzyxugy%2B2VWOqmgMftPEFz3lrUEAB6BjSrfQlPul02q%2BoCk3zgyLd%2F%2Fgg1KVCUkiHJmMzVD9Z6FToe9G9QgP5u4upAZZ2k4cQv7ItX89Ubm8FD8uZiAi0sslCxjeDZAPQOvcH7vmvdvcuAoU%2FYg3bmJawU6LMMVy04vKpaaK%2FY0DYMhrVbti4zw2VWxwvBvV%2F%2FQ0Jj%2BpzJcOXqzuQYdCigS0jrngSDpzet3GI%2F%2FsHI6qkJk%2Bqu94mnM2iF6TTzZok%2FI%2BLI4nEvX34qhFQgxa%2BNyXgXHlfAVEPx%2FuKRbXgVoPADbrIJ9qfoNcliN8ZHXJqgKJ4yNA%2FwCSXyo2mNZPKQqU%2BWsq85d2GE2NAry%2B0QV%2BxENPPl7Y5IAGlptgCQiTQesrTEqjhYjYo%2FxWqTKxXBxbOcjBqPIqa6ua95bHRdd8WmZrBv8wyq%2F2wAY6pgFUcESQ%2FXSF9k7XCgKTxXLm9ngcKtok%2FFoahfyEPEV9GbWyWbdbZ0BnVVG6wsGCGMb%2BMPyLoKa%2BwZaLI5OkE3sVRHkBAF4zjORUmVgjqhaFuyfFPjmEuLlKxbtZNl2iKA%2BsbLharNybRXq5QJfCpllvL7%2Bjz%2F2sGAiCx7n5Y8Hxt9qRiK6LI1grBwI4y9XAU20v9lQnkhtESnJ24gne0Iv0pRDuLlRb&X-Amz-Signature=f8034020bcfa82a0f452329363bbb3d8be6038888e1436c209ad17b02452af5a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NGGGE7U%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1VjzpBUDDIbexeui3ngFG8XuecVj8BGBaVIokvt5qYAiAvj9v3Gw1VF1nr5Gcl0ovFylO3%2F8KGEDQ30CaCLgtaFyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMf0dqaQAt%2BXRdfSKtwDRpvL4P46Y9FJohGDatULePIeEpJpR30toRKU2WoAE%2F5Q2YZi%2FVIIhlwHwBZIZTIq2nbQk9YCVuk887OKICUgyQvpdg248wIjeFWy0D8iIWyKINGxcTDX93fWg5OV9rzqJOUlQtf%2BxBG1iyBCqDX3Toxgdcz2hK7zaaFA3RCtpZG2PckKRAZZevq%2BmaAqE7Y%2BiDWEiSPpnzyxugy%2B2VWOqmgMftPEFz3lrUEAB6BjSrfQlPul02q%2BoCk3zgyLd%2F%2Fgg1KVCUkiHJmMzVD9Z6FToe9G9QgP5u4upAZZ2k4cQv7ItX89Ubm8FD8uZiAi0sslCxjeDZAPQOvcH7vmvdvcuAoU%2FYg3bmJawU6LMMVy04vKpaaK%2FY0DYMhrVbti4zw2VWxwvBvV%2F%2FQ0Jj%2BpzJcOXqzuQYdCigS0jrngSDpzet3GI%2F%2FsHI6qkJk%2Bqu94mnM2iF6TTzZok%2FI%2BLI4nEvX34qhFQgxa%2BNyXgXHlfAVEPx%2FuKRbXgVoPADbrIJ9qfoNcliN8ZHXJqgKJ4yNA%2FwCSXyo2mNZPKQqU%2BWsq85d2GE2NAry%2B0QV%2BxENPPl7Y5IAGlptgCQiTQesrTEqjhYjYo%2FxWqTKxXBxbOcjBqPIqa6ua95bHRdd8WmZrBv8wyq%2F2wAY6pgFUcESQ%2FXSF9k7XCgKTxXLm9ngcKtok%2FFoahfyEPEV9GbWyWbdbZ0BnVVG6wsGCGMb%2BMPyLoKa%2BwZaLI5OkE3sVRHkBAF4zjORUmVgjqhaFuyfFPjmEuLlKxbtZNl2iKA%2BsbLharNybRXq5QJfCpllvL7%2Bjz%2F2sGAiCx7n5Y8Hxt9qRiK6LI1grBwI4y9XAU20v9lQnkhtESnJ24gne0Iv0pRDuLlRb&X-Amz-Signature=cf25b38bed4f81f21da0be7255530a9ad113945069fce8265e5e627d263bfb00&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NGGGE7U%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1VjzpBUDDIbexeui3ngFG8XuecVj8BGBaVIokvt5qYAiAvj9v3Gw1VF1nr5Gcl0ovFylO3%2F8KGEDQ30CaCLgtaFyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMf0dqaQAt%2BXRdfSKtwDRpvL4P46Y9FJohGDatULePIeEpJpR30toRKU2WoAE%2F5Q2YZi%2FVIIhlwHwBZIZTIq2nbQk9YCVuk887OKICUgyQvpdg248wIjeFWy0D8iIWyKINGxcTDX93fWg5OV9rzqJOUlQtf%2BxBG1iyBCqDX3Toxgdcz2hK7zaaFA3RCtpZG2PckKRAZZevq%2BmaAqE7Y%2BiDWEiSPpnzyxugy%2B2VWOqmgMftPEFz3lrUEAB6BjSrfQlPul02q%2BoCk3zgyLd%2F%2Fgg1KVCUkiHJmMzVD9Z6FToe9G9QgP5u4upAZZ2k4cQv7ItX89Ubm8FD8uZiAi0sslCxjeDZAPQOvcH7vmvdvcuAoU%2FYg3bmJawU6LMMVy04vKpaaK%2FY0DYMhrVbti4zw2VWxwvBvV%2F%2FQ0Jj%2BpzJcOXqzuQYdCigS0jrngSDpzet3GI%2F%2FsHI6qkJk%2Bqu94mnM2iF6TTzZok%2FI%2BLI4nEvX34qhFQgxa%2BNyXgXHlfAVEPx%2FuKRbXgVoPADbrIJ9qfoNcliN8ZHXJqgKJ4yNA%2FwCSXyo2mNZPKQqU%2BWsq85d2GE2NAry%2B0QV%2BxENPPl7Y5IAGlptgCQiTQesrTEqjhYjYo%2FxWqTKxXBxbOcjBqPIqa6ua95bHRdd8WmZrBv8wyq%2F2wAY6pgFUcESQ%2FXSF9k7XCgKTxXLm9ngcKtok%2FFoahfyEPEV9GbWyWbdbZ0BnVVG6wsGCGMb%2BMPyLoKa%2BwZaLI5OkE3sVRHkBAF4zjORUmVgjqhaFuyfFPjmEuLlKxbtZNl2iKA%2BsbLharNybRXq5QJfCpllvL7%2Bjz%2F2sGAiCx7n5Y8Hxt9qRiK6LI1grBwI4y9XAU20v9lQnkhtESnJ24gne0Iv0pRDuLlRb&X-Amz-Signature=1ada1a46bcac41789262c1ee673fc16313f5ad4fd6a8304f160fbd2555a9bf60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NGGGE7U%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1VjzpBUDDIbexeui3ngFG8XuecVj8BGBaVIokvt5qYAiAvj9v3Gw1VF1nr5Gcl0ovFylO3%2F8KGEDQ30CaCLgtaFyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMf0dqaQAt%2BXRdfSKtwDRpvL4P46Y9FJohGDatULePIeEpJpR30toRKU2WoAE%2F5Q2YZi%2FVIIhlwHwBZIZTIq2nbQk9YCVuk887OKICUgyQvpdg248wIjeFWy0D8iIWyKINGxcTDX93fWg5OV9rzqJOUlQtf%2BxBG1iyBCqDX3Toxgdcz2hK7zaaFA3RCtpZG2PckKRAZZevq%2BmaAqE7Y%2BiDWEiSPpnzyxugy%2B2VWOqmgMftPEFz3lrUEAB6BjSrfQlPul02q%2BoCk3zgyLd%2F%2Fgg1KVCUkiHJmMzVD9Z6FToe9G9QgP5u4upAZZ2k4cQv7ItX89Ubm8FD8uZiAi0sslCxjeDZAPQOvcH7vmvdvcuAoU%2FYg3bmJawU6LMMVy04vKpaaK%2FY0DYMhrVbti4zw2VWxwvBvV%2F%2FQ0Jj%2BpzJcOXqzuQYdCigS0jrngSDpzet3GI%2F%2FsHI6qkJk%2Bqu94mnM2iF6TTzZok%2FI%2BLI4nEvX34qhFQgxa%2BNyXgXHlfAVEPx%2FuKRbXgVoPADbrIJ9qfoNcliN8ZHXJqgKJ4yNA%2FwCSXyo2mNZPKQqU%2BWsq85d2GE2NAry%2B0QV%2BxENPPl7Y5IAGlptgCQiTQesrTEqjhYjYo%2FxWqTKxXBxbOcjBqPIqa6ua95bHRdd8WmZrBv8wyq%2F2wAY6pgFUcESQ%2FXSF9k7XCgKTxXLm9ngcKtok%2FFoahfyEPEV9GbWyWbdbZ0BnVVG6wsGCGMb%2BMPyLoKa%2BwZaLI5OkE3sVRHkBAF4zjORUmVgjqhaFuyfFPjmEuLlKxbtZNl2iKA%2BsbLharNybRXq5QJfCpllvL7%2Bjz%2F2sGAiCx7n5Y8Hxt9qRiK6LI1grBwI4y9XAU20v9lQnkhtESnJ24gne0Iv0pRDuLlRb&X-Amz-Signature=27d8697cb4b77b20170aead29b5a6f53f72423cbe75363bfdee333aa65a08b0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NGGGE7U%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1VjzpBUDDIbexeui3ngFG8XuecVj8BGBaVIokvt5qYAiAvj9v3Gw1VF1nr5Gcl0ovFylO3%2F8KGEDQ30CaCLgtaFyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMf0dqaQAt%2BXRdfSKtwDRpvL4P46Y9FJohGDatULePIeEpJpR30toRKU2WoAE%2F5Q2YZi%2FVIIhlwHwBZIZTIq2nbQk9YCVuk887OKICUgyQvpdg248wIjeFWy0D8iIWyKINGxcTDX93fWg5OV9rzqJOUlQtf%2BxBG1iyBCqDX3Toxgdcz2hK7zaaFA3RCtpZG2PckKRAZZevq%2BmaAqE7Y%2BiDWEiSPpnzyxugy%2B2VWOqmgMftPEFz3lrUEAB6BjSrfQlPul02q%2BoCk3zgyLd%2F%2Fgg1KVCUkiHJmMzVD9Z6FToe9G9QgP5u4upAZZ2k4cQv7ItX89Ubm8FD8uZiAi0sslCxjeDZAPQOvcH7vmvdvcuAoU%2FYg3bmJawU6LMMVy04vKpaaK%2FY0DYMhrVbti4zw2VWxwvBvV%2F%2FQ0Jj%2BpzJcOXqzuQYdCigS0jrngSDpzet3GI%2F%2FsHI6qkJk%2Bqu94mnM2iF6TTzZok%2FI%2BLI4nEvX34qhFQgxa%2BNyXgXHlfAVEPx%2FuKRbXgVoPADbrIJ9qfoNcliN8ZHXJqgKJ4yNA%2FwCSXyo2mNZPKQqU%2BWsq85d2GE2NAry%2B0QV%2BxENPPl7Y5IAGlptgCQiTQesrTEqjhYjYo%2FxWqTKxXBxbOcjBqPIqa6ua95bHRdd8WmZrBv8wyq%2F2wAY6pgFUcESQ%2FXSF9k7XCgKTxXLm9ngcKtok%2FFoahfyEPEV9GbWyWbdbZ0BnVVG6wsGCGMb%2BMPyLoKa%2BwZaLI5OkE3sVRHkBAF4zjORUmVgjqhaFuyfFPjmEuLlKxbtZNl2iKA%2BsbLharNybRXq5QJfCpllvL7%2Bjz%2F2sGAiCx7n5Y8Hxt9qRiK6LI1grBwI4y9XAU20v9lQnkhtESnJ24gne0Iv0pRDuLlRb&X-Amz-Signature=055090d484d827df2a3178cf95009742cf696b647c4dbc00398b38fc1fc08b9b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NGGGE7U%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1VjzpBUDDIbexeui3ngFG8XuecVj8BGBaVIokvt5qYAiAvj9v3Gw1VF1nr5Gcl0ovFylO3%2F8KGEDQ30CaCLgtaFyqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwMf0dqaQAt%2BXRdfSKtwDRpvL4P46Y9FJohGDatULePIeEpJpR30toRKU2WoAE%2F5Q2YZi%2FVIIhlwHwBZIZTIq2nbQk9YCVuk887OKICUgyQvpdg248wIjeFWy0D8iIWyKINGxcTDX93fWg5OV9rzqJOUlQtf%2BxBG1iyBCqDX3Toxgdcz2hK7zaaFA3RCtpZG2PckKRAZZevq%2BmaAqE7Y%2BiDWEiSPpnzyxugy%2B2VWOqmgMftPEFz3lrUEAB6BjSrfQlPul02q%2BoCk3zgyLd%2F%2Fgg1KVCUkiHJmMzVD9Z6FToe9G9QgP5u4upAZZ2k4cQv7ItX89Ubm8FD8uZiAi0sslCxjeDZAPQOvcH7vmvdvcuAoU%2FYg3bmJawU6LMMVy04vKpaaK%2FY0DYMhrVbti4zw2VWxwvBvV%2F%2FQ0Jj%2BpzJcOXqzuQYdCigS0jrngSDpzet3GI%2F%2FsHI6qkJk%2Bqu94mnM2iF6TTzZok%2FI%2BLI4nEvX34qhFQgxa%2BNyXgXHlfAVEPx%2FuKRbXgVoPADbrIJ9qfoNcliN8ZHXJqgKJ4yNA%2FwCSXyo2mNZPKQqU%2BWsq85d2GE2NAry%2B0QV%2BxENPPl7Y5IAGlptgCQiTQesrTEqjhYjYo%2FxWqTKxXBxbOcjBqPIqa6ua95bHRdd8WmZrBv8wyq%2F2wAY6pgFUcESQ%2FXSF9k7XCgKTxXLm9ngcKtok%2FFoahfyEPEV9GbWyWbdbZ0BnVVG6wsGCGMb%2BMPyLoKa%2BwZaLI5OkE3sVRHkBAF4zjORUmVgjqhaFuyfFPjmEuLlKxbtZNl2iKA%2BsbLharNybRXq5QJfCpllvL7%2Bjz%2F2sGAiCx7n5Y8Hxt9qRiK6LI1grBwI4y9XAU20v9lQnkhtESnJ24gne0Iv0pRDuLlRb&X-Amz-Signature=04dfa5268586d88396e5ebbdd8199a33bc8b1f88d2391672bd21ea74cf2bdab9&X-Amz-SignedHeaders=host&x-id=GetObject)
