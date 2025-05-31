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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACK6F5X%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkfg2IlqDE7T2w5i1dbtpyf4fu7RC3YnOqETi6oJkZsAiADymrr0oWPMuqfraT1s8W%2Fh0yU45DGHOjFbSWnPnxjsiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2wRodlOrhClVBpVYKtwD52QoI3l0O0CtT%2BMWAibASqBHIFKzI4NMGnqmflwrHBOT3Jb6joHnNQiXT7fDb7LL2St%2BF3OqSBdf11l7LcbbGKDRf1wZwQFlDqP1YrIrL0%2BTfX42itZW5v%2FhEV9v7n5w2CO6vwTGMZQKwi9365DNGGl0kOZAXn6uVRZqOt0Dp%2Bw4rLoZVZ4IasKxi1bO3w7oiT%2B%2BKY2YT31UAsyD%2Bz7dyKuK8Emh5BK84V7rSEr6BF1fT7s7yPcmhPGbuCx4BgRbB3Gobqz9D0zQVUIep4oC1YH%2BNyIdzt6qYn5ISdl3OUfgGYkGzCUnImB34CevktVSi%2F7s16E5JcwxVWkt4%2B9jCDocof7kKbATEZf0uUM%2FK3bl%2B87SNf9M%2B7SBe1KwJ2j1TMhEoNq2Q10O05j8F9zFu5paRDKCV%2BHQBRu4x9ztpjc9H0QXRVSo643N5eZEnn%2BwazJBKOXeMrjAbPjk1pUqOTu3l7SY%2Fgi9pQzBs9bU7q6geuTdrgnS4UgziZv2dmWt60i8pIw9L%2FbLwizSRo5Dpcrw5oqRpMYUxtDZzvdgCDVchHuYVE2IFFKqMaWPVkscWNbrFmLgKv2BUpltmBtNhci6H1WywQConwakeDctxo3bNgK%2F7vQrRrlDPkwwm73pwQY6pgHBWHzjn4Dos50l%2BHCb1rbL3jDHZBn2CozoMLQ3YHnLNrR3%2BXCOA3qYql6gfLv64Ya1mCahCSiHV11GyeQgjFnGy4Kpy5cHzcy8whS54q4ZZk%2B8qN3B8XjlaWIV2t%2BcpXe9Jn6Y5CUlvRUuJu%2F6IX4g%2FO3uz67TXBm6Am%2Fsa%2BHVb%2FbCR%2BOrLFfe38APjXuOGIGSRcWNXPrV8VCpAXLIntlbUxZbVa2T&X-Amz-Signature=518e9ae00c18a7a62d03077c446cab297fa4708c5ae1cd75ae9815f52e518b8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACK6F5X%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkfg2IlqDE7T2w5i1dbtpyf4fu7RC3YnOqETi6oJkZsAiADymrr0oWPMuqfraT1s8W%2Fh0yU45DGHOjFbSWnPnxjsiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2wRodlOrhClVBpVYKtwD52QoI3l0O0CtT%2BMWAibASqBHIFKzI4NMGnqmflwrHBOT3Jb6joHnNQiXT7fDb7LL2St%2BF3OqSBdf11l7LcbbGKDRf1wZwQFlDqP1YrIrL0%2BTfX42itZW5v%2FhEV9v7n5w2CO6vwTGMZQKwi9365DNGGl0kOZAXn6uVRZqOt0Dp%2Bw4rLoZVZ4IasKxi1bO3w7oiT%2B%2BKY2YT31UAsyD%2Bz7dyKuK8Emh5BK84V7rSEr6BF1fT7s7yPcmhPGbuCx4BgRbB3Gobqz9D0zQVUIep4oC1YH%2BNyIdzt6qYn5ISdl3OUfgGYkGzCUnImB34CevktVSi%2F7s16E5JcwxVWkt4%2B9jCDocof7kKbATEZf0uUM%2FK3bl%2B87SNf9M%2B7SBe1KwJ2j1TMhEoNq2Q10O05j8F9zFu5paRDKCV%2BHQBRu4x9ztpjc9H0QXRVSo643N5eZEnn%2BwazJBKOXeMrjAbPjk1pUqOTu3l7SY%2Fgi9pQzBs9bU7q6geuTdrgnS4UgziZv2dmWt60i8pIw9L%2FbLwizSRo5Dpcrw5oqRpMYUxtDZzvdgCDVchHuYVE2IFFKqMaWPVkscWNbrFmLgKv2BUpltmBtNhci6H1WywQConwakeDctxo3bNgK%2F7vQrRrlDPkwwm73pwQY6pgHBWHzjn4Dos50l%2BHCb1rbL3jDHZBn2CozoMLQ3YHnLNrR3%2BXCOA3qYql6gfLv64Ya1mCahCSiHV11GyeQgjFnGy4Kpy5cHzcy8whS54q4ZZk%2B8qN3B8XjlaWIV2t%2BcpXe9Jn6Y5CUlvRUuJu%2F6IX4g%2FO3uz67TXBm6Am%2Fsa%2BHVb%2FbCR%2BOrLFfe38APjXuOGIGSRcWNXPrV8VCpAXLIntlbUxZbVa2T&X-Amz-Signature=6489e9ccf856419269a9611011ad54af3c160f81cde41d6e91ce3f1820abf1d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACK6F5X%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkfg2IlqDE7T2w5i1dbtpyf4fu7RC3YnOqETi6oJkZsAiADymrr0oWPMuqfraT1s8W%2Fh0yU45DGHOjFbSWnPnxjsiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2wRodlOrhClVBpVYKtwD52QoI3l0O0CtT%2BMWAibASqBHIFKzI4NMGnqmflwrHBOT3Jb6joHnNQiXT7fDb7LL2St%2BF3OqSBdf11l7LcbbGKDRf1wZwQFlDqP1YrIrL0%2BTfX42itZW5v%2FhEV9v7n5w2CO6vwTGMZQKwi9365DNGGl0kOZAXn6uVRZqOt0Dp%2Bw4rLoZVZ4IasKxi1bO3w7oiT%2B%2BKY2YT31UAsyD%2Bz7dyKuK8Emh5BK84V7rSEr6BF1fT7s7yPcmhPGbuCx4BgRbB3Gobqz9D0zQVUIep4oC1YH%2BNyIdzt6qYn5ISdl3OUfgGYkGzCUnImB34CevktVSi%2F7s16E5JcwxVWkt4%2B9jCDocof7kKbATEZf0uUM%2FK3bl%2B87SNf9M%2B7SBe1KwJ2j1TMhEoNq2Q10O05j8F9zFu5paRDKCV%2BHQBRu4x9ztpjc9H0QXRVSo643N5eZEnn%2BwazJBKOXeMrjAbPjk1pUqOTu3l7SY%2Fgi9pQzBs9bU7q6geuTdrgnS4UgziZv2dmWt60i8pIw9L%2FbLwizSRo5Dpcrw5oqRpMYUxtDZzvdgCDVchHuYVE2IFFKqMaWPVkscWNbrFmLgKv2BUpltmBtNhci6H1WywQConwakeDctxo3bNgK%2F7vQrRrlDPkwwm73pwQY6pgHBWHzjn4Dos50l%2BHCb1rbL3jDHZBn2CozoMLQ3YHnLNrR3%2BXCOA3qYql6gfLv64Ya1mCahCSiHV11GyeQgjFnGy4Kpy5cHzcy8whS54q4ZZk%2B8qN3B8XjlaWIV2t%2BcpXe9Jn6Y5CUlvRUuJu%2F6IX4g%2FO3uz67TXBm6Am%2Fsa%2BHVb%2FbCR%2BOrLFfe38APjXuOGIGSRcWNXPrV8VCpAXLIntlbUxZbVa2T&X-Amz-Signature=54165d3581e2e82b3fe9c8dcd8353b7ae7934af7a39d1e7a5b898a1344b8135d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACK6F5X%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkfg2IlqDE7T2w5i1dbtpyf4fu7RC3YnOqETi6oJkZsAiADymrr0oWPMuqfraT1s8W%2Fh0yU45DGHOjFbSWnPnxjsiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2wRodlOrhClVBpVYKtwD52QoI3l0O0CtT%2BMWAibASqBHIFKzI4NMGnqmflwrHBOT3Jb6joHnNQiXT7fDb7LL2St%2BF3OqSBdf11l7LcbbGKDRf1wZwQFlDqP1YrIrL0%2BTfX42itZW5v%2FhEV9v7n5w2CO6vwTGMZQKwi9365DNGGl0kOZAXn6uVRZqOt0Dp%2Bw4rLoZVZ4IasKxi1bO3w7oiT%2B%2BKY2YT31UAsyD%2Bz7dyKuK8Emh5BK84V7rSEr6BF1fT7s7yPcmhPGbuCx4BgRbB3Gobqz9D0zQVUIep4oC1YH%2BNyIdzt6qYn5ISdl3OUfgGYkGzCUnImB34CevktVSi%2F7s16E5JcwxVWkt4%2B9jCDocof7kKbATEZf0uUM%2FK3bl%2B87SNf9M%2B7SBe1KwJ2j1TMhEoNq2Q10O05j8F9zFu5paRDKCV%2BHQBRu4x9ztpjc9H0QXRVSo643N5eZEnn%2BwazJBKOXeMrjAbPjk1pUqOTu3l7SY%2Fgi9pQzBs9bU7q6geuTdrgnS4UgziZv2dmWt60i8pIw9L%2FbLwizSRo5Dpcrw5oqRpMYUxtDZzvdgCDVchHuYVE2IFFKqMaWPVkscWNbrFmLgKv2BUpltmBtNhci6H1WywQConwakeDctxo3bNgK%2F7vQrRrlDPkwwm73pwQY6pgHBWHzjn4Dos50l%2BHCb1rbL3jDHZBn2CozoMLQ3YHnLNrR3%2BXCOA3qYql6gfLv64Ya1mCahCSiHV11GyeQgjFnGy4Kpy5cHzcy8whS54q4ZZk%2B8qN3B8XjlaWIV2t%2BcpXe9Jn6Y5CUlvRUuJu%2F6IX4g%2FO3uz67TXBm6Am%2Fsa%2BHVb%2FbCR%2BOrLFfe38APjXuOGIGSRcWNXPrV8VCpAXLIntlbUxZbVa2T&X-Amz-Signature=308262f1a964d1422c359d6d13b72a4d0daac7f209fd9c47ce643b75411a0158&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACK6F5X%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkfg2IlqDE7T2w5i1dbtpyf4fu7RC3YnOqETi6oJkZsAiADymrr0oWPMuqfraT1s8W%2Fh0yU45DGHOjFbSWnPnxjsiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2wRodlOrhClVBpVYKtwD52QoI3l0O0CtT%2BMWAibASqBHIFKzI4NMGnqmflwrHBOT3Jb6joHnNQiXT7fDb7LL2St%2BF3OqSBdf11l7LcbbGKDRf1wZwQFlDqP1YrIrL0%2BTfX42itZW5v%2FhEV9v7n5w2CO6vwTGMZQKwi9365DNGGl0kOZAXn6uVRZqOt0Dp%2Bw4rLoZVZ4IasKxi1bO3w7oiT%2B%2BKY2YT31UAsyD%2Bz7dyKuK8Emh5BK84V7rSEr6BF1fT7s7yPcmhPGbuCx4BgRbB3Gobqz9D0zQVUIep4oC1YH%2BNyIdzt6qYn5ISdl3OUfgGYkGzCUnImB34CevktVSi%2F7s16E5JcwxVWkt4%2B9jCDocof7kKbATEZf0uUM%2FK3bl%2B87SNf9M%2B7SBe1KwJ2j1TMhEoNq2Q10O05j8F9zFu5paRDKCV%2BHQBRu4x9ztpjc9H0QXRVSo643N5eZEnn%2BwazJBKOXeMrjAbPjk1pUqOTu3l7SY%2Fgi9pQzBs9bU7q6geuTdrgnS4UgziZv2dmWt60i8pIw9L%2FbLwizSRo5Dpcrw5oqRpMYUxtDZzvdgCDVchHuYVE2IFFKqMaWPVkscWNbrFmLgKv2BUpltmBtNhci6H1WywQConwakeDctxo3bNgK%2F7vQrRrlDPkwwm73pwQY6pgHBWHzjn4Dos50l%2BHCb1rbL3jDHZBn2CozoMLQ3YHnLNrR3%2BXCOA3qYql6gfLv64Ya1mCahCSiHV11GyeQgjFnGy4Kpy5cHzcy8whS54q4ZZk%2B8qN3B8XjlaWIV2t%2BcpXe9Jn6Y5CUlvRUuJu%2F6IX4g%2FO3uz67TXBm6Am%2Fsa%2BHVb%2FbCR%2BOrLFfe38APjXuOGIGSRcWNXPrV8VCpAXLIntlbUxZbVa2T&X-Amz-Signature=62cfd826262f28345704cf15cbef253379943ddb1f3669e5ed285ec021206390&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZACK6F5X%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkfg2IlqDE7T2w5i1dbtpyf4fu7RC3YnOqETi6oJkZsAiADymrr0oWPMuqfraT1s8W%2Fh0yU45DGHOjFbSWnPnxjsiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2wRodlOrhClVBpVYKtwD52QoI3l0O0CtT%2BMWAibASqBHIFKzI4NMGnqmflwrHBOT3Jb6joHnNQiXT7fDb7LL2St%2BF3OqSBdf11l7LcbbGKDRf1wZwQFlDqP1YrIrL0%2BTfX42itZW5v%2FhEV9v7n5w2CO6vwTGMZQKwi9365DNGGl0kOZAXn6uVRZqOt0Dp%2Bw4rLoZVZ4IasKxi1bO3w7oiT%2B%2BKY2YT31UAsyD%2Bz7dyKuK8Emh5BK84V7rSEr6BF1fT7s7yPcmhPGbuCx4BgRbB3Gobqz9D0zQVUIep4oC1YH%2BNyIdzt6qYn5ISdl3OUfgGYkGzCUnImB34CevktVSi%2F7s16E5JcwxVWkt4%2B9jCDocof7kKbATEZf0uUM%2FK3bl%2B87SNf9M%2B7SBe1KwJ2j1TMhEoNq2Q10O05j8F9zFu5paRDKCV%2BHQBRu4x9ztpjc9H0QXRVSo643N5eZEnn%2BwazJBKOXeMrjAbPjk1pUqOTu3l7SY%2Fgi9pQzBs9bU7q6geuTdrgnS4UgziZv2dmWt60i8pIw9L%2FbLwizSRo5Dpcrw5oqRpMYUxtDZzvdgCDVchHuYVE2IFFKqMaWPVkscWNbrFmLgKv2BUpltmBtNhci6H1WywQConwakeDctxo3bNgK%2F7vQrRrlDPkwwm73pwQY6pgHBWHzjn4Dos50l%2BHCb1rbL3jDHZBn2CozoMLQ3YHnLNrR3%2BXCOA3qYql6gfLv64Ya1mCahCSiHV11GyeQgjFnGy4Kpy5cHzcy8whS54q4ZZk%2B8qN3B8XjlaWIV2t%2BcpXe9Jn6Y5CUlvRUuJu%2F6IX4g%2FO3uz67TXBm6Am%2Fsa%2BHVb%2FbCR%2BOrLFfe38APjXuOGIGSRcWNXPrV8VCpAXLIntlbUxZbVa2T&X-Amz-Signature=a0c6067035f705e832cdd8ded51b09834a3d0f47a0cb1840f6b5de9225d8674b&X-Amz-SignedHeaders=host&x-id=GetObject)
