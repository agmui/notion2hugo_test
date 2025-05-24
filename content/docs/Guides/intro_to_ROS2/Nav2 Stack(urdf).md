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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I6EGXY7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDAyjMalQStJfRZQSBEG%2Fytk%2BJMNu5QSmcOfwiyPlvFIAiEAshj%2B%2Fh5dky34tRjvrMOy8sqXFtQKtmq%2BcR9%2BMFaxsnQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKhHynnVLXlWJMUssyrcA%2F51NKb8nmhk1Wcze8rhItMIF%2BcQU41tL2AvGpsWJGtf9%2BGX5gjo%2F%2F0nx9eG2GWotgy8LsWdylz2Q%2FdpmshyOXRb81TXUC6tfvHhNDOElJ%2BP4l9%2BjUhFzYEbJdxIpt7n6h7HWdfsEarkczj16rVRTtC4Mt%2F8jKXfhBUd2dm0bD8TZZk12SxG36PDoLiUSUs6PiY0rr6DpEJhYVfbBsYTaUPsjj7DsyWC8tbsBza3ZMrvVcpmoxNbPXGWCONKztkhITgvEa5geYNwaqZGQ72kh0L4qFNvjgQaV0bqUs522%2FGGI%2B%2Byjm9sK%2FNcoADUpQaQEn4v21EG1lN9r5raZrOUBUCcseYZdj6IK4xRv7N163BTzU8W9VtNpoSxEPgrU3t3zI3mW3QNYP3UFx4q1r7bmwdNN2yAI6Zmlx2TuMmvBt5j%2BltQEqV2O85CCN7MbLpYk1zakh%2F7gppc%2FOcam0yQ0b5%2BSUVcPe%2B4tJh8sMZAJH9eMd8LVW1B%2F4WhjLg68vmxcjgWSVJWur5ULzsWmiVqrUx1F%2BWv1SzduSk8MkKguujX7iGV%2FxPhJ1vxYPIy%2F43bM0W2B0j6xZV1keQvsCZud5jbIymbbeC3tnVigNph9E4qFAGxl7foL2SgG15%2FMPHsx8EGOqUBBWc5KOVoOsK1y38UARnK0cruy7NmfIWkX0xZe7ogygkcOmJu%2FiCDDxyTl1srONHveVKwE9rISbNCXw%2BwaqPOfGuVEsmAHhjR13gwNfRHCy7efnh%2BRKQjuE7Ct3oPMOOu%2FZp3e3zLW9sJJpIDy2D6DCLjO1YRc%2BBOwv6dsoIY52Qv7gM0q76JUTGf19s2qPBroH%2BWi0DBLVYqT%2BC6M2PmngYcUCPV&X-Amz-Signature=6c3bb4e35776fa71650565b882ac81580500d4b3b9c402fc0906b693ff44adde&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I6EGXY7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDAyjMalQStJfRZQSBEG%2Fytk%2BJMNu5QSmcOfwiyPlvFIAiEAshj%2B%2Fh5dky34tRjvrMOy8sqXFtQKtmq%2BcR9%2BMFaxsnQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKhHynnVLXlWJMUssyrcA%2F51NKb8nmhk1Wcze8rhItMIF%2BcQU41tL2AvGpsWJGtf9%2BGX5gjo%2F%2F0nx9eG2GWotgy8LsWdylz2Q%2FdpmshyOXRb81TXUC6tfvHhNDOElJ%2BP4l9%2BjUhFzYEbJdxIpt7n6h7HWdfsEarkczj16rVRTtC4Mt%2F8jKXfhBUd2dm0bD8TZZk12SxG36PDoLiUSUs6PiY0rr6DpEJhYVfbBsYTaUPsjj7DsyWC8tbsBza3ZMrvVcpmoxNbPXGWCONKztkhITgvEa5geYNwaqZGQ72kh0L4qFNvjgQaV0bqUs522%2FGGI%2B%2Byjm9sK%2FNcoADUpQaQEn4v21EG1lN9r5raZrOUBUCcseYZdj6IK4xRv7N163BTzU8W9VtNpoSxEPgrU3t3zI3mW3QNYP3UFx4q1r7bmwdNN2yAI6Zmlx2TuMmvBt5j%2BltQEqV2O85CCN7MbLpYk1zakh%2F7gppc%2FOcam0yQ0b5%2BSUVcPe%2B4tJh8sMZAJH9eMd8LVW1B%2F4WhjLg68vmxcjgWSVJWur5ULzsWmiVqrUx1F%2BWv1SzduSk8MkKguujX7iGV%2FxPhJ1vxYPIy%2F43bM0W2B0j6xZV1keQvsCZud5jbIymbbeC3tnVigNph9E4qFAGxl7foL2SgG15%2FMPHsx8EGOqUBBWc5KOVoOsK1y38UARnK0cruy7NmfIWkX0xZe7ogygkcOmJu%2FiCDDxyTl1srONHveVKwE9rISbNCXw%2BwaqPOfGuVEsmAHhjR13gwNfRHCy7efnh%2BRKQjuE7Ct3oPMOOu%2FZp3e3zLW9sJJpIDy2D6DCLjO1YRc%2BBOwv6dsoIY52Qv7gM0q76JUTGf19s2qPBroH%2BWi0DBLVYqT%2BC6M2PmngYcUCPV&X-Amz-Signature=04c8c76c6cce5a7708a34afc7a83d5295440b8a1fc21fc5722595565ed08844e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I6EGXY7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDAyjMalQStJfRZQSBEG%2Fytk%2BJMNu5QSmcOfwiyPlvFIAiEAshj%2B%2Fh5dky34tRjvrMOy8sqXFtQKtmq%2BcR9%2BMFaxsnQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKhHynnVLXlWJMUssyrcA%2F51NKb8nmhk1Wcze8rhItMIF%2BcQU41tL2AvGpsWJGtf9%2BGX5gjo%2F%2F0nx9eG2GWotgy8LsWdylz2Q%2FdpmshyOXRb81TXUC6tfvHhNDOElJ%2BP4l9%2BjUhFzYEbJdxIpt7n6h7HWdfsEarkczj16rVRTtC4Mt%2F8jKXfhBUd2dm0bD8TZZk12SxG36PDoLiUSUs6PiY0rr6DpEJhYVfbBsYTaUPsjj7DsyWC8tbsBza3ZMrvVcpmoxNbPXGWCONKztkhITgvEa5geYNwaqZGQ72kh0L4qFNvjgQaV0bqUs522%2FGGI%2B%2Byjm9sK%2FNcoADUpQaQEn4v21EG1lN9r5raZrOUBUCcseYZdj6IK4xRv7N163BTzU8W9VtNpoSxEPgrU3t3zI3mW3QNYP3UFx4q1r7bmwdNN2yAI6Zmlx2TuMmvBt5j%2BltQEqV2O85CCN7MbLpYk1zakh%2F7gppc%2FOcam0yQ0b5%2BSUVcPe%2B4tJh8sMZAJH9eMd8LVW1B%2F4WhjLg68vmxcjgWSVJWur5ULzsWmiVqrUx1F%2BWv1SzduSk8MkKguujX7iGV%2FxPhJ1vxYPIy%2F43bM0W2B0j6xZV1keQvsCZud5jbIymbbeC3tnVigNph9E4qFAGxl7foL2SgG15%2FMPHsx8EGOqUBBWc5KOVoOsK1y38UARnK0cruy7NmfIWkX0xZe7ogygkcOmJu%2FiCDDxyTl1srONHveVKwE9rISbNCXw%2BwaqPOfGuVEsmAHhjR13gwNfRHCy7efnh%2BRKQjuE7Ct3oPMOOu%2FZp3e3zLW9sJJpIDy2D6DCLjO1YRc%2BBOwv6dsoIY52Qv7gM0q76JUTGf19s2qPBroH%2BWi0DBLVYqT%2BC6M2PmngYcUCPV&X-Amz-Signature=be6624188d93c8c5c17651bd43756f785c8a19e81ebe79e180871c297404e794&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I6EGXY7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDAyjMalQStJfRZQSBEG%2Fytk%2BJMNu5QSmcOfwiyPlvFIAiEAshj%2B%2Fh5dky34tRjvrMOy8sqXFtQKtmq%2BcR9%2BMFaxsnQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKhHynnVLXlWJMUssyrcA%2F51NKb8nmhk1Wcze8rhItMIF%2BcQU41tL2AvGpsWJGtf9%2BGX5gjo%2F%2F0nx9eG2GWotgy8LsWdylz2Q%2FdpmshyOXRb81TXUC6tfvHhNDOElJ%2BP4l9%2BjUhFzYEbJdxIpt7n6h7HWdfsEarkczj16rVRTtC4Mt%2F8jKXfhBUd2dm0bD8TZZk12SxG36PDoLiUSUs6PiY0rr6DpEJhYVfbBsYTaUPsjj7DsyWC8tbsBza3ZMrvVcpmoxNbPXGWCONKztkhITgvEa5geYNwaqZGQ72kh0L4qFNvjgQaV0bqUs522%2FGGI%2B%2Byjm9sK%2FNcoADUpQaQEn4v21EG1lN9r5raZrOUBUCcseYZdj6IK4xRv7N163BTzU8W9VtNpoSxEPgrU3t3zI3mW3QNYP3UFx4q1r7bmwdNN2yAI6Zmlx2TuMmvBt5j%2BltQEqV2O85CCN7MbLpYk1zakh%2F7gppc%2FOcam0yQ0b5%2BSUVcPe%2B4tJh8sMZAJH9eMd8LVW1B%2F4WhjLg68vmxcjgWSVJWur5ULzsWmiVqrUx1F%2BWv1SzduSk8MkKguujX7iGV%2FxPhJ1vxYPIy%2F43bM0W2B0j6xZV1keQvsCZud5jbIymbbeC3tnVigNph9E4qFAGxl7foL2SgG15%2FMPHsx8EGOqUBBWc5KOVoOsK1y38UARnK0cruy7NmfIWkX0xZe7ogygkcOmJu%2FiCDDxyTl1srONHveVKwE9rISbNCXw%2BwaqPOfGuVEsmAHhjR13gwNfRHCy7efnh%2BRKQjuE7Ct3oPMOOu%2FZp3e3zLW9sJJpIDy2D6DCLjO1YRc%2BBOwv6dsoIY52Qv7gM0q76JUTGf19s2qPBroH%2BWi0DBLVYqT%2BC6M2PmngYcUCPV&X-Amz-Signature=5ac5e5e46f5dff4e5b531b72ce0a735d93422c4c68c951fdbc6b30425c13866a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I6EGXY7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDAyjMalQStJfRZQSBEG%2Fytk%2BJMNu5QSmcOfwiyPlvFIAiEAshj%2B%2Fh5dky34tRjvrMOy8sqXFtQKtmq%2BcR9%2BMFaxsnQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKhHynnVLXlWJMUssyrcA%2F51NKb8nmhk1Wcze8rhItMIF%2BcQU41tL2AvGpsWJGtf9%2BGX5gjo%2F%2F0nx9eG2GWotgy8LsWdylz2Q%2FdpmshyOXRb81TXUC6tfvHhNDOElJ%2BP4l9%2BjUhFzYEbJdxIpt7n6h7HWdfsEarkczj16rVRTtC4Mt%2F8jKXfhBUd2dm0bD8TZZk12SxG36PDoLiUSUs6PiY0rr6DpEJhYVfbBsYTaUPsjj7DsyWC8tbsBza3ZMrvVcpmoxNbPXGWCONKztkhITgvEa5geYNwaqZGQ72kh0L4qFNvjgQaV0bqUs522%2FGGI%2B%2Byjm9sK%2FNcoADUpQaQEn4v21EG1lN9r5raZrOUBUCcseYZdj6IK4xRv7N163BTzU8W9VtNpoSxEPgrU3t3zI3mW3QNYP3UFx4q1r7bmwdNN2yAI6Zmlx2TuMmvBt5j%2BltQEqV2O85CCN7MbLpYk1zakh%2F7gppc%2FOcam0yQ0b5%2BSUVcPe%2B4tJh8sMZAJH9eMd8LVW1B%2F4WhjLg68vmxcjgWSVJWur5ULzsWmiVqrUx1F%2BWv1SzduSk8MkKguujX7iGV%2FxPhJ1vxYPIy%2F43bM0W2B0j6xZV1keQvsCZud5jbIymbbeC3tnVigNph9E4qFAGxl7foL2SgG15%2FMPHsx8EGOqUBBWc5KOVoOsK1y38UARnK0cruy7NmfIWkX0xZe7ogygkcOmJu%2FiCDDxyTl1srONHveVKwE9rISbNCXw%2BwaqPOfGuVEsmAHhjR13gwNfRHCy7efnh%2BRKQjuE7Ct3oPMOOu%2FZp3e3zLW9sJJpIDy2D6DCLjO1YRc%2BBOwv6dsoIY52Qv7gM0q76JUTGf19s2qPBroH%2BWi0DBLVYqT%2BC6M2PmngYcUCPV&X-Amz-Signature=660ba1bbe52e2878d26e001dbcd777b4ea25160194f607e04bddcce216e2a7d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I6EGXY7%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T170254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJHMEUCIDAyjMalQStJfRZQSBEG%2Fytk%2BJMNu5QSmcOfwiyPlvFIAiEAshj%2B%2Fh5dky34tRjvrMOy8sqXFtQKtmq%2BcR9%2BMFaxsnQq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDKhHynnVLXlWJMUssyrcA%2F51NKb8nmhk1Wcze8rhItMIF%2BcQU41tL2AvGpsWJGtf9%2BGX5gjo%2F%2F0nx9eG2GWotgy8LsWdylz2Q%2FdpmshyOXRb81TXUC6tfvHhNDOElJ%2BP4l9%2BjUhFzYEbJdxIpt7n6h7HWdfsEarkczj16rVRTtC4Mt%2F8jKXfhBUd2dm0bD8TZZk12SxG36PDoLiUSUs6PiY0rr6DpEJhYVfbBsYTaUPsjj7DsyWC8tbsBza3ZMrvVcpmoxNbPXGWCONKztkhITgvEa5geYNwaqZGQ72kh0L4qFNvjgQaV0bqUs522%2FGGI%2B%2Byjm9sK%2FNcoADUpQaQEn4v21EG1lN9r5raZrOUBUCcseYZdj6IK4xRv7N163BTzU8W9VtNpoSxEPgrU3t3zI3mW3QNYP3UFx4q1r7bmwdNN2yAI6Zmlx2TuMmvBt5j%2BltQEqV2O85CCN7MbLpYk1zakh%2F7gppc%2FOcam0yQ0b5%2BSUVcPe%2B4tJh8sMZAJH9eMd8LVW1B%2F4WhjLg68vmxcjgWSVJWur5ULzsWmiVqrUx1F%2BWv1SzduSk8MkKguujX7iGV%2FxPhJ1vxYPIy%2F43bM0W2B0j6xZV1keQvsCZud5jbIymbbeC3tnVigNph9E4qFAGxl7foL2SgG15%2FMPHsx8EGOqUBBWc5KOVoOsK1y38UARnK0cruy7NmfIWkX0xZe7ogygkcOmJu%2FiCDDxyTl1srONHveVKwE9rISbNCXw%2BwaqPOfGuVEsmAHhjR13gwNfRHCy7efnh%2BRKQjuE7Ct3oPMOOu%2FZp3e3zLW9sJJpIDy2D6DCLjO1YRc%2BBOwv6dsoIY52Qv7gM0q76JUTGf19s2qPBroH%2BWi0DBLVYqT%2BC6M2PmngYcUCPV&X-Amz-Signature=e8edac8a7a0852420a3a2a4f8f13b636d98a83093c38888eb66c770592d3b706&X-Amz-SignedHeaders=host&x-id=GetObject)
