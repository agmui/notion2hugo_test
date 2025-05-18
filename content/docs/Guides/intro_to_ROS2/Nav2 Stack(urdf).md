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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVVTG2I%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIzGm3JHbPXG1AMmpfp8x7shL8QLxG8FnUzBzNbBZEzAiAKng6hevyIYMLzT8q%2Fa4%2FacYjOwKFR5ibrBY3mLY2SCSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMZQw48%2B3XjCg71cMDKtwDzAj4PHGBOnwku%2FOXVCnpVsSdyQZGDEYMMQttiP3UbZXjSclXIdajS4OrerHNfHDnITesEn50kLnmVkMBNcNCB27S6HYU6aZG8B3ZsPgn5oCDqHwkdAuyapmW0y4joB8xh1NTOhAL5vbs7lYOWjPBl5EhfTVk2j7gBHPmH9e2k3N2nwMXRZO%2FehCHpL%2F1AZ4CTGCRKlFkOamoMuOhzEY3SU6VQZtLTr%2Bm1M0CAbnZIreitKkKoLGrUgTQrtiSQ2GnVhZiRBaymCgPqe%2Bl%2FxuCfWPlqbEcqxyY0%2FqrlUldNJa6Uop4xVKUmtfvnBOQ7VUX1GX6VRb8fH4fTh3G6ahQkLhisgHtDPQZV7GFiSfBEpYYsi%2Bw%2FHPZt%2FN6B9UJb%2FMCEuUiKcZ4umI6mLHQqNhKCP6Jh68EzmvW1EkZ110Ahmz6zw%2F9wewUedXbQuhPn8x0ynwEvfGdGchnMuWRbhkmsDZa%2BA7pT3JHLscmj%2BIgOKZW0IAzwc%2BbYDqv327WCdQD9%2BIp96GAfepD6%2FPEhZnP3%2BoZxbTRqAyR3ccXVb%2FN1MLTZT0iLGGafkim9RJRWNVDuR9r5Yg5qAijgW20E24vCAzbEOJV3LsB5fqa3YRuYAboWIIA5NnZrIZimdQw2tekwQY6pgEQf14iS7Zh687pTm6xYhn3RjMRnFWeh3EZ%2FTF0GezuT76Q0yJZlGW3mVMyjrzA%2B0msKkWSVK2RZ6ULrzcIGgEY5qgK%2FvFlXvrjaVk4l55qK6uWCDGO%2FfHYje8DcwV%2Bd9y0P1W5CA0LKGKTNR94jjzm0IoHW%2BjxBu0o%2F39FRe%2FUQxkRfzgCPJVSdZ6QyIA%2F4GmhFrQIAwO1I%2B80iory4RvkgfInjpT7&X-Amz-Signature=793bb926570a9c27fa6adaed61424a89142728660a3cf88f1067bf19a2156a39&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVVTG2I%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIzGm3JHbPXG1AMmpfp8x7shL8QLxG8FnUzBzNbBZEzAiAKng6hevyIYMLzT8q%2Fa4%2FacYjOwKFR5ibrBY3mLY2SCSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMZQw48%2B3XjCg71cMDKtwDzAj4PHGBOnwku%2FOXVCnpVsSdyQZGDEYMMQttiP3UbZXjSclXIdajS4OrerHNfHDnITesEn50kLnmVkMBNcNCB27S6HYU6aZG8B3ZsPgn5oCDqHwkdAuyapmW0y4joB8xh1NTOhAL5vbs7lYOWjPBl5EhfTVk2j7gBHPmH9e2k3N2nwMXRZO%2FehCHpL%2F1AZ4CTGCRKlFkOamoMuOhzEY3SU6VQZtLTr%2Bm1M0CAbnZIreitKkKoLGrUgTQrtiSQ2GnVhZiRBaymCgPqe%2Bl%2FxuCfWPlqbEcqxyY0%2FqrlUldNJa6Uop4xVKUmtfvnBOQ7VUX1GX6VRb8fH4fTh3G6ahQkLhisgHtDPQZV7GFiSfBEpYYsi%2Bw%2FHPZt%2FN6B9UJb%2FMCEuUiKcZ4umI6mLHQqNhKCP6Jh68EzmvW1EkZ110Ahmz6zw%2F9wewUedXbQuhPn8x0ynwEvfGdGchnMuWRbhkmsDZa%2BA7pT3JHLscmj%2BIgOKZW0IAzwc%2BbYDqv327WCdQD9%2BIp96GAfepD6%2FPEhZnP3%2BoZxbTRqAyR3ccXVb%2FN1MLTZT0iLGGafkim9RJRWNVDuR9r5Yg5qAijgW20E24vCAzbEOJV3LsB5fqa3YRuYAboWIIA5NnZrIZimdQw2tekwQY6pgEQf14iS7Zh687pTm6xYhn3RjMRnFWeh3EZ%2FTF0GezuT76Q0yJZlGW3mVMyjrzA%2B0msKkWSVK2RZ6ULrzcIGgEY5qgK%2FvFlXvrjaVk4l55qK6uWCDGO%2FfHYje8DcwV%2Bd9y0P1W5CA0LKGKTNR94jjzm0IoHW%2BjxBu0o%2F39FRe%2FUQxkRfzgCPJVSdZ6QyIA%2F4GmhFrQIAwO1I%2B80iory4RvkgfInjpT7&X-Amz-Signature=6c26d83b38db9684e5dbde5ecd920208116118b9e40eb33c4b9d444887c7e011&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVVTG2I%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIzGm3JHbPXG1AMmpfp8x7shL8QLxG8FnUzBzNbBZEzAiAKng6hevyIYMLzT8q%2Fa4%2FacYjOwKFR5ibrBY3mLY2SCSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMZQw48%2B3XjCg71cMDKtwDzAj4PHGBOnwku%2FOXVCnpVsSdyQZGDEYMMQttiP3UbZXjSclXIdajS4OrerHNfHDnITesEn50kLnmVkMBNcNCB27S6HYU6aZG8B3ZsPgn5oCDqHwkdAuyapmW0y4joB8xh1NTOhAL5vbs7lYOWjPBl5EhfTVk2j7gBHPmH9e2k3N2nwMXRZO%2FehCHpL%2F1AZ4CTGCRKlFkOamoMuOhzEY3SU6VQZtLTr%2Bm1M0CAbnZIreitKkKoLGrUgTQrtiSQ2GnVhZiRBaymCgPqe%2Bl%2FxuCfWPlqbEcqxyY0%2FqrlUldNJa6Uop4xVKUmtfvnBOQ7VUX1GX6VRb8fH4fTh3G6ahQkLhisgHtDPQZV7GFiSfBEpYYsi%2Bw%2FHPZt%2FN6B9UJb%2FMCEuUiKcZ4umI6mLHQqNhKCP6Jh68EzmvW1EkZ110Ahmz6zw%2F9wewUedXbQuhPn8x0ynwEvfGdGchnMuWRbhkmsDZa%2BA7pT3JHLscmj%2BIgOKZW0IAzwc%2BbYDqv327WCdQD9%2BIp96GAfepD6%2FPEhZnP3%2BoZxbTRqAyR3ccXVb%2FN1MLTZT0iLGGafkim9RJRWNVDuR9r5Yg5qAijgW20E24vCAzbEOJV3LsB5fqa3YRuYAboWIIA5NnZrIZimdQw2tekwQY6pgEQf14iS7Zh687pTm6xYhn3RjMRnFWeh3EZ%2FTF0GezuT76Q0yJZlGW3mVMyjrzA%2B0msKkWSVK2RZ6ULrzcIGgEY5qgK%2FvFlXvrjaVk4l55qK6uWCDGO%2FfHYje8DcwV%2Bd9y0P1W5CA0LKGKTNR94jjzm0IoHW%2BjxBu0o%2F39FRe%2FUQxkRfzgCPJVSdZ6QyIA%2F4GmhFrQIAwO1I%2B80iory4RvkgfInjpT7&X-Amz-Signature=c31703004f6c9119bcb1d2b8be91cf9b9b8c2bc102e5a481bd702f4b65225b3f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVVTG2I%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIzGm3JHbPXG1AMmpfp8x7shL8QLxG8FnUzBzNbBZEzAiAKng6hevyIYMLzT8q%2Fa4%2FacYjOwKFR5ibrBY3mLY2SCSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMZQw48%2B3XjCg71cMDKtwDzAj4PHGBOnwku%2FOXVCnpVsSdyQZGDEYMMQttiP3UbZXjSclXIdajS4OrerHNfHDnITesEn50kLnmVkMBNcNCB27S6HYU6aZG8B3ZsPgn5oCDqHwkdAuyapmW0y4joB8xh1NTOhAL5vbs7lYOWjPBl5EhfTVk2j7gBHPmH9e2k3N2nwMXRZO%2FehCHpL%2F1AZ4CTGCRKlFkOamoMuOhzEY3SU6VQZtLTr%2Bm1M0CAbnZIreitKkKoLGrUgTQrtiSQ2GnVhZiRBaymCgPqe%2Bl%2FxuCfWPlqbEcqxyY0%2FqrlUldNJa6Uop4xVKUmtfvnBOQ7VUX1GX6VRb8fH4fTh3G6ahQkLhisgHtDPQZV7GFiSfBEpYYsi%2Bw%2FHPZt%2FN6B9UJb%2FMCEuUiKcZ4umI6mLHQqNhKCP6Jh68EzmvW1EkZ110Ahmz6zw%2F9wewUedXbQuhPn8x0ynwEvfGdGchnMuWRbhkmsDZa%2BA7pT3JHLscmj%2BIgOKZW0IAzwc%2BbYDqv327WCdQD9%2BIp96GAfepD6%2FPEhZnP3%2BoZxbTRqAyR3ccXVb%2FN1MLTZT0iLGGafkim9RJRWNVDuR9r5Yg5qAijgW20E24vCAzbEOJV3LsB5fqa3YRuYAboWIIA5NnZrIZimdQw2tekwQY6pgEQf14iS7Zh687pTm6xYhn3RjMRnFWeh3EZ%2FTF0GezuT76Q0yJZlGW3mVMyjrzA%2B0msKkWSVK2RZ6ULrzcIGgEY5qgK%2FvFlXvrjaVk4l55qK6uWCDGO%2FfHYje8DcwV%2Bd9y0P1W5CA0LKGKTNR94jjzm0IoHW%2BjxBu0o%2F39FRe%2FUQxkRfzgCPJVSdZ6QyIA%2F4GmhFrQIAwO1I%2B80iory4RvkgfInjpT7&X-Amz-Signature=5728817053211f3e6966fb8bd6ab3b13e73e421c447985a9edf6456afda5ff05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVVTG2I%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIzGm3JHbPXG1AMmpfp8x7shL8QLxG8FnUzBzNbBZEzAiAKng6hevyIYMLzT8q%2Fa4%2FacYjOwKFR5ibrBY3mLY2SCSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMZQw48%2B3XjCg71cMDKtwDzAj4PHGBOnwku%2FOXVCnpVsSdyQZGDEYMMQttiP3UbZXjSclXIdajS4OrerHNfHDnITesEn50kLnmVkMBNcNCB27S6HYU6aZG8B3ZsPgn5oCDqHwkdAuyapmW0y4joB8xh1NTOhAL5vbs7lYOWjPBl5EhfTVk2j7gBHPmH9e2k3N2nwMXRZO%2FehCHpL%2F1AZ4CTGCRKlFkOamoMuOhzEY3SU6VQZtLTr%2Bm1M0CAbnZIreitKkKoLGrUgTQrtiSQ2GnVhZiRBaymCgPqe%2Bl%2FxuCfWPlqbEcqxyY0%2FqrlUldNJa6Uop4xVKUmtfvnBOQ7VUX1GX6VRb8fH4fTh3G6ahQkLhisgHtDPQZV7GFiSfBEpYYsi%2Bw%2FHPZt%2FN6B9UJb%2FMCEuUiKcZ4umI6mLHQqNhKCP6Jh68EzmvW1EkZ110Ahmz6zw%2F9wewUedXbQuhPn8x0ynwEvfGdGchnMuWRbhkmsDZa%2BA7pT3JHLscmj%2BIgOKZW0IAzwc%2BbYDqv327WCdQD9%2BIp96GAfepD6%2FPEhZnP3%2BoZxbTRqAyR3ccXVb%2FN1MLTZT0iLGGafkim9RJRWNVDuR9r5Yg5qAijgW20E24vCAzbEOJV3LsB5fqa3YRuYAboWIIA5NnZrIZimdQw2tekwQY6pgEQf14iS7Zh687pTm6xYhn3RjMRnFWeh3EZ%2FTF0GezuT76Q0yJZlGW3mVMyjrzA%2B0msKkWSVK2RZ6ULrzcIGgEY5qgK%2FvFlXvrjaVk4l55qK6uWCDGO%2FfHYje8DcwV%2Bd9y0P1W5CA0LKGKTNR94jjzm0IoHW%2BjxBu0o%2F39FRe%2FUQxkRfzgCPJVSdZ6QyIA%2F4GmhFrQIAwO1I%2B80iory4RvkgfInjpT7&X-Amz-Signature=f0646f536ef0402576cf008eb8c6eb693548e6dfa6df751396d024a49cd519db&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVVTG2I%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIzGm3JHbPXG1AMmpfp8x7shL8QLxG8FnUzBzNbBZEzAiAKng6hevyIYMLzT8q%2Fa4%2FacYjOwKFR5ibrBY3mLY2SCSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMZQw48%2B3XjCg71cMDKtwDzAj4PHGBOnwku%2FOXVCnpVsSdyQZGDEYMMQttiP3UbZXjSclXIdajS4OrerHNfHDnITesEn50kLnmVkMBNcNCB27S6HYU6aZG8B3ZsPgn5oCDqHwkdAuyapmW0y4joB8xh1NTOhAL5vbs7lYOWjPBl5EhfTVk2j7gBHPmH9e2k3N2nwMXRZO%2FehCHpL%2F1AZ4CTGCRKlFkOamoMuOhzEY3SU6VQZtLTr%2Bm1M0CAbnZIreitKkKoLGrUgTQrtiSQ2GnVhZiRBaymCgPqe%2Bl%2FxuCfWPlqbEcqxyY0%2FqrlUldNJa6Uop4xVKUmtfvnBOQ7VUX1GX6VRb8fH4fTh3G6ahQkLhisgHtDPQZV7GFiSfBEpYYsi%2Bw%2FHPZt%2FN6B9UJb%2FMCEuUiKcZ4umI6mLHQqNhKCP6Jh68EzmvW1EkZ110Ahmz6zw%2F9wewUedXbQuhPn8x0ynwEvfGdGchnMuWRbhkmsDZa%2BA7pT3JHLscmj%2BIgOKZW0IAzwc%2BbYDqv327WCdQD9%2BIp96GAfepD6%2FPEhZnP3%2BoZxbTRqAyR3ccXVb%2FN1MLTZT0iLGGafkim9RJRWNVDuR9r5Yg5qAijgW20E24vCAzbEOJV3LsB5fqa3YRuYAboWIIA5NnZrIZimdQw2tekwQY6pgEQf14iS7Zh687pTm6xYhn3RjMRnFWeh3EZ%2FTF0GezuT76Q0yJZlGW3mVMyjrzA%2B0msKkWSVK2RZ6ULrzcIGgEY5qgK%2FvFlXvrjaVk4l55qK6uWCDGO%2FfHYje8DcwV%2Bd9y0P1W5CA0LKGKTNR94jjzm0IoHW%2BjxBu0o%2F39FRe%2FUQxkRfzgCPJVSdZ6QyIA%2F4GmhFrQIAwO1I%2B80iory4RvkgfInjpT7&X-Amz-Signature=c33a801dac208c0a355d2a3f0714796c8a52c0fef3348cc18c83620e117765dc&X-Amz-SignedHeaders=host&x-id=GetObject)
