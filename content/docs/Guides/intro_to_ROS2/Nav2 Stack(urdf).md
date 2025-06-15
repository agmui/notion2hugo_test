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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QO6PAF3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHQuQhEwmE2%2FrScU%2F7STvU6LfweU9gr0vwyNtrQHWBG4AiA1iYsZ3vZVSBuWG%2BqKRuybehNZPawggtUShh0megdc1Cr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMFJXkDn09Z7tmWFBUKtwDHG7%2B5RAfrGpgTla2zGez038exn5m1YQ8AOqxxjzVdv5sIL7da274I9QPm30AYUFOIRKPOPpbGYmr42K7%2FICOo5kWh%2Fz5LbUekbNgFfwv9YPZ0WMAMuJqv%2BaobcpGVOwVOZxB8uxyWkISb%2BxKZNj4FUhKJI8zWSglGgZkh%2FT3nOfDsNZMgG4cWuDCVQsn1nZwo0D%2B0zb4hNUvg3YpxWFR9jGR8Hlb7hS%2FKyFM5NRQBthsC%2FgNSqdVEbIpH16WLG6%2BYhMjLMQCke0%2FCMIjVpxjPBSaqROLeZlRL%2B0prvMADYaTKtPRXJQq5vfSHK3Ze%2Fvetmem0Bsm5ZjyfX0K3XlAPT1ltV7pTfebD4Ibk6ckcJqPlXn7i%2BFYLoUmP%2F%2FfhbZSThv5Ayx9v9v12v6wmHkxFaV9sGSOM92rK82YKjSBo6hXAIe59P%2Fa%2FT55yw6FO%2Fax9CmGncviWhaiUr0zsUy65DgCnupogHmOqcrx8yMCYO6eJiElIUmGn%2B3uwcFqBBDEG0d%2BCnnnYQHRept8Ic1qI5Ft1F16Z5v0Hzamj4c%2BcmI4hZatDRIQNjDyXOP8j7YGCiPjP78izcFkSt3opUiVuDTn6qHnf5oMP%2FBuTKiR3x%2FHVw%2Bc4YHW82c6FpMwqM68wgY6pgHOFPvdY2sZYLBLBa7rsZNt3v3HPumbRgzRuCSvtpK22fU5jGUIMLHxW%2BVVeoLPRqeQpveNrJkE5nybdovatd320AmPLoH8wK%2B7eVD4JFPwy%2FRpGTjVTFK89Za15x69uPa5d329dpKXMAjYjbfa8rrN5lpb76DWHzHxswOG1hzua3NGQdQEb0Lt6SkPuHpPXTFEI4px4aKhetom2yHYuA1fJTsiCIqx&X-Amz-Signature=48c8e875c17ac16cdf1b9848522d02735c69859aa92f2bd372ac6820e780c3e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QO6PAF3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHQuQhEwmE2%2FrScU%2F7STvU6LfweU9gr0vwyNtrQHWBG4AiA1iYsZ3vZVSBuWG%2BqKRuybehNZPawggtUShh0megdc1Cr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMFJXkDn09Z7tmWFBUKtwDHG7%2B5RAfrGpgTla2zGez038exn5m1YQ8AOqxxjzVdv5sIL7da274I9QPm30AYUFOIRKPOPpbGYmr42K7%2FICOo5kWh%2Fz5LbUekbNgFfwv9YPZ0WMAMuJqv%2BaobcpGVOwVOZxB8uxyWkISb%2BxKZNj4FUhKJI8zWSglGgZkh%2FT3nOfDsNZMgG4cWuDCVQsn1nZwo0D%2B0zb4hNUvg3YpxWFR9jGR8Hlb7hS%2FKyFM5NRQBthsC%2FgNSqdVEbIpH16WLG6%2BYhMjLMQCke0%2FCMIjVpxjPBSaqROLeZlRL%2B0prvMADYaTKtPRXJQq5vfSHK3Ze%2Fvetmem0Bsm5ZjyfX0K3XlAPT1ltV7pTfebD4Ibk6ckcJqPlXn7i%2BFYLoUmP%2F%2FfhbZSThv5Ayx9v9v12v6wmHkxFaV9sGSOM92rK82YKjSBo6hXAIe59P%2Fa%2FT55yw6FO%2Fax9CmGncviWhaiUr0zsUy65DgCnupogHmOqcrx8yMCYO6eJiElIUmGn%2B3uwcFqBBDEG0d%2BCnnnYQHRept8Ic1qI5Ft1F16Z5v0Hzamj4c%2BcmI4hZatDRIQNjDyXOP8j7YGCiPjP78izcFkSt3opUiVuDTn6qHnf5oMP%2FBuTKiR3x%2FHVw%2Bc4YHW82c6FpMwqM68wgY6pgHOFPvdY2sZYLBLBa7rsZNt3v3HPumbRgzRuCSvtpK22fU5jGUIMLHxW%2BVVeoLPRqeQpveNrJkE5nybdovatd320AmPLoH8wK%2B7eVD4JFPwy%2FRpGTjVTFK89Za15x69uPa5d329dpKXMAjYjbfa8rrN5lpb76DWHzHxswOG1hzua3NGQdQEb0Lt6SkPuHpPXTFEI4px4aKhetom2yHYuA1fJTsiCIqx&X-Amz-Signature=5c2960266fc30a24de575d9aced63ee55bfd12f474a9288da3e4bcf7d39fcbd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QO6PAF3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHQuQhEwmE2%2FrScU%2F7STvU6LfweU9gr0vwyNtrQHWBG4AiA1iYsZ3vZVSBuWG%2BqKRuybehNZPawggtUShh0megdc1Cr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMFJXkDn09Z7tmWFBUKtwDHG7%2B5RAfrGpgTla2zGez038exn5m1YQ8AOqxxjzVdv5sIL7da274I9QPm30AYUFOIRKPOPpbGYmr42K7%2FICOo5kWh%2Fz5LbUekbNgFfwv9YPZ0WMAMuJqv%2BaobcpGVOwVOZxB8uxyWkISb%2BxKZNj4FUhKJI8zWSglGgZkh%2FT3nOfDsNZMgG4cWuDCVQsn1nZwo0D%2B0zb4hNUvg3YpxWFR9jGR8Hlb7hS%2FKyFM5NRQBthsC%2FgNSqdVEbIpH16WLG6%2BYhMjLMQCke0%2FCMIjVpxjPBSaqROLeZlRL%2B0prvMADYaTKtPRXJQq5vfSHK3Ze%2Fvetmem0Bsm5ZjyfX0K3XlAPT1ltV7pTfebD4Ibk6ckcJqPlXn7i%2BFYLoUmP%2F%2FfhbZSThv5Ayx9v9v12v6wmHkxFaV9sGSOM92rK82YKjSBo6hXAIe59P%2Fa%2FT55yw6FO%2Fax9CmGncviWhaiUr0zsUy65DgCnupogHmOqcrx8yMCYO6eJiElIUmGn%2B3uwcFqBBDEG0d%2BCnnnYQHRept8Ic1qI5Ft1F16Z5v0Hzamj4c%2BcmI4hZatDRIQNjDyXOP8j7YGCiPjP78izcFkSt3opUiVuDTn6qHnf5oMP%2FBuTKiR3x%2FHVw%2Bc4YHW82c6FpMwqM68wgY6pgHOFPvdY2sZYLBLBa7rsZNt3v3HPumbRgzRuCSvtpK22fU5jGUIMLHxW%2BVVeoLPRqeQpveNrJkE5nybdovatd320AmPLoH8wK%2B7eVD4JFPwy%2FRpGTjVTFK89Za15x69uPa5d329dpKXMAjYjbfa8rrN5lpb76DWHzHxswOG1hzua3NGQdQEb0Lt6SkPuHpPXTFEI4px4aKhetom2yHYuA1fJTsiCIqx&X-Amz-Signature=9c184b063137022198ec953db9dd9940decfb54bcda43cf6f1d31a02ef020f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QO6PAF3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHQuQhEwmE2%2FrScU%2F7STvU6LfweU9gr0vwyNtrQHWBG4AiA1iYsZ3vZVSBuWG%2BqKRuybehNZPawggtUShh0megdc1Cr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMFJXkDn09Z7tmWFBUKtwDHG7%2B5RAfrGpgTla2zGez038exn5m1YQ8AOqxxjzVdv5sIL7da274I9QPm30AYUFOIRKPOPpbGYmr42K7%2FICOo5kWh%2Fz5LbUekbNgFfwv9YPZ0WMAMuJqv%2BaobcpGVOwVOZxB8uxyWkISb%2BxKZNj4FUhKJI8zWSglGgZkh%2FT3nOfDsNZMgG4cWuDCVQsn1nZwo0D%2B0zb4hNUvg3YpxWFR9jGR8Hlb7hS%2FKyFM5NRQBthsC%2FgNSqdVEbIpH16WLG6%2BYhMjLMQCke0%2FCMIjVpxjPBSaqROLeZlRL%2B0prvMADYaTKtPRXJQq5vfSHK3Ze%2Fvetmem0Bsm5ZjyfX0K3XlAPT1ltV7pTfebD4Ibk6ckcJqPlXn7i%2BFYLoUmP%2F%2FfhbZSThv5Ayx9v9v12v6wmHkxFaV9sGSOM92rK82YKjSBo6hXAIe59P%2Fa%2FT55yw6FO%2Fax9CmGncviWhaiUr0zsUy65DgCnupogHmOqcrx8yMCYO6eJiElIUmGn%2B3uwcFqBBDEG0d%2BCnnnYQHRept8Ic1qI5Ft1F16Z5v0Hzamj4c%2BcmI4hZatDRIQNjDyXOP8j7YGCiPjP78izcFkSt3opUiVuDTn6qHnf5oMP%2FBuTKiR3x%2FHVw%2Bc4YHW82c6FpMwqM68wgY6pgHOFPvdY2sZYLBLBa7rsZNt3v3HPumbRgzRuCSvtpK22fU5jGUIMLHxW%2BVVeoLPRqeQpveNrJkE5nybdovatd320AmPLoH8wK%2B7eVD4JFPwy%2FRpGTjVTFK89Za15x69uPa5d329dpKXMAjYjbfa8rrN5lpb76DWHzHxswOG1hzua3NGQdQEb0Lt6SkPuHpPXTFEI4px4aKhetom2yHYuA1fJTsiCIqx&X-Amz-Signature=ea44f7dd8f7cd461b82c21f61b6ae103af6a369c5b707bec0dec65e218d06276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QO6PAF3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHQuQhEwmE2%2FrScU%2F7STvU6LfweU9gr0vwyNtrQHWBG4AiA1iYsZ3vZVSBuWG%2BqKRuybehNZPawggtUShh0megdc1Cr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMFJXkDn09Z7tmWFBUKtwDHG7%2B5RAfrGpgTla2zGez038exn5m1YQ8AOqxxjzVdv5sIL7da274I9QPm30AYUFOIRKPOPpbGYmr42K7%2FICOo5kWh%2Fz5LbUekbNgFfwv9YPZ0WMAMuJqv%2BaobcpGVOwVOZxB8uxyWkISb%2BxKZNj4FUhKJI8zWSglGgZkh%2FT3nOfDsNZMgG4cWuDCVQsn1nZwo0D%2B0zb4hNUvg3YpxWFR9jGR8Hlb7hS%2FKyFM5NRQBthsC%2FgNSqdVEbIpH16WLG6%2BYhMjLMQCke0%2FCMIjVpxjPBSaqROLeZlRL%2B0prvMADYaTKtPRXJQq5vfSHK3Ze%2Fvetmem0Bsm5ZjyfX0K3XlAPT1ltV7pTfebD4Ibk6ckcJqPlXn7i%2BFYLoUmP%2F%2FfhbZSThv5Ayx9v9v12v6wmHkxFaV9sGSOM92rK82YKjSBo6hXAIe59P%2Fa%2FT55yw6FO%2Fax9CmGncviWhaiUr0zsUy65DgCnupogHmOqcrx8yMCYO6eJiElIUmGn%2B3uwcFqBBDEG0d%2BCnnnYQHRept8Ic1qI5Ft1F16Z5v0Hzamj4c%2BcmI4hZatDRIQNjDyXOP8j7YGCiPjP78izcFkSt3opUiVuDTn6qHnf5oMP%2FBuTKiR3x%2FHVw%2Bc4YHW82c6FpMwqM68wgY6pgHOFPvdY2sZYLBLBa7rsZNt3v3HPumbRgzRuCSvtpK22fU5jGUIMLHxW%2BVVeoLPRqeQpveNrJkE5nybdovatd320AmPLoH8wK%2B7eVD4JFPwy%2FRpGTjVTFK89Za15x69uPa5d329dpKXMAjYjbfa8rrN5lpb76DWHzHxswOG1hzua3NGQdQEb0Lt6SkPuHpPXTFEI4px4aKhetom2yHYuA1fJTsiCIqx&X-Amz-Signature=7e2b23035db75b5f78820ce54a38807c3f993cdcbce4fa84688518c66334e2bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QO6PAF3%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHQuQhEwmE2%2FrScU%2F7STvU6LfweU9gr0vwyNtrQHWBG4AiA1iYsZ3vZVSBuWG%2BqKRuybehNZPawggtUShh0megdc1Cr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMFJXkDn09Z7tmWFBUKtwDHG7%2B5RAfrGpgTla2zGez038exn5m1YQ8AOqxxjzVdv5sIL7da274I9QPm30AYUFOIRKPOPpbGYmr42K7%2FICOo5kWh%2Fz5LbUekbNgFfwv9YPZ0WMAMuJqv%2BaobcpGVOwVOZxB8uxyWkISb%2BxKZNj4FUhKJI8zWSglGgZkh%2FT3nOfDsNZMgG4cWuDCVQsn1nZwo0D%2B0zb4hNUvg3YpxWFR9jGR8Hlb7hS%2FKyFM5NRQBthsC%2FgNSqdVEbIpH16WLG6%2BYhMjLMQCke0%2FCMIjVpxjPBSaqROLeZlRL%2B0prvMADYaTKtPRXJQq5vfSHK3Ze%2Fvetmem0Bsm5ZjyfX0K3XlAPT1ltV7pTfebD4Ibk6ckcJqPlXn7i%2BFYLoUmP%2F%2FfhbZSThv5Ayx9v9v12v6wmHkxFaV9sGSOM92rK82YKjSBo6hXAIe59P%2Fa%2FT55yw6FO%2Fax9CmGncviWhaiUr0zsUy65DgCnupogHmOqcrx8yMCYO6eJiElIUmGn%2B3uwcFqBBDEG0d%2BCnnnYQHRept8Ic1qI5Ft1F16Z5v0Hzamj4c%2BcmI4hZatDRIQNjDyXOP8j7YGCiPjP78izcFkSt3opUiVuDTn6qHnf5oMP%2FBuTKiR3x%2FHVw%2Bc4YHW82c6FpMwqM68wgY6pgHOFPvdY2sZYLBLBa7rsZNt3v3HPumbRgzRuCSvtpK22fU5jGUIMLHxW%2BVVeoLPRqeQpveNrJkE5nybdovatd320AmPLoH8wK%2B7eVD4JFPwy%2FRpGTjVTFK89Za15x69uPa5d329dpKXMAjYjbfa8rrN5lpb76DWHzHxswOG1hzua3NGQdQEb0Lt6SkPuHpPXTFEI4px4aKhetom2yHYuA1fJTsiCIqx&X-Amz-Signature=4727225c2a20cd76f088e62951119303f9896da203f174a1f3d47ea0ff235373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
