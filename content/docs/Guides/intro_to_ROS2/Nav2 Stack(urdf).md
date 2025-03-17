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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLGBST7F%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf1MgBW4UUhV29kiAc2SeUlIJ7A%2F1HzGvuCnTwZiaU%2BgIgO%2BmufM72leszg9PqGtHrlyg3lpOkc1Y87bWsynpvRyQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEyUwWiIohSv9UJwdSrcA%2FbUAhRK74Pl%2FW5%2BeM%2FVcsuTCrskPumQhUMBCg10zPitRkTf9wmOLQI6NSyHhTumU20aWcPfZ21HAOHlppL3jQmkD2BJPioID5knwZ4cM0XoMmQV0OZUPmXbg9Ap0xhtIeCwH121q60eYDoMcEOl1vr3mceTE9iC7SUAWLjhTauc%2BjiWqqr4ibl%2FhwDW3Vsh%2BfPDCgjAHT1yTiKNF7lPeqZIibygMIjplTr6xC49IUrplxpCDBvmVF1sOkBAQ8q1UFFS6xnk568zYWY9rt753jAXLNc5TGmx9vXZ8C%2F%2BxByVO8X6oiz8xHVavBegA%2B%2BAnRVbKh1GDDXgkkroBY2DSfXHjM4IKPTLwUd7X445cWlY1OzKPNQ9ZNX7sZgNxsaDBg1PNtR8Y2XGIMOYMpiJ5xkNF%2BJBVspDc4M%2B0vC8HB2j0%2F0Ij4qZB4RGdzs2REM5hidJY2%2B2F0jH%2FIoPA4wOr8glRtxxr8lFSZi00tgfICd%2FnoidLN6KcHIDmSQVuSJBG%2FlqA102ES2irdm8ozjsEYDhh60MUA86R7Vf11P%2FMGFMD00cGn6RXwq8cQRXiDLY%2FoxJ0nJwGSc7%2Fd4V8oxA12eevOnWA1WG80RHqoizF8I17n%2BLRMh94pqu2jKGML7p4L4GOqUBxhQADcio%2FmtTmOWXwDw89h9MtXTmfNFRyhUv%2FmmceZkYsSYfr80UgpmIN%2Fwk2yOdIYqW%2BsfXG31WqKSWHUT2slw8lttufv16ZcgUiJP5sYI8qclhvXYjwfEu4JsWX7ShUUAL0uWviIFDpTyxgekd5gakZKgXfoC%2FlBmMx5n1j4j5BX9DzakJnFp%2FxHRuPbcM63OyXHD0%2Bslh2WlTgDJPsjqahsHF&X-Amz-Signature=cddecc08d6c29213627871da12d0378e219c9d7c29d1448e25525971dbdc342b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLGBST7F%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf1MgBW4UUhV29kiAc2SeUlIJ7A%2F1HzGvuCnTwZiaU%2BgIgO%2BmufM72leszg9PqGtHrlyg3lpOkc1Y87bWsynpvRyQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEyUwWiIohSv9UJwdSrcA%2FbUAhRK74Pl%2FW5%2BeM%2FVcsuTCrskPumQhUMBCg10zPitRkTf9wmOLQI6NSyHhTumU20aWcPfZ21HAOHlppL3jQmkD2BJPioID5knwZ4cM0XoMmQV0OZUPmXbg9Ap0xhtIeCwH121q60eYDoMcEOl1vr3mceTE9iC7SUAWLjhTauc%2BjiWqqr4ibl%2FhwDW3Vsh%2BfPDCgjAHT1yTiKNF7lPeqZIibygMIjplTr6xC49IUrplxpCDBvmVF1sOkBAQ8q1UFFS6xnk568zYWY9rt753jAXLNc5TGmx9vXZ8C%2F%2BxByVO8X6oiz8xHVavBegA%2B%2BAnRVbKh1GDDXgkkroBY2DSfXHjM4IKPTLwUd7X445cWlY1OzKPNQ9ZNX7sZgNxsaDBg1PNtR8Y2XGIMOYMpiJ5xkNF%2BJBVspDc4M%2B0vC8HB2j0%2F0Ij4qZB4RGdzs2REM5hidJY2%2B2F0jH%2FIoPA4wOr8glRtxxr8lFSZi00tgfICd%2FnoidLN6KcHIDmSQVuSJBG%2FlqA102ES2irdm8ozjsEYDhh60MUA86R7Vf11P%2FMGFMD00cGn6RXwq8cQRXiDLY%2FoxJ0nJwGSc7%2Fd4V8oxA12eevOnWA1WG80RHqoizF8I17n%2BLRMh94pqu2jKGML7p4L4GOqUBxhQADcio%2FmtTmOWXwDw89h9MtXTmfNFRyhUv%2FmmceZkYsSYfr80UgpmIN%2Fwk2yOdIYqW%2BsfXG31WqKSWHUT2slw8lttufv16ZcgUiJP5sYI8qclhvXYjwfEu4JsWX7ShUUAL0uWviIFDpTyxgekd5gakZKgXfoC%2FlBmMx5n1j4j5BX9DzakJnFp%2FxHRuPbcM63OyXHD0%2Bslh2WlTgDJPsjqahsHF&X-Amz-Signature=40f9c3674e6048fb20202547b5d5e6d1797429d940234c19ac52c41db24a2422&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLGBST7F%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf1MgBW4UUhV29kiAc2SeUlIJ7A%2F1HzGvuCnTwZiaU%2BgIgO%2BmufM72leszg9PqGtHrlyg3lpOkc1Y87bWsynpvRyQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEyUwWiIohSv9UJwdSrcA%2FbUAhRK74Pl%2FW5%2BeM%2FVcsuTCrskPumQhUMBCg10zPitRkTf9wmOLQI6NSyHhTumU20aWcPfZ21HAOHlppL3jQmkD2BJPioID5knwZ4cM0XoMmQV0OZUPmXbg9Ap0xhtIeCwH121q60eYDoMcEOl1vr3mceTE9iC7SUAWLjhTauc%2BjiWqqr4ibl%2FhwDW3Vsh%2BfPDCgjAHT1yTiKNF7lPeqZIibygMIjplTr6xC49IUrplxpCDBvmVF1sOkBAQ8q1UFFS6xnk568zYWY9rt753jAXLNc5TGmx9vXZ8C%2F%2BxByVO8X6oiz8xHVavBegA%2B%2BAnRVbKh1GDDXgkkroBY2DSfXHjM4IKPTLwUd7X445cWlY1OzKPNQ9ZNX7sZgNxsaDBg1PNtR8Y2XGIMOYMpiJ5xkNF%2BJBVspDc4M%2B0vC8HB2j0%2F0Ij4qZB4RGdzs2REM5hidJY2%2B2F0jH%2FIoPA4wOr8glRtxxr8lFSZi00tgfICd%2FnoidLN6KcHIDmSQVuSJBG%2FlqA102ES2irdm8ozjsEYDhh60MUA86R7Vf11P%2FMGFMD00cGn6RXwq8cQRXiDLY%2FoxJ0nJwGSc7%2Fd4V8oxA12eevOnWA1WG80RHqoizF8I17n%2BLRMh94pqu2jKGML7p4L4GOqUBxhQADcio%2FmtTmOWXwDw89h9MtXTmfNFRyhUv%2FmmceZkYsSYfr80UgpmIN%2Fwk2yOdIYqW%2BsfXG31WqKSWHUT2slw8lttufv16ZcgUiJP5sYI8qclhvXYjwfEu4JsWX7ShUUAL0uWviIFDpTyxgekd5gakZKgXfoC%2FlBmMx5n1j4j5BX9DzakJnFp%2FxHRuPbcM63OyXHD0%2Bslh2WlTgDJPsjqahsHF&X-Amz-Signature=735df41386db0256435e8369a181f048d1c250a836ef0656c1e624396529547c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLGBST7F%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf1MgBW4UUhV29kiAc2SeUlIJ7A%2F1HzGvuCnTwZiaU%2BgIgO%2BmufM72leszg9PqGtHrlyg3lpOkc1Y87bWsynpvRyQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEyUwWiIohSv9UJwdSrcA%2FbUAhRK74Pl%2FW5%2BeM%2FVcsuTCrskPumQhUMBCg10zPitRkTf9wmOLQI6NSyHhTumU20aWcPfZ21HAOHlppL3jQmkD2BJPioID5knwZ4cM0XoMmQV0OZUPmXbg9Ap0xhtIeCwH121q60eYDoMcEOl1vr3mceTE9iC7SUAWLjhTauc%2BjiWqqr4ibl%2FhwDW3Vsh%2BfPDCgjAHT1yTiKNF7lPeqZIibygMIjplTr6xC49IUrplxpCDBvmVF1sOkBAQ8q1UFFS6xnk568zYWY9rt753jAXLNc5TGmx9vXZ8C%2F%2BxByVO8X6oiz8xHVavBegA%2B%2BAnRVbKh1GDDXgkkroBY2DSfXHjM4IKPTLwUd7X445cWlY1OzKPNQ9ZNX7sZgNxsaDBg1PNtR8Y2XGIMOYMpiJ5xkNF%2BJBVspDc4M%2B0vC8HB2j0%2F0Ij4qZB4RGdzs2REM5hidJY2%2B2F0jH%2FIoPA4wOr8glRtxxr8lFSZi00tgfICd%2FnoidLN6KcHIDmSQVuSJBG%2FlqA102ES2irdm8ozjsEYDhh60MUA86R7Vf11P%2FMGFMD00cGn6RXwq8cQRXiDLY%2FoxJ0nJwGSc7%2Fd4V8oxA12eevOnWA1WG80RHqoizF8I17n%2BLRMh94pqu2jKGML7p4L4GOqUBxhQADcio%2FmtTmOWXwDw89h9MtXTmfNFRyhUv%2FmmceZkYsSYfr80UgpmIN%2Fwk2yOdIYqW%2BsfXG31WqKSWHUT2slw8lttufv16ZcgUiJP5sYI8qclhvXYjwfEu4JsWX7ShUUAL0uWviIFDpTyxgekd5gakZKgXfoC%2FlBmMx5n1j4j5BX9DzakJnFp%2FxHRuPbcM63OyXHD0%2Bslh2WlTgDJPsjqahsHF&X-Amz-Signature=211f2a0cfdd6c5e501c3587936b74b5092b22b82b07d77b08b0201b052ad083e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLGBST7F%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf1MgBW4UUhV29kiAc2SeUlIJ7A%2F1HzGvuCnTwZiaU%2BgIgO%2BmufM72leszg9PqGtHrlyg3lpOkc1Y87bWsynpvRyQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEyUwWiIohSv9UJwdSrcA%2FbUAhRK74Pl%2FW5%2BeM%2FVcsuTCrskPumQhUMBCg10zPitRkTf9wmOLQI6NSyHhTumU20aWcPfZ21HAOHlppL3jQmkD2BJPioID5knwZ4cM0XoMmQV0OZUPmXbg9Ap0xhtIeCwH121q60eYDoMcEOl1vr3mceTE9iC7SUAWLjhTauc%2BjiWqqr4ibl%2FhwDW3Vsh%2BfPDCgjAHT1yTiKNF7lPeqZIibygMIjplTr6xC49IUrplxpCDBvmVF1sOkBAQ8q1UFFS6xnk568zYWY9rt753jAXLNc5TGmx9vXZ8C%2F%2BxByVO8X6oiz8xHVavBegA%2B%2BAnRVbKh1GDDXgkkroBY2DSfXHjM4IKPTLwUd7X445cWlY1OzKPNQ9ZNX7sZgNxsaDBg1PNtR8Y2XGIMOYMpiJ5xkNF%2BJBVspDc4M%2B0vC8HB2j0%2F0Ij4qZB4RGdzs2REM5hidJY2%2B2F0jH%2FIoPA4wOr8glRtxxr8lFSZi00tgfICd%2FnoidLN6KcHIDmSQVuSJBG%2FlqA102ES2irdm8ozjsEYDhh60MUA86R7Vf11P%2FMGFMD00cGn6RXwq8cQRXiDLY%2FoxJ0nJwGSc7%2Fd4V8oxA12eevOnWA1WG80RHqoizF8I17n%2BLRMh94pqu2jKGML7p4L4GOqUBxhQADcio%2FmtTmOWXwDw89h9MtXTmfNFRyhUv%2FmmceZkYsSYfr80UgpmIN%2Fwk2yOdIYqW%2BsfXG31WqKSWHUT2slw8lttufv16ZcgUiJP5sYI8qclhvXYjwfEu4JsWX7ShUUAL0uWviIFDpTyxgekd5gakZKgXfoC%2FlBmMx5n1j4j5BX9DzakJnFp%2FxHRuPbcM63OyXHD0%2Bslh2WlTgDJPsjqahsHF&X-Amz-Signature=ac6211e4aeea585b71c2f4a44dc34b89e57e3173066cd60e0a1c8690bd85ac9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLGBST7F%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf1MgBW4UUhV29kiAc2SeUlIJ7A%2F1HzGvuCnTwZiaU%2BgIgO%2BmufM72leszg9PqGtHrlyg3lpOkc1Y87bWsynpvRyQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEyUwWiIohSv9UJwdSrcA%2FbUAhRK74Pl%2FW5%2BeM%2FVcsuTCrskPumQhUMBCg10zPitRkTf9wmOLQI6NSyHhTumU20aWcPfZ21HAOHlppL3jQmkD2BJPioID5knwZ4cM0XoMmQV0OZUPmXbg9Ap0xhtIeCwH121q60eYDoMcEOl1vr3mceTE9iC7SUAWLjhTauc%2BjiWqqr4ibl%2FhwDW3Vsh%2BfPDCgjAHT1yTiKNF7lPeqZIibygMIjplTr6xC49IUrplxpCDBvmVF1sOkBAQ8q1UFFS6xnk568zYWY9rt753jAXLNc5TGmx9vXZ8C%2F%2BxByVO8X6oiz8xHVavBegA%2B%2BAnRVbKh1GDDXgkkroBY2DSfXHjM4IKPTLwUd7X445cWlY1OzKPNQ9ZNX7sZgNxsaDBg1PNtR8Y2XGIMOYMpiJ5xkNF%2BJBVspDc4M%2B0vC8HB2j0%2F0Ij4qZB4RGdzs2REM5hidJY2%2B2F0jH%2FIoPA4wOr8glRtxxr8lFSZi00tgfICd%2FnoidLN6KcHIDmSQVuSJBG%2FlqA102ES2irdm8ozjsEYDhh60MUA86R7Vf11P%2FMGFMD00cGn6RXwq8cQRXiDLY%2FoxJ0nJwGSc7%2Fd4V8oxA12eevOnWA1WG80RHqoizF8I17n%2BLRMh94pqu2jKGML7p4L4GOqUBxhQADcio%2FmtTmOWXwDw89h9MtXTmfNFRyhUv%2FmmceZkYsSYfr80UgpmIN%2Fwk2yOdIYqW%2BsfXG31WqKSWHUT2slw8lttufv16ZcgUiJP5sYI8qclhvXYjwfEu4JsWX7ShUUAL0uWviIFDpTyxgekd5gakZKgXfoC%2FlBmMx5n1j4j5BX9DzakJnFp%2FxHRuPbcM63OyXHD0%2Bslh2WlTgDJPsjqahsHF&X-Amz-Signature=97f7ef9af38255421e6e9ae3b0b4ac76179f9f296b8cf44062d234d9c9e90460&X-Amz-SignedHeaders=host&x-id=GetObject)
