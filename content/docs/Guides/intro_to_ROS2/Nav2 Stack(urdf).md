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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SJQ5TJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgAsA%2FWeF2ZDYSRYkc%2B5Dy3nMR32rWgJVq5bRTZpVZKAiArmbPKLXNgPSH5T2%2BYS5%2Fu2oadpRoU2KesD%2FvCNZO5%2FSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOfnGJ5yIQvfThIX%2FKtwDLtDAkr1Tieni3Fassn0j7wO1cE44l6KkYmgPnHoi6o10g0hZ8Z63n503RP2Cq3CMkLF4Bl%2BcmmLpAmI%2BWfmBOcqKCY24gmdW58Q0rieWrlH0%2BPdm9OCRx5z%2BI82gbgZOgOMjWJP8RN%2BSIJcRyP1zTLf7DVmggH5%2Bjq%2BT1UBl81gCFi5zrc2y5h%2FeQCp7PIQP1x5YBSaSHZvjDUCSftjjdEC4%2BnDWsRBgLTNzBX85y9QEccvpM%2FGMcTRcLElkilhE4atRuRsLYurhiVwWqM9BfpduMsT%2BzxlL2zVLR1xYeBD%2Fr7HQJy9nUysSKEGY6VAvE%2FpP6qVBxa94ccLHt6Che%2Fiz1iP8gFxvDzeQw%2BglfeITDnWcQ5G929FhhuDiDqqkNJzLl12VHRLgt8h0SF6evq9FOQbjQLByfLorBPLMWQ6dEFeRE5BmqEQ%2B27ftil4MJvuvvVuarlIEpDrsMXgLRrbCBMjHtvBOHffNa6qufGyC46FF88D%2FtD6Awt%2FsxQHdgp%2BgZRBUAdIkZnC56TkuYl%2BgHMt6sf6GBXYhJjUWQKBOCToPjO7wR4Fg0nNz7sCO9f3UC%2B9xKA4S27j%2F5soAk%2B%2FYZ9jkaABHC6gpiOfAj6314ZATlH4rbJis%2F%2Fsw5dfbvQY6pgECadwBOYFH61fmBb%2BqApNLiA%2BNAuSbsObmSyvuUJGco4LKjBHa2o38NN4LVzDNlKvQGtDBCHzs%2FmeOh%2B4I%2BDORMp94AUwH8gijLzuJK4iK0vW48OT5iDBxvOIeRFpZh6yIQ63hfyuqB5bonP%2Fe4E05i6GqGu%2Fby6Rz1GrkKQIK0h%2BZrBMAaBr897tadfzbwLzg3byhprlNwBQIvni1NMEZwSHHs5JM&X-Amz-Signature=56f59591195e764e68320ec4b0c23498134e14121ca05b428f27da12d8c4b8a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SJQ5TJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgAsA%2FWeF2ZDYSRYkc%2B5Dy3nMR32rWgJVq5bRTZpVZKAiArmbPKLXNgPSH5T2%2BYS5%2Fu2oadpRoU2KesD%2FvCNZO5%2FSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOfnGJ5yIQvfThIX%2FKtwDLtDAkr1Tieni3Fassn0j7wO1cE44l6KkYmgPnHoi6o10g0hZ8Z63n503RP2Cq3CMkLF4Bl%2BcmmLpAmI%2BWfmBOcqKCY24gmdW58Q0rieWrlH0%2BPdm9OCRx5z%2BI82gbgZOgOMjWJP8RN%2BSIJcRyP1zTLf7DVmggH5%2Bjq%2BT1UBl81gCFi5zrc2y5h%2FeQCp7PIQP1x5YBSaSHZvjDUCSftjjdEC4%2BnDWsRBgLTNzBX85y9QEccvpM%2FGMcTRcLElkilhE4atRuRsLYurhiVwWqM9BfpduMsT%2BzxlL2zVLR1xYeBD%2Fr7HQJy9nUysSKEGY6VAvE%2FpP6qVBxa94ccLHt6Che%2Fiz1iP8gFxvDzeQw%2BglfeITDnWcQ5G929FhhuDiDqqkNJzLl12VHRLgt8h0SF6evq9FOQbjQLByfLorBPLMWQ6dEFeRE5BmqEQ%2B27ftil4MJvuvvVuarlIEpDrsMXgLRrbCBMjHtvBOHffNa6qufGyC46FF88D%2FtD6Awt%2FsxQHdgp%2BgZRBUAdIkZnC56TkuYl%2BgHMt6sf6GBXYhJjUWQKBOCToPjO7wR4Fg0nNz7sCO9f3UC%2B9xKA4S27j%2F5soAk%2B%2FYZ9jkaABHC6gpiOfAj6314ZATlH4rbJis%2F%2Fsw5dfbvQY6pgECadwBOYFH61fmBb%2BqApNLiA%2BNAuSbsObmSyvuUJGco4LKjBHa2o38NN4LVzDNlKvQGtDBCHzs%2FmeOh%2B4I%2BDORMp94AUwH8gijLzuJK4iK0vW48OT5iDBxvOIeRFpZh6yIQ63hfyuqB5bonP%2Fe4E05i6GqGu%2Fby6Rz1GrkKQIK0h%2BZrBMAaBr897tadfzbwLzg3byhprlNwBQIvni1NMEZwSHHs5JM&X-Amz-Signature=dbd5c957daa51ecce3523f7085a83e83f288ab52961a9c66595abbd17c94768d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SJQ5TJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgAsA%2FWeF2ZDYSRYkc%2B5Dy3nMR32rWgJVq5bRTZpVZKAiArmbPKLXNgPSH5T2%2BYS5%2Fu2oadpRoU2KesD%2FvCNZO5%2FSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOfnGJ5yIQvfThIX%2FKtwDLtDAkr1Tieni3Fassn0j7wO1cE44l6KkYmgPnHoi6o10g0hZ8Z63n503RP2Cq3CMkLF4Bl%2BcmmLpAmI%2BWfmBOcqKCY24gmdW58Q0rieWrlH0%2BPdm9OCRx5z%2BI82gbgZOgOMjWJP8RN%2BSIJcRyP1zTLf7DVmggH5%2Bjq%2BT1UBl81gCFi5zrc2y5h%2FeQCp7PIQP1x5YBSaSHZvjDUCSftjjdEC4%2BnDWsRBgLTNzBX85y9QEccvpM%2FGMcTRcLElkilhE4atRuRsLYurhiVwWqM9BfpduMsT%2BzxlL2zVLR1xYeBD%2Fr7HQJy9nUysSKEGY6VAvE%2FpP6qVBxa94ccLHt6Che%2Fiz1iP8gFxvDzeQw%2BglfeITDnWcQ5G929FhhuDiDqqkNJzLl12VHRLgt8h0SF6evq9FOQbjQLByfLorBPLMWQ6dEFeRE5BmqEQ%2B27ftil4MJvuvvVuarlIEpDrsMXgLRrbCBMjHtvBOHffNa6qufGyC46FF88D%2FtD6Awt%2FsxQHdgp%2BgZRBUAdIkZnC56TkuYl%2BgHMt6sf6GBXYhJjUWQKBOCToPjO7wR4Fg0nNz7sCO9f3UC%2B9xKA4S27j%2F5soAk%2B%2FYZ9jkaABHC6gpiOfAj6314ZATlH4rbJis%2F%2Fsw5dfbvQY6pgECadwBOYFH61fmBb%2BqApNLiA%2BNAuSbsObmSyvuUJGco4LKjBHa2o38NN4LVzDNlKvQGtDBCHzs%2FmeOh%2B4I%2BDORMp94AUwH8gijLzuJK4iK0vW48OT5iDBxvOIeRFpZh6yIQ63hfyuqB5bonP%2Fe4E05i6GqGu%2Fby6Rz1GrkKQIK0h%2BZrBMAaBr897tadfzbwLzg3byhprlNwBQIvni1NMEZwSHHs5JM&X-Amz-Signature=e381c91c52413fca3dcd45705c52556ecbeed50f936bdc26ce3de467b1a33bf9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SJQ5TJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgAsA%2FWeF2ZDYSRYkc%2B5Dy3nMR32rWgJVq5bRTZpVZKAiArmbPKLXNgPSH5T2%2BYS5%2Fu2oadpRoU2KesD%2FvCNZO5%2FSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOfnGJ5yIQvfThIX%2FKtwDLtDAkr1Tieni3Fassn0j7wO1cE44l6KkYmgPnHoi6o10g0hZ8Z63n503RP2Cq3CMkLF4Bl%2BcmmLpAmI%2BWfmBOcqKCY24gmdW58Q0rieWrlH0%2BPdm9OCRx5z%2BI82gbgZOgOMjWJP8RN%2BSIJcRyP1zTLf7DVmggH5%2Bjq%2BT1UBl81gCFi5zrc2y5h%2FeQCp7PIQP1x5YBSaSHZvjDUCSftjjdEC4%2BnDWsRBgLTNzBX85y9QEccvpM%2FGMcTRcLElkilhE4atRuRsLYurhiVwWqM9BfpduMsT%2BzxlL2zVLR1xYeBD%2Fr7HQJy9nUysSKEGY6VAvE%2FpP6qVBxa94ccLHt6Che%2Fiz1iP8gFxvDzeQw%2BglfeITDnWcQ5G929FhhuDiDqqkNJzLl12VHRLgt8h0SF6evq9FOQbjQLByfLorBPLMWQ6dEFeRE5BmqEQ%2B27ftil4MJvuvvVuarlIEpDrsMXgLRrbCBMjHtvBOHffNa6qufGyC46FF88D%2FtD6Awt%2FsxQHdgp%2BgZRBUAdIkZnC56TkuYl%2BgHMt6sf6GBXYhJjUWQKBOCToPjO7wR4Fg0nNz7sCO9f3UC%2B9xKA4S27j%2F5soAk%2B%2FYZ9jkaABHC6gpiOfAj6314ZATlH4rbJis%2F%2Fsw5dfbvQY6pgECadwBOYFH61fmBb%2BqApNLiA%2BNAuSbsObmSyvuUJGco4LKjBHa2o38NN4LVzDNlKvQGtDBCHzs%2FmeOh%2B4I%2BDORMp94AUwH8gijLzuJK4iK0vW48OT5iDBxvOIeRFpZh6yIQ63hfyuqB5bonP%2Fe4E05i6GqGu%2Fby6Rz1GrkKQIK0h%2BZrBMAaBr897tadfzbwLzg3byhprlNwBQIvni1NMEZwSHHs5JM&X-Amz-Signature=751769b5e9056a5726b2963436ebad1e7f2a9ebb1cc58a12771faa3e11b9d3a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SJQ5TJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgAsA%2FWeF2ZDYSRYkc%2B5Dy3nMR32rWgJVq5bRTZpVZKAiArmbPKLXNgPSH5T2%2BYS5%2Fu2oadpRoU2KesD%2FvCNZO5%2FSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOfnGJ5yIQvfThIX%2FKtwDLtDAkr1Tieni3Fassn0j7wO1cE44l6KkYmgPnHoi6o10g0hZ8Z63n503RP2Cq3CMkLF4Bl%2BcmmLpAmI%2BWfmBOcqKCY24gmdW58Q0rieWrlH0%2BPdm9OCRx5z%2BI82gbgZOgOMjWJP8RN%2BSIJcRyP1zTLf7DVmggH5%2Bjq%2BT1UBl81gCFi5zrc2y5h%2FeQCp7PIQP1x5YBSaSHZvjDUCSftjjdEC4%2BnDWsRBgLTNzBX85y9QEccvpM%2FGMcTRcLElkilhE4atRuRsLYurhiVwWqM9BfpduMsT%2BzxlL2zVLR1xYeBD%2Fr7HQJy9nUysSKEGY6VAvE%2FpP6qVBxa94ccLHt6Che%2Fiz1iP8gFxvDzeQw%2BglfeITDnWcQ5G929FhhuDiDqqkNJzLl12VHRLgt8h0SF6evq9FOQbjQLByfLorBPLMWQ6dEFeRE5BmqEQ%2B27ftil4MJvuvvVuarlIEpDrsMXgLRrbCBMjHtvBOHffNa6qufGyC46FF88D%2FtD6Awt%2FsxQHdgp%2BgZRBUAdIkZnC56TkuYl%2BgHMt6sf6GBXYhJjUWQKBOCToPjO7wR4Fg0nNz7sCO9f3UC%2B9xKA4S27j%2F5soAk%2B%2FYZ9jkaABHC6gpiOfAj6314ZATlH4rbJis%2F%2Fsw5dfbvQY6pgECadwBOYFH61fmBb%2BqApNLiA%2BNAuSbsObmSyvuUJGco4LKjBHa2o38NN4LVzDNlKvQGtDBCHzs%2FmeOh%2B4I%2BDORMp94AUwH8gijLzuJK4iK0vW48OT5iDBxvOIeRFpZh6yIQ63hfyuqB5bonP%2Fe4E05i6GqGu%2Fby6Rz1GrkKQIK0h%2BZrBMAaBr897tadfzbwLzg3byhprlNwBQIvni1NMEZwSHHs5JM&X-Amz-Signature=098f95fdcf860e9083ed375432f78dffa32744f82f2197efda9334042381e2c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673SJQ5TJ%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFgAsA%2FWeF2ZDYSRYkc%2B5Dy3nMR32rWgJVq5bRTZpVZKAiArmbPKLXNgPSH5T2%2BYS5%2Fu2oadpRoU2KesD%2FvCNZO5%2FSqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOfnGJ5yIQvfThIX%2FKtwDLtDAkr1Tieni3Fassn0j7wO1cE44l6KkYmgPnHoi6o10g0hZ8Z63n503RP2Cq3CMkLF4Bl%2BcmmLpAmI%2BWfmBOcqKCY24gmdW58Q0rieWrlH0%2BPdm9OCRx5z%2BI82gbgZOgOMjWJP8RN%2BSIJcRyP1zTLf7DVmggH5%2Bjq%2BT1UBl81gCFi5zrc2y5h%2FeQCp7PIQP1x5YBSaSHZvjDUCSftjjdEC4%2BnDWsRBgLTNzBX85y9QEccvpM%2FGMcTRcLElkilhE4atRuRsLYurhiVwWqM9BfpduMsT%2BzxlL2zVLR1xYeBD%2Fr7HQJy9nUysSKEGY6VAvE%2FpP6qVBxa94ccLHt6Che%2Fiz1iP8gFxvDzeQw%2BglfeITDnWcQ5G929FhhuDiDqqkNJzLl12VHRLgt8h0SF6evq9FOQbjQLByfLorBPLMWQ6dEFeRE5BmqEQ%2B27ftil4MJvuvvVuarlIEpDrsMXgLRrbCBMjHtvBOHffNa6qufGyC46FF88D%2FtD6Awt%2FsxQHdgp%2BgZRBUAdIkZnC56TkuYl%2BgHMt6sf6GBXYhJjUWQKBOCToPjO7wR4Fg0nNz7sCO9f3UC%2B9xKA4S27j%2F5soAk%2B%2FYZ9jkaABHC6gpiOfAj6314ZATlH4rbJis%2F%2Fsw5dfbvQY6pgECadwBOYFH61fmBb%2BqApNLiA%2BNAuSbsObmSyvuUJGco4LKjBHa2o38NN4LVzDNlKvQGtDBCHzs%2FmeOh%2B4I%2BDORMp94AUwH8gijLzuJK4iK0vW48OT5iDBxvOIeRFpZh6yIQ63hfyuqB5bonP%2Fe4E05i6GqGu%2Fby6Rz1GrkKQIK0h%2BZrBMAaBr897tadfzbwLzg3byhprlNwBQIvni1NMEZwSHHs5JM&X-Amz-Signature=cb707e54e2b5b452cab55015f74b678b2c3a341cafc400663fea6d580326c036&X-Amz-SignedHeaders=host&x-id=GetObject)
