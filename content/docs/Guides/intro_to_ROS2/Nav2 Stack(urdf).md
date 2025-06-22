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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZMRF7XD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIA2YpQN0D17xNgl702Idmw8yeVsdwqNhixvvuPYCbrqsAiEA%2BJIbCfd7PUDQKsU%2FCi8ZJeRMDucAzLpYCR3fz8YStakqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuUt9Ob7SLjBOqRxCrcA66%2Bp9V5Rt1uWSFrDpoJ5zwBUD90YIs2qKWVbqVo82OPfyLpQ3%2B2VJyLQ4Fmkv2t0cYkjgs9eekIrgpNfLBXGcZcuMfnvKbkBV%2B7nYTBlcZEo6ElpLFdrc7vNiF%2BnXYClcYqnuGXn1Oy2YzB25FMI%2BHTZ%2BKl4l%2BQWV8VBHiRyS%2BwL2UXROX356%2BgC9tf2I74av3GiK2fRzrkEaEvMXLi0kEE5Lz%2FAGiZDKefQmRH2xuV8vAFGVRgDN0W8N1eN68rqeyyiFpGlVN50LludxuN6kytKOFLu9JwLwXHwuahiulNDdHrEepdxIIP4OZTEj3ffCprBFfRfwXAg6dpSiLoEGbPmdPiW88KR7U7zQCQTDf2Et6MpTGnTPgg5%2BR1Hp58KH6KuhbTiiPcakAudV8NWhJKuB7XiTX0bn5dRxGyrAgnJIFAdqwd%2BaSubKaV1MtQl4GDZmXusSixRaaad344EO%2B6Kt8RM0v%2BmWDqacguJSBvHLJ0o1sGmxMva2kHuekL84GMwdZycaHT1xpOea0QqdsJNxsUY6%2BNctQBmdVqr6obX5pKrClsM8s%2FhfMbzNqVREkWdLsNcQWXTwqwUqKOf3NpS%2Bi9HpO%2Bboo2sWmsa2jt%2B24iO57qYC9w%2FJabMKrI38IGOqUBC20QlX9YLEd0mU6kcbRwCWpS59xReAT8Da8EtFZ%2FWL%2FFolRtpeVylTWI%2BRv6rgbz4LLd6p9PHDaNA8XCo16Ox1yBSYDaPiqwEYqNwVHq0aF5xY9bEfpjrFCJgONkKJugSAuIeKyGltKiQ1MHix%2BFGO%2F9g2ZLqyJ3e4WwBtWYDPIrYk0ui8UsJquQkMOtv%2FK9XgLqhTGkSzGSBfdnWxUxd0wi8wFO&X-Amz-Signature=d116ffc47099629db1873a96792fd590ae08b6ac9de5eacc1f3a68d56da0689c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZMRF7XD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIA2YpQN0D17xNgl702Idmw8yeVsdwqNhixvvuPYCbrqsAiEA%2BJIbCfd7PUDQKsU%2FCi8ZJeRMDucAzLpYCR3fz8YStakqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuUt9Ob7SLjBOqRxCrcA66%2Bp9V5Rt1uWSFrDpoJ5zwBUD90YIs2qKWVbqVo82OPfyLpQ3%2B2VJyLQ4Fmkv2t0cYkjgs9eekIrgpNfLBXGcZcuMfnvKbkBV%2B7nYTBlcZEo6ElpLFdrc7vNiF%2BnXYClcYqnuGXn1Oy2YzB25FMI%2BHTZ%2BKl4l%2BQWV8VBHiRyS%2BwL2UXROX356%2BgC9tf2I74av3GiK2fRzrkEaEvMXLi0kEE5Lz%2FAGiZDKefQmRH2xuV8vAFGVRgDN0W8N1eN68rqeyyiFpGlVN50LludxuN6kytKOFLu9JwLwXHwuahiulNDdHrEepdxIIP4OZTEj3ffCprBFfRfwXAg6dpSiLoEGbPmdPiW88KR7U7zQCQTDf2Et6MpTGnTPgg5%2BR1Hp58KH6KuhbTiiPcakAudV8NWhJKuB7XiTX0bn5dRxGyrAgnJIFAdqwd%2BaSubKaV1MtQl4GDZmXusSixRaaad344EO%2B6Kt8RM0v%2BmWDqacguJSBvHLJ0o1sGmxMva2kHuekL84GMwdZycaHT1xpOea0QqdsJNxsUY6%2BNctQBmdVqr6obX5pKrClsM8s%2FhfMbzNqVREkWdLsNcQWXTwqwUqKOf3NpS%2Bi9HpO%2Bboo2sWmsa2jt%2B24iO57qYC9w%2FJabMKrI38IGOqUBC20QlX9YLEd0mU6kcbRwCWpS59xReAT8Da8EtFZ%2FWL%2FFolRtpeVylTWI%2BRv6rgbz4LLd6p9PHDaNA8XCo16Ox1yBSYDaPiqwEYqNwVHq0aF5xY9bEfpjrFCJgONkKJugSAuIeKyGltKiQ1MHix%2BFGO%2F9g2ZLqyJ3e4WwBtWYDPIrYk0ui8UsJquQkMOtv%2FK9XgLqhTGkSzGSBfdnWxUxd0wi8wFO&X-Amz-Signature=a4fd33047d2d8b97c450be00265ddbd53b7cb9dcc7bfb51dc9c548e80ff6083f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZMRF7XD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIA2YpQN0D17xNgl702Idmw8yeVsdwqNhixvvuPYCbrqsAiEA%2BJIbCfd7PUDQKsU%2FCi8ZJeRMDucAzLpYCR3fz8YStakqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuUt9Ob7SLjBOqRxCrcA66%2Bp9V5Rt1uWSFrDpoJ5zwBUD90YIs2qKWVbqVo82OPfyLpQ3%2B2VJyLQ4Fmkv2t0cYkjgs9eekIrgpNfLBXGcZcuMfnvKbkBV%2B7nYTBlcZEo6ElpLFdrc7vNiF%2BnXYClcYqnuGXn1Oy2YzB25FMI%2BHTZ%2BKl4l%2BQWV8VBHiRyS%2BwL2UXROX356%2BgC9tf2I74av3GiK2fRzrkEaEvMXLi0kEE5Lz%2FAGiZDKefQmRH2xuV8vAFGVRgDN0W8N1eN68rqeyyiFpGlVN50LludxuN6kytKOFLu9JwLwXHwuahiulNDdHrEepdxIIP4OZTEj3ffCprBFfRfwXAg6dpSiLoEGbPmdPiW88KR7U7zQCQTDf2Et6MpTGnTPgg5%2BR1Hp58KH6KuhbTiiPcakAudV8NWhJKuB7XiTX0bn5dRxGyrAgnJIFAdqwd%2BaSubKaV1MtQl4GDZmXusSixRaaad344EO%2B6Kt8RM0v%2BmWDqacguJSBvHLJ0o1sGmxMva2kHuekL84GMwdZycaHT1xpOea0QqdsJNxsUY6%2BNctQBmdVqr6obX5pKrClsM8s%2FhfMbzNqVREkWdLsNcQWXTwqwUqKOf3NpS%2Bi9HpO%2Bboo2sWmsa2jt%2B24iO57qYC9w%2FJabMKrI38IGOqUBC20QlX9YLEd0mU6kcbRwCWpS59xReAT8Da8EtFZ%2FWL%2FFolRtpeVylTWI%2BRv6rgbz4LLd6p9PHDaNA8XCo16Ox1yBSYDaPiqwEYqNwVHq0aF5xY9bEfpjrFCJgONkKJugSAuIeKyGltKiQ1MHix%2BFGO%2F9g2ZLqyJ3e4WwBtWYDPIrYk0ui8UsJquQkMOtv%2FK9XgLqhTGkSzGSBfdnWxUxd0wi8wFO&X-Amz-Signature=685eae2d4854391f04f50ac52e99d937b71a7cfe06dc762f26cdbe3e25e1379a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZMRF7XD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIA2YpQN0D17xNgl702Idmw8yeVsdwqNhixvvuPYCbrqsAiEA%2BJIbCfd7PUDQKsU%2FCi8ZJeRMDucAzLpYCR3fz8YStakqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuUt9Ob7SLjBOqRxCrcA66%2Bp9V5Rt1uWSFrDpoJ5zwBUD90YIs2qKWVbqVo82OPfyLpQ3%2B2VJyLQ4Fmkv2t0cYkjgs9eekIrgpNfLBXGcZcuMfnvKbkBV%2B7nYTBlcZEo6ElpLFdrc7vNiF%2BnXYClcYqnuGXn1Oy2YzB25FMI%2BHTZ%2BKl4l%2BQWV8VBHiRyS%2BwL2UXROX356%2BgC9tf2I74av3GiK2fRzrkEaEvMXLi0kEE5Lz%2FAGiZDKefQmRH2xuV8vAFGVRgDN0W8N1eN68rqeyyiFpGlVN50LludxuN6kytKOFLu9JwLwXHwuahiulNDdHrEepdxIIP4OZTEj3ffCprBFfRfwXAg6dpSiLoEGbPmdPiW88KR7U7zQCQTDf2Et6MpTGnTPgg5%2BR1Hp58KH6KuhbTiiPcakAudV8NWhJKuB7XiTX0bn5dRxGyrAgnJIFAdqwd%2BaSubKaV1MtQl4GDZmXusSixRaaad344EO%2B6Kt8RM0v%2BmWDqacguJSBvHLJ0o1sGmxMva2kHuekL84GMwdZycaHT1xpOea0QqdsJNxsUY6%2BNctQBmdVqr6obX5pKrClsM8s%2FhfMbzNqVREkWdLsNcQWXTwqwUqKOf3NpS%2Bi9HpO%2Bboo2sWmsa2jt%2B24iO57qYC9w%2FJabMKrI38IGOqUBC20QlX9YLEd0mU6kcbRwCWpS59xReAT8Da8EtFZ%2FWL%2FFolRtpeVylTWI%2BRv6rgbz4LLd6p9PHDaNA8XCo16Ox1yBSYDaPiqwEYqNwVHq0aF5xY9bEfpjrFCJgONkKJugSAuIeKyGltKiQ1MHix%2BFGO%2F9g2ZLqyJ3e4WwBtWYDPIrYk0ui8UsJquQkMOtv%2FK9XgLqhTGkSzGSBfdnWxUxd0wi8wFO&X-Amz-Signature=c70ab001e36b6815bdfe732d8f74177bd853ee17f9b4b63a8ba58c69dd5b7b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZMRF7XD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIA2YpQN0D17xNgl702Idmw8yeVsdwqNhixvvuPYCbrqsAiEA%2BJIbCfd7PUDQKsU%2FCi8ZJeRMDucAzLpYCR3fz8YStakqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuUt9Ob7SLjBOqRxCrcA66%2Bp9V5Rt1uWSFrDpoJ5zwBUD90YIs2qKWVbqVo82OPfyLpQ3%2B2VJyLQ4Fmkv2t0cYkjgs9eekIrgpNfLBXGcZcuMfnvKbkBV%2B7nYTBlcZEo6ElpLFdrc7vNiF%2BnXYClcYqnuGXn1Oy2YzB25FMI%2BHTZ%2BKl4l%2BQWV8VBHiRyS%2BwL2UXROX356%2BgC9tf2I74av3GiK2fRzrkEaEvMXLi0kEE5Lz%2FAGiZDKefQmRH2xuV8vAFGVRgDN0W8N1eN68rqeyyiFpGlVN50LludxuN6kytKOFLu9JwLwXHwuahiulNDdHrEepdxIIP4OZTEj3ffCprBFfRfwXAg6dpSiLoEGbPmdPiW88KR7U7zQCQTDf2Et6MpTGnTPgg5%2BR1Hp58KH6KuhbTiiPcakAudV8NWhJKuB7XiTX0bn5dRxGyrAgnJIFAdqwd%2BaSubKaV1MtQl4GDZmXusSixRaaad344EO%2B6Kt8RM0v%2BmWDqacguJSBvHLJ0o1sGmxMva2kHuekL84GMwdZycaHT1xpOea0QqdsJNxsUY6%2BNctQBmdVqr6obX5pKrClsM8s%2FhfMbzNqVREkWdLsNcQWXTwqwUqKOf3NpS%2Bi9HpO%2Bboo2sWmsa2jt%2B24iO57qYC9w%2FJabMKrI38IGOqUBC20QlX9YLEd0mU6kcbRwCWpS59xReAT8Da8EtFZ%2FWL%2FFolRtpeVylTWI%2BRv6rgbz4LLd6p9PHDaNA8XCo16Ox1yBSYDaPiqwEYqNwVHq0aF5xY9bEfpjrFCJgONkKJugSAuIeKyGltKiQ1MHix%2BFGO%2F9g2ZLqyJ3e4WwBtWYDPIrYk0ui8UsJquQkMOtv%2FK9XgLqhTGkSzGSBfdnWxUxd0wi8wFO&X-Amz-Signature=be7cbd1ce42a857a48558232acb364f45762f4586b8aa5efc2395f27db192145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZMRF7XD%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIA2YpQN0D17xNgl702Idmw8yeVsdwqNhixvvuPYCbrqsAiEA%2BJIbCfd7PUDQKsU%2FCi8ZJeRMDucAzLpYCR3fz8YStakqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKuUt9Ob7SLjBOqRxCrcA66%2Bp9V5Rt1uWSFrDpoJ5zwBUD90YIs2qKWVbqVo82OPfyLpQ3%2B2VJyLQ4Fmkv2t0cYkjgs9eekIrgpNfLBXGcZcuMfnvKbkBV%2B7nYTBlcZEo6ElpLFdrc7vNiF%2BnXYClcYqnuGXn1Oy2YzB25FMI%2BHTZ%2BKl4l%2BQWV8VBHiRyS%2BwL2UXROX356%2BgC9tf2I74av3GiK2fRzrkEaEvMXLi0kEE5Lz%2FAGiZDKefQmRH2xuV8vAFGVRgDN0W8N1eN68rqeyyiFpGlVN50LludxuN6kytKOFLu9JwLwXHwuahiulNDdHrEepdxIIP4OZTEj3ffCprBFfRfwXAg6dpSiLoEGbPmdPiW88KR7U7zQCQTDf2Et6MpTGnTPgg5%2BR1Hp58KH6KuhbTiiPcakAudV8NWhJKuB7XiTX0bn5dRxGyrAgnJIFAdqwd%2BaSubKaV1MtQl4GDZmXusSixRaaad344EO%2B6Kt8RM0v%2BmWDqacguJSBvHLJ0o1sGmxMva2kHuekL84GMwdZycaHT1xpOea0QqdsJNxsUY6%2BNctQBmdVqr6obX5pKrClsM8s%2FhfMbzNqVREkWdLsNcQWXTwqwUqKOf3NpS%2Bi9HpO%2Bboo2sWmsa2jt%2B24iO57qYC9w%2FJabMKrI38IGOqUBC20QlX9YLEd0mU6kcbRwCWpS59xReAT8Da8EtFZ%2FWL%2FFolRtpeVylTWI%2BRv6rgbz4LLd6p9PHDaNA8XCo16Ox1yBSYDaPiqwEYqNwVHq0aF5xY9bEfpjrFCJgONkKJugSAuIeKyGltKiQ1MHix%2BFGO%2F9g2ZLqyJ3e4WwBtWYDPIrYk0ui8UsJquQkMOtv%2FK9XgLqhTGkSzGSBfdnWxUxd0wi8wFO&X-Amz-Signature=059c7c61b3aa726ad4ed49940cad67e7625212c5f5d599125fdacd44b5c754c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
