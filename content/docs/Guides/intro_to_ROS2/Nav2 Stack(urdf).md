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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NDUXQCB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIEKfdqFz6bQbPZTfHSSRMLSKQ9N7Bh1mFiNqA5%2Br4%2FgpAiEAy8ObrrEtaMVv66HwyCIgFUl5m6hmrVQB6TumEX88gaAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOowMajEFfZ9uTSEECrcA4HFIEkS5N7658dAvquMegqjdU8ZRZWdQNBlXFINJQgeWlKrLg2%2FakqsEkJsVZYnGpZfog8nM5YWTNv8xTAfUPXzSw5ky1UPkl4mH4yOAAHwtPI3aHMymUkB20lIYvovz3CMeGXH7FZ%2BN3XH%2FKOSLgIr%2B6MiqmJMMcQvmuUnSW6dow9EUdeRNBUPRMqlix6vQH4fD7J1My2m%2BSmN9GwcDdZfp67yqoRMMtmWLUuvpdF%2BXX05MyWrMI9idlMTZo9P2ZsES%2BkkWVM%2BgJhADC%2FZd0OlAVAxocgitxUshjJk9O7Psn0nJhMSlNXA4hG7o5pyoWSewg66oJxhO7uZgWXdXKxCDOWns97qnS4e%2FAccJisD%2F21Stdjp5xPsAB5gEeWcqz2iEKjfHhJQStkAcC5ekUto74keMISetM5TTDPGR2JtKfNO8BBAkgVL1C99JXv%2BCCrk3zADaBG2C%2FO4UPvct%2B%2BOKnrfagf%2B%2BzAQ9LytYy4CBEkYJntHx4iuhXKkuQEas31PH3XwwqbJ0ZzDIUVE%2Fxn2KdV1XFUx9t%2F50pad8ZdKMAd%2F8FZAwb6i85V0YUYGJ0mtieNA8h85s1m1oc7bPJ3i0OmCOVzeW13ACrpb1WR0I3G2%2BYPMLIlu17%2FRMIW8tMIGOqUBfGE79oq9zV2ZgJ2koKyVmVz%2Bxb8kX0YzsNfF4Dy2IhhU5NbiO9AKGyW7M10q%2FH0gXQwifZa1N6RUN9LNCCDMZls13hW%2FMplNdK98YyQ99A1o6GS0fGtCDayasqSnoMqixWGernmrD3SguKBJnOpoW%2BMzXiPKriRWHnE%2FjDeRTE6N7j6UJqitxEJraggAtVMQVwTqrhbVzRuQV%2B1Ha4e%2BUJIncOI2&X-Amz-Signature=53344a883f14002b920a4a30923e0e64e7b055d80694af509d9be1182b7afec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NDUXQCB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIEKfdqFz6bQbPZTfHSSRMLSKQ9N7Bh1mFiNqA5%2Br4%2FgpAiEAy8ObrrEtaMVv66HwyCIgFUl5m6hmrVQB6TumEX88gaAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOowMajEFfZ9uTSEECrcA4HFIEkS5N7658dAvquMegqjdU8ZRZWdQNBlXFINJQgeWlKrLg2%2FakqsEkJsVZYnGpZfog8nM5YWTNv8xTAfUPXzSw5ky1UPkl4mH4yOAAHwtPI3aHMymUkB20lIYvovz3CMeGXH7FZ%2BN3XH%2FKOSLgIr%2B6MiqmJMMcQvmuUnSW6dow9EUdeRNBUPRMqlix6vQH4fD7J1My2m%2BSmN9GwcDdZfp67yqoRMMtmWLUuvpdF%2BXX05MyWrMI9idlMTZo9P2ZsES%2BkkWVM%2BgJhADC%2FZd0OlAVAxocgitxUshjJk9O7Psn0nJhMSlNXA4hG7o5pyoWSewg66oJxhO7uZgWXdXKxCDOWns97qnS4e%2FAccJisD%2F21Stdjp5xPsAB5gEeWcqz2iEKjfHhJQStkAcC5ekUto74keMISetM5TTDPGR2JtKfNO8BBAkgVL1C99JXv%2BCCrk3zADaBG2C%2FO4UPvct%2B%2BOKnrfagf%2B%2BzAQ9LytYy4CBEkYJntHx4iuhXKkuQEas31PH3XwwqbJ0ZzDIUVE%2Fxn2KdV1XFUx9t%2F50pad8ZdKMAd%2F8FZAwb6i85V0YUYGJ0mtieNA8h85s1m1oc7bPJ3i0OmCOVzeW13ACrpb1WR0I3G2%2BYPMLIlu17%2FRMIW8tMIGOqUBfGE79oq9zV2ZgJ2koKyVmVz%2Bxb8kX0YzsNfF4Dy2IhhU5NbiO9AKGyW7M10q%2FH0gXQwifZa1N6RUN9LNCCDMZls13hW%2FMplNdK98YyQ99A1o6GS0fGtCDayasqSnoMqixWGernmrD3SguKBJnOpoW%2BMzXiPKriRWHnE%2FjDeRTE6N7j6UJqitxEJraggAtVMQVwTqrhbVzRuQV%2B1Ha4e%2BUJIncOI2&X-Amz-Signature=816d9cb5258514799ca55939be1c608f963abc506d00facb656282cd5798344d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NDUXQCB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIEKfdqFz6bQbPZTfHSSRMLSKQ9N7Bh1mFiNqA5%2Br4%2FgpAiEAy8ObrrEtaMVv66HwyCIgFUl5m6hmrVQB6TumEX88gaAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOowMajEFfZ9uTSEECrcA4HFIEkS5N7658dAvquMegqjdU8ZRZWdQNBlXFINJQgeWlKrLg2%2FakqsEkJsVZYnGpZfog8nM5YWTNv8xTAfUPXzSw5ky1UPkl4mH4yOAAHwtPI3aHMymUkB20lIYvovz3CMeGXH7FZ%2BN3XH%2FKOSLgIr%2B6MiqmJMMcQvmuUnSW6dow9EUdeRNBUPRMqlix6vQH4fD7J1My2m%2BSmN9GwcDdZfp67yqoRMMtmWLUuvpdF%2BXX05MyWrMI9idlMTZo9P2ZsES%2BkkWVM%2BgJhADC%2FZd0OlAVAxocgitxUshjJk9O7Psn0nJhMSlNXA4hG7o5pyoWSewg66oJxhO7uZgWXdXKxCDOWns97qnS4e%2FAccJisD%2F21Stdjp5xPsAB5gEeWcqz2iEKjfHhJQStkAcC5ekUto74keMISetM5TTDPGR2JtKfNO8BBAkgVL1C99JXv%2BCCrk3zADaBG2C%2FO4UPvct%2B%2BOKnrfagf%2B%2BzAQ9LytYy4CBEkYJntHx4iuhXKkuQEas31PH3XwwqbJ0ZzDIUVE%2Fxn2KdV1XFUx9t%2F50pad8ZdKMAd%2F8FZAwb6i85V0YUYGJ0mtieNA8h85s1m1oc7bPJ3i0OmCOVzeW13ACrpb1WR0I3G2%2BYPMLIlu17%2FRMIW8tMIGOqUBfGE79oq9zV2ZgJ2koKyVmVz%2Bxb8kX0YzsNfF4Dy2IhhU5NbiO9AKGyW7M10q%2FH0gXQwifZa1N6RUN9LNCCDMZls13hW%2FMplNdK98YyQ99A1o6GS0fGtCDayasqSnoMqixWGernmrD3SguKBJnOpoW%2BMzXiPKriRWHnE%2FjDeRTE6N7j6UJqitxEJraggAtVMQVwTqrhbVzRuQV%2B1Ha4e%2BUJIncOI2&X-Amz-Signature=d703681861b0c4692477009d93ba44659ea879ca3f1474b3fb99117b331dd3e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NDUXQCB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIEKfdqFz6bQbPZTfHSSRMLSKQ9N7Bh1mFiNqA5%2Br4%2FgpAiEAy8ObrrEtaMVv66HwyCIgFUl5m6hmrVQB6TumEX88gaAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOowMajEFfZ9uTSEECrcA4HFIEkS5N7658dAvquMegqjdU8ZRZWdQNBlXFINJQgeWlKrLg2%2FakqsEkJsVZYnGpZfog8nM5YWTNv8xTAfUPXzSw5ky1UPkl4mH4yOAAHwtPI3aHMymUkB20lIYvovz3CMeGXH7FZ%2BN3XH%2FKOSLgIr%2B6MiqmJMMcQvmuUnSW6dow9EUdeRNBUPRMqlix6vQH4fD7J1My2m%2BSmN9GwcDdZfp67yqoRMMtmWLUuvpdF%2BXX05MyWrMI9idlMTZo9P2ZsES%2BkkWVM%2BgJhADC%2FZd0OlAVAxocgitxUshjJk9O7Psn0nJhMSlNXA4hG7o5pyoWSewg66oJxhO7uZgWXdXKxCDOWns97qnS4e%2FAccJisD%2F21Stdjp5xPsAB5gEeWcqz2iEKjfHhJQStkAcC5ekUto74keMISetM5TTDPGR2JtKfNO8BBAkgVL1C99JXv%2BCCrk3zADaBG2C%2FO4UPvct%2B%2BOKnrfagf%2B%2BzAQ9LytYy4CBEkYJntHx4iuhXKkuQEas31PH3XwwqbJ0ZzDIUVE%2Fxn2KdV1XFUx9t%2F50pad8ZdKMAd%2F8FZAwb6i85V0YUYGJ0mtieNA8h85s1m1oc7bPJ3i0OmCOVzeW13ACrpb1WR0I3G2%2BYPMLIlu17%2FRMIW8tMIGOqUBfGE79oq9zV2ZgJ2koKyVmVz%2Bxb8kX0YzsNfF4Dy2IhhU5NbiO9AKGyW7M10q%2FH0gXQwifZa1N6RUN9LNCCDMZls13hW%2FMplNdK98YyQ99A1o6GS0fGtCDayasqSnoMqixWGernmrD3SguKBJnOpoW%2BMzXiPKriRWHnE%2FjDeRTE6N7j6UJqitxEJraggAtVMQVwTqrhbVzRuQV%2B1Ha4e%2BUJIncOI2&X-Amz-Signature=3715708ba30ba8b331c3badb04c61582ff29dcf7ba4971b23ee1f24d26c2d865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NDUXQCB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIEKfdqFz6bQbPZTfHSSRMLSKQ9N7Bh1mFiNqA5%2Br4%2FgpAiEAy8ObrrEtaMVv66HwyCIgFUl5m6hmrVQB6TumEX88gaAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOowMajEFfZ9uTSEECrcA4HFIEkS5N7658dAvquMegqjdU8ZRZWdQNBlXFINJQgeWlKrLg2%2FakqsEkJsVZYnGpZfog8nM5YWTNv8xTAfUPXzSw5ky1UPkl4mH4yOAAHwtPI3aHMymUkB20lIYvovz3CMeGXH7FZ%2BN3XH%2FKOSLgIr%2B6MiqmJMMcQvmuUnSW6dow9EUdeRNBUPRMqlix6vQH4fD7J1My2m%2BSmN9GwcDdZfp67yqoRMMtmWLUuvpdF%2BXX05MyWrMI9idlMTZo9P2ZsES%2BkkWVM%2BgJhADC%2FZd0OlAVAxocgitxUshjJk9O7Psn0nJhMSlNXA4hG7o5pyoWSewg66oJxhO7uZgWXdXKxCDOWns97qnS4e%2FAccJisD%2F21Stdjp5xPsAB5gEeWcqz2iEKjfHhJQStkAcC5ekUto74keMISetM5TTDPGR2JtKfNO8BBAkgVL1C99JXv%2BCCrk3zADaBG2C%2FO4UPvct%2B%2BOKnrfagf%2B%2BzAQ9LytYy4CBEkYJntHx4iuhXKkuQEas31PH3XwwqbJ0ZzDIUVE%2Fxn2KdV1XFUx9t%2F50pad8ZdKMAd%2F8FZAwb6i85V0YUYGJ0mtieNA8h85s1m1oc7bPJ3i0OmCOVzeW13ACrpb1WR0I3G2%2BYPMLIlu17%2FRMIW8tMIGOqUBfGE79oq9zV2ZgJ2koKyVmVz%2Bxb8kX0YzsNfF4Dy2IhhU5NbiO9AKGyW7M10q%2FH0gXQwifZa1N6RUN9LNCCDMZls13hW%2FMplNdK98YyQ99A1o6GS0fGtCDayasqSnoMqixWGernmrD3SguKBJnOpoW%2BMzXiPKriRWHnE%2FjDeRTE6N7j6UJqitxEJraggAtVMQVwTqrhbVzRuQV%2B1Ha4e%2BUJIncOI2&X-Amz-Signature=db8ae6747313a5f1dfe2dd1641f4be1d147f0c2d7f8bbc37844af1d9f19af705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NDUXQCB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIEKfdqFz6bQbPZTfHSSRMLSKQ9N7Bh1mFiNqA5%2Br4%2FgpAiEAy8ObrrEtaMVv66HwyCIgFUl5m6hmrVQB6TumEX88gaAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOowMajEFfZ9uTSEECrcA4HFIEkS5N7658dAvquMegqjdU8ZRZWdQNBlXFINJQgeWlKrLg2%2FakqsEkJsVZYnGpZfog8nM5YWTNv8xTAfUPXzSw5ky1UPkl4mH4yOAAHwtPI3aHMymUkB20lIYvovz3CMeGXH7FZ%2BN3XH%2FKOSLgIr%2B6MiqmJMMcQvmuUnSW6dow9EUdeRNBUPRMqlix6vQH4fD7J1My2m%2BSmN9GwcDdZfp67yqoRMMtmWLUuvpdF%2BXX05MyWrMI9idlMTZo9P2ZsES%2BkkWVM%2BgJhADC%2FZd0OlAVAxocgitxUshjJk9O7Psn0nJhMSlNXA4hG7o5pyoWSewg66oJxhO7uZgWXdXKxCDOWns97qnS4e%2FAccJisD%2F21Stdjp5xPsAB5gEeWcqz2iEKjfHhJQStkAcC5ekUto74keMISetM5TTDPGR2JtKfNO8BBAkgVL1C99JXv%2BCCrk3zADaBG2C%2FO4UPvct%2B%2BOKnrfagf%2B%2BzAQ9LytYy4CBEkYJntHx4iuhXKkuQEas31PH3XwwqbJ0ZzDIUVE%2Fxn2KdV1XFUx9t%2F50pad8ZdKMAd%2F8FZAwb6i85V0YUYGJ0mtieNA8h85s1m1oc7bPJ3i0OmCOVzeW13ACrpb1WR0I3G2%2BYPMLIlu17%2FRMIW8tMIGOqUBfGE79oq9zV2ZgJ2koKyVmVz%2Bxb8kX0YzsNfF4Dy2IhhU5NbiO9AKGyW7M10q%2FH0gXQwifZa1N6RUN9LNCCDMZls13hW%2FMplNdK98YyQ99A1o6GS0fGtCDayasqSnoMqixWGernmrD3SguKBJnOpoW%2BMzXiPKriRWHnE%2FjDeRTE6N7j6UJqitxEJraggAtVMQVwTqrhbVzRuQV%2B1Ha4e%2BUJIncOI2&X-Amz-Signature=b5621384fdc545f455e4604577a284f4836b91af524910a28660392a3278a014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
