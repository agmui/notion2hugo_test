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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF5QR67S%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAj31B5mAXLJSlCcJ%2B4WnQqyS%2FgzT0iHMIXcgwUfh5ghAiBjIlc7AwwJyB9q%2FXvkTULZs0mX8kUAZJ3DsnBocSj9ZyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlH5tMeYU8Ba6QqrfKtwDmCnjCN8d49cWDXD1u5EYnSIseOIFOMhfTJXuVWh5ohMMUafBdTFUCk0CG8yhSsW2p4xVBIWGV9v3S9Dqo4jj3FVU%2Bdw5TiNjDDKk5YamvDO%2FoYQQYZRYlIH8Ruubvi%2Bj%2BmHageyNS9msqRHrgRI0fOT4mgFM7MPirIWMHgVxQU5VU8F0vexzBh94u5gW2A4nWV8XySVIAuX3nxIcCHjFTOW6t4Eg7Y7MspC5OU6MZbe8RuXG4uDIESIorTkJWLbWpZ5MgYrNbPGsPSmjPTgGOkk%2FOd6vieqv2qYnulIOny3v94RUbkkMit%2BnPgVGoXHLHw6wsaQwot9ERsxr%2BpoF1bdla6fwkoOZUtvV%2FOFlUfVRbvfk91Js5AJtkJ%2FxP6SdBSsUD7WEWBAKRhfa09DJeT9bG583u1sNlcQo7FtaO6ye5KWVhvF2bI5SYzSJOcotX6KhTUgv6PRBVue7q9PZPXVOh5QzbgJCESYF1UXbT%2BNd23P7EZ1ENRaccRvqZNVBkylO%2BYrNGmh1JY45G%2FdaokahxZlwPOPQAGPXR8Gym8bYu60dXHImR8mVTAZBqemScw1PAmujiKJgij%2FTJCUmExvYAPh6cSTeFb88amVlLJ%2Br5kef1eMPzGUN5Kowy46NwQY6pgHLtsJimQq7DW4kZ6uZgX71OGLOcXLzQX9Su6MThSCnVQbcXOcxZM%2FzjzT42QSgznjZcVsM%2FGIIN4BoVkm45xP%2FkDuYrkJZhundiZLFTTVpbZ2Q9LJ3tOehGgzBQGfXPJ068DbAlFrefrYbhkFBTqNieNOg4ued1GLZHNm1YKS9Fgu9j49qgageDbRqMX1o6M1IpGWdYH0S89rrjT6LuFOwc%2FD6hLPt&X-Amz-Signature=13f43213d8bdf6187fd61a8c357a092f44b0ba249a636d0aa40f0f0bf7918952&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF5QR67S%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAj31B5mAXLJSlCcJ%2B4WnQqyS%2FgzT0iHMIXcgwUfh5ghAiBjIlc7AwwJyB9q%2FXvkTULZs0mX8kUAZJ3DsnBocSj9ZyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlH5tMeYU8Ba6QqrfKtwDmCnjCN8d49cWDXD1u5EYnSIseOIFOMhfTJXuVWh5ohMMUafBdTFUCk0CG8yhSsW2p4xVBIWGV9v3S9Dqo4jj3FVU%2Bdw5TiNjDDKk5YamvDO%2FoYQQYZRYlIH8Ruubvi%2Bj%2BmHageyNS9msqRHrgRI0fOT4mgFM7MPirIWMHgVxQU5VU8F0vexzBh94u5gW2A4nWV8XySVIAuX3nxIcCHjFTOW6t4Eg7Y7MspC5OU6MZbe8RuXG4uDIESIorTkJWLbWpZ5MgYrNbPGsPSmjPTgGOkk%2FOd6vieqv2qYnulIOny3v94RUbkkMit%2BnPgVGoXHLHw6wsaQwot9ERsxr%2BpoF1bdla6fwkoOZUtvV%2FOFlUfVRbvfk91Js5AJtkJ%2FxP6SdBSsUD7WEWBAKRhfa09DJeT9bG583u1sNlcQo7FtaO6ye5KWVhvF2bI5SYzSJOcotX6KhTUgv6PRBVue7q9PZPXVOh5QzbgJCESYF1UXbT%2BNd23P7EZ1ENRaccRvqZNVBkylO%2BYrNGmh1JY45G%2FdaokahxZlwPOPQAGPXR8Gym8bYu60dXHImR8mVTAZBqemScw1PAmujiKJgij%2FTJCUmExvYAPh6cSTeFb88amVlLJ%2Br5kef1eMPzGUN5Kowy46NwQY6pgHLtsJimQq7DW4kZ6uZgX71OGLOcXLzQX9Su6MThSCnVQbcXOcxZM%2FzjzT42QSgznjZcVsM%2FGIIN4BoVkm45xP%2FkDuYrkJZhundiZLFTTVpbZ2Q9LJ3tOehGgzBQGfXPJ068DbAlFrefrYbhkFBTqNieNOg4ued1GLZHNm1YKS9Fgu9j49qgageDbRqMX1o6M1IpGWdYH0S89rrjT6LuFOwc%2FD6hLPt&X-Amz-Signature=8cd368b05cb15bc8122dc6a0aab1e01197953194fe0693d198f8b7f7cfa7f770&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF5QR67S%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAj31B5mAXLJSlCcJ%2B4WnQqyS%2FgzT0iHMIXcgwUfh5ghAiBjIlc7AwwJyB9q%2FXvkTULZs0mX8kUAZJ3DsnBocSj9ZyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlH5tMeYU8Ba6QqrfKtwDmCnjCN8d49cWDXD1u5EYnSIseOIFOMhfTJXuVWh5ohMMUafBdTFUCk0CG8yhSsW2p4xVBIWGV9v3S9Dqo4jj3FVU%2Bdw5TiNjDDKk5YamvDO%2FoYQQYZRYlIH8Ruubvi%2Bj%2BmHageyNS9msqRHrgRI0fOT4mgFM7MPirIWMHgVxQU5VU8F0vexzBh94u5gW2A4nWV8XySVIAuX3nxIcCHjFTOW6t4Eg7Y7MspC5OU6MZbe8RuXG4uDIESIorTkJWLbWpZ5MgYrNbPGsPSmjPTgGOkk%2FOd6vieqv2qYnulIOny3v94RUbkkMit%2BnPgVGoXHLHw6wsaQwot9ERsxr%2BpoF1bdla6fwkoOZUtvV%2FOFlUfVRbvfk91Js5AJtkJ%2FxP6SdBSsUD7WEWBAKRhfa09DJeT9bG583u1sNlcQo7FtaO6ye5KWVhvF2bI5SYzSJOcotX6KhTUgv6PRBVue7q9PZPXVOh5QzbgJCESYF1UXbT%2BNd23P7EZ1ENRaccRvqZNVBkylO%2BYrNGmh1JY45G%2FdaokahxZlwPOPQAGPXR8Gym8bYu60dXHImR8mVTAZBqemScw1PAmujiKJgij%2FTJCUmExvYAPh6cSTeFb88amVlLJ%2Br5kef1eMPzGUN5Kowy46NwQY6pgHLtsJimQq7DW4kZ6uZgX71OGLOcXLzQX9Su6MThSCnVQbcXOcxZM%2FzjzT42QSgznjZcVsM%2FGIIN4BoVkm45xP%2FkDuYrkJZhundiZLFTTVpbZ2Q9LJ3tOehGgzBQGfXPJ068DbAlFrefrYbhkFBTqNieNOg4ued1GLZHNm1YKS9Fgu9j49qgageDbRqMX1o6M1IpGWdYH0S89rrjT6LuFOwc%2FD6hLPt&X-Amz-Signature=596958c5eeb5764b910a5932212f6e6931f295137703c30ac23f2ec6148606d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF5QR67S%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAj31B5mAXLJSlCcJ%2B4WnQqyS%2FgzT0iHMIXcgwUfh5ghAiBjIlc7AwwJyB9q%2FXvkTULZs0mX8kUAZJ3DsnBocSj9ZyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlH5tMeYU8Ba6QqrfKtwDmCnjCN8d49cWDXD1u5EYnSIseOIFOMhfTJXuVWh5ohMMUafBdTFUCk0CG8yhSsW2p4xVBIWGV9v3S9Dqo4jj3FVU%2Bdw5TiNjDDKk5YamvDO%2FoYQQYZRYlIH8Ruubvi%2Bj%2BmHageyNS9msqRHrgRI0fOT4mgFM7MPirIWMHgVxQU5VU8F0vexzBh94u5gW2A4nWV8XySVIAuX3nxIcCHjFTOW6t4Eg7Y7MspC5OU6MZbe8RuXG4uDIESIorTkJWLbWpZ5MgYrNbPGsPSmjPTgGOkk%2FOd6vieqv2qYnulIOny3v94RUbkkMit%2BnPgVGoXHLHw6wsaQwot9ERsxr%2BpoF1bdla6fwkoOZUtvV%2FOFlUfVRbvfk91Js5AJtkJ%2FxP6SdBSsUD7WEWBAKRhfa09DJeT9bG583u1sNlcQo7FtaO6ye5KWVhvF2bI5SYzSJOcotX6KhTUgv6PRBVue7q9PZPXVOh5QzbgJCESYF1UXbT%2BNd23P7EZ1ENRaccRvqZNVBkylO%2BYrNGmh1JY45G%2FdaokahxZlwPOPQAGPXR8Gym8bYu60dXHImR8mVTAZBqemScw1PAmujiKJgij%2FTJCUmExvYAPh6cSTeFb88amVlLJ%2Br5kef1eMPzGUN5Kowy46NwQY6pgHLtsJimQq7DW4kZ6uZgX71OGLOcXLzQX9Su6MThSCnVQbcXOcxZM%2FzjzT42QSgznjZcVsM%2FGIIN4BoVkm45xP%2FkDuYrkJZhundiZLFTTVpbZ2Q9LJ3tOehGgzBQGfXPJ068DbAlFrefrYbhkFBTqNieNOg4ued1GLZHNm1YKS9Fgu9j49qgageDbRqMX1o6M1IpGWdYH0S89rrjT6LuFOwc%2FD6hLPt&X-Amz-Signature=557e58e91adf7a7627f4a87c096150912958ac3f8d2f7124beb8e2ea231de810&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF5QR67S%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAj31B5mAXLJSlCcJ%2B4WnQqyS%2FgzT0iHMIXcgwUfh5ghAiBjIlc7AwwJyB9q%2FXvkTULZs0mX8kUAZJ3DsnBocSj9ZyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlH5tMeYU8Ba6QqrfKtwDmCnjCN8d49cWDXD1u5EYnSIseOIFOMhfTJXuVWh5ohMMUafBdTFUCk0CG8yhSsW2p4xVBIWGV9v3S9Dqo4jj3FVU%2Bdw5TiNjDDKk5YamvDO%2FoYQQYZRYlIH8Ruubvi%2Bj%2BmHageyNS9msqRHrgRI0fOT4mgFM7MPirIWMHgVxQU5VU8F0vexzBh94u5gW2A4nWV8XySVIAuX3nxIcCHjFTOW6t4Eg7Y7MspC5OU6MZbe8RuXG4uDIESIorTkJWLbWpZ5MgYrNbPGsPSmjPTgGOkk%2FOd6vieqv2qYnulIOny3v94RUbkkMit%2BnPgVGoXHLHw6wsaQwot9ERsxr%2BpoF1bdla6fwkoOZUtvV%2FOFlUfVRbvfk91Js5AJtkJ%2FxP6SdBSsUD7WEWBAKRhfa09DJeT9bG583u1sNlcQo7FtaO6ye5KWVhvF2bI5SYzSJOcotX6KhTUgv6PRBVue7q9PZPXVOh5QzbgJCESYF1UXbT%2BNd23P7EZ1ENRaccRvqZNVBkylO%2BYrNGmh1JY45G%2FdaokahxZlwPOPQAGPXR8Gym8bYu60dXHImR8mVTAZBqemScw1PAmujiKJgij%2FTJCUmExvYAPh6cSTeFb88amVlLJ%2Br5kef1eMPzGUN5Kowy46NwQY6pgHLtsJimQq7DW4kZ6uZgX71OGLOcXLzQX9Su6MThSCnVQbcXOcxZM%2FzjzT42QSgznjZcVsM%2FGIIN4BoVkm45xP%2FkDuYrkJZhundiZLFTTVpbZ2Q9LJ3tOehGgzBQGfXPJ068DbAlFrefrYbhkFBTqNieNOg4ued1GLZHNm1YKS9Fgu9j49qgageDbRqMX1o6M1IpGWdYH0S89rrjT6LuFOwc%2FD6hLPt&X-Amz-Signature=53c8609acc963b9c7631a6806f6234e384d5e19321e4fabdba1c715c6095a821&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF5QR67S%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJGMEQCIAj31B5mAXLJSlCcJ%2B4WnQqyS%2FgzT0iHMIXcgwUfh5ghAiBjIlc7AwwJyB9q%2FXvkTULZs0mX8kUAZJ3DsnBocSj9ZyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlH5tMeYU8Ba6QqrfKtwDmCnjCN8d49cWDXD1u5EYnSIseOIFOMhfTJXuVWh5ohMMUafBdTFUCk0CG8yhSsW2p4xVBIWGV9v3S9Dqo4jj3FVU%2Bdw5TiNjDDKk5YamvDO%2FoYQQYZRYlIH8Ruubvi%2Bj%2BmHageyNS9msqRHrgRI0fOT4mgFM7MPirIWMHgVxQU5VU8F0vexzBh94u5gW2A4nWV8XySVIAuX3nxIcCHjFTOW6t4Eg7Y7MspC5OU6MZbe8RuXG4uDIESIorTkJWLbWpZ5MgYrNbPGsPSmjPTgGOkk%2FOd6vieqv2qYnulIOny3v94RUbkkMit%2BnPgVGoXHLHw6wsaQwot9ERsxr%2BpoF1bdla6fwkoOZUtvV%2FOFlUfVRbvfk91Js5AJtkJ%2FxP6SdBSsUD7WEWBAKRhfa09DJeT9bG583u1sNlcQo7FtaO6ye5KWVhvF2bI5SYzSJOcotX6KhTUgv6PRBVue7q9PZPXVOh5QzbgJCESYF1UXbT%2BNd23P7EZ1ENRaccRvqZNVBkylO%2BYrNGmh1JY45G%2FdaokahxZlwPOPQAGPXR8Gym8bYu60dXHImR8mVTAZBqemScw1PAmujiKJgij%2FTJCUmExvYAPh6cSTeFb88amVlLJ%2Br5kef1eMPzGUN5Kowy46NwQY6pgHLtsJimQq7DW4kZ6uZgX71OGLOcXLzQX9Su6MThSCnVQbcXOcxZM%2FzjzT42QSgznjZcVsM%2FGIIN4BoVkm45xP%2FkDuYrkJZhundiZLFTTVpbZ2Q9LJ3tOehGgzBQGfXPJ068DbAlFrefrYbhkFBTqNieNOg4ued1GLZHNm1YKS9Fgu9j49qgageDbRqMX1o6M1IpGWdYH0S89rrjT6LuFOwc%2FD6hLPt&X-Amz-Signature=2fe6d755708979fd7de448c66143e3538856cf7b5e05056e3df019b307afdc9d&X-Amz-SignedHeaders=host&x-id=GetObject)
