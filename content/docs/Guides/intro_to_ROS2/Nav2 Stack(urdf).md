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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKTOXMS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdbGgKdBW8ASJ6QciCw0ZHwBidujDT8EKrql3Lw%2FDMSgIgTHvE8RP7spgA8bfC5sltF8noFY4pCIzbguPCmcbXnZoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEXdPMnPOKymXIEmjSrcA4gNSQlr%2FIcQfpjIQaxDK%2BH%2BGlkSvwojtF%2BJ3qjJd67v%2BTZov3izpFdEmJAvgrBabVEgHjkrDhSG%2BfL1GfSUC7cIRiaOCXlvBQT5OvgZKEk%2F1oudy101Rvzp0JfzCUOwkgP4ctzGI%2FfsQJ%2BlmUqR9ivgjpaRe4ytnbmFGn48M7BvfIvCr17u%2BWD9wTCNk%2FExdBENgQvbFYfCxjj%2F8%2FW540re1igAU0cxgS4d3KPys%2Fqw2Y9av3izXXFEmkCzH8zpVXbmnMmPOTWPtd0Zm4lnS4NYOLPCrTdrZmg%2F14azcID5fUQwUhs8RUpyKtaKfWF8S9jFRwR4syJqxnI9C%2BG6G%2BPaQ0RrINneUckTVZX1OgoZREZR8NTVxB4tB3wi%2Fe47wSrAbeDgN4wiHWMal1V%2BLpoAu0Poev%2B0McXineaNltX5%2FO44A9yW3hvhJbWwly30Xtk7HBy%2BEbkB0XUu6EolV3NgwqsKIjcrsTxlsQLWeHvX0ClBHqcTdeyeM%2BmfiUIuDeLgxxDB9cvHTfBnGz1XvtzT0S5oaCpQ87DzQUCJCvO2jC7XFBoGtnGXcefaqsCC1HdDWv12PTqUbepHBUV13HQd%2FlSVyHavqGV2C5Fc%2BGnAIdecQ7eE13Me8kH6MOvIvcAGOqUBmXCJ9zygdQUS6SaW%2BmyWWvyQfH7woX54dfVnO%2FhMvwZOeEDmu41z5naXYhpntfjKaUVHE8nCbslnqhKgmQ5sdULbB5L0Q920KZpRZH4WYtaAPat0XJnFah2Brvwg7KCE1FSJ9QGlZfJ%2BrOg%2BVAru5fPz80QchUxduYzWX45Q%2BYhdhRt9nKsvkspzl6452nLnDqRo6aenN9lqcd5ITl5r37cxX%2BvT&X-Amz-Signature=e884a8342bf206c62b1211b76b212f17ce3e8cfffc02c10333d28941d199e006&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKTOXMS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdbGgKdBW8ASJ6QciCw0ZHwBidujDT8EKrql3Lw%2FDMSgIgTHvE8RP7spgA8bfC5sltF8noFY4pCIzbguPCmcbXnZoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEXdPMnPOKymXIEmjSrcA4gNSQlr%2FIcQfpjIQaxDK%2BH%2BGlkSvwojtF%2BJ3qjJd67v%2BTZov3izpFdEmJAvgrBabVEgHjkrDhSG%2BfL1GfSUC7cIRiaOCXlvBQT5OvgZKEk%2F1oudy101Rvzp0JfzCUOwkgP4ctzGI%2FfsQJ%2BlmUqR9ivgjpaRe4ytnbmFGn48M7BvfIvCr17u%2BWD9wTCNk%2FExdBENgQvbFYfCxjj%2F8%2FW540re1igAU0cxgS4d3KPys%2Fqw2Y9av3izXXFEmkCzH8zpVXbmnMmPOTWPtd0Zm4lnS4NYOLPCrTdrZmg%2F14azcID5fUQwUhs8RUpyKtaKfWF8S9jFRwR4syJqxnI9C%2BG6G%2BPaQ0RrINneUckTVZX1OgoZREZR8NTVxB4tB3wi%2Fe47wSrAbeDgN4wiHWMal1V%2BLpoAu0Poev%2B0McXineaNltX5%2FO44A9yW3hvhJbWwly30Xtk7HBy%2BEbkB0XUu6EolV3NgwqsKIjcrsTxlsQLWeHvX0ClBHqcTdeyeM%2BmfiUIuDeLgxxDB9cvHTfBnGz1XvtzT0S5oaCpQ87DzQUCJCvO2jC7XFBoGtnGXcefaqsCC1HdDWv12PTqUbepHBUV13HQd%2FlSVyHavqGV2C5Fc%2BGnAIdecQ7eE13Me8kH6MOvIvcAGOqUBmXCJ9zygdQUS6SaW%2BmyWWvyQfH7woX54dfVnO%2FhMvwZOeEDmu41z5naXYhpntfjKaUVHE8nCbslnqhKgmQ5sdULbB5L0Q920KZpRZH4WYtaAPat0XJnFah2Brvwg7KCE1FSJ9QGlZfJ%2BrOg%2BVAru5fPz80QchUxduYzWX45Q%2BYhdhRt9nKsvkspzl6452nLnDqRo6aenN9lqcd5ITl5r37cxX%2BvT&X-Amz-Signature=1cfb4267a79ad4a9805e132d78d486c86bd6d714181f29d7e2398f37935d94c4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKTOXMS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdbGgKdBW8ASJ6QciCw0ZHwBidujDT8EKrql3Lw%2FDMSgIgTHvE8RP7spgA8bfC5sltF8noFY4pCIzbguPCmcbXnZoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEXdPMnPOKymXIEmjSrcA4gNSQlr%2FIcQfpjIQaxDK%2BH%2BGlkSvwojtF%2BJ3qjJd67v%2BTZov3izpFdEmJAvgrBabVEgHjkrDhSG%2BfL1GfSUC7cIRiaOCXlvBQT5OvgZKEk%2F1oudy101Rvzp0JfzCUOwkgP4ctzGI%2FfsQJ%2BlmUqR9ivgjpaRe4ytnbmFGn48M7BvfIvCr17u%2BWD9wTCNk%2FExdBENgQvbFYfCxjj%2F8%2FW540re1igAU0cxgS4d3KPys%2Fqw2Y9av3izXXFEmkCzH8zpVXbmnMmPOTWPtd0Zm4lnS4NYOLPCrTdrZmg%2F14azcID5fUQwUhs8RUpyKtaKfWF8S9jFRwR4syJqxnI9C%2BG6G%2BPaQ0RrINneUckTVZX1OgoZREZR8NTVxB4tB3wi%2Fe47wSrAbeDgN4wiHWMal1V%2BLpoAu0Poev%2B0McXineaNltX5%2FO44A9yW3hvhJbWwly30Xtk7HBy%2BEbkB0XUu6EolV3NgwqsKIjcrsTxlsQLWeHvX0ClBHqcTdeyeM%2BmfiUIuDeLgxxDB9cvHTfBnGz1XvtzT0S5oaCpQ87DzQUCJCvO2jC7XFBoGtnGXcefaqsCC1HdDWv12PTqUbepHBUV13HQd%2FlSVyHavqGV2C5Fc%2BGnAIdecQ7eE13Me8kH6MOvIvcAGOqUBmXCJ9zygdQUS6SaW%2BmyWWvyQfH7woX54dfVnO%2FhMvwZOeEDmu41z5naXYhpntfjKaUVHE8nCbslnqhKgmQ5sdULbB5L0Q920KZpRZH4WYtaAPat0XJnFah2Brvwg7KCE1FSJ9QGlZfJ%2BrOg%2BVAru5fPz80QchUxduYzWX45Q%2BYhdhRt9nKsvkspzl6452nLnDqRo6aenN9lqcd5ITl5r37cxX%2BvT&X-Amz-Signature=2290e63363db92f8b42899f72692a11f5a3df98a1996232a23d60349ce43748d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKTOXMS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdbGgKdBW8ASJ6QciCw0ZHwBidujDT8EKrql3Lw%2FDMSgIgTHvE8RP7spgA8bfC5sltF8noFY4pCIzbguPCmcbXnZoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEXdPMnPOKymXIEmjSrcA4gNSQlr%2FIcQfpjIQaxDK%2BH%2BGlkSvwojtF%2BJ3qjJd67v%2BTZov3izpFdEmJAvgrBabVEgHjkrDhSG%2BfL1GfSUC7cIRiaOCXlvBQT5OvgZKEk%2F1oudy101Rvzp0JfzCUOwkgP4ctzGI%2FfsQJ%2BlmUqR9ivgjpaRe4ytnbmFGn48M7BvfIvCr17u%2BWD9wTCNk%2FExdBENgQvbFYfCxjj%2F8%2FW540re1igAU0cxgS4d3KPys%2Fqw2Y9av3izXXFEmkCzH8zpVXbmnMmPOTWPtd0Zm4lnS4NYOLPCrTdrZmg%2F14azcID5fUQwUhs8RUpyKtaKfWF8S9jFRwR4syJqxnI9C%2BG6G%2BPaQ0RrINneUckTVZX1OgoZREZR8NTVxB4tB3wi%2Fe47wSrAbeDgN4wiHWMal1V%2BLpoAu0Poev%2B0McXineaNltX5%2FO44A9yW3hvhJbWwly30Xtk7HBy%2BEbkB0XUu6EolV3NgwqsKIjcrsTxlsQLWeHvX0ClBHqcTdeyeM%2BmfiUIuDeLgxxDB9cvHTfBnGz1XvtzT0S5oaCpQ87DzQUCJCvO2jC7XFBoGtnGXcefaqsCC1HdDWv12PTqUbepHBUV13HQd%2FlSVyHavqGV2C5Fc%2BGnAIdecQ7eE13Me8kH6MOvIvcAGOqUBmXCJ9zygdQUS6SaW%2BmyWWvyQfH7woX54dfVnO%2FhMvwZOeEDmu41z5naXYhpntfjKaUVHE8nCbslnqhKgmQ5sdULbB5L0Q920KZpRZH4WYtaAPat0XJnFah2Brvwg7KCE1FSJ9QGlZfJ%2BrOg%2BVAru5fPz80QchUxduYzWX45Q%2BYhdhRt9nKsvkspzl6452nLnDqRo6aenN9lqcd5ITl5r37cxX%2BvT&X-Amz-Signature=5208f00e11ab2fe6c9ed5dcaca650ab2a7c5c757606d45eaf35cc69dfb766e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKTOXMS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdbGgKdBW8ASJ6QciCw0ZHwBidujDT8EKrql3Lw%2FDMSgIgTHvE8RP7spgA8bfC5sltF8noFY4pCIzbguPCmcbXnZoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEXdPMnPOKymXIEmjSrcA4gNSQlr%2FIcQfpjIQaxDK%2BH%2BGlkSvwojtF%2BJ3qjJd67v%2BTZov3izpFdEmJAvgrBabVEgHjkrDhSG%2BfL1GfSUC7cIRiaOCXlvBQT5OvgZKEk%2F1oudy101Rvzp0JfzCUOwkgP4ctzGI%2FfsQJ%2BlmUqR9ivgjpaRe4ytnbmFGn48M7BvfIvCr17u%2BWD9wTCNk%2FExdBENgQvbFYfCxjj%2F8%2FW540re1igAU0cxgS4d3KPys%2Fqw2Y9av3izXXFEmkCzH8zpVXbmnMmPOTWPtd0Zm4lnS4NYOLPCrTdrZmg%2F14azcID5fUQwUhs8RUpyKtaKfWF8S9jFRwR4syJqxnI9C%2BG6G%2BPaQ0RrINneUckTVZX1OgoZREZR8NTVxB4tB3wi%2Fe47wSrAbeDgN4wiHWMal1V%2BLpoAu0Poev%2B0McXineaNltX5%2FO44A9yW3hvhJbWwly30Xtk7HBy%2BEbkB0XUu6EolV3NgwqsKIjcrsTxlsQLWeHvX0ClBHqcTdeyeM%2BmfiUIuDeLgxxDB9cvHTfBnGz1XvtzT0S5oaCpQ87DzQUCJCvO2jC7XFBoGtnGXcefaqsCC1HdDWv12PTqUbepHBUV13HQd%2FlSVyHavqGV2C5Fc%2BGnAIdecQ7eE13Me8kH6MOvIvcAGOqUBmXCJ9zygdQUS6SaW%2BmyWWvyQfH7woX54dfVnO%2FhMvwZOeEDmu41z5naXYhpntfjKaUVHE8nCbslnqhKgmQ5sdULbB5L0Q920KZpRZH4WYtaAPat0XJnFah2Brvwg7KCE1FSJ9QGlZfJ%2BrOg%2BVAru5fPz80QchUxduYzWX45Q%2BYhdhRt9nKsvkspzl6452nLnDqRo6aenN9lqcd5ITl5r37cxX%2BvT&X-Amz-Signature=82f7873968d0b9bbbe0d73216a82c1e8162880e3042c8f0cc953b83e033da4c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SKTOXMS%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdbGgKdBW8ASJ6QciCw0ZHwBidujDT8EKrql3Lw%2FDMSgIgTHvE8RP7spgA8bfC5sltF8noFY4pCIzbguPCmcbXnZoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEXdPMnPOKymXIEmjSrcA4gNSQlr%2FIcQfpjIQaxDK%2BH%2BGlkSvwojtF%2BJ3qjJd67v%2BTZov3izpFdEmJAvgrBabVEgHjkrDhSG%2BfL1GfSUC7cIRiaOCXlvBQT5OvgZKEk%2F1oudy101Rvzp0JfzCUOwkgP4ctzGI%2FfsQJ%2BlmUqR9ivgjpaRe4ytnbmFGn48M7BvfIvCr17u%2BWD9wTCNk%2FExdBENgQvbFYfCxjj%2F8%2FW540re1igAU0cxgS4d3KPys%2Fqw2Y9av3izXXFEmkCzH8zpVXbmnMmPOTWPtd0Zm4lnS4NYOLPCrTdrZmg%2F14azcID5fUQwUhs8RUpyKtaKfWF8S9jFRwR4syJqxnI9C%2BG6G%2BPaQ0RrINneUckTVZX1OgoZREZR8NTVxB4tB3wi%2Fe47wSrAbeDgN4wiHWMal1V%2BLpoAu0Poev%2B0McXineaNltX5%2FO44A9yW3hvhJbWwly30Xtk7HBy%2BEbkB0XUu6EolV3NgwqsKIjcrsTxlsQLWeHvX0ClBHqcTdeyeM%2BmfiUIuDeLgxxDB9cvHTfBnGz1XvtzT0S5oaCpQ87DzQUCJCvO2jC7XFBoGtnGXcefaqsCC1HdDWv12PTqUbepHBUV13HQd%2FlSVyHavqGV2C5Fc%2BGnAIdecQ7eE13Me8kH6MOvIvcAGOqUBmXCJ9zygdQUS6SaW%2BmyWWvyQfH7woX54dfVnO%2FhMvwZOeEDmu41z5naXYhpntfjKaUVHE8nCbslnqhKgmQ5sdULbB5L0Q920KZpRZH4WYtaAPat0XJnFah2Brvwg7KCE1FSJ9QGlZfJ%2BrOg%2BVAru5fPz80QchUxduYzWX45Q%2BYhdhRt9nKsvkspzl6452nLnDqRo6aenN9lqcd5ITl5r37cxX%2BvT&X-Amz-Signature=0892a637f955ec861a6023eaa3583b11ffda8a20614e5dabcf5f4e3e21ad2f62&X-Amz-SignedHeaders=host&x-id=GetObject)
