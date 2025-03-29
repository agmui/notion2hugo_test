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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLK36M6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFz1bTFhxeSXhrP5%2FXYW2QHsqo5LQ0JvAv6ymc2gkXW%2BAiBRuYZtkcwQogA5pvyqzAFIWG3ZFuK%2Bzc9HWoftDgMWDyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2FN%2F7EDDw%2F9Jcc%2FqdKtwDeZjoJfqiOAh%2BwAKONkbcagywozuNppzdxjNoix8wd9Kif1I%2Bo%2B8qN0Ie8m%2Fv%2FAJ0Onrz3KbUkSOGP%2B9FYoNrq1zebJbGVIL6Dmkdy4L5oP04xVAH7LTHKBtJIl4ovyr6hX%2F9z8e5RTVEhspAkZgPGGm9f71S3MGDCt0JmKjXSztP0STdJa7Cboea1mmmHxYvKHunglAtgbtE%2Fs0HZRcETix%2F1Dfzts7LXk84JyoXCln6ZlFzV8Hr6JtTWYUnXtdWhM8OXfTikcbe4VLfAXvXHWzwSov9xvCgSVpJ8IkcTgDQH9GTxxmhhUiwLbUs5aQLP%2F7RvuLHlCLc04q4365ILnz4DHMPDfEQDO6eQvBy9OzwDduZ6X7Va56648J%2BZcdHvY9J7wqrEqb9wWu7ovj1GE0uHJCuiOWGCiZkPchskudJsbdEQnpNN4%2B3A8m%2FsBp564YCtcq5V%2FyMmYdrYiws6FRE8b53WKGubni4rlo4cUYCCluHNeuvma7dL%2FYoQJ4sxNkTf%2B6opQNX%2BE7khCQT50CcK8VwZN9OBqjpm%2FZ87%2FYu9shW%2Fna7Lb9YG2lNc4cyW71GZLPZ7%2B82pUkvOERJwhd3GqJ2UI1RfyS4MPi8UhNv9a%2FLkN%2BLX5Kcbrww7uKevwY6pgHXt75rhk%2BVepEAwgM3ImBDx3oJj6AaVycNb%2FELVQTm08CErfQBQdp50CS3p23xKaYAG5TtAKclV9goNaI9zE1M9S%2FwRy5uBp8fzAykxQ6n0Be0K0teFUZEzMDRvICnYYVer%2BnPChi%2BDXF7XiN9IBkKmx%2BAVLigjk5S31ukQpUgmgt6uK1CT0wn%2FJgSTLD%2BLOM6tn6wY6Mnw0v42iu%2BeegsP3XWcHrA&X-Amz-Signature=713b5f10e306bb63805a30749ac0a8f28adba35f7095feee3d1f6e15e44f0098&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLK36M6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFz1bTFhxeSXhrP5%2FXYW2QHsqo5LQ0JvAv6ymc2gkXW%2BAiBRuYZtkcwQogA5pvyqzAFIWG3ZFuK%2Bzc9HWoftDgMWDyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2FN%2F7EDDw%2F9Jcc%2FqdKtwDeZjoJfqiOAh%2BwAKONkbcagywozuNppzdxjNoix8wd9Kif1I%2Bo%2B8qN0Ie8m%2Fv%2FAJ0Onrz3KbUkSOGP%2B9FYoNrq1zebJbGVIL6Dmkdy4L5oP04xVAH7LTHKBtJIl4ovyr6hX%2F9z8e5RTVEhspAkZgPGGm9f71S3MGDCt0JmKjXSztP0STdJa7Cboea1mmmHxYvKHunglAtgbtE%2Fs0HZRcETix%2F1Dfzts7LXk84JyoXCln6ZlFzV8Hr6JtTWYUnXtdWhM8OXfTikcbe4VLfAXvXHWzwSov9xvCgSVpJ8IkcTgDQH9GTxxmhhUiwLbUs5aQLP%2F7RvuLHlCLc04q4365ILnz4DHMPDfEQDO6eQvBy9OzwDduZ6X7Va56648J%2BZcdHvY9J7wqrEqb9wWu7ovj1GE0uHJCuiOWGCiZkPchskudJsbdEQnpNN4%2B3A8m%2FsBp564YCtcq5V%2FyMmYdrYiws6FRE8b53WKGubni4rlo4cUYCCluHNeuvma7dL%2FYoQJ4sxNkTf%2B6opQNX%2BE7khCQT50CcK8VwZN9OBqjpm%2FZ87%2FYu9shW%2Fna7Lb9YG2lNc4cyW71GZLPZ7%2B82pUkvOERJwhd3GqJ2UI1RfyS4MPi8UhNv9a%2FLkN%2BLX5Kcbrww7uKevwY6pgHXt75rhk%2BVepEAwgM3ImBDx3oJj6AaVycNb%2FELVQTm08CErfQBQdp50CS3p23xKaYAG5TtAKclV9goNaI9zE1M9S%2FwRy5uBp8fzAykxQ6n0Be0K0teFUZEzMDRvICnYYVer%2BnPChi%2BDXF7XiN9IBkKmx%2BAVLigjk5S31ukQpUgmgt6uK1CT0wn%2FJgSTLD%2BLOM6tn6wY6Mnw0v42iu%2BeegsP3XWcHrA&X-Amz-Signature=f331623bdb9e6850c29bb42629569b0e35c951eb930e24163b06cda84901a66b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLK36M6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFz1bTFhxeSXhrP5%2FXYW2QHsqo5LQ0JvAv6ymc2gkXW%2BAiBRuYZtkcwQogA5pvyqzAFIWG3ZFuK%2Bzc9HWoftDgMWDyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2FN%2F7EDDw%2F9Jcc%2FqdKtwDeZjoJfqiOAh%2BwAKONkbcagywozuNppzdxjNoix8wd9Kif1I%2Bo%2B8qN0Ie8m%2Fv%2FAJ0Onrz3KbUkSOGP%2B9FYoNrq1zebJbGVIL6Dmkdy4L5oP04xVAH7LTHKBtJIl4ovyr6hX%2F9z8e5RTVEhspAkZgPGGm9f71S3MGDCt0JmKjXSztP0STdJa7Cboea1mmmHxYvKHunglAtgbtE%2Fs0HZRcETix%2F1Dfzts7LXk84JyoXCln6ZlFzV8Hr6JtTWYUnXtdWhM8OXfTikcbe4VLfAXvXHWzwSov9xvCgSVpJ8IkcTgDQH9GTxxmhhUiwLbUs5aQLP%2F7RvuLHlCLc04q4365ILnz4DHMPDfEQDO6eQvBy9OzwDduZ6X7Va56648J%2BZcdHvY9J7wqrEqb9wWu7ovj1GE0uHJCuiOWGCiZkPchskudJsbdEQnpNN4%2B3A8m%2FsBp564YCtcq5V%2FyMmYdrYiws6FRE8b53WKGubni4rlo4cUYCCluHNeuvma7dL%2FYoQJ4sxNkTf%2B6opQNX%2BE7khCQT50CcK8VwZN9OBqjpm%2FZ87%2FYu9shW%2Fna7Lb9YG2lNc4cyW71GZLPZ7%2B82pUkvOERJwhd3GqJ2UI1RfyS4MPi8UhNv9a%2FLkN%2BLX5Kcbrww7uKevwY6pgHXt75rhk%2BVepEAwgM3ImBDx3oJj6AaVycNb%2FELVQTm08CErfQBQdp50CS3p23xKaYAG5TtAKclV9goNaI9zE1M9S%2FwRy5uBp8fzAykxQ6n0Be0K0teFUZEzMDRvICnYYVer%2BnPChi%2BDXF7XiN9IBkKmx%2BAVLigjk5S31ukQpUgmgt6uK1CT0wn%2FJgSTLD%2BLOM6tn6wY6Mnw0v42iu%2BeegsP3XWcHrA&X-Amz-Signature=27120c31bf290b015502d2b754907ab3c1a77085b33cff123f8026ff43f53c82&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLK36M6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFz1bTFhxeSXhrP5%2FXYW2QHsqo5LQ0JvAv6ymc2gkXW%2BAiBRuYZtkcwQogA5pvyqzAFIWG3ZFuK%2Bzc9HWoftDgMWDyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2FN%2F7EDDw%2F9Jcc%2FqdKtwDeZjoJfqiOAh%2BwAKONkbcagywozuNppzdxjNoix8wd9Kif1I%2Bo%2B8qN0Ie8m%2Fv%2FAJ0Onrz3KbUkSOGP%2B9FYoNrq1zebJbGVIL6Dmkdy4L5oP04xVAH7LTHKBtJIl4ovyr6hX%2F9z8e5RTVEhspAkZgPGGm9f71S3MGDCt0JmKjXSztP0STdJa7Cboea1mmmHxYvKHunglAtgbtE%2Fs0HZRcETix%2F1Dfzts7LXk84JyoXCln6ZlFzV8Hr6JtTWYUnXtdWhM8OXfTikcbe4VLfAXvXHWzwSov9xvCgSVpJ8IkcTgDQH9GTxxmhhUiwLbUs5aQLP%2F7RvuLHlCLc04q4365ILnz4DHMPDfEQDO6eQvBy9OzwDduZ6X7Va56648J%2BZcdHvY9J7wqrEqb9wWu7ovj1GE0uHJCuiOWGCiZkPchskudJsbdEQnpNN4%2B3A8m%2FsBp564YCtcq5V%2FyMmYdrYiws6FRE8b53WKGubni4rlo4cUYCCluHNeuvma7dL%2FYoQJ4sxNkTf%2B6opQNX%2BE7khCQT50CcK8VwZN9OBqjpm%2FZ87%2FYu9shW%2Fna7Lb9YG2lNc4cyW71GZLPZ7%2B82pUkvOERJwhd3GqJ2UI1RfyS4MPi8UhNv9a%2FLkN%2BLX5Kcbrww7uKevwY6pgHXt75rhk%2BVepEAwgM3ImBDx3oJj6AaVycNb%2FELVQTm08CErfQBQdp50CS3p23xKaYAG5TtAKclV9goNaI9zE1M9S%2FwRy5uBp8fzAykxQ6n0Be0K0teFUZEzMDRvICnYYVer%2BnPChi%2BDXF7XiN9IBkKmx%2BAVLigjk5S31ukQpUgmgt6uK1CT0wn%2FJgSTLD%2BLOM6tn6wY6Mnw0v42iu%2BeegsP3XWcHrA&X-Amz-Signature=e528109d93fcf7e58d6d0a3f791d84f39d5965ed1ad72df72e6211d344310128&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLK36M6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFz1bTFhxeSXhrP5%2FXYW2QHsqo5LQ0JvAv6ymc2gkXW%2BAiBRuYZtkcwQogA5pvyqzAFIWG3ZFuK%2Bzc9HWoftDgMWDyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2FN%2F7EDDw%2F9Jcc%2FqdKtwDeZjoJfqiOAh%2BwAKONkbcagywozuNppzdxjNoix8wd9Kif1I%2Bo%2B8qN0Ie8m%2Fv%2FAJ0Onrz3KbUkSOGP%2B9FYoNrq1zebJbGVIL6Dmkdy4L5oP04xVAH7LTHKBtJIl4ovyr6hX%2F9z8e5RTVEhspAkZgPGGm9f71S3MGDCt0JmKjXSztP0STdJa7Cboea1mmmHxYvKHunglAtgbtE%2Fs0HZRcETix%2F1Dfzts7LXk84JyoXCln6ZlFzV8Hr6JtTWYUnXtdWhM8OXfTikcbe4VLfAXvXHWzwSov9xvCgSVpJ8IkcTgDQH9GTxxmhhUiwLbUs5aQLP%2F7RvuLHlCLc04q4365ILnz4DHMPDfEQDO6eQvBy9OzwDduZ6X7Va56648J%2BZcdHvY9J7wqrEqb9wWu7ovj1GE0uHJCuiOWGCiZkPchskudJsbdEQnpNN4%2B3A8m%2FsBp564YCtcq5V%2FyMmYdrYiws6FRE8b53WKGubni4rlo4cUYCCluHNeuvma7dL%2FYoQJ4sxNkTf%2B6opQNX%2BE7khCQT50CcK8VwZN9OBqjpm%2FZ87%2FYu9shW%2Fna7Lb9YG2lNc4cyW71GZLPZ7%2B82pUkvOERJwhd3GqJ2UI1RfyS4MPi8UhNv9a%2FLkN%2BLX5Kcbrww7uKevwY6pgHXt75rhk%2BVepEAwgM3ImBDx3oJj6AaVycNb%2FELVQTm08CErfQBQdp50CS3p23xKaYAG5TtAKclV9goNaI9zE1M9S%2FwRy5uBp8fzAykxQ6n0Be0K0teFUZEzMDRvICnYYVer%2BnPChi%2BDXF7XiN9IBkKmx%2BAVLigjk5S31ukQpUgmgt6uK1CT0wn%2FJgSTLD%2BLOM6tn6wY6Mnw0v42iu%2BeegsP3XWcHrA&X-Amz-Signature=91d5f29292e91736d0a8320ced3222946704eb4da1b3a237811f4bfb6b5b9bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMLK36M6%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T090732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFz1bTFhxeSXhrP5%2FXYW2QHsqo5LQ0JvAv6ymc2gkXW%2BAiBRuYZtkcwQogA5pvyqzAFIWG3ZFuK%2Bzc9HWoftDgMWDyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2FN%2F7EDDw%2F9Jcc%2FqdKtwDeZjoJfqiOAh%2BwAKONkbcagywozuNppzdxjNoix8wd9Kif1I%2Bo%2B8qN0Ie8m%2Fv%2FAJ0Onrz3KbUkSOGP%2B9FYoNrq1zebJbGVIL6Dmkdy4L5oP04xVAH7LTHKBtJIl4ovyr6hX%2F9z8e5RTVEhspAkZgPGGm9f71S3MGDCt0JmKjXSztP0STdJa7Cboea1mmmHxYvKHunglAtgbtE%2Fs0HZRcETix%2F1Dfzts7LXk84JyoXCln6ZlFzV8Hr6JtTWYUnXtdWhM8OXfTikcbe4VLfAXvXHWzwSov9xvCgSVpJ8IkcTgDQH9GTxxmhhUiwLbUs5aQLP%2F7RvuLHlCLc04q4365ILnz4DHMPDfEQDO6eQvBy9OzwDduZ6X7Va56648J%2BZcdHvY9J7wqrEqb9wWu7ovj1GE0uHJCuiOWGCiZkPchskudJsbdEQnpNN4%2B3A8m%2FsBp564YCtcq5V%2FyMmYdrYiws6FRE8b53WKGubni4rlo4cUYCCluHNeuvma7dL%2FYoQJ4sxNkTf%2B6opQNX%2BE7khCQT50CcK8VwZN9OBqjpm%2FZ87%2FYu9shW%2Fna7Lb9YG2lNc4cyW71GZLPZ7%2B82pUkvOERJwhd3GqJ2UI1RfyS4MPi8UhNv9a%2FLkN%2BLX5Kcbrww7uKevwY6pgHXt75rhk%2BVepEAwgM3ImBDx3oJj6AaVycNb%2FELVQTm08CErfQBQdp50CS3p23xKaYAG5TtAKclV9goNaI9zE1M9S%2FwRy5uBp8fzAykxQ6n0Be0K0teFUZEzMDRvICnYYVer%2BnPChi%2BDXF7XiN9IBkKmx%2BAVLigjk5S31ukQpUgmgt6uK1CT0wn%2FJgSTLD%2BLOM6tn6wY6Mnw0v42iu%2BeegsP3XWcHrA&X-Amz-Signature=e1733298d40ca77e0910ad71e456737de29faba672b38490ee09c41ce029da87&X-Amz-SignedHeaders=host&x-id=GetObject)
