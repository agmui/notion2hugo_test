---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA3LPAOH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIG82WCbKS92H1g5OmT6vRp5MZPD9upkr0g8sRG%2F0skq%2FAiAX2Rlf2kIUU4XN97SBdYJr6DlzwBMgSs744u%2FFBehNJir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMQtxVttwkxfO%2FP93rKtwDmb8MpcGYP%2BHe7senCZH%2BEqwOA%2B8PWk6hUCGBpeeTBP6m8Cp6CEQaS62zbuCQegW3LjvNfjsYcCO%2FvJwhPRSp6pT0u%2BGbZxzGtfkOXYCn0Le8fiHnHDLYT9RMXsjPXJZPQ5buXj6oV0xslRENSVFg0mlvy4bc1AMkUu1409shYsU97F%2FgG7LJK4tajSXOmhVZWFVyt5iVgw03Dsg7bjD6crhx%2B1uwTBqtEbyzrpdIChdwYiY6j2VjbG%2FpMOkIHywLPPPLsi3l3%2BWT2Je40i2Jg5T8YnR5pyUFm9W7TfdVbIJEWCzlW%2B2MVmeyOIXJYj2q%2F%2F3wLQ28NbfZWk6i4honqPbTkl2hcpJAebtiztzXgqTiF%2BAKPDmOe4u7GmK3UsT8wNhuZjm5Mh29MsdcbbkLh0COeAoxZzpWlGf%2B3WXm9myL6aN76A9%2BkGNbSxoKbqj4%2FA0M6F%2FkOdF4aYmaJaja9o8JW6d%2BbHPX6PTc3Xc230BBsgLSsVGz7dZJuqtQHKGkD3JjTNBODlTnb0V0GX%2FzsTmuOU76sPmomTqdHWFNjZOXlkbgG80kjAvBjsza5WALmLljAipCyF%2F5UHT4VJ%2BlM8bHhpj8fZHDq6pgZFnyBjcFDjyckDqPzZxrkCgwie6RvQY6pgFUGDsFO8zEhYpNsCyzp%2Fq1fXq%2BIsLDRO7ATrTDyuzOGGsfYwcz73zI5cwGAKLFWU0PrMhbEALAFk1VZ1lGcYXFMJGym2UToYeaZ2l5D%2Fq%2BEuf79%2BZtMwX1nK%2B8yICQaZsadT2VfL12iYtAcA9KyKjux14hA8XRK5txo2MZYWKhJ7YQDDXPjcTthjSnVsY3XwkGJEkwNXMkqCifGriJB7dmz6y258cf&X-Amz-Signature=29ce866b4bed80eccc5f9598532fede8780e42b4633657de2da4a1596901b078&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA3LPAOH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIG82WCbKS92H1g5OmT6vRp5MZPD9upkr0g8sRG%2F0skq%2FAiAX2Rlf2kIUU4XN97SBdYJr6DlzwBMgSs744u%2FFBehNJir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMQtxVttwkxfO%2FP93rKtwDmb8MpcGYP%2BHe7senCZH%2BEqwOA%2B8PWk6hUCGBpeeTBP6m8Cp6CEQaS62zbuCQegW3LjvNfjsYcCO%2FvJwhPRSp6pT0u%2BGbZxzGtfkOXYCn0Le8fiHnHDLYT9RMXsjPXJZPQ5buXj6oV0xslRENSVFg0mlvy4bc1AMkUu1409shYsU97F%2FgG7LJK4tajSXOmhVZWFVyt5iVgw03Dsg7bjD6crhx%2B1uwTBqtEbyzrpdIChdwYiY6j2VjbG%2FpMOkIHywLPPPLsi3l3%2BWT2Je40i2Jg5T8YnR5pyUFm9W7TfdVbIJEWCzlW%2B2MVmeyOIXJYj2q%2F%2F3wLQ28NbfZWk6i4honqPbTkl2hcpJAebtiztzXgqTiF%2BAKPDmOe4u7GmK3UsT8wNhuZjm5Mh29MsdcbbkLh0COeAoxZzpWlGf%2B3WXm9myL6aN76A9%2BkGNbSxoKbqj4%2FA0M6F%2FkOdF4aYmaJaja9o8JW6d%2BbHPX6PTc3Xc230BBsgLSsVGz7dZJuqtQHKGkD3JjTNBODlTnb0V0GX%2FzsTmuOU76sPmomTqdHWFNjZOXlkbgG80kjAvBjsza5WALmLljAipCyF%2F5UHT4VJ%2BlM8bHhpj8fZHDq6pgZFnyBjcFDjyckDqPzZxrkCgwie6RvQY6pgFUGDsFO8zEhYpNsCyzp%2Fq1fXq%2BIsLDRO7ATrTDyuzOGGsfYwcz73zI5cwGAKLFWU0PrMhbEALAFk1VZ1lGcYXFMJGym2UToYeaZ2l5D%2Fq%2BEuf79%2BZtMwX1nK%2B8yICQaZsadT2VfL12iYtAcA9KyKjux14hA8XRK5txo2MZYWKhJ7YQDDXPjcTthjSnVsY3XwkGJEkwNXMkqCifGriJB7dmz6y258cf&X-Amz-Signature=4b66e0e8e6950c7af87afeeb75d7d0976e731a4cbc74f4384f1ba661ecca3d94&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA3LPAOH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIG82WCbKS92H1g5OmT6vRp5MZPD9upkr0g8sRG%2F0skq%2FAiAX2Rlf2kIUU4XN97SBdYJr6DlzwBMgSs744u%2FFBehNJir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMQtxVttwkxfO%2FP93rKtwDmb8MpcGYP%2BHe7senCZH%2BEqwOA%2B8PWk6hUCGBpeeTBP6m8Cp6CEQaS62zbuCQegW3LjvNfjsYcCO%2FvJwhPRSp6pT0u%2BGbZxzGtfkOXYCn0Le8fiHnHDLYT9RMXsjPXJZPQ5buXj6oV0xslRENSVFg0mlvy4bc1AMkUu1409shYsU97F%2FgG7LJK4tajSXOmhVZWFVyt5iVgw03Dsg7bjD6crhx%2B1uwTBqtEbyzrpdIChdwYiY6j2VjbG%2FpMOkIHywLPPPLsi3l3%2BWT2Je40i2Jg5T8YnR5pyUFm9W7TfdVbIJEWCzlW%2B2MVmeyOIXJYj2q%2F%2F3wLQ28NbfZWk6i4honqPbTkl2hcpJAebtiztzXgqTiF%2BAKPDmOe4u7GmK3UsT8wNhuZjm5Mh29MsdcbbkLh0COeAoxZzpWlGf%2B3WXm9myL6aN76A9%2BkGNbSxoKbqj4%2FA0M6F%2FkOdF4aYmaJaja9o8JW6d%2BbHPX6PTc3Xc230BBsgLSsVGz7dZJuqtQHKGkD3JjTNBODlTnb0V0GX%2FzsTmuOU76sPmomTqdHWFNjZOXlkbgG80kjAvBjsza5WALmLljAipCyF%2F5UHT4VJ%2BlM8bHhpj8fZHDq6pgZFnyBjcFDjyckDqPzZxrkCgwie6RvQY6pgFUGDsFO8zEhYpNsCyzp%2Fq1fXq%2BIsLDRO7ATrTDyuzOGGsfYwcz73zI5cwGAKLFWU0PrMhbEALAFk1VZ1lGcYXFMJGym2UToYeaZ2l5D%2Fq%2BEuf79%2BZtMwX1nK%2B8yICQaZsadT2VfL12iYtAcA9KyKjux14hA8XRK5txo2MZYWKhJ7YQDDXPjcTthjSnVsY3XwkGJEkwNXMkqCifGriJB7dmz6y258cf&X-Amz-Signature=854574f128f8fb90dfe6193a64d2980d29494cc3295f2d69503c957227d0e2e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA3LPAOH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIG82WCbKS92H1g5OmT6vRp5MZPD9upkr0g8sRG%2F0skq%2FAiAX2Rlf2kIUU4XN97SBdYJr6DlzwBMgSs744u%2FFBehNJir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMQtxVttwkxfO%2FP93rKtwDmb8MpcGYP%2BHe7senCZH%2BEqwOA%2B8PWk6hUCGBpeeTBP6m8Cp6CEQaS62zbuCQegW3LjvNfjsYcCO%2FvJwhPRSp6pT0u%2BGbZxzGtfkOXYCn0Le8fiHnHDLYT9RMXsjPXJZPQ5buXj6oV0xslRENSVFg0mlvy4bc1AMkUu1409shYsU97F%2FgG7LJK4tajSXOmhVZWFVyt5iVgw03Dsg7bjD6crhx%2B1uwTBqtEbyzrpdIChdwYiY6j2VjbG%2FpMOkIHywLPPPLsi3l3%2BWT2Je40i2Jg5T8YnR5pyUFm9W7TfdVbIJEWCzlW%2B2MVmeyOIXJYj2q%2F%2F3wLQ28NbfZWk6i4honqPbTkl2hcpJAebtiztzXgqTiF%2BAKPDmOe4u7GmK3UsT8wNhuZjm5Mh29MsdcbbkLh0COeAoxZzpWlGf%2B3WXm9myL6aN76A9%2BkGNbSxoKbqj4%2FA0M6F%2FkOdF4aYmaJaja9o8JW6d%2BbHPX6PTc3Xc230BBsgLSsVGz7dZJuqtQHKGkD3JjTNBODlTnb0V0GX%2FzsTmuOU76sPmomTqdHWFNjZOXlkbgG80kjAvBjsza5WALmLljAipCyF%2F5UHT4VJ%2BlM8bHhpj8fZHDq6pgZFnyBjcFDjyckDqPzZxrkCgwie6RvQY6pgFUGDsFO8zEhYpNsCyzp%2Fq1fXq%2BIsLDRO7ATrTDyuzOGGsfYwcz73zI5cwGAKLFWU0PrMhbEALAFk1VZ1lGcYXFMJGym2UToYeaZ2l5D%2Fq%2BEuf79%2BZtMwX1nK%2B8yICQaZsadT2VfL12iYtAcA9KyKjux14hA8XRK5txo2MZYWKhJ7YQDDXPjcTthjSnVsY3XwkGJEkwNXMkqCifGriJB7dmz6y258cf&X-Amz-Signature=332510ceadd0870fdcb279a04997dcad883b28d1bfcad204445ea09696fbf66a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA3LPAOH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIG82WCbKS92H1g5OmT6vRp5MZPD9upkr0g8sRG%2F0skq%2FAiAX2Rlf2kIUU4XN97SBdYJr6DlzwBMgSs744u%2FFBehNJir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMQtxVttwkxfO%2FP93rKtwDmb8MpcGYP%2BHe7senCZH%2BEqwOA%2B8PWk6hUCGBpeeTBP6m8Cp6CEQaS62zbuCQegW3LjvNfjsYcCO%2FvJwhPRSp6pT0u%2BGbZxzGtfkOXYCn0Le8fiHnHDLYT9RMXsjPXJZPQ5buXj6oV0xslRENSVFg0mlvy4bc1AMkUu1409shYsU97F%2FgG7LJK4tajSXOmhVZWFVyt5iVgw03Dsg7bjD6crhx%2B1uwTBqtEbyzrpdIChdwYiY6j2VjbG%2FpMOkIHywLPPPLsi3l3%2BWT2Je40i2Jg5T8YnR5pyUFm9W7TfdVbIJEWCzlW%2B2MVmeyOIXJYj2q%2F%2F3wLQ28NbfZWk6i4honqPbTkl2hcpJAebtiztzXgqTiF%2BAKPDmOe4u7GmK3UsT8wNhuZjm5Mh29MsdcbbkLh0COeAoxZzpWlGf%2B3WXm9myL6aN76A9%2BkGNbSxoKbqj4%2FA0M6F%2FkOdF4aYmaJaja9o8JW6d%2BbHPX6PTc3Xc230BBsgLSsVGz7dZJuqtQHKGkD3JjTNBODlTnb0V0GX%2FzsTmuOU76sPmomTqdHWFNjZOXlkbgG80kjAvBjsza5WALmLljAipCyF%2F5UHT4VJ%2BlM8bHhpj8fZHDq6pgZFnyBjcFDjyckDqPzZxrkCgwie6RvQY6pgFUGDsFO8zEhYpNsCyzp%2Fq1fXq%2BIsLDRO7ATrTDyuzOGGsfYwcz73zI5cwGAKLFWU0PrMhbEALAFk1VZ1lGcYXFMJGym2UToYeaZ2l5D%2Fq%2BEuf79%2BZtMwX1nK%2B8yICQaZsadT2VfL12iYtAcA9KyKjux14hA8XRK5txo2MZYWKhJ7YQDDXPjcTthjSnVsY3XwkGJEkwNXMkqCifGriJB7dmz6y258cf&X-Amz-Signature=869bf25cf43d7c5292d3164d7098c77773c7f9c9f75364ddc83570eff5fa6fbb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA3LPAOH%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIG82WCbKS92H1g5OmT6vRp5MZPD9upkr0g8sRG%2F0skq%2FAiAX2Rlf2kIUU4XN97SBdYJr6DlzwBMgSs744u%2FFBehNJir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMQtxVttwkxfO%2FP93rKtwDmb8MpcGYP%2BHe7senCZH%2BEqwOA%2B8PWk6hUCGBpeeTBP6m8Cp6CEQaS62zbuCQegW3LjvNfjsYcCO%2FvJwhPRSp6pT0u%2BGbZxzGtfkOXYCn0Le8fiHnHDLYT9RMXsjPXJZPQ5buXj6oV0xslRENSVFg0mlvy4bc1AMkUu1409shYsU97F%2FgG7LJK4tajSXOmhVZWFVyt5iVgw03Dsg7bjD6crhx%2B1uwTBqtEbyzrpdIChdwYiY6j2VjbG%2FpMOkIHywLPPPLsi3l3%2BWT2Je40i2Jg5T8YnR5pyUFm9W7TfdVbIJEWCzlW%2B2MVmeyOIXJYj2q%2F%2F3wLQ28NbfZWk6i4honqPbTkl2hcpJAebtiztzXgqTiF%2BAKPDmOe4u7GmK3UsT8wNhuZjm5Mh29MsdcbbkLh0COeAoxZzpWlGf%2B3WXm9myL6aN76A9%2BkGNbSxoKbqj4%2FA0M6F%2FkOdF4aYmaJaja9o8JW6d%2BbHPX6PTc3Xc230BBsgLSsVGz7dZJuqtQHKGkD3JjTNBODlTnb0V0GX%2FzsTmuOU76sPmomTqdHWFNjZOXlkbgG80kjAvBjsza5WALmLljAipCyF%2F5UHT4VJ%2BlM8bHhpj8fZHDq6pgZFnyBjcFDjyckDqPzZxrkCgwie6RvQY6pgFUGDsFO8zEhYpNsCyzp%2Fq1fXq%2BIsLDRO7ATrTDyuzOGGsfYwcz73zI5cwGAKLFWU0PrMhbEALAFk1VZ1lGcYXFMJGym2UToYeaZ2l5D%2Fq%2BEuf79%2BZtMwX1nK%2B8yICQaZsadT2VfL12iYtAcA9KyKjux14hA8XRK5txo2MZYWKhJ7YQDDXPjcTthjSnVsY3XwkGJEkwNXMkqCifGriJB7dmz6y258cf&X-Amz-Signature=6ccc01aa13c567dff48d3d1ba0ad593858b01fe27f4e512451415c41b3982d7d&X-Amz-SignedHeaders=host&x-id=GetObject)
