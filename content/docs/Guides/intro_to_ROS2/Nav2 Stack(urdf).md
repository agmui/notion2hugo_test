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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFO54DL%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGBCZ%2FsfOUOch9tOJjPKFZ1F8lqG5sNuEO%2BMO%2FA9doRZAiEAwTTeHguqswOK%2FLS%2F27S1RkS5mhwGzKb5WZNpS%2FXsB90qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKLI1uSfOOuvkwq1ircA9yAkuM%2FSgGrmcpUEe6y52ueOuB%2BlTiKUUMeTB1N8SU%2BYSVk9SyUvMgWqKt5K39glKmVFQwQfJKtZsCw6nKsRahf%2BIzDg26KqTzLL7oFAGeOsjnHm7FyUV2ApuyJ3NE5z7izDPL7ZDcztzyd3ixDVPhHT6jfOWbOVMa%2BIAniuPTYnPaVTOHzTwhOAoMxppC1SmQk7xpztG1E4AYkRweZcautQzs5AAIPHULV8rDL6bYvEkk2psbDh6v6mPRovyVQqD92J55hHp7LU6HkvMYftwKWc60FegevZe1ls5hwXFpY7rh1tHUho%2B1SK%2F27p5VbWvqEcggMrFkqhqRNjMxMJcX%2FAxKyCgjXUpEJUbGQ367TXpeBJJltudfYQMKqkMOR4WLuGCBqEtExLMNvAYXWzN6gfejYPLSF8ghWechd2XhygUHVxEioPIRzzLWq%2BYnvDCWTXYnMMSexKEMwsXw2fR214rgshZ71FSfcrIHvoiG4iCs0BzaFwLoatfS8rTbk2Zn3SrrF7qsf4myrZrLaSJI%2B0Xs0a10TVvBvab3dcT%2BaobD2KGRBX2c2biBl5CQBIz2ummDSC6LJtC1GlJkSPRaQvuid7yAtBOLfMrRtvpe%2FE9AgSrW%2Fmzmy6ejSMPWY%2FL4GOqUB8Pf5ZI0XtwyDP59%2FD%2BwvzfdQakr10ZyDkYAFdL1xwH2Y6uPMi6M6icP4Bo1CWeMyTWgdx2RnNK2DfovJKw3cnbqfOCaRi8fFHHmkPoE4i0NwztkC%2BL8aKGi4iznMePE9O4dRAfoVWSqlVL3Rmwf8VqBbI8XY6oPk5mH%2BSQjfU3MxM44XK6Et5fnqsm4XK3g8cLNQSL3jNhOJtb5rgiKqbk81ojbt&X-Amz-Signature=5cf1be26b631dfa060fe925717a24cf9e5db7b33afaea0bb1b819e59e4214d18&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFO54DL%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGBCZ%2FsfOUOch9tOJjPKFZ1F8lqG5sNuEO%2BMO%2FA9doRZAiEAwTTeHguqswOK%2FLS%2F27S1RkS5mhwGzKb5WZNpS%2FXsB90qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKLI1uSfOOuvkwq1ircA9yAkuM%2FSgGrmcpUEe6y52ueOuB%2BlTiKUUMeTB1N8SU%2BYSVk9SyUvMgWqKt5K39glKmVFQwQfJKtZsCw6nKsRahf%2BIzDg26KqTzLL7oFAGeOsjnHm7FyUV2ApuyJ3NE5z7izDPL7ZDcztzyd3ixDVPhHT6jfOWbOVMa%2BIAniuPTYnPaVTOHzTwhOAoMxppC1SmQk7xpztG1E4AYkRweZcautQzs5AAIPHULV8rDL6bYvEkk2psbDh6v6mPRovyVQqD92J55hHp7LU6HkvMYftwKWc60FegevZe1ls5hwXFpY7rh1tHUho%2B1SK%2F27p5VbWvqEcggMrFkqhqRNjMxMJcX%2FAxKyCgjXUpEJUbGQ367TXpeBJJltudfYQMKqkMOR4WLuGCBqEtExLMNvAYXWzN6gfejYPLSF8ghWechd2XhygUHVxEioPIRzzLWq%2BYnvDCWTXYnMMSexKEMwsXw2fR214rgshZ71FSfcrIHvoiG4iCs0BzaFwLoatfS8rTbk2Zn3SrrF7qsf4myrZrLaSJI%2B0Xs0a10TVvBvab3dcT%2BaobD2KGRBX2c2biBl5CQBIz2ummDSC6LJtC1GlJkSPRaQvuid7yAtBOLfMrRtvpe%2FE9AgSrW%2Fmzmy6ejSMPWY%2FL4GOqUB8Pf5ZI0XtwyDP59%2FD%2BwvzfdQakr10ZyDkYAFdL1xwH2Y6uPMi6M6icP4Bo1CWeMyTWgdx2RnNK2DfovJKw3cnbqfOCaRi8fFHHmkPoE4i0NwztkC%2BL8aKGi4iznMePE9O4dRAfoVWSqlVL3Rmwf8VqBbI8XY6oPk5mH%2BSQjfU3MxM44XK6Et5fnqsm4XK3g8cLNQSL3jNhOJtb5rgiKqbk81ojbt&X-Amz-Signature=60f044ca3f1725a6171d6b84b32c0462b5779065c342cf15e3d005e0f4baa579&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFO54DL%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGBCZ%2FsfOUOch9tOJjPKFZ1F8lqG5sNuEO%2BMO%2FA9doRZAiEAwTTeHguqswOK%2FLS%2F27S1RkS5mhwGzKb5WZNpS%2FXsB90qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKLI1uSfOOuvkwq1ircA9yAkuM%2FSgGrmcpUEe6y52ueOuB%2BlTiKUUMeTB1N8SU%2BYSVk9SyUvMgWqKt5K39glKmVFQwQfJKtZsCw6nKsRahf%2BIzDg26KqTzLL7oFAGeOsjnHm7FyUV2ApuyJ3NE5z7izDPL7ZDcztzyd3ixDVPhHT6jfOWbOVMa%2BIAniuPTYnPaVTOHzTwhOAoMxppC1SmQk7xpztG1E4AYkRweZcautQzs5AAIPHULV8rDL6bYvEkk2psbDh6v6mPRovyVQqD92J55hHp7LU6HkvMYftwKWc60FegevZe1ls5hwXFpY7rh1tHUho%2B1SK%2F27p5VbWvqEcggMrFkqhqRNjMxMJcX%2FAxKyCgjXUpEJUbGQ367TXpeBJJltudfYQMKqkMOR4WLuGCBqEtExLMNvAYXWzN6gfejYPLSF8ghWechd2XhygUHVxEioPIRzzLWq%2BYnvDCWTXYnMMSexKEMwsXw2fR214rgshZ71FSfcrIHvoiG4iCs0BzaFwLoatfS8rTbk2Zn3SrrF7qsf4myrZrLaSJI%2B0Xs0a10TVvBvab3dcT%2BaobD2KGRBX2c2biBl5CQBIz2ummDSC6LJtC1GlJkSPRaQvuid7yAtBOLfMrRtvpe%2FE9AgSrW%2Fmzmy6ejSMPWY%2FL4GOqUB8Pf5ZI0XtwyDP59%2FD%2BwvzfdQakr10ZyDkYAFdL1xwH2Y6uPMi6M6icP4Bo1CWeMyTWgdx2RnNK2DfovJKw3cnbqfOCaRi8fFHHmkPoE4i0NwztkC%2BL8aKGi4iznMePE9O4dRAfoVWSqlVL3Rmwf8VqBbI8XY6oPk5mH%2BSQjfU3MxM44XK6Et5fnqsm4XK3g8cLNQSL3jNhOJtb5rgiKqbk81ojbt&X-Amz-Signature=cf42ab25a46667fb96a117ce81d0ebffe6c855c5d535688c6def76e79e7948b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFO54DL%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGBCZ%2FsfOUOch9tOJjPKFZ1F8lqG5sNuEO%2BMO%2FA9doRZAiEAwTTeHguqswOK%2FLS%2F27S1RkS5mhwGzKb5WZNpS%2FXsB90qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKLI1uSfOOuvkwq1ircA9yAkuM%2FSgGrmcpUEe6y52ueOuB%2BlTiKUUMeTB1N8SU%2BYSVk9SyUvMgWqKt5K39glKmVFQwQfJKtZsCw6nKsRahf%2BIzDg26KqTzLL7oFAGeOsjnHm7FyUV2ApuyJ3NE5z7izDPL7ZDcztzyd3ixDVPhHT6jfOWbOVMa%2BIAniuPTYnPaVTOHzTwhOAoMxppC1SmQk7xpztG1E4AYkRweZcautQzs5AAIPHULV8rDL6bYvEkk2psbDh6v6mPRovyVQqD92J55hHp7LU6HkvMYftwKWc60FegevZe1ls5hwXFpY7rh1tHUho%2B1SK%2F27p5VbWvqEcggMrFkqhqRNjMxMJcX%2FAxKyCgjXUpEJUbGQ367TXpeBJJltudfYQMKqkMOR4WLuGCBqEtExLMNvAYXWzN6gfejYPLSF8ghWechd2XhygUHVxEioPIRzzLWq%2BYnvDCWTXYnMMSexKEMwsXw2fR214rgshZ71FSfcrIHvoiG4iCs0BzaFwLoatfS8rTbk2Zn3SrrF7qsf4myrZrLaSJI%2B0Xs0a10TVvBvab3dcT%2BaobD2KGRBX2c2biBl5CQBIz2ummDSC6LJtC1GlJkSPRaQvuid7yAtBOLfMrRtvpe%2FE9AgSrW%2Fmzmy6ejSMPWY%2FL4GOqUB8Pf5ZI0XtwyDP59%2FD%2BwvzfdQakr10ZyDkYAFdL1xwH2Y6uPMi6M6icP4Bo1CWeMyTWgdx2RnNK2DfovJKw3cnbqfOCaRi8fFHHmkPoE4i0NwztkC%2BL8aKGi4iznMePE9O4dRAfoVWSqlVL3Rmwf8VqBbI8XY6oPk5mH%2BSQjfU3MxM44XK6Et5fnqsm4XK3g8cLNQSL3jNhOJtb5rgiKqbk81ojbt&X-Amz-Signature=be9d8143c0ea73da1f4fd95c77ba4fab9735ad5be1903edc48cbc3eeb209ea0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFO54DL%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGBCZ%2FsfOUOch9tOJjPKFZ1F8lqG5sNuEO%2BMO%2FA9doRZAiEAwTTeHguqswOK%2FLS%2F27S1RkS5mhwGzKb5WZNpS%2FXsB90qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKLI1uSfOOuvkwq1ircA9yAkuM%2FSgGrmcpUEe6y52ueOuB%2BlTiKUUMeTB1N8SU%2BYSVk9SyUvMgWqKt5K39glKmVFQwQfJKtZsCw6nKsRahf%2BIzDg26KqTzLL7oFAGeOsjnHm7FyUV2ApuyJ3NE5z7izDPL7ZDcztzyd3ixDVPhHT6jfOWbOVMa%2BIAniuPTYnPaVTOHzTwhOAoMxppC1SmQk7xpztG1E4AYkRweZcautQzs5AAIPHULV8rDL6bYvEkk2psbDh6v6mPRovyVQqD92J55hHp7LU6HkvMYftwKWc60FegevZe1ls5hwXFpY7rh1tHUho%2B1SK%2F27p5VbWvqEcggMrFkqhqRNjMxMJcX%2FAxKyCgjXUpEJUbGQ367TXpeBJJltudfYQMKqkMOR4WLuGCBqEtExLMNvAYXWzN6gfejYPLSF8ghWechd2XhygUHVxEioPIRzzLWq%2BYnvDCWTXYnMMSexKEMwsXw2fR214rgshZ71FSfcrIHvoiG4iCs0BzaFwLoatfS8rTbk2Zn3SrrF7qsf4myrZrLaSJI%2B0Xs0a10TVvBvab3dcT%2BaobD2KGRBX2c2biBl5CQBIz2ummDSC6LJtC1GlJkSPRaQvuid7yAtBOLfMrRtvpe%2FE9AgSrW%2Fmzmy6ejSMPWY%2FL4GOqUB8Pf5ZI0XtwyDP59%2FD%2BwvzfdQakr10ZyDkYAFdL1xwH2Y6uPMi6M6icP4Bo1CWeMyTWgdx2RnNK2DfovJKw3cnbqfOCaRi8fFHHmkPoE4i0NwztkC%2BL8aKGi4iznMePE9O4dRAfoVWSqlVL3Rmwf8VqBbI8XY6oPk5mH%2BSQjfU3MxM44XK6Et5fnqsm4XK3g8cLNQSL3jNhOJtb5rgiKqbk81ojbt&X-Amz-Signature=a5c990d4792c82fa2f73eb179509375e80433408dd1fe713e76ad47fa0f6c1e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GFO54DL%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGBCZ%2FsfOUOch9tOJjPKFZ1F8lqG5sNuEO%2BMO%2FA9doRZAiEAwTTeHguqswOK%2FLS%2F27S1RkS5mhwGzKb5WZNpS%2FXsB90qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOKLI1uSfOOuvkwq1ircA9yAkuM%2FSgGrmcpUEe6y52ueOuB%2BlTiKUUMeTB1N8SU%2BYSVk9SyUvMgWqKt5K39glKmVFQwQfJKtZsCw6nKsRahf%2BIzDg26KqTzLL7oFAGeOsjnHm7FyUV2ApuyJ3NE5z7izDPL7ZDcztzyd3ixDVPhHT6jfOWbOVMa%2BIAniuPTYnPaVTOHzTwhOAoMxppC1SmQk7xpztG1E4AYkRweZcautQzs5AAIPHULV8rDL6bYvEkk2psbDh6v6mPRovyVQqD92J55hHp7LU6HkvMYftwKWc60FegevZe1ls5hwXFpY7rh1tHUho%2B1SK%2F27p5VbWvqEcggMrFkqhqRNjMxMJcX%2FAxKyCgjXUpEJUbGQ367TXpeBJJltudfYQMKqkMOR4WLuGCBqEtExLMNvAYXWzN6gfejYPLSF8ghWechd2XhygUHVxEioPIRzzLWq%2BYnvDCWTXYnMMSexKEMwsXw2fR214rgshZ71FSfcrIHvoiG4iCs0BzaFwLoatfS8rTbk2Zn3SrrF7qsf4myrZrLaSJI%2B0Xs0a10TVvBvab3dcT%2BaobD2KGRBX2c2biBl5CQBIz2ummDSC6LJtC1GlJkSPRaQvuid7yAtBOLfMrRtvpe%2FE9AgSrW%2Fmzmy6ejSMPWY%2FL4GOqUB8Pf5ZI0XtwyDP59%2FD%2BwvzfdQakr10ZyDkYAFdL1xwH2Y6uPMi6M6icP4Bo1CWeMyTWgdx2RnNK2DfovJKw3cnbqfOCaRi8fFHHmkPoE4i0NwztkC%2BL8aKGi4iznMePE9O4dRAfoVWSqlVL3Rmwf8VqBbI8XY6oPk5mH%2BSQjfU3MxM44XK6Et5fnqsm4XK3g8cLNQSL3jNhOJtb5rgiKqbk81ojbt&X-Amz-Signature=b7319450208ab68144a2cd2b1ff4719c95e8a0f5f66fb1f62139445b90a4e92a&X-Amz-SignedHeaders=host&x-id=GetObject)
