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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KLI3CDT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFPjIq8hodsvUGL%2BZOm%2F4zX2X13UEeOnXPWONlMyKNB0AiEAuC8WPX7HNy9lfTQgdZAnxGsDQAK5LpZbPeeQT1TzHWcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWmxVTrP740izT5nircA4iO1Tdn0Hc3KBFhmXBXjpvhcIooj0yMpsiF9dleX0ONkimivqO%2B7IWxmdcfTN4rBJip1gFDi8cdhBg9%2F3TBOaj8BOuLON0j1lsd5MF9BH3WypOrVqYiFqcKn3oDyN0EWXtxeTPX%2Bhi4KzQP5FzJO8NnBQ3lpGiHYV955YejZHkgwAf1v%2Ffc%2Fb0dZ%2FwP8%2FOf2PR6r8OW%2Fokbjy471BSzAKowRxVhGorNLJ%2FAPaiZoYI47d%2BqVzeC2TVmfpblujcInCo4Dig6qHgRZNWwogjhoyhgAfm12zTCcrn4JOWh9l%2FX3TjNK8jA4hWff%2BpSzF%2BRfzmeO%2F9R3idaZu%2Fa90oe3utxkUf9dPKhobjtjISaIGX7wuNfi9rFopMnlz%2FsuMughvQoMKu09lgb3zLqBPIp1KWpaUb7j%2BkWbmPA%2BPPZqJoH93nlPJLhUpLSf%2BS74LdJFbXyADeWTcMynJi9a60mux6Q45RTt%2Fmhd9x4hQSxqB5RO5HBHFvHB7qOHd0%2FAYofbCuPzQa0N20ezrZkeccV1eGqFhlF70vWIfaHt8CTtQQWQPQJ6bH1n2JTcCWniNRpm0%2FchlHB88dr6hrr%2BHXp4D%2BXPKzUE5Z4JkIIANMSUuM1B%2BWlNp8ojRnOgsMoMIagj8AGOqUBsuGsAIR7CeJYfiFIVk3%2BN9sGkGdV7Vq6tFGFg9hoBUhNQkjWpUx7DRFyAis%2BZ8uZ0Dhl0fbzRYarK5Vo%2Fx98nST%2BI5hmiqNHQpqGwv5%2Bz4phhedmAQncKb37RoTzr1A71dV%2B4kXnpMgYGnnPw7815Cm9eEiLwptufuzPWmlXKsQkXfIOCEZRwYPOvu8NjTXo5Ejj3IKzP1j6W0wVum2WVoDqsgpW&X-Amz-Signature=c3c3aa71194c1f68c07e6fe9f7c291e4a3ed79b2067aa3997c859efc5b60f8ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KLI3CDT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFPjIq8hodsvUGL%2BZOm%2F4zX2X13UEeOnXPWONlMyKNB0AiEAuC8WPX7HNy9lfTQgdZAnxGsDQAK5LpZbPeeQT1TzHWcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWmxVTrP740izT5nircA4iO1Tdn0Hc3KBFhmXBXjpvhcIooj0yMpsiF9dleX0ONkimivqO%2B7IWxmdcfTN4rBJip1gFDi8cdhBg9%2F3TBOaj8BOuLON0j1lsd5MF9BH3WypOrVqYiFqcKn3oDyN0EWXtxeTPX%2Bhi4KzQP5FzJO8NnBQ3lpGiHYV955YejZHkgwAf1v%2Ffc%2Fb0dZ%2FwP8%2FOf2PR6r8OW%2Fokbjy471BSzAKowRxVhGorNLJ%2FAPaiZoYI47d%2BqVzeC2TVmfpblujcInCo4Dig6qHgRZNWwogjhoyhgAfm12zTCcrn4JOWh9l%2FX3TjNK8jA4hWff%2BpSzF%2BRfzmeO%2F9R3idaZu%2Fa90oe3utxkUf9dPKhobjtjISaIGX7wuNfi9rFopMnlz%2FsuMughvQoMKu09lgb3zLqBPIp1KWpaUb7j%2BkWbmPA%2BPPZqJoH93nlPJLhUpLSf%2BS74LdJFbXyADeWTcMynJi9a60mux6Q45RTt%2Fmhd9x4hQSxqB5RO5HBHFvHB7qOHd0%2FAYofbCuPzQa0N20ezrZkeccV1eGqFhlF70vWIfaHt8CTtQQWQPQJ6bH1n2JTcCWniNRpm0%2FchlHB88dr6hrr%2BHXp4D%2BXPKzUE5Z4JkIIANMSUuM1B%2BWlNp8ojRnOgsMoMIagj8AGOqUBsuGsAIR7CeJYfiFIVk3%2BN9sGkGdV7Vq6tFGFg9hoBUhNQkjWpUx7DRFyAis%2BZ8uZ0Dhl0fbzRYarK5Vo%2Fx98nST%2BI5hmiqNHQpqGwv5%2Bz4phhedmAQncKb37RoTzr1A71dV%2B4kXnpMgYGnnPw7815Cm9eEiLwptufuzPWmlXKsQkXfIOCEZRwYPOvu8NjTXo5Ejj3IKzP1j6W0wVum2WVoDqsgpW&X-Amz-Signature=328b12b7c60d1bcef3f54c1f7f656818ae56724a569a9bdeec472acbf469ca23&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KLI3CDT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFPjIq8hodsvUGL%2BZOm%2F4zX2X13UEeOnXPWONlMyKNB0AiEAuC8WPX7HNy9lfTQgdZAnxGsDQAK5LpZbPeeQT1TzHWcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWmxVTrP740izT5nircA4iO1Tdn0Hc3KBFhmXBXjpvhcIooj0yMpsiF9dleX0ONkimivqO%2B7IWxmdcfTN4rBJip1gFDi8cdhBg9%2F3TBOaj8BOuLON0j1lsd5MF9BH3WypOrVqYiFqcKn3oDyN0EWXtxeTPX%2Bhi4KzQP5FzJO8NnBQ3lpGiHYV955YejZHkgwAf1v%2Ffc%2Fb0dZ%2FwP8%2FOf2PR6r8OW%2Fokbjy471BSzAKowRxVhGorNLJ%2FAPaiZoYI47d%2BqVzeC2TVmfpblujcInCo4Dig6qHgRZNWwogjhoyhgAfm12zTCcrn4JOWh9l%2FX3TjNK8jA4hWff%2BpSzF%2BRfzmeO%2F9R3idaZu%2Fa90oe3utxkUf9dPKhobjtjISaIGX7wuNfi9rFopMnlz%2FsuMughvQoMKu09lgb3zLqBPIp1KWpaUb7j%2BkWbmPA%2BPPZqJoH93nlPJLhUpLSf%2BS74LdJFbXyADeWTcMynJi9a60mux6Q45RTt%2Fmhd9x4hQSxqB5RO5HBHFvHB7qOHd0%2FAYofbCuPzQa0N20ezrZkeccV1eGqFhlF70vWIfaHt8CTtQQWQPQJ6bH1n2JTcCWniNRpm0%2FchlHB88dr6hrr%2BHXp4D%2BXPKzUE5Z4JkIIANMSUuM1B%2BWlNp8ojRnOgsMoMIagj8AGOqUBsuGsAIR7CeJYfiFIVk3%2BN9sGkGdV7Vq6tFGFg9hoBUhNQkjWpUx7DRFyAis%2BZ8uZ0Dhl0fbzRYarK5Vo%2Fx98nST%2BI5hmiqNHQpqGwv5%2Bz4phhedmAQncKb37RoTzr1A71dV%2B4kXnpMgYGnnPw7815Cm9eEiLwptufuzPWmlXKsQkXfIOCEZRwYPOvu8NjTXo5Ejj3IKzP1j6W0wVum2WVoDqsgpW&X-Amz-Signature=9ab9b18e72febef0e282dc809630f8f7a466a5b78491e5c0a7bdda3f42e53b24&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KLI3CDT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFPjIq8hodsvUGL%2BZOm%2F4zX2X13UEeOnXPWONlMyKNB0AiEAuC8WPX7HNy9lfTQgdZAnxGsDQAK5LpZbPeeQT1TzHWcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWmxVTrP740izT5nircA4iO1Tdn0Hc3KBFhmXBXjpvhcIooj0yMpsiF9dleX0ONkimivqO%2B7IWxmdcfTN4rBJip1gFDi8cdhBg9%2F3TBOaj8BOuLON0j1lsd5MF9BH3WypOrVqYiFqcKn3oDyN0EWXtxeTPX%2Bhi4KzQP5FzJO8NnBQ3lpGiHYV955YejZHkgwAf1v%2Ffc%2Fb0dZ%2FwP8%2FOf2PR6r8OW%2Fokbjy471BSzAKowRxVhGorNLJ%2FAPaiZoYI47d%2BqVzeC2TVmfpblujcInCo4Dig6qHgRZNWwogjhoyhgAfm12zTCcrn4JOWh9l%2FX3TjNK8jA4hWff%2BpSzF%2BRfzmeO%2F9R3idaZu%2Fa90oe3utxkUf9dPKhobjtjISaIGX7wuNfi9rFopMnlz%2FsuMughvQoMKu09lgb3zLqBPIp1KWpaUb7j%2BkWbmPA%2BPPZqJoH93nlPJLhUpLSf%2BS74LdJFbXyADeWTcMynJi9a60mux6Q45RTt%2Fmhd9x4hQSxqB5RO5HBHFvHB7qOHd0%2FAYofbCuPzQa0N20ezrZkeccV1eGqFhlF70vWIfaHt8CTtQQWQPQJ6bH1n2JTcCWniNRpm0%2FchlHB88dr6hrr%2BHXp4D%2BXPKzUE5Z4JkIIANMSUuM1B%2BWlNp8ojRnOgsMoMIagj8AGOqUBsuGsAIR7CeJYfiFIVk3%2BN9sGkGdV7Vq6tFGFg9hoBUhNQkjWpUx7DRFyAis%2BZ8uZ0Dhl0fbzRYarK5Vo%2Fx98nST%2BI5hmiqNHQpqGwv5%2Bz4phhedmAQncKb37RoTzr1A71dV%2B4kXnpMgYGnnPw7815Cm9eEiLwptufuzPWmlXKsQkXfIOCEZRwYPOvu8NjTXo5Ejj3IKzP1j6W0wVum2WVoDqsgpW&X-Amz-Signature=0bebee1aaa4018f27966dafd59e0e71093f1122f75162c534f1d7e5d8472a494&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KLI3CDT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFPjIq8hodsvUGL%2BZOm%2F4zX2X13UEeOnXPWONlMyKNB0AiEAuC8WPX7HNy9lfTQgdZAnxGsDQAK5LpZbPeeQT1TzHWcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWmxVTrP740izT5nircA4iO1Tdn0Hc3KBFhmXBXjpvhcIooj0yMpsiF9dleX0ONkimivqO%2B7IWxmdcfTN4rBJip1gFDi8cdhBg9%2F3TBOaj8BOuLON0j1lsd5MF9BH3WypOrVqYiFqcKn3oDyN0EWXtxeTPX%2Bhi4KzQP5FzJO8NnBQ3lpGiHYV955YejZHkgwAf1v%2Ffc%2Fb0dZ%2FwP8%2FOf2PR6r8OW%2Fokbjy471BSzAKowRxVhGorNLJ%2FAPaiZoYI47d%2BqVzeC2TVmfpblujcInCo4Dig6qHgRZNWwogjhoyhgAfm12zTCcrn4JOWh9l%2FX3TjNK8jA4hWff%2BpSzF%2BRfzmeO%2F9R3idaZu%2Fa90oe3utxkUf9dPKhobjtjISaIGX7wuNfi9rFopMnlz%2FsuMughvQoMKu09lgb3zLqBPIp1KWpaUb7j%2BkWbmPA%2BPPZqJoH93nlPJLhUpLSf%2BS74LdJFbXyADeWTcMynJi9a60mux6Q45RTt%2Fmhd9x4hQSxqB5RO5HBHFvHB7qOHd0%2FAYofbCuPzQa0N20ezrZkeccV1eGqFhlF70vWIfaHt8CTtQQWQPQJ6bH1n2JTcCWniNRpm0%2FchlHB88dr6hrr%2BHXp4D%2BXPKzUE5Z4JkIIANMSUuM1B%2BWlNp8ojRnOgsMoMIagj8AGOqUBsuGsAIR7CeJYfiFIVk3%2BN9sGkGdV7Vq6tFGFg9hoBUhNQkjWpUx7DRFyAis%2BZ8uZ0Dhl0fbzRYarK5Vo%2Fx98nST%2BI5hmiqNHQpqGwv5%2Bz4phhedmAQncKb37RoTzr1A71dV%2B4kXnpMgYGnnPw7815Cm9eEiLwptufuzPWmlXKsQkXfIOCEZRwYPOvu8NjTXo5Ejj3IKzP1j6W0wVum2WVoDqsgpW&X-Amz-Signature=aabdc9bd609f53b312d5356a958f7fc5062a6e53e96916bc8cba9ef8263e6601&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KLI3CDT%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T180947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIFPjIq8hodsvUGL%2BZOm%2F4zX2X13UEeOnXPWONlMyKNB0AiEAuC8WPX7HNy9lfTQgdZAnxGsDQAK5LpZbPeeQT1TzHWcqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCWmxVTrP740izT5nircA4iO1Tdn0Hc3KBFhmXBXjpvhcIooj0yMpsiF9dleX0ONkimivqO%2B7IWxmdcfTN4rBJip1gFDi8cdhBg9%2F3TBOaj8BOuLON0j1lsd5MF9BH3WypOrVqYiFqcKn3oDyN0EWXtxeTPX%2Bhi4KzQP5FzJO8NnBQ3lpGiHYV955YejZHkgwAf1v%2Ffc%2Fb0dZ%2FwP8%2FOf2PR6r8OW%2Fokbjy471BSzAKowRxVhGorNLJ%2FAPaiZoYI47d%2BqVzeC2TVmfpblujcInCo4Dig6qHgRZNWwogjhoyhgAfm12zTCcrn4JOWh9l%2FX3TjNK8jA4hWff%2BpSzF%2BRfzmeO%2F9R3idaZu%2Fa90oe3utxkUf9dPKhobjtjISaIGX7wuNfi9rFopMnlz%2FsuMughvQoMKu09lgb3zLqBPIp1KWpaUb7j%2BkWbmPA%2BPPZqJoH93nlPJLhUpLSf%2BS74LdJFbXyADeWTcMynJi9a60mux6Q45RTt%2Fmhd9x4hQSxqB5RO5HBHFvHB7qOHd0%2FAYofbCuPzQa0N20ezrZkeccV1eGqFhlF70vWIfaHt8CTtQQWQPQJ6bH1n2JTcCWniNRpm0%2FchlHB88dr6hrr%2BHXp4D%2BXPKzUE5Z4JkIIANMSUuM1B%2BWlNp8ojRnOgsMoMIagj8AGOqUBsuGsAIR7CeJYfiFIVk3%2BN9sGkGdV7Vq6tFGFg9hoBUhNQkjWpUx7DRFyAis%2BZ8uZ0Dhl0fbzRYarK5Vo%2Fx98nST%2BI5hmiqNHQpqGwv5%2Bz4phhedmAQncKb37RoTzr1A71dV%2B4kXnpMgYGnnPw7815Cm9eEiLwptufuzPWmlXKsQkXfIOCEZRwYPOvu8NjTXo5Ejj3IKzP1j6W0wVum2WVoDqsgpW&X-Amz-Signature=36f5bf75c91db77641dfff08c8ea98b8f43554c088ae5c06dea9a4bf58708477&X-Amz-SignedHeaders=host&x-id=GetObject)
