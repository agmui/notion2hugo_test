---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNMAVGA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEjq3kLo3tmKPz8%2BB8rE6PXXFRZ%2FJ6fmYa3RHZGQwNRgIgbqVnso%2Be%2FRVNKlO47aPwrCcPG9pzb%2BjcGIlo8361izEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Yly7UpH0uXAfoVSrcA%2FfnpbA9wZ7YnCaMH1nJJu9uPViq91WKKzVojqx7Lm9XHRhna%2FoF6TxmcRV3gs7jJZh4piOilHbOtWdJDx76fNbqjRNwslNcIOQNnzD4R5VK%2B3ZZPH5VDfbv957tq4EgUogNL7qEgdqfohNWSIG8hzYjGIhdwh8lqPr35WVsASn3i5014aIRMYg1oEMNmXrBwQIQ%2Bsg3j2opaFaoWf041T0Vc%2B%2BrfJSKZtcwU5u1F8YoPqO9SIYWQcdk4ZLFuQ%2BmzBCvnkeEhulVWuTfhmK8r99eZjFAVi%2FTIWxn5KO041prPaDIA1qd3iWMsPAMKGk5wgCJIcQPxldr2ivsKAnFnhETkycgBFc46xp2ImekHf%2FxkTDm1TkI%2Bow%2BwLIYyaWIR3agzlldE7dLag%2BmDSggWHsakCXAMeY1SaIXmFfYDo30qAteWFaOZWZ37BYXsKMHzgjmj%2BWtpoknH1wfZo6KpNqu6zMOJUWkZTN8AIjlKJP%2FiIwZgfAEaYQJAi4GR%2BK7ZmpiD9VvXJdRKUNozX3K0hL76gUM60OxV7Z6imEbeJiCCaTLYWstB73Up2hEeqk7Ovvg6ciJUJ7Sxcz8rJAAZJSrRj0RNiuo3IvGJCUOMK4gL4NdjBVSX0IemT3TMJHD%2BLwGOqUBPkh%2B9A2qYsSXKLIyR1RJNjcq2%2FPCWi9G3TXnp2aGePYs15HDhAfU7Ys0AgGvqBm9Cw24NOJL80Ygt8qzp6kOCnT0E53vaBoFoKf3l%2Bb2QR21qjgYomLejQuGm0v2%2Fp1FpUxvdLc5BNnwNcdmtQGEUsvV7zlf%2Fou%2F5CoLmWUvboYLGwz4gKD3RT7b%2BoZEsiKOh%2FJOx%2Fco3st68Tj9PwwmdCiHpiNF&X-Amz-Signature=28ec2b47fcd0a90e37452be01cf8cb981a36ee79a1e0b52852fd28318f5e6aff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNMAVGA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEjq3kLo3tmKPz8%2BB8rE6PXXFRZ%2FJ6fmYa3RHZGQwNRgIgbqVnso%2Be%2FRVNKlO47aPwrCcPG9pzb%2BjcGIlo8361izEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Yly7UpH0uXAfoVSrcA%2FfnpbA9wZ7YnCaMH1nJJu9uPViq91WKKzVojqx7Lm9XHRhna%2FoF6TxmcRV3gs7jJZh4piOilHbOtWdJDx76fNbqjRNwslNcIOQNnzD4R5VK%2B3ZZPH5VDfbv957tq4EgUogNL7qEgdqfohNWSIG8hzYjGIhdwh8lqPr35WVsASn3i5014aIRMYg1oEMNmXrBwQIQ%2Bsg3j2opaFaoWf041T0Vc%2B%2BrfJSKZtcwU5u1F8YoPqO9SIYWQcdk4ZLFuQ%2BmzBCvnkeEhulVWuTfhmK8r99eZjFAVi%2FTIWxn5KO041prPaDIA1qd3iWMsPAMKGk5wgCJIcQPxldr2ivsKAnFnhETkycgBFc46xp2ImekHf%2FxkTDm1TkI%2Bow%2BwLIYyaWIR3agzlldE7dLag%2BmDSggWHsakCXAMeY1SaIXmFfYDo30qAteWFaOZWZ37BYXsKMHzgjmj%2BWtpoknH1wfZo6KpNqu6zMOJUWkZTN8AIjlKJP%2FiIwZgfAEaYQJAi4GR%2BK7ZmpiD9VvXJdRKUNozX3K0hL76gUM60OxV7Z6imEbeJiCCaTLYWstB73Up2hEeqk7Ovvg6ciJUJ7Sxcz8rJAAZJSrRj0RNiuo3IvGJCUOMK4gL4NdjBVSX0IemT3TMJHD%2BLwGOqUBPkh%2B9A2qYsSXKLIyR1RJNjcq2%2FPCWi9G3TXnp2aGePYs15HDhAfU7Ys0AgGvqBm9Cw24NOJL80Ygt8qzp6kOCnT0E53vaBoFoKf3l%2Bb2QR21qjgYomLejQuGm0v2%2Fp1FpUxvdLc5BNnwNcdmtQGEUsvV7zlf%2Fou%2F5CoLmWUvboYLGwz4gKD3RT7b%2BoZEsiKOh%2FJOx%2Fco3st68Tj9PwwmdCiHpiNF&X-Amz-Signature=705dedf1a9ee0302ac425880d0339bfa983c2d075d0718d7343e38cf6f3720e3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNMAVGA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEjq3kLo3tmKPz8%2BB8rE6PXXFRZ%2FJ6fmYa3RHZGQwNRgIgbqVnso%2Be%2FRVNKlO47aPwrCcPG9pzb%2BjcGIlo8361izEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Yly7UpH0uXAfoVSrcA%2FfnpbA9wZ7YnCaMH1nJJu9uPViq91WKKzVojqx7Lm9XHRhna%2FoF6TxmcRV3gs7jJZh4piOilHbOtWdJDx76fNbqjRNwslNcIOQNnzD4R5VK%2B3ZZPH5VDfbv957tq4EgUogNL7qEgdqfohNWSIG8hzYjGIhdwh8lqPr35WVsASn3i5014aIRMYg1oEMNmXrBwQIQ%2Bsg3j2opaFaoWf041T0Vc%2B%2BrfJSKZtcwU5u1F8YoPqO9SIYWQcdk4ZLFuQ%2BmzBCvnkeEhulVWuTfhmK8r99eZjFAVi%2FTIWxn5KO041prPaDIA1qd3iWMsPAMKGk5wgCJIcQPxldr2ivsKAnFnhETkycgBFc46xp2ImekHf%2FxkTDm1TkI%2Bow%2BwLIYyaWIR3agzlldE7dLag%2BmDSggWHsakCXAMeY1SaIXmFfYDo30qAteWFaOZWZ37BYXsKMHzgjmj%2BWtpoknH1wfZo6KpNqu6zMOJUWkZTN8AIjlKJP%2FiIwZgfAEaYQJAi4GR%2BK7ZmpiD9VvXJdRKUNozX3K0hL76gUM60OxV7Z6imEbeJiCCaTLYWstB73Up2hEeqk7Ovvg6ciJUJ7Sxcz8rJAAZJSrRj0RNiuo3IvGJCUOMK4gL4NdjBVSX0IemT3TMJHD%2BLwGOqUBPkh%2B9A2qYsSXKLIyR1RJNjcq2%2FPCWi9G3TXnp2aGePYs15HDhAfU7Ys0AgGvqBm9Cw24NOJL80Ygt8qzp6kOCnT0E53vaBoFoKf3l%2Bb2QR21qjgYomLejQuGm0v2%2Fp1FpUxvdLc5BNnwNcdmtQGEUsvV7zlf%2Fou%2F5CoLmWUvboYLGwz4gKD3RT7b%2BoZEsiKOh%2FJOx%2Fco3st68Tj9PwwmdCiHpiNF&X-Amz-Signature=381cb1aa104f607a63754509d117f0691e04efaa89eda405b4f20ab0df43bd66&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNMAVGA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEjq3kLo3tmKPz8%2BB8rE6PXXFRZ%2FJ6fmYa3RHZGQwNRgIgbqVnso%2Be%2FRVNKlO47aPwrCcPG9pzb%2BjcGIlo8361izEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Yly7UpH0uXAfoVSrcA%2FfnpbA9wZ7YnCaMH1nJJu9uPViq91WKKzVojqx7Lm9XHRhna%2FoF6TxmcRV3gs7jJZh4piOilHbOtWdJDx76fNbqjRNwslNcIOQNnzD4R5VK%2B3ZZPH5VDfbv957tq4EgUogNL7qEgdqfohNWSIG8hzYjGIhdwh8lqPr35WVsASn3i5014aIRMYg1oEMNmXrBwQIQ%2Bsg3j2opaFaoWf041T0Vc%2B%2BrfJSKZtcwU5u1F8YoPqO9SIYWQcdk4ZLFuQ%2BmzBCvnkeEhulVWuTfhmK8r99eZjFAVi%2FTIWxn5KO041prPaDIA1qd3iWMsPAMKGk5wgCJIcQPxldr2ivsKAnFnhETkycgBFc46xp2ImekHf%2FxkTDm1TkI%2Bow%2BwLIYyaWIR3agzlldE7dLag%2BmDSggWHsakCXAMeY1SaIXmFfYDo30qAteWFaOZWZ37BYXsKMHzgjmj%2BWtpoknH1wfZo6KpNqu6zMOJUWkZTN8AIjlKJP%2FiIwZgfAEaYQJAi4GR%2BK7ZmpiD9VvXJdRKUNozX3K0hL76gUM60OxV7Z6imEbeJiCCaTLYWstB73Up2hEeqk7Ovvg6ciJUJ7Sxcz8rJAAZJSrRj0RNiuo3IvGJCUOMK4gL4NdjBVSX0IemT3TMJHD%2BLwGOqUBPkh%2B9A2qYsSXKLIyR1RJNjcq2%2FPCWi9G3TXnp2aGePYs15HDhAfU7Ys0AgGvqBm9Cw24NOJL80Ygt8qzp6kOCnT0E53vaBoFoKf3l%2Bb2QR21qjgYomLejQuGm0v2%2Fp1FpUxvdLc5BNnwNcdmtQGEUsvV7zlf%2Fou%2F5CoLmWUvboYLGwz4gKD3RT7b%2BoZEsiKOh%2FJOx%2Fco3st68Tj9PwwmdCiHpiNF&X-Amz-Signature=7af25402e3ac2d62502203c6b07425dcd328d62ddb71937a230004832aea4f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNMAVGA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEjq3kLo3tmKPz8%2BB8rE6PXXFRZ%2FJ6fmYa3RHZGQwNRgIgbqVnso%2Be%2FRVNKlO47aPwrCcPG9pzb%2BjcGIlo8361izEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Yly7UpH0uXAfoVSrcA%2FfnpbA9wZ7YnCaMH1nJJu9uPViq91WKKzVojqx7Lm9XHRhna%2FoF6TxmcRV3gs7jJZh4piOilHbOtWdJDx76fNbqjRNwslNcIOQNnzD4R5VK%2B3ZZPH5VDfbv957tq4EgUogNL7qEgdqfohNWSIG8hzYjGIhdwh8lqPr35WVsASn3i5014aIRMYg1oEMNmXrBwQIQ%2Bsg3j2opaFaoWf041T0Vc%2B%2BrfJSKZtcwU5u1F8YoPqO9SIYWQcdk4ZLFuQ%2BmzBCvnkeEhulVWuTfhmK8r99eZjFAVi%2FTIWxn5KO041prPaDIA1qd3iWMsPAMKGk5wgCJIcQPxldr2ivsKAnFnhETkycgBFc46xp2ImekHf%2FxkTDm1TkI%2Bow%2BwLIYyaWIR3agzlldE7dLag%2BmDSggWHsakCXAMeY1SaIXmFfYDo30qAteWFaOZWZ37BYXsKMHzgjmj%2BWtpoknH1wfZo6KpNqu6zMOJUWkZTN8AIjlKJP%2FiIwZgfAEaYQJAi4GR%2BK7ZmpiD9VvXJdRKUNozX3K0hL76gUM60OxV7Z6imEbeJiCCaTLYWstB73Up2hEeqk7Ovvg6ciJUJ7Sxcz8rJAAZJSrRj0RNiuo3IvGJCUOMK4gL4NdjBVSX0IemT3TMJHD%2BLwGOqUBPkh%2B9A2qYsSXKLIyR1RJNjcq2%2FPCWi9G3TXnp2aGePYs15HDhAfU7Ys0AgGvqBm9Cw24NOJL80Ygt8qzp6kOCnT0E53vaBoFoKf3l%2Bb2QR21qjgYomLejQuGm0v2%2Fp1FpUxvdLc5BNnwNcdmtQGEUsvV7zlf%2Fou%2F5CoLmWUvboYLGwz4gKD3RT7b%2BoZEsiKOh%2FJOx%2Fco3st68Tj9PwwmdCiHpiNF&X-Amz-Signature=c55905ed34b6ccbf6e7ff961a92cef0393762fd57bf234de2ed9553802eabf19&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNMAVGA%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEjq3kLo3tmKPz8%2BB8rE6PXXFRZ%2FJ6fmYa3RHZGQwNRgIgbqVnso%2Be%2FRVNKlO47aPwrCcPG9pzb%2BjcGIlo8361izEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN2Yly7UpH0uXAfoVSrcA%2FfnpbA9wZ7YnCaMH1nJJu9uPViq91WKKzVojqx7Lm9XHRhna%2FoF6TxmcRV3gs7jJZh4piOilHbOtWdJDx76fNbqjRNwslNcIOQNnzD4R5VK%2B3ZZPH5VDfbv957tq4EgUogNL7qEgdqfohNWSIG8hzYjGIhdwh8lqPr35WVsASn3i5014aIRMYg1oEMNmXrBwQIQ%2Bsg3j2opaFaoWf041T0Vc%2B%2BrfJSKZtcwU5u1F8YoPqO9SIYWQcdk4ZLFuQ%2BmzBCvnkeEhulVWuTfhmK8r99eZjFAVi%2FTIWxn5KO041prPaDIA1qd3iWMsPAMKGk5wgCJIcQPxldr2ivsKAnFnhETkycgBFc46xp2ImekHf%2FxkTDm1TkI%2Bow%2BwLIYyaWIR3agzlldE7dLag%2BmDSggWHsakCXAMeY1SaIXmFfYDo30qAteWFaOZWZ37BYXsKMHzgjmj%2BWtpoknH1wfZo6KpNqu6zMOJUWkZTN8AIjlKJP%2FiIwZgfAEaYQJAi4GR%2BK7ZmpiD9VvXJdRKUNozX3K0hL76gUM60OxV7Z6imEbeJiCCaTLYWstB73Up2hEeqk7Ovvg6ciJUJ7Sxcz8rJAAZJSrRj0RNiuo3IvGJCUOMK4gL4NdjBVSX0IemT3TMJHD%2BLwGOqUBPkh%2B9A2qYsSXKLIyR1RJNjcq2%2FPCWi9G3TXnp2aGePYs15HDhAfU7Ys0AgGvqBm9Cw24NOJL80Ygt8qzp6kOCnT0E53vaBoFoKf3l%2Bb2QR21qjgYomLejQuGm0v2%2Fp1FpUxvdLc5BNnwNcdmtQGEUsvV7zlf%2Fou%2F5CoLmWUvboYLGwz4gKD3RT7b%2BoZEsiKOh%2FJOx%2Fco3st68Tj9PwwmdCiHpiNF&X-Amz-Signature=e7b32663a675e526e390c5638e022c8c378116fba7a6b5c0fb094f533ad276a6&X-Amz-SignedHeaders=host&x-id=GetObject)
