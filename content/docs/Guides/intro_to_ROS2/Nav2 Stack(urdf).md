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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U67FDPJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BDDrNdSS0wUhg13owQM3J13J3hcCqXXMmkikkjQuexwIgfn0rxkKbLSeHs3hV6DEIUq19CHcIQzO3yKsqQQW9wlkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLS9EgxNZlXBDwNZFircA2zXs0ovRnrNtbRwk3qlkC2cRkhcNshb6U%2FyS593KYs9y2xo9jxZLW66URNCk7IKIa%2F8ldk2yZOjERwXX5iJup5E3RT7VkTFRq2vO09Dpz0CZ5Hun%2FMiAZgAWKfKsK5a%2ByGKHnXn0Bc%2F%2FeBvGvYWsfV7kCcobspVCPnMeXMuDr41QZ3ELJRQ9IGL1qd9y1FO%2FQbdVPykA37%2BUO5qUehRsxuyMkU5pU26iGfexBwhgLq%2F5ioqz0IEZl8xvShYabLnQ39eyCNK5zHFsjgAACNFws1I15QksF1C1Vud0iPr32lNnncmnS18PLWvdoxDrHEY7IIVt4cNgJfmHjTywDzrmuHhRSt9YtsEMOry1z05%2BGxNCRtBkAXkf763Lz%2BpGDxk3u71xVGrzu%2FjZltY3fCahlefUGbkWEh9txAK63rpT%2FoW09LfEXR2PWDy2bqj7r2%2FxbfEXJ1J36g2x7oxzSKyBe8Zt59N2iWiZn9%2BYREJyiR9jihCokoBWfEtcser0Xg6PmnlEXRleTKsebP7PbQCXX9dCtiXe4C46vR%2BVON66nvSvIO869KEUNk7fSz3PDnyOZF8FBSqksjLVVxySwZAwy49CGSd%2FeAjGh%2Fv7s%2B4jtv8dEtk8ikJ%2Fx%2FKVRCQMKTg8cAGOqUBjAPuzRsHnQTwY%2BWetarcscIlzgvMY7YRkmFYlO5TsdSXyEKX5O%2BX7jkkOMD1wnrysGJvG791UvGFo8ITdItRCp3xIyztceeBUbXElVVKwI6f0qXbsqsufHnIgObtEV16l%2BP40oEojO2KRSBwG2%2Flr7SQiHiBEoWT6aSUh8jBeDcw0paD6rvz7cUBYqgbgGk4xOhG%2FKNb34W2gHJS1XUt%2BUFN%2FYl%2B&X-Amz-Signature=645e170946d9c3e44b3da18ba3be9c4e98f623422ad6be250d8368010868dec5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U67FDPJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BDDrNdSS0wUhg13owQM3J13J3hcCqXXMmkikkjQuexwIgfn0rxkKbLSeHs3hV6DEIUq19CHcIQzO3yKsqQQW9wlkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLS9EgxNZlXBDwNZFircA2zXs0ovRnrNtbRwk3qlkC2cRkhcNshb6U%2FyS593KYs9y2xo9jxZLW66URNCk7IKIa%2F8ldk2yZOjERwXX5iJup5E3RT7VkTFRq2vO09Dpz0CZ5Hun%2FMiAZgAWKfKsK5a%2ByGKHnXn0Bc%2F%2FeBvGvYWsfV7kCcobspVCPnMeXMuDr41QZ3ELJRQ9IGL1qd9y1FO%2FQbdVPykA37%2BUO5qUehRsxuyMkU5pU26iGfexBwhgLq%2F5ioqz0IEZl8xvShYabLnQ39eyCNK5zHFsjgAACNFws1I15QksF1C1Vud0iPr32lNnncmnS18PLWvdoxDrHEY7IIVt4cNgJfmHjTywDzrmuHhRSt9YtsEMOry1z05%2BGxNCRtBkAXkf763Lz%2BpGDxk3u71xVGrzu%2FjZltY3fCahlefUGbkWEh9txAK63rpT%2FoW09LfEXR2PWDy2bqj7r2%2FxbfEXJ1J36g2x7oxzSKyBe8Zt59N2iWiZn9%2BYREJyiR9jihCokoBWfEtcser0Xg6PmnlEXRleTKsebP7PbQCXX9dCtiXe4C46vR%2BVON66nvSvIO869KEUNk7fSz3PDnyOZF8FBSqksjLVVxySwZAwy49CGSd%2FeAjGh%2Fv7s%2B4jtv8dEtk8ikJ%2Fx%2FKVRCQMKTg8cAGOqUBjAPuzRsHnQTwY%2BWetarcscIlzgvMY7YRkmFYlO5TsdSXyEKX5O%2BX7jkkOMD1wnrysGJvG791UvGFo8ITdItRCp3xIyztceeBUbXElVVKwI6f0qXbsqsufHnIgObtEV16l%2BP40oEojO2KRSBwG2%2Flr7SQiHiBEoWT6aSUh8jBeDcw0paD6rvz7cUBYqgbgGk4xOhG%2FKNb34W2gHJS1XUt%2BUFN%2FYl%2B&X-Amz-Signature=30b78b34f650450d1b0fbfeb290088efc1877c7c0bd717a0d40eea0492a3353f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U67FDPJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BDDrNdSS0wUhg13owQM3J13J3hcCqXXMmkikkjQuexwIgfn0rxkKbLSeHs3hV6DEIUq19CHcIQzO3yKsqQQW9wlkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLS9EgxNZlXBDwNZFircA2zXs0ovRnrNtbRwk3qlkC2cRkhcNshb6U%2FyS593KYs9y2xo9jxZLW66URNCk7IKIa%2F8ldk2yZOjERwXX5iJup5E3RT7VkTFRq2vO09Dpz0CZ5Hun%2FMiAZgAWKfKsK5a%2ByGKHnXn0Bc%2F%2FeBvGvYWsfV7kCcobspVCPnMeXMuDr41QZ3ELJRQ9IGL1qd9y1FO%2FQbdVPykA37%2BUO5qUehRsxuyMkU5pU26iGfexBwhgLq%2F5ioqz0IEZl8xvShYabLnQ39eyCNK5zHFsjgAACNFws1I15QksF1C1Vud0iPr32lNnncmnS18PLWvdoxDrHEY7IIVt4cNgJfmHjTywDzrmuHhRSt9YtsEMOry1z05%2BGxNCRtBkAXkf763Lz%2BpGDxk3u71xVGrzu%2FjZltY3fCahlefUGbkWEh9txAK63rpT%2FoW09LfEXR2PWDy2bqj7r2%2FxbfEXJ1J36g2x7oxzSKyBe8Zt59N2iWiZn9%2BYREJyiR9jihCokoBWfEtcser0Xg6PmnlEXRleTKsebP7PbQCXX9dCtiXe4C46vR%2BVON66nvSvIO869KEUNk7fSz3PDnyOZF8FBSqksjLVVxySwZAwy49CGSd%2FeAjGh%2Fv7s%2B4jtv8dEtk8ikJ%2Fx%2FKVRCQMKTg8cAGOqUBjAPuzRsHnQTwY%2BWetarcscIlzgvMY7YRkmFYlO5TsdSXyEKX5O%2BX7jkkOMD1wnrysGJvG791UvGFo8ITdItRCp3xIyztceeBUbXElVVKwI6f0qXbsqsufHnIgObtEV16l%2BP40oEojO2KRSBwG2%2Flr7SQiHiBEoWT6aSUh8jBeDcw0paD6rvz7cUBYqgbgGk4xOhG%2FKNb34W2gHJS1XUt%2BUFN%2FYl%2B&X-Amz-Signature=5608b5a16b278750f40b40a519a29ad2301d6729a4a3fba69f4914402bb96b31&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U67FDPJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BDDrNdSS0wUhg13owQM3J13J3hcCqXXMmkikkjQuexwIgfn0rxkKbLSeHs3hV6DEIUq19CHcIQzO3yKsqQQW9wlkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLS9EgxNZlXBDwNZFircA2zXs0ovRnrNtbRwk3qlkC2cRkhcNshb6U%2FyS593KYs9y2xo9jxZLW66URNCk7IKIa%2F8ldk2yZOjERwXX5iJup5E3RT7VkTFRq2vO09Dpz0CZ5Hun%2FMiAZgAWKfKsK5a%2ByGKHnXn0Bc%2F%2FeBvGvYWsfV7kCcobspVCPnMeXMuDr41QZ3ELJRQ9IGL1qd9y1FO%2FQbdVPykA37%2BUO5qUehRsxuyMkU5pU26iGfexBwhgLq%2F5ioqz0IEZl8xvShYabLnQ39eyCNK5zHFsjgAACNFws1I15QksF1C1Vud0iPr32lNnncmnS18PLWvdoxDrHEY7IIVt4cNgJfmHjTywDzrmuHhRSt9YtsEMOry1z05%2BGxNCRtBkAXkf763Lz%2BpGDxk3u71xVGrzu%2FjZltY3fCahlefUGbkWEh9txAK63rpT%2FoW09LfEXR2PWDy2bqj7r2%2FxbfEXJ1J36g2x7oxzSKyBe8Zt59N2iWiZn9%2BYREJyiR9jihCokoBWfEtcser0Xg6PmnlEXRleTKsebP7PbQCXX9dCtiXe4C46vR%2BVON66nvSvIO869KEUNk7fSz3PDnyOZF8FBSqksjLVVxySwZAwy49CGSd%2FeAjGh%2Fv7s%2B4jtv8dEtk8ikJ%2Fx%2FKVRCQMKTg8cAGOqUBjAPuzRsHnQTwY%2BWetarcscIlzgvMY7YRkmFYlO5TsdSXyEKX5O%2BX7jkkOMD1wnrysGJvG791UvGFo8ITdItRCp3xIyztceeBUbXElVVKwI6f0qXbsqsufHnIgObtEV16l%2BP40oEojO2KRSBwG2%2Flr7SQiHiBEoWT6aSUh8jBeDcw0paD6rvz7cUBYqgbgGk4xOhG%2FKNb34W2gHJS1XUt%2BUFN%2FYl%2B&X-Amz-Signature=a97715392e8428590564043ca06289bcae25ee49813827e0181c7ebe73a92471&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U67FDPJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BDDrNdSS0wUhg13owQM3J13J3hcCqXXMmkikkjQuexwIgfn0rxkKbLSeHs3hV6DEIUq19CHcIQzO3yKsqQQW9wlkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLS9EgxNZlXBDwNZFircA2zXs0ovRnrNtbRwk3qlkC2cRkhcNshb6U%2FyS593KYs9y2xo9jxZLW66URNCk7IKIa%2F8ldk2yZOjERwXX5iJup5E3RT7VkTFRq2vO09Dpz0CZ5Hun%2FMiAZgAWKfKsK5a%2ByGKHnXn0Bc%2F%2FeBvGvYWsfV7kCcobspVCPnMeXMuDr41QZ3ELJRQ9IGL1qd9y1FO%2FQbdVPykA37%2BUO5qUehRsxuyMkU5pU26iGfexBwhgLq%2F5ioqz0IEZl8xvShYabLnQ39eyCNK5zHFsjgAACNFws1I15QksF1C1Vud0iPr32lNnncmnS18PLWvdoxDrHEY7IIVt4cNgJfmHjTywDzrmuHhRSt9YtsEMOry1z05%2BGxNCRtBkAXkf763Lz%2BpGDxk3u71xVGrzu%2FjZltY3fCahlefUGbkWEh9txAK63rpT%2FoW09LfEXR2PWDy2bqj7r2%2FxbfEXJ1J36g2x7oxzSKyBe8Zt59N2iWiZn9%2BYREJyiR9jihCokoBWfEtcser0Xg6PmnlEXRleTKsebP7PbQCXX9dCtiXe4C46vR%2BVON66nvSvIO869KEUNk7fSz3PDnyOZF8FBSqksjLVVxySwZAwy49CGSd%2FeAjGh%2Fv7s%2B4jtv8dEtk8ikJ%2Fx%2FKVRCQMKTg8cAGOqUBjAPuzRsHnQTwY%2BWetarcscIlzgvMY7YRkmFYlO5TsdSXyEKX5O%2BX7jkkOMD1wnrysGJvG791UvGFo8ITdItRCp3xIyztceeBUbXElVVKwI6f0qXbsqsufHnIgObtEV16l%2BP40oEojO2KRSBwG2%2Flr7SQiHiBEoWT6aSUh8jBeDcw0paD6rvz7cUBYqgbgGk4xOhG%2FKNb34W2gHJS1XUt%2BUFN%2FYl%2B&X-Amz-Signature=2cd2707973224f715b416b1f83b77a76fc651c41f82513a5f888e14624fe36b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U67FDPJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BDDrNdSS0wUhg13owQM3J13J3hcCqXXMmkikkjQuexwIgfn0rxkKbLSeHs3hV6DEIUq19CHcIQzO3yKsqQQW9wlkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDLS9EgxNZlXBDwNZFircA2zXs0ovRnrNtbRwk3qlkC2cRkhcNshb6U%2FyS593KYs9y2xo9jxZLW66URNCk7IKIa%2F8ldk2yZOjERwXX5iJup5E3RT7VkTFRq2vO09Dpz0CZ5Hun%2FMiAZgAWKfKsK5a%2ByGKHnXn0Bc%2F%2FeBvGvYWsfV7kCcobspVCPnMeXMuDr41QZ3ELJRQ9IGL1qd9y1FO%2FQbdVPykA37%2BUO5qUehRsxuyMkU5pU26iGfexBwhgLq%2F5ioqz0IEZl8xvShYabLnQ39eyCNK5zHFsjgAACNFws1I15QksF1C1Vud0iPr32lNnncmnS18PLWvdoxDrHEY7IIVt4cNgJfmHjTywDzrmuHhRSt9YtsEMOry1z05%2BGxNCRtBkAXkf763Lz%2BpGDxk3u71xVGrzu%2FjZltY3fCahlefUGbkWEh9txAK63rpT%2FoW09LfEXR2PWDy2bqj7r2%2FxbfEXJ1J36g2x7oxzSKyBe8Zt59N2iWiZn9%2BYREJyiR9jihCokoBWfEtcser0Xg6PmnlEXRleTKsebP7PbQCXX9dCtiXe4C46vR%2BVON66nvSvIO869KEUNk7fSz3PDnyOZF8FBSqksjLVVxySwZAwy49CGSd%2FeAjGh%2Fv7s%2B4jtv8dEtk8ikJ%2Fx%2FKVRCQMKTg8cAGOqUBjAPuzRsHnQTwY%2BWetarcscIlzgvMY7YRkmFYlO5TsdSXyEKX5O%2BX7jkkOMD1wnrysGJvG791UvGFo8ITdItRCp3xIyztceeBUbXElVVKwI6f0qXbsqsufHnIgObtEV16l%2BP40oEojO2KRSBwG2%2Flr7SQiHiBEoWT6aSUh8jBeDcw0paD6rvz7cUBYqgbgGk4xOhG%2FKNb34W2gHJS1XUt%2BUFN%2FYl%2B&X-Amz-Signature=dd1fe874dc88099c11eb4e9592b713ec5eca00edf3781025a3cc85c9b33a9e93&X-Amz-SignedHeaders=host&x-id=GetObject)
