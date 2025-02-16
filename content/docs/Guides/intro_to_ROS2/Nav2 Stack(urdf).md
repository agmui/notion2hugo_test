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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CD4RWUV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH6sTvNWlw4%2BNlrHHZmroQxIFAd%2BkjP36tCaweQZ%2Ft9nAiEAp6yeKbuDsxA5uZAA9RtOUk9JCcyvcDLT4IAAcmklpMsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFOhiD056P0loQPr1ircA85xaFJyqe5rQWEIHM6cMZ5wMv8ysu81ugprx4fP%2FVd6tVjvowOsSj4RNixDa18iXgoej5a%2BDG529aVTdVbTp050ScRYzJhXUJJngFGM5idceLFQCI%2F2UipExPyMTh6C94ViE0eykkQwNy0uHSL8zWxjS7bG%2FEbgnPX6ohn3ZGM3GsK2mniqIY5fxz0Y1ZU%2FZerrEN67RVoOCCS9ob4t2wgAgs1qdmHEogZnLouaQPikzaMqOvus8cu7drBuZ9H1vWBcTrRTDJ552Irz%2BTqUPG4yyGc%2BI3mBwfplixvgrI1hCRf0vFDcc1rQY7athxEhjV8ti2%2Bj3RZKYC2MHz00DDx9k9w85mPbudh43KOCuLSVDHtbeidf01SaMCitSb21o6wxDGXIJ9uTZTIAFoGgfNyOy6fnkPR2i5MP15F9inWFsQujUeZJvW%2FfxfAADTQx92Z0Y4wCqd0ZS%2BOHNVE8Vs3stdC4jmXOL1lz32ZKYeg9DISlM3Rj5XvYjj6SxYvjhaXDDw93QkLQQb%2FxukA1Chxsmq4pke5UT9BTXoVgMcsgALtyW30dQpXsAmHFVR0SwtvxloblYp%2BQHZ7wOk5q27TrpNhz5Glqd359509%2BXYYTtdYfL0xDPwK8hmDkMOGwx70GOqUB3XmGwB1O7RHiLARtHy%2F92OkjBaPyYQ%2Fq4aYCPJB%2FLbROJzO1%2F7%2BS4Sk3wEAgb0cuZf6hCpnisN6hSyBF240MfM2HSbZ5gN2GAOsdwmtZjdQQYsK3Gy7GYu4Fh9vd5uJoBTdDeCQT3Bcb8Jcua5ttkaxGjhwfjn17sGhecGQcwk3XvrV%2F1F9Owq%2FKbglgsKMw0uNfSMLf7ytxTe6G0MU3luTVxyBW&X-Amz-Signature=6459b05b37b8e23c95db8a5815177cc1b27eeaea5eedf6d22c9e7dc0f39dd2c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CD4RWUV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH6sTvNWlw4%2BNlrHHZmroQxIFAd%2BkjP36tCaweQZ%2Ft9nAiEAp6yeKbuDsxA5uZAA9RtOUk9JCcyvcDLT4IAAcmklpMsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFOhiD056P0loQPr1ircA85xaFJyqe5rQWEIHM6cMZ5wMv8ysu81ugprx4fP%2FVd6tVjvowOsSj4RNixDa18iXgoej5a%2BDG529aVTdVbTp050ScRYzJhXUJJngFGM5idceLFQCI%2F2UipExPyMTh6C94ViE0eykkQwNy0uHSL8zWxjS7bG%2FEbgnPX6ohn3ZGM3GsK2mniqIY5fxz0Y1ZU%2FZerrEN67RVoOCCS9ob4t2wgAgs1qdmHEogZnLouaQPikzaMqOvus8cu7drBuZ9H1vWBcTrRTDJ552Irz%2BTqUPG4yyGc%2BI3mBwfplixvgrI1hCRf0vFDcc1rQY7athxEhjV8ti2%2Bj3RZKYC2MHz00DDx9k9w85mPbudh43KOCuLSVDHtbeidf01SaMCitSb21o6wxDGXIJ9uTZTIAFoGgfNyOy6fnkPR2i5MP15F9inWFsQujUeZJvW%2FfxfAADTQx92Z0Y4wCqd0ZS%2BOHNVE8Vs3stdC4jmXOL1lz32ZKYeg9DISlM3Rj5XvYjj6SxYvjhaXDDw93QkLQQb%2FxukA1Chxsmq4pke5UT9BTXoVgMcsgALtyW30dQpXsAmHFVR0SwtvxloblYp%2BQHZ7wOk5q27TrpNhz5Glqd359509%2BXYYTtdYfL0xDPwK8hmDkMOGwx70GOqUB3XmGwB1O7RHiLARtHy%2F92OkjBaPyYQ%2Fq4aYCPJB%2FLbROJzO1%2F7%2BS4Sk3wEAgb0cuZf6hCpnisN6hSyBF240MfM2HSbZ5gN2GAOsdwmtZjdQQYsK3Gy7GYu4Fh9vd5uJoBTdDeCQT3Bcb8Jcua5ttkaxGjhwfjn17sGhecGQcwk3XvrV%2F1F9Owq%2FKbglgsKMw0uNfSMLf7ytxTe6G0MU3luTVxyBW&X-Amz-Signature=1ab913e679923c05a513f3782442b37449f05d90aff9a5ff9f7b961ab95106d8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CD4RWUV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH6sTvNWlw4%2BNlrHHZmroQxIFAd%2BkjP36tCaweQZ%2Ft9nAiEAp6yeKbuDsxA5uZAA9RtOUk9JCcyvcDLT4IAAcmklpMsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFOhiD056P0loQPr1ircA85xaFJyqe5rQWEIHM6cMZ5wMv8ysu81ugprx4fP%2FVd6tVjvowOsSj4RNixDa18iXgoej5a%2BDG529aVTdVbTp050ScRYzJhXUJJngFGM5idceLFQCI%2F2UipExPyMTh6C94ViE0eykkQwNy0uHSL8zWxjS7bG%2FEbgnPX6ohn3ZGM3GsK2mniqIY5fxz0Y1ZU%2FZerrEN67RVoOCCS9ob4t2wgAgs1qdmHEogZnLouaQPikzaMqOvus8cu7drBuZ9H1vWBcTrRTDJ552Irz%2BTqUPG4yyGc%2BI3mBwfplixvgrI1hCRf0vFDcc1rQY7athxEhjV8ti2%2Bj3RZKYC2MHz00DDx9k9w85mPbudh43KOCuLSVDHtbeidf01SaMCitSb21o6wxDGXIJ9uTZTIAFoGgfNyOy6fnkPR2i5MP15F9inWFsQujUeZJvW%2FfxfAADTQx92Z0Y4wCqd0ZS%2BOHNVE8Vs3stdC4jmXOL1lz32ZKYeg9DISlM3Rj5XvYjj6SxYvjhaXDDw93QkLQQb%2FxukA1Chxsmq4pke5UT9BTXoVgMcsgALtyW30dQpXsAmHFVR0SwtvxloblYp%2BQHZ7wOk5q27TrpNhz5Glqd359509%2BXYYTtdYfL0xDPwK8hmDkMOGwx70GOqUB3XmGwB1O7RHiLARtHy%2F92OkjBaPyYQ%2Fq4aYCPJB%2FLbROJzO1%2F7%2BS4Sk3wEAgb0cuZf6hCpnisN6hSyBF240MfM2HSbZ5gN2GAOsdwmtZjdQQYsK3Gy7GYu4Fh9vd5uJoBTdDeCQT3Bcb8Jcua5ttkaxGjhwfjn17sGhecGQcwk3XvrV%2F1F9Owq%2FKbglgsKMw0uNfSMLf7ytxTe6G0MU3luTVxyBW&X-Amz-Signature=e27a2bcb9944a895706accc6c890d04ca871f905120031749bacc910a0ddf425&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CD4RWUV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH6sTvNWlw4%2BNlrHHZmroQxIFAd%2BkjP36tCaweQZ%2Ft9nAiEAp6yeKbuDsxA5uZAA9RtOUk9JCcyvcDLT4IAAcmklpMsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFOhiD056P0loQPr1ircA85xaFJyqe5rQWEIHM6cMZ5wMv8ysu81ugprx4fP%2FVd6tVjvowOsSj4RNixDa18iXgoej5a%2BDG529aVTdVbTp050ScRYzJhXUJJngFGM5idceLFQCI%2F2UipExPyMTh6C94ViE0eykkQwNy0uHSL8zWxjS7bG%2FEbgnPX6ohn3ZGM3GsK2mniqIY5fxz0Y1ZU%2FZerrEN67RVoOCCS9ob4t2wgAgs1qdmHEogZnLouaQPikzaMqOvus8cu7drBuZ9H1vWBcTrRTDJ552Irz%2BTqUPG4yyGc%2BI3mBwfplixvgrI1hCRf0vFDcc1rQY7athxEhjV8ti2%2Bj3RZKYC2MHz00DDx9k9w85mPbudh43KOCuLSVDHtbeidf01SaMCitSb21o6wxDGXIJ9uTZTIAFoGgfNyOy6fnkPR2i5MP15F9inWFsQujUeZJvW%2FfxfAADTQx92Z0Y4wCqd0ZS%2BOHNVE8Vs3stdC4jmXOL1lz32ZKYeg9DISlM3Rj5XvYjj6SxYvjhaXDDw93QkLQQb%2FxukA1Chxsmq4pke5UT9BTXoVgMcsgALtyW30dQpXsAmHFVR0SwtvxloblYp%2BQHZ7wOk5q27TrpNhz5Glqd359509%2BXYYTtdYfL0xDPwK8hmDkMOGwx70GOqUB3XmGwB1O7RHiLARtHy%2F92OkjBaPyYQ%2Fq4aYCPJB%2FLbROJzO1%2F7%2BS4Sk3wEAgb0cuZf6hCpnisN6hSyBF240MfM2HSbZ5gN2GAOsdwmtZjdQQYsK3Gy7GYu4Fh9vd5uJoBTdDeCQT3Bcb8Jcua5ttkaxGjhwfjn17sGhecGQcwk3XvrV%2F1F9Owq%2FKbglgsKMw0uNfSMLf7ytxTe6G0MU3luTVxyBW&X-Amz-Signature=30c5b2358ce31c4d1dc68a74c5e8395e73a8f11f348085c5b70b35fa7183b160&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CD4RWUV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH6sTvNWlw4%2BNlrHHZmroQxIFAd%2BkjP36tCaweQZ%2Ft9nAiEAp6yeKbuDsxA5uZAA9RtOUk9JCcyvcDLT4IAAcmklpMsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFOhiD056P0loQPr1ircA85xaFJyqe5rQWEIHM6cMZ5wMv8ysu81ugprx4fP%2FVd6tVjvowOsSj4RNixDa18iXgoej5a%2BDG529aVTdVbTp050ScRYzJhXUJJngFGM5idceLFQCI%2F2UipExPyMTh6C94ViE0eykkQwNy0uHSL8zWxjS7bG%2FEbgnPX6ohn3ZGM3GsK2mniqIY5fxz0Y1ZU%2FZerrEN67RVoOCCS9ob4t2wgAgs1qdmHEogZnLouaQPikzaMqOvus8cu7drBuZ9H1vWBcTrRTDJ552Irz%2BTqUPG4yyGc%2BI3mBwfplixvgrI1hCRf0vFDcc1rQY7athxEhjV8ti2%2Bj3RZKYC2MHz00DDx9k9w85mPbudh43KOCuLSVDHtbeidf01SaMCitSb21o6wxDGXIJ9uTZTIAFoGgfNyOy6fnkPR2i5MP15F9inWFsQujUeZJvW%2FfxfAADTQx92Z0Y4wCqd0ZS%2BOHNVE8Vs3stdC4jmXOL1lz32ZKYeg9DISlM3Rj5XvYjj6SxYvjhaXDDw93QkLQQb%2FxukA1Chxsmq4pke5UT9BTXoVgMcsgALtyW30dQpXsAmHFVR0SwtvxloblYp%2BQHZ7wOk5q27TrpNhz5Glqd359509%2BXYYTtdYfL0xDPwK8hmDkMOGwx70GOqUB3XmGwB1O7RHiLARtHy%2F92OkjBaPyYQ%2Fq4aYCPJB%2FLbROJzO1%2F7%2BS4Sk3wEAgb0cuZf6hCpnisN6hSyBF240MfM2HSbZ5gN2GAOsdwmtZjdQQYsK3Gy7GYu4Fh9vd5uJoBTdDeCQT3Bcb8Jcua5ttkaxGjhwfjn17sGhecGQcwk3XvrV%2F1F9Owq%2FKbglgsKMw0uNfSMLf7ytxTe6G0MU3luTVxyBW&X-Amz-Signature=c2ba83d97f064964aff2e67882f10f0afc944bdb7a59001d80c6ac7868c6179f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CD4RWUV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T140214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIH6sTvNWlw4%2BNlrHHZmroQxIFAd%2BkjP36tCaweQZ%2Ft9nAiEAp6yeKbuDsxA5uZAA9RtOUk9JCcyvcDLT4IAAcmklpMsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFOhiD056P0loQPr1ircA85xaFJyqe5rQWEIHM6cMZ5wMv8ysu81ugprx4fP%2FVd6tVjvowOsSj4RNixDa18iXgoej5a%2BDG529aVTdVbTp050ScRYzJhXUJJngFGM5idceLFQCI%2F2UipExPyMTh6C94ViE0eykkQwNy0uHSL8zWxjS7bG%2FEbgnPX6ohn3ZGM3GsK2mniqIY5fxz0Y1ZU%2FZerrEN67RVoOCCS9ob4t2wgAgs1qdmHEogZnLouaQPikzaMqOvus8cu7drBuZ9H1vWBcTrRTDJ552Irz%2BTqUPG4yyGc%2BI3mBwfplixvgrI1hCRf0vFDcc1rQY7athxEhjV8ti2%2Bj3RZKYC2MHz00DDx9k9w85mPbudh43KOCuLSVDHtbeidf01SaMCitSb21o6wxDGXIJ9uTZTIAFoGgfNyOy6fnkPR2i5MP15F9inWFsQujUeZJvW%2FfxfAADTQx92Z0Y4wCqd0ZS%2BOHNVE8Vs3stdC4jmXOL1lz32ZKYeg9DISlM3Rj5XvYjj6SxYvjhaXDDw93QkLQQb%2FxukA1Chxsmq4pke5UT9BTXoVgMcsgALtyW30dQpXsAmHFVR0SwtvxloblYp%2BQHZ7wOk5q27TrpNhz5Glqd359509%2BXYYTtdYfL0xDPwK8hmDkMOGwx70GOqUB3XmGwB1O7RHiLARtHy%2F92OkjBaPyYQ%2Fq4aYCPJB%2FLbROJzO1%2F7%2BS4Sk3wEAgb0cuZf6hCpnisN6hSyBF240MfM2HSbZ5gN2GAOsdwmtZjdQQYsK3Gy7GYu4Fh9vd5uJoBTdDeCQT3Bcb8Jcua5ttkaxGjhwfjn17sGhecGQcwk3XvrV%2F1F9Owq%2FKbglgsKMw0uNfSMLf7ytxTe6G0MU3luTVxyBW&X-Amz-Signature=2bc73c0c39acddddec509ea3cd2d0c0f05853d646d75810e7246f9a51bc55abd&X-Amz-SignedHeaders=host&x-id=GetObject)
