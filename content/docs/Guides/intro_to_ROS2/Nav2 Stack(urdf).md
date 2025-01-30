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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637FJVPV5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDHDdK5FKVVTqtNMpZPA%2B9ib506ZwUjFscs6N9IjTRbQIgC6EooQAMIAgnmW%2FxpdlILgBPFK0d06xS8uSnupk2GBsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5CC7ma3%2BOARoZHEyrcA1nPrP4g6P62bJOeVN7%2BB5Ts%2B17dT%2BqdSo%2F%2BDPT0kkeRuQOJYHlyC9N45cdF0Pv4Z7va4OLUG%2FD3Ju1kkMvM3i3oz1Q9BhnY1wH4BiPlt%2FN83ZCRT0%2FhsVh0BToVh3tbSLR%2FG1K7URQc%2Bk1utrny2kdYwBgEojJuuilYiz1PH7SjPm%2FFDwWKoTU%2B7EpzPPAdusrnOzftI1bXLWJ2hC4tdb%2FKCQ678k7ZTqjWnHEOnsM50JoC6Rt9DMmGk6waJ0y6phagdJ0lDrmPDxX9mngtfRsVtb2sTt9GDh82V%2FwVgegytSECW8vCAJ72aMyqaEBAvCbQZRdSk85ZDnYKGy5mrsNENsCn3IwA0wJzZplr%2FMAn7CnyJgguSoS2MryyJ%2FvEknmzOe%2FyK3QVNSgp2fOWLRtDfWhcbm6NeBPYa6BZjozry7jQyIXo01bhLQwvY7P%2FcNY%2FfxfuyQqoDytoiBcPBR8jkM%2BslzbB92PgvvsGXiEHefk8DQZEAe9Y9jhYIms62UkOYlvOf39WE9VyqKwMM5jy2%2FUqrHFXOWlVM2Us67fXiiELgFaJq%2BtJwGFsm9vDLLdx1jidqFHgq0OukncRKw6iBACP8R85Pg%2FawRUfy1bnIngK%2BvAYWMXbUG1fMMWP77wGOqUBXUW4tuEMi%2BkHqZdY28%2B7%2FDMdMvc5KQFmhDI%2BHxRNJRL1T2buJrQorkV94vqr4iszc4OzT%2FYLSOL7xzKsmCzTL32k6ZJmzgd3Cm3oGOqUBDnVvhtmdBBr8wwXHWoBIImODVLxUBJtXVkJ2YATfJ5ORkg9zBxa4Ll%2FbQ4Ofw6Fb7JIz1ExROSfay52sXcj989%2F87QrgptVfYdBv%2FWXqcyNKwmBo3kf&X-Amz-Signature=f4349170aa490592d386d11be27c712ed9b6777f2a631dd6c3d3956f0bd88923&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637FJVPV5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDHDdK5FKVVTqtNMpZPA%2B9ib506ZwUjFscs6N9IjTRbQIgC6EooQAMIAgnmW%2FxpdlILgBPFK0d06xS8uSnupk2GBsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5CC7ma3%2BOARoZHEyrcA1nPrP4g6P62bJOeVN7%2BB5Ts%2B17dT%2BqdSo%2F%2BDPT0kkeRuQOJYHlyC9N45cdF0Pv4Z7va4OLUG%2FD3Ju1kkMvM3i3oz1Q9BhnY1wH4BiPlt%2FN83ZCRT0%2FhsVh0BToVh3tbSLR%2FG1K7URQc%2Bk1utrny2kdYwBgEojJuuilYiz1PH7SjPm%2FFDwWKoTU%2B7EpzPPAdusrnOzftI1bXLWJ2hC4tdb%2FKCQ678k7ZTqjWnHEOnsM50JoC6Rt9DMmGk6waJ0y6phagdJ0lDrmPDxX9mngtfRsVtb2sTt9GDh82V%2FwVgegytSECW8vCAJ72aMyqaEBAvCbQZRdSk85ZDnYKGy5mrsNENsCn3IwA0wJzZplr%2FMAn7CnyJgguSoS2MryyJ%2FvEknmzOe%2FyK3QVNSgp2fOWLRtDfWhcbm6NeBPYa6BZjozry7jQyIXo01bhLQwvY7P%2FcNY%2FfxfuyQqoDytoiBcPBR8jkM%2BslzbB92PgvvsGXiEHefk8DQZEAe9Y9jhYIms62UkOYlvOf39WE9VyqKwMM5jy2%2FUqrHFXOWlVM2Us67fXiiELgFaJq%2BtJwGFsm9vDLLdx1jidqFHgq0OukncRKw6iBACP8R85Pg%2FawRUfy1bnIngK%2BvAYWMXbUG1fMMWP77wGOqUBXUW4tuEMi%2BkHqZdY28%2B7%2FDMdMvc5KQFmhDI%2BHxRNJRL1T2buJrQorkV94vqr4iszc4OzT%2FYLSOL7xzKsmCzTL32k6ZJmzgd3Cm3oGOqUBDnVvhtmdBBr8wwXHWoBIImODVLxUBJtXVkJ2YATfJ5ORkg9zBxa4Ll%2FbQ4Ofw6Fb7JIz1ExROSfay52sXcj989%2F87QrgptVfYdBv%2FWXqcyNKwmBo3kf&X-Amz-Signature=c056c799509b5366e0627610fad99535937f0c9b91d89b41c29d2582de8822e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637FJVPV5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDHDdK5FKVVTqtNMpZPA%2B9ib506ZwUjFscs6N9IjTRbQIgC6EooQAMIAgnmW%2FxpdlILgBPFK0d06xS8uSnupk2GBsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5CC7ma3%2BOARoZHEyrcA1nPrP4g6P62bJOeVN7%2BB5Ts%2B17dT%2BqdSo%2F%2BDPT0kkeRuQOJYHlyC9N45cdF0Pv4Z7va4OLUG%2FD3Ju1kkMvM3i3oz1Q9BhnY1wH4BiPlt%2FN83ZCRT0%2FhsVh0BToVh3tbSLR%2FG1K7URQc%2Bk1utrny2kdYwBgEojJuuilYiz1PH7SjPm%2FFDwWKoTU%2B7EpzPPAdusrnOzftI1bXLWJ2hC4tdb%2FKCQ678k7ZTqjWnHEOnsM50JoC6Rt9DMmGk6waJ0y6phagdJ0lDrmPDxX9mngtfRsVtb2sTt9GDh82V%2FwVgegytSECW8vCAJ72aMyqaEBAvCbQZRdSk85ZDnYKGy5mrsNENsCn3IwA0wJzZplr%2FMAn7CnyJgguSoS2MryyJ%2FvEknmzOe%2FyK3QVNSgp2fOWLRtDfWhcbm6NeBPYa6BZjozry7jQyIXo01bhLQwvY7P%2FcNY%2FfxfuyQqoDytoiBcPBR8jkM%2BslzbB92PgvvsGXiEHefk8DQZEAe9Y9jhYIms62UkOYlvOf39WE9VyqKwMM5jy2%2FUqrHFXOWlVM2Us67fXiiELgFaJq%2BtJwGFsm9vDLLdx1jidqFHgq0OukncRKw6iBACP8R85Pg%2FawRUfy1bnIngK%2BvAYWMXbUG1fMMWP77wGOqUBXUW4tuEMi%2BkHqZdY28%2B7%2FDMdMvc5KQFmhDI%2BHxRNJRL1T2buJrQorkV94vqr4iszc4OzT%2FYLSOL7xzKsmCzTL32k6ZJmzgd3Cm3oGOqUBDnVvhtmdBBr8wwXHWoBIImODVLxUBJtXVkJ2YATfJ5ORkg9zBxa4Ll%2FbQ4Ofw6Fb7JIz1ExROSfay52sXcj989%2F87QrgptVfYdBv%2FWXqcyNKwmBo3kf&X-Amz-Signature=52922a442eaaeff80b5eb4ab85e3e0327c34ccfc83494de139537009eb9d7097&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637FJVPV5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDHDdK5FKVVTqtNMpZPA%2B9ib506ZwUjFscs6N9IjTRbQIgC6EooQAMIAgnmW%2FxpdlILgBPFK0d06xS8uSnupk2GBsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5CC7ma3%2BOARoZHEyrcA1nPrP4g6P62bJOeVN7%2BB5Ts%2B17dT%2BqdSo%2F%2BDPT0kkeRuQOJYHlyC9N45cdF0Pv4Z7va4OLUG%2FD3Ju1kkMvM3i3oz1Q9BhnY1wH4BiPlt%2FN83ZCRT0%2FhsVh0BToVh3tbSLR%2FG1K7URQc%2Bk1utrny2kdYwBgEojJuuilYiz1PH7SjPm%2FFDwWKoTU%2B7EpzPPAdusrnOzftI1bXLWJ2hC4tdb%2FKCQ678k7ZTqjWnHEOnsM50JoC6Rt9DMmGk6waJ0y6phagdJ0lDrmPDxX9mngtfRsVtb2sTt9GDh82V%2FwVgegytSECW8vCAJ72aMyqaEBAvCbQZRdSk85ZDnYKGy5mrsNENsCn3IwA0wJzZplr%2FMAn7CnyJgguSoS2MryyJ%2FvEknmzOe%2FyK3QVNSgp2fOWLRtDfWhcbm6NeBPYa6BZjozry7jQyIXo01bhLQwvY7P%2FcNY%2FfxfuyQqoDytoiBcPBR8jkM%2BslzbB92PgvvsGXiEHefk8DQZEAe9Y9jhYIms62UkOYlvOf39WE9VyqKwMM5jy2%2FUqrHFXOWlVM2Us67fXiiELgFaJq%2BtJwGFsm9vDLLdx1jidqFHgq0OukncRKw6iBACP8R85Pg%2FawRUfy1bnIngK%2BvAYWMXbUG1fMMWP77wGOqUBXUW4tuEMi%2BkHqZdY28%2B7%2FDMdMvc5KQFmhDI%2BHxRNJRL1T2buJrQorkV94vqr4iszc4OzT%2FYLSOL7xzKsmCzTL32k6ZJmzgd3Cm3oGOqUBDnVvhtmdBBr8wwXHWoBIImODVLxUBJtXVkJ2YATfJ5ORkg9zBxa4Ll%2FbQ4Ofw6Fb7JIz1ExROSfay52sXcj989%2F87QrgptVfYdBv%2FWXqcyNKwmBo3kf&X-Amz-Signature=64dcc62241e4d0627f8a9be71d6088e1bda488a4b6d6a8528aab774882654952&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637FJVPV5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDHDdK5FKVVTqtNMpZPA%2B9ib506ZwUjFscs6N9IjTRbQIgC6EooQAMIAgnmW%2FxpdlILgBPFK0d06xS8uSnupk2GBsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5CC7ma3%2BOARoZHEyrcA1nPrP4g6P62bJOeVN7%2BB5Ts%2B17dT%2BqdSo%2F%2BDPT0kkeRuQOJYHlyC9N45cdF0Pv4Z7va4OLUG%2FD3Ju1kkMvM3i3oz1Q9BhnY1wH4BiPlt%2FN83ZCRT0%2FhsVh0BToVh3tbSLR%2FG1K7URQc%2Bk1utrny2kdYwBgEojJuuilYiz1PH7SjPm%2FFDwWKoTU%2B7EpzPPAdusrnOzftI1bXLWJ2hC4tdb%2FKCQ678k7ZTqjWnHEOnsM50JoC6Rt9DMmGk6waJ0y6phagdJ0lDrmPDxX9mngtfRsVtb2sTt9GDh82V%2FwVgegytSECW8vCAJ72aMyqaEBAvCbQZRdSk85ZDnYKGy5mrsNENsCn3IwA0wJzZplr%2FMAn7CnyJgguSoS2MryyJ%2FvEknmzOe%2FyK3QVNSgp2fOWLRtDfWhcbm6NeBPYa6BZjozry7jQyIXo01bhLQwvY7P%2FcNY%2FfxfuyQqoDytoiBcPBR8jkM%2BslzbB92PgvvsGXiEHefk8DQZEAe9Y9jhYIms62UkOYlvOf39WE9VyqKwMM5jy2%2FUqrHFXOWlVM2Us67fXiiELgFaJq%2BtJwGFsm9vDLLdx1jidqFHgq0OukncRKw6iBACP8R85Pg%2FawRUfy1bnIngK%2BvAYWMXbUG1fMMWP77wGOqUBXUW4tuEMi%2BkHqZdY28%2B7%2FDMdMvc5KQFmhDI%2BHxRNJRL1T2buJrQorkV94vqr4iszc4OzT%2FYLSOL7xzKsmCzTL32k6ZJmzgd3Cm3oGOqUBDnVvhtmdBBr8wwXHWoBIImODVLxUBJtXVkJ2YATfJ5ORkg9zBxa4Ll%2FbQ4Ofw6Fb7JIz1ExROSfay52sXcj989%2F87QrgptVfYdBv%2FWXqcyNKwmBo3kf&X-Amz-Signature=50fda33effda8f2dc37cd31afe4356434735fd19e94cf50e8a52834d97bad05e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637FJVPV5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDHDdK5FKVVTqtNMpZPA%2B9ib506ZwUjFscs6N9IjTRbQIgC6EooQAMIAgnmW%2FxpdlILgBPFK0d06xS8uSnupk2GBsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI5CC7ma3%2BOARoZHEyrcA1nPrP4g6P62bJOeVN7%2BB5Ts%2B17dT%2BqdSo%2F%2BDPT0kkeRuQOJYHlyC9N45cdF0Pv4Z7va4OLUG%2FD3Ju1kkMvM3i3oz1Q9BhnY1wH4BiPlt%2FN83ZCRT0%2FhsVh0BToVh3tbSLR%2FG1K7URQc%2Bk1utrny2kdYwBgEojJuuilYiz1PH7SjPm%2FFDwWKoTU%2B7EpzPPAdusrnOzftI1bXLWJ2hC4tdb%2FKCQ678k7ZTqjWnHEOnsM50JoC6Rt9DMmGk6waJ0y6phagdJ0lDrmPDxX9mngtfRsVtb2sTt9GDh82V%2FwVgegytSECW8vCAJ72aMyqaEBAvCbQZRdSk85ZDnYKGy5mrsNENsCn3IwA0wJzZplr%2FMAn7CnyJgguSoS2MryyJ%2FvEknmzOe%2FyK3QVNSgp2fOWLRtDfWhcbm6NeBPYa6BZjozry7jQyIXo01bhLQwvY7P%2FcNY%2FfxfuyQqoDytoiBcPBR8jkM%2BslzbB92PgvvsGXiEHefk8DQZEAe9Y9jhYIms62UkOYlvOf39WE9VyqKwMM5jy2%2FUqrHFXOWlVM2Us67fXiiELgFaJq%2BtJwGFsm9vDLLdx1jidqFHgq0OukncRKw6iBACP8R85Pg%2FawRUfy1bnIngK%2BvAYWMXbUG1fMMWP77wGOqUBXUW4tuEMi%2BkHqZdY28%2B7%2FDMdMvc5KQFmhDI%2BHxRNJRL1T2buJrQorkV94vqr4iszc4OzT%2FYLSOL7xzKsmCzTL32k6ZJmzgd3Cm3oGOqUBDnVvhtmdBBr8wwXHWoBIImODVLxUBJtXVkJ2YATfJ5ORkg9zBxa4Ll%2FbQ4Ofw6Fb7JIz1ExROSfay52sXcj989%2F87QrgptVfYdBv%2FWXqcyNKwmBo3kf&X-Amz-Signature=0f1393c29451e8845b6592761cbe1e89c6272c196b6a262b0766f4222b92e5f3&X-Amz-SignedHeaders=host&x-id=GetObject)
