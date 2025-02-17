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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOKU3PJN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDUmzQ1KeFxY%2FJS8dpcVBKk%2F4LHjohO4rcx8d0QStgaiAiA%2FqvQKPS2zzUmujpIfVCMO61JBJFk0cj3%2BqirIet%2Ba8yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMR4rFycp0GfKpi0qmKtwDSETqzuv7o5MFei40yV%2FEc8BUrFj3ZQenhzTUFBv8tfzTLmoR02q1qgtrXuH62PwaEwWwhqkPO72WDDSUW0b6JeXS1v7iXScxv8KH%2B6QLaV1jgfzx1AdSE0N0Ql9BgPiDPoksGCSHdfzZhCpkMt2t0p4%2BSveoJ1yBbcAEe%2FKhtUTcuUj1W926xXUIp1aUa9XBNBfDsInT%2B5Bko9KtDtGoQGd%2F%2F1l2nekwgEQ6CxV62I5DmBZo5oaIL4bZNmPIkjFrgqSPVmO0SD%2F27qynDotTlbAWdYH5WweaEdKTrFQ6vZ16XF2isTHfcbLl%2Fkoc7PPmlKCA90Jmdn9d1WIP5KvFL3kmaB2G6Jm8jQ2ANlQg7RRYmwa7SaGayUwZTk1lxsa4%2FF%2FmFSoAxr5ZcEGqhyzoTkyhQXrkp%2FXQw1KgpdIELXqM7C7axN1CfjaHhaZozqVLvUXsqF0cWNYGO1UWxvbBiFTog%2Brlk8boo6jtJNQEETYeNI2ahcaEcteXxyBK9kDdtSNYVC4HkssxxR%2FU0Gs3TH%2BZZCa8QdMzdNIhz5l8unLfTBpjjIFlLLObiCIrBNCN2HDcFiflVsnrh%2BCRTEhaUDV9vH5YVgX07rEMWJzJ%2BMExDVMjiKgJhC6iRegw4fnMvQY6pgETPVQr%2FCGGoaGSox8kEq%2FcOb6%2FZq5EnVPOazct0LgXW5N0yCnlkqjYBxWf1zPPNRxCxOWFFriQxtiO%2FxgVpT6vfYoYzMfD9ibX6RFGil6iVnnRKSN26RtWTuDLe3g101wf6TWiJtdd11JOPcB07EtKDeuXYZO99mZVGZFviK6%2FdSUF8F5Ci5w4%2FYnI1JWBVe3sKOB9Ztd0iKvm1f2%2B%2Fk2cqIgi6bs2&X-Amz-Signature=7d93e990865be32e8bdeb285d745dc2218de86f3d3516ab2e92a11734abd9453&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOKU3PJN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDUmzQ1KeFxY%2FJS8dpcVBKk%2F4LHjohO4rcx8d0QStgaiAiA%2FqvQKPS2zzUmujpIfVCMO61JBJFk0cj3%2BqirIet%2Ba8yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMR4rFycp0GfKpi0qmKtwDSETqzuv7o5MFei40yV%2FEc8BUrFj3ZQenhzTUFBv8tfzTLmoR02q1qgtrXuH62PwaEwWwhqkPO72WDDSUW0b6JeXS1v7iXScxv8KH%2B6QLaV1jgfzx1AdSE0N0Ql9BgPiDPoksGCSHdfzZhCpkMt2t0p4%2BSveoJ1yBbcAEe%2FKhtUTcuUj1W926xXUIp1aUa9XBNBfDsInT%2B5Bko9KtDtGoQGd%2F%2F1l2nekwgEQ6CxV62I5DmBZo5oaIL4bZNmPIkjFrgqSPVmO0SD%2F27qynDotTlbAWdYH5WweaEdKTrFQ6vZ16XF2isTHfcbLl%2Fkoc7PPmlKCA90Jmdn9d1WIP5KvFL3kmaB2G6Jm8jQ2ANlQg7RRYmwa7SaGayUwZTk1lxsa4%2FF%2FmFSoAxr5ZcEGqhyzoTkyhQXrkp%2FXQw1KgpdIELXqM7C7axN1CfjaHhaZozqVLvUXsqF0cWNYGO1UWxvbBiFTog%2Brlk8boo6jtJNQEETYeNI2ahcaEcteXxyBK9kDdtSNYVC4HkssxxR%2FU0Gs3TH%2BZZCa8QdMzdNIhz5l8unLfTBpjjIFlLLObiCIrBNCN2HDcFiflVsnrh%2BCRTEhaUDV9vH5YVgX07rEMWJzJ%2BMExDVMjiKgJhC6iRegw4fnMvQY6pgETPVQr%2FCGGoaGSox8kEq%2FcOb6%2FZq5EnVPOazct0LgXW5N0yCnlkqjYBxWf1zPPNRxCxOWFFriQxtiO%2FxgVpT6vfYoYzMfD9ibX6RFGil6iVnnRKSN26RtWTuDLe3g101wf6TWiJtdd11JOPcB07EtKDeuXYZO99mZVGZFviK6%2FdSUF8F5Ci5w4%2FYnI1JWBVe3sKOB9Ztd0iKvm1f2%2B%2Fk2cqIgi6bs2&X-Amz-Signature=ffe0aef01fc0fe36504b9bd5cc8f0210235590c0bb2332c26a5b559d72268985&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOKU3PJN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDUmzQ1KeFxY%2FJS8dpcVBKk%2F4LHjohO4rcx8d0QStgaiAiA%2FqvQKPS2zzUmujpIfVCMO61JBJFk0cj3%2BqirIet%2Ba8yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMR4rFycp0GfKpi0qmKtwDSETqzuv7o5MFei40yV%2FEc8BUrFj3ZQenhzTUFBv8tfzTLmoR02q1qgtrXuH62PwaEwWwhqkPO72WDDSUW0b6JeXS1v7iXScxv8KH%2B6QLaV1jgfzx1AdSE0N0Ql9BgPiDPoksGCSHdfzZhCpkMt2t0p4%2BSveoJ1yBbcAEe%2FKhtUTcuUj1W926xXUIp1aUa9XBNBfDsInT%2B5Bko9KtDtGoQGd%2F%2F1l2nekwgEQ6CxV62I5DmBZo5oaIL4bZNmPIkjFrgqSPVmO0SD%2F27qynDotTlbAWdYH5WweaEdKTrFQ6vZ16XF2isTHfcbLl%2Fkoc7PPmlKCA90Jmdn9d1WIP5KvFL3kmaB2G6Jm8jQ2ANlQg7RRYmwa7SaGayUwZTk1lxsa4%2FF%2FmFSoAxr5ZcEGqhyzoTkyhQXrkp%2FXQw1KgpdIELXqM7C7axN1CfjaHhaZozqVLvUXsqF0cWNYGO1UWxvbBiFTog%2Brlk8boo6jtJNQEETYeNI2ahcaEcteXxyBK9kDdtSNYVC4HkssxxR%2FU0Gs3TH%2BZZCa8QdMzdNIhz5l8unLfTBpjjIFlLLObiCIrBNCN2HDcFiflVsnrh%2BCRTEhaUDV9vH5YVgX07rEMWJzJ%2BMExDVMjiKgJhC6iRegw4fnMvQY6pgETPVQr%2FCGGoaGSox8kEq%2FcOb6%2FZq5EnVPOazct0LgXW5N0yCnlkqjYBxWf1zPPNRxCxOWFFriQxtiO%2FxgVpT6vfYoYzMfD9ibX6RFGil6iVnnRKSN26RtWTuDLe3g101wf6TWiJtdd11JOPcB07EtKDeuXYZO99mZVGZFviK6%2FdSUF8F5Ci5w4%2FYnI1JWBVe3sKOB9Ztd0iKvm1f2%2B%2Fk2cqIgi6bs2&X-Amz-Signature=7c21afc4ea90487015bc3a108fbd81bdf4085f016535cf57cbfacc7aeebec8b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOKU3PJN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDUmzQ1KeFxY%2FJS8dpcVBKk%2F4LHjohO4rcx8d0QStgaiAiA%2FqvQKPS2zzUmujpIfVCMO61JBJFk0cj3%2BqirIet%2Ba8yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMR4rFycp0GfKpi0qmKtwDSETqzuv7o5MFei40yV%2FEc8BUrFj3ZQenhzTUFBv8tfzTLmoR02q1qgtrXuH62PwaEwWwhqkPO72WDDSUW0b6JeXS1v7iXScxv8KH%2B6QLaV1jgfzx1AdSE0N0Ql9BgPiDPoksGCSHdfzZhCpkMt2t0p4%2BSveoJ1yBbcAEe%2FKhtUTcuUj1W926xXUIp1aUa9XBNBfDsInT%2B5Bko9KtDtGoQGd%2F%2F1l2nekwgEQ6CxV62I5DmBZo5oaIL4bZNmPIkjFrgqSPVmO0SD%2F27qynDotTlbAWdYH5WweaEdKTrFQ6vZ16XF2isTHfcbLl%2Fkoc7PPmlKCA90Jmdn9d1WIP5KvFL3kmaB2G6Jm8jQ2ANlQg7RRYmwa7SaGayUwZTk1lxsa4%2FF%2FmFSoAxr5ZcEGqhyzoTkyhQXrkp%2FXQw1KgpdIELXqM7C7axN1CfjaHhaZozqVLvUXsqF0cWNYGO1UWxvbBiFTog%2Brlk8boo6jtJNQEETYeNI2ahcaEcteXxyBK9kDdtSNYVC4HkssxxR%2FU0Gs3TH%2BZZCa8QdMzdNIhz5l8unLfTBpjjIFlLLObiCIrBNCN2HDcFiflVsnrh%2BCRTEhaUDV9vH5YVgX07rEMWJzJ%2BMExDVMjiKgJhC6iRegw4fnMvQY6pgETPVQr%2FCGGoaGSox8kEq%2FcOb6%2FZq5EnVPOazct0LgXW5N0yCnlkqjYBxWf1zPPNRxCxOWFFriQxtiO%2FxgVpT6vfYoYzMfD9ibX6RFGil6iVnnRKSN26RtWTuDLe3g101wf6TWiJtdd11JOPcB07EtKDeuXYZO99mZVGZFviK6%2FdSUF8F5Ci5w4%2FYnI1JWBVe3sKOB9Ztd0iKvm1f2%2B%2Fk2cqIgi6bs2&X-Amz-Signature=09cbe1d0230a844b9147dcfdd48e64bb7e17e75a68574a6950cc96974899f275&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOKU3PJN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDUmzQ1KeFxY%2FJS8dpcVBKk%2F4LHjohO4rcx8d0QStgaiAiA%2FqvQKPS2zzUmujpIfVCMO61JBJFk0cj3%2BqirIet%2Ba8yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMR4rFycp0GfKpi0qmKtwDSETqzuv7o5MFei40yV%2FEc8BUrFj3ZQenhzTUFBv8tfzTLmoR02q1qgtrXuH62PwaEwWwhqkPO72WDDSUW0b6JeXS1v7iXScxv8KH%2B6QLaV1jgfzx1AdSE0N0Ql9BgPiDPoksGCSHdfzZhCpkMt2t0p4%2BSveoJ1yBbcAEe%2FKhtUTcuUj1W926xXUIp1aUa9XBNBfDsInT%2B5Bko9KtDtGoQGd%2F%2F1l2nekwgEQ6CxV62I5DmBZo5oaIL4bZNmPIkjFrgqSPVmO0SD%2F27qynDotTlbAWdYH5WweaEdKTrFQ6vZ16XF2isTHfcbLl%2Fkoc7PPmlKCA90Jmdn9d1WIP5KvFL3kmaB2G6Jm8jQ2ANlQg7RRYmwa7SaGayUwZTk1lxsa4%2FF%2FmFSoAxr5ZcEGqhyzoTkyhQXrkp%2FXQw1KgpdIELXqM7C7axN1CfjaHhaZozqVLvUXsqF0cWNYGO1UWxvbBiFTog%2Brlk8boo6jtJNQEETYeNI2ahcaEcteXxyBK9kDdtSNYVC4HkssxxR%2FU0Gs3TH%2BZZCa8QdMzdNIhz5l8unLfTBpjjIFlLLObiCIrBNCN2HDcFiflVsnrh%2BCRTEhaUDV9vH5YVgX07rEMWJzJ%2BMExDVMjiKgJhC6iRegw4fnMvQY6pgETPVQr%2FCGGoaGSox8kEq%2FcOb6%2FZq5EnVPOazct0LgXW5N0yCnlkqjYBxWf1zPPNRxCxOWFFriQxtiO%2FxgVpT6vfYoYzMfD9ibX6RFGil6iVnnRKSN26RtWTuDLe3g101wf6TWiJtdd11JOPcB07EtKDeuXYZO99mZVGZFviK6%2FdSUF8F5Ci5w4%2FYnI1JWBVe3sKOB9Ztd0iKvm1f2%2B%2Fk2cqIgi6bs2&X-Amz-Signature=01ecaca473337c945610a5bc3facf52a43df52ac33eec7a528df4602e7375369&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOKU3PJN%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDUmzQ1KeFxY%2FJS8dpcVBKk%2F4LHjohO4rcx8d0QStgaiAiA%2FqvQKPS2zzUmujpIfVCMO61JBJFk0cj3%2BqirIet%2Ba8yr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMR4rFycp0GfKpi0qmKtwDSETqzuv7o5MFei40yV%2FEc8BUrFj3ZQenhzTUFBv8tfzTLmoR02q1qgtrXuH62PwaEwWwhqkPO72WDDSUW0b6JeXS1v7iXScxv8KH%2B6QLaV1jgfzx1AdSE0N0Ql9BgPiDPoksGCSHdfzZhCpkMt2t0p4%2BSveoJ1yBbcAEe%2FKhtUTcuUj1W926xXUIp1aUa9XBNBfDsInT%2B5Bko9KtDtGoQGd%2F%2F1l2nekwgEQ6CxV62I5DmBZo5oaIL4bZNmPIkjFrgqSPVmO0SD%2F27qynDotTlbAWdYH5WweaEdKTrFQ6vZ16XF2isTHfcbLl%2Fkoc7PPmlKCA90Jmdn9d1WIP5KvFL3kmaB2G6Jm8jQ2ANlQg7RRYmwa7SaGayUwZTk1lxsa4%2FF%2FmFSoAxr5ZcEGqhyzoTkyhQXrkp%2FXQw1KgpdIELXqM7C7axN1CfjaHhaZozqVLvUXsqF0cWNYGO1UWxvbBiFTog%2Brlk8boo6jtJNQEETYeNI2ahcaEcteXxyBK9kDdtSNYVC4HkssxxR%2FU0Gs3TH%2BZZCa8QdMzdNIhz5l8unLfTBpjjIFlLLObiCIrBNCN2HDcFiflVsnrh%2BCRTEhaUDV9vH5YVgX07rEMWJzJ%2BMExDVMjiKgJhC6iRegw4fnMvQY6pgETPVQr%2FCGGoaGSox8kEq%2FcOb6%2FZq5EnVPOazct0LgXW5N0yCnlkqjYBxWf1zPPNRxCxOWFFriQxtiO%2FxgVpT6vfYoYzMfD9ibX6RFGil6iVnnRKSN26RtWTuDLe3g101wf6TWiJtdd11JOPcB07EtKDeuXYZO99mZVGZFviK6%2FdSUF8F5Ci5w4%2FYnI1JWBVe3sKOB9Ztd0iKvm1f2%2B%2Fk2cqIgi6bs2&X-Amz-Signature=d6fc67a6c1603e700b7adc8ad4bd0ca2f37cc32cea06c618a497767449083a63&X-Amz-SignedHeaders=host&x-id=GetObject)
