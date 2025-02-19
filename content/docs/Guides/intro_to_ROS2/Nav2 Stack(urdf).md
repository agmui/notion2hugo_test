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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUEHHWH5%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD0P8OMvyoVlkH9R%2BeJmKBQSGTvM5nlUQTvPIcc%2F%2B5TaAIhAMFBsS%2BUh%2FoVNPX%2B7%2Bx1m3X6k2mFT3IFZqFFQXCRmerBKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIPskKlB%2FQpIUMuOYq3AM22S8WeM3RoBUljAU7j7btEKDCFbxMM8ak60zy9x489UbXXqzEbN3ppYjfD%2FLm%2B3nVVjbSkOfhCchyvh4ziOFlEd9av2GTWGJ%2F8arr3h6BrvQ57d40FN2PgQjOsoV%2Bjtf4I7J2jvlMo6KU1GNzZra3Ryx5b8UWOGiZepIu9T4WaEdMPSkYauN0FVy30B%2FfJ440c%2FksQlYOHwMkqIvUt1tAnX6PtFsJ2Ld28qQPsCqxSuQ%2BLb1pcXdLyXG0472MFqVkrpzrlC%2FMue4Ch5SA97WmTZ5Sng3Qr8otMkFJIZAbNfOIOgvddbuOyPsJZkzIma4s2ovn411XKjOUUIAG%2Bfia1U8w%2BvzeZAQEvfXyGmCY8zpfeyxVlzw5vC5TQnTpy4tOryiY1KPOdqHXwvb4DQXSgPoJ7F0KRUc4Ue%2Bi2ig08qVErgKxERxg0%2BiDSu%2Bski1sSuEI88OAFa4MhuJftFeG0trn2TWYusRyYW9T3DhfweR9veBn%2BILrncmPc%2F56fF8WtCfb%2FTuwseT7pXBomYaGcQNhXGcF61lKISG3smR%2B3kBZttT04Pj3kbEtHBAVZnd1vTDeOoJ4SpygDiXapVEXc0a9VTV%2F8kedywL62Yt0gtpDMQKRXRHFLXeCiDChxda9BjqkAdXnFWsPM3%2B3xJyj02kH3exGF0oDozhDJsIuEAgnfczq%2B1v44F350zHORsBIitbe4Yma7DeRTpXPqSHzGE4YyxAQrU4XmkO3awSe4HRPeYpGcb2WnSDMnqrVb6X1%2Bdtyj0jtqom6PGJ7BySRTsyibOdwxMzr9dcrqsUs%2BDWOVo6n7mGd5oA7eerGBegLbiMKHxzKuiLyx8%2FvQcTaHujFO0cgE6nP&X-Amz-Signature=8aa919520d83d10ebfda3c7f3e586de42571effc12b6211baba8888990a3be76&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUEHHWH5%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD0P8OMvyoVlkH9R%2BeJmKBQSGTvM5nlUQTvPIcc%2F%2B5TaAIhAMFBsS%2BUh%2FoVNPX%2B7%2Bx1m3X6k2mFT3IFZqFFQXCRmerBKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIPskKlB%2FQpIUMuOYq3AM22S8WeM3RoBUljAU7j7btEKDCFbxMM8ak60zy9x489UbXXqzEbN3ppYjfD%2FLm%2B3nVVjbSkOfhCchyvh4ziOFlEd9av2GTWGJ%2F8arr3h6BrvQ57d40FN2PgQjOsoV%2Bjtf4I7J2jvlMo6KU1GNzZra3Ryx5b8UWOGiZepIu9T4WaEdMPSkYauN0FVy30B%2FfJ440c%2FksQlYOHwMkqIvUt1tAnX6PtFsJ2Ld28qQPsCqxSuQ%2BLb1pcXdLyXG0472MFqVkrpzrlC%2FMue4Ch5SA97WmTZ5Sng3Qr8otMkFJIZAbNfOIOgvddbuOyPsJZkzIma4s2ovn411XKjOUUIAG%2Bfia1U8w%2BvzeZAQEvfXyGmCY8zpfeyxVlzw5vC5TQnTpy4tOryiY1KPOdqHXwvb4DQXSgPoJ7F0KRUc4Ue%2Bi2ig08qVErgKxERxg0%2BiDSu%2Bski1sSuEI88OAFa4MhuJftFeG0trn2TWYusRyYW9T3DhfweR9veBn%2BILrncmPc%2F56fF8WtCfb%2FTuwseT7pXBomYaGcQNhXGcF61lKISG3smR%2B3kBZttT04Pj3kbEtHBAVZnd1vTDeOoJ4SpygDiXapVEXc0a9VTV%2F8kedywL62Yt0gtpDMQKRXRHFLXeCiDChxda9BjqkAdXnFWsPM3%2B3xJyj02kH3exGF0oDozhDJsIuEAgnfczq%2B1v44F350zHORsBIitbe4Yma7DeRTpXPqSHzGE4YyxAQrU4XmkO3awSe4HRPeYpGcb2WnSDMnqrVb6X1%2Bdtyj0jtqom6PGJ7BySRTsyibOdwxMzr9dcrqsUs%2BDWOVo6n7mGd5oA7eerGBegLbiMKHxzKuiLyx8%2FvQcTaHujFO0cgE6nP&X-Amz-Signature=168789345472f8077cca32f291610af8ba4818931d2b9f63bc381f47ff6fd2ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUEHHWH5%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD0P8OMvyoVlkH9R%2BeJmKBQSGTvM5nlUQTvPIcc%2F%2B5TaAIhAMFBsS%2BUh%2FoVNPX%2B7%2Bx1m3X6k2mFT3IFZqFFQXCRmerBKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIPskKlB%2FQpIUMuOYq3AM22S8WeM3RoBUljAU7j7btEKDCFbxMM8ak60zy9x489UbXXqzEbN3ppYjfD%2FLm%2B3nVVjbSkOfhCchyvh4ziOFlEd9av2GTWGJ%2F8arr3h6BrvQ57d40FN2PgQjOsoV%2Bjtf4I7J2jvlMo6KU1GNzZra3Ryx5b8UWOGiZepIu9T4WaEdMPSkYauN0FVy30B%2FfJ440c%2FksQlYOHwMkqIvUt1tAnX6PtFsJ2Ld28qQPsCqxSuQ%2BLb1pcXdLyXG0472MFqVkrpzrlC%2FMue4Ch5SA97WmTZ5Sng3Qr8otMkFJIZAbNfOIOgvddbuOyPsJZkzIma4s2ovn411XKjOUUIAG%2Bfia1U8w%2BvzeZAQEvfXyGmCY8zpfeyxVlzw5vC5TQnTpy4tOryiY1KPOdqHXwvb4DQXSgPoJ7F0KRUc4Ue%2Bi2ig08qVErgKxERxg0%2BiDSu%2Bski1sSuEI88OAFa4MhuJftFeG0trn2TWYusRyYW9T3DhfweR9veBn%2BILrncmPc%2F56fF8WtCfb%2FTuwseT7pXBomYaGcQNhXGcF61lKISG3smR%2B3kBZttT04Pj3kbEtHBAVZnd1vTDeOoJ4SpygDiXapVEXc0a9VTV%2F8kedywL62Yt0gtpDMQKRXRHFLXeCiDChxda9BjqkAdXnFWsPM3%2B3xJyj02kH3exGF0oDozhDJsIuEAgnfczq%2B1v44F350zHORsBIitbe4Yma7DeRTpXPqSHzGE4YyxAQrU4XmkO3awSe4HRPeYpGcb2WnSDMnqrVb6X1%2Bdtyj0jtqom6PGJ7BySRTsyibOdwxMzr9dcrqsUs%2BDWOVo6n7mGd5oA7eerGBegLbiMKHxzKuiLyx8%2FvQcTaHujFO0cgE6nP&X-Amz-Signature=a18f37dcbd3bc29efd584ac082dfdab37273870c7c96a6fb2e425dadd13b9c49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUEHHWH5%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD0P8OMvyoVlkH9R%2BeJmKBQSGTvM5nlUQTvPIcc%2F%2B5TaAIhAMFBsS%2BUh%2FoVNPX%2B7%2Bx1m3X6k2mFT3IFZqFFQXCRmerBKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIPskKlB%2FQpIUMuOYq3AM22S8WeM3RoBUljAU7j7btEKDCFbxMM8ak60zy9x489UbXXqzEbN3ppYjfD%2FLm%2B3nVVjbSkOfhCchyvh4ziOFlEd9av2GTWGJ%2F8arr3h6BrvQ57d40FN2PgQjOsoV%2Bjtf4I7J2jvlMo6KU1GNzZra3Ryx5b8UWOGiZepIu9T4WaEdMPSkYauN0FVy30B%2FfJ440c%2FksQlYOHwMkqIvUt1tAnX6PtFsJ2Ld28qQPsCqxSuQ%2BLb1pcXdLyXG0472MFqVkrpzrlC%2FMue4Ch5SA97WmTZ5Sng3Qr8otMkFJIZAbNfOIOgvddbuOyPsJZkzIma4s2ovn411XKjOUUIAG%2Bfia1U8w%2BvzeZAQEvfXyGmCY8zpfeyxVlzw5vC5TQnTpy4tOryiY1KPOdqHXwvb4DQXSgPoJ7F0KRUc4Ue%2Bi2ig08qVErgKxERxg0%2BiDSu%2Bski1sSuEI88OAFa4MhuJftFeG0trn2TWYusRyYW9T3DhfweR9veBn%2BILrncmPc%2F56fF8WtCfb%2FTuwseT7pXBomYaGcQNhXGcF61lKISG3smR%2B3kBZttT04Pj3kbEtHBAVZnd1vTDeOoJ4SpygDiXapVEXc0a9VTV%2F8kedywL62Yt0gtpDMQKRXRHFLXeCiDChxda9BjqkAdXnFWsPM3%2B3xJyj02kH3exGF0oDozhDJsIuEAgnfczq%2B1v44F350zHORsBIitbe4Yma7DeRTpXPqSHzGE4YyxAQrU4XmkO3awSe4HRPeYpGcb2WnSDMnqrVb6X1%2Bdtyj0jtqom6PGJ7BySRTsyibOdwxMzr9dcrqsUs%2BDWOVo6n7mGd5oA7eerGBegLbiMKHxzKuiLyx8%2FvQcTaHujFO0cgE6nP&X-Amz-Signature=99ea33cb0911f8556d8880099358549bd8c2ca9fd2562bab370d17149c8ca938&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUEHHWH5%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD0P8OMvyoVlkH9R%2BeJmKBQSGTvM5nlUQTvPIcc%2F%2B5TaAIhAMFBsS%2BUh%2FoVNPX%2B7%2Bx1m3X6k2mFT3IFZqFFQXCRmerBKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIPskKlB%2FQpIUMuOYq3AM22S8WeM3RoBUljAU7j7btEKDCFbxMM8ak60zy9x489UbXXqzEbN3ppYjfD%2FLm%2B3nVVjbSkOfhCchyvh4ziOFlEd9av2GTWGJ%2F8arr3h6BrvQ57d40FN2PgQjOsoV%2Bjtf4I7J2jvlMo6KU1GNzZra3Ryx5b8UWOGiZepIu9T4WaEdMPSkYauN0FVy30B%2FfJ440c%2FksQlYOHwMkqIvUt1tAnX6PtFsJ2Ld28qQPsCqxSuQ%2BLb1pcXdLyXG0472MFqVkrpzrlC%2FMue4Ch5SA97WmTZ5Sng3Qr8otMkFJIZAbNfOIOgvddbuOyPsJZkzIma4s2ovn411XKjOUUIAG%2Bfia1U8w%2BvzeZAQEvfXyGmCY8zpfeyxVlzw5vC5TQnTpy4tOryiY1KPOdqHXwvb4DQXSgPoJ7F0KRUc4Ue%2Bi2ig08qVErgKxERxg0%2BiDSu%2Bski1sSuEI88OAFa4MhuJftFeG0trn2TWYusRyYW9T3DhfweR9veBn%2BILrncmPc%2F56fF8WtCfb%2FTuwseT7pXBomYaGcQNhXGcF61lKISG3smR%2B3kBZttT04Pj3kbEtHBAVZnd1vTDeOoJ4SpygDiXapVEXc0a9VTV%2F8kedywL62Yt0gtpDMQKRXRHFLXeCiDChxda9BjqkAdXnFWsPM3%2B3xJyj02kH3exGF0oDozhDJsIuEAgnfczq%2B1v44F350zHORsBIitbe4Yma7DeRTpXPqSHzGE4YyxAQrU4XmkO3awSe4HRPeYpGcb2WnSDMnqrVb6X1%2Bdtyj0jtqom6PGJ7BySRTsyibOdwxMzr9dcrqsUs%2BDWOVo6n7mGd5oA7eerGBegLbiMKHxzKuiLyx8%2FvQcTaHujFO0cgE6nP&X-Amz-Signature=84d0ceb1092d4fbe2f601151260f2e0055752846d1648c0246c4fa383065ed60&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUEHHWH5%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQD0P8OMvyoVlkH9R%2BeJmKBQSGTvM5nlUQTvPIcc%2F%2B5TaAIhAMFBsS%2BUh%2FoVNPX%2B7%2Bx1m3X6k2mFT3IFZqFFQXCRmerBKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIPskKlB%2FQpIUMuOYq3AM22S8WeM3RoBUljAU7j7btEKDCFbxMM8ak60zy9x489UbXXqzEbN3ppYjfD%2FLm%2B3nVVjbSkOfhCchyvh4ziOFlEd9av2GTWGJ%2F8arr3h6BrvQ57d40FN2PgQjOsoV%2Bjtf4I7J2jvlMo6KU1GNzZra3Ryx5b8UWOGiZepIu9T4WaEdMPSkYauN0FVy30B%2FfJ440c%2FksQlYOHwMkqIvUt1tAnX6PtFsJ2Ld28qQPsCqxSuQ%2BLb1pcXdLyXG0472MFqVkrpzrlC%2FMue4Ch5SA97WmTZ5Sng3Qr8otMkFJIZAbNfOIOgvddbuOyPsJZkzIma4s2ovn411XKjOUUIAG%2Bfia1U8w%2BvzeZAQEvfXyGmCY8zpfeyxVlzw5vC5TQnTpy4tOryiY1KPOdqHXwvb4DQXSgPoJ7F0KRUc4Ue%2Bi2ig08qVErgKxERxg0%2BiDSu%2Bski1sSuEI88OAFa4MhuJftFeG0trn2TWYusRyYW9T3DhfweR9veBn%2BILrncmPc%2F56fF8WtCfb%2FTuwseT7pXBomYaGcQNhXGcF61lKISG3smR%2B3kBZttT04Pj3kbEtHBAVZnd1vTDeOoJ4SpygDiXapVEXc0a9VTV%2F8kedywL62Yt0gtpDMQKRXRHFLXeCiDChxda9BjqkAdXnFWsPM3%2B3xJyj02kH3exGF0oDozhDJsIuEAgnfczq%2B1v44F350zHORsBIitbe4Yma7DeRTpXPqSHzGE4YyxAQrU4XmkO3awSe4HRPeYpGcb2WnSDMnqrVb6X1%2Bdtyj0jtqom6PGJ7BySRTsyibOdwxMzr9dcrqsUs%2BDWOVo6n7mGd5oA7eerGBegLbiMKHxzKuiLyx8%2FvQcTaHujFO0cgE6nP&X-Amz-Signature=7d9fd78bb61a4985ab47959dfba161c354d667c53c09bc75faba44464365e636&X-Amz-SignedHeaders=host&x-id=GetObject)
