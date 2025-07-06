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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBEN4Z7O%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGvPcZUOfSgO%2FvYmLDiNbs2g1KHiS5JS6GjawakSZ4JSAiEA42JpmssQxFlVlDAjnrjaGG1EiVcwQ8g%2F5uIoyPEULDIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHcGUcPNODcjpv3a1yrcA0cNhIGKui4K%2FHosk8hW0eg9hCuU%2BwJpLnJP09FU5M13fjTowLyQiHkf1F2a9ggGWjuw7nKmtHYQgq44PU8is0IX8s99w347nWpg4c6g6ga5r81fI0MI%2F19pv0b38NQewNtQUIkAhTdVicVgdYEyEQoBhmDotaSdFWc%2FfPLTwzg%2FIXIUR5kxDc%2BteZ76ktMM9txleW7bNwSMFscNmDIMTdIbXD%2FYQFLukn6ZDmMSUX33Nspyq1ySyDSZq8hqES1RpkPBAD%2FZdtQ4zsOPOL%2FGvAUXFz5kg%2B1uQH5AKxgP68mAxYbv%2F6mrXZaB0CVXvhDBGwfPfP5w0URxRTPnKdHHws2I6cAMsKx358hHDNpiIYy7lOAb%2FaEBYbgs03dCO3AC4wockklelCghcI9O9dNi0hEhP8Hl2djvyhkFFFXWaiIKIDIpvoc%2FAGEqHKAfFlSko3Mi5cXqwYAXzyhkZ5XFSadtcUb4rGAeiMLrDjblRQ5b5ZwQcxiqXw%2FoLU5KdYfdfzNhFSWM0GRgFGVi%2F5wndOUmAAXyGOCJeAhQCFkqsCVcVM%2FA1Wisx3%2B3Jm3UJ4KCEWUGiFf7QhhoQuvMVq3Sp%2F49sIfl70I8kGA7UFQf9%2BC31D9Qz%2FXkFCp6nADvMI%2B0qMMGOqUBsndsu3yxSiIlw8OfZA5k5FkJ9SmlIzojOaUGHpSpatBBDF8Lv5p%2F8Yp8Er3xRdtg5OUVFKYkh%2FudddrEQIrt8j2%2Bca4dpQIb29eau7qyndj5ihhYXLe9DuOyMB78gtsdQjV%2BnBtmsWSKbAuills9qo27m5gDih6IppFs2FLGOopaYqFuhcF6zcbpoWPWEYfH%2FLfHVD1x%2BQEv4NynMEEef1dcLJrK&X-Amz-Signature=8fa5f961076720717a7f9eae1f654dd5d37676ff644eb95ab0d1d0218957a7bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBEN4Z7O%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGvPcZUOfSgO%2FvYmLDiNbs2g1KHiS5JS6GjawakSZ4JSAiEA42JpmssQxFlVlDAjnrjaGG1EiVcwQ8g%2F5uIoyPEULDIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHcGUcPNODcjpv3a1yrcA0cNhIGKui4K%2FHosk8hW0eg9hCuU%2BwJpLnJP09FU5M13fjTowLyQiHkf1F2a9ggGWjuw7nKmtHYQgq44PU8is0IX8s99w347nWpg4c6g6ga5r81fI0MI%2F19pv0b38NQewNtQUIkAhTdVicVgdYEyEQoBhmDotaSdFWc%2FfPLTwzg%2FIXIUR5kxDc%2BteZ76ktMM9txleW7bNwSMFscNmDIMTdIbXD%2FYQFLukn6ZDmMSUX33Nspyq1ySyDSZq8hqES1RpkPBAD%2FZdtQ4zsOPOL%2FGvAUXFz5kg%2B1uQH5AKxgP68mAxYbv%2F6mrXZaB0CVXvhDBGwfPfP5w0URxRTPnKdHHws2I6cAMsKx358hHDNpiIYy7lOAb%2FaEBYbgs03dCO3AC4wockklelCghcI9O9dNi0hEhP8Hl2djvyhkFFFXWaiIKIDIpvoc%2FAGEqHKAfFlSko3Mi5cXqwYAXzyhkZ5XFSadtcUb4rGAeiMLrDjblRQ5b5ZwQcxiqXw%2FoLU5KdYfdfzNhFSWM0GRgFGVi%2F5wndOUmAAXyGOCJeAhQCFkqsCVcVM%2FA1Wisx3%2B3Jm3UJ4KCEWUGiFf7QhhoQuvMVq3Sp%2F49sIfl70I8kGA7UFQf9%2BC31D9Qz%2FXkFCp6nADvMI%2B0qMMGOqUBsndsu3yxSiIlw8OfZA5k5FkJ9SmlIzojOaUGHpSpatBBDF8Lv5p%2F8Yp8Er3xRdtg5OUVFKYkh%2FudddrEQIrt8j2%2Bca4dpQIb29eau7qyndj5ihhYXLe9DuOyMB78gtsdQjV%2BnBtmsWSKbAuills9qo27m5gDih6IppFs2FLGOopaYqFuhcF6zcbpoWPWEYfH%2FLfHVD1x%2BQEv4NynMEEef1dcLJrK&X-Amz-Signature=d5f9d2c422b7ccc77104bb1de287bf4691e5a6a87a179f768e1f1867d429510a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBEN4Z7O%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGvPcZUOfSgO%2FvYmLDiNbs2g1KHiS5JS6GjawakSZ4JSAiEA42JpmssQxFlVlDAjnrjaGG1EiVcwQ8g%2F5uIoyPEULDIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHcGUcPNODcjpv3a1yrcA0cNhIGKui4K%2FHosk8hW0eg9hCuU%2BwJpLnJP09FU5M13fjTowLyQiHkf1F2a9ggGWjuw7nKmtHYQgq44PU8is0IX8s99w347nWpg4c6g6ga5r81fI0MI%2F19pv0b38NQewNtQUIkAhTdVicVgdYEyEQoBhmDotaSdFWc%2FfPLTwzg%2FIXIUR5kxDc%2BteZ76ktMM9txleW7bNwSMFscNmDIMTdIbXD%2FYQFLukn6ZDmMSUX33Nspyq1ySyDSZq8hqES1RpkPBAD%2FZdtQ4zsOPOL%2FGvAUXFz5kg%2B1uQH5AKxgP68mAxYbv%2F6mrXZaB0CVXvhDBGwfPfP5w0URxRTPnKdHHws2I6cAMsKx358hHDNpiIYy7lOAb%2FaEBYbgs03dCO3AC4wockklelCghcI9O9dNi0hEhP8Hl2djvyhkFFFXWaiIKIDIpvoc%2FAGEqHKAfFlSko3Mi5cXqwYAXzyhkZ5XFSadtcUb4rGAeiMLrDjblRQ5b5ZwQcxiqXw%2FoLU5KdYfdfzNhFSWM0GRgFGVi%2F5wndOUmAAXyGOCJeAhQCFkqsCVcVM%2FA1Wisx3%2B3Jm3UJ4KCEWUGiFf7QhhoQuvMVq3Sp%2F49sIfl70I8kGA7UFQf9%2BC31D9Qz%2FXkFCp6nADvMI%2B0qMMGOqUBsndsu3yxSiIlw8OfZA5k5FkJ9SmlIzojOaUGHpSpatBBDF8Lv5p%2F8Yp8Er3xRdtg5OUVFKYkh%2FudddrEQIrt8j2%2Bca4dpQIb29eau7qyndj5ihhYXLe9DuOyMB78gtsdQjV%2BnBtmsWSKbAuills9qo27m5gDih6IppFs2FLGOopaYqFuhcF6zcbpoWPWEYfH%2FLfHVD1x%2BQEv4NynMEEef1dcLJrK&X-Amz-Signature=32a128d27bf485ba442a0f8efbe2fc793ddb40ea4c870d52aa69ac2985fa7e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBEN4Z7O%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGvPcZUOfSgO%2FvYmLDiNbs2g1KHiS5JS6GjawakSZ4JSAiEA42JpmssQxFlVlDAjnrjaGG1EiVcwQ8g%2F5uIoyPEULDIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHcGUcPNODcjpv3a1yrcA0cNhIGKui4K%2FHosk8hW0eg9hCuU%2BwJpLnJP09FU5M13fjTowLyQiHkf1F2a9ggGWjuw7nKmtHYQgq44PU8is0IX8s99w347nWpg4c6g6ga5r81fI0MI%2F19pv0b38NQewNtQUIkAhTdVicVgdYEyEQoBhmDotaSdFWc%2FfPLTwzg%2FIXIUR5kxDc%2BteZ76ktMM9txleW7bNwSMFscNmDIMTdIbXD%2FYQFLukn6ZDmMSUX33Nspyq1ySyDSZq8hqES1RpkPBAD%2FZdtQ4zsOPOL%2FGvAUXFz5kg%2B1uQH5AKxgP68mAxYbv%2F6mrXZaB0CVXvhDBGwfPfP5w0URxRTPnKdHHws2I6cAMsKx358hHDNpiIYy7lOAb%2FaEBYbgs03dCO3AC4wockklelCghcI9O9dNi0hEhP8Hl2djvyhkFFFXWaiIKIDIpvoc%2FAGEqHKAfFlSko3Mi5cXqwYAXzyhkZ5XFSadtcUb4rGAeiMLrDjblRQ5b5ZwQcxiqXw%2FoLU5KdYfdfzNhFSWM0GRgFGVi%2F5wndOUmAAXyGOCJeAhQCFkqsCVcVM%2FA1Wisx3%2B3Jm3UJ4KCEWUGiFf7QhhoQuvMVq3Sp%2F49sIfl70I8kGA7UFQf9%2BC31D9Qz%2FXkFCp6nADvMI%2B0qMMGOqUBsndsu3yxSiIlw8OfZA5k5FkJ9SmlIzojOaUGHpSpatBBDF8Lv5p%2F8Yp8Er3xRdtg5OUVFKYkh%2FudddrEQIrt8j2%2Bca4dpQIb29eau7qyndj5ihhYXLe9DuOyMB78gtsdQjV%2BnBtmsWSKbAuills9qo27m5gDih6IppFs2FLGOopaYqFuhcF6zcbpoWPWEYfH%2FLfHVD1x%2BQEv4NynMEEef1dcLJrK&X-Amz-Signature=92b87bd62d1a777b3239e77a84f730ebab216c352216f0cc852b412763aa93ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBEN4Z7O%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGvPcZUOfSgO%2FvYmLDiNbs2g1KHiS5JS6GjawakSZ4JSAiEA42JpmssQxFlVlDAjnrjaGG1EiVcwQ8g%2F5uIoyPEULDIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHcGUcPNODcjpv3a1yrcA0cNhIGKui4K%2FHosk8hW0eg9hCuU%2BwJpLnJP09FU5M13fjTowLyQiHkf1F2a9ggGWjuw7nKmtHYQgq44PU8is0IX8s99w347nWpg4c6g6ga5r81fI0MI%2F19pv0b38NQewNtQUIkAhTdVicVgdYEyEQoBhmDotaSdFWc%2FfPLTwzg%2FIXIUR5kxDc%2BteZ76ktMM9txleW7bNwSMFscNmDIMTdIbXD%2FYQFLukn6ZDmMSUX33Nspyq1ySyDSZq8hqES1RpkPBAD%2FZdtQ4zsOPOL%2FGvAUXFz5kg%2B1uQH5AKxgP68mAxYbv%2F6mrXZaB0CVXvhDBGwfPfP5w0URxRTPnKdHHws2I6cAMsKx358hHDNpiIYy7lOAb%2FaEBYbgs03dCO3AC4wockklelCghcI9O9dNi0hEhP8Hl2djvyhkFFFXWaiIKIDIpvoc%2FAGEqHKAfFlSko3Mi5cXqwYAXzyhkZ5XFSadtcUb4rGAeiMLrDjblRQ5b5ZwQcxiqXw%2FoLU5KdYfdfzNhFSWM0GRgFGVi%2F5wndOUmAAXyGOCJeAhQCFkqsCVcVM%2FA1Wisx3%2B3Jm3UJ4KCEWUGiFf7QhhoQuvMVq3Sp%2F49sIfl70I8kGA7UFQf9%2BC31D9Qz%2FXkFCp6nADvMI%2B0qMMGOqUBsndsu3yxSiIlw8OfZA5k5FkJ9SmlIzojOaUGHpSpatBBDF8Lv5p%2F8Yp8Er3xRdtg5OUVFKYkh%2FudddrEQIrt8j2%2Bca4dpQIb29eau7qyndj5ihhYXLe9DuOyMB78gtsdQjV%2BnBtmsWSKbAuills9qo27m5gDih6IppFs2FLGOopaYqFuhcF6zcbpoWPWEYfH%2FLfHVD1x%2BQEv4NynMEEef1dcLJrK&X-Amz-Signature=ab0976d5ab056485582e512f9de79cbf5dcf20d3483ee54f041213c7cd7d1c20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBEN4Z7O%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGvPcZUOfSgO%2FvYmLDiNbs2g1KHiS5JS6GjawakSZ4JSAiEA42JpmssQxFlVlDAjnrjaGG1EiVcwQ8g%2F5uIoyPEULDIq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDHcGUcPNODcjpv3a1yrcA0cNhIGKui4K%2FHosk8hW0eg9hCuU%2BwJpLnJP09FU5M13fjTowLyQiHkf1F2a9ggGWjuw7nKmtHYQgq44PU8is0IX8s99w347nWpg4c6g6ga5r81fI0MI%2F19pv0b38NQewNtQUIkAhTdVicVgdYEyEQoBhmDotaSdFWc%2FfPLTwzg%2FIXIUR5kxDc%2BteZ76ktMM9txleW7bNwSMFscNmDIMTdIbXD%2FYQFLukn6ZDmMSUX33Nspyq1ySyDSZq8hqES1RpkPBAD%2FZdtQ4zsOPOL%2FGvAUXFz5kg%2B1uQH5AKxgP68mAxYbv%2F6mrXZaB0CVXvhDBGwfPfP5w0URxRTPnKdHHws2I6cAMsKx358hHDNpiIYy7lOAb%2FaEBYbgs03dCO3AC4wockklelCghcI9O9dNi0hEhP8Hl2djvyhkFFFXWaiIKIDIpvoc%2FAGEqHKAfFlSko3Mi5cXqwYAXzyhkZ5XFSadtcUb4rGAeiMLrDjblRQ5b5ZwQcxiqXw%2FoLU5KdYfdfzNhFSWM0GRgFGVi%2F5wndOUmAAXyGOCJeAhQCFkqsCVcVM%2FA1Wisx3%2B3Jm3UJ4KCEWUGiFf7QhhoQuvMVq3Sp%2F49sIfl70I8kGA7UFQf9%2BC31D9Qz%2FXkFCp6nADvMI%2B0qMMGOqUBsndsu3yxSiIlw8OfZA5k5FkJ9SmlIzojOaUGHpSpatBBDF8Lv5p%2F8Yp8Er3xRdtg5OUVFKYkh%2FudddrEQIrt8j2%2Bca4dpQIb29eau7qyndj5ihhYXLe9DuOyMB78gtsdQjV%2BnBtmsWSKbAuills9qo27m5gDih6IppFs2FLGOopaYqFuhcF6zcbpoWPWEYfH%2FLfHVD1x%2BQEv4NynMEEef1dcLJrK&X-Amz-Signature=ff4939f62c0738edef6c141d50609ca3caff295a6c0f694695132dc1a0352f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
