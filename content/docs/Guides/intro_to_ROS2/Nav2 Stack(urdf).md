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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466253QWVBZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIChdKziLkAZi1SR7Q%2BGjGyhF0FnJ5PttxIu2Auwj%2BsldAiEA0Hd4y800O6EisH8nRMvoJ1sEnzSpJKgPJbddmKZqghUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJLdnUCnJDtcLa%2FPmSrcAwk6qR1leAtM6TLYQchQdtZ3PcXPB0Ha7CPwS6bLcXVu2lHTmaDxLdF4hTS1g0JXv44K9JfJqA1q0sXs37BtwxVNqMfXedOWn2Asb7%2Br43UuzO2N0anfGGT4lA83Yu%2B%2BeiriJSXuXVKfHJ8bVYuYjiLj%2BTh%2BEqfCKK6rfSyThPRpxSmiFsVFHZYM7lPH2XwzuL5CyL25jvMHx4bfHZNyTy2zlD3I6MJBGoKL64Y83hELDKXJqUUYEDqnTJt9kxABDHQpax9hxzvw2PSUy6O9pQ1WufnlbiQUCGIwXigsrvFHCvKICIq3EiJz2ARwzA%2Fn93unDMm%2FWoFEe0FY8DCBzKRSJJF6H1sJwNAXU57HHt%2FC23g10yIvkBymFL0iN5mli1duQC%2BLHvoDMB7U7NIqwSUCxMwFO%2FSrEHxbph%2FlW8FeUbQ2kM%2B1O73CZok1BPuUWQCw%2BKkXjDiaLpSWjGasHNUZciswIQlVuCIkV8N%2Bf3BoHMD%2BuJX%2BDtmA8XUABPXMF9NePrSv9%2BpSYI3l4em%2F%2F0LgchcD64a4RTpzzTKL2MMdxMkwkpHsFh%2FTjNxwumw2zI0NCajbhfARivfri4Ou4wRitDDiyN7yVZBt1u5WJyjbyV%2BQYhlr%2FyM4frU5MJqIk8EGOqUB4Tkv2D7aWw8EfDGfddA%2BoRvK%2B46%2BfwTGupQdXQoNxJKbZ%2BjowfQjhnyeFs6%2BCAci9Z24zK9%2BPy7eiFd8ffiqyRiX%2B6BK82CFfOe6jUGZEny3TgN8ufx2DCEd20jvkaxkGaeP0bSJH3whJacgFEnnZoV0Db3vuj6HSnGLO6j%2F2ESY003HEut1OOqRr%2F63fqPlKhYmjUKdN5rirUSLNlIcqwRKIuIb&X-Amz-Signature=f9144146a532bd7a578a724c5a633accc7ac2af42d37a5fa4965da7fb1d4406c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466253QWVBZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIChdKziLkAZi1SR7Q%2BGjGyhF0FnJ5PttxIu2Auwj%2BsldAiEA0Hd4y800O6EisH8nRMvoJ1sEnzSpJKgPJbddmKZqghUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJLdnUCnJDtcLa%2FPmSrcAwk6qR1leAtM6TLYQchQdtZ3PcXPB0Ha7CPwS6bLcXVu2lHTmaDxLdF4hTS1g0JXv44K9JfJqA1q0sXs37BtwxVNqMfXedOWn2Asb7%2Br43UuzO2N0anfGGT4lA83Yu%2B%2BeiriJSXuXVKfHJ8bVYuYjiLj%2BTh%2BEqfCKK6rfSyThPRpxSmiFsVFHZYM7lPH2XwzuL5CyL25jvMHx4bfHZNyTy2zlD3I6MJBGoKL64Y83hELDKXJqUUYEDqnTJt9kxABDHQpax9hxzvw2PSUy6O9pQ1WufnlbiQUCGIwXigsrvFHCvKICIq3EiJz2ARwzA%2Fn93unDMm%2FWoFEe0FY8DCBzKRSJJF6H1sJwNAXU57HHt%2FC23g10yIvkBymFL0iN5mli1duQC%2BLHvoDMB7U7NIqwSUCxMwFO%2FSrEHxbph%2FlW8FeUbQ2kM%2B1O73CZok1BPuUWQCw%2BKkXjDiaLpSWjGasHNUZciswIQlVuCIkV8N%2Bf3BoHMD%2BuJX%2BDtmA8XUABPXMF9NePrSv9%2BpSYI3l4em%2F%2F0LgchcD64a4RTpzzTKL2MMdxMkwkpHsFh%2FTjNxwumw2zI0NCajbhfARivfri4Ou4wRitDDiyN7yVZBt1u5WJyjbyV%2BQYhlr%2FyM4frU5MJqIk8EGOqUB4Tkv2D7aWw8EfDGfddA%2BoRvK%2B46%2BfwTGupQdXQoNxJKbZ%2BjowfQjhnyeFs6%2BCAci9Z24zK9%2BPy7eiFd8ffiqyRiX%2B6BK82CFfOe6jUGZEny3TgN8ufx2DCEd20jvkaxkGaeP0bSJH3whJacgFEnnZoV0Db3vuj6HSnGLO6j%2F2ESY003HEut1OOqRr%2F63fqPlKhYmjUKdN5rirUSLNlIcqwRKIuIb&X-Amz-Signature=580428b8324e1cb4959c180bef595d95ed1e1b10c59453dc91ce21251ad4f7b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466253QWVBZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIChdKziLkAZi1SR7Q%2BGjGyhF0FnJ5PttxIu2Auwj%2BsldAiEA0Hd4y800O6EisH8nRMvoJ1sEnzSpJKgPJbddmKZqghUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJLdnUCnJDtcLa%2FPmSrcAwk6qR1leAtM6TLYQchQdtZ3PcXPB0Ha7CPwS6bLcXVu2lHTmaDxLdF4hTS1g0JXv44K9JfJqA1q0sXs37BtwxVNqMfXedOWn2Asb7%2Br43UuzO2N0anfGGT4lA83Yu%2B%2BeiriJSXuXVKfHJ8bVYuYjiLj%2BTh%2BEqfCKK6rfSyThPRpxSmiFsVFHZYM7lPH2XwzuL5CyL25jvMHx4bfHZNyTy2zlD3I6MJBGoKL64Y83hELDKXJqUUYEDqnTJt9kxABDHQpax9hxzvw2PSUy6O9pQ1WufnlbiQUCGIwXigsrvFHCvKICIq3EiJz2ARwzA%2Fn93unDMm%2FWoFEe0FY8DCBzKRSJJF6H1sJwNAXU57HHt%2FC23g10yIvkBymFL0iN5mli1duQC%2BLHvoDMB7U7NIqwSUCxMwFO%2FSrEHxbph%2FlW8FeUbQ2kM%2B1O73CZok1BPuUWQCw%2BKkXjDiaLpSWjGasHNUZciswIQlVuCIkV8N%2Bf3BoHMD%2BuJX%2BDtmA8XUABPXMF9NePrSv9%2BpSYI3l4em%2F%2F0LgchcD64a4RTpzzTKL2MMdxMkwkpHsFh%2FTjNxwumw2zI0NCajbhfARivfri4Ou4wRitDDiyN7yVZBt1u5WJyjbyV%2BQYhlr%2FyM4frU5MJqIk8EGOqUB4Tkv2D7aWw8EfDGfddA%2BoRvK%2B46%2BfwTGupQdXQoNxJKbZ%2BjowfQjhnyeFs6%2BCAci9Z24zK9%2BPy7eiFd8ffiqyRiX%2B6BK82CFfOe6jUGZEny3TgN8ufx2DCEd20jvkaxkGaeP0bSJH3whJacgFEnnZoV0Db3vuj6HSnGLO6j%2F2ESY003HEut1OOqRr%2F63fqPlKhYmjUKdN5rirUSLNlIcqwRKIuIb&X-Amz-Signature=d488dfe12e53177aa281e613408aba7fb5d3262c7ed9663c9f5493fa95453b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466253QWVBZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIChdKziLkAZi1SR7Q%2BGjGyhF0FnJ5PttxIu2Auwj%2BsldAiEA0Hd4y800O6EisH8nRMvoJ1sEnzSpJKgPJbddmKZqghUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJLdnUCnJDtcLa%2FPmSrcAwk6qR1leAtM6TLYQchQdtZ3PcXPB0Ha7CPwS6bLcXVu2lHTmaDxLdF4hTS1g0JXv44K9JfJqA1q0sXs37BtwxVNqMfXedOWn2Asb7%2Br43UuzO2N0anfGGT4lA83Yu%2B%2BeiriJSXuXVKfHJ8bVYuYjiLj%2BTh%2BEqfCKK6rfSyThPRpxSmiFsVFHZYM7lPH2XwzuL5CyL25jvMHx4bfHZNyTy2zlD3I6MJBGoKL64Y83hELDKXJqUUYEDqnTJt9kxABDHQpax9hxzvw2PSUy6O9pQ1WufnlbiQUCGIwXigsrvFHCvKICIq3EiJz2ARwzA%2Fn93unDMm%2FWoFEe0FY8DCBzKRSJJF6H1sJwNAXU57HHt%2FC23g10yIvkBymFL0iN5mli1duQC%2BLHvoDMB7U7NIqwSUCxMwFO%2FSrEHxbph%2FlW8FeUbQ2kM%2B1O73CZok1BPuUWQCw%2BKkXjDiaLpSWjGasHNUZciswIQlVuCIkV8N%2Bf3BoHMD%2BuJX%2BDtmA8XUABPXMF9NePrSv9%2BpSYI3l4em%2F%2F0LgchcD64a4RTpzzTKL2MMdxMkwkpHsFh%2FTjNxwumw2zI0NCajbhfARivfri4Ou4wRitDDiyN7yVZBt1u5WJyjbyV%2BQYhlr%2FyM4frU5MJqIk8EGOqUB4Tkv2D7aWw8EfDGfddA%2BoRvK%2B46%2BfwTGupQdXQoNxJKbZ%2BjowfQjhnyeFs6%2BCAci9Z24zK9%2BPy7eiFd8ffiqyRiX%2B6BK82CFfOe6jUGZEny3TgN8ufx2DCEd20jvkaxkGaeP0bSJH3whJacgFEnnZoV0Db3vuj6HSnGLO6j%2F2ESY003HEut1OOqRr%2F63fqPlKhYmjUKdN5rirUSLNlIcqwRKIuIb&X-Amz-Signature=093018eacc090c2a6f1171289722cd02b0ef1f26cf7fc74dff4fb99d4a5884b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466253QWVBZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIChdKziLkAZi1SR7Q%2BGjGyhF0FnJ5PttxIu2Auwj%2BsldAiEA0Hd4y800O6EisH8nRMvoJ1sEnzSpJKgPJbddmKZqghUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJLdnUCnJDtcLa%2FPmSrcAwk6qR1leAtM6TLYQchQdtZ3PcXPB0Ha7CPwS6bLcXVu2lHTmaDxLdF4hTS1g0JXv44K9JfJqA1q0sXs37BtwxVNqMfXedOWn2Asb7%2Br43UuzO2N0anfGGT4lA83Yu%2B%2BeiriJSXuXVKfHJ8bVYuYjiLj%2BTh%2BEqfCKK6rfSyThPRpxSmiFsVFHZYM7lPH2XwzuL5CyL25jvMHx4bfHZNyTy2zlD3I6MJBGoKL64Y83hELDKXJqUUYEDqnTJt9kxABDHQpax9hxzvw2PSUy6O9pQ1WufnlbiQUCGIwXigsrvFHCvKICIq3EiJz2ARwzA%2Fn93unDMm%2FWoFEe0FY8DCBzKRSJJF6H1sJwNAXU57HHt%2FC23g10yIvkBymFL0iN5mli1duQC%2BLHvoDMB7U7NIqwSUCxMwFO%2FSrEHxbph%2FlW8FeUbQ2kM%2B1O73CZok1BPuUWQCw%2BKkXjDiaLpSWjGasHNUZciswIQlVuCIkV8N%2Bf3BoHMD%2BuJX%2BDtmA8XUABPXMF9NePrSv9%2BpSYI3l4em%2F%2F0LgchcD64a4RTpzzTKL2MMdxMkwkpHsFh%2FTjNxwumw2zI0NCajbhfARivfri4Ou4wRitDDiyN7yVZBt1u5WJyjbyV%2BQYhlr%2FyM4frU5MJqIk8EGOqUB4Tkv2D7aWw8EfDGfddA%2BoRvK%2B46%2BfwTGupQdXQoNxJKbZ%2BjowfQjhnyeFs6%2BCAci9Z24zK9%2BPy7eiFd8ffiqyRiX%2B6BK82CFfOe6jUGZEny3TgN8ufx2DCEd20jvkaxkGaeP0bSJH3whJacgFEnnZoV0Db3vuj6HSnGLO6j%2F2ESY003HEut1OOqRr%2F63fqPlKhYmjUKdN5rirUSLNlIcqwRKIuIb&X-Amz-Signature=5ca02fe4416953052ce1c2578bfd074c7d736df424a2a585572d76ca938eaa8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466253QWVBZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIChdKziLkAZi1SR7Q%2BGjGyhF0FnJ5PttxIu2Auwj%2BsldAiEA0Hd4y800O6EisH8nRMvoJ1sEnzSpJKgPJbddmKZqghUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDJLdnUCnJDtcLa%2FPmSrcAwk6qR1leAtM6TLYQchQdtZ3PcXPB0Ha7CPwS6bLcXVu2lHTmaDxLdF4hTS1g0JXv44K9JfJqA1q0sXs37BtwxVNqMfXedOWn2Asb7%2Br43UuzO2N0anfGGT4lA83Yu%2B%2BeiriJSXuXVKfHJ8bVYuYjiLj%2BTh%2BEqfCKK6rfSyThPRpxSmiFsVFHZYM7lPH2XwzuL5CyL25jvMHx4bfHZNyTy2zlD3I6MJBGoKL64Y83hELDKXJqUUYEDqnTJt9kxABDHQpax9hxzvw2PSUy6O9pQ1WufnlbiQUCGIwXigsrvFHCvKICIq3EiJz2ARwzA%2Fn93unDMm%2FWoFEe0FY8DCBzKRSJJF6H1sJwNAXU57HHt%2FC23g10yIvkBymFL0iN5mli1duQC%2BLHvoDMB7U7NIqwSUCxMwFO%2FSrEHxbph%2FlW8FeUbQ2kM%2B1O73CZok1BPuUWQCw%2BKkXjDiaLpSWjGasHNUZciswIQlVuCIkV8N%2Bf3BoHMD%2BuJX%2BDtmA8XUABPXMF9NePrSv9%2BpSYI3l4em%2F%2F0LgchcD64a4RTpzzTKL2MMdxMkwkpHsFh%2FTjNxwumw2zI0NCajbhfARivfri4Ou4wRitDDiyN7yVZBt1u5WJyjbyV%2BQYhlr%2FyM4frU5MJqIk8EGOqUB4Tkv2D7aWw8EfDGfddA%2BoRvK%2B46%2BfwTGupQdXQoNxJKbZ%2BjowfQjhnyeFs6%2BCAci9Z24zK9%2BPy7eiFd8ffiqyRiX%2B6BK82CFfOe6jUGZEny3TgN8ufx2DCEd20jvkaxkGaeP0bSJH3whJacgFEnnZoV0Db3vuj6HSnGLO6j%2F2ESY003HEut1OOqRr%2F63fqPlKhYmjUKdN5rirUSLNlIcqwRKIuIb&X-Amz-Signature=c85964be7cd86f90839191bb7793174fb5366fcd102495ac7214cef1924e17f6&X-Amz-SignedHeaders=host&x-id=GetObject)
