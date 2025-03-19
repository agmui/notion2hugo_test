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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5XSKRL7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIAgXxNmxXkkdF3C1gbXEv5oqjuDjQa6nSgsKlcMRs2bcAiEAnklUGD6zFAGbaxB2T65iNwSEl34fJEUY3Dp7mKkiWPEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJXdxjb1gALvk4MsGyrcA7ew5hoWjQp1p2lMJgQvX%2B04b9VizasZIemr4ldnZVBu47W6calm1f5fpmbNQdagcTSw0ThZxsviI3T9Lg67kRqaZkMFHEaTLTtczCQ3dCvHzbIbESRNr5KwQF3lXuqp5%2Fb8QFf03Y%2Bqcz566Uazal1%2FRq3EpWpzFpqP4i6ToCpegibvopfn2M5yC2zEqX%2FW58vz0J4FG4%2FuoVSFw1PPND0zYu4JRD1Tkive9Bg%2B2qTt76kqZW%2BOWCDzbMryQreDXOfgukVTOHgzFXV4KoFO6Kel%2FyH4gsc6tO2QMr8su1f%2BZpZinru6ipESfeIzOaCcHoNnuFWGG5566reJnHTNlVh49OqWOZNL8It%2FlUsRIUQM5JLyjMMj%2B9Y2TfqpELf8y5V6VmbxMDQSpnhZy%2B%2BVBgApi9iesJzxPwG4gJyltFouaS22N4S%2B57iYFyd13P0qBnd%2Fglbwj%2FWuQJSZYbCSbkpsDoo%2Bsg3ykdUu90c%2BgsDWCBcvgb0a1I9PINo444t59XSCPgTPiivO5W8YTOzm9M3Fi61YPxt%2BQQbSJQrFqU1NzE9HIumGRq%2Fmy3ok1i1Y9dWWS2n2fwAZznC7iJk521%2BpFhEqd3%2Bkz1OtO2awtdfTRqlXGJvGZtS%2B%2BZXHMOfi6b4GOqUBKsXBGfgQSP%2BHGDRtG6X2U58SWicrPafFPTvhlxefDGnemHSRWMELPv6bSKUTJee9YMvuzyUm9WgwcV0DybTd2Kx9MYB9xtQQn9oeHbnL7nrWDzHhnKQB6LBSoJeuwTRGF7MlZ9IOqoAWMXfrS4ZRZlPjHh3VSV1xeAVy2hM38i7%2FSWgwih57jVhauS%2BJZbozT9%2F6SIuz0ZS7hAUiVPJfXnJf85yI&X-Amz-Signature=911f9945518e863d9a551e56d378ca2e446265387c15099efec9eac95a38f547&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5XSKRL7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIAgXxNmxXkkdF3C1gbXEv5oqjuDjQa6nSgsKlcMRs2bcAiEAnklUGD6zFAGbaxB2T65iNwSEl34fJEUY3Dp7mKkiWPEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJXdxjb1gALvk4MsGyrcA7ew5hoWjQp1p2lMJgQvX%2B04b9VizasZIemr4ldnZVBu47W6calm1f5fpmbNQdagcTSw0ThZxsviI3T9Lg67kRqaZkMFHEaTLTtczCQ3dCvHzbIbESRNr5KwQF3lXuqp5%2Fb8QFf03Y%2Bqcz566Uazal1%2FRq3EpWpzFpqP4i6ToCpegibvopfn2M5yC2zEqX%2FW58vz0J4FG4%2FuoVSFw1PPND0zYu4JRD1Tkive9Bg%2B2qTt76kqZW%2BOWCDzbMryQreDXOfgukVTOHgzFXV4KoFO6Kel%2FyH4gsc6tO2QMr8su1f%2BZpZinru6ipESfeIzOaCcHoNnuFWGG5566reJnHTNlVh49OqWOZNL8It%2FlUsRIUQM5JLyjMMj%2B9Y2TfqpELf8y5V6VmbxMDQSpnhZy%2B%2BVBgApi9iesJzxPwG4gJyltFouaS22N4S%2B57iYFyd13P0qBnd%2Fglbwj%2FWuQJSZYbCSbkpsDoo%2Bsg3ykdUu90c%2BgsDWCBcvgb0a1I9PINo444t59XSCPgTPiivO5W8YTOzm9M3Fi61YPxt%2BQQbSJQrFqU1NzE9HIumGRq%2Fmy3ok1i1Y9dWWS2n2fwAZznC7iJk521%2BpFhEqd3%2Bkz1OtO2awtdfTRqlXGJvGZtS%2B%2BZXHMOfi6b4GOqUBKsXBGfgQSP%2BHGDRtG6X2U58SWicrPafFPTvhlxefDGnemHSRWMELPv6bSKUTJee9YMvuzyUm9WgwcV0DybTd2Kx9MYB9xtQQn9oeHbnL7nrWDzHhnKQB6LBSoJeuwTRGF7MlZ9IOqoAWMXfrS4ZRZlPjHh3VSV1xeAVy2hM38i7%2FSWgwih57jVhauS%2BJZbozT9%2F6SIuz0ZS7hAUiVPJfXnJf85yI&X-Amz-Signature=f446ed9e326ed875fdcc3f57b6128cd9cbb72af1d537a85647c2ed00fb6124e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5XSKRL7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIAgXxNmxXkkdF3C1gbXEv5oqjuDjQa6nSgsKlcMRs2bcAiEAnklUGD6zFAGbaxB2T65iNwSEl34fJEUY3Dp7mKkiWPEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJXdxjb1gALvk4MsGyrcA7ew5hoWjQp1p2lMJgQvX%2B04b9VizasZIemr4ldnZVBu47W6calm1f5fpmbNQdagcTSw0ThZxsviI3T9Lg67kRqaZkMFHEaTLTtczCQ3dCvHzbIbESRNr5KwQF3lXuqp5%2Fb8QFf03Y%2Bqcz566Uazal1%2FRq3EpWpzFpqP4i6ToCpegibvopfn2M5yC2zEqX%2FW58vz0J4FG4%2FuoVSFw1PPND0zYu4JRD1Tkive9Bg%2B2qTt76kqZW%2BOWCDzbMryQreDXOfgukVTOHgzFXV4KoFO6Kel%2FyH4gsc6tO2QMr8su1f%2BZpZinru6ipESfeIzOaCcHoNnuFWGG5566reJnHTNlVh49OqWOZNL8It%2FlUsRIUQM5JLyjMMj%2B9Y2TfqpELf8y5V6VmbxMDQSpnhZy%2B%2BVBgApi9iesJzxPwG4gJyltFouaS22N4S%2B57iYFyd13P0qBnd%2Fglbwj%2FWuQJSZYbCSbkpsDoo%2Bsg3ykdUu90c%2BgsDWCBcvgb0a1I9PINo444t59XSCPgTPiivO5W8YTOzm9M3Fi61YPxt%2BQQbSJQrFqU1NzE9HIumGRq%2Fmy3ok1i1Y9dWWS2n2fwAZznC7iJk521%2BpFhEqd3%2Bkz1OtO2awtdfTRqlXGJvGZtS%2B%2BZXHMOfi6b4GOqUBKsXBGfgQSP%2BHGDRtG6X2U58SWicrPafFPTvhlxefDGnemHSRWMELPv6bSKUTJee9YMvuzyUm9WgwcV0DybTd2Kx9MYB9xtQQn9oeHbnL7nrWDzHhnKQB6LBSoJeuwTRGF7MlZ9IOqoAWMXfrS4ZRZlPjHh3VSV1xeAVy2hM38i7%2FSWgwih57jVhauS%2BJZbozT9%2F6SIuz0ZS7hAUiVPJfXnJf85yI&X-Amz-Signature=2be5eca56b45b0dbd340b5edae1e9d75e917972508ac6accaa7a7f4fda7e5be6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5XSKRL7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIAgXxNmxXkkdF3C1gbXEv5oqjuDjQa6nSgsKlcMRs2bcAiEAnklUGD6zFAGbaxB2T65iNwSEl34fJEUY3Dp7mKkiWPEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJXdxjb1gALvk4MsGyrcA7ew5hoWjQp1p2lMJgQvX%2B04b9VizasZIemr4ldnZVBu47W6calm1f5fpmbNQdagcTSw0ThZxsviI3T9Lg67kRqaZkMFHEaTLTtczCQ3dCvHzbIbESRNr5KwQF3lXuqp5%2Fb8QFf03Y%2Bqcz566Uazal1%2FRq3EpWpzFpqP4i6ToCpegibvopfn2M5yC2zEqX%2FW58vz0J4FG4%2FuoVSFw1PPND0zYu4JRD1Tkive9Bg%2B2qTt76kqZW%2BOWCDzbMryQreDXOfgukVTOHgzFXV4KoFO6Kel%2FyH4gsc6tO2QMr8su1f%2BZpZinru6ipESfeIzOaCcHoNnuFWGG5566reJnHTNlVh49OqWOZNL8It%2FlUsRIUQM5JLyjMMj%2B9Y2TfqpELf8y5V6VmbxMDQSpnhZy%2B%2BVBgApi9iesJzxPwG4gJyltFouaS22N4S%2B57iYFyd13P0qBnd%2Fglbwj%2FWuQJSZYbCSbkpsDoo%2Bsg3ykdUu90c%2BgsDWCBcvgb0a1I9PINo444t59XSCPgTPiivO5W8YTOzm9M3Fi61YPxt%2BQQbSJQrFqU1NzE9HIumGRq%2Fmy3ok1i1Y9dWWS2n2fwAZznC7iJk521%2BpFhEqd3%2Bkz1OtO2awtdfTRqlXGJvGZtS%2B%2BZXHMOfi6b4GOqUBKsXBGfgQSP%2BHGDRtG6X2U58SWicrPafFPTvhlxefDGnemHSRWMELPv6bSKUTJee9YMvuzyUm9WgwcV0DybTd2Kx9MYB9xtQQn9oeHbnL7nrWDzHhnKQB6LBSoJeuwTRGF7MlZ9IOqoAWMXfrS4ZRZlPjHh3VSV1xeAVy2hM38i7%2FSWgwih57jVhauS%2BJZbozT9%2F6SIuz0ZS7hAUiVPJfXnJf85yI&X-Amz-Signature=f38c4be2a494dfb101889fb75e6872a6edd17a685c61d0e944dac0518029a0dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5XSKRL7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIAgXxNmxXkkdF3C1gbXEv5oqjuDjQa6nSgsKlcMRs2bcAiEAnklUGD6zFAGbaxB2T65iNwSEl34fJEUY3Dp7mKkiWPEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJXdxjb1gALvk4MsGyrcA7ew5hoWjQp1p2lMJgQvX%2B04b9VizasZIemr4ldnZVBu47W6calm1f5fpmbNQdagcTSw0ThZxsviI3T9Lg67kRqaZkMFHEaTLTtczCQ3dCvHzbIbESRNr5KwQF3lXuqp5%2Fb8QFf03Y%2Bqcz566Uazal1%2FRq3EpWpzFpqP4i6ToCpegibvopfn2M5yC2zEqX%2FW58vz0J4FG4%2FuoVSFw1PPND0zYu4JRD1Tkive9Bg%2B2qTt76kqZW%2BOWCDzbMryQreDXOfgukVTOHgzFXV4KoFO6Kel%2FyH4gsc6tO2QMr8su1f%2BZpZinru6ipESfeIzOaCcHoNnuFWGG5566reJnHTNlVh49OqWOZNL8It%2FlUsRIUQM5JLyjMMj%2B9Y2TfqpELf8y5V6VmbxMDQSpnhZy%2B%2BVBgApi9iesJzxPwG4gJyltFouaS22N4S%2B57iYFyd13P0qBnd%2Fglbwj%2FWuQJSZYbCSbkpsDoo%2Bsg3ykdUu90c%2BgsDWCBcvgb0a1I9PINo444t59XSCPgTPiivO5W8YTOzm9M3Fi61YPxt%2BQQbSJQrFqU1NzE9HIumGRq%2Fmy3ok1i1Y9dWWS2n2fwAZznC7iJk521%2BpFhEqd3%2Bkz1OtO2awtdfTRqlXGJvGZtS%2B%2BZXHMOfi6b4GOqUBKsXBGfgQSP%2BHGDRtG6X2U58SWicrPafFPTvhlxefDGnemHSRWMELPv6bSKUTJee9YMvuzyUm9WgwcV0DybTd2Kx9MYB9xtQQn9oeHbnL7nrWDzHhnKQB6LBSoJeuwTRGF7MlZ9IOqoAWMXfrS4ZRZlPjHh3VSV1xeAVy2hM38i7%2FSWgwih57jVhauS%2BJZbozT9%2F6SIuz0ZS7hAUiVPJfXnJf85yI&X-Amz-Signature=2653b2d4dcc26a44f14145d79dd4d00a4d6a78541f9dcb145cae50e84ddf3afb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5XSKRL7%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIAgXxNmxXkkdF3C1gbXEv5oqjuDjQa6nSgsKlcMRs2bcAiEAnklUGD6zFAGbaxB2T65iNwSEl34fJEUY3Dp7mKkiWPEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJXdxjb1gALvk4MsGyrcA7ew5hoWjQp1p2lMJgQvX%2B04b9VizasZIemr4ldnZVBu47W6calm1f5fpmbNQdagcTSw0ThZxsviI3T9Lg67kRqaZkMFHEaTLTtczCQ3dCvHzbIbESRNr5KwQF3lXuqp5%2Fb8QFf03Y%2Bqcz566Uazal1%2FRq3EpWpzFpqP4i6ToCpegibvopfn2M5yC2zEqX%2FW58vz0J4FG4%2FuoVSFw1PPND0zYu4JRD1Tkive9Bg%2B2qTt76kqZW%2BOWCDzbMryQreDXOfgukVTOHgzFXV4KoFO6Kel%2FyH4gsc6tO2QMr8su1f%2BZpZinru6ipESfeIzOaCcHoNnuFWGG5566reJnHTNlVh49OqWOZNL8It%2FlUsRIUQM5JLyjMMj%2B9Y2TfqpELf8y5V6VmbxMDQSpnhZy%2B%2BVBgApi9iesJzxPwG4gJyltFouaS22N4S%2B57iYFyd13P0qBnd%2Fglbwj%2FWuQJSZYbCSbkpsDoo%2Bsg3ykdUu90c%2BgsDWCBcvgb0a1I9PINo444t59XSCPgTPiivO5W8YTOzm9M3Fi61YPxt%2BQQbSJQrFqU1NzE9HIumGRq%2Fmy3ok1i1Y9dWWS2n2fwAZznC7iJk521%2BpFhEqd3%2Bkz1OtO2awtdfTRqlXGJvGZtS%2B%2BZXHMOfi6b4GOqUBKsXBGfgQSP%2BHGDRtG6X2U58SWicrPafFPTvhlxefDGnemHSRWMELPv6bSKUTJee9YMvuzyUm9WgwcV0DybTd2Kx9MYB9xtQQn9oeHbnL7nrWDzHhnKQB6LBSoJeuwTRGF7MlZ9IOqoAWMXfrS4ZRZlPjHh3VSV1xeAVy2hM38i7%2FSWgwih57jVhauS%2BJZbozT9%2F6SIuz0ZS7hAUiVPJfXnJf85yI&X-Amz-Signature=b232a18335f35be7a93c5bc94f1c4386ba581bab600ebe2ebe8b9b5d76a7c77f&X-Amz-SignedHeaders=host&x-id=GetObject)
