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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ID7FCTS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIgKGJhmgmQFHQfqMXugjUyA825DKBIjSDe0o9vLG1uAIhALoOkm9T%2Fim2B68NaJj4TpW4jhCdwUl4fC%2BYNO42lW%2BQKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym3eUwyttvnRpm7gIq3APGrQwl0Tth%2BkGNyci8qHq9V8A5gTUQ395DOdrY2SODv7PvEQ1bbR6iEpuZYENINC8O5KCRzxouuIY1DGCOr1kAKyC24hDKlze%2BUjkVO5VIfRXxtr26HvDkZI1JQW0vWnRHsG5iw5Rt1X0hkzVR5%2BOMuXfZwfoWxxMjF7VMtIV8n3V7h8VMA98HTxLHelhByUA9u59pvaVFGpmGvFtgA41Bos%2B5Me1DJ0G72aXdLTZqCHb5V1Dkl3a1W%2BAyJyK9siE9rhZz%2Byv3ERhU4akoAhrFLV2eNkP%2FusCEtnmXGcN78KqI84SB%2FtDxC5V6M3XvTaMPwTZ7BEyFT96fycoJAsno1LzBVIKz7GIoIjjNkgxl04ERPaSWGGOtZVbkrezWgqv%2FcDVXTlcMzuIEir2hi8tySCy%2BAcdaDXB8cqNPTQEMo0RmsG0QS67wflcZr9QYnMQu3rEbRfAd1pupoA4cWXAJWJc0I5ohtU9FMJvKRWdL5zqd64U3MIW%2FGKY4Gip11q7KJSI77uukNsRuyVH2WFvxXysPWPbEqFoXJi64JM7WNS6Z5O9yALd%2FYwpXg0tF%2F8Q6NvBk3oJmQ%2FCgR9VIHvVqvqwxM3IQM5ERJwPU3poMWA70KjJAr%2Fg0EufHJjCU%2FcjDBjqkAcJPMbeE47OHJTuc1UsIU9FrY9kUR9B2bRI%2FjSv27ztDo2daUvr9VRhrlYACVfN7unWPlDjtQp0vG5HpLerssNcDTnI1tabPyC9eQBCUSMnKADkahBNvnahxkMGMuF6tOjORCaPfFf80iUXoIGBVuc8WIK0ZLy0J0KJOEh4fzbzTKkTnZXTOweaH6BWb%2Bv7T9TL0xeb3IEVqfl5w%2BO9SNDZnn7K0&X-Amz-Signature=0d6bfb8bab779690d83eedc54f237fcaa56410c8f6015be1aeab35732f977fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ID7FCTS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIgKGJhmgmQFHQfqMXugjUyA825DKBIjSDe0o9vLG1uAIhALoOkm9T%2Fim2B68NaJj4TpW4jhCdwUl4fC%2BYNO42lW%2BQKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym3eUwyttvnRpm7gIq3APGrQwl0Tth%2BkGNyci8qHq9V8A5gTUQ395DOdrY2SODv7PvEQ1bbR6iEpuZYENINC8O5KCRzxouuIY1DGCOr1kAKyC24hDKlze%2BUjkVO5VIfRXxtr26HvDkZI1JQW0vWnRHsG5iw5Rt1X0hkzVR5%2BOMuXfZwfoWxxMjF7VMtIV8n3V7h8VMA98HTxLHelhByUA9u59pvaVFGpmGvFtgA41Bos%2B5Me1DJ0G72aXdLTZqCHb5V1Dkl3a1W%2BAyJyK9siE9rhZz%2Byv3ERhU4akoAhrFLV2eNkP%2FusCEtnmXGcN78KqI84SB%2FtDxC5V6M3XvTaMPwTZ7BEyFT96fycoJAsno1LzBVIKz7GIoIjjNkgxl04ERPaSWGGOtZVbkrezWgqv%2FcDVXTlcMzuIEir2hi8tySCy%2BAcdaDXB8cqNPTQEMo0RmsG0QS67wflcZr9QYnMQu3rEbRfAd1pupoA4cWXAJWJc0I5ohtU9FMJvKRWdL5zqd64U3MIW%2FGKY4Gip11q7KJSI77uukNsRuyVH2WFvxXysPWPbEqFoXJi64JM7WNS6Z5O9yALd%2FYwpXg0tF%2F8Q6NvBk3oJmQ%2FCgR9VIHvVqvqwxM3IQM5ERJwPU3poMWA70KjJAr%2Fg0EufHJjCU%2FcjDBjqkAcJPMbeE47OHJTuc1UsIU9FrY9kUR9B2bRI%2FjSv27ztDo2daUvr9VRhrlYACVfN7unWPlDjtQp0vG5HpLerssNcDTnI1tabPyC9eQBCUSMnKADkahBNvnahxkMGMuF6tOjORCaPfFf80iUXoIGBVuc8WIK0ZLy0J0KJOEh4fzbzTKkTnZXTOweaH6BWb%2Bv7T9TL0xeb3IEVqfl5w%2BO9SNDZnn7K0&X-Amz-Signature=7cbf47f39be599dcdc0ae30eec61b3cd2f89b68e2073bc268faf2b3cff2e69b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ID7FCTS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIgKGJhmgmQFHQfqMXugjUyA825DKBIjSDe0o9vLG1uAIhALoOkm9T%2Fim2B68NaJj4TpW4jhCdwUl4fC%2BYNO42lW%2BQKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym3eUwyttvnRpm7gIq3APGrQwl0Tth%2BkGNyci8qHq9V8A5gTUQ395DOdrY2SODv7PvEQ1bbR6iEpuZYENINC8O5KCRzxouuIY1DGCOr1kAKyC24hDKlze%2BUjkVO5VIfRXxtr26HvDkZI1JQW0vWnRHsG5iw5Rt1X0hkzVR5%2BOMuXfZwfoWxxMjF7VMtIV8n3V7h8VMA98HTxLHelhByUA9u59pvaVFGpmGvFtgA41Bos%2B5Me1DJ0G72aXdLTZqCHb5V1Dkl3a1W%2BAyJyK9siE9rhZz%2Byv3ERhU4akoAhrFLV2eNkP%2FusCEtnmXGcN78KqI84SB%2FtDxC5V6M3XvTaMPwTZ7BEyFT96fycoJAsno1LzBVIKz7GIoIjjNkgxl04ERPaSWGGOtZVbkrezWgqv%2FcDVXTlcMzuIEir2hi8tySCy%2BAcdaDXB8cqNPTQEMo0RmsG0QS67wflcZr9QYnMQu3rEbRfAd1pupoA4cWXAJWJc0I5ohtU9FMJvKRWdL5zqd64U3MIW%2FGKY4Gip11q7KJSI77uukNsRuyVH2WFvxXysPWPbEqFoXJi64JM7WNS6Z5O9yALd%2FYwpXg0tF%2F8Q6NvBk3oJmQ%2FCgR9VIHvVqvqwxM3IQM5ERJwPU3poMWA70KjJAr%2Fg0EufHJjCU%2FcjDBjqkAcJPMbeE47OHJTuc1UsIU9FrY9kUR9B2bRI%2FjSv27ztDo2daUvr9VRhrlYACVfN7unWPlDjtQp0vG5HpLerssNcDTnI1tabPyC9eQBCUSMnKADkahBNvnahxkMGMuF6tOjORCaPfFf80iUXoIGBVuc8WIK0ZLy0J0KJOEh4fzbzTKkTnZXTOweaH6BWb%2Bv7T9TL0xeb3IEVqfl5w%2BO9SNDZnn7K0&X-Amz-Signature=c8d0123786ff76015439060d56832e64ce8ae20a765150cd33a8b877e9c06f03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ID7FCTS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIgKGJhmgmQFHQfqMXugjUyA825DKBIjSDe0o9vLG1uAIhALoOkm9T%2Fim2B68NaJj4TpW4jhCdwUl4fC%2BYNO42lW%2BQKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym3eUwyttvnRpm7gIq3APGrQwl0Tth%2BkGNyci8qHq9V8A5gTUQ395DOdrY2SODv7PvEQ1bbR6iEpuZYENINC8O5KCRzxouuIY1DGCOr1kAKyC24hDKlze%2BUjkVO5VIfRXxtr26HvDkZI1JQW0vWnRHsG5iw5Rt1X0hkzVR5%2BOMuXfZwfoWxxMjF7VMtIV8n3V7h8VMA98HTxLHelhByUA9u59pvaVFGpmGvFtgA41Bos%2B5Me1DJ0G72aXdLTZqCHb5V1Dkl3a1W%2BAyJyK9siE9rhZz%2Byv3ERhU4akoAhrFLV2eNkP%2FusCEtnmXGcN78KqI84SB%2FtDxC5V6M3XvTaMPwTZ7BEyFT96fycoJAsno1LzBVIKz7GIoIjjNkgxl04ERPaSWGGOtZVbkrezWgqv%2FcDVXTlcMzuIEir2hi8tySCy%2BAcdaDXB8cqNPTQEMo0RmsG0QS67wflcZr9QYnMQu3rEbRfAd1pupoA4cWXAJWJc0I5ohtU9FMJvKRWdL5zqd64U3MIW%2FGKY4Gip11q7KJSI77uukNsRuyVH2WFvxXysPWPbEqFoXJi64JM7WNS6Z5O9yALd%2FYwpXg0tF%2F8Q6NvBk3oJmQ%2FCgR9VIHvVqvqwxM3IQM5ERJwPU3poMWA70KjJAr%2Fg0EufHJjCU%2FcjDBjqkAcJPMbeE47OHJTuc1UsIU9FrY9kUR9B2bRI%2FjSv27ztDo2daUvr9VRhrlYACVfN7unWPlDjtQp0vG5HpLerssNcDTnI1tabPyC9eQBCUSMnKADkahBNvnahxkMGMuF6tOjORCaPfFf80iUXoIGBVuc8WIK0ZLy0J0KJOEh4fzbzTKkTnZXTOweaH6BWb%2Bv7T9TL0xeb3IEVqfl5w%2BO9SNDZnn7K0&X-Amz-Signature=127eef2b23bdc9c438288d529e59b1c46d507be400aa274c91287fd94c639c49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ID7FCTS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIgKGJhmgmQFHQfqMXugjUyA825DKBIjSDe0o9vLG1uAIhALoOkm9T%2Fim2B68NaJj4TpW4jhCdwUl4fC%2BYNO42lW%2BQKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym3eUwyttvnRpm7gIq3APGrQwl0Tth%2BkGNyci8qHq9V8A5gTUQ395DOdrY2SODv7PvEQ1bbR6iEpuZYENINC8O5KCRzxouuIY1DGCOr1kAKyC24hDKlze%2BUjkVO5VIfRXxtr26HvDkZI1JQW0vWnRHsG5iw5Rt1X0hkzVR5%2BOMuXfZwfoWxxMjF7VMtIV8n3V7h8VMA98HTxLHelhByUA9u59pvaVFGpmGvFtgA41Bos%2B5Me1DJ0G72aXdLTZqCHb5V1Dkl3a1W%2BAyJyK9siE9rhZz%2Byv3ERhU4akoAhrFLV2eNkP%2FusCEtnmXGcN78KqI84SB%2FtDxC5V6M3XvTaMPwTZ7BEyFT96fycoJAsno1LzBVIKz7GIoIjjNkgxl04ERPaSWGGOtZVbkrezWgqv%2FcDVXTlcMzuIEir2hi8tySCy%2BAcdaDXB8cqNPTQEMo0RmsG0QS67wflcZr9QYnMQu3rEbRfAd1pupoA4cWXAJWJc0I5ohtU9FMJvKRWdL5zqd64U3MIW%2FGKY4Gip11q7KJSI77uukNsRuyVH2WFvxXysPWPbEqFoXJi64JM7WNS6Z5O9yALd%2FYwpXg0tF%2F8Q6NvBk3oJmQ%2FCgR9VIHvVqvqwxM3IQM5ERJwPU3poMWA70KjJAr%2Fg0EufHJjCU%2FcjDBjqkAcJPMbeE47OHJTuc1UsIU9FrY9kUR9B2bRI%2FjSv27ztDo2daUvr9VRhrlYACVfN7unWPlDjtQp0vG5HpLerssNcDTnI1tabPyC9eQBCUSMnKADkahBNvnahxkMGMuF6tOjORCaPfFf80iUXoIGBVuc8WIK0ZLy0J0KJOEh4fzbzTKkTnZXTOweaH6BWb%2Bv7T9TL0xeb3IEVqfl5w%2BO9SNDZnn7K0&X-Amz-Signature=905be88c7b21f419dbc430c4c9b5d3b6ff448384ae3ceb43fb3afb68fd6099e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ID7FCTS%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIgKGJhmgmQFHQfqMXugjUyA825DKBIjSDe0o9vLG1uAIhALoOkm9T%2Fim2B68NaJj4TpW4jhCdwUl4fC%2BYNO42lW%2BQKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igym3eUwyttvnRpm7gIq3APGrQwl0Tth%2BkGNyci8qHq9V8A5gTUQ395DOdrY2SODv7PvEQ1bbR6iEpuZYENINC8O5KCRzxouuIY1DGCOr1kAKyC24hDKlze%2BUjkVO5VIfRXxtr26HvDkZI1JQW0vWnRHsG5iw5Rt1X0hkzVR5%2BOMuXfZwfoWxxMjF7VMtIV8n3V7h8VMA98HTxLHelhByUA9u59pvaVFGpmGvFtgA41Bos%2B5Me1DJ0G72aXdLTZqCHb5V1Dkl3a1W%2BAyJyK9siE9rhZz%2Byv3ERhU4akoAhrFLV2eNkP%2FusCEtnmXGcN78KqI84SB%2FtDxC5V6M3XvTaMPwTZ7BEyFT96fycoJAsno1LzBVIKz7GIoIjjNkgxl04ERPaSWGGOtZVbkrezWgqv%2FcDVXTlcMzuIEir2hi8tySCy%2BAcdaDXB8cqNPTQEMo0RmsG0QS67wflcZr9QYnMQu3rEbRfAd1pupoA4cWXAJWJc0I5ohtU9FMJvKRWdL5zqd64U3MIW%2FGKY4Gip11q7KJSI77uukNsRuyVH2WFvxXysPWPbEqFoXJi64JM7WNS6Z5O9yALd%2FYwpXg0tF%2F8Q6NvBk3oJmQ%2FCgR9VIHvVqvqwxM3IQM5ERJwPU3poMWA70KjJAr%2Fg0EufHJjCU%2FcjDBjqkAcJPMbeE47OHJTuc1UsIU9FrY9kUR9B2bRI%2FjSv27ztDo2daUvr9VRhrlYACVfN7unWPlDjtQp0vG5HpLerssNcDTnI1tabPyC9eQBCUSMnKADkahBNvnahxkMGMuF6tOjORCaPfFf80iUXoIGBVuc8WIK0ZLy0J0KJOEh4fzbzTKkTnZXTOweaH6BWb%2Bv7T9TL0xeb3IEVqfl5w%2BO9SNDZnn7K0&X-Amz-Signature=7127488ea9a8c27c602fa0591061b1f0ba36afbb483e14794e7040ded975c99c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
