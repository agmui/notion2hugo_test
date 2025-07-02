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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPKVYYDU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7k6d5k1DbR6KvOCHAohOTH1UlwZogfpICCI6ATKeiswIgI%2Bt76ijcj6%2B9%2BuZbpnfJAooP8LBQ%2FDW%2BQfwr89kAZ%2FwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMq6wwtyv7KhYwI1EyrcA4jasBGAmi7FwfnH58QBRwtyk6UGXZF8GArlyy4cz0QSrj17b4dglhDcPBuWWP3sVQbt077mSMWc7eAM61Vne1aPB7Dowwh4mXno%2ByXGJZiq%2F5dnBDlkY3Vc%2F4mxWPcZsOG3LYLSb9LApOHYRQRQhoXWDKc11d2Ljg1s2%2BOmdjZe8jVbN7Xs1bUJgFcoSNWx%2FGKkygbVHBW%2FtZfLOeb5TkUuBll5d1Fu3511D3BwdbViqNnutEFSkvw5zbJdALNXFNK10%2Fn4KEwbCqyWOnLwsDQ2QDd4gwPH5bq3300i%2FVAXYsHo3A8oGkyM9jhPmDZRLbw%2F9tjCX0GXZ6Fh%2Fz1CEIdZwDn%2F3O5idRqTx4ObPY2C44ol97FqlCYFGKh85ZmzEnlaVIFtmrkV%2FgSYtgRsSdPuB%2B5wO1MASPP1ApzjCYPS0I6uFN7Gw06pqX9OSkKp0ZA5hTSay80Ukavfrp%2BqNtwN0sCKAXj5S5HO4SegPniw4GwxZq2CZbZhfiIEaeC894Rs0smB1KM1e0vcCIeYnkGc3a%2B1jFLjQyKCe06GmGGmGks9dvVWl3W%2Bd%2FiG8wrdzWrOZZvYOhiZNb5dx5HjcIC6jAIQAG%2FLyQhuufztvApOxGXQ%2FZxm13WNOum%2BML%2FaksMGOqUB0vGje8957D5qWEDgxSJlu0%2FCVgHeNcfCfRT0CrAOnSbQyUPTxRQg2UWFGVR06LcOmt2YsFqbulazO3HuB44mmwwv8hH0Yl5wPSSPm7ohFAL5s1a8My896sRYtsNFaCnK0hhFXCq1muS00n7%2FzeWKSmc87nrvh40IPSyvqgv4%2FnTgvoXKu81tjzKWIjNoKRc%2BImPGXhZ04DuYqOBCcVgUCikmlmww&X-Amz-Signature=745a8a7aaae1b4ad9e189603a3185e0fc50e500ccec75238dfdd49470bed9e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPKVYYDU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7k6d5k1DbR6KvOCHAohOTH1UlwZogfpICCI6ATKeiswIgI%2Bt76ijcj6%2B9%2BuZbpnfJAooP8LBQ%2FDW%2BQfwr89kAZ%2FwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMq6wwtyv7KhYwI1EyrcA4jasBGAmi7FwfnH58QBRwtyk6UGXZF8GArlyy4cz0QSrj17b4dglhDcPBuWWP3sVQbt077mSMWc7eAM61Vne1aPB7Dowwh4mXno%2ByXGJZiq%2F5dnBDlkY3Vc%2F4mxWPcZsOG3LYLSb9LApOHYRQRQhoXWDKc11d2Ljg1s2%2BOmdjZe8jVbN7Xs1bUJgFcoSNWx%2FGKkygbVHBW%2FtZfLOeb5TkUuBll5d1Fu3511D3BwdbViqNnutEFSkvw5zbJdALNXFNK10%2Fn4KEwbCqyWOnLwsDQ2QDd4gwPH5bq3300i%2FVAXYsHo3A8oGkyM9jhPmDZRLbw%2F9tjCX0GXZ6Fh%2Fz1CEIdZwDn%2F3O5idRqTx4ObPY2C44ol97FqlCYFGKh85ZmzEnlaVIFtmrkV%2FgSYtgRsSdPuB%2B5wO1MASPP1ApzjCYPS0I6uFN7Gw06pqX9OSkKp0ZA5hTSay80Ukavfrp%2BqNtwN0sCKAXj5S5HO4SegPniw4GwxZq2CZbZhfiIEaeC894Rs0smB1KM1e0vcCIeYnkGc3a%2B1jFLjQyKCe06GmGGmGks9dvVWl3W%2Bd%2FiG8wrdzWrOZZvYOhiZNb5dx5HjcIC6jAIQAG%2FLyQhuufztvApOxGXQ%2FZxm13WNOum%2BML%2FaksMGOqUB0vGje8957D5qWEDgxSJlu0%2FCVgHeNcfCfRT0CrAOnSbQyUPTxRQg2UWFGVR06LcOmt2YsFqbulazO3HuB44mmwwv8hH0Yl5wPSSPm7ohFAL5s1a8My896sRYtsNFaCnK0hhFXCq1muS00n7%2FzeWKSmc87nrvh40IPSyvqgv4%2FnTgvoXKu81tjzKWIjNoKRc%2BImPGXhZ04DuYqOBCcVgUCikmlmww&X-Amz-Signature=95e323281528eb57a56fbbfd1bfdb2bb641d3591429e976783ceb9a99b12ac5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPKVYYDU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7k6d5k1DbR6KvOCHAohOTH1UlwZogfpICCI6ATKeiswIgI%2Bt76ijcj6%2B9%2BuZbpnfJAooP8LBQ%2FDW%2BQfwr89kAZ%2FwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMq6wwtyv7KhYwI1EyrcA4jasBGAmi7FwfnH58QBRwtyk6UGXZF8GArlyy4cz0QSrj17b4dglhDcPBuWWP3sVQbt077mSMWc7eAM61Vne1aPB7Dowwh4mXno%2ByXGJZiq%2F5dnBDlkY3Vc%2F4mxWPcZsOG3LYLSb9LApOHYRQRQhoXWDKc11d2Ljg1s2%2BOmdjZe8jVbN7Xs1bUJgFcoSNWx%2FGKkygbVHBW%2FtZfLOeb5TkUuBll5d1Fu3511D3BwdbViqNnutEFSkvw5zbJdALNXFNK10%2Fn4KEwbCqyWOnLwsDQ2QDd4gwPH5bq3300i%2FVAXYsHo3A8oGkyM9jhPmDZRLbw%2F9tjCX0GXZ6Fh%2Fz1CEIdZwDn%2F3O5idRqTx4ObPY2C44ol97FqlCYFGKh85ZmzEnlaVIFtmrkV%2FgSYtgRsSdPuB%2B5wO1MASPP1ApzjCYPS0I6uFN7Gw06pqX9OSkKp0ZA5hTSay80Ukavfrp%2BqNtwN0sCKAXj5S5HO4SegPniw4GwxZq2CZbZhfiIEaeC894Rs0smB1KM1e0vcCIeYnkGc3a%2B1jFLjQyKCe06GmGGmGks9dvVWl3W%2Bd%2FiG8wrdzWrOZZvYOhiZNb5dx5HjcIC6jAIQAG%2FLyQhuufztvApOxGXQ%2FZxm13WNOum%2BML%2FaksMGOqUB0vGje8957D5qWEDgxSJlu0%2FCVgHeNcfCfRT0CrAOnSbQyUPTxRQg2UWFGVR06LcOmt2YsFqbulazO3HuB44mmwwv8hH0Yl5wPSSPm7ohFAL5s1a8My896sRYtsNFaCnK0hhFXCq1muS00n7%2FzeWKSmc87nrvh40IPSyvqgv4%2FnTgvoXKu81tjzKWIjNoKRc%2BImPGXhZ04DuYqOBCcVgUCikmlmww&X-Amz-Signature=5b30eada2ae42ffb5bae88c56d56ac93ce571e4ea9119a40f69a4891d4df54cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPKVYYDU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7k6d5k1DbR6KvOCHAohOTH1UlwZogfpICCI6ATKeiswIgI%2Bt76ijcj6%2B9%2BuZbpnfJAooP8LBQ%2FDW%2BQfwr89kAZ%2FwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMq6wwtyv7KhYwI1EyrcA4jasBGAmi7FwfnH58QBRwtyk6UGXZF8GArlyy4cz0QSrj17b4dglhDcPBuWWP3sVQbt077mSMWc7eAM61Vne1aPB7Dowwh4mXno%2ByXGJZiq%2F5dnBDlkY3Vc%2F4mxWPcZsOG3LYLSb9LApOHYRQRQhoXWDKc11d2Ljg1s2%2BOmdjZe8jVbN7Xs1bUJgFcoSNWx%2FGKkygbVHBW%2FtZfLOeb5TkUuBll5d1Fu3511D3BwdbViqNnutEFSkvw5zbJdALNXFNK10%2Fn4KEwbCqyWOnLwsDQ2QDd4gwPH5bq3300i%2FVAXYsHo3A8oGkyM9jhPmDZRLbw%2F9tjCX0GXZ6Fh%2Fz1CEIdZwDn%2F3O5idRqTx4ObPY2C44ol97FqlCYFGKh85ZmzEnlaVIFtmrkV%2FgSYtgRsSdPuB%2B5wO1MASPP1ApzjCYPS0I6uFN7Gw06pqX9OSkKp0ZA5hTSay80Ukavfrp%2BqNtwN0sCKAXj5S5HO4SegPniw4GwxZq2CZbZhfiIEaeC894Rs0smB1KM1e0vcCIeYnkGc3a%2B1jFLjQyKCe06GmGGmGks9dvVWl3W%2Bd%2FiG8wrdzWrOZZvYOhiZNb5dx5HjcIC6jAIQAG%2FLyQhuufztvApOxGXQ%2FZxm13WNOum%2BML%2FaksMGOqUB0vGje8957D5qWEDgxSJlu0%2FCVgHeNcfCfRT0CrAOnSbQyUPTxRQg2UWFGVR06LcOmt2YsFqbulazO3HuB44mmwwv8hH0Yl5wPSSPm7ohFAL5s1a8My896sRYtsNFaCnK0hhFXCq1muS00n7%2FzeWKSmc87nrvh40IPSyvqgv4%2FnTgvoXKu81tjzKWIjNoKRc%2BImPGXhZ04DuYqOBCcVgUCikmlmww&X-Amz-Signature=eb798f8fa30f630ed66205d2ca6552a726afbb8650bd585428ddb90c2f28eb7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPKVYYDU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7k6d5k1DbR6KvOCHAohOTH1UlwZogfpICCI6ATKeiswIgI%2Bt76ijcj6%2B9%2BuZbpnfJAooP8LBQ%2FDW%2BQfwr89kAZ%2FwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMq6wwtyv7KhYwI1EyrcA4jasBGAmi7FwfnH58QBRwtyk6UGXZF8GArlyy4cz0QSrj17b4dglhDcPBuWWP3sVQbt077mSMWc7eAM61Vne1aPB7Dowwh4mXno%2ByXGJZiq%2F5dnBDlkY3Vc%2F4mxWPcZsOG3LYLSb9LApOHYRQRQhoXWDKc11d2Ljg1s2%2BOmdjZe8jVbN7Xs1bUJgFcoSNWx%2FGKkygbVHBW%2FtZfLOeb5TkUuBll5d1Fu3511D3BwdbViqNnutEFSkvw5zbJdALNXFNK10%2Fn4KEwbCqyWOnLwsDQ2QDd4gwPH5bq3300i%2FVAXYsHo3A8oGkyM9jhPmDZRLbw%2F9tjCX0GXZ6Fh%2Fz1CEIdZwDn%2F3O5idRqTx4ObPY2C44ol97FqlCYFGKh85ZmzEnlaVIFtmrkV%2FgSYtgRsSdPuB%2B5wO1MASPP1ApzjCYPS0I6uFN7Gw06pqX9OSkKp0ZA5hTSay80Ukavfrp%2BqNtwN0sCKAXj5S5HO4SegPniw4GwxZq2CZbZhfiIEaeC894Rs0smB1KM1e0vcCIeYnkGc3a%2B1jFLjQyKCe06GmGGmGks9dvVWl3W%2Bd%2FiG8wrdzWrOZZvYOhiZNb5dx5HjcIC6jAIQAG%2FLyQhuufztvApOxGXQ%2FZxm13WNOum%2BML%2FaksMGOqUB0vGje8957D5qWEDgxSJlu0%2FCVgHeNcfCfRT0CrAOnSbQyUPTxRQg2UWFGVR06LcOmt2YsFqbulazO3HuB44mmwwv8hH0Yl5wPSSPm7ohFAL5s1a8My896sRYtsNFaCnK0hhFXCq1muS00n7%2FzeWKSmc87nrvh40IPSyvqgv4%2FnTgvoXKu81tjzKWIjNoKRc%2BImPGXhZ04DuYqOBCcVgUCikmlmww&X-Amz-Signature=8f757a37695166b3a654e17fb7f5e3c489b075ba5a54eb35719e26645ce0bc12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPKVYYDU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T041952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7k6d5k1DbR6KvOCHAohOTH1UlwZogfpICCI6ATKeiswIgI%2Bt76ijcj6%2B9%2BuZbpnfJAooP8LBQ%2FDW%2BQfwr89kAZ%2FwqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMq6wwtyv7KhYwI1EyrcA4jasBGAmi7FwfnH58QBRwtyk6UGXZF8GArlyy4cz0QSrj17b4dglhDcPBuWWP3sVQbt077mSMWc7eAM61Vne1aPB7Dowwh4mXno%2ByXGJZiq%2F5dnBDlkY3Vc%2F4mxWPcZsOG3LYLSb9LApOHYRQRQhoXWDKc11d2Ljg1s2%2BOmdjZe8jVbN7Xs1bUJgFcoSNWx%2FGKkygbVHBW%2FtZfLOeb5TkUuBll5d1Fu3511D3BwdbViqNnutEFSkvw5zbJdALNXFNK10%2Fn4KEwbCqyWOnLwsDQ2QDd4gwPH5bq3300i%2FVAXYsHo3A8oGkyM9jhPmDZRLbw%2F9tjCX0GXZ6Fh%2Fz1CEIdZwDn%2F3O5idRqTx4ObPY2C44ol97FqlCYFGKh85ZmzEnlaVIFtmrkV%2FgSYtgRsSdPuB%2B5wO1MASPP1ApzjCYPS0I6uFN7Gw06pqX9OSkKp0ZA5hTSay80Ukavfrp%2BqNtwN0sCKAXj5S5HO4SegPniw4GwxZq2CZbZhfiIEaeC894Rs0smB1KM1e0vcCIeYnkGc3a%2B1jFLjQyKCe06GmGGmGks9dvVWl3W%2Bd%2FiG8wrdzWrOZZvYOhiZNb5dx5HjcIC6jAIQAG%2FLyQhuufztvApOxGXQ%2FZxm13WNOum%2BML%2FaksMGOqUB0vGje8957D5qWEDgxSJlu0%2FCVgHeNcfCfRT0CrAOnSbQyUPTxRQg2UWFGVR06LcOmt2YsFqbulazO3HuB44mmwwv8hH0Yl5wPSSPm7ohFAL5s1a8My896sRYtsNFaCnK0hhFXCq1muS00n7%2FzeWKSmc87nrvh40IPSyvqgv4%2FnTgvoXKu81tjzKWIjNoKRc%2BImPGXhZ04DuYqOBCcVgUCikmlmww&X-Amz-Signature=c1e88eb11023eadbe6a0c99330259474ae607d7b2ee3a7dbf6bf8bfce0427aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
