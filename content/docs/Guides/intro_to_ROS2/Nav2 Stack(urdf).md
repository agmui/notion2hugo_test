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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3S4XXEM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQt29uU%2BKxlMdrYMvf2G7a2rayD%2ByLnWXdNKQ9c9u%2FyAIhAP37psYPPbuOKwHSpQ1xl06j6iHYAARH6dZwyAFRKna%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcNbwHd%2FSbMyYDT0Uq3AM23IenPs6YBFMOghC8i8PKQ6um2pP253YpaKsXCI2LaEji5Wsp9GnazhVjblLTj305UXEi9%2BIJCBglV10sa3D12BdA8eAGbzOVAnTTyqwGEDtyIS01wWTzFUK03iP64b76ULGEVqq2Hsn2TirdigPBOgpQ%2FI0cvF%2FRm2tc6m50OcMGNfDJHvjIUjY3wq98PwgvqOaW6gSqxg3ItiIUBB2TdO7OXGeCUqMg1%2BE7hrhx3YMyizEcqs3BoSjLGbn%2FQEUTwsHQBXUJltZGrX9MNwlONnnpC2iYi1c54v6%2FblyIKJBHjbSQvje5kktrnbZpNpM4n8zkqq4uuL9rKY64aGHeoei7Lo96pG0E%2FkTr89d48xuRADvElpJvQWsaHSQJkATWG1AFGXPQZ6uTSvJsOknPfUc6ce08e1SfAnouoITRmCKC6Af6MJvJu7rWXFidX%2FfmGyenQLWw3UIMeD2pS2oJxptHNpNuM%2BO4VKxy2VYDdB3p5iSadLFVxkvSkF2ENueSEIYDzMnv9oZZ%2BDdqui0BNtl0%2BwDtEB1f48LiDjVFxg%2BIrDlsRbezxO7wXasloXV%2BpsiuciC13YIiJFErAaPLvzy0conR4xexS0jCumLipsGMoFy8QioYG052pDCJq%2B%2B8BjqkAXT57DRA7J6XmzrOLcT7wabrUfQaLy6szCrkaoW%2Fd64zWJwizD%2FqKI8na5xYnWX5P38q%2F%2Ff63841KlTf5qgJoKZBPw%2F03OOhDWHhoNtYcePB1BoVCc0tw6o8g7lHzVwCgtBRuae0Q2Ux8fI8VVZ3e%2FdOfLbASpHl8793La98w4pk936%2BPVwul3MRStxX4qMtySKOymZqf9d%2BE5x6P8h%2B28lAFjOg&X-Amz-Signature=cda6f31aad7b2ddfb259790ba584d7576f64e2981332ab1212f7f588dea0af94&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3S4XXEM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQt29uU%2BKxlMdrYMvf2G7a2rayD%2ByLnWXdNKQ9c9u%2FyAIhAP37psYPPbuOKwHSpQ1xl06j6iHYAARH6dZwyAFRKna%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcNbwHd%2FSbMyYDT0Uq3AM23IenPs6YBFMOghC8i8PKQ6um2pP253YpaKsXCI2LaEji5Wsp9GnazhVjblLTj305UXEi9%2BIJCBglV10sa3D12BdA8eAGbzOVAnTTyqwGEDtyIS01wWTzFUK03iP64b76ULGEVqq2Hsn2TirdigPBOgpQ%2FI0cvF%2FRm2tc6m50OcMGNfDJHvjIUjY3wq98PwgvqOaW6gSqxg3ItiIUBB2TdO7OXGeCUqMg1%2BE7hrhx3YMyizEcqs3BoSjLGbn%2FQEUTwsHQBXUJltZGrX9MNwlONnnpC2iYi1c54v6%2FblyIKJBHjbSQvje5kktrnbZpNpM4n8zkqq4uuL9rKY64aGHeoei7Lo96pG0E%2FkTr89d48xuRADvElpJvQWsaHSQJkATWG1AFGXPQZ6uTSvJsOknPfUc6ce08e1SfAnouoITRmCKC6Af6MJvJu7rWXFidX%2FfmGyenQLWw3UIMeD2pS2oJxptHNpNuM%2BO4VKxy2VYDdB3p5iSadLFVxkvSkF2ENueSEIYDzMnv9oZZ%2BDdqui0BNtl0%2BwDtEB1f48LiDjVFxg%2BIrDlsRbezxO7wXasloXV%2BpsiuciC13YIiJFErAaPLvzy0conR4xexS0jCumLipsGMoFy8QioYG052pDCJq%2B%2B8BjqkAXT57DRA7J6XmzrOLcT7wabrUfQaLy6szCrkaoW%2Fd64zWJwizD%2FqKI8na5xYnWX5P38q%2F%2Ff63841KlTf5qgJoKZBPw%2F03OOhDWHhoNtYcePB1BoVCc0tw6o8g7lHzVwCgtBRuae0Q2Ux8fI8VVZ3e%2FdOfLbASpHl8793La98w4pk936%2BPVwul3MRStxX4qMtySKOymZqf9d%2BE5x6P8h%2B28lAFjOg&X-Amz-Signature=3dceb6d75e931e4dbf912b8539d665dbd158aa6102d16361ccf536f3dadaa596&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3S4XXEM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQt29uU%2BKxlMdrYMvf2G7a2rayD%2ByLnWXdNKQ9c9u%2FyAIhAP37psYPPbuOKwHSpQ1xl06j6iHYAARH6dZwyAFRKna%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcNbwHd%2FSbMyYDT0Uq3AM23IenPs6YBFMOghC8i8PKQ6um2pP253YpaKsXCI2LaEji5Wsp9GnazhVjblLTj305UXEi9%2BIJCBglV10sa3D12BdA8eAGbzOVAnTTyqwGEDtyIS01wWTzFUK03iP64b76ULGEVqq2Hsn2TirdigPBOgpQ%2FI0cvF%2FRm2tc6m50OcMGNfDJHvjIUjY3wq98PwgvqOaW6gSqxg3ItiIUBB2TdO7OXGeCUqMg1%2BE7hrhx3YMyizEcqs3BoSjLGbn%2FQEUTwsHQBXUJltZGrX9MNwlONnnpC2iYi1c54v6%2FblyIKJBHjbSQvje5kktrnbZpNpM4n8zkqq4uuL9rKY64aGHeoei7Lo96pG0E%2FkTr89d48xuRADvElpJvQWsaHSQJkATWG1AFGXPQZ6uTSvJsOknPfUc6ce08e1SfAnouoITRmCKC6Af6MJvJu7rWXFidX%2FfmGyenQLWw3UIMeD2pS2oJxptHNpNuM%2BO4VKxy2VYDdB3p5iSadLFVxkvSkF2ENueSEIYDzMnv9oZZ%2BDdqui0BNtl0%2BwDtEB1f48LiDjVFxg%2BIrDlsRbezxO7wXasloXV%2BpsiuciC13YIiJFErAaPLvzy0conR4xexS0jCumLipsGMoFy8QioYG052pDCJq%2B%2B8BjqkAXT57DRA7J6XmzrOLcT7wabrUfQaLy6szCrkaoW%2Fd64zWJwizD%2FqKI8na5xYnWX5P38q%2F%2Ff63841KlTf5qgJoKZBPw%2F03OOhDWHhoNtYcePB1BoVCc0tw6o8g7lHzVwCgtBRuae0Q2Ux8fI8VVZ3e%2FdOfLbASpHl8793La98w4pk936%2BPVwul3MRStxX4qMtySKOymZqf9d%2BE5x6P8h%2B28lAFjOg&X-Amz-Signature=dd03f7b63bf22f12399860582cae0fea7fbeec5c74a1682caa89f4cfa54e3210&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3S4XXEM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQt29uU%2BKxlMdrYMvf2G7a2rayD%2ByLnWXdNKQ9c9u%2FyAIhAP37psYPPbuOKwHSpQ1xl06j6iHYAARH6dZwyAFRKna%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcNbwHd%2FSbMyYDT0Uq3AM23IenPs6YBFMOghC8i8PKQ6um2pP253YpaKsXCI2LaEji5Wsp9GnazhVjblLTj305UXEi9%2BIJCBglV10sa3D12BdA8eAGbzOVAnTTyqwGEDtyIS01wWTzFUK03iP64b76ULGEVqq2Hsn2TirdigPBOgpQ%2FI0cvF%2FRm2tc6m50OcMGNfDJHvjIUjY3wq98PwgvqOaW6gSqxg3ItiIUBB2TdO7OXGeCUqMg1%2BE7hrhx3YMyizEcqs3BoSjLGbn%2FQEUTwsHQBXUJltZGrX9MNwlONnnpC2iYi1c54v6%2FblyIKJBHjbSQvje5kktrnbZpNpM4n8zkqq4uuL9rKY64aGHeoei7Lo96pG0E%2FkTr89d48xuRADvElpJvQWsaHSQJkATWG1AFGXPQZ6uTSvJsOknPfUc6ce08e1SfAnouoITRmCKC6Af6MJvJu7rWXFidX%2FfmGyenQLWw3UIMeD2pS2oJxptHNpNuM%2BO4VKxy2VYDdB3p5iSadLFVxkvSkF2ENueSEIYDzMnv9oZZ%2BDdqui0BNtl0%2BwDtEB1f48LiDjVFxg%2BIrDlsRbezxO7wXasloXV%2BpsiuciC13YIiJFErAaPLvzy0conR4xexS0jCumLipsGMoFy8QioYG052pDCJq%2B%2B8BjqkAXT57DRA7J6XmzrOLcT7wabrUfQaLy6szCrkaoW%2Fd64zWJwizD%2FqKI8na5xYnWX5P38q%2F%2Ff63841KlTf5qgJoKZBPw%2F03OOhDWHhoNtYcePB1BoVCc0tw6o8g7lHzVwCgtBRuae0Q2Ux8fI8VVZ3e%2FdOfLbASpHl8793La98w4pk936%2BPVwul3MRStxX4qMtySKOymZqf9d%2BE5x6P8h%2B28lAFjOg&X-Amz-Signature=c16b4c9a64d2cd0217d40c8ee1f65591eec7ed966e84a3445f0b4f9e9997a7be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3S4XXEM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQt29uU%2BKxlMdrYMvf2G7a2rayD%2ByLnWXdNKQ9c9u%2FyAIhAP37psYPPbuOKwHSpQ1xl06j6iHYAARH6dZwyAFRKna%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcNbwHd%2FSbMyYDT0Uq3AM23IenPs6YBFMOghC8i8PKQ6um2pP253YpaKsXCI2LaEji5Wsp9GnazhVjblLTj305UXEi9%2BIJCBglV10sa3D12BdA8eAGbzOVAnTTyqwGEDtyIS01wWTzFUK03iP64b76ULGEVqq2Hsn2TirdigPBOgpQ%2FI0cvF%2FRm2tc6m50OcMGNfDJHvjIUjY3wq98PwgvqOaW6gSqxg3ItiIUBB2TdO7OXGeCUqMg1%2BE7hrhx3YMyizEcqs3BoSjLGbn%2FQEUTwsHQBXUJltZGrX9MNwlONnnpC2iYi1c54v6%2FblyIKJBHjbSQvje5kktrnbZpNpM4n8zkqq4uuL9rKY64aGHeoei7Lo96pG0E%2FkTr89d48xuRADvElpJvQWsaHSQJkATWG1AFGXPQZ6uTSvJsOknPfUc6ce08e1SfAnouoITRmCKC6Af6MJvJu7rWXFidX%2FfmGyenQLWw3UIMeD2pS2oJxptHNpNuM%2BO4VKxy2VYDdB3p5iSadLFVxkvSkF2ENueSEIYDzMnv9oZZ%2BDdqui0BNtl0%2BwDtEB1f48LiDjVFxg%2BIrDlsRbezxO7wXasloXV%2BpsiuciC13YIiJFErAaPLvzy0conR4xexS0jCumLipsGMoFy8QioYG052pDCJq%2B%2B8BjqkAXT57DRA7J6XmzrOLcT7wabrUfQaLy6szCrkaoW%2Fd64zWJwizD%2FqKI8na5xYnWX5P38q%2F%2Ff63841KlTf5qgJoKZBPw%2F03OOhDWHhoNtYcePB1BoVCc0tw6o8g7lHzVwCgtBRuae0Q2Ux8fI8VVZ3e%2FdOfLbASpHl8793La98w4pk936%2BPVwul3MRStxX4qMtySKOymZqf9d%2BE5x6P8h%2B28lAFjOg&X-Amz-Signature=14869a320503f7b5abd3330528458a73439e237eeb42fa07cd2bd428e7397c5a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3S4XXEM%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQt29uU%2BKxlMdrYMvf2G7a2rayD%2ByLnWXdNKQ9c9u%2FyAIhAP37psYPPbuOKwHSpQ1xl06j6iHYAARH6dZwyAFRKna%2FKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcNbwHd%2FSbMyYDT0Uq3AM23IenPs6YBFMOghC8i8PKQ6um2pP253YpaKsXCI2LaEji5Wsp9GnazhVjblLTj305UXEi9%2BIJCBglV10sa3D12BdA8eAGbzOVAnTTyqwGEDtyIS01wWTzFUK03iP64b76ULGEVqq2Hsn2TirdigPBOgpQ%2FI0cvF%2FRm2tc6m50OcMGNfDJHvjIUjY3wq98PwgvqOaW6gSqxg3ItiIUBB2TdO7OXGeCUqMg1%2BE7hrhx3YMyizEcqs3BoSjLGbn%2FQEUTwsHQBXUJltZGrX9MNwlONnnpC2iYi1c54v6%2FblyIKJBHjbSQvje5kktrnbZpNpM4n8zkqq4uuL9rKY64aGHeoei7Lo96pG0E%2FkTr89d48xuRADvElpJvQWsaHSQJkATWG1AFGXPQZ6uTSvJsOknPfUc6ce08e1SfAnouoITRmCKC6Af6MJvJu7rWXFidX%2FfmGyenQLWw3UIMeD2pS2oJxptHNpNuM%2BO4VKxy2VYDdB3p5iSadLFVxkvSkF2ENueSEIYDzMnv9oZZ%2BDdqui0BNtl0%2BwDtEB1f48LiDjVFxg%2BIrDlsRbezxO7wXasloXV%2BpsiuciC13YIiJFErAaPLvzy0conR4xexS0jCumLipsGMoFy8QioYG052pDCJq%2B%2B8BjqkAXT57DRA7J6XmzrOLcT7wabrUfQaLy6szCrkaoW%2Fd64zWJwizD%2FqKI8na5xYnWX5P38q%2F%2Ff63841KlTf5qgJoKZBPw%2F03OOhDWHhoNtYcePB1BoVCc0tw6o8g7lHzVwCgtBRuae0Q2Ux8fI8VVZ3e%2FdOfLbASpHl8793La98w4pk936%2BPVwul3MRStxX4qMtySKOymZqf9d%2BE5x6P8h%2B28lAFjOg&X-Amz-Signature=28f699d3517f9c35e4bfb528c34db80abc10f7907fd3aa72c5f69ada7108ac82&X-Amz-SignedHeaders=host&x-id=GetObject)
