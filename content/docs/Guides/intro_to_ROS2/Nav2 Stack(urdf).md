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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF63QLKS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDaAAha0Sw12PyR1mBo6pUI7Vc9fxgwPkaVBEpkIS88rAiBif32E5C2e1oPXjQHIyMdcEBcsB80vtHNkkWlRcqanvSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2Fko838Bt9qqiChyaKtwDN2MHgsH4%2F0YZDKX5xHduuqk4i02hI%2FUGb012WZGUyrGi3UW71y96SshjpuQZiXo9AGTnwcIcGCq5YM5D2WuYfsgI0mSI1vhEXeckv6TC3BFqJTADY%2FiDnn4pqdmpb6XazmGQ%2FNG3T88yBxAXWzF7aJa403gS4QTpjW8wovu85aMEKMohW7OUz03Qz4uOOhaN4H8Bfk9LGC4lI5yLeVTmXizz%2BotcjcubdTv%2Bg9LeofQwdhaG9f6iAzG%2FCgvfPY9MPoHEbLFeMh0AWfc1E%2BR5zl7uhr5RsL8Rt57LTTbTjjff8MpQPJZpHlYyF7v9F4R9XfZjvaqs%2B5lmb3NF0oJBm5TkNfjY11NPu6IGVoBsd8s6Q%2F8kMO3xTTLLF%2FrRAUdEs2JOmkKn87GYgQSLXmG2KkpscEZnet%2B0k2pFfOHMAlyE9FCY80bBdax1OdlE8vNaa1UnVdaSt6E91DWjHBVBpT%2Fe7Uw8cn7OAId6PHcyc%2BxgkALCe7MqYP3yNqqyy19iepD4rvLSlnEsob14prvzVsQk1t%2BD6mQxFUIKiekitmX3dtymxrz1WCi7rvhmmEZD4SFLmwixo4L8vWMVAAyCFNwjHdrt39bC7f4az%2BgAAQeMKGD01FNlUGd0JCIw7YmEwgY6pgEjtVx8eYgYZyoII8NL5JpDUzCRzCPpS5CJp22l%2BL2CR29WVjxlg7wLDoKU8FGNngXcNKFR7YvNznz0DcVN7eABv9RexP1gY3a3V9gYfc3c4J0qn%2Bjkm2HEpXxZNHbIRylk%2FxPM%2FinIUdoW0sWglYtpswNWsvKRido%2BTJkBqeZBJsS9RLc1iSsW8HFqrtlwBQZeNRqSygLhp8O71nJ1xZKRu7Eni8we&X-Amz-Signature=ab57ed21393b27bb1731d212d69894d36c253bc82481c00e3245d886114f4032&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF63QLKS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDaAAha0Sw12PyR1mBo6pUI7Vc9fxgwPkaVBEpkIS88rAiBif32E5C2e1oPXjQHIyMdcEBcsB80vtHNkkWlRcqanvSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2Fko838Bt9qqiChyaKtwDN2MHgsH4%2F0YZDKX5xHduuqk4i02hI%2FUGb012WZGUyrGi3UW71y96SshjpuQZiXo9AGTnwcIcGCq5YM5D2WuYfsgI0mSI1vhEXeckv6TC3BFqJTADY%2FiDnn4pqdmpb6XazmGQ%2FNG3T88yBxAXWzF7aJa403gS4QTpjW8wovu85aMEKMohW7OUz03Qz4uOOhaN4H8Bfk9LGC4lI5yLeVTmXizz%2BotcjcubdTv%2Bg9LeofQwdhaG9f6iAzG%2FCgvfPY9MPoHEbLFeMh0AWfc1E%2BR5zl7uhr5RsL8Rt57LTTbTjjff8MpQPJZpHlYyF7v9F4R9XfZjvaqs%2B5lmb3NF0oJBm5TkNfjY11NPu6IGVoBsd8s6Q%2F8kMO3xTTLLF%2FrRAUdEs2JOmkKn87GYgQSLXmG2KkpscEZnet%2B0k2pFfOHMAlyE9FCY80bBdax1OdlE8vNaa1UnVdaSt6E91DWjHBVBpT%2Fe7Uw8cn7OAId6PHcyc%2BxgkALCe7MqYP3yNqqyy19iepD4rvLSlnEsob14prvzVsQk1t%2BD6mQxFUIKiekitmX3dtymxrz1WCi7rvhmmEZD4SFLmwixo4L8vWMVAAyCFNwjHdrt39bC7f4az%2BgAAQeMKGD01FNlUGd0JCIw7YmEwgY6pgEjtVx8eYgYZyoII8NL5JpDUzCRzCPpS5CJp22l%2BL2CR29WVjxlg7wLDoKU8FGNngXcNKFR7YvNznz0DcVN7eABv9RexP1gY3a3V9gYfc3c4J0qn%2Bjkm2HEpXxZNHbIRylk%2FxPM%2FinIUdoW0sWglYtpswNWsvKRido%2BTJkBqeZBJsS9RLc1iSsW8HFqrtlwBQZeNRqSygLhp8O71nJ1xZKRu7Eni8we&X-Amz-Signature=8ac1716dca65805cd45890f8c6a41b54848d17ae0edddb7e32fb09ecb8007445&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF63QLKS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDaAAha0Sw12PyR1mBo6pUI7Vc9fxgwPkaVBEpkIS88rAiBif32E5C2e1oPXjQHIyMdcEBcsB80vtHNkkWlRcqanvSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2Fko838Bt9qqiChyaKtwDN2MHgsH4%2F0YZDKX5xHduuqk4i02hI%2FUGb012WZGUyrGi3UW71y96SshjpuQZiXo9AGTnwcIcGCq5YM5D2WuYfsgI0mSI1vhEXeckv6TC3BFqJTADY%2FiDnn4pqdmpb6XazmGQ%2FNG3T88yBxAXWzF7aJa403gS4QTpjW8wovu85aMEKMohW7OUz03Qz4uOOhaN4H8Bfk9LGC4lI5yLeVTmXizz%2BotcjcubdTv%2Bg9LeofQwdhaG9f6iAzG%2FCgvfPY9MPoHEbLFeMh0AWfc1E%2BR5zl7uhr5RsL8Rt57LTTbTjjff8MpQPJZpHlYyF7v9F4R9XfZjvaqs%2B5lmb3NF0oJBm5TkNfjY11NPu6IGVoBsd8s6Q%2F8kMO3xTTLLF%2FrRAUdEs2JOmkKn87GYgQSLXmG2KkpscEZnet%2B0k2pFfOHMAlyE9FCY80bBdax1OdlE8vNaa1UnVdaSt6E91DWjHBVBpT%2Fe7Uw8cn7OAId6PHcyc%2BxgkALCe7MqYP3yNqqyy19iepD4rvLSlnEsob14prvzVsQk1t%2BD6mQxFUIKiekitmX3dtymxrz1WCi7rvhmmEZD4SFLmwixo4L8vWMVAAyCFNwjHdrt39bC7f4az%2BgAAQeMKGD01FNlUGd0JCIw7YmEwgY6pgEjtVx8eYgYZyoII8NL5JpDUzCRzCPpS5CJp22l%2BL2CR29WVjxlg7wLDoKU8FGNngXcNKFR7YvNznz0DcVN7eABv9RexP1gY3a3V9gYfc3c4J0qn%2Bjkm2HEpXxZNHbIRylk%2FxPM%2FinIUdoW0sWglYtpswNWsvKRido%2BTJkBqeZBJsS9RLc1iSsW8HFqrtlwBQZeNRqSygLhp8O71nJ1xZKRu7Eni8we&X-Amz-Signature=474195b047f915d144907aa03f0f76fd41cffe304eaaaece9e91db28f5a72fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF63QLKS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDaAAha0Sw12PyR1mBo6pUI7Vc9fxgwPkaVBEpkIS88rAiBif32E5C2e1oPXjQHIyMdcEBcsB80vtHNkkWlRcqanvSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2Fko838Bt9qqiChyaKtwDN2MHgsH4%2F0YZDKX5xHduuqk4i02hI%2FUGb012WZGUyrGi3UW71y96SshjpuQZiXo9AGTnwcIcGCq5YM5D2WuYfsgI0mSI1vhEXeckv6TC3BFqJTADY%2FiDnn4pqdmpb6XazmGQ%2FNG3T88yBxAXWzF7aJa403gS4QTpjW8wovu85aMEKMohW7OUz03Qz4uOOhaN4H8Bfk9LGC4lI5yLeVTmXizz%2BotcjcubdTv%2Bg9LeofQwdhaG9f6iAzG%2FCgvfPY9MPoHEbLFeMh0AWfc1E%2BR5zl7uhr5RsL8Rt57LTTbTjjff8MpQPJZpHlYyF7v9F4R9XfZjvaqs%2B5lmb3NF0oJBm5TkNfjY11NPu6IGVoBsd8s6Q%2F8kMO3xTTLLF%2FrRAUdEs2JOmkKn87GYgQSLXmG2KkpscEZnet%2B0k2pFfOHMAlyE9FCY80bBdax1OdlE8vNaa1UnVdaSt6E91DWjHBVBpT%2Fe7Uw8cn7OAId6PHcyc%2BxgkALCe7MqYP3yNqqyy19iepD4rvLSlnEsob14prvzVsQk1t%2BD6mQxFUIKiekitmX3dtymxrz1WCi7rvhmmEZD4SFLmwixo4L8vWMVAAyCFNwjHdrt39bC7f4az%2BgAAQeMKGD01FNlUGd0JCIw7YmEwgY6pgEjtVx8eYgYZyoII8NL5JpDUzCRzCPpS5CJp22l%2BL2CR29WVjxlg7wLDoKU8FGNngXcNKFR7YvNznz0DcVN7eABv9RexP1gY3a3V9gYfc3c4J0qn%2Bjkm2HEpXxZNHbIRylk%2FxPM%2FinIUdoW0sWglYtpswNWsvKRido%2BTJkBqeZBJsS9RLc1iSsW8HFqrtlwBQZeNRqSygLhp8O71nJ1xZKRu7Eni8we&X-Amz-Signature=ae300ecd73d38a4205c5d60d1a0ccdf60aa4df391ca046b2fbca21ab1c8b32fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF63QLKS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDaAAha0Sw12PyR1mBo6pUI7Vc9fxgwPkaVBEpkIS88rAiBif32E5C2e1oPXjQHIyMdcEBcsB80vtHNkkWlRcqanvSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2Fko838Bt9qqiChyaKtwDN2MHgsH4%2F0YZDKX5xHduuqk4i02hI%2FUGb012WZGUyrGi3UW71y96SshjpuQZiXo9AGTnwcIcGCq5YM5D2WuYfsgI0mSI1vhEXeckv6TC3BFqJTADY%2FiDnn4pqdmpb6XazmGQ%2FNG3T88yBxAXWzF7aJa403gS4QTpjW8wovu85aMEKMohW7OUz03Qz4uOOhaN4H8Bfk9LGC4lI5yLeVTmXizz%2BotcjcubdTv%2Bg9LeofQwdhaG9f6iAzG%2FCgvfPY9MPoHEbLFeMh0AWfc1E%2BR5zl7uhr5RsL8Rt57LTTbTjjff8MpQPJZpHlYyF7v9F4R9XfZjvaqs%2B5lmb3NF0oJBm5TkNfjY11NPu6IGVoBsd8s6Q%2F8kMO3xTTLLF%2FrRAUdEs2JOmkKn87GYgQSLXmG2KkpscEZnet%2B0k2pFfOHMAlyE9FCY80bBdax1OdlE8vNaa1UnVdaSt6E91DWjHBVBpT%2Fe7Uw8cn7OAId6PHcyc%2BxgkALCe7MqYP3yNqqyy19iepD4rvLSlnEsob14prvzVsQk1t%2BD6mQxFUIKiekitmX3dtymxrz1WCi7rvhmmEZD4SFLmwixo4L8vWMVAAyCFNwjHdrt39bC7f4az%2BgAAQeMKGD01FNlUGd0JCIw7YmEwgY6pgEjtVx8eYgYZyoII8NL5JpDUzCRzCPpS5CJp22l%2BL2CR29WVjxlg7wLDoKU8FGNngXcNKFR7YvNznz0DcVN7eABv9RexP1gY3a3V9gYfc3c4J0qn%2Bjkm2HEpXxZNHbIRylk%2FxPM%2FinIUdoW0sWglYtpswNWsvKRido%2BTJkBqeZBJsS9RLc1iSsW8HFqrtlwBQZeNRqSygLhp8O71nJ1xZKRu7Eni8we&X-Amz-Signature=5558a0a3c93b0325501d2c0b4ff8a6f79e0d4daa1748446fd7fc433ed83f4b37&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF63QLKS%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T034022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIDaAAha0Sw12PyR1mBo6pUI7Vc9fxgwPkaVBEpkIS88rAiBif32E5C2e1oPXjQHIyMdcEBcsB80vtHNkkWlRcqanvSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2Fko838Bt9qqiChyaKtwDN2MHgsH4%2F0YZDKX5xHduuqk4i02hI%2FUGb012WZGUyrGi3UW71y96SshjpuQZiXo9AGTnwcIcGCq5YM5D2WuYfsgI0mSI1vhEXeckv6TC3BFqJTADY%2FiDnn4pqdmpb6XazmGQ%2FNG3T88yBxAXWzF7aJa403gS4QTpjW8wovu85aMEKMohW7OUz03Qz4uOOhaN4H8Bfk9LGC4lI5yLeVTmXizz%2BotcjcubdTv%2Bg9LeofQwdhaG9f6iAzG%2FCgvfPY9MPoHEbLFeMh0AWfc1E%2BR5zl7uhr5RsL8Rt57LTTbTjjff8MpQPJZpHlYyF7v9F4R9XfZjvaqs%2B5lmb3NF0oJBm5TkNfjY11NPu6IGVoBsd8s6Q%2F8kMO3xTTLLF%2FrRAUdEs2JOmkKn87GYgQSLXmG2KkpscEZnet%2B0k2pFfOHMAlyE9FCY80bBdax1OdlE8vNaa1UnVdaSt6E91DWjHBVBpT%2Fe7Uw8cn7OAId6PHcyc%2BxgkALCe7MqYP3yNqqyy19iepD4rvLSlnEsob14prvzVsQk1t%2BD6mQxFUIKiekitmX3dtymxrz1WCi7rvhmmEZD4SFLmwixo4L8vWMVAAyCFNwjHdrt39bC7f4az%2BgAAQeMKGD01FNlUGd0JCIw7YmEwgY6pgEjtVx8eYgYZyoII8NL5JpDUzCRzCPpS5CJp22l%2BL2CR29WVjxlg7wLDoKU8FGNngXcNKFR7YvNznz0DcVN7eABv9RexP1gY3a3V9gYfc3c4J0qn%2Bjkm2HEpXxZNHbIRylk%2FxPM%2FinIUdoW0sWglYtpswNWsvKRido%2BTJkBqeZBJsS9RLc1iSsW8HFqrtlwBQZeNRqSygLhp8O71nJ1xZKRu7Eni8we&X-Amz-Signature=7335ff1053dad9287b4f218a4e5ff7c1b4a903a6f4c9729f57bc6745867c22a2&X-Amz-SignedHeaders=host&x-id=GetObject)
