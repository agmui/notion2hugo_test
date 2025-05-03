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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATH3QRE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIBBOfXfBE%2BeH2ff03yIdAbScGsw%2BaDs%2Fedx2P9K3pilTAiEAlWTIn2i8ctNuci0%2FwUWVx1khFcIvu%2FtFRUUBPmebYzcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZbr5tyodzG8Vt11CrcA4ZvM9JZv9GoXpxk1cQg9DfLOss0Ip0KIsFi%2FFykj01PPHrNjK3eb1B4BdZotBXxaCKAw909poS8hkrA0329NeTKVlBMty3tOMCHirLyEyfKkoEaWpmGhtIhQ7BAql0hfU1Uvi7SbSSoOqZJwxq%2FhJnc5hWaRCcfD%2BchtWeLwh%2B7u9t1Z9JaU3v3kwiEuOJOYV8zD5sIfKJhdaB3kgqAGA9DRqUo8jgphDmkiQN8Es8dmTf7x01pdeTCZxkNeSIpZN5j5f2JCrHQ6yANcV9aRhYDIBfKFLxXTVDpQEcidi6keO%2Fm049cWW%2BujZL6HXrfFKRBFcHv3S%2BnwTl7V%2BH0YZowlbIu6RWvJD172C50F6rB97C6nGYWkUxADsoNHa%2Ftu2AOZg0IHCSL%2Bcp6WFD%2FF7UKL49XOLTZJhBpmS3rj8w%2FtJu%2Buf1KB3wbwrPg38yc8cpb1TVd%2BtSI54ioK3KkXlwg3%2BBRGfBsMizMDgd1mk9JBs%2Bw7iD9jdI73U4G0j3oySI4UwJjkOCbFUd4XqfJDseKMdCELr5lN005EmLtioHNGWOkcWZ%2FqCQY3a44%2BSq9bPMXiDd%2FnKZtdn244df2V%2Fv2M0J%2FmcwkRog3kjFtvx3SabF8xw4CImg0eUC4MM7d1sAGOqUBa3%2B1XPmiB47t0apRMATwB715QWr%2FqdGxy8XyxJpXfShcaN3F%2Ba%2BWDoV9It5VuYPoRvf3LZrlIHPPqXcg4lwljM5N6TNPjGPM1GMAczrI9MmDOxIt6F3%2BmiMaXxu3nG8H%2BJYhOFuvW1srcHskDpZuxgv4FeWoL35SZ6WE53pyepTu9k12IeFrr%2B7BrxPZHJBNOHyyT2mdYVxe1x5Y3EmwWJF4JpAB&X-Amz-Signature=9e2fa95f84fc14411624cc29d50a2589028990ff329218093a6cb219fa8eb089&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATH3QRE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIBBOfXfBE%2BeH2ff03yIdAbScGsw%2BaDs%2Fedx2P9K3pilTAiEAlWTIn2i8ctNuci0%2FwUWVx1khFcIvu%2FtFRUUBPmebYzcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZbr5tyodzG8Vt11CrcA4ZvM9JZv9GoXpxk1cQg9DfLOss0Ip0KIsFi%2FFykj01PPHrNjK3eb1B4BdZotBXxaCKAw909poS8hkrA0329NeTKVlBMty3tOMCHirLyEyfKkoEaWpmGhtIhQ7BAql0hfU1Uvi7SbSSoOqZJwxq%2FhJnc5hWaRCcfD%2BchtWeLwh%2B7u9t1Z9JaU3v3kwiEuOJOYV8zD5sIfKJhdaB3kgqAGA9DRqUo8jgphDmkiQN8Es8dmTf7x01pdeTCZxkNeSIpZN5j5f2JCrHQ6yANcV9aRhYDIBfKFLxXTVDpQEcidi6keO%2Fm049cWW%2BujZL6HXrfFKRBFcHv3S%2BnwTl7V%2BH0YZowlbIu6RWvJD172C50F6rB97C6nGYWkUxADsoNHa%2Ftu2AOZg0IHCSL%2Bcp6WFD%2FF7UKL49XOLTZJhBpmS3rj8w%2FtJu%2Buf1KB3wbwrPg38yc8cpb1TVd%2BtSI54ioK3KkXlwg3%2BBRGfBsMizMDgd1mk9JBs%2Bw7iD9jdI73U4G0j3oySI4UwJjkOCbFUd4XqfJDseKMdCELr5lN005EmLtioHNGWOkcWZ%2FqCQY3a44%2BSq9bPMXiDd%2FnKZtdn244df2V%2Fv2M0J%2FmcwkRog3kjFtvx3SabF8xw4CImg0eUC4MM7d1sAGOqUBa3%2B1XPmiB47t0apRMATwB715QWr%2FqdGxy8XyxJpXfShcaN3F%2Ba%2BWDoV9It5VuYPoRvf3LZrlIHPPqXcg4lwljM5N6TNPjGPM1GMAczrI9MmDOxIt6F3%2BmiMaXxu3nG8H%2BJYhOFuvW1srcHskDpZuxgv4FeWoL35SZ6WE53pyepTu9k12IeFrr%2B7BrxPZHJBNOHyyT2mdYVxe1x5Y3EmwWJF4JpAB&X-Amz-Signature=628939b09acb482d6335dc4b897449db2488b95499aaa2777a0685853aff9434&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATH3QRE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIBBOfXfBE%2BeH2ff03yIdAbScGsw%2BaDs%2Fedx2P9K3pilTAiEAlWTIn2i8ctNuci0%2FwUWVx1khFcIvu%2FtFRUUBPmebYzcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZbr5tyodzG8Vt11CrcA4ZvM9JZv9GoXpxk1cQg9DfLOss0Ip0KIsFi%2FFykj01PPHrNjK3eb1B4BdZotBXxaCKAw909poS8hkrA0329NeTKVlBMty3tOMCHirLyEyfKkoEaWpmGhtIhQ7BAql0hfU1Uvi7SbSSoOqZJwxq%2FhJnc5hWaRCcfD%2BchtWeLwh%2B7u9t1Z9JaU3v3kwiEuOJOYV8zD5sIfKJhdaB3kgqAGA9DRqUo8jgphDmkiQN8Es8dmTf7x01pdeTCZxkNeSIpZN5j5f2JCrHQ6yANcV9aRhYDIBfKFLxXTVDpQEcidi6keO%2Fm049cWW%2BujZL6HXrfFKRBFcHv3S%2BnwTl7V%2BH0YZowlbIu6RWvJD172C50F6rB97C6nGYWkUxADsoNHa%2Ftu2AOZg0IHCSL%2Bcp6WFD%2FF7UKL49XOLTZJhBpmS3rj8w%2FtJu%2Buf1KB3wbwrPg38yc8cpb1TVd%2BtSI54ioK3KkXlwg3%2BBRGfBsMizMDgd1mk9JBs%2Bw7iD9jdI73U4G0j3oySI4UwJjkOCbFUd4XqfJDseKMdCELr5lN005EmLtioHNGWOkcWZ%2FqCQY3a44%2BSq9bPMXiDd%2FnKZtdn244df2V%2Fv2M0J%2FmcwkRog3kjFtvx3SabF8xw4CImg0eUC4MM7d1sAGOqUBa3%2B1XPmiB47t0apRMATwB715QWr%2FqdGxy8XyxJpXfShcaN3F%2Ba%2BWDoV9It5VuYPoRvf3LZrlIHPPqXcg4lwljM5N6TNPjGPM1GMAczrI9MmDOxIt6F3%2BmiMaXxu3nG8H%2BJYhOFuvW1srcHskDpZuxgv4FeWoL35SZ6WE53pyepTu9k12IeFrr%2B7BrxPZHJBNOHyyT2mdYVxe1x5Y3EmwWJF4JpAB&X-Amz-Signature=da27991a75af4f67431bb4b87e3d5e0b5023372de643cb78ceaa9fae94ded5b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATH3QRE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIBBOfXfBE%2BeH2ff03yIdAbScGsw%2BaDs%2Fedx2P9K3pilTAiEAlWTIn2i8ctNuci0%2FwUWVx1khFcIvu%2FtFRUUBPmebYzcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZbr5tyodzG8Vt11CrcA4ZvM9JZv9GoXpxk1cQg9DfLOss0Ip0KIsFi%2FFykj01PPHrNjK3eb1B4BdZotBXxaCKAw909poS8hkrA0329NeTKVlBMty3tOMCHirLyEyfKkoEaWpmGhtIhQ7BAql0hfU1Uvi7SbSSoOqZJwxq%2FhJnc5hWaRCcfD%2BchtWeLwh%2B7u9t1Z9JaU3v3kwiEuOJOYV8zD5sIfKJhdaB3kgqAGA9DRqUo8jgphDmkiQN8Es8dmTf7x01pdeTCZxkNeSIpZN5j5f2JCrHQ6yANcV9aRhYDIBfKFLxXTVDpQEcidi6keO%2Fm049cWW%2BujZL6HXrfFKRBFcHv3S%2BnwTl7V%2BH0YZowlbIu6RWvJD172C50F6rB97C6nGYWkUxADsoNHa%2Ftu2AOZg0IHCSL%2Bcp6WFD%2FF7UKL49XOLTZJhBpmS3rj8w%2FtJu%2Buf1KB3wbwrPg38yc8cpb1TVd%2BtSI54ioK3KkXlwg3%2BBRGfBsMizMDgd1mk9JBs%2Bw7iD9jdI73U4G0j3oySI4UwJjkOCbFUd4XqfJDseKMdCELr5lN005EmLtioHNGWOkcWZ%2FqCQY3a44%2BSq9bPMXiDd%2FnKZtdn244df2V%2Fv2M0J%2FmcwkRog3kjFtvx3SabF8xw4CImg0eUC4MM7d1sAGOqUBa3%2B1XPmiB47t0apRMATwB715QWr%2FqdGxy8XyxJpXfShcaN3F%2Ba%2BWDoV9It5VuYPoRvf3LZrlIHPPqXcg4lwljM5N6TNPjGPM1GMAczrI9MmDOxIt6F3%2BmiMaXxu3nG8H%2BJYhOFuvW1srcHskDpZuxgv4FeWoL35SZ6WE53pyepTu9k12IeFrr%2B7BrxPZHJBNOHyyT2mdYVxe1x5Y3EmwWJF4JpAB&X-Amz-Signature=d79205ee3f63036afc95a17d4e34ff2f3535ba81eea4f77f5766c2db48c4c4f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATH3QRE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIBBOfXfBE%2BeH2ff03yIdAbScGsw%2BaDs%2Fedx2P9K3pilTAiEAlWTIn2i8ctNuci0%2FwUWVx1khFcIvu%2FtFRUUBPmebYzcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZbr5tyodzG8Vt11CrcA4ZvM9JZv9GoXpxk1cQg9DfLOss0Ip0KIsFi%2FFykj01PPHrNjK3eb1B4BdZotBXxaCKAw909poS8hkrA0329NeTKVlBMty3tOMCHirLyEyfKkoEaWpmGhtIhQ7BAql0hfU1Uvi7SbSSoOqZJwxq%2FhJnc5hWaRCcfD%2BchtWeLwh%2B7u9t1Z9JaU3v3kwiEuOJOYV8zD5sIfKJhdaB3kgqAGA9DRqUo8jgphDmkiQN8Es8dmTf7x01pdeTCZxkNeSIpZN5j5f2JCrHQ6yANcV9aRhYDIBfKFLxXTVDpQEcidi6keO%2Fm049cWW%2BujZL6HXrfFKRBFcHv3S%2BnwTl7V%2BH0YZowlbIu6RWvJD172C50F6rB97C6nGYWkUxADsoNHa%2Ftu2AOZg0IHCSL%2Bcp6WFD%2FF7UKL49XOLTZJhBpmS3rj8w%2FtJu%2Buf1KB3wbwrPg38yc8cpb1TVd%2BtSI54ioK3KkXlwg3%2BBRGfBsMizMDgd1mk9JBs%2Bw7iD9jdI73U4G0j3oySI4UwJjkOCbFUd4XqfJDseKMdCELr5lN005EmLtioHNGWOkcWZ%2FqCQY3a44%2BSq9bPMXiDd%2FnKZtdn244df2V%2Fv2M0J%2FmcwkRog3kjFtvx3SabF8xw4CImg0eUC4MM7d1sAGOqUBa3%2B1XPmiB47t0apRMATwB715QWr%2FqdGxy8XyxJpXfShcaN3F%2Ba%2BWDoV9It5VuYPoRvf3LZrlIHPPqXcg4lwljM5N6TNPjGPM1GMAczrI9MmDOxIt6F3%2BmiMaXxu3nG8H%2BJYhOFuvW1srcHskDpZuxgv4FeWoL35SZ6WE53pyepTu9k12IeFrr%2B7BrxPZHJBNOHyyT2mdYVxe1x5Y3EmwWJF4JpAB&X-Amz-Signature=ead1af0d824c5dc0d4bd1a442c42efdf80823b625a5b22c1ed8af72015432fca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATH3QRE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIBBOfXfBE%2BeH2ff03yIdAbScGsw%2BaDs%2Fedx2P9K3pilTAiEAlWTIn2i8ctNuci0%2FwUWVx1khFcIvu%2FtFRUUBPmebYzcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZbr5tyodzG8Vt11CrcA4ZvM9JZv9GoXpxk1cQg9DfLOss0Ip0KIsFi%2FFykj01PPHrNjK3eb1B4BdZotBXxaCKAw909poS8hkrA0329NeTKVlBMty3tOMCHirLyEyfKkoEaWpmGhtIhQ7BAql0hfU1Uvi7SbSSoOqZJwxq%2FhJnc5hWaRCcfD%2BchtWeLwh%2B7u9t1Z9JaU3v3kwiEuOJOYV8zD5sIfKJhdaB3kgqAGA9DRqUo8jgphDmkiQN8Es8dmTf7x01pdeTCZxkNeSIpZN5j5f2JCrHQ6yANcV9aRhYDIBfKFLxXTVDpQEcidi6keO%2Fm049cWW%2BujZL6HXrfFKRBFcHv3S%2BnwTl7V%2BH0YZowlbIu6RWvJD172C50F6rB97C6nGYWkUxADsoNHa%2Ftu2AOZg0IHCSL%2Bcp6WFD%2FF7UKL49XOLTZJhBpmS3rj8w%2FtJu%2Buf1KB3wbwrPg38yc8cpb1TVd%2BtSI54ioK3KkXlwg3%2BBRGfBsMizMDgd1mk9JBs%2Bw7iD9jdI73U4G0j3oySI4UwJjkOCbFUd4XqfJDseKMdCELr5lN005EmLtioHNGWOkcWZ%2FqCQY3a44%2BSq9bPMXiDd%2FnKZtdn244df2V%2Fv2M0J%2FmcwkRog3kjFtvx3SabF8xw4CImg0eUC4MM7d1sAGOqUBa3%2B1XPmiB47t0apRMATwB715QWr%2FqdGxy8XyxJpXfShcaN3F%2Ba%2BWDoV9It5VuYPoRvf3LZrlIHPPqXcg4lwljM5N6TNPjGPM1GMAczrI9MmDOxIt6F3%2BmiMaXxu3nG8H%2BJYhOFuvW1srcHskDpZuxgv4FeWoL35SZ6WE53pyepTu9k12IeFrr%2B7BrxPZHJBNOHyyT2mdYVxe1x5Y3EmwWJF4JpAB&X-Amz-Signature=424ca78c86fc54ff54421851ffa82f55683e93f1134147c257c05da6dc541566&X-Amz-SignedHeaders=host&x-id=GetObject)
