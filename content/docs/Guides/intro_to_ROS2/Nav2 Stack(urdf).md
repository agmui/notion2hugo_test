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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HWXEF4A%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbp52qT8s3gAz275btJczzEfxv50%2Bz6IMOUYCIIszvRAIhAOG1NqtGiJuFgvESiFZ2W%2F7yZRGasm0Uo07FxDNKw1HMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyonzkSDAgrJclqmjQq3AOEm8sVfztCpLoks%2F1fTj86eO0JCjezpYUxSQJB5eVZbQ2t0VD7n3hf9%2BcpHPWEj76RzYTC3lbersy%2BNErrkCeshAX658yFdBv6HBtsRnTyZzaMy3zhA3pFMrMKwYVdRMDVzQKWKMEaNMF4iHopnozZzdUl4QvJtzf9dmP0alAwHSrqzX66JyW49QolAr0oeYKSMN1KrGRTlt0aG4FCvJhOVUy2JiabqL3MHxScEBqBivbv%2BvatkFXvEIK3AchWWzMgmioTqC83ILTBp%2BICsjpPmZQnYren86TWMgl1J3lclP4ONj0IqfjEvUCReupq8jSce8%2BkFL5GJr%2FGaNnuBQePd7IDyoPqAFkeVa21BavyYNpbfa8Y3uG9c38ht0Mgd0PL%2BncRCArVejg%2BZzy1wWa%2B162an%2FlEqUapyw5GAscb1GDBzxQCGEWcOpJMRN43pULavb0GNDP1gNIxX4NkX96QL%2B49t66z89jJ11hniQ18C8oE16EeBP6AtOqKBvGnh8lD6aXa2z3tUmOqf0bsvaggwHczGPFiMWG9XhbCFxMw4wKEPhbf1pSr%2BGXGsDdB3Ti87gatpX1YmVjOcoPSvDR6RuPkdP0PcnVx0KZcwqwJsp9rtamuyimDDc7PsTDftdHCBjqkARw3XIe0vuHFtJo1tt0NLGZWcblznqnWoTkN4tz2JIQVQvt9QZki2%2B0E%2B98peIqlwP3xkEHsIejKpY3Kv%2FhDLsiqyZjl5FaN0P%2BUrodf%2BH%2BQJ03L6kXv6JZexmbyd2CptEH6j06GXaa18Lkpfqvfz7seZGhUBcUQjkhBGezAYLGhv7K2E%2FhYD1ho%2Bta3KlmJDLav3Aqskh%2BIXUhYkyqZHNI%2BNmb7&X-Amz-Signature=f4e5a33e94424fb0d70fe2493a814afee3388a2d03161873b4289816366cf431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HWXEF4A%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbp52qT8s3gAz275btJczzEfxv50%2Bz6IMOUYCIIszvRAIhAOG1NqtGiJuFgvESiFZ2W%2F7yZRGasm0Uo07FxDNKw1HMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyonzkSDAgrJclqmjQq3AOEm8sVfztCpLoks%2F1fTj86eO0JCjezpYUxSQJB5eVZbQ2t0VD7n3hf9%2BcpHPWEj76RzYTC3lbersy%2BNErrkCeshAX658yFdBv6HBtsRnTyZzaMy3zhA3pFMrMKwYVdRMDVzQKWKMEaNMF4iHopnozZzdUl4QvJtzf9dmP0alAwHSrqzX66JyW49QolAr0oeYKSMN1KrGRTlt0aG4FCvJhOVUy2JiabqL3MHxScEBqBivbv%2BvatkFXvEIK3AchWWzMgmioTqC83ILTBp%2BICsjpPmZQnYren86TWMgl1J3lclP4ONj0IqfjEvUCReupq8jSce8%2BkFL5GJr%2FGaNnuBQePd7IDyoPqAFkeVa21BavyYNpbfa8Y3uG9c38ht0Mgd0PL%2BncRCArVejg%2BZzy1wWa%2B162an%2FlEqUapyw5GAscb1GDBzxQCGEWcOpJMRN43pULavb0GNDP1gNIxX4NkX96QL%2B49t66z89jJ11hniQ18C8oE16EeBP6AtOqKBvGnh8lD6aXa2z3tUmOqf0bsvaggwHczGPFiMWG9XhbCFxMw4wKEPhbf1pSr%2BGXGsDdB3Ti87gatpX1YmVjOcoPSvDR6RuPkdP0PcnVx0KZcwqwJsp9rtamuyimDDc7PsTDftdHCBjqkARw3XIe0vuHFtJo1tt0NLGZWcblznqnWoTkN4tz2JIQVQvt9QZki2%2B0E%2B98peIqlwP3xkEHsIejKpY3Kv%2FhDLsiqyZjl5FaN0P%2BUrodf%2BH%2BQJ03L6kXv6JZexmbyd2CptEH6j06GXaa18Lkpfqvfz7seZGhUBcUQjkhBGezAYLGhv7K2E%2FhYD1ho%2Bta3KlmJDLav3Aqskh%2BIXUhYkyqZHNI%2BNmb7&X-Amz-Signature=afca331c578c2efa880ae32ba250662128b57e6ae312cd9303dd46cc92bfa003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HWXEF4A%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbp52qT8s3gAz275btJczzEfxv50%2Bz6IMOUYCIIszvRAIhAOG1NqtGiJuFgvESiFZ2W%2F7yZRGasm0Uo07FxDNKw1HMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyonzkSDAgrJclqmjQq3AOEm8sVfztCpLoks%2F1fTj86eO0JCjezpYUxSQJB5eVZbQ2t0VD7n3hf9%2BcpHPWEj76RzYTC3lbersy%2BNErrkCeshAX658yFdBv6HBtsRnTyZzaMy3zhA3pFMrMKwYVdRMDVzQKWKMEaNMF4iHopnozZzdUl4QvJtzf9dmP0alAwHSrqzX66JyW49QolAr0oeYKSMN1KrGRTlt0aG4FCvJhOVUy2JiabqL3MHxScEBqBivbv%2BvatkFXvEIK3AchWWzMgmioTqC83ILTBp%2BICsjpPmZQnYren86TWMgl1J3lclP4ONj0IqfjEvUCReupq8jSce8%2BkFL5GJr%2FGaNnuBQePd7IDyoPqAFkeVa21BavyYNpbfa8Y3uG9c38ht0Mgd0PL%2BncRCArVejg%2BZzy1wWa%2B162an%2FlEqUapyw5GAscb1GDBzxQCGEWcOpJMRN43pULavb0GNDP1gNIxX4NkX96QL%2B49t66z89jJ11hniQ18C8oE16EeBP6AtOqKBvGnh8lD6aXa2z3tUmOqf0bsvaggwHczGPFiMWG9XhbCFxMw4wKEPhbf1pSr%2BGXGsDdB3Ti87gatpX1YmVjOcoPSvDR6RuPkdP0PcnVx0KZcwqwJsp9rtamuyimDDc7PsTDftdHCBjqkARw3XIe0vuHFtJo1tt0NLGZWcblznqnWoTkN4tz2JIQVQvt9QZki2%2B0E%2B98peIqlwP3xkEHsIejKpY3Kv%2FhDLsiqyZjl5FaN0P%2BUrodf%2BH%2BQJ03L6kXv6JZexmbyd2CptEH6j06GXaa18Lkpfqvfz7seZGhUBcUQjkhBGezAYLGhv7K2E%2FhYD1ho%2Bta3KlmJDLav3Aqskh%2BIXUhYkyqZHNI%2BNmb7&X-Amz-Signature=5e651fdc6f0faad53721202829159a54245f8c41e7c1d54f5c64819ffd7ad245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HWXEF4A%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbp52qT8s3gAz275btJczzEfxv50%2Bz6IMOUYCIIszvRAIhAOG1NqtGiJuFgvESiFZ2W%2F7yZRGasm0Uo07FxDNKw1HMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyonzkSDAgrJclqmjQq3AOEm8sVfztCpLoks%2F1fTj86eO0JCjezpYUxSQJB5eVZbQ2t0VD7n3hf9%2BcpHPWEj76RzYTC3lbersy%2BNErrkCeshAX658yFdBv6HBtsRnTyZzaMy3zhA3pFMrMKwYVdRMDVzQKWKMEaNMF4iHopnozZzdUl4QvJtzf9dmP0alAwHSrqzX66JyW49QolAr0oeYKSMN1KrGRTlt0aG4FCvJhOVUy2JiabqL3MHxScEBqBivbv%2BvatkFXvEIK3AchWWzMgmioTqC83ILTBp%2BICsjpPmZQnYren86TWMgl1J3lclP4ONj0IqfjEvUCReupq8jSce8%2BkFL5GJr%2FGaNnuBQePd7IDyoPqAFkeVa21BavyYNpbfa8Y3uG9c38ht0Mgd0PL%2BncRCArVejg%2BZzy1wWa%2B162an%2FlEqUapyw5GAscb1GDBzxQCGEWcOpJMRN43pULavb0GNDP1gNIxX4NkX96QL%2B49t66z89jJ11hniQ18C8oE16EeBP6AtOqKBvGnh8lD6aXa2z3tUmOqf0bsvaggwHczGPFiMWG9XhbCFxMw4wKEPhbf1pSr%2BGXGsDdB3Ti87gatpX1YmVjOcoPSvDR6RuPkdP0PcnVx0KZcwqwJsp9rtamuyimDDc7PsTDftdHCBjqkARw3XIe0vuHFtJo1tt0NLGZWcblznqnWoTkN4tz2JIQVQvt9QZki2%2B0E%2B98peIqlwP3xkEHsIejKpY3Kv%2FhDLsiqyZjl5FaN0P%2BUrodf%2BH%2BQJ03L6kXv6JZexmbyd2CptEH6j06GXaa18Lkpfqvfz7seZGhUBcUQjkhBGezAYLGhv7K2E%2FhYD1ho%2Bta3KlmJDLav3Aqskh%2BIXUhYkyqZHNI%2BNmb7&X-Amz-Signature=21cf821096f8c5e5d07107a9993916d1d9f41caf5a0509810f98dad4e83b51b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HWXEF4A%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbp52qT8s3gAz275btJczzEfxv50%2Bz6IMOUYCIIszvRAIhAOG1NqtGiJuFgvESiFZ2W%2F7yZRGasm0Uo07FxDNKw1HMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyonzkSDAgrJclqmjQq3AOEm8sVfztCpLoks%2F1fTj86eO0JCjezpYUxSQJB5eVZbQ2t0VD7n3hf9%2BcpHPWEj76RzYTC3lbersy%2BNErrkCeshAX658yFdBv6HBtsRnTyZzaMy3zhA3pFMrMKwYVdRMDVzQKWKMEaNMF4iHopnozZzdUl4QvJtzf9dmP0alAwHSrqzX66JyW49QolAr0oeYKSMN1KrGRTlt0aG4FCvJhOVUy2JiabqL3MHxScEBqBivbv%2BvatkFXvEIK3AchWWzMgmioTqC83ILTBp%2BICsjpPmZQnYren86TWMgl1J3lclP4ONj0IqfjEvUCReupq8jSce8%2BkFL5GJr%2FGaNnuBQePd7IDyoPqAFkeVa21BavyYNpbfa8Y3uG9c38ht0Mgd0PL%2BncRCArVejg%2BZzy1wWa%2B162an%2FlEqUapyw5GAscb1GDBzxQCGEWcOpJMRN43pULavb0GNDP1gNIxX4NkX96QL%2B49t66z89jJ11hniQ18C8oE16EeBP6AtOqKBvGnh8lD6aXa2z3tUmOqf0bsvaggwHczGPFiMWG9XhbCFxMw4wKEPhbf1pSr%2BGXGsDdB3Ti87gatpX1YmVjOcoPSvDR6RuPkdP0PcnVx0KZcwqwJsp9rtamuyimDDc7PsTDftdHCBjqkARw3XIe0vuHFtJo1tt0NLGZWcblznqnWoTkN4tz2JIQVQvt9QZki2%2B0E%2B98peIqlwP3xkEHsIejKpY3Kv%2FhDLsiqyZjl5FaN0P%2BUrodf%2BH%2BQJ03L6kXv6JZexmbyd2CptEH6j06GXaa18Lkpfqvfz7seZGhUBcUQjkhBGezAYLGhv7K2E%2FhYD1ho%2Bta3KlmJDLav3Aqskh%2BIXUhYkyqZHNI%2BNmb7&X-Amz-Signature=71f2155b5c124014a9e5a6c7c0482c5d80516d8abc3d06840469b9db10c267d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HWXEF4A%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbp52qT8s3gAz275btJczzEfxv50%2Bz6IMOUYCIIszvRAIhAOG1NqtGiJuFgvESiFZ2W%2F7yZRGasm0Uo07FxDNKw1HMKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyonzkSDAgrJclqmjQq3AOEm8sVfztCpLoks%2F1fTj86eO0JCjezpYUxSQJB5eVZbQ2t0VD7n3hf9%2BcpHPWEj76RzYTC3lbersy%2BNErrkCeshAX658yFdBv6HBtsRnTyZzaMy3zhA3pFMrMKwYVdRMDVzQKWKMEaNMF4iHopnozZzdUl4QvJtzf9dmP0alAwHSrqzX66JyW49QolAr0oeYKSMN1KrGRTlt0aG4FCvJhOVUy2JiabqL3MHxScEBqBivbv%2BvatkFXvEIK3AchWWzMgmioTqC83ILTBp%2BICsjpPmZQnYren86TWMgl1J3lclP4ONj0IqfjEvUCReupq8jSce8%2BkFL5GJr%2FGaNnuBQePd7IDyoPqAFkeVa21BavyYNpbfa8Y3uG9c38ht0Mgd0PL%2BncRCArVejg%2BZzy1wWa%2B162an%2FlEqUapyw5GAscb1GDBzxQCGEWcOpJMRN43pULavb0GNDP1gNIxX4NkX96QL%2B49t66z89jJ11hniQ18C8oE16EeBP6AtOqKBvGnh8lD6aXa2z3tUmOqf0bsvaggwHczGPFiMWG9XhbCFxMw4wKEPhbf1pSr%2BGXGsDdB3Ti87gatpX1YmVjOcoPSvDR6RuPkdP0PcnVx0KZcwqwJsp9rtamuyimDDc7PsTDftdHCBjqkARw3XIe0vuHFtJo1tt0NLGZWcblznqnWoTkN4tz2JIQVQvt9QZki2%2B0E%2B98peIqlwP3xkEHsIejKpY3Kv%2FhDLsiqyZjl5FaN0P%2BUrodf%2BH%2BQJ03L6kXv6JZexmbyd2CptEH6j06GXaa18Lkpfqvfz7seZGhUBcUQjkhBGezAYLGhv7K2E%2FhYD1ho%2Bta3KlmJDLav3Aqskh%2BIXUhYkyqZHNI%2BNmb7&X-Amz-Signature=a437a251dac09b214db62f3ff3336b50a7774455bb9cf72934c3be1dc6ff72b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
