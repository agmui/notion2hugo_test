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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXCOFIAS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUyqrAKGCzJlMUiaoB92JBsU4FYubgC8q9Qdqtst2dAIhAO33IzZnD%2BRKoe7PP2%2Ft7xcTj%2BcwyOm6g42ErH8cuji1KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnnN6HWc5X65dGbKoq3ANLd26qWxeIV%2BRXmR6I8GySuNqFNEpMaUd8WeCULY6SY5Flu%2BDvdi6AS2IEOkMtnypHnC%2Fp9eQqtsBuDWb%2Bsoz0KTukKoU4jHt1eqnyQSOTrJBx%2BB%2BPema6I87p3IYkh0DR90hbAdmFMz4BoHp1RMwk27bZk45vmyYrPhZyKElp8r6MuxJ4K%2FS9WWJu%2BQHxI9T4DhcXqljNpcUnDs8z73rGrEZb2G%2FkzT6u2ks8Vsxn7ZruTxyqqsqRhCY1MUym3yv%2BOLvkYkyO4DdklhJBnZnJVMSAUB5Wm33DOaeD58VdTh0ARGre7BcE4%2BwikpA%2FcOPSzth0Jplt5PSOFjSaGVIt8TI2TfVkm%2FPN8flwy2Nh62D7h6cOTBEmMErz18qOx6%2F2aTeKJO%2B3JG2WwHC%2FyZLuKUCfKJF1lNYzUZA0ne1dJ8L1RqOjQwSneSvlnS4vhN0U9DTM8SwZX6uycVd1P4kgU6heWZ0PCX512%2FqB%2Bht6ha9LrJJRStKgVdwur7dWC40FQWJWmD69O%2B6%2BuouFsKTUt0CWJYtvp9LyACZoFaavemA8L2%2Fm4MFf8XWFCvaAYvZU8mZAbwn0jlnBGQvxNjqcSTpPv1gqmeWZpFsvs0M%2F3%2Fc5X2Y07XbVgBTeVzCw0s%2FCBjqkAXC1Fdy2FEaPg%2BrdCN1nLZePzqxICTZ8TCSehdSBtz6HbAd87cRTW2nHA%2BrjzYw0U8KeD%2BF01AqOZMWcJZz4Lw%2BmzxLsVNAeIKtDCGkb%2B78wXsBhaUrHjAp%2F3X58Xd%2BAWsHibG8BRnrI5000sm2PI29gqzUQPdfAJA16Xp6snWAZbG36r2Hg03Gg4au25zFfMiHAtLPKbbLHqGAKR3ewS5m0cj%2BS&X-Amz-Signature=3685d8a62366a4c1287742a66b4b9f811f57db198075b62317f252240a64ae59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXCOFIAS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUyqrAKGCzJlMUiaoB92JBsU4FYubgC8q9Qdqtst2dAIhAO33IzZnD%2BRKoe7PP2%2Ft7xcTj%2BcwyOm6g42ErH8cuji1KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnnN6HWc5X65dGbKoq3ANLd26qWxeIV%2BRXmR6I8GySuNqFNEpMaUd8WeCULY6SY5Flu%2BDvdi6AS2IEOkMtnypHnC%2Fp9eQqtsBuDWb%2Bsoz0KTukKoU4jHt1eqnyQSOTrJBx%2BB%2BPema6I87p3IYkh0DR90hbAdmFMz4BoHp1RMwk27bZk45vmyYrPhZyKElp8r6MuxJ4K%2FS9WWJu%2BQHxI9T4DhcXqljNpcUnDs8z73rGrEZb2G%2FkzT6u2ks8Vsxn7ZruTxyqqsqRhCY1MUym3yv%2BOLvkYkyO4DdklhJBnZnJVMSAUB5Wm33DOaeD58VdTh0ARGre7BcE4%2BwikpA%2FcOPSzth0Jplt5PSOFjSaGVIt8TI2TfVkm%2FPN8flwy2Nh62D7h6cOTBEmMErz18qOx6%2F2aTeKJO%2B3JG2WwHC%2FyZLuKUCfKJF1lNYzUZA0ne1dJ8L1RqOjQwSneSvlnS4vhN0U9DTM8SwZX6uycVd1P4kgU6heWZ0PCX512%2FqB%2Bht6ha9LrJJRStKgVdwur7dWC40FQWJWmD69O%2B6%2BuouFsKTUt0CWJYtvp9LyACZoFaavemA8L2%2Fm4MFf8XWFCvaAYvZU8mZAbwn0jlnBGQvxNjqcSTpPv1gqmeWZpFsvs0M%2F3%2Fc5X2Y07XbVgBTeVzCw0s%2FCBjqkAXC1Fdy2FEaPg%2BrdCN1nLZePzqxICTZ8TCSehdSBtz6HbAd87cRTW2nHA%2BrjzYw0U8KeD%2BF01AqOZMWcJZz4Lw%2BmzxLsVNAeIKtDCGkb%2B78wXsBhaUrHjAp%2F3X58Xd%2BAWsHibG8BRnrI5000sm2PI29gqzUQPdfAJA16Xp6snWAZbG36r2Hg03Gg4au25zFfMiHAtLPKbbLHqGAKR3ewS5m0cj%2BS&X-Amz-Signature=ee5578e3b65300f031474b305720d974a12d7afb6a8bbfb9c09debb754eb959a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXCOFIAS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUyqrAKGCzJlMUiaoB92JBsU4FYubgC8q9Qdqtst2dAIhAO33IzZnD%2BRKoe7PP2%2Ft7xcTj%2BcwyOm6g42ErH8cuji1KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnnN6HWc5X65dGbKoq3ANLd26qWxeIV%2BRXmR6I8GySuNqFNEpMaUd8WeCULY6SY5Flu%2BDvdi6AS2IEOkMtnypHnC%2Fp9eQqtsBuDWb%2Bsoz0KTukKoU4jHt1eqnyQSOTrJBx%2BB%2BPema6I87p3IYkh0DR90hbAdmFMz4BoHp1RMwk27bZk45vmyYrPhZyKElp8r6MuxJ4K%2FS9WWJu%2BQHxI9T4DhcXqljNpcUnDs8z73rGrEZb2G%2FkzT6u2ks8Vsxn7ZruTxyqqsqRhCY1MUym3yv%2BOLvkYkyO4DdklhJBnZnJVMSAUB5Wm33DOaeD58VdTh0ARGre7BcE4%2BwikpA%2FcOPSzth0Jplt5PSOFjSaGVIt8TI2TfVkm%2FPN8flwy2Nh62D7h6cOTBEmMErz18qOx6%2F2aTeKJO%2B3JG2WwHC%2FyZLuKUCfKJF1lNYzUZA0ne1dJ8L1RqOjQwSneSvlnS4vhN0U9DTM8SwZX6uycVd1P4kgU6heWZ0PCX512%2FqB%2Bht6ha9LrJJRStKgVdwur7dWC40FQWJWmD69O%2B6%2BuouFsKTUt0CWJYtvp9LyACZoFaavemA8L2%2Fm4MFf8XWFCvaAYvZU8mZAbwn0jlnBGQvxNjqcSTpPv1gqmeWZpFsvs0M%2F3%2Fc5X2Y07XbVgBTeVzCw0s%2FCBjqkAXC1Fdy2FEaPg%2BrdCN1nLZePzqxICTZ8TCSehdSBtz6HbAd87cRTW2nHA%2BrjzYw0U8KeD%2BF01AqOZMWcJZz4Lw%2BmzxLsVNAeIKtDCGkb%2B78wXsBhaUrHjAp%2F3X58Xd%2BAWsHibG8BRnrI5000sm2PI29gqzUQPdfAJA16Xp6snWAZbG36r2Hg03Gg4au25zFfMiHAtLPKbbLHqGAKR3ewS5m0cj%2BS&X-Amz-Signature=f796266e20ba479645a440667b2d2daa5a32a4c3f661f5dfc1e4c30b606ecd21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXCOFIAS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUyqrAKGCzJlMUiaoB92JBsU4FYubgC8q9Qdqtst2dAIhAO33IzZnD%2BRKoe7PP2%2Ft7xcTj%2BcwyOm6g42ErH8cuji1KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnnN6HWc5X65dGbKoq3ANLd26qWxeIV%2BRXmR6I8GySuNqFNEpMaUd8WeCULY6SY5Flu%2BDvdi6AS2IEOkMtnypHnC%2Fp9eQqtsBuDWb%2Bsoz0KTukKoU4jHt1eqnyQSOTrJBx%2BB%2BPema6I87p3IYkh0DR90hbAdmFMz4BoHp1RMwk27bZk45vmyYrPhZyKElp8r6MuxJ4K%2FS9WWJu%2BQHxI9T4DhcXqljNpcUnDs8z73rGrEZb2G%2FkzT6u2ks8Vsxn7ZruTxyqqsqRhCY1MUym3yv%2BOLvkYkyO4DdklhJBnZnJVMSAUB5Wm33DOaeD58VdTh0ARGre7BcE4%2BwikpA%2FcOPSzth0Jplt5PSOFjSaGVIt8TI2TfVkm%2FPN8flwy2Nh62D7h6cOTBEmMErz18qOx6%2F2aTeKJO%2B3JG2WwHC%2FyZLuKUCfKJF1lNYzUZA0ne1dJ8L1RqOjQwSneSvlnS4vhN0U9DTM8SwZX6uycVd1P4kgU6heWZ0PCX512%2FqB%2Bht6ha9LrJJRStKgVdwur7dWC40FQWJWmD69O%2B6%2BuouFsKTUt0CWJYtvp9LyACZoFaavemA8L2%2Fm4MFf8XWFCvaAYvZU8mZAbwn0jlnBGQvxNjqcSTpPv1gqmeWZpFsvs0M%2F3%2Fc5X2Y07XbVgBTeVzCw0s%2FCBjqkAXC1Fdy2FEaPg%2BrdCN1nLZePzqxICTZ8TCSehdSBtz6HbAd87cRTW2nHA%2BrjzYw0U8KeD%2BF01AqOZMWcJZz4Lw%2BmzxLsVNAeIKtDCGkb%2B78wXsBhaUrHjAp%2F3X58Xd%2BAWsHibG8BRnrI5000sm2PI29gqzUQPdfAJA16Xp6snWAZbG36r2Hg03Gg4au25zFfMiHAtLPKbbLHqGAKR3ewS5m0cj%2BS&X-Amz-Signature=9d8e5f4355cf41abf0d322e1b107b225ce3bf2b4535163150b92645565f8e601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXCOFIAS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUyqrAKGCzJlMUiaoB92JBsU4FYubgC8q9Qdqtst2dAIhAO33IzZnD%2BRKoe7PP2%2Ft7xcTj%2BcwyOm6g42ErH8cuji1KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnnN6HWc5X65dGbKoq3ANLd26qWxeIV%2BRXmR6I8GySuNqFNEpMaUd8WeCULY6SY5Flu%2BDvdi6AS2IEOkMtnypHnC%2Fp9eQqtsBuDWb%2Bsoz0KTukKoU4jHt1eqnyQSOTrJBx%2BB%2BPema6I87p3IYkh0DR90hbAdmFMz4BoHp1RMwk27bZk45vmyYrPhZyKElp8r6MuxJ4K%2FS9WWJu%2BQHxI9T4DhcXqljNpcUnDs8z73rGrEZb2G%2FkzT6u2ks8Vsxn7ZruTxyqqsqRhCY1MUym3yv%2BOLvkYkyO4DdklhJBnZnJVMSAUB5Wm33DOaeD58VdTh0ARGre7BcE4%2BwikpA%2FcOPSzth0Jplt5PSOFjSaGVIt8TI2TfVkm%2FPN8flwy2Nh62D7h6cOTBEmMErz18qOx6%2F2aTeKJO%2B3JG2WwHC%2FyZLuKUCfKJF1lNYzUZA0ne1dJ8L1RqOjQwSneSvlnS4vhN0U9DTM8SwZX6uycVd1P4kgU6heWZ0PCX512%2FqB%2Bht6ha9LrJJRStKgVdwur7dWC40FQWJWmD69O%2B6%2BuouFsKTUt0CWJYtvp9LyACZoFaavemA8L2%2Fm4MFf8XWFCvaAYvZU8mZAbwn0jlnBGQvxNjqcSTpPv1gqmeWZpFsvs0M%2F3%2Fc5X2Y07XbVgBTeVzCw0s%2FCBjqkAXC1Fdy2FEaPg%2BrdCN1nLZePzqxICTZ8TCSehdSBtz6HbAd87cRTW2nHA%2BrjzYw0U8KeD%2BF01AqOZMWcJZz4Lw%2BmzxLsVNAeIKtDCGkb%2B78wXsBhaUrHjAp%2F3X58Xd%2BAWsHibG8BRnrI5000sm2PI29gqzUQPdfAJA16Xp6snWAZbG36r2Hg03Gg4au25zFfMiHAtLPKbbLHqGAKR3ewS5m0cj%2BS&X-Amz-Signature=78371c0143e524f08cab40f63ccb97b973f8ff4a0b98ff4b613fc345f5c6f6f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXCOFIAS%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T110830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOUyqrAKGCzJlMUiaoB92JBsU4FYubgC8q9Qdqtst2dAIhAO33IzZnD%2BRKoe7PP2%2Ft7xcTj%2BcwyOm6g42ErH8cuji1KogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnnN6HWc5X65dGbKoq3ANLd26qWxeIV%2BRXmR6I8GySuNqFNEpMaUd8WeCULY6SY5Flu%2BDvdi6AS2IEOkMtnypHnC%2Fp9eQqtsBuDWb%2Bsoz0KTukKoU4jHt1eqnyQSOTrJBx%2BB%2BPema6I87p3IYkh0DR90hbAdmFMz4BoHp1RMwk27bZk45vmyYrPhZyKElp8r6MuxJ4K%2FS9WWJu%2BQHxI9T4DhcXqljNpcUnDs8z73rGrEZb2G%2FkzT6u2ks8Vsxn7ZruTxyqqsqRhCY1MUym3yv%2BOLvkYkyO4DdklhJBnZnJVMSAUB5Wm33DOaeD58VdTh0ARGre7BcE4%2BwikpA%2FcOPSzth0Jplt5PSOFjSaGVIt8TI2TfVkm%2FPN8flwy2Nh62D7h6cOTBEmMErz18qOx6%2F2aTeKJO%2B3JG2WwHC%2FyZLuKUCfKJF1lNYzUZA0ne1dJ8L1RqOjQwSneSvlnS4vhN0U9DTM8SwZX6uycVd1P4kgU6heWZ0PCX512%2FqB%2Bht6ha9LrJJRStKgVdwur7dWC40FQWJWmD69O%2B6%2BuouFsKTUt0CWJYtvp9LyACZoFaavemA8L2%2Fm4MFf8XWFCvaAYvZU8mZAbwn0jlnBGQvxNjqcSTpPv1gqmeWZpFsvs0M%2F3%2Fc5X2Y07XbVgBTeVzCw0s%2FCBjqkAXC1Fdy2FEaPg%2BrdCN1nLZePzqxICTZ8TCSehdSBtz6HbAd87cRTW2nHA%2BrjzYw0U8KeD%2BF01AqOZMWcJZz4Lw%2BmzxLsVNAeIKtDCGkb%2B78wXsBhaUrHjAp%2F3X58Xd%2BAWsHibG8BRnrI5000sm2PI29gqzUQPdfAJA16Xp6snWAZbG36r2Hg03Gg4au25zFfMiHAtLPKbbLHqGAKR3ewS5m0cj%2BS&X-Amz-Signature=37e6a1ceca44a1203a5d738b23f9273cd4fdad1bd6dd3f3002755654863ccee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
