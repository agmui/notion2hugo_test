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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZWHHEA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPRrxyOvOrKd%2Fvdz9%2B0pA3c1d5j46bH%2F08HjgPCQme2QIhAMTIxzuUfupLPVXvPcZC3WhEQSuEUg0p7l405vD62ndjKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzms%2BGPy1AzjEMGgpoq3AOU9GExlOwCI8f2wdgMH8t5cIrjQR9yEvCfXe93DaPCv6AaszIabYtsUU1U8vruK5TeuHgx7frDtesxBu1C88FREhdUDRNyetyyu3J%2BbJAdmFCcB8ok%2FR%2BhYybsBDesCG9BrLinrVgzJd%2FToedf8tSN3T3SkAFj7yyi0fGXxacKRnBlQ5V%2BezHXbAAwXHKvIfldHUD4ZURXHTj85wwSu9vwU9VRxwNMEGV0k3f5gAGyWRevS8ANHHa1Muxbgi2cwmciIJxMhRvbBLlelwkc3f7pSPOIZjlLyq1je0W7CuxMUOJ5%2Fdchg8DO0tINzfJJgzJ1kOnLHQuL8%2Bsjp6ToNjCDOzOzDAlBKtXFVN%2B8R%2FwHWryjAoEDsptpPx%2BIJB40r%2B2UtWb2KI8L%2F%2BTmsZX%2FUpzV7bIErn0qlpAldFxPltmuRzsmkNsKq%2FKkhidkSa8EtvR1Xp5%2FzieG6jiJkwcrtwuHzlS4Yi2F5NqDI5dXpd2YuNPrInTqHhip3aikU3ZfjWiLN8kuP379G0UP1X2DKvafxsWMmmoADlH20cgk6mITqT7Uo3BGsgMd49DHXd%2Bre2AOEcnykvu75xr9S%2FcH9D8QP7PP%2Ffs9fHw%2BRdSJZHR%2F6Azt4%2Bmtp%2BWMRAUjAjCnv6DCBjqkAThLGeHtlvxlLKTGKfnTUhVqH8O7wmNKaC6pKWBsrO%2B5EM0i%2FynyjR2qe1AG2ohbIm1nuSgiZAgbstOUZ3urFifUflq0VFYP5jX%2BpDNJgXQ6T2TbdE647hYMNu%2Fmve3wZ%2BK8T5FzxThXznd3VnW16u%2BhMkflqDUb%2Br1KxDWUcLlCvBq7T0gJALUhRq8IFCqSidTAlqz8BPSUchSQx8levm8MGUoS&X-Amz-Signature=d201ca1f527564d3973d71ccaf3169b2f9711c298b3c6cdf4f1dc9582191f0d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZWHHEA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPRrxyOvOrKd%2Fvdz9%2B0pA3c1d5j46bH%2F08HjgPCQme2QIhAMTIxzuUfupLPVXvPcZC3WhEQSuEUg0p7l405vD62ndjKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzms%2BGPy1AzjEMGgpoq3AOU9GExlOwCI8f2wdgMH8t5cIrjQR9yEvCfXe93DaPCv6AaszIabYtsUU1U8vruK5TeuHgx7frDtesxBu1C88FREhdUDRNyetyyu3J%2BbJAdmFCcB8ok%2FR%2BhYybsBDesCG9BrLinrVgzJd%2FToedf8tSN3T3SkAFj7yyi0fGXxacKRnBlQ5V%2BezHXbAAwXHKvIfldHUD4ZURXHTj85wwSu9vwU9VRxwNMEGV0k3f5gAGyWRevS8ANHHa1Muxbgi2cwmciIJxMhRvbBLlelwkc3f7pSPOIZjlLyq1je0W7CuxMUOJ5%2Fdchg8DO0tINzfJJgzJ1kOnLHQuL8%2Bsjp6ToNjCDOzOzDAlBKtXFVN%2B8R%2FwHWryjAoEDsptpPx%2BIJB40r%2B2UtWb2KI8L%2F%2BTmsZX%2FUpzV7bIErn0qlpAldFxPltmuRzsmkNsKq%2FKkhidkSa8EtvR1Xp5%2FzieG6jiJkwcrtwuHzlS4Yi2F5NqDI5dXpd2YuNPrInTqHhip3aikU3ZfjWiLN8kuP379G0UP1X2DKvafxsWMmmoADlH20cgk6mITqT7Uo3BGsgMd49DHXd%2Bre2AOEcnykvu75xr9S%2FcH9D8QP7PP%2Ffs9fHw%2BRdSJZHR%2F6Azt4%2Bmtp%2BWMRAUjAjCnv6DCBjqkAThLGeHtlvxlLKTGKfnTUhVqH8O7wmNKaC6pKWBsrO%2B5EM0i%2FynyjR2qe1AG2ohbIm1nuSgiZAgbstOUZ3urFifUflq0VFYP5jX%2BpDNJgXQ6T2TbdE647hYMNu%2Fmve3wZ%2BK8T5FzxThXznd3VnW16u%2BhMkflqDUb%2Br1KxDWUcLlCvBq7T0gJALUhRq8IFCqSidTAlqz8BPSUchSQx8levm8MGUoS&X-Amz-Signature=29ec0de4aa70f8b325eed6c7ca99200f58ed9752ca7fe6d240fa1b3cbfb1eb1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZWHHEA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPRrxyOvOrKd%2Fvdz9%2B0pA3c1d5j46bH%2F08HjgPCQme2QIhAMTIxzuUfupLPVXvPcZC3WhEQSuEUg0p7l405vD62ndjKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzms%2BGPy1AzjEMGgpoq3AOU9GExlOwCI8f2wdgMH8t5cIrjQR9yEvCfXe93DaPCv6AaszIabYtsUU1U8vruK5TeuHgx7frDtesxBu1C88FREhdUDRNyetyyu3J%2BbJAdmFCcB8ok%2FR%2BhYybsBDesCG9BrLinrVgzJd%2FToedf8tSN3T3SkAFj7yyi0fGXxacKRnBlQ5V%2BezHXbAAwXHKvIfldHUD4ZURXHTj85wwSu9vwU9VRxwNMEGV0k3f5gAGyWRevS8ANHHa1Muxbgi2cwmciIJxMhRvbBLlelwkc3f7pSPOIZjlLyq1je0W7CuxMUOJ5%2Fdchg8DO0tINzfJJgzJ1kOnLHQuL8%2Bsjp6ToNjCDOzOzDAlBKtXFVN%2B8R%2FwHWryjAoEDsptpPx%2BIJB40r%2B2UtWb2KI8L%2F%2BTmsZX%2FUpzV7bIErn0qlpAldFxPltmuRzsmkNsKq%2FKkhidkSa8EtvR1Xp5%2FzieG6jiJkwcrtwuHzlS4Yi2F5NqDI5dXpd2YuNPrInTqHhip3aikU3ZfjWiLN8kuP379G0UP1X2DKvafxsWMmmoADlH20cgk6mITqT7Uo3BGsgMd49DHXd%2Bre2AOEcnykvu75xr9S%2FcH9D8QP7PP%2Ffs9fHw%2BRdSJZHR%2F6Azt4%2Bmtp%2BWMRAUjAjCnv6DCBjqkAThLGeHtlvxlLKTGKfnTUhVqH8O7wmNKaC6pKWBsrO%2B5EM0i%2FynyjR2qe1AG2ohbIm1nuSgiZAgbstOUZ3urFifUflq0VFYP5jX%2BpDNJgXQ6T2TbdE647hYMNu%2Fmve3wZ%2BK8T5FzxThXznd3VnW16u%2BhMkflqDUb%2Br1KxDWUcLlCvBq7T0gJALUhRq8IFCqSidTAlqz8BPSUchSQx8levm8MGUoS&X-Amz-Signature=9e0a872a76d5b8d0881696010fe96d38e440461ceebc83bdf310d2b3ebdb8202&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZWHHEA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPRrxyOvOrKd%2Fvdz9%2B0pA3c1d5j46bH%2F08HjgPCQme2QIhAMTIxzuUfupLPVXvPcZC3WhEQSuEUg0p7l405vD62ndjKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzms%2BGPy1AzjEMGgpoq3AOU9GExlOwCI8f2wdgMH8t5cIrjQR9yEvCfXe93DaPCv6AaszIabYtsUU1U8vruK5TeuHgx7frDtesxBu1C88FREhdUDRNyetyyu3J%2BbJAdmFCcB8ok%2FR%2BhYybsBDesCG9BrLinrVgzJd%2FToedf8tSN3T3SkAFj7yyi0fGXxacKRnBlQ5V%2BezHXbAAwXHKvIfldHUD4ZURXHTj85wwSu9vwU9VRxwNMEGV0k3f5gAGyWRevS8ANHHa1Muxbgi2cwmciIJxMhRvbBLlelwkc3f7pSPOIZjlLyq1je0W7CuxMUOJ5%2Fdchg8DO0tINzfJJgzJ1kOnLHQuL8%2Bsjp6ToNjCDOzOzDAlBKtXFVN%2B8R%2FwHWryjAoEDsptpPx%2BIJB40r%2B2UtWb2KI8L%2F%2BTmsZX%2FUpzV7bIErn0qlpAldFxPltmuRzsmkNsKq%2FKkhidkSa8EtvR1Xp5%2FzieG6jiJkwcrtwuHzlS4Yi2F5NqDI5dXpd2YuNPrInTqHhip3aikU3ZfjWiLN8kuP379G0UP1X2DKvafxsWMmmoADlH20cgk6mITqT7Uo3BGsgMd49DHXd%2Bre2AOEcnykvu75xr9S%2FcH9D8QP7PP%2Ffs9fHw%2BRdSJZHR%2F6Azt4%2Bmtp%2BWMRAUjAjCnv6DCBjqkAThLGeHtlvxlLKTGKfnTUhVqH8O7wmNKaC6pKWBsrO%2B5EM0i%2FynyjR2qe1AG2ohbIm1nuSgiZAgbstOUZ3urFifUflq0VFYP5jX%2BpDNJgXQ6T2TbdE647hYMNu%2Fmve3wZ%2BK8T5FzxThXznd3VnW16u%2BhMkflqDUb%2Br1KxDWUcLlCvBq7T0gJALUhRq8IFCqSidTAlqz8BPSUchSQx8levm8MGUoS&X-Amz-Signature=48cea0de13ddde19a5d6f5faed59982c9ef5a031483f2c06430962f038c50673&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZWHHEA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPRrxyOvOrKd%2Fvdz9%2B0pA3c1d5j46bH%2F08HjgPCQme2QIhAMTIxzuUfupLPVXvPcZC3WhEQSuEUg0p7l405vD62ndjKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzms%2BGPy1AzjEMGgpoq3AOU9GExlOwCI8f2wdgMH8t5cIrjQR9yEvCfXe93DaPCv6AaszIabYtsUU1U8vruK5TeuHgx7frDtesxBu1C88FREhdUDRNyetyyu3J%2BbJAdmFCcB8ok%2FR%2BhYybsBDesCG9BrLinrVgzJd%2FToedf8tSN3T3SkAFj7yyi0fGXxacKRnBlQ5V%2BezHXbAAwXHKvIfldHUD4ZURXHTj85wwSu9vwU9VRxwNMEGV0k3f5gAGyWRevS8ANHHa1Muxbgi2cwmciIJxMhRvbBLlelwkc3f7pSPOIZjlLyq1je0W7CuxMUOJ5%2Fdchg8DO0tINzfJJgzJ1kOnLHQuL8%2Bsjp6ToNjCDOzOzDAlBKtXFVN%2B8R%2FwHWryjAoEDsptpPx%2BIJB40r%2B2UtWb2KI8L%2F%2BTmsZX%2FUpzV7bIErn0qlpAldFxPltmuRzsmkNsKq%2FKkhidkSa8EtvR1Xp5%2FzieG6jiJkwcrtwuHzlS4Yi2F5NqDI5dXpd2YuNPrInTqHhip3aikU3ZfjWiLN8kuP379G0UP1X2DKvafxsWMmmoADlH20cgk6mITqT7Uo3BGsgMd49DHXd%2Bre2AOEcnykvu75xr9S%2FcH9D8QP7PP%2Ffs9fHw%2BRdSJZHR%2F6Azt4%2Bmtp%2BWMRAUjAjCnv6DCBjqkAThLGeHtlvxlLKTGKfnTUhVqH8O7wmNKaC6pKWBsrO%2B5EM0i%2FynyjR2qe1AG2ohbIm1nuSgiZAgbstOUZ3urFifUflq0VFYP5jX%2BpDNJgXQ6T2TbdE647hYMNu%2Fmve3wZ%2BK8T5FzxThXznd3VnW16u%2BhMkflqDUb%2Br1KxDWUcLlCvBq7T0gJALUhRq8IFCqSidTAlqz8BPSUchSQx8levm8MGUoS&X-Amz-Signature=b300b0269b643bd999fb8b24d6c0747463890d200d86fe764dcc0870f22e278c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFZWHHEA%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPRrxyOvOrKd%2Fvdz9%2B0pA3c1d5j46bH%2F08HjgPCQme2QIhAMTIxzuUfupLPVXvPcZC3WhEQSuEUg0p7l405vD62ndjKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzms%2BGPy1AzjEMGgpoq3AOU9GExlOwCI8f2wdgMH8t5cIrjQR9yEvCfXe93DaPCv6AaszIabYtsUU1U8vruK5TeuHgx7frDtesxBu1C88FREhdUDRNyetyyu3J%2BbJAdmFCcB8ok%2FR%2BhYybsBDesCG9BrLinrVgzJd%2FToedf8tSN3T3SkAFj7yyi0fGXxacKRnBlQ5V%2BezHXbAAwXHKvIfldHUD4ZURXHTj85wwSu9vwU9VRxwNMEGV0k3f5gAGyWRevS8ANHHa1Muxbgi2cwmciIJxMhRvbBLlelwkc3f7pSPOIZjlLyq1je0W7CuxMUOJ5%2Fdchg8DO0tINzfJJgzJ1kOnLHQuL8%2Bsjp6ToNjCDOzOzDAlBKtXFVN%2B8R%2FwHWryjAoEDsptpPx%2BIJB40r%2B2UtWb2KI8L%2F%2BTmsZX%2FUpzV7bIErn0qlpAldFxPltmuRzsmkNsKq%2FKkhidkSa8EtvR1Xp5%2FzieG6jiJkwcrtwuHzlS4Yi2F5NqDI5dXpd2YuNPrInTqHhip3aikU3ZfjWiLN8kuP379G0UP1X2DKvafxsWMmmoADlH20cgk6mITqT7Uo3BGsgMd49DHXd%2Bre2AOEcnykvu75xr9S%2FcH9D8QP7PP%2Ffs9fHw%2BRdSJZHR%2F6Azt4%2Bmtp%2BWMRAUjAjCnv6DCBjqkAThLGeHtlvxlLKTGKfnTUhVqH8O7wmNKaC6pKWBsrO%2B5EM0i%2FynyjR2qe1AG2ohbIm1nuSgiZAgbstOUZ3urFifUflq0VFYP5jX%2BpDNJgXQ6T2TbdE647hYMNu%2Fmve3wZ%2BK8T5FzxThXznd3VnW16u%2BhMkflqDUb%2Br1KxDWUcLlCvBq7T0gJALUhRq8IFCqSidTAlqz8BPSUchSQx8levm8MGUoS&X-Amz-Signature=8be2e95edcc9edb177331e4f9eec4260a60d446a8d9aed8c6977c7421b291397&X-Amz-SignedHeaders=host&x-id=GetObject)
