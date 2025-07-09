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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCKZFEP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtPoMoRIHq%2BnsIMHVhqPgFuzCbNsvd3LHHc%2B2R2sF9bAiEAi8ECCD4Sh2Zzgosonc2uIftpKD%2FTZ7qKFMQBiz1F7MYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJ60gOUcq%2B5olyCiSrcAwhJZHFfuQORUkX8ujo9J9c2cIh36GeV8mYEvB38P5FfALEOJ11ifbA0l%2BjPGxe1MSAB5eArD2kdewJpoyiE6A4IkTz5nEYMtcEQ4l4cDc%2Ba6MCgmcEaaAy0ilAF7Uhn5nwor5l7VaFtu6uiGaexrfRyoLEb1cCqpTMWbzXHclDuxA5Kv8YUqDGGfB0q1Qc24vbAmascR8rlC92fym2UwaYVyK3iJ0eEmhJ1qZbYw01jpxRW2VRN2bYXqtkWgwKPW5RImC27uQr11k3YSXzJTmR8zNoYYx%2BhuCDRsNDq4hcx18u5Bkuh98qfCQRyV%2FHu8acRTzIJlVHhI9AI3KH7aqjcap%2FxG3u5QiL1ktcBlQ2L%2FpxD9c08m9nXfJb3FWkQxGGuj78EYIXXg6BEvrwfUuIcOvpW4PB%2FrpIwUOmQQFn4uVVTyWVj5FQT%2FBpAnznY5A9JfI1r55CUx7kp95VdmuyHeKKLQnPkKqzeyiiaiEa4AKEGgB7RG%2Bg2PdAUYBr6M5AVHkPaLhdGrPX5iZmOhbgc%2FBTSiZS73VrMwi6d9nNjunD6%2BTYVQRgqfSenR9HmK4%2FrbUrvdFkaX5sO0qyBVhM4Ioi76XvUvngGvIlmD1yaE%2Fal2d5mq2oZNhaoML2au8MGOqUBHIlZ%2F5ESo53ZAoJS7Sgkx%2BiHa6h10gJw%2BO%2FXIMuybN3mF5wOoZMPKvGYHFSNHxdfljvzEOWo61Ib0YjjUw8lw%2FqvkkNuNIy3m%2F021hra2ROzGd2l5kXVN%2BkTHT17pk114hISDvwj6W25cWOeZx0zh%2FI0UzRmw2i6yJS3tG18bm2XlTkoZwzK2vbMnX13hPvsmgRw4a3JVZYho2z7VVOeaHvw9fTR&X-Amz-Signature=589f1cd8047ec72b5bc18bc78c954627d02cf274355e6bfb09b2f4a7317c38be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCKZFEP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtPoMoRIHq%2BnsIMHVhqPgFuzCbNsvd3LHHc%2B2R2sF9bAiEAi8ECCD4Sh2Zzgosonc2uIftpKD%2FTZ7qKFMQBiz1F7MYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJ60gOUcq%2B5olyCiSrcAwhJZHFfuQORUkX8ujo9J9c2cIh36GeV8mYEvB38P5FfALEOJ11ifbA0l%2BjPGxe1MSAB5eArD2kdewJpoyiE6A4IkTz5nEYMtcEQ4l4cDc%2Ba6MCgmcEaaAy0ilAF7Uhn5nwor5l7VaFtu6uiGaexrfRyoLEb1cCqpTMWbzXHclDuxA5Kv8YUqDGGfB0q1Qc24vbAmascR8rlC92fym2UwaYVyK3iJ0eEmhJ1qZbYw01jpxRW2VRN2bYXqtkWgwKPW5RImC27uQr11k3YSXzJTmR8zNoYYx%2BhuCDRsNDq4hcx18u5Bkuh98qfCQRyV%2FHu8acRTzIJlVHhI9AI3KH7aqjcap%2FxG3u5QiL1ktcBlQ2L%2FpxD9c08m9nXfJb3FWkQxGGuj78EYIXXg6BEvrwfUuIcOvpW4PB%2FrpIwUOmQQFn4uVVTyWVj5FQT%2FBpAnznY5A9JfI1r55CUx7kp95VdmuyHeKKLQnPkKqzeyiiaiEa4AKEGgB7RG%2Bg2PdAUYBr6M5AVHkPaLhdGrPX5iZmOhbgc%2FBTSiZS73VrMwi6d9nNjunD6%2BTYVQRgqfSenR9HmK4%2FrbUrvdFkaX5sO0qyBVhM4Ioi76XvUvngGvIlmD1yaE%2Fal2d5mq2oZNhaoML2au8MGOqUBHIlZ%2F5ESo53ZAoJS7Sgkx%2BiHa6h10gJw%2BO%2FXIMuybN3mF5wOoZMPKvGYHFSNHxdfljvzEOWo61Ib0YjjUw8lw%2FqvkkNuNIy3m%2F021hra2ROzGd2l5kXVN%2BkTHT17pk114hISDvwj6W25cWOeZx0zh%2FI0UzRmw2i6yJS3tG18bm2XlTkoZwzK2vbMnX13hPvsmgRw4a3JVZYho2z7VVOeaHvw9fTR&X-Amz-Signature=444c2859982a37531d7a995c565264a734b660a9af4acdaa7eb0d81484f3d324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCKZFEP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtPoMoRIHq%2BnsIMHVhqPgFuzCbNsvd3LHHc%2B2R2sF9bAiEAi8ECCD4Sh2Zzgosonc2uIftpKD%2FTZ7qKFMQBiz1F7MYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJ60gOUcq%2B5olyCiSrcAwhJZHFfuQORUkX8ujo9J9c2cIh36GeV8mYEvB38P5FfALEOJ11ifbA0l%2BjPGxe1MSAB5eArD2kdewJpoyiE6A4IkTz5nEYMtcEQ4l4cDc%2Ba6MCgmcEaaAy0ilAF7Uhn5nwor5l7VaFtu6uiGaexrfRyoLEb1cCqpTMWbzXHclDuxA5Kv8YUqDGGfB0q1Qc24vbAmascR8rlC92fym2UwaYVyK3iJ0eEmhJ1qZbYw01jpxRW2VRN2bYXqtkWgwKPW5RImC27uQr11k3YSXzJTmR8zNoYYx%2BhuCDRsNDq4hcx18u5Bkuh98qfCQRyV%2FHu8acRTzIJlVHhI9AI3KH7aqjcap%2FxG3u5QiL1ktcBlQ2L%2FpxD9c08m9nXfJb3FWkQxGGuj78EYIXXg6BEvrwfUuIcOvpW4PB%2FrpIwUOmQQFn4uVVTyWVj5FQT%2FBpAnznY5A9JfI1r55CUx7kp95VdmuyHeKKLQnPkKqzeyiiaiEa4AKEGgB7RG%2Bg2PdAUYBr6M5AVHkPaLhdGrPX5iZmOhbgc%2FBTSiZS73VrMwi6d9nNjunD6%2BTYVQRgqfSenR9HmK4%2FrbUrvdFkaX5sO0qyBVhM4Ioi76XvUvngGvIlmD1yaE%2Fal2d5mq2oZNhaoML2au8MGOqUBHIlZ%2F5ESo53ZAoJS7Sgkx%2BiHa6h10gJw%2BO%2FXIMuybN3mF5wOoZMPKvGYHFSNHxdfljvzEOWo61Ib0YjjUw8lw%2FqvkkNuNIy3m%2F021hra2ROzGd2l5kXVN%2BkTHT17pk114hISDvwj6W25cWOeZx0zh%2FI0UzRmw2i6yJS3tG18bm2XlTkoZwzK2vbMnX13hPvsmgRw4a3JVZYho2z7VVOeaHvw9fTR&X-Amz-Signature=26b47acef67ce4119465fc7a967f2b46c37c3bb81d0edceb31cd222aec3cd470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCKZFEP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtPoMoRIHq%2BnsIMHVhqPgFuzCbNsvd3LHHc%2B2R2sF9bAiEAi8ECCD4Sh2Zzgosonc2uIftpKD%2FTZ7qKFMQBiz1F7MYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJ60gOUcq%2B5olyCiSrcAwhJZHFfuQORUkX8ujo9J9c2cIh36GeV8mYEvB38P5FfALEOJ11ifbA0l%2BjPGxe1MSAB5eArD2kdewJpoyiE6A4IkTz5nEYMtcEQ4l4cDc%2Ba6MCgmcEaaAy0ilAF7Uhn5nwor5l7VaFtu6uiGaexrfRyoLEb1cCqpTMWbzXHclDuxA5Kv8YUqDGGfB0q1Qc24vbAmascR8rlC92fym2UwaYVyK3iJ0eEmhJ1qZbYw01jpxRW2VRN2bYXqtkWgwKPW5RImC27uQr11k3YSXzJTmR8zNoYYx%2BhuCDRsNDq4hcx18u5Bkuh98qfCQRyV%2FHu8acRTzIJlVHhI9AI3KH7aqjcap%2FxG3u5QiL1ktcBlQ2L%2FpxD9c08m9nXfJb3FWkQxGGuj78EYIXXg6BEvrwfUuIcOvpW4PB%2FrpIwUOmQQFn4uVVTyWVj5FQT%2FBpAnznY5A9JfI1r55CUx7kp95VdmuyHeKKLQnPkKqzeyiiaiEa4AKEGgB7RG%2Bg2PdAUYBr6M5AVHkPaLhdGrPX5iZmOhbgc%2FBTSiZS73VrMwi6d9nNjunD6%2BTYVQRgqfSenR9HmK4%2FrbUrvdFkaX5sO0qyBVhM4Ioi76XvUvngGvIlmD1yaE%2Fal2d5mq2oZNhaoML2au8MGOqUBHIlZ%2F5ESo53ZAoJS7Sgkx%2BiHa6h10gJw%2BO%2FXIMuybN3mF5wOoZMPKvGYHFSNHxdfljvzEOWo61Ib0YjjUw8lw%2FqvkkNuNIy3m%2F021hra2ROzGd2l5kXVN%2BkTHT17pk114hISDvwj6W25cWOeZx0zh%2FI0UzRmw2i6yJS3tG18bm2XlTkoZwzK2vbMnX13hPvsmgRw4a3JVZYho2z7VVOeaHvw9fTR&X-Amz-Signature=f38d164c3c15e51461309877512f39ee7c15f44b135ccb2b3517a992d5ff945c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCKZFEP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtPoMoRIHq%2BnsIMHVhqPgFuzCbNsvd3LHHc%2B2R2sF9bAiEAi8ECCD4Sh2Zzgosonc2uIftpKD%2FTZ7qKFMQBiz1F7MYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJ60gOUcq%2B5olyCiSrcAwhJZHFfuQORUkX8ujo9J9c2cIh36GeV8mYEvB38P5FfALEOJ11ifbA0l%2BjPGxe1MSAB5eArD2kdewJpoyiE6A4IkTz5nEYMtcEQ4l4cDc%2Ba6MCgmcEaaAy0ilAF7Uhn5nwor5l7VaFtu6uiGaexrfRyoLEb1cCqpTMWbzXHclDuxA5Kv8YUqDGGfB0q1Qc24vbAmascR8rlC92fym2UwaYVyK3iJ0eEmhJ1qZbYw01jpxRW2VRN2bYXqtkWgwKPW5RImC27uQr11k3YSXzJTmR8zNoYYx%2BhuCDRsNDq4hcx18u5Bkuh98qfCQRyV%2FHu8acRTzIJlVHhI9AI3KH7aqjcap%2FxG3u5QiL1ktcBlQ2L%2FpxD9c08m9nXfJb3FWkQxGGuj78EYIXXg6BEvrwfUuIcOvpW4PB%2FrpIwUOmQQFn4uVVTyWVj5FQT%2FBpAnznY5A9JfI1r55CUx7kp95VdmuyHeKKLQnPkKqzeyiiaiEa4AKEGgB7RG%2Bg2PdAUYBr6M5AVHkPaLhdGrPX5iZmOhbgc%2FBTSiZS73VrMwi6d9nNjunD6%2BTYVQRgqfSenR9HmK4%2FrbUrvdFkaX5sO0qyBVhM4Ioi76XvUvngGvIlmD1yaE%2Fal2d5mq2oZNhaoML2au8MGOqUBHIlZ%2F5ESo53ZAoJS7Sgkx%2BiHa6h10gJw%2BO%2FXIMuybN3mF5wOoZMPKvGYHFSNHxdfljvzEOWo61Ib0YjjUw8lw%2FqvkkNuNIy3m%2F021hra2ROzGd2l5kXVN%2BkTHT17pk114hISDvwj6W25cWOeZx0zh%2FI0UzRmw2i6yJS3tG18bm2XlTkoZwzK2vbMnX13hPvsmgRw4a3JVZYho2z7VVOeaHvw9fTR&X-Amz-Signature=8ec337f97d220c31a2015043eac2ad5f482d1f3a9edd47b42e025d3f6a428953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBCKZFEP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDtPoMoRIHq%2BnsIMHVhqPgFuzCbNsvd3LHHc%2B2R2sF9bAiEAi8ECCD4Sh2Zzgosonc2uIftpKD%2FTZ7qKFMQBiz1F7MYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJ60gOUcq%2B5olyCiSrcAwhJZHFfuQORUkX8ujo9J9c2cIh36GeV8mYEvB38P5FfALEOJ11ifbA0l%2BjPGxe1MSAB5eArD2kdewJpoyiE6A4IkTz5nEYMtcEQ4l4cDc%2Ba6MCgmcEaaAy0ilAF7Uhn5nwor5l7VaFtu6uiGaexrfRyoLEb1cCqpTMWbzXHclDuxA5Kv8YUqDGGfB0q1Qc24vbAmascR8rlC92fym2UwaYVyK3iJ0eEmhJ1qZbYw01jpxRW2VRN2bYXqtkWgwKPW5RImC27uQr11k3YSXzJTmR8zNoYYx%2BhuCDRsNDq4hcx18u5Bkuh98qfCQRyV%2FHu8acRTzIJlVHhI9AI3KH7aqjcap%2FxG3u5QiL1ktcBlQ2L%2FpxD9c08m9nXfJb3FWkQxGGuj78EYIXXg6BEvrwfUuIcOvpW4PB%2FrpIwUOmQQFn4uVVTyWVj5FQT%2FBpAnznY5A9JfI1r55CUx7kp95VdmuyHeKKLQnPkKqzeyiiaiEa4AKEGgB7RG%2Bg2PdAUYBr6M5AVHkPaLhdGrPX5iZmOhbgc%2FBTSiZS73VrMwi6d9nNjunD6%2BTYVQRgqfSenR9HmK4%2FrbUrvdFkaX5sO0qyBVhM4Ioi76XvUvngGvIlmD1yaE%2Fal2d5mq2oZNhaoML2au8MGOqUBHIlZ%2F5ESo53ZAoJS7Sgkx%2BiHa6h10gJw%2BO%2FXIMuybN3mF5wOoZMPKvGYHFSNHxdfljvzEOWo61Ib0YjjUw8lw%2FqvkkNuNIy3m%2F021hra2ROzGd2l5kXVN%2BkTHT17pk114hISDvwj6W25cWOeZx0zh%2FI0UzRmw2i6yJS3tG18bm2XlTkoZwzK2vbMnX13hPvsmgRw4a3JVZYho2z7VVOeaHvw9fTR&X-Amz-Signature=9b8eb1a59a708d17c6e51ecc6636afe2f23b4af18d6daab89fa0065777aba2cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
