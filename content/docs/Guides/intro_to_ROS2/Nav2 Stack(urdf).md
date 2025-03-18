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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYV3FFD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLdvP8msgS7RppuOTonHgrYakRJJLU3LcTJWs3GMzn7QIhAL2n9b3x0ey2yY3fen1%2FZyhBhA8bjjUoK4DeEzc1zKlrKv8DCFQQABoMNjM3NDIzMTgzODA1IgzuJ4ZP32sOt%2Fntn34q3AN1RKHAT3hoV2rYVsVeYr7RHfvweoQV0XfDdhZUibf7GFbNfBQXT2x5ApZh6QXlYCNGQTogcobooEGj3Xvw2n%2B0QJrnhgHR4ZpUsFGAsxikeevMgioKU%2Fx1hNXdv5FkyTuwOmVJRIj2AzWyDgcFSMuT1k%2FPS7Lmyg0nY6C73xuYJjVrsRtSxCD2g1r3do3aTVxe5IgNj9PNaqIOqZqhyx2aoJUKf9uIEeUIAQ%2FoWU1xcrHZOKG4UIpdZxoe7yv3WJ5x5zRbAi60u5M884xMzEx3bksd8QZQriecvdruU5x8GQrt0hNePTjvLxYXwx14WhdxZqJ5Oe2NXuX8AhLoiB1tjZt4XDhxjgdmMwvi15G4v86SU1EAr%2B3wSkO3%2FpCI%2BHISexmmZSGyDeRkpC2oyFqObLbj1XJkvJP3P4qxlZREGs8gS6pvxwj3rOTZ031UXxNaMRf9%2FDYv3h%2BIpDRZ9IzaKnC9nAUwJ2YgxdfFONCdIFCnXkBhHKC39Lv%2BgWB%2BYmEEUdBBscu1uPC76a9CzcElJCn3azv8JR3%2FxHkCs2%2BXYinqKqab8uC%2Fbl9xuJbScOUc8a%2BvlctKlmjrMjsQmpXrTweIy4UH98ZFJgvoNH%2FoPgEDrhTBP1zmS0JgFDDVyeO%2BBjqkAWQzpIMXiYYlobtTZncffq5eo5eQTK9%2Fp5LRyUARXvnbbddReb5df7S7RRUAeL6OWQvKOznFLgpmTQuHwQFqrhHQ81OHYzED6ch83fwX%2BBvtefFbh6GmJkFWtPm2DtwWw8Rh9RY0MwGqUFUj1qu6gsF7FeSElNcDqpPsEF%2BF5ekr6uCeXgWZCPBaexVsOUEzZYPhPmc7KeaEwDKGgH901whs0N5%2F&X-Amz-Signature=9f56ff2f3da6c834aa8c57dacf6161a180dd71afa95852c30bc65c468e217e08&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYV3FFD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLdvP8msgS7RppuOTonHgrYakRJJLU3LcTJWs3GMzn7QIhAL2n9b3x0ey2yY3fen1%2FZyhBhA8bjjUoK4DeEzc1zKlrKv8DCFQQABoMNjM3NDIzMTgzODA1IgzuJ4ZP32sOt%2Fntn34q3AN1RKHAT3hoV2rYVsVeYr7RHfvweoQV0XfDdhZUibf7GFbNfBQXT2x5ApZh6QXlYCNGQTogcobooEGj3Xvw2n%2B0QJrnhgHR4ZpUsFGAsxikeevMgioKU%2Fx1hNXdv5FkyTuwOmVJRIj2AzWyDgcFSMuT1k%2FPS7Lmyg0nY6C73xuYJjVrsRtSxCD2g1r3do3aTVxe5IgNj9PNaqIOqZqhyx2aoJUKf9uIEeUIAQ%2FoWU1xcrHZOKG4UIpdZxoe7yv3WJ5x5zRbAi60u5M884xMzEx3bksd8QZQriecvdruU5x8GQrt0hNePTjvLxYXwx14WhdxZqJ5Oe2NXuX8AhLoiB1tjZt4XDhxjgdmMwvi15G4v86SU1EAr%2B3wSkO3%2FpCI%2BHISexmmZSGyDeRkpC2oyFqObLbj1XJkvJP3P4qxlZREGs8gS6pvxwj3rOTZ031UXxNaMRf9%2FDYv3h%2BIpDRZ9IzaKnC9nAUwJ2YgxdfFONCdIFCnXkBhHKC39Lv%2BgWB%2BYmEEUdBBscu1uPC76a9CzcElJCn3azv8JR3%2FxHkCs2%2BXYinqKqab8uC%2Fbl9xuJbScOUc8a%2BvlctKlmjrMjsQmpXrTweIy4UH98ZFJgvoNH%2FoPgEDrhTBP1zmS0JgFDDVyeO%2BBjqkAWQzpIMXiYYlobtTZncffq5eo5eQTK9%2Fp5LRyUARXvnbbddReb5df7S7RRUAeL6OWQvKOznFLgpmTQuHwQFqrhHQ81OHYzED6ch83fwX%2BBvtefFbh6GmJkFWtPm2DtwWw8Rh9RY0MwGqUFUj1qu6gsF7FeSElNcDqpPsEF%2BF5ekr6uCeXgWZCPBaexVsOUEzZYPhPmc7KeaEwDKGgH901whs0N5%2F&X-Amz-Signature=1a2c647501966b75da525bec647a4906a118d23c61494de6da2191e9a6b96ec6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYV3FFD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLdvP8msgS7RppuOTonHgrYakRJJLU3LcTJWs3GMzn7QIhAL2n9b3x0ey2yY3fen1%2FZyhBhA8bjjUoK4DeEzc1zKlrKv8DCFQQABoMNjM3NDIzMTgzODA1IgzuJ4ZP32sOt%2Fntn34q3AN1RKHAT3hoV2rYVsVeYr7RHfvweoQV0XfDdhZUibf7GFbNfBQXT2x5ApZh6QXlYCNGQTogcobooEGj3Xvw2n%2B0QJrnhgHR4ZpUsFGAsxikeevMgioKU%2Fx1hNXdv5FkyTuwOmVJRIj2AzWyDgcFSMuT1k%2FPS7Lmyg0nY6C73xuYJjVrsRtSxCD2g1r3do3aTVxe5IgNj9PNaqIOqZqhyx2aoJUKf9uIEeUIAQ%2FoWU1xcrHZOKG4UIpdZxoe7yv3WJ5x5zRbAi60u5M884xMzEx3bksd8QZQriecvdruU5x8GQrt0hNePTjvLxYXwx14WhdxZqJ5Oe2NXuX8AhLoiB1tjZt4XDhxjgdmMwvi15G4v86SU1EAr%2B3wSkO3%2FpCI%2BHISexmmZSGyDeRkpC2oyFqObLbj1XJkvJP3P4qxlZREGs8gS6pvxwj3rOTZ031UXxNaMRf9%2FDYv3h%2BIpDRZ9IzaKnC9nAUwJ2YgxdfFONCdIFCnXkBhHKC39Lv%2BgWB%2BYmEEUdBBscu1uPC76a9CzcElJCn3azv8JR3%2FxHkCs2%2BXYinqKqab8uC%2Fbl9xuJbScOUc8a%2BvlctKlmjrMjsQmpXrTweIy4UH98ZFJgvoNH%2FoPgEDrhTBP1zmS0JgFDDVyeO%2BBjqkAWQzpIMXiYYlobtTZncffq5eo5eQTK9%2Fp5LRyUARXvnbbddReb5df7S7RRUAeL6OWQvKOznFLgpmTQuHwQFqrhHQ81OHYzED6ch83fwX%2BBvtefFbh6GmJkFWtPm2DtwWw8Rh9RY0MwGqUFUj1qu6gsF7FeSElNcDqpPsEF%2BF5ekr6uCeXgWZCPBaexVsOUEzZYPhPmc7KeaEwDKGgH901whs0N5%2F&X-Amz-Signature=47bb447c226a5d561ceefde0756189113fb812e219cb0060cacbb334263e11d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYV3FFD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLdvP8msgS7RppuOTonHgrYakRJJLU3LcTJWs3GMzn7QIhAL2n9b3x0ey2yY3fen1%2FZyhBhA8bjjUoK4DeEzc1zKlrKv8DCFQQABoMNjM3NDIzMTgzODA1IgzuJ4ZP32sOt%2Fntn34q3AN1RKHAT3hoV2rYVsVeYr7RHfvweoQV0XfDdhZUibf7GFbNfBQXT2x5ApZh6QXlYCNGQTogcobooEGj3Xvw2n%2B0QJrnhgHR4ZpUsFGAsxikeevMgioKU%2Fx1hNXdv5FkyTuwOmVJRIj2AzWyDgcFSMuT1k%2FPS7Lmyg0nY6C73xuYJjVrsRtSxCD2g1r3do3aTVxe5IgNj9PNaqIOqZqhyx2aoJUKf9uIEeUIAQ%2FoWU1xcrHZOKG4UIpdZxoe7yv3WJ5x5zRbAi60u5M884xMzEx3bksd8QZQriecvdruU5x8GQrt0hNePTjvLxYXwx14WhdxZqJ5Oe2NXuX8AhLoiB1tjZt4XDhxjgdmMwvi15G4v86SU1EAr%2B3wSkO3%2FpCI%2BHISexmmZSGyDeRkpC2oyFqObLbj1XJkvJP3P4qxlZREGs8gS6pvxwj3rOTZ031UXxNaMRf9%2FDYv3h%2BIpDRZ9IzaKnC9nAUwJ2YgxdfFONCdIFCnXkBhHKC39Lv%2BgWB%2BYmEEUdBBscu1uPC76a9CzcElJCn3azv8JR3%2FxHkCs2%2BXYinqKqab8uC%2Fbl9xuJbScOUc8a%2BvlctKlmjrMjsQmpXrTweIy4UH98ZFJgvoNH%2FoPgEDrhTBP1zmS0JgFDDVyeO%2BBjqkAWQzpIMXiYYlobtTZncffq5eo5eQTK9%2Fp5LRyUARXvnbbddReb5df7S7RRUAeL6OWQvKOznFLgpmTQuHwQFqrhHQ81OHYzED6ch83fwX%2BBvtefFbh6GmJkFWtPm2DtwWw8Rh9RY0MwGqUFUj1qu6gsF7FeSElNcDqpPsEF%2BF5ekr6uCeXgWZCPBaexVsOUEzZYPhPmc7KeaEwDKGgH901whs0N5%2F&X-Amz-Signature=ed968319ede5451cfb8bac9bc9e66b56dd23b901bd76aee657cb839e4b8d4b94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYV3FFD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLdvP8msgS7RppuOTonHgrYakRJJLU3LcTJWs3GMzn7QIhAL2n9b3x0ey2yY3fen1%2FZyhBhA8bjjUoK4DeEzc1zKlrKv8DCFQQABoMNjM3NDIzMTgzODA1IgzuJ4ZP32sOt%2Fntn34q3AN1RKHAT3hoV2rYVsVeYr7RHfvweoQV0XfDdhZUibf7GFbNfBQXT2x5ApZh6QXlYCNGQTogcobooEGj3Xvw2n%2B0QJrnhgHR4ZpUsFGAsxikeevMgioKU%2Fx1hNXdv5FkyTuwOmVJRIj2AzWyDgcFSMuT1k%2FPS7Lmyg0nY6C73xuYJjVrsRtSxCD2g1r3do3aTVxe5IgNj9PNaqIOqZqhyx2aoJUKf9uIEeUIAQ%2FoWU1xcrHZOKG4UIpdZxoe7yv3WJ5x5zRbAi60u5M884xMzEx3bksd8QZQriecvdruU5x8GQrt0hNePTjvLxYXwx14WhdxZqJ5Oe2NXuX8AhLoiB1tjZt4XDhxjgdmMwvi15G4v86SU1EAr%2B3wSkO3%2FpCI%2BHISexmmZSGyDeRkpC2oyFqObLbj1XJkvJP3P4qxlZREGs8gS6pvxwj3rOTZ031UXxNaMRf9%2FDYv3h%2BIpDRZ9IzaKnC9nAUwJ2YgxdfFONCdIFCnXkBhHKC39Lv%2BgWB%2BYmEEUdBBscu1uPC76a9CzcElJCn3azv8JR3%2FxHkCs2%2BXYinqKqab8uC%2Fbl9xuJbScOUc8a%2BvlctKlmjrMjsQmpXrTweIy4UH98ZFJgvoNH%2FoPgEDrhTBP1zmS0JgFDDVyeO%2BBjqkAWQzpIMXiYYlobtTZncffq5eo5eQTK9%2Fp5LRyUARXvnbbddReb5df7S7RRUAeL6OWQvKOznFLgpmTQuHwQFqrhHQ81OHYzED6ch83fwX%2BBvtefFbh6GmJkFWtPm2DtwWw8Rh9RY0MwGqUFUj1qu6gsF7FeSElNcDqpPsEF%2BF5ekr6uCeXgWZCPBaexVsOUEzZYPhPmc7KeaEwDKGgH901whs0N5%2F&X-Amz-Signature=f97aae03094e5a0d3d243f5b4ff482b4dbbb8a6b11188b7f57130a235c758bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYV3FFD%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T041023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLdvP8msgS7RppuOTonHgrYakRJJLU3LcTJWs3GMzn7QIhAL2n9b3x0ey2yY3fen1%2FZyhBhA8bjjUoK4DeEzc1zKlrKv8DCFQQABoMNjM3NDIzMTgzODA1IgzuJ4ZP32sOt%2Fntn34q3AN1RKHAT3hoV2rYVsVeYr7RHfvweoQV0XfDdhZUibf7GFbNfBQXT2x5ApZh6QXlYCNGQTogcobooEGj3Xvw2n%2B0QJrnhgHR4ZpUsFGAsxikeevMgioKU%2Fx1hNXdv5FkyTuwOmVJRIj2AzWyDgcFSMuT1k%2FPS7Lmyg0nY6C73xuYJjVrsRtSxCD2g1r3do3aTVxe5IgNj9PNaqIOqZqhyx2aoJUKf9uIEeUIAQ%2FoWU1xcrHZOKG4UIpdZxoe7yv3WJ5x5zRbAi60u5M884xMzEx3bksd8QZQriecvdruU5x8GQrt0hNePTjvLxYXwx14WhdxZqJ5Oe2NXuX8AhLoiB1tjZt4XDhxjgdmMwvi15G4v86SU1EAr%2B3wSkO3%2FpCI%2BHISexmmZSGyDeRkpC2oyFqObLbj1XJkvJP3P4qxlZREGs8gS6pvxwj3rOTZ031UXxNaMRf9%2FDYv3h%2BIpDRZ9IzaKnC9nAUwJ2YgxdfFONCdIFCnXkBhHKC39Lv%2BgWB%2BYmEEUdBBscu1uPC76a9CzcElJCn3azv8JR3%2FxHkCs2%2BXYinqKqab8uC%2Fbl9xuJbScOUc8a%2BvlctKlmjrMjsQmpXrTweIy4UH98ZFJgvoNH%2FoPgEDrhTBP1zmS0JgFDDVyeO%2BBjqkAWQzpIMXiYYlobtTZncffq5eo5eQTK9%2Fp5LRyUARXvnbbddReb5df7S7RRUAeL6OWQvKOznFLgpmTQuHwQFqrhHQ81OHYzED6ch83fwX%2BBvtefFbh6GmJkFWtPm2DtwWw8Rh9RY0MwGqUFUj1qu6gsF7FeSElNcDqpPsEF%2BF5ekr6uCeXgWZCPBaexVsOUEzZYPhPmc7KeaEwDKGgH901whs0N5%2F&X-Amz-Signature=28c5aba8c422197058e75eb8c2b63d7c396e8c7bdad50a198de73cd28a3fc05b&X-Amz-SignedHeaders=host&x-id=GetObject)
