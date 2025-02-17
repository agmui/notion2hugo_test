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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZXOPUDP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD6lftgOEQvFGWl%2BGJlsgQAW8f5aggDz30V7ysxokuXBwIgX4Bsvpw7AYGHMScowGE4eaA%2BXE4pjaF41rncNvqoo5cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNy8AWsZI2ZKKjDwlCrcA04xbdwkVWopNAun9sKAb9OZZu%2BWokD5dboo7afWOIy6FRkX1Cm1k0gDKcDtnmo%2Fg8V5ay7nWBsdVWxsQ6UIi%2F1tvjKedC1%2BPXW%2FAImftSbCH0rZPyC1oAOTIqpYLhWQjqhmef%2F2bZ4H7ny1MtkTw9hxTcSHr91nSyCRN%2FfANdP%2BXcxq5rUmAcG1LA2U0H1nMsxjhxwzXCgixkLk0N4KKiK8uULgTY%2Btg61niLKO2gACES1isVMs9pIxBQ%2FIfDR3G4%2BgXLOCb%2FhFNH6o4Oqy4jsd%2FnieIVPOZttC%2FKcNYZHh6Rd0K6z9ehMLpunF29lI5nGSSP8SAb%2FvffVFf%2BL15UKCF%2BSnuriRrYthblw2027kMHuwCEw2NbLBnTAf%2FnB6omUUJuBbwJ%2BalB8Q5uGnVZroGvzsmR6Z9Q8Giv%2BF9rl3sAeFebmSC0Xv4CcwnkgXCR0haeO4Fskz1YomkSAUZK6XsE1vQVw3%2FX1GxmP8AcQVP5q8Hg%2FhlSa8dzyQPVsb5lzfQi1SN%2FUpW3Z%2F923f6RX6sD6fZyYgDCx%2FXwws0iyX60f68M%2Fd6uJ3FIUfGG8%2BQap9TX0ysS58ktrknjhvyEnkUi0xnibx1W984eQ8BoUuJds7RKXySZLhYS3GMLLLyr0GOqUBrQTT7qY30e0wIObEaw%2BWGSWm6mdQS4blmt1CJwXAiXj9ZGr%2FWJLWhpnnORHuxB9SVAHfjVqeHhhkvLM3Ly%2F3999aN1YHtFwbf6oR5wQhUczjf8pC1AdHgCvArLXwZF5jbswRQHfjUKvlGdnBC%2BNbSrYPJQ8IKL5A359PSoLZNStAz4qaap%2BDD15DJqqiq4Zx236pu6SfQaA3Tnq2AXOGjf7ZThTi&X-Amz-Signature=e05a55946fa294ef25cc74d54a9e5eb52960d27f344eb6582cf3736af77ca8c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZXOPUDP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD6lftgOEQvFGWl%2BGJlsgQAW8f5aggDz30V7ysxokuXBwIgX4Bsvpw7AYGHMScowGE4eaA%2BXE4pjaF41rncNvqoo5cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNy8AWsZI2ZKKjDwlCrcA04xbdwkVWopNAun9sKAb9OZZu%2BWokD5dboo7afWOIy6FRkX1Cm1k0gDKcDtnmo%2Fg8V5ay7nWBsdVWxsQ6UIi%2F1tvjKedC1%2BPXW%2FAImftSbCH0rZPyC1oAOTIqpYLhWQjqhmef%2F2bZ4H7ny1MtkTw9hxTcSHr91nSyCRN%2FfANdP%2BXcxq5rUmAcG1LA2U0H1nMsxjhxwzXCgixkLk0N4KKiK8uULgTY%2Btg61niLKO2gACES1isVMs9pIxBQ%2FIfDR3G4%2BgXLOCb%2FhFNH6o4Oqy4jsd%2FnieIVPOZttC%2FKcNYZHh6Rd0K6z9ehMLpunF29lI5nGSSP8SAb%2FvffVFf%2BL15UKCF%2BSnuriRrYthblw2027kMHuwCEw2NbLBnTAf%2FnB6omUUJuBbwJ%2BalB8Q5uGnVZroGvzsmR6Z9Q8Giv%2BF9rl3sAeFebmSC0Xv4CcwnkgXCR0haeO4Fskz1YomkSAUZK6XsE1vQVw3%2FX1GxmP8AcQVP5q8Hg%2FhlSa8dzyQPVsb5lzfQi1SN%2FUpW3Z%2F923f6RX6sD6fZyYgDCx%2FXwws0iyX60f68M%2Fd6uJ3FIUfGG8%2BQap9TX0ysS58ktrknjhvyEnkUi0xnibx1W984eQ8BoUuJds7RKXySZLhYS3GMLLLyr0GOqUBrQTT7qY30e0wIObEaw%2BWGSWm6mdQS4blmt1CJwXAiXj9ZGr%2FWJLWhpnnORHuxB9SVAHfjVqeHhhkvLM3Ly%2F3999aN1YHtFwbf6oR5wQhUczjf8pC1AdHgCvArLXwZF5jbswRQHfjUKvlGdnBC%2BNbSrYPJQ8IKL5A359PSoLZNStAz4qaap%2BDD15DJqqiq4Zx236pu6SfQaA3Tnq2AXOGjf7ZThTi&X-Amz-Signature=4313609c4b7b797b3dc78afa115fb101ceec9705af954918dc7ab3ca94f4b2cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZXOPUDP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD6lftgOEQvFGWl%2BGJlsgQAW8f5aggDz30V7ysxokuXBwIgX4Bsvpw7AYGHMScowGE4eaA%2BXE4pjaF41rncNvqoo5cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNy8AWsZI2ZKKjDwlCrcA04xbdwkVWopNAun9sKAb9OZZu%2BWokD5dboo7afWOIy6FRkX1Cm1k0gDKcDtnmo%2Fg8V5ay7nWBsdVWxsQ6UIi%2F1tvjKedC1%2BPXW%2FAImftSbCH0rZPyC1oAOTIqpYLhWQjqhmef%2F2bZ4H7ny1MtkTw9hxTcSHr91nSyCRN%2FfANdP%2BXcxq5rUmAcG1LA2U0H1nMsxjhxwzXCgixkLk0N4KKiK8uULgTY%2Btg61niLKO2gACES1isVMs9pIxBQ%2FIfDR3G4%2BgXLOCb%2FhFNH6o4Oqy4jsd%2FnieIVPOZttC%2FKcNYZHh6Rd0K6z9ehMLpunF29lI5nGSSP8SAb%2FvffVFf%2BL15UKCF%2BSnuriRrYthblw2027kMHuwCEw2NbLBnTAf%2FnB6omUUJuBbwJ%2BalB8Q5uGnVZroGvzsmR6Z9Q8Giv%2BF9rl3sAeFebmSC0Xv4CcwnkgXCR0haeO4Fskz1YomkSAUZK6XsE1vQVw3%2FX1GxmP8AcQVP5q8Hg%2FhlSa8dzyQPVsb5lzfQi1SN%2FUpW3Z%2F923f6RX6sD6fZyYgDCx%2FXwws0iyX60f68M%2Fd6uJ3FIUfGG8%2BQap9TX0ysS58ktrknjhvyEnkUi0xnibx1W984eQ8BoUuJds7RKXySZLhYS3GMLLLyr0GOqUBrQTT7qY30e0wIObEaw%2BWGSWm6mdQS4blmt1CJwXAiXj9ZGr%2FWJLWhpnnORHuxB9SVAHfjVqeHhhkvLM3Ly%2F3999aN1YHtFwbf6oR5wQhUczjf8pC1AdHgCvArLXwZF5jbswRQHfjUKvlGdnBC%2BNbSrYPJQ8IKL5A359PSoLZNStAz4qaap%2BDD15DJqqiq4Zx236pu6SfQaA3Tnq2AXOGjf7ZThTi&X-Amz-Signature=7c37c7dda16c4c689445e636f750824bed992f3b8a526e8b21fdccb7dbd22616&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZXOPUDP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD6lftgOEQvFGWl%2BGJlsgQAW8f5aggDz30V7ysxokuXBwIgX4Bsvpw7AYGHMScowGE4eaA%2BXE4pjaF41rncNvqoo5cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNy8AWsZI2ZKKjDwlCrcA04xbdwkVWopNAun9sKAb9OZZu%2BWokD5dboo7afWOIy6FRkX1Cm1k0gDKcDtnmo%2Fg8V5ay7nWBsdVWxsQ6UIi%2F1tvjKedC1%2BPXW%2FAImftSbCH0rZPyC1oAOTIqpYLhWQjqhmef%2F2bZ4H7ny1MtkTw9hxTcSHr91nSyCRN%2FfANdP%2BXcxq5rUmAcG1LA2U0H1nMsxjhxwzXCgixkLk0N4KKiK8uULgTY%2Btg61niLKO2gACES1isVMs9pIxBQ%2FIfDR3G4%2BgXLOCb%2FhFNH6o4Oqy4jsd%2FnieIVPOZttC%2FKcNYZHh6Rd0K6z9ehMLpunF29lI5nGSSP8SAb%2FvffVFf%2BL15UKCF%2BSnuriRrYthblw2027kMHuwCEw2NbLBnTAf%2FnB6omUUJuBbwJ%2BalB8Q5uGnVZroGvzsmR6Z9Q8Giv%2BF9rl3sAeFebmSC0Xv4CcwnkgXCR0haeO4Fskz1YomkSAUZK6XsE1vQVw3%2FX1GxmP8AcQVP5q8Hg%2FhlSa8dzyQPVsb5lzfQi1SN%2FUpW3Z%2F923f6RX6sD6fZyYgDCx%2FXwws0iyX60f68M%2Fd6uJ3FIUfGG8%2BQap9TX0ysS58ktrknjhvyEnkUi0xnibx1W984eQ8BoUuJds7RKXySZLhYS3GMLLLyr0GOqUBrQTT7qY30e0wIObEaw%2BWGSWm6mdQS4blmt1CJwXAiXj9ZGr%2FWJLWhpnnORHuxB9SVAHfjVqeHhhkvLM3Ly%2F3999aN1YHtFwbf6oR5wQhUczjf8pC1AdHgCvArLXwZF5jbswRQHfjUKvlGdnBC%2BNbSrYPJQ8IKL5A359PSoLZNStAz4qaap%2BDD15DJqqiq4Zx236pu6SfQaA3Tnq2AXOGjf7ZThTi&X-Amz-Signature=97045f3973f6b0044ab175afd89f1cf77a803863313fd5dbf6e178d8a8ee1bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZXOPUDP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD6lftgOEQvFGWl%2BGJlsgQAW8f5aggDz30V7ysxokuXBwIgX4Bsvpw7AYGHMScowGE4eaA%2BXE4pjaF41rncNvqoo5cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNy8AWsZI2ZKKjDwlCrcA04xbdwkVWopNAun9sKAb9OZZu%2BWokD5dboo7afWOIy6FRkX1Cm1k0gDKcDtnmo%2Fg8V5ay7nWBsdVWxsQ6UIi%2F1tvjKedC1%2BPXW%2FAImftSbCH0rZPyC1oAOTIqpYLhWQjqhmef%2F2bZ4H7ny1MtkTw9hxTcSHr91nSyCRN%2FfANdP%2BXcxq5rUmAcG1LA2U0H1nMsxjhxwzXCgixkLk0N4KKiK8uULgTY%2Btg61niLKO2gACES1isVMs9pIxBQ%2FIfDR3G4%2BgXLOCb%2FhFNH6o4Oqy4jsd%2FnieIVPOZttC%2FKcNYZHh6Rd0K6z9ehMLpunF29lI5nGSSP8SAb%2FvffVFf%2BL15UKCF%2BSnuriRrYthblw2027kMHuwCEw2NbLBnTAf%2FnB6omUUJuBbwJ%2BalB8Q5uGnVZroGvzsmR6Z9Q8Giv%2BF9rl3sAeFebmSC0Xv4CcwnkgXCR0haeO4Fskz1YomkSAUZK6XsE1vQVw3%2FX1GxmP8AcQVP5q8Hg%2FhlSa8dzyQPVsb5lzfQi1SN%2FUpW3Z%2F923f6RX6sD6fZyYgDCx%2FXwws0iyX60f68M%2Fd6uJ3FIUfGG8%2BQap9TX0ysS58ktrknjhvyEnkUi0xnibx1W984eQ8BoUuJds7RKXySZLhYS3GMLLLyr0GOqUBrQTT7qY30e0wIObEaw%2BWGSWm6mdQS4blmt1CJwXAiXj9ZGr%2FWJLWhpnnORHuxB9SVAHfjVqeHhhkvLM3Ly%2F3999aN1YHtFwbf6oR5wQhUczjf8pC1AdHgCvArLXwZF5jbswRQHfjUKvlGdnBC%2BNbSrYPJQ8IKL5A359PSoLZNStAz4qaap%2BDD15DJqqiq4Zx236pu6SfQaA3Tnq2AXOGjf7ZThTi&X-Amz-Signature=4b1c11314cfd6ff91d32c9e6c66d86c9c099d4e04121d07cf06aa59bf9f64d21&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZXOPUDP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T031528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQD6lftgOEQvFGWl%2BGJlsgQAW8f5aggDz30V7ysxokuXBwIgX4Bsvpw7AYGHMScowGE4eaA%2BXE4pjaF41rncNvqoo5cq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNy8AWsZI2ZKKjDwlCrcA04xbdwkVWopNAun9sKAb9OZZu%2BWokD5dboo7afWOIy6FRkX1Cm1k0gDKcDtnmo%2Fg8V5ay7nWBsdVWxsQ6UIi%2F1tvjKedC1%2BPXW%2FAImftSbCH0rZPyC1oAOTIqpYLhWQjqhmef%2F2bZ4H7ny1MtkTw9hxTcSHr91nSyCRN%2FfANdP%2BXcxq5rUmAcG1LA2U0H1nMsxjhxwzXCgixkLk0N4KKiK8uULgTY%2Btg61niLKO2gACES1isVMs9pIxBQ%2FIfDR3G4%2BgXLOCb%2FhFNH6o4Oqy4jsd%2FnieIVPOZttC%2FKcNYZHh6Rd0K6z9ehMLpunF29lI5nGSSP8SAb%2FvffVFf%2BL15UKCF%2BSnuriRrYthblw2027kMHuwCEw2NbLBnTAf%2FnB6omUUJuBbwJ%2BalB8Q5uGnVZroGvzsmR6Z9Q8Giv%2BF9rl3sAeFebmSC0Xv4CcwnkgXCR0haeO4Fskz1YomkSAUZK6XsE1vQVw3%2FX1GxmP8AcQVP5q8Hg%2FhlSa8dzyQPVsb5lzfQi1SN%2FUpW3Z%2F923f6RX6sD6fZyYgDCx%2FXwws0iyX60f68M%2Fd6uJ3FIUfGG8%2BQap9TX0ysS58ktrknjhvyEnkUi0xnibx1W984eQ8BoUuJds7RKXySZLhYS3GMLLLyr0GOqUBrQTT7qY30e0wIObEaw%2BWGSWm6mdQS4blmt1CJwXAiXj9ZGr%2FWJLWhpnnORHuxB9SVAHfjVqeHhhkvLM3Ly%2F3999aN1YHtFwbf6oR5wQhUczjf8pC1AdHgCvArLXwZF5jbswRQHfjUKvlGdnBC%2BNbSrYPJQ8IKL5A359PSoLZNStAz4qaap%2BDD15DJqqiq4Zx236pu6SfQaA3Tnq2AXOGjf7ZThTi&X-Amz-Signature=f2bb60e181727191864464d552460d0c8be34836f80ccaa54dfe72e5a28400ac&X-Amz-SignedHeaders=host&x-id=GetObject)
