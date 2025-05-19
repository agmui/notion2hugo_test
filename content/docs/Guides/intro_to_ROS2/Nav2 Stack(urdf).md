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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMWCAYG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxjb4LaLe3%2BvHMlN%2BWeq%2BJLM79%2B%2Fx%2FlIkDT9zutX4FiQIgRpVXRjEfr2S5fzDBa09svyb71YydrkL6pTmNxUOGOCsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg2%2FW8%2BVoRBVR6OGCrcA%2FsblGvG40UUje04GxUB6c9Go9f5z3uKJhD%2BWGCK8jpKfEg%2F4d0lYDVK5iJTRg%2BMeWnDxdOYwhKnLmtxRnwbf%2F99vacmHB%2BicirqqPXgtUYEb0rTQZfzKwHVZiUdnJLUId0odmmg373fOAW%2BNQ1j5RlR3twALXRXjbN%2FZPZiLBpd46C4Cnk9%2B5jG9%2Fsgmo8jNJRXuWQqQuyobzZvl3DmyJNsofEktwB4df3vHQPjgTou9%2Bis2rOx%2B%2BjeGMZhzWqvhPng1sZny6LRSpRpvk4YBdqTU33AUpiWaufe4BZUGhARXfd7iF6YNjHYvBAm8roydA9NAJF0ePPV3lMz9m3rVMFhM2dXV5Wynyx6DyJTXc4YEnO1UZ61aTnsJJwWFnt7hTDSjAaP8Rgfz3raQgmwHMfFJOJvoxOWSmRcFlEk9kutdno16g4BWIMaWZpjyiQsc%2FnsOVD%2F9v%2BY1EheJDYX9uSEk9F%2BxMzbvEOwccfy%2BXtCZdUHGHqzB2iYgiWkTE8de6%2F0UQaKbzoDTiGzpzzSrJ6MT5SOezvUNwaihKKPL2LYMfpx3MYlDRDLaRg2E8bXacV3z4fUSPP7b8msXovLnD5MZNW3V6cg3KS2AKHz1mG9wGLglhl3h1vbP395MIWxrMEGOqUB%2BMmgSo8mlwIoKxJEu73vw%2Bzc0MxYkosMKCZ6cJlFdzfj3kwGx9Ae2cN8JJqZUbjC%2BNPMeJwns0vyBv7FrTLo5iTZAozPSniYuxuB%2F4BwtcTAcKd6gvSiM3JFPqiJ1UFHJgKPXVBbYJvJqPk9PboK3hriXCdS7hbaHwLfAz7jUis3Eqd0bHgTuvTiYSYbXGBncMUwHpnTOPE2q528v9InpetwI4XK&X-Amz-Signature=149690ee9b9c929c6551b8c0da8c6e7faa32f0a203641490b62d52c60af7d7a4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMWCAYG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxjb4LaLe3%2BvHMlN%2BWeq%2BJLM79%2B%2Fx%2FlIkDT9zutX4FiQIgRpVXRjEfr2S5fzDBa09svyb71YydrkL6pTmNxUOGOCsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg2%2FW8%2BVoRBVR6OGCrcA%2FsblGvG40UUje04GxUB6c9Go9f5z3uKJhD%2BWGCK8jpKfEg%2F4d0lYDVK5iJTRg%2BMeWnDxdOYwhKnLmtxRnwbf%2F99vacmHB%2BicirqqPXgtUYEb0rTQZfzKwHVZiUdnJLUId0odmmg373fOAW%2BNQ1j5RlR3twALXRXjbN%2FZPZiLBpd46C4Cnk9%2B5jG9%2Fsgmo8jNJRXuWQqQuyobzZvl3DmyJNsofEktwB4df3vHQPjgTou9%2Bis2rOx%2B%2BjeGMZhzWqvhPng1sZny6LRSpRpvk4YBdqTU33AUpiWaufe4BZUGhARXfd7iF6YNjHYvBAm8roydA9NAJF0ePPV3lMz9m3rVMFhM2dXV5Wynyx6DyJTXc4YEnO1UZ61aTnsJJwWFnt7hTDSjAaP8Rgfz3raQgmwHMfFJOJvoxOWSmRcFlEk9kutdno16g4BWIMaWZpjyiQsc%2FnsOVD%2F9v%2BY1EheJDYX9uSEk9F%2BxMzbvEOwccfy%2BXtCZdUHGHqzB2iYgiWkTE8de6%2F0UQaKbzoDTiGzpzzSrJ6MT5SOezvUNwaihKKPL2LYMfpx3MYlDRDLaRg2E8bXacV3z4fUSPP7b8msXovLnD5MZNW3V6cg3KS2AKHz1mG9wGLglhl3h1vbP395MIWxrMEGOqUB%2BMmgSo8mlwIoKxJEu73vw%2Bzc0MxYkosMKCZ6cJlFdzfj3kwGx9Ae2cN8JJqZUbjC%2BNPMeJwns0vyBv7FrTLo5iTZAozPSniYuxuB%2F4BwtcTAcKd6gvSiM3JFPqiJ1UFHJgKPXVBbYJvJqPk9PboK3hriXCdS7hbaHwLfAz7jUis3Eqd0bHgTuvTiYSYbXGBncMUwHpnTOPE2q528v9InpetwI4XK&X-Amz-Signature=c4f64383683ef61dd425003d8faf371059ea1e5d6f80480a0f269711d1c23530&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMWCAYG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxjb4LaLe3%2BvHMlN%2BWeq%2BJLM79%2B%2Fx%2FlIkDT9zutX4FiQIgRpVXRjEfr2S5fzDBa09svyb71YydrkL6pTmNxUOGOCsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg2%2FW8%2BVoRBVR6OGCrcA%2FsblGvG40UUje04GxUB6c9Go9f5z3uKJhD%2BWGCK8jpKfEg%2F4d0lYDVK5iJTRg%2BMeWnDxdOYwhKnLmtxRnwbf%2F99vacmHB%2BicirqqPXgtUYEb0rTQZfzKwHVZiUdnJLUId0odmmg373fOAW%2BNQ1j5RlR3twALXRXjbN%2FZPZiLBpd46C4Cnk9%2B5jG9%2Fsgmo8jNJRXuWQqQuyobzZvl3DmyJNsofEktwB4df3vHQPjgTou9%2Bis2rOx%2B%2BjeGMZhzWqvhPng1sZny6LRSpRpvk4YBdqTU33AUpiWaufe4BZUGhARXfd7iF6YNjHYvBAm8roydA9NAJF0ePPV3lMz9m3rVMFhM2dXV5Wynyx6DyJTXc4YEnO1UZ61aTnsJJwWFnt7hTDSjAaP8Rgfz3raQgmwHMfFJOJvoxOWSmRcFlEk9kutdno16g4BWIMaWZpjyiQsc%2FnsOVD%2F9v%2BY1EheJDYX9uSEk9F%2BxMzbvEOwccfy%2BXtCZdUHGHqzB2iYgiWkTE8de6%2F0UQaKbzoDTiGzpzzSrJ6MT5SOezvUNwaihKKPL2LYMfpx3MYlDRDLaRg2E8bXacV3z4fUSPP7b8msXovLnD5MZNW3V6cg3KS2AKHz1mG9wGLglhl3h1vbP395MIWxrMEGOqUB%2BMmgSo8mlwIoKxJEu73vw%2Bzc0MxYkosMKCZ6cJlFdzfj3kwGx9Ae2cN8JJqZUbjC%2BNPMeJwns0vyBv7FrTLo5iTZAozPSniYuxuB%2F4BwtcTAcKd6gvSiM3JFPqiJ1UFHJgKPXVBbYJvJqPk9PboK3hriXCdS7hbaHwLfAz7jUis3Eqd0bHgTuvTiYSYbXGBncMUwHpnTOPE2q528v9InpetwI4XK&X-Amz-Signature=42bd80e7c4ff462642c4c758b8c89850eec4a441f9b58f13ab44809ab7f80af2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMWCAYG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxjb4LaLe3%2BvHMlN%2BWeq%2BJLM79%2B%2Fx%2FlIkDT9zutX4FiQIgRpVXRjEfr2S5fzDBa09svyb71YydrkL6pTmNxUOGOCsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg2%2FW8%2BVoRBVR6OGCrcA%2FsblGvG40UUje04GxUB6c9Go9f5z3uKJhD%2BWGCK8jpKfEg%2F4d0lYDVK5iJTRg%2BMeWnDxdOYwhKnLmtxRnwbf%2F99vacmHB%2BicirqqPXgtUYEb0rTQZfzKwHVZiUdnJLUId0odmmg373fOAW%2BNQ1j5RlR3twALXRXjbN%2FZPZiLBpd46C4Cnk9%2B5jG9%2Fsgmo8jNJRXuWQqQuyobzZvl3DmyJNsofEktwB4df3vHQPjgTou9%2Bis2rOx%2B%2BjeGMZhzWqvhPng1sZny6LRSpRpvk4YBdqTU33AUpiWaufe4BZUGhARXfd7iF6YNjHYvBAm8roydA9NAJF0ePPV3lMz9m3rVMFhM2dXV5Wynyx6DyJTXc4YEnO1UZ61aTnsJJwWFnt7hTDSjAaP8Rgfz3raQgmwHMfFJOJvoxOWSmRcFlEk9kutdno16g4BWIMaWZpjyiQsc%2FnsOVD%2F9v%2BY1EheJDYX9uSEk9F%2BxMzbvEOwccfy%2BXtCZdUHGHqzB2iYgiWkTE8de6%2F0UQaKbzoDTiGzpzzSrJ6MT5SOezvUNwaihKKPL2LYMfpx3MYlDRDLaRg2E8bXacV3z4fUSPP7b8msXovLnD5MZNW3V6cg3KS2AKHz1mG9wGLglhl3h1vbP395MIWxrMEGOqUB%2BMmgSo8mlwIoKxJEu73vw%2Bzc0MxYkosMKCZ6cJlFdzfj3kwGx9Ae2cN8JJqZUbjC%2BNPMeJwns0vyBv7FrTLo5iTZAozPSniYuxuB%2F4BwtcTAcKd6gvSiM3JFPqiJ1UFHJgKPXVBbYJvJqPk9PboK3hriXCdS7hbaHwLfAz7jUis3Eqd0bHgTuvTiYSYbXGBncMUwHpnTOPE2q528v9InpetwI4XK&X-Amz-Signature=e3d19b5b8d10b4f7c22f599fb7aca25a6dc5da84bf463ffcc5282cdc4c818a7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMWCAYG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxjb4LaLe3%2BvHMlN%2BWeq%2BJLM79%2B%2Fx%2FlIkDT9zutX4FiQIgRpVXRjEfr2S5fzDBa09svyb71YydrkL6pTmNxUOGOCsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg2%2FW8%2BVoRBVR6OGCrcA%2FsblGvG40UUje04GxUB6c9Go9f5z3uKJhD%2BWGCK8jpKfEg%2F4d0lYDVK5iJTRg%2BMeWnDxdOYwhKnLmtxRnwbf%2F99vacmHB%2BicirqqPXgtUYEb0rTQZfzKwHVZiUdnJLUId0odmmg373fOAW%2BNQ1j5RlR3twALXRXjbN%2FZPZiLBpd46C4Cnk9%2B5jG9%2Fsgmo8jNJRXuWQqQuyobzZvl3DmyJNsofEktwB4df3vHQPjgTou9%2Bis2rOx%2B%2BjeGMZhzWqvhPng1sZny6LRSpRpvk4YBdqTU33AUpiWaufe4BZUGhARXfd7iF6YNjHYvBAm8roydA9NAJF0ePPV3lMz9m3rVMFhM2dXV5Wynyx6DyJTXc4YEnO1UZ61aTnsJJwWFnt7hTDSjAaP8Rgfz3raQgmwHMfFJOJvoxOWSmRcFlEk9kutdno16g4BWIMaWZpjyiQsc%2FnsOVD%2F9v%2BY1EheJDYX9uSEk9F%2BxMzbvEOwccfy%2BXtCZdUHGHqzB2iYgiWkTE8de6%2F0UQaKbzoDTiGzpzzSrJ6MT5SOezvUNwaihKKPL2LYMfpx3MYlDRDLaRg2E8bXacV3z4fUSPP7b8msXovLnD5MZNW3V6cg3KS2AKHz1mG9wGLglhl3h1vbP395MIWxrMEGOqUB%2BMmgSo8mlwIoKxJEu73vw%2Bzc0MxYkosMKCZ6cJlFdzfj3kwGx9Ae2cN8JJqZUbjC%2BNPMeJwns0vyBv7FrTLo5iTZAozPSniYuxuB%2F4BwtcTAcKd6gvSiM3JFPqiJ1UFHJgKPXVBbYJvJqPk9PboK3hriXCdS7hbaHwLfAz7jUis3Eqd0bHgTuvTiYSYbXGBncMUwHpnTOPE2q528v9InpetwI4XK&X-Amz-Signature=3904ebbc182cb319f32379d74a01322414a9f19fd9ebef38297fad91ba500629&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WMWCAYG%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T132451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxjb4LaLe3%2BvHMlN%2BWeq%2BJLM79%2B%2Fx%2FlIkDT9zutX4FiQIgRpVXRjEfr2S5fzDBa09svyb71YydrkL6pTmNxUOGOCsqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBg2%2FW8%2BVoRBVR6OGCrcA%2FsblGvG40UUje04GxUB6c9Go9f5z3uKJhD%2BWGCK8jpKfEg%2F4d0lYDVK5iJTRg%2BMeWnDxdOYwhKnLmtxRnwbf%2F99vacmHB%2BicirqqPXgtUYEb0rTQZfzKwHVZiUdnJLUId0odmmg373fOAW%2BNQ1j5RlR3twALXRXjbN%2FZPZiLBpd46C4Cnk9%2B5jG9%2Fsgmo8jNJRXuWQqQuyobzZvl3DmyJNsofEktwB4df3vHQPjgTou9%2Bis2rOx%2B%2BjeGMZhzWqvhPng1sZny6LRSpRpvk4YBdqTU33AUpiWaufe4BZUGhARXfd7iF6YNjHYvBAm8roydA9NAJF0ePPV3lMz9m3rVMFhM2dXV5Wynyx6DyJTXc4YEnO1UZ61aTnsJJwWFnt7hTDSjAaP8Rgfz3raQgmwHMfFJOJvoxOWSmRcFlEk9kutdno16g4BWIMaWZpjyiQsc%2FnsOVD%2F9v%2BY1EheJDYX9uSEk9F%2BxMzbvEOwccfy%2BXtCZdUHGHqzB2iYgiWkTE8de6%2F0UQaKbzoDTiGzpzzSrJ6MT5SOezvUNwaihKKPL2LYMfpx3MYlDRDLaRg2E8bXacV3z4fUSPP7b8msXovLnD5MZNW3V6cg3KS2AKHz1mG9wGLglhl3h1vbP395MIWxrMEGOqUB%2BMmgSo8mlwIoKxJEu73vw%2Bzc0MxYkosMKCZ6cJlFdzfj3kwGx9Ae2cN8JJqZUbjC%2BNPMeJwns0vyBv7FrTLo5iTZAozPSniYuxuB%2F4BwtcTAcKd6gvSiM3JFPqiJ1UFHJgKPXVBbYJvJqPk9PboK3hriXCdS7hbaHwLfAz7jUis3Eqd0bHgTuvTiYSYbXGBncMUwHpnTOPE2q528v9InpetwI4XK&X-Amz-Signature=f137cb6ccdbdfdfd069ec97ea9899cb8a64a3b70a10a9b92a7e0c0a69589cca5&X-Amz-SignedHeaders=host&x-id=GetObject)
