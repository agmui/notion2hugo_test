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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGH43GQ3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAF6zWZ0HDCmKrQsvgclXrl4GAatS2e81YLMlm%2FTDqQiAiASGNT0JRNwp1Hw5PQNAtJ1lCctGO9poi%2B%2FXPcUwbigzCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMZjaS42rvSp0PVbLvKtwDH7RKv6NmVeQhzbAO3h4Jv6W1ndqfgkxqT1RoHcE0TJaxfWOp6hKjHZJ%2FAM7%2Bzh2HlkgOPbp7E8AV7zb83RTqn4faMkQuQywwkkKloif7bB48HfBkCRQU33l1qhzJKUV7Xd2zBqLmGqt%2FjMPHGqdwwde%2FH2kB0KBVeM7P1s8%2B9Q5yoCxTOm2p3MlZ7nw2syZAhkIe6WyIHVHVk%2FQ%2BVb81mBmYsVob%2BeD2MVX3Jr5mTCWHp29XGa0aX89kzau6aR8aTp7hXmI9MMpE72hsbC1LO9QaHthauwX7k6S1P1o1B5wrMatY4PiMlBNmyKZx0jwEt0KMfTZPIpvc0aJRI%2FX6AlDLohAxkfM9qsLuDM6w31UfBj22QSOMNi6GeNheqQqVId4YZ3iBlLrZfEejvsDHaEcoDr%2F8zf0gTdXsz0S15N0AKQKGHPtBHG0gNp8pr9%2BGGnqKEPIniKCvslAPbhT8iaVWdK7HxgiqzNDohBbvJVFcC8t7FlW87A2mR4m3buTtsLyktzX5TZMtwH7rDY84mEkN39JGIkzhI2hHE%2Bcj1uI6pvP9wZNvpTBthpe7IoZwNSTflxQJNlNrbFAgau2eB6N3mbmZTO%2BZ%2FugoiYwxoo4Nm6wcy5PqxjBi9SMwvMqDwgY6pgG15EbOnRUA1AAdHQV3MHw%2BRdTDrdsEwpVqr29PujJjVhmZUiQJ2U2b8HUJoMVfe%2Fzhv1irVpU8Ptm%2BUWiFdcGioiCqFewhNpxBEqGL9kwgd8t5dJU4fJCsZTLxTbITNJy66OTnsGOAFoLuk4JaGNxiCpcETfTMRlnLyFaakJESxZm0yUucE67Vvwo29WVD%2BeaAn5LoLdZ%2FQYaAYw%2F4dGoad3EEdrDN&X-Amz-Signature=bb162642d81ac9cc4fe464f6d329e9730e935afc464810a13d7399f808784256&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGH43GQ3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAF6zWZ0HDCmKrQsvgclXrl4GAatS2e81YLMlm%2FTDqQiAiASGNT0JRNwp1Hw5PQNAtJ1lCctGO9poi%2B%2FXPcUwbigzCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMZjaS42rvSp0PVbLvKtwDH7RKv6NmVeQhzbAO3h4Jv6W1ndqfgkxqT1RoHcE0TJaxfWOp6hKjHZJ%2FAM7%2Bzh2HlkgOPbp7E8AV7zb83RTqn4faMkQuQywwkkKloif7bB48HfBkCRQU33l1qhzJKUV7Xd2zBqLmGqt%2FjMPHGqdwwde%2FH2kB0KBVeM7P1s8%2B9Q5yoCxTOm2p3MlZ7nw2syZAhkIe6WyIHVHVk%2FQ%2BVb81mBmYsVob%2BeD2MVX3Jr5mTCWHp29XGa0aX89kzau6aR8aTp7hXmI9MMpE72hsbC1LO9QaHthauwX7k6S1P1o1B5wrMatY4PiMlBNmyKZx0jwEt0KMfTZPIpvc0aJRI%2FX6AlDLohAxkfM9qsLuDM6w31UfBj22QSOMNi6GeNheqQqVId4YZ3iBlLrZfEejvsDHaEcoDr%2F8zf0gTdXsz0S15N0AKQKGHPtBHG0gNp8pr9%2BGGnqKEPIniKCvslAPbhT8iaVWdK7HxgiqzNDohBbvJVFcC8t7FlW87A2mR4m3buTtsLyktzX5TZMtwH7rDY84mEkN39JGIkzhI2hHE%2Bcj1uI6pvP9wZNvpTBthpe7IoZwNSTflxQJNlNrbFAgau2eB6N3mbmZTO%2BZ%2FugoiYwxoo4Nm6wcy5PqxjBi9SMwvMqDwgY6pgG15EbOnRUA1AAdHQV3MHw%2BRdTDrdsEwpVqr29PujJjVhmZUiQJ2U2b8HUJoMVfe%2Fzhv1irVpU8Ptm%2BUWiFdcGioiCqFewhNpxBEqGL9kwgd8t5dJU4fJCsZTLxTbITNJy66OTnsGOAFoLuk4JaGNxiCpcETfTMRlnLyFaakJESxZm0yUucE67Vvwo29WVD%2BeaAn5LoLdZ%2FQYaAYw%2F4dGoad3EEdrDN&X-Amz-Signature=db8e237bbc6336f99acc174376b2ff17fcec4d53fa7ab60d2c1840255a8e8d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGH43GQ3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAF6zWZ0HDCmKrQsvgclXrl4GAatS2e81YLMlm%2FTDqQiAiASGNT0JRNwp1Hw5PQNAtJ1lCctGO9poi%2B%2FXPcUwbigzCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMZjaS42rvSp0PVbLvKtwDH7RKv6NmVeQhzbAO3h4Jv6W1ndqfgkxqT1RoHcE0TJaxfWOp6hKjHZJ%2FAM7%2Bzh2HlkgOPbp7E8AV7zb83RTqn4faMkQuQywwkkKloif7bB48HfBkCRQU33l1qhzJKUV7Xd2zBqLmGqt%2FjMPHGqdwwde%2FH2kB0KBVeM7P1s8%2B9Q5yoCxTOm2p3MlZ7nw2syZAhkIe6WyIHVHVk%2FQ%2BVb81mBmYsVob%2BeD2MVX3Jr5mTCWHp29XGa0aX89kzau6aR8aTp7hXmI9MMpE72hsbC1LO9QaHthauwX7k6S1P1o1B5wrMatY4PiMlBNmyKZx0jwEt0KMfTZPIpvc0aJRI%2FX6AlDLohAxkfM9qsLuDM6w31UfBj22QSOMNi6GeNheqQqVId4YZ3iBlLrZfEejvsDHaEcoDr%2F8zf0gTdXsz0S15N0AKQKGHPtBHG0gNp8pr9%2BGGnqKEPIniKCvslAPbhT8iaVWdK7HxgiqzNDohBbvJVFcC8t7FlW87A2mR4m3buTtsLyktzX5TZMtwH7rDY84mEkN39JGIkzhI2hHE%2Bcj1uI6pvP9wZNvpTBthpe7IoZwNSTflxQJNlNrbFAgau2eB6N3mbmZTO%2BZ%2FugoiYwxoo4Nm6wcy5PqxjBi9SMwvMqDwgY6pgG15EbOnRUA1AAdHQV3MHw%2BRdTDrdsEwpVqr29PujJjVhmZUiQJ2U2b8HUJoMVfe%2Fzhv1irVpU8Ptm%2BUWiFdcGioiCqFewhNpxBEqGL9kwgd8t5dJU4fJCsZTLxTbITNJy66OTnsGOAFoLuk4JaGNxiCpcETfTMRlnLyFaakJESxZm0yUucE67Vvwo29WVD%2BeaAn5LoLdZ%2FQYaAYw%2F4dGoad3EEdrDN&X-Amz-Signature=8625b6e12f335c0e2b13624717396b4727ab9f68e34d0fc0c31202ba89d75512&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGH43GQ3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAF6zWZ0HDCmKrQsvgclXrl4GAatS2e81YLMlm%2FTDqQiAiASGNT0JRNwp1Hw5PQNAtJ1lCctGO9poi%2B%2FXPcUwbigzCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMZjaS42rvSp0PVbLvKtwDH7RKv6NmVeQhzbAO3h4Jv6W1ndqfgkxqT1RoHcE0TJaxfWOp6hKjHZJ%2FAM7%2Bzh2HlkgOPbp7E8AV7zb83RTqn4faMkQuQywwkkKloif7bB48HfBkCRQU33l1qhzJKUV7Xd2zBqLmGqt%2FjMPHGqdwwde%2FH2kB0KBVeM7P1s8%2B9Q5yoCxTOm2p3MlZ7nw2syZAhkIe6WyIHVHVk%2FQ%2BVb81mBmYsVob%2BeD2MVX3Jr5mTCWHp29XGa0aX89kzau6aR8aTp7hXmI9MMpE72hsbC1LO9QaHthauwX7k6S1P1o1B5wrMatY4PiMlBNmyKZx0jwEt0KMfTZPIpvc0aJRI%2FX6AlDLohAxkfM9qsLuDM6w31UfBj22QSOMNi6GeNheqQqVId4YZ3iBlLrZfEejvsDHaEcoDr%2F8zf0gTdXsz0S15N0AKQKGHPtBHG0gNp8pr9%2BGGnqKEPIniKCvslAPbhT8iaVWdK7HxgiqzNDohBbvJVFcC8t7FlW87A2mR4m3buTtsLyktzX5TZMtwH7rDY84mEkN39JGIkzhI2hHE%2Bcj1uI6pvP9wZNvpTBthpe7IoZwNSTflxQJNlNrbFAgau2eB6N3mbmZTO%2BZ%2FugoiYwxoo4Nm6wcy5PqxjBi9SMwvMqDwgY6pgG15EbOnRUA1AAdHQV3MHw%2BRdTDrdsEwpVqr29PujJjVhmZUiQJ2U2b8HUJoMVfe%2Fzhv1irVpU8Ptm%2BUWiFdcGioiCqFewhNpxBEqGL9kwgd8t5dJU4fJCsZTLxTbITNJy66OTnsGOAFoLuk4JaGNxiCpcETfTMRlnLyFaakJESxZm0yUucE67Vvwo29WVD%2BeaAn5LoLdZ%2FQYaAYw%2F4dGoad3EEdrDN&X-Amz-Signature=a93cfe6c9a5775d449e4d06b9675f01594489f7584a81abdf9e6bf56ece077be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGH43GQ3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAF6zWZ0HDCmKrQsvgclXrl4GAatS2e81YLMlm%2FTDqQiAiASGNT0JRNwp1Hw5PQNAtJ1lCctGO9poi%2B%2FXPcUwbigzCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMZjaS42rvSp0PVbLvKtwDH7RKv6NmVeQhzbAO3h4Jv6W1ndqfgkxqT1RoHcE0TJaxfWOp6hKjHZJ%2FAM7%2Bzh2HlkgOPbp7E8AV7zb83RTqn4faMkQuQywwkkKloif7bB48HfBkCRQU33l1qhzJKUV7Xd2zBqLmGqt%2FjMPHGqdwwde%2FH2kB0KBVeM7P1s8%2B9Q5yoCxTOm2p3MlZ7nw2syZAhkIe6WyIHVHVk%2FQ%2BVb81mBmYsVob%2BeD2MVX3Jr5mTCWHp29XGa0aX89kzau6aR8aTp7hXmI9MMpE72hsbC1LO9QaHthauwX7k6S1P1o1B5wrMatY4PiMlBNmyKZx0jwEt0KMfTZPIpvc0aJRI%2FX6AlDLohAxkfM9qsLuDM6w31UfBj22QSOMNi6GeNheqQqVId4YZ3iBlLrZfEejvsDHaEcoDr%2F8zf0gTdXsz0S15N0AKQKGHPtBHG0gNp8pr9%2BGGnqKEPIniKCvslAPbhT8iaVWdK7HxgiqzNDohBbvJVFcC8t7FlW87A2mR4m3buTtsLyktzX5TZMtwH7rDY84mEkN39JGIkzhI2hHE%2Bcj1uI6pvP9wZNvpTBthpe7IoZwNSTflxQJNlNrbFAgau2eB6N3mbmZTO%2BZ%2FugoiYwxoo4Nm6wcy5PqxjBi9SMwvMqDwgY6pgG15EbOnRUA1AAdHQV3MHw%2BRdTDrdsEwpVqr29PujJjVhmZUiQJ2U2b8HUJoMVfe%2Fzhv1irVpU8Ptm%2BUWiFdcGioiCqFewhNpxBEqGL9kwgd8t5dJU4fJCsZTLxTbITNJy66OTnsGOAFoLuk4JaGNxiCpcETfTMRlnLyFaakJESxZm0yUucE67Vvwo29WVD%2BeaAn5LoLdZ%2FQYaAYw%2F4dGoad3EEdrDN&X-Amz-Signature=e96269c0ab13757ce3e2fcd1b889cf2a7bb9e80dfb299689ff79fd6320be8b3c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGH43GQ3%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAF6zWZ0HDCmKrQsvgclXrl4GAatS2e81YLMlm%2FTDqQiAiASGNT0JRNwp1Hw5PQNAtJ1lCctGO9poi%2B%2FXPcUwbigzCr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMZjaS42rvSp0PVbLvKtwDH7RKv6NmVeQhzbAO3h4Jv6W1ndqfgkxqT1RoHcE0TJaxfWOp6hKjHZJ%2FAM7%2Bzh2HlkgOPbp7E8AV7zb83RTqn4faMkQuQywwkkKloif7bB48HfBkCRQU33l1qhzJKUV7Xd2zBqLmGqt%2FjMPHGqdwwde%2FH2kB0KBVeM7P1s8%2B9Q5yoCxTOm2p3MlZ7nw2syZAhkIe6WyIHVHVk%2FQ%2BVb81mBmYsVob%2BeD2MVX3Jr5mTCWHp29XGa0aX89kzau6aR8aTp7hXmI9MMpE72hsbC1LO9QaHthauwX7k6S1P1o1B5wrMatY4PiMlBNmyKZx0jwEt0KMfTZPIpvc0aJRI%2FX6AlDLohAxkfM9qsLuDM6w31UfBj22QSOMNi6GeNheqQqVId4YZ3iBlLrZfEejvsDHaEcoDr%2F8zf0gTdXsz0S15N0AKQKGHPtBHG0gNp8pr9%2BGGnqKEPIniKCvslAPbhT8iaVWdK7HxgiqzNDohBbvJVFcC8t7FlW87A2mR4m3buTtsLyktzX5TZMtwH7rDY84mEkN39JGIkzhI2hHE%2Bcj1uI6pvP9wZNvpTBthpe7IoZwNSTflxQJNlNrbFAgau2eB6N3mbmZTO%2BZ%2FugoiYwxoo4Nm6wcy5PqxjBi9SMwvMqDwgY6pgG15EbOnRUA1AAdHQV3MHw%2BRdTDrdsEwpVqr29PujJjVhmZUiQJ2U2b8HUJoMVfe%2Fzhv1irVpU8Ptm%2BUWiFdcGioiCqFewhNpxBEqGL9kwgd8t5dJU4fJCsZTLxTbITNJy66OTnsGOAFoLuk4JaGNxiCpcETfTMRlnLyFaakJESxZm0yUucE67Vvwo29WVD%2BeaAn5LoLdZ%2FQYaAYw%2F4dGoad3EEdrDN&X-Amz-Signature=43e50579047d538956e55350b2d1b80016ccfbf30e52ed1ced2171e585bdd36b&X-Amz-SignedHeaders=host&x-id=GetObject)
