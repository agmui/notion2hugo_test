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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGAINKR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlzj1W47Wak1pv6MHf9hSfpeIVdhDSJrh%2BjZwAwNgpbAiAqVQEcLy8uh7l02nvPqrIg6giWxA33LpP8dBtFQM6Skyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMkpmrdnFJtaCuHbZUKtwDa3819qJbt1qWHwqI3udNgm5DMlYYu64vS6AcCLq5dvts3wyyaU6M1b8kHveoeUErYl7HmrcgrOFbApAfkmm3SItIIjQFqTv6rbFzw73SbUE6fq6%2FRSC6XUVhbL8MH%2FUOYk8istz3NAelmOLJVf2qL0bsjc2qoe8U8MVt3l4rFUKO6fdNghRq9IzlW1Orlrf2xV4Vzo%2F7TU0BkcbvO83EkmJNLl8%2FZVrTK2ODbzr6h%2FZhNWixARqHvbyyhs%2Fj3xrquVHmQSf9hl2HxhkXRWppXdEStPRMh68kJjeqqGU%2Fv6dAQeUKoWbqjH5WSvU2kuRNt7Y49ouD4A2VOhAhAIoSgKJokTP3PpR19OpXJQigzhnyjWqbXg7Ap0PEl5POnue4DfwVCPelz3XjYPNMGzU308syEXiA2Bv2x1TFQiaIEzET1jTM3QlXY82IFQhp7Y%2Ft51Iv44DQSScDO6HG6T1hJoqBz5DGkrEiQRTBsu9Mk01MlEOHUdGBUBeMFwrQsNuBN69qjCA58cx508vjEhu%2BtjKYiJwh1iMXegLK8ot9EApCb30bRf3NsW3%2BqMw98peoftbjTRcCUlH1%2BwYlIfLo7hYMfbiJpLdoIYzMQWhpwjXNPBOWhtzahJsIo0Ywx7zZwQY6pgHnEuyErlmwOKem%2FCKcV46Q65o5yk9ij5cUlkebuYYAWnFabIZ7aH57iDI9Pe1tMsEKwsHAXaSHMbJVESxvhs0DGRTF7S%2BAoZgYlbjLj2%2Br5jcTf85Zof5srCcgHY20RvrwyniuaCTEBz7LMhgRuuEZ6sjE88tCJnE9wZ999Beb9AkThbTyP%2F7j6VmQT%2Fjxj7X7Y3EfKtJVC9bAwnyglp57rOkPJq6m&X-Amz-Signature=20ef54c91f4652438be9dd2eb6ddd41a0b8d505153bf68349b9d54e020b616d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGAINKR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlzj1W47Wak1pv6MHf9hSfpeIVdhDSJrh%2BjZwAwNgpbAiAqVQEcLy8uh7l02nvPqrIg6giWxA33LpP8dBtFQM6Skyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMkpmrdnFJtaCuHbZUKtwDa3819qJbt1qWHwqI3udNgm5DMlYYu64vS6AcCLq5dvts3wyyaU6M1b8kHveoeUErYl7HmrcgrOFbApAfkmm3SItIIjQFqTv6rbFzw73SbUE6fq6%2FRSC6XUVhbL8MH%2FUOYk8istz3NAelmOLJVf2qL0bsjc2qoe8U8MVt3l4rFUKO6fdNghRq9IzlW1Orlrf2xV4Vzo%2F7TU0BkcbvO83EkmJNLl8%2FZVrTK2ODbzr6h%2FZhNWixARqHvbyyhs%2Fj3xrquVHmQSf9hl2HxhkXRWppXdEStPRMh68kJjeqqGU%2Fv6dAQeUKoWbqjH5WSvU2kuRNt7Y49ouD4A2VOhAhAIoSgKJokTP3PpR19OpXJQigzhnyjWqbXg7Ap0PEl5POnue4DfwVCPelz3XjYPNMGzU308syEXiA2Bv2x1TFQiaIEzET1jTM3QlXY82IFQhp7Y%2Ft51Iv44DQSScDO6HG6T1hJoqBz5DGkrEiQRTBsu9Mk01MlEOHUdGBUBeMFwrQsNuBN69qjCA58cx508vjEhu%2BtjKYiJwh1iMXegLK8ot9EApCb30bRf3NsW3%2BqMw98peoftbjTRcCUlH1%2BwYlIfLo7hYMfbiJpLdoIYzMQWhpwjXNPBOWhtzahJsIo0Ywx7zZwQY6pgHnEuyErlmwOKem%2FCKcV46Q65o5yk9ij5cUlkebuYYAWnFabIZ7aH57iDI9Pe1tMsEKwsHAXaSHMbJVESxvhs0DGRTF7S%2BAoZgYlbjLj2%2Br5jcTf85Zof5srCcgHY20RvrwyniuaCTEBz7LMhgRuuEZ6sjE88tCJnE9wZ999Beb9AkThbTyP%2F7j6VmQT%2Fjxj7X7Y3EfKtJVC9bAwnyglp57rOkPJq6m&X-Amz-Signature=16f9ca08c9ebed43f8e56cb18482c24bd3f6a086fb43c3f2aa74ca7700ad63b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGAINKR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlzj1W47Wak1pv6MHf9hSfpeIVdhDSJrh%2BjZwAwNgpbAiAqVQEcLy8uh7l02nvPqrIg6giWxA33LpP8dBtFQM6Skyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMkpmrdnFJtaCuHbZUKtwDa3819qJbt1qWHwqI3udNgm5DMlYYu64vS6AcCLq5dvts3wyyaU6M1b8kHveoeUErYl7HmrcgrOFbApAfkmm3SItIIjQFqTv6rbFzw73SbUE6fq6%2FRSC6XUVhbL8MH%2FUOYk8istz3NAelmOLJVf2qL0bsjc2qoe8U8MVt3l4rFUKO6fdNghRq9IzlW1Orlrf2xV4Vzo%2F7TU0BkcbvO83EkmJNLl8%2FZVrTK2ODbzr6h%2FZhNWixARqHvbyyhs%2Fj3xrquVHmQSf9hl2HxhkXRWppXdEStPRMh68kJjeqqGU%2Fv6dAQeUKoWbqjH5WSvU2kuRNt7Y49ouD4A2VOhAhAIoSgKJokTP3PpR19OpXJQigzhnyjWqbXg7Ap0PEl5POnue4DfwVCPelz3XjYPNMGzU308syEXiA2Bv2x1TFQiaIEzET1jTM3QlXY82IFQhp7Y%2Ft51Iv44DQSScDO6HG6T1hJoqBz5DGkrEiQRTBsu9Mk01MlEOHUdGBUBeMFwrQsNuBN69qjCA58cx508vjEhu%2BtjKYiJwh1iMXegLK8ot9EApCb30bRf3NsW3%2BqMw98peoftbjTRcCUlH1%2BwYlIfLo7hYMfbiJpLdoIYzMQWhpwjXNPBOWhtzahJsIo0Ywx7zZwQY6pgHnEuyErlmwOKem%2FCKcV46Q65o5yk9ij5cUlkebuYYAWnFabIZ7aH57iDI9Pe1tMsEKwsHAXaSHMbJVESxvhs0DGRTF7S%2BAoZgYlbjLj2%2Br5jcTf85Zof5srCcgHY20RvrwyniuaCTEBz7LMhgRuuEZ6sjE88tCJnE9wZ999Beb9AkThbTyP%2F7j6VmQT%2Fjxj7X7Y3EfKtJVC9bAwnyglp57rOkPJq6m&X-Amz-Signature=c4e942284bbb923d395e008e605378fd812296fac3cf3e0d69824b77228e88a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGAINKR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlzj1W47Wak1pv6MHf9hSfpeIVdhDSJrh%2BjZwAwNgpbAiAqVQEcLy8uh7l02nvPqrIg6giWxA33LpP8dBtFQM6Skyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMkpmrdnFJtaCuHbZUKtwDa3819qJbt1qWHwqI3udNgm5DMlYYu64vS6AcCLq5dvts3wyyaU6M1b8kHveoeUErYl7HmrcgrOFbApAfkmm3SItIIjQFqTv6rbFzw73SbUE6fq6%2FRSC6XUVhbL8MH%2FUOYk8istz3NAelmOLJVf2qL0bsjc2qoe8U8MVt3l4rFUKO6fdNghRq9IzlW1Orlrf2xV4Vzo%2F7TU0BkcbvO83EkmJNLl8%2FZVrTK2ODbzr6h%2FZhNWixARqHvbyyhs%2Fj3xrquVHmQSf9hl2HxhkXRWppXdEStPRMh68kJjeqqGU%2Fv6dAQeUKoWbqjH5WSvU2kuRNt7Y49ouD4A2VOhAhAIoSgKJokTP3PpR19OpXJQigzhnyjWqbXg7Ap0PEl5POnue4DfwVCPelz3XjYPNMGzU308syEXiA2Bv2x1TFQiaIEzET1jTM3QlXY82IFQhp7Y%2Ft51Iv44DQSScDO6HG6T1hJoqBz5DGkrEiQRTBsu9Mk01MlEOHUdGBUBeMFwrQsNuBN69qjCA58cx508vjEhu%2BtjKYiJwh1iMXegLK8ot9EApCb30bRf3NsW3%2BqMw98peoftbjTRcCUlH1%2BwYlIfLo7hYMfbiJpLdoIYzMQWhpwjXNPBOWhtzahJsIo0Ywx7zZwQY6pgHnEuyErlmwOKem%2FCKcV46Q65o5yk9ij5cUlkebuYYAWnFabIZ7aH57iDI9Pe1tMsEKwsHAXaSHMbJVESxvhs0DGRTF7S%2BAoZgYlbjLj2%2Br5jcTf85Zof5srCcgHY20RvrwyniuaCTEBz7LMhgRuuEZ6sjE88tCJnE9wZ999Beb9AkThbTyP%2F7j6VmQT%2Fjxj7X7Y3EfKtJVC9bAwnyglp57rOkPJq6m&X-Amz-Signature=a37052dc65974f8504072382cda54456ffc7d5101911900c2bab0149ac9385f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGAINKR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlzj1W47Wak1pv6MHf9hSfpeIVdhDSJrh%2BjZwAwNgpbAiAqVQEcLy8uh7l02nvPqrIg6giWxA33LpP8dBtFQM6Skyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMkpmrdnFJtaCuHbZUKtwDa3819qJbt1qWHwqI3udNgm5DMlYYu64vS6AcCLq5dvts3wyyaU6M1b8kHveoeUErYl7HmrcgrOFbApAfkmm3SItIIjQFqTv6rbFzw73SbUE6fq6%2FRSC6XUVhbL8MH%2FUOYk8istz3NAelmOLJVf2qL0bsjc2qoe8U8MVt3l4rFUKO6fdNghRq9IzlW1Orlrf2xV4Vzo%2F7TU0BkcbvO83EkmJNLl8%2FZVrTK2ODbzr6h%2FZhNWixARqHvbyyhs%2Fj3xrquVHmQSf9hl2HxhkXRWppXdEStPRMh68kJjeqqGU%2Fv6dAQeUKoWbqjH5WSvU2kuRNt7Y49ouD4A2VOhAhAIoSgKJokTP3PpR19OpXJQigzhnyjWqbXg7Ap0PEl5POnue4DfwVCPelz3XjYPNMGzU308syEXiA2Bv2x1TFQiaIEzET1jTM3QlXY82IFQhp7Y%2Ft51Iv44DQSScDO6HG6T1hJoqBz5DGkrEiQRTBsu9Mk01MlEOHUdGBUBeMFwrQsNuBN69qjCA58cx508vjEhu%2BtjKYiJwh1iMXegLK8ot9EApCb30bRf3NsW3%2BqMw98peoftbjTRcCUlH1%2BwYlIfLo7hYMfbiJpLdoIYzMQWhpwjXNPBOWhtzahJsIo0Ywx7zZwQY6pgHnEuyErlmwOKem%2FCKcV46Q65o5yk9ij5cUlkebuYYAWnFabIZ7aH57iDI9Pe1tMsEKwsHAXaSHMbJVESxvhs0DGRTF7S%2BAoZgYlbjLj2%2Br5jcTf85Zof5srCcgHY20RvrwyniuaCTEBz7LMhgRuuEZ6sjE88tCJnE9wZ999Beb9AkThbTyP%2F7j6VmQT%2Fjxj7X7Y3EfKtJVC9bAwnyglp57rOkPJq6m&X-Amz-Signature=329f32e15a8fdc32833223fcc1b2237084b6aefeec3d9120c51fb6b9589a53ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGAINKR%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T022904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlzj1W47Wak1pv6MHf9hSfpeIVdhDSJrh%2BjZwAwNgpbAiAqVQEcLy8uh7l02nvPqrIg6giWxA33LpP8dBtFQM6Skyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMkpmrdnFJtaCuHbZUKtwDa3819qJbt1qWHwqI3udNgm5DMlYYu64vS6AcCLq5dvts3wyyaU6M1b8kHveoeUErYl7HmrcgrOFbApAfkmm3SItIIjQFqTv6rbFzw73SbUE6fq6%2FRSC6XUVhbL8MH%2FUOYk8istz3NAelmOLJVf2qL0bsjc2qoe8U8MVt3l4rFUKO6fdNghRq9IzlW1Orlrf2xV4Vzo%2F7TU0BkcbvO83EkmJNLl8%2FZVrTK2ODbzr6h%2FZhNWixARqHvbyyhs%2Fj3xrquVHmQSf9hl2HxhkXRWppXdEStPRMh68kJjeqqGU%2Fv6dAQeUKoWbqjH5WSvU2kuRNt7Y49ouD4A2VOhAhAIoSgKJokTP3PpR19OpXJQigzhnyjWqbXg7Ap0PEl5POnue4DfwVCPelz3XjYPNMGzU308syEXiA2Bv2x1TFQiaIEzET1jTM3QlXY82IFQhp7Y%2Ft51Iv44DQSScDO6HG6T1hJoqBz5DGkrEiQRTBsu9Mk01MlEOHUdGBUBeMFwrQsNuBN69qjCA58cx508vjEhu%2BtjKYiJwh1iMXegLK8ot9EApCb30bRf3NsW3%2BqMw98peoftbjTRcCUlH1%2BwYlIfLo7hYMfbiJpLdoIYzMQWhpwjXNPBOWhtzahJsIo0Ywx7zZwQY6pgHnEuyErlmwOKem%2FCKcV46Q65o5yk9ij5cUlkebuYYAWnFabIZ7aH57iDI9Pe1tMsEKwsHAXaSHMbJVESxvhs0DGRTF7S%2BAoZgYlbjLj2%2Br5jcTf85Zof5srCcgHY20RvrwyniuaCTEBz7LMhgRuuEZ6sjE88tCJnE9wZ999Beb9AkThbTyP%2F7j6VmQT%2Fjxj7X7Y3EfKtJVC9bAwnyglp57rOkPJq6m&X-Amz-Signature=b9384c57c6fde15dfd53dc2331fbbddbcbe2f0d61f9293a3c64a002438aaf111&X-Amz-SignedHeaders=host&x-id=GetObject)
