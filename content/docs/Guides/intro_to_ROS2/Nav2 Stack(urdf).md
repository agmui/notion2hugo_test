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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R54ZDKU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9%2B8A1Vtf08XXYDVvH%2B7AqrTGkLvr%2BV6LkWawVmNifqAiB%2B82Jpi4DrEiJcJbACmcQzBTAYuo73V3oYwQPMZ6DllSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMQGk0xe2og6m5pZntKtwDJye%2F0Q%2BkB2DBsrsVSP2dwSpvfwhV2RXz67%2Bqv6BDUi7tUOnIey1gnFPy0v9FbD59kn%2FIF4AXWCviXwUh4Wx0GIi1mW%2FM8%2BQEQ6p6fknJTgkO3wWgyuXmOjdtwx%2BxDfWXzi2ZzQuFQg96Aj1ignFfeWMSh8pE4CZrS1oaqFdtLdAWwZ2gYbUV6vnpFrpY8txUilZvrz9DBFJVDaVPt2Vxc7T8mCYH7KCUf2J2rB5jckdV0sMhQZXTmKhSlqMXZbvPzE8oCrRjTJjJx6ALUzdh0JqMJnAa78ZTHMTuEk%2FgQNAPxKEfOvdMS4PDEEoy%2FHrpuLRcYf6WVkC4MmosidLSAXrjHnPc20UNGNXV0ocr%2FuqNWWsP5L44kvFM%2FAYAUXMCpNZ%2BIfwMX%2BZ8eqhclD5lpAS6%2FS7apP0sQ9NBdXkz3zj55rpjLPGn1W1MyTB3d2zTsFaix4VnCma4jk%2F6GMDZ9DBchEj1uKEMhd8PlTwjQ%2B9X5Q3mwNeblvTkPLT02SQVkuKrcedx4GkTzRV6iwkz%2BcbYtibEkh0jwA0V8mRQxwtQIu88kfnIpjltEF4AIL%2FqhzQltYaOqkZaf9RyAMV2%2Fy8JnYKd4ouKvBpQYufoK0GWCBt0lZdbf3TuJuQwmOCAwAY6pgFJ21Q0BjdzMc3SI22vCQhx%2FI9X2YGgz1ZLI54uQDDyphw%2B0LG9I9i7v%2Bsw53YG06alTBaK%2FOXBbowPW7rezx6HNC%2FVnyEGed6UtG3lkjb8NkZRIRXicV%2B5CNkiKOxkRE2WtOelBser6dY5iHXrm7xO%2F%2B9HxCGsRIbRC9OVKM4pKJpZuwluRgbclTr4MjqqbA7zGAtQ92Wvq3599RLmLuvIzalISJTe&X-Amz-Signature=e3dc5ae55887bdde7824988e78747b9b1051a75f3c8cc85ee1cf9d1dfaef9981&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R54ZDKU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9%2B8A1Vtf08XXYDVvH%2B7AqrTGkLvr%2BV6LkWawVmNifqAiB%2B82Jpi4DrEiJcJbACmcQzBTAYuo73V3oYwQPMZ6DllSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMQGk0xe2og6m5pZntKtwDJye%2F0Q%2BkB2DBsrsVSP2dwSpvfwhV2RXz67%2Bqv6BDUi7tUOnIey1gnFPy0v9FbD59kn%2FIF4AXWCviXwUh4Wx0GIi1mW%2FM8%2BQEQ6p6fknJTgkO3wWgyuXmOjdtwx%2BxDfWXzi2ZzQuFQg96Aj1ignFfeWMSh8pE4CZrS1oaqFdtLdAWwZ2gYbUV6vnpFrpY8txUilZvrz9DBFJVDaVPt2Vxc7T8mCYH7KCUf2J2rB5jckdV0sMhQZXTmKhSlqMXZbvPzE8oCrRjTJjJx6ALUzdh0JqMJnAa78ZTHMTuEk%2FgQNAPxKEfOvdMS4PDEEoy%2FHrpuLRcYf6WVkC4MmosidLSAXrjHnPc20UNGNXV0ocr%2FuqNWWsP5L44kvFM%2FAYAUXMCpNZ%2BIfwMX%2BZ8eqhclD5lpAS6%2FS7apP0sQ9NBdXkz3zj55rpjLPGn1W1MyTB3d2zTsFaix4VnCma4jk%2F6GMDZ9DBchEj1uKEMhd8PlTwjQ%2B9X5Q3mwNeblvTkPLT02SQVkuKrcedx4GkTzRV6iwkz%2BcbYtibEkh0jwA0V8mRQxwtQIu88kfnIpjltEF4AIL%2FqhzQltYaOqkZaf9RyAMV2%2Fy8JnYKd4ouKvBpQYufoK0GWCBt0lZdbf3TuJuQwmOCAwAY6pgFJ21Q0BjdzMc3SI22vCQhx%2FI9X2YGgz1ZLI54uQDDyphw%2B0LG9I9i7v%2Bsw53YG06alTBaK%2FOXBbowPW7rezx6HNC%2FVnyEGed6UtG3lkjb8NkZRIRXicV%2B5CNkiKOxkRE2WtOelBser6dY5iHXrm7xO%2F%2B9HxCGsRIbRC9OVKM4pKJpZuwluRgbclTr4MjqqbA7zGAtQ92Wvq3599RLmLuvIzalISJTe&X-Amz-Signature=f96e65d8587b674fff9c3e95baffd7c2da4663debf2cb899d4ab569822b86965&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R54ZDKU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9%2B8A1Vtf08XXYDVvH%2B7AqrTGkLvr%2BV6LkWawVmNifqAiB%2B82Jpi4DrEiJcJbACmcQzBTAYuo73V3oYwQPMZ6DllSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMQGk0xe2og6m5pZntKtwDJye%2F0Q%2BkB2DBsrsVSP2dwSpvfwhV2RXz67%2Bqv6BDUi7tUOnIey1gnFPy0v9FbD59kn%2FIF4AXWCviXwUh4Wx0GIi1mW%2FM8%2BQEQ6p6fknJTgkO3wWgyuXmOjdtwx%2BxDfWXzi2ZzQuFQg96Aj1ignFfeWMSh8pE4CZrS1oaqFdtLdAWwZ2gYbUV6vnpFrpY8txUilZvrz9DBFJVDaVPt2Vxc7T8mCYH7KCUf2J2rB5jckdV0sMhQZXTmKhSlqMXZbvPzE8oCrRjTJjJx6ALUzdh0JqMJnAa78ZTHMTuEk%2FgQNAPxKEfOvdMS4PDEEoy%2FHrpuLRcYf6WVkC4MmosidLSAXrjHnPc20UNGNXV0ocr%2FuqNWWsP5L44kvFM%2FAYAUXMCpNZ%2BIfwMX%2BZ8eqhclD5lpAS6%2FS7apP0sQ9NBdXkz3zj55rpjLPGn1W1MyTB3d2zTsFaix4VnCma4jk%2F6GMDZ9DBchEj1uKEMhd8PlTwjQ%2B9X5Q3mwNeblvTkPLT02SQVkuKrcedx4GkTzRV6iwkz%2BcbYtibEkh0jwA0V8mRQxwtQIu88kfnIpjltEF4AIL%2FqhzQltYaOqkZaf9RyAMV2%2Fy8JnYKd4ouKvBpQYufoK0GWCBt0lZdbf3TuJuQwmOCAwAY6pgFJ21Q0BjdzMc3SI22vCQhx%2FI9X2YGgz1ZLI54uQDDyphw%2B0LG9I9i7v%2Bsw53YG06alTBaK%2FOXBbowPW7rezx6HNC%2FVnyEGed6UtG3lkjb8NkZRIRXicV%2B5CNkiKOxkRE2WtOelBser6dY5iHXrm7xO%2F%2B9HxCGsRIbRC9OVKM4pKJpZuwluRgbclTr4MjqqbA7zGAtQ92Wvq3599RLmLuvIzalISJTe&X-Amz-Signature=a13b579e28dd2cb85bd0023befb25fac369be0c71cc763bbc217ae3f8e9f6a9f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R54ZDKU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9%2B8A1Vtf08XXYDVvH%2B7AqrTGkLvr%2BV6LkWawVmNifqAiB%2B82Jpi4DrEiJcJbACmcQzBTAYuo73V3oYwQPMZ6DllSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMQGk0xe2og6m5pZntKtwDJye%2F0Q%2BkB2DBsrsVSP2dwSpvfwhV2RXz67%2Bqv6BDUi7tUOnIey1gnFPy0v9FbD59kn%2FIF4AXWCviXwUh4Wx0GIi1mW%2FM8%2BQEQ6p6fknJTgkO3wWgyuXmOjdtwx%2BxDfWXzi2ZzQuFQg96Aj1ignFfeWMSh8pE4CZrS1oaqFdtLdAWwZ2gYbUV6vnpFrpY8txUilZvrz9DBFJVDaVPt2Vxc7T8mCYH7KCUf2J2rB5jckdV0sMhQZXTmKhSlqMXZbvPzE8oCrRjTJjJx6ALUzdh0JqMJnAa78ZTHMTuEk%2FgQNAPxKEfOvdMS4PDEEoy%2FHrpuLRcYf6WVkC4MmosidLSAXrjHnPc20UNGNXV0ocr%2FuqNWWsP5L44kvFM%2FAYAUXMCpNZ%2BIfwMX%2BZ8eqhclD5lpAS6%2FS7apP0sQ9NBdXkz3zj55rpjLPGn1W1MyTB3d2zTsFaix4VnCma4jk%2F6GMDZ9DBchEj1uKEMhd8PlTwjQ%2B9X5Q3mwNeblvTkPLT02SQVkuKrcedx4GkTzRV6iwkz%2BcbYtibEkh0jwA0V8mRQxwtQIu88kfnIpjltEF4AIL%2FqhzQltYaOqkZaf9RyAMV2%2Fy8JnYKd4ouKvBpQYufoK0GWCBt0lZdbf3TuJuQwmOCAwAY6pgFJ21Q0BjdzMc3SI22vCQhx%2FI9X2YGgz1ZLI54uQDDyphw%2B0LG9I9i7v%2Bsw53YG06alTBaK%2FOXBbowPW7rezx6HNC%2FVnyEGed6UtG3lkjb8NkZRIRXicV%2B5CNkiKOxkRE2WtOelBser6dY5iHXrm7xO%2F%2B9HxCGsRIbRC9OVKM4pKJpZuwluRgbclTr4MjqqbA7zGAtQ92Wvq3599RLmLuvIzalISJTe&X-Amz-Signature=8f0a7be0092c1b7f6054b7749777d4c2fa216acad2920363209e3becf1b96a96&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R54ZDKU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9%2B8A1Vtf08XXYDVvH%2B7AqrTGkLvr%2BV6LkWawVmNifqAiB%2B82Jpi4DrEiJcJbACmcQzBTAYuo73V3oYwQPMZ6DllSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMQGk0xe2og6m5pZntKtwDJye%2F0Q%2BkB2DBsrsVSP2dwSpvfwhV2RXz67%2Bqv6BDUi7tUOnIey1gnFPy0v9FbD59kn%2FIF4AXWCviXwUh4Wx0GIi1mW%2FM8%2BQEQ6p6fknJTgkO3wWgyuXmOjdtwx%2BxDfWXzi2ZzQuFQg96Aj1ignFfeWMSh8pE4CZrS1oaqFdtLdAWwZ2gYbUV6vnpFrpY8txUilZvrz9DBFJVDaVPt2Vxc7T8mCYH7KCUf2J2rB5jckdV0sMhQZXTmKhSlqMXZbvPzE8oCrRjTJjJx6ALUzdh0JqMJnAa78ZTHMTuEk%2FgQNAPxKEfOvdMS4PDEEoy%2FHrpuLRcYf6WVkC4MmosidLSAXrjHnPc20UNGNXV0ocr%2FuqNWWsP5L44kvFM%2FAYAUXMCpNZ%2BIfwMX%2BZ8eqhclD5lpAS6%2FS7apP0sQ9NBdXkz3zj55rpjLPGn1W1MyTB3d2zTsFaix4VnCma4jk%2F6GMDZ9DBchEj1uKEMhd8PlTwjQ%2B9X5Q3mwNeblvTkPLT02SQVkuKrcedx4GkTzRV6iwkz%2BcbYtibEkh0jwA0V8mRQxwtQIu88kfnIpjltEF4AIL%2FqhzQltYaOqkZaf9RyAMV2%2Fy8JnYKd4ouKvBpQYufoK0GWCBt0lZdbf3TuJuQwmOCAwAY6pgFJ21Q0BjdzMc3SI22vCQhx%2FI9X2YGgz1ZLI54uQDDyphw%2B0LG9I9i7v%2Bsw53YG06alTBaK%2FOXBbowPW7rezx6HNC%2FVnyEGed6UtG3lkjb8NkZRIRXicV%2B5CNkiKOxkRE2WtOelBser6dY5iHXrm7xO%2F%2B9HxCGsRIbRC9OVKM4pKJpZuwluRgbclTr4MjqqbA7zGAtQ92Wvq3599RLmLuvIzalISJTe&X-Amz-Signature=f39a2c345993a0d25b4a4352accd42578b1a4037ded0c8deb6ddaf5b1996be30&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R54ZDKU%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9%2B8A1Vtf08XXYDVvH%2B7AqrTGkLvr%2BV6LkWawVmNifqAiB%2B82Jpi4DrEiJcJbACmcQzBTAYuo73V3oYwQPMZ6DllSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMQGk0xe2og6m5pZntKtwDJye%2F0Q%2BkB2DBsrsVSP2dwSpvfwhV2RXz67%2Bqv6BDUi7tUOnIey1gnFPy0v9FbD59kn%2FIF4AXWCviXwUh4Wx0GIi1mW%2FM8%2BQEQ6p6fknJTgkO3wWgyuXmOjdtwx%2BxDfWXzi2ZzQuFQg96Aj1ignFfeWMSh8pE4CZrS1oaqFdtLdAWwZ2gYbUV6vnpFrpY8txUilZvrz9DBFJVDaVPt2Vxc7T8mCYH7KCUf2J2rB5jckdV0sMhQZXTmKhSlqMXZbvPzE8oCrRjTJjJx6ALUzdh0JqMJnAa78ZTHMTuEk%2FgQNAPxKEfOvdMS4PDEEoy%2FHrpuLRcYf6WVkC4MmosidLSAXrjHnPc20UNGNXV0ocr%2FuqNWWsP5L44kvFM%2FAYAUXMCpNZ%2BIfwMX%2BZ8eqhclD5lpAS6%2FS7apP0sQ9NBdXkz3zj55rpjLPGn1W1MyTB3d2zTsFaix4VnCma4jk%2F6GMDZ9DBchEj1uKEMhd8PlTwjQ%2B9X5Q3mwNeblvTkPLT02SQVkuKrcedx4GkTzRV6iwkz%2BcbYtibEkh0jwA0V8mRQxwtQIu88kfnIpjltEF4AIL%2FqhzQltYaOqkZaf9RyAMV2%2Fy8JnYKd4ouKvBpQYufoK0GWCBt0lZdbf3TuJuQwmOCAwAY6pgFJ21Q0BjdzMc3SI22vCQhx%2FI9X2YGgz1ZLI54uQDDyphw%2B0LG9I9i7v%2Bsw53YG06alTBaK%2FOXBbowPW7rezx6HNC%2FVnyEGed6UtG3lkjb8NkZRIRXicV%2B5CNkiKOxkRE2WtOelBser6dY5iHXrm7xO%2F%2B9HxCGsRIbRC9OVKM4pKJpZuwluRgbclTr4MjqqbA7zGAtQ92Wvq3599RLmLuvIzalISJTe&X-Amz-Signature=5dfd0186383d8c74e176c8e285d14d77ad71c723223a2058ec6dee16ac19f2ea&X-Amz-SignedHeaders=host&x-id=GetObject)
