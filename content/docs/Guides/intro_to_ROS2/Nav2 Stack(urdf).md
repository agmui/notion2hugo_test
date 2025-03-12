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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z75KXRG7%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDbVONASihEh1bzCNIYkPeQtnDM02%2FZhMJHluLXQGqMkwIhAP2zdbLiPE6VLpAKJ4XztgVmDkaZv9a79sks72NpujL%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fs%2B%2FX8rQBBjctFpMq3AMLED1OSfXMqLFdEmG6mz%2FQ2lqHUWnJo5TCnu1TyJwSuEZc4zgJvLZf5zvOwzfzKcO%2FANyO%2BfyGME%2FofhVG8La7G7l%2BjauwFeJwy%2BS8R%2FzNvayFUq89aQh%2B2fIdaSHWM%2BmEgz21vp%2F3rcWStXHtpp078VHkrnOFAOvTO24kdd9BB4b5q%2FbxhlRJfg5JNhweFbccG0dVNiMtdO%2BRmcdxsk62HmClHNLhb%2BcXyf7USYAXhq17vqqGC0TXtNxl6s3YFxCyc1%2FdOPLgyiQfKenMytI%2FMiRnr7mvgSmF7hW3axYEg0RWfWhIj3RRNrIYfhuL2%2FyI8GxBFRNZy3snI6jKTX34bIS5KE7%2B%2B5mnvy5e62VCUfb1lPG5sWbs%2F2UgNS7pyLVm4ht42FbqHCOj6nCXN9bfhiURIbnep6xMPHEGZYOuuHyhBKokyKyhwoBvcIQv3np4prV54AUTQ0vcteQUy%2Fpyt3xVMVGsBJfe8f6veEWdf7I49mip7eAa9KyUenXqH0nyLh229uuAI%2BtUDGyikUHksw9d9MrHZwaStHk1kRcHiweyG%2F2wln7Zpco2j%2FzIe5Qyf%2FzmNCZND3F9J8EEX6g8C1El8lUihseKk1x2npJbRZMIUoEraxzDtR8tnzDovsW%2BBjqkAQ%2BnQZLBXbDk%2Fes52ZZppLwOoRkO0FOS73mPtQ2%2F604hf0YFoVboDE30EOQ491yPkyFSclqRBD12UX0RHi%2BI29Qn0z6AIktMOF6QC4yM9ukMFYqzLIqJpmmGTEwKyBzpUtbHP1hzu0XK1CE4Qg2Q9W1lUKElzsyui7E4DCfKr%2F3TlIU589Rj5eMIFzDHU2oIREVv0N3KkkmkYpKxc960BiqQrEWa&X-Amz-Signature=1b0b579b8e03ca96ff62549451f3602437628002e43306619cccb5a12d8469b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z75KXRG7%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDbVONASihEh1bzCNIYkPeQtnDM02%2FZhMJHluLXQGqMkwIhAP2zdbLiPE6VLpAKJ4XztgVmDkaZv9a79sks72NpujL%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fs%2B%2FX8rQBBjctFpMq3AMLED1OSfXMqLFdEmG6mz%2FQ2lqHUWnJo5TCnu1TyJwSuEZc4zgJvLZf5zvOwzfzKcO%2FANyO%2BfyGME%2FofhVG8La7G7l%2BjauwFeJwy%2BS8R%2FzNvayFUq89aQh%2B2fIdaSHWM%2BmEgz21vp%2F3rcWStXHtpp078VHkrnOFAOvTO24kdd9BB4b5q%2FbxhlRJfg5JNhweFbccG0dVNiMtdO%2BRmcdxsk62HmClHNLhb%2BcXyf7USYAXhq17vqqGC0TXtNxl6s3YFxCyc1%2FdOPLgyiQfKenMytI%2FMiRnr7mvgSmF7hW3axYEg0RWfWhIj3RRNrIYfhuL2%2FyI8GxBFRNZy3snI6jKTX34bIS5KE7%2B%2B5mnvy5e62VCUfb1lPG5sWbs%2F2UgNS7pyLVm4ht42FbqHCOj6nCXN9bfhiURIbnep6xMPHEGZYOuuHyhBKokyKyhwoBvcIQv3np4prV54AUTQ0vcteQUy%2Fpyt3xVMVGsBJfe8f6veEWdf7I49mip7eAa9KyUenXqH0nyLh229uuAI%2BtUDGyikUHksw9d9MrHZwaStHk1kRcHiweyG%2F2wln7Zpco2j%2FzIe5Qyf%2FzmNCZND3F9J8EEX6g8C1El8lUihseKk1x2npJbRZMIUoEraxzDtR8tnzDovsW%2BBjqkAQ%2BnQZLBXbDk%2Fes52ZZppLwOoRkO0FOS73mPtQ2%2F604hf0YFoVboDE30EOQ491yPkyFSclqRBD12UX0RHi%2BI29Qn0z6AIktMOF6QC4yM9ukMFYqzLIqJpmmGTEwKyBzpUtbHP1hzu0XK1CE4Qg2Q9W1lUKElzsyui7E4DCfKr%2F3TlIU589Rj5eMIFzDHU2oIREVv0N3KkkmkYpKxc960BiqQrEWa&X-Amz-Signature=d85fd283719889f39f0ef8dfa20bc44b05e8c94ac0e807515d1ed3bb8475305c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z75KXRG7%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDbVONASihEh1bzCNIYkPeQtnDM02%2FZhMJHluLXQGqMkwIhAP2zdbLiPE6VLpAKJ4XztgVmDkaZv9a79sks72NpujL%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fs%2B%2FX8rQBBjctFpMq3AMLED1OSfXMqLFdEmG6mz%2FQ2lqHUWnJo5TCnu1TyJwSuEZc4zgJvLZf5zvOwzfzKcO%2FANyO%2BfyGME%2FofhVG8La7G7l%2BjauwFeJwy%2BS8R%2FzNvayFUq89aQh%2B2fIdaSHWM%2BmEgz21vp%2F3rcWStXHtpp078VHkrnOFAOvTO24kdd9BB4b5q%2FbxhlRJfg5JNhweFbccG0dVNiMtdO%2BRmcdxsk62HmClHNLhb%2BcXyf7USYAXhq17vqqGC0TXtNxl6s3YFxCyc1%2FdOPLgyiQfKenMytI%2FMiRnr7mvgSmF7hW3axYEg0RWfWhIj3RRNrIYfhuL2%2FyI8GxBFRNZy3snI6jKTX34bIS5KE7%2B%2B5mnvy5e62VCUfb1lPG5sWbs%2F2UgNS7pyLVm4ht42FbqHCOj6nCXN9bfhiURIbnep6xMPHEGZYOuuHyhBKokyKyhwoBvcIQv3np4prV54AUTQ0vcteQUy%2Fpyt3xVMVGsBJfe8f6veEWdf7I49mip7eAa9KyUenXqH0nyLh229uuAI%2BtUDGyikUHksw9d9MrHZwaStHk1kRcHiweyG%2F2wln7Zpco2j%2FzIe5Qyf%2FzmNCZND3F9J8EEX6g8C1El8lUihseKk1x2npJbRZMIUoEraxzDtR8tnzDovsW%2BBjqkAQ%2BnQZLBXbDk%2Fes52ZZppLwOoRkO0FOS73mPtQ2%2F604hf0YFoVboDE30EOQ491yPkyFSclqRBD12UX0RHi%2BI29Qn0z6AIktMOF6QC4yM9ukMFYqzLIqJpmmGTEwKyBzpUtbHP1hzu0XK1CE4Qg2Q9W1lUKElzsyui7E4DCfKr%2F3TlIU589Rj5eMIFzDHU2oIREVv0N3KkkmkYpKxc960BiqQrEWa&X-Amz-Signature=575ccb1dcc8cb1bcf599fbb8c7195cb83f82c01c1fb777d0dfd73f6f653adc7c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z75KXRG7%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDbVONASihEh1bzCNIYkPeQtnDM02%2FZhMJHluLXQGqMkwIhAP2zdbLiPE6VLpAKJ4XztgVmDkaZv9a79sks72NpujL%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fs%2B%2FX8rQBBjctFpMq3AMLED1OSfXMqLFdEmG6mz%2FQ2lqHUWnJo5TCnu1TyJwSuEZc4zgJvLZf5zvOwzfzKcO%2FANyO%2BfyGME%2FofhVG8La7G7l%2BjauwFeJwy%2BS8R%2FzNvayFUq89aQh%2B2fIdaSHWM%2BmEgz21vp%2F3rcWStXHtpp078VHkrnOFAOvTO24kdd9BB4b5q%2FbxhlRJfg5JNhweFbccG0dVNiMtdO%2BRmcdxsk62HmClHNLhb%2BcXyf7USYAXhq17vqqGC0TXtNxl6s3YFxCyc1%2FdOPLgyiQfKenMytI%2FMiRnr7mvgSmF7hW3axYEg0RWfWhIj3RRNrIYfhuL2%2FyI8GxBFRNZy3snI6jKTX34bIS5KE7%2B%2B5mnvy5e62VCUfb1lPG5sWbs%2F2UgNS7pyLVm4ht42FbqHCOj6nCXN9bfhiURIbnep6xMPHEGZYOuuHyhBKokyKyhwoBvcIQv3np4prV54AUTQ0vcteQUy%2Fpyt3xVMVGsBJfe8f6veEWdf7I49mip7eAa9KyUenXqH0nyLh229uuAI%2BtUDGyikUHksw9d9MrHZwaStHk1kRcHiweyG%2F2wln7Zpco2j%2FzIe5Qyf%2FzmNCZND3F9J8EEX6g8C1El8lUihseKk1x2npJbRZMIUoEraxzDtR8tnzDovsW%2BBjqkAQ%2BnQZLBXbDk%2Fes52ZZppLwOoRkO0FOS73mPtQ2%2F604hf0YFoVboDE30EOQ491yPkyFSclqRBD12UX0RHi%2BI29Qn0z6AIktMOF6QC4yM9ukMFYqzLIqJpmmGTEwKyBzpUtbHP1hzu0XK1CE4Qg2Q9W1lUKElzsyui7E4DCfKr%2F3TlIU589Rj5eMIFzDHU2oIREVv0N3KkkmkYpKxc960BiqQrEWa&X-Amz-Signature=485ba6d7633554fd5af06a72ad64fb999a506421c797793fb3862aafcd77c25d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z75KXRG7%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDbVONASihEh1bzCNIYkPeQtnDM02%2FZhMJHluLXQGqMkwIhAP2zdbLiPE6VLpAKJ4XztgVmDkaZv9a79sks72NpujL%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fs%2B%2FX8rQBBjctFpMq3AMLED1OSfXMqLFdEmG6mz%2FQ2lqHUWnJo5TCnu1TyJwSuEZc4zgJvLZf5zvOwzfzKcO%2FANyO%2BfyGME%2FofhVG8La7G7l%2BjauwFeJwy%2BS8R%2FzNvayFUq89aQh%2B2fIdaSHWM%2BmEgz21vp%2F3rcWStXHtpp078VHkrnOFAOvTO24kdd9BB4b5q%2FbxhlRJfg5JNhweFbccG0dVNiMtdO%2BRmcdxsk62HmClHNLhb%2BcXyf7USYAXhq17vqqGC0TXtNxl6s3YFxCyc1%2FdOPLgyiQfKenMytI%2FMiRnr7mvgSmF7hW3axYEg0RWfWhIj3RRNrIYfhuL2%2FyI8GxBFRNZy3snI6jKTX34bIS5KE7%2B%2B5mnvy5e62VCUfb1lPG5sWbs%2F2UgNS7pyLVm4ht42FbqHCOj6nCXN9bfhiURIbnep6xMPHEGZYOuuHyhBKokyKyhwoBvcIQv3np4prV54AUTQ0vcteQUy%2Fpyt3xVMVGsBJfe8f6veEWdf7I49mip7eAa9KyUenXqH0nyLh229uuAI%2BtUDGyikUHksw9d9MrHZwaStHk1kRcHiweyG%2F2wln7Zpco2j%2FzIe5Qyf%2FzmNCZND3F9J8EEX6g8C1El8lUihseKk1x2npJbRZMIUoEraxzDtR8tnzDovsW%2BBjqkAQ%2BnQZLBXbDk%2Fes52ZZppLwOoRkO0FOS73mPtQ2%2F604hf0YFoVboDE30EOQ491yPkyFSclqRBD12UX0RHi%2BI29Qn0z6AIktMOF6QC4yM9ukMFYqzLIqJpmmGTEwKyBzpUtbHP1hzu0XK1CE4Qg2Q9W1lUKElzsyui7E4DCfKr%2F3TlIU589Rj5eMIFzDHU2oIREVv0N3KkkmkYpKxc960BiqQrEWa&X-Amz-Signature=bfc882feca6b516d08aaa975cbf78ef40be0d5bec377681360dbbf5427203c45&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z75KXRG7%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDbVONASihEh1bzCNIYkPeQtnDM02%2FZhMJHluLXQGqMkwIhAP2zdbLiPE6VLpAKJ4XztgVmDkaZv9a79sks72NpujL%2BKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fs%2B%2FX8rQBBjctFpMq3AMLED1OSfXMqLFdEmG6mz%2FQ2lqHUWnJo5TCnu1TyJwSuEZc4zgJvLZf5zvOwzfzKcO%2FANyO%2BfyGME%2FofhVG8La7G7l%2BjauwFeJwy%2BS8R%2FzNvayFUq89aQh%2B2fIdaSHWM%2BmEgz21vp%2F3rcWStXHtpp078VHkrnOFAOvTO24kdd9BB4b5q%2FbxhlRJfg5JNhweFbccG0dVNiMtdO%2BRmcdxsk62HmClHNLhb%2BcXyf7USYAXhq17vqqGC0TXtNxl6s3YFxCyc1%2FdOPLgyiQfKenMytI%2FMiRnr7mvgSmF7hW3axYEg0RWfWhIj3RRNrIYfhuL2%2FyI8GxBFRNZy3snI6jKTX34bIS5KE7%2B%2B5mnvy5e62VCUfb1lPG5sWbs%2F2UgNS7pyLVm4ht42FbqHCOj6nCXN9bfhiURIbnep6xMPHEGZYOuuHyhBKokyKyhwoBvcIQv3np4prV54AUTQ0vcteQUy%2Fpyt3xVMVGsBJfe8f6veEWdf7I49mip7eAa9KyUenXqH0nyLh229uuAI%2BtUDGyikUHksw9d9MrHZwaStHk1kRcHiweyG%2F2wln7Zpco2j%2FzIe5Qyf%2FzmNCZND3F9J8EEX6g8C1El8lUihseKk1x2npJbRZMIUoEraxzDtR8tnzDovsW%2BBjqkAQ%2BnQZLBXbDk%2Fes52ZZppLwOoRkO0FOS73mPtQ2%2F604hf0YFoVboDE30EOQ491yPkyFSclqRBD12UX0RHi%2BI29Qn0z6AIktMOF6QC4yM9ukMFYqzLIqJpmmGTEwKyBzpUtbHP1hzu0XK1CE4Qg2Q9W1lUKElzsyui7E4DCfKr%2F3TlIU589Rj5eMIFzDHU2oIREVv0N3KkkmkYpKxc960BiqQrEWa&X-Amz-Signature=679f9c813474a59fe6bf8411afc0bd27817cdabb7f284208cd7562173ad0ea4b&X-Amz-SignedHeaders=host&x-id=GetObject)
