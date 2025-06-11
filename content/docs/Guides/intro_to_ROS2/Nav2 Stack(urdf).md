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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBUTQFB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg8VhAv7FUCGm5Jzvb9uYKfin7mUo8atJ1hMi%2B3Eep2AiASC7KZxIWm19uoQngaHLKJGze9BuJFyEMl2YSsCBV8FiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfgdjrBmVBdFnoqrSKtwDtNyJ4F22PRPe4HIhQX21EJ2Kp8CIjDgZtKP55gP52ag2W63wqB87NuMjvQUFYk469iBOt9gG44IcX44JlNkeAxeWJ%2B9SmiQeMqgaX%2Fx26CfQWxa7SpS%2FuOhPSL7cKy8vKLeAZ25kLp4TnR4LKKYN52HeBuTzSdA4OnUuPCsf5z9MfFprfartXRIAOUBM3hL7xpBc4v2N9O0wFHzLZ3LDXMrA5G5xy6Ju3jdT3NarF2jcFMMPydOioZUCmPo205qzkUatSGJDHhR6UDOrhFKTBrEeNBcPLvwlxIAlglE%2BCBg4s1AEhDi94UUQ4YicGs%2BHVIAAhZL%2Bcdr8EWYqiGJ7ElXGxDhOeMDnxY5NGpTimThNzTAV41zoneu8xkYtn%2BaUMENDJOcj694xYFbFtSiXG%2Bs6jrv%2Fn8jhLgIw59pjmCwkHnKP%2B2jsi4VxqzpG8O4cGiOng75Rj%2FGYts7eG6dnPBUVJa5plX9MDAauRLWPb7Sy21MpAs95kZKsyszsUmjOits7SF%2BuMUYsr34%2BD4Aj45TISjK8saf4HHcyu%2FJfArmvWbpXujNcXjEmY3594tp3ICgYRCASdrfCFokzqIA8iuEIVZcQFJG16W%2BOGM90l4NPdmpBcLRBRwrDPJQw3s%2BkwgY6pgF1UOLVRNvu%2BuPQNVDbrFS2eVCxyjxFObLIEbfc837UL2XVSxHCxO%2FdCCCc9K%2BEnx8VImtAxq6IFWGREScL0h8Qg5nc8QezrORtrocH%2BDvkI1hAfPZKJ%2FKwmrQ1ZyXl%2B%2FzfgNutsGMFGy2sVpjtnQc9Vn2oEBSZ9zi66ecdFK6%2F%2BzTtQmaCsji3Parf9cQbASBgknjc3SMoP%2Bb%2FNmb%2BQrFgixhdeT1f&X-Amz-Signature=6c5eeb21d8907be1a6cf3d2c9a5bcf5b8b82b54f772b52ba8997e60164d8293e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBUTQFB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg8VhAv7FUCGm5Jzvb9uYKfin7mUo8atJ1hMi%2B3Eep2AiASC7KZxIWm19uoQngaHLKJGze9BuJFyEMl2YSsCBV8FiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfgdjrBmVBdFnoqrSKtwDtNyJ4F22PRPe4HIhQX21EJ2Kp8CIjDgZtKP55gP52ag2W63wqB87NuMjvQUFYk469iBOt9gG44IcX44JlNkeAxeWJ%2B9SmiQeMqgaX%2Fx26CfQWxa7SpS%2FuOhPSL7cKy8vKLeAZ25kLp4TnR4LKKYN52HeBuTzSdA4OnUuPCsf5z9MfFprfartXRIAOUBM3hL7xpBc4v2N9O0wFHzLZ3LDXMrA5G5xy6Ju3jdT3NarF2jcFMMPydOioZUCmPo205qzkUatSGJDHhR6UDOrhFKTBrEeNBcPLvwlxIAlglE%2BCBg4s1AEhDi94UUQ4YicGs%2BHVIAAhZL%2Bcdr8EWYqiGJ7ElXGxDhOeMDnxY5NGpTimThNzTAV41zoneu8xkYtn%2BaUMENDJOcj694xYFbFtSiXG%2Bs6jrv%2Fn8jhLgIw59pjmCwkHnKP%2B2jsi4VxqzpG8O4cGiOng75Rj%2FGYts7eG6dnPBUVJa5plX9MDAauRLWPb7Sy21MpAs95kZKsyszsUmjOits7SF%2BuMUYsr34%2BD4Aj45TISjK8saf4HHcyu%2FJfArmvWbpXujNcXjEmY3594tp3ICgYRCASdrfCFokzqIA8iuEIVZcQFJG16W%2BOGM90l4NPdmpBcLRBRwrDPJQw3s%2BkwgY6pgF1UOLVRNvu%2BuPQNVDbrFS2eVCxyjxFObLIEbfc837UL2XVSxHCxO%2FdCCCc9K%2BEnx8VImtAxq6IFWGREScL0h8Qg5nc8QezrORtrocH%2BDvkI1hAfPZKJ%2FKwmrQ1ZyXl%2B%2FzfgNutsGMFGy2sVpjtnQc9Vn2oEBSZ9zi66ecdFK6%2F%2BzTtQmaCsji3Parf9cQbASBgknjc3SMoP%2Bb%2FNmb%2BQrFgixhdeT1f&X-Amz-Signature=5c7a64e239af8357d7c65ae3f7ebd6d3434b6ee380fd8ad8f3a131f14e18ed0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBUTQFB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg8VhAv7FUCGm5Jzvb9uYKfin7mUo8atJ1hMi%2B3Eep2AiASC7KZxIWm19uoQngaHLKJGze9BuJFyEMl2YSsCBV8FiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfgdjrBmVBdFnoqrSKtwDtNyJ4F22PRPe4HIhQX21EJ2Kp8CIjDgZtKP55gP52ag2W63wqB87NuMjvQUFYk469iBOt9gG44IcX44JlNkeAxeWJ%2B9SmiQeMqgaX%2Fx26CfQWxa7SpS%2FuOhPSL7cKy8vKLeAZ25kLp4TnR4LKKYN52HeBuTzSdA4OnUuPCsf5z9MfFprfartXRIAOUBM3hL7xpBc4v2N9O0wFHzLZ3LDXMrA5G5xy6Ju3jdT3NarF2jcFMMPydOioZUCmPo205qzkUatSGJDHhR6UDOrhFKTBrEeNBcPLvwlxIAlglE%2BCBg4s1AEhDi94UUQ4YicGs%2BHVIAAhZL%2Bcdr8EWYqiGJ7ElXGxDhOeMDnxY5NGpTimThNzTAV41zoneu8xkYtn%2BaUMENDJOcj694xYFbFtSiXG%2Bs6jrv%2Fn8jhLgIw59pjmCwkHnKP%2B2jsi4VxqzpG8O4cGiOng75Rj%2FGYts7eG6dnPBUVJa5plX9MDAauRLWPb7Sy21MpAs95kZKsyszsUmjOits7SF%2BuMUYsr34%2BD4Aj45TISjK8saf4HHcyu%2FJfArmvWbpXujNcXjEmY3594tp3ICgYRCASdrfCFokzqIA8iuEIVZcQFJG16W%2BOGM90l4NPdmpBcLRBRwrDPJQw3s%2BkwgY6pgF1UOLVRNvu%2BuPQNVDbrFS2eVCxyjxFObLIEbfc837UL2XVSxHCxO%2FdCCCc9K%2BEnx8VImtAxq6IFWGREScL0h8Qg5nc8QezrORtrocH%2BDvkI1hAfPZKJ%2FKwmrQ1ZyXl%2B%2FzfgNutsGMFGy2sVpjtnQc9Vn2oEBSZ9zi66ecdFK6%2F%2BzTtQmaCsji3Parf9cQbASBgknjc3SMoP%2Bb%2FNmb%2BQrFgixhdeT1f&X-Amz-Signature=e75863d3dcdbf5be170838cf7639ea1ea4fb05da074dbfa3b14ae1cf28408a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBUTQFB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg8VhAv7FUCGm5Jzvb9uYKfin7mUo8atJ1hMi%2B3Eep2AiASC7KZxIWm19uoQngaHLKJGze9BuJFyEMl2YSsCBV8FiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfgdjrBmVBdFnoqrSKtwDtNyJ4F22PRPe4HIhQX21EJ2Kp8CIjDgZtKP55gP52ag2W63wqB87NuMjvQUFYk469iBOt9gG44IcX44JlNkeAxeWJ%2B9SmiQeMqgaX%2Fx26CfQWxa7SpS%2FuOhPSL7cKy8vKLeAZ25kLp4TnR4LKKYN52HeBuTzSdA4OnUuPCsf5z9MfFprfartXRIAOUBM3hL7xpBc4v2N9O0wFHzLZ3LDXMrA5G5xy6Ju3jdT3NarF2jcFMMPydOioZUCmPo205qzkUatSGJDHhR6UDOrhFKTBrEeNBcPLvwlxIAlglE%2BCBg4s1AEhDi94UUQ4YicGs%2BHVIAAhZL%2Bcdr8EWYqiGJ7ElXGxDhOeMDnxY5NGpTimThNzTAV41zoneu8xkYtn%2BaUMENDJOcj694xYFbFtSiXG%2Bs6jrv%2Fn8jhLgIw59pjmCwkHnKP%2B2jsi4VxqzpG8O4cGiOng75Rj%2FGYts7eG6dnPBUVJa5plX9MDAauRLWPb7Sy21MpAs95kZKsyszsUmjOits7SF%2BuMUYsr34%2BD4Aj45TISjK8saf4HHcyu%2FJfArmvWbpXujNcXjEmY3594tp3ICgYRCASdrfCFokzqIA8iuEIVZcQFJG16W%2BOGM90l4NPdmpBcLRBRwrDPJQw3s%2BkwgY6pgF1UOLVRNvu%2BuPQNVDbrFS2eVCxyjxFObLIEbfc837UL2XVSxHCxO%2FdCCCc9K%2BEnx8VImtAxq6IFWGREScL0h8Qg5nc8QezrORtrocH%2BDvkI1hAfPZKJ%2FKwmrQ1ZyXl%2B%2FzfgNutsGMFGy2sVpjtnQc9Vn2oEBSZ9zi66ecdFK6%2F%2BzTtQmaCsji3Parf9cQbASBgknjc3SMoP%2Bb%2FNmb%2BQrFgixhdeT1f&X-Amz-Signature=2e59d19d0f822d7bc0fb61dbac5df80e7b8580618934b269c8d1c380cc637fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBUTQFB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg8VhAv7FUCGm5Jzvb9uYKfin7mUo8atJ1hMi%2B3Eep2AiASC7KZxIWm19uoQngaHLKJGze9BuJFyEMl2YSsCBV8FiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfgdjrBmVBdFnoqrSKtwDtNyJ4F22PRPe4HIhQX21EJ2Kp8CIjDgZtKP55gP52ag2W63wqB87NuMjvQUFYk469iBOt9gG44IcX44JlNkeAxeWJ%2B9SmiQeMqgaX%2Fx26CfQWxa7SpS%2FuOhPSL7cKy8vKLeAZ25kLp4TnR4LKKYN52HeBuTzSdA4OnUuPCsf5z9MfFprfartXRIAOUBM3hL7xpBc4v2N9O0wFHzLZ3LDXMrA5G5xy6Ju3jdT3NarF2jcFMMPydOioZUCmPo205qzkUatSGJDHhR6UDOrhFKTBrEeNBcPLvwlxIAlglE%2BCBg4s1AEhDi94UUQ4YicGs%2BHVIAAhZL%2Bcdr8EWYqiGJ7ElXGxDhOeMDnxY5NGpTimThNzTAV41zoneu8xkYtn%2BaUMENDJOcj694xYFbFtSiXG%2Bs6jrv%2Fn8jhLgIw59pjmCwkHnKP%2B2jsi4VxqzpG8O4cGiOng75Rj%2FGYts7eG6dnPBUVJa5plX9MDAauRLWPb7Sy21MpAs95kZKsyszsUmjOits7SF%2BuMUYsr34%2BD4Aj45TISjK8saf4HHcyu%2FJfArmvWbpXujNcXjEmY3594tp3ICgYRCASdrfCFokzqIA8iuEIVZcQFJG16W%2BOGM90l4NPdmpBcLRBRwrDPJQw3s%2BkwgY6pgF1UOLVRNvu%2BuPQNVDbrFS2eVCxyjxFObLIEbfc837UL2XVSxHCxO%2FdCCCc9K%2BEnx8VImtAxq6IFWGREScL0h8Qg5nc8QezrORtrocH%2BDvkI1hAfPZKJ%2FKwmrQ1ZyXl%2B%2FzfgNutsGMFGy2sVpjtnQc9Vn2oEBSZ9zi66ecdFK6%2F%2BzTtQmaCsji3Parf9cQbASBgknjc3SMoP%2Bb%2FNmb%2BQrFgixhdeT1f&X-Amz-Signature=a90af24921a387de9bcea99bd8118fe991f8ea80d13a1f4de08ee59eff95f3a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PBUTQFB%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg8VhAv7FUCGm5Jzvb9uYKfin7mUo8atJ1hMi%2B3Eep2AiASC7KZxIWm19uoQngaHLKJGze9BuJFyEMl2YSsCBV8FiqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfgdjrBmVBdFnoqrSKtwDtNyJ4F22PRPe4HIhQX21EJ2Kp8CIjDgZtKP55gP52ag2W63wqB87NuMjvQUFYk469iBOt9gG44IcX44JlNkeAxeWJ%2B9SmiQeMqgaX%2Fx26CfQWxa7SpS%2FuOhPSL7cKy8vKLeAZ25kLp4TnR4LKKYN52HeBuTzSdA4OnUuPCsf5z9MfFprfartXRIAOUBM3hL7xpBc4v2N9O0wFHzLZ3LDXMrA5G5xy6Ju3jdT3NarF2jcFMMPydOioZUCmPo205qzkUatSGJDHhR6UDOrhFKTBrEeNBcPLvwlxIAlglE%2BCBg4s1AEhDi94UUQ4YicGs%2BHVIAAhZL%2Bcdr8EWYqiGJ7ElXGxDhOeMDnxY5NGpTimThNzTAV41zoneu8xkYtn%2BaUMENDJOcj694xYFbFtSiXG%2Bs6jrv%2Fn8jhLgIw59pjmCwkHnKP%2B2jsi4VxqzpG8O4cGiOng75Rj%2FGYts7eG6dnPBUVJa5plX9MDAauRLWPb7Sy21MpAs95kZKsyszsUmjOits7SF%2BuMUYsr34%2BD4Aj45TISjK8saf4HHcyu%2FJfArmvWbpXujNcXjEmY3594tp3ICgYRCASdrfCFokzqIA8iuEIVZcQFJG16W%2BOGM90l4NPdmpBcLRBRwrDPJQw3s%2BkwgY6pgF1UOLVRNvu%2BuPQNVDbrFS2eVCxyjxFObLIEbfc837UL2XVSxHCxO%2FdCCCc9K%2BEnx8VImtAxq6IFWGREScL0h8Qg5nc8QezrORtrocH%2BDvkI1hAfPZKJ%2FKwmrQ1ZyXl%2B%2FzfgNutsGMFGy2sVpjtnQc9Vn2oEBSZ9zi66ecdFK6%2F%2BzTtQmaCsji3Parf9cQbASBgknjc3SMoP%2Bb%2FNmb%2BQrFgixhdeT1f&X-Amz-Signature=bd0f9cee2e43df0566a818bbeaf91154bb0bf05ab6fe034ba362c7f7909d8eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
