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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE22AJB6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCP2Wp50n4kKuH8GECeBDoktAeT54ecaSk%2FajNRdG2ikwIgY3ZCbN0djvCtRlMGQHOu3Z1P0ILl2cr4c1QqfrHqI5wqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNxvloS39eyggGJNircA1L7lt3xstWTjdmzRoPVIfDDCI%2BSssuyOOsBtC%2FnnyZw3xMArb7LXko9MpO27tVZ5wnRzogAnSQPwPAdVCVCO%2FyKM1ju3VMk8c8o%2FpKdhxAhtAh9uWdM%2B5faQWMYJNs00VzLyzFc9r2X5J7GRU46G%2B4q65dk8huwEdQ4TIS5TaX%2BsdMvIl44%2Byd6BaSr3knx3DBj6ppO5LoRWx3TeVV6DYfsTYgGVDExqlAvHsOt%2FDJwXEpO%2BfspCC9LA6yRKrBO5fX0nYpV4XZpFUP%2Bx12zNP5sODP2EOCQ%2F9623AGZ8Vu%2F1Pfd0DIfu5sx7lNUeYFlsgLcFXHcEU7snbQ1GEg3qZtmhjJP48O6%2FmeM9pp6tY6KHgoWJZwmjaz5vtUe9kbZHaepbiNCmjCHPh8EBUpL1nezUdfU8ZgnVt%2F7mkE%2FFnN6SUPyEvvunr7AxtpIRxHK%2F6X7EBuL8FnpC5PnwirPS1Gy3ip621h5Do0%2BsIuMzZIsdiR%2FwF2tfW17Q52DsuwHDdLReI3t005l4KV8aou6%2Fs551qcQ88%2BFOhZJsQ%2FH8f4iEJXcv4ZwhD8iUQgj2%2BIYREkVEzYpnjQxgtvyE%2FKCSOqShHQNTEEp9hSS2%2BTUcffFBhP7ZvhX%2BO5yMqEbMPmQ9cEGOqUBPH5LvHINjQ0h93BJVXsEcFr7Xa3EdF4VDR73gUkAkWvkYYY2EeF4512bVUYt4o541x8UGbYMnB4oUa56uftqE7t77kGHTn7qbsq4gST4aKlbugLzQdHvKmIfPmVHwSasTZcmpsvT3uH0HtXIKufYWd2oMW4AQ8Xo8Br7UnLGJMLmY%2B1ccNvig%2BJyOE96HZWfLeofsXs8mjl5SE95zfni43wXg2Dc&X-Amz-Signature=e9bff253a8738b8bf72761345546ded284c0b2c18279a3ca9c1e50e64d41d434&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE22AJB6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCP2Wp50n4kKuH8GECeBDoktAeT54ecaSk%2FajNRdG2ikwIgY3ZCbN0djvCtRlMGQHOu3Z1P0ILl2cr4c1QqfrHqI5wqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNxvloS39eyggGJNircA1L7lt3xstWTjdmzRoPVIfDDCI%2BSssuyOOsBtC%2FnnyZw3xMArb7LXko9MpO27tVZ5wnRzogAnSQPwPAdVCVCO%2FyKM1ju3VMk8c8o%2FpKdhxAhtAh9uWdM%2B5faQWMYJNs00VzLyzFc9r2X5J7GRU46G%2B4q65dk8huwEdQ4TIS5TaX%2BsdMvIl44%2Byd6BaSr3knx3DBj6ppO5LoRWx3TeVV6DYfsTYgGVDExqlAvHsOt%2FDJwXEpO%2BfspCC9LA6yRKrBO5fX0nYpV4XZpFUP%2Bx12zNP5sODP2EOCQ%2F9623AGZ8Vu%2F1Pfd0DIfu5sx7lNUeYFlsgLcFXHcEU7snbQ1GEg3qZtmhjJP48O6%2FmeM9pp6tY6KHgoWJZwmjaz5vtUe9kbZHaepbiNCmjCHPh8EBUpL1nezUdfU8ZgnVt%2F7mkE%2FFnN6SUPyEvvunr7AxtpIRxHK%2F6X7EBuL8FnpC5PnwirPS1Gy3ip621h5Do0%2BsIuMzZIsdiR%2FwF2tfW17Q52DsuwHDdLReI3t005l4KV8aou6%2Fs551qcQ88%2BFOhZJsQ%2FH8f4iEJXcv4ZwhD8iUQgj2%2BIYREkVEzYpnjQxgtvyE%2FKCSOqShHQNTEEp9hSS2%2BTUcffFBhP7ZvhX%2BO5yMqEbMPmQ9cEGOqUBPH5LvHINjQ0h93BJVXsEcFr7Xa3EdF4VDR73gUkAkWvkYYY2EeF4512bVUYt4o541x8UGbYMnB4oUa56uftqE7t77kGHTn7qbsq4gST4aKlbugLzQdHvKmIfPmVHwSasTZcmpsvT3uH0HtXIKufYWd2oMW4AQ8Xo8Br7UnLGJMLmY%2B1ccNvig%2BJyOE96HZWfLeofsXs8mjl5SE95zfni43wXg2Dc&X-Amz-Signature=7767791e564296d3c32e67400337fef8b8e15d49cd42babc59734a17abb5da0c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE22AJB6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCP2Wp50n4kKuH8GECeBDoktAeT54ecaSk%2FajNRdG2ikwIgY3ZCbN0djvCtRlMGQHOu3Z1P0ILl2cr4c1QqfrHqI5wqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNxvloS39eyggGJNircA1L7lt3xstWTjdmzRoPVIfDDCI%2BSssuyOOsBtC%2FnnyZw3xMArb7LXko9MpO27tVZ5wnRzogAnSQPwPAdVCVCO%2FyKM1ju3VMk8c8o%2FpKdhxAhtAh9uWdM%2B5faQWMYJNs00VzLyzFc9r2X5J7GRU46G%2B4q65dk8huwEdQ4TIS5TaX%2BsdMvIl44%2Byd6BaSr3knx3DBj6ppO5LoRWx3TeVV6DYfsTYgGVDExqlAvHsOt%2FDJwXEpO%2BfspCC9LA6yRKrBO5fX0nYpV4XZpFUP%2Bx12zNP5sODP2EOCQ%2F9623AGZ8Vu%2F1Pfd0DIfu5sx7lNUeYFlsgLcFXHcEU7snbQ1GEg3qZtmhjJP48O6%2FmeM9pp6tY6KHgoWJZwmjaz5vtUe9kbZHaepbiNCmjCHPh8EBUpL1nezUdfU8ZgnVt%2F7mkE%2FFnN6SUPyEvvunr7AxtpIRxHK%2F6X7EBuL8FnpC5PnwirPS1Gy3ip621h5Do0%2BsIuMzZIsdiR%2FwF2tfW17Q52DsuwHDdLReI3t005l4KV8aou6%2Fs551qcQ88%2BFOhZJsQ%2FH8f4iEJXcv4ZwhD8iUQgj2%2BIYREkVEzYpnjQxgtvyE%2FKCSOqShHQNTEEp9hSS2%2BTUcffFBhP7ZvhX%2BO5yMqEbMPmQ9cEGOqUBPH5LvHINjQ0h93BJVXsEcFr7Xa3EdF4VDR73gUkAkWvkYYY2EeF4512bVUYt4o541x8UGbYMnB4oUa56uftqE7t77kGHTn7qbsq4gST4aKlbugLzQdHvKmIfPmVHwSasTZcmpsvT3uH0HtXIKufYWd2oMW4AQ8Xo8Br7UnLGJMLmY%2B1ccNvig%2BJyOE96HZWfLeofsXs8mjl5SE95zfni43wXg2Dc&X-Amz-Signature=eb2ff32b25709a94ad440a33cd06bf1a3ac6707329f6a19ce1ce3636b427ef31&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE22AJB6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCP2Wp50n4kKuH8GECeBDoktAeT54ecaSk%2FajNRdG2ikwIgY3ZCbN0djvCtRlMGQHOu3Z1P0ILl2cr4c1QqfrHqI5wqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNxvloS39eyggGJNircA1L7lt3xstWTjdmzRoPVIfDDCI%2BSssuyOOsBtC%2FnnyZw3xMArb7LXko9MpO27tVZ5wnRzogAnSQPwPAdVCVCO%2FyKM1ju3VMk8c8o%2FpKdhxAhtAh9uWdM%2B5faQWMYJNs00VzLyzFc9r2X5J7GRU46G%2B4q65dk8huwEdQ4TIS5TaX%2BsdMvIl44%2Byd6BaSr3knx3DBj6ppO5LoRWx3TeVV6DYfsTYgGVDExqlAvHsOt%2FDJwXEpO%2BfspCC9LA6yRKrBO5fX0nYpV4XZpFUP%2Bx12zNP5sODP2EOCQ%2F9623AGZ8Vu%2F1Pfd0DIfu5sx7lNUeYFlsgLcFXHcEU7snbQ1GEg3qZtmhjJP48O6%2FmeM9pp6tY6KHgoWJZwmjaz5vtUe9kbZHaepbiNCmjCHPh8EBUpL1nezUdfU8ZgnVt%2F7mkE%2FFnN6SUPyEvvunr7AxtpIRxHK%2F6X7EBuL8FnpC5PnwirPS1Gy3ip621h5Do0%2BsIuMzZIsdiR%2FwF2tfW17Q52DsuwHDdLReI3t005l4KV8aou6%2Fs551qcQ88%2BFOhZJsQ%2FH8f4iEJXcv4ZwhD8iUQgj2%2BIYREkVEzYpnjQxgtvyE%2FKCSOqShHQNTEEp9hSS2%2BTUcffFBhP7ZvhX%2BO5yMqEbMPmQ9cEGOqUBPH5LvHINjQ0h93BJVXsEcFr7Xa3EdF4VDR73gUkAkWvkYYY2EeF4512bVUYt4o541x8UGbYMnB4oUa56uftqE7t77kGHTn7qbsq4gST4aKlbugLzQdHvKmIfPmVHwSasTZcmpsvT3uH0HtXIKufYWd2oMW4AQ8Xo8Br7UnLGJMLmY%2B1ccNvig%2BJyOE96HZWfLeofsXs8mjl5SE95zfni43wXg2Dc&X-Amz-Signature=3277d23f0973794c0c3b4c938d27c1a4e4435f5f22824f6025d144d3f6d759cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE22AJB6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCP2Wp50n4kKuH8GECeBDoktAeT54ecaSk%2FajNRdG2ikwIgY3ZCbN0djvCtRlMGQHOu3Z1P0ILl2cr4c1QqfrHqI5wqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNxvloS39eyggGJNircA1L7lt3xstWTjdmzRoPVIfDDCI%2BSssuyOOsBtC%2FnnyZw3xMArb7LXko9MpO27tVZ5wnRzogAnSQPwPAdVCVCO%2FyKM1ju3VMk8c8o%2FpKdhxAhtAh9uWdM%2B5faQWMYJNs00VzLyzFc9r2X5J7GRU46G%2B4q65dk8huwEdQ4TIS5TaX%2BsdMvIl44%2Byd6BaSr3knx3DBj6ppO5LoRWx3TeVV6DYfsTYgGVDExqlAvHsOt%2FDJwXEpO%2BfspCC9LA6yRKrBO5fX0nYpV4XZpFUP%2Bx12zNP5sODP2EOCQ%2F9623AGZ8Vu%2F1Pfd0DIfu5sx7lNUeYFlsgLcFXHcEU7snbQ1GEg3qZtmhjJP48O6%2FmeM9pp6tY6KHgoWJZwmjaz5vtUe9kbZHaepbiNCmjCHPh8EBUpL1nezUdfU8ZgnVt%2F7mkE%2FFnN6SUPyEvvunr7AxtpIRxHK%2F6X7EBuL8FnpC5PnwirPS1Gy3ip621h5Do0%2BsIuMzZIsdiR%2FwF2tfW17Q52DsuwHDdLReI3t005l4KV8aou6%2Fs551qcQ88%2BFOhZJsQ%2FH8f4iEJXcv4ZwhD8iUQgj2%2BIYREkVEzYpnjQxgtvyE%2FKCSOqShHQNTEEp9hSS2%2BTUcffFBhP7ZvhX%2BO5yMqEbMPmQ9cEGOqUBPH5LvHINjQ0h93BJVXsEcFr7Xa3EdF4VDR73gUkAkWvkYYY2EeF4512bVUYt4o541x8UGbYMnB4oUa56uftqE7t77kGHTn7qbsq4gST4aKlbugLzQdHvKmIfPmVHwSasTZcmpsvT3uH0HtXIKufYWd2oMW4AQ8Xo8Br7UnLGJMLmY%2B1ccNvig%2BJyOE96HZWfLeofsXs8mjl5SE95zfni43wXg2Dc&X-Amz-Signature=99632da580a19a4bb1d41f6a6209147f9ee5e3d552c6895117b8f7da93528bba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE22AJB6%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCP2Wp50n4kKuH8GECeBDoktAeT54ecaSk%2FajNRdG2ikwIgY3ZCbN0djvCtRlMGQHOu3Z1P0ILl2cr4c1QqfrHqI5wqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNxvloS39eyggGJNircA1L7lt3xstWTjdmzRoPVIfDDCI%2BSssuyOOsBtC%2FnnyZw3xMArb7LXko9MpO27tVZ5wnRzogAnSQPwPAdVCVCO%2FyKM1ju3VMk8c8o%2FpKdhxAhtAh9uWdM%2B5faQWMYJNs00VzLyzFc9r2X5J7GRU46G%2B4q65dk8huwEdQ4TIS5TaX%2BsdMvIl44%2Byd6BaSr3knx3DBj6ppO5LoRWx3TeVV6DYfsTYgGVDExqlAvHsOt%2FDJwXEpO%2BfspCC9LA6yRKrBO5fX0nYpV4XZpFUP%2Bx12zNP5sODP2EOCQ%2F9623AGZ8Vu%2F1Pfd0DIfu5sx7lNUeYFlsgLcFXHcEU7snbQ1GEg3qZtmhjJP48O6%2FmeM9pp6tY6KHgoWJZwmjaz5vtUe9kbZHaepbiNCmjCHPh8EBUpL1nezUdfU8ZgnVt%2F7mkE%2FFnN6SUPyEvvunr7AxtpIRxHK%2F6X7EBuL8FnpC5PnwirPS1Gy3ip621h5Do0%2BsIuMzZIsdiR%2FwF2tfW17Q52DsuwHDdLReI3t005l4KV8aou6%2Fs551qcQ88%2BFOhZJsQ%2FH8f4iEJXcv4ZwhD8iUQgj2%2BIYREkVEzYpnjQxgtvyE%2FKCSOqShHQNTEEp9hSS2%2BTUcffFBhP7ZvhX%2BO5yMqEbMPmQ9cEGOqUBPH5LvHINjQ0h93BJVXsEcFr7Xa3EdF4VDR73gUkAkWvkYYY2EeF4512bVUYt4o541x8UGbYMnB4oUa56uftqE7t77kGHTn7qbsq4gST4aKlbugLzQdHvKmIfPmVHwSasTZcmpsvT3uH0HtXIKufYWd2oMW4AQ8Xo8Br7UnLGJMLmY%2B1ccNvig%2BJyOE96HZWfLeofsXs8mjl5SE95zfni43wXg2Dc&X-Amz-Signature=e5fbf6f758fc04ccf9a01157c08a340575bae1f1b2c03fef80ae4456d4db3dd2&X-Amz-SignedHeaders=host&x-id=GetObject)
