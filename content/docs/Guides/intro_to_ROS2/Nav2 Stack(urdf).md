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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG42AVPA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQC9twdKdGrFNKCQZBm7DlUMRnuq5OhceRueg4bVmEitLAIgWIZVqmyTIa41DAmYxrtruYKI87IJHY9HkiDTNZkVoEQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDM5aLtJNwSTPJW%2FdwyrcAzDxC%2F98152r8i8EpwD%2F1TWmTzRW2H0Uj3xgvc8VMIYTfMKk3st3fPKGRd%2F7V2Fz%2FoynO%2BjsDcBzOs0n3L7Fl8Ol535LLZ55vb63tlpPj6LnovDfyjAHFfC%2B%2FhDn1nE7ixac7XtGu8Z504o9nbngg1ZVJWHOM1Es4pWG1%2B5Ket%2FJ0PiLQgouQaxbfTN%2Be%2FmPwcwlF34UDdgJfGIS3agqY%2FOwQfepharjF49GZayxkn9V0OxsTmO787%2FXEjTGNJz2BuKNljnX9elY0M1TvDoBPxysvuDJJBaQLmBZ2ytRpJ6Ezc7EN6EAIaBmVMxes9VS6%2F9K%2Ft1tB1o8oyGJ6zZSRIxxGzTTM3iakMyz3o2tbeZwI8HVBWdrlq1ZaGYdz6dQvVfx8LWB0PJeOMllaqRaBM%2BQrpKTt84u1sjelU4cOXN9JiC75Gt9mGUhkM77BrjIq77pMPjY6UeIbcj7QK40O%2BdxzHu1dAoiD39e7EfyoAl7Fh9XTH9Xjq0l7FoPMAH5DFz8LCNlnVNnfpo4bbuLceFoL%2F4cZn0J4fjdh8s5AxweGQhW1M%2BKfz8ADuq5df9mVLB3sP%2FC6ZytSB4gPXk5DaW7j5edIIfYCqee9wI2ArypRgsRSg4tiCPDUQ%2FdMMqV4sMGOqUBuMc9iasAzaSkKQFEqsngmNT4T5RQGipLBgKlPczuU9EqNW4EBiiRsNichr%2FT7u8J4tJ7GP1oz8glfYAQrNm3JYGhZ%2BpS8wXtujsH%2BzMNswMm0SdSpsAcfwYliLnCD1o6v3r%2BAiG%2BNn1lPxEO72ZdI%2BuFXYLcF57IU%2BWbNTIrtuhydSJ2KJSpQDiJuuRewexiAhKHu72eUFXqi4i1TYDnuIoXRQsN&X-Amz-Signature=c0cff53bd002cd3bd5c66200a255def1ec4fd487633708cb71f1f570d15d8a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG42AVPA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQC9twdKdGrFNKCQZBm7DlUMRnuq5OhceRueg4bVmEitLAIgWIZVqmyTIa41DAmYxrtruYKI87IJHY9HkiDTNZkVoEQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDM5aLtJNwSTPJW%2FdwyrcAzDxC%2F98152r8i8EpwD%2F1TWmTzRW2H0Uj3xgvc8VMIYTfMKk3st3fPKGRd%2F7V2Fz%2FoynO%2BjsDcBzOs0n3L7Fl8Ol535LLZ55vb63tlpPj6LnovDfyjAHFfC%2B%2FhDn1nE7ixac7XtGu8Z504o9nbngg1ZVJWHOM1Es4pWG1%2B5Ket%2FJ0PiLQgouQaxbfTN%2Be%2FmPwcwlF34UDdgJfGIS3agqY%2FOwQfepharjF49GZayxkn9V0OxsTmO787%2FXEjTGNJz2BuKNljnX9elY0M1TvDoBPxysvuDJJBaQLmBZ2ytRpJ6Ezc7EN6EAIaBmVMxes9VS6%2F9K%2Ft1tB1o8oyGJ6zZSRIxxGzTTM3iakMyz3o2tbeZwI8HVBWdrlq1ZaGYdz6dQvVfx8LWB0PJeOMllaqRaBM%2BQrpKTt84u1sjelU4cOXN9JiC75Gt9mGUhkM77BrjIq77pMPjY6UeIbcj7QK40O%2BdxzHu1dAoiD39e7EfyoAl7Fh9XTH9Xjq0l7FoPMAH5DFz8LCNlnVNnfpo4bbuLceFoL%2F4cZn0J4fjdh8s5AxweGQhW1M%2BKfz8ADuq5df9mVLB3sP%2FC6ZytSB4gPXk5DaW7j5edIIfYCqee9wI2ArypRgsRSg4tiCPDUQ%2FdMMqV4sMGOqUBuMc9iasAzaSkKQFEqsngmNT4T5RQGipLBgKlPczuU9EqNW4EBiiRsNichr%2FT7u8J4tJ7GP1oz8glfYAQrNm3JYGhZ%2BpS8wXtujsH%2BzMNswMm0SdSpsAcfwYliLnCD1o6v3r%2BAiG%2BNn1lPxEO72ZdI%2BuFXYLcF57IU%2BWbNTIrtuhydSJ2KJSpQDiJuuRewexiAhKHu72eUFXqi4i1TYDnuIoXRQsN&X-Amz-Signature=44700b7fc9276fa359464df4909aefac4dd1871915fe6da2054720210e146d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG42AVPA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQC9twdKdGrFNKCQZBm7DlUMRnuq5OhceRueg4bVmEitLAIgWIZVqmyTIa41DAmYxrtruYKI87IJHY9HkiDTNZkVoEQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDM5aLtJNwSTPJW%2FdwyrcAzDxC%2F98152r8i8EpwD%2F1TWmTzRW2H0Uj3xgvc8VMIYTfMKk3st3fPKGRd%2F7V2Fz%2FoynO%2BjsDcBzOs0n3L7Fl8Ol535LLZ55vb63tlpPj6LnovDfyjAHFfC%2B%2FhDn1nE7ixac7XtGu8Z504o9nbngg1ZVJWHOM1Es4pWG1%2B5Ket%2FJ0PiLQgouQaxbfTN%2Be%2FmPwcwlF34UDdgJfGIS3agqY%2FOwQfepharjF49GZayxkn9V0OxsTmO787%2FXEjTGNJz2BuKNljnX9elY0M1TvDoBPxysvuDJJBaQLmBZ2ytRpJ6Ezc7EN6EAIaBmVMxes9VS6%2F9K%2Ft1tB1o8oyGJ6zZSRIxxGzTTM3iakMyz3o2tbeZwI8HVBWdrlq1ZaGYdz6dQvVfx8LWB0PJeOMllaqRaBM%2BQrpKTt84u1sjelU4cOXN9JiC75Gt9mGUhkM77BrjIq77pMPjY6UeIbcj7QK40O%2BdxzHu1dAoiD39e7EfyoAl7Fh9XTH9Xjq0l7FoPMAH5DFz8LCNlnVNnfpo4bbuLceFoL%2F4cZn0J4fjdh8s5AxweGQhW1M%2BKfz8ADuq5df9mVLB3sP%2FC6ZytSB4gPXk5DaW7j5edIIfYCqee9wI2ArypRgsRSg4tiCPDUQ%2FdMMqV4sMGOqUBuMc9iasAzaSkKQFEqsngmNT4T5RQGipLBgKlPczuU9EqNW4EBiiRsNichr%2FT7u8J4tJ7GP1oz8glfYAQrNm3JYGhZ%2BpS8wXtujsH%2BzMNswMm0SdSpsAcfwYliLnCD1o6v3r%2BAiG%2BNn1lPxEO72ZdI%2BuFXYLcF57IU%2BWbNTIrtuhydSJ2KJSpQDiJuuRewexiAhKHu72eUFXqi4i1TYDnuIoXRQsN&X-Amz-Signature=b81ebae6f158eca5d27e760351b5f97424a7072d3ea8ad121399f45d8336e338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG42AVPA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQC9twdKdGrFNKCQZBm7DlUMRnuq5OhceRueg4bVmEitLAIgWIZVqmyTIa41DAmYxrtruYKI87IJHY9HkiDTNZkVoEQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDM5aLtJNwSTPJW%2FdwyrcAzDxC%2F98152r8i8EpwD%2F1TWmTzRW2H0Uj3xgvc8VMIYTfMKk3st3fPKGRd%2F7V2Fz%2FoynO%2BjsDcBzOs0n3L7Fl8Ol535LLZ55vb63tlpPj6LnovDfyjAHFfC%2B%2FhDn1nE7ixac7XtGu8Z504o9nbngg1ZVJWHOM1Es4pWG1%2B5Ket%2FJ0PiLQgouQaxbfTN%2Be%2FmPwcwlF34UDdgJfGIS3agqY%2FOwQfepharjF49GZayxkn9V0OxsTmO787%2FXEjTGNJz2BuKNljnX9elY0M1TvDoBPxysvuDJJBaQLmBZ2ytRpJ6Ezc7EN6EAIaBmVMxes9VS6%2F9K%2Ft1tB1o8oyGJ6zZSRIxxGzTTM3iakMyz3o2tbeZwI8HVBWdrlq1ZaGYdz6dQvVfx8LWB0PJeOMllaqRaBM%2BQrpKTt84u1sjelU4cOXN9JiC75Gt9mGUhkM77BrjIq77pMPjY6UeIbcj7QK40O%2BdxzHu1dAoiD39e7EfyoAl7Fh9XTH9Xjq0l7FoPMAH5DFz8LCNlnVNnfpo4bbuLceFoL%2F4cZn0J4fjdh8s5AxweGQhW1M%2BKfz8ADuq5df9mVLB3sP%2FC6ZytSB4gPXk5DaW7j5edIIfYCqee9wI2ArypRgsRSg4tiCPDUQ%2FdMMqV4sMGOqUBuMc9iasAzaSkKQFEqsngmNT4T5RQGipLBgKlPczuU9EqNW4EBiiRsNichr%2FT7u8J4tJ7GP1oz8glfYAQrNm3JYGhZ%2BpS8wXtujsH%2BzMNswMm0SdSpsAcfwYliLnCD1o6v3r%2BAiG%2BNn1lPxEO72ZdI%2BuFXYLcF57IU%2BWbNTIrtuhydSJ2KJSpQDiJuuRewexiAhKHu72eUFXqi4i1TYDnuIoXRQsN&X-Amz-Signature=06d130d03d19dd2411b644e26ad4d70b58d48eb8fcb462992104894701c89ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG42AVPA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQC9twdKdGrFNKCQZBm7DlUMRnuq5OhceRueg4bVmEitLAIgWIZVqmyTIa41DAmYxrtruYKI87IJHY9HkiDTNZkVoEQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDM5aLtJNwSTPJW%2FdwyrcAzDxC%2F98152r8i8EpwD%2F1TWmTzRW2H0Uj3xgvc8VMIYTfMKk3st3fPKGRd%2F7V2Fz%2FoynO%2BjsDcBzOs0n3L7Fl8Ol535LLZ55vb63tlpPj6LnovDfyjAHFfC%2B%2FhDn1nE7ixac7XtGu8Z504o9nbngg1ZVJWHOM1Es4pWG1%2B5Ket%2FJ0PiLQgouQaxbfTN%2Be%2FmPwcwlF34UDdgJfGIS3agqY%2FOwQfepharjF49GZayxkn9V0OxsTmO787%2FXEjTGNJz2BuKNljnX9elY0M1TvDoBPxysvuDJJBaQLmBZ2ytRpJ6Ezc7EN6EAIaBmVMxes9VS6%2F9K%2Ft1tB1o8oyGJ6zZSRIxxGzTTM3iakMyz3o2tbeZwI8HVBWdrlq1ZaGYdz6dQvVfx8LWB0PJeOMllaqRaBM%2BQrpKTt84u1sjelU4cOXN9JiC75Gt9mGUhkM77BrjIq77pMPjY6UeIbcj7QK40O%2BdxzHu1dAoiD39e7EfyoAl7Fh9XTH9Xjq0l7FoPMAH5DFz8LCNlnVNnfpo4bbuLceFoL%2F4cZn0J4fjdh8s5AxweGQhW1M%2BKfz8ADuq5df9mVLB3sP%2FC6ZytSB4gPXk5DaW7j5edIIfYCqee9wI2ArypRgsRSg4tiCPDUQ%2FdMMqV4sMGOqUBuMc9iasAzaSkKQFEqsngmNT4T5RQGipLBgKlPczuU9EqNW4EBiiRsNichr%2FT7u8J4tJ7GP1oz8glfYAQrNm3JYGhZ%2BpS8wXtujsH%2BzMNswMm0SdSpsAcfwYliLnCD1o6v3r%2BAiG%2BNn1lPxEO72ZdI%2BuFXYLcF57IU%2BWbNTIrtuhydSJ2KJSpQDiJuuRewexiAhKHu72eUFXqi4i1TYDnuIoXRQsN&X-Amz-Signature=dfb93b79df934b03628bad2dbb0afbe7eb77303e4b1bb14ae5958fbc44463c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG42AVPA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T061429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQC9twdKdGrFNKCQZBm7DlUMRnuq5OhceRueg4bVmEitLAIgWIZVqmyTIa41DAmYxrtruYKI87IJHY9HkiDTNZkVoEQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDM5aLtJNwSTPJW%2FdwyrcAzDxC%2F98152r8i8EpwD%2F1TWmTzRW2H0Uj3xgvc8VMIYTfMKk3st3fPKGRd%2F7V2Fz%2FoynO%2BjsDcBzOs0n3L7Fl8Ol535LLZ55vb63tlpPj6LnovDfyjAHFfC%2B%2FhDn1nE7ixac7XtGu8Z504o9nbngg1ZVJWHOM1Es4pWG1%2B5Ket%2FJ0PiLQgouQaxbfTN%2Be%2FmPwcwlF34UDdgJfGIS3agqY%2FOwQfepharjF49GZayxkn9V0OxsTmO787%2FXEjTGNJz2BuKNljnX9elY0M1TvDoBPxysvuDJJBaQLmBZ2ytRpJ6Ezc7EN6EAIaBmVMxes9VS6%2F9K%2Ft1tB1o8oyGJ6zZSRIxxGzTTM3iakMyz3o2tbeZwI8HVBWdrlq1ZaGYdz6dQvVfx8LWB0PJeOMllaqRaBM%2BQrpKTt84u1sjelU4cOXN9JiC75Gt9mGUhkM77BrjIq77pMPjY6UeIbcj7QK40O%2BdxzHu1dAoiD39e7EfyoAl7Fh9XTH9Xjq0l7FoPMAH5DFz8LCNlnVNnfpo4bbuLceFoL%2F4cZn0J4fjdh8s5AxweGQhW1M%2BKfz8ADuq5df9mVLB3sP%2FC6ZytSB4gPXk5DaW7j5edIIfYCqee9wI2ArypRgsRSg4tiCPDUQ%2FdMMqV4sMGOqUBuMc9iasAzaSkKQFEqsngmNT4T5RQGipLBgKlPczuU9EqNW4EBiiRsNichr%2FT7u8J4tJ7GP1oz8glfYAQrNm3JYGhZ%2BpS8wXtujsH%2BzMNswMm0SdSpsAcfwYliLnCD1o6v3r%2BAiG%2BNn1lPxEO72ZdI%2BuFXYLcF57IU%2BWbNTIrtuhydSJ2KJSpQDiJuuRewexiAhKHu72eUFXqi4i1TYDnuIoXRQsN&X-Amz-Signature=4d73c34a97195404e8a7bf7400c256614f7a8b27dbe029532473f32dd83e8bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
