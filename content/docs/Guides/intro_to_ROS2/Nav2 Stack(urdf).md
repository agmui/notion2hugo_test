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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCQP2LL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJ4rnuRsMdJRw26PBoUYuWe%2BoAmRkW9rfJUaE%2FdXdrGAiA9rjruoeb%2BuyG%2Bxjc8DZXhw%2BkFkpN6xqwxSt7UDdTyaiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwhwG4wqjgR%2FO7MMDKtwDs8o%2B86uHicjZqsatlIdnkbPRr%2Fy%2BDj6V2Y%2BcLKlNfMp5TeIooAxL8Rkp1ErtK96VuKJ%2FEKZT%2Bj0az%2FNDuxAcFGYgsYOT%2FC8jXA5eqByOzjJ469evj%2BU2lXzUSPIRt7TCfWke2wF7aLWN2WGT5ykqEKSDWvM1GJPJkdHmFDhABh6K%2BS4sMUp6NN40lZmYNPmfotZVqxblfQEqiXWkluLKfVnmfqAy9RPRSGt8wcwdxB8M9epQS3AVImBtVeUghZBhc4DYzm6AYtpik%2BZq6h7GSLamXGHXqrTQNV5B3oDZY2E6Mh7eHlntIUfD50Bny4tNN9Qyu7oCdxJFwYDWn2%2BdHq6g5xG%2FbRve6lppv4E0IdpYYu%2Fi77jcKn8hkiRUZ4ZggvMrdf8ZqD2Bcru8Z9JkNq1UWN4Jk1qiQM%2BbEKdmpLYkWj%2Bf9%2FuuX%2FXgOJaZmbfaibs5QSmj0EadWJ%2FoWXdpdwF0H2c3xlEkQ2A25zu%2BQczmRW3XpYPml0JJ6d2gZe3IZlv0SI%2F4RM5DhMGeu0i%2BIoYFOVyCD5mROkI8xgVoI2gNUwvGqJe10nFkPQriSwbsMdsrOsgHYBs7ULZ1EF4FlVv0Vp0yJD1QJHyp35qXdi5ndWkj2KbJaDyoVWswxZKuvQY6pgHrorb%2FM%2BnMkbWYRlf89FsW4B41gU3tqiCYVSgNPMOm9YCinlbHTKCuF%2FY%2BpUrfo03wiZUrQxSIJ1c%2BO%2B%2FjuaVRoepp%2FMh1qfhgiO0UDkNTVjrrKR4oxW2QE8g7uuuVx8Y4s2iOP4EboFlSyalzzADTmQToWfTRuRP8LUDIspehyxshVgrzQ3YWk23VMUi5hTHL4Ob7hGEBC1geCznB1NtExlk%2B7qa4&X-Amz-Signature=df7426a88ee82cdbb3274e2fc1515d6aa00cca6301e032e281b28839f50a58f3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCQP2LL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJ4rnuRsMdJRw26PBoUYuWe%2BoAmRkW9rfJUaE%2FdXdrGAiA9rjruoeb%2BuyG%2Bxjc8DZXhw%2BkFkpN6xqwxSt7UDdTyaiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwhwG4wqjgR%2FO7MMDKtwDs8o%2B86uHicjZqsatlIdnkbPRr%2Fy%2BDj6V2Y%2BcLKlNfMp5TeIooAxL8Rkp1ErtK96VuKJ%2FEKZT%2Bj0az%2FNDuxAcFGYgsYOT%2FC8jXA5eqByOzjJ469evj%2BU2lXzUSPIRt7TCfWke2wF7aLWN2WGT5ykqEKSDWvM1GJPJkdHmFDhABh6K%2BS4sMUp6NN40lZmYNPmfotZVqxblfQEqiXWkluLKfVnmfqAy9RPRSGt8wcwdxB8M9epQS3AVImBtVeUghZBhc4DYzm6AYtpik%2BZq6h7GSLamXGHXqrTQNV5B3oDZY2E6Mh7eHlntIUfD50Bny4tNN9Qyu7oCdxJFwYDWn2%2BdHq6g5xG%2FbRve6lppv4E0IdpYYu%2Fi77jcKn8hkiRUZ4ZggvMrdf8ZqD2Bcru8Z9JkNq1UWN4Jk1qiQM%2BbEKdmpLYkWj%2Bf9%2FuuX%2FXgOJaZmbfaibs5QSmj0EadWJ%2FoWXdpdwF0H2c3xlEkQ2A25zu%2BQczmRW3XpYPml0JJ6d2gZe3IZlv0SI%2F4RM5DhMGeu0i%2BIoYFOVyCD5mROkI8xgVoI2gNUwvGqJe10nFkPQriSwbsMdsrOsgHYBs7ULZ1EF4FlVv0Vp0yJD1QJHyp35qXdi5ndWkj2KbJaDyoVWswxZKuvQY6pgHrorb%2FM%2BnMkbWYRlf89FsW4B41gU3tqiCYVSgNPMOm9YCinlbHTKCuF%2FY%2BpUrfo03wiZUrQxSIJ1c%2BO%2B%2FjuaVRoepp%2FMh1qfhgiO0UDkNTVjrrKR4oxW2QE8g7uuuVx8Y4s2iOP4EboFlSyalzzADTmQToWfTRuRP8LUDIspehyxshVgrzQ3YWk23VMUi5hTHL4Ob7hGEBC1geCznB1NtExlk%2B7qa4&X-Amz-Signature=0bc5e3f0db62a961c4a785d8af8efa6af05c301527971c416476b34c292a2014&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCQP2LL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJ4rnuRsMdJRw26PBoUYuWe%2BoAmRkW9rfJUaE%2FdXdrGAiA9rjruoeb%2BuyG%2Bxjc8DZXhw%2BkFkpN6xqwxSt7UDdTyaiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwhwG4wqjgR%2FO7MMDKtwDs8o%2B86uHicjZqsatlIdnkbPRr%2Fy%2BDj6V2Y%2BcLKlNfMp5TeIooAxL8Rkp1ErtK96VuKJ%2FEKZT%2Bj0az%2FNDuxAcFGYgsYOT%2FC8jXA5eqByOzjJ469evj%2BU2lXzUSPIRt7TCfWke2wF7aLWN2WGT5ykqEKSDWvM1GJPJkdHmFDhABh6K%2BS4sMUp6NN40lZmYNPmfotZVqxblfQEqiXWkluLKfVnmfqAy9RPRSGt8wcwdxB8M9epQS3AVImBtVeUghZBhc4DYzm6AYtpik%2BZq6h7GSLamXGHXqrTQNV5B3oDZY2E6Mh7eHlntIUfD50Bny4tNN9Qyu7oCdxJFwYDWn2%2BdHq6g5xG%2FbRve6lppv4E0IdpYYu%2Fi77jcKn8hkiRUZ4ZggvMrdf8ZqD2Bcru8Z9JkNq1UWN4Jk1qiQM%2BbEKdmpLYkWj%2Bf9%2FuuX%2FXgOJaZmbfaibs5QSmj0EadWJ%2FoWXdpdwF0H2c3xlEkQ2A25zu%2BQczmRW3XpYPml0JJ6d2gZe3IZlv0SI%2F4RM5DhMGeu0i%2BIoYFOVyCD5mROkI8xgVoI2gNUwvGqJe10nFkPQriSwbsMdsrOsgHYBs7ULZ1EF4FlVv0Vp0yJD1QJHyp35qXdi5ndWkj2KbJaDyoVWswxZKuvQY6pgHrorb%2FM%2BnMkbWYRlf89FsW4B41gU3tqiCYVSgNPMOm9YCinlbHTKCuF%2FY%2BpUrfo03wiZUrQxSIJ1c%2BO%2B%2FjuaVRoepp%2FMh1qfhgiO0UDkNTVjrrKR4oxW2QE8g7uuuVx8Y4s2iOP4EboFlSyalzzADTmQToWfTRuRP8LUDIspehyxshVgrzQ3YWk23VMUi5hTHL4Ob7hGEBC1geCznB1NtExlk%2B7qa4&X-Amz-Signature=0acfcee54633926adac7ecdc2af2cd2e661971e7533139f1daa56a1881c79fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCQP2LL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJ4rnuRsMdJRw26PBoUYuWe%2BoAmRkW9rfJUaE%2FdXdrGAiA9rjruoeb%2BuyG%2Bxjc8DZXhw%2BkFkpN6xqwxSt7UDdTyaiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwhwG4wqjgR%2FO7MMDKtwDs8o%2B86uHicjZqsatlIdnkbPRr%2Fy%2BDj6V2Y%2BcLKlNfMp5TeIooAxL8Rkp1ErtK96VuKJ%2FEKZT%2Bj0az%2FNDuxAcFGYgsYOT%2FC8jXA5eqByOzjJ469evj%2BU2lXzUSPIRt7TCfWke2wF7aLWN2WGT5ykqEKSDWvM1GJPJkdHmFDhABh6K%2BS4sMUp6NN40lZmYNPmfotZVqxblfQEqiXWkluLKfVnmfqAy9RPRSGt8wcwdxB8M9epQS3AVImBtVeUghZBhc4DYzm6AYtpik%2BZq6h7GSLamXGHXqrTQNV5B3oDZY2E6Mh7eHlntIUfD50Bny4tNN9Qyu7oCdxJFwYDWn2%2BdHq6g5xG%2FbRve6lppv4E0IdpYYu%2Fi77jcKn8hkiRUZ4ZggvMrdf8ZqD2Bcru8Z9JkNq1UWN4Jk1qiQM%2BbEKdmpLYkWj%2Bf9%2FuuX%2FXgOJaZmbfaibs5QSmj0EadWJ%2FoWXdpdwF0H2c3xlEkQ2A25zu%2BQczmRW3XpYPml0JJ6d2gZe3IZlv0SI%2F4RM5DhMGeu0i%2BIoYFOVyCD5mROkI8xgVoI2gNUwvGqJe10nFkPQriSwbsMdsrOsgHYBs7ULZ1EF4FlVv0Vp0yJD1QJHyp35qXdi5ndWkj2KbJaDyoVWswxZKuvQY6pgHrorb%2FM%2BnMkbWYRlf89FsW4B41gU3tqiCYVSgNPMOm9YCinlbHTKCuF%2FY%2BpUrfo03wiZUrQxSIJ1c%2BO%2B%2FjuaVRoepp%2FMh1qfhgiO0UDkNTVjrrKR4oxW2QE8g7uuuVx8Y4s2iOP4EboFlSyalzzADTmQToWfTRuRP8LUDIspehyxshVgrzQ3YWk23VMUi5hTHL4Ob7hGEBC1geCznB1NtExlk%2B7qa4&X-Amz-Signature=25d73bbafb047091c2e394349adfd44b0322f28bfc2fc07248c72c8561064f31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCQP2LL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJ4rnuRsMdJRw26PBoUYuWe%2BoAmRkW9rfJUaE%2FdXdrGAiA9rjruoeb%2BuyG%2Bxjc8DZXhw%2BkFkpN6xqwxSt7UDdTyaiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwhwG4wqjgR%2FO7MMDKtwDs8o%2B86uHicjZqsatlIdnkbPRr%2Fy%2BDj6V2Y%2BcLKlNfMp5TeIooAxL8Rkp1ErtK96VuKJ%2FEKZT%2Bj0az%2FNDuxAcFGYgsYOT%2FC8jXA5eqByOzjJ469evj%2BU2lXzUSPIRt7TCfWke2wF7aLWN2WGT5ykqEKSDWvM1GJPJkdHmFDhABh6K%2BS4sMUp6NN40lZmYNPmfotZVqxblfQEqiXWkluLKfVnmfqAy9RPRSGt8wcwdxB8M9epQS3AVImBtVeUghZBhc4DYzm6AYtpik%2BZq6h7GSLamXGHXqrTQNV5B3oDZY2E6Mh7eHlntIUfD50Bny4tNN9Qyu7oCdxJFwYDWn2%2BdHq6g5xG%2FbRve6lppv4E0IdpYYu%2Fi77jcKn8hkiRUZ4ZggvMrdf8ZqD2Bcru8Z9JkNq1UWN4Jk1qiQM%2BbEKdmpLYkWj%2Bf9%2FuuX%2FXgOJaZmbfaibs5QSmj0EadWJ%2FoWXdpdwF0H2c3xlEkQ2A25zu%2BQczmRW3XpYPml0JJ6d2gZe3IZlv0SI%2F4RM5DhMGeu0i%2BIoYFOVyCD5mROkI8xgVoI2gNUwvGqJe10nFkPQriSwbsMdsrOsgHYBs7ULZ1EF4FlVv0Vp0yJD1QJHyp35qXdi5ndWkj2KbJaDyoVWswxZKuvQY6pgHrorb%2FM%2BnMkbWYRlf89FsW4B41gU3tqiCYVSgNPMOm9YCinlbHTKCuF%2FY%2BpUrfo03wiZUrQxSIJ1c%2BO%2B%2FjuaVRoepp%2FMh1qfhgiO0UDkNTVjrrKR4oxW2QE8g7uuuVx8Y4s2iOP4EboFlSyalzzADTmQToWfTRuRP8LUDIspehyxshVgrzQ3YWk23VMUi5hTHL4Ob7hGEBC1geCznB1NtExlk%2B7qa4&X-Amz-Signature=c1aca647db2e525f9d7fe343d55b6ecf78a5b221dfbb2d10f5a694c620c79d93&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QCQP2LL%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T180836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJ4rnuRsMdJRw26PBoUYuWe%2BoAmRkW9rfJUaE%2FdXdrGAiA9rjruoeb%2BuyG%2Bxjc8DZXhw%2BkFkpN6xqwxSt7UDdTyaiqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwhwG4wqjgR%2FO7MMDKtwDs8o%2B86uHicjZqsatlIdnkbPRr%2Fy%2BDj6V2Y%2BcLKlNfMp5TeIooAxL8Rkp1ErtK96VuKJ%2FEKZT%2Bj0az%2FNDuxAcFGYgsYOT%2FC8jXA5eqByOzjJ469evj%2BU2lXzUSPIRt7TCfWke2wF7aLWN2WGT5ykqEKSDWvM1GJPJkdHmFDhABh6K%2BS4sMUp6NN40lZmYNPmfotZVqxblfQEqiXWkluLKfVnmfqAy9RPRSGt8wcwdxB8M9epQS3AVImBtVeUghZBhc4DYzm6AYtpik%2BZq6h7GSLamXGHXqrTQNV5B3oDZY2E6Mh7eHlntIUfD50Bny4tNN9Qyu7oCdxJFwYDWn2%2BdHq6g5xG%2FbRve6lppv4E0IdpYYu%2Fi77jcKn8hkiRUZ4ZggvMrdf8ZqD2Bcru8Z9JkNq1UWN4Jk1qiQM%2BbEKdmpLYkWj%2Bf9%2FuuX%2FXgOJaZmbfaibs5QSmj0EadWJ%2FoWXdpdwF0H2c3xlEkQ2A25zu%2BQczmRW3XpYPml0JJ6d2gZe3IZlv0SI%2F4RM5DhMGeu0i%2BIoYFOVyCD5mROkI8xgVoI2gNUwvGqJe10nFkPQriSwbsMdsrOsgHYBs7ULZ1EF4FlVv0Vp0yJD1QJHyp35qXdi5ndWkj2KbJaDyoVWswxZKuvQY6pgHrorb%2FM%2BnMkbWYRlf89FsW4B41gU3tqiCYVSgNPMOm9YCinlbHTKCuF%2FY%2BpUrfo03wiZUrQxSIJ1c%2BO%2B%2FjuaVRoepp%2FMh1qfhgiO0UDkNTVjrrKR4oxW2QE8g7uuuVx8Y4s2iOP4EboFlSyalzzADTmQToWfTRuRP8LUDIspehyxshVgrzQ3YWk23VMUi5hTHL4Ob7hGEBC1geCznB1NtExlk%2B7qa4&X-Amz-Signature=ed42775319b41325417f4c700f82aae05d80ab7529c83e5018d51c25287680d6&X-Amz-SignedHeaders=host&x-id=GetObject)
