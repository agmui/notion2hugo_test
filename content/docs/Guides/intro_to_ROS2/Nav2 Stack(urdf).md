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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HFWCVQ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD0T7NoicetySaI68ozF7AW3FA6jpWIhuVX%2FDIAEIf7%2FAIgB3SqH0220WdfREqFTc7HuZurrcKX5ksWGWyHHZTFtHAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDL8nE45UK84N7vD20CrcA3trxDjGG5eX1DzPcN9kyvAR%2FyGI2OEUqlOGYpZZMrDO3TKTUSfepGgGbYCQ2MGsPaubs1LOKWmOaxWnBqXG6qLY%2BCsEtaFWgsFmfu8gE3o1hFPlIvlTER09BJlEc0pNPS1dXl0x4aaqTRd9DbchBV2HdssG8%2FAc9twscMOFjWoGttvEzx9ogrsYFOOk8SKe0Ynlu1WWL9jd1bI8Nduah87PWoGfy5xXJIiDtk5Ob8ptfT2WGQvtA7pbKE02CeTpiwnfbwZRm24yHB6J2blKHvfmIOEPvG4MDxqG%2BxvpqzMR9sNRGytb%2FoIgqjGTPmTkubRrrSX18KvjGEI1kFunWE5tBTjrnXJ6uJem3dQ8X1zpXHbcOlm3mHo9x7Bq1%2FS3%2B8jX5NSiWhNeJ%2FN3qKTO9fimybn5Urmd3vOdR2j4bQp6ClvxfbKso8fWQywQGQFLmlKGWsPoXUhBle7xLCUHrNfgV8%2FBOYcaxHSA%2F6Je%2FzkraIePRrWraI1qXpexg%2FvTf5zYC84pUrLz6Hxib1HNh%2BN2y%2F%2BEWiQ%2B90ZH0%2BL5viXlRoPiJItKYqhDTxjfS4xygTGeBj%2BpHtGpI7cbdrB6lyVCm6%2FHzM6UFvY1VYs%2B6q%2BXJRk199jXEeP6ZPAtMJiO5cMGOqUB3z6FW2YSzDlwNQjfew%2Bwm1NN4hfK7gfMyAp3SRH5o6A4ZLR4dgYRXXbAQR8K%2F%2FL8lZ71zzCSJdCShOs8Wlo4GwRC1vbjiPdNMwlZCUX1IMn2Xm6HaYo2D%2FkFtNGrLGn6X1ivx7N09aNWyRY0G22XcXZ00uXWRjGI8ZtRYzJ9CJRTT5OZicR3CrTKDCv2gcGxyZjU1Qwone5z658dq54VApFC16UA&X-Amz-Signature=e141c45d966aa8ec89f0579c4ae4cccff07ce428eb6abb050e544cd3b49b57b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HFWCVQ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD0T7NoicetySaI68ozF7AW3FA6jpWIhuVX%2FDIAEIf7%2FAIgB3SqH0220WdfREqFTc7HuZurrcKX5ksWGWyHHZTFtHAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDL8nE45UK84N7vD20CrcA3trxDjGG5eX1DzPcN9kyvAR%2FyGI2OEUqlOGYpZZMrDO3TKTUSfepGgGbYCQ2MGsPaubs1LOKWmOaxWnBqXG6qLY%2BCsEtaFWgsFmfu8gE3o1hFPlIvlTER09BJlEc0pNPS1dXl0x4aaqTRd9DbchBV2HdssG8%2FAc9twscMOFjWoGttvEzx9ogrsYFOOk8SKe0Ynlu1WWL9jd1bI8Nduah87PWoGfy5xXJIiDtk5Ob8ptfT2WGQvtA7pbKE02CeTpiwnfbwZRm24yHB6J2blKHvfmIOEPvG4MDxqG%2BxvpqzMR9sNRGytb%2FoIgqjGTPmTkubRrrSX18KvjGEI1kFunWE5tBTjrnXJ6uJem3dQ8X1zpXHbcOlm3mHo9x7Bq1%2FS3%2B8jX5NSiWhNeJ%2FN3qKTO9fimybn5Urmd3vOdR2j4bQp6ClvxfbKso8fWQywQGQFLmlKGWsPoXUhBle7xLCUHrNfgV8%2FBOYcaxHSA%2F6Je%2FzkraIePRrWraI1qXpexg%2FvTf5zYC84pUrLz6Hxib1HNh%2BN2y%2F%2BEWiQ%2B90ZH0%2BL5viXlRoPiJItKYqhDTxjfS4xygTGeBj%2BpHtGpI7cbdrB6lyVCm6%2FHzM6UFvY1VYs%2B6q%2BXJRk199jXEeP6ZPAtMJiO5cMGOqUB3z6FW2YSzDlwNQjfew%2Bwm1NN4hfK7gfMyAp3SRH5o6A4ZLR4dgYRXXbAQR8K%2F%2FL8lZ71zzCSJdCShOs8Wlo4GwRC1vbjiPdNMwlZCUX1IMn2Xm6HaYo2D%2FkFtNGrLGn6X1ivx7N09aNWyRY0G22XcXZ00uXWRjGI8ZtRYzJ9CJRTT5OZicR3CrTKDCv2gcGxyZjU1Qwone5z658dq54VApFC16UA&X-Amz-Signature=e2bdbbdb782f4d7015e8b40d149a0f21c63a80b95083dd85aaca01ba54922086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HFWCVQ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD0T7NoicetySaI68ozF7AW3FA6jpWIhuVX%2FDIAEIf7%2FAIgB3SqH0220WdfREqFTc7HuZurrcKX5ksWGWyHHZTFtHAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDL8nE45UK84N7vD20CrcA3trxDjGG5eX1DzPcN9kyvAR%2FyGI2OEUqlOGYpZZMrDO3TKTUSfepGgGbYCQ2MGsPaubs1LOKWmOaxWnBqXG6qLY%2BCsEtaFWgsFmfu8gE3o1hFPlIvlTER09BJlEc0pNPS1dXl0x4aaqTRd9DbchBV2HdssG8%2FAc9twscMOFjWoGttvEzx9ogrsYFOOk8SKe0Ynlu1WWL9jd1bI8Nduah87PWoGfy5xXJIiDtk5Ob8ptfT2WGQvtA7pbKE02CeTpiwnfbwZRm24yHB6J2blKHvfmIOEPvG4MDxqG%2BxvpqzMR9sNRGytb%2FoIgqjGTPmTkubRrrSX18KvjGEI1kFunWE5tBTjrnXJ6uJem3dQ8X1zpXHbcOlm3mHo9x7Bq1%2FS3%2B8jX5NSiWhNeJ%2FN3qKTO9fimybn5Urmd3vOdR2j4bQp6ClvxfbKso8fWQywQGQFLmlKGWsPoXUhBle7xLCUHrNfgV8%2FBOYcaxHSA%2F6Je%2FzkraIePRrWraI1qXpexg%2FvTf5zYC84pUrLz6Hxib1HNh%2BN2y%2F%2BEWiQ%2B90ZH0%2BL5viXlRoPiJItKYqhDTxjfS4xygTGeBj%2BpHtGpI7cbdrB6lyVCm6%2FHzM6UFvY1VYs%2B6q%2BXJRk199jXEeP6ZPAtMJiO5cMGOqUB3z6FW2YSzDlwNQjfew%2Bwm1NN4hfK7gfMyAp3SRH5o6A4ZLR4dgYRXXbAQR8K%2F%2FL8lZ71zzCSJdCShOs8Wlo4GwRC1vbjiPdNMwlZCUX1IMn2Xm6HaYo2D%2FkFtNGrLGn6X1ivx7N09aNWyRY0G22XcXZ00uXWRjGI8ZtRYzJ9CJRTT5OZicR3CrTKDCv2gcGxyZjU1Qwone5z658dq54VApFC16UA&X-Amz-Signature=5da47f99d3f483315fb7e057f708a5dd129d154ea6dcfc2fca8cc2147c5fbaec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HFWCVQ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD0T7NoicetySaI68ozF7AW3FA6jpWIhuVX%2FDIAEIf7%2FAIgB3SqH0220WdfREqFTc7HuZurrcKX5ksWGWyHHZTFtHAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDL8nE45UK84N7vD20CrcA3trxDjGG5eX1DzPcN9kyvAR%2FyGI2OEUqlOGYpZZMrDO3TKTUSfepGgGbYCQ2MGsPaubs1LOKWmOaxWnBqXG6qLY%2BCsEtaFWgsFmfu8gE3o1hFPlIvlTER09BJlEc0pNPS1dXl0x4aaqTRd9DbchBV2HdssG8%2FAc9twscMOFjWoGttvEzx9ogrsYFOOk8SKe0Ynlu1WWL9jd1bI8Nduah87PWoGfy5xXJIiDtk5Ob8ptfT2WGQvtA7pbKE02CeTpiwnfbwZRm24yHB6J2blKHvfmIOEPvG4MDxqG%2BxvpqzMR9sNRGytb%2FoIgqjGTPmTkubRrrSX18KvjGEI1kFunWE5tBTjrnXJ6uJem3dQ8X1zpXHbcOlm3mHo9x7Bq1%2FS3%2B8jX5NSiWhNeJ%2FN3qKTO9fimybn5Urmd3vOdR2j4bQp6ClvxfbKso8fWQywQGQFLmlKGWsPoXUhBle7xLCUHrNfgV8%2FBOYcaxHSA%2F6Je%2FzkraIePRrWraI1qXpexg%2FvTf5zYC84pUrLz6Hxib1HNh%2BN2y%2F%2BEWiQ%2B90ZH0%2BL5viXlRoPiJItKYqhDTxjfS4xygTGeBj%2BpHtGpI7cbdrB6lyVCm6%2FHzM6UFvY1VYs%2B6q%2BXJRk199jXEeP6ZPAtMJiO5cMGOqUB3z6FW2YSzDlwNQjfew%2Bwm1NN4hfK7gfMyAp3SRH5o6A4ZLR4dgYRXXbAQR8K%2F%2FL8lZ71zzCSJdCShOs8Wlo4GwRC1vbjiPdNMwlZCUX1IMn2Xm6HaYo2D%2FkFtNGrLGn6X1ivx7N09aNWyRY0G22XcXZ00uXWRjGI8ZtRYzJ9CJRTT5OZicR3CrTKDCv2gcGxyZjU1Qwone5z658dq54VApFC16UA&X-Amz-Signature=b9d2d5f3c598dbdeb21781820ef2213938a2548a2079badcaf55b977c32bb002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HFWCVQ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD0T7NoicetySaI68ozF7AW3FA6jpWIhuVX%2FDIAEIf7%2FAIgB3SqH0220WdfREqFTc7HuZurrcKX5ksWGWyHHZTFtHAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDL8nE45UK84N7vD20CrcA3trxDjGG5eX1DzPcN9kyvAR%2FyGI2OEUqlOGYpZZMrDO3TKTUSfepGgGbYCQ2MGsPaubs1LOKWmOaxWnBqXG6qLY%2BCsEtaFWgsFmfu8gE3o1hFPlIvlTER09BJlEc0pNPS1dXl0x4aaqTRd9DbchBV2HdssG8%2FAc9twscMOFjWoGttvEzx9ogrsYFOOk8SKe0Ynlu1WWL9jd1bI8Nduah87PWoGfy5xXJIiDtk5Ob8ptfT2WGQvtA7pbKE02CeTpiwnfbwZRm24yHB6J2blKHvfmIOEPvG4MDxqG%2BxvpqzMR9sNRGytb%2FoIgqjGTPmTkubRrrSX18KvjGEI1kFunWE5tBTjrnXJ6uJem3dQ8X1zpXHbcOlm3mHo9x7Bq1%2FS3%2B8jX5NSiWhNeJ%2FN3qKTO9fimybn5Urmd3vOdR2j4bQp6ClvxfbKso8fWQywQGQFLmlKGWsPoXUhBle7xLCUHrNfgV8%2FBOYcaxHSA%2F6Je%2FzkraIePRrWraI1qXpexg%2FvTf5zYC84pUrLz6Hxib1HNh%2BN2y%2F%2BEWiQ%2B90ZH0%2BL5viXlRoPiJItKYqhDTxjfS4xygTGeBj%2BpHtGpI7cbdrB6lyVCm6%2FHzM6UFvY1VYs%2B6q%2BXJRk199jXEeP6ZPAtMJiO5cMGOqUB3z6FW2YSzDlwNQjfew%2Bwm1NN4hfK7gfMyAp3SRH5o6A4ZLR4dgYRXXbAQR8K%2F%2FL8lZ71zzCSJdCShOs8Wlo4GwRC1vbjiPdNMwlZCUX1IMn2Xm6HaYo2D%2FkFtNGrLGn6X1ivx7N09aNWyRY0G22XcXZ00uXWRjGI8ZtRYzJ9CJRTT5OZicR3CrTKDCv2gcGxyZjU1Qwone5z658dq54VApFC16UA&X-Amz-Signature=0051afb21a6174a9147f2f8e0a1a934e25b568a3dc1463b9beb836960ed78e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653HFWCVQ%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD0T7NoicetySaI68ozF7AW3FA6jpWIhuVX%2FDIAEIf7%2FAIgB3SqH0220WdfREqFTc7HuZurrcKX5ksWGWyHHZTFtHAq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDL8nE45UK84N7vD20CrcA3trxDjGG5eX1DzPcN9kyvAR%2FyGI2OEUqlOGYpZZMrDO3TKTUSfepGgGbYCQ2MGsPaubs1LOKWmOaxWnBqXG6qLY%2BCsEtaFWgsFmfu8gE3o1hFPlIvlTER09BJlEc0pNPS1dXl0x4aaqTRd9DbchBV2HdssG8%2FAc9twscMOFjWoGttvEzx9ogrsYFOOk8SKe0Ynlu1WWL9jd1bI8Nduah87PWoGfy5xXJIiDtk5Ob8ptfT2WGQvtA7pbKE02CeTpiwnfbwZRm24yHB6J2blKHvfmIOEPvG4MDxqG%2BxvpqzMR9sNRGytb%2FoIgqjGTPmTkubRrrSX18KvjGEI1kFunWE5tBTjrnXJ6uJem3dQ8X1zpXHbcOlm3mHo9x7Bq1%2FS3%2B8jX5NSiWhNeJ%2FN3qKTO9fimybn5Urmd3vOdR2j4bQp6ClvxfbKso8fWQywQGQFLmlKGWsPoXUhBle7xLCUHrNfgV8%2FBOYcaxHSA%2F6Je%2FzkraIePRrWraI1qXpexg%2FvTf5zYC84pUrLz6Hxib1HNh%2BN2y%2F%2BEWiQ%2B90ZH0%2BL5viXlRoPiJItKYqhDTxjfS4xygTGeBj%2BpHtGpI7cbdrB6lyVCm6%2FHzM6UFvY1VYs%2B6q%2BXJRk199jXEeP6ZPAtMJiO5cMGOqUB3z6FW2YSzDlwNQjfew%2Bwm1NN4hfK7gfMyAp3SRH5o6A4ZLR4dgYRXXbAQR8K%2F%2FL8lZ71zzCSJdCShOs8Wlo4GwRC1vbjiPdNMwlZCUX1IMn2Xm6HaYo2D%2FkFtNGrLGn6X1ivx7N09aNWyRY0G22XcXZ00uXWRjGI8ZtRYzJ9CJRTT5OZicR3CrTKDCv2gcGxyZjU1Qwone5z658dq54VApFC16UA&X-Amz-Signature=d646df165083bbab7716013739afb90eb2f0fee5e7ba65d92c4f84a6fb1c8f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
