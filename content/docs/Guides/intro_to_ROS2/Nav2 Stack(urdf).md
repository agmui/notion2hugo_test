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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WEOUECD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLnjE%2BVFRSn%2Fdz5uA03VJ3T%2FArUDx1cxYnfCILU2pfAAiEAxdNdM%2BGOojNthug%2FgOmlS6XgnVHA5knsq33zFZ43ZuYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp%2F07vK%2F40yMtXKICrcAwMBexw%2Fw5tFiliD9BijB0x85UtmOkP6oVWM9WQZwBQeA4bZb0HIScxf3Q2wLjszrESx3qdmi7Vtfz0fxo48o%2BWLiEYu57mEPm1eQsdqwOG7sDExSEnwPVKIyA66CMY9RNdBn3YcHb7ihm5jFE7scKnZ7i43u%2BtOrlKU3qK9Lp4enK7%2B3LCrIeyKItSMylks3dpMHwaRazYC0jWqdP1AT4a5BY1viumNETyCKxRwPbJVniEU7vSZ8ihbwyYEoy1Fiw8CJrKA0KFtXCPRQkMw2hbp930OTeu5oXvmh3vC1%2F5lyGOe2Yy69QtwsudNl7vw8AZxaus3Dfr3r3fmrNJvCmkCwL0iaVdQvdehkn9jR%2BRunNcPaHgDTba3nKlG6ryYv9LUz3UUo1RrgE8MqxJ40ciVk6F%2FioesASK17bmhephxK6GNXc6OS1FCJA4bNlCuXqMzQTN36x2vOju%2FOq4N9EytoNpCPtJ8pWTb5RmZNNxlGji917jOqPfQG%2FWOO%2FySuFC%2FBdmuKyijUhs8KhwuiXoFMSA8sNoP2u43RPcC3kFDSbctHXOaTEQo590ao1fFijRJBC9EpWD5bKpreln2hCwKlBBhRqEaXqD%2BbjUMk3V0v6vl6L479myGlMsIMN7d0MIGOqUBK6Zvb%2BvyYuzso4c%2F20cPB5M7B0ZmIqafGmRElhpfEonI7J577dG0ZFvUWsw0nVgrbm39zU9FOa8s7HTG2uRfN53mwsNAnh8kc3UT%2B8h%2FUWxzZw4%2B%2FwHPLrP7zygBKPpsQRfpE8Qmi8zOymT79n0WevxzF%2BteGuBJIRmOTmPBVUA9n3FlfVjpJJCSq%2FpUzwfoxa%2BaC%2BWE%2FYMMJGgHwsjyC3BK0ht%2B&X-Amz-Signature=062fc2ef3ba51390b479d65b1dee81ac69aedb7a99a3837b054ca4f020084048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WEOUECD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLnjE%2BVFRSn%2Fdz5uA03VJ3T%2FArUDx1cxYnfCILU2pfAAiEAxdNdM%2BGOojNthug%2FgOmlS6XgnVHA5knsq33zFZ43ZuYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp%2F07vK%2F40yMtXKICrcAwMBexw%2Fw5tFiliD9BijB0x85UtmOkP6oVWM9WQZwBQeA4bZb0HIScxf3Q2wLjszrESx3qdmi7Vtfz0fxo48o%2BWLiEYu57mEPm1eQsdqwOG7sDExSEnwPVKIyA66CMY9RNdBn3YcHb7ihm5jFE7scKnZ7i43u%2BtOrlKU3qK9Lp4enK7%2B3LCrIeyKItSMylks3dpMHwaRazYC0jWqdP1AT4a5BY1viumNETyCKxRwPbJVniEU7vSZ8ihbwyYEoy1Fiw8CJrKA0KFtXCPRQkMw2hbp930OTeu5oXvmh3vC1%2F5lyGOe2Yy69QtwsudNl7vw8AZxaus3Dfr3r3fmrNJvCmkCwL0iaVdQvdehkn9jR%2BRunNcPaHgDTba3nKlG6ryYv9LUz3UUo1RrgE8MqxJ40ciVk6F%2FioesASK17bmhephxK6GNXc6OS1FCJA4bNlCuXqMzQTN36x2vOju%2FOq4N9EytoNpCPtJ8pWTb5RmZNNxlGji917jOqPfQG%2FWOO%2FySuFC%2FBdmuKyijUhs8KhwuiXoFMSA8sNoP2u43RPcC3kFDSbctHXOaTEQo590ao1fFijRJBC9EpWD5bKpreln2hCwKlBBhRqEaXqD%2BbjUMk3V0v6vl6L479myGlMsIMN7d0MIGOqUBK6Zvb%2BvyYuzso4c%2F20cPB5M7B0ZmIqafGmRElhpfEonI7J577dG0ZFvUWsw0nVgrbm39zU9FOa8s7HTG2uRfN53mwsNAnh8kc3UT%2B8h%2FUWxzZw4%2B%2FwHPLrP7zygBKPpsQRfpE8Qmi8zOymT79n0WevxzF%2BteGuBJIRmOTmPBVUA9n3FlfVjpJJCSq%2FpUzwfoxa%2BaC%2BWE%2FYMMJGgHwsjyC3BK0ht%2B&X-Amz-Signature=ee6dc49af91e98e94a83cddafb588074a6a00ee276c46b2846a88217eb834bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WEOUECD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLnjE%2BVFRSn%2Fdz5uA03VJ3T%2FArUDx1cxYnfCILU2pfAAiEAxdNdM%2BGOojNthug%2FgOmlS6XgnVHA5knsq33zFZ43ZuYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp%2F07vK%2F40yMtXKICrcAwMBexw%2Fw5tFiliD9BijB0x85UtmOkP6oVWM9WQZwBQeA4bZb0HIScxf3Q2wLjszrESx3qdmi7Vtfz0fxo48o%2BWLiEYu57mEPm1eQsdqwOG7sDExSEnwPVKIyA66CMY9RNdBn3YcHb7ihm5jFE7scKnZ7i43u%2BtOrlKU3qK9Lp4enK7%2B3LCrIeyKItSMylks3dpMHwaRazYC0jWqdP1AT4a5BY1viumNETyCKxRwPbJVniEU7vSZ8ihbwyYEoy1Fiw8CJrKA0KFtXCPRQkMw2hbp930OTeu5oXvmh3vC1%2F5lyGOe2Yy69QtwsudNl7vw8AZxaus3Dfr3r3fmrNJvCmkCwL0iaVdQvdehkn9jR%2BRunNcPaHgDTba3nKlG6ryYv9LUz3UUo1RrgE8MqxJ40ciVk6F%2FioesASK17bmhephxK6GNXc6OS1FCJA4bNlCuXqMzQTN36x2vOju%2FOq4N9EytoNpCPtJ8pWTb5RmZNNxlGji917jOqPfQG%2FWOO%2FySuFC%2FBdmuKyijUhs8KhwuiXoFMSA8sNoP2u43RPcC3kFDSbctHXOaTEQo590ao1fFijRJBC9EpWD5bKpreln2hCwKlBBhRqEaXqD%2BbjUMk3V0v6vl6L479myGlMsIMN7d0MIGOqUBK6Zvb%2BvyYuzso4c%2F20cPB5M7B0ZmIqafGmRElhpfEonI7J577dG0ZFvUWsw0nVgrbm39zU9FOa8s7HTG2uRfN53mwsNAnh8kc3UT%2B8h%2FUWxzZw4%2B%2FwHPLrP7zygBKPpsQRfpE8Qmi8zOymT79n0WevxzF%2BteGuBJIRmOTmPBVUA9n3FlfVjpJJCSq%2FpUzwfoxa%2BaC%2BWE%2FYMMJGgHwsjyC3BK0ht%2B&X-Amz-Signature=e047415644da6e471c2e8ece9446108b133686e91c9928c2f181d2f4ba9a5c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WEOUECD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLnjE%2BVFRSn%2Fdz5uA03VJ3T%2FArUDx1cxYnfCILU2pfAAiEAxdNdM%2BGOojNthug%2FgOmlS6XgnVHA5knsq33zFZ43ZuYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp%2F07vK%2F40yMtXKICrcAwMBexw%2Fw5tFiliD9BijB0x85UtmOkP6oVWM9WQZwBQeA4bZb0HIScxf3Q2wLjszrESx3qdmi7Vtfz0fxo48o%2BWLiEYu57mEPm1eQsdqwOG7sDExSEnwPVKIyA66CMY9RNdBn3YcHb7ihm5jFE7scKnZ7i43u%2BtOrlKU3qK9Lp4enK7%2B3LCrIeyKItSMylks3dpMHwaRazYC0jWqdP1AT4a5BY1viumNETyCKxRwPbJVniEU7vSZ8ihbwyYEoy1Fiw8CJrKA0KFtXCPRQkMw2hbp930OTeu5oXvmh3vC1%2F5lyGOe2Yy69QtwsudNl7vw8AZxaus3Dfr3r3fmrNJvCmkCwL0iaVdQvdehkn9jR%2BRunNcPaHgDTba3nKlG6ryYv9LUz3UUo1RrgE8MqxJ40ciVk6F%2FioesASK17bmhephxK6GNXc6OS1FCJA4bNlCuXqMzQTN36x2vOju%2FOq4N9EytoNpCPtJ8pWTb5RmZNNxlGji917jOqPfQG%2FWOO%2FySuFC%2FBdmuKyijUhs8KhwuiXoFMSA8sNoP2u43RPcC3kFDSbctHXOaTEQo590ao1fFijRJBC9EpWD5bKpreln2hCwKlBBhRqEaXqD%2BbjUMk3V0v6vl6L479myGlMsIMN7d0MIGOqUBK6Zvb%2BvyYuzso4c%2F20cPB5M7B0ZmIqafGmRElhpfEonI7J577dG0ZFvUWsw0nVgrbm39zU9FOa8s7HTG2uRfN53mwsNAnh8kc3UT%2B8h%2FUWxzZw4%2B%2FwHPLrP7zygBKPpsQRfpE8Qmi8zOymT79n0WevxzF%2BteGuBJIRmOTmPBVUA9n3FlfVjpJJCSq%2FpUzwfoxa%2BaC%2BWE%2FYMMJGgHwsjyC3BK0ht%2B&X-Amz-Signature=83971190869231a6ba997f2c94785caae46e7a2388504759bb7132226f6c3548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WEOUECD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLnjE%2BVFRSn%2Fdz5uA03VJ3T%2FArUDx1cxYnfCILU2pfAAiEAxdNdM%2BGOojNthug%2FgOmlS6XgnVHA5knsq33zFZ43ZuYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp%2F07vK%2F40yMtXKICrcAwMBexw%2Fw5tFiliD9BijB0x85UtmOkP6oVWM9WQZwBQeA4bZb0HIScxf3Q2wLjszrESx3qdmi7Vtfz0fxo48o%2BWLiEYu57mEPm1eQsdqwOG7sDExSEnwPVKIyA66CMY9RNdBn3YcHb7ihm5jFE7scKnZ7i43u%2BtOrlKU3qK9Lp4enK7%2B3LCrIeyKItSMylks3dpMHwaRazYC0jWqdP1AT4a5BY1viumNETyCKxRwPbJVniEU7vSZ8ihbwyYEoy1Fiw8CJrKA0KFtXCPRQkMw2hbp930OTeu5oXvmh3vC1%2F5lyGOe2Yy69QtwsudNl7vw8AZxaus3Dfr3r3fmrNJvCmkCwL0iaVdQvdehkn9jR%2BRunNcPaHgDTba3nKlG6ryYv9LUz3UUo1RrgE8MqxJ40ciVk6F%2FioesASK17bmhephxK6GNXc6OS1FCJA4bNlCuXqMzQTN36x2vOju%2FOq4N9EytoNpCPtJ8pWTb5RmZNNxlGji917jOqPfQG%2FWOO%2FySuFC%2FBdmuKyijUhs8KhwuiXoFMSA8sNoP2u43RPcC3kFDSbctHXOaTEQo590ao1fFijRJBC9EpWD5bKpreln2hCwKlBBhRqEaXqD%2BbjUMk3V0v6vl6L479myGlMsIMN7d0MIGOqUBK6Zvb%2BvyYuzso4c%2F20cPB5M7B0ZmIqafGmRElhpfEonI7J577dG0ZFvUWsw0nVgrbm39zU9FOa8s7HTG2uRfN53mwsNAnh8kc3UT%2B8h%2FUWxzZw4%2B%2FwHPLrP7zygBKPpsQRfpE8Qmi8zOymT79n0WevxzF%2BteGuBJIRmOTmPBVUA9n3FlfVjpJJCSq%2FpUzwfoxa%2BaC%2BWE%2FYMMJGgHwsjyC3BK0ht%2B&X-Amz-Signature=65d5af6d2c3f9d869a49ff78a0c514c031426af82c6391e5e8d809f4d34c6b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WEOUECD%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLnjE%2BVFRSn%2Fdz5uA03VJ3T%2FArUDx1cxYnfCILU2pfAAiEAxdNdM%2BGOojNthug%2FgOmlS6XgnVHA5knsq33zFZ43ZuYqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp%2F07vK%2F40yMtXKICrcAwMBexw%2Fw5tFiliD9BijB0x85UtmOkP6oVWM9WQZwBQeA4bZb0HIScxf3Q2wLjszrESx3qdmi7Vtfz0fxo48o%2BWLiEYu57mEPm1eQsdqwOG7sDExSEnwPVKIyA66CMY9RNdBn3YcHb7ihm5jFE7scKnZ7i43u%2BtOrlKU3qK9Lp4enK7%2B3LCrIeyKItSMylks3dpMHwaRazYC0jWqdP1AT4a5BY1viumNETyCKxRwPbJVniEU7vSZ8ihbwyYEoy1Fiw8CJrKA0KFtXCPRQkMw2hbp930OTeu5oXvmh3vC1%2F5lyGOe2Yy69QtwsudNl7vw8AZxaus3Dfr3r3fmrNJvCmkCwL0iaVdQvdehkn9jR%2BRunNcPaHgDTba3nKlG6ryYv9LUz3UUo1RrgE8MqxJ40ciVk6F%2FioesASK17bmhephxK6GNXc6OS1FCJA4bNlCuXqMzQTN36x2vOju%2FOq4N9EytoNpCPtJ8pWTb5RmZNNxlGji917jOqPfQG%2FWOO%2FySuFC%2FBdmuKyijUhs8KhwuiXoFMSA8sNoP2u43RPcC3kFDSbctHXOaTEQo590ao1fFijRJBC9EpWD5bKpreln2hCwKlBBhRqEaXqD%2BbjUMk3V0v6vl6L479myGlMsIMN7d0MIGOqUBK6Zvb%2BvyYuzso4c%2F20cPB5M7B0ZmIqafGmRElhpfEonI7J577dG0ZFvUWsw0nVgrbm39zU9FOa8s7HTG2uRfN53mwsNAnh8kc3UT%2B8h%2FUWxzZw4%2B%2FwHPLrP7zygBKPpsQRfpE8Qmi8zOymT79n0WevxzF%2BteGuBJIRmOTmPBVUA9n3FlfVjpJJCSq%2FpUzwfoxa%2BaC%2BWE%2FYMMJGgHwsjyC3BK0ht%2B&X-Amz-Signature=91a9ea43989d4ac84781e6a140f631e1a6b31eea11c50d8eb2641e752d86209d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
