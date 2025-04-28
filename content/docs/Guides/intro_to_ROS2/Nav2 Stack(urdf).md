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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGWNB73W%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNYxEGsmXTcXbAZfyzysV72jrfgI%2BBBIOggiNE2wFJigIgRmGvOe3aJlP35q%2FYYdE%2FVSjaoriipjb3p3uFDKvfAGcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNaY0cTwRW3e%2BsV%2FASrcAwkX%2F5O1NDZxghkhPDByfhZMIFoYxOe86L63e24mEQYjqF2jzO%2BiHxBrrKUljMJ9aDPe4cSmLzbh%2F%2FMRzcqld%2B3TX89UBzrnn0eGDK8or%2B5gRCRe5kWrMbtZ7MnJuAK89h7uQ%2BpQyvivzueHJk3K3vAgkzsdzdkZPxb0VnaBpGtFO8TZt%2FmoXt5hs%2FtykkZfIE%2BFhYjyb3upVaFwtkJI0zRf%2F7yJUzRUSKV4PuMQtFsXZwH7IY9yIpKSfUYKIAkuY5j7%2Bbmn9s9uFSRsRx53TrXsPSFNvMFx93QfX%2BqEnXxhelZGaDiD7ZuUedMs7mHLsQSEOWdUYOfBP1OzAWbbOpKpJ2ywcB%2FFR%2FJdRWw6d7Jh8%2ByQq8w%2Brja3L93X%2F9QKoUQC1XwV5oL2DWlPspIbRyjXXKnms%2FdZKB9WOD1tm37pXdMIxz4Ees9NplEIT33uptQvtSw0sOj2kCvwwTMW0AhhychZs5uPa66DuzvUWn51UWTBQ%2BR0h3Y%2F8OYJWrZ9ZFpIkP%2FsVnQkm9GDqigBWTuX9ljUAxpoAEnegItXlJIxOnEN1zeppvytAeuVvr0JWBAnTe0FcVc4rE8xJFxyBAkc3GEm5pVzvzzcFtZksDpWFPnnOqiKK6qXcQqhML%2Bhu8AGOqUB2PKbdbR2Hday%2BU40j2sZN3gHoFJEI1prBx%2BKaJ9gqRs4WB2aDUeq07Z4bAJw4iv6Ul8sx%2BjA0os1gGAkT64%2BLhz8HrUS899s5GwhEAROFqOpz4UhaDyrYWkqVRcTZ1mQ0DQI3nWd9UKn0Npj2twLyIIordn4ewFvOV6ka32ZAW48Kncakxiihw9PavkGUHYB3Jdmq9%2BME2R4qIb9ivXRCLekUtAv&X-Amz-Signature=255447cf076a628cef5ad74f4c58679802fe09558047175feef68173ae9f9d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGWNB73W%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNYxEGsmXTcXbAZfyzysV72jrfgI%2BBBIOggiNE2wFJigIgRmGvOe3aJlP35q%2FYYdE%2FVSjaoriipjb3p3uFDKvfAGcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNaY0cTwRW3e%2BsV%2FASrcAwkX%2F5O1NDZxghkhPDByfhZMIFoYxOe86L63e24mEQYjqF2jzO%2BiHxBrrKUljMJ9aDPe4cSmLzbh%2F%2FMRzcqld%2B3TX89UBzrnn0eGDK8or%2B5gRCRe5kWrMbtZ7MnJuAK89h7uQ%2BpQyvivzueHJk3K3vAgkzsdzdkZPxb0VnaBpGtFO8TZt%2FmoXt5hs%2FtykkZfIE%2BFhYjyb3upVaFwtkJI0zRf%2F7yJUzRUSKV4PuMQtFsXZwH7IY9yIpKSfUYKIAkuY5j7%2Bbmn9s9uFSRsRx53TrXsPSFNvMFx93QfX%2BqEnXxhelZGaDiD7ZuUedMs7mHLsQSEOWdUYOfBP1OzAWbbOpKpJ2ywcB%2FFR%2FJdRWw6d7Jh8%2ByQq8w%2Brja3L93X%2F9QKoUQC1XwV5oL2DWlPspIbRyjXXKnms%2FdZKB9WOD1tm37pXdMIxz4Ees9NplEIT33uptQvtSw0sOj2kCvwwTMW0AhhychZs5uPa66DuzvUWn51UWTBQ%2BR0h3Y%2F8OYJWrZ9ZFpIkP%2FsVnQkm9GDqigBWTuX9ljUAxpoAEnegItXlJIxOnEN1zeppvytAeuVvr0JWBAnTe0FcVc4rE8xJFxyBAkc3GEm5pVzvzzcFtZksDpWFPnnOqiKK6qXcQqhML%2Bhu8AGOqUB2PKbdbR2Hday%2BU40j2sZN3gHoFJEI1prBx%2BKaJ9gqRs4WB2aDUeq07Z4bAJw4iv6Ul8sx%2BjA0os1gGAkT64%2BLhz8HrUS899s5GwhEAROFqOpz4UhaDyrYWkqVRcTZ1mQ0DQI3nWd9UKn0Npj2twLyIIordn4ewFvOV6ka32ZAW48Kncakxiihw9PavkGUHYB3Jdmq9%2BME2R4qIb9ivXRCLekUtAv&X-Amz-Signature=e33d8b92801847e7ce1602eac7ca4b1cf1689c904fe706a41b43a83533587931&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGWNB73W%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNYxEGsmXTcXbAZfyzysV72jrfgI%2BBBIOggiNE2wFJigIgRmGvOe3aJlP35q%2FYYdE%2FVSjaoriipjb3p3uFDKvfAGcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNaY0cTwRW3e%2BsV%2FASrcAwkX%2F5O1NDZxghkhPDByfhZMIFoYxOe86L63e24mEQYjqF2jzO%2BiHxBrrKUljMJ9aDPe4cSmLzbh%2F%2FMRzcqld%2B3TX89UBzrnn0eGDK8or%2B5gRCRe5kWrMbtZ7MnJuAK89h7uQ%2BpQyvivzueHJk3K3vAgkzsdzdkZPxb0VnaBpGtFO8TZt%2FmoXt5hs%2FtykkZfIE%2BFhYjyb3upVaFwtkJI0zRf%2F7yJUzRUSKV4PuMQtFsXZwH7IY9yIpKSfUYKIAkuY5j7%2Bbmn9s9uFSRsRx53TrXsPSFNvMFx93QfX%2BqEnXxhelZGaDiD7ZuUedMs7mHLsQSEOWdUYOfBP1OzAWbbOpKpJ2ywcB%2FFR%2FJdRWw6d7Jh8%2ByQq8w%2Brja3L93X%2F9QKoUQC1XwV5oL2DWlPspIbRyjXXKnms%2FdZKB9WOD1tm37pXdMIxz4Ees9NplEIT33uptQvtSw0sOj2kCvwwTMW0AhhychZs5uPa66DuzvUWn51UWTBQ%2BR0h3Y%2F8OYJWrZ9ZFpIkP%2FsVnQkm9GDqigBWTuX9ljUAxpoAEnegItXlJIxOnEN1zeppvytAeuVvr0JWBAnTe0FcVc4rE8xJFxyBAkc3GEm5pVzvzzcFtZksDpWFPnnOqiKK6qXcQqhML%2Bhu8AGOqUB2PKbdbR2Hday%2BU40j2sZN3gHoFJEI1prBx%2BKaJ9gqRs4WB2aDUeq07Z4bAJw4iv6Ul8sx%2BjA0os1gGAkT64%2BLhz8HrUS899s5GwhEAROFqOpz4UhaDyrYWkqVRcTZ1mQ0DQI3nWd9UKn0Npj2twLyIIordn4ewFvOV6ka32ZAW48Kncakxiihw9PavkGUHYB3Jdmq9%2BME2R4qIb9ivXRCLekUtAv&X-Amz-Signature=f525b83d0913875bca31793834e649476748a5d26be61f88c129683bce643ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGWNB73W%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNYxEGsmXTcXbAZfyzysV72jrfgI%2BBBIOggiNE2wFJigIgRmGvOe3aJlP35q%2FYYdE%2FVSjaoriipjb3p3uFDKvfAGcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNaY0cTwRW3e%2BsV%2FASrcAwkX%2F5O1NDZxghkhPDByfhZMIFoYxOe86L63e24mEQYjqF2jzO%2BiHxBrrKUljMJ9aDPe4cSmLzbh%2F%2FMRzcqld%2B3TX89UBzrnn0eGDK8or%2B5gRCRe5kWrMbtZ7MnJuAK89h7uQ%2BpQyvivzueHJk3K3vAgkzsdzdkZPxb0VnaBpGtFO8TZt%2FmoXt5hs%2FtykkZfIE%2BFhYjyb3upVaFwtkJI0zRf%2F7yJUzRUSKV4PuMQtFsXZwH7IY9yIpKSfUYKIAkuY5j7%2Bbmn9s9uFSRsRx53TrXsPSFNvMFx93QfX%2BqEnXxhelZGaDiD7ZuUedMs7mHLsQSEOWdUYOfBP1OzAWbbOpKpJ2ywcB%2FFR%2FJdRWw6d7Jh8%2ByQq8w%2Brja3L93X%2F9QKoUQC1XwV5oL2DWlPspIbRyjXXKnms%2FdZKB9WOD1tm37pXdMIxz4Ees9NplEIT33uptQvtSw0sOj2kCvwwTMW0AhhychZs5uPa66DuzvUWn51UWTBQ%2BR0h3Y%2F8OYJWrZ9ZFpIkP%2FsVnQkm9GDqigBWTuX9ljUAxpoAEnegItXlJIxOnEN1zeppvytAeuVvr0JWBAnTe0FcVc4rE8xJFxyBAkc3GEm5pVzvzzcFtZksDpWFPnnOqiKK6qXcQqhML%2Bhu8AGOqUB2PKbdbR2Hday%2BU40j2sZN3gHoFJEI1prBx%2BKaJ9gqRs4WB2aDUeq07Z4bAJw4iv6Ul8sx%2BjA0os1gGAkT64%2BLhz8HrUS899s5GwhEAROFqOpz4UhaDyrYWkqVRcTZ1mQ0DQI3nWd9UKn0Npj2twLyIIordn4ewFvOV6ka32ZAW48Kncakxiihw9PavkGUHYB3Jdmq9%2BME2R4qIb9ivXRCLekUtAv&X-Amz-Signature=00049b4febec6db13b125e7b2da87cccfc00f355b8b87769f82ce590d5f4e5df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGWNB73W%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNYxEGsmXTcXbAZfyzysV72jrfgI%2BBBIOggiNE2wFJigIgRmGvOe3aJlP35q%2FYYdE%2FVSjaoriipjb3p3uFDKvfAGcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNaY0cTwRW3e%2BsV%2FASrcAwkX%2F5O1NDZxghkhPDByfhZMIFoYxOe86L63e24mEQYjqF2jzO%2BiHxBrrKUljMJ9aDPe4cSmLzbh%2F%2FMRzcqld%2B3TX89UBzrnn0eGDK8or%2B5gRCRe5kWrMbtZ7MnJuAK89h7uQ%2BpQyvivzueHJk3K3vAgkzsdzdkZPxb0VnaBpGtFO8TZt%2FmoXt5hs%2FtykkZfIE%2BFhYjyb3upVaFwtkJI0zRf%2F7yJUzRUSKV4PuMQtFsXZwH7IY9yIpKSfUYKIAkuY5j7%2Bbmn9s9uFSRsRx53TrXsPSFNvMFx93QfX%2BqEnXxhelZGaDiD7ZuUedMs7mHLsQSEOWdUYOfBP1OzAWbbOpKpJ2ywcB%2FFR%2FJdRWw6d7Jh8%2ByQq8w%2Brja3L93X%2F9QKoUQC1XwV5oL2DWlPspIbRyjXXKnms%2FdZKB9WOD1tm37pXdMIxz4Ees9NplEIT33uptQvtSw0sOj2kCvwwTMW0AhhychZs5uPa66DuzvUWn51UWTBQ%2BR0h3Y%2F8OYJWrZ9ZFpIkP%2FsVnQkm9GDqigBWTuX9ljUAxpoAEnegItXlJIxOnEN1zeppvytAeuVvr0JWBAnTe0FcVc4rE8xJFxyBAkc3GEm5pVzvzzcFtZksDpWFPnnOqiKK6qXcQqhML%2Bhu8AGOqUB2PKbdbR2Hday%2BU40j2sZN3gHoFJEI1prBx%2BKaJ9gqRs4WB2aDUeq07Z4bAJw4iv6Ul8sx%2BjA0os1gGAkT64%2BLhz8HrUS899s5GwhEAROFqOpz4UhaDyrYWkqVRcTZ1mQ0DQI3nWd9UKn0Npj2twLyIIordn4ewFvOV6ka32ZAW48Kncakxiihw9PavkGUHYB3Jdmq9%2BME2R4qIb9ivXRCLekUtAv&X-Amz-Signature=155c1183548434c70e71452d91606b81456564b417456d42e231e8a73905f94a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGWNB73W%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNYxEGsmXTcXbAZfyzysV72jrfgI%2BBBIOggiNE2wFJigIgRmGvOe3aJlP35q%2FYYdE%2FVSjaoriipjb3p3uFDKvfAGcq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDNaY0cTwRW3e%2BsV%2FASrcAwkX%2F5O1NDZxghkhPDByfhZMIFoYxOe86L63e24mEQYjqF2jzO%2BiHxBrrKUljMJ9aDPe4cSmLzbh%2F%2FMRzcqld%2B3TX89UBzrnn0eGDK8or%2B5gRCRe5kWrMbtZ7MnJuAK89h7uQ%2BpQyvivzueHJk3K3vAgkzsdzdkZPxb0VnaBpGtFO8TZt%2FmoXt5hs%2FtykkZfIE%2BFhYjyb3upVaFwtkJI0zRf%2F7yJUzRUSKV4PuMQtFsXZwH7IY9yIpKSfUYKIAkuY5j7%2Bbmn9s9uFSRsRx53TrXsPSFNvMFx93QfX%2BqEnXxhelZGaDiD7ZuUedMs7mHLsQSEOWdUYOfBP1OzAWbbOpKpJ2ywcB%2FFR%2FJdRWw6d7Jh8%2ByQq8w%2Brja3L93X%2F9QKoUQC1XwV5oL2DWlPspIbRyjXXKnms%2FdZKB9WOD1tm37pXdMIxz4Ees9NplEIT33uptQvtSw0sOj2kCvwwTMW0AhhychZs5uPa66DuzvUWn51UWTBQ%2BR0h3Y%2F8OYJWrZ9ZFpIkP%2FsVnQkm9GDqigBWTuX9ljUAxpoAEnegItXlJIxOnEN1zeppvytAeuVvr0JWBAnTe0FcVc4rE8xJFxyBAkc3GEm5pVzvzzcFtZksDpWFPnnOqiKK6qXcQqhML%2Bhu8AGOqUB2PKbdbR2Hday%2BU40j2sZN3gHoFJEI1prBx%2BKaJ9gqRs4WB2aDUeq07Z4bAJw4iv6Ul8sx%2BjA0os1gGAkT64%2BLhz8HrUS899s5GwhEAROFqOpz4UhaDyrYWkqVRcTZ1mQ0DQI3nWd9UKn0Npj2twLyIIordn4ewFvOV6ka32ZAW48Kncakxiihw9PavkGUHYB3Jdmq9%2BME2R4qIb9ivXRCLekUtAv&X-Amz-Signature=47089117eed74f355e1cd3fb6b2976bf866b1cadcaccc132f1dfe0c6c32c5c94&X-Amz-SignedHeaders=host&x-id=GetObject)
