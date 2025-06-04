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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DU2KWCU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIA7P8T%2FUPMNQw13ZawRq%2B83fEkL%2F6i2MTOslHIw08CgTAiAWC3HvBj2ELsF1H2IOZZHT5iC%2FSyN%2BcgGVt%2FAMc7NzMSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM7czX6LLGTTy7maPpKtwDhqQo9EYfjzs4f88qq%2BqxMwYx%2FN%2BMNikBV2uqGkj%2FMwt8NkUkIofPBMxjd3cM02%2B9Yf9KHHS2vnkAYGNFIKN8mMARajYT%2Fcumyblxzjy1xPPsXgl2gIczr4bfBH%2Bi2eig2%2FNrNva00xYE1IxU7dXepwsjRI0FO%2B6MT3yUtPvHZS3v0WUe1Pe6Skp50Fpkd9saZZmKnu2ehx3eSjYFesXZnDukrwCvqUA0x9xv2k3QV%2FAgD1ElTF8fLdVfJ3YFqav7FL2yGWKOIM7bkud1740ahfLs%2BaRDEM%2FEjn7gntLFmb16PugU%2FZT3f%2F8jk5BY4SL9951TdNZZl9k3p088UTF0%2FjCt4fdZbX1JLAYGof4kjRyCzf5owCVJ%2FrFPlgck9Y%2BV93enRgCbChC0%2FUH06Uk7ylrJA1OoK%2F8Hgay6Rq6gdMzKO5l6OVMWOXKZF9dflO7v8oPhBQUKKcbWw1hvqH2vUkjdYCoJTNHXVQ%2BC8R%2Br2Zp0pLdiw%2BKhhfl%2F4pPvb3cqXCIuPwNKz18TFju%2FUu5GdjNo8XtA2%2F5ePdTnOEpUDVYiHtlWxkB1Ts19ZnY5Ca4y%2Farbf6UH6jSjlpMjEFa3LugtQC3E2bjflg1fRttQ2ObDoY30o2q98EHI1JMwquf%2FwQY6pgFr1v7oGF%2B%2F0KuKk4Xtdfzfbwz9tqOo%2FehK94pdFG%2FIWOcEHtpuzpq4pVkuTaQCIwebw%2FEQdmI5rkbHXw5pFziepSP5WggS1Ntey1hbg11Ii5A0hKmtx87oKBxf4je%2FgM%2BXiKlDzt0cM7s8BlcGnE6%2FZd45doprjWMYsKkDQLiuzZ16HxG3RMxCDtyEMdjuDgQUGSKPIME7kv4ovNj79hmwOKKwIDe1&X-Amz-Signature=605a5f28887cdcd1332182916e5d68bcb0a7ee4c01333879b4885cfe3b61bca7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DU2KWCU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIA7P8T%2FUPMNQw13ZawRq%2B83fEkL%2F6i2MTOslHIw08CgTAiAWC3HvBj2ELsF1H2IOZZHT5iC%2FSyN%2BcgGVt%2FAMc7NzMSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM7czX6LLGTTy7maPpKtwDhqQo9EYfjzs4f88qq%2BqxMwYx%2FN%2BMNikBV2uqGkj%2FMwt8NkUkIofPBMxjd3cM02%2B9Yf9KHHS2vnkAYGNFIKN8mMARajYT%2Fcumyblxzjy1xPPsXgl2gIczr4bfBH%2Bi2eig2%2FNrNva00xYE1IxU7dXepwsjRI0FO%2B6MT3yUtPvHZS3v0WUe1Pe6Skp50Fpkd9saZZmKnu2ehx3eSjYFesXZnDukrwCvqUA0x9xv2k3QV%2FAgD1ElTF8fLdVfJ3YFqav7FL2yGWKOIM7bkud1740ahfLs%2BaRDEM%2FEjn7gntLFmb16PugU%2FZT3f%2F8jk5BY4SL9951TdNZZl9k3p088UTF0%2FjCt4fdZbX1JLAYGof4kjRyCzf5owCVJ%2FrFPlgck9Y%2BV93enRgCbChC0%2FUH06Uk7ylrJA1OoK%2F8Hgay6Rq6gdMzKO5l6OVMWOXKZF9dflO7v8oPhBQUKKcbWw1hvqH2vUkjdYCoJTNHXVQ%2BC8R%2Br2Zp0pLdiw%2BKhhfl%2F4pPvb3cqXCIuPwNKz18TFju%2FUu5GdjNo8XtA2%2F5ePdTnOEpUDVYiHtlWxkB1Ts19ZnY5Ca4y%2Farbf6UH6jSjlpMjEFa3LugtQC3E2bjflg1fRttQ2ObDoY30o2q98EHI1JMwquf%2FwQY6pgFr1v7oGF%2B%2F0KuKk4Xtdfzfbwz9tqOo%2FehK94pdFG%2FIWOcEHtpuzpq4pVkuTaQCIwebw%2FEQdmI5rkbHXw5pFziepSP5WggS1Ntey1hbg11Ii5A0hKmtx87oKBxf4je%2FgM%2BXiKlDzt0cM7s8BlcGnE6%2FZd45doprjWMYsKkDQLiuzZ16HxG3RMxCDtyEMdjuDgQUGSKPIME7kv4ovNj79hmwOKKwIDe1&X-Amz-Signature=1d0470f18df3ea0642462a9635b6f69bc526e9a7c7c6a9dca0bef6a1bab44397&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DU2KWCU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIA7P8T%2FUPMNQw13ZawRq%2B83fEkL%2F6i2MTOslHIw08CgTAiAWC3HvBj2ELsF1H2IOZZHT5iC%2FSyN%2BcgGVt%2FAMc7NzMSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM7czX6LLGTTy7maPpKtwDhqQo9EYfjzs4f88qq%2BqxMwYx%2FN%2BMNikBV2uqGkj%2FMwt8NkUkIofPBMxjd3cM02%2B9Yf9KHHS2vnkAYGNFIKN8mMARajYT%2Fcumyblxzjy1xPPsXgl2gIczr4bfBH%2Bi2eig2%2FNrNva00xYE1IxU7dXepwsjRI0FO%2B6MT3yUtPvHZS3v0WUe1Pe6Skp50Fpkd9saZZmKnu2ehx3eSjYFesXZnDukrwCvqUA0x9xv2k3QV%2FAgD1ElTF8fLdVfJ3YFqav7FL2yGWKOIM7bkud1740ahfLs%2BaRDEM%2FEjn7gntLFmb16PugU%2FZT3f%2F8jk5BY4SL9951TdNZZl9k3p088UTF0%2FjCt4fdZbX1JLAYGof4kjRyCzf5owCVJ%2FrFPlgck9Y%2BV93enRgCbChC0%2FUH06Uk7ylrJA1OoK%2F8Hgay6Rq6gdMzKO5l6OVMWOXKZF9dflO7v8oPhBQUKKcbWw1hvqH2vUkjdYCoJTNHXVQ%2BC8R%2Br2Zp0pLdiw%2BKhhfl%2F4pPvb3cqXCIuPwNKz18TFju%2FUu5GdjNo8XtA2%2F5ePdTnOEpUDVYiHtlWxkB1Ts19ZnY5Ca4y%2Farbf6UH6jSjlpMjEFa3LugtQC3E2bjflg1fRttQ2ObDoY30o2q98EHI1JMwquf%2FwQY6pgFr1v7oGF%2B%2F0KuKk4Xtdfzfbwz9tqOo%2FehK94pdFG%2FIWOcEHtpuzpq4pVkuTaQCIwebw%2FEQdmI5rkbHXw5pFziepSP5WggS1Ntey1hbg11Ii5A0hKmtx87oKBxf4je%2FgM%2BXiKlDzt0cM7s8BlcGnE6%2FZd45doprjWMYsKkDQLiuzZ16HxG3RMxCDtyEMdjuDgQUGSKPIME7kv4ovNj79hmwOKKwIDe1&X-Amz-Signature=587dab4c9abfd8f513407be40f064759009af95dbbd3746802501b64f1576641&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DU2KWCU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIA7P8T%2FUPMNQw13ZawRq%2B83fEkL%2F6i2MTOslHIw08CgTAiAWC3HvBj2ELsF1H2IOZZHT5iC%2FSyN%2BcgGVt%2FAMc7NzMSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM7czX6LLGTTy7maPpKtwDhqQo9EYfjzs4f88qq%2BqxMwYx%2FN%2BMNikBV2uqGkj%2FMwt8NkUkIofPBMxjd3cM02%2B9Yf9KHHS2vnkAYGNFIKN8mMARajYT%2Fcumyblxzjy1xPPsXgl2gIczr4bfBH%2Bi2eig2%2FNrNva00xYE1IxU7dXepwsjRI0FO%2B6MT3yUtPvHZS3v0WUe1Pe6Skp50Fpkd9saZZmKnu2ehx3eSjYFesXZnDukrwCvqUA0x9xv2k3QV%2FAgD1ElTF8fLdVfJ3YFqav7FL2yGWKOIM7bkud1740ahfLs%2BaRDEM%2FEjn7gntLFmb16PugU%2FZT3f%2F8jk5BY4SL9951TdNZZl9k3p088UTF0%2FjCt4fdZbX1JLAYGof4kjRyCzf5owCVJ%2FrFPlgck9Y%2BV93enRgCbChC0%2FUH06Uk7ylrJA1OoK%2F8Hgay6Rq6gdMzKO5l6OVMWOXKZF9dflO7v8oPhBQUKKcbWw1hvqH2vUkjdYCoJTNHXVQ%2BC8R%2Br2Zp0pLdiw%2BKhhfl%2F4pPvb3cqXCIuPwNKz18TFju%2FUu5GdjNo8XtA2%2F5ePdTnOEpUDVYiHtlWxkB1Ts19ZnY5Ca4y%2Farbf6UH6jSjlpMjEFa3LugtQC3E2bjflg1fRttQ2ObDoY30o2q98EHI1JMwquf%2FwQY6pgFr1v7oGF%2B%2F0KuKk4Xtdfzfbwz9tqOo%2FehK94pdFG%2FIWOcEHtpuzpq4pVkuTaQCIwebw%2FEQdmI5rkbHXw5pFziepSP5WggS1Ntey1hbg11Ii5A0hKmtx87oKBxf4je%2FgM%2BXiKlDzt0cM7s8BlcGnE6%2FZd45doprjWMYsKkDQLiuzZ16HxG3RMxCDtyEMdjuDgQUGSKPIME7kv4ovNj79hmwOKKwIDe1&X-Amz-Signature=b43165be0a053c1a5a98f2c3e04c1f4fc4e5ce2398171f2d8af71bc421fc59de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DU2KWCU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIA7P8T%2FUPMNQw13ZawRq%2B83fEkL%2F6i2MTOslHIw08CgTAiAWC3HvBj2ELsF1H2IOZZHT5iC%2FSyN%2BcgGVt%2FAMc7NzMSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM7czX6LLGTTy7maPpKtwDhqQo9EYfjzs4f88qq%2BqxMwYx%2FN%2BMNikBV2uqGkj%2FMwt8NkUkIofPBMxjd3cM02%2B9Yf9KHHS2vnkAYGNFIKN8mMARajYT%2Fcumyblxzjy1xPPsXgl2gIczr4bfBH%2Bi2eig2%2FNrNva00xYE1IxU7dXepwsjRI0FO%2B6MT3yUtPvHZS3v0WUe1Pe6Skp50Fpkd9saZZmKnu2ehx3eSjYFesXZnDukrwCvqUA0x9xv2k3QV%2FAgD1ElTF8fLdVfJ3YFqav7FL2yGWKOIM7bkud1740ahfLs%2BaRDEM%2FEjn7gntLFmb16PugU%2FZT3f%2F8jk5BY4SL9951TdNZZl9k3p088UTF0%2FjCt4fdZbX1JLAYGof4kjRyCzf5owCVJ%2FrFPlgck9Y%2BV93enRgCbChC0%2FUH06Uk7ylrJA1OoK%2F8Hgay6Rq6gdMzKO5l6OVMWOXKZF9dflO7v8oPhBQUKKcbWw1hvqH2vUkjdYCoJTNHXVQ%2BC8R%2Br2Zp0pLdiw%2BKhhfl%2F4pPvb3cqXCIuPwNKz18TFju%2FUu5GdjNo8XtA2%2F5ePdTnOEpUDVYiHtlWxkB1Ts19ZnY5Ca4y%2Farbf6UH6jSjlpMjEFa3LugtQC3E2bjflg1fRttQ2ObDoY30o2q98EHI1JMwquf%2FwQY6pgFr1v7oGF%2B%2F0KuKk4Xtdfzfbwz9tqOo%2FehK94pdFG%2FIWOcEHtpuzpq4pVkuTaQCIwebw%2FEQdmI5rkbHXw5pFziepSP5WggS1Ntey1hbg11Ii5A0hKmtx87oKBxf4je%2FgM%2BXiKlDzt0cM7s8BlcGnE6%2FZd45doprjWMYsKkDQLiuzZ16HxG3RMxCDtyEMdjuDgQUGSKPIME7kv4ovNj79hmwOKKwIDe1&X-Amz-Signature=a1cc94577ff9ea376eeaa7ddfc08184b5de0087fcd415fb5df3df59c407c7347&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DU2KWCU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIA7P8T%2FUPMNQw13ZawRq%2B83fEkL%2F6i2MTOslHIw08CgTAiAWC3HvBj2ELsF1H2IOZZHT5iC%2FSyN%2BcgGVt%2FAMc7NzMSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIM7czX6LLGTTy7maPpKtwDhqQo9EYfjzs4f88qq%2BqxMwYx%2FN%2BMNikBV2uqGkj%2FMwt8NkUkIofPBMxjd3cM02%2B9Yf9KHHS2vnkAYGNFIKN8mMARajYT%2Fcumyblxzjy1xPPsXgl2gIczr4bfBH%2Bi2eig2%2FNrNva00xYE1IxU7dXepwsjRI0FO%2B6MT3yUtPvHZS3v0WUe1Pe6Skp50Fpkd9saZZmKnu2ehx3eSjYFesXZnDukrwCvqUA0x9xv2k3QV%2FAgD1ElTF8fLdVfJ3YFqav7FL2yGWKOIM7bkud1740ahfLs%2BaRDEM%2FEjn7gntLFmb16PugU%2FZT3f%2F8jk5BY4SL9951TdNZZl9k3p088UTF0%2FjCt4fdZbX1JLAYGof4kjRyCzf5owCVJ%2FrFPlgck9Y%2BV93enRgCbChC0%2FUH06Uk7ylrJA1OoK%2F8Hgay6Rq6gdMzKO5l6OVMWOXKZF9dflO7v8oPhBQUKKcbWw1hvqH2vUkjdYCoJTNHXVQ%2BC8R%2Br2Zp0pLdiw%2BKhhfl%2F4pPvb3cqXCIuPwNKz18TFju%2FUu5GdjNo8XtA2%2F5ePdTnOEpUDVYiHtlWxkB1Ts19ZnY5Ca4y%2Farbf6UH6jSjlpMjEFa3LugtQC3E2bjflg1fRttQ2ObDoY30o2q98EHI1JMwquf%2FwQY6pgFr1v7oGF%2B%2F0KuKk4Xtdfzfbwz9tqOo%2FehK94pdFG%2FIWOcEHtpuzpq4pVkuTaQCIwebw%2FEQdmI5rkbHXw5pFziepSP5WggS1Ntey1hbg11Ii5A0hKmtx87oKBxf4je%2FgM%2BXiKlDzt0cM7s8BlcGnE6%2FZd45doprjWMYsKkDQLiuzZ16HxG3RMxCDtyEMdjuDgQUGSKPIME7kv4ovNj79hmwOKKwIDe1&X-Amz-Signature=2e8f72f13be49986c2d2d91162fa84189cedbd0a88fd232d84287b830a423a72&X-Amz-SignedHeaders=host&x-id=GetObject)
