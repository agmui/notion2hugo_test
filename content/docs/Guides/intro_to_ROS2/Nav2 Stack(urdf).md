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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6227ZP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuc%2BRl8phlj1FEc8fnRp5ov%2FffZALp11V%2FvZ8HHMKNlAIgYdoTjj2JYi96bDrzrD5XwBzk17eiosfqBuod%2BZe%2FXb0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKBMVsJzk17PtaeULircAytR9PRjmq6Wps0XqUz41ECk3ABk5z%2FgsCUfUg6ZYIlihfnbKexT2wX2MiT63LSgYg4AiQCDlCkCOAOoi4i9QRXMtG5MIxF5I%2Fs2uEJabYsGaiHHR1wR6i4InlTcFx2s%2BAFdy6b%2F8aPsiYBxa21NhC8Fyosq7DbNqjazFQH%2FrSkfpORPB%2FLnxsSX1%2FBoZbBQYBIYtkLNehm8eOQL%2BMuYUWrRjVXz%2FpyPGvSMYJnZkBquO%2B9OH23xkwBNMH6Kno6cA4RsjIaKi0Zhcni9x6DMNKTreVQyK5hnB2F1L9QTDy3amZidn5Z%2B3AMxrvM8c%2FdNyRJ9zm8V2ZPLEMFN3FwHu7ss180Xy9ffmgmBz0kC6aTd3JHsL91rTDvi9SkEGM0dVMAl3c40xZXQ5oFWj4ZeQTFKnsdvqfACiSaw1E3iypT8VQ233qemeWDsLz0kFzy2%2FfnckSjshIcIXgCIYDSTfAsSFo2wcKXU%2BXe1wJ2ek7Nggznz2MTB%2Fw%2BB7TJ7SGqw6ZKu6L33jmzvcoiQmqzlCHC40CVMTLBiFOkDrQ%2B7oQcadOW44Q%2BeiJnVdLzXuwKF%2B%2FxcdPILyi7fRZ3CQYE8Cs95muRbnHFJ6nShsAzZIAp2kYQkqvtuR4TiwcmdMLKRjcIGOqUBnvWKsKm3ze5eNOiyWJ1XeT9yIxy1jrVDLAYFeE82OHDkPJJtvpISogq1%2FXp8DeuIibQKB33P%2BCJEIMteM%2BZfn2xBgLSfW8pum7IfJ2eHhmy55Vl9s%2F3gEPF8IehpPu6sp8lgw%2B%2Brhc49f7TqI4s%2BmqxpEr3H9W%2B1hKOWminRnpEG9H7%2F3V8UBAOYSt%2B2TZTehKHZA3Kh1xBXlauI%2FGHAWKtn8Kkd&X-Amz-Signature=6feca34e4f55a7553f33c647bf54b6c0edd83966f7edf0ad076e4bec2dd2779b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6227ZP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuc%2BRl8phlj1FEc8fnRp5ov%2FffZALp11V%2FvZ8HHMKNlAIgYdoTjj2JYi96bDrzrD5XwBzk17eiosfqBuod%2BZe%2FXb0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKBMVsJzk17PtaeULircAytR9PRjmq6Wps0XqUz41ECk3ABk5z%2FgsCUfUg6ZYIlihfnbKexT2wX2MiT63LSgYg4AiQCDlCkCOAOoi4i9QRXMtG5MIxF5I%2Fs2uEJabYsGaiHHR1wR6i4InlTcFx2s%2BAFdy6b%2F8aPsiYBxa21NhC8Fyosq7DbNqjazFQH%2FrSkfpORPB%2FLnxsSX1%2FBoZbBQYBIYtkLNehm8eOQL%2BMuYUWrRjVXz%2FpyPGvSMYJnZkBquO%2B9OH23xkwBNMH6Kno6cA4RsjIaKi0Zhcni9x6DMNKTreVQyK5hnB2F1L9QTDy3amZidn5Z%2B3AMxrvM8c%2FdNyRJ9zm8V2ZPLEMFN3FwHu7ss180Xy9ffmgmBz0kC6aTd3JHsL91rTDvi9SkEGM0dVMAl3c40xZXQ5oFWj4ZeQTFKnsdvqfACiSaw1E3iypT8VQ233qemeWDsLz0kFzy2%2FfnckSjshIcIXgCIYDSTfAsSFo2wcKXU%2BXe1wJ2ek7Nggznz2MTB%2Fw%2BB7TJ7SGqw6ZKu6L33jmzvcoiQmqzlCHC40CVMTLBiFOkDrQ%2B7oQcadOW44Q%2BeiJnVdLzXuwKF%2B%2FxcdPILyi7fRZ3CQYE8Cs95muRbnHFJ6nShsAzZIAp2kYQkqvtuR4TiwcmdMLKRjcIGOqUBnvWKsKm3ze5eNOiyWJ1XeT9yIxy1jrVDLAYFeE82OHDkPJJtvpISogq1%2FXp8DeuIibQKB33P%2BCJEIMteM%2BZfn2xBgLSfW8pum7IfJ2eHhmy55Vl9s%2F3gEPF8IehpPu6sp8lgw%2B%2Brhc49f7TqI4s%2BmqxpEr3H9W%2B1hKOWminRnpEG9H7%2F3V8UBAOYSt%2B2TZTehKHZA3Kh1xBXlauI%2FGHAWKtn8Kkd&X-Amz-Signature=bbb54181dcf59cda050c27423b2defa18171175ab3281e723d4f93980dbc853e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6227ZP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuc%2BRl8phlj1FEc8fnRp5ov%2FffZALp11V%2FvZ8HHMKNlAIgYdoTjj2JYi96bDrzrD5XwBzk17eiosfqBuod%2BZe%2FXb0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKBMVsJzk17PtaeULircAytR9PRjmq6Wps0XqUz41ECk3ABk5z%2FgsCUfUg6ZYIlihfnbKexT2wX2MiT63LSgYg4AiQCDlCkCOAOoi4i9QRXMtG5MIxF5I%2Fs2uEJabYsGaiHHR1wR6i4InlTcFx2s%2BAFdy6b%2F8aPsiYBxa21NhC8Fyosq7DbNqjazFQH%2FrSkfpORPB%2FLnxsSX1%2FBoZbBQYBIYtkLNehm8eOQL%2BMuYUWrRjVXz%2FpyPGvSMYJnZkBquO%2B9OH23xkwBNMH6Kno6cA4RsjIaKi0Zhcni9x6DMNKTreVQyK5hnB2F1L9QTDy3amZidn5Z%2B3AMxrvM8c%2FdNyRJ9zm8V2ZPLEMFN3FwHu7ss180Xy9ffmgmBz0kC6aTd3JHsL91rTDvi9SkEGM0dVMAl3c40xZXQ5oFWj4ZeQTFKnsdvqfACiSaw1E3iypT8VQ233qemeWDsLz0kFzy2%2FfnckSjshIcIXgCIYDSTfAsSFo2wcKXU%2BXe1wJ2ek7Nggznz2MTB%2Fw%2BB7TJ7SGqw6ZKu6L33jmzvcoiQmqzlCHC40CVMTLBiFOkDrQ%2B7oQcadOW44Q%2BeiJnVdLzXuwKF%2B%2FxcdPILyi7fRZ3CQYE8Cs95muRbnHFJ6nShsAzZIAp2kYQkqvtuR4TiwcmdMLKRjcIGOqUBnvWKsKm3ze5eNOiyWJ1XeT9yIxy1jrVDLAYFeE82OHDkPJJtvpISogq1%2FXp8DeuIibQKB33P%2BCJEIMteM%2BZfn2xBgLSfW8pum7IfJ2eHhmy55Vl9s%2F3gEPF8IehpPu6sp8lgw%2B%2Brhc49f7TqI4s%2BmqxpEr3H9W%2B1hKOWminRnpEG9H7%2F3V8UBAOYSt%2B2TZTehKHZA3Kh1xBXlauI%2FGHAWKtn8Kkd&X-Amz-Signature=27e857f02d171010abf33e42f973b2ee5028e668babe9ab527136017075f7954&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6227ZP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuc%2BRl8phlj1FEc8fnRp5ov%2FffZALp11V%2FvZ8HHMKNlAIgYdoTjj2JYi96bDrzrD5XwBzk17eiosfqBuod%2BZe%2FXb0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKBMVsJzk17PtaeULircAytR9PRjmq6Wps0XqUz41ECk3ABk5z%2FgsCUfUg6ZYIlihfnbKexT2wX2MiT63LSgYg4AiQCDlCkCOAOoi4i9QRXMtG5MIxF5I%2Fs2uEJabYsGaiHHR1wR6i4InlTcFx2s%2BAFdy6b%2F8aPsiYBxa21NhC8Fyosq7DbNqjazFQH%2FrSkfpORPB%2FLnxsSX1%2FBoZbBQYBIYtkLNehm8eOQL%2BMuYUWrRjVXz%2FpyPGvSMYJnZkBquO%2B9OH23xkwBNMH6Kno6cA4RsjIaKi0Zhcni9x6DMNKTreVQyK5hnB2F1L9QTDy3amZidn5Z%2B3AMxrvM8c%2FdNyRJ9zm8V2ZPLEMFN3FwHu7ss180Xy9ffmgmBz0kC6aTd3JHsL91rTDvi9SkEGM0dVMAl3c40xZXQ5oFWj4ZeQTFKnsdvqfACiSaw1E3iypT8VQ233qemeWDsLz0kFzy2%2FfnckSjshIcIXgCIYDSTfAsSFo2wcKXU%2BXe1wJ2ek7Nggznz2MTB%2Fw%2BB7TJ7SGqw6ZKu6L33jmzvcoiQmqzlCHC40CVMTLBiFOkDrQ%2B7oQcadOW44Q%2BeiJnVdLzXuwKF%2B%2FxcdPILyi7fRZ3CQYE8Cs95muRbnHFJ6nShsAzZIAp2kYQkqvtuR4TiwcmdMLKRjcIGOqUBnvWKsKm3ze5eNOiyWJ1XeT9yIxy1jrVDLAYFeE82OHDkPJJtvpISogq1%2FXp8DeuIibQKB33P%2BCJEIMteM%2BZfn2xBgLSfW8pum7IfJ2eHhmy55Vl9s%2F3gEPF8IehpPu6sp8lgw%2B%2Brhc49f7TqI4s%2BmqxpEr3H9W%2B1hKOWminRnpEG9H7%2F3V8UBAOYSt%2B2TZTehKHZA3Kh1xBXlauI%2FGHAWKtn8Kkd&X-Amz-Signature=64e4a6e49421d01de6cdb6be3b4af130301ed0a284713dbd28683c3454753724&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6227ZP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuc%2BRl8phlj1FEc8fnRp5ov%2FffZALp11V%2FvZ8HHMKNlAIgYdoTjj2JYi96bDrzrD5XwBzk17eiosfqBuod%2BZe%2FXb0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKBMVsJzk17PtaeULircAytR9PRjmq6Wps0XqUz41ECk3ABk5z%2FgsCUfUg6ZYIlihfnbKexT2wX2MiT63LSgYg4AiQCDlCkCOAOoi4i9QRXMtG5MIxF5I%2Fs2uEJabYsGaiHHR1wR6i4InlTcFx2s%2BAFdy6b%2F8aPsiYBxa21NhC8Fyosq7DbNqjazFQH%2FrSkfpORPB%2FLnxsSX1%2FBoZbBQYBIYtkLNehm8eOQL%2BMuYUWrRjVXz%2FpyPGvSMYJnZkBquO%2B9OH23xkwBNMH6Kno6cA4RsjIaKi0Zhcni9x6DMNKTreVQyK5hnB2F1L9QTDy3amZidn5Z%2B3AMxrvM8c%2FdNyRJ9zm8V2ZPLEMFN3FwHu7ss180Xy9ffmgmBz0kC6aTd3JHsL91rTDvi9SkEGM0dVMAl3c40xZXQ5oFWj4ZeQTFKnsdvqfACiSaw1E3iypT8VQ233qemeWDsLz0kFzy2%2FfnckSjshIcIXgCIYDSTfAsSFo2wcKXU%2BXe1wJ2ek7Nggznz2MTB%2Fw%2BB7TJ7SGqw6ZKu6L33jmzvcoiQmqzlCHC40CVMTLBiFOkDrQ%2B7oQcadOW44Q%2BeiJnVdLzXuwKF%2B%2FxcdPILyi7fRZ3CQYE8Cs95muRbnHFJ6nShsAzZIAp2kYQkqvtuR4TiwcmdMLKRjcIGOqUBnvWKsKm3ze5eNOiyWJ1XeT9yIxy1jrVDLAYFeE82OHDkPJJtvpISogq1%2FXp8DeuIibQKB33P%2BCJEIMteM%2BZfn2xBgLSfW8pum7IfJ2eHhmy55Vl9s%2F3gEPF8IehpPu6sp8lgw%2B%2Brhc49f7TqI4s%2BmqxpEr3H9W%2B1hKOWminRnpEG9H7%2F3V8UBAOYSt%2B2TZTehKHZA3Kh1xBXlauI%2FGHAWKtn8Kkd&X-Amz-Signature=196dfa79dc4c387e8262575d371caefb2251d5b9c087234b07eaaf4385a7421a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO6227ZP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T201036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuc%2BRl8phlj1FEc8fnRp5ov%2FffZALp11V%2FvZ8HHMKNlAIgYdoTjj2JYi96bDrzrD5XwBzk17eiosfqBuod%2BZe%2FXb0q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDKBMVsJzk17PtaeULircAytR9PRjmq6Wps0XqUz41ECk3ABk5z%2FgsCUfUg6ZYIlihfnbKexT2wX2MiT63LSgYg4AiQCDlCkCOAOoi4i9QRXMtG5MIxF5I%2Fs2uEJabYsGaiHHR1wR6i4InlTcFx2s%2BAFdy6b%2F8aPsiYBxa21NhC8Fyosq7DbNqjazFQH%2FrSkfpORPB%2FLnxsSX1%2FBoZbBQYBIYtkLNehm8eOQL%2BMuYUWrRjVXz%2FpyPGvSMYJnZkBquO%2B9OH23xkwBNMH6Kno6cA4RsjIaKi0Zhcni9x6DMNKTreVQyK5hnB2F1L9QTDy3amZidn5Z%2B3AMxrvM8c%2FdNyRJ9zm8V2ZPLEMFN3FwHu7ss180Xy9ffmgmBz0kC6aTd3JHsL91rTDvi9SkEGM0dVMAl3c40xZXQ5oFWj4ZeQTFKnsdvqfACiSaw1E3iypT8VQ233qemeWDsLz0kFzy2%2FfnckSjshIcIXgCIYDSTfAsSFo2wcKXU%2BXe1wJ2ek7Nggznz2MTB%2Fw%2BB7TJ7SGqw6ZKu6L33jmzvcoiQmqzlCHC40CVMTLBiFOkDrQ%2B7oQcadOW44Q%2BeiJnVdLzXuwKF%2B%2FxcdPILyi7fRZ3CQYE8Cs95muRbnHFJ6nShsAzZIAp2kYQkqvtuR4TiwcmdMLKRjcIGOqUBnvWKsKm3ze5eNOiyWJ1XeT9yIxy1jrVDLAYFeE82OHDkPJJtvpISogq1%2FXp8DeuIibQKB33P%2BCJEIMteM%2BZfn2xBgLSfW8pum7IfJ2eHhmy55Vl9s%2F3gEPF8IehpPu6sp8lgw%2B%2Brhc49f7TqI4s%2BmqxpEr3H9W%2B1hKOWminRnpEG9H7%2F3V8UBAOYSt%2B2TZTehKHZA3Kh1xBXlauI%2FGHAWKtn8Kkd&X-Amz-Signature=adebfa5b8250dfb87162446836d2939ab0cb6818de53c49d7d694489dcea03dc&X-Amz-SignedHeaders=host&x-id=GetObject)
