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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U733HWQ2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzbkLvk7mbGlW7TiQD9kSPnBPeTsmqSzPKAh8O91vvfAiEAp59IusTAkOUz1VdEi%2F%2BmgadjWdV6Vh%2BBmlb6UKzh6iIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIw97opmhKLa1SBDlCrcA34WISggfuyGvj7w40%2FR4HASRyd98SFvHKylRp40BIxiTrC7hgjdba82kyDQgLtZ1q9DKpgQBBbjkvVot0qbLI6Ppi0zZr5%2FvBJ5f5lwZGGtaaPcENSypZG%2FEvlgxjUhq5M6qW4lgbQP57Xades2lbwNZJuEQsYhLxB8NDMy13tKt6D3CyOhpQKFuoM0mELgBg7hd3QxNlWJtSIETyqS0dWdTcRQUg9k0CQnFsZF4QsV7BZz2mfyH1kmO1EYMzOzy309U87YBPSSqBrs6R1gY3J9eXDSpH%2Bff5bufP8DLzycVwkdsDWigc5Vr%2B8JEobAMox0xdChswLqGsHBkBp4F78b2aV3BcSD1timHogvRcP%2Fmbtlzg614M5ThN8kZyHvszpe%2FHm5b%2FkulOO8G6y9dWgFouRzKzlbmslT6PNML%2FZPOTQ%2BSNUQzrc4h%2BKCUuLGT5Lk2M%2FIHxJ8q%2Bv8pZuvD7i0QD6kwIc9bm1Akfx1b3ryhE3A1qom5NkP2I9ot9DZBAMvm%2FUlVOvTKRst95sqRHQ3i4%2FP%2BUgzi%2BAP9JhFemPZMyguL6HnlMxOPTtZyAUvzfNBanZ58p1BCFdLZ1u3kCmQrAM6dGLnjikRuM5GT8lih1ZkWZZBJ8xvQtcMMODSu78GOqUBdZ2dCQFkUdhiP%2Feo8fxxbba6786upUKSGqOoVHD7RmU%2BFynitQ99boXJa9ZXGRRctaGoCTsDJJ6p5fT0k7%2F8h1vZedGDfLAEvBCzx2mKNw%2BXjAQ6P0TMDamxAd9Bg%2FG6i2%2Fo0KOwjX1l%2Botq%2Bi9hdtvcHKR1uxSA5%2B8ZtzAMtXxMcHQektSE378W2KMLPVdnCF1gJjKCLDmGN6ZJv69Uu7NPucuj&X-Amz-Signature=4967e58f37efff9518b918d504e5df9474ec85b21211e29e787f8359eceb308a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U733HWQ2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzbkLvk7mbGlW7TiQD9kSPnBPeTsmqSzPKAh8O91vvfAiEAp59IusTAkOUz1VdEi%2F%2BmgadjWdV6Vh%2BBmlb6UKzh6iIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIw97opmhKLa1SBDlCrcA34WISggfuyGvj7w40%2FR4HASRyd98SFvHKylRp40BIxiTrC7hgjdba82kyDQgLtZ1q9DKpgQBBbjkvVot0qbLI6Ppi0zZr5%2FvBJ5f5lwZGGtaaPcENSypZG%2FEvlgxjUhq5M6qW4lgbQP57Xades2lbwNZJuEQsYhLxB8NDMy13tKt6D3CyOhpQKFuoM0mELgBg7hd3QxNlWJtSIETyqS0dWdTcRQUg9k0CQnFsZF4QsV7BZz2mfyH1kmO1EYMzOzy309U87YBPSSqBrs6R1gY3J9eXDSpH%2Bff5bufP8DLzycVwkdsDWigc5Vr%2B8JEobAMox0xdChswLqGsHBkBp4F78b2aV3BcSD1timHogvRcP%2Fmbtlzg614M5ThN8kZyHvszpe%2FHm5b%2FkulOO8G6y9dWgFouRzKzlbmslT6PNML%2FZPOTQ%2BSNUQzrc4h%2BKCUuLGT5Lk2M%2FIHxJ8q%2Bv8pZuvD7i0QD6kwIc9bm1Akfx1b3ryhE3A1qom5NkP2I9ot9DZBAMvm%2FUlVOvTKRst95sqRHQ3i4%2FP%2BUgzi%2BAP9JhFemPZMyguL6HnlMxOPTtZyAUvzfNBanZ58p1BCFdLZ1u3kCmQrAM6dGLnjikRuM5GT8lih1ZkWZZBJ8xvQtcMMODSu78GOqUBdZ2dCQFkUdhiP%2Feo8fxxbba6786upUKSGqOoVHD7RmU%2BFynitQ99boXJa9ZXGRRctaGoCTsDJJ6p5fT0k7%2F8h1vZedGDfLAEvBCzx2mKNw%2BXjAQ6P0TMDamxAd9Bg%2FG6i2%2Fo0KOwjX1l%2Botq%2Bi9hdtvcHKR1uxSA5%2B8ZtzAMtXxMcHQektSE378W2KMLPVdnCF1gJjKCLDmGN6ZJv69Uu7NPucuj&X-Amz-Signature=0c7dc0600e647071684d09ed96bdf72167c75ff563759114827351f9c308698a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U733HWQ2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzbkLvk7mbGlW7TiQD9kSPnBPeTsmqSzPKAh8O91vvfAiEAp59IusTAkOUz1VdEi%2F%2BmgadjWdV6Vh%2BBmlb6UKzh6iIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIw97opmhKLa1SBDlCrcA34WISggfuyGvj7w40%2FR4HASRyd98SFvHKylRp40BIxiTrC7hgjdba82kyDQgLtZ1q9DKpgQBBbjkvVot0qbLI6Ppi0zZr5%2FvBJ5f5lwZGGtaaPcENSypZG%2FEvlgxjUhq5M6qW4lgbQP57Xades2lbwNZJuEQsYhLxB8NDMy13tKt6D3CyOhpQKFuoM0mELgBg7hd3QxNlWJtSIETyqS0dWdTcRQUg9k0CQnFsZF4QsV7BZz2mfyH1kmO1EYMzOzy309U87YBPSSqBrs6R1gY3J9eXDSpH%2Bff5bufP8DLzycVwkdsDWigc5Vr%2B8JEobAMox0xdChswLqGsHBkBp4F78b2aV3BcSD1timHogvRcP%2Fmbtlzg614M5ThN8kZyHvszpe%2FHm5b%2FkulOO8G6y9dWgFouRzKzlbmslT6PNML%2FZPOTQ%2BSNUQzrc4h%2BKCUuLGT5Lk2M%2FIHxJ8q%2Bv8pZuvD7i0QD6kwIc9bm1Akfx1b3ryhE3A1qom5NkP2I9ot9DZBAMvm%2FUlVOvTKRst95sqRHQ3i4%2FP%2BUgzi%2BAP9JhFemPZMyguL6HnlMxOPTtZyAUvzfNBanZ58p1BCFdLZ1u3kCmQrAM6dGLnjikRuM5GT8lih1ZkWZZBJ8xvQtcMMODSu78GOqUBdZ2dCQFkUdhiP%2Feo8fxxbba6786upUKSGqOoVHD7RmU%2BFynitQ99boXJa9ZXGRRctaGoCTsDJJ6p5fT0k7%2F8h1vZedGDfLAEvBCzx2mKNw%2BXjAQ6P0TMDamxAd9Bg%2FG6i2%2Fo0KOwjX1l%2Botq%2Bi9hdtvcHKR1uxSA5%2B8ZtzAMtXxMcHQektSE378W2KMLPVdnCF1gJjKCLDmGN6ZJv69Uu7NPucuj&X-Amz-Signature=2daf13e7a2e0e2e0299b26577365ee992e021b9d6928a4febae65431542c98ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U733HWQ2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzbkLvk7mbGlW7TiQD9kSPnBPeTsmqSzPKAh8O91vvfAiEAp59IusTAkOUz1VdEi%2F%2BmgadjWdV6Vh%2BBmlb6UKzh6iIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIw97opmhKLa1SBDlCrcA34WISggfuyGvj7w40%2FR4HASRyd98SFvHKylRp40BIxiTrC7hgjdba82kyDQgLtZ1q9DKpgQBBbjkvVot0qbLI6Ppi0zZr5%2FvBJ5f5lwZGGtaaPcENSypZG%2FEvlgxjUhq5M6qW4lgbQP57Xades2lbwNZJuEQsYhLxB8NDMy13tKt6D3CyOhpQKFuoM0mELgBg7hd3QxNlWJtSIETyqS0dWdTcRQUg9k0CQnFsZF4QsV7BZz2mfyH1kmO1EYMzOzy309U87YBPSSqBrs6R1gY3J9eXDSpH%2Bff5bufP8DLzycVwkdsDWigc5Vr%2B8JEobAMox0xdChswLqGsHBkBp4F78b2aV3BcSD1timHogvRcP%2Fmbtlzg614M5ThN8kZyHvszpe%2FHm5b%2FkulOO8G6y9dWgFouRzKzlbmslT6PNML%2FZPOTQ%2BSNUQzrc4h%2BKCUuLGT5Lk2M%2FIHxJ8q%2Bv8pZuvD7i0QD6kwIc9bm1Akfx1b3ryhE3A1qom5NkP2I9ot9DZBAMvm%2FUlVOvTKRst95sqRHQ3i4%2FP%2BUgzi%2BAP9JhFemPZMyguL6HnlMxOPTtZyAUvzfNBanZ58p1BCFdLZ1u3kCmQrAM6dGLnjikRuM5GT8lih1ZkWZZBJ8xvQtcMMODSu78GOqUBdZ2dCQFkUdhiP%2Feo8fxxbba6786upUKSGqOoVHD7RmU%2BFynitQ99boXJa9ZXGRRctaGoCTsDJJ6p5fT0k7%2F8h1vZedGDfLAEvBCzx2mKNw%2BXjAQ6P0TMDamxAd9Bg%2FG6i2%2Fo0KOwjX1l%2Botq%2Bi9hdtvcHKR1uxSA5%2B8ZtzAMtXxMcHQektSE378W2KMLPVdnCF1gJjKCLDmGN6ZJv69Uu7NPucuj&X-Amz-Signature=3e0b7a79892a4f67881373079e74b37967bcbbdbc6b782e90cacc5582b134d49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U733HWQ2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzbkLvk7mbGlW7TiQD9kSPnBPeTsmqSzPKAh8O91vvfAiEAp59IusTAkOUz1VdEi%2F%2BmgadjWdV6Vh%2BBmlb6UKzh6iIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIw97opmhKLa1SBDlCrcA34WISggfuyGvj7w40%2FR4HASRyd98SFvHKylRp40BIxiTrC7hgjdba82kyDQgLtZ1q9DKpgQBBbjkvVot0qbLI6Ppi0zZr5%2FvBJ5f5lwZGGtaaPcENSypZG%2FEvlgxjUhq5M6qW4lgbQP57Xades2lbwNZJuEQsYhLxB8NDMy13tKt6D3CyOhpQKFuoM0mELgBg7hd3QxNlWJtSIETyqS0dWdTcRQUg9k0CQnFsZF4QsV7BZz2mfyH1kmO1EYMzOzy309U87YBPSSqBrs6R1gY3J9eXDSpH%2Bff5bufP8DLzycVwkdsDWigc5Vr%2B8JEobAMox0xdChswLqGsHBkBp4F78b2aV3BcSD1timHogvRcP%2Fmbtlzg614M5ThN8kZyHvszpe%2FHm5b%2FkulOO8G6y9dWgFouRzKzlbmslT6PNML%2FZPOTQ%2BSNUQzrc4h%2BKCUuLGT5Lk2M%2FIHxJ8q%2Bv8pZuvD7i0QD6kwIc9bm1Akfx1b3ryhE3A1qom5NkP2I9ot9DZBAMvm%2FUlVOvTKRst95sqRHQ3i4%2FP%2BUgzi%2BAP9JhFemPZMyguL6HnlMxOPTtZyAUvzfNBanZ58p1BCFdLZ1u3kCmQrAM6dGLnjikRuM5GT8lih1ZkWZZBJ8xvQtcMMODSu78GOqUBdZ2dCQFkUdhiP%2Feo8fxxbba6786upUKSGqOoVHD7RmU%2BFynitQ99boXJa9ZXGRRctaGoCTsDJJ6p5fT0k7%2F8h1vZedGDfLAEvBCzx2mKNw%2BXjAQ6P0TMDamxAd9Bg%2FG6i2%2Fo0KOwjX1l%2Botq%2Bi9hdtvcHKR1uxSA5%2B8ZtzAMtXxMcHQektSE378W2KMLPVdnCF1gJjKCLDmGN6ZJv69Uu7NPucuj&X-Amz-Signature=d35d4c15fd539ff90330f9416c1c9a63b89f948172db4606e19f4ffc65a5e6cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U733HWQ2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T200922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAzbkLvk7mbGlW7TiQD9kSPnBPeTsmqSzPKAh8O91vvfAiEAp59IusTAkOUz1VdEi%2F%2BmgadjWdV6Vh%2BBmlb6UKzh6iIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIw97opmhKLa1SBDlCrcA34WISggfuyGvj7w40%2FR4HASRyd98SFvHKylRp40BIxiTrC7hgjdba82kyDQgLtZ1q9DKpgQBBbjkvVot0qbLI6Ppi0zZr5%2FvBJ5f5lwZGGtaaPcENSypZG%2FEvlgxjUhq5M6qW4lgbQP57Xades2lbwNZJuEQsYhLxB8NDMy13tKt6D3CyOhpQKFuoM0mELgBg7hd3QxNlWJtSIETyqS0dWdTcRQUg9k0CQnFsZF4QsV7BZz2mfyH1kmO1EYMzOzy309U87YBPSSqBrs6R1gY3J9eXDSpH%2Bff5bufP8DLzycVwkdsDWigc5Vr%2B8JEobAMox0xdChswLqGsHBkBp4F78b2aV3BcSD1timHogvRcP%2Fmbtlzg614M5ThN8kZyHvszpe%2FHm5b%2FkulOO8G6y9dWgFouRzKzlbmslT6PNML%2FZPOTQ%2BSNUQzrc4h%2BKCUuLGT5Lk2M%2FIHxJ8q%2Bv8pZuvD7i0QD6kwIc9bm1Akfx1b3ryhE3A1qom5NkP2I9ot9DZBAMvm%2FUlVOvTKRst95sqRHQ3i4%2FP%2BUgzi%2BAP9JhFemPZMyguL6HnlMxOPTtZyAUvzfNBanZ58p1BCFdLZ1u3kCmQrAM6dGLnjikRuM5GT8lih1ZkWZZBJ8xvQtcMMODSu78GOqUBdZ2dCQFkUdhiP%2Feo8fxxbba6786upUKSGqOoVHD7RmU%2BFynitQ99boXJa9ZXGRRctaGoCTsDJJ6p5fT0k7%2F8h1vZedGDfLAEvBCzx2mKNw%2BXjAQ6P0TMDamxAd9Bg%2FG6i2%2Fo0KOwjX1l%2Botq%2Bi9hdtvcHKR1uxSA5%2B8ZtzAMtXxMcHQektSE378W2KMLPVdnCF1gJjKCLDmGN6ZJv69Uu7NPucuj&X-Amz-Signature=6d137961ad3909340e7c6394fb174bf6fafe71875d8cf416fd19181d4033d555&X-Amz-SignedHeaders=host&x-id=GetObject)
