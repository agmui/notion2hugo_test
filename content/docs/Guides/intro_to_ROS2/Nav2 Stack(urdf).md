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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QLEX5I6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHVHMqHJ8Rexak4areBaFRqI9Vn5OJ5dGCTJIzhfFWtAiAnVIu5msGh9I465nv1jYD%2BmPbvwYBQbiMS7%2FMU%2FNZjFiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo%2B%2Bt2ie%2F37jv7Oc4KtwDnvYkRF%2Bo39KgEOb7PB6BlIv93HmREpDgOJIJ2OrusXNRa%2BGHnFIFbB%2BfjUXf1v6PyOb5KijuJBFNBrwCX%2Bzsld8iz0OV3aBINA3Jx3i2uW74myvtEEnExCaXIyE2HE4UP5iSJW1QmRusRCCxcwD%2FnblwYo71bhemzxm2n%2BVkmTRGjHKwaHx0dAM44J3QKmJUO2juFDIF7TWPwSZv%2B2zKxKdkxzwNT9KHcf2qKc2%2FGDrQ4OIKvjaoywCOG3036xL%2B8MleJ7JBe0owRR9BznMdLAFJrylDETIF64c8cJdU6fga1RgOEb1SIWb47VecVRneBEqGsGIH%2BZuEm45ROMDlwiyj%2Fg5CZTO79EnOr6CzvjRbz2UVP4kBZK3ETrdZ7MTHg5vFqzgEZII2Ni6vauyIRmh5vR%2Bx9Jo0pXP6ess%2FdDMDE9cdoz638S0NfSyGNvtq9BW7FxiSv7njPQ3WDPdsxRUaTJz%2BcVXwZiWxpMG%2FjFiPvwI%2FxEJngxCm6IlqZi7BOHTpGmtq8PxULRsuyMRI2x4n%2FKk8do92WsowqjoSX839LPI4CNoaOPqA%2F1Uzdjzh870%2BufFD7wNxz7YmsDObb2rBXckk%2F%2BzEr7wtyqTjjaGBO7XI4loG4ebbZagw356evgY6pgFigVcZVVLZyXLBvZzC2ZQPHkgO%2B2Soa7ZbWy24TEZgY89gxDvA5LWHCVHehNKlVbwjTRYSGKlSdP57UG0FLF59F2uWrEZF5WASgSwW%2Bnsc0fYVO94fAAZlK2cE0YJsRaRfaKILtXUaQuJDHKk2o1Fwf7Hl34uV2Xh52%2Fmi1mBsrGLnA6dZtmou9vzxVz635VWzvgvN3Bzh9r28qO70eR3FInnYjVER&X-Amz-Signature=85b51376eeacb647cd1cf28e2053132b914ed801a6a0836408dfd4eb438b7946&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QLEX5I6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHVHMqHJ8Rexak4areBaFRqI9Vn5OJ5dGCTJIzhfFWtAiAnVIu5msGh9I465nv1jYD%2BmPbvwYBQbiMS7%2FMU%2FNZjFiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo%2B%2Bt2ie%2F37jv7Oc4KtwDnvYkRF%2Bo39KgEOb7PB6BlIv93HmREpDgOJIJ2OrusXNRa%2BGHnFIFbB%2BfjUXf1v6PyOb5KijuJBFNBrwCX%2Bzsld8iz0OV3aBINA3Jx3i2uW74myvtEEnExCaXIyE2HE4UP5iSJW1QmRusRCCxcwD%2FnblwYo71bhemzxm2n%2BVkmTRGjHKwaHx0dAM44J3QKmJUO2juFDIF7TWPwSZv%2B2zKxKdkxzwNT9KHcf2qKc2%2FGDrQ4OIKvjaoywCOG3036xL%2B8MleJ7JBe0owRR9BznMdLAFJrylDETIF64c8cJdU6fga1RgOEb1SIWb47VecVRneBEqGsGIH%2BZuEm45ROMDlwiyj%2Fg5CZTO79EnOr6CzvjRbz2UVP4kBZK3ETrdZ7MTHg5vFqzgEZII2Ni6vauyIRmh5vR%2Bx9Jo0pXP6ess%2FdDMDE9cdoz638S0NfSyGNvtq9BW7FxiSv7njPQ3WDPdsxRUaTJz%2BcVXwZiWxpMG%2FjFiPvwI%2FxEJngxCm6IlqZi7BOHTpGmtq8PxULRsuyMRI2x4n%2FKk8do92WsowqjoSX839LPI4CNoaOPqA%2F1Uzdjzh870%2BufFD7wNxz7YmsDObb2rBXckk%2F%2BzEr7wtyqTjjaGBO7XI4loG4ebbZagw356evgY6pgFigVcZVVLZyXLBvZzC2ZQPHkgO%2B2Soa7ZbWy24TEZgY89gxDvA5LWHCVHehNKlVbwjTRYSGKlSdP57UG0FLF59F2uWrEZF5WASgSwW%2Bnsc0fYVO94fAAZlK2cE0YJsRaRfaKILtXUaQuJDHKk2o1Fwf7Hl34uV2Xh52%2Fmi1mBsrGLnA6dZtmou9vzxVz635VWzvgvN3Bzh9r28qO70eR3FInnYjVER&X-Amz-Signature=18c992ea95b27c1a96aed0ab411615cce90100765433a26a2048e0c02c3d79b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QLEX5I6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHVHMqHJ8Rexak4areBaFRqI9Vn5OJ5dGCTJIzhfFWtAiAnVIu5msGh9I465nv1jYD%2BmPbvwYBQbiMS7%2FMU%2FNZjFiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo%2B%2Bt2ie%2F37jv7Oc4KtwDnvYkRF%2Bo39KgEOb7PB6BlIv93HmREpDgOJIJ2OrusXNRa%2BGHnFIFbB%2BfjUXf1v6PyOb5KijuJBFNBrwCX%2Bzsld8iz0OV3aBINA3Jx3i2uW74myvtEEnExCaXIyE2HE4UP5iSJW1QmRusRCCxcwD%2FnblwYo71bhemzxm2n%2BVkmTRGjHKwaHx0dAM44J3QKmJUO2juFDIF7TWPwSZv%2B2zKxKdkxzwNT9KHcf2qKc2%2FGDrQ4OIKvjaoywCOG3036xL%2B8MleJ7JBe0owRR9BznMdLAFJrylDETIF64c8cJdU6fga1RgOEb1SIWb47VecVRneBEqGsGIH%2BZuEm45ROMDlwiyj%2Fg5CZTO79EnOr6CzvjRbz2UVP4kBZK3ETrdZ7MTHg5vFqzgEZII2Ni6vauyIRmh5vR%2Bx9Jo0pXP6ess%2FdDMDE9cdoz638S0NfSyGNvtq9BW7FxiSv7njPQ3WDPdsxRUaTJz%2BcVXwZiWxpMG%2FjFiPvwI%2FxEJngxCm6IlqZi7BOHTpGmtq8PxULRsuyMRI2x4n%2FKk8do92WsowqjoSX839LPI4CNoaOPqA%2F1Uzdjzh870%2BufFD7wNxz7YmsDObb2rBXckk%2F%2BzEr7wtyqTjjaGBO7XI4loG4ebbZagw356evgY6pgFigVcZVVLZyXLBvZzC2ZQPHkgO%2B2Soa7ZbWy24TEZgY89gxDvA5LWHCVHehNKlVbwjTRYSGKlSdP57UG0FLF59F2uWrEZF5WASgSwW%2Bnsc0fYVO94fAAZlK2cE0YJsRaRfaKILtXUaQuJDHKk2o1Fwf7Hl34uV2Xh52%2Fmi1mBsrGLnA6dZtmou9vzxVz635VWzvgvN3Bzh9r28qO70eR3FInnYjVER&X-Amz-Signature=00673aca0a21cb78a8f3df2e2f8b97626cac0e98945a7a04ad59672581d65dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QLEX5I6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHVHMqHJ8Rexak4areBaFRqI9Vn5OJ5dGCTJIzhfFWtAiAnVIu5msGh9I465nv1jYD%2BmPbvwYBQbiMS7%2FMU%2FNZjFiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo%2B%2Bt2ie%2F37jv7Oc4KtwDnvYkRF%2Bo39KgEOb7PB6BlIv93HmREpDgOJIJ2OrusXNRa%2BGHnFIFbB%2BfjUXf1v6PyOb5KijuJBFNBrwCX%2Bzsld8iz0OV3aBINA3Jx3i2uW74myvtEEnExCaXIyE2HE4UP5iSJW1QmRusRCCxcwD%2FnblwYo71bhemzxm2n%2BVkmTRGjHKwaHx0dAM44J3QKmJUO2juFDIF7TWPwSZv%2B2zKxKdkxzwNT9KHcf2qKc2%2FGDrQ4OIKvjaoywCOG3036xL%2B8MleJ7JBe0owRR9BznMdLAFJrylDETIF64c8cJdU6fga1RgOEb1SIWb47VecVRneBEqGsGIH%2BZuEm45ROMDlwiyj%2Fg5CZTO79EnOr6CzvjRbz2UVP4kBZK3ETrdZ7MTHg5vFqzgEZII2Ni6vauyIRmh5vR%2Bx9Jo0pXP6ess%2FdDMDE9cdoz638S0NfSyGNvtq9BW7FxiSv7njPQ3WDPdsxRUaTJz%2BcVXwZiWxpMG%2FjFiPvwI%2FxEJngxCm6IlqZi7BOHTpGmtq8PxULRsuyMRI2x4n%2FKk8do92WsowqjoSX839LPI4CNoaOPqA%2F1Uzdjzh870%2BufFD7wNxz7YmsDObb2rBXckk%2F%2BzEr7wtyqTjjaGBO7XI4loG4ebbZagw356evgY6pgFigVcZVVLZyXLBvZzC2ZQPHkgO%2B2Soa7ZbWy24TEZgY89gxDvA5LWHCVHehNKlVbwjTRYSGKlSdP57UG0FLF59F2uWrEZF5WASgSwW%2Bnsc0fYVO94fAAZlK2cE0YJsRaRfaKILtXUaQuJDHKk2o1Fwf7Hl34uV2Xh52%2Fmi1mBsrGLnA6dZtmou9vzxVz635VWzvgvN3Bzh9r28qO70eR3FInnYjVER&X-Amz-Signature=eab6e9ebc0a775d12221fa506a9f5fbd55bd616c48168ce0bf339fe72c4d385d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QLEX5I6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHVHMqHJ8Rexak4areBaFRqI9Vn5OJ5dGCTJIzhfFWtAiAnVIu5msGh9I465nv1jYD%2BmPbvwYBQbiMS7%2FMU%2FNZjFiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo%2B%2Bt2ie%2F37jv7Oc4KtwDnvYkRF%2Bo39KgEOb7PB6BlIv93HmREpDgOJIJ2OrusXNRa%2BGHnFIFbB%2BfjUXf1v6PyOb5KijuJBFNBrwCX%2Bzsld8iz0OV3aBINA3Jx3i2uW74myvtEEnExCaXIyE2HE4UP5iSJW1QmRusRCCxcwD%2FnblwYo71bhemzxm2n%2BVkmTRGjHKwaHx0dAM44J3QKmJUO2juFDIF7TWPwSZv%2B2zKxKdkxzwNT9KHcf2qKc2%2FGDrQ4OIKvjaoywCOG3036xL%2B8MleJ7JBe0owRR9BznMdLAFJrylDETIF64c8cJdU6fga1RgOEb1SIWb47VecVRneBEqGsGIH%2BZuEm45ROMDlwiyj%2Fg5CZTO79EnOr6CzvjRbz2UVP4kBZK3ETrdZ7MTHg5vFqzgEZII2Ni6vauyIRmh5vR%2Bx9Jo0pXP6ess%2FdDMDE9cdoz638S0NfSyGNvtq9BW7FxiSv7njPQ3WDPdsxRUaTJz%2BcVXwZiWxpMG%2FjFiPvwI%2FxEJngxCm6IlqZi7BOHTpGmtq8PxULRsuyMRI2x4n%2FKk8do92WsowqjoSX839LPI4CNoaOPqA%2F1Uzdjzh870%2BufFD7wNxz7YmsDObb2rBXckk%2F%2BzEr7wtyqTjjaGBO7XI4loG4ebbZagw356evgY6pgFigVcZVVLZyXLBvZzC2ZQPHkgO%2B2Soa7ZbWy24TEZgY89gxDvA5LWHCVHehNKlVbwjTRYSGKlSdP57UG0FLF59F2uWrEZF5WASgSwW%2Bnsc0fYVO94fAAZlK2cE0YJsRaRfaKILtXUaQuJDHKk2o1Fwf7Hl34uV2Xh52%2Fmi1mBsrGLnA6dZtmou9vzxVz635VWzvgvN3Bzh9r28qO70eR3FInnYjVER&X-Amz-Signature=88f869fde685995c118f0d2e135c7db17c116c45bdd88232b3c40ec2c8144ce2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QLEX5I6%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T003817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHVHMqHJ8Rexak4areBaFRqI9Vn5OJ5dGCTJIzhfFWtAiAnVIu5msGh9I465nv1jYD%2BmPbvwYBQbiMS7%2FMU%2FNZjFiqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo%2B%2Bt2ie%2F37jv7Oc4KtwDnvYkRF%2Bo39KgEOb7PB6BlIv93HmREpDgOJIJ2OrusXNRa%2BGHnFIFbB%2BfjUXf1v6PyOb5KijuJBFNBrwCX%2Bzsld8iz0OV3aBINA3Jx3i2uW74myvtEEnExCaXIyE2HE4UP5iSJW1QmRusRCCxcwD%2FnblwYo71bhemzxm2n%2BVkmTRGjHKwaHx0dAM44J3QKmJUO2juFDIF7TWPwSZv%2B2zKxKdkxzwNT9KHcf2qKc2%2FGDrQ4OIKvjaoywCOG3036xL%2B8MleJ7JBe0owRR9BznMdLAFJrylDETIF64c8cJdU6fga1RgOEb1SIWb47VecVRneBEqGsGIH%2BZuEm45ROMDlwiyj%2Fg5CZTO79EnOr6CzvjRbz2UVP4kBZK3ETrdZ7MTHg5vFqzgEZII2Ni6vauyIRmh5vR%2Bx9Jo0pXP6ess%2FdDMDE9cdoz638S0NfSyGNvtq9BW7FxiSv7njPQ3WDPdsxRUaTJz%2BcVXwZiWxpMG%2FjFiPvwI%2FxEJngxCm6IlqZi7BOHTpGmtq8PxULRsuyMRI2x4n%2FKk8do92WsowqjoSX839LPI4CNoaOPqA%2F1Uzdjzh870%2BufFD7wNxz7YmsDObb2rBXckk%2F%2BzEr7wtyqTjjaGBO7XI4loG4ebbZagw356evgY6pgFigVcZVVLZyXLBvZzC2ZQPHkgO%2B2Soa7ZbWy24TEZgY89gxDvA5LWHCVHehNKlVbwjTRYSGKlSdP57UG0FLF59F2uWrEZF5WASgSwW%2Bnsc0fYVO94fAAZlK2cE0YJsRaRfaKILtXUaQuJDHKk2o1Fwf7Hl34uV2Xh52%2Fmi1mBsrGLnA6dZtmou9vzxVz635VWzvgvN3Bzh9r28qO70eR3FInnYjVER&X-Amz-Signature=a1a8d1db63a6c3fabe86b6e9cd21147fed3e3d61ddb8e216acd85dd18b050be5&X-Amz-SignedHeaders=host&x-id=GetObject)
