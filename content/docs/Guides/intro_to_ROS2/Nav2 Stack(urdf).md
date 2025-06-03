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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3ADJHP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIEQUwOK5LuNWl1DriHsjjujceXVzEJ24pm%2BccGf87RJ1AiEAtqu5Lhr1nMvyAZzBSnj1L0Nf56%2F652HIr0f0BFMNEzEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHC%2BrY7nOG30bNrkyrcAwJFb8egfsjskClREGPdUpQuf3GpJems8rvWa2f0m%2F0QiNnPTKdnOvDK%2FQ%2BNaDsKXUhcQi%2FHw5Znnfr%2Bx4KiUc%2BXOaQBSjLnKQZSP1s1K%2F0CleegZiB6O0nM0xWTWJGKrNHSbQGKcpYi3USCjk5fSeJpXSdiamO6hOxpG1bMClJhvqPsl%2Bo3EQpOfOGpBLrno6wWtX2CvFtfNr4T34lli3vTGnVd70YROL6PuKnyGflUVGM%2FsK0Q%2FQnfYZPzvwhGXrBCFjTAZubNmt6si5VzSB5W8T%2BOZC2gIaZxLzYJQxRS7QDWcfuqRsLoNeGEb%2FZWe4fIeHfhcMegJECvGFFwJUQ6iX4BkSZUuaqvveJJjHi%2BAppLwOGPZ7KjzfnXlybVOtqC7yuGuQGBh3I1VDl4vAl64kV2gVwV7LA%2BUOJTtCIguhhH3xLs59VySEHkW9Jt%2BtYd8GwrOqGDZBdeXxH0r7Rb4xm4E7y994s68gqeBdvSRrJg7abmGgkLz3AXdPRkQ%2Be9TcFslWL1tfYgYzUzSyppSunLzmRS%2BzjSNl4HULB1WvLc7YCbf2dG7%2FEesONEmm6CXAeliAv7q8hAnFPaJDHoKcl1rBkCk8su51knByralWqIN7t7YM%2Bwm5yyMNbz%2BMEGOqUB1Ji2FcIwFiLdA9lwoPHQHwzln2KG%2BOu4YuoDfcqEQhSDXNwbL36J5jyxgXH%2BWPPdeqa1lkAt3YpklqK3HmhazPnRJ63bGL3L29R5ZLCSx9e%2BpfVjkr%2BzpENd9rhwr3uu5eTQOPikX%2FOErNYaIpRBb6WkQJ%2F4gmmMe%2Fijf%2BqREUI%2BnsDA0sKsecB67HdL1HSrXBOtN%2BNmGRaqrPRo20GqKSvA0jzX&X-Amz-Signature=316ed45db6bea1da35d16e453b7da1c57be6c1fd9559b2ed73cf76cded5595b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3ADJHP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIEQUwOK5LuNWl1DriHsjjujceXVzEJ24pm%2BccGf87RJ1AiEAtqu5Lhr1nMvyAZzBSnj1L0Nf56%2F652HIr0f0BFMNEzEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHC%2BrY7nOG30bNrkyrcAwJFb8egfsjskClREGPdUpQuf3GpJems8rvWa2f0m%2F0QiNnPTKdnOvDK%2FQ%2BNaDsKXUhcQi%2FHw5Znnfr%2Bx4KiUc%2BXOaQBSjLnKQZSP1s1K%2F0CleegZiB6O0nM0xWTWJGKrNHSbQGKcpYi3USCjk5fSeJpXSdiamO6hOxpG1bMClJhvqPsl%2Bo3EQpOfOGpBLrno6wWtX2CvFtfNr4T34lli3vTGnVd70YROL6PuKnyGflUVGM%2FsK0Q%2FQnfYZPzvwhGXrBCFjTAZubNmt6si5VzSB5W8T%2BOZC2gIaZxLzYJQxRS7QDWcfuqRsLoNeGEb%2FZWe4fIeHfhcMegJECvGFFwJUQ6iX4BkSZUuaqvveJJjHi%2BAppLwOGPZ7KjzfnXlybVOtqC7yuGuQGBh3I1VDl4vAl64kV2gVwV7LA%2BUOJTtCIguhhH3xLs59VySEHkW9Jt%2BtYd8GwrOqGDZBdeXxH0r7Rb4xm4E7y994s68gqeBdvSRrJg7abmGgkLz3AXdPRkQ%2Be9TcFslWL1tfYgYzUzSyppSunLzmRS%2BzjSNl4HULB1WvLc7YCbf2dG7%2FEesONEmm6CXAeliAv7q8hAnFPaJDHoKcl1rBkCk8su51knByralWqIN7t7YM%2Bwm5yyMNbz%2BMEGOqUB1Ji2FcIwFiLdA9lwoPHQHwzln2KG%2BOu4YuoDfcqEQhSDXNwbL36J5jyxgXH%2BWPPdeqa1lkAt3YpklqK3HmhazPnRJ63bGL3L29R5ZLCSx9e%2BpfVjkr%2BzpENd9rhwr3uu5eTQOPikX%2FOErNYaIpRBb6WkQJ%2F4gmmMe%2Fijf%2BqREUI%2BnsDA0sKsecB67HdL1HSrXBOtN%2BNmGRaqrPRo20GqKSvA0jzX&X-Amz-Signature=ec49ed42efb4499c971a5400cd1f7957910772766f3b3530f30b5eaf2bb43a83&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3ADJHP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIEQUwOK5LuNWl1DriHsjjujceXVzEJ24pm%2BccGf87RJ1AiEAtqu5Lhr1nMvyAZzBSnj1L0Nf56%2F652HIr0f0BFMNEzEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHC%2BrY7nOG30bNrkyrcAwJFb8egfsjskClREGPdUpQuf3GpJems8rvWa2f0m%2F0QiNnPTKdnOvDK%2FQ%2BNaDsKXUhcQi%2FHw5Znnfr%2Bx4KiUc%2BXOaQBSjLnKQZSP1s1K%2F0CleegZiB6O0nM0xWTWJGKrNHSbQGKcpYi3USCjk5fSeJpXSdiamO6hOxpG1bMClJhvqPsl%2Bo3EQpOfOGpBLrno6wWtX2CvFtfNr4T34lli3vTGnVd70YROL6PuKnyGflUVGM%2FsK0Q%2FQnfYZPzvwhGXrBCFjTAZubNmt6si5VzSB5W8T%2BOZC2gIaZxLzYJQxRS7QDWcfuqRsLoNeGEb%2FZWe4fIeHfhcMegJECvGFFwJUQ6iX4BkSZUuaqvveJJjHi%2BAppLwOGPZ7KjzfnXlybVOtqC7yuGuQGBh3I1VDl4vAl64kV2gVwV7LA%2BUOJTtCIguhhH3xLs59VySEHkW9Jt%2BtYd8GwrOqGDZBdeXxH0r7Rb4xm4E7y994s68gqeBdvSRrJg7abmGgkLz3AXdPRkQ%2Be9TcFslWL1tfYgYzUzSyppSunLzmRS%2BzjSNl4HULB1WvLc7YCbf2dG7%2FEesONEmm6CXAeliAv7q8hAnFPaJDHoKcl1rBkCk8su51knByralWqIN7t7YM%2Bwm5yyMNbz%2BMEGOqUB1Ji2FcIwFiLdA9lwoPHQHwzln2KG%2BOu4YuoDfcqEQhSDXNwbL36J5jyxgXH%2BWPPdeqa1lkAt3YpklqK3HmhazPnRJ63bGL3L29R5ZLCSx9e%2BpfVjkr%2BzpENd9rhwr3uu5eTQOPikX%2FOErNYaIpRBb6WkQJ%2F4gmmMe%2Fijf%2BqREUI%2BnsDA0sKsecB67HdL1HSrXBOtN%2BNmGRaqrPRo20GqKSvA0jzX&X-Amz-Signature=20de01fc8599ba4a3f60dbafb60dd36261bff35a07fa82f63fbb6a4122a4ec94&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3ADJHP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIEQUwOK5LuNWl1DriHsjjujceXVzEJ24pm%2BccGf87RJ1AiEAtqu5Lhr1nMvyAZzBSnj1L0Nf56%2F652HIr0f0BFMNEzEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHC%2BrY7nOG30bNrkyrcAwJFb8egfsjskClREGPdUpQuf3GpJems8rvWa2f0m%2F0QiNnPTKdnOvDK%2FQ%2BNaDsKXUhcQi%2FHw5Znnfr%2Bx4KiUc%2BXOaQBSjLnKQZSP1s1K%2F0CleegZiB6O0nM0xWTWJGKrNHSbQGKcpYi3USCjk5fSeJpXSdiamO6hOxpG1bMClJhvqPsl%2Bo3EQpOfOGpBLrno6wWtX2CvFtfNr4T34lli3vTGnVd70YROL6PuKnyGflUVGM%2FsK0Q%2FQnfYZPzvwhGXrBCFjTAZubNmt6si5VzSB5W8T%2BOZC2gIaZxLzYJQxRS7QDWcfuqRsLoNeGEb%2FZWe4fIeHfhcMegJECvGFFwJUQ6iX4BkSZUuaqvveJJjHi%2BAppLwOGPZ7KjzfnXlybVOtqC7yuGuQGBh3I1VDl4vAl64kV2gVwV7LA%2BUOJTtCIguhhH3xLs59VySEHkW9Jt%2BtYd8GwrOqGDZBdeXxH0r7Rb4xm4E7y994s68gqeBdvSRrJg7abmGgkLz3AXdPRkQ%2Be9TcFslWL1tfYgYzUzSyppSunLzmRS%2BzjSNl4HULB1WvLc7YCbf2dG7%2FEesONEmm6CXAeliAv7q8hAnFPaJDHoKcl1rBkCk8su51knByralWqIN7t7YM%2Bwm5yyMNbz%2BMEGOqUB1Ji2FcIwFiLdA9lwoPHQHwzln2KG%2BOu4YuoDfcqEQhSDXNwbL36J5jyxgXH%2BWPPdeqa1lkAt3YpklqK3HmhazPnRJ63bGL3L29R5ZLCSx9e%2BpfVjkr%2BzpENd9rhwr3uu5eTQOPikX%2FOErNYaIpRBb6WkQJ%2F4gmmMe%2Fijf%2BqREUI%2BnsDA0sKsecB67HdL1HSrXBOtN%2BNmGRaqrPRo20GqKSvA0jzX&X-Amz-Signature=f2c65dbf15b8dbf3b05d03c9ca6022c4fe7220b57a70974c3a9a75c0d5b62a7a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3ADJHP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIEQUwOK5LuNWl1DriHsjjujceXVzEJ24pm%2BccGf87RJ1AiEAtqu5Lhr1nMvyAZzBSnj1L0Nf56%2F652HIr0f0BFMNEzEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHC%2BrY7nOG30bNrkyrcAwJFb8egfsjskClREGPdUpQuf3GpJems8rvWa2f0m%2F0QiNnPTKdnOvDK%2FQ%2BNaDsKXUhcQi%2FHw5Znnfr%2Bx4KiUc%2BXOaQBSjLnKQZSP1s1K%2F0CleegZiB6O0nM0xWTWJGKrNHSbQGKcpYi3USCjk5fSeJpXSdiamO6hOxpG1bMClJhvqPsl%2Bo3EQpOfOGpBLrno6wWtX2CvFtfNr4T34lli3vTGnVd70YROL6PuKnyGflUVGM%2FsK0Q%2FQnfYZPzvwhGXrBCFjTAZubNmt6si5VzSB5W8T%2BOZC2gIaZxLzYJQxRS7QDWcfuqRsLoNeGEb%2FZWe4fIeHfhcMegJECvGFFwJUQ6iX4BkSZUuaqvveJJjHi%2BAppLwOGPZ7KjzfnXlybVOtqC7yuGuQGBh3I1VDl4vAl64kV2gVwV7LA%2BUOJTtCIguhhH3xLs59VySEHkW9Jt%2BtYd8GwrOqGDZBdeXxH0r7Rb4xm4E7y994s68gqeBdvSRrJg7abmGgkLz3AXdPRkQ%2Be9TcFslWL1tfYgYzUzSyppSunLzmRS%2BzjSNl4HULB1WvLc7YCbf2dG7%2FEesONEmm6CXAeliAv7q8hAnFPaJDHoKcl1rBkCk8su51knByralWqIN7t7YM%2Bwm5yyMNbz%2BMEGOqUB1Ji2FcIwFiLdA9lwoPHQHwzln2KG%2BOu4YuoDfcqEQhSDXNwbL36J5jyxgXH%2BWPPdeqa1lkAt3YpklqK3HmhazPnRJ63bGL3L29R5ZLCSx9e%2BpfVjkr%2BzpENd9rhwr3uu5eTQOPikX%2FOErNYaIpRBb6WkQJ%2F4gmmMe%2Fijf%2BqREUI%2BnsDA0sKsecB67HdL1HSrXBOtN%2BNmGRaqrPRo20GqKSvA0jzX&X-Amz-Signature=fcfc7a05240b006da0826462adf8042631059df9ab902be1519ad8f34b788205&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663I3ADJHP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIEQUwOK5LuNWl1DriHsjjujceXVzEJ24pm%2BccGf87RJ1AiEAtqu5Lhr1nMvyAZzBSnj1L0Nf56%2F652HIr0f0BFMNEzEqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHC%2BrY7nOG30bNrkyrcAwJFb8egfsjskClREGPdUpQuf3GpJems8rvWa2f0m%2F0QiNnPTKdnOvDK%2FQ%2BNaDsKXUhcQi%2FHw5Znnfr%2Bx4KiUc%2BXOaQBSjLnKQZSP1s1K%2F0CleegZiB6O0nM0xWTWJGKrNHSbQGKcpYi3USCjk5fSeJpXSdiamO6hOxpG1bMClJhvqPsl%2Bo3EQpOfOGpBLrno6wWtX2CvFtfNr4T34lli3vTGnVd70YROL6PuKnyGflUVGM%2FsK0Q%2FQnfYZPzvwhGXrBCFjTAZubNmt6si5VzSB5W8T%2BOZC2gIaZxLzYJQxRS7QDWcfuqRsLoNeGEb%2FZWe4fIeHfhcMegJECvGFFwJUQ6iX4BkSZUuaqvveJJjHi%2BAppLwOGPZ7KjzfnXlybVOtqC7yuGuQGBh3I1VDl4vAl64kV2gVwV7LA%2BUOJTtCIguhhH3xLs59VySEHkW9Jt%2BtYd8GwrOqGDZBdeXxH0r7Rb4xm4E7y994s68gqeBdvSRrJg7abmGgkLz3AXdPRkQ%2Be9TcFslWL1tfYgYzUzSyppSunLzmRS%2BzjSNl4HULB1WvLc7YCbf2dG7%2FEesONEmm6CXAeliAv7q8hAnFPaJDHoKcl1rBkCk8su51knByralWqIN7t7YM%2Bwm5yyMNbz%2BMEGOqUB1Ji2FcIwFiLdA9lwoPHQHwzln2KG%2BOu4YuoDfcqEQhSDXNwbL36J5jyxgXH%2BWPPdeqa1lkAt3YpklqK3HmhazPnRJ63bGL3L29R5ZLCSx9e%2BpfVjkr%2BzpENd9rhwr3uu5eTQOPikX%2FOErNYaIpRBb6WkQJ%2F4gmmMe%2Fijf%2BqREUI%2BnsDA0sKsecB67HdL1HSrXBOtN%2BNmGRaqrPRo20GqKSvA0jzX&X-Amz-Signature=13b65add42d3b998a5b9a89635f30ea2cfc5def6e39e2135540c93b31fc163d6&X-Amz-SignedHeaders=host&x-id=GetObject)
