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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655XEDRSM%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGf%2B2lM%2FRgatzIr3McuTnKFxGmXY%2F25WnJQvxZzs4qLQAiAP0dsBTkmETaJsuTyJlsX247sM%2FGrtWz5vXQPusBbUeyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbHezy%2BjYJ7MjZ7ZWKtwDCKshflV3nvkRgJp76yINutPlcwY6nlNMvwb0Ukf1VwTQiKcKA7nd4oOKhhPdqa1QFvFfNXe0EGWB2RGthHQaUrn93JAXUvINFInjZ%2BYvtXNSw6UQZ7TgMcQ7XCKdrXjJGJLnLcTOu23%2BPUMe2vRdlv7Em%2BC0omL%2BeKgltwIruSRn%2F7oRsCejOFDUUu6R9DyzRkVxJhK1PHY%2FTcBHmnqtemLSzbcLN3c7EeClkVFxo5MLiJ9qWe7W%2Fr8RNirh8wYojn%2F%2F6otOHg0vAEmBb0z6E2WM9ns0anpPN4uhxKYuaUXO7%2BAnuVPGNLYADXOhRswSKW5yrNqBp5mJubn69q2%2BWhFEFF%2FChIvbfRmNqL7RL6JX335aBz5aWdZyVevacxxiqrWRrm7%2FoqHuACLHoQGfWgYiUjOauohjN1kfhNFluzVetL3XfrKnV1IxDG1u5ILLpa%2BBoQaXiDawaHdocp6MZXDc8%2BtpXQCBnRZYQXCVpuWhhwfFOtmLJc4H3KCWzItbXwiSlD%2FzOInAQem2F9bliCFOsKthRXTJX3ftdTUa%2F6Redb58xqTn%2BNP1pOC6CRCOPbwsvltFqLIIDUAdxO1B%2By%2BVCCEeDH0Yxi4ITghjzdzjFGZt8oCZ1mGCSgQwipi6wwY6pgFioPc660tomCIXjSaR15PjjbT7E%2F%2Bqei0nuGn%2BBZTlWoL2UJFN%2BVlTeAeKz2Ejp4nQH4SzMxrNp0XLHSUutN9azdu%2Bmm6gmfgVRv3BAHq%2BEhOsrJk9WdfjTn3n2ahSFayikmqkLCGDjlAtMNiC0JnUwfG9auv8c0jnCs2eAIqcwJ2lX0FNgJUPDuITg%2BcJTisnCVmZvAVKt%2BxydXx0D6Dgzzqruk8p&X-Amz-Signature=8c72487969d4dd0cff7a3e9e6cd920e2e84df33264ca0b742b0760aa0f7cf5c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655XEDRSM%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGf%2B2lM%2FRgatzIr3McuTnKFxGmXY%2F25WnJQvxZzs4qLQAiAP0dsBTkmETaJsuTyJlsX247sM%2FGrtWz5vXQPusBbUeyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbHezy%2BjYJ7MjZ7ZWKtwDCKshflV3nvkRgJp76yINutPlcwY6nlNMvwb0Ukf1VwTQiKcKA7nd4oOKhhPdqa1QFvFfNXe0EGWB2RGthHQaUrn93JAXUvINFInjZ%2BYvtXNSw6UQZ7TgMcQ7XCKdrXjJGJLnLcTOu23%2BPUMe2vRdlv7Em%2BC0omL%2BeKgltwIruSRn%2F7oRsCejOFDUUu6R9DyzRkVxJhK1PHY%2FTcBHmnqtemLSzbcLN3c7EeClkVFxo5MLiJ9qWe7W%2Fr8RNirh8wYojn%2F%2F6otOHg0vAEmBb0z6E2WM9ns0anpPN4uhxKYuaUXO7%2BAnuVPGNLYADXOhRswSKW5yrNqBp5mJubn69q2%2BWhFEFF%2FChIvbfRmNqL7RL6JX335aBz5aWdZyVevacxxiqrWRrm7%2FoqHuACLHoQGfWgYiUjOauohjN1kfhNFluzVetL3XfrKnV1IxDG1u5ILLpa%2BBoQaXiDawaHdocp6MZXDc8%2BtpXQCBnRZYQXCVpuWhhwfFOtmLJc4H3KCWzItbXwiSlD%2FzOInAQem2F9bliCFOsKthRXTJX3ftdTUa%2F6Redb58xqTn%2BNP1pOC6CRCOPbwsvltFqLIIDUAdxO1B%2By%2BVCCEeDH0Yxi4ITghjzdzjFGZt8oCZ1mGCSgQwipi6wwY6pgFioPc660tomCIXjSaR15PjjbT7E%2F%2Bqei0nuGn%2BBZTlWoL2UJFN%2BVlTeAeKz2Ejp4nQH4SzMxrNp0XLHSUutN9azdu%2Bmm6gmfgVRv3BAHq%2BEhOsrJk9WdfjTn3n2ahSFayikmqkLCGDjlAtMNiC0JnUwfG9auv8c0jnCs2eAIqcwJ2lX0FNgJUPDuITg%2BcJTisnCVmZvAVKt%2BxydXx0D6Dgzzqruk8p&X-Amz-Signature=54d21b4813054a43a387b6249709877dcf929d2c1b5513231a0e5a540fa0d9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655XEDRSM%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGf%2B2lM%2FRgatzIr3McuTnKFxGmXY%2F25WnJQvxZzs4qLQAiAP0dsBTkmETaJsuTyJlsX247sM%2FGrtWz5vXQPusBbUeyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbHezy%2BjYJ7MjZ7ZWKtwDCKshflV3nvkRgJp76yINutPlcwY6nlNMvwb0Ukf1VwTQiKcKA7nd4oOKhhPdqa1QFvFfNXe0EGWB2RGthHQaUrn93JAXUvINFInjZ%2BYvtXNSw6UQZ7TgMcQ7XCKdrXjJGJLnLcTOu23%2BPUMe2vRdlv7Em%2BC0omL%2BeKgltwIruSRn%2F7oRsCejOFDUUu6R9DyzRkVxJhK1PHY%2FTcBHmnqtemLSzbcLN3c7EeClkVFxo5MLiJ9qWe7W%2Fr8RNirh8wYojn%2F%2F6otOHg0vAEmBb0z6E2WM9ns0anpPN4uhxKYuaUXO7%2BAnuVPGNLYADXOhRswSKW5yrNqBp5mJubn69q2%2BWhFEFF%2FChIvbfRmNqL7RL6JX335aBz5aWdZyVevacxxiqrWRrm7%2FoqHuACLHoQGfWgYiUjOauohjN1kfhNFluzVetL3XfrKnV1IxDG1u5ILLpa%2BBoQaXiDawaHdocp6MZXDc8%2BtpXQCBnRZYQXCVpuWhhwfFOtmLJc4H3KCWzItbXwiSlD%2FzOInAQem2F9bliCFOsKthRXTJX3ftdTUa%2F6Redb58xqTn%2BNP1pOC6CRCOPbwsvltFqLIIDUAdxO1B%2By%2BVCCEeDH0Yxi4ITghjzdzjFGZt8oCZ1mGCSgQwipi6wwY6pgFioPc660tomCIXjSaR15PjjbT7E%2F%2Bqei0nuGn%2BBZTlWoL2UJFN%2BVlTeAeKz2Ejp4nQH4SzMxrNp0XLHSUutN9azdu%2Bmm6gmfgVRv3BAHq%2BEhOsrJk9WdfjTn3n2ahSFayikmqkLCGDjlAtMNiC0JnUwfG9auv8c0jnCs2eAIqcwJ2lX0FNgJUPDuITg%2BcJTisnCVmZvAVKt%2BxydXx0D6Dgzzqruk8p&X-Amz-Signature=856f778db77b21914c8f5c1c508872b7aef20088589c3fe8ebf1121430af00d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655XEDRSM%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGf%2B2lM%2FRgatzIr3McuTnKFxGmXY%2F25WnJQvxZzs4qLQAiAP0dsBTkmETaJsuTyJlsX247sM%2FGrtWz5vXQPusBbUeyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbHezy%2BjYJ7MjZ7ZWKtwDCKshflV3nvkRgJp76yINutPlcwY6nlNMvwb0Ukf1VwTQiKcKA7nd4oOKhhPdqa1QFvFfNXe0EGWB2RGthHQaUrn93JAXUvINFInjZ%2BYvtXNSw6UQZ7TgMcQ7XCKdrXjJGJLnLcTOu23%2BPUMe2vRdlv7Em%2BC0omL%2BeKgltwIruSRn%2F7oRsCejOFDUUu6R9DyzRkVxJhK1PHY%2FTcBHmnqtemLSzbcLN3c7EeClkVFxo5MLiJ9qWe7W%2Fr8RNirh8wYojn%2F%2F6otOHg0vAEmBb0z6E2WM9ns0anpPN4uhxKYuaUXO7%2BAnuVPGNLYADXOhRswSKW5yrNqBp5mJubn69q2%2BWhFEFF%2FChIvbfRmNqL7RL6JX335aBz5aWdZyVevacxxiqrWRrm7%2FoqHuACLHoQGfWgYiUjOauohjN1kfhNFluzVetL3XfrKnV1IxDG1u5ILLpa%2BBoQaXiDawaHdocp6MZXDc8%2BtpXQCBnRZYQXCVpuWhhwfFOtmLJc4H3KCWzItbXwiSlD%2FzOInAQem2F9bliCFOsKthRXTJX3ftdTUa%2F6Redb58xqTn%2BNP1pOC6CRCOPbwsvltFqLIIDUAdxO1B%2By%2BVCCEeDH0Yxi4ITghjzdzjFGZt8oCZ1mGCSgQwipi6wwY6pgFioPc660tomCIXjSaR15PjjbT7E%2F%2Bqei0nuGn%2BBZTlWoL2UJFN%2BVlTeAeKz2Ejp4nQH4SzMxrNp0XLHSUutN9azdu%2Bmm6gmfgVRv3BAHq%2BEhOsrJk9WdfjTn3n2ahSFayikmqkLCGDjlAtMNiC0JnUwfG9auv8c0jnCs2eAIqcwJ2lX0FNgJUPDuITg%2BcJTisnCVmZvAVKt%2BxydXx0D6Dgzzqruk8p&X-Amz-Signature=e0fcd95bc5fea371ba7b2d9d4e93f5b7df7b402e229fab28c7aa87e394d42dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655XEDRSM%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGf%2B2lM%2FRgatzIr3McuTnKFxGmXY%2F25WnJQvxZzs4qLQAiAP0dsBTkmETaJsuTyJlsX247sM%2FGrtWz5vXQPusBbUeyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbHezy%2BjYJ7MjZ7ZWKtwDCKshflV3nvkRgJp76yINutPlcwY6nlNMvwb0Ukf1VwTQiKcKA7nd4oOKhhPdqa1QFvFfNXe0EGWB2RGthHQaUrn93JAXUvINFInjZ%2BYvtXNSw6UQZ7TgMcQ7XCKdrXjJGJLnLcTOu23%2BPUMe2vRdlv7Em%2BC0omL%2BeKgltwIruSRn%2F7oRsCejOFDUUu6R9DyzRkVxJhK1PHY%2FTcBHmnqtemLSzbcLN3c7EeClkVFxo5MLiJ9qWe7W%2Fr8RNirh8wYojn%2F%2F6otOHg0vAEmBb0z6E2WM9ns0anpPN4uhxKYuaUXO7%2BAnuVPGNLYADXOhRswSKW5yrNqBp5mJubn69q2%2BWhFEFF%2FChIvbfRmNqL7RL6JX335aBz5aWdZyVevacxxiqrWRrm7%2FoqHuACLHoQGfWgYiUjOauohjN1kfhNFluzVetL3XfrKnV1IxDG1u5ILLpa%2BBoQaXiDawaHdocp6MZXDc8%2BtpXQCBnRZYQXCVpuWhhwfFOtmLJc4H3KCWzItbXwiSlD%2FzOInAQem2F9bliCFOsKthRXTJX3ftdTUa%2F6Redb58xqTn%2BNP1pOC6CRCOPbwsvltFqLIIDUAdxO1B%2By%2BVCCEeDH0Yxi4ITghjzdzjFGZt8oCZ1mGCSgQwipi6wwY6pgFioPc660tomCIXjSaR15PjjbT7E%2F%2Bqei0nuGn%2BBZTlWoL2UJFN%2BVlTeAeKz2Ejp4nQH4SzMxrNp0XLHSUutN9azdu%2Bmm6gmfgVRv3BAHq%2BEhOsrJk9WdfjTn3n2ahSFayikmqkLCGDjlAtMNiC0JnUwfG9auv8c0jnCs2eAIqcwJ2lX0FNgJUPDuITg%2BcJTisnCVmZvAVKt%2BxydXx0D6Dgzzqruk8p&X-Amz-Signature=f9721401ed8272ef7d7053357034fa5d394fd0ec07bed53d399ab51d7ef05892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655XEDRSM%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T171111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGf%2B2lM%2FRgatzIr3McuTnKFxGmXY%2F25WnJQvxZzs4qLQAiAP0dsBTkmETaJsuTyJlsX247sM%2FGrtWz5vXQPusBbUeyqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbHezy%2BjYJ7MjZ7ZWKtwDCKshflV3nvkRgJp76yINutPlcwY6nlNMvwb0Ukf1VwTQiKcKA7nd4oOKhhPdqa1QFvFfNXe0EGWB2RGthHQaUrn93JAXUvINFInjZ%2BYvtXNSw6UQZ7TgMcQ7XCKdrXjJGJLnLcTOu23%2BPUMe2vRdlv7Em%2BC0omL%2BeKgltwIruSRn%2F7oRsCejOFDUUu6R9DyzRkVxJhK1PHY%2FTcBHmnqtemLSzbcLN3c7EeClkVFxo5MLiJ9qWe7W%2Fr8RNirh8wYojn%2F%2F6otOHg0vAEmBb0z6E2WM9ns0anpPN4uhxKYuaUXO7%2BAnuVPGNLYADXOhRswSKW5yrNqBp5mJubn69q2%2BWhFEFF%2FChIvbfRmNqL7RL6JX335aBz5aWdZyVevacxxiqrWRrm7%2FoqHuACLHoQGfWgYiUjOauohjN1kfhNFluzVetL3XfrKnV1IxDG1u5ILLpa%2BBoQaXiDawaHdocp6MZXDc8%2BtpXQCBnRZYQXCVpuWhhwfFOtmLJc4H3KCWzItbXwiSlD%2FzOInAQem2F9bliCFOsKthRXTJX3ftdTUa%2F6Redb58xqTn%2BNP1pOC6CRCOPbwsvltFqLIIDUAdxO1B%2By%2BVCCEeDH0Yxi4ITghjzdzjFGZt8oCZ1mGCSgQwipi6wwY6pgFioPc660tomCIXjSaR15PjjbT7E%2F%2Bqei0nuGn%2BBZTlWoL2UJFN%2BVlTeAeKz2Ejp4nQH4SzMxrNp0XLHSUutN9azdu%2Bmm6gmfgVRv3BAHq%2BEhOsrJk9WdfjTn3n2ahSFayikmqkLCGDjlAtMNiC0JnUwfG9auv8c0jnCs2eAIqcwJ2lX0FNgJUPDuITg%2BcJTisnCVmZvAVKt%2BxydXx0D6Dgzzqruk8p&X-Amz-Signature=1914594228d985d6a8c64efeb0324d531d2a58b172a6c71ce2925a203c029ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
