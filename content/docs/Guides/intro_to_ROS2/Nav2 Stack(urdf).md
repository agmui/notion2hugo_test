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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPTK2VLY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdfnDEvdwdwHZ26GM32IwQ6gvD69mVSGtlpYZOjaMYkgIgHiOK5f3Nl%2BgqNybfyfmUfvv4B%2BYmArE%2BTTyxDguHiZMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiwiqWWo96BFhGR7yrcA6%2FuQUhogD0R1AMqs88kPv0ibUbPoBs4X67w1G71VC3rTs0hUTphaeBj531%2FF2fbaYmH2SlssoRbymTVzbVtanqk4Mr5CNB%2BItsXECPHnsMlRrQj7Rngu5%2BcvndmpR%2BVXbo0IIoBG3u8g3aXY3883XUxhSrdI4VWZvUIcT7ssXjXx0N5KP%2BY1jQsyGQzfDTHwcnUIGVJOQCgeoua0IjfcbEGH2YdUHbv8Esym19xGqqlfVoSpRRNqfE3wBFpAq5fgSeWoqKyPllNsNKOm9RNhLDjx2SuiBr2MjEQIQuOqhdP5SAdSDmbQoMX40u0TkiukaB4XnN%2FI6m7pXqP8it4chXPguYNMECsfMi05FW5%2BywsM2sz1o%2F53oV82giLWCuIkmMUEXr3SDQFakyF1tS7D2WPD4fdgw5Liy9sNe6F6sxcvItg60qu4ip22SiSK1W%2Boo0HXUyui9%2F6b2NLQG8LmosUwDbS2iiVNUEN%2BRaVD1ZhXUZZw9IOQWm0RFV4RC1DKxdwb9LEymDrUZk%2FK%2B%2Bkk9ZBT7LNxe6zP8ph5Wwk2MSqPLLUI457GQb7GI8ul8aYRXv24OZOQf%2BhvtKr0ao4FfPeji6%2FyHLKE1emGKJ%2Bv2Oz4VNcRNdS3lJJ03pJMOW68sMGOqUBZyUp%2FYVgIVbhwvk%2Fdh%2B7xZQD1K4vCh%2FIRoN5NdvA9Kih0PfFWeOMN4N6115xAK%2BKIz4fgH65HMpRqKg6SjtfDl8jO6DJY0zfroQTYfCzNjp1Ci2wJ5nGKluE%2FsAKcG1eikZlCi0O3Dkt2ObzmjyQtQ1JG1zUrSLSu6hEYToQliYbD7b%2FwNhCgN%2FbmoTPDK7sZTpFTLalWML6uPiFGFyv6MBegqt3&X-Amz-Signature=e832c8ee72fc1a1df14b43c66bc9a4c031b784a90c749b94c22a1b48de8fc379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPTK2VLY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdfnDEvdwdwHZ26GM32IwQ6gvD69mVSGtlpYZOjaMYkgIgHiOK5f3Nl%2BgqNybfyfmUfvv4B%2BYmArE%2BTTyxDguHiZMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiwiqWWo96BFhGR7yrcA6%2FuQUhogD0R1AMqs88kPv0ibUbPoBs4X67w1G71VC3rTs0hUTphaeBj531%2FF2fbaYmH2SlssoRbymTVzbVtanqk4Mr5CNB%2BItsXECPHnsMlRrQj7Rngu5%2BcvndmpR%2BVXbo0IIoBG3u8g3aXY3883XUxhSrdI4VWZvUIcT7ssXjXx0N5KP%2BY1jQsyGQzfDTHwcnUIGVJOQCgeoua0IjfcbEGH2YdUHbv8Esym19xGqqlfVoSpRRNqfE3wBFpAq5fgSeWoqKyPllNsNKOm9RNhLDjx2SuiBr2MjEQIQuOqhdP5SAdSDmbQoMX40u0TkiukaB4XnN%2FI6m7pXqP8it4chXPguYNMECsfMi05FW5%2BywsM2sz1o%2F53oV82giLWCuIkmMUEXr3SDQFakyF1tS7D2WPD4fdgw5Liy9sNe6F6sxcvItg60qu4ip22SiSK1W%2Boo0HXUyui9%2F6b2NLQG8LmosUwDbS2iiVNUEN%2BRaVD1ZhXUZZw9IOQWm0RFV4RC1DKxdwb9LEymDrUZk%2FK%2B%2Bkk9ZBT7LNxe6zP8ph5Wwk2MSqPLLUI457GQb7GI8ul8aYRXv24OZOQf%2BhvtKr0ao4FfPeji6%2FyHLKE1emGKJ%2Bv2Oz4VNcRNdS3lJJ03pJMOW68sMGOqUBZyUp%2FYVgIVbhwvk%2Fdh%2B7xZQD1K4vCh%2FIRoN5NdvA9Kih0PfFWeOMN4N6115xAK%2BKIz4fgH65HMpRqKg6SjtfDl8jO6DJY0zfroQTYfCzNjp1Ci2wJ5nGKluE%2FsAKcG1eikZlCi0O3Dkt2ObzmjyQtQ1JG1zUrSLSu6hEYToQliYbD7b%2FwNhCgN%2FbmoTPDK7sZTpFTLalWML6uPiFGFyv6MBegqt3&X-Amz-Signature=277c672d993b413e09fef41b803e1dc57d0465dce9f1d6057797d48e63c7833b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPTK2VLY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdfnDEvdwdwHZ26GM32IwQ6gvD69mVSGtlpYZOjaMYkgIgHiOK5f3Nl%2BgqNybfyfmUfvv4B%2BYmArE%2BTTyxDguHiZMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiwiqWWo96BFhGR7yrcA6%2FuQUhogD0R1AMqs88kPv0ibUbPoBs4X67w1G71VC3rTs0hUTphaeBj531%2FF2fbaYmH2SlssoRbymTVzbVtanqk4Mr5CNB%2BItsXECPHnsMlRrQj7Rngu5%2BcvndmpR%2BVXbo0IIoBG3u8g3aXY3883XUxhSrdI4VWZvUIcT7ssXjXx0N5KP%2BY1jQsyGQzfDTHwcnUIGVJOQCgeoua0IjfcbEGH2YdUHbv8Esym19xGqqlfVoSpRRNqfE3wBFpAq5fgSeWoqKyPllNsNKOm9RNhLDjx2SuiBr2MjEQIQuOqhdP5SAdSDmbQoMX40u0TkiukaB4XnN%2FI6m7pXqP8it4chXPguYNMECsfMi05FW5%2BywsM2sz1o%2F53oV82giLWCuIkmMUEXr3SDQFakyF1tS7D2WPD4fdgw5Liy9sNe6F6sxcvItg60qu4ip22SiSK1W%2Boo0HXUyui9%2F6b2NLQG8LmosUwDbS2iiVNUEN%2BRaVD1ZhXUZZw9IOQWm0RFV4RC1DKxdwb9LEymDrUZk%2FK%2B%2Bkk9ZBT7LNxe6zP8ph5Wwk2MSqPLLUI457GQb7GI8ul8aYRXv24OZOQf%2BhvtKr0ao4FfPeji6%2FyHLKE1emGKJ%2Bv2Oz4VNcRNdS3lJJ03pJMOW68sMGOqUBZyUp%2FYVgIVbhwvk%2Fdh%2B7xZQD1K4vCh%2FIRoN5NdvA9Kih0PfFWeOMN4N6115xAK%2BKIz4fgH65HMpRqKg6SjtfDl8jO6DJY0zfroQTYfCzNjp1Ci2wJ5nGKluE%2FsAKcG1eikZlCi0O3Dkt2ObzmjyQtQ1JG1zUrSLSu6hEYToQliYbD7b%2FwNhCgN%2FbmoTPDK7sZTpFTLalWML6uPiFGFyv6MBegqt3&X-Amz-Signature=03ea7dd34aa376d64d2eca4a966cee4eee52a7d17af19cdca4290e8cf9a59b87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPTK2VLY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdfnDEvdwdwHZ26GM32IwQ6gvD69mVSGtlpYZOjaMYkgIgHiOK5f3Nl%2BgqNybfyfmUfvv4B%2BYmArE%2BTTyxDguHiZMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiwiqWWo96BFhGR7yrcA6%2FuQUhogD0R1AMqs88kPv0ibUbPoBs4X67w1G71VC3rTs0hUTphaeBj531%2FF2fbaYmH2SlssoRbymTVzbVtanqk4Mr5CNB%2BItsXECPHnsMlRrQj7Rngu5%2BcvndmpR%2BVXbo0IIoBG3u8g3aXY3883XUxhSrdI4VWZvUIcT7ssXjXx0N5KP%2BY1jQsyGQzfDTHwcnUIGVJOQCgeoua0IjfcbEGH2YdUHbv8Esym19xGqqlfVoSpRRNqfE3wBFpAq5fgSeWoqKyPllNsNKOm9RNhLDjx2SuiBr2MjEQIQuOqhdP5SAdSDmbQoMX40u0TkiukaB4XnN%2FI6m7pXqP8it4chXPguYNMECsfMi05FW5%2BywsM2sz1o%2F53oV82giLWCuIkmMUEXr3SDQFakyF1tS7D2WPD4fdgw5Liy9sNe6F6sxcvItg60qu4ip22SiSK1W%2Boo0HXUyui9%2F6b2NLQG8LmosUwDbS2iiVNUEN%2BRaVD1ZhXUZZw9IOQWm0RFV4RC1DKxdwb9LEymDrUZk%2FK%2B%2Bkk9ZBT7LNxe6zP8ph5Wwk2MSqPLLUI457GQb7GI8ul8aYRXv24OZOQf%2BhvtKr0ao4FfPeji6%2FyHLKE1emGKJ%2Bv2Oz4VNcRNdS3lJJ03pJMOW68sMGOqUBZyUp%2FYVgIVbhwvk%2Fdh%2B7xZQD1K4vCh%2FIRoN5NdvA9Kih0PfFWeOMN4N6115xAK%2BKIz4fgH65HMpRqKg6SjtfDl8jO6DJY0zfroQTYfCzNjp1Ci2wJ5nGKluE%2FsAKcG1eikZlCi0O3Dkt2ObzmjyQtQ1JG1zUrSLSu6hEYToQliYbD7b%2FwNhCgN%2FbmoTPDK7sZTpFTLalWML6uPiFGFyv6MBegqt3&X-Amz-Signature=37c1de913acfb43b79df707a8fec64fdb3748eed42ee9c5c260803783a3c8ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPTK2VLY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdfnDEvdwdwHZ26GM32IwQ6gvD69mVSGtlpYZOjaMYkgIgHiOK5f3Nl%2BgqNybfyfmUfvv4B%2BYmArE%2BTTyxDguHiZMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiwiqWWo96BFhGR7yrcA6%2FuQUhogD0R1AMqs88kPv0ibUbPoBs4X67w1G71VC3rTs0hUTphaeBj531%2FF2fbaYmH2SlssoRbymTVzbVtanqk4Mr5CNB%2BItsXECPHnsMlRrQj7Rngu5%2BcvndmpR%2BVXbo0IIoBG3u8g3aXY3883XUxhSrdI4VWZvUIcT7ssXjXx0N5KP%2BY1jQsyGQzfDTHwcnUIGVJOQCgeoua0IjfcbEGH2YdUHbv8Esym19xGqqlfVoSpRRNqfE3wBFpAq5fgSeWoqKyPllNsNKOm9RNhLDjx2SuiBr2MjEQIQuOqhdP5SAdSDmbQoMX40u0TkiukaB4XnN%2FI6m7pXqP8it4chXPguYNMECsfMi05FW5%2BywsM2sz1o%2F53oV82giLWCuIkmMUEXr3SDQFakyF1tS7D2WPD4fdgw5Liy9sNe6F6sxcvItg60qu4ip22SiSK1W%2Boo0HXUyui9%2F6b2NLQG8LmosUwDbS2iiVNUEN%2BRaVD1ZhXUZZw9IOQWm0RFV4RC1DKxdwb9LEymDrUZk%2FK%2B%2Bkk9ZBT7LNxe6zP8ph5Wwk2MSqPLLUI457GQb7GI8ul8aYRXv24OZOQf%2BhvtKr0ao4FfPeji6%2FyHLKE1emGKJ%2Bv2Oz4VNcRNdS3lJJ03pJMOW68sMGOqUBZyUp%2FYVgIVbhwvk%2Fdh%2B7xZQD1K4vCh%2FIRoN5NdvA9Kih0PfFWeOMN4N6115xAK%2BKIz4fgH65HMpRqKg6SjtfDl8jO6DJY0zfroQTYfCzNjp1Ci2wJ5nGKluE%2FsAKcG1eikZlCi0O3Dkt2ObzmjyQtQ1JG1zUrSLSu6hEYToQliYbD7b%2FwNhCgN%2FbmoTPDK7sZTpFTLalWML6uPiFGFyv6MBegqt3&X-Amz-Signature=b6b005c3f34b8c42faa752b5d814e0a1d39364c8f3ea07fd37fa3694f1c1f06f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPTK2VLY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdfnDEvdwdwHZ26GM32IwQ6gvD69mVSGtlpYZOjaMYkgIgHiOK5f3Nl%2BgqNybfyfmUfvv4B%2BYmArE%2BTTyxDguHiZMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPiwiqWWo96BFhGR7yrcA6%2FuQUhogD0R1AMqs88kPv0ibUbPoBs4X67w1G71VC3rTs0hUTphaeBj531%2FF2fbaYmH2SlssoRbymTVzbVtanqk4Mr5CNB%2BItsXECPHnsMlRrQj7Rngu5%2BcvndmpR%2BVXbo0IIoBG3u8g3aXY3883XUxhSrdI4VWZvUIcT7ssXjXx0N5KP%2BY1jQsyGQzfDTHwcnUIGVJOQCgeoua0IjfcbEGH2YdUHbv8Esym19xGqqlfVoSpRRNqfE3wBFpAq5fgSeWoqKyPllNsNKOm9RNhLDjx2SuiBr2MjEQIQuOqhdP5SAdSDmbQoMX40u0TkiukaB4XnN%2FI6m7pXqP8it4chXPguYNMECsfMi05FW5%2BywsM2sz1o%2F53oV82giLWCuIkmMUEXr3SDQFakyF1tS7D2WPD4fdgw5Liy9sNe6F6sxcvItg60qu4ip22SiSK1W%2Boo0HXUyui9%2F6b2NLQG8LmosUwDbS2iiVNUEN%2BRaVD1ZhXUZZw9IOQWm0RFV4RC1DKxdwb9LEymDrUZk%2FK%2B%2Bkk9ZBT7LNxe6zP8ph5Wwk2MSqPLLUI457GQb7GI8ul8aYRXv24OZOQf%2BhvtKr0ao4FfPeji6%2FyHLKE1emGKJ%2Bv2Oz4VNcRNdS3lJJ03pJMOW68sMGOqUBZyUp%2FYVgIVbhwvk%2Fdh%2B7xZQD1K4vCh%2FIRoN5NdvA9Kih0PfFWeOMN4N6115xAK%2BKIz4fgH65HMpRqKg6SjtfDl8jO6DJY0zfroQTYfCzNjp1Ci2wJ5nGKluE%2FsAKcG1eikZlCi0O3Dkt2ObzmjyQtQ1JG1zUrSLSu6hEYToQliYbD7b%2FwNhCgN%2FbmoTPDK7sZTpFTLalWML6uPiFGFyv6MBegqt3&X-Amz-Signature=41e65cb7cc3f63402917cb216d5c34e86ec571adb6ef23b2301102c4add9ed3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
