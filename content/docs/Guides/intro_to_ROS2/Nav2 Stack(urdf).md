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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7LU2MN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDboQPwAlh7wr65fiJaQ5st4RNTexbqub5xq1kaL0qmpAiEAluxdr2RqSKUEWp3g11kkoZNRQpJvfUh8%2FoAl4C26EZsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM7J1GVUuJMUFefIyrcAyZZW3JBp%2BuAV%2Fe55DIibV5L6aW9WIhGwVsP%2Fh3%2BVS6XWaZenZaaHM9FLUJVR65Wa4NJFAWxijqgUh7V75cfw0x2YlXSkSZn%2F0XfEFuSCWt8Om2tCB3sgvGJybvOyuFaBg5Vokb1MoURxyWIhZqOhSR1mFIeuTfbQS3la0rbLaBgg%2BQnQIndLTNTv7S2jVAUCjLDF2GeF94dj1Kz93Io0GYMqUiNxbnuMh%2FIwolQmyn6Jv8twfESw58fRaK2pFPTpXbEKVQRUSpHywzAv%2FD%2BxeuVPk0v6y9txRY4W0jnoNHTSc8e5TEZRzuO0UnHIRevU3e7hP%2BzyYiEiB6VqLPNS2a9pcfbMkqfpaLPerNmd3Rdu%2F9RjLTrFs1irA2UTXhdM6cRMVHO8RohTCqFZQN7aLL4GuZ8AqN5ekPapfrdcERHB17ek3N7OmDeroWxiCBGZU8sKezArJl8VQtWxHr6X7QFwU8l6CRm%2FSrYjkVEe96LsH2GutQ2mj40tKwYRtcjSIcz6l21AkJ%2BkOW4EHmoetOc%2Fbl9J29VMFpBj2HdVXEuzdBAMjUUxmhbOccVAW826ZB1TiTgpv3xtaZFFMs%2Fulykfp7BSXPJPeh%2BvoNT7GGqpBP4m51H%2F1LqRtHQMIHWnsIGOqUBftVohPCMNqB2Q2wzi0jxDdJHfT%2FSglYA9PdM2BovG8WqjkjHI%2FUTRxnHMbiHJO1%2FFO2W52izfBhEM5AXfNTNVZNykYysVxUaolhN7qNzuB8TeB3%2FIJ%2BR%2Ba337mT4Gwvskl99hUWWDaOeubydljGIp%2BltHljqVacv8kvECOj9iTOAt6uHa7hici4anGvmDP2Gb2YPJxHYIhNv8G8YDWBWNrjxX%2F9i&X-Amz-Signature=5987f332dc1d7e2503d8e6b885bab3bfd0eae1049009e3f06d13548d72b06c3e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7LU2MN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDboQPwAlh7wr65fiJaQ5st4RNTexbqub5xq1kaL0qmpAiEAluxdr2RqSKUEWp3g11kkoZNRQpJvfUh8%2FoAl4C26EZsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM7J1GVUuJMUFefIyrcAyZZW3JBp%2BuAV%2Fe55DIibV5L6aW9WIhGwVsP%2Fh3%2BVS6XWaZenZaaHM9FLUJVR65Wa4NJFAWxijqgUh7V75cfw0x2YlXSkSZn%2F0XfEFuSCWt8Om2tCB3sgvGJybvOyuFaBg5Vokb1MoURxyWIhZqOhSR1mFIeuTfbQS3la0rbLaBgg%2BQnQIndLTNTv7S2jVAUCjLDF2GeF94dj1Kz93Io0GYMqUiNxbnuMh%2FIwolQmyn6Jv8twfESw58fRaK2pFPTpXbEKVQRUSpHywzAv%2FD%2BxeuVPk0v6y9txRY4W0jnoNHTSc8e5TEZRzuO0UnHIRevU3e7hP%2BzyYiEiB6VqLPNS2a9pcfbMkqfpaLPerNmd3Rdu%2F9RjLTrFs1irA2UTXhdM6cRMVHO8RohTCqFZQN7aLL4GuZ8AqN5ekPapfrdcERHB17ek3N7OmDeroWxiCBGZU8sKezArJl8VQtWxHr6X7QFwU8l6CRm%2FSrYjkVEe96LsH2GutQ2mj40tKwYRtcjSIcz6l21AkJ%2BkOW4EHmoetOc%2Fbl9J29VMFpBj2HdVXEuzdBAMjUUxmhbOccVAW826ZB1TiTgpv3xtaZFFMs%2Fulykfp7BSXPJPeh%2BvoNT7GGqpBP4m51H%2F1LqRtHQMIHWnsIGOqUBftVohPCMNqB2Q2wzi0jxDdJHfT%2FSglYA9PdM2BovG8WqjkjHI%2FUTRxnHMbiHJO1%2FFO2W52izfBhEM5AXfNTNVZNykYysVxUaolhN7qNzuB8TeB3%2FIJ%2BR%2Ba337mT4Gwvskl99hUWWDaOeubydljGIp%2BltHljqVacv8kvECOj9iTOAt6uHa7hici4anGvmDP2Gb2YPJxHYIhNv8G8YDWBWNrjxX%2F9i&X-Amz-Signature=c83a02749746cbea008000202f5b5974c95130de4800c1f24106133902247eac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7LU2MN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDboQPwAlh7wr65fiJaQ5st4RNTexbqub5xq1kaL0qmpAiEAluxdr2RqSKUEWp3g11kkoZNRQpJvfUh8%2FoAl4C26EZsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM7J1GVUuJMUFefIyrcAyZZW3JBp%2BuAV%2Fe55DIibV5L6aW9WIhGwVsP%2Fh3%2BVS6XWaZenZaaHM9FLUJVR65Wa4NJFAWxijqgUh7V75cfw0x2YlXSkSZn%2F0XfEFuSCWt8Om2tCB3sgvGJybvOyuFaBg5Vokb1MoURxyWIhZqOhSR1mFIeuTfbQS3la0rbLaBgg%2BQnQIndLTNTv7S2jVAUCjLDF2GeF94dj1Kz93Io0GYMqUiNxbnuMh%2FIwolQmyn6Jv8twfESw58fRaK2pFPTpXbEKVQRUSpHywzAv%2FD%2BxeuVPk0v6y9txRY4W0jnoNHTSc8e5TEZRzuO0UnHIRevU3e7hP%2BzyYiEiB6VqLPNS2a9pcfbMkqfpaLPerNmd3Rdu%2F9RjLTrFs1irA2UTXhdM6cRMVHO8RohTCqFZQN7aLL4GuZ8AqN5ekPapfrdcERHB17ek3N7OmDeroWxiCBGZU8sKezArJl8VQtWxHr6X7QFwU8l6CRm%2FSrYjkVEe96LsH2GutQ2mj40tKwYRtcjSIcz6l21AkJ%2BkOW4EHmoetOc%2Fbl9J29VMFpBj2HdVXEuzdBAMjUUxmhbOccVAW826ZB1TiTgpv3xtaZFFMs%2Fulykfp7BSXPJPeh%2BvoNT7GGqpBP4m51H%2F1LqRtHQMIHWnsIGOqUBftVohPCMNqB2Q2wzi0jxDdJHfT%2FSglYA9PdM2BovG8WqjkjHI%2FUTRxnHMbiHJO1%2FFO2W52izfBhEM5AXfNTNVZNykYysVxUaolhN7qNzuB8TeB3%2FIJ%2BR%2Ba337mT4Gwvskl99hUWWDaOeubydljGIp%2BltHljqVacv8kvECOj9iTOAt6uHa7hici4anGvmDP2Gb2YPJxHYIhNv8G8YDWBWNrjxX%2F9i&X-Amz-Signature=756b55d39ceeb5e0fd3f087a1a3e127014dc7eaf7ca3bbbb6a102d819bd93e70&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7LU2MN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDboQPwAlh7wr65fiJaQ5st4RNTexbqub5xq1kaL0qmpAiEAluxdr2RqSKUEWp3g11kkoZNRQpJvfUh8%2FoAl4C26EZsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM7J1GVUuJMUFefIyrcAyZZW3JBp%2BuAV%2Fe55DIibV5L6aW9WIhGwVsP%2Fh3%2BVS6XWaZenZaaHM9FLUJVR65Wa4NJFAWxijqgUh7V75cfw0x2YlXSkSZn%2F0XfEFuSCWt8Om2tCB3sgvGJybvOyuFaBg5Vokb1MoURxyWIhZqOhSR1mFIeuTfbQS3la0rbLaBgg%2BQnQIndLTNTv7S2jVAUCjLDF2GeF94dj1Kz93Io0GYMqUiNxbnuMh%2FIwolQmyn6Jv8twfESw58fRaK2pFPTpXbEKVQRUSpHywzAv%2FD%2BxeuVPk0v6y9txRY4W0jnoNHTSc8e5TEZRzuO0UnHIRevU3e7hP%2BzyYiEiB6VqLPNS2a9pcfbMkqfpaLPerNmd3Rdu%2F9RjLTrFs1irA2UTXhdM6cRMVHO8RohTCqFZQN7aLL4GuZ8AqN5ekPapfrdcERHB17ek3N7OmDeroWxiCBGZU8sKezArJl8VQtWxHr6X7QFwU8l6CRm%2FSrYjkVEe96LsH2GutQ2mj40tKwYRtcjSIcz6l21AkJ%2BkOW4EHmoetOc%2Fbl9J29VMFpBj2HdVXEuzdBAMjUUxmhbOccVAW826ZB1TiTgpv3xtaZFFMs%2Fulykfp7BSXPJPeh%2BvoNT7GGqpBP4m51H%2F1LqRtHQMIHWnsIGOqUBftVohPCMNqB2Q2wzi0jxDdJHfT%2FSglYA9PdM2BovG8WqjkjHI%2FUTRxnHMbiHJO1%2FFO2W52izfBhEM5AXfNTNVZNykYysVxUaolhN7qNzuB8TeB3%2FIJ%2BR%2Ba337mT4Gwvskl99hUWWDaOeubydljGIp%2BltHljqVacv8kvECOj9iTOAt6uHa7hici4anGvmDP2Gb2YPJxHYIhNv8G8YDWBWNrjxX%2F9i&X-Amz-Signature=7539741f6730db4622e8f71b5b3a8be546be8e15eae16fb554fe0ad3acb5a156&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7LU2MN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDboQPwAlh7wr65fiJaQ5st4RNTexbqub5xq1kaL0qmpAiEAluxdr2RqSKUEWp3g11kkoZNRQpJvfUh8%2FoAl4C26EZsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM7J1GVUuJMUFefIyrcAyZZW3JBp%2BuAV%2Fe55DIibV5L6aW9WIhGwVsP%2Fh3%2BVS6XWaZenZaaHM9FLUJVR65Wa4NJFAWxijqgUh7V75cfw0x2YlXSkSZn%2F0XfEFuSCWt8Om2tCB3sgvGJybvOyuFaBg5Vokb1MoURxyWIhZqOhSR1mFIeuTfbQS3la0rbLaBgg%2BQnQIndLTNTv7S2jVAUCjLDF2GeF94dj1Kz93Io0GYMqUiNxbnuMh%2FIwolQmyn6Jv8twfESw58fRaK2pFPTpXbEKVQRUSpHywzAv%2FD%2BxeuVPk0v6y9txRY4W0jnoNHTSc8e5TEZRzuO0UnHIRevU3e7hP%2BzyYiEiB6VqLPNS2a9pcfbMkqfpaLPerNmd3Rdu%2F9RjLTrFs1irA2UTXhdM6cRMVHO8RohTCqFZQN7aLL4GuZ8AqN5ekPapfrdcERHB17ek3N7OmDeroWxiCBGZU8sKezArJl8VQtWxHr6X7QFwU8l6CRm%2FSrYjkVEe96LsH2GutQ2mj40tKwYRtcjSIcz6l21AkJ%2BkOW4EHmoetOc%2Fbl9J29VMFpBj2HdVXEuzdBAMjUUxmhbOccVAW826ZB1TiTgpv3xtaZFFMs%2Fulykfp7BSXPJPeh%2BvoNT7GGqpBP4m51H%2F1LqRtHQMIHWnsIGOqUBftVohPCMNqB2Q2wzi0jxDdJHfT%2FSglYA9PdM2BovG8WqjkjHI%2FUTRxnHMbiHJO1%2FFO2W52izfBhEM5AXfNTNVZNykYysVxUaolhN7qNzuB8TeB3%2FIJ%2BR%2Ba337mT4Gwvskl99hUWWDaOeubydljGIp%2BltHljqVacv8kvECOj9iTOAt6uHa7hici4anGvmDP2Gb2YPJxHYIhNv8G8YDWBWNrjxX%2F9i&X-Amz-Signature=33004214ec8bbe86af0bd459c6fc505b4a2791746bee9aaed76da415da53bca8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7LU2MN%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDboQPwAlh7wr65fiJaQ5st4RNTexbqub5xq1kaL0qmpAiEAluxdr2RqSKUEWp3g11kkoZNRQpJvfUh8%2FoAl4C26EZsqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNM7J1GVUuJMUFefIyrcAyZZW3JBp%2BuAV%2Fe55DIibV5L6aW9WIhGwVsP%2Fh3%2BVS6XWaZenZaaHM9FLUJVR65Wa4NJFAWxijqgUh7V75cfw0x2YlXSkSZn%2F0XfEFuSCWt8Om2tCB3sgvGJybvOyuFaBg5Vokb1MoURxyWIhZqOhSR1mFIeuTfbQS3la0rbLaBgg%2BQnQIndLTNTv7S2jVAUCjLDF2GeF94dj1Kz93Io0GYMqUiNxbnuMh%2FIwolQmyn6Jv8twfESw58fRaK2pFPTpXbEKVQRUSpHywzAv%2FD%2BxeuVPk0v6y9txRY4W0jnoNHTSc8e5TEZRzuO0UnHIRevU3e7hP%2BzyYiEiB6VqLPNS2a9pcfbMkqfpaLPerNmd3Rdu%2F9RjLTrFs1irA2UTXhdM6cRMVHO8RohTCqFZQN7aLL4GuZ8AqN5ekPapfrdcERHB17ek3N7OmDeroWxiCBGZU8sKezArJl8VQtWxHr6X7QFwU8l6CRm%2FSrYjkVEe96LsH2GutQ2mj40tKwYRtcjSIcz6l21AkJ%2BkOW4EHmoetOc%2Fbl9J29VMFpBj2HdVXEuzdBAMjUUxmhbOccVAW826ZB1TiTgpv3xtaZFFMs%2Fulykfp7BSXPJPeh%2BvoNT7GGqpBP4m51H%2F1LqRtHQMIHWnsIGOqUBftVohPCMNqB2Q2wzi0jxDdJHfT%2FSglYA9PdM2BovG8WqjkjHI%2FUTRxnHMbiHJO1%2FFO2W52izfBhEM5AXfNTNVZNykYysVxUaolhN7qNzuB8TeB3%2FIJ%2BR%2Ba337mT4Gwvskl99hUWWDaOeubydljGIp%2BltHljqVacv8kvECOj9iTOAt6uHa7hici4anGvmDP2Gb2YPJxHYIhNv8G8YDWBWNrjxX%2F9i&X-Amz-Signature=788d8abb8720bcc6b8e635c84ac9883ecc28dd7b13153aa982abc1d6cc01e447&X-Amz-SignedHeaders=host&x-id=GetObject)
