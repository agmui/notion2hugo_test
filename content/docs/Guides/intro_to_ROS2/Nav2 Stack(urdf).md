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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5LYEN6E%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHzmRkaFH%2FcVpbxgaJq14EU2VCHQEO8D40PcTjzGllH0AiEAzYeW9Dl4o1lONx6UUaV0jPjnq4yh4kVpJo5SKfqE694qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILBkHnWqkE43hV2TCrcA5KbdB0ceMfa8PIIq%2BvigXA1cMt1IbTzLwZ4j7geQAzGX1%2Fwjnx%2B%2F1Ae2LVyDzyXqegJ8H%2FjA7tJSt4Ox%2BG3OE1YqRCa8FI3ydu4VpNT3lyxZjCxeBxYC8N1NszFeTz9isjhcJTZvu%2FSQAyyn95Bls2oduSwLvsL3JMgdsiHgKgE3FziYXPs4mfwn7m93SST5EEa%2FhdKEJGj3QI7yXeQRN3%2FSPvVEHFCfM0MRrr991djW3MR6TcP63oQ7LqGnB%2BLAfmW9J0EvYBDYe%2BuQx1wrAt9VnN%2FqiiB8Qq9DTZQ6Z6PQUfR%2FNGqhicaxRS5ufPwOnLRMcq85N5cABH55znHVXUbpxxzcn1DwldJGqeNfU042zTjuWdK04mwLsuRMtOarNZr9wMLydYXhcRVnUxhf82NLnFy9RP7VzAivlw%2BJnWPuBqvX1qFyzvCJHIbds%2B%2BebOOQgFTFfH0umHin7WhzHsf2XzZCOIbKIjZw9KUiyycOmLZHYLNp8aoUajyqUkdii2hbD21N8E2P9h53AYO2PVZmi3%2BfE%2Fjrkp4PNNM1DGEqNjbXqdRBh1LztRY4c563Z1b6W81hnRmaHdg9LqrILKo1pUrqygGk760IGEvDnMnR2wU0SUWOwWiRFw9MNGZp8AGOqUBS7hn9re305a%2BBFJ9EcZBGdgDoChGSkEAHFOVCtTFckZcnoBfGnV2OD59y%2FUQE5M3uP98rtiWxr%2Fab37XmN5rwUqVw%2BVOeg63kOzRDSR3eyChLwzDQSCNrztG737z8X3f2XMABeh1kEUvQoQNm%2FcXI%2BAWu%2FNhonELmhrtyImpGbc23gjqmY0xiLE07m58xNq8K84gBN7hmtq2ATrjD4ZQT%2F%2FxpAJD&X-Amz-Signature=6da72965cc2f145be3e785ebd2360791ac3391bf35da8c489ee74748a6ff6e3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5LYEN6E%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHzmRkaFH%2FcVpbxgaJq14EU2VCHQEO8D40PcTjzGllH0AiEAzYeW9Dl4o1lONx6UUaV0jPjnq4yh4kVpJo5SKfqE694qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILBkHnWqkE43hV2TCrcA5KbdB0ceMfa8PIIq%2BvigXA1cMt1IbTzLwZ4j7geQAzGX1%2Fwjnx%2B%2F1Ae2LVyDzyXqegJ8H%2FjA7tJSt4Ox%2BG3OE1YqRCa8FI3ydu4VpNT3lyxZjCxeBxYC8N1NszFeTz9isjhcJTZvu%2FSQAyyn95Bls2oduSwLvsL3JMgdsiHgKgE3FziYXPs4mfwn7m93SST5EEa%2FhdKEJGj3QI7yXeQRN3%2FSPvVEHFCfM0MRrr991djW3MR6TcP63oQ7LqGnB%2BLAfmW9J0EvYBDYe%2BuQx1wrAt9VnN%2FqiiB8Qq9DTZQ6Z6PQUfR%2FNGqhicaxRS5ufPwOnLRMcq85N5cABH55znHVXUbpxxzcn1DwldJGqeNfU042zTjuWdK04mwLsuRMtOarNZr9wMLydYXhcRVnUxhf82NLnFy9RP7VzAivlw%2BJnWPuBqvX1qFyzvCJHIbds%2B%2BebOOQgFTFfH0umHin7WhzHsf2XzZCOIbKIjZw9KUiyycOmLZHYLNp8aoUajyqUkdii2hbD21N8E2P9h53AYO2PVZmi3%2BfE%2Fjrkp4PNNM1DGEqNjbXqdRBh1LztRY4c563Z1b6W81hnRmaHdg9LqrILKo1pUrqygGk760IGEvDnMnR2wU0SUWOwWiRFw9MNGZp8AGOqUBS7hn9re305a%2BBFJ9EcZBGdgDoChGSkEAHFOVCtTFckZcnoBfGnV2OD59y%2FUQE5M3uP98rtiWxr%2Fab37XmN5rwUqVw%2BVOeg63kOzRDSR3eyChLwzDQSCNrztG737z8X3f2XMABeh1kEUvQoQNm%2FcXI%2BAWu%2FNhonELmhrtyImpGbc23gjqmY0xiLE07m58xNq8K84gBN7hmtq2ATrjD4ZQT%2F%2FxpAJD&X-Amz-Signature=01db5022ae52ae06ec5cc43c582dc1c2a85529d8554a1dbe2397f18c82668059&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5LYEN6E%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHzmRkaFH%2FcVpbxgaJq14EU2VCHQEO8D40PcTjzGllH0AiEAzYeW9Dl4o1lONx6UUaV0jPjnq4yh4kVpJo5SKfqE694qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILBkHnWqkE43hV2TCrcA5KbdB0ceMfa8PIIq%2BvigXA1cMt1IbTzLwZ4j7geQAzGX1%2Fwjnx%2B%2F1Ae2LVyDzyXqegJ8H%2FjA7tJSt4Ox%2BG3OE1YqRCa8FI3ydu4VpNT3lyxZjCxeBxYC8N1NszFeTz9isjhcJTZvu%2FSQAyyn95Bls2oduSwLvsL3JMgdsiHgKgE3FziYXPs4mfwn7m93SST5EEa%2FhdKEJGj3QI7yXeQRN3%2FSPvVEHFCfM0MRrr991djW3MR6TcP63oQ7LqGnB%2BLAfmW9J0EvYBDYe%2BuQx1wrAt9VnN%2FqiiB8Qq9DTZQ6Z6PQUfR%2FNGqhicaxRS5ufPwOnLRMcq85N5cABH55znHVXUbpxxzcn1DwldJGqeNfU042zTjuWdK04mwLsuRMtOarNZr9wMLydYXhcRVnUxhf82NLnFy9RP7VzAivlw%2BJnWPuBqvX1qFyzvCJHIbds%2B%2BebOOQgFTFfH0umHin7WhzHsf2XzZCOIbKIjZw9KUiyycOmLZHYLNp8aoUajyqUkdii2hbD21N8E2P9h53AYO2PVZmi3%2BfE%2Fjrkp4PNNM1DGEqNjbXqdRBh1LztRY4c563Z1b6W81hnRmaHdg9LqrILKo1pUrqygGk760IGEvDnMnR2wU0SUWOwWiRFw9MNGZp8AGOqUBS7hn9re305a%2BBFJ9EcZBGdgDoChGSkEAHFOVCtTFckZcnoBfGnV2OD59y%2FUQE5M3uP98rtiWxr%2Fab37XmN5rwUqVw%2BVOeg63kOzRDSR3eyChLwzDQSCNrztG737z8X3f2XMABeh1kEUvQoQNm%2FcXI%2BAWu%2FNhonELmhrtyImpGbc23gjqmY0xiLE07m58xNq8K84gBN7hmtq2ATrjD4ZQT%2F%2FxpAJD&X-Amz-Signature=5f6154dcbc2faf06f8dc3b0c290410ffeb6ab281322e68ee63a80590ef0054c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5LYEN6E%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHzmRkaFH%2FcVpbxgaJq14EU2VCHQEO8D40PcTjzGllH0AiEAzYeW9Dl4o1lONx6UUaV0jPjnq4yh4kVpJo5SKfqE694qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILBkHnWqkE43hV2TCrcA5KbdB0ceMfa8PIIq%2BvigXA1cMt1IbTzLwZ4j7geQAzGX1%2Fwjnx%2B%2F1Ae2LVyDzyXqegJ8H%2FjA7tJSt4Ox%2BG3OE1YqRCa8FI3ydu4VpNT3lyxZjCxeBxYC8N1NszFeTz9isjhcJTZvu%2FSQAyyn95Bls2oduSwLvsL3JMgdsiHgKgE3FziYXPs4mfwn7m93SST5EEa%2FhdKEJGj3QI7yXeQRN3%2FSPvVEHFCfM0MRrr991djW3MR6TcP63oQ7LqGnB%2BLAfmW9J0EvYBDYe%2BuQx1wrAt9VnN%2FqiiB8Qq9DTZQ6Z6PQUfR%2FNGqhicaxRS5ufPwOnLRMcq85N5cABH55znHVXUbpxxzcn1DwldJGqeNfU042zTjuWdK04mwLsuRMtOarNZr9wMLydYXhcRVnUxhf82NLnFy9RP7VzAivlw%2BJnWPuBqvX1qFyzvCJHIbds%2B%2BebOOQgFTFfH0umHin7WhzHsf2XzZCOIbKIjZw9KUiyycOmLZHYLNp8aoUajyqUkdii2hbD21N8E2P9h53AYO2PVZmi3%2BfE%2Fjrkp4PNNM1DGEqNjbXqdRBh1LztRY4c563Z1b6W81hnRmaHdg9LqrILKo1pUrqygGk760IGEvDnMnR2wU0SUWOwWiRFw9MNGZp8AGOqUBS7hn9re305a%2BBFJ9EcZBGdgDoChGSkEAHFOVCtTFckZcnoBfGnV2OD59y%2FUQE5M3uP98rtiWxr%2Fab37XmN5rwUqVw%2BVOeg63kOzRDSR3eyChLwzDQSCNrztG737z8X3f2XMABeh1kEUvQoQNm%2FcXI%2BAWu%2FNhonELmhrtyImpGbc23gjqmY0xiLE07m58xNq8K84gBN7hmtq2ATrjD4ZQT%2F%2FxpAJD&X-Amz-Signature=0401c412cc5403287d1282493156ddfd38b2950a93dd896b92c2d65cfda3deca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5LYEN6E%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHzmRkaFH%2FcVpbxgaJq14EU2VCHQEO8D40PcTjzGllH0AiEAzYeW9Dl4o1lONx6UUaV0jPjnq4yh4kVpJo5SKfqE694qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILBkHnWqkE43hV2TCrcA5KbdB0ceMfa8PIIq%2BvigXA1cMt1IbTzLwZ4j7geQAzGX1%2Fwjnx%2B%2F1Ae2LVyDzyXqegJ8H%2FjA7tJSt4Ox%2BG3OE1YqRCa8FI3ydu4VpNT3lyxZjCxeBxYC8N1NszFeTz9isjhcJTZvu%2FSQAyyn95Bls2oduSwLvsL3JMgdsiHgKgE3FziYXPs4mfwn7m93SST5EEa%2FhdKEJGj3QI7yXeQRN3%2FSPvVEHFCfM0MRrr991djW3MR6TcP63oQ7LqGnB%2BLAfmW9J0EvYBDYe%2BuQx1wrAt9VnN%2FqiiB8Qq9DTZQ6Z6PQUfR%2FNGqhicaxRS5ufPwOnLRMcq85N5cABH55znHVXUbpxxzcn1DwldJGqeNfU042zTjuWdK04mwLsuRMtOarNZr9wMLydYXhcRVnUxhf82NLnFy9RP7VzAivlw%2BJnWPuBqvX1qFyzvCJHIbds%2B%2BebOOQgFTFfH0umHin7WhzHsf2XzZCOIbKIjZw9KUiyycOmLZHYLNp8aoUajyqUkdii2hbD21N8E2P9h53AYO2PVZmi3%2BfE%2Fjrkp4PNNM1DGEqNjbXqdRBh1LztRY4c563Z1b6W81hnRmaHdg9LqrILKo1pUrqygGk760IGEvDnMnR2wU0SUWOwWiRFw9MNGZp8AGOqUBS7hn9re305a%2BBFJ9EcZBGdgDoChGSkEAHFOVCtTFckZcnoBfGnV2OD59y%2FUQE5M3uP98rtiWxr%2Fab37XmN5rwUqVw%2BVOeg63kOzRDSR3eyChLwzDQSCNrztG737z8X3f2XMABeh1kEUvQoQNm%2FcXI%2BAWu%2FNhonELmhrtyImpGbc23gjqmY0xiLE07m58xNq8K84gBN7hmtq2ATrjD4ZQT%2F%2FxpAJD&X-Amz-Signature=6fe0cde5bf0d0b0c2f694b0e95061be1052039f94998c1b5df287d2642c7a876&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5LYEN6E%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T061239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHzmRkaFH%2FcVpbxgaJq14EU2VCHQEO8D40PcTjzGllH0AiEAzYeW9Dl4o1lONx6UUaV0jPjnq4yh4kVpJo5SKfqE694qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILBkHnWqkE43hV2TCrcA5KbdB0ceMfa8PIIq%2BvigXA1cMt1IbTzLwZ4j7geQAzGX1%2Fwjnx%2B%2F1Ae2LVyDzyXqegJ8H%2FjA7tJSt4Ox%2BG3OE1YqRCa8FI3ydu4VpNT3lyxZjCxeBxYC8N1NszFeTz9isjhcJTZvu%2FSQAyyn95Bls2oduSwLvsL3JMgdsiHgKgE3FziYXPs4mfwn7m93SST5EEa%2FhdKEJGj3QI7yXeQRN3%2FSPvVEHFCfM0MRrr991djW3MR6TcP63oQ7LqGnB%2BLAfmW9J0EvYBDYe%2BuQx1wrAt9VnN%2FqiiB8Qq9DTZQ6Z6PQUfR%2FNGqhicaxRS5ufPwOnLRMcq85N5cABH55znHVXUbpxxzcn1DwldJGqeNfU042zTjuWdK04mwLsuRMtOarNZr9wMLydYXhcRVnUxhf82NLnFy9RP7VzAivlw%2BJnWPuBqvX1qFyzvCJHIbds%2B%2BebOOQgFTFfH0umHin7WhzHsf2XzZCOIbKIjZw9KUiyycOmLZHYLNp8aoUajyqUkdii2hbD21N8E2P9h53AYO2PVZmi3%2BfE%2Fjrkp4PNNM1DGEqNjbXqdRBh1LztRY4c563Z1b6W81hnRmaHdg9LqrILKo1pUrqygGk760IGEvDnMnR2wU0SUWOwWiRFw9MNGZp8AGOqUBS7hn9re305a%2BBFJ9EcZBGdgDoChGSkEAHFOVCtTFckZcnoBfGnV2OD59y%2FUQE5M3uP98rtiWxr%2Fab37XmN5rwUqVw%2BVOeg63kOzRDSR3eyChLwzDQSCNrztG737z8X3f2XMABeh1kEUvQoQNm%2FcXI%2BAWu%2FNhonELmhrtyImpGbc23gjqmY0xiLE07m58xNq8K84gBN7hmtq2ATrjD4ZQT%2F%2FxpAJD&X-Amz-Signature=420bf8e1b9a7e6cc350ba98d44d9c658137e6cf38943cfc89120a2ea333911e9&X-Amz-SignedHeaders=host&x-id=GetObject)
