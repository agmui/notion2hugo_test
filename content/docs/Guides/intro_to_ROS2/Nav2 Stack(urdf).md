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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQR5LZ36%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEwWI%2F6cXb4mESZVYHdP994ZZ7zxaIaYoR8hfjk99RJoAiAc4ZeOtg7HDpS%2FrgsXcNEtEPYfhShRUtHFeNTYsrr9dCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMvaAsCJHzFo1QXlgoKtwDl01eKTTMMuvEEuwqR%2BrpvU6hJsz0xQ0IGQRFMTAm22cpa7a6k6tR1FbZmng0bFxtnmhKtju6latgowJvBxNuW33ybBNWB4eeJh%2FTuVUQV0CSoffCEm1DEP9ake%2Bl5hMSPdP6Pt%2BpBHliFWH67xp02m8NbK6ZI54Ip8mADGjFejqOSt%2BMtctvpKYSVf2EcE5e4L5CQucn8mSJP4q9lgppbsV0QC9aRhtPeXb7rk%2B4QX%2BI9dn8S3s%2FHJoteOAtlRM%2BPwx5WvyV2Nx%2BYBIqU%2B3U57%2FuWd3x7coHX0TVhD9RI4Yv4XATCFJWPV4LXXDi5wOQzXEw7ipJS%2FgMDwDuCTIRVsuSf%2Br%2Ftjuv5K2jqX8f6%2BKdDlooLOl86dNzgXH2hhpMNVMHUCHwpncmxvgnEK7fWTo0Gjs8rJoKOxoSpVDoai%2F4E88iXJQV5O%2BWe6CtJlSyeHfNc0MeVeYfhomvqigCb7s2MIF33pUPefr651%2BX6tGWZcYrDNAXtE8%2FTh2JB3JSeGsHZlRazwhCLwaYNhfrYsxzP8V2fIwWZpFEqvoGigYOsyqgvycs0FjXG7R4douKp%2B%2Fpna%2FPlrTHpu1ydf6tMIrGJP%2BxZ5zcEeRfk4nhLnma2Y943wDyML4YL2UwxNipwwY6pgGYG0Hw%2FOW4XlOu5wNsVSgGHoEXuXYO4W9dShc9Ew1sLL8pjSDlqIHCL49dAdL0IDwX9gaHKspHRQ9iZJ43xAgxqVSILOdM8NSG6YM2HMBKHgGlf0aAF3%2FZXOnOPkngTWXo2eeD%2BqcbakIDZWdXhXhi1WJKlOKiEOLk%2BmgfsDKSLkpYb32YwxlsvR%2FfR%2FCcJT81xEW577aIJ16%2FiPaohWYqGAYDrxyd&X-Amz-Signature=adff3a2841917096ebe6595b573081db4c0bfa6e86d4354dcd000abff2504fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQR5LZ36%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEwWI%2F6cXb4mESZVYHdP994ZZ7zxaIaYoR8hfjk99RJoAiAc4ZeOtg7HDpS%2FrgsXcNEtEPYfhShRUtHFeNTYsrr9dCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMvaAsCJHzFo1QXlgoKtwDl01eKTTMMuvEEuwqR%2BrpvU6hJsz0xQ0IGQRFMTAm22cpa7a6k6tR1FbZmng0bFxtnmhKtju6latgowJvBxNuW33ybBNWB4eeJh%2FTuVUQV0CSoffCEm1DEP9ake%2Bl5hMSPdP6Pt%2BpBHliFWH67xp02m8NbK6ZI54Ip8mADGjFejqOSt%2BMtctvpKYSVf2EcE5e4L5CQucn8mSJP4q9lgppbsV0QC9aRhtPeXb7rk%2B4QX%2BI9dn8S3s%2FHJoteOAtlRM%2BPwx5WvyV2Nx%2BYBIqU%2B3U57%2FuWd3x7coHX0TVhD9RI4Yv4XATCFJWPV4LXXDi5wOQzXEw7ipJS%2FgMDwDuCTIRVsuSf%2Br%2Ftjuv5K2jqX8f6%2BKdDlooLOl86dNzgXH2hhpMNVMHUCHwpncmxvgnEK7fWTo0Gjs8rJoKOxoSpVDoai%2F4E88iXJQV5O%2BWe6CtJlSyeHfNc0MeVeYfhomvqigCb7s2MIF33pUPefr651%2BX6tGWZcYrDNAXtE8%2FTh2JB3JSeGsHZlRazwhCLwaYNhfrYsxzP8V2fIwWZpFEqvoGigYOsyqgvycs0FjXG7R4douKp%2B%2Fpna%2FPlrTHpu1ydf6tMIrGJP%2BxZ5zcEeRfk4nhLnma2Y943wDyML4YL2UwxNipwwY6pgGYG0Hw%2FOW4XlOu5wNsVSgGHoEXuXYO4W9dShc9Ew1sLL8pjSDlqIHCL49dAdL0IDwX9gaHKspHRQ9iZJ43xAgxqVSILOdM8NSG6YM2HMBKHgGlf0aAF3%2FZXOnOPkngTWXo2eeD%2BqcbakIDZWdXhXhi1WJKlOKiEOLk%2BmgfsDKSLkpYb32YwxlsvR%2FfR%2FCcJT81xEW577aIJ16%2FiPaohWYqGAYDrxyd&X-Amz-Signature=9707a8a816f4945548583fa42f99a1ccbf1d8e0b0e0444ce3b106466352ff87d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQR5LZ36%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEwWI%2F6cXb4mESZVYHdP994ZZ7zxaIaYoR8hfjk99RJoAiAc4ZeOtg7HDpS%2FrgsXcNEtEPYfhShRUtHFeNTYsrr9dCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMvaAsCJHzFo1QXlgoKtwDl01eKTTMMuvEEuwqR%2BrpvU6hJsz0xQ0IGQRFMTAm22cpa7a6k6tR1FbZmng0bFxtnmhKtju6latgowJvBxNuW33ybBNWB4eeJh%2FTuVUQV0CSoffCEm1DEP9ake%2Bl5hMSPdP6Pt%2BpBHliFWH67xp02m8NbK6ZI54Ip8mADGjFejqOSt%2BMtctvpKYSVf2EcE5e4L5CQucn8mSJP4q9lgppbsV0QC9aRhtPeXb7rk%2B4QX%2BI9dn8S3s%2FHJoteOAtlRM%2BPwx5WvyV2Nx%2BYBIqU%2B3U57%2FuWd3x7coHX0TVhD9RI4Yv4XATCFJWPV4LXXDi5wOQzXEw7ipJS%2FgMDwDuCTIRVsuSf%2Br%2Ftjuv5K2jqX8f6%2BKdDlooLOl86dNzgXH2hhpMNVMHUCHwpncmxvgnEK7fWTo0Gjs8rJoKOxoSpVDoai%2F4E88iXJQV5O%2BWe6CtJlSyeHfNc0MeVeYfhomvqigCb7s2MIF33pUPefr651%2BX6tGWZcYrDNAXtE8%2FTh2JB3JSeGsHZlRazwhCLwaYNhfrYsxzP8V2fIwWZpFEqvoGigYOsyqgvycs0FjXG7R4douKp%2B%2Fpna%2FPlrTHpu1ydf6tMIrGJP%2BxZ5zcEeRfk4nhLnma2Y943wDyML4YL2UwxNipwwY6pgGYG0Hw%2FOW4XlOu5wNsVSgGHoEXuXYO4W9dShc9Ew1sLL8pjSDlqIHCL49dAdL0IDwX9gaHKspHRQ9iZJ43xAgxqVSILOdM8NSG6YM2HMBKHgGlf0aAF3%2FZXOnOPkngTWXo2eeD%2BqcbakIDZWdXhXhi1WJKlOKiEOLk%2BmgfsDKSLkpYb32YwxlsvR%2FfR%2FCcJT81xEW577aIJ16%2FiPaohWYqGAYDrxyd&X-Amz-Signature=ccaad4d725c94366a56bcb8ce4176831a55ee1144f49d1df0a78a0bad47a1140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQR5LZ36%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEwWI%2F6cXb4mESZVYHdP994ZZ7zxaIaYoR8hfjk99RJoAiAc4ZeOtg7HDpS%2FrgsXcNEtEPYfhShRUtHFeNTYsrr9dCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMvaAsCJHzFo1QXlgoKtwDl01eKTTMMuvEEuwqR%2BrpvU6hJsz0xQ0IGQRFMTAm22cpa7a6k6tR1FbZmng0bFxtnmhKtju6latgowJvBxNuW33ybBNWB4eeJh%2FTuVUQV0CSoffCEm1DEP9ake%2Bl5hMSPdP6Pt%2BpBHliFWH67xp02m8NbK6ZI54Ip8mADGjFejqOSt%2BMtctvpKYSVf2EcE5e4L5CQucn8mSJP4q9lgppbsV0QC9aRhtPeXb7rk%2B4QX%2BI9dn8S3s%2FHJoteOAtlRM%2BPwx5WvyV2Nx%2BYBIqU%2B3U57%2FuWd3x7coHX0TVhD9RI4Yv4XATCFJWPV4LXXDi5wOQzXEw7ipJS%2FgMDwDuCTIRVsuSf%2Br%2Ftjuv5K2jqX8f6%2BKdDlooLOl86dNzgXH2hhpMNVMHUCHwpncmxvgnEK7fWTo0Gjs8rJoKOxoSpVDoai%2F4E88iXJQV5O%2BWe6CtJlSyeHfNc0MeVeYfhomvqigCb7s2MIF33pUPefr651%2BX6tGWZcYrDNAXtE8%2FTh2JB3JSeGsHZlRazwhCLwaYNhfrYsxzP8V2fIwWZpFEqvoGigYOsyqgvycs0FjXG7R4douKp%2B%2Fpna%2FPlrTHpu1ydf6tMIrGJP%2BxZ5zcEeRfk4nhLnma2Y943wDyML4YL2UwxNipwwY6pgGYG0Hw%2FOW4XlOu5wNsVSgGHoEXuXYO4W9dShc9Ew1sLL8pjSDlqIHCL49dAdL0IDwX9gaHKspHRQ9iZJ43xAgxqVSILOdM8NSG6YM2HMBKHgGlf0aAF3%2FZXOnOPkngTWXo2eeD%2BqcbakIDZWdXhXhi1WJKlOKiEOLk%2BmgfsDKSLkpYb32YwxlsvR%2FfR%2FCcJT81xEW577aIJ16%2FiPaohWYqGAYDrxyd&X-Amz-Signature=f02d2e3a64bf828d774ea96a59fe91132d38e6ed37e426176795ec8b2e04ea57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQR5LZ36%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEwWI%2F6cXb4mESZVYHdP994ZZ7zxaIaYoR8hfjk99RJoAiAc4ZeOtg7HDpS%2FrgsXcNEtEPYfhShRUtHFeNTYsrr9dCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMvaAsCJHzFo1QXlgoKtwDl01eKTTMMuvEEuwqR%2BrpvU6hJsz0xQ0IGQRFMTAm22cpa7a6k6tR1FbZmng0bFxtnmhKtju6latgowJvBxNuW33ybBNWB4eeJh%2FTuVUQV0CSoffCEm1DEP9ake%2Bl5hMSPdP6Pt%2BpBHliFWH67xp02m8NbK6ZI54Ip8mADGjFejqOSt%2BMtctvpKYSVf2EcE5e4L5CQucn8mSJP4q9lgppbsV0QC9aRhtPeXb7rk%2B4QX%2BI9dn8S3s%2FHJoteOAtlRM%2BPwx5WvyV2Nx%2BYBIqU%2B3U57%2FuWd3x7coHX0TVhD9RI4Yv4XATCFJWPV4LXXDi5wOQzXEw7ipJS%2FgMDwDuCTIRVsuSf%2Br%2Ftjuv5K2jqX8f6%2BKdDlooLOl86dNzgXH2hhpMNVMHUCHwpncmxvgnEK7fWTo0Gjs8rJoKOxoSpVDoai%2F4E88iXJQV5O%2BWe6CtJlSyeHfNc0MeVeYfhomvqigCb7s2MIF33pUPefr651%2BX6tGWZcYrDNAXtE8%2FTh2JB3JSeGsHZlRazwhCLwaYNhfrYsxzP8V2fIwWZpFEqvoGigYOsyqgvycs0FjXG7R4douKp%2B%2Fpna%2FPlrTHpu1ydf6tMIrGJP%2BxZ5zcEeRfk4nhLnma2Y943wDyML4YL2UwxNipwwY6pgGYG0Hw%2FOW4XlOu5wNsVSgGHoEXuXYO4W9dShc9Ew1sLL8pjSDlqIHCL49dAdL0IDwX9gaHKspHRQ9iZJ43xAgxqVSILOdM8NSG6YM2HMBKHgGlf0aAF3%2FZXOnOPkngTWXo2eeD%2BqcbakIDZWdXhXhi1WJKlOKiEOLk%2BmgfsDKSLkpYb32YwxlsvR%2FfR%2FCcJT81xEW577aIJ16%2FiPaohWYqGAYDrxyd&X-Amz-Signature=fe326bae70cc4ffb59b1dadc76aca85af91030f1074d832463a3669c5afa07a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQR5LZ36%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T160928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIEwWI%2F6cXb4mESZVYHdP994ZZ7zxaIaYoR8hfjk99RJoAiAc4ZeOtg7HDpS%2FrgsXcNEtEPYfhShRUtHFeNTYsrr9dCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMvaAsCJHzFo1QXlgoKtwDl01eKTTMMuvEEuwqR%2BrpvU6hJsz0xQ0IGQRFMTAm22cpa7a6k6tR1FbZmng0bFxtnmhKtju6latgowJvBxNuW33ybBNWB4eeJh%2FTuVUQV0CSoffCEm1DEP9ake%2Bl5hMSPdP6Pt%2BpBHliFWH67xp02m8NbK6ZI54Ip8mADGjFejqOSt%2BMtctvpKYSVf2EcE5e4L5CQucn8mSJP4q9lgppbsV0QC9aRhtPeXb7rk%2B4QX%2BI9dn8S3s%2FHJoteOAtlRM%2BPwx5WvyV2Nx%2BYBIqU%2B3U57%2FuWd3x7coHX0TVhD9RI4Yv4XATCFJWPV4LXXDi5wOQzXEw7ipJS%2FgMDwDuCTIRVsuSf%2Br%2Ftjuv5K2jqX8f6%2BKdDlooLOl86dNzgXH2hhpMNVMHUCHwpncmxvgnEK7fWTo0Gjs8rJoKOxoSpVDoai%2F4E88iXJQV5O%2BWe6CtJlSyeHfNc0MeVeYfhomvqigCb7s2MIF33pUPefr651%2BX6tGWZcYrDNAXtE8%2FTh2JB3JSeGsHZlRazwhCLwaYNhfrYsxzP8V2fIwWZpFEqvoGigYOsyqgvycs0FjXG7R4douKp%2B%2Fpna%2FPlrTHpu1ydf6tMIrGJP%2BxZ5zcEeRfk4nhLnma2Y943wDyML4YL2UwxNipwwY6pgGYG0Hw%2FOW4XlOu5wNsVSgGHoEXuXYO4W9dShc9Ew1sLL8pjSDlqIHCL49dAdL0IDwX9gaHKspHRQ9iZJ43xAgxqVSILOdM8NSG6YM2HMBKHgGlf0aAF3%2FZXOnOPkngTWXo2eeD%2BqcbakIDZWdXhXhi1WJKlOKiEOLk%2BmgfsDKSLkpYb32YwxlsvR%2FfR%2FCcJT81xEW577aIJ16%2FiPaohWYqGAYDrxyd&X-Amz-Signature=165e6c6e6e15981854aa4b1e38690e0e6536a1096967b73e9a06a1b868421f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
