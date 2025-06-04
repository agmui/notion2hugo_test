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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z3YLMME%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCLSei5hvWj9DR%2BzAwoK%2BDGJl68j53DLUxMidcSWWJHKgIhAKg37xXB2cwSTTjyGBB8UxK4SWznOsmpAK4HQ%2BhxrW3DKv8DCCwQABoMNjM3NDIzMTgzODA1IgyYKCGa0xQH57mTUXoq3AOo0HAlagUqswcDmIaCjudS9anE3ivmB%2Fo%2FcKZ69GfMUqRO%2BKlSDit2FwC3iFDm%2FcKicZiGKZqdCdDBsdWPOvE2t0AkBgvCAf7TgxR8Z5WIEIkGPLdie8BEsc0OLIWcQvcP3aaADM32ou0tx0mlnbUYL0RuXyWKxg%2BRCfeDY2%2FB%2B0FJDdUKnyIS%2FMKUkKbvRsdd%2F6Cs0Q3wpl5%2FABA0iX2t2LKzbZZi5B0rJ2UoCcuRrFMKAe%2FXwjaN6ZFlh6MW04S0fk16dFH4dJgWWZt39lVslS8kWOvj5TrMweRO%2FRnpQ6tEESaEyXtiST8y7ff9HUm2%2BfksG6AVLxoWMXvx3PSieGGUXEvWH9A%2BRGFci%2BZf%2FKwPSUPkufgGPcrngkv1r7%2Bnrs9Oqdb1kRe9AVebXpgDN5uhkPbyt%2Btx1yvGS0ukM7%2F9KPVtYV2%2FzyzEBBWIkw01Ns3zRGqu%2B6GfjQQVKOLuGMSmOmzb8CtgWo7FNQug5mBzi%2FDwSBKIvHHS6KCLp6qpJVuWBGTBCNM4rC0%2Bi4SYrPUOGHeL2Az%2F6oiSg96EBFpqF5nEkZTYri7ga0vE8pHK04RbRY9fWpepEaBJJZc7HW4d9aMfZPDqsX7G89Cj43FilkoBq5jAqVCzoDCS0IDCBjqkAbApcX60r2olWGnGrQgud2lTXpICpsbjyLrMxBytSTBuX8iveC99YPenre2G1WQubYr38GP8shgWqeTXmvAyU9yq0FIrTISJWjGeT8XEfLjkCYrIbWPvPtzIFeaDjcJbt9s3Ed8ihgbsmXzjH%2BeI26pP%2BuXNLPZNn5NoGxGYUXgc7QsO2G77KO8X%2F5XhoAZogVhdngcczxxPFOwSGIXL9rnnwg84&X-Amz-Signature=845ea2a86c3b2004258bbc9b5d86061aa81a350c9503fa089fb251f54ca953e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z3YLMME%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCLSei5hvWj9DR%2BzAwoK%2BDGJl68j53DLUxMidcSWWJHKgIhAKg37xXB2cwSTTjyGBB8UxK4SWznOsmpAK4HQ%2BhxrW3DKv8DCCwQABoMNjM3NDIzMTgzODA1IgyYKCGa0xQH57mTUXoq3AOo0HAlagUqswcDmIaCjudS9anE3ivmB%2Fo%2FcKZ69GfMUqRO%2BKlSDit2FwC3iFDm%2FcKicZiGKZqdCdDBsdWPOvE2t0AkBgvCAf7TgxR8Z5WIEIkGPLdie8BEsc0OLIWcQvcP3aaADM32ou0tx0mlnbUYL0RuXyWKxg%2BRCfeDY2%2FB%2B0FJDdUKnyIS%2FMKUkKbvRsdd%2F6Cs0Q3wpl5%2FABA0iX2t2LKzbZZi5B0rJ2UoCcuRrFMKAe%2FXwjaN6ZFlh6MW04S0fk16dFH4dJgWWZt39lVslS8kWOvj5TrMweRO%2FRnpQ6tEESaEyXtiST8y7ff9HUm2%2BfksG6AVLxoWMXvx3PSieGGUXEvWH9A%2BRGFci%2BZf%2FKwPSUPkufgGPcrngkv1r7%2Bnrs9Oqdb1kRe9AVebXpgDN5uhkPbyt%2Btx1yvGS0ukM7%2F9KPVtYV2%2FzyzEBBWIkw01Ns3zRGqu%2B6GfjQQVKOLuGMSmOmzb8CtgWo7FNQug5mBzi%2FDwSBKIvHHS6KCLp6qpJVuWBGTBCNM4rC0%2Bi4SYrPUOGHeL2Az%2F6oiSg96EBFpqF5nEkZTYri7ga0vE8pHK04RbRY9fWpepEaBJJZc7HW4d9aMfZPDqsX7G89Cj43FilkoBq5jAqVCzoDCS0IDCBjqkAbApcX60r2olWGnGrQgud2lTXpICpsbjyLrMxBytSTBuX8iveC99YPenre2G1WQubYr38GP8shgWqeTXmvAyU9yq0FIrTISJWjGeT8XEfLjkCYrIbWPvPtzIFeaDjcJbt9s3Ed8ihgbsmXzjH%2BeI26pP%2BuXNLPZNn5NoGxGYUXgc7QsO2G77KO8X%2F5XhoAZogVhdngcczxxPFOwSGIXL9rnnwg84&X-Amz-Signature=e32e00c039eccc0cbc81a10f7c04eb211b07e48a02763cb9fd46bc37dbcb7f3d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z3YLMME%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCLSei5hvWj9DR%2BzAwoK%2BDGJl68j53DLUxMidcSWWJHKgIhAKg37xXB2cwSTTjyGBB8UxK4SWznOsmpAK4HQ%2BhxrW3DKv8DCCwQABoMNjM3NDIzMTgzODA1IgyYKCGa0xQH57mTUXoq3AOo0HAlagUqswcDmIaCjudS9anE3ivmB%2Fo%2FcKZ69GfMUqRO%2BKlSDit2FwC3iFDm%2FcKicZiGKZqdCdDBsdWPOvE2t0AkBgvCAf7TgxR8Z5WIEIkGPLdie8BEsc0OLIWcQvcP3aaADM32ou0tx0mlnbUYL0RuXyWKxg%2BRCfeDY2%2FB%2B0FJDdUKnyIS%2FMKUkKbvRsdd%2F6Cs0Q3wpl5%2FABA0iX2t2LKzbZZi5B0rJ2UoCcuRrFMKAe%2FXwjaN6ZFlh6MW04S0fk16dFH4dJgWWZt39lVslS8kWOvj5TrMweRO%2FRnpQ6tEESaEyXtiST8y7ff9HUm2%2BfksG6AVLxoWMXvx3PSieGGUXEvWH9A%2BRGFci%2BZf%2FKwPSUPkufgGPcrngkv1r7%2Bnrs9Oqdb1kRe9AVebXpgDN5uhkPbyt%2Btx1yvGS0ukM7%2F9KPVtYV2%2FzyzEBBWIkw01Ns3zRGqu%2B6GfjQQVKOLuGMSmOmzb8CtgWo7FNQug5mBzi%2FDwSBKIvHHS6KCLp6qpJVuWBGTBCNM4rC0%2Bi4SYrPUOGHeL2Az%2F6oiSg96EBFpqF5nEkZTYri7ga0vE8pHK04RbRY9fWpepEaBJJZc7HW4d9aMfZPDqsX7G89Cj43FilkoBq5jAqVCzoDCS0IDCBjqkAbApcX60r2olWGnGrQgud2lTXpICpsbjyLrMxBytSTBuX8iveC99YPenre2G1WQubYr38GP8shgWqeTXmvAyU9yq0FIrTISJWjGeT8XEfLjkCYrIbWPvPtzIFeaDjcJbt9s3Ed8ihgbsmXzjH%2BeI26pP%2BuXNLPZNn5NoGxGYUXgc7QsO2G77KO8X%2F5XhoAZogVhdngcczxxPFOwSGIXL9rnnwg84&X-Amz-Signature=6bea77013855107d61ca01d73ae53eeb5c54403753c1c39486a0ebd2c600cf42&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z3YLMME%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCLSei5hvWj9DR%2BzAwoK%2BDGJl68j53DLUxMidcSWWJHKgIhAKg37xXB2cwSTTjyGBB8UxK4SWznOsmpAK4HQ%2BhxrW3DKv8DCCwQABoMNjM3NDIzMTgzODA1IgyYKCGa0xQH57mTUXoq3AOo0HAlagUqswcDmIaCjudS9anE3ivmB%2Fo%2FcKZ69GfMUqRO%2BKlSDit2FwC3iFDm%2FcKicZiGKZqdCdDBsdWPOvE2t0AkBgvCAf7TgxR8Z5WIEIkGPLdie8BEsc0OLIWcQvcP3aaADM32ou0tx0mlnbUYL0RuXyWKxg%2BRCfeDY2%2FB%2B0FJDdUKnyIS%2FMKUkKbvRsdd%2F6Cs0Q3wpl5%2FABA0iX2t2LKzbZZi5B0rJ2UoCcuRrFMKAe%2FXwjaN6ZFlh6MW04S0fk16dFH4dJgWWZt39lVslS8kWOvj5TrMweRO%2FRnpQ6tEESaEyXtiST8y7ff9HUm2%2BfksG6AVLxoWMXvx3PSieGGUXEvWH9A%2BRGFci%2BZf%2FKwPSUPkufgGPcrngkv1r7%2Bnrs9Oqdb1kRe9AVebXpgDN5uhkPbyt%2Btx1yvGS0ukM7%2F9KPVtYV2%2FzyzEBBWIkw01Ns3zRGqu%2B6GfjQQVKOLuGMSmOmzb8CtgWo7FNQug5mBzi%2FDwSBKIvHHS6KCLp6qpJVuWBGTBCNM4rC0%2Bi4SYrPUOGHeL2Az%2F6oiSg96EBFpqF5nEkZTYri7ga0vE8pHK04RbRY9fWpepEaBJJZc7HW4d9aMfZPDqsX7G89Cj43FilkoBq5jAqVCzoDCS0IDCBjqkAbApcX60r2olWGnGrQgud2lTXpICpsbjyLrMxBytSTBuX8iveC99YPenre2G1WQubYr38GP8shgWqeTXmvAyU9yq0FIrTISJWjGeT8XEfLjkCYrIbWPvPtzIFeaDjcJbt9s3Ed8ihgbsmXzjH%2BeI26pP%2BuXNLPZNn5NoGxGYUXgc7QsO2G77KO8X%2F5XhoAZogVhdngcczxxPFOwSGIXL9rnnwg84&X-Amz-Signature=4837790c245908e67ffac4637cfd3a182810d4bde1fe0014e5d140b37e594b34&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z3YLMME%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCLSei5hvWj9DR%2BzAwoK%2BDGJl68j53DLUxMidcSWWJHKgIhAKg37xXB2cwSTTjyGBB8UxK4SWznOsmpAK4HQ%2BhxrW3DKv8DCCwQABoMNjM3NDIzMTgzODA1IgyYKCGa0xQH57mTUXoq3AOo0HAlagUqswcDmIaCjudS9anE3ivmB%2Fo%2FcKZ69GfMUqRO%2BKlSDit2FwC3iFDm%2FcKicZiGKZqdCdDBsdWPOvE2t0AkBgvCAf7TgxR8Z5WIEIkGPLdie8BEsc0OLIWcQvcP3aaADM32ou0tx0mlnbUYL0RuXyWKxg%2BRCfeDY2%2FB%2B0FJDdUKnyIS%2FMKUkKbvRsdd%2F6Cs0Q3wpl5%2FABA0iX2t2LKzbZZi5B0rJ2UoCcuRrFMKAe%2FXwjaN6ZFlh6MW04S0fk16dFH4dJgWWZt39lVslS8kWOvj5TrMweRO%2FRnpQ6tEESaEyXtiST8y7ff9HUm2%2BfksG6AVLxoWMXvx3PSieGGUXEvWH9A%2BRGFci%2BZf%2FKwPSUPkufgGPcrngkv1r7%2Bnrs9Oqdb1kRe9AVebXpgDN5uhkPbyt%2Btx1yvGS0ukM7%2F9KPVtYV2%2FzyzEBBWIkw01Ns3zRGqu%2B6GfjQQVKOLuGMSmOmzb8CtgWo7FNQug5mBzi%2FDwSBKIvHHS6KCLp6qpJVuWBGTBCNM4rC0%2Bi4SYrPUOGHeL2Az%2F6oiSg96EBFpqF5nEkZTYri7ga0vE8pHK04RbRY9fWpepEaBJJZc7HW4d9aMfZPDqsX7G89Cj43FilkoBq5jAqVCzoDCS0IDCBjqkAbApcX60r2olWGnGrQgud2lTXpICpsbjyLrMxBytSTBuX8iveC99YPenre2G1WQubYr38GP8shgWqeTXmvAyU9yq0FIrTISJWjGeT8XEfLjkCYrIbWPvPtzIFeaDjcJbt9s3Ed8ihgbsmXzjH%2BeI26pP%2BuXNLPZNn5NoGxGYUXgc7QsO2G77KO8X%2F5XhoAZogVhdngcczxxPFOwSGIXL9rnnwg84&X-Amz-Signature=e134c99b29e66b1ca55ca32bfdae807c743d5e00d4a8645dcf5a5eb8605d5dec&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z3YLMME%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCLSei5hvWj9DR%2BzAwoK%2BDGJl68j53DLUxMidcSWWJHKgIhAKg37xXB2cwSTTjyGBB8UxK4SWznOsmpAK4HQ%2BhxrW3DKv8DCCwQABoMNjM3NDIzMTgzODA1IgyYKCGa0xQH57mTUXoq3AOo0HAlagUqswcDmIaCjudS9anE3ivmB%2Fo%2FcKZ69GfMUqRO%2BKlSDit2FwC3iFDm%2FcKicZiGKZqdCdDBsdWPOvE2t0AkBgvCAf7TgxR8Z5WIEIkGPLdie8BEsc0OLIWcQvcP3aaADM32ou0tx0mlnbUYL0RuXyWKxg%2BRCfeDY2%2FB%2B0FJDdUKnyIS%2FMKUkKbvRsdd%2F6Cs0Q3wpl5%2FABA0iX2t2LKzbZZi5B0rJ2UoCcuRrFMKAe%2FXwjaN6ZFlh6MW04S0fk16dFH4dJgWWZt39lVslS8kWOvj5TrMweRO%2FRnpQ6tEESaEyXtiST8y7ff9HUm2%2BfksG6AVLxoWMXvx3PSieGGUXEvWH9A%2BRGFci%2BZf%2FKwPSUPkufgGPcrngkv1r7%2Bnrs9Oqdb1kRe9AVebXpgDN5uhkPbyt%2Btx1yvGS0ukM7%2F9KPVtYV2%2FzyzEBBWIkw01Ns3zRGqu%2B6GfjQQVKOLuGMSmOmzb8CtgWo7FNQug5mBzi%2FDwSBKIvHHS6KCLp6qpJVuWBGTBCNM4rC0%2Bi4SYrPUOGHeL2Az%2F6oiSg96EBFpqF5nEkZTYri7ga0vE8pHK04RbRY9fWpepEaBJJZc7HW4d9aMfZPDqsX7G89Cj43FilkoBq5jAqVCzoDCS0IDCBjqkAbApcX60r2olWGnGrQgud2lTXpICpsbjyLrMxBytSTBuX8iveC99YPenre2G1WQubYr38GP8shgWqeTXmvAyU9yq0FIrTISJWjGeT8XEfLjkCYrIbWPvPtzIFeaDjcJbt9s3Ed8ihgbsmXzjH%2BeI26pP%2BuXNLPZNn5NoGxGYUXgc7QsO2G77KO8X%2F5XhoAZogVhdngcczxxPFOwSGIXL9rnnwg84&X-Amz-Signature=651b37a0c33769221dc0f23c8c708f95e2d5215c4ce7f73c71e00e41fc420c01&X-Amz-SignedHeaders=host&x-id=GetObject)
