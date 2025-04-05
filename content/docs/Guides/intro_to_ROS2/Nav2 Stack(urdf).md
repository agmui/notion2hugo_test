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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YDPB7LX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOqJPxJb3GXOAZ1PdMfpHz1kIbcVXcwHvjPmORzvFf8AIgQBu9jZv%2FrynHwiTO7CMSCLZqIdHgke1Cney7ZHqFNCgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDG3d2psbT%2BeAMryk1ircAwmBczmq5r41isPYxkMqZ97NryS0oP9sYiK6ie0I91%2F90vq97spC5E7R1pre5JjrM6bkKfGb7ysM5tMaZF3mm6jO%2F0WIpZG8r4AGUx5Smq6Rh90BQeS7kP0LZmlTf55mtrpYi5Cc6%2Bl7hgSit3fJX%2BtfgAJtcXlC9uuEclPrIJGZ%2FoUTK%2BofdUGodRCM%2FnkwH82ftk%2B4S4pjsUDzpx%2BDEFBYzYsQG18%2FXfBVqNY1xOUiNllYtSwMU6qxH2SBuvjqvKHpLQ33NL%2BUuLnkN2KV4jGtOxVIh1BlvjmDWdsP3SQSzZLj3ISUNRK0IAjRLV57t%2BhMdBvdhFC%2FH%2B%2BKjM1kdsD7vEG3JxuMikrH2jG2H2aHIQXFZGYk7TtMh69Lo0NYJRr%2FIJ6U4x%2B3uArVta3IsZWJf03rJirtVoNvQHGATjg3a2%2BzC8xkqwWEqfJK60KYCxUJ%2B6gIXB4yaQEMA2cQHgjs%2FQzVbiJfyCQfoaKiYscfQLaNTLj7BtshWatRkS1bHmY0f9B8su%2BSNaDeVQmp7BsmZrQRiDwfRxSv0nxbXrhyTDSaWOtBPbwJYNuDLA18DFJe03FTAInQ01PtTrHZI6EjpwUhlmQDdAN2oQrd1EjwE02cTD3KNNSQB6zbMIHwwr8GOqUBQ%2BdPzfcbPZO63gaMyrDHIxEbNS7VZNIdZFQTfO0K%2Far5MMJbLBvIFwrIzREHchftGn6rfqxEVssnYtz1G1KZSqPzzb7RLZjidhFrd6c8miVxSRb%2Bz2NKYthOmndjdKDL2CK%2FlZF4%2F7jkXGDSOYA1yHNyTOYvL3MrWh4fvQFU3AePuFGDBHwpWEaOWqWriZ1wism217wvWMpKgikedgUkGvDd1eEe&X-Amz-Signature=7794188611f3688a72c474a50602b0d2be4694bd1dfab7f3839c24238d9f3e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YDPB7LX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOqJPxJb3GXOAZ1PdMfpHz1kIbcVXcwHvjPmORzvFf8AIgQBu9jZv%2FrynHwiTO7CMSCLZqIdHgke1Cney7ZHqFNCgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDG3d2psbT%2BeAMryk1ircAwmBczmq5r41isPYxkMqZ97NryS0oP9sYiK6ie0I91%2F90vq97spC5E7R1pre5JjrM6bkKfGb7ysM5tMaZF3mm6jO%2F0WIpZG8r4AGUx5Smq6Rh90BQeS7kP0LZmlTf55mtrpYi5Cc6%2Bl7hgSit3fJX%2BtfgAJtcXlC9uuEclPrIJGZ%2FoUTK%2BofdUGodRCM%2FnkwH82ftk%2B4S4pjsUDzpx%2BDEFBYzYsQG18%2FXfBVqNY1xOUiNllYtSwMU6qxH2SBuvjqvKHpLQ33NL%2BUuLnkN2KV4jGtOxVIh1BlvjmDWdsP3SQSzZLj3ISUNRK0IAjRLV57t%2BhMdBvdhFC%2FH%2B%2BKjM1kdsD7vEG3JxuMikrH2jG2H2aHIQXFZGYk7TtMh69Lo0NYJRr%2FIJ6U4x%2B3uArVta3IsZWJf03rJirtVoNvQHGATjg3a2%2BzC8xkqwWEqfJK60KYCxUJ%2B6gIXB4yaQEMA2cQHgjs%2FQzVbiJfyCQfoaKiYscfQLaNTLj7BtshWatRkS1bHmY0f9B8su%2BSNaDeVQmp7BsmZrQRiDwfRxSv0nxbXrhyTDSaWOtBPbwJYNuDLA18DFJe03FTAInQ01PtTrHZI6EjpwUhlmQDdAN2oQrd1EjwE02cTD3KNNSQB6zbMIHwwr8GOqUBQ%2BdPzfcbPZO63gaMyrDHIxEbNS7VZNIdZFQTfO0K%2Far5MMJbLBvIFwrIzREHchftGn6rfqxEVssnYtz1G1KZSqPzzb7RLZjidhFrd6c8miVxSRb%2Bz2NKYthOmndjdKDL2CK%2FlZF4%2F7jkXGDSOYA1yHNyTOYvL3MrWh4fvQFU3AePuFGDBHwpWEaOWqWriZ1wism217wvWMpKgikedgUkGvDd1eEe&X-Amz-Signature=b3ce54b408bb2dbf3287b76730495d8acae27c10b73e29f96fd5809ce78d916c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YDPB7LX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOqJPxJb3GXOAZ1PdMfpHz1kIbcVXcwHvjPmORzvFf8AIgQBu9jZv%2FrynHwiTO7CMSCLZqIdHgke1Cney7ZHqFNCgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDG3d2psbT%2BeAMryk1ircAwmBczmq5r41isPYxkMqZ97NryS0oP9sYiK6ie0I91%2F90vq97spC5E7R1pre5JjrM6bkKfGb7ysM5tMaZF3mm6jO%2F0WIpZG8r4AGUx5Smq6Rh90BQeS7kP0LZmlTf55mtrpYi5Cc6%2Bl7hgSit3fJX%2BtfgAJtcXlC9uuEclPrIJGZ%2FoUTK%2BofdUGodRCM%2FnkwH82ftk%2B4S4pjsUDzpx%2BDEFBYzYsQG18%2FXfBVqNY1xOUiNllYtSwMU6qxH2SBuvjqvKHpLQ33NL%2BUuLnkN2KV4jGtOxVIh1BlvjmDWdsP3SQSzZLj3ISUNRK0IAjRLV57t%2BhMdBvdhFC%2FH%2B%2BKjM1kdsD7vEG3JxuMikrH2jG2H2aHIQXFZGYk7TtMh69Lo0NYJRr%2FIJ6U4x%2B3uArVta3IsZWJf03rJirtVoNvQHGATjg3a2%2BzC8xkqwWEqfJK60KYCxUJ%2B6gIXB4yaQEMA2cQHgjs%2FQzVbiJfyCQfoaKiYscfQLaNTLj7BtshWatRkS1bHmY0f9B8su%2BSNaDeVQmp7BsmZrQRiDwfRxSv0nxbXrhyTDSaWOtBPbwJYNuDLA18DFJe03FTAInQ01PtTrHZI6EjpwUhlmQDdAN2oQrd1EjwE02cTD3KNNSQB6zbMIHwwr8GOqUBQ%2BdPzfcbPZO63gaMyrDHIxEbNS7VZNIdZFQTfO0K%2Far5MMJbLBvIFwrIzREHchftGn6rfqxEVssnYtz1G1KZSqPzzb7RLZjidhFrd6c8miVxSRb%2Bz2NKYthOmndjdKDL2CK%2FlZF4%2F7jkXGDSOYA1yHNyTOYvL3MrWh4fvQFU3AePuFGDBHwpWEaOWqWriZ1wism217wvWMpKgikedgUkGvDd1eEe&X-Amz-Signature=c9a5db290b1ffef641e58e9aae4a5349e24bb08e55fa035ebcab0f10e771b6e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YDPB7LX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOqJPxJb3GXOAZ1PdMfpHz1kIbcVXcwHvjPmORzvFf8AIgQBu9jZv%2FrynHwiTO7CMSCLZqIdHgke1Cney7ZHqFNCgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDG3d2psbT%2BeAMryk1ircAwmBczmq5r41isPYxkMqZ97NryS0oP9sYiK6ie0I91%2F90vq97spC5E7R1pre5JjrM6bkKfGb7ysM5tMaZF3mm6jO%2F0WIpZG8r4AGUx5Smq6Rh90BQeS7kP0LZmlTf55mtrpYi5Cc6%2Bl7hgSit3fJX%2BtfgAJtcXlC9uuEclPrIJGZ%2FoUTK%2BofdUGodRCM%2FnkwH82ftk%2B4S4pjsUDzpx%2BDEFBYzYsQG18%2FXfBVqNY1xOUiNllYtSwMU6qxH2SBuvjqvKHpLQ33NL%2BUuLnkN2KV4jGtOxVIh1BlvjmDWdsP3SQSzZLj3ISUNRK0IAjRLV57t%2BhMdBvdhFC%2FH%2B%2BKjM1kdsD7vEG3JxuMikrH2jG2H2aHIQXFZGYk7TtMh69Lo0NYJRr%2FIJ6U4x%2B3uArVta3IsZWJf03rJirtVoNvQHGATjg3a2%2BzC8xkqwWEqfJK60KYCxUJ%2B6gIXB4yaQEMA2cQHgjs%2FQzVbiJfyCQfoaKiYscfQLaNTLj7BtshWatRkS1bHmY0f9B8su%2BSNaDeVQmp7BsmZrQRiDwfRxSv0nxbXrhyTDSaWOtBPbwJYNuDLA18DFJe03FTAInQ01PtTrHZI6EjpwUhlmQDdAN2oQrd1EjwE02cTD3KNNSQB6zbMIHwwr8GOqUBQ%2BdPzfcbPZO63gaMyrDHIxEbNS7VZNIdZFQTfO0K%2Far5MMJbLBvIFwrIzREHchftGn6rfqxEVssnYtz1G1KZSqPzzb7RLZjidhFrd6c8miVxSRb%2Bz2NKYthOmndjdKDL2CK%2FlZF4%2F7jkXGDSOYA1yHNyTOYvL3MrWh4fvQFU3AePuFGDBHwpWEaOWqWriZ1wism217wvWMpKgikedgUkGvDd1eEe&X-Amz-Signature=89ca0c7cf7f6abf8ceebfa73b6dd3cb71e5bf5463c4b086eeabae51014dafd54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YDPB7LX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOqJPxJb3GXOAZ1PdMfpHz1kIbcVXcwHvjPmORzvFf8AIgQBu9jZv%2FrynHwiTO7CMSCLZqIdHgke1Cney7ZHqFNCgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDG3d2psbT%2BeAMryk1ircAwmBczmq5r41isPYxkMqZ97NryS0oP9sYiK6ie0I91%2F90vq97spC5E7R1pre5JjrM6bkKfGb7ysM5tMaZF3mm6jO%2F0WIpZG8r4AGUx5Smq6Rh90BQeS7kP0LZmlTf55mtrpYi5Cc6%2Bl7hgSit3fJX%2BtfgAJtcXlC9uuEclPrIJGZ%2FoUTK%2BofdUGodRCM%2FnkwH82ftk%2B4S4pjsUDzpx%2BDEFBYzYsQG18%2FXfBVqNY1xOUiNllYtSwMU6qxH2SBuvjqvKHpLQ33NL%2BUuLnkN2KV4jGtOxVIh1BlvjmDWdsP3SQSzZLj3ISUNRK0IAjRLV57t%2BhMdBvdhFC%2FH%2B%2BKjM1kdsD7vEG3JxuMikrH2jG2H2aHIQXFZGYk7TtMh69Lo0NYJRr%2FIJ6U4x%2B3uArVta3IsZWJf03rJirtVoNvQHGATjg3a2%2BzC8xkqwWEqfJK60KYCxUJ%2B6gIXB4yaQEMA2cQHgjs%2FQzVbiJfyCQfoaKiYscfQLaNTLj7BtshWatRkS1bHmY0f9B8su%2BSNaDeVQmp7BsmZrQRiDwfRxSv0nxbXrhyTDSaWOtBPbwJYNuDLA18DFJe03FTAInQ01PtTrHZI6EjpwUhlmQDdAN2oQrd1EjwE02cTD3KNNSQB6zbMIHwwr8GOqUBQ%2BdPzfcbPZO63gaMyrDHIxEbNS7VZNIdZFQTfO0K%2Far5MMJbLBvIFwrIzREHchftGn6rfqxEVssnYtz1G1KZSqPzzb7RLZjidhFrd6c8miVxSRb%2Bz2NKYthOmndjdKDL2CK%2FlZF4%2F7jkXGDSOYA1yHNyTOYvL3MrWh4fvQFU3AePuFGDBHwpWEaOWqWriZ1wism217wvWMpKgikedgUkGvDd1eEe&X-Amz-Signature=4901ecbf4b0229c0d0400cfe5d753f12a436afd113e1ac7fac00f83b32219d78&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YDPB7LX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOqJPxJb3GXOAZ1PdMfpHz1kIbcVXcwHvjPmORzvFf8AIgQBu9jZv%2FrynHwiTO7CMSCLZqIdHgke1Cney7ZHqFNCgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDG3d2psbT%2BeAMryk1ircAwmBczmq5r41isPYxkMqZ97NryS0oP9sYiK6ie0I91%2F90vq97spC5E7R1pre5JjrM6bkKfGb7ysM5tMaZF3mm6jO%2F0WIpZG8r4AGUx5Smq6Rh90BQeS7kP0LZmlTf55mtrpYi5Cc6%2Bl7hgSit3fJX%2BtfgAJtcXlC9uuEclPrIJGZ%2FoUTK%2BofdUGodRCM%2FnkwH82ftk%2B4S4pjsUDzpx%2BDEFBYzYsQG18%2FXfBVqNY1xOUiNllYtSwMU6qxH2SBuvjqvKHpLQ33NL%2BUuLnkN2KV4jGtOxVIh1BlvjmDWdsP3SQSzZLj3ISUNRK0IAjRLV57t%2BhMdBvdhFC%2FH%2B%2BKjM1kdsD7vEG3JxuMikrH2jG2H2aHIQXFZGYk7TtMh69Lo0NYJRr%2FIJ6U4x%2B3uArVta3IsZWJf03rJirtVoNvQHGATjg3a2%2BzC8xkqwWEqfJK60KYCxUJ%2B6gIXB4yaQEMA2cQHgjs%2FQzVbiJfyCQfoaKiYscfQLaNTLj7BtshWatRkS1bHmY0f9B8su%2BSNaDeVQmp7BsmZrQRiDwfRxSv0nxbXrhyTDSaWOtBPbwJYNuDLA18DFJe03FTAInQ01PtTrHZI6EjpwUhlmQDdAN2oQrd1EjwE02cTD3KNNSQB6zbMIHwwr8GOqUBQ%2BdPzfcbPZO63gaMyrDHIxEbNS7VZNIdZFQTfO0K%2Far5MMJbLBvIFwrIzREHchftGn6rfqxEVssnYtz1G1KZSqPzzb7RLZjidhFrd6c8miVxSRb%2Bz2NKYthOmndjdKDL2CK%2FlZF4%2F7jkXGDSOYA1yHNyTOYvL3MrWh4fvQFU3AePuFGDBHwpWEaOWqWriZ1wism217wvWMpKgikedgUkGvDd1eEe&X-Amz-Signature=a6053c67365eaf83a3c17a3ceb3b235c7bc4619723a3e46d1a874c57a9063997&X-Amz-SignedHeaders=host&x-id=GetObject)
