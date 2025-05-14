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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JRMPDP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD24VgNI5pW0dTH%2F6uQwueZ%2BR%2Bay%2FkwFCO1FxYSAupGvAIgMRy2ak7arUU9iLiKMaHVTRXt%2BU6ExmFPZh5BdoA9az8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeaqJduNxWk1TA1mSrcA2YYb0GBlcJ1HM9CBUOGWzrWsFuhNpQHrCKQ%2FA6FRKVpQlUtJXtMwjx9ODllVEdJkkVhnQx2j%2FQ06MQHo4EUjWyZfeFyPvRCmUoe16K1TJPOqWcwdAUkFk%2BTbFT6DpIMD6%2FkFawjyzKjo92IaxnDHCh6aVNTSc4X0AaO9Wf5In19jZcxALbGAMJHur%2FbfWgEM3TZ85Q%2BH6j%2FW5NiXxfn1y%2Bj8yZ7Ed8H12oiBXDlw5aqN0P0zIbdAP9TpdlvCzN5ChV1kSmoIssQCDWgxp6KP0THegP3Aw7RB9ontHPBKdUedvO5rObPCQnogecgi1jCYb%2F%2FpwXsKiZ4bEF49Gio8ln0pok8f8X%2BSUAe6DdGAKboLjLaRBzAFG4SbVck6aIOreVieFHxa7AqO8APgikYwwcNlbxzbmskp4mJFCSUoM7R5fGT3aHqINhrX6im98ZVRC31aIPC1YxMjFuNBS8H5UNiGjNYnWP%2FTOxxdOFNZdbP0x83kT3astD7h062gSqYSSLnVr0y%2BGCex6Iu7ide4Is%2Bcpy2FFrHTuZkht5dT3oE81ofpG46BNXsAt%2FO2oQiOSGINqybIrQimd9nyMJ1Nu6ML3G1l1ghuJXDh82PsowzwfcQ7Bx%2BeWXRxWQiMKS4kMEGOqUBJ%2FqzzbCNqRXgxtHH3P%2FfoKz9hOcqrQXi6hj3hu0wPVGbyMQuCvFhO9ctyPsTB2rNsRY21xDORZ194v3VZx8X8Dv2peaxxSvy3qKvOphFrN9lEZNs1aSpAtu0gs%2FM6dYO3u9NjqNjNF0uedDTY0ZAmHOB29sirEPk55XhrngizgsXgV6ZvP1hseQLvZ%2BfTeeZ1h5iwRcNR231nzFN8xaaIXHIF4P4&X-Amz-Signature=9c03ed7e6bf0d9d59656a9aedf65724d3f483f6cb6e6328437bc83a03dd7a37f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JRMPDP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD24VgNI5pW0dTH%2F6uQwueZ%2BR%2Bay%2FkwFCO1FxYSAupGvAIgMRy2ak7arUU9iLiKMaHVTRXt%2BU6ExmFPZh5BdoA9az8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeaqJduNxWk1TA1mSrcA2YYb0GBlcJ1HM9CBUOGWzrWsFuhNpQHrCKQ%2FA6FRKVpQlUtJXtMwjx9ODllVEdJkkVhnQx2j%2FQ06MQHo4EUjWyZfeFyPvRCmUoe16K1TJPOqWcwdAUkFk%2BTbFT6DpIMD6%2FkFawjyzKjo92IaxnDHCh6aVNTSc4X0AaO9Wf5In19jZcxALbGAMJHur%2FbfWgEM3TZ85Q%2BH6j%2FW5NiXxfn1y%2Bj8yZ7Ed8H12oiBXDlw5aqN0P0zIbdAP9TpdlvCzN5ChV1kSmoIssQCDWgxp6KP0THegP3Aw7RB9ontHPBKdUedvO5rObPCQnogecgi1jCYb%2F%2FpwXsKiZ4bEF49Gio8ln0pok8f8X%2BSUAe6DdGAKboLjLaRBzAFG4SbVck6aIOreVieFHxa7AqO8APgikYwwcNlbxzbmskp4mJFCSUoM7R5fGT3aHqINhrX6im98ZVRC31aIPC1YxMjFuNBS8H5UNiGjNYnWP%2FTOxxdOFNZdbP0x83kT3astD7h062gSqYSSLnVr0y%2BGCex6Iu7ide4Is%2Bcpy2FFrHTuZkht5dT3oE81ofpG46BNXsAt%2FO2oQiOSGINqybIrQimd9nyMJ1Nu6ML3G1l1ghuJXDh82PsowzwfcQ7Bx%2BeWXRxWQiMKS4kMEGOqUBJ%2FqzzbCNqRXgxtHH3P%2FfoKz9hOcqrQXi6hj3hu0wPVGbyMQuCvFhO9ctyPsTB2rNsRY21xDORZ194v3VZx8X8Dv2peaxxSvy3qKvOphFrN9lEZNs1aSpAtu0gs%2FM6dYO3u9NjqNjNF0uedDTY0ZAmHOB29sirEPk55XhrngizgsXgV6ZvP1hseQLvZ%2BfTeeZ1h5iwRcNR231nzFN8xaaIXHIF4P4&X-Amz-Signature=6c679eeb3772911120bb61adfc2d3d8561b18d3090b1606d8082f1f74645ce1c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JRMPDP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD24VgNI5pW0dTH%2F6uQwueZ%2BR%2Bay%2FkwFCO1FxYSAupGvAIgMRy2ak7arUU9iLiKMaHVTRXt%2BU6ExmFPZh5BdoA9az8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeaqJduNxWk1TA1mSrcA2YYb0GBlcJ1HM9CBUOGWzrWsFuhNpQHrCKQ%2FA6FRKVpQlUtJXtMwjx9ODllVEdJkkVhnQx2j%2FQ06MQHo4EUjWyZfeFyPvRCmUoe16K1TJPOqWcwdAUkFk%2BTbFT6DpIMD6%2FkFawjyzKjo92IaxnDHCh6aVNTSc4X0AaO9Wf5In19jZcxALbGAMJHur%2FbfWgEM3TZ85Q%2BH6j%2FW5NiXxfn1y%2Bj8yZ7Ed8H12oiBXDlw5aqN0P0zIbdAP9TpdlvCzN5ChV1kSmoIssQCDWgxp6KP0THegP3Aw7RB9ontHPBKdUedvO5rObPCQnogecgi1jCYb%2F%2FpwXsKiZ4bEF49Gio8ln0pok8f8X%2BSUAe6DdGAKboLjLaRBzAFG4SbVck6aIOreVieFHxa7AqO8APgikYwwcNlbxzbmskp4mJFCSUoM7R5fGT3aHqINhrX6im98ZVRC31aIPC1YxMjFuNBS8H5UNiGjNYnWP%2FTOxxdOFNZdbP0x83kT3astD7h062gSqYSSLnVr0y%2BGCex6Iu7ide4Is%2Bcpy2FFrHTuZkht5dT3oE81ofpG46BNXsAt%2FO2oQiOSGINqybIrQimd9nyMJ1Nu6ML3G1l1ghuJXDh82PsowzwfcQ7Bx%2BeWXRxWQiMKS4kMEGOqUBJ%2FqzzbCNqRXgxtHH3P%2FfoKz9hOcqrQXi6hj3hu0wPVGbyMQuCvFhO9ctyPsTB2rNsRY21xDORZ194v3VZx8X8Dv2peaxxSvy3qKvOphFrN9lEZNs1aSpAtu0gs%2FM6dYO3u9NjqNjNF0uedDTY0ZAmHOB29sirEPk55XhrngizgsXgV6ZvP1hseQLvZ%2BfTeeZ1h5iwRcNR231nzFN8xaaIXHIF4P4&X-Amz-Signature=fc3ce7f4ed7b82c1ecc7ef91e39cbe59fc3641982be3f4a57eeb3dfccf7eac8b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JRMPDP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD24VgNI5pW0dTH%2F6uQwueZ%2BR%2Bay%2FkwFCO1FxYSAupGvAIgMRy2ak7arUU9iLiKMaHVTRXt%2BU6ExmFPZh5BdoA9az8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeaqJduNxWk1TA1mSrcA2YYb0GBlcJ1HM9CBUOGWzrWsFuhNpQHrCKQ%2FA6FRKVpQlUtJXtMwjx9ODllVEdJkkVhnQx2j%2FQ06MQHo4EUjWyZfeFyPvRCmUoe16K1TJPOqWcwdAUkFk%2BTbFT6DpIMD6%2FkFawjyzKjo92IaxnDHCh6aVNTSc4X0AaO9Wf5In19jZcxALbGAMJHur%2FbfWgEM3TZ85Q%2BH6j%2FW5NiXxfn1y%2Bj8yZ7Ed8H12oiBXDlw5aqN0P0zIbdAP9TpdlvCzN5ChV1kSmoIssQCDWgxp6KP0THegP3Aw7RB9ontHPBKdUedvO5rObPCQnogecgi1jCYb%2F%2FpwXsKiZ4bEF49Gio8ln0pok8f8X%2BSUAe6DdGAKboLjLaRBzAFG4SbVck6aIOreVieFHxa7AqO8APgikYwwcNlbxzbmskp4mJFCSUoM7R5fGT3aHqINhrX6im98ZVRC31aIPC1YxMjFuNBS8H5UNiGjNYnWP%2FTOxxdOFNZdbP0x83kT3astD7h062gSqYSSLnVr0y%2BGCex6Iu7ide4Is%2Bcpy2FFrHTuZkht5dT3oE81ofpG46BNXsAt%2FO2oQiOSGINqybIrQimd9nyMJ1Nu6ML3G1l1ghuJXDh82PsowzwfcQ7Bx%2BeWXRxWQiMKS4kMEGOqUBJ%2FqzzbCNqRXgxtHH3P%2FfoKz9hOcqrQXi6hj3hu0wPVGbyMQuCvFhO9ctyPsTB2rNsRY21xDORZ194v3VZx8X8Dv2peaxxSvy3qKvOphFrN9lEZNs1aSpAtu0gs%2FM6dYO3u9NjqNjNF0uedDTY0ZAmHOB29sirEPk55XhrngizgsXgV6ZvP1hseQLvZ%2BfTeeZ1h5iwRcNR231nzFN8xaaIXHIF4P4&X-Amz-Signature=9e57d638ea8e6f2465f9061a2ab4db9b996abf11dcc0d43ec07dbaae215e4a27&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JRMPDP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD24VgNI5pW0dTH%2F6uQwueZ%2BR%2Bay%2FkwFCO1FxYSAupGvAIgMRy2ak7arUU9iLiKMaHVTRXt%2BU6ExmFPZh5BdoA9az8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeaqJduNxWk1TA1mSrcA2YYb0GBlcJ1HM9CBUOGWzrWsFuhNpQHrCKQ%2FA6FRKVpQlUtJXtMwjx9ODllVEdJkkVhnQx2j%2FQ06MQHo4EUjWyZfeFyPvRCmUoe16K1TJPOqWcwdAUkFk%2BTbFT6DpIMD6%2FkFawjyzKjo92IaxnDHCh6aVNTSc4X0AaO9Wf5In19jZcxALbGAMJHur%2FbfWgEM3TZ85Q%2BH6j%2FW5NiXxfn1y%2Bj8yZ7Ed8H12oiBXDlw5aqN0P0zIbdAP9TpdlvCzN5ChV1kSmoIssQCDWgxp6KP0THegP3Aw7RB9ontHPBKdUedvO5rObPCQnogecgi1jCYb%2F%2FpwXsKiZ4bEF49Gio8ln0pok8f8X%2BSUAe6DdGAKboLjLaRBzAFG4SbVck6aIOreVieFHxa7AqO8APgikYwwcNlbxzbmskp4mJFCSUoM7R5fGT3aHqINhrX6im98ZVRC31aIPC1YxMjFuNBS8H5UNiGjNYnWP%2FTOxxdOFNZdbP0x83kT3astD7h062gSqYSSLnVr0y%2BGCex6Iu7ide4Is%2Bcpy2FFrHTuZkht5dT3oE81ofpG46BNXsAt%2FO2oQiOSGINqybIrQimd9nyMJ1Nu6ML3G1l1ghuJXDh82PsowzwfcQ7Bx%2BeWXRxWQiMKS4kMEGOqUBJ%2FqzzbCNqRXgxtHH3P%2FfoKz9hOcqrQXi6hj3hu0wPVGbyMQuCvFhO9ctyPsTB2rNsRY21xDORZ194v3VZx8X8Dv2peaxxSvy3qKvOphFrN9lEZNs1aSpAtu0gs%2FM6dYO3u9NjqNjNF0uedDTY0ZAmHOB29sirEPk55XhrngizgsXgV6ZvP1hseQLvZ%2BfTeeZ1h5iwRcNR231nzFN8xaaIXHIF4P4&X-Amz-Signature=81bb9d0590bf25fd3f39fd14a6faab6e31a05e516960b0fb937abcbd44642c64&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6JRMPDP%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T050937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQD24VgNI5pW0dTH%2F6uQwueZ%2BR%2Bay%2FkwFCO1FxYSAupGvAIgMRy2ak7arUU9iLiKMaHVTRXt%2BU6ExmFPZh5BdoA9az8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeaqJduNxWk1TA1mSrcA2YYb0GBlcJ1HM9CBUOGWzrWsFuhNpQHrCKQ%2FA6FRKVpQlUtJXtMwjx9ODllVEdJkkVhnQx2j%2FQ06MQHo4EUjWyZfeFyPvRCmUoe16K1TJPOqWcwdAUkFk%2BTbFT6DpIMD6%2FkFawjyzKjo92IaxnDHCh6aVNTSc4X0AaO9Wf5In19jZcxALbGAMJHur%2FbfWgEM3TZ85Q%2BH6j%2FW5NiXxfn1y%2Bj8yZ7Ed8H12oiBXDlw5aqN0P0zIbdAP9TpdlvCzN5ChV1kSmoIssQCDWgxp6KP0THegP3Aw7RB9ontHPBKdUedvO5rObPCQnogecgi1jCYb%2F%2FpwXsKiZ4bEF49Gio8ln0pok8f8X%2BSUAe6DdGAKboLjLaRBzAFG4SbVck6aIOreVieFHxa7AqO8APgikYwwcNlbxzbmskp4mJFCSUoM7R5fGT3aHqINhrX6im98ZVRC31aIPC1YxMjFuNBS8H5UNiGjNYnWP%2FTOxxdOFNZdbP0x83kT3astD7h062gSqYSSLnVr0y%2BGCex6Iu7ide4Is%2Bcpy2FFrHTuZkht5dT3oE81ofpG46BNXsAt%2FO2oQiOSGINqybIrQimd9nyMJ1Nu6ML3G1l1ghuJXDh82PsowzwfcQ7Bx%2BeWXRxWQiMKS4kMEGOqUBJ%2FqzzbCNqRXgxtHH3P%2FfoKz9hOcqrQXi6hj3hu0wPVGbyMQuCvFhO9ctyPsTB2rNsRY21xDORZ194v3VZx8X8Dv2peaxxSvy3qKvOphFrN9lEZNs1aSpAtu0gs%2FM6dYO3u9NjqNjNF0uedDTY0ZAmHOB29sirEPk55XhrngizgsXgV6ZvP1hseQLvZ%2BfTeeZ1h5iwRcNR231nzFN8xaaIXHIF4P4&X-Amz-Signature=e3ec0b56cfcc268b862e7b48d8c0db2fc26e4b1f68a60c253d3256c03ab57319&X-Amz-SignedHeaders=host&x-id=GetObject)
