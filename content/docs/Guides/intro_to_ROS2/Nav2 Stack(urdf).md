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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUFXEZV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ZZKZ%2FYpHxpGHP%2F9%2F1dthg2lDbJuOlNHFYnJRYB8iLAIhAJwHly%2FxLl0UJHKII%2FTuNdcL4jzTzSlaxTIh49lLxJgqKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BBOxYXg88NPnPWboq3AMG6heiMFrmWpS00mhgz100TDNdqXN7IfQ0%2FpeRrPBJITnDDNsG3lZRDJtVJbmYPa0mznxc9%2BKiKpuyQEpeEQ2LgkqIR0LpjrQco8t0kKPlp336H2RqYV99E04GIKil%2Fzz%2BWxeU3r7zLqHzjf9e3I2PxTGsbKwS72wwECrR00awVoEbzka2Vel6veKR49OIaXQ6adWVfqSYzldByv7f6cvtjZX62Or3o9UWfEj%2BSNa8DQl89imeDXfMJOhag1nrtBer%2BGIoORx%2FloflhMMmB7P30VMqta2grRNvm8On%2Bc6hSo4U2ElcahYRTR4C638wjsPty54oyfS1LIv6lhMhroMMSJKOkcM59lptRvs5wIc8hN23UFKIVlKSOrY9IbZQkisu2TT%2BrdzR3ML0Z5Cv6g6sV5YZF8OJDQWb6gQR1ud13Kgg3f2GEmJSoN8l19eDDizqETyqce5Neyhviw4OoTqtqa4J1I6MbV8JItvFe39I55yYxQT80P152MVsyn%2FBLsHHR%2BfH%2BIVisa6gy8L3sJJzK1OdTPr2jUXEuf09Dy90UsQWfRfeLmVYfmnXxgm9RlKpT4cM1RgDN4dQnn0vVCxLO1KzBRnAD6MCd%2BNSQ3beecNsbBoVFTrFITo3fjC3jtPCBjqkATZ%2FQFOKty5vlVFsyequL%2FS2FLn7Vty8eiQYFeeI0m6gzhpvW%2FN5F3gFbLobnQ5IVvaKA%2Fh91ti5MV9LqbDl%2F2Kd77o%2BzF23gGzwCEyXP7TNV%2BvVUq%2BF10qWq%2FPkdr22QdbzDsxBMPhsWJcrtoARZOdnXfjZXsO%2FuJuTL16Xz1N9JuspgYkjNOFik2hR1RmNprqy21%2FIwER7nGIth2jvE%2BpQ94LX&X-Amz-Signature=f6e850f5fb2b811a45b811cc7b8a46e5862fa77436fb7702d985252418e2a41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUFXEZV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ZZKZ%2FYpHxpGHP%2F9%2F1dthg2lDbJuOlNHFYnJRYB8iLAIhAJwHly%2FxLl0UJHKII%2FTuNdcL4jzTzSlaxTIh49lLxJgqKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BBOxYXg88NPnPWboq3AMG6heiMFrmWpS00mhgz100TDNdqXN7IfQ0%2FpeRrPBJITnDDNsG3lZRDJtVJbmYPa0mznxc9%2BKiKpuyQEpeEQ2LgkqIR0LpjrQco8t0kKPlp336H2RqYV99E04GIKil%2Fzz%2BWxeU3r7zLqHzjf9e3I2PxTGsbKwS72wwECrR00awVoEbzka2Vel6veKR49OIaXQ6adWVfqSYzldByv7f6cvtjZX62Or3o9UWfEj%2BSNa8DQl89imeDXfMJOhag1nrtBer%2BGIoORx%2FloflhMMmB7P30VMqta2grRNvm8On%2Bc6hSo4U2ElcahYRTR4C638wjsPty54oyfS1LIv6lhMhroMMSJKOkcM59lptRvs5wIc8hN23UFKIVlKSOrY9IbZQkisu2TT%2BrdzR3ML0Z5Cv6g6sV5YZF8OJDQWb6gQR1ud13Kgg3f2GEmJSoN8l19eDDizqETyqce5Neyhviw4OoTqtqa4J1I6MbV8JItvFe39I55yYxQT80P152MVsyn%2FBLsHHR%2BfH%2BIVisa6gy8L3sJJzK1OdTPr2jUXEuf09Dy90UsQWfRfeLmVYfmnXxgm9RlKpT4cM1RgDN4dQnn0vVCxLO1KzBRnAD6MCd%2BNSQ3beecNsbBoVFTrFITo3fjC3jtPCBjqkATZ%2FQFOKty5vlVFsyequL%2FS2FLn7Vty8eiQYFeeI0m6gzhpvW%2FN5F3gFbLobnQ5IVvaKA%2Fh91ti5MV9LqbDl%2F2Kd77o%2BzF23gGzwCEyXP7TNV%2BvVUq%2BF10qWq%2FPkdr22QdbzDsxBMPhsWJcrtoARZOdnXfjZXsO%2FuJuTL16Xz1N9JuspgYkjNOFik2hR1RmNprqy21%2FIwER7nGIth2jvE%2BpQ94LX&X-Amz-Signature=8a3234376f83097dcbc5a1d492a517e62bf0aa6d2c40d209cf8ffbc1e86e73cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUFXEZV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ZZKZ%2FYpHxpGHP%2F9%2F1dthg2lDbJuOlNHFYnJRYB8iLAIhAJwHly%2FxLl0UJHKII%2FTuNdcL4jzTzSlaxTIh49lLxJgqKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BBOxYXg88NPnPWboq3AMG6heiMFrmWpS00mhgz100TDNdqXN7IfQ0%2FpeRrPBJITnDDNsG3lZRDJtVJbmYPa0mznxc9%2BKiKpuyQEpeEQ2LgkqIR0LpjrQco8t0kKPlp336H2RqYV99E04GIKil%2Fzz%2BWxeU3r7zLqHzjf9e3I2PxTGsbKwS72wwECrR00awVoEbzka2Vel6veKR49OIaXQ6adWVfqSYzldByv7f6cvtjZX62Or3o9UWfEj%2BSNa8DQl89imeDXfMJOhag1nrtBer%2BGIoORx%2FloflhMMmB7P30VMqta2grRNvm8On%2Bc6hSo4U2ElcahYRTR4C638wjsPty54oyfS1LIv6lhMhroMMSJKOkcM59lptRvs5wIc8hN23UFKIVlKSOrY9IbZQkisu2TT%2BrdzR3ML0Z5Cv6g6sV5YZF8OJDQWb6gQR1ud13Kgg3f2GEmJSoN8l19eDDizqETyqce5Neyhviw4OoTqtqa4J1I6MbV8JItvFe39I55yYxQT80P152MVsyn%2FBLsHHR%2BfH%2BIVisa6gy8L3sJJzK1OdTPr2jUXEuf09Dy90UsQWfRfeLmVYfmnXxgm9RlKpT4cM1RgDN4dQnn0vVCxLO1KzBRnAD6MCd%2BNSQ3beecNsbBoVFTrFITo3fjC3jtPCBjqkATZ%2FQFOKty5vlVFsyequL%2FS2FLn7Vty8eiQYFeeI0m6gzhpvW%2FN5F3gFbLobnQ5IVvaKA%2Fh91ti5MV9LqbDl%2F2Kd77o%2BzF23gGzwCEyXP7TNV%2BvVUq%2BF10qWq%2FPkdr22QdbzDsxBMPhsWJcrtoARZOdnXfjZXsO%2FuJuTL16Xz1N9JuspgYkjNOFik2hR1RmNprqy21%2FIwER7nGIth2jvE%2BpQ94LX&X-Amz-Signature=708e2b77cb322ead7df19821db80a33e24c667b45c075baaed22aaf16d70af34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUFXEZV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ZZKZ%2FYpHxpGHP%2F9%2F1dthg2lDbJuOlNHFYnJRYB8iLAIhAJwHly%2FxLl0UJHKII%2FTuNdcL4jzTzSlaxTIh49lLxJgqKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BBOxYXg88NPnPWboq3AMG6heiMFrmWpS00mhgz100TDNdqXN7IfQ0%2FpeRrPBJITnDDNsG3lZRDJtVJbmYPa0mznxc9%2BKiKpuyQEpeEQ2LgkqIR0LpjrQco8t0kKPlp336H2RqYV99E04GIKil%2Fzz%2BWxeU3r7zLqHzjf9e3I2PxTGsbKwS72wwECrR00awVoEbzka2Vel6veKR49OIaXQ6adWVfqSYzldByv7f6cvtjZX62Or3o9UWfEj%2BSNa8DQl89imeDXfMJOhag1nrtBer%2BGIoORx%2FloflhMMmB7P30VMqta2grRNvm8On%2Bc6hSo4U2ElcahYRTR4C638wjsPty54oyfS1LIv6lhMhroMMSJKOkcM59lptRvs5wIc8hN23UFKIVlKSOrY9IbZQkisu2TT%2BrdzR3ML0Z5Cv6g6sV5YZF8OJDQWb6gQR1ud13Kgg3f2GEmJSoN8l19eDDizqETyqce5Neyhviw4OoTqtqa4J1I6MbV8JItvFe39I55yYxQT80P152MVsyn%2FBLsHHR%2BfH%2BIVisa6gy8L3sJJzK1OdTPr2jUXEuf09Dy90UsQWfRfeLmVYfmnXxgm9RlKpT4cM1RgDN4dQnn0vVCxLO1KzBRnAD6MCd%2BNSQ3beecNsbBoVFTrFITo3fjC3jtPCBjqkATZ%2FQFOKty5vlVFsyequL%2FS2FLn7Vty8eiQYFeeI0m6gzhpvW%2FN5F3gFbLobnQ5IVvaKA%2Fh91ti5MV9LqbDl%2F2Kd77o%2BzF23gGzwCEyXP7TNV%2BvVUq%2BF10qWq%2FPkdr22QdbzDsxBMPhsWJcrtoARZOdnXfjZXsO%2FuJuTL16Xz1N9JuspgYkjNOFik2hR1RmNprqy21%2FIwER7nGIth2jvE%2BpQ94LX&X-Amz-Signature=b56b1f76e93052b2f13ea0c1925514dc1261c11116c76c3fe81d6e00e68dbf44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUFXEZV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ZZKZ%2FYpHxpGHP%2F9%2F1dthg2lDbJuOlNHFYnJRYB8iLAIhAJwHly%2FxLl0UJHKII%2FTuNdcL4jzTzSlaxTIh49lLxJgqKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BBOxYXg88NPnPWboq3AMG6heiMFrmWpS00mhgz100TDNdqXN7IfQ0%2FpeRrPBJITnDDNsG3lZRDJtVJbmYPa0mznxc9%2BKiKpuyQEpeEQ2LgkqIR0LpjrQco8t0kKPlp336H2RqYV99E04GIKil%2Fzz%2BWxeU3r7zLqHzjf9e3I2PxTGsbKwS72wwECrR00awVoEbzka2Vel6veKR49OIaXQ6adWVfqSYzldByv7f6cvtjZX62Or3o9UWfEj%2BSNa8DQl89imeDXfMJOhag1nrtBer%2BGIoORx%2FloflhMMmB7P30VMqta2grRNvm8On%2Bc6hSo4U2ElcahYRTR4C638wjsPty54oyfS1LIv6lhMhroMMSJKOkcM59lptRvs5wIc8hN23UFKIVlKSOrY9IbZQkisu2TT%2BrdzR3ML0Z5Cv6g6sV5YZF8OJDQWb6gQR1ud13Kgg3f2GEmJSoN8l19eDDizqETyqce5Neyhviw4OoTqtqa4J1I6MbV8JItvFe39I55yYxQT80P152MVsyn%2FBLsHHR%2BfH%2BIVisa6gy8L3sJJzK1OdTPr2jUXEuf09Dy90UsQWfRfeLmVYfmnXxgm9RlKpT4cM1RgDN4dQnn0vVCxLO1KzBRnAD6MCd%2BNSQ3beecNsbBoVFTrFITo3fjC3jtPCBjqkATZ%2FQFOKty5vlVFsyequL%2FS2FLn7Vty8eiQYFeeI0m6gzhpvW%2FN5F3gFbLobnQ5IVvaKA%2Fh91ti5MV9LqbDl%2F2Kd77o%2BzF23gGzwCEyXP7TNV%2BvVUq%2BF10qWq%2FPkdr22QdbzDsxBMPhsWJcrtoARZOdnXfjZXsO%2FuJuTL16Xz1N9JuspgYkjNOFik2hR1RmNprqy21%2FIwER7nGIth2jvE%2BpQ94LX&X-Amz-Signature=30e0ea129b1958da1802a87d85b9cb9c8616067e44dcf6c691764c4856e01b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFUFXEZV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ZZKZ%2FYpHxpGHP%2F9%2F1dthg2lDbJuOlNHFYnJRYB8iLAIhAJwHly%2FxLl0UJHKII%2FTuNdcL4jzTzSlaxTIh49lLxJgqKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BBOxYXg88NPnPWboq3AMG6heiMFrmWpS00mhgz100TDNdqXN7IfQ0%2FpeRrPBJITnDDNsG3lZRDJtVJbmYPa0mznxc9%2BKiKpuyQEpeEQ2LgkqIR0LpjrQco8t0kKPlp336H2RqYV99E04GIKil%2Fzz%2BWxeU3r7zLqHzjf9e3I2PxTGsbKwS72wwECrR00awVoEbzka2Vel6veKR49OIaXQ6adWVfqSYzldByv7f6cvtjZX62Or3o9UWfEj%2BSNa8DQl89imeDXfMJOhag1nrtBer%2BGIoORx%2FloflhMMmB7P30VMqta2grRNvm8On%2Bc6hSo4U2ElcahYRTR4C638wjsPty54oyfS1LIv6lhMhroMMSJKOkcM59lptRvs5wIc8hN23UFKIVlKSOrY9IbZQkisu2TT%2BrdzR3ML0Z5Cv6g6sV5YZF8OJDQWb6gQR1ud13Kgg3f2GEmJSoN8l19eDDizqETyqce5Neyhviw4OoTqtqa4J1I6MbV8JItvFe39I55yYxQT80P152MVsyn%2FBLsHHR%2BfH%2BIVisa6gy8L3sJJzK1OdTPr2jUXEuf09Dy90UsQWfRfeLmVYfmnXxgm9RlKpT4cM1RgDN4dQnn0vVCxLO1KzBRnAD6MCd%2BNSQ3beecNsbBoVFTrFITo3fjC3jtPCBjqkATZ%2FQFOKty5vlVFsyequL%2FS2FLn7Vty8eiQYFeeI0m6gzhpvW%2FN5F3gFbLobnQ5IVvaKA%2Fh91ti5MV9LqbDl%2F2Kd77o%2BzF23gGzwCEyXP7TNV%2BvVUq%2BF10qWq%2FPkdr22QdbzDsxBMPhsWJcrtoARZOdnXfjZXsO%2FuJuTL16Xz1N9JuspgYkjNOFik2hR1RmNprqy21%2FIwER7nGIth2jvE%2BpQ94LX&X-Amz-Signature=2a3496106edfe7e60d4123dbde1f89940d8efb6a44afeb30d646c6c64559cfe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
