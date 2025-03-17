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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCB6UL7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKvSKQ6l%2F0rIQ8DsBa5zh%2F3DsBC1V%2FKzkrpyDMD7JJ0AiEAl25IEiXmZW7t5hr24usy9Cbn4WQwDHPREC0500S4H8wq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDE4ad%2FvCH%2BG%2FdzDUjyrcA2j60RWYir6wrMZVtBd5hJGm5OhJNpwCG4GHquY%2BAFa03WnCodsX76pWzmUFXNLpQJGNW%2FlwI3CcPlJXFbWIp8dnfbzMyFG7WbbdHuc4et5H6alNO%2FrGP9pm2Oa4sQBygq7QgUHQA5X40tK3aiX3XGT2UThVxk%2FAeVAshvaf6YSP6vX0YAcUJaE49XSaVVnOsY7a6hmYQInTiwxy38nFQa%2FZBBGzX6sHMBeg4F%2BRrL0c%2Fqbl5qVtc2gUDjVBKwQf7jAXmtpot5bDfMmWwcGdqoB16IYt9K8%2FOB0jKW8XMryMRByvHmkcNdAZCEM5bInnSJyUrR%2BeDzMWbwq%2B8uaqu2EYdH6kXs4OlaUvfF2K7KR270hOCtUjFxFPhO6gVMtuxp2TjqFYpylnA4qljr3Uz43d9hNWFLb452eHksQKtwxL9O4mVjbOlvAeTC%2BFvuiK5GygFJj3RjyYNsyhgtCiWetPNB7X4YYTjRnpXWF9BZauKNjw8E4XqfscUYYUD2BexYTdU3I04cuXibO5o1NYI%2FoOYxCLgf9h6klfO0O1gbLZLSKgqh3crKWA8Ny8zJzi5A125JU5QJXuWl%2Fch81AOAeyDXGCwXc9a9ojcxMM32RWsB1jCJbNX1At%2FXhjMIXb3r4GOqUBYoaYKtZP47yYpPlD4H7egkCGsyKm%2FvLydWvQAmkZ1t69qqg2bKSu8CLJjRygwztb1Kb8CdP2bXwODxGWbhtXiiRR5Hdn5nI3UIi1%2B9CvxTyiw7T4dedfr8naqwpjUAo4O4Cj5oJA1JuMzpmC%2FAeWBmvJwXU47OIPLpercwbM8y0mPvgcAFX7hFz9FGvsAQ04qFoOuOQIsoKbT%2BX7oXMUdtn7WBZq&X-Amz-Signature=72f666bd647d46df48c22184aa19749c9936848519062e78c2abaee6f4133f35&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCB6UL7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKvSKQ6l%2F0rIQ8DsBa5zh%2F3DsBC1V%2FKzkrpyDMD7JJ0AiEAl25IEiXmZW7t5hr24usy9Cbn4WQwDHPREC0500S4H8wq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDE4ad%2FvCH%2BG%2FdzDUjyrcA2j60RWYir6wrMZVtBd5hJGm5OhJNpwCG4GHquY%2BAFa03WnCodsX76pWzmUFXNLpQJGNW%2FlwI3CcPlJXFbWIp8dnfbzMyFG7WbbdHuc4et5H6alNO%2FrGP9pm2Oa4sQBygq7QgUHQA5X40tK3aiX3XGT2UThVxk%2FAeVAshvaf6YSP6vX0YAcUJaE49XSaVVnOsY7a6hmYQInTiwxy38nFQa%2FZBBGzX6sHMBeg4F%2BRrL0c%2Fqbl5qVtc2gUDjVBKwQf7jAXmtpot5bDfMmWwcGdqoB16IYt9K8%2FOB0jKW8XMryMRByvHmkcNdAZCEM5bInnSJyUrR%2BeDzMWbwq%2B8uaqu2EYdH6kXs4OlaUvfF2K7KR270hOCtUjFxFPhO6gVMtuxp2TjqFYpylnA4qljr3Uz43d9hNWFLb452eHksQKtwxL9O4mVjbOlvAeTC%2BFvuiK5GygFJj3RjyYNsyhgtCiWetPNB7X4YYTjRnpXWF9BZauKNjw8E4XqfscUYYUD2BexYTdU3I04cuXibO5o1NYI%2FoOYxCLgf9h6klfO0O1gbLZLSKgqh3crKWA8Ny8zJzi5A125JU5QJXuWl%2Fch81AOAeyDXGCwXc9a9ojcxMM32RWsB1jCJbNX1At%2FXhjMIXb3r4GOqUBYoaYKtZP47yYpPlD4H7egkCGsyKm%2FvLydWvQAmkZ1t69qqg2bKSu8CLJjRygwztb1Kb8CdP2bXwODxGWbhtXiiRR5Hdn5nI3UIi1%2B9CvxTyiw7T4dedfr8naqwpjUAo4O4Cj5oJA1JuMzpmC%2FAeWBmvJwXU47OIPLpercwbM8y0mPvgcAFX7hFz9FGvsAQ04qFoOuOQIsoKbT%2BX7oXMUdtn7WBZq&X-Amz-Signature=34c6e730836e03b768ba5e4c08c1a6179c592327e2a4eb61574ef51db898d5b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCB6UL7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKvSKQ6l%2F0rIQ8DsBa5zh%2F3DsBC1V%2FKzkrpyDMD7JJ0AiEAl25IEiXmZW7t5hr24usy9Cbn4WQwDHPREC0500S4H8wq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDE4ad%2FvCH%2BG%2FdzDUjyrcA2j60RWYir6wrMZVtBd5hJGm5OhJNpwCG4GHquY%2BAFa03WnCodsX76pWzmUFXNLpQJGNW%2FlwI3CcPlJXFbWIp8dnfbzMyFG7WbbdHuc4et5H6alNO%2FrGP9pm2Oa4sQBygq7QgUHQA5X40tK3aiX3XGT2UThVxk%2FAeVAshvaf6YSP6vX0YAcUJaE49XSaVVnOsY7a6hmYQInTiwxy38nFQa%2FZBBGzX6sHMBeg4F%2BRrL0c%2Fqbl5qVtc2gUDjVBKwQf7jAXmtpot5bDfMmWwcGdqoB16IYt9K8%2FOB0jKW8XMryMRByvHmkcNdAZCEM5bInnSJyUrR%2BeDzMWbwq%2B8uaqu2EYdH6kXs4OlaUvfF2K7KR270hOCtUjFxFPhO6gVMtuxp2TjqFYpylnA4qljr3Uz43d9hNWFLb452eHksQKtwxL9O4mVjbOlvAeTC%2BFvuiK5GygFJj3RjyYNsyhgtCiWetPNB7X4YYTjRnpXWF9BZauKNjw8E4XqfscUYYUD2BexYTdU3I04cuXibO5o1NYI%2FoOYxCLgf9h6klfO0O1gbLZLSKgqh3crKWA8Ny8zJzi5A125JU5QJXuWl%2Fch81AOAeyDXGCwXc9a9ojcxMM32RWsB1jCJbNX1At%2FXhjMIXb3r4GOqUBYoaYKtZP47yYpPlD4H7egkCGsyKm%2FvLydWvQAmkZ1t69qqg2bKSu8CLJjRygwztb1Kb8CdP2bXwODxGWbhtXiiRR5Hdn5nI3UIi1%2B9CvxTyiw7T4dedfr8naqwpjUAo4O4Cj5oJA1JuMzpmC%2FAeWBmvJwXU47OIPLpercwbM8y0mPvgcAFX7hFz9FGvsAQ04qFoOuOQIsoKbT%2BX7oXMUdtn7WBZq&X-Amz-Signature=1c68f02125f657fa601bb55377ba2ab2bebb4d1bc99cfe15deffaf3b98658912&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCB6UL7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKvSKQ6l%2F0rIQ8DsBa5zh%2F3DsBC1V%2FKzkrpyDMD7JJ0AiEAl25IEiXmZW7t5hr24usy9Cbn4WQwDHPREC0500S4H8wq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDE4ad%2FvCH%2BG%2FdzDUjyrcA2j60RWYir6wrMZVtBd5hJGm5OhJNpwCG4GHquY%2BAFa03WnCodsX76pWzmUFXNLpQJGNW%2FlwI3CcPlJXFbWIp8dnfbzMyFG7WbbdHuc4et5H6alNO%2FrGP9pm2Oa4sQBygq7QgUHQA5X40tK3aiX3XGT2UThVxk%2FAeVAshvaf6YSP6vX0YAcUJaE49XSaVVnOsY7a6hmYQInTiwxy38nFQa%2FZBBGzX6sHMBeg4F%2BRrL0c%2Fqbl5qVtc2gUDjVBKwQf7jAXmtpot5bDfMmWwcGdqoB16IYt9K8%2FOB0jKW8XMryMRByvHmkcNdAZCEM5bInnSJyUrR%2BeDzMWbwq%2B8uaqu2EYdH6kXs4OlaUvfF2K7KR270hOCtUjFxFPhO6gVMtuxp2TjqFYpylnA4qljr3Uz43d9hNWFLb452eHksQKtwxL9O4mVjbOlvAeTC%2BFvuiK5GygFJj3RjyYNsyhgtCiWetPNB7X4YYTjRnpXWF9BZauKNjw8E4XqfscUYYUD2BexYTdU3I04cuXibO5o1NYI%2FoOYxCLgf9h6klfO0O1gbLZLSKgqh3crKWA8Ny8zJzi5A125JU5QJXuWl%2Fch81AOAeyDXGCwXc9a9ojcxMM32RWsB1jCJbNX1At%2FXhjMIXb3r4GOqUBYoaYKtZP47yYpPlD4H7egkCGsyKm%2FvLydWvQAmkZ1t69qqg2bKSu8CLJjRygwztb1Kb8CdP2bXwODxGWbhtXiiRR5Hdn5nI3UIi1%2B9CvxTyiw7T4dedfr8naqwpjUAo4O4Cj5oJA1JuMzpmC%2FAeWBmvJwXU47OIPLpercwbM8y0mPvgcAFX7hFz9FGvsAQ04qFoOuOQIsoKbT%2BX7oXMUdtn7WBZq&X-Amz-Signature=7e4f64b5825db3adca9428b2502dccf001a2ba0e9635af0893ff91ea0ce949df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCB6UL7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKvSKQ6l%2F0rIQ8DsBa5zh%2F3DsBC1V%2FKzkrpyDMD7JJ0AiEAl25IEiXmZW7t5hr24usy9Cbn4WQwDHPREC0500S4H8wq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDE4ad%2FvCH%2BG%2FdzDUjyrcA2j60RWYir6wrMZVtBd5hJGm5OhJNpwCG4GHquY%2BAFa03WnCodsX76pWzmUFXNLpQJGNW%2FlwI3CcPlJXFbWIp8dnfbzMyFG7WbbdHuc4et5H6alNO%2FrGP9pm2Oa4sQBygq7QgUHQA5X40tK3aiX3XGT2UThVxk%2FAeVAshvaf6YSP6vX0YAcUJaE49XSaVVnOsY7a6hmYQInTiwxy38nFQa%2FZBBGzX6sHMBeg4F%2BRrL0c%2Fqbl5qVtc2gUDjVBKwQf7jAXmtpot5bDfMmWwcGdqoB16IYt9K8%2FOB0jKW8XMryMRByvHmkcNdAZCEM5bInnSJyUrR%2BeDzMWbwq%2B8uaqu2EYdH6kXs4OlaUvfF2K7KR270hOCtUjFxFPhO6gVMtuxp2TjqFYpylnA4qljr3Uz43d9hNWFLb452eHksQKtwxL9O4mVjbOlvAeTC%2BFvuiK5GygFJj3RjyYNsyhgtCiWetPNB7X4YYTjRnpXWF9BZauKNjw8E4XqfscUYYUD2BexYTdU3I04cuXibO5o1NYI%2FoOYxCLgf9h6klfO0O1gbLZLSKgqh3crKWA8Ny8zJzi5A125JU5QJXuWl%2Fch81AOAeyDXGCwXc9a9ojcxMM32RWsB1jCJbNX1At%2FXhjMIXb3r4GOqUBYoaYKtZP47yYpPlD4H7egkCGsyKm%2FvLydWvQAmkZ1t69qqg2bKSu8CLJjRygwztb1Kb8CdP2bXwODxGWbhtXiiRR5Hdn5nI3UIi1%2B9CvxTyiw7T4dedfr8naqwpjUAo4O4Cj5oJA1JuMzpmC%2FAeWBmvJwXU47OIPLpercwbM8y0mPvgcAFX7hFz9FGvsAQ04qFoOuOQIsoKbT%2BX7oXMUdtn7WBZq&X-Amz-Signature=3d41d2bfeee911ab391392f0a8508f10187cd6d102b1b52f1fa9aa9be181fd91&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCB6UL7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T050916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKvSKQ6l%2F0rIQ8DsBa5zh%2F3DsBC1V%2FKzkrpyDMD7JJ0AiEAl25IEiXmZW7t5hr24usy9Cbn4WQwDHPREC0500S4H8wq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDE4ad%2FvCH%2BG%2FdzDUjyrcA2j60RWYir6wrMZVtBd5hJGm5OhJNpwCG4GHquY%2BAFa03WnCodsX76pWzmUFXNLpQJGNW%2FlwI3CcPlJXFbWIp8dnfbzMyFG7WbbdHuc4et5H6alNO%2FrGP9pm2Oa4sQBygq7QgUHQA5X40tK3aiX3XGT2UThVxk%2FAeVAshvaf6YSP6vX0YAcUJaE49XSaVVnOsY7a6hmYQInTiwxy38nFQa%2FZBBGzX6sHMBeg4F%2BRrL0c%2Fqbl5qVtc2gUDjVBKwQf7jAXmtpot5bDfMmWwcGdqoB16IYt9K8%2FOB0jKW8XMryMRByvHmkcNdAZCEM5bInnSJyUrR%2BeDzMWbwq%2B8uaqu2EYdH6kXs4OlaUvfF2K7KR270hOCtUjFxFPhO6gVMtuxp2TjqFYpylnA4qljr3Uz43d9hNWFLb452eHksQKtwxL9O4mVjbOlvAeTC%2BFvuiK5GygFJj3RjyYNsyhgtCiWetPNB7X4YYTjRnpXWF9BZauKNjw8E4XqfscUYYUD2BexYTdU3I04cuXibO5o1NYI%2FoOYxCLgf9h6klfO0O1gbLZLSKgqh3crKWA8Ny8zJzi5A125JU5QJXuWl%2Fch81AOAeyDXGCwXc9a9ojcxMM32RWsB1jCJbNX1At%2FXhjMIXb3r4GOqUBYoaYKtZP47yYpPlD4H7egkCGsyKm%2FvLydWvQAmkZ1t69qqg2bKSu8CLJjRygwztb1Kb8CdP2bXwODxGWbhtXiiRR5Hdn5nI3UIi1%2B9CvxTyiw7T4dedfr8naqwpjUAo4O4Cj5oJA1JuMzpmC%2FAeWBmvJwXU47OIPLpercwbM8y0mPvgcAFX7hFz9FGvsAQ04qFoOuOQIsoKbT%2BX7oXMUdtn7WBZq&X-Amz-Signature=8d6a79d458e7914729136391d559780ff0f7c34eb8a8468443edbe355a2e018b&X-Amz-SignedHeaders=host&x-id=GetObject)
