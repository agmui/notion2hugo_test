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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV4VN4PU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaz47SMvtiwBtNq3u67QocTcmMNPJWo09zz%2FDxc%2BYhtAiEA85B8a08nBklec7RkGoheRVjIM56ZjVc47JYVE%2BjWyoUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3YFHz%2FsOvJBFcZNyrcA%2FvbndCcET1upykOvYYgsOszVLZJqgJeADXNe6tuv3oXb9HlsAYoE7Y0Us6kUYQv%2F5%2FvnZNLmtiFmlm9xgXXGmK3akteEpr1Rjf%2Bg51eNVhvSSVmU4%2F%2BJFOqxto8as%2FXCnHhMu7A%2FLMQPUcQwQDdt7XKIQCIpwSHty7dbm05ND3NtSV%2BudYVb7F%2BBkxUb5gcH1GGPywi2yqq7hkH1Ocp0lAHj6Exuw%2B0%2F3I7vZy%2FceQCUG9cqz0zbMkJEPK1oVp2ZJyI2Sa2iPp24nl22LBfeBguUdWm6hX2XqJ8eej63wWGxnrrhDBgtHAIKSLJEmP7kc1U8kLAEtlCBvg4WQ%2FAOg%2BfGVvWsROpdAkdwzzcaOr%2FCDgYj0NzQckJokxB%2FHVToy1pzBG3mWgkRdDVcFS2kb0n%2FYBmXlN4zxY1v5ztiatBDxgoBSqM6zr5uUq%2BXGMcKIYBYAcMueuTnqwLf9xZHA%2BX11VmyOx%2FjozvsTIOB1%2Fn%2FGHZbKYOlkegZ4cEyKjqPAaGgtJV9Wx49LXMgB5AADUnXaP%2F8uQzLGV9nkpr6qJC%2F4dc5v51YHQi%2Fn2C%2B65aDM8%2F5qEq10OPWxqAcroQnJG81Vok06zd8WTbVPZOK%2FCrthBsb0V8O5KpCXs0MPvk7cMGOqUBkxMyzs8CIZn0gWgGE5m%2BsA9ivamv9HwWxTSoJDXpEkLDZKUq%2FLtArsb9ib19BFJLp6BxwWktQfqq5x68AFeH%2FhDmC8DwbBFTzqq0oozU%2BTBcntNkDVf%2FszSfwUDkiGaQyijoqtYX03%2BjEgzbMdPMci2rf3Kpg0pO%2BPd6hS6W2PdTAdAuhPwrnUHalJC4Erkmbof4Qt3aCO%2FtzMWs7hu8fzXsd2sf&X-Amz-Signature=e35d9de5b4a7853c270cbff8826afd040ac5e8b7bf42b7a8f0f270cdd6d544cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV4VN4PU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaz47SMvtiwBtNq3u67QocTcmMNPJWo09zz%2FDxc%2BYhtAiEA85B8a08nBklec7RkGoheRVjIM56ZjVc47JYVE%2BjWyoUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3YFHz%2FsOvJBFcZNyrcA%2FvbndCcET1upykOvYYgsOszVLZJqgJeADXNe6tuv3oXb9HlsAYoE7Y0Us6kUYQv%2F5%2FvnZNLmtiFmlm9xgXXGmK3akteEpr1Rjf%2Bg51eNVhvSSVmU4%2F%2BJFOqxto8as%2FXCnHhMu7A%2FLMQPUcQwQDdt7XKIQCIpwSHty7dbm05ND3NtSV%2BudYVb7F%2BBkxUb5gcH1GGPywi2yqq7hkH1Ocp0lAHj6Exuw%2B0%2F3I7vZy%2FceQCUG9cqz0zbMkJEPK1oVp2ZJyI2Sa2iPp24nl22LBfeBguUdWm6hX2XqJ8eej63wWGxnrrhDBgtHAIKSLJEmP7kc1U8kLAEtlCBvg4WQ%2FAOg%2BfGVvWsROpdAkdwzzcaOr%2FCDgYj0NzQckJokxB%2FHVToy1pzBG3mWgkRdDVcFS2kb0n%2FYBmXlN4zxY1v5ztiatBDxgoBSqM6zr5uUq%2BXGMcKIYBYAcMueuTnqwLf9xZHA%2BX11VmyOx%2FjozvsTIOB1%2Fn%2FGHZbKYOlkegZ4cEyKjqPAaGgtJV9Wx49LXMgB5AADUnXaP%2F8uQzLGV9nkpr6qJC%2F4dc5v51YHQi%2Fn2C%2B65aDM8%2F5qEq10OPWxqAcroQnJG81Vok06zd8WTbVPZOK%2FCrthBsb0V8O5KpCXs0MPvk7cMGOqUBkxMyzs8CIZn0gWgGE5m%2BsA9ivamv9HwWxTSoJDXpEkLDZKUq%2FLtArsb9ib19BFJLp6BxwWktQfqq5x68AFeH%2FhDmC8DwbBFTzqq0oozU%2BTBcntNkDVf%2FszSfwUDkiGaQyijoqtYX03%2BjEgzbMdPMci2rf3Kpg0pO%2BPd6hS6W2PdTAdAuhPwrnUHalJC4Erkmbof4Qt3aCO%2FtzMWs7hu8fzXsd2sf&X-Amz-Signature=1fc298e725d968ee7ebde3d800a5d6f7984391a4e3db9ebdd2ca85a98198f0ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV4VN4PU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaz47SMvtiwBtNq3u67QocTcmMNPJWo09zz%2FDxc%2BYhtAiEA85B8a08nBklec7RkGoheRVjIM56ZjVc47JYVE%2BjWyoUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3YFHz%2FsOvJBFcZNyrcA%2FvbndCcET1upykOvYYgsOszVLZJqgJeADXNe6tuv3oXb9HlsAYoE7Y0Us6kUYQv%2F5%2FvnZNLmtiFmlm9xgXXGmK3akteEpr1Rjf%2Bg51eNVhvSSVmU4%2F%2BJFOqxto8as%2FXCnHhMu7A%2FLMQPUcQwQDdt7XKIQCIpwSHty7dbm05ND3NtSV%2BudYVb7F%2BBkxUb5gcH1GGPywi2yqq7hkH1Ocp0lAHj6Exuw%2B0%2F3I7vZy%2FceQCUG9cqz0zbMkJEPK1oVp2ZJyI2Sa2iPp24nl22LBfeBguUdWm6hX2XqJ8eej63wWGxnrrhDBgtHAIKSLJEmP7kc1U8kLAEtlCBvg4WQ%2FAOg%2BfGVvWsROpdAkdwzzcaOr%2FCDgYj0NzQckJokxB%2FHVToy1pzBG3mWgkRdDVcFS2kb0n%2FYBmXlN4zxY1v5ztiatBDxgoBSqM6zr5uUq%2BXGMcKIYBYAcMueuTnqwLf9xZHA%2BX11VmyOx%2FjozvsTIOB1%2Fn%2FGHZbKYOlkegZ4cEyKjqPAaGgtJV9Wx49LXMgB5AADUnXaP%2F8uQzLGV9nkpr6qJC%2F4dc5v51YHQi%2Fn2C%2B65aDM8%2F5qEq10OPWxqAcroQnJG81Vok06zd8WTbVPZOK%2FCrthBsb0V8O5KpCXs0MPvk7cMGOqUBkxMyzs8CIZn0gWgGE5m%2BsA9ivamv9HwWxTSoJDXpEkLDZKUq%2FLtArsb9ib19BFJLp6BxwWktQfqq5x68AFeH%2FhDmC8DwbBFTzqq0oozU%2BTBcntNkDVf%2FszSfwUDkiGaQyijoqtYX03%2BjEgzbMdPMci2rf3Kpg0pO%2BPd6hS6W2PdTAdAuhPwrnUHalJC4Erkmbof4Qt3aCO%2FtzMWs7hu8fzXsd2sf&X-Amz-Signature=01633c708928280e6c8d076ebb322bcc2fffa504e5c2cb6cce15704b1ae4168a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV4VN4PU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaz47SMvtiwBtNq3u67QocTcmMNPJWo09zz%2FDxc%2BYhtAiEA85B8a08nBklec7RkGoheRVjIM56ZjVc47JYVE%2BjWyoUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3YFHz%2FsOvJBFcZNyrcA%2FvbndCcET1upykOvYYgsOszVLZJqgJeADXNe6tuv3oXb9HlsAYoE7Y0Us6kUYQv%2F5%2FvnZNLmtiFmlm9xgXXGmK3akteEpr1Rjf%2Bg51eNVhvSSVmU4%2F%2BJFOqxto8as%2FXCnHhMu7A%2FLMQPUcQwQDdt7XKIQCIpwSHty7dbm05ND3NtSV%2BudYVb7F%2BBkxUb5gcH1GGPywi2yqq7hkH1Ocp0lAHj6Exuw%2B0%2F3I7vZy%2FceQCUG9cqz0zbMkJEPK1oVp2ZJyI2Sa2iPp24nl22LBfeBguUdWm6hX2XqJ8eej63wWGxnrrhDBgtHAIKSLJEmP7kc1U8kLAEtlCBvg4WQ%2FAOg%2BfGVvWsROpdAkdwzzcaOr%2FCDgYj0NzQckJokxB%2FHVToy1pzBG3mWgkRdDVcFS2kb0n%2FYBmXlN4zxY1v5ztiatBDxgoBSqM6zr5uUq%2BXGMcKIYBYAcMueuTnqwLf9xZHA%2BX11VmyOx%2FjozvsTIOB1%2Fn%2FGHZbKYOlkegZ4cEyKjqPAaGgtJV9Wx49LXMgB5AADUnXaP%2F8uQzLGV9nkpr6qJC%2F4dc5v51YHQi%2Fn2C%2B65aDM8%2F5qEq10OPWxqAcroQnJG81Vok06zd8WTbVPZOK%2FCrthBsb0V8O5KpCXs0MPvk7cMGOqUBkxMyzs8CIZn0gWgGE5m%2BsA9ivamv9HwWxTSoJDXpEkLDZKUq%2FLtArsb9ib19BFJLp6BxwWktQfqq5x68AFeH%2FhDmC8DwbBFTzqq0oozU%2BTBcntNkDVf%2FszSfwUDkiGaQyijoqtYX03%2BjEgzbMdPMci2rf3Kpg0pO%2BPd6hS6W2PdTAdAuhPwrnUHalJC4Erkmbof4Qt3aCO%2FtzMWs7hu8fzXsd2sf&X-Amz-Signature=2f8f00dfa8e8d84c42b353cb376851cef3e375b1ca956c95f9cccfabd8096731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV4VN4PU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaz47SMvtiwBtNq3u67QocTcmMNPJWo09zz%2FDxc%2BYhtAiEA85B8a08nBklec7RkGoheRVjIM56ZjVc47JYVE%2BjWyoUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3YFHz%2FsOvJBFcZNyrcA%2FvbndCcET1upykOvYYgsOszVLZJqgJeADXNe6tuv3oXb9HlsAYoE7Y0Us6kUYQv%2F5%2FvnZNLmtiFmlm9xgXXGmK3akteEpr1Rjf%2Bg51eNVhvSSVmU4%2F%2BJFOqxto8as%2FXCnHhMu7A%2FLMQPUcQwQDdt7XKIQCIpwSHty7dbm05ND3NtSV%2BudYVb7F%2BBkxUb5gcH1GGPywi2yqq7hkH1Ocp0lAHj6Exuw%2B0%2F3I7vZy%2FceQCUG9cqz0zbMkJEPK1oVp2ZJyI2Sa2iPp24nl22LBfeBguUdWm6hX2XqJ8eej63wWGxnrrhDBgtHAIKSLJEmP7kc1U8kLAEtlCBvg4WQ%2FAOg%2BfGVvWsROpdAkdwzzcaOr%2FCDgYj0NzQckJokxB%2FHVToy1pzBG3mWgkRdDVcFS2kb0n%2FYBmXlN4zxY1v5ztiatBDxgoBSqM6zr5uUq%2BXGMcKIYBYAcMueuTnqwLf9xZHA%2BX11VmyOx%2FjozvsTIOB1%2Fn%2FGHZbKYOlkegZ4cEyKjqPAaGgtJV9Wx49LXMgB5AADUnXaP%2F8uQzLGV9nkpr6qJC%2F4dc5v51YHQi%2Fn2C%2B65aDM8%2F5qEq10OPWxqAcroQnJG81Vok06zd8WTbVPZOK%2FCrthBsb0V8O5KpCXs0MPvk7cMGOqUBkxMyzs8CIZn0gWgGE5m%2BsA9ivamv9HwWxTSoJDXpEkLDZKUq%2FLtArsb9ib19BFJLp6BxwWktQfqq5x68AFeH%2FhDmC8DwbBFTzqq0oozU%2BTBcntNkDVf%2FszSfwUDkiGaQyijoqtYX03%2BjEgzbMdPMci2rf3Kpg0pO%2BPd6hS6W2PdTAdAuhPwrnUHalJC4Erkmbof4Qt3aCO%2FtzMWs7hu8fzXsd2sf&X-Amz-Signature=c53559e3fb96139711bd026385bb952450f9326f61c5d3c79cdb36c7ef1041ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV4VN4PU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T110749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGaz47SMvtiwBtNq3u67QocTcmMNPJWo09zz%2FDxc%2BYhtAiEA85B8a08nBklec7RkGoheRVjIM56ZjVc47JYVE%2BjWyoUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN3YFHz%2FsOvJBFcZNyrcA%2FvbndCcET1upykOvYYgsOszVLZJqgJeADXNe6tuv3oXb9HlsAYoE7Y0Us6kUYQv%2F5%2FvnZNLmtiFmlm9xgXXGmK3akteEpr1Rjf%2Bg51eNVhvSSVmU4%2F%2BJFOqxto8as%2FXCnHhMu7A%2FLMQPUcQwQDdt7XKIQCIpwSHty7dbm05ND3NtSV%2BudYVb7F%2BBkxUb5gcH1GGPywi2yqq7hkH1Ocp0lAHj6Exuw%2B0%2F3I7vZy%2FceQCUG9cqz0zbMkJEPK1oVp2ZJyI2Sa2iPp24nl22LBfeBguUdWm6hX2XqJ8eej63wWGxnrrhDBgtHAIKSLJEmP7kc1U8kLAEtlCBvg4WQ%2FAOg%2BfGVvWsROpdAkdwzzcaOr%2FCDgYj0NzQckJokxB%2FHVToy1pzBG3mWgkRdDVcFS2kb0n%2FYBmXlN4zxY1v5ztiatBDxgoBSqM6zr5uUq%2BXGMcKIYBYAcMueuTnqwLf9xZHA%2BX11VmyOx%2FjozvsTIOB1%2Fn%2FGHZbKYOlkegZ4cEyKjqPAaGgtJV9Wx49LXMgB5AADUnXaP%2F8uQzLGV9nkpr6qJC%2F4dc5v51YHQi%2Fn2C%2B65aDM8%2F5qEq10OPWxqAcroQnJG81Vok06zd8WTbVPZOK%2FCrthBsb0V8O5KpCXs0MPvk7cMGOqUBkxMyzs8CIZn0gWgGE5m%2BsA9ivamv9HwWxTSoJDXpEkLDZKUq%2FLtArsb9ib19BFJLp6BxwWktQfqq5x68AFeH%2FhDmC8DwbBFTzqq0oozU%2BTBcntNkDVf%2FszSfwUDkiGaQyijoqtYX03%2BjEgzbMdPMci2rf3Kpg0pO%2BPd6hS6W2PdTAdAuhPwrnUHalJC4Erkmbof4Qt3aCO%2FtzMWs7hu8fzXsd2sf&X-Amz-Signature=157a33898e49c5856def8b4389d84cb704e8b2fdb4f9272f06bfa7088964000a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
