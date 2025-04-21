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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6NRF2PA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH%2F52186QNM1UEzNpmLyfoXjtoRHG6ir8A1WPVavEnz2AiBUqvUmliZNMEgVjW3k1dSL6hWiLpcZvqD0jPk7z3yKRSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNysU9o%2Bth8eQ68WKtwD%2BiQyub3Md6ROUiNAhvcwmHeRVBJptMp5eH%2FTCqO%2FF4D%2FcEcnSz5udYFDY47oVN%2BvQ2Pt8aKLTHFBdEX448IB9t3nj7capWPyelKspWlMdPeytCW3Qcuqiu5s8H79kq353IHhCH3VhD7JmsvWnFyptLIVPtlD63ofPLGnmOWYcsQlJNTfZqcjEakmOkFjodcMyGIQrPbufrOcgCAp1K1oWttxZXsOtWt9kNYg0eHc0dwi6qulLF2wxoGgiTaHiHkn7eqyAtoxoqPzmIKw04cjXAm%2BgoBz7YahwGEd8DrZ2Ador%2F0pMNJEkGCY0FGpKc9ruO9vI6w2AbUobI4SKddFI%2BdX%2BHgWZxNQYBp8w6yJqQKjiYh6LAnbUnIhXdUgY%2BAL8V%2BW4LLauH73QxPx2QSSAuhAK%2F5NxELmzo6f7irHbkKTpGEUVRDM5Y8NVtJyNgLkfo%2B64b3YrvvDL9Cl9FTUoyU3KTpGjhERMydiBfuL6tocU9G0IrGz6GQfIuEtVBKBqBdKyrxVdnQ3M0P8aWASKcA0qgd2H6zid6CpV7vG3HYCT6t%2Fc2QSo98oEA10bJR6FB4yLJ494K%2FZIP2NHlyzCkfcrSItEzDIjuriz6Z%2FnIL58zeB2u6V30xzojown9uVwAY6pgFME4B9NW6HxhAyz%2FICA4Q76%2FfhD2jIfv%2F%2BJANvsWxFdYvZxMvQwQvD6Ui2PE9VQ9doKb7mvdU58ZnTMzGmbZ54MQmtz8T3ltiwyy7uf1cFwPD%2BGA87WsVIW6oxIjM6dKWh6f4ekA8q%2Bhx011leQOaj%2B7Y64WY7KkwWTNJocv42%2B%2BEXMl5JXPA5dbLBHSQSsRekIsRfMlZMHEYUNvyvux0RMaqjPKQX&X-Amz-Signature=75c4a135113491cf9a39748253e8db449d471629bf65a90c44b318227bd77764&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6NRF2PA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH%2F52186QNM1UEzNpmLyfoXjtoRHG6ir8A1WPVavEnz2AiBUqvUmliZNMEgVjW3k1dSL6hWiLpcZvqD0jPk7z3yKRSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNysU9o%2Bth8eQ68WKtwD%2BiQyub3Md6ROUiNAhvcwmHeRVBJptMp5eH%2FTCqO%2FF4D%2FcEcnSz5udYFDY47oVN%2BvQ2Pt8aKLTHFBdEX448IB9t3nj7capWPyelKspWlMdPeytCW3Qcuqiu5s8H79kq353IHhCH3VhD7JmsvWnFyptLIVPtlD63ofPLGnmOWYcsQlJNTfZqcjEakmOkFjodcMyGIQrPbufrOcgCAp1K1oWttxZXsOtWt9kNYg0eHc0dwi6qulLF2wxoGgiTaHiHkn7eqyAtoxoqPzmIKw04cjXAm%2BgoBz7YahwGEd8DrZ2Ador%2F0pMNJEkGCY0FGpKc9ruO9vI6w2AbUobI4SKddFI%2BdX%2BHgWZxNQYBp8w6yJqQKjiYh6LAnbUnIhXdUgY%2BAL8V%2BW4LLauH73QxPx2QSSAuhAK%2F5NxELmzo6f7irHbkKTpGEUVRDM5Y8NVtJyNgLkfo%2B64b3YrvvDL9Cl9FTUoyU3KTpGjhERMydiBfuL6tocU9G0IrGz6GQfIuEtVBKBqBdKyrxVdnQ3M0P8aWASKcA0qgd2H6zid6CpV7vG3HYCT6t%2Fc2QSo98oEA10bJR6FB4yLJ494K%2FZIP2NHlyzCkfcrSItEzDIjuriz6Z%2FnIL58zeB2u6V30xzojown9uVwAY6pgFME4B9NW6HxhAyz%2FICA4Q76%2FfhD2jIfv%2F%2BJANvsWxFdYvZxMvQwQvD6Ui2PE9VQ9doKb7mvdU58ZnTMzGmbZ54MQmtz8T3ltiwyy7uf1cFwPD%2BGA87WsVIW6oxIjM6dKWh6f4ekA8q%2Bhx011leQOaj%2B7Y64WY7KkwWTNJocv42%2B%2BEXMl5JXPA5dbLBHSQSsRekIsRfMlZMHEYUNvyvux0RMaqjPKQX&X-Amz-Signature=2750a7f604964c3f2da0b13ab65b020190bbf9066b7d53cb15c86d30eb46f0f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6NRF2PA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH%2F52186QNM1UEzNpmLyfoXjtoRHG6ir8A1WPVavEnz2AiBUqvUmliZNMEgVjW3k1dSL6hWiLpcZvqD0jPk7z3yKRSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNysU9o%2Bth8eQ68WKtwD%2BiQyub3Md6ROUiNAhvcwmHeRVBJptMp5eH%2FTCqO%2FF4D%2FcEcnSz5udYFDY47oVN%2BvQ2Pt8aKLTHFBdEX448IB9t3nj7capWPyelKspWlMdPeytCW3Qcuqiu5s8H79kq353IHhCH3VhD7JmsvWnFyptLIVPtlD63ofPLGnmOWYcsQlJNTfZqcjEakmOkFjodcMyGIQrPbufrOcgCAp1K1oWttxZXsOtWt9kNYg0eHc0dwi6qulLF2wxoGgiTaHiHkn7eqyAtoxoqPzmIKw04cjXAm%2BgoBz7YahwGEd8DrZ2Ador%2F0pMNJEkGCY0FGpKc9ruO9vI6w2AbUobI4SKddFI%2BdX%2BHgWZxNQYBp8w6yJqQKjiYh6LAnbUnIhXdUgY%2BAL8V%2BW4LLauH73QxPx2QSSAuhAK%2F5NxELmzo6f7irHbkKTpGEUVRDM5Y8NVtJyNgLkfo%2B64b3YrvvDL9Cl9FTUoyU3KTpGjhERMydiBfuL6tocU9G0IrGz6GQfIuEtVBKBqBdKyrxVdnQ3M0P8aWASKcA0qgd2H6zid6CpV7vG3HYCT6t%2Fc2QSo98oEA10bJR6FB4yLJ494K%2FZIP2NHlyzCkfcrSItEzDIjuriz6Z%2FnIL58zeB2u6V30xzojown9uVwAY6pgFME4B9NW6HxhAyz%2FICA4Q76%2FfhD2jIfv%2F%2BJANvsWxFdYvZxMvQwQvD6Ui2PE9VQ9doKb7mvdU58ZnTMzGmbZ54MQmtz8T3ltiwyy7uf1cFwPD%2BGA87WsVIW6oxIjM6dKWh6f4ekA8q%2Bhx011leQOaj%2B7Y64WY7KkwWTNJocv42%2B%2BEXMl5JXPA5dbLBHSQSsRekIsRfMlZMHEYUNvyvux0RMaqjPKQX&X-Amz-Signature=44f8b4b5a0b9d20085c32a277b873d9edee355637b676ccf3480b101d66dd6ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6NRF2PA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH%2F52186QNM1UEzNpmLyfoXjtoRHG6ir8A1WPVavEnz2AiBUqvUmliZNMEgVjW3k1dSL6hWiLpcZvqD0jPk7z3yKRSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNysU9o%2Bth8eQ68WKtwD%2BiQyub3Md6ROUiNAhvcwmHeRVBJptMp5eH%2FTCqO%2FF4D%2FcEcnSz5udYFDY47oVN%2BvQ2Pt8aKLTHFBdEX448IB9t3nj7capWPyelKspWlMdPeytCW3Qcuqiu5s8H79kq353IHhCH3VhD7JmsvWnFyptLIVPtlD63ofPLGnmOWYcsQlJNTfZqcjEakmOkFjodcMyGIQrPbufrOcgCAp1K1oWttxZXsOtWt9kNYg0eHc0dwi6qulLF2wxoGgiTaHiHkn7eqyAtoxoqPzmIKw04cjXAm%2BgoBz7YahwGEd8DrZ2Ador%2F0pMNJEkGCY0FGpKc9ruO9vI6w2AbUobI4SKddFI%2BdX%2BHgWZxNQYBp8w6yJqQKjiYh6LAnbUnIhXdUgY%2BAL8V%2BW4LLauH73QxPx2QSSAuhAK%2F5NxELmzo6f7irHbkKTpGEUVRDM5Y8NVtJyNgLkfo%2B64b3YrvvDL9Cl9FTUoyU3KTpGjhERMydiBfuL6tocU9G0IrGz6GQfIuEtVBKBqBdKyrxVdnQ3M0P8aWASKcA0qgd2H6zid6CpV7vG3HYCT6t%2Fc2QSo98oEA10bJR6FB4yLJ494K%2FZIP2NHlyzCkfcrSItEzDIjuriz6Z%2FnIL58zeB2u6V30xzojown9uVwAY6pgFME4B9NW6HxhAyz%2FICA4Q76%2FfhD2jIfv%2F%2BJANvsWxFdYvZxMvQwQvD6Ui2PE9VQ9doKb7mvdU58ZnTMzGmbZ54MQmtz8T3ltiwyy7uf1cFwPD%2BGA87WsVIW6oxIjM6dKWh6f4ekA8q%2Bhx011leQOaj%2B7Y64WY7KkwWTNJocv42%2B%2BEXMl5JXPA5dbLBHSQSsRekIsRfMlZMHEYUNvyvux0RMaqjPKQX&X-Amz-Signature=542aa4996965a90cc999db411c8f7ed8cd0ee33e22d0e5a31740dddb8c8b0d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6NRF2PA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH%2F52186QNM1UEzNpmLyfoXjtoRHG6ir8A1WPVavEnz2AiBUqvUmliZNMEgVjW3k1dSL6hWiLpcZvqD0jPk7z3yKRSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNysU9o%2Bth8eQ68WKtwD%2BiQyub3Md6ROUiNAhvcwmHeRVBJptMp5eH%2FTCqO%2FF4D%2FcEcnSz5udYFDY47oVN%2BvQ2Pt8aKLTHFBdEX448IB9t3nj7capWPyelKspWlMdPeytCW3Qcuqiu5s8H79kq353IHhCH3VhD7JmsvWnFyptLIVPtlD63ofPLGnmOWYcsQlJNTfZqcjEakmOkFjodcMyGIQrPbufrOcgCAp1K1oWttxZXsOtWt9kNYg0eHc0dwi6qulLF2wxoGgiTaHiHkn7eqyAtoxoqPzmIKw04cjXAm%2BgoBz7YahwGEd8DrZ2Ador%2F0pMNJEkGCY0FGpKc9ruO9vI6w2AbUobI4SKddFI%2BdX%2BHgWZxNQYBp8w6yJqQKjiYh6LAnbUnIhXdUgY%2BAL8V%2BW4LLauH73QxPx2QSSAuhAK%2F5NxELmzo6f7irHbkKTpGEUVRDM5Y8NVtJyNgLkfo%2B64b3YrvvDL9Cl9FTUoyU3KTpGjhERMydiBfuL6tocU9G0IrGz6GQfIuEtVBKBqBdKyrxVdnQ3M0P8aWASKcA0qgd2H6zid6CpV7vG3HYCT6t%2Fc2QSo98oEA10bJR6FB4yLJ494K%2FZIP2NHlyzCkfcrSItEzDIjuriz6Z%2FnIL58zeB2u6V30xzojown9uVwAY6pgFME4B9NW6HxhAyz%2FICA4Q76%2FfhD2jIfv%2F%2BJANvsWxFdYvZxMvQwQvD6Ui2PE9VQ9doKb7mvdU58ZnTMzGmbZ54MQmtz8T3ltiwyy7uf1cFwPD%2BGA87WsVIW6oxIjM6dKWh6f4ekA8q%2Bhx011leQOaj%2B7Y64WY7KkwWTNJocv42%2B%2BEXMl5JXPA5dbLBHSQSsRekIsRfMlZMHEYUNvyvux0RMaqjPKQX&X-Amz-Signature=f7edde30bc66e3b5ed3152eb663abb83f5fd485182b79b90425ced20b511363e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6NRF2PA%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T004238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJGMEQCIH%2F52186QNM1UEzNpmLyfoXjtoRHG6ir8A1WPVavEnz2AiBUqvUmliZNMEgVjW3k1dSL6hWiLpcZvqD0jPk7z3yKRSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmNysU9o%2Bth8eQ68WKtwD%2BiQyub3Md6ROUiNAhvcwmHeRVBJptMp5eH%2FTCqO%2FF4D%2FcEcnSz5udYFDY47oVN%2BvQ2Pt8aKLTHFBdEX448IB9t3nj7capWPyelKspWlMdPeytCW3Qcuqiu5s8H79kq353IHhCH3VhD7JmsvWnFyptLIVPtlD63ofPLGnmOWYcsQlJNTfZqcjEakmOkFjodcMyGIQrPbufrOcgCAp1K1oWttxZXsOtWt9kNYg0eHc0dwi6qulLF2wxoGgiTaHiHkn7eqyAtoxoqPzmIKw04cjXAm%2BgoBz7YahwGEd8DrZ2Ador%2F0pMNJEkGCY0FGpKc9ruO9vI6w2AbUobI4SKddFI%2BdX%2BHgWZxNQYBp8w6yJqQKjiYh6LAnbUnIhXdUgY%2BAL8V%2BW4LLauH73QxPx2QSSAuhAK%2F5NxELmzo6f7irHbkKTpGEUVRDM5Y8NVtJyNgLkfo%2B64b3YrvvDL9Cl9FTUoyU3KTpGjhERMydiBfuL6tocU9G0IrGz6GQfIuEtVBKBqBdKyrxVdnQ3M0P8aWASKcA0qgd2H6zid6CpV7vG3HYCT6t%2Fc2QSo98oEA10bJR6FB4yLJ494K%2FZIP2NHlyzCkfcrSItEzDIjuriz6Z%2FnIL58zeB2u6V30xzojown9uVwAY6pgFME4B9NW6HxhAyz%2FICA4Q76%2FfhD2jIfv%2F%2BJANvsWxFdYvZxMvQwQvD6Ui2PE9VQ9doKb7mvdU58ZnTMzGmbZ54MQmtz8T3ltiwyy7uf1cFwPD%2BGA87WsVIW6oxIjM6dKWh6f4ekA8q%2Bhx011leQOaj%2B7Y64WY7KkwWTNJocv42%2B%2BEXMl5JXPA5dbLBHSQSsRekIsRfMlZMHEYUNvyvux0RMaqjPKQX&X-Amz-Signature=2d196a6de3797cdcc250a9ed91c7dd6a3c9ee4d57b44b107938f2e5e6c330ec7&X-Amz-SignedHeaders=host&x-id=GetObject)
