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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B4BHT5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQb50XX8adKoXcQRcq8E2Kls7CMpRSGyTI4XHurTrZNAiEAwO1SSlTJZHYGoxu77FFW2kAqjiAaO3Naj5GcsxR9JqcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAauyWANqiKPt2LH%2BCrcAyi2isT66XhzieMP3TqMnLb7y63utxqv2cYQuqO6ypBTQ726BuTmTwyrJv%2BT09ra2IZYrrpfVR%2B1dxgm1rKHFugdC97KIIhhy498CoqsEMw6nfaRrQ7WK9O%2BmdPwX8Fn0Nfkw%2FsJxWK4Fjhjlfwh%2FQS6nwoNR2ZJp1Yv1FzPOrPlYcibYerPBmYNbdSySKYkgwmtjIfVxD54ap3eXA%2FA3gapeJgAzBtJ1nC3n%2FVBhlJvcReQ1CzvGqBG9RlVtfXQTP4CxyOxoFd9il5FdiChRt3GY%2FVUjrcWx8gFLSP37FwpMuXIFkdmzjw1RcKmIDTU2IXEdfgoIP81jUp6KWQqGj8gJd9nQs5euCm%2B2qofLzPFL1TT6I71WfzwbFHEhqy0dexIKI1XMtPwrGrWZMeWviEMcYnoK66cK9co6CNO%2FnW1nTIhRSXkmEtTpaaFXbsvjMWljiI38IkY427e7zPzodTzMTYaTrDiP%2B2jwQwnu74eGjY8WFw%2Bxnu0LjyH0zBOI3AvSo8Td6e%2BYUbG%2FYNgauTohG3PdyHzWJtUJ87eIUIqD7rn6v9mRz1WtrIlTHItYVem%2BKPs8vgsQ%2Fo7NiDNqulAyjLSkWcqGUcWj42pZmcXV0RdnpPP9MEIS2WtMLv4mL4GOqUB5EqD58lwF0iddh0LdtcddDpGW2YWoVTn5PPU0ApazjK4DZrvw%2FblniQJMjWhApd1SwMT8J5wlWL2j4eUBzP2cWf%2B0YEmP1pB8J%2B122amMr1XmQ5QHe7vS7qIcXavP7siTBKNRgTLUSdmLhAaRWoacTMc9LMsPrnVEGdTUWd5R8x21C%2FjkHmLDetUNIb1kmhqeglld0n%2FIgrUNca%2FSIKzNN7P%2FQGw&X-Amz-Signature=07e9c414a092b59b04bf022323079f4c2c4d532d936d0879fe735a51796f11de&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B4BHT5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQb50XX8adKoXcQRcq8E2Kls7CMpRSGyTI4XHurTrZNAiEAwO1SSlTJZHYGoxu77FFW2kAqjiAaO3Naj5GcsxR9JqcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAauyWANqiKPt2LH%2BCrcAyi2isT66XhzieMP3TqMnLb7y63utxqv2cYQuqO6ypBTQ726BuTmTwyrJv%2BT09ra2IZYrrpfVR%2B1dxgm1rKHFugdC97KIIhhy498CoqsEMw6nfaRrQ7WK9O%2BmdPwX8Fn0Nfkw%2FsJxWK4Fjhjlfwh%2FQS6nwoNR2ZJp1Yv1FzPOrPlYcibYerPBmYNbdSySKYkgwmtjIfVxD54ap3eXA%2FA3gapeJgAzBtJ1nC3n%2FVBhlJvcReQ1CzvGqBG9RlVtfXQTP4CxyOxoFd9il5FdiChRt3GY%2FVUjrcWx8gFLSP37FwpMuXIFkdmzjw1RcKmIDTU2IXEdfgoIP81jUp6KWQqGj8gJd9nQs5euCm%2B2qofLzPFL1TT6I71WfzwbFHEhqy0dexIKI1XMtPwrGrWZMeWviEMcYnoK66cK9co6CNO%2FnW1nTIhRSXkmEtTpaaFXbsvjMWljiI38IkY427e7zPzodTzMTYaTrDiP%2B2jwQwnu74eGjY8WFw%2Bxnu0LjyH0zBOI3AvSo8Td6e%2BYUbG%2FYNgauTohG3PdyHzWJtUJ87eIUIqD7rn6v9mRz1WtrIlTHItYVem%2BKPs8vgsQ%2Fo7NiDNqulAyjLSkWcqGUcWj42pZmcXV0RdnpPP9MEIS2WtMLv4mL4GOqUB5EqD58lwF0iddh0LdtcddDpGW2YWoVTn5PPU0ApazjK4DZrvw%2FblniQJMjWhApd1SwMT8J5wlWL2j4eUBzP2cWf%2B0YEmP1pB8J%2B122amMr1XmQ5QHe7vS7qIcXavP7siTBKNRgTLUSdmLhAaRWoacTMc9LMsPrnVEGdTUWd5R8x21C%2FjkHmLDetUNIb1kmhqeglld0n%2FIgrUNca%2FSIKzNN7P%2FQGw&X-Amz-Signature=8586786393a605ed10e974b014bd0f5b9dc1e65f06389588b3434c74a97167f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B4BHT5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQb50XX8adKoXcQRcq8E2Kls7CMpRSGyTI4XHurTrZNAiEAwO1SSlTJZHYGoxu77FFW2kAqjiAaO3Naj5GcsxR9JqcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAauyWANqiKPt2LH%2BCrcAyi2isT66XhzieMP3TqMnLb7y63utxqv2cYQuqO6ypBTQ726BuTmTwyrJv%2BT09ra2IZYrrpfVR%2B1dxgm1rKHFugdC97KIIhhy498CoqsEMw6nfaRrQ7WK9O%2BmdPwX8Fn0Nfkw%2FsJxWK4Fjhjlfwh%2FQS6nwoNR2ZJp1Yv1FzPOrPlYcibYerPBmYNbdSySKYkgwmtjIfVxD54ap3eXA%2FA3gapeJgAzBtJ1nC3n%2FVBhlJvcReQ1CzvGqBG9RlVtfXQTP4CxyOxoFd9il5FdiChRt3GY%2FVUjrcWx8gFLSP37FwpMuXIFkdmzjw1RcKmIDTU2IXEdfgoIP81jUp6KWQqGj8gJd9nQs5euCm%2B2qofLzPFL1TT6I71WfzwbFHEhqy0dexIKI1XMtPwrGrWZMeWviEMcYnoK66cK9co6CNO%2FnW1nTIhRSXkmEtTpaaFXbsvjMWljiI38IkY427e7zPzodTzMTYaTrDiP%2B2jwQwnu74eGjY8WFw%2Bxnu0LjyH0zBOI3AvSo8Td6e%2BYUbG%2FYNgauTohG3PdyHzWJtUJ87eIUIqD7rn6v9mRz1WtrIlTHItYVem%2BKPs8vgsQ%2Fo7NiDNqulAyjLSkWcqGUcWj42pZmcXV0RdnpPP9MEIS2WtMLv4mL4GOqUB5EqD58lwF0iddh0LdtcddDpGW2YWoVTn5PPU0ApazjK4DZrvw%2FblniQJMjWhApd1SwMT8J5wlWL2j4eUBzP2cWf%2B0YEmP1pB8J%2B122amMr1XmQ5QHe7vS7qIcXavP7siTBKNRgTLUSdmLhAaRWoacTMc9LMsPrnVEGdTUWd5R8x21C%2FjkHmLDetUNIb1kmhqeglld0n%2FIgrUNca%2FSIKzNN7P%2FQGw&X-Amz-Signature=21f897300c9f52ef026f724d08123997f6f4863cf6c5e56f6ee5505bfe2c5cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B4BHT5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQb50XX8adKoXcQRcq8E2Kls7CMpRSGyTI4XHurTrZNAiEAwO1SSlTJZHYGoxu77FFW2kAqjiAaO3Naj5GcsxR9JqcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAauyWANqiKPt2LH%2BCrcAyi2isT66XhzieMP3TqMnLb7y63utxqv2cYQuqO6ypBTQ726BuTmTwyrJv%2BT09ra2IZYrrpfVR%2B1dxgm1rKHFugdC97KIIhhy498CoqsEMw6nfaRrQ7WK9O%2BmdPwX8Fn0Nfkw%2FsJxWK4Fjhjlfwh%2FQS6nwoNR2ZJp1Yv1FzPOrPlYcibYerPBmYNbdSySKYkgwmtjIfVxD54ap3eXA%2FA3gapeJgAzBtJ1nC3n%2FVBhlJvcReQ1CzvGqBG9RlVtfXQTP4CxyOxoFd9il5FdiChRt3GY%2FVUjrcWx8gFLSP37FwpMuXIFkdmzjw1RcKmIDTU2IXEdfgoIP81jUp6KWQqGj8gJd9nQs5euCm%2B2qofLzPFL1TT6I71WfzwbFHEhqy0dexIKI1XMtPwrGrWZMeWviEMcYnoK66cK9co6CNO%2FnW1nTIhRSXkmEtTpaaFXbsvjMWljiI38IkY427e7zPzodTzMTYaTrDiP%2B2jwQwnu74eGjY8WFw%2Bxnu0LjyH0zBOI3AvSo8Td6e%2BYUbG%2FYNgauTohG3PdyHzWJtUJ87eIUIqD7rn6v9mRz1WtrIlTHItYVem%2BKPs8vgsQ%2Fo7NiDNqulAyjLSkWcqGUcWj42pZmcXV0RdnpPP9MEIS2WtMLv4mL4GOqUB5EqD58lwF0iddh0LdtcddDpGW2YWoVTn5PPU0ApazjK4DZrvw%2FblniQJMjWhApd1SwMT8J5wlWL2j4eUBzP2cWf%2B0YEmP1pB8J%2B122amMr1XmQ5QHe7vS7qIcXavP7siTBKNRgTLUSdmLhAaRWoacTMc9LMsPrnVEGdTUWd5R8x21C%2FjkHmLDetUNIb1kmhqeglld0n%2FIgrUNca%2FSIKzNN7P%2FQGw&X-Amz-Signature=98770225d0785140474a5a5af0a6e7d759ddf9be6feb875152472d8386629cca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B4BHT5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQb50XX8adKoXcQRcq8E2Kls7CMpRSGyTI4XHurTrZNAiEAwO1SSlTJZHYGoxu77FFW2kAqjiAaO3Naj5GcsxR9JqcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAauyWANqiKPt2LH%2BCrcAyi2isT66XhzieMP3TqMnLb7y63utxqv2cYQuqO6ypBTQ726BuTmTwyrJv%2BT09ra2IZYrrpfVR%2B1dxgm1rKHFugdC97KIIhhy498CoqsEMw6nfaRrQ7WK9O%2BmdPwX8Fn0Nfkw%2FsJxWK4Fjhjlfwh%2FQS6nwoNR2ZJp1Yv1FzPOrPlYcibYerPBmYNbdSySKYkgwmtjIfVxD54ap3eXA%2FA3gapeJgAzBtJ1nC3n%2FVBhlJvcReQ1CzvGqBG9RlVtfXQTP4CxyOxoFd9il5FdiChRt3GY%2FVUjrcWx8gFLSP37FwpMuXIFkdmzjw1RcKmIDTU2IXEdfgoIP81jUp6KWQqGj8gJd9nQs5euCm%2B2qofLzPFL1TT6I71WfzwbFHEhqy0dexIKI1XMtPwrGrWZMeWviEMcYnoK66cK9co6CNO%2FnW1nTIhRSXkmEtTpaaFXbsvjMWljiI38IkY427e7zPzodTzMTYaTrDiP%2B2jwQwnu74eGjY8WFw%2Bxnu0LjyH0zBOI3AvSo8Td6e%2BYUbG%2FYNgauTohG3PdyHzWJtUJ87eIUIqD7rn6v9mRz1WtrIlTHItYVem%2BKPs8vgsQ%2Fo7NiDNqulAyjLSkWcqGUcWj42pZmcXV0RdnpPP9MEIS2WtMLv4mL4GOqUB5EqD58lwF0iddh0LdtcddDpGW2YWoVTn5PPU0ApazjK4DZrvw%2FblniQJMjWhApd1SwMT8J5wlWL2j4eUBzP2cWf%2B0YEmP1pB8J%2B122amMr1XmQ5QHe7vS7qIcXavP7siTBKNRgTLUSdmLhAaRWoacTMc9LMsPrnVEGdTUWd5R8x21C%2FjkHmLDetUNIb1kmhqeglld0n%2FIgrUNca%2FSIKzNN7P%2FQGw&X-Amz-Signature=d2e64854cb0eb4fc3f6b8b957d3098739869b89cb72f2186ffb3058b1fe91a90&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625B4BHT5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T050853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQb50XX8adKoXcQRcq8E2Kls7CMpRSGyTI4XHurTrZNAiEAwO1SSlTJZHYGoxu77FFW2kAqjiAaO3Naj5GcsxR9JqcqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAauyWANqiKPt2LH%2BCrcAyi2isT66XhzieMP3TqMnLb7y63utxqv2cYQuqO6ypBTQ726BuTmTwyrJv%2BT09ra2IZYrrpfVR%2B1dxgm1rKHFugdC97KIIhhy498CoqsEMw6nfaRrQ7WK9O%2BmdPwX8Fn0Nfkw%2FsJxWK4Fjhjlfwh%2FQS6nwoNR2ZJp1Yv1FzPOrPlYcibYerPBmYNbdSySKYkgwmtjIfVxD54ap3eXA%2FA3gapeJgAzBtJ1nC3n%2FVBhlJvcReQ1CzvGqBG9RlVtfXQTP4CxyOxoFd9il5FdiChRt3GY%2FVUjrcWx8gFLSP37FwpMuXIFkdmzjw1RcKmIDTU2IXEdfgoIP81jUp6KWQqGj8gJd9nQs5euCm%2B2qofLzPFL1TT6I71WfzwbFHEhqy0dexIKI1XMtPwrGrWZMeWviEMcYnoK66cK9co6CNO%2FnW1nTIhRSXkmEtTpaaFXbsvjMWljiI38IkY427e7zPzodTzMTYaTrDiP%2B2jwQwnu74eGjY8WFw%2Bxnu0LjyH0zBOI3AvSo8Td6e%2BYUbG%2FYNgauTohG3PdyHzWJtUJ87eIUIqD7rn6v9mRz1WtrIlTHItYVem%2BKPs8vgsQ%2Fo7NiDNqulAyjLSkWcqGUcWj42pZmcXV0RdnpPP9MEIS2WtMLv4mL4GOqUB5EqD58lwF0iddh0LdtcddDpGW2YWoVTn5PPU0ApazjK4DZrvw%2FblniQJMjWhApd1SwMT8J5wlWL2j4eUBzP2cWf%2B0YEmP1pB8J%2B122amMr1XmQ5QHe7vS7qIcXavP7siTBKNRgTLUSdmLhAaRWoacTMc9LMsPrnVEGdTUWd5R8x21C%2FjkHmLDetUNIb1kmhqeglld0n%2FIgrUNca%2FSIKzNN7P%2FQGw&X-Amz-Signature=73cc053dc3809c87ae0a3ce15eb1aa3e4e726649efe1bc1de5b7a8d5f33ad827&X-Amz-SignedHeaders=host&x-id=GetObject)
