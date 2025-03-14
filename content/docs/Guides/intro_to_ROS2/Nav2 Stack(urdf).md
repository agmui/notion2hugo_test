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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5H7ZH2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEdqceTqRT84xJrmzDTHSh3oyYXPKd9t7%2BAvTu0LC5fAiEA9%2FpOTiP9EYO3%2BCB8W7jiw3rznpp%2F9s0V2R8yyDkFT2AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTrkneA5rMFf8ImXyrcA%2B0eqWbV5ciq4d%2BkIiN9dkQc9%2FHsb7iK4tVxXxkAV3tsmlpCozWdv3EH%2FQxQba9wpSv0u5xBsu5RKZHYdaqSkCKHWCgiXepkYyTMEpkgzwMWHktn1purbpdnooAfOOUl0Y34pxzy%2ByIN3omemPedYBqjgnYosNh8uqBKqIL2zszfEqI5KkaFZQ6xNJw09YIjRnbXmi8X1Vd6xI8e%2FRbWxo9wb1e%2BqVlN5FmojFAcubL2NIIxAwgsyu2rNxX8xq8hAgEiKJsQ2uucgZTPWlXfuuYmS%2BK%2Fp8NZUr%2F5RpM1YADLBt8zlPeRdtQv6F%2Bi6%2F7EQcMWQKSJWRlFiojSpcPLFhugq5emc%2Bk4izXjK7YHkCcfMafZy0Jd%2Bmuarh9cdydcOlEJ7Jv2PMJXmhrZrYx7CqlNzrnyqHAgJd%2BLmhtSQOHrgv2n9t1odJ%2Fj8TLWgnUvbTkDoPFj32QtQ1cMId%2Bg2vczGM0mCcTgQ8JtvZE9rYcoZrBGsh3HcWBGdjGdoqLF%2BjxfJ5xMhrQNwBShTBysZ%2BnK8C67HsKZKKILbKqUmae2zTqLN0CEx4s3beh94iG0aafMaq7x01H7azPXFTyMl4j1AKfbvceasJmT4RUhnHK9OqGv0giO9lerht1DMLWG0L4GOqUBCTBduS8tnHIy794alkhtYwzfWD4MRyzRlL2OZxgOma8hiAqRVC4XJzFHr9lwMynGSSpNgEEOi7gvp7s3YKLDaIncTXUeT%2FoEr5kWyy5xW5dZ2lKfCvQswgizyUfaRDRl0o6Q2X32aF6K9rSdgs3mhMyRSfvtgdTqRTnJ8Ulof0jjmx9VLDJ4X8SnM%2BOHddA%2F1uWVHZR0RvoH4nODvgzitfGPRx6S&X-Amz-Signature=98fa669eb84db41b5fe7eea0eccdeb30dfd65617f55220b9f7651738ddc9fb50&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5H7ZH2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEdqceTqRT84xJrmzDTHSh3oyYXPKd9t7%2BAvTu0LC5fAiEA9%2FpOTiP9EYO3%2BCB8W7jiw3rznpp%2F9s0V2R8yyDkFT2AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTrkneA5rMFf8ImXyrcA%2B0eqWbV5ciq4d%2BkIiN9dkQc9%2FHsb7iK4tVxXxkAV3tsmlpCozWdv3EH%2FQxQba9wpSv0u5xBsu5RKZHYdaqSkCKHWCgiXepkYyTMEpkgzwMWHktn1purbpdnooAfOOUl0Y34pxzy%2ByIN3omemPedYBqjgnYosNh8uqBKqIL2zszfEqI5KkaFZQ6xNJw09YIjRnbXmi8X1Vd6xI8e%2FRbWxo9wb1e%2BqVlN5FmojFAcubL2NIIxAwgsyu2rNxX8xq8hAgEiKJsQ2uucgZTPWlXfuuYmS%2BK%2Fp8NZUr%2F5RpM1YADLBt8zlPeRdtQv6F%2Bi6%2F7EQcMWQKSJWRlFiojSpcPLFhugq5emc%2Bk4izXjK7YHkCcfMafZy0Jd%2Bmuarh9cdydcOlEJ7Jv2PMJXmhrZrYx7CqlNzrnyqHAgJd%2BLmhtSQOHrgv2n9t1odJ%2Fj8TLWgnUvbTkDoPFj32QtQ1cMId%2Bg2vczGM0mCcTgQ8JtvZE9rYcoZrBGsh3HcWBGdjGdoqLF%2BjxfJ5xMhrQNwBShTBysZ%2BnK8C67HsKZKKILbKqUmae2zTqLN0CEx4s3beh94iG0aafMaq7x01H7azPXFTyMl4j1AKfbvceasJmT4RUhnHK9OqGv0giO9lerht1DMLWG0L4GOqUBCTBduS8tnHIy794alkhtYwzfWD4MRyzRlL2OZxgOma8hiAqRVC4XJzFHr9lwMynGSSpNgEEOi7gvp7s3YKLDaIncTXUeT%2FoEr5kWyy5xW5dZ2lKfCvQswgizyUfaRDRl0o6Q2X32aF6K9rSdgs3mhMyRSfvtgdTqRTnJ8Ulof0jjmx9VLDJ4X8SnM%2BOHddA%2F1uWVHZR0RvoH4nODvgzitfGPRx6S&X-Amz-Signature=0aae0dfe25e3a87f6dc8495c336eb324d55f687b016949c32bfe3288b4e77bde&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5H7ZH2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEdqceTqRT84xJrmzDTHSh3oyYXPKd9t7%2BAvTu0LC5fAiEA9%2FpOTiP9EYO3%2BCB8W7jiw3rznpp%2F9s0V2R8yyDkFT2AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTrkneA5rMFf8ImXyrcA%2B0eqWbV5ciq4d%2BkIiN9dkQc9%2FHsb7iK4tVxXxkAV3tsmlpCozWdv3EH%2FQxQba9wpSv0u5xBsu5RKZHYdaqSkCKHWCgiXepkYyTMEpkgzwMWHktn1purbpdnooAfOOUl0Y34pxzy%2ByIN3omemPedYBqjgnYosNh8uqBKqIL2zszfEqI5KkaFZQ6xNJw09YIjRnbXmi8X1Vd6xI8e%2FRbWxo9wb1e%2BqVlN5FmojFAcubL2NIIxAwgsyu2rNxX8xq8hAgEiKJsQ2uucgZTPWlXfuuYmS%2BK%2Fp8NZUr%2F5RpM1YADLBt8zlPeRdtQv6F%2Bi6%2F7EQcMWQKSJWRlFiojSpcPLFhugq5emc%2Bk4izXjK7YHkCcfMafZy0Jd%2Bmuarh9cdydcOlEJ7Jv2PMJXmhrZrYx7CqlNzrnyqHAgJd%2BLmhtSQOHrgv2n9t1odJ%2Fj8TLWgnUvbTkDoPFj32QtQ1cMId%2Bg2vczGM0mCcTgQ8JtvZE9rYcoZrBGsh3HcWBGdjGdoqLF%2BjxfJ5xMhrQNwBShTBysZ%2BnK8C67HsKZKKILbKqUmae2zTqLN0CEx4s3beh94iG0aafMaq7x01H7azPXFTyMl4j1AKfbvceasJmT4RUhnHK9OqGv0giO9lerht1DMLWG0L4GOqUBCTBduS8tnHIy794alkhtYwzfWD4MRyzRlL2OZxgOma8hiAqRVC4XJzFHr9lwMynGSSpNgEEOi7gvp7s3YKLDaIncTXUeT%2FoEr5kWyy5xW5dZ2lKfCvQswgizyUfaRDRl0o6Q2X32aF6K9rSdgs3mhMyRSfvtgdTqRTnJ8Ulof0jjmx9VLDJ4X8SnM%2BOHddA%2F1uWVHZR0RvoH4nODvgzitfGPRx6S&X-Amz-Signature=fd2173e37a4569107762513a47ebe12cb0bf8ba01216d11d300b04a03aca6240&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5H7ZH2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEdqceTqRT84xJrmzDTHSh3oyYXPKd9t7%2BAvTu0LC5fAiEA9%2FpOTiP9EYO3%2BCB8W7jiw3rznpp%2F9s0V2R8yyDkFT2AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTrkneA5rMFf8ImXyrcA%2B0eqWbV5ciq4d%2BkIiN9dkQc9%2FHsb7iK4tVxXxkAV3tsmlpCozWdv3EH%2FQxQba9wpSv0u5xBsu5RKZHYdaqSkCKHWCgiXepkYyTMEpkgzwMWHktn1purbpdnooAfOOUl0Y34pxzy%2ByIN3omemPedYBqjgnYosNh8uqBKqIL2zszfEqI5KkaFZQ6xNJw09YIjRnbXmi8X1Vd6xI8e%2FRbWxo9wb1e%2BqVlN5FmojFAcubL2NIIxAwgsyu2rNxX8xq8hAgEiKJsQ2uucgZTPWlXfuuYmS%2BK%2Fp8NZUr%2F5RpM1YADLBt8zlPeRdtQv6F%2Bi6%2F7EQcMWQKSJWRlFiojSpcPLFhugq5emc%2Bk4izXjK7YHkCcfMafZy0Jd%2Bmuarh9cdydcOlEJ7Jv2PMJXmhrZrYx7CqlNzrnyqHAgJd%2BLmhtSQOHrgv2n9t1odJ%2Fj8TLWgnUvbTkDoPFj32QtQ1cMId%2Bg2vczGM0mCcTgQ8JtvZE9rYcoZrBGsh3HcWBGdjGdoqLF%2BjxfJ5xMhrQNwBShTBysZ%2BnK8C67HsKZKKILbKqUmae2zTqLN0CEx4s3beh94iG0aafMaq7x01H7azPXFTyMl4j1AKfbvceasJmT4RUhnHK9OqGv0giO9lerht1DMLWG0L4GOqUBCTBduS8tnHIy794alkhtYwzfWD4MRyzRlL2OZxgOma8hiAqRVC4XJzFHr9lwMynGSSpNgEEOi7gvp7s3YKLDaIncTXUeT%2FoEr5kWyy5xW5dZ2lKfCvQswgizyUfaRDRl0o6Q2X32aF6K9rSdgs3mhMyRSfvtgdTqRTnJ8Ulof0jjmx9VLDJ4X8SnM%2BOHddA%2F1uWVHZR0RvoH4nODvgzitfGPRx6S&X-Amz-Signature=89708d70080e937a9b6ddfb2dac72a209ddb2ccabdf230b4d0b14a68681b595f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5H7ZH2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEdqceTqRT84xJrmzDTHSh3oyYXPKd9t7%2BAvTu0LC5fAiEA9%2FpOTiP9EYO3%2BCB8W7jiw3rznpp%2F9s0V2R8yyDkFT2AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTrkneA5rMFf8ImXyrcA%2B0eqWbV5ciq4d%2BkIiN9dkQc9%2FHsb7iK4tVxXxkAV3tsmlpCozWdv3EH%2FQxQba9wpSv0u5xBsu5RKZHYdaqSkCKHWCgiXepkYyTMEpkgzwMWHktn1purbpdnooAfOOUl0Y34pxzy%2ByIN3omemPedYBqjgnYosNh8uqBKqIL2zszfEqI5KkaFZQ6xNJw09YIjRnbXmi8X1Vd6xI8e%2FRbWxo9wb1e%2BqVlN5FmojFAcubL2NIIxAwgsyu2rNxX8xq8hAgEiKJsQ2uucgZTPWlXfuuYmS%2BK%2Fp8NZUr%2F5RpM1YADLBt8zlPeRdtQv6F%2Bi6%2F7EQcMWQKSJWRlFiojSpcPLFhugq5emc%2Bk4izXjK7YHkCcfMafZy0Jd%2Bmuarh9cdydcOlEJ7Jv2PMJXmhrZrYx7CqlNzrnyqHAgJd%2BLmhtSQOHrgv2n9t1odJ%2Fj8TLWgnUvbTkDoPFj32QtQ1cMId%2Bg2vczGM0mCcTgQ8JtvZE9rYcoZrBGsh3HcWBGdjGdoqLF%2BjxfJ5xMhrQNwBShTBysZ%2BnK8C67HsKZKKILbKqUmae2zTqLN0CEx4s3beh94iG0aafMaq7x01H7azPXFTyMl4j1AKfbvceasJmT4RUhnHK9OqGv0giO9lerht1DMLWG0L4GOqUBCTBduS8tnHIy794alkhtYwzfWD4MRyzRlL2OZxgOma8hiAqRVC4XJzFHr9lwMynGSSpNgEEOi7gvp7s3YKLDaIncTXUeT%2FoEr5kWyy5xW5dZ2lKfCvQswgizyUfaRDRl0o6Q2X32aF6K9rSdgs3mhMyRSfvtgdTqRTnJ8Ulof0jjmx9VLDJ4X8SnM%2BOHddA%2F1uWVHZR0RvoH4nODvgzitfGPRx6S&X-Amz-Signature=f56995e34c177b44e4d8cbc733a20dbd20df12a2a9a2401fa330c4241935c3aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX5H7ZH2%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T110652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICEdqceTqRT84xJrmzDTHSh3oyYXPKd9t7%2BAvTu0LC5fAiEA9%2FpOTiP9EYO3%2BCB8W7jiw3rznpp%2F9s0V2R8yyDkFT2AqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGTrkneA5rMFf8ImXyrcA%2B0eqWbV5ciq4d%2BkIiN9dkQc9%2FHsb7iK4tVxXxkAV3tsmlpCozWdv3EH%2FQxQba9wpSv0u5xBsu5RKZHYdaqSkCKHWCgiXepkYyTMEpkgzwMWHktn1purbpdnooAfOOUl0Y34pxzy%2ByIN3omemPedYBqjgnYosNh8uqBKqIL2zszfEqI5KkaFZQ6xNJw09YIjRnbXmi8X1Vd6xI8e%2FRbWxo9wb1e%2BqVlN5FmojFAcubL2NIIxAwgsyu2rNxX8xq8hAgEiKJsQ2uucgZTPWlXfuuYmS%2BK%2Fp8NZUr%2F5RpM1YADLBt8zlPeRdtQv6F%2Bi6%2F7EQcMWQKSJWRlFiojSpcPLFhugq5emc%2Bk4izXjK7YHkCcfMafZy0Jd%2Bmuarh9cdydcOlEJ7Jv2PMJXmhrZrYx7CqlNzrnyqHAgJd%2BLmhtSQOHrgv2n9t1odJ%2Fj8TLWgnUvbTkDoPFj32QtQ1cMId%2Bg2vczGM0mCcTgQ8JtvZE9rYcoZrBGsh3HcWBGdjGdoqLF%2BjxfJ5xMhrQNwBShTBysZ%2BnK8C67HsKZKKILbKqUmae2zTqLN0CEx4s3beh94iG0aafMaq7x01H7azPXFTyMl4j1AKfbvceasJmT4RUhnHK9OqGv0giO9lerht1DMLWG0L4GOqUBCTBduS8tnHIy794alkhtYwzfWD4MRyzRlL2OZxgOma8hiAqRVC4XJzFHr9lwMynGSSpNgEEOi7gvp7s3YKLDaIncTXUeT%2FoEr5kWyy5xW5dZ2lKfCvQswgizyUfaRDRl0o6Q2X32aF6K9rSdgs3mhMyRSfvtgdTqRTnJ8Ulof0jjmx9VLDJ4X8SnM%2BOHddA%2F1uWVHZR0RvoH4nODvgzitfGPRx6S&X-Amz-Signature=f8f5b0fae93b34d46f038125b671713831774f4fabf532f3d3a2fd4acfd0749f&X-Amz-SignedHeaders=host&x-id=GetObject)
