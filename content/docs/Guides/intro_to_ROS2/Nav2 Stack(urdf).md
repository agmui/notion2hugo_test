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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFN2QRCP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6h3TUVm7z%2ByyKOo2hdgmMGIH9GdBj1t4IOTDKW6404QIhAOZ5GB46LulLQ5g3H6pI1ov08N7Rtlki5xqndUNbJQvBKv8DCFsQABoMNjM3NDIzMTgzODA1IgwKwUjxjoypsq4zDs0q3APxUF426y37vsEiMCP6Uoc2TU9PLLK4bJMOenPtvUzgNhtSyWmC73vnUlrec0Xoz7z5bR%2FH10APl0QVgaFkyZbz6iZbQTbhzvufBn7Zd67O2fb7KXymErtCYRGiV%2FgYRtsup%2Bn1WYwo%2Bdby7Tqisd2odKB%2FT9mriCqvSkzEighitdwgRFN8anudF%2F9FBFQmEJtPWg2rAkcDFkBhHMsTlCibl0zAhw5LIgYMpjwbAat%2FXs0NoXiXl7ji0yXJ4%2BOLrlZ5ISBXHTevKdmauztd5CS%2FDJQcIPEodLMzrN1OtjF2wbtmZu3IJ2wXLMGwDfMMoVOB8vgT1ksX1%2Frco9MlThXb5dMuu%2BcACaiXM4aCb%2Bd80avho28KQ9m1VXpd6YfF6uQP5TcT8T2h2np1FyZS6RXcG48hd0FB3iSa%2FwQgBFLlfYXr9attpJROzG1MPdFP4CsIBWpuLH9ub5zDmjhh2ruse3QpwXgGVoru%2FcenVIwK1UO2mjQ4Bk%2FTZ9LuNr3llr%2FwNNipdVhkuIHvpFVNh3YDskxmsP%2BC55I6B3AJiOBl%2Fc6ctMj9YyVBqiPbNjUk9hF8ujqxqzQpKT9mqGdKrAACDNCdbHHWhr9HaAu3maNRaEtFp%2BvEKoB9%2BSb0cDDT9orCBjqkAeZ4QXGXRgNJkmMVEv0yo21jvfWdyJBWmN9MBbXwnotUNYcng1fop2RU2tqx9up6I1cG16q%2FSGQPcV36RE7XeiUGq4CqqYHeM6cxelXGBODSjfeV2zLkd8vubsMk4uriZLS%2FY4nHjjtsoqh5s0R0J6%2Bb5xuJxGFAB3cSEZ141JAkBByD%2FUF2Jp3osTmVLrUHGmidp0a3ii7AvoU1JEBY8KrQjiDZ&X-Amz-Signature=8142d8e67035d32f54d52429081ed242f4e591e20a11cf06b4f5d8917dcf0e28&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFN2QRCP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6h3TUVm7z%2ByyKOo2hdgmMGIH9GdBj1t4IOTDKW6404QIhAOZ5GB46LulLQ5g3H6pI1ov08N7Rtlki5xqndUNbJQvBKv8DCFsQABoMNjM3NDIzMTgzODA1IgwKwUjxjoypsq4zDs0q3APxUF426y37vsEiMCP6Uoc2TU9PLLK4bJMOenPtvUzgNhtSyWmC73vnUlrec0Xoz7z5bR%2FH10APl0QVgaFkyZbz6iZbQTbhzvufBn7Zd67O2fb7KXymErtCYRGiV%2FgYRtsup%2Bn1WYwo%2Bdby7Tqisd2odKB%2FT9mriCqvSkzEighitdwgRFN8anudF%2F9FBFQmEJtPWg2rAkcDFkBhHMsTlCibl0zAhw5LIgYMpjwbAat%2FXs0NoXiXl7ji0yXJ4%2BOLrlZ5ISBXHTevKdmauztd5CS%2FDJQcIPEodLMzrN1OtjF2wbtmZu3IJ2wXLMGwDfMMoVOB8vgT1ksX1%2Frco9MlThXb5dMuu%2BcACaiXM4aCb%2Bd80avho28KQ9m1VXpd6YfF6uQP5TcT8T2h2np1FyZS6RXcG48hd0FB3iSa%2FwQgBFLlfYXr9attpJROzG1MPdFP4CsIBWpuLH9ub5zDmjhh2ruse3QpwXgGVoru%2FcenVIwK1UO2mjQ4Bk%2FTZ9LuNr3llr%2FwNNipdVhkuIHvpFVNh3YDskxmsP%2BC55I6B3AJiOBl%2Fc6ctMj9YyVBqiPbNjUk9hF8ujqxqzQpKT9mqGdKrAACDNCdbHHWhr9HaAu3maNRaEtFp%2BvEKoB9%2BSb0cDDT9orCBjqkAeZ4QXGXRgNJkmMVEv0yo21jvfWdyJBWmN9MBbXwnotUNYcng1fop2RU2tqx9up6I1cG16q%2FSGQPcV36RE7XeiUGq4CqqYHeM6cxelXGBODSjfeV2zLkd8vubsMk4uriZLS%2FY4nHjjtsoqh5s0R0J6%2Bb5xuJxGFAB3cSEZ141JAkBByD%2FUF2Jp3osTmVLrUHGmidp0a3ii7AvoU1JEBY8KrQjiDZ&X-Amz-Signature=cbefec7c579f930999218cdb5e3f805d503bcc39c613219e4a7e3cdd3e416370&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFN2QRCP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6h3TUVm7z%2ByyKOo2hdgmMGIH9GdBj1t4IOTDKW6404QIhAOZ5GB46LulLQ5g3H6pI1ov08N7Rtlki5xqndUNbJQvBKv8DCFsQABoMNjM3NDIzMTgzODA1IgwKwUjxjoypsq4zDs0q3APxUF426y37vsEiMCP6Uoc2TU9PLLK4bJMOenPtvUzgNhtSyWmC73vnUlrec0Xoz7z5bR%2FH10APl0QVgaFkyZbz6iZbQTbhzvufBn7Zd67O2fb7KXymErtCYRGiV%2FgYRtsup%2Bn1WYwo%2Bdby7Tqisd2odKB%2FT9mriCqvSkzEighitdwgRFN8anudF%2F9FBFQmEJtPWg2rAkcDFkBhHMsTlCibl0zAhw5LIgYMpjwbAat%2FXs0NoXiXl7ji0yXJ4%2BOLrlZ5ISBXHTevKdmauztd5CS%2FDJQcIPEodLMzrN1OtjF2wbtmZu3IJ2wXLMGwDfMMoVOB8vgT1ksX1%2Frco9MlThXb5dMuu%2BcACaiXM4aCb%2Bd80avho28KQ9m1VXpd6YfF6uQP5TcT8T2h2np1FyZS6RXcG48hd0FB3iSa%2FwQgBFLlfYXr9attpJROzG1MPdFP4CsIBWpuLH9ub5zDmjhh2ruse3QpwXgGVoru%2FcenVIwK1UO2mjQ4Bk%2FTZ9LuNr3llr%2FwNNipdVhkuIHvpFVNh3YDskxmsP%2BC55I6B3AJiOBl%2Fc6ctMj9YyVBqiPbNjUk9hF8ujqxqzQpKT9mqGdKrAACDNCdbHHWhr9HaAu3maNRaEtFp%2BvEKoB9%2BSb0cDDT9orCBjqkAeZ4QXGXRgNJkmMVEv0yo21jvfWdyJBWmN9MBbXwnotUNYcng1fop2RU2tqx9up6I1cG16q%2FSGQPcV36RE7XeiUGq4CqqYHeM6cxelXGBODSjfeV2zLkd8vubsMk4uriZLS%2FY4nHjjtsoqh5s0R0J6%2Bb5xuJxGFAB3cSEZ141JAkBByD%2FUF2Jp3osTmVLrUHGmidp0a3ii7AvoU1JEBY8KrQjiDZ&X-Amz-Signature=b9c1619331fb3a4bcf8423090dc32eeb5c0e4b41ba9db7d28e39d74b95983f5b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFN2QRCP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6h3TUVm7z%2ByyKOo2hdgmMGIH9GdBj1t4IOTDKW6404QIhAOZ5GB46LulLQ5g3H6pI1ov08N7Rtlki5xqndUNbJQvBKv8DCFsQABoMNjM3NDIzMTgzODA1IgwKwUjxjoypsq4zDs0q3APxUF426y37vsEiMCP6Uoc2TU9PLLK4bJMOenPtvUzgNhtSyWmC73vnUlrec0Xoz7z5bR%2FH10APl0QVgaFkyZbz6iZbQTbhzvufBn7Zd67O2fb7KXymErtCYRGiV%2FgYRtsup%2Bn1WYwo%2Bdby7Tqisd2odKB%2FT9mriCqvSkzEighitdwgRFN8anudF%2F9FBFQmEJtPWg2rAkcDFkBhHMsTlCibl0zAhw5LIgYMpjwbAat%2FXs0NoXiXl7ji0yXJ4%2BOLrlZ5ISBXHTevKdmauztd5CS%2FDJQcIPEodLMzrN1OtjF2wbtmZu3IJ2wXLMGwDfMMoVOB8vgT1ksX1%2Frco9MlThXb5dMuu%2BcACaiXM4aCb%2Bd80avho28KQ9m1VXpd6YfF6uQP5TcT8T2h2np1FyZS6RXcG48hd0FB3iSa%2FwQgBFLlfYXr9attpJROzG1MPdFP4CsIBWpuLH9ub5zDmjhh2ruse3QpwXgGVoru%2FcenVIwK1UO2mjQ4Bk%2FTZ9LuNr3llr%2FwNNipdVhkuIHvpFVNh3YDskxmsP%2BC55I6B3AJiOBl%2Fc6ctMj9YyVBqiPbNjUk9hF8ujqxqzQpKT9mqGdKrAACDNCdbHHWhr9HaAu3maNRaEtFp%2BvEKoB9%2BSb0cDDT9orCBjqkAeZ4QXGXRgNJkmMVEv0yo21jvfWdyJBWmN9MBbXwnotUNYcng1fop2RU2tqx9up6I1cG16q%2FSGQPcV36RE7XeiUGq4CqqYHeM6cxelXGBODSjfeV2zLkd8vubsMk4uriZLS%2FY4nHjjtsoqh5s0R0J6%2Bb5xuJxGFAB3cSEZ141JAkBByD%2FUF2Jp3osTmVLrUHGmidp0a3ii7AvoU1JEBY8KrQjiDZ&X-Amz-Signature=f88aac8711507896372203fd2c7740b1ed190fb68e2107d0f5b89164ec08a6b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFN2QRCP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6h3TUVm7z%2ByyKOo2hdgmMGIH9GdBj1t4IOTDKW6404QIhAOZ5GB46LulLQ5g3H6pI1ov08N7Rtlki5xqndUNbJQvBKv8DCFsQABoMNjM3NDIzMTgzODA1IgwKwUjxjoypsq4zDs0q3APxUF426y37vsEiMCP6Uoc2TU9PLLK4bJMOenPtvUzgNhtSyWmC73vnUlrec0Xoz7z5bR%2FH10APl0QVgaFkyZbz6iZbQTbhzvufBn7Zd67O2fb7KXymErtCYRGiV%2FgYRtsup%2Bn1WYwo%2Bdby7Tqisd2odKB%2FT9mriCqvSkzEighitdwgRFN8anudF%2F9FBFQmEJtPWg2rAkcDFkBhHMsTlCibl0zAhw5LIgYMpjwbAat%2FXs0NoXiXl7ji0yXJ4%2BOLrlZ5ISBXHTevKdmauztd5CS%2FDJQcIPEodLMzrN1OtjF2wbtmZu3IJ2wXLMGwDfMMoVOB8vgT1ksX1%2Frco9MlThXb5dMuu%2BcACaiXM4aCb%2Bd80avho28KQ9m1VXpd6YfF6uQP5TcT8T2h2np1FyZS6RXcG48hd0FB3iSa%2FwQgBFLlfYXr9attpJROzG1MPdFP4CsIBWpuLH9ub5zDmjhh2ruse3QpwXgGVoru%2FcenVIwK1UO2mjQ4Bk%2FTZ9LuNr3llr%2FwNNipdVhkuIHvpFVNh3YDskxmsP%2BC55I6B3AJiOBl%2Fc6ctMj9YyVBqiPbNjUk9hF8ujqxqzQpKT9mqGdKrAACDNCdbHHWhr9HaAu3maNRaEtFp%2BvEKoB9%2BSb0cDDT9orCBjqkAeZ4QXGXRgNJkmMVEv0yo21jvfWdyJBWmN9MBbXwnotUNYcng1fop2RU2tqx9up6I1cG16q%2FSGQPcV36RE7XeiUGq4CqqYHeM6cxelXGBODSjfeV2zLkd8vubsMk4uriZLS%2FY4nHjjtsoqh5s0R0J6%2Bb5xuJxGFAB3cSEZ141JAkBByD%2FUF2Jp3osTmVLrUHGmidp0a3ii7AvoU1JEBY8KrQjiDZ&X-Amz-Signature=c8146e56a7bc7737e2d6ed59811eebd23ed01a0f2ca41ce1b6877bb0003492a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFN2QRCP%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6h3TUVm7z%2ByyKOo2hdgmMGIH9GdBj1t4IOTDKW6404QIhAOZ5GB46LulLQ5g3H6pI1ov08N7Rtlki5xqndUNbJQvBKv8DCFsQABoMNjM3NDIzMTgzODA1IgwKwUjxjoypsq4zDs0q3APxUF426y37vsEiMCP6Uoc2TU9PLLK4bJMOenPtvUzgNhtSyWmC73vnUlrec0Xoz7z5bR%2FH10APl0QVgaFkyZbz6iZbQTbhzvufBn7Zd67O2fb7KXymErtCYRGiV%2FgYRtsup%2Bn1WYwo%2Bdby7Tqisd2odKB%2FT9mriCqvSkzEighitdwgRFN8anudF%2F9FBFQmEJtPWg2rAkcDFkBhHMsTlCibl0zAhw5LIgYMpjwbAat%2FXs0NoXiXl7ji0yXJ4%2BOLrlZ5ISBXHTevKdmauztd5CS%2FDJQcIPEodLMzrN1OtjF2wbtmZu3IJ2wXLMGwDfMMoVOB8vgT1ksX1%2Frco9MlThXb5dMuu%2BcACaiXM4aCb%2Bd80avho28KQ9m1VXpd6YfF6uQP5TcT8T2h2np1FyZS6RXcG48hd0FB3iSa%2FwQgBFLlfYXr9attpJROzG1MPdFP4CsIBWpuLH9ub5zDmjhh2ruse3QpwXgGVoru%2FcenVIwK1UO2mjQ4Bk%2FTZ9LuNr3llr%2FwNNipdVhkuIHvpFVNh3YDskxmsP%2BC55I6B3AJiOBl%2Fc6ctMj9YyVBqiPbNjUk9hF8ujqxqzQpKT9mqGdKrAACDNCdbHHWhr9HaAu3maNRaEtFp%2BvEKoB9%2BSb0cDDT9orCBjqkAeZ4QXGXRgNJkmMVEv0yo21jvfWdyJBWmN9MBbXwnotUNYcng1fop2RU2tqx9up6I1cG16q%2FSGQPcV36RE7XeiUGq4CqqYHeM6cxelXGBODSjfeV2zLkd8vubsMk4uriZLS%2FY4nHjjtsoqh5s0R0J6%2Bb5xuJxGFAB3cSEZ141JAkBByD%2FUF2Jp3osTmVLrUHGmidp0a3ii7AvoU1JEBY8KrQjiDZ&X-Amz-Signature=2cd0b59748d7b1c949f6fdcccf1766ecf84b204eaa2f4fb5ba8d356689fdff38&X-Amz-SignedHeaders=host&x-id=GetObject)
