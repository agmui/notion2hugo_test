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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GZKH4J7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6JZkcHX5n4Ke4fsUFBmslgJiQ7j4qOAR494lQN2MSOAIgFgB%2BnTCWXuwQgvfXN44IK5XqHKJsCAz5Q4dFpXFiWsMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSuy8zW%2BKncRfK7sircA%2F3zWAMwgAP6a5KuU77m%2F%2Bpt24lX0PeAi%2FJGaTWGrwp3xCs0NXRbrxednPcSsPB%2BRPK7B4rSEiElUg1Nu9SWAJ9WVkc7IvNLtyLKyIX54dEqQd79ts9mYtFFYIGBYVXMV2U%2FupTquMN%2F642UXJG3tVapsqsXONgMaQHmZ5A1a%2B42WmKcKqEmTuLDLZOqs2GxQnJhTF67%2FeU3L1tUWiVf48OADCQzcPhqstdS5MeSDJ3WITdnnpVlC%2FzDnnRC6wrZrRxHr1NTeqYnNfemD4ULlZExRmVmyIAnNYa7lAFkQ17n6d0EDw0%2B1ru7C%2BknzJ%2F%2Fnn8CkBTkHEGIElGMUHcPs6xH5OBlQXeGF5HzvA7dFyrpZkORTmDU3%2FklYctwV5l6%2FP4DiJgWctHyacB1N87woN8UeNXNUC%2F%2BS0wLLo7eWMlk6MIOsMjdUrSaeW9bfzdHSqwCRzlgVHin%2BlUm0JxcBt1%2BNiVFLMhovoqtxQTbcV2R2R00r1yToysvap0raX5Chk2ytuejxcbqUlCsqzlmFh9w7EtktPE4lUlW2qqVmLU%2BAomZYOd9SXZfQL5FOq8AH1RLyGNoyZrSOSDtVRqYQBs%2FpooMl9sGVDpMSVFA1F%2BnQ%2F0oxmsCDqQxFDnhMIT278MGOqUB67rfHEyJxKwmvDJXuaLmECfKcV%2BKX3SsHimvoYw%2BR4yqczgtjEfHuyehIg29eNVDTzsl1nr7owKZAJhd181zzOhveHONQ7pd5ZeYIb3GBFlhwko0OzXQvc4%2BSkuuyRsbW7%2FkQcy3hOHVYeAOBj6ZJ%2FvLqM2uFkbW1ao1gDPLbtOsTkMPuSIM%2FJQgWVAIsGPn%2FzgdDvWxnDh%2BrWmgyRonjSraa52A&X-Amz-Signature=ed32c27f79799f071482be4142cf39f964b0a9630d984f366ce133710109a94b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GZKH4J7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6JZkcHX5n4Ke4fsUFBmslgJiQ7j4qOAR494lQN2MSOAIgFgB%2BnTCWXuwQgvfXN44IK5XqHKJsCAz5Q4dFpXFiWsMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSuy8zW%2BKncRfK7sircA%2F3zWAMwgAP6a5KuU77m%2F%2Bpt24lX0PeAi%2FJGaTWGrwp3xCs0NXRbrxednPcSsPB%2BRPK7B4rSEiElUg1Nu9SWAJ9WVkc7IvNLtyLKyIX54dEqQd79ts9mYtFFYIGBYVXMV2U%2FupTquMN%2F642UXJG3tVapsqsXONgMaQHmZ5A1a%2B42WmKcKqEmTuLDLZOqs2GxQnJhTF67%2FeU3L1tUWiVf48OADCQzcPhqstdS5MeSDJ3WITdnnpVlC%2FzDnnRC6wrZrRxHr1NTeqYnNfemD4ULlZExRmVmyIAnNYa7lAFkQ17n6d0EDw0%2B1ru7C%2BknzJ%2F%2Fnn8CkBTkHEGIElGMUHcPs6xH5OBlQXeGF5HzvA7dFyrpZkORTmDU3%2FklYctwV5l6%2FP4DiJgWctHyacB1N87woN8UeNXNUC%2F%2BS0wLLo7eWMlk6MIOsMjdUrSaeW9bfzdHSqwCRzlgVHin%2BlUm0JxcBt1%2BNiVFLMhovoqtxQTbcV2R2R00r1yToysvap0raX5Chk2ytuejxcbqUlCsqzlmFh9w7EtktPE4lUlW2qqVmLU%2BAomZYOd9SXZfQL5FOq8AH1RLyGNoyZrSOSDtVRqYQBs%2FpooMl9sGVDpMSVFA1F%2BnQ%2F0oxmsCDqQxFDnhMIT278MGOqUB67rfHEyJxKwmvDJXuaLmECfKcV%2BKX3SsHimvoYw%2BR4yqczgtjEfHuyehIg29eNVDTzsl1nr7owKZAJhd181zzOhveHONQ7pd5ZeYIb3GBFlhwko0OzXQvc4%2BSkuuyRsbW7%2FkQcy3hOHVYeAOBj6ZJ%2FvLqM2uFkbW1ao1gDPLbtOsTkMPuSIM%2FJQgWVAIsGPn%2FzgdDvWxnDh%2BrWmgyRonjSraa52A&X-Amz-Signature=e7d37839bda589aad9879d4e9782d7ecf0b611db27b0c45bf8579f30dcafcb03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GZKH4J7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6JZkcHX5n4Ke4fsUFBmslgJiQ7j4qOAR494lQN2MSOAIgFgB%2BnTCWXuwQgvfXN44IK5XqHKJsCAz5Q4dFpXFiWsMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSuy8zW%2BKncRfK7sircA%2F3zWAMwgAP6a5KuU77m%2F%2Bpt24lX0PeAi%2FJGaTWGrwp3xCs0NXRbrxednPcSsPB%2BRPK7B4rSEiElUg1Nu9SWAJ9WVkc7IvNLtyLKyIX54dEqQd79ts9mYtFFYIGBYVXMV2U%2FupTquMN%2F642UXJG3tVapsqsXONgMaQHmZ5A1a%2B42WmKcKqEmTuLDLZOqs2GxQnJhTF67%2FeU3L1tUWiVf48OADCQzcPhqstdS5MeSDJ3WITdnnpVlC%2FzDnnRC6wrZrRxHr1NTeqYnNfemD4ULlZExRmVmyIAnNYa7lAFkQ17n6d0EDw0%2B1ru7C%2BknzJ%2F%2Fnn8CkBTkHEGIElGMUHcPs6xH5OBlQXeGF5HzvA7dFyrpZkORTmDU3%2FklYctwV5l6%2FP4DiJgWctHyacB1N87woN8UeNXNUC%2F%2BS0wLLo7eWMlk6MIOsMjdUrSaeW9bfzdHSqwCRzlgVHin%2BlUm0JxcBt1%2BNiVFLMhovoqtxQTbcV2R2R00r1yToysvap0raX5Chk2ytuejxcbqUlCsqzlmFh9w7EtktPE4lUlW2qqVmLU%2BAomZYOd9SXZfQL5FOq8AH1RLyGNoyZrSOSDtVRqYQBs%2FpooMl9sGVDpMSVFA1F%2BnQ%2F0oxmsCDqQxFDnhMIT278MGOqUB67rfHEyJxKwmvDJXuaLmECfKcV%2BKX3SsHimvoYw%2BR4yqczgtjEfHuyehIg29eNVDTzsl1nr7owKZAJhd181zzOhveHONQ7pd5ZeYIb3GBFlhwko0OzXQvc4%2BSkuuyRsbW7%2FkQcy3hOHVYeAOBj6ZJ%2FvLqM2uFkbW1ao1gDPLbtOsTkMPuSIM%2FJQgWVAIsGPn%2FzgdDvWxnDh%2BrWmgyRonjSraa52A&X-Amz-Signature=6e4705b629a05d0e5000eac0ac0f740ee227ec7ac7366bf2a0acb87616c1143c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GZKH4J7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6JZkcHX5n4Ke4fsUFBmslgJiQ7j4qOAR494lQN2MSOAIgFgB%2BnTCWXuwQgvfXN44IK5XqHKJsCAz5Q4dFpXFiWsMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSuy8zW%2BKncRfK7sircA%2F3zWAMwgAP6a5KuU77m%2F%2Bpt24lX0PeAi%2FJGaTWGrwp3xCs0NXRbrxednPcSsPB%2BRPK7B4rSEiElUg1Nu9SWAJ9WVkc7IvNLtyLKyIX54dEqQd79ts9mYtFFYIGBYVXMV2U%2FupTquMN%2F642UXJG3tVapsqsXONgMaQHmZ5A1a%2B42WmKcKqEmTuLDLZOqs2GxQnJhTF67%2FeU3L1tUWiVf48OADCQzcPhqstdS5MeSDJ3WITdnnpVlC%2FzDnnRC6wrZrRxHr1NTeqYnNfemD4ULlZExRmVmyIAnNYa7lAFkQ17n6d0EDw0%2B1ru7C%2BknzJ%2F%2Fnn8CkBTkHEGIElGMUHcPs6xH5OBlQXeGF5HzvA7dFyrpZkORTmDU3%2FklYctwV5l6%2FP4DiJgWctHyacB1N87woN8UeNXNUC%2F%2BS0wLLo7eWMlk6MIOsMjdUrSaeW9bfzdHSqwCRzlgVHin%2BlUm0JxcBt1%2BNiVFLMhovoqtxQTbcV2R2R00r1yToysvap0raX5Chk2ytuejxcbqUlCsqzlmFh9w7EtktPE4lUlW2qqVmLU%2BAomZYOd9SXZfQL5FOq8AH1RLyGNoyZrSOSDtVRqYQBs%2FpooMl9sGVDpMSVFA1F%2BnQ%2F0oxmsCDqQxFDnhMIT278MGOqUB67rfHEyJxKwmvDJXuaLmECfKcV%2BKX3SsHimvoYw%2BR4yqczgtjEfHuyehIg29eNVDTzsl1nr7owKZAJhd181zzOhveHONQ7pd5ZeYIb3GBFlhwko0OzXQvc4%2BSkuuyRsbW7%2FkQcy3hOHVYeAOBj6ZJ%2FvLqM2uFkbW1ao1gDPLbtOsTkMPuSIM%2FJQgWVAIsGPn%2FzgdDvWxnDh%2BrWmgyRonjSraa52A&X-Amz-Signature=8d7931a9bccc2441c5ea61dc05996403847ed2932025f3e24ef04ba51162bac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GZKH4J7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6JZkcHX5n4Ke4fsUFBmslgJiQ7j4qOAR494lQN2MSOAIgFgB%2BnTCWXuwQgvfXN44IK5XqHKJsCAz5Q4dFpXFiWsMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSuy8zW%2BKncRfK7sircA%2F3zWAMwgAP6a5KuU77m%2F%2Bpt24lX0PeAi%2FJGaTWGrwp3xCs0NXRbrxednPcSsPB%2BRPK7B4rSEiElUg1Nu9SWAJ9WVkc7IvNLtyLKyIX54dEqQd79ts9mYtFFYIGBYVXMV2U%2FupTquMN%2F642UXJG3tVapsqsXONgMaQHmZ5A1a%2B42WmKcKqEmTuLDLZOqs2GxQnJhTF67%2FeU3L1tUWiVf48OADCQzcPhqstdS5MeSDJ3WITdnnpVlC%2FzDnnRC6wrZrRxHr1NTeqYnNfemD4ULlZExRmVmyIAnNYa7lAFkQ17n6d0EDw0%2B1ru7C%2BknzJ%2F%2Fnn8CkBTkHEGIElGMUHcPs6xH5OBlQXeGF5HzvA7dFyrpZkORTmDU3%2FklYctwV5l6%2FP4DiJgWctHyacB1N87woN8UeNXNUC%2F%2BS0wLLo7eWMlk6MIOsMjdUrSaeW9bfzdHSqwCRzlgVHin%2BlUm0JxcBt1%2BNiVFLMhovoqtxQTbcV2R2R00r1yToysvap0raX5Chk2ytuejxcbqUlCsqzlmFh9w7EtktPE4lUlW2qqVmLU%2BAomZYOd9SXZfQL5FOq8AH1RLyGNoyZrSOSDtVRqYQBs%2FpooMl9sGVDpMSVFA1F%2BnQ%2F0oxmsCDqQxFDnhMIT278MGOqUB67rfHEyJxKwmvDJXuaLmECfKcV%2BKX3SsHimvoYw%2BR4yqczgtjEfHuyehIg29eNVDTzsl1nr7owKZAJhd181zzOhveHONQ7pd5ZeYIb3GBFlhwko0OzXQvc4%2BSkuuyRsbW7%2FkQcy3hOHVYeAOBj6ZJ%2FvLqM2uFkbW1ao1gDPLbtOsTkMPuSIM%2FJQgWVAIsGPn%2FzgdDvWxnDh%2BrWmgyRonjSraa52A&X-Amz-Signature=6aa6a1a25454829519a984a42749c99b7f9966dbf4dd7c2e784b8b3054e36263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GZKH4J7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6JZkcHX5n4Ke4fsUFBmslgJiQ7j4qOAR494lQN2MSOAIgFgB%2BnTCWXuwQgvfXN44IK5XqHKJsCAz5Q4dFpXFiWsMqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSuy8zW%2BKncRfK7sircA%2F3zWAMwgAP6a5KuU77m%2F%2Bpt24lX0PeAi%2FJGaTWGrwp3xCs0NXRbrxednPcSsPB%2BRPK7B4rSEiElUg1Nu9SWAJ9WVkc7IvNLtyLKyIX54dEqQd79ts9mYtFFYIGBYVXMV2U%2FupTquMN%2F642UXJG3tVapsqsXONgMaQHmZ5A1a%2B42WmKcKqEmTuLDLZOqs2GxQnJhTF67%2FeU3L1tUWiVf48OADCQzcPhqstdS5MeSDJ3WITdnnpVlC%2FzDnnRC6wrZrRxHr1NTeqYnNfemD4ULlZExRmVmyIAnNYa7lAFkQ17n6d0EDw0%2B1ru7C%2BknzJ%2F%2Fnn8CkBTkHEGIElGMUHcPs6xH5OBlQXeGF5HzvA7dFyrpZkORTmDU3%2FklYctwV5l6%2FP4DiJgWctHyacB1N87woN8UeNXNUC%2F%2BS0wLLo7eWMlk6MIOsMjdUrSaeW9bfzdHSqwCRzlgVHin%2BlUm0JxcBt1%2BNiVFLMhovoqtxQTbcV2R2R00r1yToysvap0raX5Chk2ytuejxcbqUlCsqzlmFh9w7EtktPE4lUlW2qqVmLU%2BAomZYOd9SXZfQL5FOq8AH1RLyGNoyZrSOSDtVRqYQBs%2FpooMl9sGVDpMSVFA1F%2BnQ%2F0oxmsCDqQxFDnhMIT278MGOqUB67rfHEyJxKwmvDJXuaLmECfKcV%2BKX3SsHimvoYw%2BR4yqczgtjEfHuyehIg29eNVDTzsl1nr7owKZAJhd181zzOhveHONQ7pd5ZeYIb3GBFlhwko0OzXQvc4%2BSkuuyRsbW7%2FkQcy3hOHVYeAOBj6ZJ%2FvLqM2uFkbW1ao1gDPLbtOsTkMPuSIM%2FJQgWVAIsGPn%2FzgdDvWxnDh%2BrWmgyRonjSraa52A&X-Amz-Signature=3ecd46702951366bbcf46a967d07572225485226dabd85adb3ae4141d1e2e761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
