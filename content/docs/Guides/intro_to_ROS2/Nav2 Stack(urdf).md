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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q45CCBKF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQoc%2BG2gJbBGHT4xDBDlYInJCYC7x3pdtO1PnGrt1LTwIgNpGSW9aC48WZY0JGwS9maopP4JJbDiTjveFm%2FvDSZWcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKW5OErc8%2FgUDZiNgCrcA1cQTsceL29izFWz9uCi6PsfRZW0igVWBYxMiP7zV%2BB9hg1UZ379cRmaQA%2BspNBYpDpoQabPiEXskFdzv6%2BNCo%2BOao89lcM%2FRrLHeZQXQPpeUHW2%2FYM94MEaBYKgUNxv0BgQS7wgz8xyqDUwhHJ1P%2BCqGZ4qXtI93TOK9zcEmNBJQRVi2p4x9O985bv02Wg7jjbBIAYvBu6D55PBtWhdDBih3ZEOth%2By%2Fx2Yav6D%2Fm1EL23DvDL75t1tOy%2FQ7hARAqbD9seDFkH1znEBzuE%2BNUCDeB1Yp%2BnCxktHpXV13sOjwXBQ9dqcE4OJA2bIdc4ZTZT417UhIoABBTet%2F7kwe2BjwFlW%2FUCGs1XfSE8bq4mvbDZwAMl1l10lT416Z1jDjOmDeSQ8UGgA3VAsBlRKMkuMNPthO3i0jCAHgrL0oCMEQqkW8O6n66BB2igljDcTetq9UKocqKWcVCcjAkOb51RpOLtiQtCwbrXu%2BbraoISgAx4jnVZUWhRe69UYVA9AcrQcB%2FzFud6uvJ97pOP3MNHyksIe0mY4G%2BQHpxMt2H0Dx37cCRzr0qFtEum3R3Zr0yyrmRChO9tm%2FApN%2B4g9Qnlvhvr9Fbwzdp81Wfr1eSfCpjvOvdkw26uOAcJUMMLB4r4GOqUBKGb08v3jG6%2F%2B5emlveHj1F1ee%2BIZOksRcbMMntalM4G%2FznTkIBJyW9XZPw1jCz4RIVW3FcNskPEUv9HTggumUgN%2BM2pxnLPeVj0DrRLLSggU2MSBUbIOei1VKW%2BZ0gJla0KFarAu0pdVCSd35YzO9%2Bsa6b9gTfu6O3XsX%2BcDe05NWYtbqKP3U53VLi0%2FoZbztlsyxY%2F2W4UMOi8pocSAsLisHEYC&X-Amz-Signature=b03b2f0a9f0de05bffdd41e744811b98329547e851e217539399284a99c56366&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q45CCBKF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQoc%2BG2gJbBGHT4xDBDlYInJCYC7x3pdtO1PnGrt1LTwIgNpGSW9aC48WZY0JGwS9maopP4JJbDiTjveFm%2FvDSZWcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKW5OErc8%2FgUDZiNgCrcA1cQTsceL29izFWz9uCi6PsfRZW0igVWBYxMiP7zV%2BB9hg1UZ379cRmaQA%2BspNBYpDpoQabPiEXskFdzv6%2BNCo%2BOao89lcM%2FRrLHeZQXQPpeUHW2%2FYM94MEaBYKgUNxv0BgQS7wgz8xyqDUwhHJ1P%2BCqGZ4qXtI93TOK9zcEmNBJQRVi2p4x9O985bv02Wg7jjbBIAYvBu6D55PBtWhdDBih3ZEOth%2By%2Fx2Yav6D%2Fm1EL23DvDL75t1tOy%2FQ7hARAqbD9seDFkH1znEBzuE%2BNUCDeB1Yp%2BnCxktHpXV13sOjwXBQ9dqcE4OJA2bIdc4ZTZT417UhIoABBTet%2F7kwe2BjwFlW%2FUCGs1XfSE8bq4mvbDZwAMl1l10lT416Z1jDjOmDeSQ8UGgA3VAsBlRKMkuMNPthO3i0jCAHgrL0oCMEQqkW8O6n66BB2igljDcTetq9UKocqKWcVCcjAkOb51RpOLtiQtCwbrXu%2BbraoISgAx4jnVZUWhRe69UYVA9AcrQcB%2FzFud6uvJ97pOP3MNHyksIe0mY4G%2BQHpxMt2H0Dx37cCRzr0qFtEum3R3Zr0yyrmRChO9tm%2FApN%2B4g9Qnlvhvr9Fbwzdp81Wfr1eSfCpjvOvdkw26uOAcJUMMLB4r4GOqUBKGb08v3jG6%2F%2B5emlveHj1F1ee%2BIZOksRcbMMntalM4G%2FznTkIBJyW9XZPw1jCz4RIVW3FcNskPEUv9HTggumUgN%2BM2pxnLPeVj0DrRLLSggU2MSBUbIOei1VKW%2BZ0gJla0KFarAu0pdVCSd35YzO9%2Bsa6b9gTfu6O3XsX%2BcDe05NWYtbqKP3U53VLi0%2FoZbztlsyxY%2F2W4UMOi8pocSAsLisHEYC&X-Amz-Signature=607456ac446a1df7e851f62eba3aaafac0a210ba30ac00e6199013e2b2be395c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q45CCBKF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQoc%2BG2gJbBGHT4xDBDlYInJCYC7x3pdtO1PnGrt1LTwIgNpGSW9aC48WZY0JGwS9maopP4JJbDiTjveFm%2FvDSZWcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKW5OErc8%2FgUDZiNgCrcA1cQTsceL29izFWz9uCi6PsfRZW0igVWBYxMiP7zV%2BB9hg1UZ379cRmaQA%2BspNBYpDpoQabPiEXskFdzv6%2BNCo%2BOao89lcM%2FRrLHeZQXQPpeUHW2%2FYM94MEaBYKgUNxv0BgQS7wgz8xyqDUwhHJ1P%2BCqGZ4qXtI93TOK9zcEmNBJQRVi2p4x9O985bv02Wg7jjbBIAYvBu6D55PBtWhdDBih3ZEOth%2By%2Fx2Yav6D%2Fm1EL23DvDL75t1tOy%2FQ7hARAqbD9seDFkH1znEBzuE%2BNUCDeB1Yp%2BnCxktHpXV13sOjwXBQ9dqcE4OJA2bIdc4ZTZT417UhIoABBTet%2F7kwe2BjwFlW%2FUCGs1XfSE8bq4mvbDZwAMl1l10lT416Z1jDjOmDeSQ8UGgA3VAsBlRKMkuMNPthO3i0jCAHgrL0oCMEQqkW8O6n66BB2igljDcTetq9UKocqKWcVCcjAkOb51RpOLtiQtCwbrXu%2BbraoISgAx4jnVZUWhRe69UYVA9AcrQcB%2FzFud6uvJ97pOP3MNHyksIe0mY4G%2BQHpxMt2H0Dx37cCRzr0qFtEum3R3Zr0yyrmRChO9tm%2FApN%2B4g9Qnlvhvr9Fbwzdp81Wfr1eSfCpjvOvdkw26uOAcJUMMLB4r4GOqUBKGb08v3jG6%2F%2B5emlveHj1F1ee%2BIZOksRcbMMntalM4G%2FznTkIBJyW9XZPw1jCz4RIVW3FcNskPEUv9HTggumUgN%2BM2pxnLPeVj0DrRLLSggU2MSBUbIOei1VKW%2BZ0gJla0KFarAu0pdVCSd35YzO9%2Bsa6b9gTfu6O3XsX%2BcDe05NWYtbqKP3U53VLi0%2FoZbztlsyxY%2F2W4UMOi8pocSAsLisHEYC&X-Amz-Signature=8f6d97a00375b1126eca0d033c25bb991a634c621f067499b55a8384dbe7af6f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q45CCBKF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQoc%2BG2gJbBGHT4xDBDlYInJCYC7x3pdtO1PnGrt1LTwIgNpGSW9aC48WZY0JGwS9maopP4JJbDiTjveFm%2FvDSZWcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKW5OErc8%2FgUDZiNgCrcA1cQTsceL29izFWz9uCi6PsfRZW0igVWBYxMiP7zV%2BB9hg1UZ379cRmaQA%2BspNBYpDpoQabPiEXskFdzv6%2BNCo%2BOao89lcM%2FRrLHeZQXQPpeUHW2%2FYM94MEaBYKgUNxv0BgQS7wgz8xyqDUwhHJ1P%2BCqGZ4qXtI93TOK9zcEmNBJQRVi2p4x9O985bv02Wg7jjbBIAYvBu6D55PBtWhdDBih3ZEOth%2By%2Fx2Yav6D%2Fm1EL23DvDL75t1tOy%2FQ7hARAqbD9seDFkH1znEBzuE%2BNUCDeB1Yp%2BnCxktHpXV13sOjwXBQ9dqcE4OJA2bIdc4ZTZT417UhIoABBTet%2F7kwe2BjwFlW%2FUCGs1XfSE8bq4mvbDZwAMl1l10lT416Z1jDjOmDeSQ8UGgA3VAsBlRKMkuMNPthO3i0jCAHgrL0oCMEQqkW8O6n66BB2igljDcTetq9UKocqKWcVCcjAkOb51RpOLtiQtCwbrXu%2BbraoISgAx4jnVZUWhRe69UYVA9AcrQcB%2FzFud6uvJ97pOP3MNHyksIe0mY4G%2BQHpxMt2H0Dx37cCRzr0qFtEum3R3Zr0yyrmRChO9tm%2FApN%2B4g9Qnlvhvr9Fbwzdp81Wfr1eSfCpjvOvdkw26uOAcJUMMLB4r4GOqUBKGb08v3jG6%2F%2B5emlveHj1F1ee%2BIZOksRcbMMntalM4G%2FznTkIBJyW9XZPw1jCz4RIVW3FcNskPEUv9HTggumUgN%2BM2pxnLPeVj0DrRLLSggU2MSBUbIOei1VKW%2BZ0gJla0KFarAu0pdVCSd35YzO9%2Bsa6b9gTfu6O3XsX%2BcDe05NWYtbqKP3U53VLi0%2FoZbztlsyxY%2F2W4UMOi8pocSAsLisHEYC&X-Amz-Signature=0e37712e82eb196c95039563f94a9e83a3595776ad370798964abcaccea4bb4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q45CCBKF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQoc%2BG2gJbBGHT4xDBDlYInJCYC7x3pdtO1PnGrt1LTwIgNpGSW9aC48WZY0JGwS9maopP4JJbDiTjveFm%2FvDSZWcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKW5OErc8%2FgUDZiNgCrcA1cQTsceL29izFWz9uCi6PsfRZW0igVWBYxMiP7zV%2BB9hg1UZ379cRmaQA%2BspNBYpDpoQabPiEXskFdzv6%2BNCo%2BOao89lcM%2FRrLHeZQXQPpeUHW2%2FYM94MEaBYKgUNxv0BgQS7wgz8xyqDUwhHJ1P%2BCqGZ4qXtI93TOK9zcEmNBJQRVi2p4x9O985bv02Wg7jjbBIAYvBu6D55PBtWhdDBih3ZEOth%2By%2Fx2Yav6D%2Fm1EL23DvDL75t1tOy%2FQ7hARAqbD9seDFkH1znEBzuE%2BNUCDeB1Yp%2BnCxktHpXV13sOjwXBQ9dqcE4OJA2bIdc4ZTZT417UhIoABBTet%2F7kwe2BjwFlW%2FUCGs1XfSE8bq4mvbDZwAMl1l10lT416Z1jDjOmDeSQ8UGgA3VAsBlRKMkuMNPthO3i0jCAHgrL0oCMEQqkW8O6n66BB2igljDcTetq9UKocqKWcVCcjAkOb51RpOLtiQtCwbrXu%2BbraoISgAx4jnVZUWhRe69UYVA9AcrQcB%2FzFud6uvJ97pOP3MNHyksIe0mY4G%2BQHpxMt2H0Dx37cCRzr0qFtEum3R3Zr0yyrmRChO9tm%2FApN%2B4g9Qnlvhvr9Fbwzdp81Wfr1eSfCpjvOvdkw26uOAcJUMMLB4r4GOqUBKGb08v3jG6%2F%2B5emlveHj1F1ee%2BIZOksRcbMMntalM4G%2FznTkIBJyW9XZPw1jCz4RIVW3FcNskPEUv9HTggumUgN%2BM2pxnLPeVj0DrRLLSggU2MSBUbIOei1VKW%2BZ0gJla0KFarAu0pdVCSd35YzO9%2Bsa6b9gTfu6O3XsX%2BcDe05NWYtbqKP3U53VLi0%2FoZbztlsyxY%2F2W4UMOi8pocSAsLisHEYC&X-Amz-Signature=cc624ef103360fa640afda97accff402282cbd6a015642fccfd8643bcb11c159&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q45CCBKF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQoc%2BG2gJbBGHT4xDBDlYInJCYC7x3pdtO1PnGrt1LTwIgNpGSW9aC48WZY0JGwS9maopP4JJbDiTjveFm%2FvDSZWcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKW5OErc8%2FgUDZiNgCrcA1cQTsceL29izFWz9uCi6PsfRZW0igVWBYxMiP7zV%2BB9hg1UZ379cRmaQA%2BspNBYpDpoQabPiEXskFdzv6%2BNCo%2BOao89lcM%2FRrLHeZQXQPpeUHW2%2FYM94MEaBYKgUNxv0BgQS7wgz8xyqDUwhHJ1P%2BCqGZ4qXtI93TOK9zcEmNBJQRVi2p4x9O985bv02Wg7jjbBIAYvBu6D55PBtWhdDBih3ZEOth%2By%2Fx2Yav6D%2Fm1EL23DvDL75t1tOy%2FQ7hARAqbD9seDFkH1znEBzuE%2BNUCDeB1Yp%2BnCxktHpXV13sOjwXBQ9dqcE4OJA2bIdc4ZTZT417UhIoABBTet%2F7kwe2BjwFlW%2FUCGs1XfSE8bq4mvbDZwAMl1l10lT416Z1jDjOmDeSQ8UGgA3VAsBlRKMkuMNPthO3i0jCAHgrL0oCMEQqkW8O6n66BB2igljDcTetq9UKocqKWcVCcjAkOb51RpOLtiQtCwbrXu%2BbraoISgAx4jnVZUWhRe69UYVA9AcrQcB%2FzFud6uvJ97pOP3MNHyksIe0mY4G%2BQHpxMt2H0Dx37cCRzr0qFtEum3R3Zr0yyrmRChO9tm%2FApN%2B4g9Qnlvhvr9Fbwzdp81Wfr1eSfCpjvOvdkw26uOAcJUMMLB4r4GOqUBKGb08v3jG6%2F%2B5emlveHj1F1ee%2BIZOksRcbMMntalM4G%2FznTkIBJyW9XZPw1jCz4RIVW3FcNskPEUv9HTggumUgN%2BM2pxnLPeVj0DrRLLSggU2MSBUbIOei1VKW%2BZ0gJla0KFarAu0pdVCSd35YzO9%2Bsa6b9gTfu6O3XsX%2BcDe05NWYtbqKP3U53VLi0%2FoZbztlsyxY%2F2W4UMOi8pocSAsLisHEYC&X-Amz-Signature=733ff9621389714ba71a291c3c8c111b1e0570f742f5cac65db84e53dbee9840&X-Amz-SignedHeaders=host&x-id=GetObject)
