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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U23YL3N%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpsmZTZZtUIduX21YmZerWRZovOGZlrQtsJ7F6MBYGSwIhAPby9LSKzuLtdJcydPCDvrnSRCYWD8soDvePHou3Kz0cKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUAvWx9Z4zErNZQcsq3AMntaFd3Gyg3R04j5pOLSlu2BxXfSvTFo%2FK8RGMcpplh%2BGY8cISccUj1vtHqboX%2F3bOoJGMAqTtzNoRtr8OW8xO40Ib2cd%2B8jvA%2Bi9PuevTS0dsodUeYxhBiaJLDFrpfnxlCPju0i%2Fh%2FY4KBEKJD%2B9O2MpUplcrmMUw2geQhZDHB356MPHRTuGMVqtKx%2FmH29c9%2FS5DuNpTz%2BXmZVPQ8YYcxdtvQkCpY9hTiO1QOXE5GfYQCrqy6qrTb0GmjghxlZiOxObdfR%2Bm%2FuFVqjLOtOhnvvSJpdpzfhlqZpGs8X1tacehfP9WhWl5%2FI0FelyMohIqGNoZOE%2FrgyL7mnA5Fge%2BwhwBJ5tCv6Zy8BW0JVlvmth5JYoU%2BD3FkE%2BoyZSSJlmSf9tVQ9m4NFJ%2FvAd5fJE96tC47PYv7CSdjUPApOXXPZku%2BGJnc58WOscz6xmoOpgOjWAy3WuSKQuiw5%2B%2B6wRdo9sZrDtaxWAt1Gt5WjHPzVSoCccAqYkyAYlvIni0bzp%2FPGSO0N8o5d60j42lhSoSk480JZROpE%2BNHSVkdQOiAoBShjcEfy69%2Fq6iRTBZn9GB%2Bp9xeGGtZWmneByxLSA43eUjURtoDIJM64nBKbA5CfkXGcToSO%2BEbNebOzDFuqbCBjqkAbZwqLZLMobjjAdbkFMGiMCdCBFRaEGNHAH6WmolXkkX5RVAB7utIoFs1lGzyqD2p8RnePK2Fyl4aNMEdqDL3goDA%2F4VyOsxr3Ij76yVauIAoRbmHZhqpsiBayHq4d9aAwOR%2BGIyQndZ11C7hd4nbs0FEciHL7NfzXWT1%2BEnGDawgXySHbG7mjbB08IBSMVbaz%2BvMRjfFviwDSqqhthzt7IbTILw&X-Amz-Signature=e6f8077e7b658acef7677a163b387a389b83f82eecbe92591a1ddc027ff37360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U23YL3N%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpsmZTZZtUIduX21YmZerWRZovOGZlrQtsJ7F6MBYGSwIhAPby9LSKzuLtdJcydPCDvrnSRCYWD8soDvePHou3Kz0cKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUAvWx9Z4zErNZQcsq3AMntaFd3Gyg3R04j5pOLSlu2BxXfSvTFo%2FK8RGMcpplh%2BGY8cISccUj1vtHqboX%2F3bOoJGMAqTtzNoRtr8OW8xO40Ib2cd%2B8jvA%2Bi9PuevTS0dsodUeYxhBiaJLDFrpfnxlCPju0i%2Fh%2FY4KBEKJD%2B9O2MpUplcrmMUw2geQhZDHB356MPHRTuGMVqtKx%2FmH29c9%2FS5DuNpTz%2BXmZVPQ8YYcxdtvQkCpY9hTiO1QOXE5GfYQCrqy6qrTb0GmjghxlZiOxObdfR%2Bm%2FuFVqjLOtOhnvvSJpdpzfhlqZpGs8X1tacehfP9WhWl5%2FI0FelyMohIqGNoZOE%2FrgyL7mnA5Fge%2BwhwBJ5tCv6Zy8BW0JVlvmth5JYoU%2BD3FkE%2BoyZSSJlmSf9tVQ9m4NFJ%2FvAd5fJE96tC47PYv7CSdjUPApOXXPZku%2BGJnc58WOscz6xmoOpgOjWAy3WuSKQuiw5%2B%2B6wRdo9sZrDtaxWAt1Gt5WjHPzVSoCccAqYkyAYlvIni0bzp%2FPGSO0N8o5d60j42lhSoSk480JZROpE%2BNHSVkdQOiAoBShjcEfy69%2Fq6iRTBZn9GB%2Bp9xeGGtZWmneByxLSA43eUjURtoDIJM64nBKbA5CfkXGcToSO%2BEbNebOzDFuqbCBjqkAbZwqLZLMobjjAdbkFMGiMCdCBFRaEGNHAH6WmolXkkX5RVAB7utIoFs1lGzyqD2p8RnePK2Fyl4aNMEdqDL3goDA%2F4VyOsxr3Ij76yVauIAoRbmHZhqpsiBayHq4d9aAwOR%2BGIyQndZ11C7hd4nbs0FEciHL7NfzXWT1%2BEnGDawgXySHbG7mjbB08IBSMVbaz%2BvMRjfFviwDSqqhthzt7IbTILw&X-Amz-Signature=3fe7d4b445c753ac6f70bdfcb6289a1c33f3a99dc9e6e6d3daae65a9000be04f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U23YL3N%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpsmZTZZtUIduX21YmZerWRZovOGZlrQtsJ7F6MBYGSwIhAPby9LSKzuLtdJcydPCDvrnSRCYWD8soDvePHou3Kz0cKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUAvWx9Z4zErNZQcsq3AMntaFd3Gyg3R04j5pOLSlu2BxXfSvTFo%2FK8RGMcpplh%2BGY8cISccUj1vtHqboX%2F3bOoJGMAqTtzNoRtr8OW8xO40Ib2cd%2B8jvA%2Bi9PuevTS0dsodUeYxhBiaJLDFrpfnxlCPju0i%2Fh%2FY4KBEKJD%2B9O2MpUplcrmMUw2geQhZDHB356MPHRTuGMVqtKx%2FmH29c9%2FS5DuNpTz%2BXmZVPQ8YYcxdtvQkCpY9hTiO1QOXE5GfYQCrqy6qrTb0GmjghxlZiOxObdfR%2Bm%2FuFVqjLOtOhnvvSJpdpzfhlqZpGs8X1tacehfP9WhWl5%2FI0FelyMohIqGNoZOE%2FrgyL7mnA5Fge%2BwhwBJ5tCv6Zy8BW0JVlvmth5JYoU%2BD3FkE%2BoyZSSJlmSf9tVQ9m4NFJ%2FvAd5fJE96tC47PYv7CSdjUPApOXXPZku%2BGJnc58WOscz6xmoOpgOjWAy3WuSKQuiw5%2B%2B6wRdo9sZrDtaxWAt1Gt5WjHPzVSoCccAqYkyAYlvIni0bzp%2FPGSO0N8o5d60j42lhSoSk480JZROpE%2BNHSVkdQOiAoBShjcEfy69%2Fq6iRTBZn9GB%2Bp9xeGGtZWmneByxLSA43eUjURtoDIJM64nBKbA5CfkXGcToSO%2BEbNebOzDFuqbCBjqkAbZwqLZLMobjjAdbkFMGiMCdCBFRaEGNHAH6WmolXkkX5RVAB7utIoFs1lGzyqD2p8RnePK2Fyl4aNMEdqDL3goDA%2F4VyOsxr3Ij76yVauIAoRbmHZhqpsiBayHq4d9aAwOR%2BGIyQndZ11C7hd4nbs0FEciHL7NfzXWT1%2BEnGDawgXySHbG7mjbB08IBSMVbaz%2BvMRjfFviwDSqqhthzt7IbTILw&X-Amz-Signature=42c1d0b5563e0e4fd514028466af72fbcaa05b6a82fa0479dac1e6a77df16d31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U23YL3N%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpsmZTZZtUIduX21YmZerWRZovOGZlrQtsJ7F6MBYGSwIhAPby9LSKzuLtdJcydPCDvrnSRCYWD8soDvePHou3Kz0cKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUAvWx9Z4zErNZQcsq3AMntaFd3Gyg3R04j5pOLSlu2BxXfSvTFo%2FK8RGMcpplh%2BGY8cISccUj1vtHqboX%2F3bOoJGMAqTtzNoRtr8OW8xO40Ib2cd%2B8jvA%2Bi9PuevTS0dsodUeYxhBiaJLDFrpfnxlCPju0i%2Fh%2FY4KBEKJD%2B9O2MpUplcrmMUw2geQhZDHB356MPHRTuGMVqtKx%2FmH29c9%2FS5DuNpTz%2BXmZVPQ8YYcxdtvQkCpY9hTiO1QOXE5GfYQCrqy6qrTb0GmjghxlZiOxObdfR%2Bm%2FuFVqjLOtOhnvvSJpdpzfhlqZpGs8X1tacehfP9WhWl5%2FI0FelyMohIqGNoZOE%2FrgyL7mnA5Fge%2BwhwBJ5tCv6Zy8BW0JVlvmth5JYoU%2BD3FkE%2BoyZSSJlmSf9tVQ9m4NFJ%2FvAd5fJE96tC47PYv7CSdjUPApOXXPZku%2BGJnc58WOscz6xmoOpgOjWAy3WuSKQuiw5%2B%2B6wRdo9sZrDtaxWAt1Gt5WjHPzVSoCccAqYkyAYlvIni0bzp%2FPGSO0N8o5d60j42lhSoSk480JZROpE%2BNHSVkdQOiAoBShjcEfy69%2Fq6iRTBZn9GB%2Bp9xeGGtZWmneByxLSA43eUjURtoDIJM64nBKbA5CfkXGcToSO%2BEbNebOzDFuqbCBjqkAbZwqLZLMobjjAdbkFMGiMCdCBFRaEGNHAH6WmolXkkX5RVAB7utIoFs1lGzyqD2p8RnePK2Fyl4aNMEdqDL3goDA%2F4VyOsxr3Ij76yVauIAoRbmHZhqpsiBayHq4d9aAwOR%2BGIyQndZ11C7hd4nbs0FEciHL7NfzXWT1%2BEnGDawgXySHbG7mjbB08IBSMVbaz%2BvMRjfFviwDSqqhthzt7IbTILw&X-Amz-Signature=7b0e99382eabb276810bfc9df7c5a2369e0539101d8c4c13d8d3dace155c160e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U23YL3N%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpsmZTZZtUIduX21YmZerWRZovOGZlrQtsJ7F6MBYGSwIhAPby9LSKzuLtdJcydPCDvrnSRCYWD8soDvePHou3Kz0cKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUAvWx9Z4zErNZQcsq3AMntaFd3Gyg3R04j5pOLSlu2BxXfSvTFo%2FK8RGMcpplh%2BGY8cISccUj1vtHqboX%2F3bOoJGMAqTtzNoRtr8OW8xO40Ib2cd%2B8jvA%2Bi9PuevTS0dsodUeYxhBiaJLDFrpfnxlCPju0i%2Fh%2FY4KBEKJD%2B9O2MpUplcrmMUw2geQhZDHB356MPHRTuGMVqtKx%2FmH29c9%2FS5DuNpTz%2BXmZVPQ8YYcxdtvQkCpY9hTiO1QOXE5GfYQCrqy6qrTb0GmjghxlZiOxObdfR%2Bm%2FuFVqjLOtOhnvvSJpdpzfhlqZpGs8X1tacehfP9WhWl5%2FI0FelyMohIqGNoZOE%2FrgyL7mnA5Fge%2BwhwBJ5tCv6Zy8BW0JVlvmth5JYoU%2BD3FkE%2BoyZSSJlmSf9tVQ9m4NFJ%2FvAd5fJE96tC47PYv7CSdjUPApOXXPZku%2BGJnc58WOscz6xmoOpgOjWAy3WuSKQuiw5%2B%2B6wRdo9sZrDtaxWAt1Gt5WjHPzVSoCccAqYkyAYlvIni0bzp%2FPGSO0N8o5d60j42lhSoSk480JZROpE%2BNHSVkdQOiAoBShjcEfy69%2Fq6iRTBZn9GB%2Bp9xeGGtZWmneByxLSA43eUjURtoDIJM64nBKbA5CfkXGcToSO%2BEbNebOzDFuqbCBjqkAbZwqLZLMobjjAdbkFMGiMCdCBFRaEGNHAH6WmolXkkX5RVAB7utIoFs1lGzyqD2p8RnePK2Fyl4aNMEdqDL3goDA%2F4VyOsxr3Ij76yVauIAoRbmHZhqpsiBayHq4d9aAwOR%2BGIyQndZ11C7hd4nbs0FEciHL7NfzXWT1%2BEnGDawgXySHbG7mjbB08IBSMVbaz%2BvMRjfFviwDSqqhthzt7IbTILw&X-Amz-Signature=e68cc70e2c9d6ab36d6390d0fceb88a3ca21b2a590f8f21bdea03e379db32fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U23YL3N%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpsmZTZZtUIduX21YmZerWRZovOGZlrQtsJ7F6MBYGSwIhAPby9LSKzuLtdJcydPCDvrnSRCYWD8soDvePHou3Kz0cKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyUAvWx9Z4zErNZQcsq3AMntaFd3Gyg3R04j5pOLSlu2BxXfSvTFo%2FK8RGMcpplh%2BGY8cISccUj1vtHqboX%2F3bOoJGMAqTtzNoRtr8OW8xO40Ib2cd%2B8jvA%2Bi9PuevTS0dsodUeYxhBiaJLDFrpfnxlCPju0i%2Fh%2FY4KBEKJD%2B9O2MpUplcrmMUw2geQhZDHB356MPHRTuGMVqtKx%2FmH29c9%2FS5DuNpTz%2BXmZVPQ8YYcxdtvQkCpY9hTiO1QOXE5GfYQCrqy6qrTb0GmjghxlZiOxObdfR%2Bm%2FuFVqjLOtOhnvvSJpdpzfhlqZpGs8X1tacehfP9WhWl5%2FI0FelyMohIqGNoZOE%2FrgyL7mnA5Fge%2BwhwBJ5tCv6Zy8BW0JVlvmth5JYoU%2BD3FkE%2BoyZSSJlmSf9tVQ9m4NFJ%2FvAd5fJE96tC47PYv7CSdjUPApOXXPZku%2BGJnc58WOscz6xmoOpgOjWAy3WuSKQuiw5%2B%2B6wRdo9sZrDtaxWAt1Gt5WjHPzVSoCccAqYkyAYlvIni0bzp%2FPGSO0N8o5d60j42lhSoSk480JZROpE%2BNHSVkdQOiAoBShjcEfy69%2Fq6iRTBZn9GB%2Bp9xeGGtZWmneByxLSA43eUjURtoDIJM64nBKbA5CfkXGcToSO%2BEbNebOzDFuqbCBjqkAbZwqLZLMobjjAdbkFMGiMCdCBFRaEGNHAH6WmolXkkX5RVAB7utIoFs1lGzyqD2p8RnePK2Fyl4aNMEdqDL3goDA%2F4VyOsxr3Ij76yVauIAoRbmHZhqpsiBayHq4d9aAwOR%2BGIyQndZ11C7hd4nbs0FEciHL7NfzXWT1%2BEnGDawgXySHbG7mjbB08IBSMVbaz%2BvMRjfFviwDSqqhthzt7IbTILw&X-Amz-Signature=8eb6588a8443e7ced7b75ad0bc3d55f3d8dc8dafd5daa759236cb39a26f9b1f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
