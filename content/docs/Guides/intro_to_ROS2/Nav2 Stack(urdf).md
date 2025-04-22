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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSQBJAST%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCmflNblVILwpTc6mAxUmkkj%2Bff8noRrqQF66cNBAAvFwIgOKfQJEdM1Ep08zPuIJqLGgd4zEK%2FEV4zuv2k9K0Z5L4qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzpUwd8otH8AWvDAyrcA3lV6wbEg%2BsSShzJABp%2BpMURKWaIOmsfjQco18PymIbL1DzUJd2DmYRT5lRqPjyshgPfbKUXJ%2BeTvLm%2FlhIpzgdZWWIJuPCuwXViBrfoBfElDjMNiGwU2%2F3WhNhhXMStwnzDv1EMQv0%2BK%2B2R2UbPfBNfgIGfVLWd22v4hO8GD5a60D%2F8HH4PEqGJMORpdtNgFzWIgglfVUFTSXSoy9nHlIAi2JepTnXdy6J65lQ7MiWkMnj5zpbmlX8YhGycT8Df88JArhwH21Ihx9rwZ%2BoWhLFrHwmI38qIwimeJd91hlIAiAr6VUT35%2FcLPi8eX3SWPxOUiyRm7%2Bgh%2FW6ZUcgOk7IMTfxTHPaFJ66JdiWfxADyzG7PLr08Cg6RolaHKR5lyQxaosnDuscLpBgjcfaysS61iUDoivCZx7ILzMH2SqoKFL%2FAvw7Yy6RhuxPFzKimfcZw79DZ8mo8D%2F6ogzim9g5MvMeh6jaS48DZpDirocWWQB09lwy9MlqJJ6US9DivnTECJ7JKD7NFMbwNV16ALWHY9oXgHDmmNZhHG5AxUr1XNXuEv7CibkVghZBr1MV8v1taZVupjAj6qYcY13IOZc6FH%2BfFX2rKVkhb08Z8SEwjZ6GHMs%2FTUmOY%2FToVMPSjoMAGOqUBVhsD%2FXEa1by92giLKsZWsZrXE5fzA5Q%2FrEgfmHXY7XPJ8RBdi9nbdf88uENAyOSXmfac1mFZWeqwrq8y%2F6HHeiJcHXGnXk23dxvkDc4Nkky1k4VRLGJ2CdiU2kZ7fxMc1ARcj%2BID4BjnuZyoyhd0xK2gD6K2HJQmi8q2Z72rT4viKB4rq3fjN28R6OdFY%2FHnHVlPnr8WRvE1n9AeXPT4lTeyFNIn&X-Amz-Signature=b187eaddecfbbd23ec8269b543928855b6cab8b1bdc539edc70b8907a84f268b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSQBJAST%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCmflNblVILwpTc6mAxUmkkj%2Bff8noRrqQF66cNBAAvFwIgOKfQJEdM1Ep08zPuIJqLGgd4zEK%2FEV4zuv2k9K0Z5L4qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzpUwd8otH8AWvDAyrcA3lV6wbEg%2BsSShzJABp%2BpMURKWaIOmsfjQco18PymIbL1DzUJd2DmYRT5lRqPjyshgPfbKUXJ%2BeTvLm%2FlhIpzgdZWWIJuPCuwXViBrfoBfElDjMNiGwU2%2F3WhNhhXMStwnzDv1EMQv0%2BK%2B2R2UbPfBNfgIGfVLWd22v4hO8GD5a60D%2F8HH4PEqGJMORpdtNgFzWIgglfVUFTSXSoy9nHlIAi2JepTnXdy6J65lQ7MiWkMnj5zpbmlX8YhGycT8Df88JArhwH21Ihx9rwZ%2BoWhLFrHwmI38qIwimeJd91hlIAiAr6VUT35%2FcLPi8eX3SWPxOUiyRm7%2Bgh%2FW6ZUcgOk7IMTfxTHPaFJ66JdiWfxADyzG7PLr08Cg6RolaHKR5lyQxaosnDuscLpBgjcfaysS61iUDoivCZx7ILzMH2SqoKFL%2FAvw7Yy6RhuxPFzKimfcZw79DZ8mo8D%2F6ogzim9g5MvMeh6jaS48DZpDirocWWQB09lwy9MlqJJ6US9DivnTECJ7JKD7NFMbwNV16ALWHY9oXgHDmmNZhHG5AxUr1XNXuEv7CibkVghZBr1MV8v1taZVupjAj6qYcY13IOZc6FH%2BfFX2rKVkhb08Z8SEwjZ6GHMs%2FTUmOY%2FToVMPSjoMAGOqUBVhsD%2FXEa1by92giLKsZWsZrXE5fzA5Q%2FrEgfmHXY7XPJ8RBdi9nbdf88uENAyOSXmfac1mFZWeqwrq8y%2F6HHeiJcHXGnXk23dxvkDc4Nkky1k4VRLGJ2CdiU2kZ7fxMc1ARcj%2BID4BjnuZyoyhd0xK2gD6K2HJQmi8q2Z72rT4viKB4rq3fjN28R6OdFY%2FHnHVlPnr8WRvE1n9AeXPT4lTeyFNIn&X-Amz-Signature=b9fa912e3f4e7f815f4eaac1e4ae5f676875b10d76137e5f58fc29fb9549b6a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSQBJAST%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCmflNblVILwpTc6mAxUmkkj%2Bff8noRrqQF66cNBAAvFwIgOKfQJEdM1Ep08zPuIJqLGgd4zEK%2FEV4zuv2k9K0Z5L4qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzpUwd8otH8AWvDAyrcA3lV6wbEg%2BsSShzJABp%2BpMURKWaIOmsfjQco18PymIbL1DzUJd2DmYRT5lRqPjyshgPfbKUXJ%2BeTvLm%2FlhIpzgdZWWIJuPCuwXViBrfoBfElDjMNiGwU2%2F3WhNhhXMStwnzDv1EMQv0%2BK%2B2R2UbPfBNfgIGfVLWd22v4hO8GD5a60D%2F8HH4PEqGJMORpdtNgFzWIgglfVUFTSXSoy9nHlIAi2JepTnXdy6J65lQ7MiWkMnj5zpbmlX8YhGycT8Df88JArhwH21Ihx9rwZ%2BoWhLFrHwmI38qIwimeJd91hlIAiAr6VUT35%2FcLPi8eX3SWPxOUiyRm7%2Bgh%2FW6ZUcgOk7IMTfxTHPaFJ66JdiWfxADyzG7PLr08Cg6RolaHKR5lyQxaosnDuscLpBgjcfaysS61iUDoivCZx7ILzMH2SqoKFL%2FAvw7Yy6RhuxPFzKimfcZw79DZ8mo8D%2F6ogzim9g5MvMeh6jaS48DZpDirocWWQB09lwy9MlqJJ6US9DivnTECJ7JKD7NFMbwNV16ALWHY9oXgHDmmNZhHG5AxUr1XNXuEv7CibkVghZBr1MV8v1taZVupjAj6qYcY13IOZc6FH%2BfFX2rKVkhb08Z8SEwjZ6GHMs%2FTUmOY%2FToVMPSjoMAGOqUBVhsD%2FXEa1by92giLKsZWsZrXE5fzA5Q%2FrEgfmHXY7XPJ8RBdi9nbdf88uENAyOSXmfac1mFZWeqwrq8y%2F6HHeiJcHXGnXk23dxvkDc4Nkky1k4VRLGJ2CdiU2kZ7fxMc1ARcj%2BID4BjnuZyoyhd0xK2gD6K2HJQmi8q2Z72rT4viKB4rq3fjN28R6OdFY%2FHnHVlPnr8WRvE1n9AeXPT4lTeyFNIn&X-Amz-Signature=ccd25d53077a943fa1a212a4326eb9b691dff3202fc4acb2686f650157366750&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSQBJAST%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCmflNblVILwpTc6mAxUmkkj%2Bff8noRrqQF66cNBAAvFwIgOKfQJEdM1Ep08zPuIJqLGgd4zEK%2FEV4zuv2k9K0Z5L4qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzpUwd8otH8AWvDAyrcA3lV6wbEg%2BsSShzJABp%2BpMURKWaIOmsfjQco18PymIbL1DzUJd2DmYRT5lRqPjyshgPfbKUXJ%2BeTvLm%2FlhIpzgdZWWIJuPCuwXViBrfoBfElDjMNiGwU2%2F3WhNhhXMStwnzDv1EMQv0%2BK%2B2R2UbPfBNfgIGfVLWd22v4hO8GD5a60D%2F8HH4PEqGJMORpdtNgFzWIgglfVUFTSXSoy9nHlIAi2JepTnXdy6J65lQ7MiWkMnj5zpbmlX8YhGycT8Df88JArhwH21Ihx9rwZ%2BoWhLFrHwmI38qIwimeJd91hlIAiAr6VUT35%2FcLPi8eX3SWPxOUiyRm7%2Bgh%2FW6ZUcgOk7IMTfxTHPaFJ66JdiWfxADyzG7PLr08Cg6RolaHKR5lyQxaosnDuscLpBgjcfaysS61iUDoivCZx7ILzMH2SqoKFL%2FAvw7Yy6RhuxPFzKimfcZw79DZ8mo8D%2F6ogzim9g5MvMeh6jaS48DZpDirocWWQB09lwy9MlqJJ6US9DivnTECJ7JKD7NFMbwNV16ALWHY9oXgHDmmNZhHG5AxUr1XNXuEv7CibkVghZBr1MV8v1taZVupjAj6qYcY13IOZc6FH%2BfFX2rKVkhb08Z8SEwjZ6GHMs%2FTUmOY%2FToVMPSjoMAGOqUBVhsD%2FXEa1by92giLKsZWsZrXE5fzA5Q%2FrEgfmHXY7XPJ8RBdi9nbdf88uENAyOSXmfac1mFZWeqwrq8y%2F6HHeiJcHXGnXk23dxvkDc4Nkky1k4VRLGJ2CdiU2kZ7fxMc1ARcj%2BID4BjnuZyoyhd0xK2gD6K2HJQmi8q2Z72rT4viKB4rq3fjN28R6OdFY%2FHnHVlPnr8WRvE1n9AeXPT4lTeyFNIn&X-Amz-Signature=b0299a1397813d4c4ca24d1e1af56b3f7bc85d8e9650d96ec064e701167cd2ba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSQBJAST%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCmflNblVILwpTc6mAxUmkkj%2Bff8noRrqQF66cNBAAvFwIgOKfQJEdM1Ep08zPuIJqLGgd4zEK%2FEV4zuv2k9K0Z5L4qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzpUwd8otH8AWvDAyrcA3lV6wbEg%2BsSShzJABp%2BpMURKWaIOmsfjQco18PymIbL1DzUJd2DmYRT5lRqPjyshgPfbKUXJ%2BeTvLm%2FlhIpzgdZWWIJuPCuwXViBrfoBfElDjMNiGwU2%2F3WhNhhXMStwnzDv1EMQv0%2BK%2B2R2UbPfBNfgIGfVLWd22v4hO8GD5a60D%2F8HH4PEqGJMORpdtNgFzWIgglfVUFTSXSoy9nHlIAi2JepTnXdy6J65lQ7MiWkMnj5zpbmlX8YhGycT8Df88JArhwH21Ihx9rwZ%2BoWhLFrHwmI38qIwimeJd91hlIAiAr6VUT35%2FcLPi8eX3SWPxOUiyRm7%2Bgh%2FW6ZUcgOk7IMTfxTHPaFJ66JdiWfxADyzG7PLr08Cg6RolaHKR5lyQxaosnDuscLpBgjcfaysS61iUDoivCZx7ILzMH2SqoKFL%2FAvw7Yy6RhuxPFzKimfcZw79DZ8mo8D%2F6ogzim9g5MvMeh6jaS48DZpDirocWWQB09lwy9MlqJJ6US9DivnTECJ7JKD7NFMbwNV16ALWHY9oXgHDmmNZhHG5AxUr1XNXuEv7CibkVghZBr1MV8v1taZVupjAj6qYcY13IOZc6FH%2BfFX2rKVkhb08Z8SEwjZ6GHMs%2FTUmOY%2FToVMPSjoMAGOqUBVhsD%2FXEa1by92giLKsZWsZrXE5fzA5Q%2FrEgfmHXY7XPJ8RBdi9nbdf88uENAyOSXmfac1mFZWeqwrq8y%2F6HHeiJcHXGnXk23dxvkDc4Nkky1k4VRLGJ2CdiU2kZ7fxMc1ARcj%2BID4BjnuZyoyhd0xK2gD6K2HJQmi8q2Z72rT4viKB4rq3fjN28R6OdFY%2FHnHVlPnr8WRvE1n9AeXPT4lTeyFNIn&X-Amz-Signature=6aab2b2eb876d43b85e7c1712a6a5e3cd69072681f7ed3b1c7ebee66140b61b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSQBJAST%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCmflNblVILwpTc6mAxUmkkj%2Bff8noRrqQF66cNBAAvFwIgOKfQJEdM1Ep08zPuIJqLGgd4zEK%2FEV4zuv2k9K0Z5L4qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzpUwd8otH8AWvDAyrcA3lV6wbEg%2BsSShzJABp%2BpMURKWaIOmsfjQco18PymIbL1DzUJd2DmYRT5lRqPjyshgPfbKUXJ%2BeTvLm%2FlhIpzgdZWWIJuPCuwXViBrfoBfElDjMNiGwU2%2F3WhNhhXMStwnzDv1EMQv0%2BK%2B2R2UbPfBNfgIGfVLWd22v4hO8GD5a60D%2F8HH4PEqGJMORpdtNgFzWIgglfVUFTSXSoy9nHlIAi2JepTnXdy6J65lQ7MiWkMnj5zpbmlX8YhGycT8Df88JArhwH21Ihx9rwZ%2BoWhLFrHwmI38qIwimeJd91hlIAiAr6VUT35%2FcLPi8eX3SWPxOUiyRm7%2Bgh%2FW6ZUcgOk7IMTfxTHPaFJ66JdiWfxADyzG7PLr08Cg6RolaHKR5lyQxaosnDuscLpBgjcfaysS61iUDoivCZx7ILzMH2SqoKFL%2FAvw7Yy6RhuxPFzKimfcZw79DZ8mo8D%2F6ogzim9g5MvMeh6jaS48DZpDirocWWQB09lwy9MlqJJ6US9DivnTECJ7JKD7NFMbwNV16ALWHY9oXgHDmmNZhHG5AxUr1XNXuEv7CibkVghZBr1MV8v1taZVupjAj6qYcY13IOZc6FH%2BfFX2rKVkhb08Z8SEwjZ6GHMs%2FTUmOY%2FToVMPSjoMAGOqUBVhsD%2FXEa1by92giLKsZWsZrXE5fzA5Q%2FrEgfmHXY7XPJ8RBdi9nbdf88uENAyOSXmfac1mFZWeqwrq8y%2F6HHeiJcHXGnXk23dxvkDc4Nkky1k4VRLGJ2CdiU2kZ7fxMc1ARcj%2BID4BjnuZyoyhd0xK2gD6K2HJQmi8q2Z72rT4viKB4rq3fjN28R6OdFY%2FHnHVlPnr8WRvE1n9AeXPT4lTeyFNIn&X-Amz-Signature=dee41d6059b55cd02bc1fbecbee2033e81906c5183155d4cd1c671451830c882&X-Amz-SignedHeaders=host&x-id=GetObject)
