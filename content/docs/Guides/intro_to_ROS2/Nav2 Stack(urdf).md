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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH63SOOT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfX%2FWZEbEgHBbXMcV%2FFfuTSaYirGtcRFwSwiHj6KqN7QIgWc41ND39d%2BbeGBSuYdbexB7pESMealH9DHbS6w10k8cqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH38o4cSYqqnoCRrOCrcAyd5ZJ%2B9crPDx1bNBUnv%2BvgbS6PL5t3hWvtb%2B54jVJYZp2%2F7tSOEdHGD6fwW5O%2FmyqLak9OxevnlYLQfwCK203mi6YsL9VQoEviBdwojqQ4SPQ1fd9mKOqYSelKeqo6knlVkdZR7A3lZNl7U6s0NXGzqNyUbz88EL%2F4OYJr7WWSTrhYHjWIVeXYzJlRfbUANy4Ca84DkrCF2bgy4wiNtnGhYFbpOEjDuaA2D4%2BUqeE3Jx8oD5UZQTp4sgXINFul91cETEmooZhN1IiUPiXgR6Ob81CpZlCVG1GXeHScr0Sew1Jzv0SbXptzWqoqRzLUfl9DYNZUcjNMRJwIIvioClU3w6cbipp2aREMKkcZUE9yuctTkpyU7bUFalmedJ6G0GTiGAocE0%2FAts4YAjbB5UQDwxc44U%2BHDRE6E2Z5r72dyHPi1tcvc7F%2FraXvKax%2BYb0qus8uzFUMJO5QOP3xbk4IZvXuou8WB3KplO8aaUYBtDwJM1nYmoAcGwA0APOthwV0nbU4M3UksIDDiEdYUICU3TEKl6HJ0ABnCnZIad7AMYRrfaHyFn4FwclMAAufiumADrz529fhLGIDcWAFT0xlJuM0uz6DfH%2BazaYdhBaqa3o2NRISDpTB342C2MP%2BE4MEGOqUBKNkxv6ePuKIQzQK9ht06f2Zdyk244XKDJZ9QAS%2FUag6fJetNYX%2FE3Xaj0B6zcDpHbiRIBraSlgQVx0jWvCbq3%2FwSbQ3bYTD20Qz3rJ7mz2PZoj16TXSjhsRwyPUFlDrKKYNC6x2uguhRZw3JfkEIL5ZTyI6I%2BUuR%2BJDPojb57Nbol9ItQ34yWaoyhG1Y0xBb%2FC037gPMQ8TluhK64B7OBdFfdOh4&X-Amz-Signature=f6322a60ab6f3a8818058fee327d8a75d78f25048a13ceb3a12685360d93df3f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH63SOOT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfX%2FWZEbEgHBbXMcV%2FFfuTSaYirGtcRFwSwiHj6KqN7QIgWc41ND39d%2BbeGBSuYdbexB7pESMealH9DHbS6w10k8cqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH38o4cSYqqnoCRrOCrcAyd5ZJ%2B9crPDx1bNBUnv%2BvgbS6PL5t3hWvtb%2B54jVJYZp2%2F7tSOEdHGD6fwW5O%2FmyqLak9OxevnlYLQfwCK203mi6YsL9VQoEviBdwojqQ4SPQ1fd9mKOqYSelKeqo6knlVkdZR7A3lZNl7U6s0NXGzqNyUbz88EL%2F4OYJr7WWSTrhYHjWIVeXYzJlRfbUANy4Ca84DkrCF2bgy4wiNtnGhYFbpOEjDuaA2D4%2BUqeE3Jx8oD5UZQTp4sgXINFul91cETEmooZhN1IiUPiXgR6Ob81CpZlCVG1GXeHScr0Sew1Jzv0SbXptzWqoqRzLUfl9DYNZUcjNMRJwIIvioClU3w6cbipp2aREMKkcZUE9yuctTkpyU7bUFalmedJ6G0GTiGAocE0%2FAts4YAjbB5UQDwxc44U%2BHDRE6E2Z5r72dyHPi1tcvc7F%2FraXvKax%2BYb0qus8uzFUMJO5QOP3xbk4IZvXuou8WB3KplO8aaUYBtDwJM1nYmoAcGwA0APOthwV0nbU4M3UksIDDiEdYUICU3TEKl6HJ0ABnCnZIad7AMYRrfaHyFn4FwclMAAufiumADrz529fhLGIDcWAFT0xlJuM0uz6DfH%2BazaYdhBaqa3o2NRISDpTB342C2MP%2BE4MEGOqUBKNkxv6ePuKIQzQK9ht06f2Zdyk244XKDJZ9QAS%2FUag6fJetNYX%2FE3Xaj0B6zcDpHbiRIBraSlgQVx0jWvCbq3%2FwSbQ3bYTD20Qz3rJ7mz2PZoj16TXSjhsRwyPUFlDrKKYNC6x2uguhRZw3JfkEIL5ZTyI6I%2BUuR%2BJDPojb57Nbol9ItQ34yWaoyhG1Y0xBb%2FC037gPMQ8TluhK64B7OBdFfdOh4&X-Amz-Signature=01748a834245f4e325869dd6dfd8c74e240704868a910c65c47a9c329627be2b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH63SOOT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfX%2FWZEbEgHBbXMcV%2FFfuTSaYirGtcRFwSwiHj6KqN7QIgWc41ND39d%2BbeGBSuYdbexB7pESMealH9DHbS6w10k8cqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH38o4cSYqqnoCRrOCrcAyd5ZJ%2B9crPDx1bNBUnv%2BvgbS6PL5t3hWvtb%2B54jVJYZp2%2F7tSOEdHGD6fwW5O%2FmyqLak9OxevnlYLQfwCK203mi6YsL9VQoEviBdwojqQ4SPQ1fd9mKOqYSelKeqo6knlVkdZR7A3lZNl7U6s0NXGzqNyUbz88EL%2F4OYJr7WWSTrhYHjWIVeXYzJlRfbUANy4Ca84DkrCF2bgy4wiNtnGhYFbpOEjDuaA2D4%2BUqeE3Jx8oD5UZQTp4sgXINFul91cETEmooZhN1IiUPiXgR6Ob81CpZlCVG1GXeHScr0Sew1Jzv0SbXptzWqoqRzLUfl9DYNZUcjNMRJwIIvioClU3w6cbipp2aREMKkcZUE9yuctTkpyU7bUFalmedJ6G0GTiGAocE0%2FAts4YAjbB5UQDwxc44U%2BHDRE6E2Z5r72dyHPi1tcvc7F%2FraXvKax%2BYb0qus8uzFUMJO5QOP3xbk4IZvXuou8WB3KplO8aaUYBtDwJM1nYmoAcGwA0APOthwV0nbU4M3UksIDDiEdYUICU3TEKl6HJ0ABnCnZIad7AMYRrfaHyFn4FwclMAAufiumADrz529fhLGIDcWAFT0xlJuM0uz6DfH%2BazaYdhBaqa3o2NRISDpTB342C2MP%2BE4MEGOqUBKNkxv6ePuKIQzQK9ht06f2Zdyk244XKDJZ9QAS%2FUag6fJetNYX%2FE3Xaj0B6zcDpHbiRIBraSlgQVx0jWvCbq3%2FwSbQ3bYTD20Qz3rJ7mz2PZoj16TXSjhsRwyPUFlDrKKYNC6x2uguhRZw3JfkEIL5ZTyI6I%2BUuR%2BJDPojb57Nbol9ItQ34yWaoyhG1Y0xBb%2FC037gPMQ8TluhK64B7OBdFfdOh4&X-Amz-Signature=fc53164c0656715d9edb04328a98a2a2eb751c116b565aa8da0fca20d150658b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH63SOOT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfX%2FWZEbEgHBbXMcV%2FFfuTSaYirGtcRFwSwiHj6KqN7QIgWc41ND39d%2BbeGBSuYdbexB7pESMealH9DHbS6w10k8cqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH38o4cSYqqnoCRrOCrcAyd5ZJ%2B9crPDx1bNBUnv%2BvgbS6PL5t3hWvtb%2B54jVJYZp2%2F7tSOEdHGD6fwW5O%2FmyqLak9OxevnlYLQfwCK203mi6YsL9VQoEviBdwojqQ4SPQ1fd9mKOqYSelKeqo6knlVkdZR7A3lZNl7U6s0NXGzqNyUbz88EL%2F4OYJr7WWSTrhYHjWIVeXYzJlRfbUANy4Ca84DkrCF2bgy4wiNtnGhYFbpOEjDuaA2D4%2BUqeE3Jx8oD5UZQTp4sgXINFul91cETEmooZhN1IiUPiXgR6Ob81CpZlCVG1GXeHScr0Sew1Jzv0SbXptzWqoqRzLUfl9DYNZUcjNMRJwIIvioClU3w6cbipp2aREMKkcZUE9yuctTkpyU7bUFalmedJ6G0GTiGAocE0%2FAts4YAjbB5UQDwxc44U%2BHDRE6E2Z5r72dyHPi1tcvc7F%2FraXvKax%2BYb0qus8uzFUMJO5QOP3xbk4IZvXuou8WB3KplO8aaUYBtDwJM1nYmoAcGwA0APOthwV0nbU4M3UksIDDiEdYUICU3TEKl6HJ0ABnCnZIad7AMYRrfaHyFn4FwclMAAufiumADrz529fhLGIDcWAFT0xlJuM0uz6DfH%2BazaYdhBaqa3o2NRISDpTB342C2MP%2BE4MEGOqUBKNkxv6ePuKIQzQK9ht06f2Zdyk244XKDJZ9QAS%2FUag6fJetNYX%2FE3Xaj0B6zcDpHbiRIBraSlgQVx0jWvCbq3%2FwSbQ3bYTD20Qz3rJ7mz2PZoj16TXSjhsRwyPUFlDrKKYNC6x2uguhRZw3JfkEIL5ZTyI6I%2BUuR%2BJDPojb57Nbol9ItQ34yWaoyhG1Y0xBb%2FC037gPMQ8TluhK64B7OBdFfdOh4&X-Amz-Signature=826c678662c729726f1e101773036fae056a4164bbafd72d9d02a0879ab3e2ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH63SOOT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfX%2FWZEbEgHBbXMcV%2FFfuTSaYirGtcRFwSwiHj6KqN7QIgWc41ND39d%2BbeGBSuYdbexB7pESMealH9DHbS6w10k8cqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH38o4cSYqqnoCRrOCrcAyd5ZJ%2B9crPDx1bNBUnv%2BvgbS6PL5t3hWvtb%2B54jVJYZp2%2F7tSOEdHGD6fwW5O%2FmyqLak9OxevnlYLQfwCK203mi6YsL9VQoEviBdwojqQ4SPQ1fd9mKOqYSelKeqo6knlVkdZR7A3lZNl7U6s0NXGzqNyUbz88EL%2F4OYJr7WWSTrhYHjWIVeXYzJlRfbUANy4Ca84DkrCF2bgy4wiNtnGhYFbpOEjDuaA2D4%2BUqeE3Jx8oD5UZQTp4sgXINFul91cETEmooZhN1IiUPiXgR6Ob81CpZlCVG1GXeHScr0Sew1Jzv0SbXptzWqoqRzLUfl9DYNZUcjNMRJwIIvioClU3w6cbipp2aREMKkcZUE9yuctTkpyU7bUFalmedJ6G0GTiGAocE0%2FAts4YAjbB5UQDwxc44U%2BHDRE6E2Z5r72dyHPi1tcvc7F%2FraXvKax%2BYb0qus8uzFUMJO5QOP3xbk4IZvXuou8WB3KplO8aaUYBtDwJM1nYmoAcGwA0APOthwV0nbU4M3UksIDDiEdYUICU3TEKl6HJ0ABnCnZIad7AMYRrfaHyFn4FwclMAAufiumADrz529fhLGIDcWAFT0xlJuM0uz6DfH%2BazaYdhBaqa3o2NRISDpTB342C2MP%2BE4MEGOqUBKNkxv6ePuKIQzQK9ht06f2Zdyk244XKDJZ9QAS%2FUag6fJetNYX%2FE3Xaj0B6zcDpHbiRIBraSlgQVx0jWvCbq3%2FwSbQ3bYTD20Qz3rJ7mz2PZoj16TXSjhsRwyPUFlDrKKYNC6x2uguhRZw3JfkEIL5ZTyI6I%2BUuR%2BJDPojb57Nbol9ItQ34yWaoyhG1Y0xBb%2FC037gPMQ8TluhK64B7OBdFfdOh4&X-Amz-Signature=88ebebd291f6d0ed4045f3929afa5a4e18361e69a9e275141b0d3b1cbfc0bcb5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH63SOOT%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfX%2FWZEbEgHBbXMcV%2FFfuTSaYirGtcRFwSwiHj6KqN7QIgWc41ND39d%2BbeGBSuYdbexB7pESMealH9DHbS6w10k8cqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH38o4cSYqqnoCRrOCrcAyd5ZJ%2B9crPDx1bNBUnv%2BvgbS6PL5t3hWvtb%2B54jVJYZp2%2F7tSOEdHGD6fwW5O%2FmyqLak9OxevnlYLQfwCK203mi6YsL9VQoEviBdwojqQ4SPQ1fd9mKOqYSelKeqo6knlVkdZR7A3lZNl7U6s0NXGzqNyUbz88EL%2F4OYJr7WWSTrhYHjWIVeXYzJlRfbUANy4Ca84DkrCF2bgy4wiNtnGhYFbpOEjDuaA2D4%2BUqeE3Jx8oD5UZQTp4sgXINFul91cETEmooZhN1IiUPiXgR6Ob81CpZlCVG1GXeHScr0Sew1Jzv0SbXptzWqoqRzLUfl9DYNZUcjNMRJwIIvioClU3w6cbipp2aREMKkcZUE9yuctTkpyU7bUFalmedJ6G0GTiGAocE0%2FAts4YAjbB5UQDwxc44U%2BHDRE6E2Z5r72dyHPi1tcvc7F%2FraXvKax%2BYb0qus8uzFUMJO5QOP3xbk4IZvXuou8WB3KplO8aaUYBtDwJM1nYmoAcGwA0APOthwV0nbU4M3UksIDDiEdYUICU3TEKl6HJ0ABnCnZIad7AMYRrfaHyFn4FwclMAAufiumADrz529fhLGIDcWAFT0xlJuM0uz6DfH%2BazaYdhBaqa3o2NRISDpTB342C2MP%2BE4MEGOqUBKNkxv6ePuKIQzQK9ht06f2Zdyk244XKDJZ9QAS%2FUag6fJetNYX%2FE3Xaj0B6zcDpHbiRIBraSlgQVx0jWvCbq3%2FwSbQ3bYTD20Qz3rJ7mz2PZoj16TXSjhsRwyPUFlDrKKYNC6x2uguhRZw3JfkEIL5ZTyI6I%2BUuR%2BJDPojb57Nbol9ItQ34yWaoyhG1Y0xBb%2FC037gPMQ8TluhK64B7OBdFfdOh4&X-Amz-Signature=bdbad7a8135663366edfd7fa8f63d3b9be2e952c272cc2e2a3e9a6c708aa29b2&X-Amz-SignedHeaders=host&x-id=GetObject)
