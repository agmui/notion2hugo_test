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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IY5XEKE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAo2%2BFsfz5ZIyKKREj3lBJpNMkNY80LOZJcvptaB350pAiEA%2FLSK%2Bu%2BqYp1rx8Da%2BEMxYN8jv%2FyHR87pLhVOEjs1JiUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElia%2FKLOFnlqsTGBircA7iKWcGBbgu%2F94up3BdgOHSH%2FSZUB4Gs%2Bry50B5Y1BiTGgONul6vPPPU78Sz8ZOFIU37h8NGprh2V4ZbHazYXzU1LlXLuNasNUGzUP26uNcCKI2m%2FVBP5cMoHpy%2FnCCCA65mo9VLCd1zYXetqAxB3b8kAAYxT3YSumDV3%2BpCh5gQeqaJdbf64JkyC1F2bGoGs6%2BmM7mSXviIz%2BYRVv6lOQQB5xmFFlUocMmWPsWFu5jMTFJkKwp%2Fu%2FyNK52QOdPGUSg%2FjcNJITnpkGDyc0j87Xgg8wFpMPmbcljZzKgA0H%2FePKfgxjIjiXOhYgcQYDffo%2BtEohA0DDPo67%2BFLPQOnRHefESMl1%2Bo0oWxNfa%2BMA3nASlyx%2BULFsDO0Qx7Z%2BaYdv8BheSSqNJo0d8mHhK72IeHTsoqqW2%2FD8gpSVKaxfPIooPwuw55oWYrxuKStZzaPMrimEUv4QiyzH7xJK%2FXURrHrcVXe9uwRyLhmoUXZh6bBiBf53sMvDeKVgLGPUHvVWfD7fHlVcjRaxGHeqI7LSQWlQz2ZV5V9CRQBPOYeRNOhHDSlIIMrLlGxxEtcuUKF%2BRM5oP%2FgTTiotDfeVqnzxumxO0So1QPU59BoZKetnsIh%2FhS9UKydh0veKMwMOi9wsEGOqUBBDxTMkK34tJOifDMxHleg1slVo51HUBuAcH%2Fej7%2Bprho%2F75NSpZKWO8xFIpej1ziBZ6xNKoOFRaz4k1RnqTKR5icexgnWczLZ%2FVXs6RL0S7JFmYUG%2BQ%2FxC1Rb0OHpARRbjBfHCVQg0i0PzsR0BH%2FrFOJ8Y3ag2WKCBphHYTBmF09NWoPHIT1eDRi0g%2B7QskywficyvXEhFkN6d24N195xaykS6CO&X-Amz-Signature=ded5c6f9fbee9ca1adccd333b0cdb37dd89f0724047c78f49972e00c9daa05a3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IY5XEKE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAo2%2BFsfz5ZIyKKREj3lBJpNMkNY80LOZJcvptaB350pAiEA%2FLSK%2Bu%2BqYp1rx8Da%2BEMxYN8jv%2FyHR87pLhVOEjs1JiUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElia%2FKLOFnlqsTGBircA7iKWcGBbgu%2F94up3BdgOHSH%2FSZUB4Gs%2Bry50B5Y1BiTGgONul6vPPPU78Sz8ZOFIU37h8NGprh2V4ZbHazYXzU1LlXLuNasNUGzUP26uNcCKI2m%2FVBP5cMoHpy%2FnCCCA65mo9VLCd1zYXetqAxB3b8kAAYxT3YSumDV3%2BpCh5gQeqaJdbf64JkyC1F2bGoGs6%2BmM7mSXviIz%2BYRVv6lOQQB5xmFFlUocMmWPsWFu5jMTFJkKwp%2Fu%2FyNK52QOdPGUSg%2FjcNJITnpkGDyc0j87Xgg8wFpMPmbcljZzKgA0H%2FePKfgxjIjiXOhYgcQYDffo%2BtEohA0DDPo67%2BFLPQOnRHefESMl1%2Bo0oWxNfa%2BMA3nASlyx%2BULFsDO0Qx7Z%2BaYdv8BheSSqNJo0d8mHhK72IeHTsoqqW2%2FD8gpSVKaxfPIooPwuw55oWYrxuKStZzaPMrimEUv4QiyzH7xJK%2FXURrHrcVXe9uwRyLhmoUXZh6bBiBf53sMvDeKVgLGPUHvVWfD7fHlVcjRaxGHeqI7LSQWlQz2ZV5V9CRQBPOYeRNOhHDSlIIMrLlGxxEtcuUKF%2BRM5oP%2FgTTiotDfeVqnzxumxO0So1QPU59BoZKetnsIh%2FhS9UKydh0veKMwMOi9wsEGOqUBBDxTMkK34tJOifDMxHleg1slVo51HUBuAcH%2Fej7%2Bprho%2F75NSpZKWO8xFIpej1ziBZ6xNKoOFRaz4k1RnqTKR5icexgnWczLZ%2FVXs6RL0S7JFmYUG%2BQ%2FxC1Rb0OHpARRbjBfHCVQg0i0PzsR0BH%2FrFOJ8Y3ag2WKCBphHYTBmF09NWoPHIT1eDRi0g%2B7QskywficyvXEhFkN6d24N195xaykS6CO&X-Amz-Signature=e496c9e73989dba42480dbed150c8847594c8b35f3b7ea1a53c883174d9d88da&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IY5XEKE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAo2%2BFsfz5ZIyKKREj3lBJpNMkNY80LOZJcvptaB350pAiEA%2FLSK%2Bu%2BqYp1rx8Da%2BEMxYN8jv%2FyHR87pLhVOEjs1JiUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElia%2FKLOFnlqsTGBircA7iKWcGBbgu%2F94up3BdgOHSH%2FSZUB4Gs%2Bry50B5Y1BiTGgONul6vPPPU78Sz8ZOFIU37h8NGprh2V4ZbHazYXzU1LlXLuNasNUGzUP26uNcCKI2m%2FVBP5cMoHpy%2FnCCCA65mo9VLCd1zYXetqAxB3b8kAAYxT3YSumDV3%2BpCh5gQeqaJdbf64JkyC1F2bGoGs6%2BmM7mSXviIz%2BYRVv6lOQQB5xmFFlUocMmWPsWFu5jMTFJkKwp%2Fu%2FyNK52QOdPGUSg%2FjcNJITnpkGDyc0j87Xgg8wFpMPmbcljZzKgA0H%2FePKfgxjIjiXOhYgcQYDffo%2BtEohA0DDPo67%2BFLPQOnRHefESMl1%2Bo0oWxNfa%2BMA3nASlyx%2BULFsDO0Qx7Z%2BaYdv8BheSSqNJo0d8mHhK72IeHTsoqqW2%2FD8gpSVKaxfPIooPwuw55oWYrxuKStZzaPMrimEUv4QiyzH7xJK%2FXURrHrcVXe9uwRyLhmoUXZh6bBiBf53sMvDeKVgLGPUHvVWfD7fHlVcjRaxGHeqI7LSQWlQz2ZV5V9CRQBPOYeRNOhHDSlIIMrLlGxxEtcuUKF%2BRM5oP%2FgTTiotDfeVqnzxumxO0So1QPU59BoZKetnsIh%2FhS9UKydh0veKMwMOi9wsEGOqUBBDxTMkK34tJOifDMxHleg1slVo51HUBuAcH%2Fej7%2Bprho%2F75NSpZKWO8xFIpej1ziBZ6xNKoOFRaz4k1RnqTKR5icexgnWczLZ%2FVXs6RL0S7JFmYUG%2BQ%2FxC1Rb0OHpARRbjBfHCVQg0i0PzsR0BH%2FrFOJ8Y3ag2WKCBphHYTBmF09NWoPHIT1eDRi0g%2B7QskywficyvXEhFkN6d24N195xaykS6CO&X-Amz-Signature=3e4c4f297bca34d3034b5f2e376a8bc125cedbca7d51f2d180d99c32ba8d7a39&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IY5XEKE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAo2%2BFsfz5ZIyKKREj3lBJpNMkNY80LOZJcvptaB350pAiEA%2FLSK%2Bu%2BqYp1rx8Da%2BEMxYN8jv%2FyHR87pLhVOEjs1JiUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElia%2FKLOFnlqsTGBircA7iKWcGBbgu%2F94up3BdgOHSH%2FSZUB4Gs%2Bry50B5Y1BiTGgONul6vPPPU78Sz8ZOFIU37h8NGprh2V4ZbHazYXzU1LlXLuNasNUGzUP26uNcCKI2m%2FVBP5cMoHpy%2FnCCCA65mo9VLCd1zYXetqAxB3b8kAAYxT3YSumDV3%2BpCh5gQeqaJdbf64JkyC1F2bGoGs6%2BmM7mSXviIz%2BYRVv6lOQQB5xmFFlUocMmWPsWFu5jMTFJkKwp%2Fu%2FyNK52QOdPGUSg%2FjcNJITnpkGDyc0j87Xgg8wFpMPmbcljZzKgA0H%2FePKfgxjIjiXOhYgcQYDffo%2BtEohA0DDPo67%2BFLPQOnRHefESMl1%2Bo0oWxNfa%2BMA3nASlyx%2BULFsDO0Qx7Z%2BaYdv8BheSSqNJo0d8mHhK72IeHTsoqqW2%2FD8gpSVKaxfPIooPwuw55oWYrxuKStZzaPMrimEUv4QiyzH7xJK%2FXURrHrcVXe9uwRyLhmoUXZh6bBiBf53sMvDeKVgLGPUHvVWfD7fHlVcjRaxGHeqI7LSQWlQz2ZV5V9CRQBPOYeRNOhHDSlIIMrLlGxxEtcuUKF%2BRM5oP%2FgTTiotDfeVqnzxumxO0So1QPU59BoZKetnsIh%2FhS9UKydh0veKMwMOi9wsEGOqUBBDxTMkK34tJOifDMxHleg1slVo51HUBuAcH%2Fej7%2Bprho%2F75NSpZKWO8xFIpej1ziBZ6xNKoOFRaz4k1RnqTKR5icexgnWczLZ%2FVXs6RL0S7JFmYUG%2BQ%2FxC1Rb0OHpARRbjBfHCVQg0i0PzsR0BH%2FrFOJ8Y3ag2WKCBphHYTBmF09NWoPHIT1eDRi0g%2B7QskywficyvXEhFkN6d24N195xaykS6CO&X-Amz-Signature=f21ceadd3f48bf825b1698d0467b116e1620c2f9a836d56ab1b290c88c6141d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IY5XEKE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAo2%2BFsfz5ZIyKKREj3lBJpNMkNY80LOZJcvptaB350pAiEA%2FLSK%2Bu%2BqYp1rx8Da%2BEMxYN8jv%2FyHR87pLhVOEjs1JiUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElia%2FKLOFnlqsTGBircA7iKWcGBbgu%2F94up3BdgOHSH%2FSZUB4Gs%2Bry50B5Y1BiTGgONul6vPPPU78Sz8ZOFIU37h8NGprh2V4ZbHazYXzU1LlXLuNasNUGzUP26uNcCKI2m%2FVBP5cMoHpy%2FnCCCA65mo9VLCd1zYXetqAxB3b8kAAYxT3YSumDV3%2BpCh5gQeqaJdbf64JkyC1F2bGoGs6%2BmM7mSXviIz%2BYRVv6lOQQB5xmFFlUocMmWPsWFu5jMTFJkKwp%2Fu%2FyNK52QOdPGUSg%2FjcNJITnpkGDyc0j87Xgg8wFpMPmbcljZzKgA0H%2FePKfgxjIjiXOhYgcQYDffo%2BtEohA0DDPo67%2BFLPQOnRHefESMl1%2Bo0oWxNfa%2BMA3nASlyx%2BULFsDO0Qx7Z%2BaYdv8BheSSqNJo0d8mHhK72IeHTsoqqW2%2FD8gpSVKaxfPIooPwuw55oWYrxuKStZzaPMrimEUv4QiyzH7xJK%2FXURrHrcVXe9uwRyLhmoUXZh6bBiBf53sMvDeKVgLGPUHvVWfD7fHlVcjRaxGHeqI7LSQWlQz2ZV5V9CRQBPOYeRNOhHDSlIIMrLlGxxEtcuUKF%2BRM5oP%2FgTTiotDfeVqnzxumxO0So1QPU59BoZKetnsIh%2FhS9UKydh0veKMwMOi9wsEGOqUBBDxTMkK34tJOifDMxHleg1slVo51HUBuAcH%2Fej7%2Bprho%2F75NSpZKWO8xFIpej1ziBZ6xNKoOFRaz4k1RnqTKR5icexgnWczLZ%2FVXs6RL0S7JFmYUG%2BQ%2FxC1Rb0OHpARRbjBfHCVQg0i0PzsR0BH%2FrFOJ8Y3ag2WKCBphHYTBmF09NWoPHIT1eDRi0g%2B7QskywficyvXEhFkN6d24N195xaykS6CO&X-Amz-Signature=697e125ae28790344a3e39e059d21e316d0b25573ed18112901effe4595e7c24&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IY5XEKE%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAo2%2BFsfz5ZIyKKREj3lBJpNMkNY80LOZJcvptaB350pAiEA%2FLSK%2Bu%2BqYp1rx8Da%2BEMxYN8jv%2FyHR87pLhVOEjs1JiUqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDElia%2FKLOFnlqsTGBircA7iKWcGBbgu%2F94up3BdgOHSH%2FSZUB4Gs%2Bry50B5Y1BiTGgONul6vPPPU78Sz8ZOFIU37h8NGprh2V4ZbHazYXzU1LlXLuNasNUGzUP26uNcCKI2m%2FVBP5cMoHpy%2FnCCCA65mo9VLCd1zYXetqAxB3b8kAAYxT3YSumDV3%2BpCh5gQeqaJdbf64JkyC1F2bGoGs6%2BmM7mSXviIz%2BYRVv6lOQQB5xmFFlUocMmWPsWFu5jMTFJkKwp%2Fu%2FyNK52QOdPGUSg%2FjcNJITnpkGDyc0j87Xgg8wFpMPmbcljZzKgA0H%2FePKfgxjIjiXOhYgcQYDffo%2BtEohA0DDPo67%2BFLPQOnRHefESMl1%2Bo0oWxNfa%2BMA3nASlyx%2BULFsDO0Qx7Z%2BaYdv8BheSSqNJo0d8mHhK72IeHTsoqqW2%2FD8gpSVKaxfPIooPwuw55oWYrxuKStZzaPMrimEUv4QiyzH7xJK%2FXURrHrcVXe9uwRyLhmoUXZh6bBiBf53sMvDeKVgLGPUHvVWfD7fHlVcjRaxGHeqI7LSQWlQz2ZV5V9CRQBPOYeRNOhHDSlIIMrLlGxxEtcuUKF%2BRM5oP%2FgTTiotDfeVqnzxumxO0So1QPU59BoZKetnsIh%2FhS9UKydh0veKMwMOi9wsEGOqUBBDxTMkK34tJOifDMxHleg1slVo51HUBuAcH%2Fej7%2Bprho%2F75NSpZKWO8xFIpej1ziBZ6xNKoOFRaz4k1RnqTKR5icexgnWczLZ%2FVXs6RL0S7JFmYUG%2BQ%2FxC1Rb0OHpARRbjBfHCVQg0i0PzsR0BH%2FrFOJ8Y3ag2WKCBphHYTBmF09NWoPHIT1eDRi0g%2B7QskywficyvXEhFkN6d24N195xaykS6CO&X-Amz-Signature=6037fd8dbaa0eed6c471ce5450e0b027c77ae01135b615cb13faecffd34c5087&X-Amz-SignedHeaders=host&x-id=GetObject)
