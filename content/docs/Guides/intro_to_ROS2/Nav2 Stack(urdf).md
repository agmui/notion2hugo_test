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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RTUTEQM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQChtHAIf3nr0VpQKCc7Ihbs7%2FMSvs1ynWscd1VRMRAjvQIhALVJ8DdgwzLLe5UT7K9pe3polnCl6ddCJeFFMAegjXlQKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2j70Iudry%2BXdzArkq3ANKZHK3g2U6uHfXSXyIdgVi0i9UqDEhiAenb7R%2Fs00TK9jznS7nIuBbNWMOyJFl7gZPQnNuCgZeE0h%2FiEueN62JszVGPAWXuEsiO73mF%2FaNqHSnTeavI7lOEUE9c0bTqSjtXYm0%2BXiUZO3Kp%2FH0BfXmtC%2F%2FFcIFIF7L79HyBk3ry9%2FqtaGL2a60cZ4VmyW2rBxLiJAmCHjrbIdeAYAeXStjn7LyJW2eBKIxtVVEQiI4i2vTkpOgfKazSIrTY9lcRylMqlEcG%2FJXiJ1qhBSr5yNMyvT1Belyl%2FVOUJt29SJMj4YnPhN0juZG54zOfZ0Np1UmR5FjKjOik0quqooKHEMkkhGTpAu0a1s97Fi4R2ieoEnqd4DVo5tq0zJcmLAE5YZPeWWQl6Qe29yjyOjpXLUS4F7nnKexPVFnm%2F2JYbugU3BBQc2FqMbQRUsm9IGre99q%2FPbzZxMN5bHUz9HO%2BnI61sokPvLW5QRbxKZNzrJq5Q62UtEFJGAo6GooeJIAuU9%2F1wBQwsP88SjYBZTkgSv8MQ6LFtucB7z7zEXac5u9pJXfKvNCmw9vg70fGlDvykfMomitV7naQFqO4uTTEsU3%2BALLN0IIM0unJMc1bJvidLsmU2VACbbGXndjYjCex42%2BBjqkAXYLfOcVXtSsNQyYRpS9c6Y0b887QQsbtf8BxwrRmJl82LEtkwZ0Re8dsaMib%2BQcT4cWAM%2Fw1BeduKBNeKTFbv0%2FwTPMeBvLlb6MKakKa4%2FhVaKuA7c%2FGRm0Wvf6we929Ux%2FWrJuIY6NcLNQXm5KyN9V%2Fsc%2FZqbDPAKtORsF4IPkgBt3TRUnYTo4q2KlwZTu7mxazbvOs4avWNqmCYJ8Z1G0CzCP&X-Amz-Signature=91dd6185839e55c38af6e8c3ed3fb109eccf61eba44d2ed689f11cfdf8239011&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RTUTEQM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQChtHAIf3nr0VpQKCc7Ihbs7%2FMSvs1ynWscd1VRMRAjvQIhALVJ8DdgwzLLe5UT7K9pe3polnCl6ddCJeFFMAegjXlQKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2j70Iudry%2BXdzArkq3ANKZHK3g2U6uHfXSXyIdgVi0i9UqDEhiAenb7R%2Fs00TK9jznS7nIuBbNWMOyJFl7gZPQnNuCgZeE0h%2FiEueN62JszVGPAWXuEsiO73mF%2FaNqHSnTeavI7lOEUE9c0bTqSjtXYm0%2BXiUZO3Kp%2FH0BfXmtC%2F%2FFcIFIF7L79HyBk3ry9%2FqtaGL2a60cZ4VmyW2rBxLiJAmCHjrbIdeAYAeXStjn7LyJW2eBKIxtVVEQiI4i2vTkpOgfKazSIrTY9lcRylMqlEcG%2FJXiJ1qhBSr5yNMyvT1Belyl%2FVOUJt29SJMj4YnPhN0juZG54zOfZ0Np1UmR5FjKjOik0quqooKHEMkkhGTpAu0a1s97Fi4R2ieoEnqd4DVo5tq0zJcmLAE5YZPeWWQl6Qe29yjyOjpXLUS4F7nnKexPVFnm%2F2JYbugU3BBQc2FqMbQRUsm9IGre99q%2FPbzZxMN5bHUz9HO%2BnI61sokPvLW5QRbxKZNzrJq5Q62UtEFJGAo6GooeJIAuU9%2F1wBQwsP88SjYBZTkgSv8MQ6LFtucB7z7zEXac5u9pJXfKvNCmw9vg70fGlDvykfMomitV7naQFqO4uTTEsU3%2BALLN0IIM0unJMc1bJvidLsmU2VACbbGXndjYjCex42%2BBjqkAXYLfOcVXtSsNQyYRpS9c6Y0b887QQsbtf8BxwrRmJl82LEtkwZ0Re8dsaMib%2BQcT4cWAM%2Fw1BeduKBNeKTFbv0%2FwTPMeBvLlb6MKakKa4%2FhVaKuA7c%2FGRm0Wvf6we929Ux%2FWrJuIY6NcLNQXm5KyN9V%2Fsc%2FZqbDPAKtORsF4IPkgBt3TRUnYTo4q2KlwZTu7mxazbvOs4avWNqmCYJ8Z1G0CzCP&X-Amz-Signature=96da3a6e9b145b384facdb87df7a3b309cbff8a22f693220af131eabbbefa5da&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RTUTEQM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQChtHAIf3nr0VpQKCc7Ihbs7%2FMSvs1ynWscd1VRMRAjvQIhALVJ8DdgwzLLe5UT7K9pe3polnCl6ddCJeFFMAegjXlQKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2j70Iudry%2BXdzArkq3ANKZHK3g2U6uHfXSXyIdgVi0i9UqDEhiAenb7R%2Fs00TK9jznS7nIuBbNWMOyJFl7gZPQnNuCgZeE0h%2FiEueN62JszVGPAWXuEsiO73mF%2FaNqHSnTeavI7lOEUE9c0bTqSjtXYm0%2BXiUZO3Kp%2FH0BfXmtC%2F%2FFcIFIF7L79HyBk3ry9%2FqtaGL2a60cZ4VmyW2rBxLiJAmCHjrbIdeAYAeXStjn7LyJW2eBKIxtVVEQiI4i2vTkpOgfKazSIrTY9lcRylMqlEcG%2FJXiJ1qhBSr5yNMyvT1Belyl%2FVOUJt29SJMj4YnPhN0juZG54zOfZ0Np1UmR5FjKjOik0quqooKHEMkkhGTpAu0a1s97Fi4R2ieoEnqd4DVo5tq0zJcmLAE5YZPeWWQl6Qe29yjyOjpXLUS4F7nnKexPVFnm%2F2JYbugU3BBQc2FqMbQRUsm9IGre99q%2FPbzZxMN5bHUz9HO%2BnI61sokPvLW5QRbxKZNzrJq5Q62UtEFJGAo6GooeJIAuU9%2F1wBQwsP88SjYBZTkgSv8MQ6LFtucB7z7zEXac5u9pJXfKvNCmw9vg70fGlDvykfMomitV7naQFqO4uTTEsU3%2BALLN0IIM0unJMc1bJvidLsmU2VACbbGXndjYjCex42%2BBjqkAXYLfOcVXtSsNQyYRpS9c6Y0b887QQsbtf8BxwrRmJl82LEtkwZ0Re8dsaMib%2BQcT4cWAM%2Fw1BeduKBNeKTFbv0%2FwTPMeBvLlb6MKakKa4%2FhVaKuA7c%2FGRm0Wvf6we929Ux%2FWrJuIY6NcLNQXm5KyN9V%2Fsc%2FZqbDPAKtORsF4IPkgBt3TRUnYTo4q2KlwZTu7mxazbvOs4avWNqmCYJ8Z1G0CzCP&X-Amz-Signature=e184b1e39c2e5f25df05f0e01e6077a0ccd6f3bed431ef86b0ecf6eb1ab33460&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RTUTEQM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQChtHAIf3nr0VpQKCc7Ihbs7%2FMSvs1ynWscd1VRMRAjvQIhALVJ8DdgwzLLe5UT7K9pe3polnCl6ddCJeFFMAegjXlQKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2j70Iudry%2BXdzArkq3ANKZHK3g2U6uHfXSXyIdgVi0i9UqDEhiAenb7R%2Fs00TK9jznS7nIuBbNWMOyJFl7gZPQnNuCgZeE0h%2FiEueN62JszVGPAWXuEsiO73mF%2FaNqHSnTeavI7lOEUE9c0bTqSjtXYm0%2BXiUZO3Kp%2FH0BfXmtC%2F%2FFcIFIF7L79HyBk3ry9%2FqtaGL2a60cZ4VmyW2rBxLiJAmCHjrbIdeAYAeXStjn7LyJW2eBKIxtVVEQiI4i2vTkpOgfKazSIrTY9lcRylMqlEcG%2FJXiJ1qhBSr5yNMyvT1Belyl%2FVOUJt29SJMj4YnPhN0juZG54zOfZ0Np1UmR5FjKjOik0quqooKHEMkkhGTpAu0a1s97Fi4R2ieoEnqd4DVo5tq0zJcmLAE5YZPeWWQl6Qe29yjyOjpXLUS4F7nnKexPVFnm%2F2JYbugU3BBQc2FqMbQRUsm9IGre99q%2FPbzZxMN5bHUz9HO%2BnI61sokPvLW5QRbxKZNzrJq5Q62UtEFJGAo6GooeJIAuU9%2F1wBQwsP88SjYBZTkgSv8MQ6LFtucB7z7zEXac5u9pJXfKvNCmw9vg70fGlDvykfMomitV7naQFqO4uTTEsU3%2BALLN0IIM0unJMc1bJvidLsmU2VACbbGXndjYjCex42%2BBjqkAXYLfOcVXtSsNQyYRpS9c6Y0b887QQsbtf8BxwrRmJl82LEtkwZ0Re8dsaMib%2BQcT4cWAM%2Fw1BeduKBNeKTFbv0%2FwTPMeBvLlb6MKakKa4%2FhVaKuA7c%2FGRm0Wvf6we929Ux%2FWrJuIY6NcLNQXm5KyN9V%2Fsc%2FZqbDPAKtORsF4IPkgBt3TRUnYTo4q2KlwZTu7mxazbvOs4avWNqmCYJ8Z1G0CzCP&X-Amz-Signature=0e50882c45c5454433b1078b06ad814d3f38ba51b54cae27fc95b940e65e7f87&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RTUTEQM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQChtHAIf3nr0VpQKCc7Ihbs7%2FMSvs1ynWscd1VRMRAjvQIhALVJ8DdgwzLLe5UT7K9pe3polnCl6ddCJeFFMAegjXlQKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2j70Iudry%2BXdzArkq3ANKZHK3g2U6uHfXSXyIdgVi0i9UqDEhiAenb7R%2Fs00TK9jznS7nIuBbNWMOyJFl7gZPQnNuCgZeE0h%2FiEueN62JszVGPAWXuEsiO73mF%2FaNqHSnTeavI7lOEUE9c0bTqSjtXYm0%2BXiUZO3Kp%2FH0BfXmtC%2F%2FFcIFIF7L79HyBk3ry9%2FqtaGL2a60cZ4VmyW2rBxLiJAmCHjrbIdeAYAeXStjn7LyJW2eBKIxtVVEQiI4i2vTkpOgfKazSIrTY9lcRylMqlEcG%2FJXiJ1qhBSr5yNMyvT1Belyl%2FVOUJt29SJMj4YnPhN0juZG54zOfZ0Np1UmR5FjKjOik0quqooKHEMkkhGTpAu0a1s97Fi4R2ieoEnqd4DVo5tq0zJcmLAE5YZPeWWQl6Qe29yjyOjpXLUS4F7nnKexPVFnm%2F2JYbugU3BBQc2FqMbQRUsm9IGre99q%2FPbzZxMN5bHUz9HO%2BnI61sokPvLW5QRbxKZNzrJq5Q62UtEFJGAo6GooeJIAuU9%2F1wBQwsP88SjYBZTkgSv8MQ6LFtucB7z7zEXac5u9pJXfKvNCmw9vg70fGlDvykfMomitV7naQFqO4uTTEsU3%2BALLN0IIM0unJMc1bJvidLsmU2VACbbGXndjYjCex42%2BBjqkAXYLfOcVXtSsNQyYRpS9c6Y0b887QQsbtf8BxwrRmJl82LEtkwZ0Re8dsaMib%2BQcT4cWAM%2Fw1BeduKBNeKTFbv0%2FwTPMeBvLlb6MKakKa4%2FhVaKuA7c%2FGRm0Wvf6we929Ux%2FWrJuIY6NcLNQXm5KyN9V%2Fsc%2FZqbDPAKtORsF4IPkgBt3TRUnYTo4q2KlwZTu7mxazbvOs4avWNqmCYJ8Z1G0CzCP&X-Amz-Signature=110f009057bcb4b48dea19cab38b273eeb28fd5111ebde91567d6b3c201049f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RTUTEQM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQChtHAIf3nr0VpQKCc7Ihbs7%2FMSvs1ynWscd1VRMRAjvQIhALVJ8DdgwzLLe5UT7K9pe3polnCl6ddCJeFFMAegjXlQKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2j70Iudry%2BXdzArkq3ANKZHK3g2U6uHfXSXyIdgVi0i9UqDEhiAenb7R%2Fs00TK9jznS7nIuBbNWMOyJFl7gZPQnNuCgZeE0h%2FiEueN62JszVGPAWXuEsiO73mF%2FaNqHSnTeavI7lOEUE9c0bTqSjtXYm0%2BXiUZO3Kp%2FH0BfXmtC%2F%2FFcIFIF7L79HyBk3ry9%2FqtaGL2a60cZ4VmyW2rBxLiJAmCHjrbIdeAYAeXStjn7LyJW2eBKIxtVVEQiI4i2vTkpOgfKazSIrTY9lcRylMqlEcG%2FJXiJ1qhBSr5yNMyvT1Belyl%2FVOUJt29SJMj4YnPhN0juZG54zOfZ0Np1UmR5FjKjOik0quqooKHEMkkhGTpAu0a1s97Fi4R2ieoEnqd4DVo5tq0zJcmLAE5YZPeWWQl6Qe29yjyOjpXLUS4F7nnKexPVFnm%2F2JYbugU3BBQc2FqMbQRUsm9IGre99q%2FPbzZxMN5bHUz9HO%2BnI61sokPvLW5QRbxKZNzrJq5Q62UtEFJGAo6GooeJIAuU9%2F1wBQwsP88SjYBZTkgSv8MQ6LFtucB7z7zEXac5u9pJXfKvNCmw9vg70fGlDvykfMomitV7naQFqO4uTTEsU3%2BALLN0IIM0unJMc1bJvidLsmU2VACbbGXndjYjCex42%2BBjqkAXYLfOcVXtSsNQyYRpS9c6Y0b887QQsbtf8BxwrRmJl82LEtkwZ0Re8dsaMib%2BQcT4cWAM%2Fw1BeduKBNeKTFbv0%2FwTPMeBvLlb6MKakKa4%2FhVaKuA7c%2FGRm0Wvf6we929Ux%2FWrJuIY6NcLNQXm5KyN9V%2Fsc%2FZqbDPAKtORsF4IPkgBt3TRUnYTo4q2KlwZTu7mxazbvOs4avWNqmCYJ8Z1G0CzCP&X-Amz-Signature=eeb4c7814839866c67d1e412546309544175517324a6663d5122411811b69949&X-Amz-SignedHeaders=host&x-id=GetObject)
