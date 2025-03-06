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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5S6PW6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEm9%2F2GCgJSI9cTUaDAB76Qj60wH9kzIz8zkUsObLWRzAh8rsY1TzAwzZLnWS8ybKvqtDp5UVZdtCwMXBBNJqZcKKv8DCCUQABoMNjM3NDIzMTgzODA1IgwaTXJo%2F7CQrEVoYEsq3AMQ8jJvJgpd6cGJIAOVhZigwpWxmETy1ftphqmx0rMtz%2BpMLY8sBOj7yFc52sBmGx%2BPoOoE%2FINfh%2FsQC6Hy1vovcYiKeOl2aLfEqbxSaOEvSw1kucJDSg%2BRfptE6cOGxkaZLxIwJw5PFroW6ACxXwcgpDp3A%2B8R88oe8XB3naJovXJSlNQyBy%2BNVamcPY2ySU8Jk9oPAqRbAmZZlEDXNZ55ZEiHFMzHobGxwCmugCdP%2FiDwvt3PKeBV%2B1LgfBeGR0hjHhSNZljD84rdlj%2FN4%2FaLOCppLM%2BbN1Erav74fGGOkPA6kPY8VisTEjxqfnq2xY5iwfbhF9Qos6sjWB7bgsUpRbdp35RnrDm3Oal4dliUkVj07GsVHDQ1IP2D40PKPgxeThfPInHQTFIjMvjgRtOceNCdkfeqwzvQSGdWlrGE%2FcHw058VUWmhBDbH96FjfuFdc%2Fqks5GjAxXaHdBqCncTLqTGYUML8QOjy%2FYoECdkoCJw3uOa3mSoSeTNKqBRJ5KKYWQ2%2B3071%2BPQVx4YKy76YwPNwa3EaJRpLiZHiR84i7c08L%2Bd948akZHXYH06b6mU5mkLp2%2BARov1kTTEQSXN1noJ5M5LiAnI4gFzQ4Pi4rSL6JeDxv%2BJ4KX8STCxuqS%2BBjqnATJitra5WZXi8Bi9oZd2wvtbpVs03QNZM1GM5nviNsyHra6yAC6eyCuCfI%2F4vS8EwHVKJt%2BuOxBY81wzxkOFi0EUUkQ3wdAC2mG4meX6YB4Y9HKe3F50M8dWpVoWQzxWCGBJc9VpMjjGoAmwqVMawTGsEx40RW8eJkMdVPXyNkBr76HwQ1z8%2FEdH87fybNH2cvWOuKMtyTTZcGhSj1G0LyQZSKUBRuO%2B&X-Amz-Signature=4f866c0d1abf29e3670b47dd0b896bfa89817608b596e00fb0982a9ffe62ee86&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5S6PW6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEm9%2F2GCgJSI9cTUaDAB76Qj60wH9kzIz8zkUsObLWRzAh8rsY1TzAwzZLnWS8ybKvqtDp5UVZdtCwMXBBNJqZcKKv8DCCUQABoMNjM3NDIzMTgzODA1IgwaTXJo%2F7CQrEVoYEsq3AMQ8jJvJgpd6cGJIAOVhZigwpWxmETy1ftphqmx0rMtz%2BpMLY8sBOj7yFc52sBmGx%2BPoOoE%2FINfh%2FsQC6Hy1vovcYiKeOl2aLfEqbxSaOEvSw1kucJDSg%2BRfptE6cOGxkaZLxIwJw5PFroW6ACxXwcgpDp3A%2B8R88oe8XB3naJovXJSlNQyBy%2BNVamcPY2ySU8Jk9oPAqRbAmZZlEDXNZ55ZEiHFMzHobGxwCmugCdP%2FiDwvt3PKeBV%2B1LgfBeGR0hjHhSNZljD84rdlj%2FN4%2FaLOCppLM%2BbN1Erav74fGGOkPA6kPY8VisTEjxqfnq2xY5iwfbhF9Qos6sjWB7bgsUpRbdp35RnrDm3Oal4dliUkVj07GsVHDQ1IP2D40PKPgxeThfPInHQTFIjMvjgRtOceNCdkfeqwzvQSGdWlrGE%2FcHw058VUWmhBDbH96FjfuFdc%2Fqks5GjAxXaHdBqCncTLqTGYUML8QOjy%2FYoECdkoCJw3uOa3mSoSeTNKqBRJ5KKYWQ2%2B3071%2BPQVx4YKy76YwPNwa3EaJRpLiZHiR84i7c08L%2Bd948akZHXYH06b6mU5mkLp2%2BARov1kTTEQSXN1noJ5M5LiAnI4gFzQ4Pi4rSL6JeDxv%2BJ4KX8STCxuqS%2BBjqnATJitra5WZXi8Bi9oZd2wvtbpVs03QNZM1GM5nviNsyHra6yAC6eyCuCfI%2F4vS8EwHVKJt%2BuOxBY81wzxkOFi0EUUkQ3wdAC2mG4meX6YB4Y9HKe3F50M8dWpVoWQzxWCGBJc9VpMjjGoAmwqVMawTGsEx40RW8eJkMdVPXyNkBr76HwQ1z8%2FEdH87fybNH2cvWOuKMtyTTZcGhSj1G0LyQZSKUBRuO%2B&X-Amz-Signature=932377c8c95da64b69963774b3a3ce01dc4b9d4683a6082f4924649efe585aa3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5S6PW6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEm9%2F2GCgJSI9cTUaDAB76Qj60wH9kzIz8zkUsObLWRzAh8rsY1TzAwzZLnWS8ybKvqtDp5UVZdtCwMXBBNJqZcKKv8DCCUQABoMNjM3NDIzMTgzODA1IgwaTXJo%2F7CQrEVoYEsq3AMQ8jJvJgpd6cGJIAOVhZigwpWxmETy1ftphqmx0rMtz%2BpMLY8sBOj7yFc52sBmGx%2BPoOoE%2FINfh%2FsQC6Hy1vovcYiKeOl2aLfEqbxSaOEvSw1kucJDSg%2BRfptE6cOGxkaZLxIwJw5PFroW6ACxXwcgpDp3A%2B8R88oe8XB3naJovXJSlNQyBy%2BNVamcPY2ySU8Jk9oPAqRbAmZZlEDXNZ55ZEiHFMzHobGxwCmugCdP%2FiDwvt3PKeBV%2B1LgfBeGR0hjHhSNZljD84rdlj%2FN4%2FaLOCppLM%2BbN1Erav74fGGOkPA6kPY8VisTEjxqfnq2xY5iwfbhF9Qos6sjWB7bgsUpRbdp35RnrDm3Oal4dliUkVj07GsVHDQ1IP2D40PKPgxeThfPInHQTFIjMvjgRtOceNCdkfeqwzvQSGdWlrGE%2FcHw058VUWmhBDbH96FjfuFdc%2Fqks5GjAxXaHdBqCncTLqTGYUML8QOjy%2FYoECdkoCJw3uOa3mSoSeTNKqBRJ5KKYWQ2%2B3071%2BPQVx4YKy76YwPNwa3EaJRpLiZHiR84i7c08L%2Bd948akZHXYH06b6mU5mkLp2%2BARov1kTTEQSXN1noJ5M5LiAnI4gFzQ4Pi4rSL6JeDxv%2BJ4KX8STCxuqS%2BBjqnATJitra5WZXi8Bi9oZd2wvtbpVs03QNZM1GM5nviNsyHra6yAC6eyCuCfI%2F4vS8EwHVKJt%2BuOxBY81wzxkOFi0EUUkQ3wdAC2mG4meX6YB4Y9HKe3F50M8dWpVoWQzxWCGBJc9VpMjjGoAmwqVMawTGsEx40RW8eJkMdVPXyNkBr76HwQ1z8%2FEdH87fybNH2cvWOuKMtyTTZcGhSj1G0LyQZSKUBRuO%2B&X-Amz-Signature=944c1ce58d1071e5a834a3ec58777e0025267305af40c54dcdd1515516380d84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5S6PW6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEm9%2F2GCgJSI9cTUaDAB76Qj60wH9kzIz8zkUsObLWRzAh8rsY1TzAwzZLnWS8ybKvqtDp5UVZdtCwMXBBNJqZcKKv8DCCUQABoMNjM3NDIzMTgzODA1IgwaTXJo%2F7CQrEVoYEsq3AMQ8jJvJgpd6cGJIAOVhZigwpWxmETy1ftphqmx0rMtz%2BpMLY8sBOj7yFc52sBmGx%2BPoOoE%2FINfh%2FsQC6Hy1vovcYiKeOl2aLfEqbxSaOEvSw1kucJDSg%2BRfptE6cOGxkaZLxIwJw5PFroW6ACxXwcgpDp3A%2B8R88oe8XB3naJovXJSlNQyBy%2BNVamcPY2ySU8Jk9oPAqRbAmZZlEDXNZ55ZEiHFMzHobGxwCmugCdP%2FiDwvt3PKeBV%2B1LgfBeGR0hjHhSNZljD84rdlj%2FN4%2FaLOCppLM%2BbN1Erav74fGGOkPA6kPY8VisTEjxqfnq2xY5iwfbhF9Qos6sjWB7bgsUpRbdp35RnrDm3Oal4dliUkVj07GsVHDQ1IP2D40PKPgxeThfPInHQTFIjMvjgRtOceNCdkfeqwzvQSGdWlrGE%2FcHw058VUWmhBDbH96FjfuFdc%2Fqks5GjAxXaHdBqCncTLqTGYUML8QOjy%2FYoECdkoCJw3uOa3mSoSeTNKqBRJ5KKYWQ2%2B3071%2BPQVx4YKy76YwPNwa3EaJRpLiZHiR84i7c08L%2Bd948akZHXYH06b6mU5mkLp2%2BARov1kTTEQSXN1noJ5M5LiAnI4gFzQ4Pi4rSL6JeDxv%2BJ4KX8STCxuqS%2BBjqnATJitra5WZXi8Bi9oZd2wvtbpVs03QNZM1GM5nviNsyHra6yAC6eyCuCfI%2F4vS8EwHVKJt%2BuOxBY81wzxkOFi0EUUkQ3wdAC2mG4meX6YB4Y9HKe3F50M8dWpVoWQzxWCGBJc9VpMjjGoAmwqVMawTGsEx40RW8eJkMdVPXyNkBr76HwQ1z8%2FEdH87fybNH2cvWOuKMtyTTZcGhSj1G0LyQZSKUBRuO%2B&X-Amz-Signature=b313a5302d060267e16eeb43d24c574972336f33f6f40b76b457304ca854d236&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5S6PW6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEm9%2F2GCgJSI9cTUaDAB76Qj60wH9kzIz8zkUsObLWRzAh8rsY1TzAwzZLnWS8ybKvqtDp5UVZdtCwMXBBNJqZcKKv8DCCUQABoMNjM3NDIzMTgzODA1IgwaTXJo%2F7CQrEVoYEsq3AMQ8jJvJgpd6cGJIAOVhZigwpWxmETy1ftphqmx0rMtz%2BpMLY8sBOj7yFc52sBmGx%2BPoOoE%2FINfh%2FsQC6Hy1vovcYiKeOl2aLfEqbxSaOEvSw1kucJDSg%2BRfptE6cOGxkaZLxIwJw5PFroW6ACxXwcgpDp3A%2B8R88oe8XB3naJovXJSlNQyBy%2BNVamcPY2ySU8Jk9oPAqRbAmZZlEDXNZ55ZEiHFMzHobGxwCmugCdP%2FiDwvt3PKeBV%2B1LgfBeGR0hjHhSNZljD84rdlj%2FN4%2FaLOCppLM%2BbN1Erav74fGGOkPA6kPY8VisTEjxqfnq2xY5iwfbhF9Qos6sjWB7bgsUpRbdp35RnrDm3Oal4dliUkVj07GsVHDQ1IP2D40PKPgxeThfPInHQTFIjMvjgRtOceNCdkfeqwzvQSGdWlrGE%2FcHw058VUWmhBDbH96FjfuFdc%2Fqks5GjAxXaHdBqCncTLqTGYUML8QOjy%2FYoECdkoCJw3uOa3mSoSeTNKqBRJ5KKYWQ2%2B3071%2BPQVx4YKy76YwPNwa3EaJRpLiZHiR84i7c08L%2Bd948akZHXYH06b6mU5mkLp2%2BARov1kTTEQSXN1noJ5M5LiAnI4gFzQ4Pi4rSL6JeDxv%2BJ4KX8STCxuqS%2BBjqnATJitra5WZXi8Bi9oZd2wvtbpVs03QNZM1GM5nviNsyHra6yAC6eyCuCfI%2F4vS8EwHVKJt%2BuOxBY81wzxkOFi0EUUkQ3wdAC2mG4meX6YB4Y9HKe3F50M8dWpVoWQzxWCGBJc9VpMjjGoAmwqVMawTGsEx40RW8eJkMdVPXyNkBr76HwQ1z8%2FEdH87fybNH2cvWOuKMtyTTZcGhSj1G0LyQZSKUBRuO%2B&X-Amz-Signature=ed89804f2430636761c3e5e691429f0ca0a38833b8880fe5dfb9cfeacebcc05a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL5S6PW6%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIEm9%2F2GCgJSI9cTUaDAB76Qj60wH9kzIz8zkUsObLWRzAh8rsY1TzAwzZLnWS8ybKvqtDp5UVZdtCwMXBBNJqZcKKv8DCCUQABoMNjM3NDIzMTgzODA1IgwaTXJo%2F7CQrEVoYEsq3AMQ8jJvJgpd6cGJIAOVhZigwpWxmETy1ftphqmx0rMtz%2BpMLY8sBOj7yFc52sBmGx%2BPoOoE%2FINfh%2FsQC6Hy1vovcYiKeOl2aLfEqbxSaOEvSw1kucJDSg%2BRfptE6cOGxkaZLxIwJw5PFroW6ACxXwcgpDp3A%2B8R88oe8XB3naJovXJSlNQyBy%2BNVamcPY2ySU8Jk9oPAqRbAmZZlEDXNZ55ZEiHFMzHobGxwCmugCdP%2FiDwvt3PKeBV%2B1LgfBeGR0hjHhSNZljD84rdlj%2FN4%2FaLOCppLM%2BbN1Erav74fGGOkPA6kPY8VisTEjxqfnq2xY5iwfbhF9Qos6sjWB7bgsUpRbdp35RnrDm3Oal4dliUkVj07GsVHDQ1IP2D40PKPgxeThfPInHQTFIjMvjgRtOceNCdkfeqwzvQSGdWlrGE%2FcHw058VUWmhBDbH96FjfuFdc%2Fqks5GjAxXaHdBqCncTLqTGYUML8QOjy%2FYoECdkoCJw3uOa3mSoSeTNKqBRJ5KKYWQ2%2B3071%2BPQVx4YKy76YwPNwa3EaJRpLiZHiR84i7c08L%2Bd948akZHXYH06b6mU5mkLp2%2BARov1kTTEQSXN1noJ5M5LiAnI4gFzQ4Pi4rSL6JeDxv%2BJ4KX8STCxuqS%2BBjqnATJitra5WZXi8Bi9oZd2wvtbpVs03QNZM1GM5nviNsyHra6yAC6eyCuCfI%2F4vS8EwHVKJt%2BuOxBY81wzxkOFi0EUUkQ3wdAC2mG4meX6YB4Y9HKe3F50M8dWpVoWQzxWCGBJc9VpMjjGoAmwqVMawTGsEx40RW8eJkMdVPXyNkBr76HwQ1z8%2FEdH87fybNH2cvWOuKMtyTTZcGhSj1G0LyQZSKUBRuO%2B&X-Amz-Signature=236d481b9cd9089fafacfaa0afa65a64f304dd2ce891d972c10fa27df94f4b2c&X-Amz-SignedHeaders=host&x-id=GetObject)
