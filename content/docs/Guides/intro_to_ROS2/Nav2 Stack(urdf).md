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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA4AN3MY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDxnnsT%2FBfsRTUJe0aMGnVnn0Af30yO5dXimeh5G1AiWgIgUP%2FXdcJiT9aXQJ81eDiY1nBMgyNSGG6wqB98qz23vEoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJ26eJ9YnU7YgEnHircAy1DyOo2WqOVqR2dsiPt7v3SizUj3w19QFW1%2BzNEySefPKff6pkO%2BnLQcAxxM7HzNbElrveFbGY7PpqsjWizRPiNKjBpLNawmef6s%2FVGKiCcZYkFPXmHcQRDqCE6B%2B7C191mPZnm1rVFVbICtNaAr%2BXJfAepQ8aWfKE%2B3OgEWMW9mA5LUaJDW7f%2BH9ws4GzWVd5akpDF6w453yiuFV3b4LjaYXsDDObpOh1oO99KYsdVRCPgqlH7Rl%2BIimY7D2y2fqctg7GhSoiy50thUeIxzbGWyaAFmV55f46Uh9r3cwD1B6A7fMPrjJGksTHAzvQC6Cd7mLtfr77knN95i6wZ496iBrWTW1W181iFrpoXc1pkzKY2CtqO9Urfcx2DzUsXGq%2FJmdvkj3PMBYH7elZfU1s7XP1qphlsoTZyPgKqUpJiBwa%2Bqr4qrwjbFIQqhA%2FjQ8QQdNm%2F1pXksuZiD3j7Fld0QLs%2BLmXrPIZ5MgN8XCSxIz0TMHjmyOOFeV8ZcR8Ov2VXmomX9JZd32casJQ5f0U0IbeHytXnEBqm8TAN7GgxYvuhGNL7u4JTbyTqZ%2FYnkm4CSFXyMAKilNxV%2FrZQ4xrFLDGJ86xmBcK5Tj1ZhPxUFIyv2ct8U7NHaH0SMJSdycAGOqUBBKi5krbn2Dusl404Ci85dBiw1p291FDWN6QWhloikyg7Zqvvhapv8MQd9KWsJiZ%2F2mQ%2FBstOtmpKeIPdMLDnxnAb3SeLSJBXi1aMjpxiG4no2CFRluu0Oj5l%2Bp5%2FfPCCNeUX%2FIeaOLoUxGFbwo3gPFfh7wKVR4TnVPfdlBzHDLnNRv%2BJIVz2D6%2FhQLmmPw3s238%2B2pulirILbB4qYoNVCLC9xP3n&X-Amz-Signature=a739c79d92e5269afc199c140ee2c25a9016ffee480a17d26f418c260f8b5553&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA4AN3MY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDxnnsT%2FBfsRTUJe0aMGnVnn0Af30yO5dXimeh5G1AiWgIgUP%2FXdcJiT9aXQJ81eDiY1nBMgyNSGG6wqB98qz23vEoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJ26eJ9YnU7YgEnHircAy1DyOo2WqOVqR2dsiPt7v3SizUj3w19QFW1%2BzNEySefPKff6pkO%2BnLQcAxxM7HzNbElrveFbGY7PpqsjWizRPiNKjBpLNawmef6s%2FVGKiCcZYkFPXmHcQRDqCE6B%2B7C191mPZnm1rVFVbICtNaAr%2BXJfAepQ8aWfKE%2B3OgEWMW9mA5LUaJDW7f%2BH9ws4GzWVd5akpDF6w453yiuFV3b4LjaYXsDDObpOh1oO99KYsdVRCPgqlH7Rl%2BIimY7D2y2fqctg7GhSoiy50thUeIxzbGWyaAFmV55f46Uh9r3cwD1B6A7fMPrjJGksTHAzvQC6Cd7mLtfr77knN95i6wZ496iBrWTW1W181iFrpoXc1pkzKY2CtqO9Urfcx2DzUsXGq%2FJmdvkj3PMBYH7elZfU1s7XP1qphlsoTZyPgKqUpJiBwa%2Bqr4qrwjbFIQqhA%2FjQ8QQdNm%2F1pXksuZiD3j7Fld0QLs%2BLmXrPIZ5MgN8XCSxIz0TMHjmyOOFeV8ZcR8Ov2VXmomX9JZd32casJQ5f0U0IbeHytXnEBqm8TAN7GgxYvuhGNL7u4JTbyTqZ%2FYnkm4CSFXyMAKilNxV%2FrZQ4xrFLDGJ86xmBcK5Tj1ZhPxUFIyv2ct8U7NHaH0SMJSdycAGOqUBBKi5krbn2Dusl404Ci85dBiw1p291FDWN6QWhloikyg7Zqvvhapv8MQd9KWsJiZ%2F2mQ%2FBstOtmpKeIPdMLDnxnAb3SeLSJBXi1aMjpxiG4no2CFRluu0Oj5l%2Bp5%2FfPCCNeUX%2FIeaOLoUxGFbwo3gPFfh7wKVR4TnVPfdlBzHDLnNRv%2BJIVz2D6%2FhQLmmPw3s238%2B2pulirILbB4qYoNVCLC9xP3n&X-Amz-Signature=51b342be333434955bf001e878b4de7aa1b5b866cf439397bce5cdae6dd1e44a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA4AN3MY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDxnnsT%2FBfsRTUJe0aMGnVnn0Af30yO5dXimeh5G1AiWgIgUP%2FXdcJiT9aXQJ81eDiY1nBMgyNSGG6wqB98qz23vEoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJ26eJ9YnU7YgEnHircAy1DyOo2WqOVqR2dsiPt7v3SizUj3w19QFW1%2BzNEySefPKff6pkO%2BnLQcAxxM7HzNbElrveFbGY7PpqsjWizRPiNKjBpLNawmef6s%2FVGKiCcZYkFPXmHcQRDqCE6B%2B7C191mPZnm1rVFVbICtNaAr%2BXJfAepQ8aWfKE%2B3OgEWMW9mA5LUaJDW7f%2BH9ws4GzWVd5akpDF6w453yiuFV3b4LjaYXsDDObpOh1oO99KYsdVRCPgqlH7Rl%2BIimY7D2y2fqctg7GhSoiy50thUeIxzbGWyaAFmV55f46Uh9r3cwD1B6A7fMPrjJGksTHAzvQC6Cd7mLtfr77knN95i6wZ496iBrWTW1W181iFrpoXc1pkzKY2CtqO9Urfcx2DzUsXGq%2FJmdvkj3PMBYH7elZfU1s7XP1qphlsoTZyPgKqUpJiBwa%2Bqr4qrwjbFIQqhA%2FjQ8QQdNm%2F1pXksuZiD3j7Fld0QLs%2BLmXrPIZ5MgN8XCSxIz0TMHjmyOOFeV8ZcR8Ov2VXmomX9JZd32casJQ5f0U0IbeHytXnEBqm8TAN7GgxYvuhGNL7u4JTbyTqZ%2FYnkm4CSFXyMAKilNxV%2FrZQ4xrFLDGJ86xmBcK5Tj1ZhPxUFIyv2ct8U7NHaH0SMJSdycAGOqUBBKi5krbn2Dusl404Ci85dBiw1p291FDWN6QWhloikyg7Zqvvhapv8MQd9KWsJiZ%2F2mQ%2FBstOtmpKeIPdMLDnxnAb3SeLSJBXi1aMjpxiG4no2CFRluu0Oj5l%2Bp5%2FfPCCNeUX%2FIeaOLoUxGFbwo3gPFfh7wKVR4TnVPfdlBzHDLnNRv%2BJIVz2D6%2FhQLmmPw3s238%2B2pulirILbB4qYoNVCLC9xP3n&X-Amz-Signature=12ad43e9d358b73c0caded3ac90ecc81de368dc3dd836ebc7cafe6c3ea8914ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA4AN3MY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDxnnsT%2FBfsRTUJe0aMGnVnn0Af30yO5dXimeh5G1AiWgIgUP%2FXdcJiT9aXQJ81eDiY1nBMgyNSGG6wqB98qz23vEoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJ26eJ9YnU7YgEnHircAy1DyOo2WqOVqR2dsiPt7v3SizUj3w19QFW1%2BzNEySefPKff6pkO%2BnLQcAxxM7HzNbElrveFbGY7PpqsjWizRPiNKjBpLNawmef6s%2FVGKiCcZYkFPXmHcQRDqCE6B%2B7C191mPZnm1rVFVbICtNaAr%2BXJfAepQ8aWfKE%2B3OgEWMW9mA5LUaJDW7f%2BH9ws4GzWVd5akpDF6w453yiuFV3b4LjaYXsDDObpOh1oO99KYsdVRCPgqlH7Rl%2BIimY7D2y2fqctg7GhSoiy50thUeIxzbGWyaAFmV55f46Uh9r3cwD1B6A7fMPrjJGksTHAzvQC6Cd7mLtfr77knN95i6wZ496iBrWTW1W181iFrpoXc1pkzKY2CtqO9Urfcx2DzUsXGq%2FJmdvkj3PMBYH7elZfU1s7XP1qphlsoTZyPgKqUpJiBwa%2Bqr4qrwjbFIQqhA%2FjQ8QQdNm%2F1pXksuZiD3j7Fld0QLs%2BLmXrPIZ5MgN8XCSxIz0TMHjmyOOFeV8ZcR8Ov2VXmomX9JZd32casJQ5f0U0IbeHytXnEBqm8TAN7GgxYvuhGNL7u4JTbyTqZ%2FYnkm4CSFXyMAKilNxV%2FrZQ4xrFLDGJ86xmBcK5Tj1ZhPxUFIyv2ct8U7NHaH0SMJSdycAGOqUBBKi5krbn2Dusl404Ci85dBiw1p291FDWN6QWhloikyg7Zqvvhapv8MQd9KWsJiZ%2F2mQ%2FBstOtmpKeIPdMLDnxnAb3SeLSJBXi1aMjpxiG4no2CFRluu0Oj5l%2Bp5%2FfPCCNeUX%2FIeaOLoUxGFbwo3gPFfh7wKVR4TnVPfdlBzHDLnNRv%2BJIVz2D6%2FhQLmmPw3s238%2B2pulirILbB4qYoNVCLC9xP3n&X-Amz-Signature=317c4e32eb50501293b3ba2c1edd5d2031bd9a80723602a916cd5d952d7d5676&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA4AN3MY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDxnnsT%2FBfsRTUJe0aMGnVnn0Af30yO5dXimeh5G1AiWgIgUP%2FXdcJiT9aXQJ81eDiY1nBMgyNSGG6wqB98qz23vEoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJ26eJ9YnU7YgEnHircAy1DyOo2WqOVqR2dsiPt7v3SizUj3w19QFW1%2BzNEySefPKff6pkO%2BnLQcAxxM7HzNbElrveFbGY7PpqsjWizRPiNKjBpLNawmef6s%2FVGKiCcZYkFPXmHcQRDqCE6B%2B7C191mPZnm1rVFVbICtNaAr%2BXJfAepQ8aWfKE%2B3OgEWMW9mA5LUaJDW7f%2BH9ws4GzWVd5akpDF6w453yiuFV3b4LjaYXsDDObpOh1oO99KYsdVRCPgqlH7Rl%2BIimY7D2y2fqctg7GhSoiy50thUeIxzbGWyaAFmV55f46Uh9r3cwD1B6A7fMPrjJGksTHAzvQC6Cd7mLtfr77knN95i6wZ496iBrWTW1W181iFrpoXc1pkzKY2CtqO9Urfcx2DzUsXGq%2FJmdvkj3PMBYH7elZfU1s7XP1qphlsoTZyPgKqUpJiBwa%2Bqr4qrwjbFIQqhA%2FjQ8QQdNm%2F1pXksuZiD3j7Fld0QLs%2BLmXrPIZ5MgN8XCSxIz0TMHjmyOOFeV8ZcR8Ov2VXmomX9JZd32casJQ5f0U0IbeHytXnEBqm8TAN7GgxYvuhGNL7u4JTbyTqZ%2FYnkm4CSFXyMAKilNxV%2FrZQ4xrFLDGJ86xmBcK5Tj1ZhPxUFIyv2ct8U7NHaH0SMJSdycAGOqUBBKi5krbn2Dusl404Ci85dBiw1p291FDWN6QWhloikyg7Zqvvhapv8MQd9KWsJiZ%2F2mQ%2FBstOtmpKeIPdMLDnxnAb3SeLSJBXi1aMjpxiG4no2CFRluu0Oj5l%2Bp5%2FfPCCNeUX%2FIeaOLoUxGFbwo3gPFfh7wKVR4TnVPfdlBzHDLnNRv%2BJIVz2D6%2FhQLmmPw3s238%2B2pulirILbB4qYoNVCLC9xP3n&X-Amz-Signature=fb1063797e0d463580f4af9bf1bd96d3bfcec83818598771def837398c13665a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA4AN3MY%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDxnnsT%2FBfsRTUJe0aMGnVnn0Af30yO5dXimeh5G1AiWgIgUP%2FXdcJiT9aXQJ81eDiY1nBMgyNSGG6wqB98qz23vEoqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJ26eJ9YnU7YgEnHircAy1DyOo2WqOVqR2dsiPt7v3SizUj3w19QFW1%2BzNEySefPKff6pkO%2BnLQcAxxM7HzNbElrveFbGY7PpqsjWizRPiNKjBpLNawmef6s%2FVGKiCcZYkFPXmHcQRDqCE6B%2B7C191mPZnm1rVFVbICtNaAr%2BXJfAepQ8aWfKE%2B3OgEWMW9mA5LUaJDW7f%2BH9ws4GzWVd5akpDF6w453yiuFV3b4LjaYXsDDObpOh1oO99KYsdVRCPgqlH7Rl%2BIimY7D2y2fqctg7GhSoiy50thUeIxzbGWyaAFmV55f46Uh9r3cwD1B6A7fMPrjJGksTHAzvQC6Cd7mLtfr77knN95i6wZ496iBrWTW1W181iFrpoXc1pkzKY2CtqO9Urfcx2DzUsXGq%2FJmdvkj3PMBYH7elZfU1s7XP1qphlsoTZyPgKqUpJiBwa%2Bqr4qrwjbFIQqhA%2FjQ8QQdNm%2F1pXksuZiD3j7Fld0QLs%2BLmXrPIZ5MgN8XCSxIz0TMHjmyOOFeV8ZcR8Ov2VXmomX9JZd32casJQ5f0U0IbeHytXnEBqm8TAN7GgxYvuhGNL7u4JTbyTqZ%2FYnkm4CSFXyMAKilNxV%2FrZQ4xrFLDGJ86xmBcK5Tj1ZhPxUFIyv2ct8U7NHaH0SMJSdycAGOqUBBKi5krbn2Dusl404Ci85dBiw1p291FDWN6QWhloikyg7Zqvvhapv8MQd9KWsJiZ%2F2mQ%2FBstOtmpKeIPdMLDnxnAb3SeLSJBXi1aMjpxiG4no2CFRluu0Oj5l%2Bp5%2FfPCCNeUX%2FIeaOLoUxGFbwo3gPFfh7wKVR4TnVPfdlBzHDLnNRv%2BJIVz2D6%2FhQLmmPw3s238%2B2pulirILbB4qYoNVCLC9xP3n&X-Amz-Signature=2e8cc5b079855e27bb9f2badff2d483dfe7d6e7e5b631fa3e84cf914435930a8&X-Amz-SignedHeaders=host&x-id=GetObject)
