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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLY4XWU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFz3LE6kXDfdbekQGFvZgwe0UTD1yZQ7qomYocWLG0BNAiEA4cd0dzsl5TG%2BI5QMsYcjuJaiH%2FGIzFKScsydHvm2yh4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDLK0leEy34pDaRPbzyrcA60HtYLjDcDm1q51spTz10VqTpDtMjPRGbhGIuDhK0hmT6v%2FFJ16QuDKwnrSYIAS54FaiYzheKpc7RgI0%2FOM7tHhVJdPIpjdeb0gVIRvinfKeC0uXIGY3kCkFapk4jZDKaqwrW6kFNdW3uZsLqfDUqF%2F8eKwgN3Z0oEKXwamPLQJRHHHwIJF%2BWN2R8Q7X9YvdgzjnJ8dKPpxh74FEJVtspNQh7mZOybzPhj3f%2BiTp0wI7FEvsrTq6EupHGP6%2FNP31RnMFRl39gmlIvll56wyv49KNFXgbV6XtuQlZX%2FMG32JxlVOlMUMNEGN9ZbdAffFi1l%2BNEEPLG%2B%2BWpu1INSE1Hn2l8e7umkShO2P0aWlX0I7llzJ1PCqSZAM9W1GEdCrSS4tVRbKkqnX1%2BUpviHQTVbEuf8i8oqaMVPDRnD1dJOcGApLD17K4E3r9kV8sPRv24HGEWvONu%2BjXZaXPN0axfL46pT8nBiAt%2FGvEZHu3ZEUWaGHEsaElwIGdw6QLbI6Bm7D3VoZk6ScwLlBfjPJzphHq6fxchaHLk%2FvrXuwK52BTxMNgxv0wojPsHQGDgVZdnEt3fYTaVjnCTsEAAxsxX05%2BOKl%2BVud6%2BKjalM7yuI6C%2F%2FJ3%2FtZ2E7rpSp6MPOejr0GOqUBQ08MwvcpI7Dljr%2Fwa6xRjzCMcQY%2Fwad6pHyF7Aw%2B6%2BPBjUCnE78HQsmX2Eoxo%2BRfbaaGROuoNtpdgBHJRTqR7MQYwFZwfDYszwKiKLonJ7L35fKVx2gjZzOCbyA12HQ5yD2R9Fj4hShzMx0oJ2wHrcOKCDmMSeNYWW5h8dKJukekAXK3calrPFwcxqk0biHZPT4vRahLYGgI8pmqMMid1yMuq5xe&X-Amz-Signature=cf523f6483950ccac291cc065f5d48c6b849dbe8a276e53085f7d3623157e12e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLY4XWU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFz3LE6kXDfdbekQGFvZgwe0UTD1yZQ7qomYocWLG0BNAiEA4cd0dzsl5TG%2BI5QMsYcjuJaiH%2FGIzFKScsydHvm2yh4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDLK0leEy34pDaRPbzyrcA60HtYLjDcDm1q51spTz10VqTpDtMjPRGbhGIuDhK0hmT6v%2FFJ16QuDKwnrSYIAS54FaiYzheKpc7RgI0%2FOM7tHhVJdPIpjdeb0gVIRvinfKeC0uXIGY3kCkFapk4jZDKaqwrW6kFNdW3uZsLqfDUqF%2F8eKwgN3Z0oEKXwamPLQJRHHHwIJF%2BWN2R8Q7X9YvdgzjnJ8dKPpxh74FEJVtspNQh7mZOybzPhj3f%2BiTp0wI7FEvsrTq6EupHGP6%2FNP31RnMFRl39gmlIvll56wyv49KNFXgbV6XtuQlZX%2FMG32JxlVOlMUMNEGN9ZbdAffFi1l%2BNEEPLG%2B%2BWpu1INSE1Hn2l8e7umkShO2P0aWlX0I7llzJ1PCqSZAM9W1GEdCrSS4tVRbKkqnX1%2BUpviHQTVbEuf8i8oqaMVPDRnD1dJOcGApLD17K4E3r9kV8sPRv24HGEWvONu%2BjXZaXPN0axfL46pT8nBiAt%2FGvEZHu3ZEUWaGHEsaElwIGdw6QLbI6Bm7D3VoZk6ScwLlBfjPJzphHq6fxchaHLk%2FvrXuwK52BTxMNgxv0wojPsHQGDgVZdnEt3fYTaVjnCTsEAAxsxX05%2BOKl%2BVud6%2BKjalM7yuI6C%2F%2FJ3%2FtZ2E7rpSp6MPOejr0GOqUBQ08MwvcpI7Dljr%2Fwa6xRjzCMcQY%2Fwad6pHyF7Aw%2B6%2BPBjUCnE78HQsmX2Eoxo%2BRfbaaGROuoNtpdgBHJRTqR7MQYwFZwfDYszwKiKLonJ7L35fKVx2gjZzOCbyA12HQ5yD2R9Fj4hShzMx0oJ2wHrcOKCDmMSeNYWW5h8dKJukekAXK3calrPFwcxqk0biHZPT4vRahLYGgI8pmqMMid1yMuq5xe&X-Amz-Signature=856384f114af1d49e6093c7570e5035b69c5a98e3318ca626b442d3998029154&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLY4XWU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFz3LE6kXDfdbekQGFvZgwe0UTD1yZQ7qomYocWLG0BNAiEA4cd0dzsl5TG%2BI5QMsYcjuJaiH%2FGIzFKScsydHvm2yh4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDLK0leEy34pDaRPbzyrcA60HtYLjDcDm1q51spTz10VqTpDtMjPRGbhGIuDhK0hmT6v%2FFJ16QuDKwnrSYIAS54FaiYzheKpc7RgI0%2FOM7tHhVJdPIpjdeb0gVIRvinfKeC0uXIGY3kCkFapk4jZDKaqwrW6kFNdW3uZsLqfDUqF%2F8eKwgN3Z0oEKXwamPLQJRHHHwIJF%2BWN2R8Q7X9YvdgzjnJ8dKPpxh74FEJVtspNQh7mZOybzPhj3f%2BiTp0wI7FEvsrTq6EupHGP6%2FNP31RnMFRl39gmlIvll56wyv49KNFXgbV6XtuQlZX%2FMG32JxlVOlMUMNEGN9ZbdAffFi1l%2BNEEPLG%2B%2BWpu1INSE1Hn2l8e7umkShO2P0aWlX0I7llzJ1PCqSZAM9W1GEdCrSS4tVRbKkqnX1%2BUpviHQTVbEuf8i8oqaMVPDRnD1dJOcGApLD17K4E3r9kV8sPRv24HGEWvONu%2BjXZaXPN0axfL46pT8nBiAt%2FGvEZHu3ZEUWaGHEsaElwIGdw6QLbI6Bm7D3VoZk6ScwLlBfjPJzphHq6fxchaHLk%2FvrXuwK52BTxMNgxv0wojPsHQGDgVZdnEt3fYTaVjnCTsEAAxsxX05%2BOKl%2BVud6%2BKjalM7yuI6C%2F%2FJ3%2FtZ2E7rpSp6MPOejr0GOqUBQ08MwvcpI7Dljr%2Fwa6xRjzCMcQY%2Fwad6pHyF7Aw%2B6%2BPBjUCnE78HQsmX2Eoxo%2BRfbaaGROuoNtpdgBHJRTqR7MQYwFZwfDYszwKiKLonJ7L35fKVx2gjZzOCbyA12HQ5yD2R9Fj4hShzMx0oJ2wHrcOKCDmMSeNYWW5h8dKJukekAXK3calrPFwcxqk0biHZPT4vRahLYGgI8pmqMMid1yMuq5xe&X-Amz-Signature=7c97e05fced6ae367aa932e14a21d4470f5210ae5970ceba292eef09b559283c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLY4XWU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFz3LE6kXDfdbekQGFvZgwe0UTD1yZQ7qomYocWLG0BNAiEA4cd0dzsl5TG%2BI5QMsYcjuJaiH%2FGIzFKScsydHvm2yh4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDLK0leEy34pDaRPbzyrcA60HtYLjDcDm1q51spTz10VqTpDtMjPRGbhGIuDhK0hmT6v%2FFJ16QuDKwnrSYIAS54FaiYzheKpc7RgI0%2FOM7tHhVJdPIpjdeb0gVIRvinfKeC0uXIGY3kCkFapk4jZDKaqwrW6kFNdW3uZsLqfDUqF%2F8eKwgN3Z0oEKXwamPLQJRHHHwIJF%2BWN2R8Q7X9YvdgzjnJ8dKPpxh74FEJVtspNQh7mZOybzPhj3f%2BiTp0wI7FEvsrTq6EupHGP6%2FNP31RnMFRl39gmlIvll56wyv49KNFXgbV6XtuQlZX%2FMG32JxlVOlMUMNEGN9ZbdAffFi1l%2BNEEPLG%2B%2BWpu1INSE1Hn2l8e7umkShO2P0aWlX0I7llzJ1PCqSZAM9W1GEdCrSS4tVRbKkqnX1%2BUpviHQTVbEuf8i8oqaMVPDRnD1dJOcGApLD17K4E3r9kV8sPRv24HGEWvONu%2BjXZaXPN0axfL46pT8nBiAt%2FGvEZHu3ZEUWaGHEsaElwIGdw6QLbI6Bm7D3VoZk6ScwLlBfjPJzphHq6fxchaHLk%2FvrXuwK52BTxMNgxv0wojPsHQGDgVZdnEt3fYTaVjnCTsEAAxsxX05%2BOKl%2BVud6%2BKjalM7yuI6C%2F%2FJ3%2FtZ2E7rpSp6MPOejr0GOqUBQ08MwvcpI7Dljr%2Fwa6xRjzCMcQY%2Fwad6pHyF7Aw%2B6%2BPBjUCnE78HQsmX2Eoxo%2BRfbaaGROuoNtpdgBHJRTqR7MQYwFZwfDYszwKiKLonJ7L35fKVx2gjZzOCbyA12HQ5yD2R9Fj4hShzMx0oJ2wHrcOKCDmMSeNYWW5h8dKJukekAXK3calrPFwcxqk0biHZPT4vRahLYGgI8pmqMMid1yMuq5xe&X-Amz-Signature=1451a54fe21ab3f337b257397813a7cbf9d49c7aa0b745905bf14b6a16ca0f7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLY4XWU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFz3LE6kXDfdbekQGFvZgwe0UTD1yZQ7qomYocWLG0BNAiEA4cd0dzsl5TG%2BI5QMsYcjuJaiH%2FGIzFKScsydHvm2yh4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDLK0leEy34pDaRPbzyrcA60HtYLjDcDm1q51spTz10VqTpDtMjPRGbhGIuDhK0hmT6v%2FFJ16QuDKwnrSYIAS54FaiYzheKpc7RgI0%2FOM7tHhVJdPIpjdeb0gVIRvinfKeC0uXIGY3kCkFapk4jZDKaqwrW6kFNdW3uZsLqfDUqF%2F8eKwgN3Z0oEKXwamPLQJRHHHwIJF%2BWN2R8Q7X9YvdgzjnJ8dKPpxh74FEJVtspNQh7mZOybzPhj3f%2BiTp0wI7FEvsrTq6EupHGP6%2FNP31RnMFRl39gmlIvll56wyv49KNFXgbV6XtuQlZX%2FMG32JxlVOlMUMNEGN9ZbdAffFi1l%2BNEEPLG%2B%2BWpu1INSE1Hn2l8e7umkShO2P0aWlX0I7llzJ1PCqSZAM9W1GEdCrSS4tVRbKkqnX1%2BUpviHQTVbEuf8i8oqaMVPDRnD1dJOcGApLD17K4E3r9kV8sPRv24HGEWvONu%2BjXZaXPN0axfL46pT8nBiAt%2FGvEZHu3ZEUWaGHEsaElwIGdw6QLbI6Bm7D3VoZk6ScwLlBfjPJzphHq6fxchaHLk%2FvrXuwK52BTxMNgxv0wojPsHQGDgVZdnEt3fYTaVjnCTsEAAxsxX05%2BOKl%2BVud6%2BKjalM7yuI6C%2F%2FJ3%2FtZ2E7rpSp6MPOejr0GOqUBQ08MwvcpI7Dljr%2Fwa6xRjzCMcQY%2Fwad6pHyF7Aw%2B6%2BPBjUCnE78HQsmX2Eoxo%2BRfbaaGROuoNtpdgBHJRTqR7MQYwFZwfDYszwKiKLonJ7L35fKVx2gjZzOCbyA12HQ5yD2R9Fj4hShzMx0oJ2wHrcOKCDmMSeNYWW5h8dKJukekAXK3calrPFwcxqk0biHZPT4vRahLYGgI8pmqMMid1yMuq5xe&X-Amz-Signature=c6cd66fb43692fc2d961b7d29f2a0c33966713a5164aa059ee00eb93f2de056a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDLY4XWU%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIFz3LE6kXDfdbekQGFvZgwe0UTD1yZQ7qomYocWLG0BNAiEA4cd0dzsl5TG%2BI5QMsYcjuJaiH%2FGIzFKScsydHvm2yh4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDLK0leEy34pDaRPbzyrcA60HtYLjDcDm1q51spTz10VqTpDtMjPRGbhGIuDhK0hmT6v%2FFJ16QuDKwnrSYIAS54FaiYzheKpc7RgI0%2FOM7tHhVJdPIpjdeb0gVIRvinfKeC0uXIGY3kCkFapk4jZDKaqwrW6kFNdW3uZsLqfDUqF%2F8eKwgN3Z0oEKXwamPLQJRHHHwIJF%2BWN2R8Q7X9YvdgzjnJ8dKPpxh74FEJVtspNQh7mZOybzPhj3f%2BiTp0wI7FEvsrTq6EupHGP6%2FNP31RnMFRl39gmlIvll56wyv49KNFXgbV6XtuQlZX%2FMG32JxlVOlMUMNEGN9ZbdAffFi1l%2BNEEPLG%2B%2BWpu1INSE1Hn2l8e7umkShO2P0aWlX0I7llzJ1PCqSZAM9W1GEdCrSS4tVRbKkqnX1%2BUpviHQTVbEuf8i8oqaMVPDRnD1dJOcGApLD17K4E3r9kV8sPRv24HGEWvONu%2BjXZaXPN0axfL46pT8nBiAt%2FGvEZHu3ZEUWaGHEsaElwIGdw6QLbI6Bm7D3VoZk6ScwLlBfjPJzphHq6fxchaHLk%2FvrXuwK52BTxMNgxv0wojPsHQGDgVZdnEt3fYTaVjnCTsEAAxsxX05%2BOKl%2BVud6%2BKjalM7yuI6C%2F%2FJ3%2FtZ2E7rpSp6MPOejr0GOqUBQ08MwvcpI7Dljr%2Fwa6xRjzCMcQY%2Fwad6pHyF7Aw%2B6%2BPBjUCnE78HQsmX2Eoxo%2BRfbaaGROuoNtpdgBHJRTqR7MQYwFZwfDYszwKiKLonJ7L35fKVx2gjZzOCbyA12HQ5yD2R9Fj4hShzMx0oJ2wHrcOKCDmMSeNYWW5h8dKJukekAXK3calrPFwcxqk0biHZPT4vRahLYGgI8pmqMMid1yMuq5xe&X-Amz-Signature=3b64e7432f9e266846c4083ce39eadead29e3c4ffdc4674c874cd440993fea35&X-Amz-SignedHeaders=host&x-id=GetObject)
