---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYA73HVX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKE3cYS6Qj%2FQmU0diwgbPljDFF6%2BRjCFT6A2P5HX6sKAiEAvjdTrhpKb%2BcyHEFFTV7YxhyacZg6im4b5uEI%2BODiWqkqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS7gFS6HI8rRZjVyCrcA2ip%2B4VXknCBsZAs4HAsqcVfSAdTZf9vAN182l1Bv4y81kVcePu6iMzcOX1FAjeclim2dvbRrBDaz4TRYv7psgRK%2BJ%2BmZq06J4aJO8i6BRZqPl%2FdNOJAUj%2FxQgXQuS0INAzoT87cNXph%2Fx%2FU02UU7C5ARNeJxJmetY6IHMJnryK437G0SFNdlAYg%2F0NuiFVr0qL0rZM1Etru6wmioLeN%2FzXPDPJLyzVLMOkkowzNagjqPqSWpVjGEKcuWbJFhEURpPwPZrRj5DZZd4xp3EqkkM%2Fn4Tee6bVhtPl4I4OEPVy8QlHPU2AWL7GJMfduhgYNB2UZbwwswBScEc3pH%2FLbaPinII321eSx4lRTdcSZ1Ah07h7AIkBF1Lwpzz8o8Jx9SFVmeTlHjiw6tSTaH9netXG%2FNpvp0DaWGPo2r8j9gJSPokEQ2f3fGeY6eRf4xId91cClsFiFsI3gHOaO4WpW0DR3e2MVhYCltam40qcUFx6eRMkbtTR06xX2nnku6c%2BOWUjW%2FTCj3C5sFj3B8HtwKv%2B%2FAKi0VUViIiGMTIVGdlDHWwN3c%2B3Yi2qrs2Z7DIGmQgPPO6dvpixjQrul%2Bp8wGBEn5IPMXH5AagtebHpOtIot8SN34KTT8VnhDCWnMJPM6LwGOqUB%2BQC9P8kwwuT1%2FqWHh5nkbTrtkjdAYY2TmZuc%2F04l2%2BmGRJ4xGviib70%2FpuOfSR5ZnJDlvcJUWlTurGyntc%2F%2Fob%2FDbyNc0GRiArZGOEF6GC8o0ZZaX88q%2BYCndyQSbN5YntuKcY5AaHKT7XZNjGleqKwYAeIJLl%2Fe9%2B6t9jr0d9wLre2028o2ZGjOFsUZQ%2BnjdzGSF7x%2FknVnDoOX0UP%2FFiC%2Bi2B2&X-Amz-Signature=58e53bdbe626ff6ef44493d58acecf9bd957ceeee0251f5d4df8ec66a884c5ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYA73HVX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKE3cYS6Qj%2FQmU0diwgbPljDFF6%2BRjCFT6A2P5HX6sKAiEAvjdTrhpKb%2BcyHEFFTV7YxhyacZg6im4b5uEI%2BODiWqkqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS7gFS6HI8rRZjVyCrcA2ip%2B4VXknCBsZAs4HAsqcVfSAdTZf9vAN182l1Bv4y81kVcePu6iMzcOX1FAjeclim2dvbRrBDaz4TRYv7psgRK%2BJ%2BmZq06J4aJO8i6BRZqPl%2FdNOJAUj%2FxQgXQuS0INAzoT87cNXph%2Fx%2FU02UU7C5ARNeJxJmetY6IHMJnryK437G0SFNdlAYg%2F0NuiFVr0qL0rZM1Etru6wmioLeN%2FzXPDPJLyzVLMOkkowzNagjqPqSWpVjGEKcuWbJFhEURpPwPZrRj5DZZd4xp3EqkkM%2Fn4Tee6bVhtPl4I4OEPVy8QlHPU2AWL7GJMfduhgYNB2UZbwwswBScEc3pH%2FLbaPinII321eSx4lRTdcSZ1Ah07h7AIkBF1Lwpzz8o8Jx9SFVmeTlHjiw6tSTaH9netXG%2FNpvp0DaWGPo2r8j9gJSPokEQ2f3fGeY6eRf4xId91cClsFiFsI3gHOaO4WpW0DR3e2MVhYCltam40qcUFx6eRMkbtTR06xX2nnku6c%2BOWUjW%2FTCj3C5sFj3B8HtwKv%2B%2FAKi0VUViIiGMTIVGdlDHWwN3c%2B3Yi2qrs2Z7DIGmQgPPO6dvpixjQrul%2Bp8wGBEn5IPMXH5AagtebHpOtIot8SN34KTT8VnhDCWnMJPM6LwGOqUB%2BQC9P8kwwuT1%2FqWHh5nkbTrtkjdAYY2TmZuc%2F04l2%2BmGRJ4xGviib70%2FpuOfSR5ZnJDlvcJUWlTurGyntc%2F%2Fob%2FDbyNc0GRiArZGOEF6GC8o0ZZaX88q%2BYCndyQSbN5YntuKcY5AaHKT7XZNjGleqKwYAeIJLl%2Fe9%2B6t9jr0d9wLre2028o2ZGjOFsUZQ%2BnjdzGSF7x%2FknVnDoOX0UP%2FFiC%2Bi2B2&X-Amz-Signature=6118f8fdc7a5fbb2c55689327a722be7a5269a7c064d98ebdab495ad3bea0d9b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYA73HVX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKE3cYS6Qj%2FQmU0diwgbPljDFF6%2BRjCFT6A2P5HX6sKAiEAvjdTrhpKb%2BcyHEFFTV7YxhyacZg6im4b5uEI%2BODiWqkqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS7gFS6HI8rRZjVyCrcA2ip%2B4VXknCBsZAs4HAsqcVfSAdTZf9vAN182l1Bv4y81kVcePu6iMzcOX1FAjeclim2dvbRrBDaz4TRYv7psgRK%2BJ%2BmZq06J4aJO8i6BRZqPl%2FdNOJAUj%2FxQgXQuS0INAzoT87cNXph%2Fx%2FU02UU7C5ARNeJxJmetY6IHMJnryK437G0SFNdlAYg%2F0NuiFVr0qL0rZM1Etru6wmioLeN%2FzXPDPJLyzVLMOkkowzNagjqPqSWpVjGEKcuWbJFhEURpPwPZrRj5DZZd4xp3EqkkM%2Fn4Tee6bVhtPl4I4OEPVy8QlHPU2AWL7GJMfduhgYNB2UZbwwswBScEc3pH%2FLbaPinII321eSx4lRTdcSZ1Ah07h7AIkBF1Lwpzz8o8Jx9SFVmeTlHjiw6tSTaH9netXG%2FNpvp0DaWGPo2r8j9gJSPokEQ2f3fGeY6eRf4xId91cClsFiFsI3gHOaO4WpW0DR3e2MVhYCltam40qcUFx6eRMkbtTR06xX2nnku6c%2BOWUjW%2FTCj3C5sFj3B8HtwKv%2B%2FAKi0VUViIiGMTIVGdlDHWwN3c%2B3Yi2qrs2Z7DIGmQgPPO6dvpixjQrul%2Bp8wGBEn5IPMXH5AagtebHpOtIot8SN34KTT8VnhDCWnMJPM6LwGOqUB%2BQC9P8kwwuT1%2FqWHh5nkbTrtkjdAYY2TmZuc%2F04l2%2BmGRJ4xGviib70%2FpuOfSR5ZnJDlvcJUWlTurGyntc%2F%2Fob%2FDbyNc0GRiArZGOEF6GC8o0ZZaX88q%2BYCndyQSbN5YntuKcY5AaHKT7XZNjGleqKwYAeIJLl%2Fe9%2B6t9jr0d9wLre2028o2ZGjOFsUZQ%2BnjdzGSF7x%2FknVnDoOX0UP%2FFiC%2Bi2B2&X-Amz-Signature=7e685f3aa9ed69c43c2ac7de6911b7e68fe3a06083d9e9458204b273eb62b7eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYA73HVX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKE3cYS6Qj%2FQmU0diwgbPljDFF6%2BRjCFT6A2P5HX6sKAiEAvjdTrhpKb%2BcyHEFFTV7YxhyacZg6im4b5uEI%2BODiWqkqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS7gFS6HI8rRZjVyCrcA2ip%2B4VXknCBsZAs4HAsqcVfSAdTZf9vAN182l1Bv4y81kVcePu6iMzcOX1FAjeclim2dvbRrBDaz4TRYv7psgRK%2BJ%2BmZq06J4aJO8i6BRZqPl%2FdNOJAUj%2FxQgXQuS0INAzoT87cNXph%2Fx%2FU02UU7C5ARNeJxJmetY6IHMJnryK437G0SFNdlAYg%2F0NuiFVr0qL0rZM1Etru6wmioLeN%2FzXPDPJLyzVLMOkkowzNagjqPqSWpVjGEKcuWbJFhEURpPwPZrRj5DZZd4xp3EqkkM%2Fn4Tee6bVhtPl4I4OEPVy8QlHPU2AWL7GJMfduhgYNB2UZbwwswBScEc3pH%2FLbaPinII321eSx4lRTdcSZ1Ah07h7AIkBF1Lwpzz8o8Jx9SFVmeTlHjiw6tSTaH9netXG%2FNpvp0DaWGPo2r8j9gJSPokEQ2f3fGeY6eRf4xId91cClsFiFsI3gHOaO4WpW0DR3e2MVhYCltam40qcUFx6eRMkbtTR06xX2nnku6c%2BOWUjW%2FTCj3C5sFj3B8HtwKv%2B%2FAKi0VUViIiGMTIVGdlDHWwN3c%2B3Yi2qrs2Z7DIGmQgPPO6dvpixjQrul%2Bp8wGBEn5IPMXH5AagtebHpOtIot8SN34KTT8VnhDCWnMJPM6LwGOqUB%2BQC9P8kwwuT1%2FqWHh5nkbTrtkjdAYY2TmZuc%2F04l2%2BmGRJ4xGviib70%2FpuOfSR5ZnJDlvcJUWlTurGyntc%2F%2Fob%2FDbyNc0GRiArZGOEF6GC8o0ZZaX88q%2BYCndyQSbN5YntuKcY5AaHKT7XZNjGleqKwYAeIJLl%2Fe9%2B6t9jr0d9wLre2028o2ZGjOFsUZQ%2BnjdzGSF7x%2FknVnDoOX0UP%2FFiC%2Bi2B2&X-Amz-Signature=22f20495e76e82cd3ccd94ea4e4cfe0be6c9d06ee2eb8031c0729644cc242b50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYA73HVX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKE3cYS6Qj%2FQmU0diwgbPljDFF6%2BRjCFT6A2P5HX6sKAiEAvjdTrhpKb%2BcyHEFFTV7YxhyacZg6im4b5uEI%2BODiWqkqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS7gFS6HI8rRZjVyCrcA2ip%2B4VXknCBsZAs4HAsqcVfSAdTZf9vAN182l1Bv4y81kVcePu6iMzcOX1FAjeclim2dvbRrBDaz4TRYv7psgRK%2BJ%2BmZq06J4aJO8i6BRZqPl%2FdNOJAUj%2FxQgXQuS0INAzoT87cNXph%2Fx%2FU02UU7C5ARNeJxJmetY6IHMJnryK437G0SFNdlAYg%2F0NuiFVr0qL0rZM1Etru6wmioLeN%2FzXPDPJLyzVLMOkkowzNagjqPqSWpVjGEKcuWbJFhEURpPwPZrRj5DZZd4xp3EqkkM%2Fn4Tee6bVhtPl4I4OEPVy8QlHPU2AWL7GJMfduhgYNB2UZbwwswBScEc3pH%2FLbaPinII321eSx4lRTdcSZ1Ah07h7AIkBF1Lwpzz8o8Jx9SFVmeTlHjiw6tSTaH9netXG%2FNpvp0DaWGPo2r8j9gJSPokEQ2f3fGeY6eRf4xId91cClsFiFsI3gHOaO4WpW0DR3e2MVhYCltam40qcUFx6eRMkbtTR06xX2nnku6c%2BOWUjW%2FTCj3C5sFj3B8HtwKv%2B%2FAKi0VUViIiGMTIVGdlDHWwN3c%2B3Yi2qrs2Z7DIGmQgPPO6dvpixjQrul%2Bp8wGBEn5IPMXH5AagtebHpOtIot8SN34KTT8VnhDCWnMJPM6LwGOqUB%2BQC9P8kwwuT1%2FqWHh5nkbTrtkjdAYY2TmZuc%2F04l2%2BmGRJ4xGviib70%2FpuOfSR5ZnJDlvcJUWlTurGyntc%2F%2Fob%2FDbyNc0GRiArZGOEF6GC8o0ZZaX88q%2BYCndyQSbN5YntuKcY5AaHKT7XZNjGleqKwYAeIJLl%2Fe9%2B6t9jr0d9wLre2028o2ZGjOFsUZQ%2BnjdzGSF7x%2FknVnDoOX0UP%2FFiC%2Bi2B2&X-Amz-Signature=06b0e7792d2c2cca75ec3ae68db791ef2fed0e8a18e00f874194838b11632785&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYA73HVX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKE3cYS6Qj%2FQmU0diwgbPljDFF6%2BRjCFT6A2P5HX6sKAiEAvjdTrhpKb%2BcyHEFFTV7YxhyacZg6im4b5uEI%2BODiWqkqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS7gFS6HI8rRZjVyCrcA2ip%2B4VXknCBsZAs4HAsqcVfSAdTZf9vAN182l1Bv4y81kVcePu6iMzcOX1FAjeclim2dvbRrBDaz4TRYv7psgRK%2BJ%2BmZq06J4aJO8i6BRZqPl%2FdNOJAUj%2FxQgXQuS0INAzoT87cNXph%2Fx%2FU02UU7C5ARNeJxJmetY6IHMJnryK437G0SFNdlAYg%2F0NuiFVr0qL0rZM1Etru6wmioLeN%2FzXPDPJLyzVLMOkkowzNagjqPqSWpVjGEKcuWbJFhEURpPwPZrRj5DZZd4xp3EqkkM%2Fn4Tee6bVhtPl4I4OEPVy8QlHPU2AWL7GJMfduhgYNB2UZbwwswBScEc3pH%2FLbaPinII321eSx4lRTdcSZ1Ah07h7AIkBF1Lwpzz8o8Jx9SFVmeTlHjiw6tSTaH9netXG%2FNpvp0DaWGPo2r8j9gJSPokEQ2f3fGeY6eRf4xId91cClsFiFsI3gHOaO4WpW0DR3e2MVhYCltam40qcUFx6eRMkbtTR06xX2nnku6c%2BOWUjW%2FTCj3C5sFj3B8HtwKv%2B%2FAKi0VUViIiGMTIVGdlDHWwN3c%2B3Yi2qrs2Z7DIGmQgPPO6dvpixjQrul%2Bp8wGBEn5IPMXH5AagtebHpOtIot8SN34KTT8VnhDCWnMJPM6LwGOqUB%2BQC9P8kwwuT1%2FqWHh5nkbTrtkjdAYY2TmZuc%2F04l2%2BmGRJ4xGviib70%2FpuOfSR5ZnJDlvcJUWlTurGyntc%2F%2Fob%2FDbyNc0GRiArZGOEF6GC8o0ZZaX88q%2BYCndyQSbN5YntuKcY5AaHKT7XZNjGleqKwYAeIJLl%2Fe9%2B6t9jr0d9wLre2028o2ZGjOFsUZQ%2BnjdzGSF7x%2FknVnDoOX0UP%2FFiC%2Bi2B2&X-Amz-Signature=50979fd687905ebe0d9b858f6510216bfc2f06e8f44dd65d29bb93acc5150c7d&X-Amz-SignedHeaders=host&x-id=GetObject)
