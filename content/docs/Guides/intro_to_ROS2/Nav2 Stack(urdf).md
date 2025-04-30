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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL2WBME4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDTnv7ZWwCtruExTmzMgubjIeiulvo2kAxmR8WL9SuEDgIgMkBOfyqgg7RpODuez0M9sUhS6Owi7mClM2d4ykHtddwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQyu8AVcG%2FDvWmbHyrcAzgIV4T9H3KSJs72viNGTFTaIXnavHcyY1%2BYDvwsO0R2cwtoN2HWt20FxKI0jXfJwQEZrnts8x2SX%2FQyRG6pjloEDhrsSGl6F9qhKKCwGpLw4XRgDnX8cKt6eYpXC8cAGHJoCxz0zAtTPV525j6eCIdfwYQwTiF%2F79ZsP8Ftdg8RQwhQYztpQC6dtvTTKwXmv2E5HkUwKCBfKxQeo20EFuyKjblakMt4QZ9BwKEFLBzhUX1SRBJkvNLpEnTk2ieoYkwSZsHb4mM9nHonTTyaXMZFHxKQp9SlMlQCah191KdCyMDWrv5uFK%2B5s%2F9IvAPi%2BzqY8ECEapH6zbM8pVEuQPx41SDvF9tEikre5F%2FpIodfYRUC6x4DPGw%2BBdUx8j5Y0NUdqeyHPM%2FonpdSSXpKUxujeiudrrrPEhZ1CXtcznAQ7N1z0SYvZW087EXFpJl81RA7IBsGSAyi5HEJg9yhSsBx8liX055mGwU1%2FPZgIoaNpzbMzYaWxJzuWwkKjoE7QObdQul0UI7OK0DZ97bUEH0aa50YQeDFb14B2SgknbcEarjIKOf2u8Zh%2BNztwvpN%2FVsFeb%2BTg%2B%2BXYcXwUCRBc%2BDvuse7iVjKe3I6c7oqbUnPXypGJskMhYhkIml2MPejxsAGOqUBs24OOxiP0r2xatpt19Z3QmLER7Ff%2B5T7aGz6kY%2FWZgJhHk7HV%2FLiYQsSRncNP3SHpzcFxaZ%2BdFfVBEnR1eBB8HdG23J2lN9Bp6t1i3Nrim64vdK5j9GiuWd6tRCJ7CpiNnH1G7rtMRzce5ehgD6lNCITnN%2BTNGzKQYZjT1qCgtwIgVFDhTrFNWE0T9M0%2Fm37K8Lto3QQ2hpM1eycJq2WhlPKB99w&X-Amz-Signature=d2e286d52def9f835afb6744d8bce532a741f5c6a58dd943ee0e1d29cbe02396&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL2WBME4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDTnv7ZWwCtruExTmzMgubjIeiulvo2kAxmR8WL9SuEDgIgMkBOfyqgg7RpODuez0M9sUhS6Owi7mClM2d4ykHtddwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQyu8AVcG%2FDvWmbHyrcAzgIV4T9H3KSJs72viNGTFTaIXnavHcyY1%2BYDvwsO0R2cwtoN2HWt20FxKI0jXfJwQEZrnts8x2SX%2FQyRG6pjloEDhrsSGl6F9qhKKCwGpLw4XRgDnX8cKt6eYpXC8cAGHJoCxz0zAtTPV525j6eCIdfwYQwTiF%2F79ZsP8Ftdg8RQwhQYztpQC6dtvTTKwXmv2E5HkUwKCBfKxQeo20EFuyKjblakMt4QZ9BwKEFLBzhUX1SRBJkvNLpEnTk2ieoYkwSZsHb4mM9nHonTTyaXMZFHxKQp9SlMlQCah191KdCyMDWrv5uFK%2B5s%2F9IvAPi%2BzqY8ECEapH6zbM8pVEuQPx41SDvF9tEikre5F%2FpIodfYRUC6x4DPGw%2BBdUx8j5Y0NUdqeyHPM%2FonpdSSXpKUxujeiudrrrPEhZ1CXtcznAQ7N1z0SYvZW087EXFpJl81RA7IBsGSAyi5HEJg9yhSsBx8liX055mGwU1%2FPZgIoaNpzbMzYaWxJzuWwkKjoE7QObdQul0UI7OK0DZ97bUEH0aa50YQeDFb14B2SgknbcEarjIKOf2u8Zh%2BNztwvpN%2FVsFeb%2BTg%2B%2BXYcXwUCRBc%2BDvuse7iVjKe3I6c7oqbUnPXypGJskMhYhkIml2MPejxsAGOqUBs24OOxiP0r2xatpt19Z3QmLER7Ff%2B5T7aGz6kY%2FWZgJhHk7HV%2FLiYQsSRncNP3SHpzcFxaZ%2BdFfVBEnR1eBB8HdG23J2lN9Bp6t1i3Nrim64vdK5j9GiuWd6tRCJ7CpiNnH1G7rtMRzce5ehgD6lNCITnN%2BTNGzKQYZjT1qCgtwIgVFDhTrFNWE0T9M0%2Fm37K8Lto3QQ2hpM1eycJq2WhlPKB99w&X-Amz-Signature=3ed1d5f10b5cf90517807f8d42c7b370382e7672b62b851e54a4cf3ee4e1f7f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL2WBME4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDTnv7ZWwCtruExTmzMgubjIeiulvo2kAxmR8WL9SuEDgIgMkBOfyqgg7RpODuez0M9sUhS6Owi7mClM2d4ykHtddwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQyu8AVcG%2FDvWmbHyrcAzgIV4T9H3KSJs72viNGTFTaIXnavHcyY1%2BYDvwsO0R2cwtoN2HWt20FxKI0jXfJwQEZrnts8x2SX%2FQyRG6pjloEDhrsSGl6F9qhKKCwGpLw4XRgDnX8cKt6eYpXC8cAGHJoCxz0zAtTPV525j6eCIdfwYQwTiF%2F79ZsP8Ftdg8RQwhQYztpQC6dtvTTKwXmv2E5HkUwKCBfKxQeo20EFuyKjblakMt4QZ9BwKEFLBzhUX1SRBJkvNLpEnTk2ieoYkwSZsHb4mM9nHonTTyaXMZFHxKQp9SlMlQCah191KdCyMDWrv5uFK%2B5s%2F9IvAPi%2BzqY8ECEapH6zbM8pVEuQPx41SDvF9tEikre5F%2FpIodfYRUC6x4DPGw%2BBdUx8j5Y0NUdqeyHPM%2FonpdSSXpKUxujeiudrrrPEhZ1CXtcznAQ7N1z0SYvZW087EXFpJl81RA7IBsGSAyi5HEJg9yhSsBx8liX055mGwU1%2FPZgIoaNpzbMzYaWxJzuWwkKjoE7QObdQul0UI7OK0DZ97bUEH0aa50YQeDFb14B2SgknbcEarjIKOf2u8Zh%2BNztwvpN%2FVsFeb%2BTg%2B%2BXYcXwUCRBc%2BDvuse7iVjKe3I6c7oqbUnPXypGJskMhYhkIml2MPejxsAGOqUBs24OOxiP0r2xatpt19Z3QmLER7Ff%2B5T7aGz6kY%2FWZgJhHk7HV%2FLiYQsSRncNP3SHpzcFxaZ%2BdFfVBEnR1eBB8HdG23J2lN9Bp6t1i3Nrim64vdK5j9GiuWd6tRCJ7CpiNnH1G7rtMRzce5ehgD6lNCITnN%2BTNGzKQYZjT1qCgtwIgVFDhTrFNWE0T9M0%2Fm37K8Lto3QQ2hpM1eycJq2WhlPKB99w&X-Amz-Signature=43289247a01315fd10dff5368c76a75d40058f6ce7ea164d5675d51603a9d520&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL2WBME4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDTnv7ZWwCtruExTmzMgubjIeiulvo2kAxmR8WL9SuEDgIgMkBOfyqgg7RpODuez0M9sUhS6Owi7mClM2d4ykHtddwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQyu8AVcG%2FDvWmbHyrcAzgIV4T9H3KSJs72viNGTFTaIXnavHcyY1%2BYDvwsO0R2cwtoN2HWt20FxKI0jXfJwQEZrnts8x2SX%2FQyRG6pjloEDhrsSGl6F9qhKKCwGpLw4XRgDnX8cKt6eYpXC8cAGHJoCxz0zAtTPV525j6eCIdfwYQwTiF%2F79ZsP8Ftdg8RQwhQYztpQC6dtvTTKwXmv2E5HkUwKCBfKxQeo20EFuyKjblakMt4QZ9BwKEFLBzhUX1SRBJkvNLpEnTk2ieoYkwSZsHb4mM9nHonTTyaXMZFHxKQp9SlMlQCah191KdCyMDWrv5uFK%2B5s%2F9IvAPi%2BzqY8ECEapH6zbM8pVEuQPx41SDvF9tEikre5F%2FpIodfYRUC6x4DPGw%2BBdUx8j5Y0NUdqeyHPM%2FonpdSSXpKUxujeiudrrrPEhZ1CXtcznAQ7N1z0SYvZW087EXFpJl81RA7IBsGSAyi5HEJg9yhSsBx8liX055mGwU1%2FPZgIoaNpzbMzYaWxJzuWwkKjoE7QObdQul0UI7OK0DZ97bUEH0aa50YQeDFb14B2SgknbcEarjIKOf2u8Zh%2BNztwvpN%2FVsFeb%2BTg%2B%2BXYcXwUCRBc%2BDvuse7iVjKe3I6c7oqbUnPXypGJskMhYhkIml2MPejxsAGOqUBs24OOxiP0r2xatpt19Z3QmLER7Ff%2B5T7aGz6kY%2FWZgJhHk7HV%2FLiYQsSRncNP3SHpzcFxaZ%2BdFfVBEnR1eBB8HdG23J2lN9Bp6t1i3Nrim64vdK5j9GiuWd6tRCJ7CpiNnH1G7rtMRzce5ehgD6lNCITnN%2BTNGzKQYZjT1qCgtwIgVFDhTrFNWE0T9M0%2Fm37K8Lto3QQ2hpM1eycJq2WhlPKB99w&X-Amz-Signature=38a8161da4471f053058ce0adbecb7561d6714033ad52925f0edd479dd72de44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL2WBME4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDTnv7ZWwCtruExTmzMgubjIeiulvo2kAxmR8WL9SuEDgIgMkBOfyqgg7RpODuez0M9sUhS6Owi7mClM2d4ykHtddwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQyu8AVcG%2FDvWmbHyrcAzgIV4T9H3KSJs72viNGTFTaIXnavHcyY1%2BYDvwsO0R2cwtoN2HWt20FxKI0jXfJwQEZrnts8x2SX%2FQyRG6pjloEDhrsSGl6F9qhKKCwGpLw4XRgDnX8cKt6eYpXC8cAGHJoCxz0zAtTPV525j6eCIdfwYQwTiF%2F79ZsP8Ftdg8RQwhQYztpQC6dtvTTKwXmv2E5HkUwKCBfKxQeo20EFuyKjblakMt4QZ9BwKEFLBzhUX1SRBJkvNLpEnTk2ieoYkwSZsHb4mM9nHonTTyaXMZFHxKQp9SlMlQCah191KdCyMDWrv5uFK%2B5s%2F9IvAPi%2BzqY8ECEapH6zbM8pVEuQPx41SDvF9tEikre5F%2FpIodfYRUC6x4DPGw%2BBdUx8j5Y0NUdqeyHPM%2FonpdSSXpKUxujeiudrrrPEhZ1CXtcznAQ7N1z0SYvZW087EXFpJl81RA7IBsGSAyi5HEJg9yhSsBx8liX055mGwU1%2FPZgIoaNpzbMzYaWxJzuWwkKjoE7QObdQul0UI7OK0DZ97bUEH0aa50YQeDFb14B2SgknbcEarjIKOf2u8Zh%2BNztwvpN%2FVsFeb%2BTg%2B%2BXYcXwUCRBc%2BDvuse7iVjKe3I6c7oqbUnPXypGJskMhYhkIml2MPejxsAGOqUBs24OOxiP0r2xatpt19Z3QmLER7Ff%2B5T7aGz6kY%2FWZgJhHk7HV%2FLiYQsSRncNP3SHpzcFxaZ%2BdFfVBEnR1eBB8HdG23J2lN9Bp6t1i3Nrim64vdK5j9GiuWd6tRCJ7CpiNnH1G7rtMRzce5ehgD6lNCITnN%2BTNGzKQYZjT1qCgtwIgVFDhTrFNWE0T9M0%2Fm37K8Lto3QQ2hpM1eycJq2WhlPKB99w&X-Amz-Signature=e8e251ae39d2a41bff1ad9c842cbc1967e13351eace93af09fce1d6d7a78b4da&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL2WBME4%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T033052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDTnv7ZWwCtruExTmzMgubjIeiulvo2kAxmR8WL9SuEDgIgMkBOfyqgg7RpODuez0M9sUhS6Owi7mClM2d4ykHtddwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQyu8AVcG%2FDvWmbHyrcAzgIV4T9H3KSJs72viNGTFTaIXnavHcyY1%2BYDvwsO0R2cwtoN2HWt20FxKI0jXfJwQEZrnts8x2SX%2FQyRG6pjloEDhrsSGl6F9qhKKCwGpLw4XRgDnX8cKt6eYpXC8cAGHJoCxz0zAtTPV525j6eCIdfwYQwTiF%2F79ZsP8Ftdg8RQwhQYztpQC6dtvTTKwXmv2E5HkUwKCBfKxQeo20EFuyKjblakMt4QZ9BwKEFLBzhUX1SRBJkvNLpEnTk2ieoYkwSZsHb4mM9nHonTTyaXMZFHxKQp9SlMlQCah191KdCyMDWrv5uFK%2B5s%2F9IvAPi%2BzqY8ECEapH6zbM8pVEuQPx41SDvF9tEikre5F%2FpIodfYRUC6x4DPGw%2BBdUx8j5Y0NUdqeyHPM%2FonpdSSXpKUxujeiudrrrPEhZ1CXtcznAQ7N1z0SYvZW087EXFpJl81RA7IBsGSAyi5HEJg9yhSsBx8liX055mGwU1%2FPZgIoaNpzbMzYaWxJzuWwkKjoE7QObdQul0UI7OK0DZ97bUEH0aa50YQeDFb14B2SgknbcEarjIKOf2u8Zh%2BNztwvpN%2FVsFeb%2BTg%2B%2BXYcXwUCRBc%2BDvuse7iVjKe3I6c7oqbUnPXypGJskMhYhkIml2MPejxsAGOqUBs24OOxiP0r2xatpt19Z3QmLER7Ff%2B5T7aGz6kY%2FWZgJhHk7HV%2FLiYQsSRncNP3SHpzcFxaZ%2BdFfVBEnR1eBB8HdG23J2lN9Bp6t1i3Nrim64vdK5j9GiuWd6tRCJ7CpiNnH1G7rtMRzce5ehgD6lNCITnN%2BTNGzKQYZjT1qCgtwIgVFDhTrFNWE0T9M0%2Fm37K8Lto3QQ2hpM1eycJq2WhlPKB99w&X-Amz-Signature=5d889b54001f2021e989121be064d75d32ecd445760da4bd63eb6227df9379c1&X-Amz-SignedHeaders=host&x-id=GetObject)
