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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E274OML%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGoA7HtLle6Sl1FbiMS%2B0rO%2BTR3GZfVloofiNdOVTwAiEA03QJhj7qWGdbjDhq6gAsRqmyzD957SVPpbywy%2FDa%2FKsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDaGwSJA0fDK5HWTOSrcA7hKMcUBSHSojxdtTv%2BwfWOQmO9Pe%2B3p4lu0oZLQvdBeQUFP13TZX7faHTm2NV33xnCLSxvbOTMVSzJQ6uq5GpuMi%2Boz1N36eDBNMhs0D%2BpWcRicPbrhWDBWCAi74jTJfFx%2F6EHXBQvhmMmFq42ECzsi1WCn3CGG3rxdJvKy%2BQCn%2F6a5icPfOzwTiUrfSaFQLgaqptwwJtgWWDxXNka%2Bt%2Fa8AGX%2FChQnitTZCBdaHyMnxSq5rLG6BvTZEXTdObD6ok6k81oAPQxDrICd%2FkMZYDDXf7T6BQQpI2PIvp8x68XAG%2FAvzNWMeMBuyYmiv9R1x7Y6UrIdpGgyrz1Wd5TyH5i%2FQeyb57SZXDRY8hVN0rS%2BuiO%2BEzin1g4UrhofpAX3i9cYSeivr40qnmimBSIlXFwoD%2FRzemM%2BdI0dDBZ2tu835pRbn4oPC9SKqD%2F1Okt7DU9TtRcHVpJbleY4lPquFmjWxEpCPHoqzg4lwAxwIP0x1bUupyWf1eiGKwv6KsYMnD9lED0Qb6aYMVGsKxbwUbwaL7yBTELg84b0x8zChDYuFmWSneNKPcwfc5rmed3euB%2FuPsMMJXrNarvPZyoeuy8IIoFw%2BxNvOtESt95psnZcIMWERCEi5Xa674qBMNfXkL8GOqUBPutFEIZ2lPgj1vYRiFhWBPztbygA%2FBc%2BQMHDhFthMC4YhA2Ul7l9t5bAhUeQvwY40HOumRhZpYPo0p2Xi4ZIxB58FDHezfGj3JGtghzmWfhQsaYnSIbLsDP%2B5d2LRsjqD4UWRvnONxH5STxZODlws3Xqzp846lcg7FYe7R0VlMid3L0S%2FMwc8ySOOK8ej0UjaXveliceh8ADKjqplN%2FAc8qKkPMr&X-Amz-Signature=f5c9f09b3f91f590dd636a80fe172f6922af78608460477e744b39f0d503b132&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E274OML%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGoA7HtLle6Sl1FbiMS%2B0rO%2BTR3GZfVloofiNdOVTwAiEA03QJhj7qWGdbjDhq6gAsRqmyzD957SVPpbywy%2FDa%2FKsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDaGwSJA0fDK5HWTOSrcA7hKMcUBSHSojxdtTv%2BwfWOQmO9Pe%2B3p4lu0oZLQvdBeQUFP13TZX7faHTm2NV33xnCLSxvbOTMVSzJQ6uq5GpuMi%2Boz1N36eDBNMhs0D%2BpWcRicPbrhWDBWCAi74jTJfFx%2F6EHXBQvhmMmFq42ECzsi1WCn3CGG3rxdJvKy%2BQCn%2F6a5icPfOzwTiUrfSaFQLgaqptwwJtgWWDxXNka%2Bt%2Fa8AGX%2FChQnitTZCBdaHyMnxSq5rLG6BvTZEXTdObD6ok6k81oAPQxDrICd%2FkMZYDDXf7T6BQQpI2PIvp8x68XAG%2FAvzNWMeMBuyYmiv9R1x7Y6UrIdpGgyrz1Wd5TyH5i%2FQeyb57SZXDRY8hVN0rS%2BuiO%2BEzin1g4UrhofpAX3i9cYSeivr40qnmimBSIlXFwoD%2FRzemM%2BdI0dDBZ2tu835pRbn4oPC9SKqD%2F1Okt7DU9TtRcHVpJbleY4lPquFmjWxEpCPHoqzg4lwAxwIP0x1bUupyWf1eiGKwv6KsYMnD9lED0Qb6aYMVGsKxbwUbwaL7yBTELg84b0x8zChDYuFmWSneNKPcwfc5rmed3euB%2FuPsMMJXrNarvPZyoeuy8IIoFw%2BxNvOtESt95psnZcIMWERCEi5Xa674qBMNfXkL8GOqUBPutFEIZ2lPgj1vYRiFhWBPztbygA%2FBc%2BQMHDhFthMC4YhA2Ul7l9t5bAhUeQvwY40HOumRhZpYPo0p2Xi4ZIxB58FDHezfGj3JGtghzmWfhQsaYnSIbLsDP%2B5d2LRsjqD4UWRvnONxH5STxZODlws3Xqzp846lcg7FYe7R0VlMid3L0S%2FMwc8ySOOK8ej0UjaXveliceh8ADKjqplN%2FAc8qKkPMr&X-Amz-Signature=387c99ede10de23578886d24e01db0a80cca521ef0f84bedff91ac76e03ab52e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E274OML%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGoA7HtLle6Sl1FbiMS%2B0rO%2BTR3GZfVloofiNdOVTwAiEA03QJhj7qWGdbjDhq6gAsRqmyzD957SVPpbywy%2FDa%2FKsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDaGwSJA0fDK5HWTOSrcA7hKMcUBSHSojxdtTv%2BwfWOQmO9Pe%2B3p4lu0oZLQvdBeQUFP13TZX7faHTm2NV33xnCLSxvbOTMVSzJQ6uq5GpuMi%2Boz1N36eDBNMhs0D%2BpWcRicPbrhWDBWCAi74jTJfFx%2F6EHXBQvhmMmFq42ECzsi1WCn3CGG3rxdJvKy%2BQCn%2F6a5icPfOzwTiUrfSaFQLgaqptwwJtgWWDxXNka%2Bt%2Fa8AGX%2FChQnitTZCBdaHyMnxSq5rLG6BvTZEXTdObD6ok6k81oAPQxDrICd%2FkMZYDDXf7T6BQQpI2PIvp8x68XAG%2FAvzNWMeMBuyYmiv9R1x7Y6UrIdpGgyrz1Wd5TyH5i%2FQeyb57SZXDRY8hVN0rS%2BuiO%2BEzin1g4UrhofpAX3i9cYSeivr40qnmimBSIlXFwoD%2FRzemM%2BdI0dDBZ2tu835pRbn4oPC9SKqD%2F1Okt7DU9TtRcHVpJbleY4lPquFmjWxEpCPHoqzg4lwAxwIP0x1bUupyWf1eiGKwv6KsYMnD9lED0Qb6aYMVGsKxbwUbwaL7yBTELg84b0x8zChDYuFmWSneNKPcwfc5rmed3euB%2FuPsMMJXrNarvPZyoeuy8IIoFw%2BxNvOtESt95psnZcIMWERCEi5Xa674qBMNfXkL8GOqUBPutFEIZ2lPgj1vYRiFhWBPztbygA%2FBc%2BQMHDhFthMC4YhA2Ul7l9t5bAhUeQvwY40HOumRhZpYPo0p2Xi4ZIxB58FDHezfGj3JGtghzmWfhQsaYnSIbLsDP%2B5d2LRsjqD4UWRvnONxH5STxZODlws3Xqzp846lcg7FYe7R0VlMid3L0S%2FMwc8ySOOK8ej0UjaXveliceh8ADKjqplN%2FAc8qKkPMr&X-Amz-Signature=98291cd64458b4d18c482964893bc6fc0c8b26af4ba9503d48775b393ab16f91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E274OML%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGoA7HtLle6Sl1FbiMS%2B0rO%2BTR3GZfVloofiNdOVTwAiEA03QJhj7qWGdbjDhq6gAsRqmyzD957SVPpbywy%2FDa%2FKsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDaGwSJA0fDK5HWTOSrcA7hKMcUBSHSojxdtTv%2BwfWOQmO9Pe%2B3p4lu0oZLQvdBeQUFP13TZX7faHTm2NV33xnCLSxvbOTMVSzJQ6uq5GpuMi%2Boz1N36eDBNMhs0D%2BpWcRicPbrhWDBWCAi74jTJfFx%2F6EHXBQvhmMmFq42ECzsi1WCn3CGG3rxdJvKy%2BQCn%2F6a5icPfOzwTiUrfSaFQLgaqptwwJtgWWDxXNka%2Bt%2Fa8AGX%2FChQnitTZCBdaHyMnxSq5rLG6BvTZEXTdObD6ok6k81oAPQxDrICd%2FkMZYDDXf7T6BQQpI2PIvp8x68XAG%2FAvzNWMeMBuyYmiv9R1x7Y6UrIdpGgyrz1Wd5TyH5i%2FQeyb57SZXDRY8hVN0rS%2BuiO%2BEzin1g4UrhofpAX3i9cYSeivr40qnmimBSIlXFwoD%2FRzemM%2BdI0dDBZ2tu835pRbn4oPC9SKqD%2F1Okt7DU9TtRcHVpJbleY4lPquFmjWxEpCPHoqzg4lwAxwIP0x1bUupyWf1eiGKwv6KsYMnD9lED0Qb6aYMVGsKxbwUbwaL7yBTELg84b0x8zChDYuFmWSneNKPcwfc5rmed3euB%2FuPsMMJXrNarvPZyoeuy8IIoFw%2BxNvOtESt95psnZcIMWERCEi5Xa674qBMNfXkL8GOqUBPutFEIZ2lPgj1vYRiFhWBPztbygA%2FBc%2BQMHDhFthMC4YhA2Ul7l9t5bAhUeQvwY40HOumRhZpYPo0p2Xi4ZIxB58FDHezfGj3JGtghzmWfhQsaYnSIbLsDP%2B5d2LRsjqD4UWRvnONxH5STxZODlws3Xqzp846lcg7FYe7R0VlMid3L0S%2FMwc8ySOOK8ej0UjaXveliceh8ADKjqplN%2FAc8qKkPMr&X-Amz-Signature=8533e3a363905d1506aa7f5f27991f3bb18770143514c260adfbb0f94f9116df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E274OML%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGoA7HtLle6Sl1FbiMS%2B0rO%2BTR3GZfVloofiNdOVTwAiEA03QJhj7qWGdbjDhq6gAsRqmyzD957SVPpbywy%2FDa%2FKsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDaGwSJA0fDK5HWTOSrcA7hKMcUBSHSojxdtTv%2BwfWOQmO9Pe%2B3p4lu0oZLQvdBeQUFP13TZX7faHTm2NV33xnCLSxvbOTMVSzJQ6uq5GpuMi%2Boz1N36eDBNMhs0D%2BpWcRicPbrhWDBWCAi74jTJfFx%2F6EHXBQvhmMmFq42ECzsi1WCn3CGG3rxdJvKy%2BQCn%2F6a5icPfOzwTiUrfSaFQLgaqptwwJtgWWDxXNka%2Bt%2Fa8AGX%2FChQnitTZCBdaHyMnxSq5rLG6BvTZEXTdObD6ok6k81oAPQxDrICd%2FkMZYDDXf7T6BQQpI2PIvp8x68XAG%2FAvzNWMeMBuyYmiv9R1x7Y6UrIdpGgyrz1Wd5TyH5i%2FQeyb57SZXDRY8hVN0rS%2BuiO%2BEzin1g4UrhofpAX3i9cYSeivr40qnmimBSIlXFwoD%2FRzemM%2BdI0dDBZ2tu835pRbn4oPC9SKqD%2F1Okt7DU9TtRcHVpJbleY4lPquFmjWxEpCPHoqzg4lwAxwIP0x1bUupyWf1eiGKwv6KsYMnD9lED0Qb6aYMVGsKxbwUbwaL7yBTELg84b0x8zChDYuFmWSneNKPcwfc5rmed3euB%2FuPsMMJXrNarvPZyoeuy8IIoFw%2BxNvOtESt95psnZcIMWERCEi5Xa674qBMNfXkL8GOqUBPutFEIZ2lPgj1vYRiFhWBPztbygA%2FBc%2BQMHDhFthMC4YhA2Ul7l9t5bAhUeQvwY40HOumRhZpYPo0p2Xi4ZIxB58FDHezfGj3JGtghzmWfhQsaYnSIbLsDP%2B5d2LRsjqD4UWRvnONxH5STxZODlws3Xqzp846lcg7FYe7R0VlMid3L0S%2FMwc8ySOOK8ej0UjaXveliceh8ADKjqplN%2FAc8qKkPMr&X-Amz-Signature=4eb5248502f93af1b2de695fc84473ba13cdb6aac84437711da1dc09a71d46c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E274OML%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRGoA7HtLle6Sl1FbiMS%2B0rO%2BTR3GZfVloofiNdOVTwAiEA03QJhj7qWGdbjDhq6gAsRqmyzD957SVPpbywy%2FDa%2FKsq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDaGwSJA0fDK5HWTOSrcA7hKMcUBSHSojxdtTv%2BwfWOQmO9Pe%2B3p4lu0oZLQvdBeQUFP13TZX7faHTm2NV33xnCLSxvbOTMVSzJQ6uq5GpuMi%2Boz1N36eDBNMhs0D%2BpWcRicPbrhWDBWCAi74jTJfFx%2F6EHXBQvhmMmFq42ECzsi1WCn3CGG3rxdJvKy%2BQCn%2F6a5icPfOzwTiUrfSaFQLgaqptwwJtgWWDxXNka%2Bt%2Fa8AGX%2FChQnitTZCBdaHyMnxSq5rLG6BvTZEXTdObD6ok6k81oAPQxDrICd%2FkMZYDDXf7T6BQQpI2PIvp8x68XAG%2FAvzNWMeMBuyYmiv9R1x7Y6UrIdpGgyrz1Wd5TyH5i%2FQeyb57SZXDRY8hVN0rS%2BuiO%2BEzin1g4UrhofpAX3i9cYSeivr40qnmimBSIlXFwoD%2FRzemM%2BdI0dDBZ2tu835pRbn4oPC9SKqD%2F1Okt7DU9TtRcHVpJbleY4lPquFmjWxEpCPHoqzg4lwAxwIP0x1bUupyWf1eiGKwv6KsYMnD9lED0Qb6aYMVGsKxbwUbwaL7yBTELg84b0x8zChDYuFmWSneNKPcwfc5rmed3euB%2FuPsMMJXrNarvPZyoeuy8IIoFw%2BxNvOtESt95psnZcIMWERCEi5Xa674qBMNfXkL8GOqUBPutFEIZ2lPgj1vYRiFhWBPztbygA%2FBc%2BQMHDhFthMC4YhA2Ul7l9t5bAhUeQvwY40HOumRhZpYPo0p2Xi4ZIxB58FDHezfGj3JGtghzmWfhQsaYnSIbLsDP%2B5d2LRsjqD4UWRvnONxH5STxZODlws3Xqzp846lcg7FYe7R0VlMid3L0S%2FMwc8ySOOK8ej0UjaXveliceh8ADKjqplN%2FAc8qKkPMr&X-Amz-Signature=0ea750911a76416676036c09bb6007330839b74755d6ddd24bfe8b175bca1d9d&X-Amz-SignedHeaders=host&x-id=GetObject)
