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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVPCIP7J%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDga5Lg59KBJrIUwLjevcMdoZI2ahW71TpPLQpg9fYSBgIgNmfnYuFXEFXgExnHS%2FB5l%2FLQKy5bKA%2F2FWqCZNH9LlYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMI%2FGXLHY6BdLJq6SrcA3GHkopqXcW5c7QNi5KwsDftoDVTP%2BIIgc5dBvAAVg75oav0HMMb3LcG3h2qFHTd4RFU372TFfph6q9TvMrg7OwuoICF%2Bvb1xxr6mLD%2BXqPuvMXCPRtc5qwI90asrwzgZSCwFh6hKsV9jzofKqYyxsd69J87HYf8N1Vk2wjtSRsclM5XlGu4%2BvXbJMAfBfaxkUntMaCVURcAPwdAqLKFilrUeT2lu57SM%2BBWFEQQ%2FspNbcdsZgwiMl7cZKjrdR8lAzSOQSebZhC9xy1k8%2FKA1Bx9WWcKylFAohfmls50WMaPd57ECdFi6vMDmBbDL%2F0KRTVBCnAk8mqhpqjLVOKeCEiKB%2B%2Fs4cqTBK30Zo8KrQNA2bUlRwmCGzmO4e3sjsnmGJxk9dpNOLr93TNzQUFOqMFbdg193nVAgIwq2vquCx9453pn%2FV8p7yUDu1TrchnSwcayIdH21pFDYJ2Mriv4i1NqiVl%2Bc5Ks8IuUm8tFJ4mbetMcPtbY0ZFLgD6Xv7MAvZq4Okt%2B00CYuGCMgmMTSGPoMJgc32rRJR1iuhElvfbEw%2FD0zl%2BSKs6NXeLj0enyJvNl6om9AiRV2QEqZb0aA8n%2Fz6MExnmYimMGv4%2B2TzHN02Le5%2FlHQRbXuTDXMMuVsMEGOqUBsaeeMD%2BUvXSYGONvAJN3PtrdO1UWtSQhE4K4TC3TJ8DhEIrB6%2BudY53GXN0WGOTFHUiQgyd4RkEfAGnx3S%2BZtbjukY%2B6Zjrl4ZGvqVNZBps6avsyV%2BKOEzquSrZg%2BSFzPbFPmDoUraGY0piJjZTuuO2XmCk0JOGkeN74C6YAiRALWyS1YxDsZSYHH1plSl86Z46RBt7ygW9xV6tvB0qh9nhe8JPU&X-Amz-Signature=b65d5ff0381a5183f73989627c62392a09f21fe2cf577786c8cdb7b44ba51f72&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVPCIP7J%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDga5Lg59KBJrIUwLjevcMdoZI2ahW71TpPLQpg9fYSBgIgNmfnYuFXEFXgExnHS%2FB5l%2FLQKy5bKA%2F2FWqCZNH9LlYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMI%2FGXLHY6BdLJq6SrcA3GHkopqXcW5c7QNi5KwsDftoDVTP%2BIIgc5dBvAAVg75oav0HMMb3LcG3h2qFHTd4RFU372TFfph6q9TvMrg7OwuoICF%2Bvb1xxr6mLD%2BXqPuvMXCPRtc5qwI90asrwzgZSCwFh6hKsV9jzofKqYyxsd69J87HYf8N1Vk2wjtSRsclM5XlGu4%2BvXbJMAfBfaxkUntMaCVURcAPwdAqLKFilrUeT2lu57SM%2BBWFEQQ%2FspNbcdsZgwiMl7cZKjrdR8lAzSOQSebZhC9xy1k8%2FKA1Bx9WWcKylFAohfmls50WMaPd57ECdFi6vMDmBbDL%2F0KRTVBCnAk8mqhpqjLVOKeCEiKB%2B%2Fs4cqTBK30Zo8KrQNA2bUlRwmCGzmO4e3sjsnmGJxk9dpNOLr93TNzQUFOqMFbdg193nVAgIwq2vquCx9453pn%2FV8p7yUDu1TrchnSwcayIdH21pFDYJ2Mriv4i1NqiVl%2Bc5Ks8IuUm8tFJ4mbetMcPtbY0ZFLgD6Xv7MAvZq4Okt%2B00CYuGCMgmMTSGPoMJgc32rRJR1iuhElvfbEw%2FD0zl%2BSKs6NXeLj0enyJvNl6om9AiRV2QEqZb0aA8n%2Fz6MExnmYimMGv4%2B2TzHN02Le5%2FlHQRbXuTDXMMuVsMEGOqUBsaeeMD%2BUvXSYGONvAJN3PtrdO1UWtSQhE4K4TC3TJ8DhEIrB6%2BudY53GXN0WGOTFHUiQgyd4RkEfAGnx3S%2BZtbjukY%2B6Zjrl4ZGvqVNZBps6avsyV%2BKOEzquSrZg%2BSFzPbFPmDoUraGY0piJjZTuuO2XmCk0JOGkeN74C6YAiRALWyS1YxDsZSYHH1plSl86Z46RBt7ygW9xV6tvB0qh9nhe8JPU&X-Amz-Signature=7fc635738c17952d88790dbf696f92b8acacdb5e24ba94bd034b63e970ba0eee&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVPCIP7J%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDga5Lg59KBJrIUwLjevcMdoZI2ahW71TpPLQpg9fYSBgIgNmfnYuFXEFXgExnHS%2FB5l%2FLQKy5bKA%2F2FWqCZNH9LlYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMI%2FGXLHY6BdLJq6SrcA3GHkopqXcW5c7QNi5KwsDftoDVTP%2BIIgc5dBvAAVg75oav0HMMb3LcG3h2qFHTd4RFU372TFfph6q9TvMrg7OwuoICF%2Bvb1xxr6mLD%2BXqPuvMXCPRtc5qwI90asrwzgZSCwFh6hKsV9jzofKqYyxsd69J87HYf8N1Vk2wjtSRsclM5XlGu4%2BvXbJMAfBfaxkUntMaCVURcAPwdAqLKFilrUeT2lu57SM%2BBWFEQQ%2FspNbcdsZgwiMl7cZKjrdR8lAzSOQSebZhC9xy1k8%2FKA1Bx9WWcKylFAohfmls50WMaPd57ECdFi6vMDmBbDL%2F0KRTVBCnAk8mqhpqjLVOKeCEiKB%2B%2Fs4cqTBK30Zo8KrQNA2bUlRwmCGzmO4e3sjsnmGJxk9dpNOLr93TNzQUFOqMFbdg193nVAgIwq2vquCx9453pn%2FV8p7yUDu1TrchnSwcayIdH21pFDYJ2Mriv4i1NqiVl%2Bc5Ks8IuUm8tFJ4mbetMcPtbY0ZFLgD6Xv7MAvZq4Okt%2B00CYuGCMgmMTSGPoMJgc32rRJR1iuhElvfbEw%2FD0zl%2BSKs6NXeLj0enyJvNl6om9AiRV2QEqZb0aA8n%2Fz6MExnmYimMGv4%2B2TzHN02Le5%2FlHQRbXuTDXMMuVsMEGOqUBsaeeMD%2BUvXSYGONvAJN3PtrdO1UWtSQhE4K4TC3TJ8DhEIrB6%2BudY53GXN0WGOTFHUiQgyd4RkEfAGnx3S%2BZtbjukY%2B6Zjrl4ZGvqVNZBps6avsyV%2BKOEzquSrZg%2BSFzPbFPmDoUraGY0piJjZTuuO2XmCk0JOGkeN74C6YAiRALWyS1YxDsZSYHH1plSl86Z46RBt7ygW9xV6tvB0qh9nhe8JPU&X-Amz-Signature=36aed73797ebec8b92729d6abfa09a8202f28dcac5befdb9d1ebfdd52b0bfef1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVPCIP7J%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDga5Lg59KBJrIUwLjevcMdoZI2ahW71TpPLQpg9fYSBgIgNmfnYuFXEFXgExnHS%2FB5l%2FLQKy5bKA%2F2FWqCZNH9LlYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMI%2FGXLHY6BdLJq6SrcA3GHkopqXcW5c7QNi5KwsDftoDVTP%2BIIgc5dBvAAVg75oav0HMMb3LcG3h2qFHTd4RFU372TFfph6q9TvMrg7OwuoICF%2Bvb1xxr6mLD%2BXqPuvMXCPRtc5qwI90asrwzgZSCwFh6hKsV9jzofKqYyxsd69J87HYf8N1Vk2wjtSRsclM5XlGu4%2BvXbJMAfBfaxkUntMaCVURcAPwdAqLKFilrUeT2lu57SM%2BBWFEQQ%2FspNbcdsZgwiMl7cZKjrdR8lAzSOQSebZhC9xy1k8%2FKA1Bx9WWcKylFAohfmls50WMaPd57ECdFi6vMDmBbDL%2F0KRTVBCnAk8mqhpqjLVOKeCEiKB%2B%2Fs4cqTBK30Zo8KrQNA2bUlRwmCGzmO4e3sjsnmGJxk9dpNOLr93TNzQUFOqMFbdg193nVAgIwq2vquCx9453pn%2FV8p7yUDu1TrchnSwcayIdH21pFDYJ2Mriv4i1NqiVl%2Bc5Ks8IuUm8tFJ4mbetMcPtbY0ZFLgD6Xv7MAvZq4Okt%2B00CYuGCMgmMTSGPoMJgc32rRJR1iuhElvfbEw%2FD0zl%2BSKs6NXeLj0enyJvNl6om9AiRV2QEqZb0aA8n%2Fz6MExnmYimMGv4%2B2TzHN02Le5%2FlHQRbXuTDXMMuVsMEGOqUBsaeeMD%2BUvXSYGONvAJN3PtrdO1UWtSQhE4K4TC3TJ8DhEIrB6%2BudY53GXN0WGOTFHUiQgyd4RkEfAGnx3S%2BZtbjukY%2B6Zjrl4ZGvqVNZBps6avsyV%2BKOEzquSrZg%2BSFzPbFPmDoUraGY0piJjZTuuO2XmCk0JOGkeN74C6YAiRALWyS1YxDsZSYHH1plSl86Z46RBt7ygW9xV6tvB0qh9nhe8JPU&X-Amz-Signature=836c1b8a46486b7d9fd00b1a3588edcb2ac14974bd05ae15d535f73500bf8226&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVPCIP7J%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDga5Lg59KBJrIUwLjevcMdoZI2ahW71TpPLQpg9fYSBgIgNmfnYuFXEFXgExnHS%2FB5l%2FLQKy5bKA%2F2FWqCZNH9LlYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMI%2FGXLHY6BdLJq6SrcA3GHkopqXcW5c7QNi5KwsDftoDVTP%2BIIgc5dBvAAVg75oav0HMMb3LcG3h2qFHTd4RFU372TFfph6q9TvMrg7OwuoICF%2Bvb1xxr6mLD%2BXqPuvMXCPRtc5qwI90asrwzgZSCwFh6hKsV9jzofKqYyxsd69J87HYf8N1Vk2wjtSRsclM5XlGu4%2BvXbJMAfBfaxkUntMaCVURcAPwdAqLKFilrUeT2lu57SM%2BBWFEQQ%2FspNbcdsZgwiMl7cZKjrdR8lAzSOQSebZhC9xy1k8%2FKA1Bx9WWcKylFAohfmls50WMaPd57ECdFi6vMDmBbDL%2F0KRTVBCnAk8mqhpqjLVOKeCEiKB%2B%2Fs4cqTBK30Zo8KrQNA2bUlRwmCGzmO4e3sjsnmGJxk9dpNOLr93TNzQUFOqMFbdg193nVAgIwq2vquCx9453pn%2FV8p7yUDu1TrchnSwcayIdH21pFDYJ2Mriv4i1NqiVl%2Bc5Ks8IuUm8tFJ4mbetMcPtbY0ZFLgD6Xv7MAvZq4Okt%2B00CYuGCMgmMTSGPoMJgc32rRJR1iuhElvfbEw%2FD0zl%2BSKs6NXeLj0enyJvNl6om9AiRV2QEqZb0aA8n%2Fz6MExnmYimMGv4%2B2TzHN02Le5%2FlHQRbXuTDXMMuVsMEGOqUBsaeeMD%2BUvXSYGONvAJN3PtrdO1UWtSQhE4K4TC3TJ8DhEIrB6%2BudY53GXN0WGOTFHUiQgyd4RkEfAGnx3S%2BZtbjukY%2B6Zjrl4ZGvqVNZBps6avsyV%2BKOEzquSrZg%2BSFzPbFPmDoUraGY0piJjZTuuO2XmCk0JOGkeN74C6YAiRALWyS1YxDsZSYHH1plSl86Z46RBt7ygW9xV6tvB0qh9nhe8JPU&X-Amz-Signature=11946f623a4af2e031e4cd3f29fa6a53504b858072a416395e898f15bff3af9d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVPCIP7J%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDga5Lg59KBJrIUwLjevcMdoZI2ahW71TpPLQpg9fYSBgIgNmfnYuFXEFXgExnHS%2FB5l%2FLQKy5bKA%2F2FWqCZNH9LlYqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMI%2FGXLHY6BdLJq6SrcA3GHkopqXcW5c7QNi5KwsDftoDVTP%2BIIgc5dBvAAVg75oav0HMMb3LcG3h2qFHTd4RFU372TFfph6q9TvMrg7OwuoICF%2Bvb1xxr6mLD%2BXqPuvMXCPRtc5qwI90asrwzgZSCwFh6hKsV9jzofKqYyxsd69J87HYf8N1Vk2wjtSRsclM5XlGu4%2BvXbJMAfBfaxkUntMaCVURcAPwdAqLKFilrUeT2lu57SM%2BBWFEQQ%2FspNbcdsZgwiMl7cZKjrdR8lAzSOQSebZhC9xy1k8%2FKA1Bx9WWcKylFAohfmls50WMaPd57ECdFi6vMDmBbDL%2F0KRTVBCnAk8mqhpqjLVOKeCEiKB%2B%2Fs4cqTBK30Zo8KrQNA2bUlRwmCGzmO4e3sjsnmGJxk9dpNOLr93TNzQUFOqMFbdg193nVAgIwq2vquCx9453pn%2FV8p7yUDu1TrchnSwcayIdH21pFDYJ2Mriv4i1NqiVl%2Bc5Ks8IuUm8tFJ4mbetMcPtbY0ZFLgD6Xv7MAvZq4Okt%2B00CYuGCMgmMTSGPoMJgc32rRJR1iuhElvfbEw%2FD0zl%2BSKs6NXeLj0enyJvNl6om9AiRV2QEqZb0aA8n%2Fz6MExnmYimMGv4%2B2TzHN02Le5%2FlHQRbXuTDXMMuVsMEGOqUBsaeeMD%2BUvXSYGONvAJN3PtrdO1UWtSQhE4K4TC3TJ8DhEIrB6%2BudY53GXN0WGOTFHUiQgyd4RkEfAGnx3S%2BZtbjukY%2B6Zjrl4ZGvqVNZBps6avsyV%2BKOEzquSrZg%2BSFzPbFPmDoUraGY0piJjZTuuO2XmCk0JOGkeN74C6YAiRALWyS1YxDsZSYHH1plSl86Z46RBt7ygW9xV6tvB0qh9nhe8JPU&X-Amz-Signature=074613f61a0b306e294c3115f60adc5338af21cf437c5d9770422038e9f3f69f&X-Amz-SignedHeaders=host&x-id=GetObject)
