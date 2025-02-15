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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRVWH6T%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDZOodSN15gw2GPeZKJ%2FuuYbZvX9ZCAha6461QFZLMUkAiAtIKOTfM7aHI9s7fAfRF4aqWEwVrtbTegavL3ZX%2B0BJir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMxDPrrx5E2CT%2BOpyLKtwDCDcWUTUz734fN%2FrPTg1VggD5D%2FvNDrVkPaeKs9f%2FNn5WE3pqprjIjWb4srI2dxjEhuVLFUFp%2BrVrQxJomtAyPFRaJKnBk6Flwbtl6ofhsE2uma2lPNY1UXUYD%2BsHGet7XRKoI9DFrs8dBHc0i%2B0vsf6uliAhLL3VMFOzUzLCXJi4wgDUMMdZ49kVQbgZiRMJyIzQy9HLTfiO8eYemzLdFXOKV0PZuQxp3jrLPJarVEa9sD0EuLnH%2F8Zy7KSVVdXweDW%2Bb0eIG8puAq8VLcGYCmHPEEA9bEkB4oVa%2FO0Cxim6u%2BH29Gb7rcXLrvuQEQG8RHWeNz7AmUCjOAWGyBv2CjDh%2FAWwuC2rWQRv2JhBWSreRa%2B1TUlWowb6RNNCn%2BBpDCyvPDh5GaoTMTNuwxuogSDuAjNkLuF9DMgHzjkLgwt2JqGXJfH2%2FebqQC9LPn94Zo2Bp2vpNpWlxlnFYV%2FMn78RnoWo3oDQF6dp6PePPPz5aAPZzdJ29vDSXgYvxdGoU3Z35CpNim3EoYTjIlwtokIK3cU4hBiZZlTvp77giNqfuNVs5mDghz958b%2F0ZQ5t8mf87YoRD2eVD0ZtjX%2BNbVio02YQERT7IkIJbTjJJHzLqnO%2BKc%2FSbW3Dp8Mw3czAvQY6pgEwHt2bKK3QOmXPFGhUA0x%2FrVtNfSER0k6xp6PmPVUq6AgNrUmMbK6X8TCD0u5XKy0p8T3fDbbpU6XvKWfC4j6bn6JIkY7MSR5y5%2BkG7CdzUcUr758ZfT1Q9zB7Otwx6lB1rEnt%2FtB3Yp5lAwgrVY0Vx1QSn3Zxkwt9PznyoKa%2FC39yvh%2FPdND4T9CJ%2ByP5w5P4AfGY0tvqptskmg%2F66ygGfDKFOX%2B1&X-Amz-Signature=8c30763df073484978ef7ca2598dddd13e9ff7d625db39ef65adce463489023a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRVWH6T%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDZOodSN15gw2GPeZKJ%2FuuYbZvX9ZCAha6461QFZLMUkAiAtIKOTfM7aHI9s7fAfRF4aqWEwVrtbTegavL3ZX%2B0BJir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMxDPrrx5E2CT%2BOpyLKtwDCDcWUTUz734fN%2FrPTg1VggD5D%2FvNDrVkPaeKs9f%2FNn5WE3pqprjIjWb4srI2dxjEhuVLFUFp%2BrVrQxJomtAyPFRaJKnBk6Flwbtl6ofhsE2uma2lPNY1UXUYD%2BsHGet7XRKoI9DFrs8dBHc0i%2B0vsf6uliAhLL3VMFOzUzLCXJi4wgDUMMdZ49kVQbgZiRMJyIzQy9HLTfiO8eYemzLdFXOKV0PZuQxp3jrLPJarVEa9sD0EuLnH%2F8Zy7KSVVdXweDW%2Bb0eIG8puAq8VLcGYCmHPEEA9bEkB4oVa%2FO0Cxim6u%2BH29Gb7rcXLrvuQEQG8RHWeNz7AmUCjOAWGyBv2CjDh%2FAWwuC2rWQRv2JhBWSreRa%2B1TUlWowb6RNNCn%2BBpDCyvPDh5GaoTMTNuwxuogSDuAjNkLuF9DMgHzjkLgwt2JqGXJfH2%2FebqQC9LPn94Zo2Bp2vpNpWlxlnFYV%2FMn78RnoWo3oDQF6dp6PePPPz5aAPZzdJ29vDSXgYvxdGoU3Z35CpNim3EoYTjIlwtokIK3cU4hBiZZlTvp77giNqfuNVs5mDghz958b%2F0ZQ5t8mf87YoRD2eVD0ZtjX%2BNbVio02YQERT7IkIJbTjJJHzLqnO%2BKc%2FSbW3Dp8Mw3czAvQY6pgEwHt2bKK3QOmXPFGhUA0x%2FrVtNfSER0k6xp6PmPVUq6AgNrUmMbK6X8TCD0u5XKy0p8T3fDbbpU6XvKWfC4j6bn6JIkY7MSR5y5%2BkG7CdzUcUr758ZfT1Q9zB7Otwx6lB1rEnt%2FtB3Yp5lAwgrVY0Vx1QSn3Zxkwt9PznyoKa%2FC39yvh%2FPdND4T9CJ%2ByP5w5P4AfGY0tvqptskmg%2F66ygGfDKFOX%2B1&X-Amz-Signature=496d92284288c95ac08f350dea4f728aed0218ef9d8963758cb809488a8438f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRVWH6T%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDZOodSN15gw2GPeZKJ%2FuuYbZvX9ZCAha6461QFZLMUkAiAtIKOTfM7aHI9s7fAfRF4aqWEwVrtbTegavL3ZX%2B0BJir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMxDPrrx5E2CT%2BOpyLKtwDCDcWUTUz734fN%2FrPTg1VggD5D%2FvNDrVkPaeKs9f%2FNn5WE3pqprjIjWb4srI2dxjEhuVLFUFp%2BrVrQxJomtAyPFRaJKnBk6Flwbtl6ofhsE2uma2lPNY1UXUYD%2BsHGet7XRKoI9DFrs8dBHc0i%2B0vsf6uliAhLL3VMFOzUzLCXJi4wgDUMMdZ49kVQbgZiRMJyIzQy9HLTfiO8eYemzLdFXOKV0PZuQxp3jrLPJarVEa9sD0EuLnH%2F8Zy7KSVVdXweDW%2Bb0eIG8puAq8VLcGYCmHPEEA9bEkB4oVa%2FO0Cxim6u%2BH29Gb7rcXLrvuQEQG8RHWeNz7AmUCjOAWGyBv2CjDh%2FAWwuC2rWQRv2JhBWSreRa%2B1TUlWowb6RNNCn%2BBpDCyvPDh5GaoTMTNuwxuogSDuAjNkLuF9DMgHzjkLgwt2JqGXJfH2%2FebqQC9LPn94Zo2Bp2vpNpWlxlnFYV%2FMn78RnoWo3oDQF6dp6PePPPz5aAPZzdJ29vDSXgYvxdGoU3Z35CpNim3EoYTjIlwtokIK3cU4hBiZZlTvp77giNqfuNVs5mDghz958b%2F0ZQ5t8mf87YoRD2eVD0ZtjX%2BNbVio02YQERT7IkIJbTjJJHzLqnO%2BKc%2FSbW3Dp8Mw3czAvQY6pgEwHt2bKK3QOmXPFGhUA0x%2FrVtNfSER0k6xp6PmPVUq6AgNrUmMbK6X8TCD0u5XKy0p8T3fDbbpU6XvKWfC4j6bn6JIkY7MSR5y5%2BkG7CdzUcUr758ZfT1Q9zB7Otwx6lB1rEnt%2FtB3Yp5lAwgrVY0Vx1QSn3Zxkwt9PznyoKa%2FC39yvh%2FPdND4T9CJ%2ByP5w5P4AfGY0tvqptskmg%2F66ygGfDKFOX%2B1&X-Amz-Signature=671439bda0c9bb845e97170255a2966f36834e590747846f97117f1fd75d2fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRVWH6T%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDZOodSN15gw2GPeZKJ%2FuuYbZvX9ZCAha6461QFZLMUkAiAtIKOTfM7aHI9s7fAfRF4aqWEwVrtbTegavL3ZX%2B0BJir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMxDPrrx5E2CT%2BOpyLKtwDCDcWUTUz734fN%2FrPTg1VggD5D%2FvNDrVkPaeKs9f%2FNn5WE3pqprjIjWb4srI2dxjEhuVLFUFp%2BrVrQxJomtAyPFRaJKnBk6Flwbtl6ofhsE2uma2lPNY1UXUYD%2BsHGet7XRKoI9DFrs8dBHc0i%2B0vsf6uliAhLL3VMFOzUzLCXJi4wgDUMMdZ49kVQbgZiRMJyIzQy9HLTfiO8eYemzLdFXOKV0PZuQxp3jrLPJarVEa9sD0EuLnH%2F8Zy7KSVVdXweDW%2Bb0eIG8puAq8VLcGYCmHPEEA9bEkB4oVa%2FO0Cxim6u%2BH29Gb7rcXLrvuQEQG8RHWeNz7AmUCjOAWGyBv2CjDh%2FAWwuC2rWQRv2JhBWSreRa%2B1TUlWowb6RNNCn%2BBpDCyvPDh5GaoTMTNuwxuogSDuAjNkLuF9DMgHzjkLgwt2JqGXJfH2%2FebqQC9LPn94Zo2Bp2vpNpWlxlnFYV%2FMn78RnoWo3oDQF6dp6PePPPz5aAPZzdJ29vDSXgYvxdGoU3Z35CpNim3EoYTjIlwtokIK3cU4hBiZZlTvp77giNqfuNVs5mDghz958b%2F0ZQ5t8mf87YoRD2eVD0ZtjX%2BNbVio02YQERT7IkIJbTjJJHzLqnO%2BKc%2FSbW3Dp8Mw3czAvQY6pgEwHt2bKK3QOmXPFGhUA0x%2FrVtNfSER0k6xp6PmPVUq6AgNrUmMbK6X8TCD0u5XKy0p8T3fDbbpU6XvKWfC4j6bn6JIkY7MSR5y5%2BkG7CdzUcUr758ZfT1Q9zB7Otwx6lB1rEnt%2FtB3Yp5lAwgrVY0Vx1QSn3Zxkwt9PznyoKa%2FC39yvh%2FPdND4T9CJ%2ByP5w5P4AfGY0tvqptskmg%2F66ygGfDKFOX%2B1&X-Amz-Signature=4cd59665d1574d7d2a068f9cc8b5167828f1d7c16ad52a8536bc7448b12ed3a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRVWH6T%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDZOodSN15gw2GPeZKJ%2FuuYbZvX9ZCAha6461QFZLMUkAiAtIKOTfM7aHI9s7fAfRF4aqWEwVrtbTegavL3ZX%2B0BJir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMxDPrrx5E2CT%2BOpyLKtwDCDcWUTUz734fN%2FrPTg1VggD5D%2FvNDrVkPaeKs9f%2FNn5WE3pqprjIjWb4srI2dxjEhuVLFUFp%2BrVrQxJomtAyPFRaJKnBk6Flwbtl6ofhsE2uma2lPNY1UXUYD%2BsHGet7XRKoI9DFrs8dBHc0i%2B0vsf6uliAhLL3VMFOzUzLCXJi4wgDUMMdZ49kVQbgZiRMJyIzQy9HLTfiO8eYemzLdFXOKV0PZuQxp3jrLPJarVEa9sD0EuLnH%2F8Zy7KSVVdXweDW%2Bb0eIG8puAq8VLcGYCmHPEEA9bEkB4oVa%2FO0Cxim6u%2BH29Gb7rcXLrvuQEQG8RHWeNz7AmUCjOAWGyBv2CjDh%2FAWwuC2rWQRv2JhBWSreRa%2B1TUlWowb6RNNCn%2BBpDCyvPDh5GaoTMTNuwxuogSDuAjNkLuF9DMgHzjkLgwt2JqGXJfH2%2FebqQC9LPn94Zo2Bp2vpNpWlxlnFYV%2FMn78RnoWo3oDQF6dp6PePPPz5aAPZzdJ29vDSXgYvxdGoU3Z35CpNim3EoYTjIlwtokIK3cU4hBiZZlTvp77giNqfuNVs5mDghz958b%2F0ZQ5t8mf87YoRD2eVD0ZtjX%2BNbVio02YQERT7IkIJbTjJJHzLqnO%2BKc%2FSbW3Dp8Mw3czAvQY6pgEwHt2bKK3QOmXPFGhUA0x%2FrVtNfSER0k6xp6PmPVUq6AgNrUmMbK6X8TCD0u5XKy0p8T3fDbbpU6XvKWfC4j6bn6JIkY7MSR5y5%2BkG7CdzUcUr758ZfT1Q9zB7Otwx6lB1rEnt%2FtB3Yp5lAwgrVY0Vx1QSn3Zxkwt9PznyoKa%2FC39yvh%2FPdND4T9CJ%2ByP5w5P4AfGY0tvqptskmg%2F66ygGfDKFOX%2B1&X-Amz-Signature=14ddb0ad24b4721a865376bcdd2757d13fd68ecb9031848243b3f230011121bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DRVWH6T%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDZOodSN15gw2GPeZKJ%2FuuYbZvX9ZCAha6461QFZLMUkAiAtIKOTfM7aHI9s7fAfRF4aqWEwVrtbTegavL3ZX%2B0BJir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMxDPrrx5E2CT%2BOpyLKtwDCDcWUTUz734fN%2FrPTg1VggD5D%2FvNDrVkPaeKs9f%2FNn5WE3pqprjIjWb4srI2dxjEhuVLFUFp%2BrVrQxJomtAyPFRaJKnBk6Flwbtl6ofhsE2uma2lPNY1UXUYD%2BsHGet7XRKoI9DFrs8dBHc0i%2B0vsf6uliAhLL3VMFOzUzLCXJi4wgDUMMdZ49kVQbgZiRMJyIzQy9HLTfiO8eYemzLdFXOKV0PZuQxp3jrLPJarVEa9sD0EuLnH%2F8Zy7KSVVdXweDW%2Bb0eIG8puAq8VLcGYCmHPEEA9bEkB4oVa%2FO0Cxim6u%2BH29Gb7rcXLrvuQEQG8RHWeNz7AmUCjOAWGyBv2CjDh%2FAWwuC2rWQRv2JhBWSreRa%2B1TUlWowb6RNNCn%2BBpDCyvPDh5GaoTMTNuwxuogSDuAjNkLuF9DMgHzjkLgwt2JqGXJfH2%2FebqQC9LPn94Zo2Bp2vpNpWlxlnFYV%2FMn78RnoWo3oDQF6dp6PePPPz5aAPZzdJ29vDSXgYvxdGoU3Z35CpNim3EoYTjIlwtokIK3cU4hBiZZlTvp77giNqfuNVs5mDghz958b%2F0ZQ5t8mf87YoRD2eVD0ZtjX%2BNbVio02YQERT7IkIJbTjJJHzLqnO%2BKc%2FSbW3Dp8Mw3czAvQY6pgEwHt2bKK3QOmXPFGhUA0x%2FrVtNfSER0k6xp6PmPVUq6AgNrUmMbK6X8TCD0u5XKy0p8T3fDbbpU6XvKWfC4j6bn6JIkY7MSR5y5%2BkG7CdzUcUr758ZfT1Q9zB7Otwx6lB1rEnt%2FtB3Yp5lAwgrVY0Vx1QSn3Zxkwt9PznyoKa%2FC39yvh%2FPdND4T9CJ%2ByP5w5P4AfGY0tvqptskmg%2F66ygGfDKFOX%2B1&X-Amz-Signature=3629dc0a3f493462750b951d16bdba7ced8149866ddf429acf6a542b13581511&X-Amz-SignedHeaders=host&x-id=GetObject)
