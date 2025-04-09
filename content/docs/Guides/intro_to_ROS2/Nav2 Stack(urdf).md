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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662THOT6ZN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCpyJKQWPonXsYeTQ%2Bdc3bC9lfzIa4h1%2BAkE3LRTWQMmAIhANk%2Bh80630ReKeW5ey3yDFSPJzSM5ZLbQAlQ72NXBshXKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydk%2BRcBhzE5BSPuFsq3AOQF1fW1Rkzgfh6HNEoPML6QWGJBMdK%2Feij6Fl8EsATMDrfpXXDxlbOq9RhBMEWQaVzm8CSDnzUOsWwsS7PTFh115%2BzxiG6a8qnpfO3%2BPiGzoZ5aM7eZQjNEelWLciqYq2JGpVFQUIYiijydFZzHPJAyZ5gxTxxcxTWgpvfctHoCwpZ2fRyYVs9yhZWdJZTZkDPXiIVaLgH3xhsqufDxlnOQ%2FMlTzE5efyWaz8tBG8ETBAM6AZ2OrKEfbSPTzo0fK6FLHZiXf%2Fk2VZEdAG7Qc0TNNJ%2F71k%2FrnVtyr3ZJ1R2povQ73ag%2FnwtF8nap3E%2BZ87BcVoryT1v7RB3aO9e1soFRLX5Ikj4EoK2hAUt6Zl%2B56Il0zK6%2FiAJjRO3RE5Rfp8S0P5ogaefBxDBgalm7PoT1cTao8HNPHYNbUGkzTUzgcuSBn2YIAWBp98l%2Bpqwt58ezazDBDMSy1yHCRTtPC5Jaba277CVfLtH4YmoIvZap%2B1Ks5rQ31YFVcMI24priV%2FUtvuuQVmpTRTf0dzjFKFF6IEEndCsRdFx6ySbHThCBRm5mrn16tQ1ynzLI2IGXpp9jOPsgbUXt8%2BB0veEbrkVQEI2D1rUrV9IyWaNYk%2BdLwAPGRjMAB1hI24U%2BzCsyti%2FBjqkAWwYUcYi7wKFubOad3gE%2FMRD1d%2BS1FgShK485Ma8Zqw332Mj7B2CfJSi8zsfeGm8PKbvUIehkSLKI0m2VEqC%2BQnku%2BZ%2BuFm5L7LQth9lhn4Sn3TRo46lG%2FrqJgzbuDyfZAa2DRug%2FFeeSkeW8vY8XAH%2BXmPR%2BhnUJo8Abc9UiMO%2F%2FYRdertjg%2Bv8kte56VhsirhzkNcEg%2B2Jmd%2Bmogpaah9DjiwU&X-Amz-Signature=804b24eb257272230870ce199777abd1767748e6744a932f2358ed56efeadcdc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662THOT6ZN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCpyJKQWPonXsYeTQ%2Bdc3bC9lfzIa4h1%2BAkE3LRTWQMmAIhANk%2Bh80630ReKeW5ey3yDFSPJzSM5ZLbQAlQ72NXBshXKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydk%2BRcBhzE5BSPuFsq3AOQF1fW1Rkzgfh6HNEoPML6QWGJBMdK%2Feij6Fl8EsATMDrfpXXDxlbOq9RhBMEWQaVzm8CSDnzUOsWwsS7PTFh115%2BzxiG6a8qnpfO3%2BPiGzoZ5aM7eZQjNEelWLciqYq2JGpVFQUIYiijydFZzHPJAyZ5gxTxxcxTWgpvfctHoCwpZ2fRyYVs9yhZWdJZTZkDPXiIVaLgH3xhsqufDxlnOQ%2FMlTzE5efyWaz8tBG8ETBAM6AZ2OrKEfbSPTzo0fK6FLHZiXf%2Fk2VZEdAG7Qc0TNNJ%2F71k%2FrnVtyr3ZJ1R2povQ73ag%2FnwtF8nap3E%2BZ87BcVoryT1v7RB3aO9e1soFRLX5Ikj4EoK2hAUt6Zl%2B56Il0zK6%2FiAJjRO3RE5Rfp8S0P5ogaefBxDBgalm7PoT1cTao8HNPHYNbUGkzTUzgcuSBn2YIAWBp98l%2Bpqwt58ezazDBDMSy1yHCRTtPC5Jaba277CVfLtH4YmoIvZap%2B1Ks5rQ31YFVcMI24priV%2FUtvuuQVmpTRTf0dzjFKFF6IEEndCsRdFx6ySbHThCBRm5mrn16tQ1ynzLI2IGXpp9jOPsgbUXt8%2BB0veEbrkVQEI2D1rUrV9IyWaNYk%2BdLwAPGRjMAB1hI24U%2BzCsyti%2FBjqkAWwYUcYi7wKFubOad3gE%2FMRD1d%2BS1FgShK485Ma8Zqw332Mj7B2CfJSi8zsfeGm8PKbvUIehkSLKI0m2VEqC%2BQnku%2BZ%2BuFm5L7LQth9lhn4Sn3TRo46lG%2FrqJgzbuDyfZAa2DRug%2FFeeSkeW8vY8XAH%2BXmPR%2BhnUJo8Abc9UiMO%2F%2FYRdertjg%2Bv8kte56VhsirhzkNcEg%2B2Jmd%2Bmogpaah9DjiwU&X-Amz-Signature=cd65a197650715643b765996209ad6e4f270ed8710f91568dfdc121f41998429&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662THOT6ZN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCpyJKQWPonXsYeTQ%2Bdc3bC9lfzIa4h1%2BAkE3LRTWQMmAIhANk%2Bh80630ReKeW5ey3yDFSPJzSM5ZLbQAlQ72NXBshXKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydk%2BRcBhzE5BSPuFsq3AOQF1fW1Rkzgfh6HNEoPML6QWGJBMdK%2Feij6Fl8EsATMDrfpXXDxlbOq9RhBMEWQaVzm8CSDnzUOsWwsS7PTFh115%2BzxiG6a8qnpfO3%2BPiGzoZ5aM7eZQjNEelWLciqYq2JGpVFQUIYiijydFZzHPJAyZ5gxTxxcxTWgpvfctHoCwpZ2fRyYVs9yhZWdJZTZkDPXiIVaLgH3xhsqufDxlnOQ%2FMlTzE5efyWaz8tBG8ETBAM6AZ2OrKEfbSPTzo0fK6FLHZiXf%2Fk2VZEdAG7Qc0TNNJ%2F71k%2FrnVtyr3ZJ1R2povQ73ag%2FnwtF8nap3E%2BZ87BcVoryT1v7RB3aO9e1soFRLX5Ikj4EoK2hAUt6Zl%2B56Il0zK6%2FiAJjRO3RE5Rfp8S0P5ogaefBxDBgalm7PoT1cTao8HNPHYNbUGkzTUzgcuSBn2YIAWBp98l%2Bpqwt58ezazDBDMSy1yHCRTtPC5Jaba277CVfLtH4YmoIvZap%2B1Ks5rQ31YFVcMI24priV%2FUtvuuQVmpTRTf0dzjFKFF6IEEndCsRdFx6ySbHThCBRm5mrn16tQ1ynzLI2IGXpp9jOPsgbUXt8%2BB0veEbrkVQEI2D1rUrV9IyWaNYk%2BdLwAPGRjMAB1hI24U%2BzCsyti%2FBjqkAWwYUcYi7wKFubOad3gE%2FMRD1d%2BS1FgShK485Ma8Zqw332Mj7B2CfJSi8zsfeGm8PKbvUIehkSLKI0m2VEqC%2BQnku%2BZ%2BuFm5L7LQth9lhn4Sn3TRo46lG%2FrqJgzbuDyfZAa2DRug%2FFeeSkeW8vY8XAH%2BXmPR%2BhnUJo8Abc9UiMO%2F%2FYRdertjg%2Bv8kte56VhsirhzkNcEg%2B2Jmd%2Bmogpaah9DjiwU&X-Amz-Signature=8fe4f29ac105a0c302912c7e529a3b3ffdaf69575280e8dd913b4835f2609804&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662THOT6ZN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCpyJKQWPonXsYeTQ%2Bdc3bC9lfzIa4h1%2BAkE3LRTWQMmAIhANk%2Bh80630ReKeW5ey3yDFSPJzSM5ZLbQAlQ72NXBshXKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydk%2BRcBhzE5BSPuFsq3AOQF1fW1Rkzgfh6HNEoPML6QWGJBMdK%2Feij6Fl8EsATMDrfpXXDxlbOq9RhBMEWQaVzm8CSDnzUOsWwsS7PTFh115%2BzxiG6a8qnpfO3%2BPiGzoZ5aM7eZQjNEelWLciqYq2JGpVFQUIYiijydFZzHPJAyZ5gxTxxcxTWgpvfctHoCwpZ2fRyYVs9yhZWdJZTZkDPXiIVaLgH3xhsqufDxlnOQ%2FMlTzE5efyWaz8tBG8ETBAM6AZ2OrKEfbSPTzo0fK6FLHZiXf%2Fk2VZEdAG7Qc0TNNJ%2F71k%2FrnVtyr3ZJ1R2povQ73ag%2FnwtF8nap3E%2BZ87BcVoryT1v7RB3aO9e1soFRLX5Ikj4EoK2hAUt6Zl%2B56Il0zK6%2FiAJjRO3RE5Rfp8S0P5ogaefBxDBgalm7PoT1cTao8HNPHYNbUGkzTUzgcuSBn2YIAWBp98l%2Bpqwt58ezazDBDMSy1yHCRTtPC5Jaba277CVfLtH4YmoIvZap%2B1Ks5rQ31YFVcMI24priV%2FUtvuuQVmpTRTf0dzjFKFF6IEEndCsRdFx6ySbHThCBRm5mrn16tQ1ynzLI2IGXpp9jOPsgbUXt8%2BB0veEbrkVQEI2D1rUrV9IyWaNYk%2BdLwAPGRjMAB1hI24U%2BzCsyti%2FBjqkAWwYUcYi7wKFubOad3gE%2FMRD1d%2BS1FgShK485Ma8Zqw332Mj7B2CfJSi8zsfeGm8PKbvUIehkSLKI0m2VEqC%2BQnku%2BZ%2BuFm5L7LQth9lhn4Sn3TRo46lG%2FrqJgzbuDyfZAa2DRug%2FFeeSkeW8vY8XAH%2BXmPR%2BhnUJo8Abc9UiMO%2F%2FYRdertjg%2Bv8kte56VhsirhzkNcEg%2B2Jmd%2Bmogpaah9DjiwU&X-Amz-Signature=b2146262c14d7d9ff16aac4845252e0f4fc61057e7ca990572d04d8c99683726&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662THOT6ZN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCpyJKQWPonXsYeTQ%2Bdc3bC9lfzIa4h1%2BAkE3LRTWQMmAIhANk%2Bh80630ReKeW5ey3yDFSPJzSM5ZLbQAlQ72NXBshXKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydk%2BRcBhzE5BSPuFsq3AOQF1fW1Rkzgfh6HNEoPML6QWGJBMdK%2Feij6Fl8EsATMDrfpXXDxlbOq9RhBMEWQaVzm8CSDnzUOsWwsS7PTFh115%2BzxiG6a8qnpfO3%2BPiGzoZ5aM7eZQjNEelWLciqYq2JGpVFQUIYiijydFZzHPJAyZ5gxTxxcxTWgpvfctHoCwpZ2fRyYVs9yhZWdJZTZkDPXiIVaLgH3xhsqufDxlnOQ%2FMlTzE5efyWaz8tBG8ETBAM6AZ2OrKEfbSPTzo0fK6FLHZiXf%2Fk2VZEdAG7Qc0TNNJ%2F71k%2FrnVtyr3ZJ1R2povQ73ag%2FnwtF8nap3E%2BZ87BcVoryT1v7RB3aO9e1soFRLX5Ikj4EoK2hAUt6Zl%2B56Il0zK6%2FiAJjRO3RE5Rfp8S0P5ogaefBxDBgalm7PoT1cTao8HNPHYNbUGkzTUzgcuSBn2YIAWBp98l%2Bpqwt58ezazDBDMSy1yHCRTtPC5Jaba277CVfLtH4YmoIvZap%2B1Ks5rQ31YFVcMI24priV%2FUtvuuQVmpTRTf0dzjFKFF6IEEndCsRdFx6ySbHThCBRm5mrn16tQ1ynzLI2IGXpp9jOPsgbUXt8%2BB0veEbrkVQEI2D1rUrV9IyWaNYk%2BdLwAPGRjMAB1hI24U%2BzCsyti%2FBjqkAWwYUcYi7wKFubOad3gE%2FMRD1d%2BS1FgShK485Ma8Zqw332Mj7B2CfJSi8zsfeGm8PKbvUIehkSLKI0m2VEqC%2BQnku%2BZ%2BuFm5L7LQth9lhn4Sn3TRo46lG%2FrqJgzbuDyfZAa2DRug%2FFeeSkeW8vY8XAH%2BXmPR%2BhnUJo8Abc9UiMO%2F%2FYRdertjg%2Bv8kte56VhsirhzkNcEg%2B2Jmd%2Bmogpaah9DjiwU&X-Amz-Signature=7d3efb0521f14a278ab3a6ffde22e6a529562b3cfb304904065c07b978a25537&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662THOT6ZN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCpyJKQWPonXsYeTQ%2Bdc3bC9lfzIa4h1%2BAkE3LRTWQMmAIhANk%2Bh80630ReKeW5ey3yDFSPJzSM5ZLbQAlQ72NXBshXKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydk%2BRcBhzE5BSPuFsq3AOQF1fW1Rkzgfh6HNEoPML6QWGJBMdK%2Feij6Fl8EsATMDrfpXXDxlbOq9RhBMEWQaVzm8CSDnzUOsWwsS7PTFh115%2BzxiG6a8qnpfO3%2BPiGzoZ5aM7eZQjNEelWLciqYq2JGpVFQUIYiijydFZzHPJAyZ5gxTxxcxTWgpvfctHoCwpZ2fRyYVs9yhZWdJZTZkDPXiIVaLgH3xhsqufDxlnOQ%2FMlTzE5efyWaz8tBG8ETBAM6AZ2OrKEfbSPTzo0fK6FLHZiXf%2Fk2VZEdAG7Qc0TNNJ%2F71k%2FrnVtyr3ZJ1R2povQ73ag%2FnwtF8nap3E%2BZ87BcVoryT1v7RB3aO9e1soFRLX5Ikj4EoK2hAUt6Zl%2B56Il0zK6%2FiAJjRO3RE5Rfp8S0P5ogaefBxDBgalm7PoT1cTao8HNPHYNbUGkzTUzgcuSBn2YIAWBp98l%2Bpqwt58ezazDBDMSy1yHCRTtPC5Jaba277CVfLtH4YmoIvZap%2B1Ks5rQ31YFVcMI24priV%2FUtvuuQVmpTRTf0dzjFKFF6IEEndCsRdFx6ySbHThCBRm5mrn16tQ1ynzLI2IGXpp9jOPsgbUXt8%2BB0veEbrkVQEI2D1rUrV9IyWaNYk%2BdLwAPGRjMAB1hI24U%2BzCsyti%2FBjqkAWwYUcYi7wKFubOad3gE%2FMRD1d%2BS1FgShK485Ma8Zqw332Mj7B2CfJSi8zsfeGm8PKbvUIehkSLKI0m2VEqC%2BQnku%2BZ%2BuFm5L7LQth9lhn4Sn3TRo46lG%2FrqJgzbuDyfZAa2DRug%2FFeeSkeW8vY8XAH%2BXmPR%2BhnUJo8Abc9UiMO%2F%2FYRdertjg%2Bv8kte56VhsirhzkNcEg%2B2Jmd%2Bmogpaah9DjiwU&X-Amz-Signature=4aab9f704ccb17416b5f51076604e6eb6fa5964b2a5126a33570740622a05189&X-Amz-SignedHeaders=host&x-id=GetObject)
