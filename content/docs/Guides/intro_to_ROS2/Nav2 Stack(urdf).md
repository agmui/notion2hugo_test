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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VS7CBAV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLCTsF5itQmdx0BZalJE1ufbYZOXyqwH5SZy6STQOf0AiEAiL3tp%2Bvdjs2W4XPdvaVOrxXpQFVE5aPbaEYX%2FexULlwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYgQF3tyYfw58Z4wircA%2Fn%2BxHUhKUrgrYbIZEs%2FI2SRL2SrwvcL12Zl1TE5ls1hfJJww9D17X7MlWHUcIos0SFgmaC6S9VfBn8d8P4b830g3hn4%2FFGECDYwgeZGtO734LPcTfeiys9NT9ionm9xYeLbGgeP0m1agAzA6FFWqBwln3ASmYkBrwcFhFofHU0SoyR3ksK8bNyXsgC3mLQBLx92LICsU9xRKeAjP2fgLC7Z404%2B%2B1vFdhSY8TL%2BW1d08rBWbWy%2BzZvP9DvhpdmfcrHXMRSrXsndKrA4cgtI%2FuTjPDUeFqk5UGo52RegytKW%2Bbz%2FiF6FsKg53xNeHuSQw05MdN7lI4Nu2V6ZZOH8Slwx9VWqrhvzn9MeDRomxuipD6q6uqEf7RVRs1C57Qg0pvpzQcmtGHhUFkV%2FzybtOjG5pkb%2B5aOYo2BirmVpmlbTdNwMxa124AOUPk%2BAiHskXAkligYMI%2FlTA01HYMvWgOIsczzlZVLSr1zplPmDiS6qDULCmffV5iZzsaz%2BSt0pi7qGXcCEbQK6L6EzZH%2BRGRqAcB9zKH7hK8gdjPNL1Oj%2BQ1mFMV7VH1gvo13MAws3XceMKAQd%2BVDS62wlP0oUA%2BBKChB2hSuabkM6HpiLv%2BVTVHDEife0IANAKOqjMLCDxsMGOqUB9W%2BTYT0wqBwCC1ese0MAP0k5c%2BmxLAdo4oJpkyJDCPnb4SUZQvZ5Ujfep7ovhYcZV1nfno6X0MKru6fj2Eeir3MrSduWzAt5VHMoGAJtZx6ejrs49B0oZFvlQgW2Q9iKcgXTXk%2B2d0HrV5OdKruy4pP9D4U2Ol90BatNmv3BhJ1LvJsL%2BMjLWwx4XURU0MWKto0HXjJdlFmpd%2Fwfam6hf8tjuCUB&X-Amz-Signature=4056a724f46953ef7a851fd428fc2885a8a4f242c1878f7e60334a1a9c1fb76c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VS7CBAV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLCTsF5itQmdx0BZalJE1ufbYZOXyqwH5SZy6STQOf0AiEAiL3tp%2Bvdjs2W4XPdvaVOrxXpQFVE5aPbaEYX%2FexULlwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYgQF3tyYfw58Z4wircA%2Fn%2BxHUhKUrgrYbIZEs%2FI2SRL2SrwvcL12Zl1TE5ls1hfJJww9D17X7MlWHUcIos0SFgmaC6S9VfBn8d8P4b830g3hn4%2FFGECDYwgeZGtO734LPcTfeiys9NT9ionm9xYeLbGgeP0m1agAzA6FFWqBwln3ASmYkBrwcFhFofHU0SoyR3ksK8bNyXsgC3mLQBLx92LICsU9xRKeAjP2fgLC7Z404%2B%2B1vFdhSY8TL%2BW1d08rBWbWy%2BzZvP9DvhpdmfcrHXMRSrXsndKrA4cgtI%2FuTjPDUeFqk5UGo52RegytKW%2Bbz%2FiF6FsKg53xNeHuSQw05MdN7lI4Nu2V6ZZOH8Slwx9VWqrhvzn9MeDRomxuipD6q6uqEf7RVRs1C57Qg0pvpzQcmtGHhUFkV%2FzybtOjG5pkb%2B5aOYo2BirmVpmlbTdNwMxa124AOUPk%2BAiHskXAkligYMI%2FlTA01HYMvWgOIsczzlZVLSr1zplPmDiS6qDULCmffV5iZzsaz%2BSt0pi7qGXcCEbQK6L6EzZH%2BRGRqAcB9zKH7hK8gdjPNL1Oj%2BQ1mFMV7VH1gvo13MAws3XceMKAQd%2BVDS62wlP0oUA%2BBKChB2hSuabkM6HpiLv%2BVTVHDEife0IANAKOqjMLCDxsMGOqUB9W%2BTYT0wqBwCC1ese0MAP0k5c%2BmxLAdo4oJpkyJDCPnb4SUZQvZ5Ujfep7ovhYcZV1nfno6X0MKru6fj2Eeir3MrSduWzAt5VHMoGAJtZx6ejrs49B0oZFvlQgW2Q9iKcgXTXk%2B2d0HrV5OdKruy4pP9D4U2Ol90BatNmv3BhJ1LvJsL%2BMjLWwx4XURU0MWKto0HXjJdlFmpd%2Fwfam6hf8tjuCUB&X-Amz-Signature=5498e0a7ca8e3040cd69d0b204d0b84c41607a92ed7c2b64c93b74f4dda3d057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VS7CBAV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLCTsF5itQmdx0BZalJE1ufbYZOXyqwH5SZy6STQOf0AiEAiL3tp%2Bvdjs2W4XPdvaVOrxXpQFVE5aPbaEYX%2FexULlwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYgQF3tyYfw58Z4wircA%2Fn%2BxHUhKUrgrYbIZEs%2FI2SRL2SrwvcL12Zl1TE5ls1hfJJww9D17X7MlWHUcIos0SFgmaC6S9VfBn8d8P4b830g3hn4%2FFGECDYwgeZGtO734LPcTfeiys9NT9ionm9xYeLbGgeP0m1agAzA6FFWqBwln3ASmYkBrwcFhFofHU0SoyR3ksK8bNyXsgC3mLQBLx92LICsU9xRKeAjP2fgLC7Z404%2B%2B1vFdhSY8TL%2BW1d08rBWbWy%2BzZvP9DvhpdmfcrHXMRSrXsndKrA4cgtI%2FuTjPDUeFqk5UGo52RegytKW%2Bbz%2FiF6FsKg53xNeHuSQw05MdN7lI4Nu2V6ZZOH8Slwx9VWqrhvzn9MeDRomxuipD6q6uqEf7RVRs1C57Qg0pvpzQcmtGHhUFkV%2FzybtOjG5pkb%2B5aOYo2BirmVpmlbTdNwMxa124AOUPk%2BAiHskXAkligYMI%2FlTA01HYMvWgOIsczzlZVLSr1zplPmDiS6qDULCmffV5iZzsaz%2BSt0pi7qGXcCEbQK6L6EzZH%2BRGRqAcB9zKH7hK8gdjPNL1Oj%2BQ1mFMV7VH1gvo13MAws3XceMKAQd%2BVDS62wlP0oUA%2BBKChB2hSuabkM6HpiLv%2BVTVHDEife0IANAKOqjMLCDxsMGOqUB9W%2BTYT0wqBwCC1ese0MAP0k5c%2BmxLAdo4oJpkyJDCPnb4SUZQvZ5Ujfep7ovhYcZV1nfno6X0MKru6fj2Eeir3MrSduWzAt5VHMoGAJtZx6ejrs49B0oZFvlQgW2Q9iKcgXTXk%2B2d0HrV5OdKruy4pP9D4U2Ol90BatNmv3BhJ1LvJsL%2BMjLWwx4XURU0MWKto0HXjJdlFmpd%2Fwfam6hf8tjuCUB&X-Amz-Signature=c31a168784aaf7b75b601834d3c9af55fe5f2329f810e0f17ab6fd89dee0f28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VS7CBAV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLCTsF5itQmdx0BZalJE1ufbYZOXyqwH5SZy6STQOf0AiEAiL3tp%2Bvdjs2W4XPdvaVOrxXpQFVE5aPbaEYX%2FexULlwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYgQF3tyYfw58Z4wircA%2Fn%2BxHUhKUrgrYbIZEs%2FI2SRL2SrwvcL12Zl1TE5ls1hfJJww9D17X7MlWHUcIos0SFgmaC6S9VfBn8d8P4b830g3hn4%2FFGECDYwgeZGtO734LPcTfeiys9NT9ionm9xYeLbGgeP0m1agAzA6FFWqBwln3ASmYkBrwcFhFofHU0SoyR3ksK8bNyXsgC3mLQBLx92LICsU9xRKeAjP2fgLC7Z404%2B%2B1vFdhSY8TL%2BW1d08rBWbWy%2BzZvP9DvhpdmfcrHXMRSrXsndKrA4cgtI%2FuTjPDUeFqk5UGo52RegytKW%2Bbz%2FiF6FsKg53xNeHuSQw05MdN7lI4Nu2V6ZZOH8Slwx9VWqrhvzn9MeDRomxuipD6q6uqEf7RVRs1C57Qg0pvpzQcmtGHhUFkV%2FzybtOjG5pkb%2B5aOYo2BirmVpmlbTdNwMxa124AOUPk%2BAiHskXAkligYMI%2FlTA01HYMvWgOIsczzlZVLSr1zplPmDiS6qDULCmffV5iZzsaz%2BSt0pi7qGXcCEbQK6L6EzZH%2BRGRqAcB9zKH7hK8gdjPNL1Oj%2BQ1mFMV7VH1gvo13MAws3XceMKAQd%2BVDS62wlP0oUA%2BBKChB2hSuabkM6HpiLv%2BVTVHDEife0IANAKOqjMLCDxsMGOqUB9W%2BTYT0wqBwCC1ese0MAP0k5c%2BmxLAdo4oJpkyJDCPnb4SUZQvZ5Ujfep7ovhYcZV1nfno6X0MKru6fj2Eeir3MrSduWzAt5VHMoGAJtZx6ejrs49B0oZFvlQgW2Q9iKcgXTXk%2B2d0HrV5OdKruy4pP9D4U2Ol90BatNmv3BhJ1LvJsL%2BMjLWwx4XURU0MWKto0HXjJdlFmpd%2Fwfam6hf8tjuCUB&X-Amz-Signature=dd4ad976da2a2d3e10159c471719d6c6bdb371db7cc0aa9dafa1a6c2b05e4ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VS7CBAV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLCTsF5itQmdx0BZalJE1ufbYZOXyqwH5SZy6STQOf0AiEAiL3tp%2Bvdjs2W4XPdvaVOrxXpQFVE5aPbaEYX%2FexULlwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYgQF3tyYfw58Z4wircA%2Fn%2BxHUhKUrgrYbIZEs%2FI2SRL2SrwvcL12Zl1TE5ls1hfJJww9D17X7MlWHUcIos0SFgmaC6S9VfBn8d8P4b830g3hn4%2FFGECDYwgeZGtO734LPcTfeiys9NT9ionm9xYeLbGgeP0m1agAzA6FFWqBwln3ASmYkBrwcFhFofHU0SoyR3ksK8bNyXsgC3mLQBLx92LICsU9xRKeAjP2fgLC7Z404%2B%2B1vFdhSY8TL%2BW1d08rBWbWy%2BzZvP9DvhpdmfcrHXMRSrXsndKrA4cgtI%2FuTjPDUeFqk5UGo52RegytKW%2Bbz%2FiF6FsKg53xNeHuSQw05MdN7lI4Nu2V6ZZOH8Slwx9VWqrhvzn9MeDRomxuipD6q6uqEf7RVRs1C57Qg0pvpzQcmtGHhUFkV%2FzybtOjG5pkb%2B5aOYo2BirmVpmlbTdNwMxa124AOUPk%2BAiHskXAkligYMI%2FlTA01HYMvWgOIsczzlZVLSr1zplPmDiS6qDULCmffV5iZzsaz%2BSt0pi7qGXcCEbQK6L6EzZH%2BRGRqAcB9zKH7hK8gdjPNL1Oj%2BQ1mFMV7VH1gvo13MAws3XceMKAQd%2BVDS62wlP0oUA%2BBKChB2hSuabkM6HpiLv%2BVTVHDEife0IANAKOqjMLCDxsMGOqUB9W%2BTYT0wqBwCC1ese0MAP0k5c%2BmxLAdo4oJpkyJDCPnb4SUZQvZ5Ujfep7ovhYcZV1nfno6X0MKru6fj2Eeir3MrSduWzAt5VHMoGAJtZx6ejrs49B0oZFvlQgW2Q9iKcgXTXk%2B2d0HrV5OdKruy4pP9D4U2Ol90BatNmv3BhJ1LvJsL%2BMjLWwx4XURU0MWKto0HXjJdlFmpd%2Fwfam6hf8tjuCUB&X-Amz-Signature=ac2381c999d6608a303c62d871e87d4825f442c4dd97d4b6e07ff9417a135ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VS7CBAV%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T220926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLCTsF5itQmdx0BZalJE1ufbYZOXyqwH5SZy6STQOf0AiEAiL3tp%2Bvdjs2W4XPdvaVOrxXpQFVE5aPbaEYX%2FexULlwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEYgQF3tyYfw58Z4wircA%2Fn%2BxHUhKUrgrYbIZEs%2FI2SRL2SrwvcL12Zl1TE5ls1hfJJww9D17X7MlWHUcIos0SFgmaC6S9VfBn8d8P4b830g3hn4%2FFGECDYwgeZGtO734LPcTfeiys9NT9ionm9xYeLbGgeP0m1agAzA6FFWqBwln3ASmYkBrwcFhFofHU0SoyR3ksK8bNyXsgC3mLQBLx92LICsU9xRKeAjP2fgLC7Z404%2B%2B1vFdhSY8TL%2BW1d08rBWbWy%2BzZvP9DvhpdmfcrHXMRSrXsndKrA4cgtI%2FuTjPDUeFqk5UGo52RegytKW%2Bbz%2FiF6FsKg53xNeHuSQw05MdN7lI4Nu2V6ZZOH8Slwx9VWqrhvzn9MeDRomxuipD6q6uqEf7RVRs1C57Qg0pvpzQcmtGHhUFkV%2FzybtOjG5pkb%2B5aOYo2BirmVpmlbTdNwMxa124AOUPk%2BAiHskXAkligYMI%2FlTA01HYMvWgOIsczzlZVLSr1zplPmDiS6qDULCmffV5iZzsaz%2BSt0pi7qGXcCEbQK6L6EzZH%2BRGRqAcB9zKH7hK8gdjPNL1Oj%2BQ1mFMV7VH1gvo13MAws3XceMKAQd%2BVDS62wlP0oUA%2BBKChB2hSuabkM6HpiLv%2BVTVHDEife0IANAKOqjMLCDxsMGOqUB9W%2BTYT0wqBwCC1ese0MAP0k5c%2BmxLAdo4oJpkyJDCPnb4SUZQvZ5Ujfep7ovhYcZV1nfno6X0MKru6fj2Eeir3MrSduWzAt5VHMoGAJtZx6ejrs49B0oZFvlQgW2Q9iKcgXTXk%2B2d0HrV5OdKruy4pP9D4U2Ol90BatNmv3BhJ1LvJsL%2BMjLWwx4XURU0MWKto0HXjJdlFmpd%2Fwfam6hf8tjuCUB&X-Amz-Signature=c2656d8761b32e7e7104039d77ccff2a7dd87bef1333d1fd9b82ccef7594932b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
