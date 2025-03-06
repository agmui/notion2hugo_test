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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSMOD3OR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH2CB9FaKT%2Fa8zopLifso%2FEEzU3%2BXRQHAe4Iz8JyFmHAiArfFTKbPc5PFA3iYHubBUO0zcu2WKehRtcQ7sRq9aQSSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMh72R7BSSfwKKpNczKtwDgoUa3WwubiF6Nt4%2B5mOXpOQzp%2BFvO0%2BY2EsxbkhY2xh6YQYbelKclfS0GDdEUGlJpxkKsi6u4cq1R6WkhQxZhEvQhqVhTR0QsUHjQfhOCxibnhz24xo1AN%2B1JSceYGHPCOM6wpdGpG9AxKEfXZv7fUJaRemXdZ5Lo5hug883XBKaqsSa9h24fMYfFcGBOtyEWPHoP88G8plgn%2FuAYXIAndPnX9Lnk%2BrMylFyIC9QMwYbkquP5s4ajQ7ENJKmKWCYiK05%2FWpk22EAJ%2BF5qokj7VZUVb6WuEmAcW1xVesn%2FFgpq22BEhRyHS%2FTl5dmIEhhhVECrYTiV2hs0AfCkkdnMdrMk8ylQyiWptGS7Qtm0LdxXlpkiJm85SfL%2BlGSgR0oMcG%2FSOdbFakofMmgY%2Bcd4AjeYalQvLjggs1JGFX18MvyAt9rtGJPX0w3HLAhuOdJ%2FlxZq4IFBueRpaeiGV60VoF%2BW0ASICeFrwwKRz9z5xrRpqDpEuqk7VKk7WkS%2FVOsOtT07VswvU%2FKa7HFHGor4wUhR6FlIljebKDVzrzt18YC2Dg6%2B2n7U4s4QjQOaDaMk84tg1PACjrDmGNeb1v1OlEG3Q%2BLfkYXMI9VJEe2EfJOjjo6lkQ1WHlnqVYw9bCmvgY6pgF0b%2FaVdSyckNF3NzrL25i22Kyv%2B6O9ETPl%2BMPIeUuf5SrrZfsGFhn2S5USw%2FDzrkuslOjnrnWJ4YH%2BZmkk6Zlc5nxmaXwNivHmnwVHpI1%2BZjnBFyfDlIZJk1LY7pLagEBti%2B7rcc8%2Fr%2F%2FkPBEuwzCv8Qm7BygNRUHE2kXAGRI7bzSTW042veBQDcfiIYDA6CQIjxymUnVrX7YrW8T8Uln3dE4JbOrH&X-Amz-Signature=9b3e052094920ff7144fee962b466d1cd80ea78bf63ca06f06880db950921138&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSMOD3OR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH2CB9FaKT%2Fa8zopLifso%2FEEzU3%2BXRQHAe4Iz8JyFmHAiArfFTKbPc5PFA3iYHubBUO0zcu2WKehRtcQ7sRq9aQSSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMh72R7BSSfwKKpNczKtwDgoUa3WwubiF6Nt4%2B5mOXpOQzp%2BFvO0%2BY2EsxbkhY2xh6YQYbelKclfS0GDdEUGlJpxkKsi6u4cq1R6WkhQxZhEvQhqVhTR0QsUHjQfhOCxibnhz24xo1AN%2B1JSceYGHPCOM6wpdGpG9AxKEfXZv7fUJaRemXdZ5Lo5hug883XBKaqsSa9h24fMYfFcGBOtyEWPHoP88G8plgn%2FuAYXIAndPnX9Lnk%2BrMylFyIC9QMwYbkquP5s4ajQ7ENJKmKWCYiK05%2FWpk22EAJ%2BF5qokj7VZUVb6WuEmAcW1xVesn%2FFgpq22BEhRyHS%2FTl5dmIEhhhVECrYTiV2hs0AfCkkdnMdrMk8ylQyiWptGS7Qtm0LdxXlpkiJm85SfL%2BlGSgR0oMcG%2FSOdbFakofMmgY%2Bcd4AjeYalQvLjggs1JGFX18MvyAt9rtGJPX0w3HLAhuOdJ%2FlxZq4IFBueRpaeiGV60VoF%2BW0ASICeFrwwKRz9z5xrRpqDpEuqk7VKk7WkS%2FVOsOtT07VswvU%2FKa7HFHGor4wUhR6FlIljebKDVzrzt18YC2Dg6%2B2n7U4s4QjQOaDaMk84tg1PACjrDmGNeb1v1OlEG3Q%2BLfkYXMI9VJEe2EfJOjjo6lkQ1WHlnqVYw9bCmvgY6pgF0b%2FaVdSyckNF3NzrL25i22Kyv%2B6O9ETPl%2BMPIeUuf5SrrZfsGFhn2S5USw%2FDzrkuslOjnrnWJ4YH%2BZmkk6Zlc5nxmaXwNivHmnwVHpI1%2BZjnBFyfDlIZJk1LY7pLagEBti%2B7rcc8%2Fr%2F%2FkPBEuwzCv8Qm7BygNRUHE2kXAGRI7bzSTW042veBQDcfiIYDA6CQIjxymUnVrX7YrW8T8Uln3dE4JbOrH&X-Amz-Signature=ba29bd970b3bc91e4585fabd1fc5ca4577a8d9ad76fec3d294d2bcda45490221&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSMOD3OR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH2CB9FaKT%2Fa8zopLifso%2FEEzU3%2BXRQHAe4Iz8JyFmHAiArfFTKbPc5PFA3iYHubBUO0zcu2WKehRtcQ7sRq9aQSSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMh72R7BSSfwKKpNczKtwDgoUa3WwubiF6Nt4%2B5mOXpOQzp%2BFvO0%2BY2EsxbkhY2xh6YQYbelKclfS0GDdEUGlJpxkKsi6u4cq1R6WkhQxZhEvQhqVhTR0QsUHjQfhOCxibnhz24xo1AN%2B1JSceYGHPCOM6wpdGpG9AxKEfXZv7fUJaRemXdZ5Lo5hug883XBKaqsSa9h24fMYfFcGBOtyEWPHoP88G8plgn%2FuAYXIAndPnX9Lnk%2BrMylFyIC9QMwYbkquP5s4ajQ7ENJKmKWCYiK05%2FWpk22EAJ%2BF5qokj7VZUVb6WuEmAcW1xVesn%2FFgpq22BEhRyHS%2FTl5dmIEhhhVECrYTiV2hs0AfCkkdnMdrMk8ylQyiWptGS7Qtm0LdxXlpkiJm85SfL%2BlGSgR0oMcG%2FSOdbFakofMmgY%2Bcd4AjeYalQvLjggs1JGFX18MvyAt9rtGJPX0w3HLAhuOdJ%2FlxZq4IFBueRpaeiGV60VoF%2BW0ASICeFrwwKRz9z5xrRpqDpEuqk7VKk7WkS%2FVOsOtT07VswvU%2FKa7HFHGor4wUhR6FlIljebKDVzrzt18YC2Dg6%2B2n7U4s4QjQOaDaMk84tg1PACjrDmGNeb1v1OlEG3Q%2BLfkYXMI9VJEe2EfJOjjo6lkQ1WHlnqVYw9bCmvgY6pgF0b%2FaVdSyckNF3NzrL25i22Kyv%2B6O9ETPl%2BMPIeUuf5SrrZfsGFhn2S5USw%2FDzrkuslOjnrnWJ4YH%2BZmkk6Zlc5nxmaXwNivHmnwVHpI1%2BZjnBFyfDlIZJk1LY7pLagEBti%2B7rcc8%2Fr%2F%2FkPBEuwzCv8Qm7BygNRUHE2kXAGRI7bzSTW042veBQDcfiIYDA6CQIjxymUnVrX7YrW8T8Uln3dE4JbOrH&X-Amz-Signature=e32d4ebd3cff4afd3c2ab856a9c9f0fac05f1660355d66a163edfc167c87e200&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSMOD3OR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH2CB9FaKT%2Fa8zopLifso%2FEEzU3%2BXRQHAe4Iz8JyFmHAiArfFTKbPc5PFA3iYHubBUO0zcu2WKehRtcQ7sRq9aQSSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMh72R7BSSfwKKpNczKtwDgoUa3WwubiF6Nt4%2B5mOXpOQzp%2BFvO0%2BY2EsxbkhY2xh6YQYbelKclfS0GDdEUGlJpxkKsi6u4cq1R6WkhQxZhEvQhqVhTR0QsUHjQfhOCxibnhz24xo1AN%2B1JSceYGHPCOM6wpdGpG9AxKEfXZv7fUJaRemXdZ5Lo5hug883XBKaqsSa9h24fMYfFcGBOtyEWPHoP88G8plgn%2FuAYXIAndPnX9Lnk%2BrMylFyIC9QMwYbkquP5s4ajQ7ENJKmKWCYiK05%2FWpk22EAJ%2BF5qokj7VZUVb6WuEmAcW1xVesn%2FFgpq22BEhRyHS%2FTl5dmIEhhhVECrYTiV2hs0AfCkkdnMdrMk8ylQyiWptGS7Qtm0LdxXlpkiJm85SfL%2BlGSgR0oMcG%2FSOdbFakofMmgY%2Bcd4AjeYalQvLjggs1JGFX18MvyAt9rtGJPX0w3HLAhuOdJ%2FlxZq4IFBueRpaeiGV60VoF%2BW0ASICeFrwwKRz9z5xrRpqDpEuqk7VKk7WkS%2FVOsOtT07VswvU%2FKa7HFHGor4wUhR6FlIljebKDVzrzt18YC2Dg6%2B2n7U4s4QjQOaDaMk84tg1PACjrDmGNeb1v1OlEG3Q%2BLfkYXMI9VJEe2EfJOjjo6lkQ1WHlnqVYw9bCmvgY6pgF0b%2FaVdSyckNF3NzrL25i22Kyv%2B6O9ETPl%2BMPIeUuf5SrrZfsGFhn2S5USw%2FDzrkuslOjnrnWJ4YH%2BZmkk6Zlc5nxmaXwNivHmnwVHpI1%2BZjnBFyfDlIZJk1LY7pLagEBti%2B7rcc8%2Fr%2F%2FkPBEuwzCv8Qm7BygNRUHE2kXAGRI7bzSTW042veBQDcfiIYDA6CQIjxymUnVrX7YrW8T8Uln3dE4JbOrH&X-Amz-Signature=485a00d5bb9f390ad308a8e69cb337ac3ad0c9efe507bae0ed98624b51705773&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSMOD3OR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH2CB9FaKT%2Fa8zopLifso%2FEEzU3%2BXRQHAe4Iz8JyFmHAiArfFTKbPc5PFA3iYHubBUO0zcu2WKehRtcQ7sRq9aQSSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMh72R7BSSfwKKpNczKtwDgoUa3WwubiF6Nt4%2B5mOXpOQzp%2BFvO0%2BY2EsxbkhY2xh6YQYbelKclfS0GDdEUGlJpxkKsi6u4cq1R6WkhQxZhEvQhqVhTR0QsUHjQfhOCxibnhz24xo1AN%2B1JSceYGHPCOM6wpdGpG9AxKEfXZv7fUJaRemXdZ5Lo5hug883XBKaqsSa9h24fMYfFcGBOtyEWPHoP88G8plgn%2FuAYXIAndPnX9Lnk%2BrMylFyIC9QMwYbkquP5s4ajQ7ENJKmKWCYiK05%2FWpk22EAJ%2BF5qokj7VZUVb6WuEmAcW1xVesn%2FFgpq22BEhRyHS%2FTl5dmIEhhhVECrYTiV2hs0AfCkkdnMdrMk8ylQyiWptGS7Qtm0LdxXlpkiJm85SfL%2BlGSgR0oMcG%2FSOdbFakofMmgY%2Bcd4AjeYalQvLjggs1JGFX18MvyAt9rtGJPX0w3HLAhuOdJ%2FlxZq4IFBueRpaeiGV60VoF%2BW0ASICeFrwwKRz9z5xrRpqDpEuqk7VKk7WkS%2FVOsOtT07VswvU%2FKa7HFHGor4wUhR6FlIljebKDVzrzt18YC2Dg6%2B2n7U4s4QjQOaDaMk84tg1PACjrDmGNeb1v1OlEG3Q%2BLfkYXMI9VJEe2EfJOjjo6lkQ1WHlnqVYw9bCmvgY6pgF0b%2FaVdSyckNF3NzrL25i22Kyv%2B6O9ETPl%2BMPIeUuf5SrrZfsGFhn2S5USw%2FDzrkuslOjnrnWJ4YH%2BZmkk6Zlc5nxmaXwNivHmnwVHpI1%2BZjnBFyfDlIZJk1LY7pLagEBti%2B7rcc8%2Fr%2F%2FkPBEuwzCv8Qm7BygNRUHE2kXAGRI7bzSTW042veBQDcfiIYDA6CQIjxymUnVrX7YrW8T8Uln3dE4JbOrH&X-Amz-Signature=9419a3218bf9faaea970ddb6c339c81218b7756439b03176412bfa6a1d79e1a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSMOD3OR%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH2CB9FaKT%2Fa8zopLifso%2FEEzU3%2BXRQHAe4Iz8JyFmHAiArfFTKbPc5PFA3iYHubBUO0zcu2WKehRtcQ7sRq9aQSSr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMh72R7BSSfwKKpNczKtwDgoUa3WwubiF6Nt4%2B5mOXpOQzp%2BFvO0%2BY2EsxbkhY2xh6YQYbelKclfS0GDdEUGlJpxkKsi6u4cq1R6WkhQxZhEvQhqVhTR0QsUHjQfhOCxibnhz24xo1AN%2B1JSceYGHPCOM6wpdGpG9AxKEfXZv7fUJaRemXdZ5Lo5hug883XBKaqsSa9h24fMYfFcGBOtyEWPHoP88G8plgn%2FuAYXIAndPnX9Lnk%2BrMylFyIC9QMwYbkquP5s4ajQ7ENJKmKWCYiK05%2FWpk22EAJ%2BF5qokj7VZUVb6WuEmAcW1xVesn%2FFgpq22BEhRyHS%2FTl5dmIEhhhVECrYTiV2hs0AfCkkdnMdrMk8ylQyiWptGS7Qtm0LdxXlpkiJm85SfL%2BlGSgR0oMcG%2FSOdbFakofMmgY%2Bcd4AjeYalQvLjggs1JGFX18MvyAt9rtGJPX0w3HLAhuOdJ%2FlxZq4IFBueRpaeiGV60VoF%2BW0ASICeFrwwKRz9z5xrRpqDpEuqk7VKk7WkS%2FVOsOtT07VswvU%2FKa7HFHGor4wUhR6FlIljebKDVzrzt18YC2Dg6%2B2n7U4s4QjQOaDaMk84tg1PACjrDmGNeb1v1OlEG3Q%2BLfkYXMI9VJEe2EfJOjjo6lkQ1WHlnqVYw9bCmvgY6pgF0b%2FaVdSyckNF3NzrL25i22Kyv%2B6O9ETPl%2BMPIeUuf5SrrZfsGFhn2S5USw%2FDzrkuslOjnrnWJ4YH%2BZmkk6Zlc5nxmaXwNivHmnwVHpI1%2BZjnBFyfDlIZJk1LY7pLagEBti%2B7rcc8%2Fr%2F%2FkPBEuwzCv8Qm7BygNRUHE2kXAGRI7bzSTW042veBQDcfiIYDA6CQIjxymUnVrX7YrW8T8Uln3dE4JbOrH&X-Amz-Signature=5f2acce67b0dbee2980cf664fdfe023373e9401e2bf15861489466f7b138c9c4&X-Amz-SignedHeaders=host&x-id=GetObject)
