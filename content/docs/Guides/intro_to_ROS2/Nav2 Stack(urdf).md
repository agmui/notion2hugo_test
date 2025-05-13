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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647SEOXKA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEeQ%2BftrLKTohyS4M24hyIx2VZ8JYeKCM9h1hcs4tMfBAiBj5ofUBWxMMyZW58H4FVbwnrKnx1Qjpr%2Bt70%2FFRx0kvyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1wTr3axHx2rVn1fbKtwDTKr18XnoRRm71UJlYd4JDhQ3JQGZnlp%2Br0tbNYdZjfvNyF%2FnoicV2Mpe9OM4GlU67Sp%2BOr5JbWysxparYz3IV70Z6jKjKCmF23tSKKIal6auH%2FxCk%2BtKHJujGV9M0fXjfvfewZUUd%2BeHO9jDCzOA%2B5IBGTDjDLA9%2BJCtBbRgDMFjPC6PtqLqAVPJlCUuN8vdA2Zd%2BxCNeDRBGT4iexl1FWK2M7qmbtFm6OENQGj9opVn66iEsdcDriRbRSZ0RkRyUPQF6HSSa30xcZr7UrrcvE85BkwPTcWSF88WYgU2HTdanbaZg6jnl%2F6CtyUvMJRLQxYqGKZCyXdSRfkyk8zvRRGBIPLI7V90673jaGMLWnCHkCnHUjhskQhsPSZjibAvzQKYVLXUW0gfdXIBkC7udXX%2FbhpMemTjF%2F5v9JI4muR%2BrfirBnbGgmGo1l1q%2BCkBwnw2MSQhw4rWLBTR53e1bs%2B42b35NEUDEbQHmCL1v427tlig5R%2BHv6bJf9%2F11g5hRNdEoBXRcSrKITO3xBzVioVOVxrlohbywPyBj4XEuDSrSMEhYtnBtRb30sjnFlGQ8hBGQkFNyf%2FPxYV03noJSoEktjUAfp7i2daK2H%2Fi3tRT6XIdBCKigD0ecbMw%2FPSNwQY6pgEAQPunMmucNlWSbdkcabs8VNopJCAHRVDV99PQ61UmydnC2nF6%2BIdiNXMEavaySkbu%2BnV9SYZfSAudoO8JXOt%2F6tKq1JcEJ7XkPUE3O6J6whwHMbfp1hfe2em9yZ%2FJD3cSO00XDiNtg%2BBlpAlR0cJ8r1ND7YwcwJgKwm9N%2FQKfn4i8RJkQmyrb9WVMpF0gbB%2BR746RKf0sYGch2ykKr9fhs%2BsiU07H&X-Amz-Signature=174143b09517e4bd8fbec7aaa8a24f4386a48f0c262c696e14b0aedb31657106&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647SEOXKA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEeQ%2BftrLKTohyS4M24hyIx2VZ8JYeKCM9h1hcs4tMfBAiBj5ofUBWxMMyZW58H4FVbwnrKnx1Qjpr%2Bt70%2FFRx0kvyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1wTr3axHx2rVn1fbKtwDTKr18XnoRRm71UJlYd4JDhQ3JQGZnlp%2Br0tbNYdZjfvNyF%2FnoicV2Mpe9OM4GlU67Sp%2BOr5JbWysxparYz3IV70Z6jKjKCmF23tSKKIal6auH%2FxCk%2BtKHJujGV9M0fXjfvfewZUUd%2BeHO9jDCzOA%2B5IBGTDjDLA9%2BJCtBbRgDMFjPC6PtqLqAVPJlCUuN8vdA2Zd%2BxCNeDRBGT4iexl1FWK2M7qmbtFm6OENQGj9opVn66iEsdcDriRbRSZ0RkRyUPQF6HSSa30xcZr7UrrcvE85BkwPTcWSF88WYgU2HTdanbaZg6jnl%2F6CtyUvMJRLQxYqGKZCyXdSRfkyk8zvRRGBIPLI7V90673jaGMLWnCHkCnHUjhskQhsPSZjibAvzQKYVLXUW0gfdXIBkC7udXX%2FbhpMemTjF%2F5v9JI4muR%2BrfirBnbGgmGo1l1q%2BCkBwnw2MSQhw4rWLBTR53e1bs%2B42b35NEUDEbQHmCL1v427tlig5R%2BHv6bJf9%2F11g5hRNdEoBXRcSrKITO3xBzVioVOVxrlohbywPyBj4XEuDSrSMEhYtnBtRb30sjnFlGQ8hBGQkFNyf%2FPxYV03noJSoEktjUAfp7i2daK2H%2Fi3tRT6XIdBCKigD0ecbMw%2FPSNwQY6pgEAQPunMmucNlWSbdkcabs8VNopJCAHRVDV99PQ61UmydnC2nF6%2BIdiNXMEavaySkbu%2BnV9SYZfSAudoO8JXOt%2F6tKq1JcEJ7XkPUE3O6J6whwHMbfp1hfe2em9yZ%2FJD3cSO00XDiNtg%2BBlpAlR0cJ8r1ND7YwcwJgKwm9N%2FQKfn4i8RJkQmyrb9WVMpF0gbB%2BR746RKf0sYGch2ykKr9fhs%2BsiU07H&X-Amz-Signature=5d92856b4545658369e8d7ace606cb9dbd38b1e36070ff278c993717dd5f1641&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647SEOXKA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEeQ%2BftrLKTohyS4M24hyIx2VZ8JYeKCM9h1hcs4tMfBAiBj5ofUBWxMMyZW58H4FVbwnrKnx1Qjpr%2Bt70%2FFRx0kvyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1wTr3axHx2rVn1fbKtwDTKr18XnoRRm71UJlYd4JDhQ3JQGZnlp%2Br0tbNYdZjfvNyF%2FnoicV2Mpe9OM4GlU67Sp%2BOr5JbWysxparYz3IV70Z6jKjKCmF23tSKKIal6auH%2FxCk%2BtKHJujGV9M0fXjfvfewZUUd%2BeHO9jDCzOA%2B5IBGTDjDLA9%2BJCtBbRgDMFjPC6PtqLqAVPJlCUuN8vdA2Zd%2BxCNeDRBGT4iexl1FWK2M7qmbtFm6OENQGj9opVn66iEsdcDriRbRSZ0RkRyUPQF6HSSa30xcZr7UrrcvE85BkwPTcWSF88WYgU2HTdanbaZg6jnl%2F6CtyUvMJRLQxYqGKZCyXdSRfkyk8zvRRGBIPLI7V90673jaGMLWnCHkCnHUjhskQhsPSZjibAvzQKYVLXUW0gfdXIBkC7udXX%2FbhpMemTjF%2F5v9JI4muR%2BrfirBnbGgmGo1l1q%2BCkBwnw2MSQhw4rWLBTR53e1bs%2B42b35NEUDEbQHmCL1v427tlig5R%2BHv6bJf9%2F11g5hRNdEoBXRcSrKITO3xBzVioVOVxrlohbywPyBj4XEuDSrSMEhYtnBtRb30sjnFlGQ8hBGQkFNyf%2FPxYV03noJSoEktjUAfp7i2daK2H%2Fi3tRT6XIdBCKigD0ecbMw%2FPSNwQY6pgEAQPunMmucNlWSbdkcabs8VNopJCAHRVDV99PQ61UmydnC2nF6%2BIdiNXMEavaySkbu%2BnV9SYZfSAudoO8JXOt%2F6tKq1JcEJ7XkPUE3O6J6whwHMbfp1hfe2em9yZ%2FJD3cSO00XDiNtg%2BBlpAlR0cJ8r1ND7YwcwJgKwm9N%2FQKfn4i8RJkQmyrb9WVMpF0gbB%2BR746RKf0sYGch2ykKr9fhs%2BsiU07H&X-Amz-Signature=fc7c89e3ca316a43644a8bcb53eedae9688d13f3435ac0d30117dbdbe8a7e1f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647SEOXKA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEeQ%2BftrLKTohyS4M24hyIx2VZ8JYeKCM9h1hcs4tMfBAiBj5ofUBWxMMyZW58H4FVbwnrKnx1Qjpr%2Bt70%2FFRx0kvyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1wTr3axHx2rVn1fbKtwDTKr18XnoRRm71UJlYd4JDhQ3JQGZnlp%2Br0tbNYdZjfvNyF%2FnoicV2Mpe9OM4GlU67Sp%2BOr5JbWysxparYz3IV70Z6jKjKCmF23tSKKIal6auH%2FxCk%2BtKHJujGV9M0fXjfvfewZUUd%2BeHO9jDCzOA%2B5IBGTDjDLA9%2BJCtBbRgDMFjPC6PtqLqAVPJlCUuN8vdA2Zd%2BxCNeDRBGT4iexl1FWK2M7qmbtFm6OENQGj9opVn66iEsdcDriRbRSZ0RkRyUPQF6HSSa30xcZr7UrrcvE85BkwPTcWSF88WYgU2HTdanbaZg6jnl%2F6CtyUvMJRLQxYqGKZCyXdSRfkyk8zvRRGBIPLI7V90673jaGMLWnCHkCnHUjhskQhsPSZjibAvzQKYVLXUW0gfdXIBkC7udXX%2FbhpMemTjF%2F5v9JI4muR%2BrfirBnbGgmGo1l1q%2BCkBwnw2MSQhw4rWLBTR53e1bs%2B42b35NEUDEbQHmCL1v427tlig5R%2BHv6bJf9%2F11g5hRNdEoBXRcSrKITO3xBzVioVOVxrlohbywPyBj4XEuDSrSMEhYtnBtRb30sjnFlGQ8hBGQkFNyf%2FPxYV03noJSoEktjUAfp7i2daK2H%2Fi3tRT6XIdBCKigD0ecbMw%2FPSNwQY6pgEAQPunMmucNlWSbdkcabs8VNopJCAHRVDV99PQ61UmydnC2nF6%2BIdiNXMEavaySkbu%2BnV9SYZfSAudoO8JXOt%2F6tKq1JcEJ7XkPUE3O6J6whwHMbfp1hfe2em9yZ%2FJD3cSO00XDiNtg%2BBlpAlR0cJ8r1ND7YwcwJgKwm9N%2FQKfn4i8RJkQmyrb9WVMpF0gbB%2BR746RKf0sYGch2ykKr9fhs%2BsiU07H&X-Amz-Signature=0dac8eb29d2c9c41846313f9c117ae9779e2b29b186202f1b8f94dfa1dc86b52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647SEOXKA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEeQ%2BftrLKTohyS4M24hyIx2VZ8JYeKCM9h1hcs4tMfBAiBj5ofUBWxMMyZW58H4FVbwnrKnx1Qjpr%2Bt70%2FFRx0kvyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1wTr3axHx2rVn1fbKtwDTKr18XnoRRm71UJlYd4JDhQ3JQGZnlp%2Br0tbNYdZjfvNyF%2FnoicV2Mpe9OM4GlU67Sp%2BOr5JbWysxparYz3IV70Z6jKjKCmF23tSKKIal6auH%2FxCk%2BtKHJujGV9M0fXjfvfewZUUd%2BeHO9jDCzOA%2B5IBGTDjDLA9%2BJCtBbRgDMFjPC6PtqLqAVPJlCUuN8vdA2Zd%2BxCNeDRBGT4iexl1FWK2M7qmbtFm6OENQGj9opVn66iEsdcDriRbRSZ0RkRyUPQF6HSSa30xcZr7UrrcvE85BkwPTcWSF88WYgU2HTdanbaZg6jnl%2F6CtyUvMJRLQxYqGKZCyXdSRfkyk8zvRRGBIPLI7V90673jaGMLWnCHkCnHUjhskQhsPSZjibAvzQKYVLXUW0gfdXIBkC7udXX%2FbhpMemTjF%2F5v9JI4muR%2BrfirBnbGgmGo1l1q%2BCkBwnw2MSQhw4rWLBTR53e1bs%2B42b35NEUDEbQHmCL1v427tlig5R%2BHv6bJf9%2F11g5hRNdEoBXRcSrKITO3xBzVioVOVxrlohbywPyBj4XEuDSrSMEhYtnBtRb30sjnFlGQ8hBGQkFNyf%2FPxYV03noJSoEktjUAfp7i2daK2H%2Fi3tRT6XIdBCKigD0ecbMw%2FPSNwQY6pgEAQPunMmucNlWSbdkcabs8VNopJCAHRVDV99PQ61UmydnC2nF6%2BIdiNXMEavaySkbu%2BnV9SYZfSAudoO8JXOt%2F6tKq1JcEJ7XkPUE3O6J6whwHMbfp1hfe2em9yZ%2FJD3cSO00XDiNtg%2BBlpAlR0cJ8r1ND7YwcwJgKwm9N%2FQKfn4i8RJkQmyrb9WVMpF0gbB%2BR746RKf0sYGch2ykKr9fhs%2BsiU07H&X-Amz-Signature=3b63589005b83ae0ebac45695e0f1ab2e53b8d71f0c4ed30c723eb34938d52ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647SEOXKA%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T170844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIEeQ%2BftrLKTohyS4M24hyIx2VZ8JYeKCM9h1hcs4tMfBAiBj5ofUBWxMMyZW58H4FVbwnrKnx1Qjpr%2Bt70%2FFRx0kvyqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1wTr3axHx2rVn1fbKtwDTKr18XnoRRm71UJlYd4JDhQ3JQGZnlp%2Br0tbNYdZjfvNyF%2FnoicV2Mpe9OM4GlU67Sp%2BOr5JbWysxparYz3IV70Z6jKjKCmF23tSKKIal6auH%2FxCk%2BtKHJujGV9M0fXjfvfewZUUd%2BeHO9jDCzOA%2B5IBGTDjDLA9%2BJCtBbRgDMFjPC6PtqLqAVPJlCUuN8vdA2Zd%2BxCNeDRBGT4iexl1FWK2M7qmbtFm6OENQGj9opVn66iEsdcDriRbRSZ0RkRyUPQF6HSSa30xcZr7UrrcvE85BkwPTcWSF88WYgU2HTdanbaZg6jnl%2F6CtyUvMJRLQxYqGKZCyXdSRfkyk8zvRRGBIPLI7V90673jaGMLWnCHkCnHUjhskQhsPSZjibAvzQKYVLXUW0gfdXIBkC7udXX%2FbhpMemTjF%2F5v9JI4muR%2BrfirBnbGgmGo1l1q%2BCkBwnw2MSQhw4rWLBTR53e1bs%2B42b35NEUDEbQHmCL1v427tlig5R%2BHv6bJf9%2F11g5hRNdEoBXRcSrKITO3xBzVioVOVxrlohbywPyBj4XEuDSrSMEhYtnBtRb30sjnFlGQ8hBGQkFNyf%2FPxYV03noJSoEktjUAfp7i2daK2H%2Fi3tRT6XIdBCKigD0ecbMw%2FPSNwQY6pgEAQPunMmucNlWSbdkcabs8VNopJCAHRVDV99PQ61UmydnC2nF6%2BIdiNXMEavaySkbu%2BnV9SYZfSAudoO8JXOt%2F6tKq1JcEJ7XkPUE3O6J6whwHMbfp1hfe2em9yZ%2FJD3cSO00XDiNtg%2BBlpAlR0cJ8r1ND7YwcwJgKwm9N%2FQKfn4i8RJkQmyrb9WVMpF0gbB%2BR746RKf0sYGch2ykKr9fhs%2BsiU07H&X-Amz-Signature=84553b7647e672deaa6bbccf5eda2dcd790e24b6b5d06616529e16bdfbd1b5fc&X-Amz-SignedHeaders=host&x-id=GetObject)
