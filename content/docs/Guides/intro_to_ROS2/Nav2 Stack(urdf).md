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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOGNY3ID%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEWBt3gHWNG%2BAGt%2FLL87yr4%2FJY19RtCpTS1BgewM2kJOAiEAgKeXJCxzH05hLRyDYTfsA%2FL7DenenfMUhzLMlBBPoIwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTlMoaq61HIkSNi6yrcA8Z7FC8i0Jcl67sRpXS0dNvyG8RVDRx5l2P2DEKpyhQFQMdbCw4ALUgV%2BMn7azzd3oKrX8hwXq4ofucF%2FUlU7IlIkt49F6l1iVmMU7pr7lKMakoqvJuogQ6sKciHheK%2B7wCvxq%2FBlbOeiHcI%2FPbgQVDG%2BkAa5cVe7JN5UnMLTNickrgipYIXpxh%2FQJio5Z8otnIIcNPKTN99m7ddD5St50W%2BxRVmRs%2BJHhKEWoR5dVIZrjjf7gsOauhrgnUduPVFroc%2BOpa0nT34LnR3YwfRoE%2BmiUGzOmx4kZbDrQJ5MaNJuZV7shqvzzsSgddFVCdiZ%2B3%2FmvteTGN7BdSMIHw4OsTbjmakzZYxyOucbekYs6%2BlYkiCluT2HyvBEIo2HAHhWeTyWD71o%2B5iF1X5GLuTs8m%2Bzzf6f1%2BZTsEY%2FuDAZlQ3f8LxrYFN8yZAiOASBWIlcGv4O4Lpp%2BvzqGbGOOAFCHBPZ%2FZprVpFfxfEGbH1OBrdyxdq%2FXqpnkZ40180SddxdIk0O%2F%2FbMDpo22kJiYMDmHPLtrPXf%2FQ9eGQieUfDaFXNreZS8DZfj2NDR8%2BfW6iGn6oLlymCTenDCMoYDZy1cFeN8WTg70zd7zKk%2BJLp04EML8nqHcPB5PoUjMhXMLzpub4GOqUBhC1lsNqPeC8z9sIh6NnUKhE6SQPhg5hM2TApCSd259jS9ulfG154AKVWvtCsRy%2B4Q8y%2BqtaG3CNrgL2nwniFVg9KwmPM0lnKONwg0EBgfftHUMMOdIocEovgmLBFP14L9pIB%2Bktct5anvABV7mnz%2BkmzJdEnFUwEhOGMXMG1V3VFEE1Gq9puzKNwQEuX7Oexu5Yswt7G53QZybYm3lc8WS%2F0Bh%2BB&X-Amz-Signature=de37a8ab795df770eff3f721dc546f7f9bf17a344111b50204f13574b7b35f13&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOGNY3ID%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEWBt3gHWNG%2BAGt%2FLL87yr4%2FJY19RtCpTS1BgewM2kJOAiEAgKeXJCxzH05hLRyDYTfsA%2FL7DenenfMUhzLMlBBPoIwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTlMoaq61HIkSNi6yrcA8Z7FC8i0Jcl67sRpXS0dNvyG8RVDRx5l2P2DEKpyhQFQMdbCw4ALUgV%2BMn7azzd3oKrX8hwXq4ofucF%2FUlU7IlIkt49F6l1iVmMU7pr7lKMakoqvJuogQ6sKciHheK%2B7wCvxq%2FBlbOeiHcI%2FPbgQVDG%2BkAa5cVe7JN5UnMLTNickrgipYIXpxh%2FQJio5Z8otnIIcNPKTN99m7ddD5St50W%2BxRVmRs%2BJHhKEWoR5dVIZrjjf7gsOauhrgnUduPVFroc%2BOpa0nT34LnR3YwfRoE%2BmiUGzOmx4kZbDrQJ5MaNJuZV7shqvzzsSgddFVCdiZ%2B3%2FmvteTGN7BdSMIHw4OsTbjmakzZYxyOucbekYs6%2BlYkiCluT2HyvBEIo2HAHhWeTyWD71o%2B5iF1X5GLuTs8m%2Bzzf6f1%2BZTsEY%2FuDAZlQ3f8LxrYFN8yZAiOASBWIlcGv4O4Lpp%2BvzqGbGOOAFCHBPZ%2FZprVpFfxfEGbH1OBrdyxdq%2FXqpnkZ40180SddxdIk0O%2F%2FbMDpo22kJiYMDmHPLtrPXf%2FQ9eGQieUfDaFXNreZS8DZfj2NDR8%2BfW6iGn6oLlymCTenDCMoYDZy1cFeN8WTg70zd7zKk%2BJLp04EML8nqHcPB5PoUjMhXMLzpub4GOqUBhC1lsNqPeC8z9sIh6NnUKhE6SQPhg5hM2TApCSd259jS9ulfG154AKVWvtCsRy%2B4Q8y%2BqtaG3CNrgL2nwniFVg9KwmPM0lnKONwg0EBgfftHUMMOdIocEovgmLBFP14L9pIB%2Bktct5anvABV7mnz%2BkmzJdEnFUwEhOGMXMG1V3VFEE1Gq9puzKNwQEuX7Oexu5Yswt7G53QZybYm3lc8WS%2F0Bh%2BB&X-Amz-Signature=a901bb11acff2f153c396ec37cf998e21f301c9964c4bd111f5e232da67fb8be&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOGNY3ID%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEWBt3gHWNG%2BAGt%2FLL87yr4%2FJY19RtCpTS1BgewM2kJOAiEAgKeXJCxzH05hLRyDYTfsA%2FL7DenenfMUhzLMlBBPoIwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTlMoaq61HIkSNi6yrcA8Z7FC8i0Jcl67sRpXS0dNvyG8RVDRx5l2P2DEKpyhQFQMdbCw4ALUgV%2BMn7azzd3oKrX8hwXq4ofucF%2FUlU7IlIkt49F6l1iVmMU7pr7lKMakoqvJuogQ6sKciHheK%2B7wCvxq%2FBlbOeiHcI%2FPbgQVDG%2BkAa5cVe7JN5UnMLTNickrgipYIXpxh%2FQJio5Z8otnIIcNPKTN99m7ddD5St50W%2BxRVmRs%2BJHhKEWoR5dVIZrjjf7gsOauhrgnUduPVFroc%2BOpa0nT34LnR3YwfRoE%2BmiUGzOmx4kZbDrQJ5MaNJuZV7shqvzzsSgddFVCdiZ%2B3%2FmvteTGN7BdSMIHw4OsTbjmakzZYxyOucbekYs6%2BlYkiCluT2HyvBEIo2HAHhWeTyWD71o%2B5iF1X5GLuTs8m%2Bzzf6f1%2BZTsEY%2FuDAZlQ3f8LxrYFN8yZAiOASBWIlcGv4O4Lpp%2BvzqGbGOOAFCHBPZ%2FZprVpFfxfEGbH1OBrdyxdq%2FXqpnkZ40180SddxdIk0O%2F%2FbMDpo22kJiYMDmHPLtrPXf%2FQ9eGQieUfDaFXNreZS8DZfj2NDR8%2BfW6iGn6oLlymCTenDCMoYDZy1cFeN8WTg70zd7zKk%2BJLp04EML8nqHcPB5PoUjMhXMLzpub4GOqUBhC1lsNqPeC8z9sIh6NnUKhE6SQPhg5hM2TApCSd259jS9ulfG154AKVWvtCsRy%2B4Q8y%2BqtaG3CNrgL2nwniFVg9KwmPM0lnKONwg0EBgfftHUMMOdIocEovgmLBFP14L9pIB%2Bktct5anvABV7mnz%2BkmzJdEnFUwEhOGMXMG1V3VFEE1Gq9puzKNwQEuX7Oexu5Yswt7G53QZybYm3lc8WS%2F0Bh%2BB&X-Amz-Signature=cf0fd95fa5079b5b9b0a1a9e1c2f18c7bd2ab9cd03e6ded3b2a165577b1e71da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOGNY3ID%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEWBt3gHWNG%2BAGt%2FLL87yr4%2FJY19RtCpTS1BgewM2kJOAiEAgKeXJCxzH05hLRyDYTfsA%2FL7DenenfMUhzLMlBBPoIwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTlMoaq61HIkSNi6yrcA8Z7FC8i0Jcl67sRpXS0dNvyG8RVDRx5l2P2DEKpyhQFQMdbCw4ALUgV%2BMn7azzd3oKrX8hwXq4ofucF%2FUlU7IlIkt49F6l1iVmMU7pr7lKMakoqvJuogQ6sKciHheK%2B7wCvxq%2FBlbOeiHcI%2FPbgQVDG%2BkAa5cVe7JN5UnMLTNickrgipYIXpxh%2FQJio5Z8otnIIcNPKTN99m7ddD5St50W%2BxRVmRs%2BJHhKEWoR5dVIZrjjf7gsOauhrgnUduPVFroc%2BOpa0nT34LnR3YwfRoE%2BmiUGzOmx4kZbDrQJ5MaNJuZV7shqvzzsSgddFVCdiZ%2B3%2FmvteTGN7BdSMIHw4OsTbjmakzZYxyOucbekYs6%2BlYkiCluT2HyvBEIo2HAHhWeTyWD71o%2B5iF1X5GLuTs8m%2Bzzf6f1%2BZTsEY%2FuDAZlQ3f8LxrYFN8yZAiOASBWIlcGv4O4Lpp%2BvzqGbGOOAFCHBPZ%2FZprVpFfxfEGbH1OBrdyxdq%2FXqpnkZ40180SddxdIk0O%2F%2FbMDpo22kJiYMDmHPLtrPXf%2FQ9eGQieUfDaFXNreZS8DZfj2NDR8%2BfW6iGn6oLlymCTenDCMoYDZy1cFeN8WTg70zd7zKk%2BJLp04EML8nqHcPB5PoUjMhXMLzpub4GOqUBhC1lsNqPeC8z9sIh6NnUKhE6SQPhg5hM2TApCSd259jS9ulfG154AKVWvtCsRy%2B4Q8y%2BqtaG3CNrgL2nwniFVg9KwmPM0lnKONwg0EBgfftHUMMOdIocEovgmLBFP14L9pIB%2Bktct5anvABV7mnz%2BkmzJdEnFUwEhOGMXMG1V3VFEE1Gq9puzKNwQEuX7Oexu5Yswt7G53QZybYm3lc8WS%2F0Bh%2BB&X-Amz-Signature=ae8e86006854a013a45852eff08ae514b994ea63097009c5d847b725d43e825a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOGNY3ID%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEWBt3gHWNG%2BAGt%2FLL87yr4%2FJY19RtCpTS1BgewM2kJOAiEAgKeXJCxzH05hLRyDYTfsA%2FL7DenenfMUhzLMlBBPoIwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTlMoaq61HIkSNi6yrcA8Z7FC8i0Jcl67sRpXS0dNvyG8RVDRx5l2P2DEKpyhQFQMdbCw4ALUgV%2BMn7azzd3oKrX8hwXq4ofucF%2FUlU7IlIkt49F6l1iVmMU7pr7lKMakoqvJuogQ6sKciHheK%2B7wCvxq%2FBlbOeiHcI%2FPbgQVDG%2BkAa5cVe7JN5UnMLTNickrgipYIXpxh%2FQJio5Z8otnIIcNPKTN99m7ddD5St50W%2BxRVmRs%2BJHhKEWoR5dVIZrjjf7gsOauhrgnUduPVFroc%2BOpa0nT34LnR3YwfRoE%2BmiUGzOmx4kZbDrQJ5MaNJuZV7shqvzzsSgddFVCdiZ%2B3%2FmvteTGN7BdSMIHw4OsTbjmakzZYxyOucbekYs6%2BlYkiCluT2HyvBEIo2HAHhWeTyWD71o%2B5iF1X5GLuTs8m%2Bzzf6f1%2BZTsEY%2FuDAZlQ3f8LxrYFN8yZAiOASBWIlcGv4O4Lpp%2BvzqGbGOOAFCHBPZ%2FZprVpFfxfEGbH1OBrdyxdq%2FXqpnkZ40180SddxdIk0O%2F%2FbMDpo22kJiYMDmHPLtrPXf%2FQ9eGQieUfDaFXNreZS8DZfj2NDR8%2BfW6iGn6oLlymCTenDCMoYDZy1cFeN8WTg70zd7zKk%2BJLp04EML8nqHcPB5PoUjMhXMLzpub4GOqUBhC1lsNqPeC8z9sIh6NnUKhE6SQPhg5hM2TApCSd259jS9ulfG154AKVWvtCsRy%2B4Q8y%2BqtaG3CNrgL2nwniFVg9KwmPM0lnKONwg0EBgfftHUMMOdIocEovgmLBFP14L9pIB%2Bktct5anvABV7mnz%2BkmzJdEnFUwEhOGMXMG1V3VFEE1Gq9puzKNwQEuX7Oexu5Yswt7G53QZybYm3lc8WS%2F0Bh%2BB&X-Amz-Signature=0ac0332150667e79ca2d8db099fd35aaf4f770513487062c2c74fa70f5d76790&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOGNY3ID%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIEWBt3gHWNG%2BAGt%2FLL87yr4%2FJY19RtCpTS1BgewM2kJOAiEAgKeXJCxzH05hLRyDYTfsA%2FL7DenenfMUhzLMlBBPoIwqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKTlMoaq61HIkSNi6yrcA8Z7FC8i0Jcl67sRpXS0dNvyG8RVDRx5l2P2DEKpyhQFQMdbCw4ALUgV%2BMn7azzd3oKrX8hwXq4ofucF%2FUlU7IlIkt49F6l1iVmMU7pr7lKMakoqvJuogQ6sKciHheK%2B7wCvxq%2FBlbOeiHcI%2FPbgQVDG%2BkAa5cVe7JN5UnMLTNickrgipYIXpxh%2FQJio5Z8otnIIcNPKTN99m7ddD5St50W%2BxRVmRs%2BJHhKEWoR5dVIZrjjf7gsOauhrgnUduPVFroc%2BOpa0nT34LnR3YwfRoE%2BmiUGzOmx4kZbDrQJ5MaNJuZV7shqvzzsSgddFVCdiZ%2B3%2FmvteTGN7BdSMIHw4OsTbjmakzZYxyOucbekYs6%2BlYkiCluT2HyvBEIo2HAHhWeTyWD71o%2B5iF1X5GLuTs8m%2Bzzf6f1%2BZTsEY%2FuDAZlQ3f8LxrYFN8yZAiOASBWIlcGv4O4Lpp%2BvzqGbGOOAFCHBPZ%2FZprVpFfxfEGbH1OBrdyxdq%2FXqpnkZ40180SddxdIk0O%2F%2FbMDpo22kJiYMDmHPLtrPXf%2FQ9eGQieUfDaFXNreZS8DZfj2NDR8%2BfW6iGn6oLlymCTenDCMoYDZy1cFeN8WTg70zd7zKk%2BJLp04EML8nqHcPB5PoUjMhXMLzpub4GOqUBhC1lsNqPeC8z9sIh6NnUKhE6SQPhg5hM2TApCSd259jS9ulfG154AKVWvtCsRy%2B4Q8y%2BqtaG3CNrgL2nwniFVg9KwmPM0lnKONwg0EBgfftHUMMOdIocEovgmLBFP14L9pIB%2Bktct5anvABV7mnz%2BkmzJdEnFUwEhOGMXMG1V3VFEE1Gq9puzKNwQEuX7Oexu5Yswt7G53QZybYm3lc8WS%2F0Bh%2BB&X-Amz-Signature=5483a6103ed0775e3c9f9c014d605c8cef9d9b844cf733c2beb8141762719291&X-Amz-SignedHeaders=host&x-id=GetObject)
