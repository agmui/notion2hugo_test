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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPMU7SBJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV%2B617fUq0PAORevWy5xIz3xvDFgkIxz9UECYxe9NO2QIhANsIVFPWJ%2Btubeb7NMYFYwd7qtriCqZRSt%2Fw%2B29%2FKbSBKv8DCGYQABoMNjM3NDIzMTgzODA1IgyKbbVONdT6%2BAI5zacq3AP%2BUj1N9RBkZtj%2FgqR%2B2PBatVAnerPbWy0t1XiNhC7WT6VM4%2FtG8MJItNDdmZwNdljISwBA2GSj%2FJxfDd02RV%2BpZn6GmtIAjLHVi%2FCuf1UJyYlyjS2VBFgHvJQpldgwVDoSWK3K8jCbL20FmHh0OTiTjhxUKrCbxkK85OvTPeSMdC9wWnU7liPoghFXKGT0ssLPGtZIO5Z5mfdZJ3Bv%2FUSSCbuIl%2BuJBJCiTP2sJgPwkSJhqpitaVcWcB0ejc%2BIA%2Fzu5lAO3bhhm2P9Rzqe634MtIF0HlEFtVhDTCjVc9UF1%2FK09dvQeID3Xp8ZuCR%2BgUbGPcLZas6H6Wirk5M08SoNz9As48IMXUxoB4XBOqeSbsztRwEnEaWp0VdOQt19qEJG%2FEun41IgD3OpDrUKtdK1iLXsVVlLj7O1KDr9sWThmzTzlqGxstczA9DcAXJmXpXjpZdHRh%2BKEoOLOb8Tr4nL6mCYAnTMKUwuA3MwmfegKZt0xnUkgSVdRFsPeDQLLAKQb%2Fgd1UKVxw4MVEiSbBeHkCvkYM42DGBHkg0gBBPk6eY8yciJM36I28kCWuNfIk2yY%2FtLnk8vj%2BUYEMUJYlK1ecujPxaO4EDZyEIgvE5NwPhXUTkBAfFYkAEpgDC0ydjBBjqkAeNSh0zg%2FbelbpfsBmlUT%2BeqWeyibdHgdmvRZvrAMQigs%2FvR81YZCi%2F11UVv9owYADWYF0klfNb91RVF4u0UpYcRNEerBTzBllI8uEf8VIQNwQ9%2BGm6D2bbq9ZA7F%2Ffwz3GqM5H3CuU8R8JL%2FTardC4q5Xa3Pcvvlem1LtQtLJV7FN7zzFP9zLFKqElcUkjCqTNStxPtRDsR9Tm3X0EPCcGgcwhZ&X-Amz-Signature=7759862ec787cf07713122a509b7ed3785ec3d3ffcde709e57d5f1dabd307bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPMU7SBJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV%2B617fUq0PAORevWy5xIz3xvDFgkIxz9UECYxe9NO2QIhANsIVFPWJ%2Btubeb7NMYFYwd7qtriCqZRSt%2Fw%2B29%2FKbSBKv8DCGYQABoMNjM3NDIzMTgzODA1IgyKbbVONdT6%2BAI5zacq3AP%2BUj1N9RBkZtj%2FgqR%2B2PBatVAnerPbWy0t1XiNhC7WT6VM4%2FtG8MJItNDdmZwNdljISwBA2GSj%2FJxfDd02RV%2BpZn6GmtIAjLHVi%2FCuf1UJyYlyjS2VBFgHvJQpldgwVDoSWK3K8jCbL20FmHh0OTiTjhxUKrCbxkK85OvTPeSMdC9wWnU7liPoghFXKGT0ssLPGtZIO5Z5mfdZJ3Bv%2FUSSCbuIl%2BuJBJCiTP2sJgPwkSJhqpitaVcWcB0ejc%2BIA%2Fzu5lAO3bhhm2P9Rzqe634MtIF0HlEFtVhDTCjVc9UF1%2FK09dvQeID3Xp8ZuCR%2BgUbGPcLZas6H6Wirk5M08SoNz9As48IMXUxoB4XBOqeSbsztRwEnEaWp0VdOQt19qEJG%2FEun41IgD3OpDrUKtdK1iLXsVVlLj7O1KDr9sWThmzTzlqGxstczA9DcAXJmXpXjpZdHRh%2BKEoOLOb8Tr4nL6mCYAnTMKUwuA3MwmfegKZt0xnUkgSVdRFsPeDQLLAKQb%2Fgd1UKVxw4MVEiSbBeHkCvkYM42DGBHkg0gBBPk6eY8yciJM36I28kCWuNfIk2yY%2FtLnk8vj%2BUYEMUJYlK1ecujPxaO4EDZyEIgvE5NwPhXUTkBAfFYkAEpgDC0ydjBBjqkAeNSh0zg%2FbelbpfsBmlUT%2BeqWeyibdHgdmvRZvrAMQigs%2FvR81YZCi%2F11UVv9owYADWYF0klfNb91RVF4u0UpYcRNEerBTzBllI8uEf8VIQNwQ9%2BGm6D2bbq9ZA7F%2Ffwz3GqM5H3CuU8R8JL%2FTardC4q5Xa3Pcvvlem1LtQtLJV7FN7zzFP9zLFKqElcUkjCqTNStxPtRDsR9Tm3X0EPCcGgcwhZ&X-Amz-Signature=b699d45580d8eb0c3df84f2bc1bee1360e6c55f8856429079e172574c0adf493&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPMU7SBJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV%2B617fUq0PAORevWy5xIz3xvDFgkIxz9UECYxe9NO2QIhANsIVFPWJ%2Btubeb7NMYFYwd7qtriCqZRSt%2Fw%2B29%2FKbSBKv8DCGYQABoMNjM3NDIzMTgzODA1IgyKbbVONdT6%2BAI5zacq3AP%2BUj1N9RBkZtj%2FgqR%2B2PBatVAnerPbWy0t1XiNhC7WT6VM4%2FtG8MJItNDdmZwNdljISwBA2GSj%2FJxfDd02RV%2BpZn6GmtIAjLHVi%2FCuf1UJyYlyjS2VBFgHvJQpldgwVDoSWK3K8jCbL20FmHh0OTiTjhxUKrCbxkK85OvTPeSMdC9wWnU7liPoghFXKGT0ssLPGtZIO5Z5mfdZJ3Bv%2FUSSCbuIl%2BuJBJCiTP2sJgPwkSJhqpitaVcWcB0ejc%2BIA%2Fzu5lAO3bhhm2P9Rzqe634MtIF0HlEFtVhDTCjVc9UF1%2FK09dvQeID3Xp8ZuCR%2BgUbGPcLZas6H6Wirk5M08SoNz9As48IMXUxoB4XBOqeSbsztRwEnEaWp0VdOQt19qEJG%2FEun41IgD3OpDrUKtdK1iLXsVVlLj7O1KDr9sWThmzTzlqGxstczA9DcAXJmXpXjpZdHRh%2BKEoOLOb8Tr4nL6mCYAnTMKUwuA3MwmfegKZt0xnUkgSVdRFsPeDQLLAKQb%2Fgd1UKVxw4MVEiSbBeHkCvkYM42DGBHkg0gBBPk6eY8yciJM36I28kCWuNfIk2yY%2FtLnk8vj%2BUYEMUJYlK1ecujPxaO4EDZyEIgvE5NwPhXUTkBAfFYkAEpgDC0ydjBBjqkAeNSh0zg%2FbelbpfsBmlUT%2BeqWeyibdHgdmvRZvrAMQigs%2FvR81YZCi%2F11UVv9owYADWYF0klfNb91RVF4u0UpYcRNEerBTzBllI8uEf8VIQNwQ9%2BGm6D2bbq9ZA7F%2Ffwz3GqM5H3CuU8R8JL%2FTardC4q5Xa3Pcvvlem1LtQtLJV7FN7zzFP9zLFKqElcUkjCqTNStxPtRDsR9Tm3X0EPCcGgcwhZ&X-Amz-Signature=baf15d60bae6c3e1c72186338a6b01cf4215dba1b49f522d1f15416b0487171c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPMU7SBJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV%2B617fUq0PAORevWy5xIz3xvDFgkIxz9UECYxe9NO2QIhANsIVFPWJ%2Btubeb7NMYFYwd7qtriCqZRSt%2Fw%2B29%2FKbSBKv8DCGYQABoMNjM3NDIzMTgzODA1IgyKbbVONdT6%2BAI5zacq3AP%2BUj1N9RBkZtj%2FgqR%2B2PBatVAnerPbWy0t1XiNhC7WT6VM4%2FtG8MJItNDdmZwNdljISwBA2GSj%2FJxfDd02RV%2BpZn6GmtIAjLHVi%2FCuf1UJyYlyjS2VBFgHvJQpldgwVDoSWK3K8jCbL20FmHh0OTiTjhxUKrCbxkK85OvTPeSMdC9wWnU7liPoghFXKGT0ssLPGtZIO5Z5mfdZJ3Bv%2FUSSCbuIl%2BuJBJCiTP2sJgPwkSJhqpitaVcWcB0ejc%2BIA%2Fzu5lAO3bhhm2P9Rzqe634MtIF0HlEFtVhDTCjVc9UF1%2FK09dvQeID3Xp8ZuCR%2BgUbGPcLZas6H6Wirk5M08SoNz9As48IMXUxoB4XBOqeSbsztRwEnEaWp0VdOQt19qEJG%2FEun41IgD3OpDrUKtdK1iLXsVVlLj7O1KDr9sWThmzTzlqGxstczA9DcAXJmXpXjpZdHRh%2BKEoOLOb8Tr4nL6mCYAnTMKUwuA3MwmfegKZt0xnUkgSVdRFsPeDQLLAKQb%2Fgd1UKVxw4MVEiSbBeHkCvkYM42DGBHkg0gBBPk6eY8yciJM36I28kCWuNfIk2yY%2FtLnk8vj%2BUYEMUJYlK1ecujPxaO4EDZyEIgvE5NwPhXUTkBAfFYkAEpgDC0ydjBBjqkAeNSh0zg%2FbelbpfsBmlUT%2BeqWeyibdHgdmvRZvrAMQigs%2FvR81YZCi%2F11UVv9owYADWYF0klfNb91RVF4u0UpYcRNEerBTzBllI8uEf8VIQNwQ9%2BGm6D2bbq9ZA7F%2Ffwz3GqM5H3CuU8R8JL%2FTardC4q5Xa3Pcvvlem1LtQtLJV7FN7zzFP9zLFKqElcUkjCqTNStxPtRDsR9Tm3X0EPCcGgcwhZ&X-Amz-Signature=67790df825f3afb51fcc2cd5e692379d845fd9be3e439176b92a22c85caf11a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPMU7SBJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV%2B617fUq0PAORevWy5xIz3xvDFgkIxz9UECYxe9NO2QIhANsIVFPWJ%2Btubeb7NMYFYwd7qtriCqZRSt%2Fw%2B29%2FKbSBKv8DCGYQABoMNjM3NDIzMTgzODA1IgyKbbVONdT6%2BAI5zacq3AP%2BUj1N9RBkZtj%2FgqR%2B2PBatVAnerPbWy0t1XiNhC7WT6VM4%2FtG8MJItNDdmZwNdljISwBA2GSj%2FJxfDd02RV%2BpZn6GmtIAjLHVi%2FCuf1UJyYlyjS2VBFgHvJQpldgwVDoSWK3K8jCbL20FmHh0OTiTjhxUKrCbxkK85OvTPeSMdC9wWnU7liPoghFXKGT0ssLPGtZIO5Z5mfdZJ3Bv%2FUSSCbuIl%2BuJBJCiTP2sJgPwkSJhqpitaVcWcB0ejc%2BIA%2Fzu5lAO3bhhm2P9Rzqe634MtIF0HlEFtVhDTCjVc9UF1%2FK09dvQeID3Xp8ZuCR%2BgUbGPcLZas6H6Wirk5M08SoNz9As48IMXUxoB4XBOqeSbsztRwEnEaWp0VdOQt19qEJG%2FEun41IgD3OpDrUKtdK1iLXsVVlLj7O1KDr9sWThmzTzlqGxstczA9DcAXJmXpXjpZdHRh%2BKEoOLOb8Tr4nL6mCYAnTMKUwuA3MwmfegKZt0xnUkgSVdRFsPeDQLLAKQb%2Fgd1UKVxw4MVEiSbBeHkCvkYM42DGBHkg0gBBPk6eY8yciJM36I28kCWuNfIk2yY%2FtLnk8vj%2BUYEMUJYlK1ecujPxaO4EDZyEIgvE5NwPhXUTkBAfFYkAEpgDC0ydjBBjqkAeNSh0zg%2FbelbpfsBmlUT%2BeqWeyibdHgdmvRZvrAMQigs%2FvR81YZCi%2F11UVv9owYADWYF0klfNb91RVF4u0UpYcRNEerBTzBllI8uEf8VIQNwQ9%2BGm6D2bbq9ZA7F%2Ffwz3GqM5H3CuU8R8JL%2FTardC4q5Xa3Pcvvlem1LtQtLJV7FN7zzFP9zLFKqElcUkjCqTNStxPtRDsR9Tm3X0EPCcGgcwhZ&X-Amz-Signature=85991fa142782c60268a99c2707f5b8d18fa82f134467020a55260bbf99ab7ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPMU7SBJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCV%2B617fUq0PAORevWy5xIz3xvDFgkIxz9UECYxe9NO2QIhANsIVFPWJ%2Btubeb7NMYFYwd7qtriCqZRSt%2Fw%2B29%2FKbSBKv8DCGYQABoMNjM3NDIzMTgzODA1IgyKbbVONdT6%2BAI5zacq3AP%2BUj1N9RBkZtj%2FgqR%2B2PBatVAnerPbWy0t1XiNhC7WT6VM4%2FtG8MJItNDdmZwNdljISwBA2GSj%2FJxfDd02RV%2BpZn6GmtIAjLHVi%2FCuf1UJyYlyjS2VBFgHvJQpldgwVDoSWK3K8jCbL20FmHh0OTiTjhxUKrCbxkK85OvTPeSMdC9wWnU7liPoghFXKGT0ssLPGtZIO5Z5mfdZJ3Bv%2FUSSCbuIl%2BuJBJCiTP2sJgPwkSJhqpitaVcWcB0ejc%2BIA%2Fzu5lAO3bhhm2P9Rzqe634MtIF0HlEFtVhDTCjVc9UF1%2FK09dvQeID3Xp8ZuCR%2BgUbGPcLZas6H6Wirk5M08SoNz9As48IMXUxoB4XBOqeSbsztRwEnEaWp0VdOQt19qEJG%2FEun41IgD3OpDrUKtdK1iLXsVVlLj7O1KDr9sWThmzTzlqGxstczA9DcAXJmXpXjpZdHRh%2BKEoOLOb8Tr4nL6mCYAnTMKUwuA3MwmfegKZt0xnUkgSVdRFsPeDQLLAKQb%2Fgd1UKVxw4MVEiSbBeHkCvkYM42DGBHkg0gBBPk6eY8yciJM36I28kCWuNfIk2yY%2FtLnk8vj%2BUYEMUJYlK1ecujPxaO4EDZyEIgvE5NwPhXUTkBAfFYkAEpgDC0ydjBBjqkAeNSh0zg%2FbelbpfsBmlUT%2BeqWeyibdHgdmvRZvrAMQigs%2FvR81YZCi%2F11UVv9owYADWYF0klfNb91RVF4u0UpYcRNEerBTzBllI8uEf8VIQNwQ9%2BGm6D2bbq9ZA7F%2Ffwz3GqM5H3CuU8R8JL%2FTardC4q5Xa3Pcvvlem1LtQtLJV7FN7zzFP9zLFKqElcUkjCqTNStxPtRDsR9Tm3X0EPCcGgcwhZ&X-Amz-Signature=f235f3f64377135572accc201167c6ed1bdd26d9db421765c270c4b46d015af5&X-Amz-SignedHeaders=host&x-id=GetObject)
